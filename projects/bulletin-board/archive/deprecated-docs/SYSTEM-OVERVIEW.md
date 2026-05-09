# Design By Bulletin™ — System Overview

**Version:** 3.0 (System Improvements)
**Date:** 2026-05-09
**Status:** Active and validated through Issue 023 test

---

## CORE PRINCIPLE

**Design Department owns art creation (cover + 11 sections + footer). Managing Editor owns copy (11 sections). Editorial Director verifies. Bot publishes.**

- ✅ **Design** creates 12 actual visual files and self-validates
- ✅ **Managing Editor** writes 11 sections of copy with exact naming
- ✅ **Editorial** spot-checks using procedure (not trusting announcements)
- ✅ **Bot** formats for Telegram and publishes

---

## HOW TO CREATE A NEW ISSUE

### STEP 1: Editorial Director Creates Brief

**Use:** AGENT-BRIEF-TEMPLATE.md

Create brief with:
- Issue number
- Theme name
- 11 section descriptions
- Explicit file paths
- Self-validation checklists for agents

**Send to:** Managing Editor + Design (simultaneously)

### STEP 2: Managing Editor Writes Copy (Parallel)

**Receives:** AGENT-BRIEF-TEMPLATE.md with Managing Editor section

**Creates:**
- `/issues/[N]/01-SECTION-COPY.md` through `/issues/[N]/11-SECTION-COPY.md`
- Each 60-120 words
- Raw markdown (no escaping, no backticks)

**Naming (CRITICAL):**
- ✅ `01-SECTION-COPY.md` (correct)
- ❌ `01-ART-COPY.md` (wrong — breaks pipeline)
- ❌ `section-01.md` (wrong — breaks pipeline)

**Delivers to:** Design with message: "Copy complete. Ready for art."

### STEP 3: Design Creates Art (Parallel)

**Receives:** AGENT-BRIEF-TEMPLATE.md with Design section + copy from Managing Editor

