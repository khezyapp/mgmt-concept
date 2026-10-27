# 03 — Traceability: Linking Action to Strategy

Purpose: make every task defensible in one sentence, and make every high-level
objective credible through concrete work.

Two directions:

- **Top-down (decode):** objective → strategy → key action → initiative → task.
- **Bottom-up (justify):** task → key action → objective → vision, with a KPI and evidence.

If either direction breaks, you have either an orphan task (busywork) or an orphan
objective (aspiration).

---

## 1. The chain and its IDs

```
V-01  Vision
  └── SO-1..3  Strategic objectives (with targets)
        └── S1..S4  Strategy pillars
              └── KA-S4.2-4  Key action (Annex row)
                    ├── KPI-...  Measure of contribution
                    └── INI-...  Initiative / programme
                          └── PRJ-...  Project
                                └── TSK-...  Task
                                      └── EVD-...  Evidence
```

| Prefix | Object | Example | Source |
|---|---|---|---|
| `V-` | Vision | `V-01` | Strategy §3.1 |
| `SO-` | Strategic objective | `SO-2` | Strategy §3.2 |
| `S` | Strategy pillar | `S4` | Strategy §4.1 |
| `SA-` | Sub-area | `SA-4.2` | Strategy §4.1.4.2 |
| `KA-` | Key action (Annex row) | `KA-S4.2-4` | Annex 1, §4.2, row 4 |
| `KPI-` | Indicator | `KPI-SO2-01` | M&E framework or proposed |
| `INI-` | Initiative / programme | `INI-S4.2-4-A` | Your plan |
| `PRJ-` | Project | `PRJ-COFIN-01` | Your plan |
| `TSK-` | Task | `TSK-COFIN-012` | Backlog |
| `EVD-` | Evidence | `EVD-AUDIT-004` | Repository / report |
| `POL-`, `STD-`, `SOP-`, `GL-`, `AP-` | Document IDs | `STD-IT-004` | Document register |

**Citation format** (always include the source anchor):

```
National Strategy on the Development of MSMEs 2026–2030,
Annex 1, §4.2, action 4, p. 47–48
→ KA-S4.2-4
```

For narrative sections, cite section + page: `§4.1.4.2, p. 24`. For the vision:
`§3.1, p. 13`.

---

## 2. The traceability register (your working data)

Keep this in a spreadsheet or issue tracker. One row per **task**, with the higher
levels repeated (denormalised) so you can filter and report.

| Column | Example | Rule |
|---|---|---|
| Task ID | `TSK-COFIN-012` | Unique, never reused |
| Task | Build guarantee application API | Verb + object |
| Project | `PRJ-COFIN-01` | Parent |
| Initiative | `INI-S4.2-4-A` | Parent |
| Key action | `KA-S4.2-4` | Must exist in Annex |
| Strategy | `S4` | One primary; list secondary if needed |
| Objective | `SO-3` | One primary |
| KPI | `KPI-SO3-02` | At least one |
| Baseline → target | `0 → 500 MSMEs onboarded by 2028` | Numbers, not adjectives |
| Owner | Role, not just name | Accountable person |
| Support | MEF, NBC, partner banks | Dependencies |
| Start / due | 2026-11-01 / 2027-03-31 | Dates |
| Budget | `USD [amount]` | Source of funds |
| Evidence | `EVD-API-012` | Where proof lives |
| Status | planned / active / blocked / done | Weekly update |
| Risk | `[risk ID]` | Link to risk register |
| Last verified | 2026-10-27 | Against source page |

**Minimum viable register:** Task, Key action, Objective, KPI, Owner, Due, Evidence.
Five columns are enough to start; add the rest when you report upward.

---

## 3. Two-way sentence patterns

### Top-down: explain why the work exists

> `TSK-COFIN-012` implements `KA-S4.2-4` (establish SME Co-Financing Mechanisms),
> which operationalises `S4` (Developing Support Infrastructure) and contributes to
> `SO-3` (integration into value chains) and `SO-2` (production capacity), under
> `V-01`.

Shorter version for a slide:

> **Task → Action → Objective:** guarantee API → Annex 4.2.4 → SO-3.

### Bottom-up: justify a proposal

> The Strategy identifies access to finance as a constraint (§4.1.4.2, p. 24) and
> commits to SME co-financing mechanisms (Annex 1, §4.2, action 4, p. 47). Our current
> manual process cannot report the required indicators. I propose `INI-S4.2-4-A` to
> deliver [outcome] by [date], measured by [KPI].

### The one-sentence test

If you cannot complete this sentence, do not start the task:

> "We are doing **X** because **key action Y** requires it, which moves **indicator Z**,
> and we will prove it with **evidence E**."

---

## 4. Coverage checks (run monthly)

| Check | Question | If it fails |
|---|---|---|
| Orphan task | Does every task cite a key action? | Delete, merge, or find the link |
| Orphan objective | Does every objective have at least one initiative and KPI? | Flag as unimplemented; propose work |
| KPI-less action | Does every key action have a contribution indicator? | Propose a proxy indicator |
| Owner-less action | Does every initiative have one accountable owner? | Escalate; do not co-own |
| Evidence-less task | Will completion be provable? | Add acceptance criteria and evidence |
| Stale link | Has the source page/version changed? | Re-verify against the current source |

**Target shape:** no task without an action; no action in your portfolio without an
owner, a date, and an indicator.

---

## 5. Map of the actual MSME Strategy (2026–2030)

Use this to find the right page fast. Page numbers refer to the source document.

### Document parts

