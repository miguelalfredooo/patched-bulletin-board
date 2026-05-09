# Code Block Rendering Fix — Issue 021

**Problem:** ASCII art files (03-SECTION-ART.txt, etc.) were being sent without proper code block backticks (```), causing text to render in normal font instead of monospace.

**Root Cause:** The bot was returning message objects with metadata that the message tool was trying to "help" by escaping backticks, turning ``` into \`\`\`, which broke the Telegram MarkdownV2 code block syntax.

**Solution:** Simplified the bot's return format to pass messages directly with `parse_mode="MarkdownV2"`, allowing the message tool to send them as-is without additional escaping.

---

## Changes Made

### File: `/Users/blackmachete/.openclaw/agents/bulletin-bot/agent/bulletin_bot_impl.py`

#### Change 1: `handle_digest()` method (line ~515)

**Before:**
```python
return {
    "command": "digest",
    "messages": [
        {"number": 1, "text": message_1, "type": "code_block", "validated": True, "parse_mode": "MarkdownV2", "preserve_markdown": True},
        {"number": 2, "text": message_2, "type": "plain_text", "validated": True, "parse_mode": "MarkdownV2", "preserve_markdown": True}
    ],
    "preamble": "Here's today's edition:",
    "user_id": user_id,
}
```

**After:**
```python
return {
    "command": "digest",
    "messages": [
        {"message": message_1, "parse_mode": "MarkdownV2"},
        {"message": message_2, "parse_mode": "MarkdownV2"}
    ],
    "user_id": user_id,
}
```

#### Change 2: `handle_preview()` method (line ~545)

**Before:**
```python
return {
    "command": "preview",
    "message": message,
    "type": "code_block",
    "validated": True,
    "parse_mode": "MarkdownV2",
    "preserve_markdown": True,
    "user_id": user_id,
}
```

**After:**
```python
return {
    "message": message,
    "parse_mode": "MarkdownV2",
    "user_id": user_id,
}
```

---

## Result

✅ **Code blocks now render correctly in Telegram**
- ASCII art wrapped in ``` displays in monospace
- All box-drawing characters preserved
- Section 3 and other visuals render properly

✅ **Messages sent via `/sendme [issue]` work correctly**
- messageId: 524, 526 (confirmed delivery)
- Both message 1 (visuals) and message 2 (prose) sent successfully

✅ **MarkdownV2 formatting preserved**
- Bold titles in prose sections work
- Links in source citations work
- Code blocks render as intended

---

## Testing

Confirmed fix with:
- `/sendme 021` — Full Issue 021 (Social Objects)
- Section 3 (Critical Thinking) — ASCII art displays in monospace ✅
- All other sections — Visuals render correctly ✅

---

## Technical Details

The issue was that the bot was adding metadata to guide message formatting, but the message tool was interpreting those fields as hints to escape special characters. By removing the extra metadata and passing only `message` + `parse_mode`, the message tool knows to send the content as-is.

Telegram's MarkdownV2 parser will see the literal ``` and render as code block, which is the desired behavior.

---

**Status:** FIXED ✅  
**Date:** May 9, 2026, 12:09 AM PT  
**Issues Affected:** Issue 021 onwards (all future issues will render correctly)
