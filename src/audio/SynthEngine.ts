import { SeededRandom } from '../core/SeededRandom';
import { MaterialId } from '../physics/BVH';

export interface AudioBusSet {
  weapons: GainNode;
  impacts: GainNode;
  footsteps: GainNode;
  characters: GainNode;
  environment: GainNode;
  ui: GainNode;
  reverbExterior: ConvolverNode;
  reverbInterior: ConvolverNode;
  reverbReturn: GainNode;
  lowHealthFilter: BiquadFilterNode;
  masterCompressor: DynamicsCompressorNode;
  masterLimiter: WaveShaperNode;
  masterGain: GainNode;
}

/**
 * 100% Procedural Web Audio Synthesizer Engine (Zero external audio files or samples)
 */
export class SynthEngine {
  public ctx: AudioContext | null = null;
  public buses!: AudioBusSet;
  public rng: SeededRandom;
  public activeVoiceCount = 0;

  private whiteNoiseBuffer!: AudioBuffer;
  private pinkNoiseBuffer!: AudioBuffer;
  private brownNoiseBuffer!: AudioBuffer;
  private saturationCurve!: Float32Array<ArrayBuffer>;
  private roundRobinIndex = 0;
  private ambientStarted = false;
  private lowHealthIntensity = 0;
  private lastHeartbeatTime = 0;

  constructor(seed = 1337420) {
    this.rng = new SeededRandom(seed ^ 0x55aa55aa);
  }

  /** Soft cap for overlapping non-player voices; the player's own gunshots always bypass it. */
  public maxVoices = 64;
  /** Use cheap equal-power panning instead of HRTF (mobile CPUs). */
  public lowCostPanning = false;

  public ensureContext(masterVolume = 0.85): boolean {
    if (!this.ctx) {
      try {
        const nav = navigator as Navigator & { audioSession?: { type: string } };
        if (nav.audioSession) {
          // iOS 17+: play through the ringer/silent switch like a game, not like a notification
          nav.audioSession.type = 'playback';
        }
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioCtx({ latencyHint: 'interactive' });
        this.initNoiseAndCurves(this.ctx);
        this.initBusArchitecture(this.ctx, masterVolume);
      } catch {
        return false;
      }
    }
    if (this.ctx.state !== 'running' && this.ctx.state !== 'closed') {
      this.ctx.resume().catch(() => {});
    }
    if (!this.ambientStarted && this.ctx.state === 'running') {
      this.startAmbientStreetBed();
    }
    return true;
  }

  /**
   * Must be called from inside a user gesture (touchend/click/keydown). Mobile browsers only
   * unlock or re-resume an interrupted AudioContext from a gesture, and iOS additionally needs a
   * buffer to actually start playing inside that gesture.
   */
  public unlockFromGesture(masterVolume: number): void {
    if (!this.ensureContext(masterVolume) || !this.ctx) return;
    const ctx = this.ctx;
    if (ctx.state === 'running' && this.ambientStarted) return;
    try {
      const src = ctx.createBufferSource();
      src.buffer = ctx.createBuffer(1, 1, ctx.sampleRate);
      src.connect(ctx.destination);
      src.start(0);
    } catch {
      // Ignore
    }
    ctx.resume().then(() => {
      if (!this.ambientStarted) this.startAmbientStreetBed();
    }).catch(() => {});
  }

  /**
   * Schedule slightly ahead of the audio clock. Scheduling exactly at currentTime lands in the
   * past on devices with large render quanta, which swallows the first few ms of every envelope
   * (the transient of a gunshot), so short sounds intermittently went missing.
   */
  public now(): number {
    return this.ctx ? this.ctx.currentTime + 0.012 : 0;
  }

  public canStartVoice(): boolean {
    return this.activeVoiceCount < this.maxVoices;
  }

  /** Detach a per-sound subgraph once it has finished so dead nodes never pile up on the buses. */
  public releaseAfter(nodes: AudioNode[], durationSec: number): void {
    setTimeout(() => {
      for (const n of nodes) {
        try {
          n.disconnect();
        } catch {
          // Already disconnected
        }
      }
    }, Math.ceil((durationSec + 0.1) * 1000));
  }

