# Archive — Design By Bulletin™

**Date:** 2026-05-08  
**Reason:** Consolidation to canonical specs, fresh issue template

This archive contains deprecated documentation, old working notes, and archived issues.

## What's Here

### issues-archive/
All 16 published issues (001-016) in the old manifest-driven structure.
- Each issue has: `manifest.json`, `act-1/` (visuals), `act-2/` (prose)
- Status: Archived on 2026-05-08 when starting fresh with new template
- Reference: See `issues-archive/README.md` for details

### deprecated-docs/
Old specs and working notes that informed the unified rendering pipeline:
- `FORMATTING-RULES.md`, `BOT-*.md`, `*DEPLOYMENT*.md` (replaced by RENDERING-PIPELINE.md)
- All `ISSUE-*-complete.md` and `ISSUE-*-SECTION-ART.md` (old issue structure)
- ASCII art collections and asset guides
- Agent onboarding and role instructions (now single rule: output raw unformatted content)

### old-sessions/
Historical session notes and decision logs (if needed for reference).

### old-workspaces/
Snapshots of agent workspace configs before consolidation (if needed for recovery).

## Active Documentation

**Canonical files (in parent directory):**
- `RENDERING-PIPELINE.md` — Three-stage pipeline: Agent Output → Validation → Telegram Rendering
- `validator.py` — Automated validator (agents and editorial use this)
- `archive-log.md` — Publication record of all issues
- `README.md` — Quick start guide

## If You Need Something

Look in `deprecated-docs/` — it's all there. But prefer the canonical docs first.

## Migration Notes

**From old workflow to new:**
1. Agents output raw content (no backticks, no escaping)
2. Editorial Director runs `python validator.py issues/[number]`
3. Bulletin Bot reads raw content and applies formatting at send time

**No more:**
- Double escaping
- Backtick confusion
- Competing specs
- Formatting in the agent layer
