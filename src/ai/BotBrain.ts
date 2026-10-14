import * as THREE from 'three';
import { SeededRandom } from '../core/SeededRandom';
import { BVH } from '../physics/BVH';
import { CharacterController } from '../physics/CharacterController';
import { Ragdoll } from '../physics/Ragdoll';
import { RigidWorld } from '../physics/RigidWorld';
import { SpatialAudio } from '../audio/SpatialAudio';
import { CombatantTarget, DamageSystem, HitZone } from '../game/DamageSystem';
import { EffectsSystem } from '../game/EffectsSystem';
import { NavWorld } from './NavWorld';
import { CoverNode } from '../world/PropSystem';

export type BotTacticalState =
  | 'PATROL'
  | 'INVESTIGATE'
  | 'ENGAGE'
  | 'TAKE_COVER'
  | 'PEEK_FIRE'
  | 'FLANK'
  | 'RELOAD';

/**
 * Tactical AI Bot Combatant with Articulated Humanoid Rig, Procedural Stride + Foot IK + Aim IK,
 * BVH Vision/Hearing Perception, Cover Selection, Peeking, Flanking, and XPBD Ragdoll Transition.
 */
export class BotCombatant implements CombatantTarget {
  public readonly id: string;
  public readonly numericId: number;
  public readonly name: string;
  public readonly team: 'alpha' | 'bravo';

  public controller: CharacterController;
  public ragdoll = new Ragdoll();

  // Articulated Visual Rig
  public rootGroup = new THREE.Group();
  private pelvisGroup = new THREE.Group();
  private torsoGroup = new THREE.Group();
  private headGroup = new THREE.Group();
  private leftLegGroup = new THREE.Group();
  private leftShinGroup = new THREE.Group();
  private rightLegGroup = new THREE.Group();
  private rightShinGroup = new THREE.Group();
  private rightArmGroup = new THREE.Group();
  private leftArmGroup = new THREE.Group();
  private rifleGroup = new THREE.Group();
  private muzzleFlashMesh!: THREE.Mesh;

  // Combat & Health
  public health = 100;
  public maxHealth = 100;
  public isAlive = true;
  public respawnTimer = 0;
  public kills = 0;
  public deaths = 0;

  // AI State & Perception
  public state: BotTacticalState = 'PATROL';
  public yaw = 0;
  public pitch = 0;
  public leanAngle = 0;
  private stridePhase = 0;
  private hitFlinch = 0;
  private muzzleFlashTimer = 0;

  public currentTarget: CombatantTarget | null = null;
  public lastKnownTargetPos = new THREE.Vector3();
  public hasLineOfSight = false;
  public detectionProgress = 0;
  public timeSinceSawTarget = 99;
  public lastFiredTimestamp = -99;

  private path: THREE.Vector3[] = [];
  private pathIndex = 0;
  private repathTimer = 0;
  private stateTimer = 0;
  private assignedCover: CoverNode | null = null;

  private magAmmo = 30;
  private reloadTimer = 0;
  private burstRemaining = 0;
  private fireCooldown = 0;
  private footstepAccum = 0;

  private _eyePos = new THREE.Vector3();
  private _targetEye = new THREE.Vector3();
  private _toTarget = new THREE.Vector3();
  private _aimDir = new THREE.Vector3();
  private _muzzleWorld = new THREE.Vector3();
  private _rayOrigin = new THREE.Vector3();
  private _down = new THREE.Vector3(0, -1, 0);

  public onEliminated?: (
    victim: BotCombatant,
    killerId: string,
    killerName: string,
    killerTeam: 'alpha' | 'bravo',
    hitZone: HitZone
  ) => void;

  constructor(
    numericId: number,
    name: string,
    team: 'alpha' | 'bravo',
    spawnPos: THREE.Vector3,
    scene: THREE.Scene,
    private rng: SeededRandom,
    variantIndex = 0
  ) {
    this.numericId = numericId;
    this.id = `bot_${team}_${numericId}`;
    this.name = name;
    this.team = team;
    this.controller = new CharacterController(spawnPos);
    this.yaw = team === 'alpha' ? 0 : Math.PI;

    this.buildTacticalCharacterRig(variantIndex);
    scene.add(this.rootGroup);
  }

