import { Input } from '../core/Input';
import { Player } from '../game/Player';

export interface TouchControlsCallbacks {
  onPauseRequested: () => void;
  onToggleFullscreen: () => void;
}

/**
 * Multi-Touch Tactical Mobile & Tablet Controller Overlay
 * Supports:
 * - Virtual Analog Left Thumbstick with outer-ring Auto-Sprint detection
 * - Right-screen Free Touch-Look Aiming with multi-touch identifier isolation
 * - Simultaneous Dual Fire Buttons (Right Thumb Trigger + Upper-Left Claw Trigger) with recoil-drag aiming
 * - Tactical Action Buttons: ADS Toggle, Reload, Jump/Mantle, Crouch Toggle, Lean Left/Right,
 *   Frag Grenade, Flashbang, Fire Mode Toggle, Weapon Inspect, Scoreboard Roster Toggle, Pause, and Fullscreen.
 */
export class TouchControls {
  public root: HTMLDivElement;

  private joyZoneEl!: HTMLDivElement;
  private joyBaseEl!: HTMLDivElement;
  private joyKnobEl!: HTMLDivElement;
  private joySprintBadgeEl!: HTMLDivElement;
  private lookZoneEl!: HTMLDivElement;

  private btnAdsEl!: HTMLButtonElement;
  private btnCrouchEl!: HTMLButtonElement;
  private btnLeanLeftEl!: HTMLButtonElement;
  private btnLeanRightEl!: HTMLButtonElement;
  private btnModeEl!: HTMLButtonElement;
  private btnFragEl!: HTMLButtonElement;
  private btnFlashEl!: HTMLButtonElement;
  private btnReloadEl!: HTMLButtonElement;
  private btnRosterEl!: HTMLButtonElement;
  private btnFireRightEl!: HTMLButtonElement;
  private btnFireLeftEl!: HTMLButtonElement;

  // Multi-touch tracking IDs
  private joyTouchId: number | null = null;
  private joyOriginX = 0;
  private joyOriginY = 0;
  private readonly joyMaxRadius = 56;

  private lookTouchId: number | null = null;
  private lookLastX = 0;
  private lookLastY = 0;

  private fireRightTouchId: number | null = null;
  private fireRightLastX = 0;
  private fireRightLastY = 0;

  private fireLeftTouchId: number | null = null;
  private fireLeftLastX = 0;
  private fireLeftLastY = 0;

