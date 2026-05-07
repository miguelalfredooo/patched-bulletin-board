# Design By Bulletin™

A curated daily magazine about design, culture, and tools, delivered via Telegram.

## Status

✅ **10 Issues Published** (001-010, complete set)  
✅ **Live on Telegram** (@DesignByBulletinBot)  
✅ **Production Ready**

## What This Is

Design By Bulletin™ is a thematic editorial publication featuring:

- **10 Complete Issues** (001-010) with distinct themes
- **Two-Act Structure** per issue:
  - **ACT 1** — Visual preview with ASCII art sections
  - **ACT 2** — 11 curated editorial sections with sources
- **Editorial Mix** — Balanced composition across Art, Photography, Culture, Design Tools, AI Culture, Research
- **Telegram Distribution** — Bot serves issues on demand

## How It Works

### For Readers

Message **@DesignByBulletinBot** on Telegram:
```
/start    → Onboarding (3 preference questions)
/digest   → Full issue (ACT 1 + ACT 2)
/preview  → Visual preview only (ACT 1)
/help     → Command reference
/change   → Update preferences
```

### For Publishing

New issues are stored in `projects/bulletin-board/`:
- **Issue Files:** `ISSUE-[#]-[theme]-complete.md`
- **Archive Log:** `archive-log.md` (bot dependency)
- **Content:** 10 complete, publication-ready issues

## File Structure

```
patched-editorial/
├── .git                          [Version control]
├── .gitignore                    [Git config]
├── .openclaw/                    [Bot workspace configuration]
├── README.md                     [This file]
│
└── projects/
    ├── bulletin-board/           [Published magazine]
    │   ├── ISSUE-001-presence-complete.md
    │   ├── ISSUE-002-the-mark-complete.md
    │   ├── ... (10 complete issues)
    │   ├── ISSUE-010-worn-complete.md
    │   ├── archive-log.md        [Publication history]
    │   ├── ascii-art-library/    [Visual assets]
    │   └── README.md             [Magazine overview]
    └── the-magazine/             [Editorial agents & system]
        └── agents/               [Agent configurations]
```

## Published Issues

| # | Theme | Date |
|---|-------|------|
| 001 | Presence | May 5, 2026 |
| 002 | The Mark | May 6, 2026 |
| 003 | Handmade | May 6, 2026 |
| 004 | Traces | May 7, 2026 |
| 005 | Signal | May 8, 2026 |
| 006 | Momentum | May 9, 2026 |
| 007 | Interval | May 8, 2026 |
| 008 | Threshold | May 10, 2026 |
| 009 | Material | May 11, 2026 |
| 010 | Worn | May 12, 2026 |

## Quick Reference

- **Bot Config:** `.openclaw/workspace-bulletin-bot/AGENTS.md`
- **Issue Content:** `projects/bulletin-board/ISSUE-*-complete.md`
- **Publication History:** `projects/bulletin-board/archive-log.md`
- **For Updates:** See `projects/bulletin-board/README.md`

---

**Status:** Complete, documented, and production-ready.  
**Last Updated:** May 7, 2026
