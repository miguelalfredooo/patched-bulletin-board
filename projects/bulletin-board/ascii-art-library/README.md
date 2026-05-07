# ASCII Art Library — Component 2

Complete ASCII art asset system for Design By Bulletin™ with three layout variations.

## Overview

**440 total ASCII art files** across three layout options:
- **110 Source** — Original ASCII art (unmodified)
- **110 Expanded** — Full 14-line centered hero pieces
- **110 Compact-Left** — ASCII left, section name right
- **110 Compact-Right** — Section name left, ASCII right

Each variation serves different layout and presentation contexts.

## Directory Structure

```
ascii-art-library/
├── source/
│   └── [110 files] issue-[#]-[section]-neon.txt
├── expanded/
│   └── [110 files] issue-[#]-[section]-expanded-neon.txt
├── compact/
│   └── [220 files] issue-[#]-[section]-compact-left-neon.txt
│                   issue-[#]-[section]-compact-right-neon.txt
├── README.md (this file)
└── VARIATION-EXAMPLES.md
```

**Directory breakdown:**
- `source/` — Original ASCII art files, unmodified
- `expanded/` — 14-line centered hero versions for featured display
- `compact/` — 9-line variations with integrated section names (left or right aligned)

## File Naming Convention

```
issue-[NUMBER]-[SECTION]-[VARIATION]-neon.txt
```

**Examples:**
- `source/issue-006-art-neon.txt` — Issue 6, Art section, original
- `expanded/issue-006-painting-expanded-neon.txt` — Issue 6, Painting, hero centered
- `compact/issue-010-visual-brand-compact-right-neon.txt` — Issue 10, Visual & Brand, compact right-aligned

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

### Source (110 files)
- **Location:** `source/`
- **Line count:** Variable (5-13 lines)
- **Format:** Original, unmodified
- **Use cases:**
  - Reference originals
  - Inline with text
  - Embedded layouts
  - Minimal width displays

### Expanded (110 files)
- **Location:** `expanded/`
- **Line count:** Exactly 14 lines
- **Format:** Center-aligned, no text labels
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
| Source | `source/` | `issue-#-section-neon.txt` | Reference, embedded layouts |
| Expanded | `expanded/` | `issue-#-section-expanded-neon.txt` | Feature displays, galleries, print |
| Compact-Left | `compact/` | `issue-#-section-compact-left-neon.txt` | Left-flow layouts, alternating rhythms |
| Compact-Right | `compact/` | `issue-#-section-compact-right-neon.txt` | Right-balance layouts, mirrors |

## Gallery Query Examples

**Get all Art sections:**
```bash
ls source/issue-*-art-neon.txt
```

**Get all hero versions:**
```bash
ls expanded/issue-*-expanded-neon.txt
```

**Get all Issue 006 sections (all variations):**
```bash
ls *-art-neon.txt | grep "issue-006"
```

**Get all Culture sections across all issues:**
```bash
ls *culture*.txt
```

## Asset Count Summary

| Category | Count |
|----------|-------|
| Issues | 10 |
| Sections per issue | 11 |
| Source files | 110 |
| Expanded files | 110 |
| Compact-Left files | 110 |
| Compact-Right files | 110 |
| **Total files** | **440** |

---

**Location:** `/projects/bulletin-board/ascii-art-library/`  
**Part of:** Design By Bulletin™ — Component 2 (Section ASCII Art)  
**Status:** Complete and ready for use  
**Last updated:** 2026-05-07