**Creates:**
- `00-COVER-ART.txt` (DBB masthead + issue # + theme + visual)
- `01-11-SECTION-ART.txt` (11 unique visuals, all 5 formats, no consecutive repeats)
- `12-METADATA-FOOTER.txt` (closing statement or quote)
- **Total: 12 files**

**Self-validates using checklist in brief:**
- [ ] All 12 files created
- [ ] All contain actual ASCII (no placeholders)
- [ ] All meet constraints (36×15 max, ASCII-safe)
- [ ] All 5 formats represented, no consecutive repeats
- [ ] Cover, sections, footer all thematic

**Naming (CRITICAL):**
- ✅ `01-SECTION-ART.txt` (correct)
- ✅ `12-METADATA-FOOTER.txt` (correct — must exist)
- ❌ `01-ART.txt` (wrong — breaks pipeline)
- ❌ Missing footer (breaks completeness)

**Delivers to:** Editorial with message: "Art complete. All 12 files created and self-validated."

### STEP 4: Editorial Spot-Checks

**Use:** EDITORIAL-SPOT-CHECK-PROCEDURE.md

**6-step procedure (12-15 minutes):**
1. Verify all 24 files exist with correct names
2. Spot-check cover (actual visual, not placeholder)
3. Spot-check 1 copy file (actual text, not template)
4. Spot-check 2 art files (actual ASCII, no descriptions)
5. Verify footer exists and is not empty
6. Verify format variety across visuals

**Pass/Fail:**
- ✅ All checks pass → Approve and announce
- ❌ Any check fails → Reject and send back with specific blocker

### STEP 5: Bot Publishes

**Receives:** Approved issue from Editorial

**Publishes to Telegram:**
- Cover (code block)
- Section 1 art (code block) + copy (MarkdownV2)
- Section 2 art (code block) + copy (MarkdownV2)
- ... (through section 11)

**Timeline per issue:** ~2-3 hours total (parallel work)

---

## DOCUMENTS (Use in Order)

### 🚀 For Creating New Issues
**1. AGENT-BRIEF-TEMPLATE.md** — Start here
- Template to fill out
- Send to Managing Editor + Design
- Includes all explicit requirements

### ✅ For Verifying Completed Work
**2. EDITORIAL-SPOT-CHECK-PROCEDURE.md** — Use after delivery
- 6-step gate procedure
- 12-15 minutes
- Clear pass/fail criteria

### 📚 For Reference
**3. EDITORIAL-WORKFLOW-ENFORCED.md** — Full context
- Complete workflow steps
- All role responsibilities
- Enforcement rules

**4. SYSTEM-OVERVIEW.md** — This document
- Quick reference
- Current status
- How to create issues

**5. RENDERING-PIPELINE.md** — Technical architecture
- Stage 1: Agent output (raw files)
- Stage 2: Validation (gates)
- Stage 3: Telegram formatting

### 🔍 For Understanding Improvements
**6. SYSTEM-IMPROVEMENTS-LOG.md** — What changed
- Issue 023 test results
- Breakdowns identified
- Solutions implemented

---

## WHAT WE LEARNED FROM ISSUE 023 TEST

### Breakdown 1: File Naming
**Problem:** Managing Editor created `01-ART-COPY.md` instead of `01-SECTION-COPY.md`
**Fix:** AGENT-BRIEF-TEMPLATE.md now explicitly states naming convention with examples

### Breakdown 2: Missing Footer
**Problem:** Design didn't create `12-METADATA-FOOTER.txt`
**Fix:** Footer now explicitly required in Design brief + Editorial spot-check

### Overall Improvement
**System now prevents:**
- Wrong filename conventions
- Missing required files
- Placeholder submissions (caught by self-validation)
- Role confusion (explicit role boundaries)
- Incomplete approvals (Editorial has written procedure)

---

## AGENT RESPONSIBILITIES (No Overlap)

### Managing Editor
✅ Write 11 sections of copy  
✅ Save as `NN-SECTION-COPY.md`  
✅ Deliver with confirmation  
❌ Do NOT create art

### Design Department
✅ Create cover + 11 sections + footer (12 files)  
✅ Self-validate all 12 pieces  
✅ Deliver with confirmation  
❌ Do NOT write copy

### Editorial Director
✅ Create issue brief (use template)  
✅ Spot-check completed work (use procedure)  
✅ Approve or reject with feedback  
❌ Do NOT create art or copy

### Bulletin Bot
✅ Load issue files  
✅ Format for Telegram (MarkdownV2, code blocks)  
✅ Publish to subscribers  
❌ Do NOT modify files or content

---

## CURRENT STATUS

### Issues Complete
| Issue | Status | Theme |
|-------|--------|-------|
| **017** | ✅ Published | Cinema & Typography |
| **018** | ✅ Published | Movement |
| **019** | ✅ Published | Geometry |
| **020** | ✅ Published | Form |
| **021** | ✅ Published | Social Objects |
| **022** | ✅ Published | Negative Space |
| **023** | ✅ Test Complete | Constraint (validated system) |

### Issues Ready for Next Test
- Issue 024+ can follow proven workflow

---

## KEY PRINCIPLES

1. **Explicit > Assumed**
   - Everything in the brief
   - No hidden conventions
   - No "you should know" knowledge

2. **Self-Validation First**
   - Agents validate before handoff
   - Catches errors early
   - Better than Editorial discovering problems

3. **Procedure > Judgment**
   - Editorial has written steps to follow
   - Clear pass/fail criteria
   - No guesswork or inconsistency

4. **Design Owns Visuals**
   - All 12 visual files created by Design
   - Cover, sections, AND footer
   - Design self-validates completeness

5. **Copy and Art Separate**
   - Managing Editor writes only
   - Design creates art only
   - No role overlap or confusion

---

## FILE STRUCTURE (Always)

```
/issues/[NUMBER]/
├── 00-COVER-ART.txt           ← Design creates
├── 01-SECTION-ART.txt         ← Design creates
├── 01-SECTION-COPY.md         ← Managing Editor creates
├── 02-SECTION-ART.txt         ← Design creates
├── 02-SECTION-COPY.md         ← Managing Editor creates
├── ... (03-11 pairs)
├── 11-SECTION-ART.txt         ← Design creates
├── 11-SECTION-COPY.md         ← Managing Editor creates
└── 12-METADATA-FOOTER.txt     ← Design creates

TOTAL: 24 files (1 cover + 11 art + 11 copy + 1 footer)
```

---

## NEXT STEPS

1. **Test Issue 024** with new system
   - Use AGENT-BRIEF-TEMPLATE.md
   - Agents follow self-validation in brief
   - Editorial uses EDITORIAL-SPOT-CHECK-PROCEDURE.md
   - Confirm no breakdowns

2. **Scale to remaining issues** (025+)
   - Same workflow
   - Same documents
   - All agents trained on expectations

3. **Archive and document** lessons learned
   - Update playbooks as needed
   - Scale to full production

---

## CONTACT & QUESTIONS

- **For agent briefs:** Use AGENT-BRIEF-TEMPLATE.md
- **For spot-checking:** Use EDITORIAL-SPOT-CHECK-PROCEDURE.md
- **For workflow context:** Read EDITORIAL-WORKFLOW-ENFORCED.md
- **For understanding improvements:** See SYSTEM-IMPROVEMENTS-LOG.md

---

**System is production-ready. Ready for scale.**

Last updated: May 9, 2026, 01:33 PDT  
Status: Active and validated  
Next test: Issue 024
