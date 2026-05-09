# Editorial Workflow — ENFORCED SEQUENCE

**Version:** 3.0 (System Improvements, May 9, 2026)  
**Date:** 2026-05-09  
**Status:** MANDATORY for all issues  
**Enforced by:** Editorial Director validation

⚠️ **READ FIRST:** Use AGENT-BRIEF-TEMPLATE.md when creating new issues. Use EDITORIAL-SPOT-CHECK-PROCEDURE.md when reviewing.

---

## THE RULE

**Design Department is responsible for creating and delivering actual ASCII art files before Editorial Director approves.**

Placeholder descriptions are NOT acceptable. Every art file must contain actual ASCII visuals (34 chars FIXED width × 15 lines max).

**Design owns art creation. Editorial verifies. No exceptions.**

---

## WORKFLOW SEQUENCE

### STEP 0: Create Brief (Before assigning agents)
**Who:** Editorial Director  
**What:** Use AGENT-BRIEF-TEMPLATE.md to create complete brief
**Output:** Brief document ready to send to Managing Editor + Design
**Why:** Prevents assumptions, ensures agents have explicit instructions

---

### STEP 2: PARALLEL WORK (Both must complete)

#### PATH A: Managing Editor (Copy)
- Write 11 section copy files (NN-SECTION-COPY.md)
- 60-120 words per section
- Raw markdown (NO escaping)
- Unified thesis/narrative
- Include 1-2 URLs per section

**Status when done:** ✅ All 11 .md files complete

#### PATH B: Design Department (ASCII Art) ← **DESIGN OWNS THIS**
**Design is fully responsible for creating and delivering actual ASCII art.**

- Create cover (00-COVER-ART.txt): 34 chars FIXED width × 30 lines FIXED height
  - **Every line must be exactly 34 characters** (pad with spaces)
  - **Must be exactly 30 lines** (no more, no less)
- Create 11 section art files (NN-SECTION-ART.txt)
- Each: actual ASCII visuals (34 chars FIXED width × 15 lines max)
  - **Every line must be exactly 34 characters** (pad with spaces)
