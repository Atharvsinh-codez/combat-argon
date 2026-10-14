import * as THREE from 'three';
import { SeededRandom } from '../core/SeededRandom';
import { BVH, MaterialId } from '../physics/BVH';
import { RigidWorld } from '../physics/RigidWorld';
import { MaterialLibrary } from './MaterialLibrary';
import { PropSystem } from './PropSystem';

export interface MinimapBuildingFootprint {
  x: number;
  z: number;
  w: number;
  d: number;
  isInterior?: boolean;
}

export interface BenchmarkCameraView {
  name: string;
  position: THREE.Vector3;
  yaw: number;
  pitch: number;
}

/**
 * Procedural North African / Eastern Mediterranean Urban Market District ("CASBAH SECTOR 04")
 * Builds the central market boulevard, monumental triple archway & plaza, west covered souk lane,
 * east flanking alley with accessible 2nd-floor balcony, 4 enterable building interiors, and layered facade details.
 */
export class MapGenerator {
  public group = new THREE.Group();
  public footprints: MinimapBuildingFootprint[] = [];
  public alphaSpawns: THREE.Vector3[] = [];
  public bravoSpawns: THREE.Vector3[] = [];
  public benchmarkViews: Record<string, BenchmarkCameraView> = {};

  private rng: SeededRandom;
  private facadeMaterials = [
    'stucco_warm_beige',
    'stucco_sun_ochre',
    'stucco_chalk_white',
    'stucco_terracotta',
    'stucco_dusty_blue',
    'stucco_pale_peach',
    'stucco_weathered_gray'
  ];

  constructor(
    private scene: THREE.Scene,
    private matLib: MaterialLibrary,
    private bvh: BVH,
    private rigidWorld: RigidWorld,
    public propSystem: PropSystem,
    seed = 1337420
  ) {
    this.rng = new SeededRandom(seed);
    this.group.name = 'UrbanMapDistrict';
  }

  public build(): void {
    this.buildGroundAndCurbs();
    this.buildPerimeterEnclosure();
    this.buildMonumentalArchwayAndPlaza();
    this.buildCentralStreetBuildingsAndInteriors();
    this.buildOuterFlankBlocks();
    this.buildEastBalconyAndStairs();
    this.populateStreetsAndLanes();
    this.defineSpawnsAndBenchmarkViews();

    this.mergeStaticMeshesByMaterial(this.group, true);
    this.mergeStaticMeshesByMaterial(this.propSystem.group, true);

    this.scene.add(this.group);
    this.scene.add(this.propSystem.group);
    this.bvh.build();
  }

  private mergeStaticMeshesByMaterial(root: THREE.Group, byQuadrant = false): void {
    root.updateMatrixWorld(true);

    const buckets = new Map<string, { mat: THREE.Material; geos: THREE.BufferGeometry[] }>();
    const toRemove: THREE.Object3D[] = [];
    const dynamicMeshes: THREE.Object3D[] = [];
    const wp = new THREE.Vector3();

    root.traverse((obj) => {
      if (obj === root) return;
      if (obj instanceof THREE.InstancedMesh || obj instanceof THREE.Points) {
        return;
      }
      if (obj instanceof THREE.Mesh) {
        if (obj.userData.dynamic) {
          dynamicMeshes.push(obj);
          return;
        }
        const mat = obj.material as THREE.Material;
        let key = mat.uuid;
        if (byQuadrant) {
          obj.getWorldPosition(wp);
          const qx = wp.x >= 0 ? 1 : 0;
          const qz = wp.z >= -5 ? 1 : 0;
          key = `${qx}_${qz}_${mat.uuid}`;
        }
        const geo = obj.geometry.clone();
        geo.applyMatrix4(obj.matrixWorld);
        let bucket = buckets.get(key);
        if (!bucket) {
          bucket = { mat, geos: [] };
          buckets.set(key, bucket);
        }
        bucket.geos.push(geo);
        toRemove.push(obj);
      }
    });

    for (const dyn of dynamicMeshes) {
      if (dyn.parent && dyn.parent !== root) {
        const worldPos = new THREE.Vector3();
        const worldQuat = new THREE.Quaternion();
        dyn.getWorldPosition(worldPos);
        dyn.getWorldQuaternion(worldQuat);
        root.add(dyn);
        dyn.position.copy(worldPos);
        dyn.quaternion.copy(worldQuat);
      }
    }

    for (const obj of toRemove) {
      obj.parent?.remove(obj);
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
      }
    }

    for (let i = root.children.length - 1; i >= 0; i--) {
      const ch = root.children[i];
      if (ch.type === 'Group' && ch.children.length === 0) {
        root.remove(ch);
      }
    }

