import * as THREE from 'three';
import { SeededRandom } from '../core/SeededRandom';
import { BVH, MaterialId } from '../physics/BVH';
import { RigidWorld } from '../physics/RigidWorld';
import { SpatialAudio } from '../audio/SpatialAudio';
import { EffectsSystem } from './EffectsSystem';

export type HitZone = 'head' | 'torso' | 'limb';

export interface CombatantTarget {
  id: string;
  name: string;
  team: 'alpha' | 'bravo';
  isAlive: boolean;
  getPosition(): THREE.Vector3;
  getHeight(): number;
  applyDamage(
    amount: number,
    hitZone: HitZone,
    hitPoint: THREE.Vector3,
    impulse: THREE.Vector3,
    attackerId: string,
    attackerName: string,
    attackerTeam: 'alpha' | 'bravo',
    attackerPos: THREE.Vector3
  ): { killed: boolean };
}

export interface ShotOutcome {
  hitTarget: boolean;
  hitZone: HitZone;
  killed: boolean;
  victimName: string;
  penetrated: boolean;
  ricocheted: boolean;
  impactPoint: THREE.Vector3;
}

/**
 * Ballistic Trace, Penetration, Ricochet, and Hitbox Evaluation System
 */
export class DamageSystem {
  private shotCounter = 0;
  private _rayDir = new THREE.Vector3();
  private _reflDir = new THREE.Vector3();
  private _impulse = new THREE.Vector3();

  constructor(
    private bvh: BVH,
    private rigidWorld: RigidWorld,
    private effects: EffectsSystem,
    private spatialAudio: SpatialAudio,
    private rng: SeededRandom
  ) {}

  public fireBallisticTrace(
    origin: THREE.Vector3,
    aimDir: THREE.Vector3,
    muzzleVisualPos: THREE.Vector3,
    spread: number,
    baseDamage: number,
    shooterId: string,
    shooterName: string,
    shooterTeam: 'alpha' | 'bravo',
    targets: CombatantTarget[],
    listenerPos: THREE.Vector3,
    nowSec: number
  ): ShotOutcome {
    this.shotCounter++;

    // Apply spread cone
    this._rayDir
      .copy(aimDir)
      .add(
        new THREE.Vector3(
          this.rng.gaussian() * spread * 0.55,
          this.rng.gaussian() * spread * 0.55,
          this.rng.gaussian() * spread * 0.55
        )
      )
      .normalize();

    const maxRange = 140;
    const worldHits = this.bvh.raycastAll(origin, this._rayDir, maxRange);

    let maxValidDist = maxRange;
    let penetrated = false;
    let ricocheted = false;
    let damageScale = 1.0;
    let primaryImpactPoint = origin.clone().addScaledVector(this._rayDir, maxRange);

    if (worldHits.length > 0) {
      const firstHit = worldHits[0];
      primaryImpactPoint.copy(firstHit.point);
      maxValidDist = firstHit.distance;

      // Spawn primary impact effect & spatial sound
      const cosIncidence = Math.abs(this._rayDir.dot(firstHit.normal));
      const hardSurface =
        firstHit.materialId === MaterialId.CONCRETE ||
        firstHit.materialId === MaterialId.METAL ||
        firstHit.materialId === MaterialId.ROAD ||
        firstHit.materialId === MaterialId.BRICK;

      // Check shallow-angle ricochet on hard surfaces
      if (hardSurface && cosIncidence < 0.26 && this.rng.chance(0.65)) {
        ricocheted = true;
        this._reflDir
          .copy(this._rayDir)
          .addScaledVector(firstHit.normal, -2 * this._rayDir.dot(firstHit.normal))
          .normalize();
        const ricoEnd = firstHit.point.clone().addScaledVector(this._reflDir, 14);
        this.effects.spawnTracer(firstHit.point, ricoEnd);
      }

      this.effects.spawnSurfaceImpact(firstHit.point, firstHit.normal, firstHit.materialId, ricocheted);
      this.spatialAudio.playImpactAt(firstHit.point, firstHit.materialId, ricocheted, nowSec);

      // Check thin-material penetration (wood, thin metal, plaster, glass)
      const penetrable =
        (firstHit.materialId === MaterialId.WOOD && firstHit.thickness <= 0.30) ||
        (firstHit.materialId === MaterialId.GLASS && firstHit.thickness <= 0.25) ||
        (firstHit.materialId === MaterialId.METAL && firstHit.thickness <= 0.14) ||
        (firstHit.materialId === MaterialId.PLASTER && firstHit.thickness <= 0.22);

      if (penetrable && !ricocheted) {
        penetrated = true;
        damageScale = 0.62;
        maxValidDist = worldHits.length > 1 ? worldHits[1].distance : maxRange;
        if (worldHits.length > 1) {
          const secondHit = worldHits[1];
          this.effects.spawnSurfaceImpact(secondHit.point, secondHit.normal, secondHit.materialId, false);
        }
      }
    }

    // Check dynamic rigid bodies (reactive cans, crates, barrels)
    const dynHit = this.rigidWorld.raycastDynamic(origin, this._rayDir, maxValidDist);
    if (dynHit.body && dynHit.distance < maxValidDist) {
      this._impulse.copy(this._rayDir).multiplyScalar(16.5);
      this.rigidWorld.applyImpulseAtPoint(dynHit.body, this._impulse, dynHit.point);
      this.effects.spawnSurfaceImpact(dynHit.point, dynHit.normal, dynHit.body.materialId, false);
      this.spatialAudio.playImpactAt(dynHit.point, dynHit.body.materialId, false, nowSec);
    }

    // Check enemy/combatant hitboxes along ray up to maxValidDist
    let bestTarget: CombatantTarget | null = null;
    let bestTargetDist = maxValidDist;
    let bestHitZone: HitZone = 'torso';
    let bestHitPoint = new THREE.Vector3();

    for (let i = 0; i < targets.length; i++) {
      const t = targets[i];
      if (!t.isAlive || t.id === shooterId || t.team === shooterTeam) continue;

      const root = t.getPosition();
      const h = t.getHeight();

      // Ray vs vertical cylinder/capsule check
      const hitRes = this.intersectCombatantHitboxes(origin, this._rayDir, root, h, bestTargetDist);
      if (hitRes.hit) {
        bestTarget = t;
        bestTargetDist = hitRes.distance;
        bestHitZone = hitRes.zone;
        bestHitPoint.copy(hitRes.point);
      }
    }

    // Occasional visible ballistic tracer (every 2nd shot)
    if (this.shotCounter % 2 === 0) {
      const traceEnd = bestTarget ? bestHitPoint : primaryImpactPoint;
      this.effects.spawnTracer(muzzleVisualPos, traceEnd);
    }

    // Check supersonic near-miss bullet whizz past listener (when fired by bots)
    if (shooterId !== 'player') {
      const toListener = listenerPos.clone().sub(origin);
      const proj = toListener.dot(this._rayDir);
      if (proj > 1.5 && proj < maxValidDist) {
        const closestPt = origin.clone().addScaledVector(this._rayDir, proj);
        if (closestPt.distanceTo(listenerPos) < 2.8) {
          this.spatialAudio.playBulletWhizzNearListener(closestPt);
        }
      }
    }

    if (bestTarget) {
      const zoneMult = bestHitZone === 'head' ? 2.0 : bestHitZone === 'torso' ? 1.0 : 0.78;
      const finalDamage = Math.round(baseDamage * zoneMult * damageScale);
      this._impulse.copy(this._rayDir).multiplyScalar(bestHitZone === 'head' ? 95 : 65);
      this._impulse.y += 18;

      const dmgRes = bestTarget.applyDamage(
        finalDamage,
        bestHitZone,
        bestHitPoint,
        this._impulse,
        shooterId,
        shooterName,
        shooterTeam,
        origin
      );

      // Clean non-graphic cloth/dust impact puff on hit
      this.effects.spawnSurfaceImpact(bestHitPoint, this._rayDir.clone().negate(), MaterialId.CLOTH, false);

      return {
        hitTarget: true,
        hitZone: bestHitZone,
        killed: dmgRes.killed,
        victimName: bestTarget.name,
        penetrated,
        ricocheted,
        impactPoint: bestHitPoint
      };
    }

    return {
      hitTarget: false,
      hitZone: 'torso',
      killed: false,
      victimName: '',
      penetrated,
      ricocheted,
      impactPoint: primaryImpactPoint
    };
  }

