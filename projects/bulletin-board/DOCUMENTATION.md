# Design By Bulletin™ — Complete Documentation Index

This is the master guide to all Design By Bulletin documentation. Start here to find the right resource for your task.

---

## Quick Navigation

### I want to understand the system
**Start here:** [BRIEF.md](BRIEF.md) → [README.md](README.md) → [agents/pipeline.md](agents/pipeline.md)

### I'm an agent working on an issue
**Start here:** [agents/pipeline.md](agents/pipeline.md) (your role) → [STYLE-GUIDE.md](STYLE-GUIDE.md) (voice/tone) → [BULLETIN-BOT.md](BULLETIN-BOT.md) (delivery)

### I'm a curator/researcher scouting sources
**Start here:** [docs/SOURCES.md](docs/SOURCES.md) → [governance/ASCII-VISUAL-DNA.md](governance/ASCII-VISUAL-DNA.md)

### I'm generating ASCII art
**Start here:** [governance/ASCII-VISUAL-DNA.md](governance/ASCII-VISUAL-DNA.md) → [governance/ASCII-CONSTRUCTION.md](governance/ASCII-CONSTRUCTION.md)

### I'm processing/filtering images
**Start here:** [docs/SHADER-SYSTEM.md](docs/SHADER-SYSTEM.md) → Run `node utils/test-shader.js`

---

## Editorial System Overview

### Core Philosophy
**BRIEF.md** — Project context, what Design By Bulletin is, who Alfred is, the 11 sections, the Editorial Mix framework, source diversity constraint.

**STYLE-GUIDE.md** — Editorial voice (Apartamento register), visual standards, sonic integration, three-layer editorial system (visual + sonic + narrative), section-specific tone notes.

### Workflow & Agents
**agents/pipeline.md** — Complete editorial workflow for six agents (Maeve/Victor/Coda for discovery; Assignment Editor/Managing Editor/Editorial Director for curation). Editorial Mix application at each stage.

**USER.md** — Quick reference for readers/Alfred. Overview of daily digest structure, commands, preferences.

---

## Governance & Specifications

### Visual Standards
**governance/ASCII-VISUAL-DNA.md** — Hard constraints for ASCII art: 42 characters wide, 15 lines tall, five formats (A/B/C/D/E), no consecutive format repeats, quality thresholds, Format C must use utils/figlet.js.

**governance/ASCII-CONSTRUCTION.md** — Methodology for constructing recognizable ASCII art. Silhouette first, outline vocabulary, internal detail hierarchy, quality gates.

### Content & Sources
**docs/SOURCES.md** — 20+ curated sources organized by category (UX/UI publications, official software blogs, tech news, visual inspiration, independent tools, music/sound, podcasts/video). Scout instructions for each agent type. Theme examples showing cross-disciplinary sourcing.

### Delivery & Bots
**BULLETIN-BOT.md** — Telegram bot reference (@DesignByBulletin_bot). Bot configuration, workspace, agent setup, commands, onboarding flow, daily crons, troubleshooting.

---

## Module Specifications

Each of the 11 sections has a module file:

- `modules/art.md`
- `modules/painting.md`
- `modules/illustration.md`
- `modules/sculpture.md`
- `modules/culture.md`
- `modules/photography.md`
- `modules/art-history.md`
- `modules/opinions.md`
- `modules/design-ai-tools.md`
- `modules/product-process.md`
- `modules/visual-brand.md`
- `modules/music.md`

Each module includes:
- Purpose statement
- Approved sources
- Voice rules (always/never)
- ASCII format preferences
- Editorial Mix impact notes

---

## Utilities & Integration

### ASCII-to-PNG Rendering
**utils/ascii-render.js** — Core ASCII-to-PNG engine using SVG + sharp. Supports multi-color and monochromatic modes. Three themes (default, midnight, editorial). Usage: `renderAsciiImage(text, { theme, fontSize, scale, monochromatic })`.

**utils/act1-png-delivery.js** — Act 1 builder and Telegram prep. Functions: `buildAct1ASCII(pieces, closingSentence)`, `prepareAct1Delivery(ascii, options)`. Returns PNG buffer + caption ready for Telegram.

**docs/PNG-RENDERING.md** — Complete PNG rendering reference. Character coloring, themes, parameters, Telegram integration, troubleshooting.

### Image Processing
**docs/SHADER-SYSTEM.md** — Image shader using sharp library. 6 presets (editorial, gameboy, nes, c64, hires, subtle). Parameter reference. Editorial Mix integration (Visual intensity controls shader intensity).

**utils/shader.js** — Main shader processor. Usage: `processImage(buffer, 'preset-name')` or `processImage(buffer, {pixelSize: 3, ...})`.

**utils/test-shader.js** — Test suite generating 9 processed images demonstrating all presets.

### ASCII Typography
**utils/figlet.js** — ASCII text generation using figlet library. Font registry with editorial decisions. Always use `renderText(text, register, 2)` with leftPad=2 for Telegram rendering.

### Link Verification
**utils/verify-links.js** — HTTP status checking for all links before delivery. Returns original URL if valid, fallback homepage if broken, original if no fallback. 50+ source fallback registry.

### Issue Cover Images
**Workflow:**
1. Creative Director creates custom Midjourney prompts (manual, not automated)
2. Generates issue cover via Midjourney
3. Saves to: `/Users/blackmachete/projects/bulletin-board/covers/[YYYY-MM-DD]-cover.png`
4. Bot sends as final image in Act 2 delivery

**Directory:** `covers/` — Contains Midjourney-generated issue covers + Act 1 PNG backups

---

## Archive & History