  constructor(
    parent: HTMLElement,
    private input: Input,
    private callbacks: TouchControlsCallbacks
  ) {
    this.root = document.createElement('div');
    this.root.id = 'touch-controls-root';
    this.root.innerHTML = `
      <!-- Right-side & center free touch-look surface -->
      <div class="tc-look-zone" id="tc-look-zone"></div>

      <!-- Left-side virtual analog thumbstick zone -->
      <div class="tc-joy-zone" id="tc-joy-zone">
        <div class="tc-joy-sprint-badge" id="tc-joy-sprint">SPRINT LOCK</div>
        <div class="tc-joy-base" id="tc-joy-base">
          <div class="tc-joy-ring-outer"></div>
          <div class="tc-joy-ring-inner"></div>
          <div class="tc-joy-arrows">
            <span class="arr-up">▲</span>
            <span class="arr-down">▼</span>
            <span class="arr-left">◀</span>
            <span class="arr-right">▶</span>
          </div>
          <div class="tc-joy-knob" id="tc-joy-knob"></div>
        </div>
      </div>

      <!-- Top utility bar (Pause, Roster, Inspect, Fullscreen) -->
      <div class="tc-top-bar">
        <button type="button" class="tc-util-btn" id="tc-btn-pause" aria-label="Pause Game">
          <span class="tc-util-icon">❚❚</span>
          <span class="tc-util-lbl">MENU</span>
        </button>
        <button type="button" class="tc-util-btn" id="tc-btn-roster" aria-label="Toggle Scoreboard">
          <span class="tc-util-icon">≡</span>
          <span class="tc-util-lbl">ROSTER</span>
        </button>
        <button type="button" class="tc-util-btn" id="tc-btn-inspect" aria-label="Inspect Weapon">
          <span class="tc-util-icon">◈</span>
          <span class="tc-util-lbl">INSPECT</span>
        </button>
        <button type="button" class="tc-util-btn" id="tc-btn-fullscreen" aria-label="Toggle Fullscreen">
          <span class="tc-util-icon">⛶</span>
          <span class="tc-util-lbl">FULL</span>
        </button>
      </div>

      <!-- Upper-Left Claw Fire Trigger & Tactical Peek/Lean Buttons -->
      <div class="tc-left-upper-cluster">
        <button type="button" class="tc-btn tc-btn-fire-left" id="tc-btn-fire-left" aria-label="Left Fire Trigger">
          <span class="tc-btn-title">FIRE</span>
          <span class="tc-btn-sub">L-TRIG</span>
        </button>
        <div class="tc-lean-pair">
          <button type="button" class="tc-btn tc-btn-lean" id="tc-btn-lean-left" aria-label="Lean Left">
            <span class="tc-btn-title">⟲</span>
            <span class="tc-btn-sub">PEEK L</span>
          </button>
          <button type="button" class="tc-btn tc-btn-lean" id="tc-btn-lean-right" aria-label="Lean Right">
            <span class="tc-btn-title">⟳</span>
            <span class="tc-btn-sub">PEEK R</span>
          </button>
        </div>
      </div>

      <!-- Right-Side Tactical Combat Cluster -->
      <div class="tc-right-cluster">
        <!-- Primary Right Fire Trigger (Supports Hold + Drag-to-Aim Recoil Control) -->
        <button type="button" class="tc-btn tc-btn-fire-main" id="tc-btn-fire-right" aria-label="Primary Fire Trigger">
          <span class="tc-fire-reticle">⊕</span>
          <span class="tc-btn-title">FIRE</span>
        </button>

        <!-- Aim Down Sights (ADS Toggle) -->
        <button type="button" class="tc-btn tc-btn-ads" id="tc-btn-ads" aria-label="Aim Down Sights">
          <span class="tc-btn-title">ADS</span>
          <span class="tc-btn-sub">OPTIC</span>
        </button>

        <!-- Reload Button -->
        <button type="button" class="tc-btn tc-btn-reload" id="tc-btn-reload" aria-label="Reload Weapon">
          <span class="tc-btn-title">RLD</span>
          <span class="tc-btn-sub" id="tc-lbl-ammo">30/120</span>
        </button>

        <!-- Jump / Mantle Button -->
        <button type="button" class="tc-btn tc-btn-jump" id="tc-btn-jump" aria-label="Jump or Vault">
          <span class="tc-btn-title">JUMP</span>
          <span class="tc-btn-sub">VAULT</span>
        </button>

        <!-- Crouch Toggle Button -->
        <button type="button" class="tc-btn tc-btn-crouch" id="tc-btn-crouch" aria-label="Toggle Crouch">
          <span class="tc-btn-title">CRCH</span>
          <span class="tc-btn-sub">STANCE</span>
        </button>

        <!-- Ordinance & Fire Mode Mini Row -->
        <div class="tc-ordinance-row">
          <button type="button" class="tc-btn tc-btn-ord" id="tc-btn-frag" aria-label="Throw Frag Grenade">
            <span class="tc-btn-title">FRAG</span>
            <span class="tc-btn-sub" id="tc-lbl-frag">x1</span>
          </button>
          <button type="button" class="tc-btn tc-btn-ord" id="tc-btn-flash" aria-label="Throw Flashbang">
            <span class="tc-btn-title">FLASH</span>
            <span class="tc-btn-sub" id="tc-lbl-flash">x1</span>
          </button>
          <button type="button" class="tc-btn tc-btn-ord" id="tc-btn-mode" aria-label="Switch Fire Mode">
            <span class="tc-btn-title" id="tc-lbl-mode">AUTO</span>
            <span class="tc-btn-sub">MODE</span>
          </button>
        </div>
      </div>
    `;
    parent.appendChild(this.root);

    this.joyZoneEl = this.root.querySelector('#tc-joy-zone')!;
    this.joyBaseEl = this.root.querySelector('#tc-joy-base')!;
    this.joyKnobEl = this.root.querySelector('#tc-joy-knob')!;
    this.joySprintBadgeEl = this.root.querySelector('#tc-joy-sprint')!;
    this.lookZoneEl = this.root.querySelector('#tc-look-zone')!;

    this.btnAdsEl = this.root.querySelector('#tc-btn-ads')!;
    this.btnCrouchEl = this.root.querySelector('#tc-btn-crouch')!;
    this.btnLeanLeftEl = this.root.querySelector('#tc-btn-lean-left')!;
    this.btnLeanRightEl = this.root.querySelector('#tc-btn-lean-right')!;
    this.btnModeEl = this.root.querySelector('#tc-btn-mode')!;
    this.btnFragEl = this.root.querySelector('#tc-btn-frag')!;
    this.btnFlashEl = this.root.querySelector('#tc-btn-flash')!;
    this.btnReloadEl = this.root.querySelector('#tc-btn-reload')!;
    this.btnRosterEl = this.root.querySelector('#tc-btn-roster')!;
    this.btnFireRightEl = this.root.querySelector('#tc-btn-fire-right')!;
    this.btnFireLeftEl = this.root.querySelector('#tc-btn-fire-left')!;

    this.bindJoystickEvents();
    this.bindLookEvents();
    this.bindFireTriggerEvents();
    this.bindActionButtons();
  }

