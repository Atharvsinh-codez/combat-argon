import { QualityPreset, Settings } from '../core/Settings';
import { SynthEngine } from '../audio/SynthEngine';

export interface MenuCallbacks {
  onDeploy: () => void;
  onResume: () => void;
  onRestartMatch: () => void;
  onSettingsChanged: () => void;
}

/**
 * Interactive Title Screen Overlay, Pause/Settings Modal, and End-of-Round Summary
 * Rendered directly over the live 3D scene flythrough or active match.
 */
export class Menu {
  public root: HTMLDivElement;
  private titlePanel!: HTMLDivElement;
  private pausePanel!: HTMLDivElement;
  private settingsPanel!: HTMLDivElement;
  private endRoundPanel!: HTMLDivElement;
  private returnToTitleFromSettings = true;

  constructor(
    parent: HTMLElement,
    private settings: Settings,
    private synth: SynthEngine,
    private callbacks: MenuCallbacks
  ) {
    this.root = document.createElement('div');
    this.root.id = 'menu-root';
    this.root.innerHTML = `
      <!-- Live 3D Flythrough Title Overlay -->
      <div class="menu-card title-card" id="menu-title-panel">
        <div class="menu-eyebrow">TASK FORCE SIROCCO // CASBAH SECTOR 04</div>
        <h1 class="menu-title">OPERATION SIROCCO</h1>
        <p class="menu-subtitle">
          Tactical Urban Combat Simulation — North African Market District.
          Eliminate opposing fireteams across sunlit streets, covered souks, and elevated overlooks.
        </p>
        <div class="menu-actions">
          <button class="btn-primary" id="btn-deploy">DEPLOY TO COMBAT</button>
          <button class="btn-secondary" id="btn-open-settings-title">GRAPHICS & AUDIO SETTINGS</button>
        </div>
        <div class="controls-grid">
          <div><span>WASD</span> Move</div>
          <div><span>MOUSE</span> Aim / Fire / ADS</div>
          <div><span>SHIFT</span> Sprint</div>
          <div><span>C</span> Crouch</div>
          <div><span>SPACE</span> Jump / Mantle</div>
          <div><span>R / B / G</span> Reload / Mode / Frag</div>
          <div><span>F</span> Inspect Rifle</div>
          <div><span>TAB / ALT+9</span> Roster / Perf</div>
        </div>
      </div>

      <!-- Pause Menu (ESC) -->
      <div class="menu-card pause-card" id="menu-pause-panel" style="display:none;">
        <div class="menu-eyebrow">SIMULATION PAUSED</div>
        <h2 class="menu-title-sm">TACTICAL COMMAND</h2>
        <div class="menu-actions vertical">
          <button class="btn-primary" id="btn-resume">RESUME COMBAT</button>
          <button class="btn-secondary" id="btn-open-settings-pause">GRAPHICS & AUDIO SETTINGS</button>
          <button class="btn-secondary" id="btn-restart">RESTART MATCH</button>
        </div>
      </div>

      <!-- Settings Panel -->
      <div class="menu-card settings-card" id="menu-settings-panel" style="display:none;">
        <div class="menu-eyebrow">CONFIGURATION</div>
        <h2 class="menu-title-sm">GRAPHICS, AUDIO & CONTROLS</h2>
        <div class="settings-rows">
          <label class="setting-row">
            <span>Quality Preset</span>
            <select id="set-quality">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="ultra">Ultra</option>
            </select>
          </label>
          <label class="setting-row">
            <span>Render Scale (<b id="lbl-scale">100%</b>)</span>
            <input type="range" id="set-scale" min="0.5" max="1.25" step="0.05" />
          </label>
          <label class="setting-row">
            <span>Field of View (<b id="lbl-fov">78°</b>)</span>
            <input type="range" id="set-fov" min="70" max="105" step="1" />
          </label>
          <label class="setting-row">
            <span>Mouse Sensitivity (<b id="lbl-sens">1.00</b>)</span>
            <input type="range" id="set-sens" min="0.1" max="3.0" step="0.05" />
          </label>
          <label class="setting-row">
            <span>Temporal AA (TAA)</span>
            <input type="checkbox" id="set-taa" />
          </label>
          <label class="setting-row">
            <span>Motion Blur</span>
            <select id="set-mb">
              <option value="off">Off</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </label>
          <label class="setting-row">
            <span>Master Volume (<b id="lbl-master">85%</b>)</span>
            <input type="range" id="set-master" min="0" max="1" step="0.05" />
          </label>
        </div>
        <div class="menu-actions">
          <button class="btn-primary" id="btn-close-settings">APPLY & RETURN</button>
        </div>
      </div>

      <!-- End of Round Summary -->
      <div class="menu-card endround-card" id="menu-endround-panel" style="display:none;">
        <div class="menu-eyebrow" id="end-eyebrow">MATCH COMPLETE</div>
        <h2 class="menu-title" id="end-headline">VICTORY</h2>
        <p class="menu-subtitle" id="end-summary">TF-ALPHA 30 — 18 OPFOR</p>
        <div class="menu-actions">
          <button class="btn-primary" id="btn-play-again">PLAY AGAIN</button>
        </div>
      </div>
    `;
    parent.appendChild(this.root);

    this.titlePanel = this.root.querySelector('#menu-title-panel')!;
    this.pausePanel = this.root.querySelector('#menu-pause-panel')!;
    this.settingsPanel = this.root.querySelector('#menu-settings-panel')!;
    this.endRoundPanel = this.root.querySelector('#menu-endround-panel')!;

    this.bindEvents();
    this.syncInputsFromSettings();
  }

