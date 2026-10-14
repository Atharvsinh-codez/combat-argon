import * as THREE from 'three';
import { BVH } from '../physics/BVH';
import { RigidWorld } from '../physics/RigidWorld';
import { SeededRandom } from '../core/SeededRandom';
import { Settings } from '../core/Settings';
import { Input } from '../core/Input';
import { MapGenerator } from '../world/MapGenerator';
import { NavWorld } from '../ai/NavWorld';
import { BotCombatant } from '../ai/BotBrain';
import { Player } from '../game/Player';
import { CombatantTarget, DamageSystem, HitZone } from '../game/DamageSystem';
import { EffectsSystem } from '../game/EffectsSystem';
import { SpatialAudio } from '../audio/SpatialAudio';
import { HUD, CombatantStats } from '../ui/HUD';

export type GameModeState = 'title' | 'playing' | 'paused' | 'ended';

/**
 * Orchestrates the 4v4 Team Deathmatch (Player + 3 Alpha Friendly Bots vs 4 Bravo Enemy Bots),
 * Spawns/Respawns, Score Tracking, Kill Feed, Zone Callouts, and Live Title Camera Flythrough.
 */
export class MatchDirector {
  public mode: GameModeState = 'title';
  public alphaScore = 0;
  public bravoScore = 0;
  public readonly scoreLimit = 30;
  public matchTimeRemaining = 300; // 5:00

  public bots: BotCombatant[] = [];
  public allTargets: CombatantTarget[] = [];

  public playerStats: CombatantStats = {
    name: 'VANGUARD-1 (YOU)',
    team: 'alpha',
    kills: 0,
    deaths: 0,
    assists: 0,
    headshots: 0,
    shotsFired: 0,
    shotsHit: 0
  };
  public botStats = new Map<string, CombatantStats>();

  private flythroughAngle = 0;
  private simTimeRef = 0;
  private onMatchEnded?: (victory: boolean, alpha: number, bravo: number) => void;

  constructor(
    private scene: THREE.Scene,
    private bvh: BVH,
    private rigidWorld: RigidWorld,
    private navWorld: NavWorld,
    private mapGen: MapGenerator,
    private settings: Settings,
    private player: Player,
    private damageSystem: DamageSystem,
    private effects: EffectsSystem,
    private spatialAudio: SpatialAudio,
    private hud: HUD,
    private rng: SeededRandom,
    onMatchEnded?: (victory: boolean, alpha: number, bravo: number) => void
  ) {
    this.onMatchEnded = onMatchEnded;
    this.spawnAllBots();
    this.bindCombatCallbacks();
  }

  private spawnAllBots(): void {
    const alphaNames = ['CPL. REYES', 'SGT. KOWALSKI', 'SPC. HASSAN'];
    const bravoNames = [
      'OPFOR-1 // VIPER',
      'OPFOR-2 // DUSK',
      'OPFOR-3 // SCORPION',
      'OPFOR-4 // NOMAD'
    ];

    this.allTargets = [this.player];

    // 3 Friendly Alpha Bots
    for (let i = 0; i < 3; i++) {
      const sp = this.mapGen.alphaSpawns[(i + 1) % this.mapGen.alphaSpawns.length];
      const bot = new BotCombatant(
        i + 1,
        alphaNames[i],
        'alpha',
        sp,
        this.scene,
        this.rng.fork(`alpha_${i}`),
        i
      );
      this.bots.push(bot);
      this.allTargets.push(bot);
      this.botStats.set(bot.id, {
        name: bot.name,
        team: 'alpha',
        kills: 0,
        deaths: 0,
        assists: 0,
        headshots: 0,
        shotsFired: 0,
        shotsHit: 0
      });
    }

    // 4 Enemy Bravo Bots
    for (let i = 0; i < 4; i++) {
      const sp = this.mapGen.bravoSpawns[i % this.mapGen.bravoSpawns.length];
      const bot = new BotCombatant(
        i + 10,
        bravoNames[i],
        'bravo',
        sp,
        this.scene,
        this.rng.fork(`bravo_${i}`),
        i + 1
      );
      this.bots.push(bot);
      this.allTargets.push(bot);
      this.botStats.set(bot.id, {
        name: bot.name,
        team: 'bravo',
        kills: 0,
        deaths: 0,
        assists: 0,
        headshots: 0,
        shotsFired: 0,
        shotsHit: 0
      });
    }
  }

