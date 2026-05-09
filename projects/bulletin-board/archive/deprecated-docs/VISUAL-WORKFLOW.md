# Design By Bulletin™ — Visual Workflow

**High-level view of agent interactions, art creation, magazine assembly, and delivery.**

---

## Agent Interactions & Handoffs

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           AGENT INTERACTION FLOW                             │
└─────────────────────────────────────────────────────────────────────────────┘

CURATOR (7:30am)                ASSIGNMENT (8:15am)            MANAGING (11:00am)
    │                                 │                              │
    │  Scans 48 URLs                 │                              │
    │  ├─ 14 PASSED ✅                │                              │
    │  ├─ 3 FLAGGED ⚠️                │                              │
    │  └─ 2 REJECTED ❌               │                              │
    │                                 │                              │
    └─→ [Daily Report]               │                              │
         "48 URLs scanned..."        │                              │
                                      │                              │
                              Maps URLs to                           │
                              11 sections                            │
                              ├─ 9 from curator                      │
                              └─ 2 need commission                   │
                                      │                              │
                                      └─→ [11 Commissions]          │
                                          Section 04: "Write about
                                          sculpture..."
                                          Section 08: "Write about
                                          opinions..."
                                                                     │
                                                              Creates 24 files
                                                              ├─ 00-COVER-ART
                                                              ├─ 01-11 ART
                                                              ├─ 01-11 COPY
                                                              └─ 12-FOOTER
                                                                     │
                                                              Fills with content:
                                                              • ASCII visuals
                                                              • Prose + links
                                                              • Closing quote
                                                                     │
                                                                     ↓
                                                        CHECKPOINT: "Ready"
                                                             │
                                                             ↓
EDITORIAL (7:00pm)               BOT (7:45pm)         SUBSCRIBERS (8:00pm)
     │                               │                      │
     │← "Ready"                      │                      │
     │                               │                      │
     ├─ Validate structure           │                      │
     │  └─ python validator.py       │                      │
     │     ✅ VALID                  │                      │
     │                               │                      │
     ├─ Test uniqueness              │                      │
     │  └─ python test-uniqueness.py │                      │
     │     ✅ All tests passed       │                      │
     │                               │                      │
     ├─ Preview rendering            │                      │
     │  └─ /admin-preview 020        │                      │
     │     ✅ Looks good             │                      │
     │                               │                      │
     └─→ [Approval Signal]           │                      │
         "Approved"                  │                      │
                                      │                      │
                              ← Approval                     │
                                      │                      │
                              Load 24 files                  │
                              │                              │
                              Render visuals                 │
                              (add backticks)               │
                              │                              │
                              Render prose                   │
                              (escape special chars)        │
                              │                              │
                              Send Message 1                 │
                              (ASCII visuals)               │
                              │                              │
                              Wait 1-2 sec                   │
                              │                              │
                              Send Message 2                 │
                              (Prose + footer)              │
                              │                              │
                              └─→ Both messages             │
                                   received ✅               │
                                                              │
                                                      Subscribers
                                                      see magazine
                                                      ✅
