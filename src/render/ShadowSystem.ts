import * as THREE from 'three';
import { WorldShaderUniforms } from '../world/MaterialLibrary';

/**
 * 4-Cascade Texel-Snapped Stabilized Directional Sun Shadow System
 * Renders into 4 RGBA-packed depth targets to eliminate shadow shimmer across all WebGL2 backends.
 */
export class ShadowSystem {
  public readonly cascadeCount = 4;
  /** Far cascades (2, 3) re-render every N frames; near cascades always update. */
  public farCascadeStride = 2;
  public readonly splits = [16, 38, 78, 160];
  public readonly radii = [22, 44, 78, 135];
  public mapSize = 1536;

  public cascadeTargets: THREE.WebGLRenderTarget[] = [];
  public orthoCameras: THREE.OrthographicCamera[] = [];
  public lightViewProjMatrices: THREE.Matrix4[] = [];

  private depthMaterial: THREE.MeshDepthMaterial;
  private _forward = new THREE.Vector3();
  private _center = new THREE.Vector3();
  private _lightSpaceCenter = new THREE.Vector3();
  private _lightView = new THREE.Matrix4();
  private _invLightView = new THREE.Matrix4();
  private _up = new THREE.Vector3(0, 1, 0);
  private frameCounter = 0;

  constructor(mapSize = 1536) {
    this.mapSize = mapSize;
    this.depthMaterial = new THREE.MeshDepthMaterial({
      depthPacking: THREE.RGBADepthPacking,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < this.cascadeCount; i++) {
      const r = this.radii[i];
      const cam = new THREE.OrthographicCamera(-r, r, r, -r, 1, 240);
      this.orthoCameras.push(cam);
      this.lightViewProjMatrices.push(new THREE.Matrix4());
    }

    this.initTargets(mapSize);
  }

  public initTargets(size: number): void {
    for (const rt of this.cascadeTargets) {
      rt.dispose();
    }
    this.cascadeTargets = [];
    this.mapSize = size;

    for (let i = 0; i < this.cascadeCount; i++) {
      const rt = new THREE.WebGLRenderTarget(size, size, {
        format: THREE.RGBAFormat,
        type: THREE.UnsignedByteType,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        depthBuffer: true,
        stencilBuffer: false
      });
      rt.texture.wrapS = THREE.ClampToEdgeWrapping;
      rt.texture.wrapT = THREE.ClampToEdgeWrapping;
      this.cascadeTargets.push(rt);
    }
  }

  public render(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    mainCamera: THREE.PerspectiveCamera,
    sunDir: THREE.Vector3,
    sharedUniforms: WorldShaderUniforms,
    skyMesh: THREE.Object3D
  ): void {
    this.frameCounter++;
    mainCamera.getWorldDirection(this._forward);

    // Reference light basis for texel snapping
    this._lightView.lookAt(sunDir, new THREE.Vector3(0, 0, 0), this._up);
    this._invLightView.copy(this._lightView).invert();

    const prevOverride = scene.overrideMaterial;
    const prevSkyVis = skyMesh.visible;
    const hiddenPoints: THREE.Object3D[] = [];
    for (const child of scene.children) {
      if ((child as THREE.Points).isPoints && child.visible) {
        child.visible = false;
        hiddenPoints.push(child);
      }
    }

    skyMesh.visible = false;
    scene.overrideMaterial = this.depthMaterial;

    for (let c = 0; c < this.cascadeCount; c++) {
      // Update far cascades on alternating frames to save GPU budget while keeping near cascades at full rate
      if (c >= 2 && this.frameCounter > 2 && (this.frameCounter + c) % this.farCascadeStride !== 0) {
        continue;
      }

      const r = this.radii[c];
      const forwardOffset = c === 0 ? 7 : c === 1 ? 18 : c === 2 ? 36 : 52;
      this._center
        .copy(mainCamera.position)
        .addScaledVector(this._forward, forwardOffset);
      this._center.y = 0;

      // Snap cascade center in light-space texel increments so shadow edges never crawl!
      this._lightSpaceCenter.copy(this._center).applyMatrix4(this._invLightView);
      const worldUnitsPerTexel = (r * 2) / this.mapSize;
      this._lightSpaceCenter.x =
        Math.floor(this._lightSpaceCenter.x / worldUnitsPerTexel) * worldUnitsPerTexel;
      this._lightSpaceCenter.y =
        Math.floor(this._lightSpaceCenter.y / worldUnitsPerTexel) * worldUnitsPerTexel;
      this._center.copy(this._lightSpaceCenter).applyMatrix4(this._lightView);

      const cam = this.orthoCameras[c];
      cam.left = -r;
      cam.right = r;
      cam.top = r;
      cam.bottom = -r;
      cam.position.copy(this._center).addScaledVector(sunDir, 110);
      cam.lookAt(this._center);
      cam.updateMatrixWorld(true);
      cam.updateProjectionMatrix();

      this.lightViewProjMatrices[c].multiplyMatrices(
        cam.projectionMatrix,
        cam.matrixWorldInverse
      );

      renderer.setRenderTarget(this.cascadeTargets[c]);
      renderer.setClearColor(0xffffff, 1.0);
      renderer.clear(true, true, false);
      renderer.render(scene, cam);
    }

    scene.overrideMaterial = prevOverride;
    skyMesh.visible = prevSkyVis;
    for (const pt of hiddenPoints) {
      pt.visible = true;
    }

    // Bind stabilized matrices and depth textures to world shaders
    sharedUniforms.uSunDir.value.copy(sunDir);
    sharedUniforms.uCsmMatrix0.value.copy(this.lightViewProjMatrices[0]);
    sharedUniforms.uCsmMatrix1.value.copy(this.lightViewProjMatrices[1]);
    sharedUniforms.uCsmMatrix2.value.copy(this.lightViewProjMatrices[2]);
    sharedUniforms.uCsmMatrix3.value.copy(this.lightViewProjMatrices[3]);
    sharedUniforms.uCsmSplits.value.set(
      this.splits[0],
      this.splits[1],
      this.splits[2],
      this.splits[3]
    );
    sharedUniforms.uCsmDepthTex0.value = this.cascadeTargets[0].texture;
    sharedUniforms.uCsmDepthTex1.value = this.cascadeTargets[1].texture;
    sharedUniforms.uCsmDepthTex2.value = this.cascadeTargets[2].texture;
    sharedUniforms.uCsmDepthTex3.value = this.cascadeTargets[3].texture;
    sharedUniforms.uCsmEnabled.value = 1.0;
  }

  public dispose(): void {
    for (const rt of this.cascadeTargets) {
      rt.dispose();
    }
    this.depthMaterial.dispose();
  }
}
