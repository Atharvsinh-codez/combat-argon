import * as THREE from 'three';
import { Input } from '../core/Input';
import { Settings } from '../core/Settings';
import { SeededRandom } from '../core/SeededRandom';
import { BVH } from '../physics/BVH';
import { CharacterController } from '../physics/CharacterController';
import { RigidWorld } from '../physics/RigidWorld';
import { SpatialAudio } from '../audio/SpatialAudio';
import { Weapon } from './Weapon';
import { CombatantTarget, DamageSystem, HitZone, ShotOutcome } from './DamageSystem';
import { EffectsSystem } from './EffectsSystem';

/**
 * First-Person Player Controller, Camera Inertia, Weapon Integration, Health Regeneration, and Death/Respawn
 */
export class Player implements CombatantTarget {
  public readonly id = 'player';
  public readonly name = 'VANGUARD-1 (YOU)';
  public readonly team: 'alpha' | 'bravo' = 'alpha';

  public controller: CharacterController;
  public weapon: Weapon;

  public yaw = 0;
  public pitch = 0;
  public cameraRoll = 0;
  public leanAmount = 0;
  private leanOffset = new THREE.Vector3();
  public landingCompression = 0;
  public damageCameraKick = new THREE.Vector2();
  public damageFlash = 0;
  public flashbangBlindness = 0;
  public lastDamageDirection = new THREE.Vector3(0, 0, -1);
  public damageIndicatorAlpha = 0;

  public health = 100;
  public maxHealth = 100;
  public isAlive = true;
  public timeSinceLastDamage = 10;
  public respawnTimer = 0;
  public kills = 0;
  public deaths = 0;

  private footstepAccum = 0;
  private semiAutoLatched = false;
  private fireBufferTimer = 0;
  private pendingLookYaw = 0;
  private pendingLookPitch = 0;

  private _forward = new THREE.Vector3();
  private _right = new THREE.Vector3();
  private _eyePos = new THREE.Vector3();
  private _muzzlePos = new THREE.Vector3();
  private _ejectPos = new THREE.Vector3();
  private _casingVel = new THREE.Vector3();
  private _casingAngVel = new THREE.Vector3();
  private _forwardXZ = new THREE.Vector3();
  private _rightXZ = new THREE.Vector3();
  private _leanDir = new THREE.Vector3();

  public onShotOutcome?: (outcome: ShotOutcome) => void;
  public onKilledBy?: (killerName: string) => void;

  constructor(
    spawnPos: THREE.Vector3,
    private settings: Settings,
    private rng: SeededRandom
  ) {
    this.controller = new CharacterController(spawnPos);
    this.weapon = new Weapon(rng.fork('player_weapon'));
  }

  public getPosition(): THREE.Vector3 {
    return this.controller.position;
  }

  public getHeight(): number {
    return this.controller.currentHeight;
  }

  public spawnAt(pos: THREE.Vector3, yaw = 0): void {
    this.controller.teleport(pos);
    this.yaw = yaw;
    this.pitch = 0.02;
    this.health = 100;
    this.isAlive = true;
    this.damageFlash = 0;
    this.damageIndicatorAlpha = 0;
    this.weapon.magAmmo = this.weapon.magCapacity;
    this.weapon.reserveAmmo = 120;
    this.weapon.tacticalCount = 1;
    this.weapon.explosiveCount = 1;
    this.weapon.isReloading = false;
  }

  public applyDamage(
    amount: number,
    _hitZone: HitZone,
    _hitPoint: THREE.Vector3,
    _impulse: THREE.Vector3,
    _attackerId: string,
    attackerName: string,
    _attackerTeam: 'alpha' | 'bravo',
    attackerPos: THREE.Vector3
  ): { killed: boolean } {
    if (!this.isAlive) return { killed: false };

    this.health = Math.max(0, this.health - amount);
    this.timeSinceLastDamage = 0;
    this.damageFlash = Math.min(1.0, this.damageFlash + (amount / 45));
    this.damageIndicatorAlpha = 1.0;
    this.lastDamageDirection.subVectors(attackerPos, this.controller.position).normalize();

    const shakeScale = this.settings.data.cameraShake;
    this.damageCameraKick.x += this.rng.range(0.025, 0.055) * shakeScale;
    this.damageCameraKick.y += this.rng.signed() * 0.045 * shakeScale;

    if (this.health <= 0) {
      this.isAlive = false;
      this.deaths++;
      this.respawnTimer = 2.65;
      if (this.onKilledBy) {
        this.onKilledBy(attackerName);
      }
      return { killed: true };
    }
    return { killed: false };
  }

