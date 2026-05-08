# Design By Bulletin™ — Deployment Guide

Quick reference for composing and deploying new issues.

---

## Component-Based Issue Composition

Every issue uses reusable components. Read **[BOT-COMPONENTS.md](BOT-COMPONENTS.md)** first for complete system reference.

---

## Quick Workflow

### 1. Choose ACT 1 Composition (1 min)

Pick one of three approaches:

**Option A: Grid Layout (v1)**
- Use: COMPONENT-1-ISSUE-COVER + COMPONENT-2-ISSUE-SECTIONS
- Result: All 11 sections in single codeblock (LABELED variation)
- Best for: Showing complete visual grid at once
- Reference: `ascii-art-library/master/ACT-1-LAYOUT-TEMPLATE.txt`

**Option B: Card-by-Card (v2)**
- Use: COMPONENT-1-ISSUE-COVER + COMPONENT-SECTION-CARD-TEMPLATE (×11)
- Result: Cover + 11 individual section cards in separate codeblocks
- Best for: One section per message, scannable format
- Reference: `ascii-art-library/master/COMPONENT-SECTION-CARD-TEMPLATE.txt`

**Option C: Full Template (v3)**
- Use: MOCK-ISSUE-005-ACT-1 (adapted)
- Result: Complete rendered example
- Best for: Reference/implementation guide
- Reference: `ascii-art-library/master/MOCK-ISSUE-005-ACT-1.txt`

---

### 2. Prepare Components (5 min)

#### Cover Component
Update `ascii-art-library/master/COMPONENT-1-ISSUE-COVER.txt`:
- Issue number: `Issue [#]`
- Theme: `[THEME NAME]`
- Date: `[Month DD, Year]`

**Key:** Logo + dividers are fixed, only update issue/theme/date

#### Section Components (for chosen v1/v2/v3)

**v1 (Grid):** Use `COMPONENT-2-ISSUE-SECTIONS.txt` 
- LABELED variation ready
- 11 sections separated by dividers (━━━━━━━━━━━━━━━━━━━━━━━━━)
- ASCII art left, section name right at vertical midpoint

**v2 (Cards):** Use `COMPONENT-SECTION-CARD-TEMPLATE.txt`
- Each section gets: ASCII art + name below + article details
- 11 copies for 11 sections

**v3 (Template):** Use `MOCK-ISSUE-005-ACT-1.txt`
- Adapt all variables (issue number, theme, dates, content)
- Keep structure as-is

---

### 3. Prepare ACT 2 Editorial (5 min)

For all versions, include ACT 2 with:

**Structure (11 sections, each in own codeblock):**
```
[Codeblock 1: COMPONENT-1-ISSUE-COVER]

[Codeblock 2: Editorial Section 1]
**Art — [Subtitle]**
[2-4 sentences of prose]
*[Source: Attribution]*

[Plain text link]

[Codeblock 3: Editorial Section 2]
[Section content]
[Plain text link]

... (repeat for all 11 sections)
```

**Editorial section template** (from `COMPONENT-3-EDITORIAL-GRID.txt`):
```
**[SECTION NAME] — [SUBTITLE]**
[2-4 sentences of narrative prose]
*[Source: Publication Name]*
```

**Reference:** `ascii-art-library/master/COMPONENT-3-EDITORIAL-GRID.txt`

---

### 4. Save Session File (required before delivery)

Session files are the canonical record of what was generated — before any edits, before Telegram. They are append-only audit logs, not scratch files.

**Save to:** `projects/bulletin-board/sessions/ISSUE-[###]-[theme]-session.md`

**Contains:**
- Full ACT 1 art as originally generated
- Full ACT 2 prose as originally generated
- Format plan, editorial mix notes, closing sentence
- Any pipeline notes (Analyst → Editor → Curator decisions)

**Commit before proceeding:**
```bash
git add projects/bulletin-board/sessions/ISSUE-[###]-[theme]-session.md
git commit -m "session: Issue [#] [Theme] — pre-send record"
```

Then commit any edits to the main issue file separately:
```bash
git add projects/bulletin-board/ISSUE-[###]-[theme]-complete.md
git commit -m "issue: Issue [#] [Theme] — final edits"
```

Only after both commits: proceed to delivery.

---

### 5. Finalize & Deliver (3 min)

#### Add Closing Sentence
After all 11 editorial sections, add:
```
"[8-15 word thematic statement]"
```

Reference: `ascii-art-library/master/COMPONENT-4-CLOSING-SENTENCE.txt`

#### Add Metadata Footer
At end:
```
*Published: [Date]*
*Theme: [Name] — [8-15 word description]*
```

Reference: `ascii-art-library/master/COMPONENT-5-METADATA-FOOTER.txt`

#### Delivery Format
- **Cover:** Codeblock 1 (always)
- **Sections:** Own codeblocks (2+)
- **Links:** Plain text outside codeblocks (no backticks)
- **Dividers:** 24-character EM DASH (━━━━━━━━━━━━━━━━━━━━━━━━━) between sections

---

## Asset Locations

