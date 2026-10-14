import * as THREE from 'three';
import { BVH, MaterialId } from './BVH';

export type RigidShapeType = 'sphere' | 'box' | 'capsule';

export interface RigidBody {
  id: number;
  active: boolean;
  shape: RigidShapeType;
  position: THREE.Vector3;
  prevPosition: THREE.Vector3;
  quaternion: THREE.Quaternion;
  prevQuaternion: THREE.Quaternion;
  velocity: THREE.Vector3;
  angularVelocity: THREE.Vector3;
  halfExtents: THREE.Vector3; // for box; x = radius for sphere/capsule; y = halfHeight for capsule
  radius: number; // bounding sphere radius
  mass: number;
  invMass: number;
  invInertia: number;
  restitution: number;
  friction: number;
  materialId: MaterialId;
  useCCD: boolean;
  sleeping: boolean;
  sleepTimer: number;
  age: number;
  maxLifetime: number; // 0 = permanent prop
  isCasing: boolean;
  isThrowable: boolean;
  throwableType?: 'frag' | 'flash';
  mesh?: THREE.Object3D;
  bounceCount: number;
}

export type CollisionSoundCallback = (
  point: THREE.Vector3,
  speed: number,
  bodyMat: MaterialId,
  surfaceMat: MaterialId,
  isCasing: boolean
) => void;

export type ThrowableDetonateCallback = (
  point: THREE.Vector3,
  type: 'frag' | 'flash'
) => void;

export class RigidWorld {
  public bodies: RigidBody[] = [];
  private nextId = 1;
  private casingPool: RigidBody[] = [];
  public casingInstancedMesh!: THREE.InstancedMesh;
  private maxCasings = 60;
  private casingCursor = 0;

  public onCollisionSound?: CollisionSoundCallback;
  public onThrowableDetonate?: ThrowableDetonateCallback;

  private candidateTris: number[] = [];
  private _closest = new THREE.Vector3();
  private _normal = new THREE.Vector3();
  private _relVel = new THREE.Vector3();
  private _tangent = new THREE.Vector3();
  private _mat4 = new THREE.Matrix4();
  private _pos = new THREE.Vector3();
  private _quat = new THREE.Quaternion();
  private _scale = new THREE.Vector3(1, 1, 1);
  private _axis = new THREE.Vector3();
  private _dq = new THREE.Quaternion();

  constructor(scene: THREE.Scene, maxCasings = 60) {
    this.maxCasings = maxCasings;
    this.initCasingPool(scene);
  }