  public stepFixed(
    dt: number,
    nowSec: number,
    input: Input,
    bvh: BVH,
    rigidWorld: RigidWorld,
    damageSystem: DamageSystem,
    effects: EffectsSystem,
    spatialAudio: SpatialAudio,
    allTargets: CombatantTarget[],
    scene: THREE.Scene
  ): void {
    this.damageFlash = Math.max(0, this.damageFlash - dt * 2.4);
    this.damageIndicatorAlpha = Math.max(0, this.damageIndicatorAlpha - dt * 0.9);
    this.flashbangBlindness = Math.max(0, this.flashbangBlindness - dt * 0.65);

    if (!this.isAlive) {
      this.respawnTimer -= dt;
      return;
    }

    this.timeSinceLastDamage += dt;
    // Delayed health regeneration after 4.6 seconds out of combat
    if (this.timeSinceLastDamage > 4.6 && this.health < this.maxHealth) {
      this.health = Math.min(this.maxHealth, this.health + 24 * dt);
    }

    const wantAds = input.isAdsHeld();
    const look = input.consumeLookDelta(wantAds);
    this.yaw += look.yawDelta;
    this.pitch = THREE.MathUtils.clamp(this.pitch + look.pitchDelta, -1.48, 1.48);
    const yawDelta = look.yawDelta + this.pendingLookYaw;
    const pitchDelta = look.pitchDelta + this.pendingLookPitch;
    this.pendingLookYaw = 0;
    this.pendingLookPitch = 0;

    // Apply smooth recoil recovery and camera kick
    if (this.weapon.recoilCameraKick.lengthSq() > 1e-6) {
      const applyX = this.weapon.recoilCameraKick.x * Math.min(1, dt * 26);
      const applyY = this.weapon.recoilCameraKick.y * Math.min(1, dt * 26);
      this.pitch = THREE.MathUtils.clamp(this.pitch + applyX, -1.48, 1.48);
      this.yaw += applyY;
      this.weapon.recoilCameraKick.x -= applyX;
      this.weapon.recoilCameraKick.y -= applyY;
      this.weapon.recoilCameraKick.multiplyScalar(Math.max(0, 1 - dt * 10));
    }

    this.damageCameraKick.multiplyScalar(Math.max(0, 1 - dt * 12));

    // Calculate horizontal movement vectors
    const axes = input.getMoveAxes();
    const isCrouching = input.isCrouching();
    const isSprinting = input.isSprinting() && axes.z > 0.2 && !wantAds && !isCrouching;

    const baseSpeed = isCrouching
      ? 3.15
      : wantAds
        ? 3.65
        : isSprinting
          ? 6.65
          : 4.85;

    const sinY = Math.sin(this.yaw);
    const cosY = Math.cos(this.yaw);
    const forwardXZ = this._forwardXZ.set(-sinY, 0, -cosY);
    const rightXZ = this._rightXZ.set(cosY, 0, -sinY);

    const wishVelX = (forwardXZ.x * axes.z + rightXZ.x * axes.x) * baseSpeed;
    const wishVelZ = (forwardXZ.z * axes.z + rightXZ.z * axes.x) * baseSpeed;

    this.controller.step(
      dt,
      bvh,
      wishVelX,
      wishVelZ,
      input.wasJumpPressed(),
      isCrouching,
      forwardXZ
    );

    // Landing compression & audio
    if (this.controller.landingImpactSpeed > 0) {
      this.landingCompression = Math.min(0.18, this.controller.landingImpactSpeed * 0.022);
      this.weapon.posSpring.impulse(0, -this.controller.landingImpactSpeed * 0.06, 0);
      spatialAudio.playFootstepAt(
        this.controller.position,
        this.controller.groundMaterial,
         true,
        this.team,
        nowSec,
        true
      );
    }
    this.landingCompression *= Math.exp(-14 * dt);

    // Subtle strafe camera roll inertia + tactical lean (Q/E or mobile Lean L/R)
    const leanTarget = isSprinting ? 0 : input.getLeanTarget();
    this.leanAmount += (leanTarget - this.leanAmount) * Math.min(1, dt * 11);
    if (Math.abs(this.leanAmount) > 0.005) {
      this.controller.getEyePosition(1.0, this._eyePos);
      const leanDir = this._leanDir.copy(rightXZ).multiplyScalar(Math.sign(this.leanAmount));
      const maxLeanDist = Math.abs(this.leanAmount) * 0.34;
      const leanHit = bvh.raycast(this._eyePos, leanDir, maxLeanDist + 0.22);
      const safeDist = leanHit.hit ? Math.max(0, leanHit.distance - 0.22) : maxLeanDist;
      this.leanOffset.copy(leanDir).multiplyScalar(safeDist);
    } else {
      this.leanOffset.set(0, 0, 0);
    }

    const targetRoll =
      -axes.x * 0.016 * this.settings.data.cameraShake - this.leanAmount * 0.145;
    this.cameraRoll += (targetRoll - this.cameraRoll) * Math.min(1, dt * 12);

    // Footstep cadence
    const horizSpeed = Math.hypot(this.controller.velocity.x, this.controller.velocity.z);
    if (this.controller.isGrounded && horizSpeed > 0.45) {
      this.footstepAccum += horizSpeed * dt;
      const strideLen = isSprinting ? 2.15 : 1.72;
      if (this.footstepAccum >= strideLen) {
        this.footstepAccum -= strideLen;
        spatialAudio.playFootstepAt(
          this.controller.position,
          this.controller.groundMaterial,
          isSprinting,
          this.team,
          nowSec,
          true
        );
      }
    } else {
      this.footstepAccum = 0;
    }

    // Weapon Controls: Fire mode, Reload, Inspect, Throwables
    if (input.wasFireModePressed()) {
      this.weapon.toggleFireMode(spatialAudio.synth);
    }
    if (input.wasReloadPressed()) {
      input.touchAdsToggled = false;
      this.weapon.startReload(spatialAudio.synth);
    }
    if (input.wasInspectPressed()) {
      this.weapon.startInspect(spatialAudio.synth);
    }
    if (input.wasExplosivePressed() && this.weapon.explosiveCount > 0) {
      this.weapon.explosiveCount--;
      this.throwItem('frag', rigidWorld, scene);
    }
    if (input.wasTacticalPressed() && this.weapon.tacticalCount > 0) {
      this.weapon.tacticalCount--;
      this.throwItem('flash', rigidWorld, scene);
    }

    // Trigger & firing logic
    const fireHeld = input.isFireHeld();
    const firePressed = input.wasFirePressed();
    if (!fireHeld) {
      this.semiAutoLatched = false;
    }
    // A tap shorter than one sim step (or landing during the cooldown) is buffered briefly so it
    // still fires instead of being silently dropped.
    if (firePressed) this.fireBufferTimer = 0.15;
    else this.fireBufferTimer = Math.max(0, this.fireBufferTimer - dt);
    const tapBuffered = this.fireBufferTimer > 0;

    const wantShot =
      this.weapon.fireMode === 'AUTO'
        ? fireHeld || tapBuffered
        : tapBuffered && !this.semiAutoLatched;

    if (wantShot) {
      if (this.weapon.magAmmo === 0 && !this.weapon.isReloading) {
        if (firePressed) {
          spatialAudio.synth.playWeaponHandling('empty_click');
          this.weapon.startReload(spatialAudio.synth);
        }
      } else if (this.weapon.canFire()) {
        if (this.weapon.fireMode === 'SEMI') {
          this.semiAutoLatched = fireHeld;
        }
        this.fireBufferTimer = 0;
        this.executePlayerShot(bvh, rigidWorld, damageSystem, effects, spatialAudio, allTargets, nowSec);
      }
    }

    // Probe wall distance in front of eye for weapon proximity tuck
    this.getAimDirection(this._forward);
    this.controller.getEyePosition(1.0, this._eyePos);
    const wallHit = bvh.raycast(this._eyePos, this._forward, 1.1);
    const wallDist = wallHit.hit ? wallHit.distance : 1.1;

    this.weapon.update(
      dt,
      nowSec,
      wantAds,
      fireHeld,
      horizSpeed,
      isSprinting,
      this.controller.isCrouching,
      this.controller.isGrounded,
      yawDelta,
      pitchDelta,
      wallDist,
      spatialAudio.synth
    );

    // Update low-health audio muffling & heartbeat
    const lowHealthRatio = this.health < 45 ? (45 - this.health) / 45 : 0;
    spatialAudio.synth.setLowHealthEffect(lowHealthRatio, nowSec);
  }

