import * as THREE from 'three';
import { FullScreenPass } from './FullScreenPass';
import { DebugViewMode } from '../core/Input';

/**
 * Final Display Composite Pass:
 * - Procedural 33x33x33 3D Color Grading LUT (`THREE.Data3DTexture`)
 * - AgX-inspired Sigmoid Tone Mapping with natural highlight desaturation rolloff
 * - GTAO Contact Shadow Integration
 * - Contrast-Adaptive Sharpening (CAS)
 * - Subtle Lens Vignette, Film Grain, Chromatic Separation, and Low-Health Feedback
 * - Debug Inspection Modes ('cascades' | 'normals' | 'velocity' | 'ao')
 */
export class Composite {
  public lut3D: THREE.Data3DTexture;
  private material: THREE.ShaderMaterial;

  constructor(width: number, height: number) {
    this.lut3D = this.createProcedural3DLUT(33);

    this.material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      uniforms: {
        uColor: { value: null },
        uBloom: { value: null },
        uAO: { value: null },
        uExposureTex: { value: null },
        uNormalDepth: { value: null },
        uVelocityReactive: { value: null },
        uLut3D: { value: this.lut3D },
        uTexelSize: { value: new THREE.Vector2(1 / width, 1 / height) },
        uTime: { value: 0 },
        uLowHealth: { value: 0 },
        uDamageFlash: { value: 0 },
        uDebugMode: { value: 0 }
      },
      vertexShader: /* glsl */ `
        out vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        precision highp sampler3D;

        uniform sampler2D uColor;
        uniform sampler2D uBloom;
        uniform sampler2D uAO;
        uniform sampler2D uExposureTex;
        uniform sampler2D uNormalDepth;
        uniform sampler2D uVelocityReactive;
        uniform sampler3D uLut3D;
        uniform vec2 uTexelSize;
        uniform float uTime;
        uniform float uLowHealth;
        uniform float uDamageFlash;
        uniform int uDebugMode;

        in vec2 vUv;
        out vec4 outColor;

        // AgX-inspired sigmoid filmic curve with natural highlight desaturation
        vec3 agxToneMap(vec3 hdr) {
          mat3 inset = mat3(
            0.842479062253094, 0.0423282422610123, 0.0423756549057051,
            0.0784335999999992, 0.878468636469772, 0.0784336,
            0.0792237451477643, 0.0791661274605434, 0.879142973793104
          );
          vec3 val = inset * max(vec3(0.0), hdr);
          // Filmic S-curve
          vec3 x2 = val * val;
          vec3 mapped = (val * (2.45 * val + 0.08)) / (val * (2.38 * val + 0.62) + 0.11);
          // Subtle highlight saturation recovery + clean rolloff
          float luma = dot(mapped, vec3(0.2126, 0.7152, 0.0722));
          mapped = mix(vec3(luma), mapped, 1.12);
          return clamp(mapped, 0.0, 1.0);
        }

        void main() {
          vec4 nd = texture(uNormalDepth, vUv);
          vec4 vr = texture(uVelocityReactive, vUv);

          // Debug Buffer Views (F2/F3/F4/F5)
          if (uDebugMode == 1) {
            // Cascade split distance visualization
            vec3 base = texture(uColor, vUv).rgb * 0.45;
            float d = nd.w;
            vec3 tint = d < 12.0 ? vec3(0.2, 1.0, 0.3)
                      : d < 32.0 ? vec3(0.2, 0.7, 1.0)
                      : d < 75.0 ? vec3(1.0, 0.85, 0.2)
                      : vec3(1.0, 0.25, 0.35);
            outColor = vec4(mix(base, tint, 0.55), 1.0);
            return;
          } else if (uDebugMode == 2) {
            // View-space unit normals
            float nLen = length(nd.xyz);
            vec3 nVis = nLen > 0.0001 ? (nd.xyz / nLen) * 0.5 + 0.5 : vec3(0.0);
            outColor = vec4(nVis, 1.0);
            return;
          } else if (uDebugMode == 3) {
            // Screen-space velocity + reactive mask
            outColor = vec4(abs(vr.xy) * 25.0, vr.z, 1.0);
            return;
          } else if (uDebugMode == 4) {
            // Filtered GTAO buffer
            float aoDebug = texture(uAO, vUv).r;
            outColor = vec4(vec3(aoDebug), 1.0);
            return;
          }

          // Contrast-Adaptive Sharpening (CAS) + subtle peripheral chromatic separation
          vec2 centerOffset = vUv - 0.5;
          float caAmount = dot(centerOffset, centerOffset) * 0.0022;
          vec3 cCenter = texture(uColor, vUv).rgb;
          cCenter.r = texture(uColor, vUv + centerOffset * caAmount).r;
          cCenter.b = texture(uColor, vUv - centerOffset * caAmount).b;

          vec3 cTop = texture(uColor, vUv + vec2(0.0, -uTexelSize.y)).rgb;
          vec3 cBot = texture(uColor, vUv + vec2(0.0,  uTexelSize.y)).rgb;
          vec3 cLeft = texture(uColor, vUv + vec2(-uTexelSize.x, 0.0)).rgb;
          vec3 cRight = texture(uColor, vUv + vec2( uTexelSize.x, 0.0)).rgb;

          vec3 neighborAvg = 0.25 * (cTop + cBot + cLeft + cRight);
          vec3 hdr = max(vec3(0.0), cCenter + (cCenter - neighborAvg) * 0.22);

          // Apply GTAO contact shadowing (disabled on sky, reduced on weapon viewmodel)
          float ao = clamp(texture(uAO, vUv).r, 0.0, 1.0);
          float aoWeight = nd.w <= 0.01 ? 0.0 : (vr.z > 0.5 ? 0.35 : 0.85);
          hdr *= mix(1.0, ao, aoWeight);

          // Add Karis HDR Bloom
          vec3 bloom = texture(uBloom, vUv).rgb;
          hdr += bloom * 0.26;

          // Apply GPU auto-exposure
          float exposure = texture(uExposureTex, vec2(0.5)).r;
          hdr *= exposure;

          // AgX Tone Mapping
          vec3 ldr = agxToneMap(hdr);

          // Convert linear to sRGB before 33^3 3D LUT lookup
          vec3 srgb = pow(clamp(ldr, 0.0, 1.0), vec3(1.0 / 2.2));
          vec3 lutCoords = srgb * (32.0 / 33.0) + (0.5 / 33.0);
          vec3 graded = texture(uLut3D, lutCoords).rgb;

          // Subtle natural optical vignette
          float distSq = dot(centerOffset, centerOffset);
          float vignette = 1.0 - distSq * 0.38;
          graded *= clamp(vignette, 0.65, 1.0);

          // Low-health critical edge desaturation & pulse
          if (uLowHealth > 0.01) {
            float gray = dot(graded, vec3(0.299, 0.587, 0.114));
            graded = mix(graded, vec3(gray) * vec3(1.05, 0.82, 0.80), uLowHealth * 0.55);
            float pulse = 0.5 + 0.5 * sin(uTime * 6.0);
            graded = mix(graded, vec3(0.55, 0.06, 0.05), distSq * uLowHealth * (0.65 + 0.35 * pulse));
          }

          // Directional damage flash tint
          if (uDamageFlash > 0.01) {
            graded = mix(graded, vec3(0.85, 0.12, 0.08), distSq * uDamageFlash * 0.85);
          }

          // Subtle filmic grain (1.2% amplitude to prevent 8-bit banding)
          float grain = fract(sin(dot(gl_FragCoord.xy + fract(uTime), vec2(12.9898, 78.233))) * 43758.5453);
          graded += (grain - 0.5) * 0.008;

          outColor = vec4(clamp(graded, 0.0, 1.0), 1.0);
        }
      `
    });
  }

  /**
   * Generates a 33x33x33 3D Color Grading LUT in memory at startup:
   * Warm golden sunlight highlights, rich Mediterranean shadows with subtle cool-teal lift,
   * and crisp midrange contrast.
   */
  private createProcedural3DLUT(size: number): THREE.Data3DTexture {
    const data = new Uint8Array(size * size * size * 4);
    let ptr = 0;

    for (let b = 0; b < size; b++) {
      const bf = b / (size - 1);
      for (let g = 0; g < size; g++) {
        const gf = g / (size - 1);
        for (let r = 0; r < size; r++) {
          const rf = r / (size - 1);

          const luma = 0.2126 * rf + 0.7152 * gf + 0.0722 * bf;
          const shadowWeight = Math.pow(1.0 - luma, 2.2);
          const highlightWeight = Math.pow(luma, 1.8);

          // Warm sunlit highlights + subtle cool-azure atmospheric shadows
          let outR = rf + highlightWeight * 0.024 - shadowWeight * 0.012;
          let outG = gf + highlightWeight * 0.012 + shadowWeight * 0.004;
          let outB = bf - highlightWeight * 0.018 + shadowWeight * 0.022;

          // Subtle S-curve contrast refinement
          outR = THREE.MathUtils.clamp(outR, 0, 1);
          outG = THREE.MathUtils.clamp(outG, 0, 1);
          outB = THREE.MathUtils.clamp(outB, 0, 1);

          data[ptr++] = Math.round(outR * 255);
          data[ptr++] = Math.round(outG * 255);
          data[ptr++] = Math.round(outB * 255);
          data[ptr++] = 255;
        }
      }
    }

    const tex = new THREE.Data3DTexture(data, size, size, size);
    tex.format = THREE.RGBAFormat;
    tex.type = THREE.UnsignedByteType;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.wrapR = THREE.ClampToEdgeWrapping;
    tex.unpackAlignment = 1;
    tex.needsUpdate = true;
    return tex;
  }

  public render(
    renderer: THREE.WebGLRenderer,
    colorTex: THREE.Texture,
    bloomTex: THREE.Texture,
    aoTex: THREE.Texture,
    exposureTex: THREE.Texture,
    normalDepthTex: THREE.Texture,
    velocityReactiveTex: THREE.Texture,
    timeSec: number,
    lowHealth: number,
    damageFlash: number,
    debugView: DebugViewMode
  ): void {
    this.material.uniforms.uColor.value = colorTex;
    this.material.uniforms.uBloom.value = bloomTex;
    this.material.uniforms.uAO.value = aoTex;
    this.material.uniforms.uExposureTex.value = exposureTex;
    this.material.uniforms.uNormalDepth.value = normalDepthTex;
    this.material.uniforms.uVelocityReactive.value = velocityReactiveTex;
    this.material.uniforms.uTime.value = timeSec;
    this.material.uniforms.uLowHealth.value = lowHealth;
    this.material.uniforms.uDamageFlash.value = damageFlash;

    const debugIdx =
      debugView === 'cascades'
        ? 1
        : debugView === 'normals'
          ? 2
          : debugView === 'velocity'
            ? 3
            : debugView === 'ao'
              ? 4
              : 0;
    this.material.uniforms.uDebugMode.value = debugIdx;

    FullScreenPass.render(renderer, this.material, null, true);
  }

  public resize(width: number, height: number): void {
    this.material.uniforms.uTexelSize.value.set(1 / width, 1 / height);
  }

  public dispose(): void {
    this.lut3D.dispose();
    this.material.dispose();
  }
}
