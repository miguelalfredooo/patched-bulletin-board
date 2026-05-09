# Testing Tools — Design By Bulletin™

**Complete guide to validating Issues before publication.**

---

## The Three Tests

Every Issue goes through three validation stages:

| Tool | Tests | Run When | Command |
|------|-------|----------|---------|
| **scaffold.py** | ✅ File creation | When creating new Issue | `python scaffold.py issues/020 --theme "..."` |
| **validator.py** | ✅ File structure | After editing sections | `python validator.py issues/020` |
| **test-uniqueness.py** | ✅ Content specificity | Before approval | `python test-uniqueness.py issues/020 --check-duplicates` |

---

## 1. Scaffold.py — Issue Generation

**Purpose:** Create 24-file Issue structure with correct naming.

**Run:** Once per Issue
```bash
python scaffold.py issues/020 --theme "Your Theme"
```

**Checks:**
- ✅ Creates directory
- ✅ Generates 24 files (00-COVER, 01-11 pairs, 12-FOOTER)
- ✅ Names files correctly (NN-SECTION-ART/COPY)
- ✅ Pre-fills cover and footer
- ✅ Creates manifest.json

**Output:**
```
✅ Scaffold complete!
   Issue: 020
   Theme: Your Theme
   Sections: 11
   Files created: 24
   Path: issues/020/
```

**Next step:** Edit all section files

---

## 2. Validator.py — Structure Validation

**Purpose:** Verify file structure and formatting rules.

**Run:** After editing sections
```bash
python validator.py issues/020
```

**Checks:**
- ✅ 24 files present (exact count)
- ✅ File names correct (00, 01-11, 12)
- ✅ No backticks in art/copy files
- ✅ No escaping in copy files
- ✅ manifest.json exists and valid
- ✅ All files readable

**Output (Pass):**
```
✅ VALID
   Issue path: issues/020
   Sections: 11
   Files: 1 cover + 22 section files + 1 footer = 24 total
```

**Output (Fail):**
```
❌ INVALID
   ✗ Backticks found in 01-SECTION-ART.txt (line 3)
   ✗ File 05-SECTION-COPY.md not found
```

**Next step:** Fix errors or run test-uniqueness.py

---

## 3. Test-Uniqueness.py — Content Quality

**Purpose:** Verify each section is unique, specific, and substantive.

**Run:** Before final approval
```bash
python test-uniqueness.py issues/020 --check-duplicates
```

**Checks:**
- ✅ No placeholder text (no "[Add...]", "TODO", etc.)
- ✅ Minimum content length:
  - Art files: ≥20 characters
  - Copy files: ≥100 characters
- ✅ Section names present in copy files (`**Section Name**`)
- ✅ No duplicate content across sections (with --check-duplicates)

**Output (Pass):**
```
✅ All 24 files present
✅ No placeholder text in art files
✅ No placeholder text in copy files
✅ All art files meet minimum length (20 chars)
✅ All copy files meet minimum length (100 chars)
✅ All copy files contain correct section names
✅ No duplicate content in art files

✅ All uniqueness tests passed!
```

