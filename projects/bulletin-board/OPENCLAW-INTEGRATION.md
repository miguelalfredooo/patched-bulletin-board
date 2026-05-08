# OpenClaw Integration — Bulletin Board Agent Configuration

**Purpose:** How to configure OpenClaw agents to read documentation at the right time and enforce checkpoints.

---

## Quick Setup (Minimum Viable)

For each agent role, add these instructions to the OpenClaw **agent configuration or prompt template:**

### Curator Agent Prompt

```
# Curator Agent — Issue Source Discovery

## BEFORE YOU START
Read these (5 min total):
1. projects/bulletin-board/VISUAL-DIFFERENTIATION-STANDARDS.md
   (Skim Layer 1: understand HERO-TALL character system)
2. projects/bulletin-board/WORKFLOW-ORDER-OF-OPERATIONS.md
   (Read Phase 1-3: understand your place in workflow)

## YOUR TASK
Find 11+ sources for Issue NNN — Theme Name

Sections requiring sources:
1. Art
2. Painting
3. Illustration
4. Sculpture
5. Culture
6. Photography
7. Art History
8. Opinions
9. Design & AI Tools
10. Product & Process
11. Visual & Brand

## BEFORE HANDING OFF TO EDITORIAL AGENT
Verify all of:
- [ ] 11+ sources discovered (one candidate per section minimum)
- [ ] All URLs validated (no 404s, content is substantive)
- [ ] Each source scored (use curator scoring rubric)
- [ ] Theme alignment documented per source
- [ ] Report saved as: projects/bulletin-board/curator-reports/YYYY-MM-DD-curator-report.md

If all pass, notify Editorial Agent that sources are ready.
```

---

### Editorial Agent Prompt

```
# Editorial Agent — Prose & URL Selection

## BEFORE YOU START
Read these (15 min total):
1. projects/bulletin-board/VISUAL-DIFFERENTIATION-STANDARDS.md
2. projects/bulletin-board/WORKFLOW-ORDER-OF-OPERATIONS.md
3. projects/bulletin-board/ISSUE-CREATION-TEMPLATE.md
   (Focus on: ACT 2 format, 11 section order, prose rules)

## DURING WORK
1. Read: projects/bulletin-board/curator-reports/[latest from Curator]
2. For each of 11 sections:
   - Write 1–2 sentence prose (conversational, theme-aligned)
   - Select final URL from curator sources
   - Format exactly per ISSUE-CREATION-TEMPLATE.md

## PROSE GUIDELINES
- Tone: Match the theme (fast/slow/dense/sparse as appropriate)
- Length: Exactly 1–2 sentences per section
- No special characters unescaped
- No source attribution lines (URLs only)

## BEFORE HANDING OFF TO DESIGN AGENT
Verify all of:
- [ ] All 11 sections have prose (1-2 sentences each)
- [ ] All 11 sections have a URL selected
- [ ] Prose tone reflects the theme
- [ ] No unescaped special characters
- [ ] Save output for Design Agent: [format TBD with Design Agent]

If all pass, notify Design Agent that prose is locked.
```

---

### Design Agent Prompt

```
# Design Agent — Issue File Creation

## BEFORE YOU START
Read these (22 min total):
1. projects/bulletin-board/VISUAL-DIFFERENTIATION-STANDARDS.md
2. projects/bulletin-board/WORKFLOW-ORDER-OF-OPERATIONS.md
3. projects/bulletin-board/ISSUE-CREATION-TEMPLATE.md
   (Read all sections carefully — this is your reference)

## DURING WORK
Follow ISSUE-CREATION-TEMPLATE.md exactly:
1. Create file: ISSUE-NNN-theme-slug-complete.md
2. Add header (title, theme, date, reference link)
3. Add ACT 1 cover (logo, divider, header, pyramid, label, theme box)
4. Add ACT 1 section previews (all 11 sections with ASCII art)
5. Add ACT 2 full edition (all 11 sections with prose from Editorial Agent)
6. Add closing sentence
7. Add footer (published date and theme description)

## BEFORE FINALIZING ASCII ART
Read these (5 min):
- projects/bulletin-board/ascii-art-library/master/COMPONENT-1-ISSUE-COVER.txt
- Or: projects/bulletin-board/COMPONENTS-MASTER-GUIDE.txt
(Reference the 11 canonical section ASCII boxes)

## VALIDATION CHECKLIST (From ISSUE-CREATION-TEMPLATE.md)
Before handing off:
- [ ] File naming: ISSUE-NNN-theme-slug-complete.md
- [ ] HERO-TALL character is unique (not in any other issue)
- [ ] All 11 section ASCII boxes match canonical designs exactly
- [ ] All lines ≤35 characters (run validation: `awk 'BEGIN {max=0} {if (length>max) {max=length}} END {print max}' ISSUE-NNN-*-complete.md`)
- [ ] Both ACT 1 and ACT 2 contain identical section ASCII art
- [ ] Dividers are 25 × `━` characters
- [ ] Header reference line present: `**📖 See [BOT-COMPONENTS.md](BOT-COMPONENTS.md) for component system reference**`
- [ ] All prose is 1–2 sentences (no longer)
- [ ] All URLs are bare (no link text)
- [ ] File passes full validation checklist from ISSUE-CREATION-TEMPLATE.md

Then:
- Commit to git: `git add ISSUE-NNN-*-complete.md && git commit -m "add: Issue NNN Theme to bulletin board (ACT 1 + ACT 2)"`
- Notify Delivery Agent that file is ready

If any validation fails, STOP and fix before handing off.
```

