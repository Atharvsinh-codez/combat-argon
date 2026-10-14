import * as THREE from 'three';

/**
 * Procedural Physical Atmosphere + Ray-Marched Volumetric Cumulus Cloud Dome
 * & Procedural Sky Irradiance Environment Map Generator (Zero external HDRI files)
 */
export class SkyAtmosphere {
  public skyMesh: THREE.Mesh;
  public sunDirection = new THREE.Vector3(-0.62, 0.64, -0.45).normalize();
  public sunLight: THREE.DirectionalLight;
  public hemiLight: THREE.HemisphereLight;
  public uniforms: {
    uSunDir: { value: THREE.Vector3 };
    uTime: { value: number };
    uCloudSteps: { value: number };
  };

  constructor(scene: THREE.Scene, cloudSteps = 20) {
    this.uniforms = {
      uSunDir: { value: this.sunDirection.clone() },
      uTime: { value: 0 },
      uCloudSteps: { value: cloudSteps }
    };

    const geo = new THREE.SphereGeometry(420, 32, 20);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: this.uniforms,
      vertexShader: /* glsl */ `
        varying vec3 vWorldDir;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldDir = wp.xyz - cameraPosition;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uSunDir;
        uniform float uTime;
        uniform float uCloudSteps;
        varying vec3 vWorldDir;

        float hash31(vec3 p) {
          p = fract(p * 0.1031);
          p += dot(p, p.yzx + 33.33);
          return fract((p.x + p.y) * p.z);
        }

        float noise3D(vec3 x) {
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

        float fbmClouds(vec3 p) {
          float v = 0.0;
          float a = 0.52;
          for (int i = 0; i < 4; i++) {
            v += a * noise3D(p);
            p = p * 2.08 + vec3(13.7, 7.1, 19.3);
            a *= 0.5;
          }
          return v;
        }

        float cloudDensity(vec3 pos, vec3 wind) {
          vec3 p = pos * 0.00125 + wind;
          float base = fbmClouds(p);
          float billow = 1.0 - abs(noise3D(p * 2.4) * 2.0 - 1.0);
          float combined = mix(base, billow, 0.28);

          // Cumulus flat anvil base + rounded dome top profile
          float h = clamp((pos.y - 380.0) / 420.0, 0.0, 1.0);
          float heightShape = smoothstep(0.0, 0.18, h) * smoothstep(1.0, 0.55, h);
          return max(0.0, (combined - 0.50) * 2.85) * heightShape;
        }

        void main() {
          vec3 rd = normalize(vWorldDir);
          vec3 sunDir = normalize(uSunDir);
          float sunDot = clamp(dot(rd, sunDir), 0.0, 1.0);
          float zenith = clamp(rd.y, 0.0, 1.0);

          // Rayleigh & Mie physical midday sky gradient
          vec3 zenithSky = vec3(0.08, 0.32, 0.82);
          vec3 horizonSky = vec3(0.56, 0.76, 0.96);
          vec3 desertGroundHaze = vec3(0.76, 0.70, 0.60);

          vec3 skyCol = mix(horizonSky, zenithSky, pow(zenith, 0.48));
          skyCol = mix(desertGroundHaze, skyCol, smoothstep(-0.08, 0.14, rd.y));

          // Mie forward solar aureole & crisp HDR sun disk
          float mieHalo = pow(sunDot, 8.0) * 0.36 + pow(sunDot, 64.0) * 0.75;
          float sunDisk = smoothstep(0.9993, 0.99985, sunDot) * 14.0;
          skyCol += vec3(1.0, 0.94, 0.80) * (mieHalo + sunDisk);

          // Ray-marched volumetric cumulus clouds above horizon
          if (rd.y > 0.035) {
            float tStart = 380.0 / max(0.08, rd.y);
            float tEnd = 800.0 / max(0.08, rd.y);
            int steps = int(clamp(uCloudSteps, 8.0, 28.0));
            float stepSize = (tEnd - tStart) / float(steps);
            vec3 wind = vec3(uTime * 0.008, 0.0, uTime * 0.004);

            vec4 accum = vec4(0.0);
            float t = tStart;

            for (int i = 0; i < 28; i++) {
              if (i >= steps || accum.a > 0.97) break;
              vec3 samplePos = rd * t;
              float dens = cloudDensity(samplePos, wind);

              if (dens > 0.01) {
                // Directional sun shadow probe toward sun
                float sunSample = cloudDensity(samplePos + sunDir * 68.0, wind);
                float lightTrans = exp(-sunSample * 2.8);
                // Henyey-Greenstein silver lining phase approximation
                float phase = mix(0.65, 1.45, pow(sunDot, 4.0));
                float heightGrad = clamp((samplePos.y - 380.0) / 420.0, 0.0, 1.0);

                vec3 sunlitTop = vec3(1.22, 1.18, 1.12) * phase;
                vec3 shadedInterior = mix(vec3(0.50, 0.56, 0.66), vec3(0.66, 0.72, 0.80), heightGrad);
                vec3 cloudCol = mix(shadedInterior, sunlitTop, clamp(lightTrans * 1.15, 0.0, 1.0));

                float alpha = clamp(dens * 0.42, 0.0, 1.0);
                cloudCol *= alpha;
                accum += vec4(cloudCol, alpha) * (1.0 - accum.a);
              }
              t += stepSize;
            }

            // Aerial perspective fade near distant horizon
            float horizonFade = smoothstep(0.035, 0.19, rd.y);
            skyCol = mix(skyCol, accum.rgb / max(0.0001, accum.a), accum.a * horizonFade);
          }

          gl_FragColor = vec4(skyCol, 1.0);
        }
      `
    });

    this.skyMesh = new THREE.Mesh(geo, mat);
    this.skyMesh.frustumCulled = false;
    scene.add(this.skyMesh);

    // Midday directional sun light + sky/ground hemisphere irradiance fill
    this.sunLight = new THREE.DirectionalLight(0xfff4df, 3.65);
    this.sunLight.position.copy(this.sunDirection).multiplyScalar(120);
    scene.add(this.sunLight);

    this.hemiLight = new THREE.HemisphereLight(0x9bc4f0, 0xb89b74, 1.25);
    scene.add(this.hemiLight);
  }

  public bakeProceduralEnvironment(renderer: THREE.WebGLRenderer, scene: THREE.Scene): void {
    const envScene = new THREE.Scene();
    const skyClone = new THREE.Mesh(
      new THREE.SphereGeometry(50, 24, 16),
      this.skyMesh.material
    );
    envScene.add(skyClone);

    // Add warm desert ground bounce hemisphere for realistic lower specular/diffuse bounce
    const groundHemisphere = new THREE.Mesh(
      new THREE.SphereGeometry(48, 16, 8, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5),
      new THREE.MeshBasicMaterial({ color: 0x9c8669, side: THREE.BackSide })
    );
    envScene.add(groundHemisphere);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(envScene, 0.04);
    scene.environment = envRT.texture;
    scene.environmentIntensity = 0.72;
    pmrem.dispose();
  }

  public update(timeSec: number, cameraPos: THREE.Vector3, cloudSteps: number): void {
    this.uniforms.uTime.value = timeSec;
    this.uniforms.uCloudSteps.value = cloudSteps;
    this.skyMesh.position.copy(cameraPos);
  }
}