  private initCasingPool(scene: THREE.Scene): void {
    // Detailed brass 5.56x45mm casing geometry
    const geo = new THREE.CylinderGeometry(0.0048, 0.0052, 0.044, 8, 1, false);
    geo.rotateX(Math.PI * 0.5);
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xd6a648),
      metalness: 0.88,
      roughness: 0.24
    });

    this.casingInstancedMesh = new THREE.InstancedMesh(geo, mat, this.maxCasings);
    this.casingInstancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.casingInstancedMesh.castShadow = false;
    this.casingInstancedMesh.receiveShadow = true;
    this.casingInstancedMesh.frustumCulled = false;

    const zeroMat = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < this.maxCasings; i++) {
      this.casingInstancedMesh.setMatrixAt(i, zeroMat);
      const body: RigidBody = {
        id: this.nextId++,
        active: false,
        shape: 'capsule',
        position: new THREE.Vector3(),
        prevPosition: new THREE.Vector3(),
        quaternion: new THREE.Quaternion(),
        prevQuaternion: new THREE.Quaternion(),
        velocity: new THREE.Vector3(),
        angularVelocity: new THREE.Vector3(),
        halfExtents: new THREE.Vector3(0.006, 0.022, 0.006),
        radius: 0.022,
        mass: 0.012,
        invMass: 1 / 0.012,
        invInertia: 1 / 0.0005,
        restitution: 0.48,
        friction: 0.35,
        materialId: MaterialId.METAL,
        useCCD: true,
        sleeping: true,
        sleepTimer: 0,
        age: 0,
        maxLifetime: 6.5,
        isCasing: true,
        isThrowable: false,
        bounceCount: 0
      };
      this.casingPool.push(body);
      this.bodies.push(body);
    }
    this.casingInstancedMesh.instanceMatrix.needsUpdate = true;
    scene.add(this.casingInstancedMesh);
  }

  public spawnCasing(
    origin: THREE.Vector3,
    velocity: THREE.Vector3,
    angularVelocity: THREE.Vector3
  ): void {
    const body = this.casingPool[this.casingCursor];
    this.casingCursor = (this.casingCursor + 1) % this.maxCasings;

    body.active = true;
    body.sleeping = false;
    body.sleepTimer = 0;
    body.age = 0;
    body.bounceCount = 0;
    body.position.copy(origin);
    body.prevPosition.copy(origin);
    body.quaternion.identity();
    body.prevQuaternion.identity();
    body.velocity.copy(velocity);
    body.angularVelocity.copy(angularVelocity);
  }

  public addReactiveProp(
    mesh: THREE.Object3D,
    shape: RigidShapeType,
    halfExtents: THREE.Vector3,
    mass: number,
    materialId: MaterialId,
    restitution = 0.28,
    friction = 0.58
  ): RigidBody {
    mesh.userData.dynamic = true;
    mesh.updateMatrixWorld(true);
    const worldPos = new THREE.Vector3();
    const worldQuat = new THREE.Quaternion();
    mesh.getWorldPosition(worldPos);
    mesh.getWorldQuaternion(worldQuat);
    const r =
      shape === 'sphere'
        ? halfExtents.x
        : Math.max(halfExtents.x, halfExtents.y, halfExtents.z);
    const invMass = mass > 0 ? 1 / mass : 0;
    const inertia = mass * (2 / 5) * r * r;
    const body: RigidBody = {
      id: this.nextId++,
      active: true,
      shape,
      position: worldPos.clone(),
      prevPosition: worldPos.clone(),
      quaternion: worldQuat.clone(),
      prevQuaternion: worldQuat.clone(),
      velocity: new THREE.Vector3(),
      angularVelocity: new THREE.Vector3(),
      halfExtents: halfExtents.clone(),
      radius: r,
      mass,
      invMass,
      invInertia: inertia > 0 ? 1 / inertia : 0,
      restitution,
      friction,
      materialId,
      useCCD: false,
      sleeping: true,
      sleepTimer: 1.0,
      age: 0,
      maxLifetime: 0,
      isCasing: false,
      isThrowable: false,
      mesh,
      bounceCount: 0
    };
    this.bodies.push(body);
    return body;
  }

  public spawnThrowable(
    mesh: THREE.Object3D,
    origin: THREE.Vector3,
    velocity: THREE.Vector3,
    type: 'frag' | 'flash',
    fuseSeconds = 2.4
  ): RigidBody {
    const r = 0.065;
    const mass = 0.42;
    const body: RigidBody = {
      id: this.nextId++,
      active: true,
      shape: 'sphere',
      position: origin.clone(),
      prevPosition: origin.clone(),
      quaternion: new THREE.Quaternion(),
      prevQuaternion: new THREE.Quaternion(),
      velocity: velocity.clone(),
      angularVelocity: new THREE.Vector3(6.0, 2.5, -4.0),
      halfExtents: new THREE.Vector3(r, r, r),
      radius: r,
      mass,
      invMass: 1 / mass,
      invInertia: 1 / (mass * 0.4 * r * r),
      restitution: 0.42,
      friction: 0.5,
      materialId: MaterialId.METAL,
      useCCD: true,
      sleeping: false,
      sleepTimer: 0,
      age: 0,
      maxLifetime: fuseSeconds,
      isCasing: false,
      isThrowable: true,
      throwableType: type,
      mesh,
      bounceCount: 0
    };
    this.bodies.push(body);
    return body;
  }

  public applyImpulseAtPoint(
    body: RigidBody,
    impulse: THREE.Vector3,
    point: THREE.Vector3
  ): void {
    if (!body.active || body.invMass === 0) return;
    body.sleeping = false;
    body.sleepTimer = 0;
    body.velocity.addScaledVector(impulse, body.invMass);

    const rx = point.x - body.position.x;
    const ry = point.y - body.position.y;
    const rz = point.z - body.position.z;
    const tx = ry * impulse.z - rz * impulse.y;
    const ty = rz * impulse.x - rx * impulse.z;
    const tz = rx * impulse.y - ry * impulse.x;
    body.angularVelocity.x += tx * body.invInertia * 0.25;
    body.angularVelocity.y += ty * body.invInertia * 0.25;
    body.angularVelocity.z += tz * body.invInertia * 0.25;
  }

  public applyExplosionImpulse(center: THREE.Vector3, radius: number, maxImpulse: number): void {
    for (let i = 0; i < this.bodies.length; i++) {
      const b = this.bodies[i];
      if (!b.active || b.invMass === 0 || b.isCasing) continue;
      const dx = b.position.x - center.x;
      const dy = b.position.y - center.y + 0.25;
      const dz = b.position.z - center.z;
      const dist = Math.hypot(dx, dy, dz);
      if (dist < radius && dist > 1e-4) {
        const falloff = 1 - dist / radius;
        const mag = maxImpulse * falloff * falloff;
        b.sleeping = false;
        b.sleepTimer = 0;
        b.velocity.x += (dx / dist) * mag * b.invMass;
        b.velocity.y += ((dy / dist) + 0.35) * mag * b.invMass;
        b.velocity.z += (dz / dist) * mag * b.invMass;
        b.angularVelocity.set(
          (dz / dist) * 6 * falloff,
          2 * falloff,
          -(dx / dist) * 6 * falloff
        );
      }
    }
  }

  /** Raycast against dynamic rigid bodies (for shooting reactive cans, crates, barrels) */
  public raycastDynamic(
    origin: THREE.Vector3,
    dir: THREE.Vector3,
    maxDist: number
  ): { body: RigidBody | null; distance: number; point: THREE.Vector3; normal: THREE.Vector3 } {
    let bestBody: RigidBody | null = null;
    let bestDist = maxDist;
    const bestPoint = new THREE.Vector3();
    const bestNormal = new THREE.Vector3(0, 1, 0);

    for (let i = 0; i < this.bodies.length; i++) {
      const b = this.bodies[i];
      if (!b.active || b.isCasing) continue;

      const ocX = origin.x - b.position.x;
      const ocY = origin.y - b.position.y;
      const ocZ = origin.z - b.position.z;
      const proj = ocX * dir.x + ocY * dir.y + ocZ * dir.z;
      const c = ocX * ocX + ocY * ocY + ocZ * ocZ - b.radius * b.radius;
      const disc = proj * proj - c;
      if (disc < 0) continue;
      const t = -proj - Math.sqrt(disc);
      if (t > 0.01 && t < bestDist) {
        bestDist = t;
        bestBody = b;
        bestPoint.copy(origin).addScaledVector(dir, t);
        bestNormal.subVectors(bestPoint, b.position).normalize();
      }
    }

    return { body: bestBody, distance: bestDist, point: bestPoint, normal: bestNormal };
  }

  public step(dt: number, bvh: BVH): void {
    const activeCount = this.bodies.length;

    for (let i = 0; i < activeCount; i++) {
      const b = this.bodies[i];
      if (!b.active) continue;

      b.prevPosition.copy(b.position);
      b.prevQuaternion.copy(b.quaternion);

      if (b.maxLifetime > 0) {
        b.age += dt;
        if (b.age >= b.maxLifetime) {
          b.active = false;
          if (b.isThrowable && b.throwableType && this.onThrowableDetonate) {
            this.onThrowableDetonate(b.position.clone(), b.throwableType);
          }
          if (b.mesh && b.isThrowable && b.mesh.parent) {
            b.mesh.parent.remove(b.mesh);
          }
          continue;
        }
      }

      if (b.sleeping) continue;

      // Integrate gravity & damping
      b.velocity.y -= 18.5 * dt;
      b.velocity.multiplyScalar(Math.max(0, 1 - 0.35 * dt));
      b.angularVelocity.multiplyScalar(Math.max(0, 1 - 1.2 * dt));

      // Continuous collision detection (CCD) for fast casings & throwables
      const stepDist = b.velocity.length() * dt;
      if (b.useCCD && stepDist > b.radius * 0.75) {
        this._normal.copy(b.velocity).normalize();
        const hit = bvh.raycast(b.position, this._normal, stepDist + b.radius);
        if (hit.hit) {
          b.position.copy(hit.point).addScaledVector(hit.normal, b.radius + 0.002);
          this.resolveContactImpulse(b, hit.normal, hit.materialId);
        } else {
          b.position.addScaledVector(b.velocity, dt);
        }
      } else {
        b.position.addScaledVector(b.velocity, dt);
      }

      // Integrate orientation
      const angSpeed = b.angularVelocity.length();
      if (angSpeed > 1e-4) {
        this._axis.copy(b.angularVelocity).multiplyScalar(1 / angSpeed);
        this._dq.setFromAxisAngle(this._axis, angSpeed * dt);
        b.quaternion.premultiply(this._dq).normalize();
      }

      // Static BVH collision & response
      this.collideWithBVH(b, bvh);

      // Sleep check
      const linSq = b.velocity.lengthSq();
      const angSq = b.angularVelocity.lengthSq();
      if (linSq < 0.025 && angSq < 0.08 && !b.isThrowable) {
        b.sleepTimer += dt;
        if (b.sleepTimer > 0.35) {
          b.sleeping = true;
          b.velocity.set(0, 0, 0);
          b.angularVelocity.set(0, 0, 0);
        }
      } else {
        b.sleepTimer = 0;
      }
    }

    // Dynamic-vs-dynamic broadphase & impulse resolution for non-casing props
    for (let i = 0; i < activeCount; i++) {
      const a = this.bodies[i];
      if (!a.active || a.isCasing) continue;
      for (let j = i + 1; j < activeCount; j++) {
        const b = this.bodies[j];
        if (!b.active || b.isCasing) continue;
        if (a.sleeping && b.sleeping) continue;

        const dx = b.position.x - a.position.x;
        const dy = b.position.y - a.position.y;
        const dz = b.position.z - a.position.z;
        const minDist = a.radius + b.radius;
        const distSq = dx * dx + dy * dy + dz * dz;
        if (distSq < minDist * minDist && distSq > 1e-8) {
          const dist = Math.sqrt(distSq);
          const pen = minDist - dist;
          this._normal.set(dx / dist, dy / dist, dz / dist);

          const totalInvMass = a.invMass + b.invMass;
          if (totalInvMass > 0) {
            a.position.addScaledVector(this._normal, -pen * (a.invMass / totalInvMass));
            b.position.addScaledVector(this._normal, pen * (b.invMass / totalInvMass));

            this._relVel.subVectors(b.velocity, a.velocity);
            const vn = this._relVel.dot(this._normal);
            if (vn < 0) {
              const e = Math.min(a.restitution, b.restitution);
              const jImp = (-(1 + e) * vn) / totalInvMass;
              a.velocity.addScaledVector(this._normal, -jImp * a.invMass);
              b.velocity.addScaledVector(this._normal, jImp * b.invMass);
              a.sleeping = false;
              b.sleeping = false;
            }
          }
        }
      }
    }
  }

  private collideWithBVH(b: RigidBody, bvh: BVH): void {
    const r = b.shape === 'box' ? b.halfExtents.y : b.radius;
    bvh.overlapAABB(
      b.position.x - r - 0.05,
      b.position.y - r - 0.05,
      b.position.z - r - 0.05,
      b.position.x + r + 0.05,
      b.position.y + r + 0.05,
      b.position.z + r + 0.05,
      this.candidateTris
    );

    for (let i = 0; i < this.candidateTris.length; i++) {
      const triIdx = this.candidateTris[i];
      bvh.closestPointOnTriangle(b.position, triIdx, this._closest);
      this._normal.subVectors(b.position, this._closest);
      const dSq = this._normal.lengthSq();
      if (dSq < r * r && dSq > 1e-10) {
        const d = Math.sqrt(dSq);
        const pen = r - d;
        this._normal.multiplyScalar(1 / d);
        b.position.addScaledVector(this._normal, pen);
        this.resolveContactImpulse(b, this._normal, bvh.materialIds[triIdx]);
      }
    }

    // Floor safety guard
    if (b.position.y < r) {
      b.position.y = r;
      this._normal.set(0, 1, 0);
      this.resolveContactImpulse(b, this._normal, MaterialId.ROAD);
    }
  }

  private resolveContactImpulse(b: RigidBody, normal: THREE.Vector3, surfaceMat: MaterialId): void {
    const vn = b.velocity.dot(normal);
    if (vn >= 0) return;

    const impactSpeed = -vn;
    const restitution = impactSpeed > 0.45 ? b.restitution : 0.0;
    const jn = -(1 + restitution) * vn;
    b.velocity.addScaledVector(normal, jn);

    // Tangential friction impulse
    this._tangent.copy(b.velocity).addScaledVector(normal, -b.velocity.dot(normal));
    const tLen = this._tangent.length();
    if (tLen > 1e-5) {
      this._tangent.multiplyScalar(1 / tLen);
      const jt = Math.min(tLen, jn * b.friction);
      b.velocity.addScaledVector(this._tangent, -jt);
    }

    if (b.isCasing) {
      b.angularVelocity.multiplyScalar(0.65);
    } else {
      // Align boxes slightly toward flat ground when resting on horizontal surfaces
      b.angularVelocity.multiplyScalar(0.75);
    }

    if (impactSpeed > 0.65 && b.bounceCount < 4) {
      b.bounceCount++;
      if (this.onCollisionSound) {
        this.onCollisionSound(b.position, impactSpeed, b.materialId, surfaceMat, b.isCasing);
      }
    }
  }

  public syncRenderTransforms(alpha: number): void {
    const zeroMat = this._mat4.makeScale(0, 0, 0);
    let casingNeedsUpdate = false;

    for (let i = 0; i < this.casingPool.length; i++) {
      const c = this.casingPool[i];
      if (!c.active) {
        this.casingInstancedMesh.setMatrixAt(i, zeroMat);
        casingNeedsUpdate = true;
        continue;
      }
      this._pos.lerpVectors(c.prevPosition, c.position, alpha);
      this._quat.slerpQuaternions(c.prevQuaternion, c.quaternion, alpha);
      this._scale.set(1, 1, 1);
      this._mat4.compose(this._pos, this._quat, this._scale);
      this.casingInstancedMesh.setMatrixAt(i, this._mat4);
      casingNeedsUpdate = true;
    }

    if (casingNeedsUpdate) {
      this.casingInstancedMesh.instanceMatrix.needsUpdate = true;
    }

    for (let i = 0; i < this.bodies.length; i++) {
      const b = this.bodies[i];
      if (!b.active || b.isCasing || !b.mesh) continue;
      b.mesh.position.lerpVectors(b.prevPosition, b.position, alpha);
      b.mesh.quaternion.slerpQuaternions(b.prevQuaternion, b.quaternion, alpha);
    }
  }

  public getActiveCount(): number {
    let count = 0;
    for (let i = 0; i < this.bodies.length; i++) {
      if (this.bodies[i].active && !this.bodies[i].sleeping) count++;
    }
    return count;
  }
}
