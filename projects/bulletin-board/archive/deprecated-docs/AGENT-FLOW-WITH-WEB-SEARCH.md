# Design By Bulletin™ — Agent Flow with Web Search Integration

**Question:** Where does web search happen, get processed, and flow into the final issue?

**Answer:** Web search is an input to the Art Department's curation process. It provides raw material that Art Department evaluates, selects, and annotates. Those curated pieces then flow to Assignment Editor → Managing Editor → Final Issue.

---

## The Complete Agent Flow

```
┌─────────────────────────────────────────────────────────────────┐
│ DAY 0 (6 PM PT) — EDITORIAL DIRECTOR                            │
│ Writes Editorial Brief                                           │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                   ┌───────▼───────┐
                   │ BRIEF SENT TO  │
                   │ ALL AGENTS     │
                   └───────┬───────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ Art Dept     │   │ Assignment   │   │ Managing     │
│ (reads)      │   │ Editor (reads)   Editor (reads)   │
└──────────────┘   └──────────────┘   └──────────────┘


┌─────────────────────────────────────────────────────────────────┐
│ DAY 1 (7:30 AM PT) — ART DEPARTMENT CURATION                    │
│ This is where WEB SEARCH enters the workflow                     │
└──────────────────────────┬──────────────────────────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ STEP 1: Read Editorial Brief      │
         │ (Understand theme + 6 angles)     │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ STEP 2: RUN WEB SEARCH ⭐         │
         │ (← SEARCH HAPPENS HERE)           │
         │                                   │
         │ python art-department-search.py   │
         │   --theme "Material Culture"      │
         │   --provider "exa"                │
         │   --sections 6                    │
         │                                   │
         │ Returns: 40-60 pieces organized   │
         │ by section angle                  │
         │                                   │
         │ Output file:                      │
         │ issues/021/web-search-results.json│
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ STEP 3: EVALUATE SEARCH RESULTS   │
         │ (← PROCESSING HAPPENS HERE)       │
         │                                   │
         │ For each of 40-60 pieces:         │
         │ ✓ What is this work?              │
         │ ✓ Why does it matter?             │
         │ ✓ How does it fit the theme?      │
         │ ✓ Which section? (1-6)            │
         │ ✓ How deep is the insight?        │
         │                                   │
         │ Manual review by curator (Art Dept)
         │ Not algorithmic — taste-based     │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ STEP 4: SELECT 14-16 BEST PIECES  │
         │ (← SELECTION HAPPENS HERE)        │
         │                                   │
         │ From 40-60 → Choose 14-16         │
         │ Must show variety + narrative     │
         │ Must teach depth                  │
         │ Must serve the theme              │
         │                                   │
         │ Output file:                      │
         │ issues/021/art-dept-curation.md   │
         │ (with sources, annotations, why)  │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ STEP 5: ANNOTATE SELECTIONS       │
         │ (← ANNOTATION HAPPENS HERE)       │
         │                                   │
         │ For each 14-16 piece, write:      │
         │ • Why (what does it do?)          │
         │ • Insight (why it matters)        │
         │ • Connection (how it pairs)       │
         │                                   │
         │ Output: Curated report with       │
         │ full context + sources            │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ STEP 6: BUILD NARRATIVE           │
         │ (← EDITORIAL INSIGHT CREATED)     │
         │                                   │
         │ Organize 14-16 pieces by          │
         │ 6 section angles:                 │
         │                                   │
         │ Section 1: Visual Thinking (2)    │
         │ Section 2: Cultural Context (2)   │
         │ Section 3: Critical Thinking (2)  │
         │ Section 4: Tools & Innovation (2) │
         │ Section 5: Systems & App (2)      │
         │ Section 6: Material Culture (4)   │
         │                                   │
         │ Write editorial insight:          │
         │ "These 14 pieces argue that..."   │
         │                                   │
         │ Output: Final curation report     │
         │ File: issues/021/                 │
         │   art-department-report.md        │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ STEP 7: SIGNAL COMPLETION         │
         │                                   │
         │ python checkpoint.py signal \     │
         │   art-department 021 \            │
         │   "14 pieces curated"             │
         └─────────────────┬─────────────────┘
                           │
                   ┌───────▼───────┐
                   │ ART DEPT DONE  │
                   │ (9:15 AM)      │
                   └───────┬───────┘


┌─────────────────────────────────────────────────────────────────┐
│ DAY 1 (9:15 AM PT) — ASSIGNMENT EDITOR                          │
│ Takes Art Dept's curated pieces → Creates commissions           │
└──────────────────────────┬──────────────────────────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ RECEIVES: Art Dept curation report │
         │ (14 pieces, organized by section,  │
         │  with sources + annotations)       │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ MAPS CURATION TO COMMISSIONS      │
         │                                   │
         │ For each of 6 sections:           │
         │ ✓ Read curated pieces for section │
         │ ✓ Understand Art Dept's angles    │
         │ ✓ Create commission brief         │
         │ ✓ Guide writer with sources +     │
         │   annotations from curation       │
         │                                   │
         │ Example Commission 6:             │
         │ "Section 6: Material Culture      │
         │  Study these 4 curated pieces:    │
         │  [links to pieces from search]    │
         │  Focus: objects, materials, craft │
         │  Angle: What objects teach design │
         │  Word count: 250-300"             │
         │                                   │
         │ Output file:                      │
         │ issues/021/commissions.md         │
         │ (6 briefs, each references        │
         │  curated pieces for that section) │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ SIGNAL COMPLETION                 │
         │                                   │
         │ python checkpoint.py signal \     │
         │   assignment 021 \                │
         │   "6 commissions ready"           │
         └─────────────────┬─────────────────┘
                           │
                   ┌───────▼───────┐
                   │ ASSIGNMENT    │
                   │ EDITOR DONE   │
                   │ (11:00 AM)    │
                   └───────┬───────┘


┌─────────────────────────────────────────────────────────────────┐
│ DAY 1 (12:00 PM PT) — MANAGING EDITOR                           │
│ Takes commissions → Writes 6 sections + creates visuals         │
└──────────────────────────┬──────────────────────────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ RECEIVES: 6 commissions           │
         │ (each references curated pieces   │
         │  from web search)                 │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ CREATE ISSUE SCAFFOLD             │
         │                                   │
         │ python scaffold.py \              │
         │   issues/021 \                    │
         │   --sections 6 \                  │
         │   --theme "Material Culture"      │
         │                                   │
         │ Creates 18 files:                 │
         │ ✓ 00-COVER-ART.txt                │
         │ ✓ 01-06-SECTION-ART.txt (6 visual)
         │ ✓ 01-06-SECTION-COPY.md (6 prose) │
         │ ✓ 07-METADATA-FOOTER.txt          │
         │ ✓ manifest.json                   │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ WRITE EACH SECTION (6 articles)   │
         │                                   │
         │ For each section file (*.md):     │
         │ ✓ Read commission brief           │
         │ ✓ Reference curated pieces        │
         │   (from art dept + web search)    │
         │ ✓ Write 250-300 word article      │
         │ ✓ Cite sources appropriately      │
         │                                   │
         │ Section 6 example:                │
         │ Commission says:                  │
         │ "Focus: objects, materials, craft │
         │  Sources: [4 curated pieces from  │
         │           web search]             │
         │  Angle: What objects teach design"│
         │                                   │
         │ Managing Editor writes article    │
         │ informed by:                      │
         │ • Curated pieces from web search  │
         │ • Art Dept's annotations          │
         │ • Editorial brief from Director   │
         │                                   │
         │ Output files:                     │
         │ 01-06-SECTION-COPY.md             │
         │ (6 articles, all informed by      │
         │  curated search results)          │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ CREATE SECTION VISUALS (6)        │
         │                                   │
         │ For each section:                 │
         │ ✓ Design ASCII art                │
         │ ✓ Reflect section theme           │
         │ ✓ Match editorial tone            │
         │                                   │
         │ Output files:                     │
         │ 01-06-SECTION-ART.txt             │
         │ (6 ASCII visuals)                 │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ CREATE COVER & FOOTER             │
         │                                   │
         │ ✓ Cover art (00-COVER-ART.txt)    │
         │ ✓ Footer (07-METADATA-FOOTER.txt) │
         │                                   │
         │ All 18 files now complete         │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ SIGNAL COMPLETION                 │
         │                                   │
         │ python checkpoint.py signal \     │
         │   managing 021 \                  │
         │   "All 6 sections complete, \     │
         │    18/18 files done"              │
         └─────────────────┬─────────────────┘
                           │
                   ┌───────▼───────┐
                   │ MANAGING      │
                   │ EDITOR DONE   │
                   │ (6:45 PM)     │
                   └───────┬───────┘


┌─────────────────────────────────────────────────────────────────┐
│ DAY 1 (7:00 PM PT) — EDITORIAL DIRECTOR (VALIDATION)            │
│ Validates issue + verifies curation delivered on vision         │
└──────────────────────────┬──────────────────────────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ VALIDATE ISSUE STRUCTURE          │
         │                                   │
         │ python validator.py issues/021    │
         │                                   │
         │ Checks:                           │
         │ ✓ 18 files present                │
         │ ✓ 6 sections complete             │
         │ ✓ Manifest valid                  │
         │ ✓ All content readable            │
         │                                   │
         │ Expected: ✓ VALID                 │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ PREVIEW ON TELEGRAM               │
         │                                   │
         │ /admin-preview 021                │
         │                                   │
         │ Renders all 6 sections + visuals  │
         │ Shows how subscribers will see it │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ VALIDATE CURATION → VISION        │
         │                                   │
         │ Check: Did Art Dept deliver?      │
         │ ✓ Does curation match brief?      │
         │ ✓ Do 6 sections explore theme?    │
         │ ✓ Is Section 6 strong?            │
         │ ✓ Does overall feel cohesive?     │
         │ ✓ Does final issue deliver        │
         │   on editorial vision?            │
         │                                   │
         │ If issues: notify Managing Editor │
         │ Request revisions + resubmit      │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ APPROVE FOR PUBLICATION           │
         │                                   │
         │ python checkpoint.py signal \     │
         │   editorial 021 \                 │
         │   "Issue 021 valid + approved"    │
         └─────────────────┬─────────────────┘
                           │
                   ┌───────▼────────┐
                   │ EDITORIAL      │
                   │ VALIDATION DONE│
                   │ (7:45 PM)      │
                   └───────┬────────┘


┌─────────────────────────────────────────────────────────────────┐
│ DAY 1 (8:00 PM PT) — BOT PUBLISHING                             │
│ Renders issue + publishes to Telegram subscribers               │
└──────────────────────────┬──────────────────────────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ LOAD ISSUE                        │
         │                                   │
         │ bot.validate_phase_2()            │
         │ bot._assemble_issue(issues/021/)  │
         │                                   │
         │ Reads all 18 files:               │
         │ • Manifest (detects 6 sections)   │
         │ • Cover art                       │
         │ • 6 section visuals               │
         │ • 6 section articles              │
         │ • Footer                          │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ ASSEMBLE INTO MESSAGES            │
         │                                   │
         │ ACT 1: Visual-only message        │
         │ (Cover + 6 section ASCII art)     │
         │                                   │
         │ ACT 2: Full edition message       │
         │ (Paired visuals + 6 articles +    │
         │  footer)                          │
         │                                   │
         │ Each section:                     │
         │ ┌─Section Header────────┐         │
         │ │ [ASCII visual]         │         │
         │ │ [250-300 word article] │         │
         │ └────────────────────────┘         │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ VALIDATE MESSAGE FORMAT           │
         │                                   │
         │ Checks:                           │
         │ ✓ ACT 1: Code blocks enforced     │
         │ ✓ ACT 2: Proper formatting        │
         │ ✓ Links present + valid           │
         │ ✓ Content length OK               │
         │ ✓ All 6 sections present          │
         └─────────────────┬─────────────────┘
                           │
         ┌─────────────────▼─────────────────┐
         │ PUBLISH TO TELEGRAM               │
         │                                   │
         │ Send to all subscribers:          │
         │ ✓ ACT 1 (visual)                  │
         │ ✓ ACT 2 (full edition)            │
         │                                   │
         │ Subscribers see:                  │
         │ Design By Bulletin™ — Issue 021   │
         │ [Full 6-section magazine]         │
         └─────────────────┬─────────────────┘
                           │
                   ┌───────▼──────┐
                   │ PUBLISHED ✓  │
                   │ (8:15 PM)    │
                   └──────────────┘
```

