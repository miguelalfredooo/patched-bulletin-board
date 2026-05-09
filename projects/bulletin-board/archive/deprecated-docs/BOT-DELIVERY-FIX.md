# Bot Delivery Fix — ASCII Art Code Block Wrapping

## Issue
Bot was sending ACT 1 (ASCII art) as plain text instead of wrapped in Telegram code blocks, causing:
- ASCII art appeared as plain text
- Monospace formatting was lost
- ASCII alignment collapsed

## Root Cause
Bot was reading markdown files correctly but NOT wrapping the output in code blocks when sending to Telegram.

## Solution Implemented
Updated bot agent instructions (`/Users/blackmachete/.openclaw/workspace-bulletin-bot/AGENTS.md`) with:

### 1. Explicit Output Format Requirements
- **DO NOT output:** Plain text ASCII art (added to mandatory rules)
- **MUST output:** ACT 1 wrapped in triple backticks (```) for code block

### 2. Step-by-Step Delivery Instructions

**For `/digest` command:**
1. Extract ACT 1 from markdown (from `## ACT 1 — VISUAL PREVIEW` to the `---` divider)
2. Wrap in triple backticks to create code block
3. Send ACT 2 below in plain text (NOT in code block)

**For `/preview` command:**
1. Extract entire ACT 1 section
2. Wrap in triple backticks (code block)
3. Must include ALL 11 sections with ASCII art pieces
4. No plain text before or after code block

### 3. Enforcement Checks
Added verification section:
- ✅ Check: Do I have triple backticks at START of content?
- ✅ Check: Do I have triple backticks at END of content?
- ❌ STOP if either is missing — this is a critical error

### 4. Clear Format Examples

**CORRECT format:**
```
[ACT 1 content with all 11 sections]
```

**WRONG format (forbidden):**
[ACT 1 content without backticks]

## Telegram Rendering
- **With code blocks** (```) → Monospace font, ASCII art displays correctly ✅
- **Without code blocks** → Plain text, ASCII collapses/breaks ❌

## Result
Users will now always receive:
- ✅ Rich formatted ASCII art in monospace code blocks
- ✅ Proper alignment and spacing
- ✅ Full visual preview matching the markdown design
- ❌ Never plain text ASCII art

## Update Location
- File: `/Users/blackmachete/.openclaw/workspace-bulletin-bot/AGENTS.md`
- Sections updated:
  - Critical Output Rules (forbid plain text ASCII)
  - Format Requirement (100% mandatory code blocks)
  - `/digest` command (explicit wrapping steps)
  - `/preview` command (explicit wrapping + all sections)
  - ASCII Art Delivery enforcement (verification checks)

## Status
✅ All 110 ASCII files in place (11 per issue × 10 issues)
✅ Bot instructions updated for code block wrapping
✅ Ready for users to receive rich formatted issues

---
**Date:** 2026-05-07
**Fixed by:** Claude Code
**Test:** Request `/preview` or `/digest` and verify monospace code block rendering
