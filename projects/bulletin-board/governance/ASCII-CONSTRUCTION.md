# ASCII-CONSTRUCTION.md — Design by Bulletin
## Precision construction guide for ASCII art

**Version:** 1.2.0
**Read alongside:** ASCII-VISUAL-DNA.md

---

## The fundamental principle

Every piece on asciiart.eu that works does so because of one thing:
the silhouette is immediately recognizable. Before any internal detail,
before any texture, before any character choice — the outline of the
subject must be readable as that subject at a glance.

If someone cannot identify the subject from the outline alone, the
piece is not done.

---

## How professional ASCII art is constructed

### Step 1 — Identify the silhouette

Before writing a single character, answer:
- What is the single most recognizable shape of this subject?
- What angle shows it most clearly? (front, 3/4, side, top)
- What are the 2-3 features that make it unmistakably this thing?

A camera is recognized by its rectangular body, lens circle, and
viewfinder bump. A vinyl record is recognized by its circle, center
hole, and label ring. A typewriter is recognized by its key rows,
carriage, and paper feed.

Choose the angle that shows the most features simultaneously.

---

### Step 2 — Build the outline first

The outline is constructed before any internal detail.

**Outline character vocabulary:**

Horizontal lines:
- `-` standard horizontal
- `_` low horizontal (floor, base, bottom edge)
- `=` heavy horizontal (structural emphasis)
- `~` organic horizontal (wave, curve suggestion)

Vertical lines:
- `|` standard vertical
- `:` light vertical (secondary edge, suggestion)
- `!` heavy vertical (emphasis)

Diagonal lines:
- `/` left-to-right upward
- `\` right-to-left upward
- `//` heavy diagonal
- `\\` heavy diagonal

Corners — organic subjects (cameras, plants, faces):
- `.` soft top corner
- `,` soft bottom corner
- `'` highlight corner (catches light)
- `` ` `` backtick (upper surface highlight)

Corners — mechanical subjects (computers, tools, devices):
- `+` hard corner joint
- `^` upward joint
- `[` `]` bracket corners

Curves:
- `(` `)` open curves
- `{` `}` tight curves
- `<` `>` angular curves / indentations

**The outline rule:** Every character in the outline must be doing
exactly one job. No character is placed because it "looks right" —
it is placed because it represents a specific edge, corner, or
surface of the subject.

---

### Step 3 — Place defining features

After the outline, add 2-3 internal features that make the subject
unmistakably itself. Not decoration — identification.

**Feature character vocabulary:**

Eyes / lenses / openings:
- `O` large circular opening
- `o` medium circular opening
- `0` mechanical circular (zero, not letter)
- `@` complex circular (lens, eye with detail)
- `()` wide opening
- `[]` rectangular opening

Buttons / controls / indicators:
- `*` small round button
- `#` grid/hashtag (keyboard key, grille)
- `+` crosshair / button center
- `~` LED / indicator light
- `•` dot indicator (Unicode)

Mechanical details:
- `=` slot / groove
- `-` thin slot
- `_` recessed surface
- `^` raised element
- `>` `<` grip / indentation

Organic details:
- `'` `"` shine / highlight
- `.` texture dot / rivet
- `,` drip / organic curve
- `~` wavy surface / hair

**The feature rule:** Each feature must be placed at the exact
position it occupies on the actual subject. Not centered for
convenience. At the correct spatial position.

---

### Step 4 — Apply density only where needed

Density creates the illusion of shadow, volume, and material.
Most of a piece is empty space. Density is applied to:
- Dark areas (shadow side of an object)
- Solid surfaces (the body of a camera vs. the lens opening)
- Texture zones (the grip of a handle, the surface of a material)

**Density scale — light to dark:**

```
  .  '  `  ,  -  _  ~  :  ;  !  |  /  \  +  =  *  #  @  %  &  $  8  0  W  M