  public fireProgrammaticShot(
    bvh: BVH,
    rigidWorld: RigidWorld,
    damageSystem: DamageSystem,
    effects: EffectsSystem,
    spatialAudio: SpatialAudio,
    allTargets: CombatantTarget[],
    nowSec: number
  ): ShotOutcome | null {
    if (!this.weapon.canFire()) return null;
    return this.executePlayerShot(bvh, rigidWorld, damageSystem, effects, spatialAudio, allTargets, nowSec);
  }

  private executePlayerShot(
    _bvh: BVH,
    rigidWorld: RigidWorld,
    damageSystem: DamageSystem,
    effects: EffectsSystem,
    spatialAudio: SpatialAudio,
    allTargets: CombatantTarget[],
    nowSec: number
  ): ShotOutcome {
    const shotParams = this.weapon.triggerShot();
    this.controller.getEyePosition(1.0, this._eyePos);
    this._eyePos.add(this.leanOffset);
    this.getAimDirection(this._forward);
    this._right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    // Sync weapon root to eye before sampling world muzzle & ejection port
    this.weapon.root.position.copy(this._eyePos);
    this.weapon.root.rotation.set(this.pitch, this.yaw, this.cameraRoll, 'YXZ');
    this.weapon.root.updateMatrixWorld(true);

    this.weapon.getWorldMuzzlePosition(this.weapon.root as unknown as THREE.Camera, this._muzzlePos);
    this.weapon.getWorldEjectionPortPosition(this.weapon.root as unknown as THREE.Camera, this._ejectPos);

    // Eject physical brass casing into RigidWorld
    this._casingVel
      .copy(this._right)
      .multiplyScalar(this.rng.range(2.6, 3.8))
      .addScaledVector(this._forward, this.rng.range(-0.4, 0.5));
    this._casingVel.y += this.rng.range(1.6, 2.5);
    this._casingVel.add(this.controller.velocity);

    this._casingAngVel.set(
      this.rng.range(-28, 28),
      this.rng.range(-35, 35),
      this.rng.range(-28, 28)
    );
    rigidWorld.spawnCasing(this._ejectPos, this._casingVel, this._casingAngVel);

    // Muzzle gas & barrel smoke
    effects.spawnMuzzleGasAndSmoke(this._muzzlePos, this._forward, this.weapon.barrelHeat);

    // Layered procedural gunshot audio
    spatialAudio.playGunshotAt(this._muzzlePos, this.team, nowSec, true);

    // Ballistic trace & impact
    const outcome = damageSystem.fireBallisticTrace(
      this._eyePos,
      this._forward,
      this._muzzlePos,
      shotParams.spread,
      34,
      this.id,
      this.name,
      this.team,
      allTargets,
      this._eyePos,
      nowSec
    );

    if (outcome.killed) {
      this.kills++;
    }
    if (this.onShotOutcome) {
      this.onShotOutcome(outcome);
    }
    return outcome;
  }

