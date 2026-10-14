/**
 * Deterministic Seeded PRNG (Mulberry32 + hash helpers)
 * Used across map generation, recoil variance, AI decisions, particles, and procedural audio.
 */
export class SeededRandom {
  private state: number;
  public readonly initialSeed: number;

  constructor(seed: number | string = 1337420) {
    this.initialSeed = typeof seed === 'string' ? SeededRandom.hashString(seed) : (seed >>> 0) || 1;
    this.state = this.initialSeed;
  }

  public static hashString(str: string): number {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0) || 1;
  }

  public reset(seed?: number): void {
    this.state = seed !== undefined ? (seed >>> 0) || 1 : this.initialSeed;
  }

  /** Returns float in [0, 1) */
  public next(): number {
    let t = (this.state += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /** Returns float in [min, max) */
  public range(min: number, max: number): number {
    return min + this.next() * (max - min);
  }

  /** Returns integer in [min, max] inclusive */
  public int(min: number, max: number): number {
    return Math.floor(this.range(min, max + 1));
  }

  /** Returns float in [-1, 1) */
  public signed(): number {
    return this.next() * 2 - 1;
  }

  /** Returns boolean with probability p */
  public chance(p = 0.5): boolean {
    return this.next() < p;
  }

  /** Approximate standard normal distribution (mean 0, std 1) */
  public gaussian(): number {
    const u1 = Math.max(1e-7, this.next());
    const u2 = this.next();
    return Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  }

  /** Pick random element from non-empty array */
  public pick<T>(arr: readonly T[]): T {
    return arr[Math.floor(this.next() * arr.length)];
  }

  /** Create a deterministic child generator */
  public fork(salt: number | string): SeededRandom {
    const s = typeof salt === 'string' ? SeededRandom.hashString(salt) : (salt >>> 0);
    return new SeededRandom((this.initialSeed ^ Math.imul(s + 0x9e3779b9, 0x85ebca6b)) >>> 0);
  }

  /** Deterministic 2D hash in [0, 1) */
  public static hash2D(x: number, y: number, seed = 1337): number {
    let n = Math.imul(Math.floor(x), 374761393) + Math.imul(Math.floor(y), 668265263) + Math.imul(seed, 1442695041);
    n = (n ^ (n >>> 13)) >>> 0;
    n = Math.imul(n, 1274126177) >>> 0;
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  }

  /** Smooth 2D value noise in [0, 1] */
  public static valueNoise2D(x: number, y: number, seed = 1337): number {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = x - ix;
    const fy = y - iy;
    const ux = fx * fx * (3 - 2 * fx);
    const uy = fy * fy * (3 - 2 * fy);

    const a = SeededRandom.hash2D(ix, iy, seed);
    const b = SeededRandom.hash2D(ix + 1, iy, seed);
    const c = SeededRandom.hash2D(ix, iy + 1, seed);
    const d = SeededRandom.hash2D(ix + 1, iy + 1, seed);

    return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
  }

  /** Multi-octave 2D FBM noise in [0, 1] */
  public static fbm2D(x: number, y: number, octaves = 4, seed = 1337): number {
    let value = 0;
    let amp = 0.5;
    let freq = 1.0;
    let norm = 0;
    for (let i = 0; i < octaves; i++) {
      value += amp * SeededRandom.valueNoise2D(x * freq, y * freq, seed + i * 101);
      norm += amp;
      freq *= 2.02;
      amp *= 0.5;
    }
    return value / norm;
  }
}
