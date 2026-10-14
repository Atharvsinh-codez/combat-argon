import * as THREE from 'three';

/**
 * Shared Fullscreen Triangle Helper for Custom WebGL2 Post-Processing Passes
 */
export class FullScreenPass {
  private static scene: THREE.Scene | null = null;
  private static camera: THREE.OrthographicCamera | null = null;
  private static mesh: THREE.Mesh | null = null;

  private static ensureInitialized(): void {
    if (this.scene) return;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Fullscreen oversized triangle avoids diagonal quad seam
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]);
    const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

    this.mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial());
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);
  }

  public static render(
    renderer: THREE.WebGLRenderer,
    material: THREE.Material,
    target: THREE.WebGLRenderTarget | null,
    clear = false
  ): void {
    this.ensureInitialized();
    this.mesh!.material = material;
    renderer.setRenderTarget(target);
    if (clear) {
      renderer.clear(true, true, false);
    }
    renderer.render(this.scene!, this.camera!);
  }
}
