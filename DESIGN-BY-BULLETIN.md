# Design By Bulletin™

A daily automated editorial digest delivered via Telegram that orchestrates both the visual agents and the Bulletin Board editorial system.

## Overview

**Design By Bulletin™** is a curated visual + editorial digest sent every morning to Alfred, a product designer learning AI tools. It leverages two parallel agent systems working in concert:

### Visual Discovery Layer
- **Victor** (The Curator) — Evaluates and selects visual content for each section
- **Maeve** (The Archeologist) — Research context, identifies gaps, recommends directions
- **Coda** (The Archivist) — Records, catalogs, and preserves the visual selections

### Editorial Curation Layer  
- **Assignment Editor** (The Scout) — Identifies signals in the visual findings
- **Managing Editor** (The Maker) — Develops coherent narratives around visual discoveries
- **Editorial Director** (The Visionary) — Makes final publication decisions and guards the voice

### Delivery
Rendered as ASCII/Unicode visual newsletter, delivered via Telegram daily in two acts.

## System Design

**Recipient:** Alfred (Telegram: 7774590281) — product designer learning AI tools
**Delivery:** Telegram (via OpenClaw telegram plugin)
**Frequency:** Daily, two acts
- Act 1: Visual Preview (8:00am PT) — What's emerging
- Act 2: Full Edition (8:30am PT) — Complete curated digest
- On-demand: Onboarding Flow — System overview

**Model:** Claude Sonnet 4.6 (primary) with local fallbacks
**Format:** ASCII/Unicode visual presentation (box drawing, block fills, half-blocks, braille, geometric shapes)
**Tone:** Apartamento magazine — intimate, unhurried, observational

## Architecture

### Data Flow

```
Step 1: VISUAL DISCOVERY (Victor + Maeve + Coda)
├─ Maeve researches gaps in each section
├─ Victor evaluates visual content quality/fit
├─ Coda catalogs selections
└─ Output: Curated visual selections with metadata

Step 2: EDITORIAL CURATION (Bulletin Board Agents)
├─ Assignment Editor scouts the curated visuals
├─ Managing Editor develops narratives around findings
├─ Editorial Director approves sections
└─ Output: Editorial narratives contexualizing the visuals

Step 3: RENDERING & DELIVERY
├─ Format visual + narrative as ASCII
├─ Optimize for Telegram constraints
├─ Send Act 1 preview (8:00am)
└─ Send Act 2 full edition (8:30am)
```

### The Six-Agent Workflow

| Agent | Role | Phase | Contribution |
|-------|------|-------|-------------|
| **Maeve** (Archeologist) | Research & gaps | Visual Discovery | Context, why content matters, what's missing |
| **Victor** (Curator) | Evaluation & selection | Visual Discovery | Which pieces fit, visual quality, archive strategy |
| **Coda** (Archivist) | Record keeping | Visual Discovery | Metadata, catalog, preservation, provenance |
| **Assignment Editor** (Scout) | Signal finding | Editorial Curation | Identifies patterns in visual selections, commissions angles |
| **Managing Editor** (Maker) | Narrative building | Editorial Curation | Develops stories around visual findings, synthesizes themes |
| **Editorial Director** (Visionary) | Final arbiter | Editorial Curation | Approves sections, guards voice, decides what publishes |

Each run creates a fresh editorial session; no state persists between days.

## Sections (11 total)

Each section has visual discovery + editorial curation:

| Section | Visual Focus | Editorial Focus | Example Content |
|---------|--------------|-----------------|-----------------|
| **Art** | Fine art, contemporary, installations | What shifts in visual culture | Museum collections, emerging artists |
| **Painting** | Painting technique, color, form | How painters see | Contemporary painters, historical study |
| **Illustration** | Illustrative work, narrative image | Visual storytelling | Editorial illustration, book covers |
| **Sculpture** | 3D forms, material, space | Spatial thinking through form | Installation art, architectural sculpture |
| **Culture** | Cultural artifacts, design evidence | What artifacts reveal | Objects as cultural documents, meaning in everyday things |
| **Photography** | Photography as art + documentation | What photographs show us | Documentary, art photography, visual essays |
| **Art History** | Historical movements, context | Why history matters to now | Periods, movements, lineages, influence |
| **Opinions** | Critical perspectives on visual culture | What deserves critical thinking | Essays, criticism, cultural analysis |
| **Design & AI Tools** | Design tools, AI in practice, process | How designers use tools | Generative tools, software, workflows, experiments |
| **Product & Process** | Design process, making, methodology | How things are made | Behind-the-scenes, process documentation, systems |
| **Visual & Brand** | Visual systems, branding, identity | Systems thinking through design | Brand identity, design systems, visual thinking |

