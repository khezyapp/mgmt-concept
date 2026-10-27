# 06 — Templates

Copy, fill, delete what you do not need. Brackets `[...]` are placeholders.
Keep IDs stable; never reuse them.

---

## 1. Document triage card

```
DOCUMENT ID:      DOC-[YYYY]-[NNN]
TITLE:            [exact title]
ISSUER:           [ministry / unit / donor]
DATE / VERSION:   [issue date] / [version] / [effective date]
TYPE:             strategy | policy | standard | procedure | guideline | plan | instruction
STATUS:           draft | approved | effective | superseded
OWNER:            [named unit / official]
SCOPE:            [who and what is in / out]
SOURCE:           [URL or file path]

WHY NOW:          [one sentence]

TOP OBLIGATIONS:
  1. [MUST ...]
  2. [MUST ...]
  3. [SHOULD ...]

NUMBERS / DATES:
  - [target, unit, date, baseline]
  - [reporting deadline]

NAMED ACTORS:     [us? parent? another unit?]
DELEGATION:       [confirmed / not confirmed / not applicable]

IMPACT:
  Policy:         [none / amend / new]
  Standard:       [none / gap / new]
  Procedure:      [none / revise / new]
  System:         [none / change / new]
  Reporting:      [none / new indicator / new report]
  Budget/people:  [none / estimate]

SCALE:            A structural | B operational | C informational
GAPS:             [VERIFY] ... / [ASSUMPTION] ... / [DESIGN] ...
RESPONSE MODE:    record | watch | comply | contribute | propose
NEXT ACTION:      [one action] / owner [name] / due [date]
ASSUMPTION:       [one line] / confirm by [date]
```

---

## 2. Document register (CSV header)

```csv
doc_id,title,issuer,issue_date,version,effective_date,type,status,owner,scope,scale,response_mode,next_action,owner_unit,due_date,source_url,last_reviewed
```

---

## 3. Strategic objective card

```
OBJECTIVE ID:     SO-[N]
SOURCE:           [document], [section], p. [N]
EXACT TEXT:       "[quote]"
PLAIN ENGLISH:    [who benefits, what changes]
TARGET:           [number / unit / date]
BASELINE:         [number / source / date]  or [VERIFY]
MEASURE:          [formula]
DATA SOURCE:      [system / survey / registry]
FREQUENCY:        [monthly / quarterly / annual]
OWNER:            [accountable role]
CONTRIBUTING
  STRATEGIES:     [S1..S4]
  KEY ACTIONS:    [KA-...]
  INITIATIVES:    [INI-...]
RISKS:            [top 2]
LAST VERIFIED:    [date]
```

---

## 4. KPI definition card

```
KPI ID:           KPI-[SO]-[NN]
NAME:             [short name]
TYPE:             output | outcome | impact | guardrail
DEFINITION:       [what exactly is counted]
FORMULA:          [numerator / denominator]
UNIT:             [count / % / days / USD]
BASELINE:         [value, date, source]
TARGET:           [value, date]
FREQUENCY:        [monthly / quarterly / annual]
DATA SOURCE:      [system table / report / survey]
DATA OWNER:       [role]
VALIDATION:       [who checks, how]
DISAGGREGATION:   [sex / size / province / sector, if required]
GUARDRAIL:        [what must not get worse]
REPORTED TO:      [unit / Secretariat / donor]
STATUS:           official | proposed | proxy
```

---

## 5. Key action → initiative canvas

```
KEY ACTION:       KA-[S][SA]-[N]
SOURCE:           [document], Annex [N], §[x], action [n], p. [N]
EXACT TEXT:       "[quote]"
RESPONSIBLE:      [named entities]
TIMELINE:         [start–end]
BOTTLENECK:       [what is broken]
INTENT:           [what should change]
OUR ROLE:         own | contribute | watch
JUSTIFICATION:    [delegation / mandate / capability]

INITIATIVE:       INI-[...]
OUTCOME:          [change for users]
OUTPUTS:          [what we deliver]
PRIMARY KPI:      [KPI-...]
SECONDARY KPIs:   [KPI-...]
GUARDRAIL:        [KPI-...]

SCOPE IN:         [ ... ]
SCOPE OUT:        [ ... ]
DEPENDENCIES:     [ ... ]
ASSUMPTIONS:      [ ... ]
RISKS:            [ ... ]
OWNER:            [name / role]
NEXT DECISION:    [what + date]
```

---

## 6. Task card

```
TASK ID:          TSK-[...]
TITLE:            [verb + object]
PARENT:           PRJ-[...] / INI-[...] / KA-[...]
WHY:              [one sentence linking to objective/KPI]

DESCRIPTION:
  [what to do, not how]

ACCEPTANCE CRITERIA:
  - [ ] [testable condition]
  - [ ] [testable condition]

NON-FUNCTIONAL:
  - Performance:  [target]
  - Security:     [standard]
  - Availability: [target]
  - Audit:        [what must be logged]

EVIDENCE:         [EVD-...] [where stored]
DEPENDENCIES:     [ ... ]
OWNER:            [one person]
REVIEWER:         [one person]
DUE:              [date]
ESTIMATE:         [days / points]
STATUS:           planned | active | blocked | done
```

---

## 7. Traceability register (CSV header)

```csv
task_id,task,project_id,initiative_id,key_action_id,strategy_id,objective_id,kpi_id,baseline,target,owner,support,start_date,due_date,budget,evidence_id,status,risk_id,last_verified
```

