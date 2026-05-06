# The Unnamed Archive

A speculative visual collection presenting material evidence from pre-historic civilizations as artifact, not art. Museum documentation aesthetic. Daily Instagram posts, 42 pieces over 6 weeks.

## Team

- **Alfred** — art editor, historian, curator. Project lead.
- **Max Arias** — cultural curator (OpenClaw agent). Collection structure, curatorial framing, Midjourney prompts.

## Essential Documents

**Max Arias reads these in order before every piece:**

1. **`VISUAL-DNA.md`** — Complete visual analysis of the 40 reference images. Documents what's "Always" present and "Never" present in the aesthetic. Non-negotiable specification.
2. **`projects/AESTHETIC-GUIDE.md`** — Translates VISUAL-DNA into actionable Midjourney prompt language. How to encode museum register, sculptural form, abstraction, etc. into prompts.
3. **`projects/collection-v1.md`** — Per-series prompt frameworks. Locked templates for each series with specific constraints, material options, and example prompts.
4. **`SOUL.md`** — Max's voice, stance, and aesthetic core. How to think about curation and evidence.
5. **`AGENTS.md`** — Operating instructions with validation checklist. When to read VISUAL-DNA, how to validate prompts before submission.

## How the framework maps to files

The Patched framework concepts map to specific files in every
project:

Module layer        → modules/
Behavior layer      → agents/
Governance layer    → governance/VISUAL-DNA.md
Signal flow         → agents/pipeline.md
CV inputs           → BRIEF.md
Patch map           → agents/pipeline.md
Module proposals    → proposals/
Archive             → archive-log.md + prompts/

Every concept from PATCHED.md has a physical home.
If you are reading a project for the first time,
start with pipeline.md and BRIEF.md.

---

## Repo layout

- `VISUAL-DNA.md` — **The aesthetic specification. Required reading.** All work derives from this.
- `IDENTITY.md`, `SOUL.md`, `AGENTS.md`, `USER.md` — OpenClaw bootstrap files. Define Max.
- `projects/AESTHETIC-GUIDE.md` — Prompt translation guide. How to encode visual DNA into Midjourney language.
- `projects/collection-v1.md` — **Locked per-series prompt frameworks.** Non-negotiable templates.
- `projects/PROJECT-BRIEF.md` — Project timeline and series descriptions.
- `log/published.md` — Append-only log of published pieces.
- `log/retros/` — Weekly retrospectives (what worked, what drifted, what to tighten).
- `images/` — Reference images organized by category (objects, monuments, organisms, regions, textures).

## The Archive Principle

The work is evidence for things that may never have existed, presented as if they always have. Every piece must:
- Maintain museum/archive register (documentary, clinical, timeless)
- Show sculptural three-dimensionality and tactile surface
- Use neutral, clinical lighting
- Maintain abstraction + biomorphic suggestion
- Avoid narrative, decoration, emotion, or character
- Keep scale ambiguous (no size references)
- Use monochromatic base aesthetic (limited color)

Anything that reads as art instead of artifact doesn't belong. Anything decorative gets cut.

## OpenClaw wiring

Set `agents.defaults.workspace` to this directory in `~/.openclaw/openclaw.json`. OpenClaw will inject the four bootstrap files on each session.

Never commit `openclaw.json`, session transcripts, channel state, or API keys. The `.gitignore` handles this — don't disable it.

## For Max: Before Every Piece

1. Read the relevant series section in `projects/collection-v1.md`
2. Use `projects/AESTHETIC-GUIDE.md` to build the prompt
3. Verify against `VISUAL-DNA.md` — all "Always" qualities present? All "Never" qualities avoided?
4. Check AGENTS.md validation checklist
5. Submit to Alfred with confidence
