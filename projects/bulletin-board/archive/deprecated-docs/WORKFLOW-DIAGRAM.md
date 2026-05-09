# Design By Bulletin™ — Workflow Diagram

## Daily Publication Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         DESIGN BY BULLETIN™ DAILY CYCLE                     │
└─────────────────────────────────────────────────────────────────────────────┘

                                7:30am PT
                                   ↓
                        ┌──────────────────────┐
                        │   CURATOR SCANS      │
                        │   Bluesky, Reddit    │
                        │   Medium, Substack   │
                        └──────────────────────┘
                                   ↓
                        ┌──────────────────────┐
                        │   CURATOR REPORTS    │
                        │   PASSED (7.0+)      │
                        │   FLAGGED (5-6.9)    │
                        │   REJECTED (<5.0)    │
                        └──────────────────────┘
                                   ↓
                        ┌──────────────────────┐
                        │   ASSIGNMENT EDITOR  │
                        │   Reviews report     │
                        │   Proposes gaps      │
                        │   Creates briefs     │
                        └──────────────────────┘
                                   ↓
                        ┌──────────────────────┐
                        │   MANAGING EDITOR    │
                        │   Receives commission│
                        │   Writes 11 sections │
                        │   (art + copy pairs) │
                        └──────────────────────┘
                                   ↓
                        ┌──────────────────────┐
                        │   EDITORIAL DIRECTOR │
                        │   python validator.py│
                        │   /admin-preview     │
                        │   /admin-send-issue  │
                        └──────────────────────┘
                                   ↓
                        ┌──────────────────────┐
                        │   BULLETIN BOT       │
                        │   Load Issue files   │
                        │   Format for Telegram│
                        │   Send to subscribers│
                        └──────────────────────┘
                                   ↓
                              8:00am PT
                              PUBLISHED
```

---

## Agent-to-Agent Handoff Points

### 1. Curator → Assignment Editor (7:30am)

**What:** Daily report (CURATOR-REPORT-TEMPLATE.md)

**Content:**
- PASSED URLs (7.0+) — Ready for editorial
- FLAGGED URLs (5.0-6.9) — Editor decides
- REJECTED URLs (<5.0) — Not suitable
- Summary stats (total scanned, pass rate, etc.)

**Format:** Plain markdown, with scoring breakdown

```
Curator Report — May 9, 2026
═════════════════════════════

PASSED (7.0+)
─────────────
• URL: https://...
  Score: 8.2 (Relevance: 8, Credibility: 9, Freshness: 8, Title: 8)
  Why: Fits design angle, established publication

[continue for all PASSED]

FLAGGED (5.0-6.9)
─────────────────
• URL: https://...
  Score: 6.3 (Relevance: 7, Credibility: 6, Freshness: 6, Title: 6)
  Note: Good content, but newer source

[continue for all FLAGGED]

SUMMARY: 45 scanned, 12 passed, 8 flagged, 25 rejected
```

### 2. Assignment Editor → Managing Editor (9:00am - Noon)

**What:** Commissions (COMMISSION-TEMPLATE.md)

**Content (per section):**
- Section number and name
- Clear angle/direction
- Key references (from curator report)
- Tone and style guidance
- Word count (60-120 words)
- Example if needed

**Format:** Plain text, clear and concise

```
COMMISSION — Issue 018, May 9, 2026
═══════════════════════════════════
Theme: "Discovery"

SECTION 1: Art
──────────────
Angle: How AI is changing visual composition
Direction: Interview with a designer using generative tools
References: [URLs from curator report]
Tone: Optimistic but honest about limitations
Words: 60-120
Deadline: Noon today

Example opening: "Last month, I stopped using Photoshop for sketches..."
```

### 3. Managing Editor → Editorial Director (Throughout Day)

**What:** Completed Issue (24 numbered files)

**Structure:**
```
issues/018/
├── 00-COVER-ART.txt
├── 01-SECTION-ART.txt  ← Raw ASCII (no backticks)
├── 01-SECTION-COPY.md  ← Raw markdown (no escaping)
├── 02-SECTION-ART.txt
├── 02-SECTION-COPY.md
... (11 sections)
└── 12-METADATA-FOOTER.txt
```

**Status:** `python progress.py issues/018` shows completion %

### 4. Editorial Director → Bulletin Bot (Just Before 8am)

**What:** Validated and approved Issue

**Validation steps:**
1. `python validator.py issues/018` — Check structure
2. `/admin-preview 018` — See rendering
3. `/admin-send-issue 018` — Publish

**Bot then:**
1. Loads all 24 files
2. Wraps ASCII in code blocks
3. Escapes prose for MarkdownV2
4. Sends to subscribers with `parse_mode="MarkdownV2"`

---

## Three-Stage Pipeline (Technical Flow)

```
┌──────────────────────────────┐
│   STAGE 1: AGENT OUTPUT      │
│   (Raw Unformatted)          │
└──────────────────────────────┘
           ↓
    Managing Editor writes:
    • ASCII art (no backticks)
    • Markdown prose (no escaping)
    • Links as plain URLs
           ↓
