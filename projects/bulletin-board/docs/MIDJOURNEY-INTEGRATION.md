# Midjourney Prompt Generation for Issue Album Covers

Creative Director and Editor collaborate to generate Midjourney **prompts** for the entire issue's album cover. These prompts reflect the day's theme, sonic mood, visual language, and research signals.

---

## What This Is

**Important:** We generate **prompts only**. No actual images are created. These prompts describe what an album cover for the entire digest should look like — capturing the essence of all 11 sections in a single visual.

Each day's prompt:
- Reflects the issue's theme without stating it
- Echoes the sonic mood (tempo, production quality, texture)
- Integrates visual language (color palette, compositional density)
- Is archived with the issue for future reference (web platform, reader use)

---

## The Workflow

### 1. Editorial Director Sets the Mix (Morning)

Sets six intensity faders + morning brief:

```json
{
  "theme": "The Ritual in Tools",
  "sonicReference": "Japanese city pop — sparse, meditative, precise",
  "colorPalette": "muted cool tones, soft grays, single accent color",
  "editorialMix": {
    "music": 70,
    "visual": 85,
    "research": 55,
    "process": 40,
    "theme": 75,
    "ai_culture": 20
  }
}
```

### 2. Research & Visual Selection (Mid-Morning)

Maeve and Victor complete their discovery work:
- **Maeve** identifies research signals and cultural patterns
- **Victor** selects 3–5 visual pieces for the 11 sections
- **Coda** extracts synthesis patterns

### 3. Creative Director Briefs Prompt Generation (Late Morning)

