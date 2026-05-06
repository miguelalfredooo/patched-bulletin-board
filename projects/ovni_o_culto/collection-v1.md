# Collection v1 — Series Prompt Frameworks

Per-series Midjourney prompt scaffolding. These frameworks are **locked and non-negotiable**. Consistency across 42 pieces depends on adhering to these exact constraints.

Read `projects/AESTHETIC-GUIDE.md` before using these frameworks. That guide explains why each constraint is present.

---

## Shared Base (All Series)

**Aspect ratio:** `--ar 9:16` (portrait orientation, default for all unless otherwise specified)

**Style flag:** `--style raw` (removes Midjourney's default aesthetic overlay, gives clean sculptural form)

**Version:** `--v 6` (consistency)

**Universal prompt suffix (apply to every series):**
```
studio photography, museum specimen, clinical documentation aesthetic,
neutral background, isolated form, no scale reference, no human figure,
no narrative, no action, static form, sculptural precision, formal control,
monochromatic base, high detail, sharp focus
```

These constraints are non-negotiable and appear in every single prompt.

---

## Series I — The Objects (7 pieces)

**Theme:** Artifacts, apparatus, abstract ritual forms, vessels, tools. Single forms, pure documentation.

**Visual anchors:**
- Sculptural abstraction
- Strongly symmetrical or geometric
- Suggests function or ritual without being explicit
- Vaguely biomorphic (head-like, tool-like, organism-like)

**Base structure:**
```
[SPECIFIC OBJECT CONCEPT], [BIOMORPHIC QUALITY], [GEOMETRIC/SYMMETRY],
[MATERIAL/FINISH], studio photography, museum specimen, clinical lighting,
neutral gray background, isolated artifact, monochromatic, sculptural form,
[NO COLOR unless black/white/gray], no scale reference, formal precision,
abstract artifact aesthetic --ar 9:16 --style raw --v 6
```

**Material options (pick one per piece):**
- "stone sculpture, matte surface, carved finality"
- "cast metal form, oxidized surface, sculptural weight"
- "ceramic vessel, clay-like finish, fired form"
- "bone-white form, delicate sculptural structure"

**Object types to explore (1-7):**
1. Abstract head/face form (but no expression)
2. Ritual vessel or container (abstracted)
3. Tool or apparatus (ambiguous function)
4. Biomorphic extension/organism-like form
5. Geometric architectural element
6. Symmetrical ceremonial object
7. Ambiguous hybrid form (part tool, part organism)

**Symmetry requirement:** 4-5 pieces should be bilaterally symmetrical; 2-3 can have radial symmetry.

**Example prompt:**
```
abstract ceremonial object, vaguely head-like form with geometric voids,
bilaterally symmetrical, stone sculpture, weathered matte surface,
studio photography, museum specimen, clinical lighting, neutral gray background,
isolated artifact, monochromatic, sculptural precision, formal simplicity,
no scale reference, no narrative, archaeological abstraction --ar 9:16 --style raw --v 6
```

---

## Series II — The Beings (7 pieces)

**Theme:** Figurines, heads, face-forms, entity taxonomies. Vaguely anthropomorphic but alien and non-expressive.

**Visual anchors:**
- Head-like or body-like forms
- Absolutely NO expression or character
- Alien, strange, slightly uncanny
- Often symmetrical
- Delicate or formal precision

**Base structure:**
```
[BEING CONCEPT], [ANATOMICAL QUALITY], [SYMMETRY], [SURFACE/FINISH],
figurine form, abstract head, no facial expression, alien geometry,
studio photography, museum specimen, clinical lighting, neutral background,
isolated form, monochromatic, sculptural precision, [SURFACE MATERIAL],
no scale reference, no character, formal abstraction --ar 9:16 --style raw --v 6
```

**Being types to explore (1-7):**
1. Abstract head form (smooth, geometric)
2. Stylized figurine (full body, simplified)
3. Multi-faced or multi-headed form
4. Head with penetrations/voids (holes, curves)
5. Tall columnar form with head-like top
6. Small figurine with strange proportions
7. Hybrid head/body form (part human, part object)

**Key constraint:** If it looks like it has a face with emotion or expression, it's wrong. Needs to be more alien.

**Symmetry:** 5-6 pieces should have strong bilateral symmetry.

**Example prompt:**
```
alien figurine, abstract head form with geometric voids and curves,
bilaterally symmetrical, smooth sculptural surface, bone-white finish,
studio photography, museum specimen, clinical lighting, neutral gray background,
isolated form, no facial expression, no character, monochromatic,
sculptural precision, formal simplicity, no scale reference, strange entity --ar 9:16 --style raw --v 6
```

---

## Series III — The Signals (7 pieces)

**Theme:** Inscriptions, relief carvings, patterned surfaces, language evidence. Suggests meaning without being readable.

**Visual anchors:**
- Surface patterns and marks
- Relief or incised quality
- Suggests language or code without being literal
- Geometric patterns (concentric, radial, wave, grid)
- Formal precision

**Base structure:**
```
[PATTERN CONCEPT], [PATTERN TYPE], relief carving, inscribed surface,
patterned form, [GEOMETRIC LANGUAGE], studio photography, museum specimen,
clinical lighting, neutral background, isolated form, monochromatic,
[SURFACE MATERIAL], no readable text, abstract marks, formal precision,
code-like surface, no scale reference, archaeological abstraction --ar 9:16 --style raw --v 6
```

**Pattern types (one primary per piece, optional secondary):**
- "concentric circles and lines"
- "radial symmetrical marks"
- "wave or ripple patterns"
- "geometric grid of incisions"
- "nested or stepped patterns"
- "spiral or curved mark language"

**Signal types to explore (1-7):**
1. Concentric circle inscription (target-like)
2. Radial pattern from center point
3. Wave or water-like carved surface
4. Grid of geometric marks
5. Nested or stepped geometric patterns
6. Spiral or curved mark system
7. Mixed pattern language (2-3 pattern types combined)

**Symmetry:** Most should be symmetrical (concentric, radial, bilateral).

**Example prompt:**
```
inscribed ceremonial form, concentric circle relief carving, nested geometric pattern,
stone tablet or sculptural surface, weathered matte finish, studio photography,
museum specimen, clinical lighting, neutral gray background, isolated artifact,
monochromatic, formal precision, archaeological mark-making, code-like surface,
no readable text, no scale reference --ar 9:16 --style raw --v 6
```

---

## Series IV — The Sites (7 pieces)

**Theme:** Ritual landscapes, architectural sites, monuments, ceremonial spaces. Landscape or aerial scale, always shows context.

**Visual anchors:**
- Architectural or landscape-scale forms
- Horizon line and environmental context always present
- Monuments, temples, altars, megaliths
- Symmetrical or radiating design (temples, ceremonial)
- Suggests human-made without being realistic historical

**Base structure:**
```
[SITE CONCEPT], [ARCHITECTURAL TYPE], [SYMMETRY], [MATERIAL/SURFACE],
archaeological site, ceremonial landscape, monument aesthetic, constructed form,
natural lighting, horizon visible, landscape context, [SKY/ENVIRONMENT],
isolated form from landscape, cool neutral palette, monochromatic/minimal color,
formal precision, timeless, no narrative, no human figure, scale ambiguity --ar 3:2 --style raw --v 6
```

**Aspect ratio for Series IV:** `--ar 3:2` (wider, landscape-oriented)

**Site types to explore (1-7):**
1. Symmetrical monumental structure (temple, altar, pyramid-like)
2. Megaliths or stone circles (ritual arrangement)
3. Carved landscape feature (relief in terrain)
4. Architectural ruin with clear geometric form
5. Sacred geometric pattern at landscape scale
6. Built form integrated with natural landscape
7. Ceremonial space with radiating geometry

**Symmetry:** 5-6 pieces should have strong bilateral or radial symmetry.

**Environment:** Sky always present. Could be natural (mountains, horizon, overcast sky) or abstracted landscape.

**Example prompt:**
```
ceremonial monument site, symmetrical geometric form, ritual architecture,
carved stone structure with radial geometry, weathered surface, archaeological site,
natural lighting with gray overcast sky, horizon visible, landscape context,
isolated form, monochromatic cool palette, formal precision, timeless aesthetic,
no human figure, no narrative, ancient ceremonial architecture, scale ambiguity --ar 3:2 --style raw --v 6
```

---

## Series V — The Materials (7 pieces)

**Theme:** Extreme close-ups, surface texture studies, tactile investigations. Most permissive category for form and color.

**Visual anchors:**
- Texture and materiality are the subject
- Can have warmer colors (oranges, yellows, teals, greens)
- Biomorphic form allowed (more organic)
- Raking or dramatic lighting to emphasize texture
- Close-up scale, but ambiguous real size

**Base structure:**
```
[TEXTURE/MATERIAL CONCEPT], [SURFACE TYPE], [BIOMORPHIC QUALITY],
tactile surface, material focus, close-up detail, sculptural form,
[RAKING/DIRECTIONAL LIGHTING], [COLOR PALETTE - can be warm here],
texture emphasis, high detail, formal precision, [MATERIAL TYPE],
studio photography, isolated form, no scale reference, abstract texture study --ar 9:16 --style raw --v 6
```

**Color palette options (one primary per piece):**
- "warm orange and cool teal complementary palette"
- "warm mustard yellow and cool slate blue"
- "earth tones: rust, olive, cream"
- "cool: deep greens, teals, soft grays"
- "warm: ochres, burnt orange, pale yellow"
- "natural: warm grays, bone, charcoal"

**Texture types to explore (1-7):**
1. Organic/biomorphic surface with holes and curves
2. Rippled or wave-like textured form
3. Bumpy or nodular sculptural surface
4. Smooth with dramatic raking light
5. Layered or stacked textural element
6. Mixed texture (smooth + bumpy + perforated)
7. Delicate filaments or fine structure

**Lighting:** Can be more dramatic than other series. Raking side-light encouraged.

**Example prompt:**
```
sculptural biomorphic surface detail, organic form with curves and penetrations,
warm burnt orange and cool teal complementary colors, matte tactile finish,
raking side-lighting emphasizing texture, close-up detail view, high texture detail,
material focus, formal sculptural precision, abstract texture study,
no scale reference, studio photography, isolated form --ar 9:16 --style raw --v 6
```

---

## Series VI — The Collection (6 pieces)

**Theme:** Archive assembles, taxonomies, typologies. Multiple forms organized in grid or array display logic.

**Visual anchors:**
- Multiple forms (usually 4-9) in one composition
- Grid, array, or organized display layout
- Natural history museum specimen display aesthetic
- All forms should feel like they belong together
- Consistent surface/material quality across forms

**Base structure:**
```
[COLLECTION CONCEPT], [FORMS DESCRIPTION], collection of specimens,
taxonomy array, [NUMBER] abstract forms in grid layout, specimen display,
cabinet of curiosities aesthetic, natural history museum, studio photography,
clinical lighting, neutral background, monochromatic, sculptural forms,
isolated arrangement, formal precision, [MATERIAL/SURFACE CONSISTENCY],
no scale reference, archival presentation --ar 9:16 --style raw --v 6
```

**Collection types to explore (1-6):**
1. Grid of head-like forms (3x2 or 2x3)
2. Array of abstract artifact forms (6-9 pieces)
3. Organism/specimen collection (4-8 forms in arrangement)
4. Mixed taxonomy (different but related forms)
5. Variation series (theme with changes: heads with different voids, vessels with different symmetry)
6. Comprehensive archive (diverse but coherent forms)

**Number of forms per piece:**
- Minimum 4 forms
- Maximum 9 forms
- Recommend 6 as ideal (feels complete without overwhelming)

**Layout:** Grid-like, organized, clear spacing between forms. No overlap or interaction.

**Material/surface consistency:** All forms in one collection piece should appear to be made of same material or finish.

**Example prompt:**
```
collection of abstract ceremonial artifacts, 6 sculptural forms arranged in grid,
varied head-like and vessel-like forms, all stone sculpture with weathered matte surface,
specimen display layout, natural history museum aesthetic, studio photography,
clinical lighting, neutral gray background, monochromatic, formal precision,
archival presentation, no scale reference, isolated arrangement, each form distinct --ar 9:16 --style raw --v 6
```

---

## Prompt Assembly Checklist

Before submitting any prompt to Alfred, verify:

- [ ] Series framework applied correctly
- [ ] All universal constraints included (studio photography, museum specimen, clinical lighting, no scale reference, no narrative, etc.)
- [ ] `--ar` aspect ratio correct for series (9:16 for I, II, III, V, VI; 3:2 for IV)
- [ ] `--style raw --v 6` flags present
- [ ] Material/surface specified clearly
- [ ] Symmetry requirement met (if applicable)
- [ ] No narrative, action, or emotional language
- [ ] Color palette appropriate (monochromatic except V, which can be warmer)
- [ ] Prompt read as artifact/specimen, not art
- [ ] Prompt suggests visual DNA qualities (sculptural, abstract, biomorphic, precise, formal)
- [ ] Prompt avoids visual DNA "never" qualities (narrative, decoration, hyper-realism, character, etc.)

If any check fails, rewrite before submission.
