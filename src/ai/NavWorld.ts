import * as THREE from 'three';
import { BVH } from '../physics/BVH';
import { CoverNode } from '../world/PropSystem';

/**
 * Walkable Navigation Grid, A* Pathfinding, String-Pulling Smoothing, and Tactical Cover Evaluator
 */
export class NavWorld {
  public readonly minX = -38;
  public readonly maxX = 38;
  public readonly minZ = -52;
  public readonly maxZ = 52;
  public readonly cellSize = 1.6;
  public readonly cols: number;
  public readonly rows: number;

  public walkable: Uint8Array;
  public heights: Float32Array;
  public patrolWaypoints: THREE.Vector3[] = [];

  private _rayOrigin = new THREE.Vector3();
  private _down = new THREE.Vector3(0, -1, 0);
  private _up = new THREE.Vector3(0, 1, 0);
  private _p0 = new THREE.Vector3();
  private _p1 = new THREE.Vector3();

  constructor(
    private bvh: BVH,
    public coverNodes: CoverNode[]
  ) {
    this.cols = Math.floor((this.maxX - this.minX) / this.cellSize);
    this.rows = Math.floor((this.maxZ - this.minZ) / this.cellSize);
    this.walkable = new Uint8Array(this.cols * this.rows);
    this.heights = new Float32Array(this.cols * this.rows);
    this.bakeWalkableGrid();
  }

  private bakeWalkableGrid(): void {
    const candidateTris: number[] = [];
    for (let r = 0; r < this.rows; r++) {
      const wz = this.minZ + (r + 0.5) * this.cellSize;
      for (let c = 0; c < this.cols; c++) {
        const wx = this.minX + (c + 0.5) * this.cellSize;
        const idx = r * this.cols + c;

        // Raycast downward from y = 2.6m (under building ceilings/awnings) to find ground floor
        this._rayOrigin.set(wx, 2.5, wz);
        const groundHit = this.bvh.raycast(this._rayOrigin, this._down, 3.0);
        if (!groundHit.hit || groundHit.normal.y < 0.72 || groundHit.point.y > 0.65) {
          this.walkable[idx] = 0;
          continue;
        }

        const gy = groundHit.point.y;
        // Check capsule clearance from gy + 0.45 to gy + 1.75
        this.bvh.overlapAABB(
          wx - 0.45,
          gy + 0.48,
          wz - 0.45,
          wx + 0.45,
          gy + 1.72,
          wz + 0.45,
          candidateTris
        );

        if (candidateTris.length > 0) {
          this.walkable[idx] = 0;
          continue;
        }

        // Check overhead headroom
        this._rayOrigin.set(wx, gy + 0.25, wz);
        const ceilHit = this.bvh.raycast(this._rayOrigin, this._up, 1.65);
        if (ceilHit.hit) {
          this.walkable[idx] = 0;
          continue;
        }

        this.walkable[idx] = 1;
        this.heights[idx] = gy;
      }
    }

    // Strategic patrol waypoints covering Central Market Street, Archway Plaza, West Souk, East Alley, and Interiors
    const rawWaypoints: Array<[number, number]> = [
      [0, -38],
      [-5.5, -24],
      [5.5, -22],
      [0, -12],
      [-5.5, 0],
      [5.5, 2],
      [0, 14],
      [0, 28],
      [-9, 36],
      [9, 36],
      [-23, -30],
      [-23, -10],
      [-23, 14],
      [23, -28],
      [23, -6],
      [23, 16],
      [-15.5, -4.5], // West interior shop
      [15.5, 2.5]    // East interior tea house
    ];

    for (const [wx, wz] of rawWaypoints) {
      this.patrolWaypoints.push(new THREE.Vector3(wx, 0.05, wz));
    }
  }

  public worldToCell(x: number, z: number): { c: number; r: number } {
    const c = Math.max(0, Math.min(this.cols - 1, Math.floor((x - this.minX) / this.cellSize)));
    const r = Math.max(0, Math.min(this.rows - 1, Math.floor((z - this.minZ) / this.cellSize)));
    return { c, r };
  }

