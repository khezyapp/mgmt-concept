# Project Guidelines

## What this workspace is

A job-facing reference for leadership, management, and the technique of translating
high-level direction into owned, funded, measurable work. The intended reading mode is
quick review during work: cheat sheet, cookbook recipe, reference entry, or technical
design note — not long prose.

Published as a VitePress site. The content is Markdown under `docs/`; there is no
application code.

Primary reference set: [`docs/strategy-to-action/`](docs/strategy-to-action/index.md) —
document types, a decoder, traceability IDs, a triage SOP, a proposal playbook,
templates, a worked example, and a glossary. Start at the set hub.

## Structure

- `README.md` — repo entry point and local commands.
- `docs/index.md` — site home and situation-based cookbook index.
- `docs/.vitepress/config.mts` — navigation, sidebar, search, and site metadata.
- `docs/<topic>/index.md` — hub for a reference set: "Start here" table, model diagram,
  conventions, maintenance notes.
- `docs/<topic>/NN-topic.md` — numbered docs in reading order. Do not renumber
  published files; add the next number.

New topics get their own folder under `docs/` with an `index.md`, not a new section in
an existing set.

## Document shapes

When asked to add content, choose deliberately:

| Shape | Use for | Length |
|---|---|---|
| Cheat sheet | Pre-meeting or in-meeting review | 1 page |
| Cookbook recipe | One recurring situation, step by step | 5–15 min read |
| Reference entry | A term, model, or rule to look up | as short as possible |
| Technical design note | System or process design with constraints and traceability | 1–5 pages |
| Leadership memo | A decision or escalation for a specific reader | 1 page |

If the user has not chosen a shape, ask. Do not default to an essay.

## Content rules

- **Never fabricate** citations, section or page numbers, quotes, targets, owners,
  dates, or budgets. If it is not in the repo or a user-supplied source, write
  `[VERIFY]` or a `[bracketed placeholder]`.
- **Do not claim to have read source documents that are not in this workspace.** Page
  references are inherited anchors, not independently re-checked.
- **Tag claims**: `[FACT]`, `[INFERENCE]`, `[ASSUMPTION]`, `[VERIFY]`, `[DESIGN]`.
  Tag requirement strength with `MUST`, `MUST NOT`, `SHOULD`, `MAY`.
- **Keep IDs stable and unique** (see `docs/strategy-to-action/03-traceability.md`):
  `V-`, `SO-`, `S`, `SA-`, `KA-`, `KPI-`, `INI-`, `PRJ-`, `TSK-`, `EVD-`, `DOC-`,
  `DEC-`, `ASM-`, `AT-`, `POL-`, `STD-`, `SOP-`, `GL-`, `AP-`.
- **Trace both ways**: every task cites a key action; every objective has at least one
  initiative, KPI, owner, and evidence. Flag orphans instead of inventing links.
- **Keep layer discipline**: a lower layer may be stricter than a higher layer, never
  looser.
- **Do not blur terms**: strategy vs plan, policy vs standard vs guideline, output vs
  outcome, KPI vs target.
- **SME-CU is the Small and Medium Enterprise Coordinator Unit** — a coordination body.
  Never describe it as a co-financing, lending, or credit-guarantee operator.
- **Mark illustrative content** as illustrative and replace placeholders before real use.

## Writing conventions

- H1 is `NN — Title` for numbered docs; one-sentence purpose; numbered `##` sections.
- Prefer tables, checklists, and small ASCII diagrams over prose. These are review
  documents, not essays: a reader should find the answer in under a minute.
- End each doc with a next step or cross-link.
- Link inside a set with paths relative to the current file (for example, a sibling doc
  referenced as `06-templates.md`).
- When adding or renaming a doc, update the set hub's "Start here" and capability map,
  add the page to the sidebar in `docs/.vitepress/config.mts`, and add new vocabulary to
  `08-glossary.md`.
- If the requested document shape is not defined, ask before writing: cheat sheet,
  cookbook recipe, reference entry, technical design note, or leadership memo. Also ask
  who reads it and at which moment.

## Build and validation

```bash
npm install
npm run docs:dev      # local preview
npm run docs:build    # must succeed before finishing
npm run docs:preview  # inspect the production build
```

Before finishing a change:

- `npm run docs:build` succeeds.
- Every relative link resolves.
- No duplicate IDs; new IDs follow the existing prefix scheme.
- Every normative claim has a source anchor or an epistemic tag.
- The one-sentence test in `docs/strategy-to-action/03-traceability.md` passes.

See [`.github/instructions/strategy-docs.instructions.md`](.github/instructions/strategy-docs.instructions.md)
for the per-file contract inside the strategy set, and
[`.github/instructions/reference-sets.instructions.md`](.github/instructions/reference-sets.instructions.md)
for adding a new set.
