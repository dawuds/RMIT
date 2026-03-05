# Emergency Change Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions](#2-definitions)
3. [Asset/Item Identification](#3-assetitem-identification)
4. [Classification and Categorisation](#4-classification-and-categorisation)
5. [Owner and Custodian](#5-owner-and-custodian)
6. [Status and Lifecycle Stage](#6-status-and-lifecycle-stage)
7. [Last Review Date](#7-last-review-date)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the template and recordkeeping requirements for **Emergency Change Records** maintained by [Organization Name]. Emergency Change Records serve as the authoritative log of all unplanned, urgent changes made to technology systems, infrastructure, and applications that bypassed the standard change management approval lifecycle due to operational necessity or critical risk mitigation requirements.

These records support **retrospective review and approval** processes, ensuring that emergency changes are formally assessed, justified, and either ratified or remediated after implementation. This log is a mandatory compliance artifact under **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.11**, which governs the management of emergency changes within financial institutions' technology change management frameworks.

### 1.2 Scope

This log applies to:

- All technology systems, platforms, applications, and infrastructure components operated or managed by [Organization Name]
- Emergency changes initiated by internal IT operations, third-party managed service providers, and technology vendors acting on behalf of [Organization Name]
- Changes classified as **emergency** (as defined in Section 2) that are implemented outside the standard change advisory board (CAB) approval process
- All environments, including production, disaster recovery (DR), and any system classified as business-critical

This log does **not** cover:

- Standard planned changes approved through the normal Change Management process
- Normal emergency maintenance windows pre-approved under standing change authority
- Changes to non-production environments with no business impact

**Regulatory Basis:** BNM RMiT Policy Document, Clause 10.11 — *Emergency Change Management*

---

## 2. Definitions

| Term | Definition |
|---|---|
| **Emergency Change** | A change that must be implemented immediately or within a compressed timeframe to restore service, prevent imminent harm, or address a critical security vulnerability, bypassing the standard pre-approval workflow |
| **Retrospective Approval** | The formal post-implementation review and ratification (or rejection) of an emergency change by authorized approvers |
| **Change Record** | A structured log entry documenting the details, justification, implementation steps, and outcomes of a single change event |
| **CAB** | Change Advisory Board — the governance body responsible for reviewing and approving changes |
| **Emergency CAB (eCAB)** | An expedited subset of the CAB convened (physically or virtually) to provide rapid approval authority for emergency changes |
| **Configuration Item (CI)** | Any technology asset, component, or system that is subject to change management controls |
| **RTO** | Recovery Time Objective — the maximum acceptable downtime for a given system |
| **RMiT** | Risk Management in Technology — BNM Policy Document governing technology risk management for financial institutions |

---

## 3. Asset/Item Identification

*This section records the precise identification of the technology asset, system, or configuration item (CI) subject to the emergency change. Every entry must uniquely identify the affected item to ensure traceability and auditability.*

### 3.1 Emergency Change Log — Asset Identification Register

| Field | Entry |
|---|---|
| **Emergency Change Record ID** | ECR-[YYYY]-[MM]-[NNN] |
| **Date and Time of Change (UTC+8)** | [DD/MM/YYYY HH:MM] |
| **Incident / Problem Ticket Reference** | [INC-XXXXX / PRB-XXXXX / N/A] |
| **Change Management System Reference** | [CHG-XXXXX] |
| **Affected Configuration Item (CI) Name** | [System / Application / Service Name] |
| **CI Identifier / Asset Tag** | [CI-XXXXX] |
| **CI Type** | [Application / Server / Network Device / Database / Middleware / Other] |
| **Environment** | [Production / DR / Staging / Other] |
| **Affected Service / Business Function** | [e.g., Internet Banking, Core Banking System, Payment Gateway] |
| **Hosting Model** | [On-Premises / Cloud / Hybrid / Co-location] |
| **Data Classification of Affected System** | [Highly Confidential / Confidential / Internal / Public] |

### 3.2 Change Description

*Provide a concise but complete description of what was changed, why the change was required on an emergency basis, and what the expected outcome was. Include relevant technical details to support retrospective review.*

| Field | Entry |
|---|---|
| **Change Title / Summary** | [Brief one-line description of the change] |
| **Detailed Change Description** | [Full description of the change implemented, including scripts run, configurations modified, services restarted, patches applied, etc.] |
| **Business Justification / Trigger** | [Describe the incident, vulnerability, regulatory directive, or operational event that triggered the emergency] |
| **Impact if Change Was Not Made** | [Describe the risk, service disruption, or harm that would have resulted from inaction] |
| **Systems / Services Impacted (Secondary)** | [List any downstream or dependent systems affected] |
| **Customer / User Impact** | [None / Partial Service Degradation / Full Outage — describe scope] |
| **Estimated Users Affected** | [Number or percentage] |

---

## 4. Classification and Categorisation

*This section records the formal classification of the emergency change according to [Organization Name]'s change management taxonomy and risk framework. Accurate classification ensures appropriate escalation, governance, and reporting.*

### 4.1 Change Classification

| Field | Entry |
|---|---|
| **Change Type** | Emergency |
| **Change Category** | [Security Patch / Break-Fix / Configuration / Hotfix / Infrastructure / Data Correction / Compliance / Other] |
| **Change Sub-Category** | [e.g., OS Patch / Firewall Rule / Database Update / Application Code / Access Control] |
| **Risk Rating** | [Critical / High / Medium / Low] |
| **Risk Rating Basis** | [Describe factors used to assess risk: data sensitivity, system criticality, breadth of impact, reversibility] |
| **Urgency** | [Immediate (< 1 hour) / High (< 4 hours) / Elevated (< 24 hours)] |
| **Change Complexity** | [Simple / Moderate / Complex] |
| **Reversibility** | [Fully Reversible / Partially Reversible / Irreversible] |
| **Rollback Plan Available** | [Yes / No — if No, provide justification] |

### 4.2 Regulatory and Compliance Tagging

*Indicate whether the emergency change has implications for regulatory reporting obligations, including RMiT, PDPA, or other BNM notifications.*

| Regulatory Area | Applicable? | Notes |
|---|---|---|
| BNM RMiT Clause 10.11 (Emergency Change) | Yes | Mandatory log entry for all emergency changes |
| BNM RMiT Clause 11 (Cyber Risk) | [Yes / No] | [If change relates to a cyber incident or security breach] |
| PDPA 2010 — Personal Data Breach | [Yes / No] | [If personal data was exposed or at risk] |
| BNM Incident Reporting Requirements | [Yes / No] | [If reportable incident threshold is met] |
| NACSA Cybersecurity Act 2018 | [Yes / No] | [If critical national information infrastructure is affected] |
| Internal Audit Notification Required | [Yes / No] | [Per internal policy thresholds] |

---

## 5. Owner and Custodian

*This section identifies the individuals and teams accountable for the emergency change, including the requester, implementer, technical custodian of the affected system, and the retrospective approver. Clear ownership is essential for post-change accountability.*

### 5.1 Change Ownership Details

| Role | Name | Department / Team | Contact / Staff ID |
|---|---|---|---|
| **Change Requester** | [Full Name] | [Department] | [Staff ID / Email] |
| **Change Implementer (Primary)** | [Full Name] | [Department] | [Staff ID / Email] |
| **Change Implementer (Secondary)** | [Full Name / N/A] | [Department] | [Staff ID / Email] |
| **System / Application Owner** | [Full Name] | [Department] | [Staff ID / Email] |
| **System / Application Custodian** | [Full Name] | [Department] | [Staff ID / Email] |
| **IT Operations Manager (On-Call)** | [Full Name] | IT Operations | [Staff ID / Email] |
| **Duty Manager / Incident Commander** | [Full Name] | [Department] | [Staff ID / Email] |
| **Third-Party Vendor (if applicable)** | [Vendor Name / Contact] | [Vendor Organization] | [Contact Details] |

### 5.2 Emergency Authorization

*Record the verbal or written authorization obtained prior to or during emergency change implementation, including the authority level of the approver.*

| Field | Entry |
|---|---|
| **Emergency Authorization Granted By** | [Full Name, Role] |
| **Authorization Method** | [Verbal / Email / Chat / Ticketing System] |
| **Authorization Reference** | [Email thread ID / Chat log reference / Ticket number] |
| **Date and Time of Authorization** | [DD/MM/YYYY HH:MM] |
| **Authority Level** | [IT Operations Manager / CISO / CTO / CIO / Other — per authorization matrix] |

---

## 6. Status and Lifecycle Stage

*This section tracks the full lifecycle of the emergency change from initial implementation through retrospective review, formal approval or rejection, and closure. All lifecycle transitions must be timestamped and attributed to a named individual.*

### 6.1 Implementation Timeline

| Lifecycle Event | Date & Time (UTC+8) | Performed By | Notes |
|---|---|---|---|
| Emergency Identified / Trigger Event | [DD/MM/YYYY HH:MM] | [Name] | [Brief description of trigger] |
| Emergency Authorization Obtained | [DD/MM/YYYY HH:MM] | [Name] | [Authorization method] |
| Change Implementation Started | [DD/MM/YYYY HH:MM] | [Name] | |
| Change Implementation Completed | [DD/MM/YYYY HH:MM] | [Name] | |
| Post-Implementation Verification | [DD/MM/YYYY HH:MM] | [Name] | [Test performed / outcome] |
| Emergency Change Record Created | [DD/MM/YYYY HH:MM] | [Name] | |
| Submitted for Retrospective Review | [DD/MM/YYYY HH:MM] | [Name] | |
| Retrospective Review Completed | [DD/MM/YYYY HH:MM] | [Name] | |
| Retrospective Approval / Rejection | [DD/MM/YYYY HH:MM] | [Name] | [Approved / Rejected / Conditional] |
| Change Record Closed | [DD/MM/YYYY HH:MM] | [Name] | |

### 6.2 Current Status

| Field | Entry |
|---|---|
| **Current Lifecycle Stage** | [Implemented / Pending Retrospective Review / Under Review / Approved / Rejected / Closed] |
| **Implementation Outcome** | [Successful / Partially Successful / Failed — Rolled Back / Failed — Workaround Applied] |
| **Service Restoration Confirmed** | [Yes / No / Partial] |
| **Rollback Executed** | [Yes / No] |
| **Rollback Outcome (if applicable)** | [Successful / Failed] |

### 6.3 Retrospective Review Findings

*Record the findings of the post-implementation retrospective review conducted by the CAB or designated reviewer. This is a mandatory step under RMiT Clause 10.11.*

| Field | Entry |
|---|---|
| **Retrospective Review Conducted By** | [Full Name, Role] |
| **Review Date** | [DD/MM/YYYY] |
| **Was the Emergency Classification Justified?** | [Yes / No — provide rationale] |
| **Was the Change Implemented Correctly?** | [Yes / No / Partially — describe findings] |
| **Were Proper Procedures Followed?** | [Yes / No / With Deviations — describe] |
| **Were Any Unauthorized Actions Taken?** | [Yes / No — if Yes, describe and escalate] |
| **Root Cause of Emergency** | [Technical failure / Security incident / Vendor issue / Process gap / External event / Other] |
| **Could This Have Been Avoided?** | [Yes / No / Partially — describe preventive measures] |
| **Corrective Actions Required** | [List corrective actions, owners, and due dates] |
| **Retrospective Decision** | [Approved / Conditionally Approved / Rejected — Remediation Required] |
| **Conditions / Remediation Requirements** | [If conditionally approved or rejected, describe required follow-up actions] |

### 6.4 Corrective Action Tracking

| Action ID | Corrective Action Description | Owner | Due Date | Status |
|---|---|---|---|---|
| CA-[NNN]-01 | [Description of corrective action] | [Name] | [DD/MM/YYYY] | [Open / In Progress / Completed] |
| CA-[NNN]-02 | [Description of corrective action] | [Name] | [DD/MM/YYYY] | [Open / In Progress / Completed] |
| CA-[NNN]-03 | [Description of corrective action] | [Name] | [DD/MM/YYYY] | [Open / In Progress / Completed] |

---

## 7. Last Review Date

*This section records all formal review activities conducted against this emergency change record, including the mandatory retrospective review and any subsequent quarterly log reviews. All reviews must be documented to demonstrate continuous oversight compliance.*

### 7.1 Review History

| Review Type | Review Date | Reviewed By | Role | Outcome / Findings | Next Review Due |
|---|---|---|---|---|---|
| Retrospective Review (Post-Implementation) | [DD/MM/YYYY] | [Name] | [Role] | [Summary of findings] | [DD/MM/YYYY] |
| Quarterly Emergency Change Log Review | [DD/MM/YYYY] | [Name] | IT Operations Manager | [Summary — trends, recurring issues, compliance status] | [DD/MM/YYYY] |
| Internal Audit Review | [DD/MM/YYYY] | [Name] | Internal Audit | [Audit findings or N/A] | [DD/MM/YYYY] |
| Management Review | [DD/MM/YYYY] | [Name] | [CISO / CTO / CIO] | [Management observations or N/A] | [DD/MM/YYYY] |

### 7.2 Quarterly Aggregate Review Summary

*To be completed by the IT Operations Manager during each quarterly review of the Emergency Change Log.*

| Reporting Period | Total Emergency Changes | Approved Retrospectively | Rejected | Corrective Actions Raised | Recurring Issues Identified | Review Completed By | Review Date |
|---|---|---|---|---|---|---|---|
| Q[N] [YYYY] | [Number] | [Number] | [Number] | [Number] | [Yes / No — describe] | [Name] | [DD/MM/YYYY] |
| Q[N] [YYYY] | [Number] | [Number] | [Number] | [Number] | [Yes / No — describe] | [Name] | [DD/MM/YYYY] |
| Q[N] [YYYY] | [Number] | [Number] | [Number] | [Number] | [Yes / No — describe] | [Name] | [DD/MM/YYYY] |
| Q[N] [YYYY] | [Number] | [Number] | [Number] | [Number] | [Yes / No — describe] | [Name] | [DD/MM/YYYY] |

---

## 8. Roles and Responsibilities

*This section defines the responsibilities of key stakeholders involved in the emergency change management process using a RACI framework.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | IT Operations Manager | Change Requester | Change Implementer | System Owner | CISO / IT Risk | CAB / eCAB | Internal Audit | CTO / CIO |
|---|---|---|---|---|---|---|---|---|
| Identify and declare emergency change | C | R | R | C | I | I | — | I |
| Obtain emergency authorization | A | R | C | C | C | C | — | I |
| Implement emergency change | C | I | R | C | I | I | — | I |
| Document emergency change record | R | C | R | I | I | I | — | I |
| Submit record for retrospective review | R | I | I | I | I | A | — | I |
| Conduct retrospective review | A | C | C | C | C | R | I | I |
| Approve or reject (retrospective) | A | — | — | C | C | R | I | I |
| Assign and track corrective actions | R | C | C | A | C | I | I | I |
| Conduct quarterly log review | R/A | — | — | I | C | I | I | I |
| Report to management | A | — | — | — | C | I | I | R |
| Retain records per retention policy | R | — | — | — | I | I | A | I |
| External / BNM regulatory reporting (if applicable) | C | — | — | — | R | I | C | A |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial template creation |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |

### 9.2 Approval Sign-Off

*This document template requires formal approval by the designated authorities below. Approval of this template authorizes its use as the standard Emergency Change Record format for [Organization Name].*

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| Chief Technology Officer (CTO) / Chief Information Officer (CIO) | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| Head of Internal Audit | [Full Name] | ___________________________ | [DD/MM/YYYY] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.11 | Emergency Change Management — requirements for logging, retrospective review, and approval of emergency changes |
| BNM RMiT | Clause 10 (Change Management) | Broader change management policy framework governing all technology changes |
| BNM RMiT | Clause 11 (Cyber Risk Management) | Cybersecurity requirements applicable when emergency changes are triggered by cyber incidents |
| BNM RMiT | Clause 19 (Audit Trail) | Audit trail and logging requirements supporting emergency change recordkeeping |
| Personal Data Protection Act (PDPA) 2010 | Section 9 (Security Principle) | Requirements for safeguarding personal data; applicable when emergency changes affect systems processing personal data |
| Cybersecurity Act 2018 | Part III | Obligations for critical national information infrastructure (CNII) operators |
| ISO/IEC 20000-1:2018 | Clause 8.5 | Change management requirements within IT service management frameworks |
| ITIL 4 | Change Management Practice | Industry best practice guidance for emergency change handling |
| [Organization Name] Change Management Policy | [Internal Doc ID] | Internal policy governing all change types including emergency changes |
| [Organization Name] Incident Management Policy | [Internal Doc ID] | Internal policy defining incident severity thresholds that trigger emergency changes |
| [Organization Name] IT Risk Management Framework | [Internal Doc ID] | Internal risk framework referenced for risk classification of emergency changes |

---

## 11. Appendices

### Appendix A: Emergency Change Classification Matrix

*Use this matrix to determine the appropriate risk rating and urgency classification for an emergency change.*

| System Criticality | Data Sensitivity | Breadth of Impact | Risk Rating | Required Authorization Level |
|---|---|---|---|---|
| Tier 1 (Mission Critical) | Highly Confidential | Organization-wide | Critical | CTO / CIO + CISO |
| Tier 1 (Mission Critical) | Confidential | Departmental | High | IT Operations Manager + CISO |
| Tier 2 (Business Important) | Confidential | Departmental | High | IT Operations Manager |
| Tier 2 (Business Important) | Internal | Team-level | Medium | IT Operations Manager |
| Tier 3 (Supporting) | Internal / Public | Limited | Low | Senior IT Engineer (On-Call) |

### Appendix B: Emergency Change Authorization Matrix

*Defines the minimum authorization authority required based on the time of day and risk rating.*

| Risk Rating | Business Hours (08:00–18:00) | After Hours / Weekend | Public Holiday |
|---|---|---|---|
| Critical | IT Operations Manager + CISO (verbal, confirmed in writing within 1 hour) | CTO / CIO (on-call) + CISO (on-call) | CTO / CIO (on-call) + CISO (on-call) |
| High | IT Operations Manager | IT Operations Manager (on-call) | IT Operations Manager (on-call) |
| Medium | IT Operations Manager | Senior IT Engineer (on-call) + IT Operations Manager notification | Senior IT Engineer (on-call) + IT Operations Manager notification |
| Low | Senior IT Engineer | Senior IT Engineer (on-call) | Senior IT Engineer (on-call) |

### Appendix C: Retrospective Review Checklist

*To be completed by the CAB or designated reviewer during the retrospective review of each Emergency Change Record.*

- [ ] Emergency Change Record ID and all mandatory fields are complete
- [ ] Emergency classification was justified based on documented evidence
- [ ] Proper emergency authorization was obtained and recorded prior to or during implementation
- [ ] Change was implemented by an authorized and qualified individual
- [ ] Implementation steps are fully documented and reproducible
- [ ] Post-implementation verification was performed and outcome recorded
- [ ] Impact on affected systems and users was assessed and documented
- [ ] Regulatory tagging (RMiT, PDPA, etc.) has been completed accurately
- [ ] Rollback plan was available or absence was justified
- [ ] Root cause analysis has been conducted or scheduled
- [ ] Corrective actions have been identified, assigned, and scheduled
- [ ] No unauthorized or undocumented actions were taken
- [ ] Record has been filed in the Emergency Change Log and linked to relevant incident/problem tickets
- [ ] Retrospective decision (approved / rejected) has been formally recorded with rationale

### Appendix D: Retention and Disposal Schedule

| Record Type | Minimum Retention Period | Storage Location | Disposal Method |
|---|---|---|---|
| Emergency Change Records (active) | 7 years from record creation | [ITSM System Name / Document Repository] | Secure deletion per Records Management Policy |
| Emergency Change Records (closed) | 7 years from closure date | [Archive Location] | Secure deletion per Records Management Policy |
| Retrospective Review Reports | 7 years | [Document Repository] | Secure deletion per Records Management Policy |
| Quarterly Log Review Reports | 7 years | [Document Repository] | Secure deletion per Records Management Policy |
| Authorization Evidence (emails, chat logs) | 7 years | [Email Archive / Secure Storage] | Secure deletion per Records Management Policy |

*Note: Retention periods are set in accordance with BNM record-keeping requirements and [Organization Name]'s Records Management Policy. Extend retention periods if records are subject to ongoing audit, investigation, or regulatory inquiry.*

### Appendix E: Glossary of System Tiers

| Tier | Description | Examples |
|---|---|---|
| Tier 1 — Mission Critical | Systems whose failure results in immediate, significant financial loss, regulatory breach, or inability to serve customers | Core Banking System, Payment Gateway, Internet Banking Platform, ATM Switch |
| Tier 2 — Business Important | Systems whose failure causes material operational disruption but does not immediately affect customer-facing services | HR System, Internal Communication Platforms, Reporting Systems |
| Tier 3 — Supporting | Systems whose failure has limited operational impact and can be tolerated for extended periods | Internal Intranet, Non-critical Internal Tools |

---

*This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. This template was prepared in accordance with the BNM Risk Management in Technology (RMiT) Policy Document and is subject to periodic review to maintain regulatory alignment.*

**Document ID:** [Document ID] | **Version:** 1.0 | **Owner:** IT Operations Manager | **Classification:** Confidential