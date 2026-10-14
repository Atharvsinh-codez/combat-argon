import * as THREE from 'three';
import { SeededRandom } from '../core/SeededRandom';

export interface PBRTextureSet {
  albedo: THREE.DataTexture;
  normal: THREE.DataTexture;
  roughness: THREE.DataTexture;
}

export interface WorldShaderUniforms {
  uTime: { value: number };
  uSunDir: { value: THREE.Vector3 };
  uCloudWindOffset: { value: THREE.Vector2 };
  uCsmMatrix0: { value: THREE.Matrix4 };
  uCsmMatrix1: { value: THREE.Matrix4 };
  uCsmMatrix2: { value: THREE.Matrix4 };
  uCsmMatrix3: { value: THREE.Matrix4 };
  uCsmSplits: { value: THREE.Vector4 };
  uCsmDepthTex0: { value: THREE.Texture | null };
  uCsmDepthTex1: { value: THREE.Texture | null };
  uCsmDepthTex2: { value: THREE.Texture | null };
  uCsmDepthTex3: { value: THREE.Texture | null };
  uCsmEnabled: { value: number };
  uDebugCascades: { value: number };
}

/**
 * Generates deterministic multi-scale (macro/meso/micro) PBR texture atlases and materials
 * for North African / Mediterranean urban architecture, street surfaces, props, and weapons.
 */
export class MaterialLibrary {
  public readonly sharedUniforms: WorldShaderUniforms;
  public readonly textures = new Map<string, PBRTextureSet>();
  public readonly materials = new Map<string, THREE.MeshStandardMaterial>();
  private rng: SeededRandom;

  constructor(seed = 1337420) {
    this.rng = new SeededRandom(seed);
    this.sharedUniforms = {
      uTime: { value: 0 },
      uSunDir: { value: new THREE.Vector3(-0.62, 0.64, -0.45).normalize() },
      uCloudWindOffset: { value: new THREE.Vector2(0, 0) },
      uCsmMatrix0: { value: new THREE.Matrix4() },
      uCsmMatrix1: { value: new THREE.Matrix4() },
      uCsmMatrix2: { value: new THREE.Matrix4() },
      uCsmMatrix3: { value: new THREE.Matrix4() },
      uCsmSplits: { value: new THREE.Vector4(16, 38, 78, 160) },
      uCsmDepthTex0: { value: null },
      uCsmDepthTex1: { value: null },
      uCsmDepthTex2: { value: null },
      uCsmDepthTex3: { value: null },
      uCsmEnabled: { value: 0 },
      uDebugCascades: { value: 0 }
    };

    this.generateCoreTextures();
    this.buildCoreMaterials();
  }

  private generateSurfaceSet(
    name: string,
    size: number,
    evalFn: (u: number, v: number) => {
      r: number;
      g: number;
      b: number;
      height: number;
      rough: number;
    }
  ): PBRTextureSet {
    const count = size * size;
    const albedoData = new Uint8Array(count * 4);
    const roughData = new Uint8Array(count * 4);
    const normalData = new Uint8Array(count * 4);
    const heights = new Float32Array(count);

    for (let y = 0; y < size; y++) {
      const v = y / size;
      for (let x = 0; x < size; x++) {
        const u = x / size;
        const idx = y * size + x;
        const res = evalFn(u, v);
        heights[idx] = res.height;

        const i4 = idx * 4;
        albedoData[i4] = Math.max(0, Math.min(255, Math.round(res.r * 255)));
        albedoData[i4 + 1] = Math.max(0, Math.min(255, Math.round(res.g * 255)));
        albedoData[i4 + 2] = Math.max(0, Math.min(255, Math.round(res.b * 255)));
        albedoData[i4 + 3] = 255;

        const rByte = Math.max(10, Math.min(255, Math.round(res.rough * 255)));
        roughData[i4] = rByte;
        roughData[i4 + 1] = rByte;
        roughData[i4 + 2] = rByte;
        roughData[i4 + 3] = 255;
      }
    }

    // Compute Sobel tangent-space normals from height field
    for (let y = 0; y < size; y++) {
      const ym1 = (y - 1 + size) % size;
      const yp1 = (y + 1) % size;
      for (let x = 0; x < size; x++) {
        const xm1 = (x - 1 + size) % size;
        const xp1 = (x + 1) % size;

        const hL = heights[y * size + xm1];
        const hR = heights[y * size + xp1];
        const hD = heights[ym1 * size + x];
        const hU = heights[yp1 * size + x];

        const dx = (hL - hR) * 3.2;
        const dy = (hD - hU) * 3.2;
        const dz = 1.0;
        const invLen = 1 / Math.hypot(dx, dy, dz);

        const i4 = (y * size + x) * 4;
        normalData[i4] = Math.round(((dx * invLen) * 0.5 + 0.5) * 255);
        normalData[i4 + 1] = Math.round(((dy * invLen) * 0.5 + 0.5) * 255);
        normalData[i4 + 2] = Math.round(((dz * invLen) * 0.5 + 0.5) * 255);
        normalData[i4 + 3] = 255;
      }
    }

    const makeTex = (data: Uint8Array, isSRGB: boolean): THREE.DataTexture => {
      const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.generateMipmaps = true;
      tex.colorSpace = isSRGB ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      tex.needsUpdate = true;
      return tex;
    };

    const set: PBRTextureSet = {
      albedo: makeTex(albedoData, true),
      normal: makeTex(normalData, false),
      roughness: makeTex(roughData, false)
    };
    this.textures.set(name, set);
    return set;
  }

