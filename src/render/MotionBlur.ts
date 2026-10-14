import * as THREE from 'three';
import { FullScreenPass } from './FullScreenPass';

/**
 * Tile-Dilated Velocity Camera & Object Motion Blur
 * Supports 'off' | 'low' | 'high' quality settings and respects reactive viewmodel masking.
 */
export class MotionBlur {
  public target!: THREE.WebGLRenderTarget;
  private material: THREE.ShaderMaterial;

  constructor(width: number, height: number) {
    this.target = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false
    });

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: null },
        uVelocityReactive: { value: null },
        uNormalDepth: { value: null },
        uTexelSize: { value: new THREE.Vector2(1 / width, 1 / height) },
        uStrength: { value: 0.55 },
        uSamples: { value: 6.0 }
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
        uniform sampler2D uColor;
        uniform sampler2D uVelocityReactive;
        uniform sampler2D uNormalDepth;
        uniform vec2 uTexelSize;
        uniform float uStrength;
        uniform float uSamples;
        varying vec2 vUv;

        void main() {
          vec4 baseCol = texture2D(uColor, vUv);
          vec4 vr = texture2D(uVelocityReactive, vUv);

          // Do not motion-blur the first-person weapon viewmodel
          if (vr.z > 0.5) {
            gl_FragColor = baseCol;
            return;
          }

          // 3x3 neighborhood max velocity dilation
          vec2 maxVel = vr.xy;
          float maxLenSq = dot(maxVel, maxVel);
          for (int x = -1; x <= 1; x++) {
            for (int y = -1; y <= 1; y++) {
              vec4 nvr = texture2D(uVelocityReactive, vUv + vec2(float(x), float(y)) * uTexelSize * 3.0);
              if (nvr.z < 0.5) {
                float lenSq = dot(nvr.xy, nvr.xy);
                if (lenSq > maxLenSq) {
                  maxLenSq = lenSq;
                  maxVel = nvr.xy;
                }
              }
            }
          }

          vec2 blurVec = maxVel * uStrength;
          float speed = length(blurVec);
          if (speed < 0.0008) {
            gl_FragColor = baseCol;
            return;
          }

          // Clamp max blur radius to 2.2% of screen width for crisp readability
          if (speed > 0.022) {
            blurVec = (blurVec / speed) * 0.022;
          }

          float centerDepth = texture2D(uNormalDepth, vUv).w;
          vec3 accum = baseCol.rgb;
          float totalW = 1.0;
          int numSamples = int(uSamples);

          for (int i = 1; i <= 8; i++) {
            if (i > numSamples) break;
            float t = (float(i) / float(numSamples)) - 0.5;
            vec2 suv = clamp(vUv + blurVec * t, 0.001, 0.999);
            vec4 sVr = texture2D(uVelocityReactive, suv);
            if (sVr.z > 0.5) continue;

            float sDepth = texture2D(uNormalDepth, suv).w;
            float depthWeight = clamp(1.0 - max(0.0, centerDepth - sDepth) * 0.35, 0.15, 1.0);
            accum += texture2D(uColor, suv).rgb * depthWeight;
            totalW += depthWeight;
          }

          gl_FragColor = vec4(accum / totalW, 1.0);
        }
      `
    });
  }

  public render(
    renderer: THREE.WebGLRenderer,
    colorTex: THREE.Texture,
    velocityReactiveTex: THREE.Texture,
    normalDepthTex: THREE.Texture,
    quality: 'off' | 'low' | 'high'
  ): THREE.Texture {
    if (quality === 'off') {
      return colorTex;
    }

    this.material.uniforms.uColor.value = colorTex;
    this.material.uniforms.uVelocityReactive.value = velocityReactiveTex;
    this.material.uniforms.uNormalDepth.value = normalDepthTex;
    this.material.uniforms.uStrength.value = quality === 'high' ? 0.62 : 0.38;
    this.material.uniforms.uSamples.value = quality === 'high' ? 8.0 : 5.0;

    FullScreenPass.render(renderer, this.material, this.target, false);
    return this.target.texture;
  }

  public resize(width: number, height: number): void {
    this.target.setSize(width, height);
    this.material.uniforms.uTexelSize.value.set(1 / width, 1 / height);
  }

  public dispose(): void {
    this.target.dispose();
    this.material.dispose();
  }
}