  public cellToWorld(c: number, r: number, out = new THREE.Vector3()): THREE.Vector3 {
    const idx = r * this.cols + c;
    return out.set(
      this.minX + (c + 0.5) * this.cellSize,
      this.heights[idx] || 0.05,
      this.minZ + (r + 0.5) * this.cellSize
    );
  }

  private findNearestWalkableCell(startC: number, startR: number): { c: number; r: number } {
    if (this.walkable[startR * this.cols + startC]) return { c: startC, r: startR };
    for (let rad = 1; rad <= 6; rad++) {
      for (let dr = -rad; dr <= rad; dr++) {
        for (let dc = -rad; dc <= rad; dc++) {
          const nc = startC + dc;
          const nr = startR + dr;
          if (nc >= 0 && nc < this.cols && nr >= 0 && nr < this.rows) {
            if (this.walkable[nr * this.cols + nc]) {
              return { c: nc, r: nr };
            }
          }
        }
      }
    }
    return { c: startC, r: startR };
  }

  /**
   * A* Pathfinding with 8-connected neighbors and Line-of-Sight string-pulling smoothing
   */
  public findPath(start: THREE.Vector3, goal: THREE.Vector3): THREE.Vector3[] {
    const rawS = this.worldToCell(start.x, start.z);
    const rawG = this.worldToCell(goal.x, goal.z);
    const s = this.findNearestWalkableCell(rawS.c, rawS.r);
    const g = this.findNearestWalkableCell(rawG.c, rawG.r);

    const startIdx = s.r * this.cols + s.c;
    const goalIdx = g.r * this.cols + g.c;
    if (startIdx === goalIdx) return [goal.clone()];

    const total = this.cols * this.rows;
    const gScore = new Float32Array(total).fill(Infinity);
    const fScore = new Float32Array(total).fill(Infinity);
    const cameFrom = new Int32Array(total).fill(-1);
    const closed = new Uint8Array(total);
    const open: number[] = [startIdx];

    gScore[startIdx] = 0;
    fScore[startIdx] = Math.hypot(g.c - s.c, g.r - s.r);

    const dirs = [
      [-1, 0, 1], [1, 0, 1], [0, -1, 1], [0, 1, 1],
      [-1, -1, 1.414], [1, -1, 1.414], [-1, 1, 1.414], [1, 1, 1.414]
    ];

    let iterations = 0;
    while (open.length > 0 && iterations < 900) {
      iterations++;
      let bestOpenPos = 0;
      let current = open[0];
      let bestF = fScore[current];
      for (let i = 1; i < open.length; i++) {
        const node = open[i];
        if (fScore[node] < bestF) {
          bestF = fScore[node];
          current = node;
          bestOpenPos = i;
        }
      }

      if (current === goalIdx) {
        break;
      }

      open.splice(bestOpenPos, 1);
      closed[current] = 1;

      const cr = Math.floor(current / this.cols);
      const cc = current % this.cols;

      for (const [dc, dr, cost] of dirs) {
        const nc = cc + dc;
        const nr = cr + dr;
        if (nc < 0 || nc >= this.cols || nr < 0 || nr >= this.rows) continue;
        const nIdx = nr * this.cols + nc;
        if (!this.walkable[nIdx] || closed[nIdx]) continue;

        // Prevent corner cutting on diagonals
        if (dc !== 0 && dr !== 0) {
          if (!this.walkable[cr * this.cols + nc] || !this.walkable[nr * this.cols + cc]) {
            continue;
          }
        }

        const tentativeG = gScore[current] + cost;
        if (tentativeG < gScore[nIdx]) {
          cameFrom[nIdx] = current;
          gScore[nIdx] = tentativeG;
          fScore[nIdx] = tentativeG + Math.hypot(g.c - nc, g.r - nr);
          if (!open.includes(nIdx)) {
            open.push(nIdx);
          }
        }
      }
    }

    if (cameFrom[goalIdx] === -1) {
      return [goal.clone()];
    }

    const rawPath: THREE.Vector3[] = [];
    let curr = goalIdx;
    while (curr !== -1 && curr !== startIdx) {
      const r = Math.floor(curr / this.cols);
      const c = curr % this.cols;
      rawPath.push(this.cellToWorld(c, r, new THREE.Vector3()));
      curr = cameFrom[curr];
    }
    rawPath.reverse();

    // String-pulling smoothing so paths don't zig-zag on grid cells
    if (rawPath.length <= 2) return rawPath;
    const smoothed: THREE.Vector3[] = [rawPath[0]];
    let anchor = 0;
    for (let i = 2; i < rawPath.length; i++) {
      this._p0.copy(rawPath[anchor]).setY(0.8);
      this._p1.copy(rawPath[i]).setY(0.8);
      const hit = this.bvh.segmentCast(this._p0, this._p1);
      if (hit.hit) {
        smoothed.push(rawPath[i - 1]);
        anchor = i - 1;
      }
    }
    smoothed.push(rawPath[rawPath.length - 1]);
    return smoothed;
  }