  public setVisible(visible: boolean): void {
    const shouldShow = visible && this.input.touchModeEnabled;
    this.root.style.display = shouldShow ? 'block' : 'none';
    if (!shouldShow) {
      this.resetAllTouches();
    }
  }

  public resetAllTouches(): void {
    this.joyTouchId = null;
    this.lookTouchId = null;
    this.fireRightTouchId = null;
    this.fireLeftTouchId = null;
    this.joyKnobEl.style.transform = 'translate(-50%, -50%)';
    this.joyBaseEl.classList.remove('active', 'sprinting');
    this.joySprintBadgeEl.classList.remove('active');
    this.btnFireRightEl.classList.remove('pressed');
    this.btnFireLeftEl.classList.remove('pressed');
    this.input.setTouchMove(0, 0, false);
    this.input.injectMouseUp(0);
  }

  private bindJoystickEvents(): void {
    const updateJoystick = (clientX: number, clientY: number) => {
      const dx = clientX - this.joyOriginX;
      const dy = clientY - this.joyOriginY;
      const dist = Math.hypot(dx, dy);
      const maxR = this.joyMaxRadius;

      const clampedDist = Math.min(dist, maxR);
      const angle = Math.atan2(dy, dx);
      const knobX = Math.cos(angle) * clampedDist;
      const knobY = Math.sin(angle) * clampedDist;

      this.joyKnobEl.style.transform = `translate(calc(-50% + ${knobX.toFixed(1)}px), calc(-50% + ${knobY.toFixed(1)}px))`;

      // Deadzone of 10%
      const normDist = clampedDist / maxR;
      if (normDist < 0.1) {
        this.input.setTouchMove(0, 0, false);
        this.joyBaseEl.classList.remove('sprinting');
        this.joySprintBadgeEl.classList.remove('active');
        return;
      }

      const normX = (knobX / maxR);
      // Screen Y down is backward (-Z), Screen Y up is forward (+Z)
      const normZ = -(knobY / maxR);

      // Auto-sprint engages when pushing forward into the outer ring
      const isSprint = dist > maxR * 0.85 && normZ > 0.62;
      this.joyBaseEl.classList.toggle('sprinting', isSprint);
      this.joySprintBadgeEl.classList.toggle('active', isSprint);

      this.input.setTouchMove(normX, normZ, isSprint);
    };

    this.joyZoneEl.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        e.preventDefault();
        if (this.joyTouchId !== null) return;
        const touch = e.changedTouches[0];
        if (!touch) return;

        this.joyTouchId = touch.identifier;
        const rect = this.joyBaseEl.getBoundingClientRect();
        this.joyOriginX = rect.left + rect.width * 0.5;
        this.joyOriginY = rect.top + rect.height * 0.5;
        this.joyBaseEl.classList.add('active');
        updateJoystick(touch.clientX, touch.clientY);
      },
      { passive: false }
    );

    this.joyZoneEl.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        e.preventDefault();
        if (this.joyTouchId === null) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
          const t = e.changedTouches[i];
          if (t.identifier === this.joyTouchId) {
            updateJoystick(t.clientX, t.clientY);
            break;
          }
        }
      },
      { passive: false }
    );

    const endJoy = (e: TouchEvent) => {
      if (this.joyTouchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.joyTouchId) {
          this.joyTouchId = null;
          this.joyKnobEl.style.transform = 'translate(-50%, -50%)';
          this.joyBaseEl.classList.remove('active', 'sprinting');
          this.joySprintBadgeEl.classList.remove('active');
          this.input.setTouchMove(0, 0, false);
          break;
        }
      }
    };

    this.joyZoneEl.addEventListener('touchend', endJoy, { passive: false });
    this.joyZoneEl.addEventListener('touchcancel', endJoy, { passive: false });
  }

  private bindLookEvents(): void {
    const lookSpeed = 2.15;

    this.lookZoneEl.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        e.preventDefault();
        if (this.lookTouchId !== null) return;
        const touch = e.changedTouches[0];
        if (!touch) return;
        this.lookTouchId = touch.identifier;
        this.lookLastX = touch.clientX;
        this.lookLastY = touch.clientY;
      },
      { passive: false }
    );

    this.lookZoneEl.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        e.preventDefault();
        if (this.lookTouchId === null) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
          const t = e.changedTouches[i];
          if (t.identifier === this.lookTouchId) {
            const dx = (t.clientX - this.lookLastX) * lookSpeed;
            const dy = (t.clientY - this.lookLastY) * lookSpeed;
            this.lookLastX = t.clientX;
            this.lookLastY = t.clientY;
            this.input.injectLookDelta(dx, dy);
            break;
          }
        }
      },
      { passive: false }
    );

    const endLook = (e: TouchEvent) => {
      if (this.lookTouchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.lookTouchId) {
          this.lookTouchId = null;
          break;
        }
      }
    };

    this.lookZoneEl.addEventListener('touchend', endLook, { passive: false });
    this.lookZoneEl.addEventListener('touchcancel', endLook, { passive: false });
  }

  private bindFireTriggerEvents(): void {
    const aimSpeedWhileFiring = 1.95;

    // Right Primary Fire Button (Hold to fire + Drag to control recoil/aim)
    this.btnFireRightEl.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const t = e.changedTouches[0];
        if (!t) return;
        this.fireRightTouchId = t.identifier;
        this.fireRightLastX = t.clientX;
        this.fireRightLastY = t.clientY;
        this.btnFireRightEl.classList.add('pressed');
        this.input.injectMouseDown(0);
      },
      { passive: false }
    );

    this.btnFireRightEl.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.fireRightTouchId === null) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
          const t = e.changedTouches[i];
          if (t.identifier === this.fireRightTouchId) {
            const dx = (t.clientX - this.fireRightLastX) * aimSpeedWhileFiring;
            const dy = (t.clientY - this.fireRightLastY) * aimSpeedWhileFiring;
            this.fireRightLastX = t.clientX;
            this.fireRightLastY = t.clientY;
            this.input.injectLookDelta(dx, dy);
            break;
          }
        }
      },
      { passive: false }
    );

    const endFireRight = (e: TouchEvent) => {
      e.preventDefault();
      if (this.fireRightTouchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.fireRightTouchId) {
          this.fireRightTouchId = null;
          this.btnFireRightEl.classList.remove('pressed');
          if (this.fireLeftTouchId === null) {
            this.input.injectMouseUp(0);
          }
          break;
        }
      }
    };

    this.btnFireRightEl.addEventListener('touchend', endFireRight, { passive: false });
    this.btnFireRightEl.addEventListener('touchcancel', endFireRight, { passive: false });

    // Also support mouse click on fire buttons for hybrid testing
    this.btnFireRightEl.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      this.btnFireRightEl.classList.add('pressed');
      this.input.injectMouseDown(0);
    });
    this.btnFireRightEl.addEventListener('mouseup', (e) => {
      e.stopPropagation();
      this.btnFireRightEl.classList.remove('pressed');
      this.input.injectMouseUp(0);
    });

    // Upper-Left Secondary Claw Fire Button
    this.btnFireLeftEl.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const t = e.changedTouches[0];
        if (!t) return;
        this.fireLeftTouchId = t.identifier;
        this.fireLeftLastX = t.clientX;
        this.fireLeftLastY = t.clientY;
        this.btnFireLeftEl.classList.add('pressed');
        this.input.injectMouseDown(0);
      },
      { passive: false }
    );

    this.btnFireLeftEl.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.fireLeftTouchId === null) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
          const t = e.changedTouches[i];
          if (t.identifier === this.fireLeftTouchId) {
            const dx = (t.clientX - this.fireLeftLastX) * aimSpeedWhileFiring;
            const dy = (t.clientY - this.fireLeftLastY) * aimSpeedWhileFiring;
            this.fireLeftLastX = t.clientX;
            this.fireLeftLastY = t.clientY;
            this.input.injectLookDelta(dx, dy);
            break;
          }
        }
      },
      { passive: false }
    );

    const endFireLeft = (e: TouchEvent) => {
      e.preventDefault();
      if (this.fireLeftTouchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.fireLeftTouchId) {
          this.fireLeftTouchId = null;
          this.btnFireLeftEl.classList.remove('pressed');
          if (this.fireRightTouchId === null) {
            this.input.injectMouseUp(0);
          }
          break;
        }
      }
    };

    this.btnFireLeftEl.addEventListener('touchend', endFireLeft, { passive: false });
    this.btnFireLeftEl.addEventListener('touchcancel', endFireLeft, { passive: false });
  }

  private bindTapButton(selector: string, action: () => void): void {
    const el = this.root.querySelector(selector) as HTMLButtonElement;
    if (!el) return;

    let handledByTouch = false;
    el.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handledByTouch = true;
        action();
      },
      { passive: false }
    );

    el.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
      if (handledByTouch) {
        handledByTouch = false;
        return;
      }
      action();
    });
  }

  private bindActionButtons(): void {
    // ADS Toggle
    this.bindTapButton('#tc-btn-ads', () => {
      this.input.touchAdsToggled = !this.input.touchAdsToggled;
    });

    // Reload
    this.bindTapButton('#tc-btn-reload', () => {
      this.input.injectKeyPress('KeyR');
    });

    // Jump / Vault
    this.bindTapButton('#tc-btn-jump', () => {
      this.input.injectKeyPress('Space');
    });

    // Crouch Toggle
    this.bindTapButton('#tc-btn-crouch', () => {
      this.input.touchCrouchToggled = !this.input.touchCrouchToggled;
    });

    // Lean Left Toggle
    this.bindTapButton('#tc-btn-lean-left', () => {
      this.input.touchLeanState = this.input.touchLeanState === -1 ? 0 : -1;
    });

    // Lean Right Toggle
    this.bindTapButton('#tc-btn-lean-right', () => {
      this.input.touchLeanState = this.input.touchLeanState === 1 ? 0 : 1;
    });

    // Frag Grenade
    this.bindTapButton('#tc-btn-frag', () => {
      this.input.injectKeyPress('KeyG');
    });

    // Flashbang
    this.bindTapButton('#tc-btn-flash', () => {
      this.input.injectKeyPress('KeyQ');
    });

    // Fire Mode Toggle
    this.bindTapButton('#tc-btn-mode', () => {
      this.input.injectKeyPress('KeyB');
    });

    // Weapon Inspect
    this.bindTapButton('#tc-btn-inspect', () => {
      this.input.injectKeyPress('KeyF');
    });

    // Scoreboard Roster Toggle
    this.bindTapButton('#tc-btn-roster', () => {
      this.input.touchScoreboardOpen = !this.input.touchScoreboardOpen;
    });

    // Pause Menu
    this.bindTapButton('#tc-btn-pause', () => {
      this.callbacks.onPauseRequested();
    });

    // Fullscreen Toggle
    this.bindTapButton('#tc-btn-fullscreen', () => {
      this.callbacks.onToggleFullscreen();
    });
  }

  public update(player: Player): void {
    if (!this.input.touchModeEnabled) return;

    this.btnAdsEl.classList.toggle('active-toggle', this.input.touchAdsToggled);
    this.btnCrouchEl.classList.toggle('active-toggle', player.controller.isCrouching);
    this.btnLeanLeftEl.classList.toggle('active-toggle', this.input.touchLeanState === -1);
    this.btnLeanRightEl.classList.toggle('active-toggle', this.input.touchLeanState === 1);
    this.btnRosterEl.classList.toggle('active-toggle', this.input.touchScoreboardOpen);

    const lblAmmo = this.root.querySelector('#tc-lbl-ammo') as HTMLElement;
    if (lblAmmo) {
      lblAmmo.textContent = player.weapon.isReloading
        ? 'WAIT'
        : `${player.weapon.magAmmo}/${player.weapon.reserveAmmo}`;
    }
    this.btnReloadEl.classList.toggle(
      'low-ammo',
      player.weapon.magAmmo <= 8 && !player.weapon.isReloading
    );

    const lblMode = this.root.querySelector('#tc-lbl-mode') as HTMLElement;
    if (lblMode) {
      lblMode.textContent = player.weapon.fireMode;
    }

    const lblFrag = this.root.querySelector('#tc-lbl-frag') as HTMLElement;
    if (lblFrag) {
      lblFrag.textContent = `x${player.weapon.explosiveCount}`;
    }
    this.btnFragEl.classList.toggle('depleted', player.weapon.explosiveCount <= 0);

    const lblFlash = this.root.querySelector('#tc-lbl-flash') as HTMLElement;
    if (lblFlash) {
      lblFlash.textContent = `x${player.weapon.tacticalCount}`;
    }
    this.btnFlashEl.classList.toggle('depleted', player.weapon.tacticalCount <= 0);
  }
}