```

---

## How Art Is Created & Assembled

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            ART CREATION FLOW                                 │
└─────────────────────────────────────────────────────────────────────────────┘

STEP 1: MANAGING EDITOR RECEIVES COMMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Section: 05 Culture
Brief: "Write about cultural movements and their impact on design"

STEP 2: CREATE VISUAL (NN-SECTION-ART.txt)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Editor writes raw ASCII art (no backticks yet):

FILE: 05-SECTION-ART.txt
┌─────────────────────────────┐
│  ◆═══════════════════════◆  │
│  ║   ╱ Culture ╲         ║  │
│  ║  ╱  Movement  ╲       ║  │
│  ║ ╱    Shapes    ╲      ║  │
│  ║                 ║      ║  │
│  ║  Design Daily   ║      ║  │
│  ◆═══════════════════════◆  │
└─────────────────────────────┘

Rules:
✅ Monospace ASCII only
✅ 4-10 lines typical
❌ NO backticks (bot adds them later)
❌ NO markdown formatting

STEP 3: CREATE COPY (NN-SECTION-COPY.md)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Editor writes raw prose (no escaping yet):

FILE: 05-SECTION-COPY.md
┌───────────────────────────────────────────────┐
│ **Culture**                                    │
│                                               │
│ Cultural movements reshape how designers think│
│ and work. From postmodernism to digital      │
│ optimism, each movement brings new questions.│
│ Understanding cultural context is essential. │
│                                               │
│ https://example.com/cultural-movements      │
└───────────────────────────────────────────────┘

Rules:
✅ Section name as bold: **Culture**
✅ 2-4 sentences (60-120 words)
✅ Plain URLs (no markdown link syntax)
❌ NO backticks (bot escapes later)
❌ NO special char escaping

STEP 4: REPEAT FOR ALL 11 SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

01-SECTION-ART.txt + 01-SECTION-COPY.md  (Art)
02-SECTION-ART.txt + 02-SECTION-COPY.md  (Painting)
03-SECTION-ART.txt + 03-SECTION-COPY.md  (Illustration)
04-SECTION-ART.txt + 04-SECTION-COPY.md  (Sculpture)
05-SECTION-ART.txt + 05-SECTION-COPY.md  (Culture) ← You are here
06-SECTION-ART.txt + 06-SECTION-COPY.md  (Photography)
07-SECTION-ART.txt + 07-SECTION-COPY.md  (Art History)
08-SECTION-ART.txt + 08-SECTION-COPY.md  (Opinions)
09-SECTION-ART.txt + 09-SECTION-COPY.md  (Design & AI)
10-SECTION-ART.txt + 10-SECTION-COPY.md  (Product)
11-SECTION-ART.txt + 11-SECTION-COPY.md  (Visual & Brand)

Result: 22 files (11 art + 11 copy) + 1 cover + 1 footer = 24 total
```

---

## How Magazine Is Assembled

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         MAGAZINE ASSEMBLY FLOW                              │
└─────────────────────────────────────────────────────────────────────────────┘

STEP 1: SCAFFOLD CREATES STRUCTURE (Instant)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Command:
$ python scaffold.py issues/020 --theme "Geometry"

Result:
issues/020/
├── manifest.json                  ← Metadata (auto-filled)
├── 00-COVER-ART.txt              ← Logo + masthead (pre-filled)
├── 01-SECTION-ART.txt            ← Ready for art
├── 01-SECTION-COPY.md            ← Ready for copy
├── 02-SECTION-ART.txt            ← Ready for art
├── 02-SECTION-COPY.md            ← Ready for copy
│ ... (03-11)
└── 12-METADATA-FOOTER.txt        ← Logo + masthead (pre-filled)

Key: Scaffold generates 24 numbered files with correct names instantly.
     No chance of naming mistakes.

STEP 2: EDITOR FILLS IN CONTENT (8 hours)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For each section:

nano issues/020/05-SECTION-ART.txt
[Edit: Add ASCII art]

nano issues/020/05-SECTION-COPY.md
[Edit: Add prose + link]

Repeat for all 11 sections.

STEP 3: VALIDATION LAYER 1 — Structure
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Command:
$ python validator.py issues/020

Checks:
✅ 24 files present (exact)
✅ File names correct (00, 01-11, 12)
✅ No backticks in art/copy
✅ No escaping in copy
✅ manifest.json valid

Output:
✅ VALID
   Issue path: issues/020
   Sections: 11
   Files: 1 cover + 22 section + 1 footer = 24 total

STEP 4: VALIDATION LAYER 2 — Content Quality
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Command:
$ python test-uniqueness.py issues/020 --check-duplicates

Checks:
✅ No placeholder text
✅ Min length (art: 20 chars, copy: 100 chars)
✅ All section names present (**Art**, **Painting**, etc.)
✅ No duplicate content (each section is unique)

Output:
✅ All 24 files present
✅ No placeholder text in art files
✅ No placeholder text in copy files
✅ All art files meet minimum length (20 chars)
✅ All copy files meet minimum length (100 chars)
✅ All copy files contain correct section names
✅ No duplicate content in art files
✅ All uniqueness tests passed!

STEP 5: PREVIEW RENDERING
━━━━━━━━━━━━━━━━━━━━━━━━

Command:
/admin-preview 020

Bot renders how it will look on Telegram:
• Visual section with ASCII art in code blocks
• Prose section with properly escaped special chars
• Footer with closing quote

Editor checks: "Does it look right?"

STEP 6: APPROVAL SIGNAL
━━━━━━━━━━━━━━━━━━━━━

Command:
python checkpoint.py signal editorial 020 "Approved for publishing"

Status: Ready to publish

