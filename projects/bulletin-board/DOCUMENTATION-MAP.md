# Documentation Map — How Everything Connects

**Purpose:** Show how the 7 core documents relate to each other and when to use each one.

---

## THE SYSTEM IN ONE DIAGRAM

```
┌─────────────────────────────────────────────────────────────┐
│           VISUAL DIFFERENTIATION STANDARDS                  │
│  (Design constraints: HERO-TALL characters, section boxes)  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│        WORKFLOW ORDER OF OPERATIONS (8 Phases)              │
│  (Process overview: curator → editorial → design → delivery)│
└─────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────┴───────────────────┐
        ↓                                       ↓
┌──────────────────────┐          ┌──────────────────────┐
│  AGENT ONBOARDING    │          │  AGENT ROLE INSTR.   │
│  (Reading order)     │          │  (Checkpoint lists)  │
└──────────────────────┘          └──────────────────────┘
        ↓                                       ↓
        └───────────────────┬───────────────────┘
                            ↓
        ┌────────┬──────────┼──────────┬────────┐
        ↓        ↓          ↓          ↓        ↓
      Curator  Editorial  Design    Delivery  [Ref]
        ↓        ↓          ↓          ↓        ↓
       [–]   [Template] [Template] [QA-C.]  [Comp.]
                [ASCII]             [Escape]
```

---

## THE 7 CORE DOCUMENTS

### Layer 1: Foundation (Everyone Reads These)

#### **1. VISUAL-DIFFERENTIATION-STANDARDS.md**
- **Purpose:** Understand what makes each issue visually unique
- **Covers:** HERO-TALL character system, canonical section boxes, design constraints
- **When to read:** First. Before anything else. Sets the foundation for all downstream decisions.
- **Read by:** All 4 agents (curator, editorial, design, delivery)
- **Time:** 8 minutes

#### **2. WORKFLOW-ORDER-OF-OPERATIONS.md**
- **Purpose:** Understand the end-to-end process from project open to Telegram delivery
- **Covers:** 8 phases, what happens before/during/after each, dependency order
- **When to read:** Right after visual standards. Establishes the process so specific steps make sense.
- **Read by:** All 4 agents
- **Time:** 10 minutes

---

### Layer 2: Navigation (How to Start)

#### **3. AGENT-ONBOARDING-ORDER.md**
- **Purpose:** Tell you what to read in what order and when
- **Covers:** Foundational reading vs. just-in-time reading, checkpoints per phase
- **When to read:** First time on the project. Answers "what do I read?"
- **Read by:** Humans onboarding to the project, or reference by agent orchestrators
- **Time:** 5 minutes (skimmable)

#### **4. AGENT-ROLE-INSTRUCTIONS.md**
- **Purpose:** Define each agent's specific task, reading list, and checkpoint
- **Covers:** Curator, Editorial, Design, Delivery roles with step-by-step instructions
- **When to read:** Before assigning an agent to a role. Tells you what to tell them.
- **Read by:** You (when configuring agents), or directly embedded in agent prompts
- **Time:** 5 minutes per role

---

### Layer 3: Execution (During Work)

#### **5. ISSUE-CREATION-TEMPLATE.md**
- **Purpose:** Reference for exact file format, naming, structure
- **Covers:** File naming convention, header format, ACT 1/ACT 2 structure, HERO-TALL formula, validation checklist
- **When to read:** As you're creating the issue file. Just-in-time reference.
- **Read by:** Editorial Agent (focuses on section order, prose rules) and Design Agent (full reference)
- **Time:** 10 minutes (can be skimmed for specific sections)

#### **6. QA-DELIVERY-CHECKLIST.md**
- **Purpose:** Verification and Telegram delivery standards
- **Covers:** MarkdownV2 escaping function, Telegram API payload, post-send verification, known issues
- **When to read:** Right before sending to Telegram. Just-in-time reference.
- **Read by:** Delivery Agent only
- **Time:** 5 minutes

---

### Layer 4: Integration (How to Automate)

#### **7. OPENCLAW-INTEGRATION.md**
- **Purpose:** How to configure OpenClaw agents with documentation reading and checkpoints
- **Covers:** Agent prompt templates (Curator, Editorial, Design, Delivery), workflow orchestration, deployment options
- **When to read:** When setting up the multi-agent system. Reference for prompt engineering.
- **Read by:** You (when configuring OpenClaw), or as a guide for agent system design
- **Time:** 15 minutes

---

## READING PATHS BY USER TYPE

### Path 1: New Human Agent (40 min total)

1. **VISUAL-DIFFERENTIATION-STANDARDS.md** (8 min) — Understand the system
2. **WORKFLOW-ORDER-OF-OPERATIONS.md** (10 min) — Understand the process
3. **AGENT-ONBOARDING-ORDER.md** (5 min) — Where to go next
4. **ISSUE-CREATION-TEMPLATE.md** (10 min) — Format reference
5. **QA-DELIVERY-CHECKLIST.md** (5 min) — Delivery standards
6. **Then:** Ask "what's my role?" and read the relevant agent role instructions

### Path 2: Configuring OpenClaw (20 min total)

1. **AGENT-ROLE-INSTRUCTIONS.md** (10 min) — Understand each role
2. **OPENCLAW-INTEGRATION.md** (10 min) — Implementation

