# Agent Onboarding — Documentation Reading Order

**Purpose:** Establish the sequence in which agents should read documentation to build accurate mental models before working on bulletin board tasks.

---

## PHASE 1: UNDERSTAND THE SYSTEM (15 min)

Read these in order to understand what you're building:

### 1. **VISUAL-DIFFERENTIATION-STANDARDS.md** (8 min)
**Why first:** You need to understand the design system before anything else. This explains:
- How each issue is visually unique (HERO-TALL characters)
- How sections are visually consistent across all issues
- The visual language and why it matters
- What can vary vs. what must stay fixed

**Mental model after reading:** "I understand that each issue has a unique character, all sections have canonical boxes, and this creates a coherent but varied system."

---

### 2. **BOT-COMPONENTS.md** (7 min)
**Why second:** Now that you understand the design philosophy, learn the actual component system.
- Component naming (COMPONENT-1 through COMPONENT-5)
- How components nest and relate to each other
- Where assets are stored

**Mental model after reading:** "I know the 5 components exist, what they contain, and where to find them."

---

## PHASE 2: UNDERSTAND THE PROCESS (10 min)

### 3. **WORKFLOW-ORDER-OF-OPERATIONS.md** (10 min)
**Why third:** Before learning to create, understand the full workflow from start to finish.
- 8 phases from project setup to documentation
- What to check at each phase
- How information flows through the system
- Dependency order (curator → editorial → design → delivery)

**Mental model after reading:** "I understand the complete process end-to-end. I know what happens before my work, what I'm responsible for, and what happens after."

---

## PHASE 3: LEARN TO BUILD (15 min)

### 4. **ISSUE-CREATION-TEMPLATE.md** (10 min)
**Why fourth:** Now learn the exact format and structure.
- File naming convention
- Exact section order (fixed)
- Format rules (line widths, spacing, dividers)
- All 11 sections and their order
- HERO-TALL pyramid formula
- Character assignments for 001–011
- Validation checklist

**Mental model after reading:** "I can create a new issue file that complies with the standard. I know what goes where, the exact format, and how to validate before committing."

---

### 5. **QA-DELIVERY-CHECKLIST.md** (5 min)
**Why fifth:** Learn verification and delivery standards.
- MarkdownV2 escaping function (copy-paste ready)
- Telegram API payload format
- Post-send verification checklist
- Known issues and solutions
- Python delivery template

**Mental model after reading:** "I understand how to format content for Telegram, what to verify before sending, and how to handle special characters correctly."

---

## PHASE 4: EXECUTE WITH CONFIDENCE (Ongoing)

### 6. **Project folder structure** (As needed)
- `projects/bulletin-board/ISSUE-NNN-*-complete.md` — Main issue files
- `projects/bulletin-board/sessions/` — Session records
- `projects/bulletin-board/curator-reports/` — Curator agent output
- `projects/bulletin-board/ascii-art-library/` — ASCII art assets

---

## QUICK REFERENCE: What to Read When

| Task | Documents | Time |
|------|-----------|------|
| **Understanding the project** | VISUAL-DIFFERENTIATION-STANDARDS.md + BOT-COMPONENTS.md | 15 min |
| **Creating a new issue** | ISSUE-CREATION-TEMPLATE.md + VISUAL-DIFFERENTIATION-STANDARDS.md | 15 min |
| **Sending to Telegram** | QA-DELIVERY-CHECKLIST.md + WORKFLOW-ORDER-OF-OPERATIONS.md (Phase 6) | 10 min |
| **Full workflow (new agent)** | All documents in order above | 40 min |
| **Modifying existing issue** | ISSUE-CREATION-TEMPLATE.md (for format ref) + QA-DELIVERY-CHECKLIST.md | 10 min |

---

## Why This Order?

1. **Visual standards first** → Understand the design constraints before worrying about execution
2. **Components second** → Know the asset structure
3. **Workflow third** → Understand the full process so specific steps make sense
4. **Template fourth** → Learn the format rules
5. **QA fifth** → Learn verification and delivery

This order prevents agents from getting lost in implementation details before understanding the bigger picture.

---

## Checkpoint: Am I Ready?

After reading all 5 documents, ask yourself:

- [ ] Can I name the 11 sections in order?
- [ ] Can I explain why Issue 006 uses ▶ instead of another character?
- [ ] Do I know what a HERO-TALL pyramid is and how to generate one?
- [ ] Can I name the 5 components?
- [ ] Do I understand the 8-phase workflow?
- [ ] Can I create a new issue file from scratch?
- [ ] Do I know what MarkdownV2 escaping is and why it matters?
- [ ] Can I verify content before sending to Telegram?

**If yes to all:** You're ready to work on bulletin board tasks.  
**If no to any:** Go back and re-read that section.

---

## For Agents Coming Back to This Project

If you've already read this documentation before:
- **Refresher (2 min):** Re-read WORKFLOW-ORDER-OF-OPERATIONS.md Phase numbers to ground yourself
- **Creating new issue (5 min):** Check ISSUE-CREATION-TEMPLATE.md for the validation checklist
- **Sending to Telegram (3 min):** Copy the escape function from QA-DELIVERY-CHECKLIST.md
- **Stuck?** Re-read VISUAL-DIFFERENTIATION-STANDARDS.md to remember the constraints

