import { Input } from '../core/Input';
import { Player } from '../game/Player';

export interface TouchControlsCallbacks {
  onPauseRequested: () => void;
  onToggleFullscreen: () => void;
}

const ICONS = {
  fire: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg>`,
  ads: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 1.5v4.5M12 18v4.5M1.5 12H6M18 12h4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  reload: `<svg viewBox="0 0 24 24"><path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M19.8 3.8v4.6h-4.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  jump: `<svg viewBox="0 0 24 24"><path d="M5 13.5 12 6.5l7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 19.5 12 12.5l7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/></svg>`,
  crouch: `<svg viewBox="0 0 24 24"><circle cx="13" cy="4.6" r="2.2" fill="currentColor"/><path d="M12.5 8.2 9 12.4l4.2 2.1-1.4 5.6M9 12.4l-3.1 3.4M13.2 14.5l4.6.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 21.2h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".6"/></svg>`,
  frag: `<svg viewBox="0 0 24 24"><ellipse cx="11.5" cy="14.5" rx="6" ry="6.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 7.6V5.4h5v2.2M14 5.4l3.6-1.6M8.5 12.5h6M8.5 16.5h6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  flash: `<svg viewBox="0 0 24 24"><path d="M13.2 2.5 5.5 13.6h5.6l-1.1 7.9 7.7-11.1h-5.6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  mode: `<svg viewBox="0 0 24 24"><rect x="3" y="9" width="3.4" height="6" rx="1" fill="currentColor"/><rect x="8.4" y="9" width="3.4" height="6" rx="1" fill="currentColor"/><rect x="13.8" y="9" width="3.4" height="6" rx="1" fill="currentColor" opacity=".55"/><path d="M19.6 8.5v7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  inspect: `<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>`,
  pause: `<svg viewBox="0 0 24 24"><rect x="6.5" y="5" width="3.6" height="14" rx="1.2" fill="currentColor"/><rect x="13.9" y="5" width="3.6" height="14" rx="1.2" fill="currentColor"/></svg>`,
  roster: `<svg viewBox="0 0 24 24"><path d="M4 6.5h16M4 12h16M4 17.5h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  fullscreen: `<svg viewBox="0 0 24 24"><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  leanL: `<svg viewBox="0 0 24 24"><path d="M15 5.5 8.5 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 5v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".5"/></svg>`,
  leanR: `<svg viewBox="0 0 24 24"><path d="M9 5.5 15.5 12 9 18.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 5v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".5"/></svg>`,
  lock: `<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8.2 10.5V7.8a3.8 3.8 0 0 1 7.6 0v2.7" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`
};

/**
 * Mobile & tablet controls in the style of Call of Duty Mobile: a floating left thumbstick with
 * slide-up sprint lock, a free-look right half, translucent round icon buttons (big fire button,
 * ADS, reload, jump, crouch, grenades) and a secondary left fire button. All buttons are sized
 * relative to the viewport height through the `--tc-s` CSS variable.
 */
export class TouchControls {
  public root: HTMLDivElement;

  private joyZoneEl!: HTMLDivElement;
  private joyBaseEl!: HTMLDivElement;
  private joyKnobEl!: HTMLDivElement;
  private joyLockEl!: HTMLDivElement;
  private lookZoneEl!: HTMLDivElement;

  private btnAdsEl!: HTMLButtonElement;
  private btnCrouchEl!: HTMLButtonElement;
  private btnLeanLeftEl!: HTMLButtonElement;
  private btnLeanRightEl!: HTMLButtonElement;
  private btnFragEl!: HTMLButtonElement;
  private btnFlashEl!: HTMLButtonElement;
  private btnReloadEl!: HTMLButtonElement;
  private btnRosterEl!: HTMLButtonElement;
  private btnFireRightEl!: HTMLButtonElement;
  private btnFireLeftEl!: HTMLButtonElement;
  private lblFragEl!: HTMLElement;
  private lblFlashEl!: HTMLElement;
  private lblModeEl!: HTMLElement;
  private reloadRingEl!: SVGCircleElement;

  private joyTouchId: number | null = null;
  private joyOriginX = 0;
  private joyOriginY = 0;
  private joyRadius = 52;
  private sprintLocked = false;
  private lockArmed = false;

  private lookTouchId: number | null = null;
  private lookLastX = 0;
  private lookLastY = 0;

