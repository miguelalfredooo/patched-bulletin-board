<style>
body, code, pre, p, h1, h2, h3, h4, h5, h6, li, table {
  font-family: 'Unifont', 'Courier New', Courier, monospace;
}
</style>

# PATCHED-EXAMPLE.md
### the-magazine — a worked example

This document shows the Patched framework applied to a real project.
Every template from PATCHED.md is filled in with actual decisions.
Use this as a reference when applying the framework to a new project.

---

## The project

the-magazine is an AI-generated visual publication built around graphic
culture — the designed surface of everyday commercial life from roughly
1955 to 2005. Screen prints, stickers, magazine covers, price tags,
packaging, ephemera. Objects made to sell, to signal belonging, to mark
a moment.

Every issue is 12 images generated in Midjourney using a personal style
reference that keeps every piece coherent across issues. Two AI agents
run the publication. The Editor researches cultural and print history and
generates 12 prompts as a complete set. The Creative Director evaluates
the full set as a magazine issue and either approves or redirects.

It is an experiment in using AI not to generate generic content, but to
build something with a specific point of view and a consistent visual
identity — the way a magazine has one.

Operator: Alfred.

---

## Patch Map

### Version
1.0.0

### Rack
patched-bulletin-board — OpenClaw workspace running on Claude

### Modules

| Module | Purpose | Agent | Version |
|--------|---------|-------|---------|
| objects | Designed graphic culture objects from the 20th–21st century print era | The Editor | 1.0.0 |
| textures | Print process surfaces examined as subject | The Editor | 1.0.0 |
| ephemera | Small-format commercial print designed for brief functional life | The Editor | 1.0.0 |
| packaging | Mass-market commercial product packaging 1955–1995 | The Editor | 1.0.0 |
| spreads | Designed editorial two-page layouts from the offset newsprint era | The Editor | 1.0.0 |

### Agents

| Agent | Role | Reads | Outputs to | Version |
|-------|------|-------|------------|---------|
| The Editor | Researches and generates 12-prompt set per session | archive-log.md, VISUAL-DNA.md, STYLE-GUIDE.md, BRIEF.md, modules/ | The Creative Director | 2.0.0 |
| The Creative Director | Evaluates full set, approves or redirects, writes prompt file and log | archive-log.md, VISUAL-DNA.md, BRIEF.md, Editor output | Alfred + archive-log.md | 2.0.0 |

### Signal flow

```
Editor generates 12 prompts + optional module proposal
↓
Creative Director evaluates set on four dimensions:
arc · grid · texture specificity · cultural timing
↓
If approved:
  Creative Director writes prompts/prompt_set_[n].md
  Alfred generates images in Midjourney
  Alfred saves to images/selects/
  Alfred appends to archive-log.md
↓
If redirected:
  Brief returned to Editor
  Editor reruns with brief as context
  Loop restarts

Governance intercepts at two points:
  Editor self-check against VISUAL-DNA.md Never list + Prompt Rules
  Creative Director enforcement check before approving any set
```

### Governance
projects/the-magazine/governance/VISUAL-DNA.md — v1.4.0
Graphic culture register. Always/Never lists. Prompt Rules including
--chaos 20 --p m7446277342072143883 and one-sentence maximum.

### CV inputs

| Input | Source | Who reads it |
|-------|--------|-------------|
| Archive state | archive-log.md | Both agents |
| Cultural calendar | Creative Director awareness | Creative Director |
| Alfred's standing direction | BRIEF.md | Both agents |
| Pending module proposals | proposals/ | Both agents |

### Known failure modes

