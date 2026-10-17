import * as THREE from 'three';
import { BVH, MaterialId } from '../physics/BVH';
import { SynthEngine } from './SynthEngine';

export interface SoundGameplayEvent {
  position: THREE.Vector3;
  loudness: number; // radius in meters AI can hear
  team: 'alpha' | 'bravo' | 'neutral';
  timestamp: number;
}

export interface AudioDebugRay {
  start: THREE.Vector3;
  end: THREE.Vector3;
  occluded: boolean;
  ttl: number;
}

/**
 * Spatial 3D HRTF Audio Engine with BVH Raycast Occlusion, Speed-of-Sound Delay,
 * Room/Openness Probing, and AI Sound Event Emission.
 */
export class SpatialAudio {
  public recentSoundEvents: SoundGameplayEvent[] = [];
  public debugRays: AudioDebugRay[] = [];

  private listenerPos = new THREE.Vector3();
  private listenerForward = new THREE.Vector3(0, 0, -1);
  private listenerUp = new THREE.Vector3(0, 1, 0);
  private _dir = new THREE.Vector3();
  private _probeDir = new THREE.Vector3();

  constructor(
    public synth: SynthEngine,
    private bvh: BVH
  ) {}

  public updateListener(
    position: THREE.Vector3,
    forward: THREE.Vector3,
    up: THREE.Vector3,
    dt: number,
    nowSec: number
  ): void {
    this.listenerPos.copy(position);
    this.listenerForward.copy(forward);
    this.listenerUp.copy(up);

    // Prune expired AI sound events & debug rays
    for (let i = this.recentSoundEvents.length - 1; i >= 0; i--) {
      if (nowSec - this.recentSoundEvents[i].timestamp > 3.5) {
        this.recentSoundEvents.splice(i, 1);
      }
    }
    for (let i = this.debugRays.length - 1; i >= 0; i--) {
      this.debugRays[i].ttl -= dt;
      if (this.debugRays[i].ttl <= 0) {
        this.debugRays.splice(i, 1);
      }
    }

    const ctx = this.synth.ctx;
    if (!ctx || ctx.state !== 'running') return;

    const l = ctx.listener;
    const t = ctx.currentTime;
    if (l.positionX) {
      l.positionX.setTargetAtTime(position.x, t, 0.015);
      l.positionY.setTargetAtTime(position.y, t, 0.015);
      l.positionZ.setTargetAtTime(position.z, t, 0.015);
      l.forwardX.setTargetAtTime(forward.x, t, 0.015);
      l.forwardY.setTargetAtTime(forward.y, t, 0.015);
      l.forwardZ.setTargetAtTime(forward.z, t, 0.015);
      l.upX.setTargetAtTime(up.x, t, 0.015);
      l.upY.setTargetAtTime(up.y, t, 0.015);
      l.upZ.setTargetAtTime(up.z, t, 0.015);
    } else {
      l.setPosition(position.x, position.y, position.z);
      l.setOrientation(forward.x, forward.y, forward.z, up.x, up.y, up.z);
    }
  }

  public emitGameplaySound(
    position: THREE.Vector3,
    loudness: number,
    team: 'alpha' | 'bravo' | 'neutral',
    nowSec: number
  ): void {
    this.recentSoundEvents.push({
      position: position.clone(),
      loudness,
      team,
      timestamp: nowSec
    });
  }

  private computeOcclusion(sourcePos: THREE.Vector3): { distance: number; occlusion: number } {
    this._dir.subVectors(sourcePos, this.listenerPos);
    const dist = this._dir.length();
    if (dist < 0.25) return { distance: dist, occlusion: 0 };

    this._dir.multiplyScalar(1 / dist);
    const hits = this.bvh.raycastAll(this.listenerPos, this._dir, dist - 0.15);
    let occ = 0;
    for (let i = 0; i < hits.length; i++) {
      const m = hits[i].materialId;
      const weight =
        m === MaterialId.CONCRETE || m === MaterialId.BRICK || m === MaterialId.PLASTER
          ? 0.38
          : m === MaterialId.WOOD || m === MaterialId.GLASS
            ? 0.16
            : 0.25;
      occ += weight;
    }
    occ = Math.min(0.92, occ);

    if (this.debugRays.length < 48) {
      this.debugRays.push({
        start: this.listenerPos.clone(),
        end: sourcePos.clone(),
        occluded: occ > 0.05,
        ttl: 0.65
      });
    }

    return { distance: dist, occlusion: occ };
  }