**archive-log.md** — Published issue log. Each entry includes: date, theme, Editorial Mix values, sonic reference, ASCII formats used, sources used, cover image if generated, curator notes.

**sessions/** — Session transcripts documenting specific issue generation processes.

---

## Editorial Mix Framework Reference

The Editorial Director controls six parametric faders (0–100%) that modulate agent behavior:

### Music (0–100%)
- How sonic qualities (tempo, production, frequency) inform visual composition and prose tone
- High (>80%): Sonic mood drives everything; Managing Editor integrates heavy textural details
- Low (<30%): Music is contextual; focus on visual/narrative

### Visual (0–100%)
- How ASCII composition drives narrative structure and section ordering
- High (>80%): Victor's selections determine pacing; composition is statement-making
- Low (<30%): Visual is decorative; research/process drives structure

### Research (0–100%)
- How intensively Maeve scouts for signals across all sources
- High (>80%): Deep synthesis, 4–5 convergence layers, novel combinations
- Low (<30%): Surface-level scouting, obvious connections

### Process (0–100%)
- How much "making," workflow, and methodology perspective influences selections
- High (>80%): Every section touches on "how it's made"; process is primary lens
- Low (<30%): Process is secondary; focus on outputs/results

### Theme (0–100%)
- Whether today's theme is invisible (felt aesthetically) or explicit (stated/woven)
- High (>80%): Theme appears across all sections; narrative integration explicit
- Low (<30%): Theme is aesthetic cohesion only; invisible to reader

### AI Culture (0–100%)
- How much AI tools, artificial creativity, and tool philosophy feature in selections
- High (>80%): AI/tools are central to selections and narratives
- Low (<30%): AI culture is not focused; mentions only incidental

---

## File Structure

```
projects/bulletin-board/
├── README.md                           # Main project overview
├── BRIEF.md                            # Editorial guidelines & Editorial Mix framework
├── STYLE-GUIDE.md                      # Voice, tone, three-layer integration
├── DOCUMENTATION.md                    # THIS FILE
├── USER.md                             # Quick reference for readers
├── BULLETIN-BOT.md                     # Telegram bot configuration
│
├── governance/
│   ├── ASCII-VISUAL-DNA.md            # Visual format rules (5 formats, 42-char width)
│   └── ASCII-CONSTRUCTION.md          # ASCII construction methodology
│
├── docs/
│   ├── SOURCES.md                     # 20+ curated sources & scouting instructions
│   ├── SHADER-SYSTEM.md               # Image processing (sharp library)
│   └── PNG-RENDERING.md               # ASCII-to-PNG rendering reference
│
├── modules/
│   ├── art.md, painting.md, ... (11 sections)
│
├── utils/
│   ├── ascii-render.js                # ASCII-to-PNG core (multi-color & monochromatic)
│   ├── act1-png-delivery.js           # Act 1 PNG builder for Telegram
│   ├── shader.js                      # Image processor with 6 presets
│   ├── figlet.js                      # ASCII typography generator
│   ├── verify-links.js                # Link health checker
│   └── test-shader.js                 # Test suite for shader presets
│
├── covers/                             # Issue cover images (Midjourney + Act 1 PNG)
│
├── agents/
│   ├── pipeline.md                    # Editorial workflow and agent sequence
│   └── [agent-specific files]
│
├── archive-log.md                      # Published issues log
├── package.json                        # Node dependencies
└── .openclaw/                          # OpenClaw agent workspace
```

---

## Terminology

**Act 1** — Visual preview (8:00am PT): 11 ASCII pieces rendered as PNG, no text/links, one closing sentence + "Full edition in 30 minutes". Supports multi-color or monochromatic rendering.

**Act 2** — Full edition (8:30am PT): 11 sections with source titles, one-sentence narratives, links, then Midjourney issue cover image as final visual reveal.

**Monochromatic Mode** — Single-color ASCII PNG rendering for thematic identity. All characters use one color (theme.text) instead of per-character coloring.

**Apartamento Register** — Editorial voice: intimate, unhurried, specific without being academic, notices details others miss.

**Editorial Mix** — Six parametric faders (Music, Visual, Research, Process, Theme, AI Culture) that control how heavily each editorial layer influences daily output.

**Format A/B/C/D/E** — Five ASCII visual formats: Classic Object, Geometric Frame, Typographic, Two Column, Full Spread.

**Source Diversity Constraint** — One source per link across 11 sections; no repeats within single issue (except music platforms can repeat for different artists/playlists).

**Three-Layer Integration** — Visual (ASCII) + Sonic (music mood) + Narrative (prose) work in concert; none is primary, all inform each other.

---

## Version History

**2.0.0** (Current)
- Six-agent editorial system with parametric Editorial Mix framework
- Midjourney album cover generation
- Sharp image processing system
- Three-layer editorial integration documented
- Complete governance and sourcing documentation

**1.0.0** (Archived)
- Initial three-agent system (Analyst/Editor/Curator)
- Manual ASCII generation
- Text-only editorial

---

## Getting Help

- **Understanding the editorial system:** Read BRIEF.md, then agents/pipeline.md
- **Confused about voice/tone:** See STYLE-GUIDE.md section-specific notes
- **Building ASCII art:** Read ASCII-VISUAL-DNA.md, then ASCII-CONSTRUCTION.md
- **Scouting sources:** Read docs/SOURCES.md and review archive-log.md for past issues
- **Generating Midjourney covers:** Run `node utils/test-midjourney-prompts.js` for examples
- **Telegram bot issues:** See BULLETIN-BOT.md troubleshooting section

---

**Last updated:** 2026-05-06
**System version:** 2.0.0
