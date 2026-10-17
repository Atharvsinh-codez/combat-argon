import { Settings } from './Settings';

export type DebugViewMode =
  | 'none'
  | 'cascades'
  | 'normals'
  | 'velocity'
  | 'ao'
  | 'bvh'
  | 'nav'
  | 'audio'
  | 'timings';

export class Input {
  private settings: Settings;
  private keysDown = new Set<string>();
  private keysPressed = new Set<string>();
  private mouseButtonsDown = new Set<number>();
  private mouseButtonsPressed = new Set<number>();

  private mouseDeltaX = 0;
  private mouseDeltaY = 0;
  public isPointerLocked = false;
  public debugView: DebugViewMode = 'none';

  // Mobile & Tablet Touch Control State
  public isTouchDevice = false;
  public touchModeEnabled = false;
  /** `?mobile=1` / `?touch=1` pin touch mode on so a stray mouse event never switches it off. */
  private touchModeForced = false;
  private onGestureCallbacks: Array<() => void> = [];
  private touchMoveX = 0;
  private touchMoveZ = 0;
  public touchSprintActive = false;
  public touchAdsToggled = false;
  public touchCrouchToggled = false;
  public touchLeanState: -1 | 0 | 1 = 0;
  public touchScoreboardOpen = false;

  private targetElement: HTMLElement;
  private onPointerLockChangeCallbacks: Array<(locked: boolean) => void> = [];
  private onFirstInteractionCallbacks: Array<() => void> = [];
  private onTouchModeChangeCallbacks: Array<(enabled: boolean) => void> = [];
  private interacted = false;

  constructor(targetElement: HTMLElement, settings: Settings) {
    this.targetElement = targetElement;
    this.settings = settings;
    this.detectTouchCapability();
    this.bindEvents();
    this.checkQueryDebug();
  }

  private detectTouchCapability(): void {
    const params = new URLSearchParams(window.location.search);
    const forceMobile = params.get('mobile') === '1' || params.get('touch') === '1';
    const hasTouch =
      forceMobile ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    this.isTouchDevice = hasTouch;
    this.touchModeForced = forceMobile;
    // Touch-screen laptops report touch support but are usually played with a mouse, so only
    // phones/tablets (coarse primary pointer) start in touch mode; a real touch switches it on later.
    this.touchModeEnabled = forceMobile || window.matchMedia('(pointer: coarse)').matches;
  }

  public setTouchModeEnabled(enabled: boolean): void {
    if (this.touchModeEnabled === enabled) return;
    this.touchModeEnabled = enabled;
    if (!enabled) {
      this.touchMoveX = 0;
      this.touchMoveZ = 0;
      this.touchSprintActive = false;
      this.touchAdsToggled = false;
      this.touchCrouchToggled = false;
      this.touchLeanState = 0;
      this.touchScoreboardOpen = false;
    }
    for (const cb of this.onTouchModeChangeCallbacks) {
      cb(enabled);
    }
  }

  public onTouchModeChange(cb: (enabled: boolean) => void): void {
    this.onTouchModeChangeCallbacks.push(cb);
  }

  private checkQueryDebug(): void {
    const params = new URLSearchParams(window.location.search);
    const dbg = params.get('debug') as DebugViewMode | null;
    if (dbg) {
      this.debugView = dbg;
    }
  }

  /** Fires on every trusted user gesture; mobile audio can only be (re)unlocked from inside one. */
  public onGesture(cb: () => void): void {
    this.onGestureCallbacks.push(cb);
  }

  private emitGesture(): void {
    for (const cb of this.onGestureCallbacks) cb();
  }

  private isFormTarget(target: EventTarget | null): boolean {
    const el = target as HTMLElement | null;
    if (!el || !el.tagName) return false;
    const tag = el.tagName;
    return tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA' || tag === 'BUTTON' || el.isContentEditable;
  }