---

## 8. Proposal one-pager

```
TITLE:            [outcome-oriented title]
ID:               INI-[...] / PRJ-[...]
DATE / AUTHOR:    [date] / [name, role]

1. PROBLEM
   [Who is affected, what it costs, evidence.]

2. STRATEGIC LINK
   [Document, section, page, exact quote]
   Key action: KA-[...]   Objective: SO-[...]   Strategy: S[...]
   [One sentence linking the problem to the commitment.]

3. OBJECTIVE
   By [date], [change] from [baseline] to [target], measured by [KPI].
   Guardrail: [what must not worsen].

4. SCOPE
   In:  [ ... ]
   Out: [ ... ]

5. APPROACH
   Option A: [ ... ]  Cost/time: [ ... ]
   Option B: [ ... ]  Cost/time: [ ... ]
   Recommendation: [ ... ] because [criteria].

6. DELIVERABLES & MILESTONES
   M1 [date] — [deliverable] — [acceptance]
   M2 [date] — [deliverable] — [acceptance]
   M3 [date] — [deliverable] — [acceptance]

7. RESOURCES
   Staff: [ ... ]  Technology: [ ... ]  Training: [ ... ]
   Capex: [ ... ]  Opex/year: [ ... ]  Contingency: [ ... ]

8. RISKS & ASSUMPTIONS
   [Risk] → [mitigation] → [owner]
   [Assumption] → confirm by [date]

9. GOVERNANCE
   Accountable: [name]  Responsible: [name]
   Consulted: [ ... ]   Informed: [ ... ]

10. M&E
   Indicator: [ ... ]  Source: [ ... ]  Frequency: [ ... ]
   Feeds: [report name, due date]

11. DECISION REQUESTED
   Approve [option] and [budget] by [date].
   Next step if approved: [action] on [date].
```

---

## 9. RFC / design doc: strategic alignment section

Add this near the top of every technical design document:

```markdown
## Strategic alignment

| Item | Reference |
|---|---|
| Strategy | S4 — Developing Support Infrastructure |
| Key action | KA-S4.2-4 (Annex 1, §4.2, action 4, p. 47–48) |
| Objective | SO-2 — Strengthen production capacity |
| Indicator | KPI-[...] — [name, target] |
| Contribution | [one sentence: how this design moves the indicator] |
| Guardrails | [data protection, audit, eligibility rules] |
| Out of scope | [what this design deliberately does not solve] |
```

Then add a **requirements traceability** table:

| Requirement | Source | Design element | Test |
|---|---|---|---|
| MUST classify at registration | §4.1.1.2, p. 18 | Classification service | `AT-CLS-01` |
| MUST log every decision | Policy [ID] | Audit log table | `AT-AUD-03` |
| SHOULD publish processing time | §4.1.1.2, p. 18 | Dashboard | `AT-SLA-02` |

---

## 10. Audit test case

```
TEST ID:          AT-[...]
CONTROL:          [control ID / policy clause]
REQUIREMENT:      [exact obligation + source]
POPULATION:       [all transactions in period]
SAMPLE:           [size / method]
PROCEDURE:        [query / inspect / observe / recalculate]
EXPECTED:         [condition]
EVIDENCE:         [screenshot / query result / report]
RESULT:           pass | fail | exception
FINDING:          [condition, criteria, cause, effect]
SEVERITY:         high | medium | low
ACTION:           [corrective action + owner + date]
RETEST:           [date / result]
```

---

## 11. Weekly 15-minute strategy scan

```
Week of:          [date]
New documents:    [title / type / issuer]
Relevant:         [yes/no + reason]
Changed:          [policy / standard / procedure / system / report]
New tasks:        [TSK-... / owner / due]
Decisions needed: [ ... ]
Risks:            [ ... ]
Next scan:        [date]
```

---

## 12. One-paragraph briefing note

```
[Document] was issued by [issuer] on [date]. It [requires / commits / recommends]
[one-sentence substance]. For us, the main impact is [policy / system / reporting]
because [reason]. I propose to [action] by [date], owned by [name], at a cost of
[rough estimate]. The main assumption is [assumption]; please confirm by [date].
```

---

## 13. Decision log entry

```
DECISION ID:      DEC-[YYYY]-[NNN]
DATE:             [date]
DECISION:         [what was decided]
CONTEXT:          [problem / options]
OPTIONS:          [A / B / C]
RATIONALE:        [why]
OWNER:            [who decided]
IMPACT:           [scope, cost, schedule, risk]
REVIEW DATE:      [when to revisit]
```

---

## 14. Assumption log entry

```
ASSUMPTION ID:    ASM-[NNN]
STATEMENT:        [what we assume is true]
WHY NEEDED:       [what it unblocks]
IMPACT IF WRONG:  [scope / cost / schedule / compliance]
VALIDATION:       [how and with whom]
OWNER:            [name]
DUE:              [date]
STATUS:           open | confirmed | invalidated
```

---

## 15. Report / dashboard line (M&E-ready)

```
[Indicator name]: [value] [unit] against target [target] ([period]).
Trend: [up/down/flat] vs [previous period].
Data source: [system/report]. Validated by: [role] on [date].
Explanation: [one sentence].
Action if off-track: [action, owner, date].
```

A report line without source and validation is an opinion, not evidence.
