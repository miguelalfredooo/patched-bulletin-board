# Web Search Workflow — Visual Diagram

```
═══════════════════════════════════════════════════════════════════════════════

                    EDITORIAL BRIEF WRITTEN (6 PM Day 0)
                    Theme: Material Culture
                    Angles: 6 sections (Visual, Cultural, Critical, etc.)
                                 │
                                 ▼
═══════════════════════════════════════════════════════════════════════════════

                     ART DEPARTMENT: 7:30 AM → 9:15 AM (Day 1)
                     
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  STEP 1: RUN WEB SEARCH                                                    │
│  ─────────────────────────────────────────────────────────────────────────  │
│  python art-department-search.py --theme "Material Culture"                │
│                                                                             │
│  OUTPUT: web-search-results.json                                           │
│  ├─ 12 pieces: Section 1 (Visual Thinking)                                 │
│  ├─ 10 pieces: Section 2 (Cultural Context)                                │
│  ├─ 12 pieces: Section 3 (Critical Thinking)                               │
│  ├─ 9 pieces:  Section 4 (Tools & Innovation)                              │
│  ├─ 8 pieces:  Section 5 (Systems & Application)                           │
│  └─ 14 pieces: Section 6 (Material Culture) ⭐                              │
│     TOTAL: 65 pieces across 6 angles                                       │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  STEP 2: EVALUATE & SELECT (HUMAN CURATION)                                │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Art Dept curator reads all 65 pieces and asks:                            │
│  ✓ What is this work?                                                      │
│  ✓ Why does it matter?                                                     │
│  ✓ How does it fit the theme?                                              │
│  ✓ Which section?                                                          │
│  ✓ Is this in top 14-16?                                                   │
│                                                                             │
│  SELECT: 14 best pieces (2-4 per section)                                  │
│  
│  Section 1: Visual Thinking        (2 pieces selected from 12)             │
│  Section 2: Cultural Context       (2 pieces selected from 10)             │
│  Section 3: Critical Thinking      (2 pieces selected from 12)             │
│  Section 4: Tools & Innovation     (2 pieces selected from 9)              │
│  Section 5: Systems & Application  (2 pieces selected from 8)              │
│  Section 6: Material Culture ⭐     (4 pieces selected from 14)             │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  STEP 3: ANNOTATE SELECTIONS                                               │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  For each of 14 selected pieces, write:                                    │
│  ├─ Why (what does this work do?)                                          │
│  ├─ Insight (why it matters for this theme)                                │
│  └─ Connection (how it pairs with other pieces)                            │
│                                                                             │
│  OUTPUT: art-department-report.md                                          │
│  ├─ 14 pieces with full annotations                                        │
│  ├─ All URLs linked                                                        │
│  ├─ Editorial insight paragraph                                            │
│  └─ Organized by 6 sections                                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
═══════════════════════════════════════════════════════════════════════════════

                 ASSIGNMENT EDITOR: 9:15 AM → 11:00 AM (Day 1)
                 
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  RECEIVES: Art Department Curation Report                                  │
│  (14 pieces with sources + annotations + why)                              │
│                                                                             │
│  CREATES: 6 Commission Briefs                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  For each section:                                                         │
│  ├─ Read Art Dept's 2-4 curated pieces for this section                    │
│  ├─ Understand why they were selected                                      │
│  └─ Write commission brief that references these sources                   │
│                                                                             │
│  Example Commission 6 (Material Culture):                                  │
│  ┌─────────────────────────────────────────────────────────────────────────┤
│  │ Section 6: Material Culture Studies                                    │
│  │                                                                        │
│  │ Curated Sources (from Art Department web search):                     │
│  │ 1. "The Craft of Wooden Objects" - Object Lessons                    │
│  │    (Why: Deep study of craftsmanship and material making)            │
│  │                                                                        │
│  │ 2. "Making: Understanding Objects" - Craft Quarterly                │
│  │    (Why: Explores how making shapes design thinking)                │
│  │                                                                        │
│  │ 3. "What Objects Teach Design" - Design Museum                       │
│  │    (Why: Objects as design teachers)                                │
│  │                                                                        │
│  │ 4. "Artisan Practices and Modern Design" - Monocle                   │
│  │    (Why: Contemporary makers using traditional methods)              │
│  │                                                                        │
│  │ Assignment: Write 250-300 words on "What objects teach design"      │
│  │ Focus: Use the 4 sources to show:                                    │
│  │   • How making shapes thinking                                       │
│  │   • What skill and craft reveal                                      │
│  │   • Why materials matter                                             │
│  │   • Objects as cultural artifacts                                    │
│  │                                                                        │
│  │ Tone: Thoughtful, grounded in practice                              │
│  └─────────────────────────────────────────────────────────────────────────┘
│                                                                             │
│  OUTPUT: commissions.md (6 briefs, each with sources from curation)        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
═══════════════════════════════════════════════════════════════════════════════

                 MANAGING EDITOR: 12:00 PM → 6:45 PM (Day 1)
                 
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  RECEIVES: 6 Commission Briefs                                             │
│  (each with curated sources from web search)                               │
│                                                                             │
│  CREATES: 18 Issue Files                                                   │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  For SECTION 6 (Material Culture):                                         │
│  ├─ Receives Commission 6 with 4 sources from web search                   │
│  ├─ WRITES: 06-SECTION-COPY.md (250-300 words)                             │
│  │  ├─ Article informed by 4 curated sources                               │
│  │  ├─ Each paragraph cites one source                                     │
│  │  └─ Shows what objects and craft teach design                           │
│  │                                                                          │
│  └─ CREATES: 06-SECTION-ART.txt (ASCII visual)                             │
│     └─ Visual to accompany the article                                     │
│                                                                             │
│  Example Section 6 Article (rendering of web search):                      │
│  ┌─────────────────────────────────────────────────────────────────────────┤
│  │ Material Culture Studies                                               │
│  │                                                                        │
│  │ Objects hold knowledge. When designers understand making—the         │
│  │ skill, the materials, the constraints—they design better.            │
│  │                                                                        │
│  │ "The Craft of Wooden Objects" (Object Lessons) traces how            │
│  │ woodworkers develop deep understanding... [CITE SOURCE 1]            │
│  │                                                                        │
│  │ Craft Quarterly's "Making: Understanding Objects" goes deeper...      │
│  │ [CITE SOURCE 2]                                                       │
│  │                                                                        │
│  │ The Design Museum's research on "What Objects Teach Design"           │
│  │ shows that objects are cultural artifacts... [CITE SOURCE 3]         │
│  │                                                                        │
│  │ Finally, Monocle's interview with artisans shows that                │
│  │ traditional craft methods... [CITE SOURCE 4]                         │
│  │                                                                        │
│  │ The insight: Material literacy is foundational...                     │
│  └─────────────────────────────────────────────────────────────────────────┘
│                                                                             │
│  OUTPUT: 18 Files Total                                                    │
│  ├─ 00-COVER-ART.txt                                                      │
│  ├─ 01-06-SECTION-ART.txt (6 visuals)                                      │
│  ├─ 01-06-SECTION-COPY.md (6 articles citing web search sources)           │
│  ├─ 07-METADATA-FOOTER.txt                                                │
│  └─ manifest.json                                                          │
│                                                                             │
│  ALL ARTICLES informed by curated web search sources                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
═══════════════════════════════════════════════════════════════════════════════

             EDITORIAL DIRECTOR: 7:00 PM → 7:45 PM (Day 1)
             
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  VALIDATES: Issue Structure + Curation Quality                             │
│                                                                             │
│  Checks:                                                                   │
│  ✓ All 18 files present                                                    │
│  ✓ All 6 sections complete                                                 │
│  ✓ Sources cited correctly                                                 │
│  ✓ Curation visible in final articles                                      │
│  ✓ Issue delivers on editorial vision                                      │
│                                                                             │
│  APPROVES: Issue for publication                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
═══════════════════════════════════════════════════════════════════════════════

                  BOT: 8:00 PM → 8:15 PM (Day 1)
                  
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  LOADS: 18 Issue Files                                                     │
│  (all informed by curated web search)                                       │
│                                                                             │
│  ASSEMBLES:                                                                │
│  ├─ ACT 1: Visual message (cover + 6 section visuals)                      │
│  └─ ACT 2: Full edition message (6 section pairs + footer)                 │
│                                                                             │
│  Section 6 Assembly:                                                       │
│  ┌─────────────────────────────────────────────────────────────────────────┤
│  │ **Material Culture Studies**                                           │
│  │                                                                        │
│  │ [ASCII VISUAL from 06-SECTION-ART.txt]                               │
│  │                                                                        │
│  │ [ARTICLE from 06-SECTION-COPY.md]                                    │
│  │ Objects hold knowledge. When designers understand making...          │
│  │ (Cites 4 web search sources throughout)                              │
│  └─────────────────────────────────────────────────────────────────────────┘
│                                                                             │
│  PUBLISHES: To Telegram Subscribers                                        │
│                                                                             │
│  Result: Readers see complete 6-section magazine with Section 6           │
│          grounded in curated web search on craft, objects, materials       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
═══════════════════════════════════════════════════════════════════════════════

                        PUBLISHED TO TELEGRAM
                        
                Design By Bulletin™ — Issue 021
                     Material Culture
                     
                [6-Section Magazine]
           [All informed by curated web search]
        [Section 6 deep + sourced + grounded]
                     
═══════════════════════════════════════════════════════════════════════════════
```

---

## Condensed Version

```
SEARCH       Art Dept: 7:30 AM
  ↓
  40-60 pieces discovered
  ↓
PROCESS      Art Dept: 8:00-9:15 AM
  ↓
  14 pieces curated + annotated
  ↓
COMMISSION   Assignment Editor: 9:15-11:00 AM
  ↓
  6 briefs with sources
  ↓
WRITE        Managing Editor: 12:00-6:45 PM
  ↓
  6 articles citing sources
  18 total files
  ↓
VALIDATE     Editorial Director: 7:00 PM
  ↓
  Issue approved
  ↓
PUBLISH      Bot: 8:00 PM
  ↓
  Telegram subscribers see
  6-section magazine
  Section 6 informed by web search
```

---

## The Question Answered

**Where does search happen?** 
→ 7:30 AM, Art Department workspace

**Where is it processed?** 
→ 8:00-9:15 AM, Art Department (curation + annotation)

**Where is it rendered to the issue?** 
→ 12:00-6:45 PM, Managing Editor (writes articles citing sources)

**Where is it published?** 
→ 8:00 PM, Bot (renders to Telegram with citations visible)

**What does subscriber see?** 
→ 6-section magazine with Section 6 sourced + deep + credible
