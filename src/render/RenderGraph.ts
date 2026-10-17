import * as THREE from 'three';
import { SkyAtmosphere } from './SkyAtmosphere';
import { ShadowSystem } from './ShadowSystem';
import { Prepass } from './Prepass';
import { GTAO } from './GTAO';
import { TAA } from './TAA';
import { MotionBlur } from './MotionBlur';
import { Bloom } from './Bloom';
import { Exposure } from './Exposure';
import { Composite } from './Composite';
import { WorldShaderUniforms } from '../world/MaterialLibrary';
import { Settings } from '../core/Settings';
import { DebugViewMode } from '../core/Input';

/**
 * Custom WebGL2 Multi-Pass Render Graph Orchestrator
 * Executes the 10-stage rendering pipeline:
 * 1. Stabilized 4-cascade sun CSM depth array pass
 * 2. MRT Depth + Normal + Velocity + Reactive Mask prepass
 * 3. Ground-Truth Ambient Occlusion (GTAO) + Bilateral Denoise
 * 4. Opaque + Sky + Volumetric Cloud HDR forward pass
 * 5. First-Person Viewmodel HDR pass (dedicated 58 deg FOV + depth clear)
 * 6. Temporal Anti-Aliasing (TAA) resolve with YCoCg variance clipping
 * 7. Tile-Dilated Velocity Motion Blur
 * 8. Karis-Average HDR Bloom Pyramid
 * 9. GPU Log-Luminance Auto-Exposure Metering & Adaptation
 * 10. Final 33^3 3D LUT + AgX Composite + CAS + Debug Buffer Views
 */
export class RenderGraph {
  public renderer: THREE.WebGLRenderer;
  public sky: SkyAtmosphere;
  public shadows: ShadowSystem;
  public prepass: Prepass;
  public gtao: GTAO;
  public taa: TAA;
  public motionBlur: MotionBlur;
  public bloom: Bloom;
  public exposure: Exposure;
  public composite: Composite;

  public hdrSceneTarget!: THREE.WebGLRenderTarget;

  private cssWidth = window.innerWidth;
  private cssHeight = window.innerHeight;
  private internalWidth = window.innerWidth;
  private internalHeight = window.innerHeight;
  private currentScale = 1.0;
  private lastScaleChangeTime = 0;
  private whiteAoTexture: THREE.DataTexture;

  // Dedicated scene & camera for rendering the weapon viewmodel at constant 58 deg FOV
  public viewmodelScene = new THREE.Scene();
  public viewmodelCamera = new THREE.PerspectiveCamera(58, 16 / 9, 0.02, 5.0);
  private vmSunLight: THREE.DirectionalLight;
  private vmHemiLight: THREE.HemisphereLight;

