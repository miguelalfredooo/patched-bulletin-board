# pipeline.md — Design by Bulletin
## Six-agent editorial pipeline with parametric Editorial Mix

This file is the single source of truth for running the
Design by Bulletin pipeline. Read this first at the start
of every session.

---

## The six agents

**Visual Discovery (three agents)**
- Maeve (Researcher) — Scouts 20+ sources, identifies signals and convergences
- Victor (Visual Curator) — Selects 3–5 visual pieces daily, ensures source diversity
- Coda (Research Synthesis) — Connects research to visuals, extracts patterns

**Editorial Curation (three agents)**
- Assignment Editor — Commissions narratives based on research + visuals
- Managing Editor — Develops prose, integrates sonic layer, adjusts voice
- Editorial Director — Sets Editorial Mix, makes final decisions, logs archive

One session. One issue. One decision. Two acts. Parametric control via Editorial Mix.

---

## Sequence

**Step 0 — Editorial Director Sets Editorial Mix (Morning)**
  Sets: Six intensity faders (Music 0–100%, Visual, Research, Process, Theme, AI Culture)
  Sets: Daily theme and sonic reference
  Reads: BRIEF.md, archive-log.md
  Produces: Morning brief with Editorial Mix

**Step 1 — Visual Discovery**
  Maeve scouts across all 20+ sources (scouting intensity = Research mix value)
  Reads: SOURCES.md, Editorial Mix, morning brief
  Produces: Research signals, convergences, findings

  Victor selects 3–5 visual pieces per section (selection intensity = Visual mix value)
  Reads: Victor's selections, visual standards (ASCII-VISUAL-DNA.md)
  Produces: 11 pieces with high quality, no repeat sources

  Coda synthesizes research + visuals
  Reads: Maeve findings, Victor selections, theme
  Produces: Pattern extraction, signal maps

**Step 2 — Editorial Commission**
  Assignment Editor synthesizes all inputs
  Reads: Maeve findings, Victor visuals, Coda patterns, Editorial Mix
  Produces: Theme + 11-section narrative angles

**Step 3 — Prose Development**
  Managing Editor writes Act 2 narratives (one sentence per section)
  Reads: STYLE-GUIDE.md, sonic reference, visual language, Editorial Mix
  Adjusts tone based on:
    - Music intensity → sonic texture influence on prose
    - Theme intensity → explicit vs. implicit theming
    - Process intensity → "making" narrative emphasis
    - AI Culture intensity → AI/tool philosophy emphasis
  Produces: Final prose, checked for Apartamento register

**Step 4 — Visual + Link Generation**
  Assignment Editor generates Act 1 ASCII pieces
  Reads: ASCII-VISUAL-DNA.md, ASCII-CONSTRUCTION.md, Victor's visual language
  Produces: 11 ASCII pieces (5 formats, no repeats, 42-char wide, 15-line tall)

  Assignment Editor verifies links
  Runs: verify-links.js
  Produces: All 11 sources verified (no broken links, no repeats except music)

**Step 5 — Editorial Director Final Review**
  Reviews: Act 1 (ASCII only), Act 2 (with text/links), cover (if generated)
  Reads: BRIEF.md, archive-log.md, entire issue
  Decision: READY or REDIRECT
  
  If READY: Logs to archive-log.md, queues Act 1 (8:00am) and Act 2 (8:30am)
  If REDIRECT: Passes notes back to relevant agent(s), rebuilds issue

---

## Signal flow

Morning brief (Editorial Mix + theme) 
  → Maeve/Victor/Coda discovery 
  → Assignment Editor commission 
  → Managing Editor prose 
  → Assignment Editor ASCII + verify links
  → Editorial Director review 
  → READY or REDIRECT

Governance intercepts at three points:
- Maeve/Victor enforce source diversity (one source per section, no repeats except music)
- Managing Editor self-checks prose against STYLE-GUIDE.md (Apartamento register)
- Assignment Editor verifies all ASCII pieces against ASCII-VISUAL-DNA.md before passing to Director

