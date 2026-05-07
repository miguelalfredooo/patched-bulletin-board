<style>
body, code, pre, p, h1, h2, h3, h4, h5, h6, li, table {
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
}
</style>

# SKILLS.md — the-magazine

## Agent skill registry

This document lists every skill active in the-magazine pipeline, which agents carry it, and what good output looks like.

Skills are capabilities agents draw on to fulfill their roles. They are not the same as roles. An agent has one role. It may carry several skills to fulfill that role.

---

## Skill: Print History Research

**Assigned to:** The Editor

**What it is:**
The ability to identify a specific cultural artifact or print object, ground it in a precise era, technology, and production context, and surface the detail that makes it worth looking at — the texture, the process, the cultural moment it belongs to.

**What good output looks like:**
A cultural ground statement that names a specific decade, format, and production technology. Not "vintage screen print" — "1974 concert poster in two-color screen print on newsprint with registration drift." The research is specific enough that a reader could identify the reference without seeing the image.

**What bad output looks like:**
Generic era references. "Vintage," "retro," "nostalgic" without specifics. Cultural ground that could describe a hundred different objects. Research that sounds like a Wikipedia introduction.

**Self-check:**
- [ ] Specific decade named
- [ ] Specific print technology named
- [ ] Specific cultural context named
- [ ] No generic era language

---

## Skill: Midjourney Prompt Generation

**Assigned to:** The Editor

**What it is:**
The ability to translate a specific cultural ground into a single Midjourney prompt that foregrounds print surface texture as co-equal subject with the graphic culture object. One sentence. Process language. No atmospheric or emotional language.

**What good output looks like:**
One sentence naming the object, the print process, and the specific texture quality. Ends with the correct aspect ratio and --chaos 20 --p m7446277342072143883. Uses process vocabulary: halftone, screen print, offset, registration, ink bleed, dot gain.

**What bad output looks like:**
Multiple sentences. Comma-separated attribute lists. Atmospheric language: "moody," "evocative," "warm." Generic texture description without naming the process. Missing the --p flag. Wrong or repeated aspect ratio.

**Self-check:**
- [ ] One sentence only
- [ ] Names print technology specifically
- [ ] Texture named as a noun not an adjective
- [ ] No atmospheric or emotional language
- [ ] Ends with --chaos 20 --p m7446277342072143883
- [ ] Aspect ratio different from previous prompt in set
- [ ] --p flag unmodified

---

## Skill: Visual DNA Self-Check

**Assigned to:** The Editor

**What it is:**
The ability to evaluate a generated prompt against the Always and Never lists in VISUAL-DNA.md and flag any violation before passing to The Creative Director.

**What good output looks like:**
A clear SELF-CHECK: passed or SELF-CHECK: flagged with specific violation named. The editor catches their own errors before handoff.

**What bad output looks like:**
Self-check passed when a Never rule is violated. Vague flag without naming the specific rule broken.

**Self-check:**
- [ ] Every prompt checked against Never list
- [ ] Flag names the specific rule violated
- [ ] Never self-approves a flagged prompt

---

## Skill: Set Arc Construction

**Assigned to:** The Editor

**What it is:**
The ability to plan and construct 12 prompts as a coherent editorial arc — opening piece, middle movements, closing piece — that also works as a 3x4 Instagram grid with distributed color weight and varied aspect ratios.

**What good output looks like:**
A SET SUMMARY with cultural thread, grid logic, and arc stated before the 12 prompts. The opening piece is bold and declarative. The closing piece resolves or reframes. Middle pieces build and contrast. No two consecutive prompts share the same aspect ratio. Color weight is distributed — dark and light pieces do not cluster.

**What bad output looks like:**
12 prompts with no stated arc. All prompts in the same register. Consecutive prompts with the same aspect ratio. A grid that reads as assembled not designed.

**Self-check:**
- [ ] SET SUMMARY written before prompts
- [ ] Opening piece is bold and declarative
- [ ] Closing piece resolves or reframes
- [ ] No two consecutive prompts same aspect ratio
- [ ] Color weight distributed across the set

