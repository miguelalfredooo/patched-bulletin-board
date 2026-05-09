# Scaffold Tool — Issue Generation

**Purpose:** Instantly generate Issue folder structure with all numbered files pre-filled and ready to edit.

**Status:** ✅ Ready to use

**Time saved:** ~5 minutes per Issue (manual file creation eliminated)

---

## Usage

### Basic (11 sections, default theme)
```bash
python scaffold.py issues/017
```

Generates Issue 017 with 11 sections, generic theme placeholder.

### With Theme
```bash
python scaffold.py issues/017 --theme "Discovery"
```

Generates Issue 017 with "Discovery" in masthead and footer.

### With Custom Section Count
```bash
python scaffold.py issues/018 --sections 5 --theme "Fragments"
```

Generates Issue 018 with 5 sections instead of 11.

### With Custom Date
```bash
python scaffold.py issues/019 --sections 11 --theme "Echoes" --date "May 10, 2026"
```

Generates Issue 019 with custom publication date.

---

## What Gets Generated

For an 11-section Issue, scaffold creates:

```
issues/017/
├── 00-COVER-ART.txt              ← Logo + masthead (pre-filled)
├── 01-SECTION-ART.txt            ← Art template
├── 01-SECTION-COPY.md            ← Copy template
├── 02-SECTION-ART.txt
├── 02-SECTION-COPY.md
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
└── 12-METADATA-FOOTER.txt        ← Closing quote (pre-filled)

Total: 24 files (1 cover + 11 art + 11 copy + 1 footer)
```

---

## File Contents

### Cover Art (00-COVER-ART.txt)

Pre-filled with:
- DBB logo (text art)
- Masthead with issue number, theme, and date
- Placeholder for theme-specific visual
- Placeholder for theme name in caps

**Editor fills:** Theme visual (ASCII art), theme name

### Section Art (NN-SECTION-ART.txt)

Pre-filled with:
- Placeholder comment asking for ASCII art

**Editor fills:** ASCII visual for the section

### Section Copy (NN-SECTION-COPY.md)

Pre-filled with:
- Section number and name placeholder
- Instructions (2-4 sentences, 60-120 words)
- Placeholder for source link

**Editor fills:** Section name, prose copy, 1-2 source URLs

### Metadata Footer (NN-METADATA-FOOTER.txt)

Pre-filled with:
- DBB logo (text art)
- Masthead with issue number, theme, and date
- Placeholder for closing quote

**Editor fills:** Closing quote (1 powerful sentence)

---

## Workflow

1. **Scaffold the Issue**
   ```bash
   python scaffold.py issues/017 --theme "Discovery"
   ```
   Result: 24 numbered files, ready to edit

2. **Edit the files**
   ```bash
   # Managing Editor opens files and fills in content
   nano issues/017/00-COVER-ART.txt        # Add theme visual
   nano issues/017/01-SECTION-ART.txt      # Add section 1 art
   nano issues/017/01-SECTION-COPY.md      # Add section 1 copy
   # ... repeat for all sections
   nano issues/017/12-METADATA-FOOTER.txt  # Add closing quote
   ```

3. **Validate the Issue Structure**
   ```bash
   python validator.py issues/017
   ```
   Result: ✅ VALID (or errors to fix)

4. **Test Content Uniqueness**
   ```bash
   python test-uniqueness.py issues/017 --check-duplicates
   ```
   Result: ✅ All tests passed (or content needs revision)

5. **Preview on Telegram**
   ```bash
   /admin-preview 017
   ```

5. **Publish**
   ```bash
   /admin-send-issue 017
   ```

---

## Benefits

✅ **Instant setup** — Generate 24 files in 1 second, no naming mistakes

✅ **Pre-filled headers** — Logo, masthead, dates already there

✅ **Consistent structure** — All Issues follow same pattern

✅ **Ready to edit** — Agent just opens files and fills content

✅ **Flexible sections** — Support 1, 5, 11, 20 sections, whatever

✅ **Validated immediately** — Scaffold output passes validator

---

## Examples

### Generate Issue 017 (11 sections)
```bash
$ python scaffold.py issues/017 --theme "Discovery"

✅ Created issues/017/
  ✅ 00-COVER-ART.txt
  ✅ 01-SECTION-ART.txt + 01-SECTION-COPY.md
  ...
  ✅ 11-SECTION-ART.txt + 11-SECTION-COPY.md
  ✅ 12-METADATA-FOOTER.txt

✅ Scaffold complete!
   Issue: 017
   Theme: Discovery
   Sections: 11
   Files created: 24
   Path: issues/017/

📝 Next: Edit the files, fill in art and copy
✔️  When done: python validator.py issues/017
```

### Generate Issue 018 (5 sections)
```bash
$ python scaffold.py issues/018 --sections 5 --theme "Fragments"

✅ Scaffold complete!
   Issue: 018
   Theme: Fragments
   Sections: 5
   Files created: 13
   Path: issues/018/
```

---

## Error Handling

### Folder already exists
```bash
$ python scaffold.py issues/017
❌ ERROR: issues/017 already exists
```

**Solution:** Use a different Issue number

### Invalid section count
```bash
$ python scaffold.py issues/017 --sections 0
❌ ERROR: Sections must be >= 1
```

**Solution:** Use `--sections` with a number >= 1

---

## Integration with Other Tools

**With validator.py:**
```bash
python scaffold.py issues/017 --theme "Discovery"
# ... edit files ...
python validator.py issues/017
```

**With preview.py (coming with Option B):**
```bash
python scaffold.py issues/017 --theme "Discovery"
# ... edit files ...
python preview.py issues/017  # See final rendering
```

**With cron scheduling (coming with Option D):**
```bash
python scaffold.py issues/017 --theme "Discovery"
# ... edit and validate ...
python schedule.py issues/017 --publish-at "2026-05-09 08:00"
```

---

## Next Steps

- Scaffold is complete and tested ✅
- Next optimization: Option B (catch errors earlier)
- Then: Option D (auto-publish scheduling)

---

## Summary

**Before:** Manually create 24 files, name them correctly, fill in templates = 5 minutes

**After:** `python scaffold.py issues/017 --theme "Discovery"` = 1 second

**Saved per Issue:** ~5 minutes

**Annual savings (daily publication):** ~30 hours/year