  constructor(
    canvas: HTMLCanvasElement,
    scene: THREE.Scene,
    private settings: Settings
  ) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      powerPreference: 'high-performance',
      antialias: false,
      stencil: false,
      depth: true,
      // Keeping the back buffer costs a full-frame copy each present; only automated captures need it.
      preserveDrawingBuffer: new URLSearchParams(window.location.search).get('manual') === '1'
    });
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.autoClear = false;
    this.renderer.info.autoReset = false;

    const quality = this.settings.getQualityParams();
    this.currentScale = this.settings.data.renderScale;

    this.cssWidth = window.innerWidth;
    this.cssHeight = window.innerHeight;
    const dpr = this.getEffectiveDpr();
    this.internalWidth = Math.max(320, Math.floor(this.cssWidth * dpr * this.currentScale));
    this.internalHeight = Math.max(180, Math.floor(this.cssHeight * dpr * this.currentScale));

    this.renderer.setPixelRatio(1);
    this.renderer.setSize(this.cssWidth, this.cssHeight, false);

    this.sky = new SkyAtmosphere(scene, quality.cloudSteps);
    this.sky.bakeProceduralEnvironment(this.renderer, scene);

    // Sync viewmodel lighting & procedural sky PMREM environment with world scene
    this.viewmodelScene.environment = scene.environment;
    this.viewmodelScene.environmentIntensity = 0.82;
    this.vmSunLight = new THREE.DirectionalLight(0xfff4df, 3.65);
    this.vmSunLight.position.copy(this.sky.sunDirection).multiplyScalar(120);
    this.viewmodelScene.add(this.vmSunLight);
    this.vmHemiLight = new THREE.HemisphereLight(0x9bc4f0, 0xb89b74, 1.35);
    this.viewmodelScene.add(this.vmHemiLight);
    this.viewmodelScene.add(this.viewmodelCamera);

    this.shadows = new ShadowSystem(quality.shadowMapSize);
    this.shadows.farCascadeStride = this.settings.data.quality === 'low' ? 4 : 2;

    this.whiteAoTexture = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1);
    this.whiteAoTexture.needsUpdate = true;
    this.prepass = new Prepass(this.internalWidth, this.internalHeight);
    this.gtao = new GTAO(this.internalWidth, this.internalHeight);
    this.taa = new TAA(this.internalWidth, this.internalHeight);
    this.motionBlur = new MotionBlur(this.internalWidth, this.internalHeight);
    this.bloom = new Bloom(this.internalWidth, this.internalHeight);
    this.exposure = new Exposure();
    this.composite = new Composite(this.internalWidth, this.internalHeight);

    this.initHdrSceneTarget(this.internalWidth, this.internalHeight);
  }

  /**
   * Phones report DPR 3+, and rendering this pipeline at native retina resolution is what made
   * mobile lag. Above ~1.5x the extra pixels are barely visible, so cap there (lower on phones).
   */
  private getEffectiveDpr(): number {
    const cap = this.settings.isMobile ? 1.25 : 1.5;
    return Math.min(window.devicePixelRatio || 1, cap);
  }

  private initHdrSceneTarget(width: number, height: number): void {
    if (this.hdrSceneTarget) {
      this.hdrSceneTarget.dispose();
    }
    this.hdrSceneTarget = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: true,
      stencilBuffer: false
    });
  }

  public resize(cssWidth: number, cssHeight: number): void {
    this.cssWidth = Math.max(1, cssWidth);
    this.cssHeight = Math.max(1, cssHeight);
    this.renderer.setSize(this.cssWidth, this.cssHeight, false);
    this.applyInternalScale(this.settings.data.renderScale);
  }

  public applyInternalScale(scale: number): void {
    this.currentScale = THREE.MathUtils.clamp(scale, 0.5, 1.25);
    const dpr = this.getEffectiveDpr();
    const newW = Math.max(320, Math.floor(this.cssWidth * dpr * this.currentScale));
    const newH = Math.max(180, Math.floor(this.cssHeight * dpr * this.currentScale));

    if (newW === this.internalWidth && newH === this.internalHeight) return;

    this.internalWidth = newW;
    this.internalHeight = newH;
    this.initHdrSceneTarget(newW, newH);
    this.prepass.resize(newW, newH);
    this.gtao.resize(newW, newH);
    this.taa.resize(newW, newH);
    this.motionBlur.resize(newW, newH);
    this.bloom.resize(newW, newH);
    this.composite.resize(newW, newH);
  }

  public evaluateDynamicScale(avgFrameMs: number, nowSec: number): void {
    if (!this.settings.data.dynamicRenderScale) return;
    if (nowSec - this.lastScaleChangeTime < 1.6) return;
    const userTargetScale = this.settings.data.renderScale;

    // Aim for a steady 60 FPS: shed resolution under ~52 FPS, recover above ~75 FPS
    const minScale = Math.max(0.5, userTargetScale - 0.35);
    if (avgFrameMs > 19.0 && this.currentScale > minScale + 0.001) {
      this.applyInternalScale(Math.max(minScale, this.currentScale - 0.1));
      this.lastScaleChangeTime = nowSec;
    } else if (avgFrameMs < 13.3 && this.currentScale < userTargetScale) {
      this.applyInternalScale(Math.min(userTargetScale, this.currentScale + 0.1));
      this.lastScaleChangeTime = nowSec;
    }
  }

  public renderFrame(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    viewmodelRoot: THREE.Object3D,
    sharedUniforms: WorldShaderUniforms,
    timeSec: number,
    dt: number,
    lowHealthFactor: number,
    damageFlashFactor: number,
    debugView: DebugViewMode
  ): void {
    const quality = this.settings.getQualityParams();

    // Update sky and volumetric cumulus clouds
    this.sky.update(timeSec, camera.position, quality.cloudSteps);

    // 1. Stabilized 4-cascade directional sun shadow pass
    this.shadows.render(
      this.renderer,
      scene,
      camera,
      this.sky.sunDirection,
      sharedUniforms,
      this.sky.skyMesh
    );

    // Sync viewmodel camera to player world pose before prepass & forward pass
    const renderVm = viewmodelRoot.visible;
    this.viewmodelCamera.aspect = camera.aspect;
    this.viewmodelCamera.position.copy(camera.position);
    this.viewmodelCamera.quaternion.copy(camera.quaternion);
    this.viewmodelCamera.updateMatrixWorld(true);
    this.viewmodelCamera.updateProjectionMatrix();

    // 2. MRT Depth + Normal + Velocity + Reactive Mask prepass
    this.taa.clearCameraJitter(camera);
    camera.updateProjectionMatrix();
    this.prepass.render(
      this.renderer,
      scene,
      camera,
      this.sky.skyMesh,
      this.viewmodelScene,
      this.viewmodelCamera,
      renderVm
    );

    // 3. GTAO + Bilateral spatial filter
    const aoTexture: THREE.Texture =
      this.settings.data.gtao || debugView === 'ao'
        ? this.gtao.render(this.renderer, this.prepass.normalDepthTexture, camera)
        : this.whiteAoTexture;

    // 4. Forward HDR Opaque + Sky + Volumetric Clouds + Transparent Effects pass
    this.renderer.info.reset();
    this.taa.applyCameraJitter(
      camera,
      this.internalWidth,
      this.internalHeight,
      this.settings.data.taa
    );
    camera.updateProjectionMatrix();

    this.renderer.setRenderTarget(this.hdrSceneTarget);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.clear(true, true, false);
    this.renderer.render(scene, camera);

    this.taa.clearCameraJitter(camera);
    camera.updateProjectionMatrix();

    // 5. Dedicated First-Person Viewmodel pass (58 deg FOV + depth clear so rifle never clips walls)
    if (renderVm) {
      this.taa.applyCameraJitter(
        this.viewmodelCamera,
        this.internalWidth,
        this.internalHeight,
        this.settings.data.taa
      );
      this.viewmodelCamera.updateProjectionMatrix();
      this.renderer.clearDepth();
      this.renderer.render(this.viewmodelScene, this.viewmodelCamera);
      this.taa.clearCameraJitter(this.viewmodelCamera);
      this.viewmodelCamera.updateProjectionMatrix();
    }

    // 6. Temporal Anti-Aliasing (TAA) resolve
    let activeHdrColor: THREE.Texture = this.hdrSceneTarget.texture;
    if (this.settings.data.taa) {
      activeHdrColor = this.taa.render(
        this.renderer,
        activeHdrColor,
        this.prepass.velocityReactiveTexture
      );
    }

    // 7. Tile-Dilated Velocity Motion Blur
    activeHdrColor = this.motionBlur.render(
      this.renderer,
      activeHdrColor,
      this.prepass.velocityReactiveTexture,
      this.prepass.normalDepthTexture,
      this.settings.data.motionBlur
    );

    // 8. Karis-Average HDR Bloom Pyramid
    const bloomTex = this.bloom.render(this.renderer, activeHdrColor);

    // 9. GPU Log-Luminance Auto-Exposure Metering & Adaptation
    const exposureTex = this.exposure.render(this.renderer, activeHdrColor, dt);

    // 10. Final 33^3 3D LUT + AgX Composite to default backbuffer
    this.composite.render(
      this.renderer,
      activeHdrColor,
      bloomTex,
      aoTexture,
      exposureTex,
      this.prepass.normalDepthTexture,
      this.prepass.velocityReactiveTexture,
      timeSec,
      lowHealthFactor,
      damageFlashFactor,
      debugView
    );
  }

  public getRenderCallStats(): { calls: number; triangles: number; internalScale: number } {
    return {
      calls: this.renderer.info.render.calls,
      triangles: this.renderer.info.render.triangles,
      internalScale: this.currentScale
    };
  }
}
