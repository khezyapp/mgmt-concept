# 01 — Cheat Sheet

One page to keep open while reading any strategy, policy, standard, SOP, guideline,
or action plan.

---

## 1. The six document types

| Layer | Core question | What it contains | After reading, you can... | Typical verbs | Usually owned by | Software equivalent |
|---|---|---|---|---|---|---|
| **Strategy** | Where are we going, why, and what do we say no to? | Vision, goal, objectives, targets, pillars, scope, trade-offs | Name the destination and the chosen path; say which work gets priority | improve, strengthen, promote, develop, expand, transform | Top leadership / cabinet | 3–5 year architecture roadmap; domain map |
| **Policy** | What is mandatory or forbidden? | Scope, principles, roles, compliance rules, exceptions, penalties | State the non-negotiable rules and who can grant an exception | shall, must, must not, ensure, prohibit, require | Board / executive / minister | System constraints, authorization model, data-handling rules |
| **Standard** | What exact specification must we meet? | Thresholds, formats, schemas, configurations, acceptance criteria | Build, test, and audit against exact criteria | conform, comply, minimum, within, format, record | CTO / chief architect / standards body | API schema, SLA, lint rule, security baseline |
| **Procedure (SOP)** | Who does what, in what order? | Steps, inputs/outputs, per-step roles, systems, exceptions, records | Execute or audit the workflow end to end | submit, validate, approve, record, escalate | Process owner | Workflow engine, CI/CD pipeline, runbook |
| **Guideline** | What is recommended? | Patterns, tips, examples, heuristics | Choose an approach and justify deviation | recommend, consider, prefer, should | Practice lead / community | Style guide, reference architecture |
| **Action plan** | Who does what, by when, with what budget? | WBS, owners, dates, dependencies, budget, deliverables | Start work, track progress, report results | deliver, implement, complete, launch | Delivery manager / unit head | Sprint backlog, epics, milestones |

```
                 ┌─────────────────────────┐
                 │       STRATEGY          │  direction & focus
                 ├─────────────────────────┤
                 │        POLICY           │  rules & principles
                 ├─────────────────────────┤
                 │       STANDARD          │  exact specs & thresholds
                 ├───────────┬─────────────┤
                 │ PROCEDURE │  GUIDELINE  │  how-to steps / advice
                 ├───────────┴─────────────┤
                 │      ACTION PLAN        │  tasks, owners, dates
                 └─────────────────────────┘
```

**Hierarchy rule:** a lower layer may be stricter than a higher layer, never looser.
A procedure that violates a policy is a defect, even if it is efficient.

---

## 2. The cascade: one line per level

| Level | One-line definition | Test question |
|---|---|---|
| Vision | The future state we want | Can I picture it in one sentence? |
| Goal | The change we want for a target group | Who is better off, and how? |
| Strategic objective | A measurable result by a date | What number moves, from what to what, by when? |
| Strategy | The chosen path to remove one bottleneck | What is broken, and what did we choose to do about it? |
| Key action | A committed intervention in the action matrix | Who is named responsible, and in what timeframe? |
| KPI | The measure that tells us if it worked | What is the formula, baseline, target, source? |
| Initiative / program | A group of related projects | Which objective does the whole group serve? |
| Project | A bounded delivery with a start and end | What is in scope, out of scope, and the acceptance test? |
| Task | One assignable unit of work | Owner, date, deliverable, evidence? |
| Evidence | Proof the result happened | Where is it stored, and who can verify it? |

If you cannot answer the test question at a level, the level is missing. Your job is to
**propose** it, not to wait for it.

---

## 3. Decode any sentence in 3 questions

| Ask | Example: "Strategy 1: Improving the Business Environment and Regulatory Framework" |
|---|---|
| 1. What is broken? | Registering a business, getting permits, and complying is slow, complex, and costly for MSMEs. |
| 2. What is the intent? | Make rules clearer, faster, cheaper, and more predictable to follow. |
| 3. What action will result? | Online single portal, fewer licences, interoperable databases, trained officials. |

Test: **what changes on Monday morning because of this sentence?** If the answer is
"nothing", you have not decoded it yet.

---

## 4. Verb decoder (prose → requirement)

