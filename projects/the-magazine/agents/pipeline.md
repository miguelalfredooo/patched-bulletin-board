# pipeline.md — the-magazine
## Two-agent editorial pipeline

This file is the single source of truth for running the-magazine pipeline.
Read this first at the start of every session.

---

## The two agents

**The Editor-In-Chief** — researches and generates a complete set of 12 prompts per session.

**The Creative Director** — evaluates the full set as a coherent issue, approves or redirects.

One session. One set. One decision. One issue.

---

## Note: The Magazine Agent

The Magazine is a separate agent available for testing in OpenClaw chat workspace. It is not part of this editorial pipeline but serves as the independent voice and personality of the publication for conversational testing and exploration.

---

## The set

Every session produces 12 prompts. All objects. Texture foregrounded as co-equal subject in every prompt — the object and its print surface quality are the same decision.

The 12 prompts must work simultaneously as:
- An editorial arc — opening piece, middle pieces, closing piece. A sequence with intention.
- A 3x4 Instagram grid — variety in aspect ratio, color weight, and cultural reference so the grid reads as designed, not assembled.

Each prompt earns its position twice: in the reading order and in the layout.

---

## Sequence

Step 1 — Run The Editor-In-Chief
  Reads: archive-log.md, governance/VISUAL-DNA.md, STYLE-GUIDE.md, BRIEF.md
  Produces: 12 prompt candidates as a complete set with arc and grid rationale

Step 2 — Run The Creative Director
  Reads: archive-log.md, governance/VISUAL-DNA.md, BRIEF.md, Editor-In-Chief's full set
  Evaluates: the set as a coherent issue — arc, grid, variety, cultural specificity
  Produces: APPROVED SET or REDIRECT with specific brief

Step 2b — Module proposals
  If The Editor-In-Chief or Creative Director included a proposal,
  Claude Code writes proposals/proposed_[name].md
  Alfred reviews before the next session begins
  Alfred approves or rejects via Claude Code

Step 3 — If APPROVED
  The Creative Director writes prompts/prompt_set_[number].md with all 12 prompts
  Alfred generates each image in Midjourney in sequence
  Alfred saves each image to images/selects/ using the naming convention below
  Alfred appends all 12 log entries to archive-log.md

Step 4 — If REDIRECT
  Alfred runs The Editor-In-Chief again with the Creative Director's brief as context
  Return to Step 1

---

## Signal flow

Editor-In-Chief output → Creative Director evaluation → Alfred decision

If approved:
prompt file written → Midjourney → image saved to selects/ →
archive-log.md updated

If redirected:
brief returned to Editor-In-Chief → Editor-In-Chief reruns with brief as context →
loop restarts from Step 1

Governance intercepts at two points:
- Editor-In-Chief self-check against VISUAL-DNA.md before passing to
  Creative Director
- Creative Director enforcement check before approving any prompt

CV inputs modulate both agents at the start of every session:
- Archive state from archive-log.md
- Cultural calendar awareness in The Creative Director
- Alfred's standing direction from BRIEF.md
- Pending module proposals from proposals/

---

## Set numbering

Sets are numbered globally:
  prompt_set_001.md — first issue
  prompt_set_002.md — second issue

Images within a set:
  gen_objects_001.jpg through gen_objects_012.jpg — first set
  gen_objects_013.jpg through gen_objects_024.jpg — second set

Numbers are global and continuous. archive-log.md is the source of truth for the next number.

---

## Prompt file format

Each approved set is saved as prompts/prompt_set_[number].md

File structure:

  # prompt_set_001.md — the-magazine
  ## Issue [number] — [YYYY-MM-DD]

  CULTURAL THREAD: [one sentence describing the thematic or aesthetic thread connecting all 12]
  GRID LOGIC: [one sentence describing how the 12 work as a visual layout]
  ARC: [opening — middle — closing, one phrase each]

  ---

  ### 01 — [position: opening / middle / closing]
  DATE: [YYYY-MM-DD]
  CATEGORY: objects
  CULTURAL GROUND: [one sentence]
  PROMPT: [full Midjourney prompt — one sentence ending with --chaos 20 --p m7446277342072143883]
  ASPECT RATIO: [--ar x:x]
  GRID POSITION: [1 of 12 — top left / etc]
  STATUS: approved
  CAPTION: [object name / series number]

  ### 02 — [position]
  [same structure]

  ... through 12

  ---

  LOG ENTRIES:
  [All 12 log entries formatted for direct paste into archive-log.md]

---

## Handoff format

The Editor-In-Chief passes the full set to The Creative Director:

  SET SUMMARY:
  CULTURAL THREAD: [one sentence]
  GRID LOGIC: [one sentence]
  ARC: [opening — middle — closing]

  SELF-CHECK: passed / flagged: [any flags across the set]

  01 — CULTURAL GROUND: [one sentence] / PROMPT: [full prompt] / AR: [ratio]
  02 — CULTURAL GROUND: [one sentence] / PROMPT: [full prompt] / AR: [ratio]
  ... through 12

The Creative Director passes to Alfred on approval:

  APPROVED — ISSUE [number]
  [full prompt_set file contents]

On redirect:

  REDIRECT
  BRIEF: [what the set needs — arc issue, grid issue, cultural specificity issue, texture issue]

---

## archive-log.md format

Each entry:

  ## [YYYY-MM-DD] — Set [number]
  - FILE: gen_objects_[number].jpg
  - CATEGORY: objects
  - PROMPT SUMMARY: [10 words max]
  - ARC NOTE: [one sentence]
  - GRID POSITION: [position in set]

---

## File map

  governance/VISUAL-DNA.md                  — Always and Never rules. Both agents read this.
  STYLE-GUIDE.md                            — Visual DNA to prompt translation. Editor reads this.
  BRIEF.md                                  — Project context and goals. Both agents read this.
  archive-log.md                            — Living record of every approved output. Both agents read this.
  agents/editor-in-chief/SOUL.md                     — The Editor-In-Chief's personality.
  agents/editor-in-chief/AGENTS.md                   — The Editor-In-Chief's operating spec.
  agents/creative-director/SOUL.md          — The Creative Director's personality.
  agents/creative-director/AGENTS.md        — The Creative Director's operating spec.
  modules/objects.md                        — Module specification for objects category.
  modules/textures.md                       — Module specification for textures category.
  prompts/                                  — Approved prompt sets live here.
  images/selects/                           — All approved generated images live here.
  proposals/                               — Pending, approved, and rejected module proposals.

---

## Rules

- One set of 12 per session. Never submit a partial set.
- Every prompt foregrounds texture as co-equal subject with the object.
- No two consecutive prompts use the same aspect ratio.
- No two prompts in a set reference the same print era or technology.
- The Creative Director evaluates the set as a whole — not prompt by prompt.
- Alfred generates in sequence, following the arc order.
- Alfred is the only one who posts. The agents never publish directly.
- What is not in archive-log.md does not exist for the pipeline.
- Alfred reviews all pending proposals in proposals/ before starting a new session.

---

## Starting a new session

Tell whichever agent you are running:

  "Read pipeline.md. Then proceed."

---

## Version
2.1.0 — Signal flow and CV inputs documented explicitly.
2.0.0 — Set-based pipeline. 12 prompts per session. Arc + grid logic. Objects with texture foregrounded.
