# 🔴 CRITICAL BUG — Bot Not Delivering ASCII Art

## Status: BLOCKING

Users are receiving **ONLY ACT 2 (prose)** without **ACT 1 (ASCII visual sections)**.

## What Users Are Getting

```
ISSUE 006 — MOMENTUM (May 9, 2026)

Art — Fast-Moving Practice
Artists working at scale and speed...
[... 11 prose sections with no visual ...]

Closing sentence here.
```

## What Users Should Get

```
[code block starts]
██████╗ ██████╗ ██████╗ ™
Design By Bulletin™
━━━━━━━━━━━━━━━━
Issue 006
Momentum
May 9, 2026

### Section 1 — Art
[11 ASCII art pieces here]

### Section 2 — Painting
[ASCII]
... [all 11 sections with ASCII] ...
[code block ends]
```

Then ACT 2 prose below.

## Root Cause
Bot is extracting only the ACT 2 section from markdown files and completely skipping ACT 1.

**Markdown structure bot should read:**
```markdown
# Design By Bulletin™ — Issue 006

## ACT 1 — VISUAL PREVIEW          ← Should extract FROM here
[logo, sections 1-11 with ASCII]
---                                 ← Should extract TO here

## ACT 2 — FULL EDITION            ← Currently extracting FROM here only
[11 prose sections]
---
```

## What Was Done to Fix

1. ✅ Created 110 ASCII art files (11 per issue × 10 issues)
2. ✅ Embedded ACT 1 in all 10 issue markdown files
3. ✅ Updated bot AGENTS.md with explicit instructions
4. ✅ Created OUTPUT-TEMPLATE.md showing correct format
5. ✅ Created CRITICAL-FIX-REQUIRED.md in workspace

## What Still Needs to Happen

**Bot agent must be restarted/reloaded** to:
1. Read updated AGENTS.md instructions
2. Implement correct markdown section extraction (ACT 1 → ACT 2)
3. Wrap ACT 1 in code blocks for Telegram
4. Test with `/preview 006` and `/digest 006`

## Testing Checklist

- [ ] `/preview 006` returns code block with all 11 ASCII sections
- [ ] `/digest 006` returns code block (ACT 1) + plain text (ACT 2)
- [ ] ASCII art displays in monospace font in Telegram
- [ ] All 11 sections visible: Art, Painting, Illustration, etc.
- [ ] No plain text ASCII (always in code blocks)

## Files to Check

- Bot workspace: `/Users/blackmachete/.openclaw/workspace-bulletin-bot/AGENTS.md`
- Issue files: All `/projects/bulletin-board/ISSUE-*.md` have proper ACT 1 + ACT 2
- ASCII library: All 110 files in `/projects/bulletin-board/ascii-art-library/`

## Impact

- 🔴 **CRITICAL**: Core magazine feature broken — no visual preview
- ❌ Users cannot see ASCII art at all
- ❌ Magazine appears as text-only instead of visual+text hybrid

---
**Created:** 2026-05-07
**Priority:** BLOCKING - Must fix before users can see ASCII art