  private fireTouchIds = new Map<HTMLElement, number>();
  private fireLast = new Map<HTMLElement, { x: number; y: number }>();

  private visible = false;
  private lastLabels = new Map<HTMLElement, string>();

  constructor(
    parent: HTMLElement,
    private input: Input,
    private callbacks: TouchControlsCallbacks
  ) {
    this.root = document.createElement('div');
    this.root.id = 'touch-controls-root';
    this.root.innerHTML = `
      <div class="tc-look-zone" id="tc-look-zone"></div>

      <div class="tc-joy-zone" id="tc-joy-zone">
        <div class="tc-joy-base" id="tc-joy-base">
          <div class="tc-joy-lock" id="tc-joy-lock">${ICONS.lock}</div>
          <div class="tc-joy-knob" id="tc-joy-knob"></div>
        </div>
      </div>

      <div class="tc-top-bar">
        <button type="button" class="tc-btn tc-util" id="tc-btn-roster" aria-label="Scoreboard">${ICONS.roster}</button>
        <button type="button" class="tc-btn tc-util" id="tc-btn-fullscreen" aria-label="Fullscreen">${ICONS.fullscreen}</button>
        <button type="button" class="tc-btn tc-util" id="tc-btn-pause" aria-label="Pause">${ICONS.pause}</button>
      </div>

      <button type="button" class="tc-btn tc-fire-left" id="tc-btn-fire-left" aria-label="Left fire">${ICONS.fire}</button>
      <button type="button" class="tc-btn tc-lean-l" id="tc-btn-lean-left" aria-label="Lean left">${ICONS.leanL}</button>
      <button type="button" class="tc-btn tc-lean-r" id="tc-btn-lean-right" aria-label="Lean right">${ICONS.leanR}</button>

      <button type="button" class="tc-btn tc-fire" id="tc-btn-fire-right" aria-label="Fire">${ICONS.fire}</button>
      <button type="button" class="tc-btn tc-ads" id="tc-btn-ads" aria-label="Aim down sights">${ICONS.ads}</button>
      <button type="button" class="tc-btn tc-reload" id="tc-btn-reload" aria-label="Reload">
        ${ICONS.reload}
        <svg class="tc-ring" viewBox="0 0 36 36"><circle id="tc-reload-ring" cx="18" cy="18" r="16.5" pathLength="100" /></svg>
      </button>
      <button type="button" class="tc-btn tc-jump" id="tc-btn-jump" aria-label="Jump">${ICONS.jump}</button>
      <button type="button" class="tc-btn tc-crouch" id="tc-btn-crouch" aria-label="Crouch">${ICONS.crouch}</button>
      <button type="button" class="tc-btn tc-frag" id="tc-btn-frag" aria-label="Frag grenade">${ICONS.frag}<span class="tc-badge" id="tc-lbl-frag">1</span></button>
      <button type="button" class="tc-btn tc-flash" id="tc-btn-flash" aria-label="Flashbang">${ICONS.flash}<span class="tc-badge" id="tc-lbl-flash">1</span></button>
      <button type="button" class="tc-btn tc-mode" id="tc-btn-mode" aria-label="Fire mode">${ICONS.mode}<span class="tc-badge wide" id="tc-lbl-mode">AUTO</span></button>
      <button type="button" class="tc-btn tc-inspect" id="tc-btn-inspect" aria-label="Inspect weapon">${ICONS.inspect}</button>
    `;
    parent.appendChild(this.root);

    const q = <T extends Element>(sel: string) => this.root.querySelector(sel) as T;
    this.joyZoneEl = q('#tc-joy-zone');
    this.joyBaseEl = q('#tc-joy-base');
    this.joyKnobEl = q('#tc-joy-knob');
    this.joyLockEl = q('#tc-joy-lock');
    this.lookZoneEl = q('#tc-look-zone');
    this.btnAdsEl = q('#tc-btn-ads');
    this.btnCrouchEl = q('#tc-btn-crouch');
    this.btnLeanLeftEl = q('#tc-btn-lean-left');
    this.btnLeanRightEl = q('#tc-btn-lean-right');
    this.btnFragEl = q('#tc-btn-frag');
    this.btnFlashEl = q('#tc-btn-flash');
    this.btnReloadEl = q('#tc-btn-reload');
    this.btnRosterEl = q('#tc-btn-roster');
    this.btnFireRightEl = q('#tc-btn-fire-right');
    this.btnFireLeftEl = q('#tc-btn-fire-left');
    this.lblFragEl = q('#tc-lbl-frag');
    this.lblFlashEl = q('#tc-lbl-flash');
    this.lblModeEl = q('#tc-lbl-mode');
    this.reloadRingEl = q('#tc-reload-ring');

    this.updateScale();
    window.addEventListener('resize', () => this.updateScale());
    window.visualViewport?.addEventListener('resize', () => this.updateScale());

    this.bindJoystickEvents();
    this.bindLookEvents();
    this.bindFireButton(this.btnFireRightEl);
    this.bindFireButton(this.btnFireLeftEl);
    this.bindActionButtons();
  }