  public setMasterVolume(vol: number): void {
    if (this.ctx && this.buses) {
      this.buses.masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime, 0.03);
    }
  }

  public setLowHealthEffect(intensity: number, nowSec: number): void {
    this.lowHealthIntensity = Math.max(0, Math.min(1, intensity));
    if (!this.ctx || !this.buses) return;

    const cutoff = 18000 * Math.pow(0.06, this.lowHealthIntensity * 0.75);
    this.buses.lowHealthFilter.frequency.setTargetAtTime(cutoff, this.ctx.currentTime, 0.08);

    if (this.lowHealthIntensity > 0.25 && nowSec - this.lastHeartbeatTime > 0.68 - this.lowHealthIntensity * 0.22) {
      this.lastHeartbeatTime = nowSec;
      this.playHeartbeatPulse(this.lowHealthIntensity);
    }
  }

  private initNoiseAndCurves(ctx: AudioContext): void {
    const sr = ctx.sampleRate;
    const len = sr * 2;
    this.whiteNoiseBuffer = ctx.createBuffer(1, len, sr);
    this.pinkNoiseBuffer = ctx.createBuffer(1, len, sr);
    this.brownNoiseBuffer = ctx.createBuffer(1, len, sr);

    const wData = this.whiteNoiseBuffer.getChannelData(0);
    const pData = this.pinkNoiseBuffer.getChannelData(0);
    const bData = this.brownNoiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    let brownLast = 0;

    for (let i = 0; i < len; i++) {
      const white = this.rng.signed();
      wData[i] = white;

      // Paul Kellet's pink noise filter
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      pData[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;

      brownLast = (brownLast + 0.02 * white) / 1.02;
      bData[i] = brownLast * 3.5;
    }

    // Soft tanh limiter / waveshaper curve
    this.saturationCurve = new Float32Array(new ArrayBuffer(1024 * 4));
    for (let i = 0; i < 1024; i++) {
      const x = (i / 512) - 1;
      this.saturationCurve[i] = Math.tanh(x * 1.85);
    }
  }

  private createProceduralImpulseResponse(
    ctx: AudioContext,
    durationSec: number,
    decayRate: number,
    earlyTapDelaysMs: number[],
    lowpassHz: number
  ): AudioBuffer {
    const sr = ctx.sampleRate;
    const len = Math.floor(sr * durationSec);
    const buffer = ctx.createBuffer(2, len, sr);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    // Early architectural slap-back reflections from urban walls
    for (let t = 0; t < earlyTapDelaysMs.length; t++) {
      const idx = Math.min(len - 1, Math.floor((earlyTapDelaysMs[t] * 0.001) * sr));
      const amp = Math.pow(0.76, t) * 0.45;
      left[idx] += amp * (t % 2 === 0 ? 1 : -0.7);
      right[idx] += amp * (t % 2 === 1 ? 1 : -0.7);
    }

    // Diffuse exponentially decaying stereo tail with 1-pole low-pass damping
    const rc = 1.0 / (2 * Math.PI * lowpassHz);
    const dt = 1.0 / sr;
    const alpha = dt / (rc + dt);
    let lpL = 0;
    let lpR = 0;

    for (let i = 0; i < len; i++) {
      const tSec = i / sr;
      const env = Math.exp(-tSec * decayRate);
      const nL = this.rng.signed() * env;
      const nR = this.rng.signed() * env;
      lpL += alpha * (nL - lpL);
      lpR += alpha * (nR - lpR);
      left[i] += lpL * 0.65;
      right[i] += lpR * 0.65;
    }

    return buffer;
  }

  private initBusArchitecture(ctx: AudioContext, masterVolume: number): void {
    const weapons = ctx.createGain();
    const impacts = ctx.createGain();
    const footsteps = ctx.createGain();
    const characters = ctx.createGain();
    const environment = ctx.createGain();
    const ui = ctx.createGain();

    weapons.gain.value = 0.92;
    impacts.gain.value = 0.82;
    footsteps.gain.value = 0.72;
    characters.gain.value = 0.78;
    environment.gain.value = 0.42;
    ui.gain.value = 0.65;

    const reverbExterior = ctx.createConvolver();
    reverbExterior.buffer = this.createProceduralImpulseResponse(
      ctx,
      1.65,
      3.4,
      [14, 29, 47, 72, 108, 155],
      3400
    );

    const reverbInterior = ctx.createConvolver();
    reverbInterior.buffer = this.createProceduralImpulseResponse(
      ctx,
      0.85,
      6.8,
      [5, 11, 19, 31, 44],
      2200
    );

    const reverbReturn = ctx.createGain();
    reverbReturn.gain.value = 0.48;
    reverbExterior.connect(reverbReturn);
    reverbInterior.connect(reverbReturn);

    const lowHealthFilter = ctx.createBiquadFilter();
    lowHealthFilter.type = 'lowpass';
    lowHealthFilter.frequency.value = 18000;
    lowHealthFilter.Q.value = 0.7;

    const masterCompressor = ctx.createDynamicsCompressor();
    masterCompressor.threshold.value = -12;
    masterCompressor.knee.value = 8;
    masterCompressor.ratio.value = 4.5;
    masterCompressor.attack.value = 0.002;
    masterCompressor.release.value = 0.14;

    const masterLimiter = ctx.createWaveShaper();
    masterLimiter.curve = this.saturationCurve;
    masterLimiter.oversample = '2x';

    const masterGain = ctx.createGain();
    masterGain.gain.value = masterVolume;

    weapons.connect(lowHealthFilter);
    impacts.connect(lowHealthFilter);
    footsteps.connect(lowHealthFilter);
    characters.connect(lowHealthFilter);
    environment.connect(lowHealthFilter);
    reverbReturn.connect(lowHealthFilter);

    // UI bypasses low-health muffling so combat feedback stays crisp
    ui.connect(masterCompressor);
    lowHealthFilter.connect(masterCompressor);
    masterCompressor.connect(masterLimiter);
    masterLimiter.connect(masterGain);
    masterGain.connect(ctx.destination);

    this.buses = {
      weapons,
      impacts,
      footsteps,
      characters,
      environment,
      ui,
      reverbExterior,
      reverbInterior,
      reverbReturn,
      lowHealthFilter,
      masterCompressor,
      masterLimiter,
      masterGain
    };
  }

  public trackVoice(durationSec: number): void {
    this.activeVoiceCount++;
    setTimeout(() => {
      this.activeVoiceCount = Math.max(0, this.activeVoiceCount - 1);
    }, Math.ceil(durationSec * 1000));
  }

  /**
   * Synthesize layered carbine gunshot (transient click + receiver thump + supersonic crack +
   * mid-band blast + filtered tail + mechanical bolt cycle + round-robin variation)
   */
  public triggerLayeredGunshot(
    destination: AudioNode,
    reverbSendNode: AudioNode | null,
    delaySec = 0,
    distanceMeters = 0,
    occlusionFactor = 0,
    isFirstPerson = false
  ): void {
    if (!this.ensureContext() || !this.ctx) return;
    const ctx = this.ctx;
    const t0 = this.now() + Math.max(0, delaySec);

    // Round-robin + seeded variation so full-auto never sounds identical
    this.roundRobinIndex = (this.roundRobinIndex + 1) % 6;
    const rrPitch = [1.0, 0.97, 1.03, 0.985, 1.018, 0.96][this.roundRobinIndex];
    const pitchVar = rrPitch * this.rng.range(0.97, 1.03);
    const distNorm = Math.min(1, distanceMeters / 95);

    const outGain = ctx.createGain();
    const distAtten = isFirstPerson ? 1.0 : 1.0 / (1.0 + distanceMeters * 0.065);
    const occAtten = 1.0 - occlusionFactor * 0.55;
    outGain.gain.value = distAtten * occAtten;

    // Distance + occlusion spectral filter
    const spectralLP = ctx.createBiquadFilter();
    spectralLP.type = 'lowpass';
    const baseCutoff = isFirstPerson ? 16500 : 13500 + (1400 - 13500) * distNorm;
    spectralLP.frequency.setValueAtTime(
      Math.max(480, baseCutoff * (1.0 - occlusionFactor * 0.72)),
      t0
    );
    outGain.connect(spectralLP);
    spectralLP.connect(destination);

    const persistent: AudioNode[] = [outGain, spectralLP];
    if (reverbSendNode) {
      const revSend = ctx.createGain();
      revSend.gain.value = (isFirstPerson ? 0.32 : 0.28 + (0.72 - 0.28) * distNorm) * occAtten;
      spectralLP.connect(revSend);
      revSend.connect(reverbSendNode);
      persistent.push(revSend);
    }
    if (destination instanceof PannerNode) persistent.push(destination);

    // Layer 1: Ultra-short mechanical hammer/sear click (0..4ms)
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(3200 * pitchVar, t0);
    clickOsc.frequency.exponentialRampToValueAtTime(650, t0 + 0.006);
    clickGain.gain.setValueAtTime(0.32, t0);
    clickGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.007);
    clickOsc.connect(clickGain).connect(outGain);
    clickOsc.start(t0);
    clickOsc.stop(t0 + 0.008);

    // Layer 2: Low-frequency receiver punch / chest thump (150Hz -> 42Hz)
    const thumpOsc = ctx.createOscillator();
    const thumpGain = ctx.createGain();
    thumpOsc.type = 'sine';
    thumpOsc.frequency.setValueAtTime(168 * pitchVar, t0);
    thumpOsc.frequency.exponentialRampToValueAtTime(42 * pitchVar, t0 + 0.085);
    thumpGain.gain.setValueAtTime(0.85, t0);
    thumpGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.095);
    thumpOsc.connect(thumpGain).connect(outGain);
    thumpOsc.start(t0);
    thumpOsc.stop(t0 + 0.1);

    // Layer 3: Bright supersonic muzzle crack & mid-band explosive noise burst
    const blastSrc = ctx.createBufferSource();
    blastSrc.buffer = this.whiteNoiseBuffer;
    const blastOffset = this.rng.range(0, 1.4);

    const blastBP = ctx.createBiquadFilter();
    blastBP.type = 'bandpass';
    blastBP.frequency.setValueAtTime(1850 * pitchVar, t0);
    blastBP.frequency.exponentialRampToValueAtTime(480, t0 + 0.14);
    blastBP.Q.value = 0.85;

    const shaper = ctx.createWaveShaper();
    shaper.curve = this.saturationCurve;

    const blastGain = ctx.createGain();
    blastGain.gain.setValueAtTime(0.001, t0);
    blastGain.gain.linearRampToValueAtTime(0.95, t0 + 0.0015);
    blastGain.gain.exponentialRampToValueAtTime(0.18, t0 + 0.032);
    blastGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.19);

    blastSrc.connect(blastBP).connect(shaper).connect(blastGain).connect(outGain);
    blastSrc.start(t0, blastOffset, 0.22);

    // Layer 4: High-frequency sizzle & street canyon tail
    const tailSrc = ctx.createBufferSource();
    tailSrc.buffer = this.pinkNoiseBuffer;
    const tailLP = ctx.createBiquadFilter();
    tailLP.type = 'lowpass';
    tailLP.frequency.setValueAtTime(3600 * pitchVar, t0 + 0.01);
    tailLP.frequency.exponentialRampToValueAtTime(420, t0 + 0.42);

    const tailGain = ctx.createGain();
    tailGain.gain.setValueAtTime(0.26, t0 + 0.01);
    tailGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.45);
    tailSrc.connect(tailLP).connect(tailGain).connect(outGain);
    tailSrc.start(t0 + 0.01, this.rng.range(0, 1.2), 0.46);

    // Layer 5: Metallic bolt carrier cycle & buffer spring ring (first-person & close range)
    if (isFirstPerson || distanceMeters < 14) {
      const boltTime = t0 + 0.034;
      const boltOsc = ctx.createOscillator();
      const boltGain = ctx.createGain();
      boltOsc.type = 'square';
      boltOsc.frequency.setValueAtTime(2450 * pitchVar, boltTime);
      boltOsc.frequency.exponentialRampToValueAtTime(1180, boltTime + 0.028);
      boltGain.gain.setValueAtTime(isFirstPerson ? 0.16 : 0.06, boltTime);
      boltGain.gain.exponentialRampToValueAtTime(0.001, boltTime + 0.032);
      boltOsc.connect(boltGain).connect(outGain);
      boltOsc.start(boltTime);
      boltOsc.stop(boltTime + 0.035);
    }

    this.releaseAfter(persistent, delaySec + 0.6);
    this.trackVoice(delaySec + 0.5);
  }

  public playFootstep(
    material: MaterialId,
    isSprint: boolean,
    destination?: AudioNode
  ): void {
    if (!this.ensureContext() || !this.ctx) return;
    const ctx = this.ctx;
    const t0 = this.now();
    const out = destination ?? this.buses.footsteps;

    const pitch = this.rng.range(0.92, 1.08);
    const vol = (isSprint ? 0.42 : 0.25) * this.rng.range(0.9, 1.1);

    // Heel/sole thump
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'sine';
    const baseFreq =
      material === MaterialId.WOOD
        ? 135
        : material === MaterialId.METAL
          ? 210
          : material === MaterialId.TILE
            ? 165
            : 95;
    osc.frequency.setValueAtTime(baseFreq * pitch, t0);
    osc.frequency.exponentialRampToValueAtTime(38, t0 + 0.065);
    oscGain.gain.setValueAtTime(vol, t0);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.075);
    osc.connect(oscGain).connect(out);
    osc.start(t0);
    osc.stop(t0 + 0.08);

    // Surface grit / scuff layer
    const noise = ctx.createBufferSource();
    noise.buffer = this.pinkNoiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value =
      material === MaterialId.METAL
        ? 2600 * pitch
        : material === MaterialId.TILE
          ? 2100 * pitch
          : material === MaterialId.WOOD
            ? 950 * pitch
            : 1450 * pitch;
    filter.Q.value = 1.6;

    const nGain = ctx.createGain();
    nGain.gain.setValueAtTime(vol * 0.65, t0 + 0.008);
    nGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.09);
    noise.connect(filter).connect(nGain).connect(out);
    noise.start(t0, this.rng.range(0, 1.5), 0.1);

    if (out instanceof PannerNode) this.releaseAfter([out], 0.15);
    this.trackVoice(0.12);
  }

  public playSurfaceImpact(
    material: MaterialId,
    destination: AudioNode,
    isRicochet = false
  ): void {
    if (!this.ensureContext() || !this.ctx) return;
    const ctx = this.ctx;
    const t0 = this.now();
    const pitch = this.rng.range(0.9, 1.12);

    // Short impact crack/thud
    const src = ctx.createBufferSource();
    src.buffer = this.whiteNoiseBuffer;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value =
      material === MaterialId.METAL
        ? 3100 * pitch
        : material === MaterialId.WOOD
          ? 820 * pitch
          : material === MaterialId.GLASS
            ? 4200 * pitch
            : 1350 * pitch;
    bp.Q.value = 1.8;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.45, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.085);
    src.connect(bp).connect(gain).connect(destination);
    src.start(t0, this.rng.range(0, 1.5), 0.09);

    // Metallic modal ring or ricochet whine
    if (material === MaterialId.METAL || isRicochet) {
      const ring = ctx.createOscillator();
      const rGain = ctx.createGain();
      ring.type = 'sine';
      const startF = isRicochet ? 3800 * pitch : 1950 * pitch;
      const endF = isRicochet ? 1150 * pitch : 1820 * pitch;
      ring.frequency.setValueAtTime(startF, t0);
      ring.frequency.exponentialRampToValueAtTime(endF, t0 + (isRicochet ? 0.24 : 0.15));
      rGain.gain.setValueAtTime(isRicochet ? 0.28 : 0.18, t0);
      rGain.gain.exponentialRampToValueAtTime(0.001, t0 + (isRicochet ? 0.25 : 0.16));
      ring.connect(rGain).connect(destination);
      ring.start(t0);
      ring.stop(t0 + 0.26);
    }

    if (destination instanceof PannerNode) this.releaseAfter([destination], 0.3);
    this.trackVoice(0.26);
  }

  public playCasingBounce(speed: number, surfaceMat: MaterialId, destination: AudioNode): void {
    if (!this.ensureContext() || !this.ctx) return;
    const ctx = this.ctx;
    const t0 = this.now();
    const amp = Math.min(0.22, speed * 0.045);
    if (amp < 0.01) return;

    // Two high-frequency modal brass partials (~6.2kHz and ~9.1kHz)
    const basePitch = (surfaceMat === MaterialId.METAL ? 1.08 : 1.0) * this.rng.range(0.95, 1.06);
    for (const freq of [6150, 9280]) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * basePitch, t0);
      gain.gain.setValueAtTime(amp * 0.5, t0);
      gain.gain.exponentialRampToValueAtTime(0.0008, t0 + 0.055);
      osc.connect(gain).connect(destination);
      osc.start(t0);
      osc.stop(t0 + 0.06);
    }
    if (destination instanceof PannerNode) this.releaseAfter([destination], 0.1);
    this.trackVoice(0.07);
  }

  public playWeaponHandling(
    event: 'mag_out' | 'mag_in' | 'bolt_release' | 'fire_mode' | 'inspect' | 'empty_click'
  ): void {
    if (!this.ensureContext() || !this.ctx) return;
    const ctx = this.ctx;
    const t0 = this.now();
    const out = this.buses.weapons;

    const triggerClick = (offset: number, freq: number, dur: number, vol: number) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t0 + offset);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.45, t0 + offset + dur);
      g.gain.setValueAtTime(vol, t0 + offset);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + offset + dur);
      osc.connect(g).connect(out);
      osc.start(t0 + offset);
      osc.stop(t0 + offset + dur + 0.005);
    };

    if (event === 'mag_out') {
      triggerClick(0.0, 1800, 0.025, 0.25);
      triggerClick(0.06, 620, 0.07, 0.22);
    } else if (event === 'mag_in') {
      triggerClick(0.0, 480, 0.05, 0.30);
      triggerClick(0.045, 2200, 0.03, 0.32);
    } else if (event === 'bolt_release') {
      triggerClick(0.0, 2600, 0.02, 0.28);
      triggerClick(0.022, 1350, 0.055, 0.35);
    } else if (event === 'fire_mode' || event === 'empty_click') {
      triggerClick(0.0, 2900, 0.018, 0.24);
    } else if (event === 'inspect') {
      triggerClick(0.05, 750, 0.06, 0.14);
      triggerClick(0.45, 1650, 0.03, 0.16);
    }
    this.trackVoice(0.15);
  }

  public playUISound(
    type: 'hover' | 'click' | 'hit' | 'headshot' | 'kill' | 'start' | 'end'
  ): void {
    if (!this.ensureContext() || !this.ctx) return;
    const ctx = this.ctx;
    const t0 = this.now();
    const out = this.buses.ui;

    if (type === 'hover') {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(1400, t0);
      g.gain.setValueAtTime(0.05, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.025);
      o.connect(g).connect(out);
      o.start(t0);
      o.stop(t0 + 0.03);
    } else if (type === 'click') {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'triangle';
      o.frequency.setValueAtTime(2100, t0);
      o.frequency.exponentialRampToValueAtTime(900, t0 + 0.035);
      g.gain.setValueAtTime(0.16, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.04);
      o.connect(g).connect(out);
      o.start(t0);
      o.stop(t0 + 0.045);
    } else if (type === 'hit') {
      // Crisp tactical hit-marker tick
      const src = ctx.createBufferSource();
      src.buffer = this.whiteNoiseBuffer;
      const hp = ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 2600;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.28, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.028);
      src.connect(hp).connect(g).connect(out);
      src.start(t0, 0.2, 0.032);
    } else if (type === 'headshot') {
      // Crisp metallic dink + tick
      this.playUISound('hit');
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(3450, t0);
      o.frequency.exponentialRampToValueAtTime(2750, t0 + 0.085);
      g.gain.setValueAtTime(0.26, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.09);
      o.connect(g).connect(out);
      o.start(t0);
      o.stop(t0 + 0.095);
    } else if (type === 'kill') {
      // Tactical elimination confirmation chord pulse
      for (const [f, delay] of [[520, 0], [780, 0.035]] as const) {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'triangle';
        o.frequency.setValueAtTime(f, t0 + delay);
        g.gain.setValueAtTime(0.18, t0 + delay);
        g.gain.exponentialRampToValueAtTime(0.001, t0 + delay + 0.16);
        o.connect(g).connect(out);
        o.start(t0 + delay);
        o.stop(t0 + delay + 0.17);
      }
    }
  }

  private playHeartbeatPulse(intensity: number): void {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t0 = this.now();
    for (const [offset, freq, amp] of [
      [0.0, 58, 0.28 * intensity],
      [0.16, 48, 0.20 * intensity]
    ] as const) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(freq, t0 + offset);
      o.frequency.exponentialRampToValueAtTime(30, t0 + offset + 0.11);
      g.gain.setValueAtTime(amp, t0 + offset);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + offset + 0.12);
      o.connect(g).connect(this.buses.characters);
      o.start(t0 + offset);
      o.stop(t0 + offset + 0.13);
    }
  }

  private startAmbientStreetBed(): void {
    if (!this.ctx || this.ambientStarted) return;
    this.ambientStarted = true;
    const ctx = this.ctx;

    // Continuous desert street wind + distant city rumble
    const windSrc = ctx.createBufferSource();
    windSrc.buffer = this.brownNoiseBuffer;
    windSrc.loop = true;

    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.value = 340;
    windFilter.Q.value = 1.4;

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.14;
    lfoGain.gain.value = 160;
    lfo.connect(lfoGain).connect(windFilter.frequency);

    const windGain = ctx.createGain();
    windGain.gain.value = 0.22;

    windSrc.connect(windFilter).connect(windGain).connect(this.buses.environment);
    windSrc.start();
    lfo.start();
  }
}