  private tileFbm(u: number, v: number, freq: number, octaves: number, seed: number): number {
    // Seamless 2D torus-blended Cartesian FBM (zero circular/mirror artifacts)
    const x = u * freq + 13.7;
    const y = v * freq + 29.3;
    const w = freq;
    const f00 = SeededRandom.fbm2D(x, y, octaves, seed);
    const f10 = SeededRandom.fbm2D(x - w, y, octaves, seed);
    const f01 = SeededRandom.fbm2D(x, y - w, octaves, seed);
    const f11 = SeededRandom.fbm2D(x - w, y - w, octaves, seed);
    const su = u * u * (3 - 2 * u);
    const sv = v * v * (3 - 2 * v);
    const nx0 = f00 * (1 - su) + f10 * su;
    const nx1 = f01 * (1 - su) + f11 * su;
    return nx0 * (1 - sv) + nx1 * sv;
  }

  private generateCoreTextures(): void {
    // 1. Sun-bleached desert stucco / plaster with meso variation & exposed lime-wash patches
    this.generateSurfaceSet('plaster', 128, (u, v) => {
      const macro = this.tileFbm(u, v, 2.5, 3, 101);
      const meso = this.tileFbm(u, v, 6.5, 4, 202);
      const micro = SeededRandom.hash2D(u * 128, v * 128, 303);
      const crack = Math.abs(meso - 0.48) < 0.012 ? 0.88 : 1.0;
      const spall = macro < 0.28 ? 0.92 : 1.0;
      const streak = 0.95 + 0.05 * Math.sin(u * Math.PI * 6 + meso * 1.8);
      const base = (0.86 + (macro - 0.5) * 0.12 + (micro - 0.5) * 0.03) * spall * streak * crack;
      return {
        r: base * 0.97,
        g: base * 0.91,
        b: base * 0.80,
        height: macro * 0.45 + meso * 0.35 + micro * 0.08 - (1 - crack) * 0.2,
        rough: 0.82 + (1 - spall) * 0.10 + (micro - 0.5) * 0.06
      };
    });

    // 2. Broken dusty asphalt road with aggregate pebbles, tar seams, and sand accumulation
    this.generateSurfaceSet('road', 128, (u, v) => {
      const macro = this.tileFbm(u, v, 2.5, 3, 404);
      const meso = this.tileFbm(u, v, 9.0, 4, 505);
      const pebble = SeededRandom.hash2D(u * 128, v * 128, 606);
      const sandMask = Math.max(0, Math.min(1, (macro - 0.54) * 3.2));
      const tarCrack = Math.abs(meso - 0.5) < 0.014 ? 0.55 : 1.0;

      const asphR = (0.25 + (pebble - 0.5) * 0.08) * tarCrack;
      const asphG = (0.24 + (pebble - 0.5) * 0.07) * tarCrack;
      const asphB = (0.23 + (pebble - 0.5) * 0.07) * tarCrack;

      const sandR = 0.68;
      const sandG = 0.59;
      const sandB = 0.45;

      return {
        r: THREE.MathUtils.lerp(asphR, sandR, sandMask * 0.65),
        g: THREE.MathUtils.lerp(asphG, sandG, sandMask * 0.65),
        b: THREE.MathUtils.lerp(asphB, sandB, sandMask * 0.65),
        height: pebble * 0.4 + meso * 0.4 - (1 - tarCrack) * 0.6 - sandMask * 0.2,
        rough: THREE.MathUtils.lerp(0.82, 0.94, sandMask) + (pebble - 0.5) * 0.06
      };
    });

    // 3. Weathered masonry / clay brick with mortar lines
    this.generateSurfaceSet('brick', 128, (u, v) => {
      const rows = 12;
      const cols = 6;
      const row = Math.floor(v * rows);
      const brickU = (u * cols + (row % 2) * 0.5) % 1;
      const brickV = (v * rows) % 1;

      const mortar = brickU < 0.07 || brickU > 0.93 || brickV < 0.11 || brickV > 0.89;
      const brickHash = SeededRandom.hash2D(Math.floor(u * cols + (row % 2) * 0.5), row, 707);
      const grain = this.tileFbm(u, v, 8.0, 3, 808);

      if (mortar) {
        return {
          r: 0.66 * (0.9 + grain * 0.15),
          g: 0.61 * (0.9 + grain * 0.15),
          b: 0.53 * (0.9 + grain * 0.15),
          height: 0.2 + grain * 0.15,
          rough: 0.92
        };
      }
      const shade = 0.85 + brickHash * 0.3;
      return {
        r: 0.64 * shade * (0.9 + grain * 0.2),
        g: 0.36 * shade * (0.9 + grain * 0.2),
        b: 0.26 * shade * (0.9 + grain * 0.2),
        height: 0.72 + grain * 0.22,
        rough: 0.8 + (grain - 0.5) * 0.1
      };
    });

    // 4. Cast architectural concrete / Jersey barriers / Archways
    this.generateSurfaceSet('concrete', 128, (u, v) => {
      const macro = this.tileFbm(u, v, 3.0, 4, 909);
      const pores = SeededRandom.hash2D(u * 128, v * 128, 1010);
      const formwork = 0.96 + 0.04 * Math.sin(v * Math.PI * 16);
      const val = (0.58 + (macro - 0.5) * 0.16 + (pores - 0.5) * 0.06) * formwork;
      return {
        r: val * 1.02,
        g: val * 0.98,
        b: val * 0.90,
        height: macro * 0.5 + (pores > 0.88 ? 0.1 : 0.45),
        rough: 0.84 + (macro - 0.5) * 0.1
      };
    });

    // 5. Rough timber / market stall wood / crates
    this.generateSurfaceSet('wood', 128, (u, v) => {
      const plank = Math.floor(v * 6);
      const plankEdge = ((v * 6) % 1) < 0.04 ? 0.55 : 1.0;
      const grain = this.tileFbm(u * 0.4, v * 3.5 + plank * 1.7, 6.0, 4, 1111);
      const ring = 0.5 + 0.5 * Math.sin((u * 3 + grain * 1.4) * Math.PI * 6);
      const shade = (0.78 + ring * 0.22) * plankEdge;
      return {
        r: 0.48 * shade,
        g: 0.34 * shade,
        b: 0.21 * shade,
        height: ring * 0.35 + plankEdge * 0.4,
        rough: 0.76 + (1 - ring) * 0.12
      };
    });

    // 6. Painted & oxidized industrial metal (shutters, drums, AC housings, vehicles)
    this.generateSurfaceSet('metal', 128, (u, v) => {
      const wear = this.tileFbm(u, v, 4.0, 4, 1212);
      const scratch = SeededRandom.hash2D(u * 128, v * 32, 1313);
      const rustMask = Math.max(0, Math.min(1, (wear - 0.62) * 4.0));
      const base = 0.42 + (scratch - 0.5) * 0.06;
      return {
        r: THREE.MathUtils.lerp(base, 0.46, rustMask),
        g: THREE.MathUtils.lerp(base * 1.02, 0.27, rustMask),
        b: THREE.MathUtils.lerp(base * 1.04, 0.18, rustMask),
        height: 0.5 - rustMask * 0.2 + scratch * 0.1,
        rough: THREE.MathUtils.lerp(0.38, 0.82, rustMask)
      };
    });

    // 7. Woven market awning / sandbag fabric
    this.generateSurfaceSet('cloth', 128, (u, v) => {
      const weaveU = Math.sin(u * Math.PI * 64);
      const weaveV = Math.sin(v * Math.PI * 64);
      const weave = 0.5 + 0.25 * weaveU + 0.25 * weaveV;
      const fold = 0.88 + 0.12 * Math.sin(u * Math.PI * 6);
      const dirt = this.tileFbm(u, v, 3.0, 3, 1414);
      const val = (0.78 + (weave - 0.5) * 0.1 - dirt * 0.12) * fold;
      return {
        r: val,
        g: val * 0.95,
        b: val * 0.88,
        height: weave * 0.4 + fold * 0.4,
        rough: 0.90
      };
    });

    // 8. Interior ceramic courtyard tile
    this.generateSurfaceSet('tile', 128, (u, v) => {
      const gx = (u * 8) % 1;
      const gy = (v * 8) % 1;
      const grout = gx < 0.06 || gy < 0.06;
      const wear = this.tileFbm(u, v, 4.0, 3, 1515);
      if (grout) {
        return { r: 0.38, g: 0.35, b: 0.30, height: 0.15, rough: 0.9 };
      }
      const pat = ((Math.floor(u * 8) + Math.floor(v * 8)) % 2) === 0;
      const r = pat ? 0.76 : 0.34;
      const g = pat ? 0.68 : 0.46;
      const b = pat ? 0.56 : 0.52;
      return {
        r: r * (0.85 + wear * 0.2),
        g: g * (0.85 + wear * 0.2),
        b: b * (0.85 + wear * 0.2),
        height: 0.75 + wear * 0.1,
        rough: 0.42 + wear * 0.25
      };
    });
  }