---

## Where Web Search Fits (Detailed)

### **INPUT POINT: Art Department Curation (7:30 AM)**

```
Web Search INPUT
    ↓
Executed by: python art-department-search.py
    ↓
Returns: 40-60 pieces (issues/021/web-search-results.json)
    ↓
Organized by: 6 section angles from editorial brief
    ↓
Example structure:
{
  "section_1_visual_thinking": [
    {
      "title": "Material Perception Design",
      "url": "https://example.com/article",
      "source": "Design Observer",
      "relevance": "Explores visual properties of materials",
      "date": "2026-05-01"
    },
    ...
  ],
  "section_6_material_culture": [
    {
      "title": "The Craft of Wooden Objects",
      "url": "https://example.com/craft",
      "source": "Object Lessons",
      "relevance": "Deep study of craftsmanship and making",
      "date": "2026-04-28"
    },
    ...
  ]
}
```

### **PROCESSING POINT: Art Department Evaluation (8:00-9:15 AM)**

```
Web Search RESULTS processed by:
    ↓
Art Department curator (human)
    ↓
EVALUATES each piece:
  • What is this work?
  • Why does it matter?
  • How does it fit the theme?
  • Which section? (1-6)
    ↓
SELECTS 14-16 best pieces (NOT all 40-60)
    ↓
ANNOTATES each selection:
  • Why (what does it do?)
  • Insight (why it matters)
  • Connection (how it pairs)
    ↓
ORGANIZES by 6 sections:
  • Section 1: Visual Thinking (2 pieces)
  • Section 2: Cultural Context (2 pieces)
  • Section 3: Critical Thinking (2 pieces)
  • Section 4: Tools & Innovation (2 pieces)
  • Section 5: Systems & Application (2 pieces)
  • Section 6: Material Culture (4 pieces) ⭐
    ↓
WRITES editorial insight:
  "These 14 pieces argue that..."
    ↓
OUTPUT: issues/021/art-department-report.md
  (with sources, annotations, editorial insight)
```

