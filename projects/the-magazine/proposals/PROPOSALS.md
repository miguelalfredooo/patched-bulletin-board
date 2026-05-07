# PROPOSALS.md — the-magazine
## Module proposal governance

This document governs how new modules enter the collection.
Agents propose. Alfred decides. The module layer is always human-authored.

---

## Why this exists

The Editor-In-Chief and Creative Director develop awareness of the collection over time.
They notice patterns — cultural references that recur, visual registers that
don't fit existing modules cleanly. The proposal system gives them a formal
way to surface that awareness without granting them direct write access to
the module layer.

A module proposal is not a module. It becomes one only after Alfred approves it.

---

## Who can propose

Both agents can propose new modules.

The Editor-In-Chief proposes based on research — a cultural territory that keeps
appearing but has no formal home in the module layer.

The Creative Director proposes based on arc evaluation — a visual register
that would strengthen the collection's range or fill a gap the grid keeps
exposing.

---

## Proposal format

Proposals are written to proposals/proposed_[name].md

  # Module Proposal: [proposed module name]
  ## Proposed by: [The Editor-In-Chief / The Creative Director]
  ## Date: [YYYY-MM-DD]
  ## Session: [issue number that prompted this proposal]

  ---

  WHAT IT IS:
  [One sentence. What cultural territory or visual register does this module cover?]

  WHY IT BELONGS:
  [One sentence. What gap in the current module layer does this fill?]

  EVIDENCE FROM COLLECTION:
  [Which prompts or sessions surfaced this pattern? Reference specific archive-log entries.]

  EXAMPLE PROMPT:
  [One example prompt that would belong to this module — showing what it produces
  that objects.md or textures.md cannot.]

  NEVER LIST DRAFT:
  [3-5 things this module would never produce — shows the agent has thought about edges]

  ALFRED'S DECISION:
  [ ] Approved — create module
  [ ] Rejected — reason: [reason]
  [ ] Deferred — revisit after [condition]

---

## Proposal states

proposed_[name].md — under review by Alfred
approved_[name].md — Alfred approved, module file created
rejected_[name].md — Alfred rejected, reason documented

---

## Alfred's decision criteria

Before approving a module Alfred asks:
- Does this cultural territory have enough depth to sustain 3+ pieces per set?
- Is it distinct enough from existing modules that a designer couldn't just stretch objects.md?
- Does it strengthen the collection's range or dilute its identity?
- Is the Never list draft specific enough to give the agent real guardrails?

If yes to all four — approve and create the module file.
If no to any — reject or defer with a specific reason.

---

## Rules

- Agents propose a maximum of one new module per session
- Proposals must include evidence from the collection — pattern recognition, not speculation
- Alfred reviews all pending proposals before starting a new session
- An approved proposal becomes a module only after Alfred creates the module file
- Rejected proposals are kept for reference — they inform future decisions
- Agents never create module files directly

---

## Version
1.0.0 — Module proposal governance. Agents propose. Alfred decides.