| Failure | Cause | Fix |
|---------|-------|-----|
| Prompts read as archaeology textbook | Agent knows subject but not aesthetic | Read VISUAL-DNA.md before every session — not after |
| Generic "vintage" references | Vague era description | Name the decade, format, and technology specifically |
| Atmospheric rendering in output | Emotional or mood language in prompt | Replace with process language — name the print technology |
| Set feels assembled not designed | No grid logic applied | Editor plans 3x4 layout before writing prompt 01 |
| Two consecutive prompts same aspect ratio | Ratio not tracked across set | Editor assigns ratios during construction, not after |
| Collection drifting from visual DNA | Module layer expanding too fast | Proposals require Alfred approval — never direct module creation |

### Out of scope

- Instagram posting automation — manual for now, Patch A planned
- Midjourney API automation — no official API exists
- Real-time cultural event monitoring
- Multi-operator sessions
- Cross-project module sharing

---

## Filled Module Spec — objects.md

### Module: Objects

**Purpose**
Designed graphic culture objects from the 20th and 21st century print era.
Screen prints, stickers, magazine covers, price tags, logo marks, commercial
illustration, numbered editions. The object is always identifiable as a
product of a specific print technology and cultural moment.

**Belongs to**
projects/the-magazine

**Input contract**
Archive state from archive-log.md. Governance rules from VISUAL-DNA.md.
Style translation from STYLE-GUIDE.md. The Editor identifies a specific
cultural and production context — an era, a format, a technology — and
generates one prompt grounded in that context.

**Output contract**
One Midjourney prompt. One sentence. Ends with
--chaos 20 --p m7446277342072143883. Aspect ratio varies from previous
prompt in set.

**Voice / register**
Graphic culture as subject. The piece reads as printed matter — a screen
print, a sticker, a magazine cover, a price tag, a logo mark. Color signals
category, era, or brand logic. The production process is always visible and
identifiable. Knowing without being ironic. Playful without being cute.
Referential without being nostalgic.

**Always**
- Flat graphic execution — no atmospheric depth, no dimensional rendering
- Specific print reference — identifiable era, technology, cultural context
- High contrast legibility — reads at a glance, rewards closer attention
- Economy — every element earns its place
- Designed object register — printed matter, not fine art
- Wit or directness — economical and clear, or knowing and playful

**Never**
- Photographic realism or atmospheric rendering
- Dimensional depth, drop shadows, or volumetric lighting
- Decorative elements without a specific design function
- Muted, soft, or ambient color used for mood
- Fine art register — no painterly marks, no expressive brushwork
- Solemn, heavy, or contemplative tone
- Generic "vintage" — every reference must be specific
- Abstract marks without a graphic design lineage

**Connected to**
The Editor reads this module. The Creative Director enforces it at approval.
Relates to: textures.md (process surface), ephemera (proposed), packaging
(proposed), spreads (proposed).

**Version:** 1.0.0

---

## Filled Agent Spec — The Editor

### Agent: The Editor

**Role**
Research and generate one complete set of 12 prompts per session. Own the
cultural ground, the texture specificity, and the set's coherence as both
editorial arc and visual grid.

**Lane contract**

Owns:
- Reading and interpreting the archive before every session
- Cultural and historical research for each of the 12 prompts
- Generating 12 prompts as a coherent set with arc and grid logic
- Foregrounding texture as co-equal subject in every prompt
- Self-checking the full set against governance before passing on
- Module proposals — one per session maximum, grounded in evidence

Does not own:
- Deciding whether the set gets approved
- Final sequencing decisions
- Caption writing
- Posting or publishing
- Creating module files directly

Handoff rule:
Pass the full set to The Creative Director with set summary, cultural
thread, arc, grid logic, and all 12 prompts. Flag any self-check issues
explicitly. One optional module proposal at the end.

**Reads before every session**
- archive-log.md
- governance/VISUAL-DNA.md
- STYLE-GUIDE.md
- BRIEF.md
- modules/ — all active module files
- proposals/ — all pending proposals

**Skill loadout**
- Cultural and historical research across print eras and technologies
- Set-level thinking — arc, variety, grid composition
- Prompt generation with texture foregrounded as co-equal subject
- Self-evaluation against governance rules across a full set
- Module pattern recognition — noticing gaps in the module layer

