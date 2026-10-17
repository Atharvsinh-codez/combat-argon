import * as THREE from 'three';

/**
 * WebGL2 MRT (Multiple Render Targets) Prepass
 * Target 0 (RGBA16F): View-space unit normal (XYZ) + Linear Depth (W)
 * Target 1 (RGBA16F): Screen-space 2D Velocity (XY) + Reactive Mask (Z) + Roughness/Material Class (W)
 */
export class Prepass {
  public target!: THREE.WebGLRenderTarget;
  private mrtMaterial: THREE.ShaderMaterial;
  private prevViewProjMatrix = new THREE.Matrix4();
  private currViewProjMatrix = new THREE.Matrix4();
  private _vmViewProj = new THREE.Matrix4();
  private initializedHistory = false;

  constructor(width: number, height: number) {
    this.initTarget(width, height);

    this.mrtMaterial = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      uniforms: {
        uPrevViewProj: { value: new THREE.Matrix4() },
        uCurrViewProj: { value: new THREE.Matrix4() },
        uReactiveFlag: { value: 0.0 }
      },
      vertexShader: /* glsl */ `
        uniform mat4 uPrevViewProj;
        uniform mat4 uCurrViewProj;

        out vec3 vViewNormal;
        out float vLinearDepth;
        out vec4 vCurrClip;
        out vec4 vPrevClip;

        void main() {
          vec4 localPos = vec4(position, 1.0);
          mat3 normMat = normalMatrix;
          #ifdef USE_INSTANCING
            localPos = instanceMatrix * localPos;
            normMat = mat3(viewMatrix * modelMatrix * instanceMatrix);
          #endif

          vec4 worldPos = modelMatrix * localPos;
          vec4 mvPos = viewMatrix * worldPos;
          vec3 rawNorm = normMat * normal;
          float nLen = length(rawNorm);
          vViewNormal = nLen > 0.0001 ? (rawNorm / nLen) : vec3(0.0, 0.0, 1.0);
          vLinearDepth = -mvPos.z;

          vCurrClip = uCurrViewProj * worldPos;
          vPrevClip = uPrevViewProj * worldPos;
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform float uReactiveFlag;

        in vec3 vViewNormal;
        in float vLinearDepth;
        in vec4 vCurrClip;
        in vec4 vPrevClip;

        layout(location = 0) out vec4 outNormalDepth;
        layout(location = 1) out vec4 outVelocityReactive;

        void main() {
          float nLen = length(vViewNormal);
          vec3 n = nLen > 0.0001 ? (vViewNormal / nLen) : vec3(0.0, 0.0, 1.0);
          vec2 currNDC = (vCurrClip.xy / max(0.0001, vCurrClip.w)) * 0.5 + 0.5;
          vec2 prevNDC = (vPrevClip.xy / max(0.0001, vPrevClip.w)) * 0.5 + 0.5;
          vec2 velocity = currNDC - prevNDC;

          outNormalDepth = vec4(n, vLinearDepth);
          outVelocityReactive = vec4(velocity, uReactiveFlag, 0.75);
        }
      `
    });
  }

  public initTarget(width: number, height: number): void {
    if (this.target) {
      this.target.dispose();
    }

    const depthTexture = new THREE.DepthTexture(width, height);
    depthTexture.format = THREE.DepthFormat;
    depthTexture.type = THREE.UnsignedIntType;

    this.target = new THREE.WebGLRenderTarget(width, height, {
      count: 2,
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      depthBuffer: true,
      depthTexture
    });
    this.target.textures[0].name = 'gNormalDepth';
    this.target.textures[1].name = 'gVelocityReactive';
  }

  public resize(width: number, height: number): void {
    this.initializedHistory = false;
    this.initTarget(width, height);
  }

  public resetHistory(): void {
    this.initializedHistory = false;
  }

  public get normalDepthTexture(): THREE.Texture {
    return this.target.textures[0];
  }

  public get velocityReactiveTexture(): THREE.Texture {
    return this.target.textures[1];
  }

  public get depthTexture(): THREE.DepthTexture {
    return this.target.depthTexture!;
  }

  public render(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    skyMesh: THREE.Object3D,
    viewmodelScene: THREE.Scene,
    viewmodelCamera: THREE.PerspectiveCamera,
    renderViewmodel: boolean
  ): void {
    this.currViewProjMatrix.multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    );
    if (!this.initializedHistory) {
      this.prevViewProjMatrix.copy(this.currViewProjMatrix);
      this.initializedHistory = true;
    }

    this.mrtMaterial.uniforms.uCurrViewProj.value.copy(this.currViewProjMatrix);
    this.mrtMaterial.uniforms.uPrevViewProj.value.copy(this.prevViewProjMatrix);

    const prevOverride = scene.overrideMaterial;
    const prevSkyVis = skyMesh.visible;

    // Hide non-mesh point clouds during MRT prepass
    const hiddenPoints: THREE.Object3D[] = [];
    for (const child of scene.children) {
      if ((child as THREE.Points).isPoints && child.visible) {
        child.visible = false;
        hiddenPoints.push(child);
      }
    }

    skyMesh.visible = false;
    scene.overrideMaterial = this.mrtMaterial;
    this.mrtMaterial.uniforms.uReactiveFlag.value = 0.0;

    renderer.setRenderTarget(this.target);
    renderer.setClearColor(0x000000, 0);
    renderer.clear(true, true, false);
    renderer.render(scene, camera);

    scene.overrideMaterial = prevOverride;
    skyMesh.visible = prevSkyVis;
    for (const pt of hiddenPoints) {
      pt.visible = true;
    }

    // Render viewmodel into MRT with reactive flag = 0.85 so TAA & AO protect weapon silhouettes
    if (renderViewmodel) {
      const vmCurrVP = this._vmViewProj.multiplyMatrices(
        viewmodelCamera.projectionMatrix,
        viewmodelCamera.matrixWorldInverse
      );
      this.mrtMaterial.uniforms.uCurrViewProj.value.copy(vmCurrVP);
      this.mrtMaterial.uniforms.uPrevViewProj.value.copy(vmCurrVP);
      this.mrtMaterial.uniforms.uReactiveFlag.value = 0.85;

      viewmodelScene.overrideMaterial = this.mrtMaterial;
      renderer.clearDepth();
      renderer.render(viewmodelScene, viewmodelCamera);
      viewmodelScene.overrideMaterial = null;
    }

    this.prevViewProjMatrix.copy(this.currViewProjMatrix);
  }

  public dispose(): void {
    this.target.dispose();
    this.mrtMaterial.dispose();
  }
}
