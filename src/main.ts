import * as THREE from 'three';
import { SeededRandom } from './core/SeededRandom';
import { Settings } from './core/Settings';
import { Input, DebugViewMode } from './core/Input';
import { GameLoop } from './core/GameLoop';
import { BVH } from './physics/BVH';
import { RigidWorld } from './physics/RigidWorld';
import { MaterialLibrary } from './world/MaterialLibrary';
import { PropSystem } from './world/PropSystem';
import { MapGenerator } from './world/MapGenerator';
import { SynthEngine } from './audio/SynthEngine';
import { SpatialAudio } from './audio/SpatialAudio';
import { EffectsSystem } from './game/EffectsSystem';
import { DamageSystem } from './game/DamageSystem';
import { Player } from './game/Player';
import { NavWorld } from './ai/NavWorld';
import { RenderGraph } from './render/RenderGraph';
import { HUD } from './ui/HUD';
import { Menu } from './ui/Menu';
import { TouchControls } from './ui/TouchControls';
import { MatchDirector } from './game/MatchDirector';

/**
 * Main Application Entry & Deterministic Playwright Verification Harness (`window.__GAME_DEBUG__`)
 */
class TacticalFPSGame {
  public settings: Settings;
  public rng: SeededRandom;
  public input: Input;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderGraph: RenderGraph;

  public bvh: BVH;
  public rigidWorld: RigidWorld;
  public matLib: MaterialLibrary;
  public propSystem: PropSystem;
  public mapGen: MapGenerator;
  public navWorld: NavWorld;

  public synth: SynthEngine;
  public spatialAudio: SpatialAudio;
  public effects: EffectsSystem;
  public damageSystem: DamageSystem;
  public player: Player;
  public hud: HUD;
  public menu: Menu;
  public touchControls: TouchControls;
  public director: MatchDirector;
  public gameLoop: GameLoop;

  public simTime = 0;
  private bvhDebugGroup: THREE.Object3D | null = null;
  private navDebugGroup: THREE.Object3D | null = null;
  private _forward = new THREE.Vector3();
  private _up = new THREE.Vector3(0, 1, 0);

  constructor() {
    const appEl = document.getElementById('app')!;
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;

    const params = new URLSearchParams(window.location.search);
    const seedParam = params.get('seed');
    const seed = seedParam ? parseInt(seedParam, 10) || 1337420 : 1337420;

    this.settings = new Settings();
    this.rng = new SeededRandom(seed);
    this.input = new Input(canvas, this.settings);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.settings.data.fov,
      window.innerWidth / window.innerHeight,
      0.08,
      460
    );

    // 1. Custom WebGL2 Multi-Pass Render Graph + Sky & Volumetric Cumulus Clouds
    this.renderGraph = new RenderGraph(canvas, this.scene, this.settings);

    // 2. Procedural PBR Material & Texture Library
    this.matLib = new MaterialLibrary(seed);

    // 3. Custom SAH BVH & RigidBody / Casing Solver
    this.bvh = new BVH();
    this.synth = new SynthEngine(seed);
    if (this.settings.isMobile) {
      this.synth.lowCostPanning = true;
      this.synth.maxVoices = 32;
    }
    this.spatialAudio = new SpatialAudio(this.synth, this.bvh);
    this.rigidWorld = new RigidWorld(
      this.scene,
      this.settings.getQualityParams().maxCasings
    );

    // 4. Dense North African / Mediterranean Urban Market Map ("CASBAH SECTOR 04")
    this.propSystem = new PropSystem(
      this.matLib,
      this.bvh,
      this.rigidWorld,
      this.rng.fork('props')
    );
    this.mapGen = new MapGenerator(
      this.scene,
      this.matLib,
      this.bvh,
      this.rigidWorld,
      this.propSystem,
      seed
    );
    this.mapGen.build();

    // 5. Walkable NavGrid & Cover Evaluator
    this.navWorld = new NavWorld(this.bvh, this.propSystem.coverNodes);

    // 6. Pooled Ballistic Decals, Particles, Smoke & Damage System
    this.effects = new EffectsSystem(
      this.scene,
      this.rng.fork('effects'),
      this.settings.getQualityParams().maxDecals
    );
    this.damageSystem = new DamageSystem(
      this.bvh,
      this.rigidWorld,
      this.effects,
      this.spatialAudio,
      this.rng.fork('damage')
    );

