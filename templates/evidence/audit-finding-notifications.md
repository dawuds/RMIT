# Audit Finding Notifications

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Internal Audit |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Framework and Obligations](#2-regulatory-framework-and-obligations)
3. [Asset and Item Identification](#3-asset-and-item-identification)
4. [Classification and Categorisation](#4-classification-and-categorisation)
5. [Owner and Custodian Register](#5-owner-and-custodian-register)
6. [Audit Universe and Risk-Based Plan](#6-audit-universe-and-risk-based-plan)
7. [Audit Methodology and Standards](#7-audit-methodology-and-standards)
8. [Finding Severity Classification](#8-finding-severity-classification)
9. [Notification Trigger Criteria](#9-notification-trigger-criteria)
10. [Notification Timeline Requirements](#10-notification-timeline-requirements)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the framework and procedures for identifying, recording, escalating, and notifying Bank Negara Malaysia (BNM) of significant audit findings arising from internal audit activities conducted at [Organization Name]. It defines the criteria, timelines, and responsibilities governing the notification process in accordance with BNM's Risk Management in Technology (RMiT) Policy Document, specifically Clause 16.5.

This template serves as the authoritative record for all audit finding notifications submitted to BNM and as supporting evidence of [Organization Name]'s compliance with regulatory reporting obligations.

### 1.2 Scope

*Define the boundaries of this document — specify which entities, systems, processes, and audit types are covered.*

This document applies to:

- All internal audit activities conducted by or on behalf of [Organization Name]
- Technology risk and IT audit engagements within scope of BNM RMiT
- All business units, subsidiaries, and branches of [Organization Name] subject to BNM oversight
- Third-party and outsourced IT service providers where audit rights exist under contractual arrangements
- All audit cycles: annual, ad-hoc, regulatory-directed, and continuous monitoring activities

**Out of Scope:**

- External audit findings managed under separate statutory reporting obligations
- Findings arising from audits of entities not regulated by BNM
- Routine operational exceptions not meeting the significance thresholds defined in Section 8

### 1.3 Document Ownership

| Role | Name | Contact |
|---|---|---|
| Document Owner | Head of Internal Audit | [Email / Extension] |
| Document Custodian | [Internal Audit Manager / Compliance Officer] | [Email / Extension] |
| Reviewing Authority | [Chief Risk Officer / Audit Committee Chair] | [Email / Extension] |

---

## 2. Regulatory Framework and Obligations

### 2.1 Applicable Regulations

*List all regulatory instruments that govern this artifact. Ensure clause references are current and validated against the latest BNM publications.*

| Regulation | Issuing Body | Relevant Clause(s) | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) | BNM | Clause 16.5 | Notification of significant audit findings within 30 days |
| RMiT | BNM | Clause 16.1–16.4 | Internal audit independence, scope, and reporting standards |
| Guidelines on Internal Audit Function | BNM | [Applicable Section] | Internal audit governance requirements |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | [Applicable Section] | General regulatory reporting obligations |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | [Applicable Section] | Data handling for audit records |
| [Other Applicable Standard] | [Issuing Body] | [Section] | [Obligation] |

### 2.2 Key Regulatory Requirements — RMiT Clause 16.5

*Summarise the specific obligations under RMiT Clause 16.5 as they apply to this institution. This section should be reviewed whenever BNM issues updated guidance.*

Under RMiT Clause 16.5, [Organization Name] is required to:

- Report significant technology audit findings to BNM within **30 calendar days** of the finding being confirmed
- Ensure notifications include sufficient detail for BNM to assess the materiality and risk impact of the finding
- Maintain records of all notifications submitted, including acknowledgements received from BNM
- Establish and document internal escalation procedures that support timely external notification
- Track remediation progress and provide updates to BNM as required

### 2.3 Interaction with Other Frameworks

| Framework | Relationship |
|---|---|
| NACSA Critical Information Infrastructure (CII) Protection | Findings affecting CII assets may trigger parallel NACSA notification obligations |
| ISO/IEC 27001 | Internal audit findings feed into the ISMS nonconformity and corrective action process |
| COBIT 2019 | Audit objectives aligned to MEA02 (Managed System Controls Monitoring) |
| [Internal Policy Reference] | [Relationship to internal governance framework] |

---

## 3. Asset and Item Identification

### 3.1 Overview

*Describe the assets and audit items covered in this notification record. Each audit engagement should be linked to specific assets or processes within the audit universe.*

Each audit finding notification must clearly identify the asset(s) or process(es) subject to the finding. Asset identification enables accurate risk attribution, ownership tracing, and remediation tracking.

### 3.2 Asset Register Reference

*Link this record to the institution's authoritative Technology Asset Register. Do not duplicate asset data — reference the register by asset ID.*

| Asset ID | Asset Name | Asset Type | System / Platform | Business Domain | Criticality Rating |
|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking System] | [Application] | [Platform Name] | [Retail Banking] | [Critical] |
| [ASSET-002] | [Network Infrastructure — DMZ] | [Infrastructure] | [Vendor/Model] | [IT Operations] | [High] |
| [ASSET-003] | [Customer Data Warehouse] | [Data Repository] | [Platform Name] | [Analytics] | [Critical] |
| [ASSET-NNN] | [Asset Name] | [Type] | [Platform] | [Domain] | [Rating] |

### 3.3 Audit Item Identification

| Audit Item ID | Description | Engagement Reference | Finding Reference | Asset ID(s) |
|---|---|---|---|---|
| [AUD-ITEM-001] | [Description of audited item or control] | [AUDIT-2025-001] | [FIND-001] | [ASSET-001] |
| [AUD-ITEM-NNN] | [Description] | [Engagement Ref] | [Finding Ref] | [Asset ID] |

---

## 4. Classification and Categorisation

### 4.1 Finding Classification Framework

*All findings must be classified consistently using the taxonomy below before a notification decision is made. Classification determines notification obligations and escalation paths.*

#### 4.1.1 Technology Risk Domain Categorisation

| Category Code | Domain | Description | Example Finding Types |
|---|---|---|---|
| TRD-01 | Cybersecurity | Vulnerabilities, access control failures, incident response gaps | Unpatched critical CVEs, privileged access abuse |
| TRD-02 | IT Governance | Policy, oversight, and accountability deficiencies | Absent IT risk framework, undocumented change controls |
| TRD-03 | System Availability | Resilience, BCP/DR, and uptime failures | RTO/RPO breaches, single points of failure |
| TRD-04 | Data Integrity | Data quality, lineage, and accuracy failures | Reconciliation failures, unauthorised data modification |
| TRD-05 | Third-Party Risk | Outsourcing and vendor management failures | Unassessed vendors, lapsed SLA monitoring |
| TRD-06 | Regulatory Compliance | Direct non-compliance with BNM or other regulatory requirements | RMiT control gaps, reporting failures |
| TRD-07 | Change Management | Unauthorised or uncontrolled changes to systems | Emergency changes without approval, release failures |
| TRD-08 | [Custom Category] | [Description] | [Examples] |

#### 4.1.2 Finding Type Classification

| Finding Type | Definition |
|---|---|
| Control Deficiency | A control exists but is not operating effectively |
| Control Absence | A required control has not been implemented |
| Policy Non-Compliance | Actions taken are inconsistent with approved policy |
| Regulatory Non-Compliance | Failure to meet an explicit regulatory requirement |
| Process Weakness | Process design creates material risk exposure |
| Observation | Matter of lesser significance noted for management awareness |

### 4.2 Classification Record

*Complete this table for each finding subject to this notification record.*

| Finding ID | Finding Title | Domain Category | Finding Type | Severity (see §8) | Notification Required |
|---|---|---|---|---|---|
| [FIND-001] | [Finding Title] | [TRD-XX] | [Type] | [Critical / High / Medium / Low] | [Yes / No] |
| [FIND-NNN] | [Finding Title] | [TRD-XX] | [Type] | [Rating] | [Yes / No] |

---

## 5. Owner and Custodian Register

### 5.1 Ownership Framework

*Define accountability for each finding. The asset owner bears primary accountability for remediation; the custodian is responsible for day-to-day control operation.*

| Role | Definition | Accountability |
|---|---|---|
| Asset Owner | Senior manager accountable for the business value and risk of the asset | Approves remediation plans; accepts residual risk |
| Asset Custodian | Technical or operational manager responsible for asset management | Implements remediation; reports progress |
| Control Owner | Manager responsible for the specific control that failed | Redesigns or re-implements the deficient control |
| Audit Owner | Head of Internal Audit | Validates remediation sufficiency; confirms closure |

### 5.2 Finding Ownership Register

| Finding ID | Asset ID | Asset Owner | Asset Custodian | Control Owner | Business Unit | Remediation Accountable Party |
|---|---|---|---|---|---|---|
| [FIND-001] | [ASSET-001] | [Name / Title] | [Name / Title] | [Name / Title] | [BU Name] | [Name / Title] |
| [FIND-NNN] | [ASSET-NNN] | [Name / Title] | [Name / Title] | [Name / Title] | [BU Name] | [Name / Title] |

### 5.3 Escalation Contacts

| Role | Name | Contact | Escalation Trigger |
|---|---|---|---|
| Head of Internal Audit | [Name] | [Contact] | All Critical and High findings |
| Chief Risk Officer | [Name] | [Contact] | Critical findings; BNM notifications |
| Chief Information Security Officer | [Name] | [Contact] | Cybersecurity domain findings (TRD-01) |
| Chief Executive Officer | [Name] | [Contact] | Critical findings requiring Board awareness |
| Audit Committee Chair | [Name] | [Contact] | Significant findings reported at Audit Committee |
| BNM Relationship Manager | [Name] | [Contact] | Regulatory notification coordination |

---

## 6. Audit Universe and Risk-Based Plan

### 6.1 Audit Universe

*The audit universe defines all auditable entities within scope of the internal audit function. Findings can only be generated from entities within the approved audit universe.*

| Universe ID | Auditable Entity | Entity Type | Risk Rating | Assigned Audit Cycle | Last Audited | Next Scheduled |
|---|---|---|---|---|---|---|
| UNI-001 | [Core Banking Technology Environment] | [IT Domain] | [Critical] | [Annual] | [YYYY-MM] | [YYYY-MM] |
| UNI-002 | [Cybersecurity Operations Centre] | [IT Domain] | [High] | [Annual] | [YYYY-MM] | [YYYY-MM] |
| UNI-003 | [Cloud Infrastructure] | [IT Domain] | [High] | [Biennial] | [YYYY-MM] | [YYYY-MM] |
| UNI-004 | [Third-Party IT Vendors] | [Outsourcing] | [High] | [Triennial / Risk-Based] | [YYYY-MM] | [YYYY-MM] |
| UNI-NNN | [Entity Name] | [Type] | [Rating] | [Cycle] | [Date] | [Date] |

### 6.2 Risk-Based Audit Plan Reference

*The risk-based audit plan governs prioritisation of audit engagements. This section links the finding to the planned or ad-hoc engagement that generated it.*

| Audit Plan Year | Plan Reference | Engagement Title | Risk Basis for Selection | Planned Period | Actual Period |
|---|---|---|---|---|---|
| [YYYY] | [PLAN-YYYY-NN] | [Engagement Title] | [Risk justification for inclusion] | [Q1 YYYY] | [Q1 YYYY] |

### 6.3 Engagement Record

| Field | Detail |
|---|---|
| Engagement ID | [AUDIT-YYYY-NNN] |
| Engagement Title | [Full Title of Audit Engagement] |
| Audit Type | [Planned / Ad-hoc / Regulatory-Directed / Continuous Monitoring] |
| Scope Statement | [Concise description of what was audited] |
| Engagement Period | [Start Date] to [End Date] |
| Lead Auditor | [Name] |
| Audit Team | [Names and roles] |
| Management Contact | [Name / BU] |
| Final Report Date | [Date] |
| Report Reference | [RPT-YYYY-NNN] |

---

## 7. Audit Methodology and Standards

### 7.1 Methodology Statement

*Document the audit methodology applied during the engagement that produced the notifiable finding(s). This section provides evidence of professional conduct and supports the credibility of findings.*

The internal audit function of [Organization Name] conducts technology audits in accordance with the following standards and methodologies:

| Standard | Version / Edition | Application |
|---|---|---|
| International Standards for the Professional Practice of Internal Auditing (IIA Standards) | [Current Edition] | Overarching professional standards for all audit work |
| ISACA IT Audit Framework (ITAF) | [Current Edition] | IT-specific audit methodology and guidance |
| COBIT 2019 | Current | Control objectives and maturity assessment for IT governance |
| ISO/IEC 27001 | 2022 | Information security control assessment |
| BNM RMiT | Current | Regulatory compliance assessment for technology risk |
| [Organization Name] Internal Audit Methodology | [Version] | Institution-specific procedures and templates |

### 7.2 Audit Procedures Applied

*List the specific audit procedures performed during this engagement that are relevant to the notifiable finding(s).*

| Procedure ID | Procedure Description | Standard Reference | Performed By | Date(s) |
|---|---|---|---|---|
| PROC-001 | [e.g., Review of privileged access logs for the 12-month period] | [IIA Standard / RMiT Clause] | [Auditor Name] | [Date] |
| PROC-002 | [e.g., Vulnerability scan results analysis and validation] | [Standard] | [Auditor Name] | [Date] |
| PROC-003 | [e.g., Interview with IT Operations Manager] | [Standard] | [Auditor Name] | [Date] |
| PROC-NNN | [Procedure Description] | [Standard] | [Auditor Name] | [Date] |

### 7.3 Evidence Collected

*Catalogue the evidence that substantiates the finding(s). Evidence must be sufficient, reliable, relevant, and useful per IIA standards.*

| Evidence ID | Description | Type | Source | Date Obtained | Location / Reference |
|---|---|---|---|---|---|
| EVID-001 | [e.g., System access report extract] | [Documentary] | [System Name] | [Date] | [File reference / SharePoint path] |
| EVID-002 | [e.g., Screenshot of unpatched system configuration] | [Observational] | [System Name] | [Date] | [File reference] |
| EVID-003 | [e.g., Interview notes — IT Operations Manager] | [Testimonial] | [Interviewee] | [Date] | [File reference] |
| EVID-NNN | [Description] | [Type] | [Source] | [Date] | [Location] |

### 7.4 Quality Assurance

| QA Activity | Performed By | Date | Outcome |
|---|---|---|---|
| Working paper review | [Senior Auditor / Audit Manager] | [Date] | [Approved / Comments raised] |
| Draft finding review | [Head of Internal Audit] | [Date] | [Approved / Revised] |
| Management response obtained | [Lead Auditor] | [Date] | [Received / Pending] |
| Final finding validated | [Head of Internal Audit] | [Date] | [Confirmed] |

---

## 8. Finding Severity Classification

### 8.1 Severity Rating Scale

*Apply the severity scale below consistently across all findings. The assigned severity directly determines notification obligations under Section 9.*

| Severity | Criteria | Notification to BNM | Internal Escalation | Remediation Deadline |
|---|---|---|---|---|
| **Critical** | Direct threat to financial stability, systemic risk, regulatory breach with material impact, or active exploitation of a technology vulnerability | **Mandatory — within 30 calendar days** | CEO, CRO, CISO, Audit Committee, Board | 30 days (or as directed by BNM) |
| **High** | Significant control failure with material risk exposure; likely regulatory non-compliance; potential for customer or financial harm | **Mandatory — within 30 calendar days** | Head of IA, CRO, CISO | 60 days |
| **Medium** | Control weakness with moderate risk exposure; partial non-compliance; risk mitigated by compensating controls | Consider; escalate to Head of IA for decision | Head of IA, relevant business unit head | 90 days |
| **Low** | Minor control deficiency; negligible risk exposure; best practice improvement | Not required | Relevant business unit management | 180 days |
| **Observation** | Informational; no control failure identified | Not required | Relevant management | At management discretion |

### 8.2 Severity Determination Record

*Complete this section for each finding. The severity determination must be signed off by the Head of Internal Audit prior to any notification being submitted.*

| Finding ID | Preliminary Severity | Basis for Rating | Reviewed By | Final Severity | Notification Required | Sign-off Date |
|---|---|---|---|---|---|---|
| [FIND-001] | [Initial rating] | [Justification for initial rating] | [Head of IA] | [Final rating] | [Yes / No] | [Date] |
| [FIND-NNN] | [Rating] | [Justification] | [Reviewer] | [Rating] | [Yes / No] | [Date] |

### 8.3 Aggregation Assessment

*Where multiple related findings are identified, assess whether they should be aggregated for notification purposes. Aggregated findings may result in a higher effective severity.*

| Aggregation Group ID | Constituent Finding IDs | Aggregated Severity | Aggregation Rationale |
|---|---|---|---|
| AGG-001 | [FIND-001, FIND-002, FIND-003] | [Aggregated rating] | [Rationale for grouping, e.g., same root cause] |
| AGG-NNN | [Finding IDs] | [Rating] | [Rationale] |

---

## 9. Notification Trigger Criteria

### 9.1 Trigger Framework

*The following criteria determine whether a finding must be notified to BNM under RMiT Clause 16.5. All criteria should be assessed independently; a positive response to any single criterion is sufficient to trigger notification.*

| Trigger ID | Criterion | Assessment Method | Applicable Finding Types |
|---|---|---|---|
| TRIG-01 | Finding is rated **Critical** or **High** on the severity scale in Section 8 | Severity determination per §8.2 | All types |
| TRIG-02 | Finding constitutes direct non-compliance with an explicit RMiT requirement | RMiT clause mapping review | Regulatory non-compliance |
| TRIG-03 | Finding relates to a material cybersecurity incident or vulnerability affecting critical systems | CISO assessment | TRD-01 findings |
| TRIG-04 | Finding indicates failure of a control previously committed to BNM as a remediation action | Review of prior BNM correspondence | All types |
| TRIG-05 | Finding relates to outsourced Critical IT functions as defined under RMiT | Third-party risk assessment | TRD-05 findings |
| TRIG-06 | Finding relates to a breach of customer data or financial transaction integrity | Data risk and integrity assessment | TRD-04 findings |
| TRIG-07 | BNM has specifically requested notification of findings in a particular domain or system | Review of BNM directives and correspondence | As directed |
| TRIG-08 | [Institution-specific trigger] | [Assessment method] | [Finding types] |

### 9.2 Trigger Assessment Record

| Finding ID | TRIG-01 | TRIG-02 | TRIG-03 | TRIG-04 | TRIG-05 | TRIG-06 | TRIG-07 | TRIG-08 | Notification Required | Assessed By | Date |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [FIND-001] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Yes/No] | [Name] | [Date] |
| [FIND-NNN] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Yes/No] | [Name] | [Date] |

### 9.3 Non-Notification Justification

*Where a finding meets borderline criteria but a decision is made not to notify BNM, the justification must be documented and approved by the Head of Internal Audit and Chief Risk Officer.*

| Finding ID | Rationale for Non-Notification | Approved By (Head of IA) | Approved By (CRO) | Date |
|---|---|---|---|---|
| [FIND-NNN] | [Full written justification] | [Signature / Name] | [Signature / Name] | [Date] |

---

## 10. Notification Timeline Requirements

### 10.1 Mandatory Timeline — RMiT Clause 16.5

*The 30-day notification window commences from the date the finding is formally confirmed. The finding confirmation date is defined as the date the Head of Internal Audit approves the final finding classification.*

| Milestone | Requirement | Responsibility | Deadline Calculation |
|---|---|---|---|
| Finding Confirmed | Head of IA formally approves finding and severity rating | Head of Internal Audit | Day 0 (T) |
| Internal Escalation Completed | CRO and relevant C-suite notified | Head of Internal Audit | T + 2 business days |
| Draft BNM Notification Prepared | Draft notification document prepared for review | Lead Auditor / IA Manager | T + 10 calendar days |
| Legal and Compliance Review | Legal and Compliance review and approve notification content | Legal / Compliance Officer | T + 15 calendar days |
| Management Approval | CEO (or designated authority) approves notification | CEO / Delegated Authority | T + 20 calendar days |
| BNM Notification Submitted | Formal notification submitted to BNM | Head of Internal Audit / Designated Liaison | T + 30 calendar days (mandatory deadline) |
| BNM Acknowledgement Obtained | Written acknowledgement received from BNM and filed | Compliance Officer | As soon as received |
| Remediation Plan Submitted | Remediation plan submitted to BNM (if required) | Asset Owner / Head of IA | As directed by BNM or within 14 days of notification |

### 10.2 Notification Timeline Tracking

| Finding ID | Finding Confirmed Date (T) | Internal Escalation Date | Draft Notification Date | Legal Review Date | Approval Date | Submission Date | BNM Acknowledgement Date | Days Used (of 30) | Status |
|---|---|---|---|---|---|---|---|---|---|
| [FIND-001] | [YYYY-MM-DD] | [Date] | [Date] | [Date] | [Date] | [Date] | [Date] | [N days] | [On Track / Submitted / Overdue] |
| [FIND-NNN] | [Date] | [Date] | [Date] | [Date] | [Date] | [Date] | [Date] | [N days] | [Status] |

### 10.3 BNM Notification Record

*Maintain a complete record of each formal submission to BNM. This record constitutes primary regulatory evidence.*

| Notification ID | Finding ID(s) | Date Submitted | Submission Method | BNM Reference No. | Acknowledgement Received | Follow-up Required |
|---|---|---|---|---|---|---|
| BNM-NOTIF-001 | [FIND-001] | [YYYY-MM-DD] | [Secure email / BNM portal / In person] | [BNM Ref] | [Yes — Date] | [Yes / No — detail] |
| BNM-NOTIF-NNN | [Finding IDs] | [Date] | [Method] | [BNM Ref] | [Yes/No — Date] | [Detail] |

### 10.4 Remediation Status Reporting

| Finding ID | Remediation Plan Submitted | Planned Completion Date | Progress Updates Provided | Actual Closure Date | BNM Sign-off Received |
|---|---|---|---|---|---|
| [FIND-001] | [Date / Pending] | [Date] | [Date(s) of updates] | [Date / Open] | [Yes / No / Not required] |
| [FIND-NNN] | [Date] | [Date] | [Dates] | [Date] | [Yes/No] |

### 10.5 Breach of Notification Timeline

*If the 30-day deadline cannot be met, the following procedure applies.*

Where [Organization Name] determines that the 30-day notification timeline cannot be met:

1. The Head of Internal Audit must immediately notify the Chief Risk Officer and Chief Executive Officer in writing
2. A written explanation of the delay must be prepared, including the reason and revised notification date
3. The Chief Executive Officer must approve the delay rationale
4. BNM must be contacted proactively before the deadline to advise of the delay and provide a committed revised date
5. All correspondence relating to the timeline breach must be retained in the notification record

| Breach Record ID | Finding ID | Deadline Date | Breach Identified Date | Reason for Delay | CRO Notified | CEO Approved | BNM Contacted | Revised Date | Submitted Date |
|---|---|---|---|---|---|---|---|---|---|
| BREACH-001 | [FIND-NNN] | [Date] | [Date] | [Reason] | [Date] | [Date] | [Date] | [Date] | [Date] |

---

## 11. Roles and Responsibilities

### 11.1 RACI Matrix

*The RACI matrix below assigns accountability for each key activity in the audit finding notification process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of Internal Audit | Lead Auditor | Chief Risk Officer | CISO | Legal & Compliance | CEO / MD | Audit Committee | BNM Liaison |
|---|---|---|---|---|---|---|---|---|
| Conduct audit engagement | A | R | I | C | I | I | I | — |
| Identify and document finding | A | R | I | C (TRD-01) | I | I | I | — |
| Assign preliminary severity rating | A | R | C | C (TRD-01) | C | I | I | — |
| Approve final severity rating | A/R | C | C | C | C | I | I | — |
| Assess notification trigger criteria | R/A | C | C | C | C | I | I | — |
| Approve notification decision | A | C | C | C | C | R | I | — |
| Prepare draft BNM notification | A | R | C | C | C | I | I | C |
| Legal and compliance review of notification | C | C | C | C | A/R | I | I | — |
| Approve notification for submission | C | — | C | — | C | A/R | I | — |
| Submit notification to BNM | A/R | — | I | I | C | I | I | R |
| Obtain and file BNM acknowledgement | C | — | I | — | A/R | I | I | C |
| Report to Audit Committee | A/R | C | C | C | I | C | I | — |
| Monitor remediation progress | A | R | C | C (TRD-01) | I | I | I | — |
| Confirm finding closure | A/R | C | I | I | I | I | I | — |
| Update BNM on remediation status | A | C | C | — | C | I | — | R |
| Maintain notification register | A | C | I | I | C | I | I | — |

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial document creation |
| [1.1] | [YYYY-MM-DD] | [Author Name] | [Description of changes] |
| [2.0] | [YYYY-MM-DD] | [Author Name] | [Description of changes] |

### 12.2 Review Schedule

| Review Type | Frequency | Next Due Date | Reviewer |
|---|---|---|---|
| Periodic review | Quarterly | [YYYY-MM-DD] | Head of Internal Audit |
| Event-triggered review | Per notification event | As required | Head of Internal Audit |
| Regulatory review | Upon BNM RMiT update | As required | Head of IA / Compliance |
| Annual comprehensive review | Annual | [YYYY-MM-DD] | Audit Committee |

### 12.3 Approval Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Internal Audit | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| Chief Executive Officer / Managing Director | [Name] | __________________ | [Date] |
| Audit Committee Chair | [Name] | __________________ | [Date] |

---

## 13. References

| Reference | Title | Issuing Body | Version / Date | Relevant Provisions |
|---|---|---|---|---|
| BNM/RH/PD 028-109 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | [Current version] | Clause 16.5 (Audit Finding Notification); Clauses 16.1–16.4 (Internal Audit Requirements) |
| BNM/RH/GL 001-3 | Guidelines on Internal Audit Function for Financial Institutions | Bank Negara Malaysia | [Current version] | All sections |
| Financial Services Act 2013 | Financial Services Act 2013 | Parliament of Malaysia | 2013 (as amended) | Section 47 (Reporting obligations) |
| Islamic Financial Services Act 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | 2013 (as amended) | [Applicable section] |
| Personal Data Protection Act 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 (as amended) | Audit records data governance |
| International Standards for the Professional Practice of Internal Auditing | IIA Standards | Institute of Internal Auditors | [Current edition] | Standards 2060, 2440 (Reporting to Senior Management and the Board) |
| ISACA ITAF | IT Assurance Framework | ISACA | [Current edition] | IT audit methodology |
| COBIT 2019 | COBIT 2019 Framework | ISACA | 2019 | MEA02 (Managed System Controls Monitoring) |
| [Organization Name] Internal Audit Charter | Internal Audit Charter | [Organization Name] | [Version / Date] | Audit independence and scope |
| [Organization Name] Technology Risk Management Policy | Technology Risk Management Policy | [Organization Name] | [Version / Date] | Technology risk governance |

---

## 14. Appendices

### Appendix A — BNM Notification Form Template

*Standard form to be used for all notifications submitted to BNM under RMiT Clause 16.5. This form should be reviewed against current BNM submission requirements before each use.*

**[Organization Name] — BNM Audit Finding Notification**

| Field | Details |
|---|---|
| Institution Name | [Organization Name] |
| Institution License Number | [BNM License No.] |
| Notification Reference | [BNM-NOTIF-YYYY-NNN] |
| Date of Notification | [YYYY-MM-DD] |
| Finding Reference | [FIND-NNN] |
| Engagement Reference | [AUDIT-YYYY-NNN] |
| Finding Title | [Title] |
| Finding Severity | [Critical / High] |
| Risk Domain | [TRD-XX — Domain Name] |
| System(s) / Asset(s) Affected | [Asset Name(s)] |
| Summary of Finding | [Concise factual description of the control failure or non-compliance identified] |
| Root Cause | [Identified root cause] |
| Potential Impact | [Description of potential financial, operational, or regulatory impact] |
| Date Finding Confirmed | [YYYY-MM-DD] |
| Date of Internal Escalation | [YYYY-MM-DD] |
| Proposed Remediation | [Description of remediation actions planned or underway] |
| Proposed Remediation Completion Date | [YYYY-MM-DD] |
| Accountable Owner for Remediation | [Name / Title] |
| Head of Internal Audit | [Name] |
| Contact for BNM Queries | [Name / Email / Phone] |

---

### Appendix B — Severity Escalation Decision Tree

*Use this decision tree to guide severity classification and notification decisions where there is uncertainty.*

```
START: Finding Identified
        |
        v
Is the finding related to an active exploitation or
ongoing security incident affecting critical systems?
        |
   YES  |  NO
        |   |
        |   v
        |  Does the finding constitute direct non-compliance
        |  with an explicit BNM RMiT requirement?
        |   |
        |  YES | NO
        |       |
        |       v
        |  Could the finding result in financial loss,
        |  customer harm, or reputational damage?
        |       |
        |      YES | NO
        |           |
        |           v
        |       Is there a prior commitment to BNM
        |       that this control would be in place?
        |           |
        |         YES | NO
        |               |
        |               v
        |           HIGH or MEDIUM — escalate to Head of IA for final determination
        |
        v
CRITICAL — notify BNM within 30 days; escalate to CEO and Board
```

---

### Appendix C — Notification Register Summary

*Maintain a rolling summary of all BNM notifications submitted. This register provides a single view of the institution's notification history and is reviewed at each Audit Committee meeting.*

| Notification ID | Finding ID | Finding Title | Severity | Domain | Date Confirmed | Date Submitted | Days Used | BNM Ref | Remediation Status | Closed |
|---|---|---|---|---|---|---|---|---|---|---|
| BNM-NOTIF-001 | FIND-001 | [Title] | [Sev] | [Domain] | [Date] | [Date] | [N] | [BNM Ref] | [In Progress / Complete] | [Yes/No] |
| BNM-NOTIF-NNN | FIND-NNN | [Title] | [Sev] | [Domain] | [Date] | [Date] | [N] | [BNM Ref] | [Status] | [Yes/No] |

---

### Appendix D — Remediation Tracking Template

*Use this template to track and report remediation progress for each notified finding. A copy should be provided to BNM at agreed reporting intervals.*

**Remediation Status Report — Finding [FIND-NNN]**

| Field | Details |
|---|---|
| Finding ID | [FIND-NNN] |
| Finding Title | [Title] |
| BNM Notification Reference | [BNM-NOTIF-NNN] |
| Remediation Owner | [Name / Title] |
| Report Date | [YYYY-MM-DD] |
| Planned Completion Date | [YYYY-MM-DD] |
| Revised Completion Date (if applicable) | [YYYY-MM-DD — with explanation] |

| Action Item | Responsible Party | Target Date | Status | Evidence of Completion |
|---|---|---|---|---|
| [Action 1] | [Name] | [Date] | [Not Started / In Progress / Complete] | [Evidence reference] |
| [Action 2] | [Name] | [Date] | [Status] | [Evidence reference] |
| [Action N] | [Name] | [Date] | [Status] | [Evidence reference] |

**Overall Remediation Status:** [On Track / At Risk / Delayed — provide narrative]

**Residual Risk Assessment:** [Describe any residual risk that will remain after remediation is complete]

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| Audit Finding | A condition identified during an audit engagement that represents a deviation from expected, required, or best-practice performance |
| BNM | Bank Negara Malaysia — the Central Bank of Malaysia |
| Critical Information Infrastructure (CII) | Systems and assets essential to national security, public health, safety, or the economy |
| Notifiable Finding | An audit finding meeting one or more trigger criteria in Section 9 requiring formal notification to BNM |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk management at financial institutions |
| Severity | A rating that reflects the potential impact and likelihood of harm arising from an audit finding |
| T | Day zero — the date a finding is formally confirmed by the Head of Internal Audit, commencing the 30-day notification period |
| [Term] | [Definition] |

---

*End of Document*

*This template is intended as a starting point and must be reviewed by [Organization Name]'s legal, compliance, and internal audit teams before use. All regulatory references should be validated against the current versions of applicable BNM policy documents and Malaysian legislation in force at the time of use.*