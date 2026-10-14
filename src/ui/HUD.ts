import * as THREE from 'three';
import { Player } from '../game/Player';
import { BotCombatant } from '../ai/BotBrain';
import { MinimapBuildingFootprint } from '../world/MapGenerator';

interface KillFeedItem {
  id: number;
  el: HTMLDivElement;
  expireTime: number;
}

interface DamageArcItem {
  alpha: number;
  sourcePos: THREE.Vector3;
}

export interface CombatantStats {
  name: string;
  team: 'alpha' | 'bravo';
  kills: number;
  deaths: number;
  assists: number;
  headshots: number;
  shotsFired: number;
  shotsHit: number;
}

/**
 * High-Clarity Compact Tactical HUD (< 8% screen area, pointer-events: none)
 * Includes Dynamic Crosshair, Hit/Kill Marker, Directional Damage Arcs,
 * Bottom-Left Health/Stance/Stamina, Bottom-Right Weapon/Ammo/Reload,
 * Top-Left Architectural Radar Minimap, Top-Center Score/Timer/Zone,
 * Top-Right Kill Feed, Scoreboard (Tab), and F1/F2-F9 Telemetry Overlay.
 */
export class HUD {
  public root: HTMLDivElement;

  // Crosshair & Hit Marker
  private crosshairEl!: HTMLDivElement;
  private chTop!: HTMLDivElement;
  private chBottom!: HTMLDivElement;
  private chLeft!: HTMLDivElement;
  private chRight!: HTMLDivElement;
  private hitMarkerEl!: HTMLDivElement;
  private hitMarkerTimer = 0;

  // Damage arcs canvas
  private damageCanvas!: HTMLCanvasElement;
  private damageCtx!: CanvasRenderingContext2D;
  private damageArcs: DamageArcItem[] = [];

  // Bottom-Left Health & Stance
  private hpTextEl!: HTMLSpanElement;
  private hpFillEl!: HTMLDivElement;
  private hpTrailEl!: HTMLDivElement;
  private trailHealth = 100;
  private trailDelayTimer = 0;
  private lastRecordedHealth = 100;
  private stanceTextEl!: HTMLSpanElement;
  private staminaFillEl!: HTMLDivElement;

  // Bottom-Right Weapon & Ammo
  private magCountEl!: HTMLSpanElement;
  private reserveCountEl!: HTMLSpanElement;
  private fireModeEl!: HTMLSpanElement;
  private grenadeCountEl!: HTMLSpanElement;
  private reloadBarWrapEl!: HTMLDivElement;
  private reloadFillEl!: HTMLDivElement;

  // Top-Left Minimap Radar
  private minimapCanvas!: HTMLCanvasElement;
  private minimapCtx!: CanvasRenderingContext2D;

  // Top-Center Match Score, Clock & Zone Callout
  private alphaScoreEl!: HTMLSpanElement;
  private bravoScoreEl!: HTMLSpanElement;
  private clockEl!: HTMLSpanElement;
  private zoneEl!: HTMLDivElement;

  // Top-Right Kill Feed
  private killFeedContainer!: HTMLDivElement;
  private killFeedItems: KillFeedItem[] = [];
  private nextKillId = 1;

  // Respawn banner
  private respawnBannerEl!: HTMLDivElement;

  // Scoreboard & Telemetry
  private scoreboardEl!: HTMLDivElement;
  private scoreboardBodyEl!: HTMLDivElement;
  private telemetryEl!: HTMLDivElement;

