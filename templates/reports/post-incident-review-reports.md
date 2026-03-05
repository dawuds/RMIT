# Post-Incident Review Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Regulatory Reference:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document — Clause 11.1
>
> **Document Purpose:** This template governs the conduct and documentation of post-incident reviews for technology-related incidents at [Organization Name], ensuring compliance with BNM RMiT obligations and supporting continuous improvement of the institution's operational resilience posture.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Incident Overview](#2-incident-overview)
3. [Assessment Scope and Criteria](#3-assessment-scope-and-criteria)
4. [Methodology](#4-methodology)
5. [Incident Classification Matrix](#5-incident-classification-matrix)
6. [Findings and Ratings](#6-findings-and-ratings)
7. [Escalation Timelines](#7-escalation-timelines)
8. [Communication Log](#8-communication-log)
9. [Post-Incident Review Process](#9-post-incident-review-process)
10. [Corrective Action Plan](#10-corrective-action-plan)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Post-Incident Review (PIR) Report documents the structured analysis of a technology-related incident at [Organization Name] in accordance with BNM RMiT Clause 11.1. The report captures root cause analysis, contributing factors, timeline of events, escalation actions, communications, and lessons learned. It serves as the primary artefact for demonstrating regulatory compliance and governance accountability following a significant technology incident.

All PIR Reports are subject to quarterly trend review by the Technology Risk function and must be retained as evidence for BNM examination purposes.

### 1.2 Scope

*Define the boundaries of this review — which systems, services, business units, and timeframes are covered. Exclude any systems or processes explicitly out of scope and document the rationale.*

**In Scope:**

- Systems affected: [List of impacted systems, applications, platforms]
- Business units affected: [List of affected business units or customer segments]
- Review period: [Incident start date/time] to [Incident resolution date/time]
- Geographic scope: [Branch network, data centres, cloud regions affected]

**Out of Scope:**

- [System / Process / Unit] — *Rationale: [Explain why excluded]*
- [System / Process / Unit] — *Rationale: [Explain why excluded]*

### 1.3 Regulatory Context

This document is prepared pursuant to the following BNM policy requirements:

| Regulation | Clause | Requirement Summary |
|---|---|---|
| BNM RMiT | 11.1 | Financial institutions must conduct post-incident reviews for significant technology incidents, document lessons learned, and implement corrective actions |
| BNM RMiT | 11.1(a) | Review must identify root causes and contributing factors |
| BNM RMiT | 11.1(b) | Corrective and preventive actions must be tracked to closure |
| BNM RMiT | 11.1(c) | Findings and action plans must be reported to Senior Management and the Board Risk Committee where applicable |

---

## 2. Incident Overview

*Provide a factual, executive-level summary of the incident. This section should be written so that a senior leader or regulator can understand the incident without reading the full report.*

### 2.1 Incident Summary

| Field | Details |
|---|---|
| **Incident Reference Number** | [INC-YYYY-NNNN] |
| **Incident Title** | [Brief descriptive title, e.g., "Core Banking System Outage — Payment Processing Failure"] |
| **Incident Type** | [System Outage / Cybersecurity Event / Data Breach / Service Degradation / Third-Party Failure / Other] |
| **Severity Level** | [Critical / High / Medium / Low] |
| **Detection Date & Time** | [DD/MM/YYYY HH:MM MYT] |
| **Containment Date & Time** | [DD/MM/YYYY HH:MM MYT] |
| **Resolution Date & Time** | [DD/MM/YYYY HH:MM MYT] |
| **Total Duration** | [HH hours MM minutes] |
| **Systems Impacted** | [List primary systems] |
| **Business Services Affected** | [e.g., Internet banking, FPX, ATM network] |
| **Customer Impact** | [Number of customers affected / estimated transactions failed] |
| **Financial Impact (Estimated)** | [MYR amount or "Under assessment"] |
| **BNM Notification Required** | [Yes / No] |
| **BNM Notification Submitted** | [Yes — Reference: [REF] / No / N/A] |
| **Report Prepared By** | [Name, Title] |
| **Report Date** | [DD/MM/YYYY] |

### 2.2 Narrative Summary

[Provide a factual 3–5 paragraph narrative of the incident. Cover: what happened, when it was detected, initial response actions taken, how the incident was contained, and how it was resolved. Write in plain language suitable for Board-level readers.]

### 2.3 Impact Assessment Summary

| Impact Dimension | Description | Severity |
|---|---|---|
| Customer / Operational | [Description] | [Critical / High / Medium / Low] |
| Financial | [Description] | [Critical / High / Medium / Low] |
| Reputational | [Description] | [Critical / High / Medium / Low] |
| Regulatory / Legal | [Description] | [Critical / High / Medium / Low] |
| Data Integrity | [Description] | [Critical / High / Medium / Low] |

---

## 3. Assessment Scope and Criteria

*Define the specific boundaries, evaluation criteria, and standards used to assess this incident. Criteria should align with BNM RMiT requirements and the institution's internal risk appetite.*

### 3.1 Review Objectives

The post-incident review was conducted with the following objectives:

1. Identify the **root cause(s)** and all **contributing factors** of the incident.
2. Evaluate the **effectiveness of detection, response, and recovery** actions taken.
3. Assess **compliance with internal policies**, incident response procedures, and BNM RMiT obligations.
4. Identify **gaps** in controls, processes, or capabilities that enabled or prolonged the incident.
5. Define **corrective and preventive actions** to prevent recurrence and strengthen resilience.
6. Document **lessons learned** for institutional knowledge and regulatory reporting.

### 3.2 Assessment Criteria

*Specify the standards and thresholds used to evaluate adequacy of response, control effectiveness, and classification. Link each criterion to internal policy or regulatory source.*

| Criterion | Standard / Threshold | Source |
|---|---|---|
| Detection Time | Detected within [X] minutes of occurrence per SLA | [Internal Policy / BNM RMiT] |
| Escalation Time | Escalated to [Role] within [X] minutes of detection | [Incident Response Policy] |
| Recovery Time Objective (RTO) | System restored within [X] hours | [BCP / DR Policy] |
| Recovery Point Objective (RPO) | Data loss not to exceed [X] hours | [BCP / DR Policy] |
| Customer Communication | Notification issued within [X] hours of confirmed impact | [Customer Communication Policy] |
| BNM Notification | Submitted within [X] hours for qualifying incidents | [BNM RMiT / Guidelines on Submission] |
| Control Effectiveness | All preventive controls rated against design intent | [Internal Control Framework] |

### 3.3 Review Boundaries and Constraints

*Document any limitations, data gaps, or constraints that affected the completeness of this review.*

| Constraint | Impact on Review | Mitigation |
|---|---|---|
| [e.g., Log retention window of 30 days] | [Could not retrieve full pre-incident logs] | [Supplemented with vendor diagnostic data] |
| [e.g., Key personnel on leave during review] | [Input from [Role] delayed] | [Written input obtained asynchronously] |
| [e.g., Third-party vendor cooperation] | [Full root cause from vendor pending] | [Interim findings documented; update expected by [Date]] |

---

## 4. Methodology

*Describe the methods, frameworks, and tools used to conduct the post-incident review. This provides reviewers and regulators with confidence in the rigour of the analysis.*

### 4.1 Review Approach

The PIR was conducted using the following structured approach:

| Phase | Activity | Output |
|---|---|---|
| **1. Data Collection** | Collection of logs, alerts, tickets, communications, and system telemetry | Evidence repository |
| **2. Timeline Reconstruction** | Chronological mapping of all events from first indicator to resolution | Incident timeline (Section 7) |
| **3. Root Cause Analysis** | Application of [5-Whys / Fishbone / Fault Tree Analysis] methodology | Root cause findings |
| **4. Control Assessment** | Evaluation of preventive, detective, and corrective controls | Control gap analysis |
| **5. Stakeholder Interviews** | Structured interviews with incident responders and system owners | Corroborated narrative |
| **6. Benchmarking** | Comparison against industry standards and prior incidents | Lessons learned |
| **7. Action Planning** | Development of corrective and preventive action items | Corrective Action Plan |

### 4.2 Root Cause Analysis Method

**Method Applied:** [5-Whys Analysis / Fishbone (Ishikawa) Diagram / Fault Tree Analysis / Other]

*Document the root cause analysis in detail below. If using 5-Whys, list each "Why" and its answer iteratively until the root cause is reached.*

**5-Whys Analysis:**

| Level | Question | Answer |
|---|---|---|
| Why 1 | Why did the incident occur? | [Answer] |
| Why 2 | Why did [Answer to Why 1] happen? | [Answer] |
| Why 3 | Why did [Answer to Why 2] happen? | [Answer] |
| Why 4 | Why did [Answer to Why 3] happen? | [Answer] |
| Why 5 | Why did [Answer to Why 4] happen? | [Answer — Root Cause] |

**Identified Root Cause:** [State the confirmed root cause clearly and concisely]

### 4.3 Contributing Factors

*List all factors that contributed to the occurrence, impact, or duration of the incident. Contributing factors are distinct from the root cause — they are conditions that enabled or worsened the incident.*

| # | Contributing Factor | Category | Description |
|---|---|---|---|
| 1 | [Factor] | [People / Process / Technology / Third Party] | [Description] |
| 2 | [Factor] | [People / Process / Technology / Third Party] | [Description] |
| 3 | [Factor] | [People / Process / Technology / Third Party] | [Description] |

### 4.4 Evidence Sources

*List all evidence reviewed during this assessment.*

| Evidence Type | Source / Reference | Date Retrieved |
|---|---|---|
| System logs | [System Name — Log Reference] | [DD/MM/YYYY] |
| Monitoring alerts | [SIEM / Monitoring Tool] | [DD/MM/YYYY] |
| Incident tickets | [ITSM Tool — Ticket Reference] | [DD/MM/YYYY] |
| Stakeholder interviews | [Names / Roles interviewed] | [DD/MM/YYYY] |
| Vendor reports | [Vendor Name — Report Reference] | [DD/MM/YYYY] |
| Network captures | [Tool / Reference] | [DD/MM/YYYY] |
| Change records | [Change Reference Numbers] | [DD/MM/YYYY] |

---

## 5. Incident Classification Matrix

*The classification matrix defines the severity tier of this incident based on objective criteria. Classification determines mandatory escalation, notification, and review requirements.*

### 5.1 Classification Criteria

| Severity Level | Customer Impact | Financial Impact | System Availability | RTO Breach | Regulatory Trigger |
|---|---|---|---|---|---|
| **Critical (P1)** | > [N] customers or critical banking service | > MYR [Amount] | Core system fully unavailable | RTO breached | BNM notification mandatory |
| **High (P2)** | [N1]–[N2] customers or significant degradation | MYR [Amount1]–[Amount2] | Core system partially unavailable | RTO at risk | BNM notification may apply |
| **Medium (P3)** | [N3]–[N4] customers or non-critical service | MYR [Amount3]–[Amount4] | Non-core system unavailable | Within RTO | Internal escalation only |
| **Low (P4)** | < [N5] customers or minimal impact | < MYR [Amount5] | Minimal / cosmetic | Within RTO | Standard reporting |

### 5.2 Classification of This Incident

| Criterion | Assessment | Justification |
|---|---|---|
| Customer Impact | [Critical / High / Medium / Low] | [Justification] |
| Financial Impact | [Critical / High / Medium / Low] | [Justification] |
| System Availability | [Critical / High / Medium / Low] | [Justification] |
| RTO Breach | [Yes / No] | [Justification] |
| Regulatory Trigger | [Yes / No] | [Justification] |
| **Overall Severity** | **[Critical / High / Medium / Low]** | **[Summary justification]** |

### 5.3 Classification Change Log

*Document any re-classifications that occurred during the incident lifecycle.*

| Date & Time | Previous Classification | New Classification | Reason for Change | Changed By |
|---|---|---|---|---|
| [DD/MM/YYYY HH:MM] | [P-level] | [P-level] | [Reason] | [Name / Role] |

---

## 6. Findings and Ratings

*Summarise all findings from the review. Each finding should be factual, evidence-based, and linked to a specific control gap, process failure, or risk. Assign a risk rating to prioritise corrective actions.*

### 6.1 Findings Summary

| Finding # | Finding Title | Category | Risk Rating | Control Gap | Evidence Reference |
|---|---|---|---|---|---|
| F-01 | [Finding title] | [Detection / Response / Recovery / Prevention / Governance] | [Critical / High / Medium / Low] | [Control gap description] | [Evidence ref] |
| F-02 | [Finding title] | [Category] | [Rating] | [Control gap description] | [Evidence ref] |
| F-03 | [Finding title] | [Category] | [Rating] | [Control gap description] | [Evidence ref] |
| F-04 | [Finding title] | [Category] | [Rating] | [Control gap description] | [Evidence ref] |
| F-05 | [Finding title] | [Category] | [Rating] | [Control gap description] | [Evidence ref] |

### 6.2 Detailed Findings

*Provide detailed narrative for each finding, including supporting evidence and risk context.*

---

**Finding F-01: [Finding Title]**

- **Category:** [Detection / Response / Recovery / Prevention / Governance]
- **Risk Rating:** [Critical / High / Medium / Low]
- **Description:** [Detailed description of the finding — what was observed, what should have happened, and the gap between actual and expected state]
- **Evidence:** [Reference to specific log entries, timestamps, or documents]
- **Root Cause Link:** [Link to root cause or contributing factor identified in Section 4]
- **Risk Impact:** [Describe the risk if this finding is not addressed]
- **Recommendation:** [Specific corrective or preventive action recommended]

---

**Finding F-02: [Finding Title]**

- **Category:** [Category]
- **Risk Rating:** [Rating]
- **Description:** [Description]
- **Evidence:** [Reference]
- **Root Cause Link:** [Link]
- **Risk Impact:** [Impact]
- **Recommendation:** [Recommendation]

---

*[Repeat Finding block for each finding identified]*

---

### 6.3 Control Effectiveness Rating

| Control Domain | Control Description | Design Adequacy | Operating Effectiveness | Overall Rating |
|---|---|---|---|---|
| Preventive Controls | [Description] | [Adequate / Inadequate] | [Effective / Ineffective / Partially Effective] | [Rating] |
| Detective Controls | [Description] | [Adequate / Inadequate] | [Effective / Ineffective / Partially Effective] | [Rating] |
| Corrective Controls | [Description] | [Adequate / Inadequate] | [Effective / Ineffective / Partially Effective] | [Rating] |
| Governance & Oversight | [Description] | [Adequate / Inadequate] | [Effective / Ineffective / Partially Effective] | [Rating] |

---

## 7. Escalation Timelines

*Document the full chronological timeline of the incident from first detection to final resolution, including all escalation actions. This section provides the factual basis for assessing response adequacy.*

### 7.1 Incident Timeline

| Date & Time (MYT) | Event / Action | Actor / System | Escalation Level |
|---|---|---|---|
| [DD/MM/YYYY HH:MM] | [First indicator / alert generated] | [System / Person] | L1 — Operations |
| [DD/MM/YYYY HH:MM] | [Incident ticket raised] | [Person / Role] | L1 — Operations |
| [DD/MM/YYYY HH:MM] | [Initial triage completed] | [Person / Role] | L1 — Operations |
| [DD/MM/YYYY HH:MM] | [Escalated to L2 — [Team Name]] | [Person / Role] | L2 — Technical |
| [DD/MM/YYYY HH:MM] | [Severity classified as [P-level]] | [Person / Role] | L2 — Technical |
| [DD/MM/YYYY HH:MM] | [Head of Technology notified] | [Person / Role] | L3 — Management |
| [DD/MM/YYYY HH:MM] | [War room / bridge call initiated] | [Person / Role] | L3 — Management |
| [DD/MM/YYYY HH:MM] | [Workaround / containment applied] | [Person / Role] | L2 — Technical |
| [DD/MM/YYYY HH:MM] | [CEO / CRO notified] | [Person / Role] | L4 — Executive |
| [DD/MM/YYYY HH:MM] | [BNM notification submitted] | [Person / Role] | Regulatory |
| [DD/MM/YYYY HH:MM] | [Service partially restored] | [Person / Role] | L2 — Technical |
| [DD/MM/YYYY HH:MM] | [Full service restoration confirmed] | [Person / Role] | L2 — Technical |
| [DD/MM/YYYY HH:MM] | [Incident declared closed] | [Person / Role] | L3 — Management |

### 7.2 Escalation SLA Compliance

| Escalation Milestone | Required Timeframe | Actual Timeframe | SLA Met? | Variance |
|---|---|---|---|---|
| L1 Detection to L2 Escalation | Within [X] minutes | [Actual] minutes | [Yes / No] | [+/- X minutes] |
| L2 to L3 (Management) Escalation | Within [X] minutes | [Actual] minutes | [Yes / No] | [+/- X minutes] |
| L3 to L4 (Executive) Escalation | Within [X] hours | [Actual] hours | [Yes / No] | [+/- X hours] |
| Customer Notification | Within [X] hours | [Actual] hours | [Yes / No] | [+/- X hours] |
| BNM Notification | Within [X] hours | [Actual] hours | [Yes / No] | [+/- X hours] |
| Service Restoration (RTO) | Within [X] hours | [Actual] hours | [Yes / No] | [+/- X hours] |

### 7.3 Escalation Gap Analysis

*Document instances where escalation was delayed, skipped, or inconsistent with the Incident Response Policy. For each gap, state whether a corrective action has been raised.*

| Escalation Gap | Expected Action | Actual Action | Delay / Deviation | Corrective Action Raised |
|---|---|---|---|---|
| [Gap description] | [Expected] | [Actual] | [Minutes / Hours delay] | [Yes — CAP-NN / No] |

---

## 8. Communication Log

*Document all communications issued during and after the incident. This section demonstrates that [Organization Name] met its obligations to notify affected parties, regulators, and internal stakeholders in a timely and accurate manner.*

### 8.1 External Communications

| # | Recipient | Communication Type | Date & Time (MYT) | Channel | Sent By | Reference |
|---|---|---|---|---|---|---|
| 1 | BNM | Regulatory notification | [DD/MM/YYYY HH:MM] | [BNM reporting portal / Email] | [Name / Role] | [Reference number] |
| 2 | Affected customers | Service advisory | [DD/MM/YYYY HH:MM] | [SMS / Email / App notification / Website banner] | [Name / Role] | [Message reference] |
| 3 | [Third-party vendor] | Incident notification | [DD/MM/YYYY HH:MM] | [Email / Portal] | [Name / Role] | [Reference] |
| 4 | Media / Public | Press statement | [DD/MM/YYYY HH:MM / N/A] | [Press release / Social media] | [Name / Role] | [Reference / N/A] |

### 8.2 Internal Communications

| # | Recipient | Communication Type | Date & Time (MYT) | Channel | Sent By |
|---|---|---|---|---|---|
| 1 | Board Risk Committee | Incident notification | [DD/MM/YYYY HH:MM] | [Email / Board portal] | [Name / Role] |
| 2 | EXCO | Situation report | [DD/MM/YYYY HH:MM] | [Email / War room] | [Name / Role] |
| 3 | Branch Network | Operational advisory | [DD/MM/YYYY HH:MM] | [Internal broadcast / Email] | [Name / Role] |
| 4 | Call Centre | Talking points / FAQ | [DD/MM/YYYY HH:MM] | [Email / Intranet] | [Name / Role] |
| 5 | All staff | General notification | [DD/MM/YYYY HH:MM] | [Intranet / Email] | [Name / Role] |

### 8.3 Communication Templates Used

*Reference any pre-approved communication templates that were activated during the incident. Append the actual communications issued as Appendix D.*

| Template Reference | Template Name | Activated? | Modification Required | Notes |
|---|---|---|---|---|
| [COMM-T-01] | BNM Regulatory Notification — Tier 1 | [Yes / No] | [Yes / No] | [Notes] |
| [COMM-T-02] | Customer Service Advisory — Outage | [Yes / No] | [Yes / No] | [Notes] |
| [COMM-T-03] | Board / EXCO Situation Report | [Yes / No] | [Yes / No] | [Notes] |
| [COMM-T-04] | Staff Internal Advisory | [Yes / No] | [Yes / No] | [Notes] |
| [COMM-T-05] | Media Statement — Service Disruption | [Yes / No] | [Yes / No] | [Notes] |

### 8.4 Communication Effectiveness Assessment

*Assess whether communications were timely, accurate, and consistent across all channels.*

| Assessment Criterion | Assessment | Findings |
|---|---|---|
| Timeliness — Regulatory | [Met / Not Met] | [Findings / observations] |
| Timeliness — Customer | [Met / Not Met] | [Findings / observations] |
| Accuracy of information communicated | [Adequate / Inadequate] | [Findings / observations] |
| Consistency across channels | [Consistent / Inconsistent] | [Findings / observations] |
| Message clarity and appropriateness | [Adequate / Inadequate] | [Findings / observations] |

---

## 9. Post-Incident Review Process

*Document how this post-incident review was conducted, including governance, participation, and process adherence. This section demonstrates procedural rigour to regulators and internal audit.*

### 9.1 Review Governance

| Element | Details |
|---|---|
| **PIR Initiated By** | [Name, Title] |
| **PIR Initiation Date** | [DD/MM/YYYY] |
| **Mandatory PIR Trigger** | [Yes — Severity P[X] mandatory / No — voluntary] |
| **PIR Completion Date** | [DD/MM/YYYY] |
| **PIR Lead** | [Name, Title] |
| **Review Committee** | [Name of committee / working group] |
| **Days to Complete** | [N days] — [Within / Outside] policy requirement of [N] business days |

### 9.2 PIR Participants

| Name | Title | Business Unit | Role in PIR | Attended? |
|---|---|---|---|---|
| [Name] | [Title] | Technology Risk | PIR Lead | [Yes / No] |
| [Name] | [Title] | IT Operations | Subject matter expert | [Yes / No] |
| [Name] | [Title] | Cybersecurity | Subject matter expert | [Yes / No] |
| [Name] | [Title] | Business Continuity | Subject matter expert | [Yes / No] |
| [Name] | [Title] | Compliance | Observer | [Yes / No] |
| [Name] | [Title] | Internal Audit | Independent observer | [Yes / No] |
| [Name] | [Title] | [Affected Business Unit] | Business impact input | [Yes / No] |
| [Name] | [Title] | [Vendor Name] | Third-party input | [Yes / No] |

### 9.3 PIR Meetings and Sessions

| Session | Date | Participants | Objectives | Output |
|---|---|---|---|---|
| Kick-off | [DD/MM/YYYY] | [Participant list / roles] | Scope alignment, evidence assignment | Evidence collection plan |
| Technical Deep-Dive | [DD/MM/YYYY] | [Participant list / roles] | Root cause analysis, timeline reconstruction | Draft RCA findings |
| Stakeholder Review | [DD/MM/YYYY] | [Participant list / roles] | Validate findings, identify gaps | Validated findings |
| Action Planning | [DD/MM/YYYY] | [Participant list / roles] | Develop corrective action plan | Draft CAP |
| Final Review | [DD/MM/YYYY] | [Participant list / roles] | Approve findings and CAP | Final PIR report |

### 9.4 Lessons Learned

*Summarise the key lessons learned from this incident. Lessons learned should be specific, actionable, and referenced against a corrective action in the CAP.*

| # | Lesson Learned | Category | Positive or Negative | Linked CAP Item |
|---|---|---|---|---|
| L-01 | [Description of lesson] | [People / Process / Technology] | [Positive practice to reinforce / Gap to address] | [CAP-NN] |
| L-02 | [Description of lesson] | [People / Process / Technology] | [Positive practice to reinforce / Gap to address] | [CAP-NN] |
| L-03 | [Description of lesson] | [People / Process / Technology] | [Positive practice to reinforce / Gap to address] | [CAP-NN] |
| L-04 | [Description of lesson] | [People / Process / Technology] | [Positive practice to reinforce / Gap to address] | [CAP-NN] |

### 9.5 Benchmarking Against Previous Incidents

*Compare this incident with similar prior incidents to identify trends. This input feeds into the quarterly trend review.*

| Metric | This Incident | Previous Similar Incident ([INC-YYYY-NNNN]) | Industry Benchmark | Trend |
|---|---|---|---|---|
| Detection Time | [X mins] | [Y mins] | [Z mins] | [Improving / Stable / Deteriorating] |
| Time to Escalate | [X mins] | [Y mins] | [Z mins] | [Improving / Stable / Deteriorating] |
| Time to Restore (RTO) | [X hrs] | [Y hrs] | [Z hrs] | [Improving / Stable / Deteriorating] |
| Customer Impact Volume | [N customers] | [N customers] | [N/A] | [Improving / Stable / Deteriorating] |
| Repeat Incident? | [Yes / No] | [N/A] | [N/A] | [N/A] |

---

## 10. Corrective Action Plan

*All findings must be linked to at least one corrective or preventive action. Actions must be specific, measurable, time-bound, and assigned to a named owner. The Technology Risk function will track all actions to closure.*

### 10.1 Corrective Action Register

| CAP Ref | Finding Ref | Action Description | Action Type | Owner (Name & Title) | Target Completion Date | Priority | Status |
|---|---|---|---|---|---|---|---|
| CAP-01 | F-01 | [Specific corrective action description] | [Corrective / Preventive / Both] | [Name, Title] | [DD/MM/YYYY] | [Critical / High / Medium / Low] | [Open / In Progress / Closed] |
| CAP-02 | F-02 | [Specific corrective action description] | [Corrective / Preventive / Both] | [Name, Title] | [DD/MM/YYYY] | [Critical / High / Medium / Low] | [Open / In Progress / Closed] |
| CAP-03 | F-03 | [Specific corrective action description] | [Corrective / Preventive / Both] | [Name, Title] | [DD/MM/YYYY] | [Critical / High / Medium / Low] | [Open / In Progress / Closed] |
| CAP-04 | F-04 | [Specific corrective action description] | [Corrective / Preventive / Both] | [Name, Title] | [DD/MM/YYYY] | [Critical / High / Medium / Low] | [Open / In Progress / Closed] |
| CAP-05 | L-01 | [Specific corrective action description] | [Corrective / Preventive / Both] | [Name, Title] | [DD/MM/YYYY] | [Critical / High / Medium / Low] | [Open / In Progress / Closed] |

### 10.2 Action Tracking and Governance

- All actions will be tracked through [ITSM Tool / GRC Platform] under project reference **[Project Reference]**.
- Progress will be reviewed at the **monthly Technology Risk Committee** meeting.
- Overdue Critical and High actions will be escalated to the **Chief Risk Officer** by the Head of Technology Risk.
- Evidence of completion (screenshots, test results, updated policy documents) must be attached to each action item before closure.
- Closed actions are subject to verification by **Internal Audit** on a sample basis.

---

## 11. Roles and Responsibilities

*The following RACI matrix defines accountability for PIR activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 11.1 RACI Matrix — Post-Incident Review

| Activity | Head of Technology Risk | CTO / CIO | CISO | IT Operations | Business Continuity | Compliance | Internal Audit | CEO / CRO | Board Risk Committee |
|---|---|---|---|---|---|---|---|---|---|
| Declare incident and initiate PIR | R | A | C | R | C | I | I | I | I |
| Assign PIR lead and participants | A | C | C | I | I | I | I | I | I |
| Collect and preserve evidence | R | I | C | R | C | I | I | I | I |
| Conduct root cause analysis | R | C | C | R | C | I | I | I | I |
| Develop findings and ratings | R | C | C | C | C | C | I | I | I |
| Prepare draft PIR report | R | A | C | C | C | C | I | I | I |
| Review and validate PIR findings | A | R | R | C | C | C | I | I | I |
| Develop corrective action plan | R | A | C | C | C | C | I | I | I |
| Approve PIR report | C | A | C | I | I | C | I | I | I |
| Submit report to Management / BRC | R | A | I | I | I | C | I | A | A |
| Submit BNM regulatory notification | R | C | C | I | I | A | I | I | I |
| Track corrective actions to closure | A | C | C | R | C | C | C | I | I |
| Quarterly trend review | A | C | C | R | C | C | I | C | I |

### 11.2 Key Contact Directory

| Role | Name | Contact Number | Email |
|---|---|---|---|
| Head of Technology Risk | [Name] | [Number] | [Email] |
| CTO / CIO | [Name] | [Number] | [Email] |
| CISO | [Name] | [Number] | [Email] |
| Head of IT Operations | [Name] | [Number] | [Email] |
| Head of Business Continuity | [Name] | [Number] | [Email] |
| Head of Compliance | [Name] | [Number] | [Email] |
| Chief Risk Officer | [Name] | [Number] | [Email] |

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [DD/MM/YYYY] | [Name, Title] | Initial draft |
| 0.2 | [DD/MM/YYYY] | [Name, Title] | Incorporated feedback from technical review |
| 0.3 | [DD/MM/YYYY] | [Name, Title] | Incorporated Compliance and Internal Audit input |
| 1.0 | [DD/MM/YYYY] | [Name, Title] | Final approved version |

### 12.2 Approval Sign-Off

*By signing below, the approver confirms that this Post-Incident Review Report accurately represents the findings of the review, that the Corrective Action Plan is appropriate, and that the report is suitable for submission to Management, the Board Risk Committee, and regulatory authorities as required.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk (Report Author) | [Name] | _________________________ | [DD/MM/YYYY] |
| CTO / CIO (Report Approver) | [Name] | _________________________ | [DD/MM/YYYY] |
| Chief Risk Officer | [Name] | _________________________ | [DD/MM/YYYY] |
| Head of Compliance | [Name] | _________________________ | [DD/MM/YYYY] |
| Internal Audit (Independent Reviewer) | [Name] | _________________________ | [DD/MM/YYYY] |

---

## 13. References

### 13.1 Regulatory References

| # | Document | Clause / Section | Description |
|---|---|---|---|
| 1 | BNM Risk Management in Technology (RMiT) Policy Document | Clause 11.1 | Post-incident review requirements for technology incidents |
| 2 | BNM Risk Management in Technology (RMiT) Policy Document | Clause 11.1(a) | Root cause identification requirements |
| 3 | BNM Risk Management in Technology (RMiT) Policy Document | Clause 11.1(b) | Corrective and preventive action tracking |
| 4 | BNM Risk Management in Technology (RMiT) Policy Document | Clause 11.1(c) | Reporting to Senior Management and Board |
| 5 | BNM Guidelines on Submission of Statistics and Returns | [Relevant section] | Regulatory notification submission requirements |
| 6 | Personal Data Protection Act 2010 (PDPA) | Section 9 | Data breach notification obligations where personal data is involved |

### 13.2 Internal Policy References

| # | Document Title | Document ID | Version |
|---|---|---|---|
| 1 | Incident Response Policy | [DOC-ID] | [Version] |
| 2 | Business Continuity Management Policy | [DOC-ID] | [Version] |
| 3 | Technology Risk Management Framework | [DOC-ID] | [Version] |
| 4 | Data Governance and Classification Policy | [DOC-ID] | [Version] |
| 5 | Change Management Policy | [DOC-ID] | [Version] |
| 6 | Vendor and Third-Party Risk Management Policy | [DOC-ID] | [Version] |
| 7 | Crisis Communication Policy | [DOC-ID] | [Version] |

---

## 14. Appendices

### Appendix A — Incident Evidence Register

*List all evidence collected and preserved in support of this review. Evidence must be stored in [Evidence Repository / GRC System] and retained for a minimum of [X] years per the Records Retention Policy.*

| Evidence Ref | Description | Source | Date Collected | Custodian | Retention Period |
|---|---|---|---|---|---|
| EV-01 | [Description] | [Source] | [DD/MM/YYYY] | [Name] | [Period] |
| EV-02 | [Description] | [Source] | [DD/MM/YYYY] | [Name] | [Period] |
| EV-03 | [Description] | [Source] | [DD/MM/YYYY] | [Name] | [Period] |

---

### Appendix B — Root Cause Analysis Diagrams

*Attach or embed the root cause analysis working materials used during this review, such as Fishbone (Ishikawa) diagrams, Fault Tree Analysis charts, or 5-Whys working documents.*

**[Attach: Root Cause Analysis Diagram — [Incident Reference]]**

[Insert or reference diagram here]

---

### Appendix C — BNM Regulatory Notification Submissions

*Attach copies of all regulatory notifications submitted to BNM in relation to this incident, including acknowledgement receipts where available.*

| Submission # | Submission Type | Date Submitted | BNM Reference | Status |
|---|---|---|---|---|
| [Sub-01] | [Initial notification / Update / Final report] | [DD/MM/YYYY] | [BNM Reference] | [Acknowledged / Pending] |

**[Attach: BNM Notification — [Incident Reference] — [Date]]**

---

### Appendix D — Communications Issued

*Attach copies of all customer, staff, Board, and media communications issued in relation to this incident.*

| Communication Ref | Recipient Group | Date Issued | Channel | Attachment |
|---|---|---|---|---|
| [COM-01] | Customers | [DD/MM/YYYY] | [SMS / Email / App] | [Attached] |
| [COM-02] | Board Risk Committee | [DD/MM/YYYY] | [Email / Board portal] | [Attached] |
| [COM-03] | All Staff | [DD/MM/YYYY] | [Intranet] | [Attached] |
| [COM-04] | Media | [DD/MM/YYYY] | [Press release] | [Attached / N/A] |

---

### Appendix E — Quarterly Trend Review Summary

*To be completed by the Head of Technology Risk as part of the quarterly PIR trend review. Aggregate data from all PIRs completed in the quarter.*

| Quarter | # PIRs Completed | # Critical Incidents | # High Incidents | Avg Detection Time | Avg RTO | CAP Items Raised | CAP Items Closed | Overdue Actions |
|---|---|---|---|---|---|---|---|---|
| [Q1 YYYY] | [N] | [N] | [N] | [X mins] | [X hrs] | [N] | [N] | [N] |
| [Q2 YYYY] | [N] | [N] | [N] | [X mins] | [X hrs] | [N] | [N] | [N] |
| [Q3 YYYY] | [N] | [N] | [N] | [X mins] | [X hrs] | [N] | [N] | [N] |
| [Q4 YYYY] | [N] | [N] | [N] | [X mins] | [X hrs] | [N] | [N] | [N] |

**Trend Observations:** [Narrative summary of trends, systemic issues, and improvement areas for the quarter]

**Recommended Management Actions:** [Actions recommended to management based on quarterly trend analysis]

---

### Appendix F — Glossary

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia — the central bank and primary financial regulator of Malaysia |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk for financial institutions |
| PIR | Post-Incident Review — structured review conducted after a significant technology incident |
| RTO | Recovery Time Objective — the maximum acceptable duration of service disruption |
| RPO | Recovery Point Objective — the maximum acceptable amount of data loss measured in time |
| CAP | Corrective Action Plan — documented set of actions to address findings and prevent recurrence |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| CISO | Chief Information Security Officer |
| CTO | Chief Technology Officer |
| CRO | Chief Risk Officer |
| P1 / P2 / P3 / P4 | Priority levels used to classify incident severity (P1 = Critical, P4 = Low) |
| PDPA | Personal Data Protection Act 2010 — Malaysian data protection legislation |
| BRC | Board Risk Committee |
| EXCO | Executive Committee |

---

*This document is classified **Confidential**. It is intended solely for the use of authorised personnel at [Organization Name] and relevant regulatory authorities. Unauthorised disclosure, reproduction, or distribution is strictly prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: Head of Technology Risk | [Organization Name]*