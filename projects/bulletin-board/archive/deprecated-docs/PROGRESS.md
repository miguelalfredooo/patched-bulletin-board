# Progress Tracker — Real-Time Issue Completion Status

**Purpose:** See at a glance which sections are complete and calculate completion percentage.

**Status:** ✅ Ready to use

**Time to check:** 1 second

---

## Usage

### Quick Check
```bash
python progress.py issues/017
```

Shows:
- Completion percentage
- Progress bar
- Which sections are done
- Items remaining

### Detailed View
```bash
python progress.py issues/017 --verbose
```

Shows:
- Every section (art + copy status)
- Cover status
- Footer status
- Complete breakdown

---

## What It Shows

### Quick View Example
```
📋 Issue 017 (50% complete)
[██████████░░░░░░░░░░] 12/24

✅ Cover Art

📑 Sections (11 total)
  ✅ 01
  ✅ 02
  ✅ 03
  ✅ 04
  ✅ 05
  ✅ 06

  ⏳ Incomplete: 07, 08, 09, 10, 11

⏳ Closing Footer

📊 Summary
  Done: 12/24
  Percent: 50%

💪 12 items left to complete
```

### Verbose View Example
```
📋 Issue 017 (50% complete)
[██████████░░░░░░░░░░] 12/24

✅ Cover Art

📑 Sections (11 total)
  ✅ 01: ✅ Art  ✅ Copy
  ✅ 02: ✅ Art  ✅ Copy
  ✅ 03: ✅ Art  ✅ Copy
  ✅ 04: ✅ Art  ✅ Copy
  ✅ 05: ✅ Art  ✅ Copy
  ✅ 06: ✅ Art  ✅ Copy
  ⏳ 07: ✅ Art  ❌ Copy
  ⏳ 08: ❌ Art  ❌ Copy
  ⏳ 09: ❌ Art  ❌ Copy
  ⏳ 10: ❌ Art  ❌ Copy
  ⏳ 11: ❌ Art  ❌ Copy

⏳ Closing Footer

📊 Summary
  Done: 12/24
  Percent: 50%

💪 12 items left to complete
```

---

## Interpretation

### Status Icons

| Icon | Meaning |
|------|---------|
| ✅ | Complete (has content) |
| ⏳ | In progress (missing content) |
| ❌ | Not started (missing content) |

### Progress Stages

**0%** — Issue just scaffolded, nothing written yet
- Shows: All sections incomplete

**1-25%** — Cover + first few sections done
- Shows: Quick momentum check

**26-50%** — Half the sections done
- Shows: You're past the midpoint

**51-75%** — Most sections done, finishing up
- Shows: Close to ready for validation

**76-99%** — Nearly complete, just cleanup left
- Shows: Close to publishing

**100%** — Ready to validate
- Shows: "Issue X is COMPLETE and ready to validate!"

---

## Workflow

1. **Scaffold Issue**
   ```bash
   python scaffold.py issues/017 --theme "Discovery"
   ```
   Progress: 0%

2. **Check progress periodically**
   ```bash
   python progress.py issues/017
   ```
   Monitor as you write

3. **When complete (100%)**
   ```bash
   python validator.py issues/017
   ```
   Validate structure

---

## Content Detection

Progress tracker checks if files have actual content (not just templates):

✅ **Counts as complete:**
- File has content
- Content is meaningful (>20 characters)
- Not just placeholder text

❌ **Counts as incomplete:**
- File doesn't exist
- File is empty
- File only contains template placeholders like "[Add copy here]"

---

## Examples

### Fresh Issue (Just Scaffolded)
```bash
$ python progress.py issues/017
📋 Issue 017 (0% complete)
[░░░░░░░░░░░░░░░░░░░░] 0/24
💡 Start writing: edit section files, fill in art and copy
```

### Halfway Through
```bash
$ python progress.py issues/017
📋 Issue 017 (50% complete)
[██████████░░░░░░░░░░] 12/24
💪 12 items left to complete
```

### Nearly Done
```bash
$ python progress.py issues/017
📋 Issue 017 (96% complete)
[███████████████████░] 23/24
💪 1 item left to complete
```

### Complete and Ready
```bash
$ python progress.py issues/017
📋 Issue 017 (100% complete)
[████████████████████] 24/24
✨ Issue 017 is COMPLETE and ready to validate!
```

---

## Verbose Mode

Use `--verbose` to see detailed section-by-section breakdown:

```bash
python progress.py issues/017 --verbose
```

Shows:
- Each section individually (01, 02, 03, etc.)
- Art status per section
- Copy status per section
- Easy to spot which sections need work

Useful for:
- Finding exactly which sections are incomplete
- Seeing if art is done but copy isn't (or vice versa)
- Detailed status for Editorial Director

---

## Integration with Other Tools

**With scaffold:**
```bash
python scaffold.py issues/017 --theme "Discovery"
python progress.py issues/017  # Shows 0%
```

**While writing:**
```bash
python progress.py issues/017  # Check status (should be increasing)
```

**Before validation:**
```bash
python progress.py issues/017  # Should show 100%
python validator.py issues/017  # Then validate
```

---

## Time Saved

Before: Check manually which sections are done (tedious, error-prone)
After: `python progress.py issues/017` (1 second, accurate)

Useful for:
- Managing Editor tracking their own progress
- Editorial Director checking if Managing Editor is done
- Assignment Editor monitoring overall timeline

---

## Summary

**Quick check:** `python progress.py issues/017`
**Detailed check:** `python progress.py issues/017 --verbose`
**When done:** Should show 100% complete, then validate