  private throwItem(
    type: 'frag' | 'flash',
    rigidWorld: RigidWorld,
    scene: THREE.Scene
  ): void {
    this.controller.getEyePosition(1.0, this._eyePos);
    this.getAimDirection(this._forward);

    const geo =
      type === 'frag'
        ? new THREE.SphereGeometry(0.055, 10, 10)
        : new THREE.CylinderGeometry(0.035, 0.035, 0.12, 10);
    const mat = new THREE.MeshStandardMaterial({
      color: type === 'frag' ? 0x3b4730 : 0x505860,
      metalness: 0.65,
      roughness: 0.4
    });
    const mesh = new THREE.Mesh(geo, mat);
    const spawnOrigin = this._eyePos.clone().addScaledVector(this._forward, 0.55);
    mesh.position.copy(spawnOrigin);
    scene.add(mesh);

    const throwVel = this._forward.clone().multiplyScalar(15.5);
    throwVel.y += 3.2;
    throwVel.add(this.controller.velocity);
    rigidWorld.spawnThrowable(mesh, spawnOrigin, throwVel, type, type === 'frag' ? 2.3 : 1.7);
  }

  /**
   * Apply mouse/touch look once per rendered frame. On displays faster than the 120 Hz sim, some
   * frames run zero fixed steps, so look applied only in stepFixed made the camera judder.
   * The delta is still forwarded to the next fixed step for weapon sway.
   */
  public applyFrameLook(input: Input): void {
    if (!this.isAlive) return;
    const look = input.consumeLookDelta(input.isAdsHeld());
    if (look.yawDelta === 0 && look.pitchDelta === 0) return;
    this.yaw += look.yawDelta;
    this.pitch = THREE.MathUtils.clamp(this.pitch + look.pitchDelta, -1.48, 1.48);
    this.pendingLookYaw += look.yawDelta;
    this.pendingLookPitch += look.pitchDelta;
  }

