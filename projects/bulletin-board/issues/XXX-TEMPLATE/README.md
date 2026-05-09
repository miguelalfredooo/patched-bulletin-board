# Issue Template — Flat File Structure

**Purpose:** Reference template showing the new flat file structure for Design By Bulletin™ issues.

**Validated:** ✅ This template passes validation

---

## Structure

```
XXX-TEMPLATE/
├── 00-COVER-ART.txt        ← Cover art (logo + masthead + theme visual)
├── 01-SECTION-ART.txt      ← Section 1 art (ASCII, no backticks)
├── 01-SECTION-COPY.md      ← Section 1 copy (markdown, no escaping)
├── 02-SECTION-ART.txt      ← Section 2 art (if applicable)
├── 02-SECTION-COPY.md      ← Section 2 copy (if applicable)
... (repeat for all sections)
└── NN-METADATA-FOOTER.txt  ← Closing quote + footer (numbered after last section)
```

---

## File Naming Rules

**All files in issues/XXX-TEMPLATE/ are the template. When making a new Issue, rename files accordingly.**

### Naming Convention
- **Cover:** Always `00-COVER-ART.txt` (never changes)
- **Sections:** `NN-SECTION-ART.txt` and `NN-SECTION-COPY.md` (where NN = 01, 02, 03, ..., 11)
  - NN is the section ID (01-11 for standard issues)
  - Pairs go together: `03-SECTION-ART.txt` + `03-SECTION-COPY.md`
- **Footer:** `NN-METADATA-FOOTER.txt` (where NN = number of sections + 1)
  - Example: 11 sections → footer is `12-METADATA-FOOTER.txt`
  - Example: 5 sections → footer is `06-METADATA-FOOTER.txt`

### When Creating Issue 019

Start with template files, rename by section ID:

```
issues/XXX-TEMPLATE/00-COVER-ART.txt
  → Copy to issues/019/00-COVER-ART.txt (no rename)

issues/XXX-TEMPLATE/01-SECTION-ART.txt
  → Copy to issues/019/01-SECTION-ART.txt (section 1)

issues/XXX-TEMPLATE/01-SECTION-COPY.md
  → Copy to issues/019/01-SECTION-COPY.md (section 1)

issues/XXX-TEMPLATE/02-METADATA-FOOTER.txt
  → Copy to issues/019/12-METADATA-FOOTER.txt (for 11 sections)
```

**Key:** The NN in the filename must match the section number (01-11).

---

## Content Rules

### Art Files (.txt)

- Raw ASCII art
- NO backticks (``` ... ```)
- NO escaping
- NO markdown formatting
- Monospace characters only

Example:
```
◈────◈
│    │
│ ◆▲ │
│    │
◈────◈
```

### Copy Files (.md)

- Raw markdown prose
- NO backticks (``` ... ```)
- NO escaping (no backslashes)
- Plain URLs (https://...)
- Section title as bold: `**Section Name**`
- 2-4 sentences per section
- 1-2 source links

Example:
```
**Visual & Brand**

Visible authorship claims, brands that announce presence subtly, marks that prove someone was here thinking. The signature as substance.

https://www.underconsideration.com/brandnew
```

### Cover Art (.txt)

- Logo (DBB text art)
- Masthead (divider lines, issue number, theme, date)
- Theme-specific visual (custom ASCII)
- Theme name in CAPS at bottom
- NO backticks

### Metadata Footer (.txt)

- Logo (DBB text art)
- Masthead (same as cover)
- Closing quote (1 powerful sentence capturing the issue's essence)
- NO backticks

---

## Validation

Validate your issue after editing:
```bash
python validator.py issues/019
```

Expected result:
```
✅ VALID
   Issue path: issues/019
   Sections: 11
   Files: 1 cover + 22 section files + 1 footer = 24 total
```

If validation fails, check:
- All files are named correctly (NN matches section ID)
- No backticks in art/copy files (footer only)
- No escaping in copy files
- All 24 files present

---

## How to Create a New Issue

**Use scaffold.py (recommended):**
```bash
python scaffold.py issues/019 --theme "Geometry"
```

This automatically:
- Creates the directory
- Generates all 24 files with correct naming
- Pre-fills cover and footer with theme/date
- Ready to edit

**Manual creation (if needed):**
1. Create `issues/019/` directory
2. Copy template files from XXX-TEMPLATE and rename:
   - `00-COVER-ART.txt` → `00-COVER-ART.txt` (no change)
   - `01-SECTION-ART.txt` → `01-SECTION-ART.txt` (section 1)
   - `01-SECTION-COPY.md` → `01-SECTION-COPY.md` (section 1)
   - ... (repeat for all sections 01-11)
   - `02-METADATA-FOOTER.txt` → `12-METADATA-FOOTER.txt` (for 11 sections)
3. Edit each file with your content
4. Run: `python validator.py issues/019`
5. Result: ✅ VALID

---

## Agent Output Standards

Agents (Managing Editor) fill template files with:
- **Raw content** (no formatting tricks)
- **No backticks** (bot adds them to footer only)
- **No escaping** (bot does that for prose)
- **Natural writing style**

The Bulletin Bot applies all formatting when sending to Telegram.

### Template files are the standard
Every new Issue starts with XXX-TEMPLATE files renamed by section ID. This ensures consistency across all issues.

---

## See Also

- `scaffold.py` — Automated issue generation tool
- `SCAFFOLD.md` — How to use scaffold.py
- `RENDERING-PIPELINE.md` — Complete pipeline spec
- `validator.py` — Validation tool
- `archive/issues-archive/` — Old issues (for reference)
