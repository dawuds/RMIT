# DR Deficiency Remediation Plan

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may result in disciplinary or legal action.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [DR Testing Deficiency Summary](#3-dr-testing-deficiency-summary)
4. [Remediation Objectives and Scope](#4-remediation-objectives-and-scope)
5. [Deficiency Classification and Prioritization](#5-deficiency-classification-and-prioritization)
6. [Remediation Actions and Milestones](#6-remediation-actions-and-milestones)
7. [Accountable Owners](#7-accountable-owners)
8. [Target Completion Dates and Schedule](#8-target-completion-dates-and-schedule)
9. [Resource Requirements](#9-resource-requirements)
10. [Progress Tracking Mechanism](#10-progress-tracking-mechanism)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Escalation and Exception Management](#12-escalation-and-exception-management)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section states the purpose of the document and the regulatory obligation it fulfils. Describe the triggering event (DR test) and the intent of this remediation plan.*

This Disaster Recovery (DR) Deficiency Remediation Plan has been prepared by [Organization Name] to systematically address deficiencies identified during the Disaster Recovery (DR) testing exercise conducted on [DR Test Date]. The plan establishes a structured framework for tracking, managing, and resolving all identified gaps to ensure that [Organization Name]'s DR capabilities meet the requirements set forth by Bank Negara Malaysia (BNM) under the Risk Management in Technology (RMiT) Policy Document.

This document fulfils the obligation under **RMiT Clause 10.32** to remediate deficiencies discovered through DR testing and to maintain evidence of corrective action for supervisory review.

### 1.2 Scope

*Define the boundaries of this remediation plan — which systems, locations, business units, and DR exercises are covered.*

This remediation plan applies to:

- **Systems in Scope:** [List critical systems covered by the DR test, e.g., Core Banking System, Payment Gateway, Internet Banking Platform, Data Centre Infrastructure]
- **Business Units in Scope:** [List business units whose operations are covered, e.g., Retail Banking Operations, IT Infrastructure, Treasury, Risk Management]
- **Geographic Scope:** [Primary Data Centre: Location | Secondary/DR Site: Location]
- **DR Exercise Reference:** [DR Exercise ID / Name, e.g., DR-EX-2025-Q3]
- **Test Type:** [Full Failover Test / Partial Failover Test / Tabletop Exercise / Simulation]
- **Out of Scope:** [Explicitly state any systems, units, or deficiencies excluded from this plan and the rationale]

---

## 2. Regulatory Context

### 2.1 Regulatory Framework

*Reference the specific BNM policy document and clause that mandates this artifact. Include any related circulars or guidance notes.*

[Organization Name] is a licensed [financial institution type, e.g., licensed bank / development financial institution] regulated by Bank Negara Malaysia (BNM). This document is prepared in compliance with:

| Regulation | Document | Clause / Section | Requirement Summary |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document (Issued: [BNM Issue Date]) | Clause 10.32 | Financial institution must conduct DR testing and remediate identified deficiencies in a timely manner |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.28 – 10.31 | Business continuity and DR planning, testing, and maintenance requirements |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 9 – Security Principle | Ensuring personal data remains protected during system recovery operations |
| NACSA | National Cyber Security Agency Guidelines | [Relevant Guideline Reference] | Cybersecurity requirements applicable to DR and business continuity |
| [Internal Policy] | [Organization Name] Business Continuity Management Policy | [Section Reference] | Internal governance requirements for DR deficiency management |

### 2.2 RMiT Clause 10.32 — Specific Requirement

*Reproduce or paraphrase the specific clause text for reader reference. This ensures that all reviewers and auditors can see the exact obligation being addressed.*

**RMiT Clause 10.32** requires that:

> *"A financial institution must document and remediate all deficiencies identified during disaster recovery testing, with clear accountability, timelines, and escalation procedures. Evidence of remediation must be retained and made available to Bank Negara Malaysia upon request."*

[Organization Name] acknowledges this obligation and has established this remediation plan to demonstrate full compliance with the above requirement. All deficiency remediation activities are subject to review by the [Board IT Risk Committee / Board Risk Management Committee] and must be completed within the timelines stipulated herein.

---

## 3. DR Testing Deficiency Summary

### 3.1 DR Test Overview

*Provide a brief summary of the DR test that gave rise to the deficiencies documented in this plan. Reference the corresponding DR Test Report.*

| Field | Details |
|---|---|
| **DR Test Reference** | [DR Test Report ID, e.g., DR-RPT-2025-Q3-001] |
| **Test Date(s)** | [Start Date] to [End Date] |
| **Test Type** | [Full Failover / Partial Failover / Tabletop / Walkthrough] |
| **Test Coordinator** | [Name, Role] |
| **Primary Site** | [Data Centre Name, Location] |
| **DR Site** | [DR Site Name, Location] |
| **Systems Tested** | [List systems tested] |
| **Overall Test Result** | [Pass / Fail / Conditional Pass] |
| **Total Deficiencies Identified** | [Number] |
| **Critical Deficiencies** | [Number] |
| **High Deficiencies** | [Number] |
| **Medium Deficiencies** | [Number] |
| **Low / Informational** | [Number] |

### 3.2 Deficiency Register Summary

*Provide a consolidated register of all deficiencies identified. Each deficiency must have a unique ID referenced throughout this plan. Populate from the DR Test Report.*

| Deficiency ID | System / Process | Deficiency Description | Severity | RTO/RPO Impact | Identified By | Date Identified |
|---|---|---|---|---|---|---|
| DEF-001 | [System Name] | [Brief description of deficiency, e.g., Failover script timeout exceeded RTO by 45 minutes] | Critical | RTO Exceeded | [Name] | [Date] |
| DEF-002 | [System Name] | [Brief description, e.g., Backup restoration procedure not documented for DR site operators] | High | RPO at Risk | [Name] | [Date] |
| DEF-003 | [System Name] | [Brief description, e.g., DR site network bandwidth insufficient for replication during peak load] | High | Both | [Name] | [Date] |
| DEF-004 | [System Name] | [Brief description, e.g., DR runbook version outdated — references decommissioned server] | Medium | None Direct | [Name] | [Date] |
| DEF-005 | [System Name] | [Brief description, e.g., Staff unfamiliarity with DR activation procedures] | Medium | Operational | [Name] | [Date] |
| DEF-006 | [System Name] | [Brief description] | Low | None | [Name] | [Date] |

> **Note:** Full deficiency descriptions, evidence, and test observations are contained in the DR Test Report [DR-RPT-2025-Q3-001]. This register serves as a consolidated reference for remediation tracking purposes.

---

## 4. Remediation Objectives and Scope

### 4.1 Remediation Objectives

*State the specific, measurable objectives of this remediation plan. Objectives should be tied directly to the deficiencies identified and the regulatory requirement to remediate them.*

The remediation objectives of this plan are to:

1. **Resolve all critical and high severity deficiencies** identified in DR Test [DR-EX-2025-Q3] within [timeframe, e.g., 90 days] of plan approval.
2. **Resolve all medium severity deficiencies** within [timeframe, e.g., 180 days] of plan approval.
3. **Resolve all low / informational deficiencies** within [timeframe, e.g., 12 months] or incorporate into the next planned DR cycle.
4. **Ensure RTO and RPO compliance** for all in-scope critical systems as defined in [Organization Name]'s approved DR Plan [DR-PLAN-REF].
5. **Validate remediation effectiveness** through targeted re-testing or verification activities prior to closure.
6. **Maintain audit-ready evidence** of all remediation activities, approvals, and verification outcomes.
7. **Report remediation progress** to [Board IT Risk Committee / Senior Management] on a [monthly / quarterly] basis.

### 4.2 Remediation Scope

*Clarify what is and is not addressed by this remediation plan. This prevents scope creep and sets expectations for reviewers.*

**In Scope:**

- All deficiencies listed in Section 3.2 arising from DR Test [DR-EX-2025-Q3]
- Process, procedure, and documentation gaps identified during the test
- Technical infrastructure gaps affecting DR capability
- Human resource and training gaps identified during the test
- Vendor and third-party dependency gaps

**Out of Scope:**

- [Any deficiency deferred to a future plan — document reason for deferral]
- [Strategic DR architecture redesign projects governed under separate project governance]
- [Deficiencies arising from non-DR-related observations]

---

## 5. Deficiency Classification and Prioritization

### 5.1 Severity Classification Criteria

*Define the severity levels used to classify deficiencies and prioritize remediation. This ensures consistency in how deficiencies are assessed and escalated.*

| Severity | Definition | Regulatory Impact | Remediation Timeline |
|---|---|---|---|
| **Critical** | Deficiency renders DR capability non-functional or causes RTO/RPO breach for a critical system | Immediate regulatory reporting may be required; direct breach of RMiT Clause 10.32 | ≤ 30 days from plan approval |
| **High** | Deficiency significantly impairs DR effectiveness or creates material risk of RTO/RPO breach | Reportable to Board; risk acceptance required if timeline cannot be met | ≤ 90 days from plan approval |
| **Medium** | Deficiency reduces DR reliability but does not immediately threaten RTO/RPO compliance | Internal escalation required; monitored by IT Risk | ≤ 180 days from plan approval |
| **Low / Informational** | Observation or best-practice gap with minimal direct impact on DR objectives | Addressed within normal BAU cycles | ≤ 12 months or next DR cycle |

### 5.2 Prioritized Deficiency List

*Rank all deficiencies by severity and business impact to guide resource allocation and remediation sequencing.*

| Priority | Deficiency ID | Severity | System / Process | Business Impact | Remediation Deadline |
|---|---|---|---|---|---|
| 1 | DEF-001 | Critical | [System Name] | [Impact description] | [Date] |
| 2 | DEF-002 | High | [System Name] | [Impact description] | [Date] |
| 3 | DEF-003 | High | [System Name] | [Impact description] | [Date] |
| 4 | DEF-004 | Medium | [System Name] | [Impact description] | [Date] |
| 5 | DEF-005 | Medium | [System Name] | [Impact description] | [Date] |
| 6 | DEF-006 | Low | [System Name] | [Impact description] | [Date] |

---

## 6. Remediation Actions and Milestones

*This is the core operational section of the plan. For each deficiency, define the specific corrective actions, deliverables, and milestones required to close the gap.*

### 6.1 Remediation Action Plans by Deficiency

---

#### DEF-001: [Short Title of Deficiency]

*Provide the specific remediation actions, deliverables, and verification criteria for each deficiency. Each action should be discrete, assignable, and measurable.*

| Field | Details |
|---|---|
| **Deficiency ID** | DEF-001 |
| **Severity** | Critical |
| **Root Cause** | [Describe the root cause of the deficiency as determined through root cause analysis] |
| **Remediation Approach** | [Describe the overall remediation strategy, e.g., reconfigure failover scripts, update runbooks, procure additional bandwidth] |
| **Accountable Owner** | [Name, Role] |

**Remediation Actions and Milestones:**

| Step | Action | Deliverable | Owner | Start Date | Target Date | Status |
|---|---|---|---|---|---|---|
| 1 | [Action, e.g., Conduct root cause analysis and document findings] | [Deliverable, e.g., Root Cause Analysis Report] | [Name] | [Date] | [Date] | [Not Started / In Progress / Completed] |
| 2 | [Action, e.g., Redesign failover script to optimise execution time] | [Deliverable, e.g., Updated failover script, test results] | [Name] | [Date] | [Date] | [Not Started] |
| 3 | [Action, e.g., Conduct unit testing of revised script in non-production environment] | [Deliverable, e.g., Unit test report] | [Name] | [Date] | [Date] | [Not Started] |
| 4 | [Action, e.g., Update DR runbook to reflect revised procedure] | [Deliverable, e.g., Revised DR Runbook v[X.X]] | [Name] | [Date] | [Date] | [Not Started] |
| 5 | [Action, e.g., Conduct targeted re-test to verify remediation effectiveness] | [Deliverable, e.g., Remediation Verification Test Report] | [Name] | [Date] | [Date] | [Not Started] |
| 6 | [Action, e.g., Obtain QA Lead sign-off and close deficiency] | [Deliverable, e.g., Deficiency Closure Memo] | QA Lead | [Date] | [Date] | [Not Started] |

**Verification Criteria:**
- [ ] [Criterion 1, e.g., Failover script executes within approved RTO threshold of [X] minutes]
- [ ] [Criterion 2, e.g., Verification test witnessed by QA Lead and IT Risk]
- [ ] [Criterion 3, e.g., Updated runbook approved by [Role]]

---

#### DEF-002: [Short Title of Deficiency]

| Field | Details |
|---|---|
| **Deficiency ID** | DEF-002 |
| **Severity** | High |
| **Root Cause** | [Root cause description] |
| **Remediation Approach** | [Remediation strategy] |
| **Accountable Owner** | [Name, Role] |

**Remediation Actions and Milestones:**

| Step | Action | Deliverable | Owner | Start Date | Target Date | Status |
|---|---|---|---|---|---|---|
| 1 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |
| 2 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |
| 3 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |
| 4 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |

**Verification Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

---

#### DEF-003: [Short Title of Deficiency]

| Field | Details |
|---|---|
| **Deficiency ID** | DEF-003 |
| **Severity** | High |
| **Root Cause** | [Root cause description] |
| **Remediation Approach** | [Remediation strategy] |
| **Accountable Owner** | [Name, Role] |

**Remediation Actions and Milestones:**

| Step | Action | Deliverable | Owner | Start Date | Target Date | Status |
|---|---|---|---|---|---|---|
| 1 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |
| 2 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |
| 3 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |

**Verification Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

---

#### DEF-004: [Short Title of Deficiency]

| Field | Details |
|---|---|
| **Deficiency ID** | DEF-004 |
| **Severity** | Medium |
| **Root Cause** | [Root cause description] |
| **Remediation Approach** | [Remediation strategy] |
| **Accountable Owner** | [Name, Role] |

**Remediation Actions and Milestones:**

| Step | Action | Deliverable | Owner | Start Date | Target Date | Status |
|---|---|---|---|---|---|---|
| 1 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |
| 2 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |

**Verification Criteria:**
- [ ] [Criterion 1]

---

#### DEF-005: [Short Title of Deficiency]

| Field | Details |
|---|---|
| **Deficiency ID** | DEF-005 |
| **Severity** | Medium |
| **Root Cause** | [Root cause description] |
| **Remediation Approach** | [Remediation strategy] |
| **Accountable Owner** | [Name, Role] |

**Remediation Actions and Milestones:**

| Step | Action | Deliverable | Owner | Start Date | Target Date | Status |
|---|---|---|---|---|---|---|
| 1 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |
| 2 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |

**Verification Criteria:**
- [ ] [Criterion 1]

---

#### DEF-006: [Short Title of Deficiency]

| Field | Details |
|---|---|
| **Deficiency ID** | DEF-006 |
| **Severity** | Low |
| **Root Cause** | [Root cause description] |
| **Remediation Approach** | [Remediation strategy] |
| **Accountable Owner** | [Name, Role] |

**Remediation Actions and Milestones:**

| Step | Action | Deliverable | Owner | Start Date | Target Date | Status |
|---|---|---|---|---|---|---|
| 1 | [Action] | [Deliverable] | [Name] | [Date] | [Date] | [Not Started] |

**Verification Criteria:**
- [ ] [Criterion 1]

---

### 6.2 Remediation Master Milestone Schedule

*Provide a consolidated view of all key milestones across all deficiencies for senior management and committee reporting purposes.*

| Milestone | Deficiency IDs | Milestone Description | Target Date | Owner | Status |
|---|---|---|---|---|---|
| M1 | DEF-001, DEF-002, DEF-003 | Root cause analyses completed for all Critical and High deficiencies | [Date] | QA Lead | [Not Started] |
| M2 | DEF-001 | Critical deficiency DEF-001 remediation actions completed | [Date] | [Name] | [Not Started] |
| M3 | DEF-001 | DEF-001 verification testing completed and deficiency closed | [Date] | QA Lead | [Not Started] |
| M4 | DEF-002, DEF-003 | All High deficiency remediation actions completed | [Date] | [Names] | [Not Started] |
| M5 | DEF-002, DEF-003 | High deficiency verification testing completed | [Date] | QA Lead | [Not Started] |
| M6 | DEF-004, DEF-005 | All Medium deficiency remediation actions completed | [Date] | [Names] | [Not Started] |
| M7 | DEF-006 | Low deficiency remediation or BAU incorporation completed | [Date] | [Name] | [Not Started] |
| M8 | All | All deficiencies closed; final remediation report issued | [Date] | QA Lead | [Not Started] |
| M9 | All | Board/Committee sign-off on remediation completion | [Date] | [CIO / CRO] | [Not Started] |

---

## 7. Accountable Owners

### 7.1 Deficiency Owner Assignment

*Each deficiency must have a single named accountable owner. Accountability cannot be shared — one individual is ultimately responsible for driving each deficiency to closure.*

| Deficiency ID | Severity | Deficiency Short Title | Accountable Owner | Role / Title | Department | Contact |
|---|---|---|---|---|---|---|
| DEF-001 | Critical | [Short Title] | [Full Name] | [Job Title] | [Department] | [Email / Extension] |
| DEF-002 | High | [Short Title] | [Full Name] | [Job Title] | [Department] | [Email / Extension] |
| DEF-003 | High | [Short Title] | [Full Name] | [Job Title] | [Department] | [Email / Extension] |
| DEF-004 | Medium | [Short Title] | [Full Name] | [Job Title] | [Department] | [Email / Extension] |
| DEF-005 | Medium | [Short Title] | [Full Name] | [Job Title] | [Department] | [Email / Extension] |
| DEF-006 | Low | [Short Title] | [Full Name] | [Job Title] | [Department] | [Email / Extension] |

### 7.2 Oversight and Governance Owners

*Identify the individuals responsible for plan-level oversight, progress reporting, and governance escalation.*

| Role | Responsibility | Assigned To | Department |
|---|---|---|---|
| **Plan Owner** | Overall accountability for this remediation plan | QA Lead — [Full Name] | [Department] |
| **Executive Sponsor** | Board/Senior Management accountability; escalation authority | [CIO / CRO — Full Name] | [Department] |
| **IT Risk Oversight** | Independent monitoring of remediation progress | [IT Risk Manager — Full Name] | IT Risk / Compliance |
| **Vendor Liaison** | Coordinating with third-party vendors for remediation activities | [Name] | [Department] |
| **Internal Audit Observer** | Observing verification testing and sampling evidence | [Name] | Internal Audit |

---

## 8. Target Completion Dates and Schedule

### 8.1 Consolidated Completion Date Schedule

*Provide a single-view schedule of all deficiency completion dates to enable tracking and reporting.*

| Deficiency ID | Severity | Accountable Owner | Remediation Start Date | Target Completion Date | Verification Date | Closure Date | Days Remaining |
|---|---|---|---|---|---|---|---|
| DEF-001 | Critical | [Name] | [Date] | [Date] | [Date] | [Date / Open] | [Auto-calculated] |
| DEF-002 | High | [Name] | [Date] | [Date] | [Date] | [Date / Open] | [Auto-calculated] |
| DEF-003 | High | [Name] | [Date] | [Date] | [Date] | [Date / Open] | [Auto-calculated] |
| DEF-004 | Medium | [Name] | [Date] | [Date] | [Date] | [Date / Open] | [Auto-calculated] |
| DEF-005 | Medium | [Name] | [Date] | [Date] | [Date] | [Date / Open] | [Auto-calculated] |
| DEF-006 | Low | [Name] | [Date] | [Date] | [Date] | [Date / Open] | [Auto-calculated] |

### 8.2 Timeline Extension and Deferral Policy

*Define the process for managing timeline slippage. This is important for regulatory defensibility — regulators expect a documented escalation path when remediation deadlines are at risk.*

Timeline extensions may only be granted under the following conditions:

- **Critical and High deficiencies:** Extension requests must be submitted in writing to the [CIO / CRO] and [IT Risk Manager] at least [14 calendar days] before the deadline. Extensions require sign-off by the Executive Sponsor and must be reported to the [Board IT Risk Committee].
- **Medium deficiencies:** Extension requests must be approved by the QA Lead and IT Risk Manager. Extensions must be documented and the updated date recorded in the progress tracker.
- **Low deficiencies:** Extensions may be approved by the QA Lead and documented in the tracker.

All extensions must include:

1. A clear statement of the reason for the delay
2. A revised target completion date
3. Interim risk mitigation measures in place during the extended period
4. Sign-off by the approving authority as defined above

---

## 9. Resource Requirements

### 9.1 Human Resource Requirements

*Identify the personnel resources (internal and external) required to execute the remediation actions. This ensures that resource allocation decisions are visible to management.*

| Resource | Role in Remediation | Estimated Effort | Availability Required | Source |
|---|---|---|---|---|
| [Name / Role] | [e.g., Lead engineer for failover script remediation] | [e.g., 40 person-hours] | [e.g., Full-time for 2 weeks from [Date]] | Internal |
| [Name / Role] | [e.g., DR Runbook documentation review and update] | [e.g., 16 person-hours] | [e.g., Part-time for 3 weeks] | Internal |
| [Vendor Name / Role] | [e.g., Network bandwidth upgrade project management] | [e.g., 60 person-hours] | [e.g., On-site engagement for [Dates]] | External — [Vendor Name] |
| [Name / Role] | [e.g., Training delivery for DR awareness sessions] | [e.g., 8 person-hours per session x 3 sessions] | [e.g., Scheduled: [Dates]] | Internal |
| QA Lead | Oversight, verification, and plan coordination | [e.g., 20% FTE for plan duration] | Throughout plan duration | Internal |
| IT Risk Manager | Independent monitoring and review | [e.g., 8 person-hours per month] | Monthly review cycle | Internal |

### 9.2 Technology and Infrastructure Resources

*Identify any technology, tooling, or infrastructure resources required to execute the remediation plan.*

| Resource | Purpose | Estimated Cost (MYR) | Procurement Status | Required By |
|---|---|---|---|---|
| [Resource, e.g., Additional network bandwidth at DR site] | [Purpose, e.g., Resolve DEF-003 — insufficient replication bandwidth] | [Amount] | [Approved / Pending Approval / Under Procurement] | [Date] |
| [Resource, e.g., Automated DR testing tool licence] | [Purpose, e.g., Improve future DR test reliability] | [Amount] | [Status] | [Date] |
| [Resource, e.g., DR runbook management platform] | [Purpose] | [Amount] | [Status] | [Date] |
| [Resource, e.g., Additional storage at DR site] | [Purpose] | [Amount] | [Status] | [Date] |

### 9.3 Budget Summary

*Provide a summary of the total remediation budget for management approval and tracking.*

| Category | Estimated Cost (MYR) | Approved Budget (MYR) | Budget Status |
|---|---|---|---|
| Internal Personnel (Opportunity Cost) | [Amount] | [Amount] | [Approved / Pending] |
| External Vendor Engagement | [Amount] | [Amount] | [Approved / Pending] |
| Technology and Infrastructure | [Amount] | [Amount] | [Approved / Pending] |
| Training and Awareness | [Amount] | [Amount] | [Approved / Pending] |
| Contingency (10%) | [Amount] | [Amount] | [Approved / Pending] |
| **Total Estimated Remediation Cost** | **[Total Amount]** | **[Total Approved]** | **[Status]** |

> **Budget Approval Reference:** [Purchase Order / Budget Approval Reference Number, e.g., PO-2025-XXXX or Board/Management approval minute reference]

### 9.4 Third-Party and Vendor Dependencies

*Document any dependencies on external vendors or third parties for remediation activities. Third-party delays are a common source of timeline risk and must be tracked.*

| Vendor / Third Party | Dependency Description | Deficiency ID(s) | Contract Reference | Vendor Liaison | Commitment Date | Status |
|---|---|---|---|---|---|---|
| [Vendor Name] | [e.g., Upgrade of DR site network links to meet bandwidth requirements] | DEF-003 | [Contract / PO Reference] | [Vendor Contact Name] | [Date] | [Pending / Confirmed / In Progress] |
| [Vendor Name] | [e.g., Patch delivery for system deficiency] | DEF-001 | [Contract Reference] | [Contact Name] | [Date] | [Status] |

---

## 10. Progress Tracking Mechanism

### 10.1 Tracking Framework

*Describe the mechanism used to monitor and report on remediation progress. This should include the tools, frequency, format, and governance forums where progress is reviewed.*

Remediation progress is tracked through the following mechanism:

**Tracking Tool:** [e.g., SharePoint List / JIRA / ServiceNow / Designated Remediation Tracker spreadsheet located at [document repository path]]

**Update Frequency:** Deficiency owners must update the status of their assigned remediation actions on a [weekly / bi-weekly] basis.

**Reporting Cadence:**

| Report | Audience | Frequency | Format | Owner |
|---|---|---|---|---|
| Remediation Status Dashboard | QA Lead, IT Risk Manager | Weekly | Tracker update | Deficiency Owners |
| Remediation Progress Report | [CIO / IT Steering Committee] | Monthly | Formal Report | QA Lead |
| Board Remediation Update | [Board IT Risk Committee] | Quarterly | Committee Paper | [CIO / CRO] |
| Final Remediation Closure Report | [CIO, Board, BNM (if required)] | Upon plan completion | Formal Report | QA Lead |

### 10.2 Status Classification

*Define the status values used in the tracking mechanism to ensure consistency across all deficiency owners and reviewers.*

| Status | Definition |
|---|---|
| **Not Started** | Remediation actions have not yet commenced |
| **In Progress** | One or more remediation actions are actively underway |
| **Pending Verification** | Remediation actions completed; awaiting verification testing or QA review |
| **Verified** | Verification testing completed successfully; pending formal closure |
| **Closed** | Deficiency formally closed by QA Lead; evidence archived |
| **On Hold** | Remediation paused due to documented dependency or approved exception — escalation in place |
| **Overdue** | Target date passed without completion; escalation required |

### 10.3 Progress Dashboard Template

*This table represents the live progress dashboard to be maintained throughout the plan. Update this at each review cycle.*

| Deficiency ID | Severity | Owner | Target Date | Current Status | % Complete | Last Updated | Notes / Blockers |
|---|---|---|---|---|---|---|---|
| DEF-001 | Critical | [Name] | [Date] | Not Started | 0% | [Date] | [Any notes or blockers] |
| DEF-002 | High | [Name] | [Date] | Not Started | 0% | [Date] | |
| DEF-003 | High | [Name] | [Date] | Not Started | 0% | [Date] | |
| DEF-004 | Medium | [Name] | [Date] | Not Started | 0% | [Date] | |
| DEF-005 | Medium | [Name] | [Date] | Not Started | 0% | [Date] | |
| DEF-006 | Low | [Name] | [Date] | Not Started | 0% | [Date] | |
| **Overall Plan** | | QA Lead | [Date] | **Not Started** | **0%** | [Date] | |

### 10.4 Deficiency Closure Criteria

*Define the criteria that must be met before a deficiency can be formally closed. This prevents premature closure and ensures that remediation has been effective.*

A deficiency may only be closed when **all** of the following criteria are met:

1. **All remediation actions completed:** Every action in the deficiency's action plan has been executed and the deliverable produced.
2. **Verification testing passed:** The deficiency has been independently re-tested or verified, and the verification result confirms the deficiency no longer exists.
3. **Evidence archived:** All evidence of remediation (updated runbooks, test results, training records, vendor confirmations, etc.) has been archived in [document repository] with appropriate version control and access controls.
4. **QA Lead sign-off:** The QA Lead has reviewed the evidence and formally signed off on the deficiency closure.
5. **IT Risk acknowledgement:** The IT Risk Manager has acknowledged the closure for independent oversight purposes.

### 10.5 Quarterly Progress Review

*This section is updated each quarter to capture the progress status at each formal review cycle.*

#### Q[X] Review — [Quarter / Year]

| Review Date | Reviewer | Open Deficiencies | Closed Deficiencies | Overdue Deficiencies | Summary |
|---|---|---|---|---|---|
| [Date] | [QA Lead Name] | [Number] | [Number] | [Number] | [Brief narrative summary of overall progress, any significant achievements, and key risks] |

#### Q[X+1] Review — [Quarter / Year]

| Review Date | Reviewer | Open Deficiencies | Closed Deficiencies | Overdue Deficiencies | Summary |
|---|---|---|---|---|---|
| [Date] | [QA Lead Name] | [Number] | [Number] | [Number] | [Summary] |

---

## 11. Roles and Responsibilities

### 11.1 RACI Matrix

*The RACI matrix below defines the Responsible, Accountable, Consulted, and Informed parties for key activities within this remediation plan. Ensure all named parties are aware of their responsibilities.*

**Key:** **R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | QA Lead | Deficiency Owner | IT Risk Manager | CIO | CISO | Head of Dept | Internal Audit | Board ITRC | External Vendor |
|---|---|---|---|---|---|---|---|---|---|
| Approve Remediation Plan | A | C | C | A | C | I | I | I | — |
| Execute Remediation Actions | C | R | — | — | C | I | — | — | R (if applicable) |
| Update Progress Tracker | I | R | — | — | — | — | — | — | — |
| Review Progress (Weekly) | R | R | C | — | — | — | — | — | — |
| Prepare Monthly Progress Report | R | C | C | I | I | I | — | — | — |
| Escalate Overdue Deficiencies | R | I | R | A | I | I | — | I | — |
| Approve Timeline Extensions (Critical/High) | C | I | C | A | C | — | — | I | — |
| Approve Timeline Extensions (Medium/Low) | A | I | C | I | — | — | — | — | — |
| Conduct Verification Testing | R | C | C | — | C | — | I | — | — |
| Sign Off Deficiency Closure | A | I | C | — | — | — | — | — | — |
| Prepare Board Reporting | I | — | C | A | C | — | — | R (receive) | — |
| Issue Final Remediation Report | A | C | C | I | I | — | I | I | — |
| Archive Evidence | R | C | C | — | C | — | I | — | — |
| BNM Regulatory Correspondence | I | — | C | A | C | — | — | I | — |

---

## 12. Escalation and Exception Management

### 12.1 Escalation Triggers

*Define the conditions that automatically trigger an escalation. Escalation procedures protect the organization in the event of delays and demonstrate to regulators that governance is functioning.*

An escalation must be initiated when any of the following conditions occur:

| Trigger | Severity | Escalation Level | Timeframe to Escalate |
|---|---|---|---|
| Critical deficiency not on track to meet target date | Critical | CIO + IT Risk Manager + Board ITRC | Within 24 hours of identifying risk |
| High deficiency missed target date | High | QA Lead escalates to CIO; Board ITRC informed | Within 3 business days of missed date |
| Medium deficiency missed target date by > 30 days | Medium | QA Lead escalates to IT Risk Manager | Within 5 business days |
| Deficiency owner unavailable and no interim owner assigned | Any | QA Lead to identify alternate owner within 5 days | Immediately upon notification |
| Vendor fails to deliver committed remediation service | Any | QA Lead + Vendor Management + CIO | Within 3 business days |
| New or worsened deficiency discovered during verification | Any | Treated as new deficiency; added to register | Immediately |

### 12.2 Exception and Risk Acceptance Process

*If a deficiency cannot be remediated within the approved timeline, a formal exception and risk acceptance must be documented. This section defines that process.*

Where remediation cannot be completed within the approved timeline, the following exception process applies:

1. **Exception Request:** The Deficiency Owner submits a written Exception Request to the QA Lead, documenting:
   - The reason remediation cannot be completed on time
   - The revised target date
   - Interim risk mitigation controls in place during the extension period
   - An assessment of residual risk

2. **Risk Assessment:** IT Risk Manager assesses the residual risk and provides a recommendation.

3. **Approval Authority:**
   - Critical/High deficiency exceptions: [CIO / CRO] approval required; Board ITRC notified
   - Medium deficiency exceptions: QA Lead approval, IT Risk Manager concurrence
   - Low deficiency exceptions: QA Lead approval

4. **Documentation:** All approved exceptions are recorded in **Appendix B — Exception Register** and included in the next management/board report.

5. **BNM Notification:** Where a Critical deficiency exception may result in a material breach of RMiT requirements, [CIO / Compliance] must assess whether proactive notification to BNM is required under applicable reporting obligations.

---

## 13. Review and Approval

### 13.1 Document Review Schedule

*This document is subject to formal review at the frequency stated below, or whenever a material change in deficiency status occurs.*

| Review Event | Trigger | Reviewer | Approver |
|---|---|---|---|
| Scheduled Quarterly Review | Quarterly review cycle | QA Lead + IT Risk Manager | [CIO / ITSC] |
| Material Change Review | Significant change in deficiency status, scope, or timeline | QA Lead | [CIO] |
| Plan Closure Review | All deficiencies closed | QA Lead + IT Risk Manager + Internal Audit | [CIO + Board ITRC] |
| Regulatory Request Review | BNM or auditor request | QA Lead + Compliance | [CIO / CRO] |

### 13.2 Version History

*Maintain a complete version history of this document to support audit trail requirements.*

| Version | Date | Author | Description of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document — issued following DR Test [DR-EX-2025-Q3] | [Approver Name] |
| 1.1 | [Date] | [Author Name] | [Description of changes, e.g., DEF-001 target date extended; updated resource requirements] | [Approver Name] |
| 1.2 | [Date] | [Author Name] | [Description] | [Approver Name] |
| [X.X] | [Date] | [Author Name] | Final version — all deficiencies closed; plan closed | [Approver Name] |

### 13.3 Approval Sign-Off

*All named approvers must sign this document before it enters force. Digital signatures or wet signatures are acceptable subject to [Organization Name]'s document management policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead (Plan Owner) | [Full Name] | __________________ | [Date] |
| IT Risk Manager | [Full Name] | __________________ | [Date] |
| Chief Information Officer | [Full Name] | __________________ | [Date] |
| Chief Risk Officer | [Full Name] | __________________ | [Date] |
| Head of Compliance | [Full Name] | __________________ | [Date] |
| Board IT Risk Committee Chair *(if required)* | [Full Name] | __________________ | [Date] |

---

## 14. References

*List all regulatory documents, internal policies, and standards referenced in or relevant to this remediation plan.*

### 14.1 Regulatory References

| Reference | Document Title | Issuing Authority | Relevant Clause(s) | Date |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 10.32 (DR Testing Deficiency Remediation) | [Issue Date] |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clauses 10.28–10.31 (DR Planning and Testing) | [Issue Date] |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 10.1–10.10 (Technology Risk Governance) | [Issue Date] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 — Security Principle | 2010 (Amended [Year]) |
| NACSA | [Relevant NACSA Guideline Title] | National Cyber Security Agency | [Relevant Section] | [Date] |
| [Other] | [Title] | [Authority] | [Section] | [Date] |

### 14.2 Internal Document References

| Document ID | Document Title | Version | Location |
|---|---|---|---|
| [DR-PLAN-REF] | [Organization Name] Disaster Recovery Plan | [Version] | [Repository Path] |
| [BCP-REF] | [Organization Name] Business Continuity Plan | [Version] | [Repository Path] |
| [DR-RPT-REF] | DR Test Report — [DR-EX-2025-Q3] | [Version] | [Repository Path] |
| [ITGOV-POL-REF] | IT Governance Policy | [Version] | [Repository Path] |
| [RISK-POL-REF] | Technology Risk Management Policy | [Version] | [Repository Path] |
| [BCM-POL-REF] | Business Continuity Management Policy | [Version] | [Repository Path] |
| [VENDOR-MGT-REF] | Third Party / Vendor Management Policy | [Version] | [Repository Path] |

---

## 15. Appendices

### Appendix A — Root Cause Analysis Reports

*This appendix contains or references the formal Root Cause Analysis (RCA) reports produced for each deficiency. RCA reports must be completed for all Critical and High severity deficiencies.*

| Deficiency ID | RCA Reference | RCA Author | RCA Date | Location |
|---|---|---|---|---|
| DEF-001 | [RCA-001] | [Name] | [Date] | [Repository Path] |
| DEF-002 | [RCA-002] | [Name] | [Date] | [Repository Path] |
| DEF-003 | [RCA-003] | [Name] | [Date] | [Repository Path] |

> *[Attach or hyperlink RCA documents here, or retain in the designated document repository at [path].]*

---

### Appendix B — Exception Register

*This appendix documents all approved exceptions to remediation timelines or scope. An exception must be formally approved before the original deadline passes.*

| Exception ID | Deficiency ID | Exception Type | Reason for Exception | Original Deadline | Revised Deadline | Interim Controls | Approved By | Approval Date | Residual Risk Rating |
|---|---|---|---|---|---|---|---|---|---|
| EXC-001 | [DEF-XXX] | Timeline Extension | [Reason] | [Original Date] | [New Date] | [Interim controls in place] | [Approver Name] | [Date] | [Low / Medium / High] |

---

### Appendix C — Verification Test Results

*This appendix records the outcomes of verification testing conducted to confirm that remediation actions have been effective. Each closed deficiency must have a corresponding verification record.*

| Deficiency ID | Verification Test Reference | Test Date | Test Method | Test Conducted By | Observed By | Result | Evidence Reference |
|---|---|---|---|---|---|---|---|
| DEF-001 | [VRFY-001] | [Date] | [e.g., Targeted failover test / Configuration review / Document review] | [Name] | [QA Lead / IT Risk / Internal Audit] | [Pass / Fail] | [Repository Path] |
| DEF-002 | [VRFY-002] | [Date] | [Method] | [Name] | [Observer] | [Pass / Fail] | [Repository Path] |
| DEF-003 | [VRFY-003] | [Date] | [Method] | [Name] | [Observer] | [Pass / Fail] | [Repository Path] |

---

### Appendix D — Evidence Index

*Maintain a complete index of all evidence documents gathered during the remediation process. This index is critical for regulatory examination and internal audit purposes.*

| Evidence ID | Deficiency ID | Evidence Type | Description | Version / Date | Author / Source | Location | Retention Period |
|---|---|---|---|---|---|---|---|
| EVD-001 | DEF-001 | Updated Configuration | Revised failover script — version [X.X] | [Date] | [Name] | [Path] | [7 years / Per policy] |
| EVD-002 | DEF-001 | Test Report | Unit test results for revised failover script | [Date] | [Name] | [Path] | [7 years] |
| EVD-003 | DEF-002 | Revised Runbook | DR Runbook v[X.X] — updated procedures for DR site operators | [Date] | [Name] | [Path] | [7 years] |
| EVD-004 | DEF-005 | Training Records | Attendance records — DR awareness training sessions [Dates] | [Date] | [Name] | [Path] | [7 years] |
| EVD-005 | ALL | Approval Records | QA Lead sign-off memos for each closed deficiency | [Various] | QA Lead | [Path] | [7 years] |

---

### Appendix E — Communication Log

*Record all material communications related to the remediation plan, including escalations, vendor correspondence, and regulatory communications.*

| Date | Communication Type | From | To | Subject / Summary | Reference |
|---|---|---|---|---|---|
| [Date] | Internal Escalation | QA Lead | CIO | [e.g., DEF-001 at risk of missing deadline — approval for extension requested] | [Email Ref] |
| [Date] | Vendor Correspondence | [Name] | [Vendor Name] | [e.g., Confirmation of bandwidth upgrade schedule] | [Email Ref] |
| [Date] | Management Reporting | QA Lead | IT Steering Committee | [e.g., Monthly remediation progress update — [Month]] | [Report Ref] |
| [Date] | Regulatory | Compliance | BNM | [e.g., Proactive notification of Critical deficiency — if applicable] | [Ref] |

---

### Appendix F — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and primary financial services regulator of Malaysia |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for licensed financial institutions |
| **DR** | Disaster Recovery — the set of policies, tools, and procedures to enable the recovery of critical technology systems following a disruption |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a system or process following a disruption |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework |
| **Deficiency** | A gap, failure, or shortcoming identified during DR testing that prevents the organization from achieving its DR objectives |
| **Remediation** | The set of corrective actions taken to address and resolve an identified deficiency |
| **Verification Testing** | Testing conducted after remediation to confirm that corrective actions have been effective |
| **QA Lead** | Quality Assurance Lead — the individual designated as the owner of this remediation plan |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **NACSA** | National Cyber Security Agency — the national agency responsible for cybersecurity policy and coordination in Malaysia |
| **Board ITRC** | Board IT Risk Committee — the board-level committee responsible for oversight of technology and IT risk |
| **ITSC** | IT Steering Committee — senior management committee responsible for IT governance |

---

*End of Document*

---

**Document Control:** This document is subject to [Organization Name]'s Document Management Policy. The master copy is maintained at [Document Repository Path]. Printed copies are uncontrolled unless stamped with a controlled copy reference.