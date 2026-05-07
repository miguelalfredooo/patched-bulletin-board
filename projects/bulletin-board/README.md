# Design By Bulletin™
## A Daily Magazine About Design, Culture, and Tools

**Status:** 📚 **9 Issues Published (001-010) & LIVE**  
**Distribution:** Telegram Bot (@DesignByBulletinBot)  
**Latest Update:** May 7, 2026

---

## Quick Start

### For Readers
Message **@DesignByBulletinBot** on Telegram:
```
/start    → Set up preferences (3 questions)
/digest   → Full issue (visual + prose)
/preview  → Visual preview only (Act 1)
/help     → Command reference
/change   → Update preferences
```

### For Contributors
**Read this first:** [PROJECT-GUIDE.md](PROJECT-GUIDE.md) — Complete reference for building new issues (architecture, process, examples, time estimates).

---

## What Is Design By Bulletin™?

A curated daily editorial about design, culture, and tools. Each issue:

- **ACT 1:** Visual preview with ASCII art sections (11 pieces, themed)
- **ACT 2:** Editorial content — 11 curated sections with prose and sources
- **Closing:** Thematic sentence capturing the issue's essence

**Delivered via Telegram** to readers who want specific, warm editorial writing about design culture.

---

## Published Issues (9 Complete)

| # | Theme | Date | Link |
|---|-------|------|------|
| 001 | Presence | May 5 | [ISSUE-001-presence-complete.md](ISSUE-001-presence-complete.md) |
| 002 | The Mark | May 6 | [ISSUE-002-the-mark-complete.md](ISSUE-002-the-mark-complete.md) |
| 003 | Handmade | May 6 | [ISSUE-003-handmade-complete.md](ISSUE-003-handmade-complete.md) |
| 004 | Traces | May 7 | [ISSUE-004-traces-complete.md](ISSUE-004-traces-complete.md) |
| 005 | Signal | May 8 | [ISSUE-005-signal-complete.md](ISSUE-005-signal-complete.md) |
| 006 | Momentum | May 9 | [ISSUE-006-momentum-complete.md](ISSUE-006-momentum-complete.md) |
| 007 | Interval | May 7 | (separate track) |
| 008 | Threshold | May 10 | [ISSUE-008-threshold-complete.md](ISSUE-008-threshold-complete.md) |
| 009 | Material | May 11 | [ISSUE-009-material-complete.md](ISSUE-009-material-complete.md) |
| 010 | Worn | May 12 | [ISSUE-010-worn-complete.md](ISSUE-010-worn-complete.md) |

**All issues ready for public distribution.**

---

## Essential Documentation

### 📖 To Create New Issues
- **[PROJECT-GUIDE.md](PROJECT-GUIDE.md)** — Complete reference (only doc you need)
- **[CONTENT-BRIEFS-003-010.md](CONTENT-BRIEFS-003-010.md)** — Editorial framework templates
- **[PROSE-STRUCTURE-REFERENCE.md](PROSE-STRUCTURE-REFERENCE.md)** — How to structure 11 sections

### 🎨 Design & Format
- **[ASCII-ART-STANDARDS.md](ASCII-ART-STANDARDS.md)** — Alignment, width, consistency rules
- **[ASCII-COMPOSITION-GUIDE.md](ASCII-COMPOSITION-GUIDE.md)** — Format types (A-E), sequence rules
- **[STYLE-GUIDE.md](STYLE-GUIDE.md)** — Tone, voice, prose guidelines

### 🏗️ Architecture & Infrastructure
- **[TELEGRAM-BOT-SETUP.md](TELEGRAM-BOT-SETUP.md)** — Bot config, commands, session isolation
- **[OPENCLAW-GATEWAY-RESTART-FIX.md](OPENCLAW-GATEWAY-RESTART-FIX.md)** — System architecture notes

### 📚 Reference
- **[archive-log.md](archive-log.md)** — Publication history with metadata
- **[ASCII-ARCHIVE.md](ASCII-ARCHIVE.md)** — Reference ASCII sections from published issues

---

## How to Build a New Issue (5 Steps)