  private bindEvents(): void {
    window.addEventListener('keydown', (e) => {
      this.emitGesture();
      // Stop the browser from moving focus (Tab), scrolling (Space/arrows) or navigating while in game
      const inGame = this.isPointerLocked || !this.isFormTarget(e.target);
      if (
        inGame &&
        (e.code === 'Tab' || e.code === 'Space' || e.code.startsWith('Arrow') || e.code === 'Backspace')
      ) {
        e.preventDefault();
      }
      if (e.repeat && this.keysDown.has(e.code)) return;
      if (!this.keysDown.has(e.code)) {
        this.keysPressed.add(e.code);
      }
      this.keysDown.add(e.code);

      // Debug view hotkeys F1-F9
      if (e.code === 'Digit1' && e.altKey) this.debugView = 'none';
      else if (e.code === 'Digit2' && e.altKey) this.debugView = 'cascades';
      else if (e.code === 'Digit3' && e.altKey) this.debugView = 'normals';
      else if (e.code === 'Digit4' && e.altKey) this.debugView = 'velocity';
      else if (e.code === 'Digit5' && e.altKey) this.debugView = 'ao';
      else if (e.code === 'Digit6' && e.altKey) this.debugView = 'bvh';
      else if (e.code === 'Digit7' && e.altKey) this.debugView = 'nav';
      else if (e.code === 'Digit8' && e.altKey) this.debugView = 'audio';
      else if (e.code === 'Digit9' && e.altKey) this.debugView = 'timings';
    });

    window.addEventListener('keyup', (e) => {
      this.keysDown.delete(e.code);
    });

    window.addEventListener('pointerdown', (e) => {
      this.emitGesture();
      if (e.pointerType === 'touch' || e.pointerType === 'pen') {
        if (!this.touchModeEnabled) this.setTouchModeEnabled(true);
      } else if (e.pointerType === 'mouse' && this.touchModeEnabled && !this.touchModeForced) {
        // Hybrid device: the player went back to the mouse, so restore desktop controls
        this.setTouchModeEnabled(false);
      }
    });
    window.addEventListener('touchend', () => this.emitGesture(), { passive: true });
    window.addEventListener('click', () => this.emitGesture());

    window.addEventListener('mousedown', (e) => {
      this.triggerFirstInteraction();
      if (!this.mouseButtonsDown.has(e.button)) {
        this.mouseButtonsPressed.add(e.button);
      }
      this.mouseButtonsDown.add(e.button);
    });

    window.addEventListener('mouseup', (e) => {
      this.mouseButtonsDown.delete(e.button);
    });

    window.addEventListener(
      'touchstart',
      () => {
        this.triggerFirstInteraction();
        if (!this.touchModeEnabled) {
          this.setTouchModeEnabled(true);
        }
      },
      { passive: true }
    );

    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isPointerLocked) return;
      // Guard against browser spikes on pointer lock acquisition
      if (Math.abs(e.movementX) > 450 || Math.abs(e.movementY) > 450) return;
      this.mouseDeltaX += e.movementX;
      this.mouseDeltaY += e.movementY;
    });

    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = document.pointerLockElement === this.targetElement;
      if (!this.isPointerLocked) {
        this.clearTransientInputs();
      }
      for (const cb of this.onPointerLockChangeCallbacks) {
        cb(this.isPointerLocked);
      }
    });

    window.addEventListener('blur', () => {
      this.clearTransientInputs();
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.clearTransientInputs();
      }
    });
  }

  public triggerFirstInteraction(): void {
    if (!this.interacted) {
      this.interacted = true;
      for (const cb of this.onFirstInteractionCallbacks) {
        cb();
      }
    }
  }

  public onFirstInteraction(cb: () => void): void {
    if (this.interacted) {
      cb();
    } else {
      this.onFirstInteractionCallbacks.push(cb);
    }
  }

  public onPointerLockChange(cb: (locked: boolean) => void): void {
    this.onPointerLockChangeCallbacks.push(cb);
  }

  public requestPointerLock(): void {
    this.triggerFirstInteraction();
    if (this.touchModeEnabled) {
      return;
    }
    try {
      if (document.pointerLockElement !== this.targetElement) {
        const el = this.targetElement as HTMLElement & {
          requestPointerLock(options?: { unadjustedMovement?: boolean }): Promise<void> | void;
        };
        // Raw (unaccelerated) mouse deltas where supported; fall back to the default lock otherwise.
        let promise: Promise<void> | void;
        try {
          promise = el.requestPointerLock({ unadjustedMovement: true });
        } catch {
          promise = el.requestPointerLock();
        }
        if (promise && typeof promise.catch === 'function') {
          promise.catch((err: unknown) => {
            if (document.pointerLockElement === this.targetElement) return;
            if ((err as { name?: string } | null)?.name !== 'NotSupportedError') return;
            const retry = el.requestPointerLock() as Promise<void> | void;
            if (retry && typeof retry.catch === 'function') retry.catch(() => {});
            // Headless browsers or cancelled lock requests should not throw unhandled rejections
          });
        }
      }
    } catch {
      // Ignore in headless automated tests
    }
  }

  public exitPointerLock(): void {
    try {
      if (document.pointerLockElement) {
        document.exitPointerLock();
      }
    } catch {
      // Ignore
    }
  }

  public clearTransientInputs(): void {
    this.keysDown.clear();
    this.keysPressed.clear();
    this.mouseButtonsDown.clear();
    this.mouseButtonsPressed.clear();
    this.mouseDeltaX = 0;
    this.mouseDeltaY = 0;
    this.touchMoveX = 0;
    this.touchMoveZ = 0;
    this.touchSprintActive = false;
  }

  /** Drop every latched toggle (ADS, crouch, lean, scoreboard), e.g. on death or respawn. */
  public resetToggles(): void {
    this.touchAdsToggled = false;
    this.touchCrouchToggled = false;
    this.touchLeanState = 0;
    this.touchScoreboardOpen = false;
    this.touchSprintActive = false;
  }

  public setTouchMove(x: number, z: number, sprint = false): void {
    this.touchMoveX = Math.max(-1, Math.min(1, x));
    this.touchMoveZ = Math.max(-1, Math.min(1, z));
    this.touchSprintActive = sprint;
    if (sprint) {
      this.touchAdsToggled = false;
      this.touchCrouchToggled = false;
      this.touchLeanState = 0;
    }
  }

  public consumeLookDelta(isAds: boolean): { yawDelta: number; pitchDelta: number } {
    const baseSens = 0.0019 * this.settings.data.sensitivity;
    const mult = isAds ? this.settings.data.adsMultiplier : 1.0;
    const inv = this.settings.data.invertY ? -1 : 1;

    const yawDelta = -this.mouseDeltaX * baseSens * mult;
    const pitchDelta = -this.mouseDeltaY * baseSens * mult * inv;

    this.mouseDeltaX = 0;
    this.mouseDeltaY = 0;
    return { yawDelta, pitchDelta };
  }

  public injectLookDelta(dx: number, dy: number): void {
    this.mouseDeltaX += dx;
    this.mouseDeltaY += dy;
  }

  public setVirtualKey(code: string, down: boolean): void {
    if (down) {
      if (!this.keysDown.has(code)) this.keysPressed.add(code);
      this.keysDown.add(code);
    } else {
      this.keysDown.delete(code);
    }
  }

  public setVirtualMouseButton(button: number, down: boolean): void {
    if (down) {
      if (!this.mouseButtonsDown.has(button)) this.mouseButtonsPressed.add(button);
      this.mouseButtonsDown.add(button);
    } else {
      this.mouseButtonsDown.delete(button);
    }
  }

  public injectKeyPress(code: string): void {
    this.keysPressed.add(code);
  }

  public injectMouseDown(button: number): void {
    this.setVirtualMouseButton(button, true);
  }

  public injectMouseUp(button: number): void {
    this.setVirtualMouseButton(button, false);
  }

  public isKeyDown(code: string): boolean {
    return this.keysDown.has(code);
  }

  public wasKeyPressed(code: string): boolean {
    return this.keysPressed.has(code);
  }

  public isMouseDown(button: number): boolean {
    return this.mouseButtonsDown.has(button);
  }

  public wasMousePressed(button: number): boolean {
    return this.mouseButtonsPressed.has(button);
  }

  public getMoveAxes(): { x: number; z: number } {
    const kb = this.settings.data.keybinds;
    let x = this.touchMoveX;
    let z = this.touchMoveZ;
    if (this.isKeyDown(kb.forward) || this.isKeyDown('ArrowUp')) z += 1;
    if (this.isKeyDown(kb.backward) || this.isKeyDown('ArrowDown')) z -= 1;
    if (this.isKeyDown(kb.right) || this.isKeyDown('ArrowRight')) x += 1;
    if (this.isKeyDown(kb.left) || this.isKeyDown('ArrowLeft')) x -= 1;
    const len = Math.hypot(x, z);
    if (len > 1) {
      x /= len;
      z /= len;
    }
    return { x, z };
  }

  public isSprinting(): boolean {
    const kb = this.settings.data.keybinds;
    return this.isKeyDown(kb.sprint) || this.isKeyDown('ShiftRight') || this.touchSprintActive;
  }

  public isCrouching(): boolean {
    const kb = this.settings.data.keybinds;
    return this.isKeyDown(kb.crouch) || this.isKeyDown('ControlLeft') || this.touchCrouchToggled;
  }

  public getLeanTarget(): number {
    if (this.isKeyDown('KeyQ')) return -1;
    if (this.isKeyDown('KeyE')) return 1;
    return this.touchLeanState;
  }

  public wasJumpPressed(): boolean {
    const jumped = this.wasKeyPressed(this.settings.data.keybinds.jump);
    if (jumped && this.touchCrouchToggled) {
      this.touchCrouchToggled = false;
    }
    return jumped;
  }

  public isJumpHeld(): boolean {
    return this.isKeyDown(this.settings.data.keybinds.jump);
  }

  public isAdsHeld(): boolean {
    return this.isMouseDown(2) || this.isKeyDown('KeyV') || this.touchAdsToggled;
  }

  public isScoreboardShown(): boolean {
    return this.isKeyDown('Tab') || this.touchScoreboardOpen;
  }

  public isFireHeld(): boolean {
    return this.isMouseDown(0);
  }

  public wasFirePressed(): boolean {
    return this.wasMousePressed(0);
  }

  public wasReloadPressed(): boolean {
    return this.wasKeyPressed(this.settings.data.keybinds.reload);
  }

  public wasFireModePressed(): boolean {
    return this.wasKeyPressed(this.settings.data.keybinds.fireMode);
  }

  public wasInspectPressed(): boolean {
    return this.wasKeyPressed(this.settings.data.keybinds.inspect);
  }

  public wasTacticalPressed(): boolean {
    return this.wasKeyPressed(this.settings.data.keybinds.tactical);
  }

  public wasExplosivePressed(): boolean {
    return this.wasKeyPressed(this.settings.data.keybinds.explosive);
  }

  public wasPausePressed(): boolean {
    return this.wasKeyPressed(this.settings.data.keybinds.pause) || this.wasKeyPressed('KeyP');
  }

  public endFrame(): void {
    this.keysPressed.clear();
    this.mouseButtonsPressed.clear();
  }
}