    // Wire casing/prop collision audio & explosive / flashbang detonation callback
    this.rigidWorld.onCollisionSound = (point, speed, bodyMat, surfaceMat, isCasing) => {
      if (isCasing) {
        this.spatialAudio.playCasingBounceAt(point, speed, surfaceMat);
      } else {
        this.spatialAudio.playImpactAt(point, bodyMat, false, this.simTime);
      }
    };

    this.rigidWorld.onThrowableDetonate = (pos, type) => {
      const radius = type === 'frag' ? 7.5 : 9.0;
      this.effects.spawnExplosionEffect(pos, type);
      this.rigidWorld.applyExplosionImpulse(pos, radius, type === 'frag' ? 28 : 8);
      this.spatialAudio.playGunshotAt(pos, 'alpha', this.simTime, false);
      if (type === 'frag') {
        for (const t of this.director.allTargets) {
          if (!t.isAlive) continue;
          const d = t.getPosition().distanceTo(pos);
          if (d < radius) {
            const dmg = Math.round((1 - d / radius) * 125);
            const imp = t.getPosition().clone().sub(pos).normalize().multiplyScalar(80);
            t.applyDamage(
              dmg,
              'torso',
              pos,
              imp,
              this.player.id,
              this.player.name,
              this.player.team,
              pos
            );
          }
        }
      }
    };

    // 7. First-Person Player & MK18 Carbine Viewmodel (rendered in dedicated 58 deg FOV viewmodelScene)
    this.player = new Player(
      this.mapGen.alphaSpawns[0],
      this.settings,
      this.rng.fork('player')
    );
    this.renderGraph.viewmodelScene.add(this.player.weapon.root);

    // 8. Tactical HUD, Touch Controls, Menu & Match Director
    this.hud = new HUD(appEl);
    this.touchControls = new TouchControls(appEl, this.input, {
      onPauseRequested: () => {
        if (this.director.mode === 'playing') {
          this.director.mode = 'paused';
          document.exitPointerLock?.();
          this.touchControls.setVisible(false);
          this.menu.showPause();
        }
      },
      onToggleFullscreen: () => {
        this.toggleFullscreen();
      }
    });

    this.menu = new Menu(appEl, this.settings, this.synth, {
      onDeploy: () => this.deployToCombat(),
      onResume: () => this.resumeCombat(),
      onRestartMatch: () => this.restartMatch(),
      onSettingsChanged: () => this.applySettingsUpdate(),
      onToggleTouchControls: () => {
        this.input.setTouchModeEnabled(!this.input.touchModeEnabled);
        return this.input.touchModeEnabled;
      },
      isTouchControlsEnabled: () => this.input.touchModeEnabled,
      onToggleFullscreen: () => this.toggleFullscreen()
    });

    this.input.onTouchModeChange((enabled) => {
      document.body.classList.toggle('touch-mode', enabled);
      this.touchControls.setVisible(this.director.mode === 'playing' && enabled);
    });
    document.body.classList.toggle('touch-mode', this.input.touchModeEnabled);

    this.director = new MatchDirector(
      this.scene,
      this.bvh,
      this.rigidWorld,
      this.navWorld,
      this.mapGen,
      this.settings,
      this.player,
      this.damageSystem,
      this.effects,
      this.spatialAudio,
      this.hud,
      this.rng.fork('director'),
      (victory, alpha, bravo) => {
        document.exitPointerLock?.();
        this.hud.setVisible(false);
        this.touchControls.setVisible(false);
        this.menu.showEndRound(victory, alpha, bravo);
      }
    );

    this.bindSystemEvents();
    this.exposeDebugHarness();

    // Check URL flags for automated testing (`?autostart=1` or `?benchmark=1`)
    if (params.get('autostart') === '1' || params.get('benchmark') === '1') {
      this.deployToCombat(false);
    } else {
      this.hud.setVisible(false);
      this.touchControls.setVisible(false);
      this.menu.showTitle();
    }

    this.warmupShaders();

