# ASCII Art — Original Extractions

Verbatim ASCII art codeblocks extracted directly from the Design By Bulletin™
issue markdown files, exactly as they appear in each issue's ACT 1 section.

---

## What This Directory Contains

121 plain-text files (11 issues × 11 sections) preserving the exact content —
including blank padding lines — from the source markdown codeblocks.

These differ from the `source/` directory, which holds stripped/trimmed
versions. The `original/` files are faithful to the published issue layout.

---

## File Naming Convention

```
issue-NNN-section-slug-original.txt
```

- `NNN` — zero-padded issue number (001–011)
- `section-slug` — hyphenated section name (see table below)

### Section Slugs

| # | Section Name      | Slug              |
|---|-------------------|-------------------|
| 1 | Art               | art               |
| 2 | Painting          | painting          |
| 3 | Illustration      | illustration      |
| 4 | Sculpture         | sculpture         |
| 5 | Culture           | culture           |
| 6 | Photography       | photography       |
| 7 | Art History       | art-history       |
| 8 | Opinions          | opinions          |
| 9 | Design & AI Tools | design-tools      |
|10 | Product & Process | product-process   |
|11 | Visual & Brand    | visual-brand      |

### Examples

- `issue-001-art-original.txt` — Issue 001 (Presence), Art section
- `issue-006-photography-original.txt` — Issue 006 (Momentum), Photography section
- `issue-011-design-tools-original.txt` — Issue 011 (Invisible), Design & AI Tools section

---

## Issue Coverage

| Issue | Theme      | Files | Source Format       |
|-------|------------|-------|---------------------|
| 001   | Presence   | 11    | Section headers     |
| 002   | The Mark   | 11    | Section headers     |
| 003   | Handmade   | 11    | Section headers     |
| 004   | Traces     | 11    | Section headers     |
| 005   | Signal     | 11    | Section headers     |
| 006   | Momentum   | 11    | Section headers     |
| 007   | Interval   | 11    | Section headers     |
| 008   | Threshold  | 11    | Section headers     |
| 009   | Material   | 11    | Section headers     |
| 010   | Worn       | 11    | Section headers     |
| 011   | Invisible  | 11    | Combined codeblock  |

**Total: 121 files**

---

## Source Markdown Format Notes

### Format A — Section Headers (Issues 001-010)

Each section appears under a `### Section N — Name` heading followed by a
fenced codeblock. Content is extracted verbatim, including blank padding lines
that maintain consistent 15-line height in terminal display.

### Format B — Combined Codeblock (Issue 011)

Issue 011 uses a single `CODEBLOCK 2: 11 EDITORIAL SECTIONS` block with all
sections separated by `━━━━━━━━━━━━━━━━━━━━━━━━━` dividers. Section labels
appear inline as ALL-CAPS text at the right edge of the art. Each segment is
extracted by order (segment 1 = Art, segment 2 = Painting, etc.).

---

## How Files Were Generated

The extraction script is at:

```
ascii-art-library/extract_originals.py
```

Run it from the `ascii-art-library/` directory to regenerate:

```bash
cd projects/bulletin-board/ascii-art-library
python3 extract_originals.py
```

The script handles both source formats automatically and will regenerate all
121 files. Existing files are overwritten on each run.

---

## Relationship to Other Directories

| Directory  | Content                              | Use case                        |
|------------|--------------------------------------|---------------------------------|
| `original/`| Verbatim codeblock content           | Reference, archive, diff checks |
| `source/`  | Stripped/trimmed ASCII art           | Bot delivery, tight layout      |
| `labeled/` | Art with section name label          | ACT 1 v1 grid layout            |
| `expanded/`| 5-line centered diamond variant      | Hero section display            |
| `compact/` | Left/right-aligned compact variants  | Side-by-side layout             |

---

**Last Updated:** 2026-05-07
**Total Files:** 121 (11 issues × 11 sections)
**Format:** UTF-8 plain text, monospace-optimized
