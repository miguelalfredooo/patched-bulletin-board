# Issue 021 Testing — Ready to Execute

**6-Section Structure Test Plan**  
**Date:** May 8, 2026  
**Status:** Ready for execution

---

## Step 1: Create Issue 021 Scaffold (18 files)

```bash
cd /Users/blackmachete/projects/patched-editorial/projects/bulletin-board
python3 scaffold.py issues/021 --sections 6 --theme "Material Culture" --date "2026-05-09"
```

**Expected Output:**
```
✓ Created issues/021/
✓ 18 files created:
  - 00-COVER-ART.txt
  - 01-06-SECTION-ART.txt (6 files)
  - 01-06-SECTION-COPY.md (6 files)
  - 07-METADATA-FOOTER.txt
  - manifest.json
✓ All files ready for agents
```

**Verify:**
```bash
ls -la issues/021/ | wc -l  # Should show 19 lines (18 files + header)
cat issues/021/manifest.json | jq .  # Should show "sections": 6
```

---

## Step 2: Editorial Director — Write Brief

**File:** `issues/021/editorial-brief.md`

```markdown
# Editorial Brief — Issue 021: Material Culture

## Theme
Exploring how the physical properties of materials shape design thinking and practice.

## Editorial Insight
When we understand what materials *are* — their properties, limitations, histories — we design differently. 
This issue examines how material literacy drives innovation and craft.

## 6-Section Angles

### Section 1: Visual Thinking
How do designers *see* materials? Visual perception of texture, surface, finish.

### Section 2: Cultural Context
How do materials carry cultural meaning? Tradition, sustainability, symbolism.

### Section 3: Critical Thinking
What's the history of material use in design? How has it evolved?

### Section 4: Tools & Innovation
Technology for understanding materials. Digital tools for material exploration.

### Section 5: Systems & Application
How are materials specified? Manufacturing, supply chains, real-world constraints.

### Section 6: Material Culture Studies
Objects, artifacts, craftsmanship. What do things teach us about their making?

## Curation Guidance
Find pieces that examine:
- How materials are chosen and why
- What materials reveal about a designer's thinking
- The craft and skill required
- Material innovation and experimentation
- Objects as cultural artifacts
```

---

## Step 3: Art Department — Curate 14-16 Pieces

**File:** `issues/021/art-department-report.md`

Example report structure:
```markdown
# Art Department Curation Report — Issue 021

## Curated Selections (14 pieces across 6 sections)

### Section 1: Visual Thinking (2 pieces)
1. [Piece on material perception/visual qualities]
2. [Piece on surface treatment/finish]

### Section 2: Cultural Context (2 pieces)
1. [Piece on material tradition]
2. [Piece on sustainability/ethics]

### Section 3: Critical Thinking (2 pieces)
1. [Historical perspective on materials]
2. [Material innovation history]

### Section 4: Tools & Innovation (2 pieces)
1. [Tool for material analysis]
2. [Digital material exploration]

### Section 5: Systems & Application (3 pieces)
1. [Material specification]
2. [Manufacturing process]
3. [Supply chain/systems]

### Section 6: Material Culture Studies (3 pieces)
1. [Craftsman/maker perspective]
2. [Object design and making]
3. [Material artifacts/cultural significance]

## Editorial Insight
These 14 pieces collectively argue: **Material understanding is foundational to design thinking.**
When designers know materials deeply, they make better decisions at every stage.
```

**Signal Completion:**
```bash
python3 checkpoint.py signal art-department 021 "14 pieces curated for 6 sections"
```

---

## Step 4: Assignment Editor — Create 6 Commissions

**File:** `issues/021/commissions.md`

Example commission structure:
```markdown
# Commission Briefs — Issue 021

## Commission 1: Section 1 - Visual Thinking
**Title:** The Language of Materials
**Angle:** How do materials communicate visually?
**Word Count:** 250-300
**Approach:** Analyze visual properties and perception

## Commission 2: Section 2 - Cultural Context
**Title:** Material Meaning Across Cultures
**Angle:** Symbolism and tradition in material choice
**Word Count:** 250-300
**Approach:** Cultural perspective on materials

## Commission 3: Section 3 - Critical Thinking
**Title:** Material History in Design
**Angle:** How our understanding of materials has evolved
**Word Count:** 250-300
**Approach:** Historical narrative

## Commission 4: Section 4 - Tools & Innovation
**Title:** New Ways to Know Materials
**Angle:** Technology for understanding materials
**Word Count:** 250-300
**Approach:** Innovation and experimentation

## Commission 5: Section 5 - Systems & Application
**Title:** Specifying Materials in the Real World
**Angle:** Practical constraints and decision-making
**Word Count:** 250-300
**Approach:** Systems thinking

## Commission 6: Section 6 - Material Culture Studies
**Title:** The Craft of Making
**Angle:** Skill, process, and what objects teach us
**Word Count:** 250-300
**Approach:** Craftsman perspective and object study
```

**Signal Completion:**
```bash
python3 checkpoint.py signal assignment 021 "6 commissions ready"
```

---

## Step 5: Managing Editor — Write 6 Sections + Create Visuals

**Files to Create:**
- `01-SECTION-COPY.md` through `06-SECTION-COPY.md` (6 prose files)
- `01-SECTION-ART.txt` through `06-SECTION-ART.txt` (6 visual files)
- Update `00-COVER-ART.txt`
- Update `07-METADATA-FOOTER.txt`