Editorial Mix modulates all agents:
- Research intensity controls Maeve's scouting depth
- Visual intensity controls Victor's selection criteria and composition boldness
- Music intensity controls Managing Editor's sonic integration
- Theme intensity controls Managing Editor's explicit vs. implicit theming
- Process intensity controls mention of "making" and workflows
- AI Culture intensity controls tool/AI philosophy mentions

---

## Issue structure

**Act 1 — Visual Preview (8:00am PT)**
- Locked masthead via figlet (Format C)
- 11 ASCII pieces — one per section, no labels, no links
- No text except: one closing sentence + "Full edition in 30 minutes"
- Format constraint: use all 5 formats across 11 pieces, no consecutive repeats

**Act 2 — Full Edition (8:30am PT)**
- 11 sections in order:
  1. Art (source + one-sentence narrative)
  2. Painting
  3. Illustration
  4. Sculpture
  5. Culture
  6. Photography
  7. Art History
  8. Opinions
  9. Design & AI Tools
  10. Product & Process
  11. Visual & Brand (Music/Sound Culture sources in any section as needed)
- Each section: source title, one sentence, one link
- Closing sentence (same as Act 1)
- **Issue Cover Image** — Midjourney-generated cover reflecting the issue theme, sent as final visual reveal (if available)

---

## Visual Delivery Options

### ASCII-to-PNG Rendering

Any ASCII art can be rendered to PNG for richer Telegram presentation. Independent of Midjourney covers, can be used at any point in the workflow.

**Rendering modes:**
- **Multi-color** (default) — Per-character coloring based on visual weight. Dense characters get accent colors, sparse get dim, text gets main color. Rich visual hierarchy.
- **Monochromatic** — All characters use single color. Clean, editorial aesthetic. Each ASCII piece can have its own color identity via theme selection.

