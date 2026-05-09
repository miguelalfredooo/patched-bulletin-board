# DOCUMENTATION-MAP.md
## Design By Bulletin™ — The Complete System

Everything connected. One entry point. Fast answers.

---

## THE 3 MASTER DOCUMENTS

You have three documents. They work together.

| Document | Purpose | Read When | Time |
|----------|---------|-----------|------|
| **AGENT-ROLE-INSTRUCTIONS.md** | What each agent does, step-by-step | You're about to invoke an agent | 10 min (per agent) |
| **OPENCLAW-INTEGRATION.md** | How to deploy agents, pre-made prompts | You're setting up the workflow | 20 min |
| **DOCUMENTATION-MAP.md** | This file. Navigation + decision tree | You're confused about which doc | 5 min |

---

## QUICK DECISION TREE

**I'm new to this project. Where do I start?**
→ Read: DOCUMENTATION-MAP.md (you are here) → AGENT-ROLE-INSTRUCTIONS.md (read Curator section) → OPENCLAW-INTEGRATION.md (understand the pipeline)
→ Time: 40 min

**I'm about to spin up agents for Issue NNN.**
→ Open: OPENCLAW-INTEGRATION.md
→ Copy the pre-made prompt for Curator Agent
→ Invoke the agent
→ Hand off to Editorial Agent (copy-paste prompt)
→ Time: 5 min setup, 60 min execution

**An agent is running. What should it do next?**
→ Open: AGENT-ROLE-INSTRUCTIONS.md
→ Find the agent's section
→ Read the "Steps to Execute" checklist
→ Time: 10 min to clarify

**I'm the Editorial Agent. What exactly am I writing?**
→ Open: AGENT-ROLE-INSTRUCTIONS.md, Editorial Agent section
→ Read: "Write the 11 Sections"
→ See: Output Format template
→ Read: Tone Rules (SOUL.md + Apartamento register)
→ Time: 15 min to understand, then 60 min to execute

**A deliverable failed. What do I do?**
→ Open: OPENCLAW-INTEGRATION.md
→ Jump to: "Error Handling"
→ Follow: corrective action
→ Time: 10 min to triage

**I want to change the workflow.**
→ This is a design decision. Let me (Alfredo) know.
→ I can update AGENT-ROLE-INSTRUCTIONS.md and OPENCLAW-INTEGRATION.md
→ Time: varies (consult me first)

---

## HOW THE 3 DOCUMENTS CONNECT

```
You want to publish Issue NNN
            ↓
         Decide theme
            ↓
   Open OPENCLAW-INTEGRATION.md
            ↓
    Copy Curator Agent prompt
            ↓
Invoke agent in OpenClaw
            ↓
Agent reads AGENT-ROLE-INSTRUCTIONS.md (Curator section)
            ↓
    Agent executes steps
            ↓
   Agent reports back
            ↓
  You review report
            ↓
    Approve or iterate
            ↓
   Copy Editorial Agent prompt from OPENCLAW-INTEGRATION.md
            ↓
       Invoke agent
            ↓
Agent reads AGENT-ROLE-INSTRUCTIONS.md (Editorial section)
            ↓
   Agent executes steps
            ↓
   And so on...
            ↓
      Issue published
            ↓
   Update archive-log.md
```

---

## DOCUMENT DEPENDENCIES

### AGENT-ROLE-INSTRUCTIONS.md
- **Required by:** All 4 agent prompts (Curator, Editorial, Design, Delivery)
- **Files it reads:** archive-log.md, SOUL.md, Jina Reader
- **Files it writes to:** [ISSUE-NNN-theme]-[phase].md files
- **Critical sections:**
  - Curator Agent: Scoring Rubric, No Recycling Rule
  - Editorial Agent: 11 Sections, Tone Rules
  - Design Agent: ASCII constraints, file assembly
  - Delivery Agent: Telegram constraints, verification

### OPENCLAW-INTEGRATION.md
- **Used by:** You (the human), when setting up agent workflows
- **Contains:** 4 pre-made agent prompts (copy-paste ready)
- **References:** AGENT-ROLE-INSTRUCTIONS.md (agents read it)
- **Includes:** 3 deployment options, environment setup, timeline
- **Critical sections:**
  - Agent Prompts (copy-paste into OpenClaw)
  - Error Handling
  - Environment Setup

### DOCUMENTATION-MAP.md
- **This file**
- **Purpose:** Quick reference, decision tree, connection map
- **For:** Anyone who's confused or new
- **Time:** 5–10 min to find answer