  private intersectCombatantHitboxes(
    origin: THREE.Vector3,
    dir: THREE.Vector3,
    rootPos: THREE.Vector3,
    height: number,
    maxDist: number
  ): { hit: boolean; distance: number; zone: HitZone; point: THREE.Vector3 } {
    // 1. Check Head Sphere first (top of character)
    const headCenter = new THREE.Vector3(rootPos.x, rootPos.y + height - 0.19, rootPos.z);
    const headRadius = 0.19;
    const ocX = origin.x - headCenter.x;
    const ocY = origin.y - headCenter.y;
    const ocZ = origin.z - headCenter.z;
    const bHead = ocX * dir.x + ocY * dir.y + ocZ * dir.z;
    const cHead = ocX * ocX + ocY * ocY + ocZ * ocZ - headRadius * headRadius;
    const discHead = bHead * bHead - cHead;

    if (discHead >= 0) {
      const t = -bHead - Math.sqrt(discHead);
      if (t > 0.1 && t < maxDist) {
        return {
          hit: true,
          distance: t,
          zone: 'head',
          point: origin.clone().addScaledVector(dir, t)
        };
      }
    }

    // 2. Check Body Cylinder (x, z radius = 0.34, y in [root.y, root.y + height - 0.25])
    const bodyRadius = 0.34;
    const dx = dir.x;
    const dz = dir.z;
    const ox = origin.x - rootPos.x;
    const oz = origin.z - rootPos.z;

    const a = dx * dx + dz * dz;
    if (a > 1e-6) {
      const b = ox * dx + oz * dz;
      const c = ox * ox + oz * oz - bodyRadius * bodyRadius;
      const disc = b * b - a * c;
      if (disc >= 0) {
        const t = (-b - Math.sqrt(disc)) / a;
        if (t > 0.1 && t < maxDist) {
          const hitY = origin.y + dir.y * t;
          const relY = hitY - rootPos.y;
          if (relY >= 0 && relY <= height - 0.22) {
            const zone: HitZone = relY > height * 0.48 ? 'torso' : 'limb';
            return {
              hit: true,
              distance: t,
              zone,
              point: origin.clone().addScaledVector(dir, t)
            };
          }
        }
      }
    }

    return { hit: false, distance: maxDist, zone: 'torso', point: new THREE.Vector3() };
  }
}
