# ASCII Art Library — Component 2

Complete ASCII art asset system for Design By Bulletin™ with three layout variations.

## Overview

**330 total ASCII art files** across three layout options:
- **110 Expanded** — Full 14-line standalone pieces
- **110 Compact-Left** — ASCII left, section name right
- **110 Compact-Right** — Section name left, ASCII right

Each variation serves different layout and presentation contexts.

## Directory Structure

Organized by issue number, with all variations co-located:

```
ascii-art-library/
├── 001/
│   ├── source/     [11 files] original ASCII art
│   ├── expanded/   [11 files] 14-line centered hero versions
│   └── compact/    [22 files] 9-line left/right variations
├── 002/
│   └── [same structure]
├── ...
├── 010/
│   └── [same structure]
├── README.md (this file)
└── VARIATION-EXAMPLES.md
```

**Per-issue breakdown (each issue contains 44 files):**
- `NNN/source/` — 11 original ASCII art files
- `NNN/expanded/` — 11 centered hero versions (14 lines)
- `NNN/compact/` — 22 left/right layout variations (9 lines each)

## File Naming Convention

```
issue-[NUMBER]-[SECTION]-[VARIATION]-neon.txt
```

**Examples:**
- `issue-006-art-expanded-neon.txt` — Issue 6, Art section, expanded
- `issue-007-culture-compact-left-neon.txt` — Issue 7, Culture, compact left-aligned
- `issue-010-visual-brand-compact-right-neon.txt` — Issue 10, Visual & Brand, compact right-aligned

## Sections (11 per issue)

1. art
2. painting
3. illustration
4. sculpture
5. culture
6. photography
7. art-history
8. opinions
9. design-tools
10. product-process
11. visual-brand

## Issues (10 total)

001, 002, 003, 004, 005, 006, 007, 008, 009, 010

## Variation Details

### Expanded (110 files)
- **Location:** `expanded/`
- **Line count:** Exactly 14 lines
- **Format:** Standalone, centered, no text labels
- **Use cases:**
  - Hero/feature display
  - Full-page visual preview
  - Gallery collections
  - Print layouts
  - Telegram code block delivery

### Compact-Left (110 files)
- **Location:** `compact/`
- **Filename suffix:** `-compact-left-`
- **Format:** ASCII on left, section name (**Bold**) on right
- **Line count:** ~9 lines
- **Use cases:**
  - Left-to-right reading flow
  - Alternating visual rhythm
  - Mobile layouts with limited width
  - Social media cards

### Compact-Right (110 files)
- **Location:** `compact/`
- **Filename suffix:** `-compact-right-`
- **Format:** Section name (**Bold**) on left, ASCII on right
- **Line count:** ~9 lines
- **Use cases:**
  - Right-to-left balance
  - Alternating layout mirror
  - Column/sidebar designs
  - Balanced asymmetric compositions

## Quick Reference

| Variation | Location | Filename Pattern | Best For |
|-----------|----------|------------------|----------|
| Expanded | `expanded/` | `issue-#-section-expanded-neon.txt` | Feature displays, galleries, print |
| Compact-Left | `compact/` | `issue-#-section-compact-left-neon.txt` | Left-flow layouts, alternating rhythms |
| Compact-Right | `compact/` | `issue-#-section-compact-right-neon.txt` | Right-balance layouts, mirrors |

## Asset Count Summary

| Category | Count |
|----------|-------|
| Issues | 10 |
| Sections per issue | 11 |
| Variations per section | 3 |
| **Total variation files** | **330** |
| Original source files | 110 |
| **Grand total in library** | **440** |

---

**Location:** `/projects/bulletin-board/ascii-art-library/`  
**Part of:** Design By Bulletin™ — Component 2 (Section ASCII Art)  
**Status:** Complete and ready for use  
**Last updated:** 2026-05-07
