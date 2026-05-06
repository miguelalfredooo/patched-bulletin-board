# MEMORY — The Unnamed Archive Collective

## Project Overview
**The Unnamed Archive v2** — speculative visual collection, 42 pieces across 6 series, presented as cultural/archaeological evidence. Three-agent creative pipeline driving curation and prompt generation.

## The Pipeline
- **Coda (Archivist)** — scans archive state, reports findings, tracks progress
- **Maeve (Archeologist)** — generates prompt candidates using visual DNA + Midjourney frameworks
- **Victor (Curator)** — approves/redirects, ensures aesthetic coherence, makes final calls

## Key Decisions
- **Local-first inference** — Mistral 3 14B + Qwen 3.5 9B (LM Studio) with Anthropic Claude fallback
- **Qwen as primary** (2026-05-05) — lighter memory footprint than Mistral, better compatibility on M4 Mac
- **Archive principle** — museum/documentary aesthetic, never decorative, zero narrative
- **Report to Alfred** — all agent outputs visible in chat (no hidden reasoning)

## Aesthetic Core (VISUAL-DNA Essentials) — UPDATED 2026-05-05
**Major shift from "clinical archive" to "magical wonder"**
**Color evolution: pastels to bold saturated hues**

### Always
- Wonder at every scale (tiny details, vast landscapes)
- Emotional resonance and narrative possibility
- Tactile suggestion and three-dimensionality
- Beautiful color: pastels to bold saturated, emotionally true
- Time and history (weathering, patina, age)
- Decoration when it serves the scene and story

### Never
- Nothing arbitrary or purely decorative
- No hyper-realism or cold clinical distance
- No cheerful kitsch
- No documentation without wonder

### Material & Form
- Sculptural form, tactile surface, weathered and aged
- Abstraction + biomorphic suggestion with emotional depth
- Color: primarily monochromatic with atmospheric colors when they serve emotion
- Lighting: warm, moody, creates atmosphere and intimacy (not clinical studio light)

## Agent Personalities
- **Coda** — analytical, thorough, reports without opinion. Role: ground truth on archive state
- **Maeve** — visual thinker, prompt engineer. Reads VISUAL-DNA before every piece
- **Victor** — final arbiter. Cuts weak work, redirects drift, maintains consistency

## Known Issues & Fixes
- **LM Studio context window** — requires 16384+ tokens (changed from 4096 default)
- **Memory constraints** — Mistral 3 14B needs ~12 GB; Qwen 3.5 9B needs ~6-7 GB
- **Device token mismatch** — resolved by clearing ~/.openclaw/devices on gateway restart
- **"Agent 'main' no longer exists"** (Multi-agent migration) — old session state references deleted "main" agent. Fix: `rm -rf ~/.openclaw/agents/main && openclaw gateway restart`

## Progress Tracking
- Pieces completed: 0/42
- Series in development: None yet
- Weekly retros: log/retros/ (starting week 1)
- Published log: log/published.md

## Next Steps
1. Test pipeline: Coda → Maeve → Victor flow
2. Validate Qwen loads and responds
3. Generate first prompt candidate
4. Iterate aesthetic coherence
