# Design By Bulletin™ — Agent Responsibilities

**Entry point: Read this first to understand the system. Then read AGENT-BRIEF.md for operational details.**

Every agent owns specific tasks at specific stages. Know your role. Own it completely.

---

## Stage 1: Editorial Director (Vision)

**Read:** EDITORIAL-DIRECTOR-BRIEF.md

**Your responsibility:** Set the vision. Brief the team. Own the theme.

**What you deliver:**
- Theme statement (one sentence)
- 11 section angles (one paragraph each, specific curatorial direction)
- Visual direction (3-5 sentences describing cover approach)
- Cross-section narrative thread (how all 11 sections connect)
- Success criteria (what does a perfect issue look like?)

**Who you brief:** Managing Editor + Art Department (simultaneously)

**Format:** EDITORIAL-BRIEF.md in `/issues/[NUMBER]/`

**Your checklist before briefing:**
- [ ] Theme is clear and defensible
- [ ] All 11 sections have specific angles (not generic)
- [ ] Visual direction is concrete (not vague)
- [ ] Section narrative shows how they connect
- [ ] Success criteria are measurable

**You own:** The vision. The direction. The coherence.

---

## Stage 2: Managing Editor (Copy)

**Read:** MANAGING-EDITOR-BRIEF.md

**Your responsibility:** Write 11 sections anchored to the theme. Own the voice. Own the narrative.

**What you deliver:**
- 11 sections of copy (60-120 words each)
- Each section anchored to the theme thesis
- Apartamento register (intimate, specific, unhurried)
- 1-2 URLs per section (sources)
- Consistent voice across all 11

**Files you create:**
- `/issues/[NUMBER]/01-SECTION-COPY.md`
- `/issues/[NUMBER]/02-SECTION-COPY.md`
- ... through `/issues/[NUMBER]/11-SECTION-COPY.md`

**Before you start:**
- [ ] Read the Editorial Brief completely
- [ ] Understand the theme deeply
- [ ] Know why each section matters to the theme
- [ ] Know the Apartamento voice (read past issues)

**Your checklist before announcing:**
- [ ] All 11 sections written (01-11)
- [ ] All 60-120 words (count them)
- [ ] All saved as `NN-SECTION-COPY.md` (exact naming)
- [ ] All in `/issues/[NUMBER]/` directory
- [ ] No placeholder text
- [ ] Consistent voice throughout
- [ ] Each section has 1-2 URLs
- [ ] All sections connect to theme thesis

**You own:** The narrative. The voice. The connection to theme.

---

## Stage 3: Art Department (Visuals)

**Read:** ART-DEPARTMENT-BRIEF.md

**Your responsibility:** Create cover + 11 section visuals. Own the aesthetics. Own the validation.

**What you deliver:**
- 1 cover (34×30, with exact DBB logo + masthead + visual)
- 11 section visuals (34×≤15, one per section)
- 1 footer (closing statement)

**Files you create:**
- `/issues/[NUMBER]/00-COVER-ART.txt`
- `/issues/[NUMBER]/01-SECTION-ART.txt` through `/issues/[NUMBER]/11-SECTION-ART.txt`
- `/issues/[NUMBER]/12-METADATA-FOOTER.txt`