    for (const { mat, geos } of buckets.values()) {
      if (geos.length === 0) continue;
      let totalVerts = 0;
      let totalIndices = 0;
      for (const g of geos) {
        const pos = g.getAttribute('position');
        totalVerts += pos.count;
        const idx = g.getIndex();
        totalIndices += idx ? idx.count : pos.count;
      }

      const positions = new Float32Array(totalVerts * 3);
      const normals = new Float32Array(totalVerts * 3);
      const uvs = new Float32Array(totalVerts * 2);
      const indices = new Uint32Array(totalIndices);

      let vOffset = 0;
      let iOffset = 0;

      for (const g of geos) {
        const pos = g.getAttribute('position');
        const norm = g.getAttribute('normal');
        const uv = g.getAttribute('uv');
        const count = pos.count;

        for (let i = 0; i < count; i++) {
          positions[(vOffset + i) * 3] = pos.getX(i);
          positions[(vOffset + i) * 3 + 1] = pos.getY(i);
          positions[(vOffset + i) * 3 + 2] = pos.getZ(i);

          if (norm) {
            normals[(vOffset + i) * 3] = norm.getX(i);
            normals[(vOffset + i) * 3 + 1] = norm.getY(i);
            normals[(vOffset + i) * 3 + 2] = norm.getZ(i);
          } else {
            normals[(vOffset + i) * 3 + 1] = 1;
          }

          if (uv) {
            uvs[(vOffset + i) * 2] = uv.getX(i);
            uvs[(vOffset + i) * 2 + 1] = uv.getY(i);
          }
        }

        const idx = g.getIndex();
        if (idx) {
          for (let i = 0; i < idx.count; i++) {
            indices[iOffset + i] = idx.getX(i) + vOffset;
          }
          iOffset += idx.count;
        } else {
          for (let i = 0; i < count; i++) {
            indices[iOffset + i] = vOffset + i;
          }
          iOffset += count;
        }

        vOffset += count;
        g.dispose();
      }

      const merged = new THREE.BufferGeometry();
      merged.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      merged.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
      merged.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
      merged.setIndex(new THREE.BufferAttribute(indices, 1));
      merged.computeBoundingSphere();
      merged.computeBoundingBox();

      const mergedMesh = new THREE.Mesh(merged, mat);
      mergedMesh.castShadow = true;
      mergedMesh.receiveShadow = true;
      root.add(mergedMesh);
    }
  }

  private addStaticBox(
    x: number,
    y: number,
    z: number,
    w: number,
    h: number,
    d: number,
    matName: string,
    matId: MaterialId,
    rotY = 0,
    recordFootprint = false,
    thickness?: number
  ): THREE.Mesh {
    const geo = new THREE.BoxGeometry(w, h, d);
    // Scale UVs roughly to world meters so textures never stretch across varying block dimensions
    const uv = geo.getAttribute('uv');
    const pos = geo.getAttribute('position');
    const norm = geo.getAttribute('normal');
    if (uv && pos && norm) {
      for (let i = 0; i < uv.count; i++) {
        const px = pos.getX(i);
        const py = pos.getY(i);
        const pz = pos.getZ(i);
        const nx = Math.abs(norm.getX(i));
        const ny = Math.abs(norm.getY(i));
        if (ny > 0.5) {
          uv.setXY(i, px * 0.28, pz * 0.28);
        } else if (nx > 0.5) {
          uv.setXY(i, pz * 0.28, py * 0.28);
        } else {
          uv.setXY(i, px * 0.28, py * 0.28);
        }
      }
    }

    const mesh = new THREE.Mesh(geo, this.matLib.get(matName));
    mesh.position.set(x, y + h * 0.5, z);
    mesh.rotation.y = rotY;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.group.add(mesh);

    this.bvh.addBox(
      new THREE.Vector3(x, y + h * 0.5, z),
      new THREE.Vector3(w, h, d),
      matId,
      rotY,
      thickness
    );

    if (recordFootprint) {
      this.footprints.push({ x, z, w, d });
    }
    return mesh;
  }

  private buildGroundAndCurbs(): void {
    // Primary asphalt & compacted desert road surface (140m x 140m)
    const groundGeo = new THREE.PlaneGeometry(140, 140, 24, 24);
    groundGeo.rotateX(-Math.PI * 0.5);
    const uv = groundGeo.getAttribute('uv');
    for (let i = 0; i < uv.count; i++) {
      uv.setXY(i, uv.getX(i) * 36, uv.getY(i) * 36);
    }
    const groundMesh = new THREE.Mesh(groundGeo, this.matLib.get('road'));
    groundMesh.receiveShadow = true;
    this.group.add(groundMesh);

    this.bvh.addBox(
      new THREE.Vector3(0, -0.25, 0),
      new THREE.Vector3(140, 0.5, 140),
      MaterialId.ROAD,
      0,
      0.5
    );

    // Raised stone sidewalks / curbs along the central market street (x = ±9.2)
    for (const side of [-1, 1]) {
      this.addStaticBox(side * 9.8, 0, -39, 2.2, 0.14, 34, 'concrete', MaterialId.CONCRETE);
      this.addStaticBox(side * 9.8, 0, 14, 2.2, 0.14, 22, 'concrete', MaterialId.CONCRETE);
    }

    // Courtyard tiled pavement in the northern archway plaza (z = 22..50)
    const plazaTile = new THREE.Mesh(new THREE.BoxGeometry(28, 0.05, 28), this.matLib.get('tile'));
    const pUv = plazaTile.geometry.getAttribute('uv');
    for (let i = 0; i < pUv.count; i++) {
      pUv.setXY(i, pUv.getX(i) * 10, pUv.getY(i) * 10);
    }
    plazaTile.position.set(0, 0.025, 36);
    plazaTile.receiveShadow = true;
    this.group.add(plazaTile);
  }

  private buildPerimeterEnclosure(): void {
    // Outer district boundary buildings & compound walls so there are zero empty open voids
    this.addDetailedBuilding(0, -63, 44, 10, 11.5, 'stucco_warm_beige', 3, true, false);
    this.addDetailedBuilding(-34, -58, 22, 12, 10.5, 'stucco_terracotta', 2, true, false);
    this.addDetailedBuilding(34, -58, 22, 12, 10.5, 'stucco_sun_ochre', 2, true, false);

    // North plaza backdrop grand governorate palace facade
    this.addDetailedBuilding(0, 61, 48, 12, 13.5, 'stucco_sun_ochre', 3, true, false);
    this.addDetailedBuilding(-34, 56, 22, 14, 11.0, 'stucco_pale_peach', 3, true, false);
    this.addDetailedBuilding(34, 56, 22, 14, 11.0, 'stucco_chalk_white', 3, true, false);

    // Far West & Far East compound walls and apartment blocks
    this.addDetailedBuilding(-48, -26, 12, 46, 11.0, 'stucco_warm_beige', 3, false, true);
    this.addDetailedBuilding(-48, 22, 12, 46, 10.2, 'stucco_dusty_blue', 2, false, true);
    this.addDetailedBuilding(48, -26, 12, 46, 11.5, 'stucco_chalk_white', 3, false, true);
    this.addDetailedBuilding(48, 22, 12, 46, 10.5, 'stucco_terracotta', 2, false, true);
  }

  private buildMonumentalArchwayAndPlaza(): void {
    // Iconic Monumental Triple Stone/Concrete Archway spanning the north end of the Central Market Street (z = 21)
    const archZ = 21.0;
    // 4 massive pillars
    const pillarXs = [-10.5, -3.6, 3.6, 10.5];
    for (const px of pillarXs) {
      this.addStaticBox(px, 0, archZ, 2.2, 7.6, 2.8, 'concrete', MaterialId.CONCRETE, 0, true);
      // Decorative stone plinth & capital trim
      this.addStaticBox(px, 0, archZ, 2.5, 0.75, 3.1, 'brick', MaterialId.BRICK);
      this.addStaticBox(px, 5.4, archZ, 2.45, 0.35, 3.05, 'brick', MaterialId.BRICK);
    }

    // Upper archway entablature / bridge spanning across all pillars (y = 5.6m to 9.2m)
    this.addStaticBox(0, 5.6, archZ, 24.0, 3.4, 2.7, 'stucco_sun_ochre', MaterialId.CONCRETE);
    this.addStaticBox(0, 9.0, archZ, 24.6, 0.45, 3.1, 'brick', MaterialId.BRICK);

    // Arched spandrel steps under the three spans for authentic curved silhouette
    for (const spanCenter of [-7.05, 0, 7.05]) {
      const spanW = spanCenter === 0 ? 4.8 : 4.5;
      this.addStaticBox(spanCenter - spanW * 0.38, 4.75, archZ, 1.1, 0.9, 2.4, 'concrete', MaterialId.CONCRETE);
      this.addStaticBox(spanCenter + spanW * 0.38, 4.75, archZ, 1.1, 0.9, 2.4, 'concrete', MaterialId.CONCRETE);
    }

    // Broken Courtyard Plaza centerpiece (z = 36): Weathered octagonal stone fountain & low combat walls
    this.addStaticBox(0, 0, 36, 3.8, 1.05, 3.8, 'concrete', MaterialId.CONCRETE, Math.PI * 0.25, true);
    this.addStaticBox(0, 1.05, 36, 1.4, 1.45, 1.4, 'brick', MaterialId.BRICK);
    // Low stone courtyard cover walls around the plaza
    this.addStaticBox(-7.5, 0, 33, 4.2, 1.15, 0.65, 'concrete', MaterialId.CONCRETE, 0.15);
    this.addStaticBox(7.5, 0, 33, 4.2, 1.15, 0.65, 'concrete', MaterialId.CONCRETE, -0.15);
    this.addStaticBox(-6.5, 0, 41, 0.65, 1.15, 4.2, 'concrete', MaterialId.CONCRETE);
    this.addStaticBox(6.5, 0, 41, 0.65, 1.15, 4.2, 'concrete', MaterialId.CONCRETE);
  }

  private buildCentralStreetBuildingsAndInteriors(): void {
    // WEST SIDE OF CENTRAL STREET (x = -15.5)
    // 1. South-West Solid Apartment Block (z = -46..-35)
    this.addDetailedBuilding(-15.5, -41.5, 10.0, 11.0, 10.6, 'stucco_warm_beige', 3, false, true);

    // 2. South-West Enterable Merchant Cut-Through Room (x ∈ [-20.5, -10.5], z ∈ [-34, -23])
    this.buildEnterableBuilding(
      -15.5,
      -28.5,
      10.0,
      11.0,
      9.4,
      'stucco_terracotta',
      'stucco_chalk_white',
      true,  // open east door to central street
      true,  // open west door to west souk lane
      false, // south closed
      true   // north window cut-through
    );

    // 3. Mid-West Solid Facade Block with overhanging wooden mashrabiya balcony (z = -19..-13)
    this.addDetailedBuilding(-15.5, -16.0, 10.0, 6.2, 11.2, 'stucco_dusty_blue', 3, false, true);

    // 4. Mid-West Enterable Carpet & Spice Shop (x ∈ [-20.5, -10.5], z ∈ [-11, 2])
    this.buildEnterableBuilding(
      -15.5,
      -4.5,
      10.0,
      12.5,
      9.8,
      'stucco_sun_ochre',
      'stucco_warm_beige',
      true,  // east door to central street
      true,  // west door to souk lane
      true,  // south window
      true   // north door to cross-alley
    );

    // 5. North-West Corner Block before Archway (z = 11..19)
    this.addDetailedBuilding(-15.5, 14.5, 10.0, 8.5, 10.4, 'stucco_chalk_white', 3, false, true);

    // EAST SIDE OF CENTRAL STREET (x = +15.5)
    // 1. South-East Corner Block (z = -46..-30)
    this.addDetailedBuilding(15.5, -38.0, 10.0, 15.0, 10.8, 'stucco_sun_ochre', 3, false, true);

    // 2. Mid-East Building with Accessible 2nd-Floor Balcony & Upper Cut-Through Room (z = -24..-10)
    this.buildTwoStoryEnterableBuildingWithBalcony(15.5, -17.0, 10.0, 13.0);

    // 3. Mid-East Enterable Tea House / Arcade (x ∈ [10.5, 20.5], z ∈ [-4, 9])
    this.buildEnterableBuilding(
      15.5,
      2.5,
      10.0,
      12.5,
      9.6,
      'stucco_pale_peach',
      'stucco_chalk_white',
      true,  // open west door to central street
      true,  // open east door to east alley
      true,  // south window
      true   // north window toward archway
    );

    // 4. North-East Corner Block before Archway (z = 13..19)
    this.addDetailedBuilding(15.5, 15.8, 10.0, 6.2, 10.5, 'stucco_warm_beige', 3, false, true);
  }

  private buildOuterFlankBlocks(): void {
    // Divider buildings between West Souk Lane (x = -27) and Far West Perimeter
    this.addDetailedBuilding(-34.5, -24.0, 9.0, 16.0, 9.2, 'stucco_sun_ochre', 2, false, true);
    this.addDetailedBuilding(-34.5, 4.0, 9.0, 18.0, 9.8, 'stucco_terracotta', 2, false, true);
    this.addDetailedBuilding(-24.5, 34.0, 9.5, 14.0, 10.0, 'stucco_warm_beige', 2, false, true);

    // Divider buildings along East Flanking Alley (x = +27)
    this.addDetailedBuilding(34.5, -22.0, 9.0, 18.0, 9.6, 'stucco_weathered_gray', 2, false, true);
    this.addDetailedBuilding(34.5, 6.0, 9.0, 16.0, 10.2, 'stucco_dusty_blue', 3, false, true);
    this.addDetailedBuilding(24.5, 34.0, 9.5, 14.0, 10.0, 'stucco_chalk_white', 2, false, true);
  }

  /**
   * Builds an enterable ground-floor building with upper stories, interior tiled floor,
   * doorways, peekable windows with sills, interior shelves/tables, and rooftop parapet.
   */
  private buildEnterableBuilding(
    cx: number,
    cz: number,
    w: number,
    d: number,
    totalH: number,
    extMat: string,
    intMat: string,
    openEast: boolean,
    openWest: boolean,
    windowSouth: boolean,
    windowNorth: boolean
  ): void {
    const wallT = 0.45;
    const floor1H = 3.8;
    const upperH = totalH - floor1H;

    this.footprints.push({ x: cx, z: cz, w, d, isInterior: true });

    // Interior tiled floor
    const tileFloor = new THREE.Mesh(new THREE.BoxGeometry(w - 0.2, 0.12, d - 0.2), this.matLib.get('tile'));
    tileFloor.position.set(cx, 0.06, cz);
    tileFloor.receiveShadow = true;
    this.group.add(tileFloor);

    // Ceiling / Upper stories solid block above y = 3.8m
    this.addStaticBox(cx, floor1H, cz, w, upperH, d, extMat, MaterialId.CONCRETE, 0, false);

    // East wall (x = cx + w/2)
    const eastX = cx + w * 0.5 - wallT * 0.5;
    if (openEast) {
      const doorW = 2.4;
      const sideD = (d - doorW) * 0.5;
      this.addStaticBox(eastX, 0, cz - d * 0.5 + sideD * 0.5, wallT, floor1H, sideD, extMat, MaterialId.PLASTER, 0, false, wallT);
      this.addStaticBox(eastX, 0, cz + d * 0.5 - sideD * 0.5, wallT, floor1H, sideD, extMat, MaterialId.PLASTER, 0, false, wallT);
      this.addStaticBox(eastX, 2.75, cz, wallT, floor1H - 2.75, doorW, extMat, MaterialId.PLASTER, 0, false, wallT);
    } else {
      this.addStaticBox(eastX, 0, cz, wallT, floor1H, d, extMat, MaterialId.PLASTER, 0, false, wallT);
    }

    // West wall (x = cx - w/2)
    const westX = cx - w * 0.5 + wallT * 0.5;
    if (openWest) {
      const doorW = 2.4;
      const sideD = (d - doorW) * 0.5;
      this.addStaticBox(westX, 0, cz - d * 0.5 + sideD * 0.5, wallT, floor1H, sideD, extMat, MaterialId.PLASTER, 0, false, wallT);
      this.addStaticBox(westX, 0, cz + d * 0.5 - sideD * 0.5, wallT, floor1H, sideD, extMat, MaterialId.PLASTER, 0, false, wallT);
      this.addStaticBox(westX, 2.75, cz, wallT, floor1H - 2.75, doorW, extMat, MaterialId.PLASTER, 0, false, wallT);
    } else {
      this.addStaticBox(westX, 0, cz, wallT, floor1H, d, extMat, MaterialId.PLASTER, 0, false, wallT);
    }

    // South wall (z = cz - d/2)
    const southZ = cz - d * 0.5 + wallT * 0.5;
    if (windowSouth) {
      const winW = 2.6;
      const sideW = (w - winW) * 0.5;
      this.addStaticBox(cx - w * 0.5 + sideW * 0.5, 0, southZ, sideW, floor1H, wallT, intMat, MaterialId.PLASTER, 0, false, wallT);
      this.addStaticBox(cx + w * 0.5 - sideW * 0.5, 0, southZ, sideW, floor1H, wallT, intMat, MaterialId.PLASTER, 0, false, wallT);
      this.addStaticBox(cx, 0, southZ, winW, 1.05, wallT, intMat, MaterialId.PLASTER, 0, false, wallT);
      this.addStaticBox(cx, 2.55, southZ, winW, floor1H - 2.55, wallT, intMat, MaterialId.PLASTER, 0, false, wallT);
    } else {
      this.addStaticBox(cx, 0, southZ, w, floor1H, wallT, intMat, MaterialId.PLASTER, 0, false, wallT);
    }

    // North wall (z = cz + d/2)
    const northZ = cz + d * 0.5 - wallT * 0.5;
    if (windowNorth) {
      const winW = 2.6;
      const sideW = (w - winW) * 0.5;
      this.addStaticBox(cx - w * 0.5 + sideW * 0.5, 0, northZ, sideW, floor1H, wallT, intMat, MaterialId.PLASTER, 0, false, wallT);
      this.addStaticBox(cx + w * 0.5 - sideW * 0.5, 0, northZ, sideW, floor1H, wallT, intMat, MaterialId.PLASTER, 0, false, wallT);
      this.addStaticBox(cx, 0, northZ, winW, 1.05, wallT, intMat, MaterialId.PLASTER, 0, false, wallT);
      this.addStaticBox(cx, 2.55, northZ, winW, floor1H - 2.55, wallT, intMat, MaterialId.PLASTER, 0, false, wallT);
    } else {
      this.addStaticBox(cx, 0, northZ, w, floor1H, wallT, intMat, MaterialId.PLASTER, 0, false, wallT);
    }

    // Interior counter / wooden table for interior tactical cover
    this.addStaticBox(cx, 0.12, cz - 1.2, 2.4, 0.95, 0.85, 'wood', MaterialId.WOOD, 0.08, false, 0.25);

    // Decorate upper facade
    this.decorateUpperFacade(cx, cz, w, d, totalH, extMat);
  }

  /**
   * Builds the East accessible 2nd-floor balcony overlook & exterior staircase (x = 15.5, z = -17.0)
   */
  private buildTwoStoryEnterableBuildingWithBalcony(cx: number, cz: number, w: number, d: number): void {
    this.footprints.push({ x: cx, z: cz, w, d, isInterior: true });

    // Ground floor solid base (y = 0..3.8m)
    this.addStaticBox(cx, 0, cz, w, 3.8, d, 'stucco_chalk_white', MaterialId.CONCRETE);

    // Accessible 2nd floor loggia / balcony room (y = 3.8..7.4m)
    // Cantilevered concrete balcony slab extending toward Central Street (x = 8.4..10.5)
    this.addStaticBox(cx - w * 0.5 - 1.1, 3.6, cz, 2.4, 0.28, d - 1.0, 'concrete', MaterialId.CONCRETE);
    // Low balcony parapet wall providing waist-high cover overlooking the Central Market Street
    this.addStaticBox(cx - w * 0.5 - 2.15, 3.88, cz - 2.8, 0.25, 1.05, 5.2, 'stucco_sun_ochre', MaterialId.CONCRETE, 0, false, 0.25);
    this.addStaticBox(cx - w * 0.5 - 2.15, 3.88, cz + 3.2, 0.25, 1.05, 4.4, 'stucco_sun_ochre', MaterialId.CONCRETE, 0, false, 0.25);

    // Back wall of upper floor + roof slab
    this.addStaticBox(cx + 1.8, 3.8, cz, w - 3.6, 3.8, d, 'stucco_sun_ochre', MaterialId.CONCRETE);
    this.addStaticBox(cx, 7.6, cz, w + 1.6, 2.4, d, 'stucco_warm_beige', MaterialId.CONCRETE);

    this.decorateUpperFacade(cx, cz, w, d, 10.0, 'stucco_warm_beige');
  }

  private buildEastBalconyAndStairs(): void {
    // Exterior concrete stairs on the south face of the East Balcony Building (connecting ground y=0 at z=-28.5 to y=3.8 at z=-22.5)
    const steps = 12;
    const totalRise = 3.8;
    const totalRun = 5.4;
    const stepH = totalRise / steps;
    const stepD = totalRun / steps;

    for (let s = 0; s < steps; s++) {
      const sy = s * stepH;
      const sz = -28.5 + s * stepD;
      this.addStaticBox(9.4, 0, sz, 2.1, sy + stepH, stepD + 0.04, 'concrete', MaterialId.CONCRETE);
    }

    // Landing connecting top of stairs to the balcony at z = -23.0
    this.addStaticBox(9.4, 3.55, -22.8, 2.2, 0.28, 1.8, 'concrete', MaterialId.CONCRETE);
    // Safety railing on outside of stairs
    this.addStaticBox(8.25, 0, -25.8, 0.18, 2.6, 5.8, 'brick', MaterialId.BRICK, 0, false, 0.18);
  }

  /**
   * Procedural Facade Grammar: builds a multi-story urban structure with cornice ledges,
   * parapets, recessed windows, shutters, balconies, AC units, drainpipes, satellite dishes, and roof water tanks.
   */
  private addDetailedBuilding(
    cx: number,
    cz: number,
    w: number,
    d: number,
    h: number,
    matName: string,
    stories: number,
    detailZFaces: boolean,
    detailXFaces: boolean
  ): void {
    this.addStaticBox(cx, 0, cz, w, h, d, matName, MaterialId.CONCRETE, 0, true);
    this.decorateUpperFacade(cx, cz, w, d, h, matName, stories, detailZFaces, detailXFaces);
  }

  private decorateUpperFacade(
    cx: number,
    cz: number,
    w: number,
    d: number,
    h: number,
    matName: string,
    stories = 3,
    detailZFaces = true,
    detailXFaces = true
  ): void {
    const trimMat = this.matLib.get('concrete');
    const woodMat = this.matLib.get('wood');
    const shutterMat = this.matLib.get('shutter_blue');
    const glassMat = this.matLib.get('glass_dark');
    const darkMetal = this.matLib.get('metal_dark');
    const paintedMetal = this.matLib.get('metal_painted');

    // Roof parapet walls & horizontal floor cornice bands
    const parapetH = 0.65;
    const pThick = 0.32;
    this.addStaticBox(cx, h, cz - d * 0.5 + pThick * 0.5, w, parapetH, pThick, matName, MaterialId.CONCRETE);
    this.addStaticBox(cx, h, cz + d * 0.5 - pThick * 0.5, w, parapetH, pThick, matName, MaterialId.CONCRETE);
    this.addStaticBox(cx - w * 0.5 + pThick * 0.5, h, cz, pThick, parapetH, d, matName, MaterialId.CONCRETE);
    this.addStaticBox(cx + w * 0.5 - pThick * 0.5, h, cz, pThick, parapetH, d, matName, MaterialId.CONCRETE);

    const detailGroup = new THREE.Group();

    for (let s = 1; s <= stories; s++) {
      const bandY = (s / stories) * h;
      const ledge = new THREE.Mesh(new THREE.BoxGeometry(w + 0.24, 0.18, d + 0.24), trimMat);
      ledge.position.set(cx, bandY, cz);
      ledge.castShadow = true;
      ledge.receiveShadow = true;
      detailGroup.add(ledge);
    }

    // Rooftop clutter: galvanized water tank, solar collector / satellite dish, antenna mast
    if (this.rng.chance(0.85)) {
      const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 1.65, 12), paintedMetal);
      tank.position.set(cx + this.rng.range(-w * 0.25, w * 0.25), h + 0.82, cz + this.rng.range(-d * 0.25, d * 0.25));
      tank.castShadow = true;
      detailGroup.add(tank);
    }
    if (this.rng.chance(0.75)) {
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 2.8, 6), darkMetal);
      mast.position.set(cx - w * 0.3, h + 1.4, cz + d * 0.3);
      detailGroup.add(mast);
    }

    // Window & AC unit placement helper along a facade wall
    const populateFace = (isXFace: boolean, dirSign: number) => {
      const span = isXFace ? d : w;
      const cols = Math.max(1, Math.floor((span - 1.5) / 3.4));
      for (let s = 1; s < stories; s++) {
        const wy = s * 3.4 + 1.75;
        if (wy > h - 1.0) continue;

        for (let c = 0; c < cols; c++) {
          const offset = (c - (cols - 1) * 0.5) * 3.3;
          const wx = isXFace ? cx + dirSign * (w * 0.5 + 0.04) : cx + offset;
          const wz = isXFace ? cz + offset : cz + dirSign * (d * 0.5 + 0.04);
          const rotY = isXFace ? (dirSign > 0 ? Math.PI * 0.5 : -Math.PI * 0.5) : dirSign > 0 ? 0 : Math.PI;

          const winGroup = new THREE.Group();
          winGroup.position.set(wx, wy, wz);
          winGroup.rotation.y = rotY;

          // Dark glass pane + stone sill + wooden frame
          const pane = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.45, 0.08), glassMat);
          winGroup.add(pane);

          const sill = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.12, 0.26), trimMat);
          sill.position.set(0, -0.76, 0.08);
          sill.castShadow = true;
          winGroup.add(sill);

          const lintel = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.16, 0.18), trimMat);
          lintel.position.set(0, 0.78, 0.05);
          lintel.castShadow = true;
          winGroup.add(lintel);

          // Varied window treatment: louvered shutters, iron bars, or small balcony
          const styleRoll = this.rng.next();
          if (styleRoll < 0.45) {
            const leftShutter = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.38, 0.06), shutterMat);
            leftShutter.position.set(-0.68, 0, 0.06);
            leftShutter.rotation.y = -0.25;
            leftShutter.castShadow = true;
            winGroup.add(leftShutter);

            const rightShutter = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.38, 0.06), shutterMat);
            rightShutter.position.set(0.68, 0, 0.06);
            rightShutter.rotation.y = 0.32;
            rightShutter.castShadow = true;
            winGroup.add(rightShutter);
          } else if (styleRoll < 0.75) {
            // Enclosed timber mashrabiya / juliet balcony
            const balSlab = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.12, 0.55), trimMat);
            balSlab.position.set(0, -0.72, 0.26);
            balSlab.castShadow = true;
            winGroup.add(balSlab);

            const rail = new THREE.Mesh(new THREE.BoxGeometry(1.52, 0.75, 0.05), darkMetal);
            rail.position.set(0, -0.30, 0.50);
            rail.castShadow = true;
            winGroup.add(rail);
          } else {
            // Boarded / barred tactical window
            const plank = new THREE.Mesh(new THREE.BoxGeometry(1.26, 0.22, 0.06), woodMat);
            plank.position.set(0, -0.1, 0.06);
            plank.rotation.z = 0.09;
            winGroup.add(plank);
          }

          // Split-system exterior AC compressor unit next to 55% of windows
          if (this.rng.chance(0.55)) {
            const acBox = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.52, 0.34), paintedMetal);
            acBox.position.set(1.12, -0.25, 0.16);
            acBox.castShadow = true;
            acBox.receiveShadow = true;
            winGroup.add(acBox);

            const fanGrille = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.36, 10), darkMetal);
            fanGrille.rotation.x = Math.PI * 0.5;
            fanGrille.position.set(1.0, -0.25, 0.17);
            winGroup.add(fanGrille);
          }

          detailGroup.add(winGroup);
        }
      }

      // Vertical PVC/metal drainpipe on corner of facade
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, h, 6), darkMetal);
      const px = isXFace ? cx + dirSign * (w * 0.5 + 0.06) : cx + (span * 0.44);
      const pz = isXFace ? cz + (span * 0.44) : cz + dirSign * (d * 0.5 + 0.06);
      pipe.position.set(px, h * 0.5, pz);
      detailGroup.add(pipe);
    };

    if (detailXFaces) {
      populateFace(true, -1);
      populateFace(true, 1);
    }
    if (detailZFaces) {
      populateFace(false, -1);
      populateFace(false, 1);
    }

    this.mergeStaticMeshesByMaterial(detailGroup);
    this.group.add(detailGroup);
  }

  private populateStreetsAndLanes(): void {
    // 1. Central Market Street (x ∈ [-9, 9], z ∈ [-48, 20]):
    // Match reference: sunlit dusty main boulevard with Jersey barriers, parked vehicles, market stalls, palm trees, overhead cables & awnings
    this.propSystem.addUtilityVehicle(-3.2, 0, -19.5, 0.16, 'pickup');
    this.propSystem.addUtilityVehicle(3.8, 0, 5.2, -0.22, 'van');

    // Staggered Jersey barriers providing strong FPS cover rhythm down the central sightline
    this.propSystem.addJerseyBarrier(-3.6, 0, -34.0, 0.12, false);
    this.propSystem.addJerseyBarrier(3.4, 0, -29.0, -0.18, true);
    this.propSystem.addJerseyBarrier(2.6, 0, -10.5, 0.08, false);
    this.propSystem.addJerseyBarrier(-3.5, 0, -1.8, -0.15, true);
    this.propSystem.addJerseyBarrier(-2.8, 0, 12.5, 0.25, false);
    this.propSystem.addJerseyBarrier(3.8, 0, 15.0, -0.10, false);

    // Sandbag emplacements at key lane intersections
    this.propSystem.addSandbagWall(0.0, 0, -42.5, 0, 4, 4);
    this.propSystem.addSandbagWall(-5.2, 0, -14.5, 0.35, 4, 3);
    this.propSystem.addSandbagWall(5.4, 0, -5.0, -0.35, 4, 3);
    this.propSystem.addSandbagWall(0.0, 0, 25.5, 0, 4, 4);
    this.propSystem.addSandbagWall(-24.0, 0, -16.0, 0.1, 4, 3);
    this.propSystem.addSandbagWall(24.5, 0, -8.0, -0.15, 4, 3);

    // Market stalls lining the sidewalks and the West Souk Lane
    this.propSystem.addMarketStall(-7.4, 0.14, -25.0, Math.PI * 0.5, 'awning_terracotta');
    this.propSystem.addMarketStall(-7.4, 0.14, -7.5, Math.PI * 0.5, 'awning_ochre');
    this.propSystem.addMarketStall(7.4, 0.14, -18.5, -Math.PI * 0.5, 'awning_blue');
    this.propSystem.addMarketStall(7.4, 0.14, 11.5, -Math.PI * 0.5, 'awning_cream');

    // West Covered Souk stalls
    this.propSystem.addMarketStall(-25.5, 0, -28.0, 0.1, 'awning_terracotta');
    this.propSystem.addMarketStall(-26.5, 0, -6.0, -0.12, 'awning_ochre');
    this.propSystem.addMarketStall(-25.0, 0, 12.0, 0.08, 'awning_olive');

    // Crate & oil-drum clusters with reactive physics props
    this.propSystem.addCrateCluster(6.2, 0.14, -34.5, 0.3);
    this.propSystem.addCrateCluster(-6.4, 0.14, 4.5, -0.4);
    this.propSystem.addCrateCluster(-22.5, 0, -1.5, 0.2);
    this.propSystem.addCrateCluster(25.5, 0, -20.0, -0.25);
    this.propSystem.addCrateCluster(25.0, 0, 12.5, 0.5);
    this.propSystem.addCrateCluster(-11.0, 0, 36.0, 0.15);
    this.propSystem.addCrateCluster(11.0, 0, 36.0, -0.2);

    // Date-palm trees adding vertical silhouette and dappled frond shadows
    this.propSystem.addPalmTree(-8.2, 0.14, -38.0, 8.2);
    this.propSystem.addPalmTree(8.2, 0.14, -24.5, 7.6);
    this.propSystem.addPalmTree(-8.2, 0.14, 8.5, 8.5);
    this.propSystem.addPalmTree(-12.5, 0, 29.0, 8.0);
    this.propSystem.addPalmTree(12.5, 0, 29.0, 7.8);
    this.propSystem.addPalmTree(-9.5, 0, 44.0, 8.4);
    this.propSystem.addPalmTree(9.5, 0, 44.0, 8.1);

    // Overhead sagging utility cables & shade canopies across the Central Street & West Souk
    for (const z of [-40, -28, -16, -4, 8, 17]) {
      this.propSystem.addOverheadCable(
        new THREE.Vector3(-10.5, 7.8, z),
        new THREE.Vector3(10.5, 8.1, z + 2.5),
        0.95
      );
      this.propSystem.addOverheadCable(
        new THREE.Vector3(-10.5, 7.2, z + 1.2),
        new THREE.Vector3(10.5, 7.4, z - 1.0),
        0.75
      );
    }

    // Overhead souk shade fabrics
    this.propSystem.addStreetAwningSpan(
      new THREE.Vector3(-10.4, 6.2, -26),
      new THREE.Vector3(10.4, 6.2, -26),
      3.6,
      'awning_cream'
    );
    this.propSystem.addStreetAwningSpan(
      new THREE.Vector3(-10.4, 6.4, -6),
      new THREE.Vector3(10.4, 6.4, -6),
      3.8,
      'awning_ochre'
    );
    this.propSystem.addStreetAwningSpan(
      new THREE.Vector3(-30.0, 5.6, -18),
      new THREE.Vector3(-20.5, 5.6, -18),
      4.5,
      'awning_terracotta'
    );
    this.propSystem.addStreetAwningSpan(
      new THREE.Vector3(-30.0, 5.6, -2),
      new THREE.Vector3(-20.5, 5.6, -2),
      4.5,
      'awning_blue'
    );

    this.propSystem.initAmbientMicroDetails();
  }

  private defineSpawnsAndBenchmarkViews(): void {
    // Team Alpha (South Spawn Zone - multiple safe exits to Central Street, West Souk, East Alley)
    this.alphaSpawns = [
      new THREE.Vector3(0.0, 0.05, -48.0),
      new THREE.Vector3(-6.0, 0.05, -49.0),
      new THREE.Vector3(6.0, 0.05, -49.0),
      new THREE.Vector3(-23.0, 0.05, -42.0),
      new THREE.Vector3(23.0, 0.05, -42.0)
    ];

    // Team Bravo (North Plaza Spawn Zone - multiple safe exits through Triple Archway, West Souk, East Alley)
    this.bravoSpawns = [
      new THREE.Vector3(0.0, 0.05, 48.0),
      new THREE.Vector3(-9.0, 0.05, 47.0),
      new THREE.Vector3(9.0, 0.05, 47.0),
      new THREE.Vector3(-24.0, 0.05, 42.0),
      new THREE.Vector3(24.0, 0.05, 42.0)
    ];

    this.benchmarkViews = {
      spawn_alley: {
        name: 'South Spawn Alley',
        position: new THREE.Vector3(0.0, 0.05, -46.5),
        yaw: Math.PI,
        pitch: 0.02
      },
      central_market: {
        name: 'Central Market Street',
        position: new THREE.Vector3(0.6, 0.05, -24.5),
        yaw: Math.PI + 0.02,
        pitch: 0.03
      },
      archway_plaza: {
        name: 'Monumental Archway & Plaza',
        position: new THREE.Vector3(-1.5, 0.05, 8.5),
        yaw: Math.PI - 0.05,
        pitch: 0.05
      },
      west_souk: {
        name: 'West Covered Souk Lane',
        position: new THREE.Vector3(-25.0, 0.05, -18.0),
        yaw: Math.PI,
        pitch: 0.0
      },
      east_balcony: {
        name: 'East Balcony Overlook',
        position: new THREE.Vector3(9.2, 3.9, -17.0),
        yaw: Math.PI - 0.55,
        pitch: -0.14
      }
    };
  }
}
