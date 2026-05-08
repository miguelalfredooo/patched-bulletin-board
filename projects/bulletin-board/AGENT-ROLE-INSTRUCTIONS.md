# Agent Role Instructions — Documentation & Workflow Integration

**Purpose:** Define what each agent role reads, when they read it, and what they need to execute.

---

## CURATOR AGENT

**Role:** Discover, validate, and score sources for a new issue

**Before starting, read (5 min):**
```
- VISUAL-DIFFERENTIATION-STANDARDS.md (understand the issue identity)
- WORKFLOW-ORDER-OF-OPERATIONS.md Phase 3 (understand your place in the workflow)
```

**Your checkpoint before reporting:**
- [ ] Found 11+ candidate sources (one per section)
- [ ] Validated all URLs (no 404s, content is substantive)
- [ ] Scored each source (curator scoring rubric)
- [ ] Documented theme alignment per source
- [ ] Ready to hand off to Editorial Agent

**Output:** `curator-reports/YYYY-MM-DD-curator-report.md`

---

## EDITORIAL AGENT

**Role:** Write prose and select final URLs for all 11 sections

**Before starting, read (15 min):**
```
- VISUAL-DIFFERENTIATION-STANDARDS.md (understand visual constraints)
- WORKFLOW-ORDER-OF-OPERATIONS.md Phases 1-3 (understand context setup)
- ISSUE-CREATION-TEMPLATE.md (understand format and section order)
```

**As you work:**
- Read curator report to understand source options
- Write 1–2 sentence prose per section (conversational tone, theme-aligned)
- Select final URL from curator sources
- Format each section exactly per ISSUE-CREATION-TEMPLATE.md

**Your checkpoint before handing off:**
- [ ] All 11 sections have prose (1-2 sentences each)
- [ ] All 11 sections have a URL selected
- [ ] Prose tone reflects the theme
- [ ] No special characters unescaped
- [ ] Ready to hand off to Design Agent

**Output:** Prose content (will be inserted into issue file by Design Agent)

---

## DESIGN AGENT

**Role:** Create the complete issue file with HERO-TALL pyramid and ASCII art

**Before starting, read (22 min):**
```
- VISUAL-DIFFERENTIATION-STANDARDS.md (understand character system and section boxes)
- WORKFLOW-ORDER-OF-OPERATIONS.md (understand end-to-end process)
- ISSUE-CREATION-TEMPLATE.md (understand exact file format)
```

**Before finalizing, read (5 min):**
```
- ASCII-ART-LIBRARY or COMPONENTS-MASTER-GUIDE.txt (canonical section boxes reference)
```

**Your workflow:**
1. Create new ISSUE-NNN-theme-complete.md file
2. Add header (title, theme, date, reference line)
3. Generate HERO-TALL pyramid (15 rows, using assigned character)
4. Add ACT 1 visual preview with all 11 section ASCII boxes
5. Add ACT 2 full edition with all 11 sections (prose from Editorial Agent)
6. Add closing sentence and metadata
7. Validate entire file against ISSUE-CREATION-TEMPLATE.md checklist

**Your checkpoint before handing off:**
- [ ] File naming is correct (ISSUE-NNN-theme-slug-complete.md)
- [ ] HERO-TALL character is unique (not used in any other issue)
- [ ] All 11 section ASCII boxes match canonical designs exactly
- [ ] All line widths ≤35 chars
- [ ] Both ACT 1 and ACT 2 contain identical section ASCII art
- [ ] Dividers are 25 × `━` characters
- [ ] Ready to hand off to Delivery Agent

**Output:** `ISSUE-NNN-theme-complete.md` (committed to git)

---

## DELIVERY AGENT

**Role:** Format content and send to Telegram with proper escaping and verification

**Before starting, read (5 min):**
```
- QA-DELIVERY-CHECKLIST.md (escaping rules, API payload format, verification)
```

**Your workflow:**
1. Extract ACT 1 section from issue file
2. Extract ACT 2 sections (split by `---` dividers)
3. Apply MarkdownV2 escaping function to each chunk
4. Build Telegram API payload with correct chat_id and parse_mode
5. Send each chunk as separate message
6. Verify each message in Telegram (code blocks render, bold works, links preview)
7. Take screenshots as proof of delivery
8. Commit delivery record to git

