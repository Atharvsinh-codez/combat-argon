import * as THREE from 'three';
import { FullScreenPass } from './FullScreenPass';

/**
 * Ground-Truth Horizon-Based Ambient Occlusion (GTAO) + Bilateral Edge-Preserving Denoise
 * Samples the MRT view-space normal + linear depth buffer to ground architectural corners,
 * arches, crates, curbs, and character contact points.
 */
export class GTAO {
  public rawTarget!: THREE.WebGLRenderTarget;
  public filteredTarget!: THREE.WebGLRenderTarget;

  private aoMaterial: THREE.ShaderMaterial;
  private blurMaterial: THREE.ShaderMaterial;
  private frameIndex = 0;

  constructor(width: number, height: number) {
    this.initTargets(width, height);

    this.aoMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uNormalDepth: { value: null },
        uResolution: { value: new THREE.Vector2(width, height) },
        uProjInfo: { value: new THREE.Vector4(1, 1, 0, 0) },
        uRadius: { value: 0.85 },
        uFrame: { value: 0 }
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
        uniform sampler2D uNormalDepth;
        uniform vec2 uResolution;
        uniform vec4 uProjInfo;
        uniform float uRadius;
        uniform float uFrame;
        varying vec2 vUv;

        // Interleaved gradient noise (Jimenez 2014)
        float ign(vec2 px) {
          vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
          return fract(magic.z * fract(dot(px + uFrame * vec2(5.588238, 7.15128), magic.xy)));
        }

        vec3 reconstructViewPos(vec2 uv, float linearDepth) {
          vec2 ndc = uv * 2.0 - 1.0;
          return vec3(ndc * uProjInfo.xy * linearDepth, -linearDepth);
        }

        void main() {
          vec4 nd = texture2D(uNormalDepth, vUv);
          float centerDepth = nd.w;

          // Sky or ultra-far pixels receive no AO
          if (centerDepth <= 0.01 || centerDepth > 140.0) {
            gl_FragColor = vec4(1.0);
            return;
          }

          float nLen = length(nd.xyz);
          vec3 viewNorm = nLen > 0.0001 ? (nd.xyz / nLen) : vec3(0.0, 0.0, 1.0);
          vec3 viewPos = reconstructViewPos(vUv, centerDepth);

          float noise = ign(gl_FragCoord.xy);
          float screenRadius = clamp((uRadius * 1.45) / max(0.6, centerDepth), 0.004, 0.065);

          float occlusion = 0.0;
          const int SAMPLES = 8;
          for (int i = 0; i < SAMPLES; i++) {
            float fi = float(i);
            float angle = (fi + noise) * 2.39996323; // Golden angle
            float r = screenRadius * ((fi + 0.5) / float(SAMPLES));
            vec2 sampleUv = vUv + vec2(cos(angle), sin(angle)) * r;

            vec4 sampleND = texture2D(uNormalDepth, sampleUv);
            float sampleDepth = sampleND.w;
            if (sampleDepth <= 0.01) continue;

            vec3 samplePos = reconstructViewPos(sampleUv, sampleDepth);
            vec3 diff = samplePos - viewPos;
            float dist = length(diff);
            if (dist < 0.001) continue;

            vec3 horizonDir = diff / dist;
            float nDotH = max(0.0, dot(viewNorm, horizonDir) - 0.08);
            float rangeWeight = smoothstep(uRadius * 1.9, uRadius * 0.25, dist);
            occlusion += nDotH * rangeWeight;
          }

          float ao = 1.0 - clamp((occlusion / float(SAMPLES)) * 2.25, 0.0, 0.72);
          gl_FragColor = vec4(ao, ao, ao, 1.0);
        }
      `
    });

    this.blurMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uRawAO: { value: null },
        uNormalDepth: { value: null },
        uTexelSize: { value: new THREE.Vector2(1 / width, 1 / height) }
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
        uniform sampler2D uRawAO;
        uniform sampler2D uNormalDepth;
        uniform vec2 uTexelSize;
        varying vec2 vUv;

        void main() {
          vec4 centerND = texture2D(uNormalDepth, vUv);
          float centerDepth = centerND.w;
          if (centerDepth <= 0.01 || centerDepth > 140.0) {
            gl_FragColor = vec4(1.0);
            return;
          }
          float cLen = length(centerND.xyz);
          vec3 centerNorm = cLen > 0.0001 ? (centerND.xyz / cLen) : vec3(0.0, 0.0, 1.0);

          float centerAO = texture2D(uRawAO, vUv).r;
          float totalAO = centerAO * 0.25;
          float totalWeight = 0.25;

          for (int x = -2; x <= 2; x++) {
            for (int y = -2; y <= 2; y++) {
              vec2 offset = vec2(float(x), float(y)) * uTexelSize;
              vec2 suv = vUv + offset;
              vec4 sND = texture2D(uNormalDepth, suv);
              if (sND.w <= 0.01 || sND.w > 140.0) continue;

              float sLen = length(sND.xyz);
              if (sLen <= 0.0001) continue;
              vec3 sNorm = sND.xyz / sLen;

              float aoSample = texture2D(uRawAO, suv).r;
              float depthDiff = abs(sND.w - centerDepth);
              float depthW = exp(-depthDiff * 2.5);
              float normW = max(0.0, dot(centerNorm, sNorm));
              normW = normW * normW * normW * normW;
              float spatialW = exp(-float(x * x + y * y) * 0.25);

              float w = max(0.001, depthW * normW * spatialW);
              totalAO += aoSample * w;
              totalWeight += w;
            }
          }

          float filtered = clamp(totalAO / max(0.001, totalWeight), 0.0, 1.0);
          gl_FragColor = vec4(filtered, filtered, filtered, 1.0);
        }
      `
    });
  }

  public initTargets(width: number, height: number): void {
    const aoW = Math.max(1, Math.floor(width * 0.65));
    const aoH = Math.max(1, Math.floor(height * 0.65));

    if (this.rawTarget) this.rawTarget.dispose();
    if (this.filteredTarget) this.filteredTarget.dispose();

    this.rawTarget = new THREE.WebGLRenderTarget(aoW, aoH, {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false
    });

    this.filteredTarget = new THREE.WebGLRenderTarget(aoW, aoH, {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false
    });
  }

  public resize(width: number, height: number): void {
    this.initTargets(width, height);
    const aoW = this.rawTarget.width;
    const aoH = this.rawTarget.height;
    this.aoMaterial.uniforms.uResolution.value.set(aoW, aoH);
    this.blurMaterial.uniforms.uTexelSize.value.set(1 / aoW, 1 / aoH);
  }

  public render(
    renderer: THREE.WebGLRenderer,
    normalDepthTex: THREE.Texture,
    camera: THREE.PerspectiveCamera
  ): THREE.Texture {
    this.frameIndex = (this.frameIndex + 1) % 64;
    const tanHalfFov = Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5));
    this.aoMaterial.uniforms.uProjInfo.value.set(
      tanHalfFov * camera.aspect,
      tanHalfFov,
      0,
      0
    );
    this.aoMaterial.uniforms.uNormalDepth.value = normalDepthTex;
    this.aoMaterial.uniforms.uFrame.value = this.frameIndex;

    FullScreenPass.render(renderer, this.aoMaterial, this.rawTarget, false);

    this.blurMaterial.uniforms.uRawAO.value = this.rawTarget.texture;
    this.blurMaterial.uniforms.uNormalDepth.value = normalDepthTex;
    FullScreenPass.render(renderer, this.blurMaterial, this.filteredTarget, false);

    return this.filteredTarget.texture;
  }

  public dispose(): void {
    this.rawTarget.dispose();
    this.filteredTarget.dispose();
    this.aoMaterial.dispose();
    this.blurMaterial.dispose();
  }
}