---

## FILE STRUCTURE

```
/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/

├── AGENT-ROLE-INSTRUCTIONS.md ← Agent read this
├── OPENCLAW-INTEGRATION.md ← You read this
├── DOCUMENTATION-MAP.md ← You're reading this
├── archive-log.md ← All agents reference this
├── ISSUE-011-invisible.md ← Template/reference
├── ISSUE-012-legible.md ← Current issue (already done)
├── [future issues will go here]

/Users/blackmachete/.openclaw/workspace-general/
├── SOUL.md ← Voice/tone reference
├── AGENTS.md ← Agent operating instructions
└── TOOLS.md ← Local infrastructure notes
```

---

## READING PATHS BY USER TYPE

### Path 1: You (Human, Project Lead)
**Time: 40 min total**

1. Read: This file (DOCUMENTATION-MAP.md) — 5 min
2. Skim: OPENCLAW-INTEGRATION.md — 15 min
   - Focus: "Quick Start" + pre-made prompts
   - Skip: agent instructions (agents read those)
3. Bookmark: AGENT-ROLE-INSTRUCTIONS.md
   - You'll reference it if an agent asks a question
   - Each section is ~10 min to understand
4. Result: You can invoke agents, review their work, approve handoffs

### Path 2: Curator Agent (First Time)
**Time: 20 min setup, 60 min execution**

1. Read: AGENT-ROLE-INSTRUCTIONS.md (Curator Agent section) — 10 min
   - Focus: Steps to Execute + Scoring Rubric + Output Format
2. Read: Brief (from human) — 2 min
3. Execute: Source discovery + scoring — 45 min
4. Write: Curation report — 15 min
5. Checkpoint: Validate before handing off — 3 min
6. Result: Curation report ready for Editorial Agent

### Path 3: Editorial Agent (First Time)
**Time: 20 min setup, 60 min execution**

1. Read: AGENT-ROLE-INSTRUCTIONS.md (Editorial Agent section) — 10 min
   - Focus: 11 Sections + Tone Rules + Output Format
2. Read: SOUL.md (voice) — 5 min
3. Read: archive-log.md (past tone) — 5 min
4. Read: Curator report + Editorial brief — 5 min
5. Execute: Write 11 sections — 50 min
6. Checkpoint: Validate before handing off — 3 min
7. Result: Editorial prose ready for Design Agent

### Path 4: Design Agent (First Time)
**Time: 15 min setup, 30 min execution**

1. Read: AGENT-ROLE-INSTRUCTIONS.md (Design Agent section) — 10 min
   - Focus: Act 1 Visual + Assembly + Validation
2. Review: ISSUE-011-invisible.md (visual template) — 5 min
3. Execute: Create Act 1 + assemble file — 20 min
4. Validate: Links + formatting — 10 min
5. Checkpoint: Before handoff — 3 min
6. Result: Final locked file ready for human approval

### Path 5: Delivery Agent (First Time)
**Time: 10 min setup, 20 min execution**

1. Read: AGENT-ROLE-INSTRUCTIONS.md (Delivery Agent section) — 10 min
   - Focus: Pre-Delivery Validation + Execution
2. Wait: For human approval signal — [variable]
3. Execute: Send Act 1 (8:00am PT) + Act 2 (8:30am PT) — 10 min
4. Verify: Messages landed, rendered correctly — 10 min
5. Archive: Update archive-log.md — 5 min
6. Result: Issue published, archive updated

### Path 6: You want to change the workflow
**Time: Consult first**

Don't edit AGENT-ROLE-INSTRUCTIONS.md or OPENCLAW-INTEGRATION.md on your own.

Ask me (Alfredo) first. I'll:
1. Understand the change you want
2. Update the affected document(s)
3. Brief all agents on the change
4. Confirm it works

This keeps everyone on the same page.

---

## CRITICAL CHECKPOINTS

Every agent has a "Checkpoint Before Handoff" checklist. **Don't skip it.**

**Curator Agent must validate:**
- [ ] 7–10 articles scored ≥7.0
- [ ] All within 2 weeks of brief date
- [ ] No recycling violations
- [ ] Thematic coherence written
- [ ] URLs live (no 404s)

**Editorial Agent must validate:**
- [ ] All 11 sections written
- [ ] Tone consistent with archive-log
- [ ] No corporate language
- [ ] Closing lands
- [ ] Thematic thread visible