### Master Components (reference/templates)
```
ascii-art-library/master/
├── COMPONENTS-MASTER-GUIDE.txt         (System documentation)
├── COMPONENT-1-ISSUE-COVER.txt         (Cover template)
├── COMPONENT-2-ISSUE-SECTIONS.txt      (6 ASCII variations)
├── COMPONENT-3-EDITORIAL-GRID.txt      (Editorial examples)
├── COMPONENT-4-CLOSING-SENTENCE.txt    (Closing examples)
├── COMPONENT-5-METADATA-FOOTER.txt     (Footer examples)
├── ACT-1-LAYOUT-TEMPLATE.txt           (Full layout reference)
└── MOCK-ISSUE-005-ACT-1.txt            (Complete example)
```

### ASCII Art Files (550 total)
```
ascii-art-library/
├── source/        (110 originals — pure art)
├── expanded/      (110 centered hero versions)
├── labeled/       (110 with section names)
├── compact/       (220 left/right variations)
├── hero-tall/     (110 portrait format)
└── master/        (Component reference files)
```

**Usage:**
- ACT 1 v1: Use `labeled/` directory
- ACT 1 v2: Use `source/` directory
- ACT 1 v3: Use `hero-tall/` in cover

---

## Telegram Bot API Requirements

⚠️ **CRITICAL: ASCII art MANDATORY in codeblocks (```) — NO EXCEPTIONS**

**Correct format:**

```json
{
  "chat_id": 7774590281,
  "text": "```\n[ASCII ART HERE]\n```\n\n**Section — Title**\n\n[Prose]\n\n*[Source: Attribution]*\n\nhttps://example.com"
}
```

**Delivery method:** Send WITHOUT `parse_mode` parameter (plain text mode).

**Rules:**
- ✅ ASCII art ALWAYS in codeblocks (```) — mandatory, no exceptions
- ✅ Section title, prose, source, links — OUTSIDE codeblocks
- ✅ DO NOT include parse_mode parameter
- ✅ Telegram will render codeblocks and links correctly

**Usage in scripts:**
```python
payload = {
    "chat_id": 7774590281,
    "text": "```\n◇\n   ◇ ◇\n  ◇ ◇ ◇\n```\n\n**Art — The Visible Gesture**\n\nArtists making work that announces itself...\n\n*[Source: Artsy]*\n\nhttps://artsy.net"
}
# Send WITHOUT parse_mode parameter
requests.post(f"{BASE_URL}/sendMessage", json=payload)
```

---

## Codeblock Rules

✅ **Always:**
- Cover in Codeblock 1
- Each section in own codeblock
- Use triple backticks (```)
- Monospace rendering for ASCII art
- Set `parse_mode: "MarkdownV2"` in Bot API calls

✅ **Links are plain text:**
```
https://example.com/article
```
(No backticks, no formatting)

✅ **Dividers between sections:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━
```
24 characters to prevent Telegram line breaks

---

## Complete Example Structure

```
**ISSUE #005 — SIGNAL**

[Codeblock 1]
██████╗ ██████╗ ██████╗ ™
...
Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 005
Signal • May 8, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━
[HERO-TALL portrait + **SIGNAL**]
[/Codeblock 1]

**ACT 1 v1 example (Grid Layout):**
[Codeblock 2]
[11 sections in LABELED variation with dividers]
[/Codeblock 2]

**ACT 2:**
[Codeblock 3]
**Art — Bold Geometric Work**
Minimalism cuts through...
*[Source: MOMA]*
[/Codeblock 3]

https://www.moma.org/

[Codeblock 4]
**Painting — Color as Communication**
Restricted palettes...
*[Source: WikiArt]*
[/Codeblock 4]

https://www.wikiart.org/

... (continue for all 11 sections)

**CLOSING:**
"Your presence changes the room."

*Published: May 8, 2026*
*Theme: Signal — Direct communication that cuts through visual noise*
```

---

## Session Management

Sessions are append-only. They are evidence, not drafts.

### Rules

- **Never delete** a session file — if you need to clean up, move it to `sessions/archive/`
- **Never edit** a session file after it's committed — it's a record of what was generated, not what was sent
- Sessions live in `projects/bulletin-board/sessions/` and are tracked in git

### Canonical Workflow

```
generate issue
    ↓
save session to sessions/ISSUE-[###]-[theme]-session.md
    ↓
commit session file
    ↓
edit issue file (ISSUE-[###]-[theme]-complete.md)
    ↓
commit edits
    ↓
Editorial Director approves
    ↓
Alfredo sends to Telegram
```

### Pre-Send Validation

Before any Telegram delivery, verify:
```bash
git ls-files projects/bulletin-board/sessions/ISSUE-[#]-*
```
If that returns nothing, the session was not committed. Do not send until it is.

### Why This Matters

The sessions folder is the recovery path when content is lost. Issues 003, 004, and partially 001 have no recoverable original art because their sessions were never saved. The Telegram message history is not a backup — it is not searchable, not versioned, and not always accessible. The session file is.

---

## For More Details

- **Component system:** [BOT-COMPONENTS.md](BOT-COMPONENTS.md)
- **Master guide:** `ascii-art-library/master/COMPONENTS-MASTER-GUIDE.txt`
- **Published issues:** `ISSUE-001-*.md` through `ISSUE-010-*.md`
