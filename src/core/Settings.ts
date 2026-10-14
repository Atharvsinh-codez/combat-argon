export type QualityPreset = 'low' | 'medium' | 'high' | 'ultra';
export type MotionBlurLevel = 'off' | 'low' | 'high';

export interface Keybinds {
  forward: string;
  backward: string;
  left: string;
  right: string;
  sprint: string;
  crouch: string;
  jump: string;
  reload: string;
  fireMode: string;
  inspect: string;
  tactical: string;
  explosive: string;
  pause: string;
}

export interface GameSettingsData {
  quality: QualityPreset;
  sensitivity: number;
  adsMultiplier: number;
  fov: number;
  invertY: boolean;
  motionBlur: MotionBlurLevel;
  bloom: boolean;
  gtao: boolean;
  taa: boolean;
  chromaticAberration: boolean;
  vignette: boolean;
  filmGrain: boolean;
  cameraShake: number;
  dynamicRenderScale: boolean;
  renderScale: number;
  masterVolume: number;
  botDifficulty: 'recruit' | 'regular' | 'veteran';
  keybinds: Keybinds;
}

export interface QualityPresetParams {
  shadowMapSize: number;
  shadowCascades: number;
  gtaoSamples: number;
  cloudSteps: number;
  particleMultiplier: number;
  motionBlurSamples: number;
  renderScale: number;
  maxDecals: number;
  maxCasings: number;
}

export const QUALITY_PRESETS: Record<QualityPreset, QualityPresetParams> = {
  low: {
    shadowMapSize: 1024,
    shadowCascades: 4,
    gtaoSamples: 4,
    cloudSteps: 10,
    particleMultiplier: 0.5,
    motionBlurSamples: 4,
    renderScale: 0.75,
    maxDecals: 48,
    maxCasings: 24
  },
  medium: {
    shadowMapSize: 1024,
    shadowCascades: 4,
    gtaoSamples: 6,
    cloudSteps: 14,
    particleMultiplier: 0.8,
    motionBlurSamples: 6,
    renderScale: 0.9,
    maxDecals: 80,
    maxCasings: 40
  },
  high: {
    shadowMapSize: 1536,
    shadowCascades: 4,
    gtaoSamples: 8,
    cloudSteps: 20,
    particleMultiplier: 1.0,
    motionBlurSamples: 8,
    renderScale: 1.0,
    maxDecals: 120,
    maxCasings: 60
  },
  ultra: {
    shadowMapSize: 2048,
    shadowCascades: 4,
    gtaoSamples: 12,
    cloudSteps: 28,
    particleMultiplier: 1.25,
    motionBlurSamples: 10,
    renderScale: 1.0,
    maxDecals: 160,
    maxCasings: 80
  }
};

const STORAGE_KEY = 'dustline_tactical_fps_settings_v1';

export class Settings {
  public data: GameSettingsData;
  private listeners: Array<(data: GameSettingsData) => void> = [];

  constructor() {
    this.data = this.getDefaults();
    this.load();
    this.applyQueryOverrides();
  }

  public getDefaults(): GameSettingsData {
    return {
      quality: 'high',
      sensitivity: 1.0,
      adsMultiplier: 0.65,
      fov: 78,
      invertY: false,
      motionBlur: 'low',
      bloom: true,
      gtao: true,
      taa: true,
      chromaticAberration: true,
      vignette: true,
      filmGrain: true,
      cameraShake: 0.75,
      dynamicRenderScale: true,
      renderScale: 1.0,
      masterVolume: 0.85,
      botDifficulty: 'regular',
      keybinds: {
        forward: 'KeyW',
        backward: 'KeyS',
        left: 'KeyA',
        right: 'KeyD',
        sprint: 'ShiftLeft',
        crouch: 'KeyC',
        jump: 'Space',
        reload: 'KeyR',
        fireMode: 'KeyB',
        inspect: 'KeyF',
        tactical: 'KeyQ',
        explosive: 'KeyG',
        pause: 'Escape'
      }
    };
  }

  public applyPreset(preset: QualityPreset): void {
    const params = QUALITY_PRESETS[preset];
    this.data.quality = preset;
    this.data.renderScale = params.renderScale;
    this.data.motionBlur = preset === 'low' ? 'off' : preset === 'ultra' ? 'high' : 'low';
    this.save();
    this.notify();
  }

  public getQualityParams(): QualityPresetParams {
    return QUALITY_PRESETS[this.data.quality];
  }

  public update(partial: Partial<GameSettingsData>): void {
    Object.assign(this.data, partial);
    this.save();
    this.notify();
  }

  public onChange(fn: (data: GameSettingsData) => void): void {
    this.listeners.push(fn);
  }

  private notify(): void {
    for (const fn of this.listeners) {
      fn(this.data);
    }
  }

  public save(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch {
      // Ignore storage quota / privacy mode errors
    }
  }

  public load(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        this.data = {
          ...this.data,
          ...parsed,
          keybinds: {
            ...this.data.keybinds,
            ...(parsed.keybinds || {})
          }
        };
      }
    } catch {
      // Ignore malformed storage
    }
  }

  private applyQueryOverrides(): void {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const preset = params.get('preset') as QualityPreset | null;
    if (preset && preset in QUALITY_PRESETS) {
      this.applyPreset(preset);
    }
    const scale = params.get('renderScale');
    if (scale) {
      const n = parseFloat(scale);
      if (!Number.isNaN(n) && n >= 0.4 && n <= 1.25) {
        this.data.renderScale = n;
        this.data.dynamicRenderScale = false;
      }
    }
  }
}