**Before you start (read these in order):**
1. Read EDITORIAL-BRIEF in `/issues/[NUMBER]/`
2. Read FINAL-ART-DEPT-INSTRUCTIONS.md (this file tells you everything)
3. Read DBB-LOGO-MASTHEAD-ASSET.txt (copy-paste, don't recreate)
4. Read ART-DEPT-WIDTH-HEIGHT-VALIDATION.md (validation rules)

**Your non-negotiable rules:**
- Every cover MUST start with exact DBB logo (6 lines) + blank (1 line) + exact masthead (5 lines, fill in [NUMBER] and [THEME])
- Cover is exactly 34 chars wide × 30 lines tall (no exceptions)
- Every section is exactly 34 chars wide × ≤15 lines tall (no exceptions)
- Every line padded to exact width with spaces (no short lines)
- All files saved to `/issues/[NUMBER]/` (nowhere else)
- File names exact: `NN-SECTION-ART.txt`, `NN-SECTION-COPY.md` (no variations)

**Your checklist before validation:**
- [ ] Read Editorial Brief (understand the theme)
- [ ] Read FINAL-ART-DEPT-INSTRUCTIONS.md
- [ ] Created `/issues/[NUMBER]/` directory
- [ ] Creating all 12 files in that directory (not elsewhere)
- [ ] Cover starts with exact DBB logo + masthead
- [ ] Cover is 34×30, sections are 34×≤15
- [ ] Every line padded to exact width
- [ ] File names match exactly (NN-SECTION-ART.txt)

**Your validation checklist:**
- [ ] Ran `bash validate-cover.sh /issues/[NUMBER]/00-COVER-ART.txt`
- [ ] Script output shows ✅ VALIDATION PASSED
- [ ] Verified all 12 files exist: `ls /issues/[NUMBER]/ | wc -l` = 12
- [ ] Cover has exact DBB logo (not approximation)
- [ ] Masthead has [NUMBER] and [THEME] filled in
- [ ] All dimensions exact (34 wide, 30 tall for cover, ≤15 for sections)

**Your announcement (only after validation passes):**
```
Art complete. Cover + 11 visuals + footer created and validated.

✅ Validation gate passed (logo, masthead, dimensions, naming, directory)
✅ All 12 files in /issues/[NUMBER]/ with correct names
✅ Ready for Editorial Director spot-check
```

**You own:** The aesthetics. The validation. The deliverables. No exceptions.

---

## Stage 4: Editorial Director (Spot-Check)

**Read:** EDITORIAL-DIRECTOR-SPOTCHECK-BRIEF.md

**Your responsibility:** Verify both teams delivered real work. Own the approval.

**What you check:**

**Managing Editor:**
- [ ] All 11 copy files exist in `/issues/[NUMBER]/01-11-SECTION-COPY.md`
- [ ] Read one section — it's real copy, not placeholder
- [ ] Voice is consistent (Apartamento register)
- [ ] Each section connects to theme

**Art Department:**
- [ ] Cover file exists: `/issues/[NUMBER]/00-COVER-ART.txt`
- [ ] Section art files exist: `/issues/[NUMBER]/01-11-SECTION-ART.txt`
- [ ] Footer file exists: `/issues/[NUMBER]/12-METADATA-FOOTER.txt`
- [ ] Cover includes exact DBB logo + masthead (verify by reading first 12 lines)
- [ ] Cover is 34 wide × 30 tall (verify by checking file)
- [ ] Section art is actual ASCII, not placeholder text
- [ ] All file names match exactly (NN-SECTION-ART.txt format)

**Your decision:**
- ✅ **PASS:** Issue is ready for publication
- ❌ **FAIL:** Identify what's wrong, send back to responsible agent with specific feedback

**Your announcement (only after spot-check passes):**
```
Issue [NUMBER] ([THEME]) — Pipeline complete & ready for publication.

✅ Managing Editor: All 11 sections, consistent voice, theme-aligned
✅ Art Department: Cover + 11 visuals, all validated, all files present
✅ Approved for Telegram delivery
```

**You own:** The approval. The publication decision. The quality gate.

---

## Summary: Who Owns What

| Stage | Agent | Owns | Delivers |
|-------|-------|------|----------|
| 1 | Editorial Director | Vision, theme, direction | Editorial brief |
| 2 | Managing Editor | Narrative, voice, copy | 11 copy files (01-11-SECTION-COPY.md) |
| 3 | Art Department | Aesthetics, validation, visuals | 12 art files (00-12-SECTION-ART.txt) in `/issues/[NUMBER]/` |
| 4 | Editorial Director | Approval, quality gate | Spot-check + publication decision |

---

## What Breaks the System

**Editorial Director doesn't brief clearly:**
→ Managing Editor and Art Department work without direction
→ Issue lacks coherence

**Managing Editor doesn't read the brief:**
→ Copy doesn't connect to theme
→ Issue feels disconnected

**Art Department doesn't follow instructions:**
→ Files go in wrong directory
→ File names don't match
→ Logo/masthead missing
→ Dimensions wrong
→ Validation fails
→ Issue cannot be published

**Editorial Director doesn't spot-check:**
→ Placeholder content gets published
→ Bad work goes live
→ System fails

---

## Non-Negotiable

**Each agent must know their responsibilities BEFORE they start.**

**Each agent must own their checklist BEFORE they announce.**

**Each agent must deliver real work, not approximations.**

**The system only works if every agent knows exactly what they own and delivers it completely.**
