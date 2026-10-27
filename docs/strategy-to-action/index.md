# Strategy → Action Reference Set

Reference docs for reading high-level strategy/policy documents and turning them into
owned, funded, measurable work — without waiting for someone to assign it.

Context: Senior Development role at SME-CU — the Small and Medium Enterprise
Coordinator Unit, a coordination body — with a software engineering background and
prior audit experience at EDC.

---

## Start here

| If you want to... | Read | Time |
|---|---|---|
| Understand the six document types in one page | [01 — Cheat Sheet](01-cheatsheet.md) | 5 min |
| Decode any new strategy/policy document | [02 — Decoder](02-decoder.md) | 15 min |
| Link an action to a high-level objective (and back) | [03 — Traceability](03-traceability.md) | 15 min |
| React correctly when a new document is published | [04 — New Document SOP](04-new-document-sop.md) | 10 min |
| Propose a task/project from a high-level action | [05 — Proposal Playbook](05-proposal-playbook.md) | 20 min |
| Copy a ready-made form | [06 — Templates](06-templates.md) | as needed |
| See one full worked example (SME-CU) | [07 — Worked Example](07-worked-example.md) | 25 min |
| Look up a term or framework | [08 — Glossary](08-glossary.md) | as needed |

Recommended first pass: **01 → 02 → 03 → 07**. Then use 04/05/06 as working tools.

---

## The whole model in one picture

```
DIRECTION        Vision ................ where we want to be
                 Goal ................. the change we want
                 Strategic objective .. measurable result by a date
                 Strategy ............ chosen path to remove a bottleneck
                        |
MANDATE          Policy .............. what is mandatory / forbidden
                        |
SPECIFICATION    Standard ............ exact thresholds, formats, rules
                        |
HOW              Procedure (SOP) ..... who does what, in what order
                 Guideline ........... recommended approach, optional
                        |
EXECUTION        Key action .......... commitment in the strategy's action matrix
                 Initiative/program .. grouped projects
                 Project ............. bounded delivery
                 Task ................ one assignable unit with an owner and date
                        |
EVIDENCE         KPI / report / audit  proof that the result happened
```

Two rules that prevent most confusion:

1. **A strategy is a choice, not a plan.** It tells you which bottleneck gets priority.
   It does not tell you what to build on Monday.
2. **Every layer must be traceable both ways.** Top-down: *this task exists because of
   that action.* Bottom-up: *that objective is credible because these tasks exist.*

---

## How the four capabilities map to the docs

| Capability | Where it is handled |
|---|---|
| Cheat sheet for high-level docs | 01 (one page), 02 (reading method), 08 (terms) |
| Translate / link action ↔ high level | 03 (ID scheme, register, two-way sentence patterns) |
| Be ready when a new document is published | 04 (60-minute triage SOP, decision tree, first 24h) |
| Propose a task defined by a high-level action | 05 (ownership test, one-pager, pitch), 06 (forms), 07 (filled example) |

---

## Conventions used in this set

| Tag / convention | Meaning |
|---|---|
| `SO-1`, `S4`, `KA-S4.2-4` | Stable IDs for objective, strategy, key action (see 03) |
| `[FACT]` | Stated in the source document |
| `[INFERENCE]` | Reasonable deduction from the document |
| `[ASSUMPTION]` | Needed to proceed; must be validated |
| `[VERIFY]` | Open question; confirm with document owner or Secretariat |
| `MUST` / `MUST NOT` / `SHOULD` / `MAY` | Requirement strength, borrowed from RFC 2119 |
| `→` | "leads to" or "maps to" |

**Disclaimer:** Section and page references are retained as anchors for the worked
example. Proposed policies, standards, system designs, KPIs, and task IDs in 07 are
illustrative examples — they are not official SME-CU or MEF documents. Replace
bracketed placeholders before real use.

---

## Maintenance

- Treat these docs as the maintained reference. If a cited source is revised, update
  [03-traceability.md](03-traceability.md) (page/section map) and re-check 07.
- Store your live traceability register separately (spreadsheet or issue tracker) using
  the columns in 03. These docs are the method; the register is the data.
- Review this set when you change role or when a new national strategy/policy is issued.
