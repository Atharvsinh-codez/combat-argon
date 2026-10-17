import * as THREE from 'three';
import { SeededRandom } from '../core/SeededRandom';
import { SynthEngine } from '../audio/SynthEngine';
import { mergeRigMeshes } from '../render/mergeRigMeshes';

export class SpringVec3 {
  public value = new THREE.Vector3();
  public velocity = new THREE.Vector3();
  public target = new THREE.Vector3();

  constructor(
    public stiffness = 180,
    public damping = 22
  ) {}

  public impulse(ix: number, iy: number, iz: number): void {
    this.velocity.x += ix;
    this.velocity.y += iy;
    this.velocity.z += iz;
  }

  public step(dt: number): void {
    const clampedDt = Math.min(dt, 1 / 30);
    const fx = (this.target.x - this.value.x) * this.stiffness - this.velocity.x * this.damping;
    const fy = (this.target.y - this.value.y) * this.stiffness - this.velocity.y * this.damping;
    const fz = (this.target.z - this.value.z) * this.stiffness - this.velocity.z * this.damping;

    this.velocity.x += fx * clampedDt;
    this.velocity.y += fy * clampedDt;
    this.velocity.z += fz * clampedDt;

    this.value.x += this.velocity.x * clampedDt;
    this.value.y += this.velocity.y * clampedDt;
    this.value.z += this.velocity.z * clampedDt;
  }
}

export type FireMode = 'AUTO' | 'SEMI';

/**
 * First-Person Tactical Carbine ("MK18 MOD-C4") + Rigged Tactical Gloves/Sleeves,
 * True Collimated Red-Dot Optic Shader, Muzzle Flash Lobes, and Procedural Spring Animation Layer.
 */
export class Weapon {
  public root = new THREE.Group();
  public weaponRig = new THREE.Group();
  public magazineGroup = new THREE.Group();
  public boltCarrierMesh!: THREE.Mesh;
  public chargingHandleMesh!: THREE.Mesh;
  public selectorMesh!: THREE.Mesh;
  public leftHandGroup = new THREE.Group();
  public rightHandGroup = new THREE.Group();
  public muzzleFlashGroup = new THREE.Group();
  public muzzleLight!: THREE.PointLight;
  public opticLensMesh!: THREE.Mesh;
  public opticUniforms!: {
    uAdsAmount: { value: number };
    uSwayOffset: { value: THREE.Vector2 };
    uHeat: { value: number };
  };

  // Ammunition & State
  public readonly weaponName = 'MK18 MOD-C4';
  public readonly caliberLabel = '5.56×45MM NATO';
  public magCapacity = 30;
  public magAmmo = 30;
  public reserveAmmo = 120;
  public tacticalCount = 1;
  public explosiveCount = 1;
  public fireMode: FireMode = 'AUTO';
  public rpm = 760;
  public fireInterval = 60 / 760;
  public fireCooldown = 0;
  public consecutiveShots = 0;
  public barrelHeat = 0;

  // Animation states
  public adsProgress = 0;
  public isReloading = false;
  public isEmptyReload = false;
  public reloadTimer = 0;
  public reloadDuration = 2.05;
  private magOutPlayed = false;
  private magInPlayed = false;
  private boltPlayed = false;

  public isInspecting = false;
  public inspectTimer = 0;
  public inspectDuration = 2.75;

  public muzzleFlashTimer = 0;
  public wallProximity = 0;
  public currentSpread = 0.003;

  // Spring solvers
  public posSpring = new SpringVec3(220, 24);
  public rotSpring = new SpringVec3(195, 21);
  public recoilCameraKick = new THREE.Vector2();
  public fovKick = 0;

  // Hip & ADS anchor offsets in viewmodel space (calibrated so optic lens center is at (0, 0, -0.26) in ADS)
  private readonly hipOffset = new THREE.Vector3(0.118, -0.106, -0.265);
  private readonly adsOffset = new THREE.Vector3(0.0, -0.0565, -0.195);

  private _worldMuzzle = new THREE.Vector3();
  private _basePos = new THREE.Vector3();
  private _baseRot = new THREE.Vector3();
  private _worldEject = new THREE.Vector3();

  constructor(private rng: SeededRandom) {
    this.root.name = 'FirstPersonViewmodelRoot';
    this.root.add(this.weaponRig);
    this.buildCarbineAndHands();
    mergeRigMeshes(this.weaponRig, [
      this.boltCarrierMesh,
      this.chargingHandleMesh,
      this.selectorMesh,
      this.opticLensMesh
    ]);
  }

