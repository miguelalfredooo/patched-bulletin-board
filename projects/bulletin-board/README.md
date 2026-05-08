# Design By Bulletin™
## A Daily Magazine About Design, Culture, and Tools

**Status:** 📚 **11 Issues Published (001–011) — LIVE**
**Distribution:** Telegram — Alfred (`telegram:7774590281`)
**Latest Issue:** 011 — Invisible (May 13, 2026)

---

## Quick Start

### For Contributors
Read these first:
1. **[BOT-COMPONENTS.md](BOT-COMPONENTS.md)** — 5 components, 3 ACT 1 approaches, codeblock rules
2. **[DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)** — Step-by-step workflow including required session archiving
3. **[ASCII-ART-ASSET-GUIDE.md](ASCII-ART-ASSET-GUIDE.md)** — Asset locations across 6 variations

---

## What Is Design By Bulletin™?

A curated daily editorial about design, culture, and tools. Each issue:

- **ACT 1:** Visual preview — ASCII art cover + 11 labeled section pieces
- **ACT 2:** Editorial content — 11 sections with prose and sources (plain text, not codeblocks)
- **Closing:** Thematic sentence capturing the issue's essence

Delivered via Telegram to Alfred, who distributes to the channel.

---

## Published Issues (11 Complete)

| # | Theme | Date | Issue File | Session |
|---|-------|------|------------|---------|
| 001 | Presence | May 5 | [ISSUE-001](ISSUE-001-presence-complete.md) | — |
| 002 | The Mark | May 6 | [ISSUE-002](ISSUE-002-the-mark-complete.md) | [session](sessions/issue-002-the-mark.md) |
| 003 | Handmade | May 6 | [ISSUE-003](ISSUE-003-handmade-complete.md) | — |
| 004 | Traces | May 7 | [ISSUE-004](ISSUE-004-traces-complete.md) | — |
| 005 | Signal | May 8 | [ISSUE-005](ISSUE-005-signal-complete.md) | [session](sessions/issue-005-signal.txt) |
| 006 | Momentum | May 9 | [ISSUE-006](ISSUE-006-momentum-complete.md) | [session](sessions/issue-006-momentum.txt) |
| 007 | Interval | May 8 | [ISSUE-007](ISSUE-007-interval-complete.md) | [session](sessions/issue-007-palimpsest.txt) |
| 008 | Threshold | May 10 | [ISSUE-008](ISSUE-008-threshold-complete.md) | [session](sessions/issue-008-emergence.txt) |
| 009 | Material | May 11 | [ISSUE-009](ISSUE-009-material-complete.md) | [session](sessions/issue-009-fold.txt) |
| 010 | Worn | May 12 | [ISSUE-010](ISSUE-010-worn-complete.md) | [session](sessions/issue-010-aperture.txt) |
| 011 | Invisible | May 13 | [ISSUE-011](ISSUE-011-invisible-complete.md) | — |

**Note:** Issues 001, 003, 004 have no session file — art was generated live and not saved at the time.

---

## Component-Based Issue Composition

Every issue uses 5 reusable components built into two acts:

| Component | Purpose | Location |
|-----------|---------|---------|
| COMPONENT-1-ISSUE-COVER | Branded cover with HERO-TALL portrait | `ascii-art-library/master/` |
| COMPONENT-2-ISSUE-SECTIONS | 11 section ASCII art (6 variations) | `ascii-art-library/[variation]/` |
| COMPONENT-3-EDITORIAL-GRID | 11 prose sections | In issue file |
| COMPONENT-4-CLOSING-SENTENCE | Thematic wrap-up | In issue file |
| COMPONENT-5-METADATA-FOOTER | Published date + theme description | In issue file |

**Full reference:** [BOT-COMPONENTS.md](BOT-COMPONENTS.md)

---

## Pipeline: Curator → Assignment Editor → Editorial Director → Bot

**New (May 7, 2026):** Automated Curator agent integrated for daily content discovery and validation.

```
Curator (discovers + validates URLs daily, 7:30am report)
    ↓
Assignment Editor (editorial judgment: which URLs fit today's theme?)
    ↓
Managing Editor (develops narratives)
    ↓
Editorial Director (final approval)
    ↓
Bot (Telegram delivery — plain text, no parse_mode)
```

