# Web Search in the Agent Workflow — Direct Answer

**Your Question:** "Where in the agent flow does the search happen and is processed and rendered to the issue?"

**Short Answer:**
```
Search: 7:30 AM — Art Department (runs search script)
Process: 8:00-9:15 AM — Art Department (evaluates + curates)
Render: 12:00-6:45 PM — Managing Editor (writes articles citing sources)
Publish: 8:00 PM — Bot (renders to Telegram)
```

---

## LAYER 1: Where Search Happens (7:30 AM)

### Location: Art Department Workspace
**File:** `/Users/blackmachete/.openclaw/workspace-bulletin-art-department/`

### Action:
```bash
# Art Department runs this command
python art-department-search.py \
  --theme "Material Culture" \
  --issue 021 \
  --sections 6 \
  --provider "exa"
```

### Output:
```
issues/021/web-search-results.json
(40-60 pieces organized by section)
```

### What happens:
1. **Script executes OpenClaw web search API** with theme-specific queries
2. **Results are organized by 6 section angles** (automatic pre-sorting)
3. **JSON file created** with all metadata (title, URL, source, relevance, date)
4. **Art Department now has raw material** to evaluate

**Time:** 2-3 minutes (automated)

---

## LAYER 2: Where Search is Processed (8:00-9:15 AM)

### Location: Art Department (same workspace)
### Agent: Art Department Curator (human)

### Process:
```
1. Read editorial brief (understand 6 angles)
   ↓
2. Read search results JSON file
   ↓
3. FOR EACH of 40-60 pieces:
   ├─ Read title, URL, source, relevance
   ├─ Visit URL (or read summary)
   ├─ Ask: "What is this work?"
   ├─ Ask: "Why does it matter?"
   ├─ Ask: "How does it fit our theme?"
   ├─ Ask: "Which section (1-6)?"
   ├─ Rate: "Is this in top 14-16?"
   └─ Annotate: Write why/insight/connection
   ↓
4. SELECT 14-16 best pieces (filter from 40-60)
   ↓
5. ORGANIZE by section (2-4 pieces per section)
   ↓
6. WRITE annotations for each
   ├─ Why: What does this work do?
   ├─ Insight: Why does it matter for this theme?
   └─ Connection: How does it pair with other selections?
   ↓
7. WRITE editorial insight paragraph
   └─ "These 14 pieces argue that..."
   ↓
8. OUTPUT: Art Department Report
```

### Output:
```
issues/021/art-department-report.md
(14 pieces + annotations + editorial insight)
```

### What's special about Section 6:
```
Section 6: Material Culture Studies (4 pieces) ⭐

From search results, Art Dept selected:
  • "The Craft of Wooden Objects" - Object Lessons
    Why: Deep study of craftsmanship and making
    Insight: Objects embody the knowledge of makers
    Connection: Pairs with Pieces 12-14 to show material thinking

  • "Making: Understanding Objects" - Craft Quarterly
    Why: Explores how making shapes design thinking
    Insight: Skill and process matter as much as aesthetics
    Connection: Shows what hands-on knowledge teaches

  • "What Objects Teach Design" - Design Museum
    Why: Objects as teachers, not just products
    Insight: Cultural and material significance visible in objects
    Connection: Grounds design thinking in actual making

  • "Artisan Practices and Modern Design" - Monocle
    Why: Contemporary makers using traditional methods
    Insight: Modern practice learns from craft tradition
    Connection: Bridges past and present in material thinking
```

**Time:** 45-75 minutes (human evaluation + curation)

---

## LAYER 3: Where Search Results are Rendered to the Issue (12:00-6:45 PM)

### Location: Issue creation (Managing Editor's workspace)

### Agent: Managing Editor (writer)

### How it flows:
```
1. Managing Editor reads Commission 6:
   "Section 6: Material Culture Studies
    
    Curated sources from Art Department (from web search):
    • 'The Craft of Wooden Objects' - Object Lessons
    • 'Making: Understanding Objects' - Craft Quarterly
    • 'What Objects Teach Design' - Design Museum
    • 'Artisan Practices and Modern Design' - Monocle
    
    Focus: What objects and craft teach design
    Word count: 250-300"

   ↓

2. Managing Editor WRITES article for 06-SECTION-COPY.md
   
   Structure:
   ┌─ Paragraph 1: Hook (why this matters)
   │
   ├─ Paragraph 2: What Lessons show...
   │  [CITE: "The Craft of Wooden Objects"]
   │
   ├─ Paragraph 3: Craft Quarterly demonstrates...
   │  [CITE: "Making: Understanding Objects"]
   │
   ├─ Paragraph 4: Design Museum research...
   │  [CITE: "What Objects Teach Design"]
   │
   ├─ Paragraph 5: Modern makers (Monocle)...
   │  [CITE: "Artisan Practices and Modern Design"]
   │
   └─ Conclusion: Objects teach us that...

   ↓

3. Managing Editor writes 06-SECTION-ART.txt
   (ASCII visual to accompany the article)

   ↓

4. File: 06-SECTION-COPY.md
   Contains:
   ✓ 250-300 words
   ✓ 4 sources cited (from web search)
   ✓ Art Dept's curation perspective visible
   ✓ Ready for bot assembly
```

### Example Article (Section 6):

