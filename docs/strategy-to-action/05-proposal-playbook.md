# 05 — Proposal Playbook: Turn a High-Level Action into Your Task

Use when a strategy, policy, or action matrix defines an outcome in your domain, but
nobody has told you what to do. Your job is to propose the missing delivery layer.

The proposal is not a request for permission to think. It is a **decision-ready
package**: problem, link, scope, cost, indicator, risk, and an explicit ask.

---

## 1. First: is it yours to propose?

Run four gates. Be honest; over-claiming ownership is how engineers end up accountable
without authority.

| Gate | Question | Pass condition |
|---|---|---|
| **Named** | Does the document name your unit, or a parent that delegates to you? | Explicit name or written delegation |
| **Mandate** | Is this within your unit's legal/administrative function? | Fits your terms of reference |
| **Capability** | Do you own the system, data, or process needed? | You can deliver or integrate |
| **Authority** | Can you commit budget, staff, and policy changes? | You or your sponsor can decide |

Outcomes:

| Result | Mode | Action |
|---|---|---|
| All four pass | **Own** | Write a full proposal |
| Named + mandate, no budget | **Propose with sponsor** | Find the budget owner; co-sign |
| Relevant, another unit leads | **Contribute** | Offer a specific component (API, data, standard) |
| Not named, not mandated | **Watch** | Log it; build capability; revisit |

**SME-CU example:** Annex 1, §4.2, action 4 names **MEF**, not SME-CU. So your
authority is delegated, not direct. State it: *"SME-CU proposes to implement this under
MEF's mandate."* Do not write *"SME-CU is responsible"* unless you can cite the
delegation.

---

## 2. Choose the size of the ask

Do not write a 40-page business case when a one-pager is needed.

| Format | Length | Use when | Decision sought |
|---|---|---|---|
| **Opportunity note** | 1 page | You see a gap; no cost yet | Permission to explore |
| **Concept note** | 2–3 pages | Problem and approach are clear; cost is rough | Approval to design/pilot |
| **Full proposal** | 8–15 pages | Budget, procurement, or multi-party integration | Approval and funding |
| **Business case** | 15+ pages | Large investment, new institution, or law change | Investment decision |

Rule of thumb: increase the format only when the decision, money, or risk increases.

---

## 3. The one-page structure (use this 90% of the time)

```
1. Title and ID
2. Problem and evidence
3. Strategic link (quote + citation + IDs)
4. Objective and indicator
5. Scope: in / out
6. Proposed approach and options
7. Deliverables and milestones
8. Resources and budget
9. Risks, assumptions, dependencies
10. Governance and RACI
11. M&E and reporting
12. Decision requested
```

### 3.1 Title and ID

Name the outcome, not the technology.

- Weak: "AI Credit Scoring Platform"
- Better: "Reduce MSME loan assessment time from 10 days to 2 days through automated
  eligibility checks and bank integration"
- ID: `INI-S4.2-4-A` / `PRJ-COFIN-01`

### 3.2 Problem and evidence

One paragraph, three parts: who is affected, what it costs, and how you know.

> "MSME loan applications are assessed manually across [N] partner banks. Average
> processing time is [X] days; [Y]% of applications require rework due to missing
> documents. This limits the volume of co-financed loans and makes monthly reporting
> manual."

Evidence: process map, time study, error rate, user complaints, audit finding, report
extract. No evidence = opinion.

### 3.3 Strategic link

Use the exact citation. This is the section that separates a proposal from a wish list.

> This proposal implements **Annex 1, §4.2, action 4** of the National Strategy on the
> Development of MSMEs 2026–2030 (p. 47–48): *"Promote the participation of the private
> sector and international development partners ... including the establishment of SME
> Co-Financing Mechanisms."*
>
> It contributes primarily to **SO-2** (strengthen production capacity) and secondarily
> to **SO-3** (value-chain integration). It is also consistent with **§4.1.4.2**
> (expanding access to finance, p. 24).

Add the IDs (`KA-S4.2-4`, `SO-2`). One quote, one page number, one sentence of logic.
Do not paste the whole strategy.