RESULT: Magazine is assembled, validated, and approved ✅
```

---

## How It's Sent to Telegram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         TELEGRAM DELIVERY FLOW                              │
└─────────────────────────────────────────────────────────────────────────────┘

STAGE 1: BOT LOADS ISSUE
━━━━━━━━━━━━━━━━━━━━━━

Bot receives: "Approved for publishing"

Loads:
├── manifest.json          (metadata: issue 020, theme "Geometry")
├── 00-COVER-ART.txt      (raw ASCII, no backticks)
├── 01-11 SECTION-ART.txt (raw ASCII, no backticks)
├── 01-11 SECTION-COPY.md (raw prose, no escaping)
└── 12-METADATA-FOOTER.txt (raw content, has closing backticks)

STAGE 2: RENDERING — VISUAL SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Raw files:
┌────────────────────────────────┐
│ (00-COVER-ART.txt)             │
│ Logo + masthead + theme visual │
│ NO backticks yet               │
└────────────────────────────────┘

BOT ADDS FORMATTING:

Step A: Wrap in backticks
```
[Content from 00-COVER-ART.txt]
```

Step B: Add all 11 section visuals
```
[Content from 01-SECTION-ART.txt]
```
```
[Content from 02-SECTION-ART.txt]
```
... repeat for 03-11

Step C: Package as Message 1
┌─────────────────────────────────────────────────┐
│ ██████╗ ██████╗ ██████╗ ™                       │
│ ██╔══██╗██╔══██╗██╔══██╗                        │
│ ██║  ██║██████╔╝██████╔╝                        │
│ ██║  ██║██╔══██╗██╔══██╗                        │
│ ██████╔╝██████╔╝██████╔╝                        │
│ ╚═════╝ ╚═════╝ ╚═════╝                         │
│                                                 │
│ Design By Bulletin™                             │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━                      │
│ Issue 020                                       │
│ Geometry • May 9, 2026                          │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━                      │
│                                                 │
│ [All 11 ASCII art visuals in sequence]          │
│                                                 │
│ (In Telegram: Monospace, code block formatting)│
└─────────────────────────────────────────────────┘

SEND TO TELEGRAM:
└─→ sendMessage(chat_id=subscriber, text=message, 
                parse_mode="MarkdownV2")
    ✅ Message 1 delivered to all subscribers

STAGE 3: RENDERING — PROSE SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Wait 1-2 seconds (Telegram rate limiting)

Raw files:
┌────────────────────────────────┐
│ (01-11-SECTION-COPY.md)        │
│ **Art**                         │
│ [Prose with special chars]     │
│ https://example.com            │
│ NO escaping yet                │
└────────────────────────────────┘

BOT ADDS FORMATTING:

Step A: Escape special characters for MarkdownV2
Characters that need escaping: _ * [ ] ( ) ~ ` > # + - = | { } . !

Raw: https://example.com/piece-title
Escaped: https://example\.com/piece\-title

Raw: **Art**
Escaped: **Art** (already markdown, no additional escaping)

Step B: Combine all sections + footer
┌─────────────────────────────────────────────────────┐
│ **Art**                                              │
│                                                     │
│ Contemporary art explores identity and presence.    │
│ From installations to participatory works, artists  │
│ question how we perceive space.                     │
│                                                     │
│ https://www\.artforum\.com/piece\-title             │
│                                                     │
│ ─────────────────────────────────────────────────   │
│                                                     │
│ **Painting**                                        │
│ [Prose for painting] https://example\.com          │
│                                                     │
│ ─────────────────────────────────────────────────   │
│                                                     │
│ ... [Repeat for sections 03-11] ...                │
│                                                     │
│ ─────────────────────────────────────────────────   │
│                                                     │
│ ```                                                 │
│ ██████╗ ██████╗ ██████╗ ™                           │
│ [Footer with closing quote]                        │
│ ```                                                 │
│                                                     │
│ (In Telegram: Bold section names, clickable links) │
└─────────────────────────────────────────────────────┘

SEND TO TELEGRAM:
└─→ sendMessage(chat_id=subscriber, text=message,
                parse_mode="MarkdownV2")
    ✅ Message 2 delivered to all subscribers

STAGE 4: SUBSCRIBERS RECEIVE
━━━━━━━━━━━━━━━━━━━━━━━━━

User's Telegram app:

[Notification] Design By Bulletin™

Message 1:
┌─────────────────────────────────────┐
│ [ASCII cover art]                   │
│ [ASCII visuals for all 11 sections] │
│ (Monospace, perfectly formatted)    │
└─────────────────────────────────────┘