  constructor(parent: HTMLElement) {
    this.root = document.createElement('div');
    this.root.id = 'hud-root';
    this.root.innerHTML = `
      <div class="hud-top-left">
        <div class="radar-frame">
          <canvas id="radar-canvas" width="156" height="156"></canvas>
          <div class="radar-cardinal">N</div>
        </div>
      </div>

      <div class="hud-top-center">
        <div class="score-bar">
          <div class="team-block alpha">
            <span class="team-tag">TF-ALPHA</span>
            <span class="team-score" id="hud-score-alpha">00</span>
          </div>
          <div class="match-clock-wrap">
            <span class="match-mode">TDM // TARGET 30</span>
            <span class="match-clock" id="hud-clock">05:00</span>
          </div>
          <div class="team-block bravo">
            <span class="team-score" id="hud-score-bravo">00</span>
            <span class="team-tag">OPFOR</span>
          </div>
        </div>
        <div class="zone-callout" id="hud-zone">CENTRAL BAZAAR</div>
      </div>

      <div class="hud-top-right" id="hud-killfeed"></div>

      <div class="hud-center">
        <canvas id="damage-arc-canvas" width="320" height="320"></canvas>
        <div class="crosshair" id="hud-crosshair">
          <div class="ch-dot"></div>
          <div class="ch-tick top" id="ch-top"></div>
          <div class="ch-tick bottom" id="ch-bottom"></div>
          <div class="ch-tick left" id="ch-left"></div>
          <div class="ch-tick right" id="ch-right"></div>
        </div>
        <div class="hit-marker" id="hud-hitmarker">
          <span class="hm-line l1"></span>
          <span class="hm-line l2"></span>
          <span class="hm-line l3"></span>
          <span class="hm-line l4"></span>
        </div>
        <div class="respawn-banner" id="hud-respawn" style="display:none;">
          KIA // REDEPLOYING IN <span id="hud-respawn-timer">2.6</span>s
        </div>
      </div>

      <div class="hud-bottom-left">
        <div class="status-header">
          <div class="hp-readout">
            <span class="hp-plus">+</span>
            <span class="hp-num" id="hud-hp-num">100</span>
          </div>
          <div class="stance-pill" id="hud-stance">STAND</div>
        </div>
        <div class="hp-bar-track">
          <div class="hp-bar-trail" id="hud-hp-trail"></div>
          <div class="hp-bar-fill" id="hud-hp-fill"></div>
        </div>
        <div class="stamina-bar-track">
          <div class="stamina-bar-fill" id="hud-stamina-fill"></div>
        </div>
      </div>

      <div class="hud-bottom-right">
        <div class="reload-progress-wrap" id="hud-reload-wrap">
          <span class="reload-label">RELOADING</span>
          <div class="reload-track"><div class="reload-fill" id="hud-reload-fill"></div></div>
        </div>
        <div class="ammo-row">
          <div class="ammo-counts">
            <span class="mag-num" id="hud-mag">30</span>
            <span class="ammo-sep">/</span>
            <span class="reserve-num" id="hud-reserve">120</span>
          </div>
          <div class="firemode-stack">
            <span class="firemode-badge" id="hud-firemode">AUTO</span>
            <span class="grenade-badge" id="hud-grenades">FRAG x1</span>
          </div>
        </div>
        <div class="weapon-meta">
          <span class="weapon-title">MK18 MOD-C4 // 5.56x45MM</span>
          <span class="weapon-hint">[R] RELOAD  [B] MODE  [G] FRAG  [F] INSPECT</span>
        </div>
      </div>

      <div class="hud-scoreboard" id="hud-scoreboard" style="display:none;">
        <div class="sb-header">TACTICAL OPERATIONS ROSTER // CASBAH SECTOR 04</div>
        <div class="sb-body" id="hud-scoreboard-body"></div>
      </div>

      <div class="hud-telemetry" id="hud-telemetry" style="display:none;"></div>
    `;
    parent.appendChild(this.root);

    this.crosshairEl = this.root.querySelector('#hud-crosshair')!;
    this.chTop = this.root.querySelector('#ch-top')!;
    this.chBottom = this.root.querySelector('#ch-bottom')!;
    this.chLeft = this.root.querySelector('#ch-left')!;
    this.chRight = this.root.querySelector('#ch-right')!;
    this.hitMarkerEl = this.root.querySelector('#hud-hitmarker')!;

    this.damageCanvas = this.root.querySelector('#damage-arc-canvas')!;
    this.damageCtx = this.damageCanvas.getContext('2d')!;

    this.hpTextEl = this.root.querySelector('#hud-hp-num')!;
    this.hpFillEl = this.root.querySelector('#hud-hp-fill')!;
    this.hpTrailEl = this.root.querySelector('#hud-hp-trail')!;
    this.stanceTextEl = this.root.querySelector('#hud-stance')!;
    this.staminaFillEl = this.root.querySelector('#hud-stamina-fill')!;

    this.magCountEl = this.root.querySelector('#hud-mag')!;
    this.reserveCountEl = this.root.querySelector('#hud-reserve')!;
    this.fireModeEl = this.root.querySelector('#hud-firemode')!;
    this.grenadeCountEl = this.root.querySelector('#hud-grenades')!;
    this.reloadBarWrapEl = this.root.querySelector('#hud-reload-wrap')!;
    this.reloadFillEl = this.root.querySelector('#hud-reload-fill')!;

    this.minimapCanvas = this.root.querySelector('#radar-canvas')!;
    this.minimapCtx = this.minimapCanvas.getContext('2d')!;

    this.alphaScoreEl = this.root.querySelector('#hud-score-alpha')!;
    this.bravoScoreEl = this.root.querySelector('#hud-score-bravo')!;
    this.clockEl = this.root.querySelector('#hud-clock')!;
    this.zoneEl = this.root.querySelector('#hud-zone')!;

    this.killFeedContainer = this.root.querySelector('#hud-killfeed')!;
    this.respawnBannerEl = this.root.querySelector('#hud-respawn')!;
    this.scoreboardEl = this.root.querySelector('#hud-scoreboard')!;
    this.scoreboardBodyEl = this.root.querySelector('#hud-scoreboard-body')!;
    this.telemetryEl = this.root.querySelector('#hud-telemetry')!;
  }