**Skills this agent does NOT have**
- Approval authority
- Final caption writing
- Module file creation
- Access to external publishing tools

**Tool posture**
Read-only. Reads files, researches context, generates 12 prompts.
Does not write to archive or prompt files.

**Memory model**
Reads archive-log.md at session start. Knows which print eras and
technologies have been covered. The next set does not repeat what
already exists. Does not rely on session history — the log is the record.

**Heartbeat cadence**
Not applicable. The Editor runs on demand — one session per issue.

**Input**
Archive state, governance rules, style guide, project brief, active modules,
pending proposals. Optional: Alfred's standing direction for this session.

**Output format**
SET SUMMARY with cultural thread, grid logic, arc.
12 prompts with cultural ground, full Midjourney prompt, aspect ratio.
Optional module proposal at the end.

**Escalation rules**
- archive-log.md missing — stop and alert Alfred
- VISUAL-DNA.md missing — stop and alert Alfred
- Cannot generate full set of 12 passing self-check — flag specifically

**Connected to**
Modules: objects.md, textures.md (and any approved modules)
Outputs to: The Creative Director
Receives from: Alfred (standing direction, session brief)

**Version:** 2.0.0

---

## Governance Specification Summary

### Governance: the-magazine

**Scope**
All outputs from all agents across all modules and sessions.

**Always**
- Flat graphic execution
- Specific print reference — identifiable era, technology, context
- High contrast legibility
- Economy — every element earns its place
- Designed object register — printed matter, not fine art
- Wit or directness — never earnest or heavy

**Never**
- Photographic realism or atmospheric rendering
- Dimensional depth, drop shadows, volumetric lighting
- Generic "vintage" — always specific
- Fine art register
- Solemn, heavy, or contemplative tone
- Abstract marks without graphic design lineage

**Visual / component library**
governance/VISUAL-DNA.md — v1.4.0
Includes: Objects category spec, Textures category spec, Core Principles,
The Register (1955–2005), Enforcement notes, Prompt Rules.

**Enforcement mechanism**
Dual enforcement:
1. Editor self-check against Never list and Prompt Rules before passing
2. Creative Director enforcement check before approving any set
If more than 3 prompts in a set fail texture specificity — redirect whole set.

**Override policy**
Never. Governance rules are not suspended under any conditions.
Alfred may update VISUAL-DNA.md between sessions — that is evolution,
not override. Version history tracks all changes.

**Version:** 1.4.0

---

## Key lessons from the-magazine

**What worked:**
- Governance built before prompts. VISUAL-DNA.md written before Issue 001 ran.
- Agents with hard edges. The Editor does not approve. The Creative Director does not generate. The distinction held.
- The archive as memory. archive-log.md is the only continuity between sessions. It works.
- Specific cultural ground over generic aesthetic. Every strong prompt named an era, a format, and a technology.
- The proposal system. Agents noticed module gaps after one issue. The proposal flow gave that intelligence a home without granting write access.

**What failed and was fixed:**
- Visual DNA described the wrong project. The original VISUAL-DNA.md described ceramic artifacts. The Creative Director rewrote it from the actual collection.
- Three agents was one too many. Coda, Maeve, Victor collapsed to The Editor and The Creative Director. The pipeline got cleaner.
- Typography as a requirement. Removed after it constrained prompts that didn't need it. Now present only when the cultural reference demands it.

**What to carry into the next project:**
- Write governance first. Always.
- One agent per responsibility. If two things pull in different directions, split them.
- The operator is a role. Alfred directs, approves, and publishes. The agents do not replace that function.
- Version everything. When something drifts, compare against the last stable version.

---

*PATCHED-EXAMPLE.md — the-magazine*
*Framework version: PATCHED v0.2.0*
*Project version: pipeline v2.1.0 · governance v1.4.0*