**Output (Fail):**
```
❌ Errors found:
   ⚠️  Copy files missing section names: Section 01 (expected '**Art**'), ...
   ⚠️  Duplicate content detected in copy files: Sections [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

---

## Full Testing Workflow

### Step 1: Create Issue
```bash
python scaffold.py issues/020 --theme "Geometry"
```

Result: 24 numbered files ready to edit.

### Step 2: Edit Sections
```bash
# Edit each section
nano issues/020/01-SECTION-ART.txt
nano issues/020/01-SECTION-COPY.md
# ... repeat for 02-11 ...
nano issues/020/12-METADATA-FOOTER.txt
```

Result: All sections filled with unique content.

### Step 3: Validate Structure
```bash
python validator.py issues/020
```

Expected: `✅ VALID`

If fails: Fix backticks, escaping, or file names.

### Step 4: Test Uniqueness
```bash
python test-uniqueness.py issues/020 --check-duplicates
```

Expected: All tests pass (no placeholders, no duplicates, section names present).

If fails: Add missing section names, remove duplicates, add more content.

### Step 5: Signal Editorial Checkpoint
```bash
python checkpoint.py signal managing 020 "All sections complete, ready for review"
```

Editorial Director receives notification.

### Step 6: Editorial Preview
```bash
/admin-preview 020
```

Editorial Director sees visual + prose rendering.

### Step 7: Editorial Approval
```bash
python checkpoint.py signal editorial 020 "Approved for publishing"
```

### Step 8: Publish
```bash
/admin-send-issue 020
```

Subscribers receive Issue.

---

## Quick Reference

| When | What | Command |
|------|------|---------|
| Creating new Issue | Generate files | `python scaffold.py issues/020 --theme "..."` |
| After editing | Check structure | `python validator.py issues/020` |
| Before approval | Check content | `python test-uniqueness.py issues/020 --check-duplicates` |
| Finished editing | Signal checkpoint | `python checkpoint.py signal managing 020 "Complete"` |
| Ready to send | Publish | `/admin-send-issue 020` |

---

## Troubleshooting

### Validator says "Invalid"

**Error:** Backticks found in art file
```
✗ Backticks found in 01-SECTION-ART.txt (line 3)
```

**Fix:** Remove backticks from art files. Only footer (12-METADATA-FOOTER.txt) has backticks.

**Error:** File not found
```
✗ File 05-SECTION-COPY.md not found
```

**Fix:** Check file naming. Should be `05-SECTION-COPY.md` (not `05-COPY.md` or `05-section-copy.md`).

### Uniqueness test says "Duplicate content"

**Error:**
```
⚠️  Duplicate content detected in copy files: Sections [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

**Meaning:** All sections have the same content (Issue was scaffolded but not edited).

**Fix:** Edit each copy file with unique content for that section.

### Uniqueness test says "Missing section names"

**Error:**
```
⚠️  Copy files missing section names: Section 01 (expected '**Art**')
```

**Meaning:** Copy file 01-SECTION-COPY.md doesn't contain `**Art**`.

**Fix:** Add section name at start of copy file:
```markdown
**Art**

Your prose here...
```

---

## Test Outputs Explained

### Pass All Tests
```
✅ All 24 files present
✅ No placeholder text in art files
✅ No placeholder text in copy files
✅ All art files meet minimum length (20 chars)
✅ All copy files meet minimum length (100 chars)
✅ All copy files contain correct section names
✅ No duplicate content in art files

✅ All uniqueness tests passed!
```

→ Issue is ready to publish.

### Fail on Placeholders
```
❌ Errors found:
   ⚠️  Art files contain placeholders: Section 03
```

→ Section 03's art file still has template text. Remove or replace.

### Fail on Length
```
❌ Errors found:
   ⚠️  Copy files too short (< 100 chars): Section 07 (45 chars)
```

→ Section 07's copy is too brief. Add more prose.

### Fail on Duplicates
```
❌ Errors found:
   ⚠️  Duplicate content detected in copy files: Sections [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

→ All sections have identical content. Edit each section with unique content.

---

## Integration

### With Checkpoint System

```bash
# Managing Editor finishes sections
python validator.py issues/020         # ✅ Passes
python test-uniqueness.py issues/020 --check-duplicates  # ✅ Passes

# Signal readiness
python checkpoint.py signal managing 020 "All sections complete, tested"

# Editorial Director approves
python checkpoint.py signal editorial 020 "Approved"

# Bot publishes
/admin-send-issue 020
```

### Automated Pipeline (Future)

Could add pre-publication checks:
```bash
#!/bin/bash
# Publish script
validator=`python validator.py $1`
uniqueness=`python test-uniqueness.py $1 --check-duplicates`

if [[ $validator == *"VALID"* && $uniqueness == *"passed"* ]]; then
    /admin-send-issue $1
else
    echo "Tests failed. Fix errors before publishing."
fi
```

---

## Summary

**Three tools, one workflow:**

1. **scaffold.py** — Create Issue (instant, 24 files)
2. **validator.py** — Verify structure (no backticks, correct naming)
3. **test-uniqueness.py** — Verify content (unique per section, no placeholders)

Run all three before publication. All should pass.

---

## See Also

- `validator.py` — Source code
- `test-uniqueness.py` — Source code
- `scaffold.py` — Source code
- `TESTING-UNIQUENESS.md` — Detailed uniqueness test guide
- `RENDERING-PIPELINE.md` — Complete pipeline spec
