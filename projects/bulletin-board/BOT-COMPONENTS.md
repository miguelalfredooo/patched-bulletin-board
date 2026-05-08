# Design By Bulletin™ — Component System

Complete reference for composing Design By Bulletin issues using modular components.

---

## Overview

Every issue consists of two acts delivered via Telegram:
- **ACT 1:** Visual preview with ASCII art (three composition options)
- **ACT 2:** Editorial content with prose and sources

Issues are built from **5 reusable components** combined in specific ways.

---

## Component 1: Issue Cover (COMPONENT-1-ISSUE-COVER)

**Purpose:** Branded opening with issue identity (always Codeblock 1)

**Structure:**
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue [NUMBER]
[THEME] • [DATE]
━━━━━━━━━━━━━━━━━━━━━━━━━

                    ◇
                   ◇ ◇
                  [HERO-TALL portrait]
                   ...

                  **[THEME]**
```

**Rules:**
- Logo and dividers are fixed (never change)
- Update only: Issue number, theme name, publication date
- Includes HERO-TALL portrait (15-line centered diamond)
- Always in its own codeblock (Codeblock 1)
- Monospace rendering required

**Examples:**
- Master reference: `ascii-art-library/master/COMPONENT-1-ISSUE-COVER.txt`
- Issue 005: `Issue 005`, `Signal • May 8, 2026`
- Issue 010: `Issue 010`, `Worn • May 12, 2026`

---

## Component 2: Section ASCII Art Variations (COMPONENT-2-*)

**Purpose:** Visual representation of editorial sections

**Six variations available:**
1. **SOURCE** — 5-line diamond (pure art)
2. **EXPANDED** — 5-line centered hero diamond
3. **LABELED** — 5-line diamond + section name at vertical midpoint
4. **COMPACT-LEFT** — 5-line diamond + name right
5. **COMPACT-RIGHT** — 5-line diamond + name left  
6. **HERO-TALL** — 15-line portrait diamond

**Asset location:** `ascii-art-library/[variation]/issue-[#]-[section]-[variation]-neon.txt`

**Master reference:** `ascii-art-library/master/COMPONENT-2-ISSUE-SECTIONS.txt`

---

## Component 3: Editorial Grid (COMPONENT-3-EDITORIAL-GRID)

**Purpose:** Prose content for all 11 sections

**Structure per section:**
```
**[SECTION] — [SUBTITLE]**
[2-4 sentences of prose, 60-120 words]
*[Source: Attribution]*
```

**11 Sections per issue:**
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

**Master reference:** `ascii-art-library/master/COMPONENT-3-EDITORIAL-GRID.txt`

---

## Component 4: Closing Sentence (COMPONENT-4-CLOSING-SENTENCE)

**Purpose:** Thematic wrap-up statement

**Format:**
```
"[8-15 word poetic statement capturing issue theme]"
```

**Delivery:** After editorial grid, before metadata footer

**Master reference:** `ascii-art-library/master/COMPONENT-4-CLOSING-SENTENCE.txt`

---

## Component 5: Metadata Footer (COMPONENT-5-METADATA-FOOTER)

**Purpose:** Publication information

**Format:**
```
*Published: [DATE]*
*Theme: [NAME] — [8-15 word description]*
```

**Delivery:** Last element of issue

**Master reference:** `ascii-art-library/master/COMPONENT-5-METADATA-FOOTER.txt`

---

## ACT 1 Composition Approaches

### ACT 1 v1: Grid Layout (Full-Width Visual Grid)

**Components:** COMPONENT-1-ISSUE-COVER + COMPONENT-2-ISSUE-SECTIONS

**Codeblock structure:**
- **Codeblock 1:** Issue cover (with HERO-TALL portrait)
- **Codeblock 2:** All 11 sections in LABELED variation (ASCII art left, section name right at vertical midpoint), separated by 25-char dividers

**Use case:** Unified visual grid showing all sections at once

**Example:** `ascii-art-library/master/ACT-1-LAYOUT-TEMPLATE.txt`

---

### ACT 1 v2: Card-by-Card Layout (Individual Section Delivery)

**Components:** COMPONENT-1-ISSUE-COVER + COMPONENT-SECTION-CARD-TEMPLATE (×11)

**Codeblock structure:**
- **Codeblock 1:** Issue cover
- **Codeblocks 2–12:** Each section as standalone card
  - ASCII art (SOURCE variation)
  - Section name below (left-aligned, ALL CAPS)
  - Article title + description + source
  - Link outside codeblock (plain text) per section

**Use case:** One section per message, scannable format

**Pattern:**
```
[Codeblock 1: Cover]
[Codeblock 2: Section 1 card]
Link to section 1
[Codeblock 3: Section 2 card]
Link to section 2
... (repeat for all 11 sections)
```

---

### ACT 1 v3: Full Template (Complete Rendered Reference)

**Components:** MOCK-ISSUE-005-ACT-1 (adapted for specific issue)

**Use case:** Complete rendered example for implementing other issues

**Example:** `ascii-art-library/master/MOCK-ISSUE-005-ACT-1.txt`

---

## ACT 2 Composition

### ACT 2: Full Editorial Grid

**Components:** COMPONENT-1-ISSUE-COVER + COMPONENT-ALL-SECTIONS (11 editorial sections)

**Codeblock structure:**
- **Codeblock 1:** Issue cover (with HERO-TALL portrait)
- **Codeblocks 2–12:** Each editorial section in its own codeblock
  - Section name (bold, descriptive subtitle)
  - Prose (2-4 sentences, ~60-120 words)
  - Source attribution (italicized)
  - Link outside codeblock (plain text) per section

**Delivery pattern:**
```
[Codeblock 1: Cover]
[Codeblock 2: Section 1 editorial content]
Link to section 1
[Codeblock 3: Section 2 editorial content]
Link to section 2
... (repeat for all 11 sections)
```

**Each section contains:**
```
**[SECTION] — [SUBTITLE]**
[First line of prose appears as entry preview in ACT 1]
[Full 2-4 sentence prose with editorial voice]
*[Source: Attribution]*
```

---

## Visual Rules

### Line Width

- **Max line width: 36 characters** per line in any codeblock
- **ASCII art canvas:** max 36 chars wide (art object itself typically 11 chars, padded to fit)
- **HERO-TALL cover:** max 36 chars wide
- Divider (25 chars) always fits within this limit

### Dividers

Standard divider (25 characters, fixed — never change):
```
━━━━━━━━━━━━━━━━━━━━━━━━━
```

Used between:
- Sections in LABELED variation (ACT 1 v1)
- Individual cards (ACT 1 v2)
- Editorial sections (ACT 2)

### Text Styling

- **Section names:** ALL CAPS, bold (`**ART**`)
- **Article titles:** Bold, descriptive (`**Art — Bold Geometric Work**`)
- **Prose:** Regular text, narrative voice
- **Source attribution:** Italicized brackets (`*[Source: MOMA]*`)

### ASCII Art Characters

Pure Unicode geometric characters only:
- Diamonds: ◇ ◆ ◈
- Arrows: → ← ↑ ↓
- Boxes: ┌ ┐ └ ┘ ─ │ ┼
- Fills: ░ ▒ ▓
- Lines: ═ ║ ╔ ╗ ╚ ╝
- Shapes: ▲ ▼ ◆ ● ○

**No:** emoji, color codes, extended formatting

---

## Codeblock Structure

### Rule: Each Component in Own Codeblock

- Cover always: Codeblock 1
- Sections/cards: Codeblocks 2+ (depending on composition)
- Links: Plain text outside codeblocks (no backticks)

### Telegram Rendering

⚠️ **CRITICAL: ASCII art ALWAYS in codeblocks (```). Metadata OUTSIDE codeblocks.**

**Format:**
```json
{
  "chat_id": 7774590281,
  "text": "```\n[ASCII art]\n```\n\n**Section — Title**\n\n[Prose]\n\n*[Source: ...]*\n\nhttps://link.com"
}
```

**Delivery method:**
- Send WITHOUT `parse_mode` parameter (plain text mode)
- This renders correctly on Telegram despite how it appears in source

**Result:**
- ✅ ASCII art in codeblocks (mandatory, no exceptions)
- ✅ Section metadata as plain markdown outside codeblocks
- ✅ **Bold**, *italic* markdown formats work
- ✅ URLs render as Telegram link preview cards with metadata
- ✅ ASCII art displays cleanly in monospace

---

## Creating New Issues

### Step 1: Prepare Cover
Update `COMPONENT-1-ISSUE-COVER.txt` template with:
- Issue number
- Theme name
- Publication date

### Step 2: Choose ACT 1 Approach
Select one:
- **v1 (Grid):** All sections in one codeblock using LABELED variation
- **v2 (Cards):** Individual section cards in separate codeblocks
- **v3 (Template):** Use mock issue as reference

### Step 3: Prepare ACT 2
Use `COMPONENT-3-EDITORIAL-GRID.txt` with 11 section prose

### Step 4: Add Closing + Metadata
- Closing sentence from `COMPONENT-4-CLOSING-SENTENCE.txt`
- Metadata from `COMPONENT-5-METADATA-FOOTER.txt`

### Step 5: Deliver
Compose codeblocks according to chosen ACT 1 version, followed by ACT 2 editorial content

---

## Asset Locations

### Master Component Files
```
ascii-art-library/master/
├── COMPONENTS-MASTER-GUIDE.txt    (Complete system documentation)
├── COMPONENT-1-ISSUE-COVER.txt
├── COMPONENT-2-ISSUE-SECTIONS.txt (6 variations)
├── COMPONENT-2-ISSUE-HERO-BELOW.txt
├── COMPONENT-3-EDITORIAL-GRID.txt
├── COMPONENT-4-CLOSING-SENTENCE.txt
├── COMPONENT-5-METADATA-FOOTER.txt
├── COMPONENT-ENTRY-PREVIEW.txt
├── COMPONENT-SECTION-CARD-TEMPLATE.txt
├── ACT-1-LAYOUT-TEMPLATE.txt
├── MOCK-ISSUE-005-ACT-1.txt
└── MOCK-ISSUE-005-ACT-1-WITH-COMPONENTS.txt
```

### ASCII Art Variations (550 files total)
```
ascii-art-library/
├── source/        (110 original files)
├── expanded/      (110 hero centered)
├── labeled/       (110 with section names)
├── compact/       (220 left/right variations)
├── hero-tall/     (110 portrait format)
├── master/        (Component reference files)
└── README.md
```

### Individual Issues
```
projects/bulletin-board/
├── ISSUE-001-presence-complete.md
├── ISSUE-002-the-mark-complete.md
├── ISSUE-003-handmade-complete.md
├── ISSUE-004-traces-complete.md
├── ISSUE-005-signal-complete.md
├── ISSUE-006-momentum-complete.md
├── ISSUE-007-interval-complete.md
├── ISSUE-008-threshold-complete.md
├── ISSUE-009-material-complete.md
└── ISSUE-010-worn-complete.md
```

---

## Summary: From Component to Delivery

1. **Cover + Choice of ACT 1 approach** → Visual preview
2. **Editorial sections** → ACT 2 content
3. **Each component in own codeblock** → Telegram monospace formatting
4. **Links as plain text** → Between codeblocks
5. **25-character dividers** → Fixed width, fits within 36-char line limit

For detailed system documentation, see: `ascii-art-library/master/COMPONENTS-MASTER-GUIDE.txt`