## ASCII System

### Visual Formats (5 styles)

**A: Classic Object**
- Letterforms as design elements (not labels)
- Smushing + kerning rules applied
- Consistent row height
- Drop caps, word fragments

**B: Geometric Frame**
- Box drawing characters (single, double, heavy)
- Nested containers
- Proportional spacing
- Symmetrical layouts

**C: Typographic**
- Full ASCII/FIGlet palette
- Text as primary visual
- Kerning precision
- Hierarchy through spacing

**D: Two Column**
- Parallel narratives
- Split visual/text
- Balanced composition
- Column-aware line breaking

**E: Full Spread**
- Maximalist layout
- All 45 chars × 15 lines utilized
- Complex nesting
- Multiple visual weights

### Character Palette

**Block Fills:**
```
Full: █  75% ▓  50% ▒  25% ░
```

**Borders & Boxes:**
```
Single: ─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼
Double: ═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬
Heavy: ━ ┃ ┏ ┓ ┗ ┛ ┣ ┫ ┳ ┻ ╋
```

**Half-Blocks:**
```
Top: ▀  Bottom: ▄  Left: ▌  Right: ▐
```

**Braille:** ⠀ ⠁ ⠂ ⠃ ⠄ ⠅ ⠆ ⠇...

**Geometric:**
```
◆ ◇ ● ○ ■ □ ▲ △ ▼ ▽ ◀ ▶
```

**Arrows:** ← ↑ → ↓ ↔ ↕ ...

## Telegram Constraints

- **Max width:** 45 characters
- **Max height per message:** 15 lines
- **Total message limit:** 3000 characters
- **Code block required:** All art wrapped in ``` for proper monospace rendering
- **Message splitting:** Long digests split across multiple messages automatically

## Architecture

### Cron Jobs (OpenClaw scheduled agents)

**Visual Preview (Act 1)**
- Job ID: `39b83092-7b9c-4b56-bf7d-8a19519e5b81`
- Time: 8:00am PT daily
- Output: Single ASCII frame, 5 sections highlighted
- Delivery: Telegram to Alfred

**Full Edition (Act 2)**
- Job ID: `f7eae541-e3ec-4abe-859c-1aba22498b46`
- Time: 8:30am PT daily
- Output: Complete digest, all 11 sections
- Delivery: Telegram to Alfred (multi-message if needed)

**Onboarding Flow**
- Job ID: `e53a42d4-08dc-4e30-928e-c5003e143d40`
- Trigger: On-demand via `/design-by-bulletin onboard`
- Output: System overview, how to navigate, example sections
- Delivery: Telegram to Alfred

**Grid Edition (Experimental)**
- Job ID: `4dfcd8d8-0610-4ea0-9da5-a3179fa05066`
- Status: Disabled
- Explored: Alternative grid-based layout for dense content

### Data Flow

```
Bulletin Board Agents (running 24/7)
    ↓
Cron Job triggers on schedule
    ↓
Assignment Editor scouts content for the day
    ↓
Managing Editor develops narratives
    ↓
Editorial Director approves sections
    ↓
Rendering engine formats content as ASCII
    ↓
Telegram plugin sends to Alfred
    ↓
