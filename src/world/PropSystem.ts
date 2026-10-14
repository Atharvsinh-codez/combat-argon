import * as THREE from 'three';
import { SeededRandom } from '../core/SeededRandom';
import { BVH, MaterialId } from '../physics/BVH';
import { RigidWorld } from '../physics/RigidWorld';
import { MaterialLibrary } from './MaterialLibrary';

export interface CoverNode {
  position: THREE.Vector3;
  normal: THREE.Vector3; // Direction from cover toward cover-taker
  crouchOnly: boolean;
  occupiedBy: number; // -1 if free
}

/**
 * Places and instances high-detail street cover, vehicles, market stalls,
 * palm trees, cables, cloth awnings, reactive physics props, and ambient street debris.
 */
export class PropSystem {
  public group = new THREE.Group();
  public coverNodes: CoverNode[] = [];
  private skitterPapers: Array<{
    mesh: THREE.Mesh;
    basePos: THREE.Vector3;
    phase: number;
    speed: number;
  }> = [];
  private dustMotes!: THREE.Points;
  private dustPositions!: Float32Array;
  private dustPhases!: Float32Array;

  constructor(
    private matLib: MaterialLibrary,
    private bvh: BVH,
    private rigidWorld: RigidWorld,
    private rng: SeededRandom
  ) {
    this.group.name = 'PropSystem';
  }