  private bindEvents(): void {
    const bindBtn = (selector: string, fn: () => void) => {
      const el = this.root.querySelector(selector) as HTMLButtonElement;
      el.addEventListener('mouseenter', () => this.synth.playUISound('hover'));
      el.addEventListener('click', () => {
        this.synth.playUISound('click');
        fn();
      });
    };

    bindBtn('#btn-deploy', () => this.callbacks.onDeploy());
    bindBtn('#btn-resume', () => this.callbacks.onResume());
    bindBtn('#btn-restart', () => this.callbacks.onRestartMatch());
    bindBtn('#btn-play-again', () => this.callbacks.onRestartMatch());

    bindBtn('#btn-open-settings-title', () => {
      this.returnToTitleFromSettings = true;
      this.showSettings();
    });
    bindBtn('#btn-open-settings-pause', () => {
      this.returnToTitleFromSettings = false;
      this.showSettings();
    });
    bindBtn('#btn-close-settings', () => {
      if (this.returnToTitleFromSettings) {
        this.showTitle();
      } else {
        this.showPause();
      }
    });

    const qualitySel = this.root.querySelector('#set-quality') as HTMLSelectElement;
    qualitySel.addEventListener('change', () => {
      this.settings.applyPreset(qualitySel.value as QualityPreset);
      this.syncInputsFromSettings();
      this.callbacks.onSettingsChanged();
    });

    const scaleInput = this.root.querySelector('#set-scale') as HTMLInputElement;
    scaleInput.addEventListener('input', () => {
      this.settings.update({ renderScale: parseFloat(scaleInput.value) });
      this.syncInputsFromSettings();
      this.callbacks.onSettingsChanged();
    });

    const fovInput = this.root.querySelector('#set-fov') as HTMLInputElement;
    fovInput.addEventListener('input', () => {
      this.settings.update({ fov: parseFloat(fovInput.value) });
      this.syncInputsFromSettings();
      this.callbacks.onSettingsChanged();
    });

    const sensInput = this.root.querySelector('#set-sens') as HTMLInputElement;
    sensInput.addEventListener('input', () => {
      this.settings.update({ sensitivity: parseFloat(sensInput.value) });
      this.syncInputsFromSettings();
      this.callbacks.onSettingsChanged();
    });

    const taaInput = this.root.querySelector('#set-taa') as HTMLInputElement;
    taaInput.addEventListener('change', () => {
      this.settings.update({ taa: taaInput.checked });
      this.callbacks.onSettingsChanged();
    });

    const mbSel = this.root.querySelector('#set-mb') as HTMLSelectElement;
    mbSel.addEventListener('change', () => {
      this.settings.update({ motionBlur: mbSel.value as 'off' | 'low' | 'high' });
      this.callbacks.onSettingsChanged();
    });

    const masterInput = this.root.querySelector('#set-master') as HTMLInputElement;
    masterInput.addEventListener('input', () => {
      this.settings.update({ masterVolume: parseFloat(masterInput.value) });
      this.syncInputsFromSettings();
      this.callbacks.onSettingsChanged();
    });
  }