    // 9. Start Fixed 120 Hz Simulation & Render Loop
    this.gameLoop = new GameLoop(
      (dt) => this.stepFixed(dt),
      (alpha, frameDt) => this.renderFrame(alpha, frameDt)
    );
    if (params.get('manual') === '1') {
      this.gameLoop.stepDeterministic(1 / 60, false);
    } else {
      this.gameLoop.start();
    }
  }

  /**
   * Compile every shader variant up front. Muzzle flash, viewmodel, smoke, decals and throwables
   * start hidden, so without this their programs compiled on first use and caused the hitch on
   * the first shot / first grenade.
   */
  private warmupShaders(): void {
    const revealed: THREE.Object3D[] = [];
    const reveal = (root: THREE.Object3D) => {
      root.traverse((o) => {
        if (!o.visible) {
          o.visible = true;
          revealed.push(o);
        }
      });
    };
    const throwableProxy = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 6, 6),
      new THREE.MeshStandardMaterial({ color: 0x3b4730, metalness: 0.65, roughness: 0.4 })
    );
    throwableProxy.position.set(0, -50, 0);
    this.scene.add(throwableProxy);
    reveal(this.scene);
    reveal(this.renderGraph.viewmodelScene);
    try {
      this.renderGraph.renderer.compile(this.scene, this.camera);
      this.renderGraph.renderer.compile(this.renderGraph.viewmodelScene, this.renderGraph.viewmodelCamera);
      this.renderGraph.renderFrame(
        this.scene,
        this.camera,
        this.player.weapon.root,
        this.matLib.sharedUniforms,
        0,
        1 / 60,
        0,
        0,
        'none'
      );
    } catch {
      // Warmup is best-effort; normal rendering compiles lazily
    } finally {
      for (const o of revealed) o.visible = false;
      this.scene.remove(throwableProxy);
      throwableProxy.geometry.dispose();
      this.renderGraph.prepass.resetHistory();
    }
  }

  private handleResize = (): void => {
    this.camera.aspect = window.innerWidth / Math.max(1, window.innerHeight);
    this.camera.updateProjectionMatrix();
    this.renderGraph.resize(window.innerWidth, window.innerHeight);
    this.renderFrame(1.0, 1 / 60);
  };

  private bindSystemEvents(): void {
    window.addEventListener('resize', this.handleResize);
    // Mobile browsers often report the new size a beat after the rotation/fullscreen event
    const settleResize = () => {
      this.handleResize();
      setTimeout(this.handleResize, 120);
      setTimeout(this.handleResize, 400);
    };
    window.addEventListener('orientationchange', settleResize);
    const onFullscreenChange = () => {
      const fs = this.isFullscreen();
      document.body.classList.toggle('is-fullscreen', fs);
      this.menu.setFullscreenState(fs);
      settleResize();
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    if (!this.fullscreenSupported()) {
      document.body.classList.add('ios-no-fullscreen');
    }

    this.input.onFirstInteraction(() => {
      this.synth.ensureContext(this.settings.data.masterVolume);
    });
    this.input.onGesture(() => {
      this.synth.unlockFromGesture(this.settings.data.masterVolume);
    });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.synth.ctx) {
        this.synth.ensureContext(this.settings.data.masterVolume);
      }
    });

    this.input.onPointerLockChange((locked) => {
      if (!locked && this.director.mode === 'playing') {
        const params = new URLSearchParams(window.location.search);
        if (params.get('autostart') !== '1' && params.get('benchmark') !== '1') {
          this.director.mode = 'paused';
          this.touchControls.setVisible(false);
          this.menu.showPause();
        }
      }
    });
  }

  public deployToCombat(requestLock = true): void {
    this.synth.ensureContext(this.settings.data.masterVolume);
    // Fullscreen must be requested before pointer lock inside the same click
    if (requestLock && this.settings.data.autoFullscreen) this.enterFullscreen();
    this.menu.hideAll();
    this.hud.setVisible(true);
    this.touchControls.setVisible(true);
    this.director.startNewMatch();
    if (requestLock) {
      this.input.requestPointerLock();
    }
  }

  public resumeCombat(): void {
    this.synth.ensureContext(this.settings.data.masterVolume);
    if (this.settings.data.autoFullscreen) this.enterFullscreen();
    this.menu.hideAll();
    this.hud.setVisible(true);
    this.touchControls.setVisible(true);
    this.director.mode = 'playing';
    this.input.requestPointerLock();
  }

  private isFullscreen(): boolean {
    const doc = document as Document & { webkitFullscreenElement?: Element };
    return !!(document.fullscreenElement || doc.webkitFullscreenElement);
  }

  private fullscreenSupported(): boolean {
    const el = document.documentElement as HTMLElement & { webkitRequestFullscreen?: unknown };
    return !!(el.requestFullscreen || el.webkitRequestFullscreen);
  }

  /** Must run inside a user gesture. Also locks phones to landscape where the browser allows it. */
  public enterFullscreen(): void {
    if (this.isFullscreen() || !this.fullscreenSupported()) return;
    const el = document.documentElement as HTMLElement & {
      webkitRequestFullscreen?: (opts?: unknown) => Promise<void> | void;
    };
    const lockLandscape = () => {
      const orientation = screen.orientation as ScreenOrientation & {
        lock?: (o: string) => Promise<void>;
      };
      if (this.input.touchModeEnabled && orientation?.lock) {
        orientation.lock('landscape').catch(() => {});
      }
    };
    try {
      if (el.requestFullscreen) {
        el.requestFullscreen({ navigationUI: 'hide' }).then(lockLandscape).catch(() => {});
      } else if (el.webkitRequestFullscreen) {
        const r = el.webkitRequestFullscreen();
        if (r && typeof (r as Promise<void>).then === 'function') (r as Promise<void>).then(lockLandscape).catch(() => {});
      }
    } catch {
      // Ignore: fullscreen is a convenience
    }
  }

  public exitFullscreen(): void {
    const doc = document as Document & { webkitExitFullscreen?: () => void };
    if (!this.isFullscreen()) return;
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    }
  }

  public toggleFullscreen(): void {
    if (this.isFullscreen()) this.exitFullscreen();
    else this.enterFullscreen();
  }

  public restartMatch(): void {
    this.deployToCombat(true);
  }

  private applySettingsUpdate(): void {
    this.synth.setMasterVolume(this.settings.data.masterVolume);
    this.renderGraph.applyInternalScale(this.settings.data.renderScale);
  }

  private stepFixed(dt: number): void {
    this.simTime += dt;

    if (this.input.wasPausePressed() && this.director.mode === 'playing') {
      this.director.mode = 'paused';
      document.exitPointerLock?.();
      this.touchControls.setVisible(false);
      this.menu.showPause();
    }

    this.director.stepFixed(dt, this.simTime, this.input);
    this.rigidWorld.step(dt, this.bvh);
    this.effects.update(dt, this.camera);
    this.propSystem.updateEnvironmentalMotion(this.simTime, dt);

    this.player.getAimDirection(this._forward);
    this.spatialAudio.updateListener(
      this.camera.position,
      this._forward,
      this._up,
      dt,
      this.simTime
    );

    this.input.endFrame();
  }

  private renderFrame(alpha: number, frameDt: number): void {
    if (this.director.mode === 'playing') {
      this.player.applyFrameLook(this.input);
    }
    this.director.syncVisuals(alpha, this.camera);
    this.rigidWorld.syncRenderTransforms(alpha);

    // Update shared world material uniforms (wind sway & cloud shadow scroll)
    this.matLib.sharedUniforms.uTime.value = this.simTime;
    this.matLib.sharedUniforms.uCloudWindOffset.value.set(
      this.simTime * 0.65,
      this.simTime * 0.32
    );

    // Toggle 3D debug wireframes if requested
    this.updateDebugWireframes(this.input.debugView);

    const lowHealthFactor =
      this.player.health < 40 ? (40 - this.player.health) / 40 : 0;

    this.renderGraph.evaluateDynamicScale(
      this.gameLoop.telemetry.avgFrameTimeMs,
      this.simTime
    );

    this.renderGraph.renderFrame(
      this.scene,
      this.camera,
      this.player.weapon.root,
      this.matLib.sharedUniforms,
      this.simTime,
      frameDt,
      lowHealthFactor,
      this.player.damageFlash,
      this.input.debugView
    );

    if (this.director.mode !== 'title') {
      const telemetryText = (): string => {
        const stats = this.renderGraph.getRenderCallStats();
        const t = this.gameLoop.telemetry;
        return (
          `FPS: ${t.fps.toFixed(1)} | AVG: ${t.avgFrameTimeMs.toFixed(2)}ms | P95: ${t.p95FrameTimeMs.toFixed(2)}ms\n` +
          `PHYS: ${t.physicsTimeMs.toFixed(2)}ms | REND: ${t.renderTimeMs.toFixed(2)}ms | SCALE: ${Math.round(stats.internalScale * 100)}%\n` +
          `CALLS: ${stats.calls} | TRIS: ${stats.triangles} | VOICES: ${this.synth.activeVoiceCount}\n` +
          `POS: (${this.player.controller.position.x.toFixed(1)}, ${this.player.controller.position.y.toFixed(2)}, ${this.player.controller.position.z.toFixed(1)})`
        );
      };

      this.hud.update(
        frameDt,
        this.simTime,
        this.player,
        this.director.bots,
        this.mapGen.footprints,
        this.director.alphaScore,
        this.director.bravoScore,
        this.director.matchTimeRemaining,
        this.director.getCurrentZoneCallout(),
        this.input.isScoreboardShown(),
        () => this.director.getAllCombatantStats(),
        this.input.debugView === 'timings',
        telemetryText
      );
      this.touchControls.update(this.player);
    }
  }

  private updateDebugWireframes(mode: DebugViewMode): void {
    if (mode === 'bvh') {
      if (!this.bvhDebugGroup) {
        this.bvhDebugGroup = this.bvh.createDebugMesh();
        this.scene.add(this.bvhDebugGroup);
      }
      this.bvhDebugGroup.visible = true;
    } else if (this.bvhDebugGroup) {
      this.bvhDebugGroup.visible = false;
    }

    if (mode === 'nav') {
      if (!this.navDebugGroup) {
        this.navDebugGroup = this.navWorld.createDebugMesh();
        this.scene.add(this.navDebugGroup);
      }
      this.navDebugGroup.visible = true;
    } else if (this.navDebugGroup) {
      this.navDebugGroup.visible = false;
    }
  }

  private exposeDebugHarness(): void {
    const self = this;
    (window as unknown as Record<string, unknown>).__GAME_DEBUG__ = {
      game: self,
      pauseLoop: () => self.gameLoop.stop(),
      resumeLoop: () => self.gameLoop.start(),
      deploy: () => self.deployToCombat(false),
      teleportToView: (viewName: string) => {
        const v = self.mapGen.benchmarkViews[viewName];
        if (!v) return false;
        if (self.director.mode === 'title') {
          self.deployToCombat(false);
        }
        self.player.spawnAt(v.position, v.yaw);
        self.player.pitch = v.pitch;
        self.renderGraph.prepass.resetHistory();
        self.gameLoop.stepDeterministic(0.15, false);
        return true;
      },
      setPlayerPose: (x: number, y: number, z: number, yaw: number, pitch = 0) => {
        if (self.director.mode === 'title') {
          self.deployToCombat(false);
        }
        self.player.spawnAt(new THREE.Vector3(x, y, z), yaw);
        self.player.pitch = pitch;
        self.renderGraph.prepass.resetHistory();
        self.gameLoop.stepDeterministic(0.1, false);
      },
      setAds: (ads: boolean) => {
        self.input.setVirtualMouseButton(2, ads);
      },
      setTouchMode: (enabled: boolean) => {
        self.input.setTouchModeEnabled(enabled);
        self.touchControls.setVisible(self.director.mode === 'playing' && enabled);
      },
      triggerFire: (shots = 1) => {
        for (let i = 0; i < shots; i++) {
          self.player.fireProgrammaticShot(
            self.bvh,
            self.rigidWorld,
            self.damageSystem,
            self.effects,
            self.spatialAudio,
            self.director.allTargets,
            self.simTime
          );
          if (i < shots - 1) {
            for (let s = 0; s < 10; s++) {
              self.stepFixed(GameLoop.FIXED_DT);
            }
          } else {
            self.gameLoop.stepDeterministic(1 / 120, false);
          }
        }
      },
      triggerReload: () => {
        self.player.weapon.magAmmo = 18;
        self.player.weapon.startReload(self.synth);
      },
      setDebugView: (mode: DebugViewMode) => {
        self.input.debugView = mode;
      },
      resetTimingHistory: () => {
        self.gameLoop.resetTimingHistory();
      },
      stepSeconds: (sec: number, renderEveryStep = false) => {
        self.gameLoop.stepDeterministic(sec, renderEveryStep);
      },
      getTelemetry: () => {
        const stats = self.renderGraph.getRenderCallStats();
        return {
          ...self.gameLoop.telemetry,
          drawCalls: stats.calls,
          triangles: stats.triangles,
          internalScale: stats.internalScale,
          mode: self.director.mode,
          playerPos: {
            x: self.player.controller.position.x,
            y: self.player.controller.position.y,
            z: self.player.controller.position.z
          },
          playerHealth: self.player.health,
          magAmmo: self.player.weapon.magAmmo,
          reserveAmmo: self.player.weapon.reserveAmmo,
          adsProgress: self.player.weapon.adsProgress,
          isReloading: self.player.weapon.isReloading,
          alphaScore: self.director.alphaScore,
          bravoScore: self.director.bravoScore,
          botCount: self.director.bots.length,
          aliveEnemies: self.director.bots.filter((b) => b.team === 'bravo' && b.isAlive).length
        };
      }
    };
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new TacticalFPSGame();
});