  private buildCarbineAndHands(): void {
    // Distinct PBR weapon materials
    const anodizedUpperMat = new THREE.MeshStandardMaterial({
      color: 0x26292e,
      metalness: 0.84,
      roughness: 0.34
    });
    const anodizedLowerMat = new THREE.MeshStandardMaterial({
      color: 0x2c3035,
      metalness: 0.80,
      roughness: 0.38
    });
    const parkerizedSteelMat = new THREE.MeshStandardMaterial({
      color: 0x1c1e21,
      metalness: 0.90,
      roughness: 0.44
    });
    const wornMetalEdgeMat = new THREE.MeshStandardMaterial({
      color: 0x6c737a,
      metalness: 0.92,
      roughness: 0.24
    });
    const polymerBlackMat = new THREE.MeshStandardMaterial({
      color: 0x1b1c1e,
      metalness: 0.08,
      roughness: 0.76
    });
    const polymerTanMat = new THREE.MeshStandardMaterial({
      color: 0x9b8669,
      metalness: 0.06,
      roughness: 0.72
    });
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd6a84a,
      metalness: 0.90,
      roughness: 0.22
    });
    const gloveFabricMat = new THREE.MeshStandardMaterial({
      color: 0x3b3832,
      metalness: 0.04,
      roughness: 0.86
    });
    const gloveLeatherMat = new THREE.MeshStandardMaterial({
      color: 0x22201d,
      metalness: 0.12,
      roughness: 0.64
    });
    const sleeveCamoMat = new THREE.MeshStandardMaterial({
      color: 0x6e634f,
      metalness: 0.02,
      roughness: 0.88
    });

    // 1. Upper Receiver & Lower Receiver Assembly
    const upperReceiver = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.042, 0.195), anodizedUpperMat);
    upperReceiver.position.set(0, 0.012, 0.0);
    this.weaponRig.add(upperReceiver);

    const lowerReceiver = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.044, 0.165), anodizedLowerMat);
    lowerReceiver.position.set(0, -0.024, 0.01);
    this.weaponRig.add(lowerReceiver);

    // Flared Magazine Well
    const magWell = new THREE.Mesh(new THREE.BoxGeometry(0.037, 0.046, 0.068), anodizedLowerMat);
    magWell.position.set(0, -0.036, -0.038);
    this.weaponRig.add(magWell);

    // Trigger Guard & Curved Trigger
    const trigGuard = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.005, 0.046), anodizedLowerMat);
    trigGuard.position.set(0, -0.052, 0.022);
    this.weaponRig.add(trigGuard);

    const trigger = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.020, 0.008), parkerizedSteelMat);
    trigger.position.set(0, -0.038, 0.024);
    trigger.rotation.x = 0.25;
    this.weaponRig.add(trigger);

    // Ejection Port & Bolt Carrier Group (reciprocates on each shot!)
    const boltGeo = new THREE.BoxGeometry(0.012, 0.018, 0.068);
    this.boltCarrierMesh = new THREE.Mesh(boltGeo, wornMetalEdgeMat);
    this.boltCarrierMesh.position.set(0.013, 0.014, -0.025);
    this.weaponRig.add(this.boltCarrierMesh);

    // Dust cover (open downward on right side) + Brass Deflector + Forward Assist
    const dustCover = new THREE.Mesh(new THREE.BoxGeometry(0.003, 0.016, 0.066), parkerizedSteelMat);
    dustCover.position.set(0.020, 0.002, -0.025);
    dustCover.rotation.z = -0.35;
    this.weaponRig.add(dustCover);

    const brassDeflector = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.022, 0.018), anodizedUpperMat);
    brassDeflector.position.set(0.020, 0.014, 0.022);
    this.weaponRig.add(brassDeflector);

    const forwardAssist = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.007, 0.026, 8), parkerizedSteelMat);
    forwardAssist.rotation.x = Math.PI * 0.5;
    forwardAssist.rotation.z = -0.25;
    forwardAssist.position.set(0.021, 0.008, 0.052);
    this.weaponRig.add(forwardAssist);

    // Fire-Mode Selector Lever on Left Side
    this.selectorMesh = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.008, 0.022), wornMetalEdgeMat);
    this.selectorMesh.position.set(-0.019, -0.016, 0.052);
    this.weaponRig.add(this.selectorMesh);

    // T-Shaped Ambidextrous Charging Handle
    const chGroup = new THREE.Group();
    const chStem = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.008, 0.055), anodizedUpperMat);
    const chLatch = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.010, 0.014), wornMetalEdgeMat);
    chLatch.position.set(0, 0, 0.026);
    chGroup.add(chStem, chLatch);
    chGroup.position.set(0, 0.028, 0.078);
    this.chargingHandleMesh = chStem;
    this.weaponRig.add(chGroup);

    // 2. Ergonomic Textured Pistol Grip (FDE Tan / Black two-tone)
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.095, 0.040), polymerTanMat);
    grip.position.set(0, -0.072, 0.056);
    grip.rotation.x = 0.28;
    this.weaponRig.add(grip);

    // 3. Buffer Tube & Adjustable SOPMOD Stock
    const bufferTube = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.16, 12), anodizedLowerMat);
    bufferTube.rotation.x = Math.PI * 0.5;
    bufferTube.position.set(0, 0.008, 0.165);
    this.weaponRig.add(bufferTube);

    const stockBody = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.092, 0.155), polymerTanMat);
    stockBody.position.set(0, -0.012, 0.195);
    this.weaponRig.add(stockBody);

    const buttPad = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.105, 0.018), polymerBlackMat);
    buttPad.position.set(0, -0.016, 0.276);
    this.weaponRig.add(buttPad);

    // 4. Free-Float M-LOK / Quad Handguard & Continuous Picatinny Top Rail
    const handguard = new THREE.Mesh(new THREE.BoxGeometry(0.040, 0.044, 0.235), anodizedUpperMat);
    handguard.position.set(0, 0.010, -0.215);
    this.weaponRig.add(handguard);

    // Vent slots along handguard sides
    for (let i = 0; i < 5; i++) {
      const slot = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.010, 0.028), parkerizedSteelMat);
      slot.position.set(0, 0.014, -0.125 - i * 0.040);
      this.weaponRig.add(slot);
    }

    // FDE rail covers on left/right handguard
    for (const side of [-1, 1]) {
      const cover = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.018, 0.12), polymerTanMat);
      cover.position.set(side * 0.021, 0.008, -0.205);
      this.weaponRig.add(cover);
    }

    // Continuous Picatinny Top Rail with 22 machined cross-ribs
    const railBase = new THREE.Mesh(new THREE.BoxGeometry(0.021, 0.007, 0.42), anodizedUpperMat);
    railBase.position.set(0, 0.036, -0.115);
    this.weaponRig.add(railBase);

    const ribGeo = new THREE.BoxGeometry(0.022, 0.004, 0.008);
    for (let r = 0; r < 22; r++) {
      const rib = new THREE.Mesh(ribGeo, wornMetalEdgeMat);
      rib.position.set(0, 0.0405, 0.085 - r * 0.0185);
      this.weaponRig.add(rib);
    }

    // 5. Heavy Profile Barrel, Gas Block & A2 Birdcage Flash Hider
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.0085, 0.0095, 0.14, 12), parkerizedSteelMat);
    barrel.rotation.x = Math.PI * 0.5;
    barrel.position.set(0, 0.012, -0.375);
    this.weaponRig.add(barrel);

    const flashHider = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.045, 10), wornMetalEdgeMat);
    flashHider.rotation.x = Math.PI * 0.5;
    flashHider.position.set(0, 0.012, -0.455);
    this.weaponRig.add(flashHider);

    // Side-mounted PEQ/Tactical Laser Box on front right rail
    const laserBox = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.020, 0.068), polymerTanMat);
    laserBox.position.set(0.024, 0.022, -0.275);
    this.weaponRig.add(laserBox);

    // Folded front & rear backup iron sights (BUIS)
    const rearBuis = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.012, 0.028), parkerizedSteelMat);
    rearBuis.position.set(0, 0.045, 0.068);
    this.weaponRig.add(rearBuis);

    const frontBuis = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.012, 0.028), parkerizedSteelMat);
    frontBuis.position.set(0, 0.045, -0.305);
    this.weaponRig.add(frontBuis);

    // 6. Riser Mount + Compact Tube-Style Red-Dot Optic with True Collimated Shader
    this.buildCollimatedOptic(anodizedUpperMat, wornMetalEdgeMat);

    // 7. Detachable 30-Round Polymer Windowed Magazine with Top Brass Rounds
    const magBody = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.145, 0.058), polymerTanMat);
    magBody.position.set(0, -0.065, 0);
    magBody.rotation.x = -0.14;
    this.magazineGroup.add(magBody);

    const magBaseplate = new THREE.Mesh(new THREE.BoxGeometry(0.027, 0.012, 0.064), polymerBlackMat);
    magBaseplate.position.set(0, -0.136, -0.010);
    magBaseplate.rotation.x = -0.14;
    this.magazineGroup.add(magBaseplate);

    // Visible brass rounds at top of magazine feed lips (visible during reload)
    const roundGeo = new THREE.CylinderGeometry(0.0045, 0.0048, 0.042, 8);
    roundGeo.rotateX(Math.PI * 0.5);
    for (let i = 0; i < 2; i++) {
      const round = new THREE.Mesh(roundGeo, brassMat);
      round.position.set((i === 0 ? -1 : 1) * 0.004, 0.006 - i * 0.006, 0.002);
      this.magazineGroup.add(round);
    }

    this.magazineGroup.position.set(0, -0.042, -0.040);
    this.weaponRig.add(this.magazineGroup);

    // 8. Detailed First-Person Tactical Hands, Reinforced Knuckles, and Sleeves
    this.buildTacticalHands(gloveFabricMat, gloveLeatherMat, sleeveCamoMat, wornMetalEdgeMat);

    // 9. Layered Muzzle Flash Lobes + Dynamic Point Light
    this.buildMuzzleFlashSystem();
  }

  private buildCollimatedOptic(
    housingMat: THREE.MeshStandardMaterial,
    accentMat: THREE.MeshStandardMaterial
  ): void {
    const opticGroup = new THREE.Group();
    // Optic center is placed at y = +0.0565 so when weaponRig is at adsOffset.y = -0.0565,
    // the optic axis sits at (0, 0, -0.22) directly in front of the eye!
    opticGroup.position.set(0, 0.0565, -0.025);

    // Skeletonized lower-1/3 riser mount
    const riser = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.018, 0.054), housingMat);
    riser.position.set(0, -0.015, 0);
    opticGroup.add(riser);

    // Hollow cylindrical optic housing (outer ring + inner dark tube wall)
    const ringPoints = [
      new THREE.Vector2(0.0155, -0.028),
      new THREE.Vector2(0.0185, -0.028),
      new THREE.Vector2(0.0185, 0.028),
      new THREE.Vector2(0.0155, 0.028),
      new THREE.Vector2(0.0155, -0.028)
    ];
    const tubeGeo = new THREE.LatheGeometry(ringPoints, 24);
    tubeGeo.rotateX(Math.PI * 0.5);
    const tubeMesh = new THREE.Mesh(tubeGeo, housingMat);
    opticGroup.add(tubeMesh);

    // Battery cap / windage & elevation turrets
    const batteryTurret = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.014, 10), accentMat);
    batteryTurret.rotation.z = -Math.PI * 0.55;
    batteryTurret.position.set(0.019, 0.008, 0.002);
    opticGroup.add(batteryTurret);

    const topTurret = new THREE.Mesh(new THREE.CylinderGeometry(0.0055, 0.0055, 0.008, 10), accentMat);
    topTurret.position.set(0, 0.020, -0.004);
    opticGroup.add(topTurret);

    // True Collimated Red-Dot Reticle & Multi-Coated Lens Shader
    this.opticUniforms = {
      uAdsAmount: { value: 0 },
      uSwayOffset: { value: new THREE.Vector2(0, 0) },
      uHeat: { value: 0 }
    };

    const lensGeo = new THREE.CircleGeometry(0.0152, 24);
    const lensMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: this.opticUniforms,
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        varying vec3 vViewPos;
        varying vec3 vCenterViewPos;
        void main() {
          vUv = uv * 2.0 - 1.0;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vViewPos = mvPos.xyz;
          vCenterViewPos = (modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uAdsAmount;
        uniform vec2 uSwayOffset;
        varying vec2 vUv;
        varying vec3 vViewPos;
        varying vec3 vCenterViewPos;

        void main() {
          float r = length(vUv);
          if (r > 1.0) discard;

          // True collimated projection: project infinite-focus bore vector onto lens plane
          vec2 parallaxOffset = (vCenterViewPos.xy / max(0.05, -vCenterViewPos.z)) * 6.5 + uSwayOffset;
          vec2 retCoord = vUv - parallaxOffset;
          float d = length(retCoord);

          // Crisp 2 MOA center red dot + 32 MOA broken tactical ring + 4 stadia ticks
          float centerDot = smoothstep(0.095, 0.035, d);
          float outerRing = smoothstep(0.032, 0.008, abs(d - 0.36));
          float gapMask = step(0.06, abs(retCoord.x)) * step(0.06, abs(retCoord.y));
          float tickX = smoothstep(0.022, 0.005, abs(retCoord.y)) * smoothstep(0.52, 0.36, abs(retCoord.x)) * step(0.28, abs(retCoord.x));
          float tickY = smoothstep(0.022, 0.005, abs(retCoord.x)) * smoothstep(0.52, 0.36, abs(retCoord.y)) * step(0.28, abs(retCoord.y));

          float reticle = max(centerDot, (outerRing * gapMask + tickX + tickY) * 0.78);
          // Edge aperture occlusion inside the optic tube
          float apertureMask = smoothstep(0.98, 0.82, r);
          reticle *= apertureMask;

          // Subtle ruby/teal anti-reflective coating + faint fingerprint smudge near outer bezel
          float fresnel = smoothstep(0.45, 0.98, r);
          vec3 glassTint = mix(vec3(0.05, 0.14, 0.16), vec3(0.18, 0.08, 0.10), fresnel);
          vec3 reticleCol = vec3(3.8, 0.28, 0.18) * reticle;

          float glassAlpha = mix(0.16, 0.07, uAdsAmount) + fresnel * 0.18;
          float finalAlpha = clamp(glassAlpha + reticle * 0.95, 0.0, 0.98);
          gl_FragColor = vec4(glassTint + reticleCol, finalAlpha);
        }
      `
    });

    this.opticLensMesh = new THREE.Mesh(lensGeo, lensMat);
    this.opticLensMesh.position.set(0, 0, 0.018);
    this.opticLensMesh.renderOrder = 10;
    opticGroup.add(this.opticLensMesh);

    this.weaponRig.add(opticGroup);
  }

  private buildTacticalHands(
    gloveFabricMat: THREE.MeshStandardMaterial,
    gloveLeatherMat: THREE.MeshStandardMaterial,
    sleeveMat: THREE.MeshStandardMaterial,
    watchMat: THREE.MeshStandardMaterial
  ): void {
    // RIGHT HAND & FOREARM (anchored to pistol grip & trigger guard)
    const rPalm = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.078, 0.052), gloveFabricMat);
    rPalm.position.set(0.006, -0.068, 0.060);
    rPalm.rotation.x = 0.28;
    this.rightHandGroup.add(rPalm);

    const rKnuckle = new THREE.Mesh(new THREE.BoxGeometry(0.040, 0.022, 0.048), gloveLeatherMat);
    rKnuckle.position.set(0.010, -0.042, 0.046);
    this.rightHandGroup.add(rKnuckle);

    // Trigger finger & wrapped fingers
    const rTriggerFinger = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.012, 0.044), gloveLeatherMat);
    rTriggerFinger.position.set(0.014, -0.036, 0.028);
    this.rightHandGroup.add(rTriggerFinger);

    const rForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.042, 0.24, 10), sleeveMat);
    rForearm.rotation.x = Math.PI * 0.42;
    rForearm.rotation.z = -0.22;
    rForearm.position.set(0.042, -0.105, 0.175);
    this.rightHandGroup.add(rForearm);
    this.weaponRig.add(this.rightHandGroup);

    // LEFT SUPPORT HAND, TACTICAL WATCH & FOREARM (anchored under handguard, animates during reload/inspect)
    const lPalm = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.034, 0.078), gloveFabricMat);
    lPalm.position.set(-0.012, -0.012, 0);
    this.leftHandGroup.add(lPalm);

    // Thumb-over-bore C-clamp grip on handguard
    const lThumb = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.016, 0.044), gloveLeatherMat);
    lThumb.position.set(-0.016, 0.022, -0.012);
    lThumb.rotation.z = -0.35;
    this.leftHandGroup.add(lThumb);

    const lKnuckles = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.032, 0.068), gloveLeatherMat);
    lKnuckles.position.set(-0.024, 0.004, 0);
    this.leftHandGroup.add(lKnuckles);

    // Tactical field watch on left wrist
    const watchStrap = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, 0.020, 12), gloveLeatherMat);
    watchStrap.rotation.x = Math.PI * 0.48;
    watchStrap.rotation.z = 0.32;
    watchStrap.position.set(-0.026, -0.026, 0.056);
    this.leftHandGroup.add(watchStrap);

    const watchFace = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.008, 12), watchMat);
    watchFace.position.set(-0.022, -0.010, 0.055);
    this.leftHandGroup.add(watchFace);

    const lForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.033, 0.042, 0.26, 10), sleeveMat);
    lForearm.rotation.x = Math.PI * 0.42;
    lForearm.rotation.z = 0.34;
    lForearm.position.set(-0.062, -0.068, 0.165);
    this.leftHandGroup.add(lForearm);

    this.leftHandGroup.position.set(0, 0, -0.205);
    this.weaponRig.add(this.leftHandGroup);
  }

  private buildMuzzleFlashSystem(): void {
    this.muzzleFlashGroup.position.set(0, 0.012, -0.495);
    this.muzzleFlashGroup.visible = false;

    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xfff8e0,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const lobeMat = new THREE.MeshBasicMaterial({
      color: 0xff7b24,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    // White-hot muzzle core sphere
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.026, 8, 8), coreMat);
    this.muzzleFlashGroup.add(core);

    // 4 Radial star flame lobes
    const lobeGeo = new THREE.ConeGeometry(0.032, 0.16, 5);
    lobeGeo.translate(0, 0.08, 0);
    for (let i = 0; i < 4; i++) {
      const lobe = new THREE.Mesh(lobeGeo, lobeMat);
      lobe.rotation.z = (i * Math.PI) * 0.5 + 0.35;
      this.muzzleFlashGroup.add(lobe);
    }

    // Forward jet spike
    const jet = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.22, 6), lobeMat);
    jet.rotation.x = -Math.PI * 0.5;
    jet.position.set(0, 0, -0.11);
    this.muzzleFlashGroup.add(jet);

    this.weaponRig.add(this.muzzleFlashGroup);

    // Dynamic point light illuminating weapon, hands, and nearby walls on each shot
    this.muzzleLight = new THREE.PointLight(0xffaa44, 0, 9.5, 1.8);
    this.muzzleLight.position.set(0, 0.02, -0.52);
    this.weaponRig.add(this.muzzleLight);
  }

  public toggleFireMode(synth: SynthEngine): void {
    this.fireMode = this.fireMode === 'AUTO' ? 'SEMI' : 'AUTO';
    this.selectorMesh.rotation.x = this.fireMode === 'AUTO' ? 0 : 0.65;
    synth.playWeaponHandling('fire_mode');
  }

  public startReload(synth: SynthEngine): boolean {
    if (this.isReloading || this.magAmmo >= this.magCapacity || this.reserveAmmo <= 0) {
      return false;
    }
    this.isReloading = true;
    this.isInspecting = false;
    this.isEmptyReload = this.magAmmo === 0;
    this.reloadTimer = 0;
    this.reloadDuration = this.isEmptyReload ? 2.45 : 2.02;
    this.magOutPlayed = false;
    this.magInPlayed = false;
    this.boltPlayed = false;
    return true;
  }

  public startInspect(synth: SynthEngine): void {
    if (this.isReloading || this.isInspecting) return;
    this.isInspecting = true;
    this.inspectTimer = 0;
    synth.playWeaponHandling('inspect');
  }

  public canFire(): boolean {
    return !this.isReloading && this.fireCooldown <= 0 && this.magAmmo > 0;
  }

  public triggerShot(): {
    recoilPitch: number;
    recoilYaw: number;
    spread: number;
  } {
    this.magAmmo = Math.max(0, this.magAmmo - 1);
    this.fireCooldown = this.fireInterval;
    this.consecutiveShots++;
    this.barrelHeat = Math.min(1.0, this.barrelHeat + 0.085);
    this.isInspecting = false;

    // Activate randomized muzzle flash lobes & light
    this.muzzleFlashTimer = 0.042;
    this.muzzleFlashGroup.visible = true;
    this.muzzleFlashGroup.rotation.z = this.rng.range(0, Math.PI * 2);
    const flashScale = this.rng.range(0.82, 1.28);
    this.muzzleFlashGroup.scale.set(flashScale, flashScale, this.rng.range(0.85, 1.35));
    this.muzzleLight.intensity = 5.5;

    // Bolt carrier blowback impulse
    this.boltCarrierMesh.position.z = 0.018;

    // Viewmodel spring impulse (rearward kick + upward muzzle climb + subtle roll variance)
    const adsDamp = THREE.MathUtils.lerp(1.0, 0.58, this.adsProgress);
    this.posSpring.impulse(
      this.rng.signed() * 0.14 * adsDamp,
      0.18 * adsDamp,
      1.35 * adsDamp
    );
    this.rotSpring.impulse(
      1.95 * adsDamp,
      this.rng.signed() * 0.65 * adsDamp,
      this.rng.signed() * 1.15 * adsDamp
    );

    // Deterministic recoil pattern with seeded micro-variance
    const shotIdx = Math.min(30, this.consecutiveShots);
    const climbBase = 0.011 + Math.min(0.012, shotIdx * 0.0008);
    const swayDir = Math.sin(shotIdx * 0.55) * 0.0055;
    const recoilPitch = climbBase * adsDamp * this.rng.range(0.88, 1.14);
    const recoilYaw = (swayDir + this.rng.signed() * 0.0038) * adsDamp;

    this.recoilCameraKick.x += recoilPitch;
    this.recoilCameraKick.y += recoilYaw;
    this.fovKick = Math.min(2.2, this.fovKick + 0.65);

    return {
      recoilPitch,
      recoilYaw,
      spread: this.currentSpread
    };
  }

  public getWorldMuzzlePosition(camera: THREE.Camera, out: THREE.Vector3): THREE.Vector3 {
    this._worldMuzzle.set(0, 0.012, -0.495);
    this.weaponRig.localToWorld(this._worldMuzzle);
    return out.copy(this._worldMuzzle);
  }

  public getWorldEjectionPortPosition(camera: THREE.Camera, out: THREE.Vector3): THREE.Vector3 {
    this._worldEject.set(0.022, 0.014, -0.025);
    this.weaponRig.localToWorld(this._worldEject);
    return out.copy(this._worldEject);
  }

  public update(
    dt: number,
    timeSec: number,
    wantAds: boolean,
    isFiringHeld: boolean,
    moveSpeed: number,
    isSprinting: boolean,
    isCrouching: boolean,
    isGrounded: boolean,
    lookYawDelta: number,
    lookPitchDelta: number,
    wallDist: number,
    synth: SynthEngine
  ): void {
    if (this.fireCooldown > 0) {
      this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    }
    if (!isFiringHeld && this.fireCooldown <= 0) {
      this.consecutiveShots = Math.max(0, this.consecutiveShots - dt * 14);
    }

    // Cool barrel heat over time
    this.barrelHeat = Math.max(0, this.barrelHeat - dt * 0.22);
    this.opticUniforms.uHeat.value = this.barrelHeat;

    // Muzzle flash decay
    if (this.muzzleFlashTimer > 0) {
      this.muzzleFlashTimer -= dt;
      this.muzzleLight.intensity = Math.max(0, (this.muzzleFlashTimer / 0.042) * 5.5);
      if (this.muzzleFlashTimer <= 0) {
        this.muzzleFlashGroup.visible = false;
        this.muzzleLight.intensity = 0;
      }
    }

    // Bolt carrier return spring
    const targetBoltZ = this.magAmmo === 0 && !this.isReloading ? 0.015 : -0.025;
    this.boltCarrierMesh.position.z += (targetBoltZ - this.boltCarrierMesh.position.z) * Math.min(1, dt * 38);

    // FOV kick decay
    this.fovKick *= Math.exp(-16 * dt);

    // ADS transition
    const adsTarget = wantAds && !this.isReloading && !isSprinting ? 1.0 : 0.0;
    this.adsProgress += (adsTarget - this.adsProgress) * Math.min(1, dt * 16.5);
    this.opticUniforms.uAdsAmount.value = this.adsProgress;

    // Dynamic spread calculation
    let baseSpread = THREE.MathUtils.lerp(0.014, 0.0012, this.adsProgress);
    if (isCrouching) baseSpread *= 0.68;
    if (!isGrounded) baseSpread += 0.032;
    baseSpread += (moveSpeed / 6.5) * THREE.MathUtils.lerp(0.018, 0.004, this.adsProgress);
    baseSpread += Math.min(0.024, this.consecutiveShots * 0.0016);
    this.currentSpread = baseSpread;

    // Wall proximity weapon tuck
    const targetWallProx = wallDist < 0.85 ? (0.85 - wallDist) / 0.85 : 0;
    this.wallProximity += (targetWallProx - this.wallProximity) * Math.min(1, dt * 14);

    // Base pose interpolation (Hip <-> ADS)
    const basePos = this._basePos.lerpVectors(this.hipOffset, this.adsOffset, this.adsProgress);
    const baseRot = this._baseRot.set(0, 0, 0);

    // 1. Idle breathing layer
    const breathScale = THREE.MathUtils.lerp(1.0, 0.22, this.adsProgress);
    basePos.x += Math.sin(timeSec * 1.45) * 0.0018 * breathScale;
    basePos.y += Math.cos(timeSec * 2.9) * 0.0022 * breathScale;
    baseRot.z += Math.sin(timeSec * 1.45) * 0.006 * breathScale;

    // 2. Footstep-synchronized Walk & Sprint Bob
    if (isGrounded && moveSpeed > 0.25) {
      const bobFreq = isSprinting ? 11.2 : 8.2;
      const bobAmp = Math.min(1, moveSpeed / 5.5) * THREE.MathUtils.lerp(1.0, 0.18, this.adsProgress);
      basePos.x += Math.cos(timeSec * bobFreq) * 0.0085 * bobAmp;
      basePos.y += Math.abs(Math.sin(timeSec * bobFreq)) * -0.010 * bobAmp;
      baseRot.z += Math.cos(timeSec * bobFreq) * 0.024 * bobAmp;
      baseRot.x += Math.sin(timeSec * bobFreq * 2) * 0.014 * bobAmp;
    }

    // 3. Sprint tactical low-ready pose
    if (isSprinting && this.adsProgress < 0.2 && !this.isReloading) {
      basePos.x -= 0.038;
      basePos.y -= 0.032;
      basePos.z += 0.025;
      baseRot.x -= 0.22;
      baseRot.y += 0.42;
      baseRot.z -= 0.18;
    }

    // 4. Crouch cant
    if (isCrouching && this.adsProgress < 0.5) {
      baseRot.z += 0.08 * (1 - this.adsProgress);
      basePos.y -= 0.008 * (1 - this.adsProgress);
    }

    // 5. Wall proximity pull-back
    if (this.wallProximity > 0.01) {
      basePos.z += this.wallProximity * 0.095;
      basePos.y -= this.wallProximity * 0.03;
      baseRot.x += this.wallProximity * 0.35;
    }

    // 6. Inertial look lag
    const swayMult = THREE.MathUtils.lerp(1.0, 0.3, this.adsProgress);
    this.posSpring.impulse(
      THREE.MathUtils.clamp(lookYawDelta * 0.45 * swayMult, -0.04, 0.04),
      THREE.MathUtils.clamp(-lookPitchDelta * 0.45 * swayMult, -0.04, 0.04),
      0
    );
    this.rotSpring.impulse(
      THREE.MathUtils.clamp(lookPitchDelta * 1.4 * swayMult, -0.15, 0.15),
      THREE.MathUtils.clamp(lookYawDelta * 1.6 * swayMult, -0.15, 0.15),
      THREE.MathUtils.clamp(-lookYawDelta * 1.9 * swayMult, -0.18, 0.18)
    );

    // 7. Reload Choreography (Magazine release, extraction, insertion, bolt release)
    this.magazineGroup.position.set(0, -0.042, -0.040);
    this.magazineGroup.rotation.set(0, 0, 0);
    this.leftHandGroup.position.set(0, 0, -0.205);
    this.leftHandGroup.rotation.set(0, 0, 0);
    this.chargingHandleMesh.position.z = 0;

    if (this.isReloading) {
      this.reloadTimer += dt;
      const p = Math.min(1, this.reloadTimer / this.reloadDuration);

      if (p > 0.12 && !this.magOutPlayed) {
        this.magOutPlayed = true;
        synth.playWeaponHandling('mag_out');
      }
      if (p > 0.56 && !this.magInPlayed) {
        this.magInPlayed = true;
        synth.playWeaponHandling('mag_in');
      }
      if (this.isEmptyReload && p > 0.80 && !this.boltPlayed) {
        this.boltPlayed = true;
        synth.playWeaponHandling('bolt_release');
      }

      // Tilt rifle right so magazine well is visible
      const tiltEnv = Math.sin(Math.min(1, p * 1.15) * Math.PI);
      basePos.x += 0.024 * tiltEnv;
      basePos.y -= 0.028 * tiltEnv;
      baseRot.z -= 0.36 * tiltEnv;
      baseRot.x += 0.18 * tiltEnv;
      baseRot.y += 0.16 * tiltEnv;

      if (p < 0.35) {
        // Left hand moves to magwell and pulls magazine down
        const sub = Math.max(0, (p - 0.10) / 0.25);
        const drop = sub * sub * 0.22;
        this.magazineGroup.position.y = -0.042 - drop;
        this.magazineGroup.position.z = -0.040 + sub * 0.03;
        this.leftHandGroup.position.set(0.0, -0.055 - drop, -0.045);
      } else if (p < 0.68) {
        // Fresh magazine brought up and seated into magwell
        const sub = 1 - Math.min(1, (p - 0.35) / 0.25);
        const drop = sub * sub * 0.22;
        this.magazineGroup.position.y = -0.042 - drop;
        this.leftHandGroup.position.set(0.0, -0.055 - drop, -0.045);
        if (Math.abs(p - 0.58) < 0.03) {
          this.posSpring.impulse(0, 0.12, -0.08);
        }
      } else if (this.isEmptyReload && p < 0.90) {
        // Left hand racks charging handle / hits bolt catch
        const sub = Math.sin(((p - 0.68) / 0.22) * Math.PI);
        this.leftHandGroup.position.set(-0.02, 0.025 * sub, -0.205 + 0.26 * sub);
        this.chargingHandleMesh.position.z = 0.042 * sub;
      }

      if (this.reloadTimer >= this.reloadDuration) {
        const needed = this.magCapacity - this.magAmmo;
        const loaded = Math.min(needed, this.reserveAmmo);
        this.magAmmo += loaded;
        this.reserveAmmo -= loaded;
        this.isReloading = false;
      }
    } else if (this.isInspecting) {
      this.inspectTimer += dt;
      const p = Math.min(1, this.inspectTimer / this.inspectDuration);
      if (p < 0.48) {
        const s = Math.sin((p / 0.48) * Math.PI);
        basePos.x -= 0.042 * s;
        basePos.y += 0.018 * s;
        baseRot.z += 0.52 * s;
        baseRot.y += 0.38 * s;
      } else {
        const s = Math.sin(((p - 0.48) / 0.52) * Math.PI);
        basePos.x += 0.035 * s;
        baseRot.z -= 0.46 * s;
        baseRot.y -= 0.32 * s;
        baseRot.x += 0.18 * s;
      }
      if (this.inspectTimer >= this.inspectDuration) {
        this.isInspecting = false;
      }
    }

    this.posSpring.target.copy(basePos);
    this.rotSpring.target.copy(baseRot);
    this.posSpring.step(dt);
    this.rotSpring.step(dt);

    this.weaponRig.position.copy(this.posSpring.value);
    this.weaponRig.rotation.set(
      this.rotSpring.value.x,
      this.rotSpring.value.y,
      this.rotSpring.value.z,
      'YXZ'
    );

    // Feed subtle sway offset to collimated reticle
    this.opticUniforms.uSwayOffset.value.set(
      (this.rotSpring.value.y - baseRot.y) * 1.8,
      (this.rotSpring.value.x - baseRot.x) * 1.8
    );
  }
}