### **TRANSMISSION POINT: Assignment Editor (9:15-11:00 AM)**

```
Curated pieces from web search
    ↓
RECEIVED by Assignment Editor
    ↓
MAPPED to 6 commissions:
    ↓
For each section:
  ✓ Read Art Dept's 2-4 curated pieces
  ✓ Understand their annotations + why they matter
  ✓ Write commission brief for writer
  ✓ Include sources & context from curation
    ↓
Example Commission #6:
  "Section 6: Material Culture Studies
   
   Curated sources from Art Department:
   • 'The Craft of Wooden Objects' - Object Lessons
     (Why: Deep study of craftsmanship)
   • 'Making: Understanding Objects' - Craft Quarterly
     (Why: Shows how objects embody values)
   • 'What Objects Teach Design' - Design Museum
     (Why: Objects as design teachers)
   • 'Artisan Practices' - Monocle
     (Why: Modern makers using traditional methods)
   
   Your angle: What do objects and materials teach us about design?
   Word count: 250-300 words
   Tone: Thoughtful, grounded in practice
   
   Use these sources to inform your writing. Show:
   - How making shapes thinking
   - What skill and craft reveal
   - Why materials matter
   - Objects as cultural artifacts"
    ↓
OUTPUT: issues/021/commissions.md
  (6 briefs, each informed by curated pieces)
```

