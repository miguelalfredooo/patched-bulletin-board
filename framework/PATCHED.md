<style>
body, code, pre, p, h1, h2, h3, h4, h5, h6, li, table {
  font-family: 'Courier New', Courier, monospace;
}
</style>

# PATCHED.md
### A modular framework for designing AI-driven experience systems

**Version:** 0.2.0
**Status:** Draft
**Last updated:** 2026-05

---

## Changelog

| Version | Status | Notes |
|---------|--------|-------|
| 0.2.0 | Draft | Signal flow and CV inputs located in pipeline.md and BRIEF.md respectively — documented per project. |
| 0.1.0 | Draft | Initial framework. Terminology, layer definitions, and templates. |

---

## What This Is

PATCHED is a shared language for designing AI-driven experience systems. It gives designers, engineers, and product managers a common vocabulary for talking about how AI behaves in a product — not just what it produces.

It is not a methodology. It is not a process framework. It is a set of precise terms and templates that any team can apply to any project where AI is generating, curating, moderating, or shaping user-facing output.

Drop this file into any repo. Use the vocabulary. Fill in the templates. Build something that feels like itself.

---

## Core Principle

> A well-designed AI system is not one that can do anything. It is one that knows exactly what it does, what it does not do, and why — and holds that distinction under pressure.

Generic AI produces generic experiences. Modularity is how you get specificity at scale.

---

## Terminology

Every term below has one definition. Use it consistently across your team.

---

### Rack

The host system or product environment. The rack is what all modules live inside. It defines the physical and technical constraints of what can exist — what fits, what connects, what the system is capable of producing at all.

In practice: your product, your platform, your codebase.

---

### Module

A discrete unit of AI behavior with a defined purpose and a defined contract.

A module knows what it does. It knows what it does not do. It has edges. Those edges are not limitations — they are what give it integrity inside the rack.

**A module is not:**
- A feature
- A screen
- A prompt
- An agent

**A module is:**
- A specification. The brief an agent reads before doing anything.

Same contract across modules. Different soul per module. That difference is the design.

---

### Patch

The intentional system of connections between modules, agents, and governance constraints.

The patch is the design artifact — not any individual module, but the architecture of how they relate. Two systems with identical modules but different patches will produce completely different experiences.

In practice: the patch is what you document, version, and evaluate. If you cannot describe your patch, you do not have one. You have defaults.

---

### Signal

The information flowing through the system. Signal moves from module specification through agent execution to user-facing output. Every decision in the system shapes the signal. Governance constrains what the signal is allowed to become.

---

### Agent

An actor in the system with a defined role, a defined responsibility, and a defined scope.

An agent executes. It reads its module specification, draws on its skills, and produces output within the constraints established by governance. It does not do anything outside its scope. That constraint is intentional — it is what makes an agent good at its job rather than mediocre at everything.

**An agent is not:**
- A chatbot
- A general-purpose AI assistant
- Interchangeable with other agents

**An agent is:**
- A specialist. One role. One set of skills. One output format.

In OpenClaw and similar agentic systems, each agent has its own **workspace** — a dedicated directory containing its operating instructions (AGENTS.md), its personality (SOUL.md), its tool notes, and its memory files. The workspace is the agent's home. It is also its memory. What an agent does not write down does not survive the session. The memory model is a design decision, not an implementation detail.

---

### Skill

A capability an agent draws on to fulfill its role.

Skills are not generic. They are assigned to specific agents for specific purposes. The same skill used by two different agents will produce different output because the module specification and role context are different.

**The designer's question:** What does this agent need to know how to do — and what should it explicitly not be able to do?

An agent that can do everything has no character. Constrained skills produce distinctive output.

---

### CV (Control Voltage)

Contextual input that modulates agent behavior without changing the module specification. In eurorack synthesis, CV is an external signal that adjusts a module's parameters in real time without rewiring the patch.

In an AI system: user state, session history, environmental context, real-time data. CV does not change what the agent is — it adjusts how the agent responds in a specific moment.

---

### Governance

The layer that enforces what the system is permitted to produce. Governance is declarative, not interpretive. It does not negotiate. It does not make judgment calls. It holds the rules.

Governance is not a subset of behavior. It is a parallel layer that sits beneath everything — all agents operate within it whether they reference it explicitly or not.

**Governance is not:**
- A style guide
- A preference list
- A set of suggestions

**Governance is:**
- Enforcement. The difference between a rule and a constraint is that a constraint cannot be ignored.

---

### Behavior Layer

The layer where agents operate. Dynamic, contextual, interpretive. Agents in the behavior layer make judgment calls within the constraints established by their module specifications and the governance layer.

The behavior layer is where the system thinks. Governance is where the system is bounded.

---

### Module Layer

The layer where module specifications live. Static, declarative, authored by designers. The module layer does not execute — it specifies. Agents read it. Engineers implement it. Governance enforces it.

---

## The Layers

Three layers. Each has a distinct role. None of them overlap.

