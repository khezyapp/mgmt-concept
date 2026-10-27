---
description: "Triage a newly issued strategy, policy, standard, instruction, plan, or meeting minute into a relevance decision, response mode, and first tasks."
argument-hint: "Document path, issuer, date, and your unit's mandate"
agent: "Strategy Analyst"
tools: [read, search, web]
---

Triage the document described in the prompt argument. If the path, issuer, or your unit's
mandate is missing, ask one compact question and stop. Do not invent any of them.

Follow `docs/strategy-to-action/04-new-document-sop.md` and use the forms in
`docs/strategy-to-action/06-templates.md`.

## Output

Return these sections, in this order:

1. **Document card** — title, issuer, date/version, type, status, owner, scope, source.
2. **Top obligations** — up to five, tagged `[FACT]` or `[VERIFY]`, with an anchor if one
   exists.
3. **Numbers and dates** — target, baseline, unit, deadline; mark missing baselines
   `[VERIFY]`.
4. **Relevance** — the four gates from the SOP, each yes/no with a reason.
5. **Impact** — policy, standard, procedure, system, reporting, budget/people; scale
   A/B/C.
6. **Response mode** — record, watch, comply, contribute, or propose, with the reason.
7. **First tasks** — `TSK-...`, owner role, due date, evidence, and the key action or
   objective each task serves. Use `[VERIFY link]` if the link is unknown.
8. **Assumptions** — one line each, with a validation owner and date.
9. **One-paragraph note** — the message to send to a manager, using the template in
   `06-templates.md` §12.

## Rules

- Source documents are not in this repository. Never claim to have read them.
- Quote only exact text you can see; never invent a page or section number.
- Keep the output short enough to review in under five minutes.
- Do not edit repository files unless the user explicitly asks for a document update.
