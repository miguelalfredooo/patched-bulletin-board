# Cleanup Summary — 2026-05-08

## What Happened

Consolidated bloated documentation across bulletin-board project and agent workspaces into canonical spec + focused agent roles.

## Before

**Project folder:** 68 markdown files (mostly deprecated working notes)
- BOT-STANDARD-REPLY-SPEC.md
- ASCII-CODE-BLOCK-RULE.md
- MESSAGE-FORMATTER.md
- FORMATTING-ENFORCEMENT.md
- 64 other files (old issue specs, ASCII collections, deployment guides, etc.)

**Agent workspaces:** 113 markdown files across 6 agents
- bulletin-assignment: 43 files
- bulletin-bot: 36 files
- bulletin-editorial: 13 files
- bulletin-curator: 8 files
- bulletin-managing: 7 files
- bulletin-public: 6 files

**Problem:** Same rules defined 5 different ways. Agents confused about output format. Competing specs everywhere.

## After

**Project folder:** 5 canonical files at root
- `RENDERING-PIPELINE.md` — Three-stage spec (Stage 1: Agent Output, Stage 2: Validation, Stage 3: Telegram Rendering)
- `validator.py` — Automated validator (enforces pipeline)
- `archive-log.md` — Publication record
- `README.md` — Entry point
- `ISSUE-CREATION-TEMPLATE.md` — Reference

Plus:
- `archive/deprecated-docs/` — 63 old working notes (preserved for reference)

**Agent workspaces:** 5 clean files per agent
- `AGENTS.md` — Role description + key commands (1-2 pages, no implementation details)
- `SOUL.md` — Voice and tone (unchanged)
- `IDENTITY.md` — Who you are (unchanged)
- `TOOLS.md` — Environment setup (unchanged)
- `HEARTBEAT.md` — Heartbeat tasks (unchanged)

Plus:
- `archive/` in each workspace — Old working docs preserved but out of the way

## What Each Agent Now Does

**CURATOR**
- Read: AGENTS.md (role + scoring rubric)
- Do: Scan sources, validate URLs, score on 4 dimensions, send daily report to Assignment Editor
- Format: Plain markdown, plain links

**ASSIGNMENT EDITOR**
- Read: AGENTS.md (role + commissioning framework)
- Do: Review curator reports, identify gaps, propose commissions, brief Managing Editor
- Format: Plain text commissions with angle, direction, and references

**MANAGING EDITOR**
- Read: AGENTS.md (role + voice/tone standards)
- Do: Write 11 sections of prose (2-4 sentences each, 60-120 words)
- Format: Plain prose with links (no backticks, no escaping)
- Link to: RENDERING-PIPELINE.md for output format clarification

**EDITORIAL DIRECTOR**
- Read: AGENTS.md (role + validation checklist)
- Do: Validate structure, preview, approve, send
- Commands:
  - `python validator.py issues/[number]` — Check structure
  - `/admin-preview [number]` — See how it renders
  - `/admin-send-issue [number]` — Send to subscribers
- Link to: RENDERING-PIPELINE.md Stage 2 for validation details

**BULLETIN BOT**
- Read: AGENTS.md (role + key commands)
- Do: Receive Telegram commands, load issues, apply formatting, send
- Format: Read raw content, wrap ASCII in code blocks, escape prose, send with MarkdownV2
- Link to: RENDERING-PIPELINE.md Stage 3 for implementation

## One Rule For All Agents

**Output raw unformatted content. No backticks, no escaping. The pipeline handles rendering.**

- Agents write content as it should appear in any article
- Editorial Director validates structure with validator.py
- Bulletin Bot applies Telegram formatting at send time

## File Moved / Archived

**Project folder (63 files moved to archive/deprecated-docs/):**
- All ISSUE-*-complete.md files
- All ISSUE-*-SECTION-ART.md files
- FORMATTING-RULES.md
- DEPLOYMENT-GUIDE.md
- BOT-COMPONENTS.md
- All ASCII art collections
- All setup and onboarding docs
- All workflow and decision docs

**Agent workspaces (83 files moved to archive/):**
- bulletin-assignment: 38 files → archive/
- bulletin-bot: 31 files → archive/
- bulletin-curator: 3 files → archive/
- bulletin-editorial: 8 files → archive/
- bulletin-managing: 2 files → archive/
- bulletin-public: 1 file → archive/

## Validation Status

✅ Issue 016 — Cleaned (removed 11 backticks from act-1), now valid
✅ Issue 015 — Already clean, valid
✅ validator.py — Tested and working

## Next Steps

1. Verify agents understand their new AGENTS.md
2. Test full workflow: Assignment → Managing → Editorial → Bot
3. Update any cron jobs or external references to point to canonical docs
4. Commit to git

---

**Result:** From 113 scattered markdown files to 5 focused files per agent + 1 canonical pipeline spec. Clear roles. One source of truth.
