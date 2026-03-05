# Annual Policy Review Records — Access Control Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | IAM Manager |
| **Department** | Information Security / Identity & Access Management |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By — Name, Designation] |
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT), Clause 10.51 |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be disclosed to unauthorized personnel. Any reproduction, distribution, or transmission of this document without prior written approval from the Document Owner is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Framework](#2-regulatory-and-policy-framework)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Access Control Policy Statements and Requirements](#4-access-control-policy-statements-and-requirements)
5. [Access Provisioning and Deprovisioning Workflow](#5-access-provisioning-and-deprovisioning-workflow)
6. [Segregation of Duties Matrix](#6-segregation-of-duties-matrix)
7. [Periodic Access Certification Process](#7-periodic-access-certification-process)
8. [Annual Review Findings and Change Log](#8-annual-review-findings-and-change-log)
9. [Risk and Gap Assessment](#9-risk-and-gap-assessment)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the purpose of this annual review record — what it evidences, why it is maintained, and its role in demonstrating regulatory compliance.*

This document constitutes the **Annual Policy Review Record** for the Access Control Policy of [Organization Name]. It serves as formal evidence that the Access Control Policy has been reviewed, assessed for adequacy, updated where necessary, and approved by authorized personnel in accordance with:

- **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT)**, Clause 10.51, which requires financial institutions to establish, maintain, and periodically review access control policies to ensure continued effectiveness and relevance to the evolving technology and threat landscape.
- **[Organization Name] Internal Governance Framework**, including the Information Security Policy and Technology Risk Management Policy.

The purpose of this annual review is to:

- Confirm that the Access Control Policy remains aligned with BNM RMiT requirements and any updates issued by BNM during the review period.
- Identify changes in the organization's technology environment, business operations, or risk profile that necessitate policy amendments.
- Validate that the policy accurately reflects current access management practices.
- Obtain formal management approval and endorsement for the reviewed or updated policy.
- Maintain a documented audit trail for regulatory examination by BNM supervisory teams.

### 1.2 Scope

*Define the boundaries of this review — which systems, user populations, access types, and organizational units are covered.*

This review covers the Access Control Policy as it applies to:

**In Scope:**

- All information systems, applications, databases, network infrastructure, and cloud environments owned or operated by [Organization Name].
- All user populations including:
  - Permanent employees across all business units and departments.
  - Contract and third-party personnel with access to [Organization Name] systems.
  - Privileged users including system administrators, database administrators, and IT operations staff.
  - Service accounts and system-to-system integration accounts.
- All access types including:
  - Logical access to systems and applications.
  - Privileged and administrative access.
  - Remote access (VPN, remote desktop, API-based access).
  - Cloud platform access (IaaS, PaaS, SaaS).
  - Physical access to data centres and server rooms, where governed by the access control framework.
- All organizational units of [Organization Name] including subsidiaries and branches, where applicable.

**Out of Scope:**

- [List any systems, environments, or user populations explicitly excluded from this policy, along with the rationale for exclusion.]
- Physical building access managed by the Facilities team, unless directly integrated with logical access controls.

### 1.3 Review Period

| Field | Detail |
|---|---|
| **Review Period Covered** | [Start Date] to [End Date] |
| **Review Initiated By** | [Name, Designation] |
| **Review Completion Date** | [Date] |
| **Policy Version Reviewed** | [Previous Version Number] |
| **Policy Version Post-Review** | [Updated Version Number, or "No Change"] |

---

## 2. Regulatory and Policy Framework

### 2.1 Regulatory Basis

*Summarize the specific BNM RMiT clauses and any other regulatory instruments that mandate the maintenance and periodic review of an access control policy.*

[Organization Name]'s Access Control Policy and its annual review process are anchored in the following regulatory and standards framework:

| Regulatory Instrument | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | **10.51** | Financial institutions shall establish and maintain a formal access control policy. The policy shall be reviewed and updated at least annually or upon significant changes to the technology environment or business operations. |
| BNM Risk Management in Technology (RMiT) | [Additional Clause] | [Summary of requirement] |
| Personal Data Protection Act 2010 (PDPA) | [Relevant Section] | [Summary of requirement relating to access controls for personal data] |
| [Other Regulation, e.g., BNM Guidelines on Management of Cyber Risk] | [Clause] | [Summary] |
| ISO/IEC 27001:2022 | A.5.15, A.5.18 | Access control policy and access rights management. |

### 2.2 Internal Policy Hierarchy

*Describe where this policy sits within the organization's internal policy framework.*

The Access Control Policy reviewed herein sits within the following internal governance hierarchy:

```
Board-Approved Information Security Framework
    └── Technology Risk Management Policy
            └── Information Security Policy
                    └── Access Control Policy  ◄ This Document
                            ├── Access Management Standard
                            ├── Privileged Access Management Standard
                            └── Identity & Access Management Procedures
```

### 2.3 Trigger Events for Out-of-Cycle Review

In addition to the mandatory annual review, the Access Control Policy shall be reviewed and updated upon occurrence of any of the following trigger events:

- A significant change in [Organization Name]'s technology architecture or infrastructure.
- Introduction of new systems, platforms, or cloud services.
- A material change in organizational structure, business operations, or regulatory obligations.
- Detection of a security incident attributable to access control failures.
- A BNM regulatory update or supervisory finding related to access management.
- Findings from internal audit, external audit, or penetration testing that indicate policy gaps.

---

## 3. Roles and Responsibilities

### 3.1 RACI Matrix — Access Control Policy Review

*Identify all roles involved in the annual review process and their respective level of accountability using the RACI framework (Responsible, Accountable, Consulted, Informed).*

**RACI Key:**
- **R** — Responsible: Performs the task.
- **A** — Accountable: Ultimately answerable for the outcome (one per task).
- **C** — Consulted: Provides input; two-way communication.
- **I** — Informed: Kept informed; one-way communication.

| Activity | IAM Manager | CISO / Head of InfoSec | IT Operations | Business Unit Heads | Internal Audit | Risk Management | Technology Committee / Board |
|---|---|---|---|---|---|---|---|
| Initiate annual review cycle | R | A | I | I | I | I | I |
| Review current policy for adequacy | R | A | C | C | C | C | I |
| Assess regulatory changes (BNM RMiT updates) | R | A | I | I | C | C | I |
| Identify policy gaps and required amendments | R | A | C | C | C | C | I |
| Draft policy amendments | R | A | C | I | I | I | I |
| Review and validate amended policy | C | A | R | C | C | C | I |
| Obtain stakeholder endorsement | I | R | I | A | C | C | I |
| Submit policy for formal approval | I | R | I | I | I | I | A |
| Communicate approved policy to all staff | R | A | C | C | I | I | I |
| Update policy repository and document management system | R | A | I | I | I | I | I |
| Monitor policy compliance post-approval | R | A | C | C | R | C | I |
| Report review completion to governance bodies | I | R | I | I | C | C | A |

### 3.2 Role Definitions

*Provide a brief description of each role's standing responsibilities in relation to access control policy management.*

| Role | Organization Unit | Key Responsibilities |
|---|---|---|
| **IAM Manager** | Information Security / IT | Day-to-day policy owner. Responsible for maintaining, updating, and enforcing the Access Control Policy. Coordinates annual review. |
| **CISO / Head of Information Security** | Information Security | Executive sponsor of the policy. Accountable for information security risk management. Approves policy amendments prior to escalation to the Technology Committee. |
| **IT Operations Manager** | IT Operations | Ensures technical access controls are implemented in alignment with policy requirements. Provides operational input during reviews. |
| **Business Unit Heads** | All Business Units | Accountable for ensuring their respective teams comply with the Access Control Policy. Participate in access certification exercises. |
| **Internal Audit** | Internal Audit | Provides independent assurance on the adequacy of the Access Control Policy and its implementation. Consulted during review. |
| **Risk Management** | Risk Management | Ensures policy aligns with the organization's risk appetite. Reviews risk-related sections. |
| **Technology Committee / Board** | Governance | Provides final approval for the Access Control Policy and its annual revisions. |
| **Human Resources** | HR | Consulted on joiner/mover/leaver processes. Provides input on onboarding and offboarding procedures. |
| **Legal / Compliance** | Legal & Compliance | Ensures policy reflects current regulatory obligations under BNM, PDPA, and other applicable legislation. |

---

## 4. Access Control Policy Statements and Requirements

### 4.1 Policy Statement

*State the overarching access control policy position of the organization. This should be a clear, authoritative statement of intent.*

[Organization Name] is committed to protecting the confidentiality, integrity, and availability of its information assets by ensuring that access to systems, applications, data, and infrastructure is granted on a **need-to-know** and **least-privilege** basis, subject to formal authorization, and is reviewed regularly to remain appropriate.

Access to information assets shall be managed in accordance with the principles of:

- **Least Privilege** — Users are granted only the minimum access necessary to perform their designated job functions.
- **Need-to-Know** — Access is restricted to information directly required for an individual's business role.
- **Segregation of Duties** — Conflicting access rights are identified and controlled to prevent fraud and error.
- **Accountability** — All access activities are logged and attributable to individual identities.
- **Formal Authorization** — All access grants, modifications, and removals are subject to a documented approval process.

### 4.2 Access Control Requirements

*List the specific requirements that the policy mandates, cross-referencing BNM RMiT clauses where applicable.*

#### 4.2.1 Identity Management Requirements

| Requirement | Description | RMiT Reference | Status (Review Findings) |
|---|---|---|---|
| **Unique User Identification** | Every user accessing [Organization Name] systems must be assigned a unique user ID. Shared accounts are prohibited except where technically unavoidable and subject to compensating controls. | 10.51 | [Compliant / Non-Compliant / Gap Identified] |
| **Identity Verification** | User identity must be verified prior to account creation. | 10.51 | [Status] |
| **Service Account Management** | Service and system accounts must be registered in the IAM inventory, assigned a business owner, and reviewed at least annually. | 10.51 | [Status] |
| **Multi-Factor Authentication (MFA)** | MFA shall be enforced for all remote access, privileged accounts, and access to critical systems as defined in the Critical System Register. | [Clause] | [Status] |

#### 4.2.2 Access Authorization Requirements

| Requirement | Description | RMiT Reference | Status (Review Findings) |
|---|---|---|---|
| **Formal Access Request** | All access requests must be submitted via the approved access request workflow and approved by the user's line manager and the relevant system owner. | 10.51 | [Status] |
| **Role-Based Access Control (RBAC)** | Access shall be provisioned based on defined job roles wherever technically feasible. Ad hoc individual access grants shall be documented and time-limited. | 10.51 | [Status] |
| **Privileged Access Control** | Privileged access shall require additional approval (from IAM Manager and CISO) and shall be subject to enhanced monitoring. | [Clause] | [Status] |
| **Third-Party Access** | Access for third parties and contractors requires formal justification, sponsor designation, defined access period, and NDA/confidentiality agreement. | 10.51 | [Status] |

#### 4.2.3 Access Review and Revocation Requirements

| Requirement | Description | RMiT Reference | Status (Review Findings) |
|---|---|---|---|
| **Periodic Access Certification** | All access rights shall be reviewed at least annually, or more frequently for privileged accounts (quarterly). | 10.51 | [Status] |
| **Timely Revocation on Termination** | Access shall be revoked within [X] hours of an employee's termination or resignation becoming effective. | 10.51 | [Status] |
| **Access Modification on Role Change** | Access shall be reviewed and adjusted within [X] business days of a confirmed role change or internal transfer. | 10.51 | [Status] |
| **Dormant Account Management** | Accounts inactive for more than [X] days shall be automatically disabled pending review. | [Clause] | [Status] |

#### 4.2.4 Password and Authentication Requirements

| Requirement | Description | Standard/Reference | Status (Review Findings) |
|---|---|---|---|
| **Password Complexity** | Passwords must meet minimum complexity requirements: [minimum length, character classes]. | [Internal Standard] | [Status] |
| **Password Rotation** | Passwords for standard accounts shall be rotated every [X] days; privileged accounts every [Y] days. | [Internal Standard] | [Status] |
| **Account Lockout** | Accounts shall be locked after [X] consecutive failed authentication attempts. | [Internal Standard] | [Status] |
| **Prohibited Practices** | Password sharing, storing passwords in plain text, and using default vendor credentials are prohibited. | 10.51 | [Status] |

### 4.3 Policy Exceptions

*Describe the process for managing exceptions to the Access Control Policy.*

Any deviation from the requirements stated in this policy must be formally documented as a **Policy Exception** and approved by the CISO. All exceptions shall:

- State the specific policy requirement being deviated from.
- Provide a clear business justification.
- Define compensating controls implemented to mitigate residual risk.
- Specify an expiry date (maximum exception period: [X] months).
- Be logged in the Policy Exception Register maintained by the Information Security team.
- Be reported to Internal Audit and the Technology Risk Committee on a [quarterly] basis.

| Exception Reference | Policy Clause | Justification | Compensating Control | Approved By | Expiry Date |
|---|---|---|---|---|---|
| [EXC-2025-001] | [Policy Clause] | [Justification] | [Control] | [Name] | [Date] |
| [EXC-2025-002] | | | | | |

---

## 5. Access Provisioning and Deprovisioning Workflow

### 5.1 Overview

*Describe at a high level the joiner-mover-leaver (JML) lifecycle and how access management is integrated with HR processes.*

[Organization Name] manages access rights across the full employment and engagement lifecycle, encompassing joiners (new hires and new contractors), movers (internal transfers and role changes), and leavers (resignations, terminations, retirements, and contract expiries). This lifecycle is referred to as the **Joiner-Mover-Leaver (JML) process**.

Access provisioning and deprovisioning is triggered by events in [Organization Name]'s HR system ([HR System Name]) and executed via the Identity & Access Management system ([IAM System Name]).

### 5.2 Joiner — Access Provisioning Workflow

*Document the step-by-step process for provisioning access to new users.*

#### 5.2.1 Standard User Onboarding

| Step | Activity | Responsible Party | Timeframe | Evidence |
|---|---|---|---|---|
| 1 | HR raises new starter notification in HR system upon offer acceptance. | HR | [X] business days before start date | HR system record |
| 2 | Line Manager submits access request via [IAM System/Service Desk] specifying required systems and roles. | Line Manager | [X] business days before start date | Access request ticket |
| 3 | IAM team validates request against approved role profile. | IAM Manager | [X] business days | Validation log |
| 4 | System Owner approves access grant for systems under their ownership. | System Owner | [X] business days | Approval record in ticket |
| 5 | IAM team provisions accounts and assigns access rights per approved request. | IAM Team | On or before start date | Provisioning log |
| 6 | User receives credentials via secure channel and completes mandatory security awareness training. | IAM Team / HR | Day 1 | Training completion record |
| 7 | Access provisioned is confirmed against the approved request — discrepancies escalated. | IAM Team | Day 1 | Confirmation checklist |

#### 5.2.2 Privileged Access Provisioning

| Step | Activity | Responsible Party | Timeframe | Evidence |
|---|---|---|---|---|
| 1 | Line Manager submits privileged access request with documented business justification. | Line Manager | Prior to role start | Privileged access request form |
| 2 | CISO reviews and approves privileged access request. | CISO | [X] business days | Approval email / ticket |
| 3 | IAM Manager provisions privileged account in [PAM Solution Name]. | IAM Manager | Upon CISO approval | PAM provisioning log |
| 4 | User completes privileged access training and signs Privileged Access Agreement. | User | Prior to first privileged access | Signed agreement |
| 5 | Privileged account is enrolled in enhanced monitoring and session recording. | IT Security Operations | Concurrent with provisioning | Monitoring enrollment record |

### 5.3 Mover — Access Modification Workflow

*Document the process for modifying access rights when a user changes roles or departments.*

| Step | Activity | Responsible Party | Timeframe | Evidence |
|---|---|---|---|---|
| 1 | HR updates employee record to reflect new role/department in HR system. | HR | On confirmation of transfer | HR system update |
| 2 | Line Manager (new) submits access request for new role requirements. | New Line Manager | [X] business days prior to move effective date | Access request ticket |
| 3 | IAM team reviews current access and identifies access rights no longer required. | IAM Team | Within [X] business days of notification | Access review record |
| 4 | IAM team removes superseded access rights and provisions new access per approved request. | IAM Team | By effective date of role change | Provisioning and deprovisioning log |
| 5 | Outgoing Line Manager confirms that no access is retained beyond role transition period. | Outgoing Line Manager | Within [X] business days of move | Confirmation record |

### 5.4 Leaver — Access Deprovisioning Workflow

*Document the process for revoking access upon termination, resignation, or contract expiry.*

#### 5.4.1 Voluntary Resignation / Planned Termination

| Step | Activity | Responsible Party | Timeframe | Evidence |
|---|---|---|---|---|
| 1 | HR notifies IAM team of confirmed resignation and last working day. | HR | On acceptance of resignation | HR notification |
| 2 | IAM team flags the account for revocation on the last working day. | IAM Team | Within [X] business days of notification | Scheduled revocation record |
| 3 | On last working day, IAM team disables all active accounts including VPN, email, and application access. | IAM Team | End of business on last working day | Deprovisioning log |
| 4 | IT Operations ensures return of all corporate devices and deregisters device certificates. | IT Operations | Last working day | Asset return record |
| 5 | IAM team reviews and removes any shared or service account access associated with the user. | IAM Team | Within [X] business days post-departure | Shared account review log |
| 6 | Account data is retained per data retention policy before final deletion. | IAM Team | Per data retention schedule | Retention log |

#### 5.4.2 Involuntary Termination / Immediate Effect

| Step | Activity | Responsible Party | Timeframe | Evidence |
|---|---|---|---|---|
| 1 | HR or Security notifies IAM team of immediate termination. | HR / Security | Immediately upon decision | Urgent notification record |
| 2 | IAM team revokes all access immediately upon notification. | IAM Team | **Within [X] hours of notification** | Urgent deprovisioning log with timestamps |
| 3 | IT Security Operations reviews for any active sessions and forcibly terminates them. | IT Security Operations | **Within [X] hours** | Session termination log |
| 4 | Incident report raised if any sensitive data access occurred in the period between termination decision and access revocation. | IAM Manager / CISO | Immediately | Incident report |

### 5.5 SLA Targets for Access Lifecycle Events

| Event Type | Access Action | Target SLA | Escalation Point |
|---|---|---|---|
| New joiner — standard user | Provisioning | By start date | Line Manager → CISO if missed |
| New joiner — privileged user | Provisioning | [X] business days post-approval | IAM Manager → CISO |
| Role change | Modification | [X] business days from effective date | Line Manager |
| Resignation / planned termination | Deprovisioning | End of last working day | IAM Manager |
| Involuntary / immediate termination | Deprovisioning | **[X] hours** from notification | CISO / Security Ops |
| Third-party contract expiry | Deprovisioning | By contract end date | IAM Manager |
| Dormant account (>[X] days) | Automatic disable | Automated | IAM Manager |

---

## 6. Segregation of Duties Matrix

### 6.1 Purpose of Segregation of Duties

*Explain why SoD controls are critical and how they are reflected in the Access Control Policy.*

Segregation of Duties (SoD) is a fundamental internal control designed to prevent fraud, error, and unauthorized activities by ensuring that no single individual holds access rights that span incompatible functions in a business process. [Organization Name]'s Access Control Policy mandates that SoD conflicts are identified, controlled, and subject to compensating controls where technical separation is not feasible.

SoD conflicts are assessed across all critical business and technology processes and are a mandatory consideration in all access provisioning decisions.

### 6.2 Critical SoD Conflict Matrix

*Map incompatible access combinations across key systems and processes. Expand this table to cover all in-scope systems and business processes.*

**Legend:**
- **X** — Incompatible / SoD conflict. These access rights must not be held by the same individual without formal exception and compensating controls.
- **C** — Conditionally compatible. Compatible only with additional controls (e.g., enhanced logging, dual approval).
- *(blank)* — Compatible.

#### 6.2.1 Finance and Payment Processing

| Access Right / Function | Payment Initiation | Payment Approval | Payment Release | General Ledger Posting | Vendor Master Maintenance | Bank Reconciliation | User Administration (Finance Systems) |
|---|---|---|---|---|---|---|---|
| **Payment Initiation** | — | X | X | X | | C | X |
| **Payment Approval** | X | — | X | | | | X |
| **Payment Release** | X | X | — | | | | X |
| **General Ledger Posting** | X | | | — | X | X | |
| **Vendor Master Maintenance** | | | | X | — | | X |
| **Bank Reconciliation** | | | | X | | — | |
| **User Administration (Finance Systems)** | X | X | X | | X | | — |

#### 6.2.2 IT and System Administration

| Access Right / Function | Application Development | Code Deployment to Production | Production System Administration | Security Configuration Changes | Access Provisioning | Audit Log Review | Incident Management |
|---|---|---|---|---|---|---|---|
| **Application Development** | — | X | X | | | | |
| **Code Deployment to Production** | X | — | | | | | |
| **Production System Administration** | X | | — | X | X | X | |
| **Security Configuration Changes** | | | X | — | X | X | |
| **Access Provisioning** | | | X | X | — | X | |
| **Audit Log Review** | | | X | X | X | — | |
| **Incident Management** | | | | | | | — |

### 6.3 Identified SoD Conflicts and Remediation Status

*List any known SoD conflicts in the current environment, their risk rating, and the status of remediation or compensating controls.*

| Conflict Reference | System(s) Affected | Conflicting Access Rights | Affected User(s) / Role(s) | Risk Rating | Compensating Control | Remediation Status | Target Remediation Date |
|---|---|---|---|---|---|---|---|
| [SOD-2025-001] | [System Name] | [Access Right A] + [Access Right B] | [Role/User ID] | [High/Medium/Low] | [Describe compensating control, e.g., enhanced audit logging, mandatory dual-review] | [Open / In Progress / Closed] | [Date] |
| [SOD-2025-002] | | | | | | | |
| [SOD-2025-003] | | | | | | | |

### 6.4 SoD Review Findings — Annual Review

*Summarize the outcomes of the SoD assessment conducted as part of this annual review.*

| Review Area | Conflicts Identified | New Conflicts Since Last Review | Conflicts Resolved Since Last Review | Outstanding Conflicts | Risk Accepted (with Compensating Controls) |
|---|---|---|---|---|---|
| Finance & Payment Systems | [#] | [#] | [#] | [#] | [#] |
| IT / Systems Administration | [#] | [#] | [#] | [#] | [#] |
| [Business Process / System] | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

---

## 7. Periodic Access Certification Process

### 7.1 Overview of Access Certification

*Describe the organization's access certification (also known as access recertification or user access review) program.*

Access certification is the periodic process by which [Organization Name] validates that all access rights granted to users remain appropriate, necessary, and aligned with their current business role. This process supports the principle of least privilege and provides an independent check on the ongoing accuracy of access provisioning decisions.

The access certification process is mandatory for all systems classified as **Critical** or **High** in [Organization Name]'s Asset Classification Register, and is conducted in accordance with the following schedule:

| User Category | Certification Frequency | Certification Owner |
|---|---|---|
| All standard users | Annually | Line Managers (with IAM support) |
| Privileged / administrative users | Quarterly | IAM Manager + CISO |
| Third-party / contractor users | Semi-annually or at contract renewal | IAM Manager + Business Sponsor |
| Service and system accounts | Annually | System Owners |
| Dormant accounts (>[X] days inactive) | As identified (continuous) | IAM Manager |

### 7.2 Access Certification Workflow

#### Step 1 — Preparation

| Activity | Responsible | Output |
|---|---|---|
| IAM team extracts current access rights for all in-scope systems from [IAM System / Directory Service]. | IAM Team | Access entitlement report |
| IAM team maps access rights to current organizational structure and role profiles. | IAM Team | Mapped entitlement report |
| IAM team identifies accounts flagged for review (dormant, orphaned, high-risk). | IAM Team | Flagged account list |
| Certification campaign initiated in [IAM/GRC System Name] and certifiers notified. | IAM Manager | Certification campaign record |

#### Step 2 — Certification by Business Reviewers

| Activity | Responsible | Timeframe | Output |
|---|---|---|---|
| Line managers review the access rights of their direct reports and confirm: Appropriate / Inappropriate / Modify. | Line Managers | Within [X] business days of campaign launch | Certified access list |
| System owners review service accounts and application-level access within their system. | System Owners | Within [X] business days | Certified service account list |
| IAM team follows up with non-responsive certifiers and escalates overdue reviews to CISO. | IAM Team | [X] days prior to campaign close | Escalation log |

#### Step 3 — Remediation

| Activity | Responsible | Timeframe | Output |
|---|---|---|---|
| Access rights marked as "Inappropriate" are revoked by the IAM team. | IAM Team | Within [X] business days of certification decision | Deprovisioning log |
| Access rights marked for modification are updated per certifier instruction. | IAM Team | Within [X] business days of certification decision | Amendment log |
| Where certifiers fail to respond by campaign close, access is treated as unconfirmed and escalated. | IAM Manager → CISO | Campaign close date | Escalation record |

#### Step 4 — Reporting and Sign-Off

| Activity | Responsible | Output |
|---|---|---|
| IAM team compiles certification campaign summary report showing completion rates, actions taken, and outstanding items. | IAM Manager | Access Certification Summary Report |
| CISO reviews and signs off on the campaign completion. | CISO | Signed certification report |
| Summary reported to Technology Risk Committee and Internal Audit. | CISO | Committee minutes / report |

### 7.3 Access Certification Results — Current Review Period

*Record the outcomes of access certification campaigns conducted during the review period covered by this document.*

| Certification Campaign | Period | Systems Covered | Total Accounts Reviewed | Access Confirmed | Access Revoked | Access Modified | Completion Rate | Sign-Off Date |
|---|---|---|---|---|---|---|---|---|
| Annual Standard User Review — [Year] | [Start] to [End] | [Systems] | [#] | [#] | [#] | [#] | [%] | [Date] |
| Q1 Privileged Access Review — [Year] | [Start] to [End] | [Systems] | [#] | [#] | [#] | [#] | [%] | [Date] |
| Q2 Privileged Access Review — [Year] | | | | | | | | |
| Q3 Privileged Access Review — [Year] | | | | | | | | |
| Q4 Privileged Access Review — [Year] | | | | | | | | |
| Semi-Annual Third-Party Review — [Year] | | | | | | | | |

### 7.4 Key Metrics and Trends

*Provide trend data to demonstrate improvement or regression in access management over time.*

| Metric | [Prior Year] | [Current Year] | Trend | Commentary |
|---|---|---|---|---|
| Total access rights reviewed | [#] | [#] | [↑/↓/→] | [Commentary] |
| % access rights certified on time | [%] | [%] | [↑/↓/→] | |
| Access rights revoked as % of total reviewed | [%] | [%] | [↑/↓/→] | |
| Orphaned accounts identified | [#] | [#] | [↑/↓/→] | |
| SoD conflicts identified | [#] | [#] | [↑/↓/→] | |
| Policy exceptions in effect | [#] | [#] | [↑/↓/→] | |
| Deprovisioning SLA breaches | [#] | [#] | [↑/↓/→] | |

---

## 8. Annual Review Findings and Change Log

### 8.1 Review Methodology

*Describe how the annual review was conducted, including the inputs used, review activities performed, and stakeholders consulted.*

The annual review of the Access Control Policy for the review period [Start Date] to [End Date] was conducted using the following methodology:

1. **Regulatory Assessment** — Review of BNM RMiT and any updates or circulars issued by BNM during the review period that may affect access control requirements.
2. **Internal Environment Assessment** — Review of changes to [Organization Name]'s technology environment, organizational structure, business operations, and risk profile.
3. **Policy Gap Analysis** — Comparison of current policy provisions against regulatory requirements and industry best practices.
4. **Operational Effectiveness Review** — Analysis of access management metrics, SoD findings, access certification results, and exception reports from the review period.
5. **Audit and Incident Review** — Consideration of Internal Audit findings, external audit observations, and security incidents related to access management.
6. **Stakeholder Consultation** — Input gathered from IT Operations, Business Unit Heads, HR, Risk Management, Legal/Compliance, and Internal Audit.

### 8.2 Summary of Findings

| Finding Reference | Finding Description | Category | Risk Rating | Policy Section Affected | Recommended Action |
|---|---|---|---|---|---|
| [FND-2025-001] | [Description of finding, e.g., "Policy does not address cloud SaaS access management"] | [Gap / Inadequacy / Enhancement] | [High / Medium / Low] | [Section] | [Recommended action] |
| [FND-2025-002] | | | | | |
| [FND-2025-003] | | | | | |
| [FND-2025-004] | | | | | |

### 8.3 Policy Changes Made in This Review

*Document all amendments made to the Access Control Policy as a result of this review.*

| Change Reference | Section Modified | Change Description | Reason for Change | RMiT Reference | Changed By | Date |
|---|---|---|---|---|---|---|
| [CHG-2025-001] | [Section] | [Description of change, e.g., "Added clause on cloud SaaS access management"] | [Regulatory requirement / Gap finding / Industry practice] | [Clause if applicable] | [Name] | [Date] |
| [CHG-2025-002] | | | | | | |
| [CHG-2025-003] | | | | | | |

### 8.4 Items Not Changed — Rationale

*Where recommendations were considered but not adopted, document the rationale for no-change decisions.*

| Recommendation Considered | Rationale for No Change | Decision Made By | Date |
|---|---|---|---|
| [Description of recommendation not adopted] | [Rationale, e.g., "Current compensating controls provide adequate risk mitigation; full implementation deferred to next policy cycle"] | [Name, Designation] | [Date] |

---

## 9. Risk and Gap Assessment

### 9.1 Risk Assessment Summary

*Summarize the residual risk position with respect to access control after the policy review and any resulting amendments.*

| Risk Area | Risk Description | Inherent Risk Rating | Controls in Place | Residual Risk Rating | Risk Owner | Review Date |
|---|---|---|---|---|---|---|
| **Privileged Access Abuse** | Unauthorized or excessive use of privileged credentials leading to data breach or system compromise. | [High/Med/Low] | [e.g., PAM solution, session recording, quarterly recertification] | [High/Med/Low] | CISO | [Date] |
| **Unauthorized Access by Leavers** | Failure to revoke access promptly upon employee departure. | [High/Med/Low] | [e.g., automated HR-to-IAM deprovisioning trigger, daily review of leaver report] | [High/Med/Low] | IAM Manager | [Date] |
| **SoD Conflicts** | Concentration of incompatible access rights enabling fraud or error. | [High/Med/Low] | [e.g., SoD matrix, compensating controls, quarterly SoD review] | [High/Med/Low] | IAM Manager | [Date] |
| **Third-Party Access Risk** | Uncontrolled or excessive access by vendors and contractors. | [High/Med/Low] | [e.g., time-limited accounts, sponsor accountability, semi-annual recertification] | [High/Med/Low] | IAM Manager | [Date] |
| **Cloud Access Management** | Inadequate visibility and control over access to cloud-hosted systems. | [High/Med/Low] | [e.g., CASB solution, cloud IAM policy, cloud access review] | [High/Med/Low] | CISO | [Date] |
| **Credential Compromise** | Weak or stolen credentials leading to unauthorized access. | [High/Med/Low] | [e.g., MFA enforcement, password policy, dark web monitoring] | [High/Med/Low] | IT Security Operations | [Date] |

### 9.2 Regulatory Compliance Gap Summary

*Assess the organization's compliance posture against each applicable BNM RMiT clause as part of this review.*

| RMiT Clause | Requirement Summary | Compliance Status | Gap Description | Remediation Plan | Target Date |
|---|---|---|---|---|---|
| **10.51** | Establish and maintain a formal access control policy, reviewed at least annually. | [Compliant / Partially Compliant / Non-Compliant] | [Gap description if any] | [Remediation plan] | [Date] |
| [Clause] | [Requirement] | | | | |
| [Clause] | [Requirement] | | | | |

**Overall Compliance Assessment:** [Compliant / Partially Compliant / Non-Compliant]

**Summary Narrative:**

*[Provide a 2–3 sentence narrative summarizing the overall compliance position, material gaps if any, and the organization's intended actions to address them.]*

[Organization Name]'s Access Control Policy is assessed as **[compliant / partially compliant]** with BNM RMiT Clause 10.51 as of this review. [Describe material gaps and remediation progress, or confirm no material gaps are outstanding.] The IAM Manager will monitor the implementation of remediation actions and report progress to the Technology Risk Committee on a [quarterly] basis.

---

## 10. Review and Approval

### 10.1 Version History

*Maintain a complete history of all policy versions, including changes made at each review cycle.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | [Reviewer Name] | Initial draft for stakeholder review. |
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | First approved version. |
| [1.1] | [Date] | [Author Name] | [Reviewer Name] | [e.g., Annual review — updated privileged access clauses, added cloud access section.] |
| [2.0] | [Date] | [Author Name] | [Reviewer Name] | [e.g., Major revision — incorporated BNM RMiT 2024 update requirements.] |

### 10.2 Annual Review Sign-Off

*Obtain formal sign-off confirming that the annual review has been completed and the policy is approved for continued use or in its amended form.*

**Review Period:** [Start Date] to [End Date]

**Policy Version Confirmed / Updated:** [Version Number]

**Review Outcome:** *(Select one)*

- [ ] No amendments required — Policy confirmed as current and adequate.
- [ ] Minor amendments made — Policy updated as noted in Section 8.3; changes do not alter the fundamental risk posture.
- [ ] Material amendments made — Policy significantly updated; full stakeholder re-consultation completed.

**Approvals:**

| Role | Name | Signature | Date |
|---|---|---|---|
| **IAM Manager** (Prepared By) | [Name] | | [Date] |
| **CISO / Head of Information Security** (Reviewed By) | [Name] | | [Date] |
| **Chief Risk Officer** (Endorsed By) | [Name] | | [Date] |
| **Head of Internal Audit** (Noted By) | [Name] | | [Date] |
| **Technology Committee / Board Representative** (Approved By) | [Name] | | [Date] |

### 10.3 Distribution List

*Record the parties to whom the approved policy and this review record have been distributed.*

| Recipient | Role / Department | Distribution Method | Date Distributed |
|---|---|---|---|
| All staff | — | [Intranet / Email broadcast] | [Date] |
| [Name] | IT Operations Manager | [Email / DMS] | [Date] |
| [Name] | Head of Internal Audit | [Email / DMS] | [Date] |
| [Name] | Chief Risk Officer | [Email / DMS] | [Date] |
| [Name] | Legal & Compliance | [Email / DMS] | [Date] |
| [Name] | BNM Regulatory Affairs (if required) | [Submission portal] | [Date] |

---

## 11. References

### 11.1 Regulatory References

| Reference | Title | Issuing Authority | Applicable Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | **10.51** |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | [Relevant sections on data access controls] |
| [BNM Circular] | [Title] | Bank Negara Malaysia | [Clause] |
| [NACSA Guidelines] | [Title] | NACSA | [Section] |

### 11.2 Internal Policy References

| Document Title | Document ID | Version | Owner |
|---|---|---|---|
| Information Security Policy | [Document ID] | [Version] | CISO |
| Technology Risk Management Policy | [Document ID] | [Version] | CRO / CISO |
| Privileged Access Management Standard | [Document ID] | [Version] | IAM Manager |
| Identity & Access Management Procedures | [Document ID] | [Version] | IAM Manager |
| Data Classification Policy | [Document ID] | [Version] | CISO |
| Incident Response Policy | [Document ID] | [Version] | CISO |
| Asset Management Policy | [Document ID] | [Version] | IT Manager |
| HR Onboarding and Offboarding Procedures | [Document ID] | [Version] | HR Manager |

### 11.3 Standards and Frameworks

| Standard / Framework | Version | Relevant Sections |
|---|---|---|
| ISO/IEC 27001 | 2022 | A.5.15 Access Control, A.5.16 Identity Management, A.5.17 Authentication, A.5.18 Access Rights |
| ISO/IEC 27002 | 2022 | Chapter 5 — Organizational Controls (Access Management) |
| NIST SP 800-53 | Rev. 5 | AC — Access Control family |
| CIS Controls | v8 | Control 5 — Account Management, Control 6 — Access Control Management |

---

## 12. Appendices

### Appendix A — Access Control Policy — Full Text (Current Version)

*Attach or link to the full text of the Access Control Policy version confirmed or amended by this review.*

> *[Attach the complete Access Control Policy document as Appendix A, or provide a reference link to the document management system: [Link to DMS — Access Control Policy v[X.X]]]*

---

### Appendix B — Access Certification Campaign Reports

*Attach the detailed access certification reports generated during the review period.*

| Certification Campaign | Report Reference | Period | Location |
|---|---|---|---|
| Annual Standard User Access Review — [Year] | [Report Ref] | [Period] | [DMS Link / File Path] |
| Q1 Privileged Access Certification — [Year] | [Report Ref] | [Period] | [DMS Link / File Path] |
| Q2 Privileged Access Certification — [Year] | [Report Ref] | [Period] | [DMS Link / File Path] |
| Q3 Privileged Access Certification — [Year] | [Report Ref] | [Period] | [DMS Link / File Path] |
| Q4 Privileged Access Certification — [Year] | [Report Ref] | [Period] | [DMS Link / File Path] |
| Semi-Annual Third-Party Access Review — [Year] | [Report Ref] | [Period] | [DMS Link / File Path] |

---

### Appendix C — Segregation of Duties — Detailed Conflict Register

*Maintain a comprehensive listing of all identified SoD conflicts, including system-level detail.*

> *[Attach the full SoD Conflict Register as maintained in [GRC System / Spreadsheet]. Current version: [Document Ref / Link].]*

| Conflict ID | System | Role / Function A | Role / Function B | Conflict Type | Risk Level | Compensating Control | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| [SOD-001] | | | | [Fraudulent transaction enablement / Error concealment / Unauthorized change] | | | | |

---

### Appendix D — Policy Exception Register

*List all active exceptions to the Access Control Policy as of the review date.*

> *[Attach or reference the current Policy Exception Register. Current version: [Document Ref / Link].]*

| Exception ID | Policy Clause | Business Justification | Compensating Control | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|
| [EXC-001] | | | | | | | [Active / Expired / Closed] |

---

### Appendix E — Access Management Metrics Dashboard

*Provide a summary of key access management metrics for the review period, supporting the findings in Section 7.4.*

> *[Attach screenshots or exports from [IAM System / GRC Platform / SIEM] showing access management metrics for the review period.]*

Key metrics to be included:

- Total number of active user accounts by system.
- Total number of privileged accounts by system.
- Orphaned account counts and aging.
- Deprovisioning SLA compliance rate (leavers).
- Access certification completion rates by campaign.
- Number and aging of open access requests.
- Number and aging of open SoD conflicts.
- Policy exception aging report.

---

### Appendix F — Stakeholder Consultation Record

*Evidence the stakeholder engagement conducted as part of this annual review.*

| Stakeholder / Department | Consultation Method | Date | Key Input Provided | Reflected in Review Outcome |
|---|---|---|---|---|
| IT Operations | [Meeting / Email / Workshop] | [Date] | [Summary of input] | [Yes / No / Partially] |
| Internal Audit | [Meeting / Findings Report] | [Date] | | |
| Risk Management | [Meeting / Risk Report] | [Date] | | |
| Human Resources | [Meeting / Email] | [Date] | | |
| Legal & Compliance | [Meeting / Legal Review] | [Date] | | |
| Business Unit Representatives | [Workshop / Survey] | [Date] | | |

---

### Appendix G — Regulatory Change Assessment

*Document any BNM RMiT updates, circulars, or regulatory communications received during the review period and their impact on the Access Control Policy.*

| Regulatory Communication | Date Received | Issuing Authority | Summary | Impact on Access Control Policy | Action Taken |
|---|---|---|---|---|---|
| [e.g., BNM RMiT Amendment Circular 2025/01] | [Date] | Bank Negara Malaysia | [Summary of regulatory update] | [Impact assessment] | [Action taken, e.g., "Policy amended — see CHG-2025-001"] |
| [No material regulatory changes during review period.] | | | | | |

---

*End of Document*

---

> **Document Classification: Confidential**
> This document is the property of [Organization Name]. Unauthorized disclosure is prohibited.
> For queries regarding this document, contact the IAM Manager at [Contact Details].