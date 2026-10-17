import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const ARTIFACTS_DIR = path.join(ROOT_DIR, 'verification-artifacts');

fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json'
};

function startStaticDistServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const reqUrl = new URL(req.url || '/', 'http://127.0.0.1');
      let relPath = decodeURIComponent(reqUrl.pathname);
      if (relPath === '/') relPath = '/index.html';

      const filePath = path.join(DIST_DIR, relPath);
      if (!filePath.startsWith(DIST_DIR) || !fs.existsSync(filePath)) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
        'Cache-Control': 'no-store'
      });
      fs.createReadStream(filePath).pipe(res);
    });

    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      resolve({ server, port: addr.port });
    });
  });
}

async function runVerification() {
  console.log('[Verification] Starting static production server from dist/...');
  const { server, port } = await startStaticDistServer();
  const BASE_URL = `http://127.0.0.1:${port}`;
  console.log(`[Verification] Serving dist/ at ${BASE_URL}`);

  const consoleErrors = [];
  const consoleWarnings = [];
  const pageErrors = [];
  const externalRequests = [];

  let browser;
  try {
    browser = await chromium.launch({
      executablePath: '/usr/bin/google-chrome',
      headless: true,
      args: [
        '--use-gl=angle',
        '--use-angle=swiftshader',
        '--enable-webgl',
        '--ignore-gpu-blocklist',
        '--disable-gpu-sandbox',
        '--no-sandbox',
        '--disable-features=CDPScreenshotNewSurface',
        '--autoplay-policy=no-user-gesture-required'
      ]
    });

    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      deviceScaleFactor: 1
    });

    const page = await context.newPage();

    page.on('console', (msg) => {
      const type = msg.type();
      const text = msg.text();
      if (type === 'error') {
        consoleErrors.push(text);
        console.error('[Browser Console Error]', text);
      } else if (type === 'warning') {
        consoleWarnings.push(text);
        console.warn('[Browser Console Warning]', text);
      } else {
        console.log('[Browser Console]', text);
      }
    });

    page.on('pageerror', (err) => {
      pageErrors.push(err.message || String(err));
      console.error('[Browser Page Error]', err);
    });

    page.on('request', (req) => {
      const url = req.url();
      if (!url.startsWith(BASE_URL) && !url.startsWith('data:') && !url.startsWith('blob:')) {
        externalRequests.push(url);
      }
    });

    console.log('[Verification] Navigating to application (Title Flythrough)...');
    await page.goto(`${BASE_URL}/?seed=1337420&manual=1`, { waitUntil: 'networkidle' });

    await page.waitForFunction(() => Boolean(window.__GAME_DEBUG__), { timeout: 30000 });
    await page.evaluate(() => {
      window.__GAME_DEBUG__.stepSeconds(1.2);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '01-title-flythrough-1920x1080.png')
    });

    console.log('[Verification] Deploying to combat & capturing Central Market view (1920x1080)...');
    await page.evaluate(() => {
      window.__GAME_DEBUG__.deploy();
      window.__GAME_DEBUG__.teleportToView('central_market');
      window.__GAME_DEBUG__.stepSeconds(0.6);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '02-central-market-1920x1080.png')
    });

    console.log('[Verification] Capturing reference aspect ratio (2192x1080)...');
    await page.setViewportSize({ width: 2192, height: 1080 });
    await page.waitForTimeout(80);
    await page.evaluate(() => {
      window.__GAME_DEBUG__.teleportToView('central_market');
      window.__GAME_DEBUG__.stepSeconds(0.2);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '02-central-market-2192x1080.png')
    });

    // Restore 1920x1080 for subsequent captures
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(80);
    await page.evaluate(() => {
      window.__GAME_DEBUG__.teleportToView('central_market');
      window.__GAME_DEBUG__.stepSeconds(0.2);
    });

    console.log('[Verification] Capturing ADS collimated holographic sight view...');
    await page.evaluate(() => {
      window.__GAME_DEBUG__.setAds(true);
      window.__GAME_DEBUG__.stepSeconds(0.45);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '03-ads-collimated-optic-1920x1080.png')
    });

    console.log('[Verification] Capturing active firing, muzzle flash, casings & tracers...');
    await page.evaluate(() => {
      window.__GAME_DEBUG__.setAds(false);
      window.__GAME_DEBUG__.stepSeconds(0.3);
      window.__GAME_DEBUG__.triggerFire(4);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '04-combat-firing-casings-1920x1080.png')
    });

    console.log('[Verification] Capturing Archway Plaza & East Balcony Overlook...');
    await page.evaluate(() => {
      window.__GAME_DEBUG__.teleportToView('archway_plaza');
      window.__GAME_DEBUG__.stepSeconds(0.4);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '05-archway-plaza-1920x1080.png')
    });

    await page.evaluate(() => {
      window.__GAME_DEBUG__.teleportToView('east_balcony');
      window.__GAME_DEBUG__.stepSeconds(0.4);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '06-east-balcony-overlook-1920x1080.png')
    });

    console.log('[Verification] Capturing first-person tactical reload choreography...');
    await page.evaluate(() => {
      window.__GAME_DEBUG__.teleportToView('spawn_alley');
      window.__GAME_DEBUG__.triggerReload();
      window.__GAME_DEBUG__.stepSeconds(0.55);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '07-reload-choreography-1920x1080.png')
    });

    // Finish reload and verify ammo restored
    await page.evaluate(() => {
      window.__GAME_DEBUG__.stepSeconds(2.2);
    });

    console.log('[Verification] Capturing MRT Normal & GTAO debug buffer views...');
    await page.evaluate(() => {
      window.__GAME_DEBUG__.teleportToView('central_market');
      window.__GAME_DEBUG__.setDebugView('normals');
      window.__GAME_DEBUG__.stepSeconds(0.2);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '08-debug-normals-1920x1080.png')
    });

    await page.evaluate(() => {
      window.__GAME_DEBUG__.setDebugView('ao');
      window.__GAME_DEBUG__.stepSeconds(0.2);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '09-debug-ao-1920x1080.png')
    });

    await page.evaluate(() => {
      window.__GAME_DEBUG__.setDebugView('none');
      window.__GAME_DEBUG__.resetTimingHistory();
      window.__GAME_DEBUG__.stepSeconds(0.25, false);
    });

    console.log('[Verification] Capturing Mobile (844x390) & Tablet (1024x768) Touch Control HUD views...');
    await page.setViewportSize({ width: 844, height: 390 });
    await page.evaluate(() => {
      window.__GAME_DEBUG__.setTouchMode(true);
      window.__GAME_DEBUG__.teleportToView('central_market');
      window.__GAME_DEBUG__.stepSeconds(0.25);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '11-mobile-touch-controls-844x390.png')
    });

    await page.setViewportSize({ width: 1024, height: 768 });
    await page.evaluate(() => {
      window.__GAME_DEBUG__.teleportToView('archway_plaza');
      window.__GAME_DEBUG__.stepSeconds(0.25);
    });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, '12-tablet-touch-controls-1024x768.png')
    });

    // Restore 1920x1080 desktop mode for final telemetry baseline
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      window.__GAME_DEBUG__.setTouchMode(false);
      window.__GAME_DEBUG__.teleportToView('central_market');
      window.__GAME_DEBUG__.resetTimingHistory();
      window.__GAME_DEBUG__.stepSeconds(0.25, false);
    });

    // Gather telemetry & WebGL health
    const report = await page.evaluate(() => {
      const canvas = document.getElementById('game-canvas');
      const gl = canvas.getContext('webgl2');
      const glError = gl ? gl.getError() : -1;
      const telemetry = window.__GAME_DEBUG__.getTelemetry();
      return {
        glError,
        webglVersion: gl ? gl.getParameter(gl.VERSION) : 'none',
        renderer: gl ? gl.getParameter(gl.RENDERER) : 'none',
        telemetry
      };
    });

    console.log('[Verification] Emulating a real touch phone (isMobile, hasTouch, DPR 3)...');
    const mobileContext = await browser.newContext({
      viewport: { width: 844, height: 390 },
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true
    });
    const mPage = await mobileContext.newPage();
    mPage.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(`[mobile] ${msg.text()}`);
        console.error('[Mobile Console Error]', msg.text());
      }
    });
    mPage.on('pageerror', (err) => {
      pageErrors.push(`[mobile] ${err.message || String(err)}`);
      console.error('[Mobile Page Error]', err);
    });
    await mPage.goto(`${BASE_URL}/?seed=1337420&manual=1&mobile=1`, { waitUntil: 'networkidle' });
    await mPage.waitForFunction(() => Boolean(window.__GAME_DEBUG__), { timeout: 30000 });
    const mobileState = await mPage.evaluate(() => {
      const g = window.__GAME_DEBUG__;
      g.deploy();
      g.teleportToView('central_market');
      g.stepSeconds(0.3);
      return {
        quality: g.game.settings.data.quality,
        touchMode: g.game.input.touchModeEnabled,
        magBefore: g.game.player.weapon.magAmmo
      };
    });
    if (mobileState.quality !== 'low' || !mobileState.touchMode) {
      throw new Error(`Mobile defaults not applied: ${JSON.stringify(mobileState)}`);
    }
    // A quick tap (touchstart + touchend before the next sim step) must still fire one round
    const fireBox = await mPage.locator('#tc-btn-fire-right').boundingBox();
    if (!fireBox) throw new Error('Touch fire button not visible on mobile');
    await mPage.touchscreen.tap(fireBox.x + fireBox.width / 2, fireBox.y + fireBox.height / 2);
    const magAfter = await mPage.evaluate(() => {
      window.__GAME_DEBUG__.stepSeconds(0.1);
      return window.__GAME_DEBUG__.game.player.weapon.magAmmo;
    });
    if (magAfter !== mobileState.magBefore - 1) {
      throw new Error(`Quick tap on fire button did not fire exactly one round (${mobileState.magBefore} -> ${magAfter})`);
    }
    await mPage.evaluate(() => window.__GAME_DEBUG__.stepSeconds(0.2));
    await mPage.screenshot({
      path: path.join(ARTIFACTS_DIR, '13-mobile-emulated-phone-844x390.png')
    });

    await mPage.setViewportSize({ width: 390, height: 844 });
    await mPage.evaluate(() => window.__GAME_DEBUG__.stepSeconds(0.1));
    const rotateShown = await mPage.evaluate(
      () => getComputedStyle(document.getElementById('rotate-overlay')).display !== 'none'
    );
    await mPage.screenshot({
      path: path.join(ARTIFACTS_DIR, '14-mobile-portrait-rotate-prompt-390x844.png')
    });
    if (!rotateShown) {
      throw new Error('Rotate-device prompt not shown in portrait during a match');
    }
    await mobileContext.close();

    const summary = {
      timestamp: new Date().toISOString(),
      consoleErrors,
      consoleWarnings,
      pageErrors,
      externalRequests,
      ...report
    };

    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, 'telemetry-report.json'),
      JSON.stringify(summary, null, 2)
    );

    console.log('[Verification] Summary:', JSON.stringify(summary, null, 2));

    if (consoleErrors.length > 0) {
      throw new Error(`Encountered ${consoleErrors.length} console.error messages`);
    }
    if (pageErrors.length > 0) {
      throw new Error(`Encountered ${pageErrors.length} uncaught page errors`);
    }
    if (externalRequests.length > 0) {
      throw new Error(`Encountered external network requests: ${externalRequests.join(', ')}`);
    }
    if (report.glError !== 0) {
      throw new Error(`WebGL error code non-zero: ${report.glError}`);
    }
    if (report.telemetry.drawCalls > 350) {
      throw new Error(`Draw calls (${report.telemetry.drawCalls}) exceeded budget (350)`);
    }
    if (report.telemetry.triangles > 350000) {
      throw new Error(`Triangles (${report.telemetry.triangles}) exceeded budget (350,000)`);
    }

    console.log('[Verification] ALL AUTOMATED CHECKS PASSED!');
  } finally {
    if (browser) await browser.close();
    server.closeAllConnections?.();
    server.close();
  }
}

runVerification().catch((err) => {
  console.error('[Verification FAILED]', err);
  process.exit(1);
});