Then copy-paste the agent prompts from OPENCLAW-INTEGRATION.md into your OpenClaw config.

### Path 3: Just Sending an Issue (5 min)

You have an issue file ready. You just need to:
1. **QA-DELIVERY-CHECKLIST.md** (5 min) — Copy the escape function and send

### Path 4: Stuck / Confused

Refer back to:
- **VISUAL-DIFFERENTIATION-STANDARDS.md** — If you need to understand design constraints
- **WORKFLOW-ORDER-OF-OPERATIONS.md** — If you need to understand the process
- **AGENT-ROLE-INSTRUCTIONS.md** — If you need to remember what an agent should do

---

## HOW DOCUMENTS REFERENCE EACH OTHER

```
VISUAL-DIFFERENTIATON-STANDARDS.md
  ↓ defines the design system
  ↓ informs everything below
  
WORKFLOW-ORDER-OF-OPERATIONS.md
  ↓ describes the 8-phase process
  ↓ Phase 0A: agents read documentation
  
AGENT-ONBOARDING-ORDER.md
  ↓ says "read these in this order"
  ↓ points to each document below
  
AGENT-ROLE-INSTRUCTIONS.md
  ↓ says "Curator reads VISUAL + WORKFLOW"
  ↓ says "Editorial reads VISUAL + WORKFLOW + TEMPLATE"
  ↓ says "Design reads VISUAL + WORKFLOW + TEMPLATE + ASCII"
  ↓ says "Delivery reads QA"
  
ISSUE-CREATION-TEMPLATE.md
  ↓ says "follow this exact format"
  ↓ contains copy-paste empty template
  ↓ contains validation checklist
  
QA-DELIVERY-CHECKLIST.md
  ↓ says "use this escape function"
  ↓ says "use this API payload format"
  ↓ says "verify these checks"
  
OPENCLAW-INTEGRATION.md
  ↓ embeds all agent prompts above
  ↓ references VISUAL-DIFFERENTIATON-STANDARDS.md, etc.
```

---

## DECISION TREE: "Which Document Do I Need?"

**I'm starting work on the project**
→ Read AGENT-ONBOARDING-ORDER.md (it tells you what to read)

**I'm configuring OpenClaw agents**
→ Read AGENT-ROLE-INSTRUCTIONS.md, then OPENCLAW-INTEGRATION.md

**I'm writing editorial prose**
→ Have ISSUE-CREATION-TEMPLATE.md open (format reference)

**I'm creating the issue file**
→ Have ISSUE-CREATION-TEMPLATE.md open (exact format + validation)

**I'm finalizing ASCII art**
→ Reference VISUAL-DIFFERENTIATION-STANDARDS.md (canonical section boxes)

**I'm sending to Telegram**
→ Have QA-DELIVERY-CHECKLIST.md open (escape function + verification)

**I don't understand a constraint**
→ VISUAL-DIFFERENTIATION-STANDARDS.md (explains the why)

**I don't understand the workflow**
→ WORKFLOW-ORDER-OF-OPERATIONS.md (explains each phase)

**I'm lost**
→ AGENT-ONBOARDING-ORDER.md (re-orient yourself)

---

## The Chain of Causality

```
Visual Differentiation Standards
  ↓ establishes what's fixed vs. what varies
  ↓
Workflow Order of Operations
  ↓ defines how work flows through the system
  ↓
Agent Onboarding Order
  ↓ tells you what to read in what sequence
  ↓
Agent Role Instructions
  ↓ tells each agent what they specifically need to do
  ↓
Issue Creation Template
  ↓ provides the exact format to build
  ↓
QA Delivery Checklist
  ↓ verifies the output and sends it
  ↓
OpenClaw Integration
  ↓ automates the whole thing with agents
```

Each document depends on understanding the ones above it.

---

## File Sizes & Reading Times

| Document | Size | Read Time | Skim Time |
|----------|------|-----------|-----------|
| VISUAL-DIFFERENTIATION-STANDARDS.md | 10 KB | 8 min | 3 min |
| WORKFLOW-ORDER-OF-OPERATIONS.md | 12 KB | 10 min | 4 min |
| AGENT-ONBOARDING-ORDER.md | 6 KB | 5 min | 2 min |
| AGENT-ROLE-INSTRUCTIONS.md | 10 KB | 15 min | 5 min |
| ISSUE-CREATION-TEMPLATE.md | 16 KB | 15 min | 8 min |
| QA-DELIVERY-CHECKLIST.md | 7 KB | 5 min | 2 min |
| OPENCLAW-INTEGRATION.md | 14 KB | 15 min | 6 min |
| **TOTAL** | **75 KB** | **73 min** | **30 min** |

**For new humans:** Budget 40 min (skip some reference sections)  
**For OpenClaw setup:** Budget 20 min  
**For recurring tasks:** Budget 5 min (just QA checklist)

---

## Key Insight

This documentation system is **workflow-aware**, not linear. You don't read everything upfront. Instead:

1. **Foundation (once):** VISUAL-DIFFERENTIATION-STANDARDS + WORKFLOW-ORDER-OF-OPERATIONS
2. **Just-in-time (as needed):** ISSUE-CREATION-TEMPLATE when creating, QA-DELIVERY-CHECKLIST when sending
3. **ASCII rules:** Read when prose is locked, not before

This prevents context-switching and keeps documentation where it's actually useful in the workflow.