**Curator responsibilities:**
- Scan publications, Bluesky, Reddit, Substack, Medium daily
- Validate URLs (accessibility, metadata, real articles vs. paywalls)
- Score on 4 dimensions (relevance, credibility, freshness, title integrity)
- Report PASSED (7.0+) and FLAGGED (5.0-6.9) URLs to Assignment Editor

**Curator workspace:** `/Users/blackmachete/.openclaw/workspace-bulletin-curator/`
**Integration docs:** [CURATOR-INTEGRATION.md](CURATOR-INTEGRATION.md)

---

## How to Build a New Issue

1. **Save session file first** → `sessions/ISSUE-[###]-[theme]-session.md` and commit
2. Choose ACT 1 approach (v1 Grid / v2 Cards / v3 Template)
3. Prepare cover — update issue number, theme, date (HERO-TALL portrait auto-generated)
4. Write 11 editorial sections for ACT 2 (prose as plain text markdown with links)
5. Add closing sentence + metadata footer
6. Commit issue file
7. Editorial Director approves → Bot sends to Telegram (plain text, no parse_mode)

**Full workflow:** [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)

---

## Format Rules (Critical)

- **Max line width:** 35 characters per line inside any codeblock
- **Divider:** `━━━━━━━━━━━━━━━━━━━━━━━━━` (25 chars — fixed, never change)
- **ACT 2 prose:** Plain Telegram text — NOT inside codeblocks
- **Section names in codeblocks:** Plain ALL CAPS — no `**bold**` markers
- **Section art canvas:** 9 chars wide × 5 lines tall (standardized)
- **Cover HERO-TALL:** 15-row centered pyramid portrait

---

## File Organization

```
projects/bulletin-board/
│
├── ISSUE-001 through ISSUE-011 -complete.md   (11 published issues)
│
├── sessions/                                   (generation records — append-only)
│   ├── issue-002-the-mark.md
│   ├── issue-005-signal.txt
│   ├── issue-006-momentum.txt
│   ├── issue-007-palimpsest.txt
│   ├── issue-008-emergence.txt
│   ├── issue-009-fold.txt
│   ├── issue-010-aperture.txt
│   └── issue-002-session-pipeline.md
│
├── triangle-cover/                             (archived pyramid cover series, issues 001–011)
│
├── ascii-art-library/
│   ├── source/         (110 files — 11 sections × 10 issues, standardized)
│   ├── labeled/        (110 files — with section names right-aligned)
│   ├── expanded/       (110 files — centered hero)
│   ├── compact/        (220 files — left/right)
│   ├── hero-tall/      (portrait format)
│   ├── original/       (art extracted verbatim from sessions — pre-edit originals)
│   └── master/         (component templates)
│
├── BOT-COMPONENTS.md                           (component system reference)
├── DEPLOYMENT-GUIDE.md                         (workflow + session management)
├── ASCII-ART-ASSET-GUIDE.md                    (asset library reference)
├── RELEASE-CHECKLIST.md                        (pre-publish checklist)
└── archive-log.md                              (publication history — append-only)
```

---

## Editorial Standards

### Voice
- Specific over abstract — name actual artists, works, publications
- Warm and authoritative, never condescending
- 2–4 sentences per section maximum

### ASCII Art
- All art inside codeblocks for monospace rendering
- Prose always outside codeblocks as plain Telegram text
- No two consecutive sections use the same format weight

### Source Diversity
- 11 different sources per issue — no repeats within an issue
- Mix: art publications, design platforms, cultural magazines

### Theme Integration
- Theme is felt, never stated
- Each of the 11 sections contributes without naming the theme explicitly

---

## Session Management

Sessions are the source of truth — protect them like database backups.

- **Never delete** a session file. Move to `sessions/archive/` if cleanup needed.
- **Save before sending** — session committed to git before Alfredo sends anything
- **Pre-send check:** `git ls-files projects/bulletin-board/sessions/ISSUE-[#]-*`

**Why this matters:** Issues 001, 003, 004 have no recoverable original art because their sessions were never saved to git.

---

## Project Status

✅ 11 Issues Published (001–011, complete, approved)
✅ Component system documented and standardized
✅ Session management rules in place
✅ Original art recovered to `sessions/` and `ascii-art-library/original/`
✅ Triangle cover series archived in `triangle-cover/`
✅ All format rules defined (35-char width, 25-char divider, prose outside codeblocks)

*Last updated: May 7, 2026*