```

```
Unicode halftone — lightest to densest:
⠀ ⠁ ⠃ ⠇ ⠏ ⠟ ⠿  (braille)
░ ▒ ▓ █              (block fills)
▂ ▃ ▄ ▅ ▆ ▇ █       (partial blocks)
```

**The density rule:** Apply density in the direction light would
come from. If light comes from the upper left, the upper-left
surfaces are sparse (lighter characters), the lower-right surfaces
are dense (heavier characters).

---

### Step 5 — Count and verify symmetry

Symmetrical subjects must be exactly symmetrical. Not approximately.

To verify:
1. Count the characters from the center to the left edge
2. Count the characters from the center to the right edge
3. They must match exactly

When a subject is not symmetrical (a 3/4 angle camera, a side-view
car), the asymmetry must be intentional and consistent — the left
side reads as closer, the right as farther, with appropriate density
difference.

---

## The character assignment system

Every subject category has characteristic features that map to
specific characters. These are not arbitrary — they are the
established vocabulary of ASCII art as practiced at the quality
level of asciiart.eu.

### Cameras and photographic equipment
```
Body:          .---------. or [_________]
Lens:          (  @  ) or (@) or [ O ]
Viewfinder:    [_] or .-.
Shutter:       [*] or [o]
Strap lug:     . or '
Flash:         /\ or [+]
```

### Computers and electronics
```
Screen:        .-------. or |       |
Keys/buttons:  [_][_][_] or #
Indicator:     ~ or * or •
Cable:         ~ or ___,
Ports:         [] or ()
Body panels:   |       | with . corners
```

### Books and printed matter
```
Cover:         .--------. or /--------/
Pages:         ||||||||| (edge-on stack)
Spine:         | or :
Open book:     / \ or /\/\
```

### Faces and figures
```
Eyes:          O O or o o or ^ ^ or - -
Nose:          ^ or . or v
Mouth:         - or ~ or \__/ or \/
Hair:          ~~~ or ''' or ///
Profile:       ( for curve of face
```

### Plants and nature
```
Flowers:       * or @ center, , ' petals
Stems:         | or /
Leaves:        ( ) or < >
Trees:         /\ top, | trunk, ~~~ canopy
Grass:         ,,, or ''' or |||
```

### Geometric and abstract
```
Circles:       ( ) or O — always use curves not squares
Squares:       .---. with | sides, '---' bottom
Diamonds:      /\ top, \/ bottom
Stars:         * or .  * . or built from / \ - _
```

---

## Composition rules for each format

### Format A — Classic Object (max 42w × 15h)

Construction sequence:
1. Determine the bounding box: how wide and how tall is the subject?
2. Sketch the outline in the available space
3. Place 2-3 defining features
4. Add density to shadow areas
5. Verify character count on symmetrical elements

The subject should occupy 60-80% of the available space.
The remaining 20-40% is the ground/negative space around it.

Example — a 35mm film camera, side view:
```
    .-[_]-----------.
    |  ( @ )    [*] |
    |_______________|
    |   _________   |
    '--|_________|--'
```
- [_] is the viewfinder
- ( @ ) is the lens
- [*] is the shutter
- The body uses . and - and | and '
- The film compartment uses underscores

### Format B — Geometric Frame (max 42w × 15h)

Frame construction first. Then subject inside.

Frame weight signals register:
```
Light:   .-------.      Heavy:  ╔═══════╗
         |       |              ║       ║
         '-------'              ╚═══════╝

Medium:  +-------+      Mixed:  ╓───────╖
         |       |              ║       ║
         +-------+              ╙───────╜
```

The subject should fill 50-70% of the interior.
Leave at least 1 character of padding inside the frame on all sides.

### Format C — Typographic (max 42w × 15h)

FIGlet font selection by letter count:

For words 3-5 letters, use Big or Banner:
```
 ____  _     _    _
|  _ \| |   | |  | |
| |_) | |   | |  | |
|  _ <| |___|  \/ /
|_| \_\______|____/
```

For words 6-9 letters, use Small or Lean:
```
 ___ ___  ___  _   _ ___
