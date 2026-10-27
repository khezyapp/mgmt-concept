# 02 — Decoder: How to Read Any High-Level Document

Use this when you open a strategy, policy, or national plan and think:
*"I understand the words, but I do not know what this means for my work."*

The problem is usually not vocabulary. It is **level of abstraction**. A strategy
document makes choices; it does not make requirements. You are the translation layer.

---

## 1. Why strategy documents feel empty

| Level | What lives here | Example | What you can do with it |
|---|---|---|---|
| Intent | A desired future | "MSMEs become a strong foundation of the economy" | Choose direction; nothing to build yet |
| Choice | A priority and a bottleneck | "Strategy 1: improve the business environment" | Decide where budget and attention go |
| Commitment | A named action, actor, timeframe | Annex 1: digitalize public service delivery, MEF/MISTI, 2026–2030 | Ask who owns it; plan around it |
| Requirement | A testable obligation | "Single Portal must classify MSMEs at registration" | Design, build, test |
| Task | One assignable unit | "Build classification API endpoint" | Estimate and deliver |
| Evidence | Proof | Test report, dashboard, audit log | Verify and report |

A strategy stops at level 2–3. An engineering spec starts at level 4. **The gap between
3 and 4 is your job.** It is not a flaw in the document; it is the normal division of
labour.

> Rule: do not ask a strategy for requirements. Ask it for priorities, constraints, and
> permission — then write the requirements yourself.

---

## 2. Anatomy of a strategic framework

A usable framework has four parts. Check each one; a missing part is a risk you must
flag or fill.

| Part | Question it answers | Where in the MSME Strategy | What to extract |
|---|---|---|---|
| **North star** | Where are we going and for whom? | §3.1 Vision, §3.2 Goal, p. 13 | One sentence; target group; time horizon |
| **Measurable bounds** | How will we know? | §3.2 objectives, p. 13 | Numbers, dates, units, baselines |
| **Pillars of focus** | Where will resources go? | §4.1, four strategies, p. 16 | The chosen paths; what is excluded |
| **Scope & guardrails** | Who is in, who is out, what rules apply? | §3.3, p. 13–15; §4.2, p. 26 | Eligibility, boundaries, implementation rules |

If a framework has no numbers, it is a vision statement, not a strategy. If it has no
scope, it cannot be implemented. If it has no owner, it cannot be accountable.

---

## 3. The four-pass reading protocol (about 50 minutes)

Do not read front to back. Read for decisions.

### Pass 1 — Boundaries (10 min)

Read: vision, scope, objective statements, and any "this strategy does not cover" text.

Ask:
- Who is the target group? (MSMEs, but which definition?)
- What is the time horizon? (2026–2030)
- What is explicitly excluded or delegated to another strategy?
- Which other policies does this document depend on?

In the MSME Strategy: scope is **formally registered** MSMEs; informal businesses are
handled by the Informal Economy Strategy 2023–2028; start-ups by the Startup Strategy
2026–2030 (p. 14–15). This is a boundary, and it changes what your system must support.

Output: 3–5 bullets on scope.

### Pass 2 — Numbers (10 min)

Highlight every number, date, percentage, and unit.

Ask:
- What is the baseline? (Often missing — write `[VERIFY baseline]`.)
- What exactly is counted? (Registered MSMEs? Certified? Unique companies?)
- Is the target national, sectoral, or unit-level?
- By when, and measured how often?

In the MSME Strategy, objective 2 commits to: at least **50% of domestic demand for 15
strategic products** supplied by domestic MSMEs, and **50 product categories** exported
annually, by 2030 (p. 13). Those are outcome targets, not project targets. Your project
must contribute a proxy indicator that rolls up to them.

Output: a number table with `value / unit / date / baseline / source`.

### Pass 3 — Verbs, actors, and time (15 min)

Read the action matrix (Annex 1) before the narrative. For each relevant row, record:

| Field | Why it matters |
|---|---|
| Action text | The commitment you can cite |
| Responsible entities | Who is allowed to lead; whether your unit is named |
| Timeline | 2026–2027 vs 2026–2030 changes urgency |
| Section number | The traceable link back to the narrative |

In the MSME Strategy, Annex 1 is organised as **Strategy → sub-area → numbered key
action**; for example `4.2. Expanding Access to Finance and Credit` (p. 47). Use the
number, not the prose, as your citation anchor.

Output: a shortlist of rows where you or your unit are named, or should be.

### Pass 4 — Gaps and decisions (15 min)

Ask:
- What did the document leave undefined? (system, data, eligibility, process)
- What conflicts with existing policy or practice?
- What depends on another ministry or partner?
- What would an auditor ask for that does not exist yet?

Mark each gap as `[VERIFY]` (ask), `[ASSUMPTION]` (proceed with a default), or
`[DESIGN]` (your decision to make and document).

Output: a gap list with owners and next actions. This becomes your proposal pipeline.

---

## 4. De-jargonize a heading in 60 seconds

Example: **"Strategy 1: Improving the Business Environment and Regulatory Framework"**
(p. 16–18).

