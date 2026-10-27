---
name: strategy-to-action
description: "Use when decoding a strategy, policy, national plan, SOP, or leadership direction into action plans; triaging a newly issued document; building objective-to-task traceability; or drafting a KPI, task card, one-page proposal, cheat sheet, cookbook recipe, or technical design note from a high-level commitment."
argument-hint: "[document path, or objective / key action ID]"
---

# Strategy → Action

Turn direction into owned, funded, measurable work. The repo holds the method; this
skill runs it.

## When to use

- A new strategy, policy, standard, plan, or instruction arrives and you must decide
  what it means for the unit.
- Someone asks "what do we do because of this objective?"
- You need a traceability chain, a KPI definition, a task card, or a proposal.
- You are adding a worked example or a new page to the VitePress handbook.

## Step 0 — clarify the deliverable

If the user has not specified what kind of document they want, ask before writing:

1. Who reads it, and at what moment — before a meeting, while triaging a document, or
   while drafting?
2. Which shape: cheat sheet (1 page), cookbook recipe (one situation, 5–15 min read),
   reference entry (as short as possible), technical design note (constraints and
   traceability), or leadership memo (1 page)?
3. Where should it live: a page in `docs/strategy-to-action/`, a new set under `docs/`,
   or an answer in chat only?

If the user already specified the shape, or only wants analysis, skip the questions. Do
not default to an essay.

## Non-negotiables

- Never invent titles, section or page numbers, quotes, targets, owners, dates, or
  budgets. Use `[VERIFY]` or a `[placeholder]`.
- Do not claim to have read source documents that are not in this workspace.
- Keep IDs stable, unique, and consistent with `03-traceability.md`.
- Label illustrative content as illustrative.
- Prefer a cheat sheet, cookbook recipe, reference entry, or technical design note over
  long prose. The reader is reviewing during work.

## Procedure

### 1. Source card

Record document, issuer, date/version, type, status, owner, scope, source path. If the
source is unavailable, say so explicitly and continue with `[VERIFY]` anchors.

### 2. Classify

Use the six types: strategy, policy, standard, procedure, guideline, action plan. If a
document mixes types, split it by section and treat each part separately.

### 3. Decode

- Three questions: what is broken, what is the intent, what action results.
- Verb decoder: shall/must → requirement; strengthen → baseline + indicator;
  promote → influence + adoption metric; review → report or decision; develop → deliverable
  and acceptance criteria.
- Four passes: boundaries, numbers, verbs/actors/time, gaps/decisions.
- Tag each gap `[VERIFY]`, `[ASSUMPTION]`, or `[DESIGN]`.

### 4. Decide relevance and role

- Gates: names us, changes a rule, needs our data, creates a target.
- Response mode: record, watch, comply, contribute, propose. Never "wait for instructions".
- Ownership gates: named, mandate, capability, authority. Without authority, propose
  under delegation or contribute; do not claim ownership.

### 5. Trace

Build the chain both ways:

```
V → SO → S → SA → KA → KPI / INI → PRJ → TSK → EVD
```

Write one top-down sentence ("this task exists because...") and one bottom-up
justification ("this objective is credible because..."). Run the one-sentence test.

### 6. Specify results

Define one primary outcome KPI plus an output and a guardrail. For each: baseline,
target, formula, data source, frequency, owner, and validation. Outputs are countable;
outcomes require a before/after comparison.

### 7. Produce the artifact

Use the shape chosen in Step 0 and the forms in `06-templates.md`: triage card, objective
card, KPI card, key-action canvas, task card, proposal one-pager, audit test. Match the
ask size — opportunity note, concept note, full proposal, business case — to the decision
and money at stake.

### 8. Check coverage

Look for orphan tasks, orphan objectives, KPI-less actions, owner-less initiatives,
evidence-less tasks, and stale anchors. No task without an action; no objective without
an owner, indicator, and evidence.

### 9. Persist only reusable method

If the output teaches a reusable technique, add or update a numbered doc under
`docs/strategy-to-action/`, sync the set hub and glossary, and add the page to
`docs/.vitepress/config.mts`. If it is project data, keep it in the traceability
register, not in these docs. Run `npm run docs:build` before finishing.

## Output contract

- Lead with the answer: document type, relevance, response mode, proposed action, owner,
  and date.
- Then the evidence: citation anchor, IDs, and numbers.
- Keep `[FACT]` separate from `[INFERENCE]` and `[ASSUMPTION]`.
- End with the decision requested and the next review date.

## References

| Need | Doc |
|---|---|
| One-page overview and verb decoder | [01-cheatsheet.md](../../../docs/strategy-to-action/01-cheatsheet.md) |
| Reading protocol for a new document | [02-decoder.md](../../../docs/strategy-to-action/02-decoder.md) |
| ID scheme, register, two-way sentences | [03-traceability.md](../../../docs/strategy-to-action/03-traceability.md) |
| 60-minute triage workflow | [04-new-document-sop.md](../../../docs/strategy-to-action/04-new-document-sop.md) |
| Proposal structure and pitch | [05-proposal-playbook.md](../../../docs/strategy-to-action/05-proposal-playbook.md) |
| Copy-ready forms | [06-templates.md](../../../docs/strategy-to-action/06-templates.md) |
| Filled SME-CU example | [07-worked-example.md](../../../docs/strategy-to-action/07-worked-example.md) |
| Term definitions | [08-glossary.md](../../../docs/strategy-to-action/08-glossary.md) |
