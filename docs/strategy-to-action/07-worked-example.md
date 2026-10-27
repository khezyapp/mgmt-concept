# 07 — Worked Example: MSME Co-Financing Platform at SME-CU

A complete run from a real line in the National Strategy to tasks, a proposal, and audit
evidence. Use it as a pattern, not as an official design.

**Scenario:** You are a Senior Development officer at SME-CU (Small and Medium
Enterprise Coordinator Unit), with a software engineering background. The unit has no
assigned project yet. You decide to propose one from the strategy's action matrix.

**Illustrative content:** The policy, standard, procedure, KPIs, architecture, task IDs,
and figures below are examples. Only the strategy quotes, section numbers, pages, and
named responsible entities come from the source. Anything marked `[VERIFY]`,
`[ASSUMPTION]`, or `[DESIGN]` must be confirmed or decided before real use.

---

## Step 0 — Source card

| Field | Value |
|---|---|
| Document | National Strategy on the Development of MSMEs 2026–2030 |
| Part | Part IV, §4.1.4.2 (p. 24); Annex 1, §4.2 (p. 47–48) |
| Key action | `KA-S4.2-4` |
| Exact text | "Promote the participation of the private sector and international development partners in providing credit, deposits or investment through appropriate financing mechanisms, including the establishment of SME Co-Financing Mechanisms." |
| Named entities | MEF, MISTI, NBC, LMs, private sector, DPs |
| Timeline | 2026–2030 |
| Related action | `KA-S4.2-8`: "Strengthen the credit guarantee system, develop financial technology (FinTech), and expand digital lending platforms..." (p. 48) |
| Implementation rule | Each key action needs a specific action plan, measurable results, and estimated budget (§4.2, p. 26) |
| Our status | SME-CU is **not named**; implementation would be under MEF delegation `[ASSUMPTION]` / `[VERIFY]` |

Why this action: SME-CU coordinates MSME development work rather than lending itself, so
the closest fit is an action that depends on cross-ministry and private-sector
coordination — here, access to finance. It has a 2026–2030 window, and it explicitly
invites private-sector participation, which implies integration, data sharing, and a
digital workflow.

---

## Step 1 — Decode the action

| Question | Answer |
|---|---|
| What is broken? | MSMEs lack working and investment capital. Co-financing is fragmented across banks and partners, largely manual, and hard to report. |
| What is the intent? | Pool public and private resources so more MSME loans can be approved, at lower risk, through a defined mechanism. |
| What actions follow? | Define the co-financing mechanism; onboard banks/DPs; standardize application and eligibility; track guarantees and disbursements; report results. |
| What does the text *not* say? | Which system, which data model, which eligibility rules, which bank APIs, who operates it, which KPIs, how much budget. |
| What is therefore yours? | The delivery design: process, data, integration, controls, indicators, and the proposal. |

**Plain English in one sentence:** *Make it easier for MSMEs to get loans by combining
public and private money through a structured, measurable co-financing scheme.*

**Engineering translation:** a workflow + integration + ledger + audit + reporting
problem, not a "scoring AI" problem.

---

## Step 2 — Link upward

```
V-01  MSMEs as a strong foundation and driving force of the economy (§3.1, p. 13)
  └── SO-2  Strengthen production capacity; 50% of demand for 15 products by 2030 (§3.2, p. 13)
        └── S4  Developing Support Infrastructure (§4.1, p. 16)
              └── SA-4.2  Expanding Access to Finance and Credit (§4.1.4.2, p. 24)
                    └── KA-S4.2-4  Establish SME Co-Financing Mechanisms (Annex, p. 47–48)
                          └── INI-S4.2-4-A  Digital co-financing and guarantee workflow
                                └── PRJ-COFIN-01  Partner-bank integration and case management
                                      └── TSK-COFIN-001 ... 012
```

**Link sentence for a proposal:**

> This initiative implements `KA-S4.2-4` under `S4` and contributes primarily to `SO-2`
> (production capacity) by increasing the volume and speed of co-financed lending to
> MSMEs. It is enabled by `KA-S4.2-8` (digital lending platforms).