  /** Probe overhead ceiling & wall enclosure to choose between interior or exterior reverb IR */
  private isEnclosedSpace(pos: THREE.Vector3): boolean {
    this._probeDir.set(0, 1, 0);
    const ceilHit = this.bvh.raycast(pos, this._probeDir, 5.5);
    return ceilHit.hit;
  }

  private createHRTFPanner(pos: THREE.Vector3, bus: AudioNode): PannerNode | null {
    const ctx = this.synth.ctx;
    if (!ctx) return null;
    const panner = ctx.createPanner();
    panner.panningModel = this.synth.lowCostPanning ? 'equalpower' : 'HRTF';
    panner.distanceModel = 'inverse';
    panner.refDistance = 2.2;
    panner.maxDistance = 120;
    panner.rolloffFactor = 0.85;
    panner.positionX.value = pos.x;
    panner.positionY.value = pos.y;
    panner.positionZ.value = pos.z;
    panner.connect(bus);
    return panner;
  }

  public playGunshotAt(
    pos: THREE.Vector3,
    team: 'alpha' | 'bravo',
    nowSec: number,
    isFirstPerson = false
  ): void {
    this.emitGameplaySound(pos, 68, team, nowSec);
    if (!this.synth.ensureContext() || !this.synth.ctx) return;

    const enclosed = this.isEnclosedSpace(pos);
    const revNode = enclosed ? this.synth.buses.reverbInterior : this.synth.buses.reverbExterior;

    if (isFirstPerson) {
      this.synth.triggerLayeredGunshot(this.synth.buses.weapons, revNode, 0, 0, 0, true);
      return;
    }

    if (!this.synth.canStartVoice()) return;
    const { distance, occlusion } = this.computeOcclusion(pos);
    const speedOfSoundDelay = Math.min(0.28, distance / 343.0);
    const panner = this.createHRTFPanner(pos, this.synth.buses.weapons);
    if (!panner) return;

    this.synth.triggerLayeredGunshot(
      panner,
      revNode,
      speedOfSoundDelay,
      distance,
      occlusion,
      false
    );
  }

  public playBulletWhizzNearListener(closestPt: THREE.Vector3): void {
    if (!this.synth.ensureContext() || !this.synth.ctx) return;
    const d = closestPt.distanceTo(this.listenerPos);
    if (d > 3.2) return;

    const panner = this.createHRTFPanner(closestPt, this.synth.buses.impacts);
    if (!panner) return;

    const ctx = this.synth.ctx;
    const t0 = this.synth.now();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(2800, t0);
    osc.frequency.exponentialRampToValueAtTime(420, t0 + 0.085);
    g.gain.setValueAtTime(0.26 * (1 - d / 3.2), t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.09);
    osc.connect(g).connect(panner);
    osc.start(t0);
    osc.stop(t0 + 0.095);
    this.synth.releaseAfter([panner], 0.12);
  }

  public playImpactAt(
    pos: THREE.Vector3,
    materialId: MaterialId,
    isRicochet = false,
    nowSec = 0
  ): void {
    this.emitGameplaySound(pos, 18, 'neutral', nowSec);
    if (!this.synth.ensureContext() || !this.synth.canStartVoice()) return;
    const { distance } = this.computeOcclusion(pos);
    if (distance > 75) return;
    const panner = this.createHRTFPanner(pos, this.synth.buses.impacts);
    if (!panner) return;
    this.synth.playSurfaceImpact(materialId, panner, isRicochet);
  }

  public playCasingBounceAt(pos: THREE.Vector3, speed: number, surfaceMat: MaterialId): void {
    if (!this.synth.ensureContext() || !this.synth.canStartVoice()) return;
    if (pos.distanceToSquared(this.listenerPos) > 18 * 18) return;
    const panner = this.createHRTFPanner(pos, this.synth.buses.impacts);
    if (!panner) return;
    this.synth.playCasingBounce(speed, surfaceMat, panner);
  }

  public playFootstepAt(
    pos: THREE.Vector3,
    materialId: MaterialId,
    isSprint: boolean,
    team: 'alpha' | 'bravo',
    nowSec: number,
    isFirstPerson = false
  ): void {
    this.emitGameplaySound(pos, isSprint ? 22 : 12, team, nowSec);
    if (!this.synth.ensureContext()) return;
    if (isFirstPerson) {
      this.synth.playFootstep(materialId, isSprint, this.synth.buses.footsteps);
      return;
    }
    if (pos.distanceToSquared(this.listenerPos) > 32 * 32 || !this.synth.canStartVoice()) return;
    const panner = this.createHRTFPanner(pos, this.synth.buses.footsteps);
    if (!panner) return;
    this.synth.playFootstep(materialId, isSprint, panner);
  }
}