| Wording in the document | What it obliges | Artifact that proves it |
|---|---|---|
| shall / must / ensure / establish | A firm requirement or a new capability | Policy clause, standard, system feature, test |
| must not / prohibit | A hard constraint | Control, access rule, validation, audit test |
| strengthen / enhance / improve | Change an existing baseline | Baseline measurement + before/after indicator |
| develop / build / implement | Create something new | Deliverable, go-live date, acceptance criteria |
| promote / facilitate / encourage / support | Influence, not direct delivery | Program, incentive, adoption metric |
| review / study / assess | Produce a decision or evidence | Report, options paper, decision record |
| expand / scale / replicate | Increase coverage of something proven | Coverage metric, rollout plan |
| maintain / sustain | Keep a service level | SLA, operating budget, monitoring |
| coordinate / collaborate | Shared process across owners | MoU, RACI, joint procedure, meeting record |

**Requirement strength:** `MUST` = mandatory; `SHOULD` = expected unless justified;
`MAY` = optional. Write your own tasks in this language so they can be tested.

---

## 5. New document in 10 minutes

Do these seven checks before anyone tells you what to do:

1. **Type** — strategy, policy, standard, procedure, guideline, or plan?
2. **Owner** — who signed it, and which unit is named?
3. **Scope** — who and what is in, out, and over what period?
4. **Numbers** — targets, baselines, dates, budget.
5. **Obligations** — every shall/must/ensure, highlighted.
6. **Change** — what breaks in our current policy, system, or backlog?
7. **Response** — ignore/record, watch, comply, contribute, or propose.

Output: one triage card (see [06-templates.md](06-templates.md)) and one sentence to
your manager: *"This affects us because ___. I propose ___ by ___."*

Full workflow: [04-new-document-sop.md](04-new-document-sop.md).

---

## 6. Apply it: the MSME Strategy 2026–2030 at a glance

| Element | Where | Content |
|---|---|---|
| 3 strategic objectives | §3.2, p. 13 | Registration growth; production capacity (50% of demand for 15 products; 50 export categories); value-chain integration (50 MSME suppliers; 25% local sourcing) by 2030 |
| 4 strategies | §4.1, p. 16 | S1 business environment (p. 17); S2 production/technology (p. 19); S3 competitiveness (p. 21); S4 support infrastructure (p. 23) |
| Key actions | Annex 1, p. 37–51 | Numbered actions with responsible entities and 2026–2030 timelines |
| Implementation rule | §4.2, p. 26 | Each key action needs a measurable action plan and estimated budget |
| M&E | §6.2, p. 31–35 | Semi-annual/annual reports; mid-term 2028; end-term 2030 |
| Your entry point | §4.1.4.2, p. 24; Annex 4.2, p. 47 | Access to finance and credit; SME co-financing mechanisms |

Read the action matrix first. If your unit is not named, your role is **contribute** or
**propose under delegation** — not wait. See [03-traceability.md](03-traceability.md) for
the full map.

---

## 7. Five common confusions

| Don't confuse | With | Difference |
|---|---|---|
| Strategy | Action plan | Strategy is the choice of path; the plan is the schedule of work. |
| Policy | Standard | Policy says *what must be true*; standard says *how exact it must be*. |
| Standard | Guideline | Standard is mandatory; guideline is recommended and deviation is allowed with reason. |
| Output | Outcome | Output is what you delivered (portal); outcome is what changed (faster approvals). |
| KPI | Target | KPI is the measure; target is the number you committed to. |
| Goal | Objective | Goal is the broad change; objective is the measurable step toward it. |
| Vision | Goal | Vision is the future picture; goal is the result you intend to produce. |

---

## 8. If you remember only five things

1. **Strategy = chosen path through a bottleneck.** If you cannot name the bottleneck,
   you do not understand the strategy.
2. **Policies constrain; standards specify; procedures sequence; guidelines advise.**
   Read each with a different question.
3. **Never accept an action without a number, an owner, and a date.** If missing, that
   is your proposal opportunity.
4. **Trace both ways.** Every task cites a key action and objective; every objective has
   tasks and a KPI.
5. **The document is not the work.** Your value is the translation layer: objective →
   KPI → initiative → task → evidence.

---

## 9. One-page reading order for a document stack

```
1. Strategy      → destination, objectives, pillars, targets
2. Action matrix → who is named, what is committed, by when
3. Policy        → what is mandatory for your domain
4. Standard      → exact specs you must meet
5. Procedure     → the workflow you must follow or build
6. Guideline     → options you may choose
7. Your backlog  → tasks, owners, acceptance criteria, evidence
```

Read the **action matrix before the policy**. It tells you whether you are a named
actor at all — and that decides whether you comply or propose.
