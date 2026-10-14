export interface FrameTelemetry {
  fps: number;
  frameTimeMs: number;
  avgFrameTimeMs: number;
  p95FrameTimeMs: number;
  worstFrameTimeMs: number;
  physicsTimeMs: number;
  renderTimeMs: number;
  substeps: number;
}

export class GameLoop {
  public static readonly FIXED_DT = 1 / 120;
  public static readonly MAX_ACCUMULATOR = 1 / 12;

  private accumulator = 0;
  private lastTime = 0;
  private running = false;
  private rafId = 0;

  private fixedStepFn: (dt: number) => void;
  private renderStepFn: (alpha: number, frameDt: number) => void;

  private frameHistory = new Float32Array(240);
  private historyIndex = 0;
  private historyCount = 0;
  private sortScratch = new Float32Array(240);

  public telemetry: FrameTelemetry = {
    fps: 60,
    frameTimeMs: 16.67,
    avgFrameTimeMs: 16.67,
    p95FrameTimeMs: 16.67,
    worstFrameTimeMs: 16.67,
    physicsTimeMs: 0,
    renderTimeMs: 0,
    substeps: 1
  };

  constructor(
    fixedStepFn: (dt: number) => void,
    renderStepFn: (alpha: number, frameDt: number) => void
  ) {
    this.fixedStepFn = fixedStepFn;
    this.renderStepFn = renderStepFn;
  }

  public start(): void {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this.rafId = requestAnimationFrame(this.tick);
  }

  public stop(): void {
    this.running = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
  }

  public resetTimingHistory(): void {
    this.historyIndex = 0;
    this.historyCount = 0;
  }

  /** Step deterministically for automated tests */
  public stepDeterministic(totalSeconds: number, renderEveryStep = false): void {
    const steps = Math.max(1, Math.round(totalSeconds / GameLoop.FIXED_DT));
    for (let i = 0; i < steps; i++) {
      const t0 = performance.now();
      this.fixedStepFn(GameLoop.FIXED_DT);
      this.telemetry.physicsTimeMs = performance.now() - t0;
      if (renderEveryStep || i === steps - 1) {
        const r0 = performance.now();
        this.renderStepFn(1.0, GameLoop.FIXED_DT);
        this.telemetry.renderTimeMs = performance.now() - r0;
        this.recordFrameTime(this.telemetry.physicsTimeMs + this.telemetry.renderTimeMs);
      }
    }
  }

  private tick = (now: number): void => {
    if (!this.running) return;
    this.rafId = requestAnimationFrame(this.tick);

    const rawDtMs = Math.max(0.1, now - this.lastTime);
    this.lastTime = now;

    // Ignore tab-suspension jumps while recording real frame times
    if (rawDtMs < 250) {
      this.recordFrameTime(rawDtMs);
    }

    const clampedDt = Math.min(rawDtMs * 0.001, GameLoop.MAX_ACCUMULATOR);
    this.accumulator += clampedDt;

    const p0 = performance.now();
    let substeps = 0;
    while (this.accumulator >= GameLoop.FIXED_DT && substeps < 8) {
      this.fixedStepFn(GameLoop.FIXED_DT);
      this.accumulator -= GameLoop.FIXED_DT;
      substeps++;
    }
    this.telemetry.physicsTimeMs = performance.now() - p0;
    this.telemetry.substeps = substeps;

    const alpha = Math.max(0, Math.min(1, this.accumulator / GameLoop.FIXED_DT));
    const r0 = performance.now();
    this.renderStepFn(alpha, clampedDt);
    this.telemetry.renderTimeMs = performance.now() - r0;
  };

  private recordFrameTime(ms: number): void {
    this.frameHistory[this.historyIndex] = ms;
    this.historyIndex = (this.historyIndex + 1) % this.frameHistory.length;
    if (this.historyCount < this.frameHistory.length) {
      this.historyCount++;
    }

    let sum = 0;
    let worst = 0;
    for (let i = 0; i < this.historyCount; i++) {
      const v = this.frameHistory[i];
      sum += v;
      if (v > worst) worst = v;
      this.sortScratch[i] = v;
    }

    const avg = sum / this.historyCount;
    const sub = this.sortScratch.subarray(0, this.historyCount);
    sub.sort();
    const p95Idx = Math.min(this.historyCount - 1, Math.floor(this.historyCount * 0.95));

    this.telemetry.frameTimeMs = ms;
    this.telemetry.avgFrameTimeMs = avg;
    this.telemetry.p95FrameTimeMs = sub[p95Idx];
    this.telemetry.worstFrameTimeMs = worst;
    this.telemetry.fps = 1000 / Math.max(1, avg);
  }
}
