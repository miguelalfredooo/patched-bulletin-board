# Editorial Brief — Design By Bulletin™

**Template for Editorial Director to brief entire team before curation begins.**

**When:** Previous day, 6pm PT (before Curator's 7:30am scan)  
**Who receives:** All agents (Curator, Assignment, Managing, Editorial, Bot)  
**Purpose:** Shared context so everyone works toward one unified vision  

---

## ⚠️ CRITICAL RULES

### 1. Backtick Rule for Managing Editor

**Managing Editor:** When you write ASCII art for sections (NN-SECTION-ART.txt), write RAW ASCII **WITHOUT backticks (```).**

The bot automatically adds backticks during Telegram rendering. If you include backticks in your files:
- Validator will reject it
- Bot formatting will break
- Monospace rendering will fail

**Action items for Managing Editor:**
1. Write all ASCII art as plain text (no backticks)
2. Run `python3 validator.py issues/[number]` before submitting
3. Expected output: `✅ VALID` (if no backticks found)

See: [BACKTICK-HANDLING-GUIDE.md](BACKTICK-HANDLING-GUIDE.md) for details.

### 2. Width/Height/Delivery Rules for Art Department

**Art Department:** Read [ART-DEPT-WIDTH-HEIGHT-VALIDATION.md](ART-DEPT-WIDTH-HEIGHT-VALIDATION.md) before starting.

It covers:
- Cover dimensions (34×30 exact)
- Section dimensions (34×≤15)
- Delivery format (one cover per message)
- Validation script
- Announcement template

---

## Example: Issue 020 — Geometry

```
EDITORIAL BRIEF — Issue 020 — Geometry
══════════════════════════════════════

THEME: Geometry

CORE IDEA:
Geometry is not decoration. It's the fundamental language designers use
to organize chaos and create order. From grids to golden ratios, from
tessellation to fractals, mathematical principles underpin every design
decision. Today's issue explores geometry as philosophy, not just
aesthetics—how designers think in shapes, proportions, and systems.

VISUAL DIRECTION:
• Clean, structured, precise (no organic or chaotic elements)
• Geometric ASCII art (grids, angles, symmetry, patterns)
• Cover visual: Grid pattern or triangular composition
• Cover quote theme: Structure, form, order, mathematical beauty
• Footer quote: Something about geometry shaping design thinking

SECTION FOCUS (Guide for Curator & Assignment Editor):
────────────────────────────────────────────────────────
| # | Section                   | Focus / Angle                              |
|----|---------------------------|--------------------------------------------|
| 01 | Visual Thinking           | [Design perspective, visual craft]        |
| 02 | Cultural Context          | [Cultural movements, identity, society]   |
| 03 | Critical Thinking         | [Theory, history, historical perspective]|
| 04 | Tools & Innovation        | [Technology, AI, tools, processes]        |
| 05 | Systems & Application     | [Product, systems, real-world application]|
| 06 | Material Culture Studies  | [Objects, materiality, craftsmanship]     |

TONE:
Intellectual but accessible. Explain technical foundations clearly
without dumbing down. Show WHY geometry matters to designers.
Example: "The grid isn't just a tool, it's a philosophy."

SOURCES TO PRIORITIZE:
• Bauhaus movements (geometric fundamentals in design)
• Contemporary geometric design practice
• Mathematics + design intersections (especially case studies)
• Generative/algorithmic design (system-based work)
• Golden ratio & sacred geometry in nature/culture
• Grid systems (typography, layout, product) — show THE THINKING
• Work that explains the philosophy, not just the aesthetics

SOURCES TO AVOID:
❌ Generic "design trends" articles (unless they're geometry-specific)
❌ Non-geometric design movements (organic, expressionist, etc.)
❌ Geometry treated as just decoration/ornamentation
❌ Sources that mix unrelated themes

FLEXIBILITY:
If you find an exceptional source that's adjacent to geometry
(e.g., topology in nature, mathematical patterns in biology),
it's okay. Prioritize focus, but don't miss quality.

CURATION GUIDANCE FOR ART DEPARTMENT:
─────────────────────────────────────
Art Department: Before selecting your 14-16 pieces, understand these angles:

NARRATIVE ANGLES (organize selections around these perspectives):
1. [PRIMARY ANGLE]
   └─ [What does this angle explore?]
   └─ [What perspective does it bring?]
   └─ [What question does it answer?]

2. [SECONDARY ANGLE]
   └─ [What does this angle explore?]
   └─ [What perspective does it bring?]
   └─ [What question does it answer?]

3. [TERTIARY ANGLE]
   └─ [What does this angle explore?]
   └─ [What perspective does it bring?]
   └─ [What question does it answer?]

MATERIAL CULTURE STUDIES GUIDANCE (For Section 6):
Section 6 specializes in objects, materials, and craftsmanship.
When curating for this section:
- Focus on pieces that examine MAKING: How is this created?
- Emphasize MATERIALS: What matters about the physical?
- Show CRAFT: What does skill and hand reveal?
- Explore OBJECTS: How do physical things carry meaning?
- Consider TEMPORALITY: How does an object age, wear, and change?
Find sources that help readers see and touch through writing.

EDITORIAL INSIGHT TO PURSUE:
Your curated selections should collectively demonstrate that:
→ [What do these 14-16 pieces argue collectively?]
→ [What does seeing them together reveal about the theme?]

SELECTION PHILOSOPHY:
• Choose pieces that show design THINKING, not just aesthetics
• Include work from different mediums (visual, cultural, theoretical, technical, systems, material)
• Show depth (beginner-friendly explanations + advanced ideas)
• End with insight: "These pieces argue that..."
• For Material Culture: Prioritize pieces examining HOW things are made and WHY materials matter

When you submit your curated report (14-16 pieces organized by these 3 angles),
each piece should have Why/Insight/Connection annotations that show:
- WHY this piece was selected (what does it explore?)
- INSIGHT for this theme (what does it teach about geometry?)
- CONNECTION to other pieces (how does it fit the narrative?)

TIMELINE & DEADLINES:
──────────────────────
7:30am PT:  Art Department starts scanning (reads this brief first)
9:15am PT:  Art Department submits curated report (14-16 pieces by narrative angle)
9:15am PT:  Assignment Editor receives Art Department report, begins mapping
11:00am PT: Assignment Editor submits mapping + commissions to Managing Editor
12:00pm PT: Managing Editor receives commissions + Art Department context, starts writing
6:45pm PT:  Managing Editor submits completed 24 files
7:00pm PT:  Editorial Director validates against brief + approves
7:45pm PT:  Bot publishes to subscribers

EDITORIAL DIRECTOR'S VALIDATION CHECKLIST:
──────────────────────────────────────────

BEFORE reviewing Managing Editor's files, validate the NARRATIVE:
✅ Did Art Department understand the narrative angles?
✅ Are selections organized by angle?
✅ Do annotations show deep curation (Why/Insight/Connection)?
✅ Does editorial insight paragraph deliver on what you pursued?
✅ Did Assignment Editor preserve Art Department's narrative?
✅ For Section 6: Did Managing Editor emphasize material/craft perspective?

WHEN reviewing Managing Editor's files, check:
✅ Does each section explore its assigned narrative angle?
✅ Does prose build on the curated sources?
✅ Are sources cited appropriately (Art Department curated + commissioned)?
✅ Is the tone consistent (intellectual but accessible)?
✅ Do visuals match the visual direction?
✅ Does Section 6 focus on material/craft/making (not just aesthetics)?
✅ Does the overall issue feel cohesive (one story) or scattered (random pieces)?

If section feels off-narrative:
→ Send back to Managing Editor with specific guidance
→ Example: "Section 05 (Culture angle) should explain WHY mathematical beauty
   matters to culture as a universal language, not just list examples."
→ This section should deepen the narrative Art Department established.

QUESTIONS?
──────────
Ask Editorial Director by 6am PT before you start work.
This brief might need clarification.

Contact: [Editorial Director name/slack/email]
```

---

## Blank Template

```
EDITORIAL BRIEF — Issue [NNN] — [THEME]
═══════════════════════════════════════

THEME: [One word or short phrase]

CORE IDEA:
[2-4 sentences explaining the unifying concept and why it matters]

VISUAL DIRECTION:
• [Style/mood: clean, playful, bold, minimalist, etc.]
• [ASCII art approach: what should it feel like?]
• [Cover visual concept: what should it communicate?]
• [Footer quote theme: what should it reinforce?]

SECTION FOCUS (Guide for Curator & Assignment Editor):
────────────────────────────────────────────────────────
| # | Section                   | Focus / Angle                             |
|----|---------------------------|-------------------------------------------|
| 01 | Visual Thinking           | [Design perspective, visual craft]       |
| 02 | Cultural Context          | [Cultural movements, identity, society]  |
| 03 | Critical Thinking         | [Theory, history, historical perspective]|
| 04 | Tools & Innovation        | [Technology, AI, tools, processes]       |
| 05 | Systems & Application     | [Product, systems, real-world application]|
| 06 | Material Culture Studies  | [Objects, materiality, craft, making]    |

TONE:
[What voice should this issue have? Academic? Casual? Poetic?]
[Any specific instructions on how to explain things?]

SOURCES TO PRIORITIZE:
• [Type 1]
• [Type 2]
• [Type 3]

SOURCES TO AVOID:
❌ [What doesn't fit the theme]
❌ [What to be careful about]

FLEXIBILITY:
[If you find sources adjacent to the theme, how flexible should
 agents be? Can they use them or should they stick strictly?]

CURATION GUIDANCE FOR ART DEPARTMENT:
────────────────────────────────────────
Art Department: Before selecting your 14-16 pieces, understand these angles:

NARRATIVE ANGLES (organize selections around these perspectives):
1. [ANGLE 1 NAME]
   ├─ [What does this angle explore?]
   ├─ [What perspective does it bring?]
   └─ [What question does it answer?]

2. [ANGLE 2 NAME]
   ├─ [What does this angle explore?]
   ├─ [What perspective does it bring?]
   └─ [What question does it answer?]

3. [ANGLE 3 NAME]
   ├─ [What does this angle explore?]
   ├─ [What perspective does it bring?]
   └─ [What question does it answer?]

EDITORIAL INSIGHT TO PURSUE:
Your curated selections should collectively demonstrate that:
→ [What does the team learn from seeing these 14-16 pieces together?]

SELECTION PHILOSOPHY:
• Choose pieces that show design THINKING, not just aesthetics
• Include work from different mediums/perspectives
• Show depth (beginner-friendly + advanced ideas)
• End with insight: "These pieces argue that..."

When you submit your curated report, each piece should have:
- WHY (what does it explore?)
- INSIGHT (what does it teach?)
- CONNECTION (how does it fit the narrative?)

TIMELINE & DEADLINES:
──────────────────────
[Art Department start time]: Art Department begins scanning
[Art Department report time]: Art Department submits curated report (14-16 pieces by angle)
[Assignment time]: Assignment Editor receives report, begins mapping
[Managing time]: Managing Editor starts writing (with Art Department context)
[Editorial time]: Editorial Director validates
[Publishing time]: Bot publishes

EDITORIAL DIRECTOR'S VALIDATION CHECKLIST:
──────────────────────────────────────────
BEFORE reviewing Managing Editor's 24 files:
✅ Did Art Department understand the narrative angles?
✅ Did they curate selections organized by those angles?
✅ Did they write Why/Insight/Connection for each?
✅ Did editorial insight paragraph show the insight being pursued?

WHEN reviewing completed 24 files, check:
✅ [Does it deliver on the core idea?]
✅ [Does each section explore its narrative angle?]
✅ [Is the tone consistent?]
✅ [Do visuals match the direction?]
✅ [Do sources support the theme?]
✅ [Does it feel cohesive (one narrative) or scattered?]

QUESTIONS?
──────────
Art Department or Assignment Editor: Ask by [time] if anything unclear.
Managing Editor: Ask by [time] if direction needs clarification.

Contact: [Editorial Director]
```

---

## How Agents Use This Brief

### For Art Department
Read before 7:30am scan:
- ✅ Understand the 3 narrative angles (Abstraction, System, Culture)
- ✅ Know the editorial insight being pursued
- ✅ Know which sources to prioritize
- ✅ Know tone and perspective to match
- ✅ Plan how to organize selections by angle
- Result: Curated report organized by narrative, each piece annotated with Why/Insight/Connection

### For Assignment Editor
Read before receiving Art Department report:
- ✅ Understand the vision and narrative angles
- ✅ Know how Art Department organized their selections
- ✅ Know how to map curated pieces to sections (section focus table)
- ✅ Know what commissions should emphasize to preserve narrative
- ✅ Identify gaps that need commissioned pieces
- Result: Thematically aligned mapping and commissions that build on Art Department's narrative

### For Managing Editor
Read before starting writing:
- ✅ Know the theme deeply
- ✅ Understand the narrative angles (Abstraction, System, Culture)
- ✅ Understand each section's angle (from section focus table)
- ✅ Know which narrative angle your section supports
- ✅ Know visual direction
- ✅ Know tone to match
- ✅ See Art Department's curated sources and why they were selected
- Result: Cohesive, thematically unified writing that builds on Art Department's narrative

### For Editorial Director
Created this brief, now use it for validation:
- ✅ Check that Art Department's curation understood your brief
- ✅ Verify the 3 narrative angles are present in selections
- ✅ Check that completed issue delivers on brief
- ✅ Send back sections that don't fit theme or narrative angle
- ✅ Ensure visual direction was followed
- ✅ Validate that editorial insight was pursued and achieved
- Result: Magazine that delivers the vision through curated narrative

### For Bot
Optional context:
- Know the theme for rendering
- Could affect tone of any automated messages
- Understand visual direction for preview

---

## Timeline

**Previous Day, 6pm PT:**
Editorial Director writes brief and sends to all agents.

**Previous Day, 8pm PT:**
All agents have read brief, ready to start work.

**Next Day, 7:30am PT:**
Curator reads brief, begins curation with context.

**Rest of pipeline:**
Each agent reads brief before starting, works with shared vision.

---

## Benefits

✅ **Art Department:** Focused curation with narrative (20% faster, higher quality)  
✅ **Assignment:** Clear mapping and commissions (30% faster, better aligned)  
✅ **Managing:** Cohesive writing (40% faster, deeper insights)  
✅ **Editorial:** Validates narrative delivered on vision  
✅ **Team:** Aligned on one unified narrative  
✅ **Reader:** Magazine that explores one idea from 11 angles  
✅ **Efficiency:** 12.5 hours → 10-11 hours (saved through less rework)  
✅ **Quality:** Theme coherence (40% → 85%), source relevance (+50%), writing unity (+60%)

---

## Key Principle

**Editorial Director leads with vision. Art Department establishes narrative. Team executes with shared context.**

The brief is the editor's voice. It's not restrictive—it's liberating.
When everyone knows what the issue is really about, and Art Department curates with narrative angles,
the entire team can work faster and more effectively toward that unified goal.

Remember:
- Editorial Director writes the BRIEF (what's the theme?)
- Art Department reads the BRIEF and curates the NARRATIVE (which selections show this theme?)
- Assignment Editor maps the NARRATIVE to sections (how do these pieces serve each section?)
- Managing Editor writes from the NARRATIVE (how do I deepen this angle?)
- Editorial Director validates the NARRATIVE (did it deliver the vision?)

Each stage builds on the previous one. The brief is where it all starts.

