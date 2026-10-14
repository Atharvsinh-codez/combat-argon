import * as THREE from 'three';
import { BVH, MaterialId } from './BVH';

export class CharacterController {
  public position = new THREE.Vector3();
  public prevPosition = new THREE.Vector3();
  public velocity = new THREE.Vector3();

  public radius = 0.36;
  public standHeight = 1.76;
  public crouchHeight = 1.12;
  public currentHeight = 1.76;
  public stepOffset = 0.42;
  public maxSlopeCos = Math.cos((46 * Math.PI) / 180);

  public isGrounded = false;
  public wasGrounded = false;
  public isCrouching = false;
  public isMantling = false;
  public groundNormal = new THREE.Vector3(0, 1, 0);
  public groundMaterial: MaterialId = MaterialId.ROAD;
  public landingImpactSpeed = 0;

  private mantleStart = new THREE.Vector3();
  private mantleTarget = new THREE.Vector3();
  private mantleTimer = 0;
  private mantleDuration = 0.36;

  private candidateTris: number[] = [];
  private _sphereCenter = new THREE.Vector3();
  private _closest = new THREE.Vector3();
  private _push = new THREE.Vector3();
  private _rayOrigin = new THREE.Vector3();
  private _down = new THREE.Vector3(0, -1, 0);
  private _up = new THREE.Vector3(0, 1, 0);

  constructor(spawnPos: THREE.Vector3) {
    this.position.copy(spawnPos);
    this.prevPosition.copy(spawnPos);
  }

  public teleport(pos: THREE.Vector3): void {
    this.position.copy(pos);
    this.prevPosition.copy(pos);
    this.velocity.set(0, 0, 0);
    this.isGrounded = false;
    this.isMantling = false;
  }

  public getInterpolatedPosition(alpha: number, out: THREE.Vector3): THREE.Vector3 {
    return out.lerpVectors(this.prevPosition, this.position, alpha);
  }

  public getEyePosition(alpha: number, out: THREE.Vector3): THREE.Vector3 {
    this.getInterpolatedPosition(alpha, out);
    out.y += this.currentHeight - 0.14;
    return out;
  }

  public canStandUp(bvh: BVH): boolean {
    this._rayOrigin.set(this.position.x, this.position.y + this.crouchHeight * 0.5, this.position.z);
    const hit = bvh.raycast(this._rayOrigin, this._up, this.standHeight - this.crouchHeight * 0.5 + 0.08);
    return !hit.hit;
  }

  /** Attempt short mantle over waist/chest-high cover in look direction */
  public tryMantle(bvh: BVH, forwardXZ: THREE.Vector3): boolean {
    if (this.isMantling) return false;

    // Check if there is an obstacle in front of waist/chest
    const waistOrigin = new THREE.Vector3(this.position.x, this.position.y + 0.65, this.position.z);
    const frontHit = bvh.raycast(waistOrigin, forwardXZ, this.radius + 0.65);
    if (!frontHit.hit || frontHit.normal.y > 0.5) return false;

    // Check clearance above the obstacle
    const probePoint = new THREE.Vector3(
      this.position.x + forwardXZ.x * (frontHit.distance + 0.35),
      this.position.y + 1.65,
      this.position.z + forwardXZ.z * (frontHit.distance + 0.35)
    );
    const headCheck = bvh.raycast(
      new THREE.Vector3(this.position.x, this.position.y + 1.55, this.position.z),
      forwardXZ,
      frontHit.distance + 0.5
    );
    if (headCheck.hit) return false;

    const topHit = bvh.raycast(probePoint, this._down, 1.15);
    if (!topHit.hit || topHit.normal.y < this.maxSlopeCos) return false;

    const ledgeY = topHit.point.y;
    const heightDiff = ledgeY - this.position.y;
    if (heightDiff < 0.5 || heightDiff > 1.55) return false;

    // Ensure standing clearance on top of ledge
    const clearanceCheck = bvh.raycast(
      new THREE.Vector3(topHit.point.x, ledgeY + 0.1, topHit.point.z),
      this._up,
      this.currentHeight
    );
    if (clearanceCheck.hit) return false;

    this.isMantling = true;
    this.mantleTimer = 0;
    this.mantleStart.copy(this.position);
    this.mantleTarget.set(topHit.point.x, ledgeY + 0.02, topHit.point.z);
    this.velocity.set(0, 0, 0);
    return true;
  }

