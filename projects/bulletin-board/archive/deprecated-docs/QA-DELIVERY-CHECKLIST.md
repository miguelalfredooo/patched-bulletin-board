# Design By Bulletin™ — QA Delivery Checklist

**Last Updated:** May 7, 2026  
**Standard Version:** 1.0

---

## TELEGRAM DELIVERY STANDARD

### Before Sending

- [ ] Extract correct section from markdown file (ACT 1 or ACT 2)
- [ ] Split content by `\n---\n` dividers to create message chunks
- [ ] Apply MarkdownV2 escaping (see below)
- [ ] Verify no section exceeds Telegram message size limit (~4096 chars)

### MarkdownV2 Escaping Rules (CRITICAL)

**Must escape these characters EVERYWHERE except inside code blocks:**
```
_ * [ ] ( ) ~ ` > # + - = | { } . !
```

**Implementation:**
```python
import re

def escape_markdown_v2(text):
    """Escape special chars for MarkdownV2, preserving code blocks"""
    parts = re.split(r'(```[\s\S]*?```)', text)
    result = []
    for i, part in enumerate(parts):
        if part.startswith('```'):  # Code block—preserve as-is
            result.append(part)
        else:  # Escape special characters
            escaped = re.sub(r'([\[\]()~`>#+=\-|{}._!])', r'\\\1', part)
            result.append(escaped)
    return ''.join(result)
```

### Telegram API Payload

**Required fields:**
```json
{
  "chat_id": 7774590281,
  "text": "<escaped_content>",
  "parse_mode": "MarkdownV2"
}
```

**ALWAYS include `parse_mode=MarkdownV2`** — without it:
- Code blocks won't render (backticks show literally)
- Bold won't work (`**text**` appears as literal asterisks)

### Content Verification (POST-SEND)

Check each message in Telegram for:

- [ ] **Code blocks render in monospace** — ASCII art visible and aligned
- [ ] **Bold titles display correctly** — `**Section Title**` appears bold, no asterisks visible
- [ ] **Links render as preview cards** — URLs become clickable with metadata
- [ ] **Prose flows normally** — no escaped characters visible to user
- [ ] **Special Unicode characters preserved** — ◆ ▶ ░ etc. display correctly

---

## ACT 1 FORMAT

**Content:** Cover design + 11 section ASCII previews  
**Wrapping:** Triple backticks (```)  
**Markup:** None (code block handles formatting)  
**Delivery:** Single message per issue  

**Checklist:**
- [ ] Starts with "## ACT 1 — VISUAL PREVIEW"
- [ ] Contains Design By Bulletin™ logo (ASCII art)
- [ ] Contains issue number, theme, date
- [ ] Contains all 11 section headers + ASCII art
- [ ] Ends before "---" divider (before ACT 2)
- [ ] Wrapped in ``` for code block

---

## ACT 2 FORMAT

**Content:** 11 editorial sections (art, prose, links)  
**Structure per section:**
```
```
[ASCII art in code block]
```

**Section Title — Descriptor**

Prose description (1-2 sentences).

[Optional link]
```

**Delivery:** Split by `\n---\n` dividers = individual messages  
**Markup:** MarkdownV2 escaping applied throughout  

**Checklist per section:**
- [ ] ASCII art wrapped in triple backticks
- [ ] Section title formatted as `**Title — Descriptor**`
- [ ] Prose is 1-2 sentences, conversational
- [ ] Links (if present) are bare URLs
- [ ] No source attribution lines (links only)
- [ ] Proper MarkdownV2 escaping applied before sending

---

## SPECIAL CHARACTERS GUIDE

### Safe Inside Code Blocks
No escaping needed for content between ``` markers:
- ASCII art symbols: ◆ ▶ ░ ▒ ▓ ► ▲ ─ │ ◇ ○ ■ etc.
- Box drawing: ┌ ┐ └ ┘ ─ │ ├ ┤ ┬ ┴ ┼ ╔ ╗ ╚ ╝ etc.
- All punctuation inside backticks

### Must Escape Outside Code Blocks
```
_underscore_ → \_underscore\_
*asterisk* → \*asterisk\*
[bracket] → \[bracket\]
(paren) → \(paren\)
~tilde~ → \~tilde\~
`backtick` → \`backtick\`
>greater → \>greater
#hash → \#hash
+plus → \+plus
-dash → \-dash
=equals → \=equals
|pipe → \|pipe
{brace} → \{brace\}
.period → \.period
!exclaim → \!exclaim
```

---

## TELEGRAM BOT CREDENTIALS

**Bot:** @DesignByBulletin_bot  
**Token:** `8649394460:AAE-qmm0kZWk0g7DtGiFwJsloSlzO1aUFiU`  
**Chat ID:** `7774590281` (Alfred)  
**API Endpoint:** `https://api.telegram.org/bot{token}/sendMessage`

---

## PYTHON DELIVERY TEMPLATE

```python
import urllib.request, json, urllib.parse, re

BOT_TOKEN = '8649394460:AAE-qmm0kZWk0g7DtGiFwJsloSlzO1aUFiU'
CHAT_ID = 7774590281

def escape_markdown_v2(text):
    parts = re.split(r'(```[\s\S]*?```)', text)
    result = []
    for part in parts:
        if part.startswith('```'):
            result.append(part)
        else:
            escaped = re.sub(r'([\[\]()~`>#+=\-|{}._!])', r'\\\1', part)
            result.append(escaped)
    return ''.join(result)

def send_to_telegram(content):
    """Send content to Telegram with proper MarkdownV2 formatting"""
    escaped = escape_markdown_v2(content.strip())
    
    payload = {
        'chat_id': CHAT_ID,
        'text': escaped,
        'parse_mode': 'MarkdownV2'
    }
    
    data = urllib.parse.urlencode(payload).encode('utf-8')
    req = urllib.request.Request(
        f'https://api.telegram.org/bot{BOT_TOKEN}/sendMessage',
        data=data
    )
    
    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode('utf-8'))
        return result.get('ok')
```

---

## KNOWN ISSUES & SOLUTIONS

| Issue | Root Cause | Solution |
|-------|-----------|----------|
| Code blocks not rendering | `parse_mode` missing | Always include `parse_mode=MarkdownV2` |
| Bold/italics not working | Unescaped `*` or `_` | Escape all special chars outside code blocks |
| Message truncated | Content too long | Split by `---` dividers into separate messages |
| Links not creating preview | Needs full URL | Use bare URLs like `https://example.com` |
| Unicode characters broken | Encoding issue | Use UTF-8 encoding throughout pipeline |
| Asterisks show in output | parse_mode omitted | Reconfirm `parse_mode=MarkdownV2` in payload |

---

## COMMIT MESSAGE TEMPLATE

When sending issues to Telegram:

```
send: Issue [#] [Theme] to Telegram (ACT 1 + ACT 2)

- Sent ACT 1 cover with unique HERO-TALL design
- Sent 11 editorial sections (ACT 2)
- Applied MarkdownV2 escaping for proper rendering
- Code blocks, bold titles, and links verified
```

---

## SIGN-OFF CHECKLIST

Before declaring delivery complete:

- [ ] All ACT 1 covers display with code blocks and ASCII art
- [ ] All ACT 2 sections display with bold titles
- [ ] All links render as preview cards
- [ ] No escaped characters visible to user
- [ ] Message count matches expected section count
- [ ] Commit created with proper message
- [ ] QA checklist reviewed and signed off