|   \_ _|| __|| | | | __|
| |) | | | _| | |_| | _|
|___/___||_|   \___/|_|
```

For single letters or initials, use Block or Shadow for maximum impact.

Center the letterform within the 42-character width.
Calculate: (42 - letterform_width) / 2 = left padding spaces.

### Format C — Programmatic generation

Format C typographic pieces must be generated using the figlet
library — not hand-constructed by the agent.

The figlet.js library (utils/figlet.js) produces exact FIGlet
letterforms at the correct width. Agent approximations are
inconsistent and incorrect.

Font selection by register:

| Use | Font | Register |
|-----|------|----------|
| Masthead | Banner | Bold, declarative |
| Opinions | Shadow | Weight with presence |
| Design & AI Tools | Lean | Technical, precise |
| Theme declaration | Block | Maximum impact |
| Closing word | Small | Intimate, Apartamento |
| Default | Big | General editorial |

The agent's job for Format C:
1. Choose the correct font for the register
2. Choose the word or phrase — one word maximum for most pieces
3. Call renderText(word, register) from utils/figlet.js
4. Verify output fits within 42 characters wide
5. If it does not fit, try a narrower font or shorten the word

The agent never hand-draws letterforms for Format C.

---

### Format D — Two Column (max 42w × 15h)

Column split: 20 chars | 3 chars gap | 22 chars
Or: 22 chars | 1 char gap | 22 chars

Both columns must share the same baseline (bottom line).
Both columns must have the same height.

The relationship between columns is the editorial point.
The gap between them is intentional negative space.

### Format E — Full Spread (max 42w × 15h)

The composition has a reading direction: left to right, or top to
bottom, or center outward.

Build in three zones:
- Foreground zone (bottom 3-4 lines): dense, detailed
- Mid zone (middle 5-7 lines): medium density, main subject
- Background zone (top 3-4 lines): sparse, contextual

The horizon line, if present, should be at 1/3 or 2/3 height —
not exactly centered unless that is the editorial choice.

---

## The self-check before delivery

For every piece, verify:

**Silhouette check**
- [ ] Cover the internal detail — is the subject still identifiable
      from the outline alone?

**Feature check**
- [ ] Are the 2-3 defining features present and correctly positioned?
- [ ] Is each character doing a specific job?

**Symmetry check**
- [ ] For symmetrical subjects: count characters left of center
      and right of center — do they match?

**Density check**
- [ ] Is density applied directionally — consistent light source?
- [ ] Are dark areas denser than light areas?

**Width check**
- [ ] Does every line fit within 42 characters?
- [ ] Are trailing spaces trimmed?

**Height check**
- [ ] Is the piece within 15 lines?

**Format check**
- [ ] Does the format match the subject and editorial register?
- [ ] Is the format different from the previous piece in the issue?

---

## Common failure modes and fixes

**Failure: Subject unrecognizable**
Cause: Outline too abstract, wrong angle chosen
Fix: Change to the most iconic angle. Remove all internal detail
     and check if the outline alone works first.

**Failure: Looks like random characters**
Cause: Characters chosen for visual similarity, not semantic meaning
Fix: Reassign characters by function. Every character must represent
     a specific physical feature of the subject.

**Failure: Symmetry is off**
Cause: Characters counted by eye, not by number
Fix: Count explicitly. The center character or gap must be identified
     first, then mirror exactly.

**Failure: Too sparse / disappears on screen**
Cause: Only outline characters, no density variation
Fix: Identify the darkest surface of the subject. Apply density
     characters there. Keep light surfaces light.

**Failure: Too dense / reads as a black rectangle**
Cause: Density applied everywhere equally
Fix: Remove density from all light-facing surfaces. Keep density
     only in shadow zones and structural fills.

**Failure: Generic — could be anything**
Cause: Only used standard ASCII characters without category vocabulary
Fix: Apply the category-specific character assignments above.
     A camera without ( @ ) for the lens is not a camera.

---

## Reference examples from asciiart.eu quality standard

The pieces below demonstrate the construction principles above.
Study the character choices, not the subject.

**Economy and silhouette (mouse by mrf):**
```
     ,.
 __.'_
|__|__|
|     |
|-___-|
'.___.'
```
Note: comma+period for organic rounded top. Underscore row for
button divide. Hyphen+underscores for groove. Quote+period for
rounded base. Six lines. Immediately recognizable.

**Layered depth (Amiga computer):**
```
  .---------.
  |.-------.|
  ||>run#  ||
  ||       ||
  |"-------'|
.-^---------^-.
| ---~   AMiGA|
"-------------'
```
Note: Three nested levels of border create screen depth. Tilde ~
for LED. Caret ^ for foot joint. The layers are the design.

**Organic curves (Linux penguin by jgs):**
```
    .-""""""-.
  .'          '.
 /   O      O   \
:                :
: ',          ,' :
 \  '-......-'  /
  '.          .'
    '-......-'
```
Note: Double quotes for top highlight. Single O for each eye —
nothing more. Comma+quote for smile curve. Period series for
belly texture. Slash and backslash for body sides. Perfectly
counted symmetry.

**Minimal and precise (Apple logo by jgs):**
```
    .'`__`-'__``.
   :__________.-'
   :_________:
    :_________`-;
```
Note: Backtick for highlight on bite. Period for soft corners.
Hyphen for clean base. Colon for vertical edge. Four lines.
Unmistakable.

---

## Version history

| Version | Notes |
|---------|-------|
| 1.0.0 | Initial construction guide. Extracted from asciiart.eu quality analysis. Silhouette-first method, character assignment system, format construction rules, failure modes. |
| 1.1.0 | Added Format C programmatic generation section — figlet library required, font registry, agent instructions. |
| 1.2.0 | Width reduced to 42 for Telegram 375px viewport. |
