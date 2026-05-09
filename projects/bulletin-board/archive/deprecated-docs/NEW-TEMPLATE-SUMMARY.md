# New Template Summary — Flat File Structure

**Date:** 2026-05-08  
**Status:** Ready for Issue 017  
**Terminology:** ART + COPY (not ACT 1 + ACT 2)

---

## What Changed

### Old Structure (Archived)
```
issues/016/
├── manifest.json
├── act-1/
│   ├── logo.md
│   └── sections/
│       └── 01-art.md (11 files)
└── act-2/
    ├── 01-prose.md (11 files)
    └── closing.md
```
- Manifest-driven
- Nested folders
- 13 files total (manifest + logo + 11 sections + closing)

### New Structure (Active)
```
issues/017/
├── 00-COVER-ART.txt
├── 01-SECTION-ART.txt
├── 01-SECTION-COPY.md
├── 02-SECTION-ART.txt
├── 02-SECTION-COPY.md
... (repeat for all sections)
└── 12-METADATA-FOOTER.txt
```
- Flat file structure
- No manifest.json
- No nested folders
- 24 files total (1 cover + 11 art + 11 copy + 1 footer)
- Sequential numbering

---

## Benefits

✅ **Simpler structure** — No manifest, no subdirectories
✅ **Paired files** — Art and copy live together (01-ART.txt + 01-COPY.md)
✅ **Clear numbering** — Sequential, easy to find any section
✅ **Easier for agents** — Just create numbered files, no JSON to maintain
✅ **Better validation** — Validator checks all pairs exist
✅ **Flexible section count** — Can have 5, 11, 20 sections (not locked to 11)

---

## Terminology (Updated)

| Old | New |
|-----|-----|
| ACT 1 | ART |
| ACT 2 | COPY |
| Prose | Copy |
| Agent outputs: "formatted content" | Agent outputs: "raw content" |

---

## File Naming Rules

**Cover:**
```
00-COVER-ART.txt
```

**Sections (for N sections, numbered 01 to N):**
```
NN-SECTION-ART.txt   (art file)
NN-SECTION-COPY.md   (copy file)
```

**Footer (numbered N+1):**
```
(N+1)-METADATA-FOOTER.txt
```

**Example (5 sections):**
```
00-COVER-ART.txt
01-SECTION-ART.txt
01-SECTION-COPY.md
02-SECTION-ART.txt
02-SECTION-COPY.md
03-SECTION-ART.txt
03-SECTION-COPY.md
04-SECTION-ART.txt
04-SECTION-COPY.md
05-SECTION-ART.txt
05-SECTION-COPY.md
06-METADATA-FOOTER.txt
```

Total: 12 files (1 cover + 5 art + 5 copy + 1 footer)

---

## Content Rules (No Changes)

### Art Files
- Raw ASCII art
- ❌ NO backticks
- ❌ NO escaping
- ✅ Exactly as should render

### Copy Files
- Raw markdown
- ❌ NO backticks
- ❌ NO escaping
- ✅ Write naturally

---

## Validation

**Tool:** `validator.py` (updated for flat structure)

**Command:**
```bash
python validator.py issues/017
```

**Checks:**
- ✅ Cover file exists
- ✅ All sections have both ART and COPY
- ✅ No backticks in art files
- ✅ No escaping in copy files
- ✅ Metadata footer exists and is numbered correctly

**Auto-fix:**
```bash
python validator.py issues/017 --fix
```

Removes backticks and escaping automatically.

---

## Pipeline (Updated Terminology)

**Stage 1: Agent Output (Raw)**
- Agents write ART files (raw ASCII)
- Agents write COPY files (raw markdown)
- No formatting

**Stage 2: Validation (Structure)**
- Editorial Director runs: `python validator.py issues/017`
- Checks all files exist, no backticks, no escaping
- Only proceeds if ✅ VALID

**Stage 3: Telegram Rendering (Format)**
- Bot reads raw art + copy files
- Wraps ART in code blocks (backticks added here)
- Escapes COPY for MarkdownV2 (escaping done here)
- Sends with `parse_mode="MarkdownV2"`

---

## Template

**Location:** `issues/XXX-TEMPLATE/`

**Validated:** ✅ VALID (1 section example)

**Files:**
- `00-COVER-ART.txt` — Cover example
- `01-SECTION-ART.txt` — Section art example
- `01-SECTION-COPY.md` — Section copy example
- `02-METADATA-FOOTER.txt` — Footer example
- `README.md` — Full template documentation

**Use for reference when creating new issues.**

---

## Next Steps

1. ✅ Define new flat file structure (done)
2. ✅ Update RENDERING-PIPELINE.md (done)
3. ✅ Update validator.py (done)
4. ✅ Update terminology (ART + COPY) (done)
5. ✅ Create template with examples (done)
6. 📋 Test with Issue 017 (next)
7. 📋 Update agent AGENTS.md files (next)
8. 📋 Test full workflow (next)

---

## Summary

**Old:** Complex manifest + nested folders + locked 11 sections  
**New:** Flat files + paired art/copy + flexible section count

**Old terminology:** ACT 1/ACT 2, prose  
**New terminology:** ART/COPY

**Simpler, cleaner, easier to work with.**
