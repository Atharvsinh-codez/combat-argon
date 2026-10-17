import * as THREE from 'three';
import { SeededRandom } from '../core/SeededRandom';
import { MaterialId } from '../physics/BVH';

// Must not alias a scratch matrix: inactive pool slots would inherit the last composed transform
const ZERO_SCALE_MATRIX = new THREE.Matrix4().makeScale(0, 0, 0);

interface PooledParticle {
  active: boolean;
  kind: 'chip' | 'spark' | 'smoke';
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  color: THREE.Color;
  size: number;
  endSize: number;
  age: number;
  lifetime: number;
  gravity: number;
  drag: number;
}

interface PooledTracer {
  active: boolean;
  start: THREE.Vector3;
  end: THREE.Vector3;
  age: number;
  lifetime: number;
}

/**
 * Pooled GPU-friendly Particle, Smoke, Tracer, and Persistent Decal System
 */
export class EffectsSystem {
  public group = new THREE.Group();

  private maxParticles = 320;
  private particles: PooledParticle[] = [];
  private particleCursor = 0;
  private chipInstanced!: THREE.InstancedMesh;
  private smokeInstanced!: THREE.InstancedMesh;

  private maxDecals = 120;
  private decalCursor = 0;
  private decalInstanced!: THREE.InstancedMesh;

  private maxTracers = 24;
  private tracers: PooledTracer[] = [];
  private tracerCursor = 0;
  private tracerMeshes: THREE.Mesh[] = [];

  private _mat4 = new THREE.Matrix4();
  private _quat = new THREE.Quaternion();
  private _scale = new THREE.Vector3();
  private _up = new THREE.Vector3(0, 0, 1);
  private _dir = new THREE.Vector3();
  private _mid = new THREE.Vector3();

  constructor(
    scene: THREE.Scene,
    private rng: SeededRandom,
    maxDecals = 120
  ) {
    this.maxDecals = maxDecals;
    this.group.name = 'EffectsSystem';
    this.initParticlePools();
    this.initDecalPool();
    this.initTracerPool();
    scene.add(this.group);
  }

