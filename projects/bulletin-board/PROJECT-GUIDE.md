# Design By Bulletin™ — Project Complete Guide
## How to Build Issues, ASCII Art, Content, and Manage the Publication Pipeline

**Last Updated:** May 7, 2026  
**Status:** 10 Issues Published (001-010)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Issue Structure](#issue-structure)
3. [Editorial Pipeline](#editorial-pipeline)
4. [ASCII Art Standards](#ascii-art-standards)
5. [Content Creation](#content-creation)
6. [File Organization](#file-organization)
7. [Publication Process](#publication-process)
8. [Bot Integration](#bot-integration)

---

## Project Overview

**Design By Bulletin™** is a magazine about design, culture, and tools, delivered as markdown files to a Telegram bot for public distribution.

### Core Identity
- **Format:** Markdown files (one issue = one complete .md file)
- **Distribution:** Telegram bot (@DesignByBulletinBot)
- **Publication Frequency:** Daily (May 5-12, 2026: Issues 001-010)
- **Architecture:** OpenClaw multi-agent system with public bot isolation

### Issue Numbering
- Issues 001-010 are the initial publication series
- Each issue covers a distinct theme
- Sequential publication (001-010) but can be served out of order by theme

---

## Issue Structure

### Standard Issue Format

Every complete issue file follows this structure:

```markdown
# Design By Bulletin™ — Issue [#]
## Theme: [Theme Name]
## Date: [Month Day, Year]

---

## ACT 1 — VISUAL PREVIEW

[Cover ASCII art with Design By Bulletin™ logo]

[Description: 11 ASCII art sections]

---

## ACT 2 — FULL EDITION

**[Section 1] — [Subtitle]**
[2-3 sentences of prose about specific work/artist]
*[Source: Publication Name]*

[Repeat for 11 sections total]

---

**CLOSING SENTENCE:**
"[Thematic closing sentence that captures issue essence]"

---

*Published: [Date]*
*Theme: [Theme] — [One-line theme description]*
```

### The Two Acts

**ACT 1 — Visual Preview**
- Logo and header branding
- 11 ASCII art sections (no prose, visual only)
- Optional: descriptive text for each section
- Purpose: Present visual identity and theme visually
- Bot command: `/preview` shows Act 1 only

**ACT 2 — Full Edition**
- 11 editorial sections
- Each section: 2-3 sentences of prose + source attribution
- No section numbering in published file (each is a subsection)
- Closing thematic sentence
- Publication metadata (date, theme, description)
- Purpose: Deep editorial content with curated sources
- Bot command: `/digest` or `/today` shows complete issue

---

## Editorial Pipeline

### The Three Roles

#### 1. Assignment Editor (Analyst)
- **Task:** Research cultural moment, identify theme
- **Output:** Content brief with:
  - Theme statement
  - Editorial positioning
  - 11 section assignments (each with format letter A-E, angle, description)
  - Editorial mix percentages (Music, Visual, Research, Process, Theme, AI Culture)
  - Sonic reference
  - Closing sentence
- **File:** `CONTENT-BRIEFS-003-010.md` (reference for Issues 003-010)

#### 2. Managing Editor
- **Task:** Write prose, source articles, build complete issue
- **Process:**
  1. Read the assignment brief
  2. For each of 11 sections: write 2-3 sentences about specific curated work
  3. Find and attribute 11 different sources (no repeats within issue)
  4. Ensure editorial register: warm, specific, authoritative
  5. Create ACT 1 ASCII art sections (or reference existing ones)
  6. Compile into complete markdown file
- **Output:** Markdown file with header, ACT 1, ACT 2, closing sentence
- **File Format:** `ISSUE-[#]-[theme-slug]-complete.md`

#### 3. Editorial Director (Curator)
- **Task:** Review for publication readiness
- **Checklist:**
  - Theme clarity and distinctness
  - All 11 sections align with theme
  - No source repeats (except music reference)
  - Prose register consistent and warm
  - Closing sentence captures theme essence
  - ASCII art (if new) follows standards
  - Format assignments followed (A, B, C, D, E)
- **Output:** Approval or notes for revision
- **Sign-off:** READY or REVISE

---

## ASCII Art Standards

### Core Principle: Uniform Width Alignment

All ASCII sections in an issue must have the **same character width** for clean Telegram rendering.

**Rule:** Width = maximum width of any block in the collection + padding

### Process

1. **Count all ASCII sections** in the issue (typically 11 for design purposes)
2. **Measure each section's width** (including borders and padding)
3. **Find maximum width** across all sections
4. **Pad all sections** to that maximum width
5. **Verify in Telegram** by pasting into code block

### Format Types (A-E)

- **A — Sparse Object, Light** (15-20 chars): Single element, minimal
- **B — Geometric Frame, Heavy** (25-30 chars): Bordered, structured
- **C — Typographic, Medium** (20-25 chars): Text-focused
- **D — Two Column, Medium** (30-35 chars): Side-by-side layout
- **E — Full Spread, Heavy** (40-50 chars): Maximum density

### Format Sequence Rule

No two consecutive sections should use the same format weight.

Example good sequence:
```
1:E (heavy) → 2:A (light) → 3:D (medium) → 4:B (heavy)
→ 5:A (light) → 6:C (medium) → 7:E (heavy) → 8:A (light)
→ 9:E (peak) → 10:D (resolve) → 11:A (close)
```

### Common Patterns

**Box-Drawing Borders (B Format):**
```
┌─────────────────────┐
│ Content             │
└─────────────────────┘
```

**Full-Width Blocks (E Format):**
```
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░  Content area                 ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

**Two-Column (D Format):**
```
╔──────────┬──────────╗
║ Left     │ Right    ║
╚──────────┴──────────╝
```

### Resources
- **Standard:** `ASCII-ART-STANDARDS.md`
- **Composition Guide:** `ASCII-COMPOSITION-GUIDE.md`
- **Archive:** `ASCII-ARCHIVE.md` (reference previous issues)

---

## Content Creation

### Section Structure (11 Sections per Issue)

| Position | Function | Typical Weight | Example Angle |
|----------|----------|---|---|
| 1 | Opening Declaration | Heavy (E/B) | Sets visual & thematic weight |
| 2 | First Repose | Light (A) | Breathing room after opening |
| 3 | Building | Medium (D/C) | Mid-range complexity |
| 4 | Deepening | Heavy (B/E) | Approaching climax |
| 5 | Pause | Light (A) | Critical breathing point |
| 6 | Shift | Medium (C) | Tonal change, meta-level |
| 7 | Ascending Climax | Heavy (E/B) | Building toward peak |
| 8 | Pause Before Peak | Light (A/C) | Hold before climax |
| 9 | Climactic Peak | Very Heavy (E) | Maximum density & intensity |
| 10 | Resolution | Medium (D/C) | Coming down from peak |
| 11 | Closing | Light (A/C) | Graceful exit |

### Prose Guidelines

**Tone Register (consistent across all sections):**
- Thoughtful, not clever
- Specific, not abstract
- Warm, not cold
- Authoritative without condescension
- Brief and precise

**Prose Length:**
- 2-3 sentences per section
- Shorter sentences in light sections (A)
- Slightly longer in heavy sections (E, B)
- Never exceed 4 sentences

**Content Requirement:**
- Each section must reference **specific work or artist**
- Include actual names, titles, publications
- Make each sentence unique to that specific piece on that day
- Generic statements: ❌ ("Design is important")
- Specific statements: ✅ ("Sherald's raw linen holds the grisaille")

### Source Attribution

**Required:** 11 different sources per issue (music references can repeat)

**Format:**
```
*[Source: Publication Name]*
```

**Acceptable Sources:**
- Art & Design: Artsy, Frieze, It's Nice That, Eye on Design
- Culture: The New Yorker, Monocle, Apartamento
- Criticism: JSTOR Daily, The Art Newspaper, Aeon
- Tech/Tools: Figma Blog, Nielsen Norman, Anthropic
- Community: Reddit (r/Design), Bluesky, X, Medium
- Video: YouTube design channels, LensCulture

**Restrictions:**
- No source repeats within single issue (except music)
- Source must be real and verifiable
- Provide actual source at publication metadata

---

## File Organization

### Directory Structure

```
/projects/bulletin-board/
├── ISSUE-001-presence-complete.md
├── ISSUE-002-the-mark-complete.md
├── ISSUE-003-handmade-complete.md
├── ISSUE-004-traces-complete.md
├── ISSUE-005-signal-complete.md
├── ISSUE-006-momentum-complete.md
├── ISSUE-008-threshold-complete.md
├── ISSUE-009-material-complete.md
├── ISSUE-010-worn-complete.md
│
├── CONTENT-BRIEFS-003-010.md         [Editorial outlines]
├── PROSE-STRUCTURE-REFERENCE.md      [11-section framework]
├── ASCII-ART-STANDARDS.md            [Alignment & formatting]
├── ASCII-COMPOSITION-GUIDE.md        [Format types A-E]
│
├── archive-log.md                    [Published issue history]
├── PUBLICATION-APPROVAL.md           [Final approval document]
│
├── sessions/
│   ├── 2026-05-06.md                 [General session notes]
│   └── 2026-05-06-issue-002.md       [Issue 002 pipeline]
│
└── TELEGRAM-BOT-SETUP.md            [Bot configuration]
```

### Naming Convention

**Complete Issue Files:**
```
ISSUE-[NUMBER]-[THEME-SLUG]-complete.md
```

Examples:
- `ISSUE-001-presence-complete.md`
- `ISSUE-005-signal-complete.md`
- `ISSUE-010-worn-complete.md`

### Archive Files

**Old/Draft Files (kept for reference):**
- `ISSUE-*.txt` — Draft versions
- `COVER-*.txt` — Individual cover files
- Archive directory for historical versions

---

## Publication Process

### Step 1: Create Content Brief
- Research cultural moment
- Identify 11 section angles
- Define 11 editorial mix percentages
- Document closing sentence
- Output: Brief in `CONTENT-BRIEFS-*.md`

### Step 2: Write Full Issue
- Follow brief's section assignments
- Write 2-3 sentences per section
- Curate 11 sources
- Compile ACT 1 (ASCII) and ACT 2 (prose)
- Save as: `ISSUE-[#]-[theme]-complete.md`

### Step 3: Editorial Review
- Verify theme clarity
- Check source diversity
- Confirm prose register
- Review ASCII alignment
- Sign-off: READY or REVISE

### Step 4: Publish & Commit
- Add to git: `git add ISSUE-*-complete.md`
- Commit with message:
  ```
  Issue [#]: [Theme] — [Brief description]
  
  [Details about what was finalized]
  
  Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
  ```
- Verify in git history

### Step 5: Update Bot Configuration
- Update `AGENTS.md` in bot workspace
- Point to new complete files
- Test bot can read and serve

---

## Bot Integration

### Bot Architecture

**File:** `/Users/blackmachete/.openclaw/workspace-bulletin-bot/AGENTS.md`

**Commands:**
- `/start` — Onboarding (3 questions)
- `/digest` or `/today` — Full issue
- `/preview` — ACT 1 only
- `/change` — Update preferences
- `/help` — Command reference

### How Bot Serves Issues

**Full Issue Delivery:**
1. User sends `/digest` or `/today`
2. Bot reads archive-log to find current issue
3. Bot locates `ISSUE-[#]-complete.md`
4. Bot sends all content in Telegram code block
5. User sees formatted issue with ASCII art preserved

**Preview Delivery:**
1. User sends `/preview`
2. Bot reads same archive-log lookup
3. Bot extracts ACT 1 section only
4. Bot sends visual preview without prose

### Session Isolation

**Critical:** Each Telegram user has completely isolated session.

**Configuration:**
```json
{
  "session": {
    "dmScope": "per-account-channel-peer",
    "mainKey": "agent:alfredo:main"
  }
}
```

**Result:**
- No context leakage between users
- No system messages in public chats
- Clean editorial interface

---

## Quick Reference: Creating a New Issue

### Checklist

- [ ] **Research phase** — Identify theme from cultural signals
- [ ] **Assignment brief** — Document 11 sections with angles, formats, editorial mix
- [ ] **Prose writing** — Create 2-3 sentences for each of 11 sections
- [ ] **Source curation** — Find 11 different sources, verify accuracy
- [ ] **ASCII art** — Create or reference 11 sections, measure for alignment
- [ ] **Compile markdown** — Combine header, ACT 1, ACT 2, metadata
- [ ] **Editorial review** — Verify quality standards, sign-off
- [ ] **Git commit** — Add file, write message, push to main
- [ ] **Bot update** — Verify bot configuration points to new file
- [ ] **Archive update** — Add entry to archive-log.md

### Time Estimate

- Research & brief: 1-2 hours
- Prose writing: 1-2 hours
- Source curation: 30 min
- ASCII creation: 30 min - 1 hour (or reference existing)
- Review & finalization: 30 min
- **Total: 4-6 hours per issue**

---

## Example: Building Issue 001

### Assignment Brief
- Theme: Presence
- Positioning: Opening statement for magazine series
- 11 sections covering different registers of "being fully present"
- Closing: "Design By Bulletin™ is about presence..."

### Section Assignments (Example)
1. Art → A (Light) — "The Visible Gesture"
2. Painting → D (Medium) — "Color as Statement"
3. Illustration → A (Light) — "The Hand Visible"
4. Sculpture → B (Heavy) — "Material as Witness"
5. Culture → E (Very Heavy) — "Being Here Now"
... etc

### Prose Example (Section 1)
```
**Art — The Visible Gesture**
Artists making work that announces itself without apology. 
Form that declares presence. The artwork as proof someone was here thinking.
*[Source: Artsy]*
```

### ASCII Example (Format A - Light)
```
    ╭─────────────┮
    │     ◆       │
    │   ◆ ◆ ◆     │
    │   ◆ ◆ ◆     │
    │     ◆       │
    ╰─────────────╯
```

### Result
Complete `ISSUE-001-presence-complete.md` ready for publication.

---

## Resources & References

**Core Documentation:**
- `CONTENT-BRIEFS-003-010.md` — Editorial outlines
- `PROSE-STRUCTURE-REFERENCE.md` — 11-section framework
- `ASCII-ART-STANDARDS.md` — Alignment & spacing rules
- `STYLE-GUIDE.md` — Tone and voice guidelines

**Archived Materials:**
- `archive-log.md` — All published issues with metadata
- `sessions/` — Session documentation and working notes
- `ASCII-ARCHIVE.md` — Reference ASCII sections from published issues

**Technical:**
- `TELEGRAM-BOT-SETUP.md` — Bot security & context isolation
- `OPENCLAW-GATEWAY-RESTART-FIX.md` — Architecture notes

---

## Questions?

Refer to:
1. This guide (PROJECT-GUIDE.md) for overview
2. Specific `.md` file for detailed standards
3. `archive-log.md` for examples of published issues
4. Previous session notes in `sessions/` for context

---

**Version:** 1.0  
**Last Updated:** May 7, 2026  
**Status:** 10 Issues Published, Complete Pipeline Documented