┌──────────────────────────────┐
│   STAGE 2: VALIDATION        │
│   (Structure Verification)   │
└──────────────────────────────┘
           ↓
    Editorial Director runs:
    python validator.py issues/018
           ↓
    Checks:
    ✓ All files exist
    ✓ Correct numbering
    ✓ No backticks in art
    ✓ No escaping in copy
           ↓
┌──────────────────────────────┐
│   STAGE 3: TELEGRAM RENDER   │
│   (Format Application)       │
└──────────────────────────────┘
           ↓
    Bulletin Bot:
    1. Load raw files
    2. Wrap art in ``` ```
    3. Escape copy for MarkdownV2
    4. Send with parse_mode="MarkdownV2"
           ↓
    Published to subscribers ✓
```

---

## Time Breakdown (Daily)

```
7:00am PT
  └─ Curator starts scanning sources
     └─ (searches Bluesky, Reddit, Medium, etc.)

7:30am PT
  └─ Curator REPORT due to Assignment Editor
     └─ PASSED / FLAGGED / REJECTED breakdown
     └─ File: [curator workspace]/daily-report-YYYY-MM-DD.md

8:00am PT - 12:00pm PT
  └─ Assignment Editor reviews curator report
     └─ Identifies content gaps
     └─ Creates commissions for Managing Editor
     └─ File: issues/[number]/COMMISSIONS.md

12:00pm PT - 7:00pm PT
  └─ Managing Editor writes 11 sections
     └─ Tracks progress with: python progress.py issues/[number]
     └─ Files: issues/[number]/NN-SECTION-ART.txt + NN-SECTION-COPY.md

7:00pm PT - 7:45pm PT
  └─ Editorial Director validates
     └─ python validator.py issues/[number]
     └─ /admin-preview [number]
     └─ /admin-send-issue [number]

7:45pm PT - 8:00pm PT
  └─ Bulletin Bot publishes
     └─ Loads Issue files
     └─ Applies formatting
     └─ Sends to subscribers

8:00am PT (next day)
  └─ Subscribers receive Issue ✓
```

---

## File Flow (Data Movement)

```
┌──────────────────────┐
│ CURATOR              │
│ workspace            │
├──────────────────────┤
│ daily-report-*.md    │
│ (URLs + scores)      │
└──────────────────────┘
           ↓ (sends)
┌──────────────────────┐
│ ASSIGNMENT EDITOR    │
│ workspace            │
├──────────────────────┤
│ COMMISSION-*.md      │
│ (briefs + angles)    │
└──────────────────────┘
           ↓ (sends)
┌──────────────────────┐
│ MANAGING EDITOR      │
│ workspace            │
├──────────────────────┤
│ drafts/NN.md         │
│ (section copies)     │
└──────────────────────┘
           ↓ (copies to)
┌──────────────────────────────────────┐
│ BULLETIN-BOARD project root          │
│ issues/[number]/                     │
├──────────────────────────────────────┤
│ NN-SECTION-ART.txt   (raw ASCII)     │
│ NN-SECTION-COPY.md   (raw markdown)  │
│ (24 files total)                     │
└──────────────────────────────────────┘
           ↓ (validates)
┌──────────────────────┐
│ EDITORIAL DIRECTOR   │
│ workspace            │
├──────────────────────┤
│ validator.py runs    │
│ preview generated    │
│ approval logged      │
└──────────────────────┘
           ↓ (sends)
┌──────────────────────┐
│ BULLETIN BOT         │
│ workspace            │
├──────────────────────┤
│ Loads Issue files    │
│ Formats for TG       │
│ Sends to @subscribers│
└──────────────────────┘
```

---

## Decision Points (Where Things Can Stop)

```
┌────────────────────────────────────────────────────────────┐
│                    DECISION GATES                          │
└────────────────────────────────────────────────────────────┘

Curator Report (7:30am)
├─ Is report complete? ✓ → Pass to Assignment
└─ Missing URLs? ✗ → Extend deadline, rescan

Assignment Editor (By Noon)
├─ Are commissions clear? ✓ → Pass to Managing
└─ Unclear briefs? ✗ → Revise, resend to Managing

Managing Editor (By 7pm)
├─ Is Issue 100% complete? ✓ → Pass to Editorial
│  └─ python progress.py issues/[number] should show [████████████████████] 24/24
└─ Missing sections? ✗ → Continue writing, update Editorial