1. **Research & Brief** (1-2h) — Identify cultural moment, create editorial outline
2. **Write & Curate** (1-2h) — Draft 11 sections, find 11 sources, create/reference ASCII
3. **Review** (30min) — Verify quality, theme clarity, source diversity
4. **Compile** (30min) — Combine: header + ACT 1 + ACT 2 + metadata into markdown
5. **Publish** (15min) — Commit to git, update bot config, merge to main

**Total time: 4-6 hours per issue**

See [PROJECT-GUIDE.md](PROJECT-GUIDE.md) for detailed walkthrough.

---

## Issue Structure (Standard Format)

Every issue contains:

### ACT 1 — Visual Preview
```
Design By Bulletin™ logo + header
[11 ASCII art sections, themed]
```

### ACT 2 — Full Edition
```
Art — [Subtitle]
[2-3 sentences about specific work/artist]
*[Source: Publication Name]*

[Repeat for 10 more sections]

---

**CLOSING SENTENCE:**
"[Thematic sentence capturing issue essence]"

---

*Published: [Date]*
*Theme: [Theme] — [Description]*
```

---

## Editorial Standards

### Voice & Tone
- Thoughtful, not clever
- Specific, not abstract (mention actual artists, works, publications)
- Warm, not cold
- Authoritative without condescension
- Brief and precise (2-3 sentences per section max)

### ASCII Art
- All sections in an issue: **same character width**
- Width = maximum width of any section
- Ensures clean alignment in Telegram monospace
- No two consecutive sections use same format weight (A, B, C, D, E variety)

### Source Diversity
- 11 different sources per issue
- No repeats within single issue (music can repeat)
- Mix: art publications, design platforms, cultural magazines, community spaces

### Theme Integration
- Theme is **felt**, never **stated**
- Emerges from convergence of curated examples
- Each section contributes to thematic whole

---

## File Organization

```
/projects/bulletin-board/
├── README.md (you are here)
│
├── PUBLISHED ISSUES (9 complete, ready to serve)
│   ├── ISSUE-001-presence-complete.md
│   ├── ISSUE-002-the-mark-complete.md
│   ├── ISSUE-003-handmade-complete.md
│   └── ... (all 9, in markdown format)
│
├── DOCUMENTATION (organized by purpose)
│   ├── PROJECT-GUIDE.md ⭐ (start here)
│   ├── CONTENT-BRIEFS-003-010.md
│   ├── PROSE-STRUCTURE-REFERENCE.md
│   ├── ASCII-ART-STANDARDS.md
│   ├── ASCII-COMPOSITION-GUIDE.md
│   ├── STYLE-GUIDE.md
│   ├── TELEGRAM-BOT-SETUP.md
│   ├── OPENCLAW-GATEWAY-RESTART-FIX.md
│   ├── archive-log.md
│   ├── ASCII-ARCHIVE.md
│   └── COVER-TEMPLATE-GUIDE.md
│
└── SESSIONS (working notes from past builds)
    └── sessions/
        ├── 2026-05-06.md
        └── 2026-05-06-issue-002.md
```

---

## Questions?

| Question | Answer |
|----------|--------|
| "How do I create a new issue?" | → [PROJECT-GUIDE.md](PROJECT-GUIDE.md) |
| "What are the ASCII rules?" | → [ASCII-ART-STANDARDS.md](ASCII-ART-STANDARDS.md) |
| "How do I write editorial prose?" | → [STYLE-GUIDE.md](STYLE-GUIDE.md) |
| "What's the 11-section framework?" | → [PROSE-STRUCTURE-REFERENCE.md](PROSE-STRUCTURE-REFERENCE.md) |
| "How is the bot configured?" | → [TELEGRAM-BOT-SETUP.md](TELEGRAM-BOT-SETUP.md) |
| "What's been published?" | → [archive-log.md](archive-log.md) |

---

## Project Status

✅ **9 Issues Published** (001-010, complete, approved)  
✅ **Editorial Pipeline Documented** (comprehensive framework)  
✅ **Bot Live & Serving** (@DesignByBulletinBot, all 9 issues accessible)  
✅ **All Standards Defined** (ASCII, prose, sourcing, voice)  
✅ **Ready for Scaling** (system is documented and repeatable)

**Status: PRODUCTION READY**

---

**Design By Bulletin™** is a complete, documented, published editorial project ready for ongoing development and distribution.

*Last updated: May 7, 2026*  
*All 9 issues live: May 5-12, 2026*
