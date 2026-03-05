# Exit Plan Review Records

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be distributed outside of [Organization Name] without prior written authorization from the document owner. Physical and digital copies must be handled in accordance with [Organization Name]'s Information Security Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Objectives and Scope of Exit Plan Review](#3-objectives-and-scope-of-exit-plan-review)
4. [Actions and Milestones](#4-actions-and-milestones)
5. [Accountable Owners](#5-accountable-owners)
6. [Vendor Risk Tiering Criteria](#6-vendor-risk-tiering-criteria)
7. [Due Diligence Checklist](#7-due-diligence-checklist)
8. [SLA and KPI Definitions](#8-sla-and-kpi-definitions)
9. [Exit Strategy Requirements](#9-exit-strategy-requirements)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

This document records the annual review and/or testing of vendor exit strategies maintained by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically under **Clause 10.49**. Exit plan review records serve as primary evidence that [Organization Name] maintains current, tested, and executable strategies for the orderly transition away from technology service providers, whether due to vendor insolvency, service degradation, contract termination, or regulatory direction.

### 1.1 Purpose

The purpose of this document is to:

- Record the formal annual review of all active vendor exit plans within scope;
- Document the outcomes of exit plan testing activities, including simulation exercises and tabletop walkthroughs;
- Identify gaps, remediation actions, and improvements arising from the review cycle;
- Provide audit-ready evidence of compliance with BNM RMiT Clause 10.49 and related outsourcing risk management obligations;
- Confirm that exit strategies remain operationally viable and aligned with current vendor arrangements, business continuity requirements, and technology architecture.

### 1.2 Scope

*Describe the boundaries of this review — which vendors, contracts, systems, and business functions are covered. Indicate any exclusions and the rationale.*

This review covers the following:

- **In-scope vendors:** All technology service providers classified as Tier 1 (Critical) and Tier 2 (Significant) under [Organization Name]'s Vendor Risk Tiering Framework, as listed in **Appendix A**.
- **In-scope systems and services:** [List of systems, platforms, or services covered, e.g., core banking system, cloud infrastructure, payment processing, cybersecurity operations]
- **In-scope contracts:** All outsourcing agreements with a remaining term greater than [X] months or with automatic renewal clauses.
- **Excluded from scope:** [List exclusions and rationale, e.g., low-risk Tier 3 vendors with readily available market substitutes, intra-group arrangements reviewed under separate governance]
- **Review period:** [DD Month YYYY] to [DD Month YYYY]
- **Review conducted by:** [QA Lead Name], [Department]
- **Review date:** [DD Month YYYY]

---

## 2. Regulatory Context

### 2.1 Governing Framework

This document is prepared in compliance with the following regulatory instruments:

| Instrument | Issuing Authority | Relevant Provisions |
|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 10.49 — Exit Planning |
| Guidelines on Outsourcing | Bank Negara Malaysia (BNM) | [Relevant clauses on exit management] |
| Personal Data Protection Act 2010 (PDPA) | [Ministry / Commissioner] | Data return and destruction obligations upon exit |
| [Other applicable instruments] | [Authority] | [Clauses] |

### 2.2 Specific Regulatory Requirements

*Summarize the key obligations imposed by BNM RMiT Clause 10.49 that this document is designed to evidence. Reference the exact policy text where possible.*

Under **BNM RMiT Clause 10.49**, [Organization Name] is required to:

- Develop and maintain documented exit plans for material technology service providers;
- Ensure exit plans are reviewed and tested at least **annually** or following material changes to the vendor arrangement, technology environment, or risk profile;
- Validate that exit plans are executable within timeframes that do not impair operational continuity or regulatory compliance;
- Address data portability, knowledge transfer, staff redeployment, and transition to alternative providers or in-house operations;
- Report material deficiencies identified during exit plan reviews to senior management and the Board Risk Committee, as applicable.

### 2.3 Relationship to Other Policies and Frameworks

This document interfaces with the following internal policies and frameworks:

- [Organization Name] Outsourcing Risk Management Policy
- [Organization Name] Business Continuity Management (BCM) Framework
- [Organization Name] Information Security Policy
- [Organization Name] Third-Party Risk Management (TPRM) Framework
- [Organization Name] Data Governance Policy

---

## 3. Objectives and Scope of Exit Plan Review

### 3.1 Review Objectives

*State the specific objectives for this annual review cycle. These should be measurable and directly tied to regulatory obligations and organizational risk appetite.*

The objectives of this review cycle are:

1. **Completeness verification:** Confirm that a documented exit plan exists for every in-scope vendor and that all mandatory sections are present and populated.
2. **Currency assessment:** Validate that exit plans reflect the current state of vendor arrangements, including any contract amendments, service changes, subcontractor updates, or technology migrations that occurred during the review period.
3. **Executability testing:** Test selected exit plans (see Section 4) to confirm that transition activities can be executed within defined Recovery Time Objectives (RTOs) and without material degradation of service to customers or internal stakeholders.
4. **Gap identification:** Identify deficiencies in existing exit plans and assign remediation owners and target dates.
5. **Lessons learned integration:** Incorporate findings from any actual vendor transitions, near-miss events, or business continuity exercises that occurred during the review period.
6. **Governance confirmation:** Confirm that exit plans have been reviewed and acknowledged by accountable business owners and senior management.

### 3.2 Review Methodology

*Describe the approach used to conduct the review — document review, interviews, workshops, simulation exercises, etc.*

The following review methodologies were applied during this cycle:

| Methodology | Description | Vendors / Plans Covered |
|---|---|---|
| Document Review | Line-by-line review of existing exit plan documentation against the Exit Plan Minimum Standards Checklist (Appendix B) | All Tier 1 and Tier 2 vendors |
| Tabletop Exercise | Facilitated scenario walkthrough with key stakeholders simulating exit from a designated vendor | [Vendor Name(s)] |
| Technical Feasibility Assessment | IT and infrastructure team assessment of data migration, system decommissioning, and alternative platform activation | [Vendor Name(s)] |
| Contract Review | Legal and procurement review of exit provisions, notice periods, data return obligations, and liquidated damages clauses | All in-scope contracts |
| Stakeholder Interviews | Structured interviews with business unit owners to validate operational dependencies and transition readiness | [Business Units] |

### 3.3 Exit Trigger Scenarios Reviewed

*List the exit scenarios considered during this review. These should encompass both voluntary and involuntary exits.*

The following exit trigger scenarios were reviewed against each in-scope vendor's exit plan:

- [ ] Voluntary contract termination at expiry
- [ ] Early termination for cause (vendor breach of contract or SLA)
- [ ] Early termination for convenience (strategic decision)
- [ ] Vendor financial distress, insolvency, or administration
- [ ] Regulatory direction to exit (BNM or other authority)
- [ ] Vendor acquisition or change of control
- [ ] Cybersecurity incident or data breach attributable to vendor
- [ ] Force majeure or catastrophic service failure
- [ ] Geopolitical or sanctions-related restrictions
- [ ] [Other scenario specific to [Organization Name]]

---

## 4. Actions and Milestones

### 4.1 Review Cycle Activity Log

*Record all review activities undertaken during this annual cycle, including planned and actual completion dates. This log serves as the primary evidence trail.*

| # | Activity | Responsible Party | Planned Date | Actual Date | Status | Notes |
|---|---|---|---|---|---|---|
| 1 | Initiation of annual exit plan review cycle | QA Lead | [Date] | [Date] | [Complete / In Progress / Overdue] | |
| 2 | Compilation of in-scope vendor register | Third-Party Risk Manager | [Date] | [Date] | [Status] | |
| 3 | Distribution of exit plan templates to business owners | QA Lead | [Date] | [Date] | [Status] | |
| 4 | Document review — Tier 1 vendors | QA Lead | [Date] | [Date] | [Status] | |
| 5 | Document review — Tier 2 vendors | [Reviewer Name] | [Date] | [Date] | [Status] | |
| 6 | Contract review with Legal | [Legal Counsel Name] | [Date] | [Date] | [Status] | |
| 7 | Tabletop exercise — [Vendor Name] | QA Lead + Business Owner | [Date] | [Date] | [Status] | |
| 8 | Technical feasibility assessment | IT Infrastructure Lead | [Date] | [Date] | [Status] | |
| 9 | Gap analysis and findings consolidation | QA Lead | [Date] | [Date] | [Status] | |
| 10 | Remediation action plan development | QA Lead + Business Owners | [Date] | [Date] | [Status] | |
| 11 | Draft report preparation | QA Lead | [Date] | [Date] | [Status] | |
| 12 | Management review and sign-off | [Management Representative] | [Date] | [Date] | [Status] | |
| 13 | Submission to Board Risk Committee / [Governance Body] | [CRO / Risk Manager] | [Date] | [Date] | [Status] | |
| 14 | Archival of review records | Document Control | [Date] | [Date] | [Status] | |

### 4.2 Remediation Action Plan

*Record all findings from this review cycle that require remediation. Each finding must have a clear owner, target date, and priority rating.*

| Finding ID | Vendor | Finding Description | Risk Rating | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| EP-[YYYY]-001 | [Vendor Name] | [Description of gap or deficiency] | [Critical / High / Medium / Low] | [Description of remediation steps] | [Name / Role] | [Date] | [Open / In Progress / Closed] |
| EP-[YYYY]-002 | [Vendor Name] | [Description of gap or deficiency] | [Rating] | [Remediation steps] | [Name / Role] | [Date] | [Status] |
| EP-[YYYY]-003 | [Vendor Name] | [Description of gap or deficiency] | [Rating] | [Remediation steps] | [Name / Role] | [Date] | [Status] |
| EP-[YYYY]-004 | [Vendor Name] | [Description of gap or deficiency] | [Rating] | [Remediation steps] | [Name / Role] | [Date] | [Status] |

### 4.3 Milestones Summary

*Provide a high-level milestone summary for presentation to senior management and governance committees.*

| Milestone | Target Date | Actual / Forecast Date | Status |
|---|---|---|---|
| Review cycle initiated | [Date] | [Date] | [Status] |
| All Tier 1 exit plans reviewed | [Date] | [Date] | [Status] |
| All Tier 2 exit plans reviewed | [Date] | [Date] | [Status] |
| Tabletop exercise(s) completed | [Date] | [Date] | [Status] |
| Gap analysis completed | [Date] | [Date] | [Status] |
| Remediation plan approved | [Date] | [Date] | [Status] |
| Annual review report finalized | [Date] | [Date] | [Status] |
| Board / committee submission | [Date] | [Date] | [Status] |

---

## 5. Accountable Owners

### 5.1 Vendor Exit Plan Ownership Register

*Each in-scope vendor must have a designated business owner who is accountable for maintaining and executing the exit plan. This register must be kept current.*

| Vendor Name | Service Category | Tier | Business Owner | Department | Exit Plan Document Reference | Last Updated |
|---|---|---|---|---|---|---|
| [Vendor Name] | [e.g., Core Banking Platform] | Tier 1 | [Name, Title] | [Department] | [Document ID / Location] | [Date] |
| [Vendor Name] | [e.g., Cloud Infrastructure] | Tier 1 | [Name, Title] | [Department] | [Document ID / Location] | [Date] |
| [Vendor Name] | [e.g., Cybersecurity SOC Services] | Tier 2 | [Name, Title] | [Department] | [Document ID / Location] | [Date] |
| [Vendor Name] | [e.g., Payment Gateway] | Tier 2 | [Name, Title] | [Department] | [Document ID / Location] | [Date] |
| [Vendor Name] | [e.g., Data Analytics Platform] | Tier 2 | [Name, Title] | [Department] | [Document ID / Location] | [Date] |

### 5.2 Review Participation Register

*Record all individuals who participated in the annual review activities, including their role in the review.*

| Name | Title / Role | Department | Review Activities Participated | Date(s) |
|---|---|---|---|---|
| [Name] | QA Lead | [Department] | Review coordination, document review, tabletop exercise facilitation, report preparation | [Dates] |
| [Name] | [Title] | [Department] | [Activities] | [Dates] |
| [Name] | [Title] | [Department] | [Activities] | [Dates] |
| [Name] | [Title] | Legal / Compliance | Contract review | [Dates] |
| [Name] | [Title] | IT Infrastructure | Technical feasibility assessment | [Dates] |
| [Name] | [Title] | [Department] | Tabletop exercise — [Vendor Name] | [Dates] |

### 5.3 Escalation and Reporting Chain

*Define the escalation and reporting hierarchy for exit plan review findings and execution decisions.*

| Level | Role | Responsibility |
|---|---|---|
| Level 1 — Operational | QA Lead | Day-to-day review coordination; findings documentation; remediation tracking |
| Level 2 — Management | [Head of Technology Risk / CTO / COO] | Review and approval of annual review report; sign-off on remediation plans |
| Level 3 — Governance | [CRO / Chief Risk Officer] | Submission to governance committees; escalation of critical findings |
| Level 4 — Board | [Board Risk Committee / Audit Committee] | Oversight of material exit risk exposures; approval of critical remediation spend |
| Regulatory | Bank Negara Malaysia | Notification where required under RMiT or outsourcing guidelines |

---

## 6. Vendor Risk Tiering Criteria

### 6.1 Tiering Framework Overview

*Explain the rationale and methodology for vendor risk tiering. Tiering determines the depth of exit planning required and the frequency of review.*

[Organization Name] applies a risk-based tiering framework to categorize technology service providers according to the materiality of the services they provide and the consequential impact of an unplanned exit. Tier classification drives the minimum requirements for exit plan documentation, testing frequency, and governance oversight.

### 6.2 Tier Classification Criteria

| Criterion | Tier 1 — Critical | Tier 2 — Significant | Tier 3 — Standard |
|---|---|---|---|
| **Operational dependency** | Core to daily operations; no immediate alternative | Important but alternatives exist within 30 days | Routine; alternatives readily available |
| **Customer impact** | Direct, material impact on customers or financial services delivery | Indirect or limited customer impact | Negligible customer impact |
| **Data sensitivity** | Processes or stores customer PII, financial data, or regulated data | Processes internal or limited sensitive data | Non-sensitive data only |
| **Regulatory classification** | Classified as material outsourcing under BNM guidelines | Notable but not formally material outsourcing | Not classified as outsourcing |
| **Financial exposure** | Contract value exceeds MYR [Amount] per annum | Contract value MYR [Amount] – MYR [Amount] | Contract value below MYR [Amount] |
| **Recovery Time Objective (RTO)** | RTO < 4 hours | RTO 4–24 hours | RTO > 24 hours |
| **Concentration risk** | Single provider; no credible substitute | Limited provider market | Competitive market with multiple substitutes |
| **Exit plan testing requirement** | Full tabletop exercise annually; technical test every [X] years | Tabletop exercise annually; document review semi-annually | Document review annually |
| **Board / committee reporting** | Mandatory reporting | Management-level reporting | Operational reporting only |

### 6.3 Tier Classification Register (Current Period)

*Record the tier classification assigned to each vendor during this review cycle, including any changes from the prior period.*

| Vendor Name | Service | Prior Tier | Current Tier | Change | Rationale for Change | Classification Date | Approved By |
|---|---|---|---|---|---|---|---|
| [Vendor Name] | [Service] | Tier [X] | Tier [X] | [Upgraded / Downgraded / No Change] | [Rationale] | [Date] | [Name] |
| [Vendor Name] | [Service] | Tier [X] | Tier [X] | [Change] | [Rationale] | [Date] | [Name] |
| [Vendor Name] | [Service] | Tier [X] | Tier [X] | [Change] | [Rationale] | [Date] | [Name] |

### 6.4 Concentration Risk Assessment

*Identify any areas where [Organization Name] is exposed to concentration risk across vendors — e.g., multiple critical vendors using the same subcontractor, cloud region, or technology platform.*

| Concentration Risk Area | Affected Vendors | Aggregate Exposure | Risk Rating | Mitigation Measure |
|---|---|---|---|---|
| [e.g., Single cloud region dependency] | [Vendor A, Vendor B] | [Description] | [High / Medium / Low] | [Mitigation] |
| [e.g., Common subcontractor] | [Vendor C, Vendor D] | [Description] | [Rating] | [Mitigation] |
| [e.g., Single payment network dependency] | [Vendor E] | [Description] | [Rating] | [Mitigation] |

---

## 7. Due Diligence Checklist

### 7.1 Exit Plan Minimum Standards Checklist

*This checklist must be completed for each in-scope vendor. A separate completed checklist must be retained as supporting evidence for each vendor reviewed.*

*For each item, record the status as: ✅ Compliant | ⚠️ Partial | ❌ Non-Compliant | N/A Not Applicable*

**Vendor:** [Vendor Name] | **Tier:** [Tier] | **Reviewer:** [Name] | **Review Date:** [Date]

#### 7.1.1 Documentation Completeness

| # | Requirement | Status | Evidence Reference | Comments |
|---|---|---|---|---|
| 1.1 | Exit plan document exists and is version-controlled | | | |
| 1.2 | Exit plan covers all material services provided by this vendor | | | |
| 1.3 | Exit plan has been reviewed within the last 12 months | | | |
| 1.4 | Exit plan has a designated business owner | | | |
| 1.5 | Exit triggers are clearly defined (all scenarios in Section 3.3 addressed) | | | |
| 1.6 | Exit plan is stored in an accessible, secure location | | | |
| 1.7 | A current version of the exit plan is maintained offline / independently of the vendor | | | |

#### 7.1.2 Transition Planning

| # | Requirement | Status | Evidence Reference | Comments |
|---|---|---|---|---|
| 2.1 | Alternative service provider(s) identified and assessed | | | |
| 2.2 | Insourcing option assessed and documented (feasibility, cost, timeline) | | | |
| 2.3 | Transition timeline documented with defined phases and milestones | | | |
| 2.4 | Recovery Time Objective (RTO) defined and validated | | | |
| 2.5 | Transition costs estimated (including one-off exit costs) | | | |
| 2.6 | Resource requirements for transition identified (staff, skills, budget) | | | |
| 2.7 | Customer communication plan included | | | |
| 2.8 | Regulatory notification requirements identified (BNM, SC, etc.) | | | |

#### 7.1.3 Data and Knowledge Management

| # | Requirement | Status | Evidence Reference | Comments |
|---|---|---|---|---|
| 3.1 | Data inventory maintained (all data held by or processed by vendor) | | | |
| 3.2 | Data return process documented (format, timeline, method) | | | |
| 3.3 | Data destruction / deletion confirmation process documented | | | |
| 3.4 | Intellectual property (IP) and licensing arrangements reviewed | | | |
| 3.5 | Knowledge transfer plan exists (documentation, training, handover) | | | |
| 3.6 | Encryption keys and credential recovery procedures documented | | | |
| 3.7 | Audit log and compliance record retrieval process documented | | | |

#### 7.1.4 Contractual Provisions

| # | Requirement | Status | Evidence Reference | Comments |
|---|---|---|---|---|
| 4.1 | Contract contains explicit exit provisions (notice period, transition obligations) | | | |
| 4.2 | Data return and destruction obligations contractually specified | | | |
| 4.3 | Termination assistance obligations included in contract | | | |
| 4.4 | Step-in rights or escrow arrangements in place (where applicable) | | | |
| 4.5 | Subcontractor exit obligations flowed down contractually | | | |
| 4.6 | Liquidated damages or penalty provisions reviewed | | | |

#### 7.1.5 Operational Readiness

| # | Requirement | Status | Evidence Reference | Comments |
|---|---|---|---|---|
| 5.1 | Dependencies on vendor documented (systems, APIs, integrations) | | | |
| 5.2 | Staff trained on exit procedures | | | |
| 5.3 | Communication plan for internal stakeholders during exit | | | |
| 5.4 | Exit plan tested or exercised within the required period | | | |
| 5.5 | Business Continuity Plan (BCP) updated to reflect exit scenarios | | | |
| 5.6 | IT decommissioning plan documented | | | |

### 7.2 Checklist Summary — All Vendors

| Vendor | Tier | Total Items | Compliant | Partial | Non-Compliant | N/A | Overall Status |
|---|---|---|---|---|---|---|---|
| [Vendor Name] | 1 | [#] | [#] | [#] | [#] | [#] | [Pass / Requires Action] |
| [Vendor Name] | 1 | [#] | [#] | [#] | [#] | [#] | [Pass / Requires Action] |
| [Vendor Name] | 2 | [#] | [#] | [#] | [#] | [#] | [Pass / Requires Action] |
| [Vendor Name] | 2 | [#] | [#] | [#] | [#] | [#] | [Pass / Requires Action] |
| **Total** | | [#] | [#] | [#] | [#] | [#] | |

---

## 8. SLA and KPI Definitions

### 8.1 Purpose of SLA/KPI Review in Exit Planning

*Explain why SLA and KPI monitoring is integral to exit planning — deteriorating vendor performance is a leading indicator of potential exit and must trigger exit plan activation thresholds.*

SLA and KPI performance data serves a dual function within the exit planning framework:

1. **Early warning indicators:** Sustained or critical SLA breaches may trigger the activation of exit plan contingency measures, escalation to management, or initiation of formal exit proceedings.
2. **Transition benchmarks:** Defined SLAs and KPIs establish the performance baseline that replacement vendors or in-house operations must meet or exceed upon transition.

### 8.2 SLA Definitions — In-Scope Vendors

*Complete a table for each Tier 1 vendor. Tier 2 vendors may use an abbreviated format.*

**Vendor:** [Vendor Name] | **Service:** [Service Description]

| SLA Metric | Definition | Target | Measurement Period | Measurement Method | Current Performance | Threshold for Exit Escalation |
|---|---|---|---|---|---|---|
| Service Availability | [e.g., % uptime of production system] | [e.g., 99.9%] | Monthly | [e.g., Vendor-reported, independently verified] | [e.g., 99.95%] | [e.g., < 99.5% for 2 consecutive months] |
| Incident Response Time | [e.g., Time from incident report to vendor acknowledgement] | [e.g., ≤ 15 minutes (P1)] | Per incident | [Method] | [Current] | [Threshold] |
| Incident Resolution Time | [e.g., Time from acknowledgement to resolution] | [e.g., ≤ 4 hours (P1)] | Per incident | [Method] | [Current] | [Threshold] |
| Data Processing Latency | [e.g., Transaction processing time] | [e.g., ≤ 2 seconds (95th percentile)] | Daily | [Method] | [Current] | [Threshold] |
| Patch and Update Compliance | [e.g., % of critical patches applied within 30 days] | [e.g., 100%] | Monthly | [Method] | [Current] | [Threshold] |
| Security Incident Notification | [e.g., Time from vendor detection to [Organization Name] notification] | [e.g., ≤ 1 hour (critical)] | Per incident | [Method] | [Current] | [Threshold] |
| [Other metric] | [Definition] | [Target] | [Period] | [Method] | [Current] | [Threshold] |

### 8.3 KPI Performance Summary — Review Period

*Summarize KPI performance across all in-scope vendors for the review period. Flag any vendors with sustained underperformance.*

| Vendor | Service | KPI | Target | Average Performance (Review Period) | Minimum Performance (Review Period) | SLA Breaches (Count) | Performance Flag |
|---|---|---|---|---|---|---|---|
| [Vendor Name] | [Service] | [KPI] | [Target] | [Average] | [Minimum] | [#] | [Green / Amber / Red] |
| [Vendor Name] | [Service] | [KPI] | [Target] | [Average] | [Minimum] | [#] | [Flag] |
| [Vendor Name] | [Service] | [KPI] | [Target] | [Average] | [Minimum] | [#] | [Flag] |

### 8.4 SLA Breach Log — Review Period

*Record all SLA breaches during the review period and the actions taken. Repeated or unresolved breaches must be referenced in the exit planning risk assessment.*

| Date | Vendor | SLA Metric | Actual Performance | SLA Target | Breach Severity | Root Cause | Vendor Response | Escalation Taken | Resolved |
|---|---|---|---|---|---|---|---|---|---|
| [Date] | [Vendor] | [Metric] | [Actual] | [Target] | [P1/P2/P3] | [Root cause] | [Response] | [Yes/No] | [Yes/No - Date] |
| [Date] | [Vendor] | [Metric] | [Actual] | [Target] | [Severity] | [Root cause] | [Response] | [Yes/No] | [Yes/No - Date] |

### 8.5 Exit Activation Thresholds

*Define the conditions under which SLA/KPI deterioration triggers formal exit plan activation or escalation to management.*

| Threshold Level | Criteria | Required Action | Escalation To | Timeframe |
|---|---|---|---|---|
| **Watch** | [e.g., Single SLA breach in any critical metric; KPI flag turns Amber] | Increase monitoring frequency; notify vendor relationship manager | Vendor Relationship Manager | Within [X] business days |
| **Concern** | [e.g., 2 SLA breaches in 3 months; KPI flag remains Amber for 2 months] | Formal vendor improvement notice; initiate preliminary exit readiness assessment | Head of Technology / CTO | Within [X] business days |
| **Escalation** | [e.g., 3+ SLA breaches in 3 months; KPI flag turns Red; vendor insolvency risk identified] | Activate exit plan; convene exit management task force | ExCo / Board Risk Committee | Within [X] business days |
| **Immediate Exit** | [e.g., Regulatory direction; critical security breach; vendor enters administration] | Execute exit plan immediately | CEO / CRO / Regulator | Immediate |

---

## 9. Exit Strategy Requirements

### 9.1 Mandatory Exit Strategy Components

*Every exit plan for an in-scope vendor must include the following components. This section defines the minimum requirements that QA Lead verifies during the annual review.*

Each vendor exit strategy must address the following mandatory components:

#### 9.1.1 Exit Governance Structure

- [ ] Defined Exit Management Committee or equivalent decision-making body
- [ ] Named Exit Programme Manager
- [ ] Escalation and decision authority matrix
- [ ] Communication and reporting cadence during exit execution
- [ ] Regulatory notification and liaison responsibilities

#### 9.1.2 Exit Timeline and Phases

*Exit plans must define phased transition timelines. The following is the minimum phase structure required:*

| Phase | Name | Key Activities | Minimum Duration | Maximum Duration |
|---|---|---|---|---|
| Phase 0 | Preparation and Decision | Exit trigger confirmed; governance activated; baseline assessment completed | [X] days | [X] days |
| Phase 1 | Stabilization | Existing service maintained; vendor notified; regulatory obligations assessed; alternative provider selected | [X] weeks | [X] weeks |
| Phase 2 | Parallel Operation | New provider onboarded; parallel running commenced; data migration initiated; staff trained | [X] weeks | [X] weeks |
| Phase 3 | Transition | Cutover to new provider or in-house; legacy service decommissioned; data return/destruction confirmed | [X] weeks | [X] weeks |
| Phase 4 | Post-Exit Review | Lessons learned documented; documentation updated; regulatory reporting completed; exit formally closed | [X] weeks | [X] weeks |

#### 9.1.3 Alternative Provider Requirements

| Requirement | Description | Current Status |
|---|---|---|
| Alternative provider identified | At least one viable alternative service provider has been identified and assessed | [Identified / Not Identified] |
| Due diligence completed | Due diligence on alternative provider(s) is current (within [X] months) | [Complete / Pending] |
| Commercial terms indicatively agreed | Heads of terms or indicative commercial framework in place | [In Place / Not in Place] |
| Technical compatibility assessed | Compatibility of alternative provider's platform with [Organization Name]'s architecture confirmed | [Confirmed / Under Assessment] |
| Regulatory requirements met | Alternative provider meets applicable BNM and regulatory requirements | [Confirmed / Under Assessment] |
| Transition lead time confirmed | The time required to mobilize the alternative provider has been validated | [Confirmed — [X] days] |

#### 9.1.4 Data Management Upon Exit

*This subsection must be reviewed by the Data Protection Officer or equivalent in addition to the QA Lead.*

| Requirement | Contractual Basis | Process Owner | Verified |
|---|---|---|---|
| All [Organization Name] data returned within [X] days of exit | [Contract clause reference] | [Data Owner / IT] | [Yes / No] |
| Data returned in agreed format and medium | [Clause reference] | [Data Owner / IT] | [Yes / No] |
| Vendor confirms secure deletion of all [Organization Name] data | [Clause reference] | [Legal / Compliance] | [Yes / No] |
| Third-party certification of data destruction obtained (where required) | [Clause reference] | [Legal / Compliance] | [Yes / No] |
| Audit logs and compliance records retrieved and archived | [Clause reference] | [IT / Compliance] | [Yes / No] |
| Encryption keys transferred or revoked | [Clause reference] | [IT Security] | [Yes / No] |
| PDPA obligations upon vendor exit discharged | PDPA 2010 | [DPO / Compliance] | [Yes / No] |

### 9.2 Exit Strategy Review Outcomes — Vendor Summary

*Summarize the exit strategy review outcome for each in-scope vendor. This table provides a single-page overview for management.*

| Vendor | Tier | Exit Strategy Status | Key Gaps | Risk Rating | Last Test Date | Test Type | Test Result | Next Scheduled Test |
|---|---|---|---|---|---|---|---|---|
| [Vendor Name] | 1 | [Adequate / Requires Update / Critical Gap] | [Summary of key gaps] | [High/Med/Low] | [Date] | [Tabletop / Technical] | [Pass/Fail/Partial] | [Date] |
| [Vendor Name] | 1 | [Status] | [Gaps] | [Rating] | [Date] | [Type] | [Result] | [Date] |
| [Vendor Name] | 2 | [Status] | [Gaps] | [Rating] | [Date] | [Type] | [Result] | [Date] |
| [Vendor Name] | 2 | [Status] | [Gaps] | [Rating] | [Date] | [Type] | [Result] | [Date] |

### 9.3 Tabletop Exercise Record

*Where a tabletop exercise was conducted during this review cycle, record the exercise details and outcomes here.*

**Exercise Reference:** [Exercise ID] | **Date:** [Date] | **Duration:** [Duration] | **Facilitated by:** [Name]

**Scenario:** [Description of the exit scenario exercised, e.g., "Unexpected insolvency of [Vendor Name], provider of [Service], requiring transition to an alternative provider within [X] days."]

**Participants:**

| Name | Role | Organization |
|---|---|---|
| [Name] | [Role] | [Organization Name] |
| [Name] | [Role] | [Organization Name] |
| [Name] | [Role] | [Organization Name] |

**Exercise Findings:**

| # | Finding | Category | Severity | Recommended Action | Owner | Target Date |
|---|---|---|---|---|---|---|
| 1 | [Finding description] | [Documentation / Process / Technical / Governance] | [Critical / High / Medium / Low] | [Recommended action] | [Owner] | [Date] |
| 2 | [Finding description] | [Category] | [Severity] | [Action] | [Owner] | [Date] |
| 3 | [Finding description] | [Category] | [Severity] | [Action] | [Owner] | [Date] |

**Exercise Conclusion:**

*Summarize whether the exit plan was found to be executable within defined RTOs and RTPs, and any overall conclusions from the exercise.*

[Narrative summary of exercise outcome — e.g., "The tabletop exercise demonstrated that [Organization Name] could initiate an orderly transition from [Vendor Name] within [X] days under the tested scenario, subject to the resolution of the [X] findings noted above. The primary risk identified was [description]. Exit plan documentation requires update in [areas] prior to the next review cycle."]

---

## 10. Roles and Responsibilities

### 10.1 RACI Matrix — Exit Plan Review Process

*This matrix defines accountability for all activities within the annual exit plan review cycle. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | QA Lead | Business Unit Owner | IT Infrastructure Lead | Legal / Compliance | Third-Party Risk Manager | CTO / Head of Tech | CRO / Risk Committee | Data Protection Officer |
|---|---|---|---|---|---|---|---|---|
| Define review scope and schedule | R/A | C | C | C | C | I | I | I |
| Maintain vendor risk tier register | C | C | C | C | R/A | I | I | I |
| Conduct exit plan document review | R/A | C | C | C | C | I | I | I |
| Complete due diligence checklist | R | A | C | C | C | I | I | I |
| Conduct contract review | C | C | I | R/A | C | I | I | I |
| Conduct technical feasibility assessment | C | C | R/A | I | I | C | I | I |
| Facilitate tabletop exercise | R/A | C | C | C | C | C | I | I |
| Develop remediation action plan | R | A | C | C | C | A | C | C |
| Track and report remediation progress | R/A | C | C | C | C | I | I | I |
| Review SLA/KPI performance data | R | A | C | I | C | C | I | I |
| Prepare annual review report | R/A | I | I | I | C | C | I | I |
| Approve annual review report | C | I | I | C | I | A | C | I |
| Submit to governance committee | I | I | I | C | I | C | R/A | I |
| Maintain PDPA-related exit obligations | C | C | I | C | I | I | I | R/A |
| Archive review records | R/A | I | I | I | I | I | I | I |

### 10.2 Key Contact Register

| Role | Name | Department | Contact | Backup |
|---|---|---|---|---|
| QA Lead (Document Owner) | [Name] | [Department] | [Email / Ext] | [Backup Name] |
| Third-Party Risk Manager | [Name] | [Department] | [Email / Ext] | [Backup Name] |
| IT Infrastructure Lead | [Name] | [Department] | [Email / Ext] | [Backup Name] |
| Legal Counsel | [Name] | Legal | [Email / Ext] | [Backup Name] |
| Chief Technology Officer | [Name] | Technology | [Email / Ext] | [Backup Name] |
| Chief Risk Officer | [Name] | Risk | [Email / Ext] | [Backup Name] |
| Data Protection Officer | [Name] | Compliance | [Email / Ext] | [Backup Name] |
| BNM Relationship Manager | [Name] | [Department] | [Email / Ext] | [Backup Name] |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Section(s) Amended | Description of Changes | Approved By |
|---|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | All | Initial document creation | [Approver Name] |
| 1.1 | [Date] | [Author Name] | [Sections] | [Description] | [Approver Name] |
| 1.2 | [Date] | [Author Name] | [Sections] | [Description] | [Approver Name] |
| 2.0 | [Date] | [Author Name] | All | Annual review — full document update | [Approver Name] |

### 11.2 Annual Review Sign-Off

*The following signatures confirm that this annual exit plan review has been conducted in accordance with BNM RMiT requirements and [Organization Name]'s internal governance standards.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared by:** QA Lead | [Name] | | [Date] |
| **Reviewed by:** Third-Party Risk Manager | [Name] | | [Date] |
| **Reviewed by:** Head of Technology / CTO | [Name] | | [Date] |
| **Reviewed by:** Legal Counsel | [Name] | | [Date] |
| **Approved by:** Chief Risk Officer | [Name] | | [Date] |
| **Noted by:** Board Risk Committee Chair | [Name] | | [Date] |

### 11.3 Next Review Schedule

| Item | Detail |
|---|---|
| Scheduled next annual review date | [Date] |
| Trigger for out-of-cycle review | Material change to any Tier 1 or Tier 2 vendor arrangement; regulatory direction; significant technology architecture change; vendor insolvency event |
| Responsible party for scheduling | QA Lead |

---

## 12. References

### 12.1 Regulatory References

| Reference | Title | Issuing Authority | Date | Relevant Clauses |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Date of Policy Document] | **Clause 10.49** — Exit Planning |
| BNM Outsourcing Guidelines | Guidelines on Outsourcing | Bank Negara Malaysia | [Date] | [Relevant clauses on exit provisions] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 | Sections on data processing obligations and third-party processors |
| [Other regulation] | [Title] | [Authority] | [Date] | [Clauses] |

### 12.2 Internal Policy References

| Document Title | Document ID | Owner | Version | Location |
|---|---|---|---|---|
| Outsourcing Risk Management Policy | [ID] | [Owner] | [Version] | [Location] |
| Third-Party Risk Management Framework | [ID] | [Owner] | [Version] | [Location] |
| Business Continuity Management Framework | [ID] | [Owner] | [Version] | [Location] |
| Information Security Policy | [ID] | [Owner] | [Version] | [Location] |
| Data Governance Policy | [ID] | [Owner] | [Version] | [Location] |
| IT Decommissioning Standard | [ID] | [Owner] | [Version] | [Location] |

---

## 13. Appendices

### Appendix A — In-Scope Vendor Register

*Attach or reference the current approved in-scope vendor list used for this review cycle, including tier classifications confirmed during the review.*

**Document Reference:** [Vendor Register Document ID] | **Version:** [Version] | **Date:** [Date]

[Attach or cross-reference the full vendor register here, or summarize below]

| # | Vendor Name | Legal Entity Name | Country of Incorporation | Service Category | Services Provided | Tier | Contract Expiry | BNM Outsourcing Classification |
|---|---|---|---|---|---|---|---|---|
| 1 | [Vendor Name] | [Legal Entity] | [Country] | [Category] | [Services] | Tier 1 | [Date] | [Material / Non-Material] |
| 2 | [Vendor Name] | [Legal Entity] | [Country] | [Category] | [Services] | Tier 1 | [Date] | [Classification] |
| 3 | [Vendor Name] | [Legal Entity] | [Country] | [Category] | [Services] | Tier 2 | [Date] | [Classification] |
| 4 | [Vendor Name] | [Legal Entity] | [Country] | [Category] | [Services] | Tier 2 | [Date] | [Classification] |

---

### Appendix B — Exit Plan Minimum Standards Checklist (Master Template)

*This appendix contains the master blank checklist used for each vendor review. Completed checklists for each vendor are retained as supporting evidence and referenced in Section 7.*

**Refer to:** Section 7.1 — Exit Plan Minimum Standards Checklist

**Supporting Evidence Location:** [Document Management System Path / SharePoint / Network Drive]

**Completed Checklists on File:**

| Vendor | Checklist Reference | Reviewer | Date | Filed At |
|---|---|---|---|---|
| [Vendor Name] | [Reference] | [Reviewer] | [Date] | [Location] |
| [Vendor Name] | [Reference] | [Reviewer] | [Date] | [Location] |

---

### Appendix C — Tabletop Exercise Materials

*This appendix references the materials used in tabletop exercises conducted during this review cycle.*

| Item | Description | Reference / Location |
|---|---|---|
| Exercise brief and scenario | Scenario description distributed to participants prior to exercise | [Location] |
| Injects log | Record of scenario injects introduced during the exercise | [Location] |
| Participant attendance register | Signed attendance sheet | [Location] |
| Exercise facilitation guide | Facilitator's script and question bank | [Location] |
| Exercise findings report | Full findings report with remediation recommendations | [Location] |

---

### Appendix D — SLA Performance Reports

*This appendix references the SLA performance data reviewed during this review cycle for each in-scope vendor.*

| Vendor | Reporting Period | Report Source | Report Reference | Filed At |
|---|---|---|---|---|
| [Vendor Name] | [Period] | [Vendor-provided / Internally generated] | [Reference] | [Location] |
| [Vendor Name] | [Period] | [Source] | [Reference] | [Location] |

---

### Appendix E — Prior Year Remediation Status

*This appendix records the status of remediation actions carried forward from the previous annual review cycle.*

| Finding ID (Prior Year) | Vendor | Finding Description | Owner | Original Target Date | Current Status | Closure Date | Notes |
|---|---|---|---|---|---|---|---|
| EP-[YYYY-1]-001 | [Vendor] | [Description] | [Owner] | [Date] | [Open / Closed / Carried Forward] | [Date if closed] | [Notes] |
| EP-[YYYY-1]-002 | [Vendor] | [Description] | [Owner] | [Date] | [Status] | [Date] | [Notes] |
| EP-[YYYY-1]-003 | [Vendor] | [Description] | [Owner] | [Date] | [Status] | [Date] | [Notes] |

---

### Appendix F — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk management for financial institutions |
| **Exit Plan** | A documented strategy and set of procedures for the orderly transition away from a technology service provider |
| **Exit Trigger** | A defined event or condition that initiates the activation of an exit plan |
| **KPI** | Key Performance Indicator — a measurable value that demonstrates how effectively a vendor is meeting operational objectives |
| **Material Outsourcing** | Outsourcing arrangement classified as material under BNM guidelines due to the significance of the service to the institution's operations |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a service or process following disruption |
| **SLA** | Service Level Agreement — a contractual commitment by a service provider to maintain defined performance standards |
| **TPRM** | Third-Party Risk Management — a framework for identifying, assessing, monitoring, and managing risks arising from third-party relationships |
| **Tier 1 Vendor** | A technology service provider classified as critical under [Organization Name]'s vendor risk tiering framework |
| **Tier 2 Vendor** | A technology service provider classified as significant under [Organization Name]'s vendor risk tiering framework |
| **Transition Assistance** | Contractual or practical support provided by an exiting vendor to facilitate orderly transfer of services |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential
**Owner:** QA Lead, [Department], [Organization Name]
**For queries regarding this document, contact:** [QA Lead Email] | [Extension]