  public step(
    dt: number,
    bvh: BVH,
    wishVelX: number,
    wishVelZ: number,
    wantJump: boolean,
    wantCrouch: boolean,
    forwardXZ?: THREE.Vector3
  ): void {
    this.prevPosition.copy(this.position);
    this.wasGrounded = this.isGrounded;
    this.landingImpactSpeed = 0;

    if (this.isMantling) {
      this.mantleTimer += dt;
      const t = Math.min(1, this.mantleTimer / this.mantleDuration);
      const smooth = t * t * (3 - 2 * t);
      this.position.lerpVectors(this.mantleStart, this.mantleTarget, smooth);
      // Slight arc in Y
      this.position.y += Math.sin(t * Math.PI) * 0.16;
      if (t >= 1) {
        this.isMantling = false;
        this.isGrounded = true;
      }
      return;
    }

    // Crouch state & smooth height transition
    if (wantCrouch) {
      this.isCrouching = true;
    } else if (this.isCrouching && this.canStandUp(bvh)) {
      this.isCrouching = false;
    }
    const targetHeight = this.isCrouching ? this.crouchHeight : this.standHeight;
    this.currentHeight += (targetHeight - this.currentHeight) * Math.min(1, dt * 16);

    // Jump or short mantle
    if (wantJump) {
      if (forwardXZ && this.tryMantle(bvh, forwardXZ)) {
        return;
      }
      if (this.isGrounded) {
        this.velocity.y = 6.25;
        this.isGrounded = false;
      }
    }

    // Horizontal acceleration & friction
    const accel = this.isGrounded ? 15.5 : 4.2;
    const blend = Math.min(1, accel * dt);
    this.velocity.x += (wishVelX - this.velocity.x) * blend;
    this.velocity.z += (wishVelZ - this.velocity.z) * blend;

    // Gravity
    if (!this.isGrounded) {
      this.velocity.y -= 19.6 * dt;
      if (this.velocity.y < -32) this.velocity.y = -32;
    } else if (this.velocity.y < 0) {
      this.velocity.y = -0.5;
    }

    const preFallVy = this.velocity.y;

    // Sub-stepped capsule sweep & depenetration
    const moveDist = this.velocity.length() * dt;
    const substeps = Math.max(1, Math.min(4, Math.ceil(moveDist / (this.radius * 0.45))));
    const subDt = dt / substeps;

    let groundedThisStep = false;

    for (let s = 0; s < substeps; s++) {
      this.position.x += this.velocity.x * subDt;
      this.position.y += this.velocity.y * subDt;
      this.position.z += this.velocity.z * subDt;

      if (this.resolveCapsuleCollisions(bvh)) {
        groundedThisStep = true;
      }
    }

    // Ground snap check for stairs and downward slopes when moving horizontally
    if (!groundedThisStep && this.wasGrounded && this.velocity.y <= 0) {
      this._rayOrigin.set(this.position.x, this.position.y + 0.25, this.position.z);
      const snapHit = bvh.raycast(this._rayOrigin, this._down, 0.25 + this.stepOffset * 0.75);
      if (snapHit.hit && snapHit.normal.y >= this.maxSlopeCos) {
        this.position.y = snapHit.point.y;
        this.velocity.y = 0;
        this.groundNormal.copy(snapHit.normal);
        this.groundMaterial = snapHit.materialId;
        groundedThisStep = true;
      }
    }

    if (groundedThisStep && !this.wasGrounded && preFallVy < -2.2) {
      this.landingImpactSpeed = -preFallVy;
    }

    this.isGrounded = groundedThisStep;
  }

  private resolveCapsuleCollisions(bvh: BVH): boolean {
    const r = this.radius;
    const h = this.currentHeight;
    let foundGround = false;

    bvh.overlapAABB(
      this.position.x - r - 0.15,
      this.position.y - 0.15,
      this.position.z - r - 0.15,
      this.position.x + r + 0.15,
      this.position.y + h + 0.15,
      this.position.z + r + 0.15,
      this.candidateTris
    );

    if (this.candidateTris.length === 0) return false;

    // 3 sphere sample heights along capsule axis (bottom hemisphere, middle, top hemisphere)
    const offsets = [r, h * 0.5, Math.max(r, h - r)];

    for (let iter = 0; iter < 3; iter++) {
      for (let s = 0; s < 3; s++) {
        const sphereY = this.position.y + offsets[s];
        this._sphereCenter.set(this.position.x, sphereY, this.position.z);

        for (let i = 0; i < this.candidateTris.length; i++) {
          const triIdx = this.candidateTris[i];
          bvh.closestPointOnTriangle(this._sphereCenter, triIdx, this._closest);
          this._push.subVectors(this._sphereCenter, this._closest);
          const distSq = this._push.lengthSq();

          if (distSq < r * r && distSq > 1e-10) {
            const dist = Math.sqrt(distSq);
            const penetration = r - dist;
            this._push.multiplyScalar(1 / dist);

            // Step-up handling for low vertical curbs/stairs on bottom sphere
            const obstacleHeight = this._closest.y - this.position.y;
            if (
              s === 0 &&
              this._push.y < this.maxSlopeCos &&
              obstacleHeight > 0.03 &&
              obstacleHeight <= this.stepOffset &&
              (this.isGrounded || this.wasGrounded)
            ) {
              // Probe step surface directly above closest contact
              this._rayOrigin.set(this._closest.x, this.position.y + this.stepOffset + 0.15, this._closest.z);
              const stepHit = bvh.raycast(this._rayOrigin, this._down, this.stepOffset + 0.2);
              if (stepHit.hit && stepHit.normal.y >= this.maxSlopeCos && stepHit.point.y > this.position.y) {
                this.position.y = stepHit.point.y;
                this._sphereCenter.y = this.position.y + offsets[s];
                foundGround = true;
                this.groundNormal.copy(stepHit.normal);
                this.groundMaterial = stepHit.materialId;
                continue;
              }
            }

            // Standard depenetration
            this.position.addScaledVector(this._push, penetration);
            this._sphereCenter.addScaledVector(this._push, penetration);

            // Ground classification
            if (this._push.y >= this.maxSlopeCos && s === 0) {
              foundGround = true;
              this.groundNormal.copy(this._push);
              this.groundMaterial = bvh.materialIds[triIdx];
              if (this.velocity.y < 0) this.velocity.y = 0;
            } else {
              // Slide velocity along contact plane
              const vn = this.velocity.dot(this._push);
              if (vn < 0) {
                this.velocity.addScaledVector(this._push, -vn);
              }
            }
          }
        }
      }
    }

    return foundGround;
  }
}
