# Backtick Handling Guide — Critical for All Roles

**Date:** May 9, 2026, 12:14 AM PT  
**Status:** Essential reading for all agents  
**Relates to:** Art files, ASCII art, Telegram rendering

---

## The Golden Rule

**⭐ Agents write RAW ASCII art WITHOUT backticks (```). The bot adds backticks during Telegram rendering.**

This is the single most important formatting rule. Follow it exactly.

---

## Why This Matters

### Without Backticks (What Bot Needs)
```
My raw ASCII art
looks like plain
text in the file
```

When bot sends to Telegram:
```
```
My raw ASCII art
looks like plain
text in the file
```
```

**Result:** Renders as monospace code block in Telegram ✅

### With Backticks (WRONG)
```
```
My ASCII art
already has
backticks
```
```

When bot sends to Telegram:
```
```
```
My ASCII art
already has
backticks
```
```
```

**Result:** Shows literal backticks, breaks formatting ❌

---

## Where Backticks Go

### AGENT OUTPUT (Managing Editor writes these)

#### Art Files: `NN-SECTION-ART.txt`
```
❌ WRONG - Don't write this:
```
╔════════════════╗
║   My Visual    ║
╚════════════════╝
```

✅ CORRECT - Write this instead:
╔════════════════╗
║   My Visual    ║
╚════════════════╝
```

**Rule:** Plain ASCII, no backticks. The backticks are ONLY in the file name, not the content.

#### Cover Art: `00-COVER-ART.txt`
```
✅ CORRECT - No backticks:
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 021
Theme • Date
━━━━━━━━━━━━━━━━━━━━━━━━━
```

#### Copy Files: `NN-SECTION-COPY.md`
```
✅ CORRECT - No backticks, no escaping:
**Section Title**

Your prose here with normal markdown.
Links are plain: https://example.com

No need to escape special chars: _ * [ ] etc.
```

---

### BOT RENDERING (Bulletin Bot adds backticks automatically)

The bot's assembly methods in `bulletin_bot_impl.py` add backticks:

```python
# For old format (Issues 001-020)
def _assemble_issue_old_format():
    # ... load all art visuals ...
    act1_raw = "\n\n".join(all_visuals)
    act1 = f"```\n{act1_raw}\n```"  # ← Bot adds backticks
    return act1

# For new format (Issues 021+)
def _assemble_issue_new_format():
    # ... load all art visuals ...
    act1_raw = "\n\n".join(all_visuals)
    act1 = f"```\n{act1_raw}\n```"  # ← Bot adds backticks
    return act1
```

**Result when sent to Telegram:**
```
```
[All your ASCII art combined here]
[All your section visuals here]
[Perfect monospace formatting]
```
```

---

## Validation: Checking for Backticks

### Validator Script Checks Art Files

The `validator.py` script ensures art files have NO backticks:

```bash
python3 validator.py issues/021
```

**If backticks are found:**
```
❌ ERROR: Art file has backticks (remove them): issues/021/01-SECTION-ART.txt
   Backticks are added by the bot during rendering, not by agents.
```

**If no backticks (correct):**
```
✅ VALID
   Issue path: issues/021
   Sections: 6
   Files: 1 cover + 12 section + 1 footer = 14 total
```

### Auto-Fix Backticks

If you accidentally put backticks in art files, remove them:

```bash
# Manual removal: edit the file and delete the ``` marks

# Or auto-fix:
python3 validator.py issues/021 --fix
# Removes all backticks from art files
```

---

## Where Each Role Fits

### Managing Editor (Writing Art)
**You:** Write raw ASCII without backticks  
**Files:** `00-COVER-ART.txt`, `NN-SECTION-ART.txt`  
**Rule:** Plain ASCII art, NO backticks  
**Check:** Run `python3 validator.py issues/021` before submitting  

```
✅ Do this:
╔════════╗
║ Visual ║
╚════════╝

❌ Not this:
```
╔════════╗
║ Visual ║
╚════════╝
```
```

### Editorial Director (Validating)
**You:** Verify validator passes (no backticks found)  
**Check:** `python3 validator.py issues/021`  
**If fails:** Have Managing Editor remove backticks  
**If passes:** Approve for publishing  

```bash
# Validation command
python3 validator.py issues/021

# Expected output:
# ✅ VALID
```

### Bulletin Bot (Publishing)
**Bot:** Automatically adds backticks during rendering  
**Code:** `_assemble_issue()` methods add ``` wrapping  
**Result:** Correct monospace rendering on Telegram  

---

## Real Example: Issue 021

### What Managing Editor Writes

**File:** `issues/021/03-SECTION-ART.txt` (NO backticks)
```
╔════════════════════════════════════════╗
║  CRITICAL THINKING                     ║
║  When Objects Become Social Scripts    ║
╚════════════════════════════════════════╝

  Erving Goffman: Objects as Props

  The stage is set.
  We are all actors.
  Objects tell us our roles.
```

### What Bot Sends to Telegram

Bot code wraps it:
```python
act1 = f"```\n{act1_raw}\n```"
```

**Telegram receives:**
```
```
╔════════════════════════════════════════╗
║  CRITICAL THINKING                     ║
║  When Objects Become Social Scripts    ║
╚════════════════════════════════════════╝

  Erving Goffman: Objects as Props

  The stage is set.
  We are all actors.
  Objects tell us our roles.
```
```

**User sees:** Perfect monospace with box-drawing characters ✅

---

## Common Mistakes

### Mistake 1: Backticks in Art File

```
❌ WRONG (file content):
```
My art
```

Fix: Remove the backticks
✅ CORRECT (file content):
My art
```

**Prevention:** Run validator before submitting

---

### Mistake 2: Escaping in Copy File

```
❌ WRONG (file content):
**My Title**

This has \_escaped underscores\_ and \*escaped asterisks\*.

Fix: Remove the backslashes
✅ CORRECT (file content):
**My Title**

This has _normal underscores_ and *normal asterisks*.
```

**Prevention:** Write naturally, no escaping needed

---

### Mistake 3: Mixing Raw and Formatted

```
❌ WRONG (mixing):
File 01-SECTION-ART.txt:
```
╔═════╗
║ Art ║
╚═════╝
```

Then bot adds more:
```
```
```
╔═════╗
║ Art ║
╚═════╝
```
```
```

This creates nested backticks = broken formatting

Fix: Write raw art only
```

---

## Checklist for Managing Editor

Before submitting Issue:

- [ ] All art files have NO backticks (``)
- [ ] All cover art has NO backticks
- [ ] All copy files have NO escaping (no backslashes before `_*[]`)
- [ ] All section files exist (01 through N)
- [ ] Metadata footer exists (NN+1 file)
- [ ] Run `python3 validator.py issues/021` → shows ✅ VALID

---

## Checklist for Editorial Director

Before approving for publishing:

- [ ] Run `python3 validator.py issues/021` → shows ✅ VALID
- [ ] Check validator output: "Files: X cover + Y section + 1 footer"
- [ ] No errors mentioned about backticks or escaping
- [ ] Bot can safely render and send

---

## Implementation Details

### Files Involved

| File | Purpose | Backtick Logic |
|------|---------|------------------|
| `validator.py` | Checks art has NO backticks | Rejects ``` in art |
| `scaffold.py` | Creates template files | Templates have no ``` |
| `bulletin_bot_impl.py` | Renders for Telegram | Adds ``` to art |
| `RENDERING-PIPELINE.md` | Documents the process | Explains bot adds ``` |

### Code References

**Validator checks:**
```python
# validator.py, line 93
if "```" in content:
    self.errors.append(ValidationError("error", 
        "Cover file has backticks (remove them)"))

# validator.py, line 118
if "```" in art_content:
    self.errors.append(ValidationError("error",
        "Art file has backticks (remove them)"))
```

**Bot adds backticks:**
```python
# bulletin_bot_impl.py, line 333 (old format)
act1_raw = "\n\n".join(act1_parts)
act1 = f"```\n{act1_raw}\n```"

# bulletin_bot_impl.py, line 416 (new format)
act1_raw = "\n\n".join(act1_parts)
act1 = f"```\n{act1_raw}\n```"
```

---

## FAQ

**Q: Why doesn't the agent just write backticks?**  
A: Because the bot needs to control when/how they're added for consistent formatting. Agents output raw, bot formats.

**Q: What if I accidentally put backticks in my art file?**  
A: Run `python3 validator.py issues/021 --fix` to remove them automatically.

**Q: Do copy files need backticks?**  
A: No. Copy files should be plain markdown. The bot handles any escaping needed.

**Q: What about the metadata footer?**  
A: Raw ASCII art, no backticks. Bot will add them if needed.

**Q: How do I test my art renders correctly?**  
A: Run validator (`python3 validator.py issues/021`). If it passes, the bot will render it correctly.

---

## Summary

| Stage | Action | Backticks? |
|-------|--------|------------|
| **Write** | Managing Editor creates art files | \u274c NO |
| **Validate** | Editorial Director runs validator | \u274c Check NO |
| **Render** | Bot assembles for Telegram | \u2705 YES (bot adds) |
| **Display** | User sees on Telegram | \u2705 Monospace ✓ |

---

**Remember:** Agents write RAW. Bot formats. Telegram displays.

Keep your art files clean and backtick-free. The rest is automatic.

---

*Design By Bulletin™ — Backtick Handling Guide*  
*May 9, 2026*