  private initParticlePools(): void {
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        active: false,
        kind: 'chip',
        position: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        color: new THREE.Color(1, 1, 1),
        size: 0.04,
        endSize: 0.01,
        age: 0,
        lifetime: 0.5,
        gravity: 9.8,
        drag: 1.0
      });
    }

    const chipGeo = new THREE.DodecahedronGeometry(0.5, 0);
    const chipMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.chipInstanced = new THREE.InstancedMesh(chipGeo, chipMat, this.maxParticles);
    this.chipInstanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.chipInstanced.frustumCulled = false;

    // Soft radial smoke/dust puff texture generated procedurally
    const size = 64;
    const data = new Uint8Array(size * size * 4);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dx = (x / (size - 1)) * 2 - 1;
        const dy = (y / (size - 1)) * 2 - 1;
        const r = Math.hypot(dx, dy);
        const n = SeededRandom.valueNoise2D(x * 0.18, y * 0.18, 99);
        // Smoothstep falloff that reaches zero well inside the quad, so puffs read as soft
        // cloudlets instead of hard-edged discs
        const edge = Math.max(0, Math.min(1, 1 - r * (1.05 + n * 0.3)));
        const alpha = edge * edge * (3 - 2 * edge);
        const aByte = Math.round(alpha * 150);
        const i4 = (y * size + x) * 4;
        data[i4] = 242;
        data[i4 + 1] = 232;
        data[i4 + 2] = 214;
        data[i4 + 3] = aByte;
      }
    }
    const puffTex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    puffTex.needsUpdate = true;

    const smokeGeo = new THREE.PlaneGeometry(1, 1);
    const smokeMat = new THREE.MeshBasicMaterial({
      map: puffTex,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    // Unlit puffs otherwise glow brighter than the sunlit walls behind them
    smokeMat.color.setScalar(0.72);
    this.smokeInstanced = new THREE.InstancedMesh(smokeGeo, smokeMat, this.maxParticles);
    this.smokeInstanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.smokeInstanced.frustumCulled = false;

    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    const white = new THREE.Color(1, 1, 1);
    for (let i = 0; i < this.maxParticles; i++) {
      this.chipInstanced.setMatrixAt(i, zero);
      this.chipInstanced.setColorAt(i, white);
      this.smokeInstanced.setMatrixAt(i, zero);
      this.smokeInstanced.setColorAt(i, white);
    }

    this.group.add(this.chipInstanced);
    this.group.add(this.smokeInstanced);
  }

  private initDecalPool(): void {
    // Procedural bullet crater + radial spall decal texture
    const size = 64;
    const data = new Uint8Array(size * size * 4);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dx = (x / (size - 1)) * 2 - 1;
        const dy = (y / (size - 1)) * 2 - 1;
        const r = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const jag = 0.72 + 0.28 * Math.sin(angle * 7.0) * Math.cos(angle * 5.0);
        const i4 = (y * size + x) * 4;

        if (r < 0.26 * jag) {
          // Dark bullet hole core
          data[i4] = 18;
          data[i4 + 1] = 16;
          data[i4 + 2] = 15;
          data[i4 + 3] = 240;
        } else if (r < 0.68 * jag) {
          // Pale chipped spall rim
          const fade = 1 - (r - 0.26 * jag) / (0.42 * jag);
          data[i4] = 135;
          data[i4 + 1] = 124;
          data[i4 + 2] = 108;
          data[i4 + 3] = Math.round(fade * 175);
        } else {
          data[i4 + 3] = 0;
        }
      }
    }

    const decalTex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    decalTex.needsUpdate = true;

    const geo = new THREE.PlaneGeometry(0.15, 0.15);
    const mat = new THREE.MeshBasicMaterial({
      map: decalTex,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2
    });

    this.decalInstanced = new THREE.InstancedMesh(geo, mat, this.maxDecals);
    this.decalInstanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.decalInstanced.frustumCulled = false;

    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < this.maxDecals; i++) {
      this.decalInstanced.setMatrixAt(i, zero);
    }
    this.decalInstanced.instanceMatrix.needsUpdate = true;
    this.group.add(this.decalInstanced);
  }

  private initTracerPool(): void {
    const geo = new THREE.CylinderGeometry(0.009, 0.004, 1.0, 6);
    geo.rotateX(Math.PI * 0.5);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffb85c,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    for (let i = 0; i < this.maxTracers; i++) {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      this.group.add(mesh);
      this.tracerMeshes.push(mesh);
      this.tracers.push({
        active: false,
        start: new THREE.Vector3(),
        end: new THREE.Vector3(),
        age: 0,
        lifetime: 0.055
      });
    }
  }

  private allocParticle(): PooledParticle {
    const p = this.particles[this.particleCursor];
    this.particleCursor = (this.particleCursor + 1) % this.maxParticles;
    return p;
  }

  public spawnBulletDecal(point: THREE.Vector3, normal: THREE.Vector3, scale = 1.0): void {
    const idx = this.decalCursor;
    this.decalCursor = (this.decalCursor + 1) % this.maxDecals;

    const offsetPt = point.clone().addScaledVector(normal, 0.008);
    this._quat.setFromUnitVectors(this._up, normal);
    const rotZ = new THREE.Quaternion().setFromAxisAngle(normal, this.rng.range(0, Math.PI * 2));
    this._quat.premultiply(rotZ);

    const s = scale * this.rng.range(0.85, 1.25);
    this._scale.set(s, s, s);
    this._mat4.compose(offsetPt, this._quat, this._scale);
    this.decalInstanced.setMatrixAt(idx, this._mat4);
    this.decalInstanced.instanceMatrix.needsUpdate = true;
  }

  public spawnTracer(start: THREE.Vector3, end: THREE.Vector3): void {
    const idx = this.tracerCursor;
    this.tracerCursor = (this.tracerCursor + 1) % this.maxTracers;

    const t = this.tracers[idx];
    t.active = true;
    t.start.copy(start);
    t.end.copy(end);
    t.age = 0;
    t.lifetime = 0.055;

    const mesh = this.tracerMeshes[idx];
    mesh.visible = true;
    this._dir.subVectors(end, start);
    const dist = Math.min(18, this._dir.length());
    this._mid.copy(start).addScaledVector(this._dir.normalize(), Math.min(dist * 0.5, 6.0));
    mesh.position.copy(this._mid);
    mesh.lookAt(end);
    mesh.scale.set(1, 1, Math.min(6.5, dist * 0.55));
  }

  public spawnMuzzleGasAndSmoke(muzzlePos: THREE.Vector3, forward: THREE.Vector3, heat: number): void {
    //Expanding muzzle gas puff
    const p = this.allocParticle();
    p.active = true;
    p.kind = 'smoke';
    p.position.copy(muzzlePos).addScaledVector(forward, 0.08);
    p.velocity.copy(forward).multiplyScalar(1.4).add(new THREE.Vector3(0, 0.45, 0));
    p.color.setHex(0xd8cfc2);
    p.size = 0.09;
    p.endSize = 0.42 + heat * 0.25;
    p.age = 0;
    p.lifetime = 0.36 + heat * 0.28;
    p.gravity = -0.6;
    p.drag = 3.5;
  }

  public spawnSurfaceImpact(
    point: THREE.Vector3,
    normal: THREE.Vector3,
    materialId: MaterialId,
    isRicochet = false
  ): void {
    this.spawnBulletDecal(point, normal, materialId === MaterialId.METAL ? 0.72 : 1.05);

    // Determine surface-specific dust color & chip color
    let dustHex = 0xdccbb2; // Concrete/Plaster pale desert dust
    let chipHex = 0x9c8f7a;
    let isMetallic = false;

    if (materialId === MaterialId.BRICK) {
      dustHex = 0xc97b5d;
      chipHex = 0x8f4630;
    } else if (materialId === MaterialId.METAL || isRicochet) {
      dustHex = 0xb8bec4;
      chipHex = 0xffbc42; // Bright hot sparks!
      isMetallic = true;
    } else if (materialId === MaterialId.WOOD) {
      dustHex = 0xc6a67a;
      chipHex = 0x7d5832;
    } else if (materialId === MaterialId.ROAD || materialId === MaterialId.DIRT) {
      dustHex = 0xa89578;
      chipHex = 0x45413c;
    } else if (materialId === MaterialId.GLASS) {
      dustHex = 0xdcebf2;
      chipHex = 0xa8d0e6;
    }

    // 1. Expanding dust/smoke plumes
    const puffCount = isMetallic ? 2 : 4;
    for (let i = 0; i < puffCount; i++) {
      const p = this.allocParticle();
      p.active = true;
      p.kind = 'smoke';
      p.position.copy(point).addScaledVector(normal, 0.04);
      p.velocity
        .copy(normal)
        .multiplyScalar(this.rng.range(0.8, 2.4))
        .add(
          new THREE.Vector3(
            this.rng.signed() * 0.9,
            this.rng.range(0.2, 1.2),
            this.rng.signed() * 0.9
          )
        );
      p.color.setHex(dustHex);
      p.size = 0.14;
      p.endSize = this.rng.range(0.55, 0.95);
      p.age = 0;
      p.lifetime = this.rng.range(0.38, 0.72);
      p.gravity = -0.35;
      p.drag = 2.8;
    }

    // 2. High-velocity chips / splinters / sparks
    const chipCount = isMetallic ? 10 : 6;
    for (let i = 0; i < chipCount; i++) {
      const p = this.allocParticle();
      p.active = true;
      p.kind = isMetallic ? 'spark' : 'chip';
      p.position.copy(point).addScaledVector(normal, 0.03);
      p.velocity
        .copy(normal)
        .multiplyScalar(this.rng.range(2.8, 7.5))
        .add(
          new THREE.Vector3(
            this.rng.signed() * 3.2,
            this.rng.range(0.8, 4.2),
            this.rng.signed() * 3.2
          )
        );
      p.color.setHex(chipHex);
      p.size = isMetallic ? 0.032 : 0.038;
      p.endSize = 0.005;
      p.age = 0;
      p.lifetime = this.rng.range(0.22, 0.48);
      p.gravity = 14.5;
      p.drag = 0.8;
    }
  }

  public spawnExplosionEffect(center: THREE.Vector3, type: 'frag' | 'flash'): void {
    const count = type === 'frag' ? 28 : 16;
    for (let i = 0; i < count; i++) {
      const p = this.allocParticle();
      p.active = true;
      p.kind = i % 2 === 0 ? 'smoke' : 'spark';
      p.position.copy(center);
      p.velocity.set(
        this.rng.signed() * 8.5,
        this.rng.range(1.5, 9.5),
        this.rng.signed() * 8.5
      );
      p.color.setHex(
        type === 'flash'
          ? 0xffffff
          : i < 8
            ? 0xff9436
            : 0x6e655b
      );
      p.size = p.kind === 'smoke' ? 0.45 : 0.08;
      p.endSize = p.kind === 'smoke' ? 2.4 : 0.01;
      p.age = 0;
      p.lifetime = p.kind === 'smoke' ? 1.15 : 0.55;
      p.gravity = p.kind === 'smoke' ? -0.8 : 14.0;
      p.drag = p.kind === 'smoke' ? 2.2 : 0.6;
    }
  }

  public update(dt: number, camera: THREE.Camera): void {
    const zero = ZERO_SCALE_MATRIX;

    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.particles[i];
      if (!p.active) {
        this.chipInstanced.setMatrixAt(i, zero);
        this.smokeInstanced.setMatrixAt(i, zero);
        continue;
      }

      p.age += dt;
      if (p.age >= p.lifetime) {
        p.active = false;
        this.chipInstanced.setMatrixAt(i, zero);
        this.smokeInstanced.setMatrixAt(i, zero);
        continue;
      }

      const t = p.age / p.lifetime;
      p.velocity.y -= p.gravity * dt;
      p.velocity.multiplyScalar(Math.max(0, 1 - p.drag * dt));
      // Subtle wind curl on smoke
      if (p.kind === 'smoke') {
        p.velocity.x += Math.sin(p.age * 6 + i) * 0.4 * dt;
      }
      p.position.addScaledVector(p.velocity, dt);
      if (p.position.y < 0.02) {
        p.position.y = 0.02;
        p.velocity.y *= -0.35;
      }

      const curSize = THREE.MathUtils.lerp(p.size, p.endSize, t);
      this._scale.set(curSize, curSize, curSize);

      if (p.kind === 'smoke') {
        this._quat.copy(camera.quaternion);
        this._mat4.compose(p.position, this._quat, this._scale);
        this.smokeInstanced.setMatrixAt(i, this._mat4);
        this.smokeInstanced.setColorAt(i, p.color);
        this.chipInstanced.setMatrixAt(i, zero);
      } else {
        this._quat.identity();
        this._mat4.compose(p.position, this._quat, this._scale);
        this.chipInstanced.setMatrixAt(i, this._mat4);
        this.chipInstanced.setColorAt(i, p.color);
        this.smokeInstanced.setMatrixAt(i, zero);
      }
    }

    this.chipInstanced.instanceMatrix.needsUpdate = true;
    if (this.chipInstanced.instanceColor) this.chipInstanced.instanceColor.needsUpdate = true;
    this.smokeInstanced.instanceMatrix.needsUpdate = true;
    if (this.smokeInstanced.instanceColor) this.smokeInstanced.instanceColor.needsUpdate = true;

    // Update tracers
    for (let i = 0; i < this.maxTracers; i++) {
      const tr = this.tracers[i];
      if (!tr.active) continue;
      tr.age += dt;
      if (tr.age >= tr.lifetime) {
        tr.active = false;
        this.tracerMeshes[i].visible = false;
      }
    }
  }

  public getActiveParticleCount(): number {
    let c = 0;
    for (let i = 0; i < this.maxParticles; i++) {
      if (this.particles[i].active) c++;
    }
    return c;
  }
}