  private bindCombatCallbacks(): void {
    this.player.onShotOutcome = (outcome) => {
      this.playerStats.shotsFired++;
      if (outcome.hitTarget) {
        this.playerStats.shotsHit++;
        const isHead = outcome.hitZone === 'head';
        this.hud.triggerHitMarker(isHead, outcome.killed);
        this.spatialAudio.synth.playUISound(
          outcome.killed ? 'kill' : isHead ? 'headshot' : 'hit'
        );
      }
    };

    this.player.onKilledBy = (killerName) => {
      this.playerStats.deaths++;
      this.bravoScore++;
      this.hud.pushKillFeed(
        killerName,
        'bravo',
        this.player.name,
        'alpha',
        false,
        this.simTimeRef
      );
      if (this.bravoScore >= this.scoreLimit) {
        this.endMatch();
      }
    };

    for (const bot of this.bots) {
      bot.onEliminated = (
        victim: BotCombatant,
        killerId: string,
        killerName: string,
        killerTeam: 'alpha' | 'bravo',
        hitZone: HitZone
      ) => {
        const isHead = hitZone === 'head';
        const vStats = this.botStats.get(victim.id);
        if (vStats) vStats.deaths++;

        const kStats =
          killerId === 'player' ? this.playerStats : this.botStats.get(killerId);
        if (kStats) {
          kStats.kills++;
          if (isHead) kStats.headshots++;
        }

        if (killerTeam === 'alpha') {
          this.alphaScore++;
        } else {
          this.bravoScore++;
        }

        // Alert nearby teammates of the elimination
        for (const mate of this.bots) {
          if (mate.team === victim.team && mate.isAlive) {
            mate.shareTeamTargetInfo(victim.controller.position);
          }
        }

        this.hud.pushKillFeed(
          killerName,
          killerTeam,
          victim.name,
          victim.team,
          isHead,
          this.simTimeRef
        );

        if (this.alphaScore >= this.scoreLimit || this.bravoScore >= this.scoreLimit) {
          this.endMatch();
        }
      };
    }
  }

  public startNewMatch(): void {
    this.alphaScore = 0;
    this.bravoScore = 0;
    this.matchTimeRemaining = 300;
    this.mode = 'playing';

    this.playerStats.kills = 0;
    this.playerStats.deaths = 0;
    this.playerStats.assists = 0;
    this.playerStats.headshots = 0;
    this.playerStats.shotsFired = 0;
    this.playerStats.shotsHit = 0;

    for (const st of this.botStats.values()) {
      st.kills = 0;
      st.deaths = 0;
      st.assists = 0;
      st.headshots = 0;
      st.shotsFired = 0;
      st.shotsHit = 0;
    }

    // Spawn player at South Alpha Spawn looking North (+Z) up Central Market Street
    this.player.spawnAt(this.mapGen.alphaSpawns[0], Math.PI);
    this.player.weapon.root.visible = true;

    let aIdx = 1;
    let bIdx = 0;
    for (const bot of this.bots) {
      if (bot.team === 'alpha') {
        bot.spawnAt(
          this.mapGen.alphaSpawns[aIdx++ % this.mapGen.alphaSpawns.length],
          Math.PI
        );
      } else {
        bot.spawnAt(
          this.mapGen.bravoSpawns[bIdx++ % this.mapGen.bravoSpawns.length],
          0
        );
      }
    }
  }

  private endMatch(): void {
    if (this.mode === 'ended') return;
    this.mode = 'ended';
    const victory = this.alphaScore >= this.bravoScore;
    if (this.onMatchEnded) {
      this.onMatchEnded(victory, this.alphaScore, this.bravoScore);
    }
  }

