# Standard Access Review Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Roles and Responsibilities](#2-roles-and-responsibilities)
3. [Policy Statements and Requirements](#3-policy-statements-and-requirements)
4. [Access Review Records](#4-access-review-records)
5. [Exceptions and Escalation Process](#5-exceptions-and-escalation-process)
6. [Compliance and Enforcement](#6-compliance-and-enforcement)
7. [Review and Approval History](#7-review-and-approval-history)
8. [References](#8-references)
9. [Appendices](#9-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the purpose of this document, including the regulatory obligation it fulfils and its role in the organisation's access governance framework.*

This document establishes the Standard Access Review Records for **[Organization Name]**, serving as the official log and evidence repository for semi-annual access reviews conducted on standard user accounts across all in-scope systems and platforms. These records demonstrate compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.57**, which mandates periodic review of user access rights to ensure that access privileges remain appropriate, authorised, and aligned with the principle of least privilege.

This artifact is system-generated and maintained by the IT Operations team. It provides an auditable trail of access review activities, findings, remediation actions, and attestations performed during each review cycle.

### 1.2 Scope

*Define the boundaries of this access review — which systems, user populations, and access types are covered.*

These records apply to:

- **In-Scope Systems:** [List all systems, applications, and infrastructure components subject to access review, e.g., core banking system, internal portals, network devices, cloud platforms]
- **User Population:** All standard users holding access rights to in-scope systems, including full-time employees, part-time staff, and interns. Privileged and third-party access reviews are governed under separate records.
- **Access Types Reviewed:** Application access, system access, network access, and database access assigned to standard (non-privileged) user accounts.
- **Review Frequency:** Semi-annual (every six months), with records consolidated and formally approved on an **annual** basis.
- **Exclusions:** Privileged user accounts (covered under Privileged Access Review Records), service accounts, and emergency/break-glass accounts are excluded from this record set.

### 1.3 Regulatory Context

This document directly supports compliance with the following regulatory obligation:

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | 10.57 | Financial institutions must conduct periodic reviews of user access rights to verify appropriateness and remove access that is no longer required. |

---

## 2. Roles and Responsibilities

*Define accountability for the access review process using the RACI model. Ensure all roles are mapped to named positions within the organisation.*

### 2.1 RACI Matrix

| Activity | IT Operations Manager | System / Application Owner | IT Security Team | Internal Audit | Department Manager / Data Owner | CISO |
|---|---|---|---|---|---|---|
| Define access review schedule and scope | **A** | C | R | I | I | C |
| Extract and prepare access listings from systems | **R** | C | C | I | I | I |
| Distribute access listings to data owners for attestation | **R** | I | C | I | A | I |
| Review and attest user access (certify or revoke) | I | **A** | C | I | **R** | I |
| Follow up on non-responses and escalations | **R** | C | C | I | A | I |
| Execute access revocation / remediation actions | **R** | C | R | I | I | I |
| Validate remediation completion | I | C | **R** | I | I | A |
| Compile and archive review records | **R** | I | C | I | I | I |
| Submit consolidated records for annual approval | **R** | I | C | I | I | **A** |
| Independent verification / audit sampling | I | I | I | **R** | I | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 2.2 Role Definitions

| Role | Position / Title | Contact |
|---|---|---|
| IT Operations Manager | [Name / Job Title] | [Email / Extension] |
| System / Application Owner | [Name / Job Title] | [Email / Extension] |
| IT Security Team | [Team Lead Name / Job Title] | [Email / Extension] |
| Department Manager / Data Owner | [Name / Job Title] | [Email / Extension] |
| Chief Information Security Officer (CISO) | [Name / Job Title] | [Email / Extension] |
| Internal Audit | [Name / Job Title] | [Email / Extension] |

---

## 3. Policy Statements and Requirements

*Summarise the key access review policy requirements that govern this process. These should align with the organisation's Access Control Policy and RMiT obligations.*

### 3.1 General Requirements

- All standard user access rights must be reviewed on a **semi-annual** basis (minimum twice per year) to ensure access privileges remain appropriate for the user's current role and responsibilities.
- Access reviews must be conducted by the **relevant data owner or department manager**, not solely by IT Operations, to ensure business context informs access decisions.
- Any access identified as **excessive, unnecessary, or no longer required** must be revoked within **[X] business days** of identification (refer to Section 5 for escalation timelines).
- Access review records must be retained for a minimum of **[X] years** in accordance with [Organization Name]'s Records Retention Policy and BNM regulatory requirements.
- All access review activities, including attestation decisions, must be documented and traceable to named individuals.

### 3.2 Access Review Criteria

*Define the criteria used to determine whether a user's access is appropriate.*

Access is assessed against the following criteria during each review cycle:

| Criteria | Description |
|---|---|
| **Role Alignment** | Access rights are commensurate with the user's current job function and responsibilities. |
| **Least Privilege** | Users hold the minimum level of access required to perform their duties. |
| **Segregation of Duties (SoD)** | No single user holds conflicting access rights that could facilitate fraud or error. |
| **Joiners / Movers / Leavers** | Access reflects current employment status; access for transferred or departed staff is updated or removed. |
| **Dormant Accounts** | Accounts with no login activity for **[X] days** are flagged for review and potential deactivation. |
| **Shared Accounts** | Shared or generic accounts are identified, justified, and subject to enhanced scrutiny. |

### 3.3 Access Review Timeline

| Activity | Target Completion |
|---|---|
| System access report extraction | Day 1 of review cycle |
| Distribution to data owners for attestation | Day 3 of review cycle |
| Attestation deadline (data owners) | Day [X] of review cycle |
| Remediation of identified issues | Within [X] business days of attestation |
| Escalation for non-responses | Day [X] of review cycle |
| Review cycle closure and record archival | Day [X] of review cycle |

---

## 4. Access Review Records

*This section constitutes the core system-generated log of each access review cycle. Records are generated automatically from the Identity and Access Management (IAM) system / [specify system name] and supplemented with attestation outcomes.*

### 4.1 Review Cycle Summary

*Complete this summary table for each semi-annual review cycle. Two cycles constitute one annual record.*

| Field | Cycle 1 (H1) | Cycle 2 (H2) |
|---|---|---|
| **Review Period** | [01 January YYYY – 30 June YYYY] | [01 July YYYY – 31 December YYYY] |
| **Review Reference Number** | [REF-YYYY-H1-001] | [REF-YYYY-H2-001] |
| **Date Initiated** | [Date] | [Date] |
| **Date Completed** | [Date] | [Date] |
| **Conducted By** | [Name, IT Operations Manager] | [Name, IT Operations Manager] |
| **Total Accounts Reviewed** | [Number] | [Number] |
| **Total Systems Reviewed** | [Number] | [Number] |
| **Accounts Confirmed Appropriate** | [Number] | [Number] |
| **Accounts Flagged for Action** | [Number] | [Number] |
| **Accounts Revoked / Deactivated** | [Number] | [Number] |
| **Exceptions Raised** | [Number] | [Number] |
| **Outstanding Actions at Closure** | [Number / None] | [Number / None] |

### 4.2 System-Level Access Review Log

*One table per in-scope system. Replicate this table for each system reviewed. This record is system-generated from [IAM System / Privileged Access Management Tool / HR System].*

**System Name:** [System / Application Name]
**System Owner:** [Name, Title]
**Data Classification:** [Public / Internal / Confidential / Restricted]
**Review Reference:** [REF-YYYY-HX-001]

| User ID | Full Name | Department | Job Title | Access Role / Profile | Last Login Date | Access Status | Attestation Decision | Attested By | Attestation Date | Action Required | Action Completed Date | Remarks |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [USR001] | [Full Name] | [Department] | [Job Title] | [Read-Only / Standard User / etc.] | [DD/MM/YYYY] | [Active / Dormant] | [Approved / Revoke / Modify] | [Manager Name] | [DD/MM/YYYY] | [None / Revoke / Modify Role] | [DD/MM/YYYY] | [Free text] |
| [USR002] | [Full Name] | [Department] | [Job Title] | [Access Role] | [DD/MM/YYYY] | [Active / Dormant] | [Approved / Revoke / Modify] | [Manager Name] | [DD/MM/YYYY] | [None / Revoke / Modify Role] | [DD/MM/YYYY] | [Free text] |
| [USR003] | [Full Name] | [Department] | [Job Title] | [Access Role] | [DD/MM/YYYY] | [Active / Dormant] | [Approved / Revoke / Modify] | [Manager Name] | [DD/MM/YYYY] | [None / Revoke / Modify Role] | [DD/MM/YYYY] | [Free text] |

> *Repeat the above table for each in-scope system. A consolidated system index is maintained in Appendix A.*

### 4.3 Dormant Account Register

*List all accounts identified as dormant (no login activity for [X] days or more) during the review cycle.*

| User ID | Full Name | Department | System | Last Login Date | Days Dormant | Disposition | Actioned By | Action Date |
|---|---|---|---|---|---|---|---|---|
| [USR00X] | [Full Name] | [Department] | [System Name] | [DD/MM/YYYY] | [Number] | [Deactivated / Retained with Justification / Deleted] | [Name] | [DD/MM/YYYY] |

### 4.4 Joiner / Mover / Leaver (JML) Reconciliation

*Reconcile access provisioning and deprovisioning events against HR records for the review period.*

| Event Type | Employee Name | User ID | Department | Effective Date (HR) | Access Actioned Date | System(s) Affected | Status | Remarks |
|---|---|---|---|---|---|---|---|---|
| **Joiner** | [Full Name] | [USR00X] | [Department] | [DD/MM/YYYY] | [DD/MM/YYYY] | [System Name] | [Completed / Pending] | [Free text] |
| **Mover** | [Full Name] | [USR00X] | [Old Dept → New Dept] | [DD/MM/YYYY] | [DD/MM/YYYY] | [System Name] | [Completed / Pending] | [Free text] |
| **Leaver** | [Full Name] | [USR00X] | [Department] | [DD/MM/YYYY] | [DD/MM/YYYY] | [System Name] | [Completed / Pending] | [Free text] |

### 4.5 Access Review Attestation Summary

*High-level summary of attestation completion rates by department.*

| Department | Total Users | Attestations Received | Attestations Pending | Non-Response (Escalated) | Completion Rate (%) |
|---|---|---|---|---|---|
| [Department Name] | [Number] | [Number] | [Number] | [Number] | [%] |
| [Department Name] | [Number] | [Number] | [Number] | [Number] | [%] |
| **Total** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[%]** |

---

## 5. Exceptions and Escalation Process

*Document any exceptions to standard access review requirements and the process for escalating unresolved findings.*

### 5.1 Exception Management

*An exception is raised when a user's access cannot be removed or modified within the standard remediation window, or when access that would ordinarily be revoked must be retained for a justified business reason.*

All exceptions require:
1. Formal documentation on the **Access Review Exception Form** (Appendix B)
2. Written justification from the requesting **Department Manager**
3. Approval by the **IT Operations Manager** and **CISO**
4. A defined **expiry date** (maximum [X] months) after which the exception is re-evaluated
5. Logging in the Exception Register below

#### Exception Register

| Exception Ref | User ID | User Name | System | Access Type | Justification | Risk Rating | Approved By | Approval Date | Expiry Date | Compensating Controls |
|---|---|---|---|---|---|---|---|---|---|---|
| [EXC-YYYY-001] | [USR00X] | [Full Name] | [System] | [Access Role] | [Business justification] | [High / Medium / Low] | [Name, Title] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Describe compensating controls] |

### 5.2 Escalation Process

*Define the escalation path for non-compliance with the access review process, including non-responses from data owners and unresolved remediation actions.*

| Trigger | Escalation Level | Escalation To | Timeline |
|---|---|---|---|
| Data owner fails to complete attestation by deadline | Level 1 | IT Operations Manager → Department Manager | Day [X] after deadline |
| Remediation action not completed within [X] business days | Level 2 | IT Operations Manager → CISO | Day [X] after remediation deadline |
| Systemic non-compliance by a department | Level 3 | CISO → Board Risk Committee / Senior Management | As assessed |
| Potential security incident identified during review | Immediate | IT Security Team → CISO → Incident Response | Immediately upon identification |

### 5.3 Unresolved Findings Log

*Track all findings from the review cycle that remained open at cycle closure, along with agreed resolution dates.*

| Finding Ref | User ID | System | Issue Description | Identified Date | Responsible Owner | Agreed Resolution Date | Status | Remarks |
|---|---|---|---|---|---|---|---|---|
| [FND-YYYY-001] | [USR00X] | [System] | [Description of finding] | [DD/MM/YYYY] | [Name, Title] | [DD/MM/YYYY] | [Open / Resolved / Escalated] | [Free text] |

---

## 6. Compliance and Enforcement

*Describe how compliance with the access review process is monitored and what consequences apply for non-compliance.*

### 6.1 Compliance Monitoring

- The **IT Operations Manager** is responsible for tracking adherence to the access review schedule and remediation timelines.
- **IT Security** will conduct quarterly spot-checks on a sample of access review records to verify completeness, accuracy, and timely remediation.
- **Internal Audit** will independently assess the access review process as part of the annual IT audit cycle.
- Key performance indicators (KPIs) for this process include:

| KPI | Target | Measurement Frequency |
|---|---|---|
| Access review completion rate | ≥ 95% of in-scope accounts reviewed per cycle | Semi-annual |
| Attestation completion rate (by data owners) | ≥ 90% by original deadline | Semi-annual |
| Remediation completion within SLA | ≥ 95% within [X] business days | Semi-annual |
| Exception approvals within defined timeline | 100% | Semi-annual |
| Dormant account deactivation rate | 100% within [X] days of identification | Semi-annual |

### 6.2 Non-Compliance Consequences

*Document the consequences applicable to individuals and departments that fail to comply with this policy.*

Non-compliance with the access review process may result in:

- Formal escalation to Senior Management and the Board Risk Committee
- Disciplinary action in accordance with [Organization Name]'s Human Resources policies
- Mandatory access revocation pending remediation of compliance gaps
- Adverse findings in Internal Audit reports
- Regulatory reporting obligations where non-compliance constitutes a breach of BNM RMiT requirements

### 6.3 Regulatory Reporting

*Describe circumstances under which access review findings must be reported to regulators.*

Significant access control failures, including widespread inappropriate access, evidence of access misuse, or systemic process breakdowns, must be assessed for regulatory notification in accordance with [Organization Name]'s Incident Reporting Policy and BNM's reporting obligations under [relevant BNM circular/guideline].

| Reporting Trigger | Report To | Timeline |
|---|---|---|
| Confirmed unauthorised access event linked to access review gaps | CISO → Board → BNM (as applicable) | [X] hours / days |
| Systemic failure of access review process affecting multiple systems | CISO → Senior Management | [X] business days |
| Material exception approved post-review | Internal Audit notification | At approval |

---

## 7. Review and Approval History

### 7.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Title] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Author Name, Title] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Title] | [Description of changes] |

### 7.2 Annual Review Sign-Off

*This access review record set is formally approved on an annual basis. Both semi-annual review cycles must be completed prior to annual sign-off.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], IT Operations Manager | __________________ | [DD/MM/YYYY] |
| Reviewed By | [Name], IT Security Team Lead | __________________ | [DD/MM/YYYY] |
| Reviewed By | [Name], Internal Audit | __________________ | [DD/MM/YYYY] |
| Approved By | [Name], Chief Information Security Officer (CISO) | __________________ | [DD/MM/YYYY] |
| Noted By | [Name], Chief Information Officer (CIO) | __________________ | [DD/MM/YYYY] |

---

## 8. References

*The following regulatory documents, standards, and internal policies govern this artifact.*

| Reference | Document Title | Clause / Section | Remarks |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **10.57** | Periodic review of user access rights |
| BNM RMiT | Risk Management in Technology Policy Document | [Related Clauses, e.g., 10.55, 10.56] | [Access provisioning / deprovisioning controls] |
| ISO/IEC 27001:2022 | Information Security Management Systems | A.8.2, A.8.3 | Access control and privileged access management |
| [Internal Policy] | [Organization Name] Access Control Policy | [Section] | Internal access governance requirements |
| [Internal Policy] | [Organization Name] Information Security Policy | [Section] | Overarching security policy |
| [Internal Policy] | [Organization Name] Records Retention Policy | [Section] | Retention requirements for access logs |
| [Internal Procedure] | User Access Provisioning and Deprovisioning Procedure | [Section] | JML process |

---

## 9. Appendices

### Appendix A — In-Scope Systems Index

*List all systems and applications included in the access review scope for the current annual cycle.*

| System / Application Name | System Owner | Data Classification | Review Reference (H1) | Review Reference (H2) | Notes |
|---|---|---|---|---|---|
| [System Name] | [Owner Name] | [Confidential / Internal] | [REF-YYYY-H1-001] | [REF-YYYY-H2-001] | [Free text] |
| [System Name] | [Owner Name] | [Confidential / Internal] | [REF-YYYY-H1-002] | [REF-YYYY-H2-002] | [Free text] |

### Appendix B — Access Review Exception Form Template

*Use this form to formally document and request approval for any exception to the standard access review requirements.*

**Exception Reference:** [EXC-YYYY-XXX]
**Date Submitted:** [DD/MM/YYYY]

| Field | Details |
|---|---|
| **User ID** | [USR00X] |
| **User Full Name** | [Full Name] |
| **Department** | [Department Name] |
| **System / Application** | [System Name] |
| **Access Role / Profile** | [Role Name] |
| **Exception Type** | [Retention of access / Delayed revocation / Access modification deferral] |
| **Justification** | [Detailed business justification] |
| **Risk Assessment** | [High / Medium / Low] — [Brief risk description] |
| **Compensating Controls** | [Describe controls mitigating the risk] |
| **Requested Expiry Date** | [DD/MM/YYYY] |
| **Requested By** | [Name, Department Manager] |
| **IT Operations Manager Approval** | [Name] — Approved / Rejected — [DD/MM/YYYY] |
| **CISO Approval** | [Name] — Approved / Rejected — [DD/MM/YYYY] |

### Appendix C — Glossary

| Term | Definition |
|---|---|
| **Access Review** | A periodic process of verifying that user access rights remain appropriate for an individual's current role and responsibilities. |
| **Attestation** | The formal act of a data owner or manager certifying that a user's access is appropriate and should be retained or modified/revoked. |
| **Dormant Account** | A user account that has not been accessed for a defined period (e.g., [X] days), indicating the account may no longer be in active use. |
| **Least Privilege** | The principle that users should be granted the minimum level of access rights required to perform their job functions. |
| **Privileged User** | A user with elevated access rights beyond standard user access, such as system administrators, database administrators, or security personnel. |
| **Segregation of Duties (SoD)** | The practice of dividing critical tasks and access rights among multiple individuals to reduce the risk of error or fraud. |
| **Standard User** | An end user with non-privileged system access appropriate for their business role. |
| **JML** | Joiner, Mover, Leaver — the lifecycle events of an employee that trigger access provisioning, modification, or deprovisioning. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions. |

### Appendix D — Review Cycle Archive Index

*Maintain a running index of all completed access review cycles for traceability.*

| Cycle Reference | Review Period | Completion Date | Records Location | Approved By | Approval Date |
|---|---|---|---|---|---|
| [REF-YYYY-H1-MASTER] | [01 Jan – 30 Jun YYYY] | [DD/MM/YYYY] | [File path / SharePoint link / Document Management System reference] | [Name, CISO] | [DD/MM/YYYY] |
| [REF-YYYY-H2-MASTER] | [01 Jul – 31 Dec YYYY] | [DD/MM/YYYY] | [File path / SharePoint link / Document Management System reference] | [Name, CISO] | [DD/MM/YYYY] |

---

*This document is classified as **Confidential**. It must be handled, stored, and transmitted in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: IT Operations Manager | Next Review: [Next Review Date]*