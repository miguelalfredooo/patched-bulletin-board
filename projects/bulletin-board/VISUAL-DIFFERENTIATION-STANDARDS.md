# Design By Bulletin™ — Visual Differentiation Standards

**Version:** 1.0  
**Last Updated:** May 7, 2026  
**Purpose:** Establish rules for how visual elements distinguish issues and sections while maintaining brand coherence.

---

## LAYER 1: ISSUE-LEVEL DIFFERENTIATION

### The HERO-TALL System (Issue Identity)

Each issue has a **unique Unicode character** used in the 15-row HERO-TALL pyramid on the cover. This character serves as the visual "signature" of that issue.

**Fixed Character Assignments (Issues 001–011):**

| Issue | Theme | Character | Unicode | Rationale |
|-------|-------|-----------|---------|-----------|
| 001 | Presence | `◆` | U+25C6 | Diamond = centered, solid presence |
| 002 | The Mark | `■` | U+25A0 | Square = permanent, linear mark |
| 003 | Handmade | `○` | U+25CB | Circle = organic, drawn quality |
| 004 | Traces | `░` | U+2591 | Light shade = fading, ephemeral |
| 005 | Signal | `▲` | U+25B2 | Triangle = directional, pointing |
| 006 | Momentum | `▶` | U+25B6 | Arrow = forward motion, velocity |
| 007 | Interval | `─` | U+2500 | Dash = spacing, rhythm, gaps |
| 008 | Threshold | `│` | U+2502 | Pipe = boundary, vertical limit |
| 009 | Material | `▓` | U+2593 | Dark shade = density, mass, weight |
| 010 | Worn | `▒` | U+2592 | Medium shade = erosion, aging |
| 011 | Invisible | `◇` | U+25C7 | Hollow diamond = absence, outline |

**Rules for New Issues (012+):**

- Choose a character that visually or conceptually relates to the theme
- No duplicates across all issues (ever)
- Prefer characters from Unicode's geometric and symbol blocks (U+2500–U+27FF)
- Test the character in the 15-row pyramid format—verify it renders clearly and that each line stays ≤35 chars
- Assign and document immediately upon theme selection

**Why This Works:**

The HERO-TALL character becomes instantly recognizable as the issue identity. Subscribers see the pyramid and immediately know which issue it is. The character choice subtly reinforces the theme through visual metaphor.

---

## LAYER 2: SECTION-LEVEL DIFFERENTIATION (Within an Issue)

### The 11 Section Boxes (Visual Language)

