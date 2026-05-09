# Editorial Director Spot-Check Procedure

**Use this AFTER both Managing Editor and Design deliver their work.**

Issue #: ___  
Theme: ___________  
Date: ___________

---

## WHAT YOU'RE CHECKING

Not creating or fixing work. Just verifying both teams completed their assignments and files are in the right place.

---

## STEP 1: Verify File Structure (2 minutes)

Check that all 24 files exist with correct names:

```
/issues/[N]/
├── 00-COVER-ART.txt              ← Design
├── 01-SECTION-ART.txt            ← Design
├── 01-SECTION-COPY.md            ← Managing Editor
├── 02-SECTION-ART.txt            ← Design
├── 02-SECTION-COPY.md            ← Managing Editor
├── ... (03-11 pairs)
├── 11-SECTION-ART.txt            ← Design
├── 11-SECTION-COPY.md            ← Managing Editor
└── 12-METADATA-FOOTER.txt        ← Design
```

**Checklist:**
- [ ] Issue directory exists: `/issues/[N]/`
- [ ] 00-COVER-ART.txt exists
- [ ] 01-SECTION-COPY.md exists (check naming: not 01-ART-COPY.md)
- [ ] 01-SECTION-ART.txt exists
- [ ] 02-SECTION-COPY.md exists
- [ ] 02-SECTION-ART.txt exists
- [ ] ... (verify through section 11)
- [ ] 12-METADATA-FOOTER.txt exists

**If ANY file is missing or named wrong:** ❌ REJECT
- Files with wrong names: return to Managing Editor
- Missing files: return to responsible agent

---

## STEP 2: Spot-Check Cover Art (2 minutes)

**Read:** `/issues/[N]/00-COVER-ART.txt`

**Verify:**
- [ ] Contains actual visual ASCII art (not "placeholder" or "[Add art]")
- [ ] **Cover structure correct:**
  - [ ] Lines 1-6: DBB logo (6-line block present and complete)
  - [ ] Line 7: Blank line
  - [ ] Lines 8-12: Masthead with "Design By Bulletin™" + dividers + issue info
  - [ ] Lines 13-30: Visual composition (18 lines)
- [ ] Every line = exactly 34 characters wide (fixed width, padded with spaces)
- [ ] Exactly 30 lines tall (fixed height, no more, no less)

**If any element missing or wrong:** ❌ REJECT — return to Design
- Logo incomplete? Reject.
- Masthead missing? Reject.
- Wrong line count? Reject.

---

## STEP 3: Spot-Check Copy (2 minutes)

**Read:** `/issues/[N]/01-SECTION-COPY.md` (Section 1)

**Verify:**
- [ ] Contains actual text (not placeholder like "[Add copy]")
- [ ] Starts with section title in markdown (e.g., `**Art**`)
- [ ] Contains 60-120 words
- [ ] Includes at least one URL/link
- [ ] Raw markdown (no pre-escaped characters like `\_`)

**If placeholder or template text:** ❌ REJECT — return to Managing Editor

---

## STEP 4: Spot-Check 2 Random Art Files (3 minutes)

**Read:** `/issues/[N]/03-SECTION-ART.txt`
**Read:** `/issues/[N]/08-SECTION-ART.txt`

**Verify BOTH:**
- [ ] Contain actual ASCII visual (not "Art 3 - visual representation")
- [ ] No placeholder text ("[Add ASCII]", "visual description", etc.)
- [ ] Every line = exactly 34 characters wide (fixed width, padded with spaces)
- [ ] ≤15 lines tall
- [ ] No backticks
- [ ] All pure ASCII (no unusual Unicode)

**If placeholder or description text:** ❌ REJECT — return to Design

---

## STEP 5: Verify Footer (1 minute)

**Read:** `/issues/[N]/12-METADATA-FOOTER.txt`

**Verify:**
- [ ] File exists and is NOT empty
- [ ] Contains closing statement or quote (1-3 lines)
- [ ] Related to issue theme
- [ ] Not placeholder text

**If missing or empty:** ❌ REJECT — return to Design

---

## STEP 6: Verify Format Distribution (2 minutes)

**Spot-check the 11 art files for format variety:**

Read through file names or scan first line of each art file. Verify:
- [ ] At least 3 different visual styles/formats present
- [ ] Not all the same type (e.g., not all nested boxes, not all grid-based)
- [ ] Visual variety across the 11 sections

(You don't need to memorize the 5 formats. Just confirm there's visual variety.)

**If all sections look identical:** ❌ REJECT — return to Design

---

## FINAL DECISION

### If ALL steps PASSED: ✅ APPROVE

Send message:
```
Issue [N] ([THEME]) — Validation complete. All files verified.

✅ 24 files present with correct names
✅ Cover art present and actual visual
✅ Copy files present and actual content
✅ Art files spot-checked (no placeholders)
✅ Footer present
✅ Format variety confirmed

Issue ready for Telegram publication.
```

### If ANY step FAILED: ❌ REJECT

Send message:
```
Issue [N] — Validation failed. Return to [AGENT] for correction.

Blockers:
- [Specific issue found]
- [File that needs fixing]

Do not approve until resolved.
```

---

## TOTAL TIME: 12-15 minutes

This is a quick gate check, not a deep review. You're confirming work was completed, not evaluating quality.

---

## What You're NOT Doing

❌ You're not writing or fixing copy
❌ You're not creating or fixing art
❌ You're not creating files
❌ You're not checking grammar/spelling
❌ You're not editing content

You're only verifying the structure and confirming no placeholders slipped through.

---

**Last updated: May 9, 2026**
