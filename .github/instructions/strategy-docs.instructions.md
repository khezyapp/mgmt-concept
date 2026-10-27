---
description: "Use when creating or editing the numbered Markdown reference docs under docs/strategy-to-action/ — enforces the document contract, epistemic tags, stable IDs, traceability, and hub/glossary sync."
applyTo: "docs/strategy-to-action/**/*.md"
---

# Strategy → Action document contract

## Structure

1. `# NN — Title` for numbered docs; `# Title` for the set hub (`index.md`).
2. One to three sentences: who uses this, when, and what output it produces.
3. Numbered `##` sections; `###` only nested under a section.
4. End with a next step or a relative cross-link.
5. Keep each doc usable on its own; link to others for depth, do not require them.

## Claims and language

| Marker | Use |
|---|---|
| `[FACT]` | Stated in the cited source |
| `[INFERENCE]` | Reasonable deduction from the source |
| `[ASSUMPTION]` | Needed to proceed; include who validates and by when |
| `[VERIFY]` | Open question; needs document owner or Secretariat |
| `[DESIGN]` | Your decision to make and record |

- `MUST` / `MUST NOT` = testable requirement; `SHOULD` = expected unless justified;
  `MAY` = optional.
- Quotes must be exact and short, with a source anchor. Never put a paraphrase inside
  quotation marks.
- Existing anchors use `§x.y, p. N` or `Annex N, §x, action n, p. N`. New anchors need a
  user-supplied source; otherwise write `[VERIFY source]`.
- Write requirements and evidence, not promises. Avoid "we will try".

## IDs and traceability

- Follow the prefix table in `03-traceability.md`.
- Key actions: `KA-S<strategy>.<sub-area>-<action>`. Indicators: `KPI-SO<n>-<nn>`.
- Any task or register row carries: Task, Key action, Objective, KPI, Owner, Due,
  Evidence. If a value is unknown, keep the column and write `[VERIFY ...]`.
- Never reuse or renumber an ID; extend the sequence.
- Top-down and bottom-up sentences must both be present for any worked example.

## Formatting

- Tables for comparisons and registers; ASCII for flows and hierarchies.
- Bracketed `[placeholder]` for anything the user must fill.
- En dash in numbered H1s: `01 — Cheat Sheet`.
- Keep the set hub's time estimates plausible; adjust them when content grows.
- Illustrative policies, standards, KPIs, and architectures must be labelled as examples,
  not presented as official documents.

## Before finishing

- [ ] Relative links resolve.
- [ ] New terms added to `08-glossary.md`.
- [ ] Set hub's "Start here" and capability map updated if a doc was added or renamed.
- [ ] Page added to the sidebar in `docs/.vitepress/config.mts`.
- [ ] No duplicate IDs; no unlabelled assumptions.
- [ ] Illustrative content marked; placeholders not left in "final" prose.