  public setVisible(visible: boolean): void {
    this.root.style.display = visible ? 'block' : 'none';
  }

  public triggerHitMarker(headshot: boolean, killed: boolean): void {
    this.hitMarkerTimer = killed ? 0.18 : 0.12;
    this.hitMarkerEl.classList.toggle('headshot', headshot || killed);
    this.hitMarkerEl.style.opacity = '1';
    this.hitMarkerEl.style.transform = `translate(-50%, -50%) scale(${killed ? 1.28 : 1.08})`;
  }

  public triggerDamageIndicator(sourceWorldPos: THREE.Vector3): void {
    this.damageArcs.push({
      alpha: 1.0,
      sourcePos: sourceWorldPos.clone()
    });
    if (this.damageArcs.length > 5) {
      this.damageArcs.shift();
    }
  }

  public pushKillFeed(
    attackerName: string,
    attackerTeam: 'alpha' | 'bravo',
    victimName: string,
    victimTeam: 'alpha' | 'bravo',
    headshot: boolean,
    nowSec: number
  ): void {
    const itemEl = document.createElement('div');
    itemEl.className = 'killfeed-item';
    const hsBadge = headshot ? `<span class="kf-hs">[HS]</span>` : '';
    itemEl.innerHTML = `
      <span class="kf-name ${attackerTeam}">${attackerName}</span>
      <span class="kf-weapon">MK18</span>
      ${hsBadge}
      <span class="kf-name ${victimTeam}">${victimName}</span>
    `;
    this.killFeedContainer.appendChild(itemEl);

    this.killFeedItems.push({
      id: this.nextKillId++,
      el: itemEl,
      expireTime: nowSec + 4.5
    });

    while (this.killFeedItems.length > 4) {
      const oldest = this.killFeedItems.shift()!;
      oldest.el.remove();
    }
  }

