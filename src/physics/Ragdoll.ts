import * as THREE from 'three';
import { BVH } from './BVH';

export interface RagdollNode {
  pos: THREE.Vector3;
  prevPos: THREE.Vector3;
  renderPos: THREE.Vector3;
  vel: THREE.Vector3;
  radius: number;
  invMass: number;
}

export interface DistanceConstraint {
  a: number;
  b: number;
  restLength: number;
  compliance: number;
}

export interface ConeLimitConstraint {
  tip: number;
  pivot: number;
  refParent: number;
  minDot: number;
}

/**
 * XPBD Articulated Humanoid Ragdoll Solver
 * Node indices:
 * 0: Pelvis, 1: Chest, 2: Head
 * 3: L_Elbow, 4: L_Hand, 5: R_Elbow, 6: R_Hand
 * 7: L_Knee, 8: L_Foot, 9: R_Knee, 10: R_Foot
 */
export class Ragdoll {
  public active = false;
  public sleeping = false;
  public age = 0;
  public maxLifetime = 8.0;
  public nodes: RagdollNode[] = [];
  public constraints: DistanceConstraint[] = [];
  public coneLimits: ConeLimitConstraint[] = [];

  private candidateTris: number[] = [];
  private _closest = new THREE.Vector3();
  private _diff = new THREE.Vector3();
  private _dir1 = new THREE.Vector3();
  private _dir2 = new THREE.Vector3();

  constructor() {
    const radii = [0.20, 0.22, 0.14, 0.10, 0.09, 0.10, 0.09, 0.11, 0.10, 0.11, 0.10];
    const masses = [14, 16, 5, 3, 1.5, 3, 1.5, 5, 2.5, 5, 2.5];

    for (let i = 0; i < 11; i++) {
      this.nodes.push({
        pos: new THREE.Vector3(),
        prevPos: new THREE.Vector3(),
        renderPos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        radius: radii[i],
        invMass: 1 / masses[i]
      });
    }

    // Core skeletal distance constraints
    const pairs: Array<[number, number, number, number]> = [
      [0, 1, 0.44, 0.0001], // pelvis - chest
      [1, 2, 0.30, 0.0001], // chest - head
      [1, 3, 0.34, 0.0002], // chest - L elbow
      [3, 4, 0.28, 0.0002], // L elbow - L hand
      [1, 5, 0.34, 0.0002], // chest - R elbow
      [5, 6, 0.28, 0.0002], // R elbow - R hand
      [0, 7, 0.44, 0.0002], // pelvis - L knee
      [7, 8, 0.42, 0.0002], // L knee - L foot
      [0, 9, 0.44, 0.0002], // pelvis - R knee
      [9, 10, 0.42, 0.0002], // R knee - R foot
      // Structural cross-constraints to prevent unnatural folding / twist collapse
      [0, 2, 0.70, 0.002],  // spine stiffness
      [3, 5, 0.46, 0.004],  // shoulder width support
      [7, 9, 0.30, 0.004],  // hip width support
      [1, 7, 0.78, 0.005],  // torso-to-L-knee anti-fold
      [1, 9, 0.78, 0.005]   // torso-to-R-knee anti-fold
    ];

    for (const [a, b, len, comp] of pairs) {
      this.constraints.push({ a, b, restLength: len, compliance: comp });
    }

    this.coneLimits = [
      { tip: 2, pivot: 1, refParent: 0, minDot: 0.35 }, // Neck cone limit
      { tip: 8, pivot: 7, refParent: 0, minDot: -0.2 }, // Left knee limit
      { tip: 10, pivot: 9, refParent: 0, minDot: -0.2 } // Right knee limit
    ];
  }

  public activate(
    rootPos: THREE.Vector3,
    yaw: number,
    baseVelocity: THREE.Vector3,
    hitPoint: THREE.Vector3,
    hitImpulse: THREE.Vector3
  ): void {
    this.active = true;
    this.sleeping = false;
    this.age = 0;

    const cos = Math.cos(yaw);
    const sin = Math.sin(yaw);
    const localOffsets: Array<[number, number, number]> = [
      [0, 0.92, 0],       // 0 pelvis
      [0, 1.36, 0],       // 1 chest
      [0, 1.66, 0],       // 2 head
      [-0.28, 1.24, 0.1], // 3 L elbow
      [-0.22, 1.15, 0.34],// 4 L hand
      [0.28, 1.24, 0.1],  // 5 R elbow
      [0.18, 1.18, 0.28], // 6 R hand
      [-0.14, 0.48, 0],   // 7 L knee
      [-0.14, 0.08, 0],   // 8 L foot
      [0.14, 0.48, 0],    // 9 R knee
      [0.14, 0.08, 0]     // 10 R foot
    ];

    let closestIdx = 1;
    let closestDistSq = Infinity;

    for (let i = 0; i < 11; i++) {
      const [lx, ly, lz] = localOffsets[i];
      const wx = rootPos.x + lx * cos + lz * sin;
      const wy = rootPos.y + ly;
      const wz = rootPos.z - lx * sin + lz * cos;

      const node = this.nodes[i];
      node.pos.set(wx, wy, wz);
      node.prevPos.set(wx, wy, wz);
      node.renderPos.set(wx, wy, wz);
      node.vel.copy(baseVelocity);

      const dSq = node.pos.distanceToSquared(hitPoint);
      if (dSq < closestDistSq) {
        closestDistSq = dSq;
        closestIdx = i;
      }
    }

    // Apply momentum transfer from final hit
    this.nodes[closestIdx].vel.addScaledVector(hitImpulse, this.nodes[closestIdx].invMass);
    this.nodes[1].vel.addScaledVector(hitImpulse, this.nodes[1].invMass * 0.55);
    this.nodes[0].vel.addScaledVector(hitImpulse, this.nodes[0].invMass * 0.35);
  }