  public stepFixed(dt: number, simTime: number, input: Input): void {
    this.simTimeRef = simTime;

    if (this.mode === 'title') {
      this.flythroughAngle += dt * 0.14;
      this.player.weapon.root.visible = false;
      return;
    }

    if (this.mode !== 'playing') return;

    this.matchTimeRemaining -= dt;
    if (this.matchTimeRemaining <= 0) {
      this.matchTimeRemaining = 0;
      this.endMatch();
      return;
    }

    const prevDamageAlpha = this.player.damageIndicatorAlpha;
    this.player.stepFixed(
      dt,
      simTime,
      input,
      this.bvh,
      this.rigidWorld,
      this.damageSystem,
      this.effects,
      this.spatialAudio,
      this.allTargets,
      this.scene
    );

    if (this.player.damageIndicatorAlpha > prevDamageAlpha + 0.05) {
      const srcPos = this.player.controller.position
        .clone()
        .addScaledVector(this.player.lastDamageDirection, 10);
      this.hud.triggerDamageIndicator(srcPos);
    }

    // Respawn player after KIA timer expires
    if (!this.player.isAlive && this.player.respawnTimer <= 0) {
      const sp = this.pickSafeSpawn('alpha');
      this.player.spawnAt(sp, Math.PI);
    }

    // Update all bots
    const listenerPos = this.player.controller.position;
    const diff = this.settings.data.botDifficulty;

    for (const bot of this.bots) {
      if (!bot.isAlive && bot.respawnTimer <= 0) {
        const sp = this.pickSafeSpawn(bot.team);
        bot.spawnAt(sp, bot.team === 'alpha' ? Math.PI : 0);
      }

      bot.stepFixed(
        dt,
        simTime,
        this.bvh,
        this.navWorld,
        this.rigidWorld,
        this.damageSystem,
        this.effects,
        this.spatialAudio,
        this.allTargets,
        listenerPos,
        diff
      );
    }
  }

  public syncVisuals(alpha: number, camera: THREE.PerspectiveCamera): void {
    if (this.mode === 'title') {
      const cx = Math.sin(this.flythroughAngle) * 3.8;
      const cz = -24 + Math.sin(this.flythroughAngle * 0.7) * 6.0;
      const cy = 4.2 + Math.sin(this.flythroughAngle * 1.3) * 0.8;
      camera.position.set(cx, cy, cz);
      camera.lookAt(0, 3.0, 22);
      camera.updateMatrixWorld();
    } else {
      this.player.syncCameraAndViewmodel(alpha, camera);
    }

    for (const bot of this.bots) {
      bot.syncVisualRig(alpha, this.bvh);
    }
  }

  public getCurrentZoneCallout(): string {
    const p = this.player.controller.position;
    if (p.y > 2.4 && p.x > 6) return 'BALCONY OVERLOOK';
    if (p.x < -18) return 'WEST SOUK LANE';
    if (p.x > 18) return 'EAST FLANK ALLEY';
    if (Math.abs(p.x) > 10 && Math.abs(p.x) <= 18) return 'INTERIOR SHOPFRONT';
    if (p.z > 16) return 'MONUMENTAL ARCHWAY PLAZA';
    if (p.z < -34) return 'SOUTH ENTRY BOULEVARD';
    return 'CENTRAL MARKET BAZAAR';
  }

  private pickSafeSpawn(team: 'alpha' | 'bravo'): THREE.Vector3 {
    const pool = team === 'alpha' ? this.mapGen.alphaSpawns : this.mapGen.bravoSpawns;
    let bestSpawn = pool[0];
    let bestMinDistSq = -1;

    for (const sp of pool) {
      let minEnemyDistSq = 999999;
      if (team === 'bravo' && this.player.isAlive) {
        minEnemyDistSq = Math.min(
          minEnemyDistSq,
          sp.distanceToSquared(this.player.controller.position)
        );
      }
      for (const b of this.bots) {
        if (!b.isAlive || b.team === team) continue;
        minEnemyDistSq = Math.min(
          minEnemyDistSq,
          sp.distanceToSquared(b.controller.position)
        );
      }
      if (minEnemyDistSq > bestMinDistSq) {
        bestMinDistSq = minEnemyDistSq;
        bestSpawn = sp;
      }
    }
    return bestSpawn;
  }

  public getAllCombatantStats(): CombatantStats[] {
    const list: CombatantStats[] = [this.playerStats];
    for (const st of this.botStats.values()) {
      list.push(st);
    }
    return list.sort((a, b) => b.kills - a.kills);
  }
}