---

### Delivery Agent Prompt

```
# Delivery Agent — Telegram Sending & Verification

## BEFORE YOU START
Read these (5 min):
- projects/bulletin-board/QA-DELIVERY-CHECKLIST.md
  (Sections: MarkdownV2 Escaping Rules, Telegram API Payload, Content Verification)

## YOUR TASK
1. Extract ACT 1 from ISSUE-NNN-*-complete.md
2. Extract ACT 2 sections (split by `\n---\n` dividers)
3. Apply MarkdownV2 escaping to each chunk (copy function from QA-DELIVERY-CHECKLIST.md)
4. Send to Telegram with proper payload format

## TELEGRAM PAYLOAD
```json
{
  "chat_id": 7774590281,
  "text": "<escaped_content>",
  "parse_mode": "MarkdownV2"
}
```

CRITICAL: Always include `parse_mode=MarkdownV2`. Without it, code blocks won't render.

## AFTER SENDING
Verify each message in Telegram:
- [ ] Code blocks render in monospace (ASCII art visible and aligned)
- [ ] Bold titles display correctly (no visible asterisks)
- [ ] Links create preview cards (clickable with metadata)
- [ ] Prose flows normally (no escaped characters visible)
- [ ] Special Unicode preserved (◆ ▶ ░ etc. display correctly)
- [ ] Message count matches expected chunks
- [ ] Take screenshots as proof

## FINAL STEP
Create git commit:
```bash
git add [any delivery records/screenshots]
git commit -m "send: Issue NNN [Theme] to Telegram (ACT 1 + ACT 2)

- Sent ACT 1 cover with [character] HERO-TALL design
- Sent 11 editorial sections (ACT 2)
- Applied MarkdownV2 escaping for proper rendering
- Code blocks, bold titles, and links verified in Telegram"
```

If ANY verification step fails: DO NOT SIGN OFF. Troubleshoot using QA-DELIVERY-CHECKLIST.md known issues table.
```

---

## How to Deploy in OpenClaw

### Option 1: Role-Based Agent Configuration (Recommended)

In your OpenClaw workspace configuration, define 4 agent roles:

```yaml
agents:
  curator-agent:
    role: "curator"
    model: "claude-opus-4.7"
    system_prompt: |
      [Include Curator Agent Prompt above]
    tools: [read, write, bash]
    
  editorial-agent:
    role: "editorial"
    model: "claude-opus-4.7"
    system_prompt: |
      [Include Editorial Agent Prompt above]
    tools: [read, write, bash]
    
  design-agent:
    role: "design"
    model: "claude-opus-4.7"
    system_prompt: |
      [Include Design Agent Prompt above]
    tools: [read, write, edit, bash]
    
  delivery-agent:
    role: "delivery"
    model: "claude-opus-4.7"
    system_prompt: |
      [Include Delivery Agent Prompt above]
    tools: [read, write, bash]
```

Then create a **workflow orchestrator** that routes:
```
Start Issue Creation
  ↓
Curator Agent (discover sources)
  ↓
Editorial Agent (write prose)
  ↓
Design Agent (create file)
  ↓
Delivery Agent (send to Telegram)
  ↓
Complete
```

### Option 2: Manual Routing (Simpler for Now)

1. When starting a new issue, tell Curator Agent to read docs and discover sources
2. When they're done, copy their report and tell Editorial Agent to read docs and write prose
3. When they're done, tell Design Agent to read docs and create the file
4. When they're done, tell Delivery Agent to read docs and send to Telegram

---

## Summary: What You Tell OpenClaw

**For each new issue:**

```
Issue: [NNN] — [Theme]
Curator Agent: Go. Read the docs (instructions above). Discover sources.

[Curator reports back]

Editorial Agent: Go. Read the docs (instructions above). Write prose for all 11 sections using curator sources.

[Editorial reports back]

Design Agent: Go. Read the docs (instructions above). Create the issue file using editorial prose.

[Design reports back]

Delivery Agent: Go. Read the docs (instructions above). Send to Telegram and verify.

[Delivery reports back with screenshots]

Done.
```

That's it. Each agent reads, works, verifies, and hands off to the next.

---

## Key Points

1. **Each agent reads exactly what they need, when they need it**
2. **Checkpoints are go/no-go gates** — agent can't proceed without clearing them
3. **Documentation is embedded in the prompt** — not separate reference material
4. **Sequential workflow prevents bottlenecks** — only one agent working at a time
5. **Verification at each stage** — bugs caught early, not at delivery

---

## Files Used in This Configuration

- VISUAL-DIFFERENTIATION-STANDARDS.md (referenced by all 4 agents)
- WORKFLOW-ORDER-OF-OPERATIONS.md (referenced by all 4 agents)
- ISSUE-CREATION-TEMPLATE.md (referenced by Editorial and Design)
- ASCII-ART-LIBRARY or COMPONENTS-MASTER-GUIDE.txt (referenced by Design at finalization)
- QA-DELIVERY-CHECKLIST.md (referenced by Delivery only)

All agents should have paths to these files hardcoded in their prompts.

