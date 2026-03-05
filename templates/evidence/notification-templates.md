# Notification Templates
## BNM Risk Management in Technology (RMiT) — Regulatory Incident Notification

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Regulatory Affairs |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]
**RMiT Reference:** Clause 16.1

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [Notification Trigger Criteria](#5-notification-trigger-criteria)
6. [Notification Timeline Requirements](#6-notification-timeline-requirements)
7. [BNM LINK Submission Process](#7-bnm-link-submission-process)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document provides standardised notification templates for [Organization Name] to fulfil its regulatory obligations under **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, Clause 16.1**. It establishes the structure and content requirements for:

- **Initial Incident Notification** to BNM upon identification of a reportable technology risk event; and
- **14-Day Follow-Up Report** submitted to BNM providing full details of the incident, impact assessment, and remediation actions.

These templates ensure that notifications are complete, consistent, and submitted within the prescribed regulatory timeframes, thereby supporting [Organization Name]'s compliance posture and regulatory relationship with BNM.

### 1.2 Scope

This document applies to:

- All technology-related incidents and events that meet the reportable threshold as defined in BNM RMiT Clause 16.1
- All business units and functions within [Organization Name] that operate, manage, or are impacted by technology systems
- Third-party service providers whose technology failures may trigger a reporting obligation on behalf of [Organization Name]
- All employees, contractors, and vendors involved in incident response and regulatory reporting activities

### 1.3 Out of Scope

The following are outside the scope of this document:

- Internal incident management procedures (refer to [Incident Management Policy, Document ID: XXX])
- Technology risk appetite framework (refer to [Technology Risk Appetite Statement, Document ID: XXX])
- Business continuity plan activation procedures (refer to [BCP Policy, Document ID: XXX])

---

## 2. Executive Summary

*Provide a concise, senior-management-level summary of the incident, its impact, and the status of remediation. This section should be comprehensible to a non-technical reader at BNM. Limit to one page.*

### Incident Reference

| Field | Details |
|---|---|
| **Incident Reference Number** | [INC-YYYY-NNNN] |
| **Incident Title** | [Brief descriptive title of the incident] |
| **Notification Type** | ☐ Initial Notification &nbsp;&nbsp; ☐ 14-Day Follow-Up Report |
| **Date of Incident Detection** | [DD/MM/YYYY HH:MM MYT] |
| **Date of This Notification** | [DD/MM/YYYY] |
| **Incident Status** | ☐ Ongoing &nbsp;&nbsp; ☐ Contained &nbsp;&nbsp; ☐ Resolved &nbsp;&nbsp; ☐ Closed |
| **Incident Severity** | ☐ Critical &nbsp;&nbsp; ☐ High &nbsp;&nbsp; ☐ Medium |
| **Prepared By** | [Name, Designation] |
| **Authorised By** | [Name, Designation — Head of Regulatory Affairs / CRO / CEO] |

### Summary Narrative

*Provide a 3–5 sentence narrative describing: (1) what happened, (2) when it was detected, (3) which systems and customers were affected, (4) what immediate actions were taken, and (5) the current status.*

> [Describe the incident in plain language. Example: "On [Date], [Organization Name] detected [type of incident] affecting [system/service name]. The incident resulted in [nature of impact, e.g., service disruption / data exposure / transaction failure] impacting approximately [number] customers/accounts. Immediate containment measures were activated at [time], and the incident was [resolved/contained] by [time/date]. A full root cause analysis is [underway / completed] and remediation actions are [in progress / completed].]"

### Impact at a Glance

| Impact Dimension | Details |
|---|---|
| **Systems Affected** | [List affected systems or services] |
| **Customer Impact** | [Number of customers / accounts affected, or "None identified"] |
| **Financial Impact** | [Estimated financial impact, or "Under assessment"] |
| **Data Breach Indicator** | ☐ Yes &nbsp;&nbsp; ☐ No &nbsp;&nbsp; ☐ Under Investigation |
| **Regulatory Breach Indicator** | ☐ Yes &nbsp;&nbsp; ☐ No &nbsp;&nbsp; ☐ Under Investigation |
| **Media/Reputational Risk** | ☐ Yes &nbsp;&nbsp; ☐ No &nbsp;&nbsp; ☐ Low |

---

## 3. Scope and Methodology

*Describe the boundaries of the incident investigation and the methods used to assess impact, determine root cause, and validate findings. This section provides BNM with confidence in the rigour of [Organization Name]'s analysis.*

### 3.1 Investigation Scope

**Systems and Infrastructure in Scope:**

| System / Component | Owner | Environment | Relevance to Incident |
|---|---|---|---|
| [System Name 1] | [Team/Vendor] | [Production/DR/UAT] | [Brief description of relevance] |
| [System Name 2] | [Team/Vendor] | [Production/DR/UAT] | [Brief description of relevance] |
| [System Name 3] | [Team/Vendor] | [Production/DR/UAT] | [Brief description of relevance] |

**Time Window of Investigation:**

| Parameter | Value |
|---|---|
| **Investigation Start (UTC+8)** | [DD/MM/YYYY HH:MM] |
| **Investigation End (UTC+8)** | [DD/MM/YYYY HH:MM] |
| **Log Retention Coverage** | [Period covered by available log data] |

**Organisational Units Involved in Investigation:**

- [Department / Team 1]
- [Department / Team 2]
- [Third-Party Vendor / Forensic Firm, if applicable]

### 3.2 Methodology

*Summarise the investigative and analytical methods employed. Reference any forensic standards or frameworks used (e.g., NIST SP 800-61, ISO/IEC 27035).*

The investigation was conducted using the following methodology:

- **Log Analysis:** Review of system, application, network, and security logs from [log sources] covering the period [start] to [end].
- **Forensic Examination:** [Digital forensic analysis performed by [internal team / external firm]; preservation of evidence in accordance with [procedure reference].]
- **Stakeholder Interviews:** Interviews conducted with [relevant personnel, e.g., system administrators, operations team, vendors].
- **Configuration Review:** Examination of system configurations, access controls, and change records at the time of the incident.
- **Technical Testing:** [Describe any vulnerability scanning, penetration testing, or system validation performed post-incident.]
- **Data Impact Assessment:** [Describe methodology for identifying affected customer records, transactions, or data sets.]

### 3.3 Limitations and Caveats

*Note any constraints on the investigation that may affect the completeness or certainty of findings.*

- [e.g., Log retention policy limited availability of records prior to [date]]
- [e.g., Third-party vendor access constraints delayed retrieval of [specific data]]
- [e.g., Investigation is ongoing; findings in this report reflect the state of knowledge as at [date]]

---

## 4. Key Findings and Observations

*Document the substantive findings of the incident investigation. This is the core technical and operational content of the report. For the 14-Day Follow-Up, this section must be comprehensive. For the Initial Notification, include preliminary findings only.*

### 4.1 Incident Timeline

*Provide a detailed chronological account of the incident from the earliest known precursor to resolution. Use UTC+8 (MYT) throughout.*

| Date/Time (MYT) | Event | Source | Action Taken |
|---|---|---|---|
| [DD/MM/YYYY HH:MM] | [Description of event, e.g., Anomalous alert triggered in SIEM] | [Log source / Observer] | [Action taken, or "None — under investigation"] |
| [DD/MM/YYYY HH:MM] | [Description of event] | [Log source / Observer] | [Action taken] |
| [DD/MM/YYYY HH:MM] | [Description of event] | [Log source / Observer] | [Action taken] |
| [DD/MM/YYYY HH:MM] | [Incident detected / declared] | [Detection source] | [Incident response activated] |
| [DD/MM/YYYY HH:MM] | [Containment action implemented] | [Team responsible] | [Describe containment measure] |
| [DD/MM/YYYY HH:MM] | [Incident resolved / services restored] | [Team responsible] | [Describe resolution] |

### 4.2 Root Cause Analysis

*Provide the determined or probable root cause(s) of the incident. If the root cause is not yet confirmed, state the leading hypothesis and the evidence supporting it.*

**Root Cause Category:**

☐ Technology Failure &nbsp;&nbsp; ☐ Human Error &nbsp;&nbsp; ☐ Process Gap &nbsp;&nbsp; ☐ Malicious Act (Internal) &nbsp;&nbsp; ☐ Malicious Act (External) &nbsp;&nbsp; ☐ Third-Party Failure &nbsp;&nbsp; ☐ Under Investigation

**Root Cause Description:**

> [Provide a clear, factual description of the root cause. Example: "The incident was caused by [specific technical failure / misconfiguration / human action], which resulted in [consequence]. Contributing factors included [factor 1] and [factor 2]."]

**Contributing Factors:**

| Factor | Description | Category |
|---|---|---|
| [Contributing Factor 1] | [Detailed description] | ☐ People ☐ Process ☐ Technology |
| [Contributing Factor 2] | [Detailed description] | ☐ People ☐ Process ☐ Technology |
| [Contributing Factor 3] | [Detailed description] | ☐ People ☐ Process ☐ Technology |

### 4.3 Impact Assessment

**Customer and Operational Impact:**

| Category | Metric | Value |
|---|---|---|
| Total customers affected | Count | [Number / "None identified"] |
| Retail customers | Count | [Number] |
| Corporate/SME customers | Count | [Number] |
| Transactions affected | Count / Value (MYR) | [Number] / [MYR amount] |
| Service downtime | Duration | [HH:MM] |
| Data records potentially exposed | Count | [Number / "None"] |

**Financial Impact:**

| Impact Type | Estimated Amount (MYR) | Basis of Estimate |
|---|---|---|
| Direct financial losses | [Amount] | [Description] |
| Customer compensation | [Amount] | [Description] |
| Remediation costs | [Amount] | [Description] |
| Regulatory/legal costs (estimated) | [Amount] | [Description] |
| **Total Estimated Financial Impact** | **[Total]** | |

**Reputational and Legal Impact:**

- [Describe any media coverage, social media activity, or reputational risk arising from the incident]
- [Describe any legal claims, demands, or regulatory inquiries received other than this BNM notification]
- [Note whether PDPA notification obligations have been assessed and/or triggered — refer to [PDPA Breach Notification Procedure, Document ID: XXX]]

### 4.4 Observations and Control Gaps

*Document deficiencies in controls, processes, or technology that contributed to or failed to prevent the incident. Each observation should link directly to a remediation action in Section 4.5.*

| Observation ID | Observation | Control Domain | Severity | Related Finding |
|---|---|---|---|---|
| OBS-001 | [Description of control gap or process weakness] | [e.g., Access Management] | ☐ Critical ☐ High ☐ Medium ☐ Low | [RCA reference] |
| OBS-002 | [Description of control gap or process weakness] | [e.g., Change Management] | ☐ Critical ☐ High ☐ Medium ☐ Low | [RCA reference] |
| OBS-003 | [Description of control gap or process weakness] | [e.g., Monitoring & Alerting] | ☐ Critical ☐ High ☐ Medium ☐ Low | [RCA reference] |

### 4.5 Remediation Actions

*Detail all corrective and preventive actions taken or planned. Distinguish between immediate containment actions (already completed) and longer-term preventive measures.*

| Action ID | Description | Type | Owner | Target Date | Status |
|---|---|---|---|---|---|
| ACT-001 | [Immediate containment action, e.g., Revoked compromised credentials] | Corrective | [Name/Team] | [DD/MM/YYYY] | ☐ Completed ☐ In Progress ☐ Planned |
| ACT-002 | [Short-term remediation, e.g., Patched vulnerable system] | Corrective | [Name/Team] | [DD/MM/YYYY] | ☐ Completed ☐ In Progress ☐ Planned |
| ACT-003 | [Preventive measure, e.g., Enhanced monitoring rule deployed] | Preventive | [Name/Team] | [DD/MM/YYYY] | ☐ Completed ☐ In Progress ☐ Planned |
| ACT-004 | [Process improvement, e.g., Updated access review procedure] | Preventive | [Name/Team] | [DD/MM/YYYY] | ☐ Completed ☐ In Progress ☐ Planned |
| ACT-005 | [Training / awareness action] | Preventive | [Name/Team] | [DD/MM/YYYY] | ☐ Completed ☐ In Progress ☐ Planned |

---

## 5. Notification Trigger Criteria

*This section defines the criteria that determine whether a technology incident must be reported to BNM under RMiT Clause 16.1. It serves as a reference checklist for the Regulatory Affairs team when assessing any incident.*

### 5.1 Mandatory Reporting Triggers

In accordance with BNM RMiT Clause 16.1, [Organization Name] is obligated to notify BNM of technology risk events that meet **any one** of the following criteria:

| Trigger Category | Criteria | Threshold | Applicable to This Incident |
|---|---|---|---|
| **Service Disruption** | Disruption to critical banking systems or services | Downtime exceeding [X hours] or affecting [X%] of customers | ☐ Yes ☐ No |
| **Data Breach** | Unauthorised access, disclosure, or loss of customer or financial data | Any confirmed or probable breach of customer data | ☐ Yes ☐ No |
| **Cyber Attack** | Confirmed or suspected malicious cyber activity targeting [Organization Name]'s systems | Any confirmed attack with material impact | ☐ Yes ☐ No |
| **Financial Impact** | Technology incident resulting in financial loss or potential financial loss | Exceeding MYR [threshold amount] | ☐ Yes ☐ No |
| **System Integrity** | Compromise of integrity of core banking, payment, or settlement systems | Any confirmed or suspected compromise | ☐ Yes ☐ No |
| **Third-Party Failure** | Critical third-party technology service provider failure impacting [Organization Name] | Material impact on operations or customers | ☐ Yes ☐ No |
| **Regulatory Breach** | Technology incident that results in or may result in a breach of regulatory requirements | Any confirmed or probable regulatory breach | ☐ Yes ☐ No |

### 5.2 Trigger Assessment for This Incident

*Complete this table for each reportable incident to document the trigger determination.*

| Assessment Question | Response | Evidence/Rationale |
|---|---|---|
| Did the incident meet one or more mandatory reporting triggers above? | ☐ Yes ☐ No | [Reference applicable trigger(s) from Section 5.1] |
| Has the trigger assessment been reviewed by Legal/Compliance? | ☐ Yes ☐ No ☐ Pending | [Name of reviewer, date] |
| Has the trigger assessment been approved by the Head of Regulatory Affairs? | ☐ Yes ☐ No ☐ Pending | [Name, date] |
| Notification decision | ☐ Notify BNM &nbsp; ☐ No notification required — document rationale | [Rationale if not notifying] |

### 5.3 Cross-Regulatory Notification Assessment

*Assess whether the incident triggers notification obligations under other regulatory frameworks.*

| Regulatory Body / Framework | Applicable? | Obligation | Action Taken / Planned |
|---|---|---|---|
| **PDPA** (Personal Data Protection Act 2010) | ☐ Yes ☐ No ☐ TBC | [e.g., Notify PDPC within 72 hours if personal data breach] | [Status] |
| **Bursa Malaysia** (if listed entity) | ☐ Yes ☐ No ☐ N/A | [e.g., Material disclosure obligation] | [Status] |
| **Securities Commission Malaysia** | ☐ Yes ☐ No ☐ N/A | [Applicable obligation] | [Status] |
| **NACSA** (Critical Infrastructure) | ☐ Yes ☐ No ☐ N/A | [Applicable obligation] | [Status] |
| **Correspondent Banks / Payment Networks** | ☐ Yes ☐ No ☐ N/A | [Contractual notification obligation] | [Status] |

---

## 6. Notification Timeline Requirements

*This section documents the prescribed timelines for regulatory notification under BNM RMiT Clause 16.1 and records [Organization Name]'s compliance with those timelines for this specific incident.*

### 6.1 Prescribed Notification Timelines

| Notification Stage | Prescribed Deadline | Submission Format | Recipient |
|---|---|---|---|
| **Initial Notification** | Within **[X hours]** of detection of a reportable incident | BNM LINK portal submission | Bank Negara Malaysia — [Relevant Department] |
| **14-Day Follow-Up Report** | Within **14 calendar days** of the initial notification | BNM LINK portal submission | Bank Negara Malaysia — [Relevant Department] |
| **Progress Updates** (if incident ongoing) | As directed by BNM, or at intervals specified in BNM's acknowledgement | BNM LINK portal submission or written correspondence | Bank Negara Malaysia |
| **Closure Report** (if required by BNM) | As directed by BNM | Written report via BNM LINK | Bank Negara Malaysia |

> **Note:** Timelines are calculated from the point of detection, not the point of incident occurrence. "Detection" is defined as the moment [Organization Name] first becomes aware of the incident through any channel (automated alert, manual discovery, third-party notification, etc.).

### 6.2 Timeline Compliance Record (This Incident)

| Milestone | Required By | Actual Date/Time | Submitted By | Compliant? |
|---|---|---|---|---|
| Incident detected | N/A | [DD/MM/YYYY HH:MM MYT] | [Detecting party] | N/A |
| Trigger assessment completed | Within [X hours] of detection | [DD/MM/YYYY HH:MM MYT] | [Name] | ☐ Yes ☐ No |
| Initial Notification submitted to BNM | [DD/MM/YYYY HH:MM MYT] | [DD/MM/YYYY HH:MM MYT] | [Name] | ☐ Yes ☐ No |
| BNM acknowledgement received | N/A | [DD/MM/YYYY HH:MM MYT] | N/A | N/A |
| 14-Day Follow-Up Report submitted | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] | ☐ Yes ☐ No |
| BNM follow-up acknowledgement received | N/A | [DD/MM/YYYY] | N/A | N/A |

### 6.3 Escalation Pathway for Notification Approval

*The following escalation pathway must be followed before any notification is submitted to BNM.*

```
Incident Detected
       │
       ▼
Technology Risk / CISO Team
(Trigger Assessment — within [X hours])
       │
       ▼
Head of Regulatory Affairs
(Notification Decision & Draft Review)
       │
       ▼
Chief Risk Officer / Chief Compliance Officer
(Final Approval for Submission)
       │
       ▼
Head of Regulatory Affairs
(BNM LINK Submission)
       │
       ▼
Board Risk Committee / Board (if Critical severity)
(Post-notification briefing — within [X hours])
```

---

## 7. BNM LINK Submission Process

*This section provides step-by-step procedural guidance for submitting notifications to BNM via the BNM LINK portal. It ensures consistency and completeness in all submissions.*

### 7.1 BNM LINK Access and Authorisation

| Requirement | Details |
|---|---|
| **Authorised Submitters** | [Names and designations of staff authorised to submit via BNM LINK] |
| **Portal URL** | [BNM LINK portal URL — as provided by BNM] |
| **Access Credentials** | Stored in [credentials management system/location] — access restricted to authorised submitters |
| **Backup Submitter** | [Name and designation — for use when primary submitter is unavailable] |

> **Important:** BNM LINK credentials must be kept strictly confidential and must not be shared. Access is logged and audited. Contact [IT Security / Regulatory Affairs] immediately if credentials are compromised.

### 7.2 Pre-Submission Checklist

*Complete all items before submitting the notification to BNM. Do not submit until all mandatory items are checked.*

**For Initial Notification:**

- [ ] Trigger assessment completed and approved by Head of Regulatory Affairs
- [ ] Submission approved by Chief Risk Officer / Chief Compliance Officer
- [ ] Incident reference number assigned ([INC-YYYY-NNNN])
- [ ] Executive summary drafted and reviewed (Section 2 of this template)
- [ ] Preliminary impact assessment completed (Section 4.3)
- [ ] Submission timestamp recorded (for timeline compliance tracking)
- [ ] Board/senior management informed per escalation pathway

**For 14-Day Follow-Up Report:**

- [ ] All sections of this template fully completed
- [ ] Root cause analysis finalised (or documented as preliminary if ongoing)
- [ ] Remediation action plan approved by CRO/CISO
- [ ] Full document reviewed and approved by Head of Regulatory Affairs
- [ ] Final submission approved by Chief Risk Officer / Chief Compliance Officer
- [ ] Cross-regulatory notifications assessed and actioned (Section 5.3)
- [ ] Board Risk Committee briefed

### 7.3 Submission Procedure

**Step 1: Log in to BNM LINK**
> Navigate to [BNM LINK portal URL]. Log in using [Organization Name]'s authorised institutional credentials. Select the **"Reporting & Submission"** module.

**Step 2: Select the Applicable Submission Form**
> Select the form corresponding to the notification type:
> - Initial Notification: **[Form Name/Code as designated by BNM]**
> - 14-Day Follow-Up Report: **[Form Name/Code as designated by BNM]**

**Step 3: Complete Mandatory Fields**
> Enter all mandatory fields as required by the BNM LINK form. Refer to the completed sections of this template for content. Ensure the following are accurately entered:
> - Institution code: **[Organization Name BNM Institution Code]**
> - Incident reference number
> - Incident category and sub-category (per BNM taxonomy)
> - Detection date and time
> - Impact metrics

**Step 4: Attach Supporting Documents**
> Upload this completed template as a PDF attachment. Attach any supporting evidence as directed:

| Attachment | Format | Mandatory? |
|---|---|---|
| Completed Notification Template (this document) | PDF | Yes |
| Incident Timeline (detailed) | PDF / Excel | Yes |
| Evidence of containment actions | PDF | Yes |
| Root Cause Analysis Report (for 14-Day Report) | PDF | Yes |
| [Other supporting document] | [Format] | [Yes/No] |

**Step 5: Review and Submit**
> Review all entries for accuracy and completeness. Confirm that the authorised submitter's details are correctly reflected. Click **"Submit"** and retain the BNM LINK submission confirmation number.

**Step 6: Record and File**
> Record the following in the [Incident Management System / Regulatory Reporting Log]:
> - BNM LINK submission confirmation number
> - Date and time of submission
> - Name of submitter
> - Copy of submitted document (filed in [Document Management System, Path: XXX])

### 7.4 Post-Submission Actions

| Action | Responsible | Timing |
|---|---|---|
| Confirm receipt of BNM acknowledgement | Head of Regulatory Affairs | Within [X] business days of submission |
| Escalate if no acknowledgement received | Head of Regulatory Affairs → CRO | If no acknowledgement within [X] business days |
| Respond to BNM queries or requests for further information | Head of Regulatory Affairs (coordinating with CISO/CRO) | As directed by BNM |
| File all BNM correspondence in [Document Management System] | Regulatory Affairs Team | Immediately upon receipt |
| Conduct post-incident review (lessons learned) | CISO / Technology Risk | Within [X] days of incident closure |
| Update Technology Risk Register | Technology Risk Team | Within [X] days of incident closure |

---

## 8. Roles and Responsibilities

*This section defines the roles accountable and responsible for the preparation, review, approval, and submission of BNM notifications under RMiT Clause 16.1.*

### 8.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | Head of Regulatory Affairs | Chief Risk Officer | Chief Information Security Officer | Technology Risk Team | Legal & Compliance | Board Risk Committee | BNM LINK Authorised Submitter |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Identify reportable incident | C | C | R | R | C | I | I |
| Conduct trigger assessment | A | C | R | R | C | I | I |
| Draft Initial Notification | R | C | C | C | C | I | I |
| Approve Initial Notification | A | A | C | I | C | I | I |
| Submit Initial Notification to BNM | C | I | I | I | I | I | R |
| Conduct root cause analysis | C | I | R | R | I | I | I |
| Draft 14-Day Follow-Up Report | R | C | C | C | C | I | I |
| Review 14-Day Report (technical) | C | C | A | R | C | I | I |
| Approve 14-Day Report | A | A | C | I | C | I | I |
| Submit 14-Day Report to BNM | C | I | I | I | I | I | R |
| Manage BNM correspondence | R | A | C | C | C | I | I |
| Brief Board Risk Committee | R | A | C | I | C | R | I |
| Maintain regulatory reporting log | R | I | I | C | C | I | I |
| Conduct post-incident review | C | A | R | R | C | I | I |

### 8.2 Role Descriptions

| Role | Responsibilities in Notification Process |
|---|---|
| **Head of Regulatory Affairs** | Overall accountability for regulatory notification process; drafts and coordinates notification content; manages BNM relationship and correspondence; maintains notification records. |
| **Chief Risk Officer (CRO)** | Final approval authority for notification submissions; accountable for accuracy of risk and impact assessments; briefs Board Risk Committee. |
| **Chief Information Security Officer (CISO)** | Provides technical leadership in incident investigation and root cause analysis; reviews and validates technical content of notifications. |
| **Technology Risk Team** | Conducts incident investigation and root cause analysis; prepares technical findings and remediation plans; provides data for impact assessment. |
| **Legal & Compliance** | Advises on regulatory interpretation; assesses cross-regulatory notification obligations (PDPA, SC, Bursa); reviews legal implications of disclosed content. |
| **Board Risk Committee** | Receives post-notification briefing for Critical incidents; exercises board-level oversight of material technology risk events. |
| **BNM LINK Authorised Submitter** | Executes the physical submission on BNM LINK portal upon receipt of approved notification documents; records submission confirmation details. |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name, Designation] | Initial release |
| [1.1] | [DD/MM/YYYY] | [Name, Designation] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Name, Designation] | [Description of changes] |

### 9.2 Document Review Schedule

| Review Trigger | Action Required |
|---|---|
| **Per-event** | Template completed and submitted for each reportable incident; post-submission review for process improvements |
| **Quarterly** | Review template for alignment with current BNM LINK portal requirements and any BNM guidance updates |
| **Regulatory Change** | Immediate review and update upon issuance of new or amended BNM guidance on RMiT Clause 16.1 |
| **Post-Incident** | Incorporate lessons learned from each submission into template refinements |

### 9.3 Approval Sign-Off

*This table is completed upon formal approval of this template document (not individual incident submissions).*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** | [Name] | __________________ | [DD/MM/YYYY] |
| **Reviewed By (Technology Risk)** | [Name] | __________________ | [DD/MM/YYYY] |
| **Reviewed By (Legal & Compliance)** | [Name] | __________________ | [DD/MM/YYYY] |
| **Approved By (Head of Regulatory Affairs)** | [Name] | __________________ | [DD/MM/YYYY] |
| **Approved By (Chief Risk Officer)** | [Name] | __________________ | [DD/MM/YYYY] |

### 9.4 Per-Incident Authorisation Sign-Off

*This table is completed for each individual incident notification before submission to BNM.*

| Incident Reference | Notification Type | Authorised By | Designation | Signature | Date/Time |
|---|---|---|---|---|---|
| [INC-YYYY-NNNN] | ☐ Initial ☐ 14-Day | [Name] | Chief Risk Officer | __________________ | [DD/MM/YYYY HH:MM] |

---

## 10. References

| Reference | Document | Clause/Section | Notes |
|---|---|---|---|
| **[1]** | BNM Risk Management in Technology (RMiT) Policy Document | **Clause 16.1** | Primary regulatory obligation — technology risk event notification to BNM |
| **[2]** | BNM Risk Management in Technology (RMiT) Policy Document | Clause 16 (full) | Broader incident management and reporting requirements |
| **[3]** | BNM Risk Management in Technology (RMiT) Policy Document | Appendix 2 | Definitions of critical systems and reportable event categories |
| **[4]** | Personal Data Protection Act 2010 (Malaysia) | Part IV, Section 12 | Cross-regulatory personal data breach notification obligations |
| **[5]** | NACSA National Cyber Security Policy | [Relevant section] | Critical information infrastructure incident reporting obligations |
| **[6]** | [Organization Name] Incident Management Policy | [Document ID] | Internal incident classification, escalation, and response procedures |
| **[7]** | [Organization Name] Technology Risk Appetite Statement | [Document ID] | Thresholds and escalation triggers for technology risk events |
| **[8]** | [Organization Name] Business Continuity Plan | [Document ID] | BCP activation criteria and procedures |
| **[9]** | [Organization Name] PDPA Breach Notification Procedure | [Document ID] | Internal PDPA compliance procedures |
| **[10]** | BNM LINK Portal User Guide | [BNM-issued guidance] | Technical guide for BNM LINK portal submissions |

---

## 11. Appendices

### Appendix A — Initial Notification Form (Cover Sheet)

*To be submitted to BNM within [X hours] of incident detection. Complete all fields; leave no field blank — enter "N/A" or "Under Investigation" where information is not yet available.*

---

**INITIAL TECHNOLOGY RISK EVENT NOTIFICATION**
**Pursuant to BNM RMiT Clause 16.1**

| Field | Details |
|---|---|
| **Institution Name** | [Organization Name] |
| **Institution Code** | [BNM Institution Code] |
| **Contact Person** | [Name, Designation] |
| **Contact Number** | [Phone Number] |
| **Contact Email** | [Email Address] |
| **Incident Reference Number** | [INC-YYYY-NNNN] |
| **Date and Time of Detection (MYT)** | [DD/MM/YYYY HH:MM] |
| **Date and Time of This Notification (MYT)** | [DD/MM/YYYY HH:MM] |
| **Incident Category** | [Per BNM taxonomy — e.g., Cyber Attack / System Failure / Data Breach] |
| **Affected Systems** | [Brief list of affected systems] |
| **Preliminary Nature of Incident** | [2–3 sentence description] |
| **Preliminary Customer Impact** | [Number of customers / "Under assessment"] |
| **Services Affected** | [List of affected services] |
| **Current Incident Status** | ☐ Ongoing ☐ Contained ☐ Resolved |
| **Immediate Actions Taken** | [Brief description of containment actions] |
| **Anticipated 14-Day Report Submission Date** | [DD/MM/YYYY] |

---

### Appendix B — 14-Day Follow-Up Report Checklist

*Use this checklist to verify completeness of the 14-Day Follow-Up Report before submission.*

| Section | Content Required | Completed | Reviewed |
|---|---|:---:|:---:|
| Executive Summary | Incident summary, impact at a glance | ☐ | ☐ |
| Scope and Methodology | Investigation scope, methods, limitations | ☐ | ☐ |
| Incident Timeline | Full chronological timeline in MYT | ☐ | ☐ |
| Root Cause Analysis | Confirmed/probable root cause, contributing factors | ☐ | ☐ |
| Impact Assessment | Customer, financial, reputational impact | ☐ | ☐ |
| Observations | Control gaps and deficiencies identified | ☐ | ☐ |
| Remediation Actions | Corrective and preventive actions with owners and dates | ☐ | ☐ |
| Trigger Assessment | Documented basis for notification obligation | ☐ | ☐ |
| Timeline Compliance | Actual vs required submission times | ☐ | ☐ |
| Cross-Regulatory Assessment | PDPA, SC, NACSA obligations assessed | ☐ | ☐ |
| Approval Sign-Off | CRO signature and date | ☐ | ☐ |
| Supporting Attachments | Evidence, forensic reports, logs | ☐ | ☐ |

### Appendix C — Incident Severity Classification Matrix

*Use the following matrix to assign severity at the time of trigger assessment. Severity determines escalation pathway and Board notification requirements.*

| Severity | Criteria | Board Notification | Initial Notification Deadline |
|---|---|---|---|
| **Critical** | Confirmed cyber attack with customer impact; confirmed material data breach; systemic service failure affecting [X%]+ of customers; financial impact exceeding MYR [threshold] | Immediate | Within [X hours] |
| **High** | Significant service disruption; potential data breach under investigation; financial impact between MYR [threshold 1] and MYR [threshold 2] | Within [X hours] of incident declaration | Within [X hours] |
| **Medium** | Contained incident with limited customer impact; financial impact below MYR [threshold]; precautionary notification | Within [X] business days | Within [X hours] |

### Appendix D — Key Contacts for Regulatory Notification

| Contact | Organisation | Details | Purpose |
|---|---|---|---|
| [BNM Contact Name / Department] | Bank Negara Malaysia | [Contact details as provided by BNM] | Primary BNM notification recipient |
| [Internal — Head of Regulatory Affairs] | [Organization Name] | [Phone / Email] | Internal notification lead |
| [Internal — CRO] | [Organization Name] | [Phone / Email] | Final approval authority |
| [Internal — CISO] | [Organization Name] | [Phone / Email] | Technical investigation lead |
| [External — Legal Counsel] | [Law Firm Name] | [Phone / Email] | Legal advice on notification content |
| [External — Forensic Firm] | [Firm Name] | [Phone / Email] | Digital forensics support if required |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the Central Bank of Malaysia |
| **BNM LINK** | BNM's online regulatory reporting and submission portal |
| **RMiT** | Risk Management in Technology — BNM Policy Document issued [date] |
| **Reportable Incident** | A technology risk event that meets one or more trigger criteria under RMiT Clause 16.1 requiring notification to BNM |
| **Initial Notification** | The first formal notification to BNM submitted within [X hours] of detecting a reportable incident |
| **14-Day Follow-Up Report** | The comprehensive follow-up report submitted within 14 calendar days of the Initial Notification |
| **CISO** | Chief Information Security Officer |
| **CRO** | Chief Risk Officer |
| **MYT** | Malaysia Time (UTC+8) |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia) |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework |

---

*End of Document*

---

*This template is classified **Confidential**. Distribution is restricted to authorised personnel on a need-to-know basis. Unauthorised reproduction or distribution is prohibited.*

*[Organization Name] | [Department] | Document ID: [Document ID] | Version 1.0*