**Secondary objective:** `SO-3` (value-chain integration), because financed MSMEs can
supply larger firms. **Guardrail:** `SO-1` (formal registration) — only registered
MSMEs are in scope.

---

## Step 3 — Define outcomes and indicators

The source does not publish an official KPI table `[VERIFY with MSME-SC Secretariat]`.
Propose project indicators that can roll up to the national targets, and label them
`proposed`.

| Level | Indicator | Definition | Baseline | Target | Source |
|---|---|---|---|---|---|
| National outcome | `KPI-SO2-01` (official?) | % of domestic demand for 15 strategic products supplied by MSMEs | `[VERIFY]` | 50% by 2030 | National statistics |
| Project outcome | `KPI-PROP-01` | Median days from complete application to credit decision | `[measure in discovery]` | ≤ 2 days by Q4 2027 | Workflow timestamps |
| Project outcome | `KPI-PROP-02` | Number of MSMEs financed through co-financing mechanisms | 0 (new) | 500 by 2028 `[ASSUMPTION]` | Loan ledger |
| Output | `KPI-PROP-03` | Number of partner banks live on the platform | 0 | 3 by 2027 | Integration register |
| Output | `KPI-PROP-04` | % of decisions with complete audit record | `[baseline]` | 100% | Audit query |
| Guardrail | `KPI-PROP-05` | Default rate of co-financed loans vs portfolio | `[baseline]` | Not worse | Bank reports |
| Guardrail | `KPI-PROP-06` | Confirmed data-protection incidents | 0 | 0 | Security log |

**Rule:** one primary outcome indicator for accountability (`KPI-PROP-01`), one volume
indicator (`KPI-PROP-02`), outputs for delivery, guardrails for risk. Do not report ten
indicators weekly; report two monthly and the rest quarterly.

---

## Step 4 — Scope and architecture implications

### Scope

| In scope | Out of scope |
|---|---|
| Co-financing application and case workflow | Changing credit policy or guarantee law |
| Eligibility checks against MSME registration data | Building a national registry |
| Partner-bank API integration (pilot: 1–3 banks) | Replacing bank core systems |
| Guarantee status and disbursement tracking | Direct loan servicing/collection |
| Audit trail, access control, reporting | National ID or payment rails |
| Operator dashboard and SOP | Data science model research |

### Domain view

```
Application → Eligibility → Bank data exchange → Assessment → Decision
   → Guarantee/co-financing record → Disbursement status → Reporting
   → (all steps) Audit log + evidence
```

### Integration map (illustrative)

| System | Purpose | Data | Mode |
|---|---|---|---|
| National MSME registration/portal | Verify formal status and classification | ID, size, sector, status | API / batch |
| Partner banks | Submit application, receive decision, report disbursement | applicant, loan, status | REST API + webhook |
| Guarantee/co-financing ledger | Record exposure and claims | guarantee ID, amount, status | internal |
| Identity/access | Staff authentication and roles | user, role | SSO/OAuth2 |
| Reporting/BI | M&E and management dashboard | aggregated indicators | read replica/API |

### Non-functional requirements (candidates)

| Area | Requirement | Evidence |
|---|---|---|
| Audit | Every decision records actor, time, inputs hash, rule version, outcome, reason codes | Audit query + sample test |
| Security | TLS 1.2+, encryption at rest, OAuth2/JWT, least privilege | Config review, pen test |
| Integrity | Idempotent submissions; no double guarantee | Idempotency test |
| Performance | p95 decision response ≤ 2s excluding bank latency | Load test |
| Availability | 99.5% business hours for pilot | Monitoring report |
| Retention | [10] years for credit/guarantee records `[VERIFY]` | Retention config |
| Interoperability | Versioned REST API with OpenAPI contract | Published spec |

**Design decisions you can make now:** API style, schema, idempotency, logging model,
test strategy. **Decisions to escalate:** eligibility rules, guarantee terms, legal basis
for data sharing, budget, cross-ministry integration.

---

## Step 5 — Build the document stack

The strategy authorises the outcome. You still need the layers below it. These are
sample clauses, not official texts.

### 5.1 Policy (sample)