  /** Scale every control with the short side of the screen so phones and tablets both fit. */
  private updateScale(): void {
    const shortSide = Math.min(window.innerWidth, window.innerHeight);
    const s = Math.max(0.82, Math.min(1.4, shortSide / 400));
    this.root.style.setProperty('--tc-s', s.toFixed(3));
    this.joyRadius = 52 * s;
  }

  public setVisible(visible: boolean): void {
    const shouldShow = visible && this.input.touchModeEnabled;
    this.visible = shouldShow;
    this.root.style.display = shouldShow ? 'block' : 'none';
    document.body.classList.toggle('tc-active', shouldShow);
    if (!shouldShow) {
      this.resetAllTouches();
    }
  }

  public resetAllTouches(): void {
    this.joyTouchId = null;
    this.lookTouchId = null;
    this.fireTouchIds.clear();
    this.sprintLocked = false;
    this.lockArmed = false;
    this.resetJoystickVisual();
    this.btnFireRightEl.classList.remove('pressed');
    this.btnFireLeftEl.classList.remove('pressed');
    this.input.setTouchMove(0, 0, false);
    this.input.injectMouseUp(0);
  }

  private resetJoystickVisual(): void {
    this.joyBaseEl.style.transform = '';
    this.joyKnobEl.style.transform = 'translate(-50%, -50%)';
    this.joyBaseEl.classList.remove('active', 'sprinting', 'lock-armed');
    this.joyBaseEl.classList.toggle('locked', this.sprintLocked);
    if (this.sprintLocked) {
      this.joyKnobEl.style.transform = `translate(-50%, calc(-50% - ${this.joyRadius.toFixed(1)}px))`;
    }
  }

  private cancelSprintLock(): void {
    if (!this.sprintLocked) return;
    this.sprintLocked = false;
    this.input.setTouchMove(0, 0, false);
    this.resetJoystickVisual();
  }

  private findTouch(list: TouchList, id: number | null): Touch | null {
    if (id === null) return null;
    for (let i = 0; i < list.length; i++) {
      if (list[i].identifier === id) return list[i];
    }
    return null;
  }

