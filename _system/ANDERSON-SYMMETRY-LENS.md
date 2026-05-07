<style>
body, code, pre, p, h1, h2, h3, h4, h5, h6, li, table {
  font-family: 'Unifont', 'Courier New', Courier, monospace;
}
</style>

# ANDERSON SYMMETRY LENS — Toggleable Stylistic Framework

**Status:** OPTIONAL. Apply when specified in generation prompt. Off by default.

A Wes Anderson-inspired visual constraint that emphasizes geometric discipline, centered composition, and constructed artifice. When enabled, all design choices reinforce perfect bilateral symmetry and planimetric staging.

---

## Core Principles

### Symmetry & Centered Composition
- **Dead center subjects** — protagonists, objects, or focal points sit exactly on the vertical axis
- **Bilateral perfection** — every element has a visual counterpart across the vertical center line
- **No asymmetrical accidents** — the frame itself is the primary subject; symmetry is non-negotiable
- **Doorways, windows, hallways** as framing devices — receding in perfect one-point perspective, drawing the eye back into layered depth

### Planimetric Staging
- **No diagonal perspective** — camera always faces subjects straight-on at 90-degree angles
- **Walls as flattened planes** — depth suggested through layering, not recession
- **Stage-set quality** — composition feels more like a pop-up book or theatrical flat than naturalistic space
- **Overhead "God's-eye" perspective** (optional) — objects arranged on surfaces viewed from directly above, emphasizing layout and arrangement over form

### Color Coherence
- **Narrow, coordinated palette** — every film/piece commits to 3-5 hues maximum
- **Color-matching across all elements** — costumes, walls, props, typography, textures all pull from the same palette
- **No accident colors** — every hue is intentional and repeats
- **Saturation control** — colors feel chosen, not photographed

### Mechanical Camera Motion (when applicable)
- **Snap whip-pans** — sharp, instant cuts between composed angles
- **Slow lateral dolly tracks** — side-to-side movement past cross-sectioned rooms or layered planes
- **Sudden zoom-ins** — precise and readable, never disorienting
- **No handheld or organic movement** — all motion is deliberate and geometric

### Maximalist Production Design with Miniaturist Precision
- **Dense but intentional** — every object in frame serves composition or narrative
- **Practical effects preferred** — miniatures, practical props, constructed elements over digital manipulation
- **Hand-crafted quality** — visible seams, maker's hand, intentional imperfections that read as *chosen*
- **Vintage, eclectic references** — luggage, signage, taxidermy, custom-designed books and ephemera

### Typography as Character
- **Signature font treatment** (Futura Bold in source material, adapt to context)
- **Hand-lettered signage** — visible in environment
- **Typographic hierarchy** — titles, chapter cards, fictional documentation all reinforce the constructed world
- **Chapter structure** — divide piece into titled sections when possible, framed as reading, browsing, or performing

### Deadpan Aesthetic
- **Flat affect and formal diction** — even emotionally charged elements are presented with emotional restraint
- **Comedy and pathos in the same register** — the tonal ambiguity comes from perfect staging, not performance
- **Understated dignity** — no melodrama; all weight comes from form and composition

### Artifice as Honesty
- **Visible seams and construction** — never hide that this is a built world
- **The more obviously constructed, the more room for genuine emotion** — paradox that makes the work land
- **Self-awareness built in** — the audience knows they're watching something designed; this is the point

---

## When to Apply This Lens

Maeve uses this lens when:
- **Explicitly requested** — Alfred or Victor asks for "Anderson symmetry" or "symmetrical staging"
- **Compositional challenge** — when a category needs stronger geometric discipline
- **Tonal reset** — when collection needs to feel more constructed, less naturalistic
- **Palette control** — when color needs to be tightened and coordinated

**Default state:** OFF. Prompts use VISUAL-DNA only unless ANDERSON-SYMMETRY-LENS is activated.

---

## How Maeve Applies It

When generating with this lens:

1. **Identify the central subject or focal plane**
   - This is what sits dead-center
   - Could be an object, a space receding back, a arrangement of forms

2. **Build the frame around perfect vertical symmetry**
   - Everything on the left has a counterpart on the right
   - Or use symmetrical repetition (wallpaper, tiles, repeating elements)

3. **Choose a narrow color palette (3-5 hues)**
   - Assign each hue a role: primary, secondary, accent, ground
   - All elements (materials, surfaces, light, texture) pull from this palette

4. **Prioritize planimetric composition**
   - 90-degree camera angle (facing the subject straight-on)
   - Depth through layering, not diagonal recession
   - Overhead shot (God's-eye) for object arrangements

5. **Add typographic or constructed elements**
   - Hand-lettered signage visible in the scene
   - Chapter titles or labeled elements if they fit
   - Evidence of intentional design in the environment

6. **Maintain Wonder + Artifice balance**
   - The piece should still evoke wonder and emotional resonance (per VISUAL-DNA)
   - But it achieves this *through* geometric perfection and visible construction, not *despite* it
   - The more perfect the symmetry, the more room for genuine emotion underneath

---

## Example Application

### Without Lens (VISUAL-DNA only)
```
Abstract ceremonial vessel, biomorphic form, warm weathered surface, matte patina, 
deep indigo glaze with gold accents, soft candlelit glow, sculptural presence
```

### With Lens (ANDERSON-SYMMETRY + VISUAL-DNA)
```
Ceremonial vessel centered dead-center, bilateral symmetry with geometric voids, 
matte indigo and gold, flanked by identical archways receding in perfect one-point perspective, 
warm candlelit glow from centered overhead source, flat stage-set composition, 
no diagonal recession, every element color-matched to narrow palette
```

---

## Rules (Never Violate)

- ❌ Symmetry never overrides wonder — if perfect symmetry makes the piece cold, break it
- ❌ Don't force symmetry onto forms that don't naturally support it
- ❌ Color coordination is *not* flat/boring — narrow palettes can be bold and saturated
- ❌ Planimetric staging doesn't mean "no depth" — depth comes through layering, not recession

- ✅ Bilateral perfection is the constraint that paradoxically *enables* emotional resonance
- ✅ Constructed artifice is honest — don't hide the seams, celebrate them
- ✅ Geometric discipline + wonder = the whole point

---

## Report to Alfred

When generating with this lens, note in your report:

1. **Lens applied:** "Generating with ANDERSON-SYMMETRY-LENS enabled"
2. **Symmetry strategy:** Describe how the piece achieves centered composition and bilateral balance
3. **Color palette:** Name the 3-5 hues and how they coordinate across the scene
4. **Compositional angle:** Explain why you chose planimetric staging for this piece
5. **Artifice + wonder balance:** Show how constructed perfection serves emotional resonance

---

## Toggling the Lens

**To use this lens:** Include `[ANDERSON-SYMMETRY-LENS: ON]` in the generation request

**To ignore this lens:** Omit the tag. Maeve generates using VISUAL-DNA only.

**To disable it project-wide:** Remove this file. References to it become no-ops.

---

**Created:** 2026-05-06
**Framework inspired by:** Wes Anderson cinematic language and visual philosophy
**Purpose:** Experimental stylistic constraint for compositional discipline and constructed artifice
