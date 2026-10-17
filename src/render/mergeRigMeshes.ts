import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * Collapse the static leaf meshes of an articulated rig into one mesh per (parent, material).
 *
 * The viewmodel rifle and each bot are built from dozens of small boxes. Every one of them was a
 * separate draw call in the shadow, prepass and forward passes, which made draw submission the
 * biggest CPU cost of a frame. Meshes stay under their original parent, so pivot groups (limbs,
 * magazine, hands) still animate exactly as before. Anything listed in `keep` (meshes the game
 * moves or toggles on their own) is left untouched.
 */
export function mergeRigMeshes(root: THREE.Object3D, keep: Iterable<THREE.Object3D> = []): number {
  const keepSet = new Set(keep);
  const parents: THREE.Object3D[] = [];
  root.traverse((o) => {
    if (o.children.length > 0) parents.push(o);
  });

  let removed = 0;
  for (const parent of parents) {
    const buckets = new Map<string, THREE.Mesh[]>();
    for (const child of parent.children) {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh || (mesh as unknown as THREE.InstancedMesh).isInstancedMesh) continue;
      if ((mesh as unknown as THREE.SkinnedMesh).isSkinnedMesh) continue;
      if (keepSet.has(mesh) || mesh.children.length > 0 || !mesh.visible) continue;
      if (Array.isArray(mesh.material) || mesh.renderOrder !== 0) continue;
      const geo = mesh.geometry;
      const attrKey = Object.keys(geo.attributes).sort().join(',');
      const key = [
        mesh.material.uuid,
        geo.index ? 'i' : 'n',
        attrKey,
        mesh.castShadow ? 1 : 0,
        mesh.receiveShadow ? 1 : 0
      ].join('|');
      let list = buckets.get(key);
      if (!list) {
        list = [];
        buckets.set(key, list);
      }
      list.push(mesh);
    }

    for (const list of buckets.values()) {
      if (list.length < 2) continue;
      const geos: THREE.BufferGeometry[] = [];
      for (const mesh of list) {
        mesh.updateMatrix();
        const g = mesh.geometry.clone();
        g.applyMatrix4(mesh.matrix);
        // mergeGeometries requires identical group layouts; rig parts never use groups
        g.clearGroups();
        geos.push(g);
      }
      const merged = mergeGeometries(geos, false);
      for (const g of geos) g.dispose();
      if (!merged) continue;
      merged.computeBoundingSphere();
      merged.computeBoundingBox();

      const first = list[0];
      const out = new THREE.Mesh(merged, first.material);
      out.name = `${parent.name || parent.type}_merged`;
      out.castShadow = first.castShadow;
      out.receiveShadow = first.receiveShadow;
      out.frustumCulled = first.frustumCulled;
      for (const mesh of list) parent.remove(mesh);
      parent.add(out);
      removed += list.length - 1;
    }
  }
  return removed;
}