**Design Agent must validate:**
- [ ] Act 1 fits 38-char width
- [ ] All URLs validated (live)
- [ ] Archive-log entry formatted
- [ ] File saved to correct path
- [ ] Editorial prose intact

**Delivery Agent must validate:**
- [ ] Both Acts in Telegram
- [ ] Visual rendered correctly
- [ ] No markdown errors
- [ ] Archive-log updated
- [ ] Status: Published

---

## ENVIRONMENT & FILES

**Before invoking any agent, ensure:**

```bash
# Feedly integration
export FEEDLY_API_TOKEN="[your-token]"

# Telegram integration
export TELEGRAM_BOT_TOKEN="[bot-token]"
export TELEGRAM_CHAT_ID="7774590281"

# Files exist
ls -la /Users/blackmachete/projects/patched-editorial/projects/bulletin-board/
  # Should see: archive-log.md, AGENT-ROLE-INSTRUCTIONS.md, OPENCLAW-INTEGRATION.md, DOCUMENTATION-MAP.md, ISSUE-*.md files
```

---

## ISSUE CADENCE

**Recommended:** 1 issue per week

**Timeline per issue:**
- **Day 1 (Thursday):** You decide theme → Curator runs (60 min) → Editorial runs (60 min)
- **Day 2 (Friday):** Design runs (30 min) → You approve → Delivery preps
- **Day 3 (Tuesday):** Delivery executes (8am + 8:30am PT sends) → Issue lives

**Lead time:** Concepting 7 days before publish is ideal (gives buffer)

---

## TROUBLESHOOTING QUICK ANSWERS

**Q: An agent finished early. What do I do?**
A: They wait. Don't invoke the next agent until you've reviewed and approved their work. This is intentional—gates catch errors early.

**Q: What if the theme doesn't work?**
A: Curator Agent will return <7 passed articles. Request a re-run with guidance (broader interpretation, different sources, or suggest a new theme). No editorial proceeds until you have ≥7 articles.

**Q: What if Act 1 visual doesn't fit the theme?**
A: That's the Design Agent's job. They iterate until it lands. You can ask for rewrites ("Make it more minimalist" or "Add more motion").

**Q: How do I know when an agent is done?**
A: They post a handoff message (e.g., "Curation complete. [X] articles ready for Editorial Agent."). Read it, approve or request changes, then invoke the next agent.

**Q: Can I edit the agent prompts?**
A: No. The prompts are locked in OPENCLAW-INTEGRATION.md and reference AGENT-ROLE-INSTRUCTIONS.md. If you need to change how an agent works, ask me (Alfredo) first.

**Q: Can I skip a phase (e.g., go straight from Curator to Delivery)?**
A: No. The pipeline is: Curator → Editorial → Design → Delivery. Each phase has different requirements and outputs. All are necessary.

**Q: What if I want to publish outside the normal cadence?**
A: You can invoke agents anytime. Just set the brief (theme, pub date, etc.) and go. Delivery Agent will schedule for your specified times.

---

## CONTACTS & ESCALATION

**Normal operation:** The 4-agent pipeline handles everything.

**If something breaks:**
1. Check OPENCLAW-INTEGRATION.md → Error Handling
2. Follow the corrective action
3. Re-invoke the agent that failed

**If you want to change the workflow:**
- Ask me (Alfredo) first
- I'll update the docs
- Agents will read the changes

**If you want to add a new agent role:**
- This is a design decision
- Consult with me (Alfredo)
- We'll update all three docs and test the new workflow

---

## QUICK REFERENCE: WHAT EACH FILE IS

**AGENT-ROLE-INSTRUCTIONS.md**
- "What should I do?" → Read this
- For: Agents (and you, if you're curious)
- Contains: Step-by-step instructions per phase

**OPENCLAW-INTEGRATION.md**
- "How do I invoke agents?" → Read this
- For: You (the human)
- Contains: Ready-to-copy prompts, deployment options, environment setup

**DOCUMENTATION-MAP.md**
- "Which doc do I need?" → You're reading this
- For: Anyone confused or new
- Contains: Decision tree, reading paths, connection map

---

## ONE MORE THING

This system is designed to be **human-in-the-loop but agent-executed**.

You don't write the editorial. The Editorial Agent does.
You don't design the visual. The Design Agent does.
You don't send to Telegram. The Delivery Agent does.

**Your job:** Decide the theme, review each phase, approve handoffs.

Everything else is automated.

This is intentional. Let the agents work.

---

**END OF DOCUMENTATION-MAP**

Last updated: May 7, 2026  
Next review: When first issue ships (May 14, 2026)