- All 5 formats represented (A/B/C/D/E)
- No consecutive format repeats
- Telegram-safe characters only
- NO placeholder text like "visual representation" or "[Add ASCII art here]"
- **Self-validate all constraints BEFORE handoff** (Design's responsibility)
- Write directly to `/issues/[number]/NN-SECTION-ART.txt` files

**Status when done:** ✅ All 11 .txt files with REAL ASCII (not placeholders), self-validated by Design

**Design MUST complete before handing to Editorial. No exceptions. No placeholders.**

---

### STEP 3: DESIGN SELF-VALIDATION (Before handoff to Editorial)

**Who:** Design Department Lead  
**Responsibility:** Design MUST self-validate before handing to Editorial.

**Design Checklist:**
- [ ] Cover file created (00-COVER-ART.txt) with exactly 34×30 dimensions
- [ ] All 11 section art files created (01-11-SECTION-ART.txt)
- [ ] Cover contains ACTUAL ASCII (not descriptions)
- [ ] Each section file contains ACTUAL ASCII (not descriptions)
- [ ] **Every line in cover = exactly 34 characters wide** (count and pad with spaces)
- [ ] **Cover = exactly 30 lines tall** (count and verify)
- [ ] **Every line in sections = exactly 34 characters wide** (count and pad with spaces)
- [ ] Each section file ≤15 lines tall
- [ ] No backticks in any file
- [ ] No placeholder text ("visual representation", "[Add ASCII", etc.)
- [ ] All 5 formats represented (A/B/C/D/E)
- [ ] No consecutive format repeats
- [ ] Telegram-safe rendering verified
- [ ] Fixed width verified using monospace editor or Python script

**If Design validation FAILS:**
- Design fixes the work
- Do NOT hand to Editorial until all checks pass

**If Design validation PASSES:**
- ✅ Design delivers to Editorial Director with message: "All 11 pieces created, self-validated, ready for final approval"
- ✅ Editorial proceeds to final verification

---

### STEP 4: EDITORIAL FINAL VERIFICATION (Spot-check only)

**Who:** Editorial Director  
**Responsibility:** Quick verification that Design delivered complete work.

**Editorial Checklist:**
- [ ] Receive delivery confirmation from Design
- [ ] Spot-check 2-3 art files (read them, verify they're actual ASCII)
- [ ] Verify cover and footer exist
- [ ] Confirm no obvious placeholder text remains

**If Editorial spots placeholder text:**
- ❌ REJECT back to Design
- Design must complete actual ASCII before re-submission

**If Editorial verification PASSES:**
- ✅ Issue ready for Telegram formatting
- ✅ Editorial can announce "complete"

---

### STEP 5: ANNOUNCEMENT (ONLY after Design completes & Editorial verifies)

**Who:** Editorial Director  
**Message:** "Issue [N] — [THEME] — PIPELINE COMPLETE & READY FOR VALIDATION"

**This announcement means:**
- ✅ All prose is finalized
- ✅ All ASCII art is ACTUAL VISUALS (verified by Design self-validation + Editorial spot-check)
- ✅ No placeholder text remains in any art file
- ✅ All files pass structural validation
- ✅ Ready for Telegram formatting and publication

---

### STEP 6: TELEGRAM FORMATTING & PUBLICATION

**Who:** Alfredo (via bulletin-bot)  
**Input:** Validated issue files  
**Output:** Properly formatted Telegram messages  
**Delivery:** Direct to user inbox

---

## KEY ENFORCEMENT RULES

### Design Owns Art Completion (Non-negotiable)
**Design Department is fully responsible for creating actual ASCII art and delivering it to files.**

- Placeholder text in art = Design rejection
- Examples of rejectable content:
  - "Movement Art 1 - visual representation" ← DESIGN MUST FIX
  - "[Add ASCII art for section 1 here]" ← DESIGN MUST FIX
  - "Form Art 3 - visual description" ← DESIGN MUST FIX
  
- Only ACTUAL ASCII geometry is acceptable:
  ```
  ◆ ▶ ◆
    ↗
  ◆ ▶ ◆
  ```

- Design must write to correct files: `/issues/[number]/NN-SECTION-ART.txt`
- Design must self-validate before handing to Editorial
- Design is accountable for completeness

### Design Self-Validation is Mandatory
- **Design MUST verify constraints before handoff:**
  - All 11 files exist
  - All contain actual ASCII (not placeholders)
  - All are ≤36×15 characters
  - All formats represented, no consecutive repeats
  - Telegram-safe rendering
  
- If Design self-validation fails: Design fixes it. Do NOT hand to Editorial.

### Editorial Final Verification (Spot-check only)
- Editorial spot-checks 2-3 art files
- Editorial confirms no placeholder text remains
- If placeholder text found: REJECT back to Design
- Editorial does NOT create or fix art (Design's responsibility)

### Announcement Timing
- **Editorial cannot announce "complete" until:**
  - ✅ Design confirms: "All 11 pieces created and self-validated"
  - ✅ Editorial spot-checks: Confirms actual ASCII in files
  - ✅ All structural validation passes

### Validation Gating
- **Design self-validation is the first gate**
- **Editorial spot-check is the second gate**
- If either gate finds placeholders: REJECT to Design
- Issue does NOT advance to Telegram until both gates pass
- Design must resolve before re-submission

---

## WHAT THIS PREVENTS

❌ **Old problem:** Editorial announces "complete" → visuals are still placeholders → Telegram receives broken content

✅ **New system:** Validation gate checks for actual art BEFORE announcement → only complete issues advance

---

## FOR DESIGN DEPARTMENT

**You own art creation. Full responsibility.**

When assigned to create visuals:

1. **Create 11 actual ASCII pieces** (not descriptions)
   - Each section gets unique visual
   - Visual relates to section topic
   - Visual complements editorial copy

2. **Write directly to the correct files** `/issues/[number]/NN-SECTION-ART.txt`
   - Not as notes or descriptions
   - Pure ASCII visual content only
   - One piece per file

3. **Self-validate before handoff:**
   - All 11 files created
   - All contain actual ASCII (not placeholder text)
   - All ≤36 chars wide, ≤15 lines tall
   - All formats represented (A/B/C/D/E)
   - No consecutive format repeats
   - No backticks, Telegram-safe
   - Thematically aligned with sections

4. **Deliver to Editorial Director with confirmation:**
   - "Issue [N]: All 11 ASCII pieces created, self-validated, ready for final approval"
   - Include your self-validation checklist
   - Editorial will spot-check, then approve

5. **If Editorial rejects (finds placeholders):**
   - You fix it
   - Resubmit with new self-validation
   - Repeat until all checks pass

**Design is accountable. No placeholders. No exceptions.**

---

## FOR EDITORIAL DIRECTOR

**You verify. You don't create.**

When Design says "complete":

1. **Spot-check 2-3 art files** (quick read)
   - Confirm they're actual ASCII (not descriptions)
   - Confirm they relate to section topics
   - Confirm no placeholder text

2. **If spot-check finds issues:**
   - REJECT back to Design
   - Design fixes and resubmits
   - You don't create or modify art

3. **If spot-check passes:**
   - Announce "complete"
   - Pass to Telegram publication

**Editorial is the gate, not the creator. Design delivers complete work to you.**

---

## DESIGN SELF-VALIDATION SCRIPT PSEUDO-CODE

```
for each section 01-11:
    art_file = read(NN-SECTION-ART.txt)
    
    # Design: Check for placeholder text BEFORE submitting
    if "visual representation" in art_file.lower():
        STOP("Section incomplete: Replace placeholder with actual ASCII")
    if "[add ascii" in art_file.lower():
        STOP("Section incomplete: Create actual ASCII piece")
    if "[section" in art_file.lower():
        STOP("Section incomplete: Not a real visual")
    
    # Design: Verify constraints
    if width > 36 chars:
        STOP("Section too wide: Reduce to 36 chars max")
    if height > 15 lines:
        STOP("Section too tall: Reduce to 15 lines max")
    if backticks in art_file:
        STOP("Section has backticks: Remove them (raw ASCII only)")

# Design: Check format distribution
format_count = count_formats(all_sections)
if format_A < 2 or format_A > 3:
    STOP("Format A distribution off: Need 2-3 occurrences")
# (repeat for B, C, D, E)

if ANY section fails:
    STOP("Fix issues before handing to Editorial")
else:
    DELIVER("Issue ready: All 11 pieces complete, self-validated")

# Editorial: Quick spot-check (2-3 files)
if spot_check finds placeholder:
    REJECT("Placeholders found: Return to Design")
else:
    APPROVE("Ready for Telegram")
```

---

## TIMELINE EXPECTATIONS

- **Brief:** Immediate
- **Prose writing:** 30-60 minutes
- **Art creation:** 45-90 minutes (11 pieces, testing rendering)
- **Validation:** 10-15 minutes
- **Telegram formatting:** 5-10 minutes
- **Publication:** Immediate

**Total per issue:** ~2-3 hours from brief to publication

---

**All future issues follow this sequence. Design completion = gate to announcement.**

---

Last updated: May 9, 2026  
Enforced by: Editorial Director validation checkpoint