Message 2:
┌─────────────────────────────────────┐
│ **Art** [prose] [link] ✓ Clickable  │
│ **Painting** [prose] [link] ✓       │
│ ... (09 more sections)              │
│ [Footer quote]                      │
│ (All formatting correct)            │
└─────────────────────────────────────┘

✅ Both messages received
✅ All links clickable
✅ All formatting correct
✅ 4,250+ subscribers see Issue 020

DONE ✅
```

---

## Complete Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          COMPLETE DATA FLOW                                 │
└─────────────────────────────────────────────────────────────────────────────┘

CURATOR WORKSPACE                MANAGING EDITOR WORKSPACE          BOT WORKSPACE
     │                                   │                              │
     │  Report: URLs + scores            │                              │
     │  PASSED: 14                       │                              │
     │  FLAGGED: 3                       │                              │
     │  REJECTED: 2                      │                              │
     │                                   │                              │
     └──→ ASSIGNMENT WORKSPACE           │                              │
              │                          │                              │
              │  Commissions: 11         │                              │
              │  "Section 04: Write      │                              │
              │   about sculpture..."    │                              │
              │                          │                              │
              └──→ MANAGING EDITOR       │                              │
                   │                     │                              │
                   ├─ Scaffolds 24 files │                              │
                   │  (python scaffold)  │                              │
                   │                     │                              │
                   ├─ Fills content:     │                              │
                   │  • ASCII art        │                              │
                   │  • Prose + links    │                              │
                   │                     │                              │
                   └─→ 24 raw files      │                              │
                        │                │                              │
                        │                ↓                              │
                        │         EDITORIAL WORKSPACE                   │
                        │              │                               │
                        │              ├─ Validates structure          │
                        │              │  (python validator)           │
                        │              │  → ✅ VALID                  │
                        │              │                               │
                        │              ├─ Tests content               │
                        │              │  (python test-uniqueness)    │
                        │              │  → ✅ All tests passed       │
                        │              │                               │
                        │              ├─ Previews rendering          │
                        │              │  (/admin-preview)            │
                        │              │  → ✅ Looks good             │
                        │              │                               │
                        └──────────────→ BOT WORKSPACE                │
                                       │                               │
                                       ├─ Loads 24 files              │
                                       │                               │
                                       ├─ Renders visuals:            │
                                       │  • Adds backticks            │
                                       │  • Wraps in ``` ... ```      │
                                       │  → Message 1                 │
                                       │                               │
                                       ├─ Renders prose:              │
                                       │  • Escapes special chars     │
                                       │  • Combines sections         │
                                       │  → Message 2                 │
                                       │                               │
                                       └──→ TELEGRAM API             │
                                           │                           │
                                           └──→ 4,250+ SUBSCRIBERS
                                               │
                                               ├─ Message 1: Visual
                                               ├─ Message 2: Prose
                                               └─ ✅ Issue received
```

---

## The One Rule

**Agents output raw, unformatted content.**

```
┌─────────────────────────────────────────┐
│        AGENT OUTPUT (Raw)               │
├─────────────────────────────────────────┤
│ ASCII art: No backticks                 │
│ Prose: No escaping                      │
│ Links: Plain URLs                       │
│                                         │
│ ❌ No markdown tricks                   │
│ ❌ No special formatting                │
│ ❌ No escaping                          │
│                                         │
│ ✅ Just write naturally                 │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│        PIPELINE HANDLES IT              │
├─────────────────────────────────────────┤
│ 1. Validate structure (validator.py)    │
│ 2. Test content (test-uniqueness.py)    │
│ 3. Bot renders for Telegram:            │
│    • Adds backticks to art              │
│    • Escapes prose special chars        │
│    • Formats with parse_mode            │
│                                         │
│ Result: Perfect Telegram rendering ✅   │
└─────────────────────────────────────────┘
```

---

## Summary

1. **Agent Interactions:** Curator → Assignment → Managing → Editorial → Bot (5 checkpoints)
2. **Art Creation:** Each section gets unique ASCII art (no backticks yet)
3. **Magazine Assembly:** 24 files (cover + 11 pairs + footer) validated in 2 layers
4. **Telegram Delivery:** Raw files → Backticks added → Links escaped → Messages sent
5. **One Rule:** Agents output raw; bot handles all formatting

Result: Magazine delivered to 4,250+ subscribers in 12.5 hours. ✅