  public step(dt: number, bvh: BVH): void {
    if (!this.active || this.sleeping) return;

    this.age += dt;
    if (this.age > 3.6) {
      this.sleeping = true;
      return;
    }

    // 1. Predict positions with gravity and joint damping
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      n.prevPos.copy(n.pos);
      n.vel.y -= 18.5 * dt;
      n.vel.multiplyScalar(Math.max(0, 1 - 1.8 * dt));
      n.pos.addScaledVector(n.vel, dt);
    }

    // 2. XPBD Constraint iterations
    const alphaScale = 1 / (dt * dt);
    for (let iter = 0; iter < 5; iter++) {
      for (let c = 0; c < this.constraints.length; c++) {
        const con = this.constraints[c];
        const na = this.nodes[con.a];
        const nb = this.nodes[con.b];
        this._diff.subVectors(nb.pos, na.pos);
        const len = this._diff.length();
        if (len < 1e-6) continue;

        const C = len - con.restLength;
        const w = na.invMass + nb.invMass;
        const lambda = -C / (w + con.compliance * alphaScale);
        this._diff.multiplyScalar(lambda / len);

        na.pos.addScaledVector(this._diff, -na.invMass);
        nb.pos.addScaledVector(this._diff, nb.invMass);
      }

      // Cone limits
      for (let k = 0; k < this.coneLimits.length; k++) {
        const lim = this.coneLimits[k];
        const tip = this.nodes[lim.tip];
        const pivot = this.nodes[lim.pivot];
        const parent = this.nodes[lim.refParent];

        this._dir1.subVectors(pivot.pos, parent.pos).normalize();
        this._dir2.subVectors(tip.pos, pivot.pos);
        const segLen = this._dir2.length();
        if (segLen < 1e-5) continue;
        this._dir2.multiplyScalar(1 / segLen);

        const dot = this._dir1.dot(this._dir2);
        if (dot < lim.minDot) {
          this._dir2.lerp(this._dir1, 0.35).normalize();
          tip.pos.copy(pivot.pos).addScaledVector(this._dir2, segLen);
        }
      }

      // 3. BVH collision for each node
      for (let i = 0; i < this.nodes.length; i++) {
        const n = this.nodes[i];
        const r = n.radius;
        bvh.overlapAABB(
          n.pos.x - r - 0.04,
          n.pos.y - r - 0.04,
          n.pos.z - r - 0.04,
          n.pos.x + r + 0.04,
          n.pos.y + r + 0.04,
          n.pos.z + r + 0.04,
          this.candidateTris
        );

        for (let t = 0; t < this.candidateTris.length; t++) {
          const triIdx = this.candidateTris[t];
          bvh.closestPointOnTriangle(n.pos, triIdx, this._closest);
          this._diff.subVectors(n.pos, this._closest);
          const dSq = this._diff.lengthSq();
          if (dSq < r * r && dSq > 1e-10) {
            const d = Math.sqrt(dSq);
            n.pos.addScaledVector(this._diff, (r - d) / d);
            // Ground friction
            n.pos.x = THREE.MathUtils.lerp(n.pos.x, n.prevPos.x, 0.25);
            n.pos.z = THREE.MathUtils.lerp(n.pos.z, n.prevPos.z, 0.25);
          }
        }

        if (n.pos.y < r) {
          n.pos.y = r;
          n.pos.x = THREE.MathUtils.lerp(n.pos.x, n.prevPos.x, 0.3);
          n.pos.z = THREE.MathUtils.lerp(n.pos.z, n.prevPos.z, 0.3);
        }
      }
    }

    // 4. Derive velocities from XPBD position delta
    let maxSpeedSq = 0;
    const invDt = 1 / dt;
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      n.vel.subVectors(n.pos, n.prevPos).multiplyScalar(invDt);
      const sSq = n.vel.lengthSq();
      if (sSq > maxSpeedSq) maxSpeedSq = sSq;
    }

    if (maxSpeedSq < 0.015 && this.age > 0.6) {
      this.sleeping = true;
    }
  }

  public updateRenderPositions(alpha: number): void {
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      if (this.sleeping) {
        n.renderPos.copy(n.pos);
      } else {
        n.renderPos.lerpVectors(n.prevPos, n.pos, alpha);
      }
    }
  }
}