**Available themes:**
- `default` — Dark (#0a0a0a bg), warm off-white text (evening delivery)
- `midnight` — Navy (#07080f bg), cool blue text (high contrast)
- `editorial` — Light (#faf8f2 bg), ink text (accessibility)

**Use cases:**
- Act 1 visual preview (8:00am PT) — 11 ASCII pieces, typically multi-color for visual richness
- Custom ASCII pieces — monochromatic for individual sections with distinct color identity
- Visual separators — monochromatic dividers with theme-specific colors
- Thematic emphasis — render ASCII art that echoes the day's theme

**Example — monochromatic exploration:**
```javascript
const monoAscii = await renderAsciiImage(asciiText, {
  theme: 'midnight',
  monochromatic: true,
  fontSize: 14,
  scale: 2
});
```

See `utils/ascii-render.js` and `utils/act1-png-delivery.js` for implementation.

---

## Archive log format

Each entry after a successful issue:

  ## [YYYY-MM-DD]
  **Theme:** [one word or short phrase]
  **Editorial Mix:** Music [%], Visual [%], Research [%], Process [%], Theme [%], AI Culture [%]
  **Sonic Reference:** [genre/mood/producer]
  **ASCII Formats:** [A, B, C, D, E distribution]
  **Sources Used:** [11 sources, one per section]
  **Cover Image:** [filename if generated]
  **Notes:** [optional curator/editorial director observation]

---

## Documentation Map

**Editorial Governance:**
- BRIEF.md — Project context, Editorial Mix framework, delivery info
- STYLE-GUIDE.md — Voice (Apartamento), three-layer integration (visual/sonic/narrative)
- governance/ASCII-VISUAL-DNA.md — ASCII format specs (5 formats, 42 chars, 15 lines)
- governance/ASCII-CONSTRUCTION.md — ASCII construction methodology

**Agent & Workflow:**
- agents/pipeline.md — THIS FILE. Editorial workflow and agent sequence
- docs/SOURCES.md — 20+ sources and scouting instructions for Maeve/Victor/Coda
- docs/SHADER-SYSTEM.md — Image processing (sharp library, 6 presets, Editorial Mix integration)

**Modules & Implementation:**
- modules/*.md — 11 section specifications (Art, Painting, Illustration, etc.)
- utils/figlet.js — ASCII typography (masthead + Format C pieces)
- utils/verify-links.js — Link health checking before delivery
- archive-log.md — Published issue log (themes, sources)

**Telegram Bot:**
- BULLETIN-BOT.md — Bot configuration, cron jobs, commands, troubleshooting
- USER.md — Quick reference for readers/subscribers

---

## Constraints & Rules

**Source Diversity**
- One source per link across 11 sections
- No source repeats within single issue (except music platforms)
- Music exception: Bandcamp/Discogs/Spotify/YouTube can repeat for different artists/playlists

**ASCII Visual**
- All pieces 42 characters wide, 15 lines tall (Telegram safe width)
- Five formats: A (Classic Object), B (Geometric Frame), C (Typographic), D (Two Column), E (Full Spread)
- No two consecutive pieces use same format
- All five formats must appear across 11 pieces
- Quality threshold: High/strong only (never mediocre)
- Format C always via utils/figlet.js with leftPad=2 parameter

**Editorial Voice**
- Apartamento register (intimate, unhurried, specific, not trend-chasing)
- Three-layer integration: visual + sonic + narrative work in concert
- Theme is felt across all 11 sections without being stated in any
- No generic language (avoid: "explores," "groundbreaking," "must-see," "rising trend")

**Editorial Mix Application**
- Research intensity (0–100%): Controls Maeve's scouting depth
- Visual intensity (0–100%): Controls Victor's selection boldness and Managing Editor's composition emphasis
- Music intensity (0–100%): Controls Managing Editor's sonic texture integration
- Theme intensity (0–100%): Controls whether theme is explicit (>75%) or subtle (<50%)
- Process intensity (0–100%): Controls "making" and workflow narrative mentions
- AI Culture intensity (0–100%): Controls tool/AI philosophy presence in selections

**Agent Rules**
- Editorial Director sets mix first. No agent starts without morning brief.
- Maeve scouts first. Victor selects from Maeve's signals + independent scouting.
- Coda synthesizes after both have reported findings.
- Assignment Editor commissions after all three discovery agents report.
- Managing Editor writes after receiving Commission.
- Managing Editor never writes before Understanding the visual language + sonic mood.
- Editorial Director reviews entire issue before marking READY.
- If REDIRECT: specific notes go back to agent who made the error. Rebuild only that section.
- What is not in archive-log.md does not exist for the system.

---

## Starting a New Session

1. **Editorial Director sets the mix** (morning brief with Editorial Mix + theme + sonic reference)
2. **Tell Maeve:** "Read docs/SOURCES.md and pipeline.md. Here is the Editorial Mix. Scout."
3. **Tell Victor:** "Read governance/ASCII-VISUAL-DNA.md. Here are Maeve's findings. Select visuals."
4. **Tell Coda:** "Read Maeve's and Victor's outputs. Synthesize patterns."
5. **Tell Assignment Editor:** "Commission narrative angles for 11 sections."
6. **Tell Managing Editor:** "Read STYLE-GUIDE.md. Write Act 2 prose based on commission + visual + sonic reference."
7. **Tell Assignment Editor (again):** "Generate Act 1 ASCII pieces and verify all links."
8. **Editorial Director:** Review, decide READY or REDIRECT.

---

## Cron Jobs

39b83092 — Act 1 Visual Preview, 8:00am PT (daily)
f7eae541 — Act 2 Full Edition, 8:30am PT (daily)

See BULLETIN-BOT.md for complete bot reference.

---

## Version
2.0.0 — Six-agent pipeline with parametric Editorial Mix framework. Discovery (Maeve/Victor/Coda) → Commission (Assignment Editor) → Write (Managing Editor) → Verify (Assignment Editor) → Review (Editorial Director) → Send or REDIRECT.