| Part | Content | Page |
|---|---|---|
| I | Introduction, economy overview, conceptual framework | 1 |
| II | Current MSME definition, state, support, challenges | 5 |
| III | **Strategic framework**: vision, goal, objectives, scope | 13 |
| IV | **Four strategies** and key action plans | 16 |
| V | Risk management | 27 |
| VI | Institutional arrangements and M&E | 28 |
| Annex 1 | **Key Action Plan Matrix** (actions, responsible entities, timeline) | 37–51 |

### Strategic framework anchors

| ID | Element | Page |
|---|---|---|
| `V-01` | Vision: MSMEs as a strong foundation and driving force | 13 |
| `SO-1` | Strong foundation; measured by growth in formally registered MSMEs | 13 |
| `SO-2` | Production capacity; 50% of demand for 15 strategic products; 50 export categories by 2030 | 13 |
| `SO-3` | Value-chain integration; 50 MSMEs supplying FDI; 25% local sourcing by 2030 | 13 |
| — | Scope: formally registered MSMEs; informal/start-up strategies are separate | 13–15 |
| — | Key action plans: each action needs a measurable plan and estimated budget | 26 |
| — | M&E: semi-annual and annual reports; mid-term 2028; end-term 2030 | 31–35 |

### Four strategies and twelve sub-areas

| Strategy | Sub-area (narrative §) | Page | Annex § / page |
|---|---|---|---|
| **S1** Business environment & regulatory framework | 1.1 Improving regulatory framework | 17 | 1.1 / 37 |
| | 1.2 Public service delivery system | 18 | 1.2 / 38 |
| | 1.3 Public sector capacity & PPP | 18 | 1.3 / 39 |
| **S2** Production capacity, services, technology & innovation | 2.1 Entrepreneurship, technology, innovation | 19 | 2.1 / 40 |
| | 2.2 Integration into global value chains | 20 | 2.2 / 41 |
| | 2.3 Green production, services, circular economy | 20 | 2.3 / 42 |
| **S3** Competitiveness in domestic & international markets | 3.1 Productivity | 21 | 3.1 / 43 |
| | 3.2 Quality and standards | 22 | 3.2 / 44 |
| | 3.3 Trade agreements | 23 | 3.3 / 46 |
| **S4** Support infrastructure | 4.1 Physical infrastructure | 24 | 4.1 / 47 |
| | 4.2 Access to finance and credit | 24 | 4.2 / 47 |
| | 4.3 Soft infrastructure | 25 | 4.3 / 50 |

### Where each document type lives in this strategy

| Type | In the MSME Strategy | Note |
|---|---|---|
| Vision / goal / objectives | Part III, p. 13 | Broad and measurable, but no project detail |
| Strategy pillars | §4.1, p. 16–26 | Chosen paths, not plans |
| Key actions | Annex 1, p. 37–51 | Numbered, with responsible entities and timeline |
| Implementation rule | §4.2, p. 26 | Each key action needs a measurable action plan + budget |
| Institutional roles | §6.1, p. 28–31 | MSME-SC, Secretariat, ministries, private sector |
| M&E | §6.2, p. 31–35 | Reporting methods and deadlines |
| Risks | Part V, p. 27 | Internal, external, control-system risks |
| **Official KPI table** | Not published in the source | `[VERIFY]` with MSME-SC Secretariat; use proposed proxies meanwhile |

---

## 6. Worked row: Annex 4.2, action 4

**Source:** Annex 1, §4.2 "Expanding Access to Finance and Credit", action 4,
p. 47–48.

> "Promote the participation of the private sector and international development
> partners in providing credit, deposits or investment through appropriate financing
> mechanisms, including the establishment of SME Co-Financing Mechanisms."
>
> Responsible: MEF, MISTI, NBC, LMs, private sector, DPs. Timeline: 2026–2030.

| Field | Value |
|---|---|
| Key action | `KA-S4.2-4` |
| Strategy | `S4` Developing Support Infrastructure |
| Objective | `SO-2` production capacity (primary); `SO-3` value chains (secondary) |
| Bottleneck | MSMEs lack working and investment capital; financing is fragmented and manual |
| Contribution KPI | `KPI-PROP-01`: number of MSMEs financed through co-financing mechanisms (proposed) |
| Initiative | `INI-S4.2-4-A`: digital SME co-financing platform |
| Project | `PRJ-COFIN-01`: partner-bank integration and guarantee workflow |
| First task | `TSK-COFIN-001`: map current co-financing process and data |
| Evidence | Process map, signed integration spec, go-live report, audit log extract |

Note: MEF is named, not SME-CU. Your authority comes from **delegation under MEF**.
State that explicitly in any proposal; do not imply the Annex names your unit.
See [05-proposal-playbook.md](05-proposal-playbook.md) for the ownership test.

---

## 7. When an action serves several objectives

Pick **one primary objective** for accountability and reporting, then list secondary
contributions. Otherwise every report becomes an argument.

| Type | Use |
|---|---|
| Primary | The objective whose KPI your task most directly moves |
| Secondary | Other objectives that benefit; mention, do not measure |
| Guardrail | An objective that must not be harmed (e.g., data protection) |

Example: a co-financing platform has `SO-2` as primary (production capacity),
`SO-3` as secondary (value chains), and `SO-1` as a guardrail (formal registration
data must be valid).

---

## 8. What "good" looks like

- A one-page portfolio view: objectives → initiatives → tasks → status.
- Every task has a source citation and an evidence link.
- Every report sentence can be traced to a register row.
- When the strategy changes, you can list the affected tasks in minutes.
- When a new document appears, you can place it on this map before reading every page
  (see [04-new-document-sop.md](04-new-document-sop.md)).

Next: [04-new-document-sop.md](04-new-document-sop.md).
