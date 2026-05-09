# File Structure Reference — Design By Bulletin™

**Quick reference for Issue file naming and organization.**

---

## The Template (issues/XXX-TEMPLATE/)

All files in `issues/XXX-TEMPLATE/` are the template. When creating a new Issue, rename files accordingly.

---

## Standard Issue (11 sections)

```
issues/NNN/
├── manifest.json                    ← Auto-created by scaffold.py
├── 00-COVER-ART.txt                ← Cover (logo + masthead + theme visual)
├── 01-SECTION-ART.txt              ← Section 1 art
├── 01-SECTION-COPY.md              ← Section 1 copy
├── 02-SECTION-ART.txt              ← Section 2 art
├── 02-SECTION-COPY.md              ← Section 2 copy
├── 03-SECTION-ART.txt
├── 03-SECTION-COPY.md
├── 04-SECTION-ART.txt
├── 04-SECTION-COPY.md
├── 05-SECTION-ART.txt
├── 05-SECTION-COPY.md
├── 06-SECTION-ART.txt
├── 06-SECTION-COPY.md
├── 07-SECTION-ART.txt
├── 07-SECTION-COPY.md
├── 08-SECTION-ART.txt
├── 08-SECTION-COPY.md
├── 09-SECTION-ART.txt
├── 09-SECTION-COPY.md
├── 10-SECTION-ART.txt
├── 10-SECTION-COPY.md
├── 11-SECTION-ART.txt
├── 11-SECTION-COPY.md
└── 12-METADATA-FOOTER.txt          ← Footer (logo + masthead + closing quote)
```

**Total: 24 files**
- 1 × cover (00)
- 11 × art files (01-11)
- 11 × copy files (01-11)
- 1 × footer (12)

---

## Naming Rules

### Cover & Footer
- **Cover:** `00-COVER-ART.txt` (always 00, never changes)
- **Footer:** `12-METADATA-FOOTER.txt` (always NN = sections + 1)
  - For 11 sections: `12-METADATA-FOOTER.txt`
  - For 5 sections: `06-METADATA-FOOTER.txt`

### Sections
- **Art:** `NN-SECTION-ART.txt` (where NN = 01, 02, 03, ..., 11)
- **Copy:** `NN-SECTION-COPY.md` (where NN matches the art file)

**Key rule:** NN must match the section ID. Section 3's files are always `03-SECTION-ART.txt` and `03-SECTION-COPY.md`.

---

## The 11 Fixed Sections

When creating Issues with 11 sections, they are **always in this order:**

| NN | Section Name | File Pair |
|----|---|---|
| 01 | Art | `01-SECTION-ART.txt` + `01-SECTION-COPY.md` |
| 02 | Painting | `02-SECTION-ART.txt` + `02-SECTION-COPY.md` |
| 03 | Illustration | `03-SECTION-ART.txt` + `03-SECTION-COPY.md` |
| 04 | Sculpture | `04-SECTION-ART.txt` + `04-SECTION-COPY.md` |
| 05 | Culture | `05-SECTION-ART.txt` + `05-SECTION-COPY.md` |
| 06 | Photography | `06-SECTION-ART.txt` + `06-SECTION-COPY.md` |
| 07 | Art History | `07-SECTION-ART.txt` + `07-SECTION-COPY.md` |
| 08 | Opinions | `08-SECTION-ART.txt` + `08-SECTION-COPY.md` |
| 09 | Design & AI Tools | `09-SECTION-ART.txt` + `09-SECTION-COPY.md` |
| 10 | Product & Process | `10-SECTION-ART.txt` + `10-SECTION-COPY.md` |
| 11 | Visual & Brand | `11-SECTION-ART.txt` + `11-SECTION-COPY.md` |

---

## Creating a New Issue

### Option 1: Use scaffold.py (Recommended)

```bash
python scaffold.py issues/019 --theme "Geometry"
```

**Automatically:**
- Creates issue directory
- Generates all 24 files with correct names
- Pre-fills cover and footer
- Ready to edit

### Option 2: Manual (Copy Template)

1. Create directory: `mkdir -p issues/019`
2. Copy template files and rename:
   ```bash
   cp issues/XXX-TEMPLATE/00-COVER-ART.txt issues/019/00-COVER-ART.txt
   cp issues/XXX-TEMPLATE/01-SECTION-ART.txt issues/019/01-SECTION-ART.txt
   cp issues/XXX-TEMPLATE/01-SECTION-COPY.md issues/019/01-SECTION-COPY.md
   # ... repeat for all sections 01-11
   cp issues/XXX-TEMPLATE/02-METADATA-FOOTER.txt issues/019/12-METADATA-FOOTER.txt
   ```
3. Edit each file
4. Validate: `python validator.py issues/019`

---

## File Contents

### Art Files (NN-SECTION-ART.txt)
- Raw ASCII art
- Monospace characters only
- 4-10 lines typical
- **NO backticks**
- **NO markdown**
- **NO escaping**

### Copy Files (NN-SECTION-COPY.md)
- Raw markdown prose
- Bold section name: `**Section Name**`
- 2-4 sentences (60-120 words)
- Plain URLs: `https://...`
- **NO backticks**
- **NO escaping**
- **NO markdown link syntax** (plain URLs only)

### Cover (00-COVER-ART.txt)
- DBB logo (6 lines, fixed)
- Masthead dividers (24 chars, fixed)
- Issue number: `Issue NNN`
- Theme + date: `THEME • DATE`
- Theme visual: Custom ASCII art
- Theme name: In CAPS
- **NO backticks**

### Footer (12-METADATA-FOOTER.txt)
- Opening backticks: ` ``` `
- DBB logo (6 lines, fixed)
- Masthead dividers (24 chars, fixed)
- Issue + theme + date
- Closing quote: One sentence in quotes
- Closing backticks: ` ``` `
- **HAS backticks** (only file that does)

---

## Quick Validation

After editing, run:
```bash
python validator.py issues/019
```

Expected output:
```
✅ VALID
   Issue path: issues/019
   Sections: 11
   Files: 1 cover + 22 section files + 1 footer = 24 total
```

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Backticks in art/copy files | Remove them (bot adds them to footer only) |
| Escaping in copy files | Remove backslashes (bot does escaping) |
| Wrong file names (e.g., `03-ART.txt` instead of `03-SECTION-ART.txt`) | Rename to match template |
| Missing section pairs | Create both ART and COPY files for each section |
| Wrong footer number (e.g., `11-METADATA-FOOTER.txt` for 11 sections) | Should be `12-METADATA-FOOTER.txt` (sections + 1) |

---

## Summary

- ✅ Template is in `issues/XXX-TEMPLATE/`
- ✅ Copy and rename for new Issues
- ✅ Use scaffold.py for fast creation
- ✅ File names must match section IDs (NN)
- ✅ 24 files total per Issue
- ✅ Validate with `python validator.py`

---

## Related

- `scaffold.py` — Generate Issues automatically
- `SCAFFOLD.md` — How to use scaffold.py
- `validator.py` — Validate Issue structure
- `issues/XXX-TEMPLATE/README.md` — Template details
