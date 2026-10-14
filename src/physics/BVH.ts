import * as THREE from 'three';

export enum MaterialId {
  CONCRETE = 0,
  PLASTER = 1,
  BRICK = 2,
  METAL = 3,
  WOOD = 4,
  CLOTH = 5,
  ROAD = 6,
  GLASS = 7,
  SANDBAG = 8,
  DIRT = 9,
  TILE = 10,
  FOLIAGE = 11
}

export interface RaycastHit {
  hit: boolean;
  distance: number;
  point: THREE.Vector3;
  normal: THREE.Vector3;
  triangleIndex: number;
  materialId: MaterialId;
  thickness: number;
}

export interface SweepHit {
  hit: boolean;
  toi: number; // fraction in [0, 1]
  point: THREE.Vector3;
  normal: THREE.Vector3;
  triangleIndex: number;
  materialId: MaterialId;
}

export interface ColliderTriangleInput {
  v0: THREE.Vector3;
  v1: THREE.Vector3;
  v2: THREE.Vector3;
  materialId: MaterialId;
  thickness?: number;
}

const NUM_SAH_BINS = 8;
const LEAF_THRESHOLD = 6;

export class BVH {
  public triCount = 0;
  // Flat triangle storage: 9 floats per triangle (v0, v1, v2)
  public verts!: Float32Array;
  // 3 floats per triangle (unit face normal)
  public normals!: Float32Array;
  // 6 floats per triangle (minX, minY, minZ, maxX, maxY, maxZ)
  public triBounds!: Float32Array;
  // 3 floats per triangle (centroid)
  public centroids!: Float32Array;
  public materialIds!: Uint8Array;
  public thicknesses!: Float32Array;
  public triIndices!: Int32Array;

  // Flat BVH node storage
  // nodeBounds: 6 floats per node (minX, minY, minZ, maxX, maxY, maxZ)
  public nodeBounds!: Float32Array;
  // nodeLeftFirst: left child index (if count == 0) or first triIndex offset (if count > 0)
  public nodeLeftFirst!: Int32Array;
  // nodeCount: number of triangles in leaf (0 for internal node)
  public nodeCount!: Int32Array;
  public nodeUsed = 0;

  private pendingInputs: ColliderTriangleInput[] = [];
  private traversalStack = new Int32Array(128);

  // Scratch vectors to avoid per-query GC
  private _v0 = new THREE.Vector3();
  private _v1 = new THREE.Vector3();
  private _v2 = new THREE.Vector3();
  private _e1 = new THREE.Vector3();
  private _e2 = new THREE.Vector3();
  private _p = new THREE.Vector3();
  private _t = new THREE.Vector3();
  private _q = new THREE.Vector3();
  private _closest = new THREE.Vector3();
  private _segPt = new THREE.Vector3();
  private _diff = new THREE.Vector3();

  public addTriangle(
    v0: THREE.Vector3,
    v1: THREE.Vector3,
    v2: THREE.Vector3,
    materialId: MaterialId = MaterialId.CONCRETE,
    thickness = 0.35
  ): void {
    this.pendingInputs.push({
      v0: v0.clone(),
      v1: v1.clone(),
      v2: v2.clone(),
      materialId,
      thickness
    });
  }