Alfred receives daily visual digest
```

### Session Model

Each run creates a new editorial session:
1. **Scout phase** (Assignment Editor): Identify 3-5 key pieces per section
2. **Develop phase** (Managing Editor): Create coherent narrative around findings
3. **Format phase** (Editorial Director + renderer): Convert to ASCII + send

No persistent state between runs. Each day is fresh.

## Masthead (Locked)

Never regenerate — this is the canonical visual identity:

```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━
```

## Delivery & Status

### Live Cron Jobs

- ✅ Act 1 (Visual Preview) — Active, delivering 8:00am PT
- ✅ Act 2 (Full Edition) — Active, delivering 8:30am PT
- ✅ Onboarding Flow — Active, on-demand
- ⏸️ Grid Edition — Experimental, currently disabled

### Message Delivery

Telegram integration uses OpenClaw's telegram plugin with:
- Direct message delivery to Alfred (user 7774590281)
- Code block formatting for ASCII preservation
- Auto-splitting for messages exceeding 3000 chars
- Message confirmation (some edge cases with 4096 char limit noted)

### Testing & Iteration

Latest run tested:
- Full palette utilization (block fills, half-blocks, braille, geometric)
- FIGlet letterforms as design elements (not labels)
- Telegram-optimized formatting
- Multi-section output

## Integration of Both Systems

Design By Bulletin **bridges two agent ecosystems**:

### The Visual Loop (Victor + Maeve + Coda)
1. **Coda** scans the archive for gaps and coverage
2. **Maeve** researches what each section needs based on current events, trends, themes
3. **Victor** evaluates visual content — what fits, what doesn't, what directions to pursue
4. **Coda** catalogs selections with full provenance and metadata

### The Editorial Loop (Bulletin Board)
1. **Assignment Editor** receives visual curator's selections, identifies signals and patterns
2. **Managing Editor** develops narratives that contextualize the visual findings
3. **Editorial Director** reviews and approves sections for publication

### The Rendering Loop
1. Format approved narrative + visual selections as ASCII
2. Optimize for Telegram (45 chars wide, 15 lines, 3000 char limit)
3. Deliver as two acts (visual preview + full edition)

The six agents work in **parallel when possible**:
- Maeve researches while Victor evaluates while Coda catalogs
- Assignment Editor scouts while Managing Editor develops
- Editorial Director reviews everything before rendering

**Result:** A daily digest that's both visually curated AND editorially coherent, delivered with rhythm and timing.

## Configuration

### Telegram Setup

In `~/.openclaw/openclaw.json`:

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "accounts": {
        "default": {
          "botToken": "YOUR_BOT_TOKEN",
          "dmPolicy": "open"
        }
      }
    }
  }
}
```

### Cron Configuration

Cron jobs are managed via OpenClaw's scheduled agent system:

```bash
# Visual Preview (Act 1)
openclaw schedule create \
  --agent bulletin-assignment \
  --cron "0 8 * * *" \
  --message "Scout visual content for Design By Bulletin today"

# Full Edition (Act 2)  
openclaw schedule create \
  --agent bulletin-editorial \
  --cron "30 8 * * *" \
  --message "Publish today's Design By Bulletin edition"
```

## User Context

- **Builder/Operator:** Miguel (you)
- **Recipient/Audience:** Alfred — product designer learning AI tools
- **Editorial Tone:** Apartamento magazine — intimate, unhurried, observational
- **Purpose:** Daily dose of visual inspiration + design thinking + AI tools context

Alfred should receive each morning:
1. A visual preview (Act 1) showing what's coming
2. The full curated digest (Act 2) ready to explore

## Outstanding Items

- Subagent `ad07f308` — Testing 5 alternative visual styles (Bauhaus Grid, Woodcut, Blueprint, Newspaper, Zine); completion not yet confirmed
- Delivery confirmation edge cases: Some runs show `delivered: false`, likely due to Telegram 4096 character limit on single messages; message splitting should resolve
- Latest test state: Full palette + FIGlet as design elements + Telegram-optimized formatting — pending confirmation of output

## Documentation

Full setup and technical details in `/Users/blackmachete/design-by-bulletin/README.md`:
- Masthead specifications
- Section taxonomy
- ASCII system details
- Five visual formats with examples
- Complete character palette reference
- Telegram delivery rules
- Editorial process workflows
- Source evaluation guidelines
- Onboarding flow steps
- Full changelog

## See Also

- [Bulletin Board](README.md) — The three-agent editorial system
- [Setup & Configuration](SETUP.md) — How to run and access agents
- [Editorial Board](EDITORIAL-BOARD.md) — Editorial roles and workflow