  /**
   * Injects world-space macro/meso/micro weathering + custom 4-cascade stabilized CSM + cloud shadow field
   */
  public applyWorldWeatheringAndCSM(
    mat: THREE.MeshStandardMaterial,
    weatherStrength = 1.0,
    windSwayStrength = 0.0
  ): THREE.MeshStandardMaterial {
    const matUuid = mat.uuid;
    mat.customProgramCacheKey = () =>
      `world_pbr_${matUuid}_w${weatherStrength.toFixed(2)}_s${windSwayStrength.toFixed(2)}`;

    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.sharedUniforms.uTime;
      shader.uniforms.uSunDir = this.sharedUniforms.uSunDir;
      shader.uniforms.uCloudWindOffset = this.sharedUniforms.uCloudWindOffset;
      shader.uniforms.uCsmMatrix0 = this.sharedUniforms.uCsmMatrix0;
      shader.uniforms.uCsmMatrix1 = this.sharedUniforms.uCsmMatrix1;
      shader.uniforms.uCsmMatrix2 = this.sharedUniforms.uCsmMatrix2;
      shader.uniforms.uCsmMatrix3 = this.sharedUniforms.uCsmMatrix3;
      shader.uniforms.uCsmSplits = this.sharedUniforms.uCsmSplits;
      shader.uniforms.uCsmDepthTex0 = this.sharedUniforms.uCsmDepthTex0;
      shader.uniforms.uCsmDepthTex1 = this.sharedUniforms.uCsmDepthTex1;
      shader.uniforms.uCsmDepthTex2 = this.sharedUniforms.uCsmDepthTex2;
      shader.uniforms.uCsmDepthTex3 = this.sharedUniforms.uCsmDepthTex3;
      shader.uniforms.uCsmEnabled = this.sharedUniforms.uCsmEnabled;
      shader.uniforms.uDebugCascades = this.sharedUniforms.uDebugCascades;
      shader.uniforms.uWeatherStrength = { value: weatherStrength };
      shader.uniforms.uWindSwayStrength = { value: windSwayStrength };

      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          `#include <common>
          uniform float uTime;
          uniform float uWindSwayStrength;
          varying vec3 vWorldPos;
          varying vec3 vWorldNormal;
          varying float vViewDepth;`
        )
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          if (uWindSwayStrength > 0.001) {
            float swayPhase = position.x * 1.7 + position.z * 1.3 + uTime * 2.4;
            float flutter = sin(swayPhase * 2.3) * 0.35 + cos(swayPhase * 0.9) * 0.65;
            transformed.y += flutter * uWindSwayStrength * 0.08;
            transformed.x += sin(swayPhase) * uWindSwayStrength * 0.04;
          }`
        )
        .replace(
          '#include <worldpos_vertex>',
          `#include <worldpos_vertex>
          vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          wp = modelMatrix * wp;
          vWorldPos = wp.xyz;
          mat3 wnMat = mat3(modelMatrix);
          #ifdef USE_INSTANCING
            wnMat = wnMat * mat3(instanceMatrix);
          #endif
          vWorldNormal = normalize(wnMat * objectNormal);
          vViewDepth = -mvPosition.z;`
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <packing>',
          `#include <packing>
          uniform float uTime;
          uniform vec3 uSunDir;
          uniform vec2 uCloudWindOffset;
          uniform mat4 uCsmMatrix0;
          uniform mat4 uCsmMatrix1;
          uniform mat4 uCsmMatrix2;
          uniform mat4 uCsmMatrix3;
          uniform vec4 uCsmSplits;
          uniform sampler2D uCsmDepthTex0;
          uniform sampler2D uCsmDepthTex1;
          uniform sampler2D uCsmDepthTex2;
          uniform sampler2D uCsmDepthTex3;
          uniform float uCsmEnabled;
          uniform float uDebugCascades;
          uniform float uWeatherStrength;
          varying vec3 vWorldPos;
          varying vec3 vWorldNormal;
          varying float vViewDepth;