### **WRITING POINT: Managing Editor (12:00-6:45 PM)**

```
Commission briefs (informed by curated pieces)
    ↓
RECEIVED by Managing Editor
    ↓
FOR EACH SECTION:
  ✓ Read commission brief
  ✓ See sources from Art Dept curation
  ✓ Review annotations + context
  ✓ WRITE 250-300 word article
  ✓ CITE curated sources appropriately
  ✓ CREATE ASCII visual
    ↓
Example for Section 6:
  Commission says:
    "Sources: [4 curated pieces about craft + objects]
     Angle: What objects teach design
     Focus: Materials, making, craftsmanship"
  
  Managing Editor writes:
    "Articles [1-4] provided by Art Department
     from web search show us that when designers
     understand making, they design better.
     
     Object Lessons argues... [cite]
     The Craft Renaissance demonstrates... [cite]
     Design Museum research shows... [cite]
     Monocle's interview with artisans reveals... [cite]
     
     What objects teach: that skill matters,
     materials have agency, making is thinking."
    ↓
OUTPUT: 06-SECTION-COPY.md
  (Article informed by curated web search pieces)
         06-SECTION-ART.txt
  (Visual to accompany the article)
```

### **RENDERING POINT: Bot Publishing (8:00 PM)**

```
All 18 files (informed by web search curation)
    ↓
LOADED by Bot
    ↓
ASSEMBLED into 2 messages:
  ACT 1: Visual (cover + 6 section ASCII art)
  ACT 2: Full edition (visuals + 6 articles + footer)
    ↓
Section 6 renders as:
  **Material Culture Studies**
  [ASCII visual created by Managing Editor]
  [Article based on 4 curated web search pieces]
  [Sources cited from Art Department curation]
    ↓
PUBLISHED to Telegram
    ↓
SUBSCRIBERS SEE:
  Complete 6-section magazine
  Every section informed by curated web search
  Section 6 deep and substantive
```

