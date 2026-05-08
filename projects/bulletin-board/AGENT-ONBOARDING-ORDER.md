# Agent Onboarding — Documentation Reading Order

**Purpose:** Establish the sequence in which agents should read documentation to build accurate mental models before working on bulletin board tasks.

---

## PHASE 1: FOUNDATIONAL KNOWLEDGE (12 min)

Read these ONCE at the beginning to build mental models:

### 1. **VISUAL-DIFFERENTIATION-STANDARDS.md** (8 min)
**When:** First, before anything else  
**Why:** Understand design constraints before executing.
- How each issue is visually unique (HERO-TALL characters)
- How sections are visually consistent across all issues
- What can vary vs. what must stay fixed

**Mental model:** "Each issue has a unique character. All sections have canonical ASCII boxes. Design varies per issue but structure is fixed."

---

### 2. **WORKFLOW-ORDER-OF-OPERATIONS.md** (4 min)
**When:** Right after visual standards  
**Why:** Understand the 8-phase workflow so later steps make sense.
- The full pipeline from project open to Telegram delivery
- What happens before/during/after each phase
- Dependency order (curator → editorial → design → delivery)

**Mental model:** "I know the complete process. I understand workflow dependencies."

---

## PHASE 2: DURING ISSUE CREATION (Just-in-Time)

### 3. **ISSUE-CREATION-TEMPLATE.md** (10 min)
**When:** As you're creating the issue file  
**Why:** Exact reference for format, file naming, structure.
- File naming convention (`ISSUE-NNN-theme-slug-complete.md`)
- Header format (exact spacing and date format)
- HERO-TALL pyramid formula
- Character assignments (001–011)
- The 11 sections in fixed order
- Validation checklist

**Mental model:** "I can build a compliant issue file. I know exact format rules."

---

### 4. **ASCII-ART-LIBRARY or COMPONENTS-MASTER-GUIDE.txt** (5 min)
**When:** After editor submits prose, before finalizing ASCII art  
**Why:** This is when you're working with ASCII—content must be locked first.
- Reference the 11 canonical section ASCII boxes
- Verify each section art matches the standard
- Confirm line widths ≤35 chars
- Verify ASCII art appears in both ACT 1 preview and ACT 2 full edition

**Mental model:** "I know which ASCII goes in each section. I can validate correctness."

---

## PHASE 3: BEFORE DELIVERY (Just-in-Time)

### 5. **QA-DELIVERY-CHECKLIST.md** (5 min)
**When:** Right before sending to Telegram  
**Why:** Verification and delivery instructions.
- MarkdownV2 escaping function (copy-paste)
- Telegram API payload format
- Post-send verification checklist
- Known issues and solutions

**Mental model:** "I know how to format for Telegram and verify before sending."

---

## PHASE 4: REFERENCE AS NEEDED

### 6. **BOT-COMPONENTS.md**
**When:** If you need to understand asset structure  
**Reference:** Component naming (1–5), nesting, file locations

### 7. **Project folder structure**
- `projects/bulletin-board/ISSUE-NNN-*-complete.md` — Main issue files
- `projects/bulletin-board/sessions/` — Session records
- `projects/bulletin-board/curator-reports/` — Curator output
- `projects/bulletin-board/ascii-art-library/master/` — Master ASCII assets

---

## QUICK REFERENCE: Just-in-Time Reading

| Stage | When | Read | Time |
|-------|------|------|------|
| **Onboarding** | First time on this project | VISUAL-DIFFERENTIATION-STANDARDS.md + WORKFLOW-ORDER-OF-OPERATIONS.md | 12 min |
| **Creating issue** | As you're building the file | ISSUE-CREATION-TEMPLATE.md | 10 min |
| **Adding ASCII art** | After editor submits prose, before finalizing | ASCII-ART-LIBRARY or COMPONENTS-MASTER-GUIDE.txt | 5 min |
| **Delivery prep** | Right before sending to Telegram | QA-DELIVERY-CHECKLIST.md | 5 min |
| **Stuck?** | At any point if unsure | VISUAL-DIFFERENTIATION-STANDARDS.md (constraints) or WORKFLOW-ORDER-OF-OPERATIONS.md (process) | 5 min |

---

## Why This Structure?

This is **workflow-based reading**, not sequential onboarding:

1. **Foundation first (once):** VISUAL-DIFFERENTIATION-STANDARDS + WORKFLOW-ORDER-OF-OPERATIONS establish constraints and process
2. **Just-in-time during work:** Read documents as you need them in the actual workflow
   - Template when creating
   - ASCII-art-library when working with visual assets
   - QA-checklist when delivering
3. **Prevents context-switching:** You don't read about delivery before you have anything to deliver

The critical insight: **ASCII rules are not foundational—they're a checkpoint in the workflow. Read them when the prose is locked and you're finalizing visuals.**

---

## Foundational Checkpoint (After initial reading)

After reading VISUAL-DIFFERENTIATION-STANDARDS.md + WORKFLOW-ORDER-OF-OPERATIONS.md, ask yourself:

- [ ] Can I name the 11 sections in order? (Art, Painting, Illustration, Sculpture, Culture, Photography, Art History, Opinions, Design & AI Tools, Product & Process, Visual & Brand)
- [ ] Can I explain why each issue has a different HERO-TALL character?
- [ ] Do I understand what a HERO-TALL pyramid is and the constraint (15 rows, max 35 chars per line)?
- [ ] Do I understand the 8-phase workflow?
- [ ] Can I identify what stays fixed (section boxes) vs. what varies (character, prose tone)?

**If yes to all:** You're ready to work on issue creation.

---

## Workflow Checkpoints (As you work)

**Before creating:** Have you read ISSUE-CREATION-TEMPLATE.md?  
**Before finalizing ASCII:** Have you read ASCII-ART-LIBRARY or COMPONENTS-MASTER-GUIDE.txt?  
**Before sending:** Have you read QA-DELIVERY-CHECKLIST.md?

---

## For Agents Coming Back to This Project

If you've already done foundational reading:
- **Grounding (2 min):** Skim WORKFLOW-ORDER-OF-OPERATIONS.md to remember the phase you're in
- **Creating issue (as needed):** Open ISSUE-CREATION-TEMPLATE.md to the validation checklist
- **Working with ASCII (as needed):** Reference ASCII-ART-LIBRARY for the canonical section boxes
- **Before delivery (as needed):** Copy escape function from QA-DELIVERY-CHECKLIST.md
- **Confused about rules?** Check VISUAL-DIFFERENTIATION-STANDARDS.md for constraints

