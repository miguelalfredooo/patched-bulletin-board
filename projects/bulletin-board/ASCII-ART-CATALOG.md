# ASCII Art Catalog

## Overview

Complete ASCII art library for Design By Bulletin™ magazine. Includes pure text versions and ANSI color-coded variations for different display contexts.

## Issue 006 — Momentum (✓ Complete)

All 11 sections with 5 color variations each (55 total variations).

### Sections

| # | Section | Pure Text | Neon | Gold-Silver | Green-Purple | Orange-Navy | Pink-Cyan |
|---|---------|-----------|------|-------------|--------------|-------------|-----------|
| 1 | Art | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 2 | Painting | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 3 | Illustration | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 4 | Sculpture | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 5 | Culture | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 6 | Photography | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 7 | Art History | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 8 | Opinions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 9 | Design & AI Tools | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 10 | Product & Process | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 11 | Visual & Brand | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## Original Session Art (✓ Recovered)

Original pre-edit art extracted from generation sessions, stored in `ascii-art-library/original/`.

| Issue | Theme | Sections | Source |
|-------|-------|----------|--------|
| 002 | The Mark | 11 | `sessions/issue-002-the-mark.md` |
| 005 | Signal | 11 | `sessions/issue-005-signal.txt` |
| 006 | Momentum | 11 | `sessions/issue-006-momentum.txt` |
| 007 | Palimpsest (now Interval) | 11 | `sessions/issue-007-palimpsest.txt` |
| 008 | Emergence (now Threshold) | 11 | `sessions/issue-008-emergence.txt` |
| 009 | Fold (now Material) | 11 | `sessions/issue-009-fold.txt` |
| 010 | Aperture (now Worn) | 11 | `sessions/issue-010-aperture.txt` |
| 011 | Invisible | 11 | `ISSUE-011-invisible-complete.md` |

Issues 001, 003, 004: no original session art was saved at time of generation.

## Issues with Placeholder Art

Current standardized section art (`source/`) is a 9×5 canvas placeholder for these issues:

- **001 — Presence**: Placeholder ◇ diamond
- **003 — Handmade**: Placeholder ◇ diamond
- **004 — Traces**: Placeholder ◇ diamond

## Usage

### For Issue Files

Each issue includes ASCII art in its **ACT 1 — VISUAL PREVIEW** section, organized by editorial section (1-11).

Pure text versions (no color codes) are used in markdown files for clean rendering.

**Original art:** `ascii-art-library/original/issue-[NNN]-[section]-original.txt`
**Standardized art:** `ascii-art-library/source/issue-[NNN]-[section]-neon.txt`

### For Gallery Feature

The slideshow gallery feature uses ASCII art from this library to display visual content independently from editorial text.

Directory structure:
```
projects/bulletin-board/ascii-art-library/
├── README.md                                  (Library documentation)
├── momentum-006-1-art-neon.txt               (Pure text - no ANSI codes)
├── momentum-006-1-art-neon-ascii-color.txt   (ANSI color version)
├── [... 54 more files ...]
└── [... all 11 sections × 5 colors for Issue 006 ...]
```

## Color Palettes

### Neon (RGB values)
- Primary: `[38;2;255;20;157m` (hot pink)
- Secondary: `[38;2;0;200;255m` (cyan)

### Gold-Silver
- Primary: Gold tones
- Secondary: Silver accents

### Green-Purple
- Primary: Vibrant green
- Secondary: Deep purple

### Orange-Navy
- Primary: Bright orange
- Secondary: Navy blue

### Pink-Cyan
- Primary: Magenta/pink
- Secondary: Cyan blue

## File Format

**Naming Convention:**
```
momentum-006-[section]-[color]-ascii-color.txt
```

- `momentum-006` — Issue 006, Momentum theme
- `[section]` — Section number (1-11) or hyphenated name
- `[color]` — `neon`, `gold-silver`, `green-purple`, `orange-navy`, `pink-cyan`
- `-ascii-color.txt` — Contains ANSI escape sequences

**Pure text versions** (for markdown): Remove `-ascii-color` suffix from filename

Example:
- Color version: `momentum-006-1-art-neon-ascii-color.txt`
- Pure text: `momentum-006-1-art-neon.txt`

## Technical Notes

### ANSI Color Codes

Files with `-ascii-color.txt` suffix contain RGB color escape sequences in format:
```
[38;2;R;G;Bm TEXT [0m
```

Strip these to create pure text versions:
```bash
sed 's/\[38;2;[0-9]*;[0-9]*;[0-9]*m//g; s/\[0m//g' infile.txt > outfile.txt
```

### Monospace Rendering

ASCII art is designed for monospace fonts. Test in:
- Telegram (monospace code blocks)
- Terminal emulators
- IDE monospace displays

Verify alignment and rendering before deploying to bot.

---

**Last Updated:** 2026-05-07  
**Total Assets:** 66 files (11 sections + 5 color variations + README)  
**Status:** Issue 006 complete; 8 issues pending ASCII generation
