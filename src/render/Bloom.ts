import * as THREE from 'three';
import { FullScreenPass } from './FullScreenPass';

/**
 * Physically-Inspired HDR Bloom Pyramid
 * First mip uses a Karis-weighted 5-box downsample with soft luminance threshold (> 1.18)
 * to eliminate firefly flicker, followed by progressive downsample & tent-filtered upsample.
 */
export class Bloom {
  private readonly mipLevels = 4;
  private downTargets: THREE.WebGLRenderTarget[] = [];
  private upTargets: THREE.WebGLRenderTarget[] = [];

  private prefilterMaterial: THREE.ShaderMaterial;
  private downsampleMaterial: THREE.ShaderMaterial;
  private upsampleMaterial: THREE.ShaderMaterial;

  constructor(width: number, height: number) {
    this.initTargets(width, height);

    this.prefilterMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uInput: { value: null },
        uTexelSize: { value: new THREE.Vector2(1 / width, 1 / height) },
        uThreshold: { value: 1.18 }
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
        uniform sampler2D uInput;
        uniform vec2 uTexelSize;
        uniform float uThreshold;
        varying vec2 vUv;

        float luma(vec3 c) {
          return dot(c, vec3(0.2126, 0.7152, 0.0722));
        }

        vec3 softThreshold(vec3 c) {
          float br = max(max(c.r, c.g), c.b);
          float knee = uThreshold * 0.45;
          float soft = clamp(br - uThreshold + knee, 0.0, 2.0 * knee);
          soft = (soft * soft) / max(0.0001, 4.0 * knee);
          float contrib = max(soft, br - uThreshold) / max(0.0001, br);
          return c * max(0.0, contrib);
        }

        void main() {
          // Karis-average 5-tap downsample to suppress single-pixel specular fireflies
          vec3 c0 = softThreshold(texture2D(uInput, vUv).rgb);
          vec3 c1 = softThreshold(texture2D(uInput, vUv + vec2(-1.0, -1.0) * uTexelSize).rgb);
          vec3 c2 = softThreshold(texture2D(uInput, vUv + vec2( 1.0, -1.0) * uTexelSize).rgb);
          vec3 c3 = softThreshold(texture2D(uInput, vUv + vec2(-1.0,  1.0) * uTexelSize).rgb);
          vec3 c4 = softThreshold(texture2D(uInput, vUv + vec2( 1.0,  1.0) * uTexelSize).rgb);

          float w0 = 1.0 / (1.0 + luma(c0));
          float w1 = 1.0 / (1.0 + luma(c1));
          float w2 = 1.0 / (1.0 + luma(c2));
          float w3 = 1.0 / (1.0 + luma(c3));
          float w4 = 1.0 / (1.0 + luma(c4));

          vec3 sum = c0 * w0 + c1 * w1 + c2 * w2 + c3 * w3 + c4 * w4;
          float wSum = w0 + w1 + w2 + w3 + w4;
          gl_FragColor = vec4(sum / max(0.0001, wSum), 1.0);
        }
      `
    });

    this.downsampleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uInput: { value: null },
        uTexelSize: { value: new THREE.Vector2() }
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
        uniform sampler2D uInput;
        uniform vec2 uTexelSize;
        varying vec2 vUv;

        void main() {
          // 9-tap Jimenez downsample
          vec3 a = texture2D(uInput, vUv + vec2(-1.0, -1.0) * uTexelSize).rgb;
          vec3 b = texture2D(uInput, vUv + vec2( 0.0, -1.0) * uTexelSize).rgb;
          vec3 c = texture2D(uInput, vUv + vec2( 1.0, -1.0) * uTexelSize).rgb;
          vec3 d = texture2D(uInput, vUv + vec2(-1.0,  0.0) * uTexelSize).rgb;
          vec3 e = texture2D(uInput, vUv).rgb;
          vec3 f = texture2D(uInput, vUv + vec2( 1.0,  0.0) * uTexelSize).rgb;
          vec3 g = texture2D(uInput, vUv + vec2(-1.0,  1.0) * uTexelSize).rgb;
          vec3 h = texture2D(uInput, vUv + vec2( 0.0,  1.0) * uTexelSize).rgb;
          vec3 i = texture2D(uInput, vUv + vec2( 1.0,  1.0) * uTexelSize).rgb;

          vec3 res = e * 0.25 + (b + d + f + h) * 0.125 + (a + c + g + i) * 0.0625;
          gl_FragColor = vec4(res, 1.0);
        }
      `
    });

    this.upsampleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uLowMip: { value: null },
        uHighMip: { value: null },
        uTexelSize: { value: new THREE.Vector2() }
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
        uniform sampler2D uLowMip;
        uniform sampler2D uHighMip;
        uniform vec2 uTexelSize;
        varying vec2 vUv;

        void main() {
          // 3x3 tent filter upsample
          vec3 s = vec3(0.0);
          s += texture2D(uLowMip, vUv + vec2(-1.0, -1.0) * uTexelSize).rgb * 1.0;
          s += texture2D(uLowMip, vUv + vec2( 0.0, -1.0) * uTexelSize).rgb * 2.0;
          s += texture2D(uLowMip, vUv + vec2( 1.0, -1.0) * uTexelSize).rgb * 1.0;
          s += texture2D(uLowMip, vUv + vec2(-1.0,  0.0) * uTexelSize).rgb * 2.0;
          s += texture2D(uLowMip, vUv).rgb * 4.0;
          s += texture2D(uLowMip, vUv + vec2( 1.0,  0.0) * uTexelSize).rgb * 2.0;
          s += texture2D(uLowMip, vUv + vec2(-1.0,  1.0) * uTexelSize).rgb * 1.0;
          s += texture2D(uLowMip, vUv + vec2( 0.0,  1.0) * uTexelSize).rgb * 2.0;
          s += texture2D(uLowMip, vUv + vec2( 1.0,  1.0) * uTexelSize).rgb * 1.0;
          s /= 16.0;

          vec3 high = texture2D(uHighMip, vUv).rgb;
          gl_FragColor = vec4(high + s * 0.78, 1.0);
        }
      `
    });
  }

  public initTargets(width: number, height: number): void {
    for (const rt of this.downTargets) rt.dispose();
    for (const rt of this.upTargets) rt.dispose();
    this.downTargets.length = 0;
    this.upTargets.length = 0;

    let w = Math.max(2, Math.floor(width / 2));
    let h = Math.max(2, Math.floor(height / 2));

    for (let i = 0; i < this.mipLevels; i++) {
      const opts: THREE.RenderTargetOptions = {
        type: THREE.HalfFloatType,
        format: THREE.RGBAFormat,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        depthBuffer: false
      };
      this.downTargets.push(new THREE.WebGLRenderTarget(w, h, opts));
      this.upTargets.push(new THREE.WebGLRenderTarget(w, h, opts));
      w = Math.max(2, Math.floor(w / 2));
      h = Math.max(2, Math.floor(h / 2));
    }
  }

  public resize(width: number, height: number): void {
    this.initTargets(width, height);
  }

  public render(renderer: THREE.WebGLRenderer, hdrColorTex: THREE.Texture): THREE.Texture {
    // Mip 0: Karis prefilter downsample
    this.prefilterMaterial.uniforms.uInput.value = hdrColorTex;
    this.prefilterMaterial.uniforms.uTexelSize.value.set(
      1 / (this.downTargets[0].width * 2),
      1 / (this.downTargets[0].height * 2)
    );
    FullScreenPass.render(renderer, this.prefilterMaterial, this.downTargets[0], false);

    // Mip 1..N-1: Progressive downsample
    for (let i = 1; i < this.mipLevels; i++) {
      const prev = this.downTargets[i - 1];
      this.downsampleMaterial.uniforms.uInput.value = prev.texture;
      this.downsampleMaterial.uniforms.uTexelSize.value.set(1 / prev.width, 1 / prev.height);
      FullScreenPass.render(renderer, this.downsampleMaterial, this.downTargets[i], false);
    }

    // Progressive tent upsample from lowest mip back to Mip 0
    let lowTex = this.downTargets[this.mipLevels - 1].texture;
    for (let i = this.mipLevels - 2; i >= 0; i--) {
      const lowTarget = this.downTargets[i + 1];
      const highTarget = this.downTargets[i];
      const outTarget = this.upTargets[i];

      this.upsampleMaterial.uniforms.uLowMip.value = lowTex;
      this.upsampleMaterial.uniforms.uHighMip.value = highTarget.texture;
      this.upsampleMaterial.uniforms.uTexelSize.value.set(
        1 / lowTarget.width,
        1 / lowTarget.height
      );
      FullScreenPass.render(renderer, this.upsampleMaterial, outTarget, false);
      lowTex = outTarget.texture;
    }

    return this.upTargets[0].texture;
  }

  public dispose(): void {
    for (const rt of this.downTargets) rt.dispose();
    for (const rt of this.upTargets) rt.dispose();
    this.prefilterMaterial.dispose();
    this.downsampleMaterial.dispose();
    this.upsampleMaterial.dispose();
  }
}
