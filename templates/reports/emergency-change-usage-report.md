# Emergency Change Usage Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Reporting Period** | [Q1/Q2/Q3/Q4 YYYY] |
| **Report Date** | [Report Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for the use of [Organization Name] management and authorized reviewers. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. This report contains information relevant to regulatory compliance under Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Assessment Scope and Criteria](#3-assessment-scope-and-criteria)
4. [Methodology](#4-methodology)
5. [Emergency Change Register — Reporting Period Summary](#5-emergency-change-register--reporting-period-summary)
6. [Findings and Ratings](#6-findings-and-ratings)
7. [Evidence Reviewed](#7-evidence-reviewed)
8. [Trend Analysis](#8-trend-analysis)
9. [Root Cause Analysis](#9-root-cause-analysis)
10. [Recommendations](#10-recommendations)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Executive Summary

*Provide a high-level summary of the emergency change activity during the reporting period, overall risk posture, and key actions required by management.*

**Reporting Period:** [Q1/Q2/Q3/Q4 YYYY — DD Month YYYY to DD Month YYYY]

**Overall Assessment:** [Satisfactory / Needs Improvement / Unsatisfactory]

During the reporting period of **[Start Date]** to **[End Date]**, [Organization Name] recorded a total of **[Total Number]** emergency changes across **[Number]** technology domains. This represents a **[increase/decrease/no change]** of **[X%]** compared to the previous quarter ([Q YYYY]: [Previous Count] emergency changes).

| Summary Metric | Current Quarter | Previous Quarter | Variance |
|---|---|---|---|
| Total Emergency Changes | [Number] | [Number] | [+/- Number / %] |
| Changes Fully Compliant with Policy | [Number] | [Number] | [+/- Number / %] |
| Changes with Policy Deviations | [Number] | [Number] | [+/- Number / %] |
| Emergency Changes as % of Total Changes | [%] | [%] | [+/- %] |
| Post-Implementation Review (PIR) Completion Rate | [%] | [%] | [+/- %] |
| Repeat Emergency Changes (Same CI) | [Number] | [Number] | [+/- Number] |

**Key Findings:**

- [Finding 1 — e.g., Emergency change volume remains above the acceptable threshold of X% of total changes]
- [Finding 2 — e.g., Post-implementation reviews were not completed within the mandated 5 business days for X changes]
- [Finding 3 — e.g., X emergency changes lacked adequate rollback procedures at the time of submission]

**Management Actions Required:**

- [Action 1 — Owner — Target Date]
- [Action 2 — Owner — Target Date]
- [Action 3 — Owner — Target Date]

---

## 2. Purpose and Scope

### 2.1 Purpose

This **Emergency Change Usage Report** is a mandatory quarterly management report prepared by the Head of Technology Risk in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.11**, which governs change management controls within financial institutions.

The purpose of this report is to:

- Provide management with visibility into the frequency, nature, and risk profile of emergency changes applied to [Organization Name]'s technology environment during the reporting period;
- Assess compliance with the organization's Emergency Change Management Policy and BNM RMiT requirements;
- Identify systemic weaknesses or patterns that may indicate broader technology risk management concerns;
- Facilitate informed management decision-making and escalation where warranted; and
- Demonstrate ongoing regulatory compliance to internal audit, external auditors, and BNM examiners.

### 2.2 Scope

*Define the systems, environments, business units, and change types included in or excluded from this report.*

**In Scope:**

- All emergency changes approved and implemented across [Organization Name]'s production and disaster recovery (DR) environments during the reporting period;
- Emergency changes affecting **Critical Systems** as defined in [Organization Name]'s Technology Asset Classification Policy, including:
  - [System/Application Name — e.g., Core Banking System]
  - [System/Application Name — e.g., Internet Banking Platform]
  - [System/Application Name — e.g., Payment Gateway]
  - [System/Application Name — e.g., Trading Systems]
  - [System/Application Name — e.g., Data Centre Infrastructure]
- Changes classified as "Emergency" under [Organization Name]'s Change Management Policy [Reference: Policy ID / Version];
- All business units and technology teams that submitted or approved emergency changes during the period.

**Out of Scope:**

- Standard changes and pre-approved change requests processed through the normal change advisory board (CAB) process;
- Changes implemented in non-production environments (development, testing, user acceptance testing);
- [Any other explicitly excluded scope items].

### 2.3 Regulatory Context

| Regulatory Instrument | Clause / Section | Requirement |
|---|---|---|
| BNM RMiT Policy Document | Clause 10.11 | Change management controls, including emergency change governance |
| BNM RMiT Policy Document | Clause 10.1 – 10.10 | General change management framework requirements |
| [Organization Name] Change Management Policy | [Policy Section] | Internal emergency change procedures and thresholds |
| [Organization Name] Technology Risk Framework | [Section] | Technology risk appetite and escalation thresholds |

---

## 3. Assessment Scope and Criteria

*Define the specific criteria used to assess whether emergency changes were managed appropriately, and how compliance is measured against policy and regulatory requirements.*

### 3.1 Assessment Criteria Framework

Emergency changes are assessed against the following compliance criteria aligned to BNM RMiT Clause 10.11 and [Organization Name]'s internal Change Management Policy:

| Criteria ID | Assessment Criteria | Policy Reference | Threshold / Requirement |
|---|---|---|---|
| EC-01 | Emergency change was formally raised and approved prior to implementation | Change Mgmt Policy §[X] | 100% — zero tolerance |
| EC-02 | Appropriate business and technology justification documented | Change Mgmt Policy §[X] | 100% — zero tolerance |
| EC-03 | Risk assessment completed before implementation | RMiT Clause 10.11 | 100% — zero tolerance |
| EC-04 | Rollback / back-out plan documented | Change Mgmt Policy §[X] | 100% — zero tolerance |
| EC-05 | Emergency change approved by authorized approver(s) | Change Mgmt Policy §[X] / RACI Matrix | 100% — zero tolerance |
| EC-06 | Post-Implementation Review (PIR) completed within [5] business days | Change Mgmt Policy §[X] | ≥ 95% compliance |
| EC-07 | Emergency change closed and regularized within [10] business days | Change Mgmt Policy §[X] | ≥ 95% compliance |
| EC-08 | Emergency change volume does not exceed [X]% of total changes | Technology Risk Appetite | < [X]% per quarter |
| EC-09 | Repeat emergency changes on same Configuration Item (CI) within 90 days | Change Mgmt Policy §[X] | Escalation trigger |
| EC-10 | No unauthorized changes retrospectively classified as emergency | Internal Audit Charter | 100% — zero tolerance |

### 3.2 Risk Rating Criteria

Emergency changes and overall program compliance are rated using the following scale:

| Rating | Definition | Criteria |
|---|---|---|
| **Satisfactory** | Controls are operating effectively; no significant issues identified | All mandatory criteria met; EC-08 threshold within appetite |
| **Needs Improvement** | Minor control weaknesses identified; remediation required | 1–3 criteria with non-compliance; or EC-08 threshold marginally exceeded |
| **Unsatisfactory** | Material control failures identified; escalation required | ≥4 criteria with non-compliance; or EC-08 threshold significantly exceeded; or repeat findings |

---

## 4. Methodology

*Describe how the assessment was conducted, including data sources, sampling approach, and review procedures.*

### 4.1 Data Collection

This report was prepared using the following data sources and collection methods:

| Data Source | Description | Period Covered |
|---|---|---|
| [ITSM Tool Name — e.g., ServiceNow] | Primary source for all change request records | [Start Date] to [End Date] |
| Change Advisory Board (CAB) Minutes | Meeting records and decisions | [Date Range] |
| Post-Implementation Review Records | PIR completion status and findings | [Date Range] |
| Incident Management System | Incidents related to or caused by emergency changes | [Date Range] |
| System Access Logs | Verification of change implementation timestamps | Sampled |
| Technology Asset Register | CI classification and ownership | Current |

### 4.2 Review Approach

*Describe the sampling methodology and review procedures applied.*

The review was conducted using the following approach:

1. **Full Population Review:** All emergency changes raised during the reporting period were extracted from [ITSM Tool Name] and subjected to initial compliance screening against criteria EC-01 to EC-10.

2. **Detailed Sample Review:** A stratified sample of **[Number]** emergency changes (representing **[X%]** of the total population) was selected for detailed evidence review, prioritizing:
   - Changes affecting Critical Systems;
   - Changes with identified non-compliances in the initial screening;
   - Changes with no corresponding incident ticket; and
   - Repeat emergency changes on the same CI.

3. **Interviews:** Discussions were held with the following stakeholders to validate findings and obtain clarifications:
   - [Role — e.g., Change Manager]
   - [Role — e.g., Head of Infrastructure]
   - [Role — e.g., Application Support Lead]

4. **Trend Analysis:** Emergency change data from the current quarter was compared against the preceding **[Number]** quarters to identify trends and patterns.

### 4.3 Limitations

*Note any limitations that may affect the completeness or accuracy of this report.*

- [Limitation 1 — e.g., ITSM data exports were unavailable for the period DD/MM to DD/MM due to system maintenance; manual records were used as an alternative.]
- [Limitation 2 — e.g., Changes implemented by third-party vendors under managed service agreements were not independently verified against vendor records.]
- [Limitation 3 — e.g., None — no material limitations identified.]

---

## 5. Emergency Change Register — Reporting Period Summary

*Provide a comprehensive register of all emergency changes implemented during the reporting period. Each change should be listed with key attributes and compliance status.*

### 5.1 Full Emergency Change Register

| EC Ref | Change Title | CI / System | Business Unit | Date Raised | Date Implemented | Approver | PIR Completed | Compliant (Y/N) | Non-Compliance Criteria |
|---|---|---|---|---|---|---|---|---|---|
| EC-[YYYY]-[NNN] | [Brief description of change] | [System Name] | [BU Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name / Role] | [Y/N — DD/MM] | [Y/N] | [EC-0X, EC-0Y] |
| EC-[YYYY]-[NNN] | [Brief description of change] | [System Name] | [BU Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name / Role] | [Y/N — DD/MM] | [Y/N] | — |
| EC-[YYYY]-[NNN] | [Brief description of change] | [System Name] | [BU Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name / Role] | [Y/N — DD/MM] | [Y/N] | [EC-0X] |
| *[Add rows as required]* | | | | | | | | | |

**Total Emergency Changes This Quarter: [Number]**

### 5.2 Distribution by Category

| Change Category | Count | % of Total | Previous Quarter |
|---|---|---|---|
| Security / Vulnerability Patching | [Number] | [%] | [Number] |
| Infrastructure Failure / Outage Resolution | [Number] | [%] | [Number] |
| Application Defect / Critical Bug Fix | [Number] | [%] | [Number] |
| Regulatory / Compliance Deadline | [Number] | [%] | [Number] |
| Third-Party Vendor Emergency | [Number] | [%] | [Number] |
| Other | [Number] | [%] | [Number] |
| **Total** | **[Number]** | **100%** | **[Number]** |

### 5.3 Distribution by System / Domain

| System / Domain | Count | % of Total | Repeat EC (Same CI) |
|---|---|---|---|
| [Core Banking System] | [Number] | [%] | [Y/N — Count] |
| [Internet Banking] | [Number] | [%] | [Y/N — Count] |
| [Payment Systems] | [Number] | [%] | [Y/N — Count] |
| [Network Infrastructure] | [Number] | [%] | [Y/N — Count] |
| [End-User Computing] | [Number] | [%] | [Y/N — Count] |
| [Other — specify] | [Number] | [%] | [Y/N — Count] |
| **Total** | **[Number]** | **100%** | |

---

## 6. Findings and Ratings

*Document specific compliance findings identified during the review, including the criteria breached, affected changes, risk rating, and management response.*

### 6.1 Overall Compliance Rating

**Overall Emergency Change Program Rating: [Satisfactory / Needs Improvement / Unsatisfactory]**

| Assessment Criteria | Compliant | Non-Compliant | Compliance Rate | Rating |
|---|---|---|---|---|
| EC-01: Formal approval prior to implementation | [Number] | [Number] | [%] | [S/NI/U] |
| EC-02: Business and technical justification documented | [Number] | [Number] | [%] | [S/NI/U] |
| EC-03: Risk assessment completed | [Number] | [Number] | [%] | [S/NI/U] |
| EC-04: Rollback plan documented | [Number] | [Number] | [%] | [S/NI/U] |
| EC-05: Authorized approver sign-off | [Number] | [Number] | [%] | [S/NI/U] |
| EC-06: PIR completed within [5] business days | [Number] | [Number] | [%] | [S/NI/U] |
| EC-07: Change regularized within [10] business days | [Number] | [Number] | [%] | [S/NI/U] |
| EC-08: Volume within risk appetite threshold | N/A | N/A | [%] of total | [S/NI/U] |
| EC-09: Repeat ECs on same CI (90-day lookback) | N/A | N/A | [Number] repeat | [S/NI/U] |
| EC-10: No unauthorized retrospective classification | [Number] | [Number] | [%] | [S/NI/U] |

### 6.2 Detailed Findings

#### Finding 1: [Finding Title]

| Field | Detail |
|---|---|
| **Finding ID** | F-[YYYY]-Q[X]-01 |
| **Criteria Breached** | EC-[XX] |
| **Severity** | [High / Medium / Low] |
| **Affected Changes** | [EC Reference Numbers] |
| **Finding Description** | [Detailed description of the non-compliance, including what was observed, what was required, and the gap.] |
| **Risk Implication** | [Description of the risk or potential impact arising from this finding.] |
| **Root Cause** | [Identified root cause — process gap, human error, system limitation, etc.] |
| **Management Response** | [Response from process owner / accountable management.] |
| **Recommended Action** | [Specific remediation action required.] |
| **Owner** | [Name / Role] |
| **Target Completion Date** | [DD/MM/YYYY] |

---

#### Finding 2: [Finding Title]

| Field | Detail |
|---|---|
| **Finding ID** | F-[YYYY]-Q[X]-02 |
| **Criteria Breached** | EC-[XX] |
| **Severity** | [High / Medium / Low] |
| **Affected Changes** | [EC Reference Numbers] |
| **Finding Description** | [Detailed description of the non-compliance.] |
| **Risk Implication** | [Description of the risk or potential impact.] |
| **Root Cause** | [Identified root cause.] |
| **Management Response** | [Response from process owner.] |
| **Recommended Action** | [Specific remediation action.] |
| **Owner** | [Name / Role] |
| **Target Completion Date** | [DD/MM/YYYY] |

---

*[Replicate Finding block for each additional finding identified. Where no findings are identified for a criterion, this should be explicitly stated.]*

### 6.3 Prior Quarter Finding Status

*Track the remediation status of findings raised in the previous quarterly report.*

| Finding ID | Quarter Raised | Finding Summary | Owner | Original Target Date | Current Status | Evidence of Closure |
|---|---|---|---|---|---|---|
| F-[YYYY]-Q[X]-[NN] | [Q/YYYY] | [Summary] | [Name] | [DD/MM/YYYY] | [Open / Closed / Overdue / Extended] | [Evidence reference or N/A] |
| F-[YYYY]-Q[X]-[NN] | [Q/YYYY] | [Summary] | [Name] | [DD/MM/YYYY] | [Open / Closed / Overdue / Extended] | [Evidence reference or N/A] |

---

## 7. Evidence Reviewed

*List all evidence artefacts reviewed during the assessment to support findings and conclusions. This section is critical for audit trail purposes.*

### 7.1 Evidence Register

| Evidence ID | Description | Source | Date / Version | Relevance |
|---|---|---|---|---|
| EV-01 | Emergency Change Request Records — Full Extract | [ITSM Tool] | [Date of Extract] | EC-01 to EC-10 |
| EV-02 | CAB Meeting Minutes — [Quarter] | [Document Repository] | [Dates] | EC-01, EC-05 |
| EV-03 | Post-Implementation Review Records | [ITSM Tool / SharePoint] | [Date Range] | EC-06 |
| EV-04 | Change Regularization Records | [ITSM Tool] | [Date Range] | EC-07 |
| EV-05 | Technology Risk Appetite Statement | [Policy Repository] | [Version / Date] | EC-08 |
| EV-06 | System Access and Audit Logs (Sampled) | [Log Management System] | [Date Range] | EC-10 |
| EV-07 | Incident Tickets Linked to Emergency Changes | [ITSM Tool] | [Date Range] | EC-02, EC-03 |
| EV-08 | Vendor Change Notifications / Records | [Email / Vendor Portal] | [Date Range] | EC-01, EC-05 |
| EV-09 | [Additional evidence item] | [Source] | [Date] | [Criteria] |
| EV-10 | [Additional evidence item] | [Source] | [Date] | [Criteria] |

### 7.2 Evidence Retention

All evidence referenced in this report is retained in accordance with [Organization Name]'s **Records Management Policy [Policy ID]** and is accessible at:

- **Document Repository:** [SharePoint / Network Drive Path / Document Management System]
- **Retention Period:** [Number] years from report date, in accordance with BNM regulatory requirements
- **Custodian:** [Name / Role — e.g., Change Manager / Technology Risk Officer]

---

## 8. Trend Analysis

*Analyse emergency change data over time to identify systemic patterns, deterioration, or improvement in change management discipline.*

### 8.1 Quarterly Volume Trend

*Provide a rolling four-quarter view of emergency change volume and key metrics.*

| Metric | Q[N-3] [YYYY] | Q[N-2] [YYYY] | Q[N-1] [YYYY] | Q[N] [YYYY] (Current) | Trend |
|---|---|---|---|---|---|
| Total Emergency Changes | [Number] | [Number] | [Number] | [Number] | [↑ / ↓ / →] |
| EC as % of Total Changes | [%] | [%] | [%] | [%] | [↑ / ↓ / →] |
| PIR Completion Rate | [%] | [%] | [%] | [%] | [↑ / ↓ / →] |
| Regularization Compliance Rate | [%] | [%] | [%] | [%] | [↑ / ↓ / →] |
| Repeat ECs (Same CI, 90 days) | [Number] | [Number] | [Number] | [Number] | [↑ / ↓ / →] |
| ECs Causing Incidents | [Number] | [Number] | [Number] | [Number] | [↑ / ↓ / →] |

### 8.2 Trend Observations

*Summarize significant observations from the trend data.*

- **Volume Trend:** [e.g., Emergency change volume has increased for the second consecutive quarter, driven primarily by [cause]. This warrants management attention as the volume has exceeded the [X%] risk appetite threshold.]
- **PIR Compliance:** [e.g., PIR completion rates have improved quarter-on-quarter following the process automation implemented in [Month YYYY].]
- **Repeat Changes:** [e.g., [Number] repeat emergency changes were identified on the same Configuration Items, suggesting underlying stability issues in [System/Domain] that require investigation.]
- **Incidents Caused by ECs:** [e.g., [Number] incidents during the quarter were attributed to emergency changes, representing [X%] of all incidents. This is [above/below/in line with] the industry benchmark of [X%].]

### 8.3 Risk Appetite Comparison

| Metric | Risk Appetite Threshold | Current Quarter Actual | Status |
|---|---|---|---|
| EC Volume as % of Total Changes | < [X]% | [Actual %] | [Within / Exceeds Appetite] |
| PIR Completion Rate | ≥ [95]% | [Actual %] | [Within / Below Threshold] |
| Repeat ECs on Same CI (90 days) | 0 (Escalation Trigger) | [Actual Number] | [Acceptable / Escalation Required] |
| ECs Approved by Unauthorized Approver | 0 (Zero Tolerance) | [Actual Number] | [Compliant / Non-Compliant] |

---

## 9. Root Cause Analysis

*For significant or recurring findings, document root cause analysis to ensure remediation addresses underlying causes rather than symptoms.*

### 9.1 Root Cause Summary

| Finding ID | Finding Summary | Root Cause Category | Root Cause Description | Systemic? |
|---|---|---|---|---|
| F-[YYYY]-Q[X]-01 | [Summary] | [Process / People / Technology / Governance] | [Description of underlying root cause] | [Yes / No] |
| F-[YYYY]-Q[X]-02 | [Summary] | [Process / People / Technology / Governance] | [Description of underlying root cause] | [Yes / No] |

### 9.2 Systemic Issues Identified

*Describe any findings that indicate a systemic weakness in the emergency change management process, as opposed to isolated incidents.*

- **Issue 1:** [Description of systemic issue, supporting evidence, and risk implication.]
- **Issue 2:** [Description of systemic issue, supporting evidence, and risk implication.]
- *[Where no systemic issues are identified, state: "No systemic issues were identified during the current quarter review. Findings are assessed as isolated incidents."]*

---

## 10. Recommendations

*Provide specific, actionable recommendations to address identified findings and improve the overall emergency change management program.*

### 10.1 Recommendations Register

| Rec ID | Priority | Recommendation | Finding Addressed | Recommended Owner | Target Date | Estimated Effort |
|---|---|---|---|---|---|---|
| REC-01 | [High / Medium / Low] | [Specific actionable recommendation] | F-[YYYY]-Q[X]-[NN] | [Role / Team] | [DD/MM/YYYY] | [High / Medium / Low] |
| REC-02 | [High / Medium / Low] | [Specific actionable recommendation] | F-[YYYY]-Q[X]-[NN] | [Role / Team] | [DD/MM/YYYY] | [High / Medium / Low] |
| REC-03 | [High / Medium / Low] | [Specific actionable recommendation] | F-[YYYY]-Q[X]-[NN] | [Role / Team] | [DD/MM/YYYY] | [High / Medium / Low] |
| REC-04 | [High / Medium / Low] | [Specific actionable recommendation] | F-[YYYY]-Q[X]-[NN] | [Role / Team] | [DD/MM/YYYY] | [High / Medium / Low] |

### 10.2 Strategic Recommendations

*Where patterns or trends indicate the need for broader program improvements beyond individual finding remediation, document strategic recommendations here.*

1. **[Strategic Recommendation Title]** — [Description of the recommended strategic action, rationale, expected benefit, and proposed approach.]

2. **[Strategic Recommendation Title]** — [Description of the recommended strategic action, rationale, expected benefit, and proposed approach.]

3. **[Strategic Recommendation Title]** — [Description of the recommended strategic action, rationale, expected benefit, and proposed approach.]

---

## 11. Roles and Responsibilities

*The following RACI matrix defines accountabilities for the Emergency Change Usage Report and the broader emergency change management process.*

### 11.1 RACI Matrix — Report Preparation and Governance

| Activity | Head of Technology Risk | Change Manager | CISO / CTO | Technology Risk Committee | Internal Audit | BNM (Regulator) |
|---|---|---|---|---|---|---|
| Define emergency change policy and criteria | A | C | C | I | I | — |
| Maintain emergency change register | I | R | I | I | I | — |
| Conduct quarterly compliance assessment | A | C | I | I | I | — |
| Prepare Emergency Change Usage Report | R/A | C | I | I | I | — |
| Review and challenge report findings | C | C | R | A | C | — |
| Approve Emergency Change Usage Report | C | I | C | A | I | — |
| Implement recommendations | C | R | A | I | I | — |
| Monitor recommendation implementation | R | C | I | A | I | — |
| Submit to Board Risk Committee (if required) | R | — | A | R | — | — |
| Regulatory submission (if required) | C | — | A | I | — | R |
| Retain report and supporting evidence | R | C | I | I | A | — |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 11.2 Escalation Matrix

| Trigger | Escalation Level | Escalation To | Timeframe |
|---|---|---|---|
| Single emergency change with zero-tolerance breach | Level 1 | Head of Technology Risk | Same business day |
| ≥ [3] findings rated High in a single quarter | Level 2 | CTO / CISO and Technology Risk Committee | Within [5] business days |
| EC volume exceeds risk appetite threshold for [2] consecutive quarters | Level 2 | Technology Risk Committee | At next quarterly meeting |
| Systemic finding identified | Level 3 | Board Risk Committee | Within [10] business days |
| Finding indicates potential regulatory breach | Level 3 | Board Risk Committee + BNM Notification Assessment | Immediate |

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Changes Made |
|---|---|---|---|
| 0.1 | [DD/MM/YYYY] | [Author Name] | Initial draft |
| 0.2 | [DD/MM/YYYY] | [Author Name] | Incorporated review comments from [Reviewer] |
| 0.3 | [DD/MM/YYYY] | [Author Name] | Final amendments prior to approval |
| 1.0 | [DD/MM/YYYY] | [Author Name] | Approved and issued |

### 12.2 Report Review

*This report was reviewed by the following individuals prior to approval.*

| Reviewer | Role | Review Date | Comments |
|---|---|---|---|
| [Full Name] | Change Manager | [DD/MM/YYYY] | [Comments / "No comments — approved as submitted"] |
| [Full Name] | Head of Infrastructure | [DD/MM/YYYY] | [Comments / "No comments — approved as submitted"] |
| [Full Name] | Head of Application Management | [DD/MM/YYYY] | [Comments / "No comments — approved as submitted"] |
| [Full Name] | Chief Information Security Officer | [DD/MM/YYYY] | [Comments / "No comments — approved as submitted"] |

### 12.3 Approval Sign-Off

*This report requires the following approvals before it is considered final and may be submitted to the Technology Risk Committee.*

| Role | Full Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk (Report Author) | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| Chief Technology Officer | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| Technology Risk Committee Chairperson | [Full Name] | ___________________________ | [DD/MM/YYYY] |

> **Distribution List (Post-Approval):** [e.g., Technology Risk Committee Members, Chief Risk Officer, Head of Internal Audit, Chief Executive Officer (for escalated findings)]

---

## 13. References

The following regulatory instruments, internal policies, and standards are referenced in this document:

### 13.1 Regulatory References

| Reference | Title | Issuing Authority | Effective Date | Relevant Clause(s) |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Effective Date] | Clause 10.11 (Change Management) |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Effective Date] | Clauses 10.1–10.10 (Change Management Framework) |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Effective Date] | Clause 11 (Technology Service Provider) |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | 2013 | [Relevant sections where changes affect personal data processing] |
| [Other Reference] | [Title] | [Authority] | [Date] | [Clause] |

### 13.2 Internal Policy References

| Document ID | Title | Version | Owner | Reference Reason |
|---|---|---|---|---|
| [POL-ID] | Change Management Policy | [Version] | [Owner] | Primary internal policy for emergency change process |
| [POL-ID] | Technology Risk Management Framework | [Version] | [Owner] | Risk appetite thresholds and escalation triggers |
| [POL-ID] | Technology Asset Classification Policy | [Version] | [Owner] | Definition of Critical Systems |
| [POL-ID] | Records Management Policy | [Version] | [Owner] | Evidence retention requirements |
| [POL-ID] | Incident Management Policy | [Version] | [Owner] | Link between incidents and emergency changes |

---

## 14. Appendices

### Appendix A — Emergency Change Policy Summary

*Attach or summarize the key provisions of [Organization Name]'s Emergency Change Management Policy relevant to this report, including the definition of an emergency change, eligibility criteria, approval authority matrix, and key timelines.*

| Policy Element | Requirement |
|---|---|
| Definition of Emergency Change | [Insert policy definition] |
| Eligibility Criteria | [Insert eligibility criteria] |
| Maximum Time for Retrospective Approval | [X hours from implementation] |
| Approval Authority — Tier 1 (Low Risk) | [Role(s)] |
| Approval Authority — Tier 2 (Medium Risk) | [Role(s)] |
| Approval Authority — Tier 3 (High Risk) | [Role(s)] |
| PIR Completion Deadline | [X business days post-implementation] |
| Change Regularization Deadline | [X business days post-implementation] |
| Volume Threshold (Risk Appetite) | < [X]% of total changes per quarter |

### Appendix B — Emergency Change Request Form Template

*[Attach a copy of the standard Emergency Change Request Form (ECRF) used during the reporting period. Reference: [Form ID / Version / Location in Document Repository]]*

> **Reference:** [Form ID] — Emergency Change Request Form — Version [X.X] — Located at [Document Repository Path / Link]

### Appendix C — Detailed Non-Compliant Change Records

*[For each non-compliant emergency change identified in Section 6, provide a detailed record including the change request documentation, evidence of non-compliance, and management response. Attach as separate sub-appendices (C.1, C.2, etc.) to maintain report readability.]*

| Appendix | EC Reference | Non-Compliance Summary |
|---|---|---|
| Appendix C.1 | EC-[YYYY]-[NNN] | [Brief summary of non-compliance] |
| Appendix C.2 | EC-[YYYY]-[NNN] | [Brief summary of non-compliance] |

### Appendix D — Glossary

| Term | Definition |
|---|---|
| CAB | Change Advisory Board — the governance body responsible for reviewing and authorizing changes |
| CI | Configuration Item — any component that needs to be managed to deliver a technology service |
| EC | Emergency Change — a change that must be implemented immediately to resolve a critical incident or avert an imminent significant risk |
| ECRF | Emergency Change Request Form |
| ITSM | IT Service Management — the framework and associated tooling used to manage technology services |
| PIR | Post-Implementation Review — a review conducted after a change is implemented to assess its success and identify lessons learned |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk management in financial institutions |

### Appendix E — Prior Quarters Benchmark Data

*[Attach or reproduce the historical quarterly data used to support trend analysis in Section 8. This appendix ensures the trend analysis is independently verifiable by auditors and regulators.]*

> **Reference:** Historical Emergency Change Metrics — Sourced from [ITSM Tool] — Extracted on [DD/MM/YYYY] by [Name / Role]

---

*End of Document*

---

| Field | Detail |
|---|---|
| **Document Title** | Emergency Change Usage Report |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause** | 10.11 |
| **Report Prepared By** | [Full Name], Head of Technology Risk |
| **Report Date** | [DD/MM/YYYY] |
| **Next Report Due** | [DD/MM/YYYY] |