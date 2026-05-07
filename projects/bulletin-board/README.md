# Design By Bulletin™

A daily automated editorial digest for designers covering art, design, AI culture, photography, illustration, and visual culture. Three-act structure:
- **Act 1** (8:00am PT): ASCII visual preview — 11 pieces rendered as PNG, no text/links
- **Act 2** (8:30am PT): Full edition — all 11 sections with narrative + links, closing with Midjourney issue cover image

Delivered via Telegram to subscribers.

**Tone reference:** Apartamento — intimate, unhurried, specific without being academic. A digest that feels like it was written by someone with taste.

## The Editorial System

Design By Bulletin operates as a six-agent editorial collective running on [OpenClaw](https://github.com/anthropics/openclaw), coordinated by the Editorial Director:

### Visual Discovery (Three Agents)

**Maeve (Researcher)** — Finds signals across 20+ sources
- Scouts UX publications, tech news, visual culture, music, independent tools
- Identifies patterns and convergences
- Reports findings to Assignment Editor
- Adjusts scouting intensity based on Research module

**Victor (Visual Curator)** — Selects 3–5 pieces daily
- Evaluates visual quality and distinctness
- Ensures 11 sections are covered with diverse sources
- Briefs Assignment Editor on visual patterns
- Adjusts selection intensity based on Visual module

**Coda (Research Synthesis)** — Connects research to visuals
- Reads Maeve's findings and Victor's selections
- Identifies patterns across research + visuals
- Extracts design signals and cultural themes
- Feeds Assignment Editor with signal maps

### Editorial Curation (Three Agents)

**Assignment Editor** — Commissions narratives
- Synthesizes research + visual patterns into editorial direction
- Proposes daily theme and 11-section narrative angles
- Adjusts narrative intensity based on Theme module
- Reports to Managing Editor

**Managing Editor** — Develops prose
- Writes section narratives (one sentence + link per section)
- Shapes sonic integration (tempo, production, frequency)
- Adjusts prose voice based on Music module
- Adjusts process emphasis based on Process module
- Reports final text to Editorial Director

**Editorial Director** — Lead and decision maker
- Sets daily Editorial Mix (Music, Visual, Research, Process, Theme, AI Culture intensities: 0–100%)
- Makes final send decisions for both acts
- Logs all published issues to archive
- [Full operating instructions](BULLETIN-BOT.md)

## The Editorial Mix Framework

The Editorial Director controls emphasis through six parametric faders:

| Module | Range | Controls |
|--------|-------|----------|
| **Music** | 0–100% | How sonic qualities inform visual composition and prose tone |
| **Visual** | 0–100% | How ASCII composition drives narrative structure |
| **Research** | 0–100% | How intensively Maeve scouts and synthesizes signals |
| **Process** | 0–100% | How much "making" and workflow perspectives influence direction |
| **Theme** | 0–100% | Whether today's theme is invisible or explicit across sections |
| **AI Culture** | 0–100% | How much AI tools and creative practice feature in selections |

Set the mix in the morning brief; all agents adjust their intensity accordingly. See [BRIEF.md](BRIEF.md) for the complete Editorial Mix framework with example mixes.

## Delivery

**Telegram Bot** — @DesignByBulletin_bot
- **Act 1 (8:00am PT):** Visual preview — 11 ASCII pieces rendered as PNG (4.54:1 aspect ratio)
- **Act 2 (8:30am PT):** Full edition — 11 sections with title, sentence, link per section + Midjourney issue cover image (visual reveal)
- Onboarding flow: role → content preference → reading style
- Commands: `/start`, `digest`, `preview`, `change`, `help`
- See [BULLETIN-BOT.md](../BULLETIN-BOT.md) for full reference

**Visual Rendering:**
- ASCII art → PNG via `utils/ascii-render.js` (supports multi-color and monochromatic modes)
- Three themes: `default` (dark), `midnight` (cool), `editorial` (light)
- Monochromatic mode: single-color per image for editorial control

## Future: Rich Web Experience

Beyond Telegram:
- Web platform with interactive issue archive
- Customized reading experiences by preference
- Community discussions around themes and sources
- Visual/sonic layer controls for readers
- Deep linking between covers and issue content

## Getting Started

### Prerequisites

- [OpenClaw CLI](https://github.com/anthropics/openclaw) installed
- Anthropic API key (Claude Sonnet 4.6 recommended)
- Node.js 18+ for image processing and ASCII generation
- (Optional) Telegram app for testing @DesignByBulletin_bot

### Installation

```bash
git clone https://github.com/miguelalfredooo/bulletin-board.git
cd projects/bulletin-board
npm install
```

### Verify System

```bash
node utils/test-shader.js          # Test image shader (expects photo.jpg)
node utils/generate-ascii-art.js   # Generate sample ASCII art
```

### Manual Issue Generation

```bash
node scripts/generate-issue.js --date 2026-05-07 --theme "The Ritual in Tools"
```

### Trigger Cron Jobs

```bash
openclaw cron run 39b83092-7b9c-4b56-bf7d-8a19519e5b81  # Act 1 (visual preview)
openclaw cron run f7eae541-e3ec-4abe-859c-1aba22498b46  # Act 2 (full edition)
```

See [BULLETIN-BOT.md](../BULLETIN-BOT.md#daily-cron-jobs) for complete cron reference.

## Project Structure

```
bulletin-board/
├── README.md                           # This file
├── BRIEF.md                            # Editorial guidelines & Editorial Mix framework
├── STYLE-GUIDE.md                      # Voice, tone, three-layer integration (visual/sonic/narrative)
├── BULLETIN-BOT.md                     # Telegram bot reference (config, crons, commands)
│
├── governance/
│   ├── ASCII-VISUAL-DNA.md             # Visual format rules (5 formats, 42-char width)
│   └── ASCII-CONSTRUCTION.md           # How to build ASCII art correctly
│
├── docs/
│   ├── SOURCES.md                      # 20+ curated sources & scouting instructions
│   └── SHADER-SYSTEM.md                # Image processing system (sharp library)
│
├── utils/
│   ├── ascii-render.js                 # ASCII-to-PNG rendering (multi-color & monochromatic)
│   ├── act1-png-delivery.js            # Act 1 PNG builder and Telegram prep
│   ├── shader.js                       # Image processor with 6 presets
│   ├── test-shader.js                  # Test suite for all 6 presets
│   ├── figlet.js                       # ASCII typography generator
│   ├── verify-links.js                 # Link health checker
│   └── generate-ascii-art.js           # ASCII art generator
│
├── covers/                             # Issue cover images (Midjourney + Act 1 PNG)
│   └── [YYYY-MM-DD]-cover.png         # Midjourney-generated issue cover (visual reveal in Act 2)
│
├── modules/                            # 11 section specifications
│   ├── art.md
│   ├── painting.md
│   ├── illustration.md
│   ├── sculpture.md
│   ├── culture.md
│   ├── photography.md
│   ├── art-history.md
│   ├── opinions.md
│   ├── design-ai-tools.md
│   ├── product-process.md
│   ├── visual-brand.md
│   └── music.md
│
├── archive-log.md                      # Published issues log
├── package.json                        # Node dependencies (sharp, figlet, etc.)
└── .openclaw/                          # OpenClaw agent workspace
```

## Daily Workflow

### Morning: Set the Mix (8:00am PT)

**Editorial Director** opens the day:
1. Sets the Editorial Mix (6 intensity faders, 0–100%)
2. Writes morning brief with theme and sonic reference
3. Publishes brief to agents

Example brief:
```
Theme: The Ritual in Tools
Music: 70% (Japanese city pop — sparse, meditative, precise)
Visual: 85% (ASCII drives pacing; composition matters)
Research: 55% (Standard scouting)
Process: 40% (Secondary to visual)
Theme: 75% (Felt across all sections)
AI Culture: 20% (Not focused today)
```

### Mid-Morning: Discover & Scout (8:00–9:00am PT)

**Maeve (Researcher)** scouts at Research intensity:
- Scans all 20+ sources
- Identifies signals and convergences
- Reports findings to Assignment Editor

**Victor (Visual Curator)** scouts at Visual intensity:
- Selects 3–5 pieces (high quality only)
- Ensures source diversity (no repeats except music)
- Briefs Assignment Editor on visual patterns

**Coda (Synthesis)** connects research + visuals:
- Reads Maeve and Victor's outputs
- Extracts underlying patterns
- Maps signals to 11-section framework

### Late Morning: Commission Narratives (9:00–10:00am PT)

**Assignment Editor** synthesizes everything:
- Combines research signals + visual patterns
- Proposes theme and narrative angles for each of 11 sections
- Generates Act 1 ASCII pieces (11 pieces, 5 formats, rendered as PNG)
- Briefs Managing Editor on story direction

**Creative Director** (optional):
- Creates custom Midjourney prompts reflecting the issue's theme, sonic mood, and visual language
- Generates issue cover image via Midjourney
- Saves cover to `covers/[YYYY-MM-DD]-cover.png`

### Pre-Delivery: Write & Revise (10:00–11:00am PT)

**Managing Editor** develops prose:
- Writes one sentence per section (fits Act 2 format)
- Integrates sonic layer (tempo, frequency, tone)
- Adjusts voice based on Music and Process intensity
- Reports final text to Editorial Director

**Assignment Editor** verifies links:
- Runs verify-links.js to check all URLs
- Swaps broken links for source fallbacks
- Confirms all 11 sources are unique (except music)

### Delivery (8:00am & 8:30am PT)

**Editorial Director** makes final decisions:

**Act 1 (8:00am):** Visual preview
- 11 ASCII pieces rendered as PNG (4.54:1 aspect ratio — 486×2208px)
- Can be multi-color (visual richness) or monochromatic (thematic identity)
- No text labels, no links
- Closing sentence + "Full edition in 30 minutes"

**Act 2 (8:30am):** Full edition
- 11 sections: title + one sentence + link per section
- Same closing sentence as Act 1
- **Issue cover image** as final visual reveal (Midjourney-generated, if available)

**Logging:**
- Records issue in archive-log.md with theme, Editorial Mix, ASCII formats used, sources, cover filename
- Waits for reader feedback

## Editorial Principles

1. **Apartamento tone** — Intimate, unhurried, specific. Notice the ashtray on the table, not just the room.
2. **Breadth over depth** — 11 sources per issue; no source repeats (except music). Forces diverse perspective.
3. **Visual-first discovery** — Victor's selections drive the conversation. Research and narrative support the visuals.
4. **Sonic integration** — Music production quality, tempo, and frequency inform prose voice and visual composition.
5. **Parametric control** — Editorial Mix lets Director adjust how heavily each layer influences output.
6. **Archive continuity** — No theme repeats within 30 issues. Section combinations and formats vary.

## Key Constraints

**ASCII Visual System**
- 42 characters wide (safe for 375px Telegram viewport)
- 15 lines tall per piece
- Five formats: Classic Object, Geometric Frame, Typographic, Two Column, Full Spread
- No two consecutive pieces use same format
- All five formats must appear across 11 sections
- Format C (Typographic) always via `utils/figlet.js` with `leftPad=2`

**PNG Rendering**
- Act 1: Rendered to PNG at 4.54:1 aspect ratio (486×2208px)
- Supports two modes: multi-color (per-character coloring) and monochromatic (single color per image)
- Three themes available: `default` (dark), `midnight` (cool), `editorial` (light)
- File paths stored under `trustedLocalFileRoots` in openclaw.json for Telegram delivery

**Source Diversity**
- One source per link across 11 sections
- No source repeats within single issue (except music)
- Music exception: different artists/playlists can use same platform (Bandcamp, Discogs, Spotify, YouTube) multiple times

## Integration with OpenClaw

Design By Bulletin runs as six agents in OpenClaw:
- **Visual tier:** Maeve (research), Victor (curation), Coda (synthesis)
- **Editorial tier:** Assignment Editor, Managing Editor, Editorial Director
- **Shared workspace:** `/Users/blackmachete/.openclaw/workspace-bulletin-bot/`
- **Model:** Claude Sonnet 4.6
- **Delivery:** Telegram bot (@DesignByBulletin_bot)

## Troubleshooting

Common issues and solutions are documented in [SETUP.md](SETUP.md#common-issues--solutions):
- API key authentication
- Model provider configuration
- Gateway connection issues
- Device scope approval

## License

MIT

## About

Bulletin Board is built with [OpenClaw](https://github.com/anthropics/openclaw) and Claude Sonnet 4.6.

For questions or issues, open an issue on this repository.
