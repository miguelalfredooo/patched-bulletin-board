# Editorial Director Spot-Check Brief

**Read this. You verify both teams delivered real work and approve for publication.**

---

## Before You Start

Read: AGENT-RESPONSIBILITIES.md — Know your role.

---

## Your Issue

**Issue:** [NUMBER]  
**Theme:** [THEME]  
**Date:** [DATE]

---

## Your Responsibility

Verify both Managing Editor and Art Department delivered real work. Own the approval. Approve or reject for publication.

---

## What You Check

### Managing Editor Deliverables

**Check these files exist:**
- `/issues/[NUMBER]/01-SECTION-COPY.md`
- `/issues/[NUMBER]/02-SECTION-COPY.md`
- ... through `/issues/[NUMBER]/11-SECTION-COPY.md`

**For each file:**
- [ ] File exists
- [ ] Contains real copy (not placeholder text)
- [ ] 60-120 words (spot-check by reading)
- [ ] Apartamento voice (intimate, specific, unhurried)
- [ ] 1-2 URLs per section
- [ ] Connects to theme

**Read at least 2 sections fully** to confirm quality and voice.

### Art Department Deliverables

**Check these files exist:**
- `/issues/[NUMBER]/00-COVER-ART.txt`
- `/issues/[NUMBER]/01-SECTION-ART.txt` through `/issues/[NUMBER]/11-SECTION-ART.txt`
- `/issues/[NUMBER]/12-METADATA-FOOTER.txt`

**For cover file (00-COVER-ART.txt):**
- [ ] File exists
- [ ] First 6 lines: Exact DBB logo (check visually)
- [ ] Line 7: Blank
- [ ] Lines 8-12: Exact masthead with [NUMBER] and [THEME] filled in
- [ ] Lines 13-30: Visual composition (18 lines)
- [ ] Total: 30 lines
- [ ] Width: 34 chars per line (spot-check a few lines)

**For section files (01-11-SECTION-ART.txt):**
- [ ] All 11 files exist
- [ ] Each contains actual ASCII art (not description or placeholder)
- [ ] Each is 34 chars wide, ≤15 lines tall (spot-check a few)
- [ ] Visually, art complements the copy for that section

**Delivery order check:**
- [ ] Art Department delivered sections with art first, then copy (not reversed)

**For footer file (12-METADATA-FOOTER.txt):**
- [ ] File exists
- [ ] Contains closing statement (not empty, not placeholder)
- [ ] 1-3 lines

**File naming check:**
- [ ] All files named exactly as specified (NN-SECTION-ART.txt, NN-SECTION-COPY.md)
- [ ] No variations (not 01-ART.txt, not 01-ART-COPY.txt, etc.)

**File count:**
```bash
ls /issues/[NUMBER]/ | wc -l
```
Should show: `24` (00-12 art files + 01-11 copy files = 13 + 11 = 24)

---

## Your Decision

### PASS (Approve for Publication)

All checks pass:
- ✅ All 11 copy files exist, real copy, consistent voice, theme-connected
- ✅ All 12 art files exist, real ASCII art, validated dimensions, proper naming
- ✅ All 24 files present in `/issues/[NUMBER]/`

**Before announcing, regenerate archive log for bot:**

The bot reads `archive-log.md` to know which issues are finalized. After ED approval, update it:

```bash
# Update archive log to register the finalized issue
python3 << 'PYTHON_EOF'
import os

issue_num = "[NUMBER]"
theme = "[THEME]"
archive_log = os.path.expanduser("~/projects/patched-editorial/projects/bulletin-board/archive-log.md")

# Read current log
with open(archive_log, 'r') as f:
    lines = f.readlines()

# Find and update the Current Issues table
updated_lines = []
for i, line in enumerate(lines):
    updated_lines.append(line)
    # After the table header row, insert new issue (keep issues sorted descending)
    if "| Issue | Theme | Date |" in line and i+1 < len(lines) and "|---|" in lines[i+1]:
        # Insert after the separator, in descending order
        new_entry = f"| {issue_num} | {theme} | May 9, 2026 | finalized | ✅ PASS | issues/{issue_num}/ |\n"
        if i+2 < len(lines):
            updated_lines.append(lines[i+1])  # Add separator if not already there
            updated_lines.append(new_entry)

# Write back
with open(archive_log, 'w') as f:
    f.writelines(updated_lines)

print(f"✅ Issue {issue_num} registered in archive log")
PYTHON_EOF
```

Verify the issue appears in archive log:
```bash
grep "| [NUMBER] |" ~/projects/patched-editorial/projects/bulletin-board/archive-log.md
```

Should show: `| [NUMBER] | [THEME] | May 9, 2026 | finalized | ✅ PASS | issues/[NUMBER]/ |`

**Then announce:**
```
Issue [NUMBER] ([THEME]) — Pipeline complete & ready for publication.

Deliverables:
✅ Managing Editor: All 11 sections, consistent voice, theme-aligned
✅ Art Department: Cover + 11 visuals + footer, all validated, naming correct
✅ File structure verified (24 files total in /issues/[NUMBER]/)
✅ Archive log regenerated (issue registered with bot)

Observations reviewed:
- ME observations: [key insight from their observations]
- Art observations: [key insight from their observations]

✅ Approved for Telegram delivery
```

### FAIL (Reject, Send Back for Revision)

At least one check fails:
- ❌ Copy files missing or contain placeholder text
- ❌ Copy doesn't connect to theme
- ❌ Art files missing or contain placeholder descriptions
- ❌ Art dimensions wrong or naming incorrect
- ❌ File count wrong
- ❌ Logo or masthead wrong in cover

**Identify the issue. Send back to responsible agent with specific feedback.**

**Do not approve until all issues are resolved.**

**Example feedback to Art Department:**
```
Revision needed:

1. Cover is 34 lines tall (should be 30)
2. Section 03 art is 35 chars wide (should be 34)
3. All lines in 05 are not padded to 34 chars
4. Masthead doesn't show the theme name

Fix these and resubmit.
```

---

## Your Checklist Before Deciding

- [ ] Read Managing Editor's observations (from their announcement)
- [ ] Read Art Department's observations (from their announcement)
- [ ] Read all 11 copy files (at least 2 in full)
- [ ] Read cover file (first 12 lines to verify logo + masthead)
- [ ] Spot-check at least 3 section art files
- [ ] Verify file naming throughout
- [ ] Verify file count (24 total)
- [ ] Consider: Do observations reveal any issues or concerns?
- [ ] Make decision: PASS or FAIL

**If observations reveal problems** (e.g., "theme clarity was confusing," "validation failed initially"), investigate further before approving.

---

## You Own

The approval. The publication decision. The quality gate.

This is the final check before the issue goes live. Get it right.

---

## The Pipeline

1. **Editorial Director** (you) — Writes vision, briefs team
2. **Managing Editor** — Writes 11 sections
3. **Art Department** — Creates cover + 11 visuals
4. **Editorial Director** (you again) — Spot-checks, approves or rejects
5. **Issue publishes**

You open it and close it. Own both stages.

See: AGENT-RESPONSIBILITIES.md for the full system.