### 3.4 Objective and indicator

Write one objective with a number and a date:

> "By Q4 2027, reduce median assessment time for co-financed loans from [baseline]
> days to ≤ 2 days for [target]% of applications, without increasing the default rate."

Indicator definition (template in 06):

| Element | Example |
|---|---|
| Indicator | Median assessment time (calendar days) |
| Formula | decision date − complete application date |
| Baseline | [measure before pilot] |
| Target | ≤ 2 days by Q4 2027 |
| Source | workflow timestamps |
| Frequency | monthly |
| Guardrail | default rate not worse than baseline; audit completeness 100% |

Add one **output** indicator (what you deliver) and one **outcome** indicator (what
changes). Do not confuse them.

### 3.5 Scope

| In scope | Out of scope |
|---|---|
| Co-financing application workflow | Credit policy changes |
| Partner-bank API integration for [N] banks | Bank core-banking replacement |
| Guarantee status tracking and reporting | Legal amendment of guarantee rules |
| Audit trail and access control | National ID system redesign |

Explicit exclusions prevent silent scope creep and make approval easier.

### 3.6 Approach and options

For a technical audience, present at least two options and a recommendation:

| Option | What it means | Pros | Cons | Cost | Time |
|---|---|---|---|---|---|
| A. Manual + spreadsheet | Improve forms only | Fast, cheap | No scale, weak audit | low | 1 month |
| B. Integrate existing platform | Add modules and APIs | Reuses assets | Legacy constraints | medium | 6 months |
| C. Build new service | Cloud-native, API-first | Scalable, auditable | Higher cost, change management | high | 12 months |

Recommend B for a first release, with an architecture that allows C later. State the
decision criteria: volume, integration count, audit requirements, budget, risk.

### 3.7 Deliverables and milestones

| Milestone | Deliverable | Date | Acceptance |
|---|---|---|---|
| M1 Design | Process map, data model, API contract | 2027-01 | Reviewed by operations and security |
| M2 Pilot | 1 bank, 50 applications | 2027-04 | 95% successful submissions; audit log complete |
| M3 Rollout | 3 banks, production | 2027-09 | 500 applications; ≤2 day median |
| M4 Handover | SOP, training, support model | 2027-12 | Operations sign-off |

### 3.8 Resources and budget

Estimate by category, not a single number:

| Category | Assumption | Cost |
|---|---|---|
| Staff | 2 engineers × 9 months | [amount] |
| Software / cloud | [volume] | [amount] |
| Integration | [N] banks × [effort] | [amount] |
| Training / change | [N] users | [amount] |
| Contingency | 10–15% | [amount] |

Include **operating cost** after go-live: hosting, support, licences, staff. Proposals
that ignore opex fail in year two.

### 3.9 Risks and mitigations

| Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|
| Partner banks cannot integrate on time | Medium | High | Start with one pilot bank; publish API spec early | Integration lead |
| Data quality insufficient for eligibility | High | High | Data profiling in discovery; manual fallback | Data owner |
| Legal basis for data sharing unclear | Medium | High | Confirm with legal before build; use consent/agreement | Policy lead |
| Adoption below target | Medium | Medium | Train users; measure weekly; fix friction | Operations |

Also list assumptions (`[ASSUMPTION]`) and dependencies. An assumption is a risk you
have decided to proceed with.

### 3.10 Governance and RACI

| Activity | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Scope and priorities | Product lead | Unit head | MEF, banks | Secretariat |
| Architecture and security | Lead architect | CTO | Security | Project board |
| Data definitions | Data owner | M&E lead | Operations | Secretariat |
| Bank integration | Integration lead | Project manager | Partner banks | Unit head |
| Reporting | M&E officer | Unit head | Secretariat | MEF |

One accountable person per row. "Everyone" is not an owner.

### 3.11 M&E and reporting

State how the proposal feeds the strategy's M&E:

- which indicator, frequency, and source
- who validates the data
- which report it feeds and when (semi-annual, annual)
- what evidence will be available for audit