  public update(
    dt: number,
    nowSec: number,
    player: Player,
    bots: BotCombatant[],
    footprints: MinimapBuildingFootprint[],
    alphaScore: number,
    bravoScore: number,
    remainingSec: number,
    zoneName: string,
    showScoreboard: boolean,
    combatantStats: CombatantStats[],
    showTelemetry: boolean,
    telemetryText: string
  ): void {
    // 1. Dynamic Crosshair spread & ADS fade
    const w = player.weapon;
    const horizSpeed = Math.hypot(player.controller.velocity.x, player.controller.velocity.z);
    const rawGap = 5 + w.currentSpread * 320 + horizSpeed * 1.45 + (player.controller.isGrounded ? 0 : 8);
    const gapPx = THREE.MathUtils.clamp(rawGap, 4, 28);
    const adsAlpha = Math.max(0, 1 - w.adsProgress * 1.15);
    this.crosshairEl.style.opacity = adsAlpha.toFixed(2);
    this.chTop.style.transform = `translate(-50%, ${-(gapPx + 6)}px)`;
    this.chBottom.style.transform = `translate(-50%, ${gapPx}px)`;
    this.chLeft.style.transform = `translate(${-(gapPx + 6)}px, -50%)`;
    this.chRight.style.transform = `translate(${gapPx}px, -50%)`;

    // 2. Hit Marker decay
    if (this.hitMarkerTimer > 0) {
      this.hitMarkerTimer -= dt;
      if (this.hitMarkerTimer <= 0) {
        this.hitMarkerEl.style.opacity = '0';
      } else {
        this.hitMarkerEl.style.transform = 'translate(-50%, -50%) scale(1.0)';
      }
    }

    // 3. Directional Damage Arcs
    this.renderDamageArcs(dt, player);

    // 4. Health bar & 350ms delayed white trail
    const hp = Math.ceil(player.health);
    if (hp < this.lastRecordedHealth) {
      this.trailDelayTimer = 0.35;
    }
    this.lastRecordedHealth = hp;

    if (this.trailDelayTimer > 0) {
      this.trailDelayTimer -= dt;
    } else if (this.trailHealth > hp) {
      this.trailHealth = Math.max(hp, this.trailHealth - dt * 65);
    } else {
      this.trailHealth = hp;
    }

    this.hpTextEl.textContent = String(hp).padStart(3, '0');
    this.hpFillEl.style.width = `${hp}%`;
    this.hpFillEl.style.background =
      hp <= 35 ? 'linear-gradient(90deg, #ff3b30, #ff6b58)' : 'linear-gradient(90deg, #e8f0f8, #ffffff)';
    this.hpTrailEl.style.width = `${this.trailHealth.toFixed(1)}%`;

    const stanceLabel = !player.controller.isGrounded
      ? 'AIR'
      : player.controller.isCrouching
        ? 'CROUCH'
        : horizSpeed > 5.4
          ? 'SPRINT'
          : 'STAND';
    this.stanceTextEl.textContent = stanceLabel;
    this.staminaFillEl.style.width = '100%';

    // 5. Weapon & Ammo Readout
    this.magCountEl.textContent = String(w.magAmmo).padStart(2, '0');
    this.magCountEl.style.color = w.magAmmo <= 7 ? '#ff5548' : '#f4f7fa';
    this.reserveCountEl.textContent = String(w.reserveAmmo).padStart(3, '0');
    this.fireModeEl.textContent = w.fireMode;
    this.grenadeCountEl.textContent = `FRAG x${w.explosiveCount}`;

    if (w.isReloading) {
      this.reloadBarWrapEl.style.opacity = '1';
      const prog = THREE.MathUtils.clamp(w.reloadTimer / Math.max(0.01, w.reloadDuration), 0, 1);
      this.reloadFillEl.style.width = `${(prog * 100).toFixed(1)}%`;
    } else {
      this.reloadBarWrapEl.style.opacity = '0';
    }

    // 6. Score, Clock & Zone Callout
    this.alphaScoreEl.textContent = String(alphaScore).padStart(2, '0');
    this.bravoScoreEl.textContent = String(bravoScore).padStart(2, '0');
    const mins = Math.floor(Math.max(0, remainingSec) / 60);
    const secs = Math.floor(Math.max(0, remainingSec) % 60);
    this.clockEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    this.zoneEl.textContent = zoneName;

    // 7. Respawn Banner
    if (!player.isAlive) {
      this.respawnBannerEl.style.display = 'block';
      const timerSpan = this.respawnBannerEl.querySelector('#hud-respawn-timer');
      if (timerSpan) timerSpan.textContent = Math.max(0, player.respawnTimer).toFixed(1);
    } else {
      this.respawnBannerEl.style.display = 'none';
    }

    // 8. Expire old Kill Feed entries
    for (let i = this.killFeedItems.length - 1; i >= 0; i--) {
      if (nowSec >= this.killFeedItems[i].expireTime) {
        this.killFeedItems[i].el.remove();
        this.killFeedItems.splice(i, 1);
      }
    }

    // 9. Render Tactical Minimap Radar
    this.renderMinimap(nowSec, player, bots, footprints);

    // 10. Scoreboard (Tab)
    this.scoreboardEl.style.display = showScoreboard ? 'block' : 'none';
    if (showScoreboard) {
      this.renderScoreboard(combatantStats);
    }

    // 11. Telemetry (F1 / timings)
    this.telemetryEl.style.display = showTelemetry ? 'block' : 'none';
    if (showTelemetry) {
      this.telemetryEl.textContent = telemetryText;
    }
  }