  /**
   * Score tactical cover nodes based on distance, threat occlusion, angle, and ally occupancy
   */
  public findBestCover(
    botId: number,
    botPos: THREE.Vector3,
    threatPos: THREE.Vector3
  ): CoverNode | null {
    let bestNode: CoverNode | null = null;
    let bestScore = -Infinity;

    for (let i = 0; i < this.coverNodes.length; i++) {
      const node = this.coverNodes[i];
      if (node.occupiedBy !== -1 && node.occupiedBy !== botId) continue;

      const distToBot = botPos.distanceTo(node.position);
      if (distToBot > 24) continue;

      const distToThreat = threatPos.distanceTo(node.position);
      if (distToThreat < 5.5) continue;

      // Cover normal should face away from the threat
      const toThreat = this._p0.subVectors(threatPos, node.position).normalize();
      const align = node.normal.dot(toThreat);
      if (align > -0.25) continue; // Exposed side of cover!

      // Verify crouched eye at cover node is occluded from threat's standing eye
      const crouchedEye = this._p0.copy(node.position).setY(node.position.y + 0.9);
      const threatEye = this._p1.copy(threatPos).setY(threatPos.y + 1.55);
      const los = this.bvh.segmentCast(crouchedEye, threatEye);
      const occlusionBonus = los.hit ? 35 : -20;

      const score = occlusionBonus - distToBot * 1.4 - Math.abs(distToThreat - 16) * 0.5;
      if (score > bestScore) {
        bestScore = score;
        bestNode = node;
      }
    }

    return bestNode;
  }

  public createDebugMesh(): THREE.Group {
    const g = new THREE.Group();
    const positions: number[] = [];
    const colors: number[] = [];

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const idx = r * this.cols + c;
        if (!this.walkable[idx]) continue;
        const p = this.cellToWorld(c, r);
        positions.push(p.x - 0.3, p.y + 0.08, p.z, p.x + 0.3, p.y + 0.08, p.z);
        positions.push(p.x, p.y + 0.08, p.z - 0.3, p.x, p.y + 0.08, p.z + 0.3);
        colors.push(0.2, 0.85, 1.0, 0.2, 0.85, 1.0, 0.2, 0.85, 1.0, 0.2, 0.85, 1.0);
      }
    }

    // Also visualize cover nodes as vertical markers
    for (const cov of this.coverNodes) {
      positions.push(
        cov.position.x,
        cov.position.y,
        cov.position.z,
        cov.position.x,
        cov.position.y + 1.2,
        cov.position.z
      );
      colors.push(1.0, 0.8, 0.1, 1.0, 0.8, 0.1);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const mat = new THREE.LineBasicMaterial({ vertexColors: true });
    g.add(new THREE.LineSegments(geo, mat));
    return g;
  }
}