From the MSME Strategy §4.2 (p. 26): each key action needs a measurable action plan
with estimated budget. Your proposal is that plan for your slice.

### 3.12 Decision requested

End with a precise ask and a date:

> **Decision requested:** approve Option B and a pilot budget of [amount] by
> [date], with [name] as accountable owner. If approved, we will start discovery on
> [date] and return with a detailed design by [date].

Vague asks ("please support") produce vague outcomes.

---

## 4. The 60-second pitch

Use this order; it mirrors how decision-makers listen.

1. **Hook:** "MSMEs wait [X] days for a co-financed loan decision; [Y]% of files are
   returned for missing documents."
2. **Link:** "The national strategy commits to SME co-financing mechanisms — Annex 4.2,
   action 4 — and to measurable action plans."
3. **Proposal:** "We propose a [pilot] that integrates [N] banks, cuts assessment to
   [target] days, and produces audit-ready records."
4. **Proof:** "Success is [KPI] by [date]; the guardrail is no increase in default rate."
5. **Ask:** "We need [budget/decision] by [date] to start [milestone]."

Do not start with the technology. Start with the bottleneck and the commitment.

---

## 5. Five-slide outline

| Slide | Content |
|---|---|
| 1 | Problem, who is affected, evidence |
| 2 | Strategic link: quote + citation + objective/KPI |
| 3 | Proposed approach and scope (in/out) |
| 4 | Timeline, budget, risks |
| 5 | Decision requested and next step |

One message per slide. Appendix holds architecture, data model, and detailed costing.

---

## 6. Quality checklist before sending

- [ ] The problem is stated without mentioning the solution
- [ ] The strategic link has a section number and page
- [ ] One primary objective, one primary KPI, one baseline
- [ ] Scope has explicit exclusions
- [ ] At least two options, with a recommendation
- [ ] Deliverables have acceptance criteria
- [ ] Budget includes opex and contingency
- [ ] Risks have owners and mitigations
- [ ] One accountable owner per activity
- [ ] Reporting obligations and dates are named
- [ ] The decision requested is binary and dated
- [ ] Every number has a source or is labeled `[ASSUMPTION]`

---

## 7. If it is rejected, or not yours

| Situation | Response |
|---|---|
| Not mandated | Switch to **contribute**: offer data, API, standards input, or a pilot component |
| No budget now | Propose a smaller discovery phase, or phase the delivery; ask for a decision date |
| Another unit leads | Request a named role in the governance (working group, technical review) |
| Politically premature | Keep the evidence; publish an internal note; revisit when the trigger appears |
| Scope too large | Split by bank, region, product, or process step; deliver one measurable slice |

A rejected proposal with good evidence is still an asset. A silent wait is not.

---

## 8. Common technical-person mistakes

| Mistake | Why it fails | Fix |
|---|---|---|
| Starting with architecture | Decision-makers cannot see the public value | Start with the bottleneck and the strategic commitment |
| No baseline | No way to prove improvement | Measure before proposing |
| "Build a platform" | Unbounded scope | Define the workflow, users, volume, and exclusions |
| Ignoring operations | System goes live but nobody uses it | Include training, SOP, support, and adoption metrics |
| Ignoring legal/data-sharing | Blocks integration late | Add a legal workstream in discovery |
| Only capex | Dies at budget review | Include run cost and ownership |
| Too many objectives | No accountability | One primary objective; list secondary |
| No evidence plan | Audit finding | Define evidence at task creation |

---

## 9. Minimum viable proposal (if you have one hour)

Fill only these eight lines and send:

```
Problem:        [who + cost + evidence]
Strategic link: [quote, section, page, KA ID]
Objective:      [number, baseline → target, date]
Approach:       [one recommended option + one alternative]
Scope:          [in / out, one line each]
Cost/time:      [rough range + milestone]
Risk:           [top risk + mitigation]
Ask:            [decision + date]
```

That is enough to start a conversation. Do not wait for a perfect package.

Next: [06-templates.md](06-templates.md) for copy-paste forms, then
[07-worked-example.md](07-worked-example.md) for a fully filled SME-CU case.