```
┌─────────────────────────────────────────────┐
│              GOVERNANCE LAYER               │
│   Visual library · tokens · rules · Always  │
│   + Never lists · does not negotiate        │
├─────────────────────────────────────────────┤
│              BEHAVIOR LAYER                 │
│   Agents · skills · orchestration ·         │
│   judgment calls · rules of engagement      │
│                                             │
│   ┌─────────────────────────────────────┐   │
│   │         SKILLS + AGENTS             │   │
│   │  Agent = actor · Skill = capability │   │
│   │  Module = the brief they execute    │   │
│   └─────────────────────────────────────┘   │
├─────────────────────────────────────────────┤
│               MODULE LAYER                  │
│   Discrete units · purpose · contract ·     │
│   hard edges · authored by design           │
└─────────────────────────────────────────────┘
                      ↓
              USER EXPERIENCE
```

**Governance** constrains everything. It does not generate, evaluate, or decide — it enforces.

**Behavior** executes within governance. Agents read modules, draw on skills, negotiate when responsibilities overlap, and produce output.

**Modules** specify what each agent does. They are authored before anything is built and referenced before anything is run.

---

## Templates

---

### Module Specification Template

```markdown
# Module: [MODULE NAME]

## Purpose
[One sentence. What does this module do? What is it for?]

## Belongs to
[Which rack / product / system does this module live in?]

## Input contract
[What does this module receive? User input, content type, context signal, etc.]

## Output contract
[What does this module produce? Format, structure, length, type.]

## Voice / register
[How does output from this module sound or feel? Be specific — not "professional"
but what kind of professional, in what context, for what purpose.]

## Always
- [Quality that must be present in every output from this module]
- [Quality that must be present in every output from this module]
- [Add as many as needed]

## Never
- [Thing this module must never produce, under any circumstances]
- [Thing this module must never produce, under any circumstances]
- [Add as many as needed]

## Connected to
[Which agents read this module? Which other modules does it relate to?]

## Version
[Module version. Increment when Never/Always rules change.]
```

---

### Agent Specification Template

Every agent needs five things to work without drifting: a role, a lane contract, a skill loadout, a memory model, and an output format. All five belong in the spec before the agent is built.

```markdown
# Agent: [AGENT NAME]

## Role
[One sentence. What is this agent's responsibility in the system?]

## Lane contract

### Owns
- [Work this agent is solely responsible for]
- [Work this agent is solely responsible for]

### Does not own
- [Work this agent must hand off, not attempt]
- [Work this agent must hand off, not attempt]

### Handoff rule
[When another agent owns the work, what does this agent pass on?
Format: target agent + objective + relevant context + next action.
Be specific. "Not my job" is not a handoff.]

## Reads before running
- [File or document this agent must read before executing]
- [File or document this agent must read before executing]

## Skill loadout
- [Skill this agent has access to]
- [Skill this agent has access to]
- [Add as many as needed]

## Skills this agent does NOT have
- [Capability explicitly excluded from this agent]
- [Capability explicitly excluded from this agent]
[Exclusions are as important as inclusions. Do not skip this section.]

## Tool posture
[What is the smallest tool surface this agent needs to do its job?
List only what is required. Agents with broad tool access drift.
If the agent needs exec, say why. If it does not need write, deny it.]

## Memory model
[How does this agent maintain continuity across sessions?
What does it write? Where? What does it read at the start of each run?
If this agent produces a report or log, name the file and format here.]

## Input
[What does this agent receive to begin its work?]

## Output format
[Exact structure of what this agent produces. Use a template or example.]

## Heartbeat cadence
[Optional. Does this agent need to run periodic awareness checks without being triggered?
If yes: what interval? What does it check? What is the threshold for surfacing an alert vs. staying silent?
If no: omit this field.

Heartbeat is for ongoing monitoring — agents that need to notice things over time, not just respond when called.
It is not for scheduled tasks with exact timing. Use cron for that.

Example: "Every 4 hours. Scan archive-log.md for pipeline stall — no new entry in 48h triggers alert to Alfred.
Otherwise HEARTBEAT_OK."]

## Escalation rules
[Under what conditions does this agent stop and defer to another agent or to a human?]

## Connected to
[Which modules does this agent execute? Which agents does it hand off to or receive from?]

## Version
[Agent version. Increment when role, skills, output format, or lane contract changes.]
```

---

### Governance Specification Template

```markdown
# Governance: [SYSTEM NAME]

## Scope
[What does this governance layer cover? Which agents and modules does it apply to?]

## Always
[Qualities that must be present in every output this system produces,
without exception across all modules and agents.]

- [Quality]
- [Quality]
- [Add as many as needed]

## Never
[Things this system must never produce, regardless of module, agent,
context, or instruction. These are hard stops.]

- [Prohibited output type or quality]
- [Prohibited output type or quality]
- [Add as many as needed]

## Visual / component library
[Reference to the design system, token library, or component allowlist
this governance layer enforces.]

## Enforcement mechanism
[How does this governance layer catch violations?
Manual review, automated validation, agent self-check, or combination?]

## Override policy
[Under what conditions, if any, can a governance rule be temporarily suspended?
Who has authority to do so? If never: state that explicitly.]

## Version
[Governance version. Increment when any Always or Never rule changes.]
```