  public addJerseyBarrier(x: number, y: number, z: number, rotY = 0, damaged = false): void {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rotY;

    // Classic flared profile Jersey barrier
    const shape = new THREE.Shape();
    shape.moveTo(-0.32, 0);
    shape.lineTo(0.32, 0);
    shape.lineTo(0.32, 0.18);
    shape.lineTo(0.16, 0.42);
    shape.lineTo(0.11, 1.02);
    shape.lineTo(-0.11, 1.02);
    shape.lineTo(-0.16, 0.42);
    shape.lineTo(-0.32, 0.18);
    shape.closePath();

    const len = 2.6;
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: len,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.015,
      bevelThickness: 0.015
    });
    geo.translate(0, 0, -len * 0.5);
    geo.rotateY(Math.PI * 0.5);

    const mesh = new THREE.Mesh(geo, this.matLib.get('concrete'));
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    g.add(mesh);

    // Painted warning stripe or lifting loops
    const loopGeo = new THREE.TorusGeometry(0.055, 0.012, 6, 12, Math.PI);
    const loopMat = this.matLib.get('metal_dark');
    for (const lx of [-0.85, 0.85]) {
      const loop = new THREE.Mesh(loopGeo, loopMat);
      loop.position.set(lx, 1.02, 0);
      g.add(loop);
    }

    if (damaged) {
      const rebarGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.25, 6);
      const rebar = new THREE.Mesh(rebarGeo, loopMat);
      rebar.position.set(0.35, 1.08, 0.02);
      rebar.rotation.z = 0.25;
      g.add(rebar);
    }

    this.group.add(g);
    this.bvh.addBox(new THREE.Vector3(x, y + 0.52, z), new THREE.Vector3(len, 1.04, 0.56), MaterialId.CONCRETE, rotY, 0.5);

    const cos = Math.cos(rotY);
    const sin = Math.sin(rotY);
    for (const side of [-1, 1]) {
      const nx = -sin * side;
      const nz = -cos * side;
      this.coverNodes.push({
        position: new THREE.Vector3(x + nx * 0.85, y, z + nz * 0.85),
        normal: new THREE.Vector3(nx, 0, nz),
        crouchOnly: true,
        occupiedBy: -1
      });
    }
  }

  public addSandbagWall(x: number, y: number, z: number, rotY = 0, rows = 4, cols = 3): void {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rotY;

    const bagGeo = new THREE.BoxGeometry(0.58, 0.21, 0.34, 3, 2, 2);
    // Slightly pillow the vertices so sandbags look organic
    const pos = bagGeo.getAttribute('position');
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const pinch = 1.0 - 0.18 * (v.x * v.x) / (0.29 * 0.29);
      v.y *= pinch;
      v.z *= 0.92 + 0.08 * Math.cos(v.x * 5.0);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    bagGeo.computeVertexNormals();

    const mat = this.matLib.get('sandbag');
    for (let r = 0; r < rows; r++) {
      const rowOffset = (r % 2) * 0.22;
      for (let c = 0; c < cols; c++) {
        const bag = new THREE.Mesh(bagGeo, mat);
        const bx = (c - (cols - 1) * 0.5) * 0.54 + rowOffset * 0.5;
        const by = r * 0.185 + 0.105;
        const bz = (this.rng.next() - 0.5) * 0.04;
        bag.position.set(bx, by, bz);
        bag.rotation.y = (this.rng.next() - 0.5) * 0.14;
        bag.castShadow = true;
        bag.receiveShadow = true;
        g.add(bag);
      }
    }

    this.group.add(g);
    const totalW = cols * 0.58;
    const totalH = rows * 0.19;
    this.bvh.addBox(
      new THREE.Vector3(x, y + totalH * 0.5, z),
      new THREE.Vector3(totalW, totalH, 0.42),
      MaterialId.SANDBAG,
      rotY,
      0.42
    );

    const cos = Math.cos(rotY);
    const sin = Math.sin(rotY);
    for (const side of [-1, 1]) {
      const nx = -sin * side;
      const nz = -cos * side;
      this.coverNodes.push({
        position: new THREE.Vector3(x + nx * 0.85, y, z + nz * 0.85),
        normal: new THREE.Vector3(nx, 0, nz),
        crouchOnly: true,
        occupiedBy: -1
      });
    }
  }

  public addMarketStall(
    x: number,
    y: number,
    z: number,
    rotY = 0,
    awningMaterialKey = 'awning_terracotta'
  ): void {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rotY;

    const woodMat = this.matLib.get('wood');
    const clothMat = this.matLib.get(awningMaterialKey);
    const brickMat = this.matLib.get('brick');

    // Counter table (3.0m wide x 0.92m high x 1.25m deep)
    const tableTop = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.08, 1.25), woodMat);
    tableTop.position.set(0, 0.88, 0);
    tableTop.castShadow = true;
    tableTop.receiveShadow = true;
    g.add(tableTop);

    const frontApron = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.78, 0.08), woodMat);
    frontApron.position.set(0, 0.45, 0.56);
    frontApron.castShadow = true;
    frontApron.receiveShadow = true;
    g.add(frontApron);

    // 4 Corner timber posts supporting overhead canopy
    const postGeo = new THREE.BoxGeometry(0.09, 2.55, 0.09);
    const postPositions = [
      [-1.42, 1.27, -0.56],
      [1.42, 1.27, -0.56],
      [-1.42, 1.27, 0.56],
      [1.42, 1.27, 0.56]
    ];
    for (const [px, py, pz] of postPositions) {
      const post = new THREE.Mesh(postGeo, woodMat);
      post.position.set(px, py, pz);
      post.castShadow = true;
      post.receiveShadow = true;
      g.add(post);
    }

    // Sloped wind-animated cloth canopy
    const canopyGeo = new THREE.PlaneGeometry(3.3, 1.75, 10, 6);
    const cPos = canopyGeo.getAttribute('position');
    for (let i = 0; i < cPos.count; i++) {
      const u = cPos.getX(i);
      const v = cPos.getY(i);
      const sag = -0.09 * (1 - (u / 1.65) * (u / 1.65)) * (1 - (v / 0.875) * (v / 0.875));
      cPos.setZ(i, sag);
    }
    canopyGeo.computeVertexNormals();
    const canopy = new THREE.Mesh(canopyGeo, clothMat);
    canopy.position.set(0, 2.45, 0.08);
    canopy.rotation.x = -Math.PI * 0.5 + 0.22;
    canopy.castShadow = true;
    canopy.receiveShadow = true;
    g.add(canopy);

    // Market wares: baskets, spice sacks, terracotta amphora/pots, wooden trays
    const sackGeo = new THREE.CylinderGeometry(0.18, 0.24, 0.42, 10);
    for (let i = 0; i < 3; i++) {
      const sack = new THREE.Mesh(sackGeo, this.matLib.get('sandbag'));
      sack.position.set(-0.9 + i * 0.48, 0.21, -0.15 + (this.rng.next() - 0.5) * 0.2);
      sack.castShadow = true;
      sack.receiveShadow = true;
      g.add(sack);
    }

    const trayGeo = new THREE.BoxGeometry(0.68, 0.10, 0.48);
    for (let i = 0; i < 3; i++) {
      const tray = new THREE.Mesh(trayGeo, woodMat);
      tray.position.set(-0.85 + i * 0.85, 0.96, 0.05);
      tray.rotation.y = (this.rng.next() - 0.5) * 0.18;
      tray.castShadow = true;
      tray.receiveShadow = true;
      g.add(tray);
    }

    // Terracotta pottery jars
    const potGeo = new THREE.LatheGeometry(
      [
        new THREE.Vector2(0.0, 0.0),
        new THREE.Vector2(0.11, 0.0),
        new THREE.Vector2(0.17, 0.18),
        new THREE.Vector2(0.14, 0.34),
        new THREE.Vector2(0.08, 0.42),
        new THREE.Vector2(0.11, 0.48)
      ],
      12
    );
    const pot = new THREE.Mesh(potGeo, brickMat);
    pot.position.set(1.05, 0.0, 0.25);
    pot.castShadow = true;
    pot.receiveShadow = true;
    g.add(pot);

    this.group.add(g);

    // Solid counter collider (thin wood for bullet penetration)
    this.bvh.addBox(
      new THREE.Vector3(x, y + 0.46, z),
      new THREE.Vector3(3.0, 0.92, 1.25),
      MaterialId.WOOD,
      rotY,
      0.16
    );
  }

  public addUtilityVehicle(
    x: number,
    y: number,
    z: number,
    rotY = 0,
    variant: 'pickup' | 'van' = 'pickup'
  ): void {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rotY;

    const bodyMat = this.matLib.get(variant === 'pickup' ? 'stucco_chalk_white' : 'shutter_blue');
    const darkMetal = this.matLib.get('metal_dark');
    const glassMat = this.matLib.get('glass_dark');

    if (variant === 'pickup') {
      // Lower chassis + bed + hood (4.4m long x 1.85m wide)
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.86, 0.68, 4.45), bodyMat);
      chassis.position.set(0, 0.66, 0);
      chassis.castShadow = true;
      chassis.receiveShadow = true;
      g.add(chassis);

      // Cabin
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.76, 0.74, 1.65), bodyMat);
      cabin.position.set(0, 1.34, 0.32);
      cabin.castShadow = true;
      cabin.receiveShadow = true;
      g.add(cabin);

      // Windshield & rear window
      const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.56, 1.72), glassMat);
      windshield.position.set(0, 1.33, 0.32);
      g.add(windshield);

      // Front bumper & grille
      const bumper = new THREE.Mesh(new THREE.BoxGeometry(1.92, 0.26, 0.24), darkMetal);
      bumper.position.set(0, 0.46, 2.22);
      g.add(bumper);

      // Cargo crate in pickup bed
      const bedCrate = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.55, 1.1), this.matLib.get('wood'));
      bedCrate.position.set(-0.15, 1.15, -1.25);
      bedCrate.rotation.y = 0.18;
      bedCrate.castShadow = true;
      g.add(bedCrate);
    } else {
      // Utility delivery van
      const lower = new THREE.Mesh(new THREE.BoxGeometry(1.92, 0.85, 4.5), bodyMat);
      lower.position.set(0, 0.74, 0);
      lower.castShadow = true;
      lower.receiveShadow = true;
      g.add(lower);

      const upper = new THREE.Mesh(new THREE.BoxGeometry(1.84, 0.92, 3.85), bodyMat);
      upper.position.set(0, 1.60, -0.25);
      upper.castShadow = true;
      upper.receiveShadow = true;
      g.add(upper);

      const glass = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.65, 1.25), glassMat);
      glass.position.set(0, 1.56, 1.12);
      g.add(glass);
    }

    // 4 Rubber wheels with steel rims
    const tireGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.26, 16);
    tireGeo.rotateZ(Math.PI * 0.5);
    const wheelOffsets = [
      [-0.88, 0.38, 1.38],
      [0.88, 0.38, 1.38],
      [-0.88, 0.38, -1.38],
      [0.88, 0.38, -1.38]
    ];
    for (const [wx, wy, wz] of wheelOffsets) {
      const wheel = new THREE.Mesh(tireGeo, darkMetal);
      wheel.position.set(wx, wy, wz);
      wheel.castShadow = true;
      wheel.receiveShadow = true;
      g.add(wheel);
    }

    this.group.add(g);

    // Colliders for lower chassis and cabin
    const totalH = variant === 'pickup' ? 1.62 : 2.02;
    this.bvh.addBox(
      new THREE.Vector3(x, y + totalH * 0.5, z),
      new THREE.Vector3(1.9, totalH, 4.45),
      MaterialId.METAL,
      rotY,
      0.8
    );

    const cos = Math.cos(rotY);
    const sin = Math.sin(rotY);
    for (const side of [-1, 1]) {
      const nx = cos * side;
      const nz = -sin * side;
      this.coverNodes.push({
        position: new THREE.Vector3(x + nx * 1.45, y, z + nz * 1.45),
        normal: new THREE.Vector3(nx, 0, nz),
        crouchOnly: false,
        occupiedBy: -1
      });
    }
  }

  public addPalmTree(x: number, y: number, z: number, height = 7.8): void {
    const g = new THREE.Group();
    g.position.set(x, y, z);

    const woodMat = this.matLib.get('wood');
    const frondMat = this.matLib.get('foliage');

    // Segmented curved date-palm trunk
    const segments = 9;
    const segH = height / segments;
    let curX = 0;
    let curZ = 0;
    const curveAngle = this.rng.range(0, Math.PI * 2);

    for (let s = 0; s < segments; s++) {
      const t = s / segments;
      const rBottom = THREE.MathUtils.lerp(0.28, 0.16, t);
      const rTop = THREE.MathUtils.lerp(0.26, 0.15, (s + 1) / segments);
      const segGeo = new THREE.CylinderGeometry(rTop, rBottom, segH * 1.08, 8);
      const seg = new THREE.Mesh(segGeo, woodMat);
      curX += Math.cos(curveAngle) * 0.045 * (1 - Math.abs(t - 0.5));
      curZ += Math.sin(curveAngle) * 0.045 * (1 - Math.abs(t - 0.5));
      seg.position.set(curX, (s + 0.5) * segH, curZ);
      seg.castShadow = true;
      seg.receiveShadow = true;
      g.add(seg);
    }

    // Crown of arching palm fronds
    const frondCount = 13;
    const frondGeo = new THREE.PlaneGeometry(0.55, 2.9, 2, 7);
    const fPos = frondGeo.getAttribute('position');
    for (let i = 0; i < fPos.count; i++) {
      const u = fPos.getX(i);
      const v = fPos.getY(i) + 1.45; // 0 to 2.9 from base
      const normV = v / 2.9;
      const taper = Math.sin(normV * Math.PI);
      const droop = -normV * normV * 0.85;
      fPos.setXYZ(i, u * taper, v * 0.82, droop);
    }
    frondGeo.computeVertexNormals();

    for (let f = 0; f < frondCount; f++) {
      const angle = (f / frondCount) * Math.PI * 2 + this.rng.range(-0.12, 0.12);
      const tilt = 0.55 + (f % 3) * 0.22;
      const frond = new THREE.Mesh(frondGeo, frondMat);
      frond.position.set(curX, height - 0.1, curZ);
      frond.rotation.y = angle;
      frond.rotation.x = tilt;
      frond.castShadow = true;
      g.add(frond);
    }

    this.group.add(g);
    this.bvh.addBox(
      new THREE.Vector3(x, y + 2.2, z),
      new THREE.Vector3(0.52, 4.4, 0.52),
      MaterialId.WOOD,
      0,
      0.45
    );
  }

  public addCrateCluster(x: number, y: number, z: number, rotY = 0): void {
    const woodMat = this.matLib.get('wood');
    const barrelMat = this.matLib.get('metal_painted');

    // Large static anchor crate
    const mainGeo = new THREE.BoxGeometry(1.15, 1.05, 1.15);
    const mainMesh = new THREE.Mesh(mainGeo, woodMat);
    mainMesh.position.set(x, y + 0.525, z);
    mainMesh.rotation.y = rotY;
    mainMesh.castShadow = true;
    mainMesh.receiveShadow = true;
    this.group.add(mainMesh);
    this.bvh.addBox(
      new THREE.Vector3(x, y + 0.525, z),
      new THREE.Vector3(1.15, 1.05, 1.15),
      MaterialId.WOOD,
      rotY,
      0.35
    );

    // Adjacent metal oil drum (static cover)
    const drumGeo = new THREE.CylinderGeometry(0.29, 0.29, 0.92, 14);
    const drumMesh = new THREE.Mesh(drumGeo, barrelMat);
    const dx = x + Math.cos(rotY) * 0.95;
    const dz = z - Math.sin(rotY) * 0.95;
    drumMesh.position.set(dx, y + 0.46, dz);
    drumMesh.castShadow = true;
    drumMesh.receiveShadow = true;
    this.group.add(drumMesh);
    this.bvh.addBox(
      new THREE.Vector3(dx, y + 0.46, dz),
      new THREE.Vector3(0.58, 0.92, 0.58),
      MaterialId.METAL,
      0,
      0.4
    );

    // Reactive dynamic physics box on top that flies off when shot!
    const smallGeo = new THREE.BoxGeometry(0.46, 0.38, 0.46);
    const smallMesh = new THREE.Mesh(smallGeo, woodMat);
    smallMesh.position.set(x + 0.08, y + 1.24, z - 0.06);
    smallMesh.rotation.y = rotY + 0.35;
    smallMesh.castShadow = true;
    smallMesh.receiveShadow = true;
    this.group.add(smallMesh);
    this.rigidWorld.addReactiveProp(
      smallMesh,
      'box',
      new THREE.Vector3(0.23, 0.19, 0.23),
      4.5,
      MaterialId.WOOD,
      0.25,
      0.6
    );

    // Reactive metal canister on crate corner
    const canGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.24, 10);
    const canMesh = new THREE.Mesh(canGeo, barrelMat);
    canMesh.position.set(x - 0.32, y + 1.17, z + 0.28);
    canMesh.castShadow = true;
    this.group.add(canMesh);
    this.rigidWorld.addReactiveProp(
      canMesh,
      'sphere',
      new THREE.Vector3(0.11, 0.11, 0.11),
      0.8,
      MaterialId.METAL,
      0.42,
      0.4
    );

    this.coverNodes.push({
      position: new THREE.Vector3(x, y, z - 1.05),
      normal: new THREE.Vector3(0, 0, -1),
      crouchOnly: true,
      occupiedBy: -1
    });
    this.coverNodes.push({
      position: new THREE.Vector3(x, y, z + 1.05),
      normal: new THREE.Vector3(0, 0, 1),
      crouchOnly: true,
      occupiedBy: -1
    });
  }

  public addOverheadCable(p0: THREE.Vector3, p1: THREE.Vector3, sag = 0.85): void {
    const curvePts: THREE.Vector3[] = [];
    const segs = 12;
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const pt = new THREE.Vector3().lerpVectors(p0, p1, t);
      pt.y -= Math.sin(t * Math.PI) * sag;
      curvePts.push(pt);
    }
    const curve = new THREE.CatmullRomCurve3(curvePts);
    const tubeGeo = new THREE.TubeGeometry(curve, 12, 0.018, 5, false);
    const mesh = new THREE.Mesh(tubeGeo, this.matLib.get('metal_dark'));
    mesh.castShadow = false;
    this.group.add(mesh);
  }

  public addStreetAwningSpan(
    p0: THREE.Vector3,
    p1: THREE.Vector3,
    depth = 3.2,
    matKey = 'awning_ochre'
  ): void {
    const span = p0.distanceTo(p1);
    const geo = new THREE.PlaneGeometry(span, depth, 12, 6);
    const pos = geo.getAttribute('position');
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i) / (span * 0.5);
      const v = pos.getY(i) / (depth * 0.5);
      const droop = -0.32 * (1 - u * u * 0.85) * (1 - v * v * 0.25);
      pos.setZ(i, droop);
    }
    geo.computeVertexNormals();

    const mesh = new THREE.Mesh(geo, this.matLib.get(matKey));
    mesh.position.lerpVectors(p0, p1, 0.5);
    const angle = Math.atan2(p1.z - p0.z, p1.x - p0.x);
    mesh.rotation.order = 'YXZ';
    mesh.rotation.y = -angle;
    mesh.rotation.x = -Math.PI * 0.5 + 0.08;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.group.add(mesh);
  }

  public initAmbientMicroDetails(): void {
    // 1. Skittering street papers & dry leaves driven by wind
    const paperGeo = new THREE.PlaneGeometry(0.24, 0.18, 2, 2);
    const paperMat = this.matLib.get('awning_cream');
    for (let i = 0; i < 28; i++) {
      const mesh = new THREE.Mesh(paperGeo, paperMat);
      mesh.userData.dynamic = true;
      const basePos = new THREE.Vector3(
        this.rng.range(-28, 28),
        0.03,
        this.rng.range(-48, 42)
      );
      mesh.position.copy(basePos);
      mesh.rotation.x = -Math.PI * 0.5;
      mesh.rotation.z = this.rng.range(0, Math.PI * 2);
      this.group.add(mesh);
      this.skitterPapers.push({
        mesh,
        basePos,
        phase: this.rng.range(0, 100),
        speed: this.rng.range(0.6, 1.5)
      });
    }

    // 2. Sunlit drifting dust motes across the streets and interiors
    const moteCount = 260;
    this.dustPositions = new Float32Array(moteCount * 3);
    this.dustPhases = new Float32Array(moteCount);

    for (let i = 0; i < moteCount; i++) {
      this.dustPositions[i * 3] = this.rng.range(-36, 36);
      this.dustPositions[i * 3 + 1] = this.rng.range(0.4, 6.2);
      this.dustPositions[i * 3 + 2] = this.rng.range(-54, 46);
      this.dustPhases[i] = this.rng.range(0, Math.PI * 2);
    }

    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(this.dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xf4e4c6,
      size: 0.055,
      transparent: true,
      opacity: 0.48,
      depthWrite: false
    });
    this.dustMotes = new THREE.Points(dustGeo, dustMat);
    this.group.add(this.dustMotes);
  }

  public updateEnvironmentalMotion(time: number, dt: number): void {
    // Update skittering papers
    for (let i = 0; i < this.skitterPapers.length; i++) {
      const p = this.skitterPapers[i];
      const t = time * p.speed + p.phase;
      const gust = Math.max(0, Math.sin(t * 0.7));
      p.mesh.position.x = p.basePos.x + Math.sin(t * 0.45) * 1.4;
      p.mesh.position.z = p.basePos.z + Math.cos(t * 0.35) * 1.4;
      p.mesh.position.y = 0.025 + gust * 0.09 * Math.abs(Math.sin(t * 3.5));
      p.mesh.rotation.z += dt * gust * 1.8;
    }

    // Drift dust motes gently
    if (this.dustMotes) {
      const attr = this.dustMotes.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < this.dustPhases.length; i++) {
        const ph = this.dustPhases[i];
        let x = this.dustPositions[i * 3] + Math.sin(time * 0.4 + ph) * 0.004;
        let y = this.dustPositions[i * 3 + 1] + Math.cos(time * 0.6 + ph) * 0.002;
        if (y > 6.5) y = 0.5;
        if (y < 0.3) y = 6.2;
        this.dustPositions[i * 3] = x;
        this.dustPositions[i * 3 + 1] = y;
      }
      attr.needsUpdate = true;
    }
  }
}
