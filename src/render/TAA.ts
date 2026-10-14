import * as THREE from 'three';
import { FullScreenPass } from './FullScreenPass';

/**
 * Temporal Anti-Aliasing (TAA) with 8-Sample Halton (2,3) Subpixel Projection Jitter,
 * Velocity Reprojection, YCoCg 3x3 Neighborhood Variance Clamping, and Reactive Mask Rejection.
 */
export class TAA {
  public historyTargets: [THREE.WebGLRenderTarget, THREE.WebGLRenderTarget];
  private currentIndex = 0;
  private frameCount = 0;
  private resolveMaterial: THREE.ShaderMaterial;
  private haltonSamples: Array<[number, number]> = [];
  private currentJitter = new THREE.Vector2();

  constructor(width: number, height: number) {
    for (let i = 1; i <= 8; i++) {
      this.haltonSamples.push([
        this.halton(i, 2) - 0.5,
        this.halton(i, 3) - 0.5
      ]);
    }

    const opts: THREE.RenderTargetOptions = {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false
    };
    this.historyTargets = [
      new THREE.WebGLRenderTarget(width, height, opts),
      new THREE.WebGLRenderTarget(width, height, opts)
    ];

    this.resolveMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uCurrentColor: { value: null },
        uHistoryColor: { value: null },
        uVelocityReactive: { value: null },
        uTexelSize: { value: new THREE.Vector2(1 / width, 1 / height) },
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
        uniform sampler2D uCurrentColor;
        uniform sampler2D uHistoryColor;
        uniform sampler2D uVelocityReactive;
        uniform vec2 uTexelSize;
        uniform float uFirstFrame;
        varying vec2 vUv;

        vec3 rgbToYCoCg(vec3 c) {
          return vec3(
            0.25 * c.r + 0.5 * c.g + 0.25 * c.b,
            0.5 * c.r - 0.5 * c.b,
            -0.25 * c.r + 0.5 * c.g - 0.25 * c.b
          );
        }

        vec3 yCoCgToRgb(vec3 ycc) {
          float y = ycc.x;
          float co = ycc.y;
          float cg = ycc.z;
          return max(vec3(0.0), vec3(y + co - cg, y + cg, y - co - cg));
        }

        void main() {
          vec4 currSample = texture2D(uCurrentColor, vUv);
          if (uFirstFrame > 0.5) {
            gl_FragColor = currSample;
            return;
          }

          vec4 velReact = texture2D(uVelocityReactive, vUv);
          vec2 velocity = velReact.xy;
          float reactive = velReact.z;

          vec2 historyUv = vUv - velocity;
          if (historyUv.x < 0.0 || historyUv.x > 1.0 || historyUv.y < 0.0 || historyUv.y > 1.0) {
            gl_FragColor = currSample;
            return;
          }

          // Gather 3x3 neighborhood in YCoCg space for variance clipping (mean +- gamma * sigma)
          vec3 m1 = vec3(0.0);
          vec3 m2 = vec3(0.0);
          for (int x = -1; x <= 1; x++) {
            for (int y = -1; y <= 1; y++) {
              vec3 c = texture2D(uCurrentColor, vUv + vec2(float(x), float(y)) * uTexelSize).rgb;
              vec3 ycc = rgbToYCoCg(c);
              m1 += ycc;
              m2 += ycc * ycc;
            }
          }
          m1 /= 9.0;
          vec3 sigma = sqrt(max(vec3(0.0), m2 / 9.0 - m1 * m1));

          // Tighter clamp box when moving fast or on reactive weapon/particles
          float speed = length(velocity * (1.0 / uTexelSize));
          float gamma = mix(1.15, 0.72, clamp(speed * 0.12 + reactive, 0.0, 1.0));
          vec3 boxMin = m1 - gamma * sigma;
          vec3 boxMax = m1 + gamma * sigma;

          vec3 histRgb = texture2D(uHistoryColor, historyUv).rgb;
          vec3 histYcc = clamp(rgbToYCoCg(histRgb), boxMin, boxMax);
          vec3 clampedHist = yCoCgToRgb(histYcc);

          // Blend weight reduced on high-velocity or reactive pixels to prevent ghosting
          float blend = mix(0.86, 0.18, clamp(reactive * 0.85 + speed * 0.08, 0.0, 1.0));
          vec3 resolved = mix(currSample.rgb, clampedHist, blend);
          if (!(resolved.r >= 0.0 && resolved.g >= 0.0 && resolved.b >= 0.0)) {
            resolved = max(vec3(0.0), currSample.rgb);
          }
          gl_FragColor = vec4(resolved, 1.0);
        }
      `
    });
  }

  private halton(index: number, base: number): number {
    let result = 0;
    let f = 1 / base;
    let i = index;
    while (i > 0) {
      result += f * (i % base);
      i = Math.floor(i / base);
      f /= base;
    }
    return result;
  }

  public applyCameraJitter(
    camera: THREE.PerspectiveCamera,
    width: number,
    height: number,
    enabled: boolean
  ): void {
    camera.clearViewOffset();
    if (!enabled) {
      this.currentJitter.set(0, 0);
      return;
    }
    const sample = this.haltonSamples[this.frameCount % this.haltonSamples.length];
    // Subtle 0.42 px subpixel jitter keeps static detail razor sharp while eliminating stair-stepping
    this.currentJitter.set(sample[0] * 0.42, sample[1] * 0.42);
    camera.setViewOffset(
      width,
      height,
      this.currentJitter.x,
      this.currentJitter.y,
      width,
      height
    );
  }

  public clearCameraJitter(camera: THREE.PerspectiveCamera): void {
    camera.clearViewOffset();
  }

  public render(
    renderer: THREE.WebGLRenderer,
    currentColorTex: THREE.Texture,
    velocityReactiveTex: THREE.Texture
  ): THREE.Texture {
    const readIdx = this.currentIndex;
    const writeIdx = 1 - this.currentIndex;

    this.resolveMaterial.uniforms.uCurrentColor.value = currentColorTex;
    this.resolveMaterial.uniforms.uHistoryColor.value = this.historyTargets[readIdx].texture;
    this.resolveMaterial.uniforms.uVelocityReactive.value = velocityReactiveTex;
    this.resolveMaterial.uniforms.uFirstFrame.value = this.frameCount === 0 ? 1.0 : 0.0;

    FullScreenPass.render(renderer, this.resolveMaterial, this.historyTargets[writeIdx], false);

    this.currentIndex = writeIdx;
    this.frameCount++;
    return this.historyTargets[writeIdx].texture;
  }

  public resize(width: number, height: number): void {
    this.historyTargets[0].setSize(width, height);
    this.historyTargets[1].setSize(width, height);
    this.resolveMaterial.uniforms.uTexelSize.value.set(1 / width, 1 / height);
    this.frameCount = 0;
  }

  public dispose(): void {
    this.historyTargets[0].dispose();
    this.historyTargets[1].dispose();
    this.resolveMaterial.dispose();
  }
}
