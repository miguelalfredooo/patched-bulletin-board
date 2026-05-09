# 6-Section Structure — Design By Bulletin™

**Updated for Material Culture Studies (Section 6)**

The magazine now uses 6 core sections, each exploring the theme through a distinct lens. This creates a complete journey through visual, cultural, critical, technical, systemic, and material dimensions of design.

---

## The 6 Sections

### 1. VISUAL THINKING
**How do visual disciplines approach the theme?**

Nested subsections:
- Art & Expression (contemporary art, abstraction, installations)
- Form & Space (painting, sculpture, illustration, composition, color, 3D)
- Photography & Seeing (image-making, composition, visual perception)

*Readers* see the theme through visual disciplines. Foundation of the issue.

---

### 2. CULTURAL CONTEXT
**What does the theme mean culturally and historically?**

Nested subsections:
- Culture & Society (cultural movements, identity, anthropology, global perspectives)
- Historical Foundation (design history, precedent, evolution, tradition)

*Readers* understand why the theme matters across cultures and time.

---

### 3. CRITICAL THINKING
**Why does the theme matter in design philosophy?**

Nested subsections:
- Design Philosophy & Opinions (critical essays, manifestos, designer perspectives, arguments)

*Readers* engage philosophically. The magazine makes a case for why this matters.

---

### 4. TOOLS & INNOVATION
**How do makers approach the theme with tools and process?**

Nested subsections:
- Design Tools & AI (software, AI, generative design, technology, innovation)
- Process & Making (design methodology, workflows, case studies, hands-on practice)

*Readers* learn how big ideas become real work. Theory meets practice.

---

### 5. SYSTEMS & APPLICATION
**How does the theme scale into visual systems?**

Nested subsections:
- Visual Systems & Brand (branding, identity systems, graphic design, marks, visual languages, scalable thinking)

*Readers* see how individual ideas become systematic, reusable solutions.

---

### 6. MATERIAL CULTURE STUDIES
**How does the theme manifest as physical objects and material reality?**

Nested subsections (flexible based on theme):
- Material Objects & Artifacts (physical things: wood, metal, ceramic, textile, stone, etc.)
- Production & Making (craftsmanship, manufacturing, material processes, hands-on creation)
- Materiality & Meaning (what materials communicate, cultural significance, symbolic value)
- Use, Trade & Ritual (how objects are used, exchanged, worn, and incorporated into daily life)
- Materials & Sustainability (ethical sourcing, environmental impact, durability, lifecycle)

*Readers* understand the theme through its physical instantiation. What do artifacts teach us? How do materials shape meaning? What objects embody the theme?

**Why Material Culture Studies?**

Material Culture is an interdisciplinary field (archaeology, anthropology, history, museum studies) that studies objects as primary sources of cultural understanding. It asks:
- What do the artifacts reveal about beliefs and values?
- How do production methods and material choices embody the theme?
- What does the object look like, feel like, wear like over time?
- How is the object traded, used, ritualized, meaningful to communities?

This is not just "tactile design"—it's the complete material story of how a theme exists in the physical world.

---

## File Structure

**18 files per issue** (2 files per section + cover + footer + manifest):

```
issues/[number]/
├── 00-COVER-ART.txt                    (Cover visual)
├── 01-SECTION-ART.txt                  (Visual Thinking visual)
├── 01-SECTION-COPY.md                  (Visual Thinking prose)
├── 02-SECTION-ART.txt                  (Cultural Context visual)
├── 02-SECTION-COPY.md                  (Cultural Context prose)
├── 03-SECTION-ART.txt                  (Critical Thinking visual)
├── 03-SECTION-COPY.md                  (Critical Thinking prose)
├── 04-SECTION-ART.txt                  (Tools & Innovation visual)
├── 04-SECTION-COPY.md                  (Tools & Innovation prose)
├── 05-SECTION-ART.txt                  (Systems & Application visual)
├── 05-SECTION-COPY.md                  (Systems & Application prose)
├── 06-SECTION-ART.txt                  (Material Culture Studies visual)
├── 06-SECTION-COPY.md                  (Material Culture Studies prose)
├── 07-METADATA-FOOTER.txt              (Closing quote + metadata)
└── manifest.json                       (Issue metadata)
```

---

## Prose Structure

Each section is a single markdown file with nested subsections.

**Example: Section 1 (Visual Thinking)**

```markdown
# VISUAL THINKING

## Art & Expression
[2-3 sentences about contemporary art + theme]
Links to curated sources naturally embedded.

## Form & Space
[2-3 sentences about painting/sculpture/illustration + theme]

## Photography & Seeing
[2-3 sentences about photography + theme]
```

