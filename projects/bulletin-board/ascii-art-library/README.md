# ASCII Art Library

This directory contains the complete ASCII art collection for Design By Bulletin™. These pieces are used in ACT 1 (Visual Preview) of each issue.

## Structure

**Issue 006 — Momentum** (Complete)
- 11 ASCII art pieces (one per editorial section)
- 5 color variations each:
  - `neon-ascii-color.txt` — Neon colors with ANSI codes
  - `gold-silver-ascii-color.txt` — Gold & silver palette
  - `green-purple-ascii-color.txt` — Green & purple palette
  - `orange-navy-ascii-color.txt` — Orange & navy palette
  - `pink-cyan-ascii-color.txt` — Pink & cyan palette

## Sections (per issue)

1. **Art** — Visual foundation
2. **Painting** — Color and form
3. **Illustration** — Line and composition
4. **Sculpture** — Space and material
5. **Culture** — Social context
6. **Photography** — Light and frame
7. **Art History** — Lineage and tradition
8. **Opinions** — Critical perspective
9. **Design & AI Tools** — Digital practice
10. **Product & Process** — Making and craft
11. **Visual & Brand** — Identity and mark

## Usage

These files are reference assets for:
- **Populating ACT 1 sections** in issue markdown files
- **Slideshow gallery** (planned feature to browse ASCII art exclusively)
- **Color variation experiments** for Telegram UI rendering

## Rendering Notes

- Files with `ascii-color.txt` contain ANSI escape sequences `[38;2;R;G;Bm` for RGB color
- Pure text versions (no color) can be extracted by stripping ANSI codes
- Telegram rendering uses monospace fonts—test color versions for terminal display compatibility

## File Naming Convention

```
momentum-006-[section]-[color]-ascii-color.txt
```

- `momentum-006` — Issue 006, Momentum theme
- `[section]` — Section number (1-11) or name
- `[color]` — Color palette name or "neon" for RGB colors
- `ascii-color.txt` — Contains ANSI color escape codes

---

**Status:** Complete for Issue 006. Other issues planned.  
**Last Updated:** 2026-05-07