**Workflow:**
```bash
# 1. Write each section copy (250-300 words each)
nano issues/021/01-SECTION-COPY.md  # Visual Thinking
nano issues/021/02-SECTION-COPY.md  # Cultural Context
nano issues/021/03-SECTION-COPY.md  # Critical Thinking
nano issues/021/04-SECTION-COPY.md  # Tools & Innovation
nano issues/021/05-SECTION-COPY.md  # Systems & Application
nano issues/021/06-SECTION-COPY.md  # Material Culture Studies

# 2. Create ASCII art for each section
nano issues/021/01-SECTION-ART.txt
# ... (repeat for 02-06)

# 3. Create or update cover and footer
nano issues/021/00-COVER-ART.txt
nano issues/021/07-METADATA-FOOTER.txt

# 4. Verify all 18 files exist
ls -la issues/021/ | grep -E "SECTION|COVER|FOOTER|manifest"
```

**Signal Completion:**
```bash
python3 checkpoint.py signal managing 021 "All 6 sections complete, 18/18 files done"
```

---

## Step 6: Editorial Director — Validate Issue 021

### Validation Command
```bash
cd /Users/blackmachete/projects/patched-editorial/projects/bulletin-board
python3 validator.py issues/021
```

**Expected Output:**
```
✓ VALID
  ✓ Manifest valid JSON
  ✓ 6 sections found
  ✓ 18 files found (cover + 6 art + 6 copy + footer + manifest)
  ✓ All files readable
  ✓ No syntax errors
  ✓ Content length valid
```

### If Validation Fails
```bash
# Auto-fix common issues
python3 validator.py issues/021 --fix

# Re-validate
python3 validator.py issues/021
```

### Test Uniqueness
```bash
python3 test-uniqueness.py issues/021 --check-duplicates
```

**Expected Output:**
```
✓ NO DUPLICATES
  ✓ All 6 sections unique
  ✓ Content length sufficient
  ✓ Diversity check passed
```

### Preview on Telegram
```bash
/admin-preview 021
```

**Expected Output:**
```
Rendering Issue 021...
✓ Cover rendered
✓ Section 1: Visual Thinking
✓ Section 2: Cultural Context
✓ Section 3: Critical Thinking
✓ Section 4: Tools & Innovation
✓ Section 5: Systems & Application
✓ Section 6: Material Culture Studies
✓ Footer rendered
Preview ready
```

**Signal Approval:**
```bash
python3 checkpoint.py signal editorial 021 "Issue 021 valid and approved for publishing"
```

---

## Step 7: Bot — Publish Issue 021

### Automatic Publication (8 PM PT)
Bot publishes automatically at scheduled time.

### Manual Testing
```bash
# Send preview to yourself
/sendme 021

# Verify rendering
# Expected: 6 sections render correctly with section names and content
```

### For Telegram Subscribers
Bot publishes to all subscribers at scheduled time (8 PM PT).

**Expected Result:**
```
Design By Bulletin™ — Issue 021
[Cover visual]

**Section 1: Visual Thinking**
[ASCII visual + 250-300 word essay]

**Section 2: Cultural Context**
[ASCII visual + 250-300 word essay]

**Section 3: Critical Thinking**
[ASCII visual + 250-300 word essay]

**Section 4: Tools & Innovation**
[ASCII visual + 250-300 word essay]

**Section 5: Systems & Application**
[ASCII visual + 250-300 word essay]

**Section 6: Material Culture Studies**
[ASCII visual + 250-300 word essay]

[Footer]
```

---

## Complete Workflow Timeline

```bash
# Day 0, 6:00 PM PT
# Editorial Director writes brief

# Day 1, 7:30 AM PT
python3 scaffold.py issues/021 --sections 6 --theme "Material Culture"
# Art Department curates 14-16 pieces across 6 sections

# 9:15 AM PT
# Assignment Editor creates 6 commissions

# 12:00 PM PT
# Managing Editor writes 6 sections + creates 6 section visuals + cover + footer

# 7:00 PM PT
python3 validator.py issues/021
/admin-preview 021
# Editorial Director validates

# 8:00 PM PT
# Bot publishes to subscribers
```

---

## Verification Checklist

- [ ] Issue 021 scaffold created (18 files)
- [ ] manifest.json shows `"sections": 6`
- [ ] All 6 section prose files created
- [ ] All 6 section visual files created
- [ ] Cover art created
- [ ] Footer created
- [ ] `python3 validator.py issues/021` returns ✓ VALID
- [ ] `/admin-preview 021` shows 6 sections rendering correctly
- [ ] Bot publishes 6 sections successfully
- [ ] All sections appear on Telegram

---

## Quick Reference: File Locations

```
Bulletin Root:        /Users/blackmachete/projects/patched-editorial/projects/bulletin-board/
Issue 021 Scaffold:   issues/021/
Bot Code:             /Users/blackmachete/.openclaw/agents/bulletin-bot/agent/bulletin_bot_impl.py
Validator:            /Users/blackmachete/projects/patched-editorial/projects/bulletin-board/validator.py
Scaffold Tool:        /Users/blackmachete/projects/patched-editorial/projects/bulletin-board/scaffold.py
Checkpoint Tool:      /Users/blackmachete/projects/patched-editorial/projects/bulletin-board/checkpoint.py
```

---

## Expected Result

Issue 021 successfully publishes to Telegram with:
- ✅ 6 sections (Visual, Cultural, Critical, Tools, Systems, Material)
- ✅ 18 total files (cover + 6 art + 6 copy + footer + manifest)
- ✅ Material Culture Studies section with object/craft focus
- ✅ All validation checks passing
- ✅ Clean rendering on Telegram

**System validated and ready for ongoing 6-section production.**

---

*Test Plan Complete — Ready to Execute*  
*Generated: May 8, 2026, 11:30 PM PT*