  public syncInputsFromSettings(): void {
    const s = this.settings.data;
    (this.root.querySelector('#set-quality') as HTMLSelectElement).value = s.quality;
    (this.root.querySelector('#set-scale') as HTMLInputElement).value = String(s.renderScale);
    (this.root.querySelector('#lbl-scale') as HTMLElement).textContent = `${Math.round(s.renderScale * 100)}%`;
    (this.root.querySelector('#set-fov') as HTMLInputElement).value = String(s.fov);
    (this.root.querySelector('#lbl-fov') as HTMLElement).textContent = `${Math.round(s.fov)}°`;
    (this.root.querySelector('#set-sens') as HTMLInputElement).value = String(s.sensitivity);
    (this.root.querySelector('#lbl-sens') as HTMLElement).textContent = s.sensitivity.toFixed(2);
    (this.root.querySelector('#set-taa') as HTMLInputElement).checked = s.taa;
    (this.root.querySelector('#set-mb') as HTMLSelectElement).value = s.motionBlur;
    (this.root.querySelector('#set-master') as HTMLInputElement).value = String(s.masterVolume);
    (this.root.querySelector('#lbl-master') as HTMLElement).textContent = `${Math.round(s.masterVolume * 100)}%`;
  }

  public showTitle(): void {
    this.root.style.display = 'flex';
    this.titlePanel.style.display = 'block';
    this.pausePanel.style.display = 'none';
    this.settingsPanel.style.display = 'none';
    this.endRoundPanel.style.display = 'none';
  }

  public showPause(): void {
    this.root.style.display = 'flex';
    this.titlePanel.style.display = 'none';
    this.pausePanel.style.display = 'block';
    this.settingsPanel.style.display = 'none';
    this.endRoundPanel.style.display = 'none';
  }

  public showSettings(): void {
    this.syncInputsFromSettings();
    this.root.style.display = 'flex';
    this.titlePanel.style.display = 'none';
    this.pausePanel.style.display = 'none';
    this.settingsPanel.style.display = 'block';
    this.endRoundPanel.style.display = 'none';
  }

  public showEndRound(victory: boolean, alphaScore: number, bravoScore: number): void {
    this.root.style.display = 'flex';
    this.titlePanel.style.display = 'none';
    this.pausePanel.style.display = 'none';
    this.settingsPanel.style.display = 'none';
    this.endRoundPanel.style.display = 'block';

    const headline = this.root.querySelector('#end-headline') as HTMLElement;
    const summary = this.root.querySelector('#end-summary') as HTMLElement;
    headline.textContent = victory ? 'MISSION ACCOMPLISHED' : 'MISSION FAILED';
    headline.style.color = victory ? '#4ade80' : '#f87171';
    summary.textContent = `TF-ALPHA ${alphaScore} — ${bravoScore} OPFOR`;
  }

  public hideAll(): void {
    this.root.style.display = 'none';
  }
}