**Why nested subsections?**
- **Coherence** — Each section feels like one complete thought, not 3 separate articles
- **Clarity** — Readers see the progression (Art → Form → Photography)
- **Depth** — Same richness as 11 separate sections, just organized better
- **Scannability** — Markdown headers make structure visible on Telegram/web

**Word count:** 60-120 words per section, distributed across 2-4 subsections

---

## The Journey

Readers progress through 6 dimensions:

1. **VISUAL THINKING** → See the theme visually
2. **CULTURAL CONTEXT** → Understand why it matters
3. **CRITICAL THINKING** → Engage philosophically
4. **TOOLS & INNOVATION** → Learn how to make it
5. **SYSTEMS & APPLICATION** → See it scale systematically
6. **MATERIAL CULTURE STUDIES** → Understand it as physical reality

This creates narrative arc: **Visual → Understanding → Philosophy → Making → Systems → Material**.

---

## Rendering for Telegram

The bot loads 6 section pairs and renders:

1. **Visual section** — Wraps all 6 section visuals (01-06-SECTION-ART.txt) in code block for monospace rendering
2. **Prose section** — Sends all 6 prose files (01-06-SECTION-COPY.md) with markdown headers intact (h1 for section, h2 for subsections)

Markdown rendering on Telegram shows:
```
# VISUAL THINKING          ← h1 bold
## Art & Expression        ← h2 bold
[prose]

## Form & Space
[prose]

# CULTURAL CONTEXT
## Culture & Society
[prose]

...etc for all 6 sections
```

---

## Key Differences from 5-Section Structure

| Aspect | 5 Sections | 6 Sections |
|--------|-----------|-----------|
| Files per issue | 16 | 18 |
| Sections | Visual → Cultural → Critical → Tools → Systems | + Material Culture |
| Final reader insight | Design scales systematically | Design exists materially in the world |
| Scope | How design is conceived and built | + How design is made, used, worn, meaningful |
| Disciplines covered | Visual arts, culture, philosophy, technology, systems | + Archaeology, anthropology, material studies |

---

## Material Culture Studies Guidance for Each Role

**Editorial Director (Brief)**
Include: "Consider the material dimension. What objects, artifacts, or material choices embody this theme?"

**Art Department (Curation)**
Find 2-3 pieces for Section 6 showing:
- Physical artifacts or objects related to the theme
- Manufacturing or material processes
- How materials communicate meaning
- Objects in use or trade
- Sustainability or ethical material considerations

**Assignment Editor (Commission)**
"Section 6 explores [theme] through objects and materials. What do artifacts, manufacturing, or material choices reveal? Include sources about physical objects, craftsmanship, material properties, use and wear."

**Managing Editor (Writing)**
Section 6 should answer:
- What objects or artifacts embody this theme?
- What do material choices reveal about cultural values?
- How is the theme made/crafted/manufactured?
- What do we learn from studying these objects archaeologically or anthropologically?
- How do materials shape meaning and use?

---

## Why 6 Sections?

Design By Bulletin™ originally had 11 flat sections. We consolidated to 5 with nested subsections for clarity and speed.

Adding Material Culture Studies as Section 6 completes the picture:
- ✅ Visual disciplines are covered (Section 1)
- ✅ Cultural and historical context is covered (Section 2)
- ✅ Philosophical perspective is covered (Section 3)
- ✅ Technological and procedural making is covered (Section 4)
- ✅ Scalable systems thinking is covered (Section 5)
- ✅ **Material and object reality is covered (Section 6)** ← NEW

The magazine now addresses design holistically: how we see it, why it matters culturally, how we think about it, how we build it technologically, how it scales systematically, and how it exists materially in the world.

---

## Workflow Impact

**Agents now work with 6 sections:**

1. **Editorial Director** — Brief includes 6-section curation angles
2. **Art Department** — Curates 14-18 pieces across 6 sections (3 per section)
3. **Assignment Editor** — Creates 6 commission briefs (one per section)
4. **Managing Editor** — Writes 6 articles (18 files total, 2 per article)
5. **Editorial Director** — Validates 6 sections + 18 files + narrative
6. **Bot** — Renders 6 sections + footer

**Timeline:** Still 14-16 hours (one extra section doesn't significantly add time)

---

## Next Steps

1. Update scaffold.py: `--sections 6` default
2. Update validator.py: Check for 18 files, 6 sections
3. Update bot code: Load 01-06 section pairs
4. Update templates: Commission briefs for 6 sections
5. Update all AGENTS.md: Reference Material Culture Studies
6. Test with Issue 021: First 6-section issue

---

## Summary

**6 sections. 18 files. Complete design exploration.**

Visual → Cultural → Critical → Tools → Systems → Material.

From how we see design, to how it exists in the world.
