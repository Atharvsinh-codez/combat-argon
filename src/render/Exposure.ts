import * as THREE from 'three';
import { FullScreenPass } from './FullScreenPass';

/**
 * GPU Log-Luminance Metering & Temporal Auto-Exposure Adaptation
 * Smoothly adapts camera EV100 when moving between bright sunlit streets and covered souks/interiors.
 */
export class Exposure {
  public meterTarget: THREE.WebGLRenderTarget;
  public adaptTargets: [THREE.WebGLRenderTarget, THREE.WebGLRenderTarget];
  private currentIdx = 0;
  private firstFrame = true;

  private meterMaterial: THREE.ShaderMaterial;
  private adaptMaterial: THREE.ShaderMaterial;

  constructor() {
    const opts: THREE.RenderTargetOptions = {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false
    };

    this.meterTarget = new THREE.WebGLRenderTarget(16, 16, opts);
    this.adaptTargets = [
      new THREE.WebGLRenderTarget(1, 1, opts),
      new THREE.WebGLRenderTarget(1, 1, opts)
    ];

    this.meterMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uHdrColor: { value: null }
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform sampler2D uHdrColor;
        varying vec2 vUv;

        void main() {
          vec3 col = texture2D(uHdrColor, vUv).rgb;
          float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
          // Center-weighted metering
          float dist = length(vUv - 0.5);
          float weight = mix(1.3, 0.5, smoothstep(0.1, 0.65, dist));
          float logLum = clamp(log2(max(0.05, lum)), -3.0, 3.0);
          gl_FragColor = vec4(logLum * weight, weight, 0.0, 1.0);
        }
      `
    });

    this.adaptMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uMeterTex: { value: null },
        uPrevExposure: { value: null },
        uDt: { value: 0.016 },
        uFirstFrame: { value: 1.0 }
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform sampler2D uMeterTex;
        uniform sampler2D uPrevExposure;
        uniform float uDt;
        uniform float uFirstFrame;
        varying vec2 vUv;

        void main() {
          float sumLog = 0.0;
          float sumWeight = 0.0;

          for (int x = 0; x < 4; x++) {
            for (int y = 0; y < 4; y++) {
              vec2 uv = (vec2(float(x), float(y)) + 0.5) / 4.0;
              vec2 s = texture2D(uMeterTex, uv).rg;
              sumLog += s.r;
              sumWeight += s.g;
            }
          }

          float avgLogLum = sumLog / max(0.001, sumWeight);
          float avgLum = exp2(avgLogLum);
          // Target exposure clamped to keep sunlit stucco bright without blowing out shadows
          float targetExp = clamp(0.68 / max(0.15, avgLum), 0.72, 1.32);

          if (uFirstFrame > 0.5) {
            gl_FragColor = vec4(targetExp, targetExp, targetExp, 1.0);
            return;
          }

          float prevExp = texture2D(uPrevExposure, vec2(0.5)).r;
          // Faster adaptation when entering bright sun, gentler when entering dark shade
          float speed = targetExp < prevExp ? 3.2 : 1.65;
          float adapted = mix(prevExp, targetExp, 1.0 - exp(-uDt * speed));
          gl_FragColor = vec4(adapted, adapted, adapted, 1.0);
        }
      `
    });
  }

  public render(
    renderer: THREE.WebGLRenderer,
    hdrColorTex: THREE.Texture,
    dt: number
  ): THREE.Texture {
    this.meterMaterial.uniforms.uHdrColor.value = hdrColorTex;
    FullScreenPass.render(renderer, this.meterMaterial, this.meterTarget, false);

    const readIdx = this.currentIdx;
    const writeIdx = 1 - this.currentIdx;

    this.adaptMaterial.uniforms.uMeterTex.value = this.meterTarget.texture;
    this.adaptMaterial.uniforms.uPrevExposure.value = this.adaptTargets[readIdx].texture;
    this.adaptMaterial.uniforms.uDt.value = Math.min(0.1, Math.max(0.001, dt));
    this.adaptMaterial.uniforms.uFirstFrame.value = this.firstFrame ? 1.0 : 0.0;

    FullScreenPass.render(renderer, this.adaptMaterial, this.adaptTargets[writeIdx], false);

    this.currentIdx = writeIdx;
    this.firstFrame = false;
    return this.adaptTargets[writeIdx].texture;
  }

  public dispose(): void {
    this.meterTarget.dispose();
    this.adaptTargets[0].dispose();
    this.adaptTargets[1].dispose();
    this.meterMaterial.dispose();
    this.adaptMaterial.dispose();
  }
}