  private renderDamageArcs(dt: number, player: Player): void {
    const ctx = this.damageCtx;
    ctx.clearRect(0, 0, 320, 320);
    if (this.damageArcs.length === 0) return;

    const px = player.controller.position.x;
    const pz = player.controller.position.z;

    for (let i = this.damageArcs.length - 1; i >= 0; i--) {
      const arc = this.damageArcs[i];
      arc.alpha -= dt * 0.95;
      if (arc.alpha <= 0) {
        this.damageArcs.splice(i, 1);
        continue;
      }

      const dx = arc.sourcePos.x - px;
      const dz = arc.sourcePos.z - pz;
      const worldAngle = Math.atan2(dx, -dz);
      const relAngle = worldAngle + player.yaw - Math.PI * 0.5;

      ctx.save();
      ctx.translate(160, 160);
      ctx.rotate(relAngle);
      ctx.beginPath();
      ctx.arc(0, 0, 118, -0.34, 0.34);
      ctx.strokeStyle = `rgba(255, 58, 44, ${(arc.alpha * 0.85).toFixed(2)})`;
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.restore();
    }
  }

  private renderMinimap(
    nowSec: number,
    player: Player,
    bots: BotCombatant[],
    footprints: MinimapBuildingFootprint[]
  ): void {
    const ctx = this.minimapCtx;
    const w = 156;
    const h = 156;
    const cx = w * 0.5;
    const cy = h * 0.5;
    const scale = 1.85; // pixels per meter

    ctx.clearRect(0, 0, w, h);

    // Dark translucent radar background
    ctx.fillStyle = 'rgba(12, 18, 24, 0.82)';
    ctx.fillRect(0, 0, w, h);

    // Rotate radar to player heading
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(player.yaw);

    const px = player.controller.position.x;
    const pz = player.controller.position.z;

    // Draw building footprints
    for (const fp of footprints) {
      const rx = (fp.x - px) * scale;
      const rz = (fp.z - pz) * scale;
      ctx.fillStyle = fp.isInterior
        ? 'rgba(195, 165, 120, 0.45)'
        : 'rgba(155, 140, 118, 0.52)';
      ctx.fillRect(
        rx - (fp.w * scale) * 0.5,
        rz - (fp.d * scale) * 0.5,
        fp.w * scale,
        fp.d * scale
      );
    }

    // Draw friendly bots (cyan) & enemy bots (red pulse for 2.5s when firing or in LOS)
    for (const bot of bots) {
      if (!bot.isAlive) continue;
      const bx = (bot.controller.position.x - px) * scale;
      const bz = (bot.controller.position.z - pz) * scale;
      if (bx * bx + bz * bz > 72 * 72) continue;

      if (bot.team === 'alpha') {
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(bx, bz, 3.3, 0, Math.PI * 2);
        ctx.fill();
      } else {
        const timeSinceFire = nowSec - bot.lastFiredTimestamp;
        if (timeSinceFire < 2.5 || bot.hasLineOfSight) {
          const alpha = bot.hasLineOfSight ? 0.95 : Math.max(0.2, 1 - timeSinceFire / 2.5);
          ctx.fillStyle = `rgba(255, 68, 56, ${alpha.toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(bx, bz, 3.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    ctx.restore();

    // Player FOV cone & center chevron
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = 'rgba(220, 240, 255, 0.11)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 52, -Math.PI * 0.5 - 0.58, -Math.PI * 0.5 + 0.58);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(0, -5);
    ctx.lineTo(4, 4);
    ctx.lineTo(0, 2);
    ctx.lineTo(-4, 4);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Subtle radar range ring
    ctx.strokeStyle = 'rgba(180, 210, 235, 0.16)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, 48, 0, Math.PI * 2);
    ctx.stroke();
  }

  private renderScoreboard(stats: CombatantStats[]): void {
    const rows = stats
      .map((s) => {
        const acc = s.shotsFired > 0 ? Math.round((s.shotsHit / s.shotsFired) * 100) : 0;
        const hs = s.kills > 0 ? Math.round((s.headshots / s.kills) * 100) : 0;
        return `
          <div class="sb-row ${s.team}">
            <span class="sb-col name">${s.name}</span>
            <span class="sb-col">${s.kills}</span>
            <span class="sb-col">${s.deaths}</span>
            <span class="sb-col">${s.assists}</span>
            <span class="sb-col">${acc}%</span>
            <span class="sb-col">${hs}%</span>
          </div>
        `;
      })
      .join('');

    this.scoreboardBodyEl.innerHTML = `
      <div class="sb-row header">
        <span class="sb-col name">OPERATOR</span>
        <span class="sb-col">K</span>
        <span class="sb-col">D</span>
        <span class="sb-col">A</span>
        <span class="sb-col">ACC</span>
        <span class="sb-col">HS%</span>
      </div>
      ${rows}
    `;
  }
}
