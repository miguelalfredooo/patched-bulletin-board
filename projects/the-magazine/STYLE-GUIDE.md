# STYLE-GUIDE.md — the-magazine
## How to translate visual DNA into Midjourney prompts

This document is for The Editor. Read it alongside VISUAL-DNA.md before
generating any prompts. VISUAL-DNA.md defines the rules. This document
shows you how to execute them.

---

## The core translation problem

VISUAL-DNA.md defines a specific cultural register: graphic culture as
subject, flat print production language, textural specificity.

Midjourney defaults to atmospheric rendering, dimensional depth, and
painterly aesthetics — the opposite of what this collection requires.

The --p flag overrides most of those defaults. Your job is to give it
something precise enough to work with. One sentence. Specific cultural
ground. Texture named explicitly.

---

## The one-sentence prompt structure

Every prompt follows this structure:

  [specific cultural artifact or print object] + [specific print
  technology or surface quality] + [one defining visual detail]
  + [--ar x:x] + [--chaos 20 --p m7446277342072143883]

The sentence names the object, the process, and the texture in one
motion. It does not describe mood, atmosphere, or composition.
The style reference handles those.

---

## What works in Midjourney for this collection

CULTURAL SPECIFICITY
Name the era, the format, and the production context. Not "vintage
poster" — "1974 concert poster printed on newsprint with two-color
screen print registration drift." The more specific the cultural
reference, the more the style reference has to work with.

TEXTURE AS NOUN
Name the texture as a thing, not as an adjective. Not "textured
surface" — "halftone dot field at 65 line screen." Not "grainy" —
"offset lithography coverage on uncoated stock." The texture is
the subject. Treat it like one.

PROCESS LANGUAGE
Use the vocabulary of print production:
- Screen print, offset lithography, letterpress, risograph, photostat
- Line screen, halftone, registration, bleed, coverage, overprint
- Uncoated stock, newsprint, coated stock, kraft paper
- Spot color, CMYK separation, duotone, tritone
- Ink buildup, coverage break, ghosting, misregistration

COLOR AS SIGNAL
Name colors as graphic decisions, not atmospheric ones.
Not "warm tones" — "yellow and black two-color separation"
Not "vibrant" — "full spectrum CMYK registration marks visible"
Not "muted" — "single spot color on white stock"

---

## What does not work — avoid these

ATMOSPHERIC LANGUAGE
- "moody," "atmospheric," "evocative," "haunting," "ethereal"
- These push Midjourney toward painterly rendering

VAGUE ERA REFERENCES
- "vintage," "retro," "nostalgic," "old school"
- Always replace with a specific decade, format, and technology

COMPOSITIONAL DIRECTION
- "centered," "symmetrical," "balanced," "dynamic composition"
- The style reference handles composition — do not fight it

MATERIAL DESCRIPTION WITHOUT PROCESS
- "textured paper," "rough surface," "aged material"
- Always name the print process that created the texture

EMOTIONAL OR NARRATIVE LANGUAGE
- "tells a story," "expressive," "emotional," "powerful"
- This collection presents. It does not perform.

---

## Texture translation guide

Screen print texture
"screen print ink coverage breaking across rough newsprint"
"two-color screen print with visible halftone rosette pattern"
"screen print registration drift between color layers"

Offset lithography texture
"offset lithography on uncoated stock with visible ink dot gain"
"four-color offset separation with CMYK halftone visible at close range"
"offset printed on newsprint with ink absorption creating soft edges"

Letterpress texture
"letterpress impression debossed into thick cotton stock"
"letterpress with ink squash visible at type edges"

Risograph texture
"risograph overprint in two spot colors with visible grain and
misregistration"
"risograph printed fluorescent orange on cream stock with coverage
variation"

Halftone texture
"halftone dot field at 45 lines per inch in single black ink"
"enlarged halftone dots at 20 line screen creating visible pattern"
"AM halftone with visible rosette pattern at 85 line screen"

---

## Aspect ratio selection guide

1:1    — record sleeve, logo mark, sticker, badge
4:5    — magazine cover, movie poster, portrait advertisement
5:7    — concert poster, book cover, tall print
4:3    — landscape print, wide sticker sheet, horizontal banner
16:9   — billboard, wide poster, panoramic print
2:1    — price tag strip, label, horizontal band
23:14  — ultra-wide print, fold-out spread, panoramic

The ratio is part of the cultural reference. Choose with intention.

---

## Prompt construction checklist

Before passing to The Creative Director, verify each prompt:

- [ ] Names a specific cultural artifact or print object
- [ ] Names a specific print technology or production process
- [ ] Foregrounds texture as a named, specific quality
- [ ] Does not use atmospheric, vague, or emotional language
- [ ] Is one sentence
- [ ] Ends with --chaos 20 --p m7446277342072143883
- [ ] Aspect ratio matches the cultural format referenced
- [ ] Aspect ratio differs from the previous prompt in the set

---

## Example prompts — right and wrong

WRONG:
a screen print poster with bold colors --ar 4:5
--chaos 20 --p m7446277342072143883

RIGHT:
a 1968 psychedelic concert poster in three-color screen print on
newsprint with ink bleed and registration drift between layers
--ar 5:7 --chaos 20 --p m7446277342072143883

---

WRONG:
retro price tag sticker with distressed texture --ar 1:1
--chaos 20 --p m7446277342072143883

RIGHT:
a 1970s retail price tag hand-stamped on manila stock with uneven
ink coverage and perforated edge --ar 1:1
--chaos 20 --p m7446277342072143883

---

WRONG:
halftone magazine cover with dramatic composition --ar 4:5
--chaos 20 --p m7446277342072143883

RIGHT:
a 1985 newsstand magazine cover at 85 line screen halftone with
visible dot gain in shadow areas and CMYK registration marks at
the trim edge --ar 4:5 --chaos 20 --p m7446277342072143883

---

## Version
1.0.0 — Initial style guide. Written for the-magazine graphic
culture register. Typography not required.