  public addBox(
    center: THREE.Vector3,
    size: THREE.Vector3,
    materialId: MaterialId = MaterialId.CONCRETE,
    rotationY = 0,
    thickness?: number
  ): void {
    const hx = size.x * 0.5;
    const hy = size.y * 0.5;
    const hz = size.z * 0.5;
    const autoThickness = thickness ?? Math.min(size.x, size.y, size.z);
    const cos = Math.cos(rotationY);
    const sin = Math.sin(rotationY);

    const corners: THREE.Vector3[] = [];
    const signs = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1]
    ];
    for (const [sx, sy, sz] of signs) {
      const lx = sx * hx;
      const ly = sy * hy;
      const lz = sz * hz;
      const rx = lx * cos + lz * sin + center.x;
      const ry = ly + center.y;
      const rz = -lx * sin + lz * cos + center.z;
      corners.push(new THREE.Vector3(rx, ry, rz));
    }

    const faces = [
      [0, 2, 1], [0, 3, 2], // back (-Z)
      [4, 5, 6], [4, 6, 7], // front (+Z)
      [0, 4, 7], [0, 7, 3], // left (-X)
      [1, 2, 6], [1, 6, 5], // right (+X)
      [3, 7, 6], [3, 6, 2], // top (+Y)
      [0, 1, 5], [0, 5, 4]  // bottom (-Y)
    ];

    for (const [a, b, c] of faces) {
      this.addTriangle(corners[a], corners[b], corners[c], materialId, autoThickness);
    }
  }

  public addMesh(
    geometry: THREE.BufferGeometry,
    matrixWorld: THREE.Matrix4,
    materialId: MaterialId = MaterialId.CONCRETE,
    thickness = 0.25
  ): void {
    const pos = geometry.getAttribute('position');
    if (!pos) return;
    const index = geometry.getIndex();
    const a = new THREE.Vector3();
    const b = new THREE.Vector3();
    const c = new THREE.Vector3();

    if (index) {
      for (let i = 0; i < index.count; i += 3) {
        a.fromBufferAttribute(pos, index.getX(i)).applyMatrix4(matrixWorld);
        b.fromBufferAttribute(pos, index.getX(i + 1)).applyMatrix4(matrixWorld);
        c.fromBufferAttribute(pos, index.getX(i + 2)).applyMatrix4(matrixWorld);
        this.addTriangle(a, b, c, materialId, thickness);
      }
    } else {
      for (let i = 0; i < pos.count; i += 3) {
        a.fromBufferAttribute(pos, i).applyMatrix4(matrixWorld);
        b.fromBufferAttribute(pos, i + 1).applyMatrix4(matrixWorld);
        c.fromBufferAttribute(pos, i + 2).applyMatrix4(matrixWorld);
        this.addTriangle(a, b, c, materialId, thickness);
      }
    }
  }

  public build(): void {
    const n = this.pendingInputs.length;
    this.triCount = n;
    this.verts = new Float32Array(n * 9);
    this.normals = new Float32Array(n * 3);
    this.triBounds = new Float32Array(n * 6);
    this.centroids = new Float32Array(n * 3);
    this.materialIds = new Uint8Array(n);
    this.thicknesses = new Float32Array(n);
    this.triIndices = new Int32Array(n);

    const e1 = new THREE.Vector3();
    const e2 = new THREE.Vector3();
    const norm = new THREE.Vector3();

    for (let i = 0; i < n; i++) {
      const inp = this.pendingInputs[i];
      const v0 = inp.v0;
      const v1 = inp.v1;
      const v2 = inp.v2;

      const vBase = i * 9;
      this.verts[vBase] = v0.x;
      this.verts[vBase + 1] = v0.y;
      this.verts[vBase + 2] = v0.z;
      this.verts[vBase + 3] = v1.x;
      this.verts[vBase + 4] = v1.y;
      this.verts[vBase + 5] = v1.z;
      this.verts[vBase + 6] = v2.x;
      this.verts[vBase + 7] = v2.y;
      this.verts[vBase + 8] = v2.z;

      e1.subVectors(v1, v0);
      e2.subVectors(v2, v0);
      norm.crossVectors(e1, e2).normalize();
      const nBase = i * 3;
      this.normals[nBase] = norm.x;
      this.normals[nBase + 1] = norm.y;
      this.normals[nBase + 2] = norm.z;

      const bBase = i * 6;
      this.triBounds[bBase] = Math.min(v0.x, v1.x, v2.x);
      this.triBounds[bBase + 1] = Math.min(v0.y, v1.y, v2.y);
      this.triBounds[bBase + 2] = Math.min(v0.z, v1.z, v2.z);
      this.triBounds[bBase + 3] = Math.max(v0.x, v1.x, v2.x);
      this.triBounds[bBase + 4] = Math.max(v0.y, v1.y, v2.y);
      this.triBounds[bBase + 5] = Math.max(v0.z, v1.z, v2.z);

      this.centroids[nBase] = (v0.x + v1.x + v2.x) / 3;
      this.centroids[nBase + 1] = (v0.y + v1.y + v2.y) / 3;
      this.centroids[nBase + 2] = (v0.z + v1.z + v2.z) / 3;

      this.materialIds[i] = inp.materialId;
      this.thicknesses[i] = inp.thickness ?? 0.35;
      this.triIndices[i] = i;
    }

    const maxNodes = Math.max(4, n * 2 + 4);
    this.nodeBounds = new Float32Array(maxNodes * 6);
    this.nodeLeftFirst = new Int32Array(maxNodes);
    this.nodeCount = new Int32Array(maxNodes);
    this.nodeUsed = 1;

    this.nodeLeftFirst[0] = 0;
    this.nodeCount[0] = n;
    this.updateNodeBounds(0);
    if (n > 0) {
      this.subdivide(0);
    }

    // Free temporary array
    this.pendingInputs = [];
  }

  private updateNodeBounds(nodeIdx: number): void {
    const first = this.nodeLeftFirst[nodeIdx];
    const count = this.nodeCount[nodeIdx];
    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

    for (let i = 0; i < count; i++) {
      const t = this.triIndices[first + i] * 6;
      if (this.triBounds[t] < minX) minX = this.triBounds[t];
      if (this.triBounds[t + 1] < minY) minY = this.triBounds[t + 1];
      if (this.triBounds[t + 2] < minZ) minZ = this.triBounds[t + 2];
      if (this.triBounds[t + 3] > maxX) maxX = this.triBounds[t + 3];
      if (this.triBounds[t + 4] > maxY) maxY = this.triBounds[t + 4];
      if (this.triBounds[t + 5] > maxZ) maxZ = this.triBounds[t + 5];
    }

    const nb = nodeIdx * 6;
    this.nodeBounds[nb] = minX;
    this.nodeBounds[nb + 1] = minY;
    this.nodeBounds[nb + 2] = minZ;
    this.nodeBounds[nb + 3] = maxX;
    this.nodeBounds[nb + 4] = maxY;
    this.nodeBounds[nb + 5] = maxZ;
  }

  private surfaceArea(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): number {
    const dx = Math.max(0, maxX - minX);
    const dy = Math.max(0, maxY - minY);
    const dz = Math.max(0, maxZ - minZ);
    return dx * dy + dy * dz + dz * dx;
  }

  private subdivide(nodeIdx: number): void {
    const count = this.nodeCount[nodeIdx];
    if (count <= LEAF_THRESHOLD) return;

    const first = this.nodeLeftFirst[nodeIdx];
    const nb = nodeIdx * 6;
    const parentArea = Math.max(
      1e-6,
      this.surfaceArea(
        this.nodeBounds[nb],
        this.nodeBounds[nb + 1],
        this.nodeBounds[nb + 2],
        this.nodeBounds[nb + 3],
        this.nodeBounds[nb + 4],
        this.nodeBounds[nb + 5]
      )
    );

    let bestAxis = -1;
    let bestSplitPos = 0;
    let bestCost = count; // Leaf cost baseline

    const binCounts = new Int32Array(NUM_SAH_BINS);
    const binBounds = new Float32Array(NUM_SAH_BINS * 6);

    for (let axis = 0; axis < 3; axis++) {
      let cMin = Infinity;
      let cMax = -Infinity;
      for (let i = 0; i < count; i++) {
        const c = this.centroids[this.triIndices[first + i] * 3 + axis];
        if (c < cMin) cMin = c;
        if (c > cMax) cMax = c;
      }
      if (cMax - cMin < 1e-4) continue;

      for (let b = 0; b < NUM_SAH_BINS; b++) {
        binCounts[b] = 0;
        const bb = b * 6;
        binBounds[bb] = Infinity;
        binBounds[bb + 1] = Infinity;
        binBounds[bb + 2] = Infinity;
        binBounds[bb + 3] = -Infinity;
        binBounds[bb + 4] = -Infinity;
        binBounds[bb + 5] = -Infinity;
      }

      const scale = NUM_SAH_BINS / (cMax - cMin);
      for (let i = 0; i < count; i++) {
        const triIdx = this.triIndices[first + i];
        const c = this.centroids[triIdx * 3 + axis];
        const b = Math.min(NUM_SAH_BINS - 1, Math.floor((c - cMin) * scale));
        binCounts[b]++;
        const bb = b * 6;
        const tb = triIdx * 6;
        if (this.triBounds[tb] < binBounds[bb]) binBounds[bb] = this.triBounds[tb];
        if (this.triBounds[tb + 1] < binBounds[bb + 1]) binBounds[bb + 1] = this.triBounds[tb + 1];
        if (this.triBounds[tb + 2] < binBounds[bb + 2]) binBounds[bb + 2] = this.triBounds[tb + 2];
        if (this.triBounds[tb + 3] > binBounds[bb + 3]) binBounds[bb + 3] = this.triBounds[tb + 3];
        if (this.triBounds[tb + 4] > binBounds[bb + 4]) binBounds[bb + 4] = this.triBounds[tb + 4];
        if (this.triBounds[tb + 5] > binBounds[bb + 5]) binBounds[bb + 5] = this.triBounds[tb + 5];
      }

      // Evaluate NUM_SAH_BINS - 1 split planes
      for (let s = 1; s < NUM_SAH_BINS; s++) {
        let leftCount = 0;
        let lMinX = Infinity, lMinY = Infinity, lMinZ = Infinity;
        let lMaxX = -Infinity, lMaxY = -Infinity, lMaxZ = -Infinity;
        for (let b = 0; b < s; b++) {
          if (binCounts[b] === 0) continue;
          leftCount += binCounts[b];
          const bb = b * 6;
          if (binBounds[bb] < lMinX) lMinX = binBounds[bb];
          if (binBounds[bb + 1] < lMinY) lMinY = binBounds[bb + 1];
          if (binBounds[bb + 2] < lMinZ) lMinZ = binBounds[bb + 2];
          if (binBounds[bb + 3] > lMaxX) lMaxX = binBounds[bb + 3];
          if (binBounds[bb + 4] > lMaxY) lMaxY = binBounds[bb + 4];
          if (binBounds[bb + 5] > lMaxZ) lMaxZ = binBounds[bb + 5];
        }

        let rightCount = 0;
        let rMinX = Infinity, rMinY = Infinity, rMinZ = Infinity;
        let rMaxX = -Infinity, rMaxY = -Infinity, rMaxZ = -Infinity;
        for (let b = s; b < NUM_SAH_BINS; b++) {
          if (binCounts[b] === 0) continue;
          rightCount += binCounts[b];
          const bb = b * 6;
          if (binBounds[bb] < rMinX) rMinX = binBounds[bb];
          if (binBounds[bb + 1] < rMinY) rMinY = binBounds[bb + 1];
          if (binBounds[bb + 2] < rMinZ) rMinZ = binBounds[bb + 2];
          if (binBounds[bb + 3] > rMaxX) rMaxX = binBounds[bb + 3];
          if (binBounds[bb + 4] > rMaxY) rMaxY = binBounds[bb + 4];
          if (binBounds[bb + 5] > rMaxZ) rMaxZ = binBounds[bb + 5];
        }

        if (leftCount === 0 || rightCount === 0) continue;
        const leftArea = this.surfaceArea(lMinX, lMinY, lMinZ, lMaxX, lMaxY, lMaxZ);
        const rightArea = this.surfaceArea(rMinX, rMinY, rMinZ, rMaxX, rMaxY, rMaxZ);
        const cost = 0.25 + (leftArea * leftCount + rightArea * rightCount) / parentArea;

        if (cost < bestCost) {
          bestCost = cost;
          bestAxis = axis;
          bestSplitPos = cMin + s * ((cMax - cMin) / NUM_SAH_BINS);
        }
      }
    }

    if (bestAxis === -1) return;

    // Partition in-place
    let i = first;
    let j = first + count - 1;
    while (i <= j) {
      if (this.centroids[this.triIndices[i] * 3 + bestAxis] < bestSplitPos) {
        i++;
      } else {
        const tmp = this.triIndices[i];
        this.triIndices[i] = this.triIndices[j];
        this.triIndices[j] = tmp;
        j--;
      }
    }

    const leftCount = i - first;
    if (leftCount === 0 || leftCount === count) return;

    const leftChildIdx = this.nodeUsed++;
    const rightChildIdx = this.nodeUsed++;

    this.nodeLeftFirst[leftChildIdx] = first;
    this.nodeCount[leftChildIdx] = leftCount;
    this.nodeLeftFirst[rightChildIdx] = i;
    this.nodeCount[rightChildIdx] = count - leftCount;

    this.nodeLeftFirst[nodeIdx] = leftChildIdx;
    this.nodeCount[nodeIdx] = 0;

    this.updateNodeBounds(leftChildIdx);
    this.updateNodeBounds(rightChildIdx);

    this.subdivide(leftChildIdx);
    this.subdivide(rightChildIdx);
  }

  private intersectAABB(
    nodeIdx: number,
    ox: number,
    oy: number,
    oz: number,
    invDx: number,
    invDy: number,
    invDz: number,
    maxDist: number
  ): number {
    const nb = nodeIdx * 6;
    const tx1 = (this.nodeBounds[nb] - ox) * invDx;
    const tx2 = (this.nodeBounds[nb + 3] - ox) * invDx;
    let tmin = Math.min(tx1, tx2);
    let tmax = Math.max(tx1, tx2);

    const ty1 = (this.nodeBounds[nb + 1] - oy) * invDy;
    const ty2 = (this.nodeBounds[nb + 4] - oy) * invDy;
    tmin = Math.max(tmin, Math.min(ty1, ty2));
    tmax = Math.min(tmax, Math.max(ty1, ty2));

    const tz1 = (this.nodeBounds[nb + 2] - oz) * invDz;
    const tz2 = (this.nodeBounds[nb + 5] - oz) * invDz;
    tmin = Math.max(tmin, Math.min(tz1, tz2));
    tmax = Math.min(tmax, Math.max(tz1, tz2));

    if (tmax >= Math.max(0, tmin) && tmin < maxDist) {
      return Math.max(0, tmin);
    }
    return Infinity;
  }

  public raycast(
    origin: THREE.Vector3,
    dir: THREE.Vector3,
    maxDist = 500,
    outHit?: RaycastHit
  ): RaycastHit {
    const res: RaycastHit = outHit ?? {
      hit: false,
      distance: maxDist,
      point: new THREE.Vector3(),
      normal: new THREE.Vector3(0, 1, 0),
      triangleIndex: -1,
      materialId: MaterialId.CONCRETE,
      thickness: 0.35
    };
    res.hit = false;
    res.distance = maxDist;
    res.triangleIndex = -1;

    if (this.triCount === 0) return res;

    const ox = origin.x;
    const oy = origin.y;
    const oz = origin.z;
    const invDx = Math.abs(dir.x) > 1e-8 ? 1 / dir.x : 1e8;
    const invDy = Math.abs(dir.y) > 1e-8 ? 1 / dir.y : 1e8;
    const invDz = Math.abs(dir.z) > 1e-8 ? 1 / dir.z : 1e8;

    let stackPtr = 0;
    this.traversalStack[stackPtr++] = 0;

    while (stackPtr > 0) {
      const nodeIdx = this.traversalStack[--stackPtr];
      if (this.intersectAABB(nodeIdx, ox, oy, oz, invDx, invDy, invDz, res.distance) === Infinity) {
        continue;
      }

      const count = this.nodeCount[nodeIdx];
      if (count > 0) {
        const first = this.nodeLeftFirst[nodeIdx];
        for (let i = 0; i < count; i++) {
          const triIdx = this.triIndices[first + i];
          const t = this.rayTriangleIntersect(origin, dir, triIdx, res.distance);
          if (t > 1e-5 && t < res.distance) {
            res.hit = true;
            res.distance = t;
            res.triangleIndex = triIdx;
            res.materialId = this.materialIds[triIdx];
            res.thickness = this.thicknesses[triIdx];
            const nb = triIdx * 3;
            res.normal.set(this.normals[nb], this.normals[nb + 1], this.normals[nb + 2]);
            if (res.normal.dot(dir) > 0) {
              res.normal.negate();
            }
          }
        }
      } else {
        const left = this.nodeLeftFirst[nodeIdx];
        const right = left + 1;
        const dLeft = this.intersectAABB(left, ox, oy, oz, invDx, invDy, invDz, res.distance);
        const dRight = this.intersectAABB(right, ox, oy, oz, invDx, invDy, invDz, res.distance);

        if (dLeft < dRight) {
          if (dRight < Infinity) this.traversalStack[stackPtr++] = right;
          if (dLeft < Infinity) this.traversalStack[stackPtr++] = left;
        } else {
          if (dLeft < Infinity) this.traversalStack[stackPtr++] = left;
          if (dRight < Infinity) this.traversalStack[stackPtr++] = right;
        }
      }
    }

    if (res.hit) {
      res.point.copy(origin).addScaledVector(dir, res.distance);
    }
    return res;
  }

  /** Raycast returning all intersections sorted by distance (for bullet penetration & audio occlusion) */
  public raycastAll(origin: THREE.Vector3, dir: THREE.Vector3, maxDist: number): RaycastHit[] {
    const hits: RaycastHit[] = [];
    if (this.triCount === 0) return hits;

    const ox = origin.x;
    const oy = origin.y;
    const oz = origin.z;
    const invDx = Math.abs(dir.x) > 1e-8 ? 1 / dir.x : 1e8;
    const invDy = Math.abs(dir.y) > 1e-8 ? 1 / dir.y : 1e8;
    const invDz = Math.abs(dir.z) > 1e-8 ? 1 / dir.z : 1e8;

    let stackPtr = 0;
    this.traversalStack[stackPtr++] = 0;

    while (stackPtr > 0) {
      const nodeIdx = this.traversalStack[--stackPtr];
      if (this.intersectAABB(nodeIdx, ox, oy, oz, invDx, invDy, invDz, maxDist) === Infinity) {
        continue;
      }

      const count = this.nodeCount[nodeIdx];
      if (count > 0) {
        const first = this.nodeLeftFirst[nodeIdx];
        for (let i = 0; i < count; i++) {
          const triIdx = this.triIndices[first + i];
          const t = this.rayTriangleIntersect(origin, dir, triIdx, maxDist);
          if (t > 1e-4 && t < maxDist) {
            const nb = triIdx * 3;
            const normal = new THREE.Vector3(this.normals[nb], this.normals[nb + 1], this.normals[nb + 2]);
            if (normal.dot(dir) > 0) normal.negate();
            hits.push({
              hit: true,
              distance: t,
              point: origin.clone().addScaledVector(dir, t),
              normal,
              triangleIndex: triIdx,
              materialId: this.materialIds[triIdx],
              thickness: this.thicknesses[triIdx]
            });
          }
        }
      } else {
        const left = this.nodeLeftFirst[nodeIdx];
        this.traversalStack[stackPtr++] = left + 1;
        this.traversalStack[stackPtr++] = left;
      }
    }

    hits.sort((a, b) => a.distance - b.distance);
    return hits;
  }

  public segmentCast(p0: THREE.Vector3, p1: THREE.Vector3, outHit?: RaycastHit): RaycastHit {
    this._diff.subVectors(p1, p0);
    const len = this._diff.length();
    if (len < 1e-6) {
      const res = outHit ?? {
        hit: false,
        distance: 0,
        point: p0.clone(),
        normal: new THREE.Vector3(0, 1, 0),
        triangleIndex: -1,
        materialId: MaterialId.CONCRETE,
        thickness: 0.35
      };
      res.hit = false;
      return res;
    }
    this._diff.multiplyScalar(1 / len);
    return this.raycast(p0, this._diff, len, outHit);
  }

  private rayTriangleIntersect(
    origin: THREE.Vector3,
    dir: THREE.Vector3,
    triIdx: number,
    maxDist: number
  ): number {
    const vb = triIdx * 9;
    this._v0.set(this.verts[vb], this.verts[vb + 1], this.verts[vb + 2]);
    this._v1.set(this.verts[vb + 3], this.verts[vb + 4], this.verts[vb + 5]);
    this._v2.set(this.verts[vb + 6], this.verts[vb + 7], this.verts[vb + 8]);

    this._e1.subVectors(this._v1, this._v0);
    this._e2.subVectors(this._v2, this._v0);
    this._p.crossVectors(dir, this._e2);
    const det = this._e1.dot(this._p);
    if (Math.abs(det) < 1e-8) return Infinity;

    const invDet = 1.0 / det;
    this._t.subVectors(origin, this._v0);
    const u = this._t.dot(this._p) * invDet;
    if (u < 0 || u > 1) return Infinity;

    this._q.crossVectors(this._t, this._e1);
    const v = dir.dot(this._q) * invDet;
    if (v < 0 || u + v > 1) return Infinity;

    const t = this._e2.dot(this._q) * invDet;
    if (t > 1e-5 && t < maxDist) return t;
    return Infinity;
  }

  /** Collect triangle indices overlapping an AABB */
  public overlapAABB(
    minX: number,
    minY: number,
    minZ: number,
    maxX: number,
    maxY: number,
    maxZ: number,
    outTris: number[]
  ): void {
    outTris.length = 0;
    if (this.triCount === 0) return;

    let stackPtr = 0;
    this.traversalStack[stackPtr++] = 0;

    while (stackPtr > 0) {
      const nodeIdx = this.traversalStack[--stackPtr];
      const nb = nodeIdx * 6;
      if (
        this.nodeBounds[nb] > maxX ||
        this.nodeBounds[nb + 3] < minX ||
        this.nodeBounds[nb + 1] > maxY ||
        this.nodeBounds[nb + 4] < minY ||
        this.nodeBounds[nb + 2] > maxZ ||
        this.nodeBounds[nb + 5] < minZ
      ) {
        continue;
      }

      const count = this.nodeCount[nodeIdx];
      if (count > 0) {
        const first = this.nodeLeftFirst[nodeIdx];
        for (let i = 0; i < count; i++) {
          const triIdx = this.triIndices[first + i];
          const tb = triIdx * 6;
          if (
            this.triBounds[tb] <= maxX &&
            this.triBounds[tb + 3] >= minX &&
            this.triBounds[tb + 1] <= maxY &&
            this.triBounds[tb + 4] >= minY &&
            this.triBounds[tb + 2] <= maxZ &&
            this.triBounds[tb + 5] >= minZ
          ) {
            outTris.push(triIdx);
          }
        }
      } else {
        const left = this.nodeLeftFirst[nodeIdx];
        this.traversalStack[stackPtr++] = left + 1;
        this.traversalStack[stackPtr++] = left;
      }
    }
  }

  public overlapSphere(center: THREE.Vector3, radius: number, outTris: number[]): void {
    this.overlapAABB(
      center.x - radius,
      center.y - radius,
      center.z - radius,
      center.x + radius,
      center.y + radius,
      center.z + radius,
      outTris
    );
  }

  /** Closest point on triangle triIdx to p, written into out */
  public closestPointOnTriangle(p: THREE.Vector3, triIdx: number, out: THREE.Vector3): THREE.Vector3 {
    const vb = triIdx * 9;
    const ax = this.verts[vb], ay = this.verts[vb + 1], az = this.verts[vb + 2];
    const bx = this.verts[vb + 3], by = this.verts[vb + 4], bz = this.verts[vb + 5];
    const cx = this.verts[vb + 6], cy = this.verts[vb + 7], cz = this.verts[vb + 8];

    const abx = bx - ax, aby = by - ay, abz = bz - az;
    const acx = cx - ax, acy = cy - ay, acz = cz - az;
    const apx = p.x - ax, apy = p.y - ay, apz = p.z - az;

    const d1 = abx * apx + aby * apy + abz * apz;
    const d2 = acx * apx + acy * apy + acz * apz;
    if (d1 <= 0 && d2 <= 0) {
      return out.set(ax, ay, az);
    }

    const bpx = p.x - bx, bpy = p.y - by, bpz = p.z - bz;
    const d3 = abx * bpx + aby * bpy + abz * bpz;
    const d4 = acx * bpx + acy * bpy + acz * bpz;
    if (d3 >= 0 && d4 <= d3) {
      return out.set(bx, by, bz);
    }

    const vc = d1 * d4 - d3 * d2;
    if (vc <= 0 && d1 >= 0 && d3 <= 0) {
      const v = d1 / (d1 - d3);
      return out.set(ax + v * abx, ay + v * aby, az + v * abz);
    }

    const cpx = p.x - cx, cpy = p.y - cy, cpz = p.z - cz;
    const d5 = abx * cpx + aby * cpy + abz * cpz;
    const d6 = acx * cpx + acy * cpy + acz * cpz;
    if (d6 >= 0 && d5 <= d6) {
      return out.set(cx, cy, cz);
    }

    const vb2 = d5 * d2 - d1 * d6;
    if (vb2 <= 0 && d2 >= 0 && d6 <= 0) {
      const w = d2 / (d2 - d6);
      return out.set(ax + w * acx, ay + w * acy, az + w * acz);
    }

    const va = d3 * d6 - d5 * d4;
    if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
      const w = (d4 - d3) / (d4 - d3 + (d5 - d6));
      return out.set(bx + w * (cx - bx), by + w * (cy - by), bz + w * (cz - bz));
    }

    const denom = 1.0 / (va + vb2 + vc);
    const v = vb2 * denom;
    const w = vc * denom;
    return out.set(ax + abx * v + acx * w, ay + aby * v + acy * w, az + abz * v + acz * w);
  }

  public closestPoint(
    point: THREE.Vector3,
    maxRadius: number,
    outPoint?: THREE.Vector3,
    outNormal?: THREE.Vector3
  ): { found: boolean; distanceSq: number; triangleIndex: number; materialId: MaterialId } {
    const candidates: number[] = [];
    this.overlapSphere(point, maxRadius, candidates);
    let bestDistSq = maxRadius * maxRadius;
    let bestTri = -1;

    for (let i = 0; i < candidates.length; i++) {
      const triIdx = candidates[i];
      this.closestPointOnTriangle(point, triIdx, this._closest);
      const dSq = point.distanceToSquared(this._closest);
      if (dSq < bestDistSq) {
        bestDistSq = dSq;
        bestTri = triIdx;
        if (outPoint) outPoint.copy(this._closest);
        if (outNormal) {
          this._diff.subVectors(point, this._closest);
          const d = Math.sqrt(dSq);
          if (d > 1e-5) {
            outNormal.copy(this._diff).multiplyScalar(1 / d);
          } else {
            const nb = triIdx * 3;
            outNormal.set(this.normals[nb], this.normals[nb + 1], this.normals[nb + 2]);
          }
        }
      }
    }

    return {
      found: bestTri !== -1,
      distanceSq: bestDistSq,
      triangleIndex: bestTri,
      materialId: bestTri !== -1 ? this.materialIds[bestTri] : MaterialId.CONCRETE
    };
  }

  /** Sphere cast along dir up to maxDist */
  public sphereCast(
    origin: THREE.Vector3,
    dir: THREE.Vector3,
    radius: number,
    maxDist: number,
    outHit?: SweepHit
  ): SweepHit {
    const res: SweepHit = outHit ?? {
      hit: false,
      toi: 1.0,
      point: new THREE.Vector3(),
      normal: new THREE.Vector3(0, 1, 0),
      triangleIndex: -1,
      materialId: MaterialId.CONCRETE
    };
    res.hit = false;
    res.toi = 1.0;
    res.triangleIndex = -1;

    const endX = origin.x + dir.x * maxDist;
    const endY = origin.y + dir.y * maxDist;
    const endZ = origin.z + dir.z * maxDist;

    const minX = Math.min(origin.x, endX) - radius;
    const minY = Math.min(origin.y, endY) - radius;
    const minZ = Math.min(origin.z, endZ) - radius;
    const maxX = Math.max(origin.x, endX) + radius;
    const maxY = Math.max(origin.y, endY) + radius;
    const maxZ = Math.max(origin.z, endZ) + radius;

    const candidates: number[] = [];
    this.overlapAABB(minX, minY, minZ, maxX, maxY, maxZ, candidates);
    if (candidates.length === 0) return res;

    const steps = Math.max(2, Math.ceil(maxDist / (radius * 0.45)));
    for (let s = 1; s <= steps; s++) {
      const frac = s / steps;
      this._segPt.set(
        origin.x + dir.x * maxDist * frac,
        origin.y + dir.y * maxDist * frac,
        origin.z + dir.z * maxDist * frac
      );
      for (let i = 0; i < candidates.length; i++) {
        const triIdx = candidates[i];
        this.closestPointOnTriangle(this._segPt, triIdx, this._closest);
        const dSq = this._segPt.distanceToSquared(this._closest);
        if (dSq < radius * radius) {
          res.hit = true;
          res.toi = (s - 1) / steps;
          res.point.copy(this._closest);
          this._diff.subVectors(this._segPt, this._closest);
          const len = this._diff.length();
          if (len > 1e-5) {
            res.normal.copy(this._diff).multiplyScalar(1 / len);
          } else {
            const nb = triIdx * 3;
            res.normal.set(this.normals[nb], this.normals[nb + 1], this.normals[nb + 2]);
          }
          res.triangleIndex = triIdx;
          res.materialId = this.materialIds[triIdx];
          return res;
        }
      }
    }
    return res;
  }

  public createDebugMesh(): THREE.LineSegments {
    const positions: number[] = [];
    const colors: number[] = [];
    const maxDepthNodes = Math.min(this.nodeUsed, 512);

    for (let i = 0; i < maxDepthNodes; i++) {
      if (this.nodeCount[i] === 0 && i > 64) continue;
      const nb = i * 6;
      const x0 = this.nodeBounds[nb], y0 = this.nodeBounds[nb + 1], z0 = this.nodeBounds[nb + 2];
      const x1 = this.nodeBounds[nb + 3], y1 = this.nodeBounds[nb + 4], z1 = this.nodeBounds[nb + 5];
      const isLeaf = this.nodeCount[i] > 0;
      const r = isLeaf ? 0.15 : 0.9;
      const g = isLeaf ? 0.95 : 0.5;
      const b = isLeaf ? 0.35 : 0.1;

      const edges = [
        [x0, y0, z0, x1, y0, z0], [x1, y0, z0, x1, y0, z1], [x1, y0, z1, x0, y0, z1], [x0, y0, z1, x0, y0, z0],
        [x0, y1, z0, x1, y1, z0], [x1, y1, z0, x1, y1, z1], [x1, y1, z1, x0, y1, z1], [x0, y1, z1, x0, y1, z0],
        [x0, y0, z0, x0, y1, z0], [x1, y0, z0, x1, y1, z0], [x1, y0, z1, x1, y1, z1], [x0, y0, z1, x0, y1, z1]
      ];
      for (const e of edges) {
        positions.push(e[0], e[1], e[2], e[3], e[4], e[5]);
        colors.push(r, g, b, r, g, b);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const mat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.55 });
    return new THREE.LineSegments(geo, mat);
  }
}