  private buildTacticalCharacterRig(variant: number): void {
    // Muted tactical gear palette with restrained team armband & visor accent
    const uniformColors = [0x6e6452, 0x565c4e, 0x625d56, 0x786b56];
    const vestColors = [0x3d3a33, 0x353932, 0x453e34, 0x2e3136];
    const helmetColors = [0x4a463d, 0x3b4037, 0x524b40, 0x36393d];

    const uniformMat = new THREE.MeshStandardMaterial({
      color: uniformColors[variant % uniformColors.length],
      roughness: 0.86,
      metalness: 0.04
    });
    const vestMat = new THREE.MeshStandardMaterial({
      color: vestColors[variant % vestColors.length],
      roughness: 0.78,
      metalness: 0.12
    });
    const helmetMat = new THREE.MeshStandardMaterial({
      color: helmetColors[variant % helmetColors.length],
      roughness: 0.62,
      metalness: 0.22
    });
    const skinGloveMat = new THREE.MeshStandardMaterial({
      color: 0x262422,
      roughness: 0.72,
      metalness: 0.08
    });
    const gunMat = new THREE.MeshStandardMaterial({
      color: 0x202328,
      roughness: 0.38,
      metalness: 0.82
    });
    // Restrained tactical team identification armband (Blue for Alpha, Crimson-Orange for Bravo)
    const teamBandMat = new THREE.MeshStandardMaterial({
      color: this.team === 'alpha' ? 0x2d8be0 : 0xd94130,
      roughness: 0.65,
      metalness: 0.05
    });

    // Pelvis (y = 0.90m in standing pose)
    this.pelvisGroup.position.set(0, 0.90, 0);
    const pelvisMesh = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.18, 0.24), uniformMat);
    pelvisMesh.castShadow = true;
    pelvisMesh.receiveShadow = true;
    this.pelvisGroup.add(pelvisMesh);
    this.rootGroup.add(this.pelvisGroup);

    // Torso + Plate Carrier + Pouches
    this.torsoGroup.position.set(0, 0.10, 0);
    const chestMesh = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.48, 0.26), uniformMat);
    chestMesh.position.set(0, 0.24, 0);
    chestMesh.castShadow = true;
    chestMesh.receiveShadow = true;
    this.torsoGroup.add(chestMesh);

    const plateCarrier = new THREE.Mesh(new THREE.BoxGeometry(0.40, 0.38, 0.30), vestMat);
    plateCarrier.position.set(0, 0.24, 0);
    plateCarrier.castShadow = true;
    this.torsoGroup.add(plateCarrier);

    // 3 Front Magazine Pouches on Plate Carrier
    for (let i = -1; i <= 1; i++) {
      const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.15, 0.05), vestMat);
      pouch.position.set(i * 0.10, 0.16, -0.17);
      this.torsoGroup.add(pouch);
    }

    // Back Radio Pack & Antenna
    const backPack = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.32, 0.12), vestMat);
    backPack.position.set(0, 0.25, 0.19);
    backPack.castShadow = true;
    this.torsoGroup.add(backPack);

    this.pelvisGroup.add(this.torsoGroup);

    // Head + Ballistic Helmet + Goggles + Balaclava
    this.headGroup.position.set(0, 0.52, 0);
    const headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.24, 0.22), skinGloveMat);
    headMesh.position.set(0, 0.12, 0);
    headMesh.castShadow = true;
    this.headGroup.add(headMesh);

    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.145, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), helmetMat);
    helmet.position.set(0, 0.15, 0);
    helmet.castShadow = true;
    this.headGroup.add(helmet);

    const goggles = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.065, 0.06), gunMat);
    goggles.position.set(0, 0.14, -0.105);
    this.headGroup.add(goggles);

    this.torsoGroup.add(this.headGroup);

    // Left & Right Articulated Legs (Thigh + Shin + Boot)
    const buildLeg = (side: number, thighGrp: THREE.Group, shinGrp: THREE.Group) => {
      thighGrp.position.set(side * 0.115, 0, 0);
      const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.44, 0.16), uniformMat);
      thigh.position.set(0, -0.22, 0);
      thigh.castShadow = true;
      thighGrp.add(thigh);

      const kneePad = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.10, 0.05), skinGloveMat);
      kneePad.position.set(0, -0.42, -0.08);
      thighGrp.add(kneePad);

      shinGrp.position.set(0, -0.44, 0);
      const shin = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.40, 0.14), uniformMat);
      shin.position.set(0, -0.20, 0);
      shin.castShadow = true;
      shinGrp.add(shin);

      const boot = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.11, 0.24), skinGloveMat);
      boot.position.set(0, -0.41, -0.04);
      boot.castShadow = true;
      shinGrp.add(boot);

      thighGrp.add(shinGrp);
      this.pelvisGroup.add(thighGrp);
    };

    buildLeg(-1, this.leftLegGroup, this.leftShinGroup);
    buildLeg(1, this.rightLegGroup, this.rightShinGroup);

    // Right Firing Arm & Carbine
    this.rightArmGroup.position.set(0.23, 0.40, 0);
    const rUpperArm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.30, 0.12), uniformMat);
    rUpperArm.position.set(0, -0.12, -0.06);
    rUpperArm.rotation.x = 0.85;
    rUpperArm.castShadow = true;
    this.rightArmGroup.add(rUpperArm);

    const rArmband = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.075, 0.13), teamBandMat);
    rArmband.position.set(0, -0.08, -0.04);
    rArmband.rotation.x = 0.85;
    this.rightArmGroup.add(rArmband);

    const rForearm = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.28, 0.10), uniformMat);
    rForearm.position.set(-0.04, -0.18, -0.26);
    rForearm.rotation.x = 1.45;
    this.rightArmGroup.add(rForearm);

    // Third-person Carbine held in hands
    const rifleBody = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.11, 0.68), gunMat);
    rifleBody.position.set(-0.08, -0.16, -0.38);
    rifleBody.castShadow = true;
    this.rifleGroup.add(rifleBody);

    const rifleMag = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.16, 0.07), vestMat);
    rifleMag.position.set(-0.08, -0.26, -0.36);
    rifleMag.rotation.x = -0.18;
    this.rifleGroup.add(rifleMag);

    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xffaa38,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    this.muzzleFlashMesh = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 6), flashMat);
    this.muzzleFlashMesh.position.set(-0.08, -0.14, -0.76);
    this.muzzleFlashMesh.visible = false;
    this.rifleGroup.add(this.muzzleFlashMesh);

    this.rightArmGroup.add(this.rifleGroup);
    this.torsoGroup.add(this.rightArmGroup);

    // Left Support Arm reaching to handguard
    this.leftArmGroup.position.set(-0.23, 0.40, 0);
    const lUpperArm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.32, 0.12), uniformMat);
    lUpperArm.position.set(0.04, -0.12, -0.12);
    lUpperArm.rotation.x = 1.15;
    lUpperArm.rotation.z = -0.28;
    lUpperArm.castShadow = true;
    this.leftArmGroup.add(lUpperArm);

    const lArmband = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.075, 0.13), teamBandMat);
    lArmband.position.set(0.02, -0.08, -0.07);
    lArmband.rotation.x = 1.15;
    this.leftArmGroup.add(lArmband);

    const lForearm = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.30, 0.10), uniformMat);
    lForearm.position.set(0.12, -0.16, -0.36);
    lForearm.rotation.x = 1.48;
    lForearm.rotation.y = -0.25;
    this.leftArmGroup.add(lForearm);

    this.torsoGroup.add(this.leftArmGroup);
  }

  public getPosition(): THREE.Vector3 {
    return this.controller.position;
  }

  public getHeight(): number {
    return this.controller.currentHeight;
  }

  public spawnAt(pos: THREE.Vector3, yaw: number): void {
    this.controller.teleport(pos);
    this.yaw = yaw;
    this.pitch = 0;
    this.health = 100;
    this.isAlive = true;
    this.ragdoll.active = false;
    this.state = 'PATROL';
    this.magAmmo = 30;
    this.reloadTimer = 0;
    this.currentTarget = null;
    this.hasLineOfSight = false;
    this.detectionProgress = 0;
    this.path = [];
    if (this.assignedCover) {
      this.assignedCover.occupiedBy = -1;
      this.assignedCover = null;
    }

    // Reset rig local transforms from ragdoll mode
    this.pelvisGroup.position.set(0, 0.90, 0);
    this.pelvisGroup.rotation.set(0, 0, 0);
    this.torsoGroup.rotation.set(0, 0, 0);
    this.headGroup.rotation.set(0, 0, 0);
  }

  public applyDamage(
    amount: number,
    hitZone: HitZone,
    hitPoint: THREE.Vector3,
    impulse: THREE.Vector3,
    attackerId: string,
    attackerName: string,
    attackerTeam: 'alpha' | 'bravo',
    attackerPos: THREE.Vector3
  ): { killed: boolean } {
    if (!this.isAlive) return { killed: false };

    this.health = Math.max(0, this.health - amount);
    this.hitFlinch = 1.0;

    // Immediately alert bot to attacker position
    this.lastKnownTargetPos.copy(attackerPos);
    this.timeSinceSawTarget = 0;
    if (this.state === 'PATROL' || this.state === 'INVESTIGATE') {
      this.state = 'TAKE_COVER';
      this.stateTimer = 0;
    }

    if (this.health <= 0) {
      this.isAlive = false;
      this.deaths++;
      this.respawnTimer = 4.2;
      this.muzzleFlashMesh.visible = false;
      if (this.assignedCover) {
        this.assignedCover.occupiedBy = -1;
        this.assignedCover = null;
      }

      // Activate XPBD ragdoll with fatal hit impulse
      this.ragdoll.activate(
        this.controller.position,
        this.yaw,
        this.controller.velocity,
        hitPoint,
        impulse
      );

      if (this.onEliminated) {
        this.onEliminated(this, attackerId, attackerName, attackerTeam, hitZone);
      }
      return { killed: true };
    }

    return { killed: false };
  }

  public shareTeamTargetInfo(enemyPos: THREE.Vector3): void {
    if (!this.isAlive || this.hasLineOfSight) return;
    if (this.state === 'PATROL') {
      this.lastKnownTargetPos.copy(enemyPos);
      this.state = 'INVESTIGATE';
      this.repathTimer = 0;
    }
  }

  public stepFixed(
    dt: number,
    nowSec: number,
    bvh: BVH,
    navWorld: NavWorld,
    rigidWorld: RigidWorld,
    damageSystem: DamageSystem,
    effects: EffectsSystem,
    spatialAudio: SpatialAudio,
    allTargets: CombatantTarget[],
    listenerPos: THREE.Vector3,
    difficulty: 'recruit' | 'regular' | 'veteran'
  ): void {
    if (!this.isAlive) {
      this.respawnTimer -= dt;
      this.ragdoll.step(dt, bvh);
      return;
    }

    this.hitFlinch = Math.max(0, this.hitFlinch - dt * 5.0);
    if (this.muzzleFlashTimer > 0) {
      this.muzzleFlashTimer -= dt;
      if (this.muzzleFlashTimer <= 0) {
        this.muzzleFlashMesh.visible = false;
      }
    }
    if (this.fireCooldown > 0) {
      this.fireCooldown -= dt;
    }

    // 1. Update Perception (BVH Vision + Sound Event Hearing)
    this.updatePerception(dt, nowSec, bvh, spatialAudio, allTargets, difficulty);

    // 2. Tactical State Machine
    this.stateTimer += dt;
    this.repathTimer -= dt;

    let wantCrouch = false;
    let wantSprint = false;
    let targetLean = 0;
    let moveGoal: THREE.Vector3 | null = null;

    if (this.magAmmo <= 0 && this.state !== 'RELOAD') {
      this.state = 'RELOAD';
      this.reloadTimer = 2.1;
    }

    switch (this.state) {
      case 'RELOAD': {
        wantCrouch = true;
        this.reloadTimer -= dt;
        if (this.reloadTimer <= 0) {
          this.magAmmo = 30;
          this.state = this.hasLineOfSight ? 'ENGAGE' : 'PATROL';
        }
        break;
      }

      case 'PATROL': {
        if (this.hasLineOfSight && this.currentTarget) {
          this.state = 'ENGAGE';
          this.stateTimer = 0;
          break;
        }
        if (this.path.length === 0 || this.pathIndex >= this.path.length || this.repathTimer <= 0) {
          const wp = this.rng.pick(navWorld.patrolWaypoints);
          this.path = navWorld.findPath(this.controller.position, wp);
          this.pathIndex = 0;
          this.repathTimer = this.rng.range(4.5, 7.5);
        }
        moveGoal = this.getCurrentPathTarget();
        break;
      }

      case 'INVESTIGATE': {
        if (this.hasLineOfSight && this.currentTarget) {
          this.state = 'ENGAGE';
          this.stateTimer = 0;
          break;
        }
        if (this.repathTimer <= 0 || this.path.length === 0) {
          this.path = navWorld.findPath(this.controller.position, this.lastKnownTargetPos);
          this.pathIndex = 0;
          this.repathTimer = 2.5;
        }
        moveGoal = this.getCurrentPathTarget();
        if (
          this.controller.position.distanceTo(this.lastKnownTargetPos) < 2.2 ||
          this.stateTimer > 8.0
        ) {
          this.state = 'PATROL';
          this.stateTimer = 0;
        }
        break;
      }

      case 'ENGAGE': {
        if (!this.hasLineOfSight) {
          if (this.timeSinceSawTarget > 2.2) {
            this.state = 'FLANK';
            this.stateTimer = 0;
            this.repathTimer = 0;
          }
          break;
        }

        // Seek tactical cover if wounded or after sustained exposure
        if (this.health < 55 || this.stateTimer > 2.6) {
          const cov = navWorld.findBestCover(
            this.numericId,
            this.controller.position,
            this.lastKnownTargetPos
          );
          if (cov) {
            if (this.assignedCover) this.assignedCover.occupiedBy = -1;
            this.assignedCover = cov;
            cov.occupiedBy = this.numericId;
            this.state = 'TAKE_COVER';
            this.stateTimer = 0;
            this.path = navWorld.findPath(this.controller.position, cov.position);
            this.pathIndex = 0;
            break;
          }
        }

        // Strafe slightly while firing controlled bursts
        const strafeDir = Math.sin(nowSec * 2.1 + this.numericId) > 0 ? 1 : -1;
        const rightX = Math.cos(this.yaw) * strafeDir;
        const rightZ = -Math.sin(this.yaw) * strafeDir;
        moveGoal = new THREE.Vector3(
          this.controller.position.x + rightX * 2.0,
          this.controller.position.y,
          this.controller.position.z + rightZ * 2.0
        );
        break;
      }

      case 'TAKE_COVER': {
        wantSprint = true;
        if (!this.assignedCover) {
          this.state = 'ENGAGE';
          break;
        }
        moveGoal = this. getCurrentPathTarget() ?? this.assignedCover.position;
        if (this.controller.position.distanceTo(this.assignedCover.position) < 1.15) {
          this.state = 'PEEK_FIRE';
          this.stateTimer = 0;
        } else if (this.stateTimer > 4.5) {
          this.state = 'ENGAGE';
          this.stateTimer = 0;
        }
        break;
      }

      case 'PEEK_FIRE': {
        // Alternate between crouching behind cover (0..1.1s) and standing/leaning out to fire bursts (1.1..2.8s)
        const cycle = this.stateTimer % 2.9;
        if (cycle < 1.05) {
          wantCrouch = true;
        } else {
          wantCrouch = false;
          targetLean = (this.numericId % 2 === 0 ? 1 : -1) * 0.22;
        }
        if (this.stateTimer > 5.8 || (!this.hasLineOfSight && this.timeSinceSawTarget > 3.5)) {
          this.state = 'FLANK';
          this.stateTimer = 0;
          this.repathTimer = 0;
        }
        break;
      }

      case 'FLANK': {
        if (this.hasLineOfSight) {
          this.state = 'ENGAGE';
          this.stateTimer = 0;
          break;
        }
        if (this.repathTimer <= 0 || this.path.length === 0) {
          // Offset perpendicular to target to flank via side alley
          const flankX = THREE.MathUtils.clamp(
            this.lastKnownTargetPos.x + (this.numericId % 2 === 0 ? -12 : 12),
            -30,
            30
          );
          const flankGoal = new THREE.Vector3(flankX, 0.05, this.lastKnownTargetPos.z);
          this.path = navWorld.findPath(this.controller.position, flankGoal);
          this.pathIndex = 0;
          this.repathTimer = 3.0;
        }
        moveGoal = this.getCurrentPathTarget();
        if (this.stateTimer > 6.5) {
          this.state = 'PATROL';
          this.stateTimer = 0;
        }
        break;
      }
    }

    // 3. Steering & Swept-Capsule Movement
    let wishVelX = 0;
    let wishVelZ = 0;
    const speed = wantCrouch ? 2.6 : wantSprint ? 5.6 : 4.2;

    if (moveGoal) {
      const dx = moveGoal.x - this.controller.position.x;
      const dz = moveGoal.z - this.controller.position.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.25) {
        wishVelX = (dx / d) * speed;
        wishVelZ = (dz / d) * speed;
      }
    }

    this.controller.step(dt, bvh, wishVelX, wishVelZ, false, wantCrouch);
    this.leanAngle += (targetLean - this.leanAngle) * Math.min(1, dt * 10);

    // Footstep sound emission
    const horizSpeed = Math.hypot(this.controller.velocity.x, this.controller.velocity.z);
    if (this.controller.isGrounded && horizSpeed > 0.5) {
      this.footstepAccum += horizSpeed * dt;
      if (this.footstepAccum >= 1.85) {
        this.footstepAccum = 0;
        spatialAudio.playFootstepAt(
          this.controller.position,
          this.controller.groundMaterial,
          wantSprint,
          this.team,
          nowSec,
          false
        );
      }
    }

    // 4. Aiming & Controlled Burst Firing (Strict Line-of-Sight requirement)
    if (this.hasLineOfSight && this.currentTarget && this.state !== 'RELOAD') {
      const tPos = this.currentTarget.getPosition();
      this._targetEye.set(tPos.x, tPos.y + this.currentTarget.getHeight() * 0.72, tPos.z);
      this.controller.getEyePosition(1.0, this._eyePos);
      this._toTarget.subVectors(this._targetEye, this._eyePos);

      const horizDist = Math.hypot(this._toTarget.x, this._toTarget.z);
      const desiredYaw = Math.atan2(-this._toTarget.x, -this._toTarget.z);
      const desiredPitch = Math.atan2(this._toTarget.y, Math.max(0.1, horizDist));

      const turnRate = difficulty === 'veteran' ? 8.5 : difficulty === 'regular' ? 6.2 : 4.2;
      this.yaw = this.lerpAngle(this.yaw, desiredYaw, Math.min(1, dt * turnRate));
      this.pitch += (desiredPitch - this.pitch) * Math.min(1, dt * turnRate);

      // Fire controlled 3-5 round bursts once reaction time / detection is complete
      if (this.detectionProgress >= 1.0 && !wantCrouch) {
        if (this.burstRemaining > 0 && this.fireCooldown <= 0 && this.magAmmo > 0) {
          this.executeBotShot(
            nowSec,
            rigidWorld,
            damageSystem,
            effects,
            spatialAudio,
            allTargets,
            listenerPos,
            difficulty
          );
          this.burstRemaining--;
          this.fireCooldown = this.burstRemaining > 0 ? 0.095 : this.rng.range(0.42, 0.78);
        } else if (this.burstRemaining <= 0 && this.fireCooldown <= 0) {
          this.burstRemaining = this.rng.int(2, 4);
        }
      }
    } else if (horizSpeed > 0.4) {
      const moveYaw = Math.atan2(-this.controller.velocity.x, -this.controller.velocity.z);
      this.yaw = this.lerpAngle(this.yaw, moveYaw, Math.min(1, dt * 7.0));
      this.pitch *= Math.max(0, 1 - dt * 5);
    }

    this.stridePhase += horizSpeed * dt * 2.9;
  }

  private updatePerception(
    dt: number,
    nowSec: number,
    bvh: BVH,
    spatialAudio: SpatialAudio,
    allTargets: CombatantTarget[],
    difficulty: 'recruit' | 'regular' | 'veteran'
  ): void {
    this.controller.getEyePosition(1.0, this._eyePos);
    const forwardX = -Math.sin(this.yaw);
    const forwardZ = -Math.cos(this.yaw);

    let bestVisibleEnemy: CombatantTarget | null = null;
    let bestDist = 85;

    for (let i = 0; i < allTargets.length; i++) {
      const t = allTargets[i];
      if (!t.isAlive || t.team === this.team) continue;

      const tPos = t.getPosition();
      const dx = tPos.x - this._eyePos.x;
      const dz = tPos.z - this._eyePos.z;
      const dist = Math.hypot(dx, dz);
      if (dist > bestDist) continue;

      // FOV cone check (120 degrees, or 360 if very close < 4.5m)
      const dot = (dx * forwardX + dz * forwardZ) / Math.max(0.01, dist);
      if (dot < -0.15 && dist > 4.5) continue;

      // Strict BVH line-of-sight check so bots NEVER see or track through walls
      this._targetEye.set(tPos.x, tPos.y + t.getHeight() * 0.78, tPos.z);
      const wallCheck = bvh.segmentCast(this._eyePos, this._targetEye);
      if (!wallCheck.hit) {
        bestDist = dist;
        bestVisibleEnemy = t;
      }
    }

    if (bestVisibleEnemy) {
      this.currentTarget = bestVisibleEnemy;
      this.hasLineOfSight = true;
      this.lastKnownTargetPos.copy(bestVisibleEnemy.getPosition());
      this.timeSinceSawTarget = 0;

      const reactSpeed = difficulty === 'veteran' ? 3.4 : difficulty === 'regular' ? 2.4 : 1.65;
      const distFactor = THREE.MathUtils.clamp(1.25 - bestDist / 65, 0.45, 1.35);
      this.detectionProgress = Math.min(1.0, this.detectionProgress + dt * reactSpeed * distFactor);
    } else {
      this.hasLineOfSight = false;
      this.timeSinceSawTarget += dt;
      this.detectionProgress = Math.max(0, this.detectionProgress - dt * 1.4);

      // Check hearing perception from SpatialAudio gameplay sound events
      for (let i = spatialAudio.recentSoundEvents.length - 1; i >= 0; i--) {
        const ev = spatialAudio.recentSoundEvents[i];
        if (ev.team === this.team || ev.team === 'neutral') continue;
        if (nowSec - ev.timestamp > 0.5) continue;
        const d = this.controller.position.distanceTo(ev.position);
        if (d < ev.loudness) {
          this.lastKnownTargetPos.copy(ev.position).add(
            new THREE.Vector3(this.rng.signed() * 1.8, 0, this.rng.signed() * 1.8)
          );
          if (this.state === 'PATROL') {
            this.state = 'INVESTIGATE';
            this.stateTimer = 0;
            this.repathTimer = 0;
          }
          break;
        }
      }
    }
  }

  private getCurrentPathTarget(): THREE.Vector3 | null {
    if (this.path.length === 0 || this.pathIndex >= this.path.length) return null;
    const wp = this.path[this.pathIndex];
    const d = Math.hypot(wp.x - this.controller.position.x, wp.z - this.controller.position.z);
    if (d < 1.1 && this.pathIndex < this.path.length - 1) {
      this.pathIndex++;
    }
    return this.path[this.pathIndex];
  }

  private executeBotShot(
    nowSec: number,
    rigidWorld: RigidWorld,
    damageSystem: DamageSystem,
    effects: EffectsSystem,
    spatialAudio: SpatialAudio,
    allTargets: CombatantTarget[],
    listenerPos: THREE.Vector3,
    difficulty: 'recruit' | 'regular' | 'veteran'
  ): void {
    this.magAmmo--;
    this.lastFiredTimestamp = nowSec;
    this.muzzleFlashTimer = 0.045;
    this.muzzleFlashMesh.visible = true;

    this.controller.getEyePosition(1.0, this._eyePos);
    const cosP = Math.cos(this.pitch);
    this._aimDir
      .set(-Math.sin(this.yaw) * cosP, Math.sin(this.pitch), -Math.cos(this.yaw) * cosP)
      .normalize();

    this.muzzleFlashMesh.getWorldPosition(this._muzzleWorld);
    spatialAudio.playGunshotAt(this._muzzleWorld, this.team, nowSec, false);

    // Difficulty-tuned dispersion so bots feel fair and tactical, never aimbots
    const spread = difficulty === 'veteran' ? 0.032 : difficulty === 'regular' ? 0.048 : 0.068;

    const outcome = damageSystem.fireBallisticTrace(
      this._eyePos,
      this._aimDir,
      this._muzzleWorld,
      spread,
      16,
      this.id,
      this.name,
      this.team,
      allTargets,
      listenerPos,
      nowSec
    );

    if (outcome.killed) {
      this.kills++;
    }

    // Spawn occasional casing if close to player
    if (this._muzzleWorld.distanceToSquared(listenerPos) < 20 * 20) {
      rigidWorld.spawnCasing(
        this._muzzleWorld,
        new THREE.Vector3(this.rng.signed() * 2, 2.0, this.rng.signed() * 2),
        new THREE.Vector3(15, 20, 12)
      );
    }
  }

  private lerpAngle(a: number, b: number, t: number): number {
    let diff = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
    if (diff < -Math.PI) diff += Math.PI * 2;
    return a + diff * t;
  }

  /**
   * Updates Procedural Character Animation (Stride Cycle, Ground Foot IK, Upper-Body Aim IK, Recoil, Flinch, or XPBD Ragdoll)
   */
  public syncVisualRig(alpha: number, bvh: BVH): void {
    if (!this.isAlive && this.ragdoll.active) {
      this.ragdoll.updateRenderPositions(alpha);
      const pelvisNode = this.ragdoll.nodes[0].renderPos;
      const chestNode = this.ragdoll.nodes[1].renderPos;
      const lKneeNode = this.ragdoll.nodes[7].renderPos;
      const rKneeNode = this.ragdoll.nodes[9].renderPos;

      this.rootGroup.position.set(pelvisNode.x, pelvisNode.y - 0.22, pelvisNode.z);
      const spineDir = chestNode.clone().sub(pelvisNode).normalize();
      this.pelvisGroup.position.set(0, 0.22, 0);
      this.pelvisGroup.rotation.set(
        Math.atan2(spineDir.z, Math.max(0.1, spineDir.y)) + 1.25,
        this.yaw,
        Math.atan2(-spineDir.x, Math.max(0.1, spineDir.y))
      );
      this.leftLegGroup.rotation.x = (lKneeNode.y - pelvisNode.y) * 1.2;
      this.rightLegGroup.rotation.x = (rKneeNode.y - pelvisNode.y) * 1.2;
      return;
    }

    const interpPos = this.controller.getInterpolatedPosition(alpha, this._rayOrigin);
    this.rootGroup.position.copy(interpPos);
    this.rootGroup.rotation.set(0, this.yaw, 0);

    const speed = Math.hypot(this.controller.velocity.x, this.controller.velocity.z);
    const moveFactor = Math.min(1, speed / 4.2);
    const crouchOffset = this.controller.isCrouching ? -0.34 : 0;

    // Foot IK height probing on uneven ground / stairs
    let leftFootIKOffset = 0;
    let rightFootIKOffset = 0;
    if (this.controller.isGrounded && speed < 0.25) {
      const cos = Math.cos(this.yaw);
      const sin = Math.sin(this.yaw);
      this._rayOrigin.set(interpPos.x - 0.12 * cos, interpPos.y + 0.5, interpPos.z + 0.12 * sin);
      const lHit = bvh.raycast(this._rayOrigin, this._down, 0.85);
      if (lHit.hit) leftFootIKOffset = THREE.MathUtils.clamp(lHit.point.y - interpPos.y, -0.18, 0.22);

      this._rayOrigin.set(interpPos.x + 0.12 * cos, interpPos.y + 0.5, interpPos.z - 0.12 * sin);
      const rHit = bvh.raycast(this._rayOrigin, this._down, 0.85);
      if (rHit.hit) rightFootIKOffset = THREE.MathUtils.clamp(rHit.point.y - interpPos.y, -0.18, 0.22);
    }

    const pelvisComp = Math.min(leftFootIKOffset, rightFootIKOffset);
    const strideBounce = Math.abs(Math.sin(this.stridePhase)) * 0.045 * moveFactor;
    this.pelvisGroup.position.set(0, 0.90 + crouchOffset + pelvisComp + strideBounce, 0);
    this.pelvisGroup.rotation.set(0, 0, 0);

    // Leg stride cycle + knee bend + crouch / IK compensation
    const lSwing = Math.sin(this.stridePhase) * 0.68 * moveFactor;
    const rSwing = Math.sin(this.stridePhase + Math.PI) * 0.68 * moveFactor;
    const crouchHipBend = this.controller.isCrouching ? 0.72 : 0;
    const crouchKneeBend = this.controller.isCrouching ? -1.15 : 0;

    this.leftLegGroup.rotation.x = lSwing + crouchHipBend + leftFootIKOffset * 1.4;
    this.leftShinGroup.rotation.x = Math.min(0, -Math.abs(lSwing) * 0.65 + crouchKneeBend - leftFootIKOffset * 1.8);

    this.rightLegGroup.rotation.x = rSwing + crouchHipBend + rightFootIKOffset * 1.4;
    this.rightShinGroup.rotation.x = Math.min(0, -Math.abs(rSwing) * 0.65 + crouchKneeBend - rightFootIKOffset * 1.8);

    // Upper-body Aim IK + Cover Peek Lean + Hit Flinch + Recoil
    const recoilKick = this.muzzleFlashTimer > 0 ? 0.12 : 0;
    this.torsoGroup.rotation.x = -this.pitch * 0.55 - this.hitFlinch * 0.28 + moveFactor * 0.12;
    this.torsoGroup.rotation.z = this.leanAngle + this.hitFlinch * 0.14;
    this.torsoGroup.rotation.y = Math.sin(this.stridePhase) * 0.06 * moveFactor;

    this.headGroup.rotation.x = -this.pitch * 0.45;
    this.rightArmGroup.rotation.x = -this.pitch * 0.45 - recoilKick;
    this.leftArmGroup.rotation.x = -this.pitch * 0.45 - recoilKick;
  }
}