---

### Patch Map Template

```markdown
# Patch Map: [SYSTEM NAME]

## Version
[Patch version. Increment when any connection between modules or agents changes.]

## Rack
[The host system this patch runs inside.]

## Modules
| Module | Purpose | Agent | Version |
|--------|---------|-------|---------|
| [Name] | [One line] | [Agent that reads it] | [Version] |

## Agents
| Agent | Role | Reads | Outputs to | Version |
|-------|------|-------|------------|---------|
| [Name] | [One line] | [Module + governance docs] | [Next agent or user] | [Version] |

## Signal flow
[Describe the path a signal takes from input to output.
Which agent runs first? What does it pass to the next?
Where does governance intercept?]

## Governance
[Reference to the governance specification that applies to this patch.]

## CV inputs
[What contextual signals modulate agent behavior in this patch?
User state, session history, real-time data, environmental context.]

## Known failure modes
[Where has this patch drifted or produced unexpected output?
What caused it? What was the fix?]

## Out of scope
[What does this patch explicitly not do?
Naming boundaries prevents scope creep.]
```

---

## Where signal flow and CV inputs live

Signal flow is documented in pipeline.md — the sequence of
agent handoffs, governance interception points, and loop
conditions. It is not abstracted into a separate document.
It lives where the pipeline is defined.

CV inputs are documented in BRIEF.md — the contextual signals
that modulate agent behavior each session without changing
module specifications or governance rules. Archive state,
cultural calendar, operator standing direction, and pending
proposals are all CV inputs.

Both are per-project. Neither lives in PATCHED.md itself.

---

## How to Use This in a Project

1. **Start with governance.** Before writing a single module, define your Always and Never lists. They are the rack — everything else lives inside them.

2. **Define your modules.** One per distinct behavior. If two modules have the same Voice/Register and the same Never list, they are probably the same module with different inputs.

3. **Assign agents.** One agent per distinct responsibility. If an agent is doing two things that pull in different directions, split it.

4. **Define skill loadouts.** For each agent, list what it can do and — critically — what it cannot. The exclusions are the design decisions.

5. **Draw the patch.** Map the signal flow. Where does each agent receive from? What does it pass on? Where does governance intercept?

6. **Version everything.** Modules, agents, governance, and the patch map all carry version numbers. When something changes, increment. When something drifts, compare against the last stable version.

7. **Name what is out of scope.** Every patch should have an explicit list of what it does not do. Boundaries prevent drift.

---

## Multi-Agent Principles

When your patch has more than one agent, these principles apply.

**Isolation first.** Each agent gets its own workspace, its own session state, and its own memory. Agents that share state create drift you cannot trace back to a source. One brain per agent. No exceptions.

**Lane contracts before coordination.** Before wiring agents together, give each one a written lane contract: what it owns, what it does not own, and what a handoff looks like. A coordinator without lane contracts just coordinates chaos.

**Handoffs are specifications.** When one agent passes work to another, the handoff must include: the target agent, the objective, the relevant context, and the exact next action. "Pass it along" is not a handoff. A vague handoff produces a vague output.

**Smallest tool surface.** Each agent should have access only to the tools it needs to fulfill its role. An agent that can do anything will eventually do something unexpected. Tool restrictions are a design decision, not a security afterthought.

**Memory is intentional.** Agents do not retain information between sessions unless they write it down. Decide what each agent writes, where, and when. If the Archivist does not log it, the system does not remember it. That is a design choice — make it deliberately.

**Escalation paths are required.** Every agent needs a defined answer to: what do I do when I cannot complete my task? Escalation to another agent, to a human, or to a halt — all three are valid. Undefined escalation produces infinite loops or silent failures.

**Start sequential, move to parallel.** Run agents in sequence first. Understand the handoffs. Verify the outputs. Parallelism introduces contention for model capacity, session locks, and context budget. Add it only when sequential throughput is the proven bottleneck — not before.

**Heartbeat is for awareness, not execution.** Some agents need to notice things over time — a stalled pipeline, a gap in the archive, an upcoming cultural event. Heartbeat gives them a periodic turn to surface what needs attention without waiting to be asked. It runs in the main session, stays conversational, and costs tokens — keep the checklist small and the interval appropriate to the role. If nothing needs attention, the agent stays silent. Cron is different: exact timing, isolated session, standalone task. Know which one you need before you build it.

---

## What This Is Not

PATCHED is not:

- A prompt engineering guide
- A tool recommendation
- An engineering architecture spec
- A replacement for a design system
- Specific to any AI model, platform, or framework

It is a vocabulary. The implementation is yours.

---

## Contributing

This framework is versioned and open to revision. If a term is unclear, propose a sharper definition. If a template is missing a field, add it. If a layer needs splitting, split it.

Version the change. Document why.

---

*PATCHED — v0.2.0*
*A modular framework for designing AI-driven experience systems*
*Project agnostic. Drop in and use.*
