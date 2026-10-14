# OPERATION SIROCCO — Browser-Native Three.js Tactical FPS

A self-contained, browser-native 3D first-person tactical shooter built with **Three.js r180 (`0.180.0`)** on **WebGL2** and **Vite 7**, featuring zero external runtime dependencies beyond `three`, zero external textures/models/audio files, a custom WebGL2 multi-pass post-processing pipeline, a custom SAH BVH + swept-capsule physics engine, a 100% procedural Web Audio synthesizer & HRTF spatializer, and tactical AI bots.

## Architecture Highlights

- **`src/render/`**: Custom WebGL2 render graph featuring a 4-cascade texel-snapped stabilized directional sun shadow system (`WebGLArrayRenderTarget` + `DepthArrayTexture`), MRT depth/normal/velocity/reactive prepass, Ground-Truth Horizon-Based Ambient Occlusion (`GTAO`) with bilateral denoise, 8-sample Halton `(2,3)` Temporal Anti-Aliasing (`TAA`) with YCoCg variance clipping, tile-dilated velocity Motion Blur, Karis-average HDR Bloom pyramid, GPU log-luminance auto-exposure adaptation, and a procedural `33×33×33` `Data3DTexture` color-grading LUT + AgX tone mapping composite pass.
- **`src/physics/`**: Custom Binned Surface Area Heuristic (SAH) Bounding Volume Hierarchy (`BVH`), swept-capsule `CharacterController` with step-up, slope sliding, crouch clearance, and short ledge mantling, `RigidWorld` dynamic prop & instanced 5.56mm brass casing solver, and an 11-node XPBD articulated `Ragdoll`.
- **`src/world/`**: Deterministic multi-scale (macro/meso/micro) procedural PBR `MaterialLibrary`, `PropSystem`, and `MapGenerator` constructing the North African / Eastern Mediterranean urban market district (**CASBAH SECTOR 04**) with the Central Market Street, Monumental Triple Archway & Courtyard Plaza, West Covered Souk Lane, East Flanking Alley with 2nd-floor Balcony Overlook, and 4 enterable building interiors.
- **`src/audio/`**: 100% procedural Web Audio `SynthEngine` and `SpatialAudio` with multi-bus mixing, procedural exterior & interior convolution reverb impulse responses, layered gunshot synthesis, surface-dependent footsteps & impacts, modal brass casing pings, HRTF 3D spatialization, speed-of-sound propagation delay, and BVH raycast occlusion filtering.
- **`src/game/` & `src/ai/`**: Detailed first-person `MK18 MOD-C4` carbine viewmodel with true collimated red-dot optic shader and spring-driven procedural animations, ballistic penetration & ricochet `DamageSystem`, pooled `EffectsSystem`, walkable `NavWorld` A* pathfinder & cover scorer, and `BotCombatant` tactical AI.

## Commands

```bash
npm run dev        # Start local Vite 7 development server
npm run build      # Typecheck with tsc and build production bundle into dist/
npm run preview    # Preview production build
npm run test       # Run automated Playwright visual & performance verification suite
```