Each of the 11 fixed sections has a **distinct ASCII art box** that differentiates it from the others within the same issue. These boxes appear in:
- **ACT 1 preview** (small ASCII art for each section)
- **ACT 2 full edition** (repeated as the visual header for that section's prose)

**Section ASCII Art Design Rules:**

Each section's ASCII art should:
1. **Fit in the code block constraint:** Max 35 characters per line, 5–8 lines total
2. **Be visually distinct** from the other 10 sections (so readers can instantly identify "which section am I reading")
3. **Relate to the section's discipline** (e.g., Photography box should suggest lens/frame; Sculpture box should suggest 3D form)
4. **Remain consistent across all issues** (the Photography box looks the same in Issue 001 and Issue 012)
5. **Use box drawing or simple shapes** (┌ ┐ └ ┘ ─ │ ═ ║ etc., or ASCII geometry)

### The 11 Canonical Section Designs

**Section 1 — Art**
```
►
               ►►
              ►►►
             ►►►►
            ►►►►►
```
*Rationale:* Expanding arrows = motion, growth, exploration. Directional energy.

**Section 2 — Painting**
```
╔════════════════╗
║ ═══════════════║
║ ║ ▒▒▒▒▒ ║    ║
║ ║ ▒▒▒▒▒ ║    ║
║ ║ ▒▒▒▒▒ ║    ║
║ ═══════════════║
╚════════════════╝
```
*Rationale:* Nested rectangles = canvas framing, layered composition.

**Section 3 — Illustration**
```
╱─────╲
               ╱       ╲
              ╱    ▲    ╲
             ╱     ║     ╲
            ╱    ──╫──    ╲
                   ║
```
*Rationale:* Diamond/pyramid = constructed form, intentional design.

**Section 4 — Sculpture**
```
◆
             ╱▲╲
            ╱██▲╲
           ╱████▲╲
          ╱███████╲
          ║███████║
          ║███████║
          ║███████║
          ╚═══════╝
```
*Rationale:* 3D form, stacked geometry = physical weight and dimension.

**Section 5 — Culture**
```
░▒▓█████▓▒░
            ▓█       █▓
            █  ▲ ▲ ▲  █
              ║ ║ ║
            █  ║ ║ ║  █
            ▓█       █▓
            ░▒▓█████▓▒░
```
*Rationale:* Gradient shading + symmetry = cultural codes, layered meaning.

**Section 6 — Photography**
```
┏━━━━━━━━━┓
┃ ► ► ► ┃
┃ ▲ ★ ▲ ┃
┃ ► ► ► ┃
┗━━━━━━━━━┛
```
*Rationale:* Frame box = viewfinder/lens. Grid = composition grid. Star = light.

**Section 7 — Art History**
```
◆───────◆
│ ═════ │
│ ║ ▓ ║ │
│ ║ ▓ ║ │
│ ║ ▓ ║ │
│ ════════│
│ ═════ │
│ ◄ ◄ ◄ │
◆───────◆
```
*Rationale:* Timeline/continuum. Diamonds as historical markers. Arrows pointing back.

**Section 8 — Opinions**
```
├─────────┤
           │ ▲▲▲▲▲ │
           │ ► ▲ ► │
           │ ▲▲▲▲▲ │
           └─────────┘
```
*Rationale:* Speech bubble/bracket = voice, perspective, spoken opinion.

**Section 9 — Design & AI Tools**
```
═══════════════════
║ ► ► ► ► ► ► ║
║ ▲ ░ ▒ ▓ █ ║
║ ► ► ► ► ► ► ║
═══════════════════
```
*Rationale:* Spectrum/gradient = range of tools. Horizontal = linear progression.

**Section 10 — Product & Process**
```
╔═══════════╗
║ 1 2 3 4 5 ║
║ ▓▓▓▓▓▓▓▓► ║
║ 1 2 3 4 5 ║
╚═══════════╝
```
*Rationale:* Numbered sequence = process steps. Progress bar = manufacturing flow.

**Section 11 — Visual & Brand**
```
◆
               ◆▲◆
              ◆████◆
             ◆██████◆
              ◆████◆
               ◆▲◆
                ◆
```
*Rationale:* Nested hierarchy = brand systems, visual identity layers.

---

## LAYER 3: ISSUE THEME VISUAL LANGUAGE

### How Theme Influences Visual Tone

Beyond the fixed HERO-TALL character and section boxes, each issue can develop a **secondary visual language** that reinforces its theme. This appears in:
- The **closing sentence box design**
- Optional **section header emojis or markers** (if used)
- The **density/spacing** of the ASCII art

**Example: Issue 006 (Momentum)**
- HERO-TALL character: `▶` (arrow = motion)
- Section boxes: All use directional elements (►, expanding patterns)
- Prose tone: Action-oriented language ("velocity," "acceleration")
- Result: Unified visual + textual momentum

**Example: Issue 004 (Traces)**
- HERO-TALL character: `░` (light shade = fading)
- Section boxes: Some use erosion patterns, ghosting effects
- Prose tone: Observational, archaeological ("marks," "remnants")
- Result: Cohesive visual philosophy of absence and decay

---

## LAYER 4: CONSISTENCY VS. DIFFERENTIATION

### What Must Stay the Same (Brand Integrity)

1. **The 11 section box designs** — never modify these. They are the constant across all issues.
2. **The HERO-TALL format** — always 15 rows, always centered, always spaced
3. **The theme label position** — always centered, always bold, always under the pyramid
4. **The divider count** — always 25 × `━` characters

### What Can Vary (Issue Personality)

1. **HERO-TALL character** — unique per issue
2. **Prose voice** — editorial tone adapts to theme (momentum prose differs from traces prose)
3. **Link sources** — curator sources change per issue
4. **Secondary colors/shading** (if printed) — not applicable to current markdown format, but reserved for future design

---

## LAYER 5: EXTENDING THE SYSTEM

### Adding Issue 013+ (Future Proofing)

**Process:**
1. Choose theme
2. Select HERO-TALL character (no duplicates; must visually/conceptually relate to theme)
3. Use the 11 canonical section boxes as-is
4. Write prose in voice that reinforces theme
5. Curate sources that exemplify the theme across the 11 disciplines

**Character Reserve (012+):**
- 012: `⚙` (Industrial and Techno — gear/machinery)
- 013+: TBD — reserve characters that haven't been used

**Candidates for future use:**
- `✦` (star), `◈` (diamond variant), `●` (filled circle), `∴` (vertical dots), `※` (asterism), `✕` (cross), `⬢` (hexagon), `◉` (circled dot), `⟐` (intersection), `▬` (horizontal bar)

---

## VALIDATION CHECKLIST

Before publishing any new issue, verify:

- [ ] HERO-TALL character is unique (not used in any other issue)
- [ ] All 11 section boxes match the canonical designs exactly
- [ ] Each section box line is ≤35 characters
- [ ] Prose is 1–2 sentences per section
- [ ] Prose tone reinforces the theme
- [ ] All links are bare URLs (no link text)
- [ ] ACT 1 and ACT 2 use identical section boxes
- [ ] Divider is 25 × `━` characters
- [ ] Theme label is **THEME** format

---

## DECISION RATIONALE

**Why fix the section boxes across all issues?**
Recognizability. Readers learn the section visual language once, then instantly know "that's the Photography section" across any issue. This creates a consistent reading experience.

**Why unique HERO-TALL characters?**
Issue identity. The pyramid is the first visual signal of which issue you're reading. A unique character per issue creates instant brand recall and visual variety across the back catalog.

**Why keep prose tone flexible?**
Theme resonance. The words should feel aligned with the visual language. An issue about momentum should *feel* fast; an issue about traces should feel observational and slow.

---

**This standard ensures every new issue is immediately recognizable while remaining visually coherent with the entire series.**
