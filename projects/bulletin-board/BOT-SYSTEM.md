# Design By Bulletin™ Bot System

## Overview

The bot automatically publishes finalized issues to Telegram by reading the archive log and tracking publication state.

---

## Workflow

### 1. Editorial Pipeline (4 Agents)
```
ED Brief → ME Copy → Art Visuals → ED Approval
```

### 2. Automatic Registration
When ED approves:
```bash
bash register-with-bot.sh [NUMBER] [THEME]
```
Updates `archive-log.md`:
```
| [NUMBER] | [THEME] | Date | finalized | ✅ PASS | issues/[NUMBER]/ |
```

### 3. Automatic Publication (Bot)
**Cron job:** Runs hourly at `:00` PT

**Bot script:** `dbb-bot.sh`
- Reads `archive-log.md` for `finalized | ✅ PASS` entries
- Checks `.bot-published.txt` to avoid duplicates
- Publishes cover + 11 sections + footer
- Marks issue as published

---

## Bot Commands

### Publish all pending
```bash
bash dbb-bot.sh --publish-all
```
Scans archive log, publishes new finalized issues.

### Publish specific issue
```bash
bash dbb-bot.sh --issue 107
```
Publishes Issue 107 if not already published.

### Check publication status
```bash
bash dbb-bot.sh --status
```
Shows list of published issues.

### Reset publication history
```bash
bash dbb-bot.sh --reset
```
Clears `.bot-published.txt` (allows re-publishing).

---

## Files

**Archive Log:** `archive-log.md`
- Single source of truth
- ED updates via `register-with-bot.sh`
- Bot reads for finalized issues

**Publication State:** `.bot-published.txt`
- Tracks published issues (one per line)
- Prevents duplicates
- Human-readable format

**Bot Script:** `dbb-bot.sh`
- Reads archive log
- Builds messages from `/issues/[NUMBER]/*` files
- Sends via OpenClaw message tool
- Updates publication state

**Cron Job:** OpenClaw gateway
- Job ID: `4cbb7dd6-b4fa-45d1-9871-d289420ce5e5`
- Schedule: Hourly at `:00` PT
- Target: Telegram `7774590281`
- Mode: Isolated subagent

---

## Message Format

Each issue sends:
1. **Cover** (30 lines, 34 chars wide)
2. **Sections 1-11** (each with art + copy + URLs)
3. **Footer** (closing statement)

Rate limiting:
- 2 seconds between issues
- 1 second between sections
- Prevents Telegram rate limits

---

## Status

✅ **System Operational**
- Bot script created and tested
- Cron job scheduled and active
- All 28 issues (003-026, 103-107) successfully published on first run
- Publication tracking working (no duplicates)

✅ **Pipeline Fully Functional**
- ED → ME → Art → ED → Bot registration → Bot publication
- Teams observe at every step
- Quality gates enforced
- Automatic registration implemented

---

## Testing

Run bot immediately:
```bash
bash ~/projects/patched-editorial/projects/bulletin-board/dbb-bot.sh --publish-all
```

Check next scheduled run:
```bash
openclaw cron list | grep "Design By Bulletin"
```

View publication history:
```bash
cat ~/projects/patched-editorial/projects/bulletin-board/.bot-published.txt
```

---

## Next Steps

When new issues are created:
1. ED writes brief
2. ME writes copy
3. Art creates visuals
4. ED approves + runs `register-with-bot.sh [NUMBER] [THEME]`
5. Bot publishes automatically next hour (or manually with `--publish-all`)

No manual Telegram posting needed. Archive log + bot handle everything.
