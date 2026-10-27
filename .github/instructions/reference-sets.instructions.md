---
description: "Use when adding a new reference set under docs/ or editing shared site pages — numbering, hub page, VitePress navigation, glossary, and review-oriented document shapes."
applyTo: "docs/**/*.md"
---

# Reference sets and VitePress pages

## Adding a new set

1. Create `docs/<topic>/index.md` as the hub: purpose, "Start here" table, model
   diagram, conventions, and maintenance notes.
2. Add numbered docs as `docs/<topic>/NN-topic.md`. Start at `01`, keep reading order,
   and never renumber a published page.
3. Add the hub and each page to `nav` or `sidebar` in `docs/.vitepress/config.mts`.
4. Add a "Start by situation" row in `docs/index.md` if the set answers a recurring
   on-the-job question.
5. Add new terms to the set's glossary. If the set has none, add `NN-glossary.md` or
   link to an existing shared glossary.
6. Run `npm run docs:build` and fix every broken link before finishing.

## Choose the shape first

| Shape | Use for | Length |
|---|---|---|
| Cheat sheet | Pre-meeting or in-meeting review | 1 page |
| Cookbook recipe | One recurring situation, step by step | 5–15 min read |
| Reference entry | A term, model, or rule to look up | as short as possible |
| Technical design note | System or process design with constraints and traceability | 1–5 pages |
| Leadership memo | A decision or escalation for a specific reader | 1 page |

If the user has not specified a shape, ask. Also ask who reads it and at which moment.
Do not default to an essay.

## Links and navigation

- Inside a set, link with paths relative to the current page.
- In `docs/index.md` and the VitePress config, use absolute site paths such as
  `/strategy-to-action/01-cheatsheet`.
- Do not link to files outside `docs/`; put source material in a separate, clearly
  marked location and cite it by name.
- Keep one H1 per page. VitePress uses the first H1 for the page title.

## Before finishing

- [ ] `npm run docs:build` succeeds.
- [ ] Every new page appears in `nav` or `sidebar`.
- [ ] Hub "Start here" table and the home situation table are updated.
- [ ] Glossary updated for new vocabulary.
- [ ] No fabricated citations, page numbers, quotes, owners, or dates.