`POL-SMECU-001 — Data Protection and Credit Decision Audit Policy`

- **P-1 Scope:** all co-financing and guarantee applications recorded in the SME-CU
  coordination platform `[DESIGN]`, including partner-bank channels.
- **P-2 Explainability:** every automated or semi-automated decision MUST record the
  rule set version and reason codes; a decision without a recorded basis is invalid.
- **P-3 Data minimization:** collect only data required for eligibility, assessment,
  guarantee, and reporting.
- **P-4 Security:** data MUST be encrypted in transit and at rest; access MUST follow
  least privilege and segregation of duties.
- **P-5 Audit:** all decision and status changes MUST be logged in an append-only
  record, retained for [10] years `[VERIFY]`.
- **P-6 Exceptions:** any manual override MUST be approved by [role] and recorded with
  a reason.
- **P-7 Review:** this policy is reviewed annually or after any material change to the
  co-financing mechanism.

### 5.2 Standard (sample)

`STD-SMECU-004 — API and Audit Log Standard`

1. Authentication: OAuth2 client credentials or JWT; no shared static keys in production.
2. Transport: TLS 1.2+; mTLS for bank-to-platform channels where available.
3. Audit record fields (minimum): `decision_id`, `application_id`, `actor_id`,
   `timestamp_utc` (ISO 8601), `rule_version`, `input_hash`, `decision`,
   `reason_codes[]`, `ip_address`, `channel`.
4. Storage: append-only/WORM; no update or delete by application users.
5. API: versioned path (`/api/v1/...`), OpenAPI contract, idempotency key on submit,
   standardized error codes.
6. Performance: p95 ≤ 2s for synchronous decision endpoints, excluding bank latency.
7. Retention: [10] years `[VERIFY]`; exportable for audit.

### 5.3 Procedure (sample steps)

`SOP-SMECU-012 — Co-Financing Application and Decision`

1. Bank submits application via API or portal; system validates mandatory fields and
   idempotency key.
2. System verifies MSME registration status and classification against the registry.
3. System requests/accepts bank assessment data; validates schema and completeness.
4. System computes eligibility and co-financing/guarantee parameters using the approved
   rule set.
5. Authorized officer reviews exceptions; approves, rejects, or requests information.
6. System records the decision and reason codes in the audit log.
7. System notifies the bank; status becomes `approved`, `rejected`, or `pending`.
8. Bank reports disbursement; system reconciles and updates exposure.
9. Operations run a daily exception report; unresolved items escalate to [role].
10. Monthly data close feeds the M&E report.

### 5.4 Guideline (sample)

`GL-SMECU-003 — Integration and Reliability Guidelines`

- Prefer asynchronous events with an outbox pattern for audit and notifications.
- Use idempotency and retries with backoff; design for duplicate bank callbacks.
- Keep bank-specific mapping in adapters; do not leak bank schemas into the domain.
- Publish a sandbox and contract tests before bank onboarding.
- Use feature flags for rule changes; keep old rule versions for audit.
- Recommended, not mandatory: deviate with a recorded reason.

### 5.5 Action plan (tasks)

| Task | Description | Owner | Due | Deliverable / evidence |
|---|---|---|---|---|
| `TSK-COFIN-001` | Map current co-financing process, actors, data, pain points | Business analyst + you | M1 | Process map, data dictionary, baseline time study |
| `TSK-COFIN-002` | Confirm mandate, legal basis for data sharing, and official KPIs | Unit head + legal | M1 | Decision note, `[VERIFY]` closed |
| `TSK-COFIN-003` | Define eligibility rules and co-financing parameters with operations | Product lead | M1 | Rule specification v1, approved |
| `TSK-COFIN-004` | Design data model and audit schema | You | M2 | ERD, schema, audit field mapping to `STD-SMECU-004` |
| `TSK-COFIN-005` | Publish OpenAPI contract and sandbox | You | M2 | Spec + sandbox + contract tests |
| `TSK-COFIN-006` | Build application intake and eligibility service | Dev team | M2 | Service + tests + `AT-ELIG-01` |
| `TSK-COFIN-007` | Build audit logging and append-only storage | Dev team | M2 | Audit module + retention config + `AT-AUD-01` |
| `TSK-COFIN-008` | Integrate pilot bank (submit, status, callback) | Integration lead | M3 | Integration test report + reconciliation |
| `TSK-COFIN-009` | Build operator dashboard and exception queue | Dev team | M3 | Dashboard + SOP link |
| `TSK-COFIN-010` | Build monthly M&E report and data validation | Data owner | M3 | Report + reconciliation to ledger |
| `TSK-COFIN-011` | Security test and audit readiness review | Security + internal audit | M4 | Pen test, audit test results, CAPA log |
| `TSK-COFIN-012` | Train users, publish SOP, hand over to operations | You + operations | M4 | Training record, SOP sign-off, support model |