          float hash31(vec3 p) {
            p = fract(p * 0.1031);
            p += dot(p, p.yzx + 33.33);
            return fract((p.x + p.y) * p.z);
          }

          float worldNoise(vec3 x) {
            vec3 i = floor(x);
            vec3 f = fract(x);
            f = f * f * (3.0 - 2.0 * f);
            return mix(
              mix(mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), f.x),
                  mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
              mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
                  mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y), f.z
            );
          }

          float sampleCascadeDepth(int cascadeIdx, vec2 uv) {
            if (cascadeIdx == 0) return unpackRGBAToDepth(texture2D(uCsmDepthTex0, uv));
            if (cascadeIdx == 1) return unpackRGBAToDepth(texture2D(uCsmDepthTex1, uv));
            if (cascadeIdx == 2) return unpackRGBAToDepth(texture2D(uCsmDepthTex2, uv));
            return unpackRGBAToDepth(texture2D(uCsmDepthTex3, uv));
          }

          float sampleCascadePCF(int cascadeIdx, vec3 projCoords, float bias) {
            if (projCoords.x < 0.005 || projCoords.x > 0.995 || projCoords.y < 0.005 || projCoords.y > 0.995 || projCoords.z > 0.998 || projCoords.z < 0.001) {
              return 1.0;
            }
            float shadow = 0.0;
            vec2 texelSize = vec2(1.0 / 1536.0);
            vec2 offsets[9];
            offsets[0] = vec2(-1.0, -1.0);
            offsets[1] = vec2( 0.0, -1.0);
            offsets[2] = vec2( 1.0, -1.0);
            offsets[3] = vec2(-1.0,  0.0);
            offsets[4] = vec2( 0.0,  0.0);
            offsets[5] = vec2( 1.0,  0.0);
            offsets[6] = vec2(-1.0,  1.0);
            offsets[7] = vec2( 0.0,  1.0);
            offsets[8] = vec2( 1.0,  1.0);

            for (int i = 0; i < 9; i++) {
              float closestDepth = sampleCascadeDepth(cascadeIdx, projCoords.xy + offsets[i] * texelSize);
              shadow += (projCoords.z - bias > closestDepth) ? 0.0 : 1.0;
            }
            return shadow / 9.0;
          }

          bool inCascadeBox(vec3 p) {
            return max(abs(p.x - 0.5), abs(p.y - 0.5)) < 0.475 && p.z > 0.002 && p.z < 0.995;
          }

          float computeStabilizedCSM(vec3 worldPos, vec3 worldNorm, float viewDepth, out int outCascade) {
            vec4 biasedWorld = vec4(worldPos + worldNorm * 0.035, 1.0);
            vec3 p0 = (uCsmMatrix0 * biasedWorld).xyz * 0.5 + 0.5;
            vec3 p1 = (uCsmMatrix1 * biasedWorld).xyz * 0.5 + 0.5;
            vec3 p2 = (uCsmMatrix2 * biasedWorld).xyz * 0.5 + 0.5;
            vec3 p3 = (uCsmMatrix3 * biasedWorld).xyz * 0.5 + 0.5;

            vec3 proj = p3;
            outCascade = 3;
            float baseBias = 0.0020;

            if (inCascadeBox(p0)) {
              outCascade = 0;
              proj = p0;
              baseBias = 0.00065;
            } else if (inCascadeBox(p1)) {
              outCascade = 1;
              proj = p1;
              baseBias = 0.00105;
            } else if (inCascadeBox(p2)) {
              outCascade = 2;
              proj = p2;
              baseBias = 0.00150;
            }

            float ndotl = max(0.0, dot(worldNorm, uSunDir));
            float slopeBias = max(baseBias * (1.0 - ndotl) * 2.2, baseBias * 0.5);
            return sampleCascadePCF(outCascade, proj, slopeBias);
          }`
        )
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
          if (uWeatherStrength > 0.01) {
            // Macro / Meso / Micro world-space variation (prevents repetition & UV stretching)
            float macroVar = worldNoise(vWorldPos * 0.14);
            float mesoVar = worldNoise(vWorldPos * 0.85);
            float microVar = worldNoise(vWorldPos * 4.5);

            // Ground basal grime & upward dust accumulation
            float groundGrime = smoothstep(1.35, 0.0, vWorldPos.y) * (0.5 + 0.5 * mesoVar);
            float upwardDust = smoothstep(0.45, 0.95, vWorldNormal.y) * (0.4 + 0.6 * macroVar);
            float waterStreak = smoothstep(0.2, 0.8, worldNoise(vec3(vWorldPos.x * 2.2, vWorldPos.y * 0.35, vWorldPos.z * 2.2)));

            vec3 sandDustColor = vec3(0.76, 0.67, 0.54);
            vec3 grimeColor = vec3(0.26, 0.23, 0.19);

            diffuseColor.rgb *= (0.88 + 0.24 * macroVar) * (0.94 + 0.12 * microVar);
            diffuseColor.rgb = mix(diffuseColor.rgb, grimeColor, groundGrime * 0.35 * uWeatherStrength);
            diffuseColor.rgb = mix(diffuseColor.rgb, sandDustColor, upwardDust * 0.28 * uWeatherStrength);
            diffuseColor.rgb *= (0.93 + 0.07 * waterStreak);
          }`
        )
        .replace(
          '#include <roughnessmap_fragment>',
          `#include <roughnessmap_fragment>
          if (uWeatherStrength > 0.01) {
            float rMicro = worldNoise(vWorldPos * 3.2);
            roughnessFactor = clamp(roughnessFactor + (rMicro - 0.5) * 0.12 * uWeatherStrength, 0.08, 0.98);
          }`
        )
        .replace(
          '#include <lights_fragment_end>',
          `#include <lights_fragment_end>
          // Low-frequency moving cumulus cloud shadow modulation
          vec2 cloudUV = vWorldPos.xz * 0.0085 + uCloudWindOffset;
          float cloudDensity = worldNoise(vec3(cloudUV * 2.2, 1.5)) * 0.65 + worldNoise(vec3(cloudUV * 5.0, 3.1)) * 0.35;
          float cloudShadow = mix(1.0, 0.72, smoothstep(0.56, 0.76, cloudDensity));

          int csmIndex = 0;
          if (uCsmEnabled > 0.5) {
            float csmFactor = computeStabilizedCSM(vWorldPos, normalize(vWorldNormal), vViewDepth, csmIndex);
            reflectedLight.directDiffuse *= mix(0.06, 1.0, csmFactor) * cloudShadow;
            reflectedLight.directSpecular *= csmFactor * cloudShadow;
            reflectedLight.indirectDiffuse *= mix(0.46, 1.0, csmFactor) * mix(0.84, 1.0, cloudShadow);
            reflectedLight.indirectSpecular *= mix(0.32, 1.0, csmFactor);
          } else {
            reflectedLight.directDiffuse *= cloudShadow;
            reflectedLight.directSpecular *= cloudShadow;
          }

          if (uDebugCascades > 0.5) {
            vec3 cCol = csmIndex == 0 ? vec3(0.2, 1.0, 0.3) :
                        csmIndex == 1 ? vec3(0.2, 0.7, 1.0) :
                        csmIndex == 2 ? vec3(1.0, 0.8, 0.2) : vec3(1.0, 0.25, 0.3);
            reflectedLight.directDiffuse = mix(reflectedLight.directDiffuse, cCol, 0.45);
          }`
        );
    };

    return mat;
  }

  private buildCoreMaterials(): void {
    const plasterSet = this.textures.get('plaster')!;
    const roadSet = this.textures.get('road')!;
    const brickSet = this.textures.get('brick')!;
    const concreteSet = this.textures.get('concrete')!;
    const woodSet = this.textures.get('wood')!;
    const metalSet = this.textures.get('metal')!;
    const clothSet = this.textures.get('cloth')!;
    const tileSet = this.textures.get('tile')!;

    // Architectural facade palette matching North African / Eastern Med midday reference
    const facadeTints: Array<[string, number]> = [
      ['stucco_warm_beige', 0xe8d8bf],
      ['stucco_sun_ochre', 0xdfc195],
      ['stucco_chalk_white', 0xede7dc],
      ['stucco_terracotta', 0xd29c7c],
      ['stucco_dusty_blue', 0xa4b6c2],
      ['stucco_pale_peach', 0xe4bfa6],
      ['stucco_weathered_gray', 0xc6c1b8]
    ];

    for (const [key, hex] of facadeTints) {
      const mat = new THREE.MeshStandardMaterial({
        color: hex,
        map: plasterSet.albedo,
        normalMap: plasterSet.normal,
        normalScale: new THREE.Vector2(0.32, 0.32),
        roughnessMap: plasterSet.roughness,
        roughness: 0.88,
        metalness: 0.02
      });
      this.applyWorldWeatheringAndCSM(mat, 1.0, 0.0);
      this.materials.set(key, mat);
    }

    const roadMat = new THREE.MeshStandardMaterial({
      color: 0xd8cfc2,
      map: roadSet.albedo,
      normalMap: roadSet.normal,
      normalScale: new THREE.Vector2(0.45, 0.45),
      roughnessMap: roadSet.roughness,
      roughness: 0.9,
      metalness: 0.02
    });
    this.applyWorldWeatheringAndCSM(roadMat, 1.15, 0.0);
    this.materials.set('road', roadMat);

    const concreteMat = new THREE.MeshStandardMaterial({
      color: 0xd4cbbd,
      map: concreteSet.albedo,
      normalMap: concreteSet.normal,
      normalScale: new THREE.Vector2(0.8, 0.8),
      roughnessMap: concreteSet.roughness,
      roughness: 0.86,
      metalness: 0.04
    });
    this.applyWorldWeatheringAndCSM(concreteMat, 1.0, 0.0);
    this.materials.set('concrete', concreteMat);

    const brickMat = new THREE.MeshStandardMaterial({
      color: 0xd9b8a3,
      map: brickSet.albedo,
      normalMap: brickSet.normal,
      normalScale: new THREE.Vector2(0.9, 0.9),
      roughnessMap: brickSet.roughness,
      roughness: 0.85,
      metalness: 0.02
    });
    this.applyWorldWeatheringAndCSM(brickMat, 1.0, 0.0);
    this.materials.set('brick', brickMat);

    const woodMat = new THREE.MeshStandardMaterial({
      color: 0xd4b692,
      map: woodSet.albedo,
      normalMap: woodSet.normal,
      normalScale: new THREE.Vector2(0.75, 0.75),
      roughnessMap: woodSet.roughness,
      roughness: 0.82,
      metalness: 0.03
    });
    this.applyWorldWeatheringAndCSM(woodMat, 0.8, 0.0);
    this.materials.set('wood', woodMat);

    const metalPainted = new THREE.MeshStandardMaterial({
      color: 0x8e99a2,
      map: metalSet.albedo,
      normalMap: metalSet.normal,
      normalScale: new THREE.Vector2(0.6, 0.6),
      roughnessMap: metalSet.roughness,
      roughness: 0.48,
      metalness: 0.78
    });
    this.applyWorldWeatheringAndCSM(metalPainted, 0.7, 0.0);
    this.materials.set('metal_painted', metalPainted);

    const metalDark = new THREE.MeshStandardMaterial({
      color: 0x454a4f,
      map: metalSet.albedo,
      normalMap: metalSet.normal,
      normalScale: new THREE.Vector2(0.55, 0.55),
      roughnessMap: metalSet.roughness,
      roughness: 0.42,
      metalness: 0.85
    });
    this.applyWorldWeatheringAndCSM(metalDark, 0.6, 0.0);
    this.materials.set('metal_dark', metalDark);

    const shutterBlue = new THREE.MeshStandardMaterial({
      color: 0x4b6e82,
      map: metalSet.albedo,
      normalMap: metalSet.normal,
      roughnessMap: metalSet.roughness,
      roughness: 0.56,
      metalness: 0.55
    });
    this.applyWorldWeatheringAndCSM(shutterBlue, 0.85, 0.0);
    this.materials.set('shutter_blue', shutterBlue);

    // Wind-animated cloth awning materials
    const awningColors: Array<[string, number]> = [
      ['awning_terracotta', 0xb8523b],
      ['awning_ochre', 0xc99442],
      ['awning_cream', 0xe2d5be],
      ['awning_blue', 0x3f6882],
      ['awning_olive', 0x687350]
    ];
    for (const [key, hex] of awningColors) {
      const mat = new THREE.MeshStandardMaterial({
        color: hex,
        map: clothSet.albedo,
        normalMap: clothSet.normal,
        roughnessMap: clothSet.roughness,
        roughness: 0.9,
        metalness: 0.0,
        side: THREE.DoubleSide
      });
      this.applyWorldWeatheringAndCSM(mat, 0.6, 1.0);
      this.materials.set(key, mat);
    }

    const sandbagMat = new THREE.MeshStandardMaterial({
      color: 0xc2ab84,
      map: clothSet.albedo,
      normalMap: clothSet.normal,
      roughnessMap: clothSet.roughness,
      roughness: 0.94,
      metalness: 0.0
    });
    this.applyWorldWeatheringAndCSM(sandbagMat, 0.9, 0.0);
    this.materials.set('sandbag', sandbagMat);

    const tileMat = new THREE.MeshStandardMaterial({
      color: 0xdcd3c4,
      map: tileSet.albedo,
      normalMap: tileSet.normal,
      roughnessMap: tileSet.roughness,
      roughness: 0.52,
      metalness: 0.05
    });
    this.applyWorldWeatheringAndCSM(tileMat, 0.7, 0.0);
    this.materials.set('tile', tileMat);

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x1b2830,
      normalMap: plasterSet.normal,
      normalScale: new THREE.Vector2(0.12, 0.12),
      roughness: 0.18,
      metalness: 0.35
    });
    this.applyWorldWeatheringAndCSM(glassMat, 0.5, 0.0);
    this.materials.set('glass_dark', glassMat);

    const foliageMat = new THREE.MeshStandardMaterial({
      color: 0x5c6e41,
      roughness: 0.76,
      metalness: 0.02,
      side: THREE.DoubleSide
    });
    this.applyWorldWeatheringAndCSM(foliageMat, 0.4, 1.25);
    this.materials.set('foliage', foliageMat);
  }

  public get(name: string): THREE.MeshStandardMaterial {
    return this.materials.get(name) ?? this.materials.get('concrete')!;
  }
}