---

## Data Flow Summary

```
                    WEB SEARCH RESULTS
                    (40-60 pieces)
                          ↓
                    ┌─────────────┐
                    │ ART DEPT    │
                    │ (Curation)  │
                    └─────┬───────┘
                          ↓
                   CURATED REPORT
                   (14 pieces with
                    annotations +
                    editorial insight)
                          ↓
                    ┌─────────────┐
                    │ ASSIGNMENT  │
                    │ EDITOR      │
                    │ (Mapping)   │
                    └─────┬───────┘
                          ↓
                   COMMISSION BRIEFS
                   (6 briefs, each
                    references curated
                    web search pieces)
                          ↓
                    ┌─────────────┐
                    │ MANAGING    │
                    │ EDITOR      │
                    │ (Writing)   │
                    └─────┬───────┘
                          ↓
                   ISSUE FILES
                   (6 articles +
                    6 visuals +
                    18 total files,
                    all informed by
                    web search)
                          ↓
                    ┌─────────────┐
                    │ EDITORIAL   │
                    │ DIRECTOR    │
                    │ (Validation)│
                    └─────┬───────┘
                          ↓
                   APPROVED ISSUE
                   (Ready to publish)
                          ↓
                    ┌─────────────┐
                    │ BOT         │
                    │ (Publishing)│
                    └─────┬───────┘
                          ↓
                   TELEGRAM SUBSCRIBERS
                   (6-section magazine)
```

---

## Key Points

### **Web Search is NOT:**
- ❌ The final content (that's Managing Editor's job)
- ❌ Automated writing (Art Dept evaluates, chooses, annotates)
- ❌ Direct to bot (flows through 3 agents first)
- ❌ Raw inclusion (filtered through taste + curation)

### **Web Search IS:**
- ✅ Raw material discovery (40-60 pieces)
- ✅ Organized by section angle (pre-sorted by query)
- ✅ Evaluated & selected by human curator (Art Dept)
- ✅ Annotated with why it matters (editorial context)
- ✅ Mapped to commissions (guides writers)
- ✅ Cited in final articles (sources credited)
- ✅ Rendered in final issue (visible to subscribers)

### **Flow Timeline:**
```
7:30 AM:  Web search executed        → 40-60 pieces discovered
8:00 AM:  Art Dept evaluates         → 14-16 selected + annotated
9:15 AM:  Assignment Editor receives → 6 commissions created
12:00 PM: Managing Editor receives   → 6 articles written (citing sources)
7:00 PM:  Editorial validates        → Issue approved
8:00 PM:  Bot publishes              → Subscribers see final issue
```

---

## For Issue 021 (Material Culture)

### Web Search finds:
- 12 pieces on visual material perception
- 10 pieces on cultural material meaning
- 12 pieces on material history/theory
- 9 pieces on material technology/tools
- 8 pieces on material systems/supply
- **14 pieces on objects, craft, making, material culture** ⭐

### Art Department selects:
- 2 best pieces per section (1-5)
- 4 best pieces for Section 6 ⭐
- Total: 14 pieces

### Managing Editor writes:
- 6 articles (250-300 words each)
- Each informed by 2-4 curated pieces
- Section 6 grounded in 4 strong sources on craft/objects
- All citations included

### Subscribers see:
- Complete 6-section magazine
- Section 6 with depth on material culture
- All informed by curated web search
- Sources visible/credited

---

*Web search is the discovery engine. Art Department is the editor. Managing Editor is the writer. Bot is the publisher.*

*Each stage refines and adds value. The final issue is better because it starts with good sources.*