Notice: 4 of 12 tasks are **not coding**. That is normal for a governance-linked
project. Skipping them is how systems go live and fail audit.

---

## Step 6 — Proposal one-pager (filled excerpt)

```
TITLE:   Faster co-financed lending for MSMEs through a digital case workflow
ID:      INI-S4.2-4-A / PRJ-COFIN-01

PROBLEM
MSME co-financing applications are handled manually across partner banks. Processing
takes [X] days, files are returned for missing documents, and reporting is assembled
by hand. This limits volume and makes audit evidence inconsistent.

STRATEGIC LINK
National Strategy on the Development of MSMEs 2026–2030, Annex 1, §4.2, action 4,
p. 47–48: "…including the establishment of SME Co-Financing Mechanisms."
Key action KA-S4.2-4 → Strategy S4 → Objective SO-2 (production capacity).

OBJECTIVE
By Q4 2027, reduce median decision time from [baseline] to ≤ 2 days for 80% of
applications, and finance 500 MSMEs, with no increase in default rate.

SCOPE
In: application workflow, eligibility, 3 bank integrations, guarantee tracking,
audit trail, reporting.
Out: credit policy, guarantee law, bank core systems, loan collection.

APPROACH
A: Improve forms only — cheap, no scale.
B: Integrate existing platform + API layer (recommended) — 6 months, medium cost.
C: New cloud-native service — 12 months, high cost.
Recommend B first, architected for C.

MILESTONES
M1 [date] process/data design, mandate confirmed
M2 [date] model, API contract, intake + audit services
M3 [date] pilot bank live, dashboard, monthly report
M4 [date] 3 banks, security/audit review, handover

RESOURCES
2 engineers × 9 months; 1 integration lead; cloud and sandbox; training; 15%
contingency. Opex: hosting + support [amount]/year.

RISKS
Bank integration delay → start with one pilot, publish spec early.
Data quality → profile in discovery, manual fallback.
Legal data sharing → confirm before build.

GOVERNANCE
Accountable: [unit head]. Responsible: [you]. Consulted: MEF, NBC, banks.
Informed: MSME-SC Secretariat.

M&E
KPI-PROP-01/02 monthly; audit completeness monthly; report semi-annually to Secretariat.

DECISION REQUESTED
Approve Option B and pilot budget [amount] by [date]; start discovery [date].
```

---

## Step 7 — What a task must contain

Example: `TSK-COFIN-007` (audit logging).

```
WHY:        Policy P-5 and Standard STD-SMECU-004 require an append-only decision record.
ACCEPTANCE:
  - [ ] Every decision writes all 10 mandatory fields
  - [ ] Updates/deletes by app users are rejected
  - [ ] rule_version is stored with each decision
  - [ ] Query by application_id returns the full history
  - [ ] Retention/export job tested
NFR:        no measurable latency increase; log write failure blocks the decision
EVIDENCE:   schema, test report AT-AUD-01, sample query output, retention config
OWNER:      [name]   REVIEWER: [name]   DUE: [date]
```

**Definition of done:** code + test + evidence + documentation + operational owner.
A task without evidence is not done; it is merely deployed.

---

## Step 8 — Auditor lens

Trace each requirement to a control, a test, and evidence.

```
Strategy  → authorises the mechanism
Policy    → sets mandatory controls (P-2, P-4, P-5)
Standard  → defines exact fields and thresholds
Procedure → sequences the work and records
Task      → implements and produces evidence
Execution → audit queries the real data
```