**Your checkpoint before sign-off:**
- [ ] All code blocks render in monospace
- [ ] All bold titles display without visible asterisks
- [ ] All links create preview cards
- [ ] No escaped characters visible to user
- [ ] Message count matches expected chunks
- [ ] Screenshots saved for audit trail
- [ ] Git commit created with delivery details

**Output:** Telegram messages + delivery confirmation in git

---

## QUICK AGENT CHECKLIST

| Agent | Foundational Read | During Work | Pre-Handoff |
|-------|-------------------|------------|------------|
| **Curator** | Visual + Workflow (5 min) | Curator report | 11 sources, validated, scored |
| **Editorial** | Visual + Workflow + Template (15 min) | Prose for all 11 sections | All prose written, URLs selected |
| **Design** | Visual + Workflow + Template (22 min) + ASCII (5 min) | File creation, pyramid, boxes | File complete, validated |
| **Delivery** | QA Checklist (5 min) | Escaping, API calls, verification | Sent, verified, documented |

---

## How OpenClaw Routes This

Each agent should receive these instructions at task start:

```
Agent: [CURATOR|EDITORIAL|DESIGN|DELIVERY]

Read these documents first (no exceptions):
[Foundational reads from above]

Then:
[Specific workflow for this agent]

Before handing off, verify:
[Checkpoint items]

If stuck, reference:
[Key documents]
```

OpenClaw should:
1. Define 4 agent roles (curator, editorial, design, delivery)
2. Assign each role its foundational reading list
3. Route tasks sequentially (curator → editorial → design → delivery)
4. Insert documentation links in agent prompts
5. Use checkpoint items as go/no-go gates before handoff

---

## Example: How to Write Agent Prompt in OpenClaw

```
---
role: design-agent
tools: [read, write, edit, bash]
---

# Design Agent — Issue Creation

Before starting ANY work, read these documents:
- VISUAL-DIFFERENTIATION-STANDARDS.md (8 min)
- WORKFLOW-ORDER-OF-OPERATIONS.md (4 min)
- ISSUE-CREATION-TEMPLATE.md (10 min)

Your task: Create ISSUE-NNN-theme-complete.md file

Steps:
1. Read the curator report: projects/bulletin-board/curator-reports/[latest]
2. Read the editorial prose: [link or file provided by Editorial Agent]
3. Create issue file following ISSUE-CREATION-TEMPLATE.md exactly
4. Before finalizing ASCII art, read: ASCII-ART-LIBRARY or COMPONENTS-MASTER-GUIDE.txt
5. Validate using the checklist in ISSUE-CREATION-TEMPLATE.md

Handoff checkpoint (must pass all):
- [ ] File is named ISSUE-NNN-theme-slug-complete.md
- [ ] HERO-TALL character is unique
- [ ] All 11 section ASCII boxes match canonical designs
- [ ] All lines ≤35 characters
- [ ] File passes validation checklist

If ready, create a final commit and notify Delivery Agent.
```

---

## Embedding in WORKFLOW-ORDER-OF-OPERATIONS

The main workflow doc should have a new section:

```
## PHASE 0A: AGENT DOCUMENTATION CHECKPOINT

Before any agent starts work on this issue:
- Curator Agent reads: VISUAL-DIFFERENTIATION-STANDARDS.md + WORKFLOW-ORDER-OF-OPERATIONS.md (5 min)
- Editorial Agent reads: VISUAL-DIFFERENTIATION-STANDARDS.md + WORKFLOW-ORDER-OF-OPERATIONS.md + ISSUE-CREATION-TEMPLATE.md (15 min)
- Design Agent reads: Same as Editorial + ASCII-ART-LIBRARY (20 min)
- Delivery Agent reads: QA-DELIVERY-CHECKLIST.md (5 min)

This is a hard requirement. No agent starts work without these reads completed.
```

---

## Decision: Who Tells Them?

**Option 1: OpenClaw Configuration (Recommended)**
- Configure each agent role in OpenClaw with reading instructions
- Agent reads docs as part of task initialization
- Automatic, enforced, no manual hand-holding needed

**Option 2: Manual Prompts**
- You write a prompt to each agent saying "read X before starting"
- Agent reads, confirms, then starts work
- More flexible but requires you to repeat instructions each time

**Option 3: Hybrid**
- OpenClaw has base instructions (read foundational docs on first task)
- For subsequent tasks in the same issue, just reference the docs
- Reduces redundant reading while maintaining guardrails

**Recommendation:** Use Option 1 (OpenClaw config) for consistency. Each agent should have these reads baked into their role definition, not left to manual prompting.