---

## Skill: Collection Arc Evaluation

**Assigned to:** The Creative Director

**What it is:**
The ability to evaluate a set of 12 prompts against the existing archive — what has been made, which print eras covered, which aspect ratios overrepresented — and determine whether the set advances the collection or repeats it.

**What good output looks like:**
APPROVED with a specific arc note on where this set sits in the collection sequence. Or REDIRECT with a specific brief naming which dimension failed — arc, grid, texture specificity, or cultural timing.

**What bad output looks like:**
Approving a set that repeats a print era already covered in the last three issues. Redirecting without naming the specific problem. Evaluating prompts individually rather than as a set.

**Self-check:**
- [ ] archive-log.md read before evaluating
- [ ] Set evaluated as a whole — not prompt by prompt
- [ ] Redirect names the specific dimension that failed
- [ ] Never approves a set without reading the archive

---

## Skill: Grid Composition Reading

**Assigned to:** The Creative Director

**What it is:**
The ability to mentally lay out 12 prompts as a 3x4 Instagram grid and evaluate whether the layout reads as designed — color weight distributed, aspect ratios varied, adjacent pieces from different print eras or cultural registers.

**What good output looks like:**
A GRID NOTE in the approval output naming what the grid does well. Or a specific grid problem in the redirect: "Prompts 4-7 are all dark pieces — the grid clusters in the middle."

**What bad output looks like:**
Approving a grid where dark pieces cluster. Not noticing that three consecutive prompts use the same aspect ratio. No grid evaluation in the output.

**Self-check:**
- [ ] 12 prompts mentally laid out as 3x4
- [ ] Color weight evaluated — no clustering
- [ ] Aspect ratios checked — no consecutive repeats
- [ ] Adjacent pieces from different print eras

---

## Skill: Texture Specificity Evaluation

**Assigned to:** The Creative Director

**What it is:**
The ability to evaluate whether texture is foregrounded as co-equal subject in every prompt — not as an adjective but as a named, specific print surface quality — and flag any prompt that uses generic texture language.

**What good output looks like:**
If more than three prompts fail texture specificity — redirect the whole set. If one or two fail — name them specifically in the redirect. If all pass — note what the texture vocabulary achieved across the set.

**What bad output looks like:**
Approving a set where prompts use "textured," "grainy," or "rough" without naming a specific process. Not catching generic era language like "vintage" or "retro."

**Self-check:**
- [ ] Every prompt checked for generic texture language
- [ ] "Vintage," "retro," "textured" flagged immediately
- [ ] More than three failures = redirect the whole set

---

## Skill: Module Proposal Pattern Recognition

**Assigned to:** The Editor, The Creative Director

**What it is:**
The ability to notice when a cultural territory or visual register keeps appearing across prompts but has no formal home in the current module layer — and to articulate why it deserves its own module specification.

**What good output looks like:**
A module proposal grounded in evidence from the current session or archive. Includes WHAT IT IS, WHY IT BELONGS, EVIDENCE, an example prompt, and a Never list draft. One proposal per session maximum.

**What bad output looks like:**
Proposing a module based on one prompt. A proposal without evidence. A Never list that is too vague to enforce. Creating a module files directly without Alfred's approval.

**Self-check:**
- [ ] Evidence from at least two prompts or archive entries
- [ ] Never list has at least three specific edges
- [ ] One proposal per session maximum
- [ ] Never creates module files directly

---

## Skill registry summary

| Skill | Editor | Creative Director |
|-------|--------|------------------|
| Print History Research | ✓ | — |
| Midjourney Prompt Generation | ✓ | — |
| Visual DNA Self-Check | ✓ | — |
| Set Arc Construction | ✓ | — |
| Collection Arc Evaluation | — | ✓ |
| Grid Composition Reading | — | ✓ |
| Texture Specificity Evaluation | — | ✓ |
| Module Proposal Pattern Recognition | ✓ | ✓ |

---

## Version

1.0.0 — Initial skill registry. Eight skills across two agents.