| Test | Requirement source | Procedure | Expected | Evidence |
|---|---|---|---|---|
| `AT-AUD-01` | Standard §3, fields | Sample 30 decisions; query audit table | 100% have all mandatory fields | Query output + sample list |
| `AT-ACC-01` | Policy P-4 | Attempt access with wrong role; attempt unauthenticated API call | Denied and logged | Access log, test report |
| `AT-IDM-01` | Standard §5 | Submit same application twice with same idempotency key | One record, no double guarantee | API responses + DB check |
| `AT-REC-01` | Procedure step 8 / reporting | Reconcile disbursement report to ledger | 100% match or explained differences | Reconciliation sheet |
| `AT-RET-01` | Standard §7 | Verify retention and export | Config matches policy; export works | Config screenshot + export sample |

**Sample finding:**

> **Condition:** 12% of sampled decisions lack `rule_version`.
> **Criteria:** Standard STD-SMECU-004 §3.
> **Cause:** the rule engine call path bypasses the audit decorator for manual overrides.
> **Effect:** decisions cannot be reconstructed; audit opinion risk.
> **Action:** fix override path, backfill where possible, add test `AT-AUD-02`, retest in
> 30 days. Owner: [name].

This is how a technical defect becomes a governance finding — and how you prevent it by
designing evidence into the task.

---

## Step 9 — Reporting and calendar

| Report | Content | Due | Owner |
|---|---|---|---|
| Monthly internal | Applications, decisions, median time, exceptions, audit completeness | 10th of next month | Operations + data owner |
| Semi-annual M&E input | Indicator values, progress, challenges, evidence | Within 1 month after half-year | Unit head |
| Annual M&E input | Full-year results, variance explanation | Within 2 months after fiscal year | Unit head |
| Mid-term review input | Contribution to SO-2/SO-3, lessons | By Q2 2028 | Unit head |
| End-term input | Final results and sustainability | By Q2 2030 | Unit head |

Source for deadlines: §6.2.1.4, p. 33–34. Work backwards: data cut-off → validation →
review → sign-off → submission.

---

## Step 10 — Decide vs escalate

| You decide | You consult | You escalate |
|---|---|---|
| API style, schema, idempotency | Eligibility rules with operations | Mandate/delegation dispute |
| Logging and test strategy | Data-sharing terms with legal | Budget approval |
| Retry/error handling | Indicator definitions with M&E | Cross-ministry integration |
| Sprint sequencing | Bank onboarding priority | Policy exception or legal change |
| Tech stack within approved standards | Retention period | Go-live with unresolved high audit risk |

**Rule:** decide everything that is reversible and within your authority. Escalate
everything that creates a legal, financial, or inter-institutional commitment.

---

## Step 11 — Lessons you can reuse

1. **A named ministry is not the implementing team.** Confirm delegation before you
   claim ownership.
2. **The strategy gives you the "why" and the mandate; it does not give you the spec.**
   The spec is your proposal.
3. **The action matrix is the fastest entry point.** Read it before the narrative.
4. **Four of twelve tasks are governance work.** Budget for it.
5. **Design evidence at task creation.** Auditors do not accept "it works on my machine".
6. **One primary indicator.** Secondary contributions are context, not accountability.
7. **Pilot one bank, one product, one region.** Scale after the evidence exists.
8. **Link every task upward.** If the link is weak, the task is probably optional.

---

### Reuse checklist

- [ ] Copy the source card and replace the citation
- [ ] Decode the action in five questions
- [ ] Draw the chain to vision/objective
- [ ] Propose 1 outcome + 1 volume + 2 output + 2 guardrail indicators
- [ ] Define scope in/out
- [ ] Derive policy, standard, procedure, guideline needs
- [ ] Write 8–12 tasks, half of them non-coding where relevant
- [ ] Fill the one-pager
- [ ] Define audit tests and evidence
- [ ] Put reporting dates in the calendar

Back to the [set hub](index.md) · Terms: [08-glossary.md](08-glossary.md)