Editorial Director (By 7:45pm)
├─ Does Issue validate? ✓ → Pass to Bot
│  └─ python validator.py issues/[number] should show ✅ VALID
├─ Structure errors? ✗ → python validator.py --fix, or request changes from Managing
└─ Content concerns? ✗ → Preview with /admin-preview, request revisions

Bulletin Bot (By 8:00pm)
├─ Is formatting correct? ✓ → Send to subscribers
└─ Rendering issues? ✗ → Debug, delay publish, alert Editorial Director

Published ✓
```

---

## Common Workflows

### Workflow: "Issue Gets Delayed"

```
Managing Editor realizes they can't finish in time (5pm)
└─ Runs: python progress.py issues/[number]
   └─ Shows: [███████░░░░░░░░░░░░░░] 8/24 (33% complete)
└─ Notifies: Editorial Director
└─ Editorial Director decides:
   ├─ Extend deadline? → Delay publish to next day
   ├─ Request partial publish? → 8 sections only
   └─ Request help? → Assign sections to another editor

Resolution: Issue 018 publishes May 10 instead of May 9
```

### Workflow: "Curator Finds Breaking News"

```
Curator discovers urgent, highly relevant story (10am)
└─ Already past 7:30am report deadline
└─ Notifies: Assignment Editor directly
└─ Assignment Editor decides:
   ├─ Include in today's Issue? → Commission section immediately
   ├─ Save for tomorrow? → Add to tomorrow's report
   └─ Build special insert? → Create bonus content

Resolution: Last-minute section added, timeline compressed
```

### Workflow: "Editorial Director Finds Error"

```
Editorial Director validates Issue (7:30pm)
└─ Runs: python validator.py issues/[number]
   └─ Shows: ❌ ERROR in section 05-SECTION-COPY.md: Markdown formatting error
└─ Options:
   ├─ Run: python validator.py issues/[number] --fix (auto-fix)
   ├─ OR notify: Managing Editor, request fix, re-validate
   └─ OR delay: Hold Issue for next day

Resolution: Fix applied, Issue re-validated, publish on schedule
```

### Workflow: "Bot Receives Command"

```
User on Telegram: /digest

Bulletin Bot receives command
└─ /start        → Onboarding flow (Q1-Q3, build personalized digest)
└─ /digest       → Send today's Issue immediately
└─ /preview      → Show ASCII visual only (Act 1)
└─ /help         → Show command list and schedule
└─ /change       → Restart preferences questionnaire

Admin command: /admin-send-issue 018

Bulletin Bot receives command
└─ Loads: issues/018/ (all 24 files)
└─ Validates: All files readable
└─ Formats: ASCII → code blocks, prose → MarkdownV2 escaped
└─ Sends: To all subscribers with parse_mode="MarkdownV2"
└─ Logs: Publication time, subscriber count, any errors
```

---

## Performance Metrics

```
SPEED
─────
Curator report generation: ~30 minutes (manual review + scoring)
Assignment → commission: ~15 minutes (per brief)
Managing Editor writing: ~4 hours (11 sections × 20-25 min per section)
Editorial validation: ~5 minutes (python validator.py)
Bot formatting + send: ~30 seconds (load + format + transmit)

THROUGHPUT
──────────
Issues per week: 7 (daily publication)
Issues per month: ~30
Sections per month: ~330 (11 × 30)
URLs reviewed per month: ~1,350 (45 per day × 30)

QUALITY
───────
Curator accuracy: Score distribution (passed vs. rejected)
Assignment clarity: Brief interpretation accuracy
Managing prose quality: Readability score (if measured)
Bot delivery: Subscriber engagement rate
Overall publication rate: X% of Issues published on schedule
```

---

## Summary of Roles & Timing

| Role | Start Time | Duration | Deliverable | Format |
|------|-----------|----------|-------------|--------|
| **Curator** | 7:00am | 30min | Daily report | CURATOR-REPORT-TEMPLATE.md |
| **Assignment Editor** | 7:30am | 2.5hr | Commissions | COMMISSION-TEMPLATE.md |
| **Managing Editor** | 8:00am | 7hr | Issue (24 files) | 11 section pairs (art+copy) |
| **Editorial Director** | 7:00pm | 45min | Validation + approval | python validator.py |
| **Bulletin Bot** | 7:45pm | 1min | Published Issue | Telegram + subscribers |

---

## Next Steps

1. **Verify** each agent understands their role (read AGENTS.md + QUICK-START.md)
2. **Test** full workflow end-to-end once
3. **Document** any customizations or exceptions
4. **Automate** curator daily report (cron job)
5. **Monitor** publication rate (track on-time delivery)

---

**Start here:** Read QUICK-START.md, then your role's AGENTS.md.