  private bindJoystickEvents(): void {
    const update = (clientX: number, clientY: number) => {
      const r = this.joyRadius;
      const dx = clientX - this.joyOriginX;
      const dy = clientY - this.joyOriginY;
      const dist = Math.hypot(dx, dy);
      const clamped = Math.min(dist, r);
      const angle = Math.atan2(dy, dx);
      const kx = Math.cos(angle) * clamped;
      const ky = Math.sin(angle) * clamped;
      this.joyKnobEl.style.transform = `translate(calc(-50% + ${kx.toFixed(1)}px), calc(-50% + ${ky.toFixed(1)}px))`;

      const norm = clamped / r;
      if (norm < 0.12) {
        this.input.setTouchMove(0, 0, false);
        this.joyBaseEl.classList.remove('sprinting', 'lock-armed');
        this.lockArmed = false;
        return;
      }
      const moveX = kx / r;
      const moveZ = -ky / r;
      // Push forward past the ring to sprint; slide further up onto the lock icon to latch it
      const sprint = dist > r * 0.92 && moveZ > 0.6;
      this.lockArmed = dy < -r * 1.55 && Math.abs(dx) < r * 0.9;
      this.joyBaseEl.classList.toggle('sprinting', sprint);
      this.joyBaseEl.classList.toggle('lock-armed', this.lockArmed);
      this.input.setTouchMove(moveX, moveZ, sprint);
    };

    this.joyZoneEl.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        e.preventDefault();
        if (this.joyTouchId !== null) return;
        const t = e.changedTouches[0];
        if (!t) return;
        this.joyTouchId = t.identifier;
        this.sprintLocked = false;
        this.joyBaseEl.classList.remove('locked');

        // Floating stick: the base jumps to wherever the thumb lands inside the left zone
        const zone = this.joyZoneEl.getBoundingClientRect();
        const rest = this.joyBaseEl.getBoundingClientRect();
        const restCx = rest.left + rest.width * 0.5;
        const restCy = rest.top + rest.height * 0.5;
        const half = rest.width * 0.5;
        const cx = Math.max(zone.left + half, Math.min(zone.right - half, t.clientX));
        const cy = Math.max(zone.top + half * 2.2, Math.min(zone.bottom - half, t.clientY));
        this.joyOriginX = cx;
        this.joyOriginY = cy;
        this.joyBaseEl.style.transform = `translate(${(cx - restCx).toFixed(1)}px, ${(cy - restCy).toFixed(1)}px)`;
        this.joyBaseEl.classList.add('active');
        update(t.clientX, t.clientY);
      },
      { passive: false }
    );

    this.joyZoneEl.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        e.preventDefault();
        const t = this.findTouch(e.changedTouches, this.joyTouchId);
        if (t) update(t.clientX, t.clientY);
      },
      { passive: false }
    );

    const end = (e: TouchEvent) => {
      const t = this.findTouch(e.changedTouches, this.joyTouchId);
      if (!t) return;
      this.joyTouchId = null;
      if (this.lockArmed) {
        this.sprintLocked = true;
        this.input.setTouchMove(0, 1, true);
      } else {
        this.input.setTouchMove(0, 0, false);
      }
      this.lockArmed = false;
      this.resetJoystickVisual();
    };
    this.joyZoneEl.addEventListener('touchend', end, { passive: false });
    this.joyZoneEl.addEventListener('touchcancel', end, { passive: false });
  }

  private bindLookEvents(): void {
    const lookSpeed = 2.15;
    this.lookZoneEl.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        e.preventDefault();
        if (this.lookTouchId !== null) return;
        const t = e.changedTouches[0];
        if (!t) return;
        this.lookTouchId = t.identifier;
        this.lookLastX = t.clientX;
        this.lookLastY = t.clientY;
      },
      { passive: false }
    );
    this.lookZoneEl.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        e.preventDefault();
        const t = this.findTouch(e.changedTouches, this.lookTouchId);
        if (!t) return;
        this.input.injectLookDelta((t.clientX - this.lookLastX) * lookSpeed, (t.clientY - this.lookLastY) * lookSpeed);
        this.lookLastX = t.clientX;
        this.lookLastY = t.clientY;
      },
      { passive: false }
    );
    const end = (e: TouchEvent) => {
      if (this.findTouch(e.changedTouches, this.lookTouchId)) this.lookTouchId = null;
    };
    this.lookZoneEl.addEventListener('touchend', end, { passive: false });
    this.lookZoneEl.addEventListener('touchcancel', end, { passive: false });
  }

  /** Hold to fire; dragging the thumb while held keeps aiming (recoil control), like CoD Mobile. */
  private bindFireButton(el: HTMLButtonElement): void {
    const aimSpeed = 1.95;
    el.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const t = e.changedTouches[0];
        if (!t || this.fireTouchIds.has(el)) return;
        this.cancelSprintLock();
        this.fireTouchIds.set(el, t.identifier);
        this.fireLast.set(el, { x: t.clientX, y: t.clientY });
        el.classList.add('pressed');
        this.input.injectMouseDown(0);
      },
      { passive: false }
    );
    el.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const t = this.findTouch(e.changedTouches, this.fireTouchIds.get(el) ?? null);
        const last = this.fireLast.get(el);
        if (!t || !last) return;
        this.input.injectLookDelta((t.clientX - last.x) * aimSpeed, (t.clientY - last.y) * aimSpeed);
        last.x = t.clientX;
        last.y = t.clientY;
      },
      { passive: false }
    );
    const end = (e: TouchEvent) => {
      e.preventDefault();
      if (!this.findTouch(e.changedTouches, this.fireTouchIds.get(el) ?? null)) return;
      this.fireTouchIds.delete(el);
      el.classList.remove('pressed');
      if (this.fireTouchIds.size === 0) this.input.injectMouseUp(0);
    };
    el.addEventListener('touchend', end, { passive: false });
    el.addEventListener('touchcancel', end, { passive: false });

    el.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      el.classList.add('pressed');
      this.input.injectMouseDown(0);
    });
    el.addEventListener('mouseup', (e) => {
      e.stopPropagation();
      el.classList.remove('pressed');
      this.input.injectMouseUp(0);
    });
  }

  private bindTapButton(el: HTMLElement, action: () => void): void {
    let handledByTouch = false;
    el.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handledByTouch = true;
        el.classList.add('pressed');
        action();
      },
      { passive: false }
    );
    const release = () => el.classList.remove('pressed');
    el.addEventListener('touchend', release, { passive: true });
    el.addEventListener('touchcancel', release, { passive: true });
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
    const q = (sel: string) => this.root.querySelector(sel) as HTMLElement;
    this.bindTapButton(this.btnAdsEl, () => {
      this.cancelSprintLock();
      this.input.touchAdsToggled = !this.input.touchAdsToggled;
    });
    this.bindTapButton(this.btnReloadEl, () => this.input.injectKeyPress('KeyR'));
    this.bindTapButton(q('#tc-btn-jump'), () => this.input.injectKeyPress('Space'));
    this.bindTapButton(this.btnCrouchEl, () => {
      this.cancelSprintLock();
      this.input.touchCrouchToggled = !this.input.touchCrouchToggled;
    });
    this.bindTapButton(this.btnLeanLeftEl, () => {
      this.input.touchLeanState = this.input.touchLeanState === -1 ? 0 : -1;
    });
    this.bindTapButton(this.btnLeanRightEl, () => {
      this.input.touchLeanState = this.input.touchLeanState === 1 ? 0 : 1;
    });
    this.bindTapButton(this.btnFragEl, () => this.input.injectKeyPress('KeyG'));
    this.bindTapButton(this.btnFlashEl, () => this.input.injectKeyPress('KeyQ'));
    this.bindTapButton(q('#tc-btn-mode'), () => this.input.injectKeyPress('KeyB'));
    this.bindTapButton(q('#tc-btn-inspect'), () => this.input.injectKeyPress('KeyF'));
    this.bindTapButton(this.btnRosterEl, () => {
      this.input.touchScoreboardOpen = !this.input.touchScoreboardOpen;
    });
    this.bindTapButton(q('#tc-btn-pause'), () => this.callbacks.onPauseRequested());
    this.bindTapButton(q('#tc-btn-fullscreen'), () => this.callbacks.onToggleFullscreen());
  }

  private setLabel(el: HTMLElement, text: string): void {
    if (this.lastLabels.get(el) === text) return;
    this.lastLabels.set(el, text);
    el.textContent = text;
  }

  public update(player: Player): void {
    if (!this.visible) return;
    const w = player.weapon;

    // Sprint lock is cancelled by anything that would break a sprint
    if (this.sprintLocked && (this.input.touchAdsToggled || this.input.touchCrouchToggled || !player.isAlive)) {
      this.cancelSprintLock();
    }

    this.btnAdsEl.classList.toggle('on', this.input.touchAdsToggled);
    this.btnCrouchEl.classList.toggle('on', player.controller.isCrouching);
    this.btnLeanLeftEl.classList.toggle('on', this.input.touchLeanState === -1);
    this.btnLeanRightEl.classList.toggle('on', this.input.touchLeanState === 1);
    this.btnRosterEl.classList.toggle('on', this.input.touchScoreboardOpen);
    this.btnReloadEl.classList.toggle('alert', w.magAmmo <= 8 && !w.isReloading);
    this.btnReloadEl.classList.toggle('reloading', w.isReloading);
    if (w.isReloading) {
      const prog = Math.max(0, Math.min(1, w.reloadTimer / Math.max(0.01, w.reloadDuration)));
      this.reloadRingEl.style.strokeDashoffset = String(Math.round((1 - prog) * 100));
    }
    this.setLabel(this.lblModeEl, w.fireMode);
    this.setLabel(this.lblFragEl, String(w.explosiveCount));
    this.setLabel(this.lblFlashEl, String(w.tacticalCount));
    this.btnFragEl.classList.toggle('depleted', w.explosiveCount <= 0);
    this.btnFlashEl.classList.toggle('depleted', w.tacticalCount <= 0);
  }
}