Editorial Director provides Coda with:
- Issue theme
- Sonic reference (mood, tempo, production quality)
- Visual register (from Victor's selections)
- Research signals (from Maeve's findings)
- Editorial Mix values
- Color palette direction

### 4. Generator Creates Dual Prompts (10:00am)

Coda runs the prompt generator to create two complementary prompts:

```javascript
const { generatePrompts } = require('./utils/midjourney-prompt-generator');

const result = generatePrompts({
  theme: 'The Ritual in Tools',
  sonicReference: 'Japanese city pop — sparse, meditative, precise',
  visualRegister: 'minimal, geometric, clean interface details',
  researchSignals: ['flow state', 'repetition in interaction', 'interface precision'],
  colorPalette: 'muted cool tones, soft grays, single accent color',
  editorialMix: { music: 70, visual: 85, research: 55, process: 40, theme: 75, ai_culture: 20 },
});

console.log('Prompt A (Literal):', result.promptA);
console.log('Prompt B (Abstract):', result.promptB);
console.log('Guidance:', result.guidance);
```

Output includes:
- **Prompt A** — Literal integration of theme, sonic mood, visual language
- **Prompt B** — Abstract/metaphorical take on the same elements
- **Guidance** — Creative Director notes on emotional register, visual weight, theme integration

### 5. Creative Director Reviews & Archives (10:30am)

Creative Director reviews both prompts:
- **Prompt A** for direct, thematic approaches
- **Prompt B** for subtle, emergent approaches

Creative Director:
1. **Chooses** Prompt A or B (or combines elements)
2. **Archives** the chosen prompt with issue metadata in archive-log.md
3. **Notes** Creative Director's rationale (why this prompt captures the issue)

Example archive entry:
```markdown
**Album Cover Prompt (Literal):**
"a sharp album cover that punctures toward 'The Ritual in Tools', 
rendered as glass, sitting in architectural space, with negative space..."

**Director's Note:** Visual mix is high (85%), so composition is statement. 
Chose Prompt A for direct thematic reference and geometric clarity.
```

The prompt is **ready for future use** — when Design By Bulletin has a web platform, someone can post this prompt to Midjourney to generate the cover image.

---

## Prompt Generation System

### Two Prompt Types

**Prompt A — Literal Integration**
- Direct references to theme, sonic mood, visual elements
- Concrete materials and contexts
- Best for explicit thematic issues
- Example: "a sharp album cover that punctures toward 'The Ritual in Tools', rendered as glass, sitting in architectural space..."

**Prompt B — Abstract/Metaphorical**
- Metaphorical interpretation of theme
- Abstract visual language
- Best for subtle, emergent themes
- Example: "an abstract visual metaphor for the space between repetition and intention, framing through ceremony and deliberate sequence..."

### Five Emotional Registers

The system chooses emotional register based on Editorial Mix values:

| Register | Adjectives | When to Use |
|----------|-----------|------------|
| **Intimate** | whispered, tactile, tender, quiet | High theme (>70%), warm music, personal focus |
| **Declarative** | bold, sharp, geometric, clear | High visual (>80%), direct statements |
| **Textured** | grainy, layered, complex, woven | High music (>80%), dense research |
| **Playful** | whimsical, colorful, unexpected | Low theme (<30%), experimental mood |
| **Archival** | documented, vintage, preserved, indexed | High research (>70%), historical focus |

### Sonic-to-Visual Mapping

Music production quality translates to visual language:

```
Sonic Reference          → Visual Translation
────────────────────────────────────────────────
Ambient                  → Negative space, fog, light diffusion
Minimal                  → Geometric, reduced palette, silence
Experimental             → Abstract, fragmented, density shifts
Fast-paced               → Motion blur, kinetic, sequential
Intricate                → Complex patterns, detail density
Nostalgic                → Vintage color, film grain, faded
```

### Theme Extensions

Each theme has conceptual anchors that inform visual language:

```
Ritual     → repetition, ceremony, deliberate sequence, marking time
Grain      → texture, detail, particle, micro, close examination
Surface    → skin, patina, gloss, materiality, what you touch
Archive    → cataloging, preservation, time, layers of past
Mark       → signature, trace, evidence, hand, intention
...
```

---

## Usage: Running the Generator

### Test with Examples

```bash
node utils/test-midjourney-prompts.js
```

Outputs 4 complete prompt pairs with guidance.

### Generate for Specific Issue

```javascript
const { generatePrompts } = require('./utils/midjourney-prompt-generator');

const issueData = {
  theme: 'Your Theme Here',
  sonicReference: 'Genre/mood description',
  visualRegister: 'Visual style from Victor\'s selections',
  researchSignals: ['signal 1', 'signal 2', 'signal 3'],
  colorPalette: 'Color direction',
  editorialMix: {
    music: 60,
    visual: 70,
    research: 50,
    process: 40,
    theme: 75,
    ai_culture: 25,
  },
};

const result = generatePrompts(issueData);
console.log(result.promptA);
console.log(result.promptB);
console.log(result.guidance);
```

---

## Creative Director's Decision Framework

### Choose Prompt A When:
- Theme is explicit and should be immediately recognizable
- Visual mix is high (>75%) — composition matters
- Issue is thematic/concept-driven
- You want literal beauty in the image

### Choose Prompt B When:
- Theme is subtle and should be felt, not stated
- Music mix is high (>70%) — mood matters
- Issue is more about discovery and emergence
- You want metaphorical richness

### Customize Before Sending to Midjourney

Both prompts are starting points. Add custom directives:

```
[Base Prompt]

more texture / less texture
higher contrast / more subtle
larger scale / intimate detail
photographic / illustrated
warm light / cool light
motion / stillness
```

---

## Workflow Integration

### In Daily Brief

Editorial Director includes Midjourney direction:

```markdown
**Morning Brief — [Date]**

Theme: The Ritual in Tools
Mix: Music 70, Visual 85, Research 55, Process 40, Theme 75, AI Culture 20

Sonic Reference: Japanese city pop — sparse, meditative, precise

Album Cover Prompt:
- Generate prompt at 10:30am after visual selection complete
- Use Prompt A (literal) — visual mix is high, theme-forward
- Archive prompt with issue metadata (no image generation at this stage)
```

### In archive-log.md

Track each issue's album cover prompt:

```markdown
## Issue 004 — 2026-05-08
**Theme:** The Ritual in Tools
**Sonic Reference:** Japanese city pop — sparse, meditative, precise
**Album Cover Prompt (Literal):**
a sharp album cover that punctures toward "The Ritual in Tools", rendered as glass, 
sitting in architectural space, with negative space, fog, air, light diffusion, mood: 
slow breathing pace, color palette: muted cool tones, soft grays, single accent color...

**Director's Note:** High visual mix (85%) drove bold, geometric composition choice.
```

---

## Future: Web Experience

When Design By Bulletin launches a web platform, archived album cover prompts will be used to:
- Generate actual cover images via Midjourney (on-demand or batch processing)
- Display covers above 11-section digests
- Link covers to prompt details for transparency
- Build visual archive of issue themes over time

For now: **We generate and archive the prompts. Actual image generation happens later when we have a web platform to display them.**

---

## Technical Notes

**Generator file:** `utils/midjourney-prompt-generator.js`
**Test file:** `utils/test-midjourney-prompts.js`
**Dependencies:** None (pure Node.js)

**Registers:** 5 (intimate, declarative, textured, playful, archival)
**Theme keywords:** 10+ (ritual, grain, surface, archive, mark, boundary, accumulation, decay, echo, threshold)
**Sonic mappings:** 6 (ambient, minimal, experimental, fast-paced, intricate, nostalgic)

---

## See Also

- **BRIEF.md** — Editorial Mix framework
- **STYLE-GUIDE.md** — Three-layer integration (Visual + Sonic + Narrative)
- **SOURCES.md** — Content discovery for visual inspiration
- **ASCII-VISUAL-DNA.md** — Visual quality standards that should inform Midjourney direction