```markdown
# Material Culture Studies

Objects hold knowledge. When designers understand making—the skill,
the materials, the constraints—they design better. These four pieces
show what craft teaches design thinking.

"The Craft of Wooden Objects" (Object Lessons) traces how woodworkers
develop deep understanding of their material. Wood isn't inert; it has
memory, grain patterns, seasonal movement. A craftsperson doesn't fight
these properties—they use them. This is design thinking grounded in material.

Craft Quarterly's "Making: Understanding Objects" goes deeper. Making isn't
separate from thinking; it *is* thinking. Your hands teach your mind. When
a designer makes something—builds a prototype, works with materials—the
feedback loop between hand and brain shapes every decision. This is why
prototyping matters.

The Design Museum's research on "What Objects Teach Design" shows that
objects are cultural artifacts. What we make reveals what we value. Materials,
forms, proportions—all carry meaning. Designers who read objects carefully
design with cultural awareness.

Finally, Monocle's interview with artisans shows that traditional craft methods
aren't nostalgic—they're still advancing. Modern makers combine digital tools
with hand techniques. They understand that computers generate possibilities,
but human judgment and material knowledge refine them.

The insight: Material literacy is foundational. When you know your materials—
not abstractly, but through making—you design with confidence and respect.
Objects and craft teach us that knowledge lives in hands and materials,
not just in ideas.
```

**This article is:**
- ✓ Informed by 4 curated sources from web search
- ✓ Cites sources explicitly
- ✓ Shows Art Dept's editorial perspective
- ✓ Ready to render to Telegram

**Time:** 30-45 minutes (for writer to craft section)

---

## LAYER 4: Where Search Results are Rendered to Telegram (8:00 PM)

### Location: Bot Publishing
### Agent: Bot (automatic)

### Process:
```
1. Bot loads issues/021/06-SECTION-COPY.md
   (Contains article citing 4 web search sources)

2. Bot loads issues/021/06-SECTION-ART.txt
   (ASCII visual created by Managing Editor)

3. Bot assembles Section 6:
   
   ┌─────────────────────────────────────┐
   │ **Material Culture Studies**         │
   │                                     │
   │ [ASCII visual here]                 │
   │                                     │
   │ Objects hold knowledge. When        │
   │ designers understand making—the     │
   │ skill, the materials, the          │
   │ constraints—they design better.     │
   │ These four pieces show what craft   │
   │ teaches design thinking.            │
   │                                     │
   │ "The Craft of Wooden Objects"      │
   │ (Object Lessons) traces how...      │
   │                                     │
   │ [Full article continues, citing     │
   │  all 4 web search sources]          │
   └─────────────────────────────────────┘

4. Renders in Telegram as part of ACT 2 (full edition)

5. Subscribers see complete 6-section magazine
   with Section 6 fully grounded in curated web search
```

---

## Timeline Summary

```
7:30 AM: WEB SEARCH HAPPENS
  ↓
  python art-department-search.py
  ↓
  OUTPUT: web-search-results.json (40-60 pieces)

8:00-9:15 AM: SEARCH RESULTS PROCESSED
  ↓
  Art Department curator evaluates + selects + annotates
  ↓
  OUTPUT: art-department-report.md (14 curated pieces)

9:15-11:00 AM: CURATION MAPPED TO COMMISSIONS
  ↓
  Assignment Editor creates 6 commissions (each references curated pieces)
  ↓
  OUTPUT: commissions.md (6 briefs with sources)

12:00-6:45 PM: CURATION RENDERED AS ARTICLES
  ↓
  Managing Editor writes 6 sections, citing curated sources
  ↓
  OUTPUT: 06-SECTION-COPY.md (article citing 4 web search pieces)
           06-SECTION-ART.txt (visual)

7:00 PM: VALIDATION
  ↓
  Editorial Director verifies curation is visible in final articles
  ↓
  OUTPUT: APPROVED issue (18 files)

8:00 PM: BOT PUBLISHES
  ↓
  Bot assembles Section 6 (visual + article citing web search sources)
  ↓
  PUBLISHED to Telegram

Subscribers see: Material Culture article grounded in 4 curated web sources
```

---

## What's Rendered to the Final Issue

### In the Magazine (what subscribers see):

**Section 6: Material Culture Studies**

```
[ASCII visual]

Objects hold knowledge. When designers understand making...

[Paragraph citing "The Craft of Wooden Objects"]
[Paragraph citing "Making: Understanding Objects"]
[Paragraph citing "What Objects Teach Design"]
[Paragraph citing "Artisan Practices and Modern Design"]

[Conclusion]
```

### What's NOT in the magazine:
- ❌ Raw search results (40-60 pieces)
- ❌ Art Dept's evaluation notes
- ❌ Commission briefs
- ❌ File structure

### What IS in the magazine:
- ✅ 4 curated sources cited in prose
- ✅ Article informed by web search
- ✅ Art Dept's editorial perspective
- ✅ Section 6 grounded in material culture content

---

## The Key Insight

**Web search doesn't appear directly in the issue.**

Instead:
1. Search provides 40-60 raw options
2. Art Department curates 14-16 best pieces
3. Managing Editor writes with those sources in hand
4. Article cites the sources (not the raw search)
5. Readers see polished prose informed by curated pieces

**It's like cooking:**
- Web search = ingredient market (many options)
- Art Department = chef's selection (best ingredients)
- Managing Editor = cooking (combining ingredients into a dish)
- Bot = plating (beautiful presentation)
- Subscribers = diners (see finished dish with ingredients visible)

---

## For Section 6 Specifically

**Web search finds:** 14+ pieces about objects, craft, making, material culture

**Art Department selects:** 4 best pieces that work together

**Managing Editor cites:** All 4 in the article

**Subscriber reads:** Article that shows (through sources) why craft matters

**Result:** Section 6 is deep, sourced, credible, grounded in actual design thinking about materials

---

*Search → Curation → Writing → Publishing*

*Each layer adds value. The final article is better because it started with good sources.*
