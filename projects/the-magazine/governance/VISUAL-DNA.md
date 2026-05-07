# VISUAL-DNA.md — the-magazine
## Visual governance specification

**Version:** 2.0.0
**Status:** Active
**Last updated:** 2026-05

---

## Voice Statement

The collection is about visual culture broadly — anything humans have made and designed with intention. Graphic objects, photographs, textiles, archives, documents, typography, ephemera, cultural artifacts across all eras and mediums. The collection observes the surfaces of culture: how people signal meaning, mark moments, build identity, document time.

The reference is always **specific**. Not "vintage aesthetic" but *this particular object from this particular moment*. A 1968 concert poster. A 2004 fashion magazine spread. A Japanese matchbox from 1985. A 1920s theater program. A 2019 food package. The specificity matters more than the era or medium.

It is knowing without being ironic. Playful without being cute. Curious without being precious. The collection looks at what cultures produce and asks: what does this object reveal about the moment, the values, the visual logic of its time?

The surface quality matters. How something was made — the texture, the material, the production mark, the wear, the craft — tells its own story. A photograph of a handmade poster is as valid as a printed object. The collection reads surfaces closely.

---

## By Category

---

### Objects

Designed, made, or produced things captured with specificity. A concert poster from 1978. A 1950s cereal box. A Japanese business card. A 1990s CD cover. A handwritten menu. A vintage toy. A street sign. A fashion spread. A page from an old phone book. The object carries its era and culture in its surface.

**What matters**
- Specificity of reference — not "retro poster" but "1974 silkscreen concert poster from Berkeley" or "1987 nightclub flyer printed on day-glo stock"
- Surface and materiality — how it was made, what it's made of, how it shows its age or use
- Cultural signal — what does it tell us about values, taste, production capability, or moment of its time
- Composition and design choices — what's emphasized, what's hidden, how elements relate
- Legibility and impact — it reads at a glance and rewards closer looking

**Never constrain to:**
- One era or decade
- One production method
- Flatness or dimensional rendering — use what serves the reference
- Specific color palettes — color follows the reference, not a style rule
- One visual register — high-end design, vernacular packaging, folk art, advertising, documents all belong

---

### Textures

Visual surfaces, patterns, and details examined closely. A photograph of woven fabric. A close-up of newspaper halftone. Rust and wear on painted metal. A wall of stickers layered and peeling. Embroidery detail. A printed wood grain. Weathered paper. Neon light reflection. The texture is the subject.

**What matters**
- Surface quality — how the thing was made, how time or use marks it
- Pattern logic — repeating, irregular, accidental, intentional
- Detail and scale — zoomed in enough to reveal the surface, not so close it becomes abstract
- Cultural or material specificity — this texture from *this* time/place/process, not generic texture

**Never constrain to:**
- Print processes only — photography, textiles, materials, light all valid
- Monochrome — color follows the surface, not a rule
- Specific eras — contemporary texture is as valid as historical
- Abstraction without reference — the texture should feel like it came from *something*

---

## Core Principles

### Always

- **Specificity over aesthetics** — every piece has a particular reference, era, culture, moment. Not "looks vintage" but "is from 1987" or "reflects 2000s design thinking"
- **Surface matters** — the material, texture, production mark, wear, craft tells the story. How it was made is as important as what it depicts
- **High legibility at first glance** — reads clearly, reveals more with closer attention
- **Cultural observation** — the piece reveals something about the moment it came from or the culture that made it. It observes, not judges
- **Tone** — knowing, curious, playful. Not earnest, not heavy, not precious

### Never

- Generic references without specificity ("retro," "vintage," "old-school" without context)
- Pieces that feel created-for-aesthetic-reasons rather than *being* something from somewhere
- Solemn, heavy, or contemplative tone — the collection is curious and alive
- Decoration without function or reference
- Empty style without cultural ground

---

## The Scope

The collection draws from **all eras, cultures, and visual mediums**. 

What unifies the collection is not the era or medium, but the curatorial eye: **specificity, surface quality, and cultural observation**. A 1920s theater program is as valid as a 2019 food package. Japanese commercial design from 1970 next to American street signage from 2005. A photograph of textile work. A close-up of aging paper. A magazine spread from any decade. A handmade poster. What matters is that each piece reveals something about its moment and the culture that made it.

The only filter is Alfred's taste: graphic culture broadly, the surfaces of everyday life, the visual languages communities use to signal meaning, belong, mark time.

---

## Enforcement notes

**For The Editor-In-Chief:** Ground every prompt in a specific reference. Not "80s aesthetic poster" but "1984 punk venue poster, three-color screen print on newsprint." Not "Japanese packaging" but "1970 Japanese candy wrapper, metallic foil stock." The specificity is the prompt. A reader should be able to identify the cultural ground without seeing the image.

**For The Creative Director:** Reject generic references and vague language. Reject anything that feels created-for-aesthetic-reasons rather than *being* something from somewhere. The question at approval: Does this belong to a specific moment and culture? Is the collection already showing this? What does adding this piece bring to the range?

---

## Prompt Rules

These are hard technical requirements. The Editor-In-Chief self-checks against every rule before passing to the Creative Director. The Creative Director catches any violation before approving. No exceptions.

**1. Aspect ratio — always vary**
No two consecutive prompts use the same ratio. Choose based on what the composition demands.
Approved ratios: `--ar 1:1` · `--ar 4:5` · `--ar 5:7` · `--ar 4:3` · `--ar 16:9` · `--ar 2:1` · `--ar 23:14`

**2. Every prompt ends with:** `--chaos 20 --p m7446277342072143883`
This is the last thing in every prompt, always, without exception.

**3. The `--p` flag is never omitted and never modified.**
It is the-magazine's visual signature. Changing it changes the collection. Do not touch it.

**4. `--chaos 20` is not optional.**
It introduces controlled variation within the style reference. It runs every time.

**5. Prompt length — one sentence maximum.**
Precise and spare. No comma-separated lists of attributes. No over-specification. Trust the style reference to carry the visual identity. Only expand beyond one sentence if Alfred explicitly requests more detail.

**6. Every approved prompt is saved as `prompts/prompt_[number].md`.**
The number matches the archive-log entry. The Creative Director writes this file on approval. The file is the permanent record of what was approved and why — it travels with the image in the archive.

---

**Self-check format for prompt rules:**
Before passing to the Creative Director, The Editor-In-Chief confirms:
- [ ] Aspect ratio specified and different from the previous prompt
- [ ] Prompt is one sentence or fewer (unless Alfred requested more)
- [ ] Prompt ends with `--chaos 20 --p m7446277342072143883`
- [ ] `--p` flag is unmodified

---

## Version history

| Version | Notes |
|---------|-------|
| 1.0.0 | Initial specification. Written from collection of ten pieces. Objects and textures as active categories. |
| 1.1.0 | Added Prompt Rules section. Aspect ratio variation, `--chaos 20`, `--p` flag, and one-sentence prompt length. Hard rules enforced by both agents. |
| 1.2.0 | Added Rule 6 — prompt file generator. Every approved prompt saved to prompts/prompt_[number].md by the Creative Director on approval. |
| 1.3.0 | Typography removed from Always list — present when the reference demands it, not mandatory in every piece. Objects section language softened accordingly. |
| 1.4.0 | Typography fully optional — present only when cultural reference demands it. Removed mandatory framing from Voice Statement and Objects graphic language. |