| Step | Question | Answer |
|---|---|---|
| 1 | What is broken? | Registration, permits, and compliance are slow, opaque, and costly for small firms. |
| 2 | What is the intent? | Make rules and public services simpler, faster, cheaper, and more predictable. |
| 3 | What actions follow? | Single portal, fewer licences, interoperable registries, digital public services, trained officials. |

Now it is concrete. The next question is not "what does this mean?" but **"which of
these actions names my unit, and what can I build or propose?"**

For an engineer, the same heading becomes:
- domain: business registration and regulatory workflow
- integrations: ministry registries, tax, licensing
- qualities: interoperability, data security, auditability, low-friction UX
- constraint: every new rule must reduce, not add, administrative burden

---

## 5. From prose to requirement (the translation formula)

Use this five-part sentence for every obligation you extract:

> **Actor** MUST/SHOULD **do X** for **Y** by **Z**, evidenced by **E**.

| Source sentence (paraphrase) | Requirement candidate |
|---|---|
| "Develop and implement a business registration and classification system for MSMEs through a Single Portal... at the time of registration." (§4.1.1.2, p. 18) | **MUST:** The portal SHALL classify an enterprise at registration using the official MSME criteria. **Evidence:** classification result stored with timestamp and rule version. |
| "Digitalize public service delivery systems to ensure efficiency, transparency, interoperability, data security..." (§4.1.1.2, p. 18) | **MUST:** Expose machine-readable APIs to named registries; **MUST:** encrypt data in transit and at rest; **SHOULD:** publish service processing time. **Evidence:** integration tests, security scan, SLA report. |
| "Study and establish a reclassification mechanism... every three years." (§4.1.1.2, p. 18) | **MUST:** Support scheduled reclassification every 3 years with an auditable decision record. **Evidence:** scheduler config, run log, exception report. |
| "Strengthen the credit guarantee system, develop FinTech, and expand digital lending platforms..." (Annex 1, §4.2, action 8, p. 48) | **SHOULD:** Provide API-based guarantee application and status tracking; **MUST:** preserve an audit trail for every decision. **Evidence:** API contract, audit log query. |

Note the difference: the document says *what outcome it wants*; you write *what the
system must do* and *how compliance is proven*. That is the value you add.

**Quality test for a requirement:**
- Can it be true or false? If not, it is still a goal.
- Can someone other than you test it? If not, it is still an opinion.
- Is the evidence named? If not, it will not survive an audit.

---

## 6. Managing ambiguity without waiting

You will rarely get complete information. Do not stall; make the ambiguity explicit.

| Tag | Use when | Action |
|---|---|---|
| `[FACT]` | Directly stated or cited | Quote the section/page |
| `[INFERENCE]` | Follows logically from facts | State the reasoning in one line |
| `[ASSUMPTION]` | Needed to proceed, not confirmed | State it, set a review date, design for change |
| `[VERIFY]` | Materially affects scope/cost | Ask one precise question; propose a default meanwhile |
| `[DESIGN]` | Left to the implementer | Decide, document, and add to the decision log |

**One-question rule:** when you must ask, ask the smallest question that unblocks the
next decision, and offer your recommended default. Example:

> "Annex 4.2 action 4 names MEF, not SME-CU. I assume SME-CU implements the platform
> under MEF delegation. If correct, I will proceed with the concept note; if not, I will
> switch to contribute mode. Please confirm by [date]."

This is how you move without waiting for permission to think.

---

## 7. Your one-page document card

After every reading, produce this (template in [06-templates.md](06-templates.md)):

```
Document:        [title, issuer, date, version]
Type:            strategy / policy / standard / procedure / guideline / plan
Status:          draft / approved / effective date
Owner:           [unit, named official]
Scope:           [who/what is in and out]
Top 3 points:    1. ...  2. ...  3. ...
Obligations:     [MUST/MUST NOT list]
Numbers:         [targets, baselines, dates]
Affected:        [our policies, systems, procedures, backlog]
Gaps:            [VERIFY / ASSUMPTION / DESIGN]
Response:        ignore / watch / comply / contribute / propose
Next action:     [one action, owner, date]
```

If you cannot fill "Affected" and "Next action", you have read the document but not
used it.

---

## 8. Common traps

| Trap | Better move |
|---|---|
| Reading every page chronologically | Read vision, objectives, then the action matrix; use the narrative for context only |
| Treating "promote" as a deliverable | Ask what behaviour changes and who is accountable for adoption |
| Copying strategy language into a proposal | Translate to outcomes, scope, deliverables, indicators, budget |
| Waiting for a perfect KPI definition | Propose a proxy indicator, label it, and refine with the M&E owner |
| Assuming the named ministry is the implementing team | Check delegation; your unit may implement without being named |
| Reading one document in isolation | Read the stack: strategy → policy → standard → procedure → plan |
| Confusing an external standard with an internal one | ISO 9001 is an external standard; your internal "standard" document is how you apply it (see 08) |

---

Next: [03-traceability.md](03-traceability.md) to link what you extracted to IDs,
objectives, and tasks.