  public getAimDirection(out: THREE.Vector3): THREE.Vector3 {
    const cosP = Math.cos(this.pitch);
    out.set(
      -Math.sin(this.yaw) * cosP,
      Math.sin(this.pitch),
      -Math.cos(this.yaw) * cosP
    );
    return out.normalize();
  }

  public syncCameraAndViewmodel(alpha: number, camera: THREE.PerspectiveCamera): void {
    this.controller.getEyePosition(alpha, this._eyePos);
    this._eyePos.y -= this.landingCompression;

    if (!this.isAlive) {
      // Non-graphic incapacitated camera fall toward ground
      const fallFrac = Math.min(1, (2.65 - this.respawnTimer) / 0.55);
      this._eyePos.y -= fallFrac * 1.15;
      camera.position.copy(this._eyePos);
      camera.rotation.set(
        this.pitch - fallFrac * 0.35,
        this.yaw,
        fallFrac * 0.48,
        'YXZ'
      );
      this.weapon.root.visible = false;
      return;
    }

    this.weapon.root.visible = true;
    camera.position.copy(this._eyePos).add(this.leanOffset);
    camera.rotation.set(
      this.pitch + this.damageCameraKick.x,
      this.yaw + this.damageCameraKick.y,
      this.cameraRoll,
      'YXZ'
    );

    // Dynamic ADS FOV zoom + firing FOV kick
    const baseFov = this.settings.data.fov;
    const adsFov = baseFov * 0.78;
    const targetFov = THREE.MathUtils.lerp(baseFov, adsFov, this.weapon.adsProgress) + this.weapon.fovKick;
    if (Math.abs(camera.fov - targetFov) > 0.01) {
      camera.fov = targetFov;
      camera.updateProjectionMatrix();
    }

    // Anchor viewmodel to eye camera transform
    this.weapon.root.position.copy(camera.position);
    this.weapon.root.quaternion.copy(camera.quaternion);
    this.weapon.root.updateMatrixWorld(true);
  }
}
