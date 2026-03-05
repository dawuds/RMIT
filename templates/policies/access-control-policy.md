# Access Control Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. If you have received this document in error, please notify the document owner immediately.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
7. [Access Provisioning and Deprovisioning Workflow](#7-access-provisioning-and-deprovisioning-workflow)
8. [Segregation of Duties Matrix](#8-segregation-of-duties-matrix)
9. [Periodic Access Certification Process](#9-periodic-access-certification-process)
10. [Privileged Access Management](#10-privileged-access-management)
11. [Remote and Third-Party Access](#11-remote-and-third-party-access)
12. [Access Control Monitoring and Audit](#12-access-control-monitoring-and-audit)
13. [Non-Compliance and Exceptions](#13-non-compliance-and-exceptions)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe the intent of this policy: why it exists, what problem it addresses, and the regulatory imperative driving it.*

This Access Control Policy establishes the formal rules, rights, and controls governing access to all information systems, data assets, applications, networks, and physical infrastructure owned or operated by [Organization Name]. It defines the principles of least privilege, need-to-know, and separation of duties to protect the confidentiality, integrity, and availability of [Organization Name]'s information assets.

This policy is issued in compliance with Bank Negara Malaysia's **Risk Management in Technology (RMiT)** Policy Document, specifically **Paragraph 10.51**, which mandates that a licensed financial institution must establish and maintain a formal access control policy and supporting procedures. It also supports compliance with the **Personal Data Protection Act 2010 (PDPA)**, the **National Cyber Security Agency (NACSA)** framework, and [Organization Name]'s overarching **Information Security Policy**.

The objectives of this policy are to:

- Ensure that access to information assets is granted on a **need-to-know** and **least-privilege** basis.
- Prevent unauthorized access, disclosure, alteration, or destruction of [Organization Name]'s information assets.
- Establish clear accountability for access control throughout the user access lifecycle.
- Define enforceable rules and controls that are subject to periodic review and audit.
- Support regulatory reporting and evidence requirements for BNM examinations and internal audits.

---

## 2. Scope

*Define the boundaries of this policy — which systems, people, locations, and data types are covered. Be explicit about inclusions and exclusions.*

### 2.1 In-Scope

This policy applies to:

**Personnel:**
- All permanent employees of [Organization Name], regardless of grade or seniority.
- Contract staff, consultants, and temporary workers engaged by [Organization Name].
- Third-party vendors and service providers with access to [Organization Name]'s systems or data.
- Board members and senior management with access to systems or information assets.

**Systems and Assets:**
- All production, development, testing, and disaster recovery IT systems.
- Core banking systems and financial transaction platforms.
- Enterprise applications (ERP, CRM, HR systems, document management systems).
- Cloud-hosted platforms and Software-as-a-Service (SaaS) applications subscribed to by [Organization Name].
- Network infrastructure, including routers, switches, firewalls, and VPN gateways.
- Databases, data warehouses, and analytical platforms.
- Physical facilities, data centres, and server rooms.
- Endpoints including workstations, laptops, mobile devices, and removable storage.

**Data:**
- Customer personal data as defined under the Personal Data Protection Act 2010 (PDPA).
- Financial transaction data and records.
- Confidential and proprietary business information.
- Regulated data as defined by BNM guidelines.

### 2.2 Out-of-Scope

- Public-facing content with no authentication requirement (e.g., public website pages with no back-end data exposure).
- Personal devices not enrolled in the organization's Mobile Device Management (MDM) platform.

*List any explicit exclusions relevant to [Organization Name]'s environment and document the rationale.*

---

## 3. Regulatory and Policy Context

*Map this policy to the specific regulatory obligations and internal policies it satisfies. Include the clause reference, the requirement summary, and how this policy addresses it.*

### 3.1 Regulatory Framework

| Regulation / Standard | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | **Paragraph 10.51** | Financial institutions shall establish a formal access control policy governing access rights to all systems and assets, including provisioning, deprovisioning, and periodic review. |
| BNM RMiT Policy Document | Paragraph 10.49 | Implementation of the principle of least privilege for all user and system accounts. |
| BNM RMiT Policy Document | Paragraph 10.50 | Segregation of duties controls to prevent conflict of interest and fraud. |
| BNM RMiT Policy Document | Paragraph 10.52 | Privileged access management and controls over administrator accounts. |
| BNM RMiT Policy Document | Paragraph 10.53 | Periodic review and certification of user access rights. |
| Personal Data Protection Act 2010 | Section 10 (Security Principle) | Personal data processors must take practical steps to protect personal data from unauthorized access, processing, erasure, loss, or use. |
| NACSA Critical Information Infrastructure Protection Framework | Access Control Domain | Mandatory access control requirements for Critical Information Infrastructure operators. |
| ISO/IEC 27001:2022 | Annex A, Control 5.15–5.18 | Information access control, identity management, authentication, and privileged access rights. |

### 3.2 Internal Policy Hierarchy

This policy is subordinate to and consistent with:

- [Organization Name] **Information Security Policy** — [Document ID]
- [Organization Name] **IT Governance Policy** — [Document ID]
- [Organization Name] **Human Resources Policy** — [Document ID]
- [Organization Name] **Third-Party Risk Management Policy** — [Document ID]

This policy is supported by the following procedures and standards:

- Access Control Standard — [Document ID]
- User Access Request Procedure — [Document ID]
- Privileged Access Management Procedure — [Document ID]
- Access Review and Certification Procedure — [Document ID]

---

## 4. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent interpretation by all readers.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Access** | The ability to interact with, read, write, modify, execute, or otherwise use an information asset, system, or resource. |
| **Access Control** | The process of granting or denying specific requests to obtain and use information, and to enter and exit specific physical locations. |
| **Account** | A unique identifier (username) and associated credentials used to authenticate a user or system to a resource. |
| **Authentication** | The process of verifying the identity of a user, process, or device, as a prerequisite to allowing access to resources. |
| **Authorization** | The process of granting an authenticated entity permission to perform specific actions on a resource. |
| **Business Owner** | The individual responsible for a business process or information asset, accountable for determining access requirements and approving access requests. |
| **Data Owner** | The individual or team designated as accountable for the classification, use, and protection of a specific set of data. |
| **Generic Account** | A shared account used by multiple users, not tied to a single individual. Generic accounts are prohibited except where explicitly approved. |
| **Identity and Access Management (IAM)** | The frameworks, policies, and technologies used to ensure the right individuals access the right resources at the right times for the right reasons. |
| **Least Privilege** | The principle that a user, system, or application should be granted only the minimum level of access rights necessary to perform their authorized functions. |
| **Need-to-Know** | The principle that access to information should be limited to individuals who require it to perform their job duties. |
| **Privileged Account** | An account with elevated permissions beyond standard user access, such as system administrator, database administrator, or root accounts. |
| **Role-Based Access Control (RBAC)** | An access control model in which permissions are assigned to roles, and users are assigned to roles, rather than permissions being assigned directly to individual users. |
| **Segregation of Duties (SoD)** | The principle of dividing critical functions among multiple people to reduce the risk of error or fraud by any single individual. |
| **Service Account** | A non-human account used by applications, services, or automated processes to access resources. |
| **User Access Certification** | A formal periodic process in which business owners review and certify that user access rights remain appropriate. |
| **User Access Lifecycle** | The complete process covering provisioning, modification, and deprovisioning of user access from onboarding to offboarding. |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| IAM | Identity and Access Management |
| IT | Information Technology |
| MDM | Mobile Device Management |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| PDPA | Personal Data Protection Act 2010 |
| RACI | Responsible, Accountable, Consulted, Informed |
| RBAC | Role-Based Access Control |
| RMiT | Risk Management in Technology |
| SoD | Segregation of Duties |
| SSO | Single Sign-On |
| VPN | Virtual Private Network |

---

## 5. Roles and Responsibilities

*Define who is accountable, responsible, consulted, and informed for each aspect of this policy. Use the RACI model to make accountability unambiguous.*

### 5.1 Accountability Overview

The following roles have defined responsibilities under this policy:

| Role | Responsibility Summary |
|---|---|
| **Board of Directors / Risk Committee** | Ultimate oversight of technology risk, including access control risk appetite. Approves the policy. |
| **Chief Information Security Officer (CISO)** | Policy owner at executive level; ensures policy alignment with regulatory obligations and organizational risk appetite. |
| **IAM Manager** | Day-to-day policy owner; maintains, updates, and enforces this policy and supporting procedures. |
| **IT Department** | Implements technical access controls, maintains identity systems, and executes provisioning/deprovisioning requests. |
| **Business Unit Managers** | Act as Business Owners for systems within their remit; approve access requests for their teams. |
| **Human Resources (HR)** | Triggers onboarding and offboarding workflows; notifies IT and IAM of staff changes. |
| **Internal Audit** | Independently reviews compliance with this policy; reports findings to senior management. |
| **Compliance Department** | Monitors regulatory developments and ensures policy remains aligned with BNM RMiT and other applicable regulations. |
| **All Users** | Comply with this policy; report suspected access control breaches to the IT Service Desk. |
| **Third-Party Vendors** | Comply with this policy as a condition of their engagement; access is subject to the same controls. |

### 5.2 RACI Matrix

*The RACI matrix below maps key access control activities to the responsible parties. **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

| Activity | CISO | IAM Manager | IT Department | Business Unit Manager | HR | Internal Audit | Compliance | User |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Policy development and maintenance | A | R | C | C | I | C | C | I |
| Access request submission | I | I | I | A | I | I | I | R |
| Access request approval (business justification) | I | C | I | A/R | I | I | I | I |
| Access provisioning (technical execution) | I | A | R | I | I | I | I | I |
| Privileged access approval | A | R | C | C | I | I | I | I |
| Access deprovisioning — resignation/termination | I | A | R | C | R | I | I | I |
| Access deprovisioning — role change | I | A | R | R | R | I | I | I |
| Periodic access certification | A | R | C | R | I | C | I | I |
| SoD conflict identification | C | A | R | C | I | C | I | I |
| SoD exception approval | A | R | I | C | I | C | C | I |
| User access audit and review | C | A | R | C | I | R | C | I |
| Policy exception approval | A | R | C | C | I | I | C | I |
| Regulatory reporting on access control | A | R | C | I | I | C | R | I |
| Security incident response (access-related) | A | R | R | C | C | I | I | I |

---

## 6. Policy Statements and Requirements

*This section contains the core policy rules. Each statement should be actionable, verifiable, and auditable. Guidance: tailor the specific systems and thresholds referenced to reflect [Organization Name]'s actual environment.*

### 6.1 General Access Control Principles

**6.1.1 Least Privilege**
All access rights shall be granted on the basis of the minimum permissions necessary for a user, service, or system to perform its authorized function. Excess permissions shall not be granted in anticipation of future needs.

**6.1.2 Need-to-Know**
Access to information assets shall be restricted to individuals who have a documented business need to access that information in the performance of their job duties. Access to sensitive or regulated data requires explicit business justification.

**6.1.3 Default Deny**
Access to all systems shall be denied by default. Access shall only be granted following a formal request, business justification, and appropriate approval. No access shall be granted without following the procedures defined in Section 7 of this policy.

**6.1.4 Individual Accountability**
Every individual accessing [Organization Name]'s systems shall have a unique, personal account. Sharing of accounts or credentials is strictly prohibited. Each action performed on a system must be traceable to an individual.

**6.1.5 Separation of Duties**
Access rights shall be designed and assigned such that no single individual has the ability to execute, control, and conceal a critical or sensitive transaction without the involvement of a second person. Refer to Section 8 for the Segregation of Duties matrix.

**6.1.6 Role-Based Access Control**
Access shall be managed using Role-Based Access Control (RBAC) where technically feasible. Job roles shall be mapped to predefined access profiles. Access shall be assigned at the role level, not the individual level, wherever possible.

### 6.2 Authentication Requirements

**6.2.1 Password Standards**
All user accounts shall comply with [Organization Name]'s Password Standard — [Document ID]. At minimum:

- Minimum password length: **[X] characters** (recommended: 12 or more).
- Complexity requirements: uppercase, lowercase, numeric, and special characters.
- Maximum password age: **[X] days**.
- Password history: last **[X]** passwords shall not be reused.
- Account lockout: after **[X]** consecutive failed attempts, the account shall be locked for **[X] minutes** or until manually unlocked by IT.

**6.2.2 Multi-Factor Authentication (MFA)**
MFA shall be mandatory for:

- All remote access connections (VPN, remote desktop, cloud portals).
- All privileged and administrator accounts.
- Access to core banking systems and financial transaction platforms.
- Access to systems containing customer personal data regulated under PDPA.
- All cloud management consoles and SaaS administration portals.
- Any access flagged as high-risk in [Organization Name]'s risk assessment.

*List additional MFA requirements specific to [Organization Name]'s environment.*

**6.2.3 Session Management**
- Inactive sessions shall be automatically terminated after **[X] minutes** of inactivity.
- Re-authentication shall be required after session termination.
- Concurrent sessions from multiple locations shall be monitored and may be restricted for sensitive systems.

### 6.3 Account Types and Controls

**6.3.1 Standard User Accounts**
Standard accounts shall be used for day-to-day business activities. They shall not be granted administrative rights unless specifically required and approved.

**6.3.2 Privileged Accounts**
- Privileged accounts (administrator, root, DBA accounts) shall only be provisioned where there is a clear operational requirement.
- Users with privileged accounts shall also maintain a separate standard user account for non-administrative tasks.
- Privileged account usage shall be logged and subject to enhanced monitoring. Refer to Section 10.

**6.3.3 Service Accounts**
- Service accounts shall be created for specific application or automated process functions only.
- Service accounts shall not be used for interactive logins.
- Service account credentials shall be stored in an approved secrets management solution — [Tool Name].
- Service accounts shall be reviewed annually as part of the access certification process.

**6.3.4 Generic and Shared Accounts**
- Generic or shared accounts are prohibited unless a technical exception is formally approved by the CISO and IAM Manager.
- Where generic accounts exist under an approved exception, all users of the account shall be documented and the account shall be subject to enhanced monitoring.

**6.3.5 Emergency ("Break-Glass") Accounts**
- Emergency access accounts shall be maintained for critical systems to allow access in the event of IAM system failure.
- Break-glass accounts shall be stored in a sealed, physically secured envelope or approved vault.
- Any use of a break-glass account shall trigger an immediate notification to the IAM Manager and CISO and shall be subject to post-use review within **24 hours**.

### 6.4 Physical Access Controls

- Access to data centres, server rooms, and restricted areas shall be controlled by electronic access control systems (card readers, biometrics, or equivalent).
- Physical access rights shall be managed using the same lifecycle processes defined in Section 7.
- Physical access logs shall be retained for a minimum of **[X] months** in accordance with BNM record-keeping requirements.
- Visitors to restricted areas shall be escorted at all times and their access logged.

### 6.5 Remote Access

- Remote access to [Organization Name]'s systems shall only be permitted via approved and encrypted channels (e.g., VPN).
- Remote access connections shall require MFA as specified in Section 6.2.2.
- Remote access rights shall be reviewed every **[X] months** or upon any change in the user's role or employment status.
- Remote access for third parties shall be subject to the additional controls defined in Section 11.

---

## 7. Access Provisioning and Deprovisioning Workflow

*This section defines the end-to-end lifecycle of user access. Guidance: document the actual workflow used in [Organization Name]'s environment, including the systems (e.g., ServiceNow, Jira) used to track requests.*

### 7.1 Access Provisioning (Onboarding and New Access Requests)

#### 7.1.1 New Employee Onboarding

The following workflow governs access provisioning for new employees:

```
Step 1: HR notifies IT and IAM of new hire (minimum [X] business days before start date)
         → HR System triggers automated notification to IAM Manager

Step 2: Hiring Manager submits access request via [Ticketing System]
         → Specifies: role profile, systems required, business justification
         → Attaches: signed employment contract / offer letter confirmation

Step 3: Business Owner / Line Manager approves access request
         → Documents: business justification for each system requested

Step 4: IAM Manager reviews request for:
         → Compliance with least privilege principle
         → SoD conflicts (refer Section 8)
         → Policy compliance

Step 5: IT provisions access in accordance with approved request
         → Creates unique user account
         → Assigns role-based access profile
         → Enrols in MFA

Step 6: User receives credentials via secure channel
         → Forced password change on first login

Step 7: Confirmation sent to HR, Line Manager, and IAM records updated
```

| Step | Activity | Responsible | SLA |
|---|---|---|---|
| 1 | HR onboarding notification | HR | D-[X] before start date |
| 2 | Access request submission | Hiring Manager | D-[X] before start date |
| 3 | Business justification approval | Business Owner / Line Manager | Within [X] business days |
| 4 | IAM compliance review | IAM Manager | Within [X] business day |
| 5 | Technical provisioning | IT Department | Within [X] business day of approval |
| 6 | Credential delivery to user | IT Department | Before user start date |
| 7 | Confirmation and record update | IAM Manager | Same day as provisioning |

#### 7.1.2 Access Request for Existing Employees

Where an existing employee requires access to a new system or resource:

1. The employee or their line manager submits an access request via [Ticketing System — e.g., ServiceNow].
2. The request must include: system name, access level required, and business justification.
3. The Business Owner of the target system reviews and approves or rejects the request.
4. The IAM Manager performs an SoD conflict check before provisioning.
5. IT provisions the approved access and updates the access registry.
6. The employee is notified that access has been granted.

#### 7.1.3 Access Request Approval Matrix

*The table below defines who must approve access requests based on the sensitivity of the system or data.*

| System / Data Sensitivity | Required Approver(s) |
|---|---|
| Standard business applications | Line Manager |
| Financial transaction systems | Line Manager + Business Owner |
| Core banking systems | Line Manager + Business Owner + IAM Manager |
| Privileged / administrator access | Line Manager + CISO + IAM Manager |
| Customer personal data systems (PDPA) | Line Manager + Data Owner + IAM Manager |
| Third-party / vendor access | Line Manager + Business Owner + CISO |
| Emergency / break-glass access | CISO + IAM Manager |

### 7.2 Access Modification (Role Changes and Transfers)

When an employee changes role, department, or location:

1. HR notifies IAM Manager of the change via [HR System] within **[X] business day(s)** of the change being confirmed.
2. The IAM Manager places a **provisioning hold** — no new access is granted until the review is complete.
3. The employee's current access profile is reviewed against the requirements of the new role.
4. Access that is no longer required is **immediately revoked**.
5. New access required for the new role follows the standard access request process (Section 7.1.2).
6. A **clean-slate principle** applies: access is not automatically inherited from the previous role. All access for the new role must be explicitly justified and approved.

> **Policy Requirement:** Role changes shall result in the removal of all access rights not required in the new role within **[X] business days** of the effective date of the change.

### 7.3 Access Deprovisioning (Offboarding)

Access deprovisioning is one of the most critical controls in the access lifecycle and must be executed promptly to prevent unauthorized access by former employees or contractors.

#### 7.3.1 Voluntary Resignation

| Step | Activity | Responsible | Deadline |
|---|---|---|---|
| 1 | HR notifies IAM Manager of confirmed resignation | HR | Within [X] business day of resignation acceptance |
| 2 | IAM Manager schedules access termination for last working day | IAM Manager | Immediately upon notification |
| 3 | IT disables all accounts at [time] on last working day | IT Department | End of last working day |
| 4 | Physical access credentials (badge, tokens) returned | HR / Facilities | Last working day |
| 5 | IT disables and archives user account | IT Department | Within [X] business day |
| 6 | Email forwarding set up per HR policy | IT Department | Last working day |
| 7 | Access termination confirmed and logged in IAM registry | IAM Manager | Within [X] business day |

#### 7.3.2 Involuntary Termination / Immediate Exit

- For terminations requiring immediate exit (misconduct, dismissal for cause), **all access shall be revoked before or simultaneously with notification to the employee**.
- HR shall notify the IAM Manager and IT on a strictly confidential basis prior to the termination meeting.
- Physical access (building, server room) shall be revoked at the same time.
- IT shall confirm full account termination within **[X] hours** of instruction.

#### 7.3.3 Contract and Vendor Access Termination

- Vendor and contractor access shall be provisioned with a defined expiry date aligned to the contract term.
- Access shall **automatically expire** on the contract end date.
- If a contract is extended, access renewal requires a new access request and approval.
- Upon contract termination, accounts shall be disabled within **[X] business hours**.

#### 7.3.4 Deprovisioning Checklist

*The following checklist shall be completed and retained as evidence for every offboarding.*

- [ ] Network / domain account disabled
- [ ] Email account disabled / archived
- [ ] VPN / remote access credentials revoked
- [ ] Core banking system access revoked
- [ ] Cloud platform access revoked
- [ ] SaaS application access revoked
- [ ] Privileged account(s) disabled
- [ ] Service accounts transferred or disabled
- [ ] MFA tokens / authenticator apps delinked
- [ ] Physical access badge deactivated
- [ ] Data centre / server room access revoked
- [ ] Shared credentials (if any) rotated
- [ ] IAM registry updated
- [ ] Line Manager and HR notified of completion

---

## 8. Segregation of Duties Matrix

*Segregation of Duties (SoD) controls prevent any single individual from having conflicting access rights that could enable fraud, error, or regulatory violation. This section defines incompatible access combinations for [Organization Name]'s critical systems.*

### 8.1 SoD Policy Statement

No individual shall be granted access rights that would allow them to:

- Initiate **and** authorize the same financial transaction.
- Create **and** approve their own user account or access request.
- Perform **and** audit the same function.
- Make a payment **and** reconcile the same payment.
- Develop **and** deploy code to production without independent approval.

### 8.2 Critical SoD Conflict Matrix

*The matrix below identifies access combinations that are incompatible. A cell marked **CONFLICT** indicates that the row and column rights must never be held by the same individual without a documented compensating control. A cell marked **MONITOR** indicates that the combination is permitted but subject to enhanced monitoring and logging.*

| Function | Payment Initiation | Payment Authorization | GL Posting | Account Creation | Access Approval | Audit Log Review | Code Development | Code Deployment |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Payment Initiation** | — | **CONFLICT** | MONITOR | OK | OK | **CONFLICT** | OK | OK |
| **Payment Authorization** | **CONFLICT** | — | MONITOR | OK | OK | **CONFLICT** | OK | OK |
| **GL Posting** | MONITOR | MONITOR | — | OK | OK | MONITOR | OK | OK |
| **Account Creation** | OK | OK | OK | — | **CONFLICT** | MONITOR | OK | OK |
| **Access Approval** | OK | OK | OK | **CONFLICT** | — | MONITOR | OK | OK |
| **Audit Log Review** | **CONFLICT** | **CONFLICT** | MONITOR | MONITOR | MONITOR | — | OK | OK |
| **Code Development** | OK | OK | OK | OK | OK | OK | — | **CONFLICT** |
| **Code Deployment** | OK | OK | OK | OK | OK | OK | **CONFLICT** | — |

*Expand this matrix to include all critical functions relevant to [Organization Name]'s business processes and technology environment.*

### 8.3 SoD Conflict Detection

- SoD conflict checks shall be performed **at the point of every access request** by the IAM Manager.
- Automated SoD conflict detection shall be implemented in [IAM Tool Name] where technically feasible.
- A full SoD conflict review shall be conducted at least **annually** as part of the access certification process (Section 9).
- Any detected SoD conflict shall be reported to the CISO and relevant Business Owner within **[X] business days**.

### 8.4 SoD Exception Process

Where an SoD conflict cannot be resolved due to operational constraints (e.g., insufficient headcount in a function):

1. The Business Owner documents the conflict and the business justification for the exception.
2. A **compensating control** must be identified and documented (e.g., enhanced logging, mandatory dual approval for transactions, regular management review).
3. The exception and compensating control are reviewed and approved by the **CISO and IAM Manager**.
4. The approved exception is registered in the **SoD Exception Register** — [Document ID / System].
5. All exceptions shall be reviewed at least **every [X] months** to assess whether they remain necessary.

| Exception ID | User | Conflicting Rights | Business Justification | Compensating Control | Approved By | Approval Date | Review Date |
|---|---|---|---|---|---|---|---|
| [EX-001] | [Name] | [Right A] + [Right B] | [Justification] | [Control] | [Approver] | [Date] | [Date] |

---

## 9. Periodic Access Certification Process

*Access certification (also called access recertification or user access review) is a mandatory periodic process under BNM RMiT Paragraph 10.53. This section defines how [Organization Name] meets this requirement.*

### 9.1 Certification Schedule

| User Population | Review Frequency | Responsible Certifier |
|---|---|---|
| All standard user accounts | **Annual** (minimum) | Business Unit Managers |
| Privileged accounts (admin, root, DBA) | **Quarterly** | IAM Manager + CISO |
| Service accounts | **Annual** | IAM Manager + System Owner |
| Third-party / vendor accounts | **Semi-annual** or at contract milestone | Business Owner + IAM Manager |
| High-risk system access (core banking, PDPA data) | **Semi-annual** | Business Owner + Data Owner |
| Dormant accounts (no login > [X] days) | **Ad hoc** — identified monthly | IAM Manager |

### 9.2 Certification Process Steps

**Phase 1: Preparation (Weeks 1–2)**
1. IAM Manager generates access reports from all in-scope systems using [IAM Tool / Active Directory / System Reports].
2. Reports are distributed to the relevant Business Owner / Certifier via [Certification Platform / Email / Ticketing System].
3. Certifiers are briefed on the certification scope, criteria, and deadline.

**Phase 2: Review and Certification (Weeks 3–5)**
4. Each certifier reviews the access rights of every user under their responsibility.
5. For each user-access combination, the certifier must make one of three decisions:

| Decision | Meaning | Action |
|---|---|---|
| **Certify (Approve)** | Access is appropriate and required | No change; access retained |
| **Revoke** | Access is no longer required or appropriate | IAM Manager to revoke within [X] business days |
| **Modify** | Access level needs to change | IAM Manager to adjust access per new specification |

6. Certifiers must provide a documented business justification for any access they certify for privileged or high-risk systems.
7. If a certifier does not respond within the review period, their Line Manager escalates. Unresponded certifications are **escalated to the CISO** after **[X] business days**.

**Phase 3: Remediation (Weeks 6–7)**
8. IT executes all revocation and modification actions within the agreed SLA.
9. IAM Manager confirms completion of all remediation actions.

**Phase 4: Reporting and Closure (Week 8)**
10. IAM Manager prepares a **certification completion report** documenting:
    - Total accounts reviewed.
    - Number and percentage certified / revoked / modified.
    - Outstanding exceptions and escalations.
    - SoD conflicts identified and resolved.
11. Report submitted to CISO, Compliance, and Internal Audit.
12. Certification records retained for a minimum of **[X] years** as audit evidence.

### 9.3 Dormant Account Management

- Accounts with no login activity for **[X] days** shall be automatically flagged by [IAM Tool].
- Flagged accounts shall be reviewed by the IAM Manager and the relevant Business Owner.
- Accounts with no login activity for **[X] days** shall be **automatically disabled** unless a business justification for retention is provided and approved.
- Dormant account reports shall be included in the monthly IAM management report.

---

## 10. Privileged Access Management

*Privileged accounts pose significantly higher risk and require enhanced controls beyond those applied to standard user accounts. This section defines additional controls for privileged access in compliance with BNM RMiT Paragraph 10.52.*

### 10.1 Privileged Access Principles

- Privileged access shall be granted only to individuals whose job function explicitly requires it.
- Every privileged user must maintain a **separate standard account** for non-administrative tasks.
- Privileged accounts shall **never** be used to browse the internet, access email, or perform non-administrative tasks.
- The number of privileged accounts shall be minimized and documented.

### 10.2 Privileged Account Inventory

The IAM Manager shall maintain a privileged account inventory, updated in real-time:

| Account Name | System | Account Type | Assigned To | Last Reviewed | Expiry Date |
|---|---|---|---|---|---|
| [admin-001] | [System Name] | Local Admin | [Name] | [Date] | [Date] |
| [root] | [Server Name] | Root | [Name / Service] | [Date] | [Date] |
| [dba-prod] | [Database Name] | DBA | [Name] | [Date] | [Date] |

### 10.3 Privileged Access Controls

- **Just-In-Time (JIT) Access:** Where technically feasible, privileged access shall be granted on a time-limited basis for a specific task, and revoked immediately upon task completion.
- **Privileged Access Workstations (PAW):** Privileged tasks shall be performed from dedicated, hardened workstations where required by [Organization Name]'s risk assessment.
- **Session Recording:** All privileged sessions shall be recorded and stored for a minimum of **[X] months**. Recordings shall be reviewed on a risk basis.
- **Command Logging:** All commands executed under privileged accounts shall be logged.
- **Credential Vaulting:** Privileged account credentials shall be stored in [Approved PAM Tool — e.g., CyberArk, HashiCorp Vault] and rotated at least every **[X] days**.

---

## 11. Remote and Third-Party Access

### 11.1 Remote Access Controls

- All remote access shall be via approved VPN or equivalent encrypted tunnel.
- MFA is mandatory for all remote access (see Section 6.2.2).
- Remote access rights shall have a defined expiry date and shall not be granted indefinitely.
- Remote access sessions shall be subject to session timeout (see Section 6.2.3).
- Remote access activity shall be logged and reviewed monthly by the IAM Manager.

### 11.2 Third-Party and Vendor Access

Third parties (vendors, consultants, outsourced service providers) accessing [Organization Name]'s systems are subject to the following additional requirements:

1. **Contractual Obligation:** Third-party access shall only be granted after the execution of a Non-Disclosure Agreement (NDA) and appropriate data processing or service agreements that reference this policy.
2. **Named Individuals:** Third-party access shall be granted to **named individuals only**. Generic vendor accounts are prohibited.
3. **Defined Scope:** Access shall be restricted to the specific systems, data, and time periods required for the engagement.
4. **Sponsor:** Every third-party user shall have a named internal sponsor (typically the Business Owner or Project Manager) who is accountable for the third party's access.
5. **Time-Limited Access:** Third-party accounts shall have a defined expiry date aligned to the contract or engagement period.
6. **No Standing Access:** Third-party access shall not be granted permanently. Access shall be activated for defined maintenance windows where possible.
7. **Monitoring:** Third-party access sessions shall be monitored. Remote sessions may be recorded.
8. **Review:** Third-party access shall be reviewed by the sponsor every **[X] months** or at contract renewal, whichever is sooner.

---

## 12. Access Control Monitoring and Audit

### 12.1 Logging Requirements

*In compliance with BNM RMiT requirements, the following events shall be logged for all in-scope systems:*

| Event Category | Events Logged | Retention Period |
|---|---|---|
| Authentication | Successful logins, failed login attempts, account lockouts, MFA events | [X] months |
| Authorization | Access granted, access denied, privilege escalation | [X] months |
| Account Management | Account creation, modification, deletion, password changes | [X] years |
| Privileged Access | All privileged session activity, commands executed | [X] months |
| Remote Access | VPN connections, session duration, data transferred | [X] months |
| Physical Access | Entry/exit events for restricted areas | [X] months |
| Emergency Access | All break-glass account activations | [X] years |

### 12.2 Log Review

- **Automated alerting** shall be configured for high-risk events including: failed login thresholds, access outside business hours, privileged account misuse, and SoD conflict violations.
- Logs for privileged accounts shall be reviewed **weekly** by the IAM Manager.
- Logs for standard accounts shall be reviewed **monthly** on a sample basis.
- Anomalous access patterns identified through log review shall be investigated within **[X] business days**.

### 12.3 Internal Audit

- Internal Audit shall conduct an independent review of access control compliance at least **annually**.
- The scope of the audit shall include: access request records, provisioning SLA compliance, deprovisioning completeness, SoD exception register, certification completion records, and privileged account controls.
- Audit findings shall be reported to the CISO and Risk Committee.
- Management responses and remediation plans shall be documented and tracked to closure.

---

## 13. Non-Compliance and Exceptions

### 13.1 Non-Compliance

Failure to comply with this policy may result in:

- Disciplinary action up to and including termination of employment, in accordance with [Organization Name]'s HR disciplinary procedures.
- Suspension of system access pending investigation.
- Reporting to BNM or other regulatory authorities where the non-compliance constitutes a reportable incident.
- Civil or criminal liability where the non-compliance involves unauthorized access to customer data or financial systems.

All suspected non-compliance with this policy shall be reported to the IAM Manager or CISO, and may be reported anonymously via [Organization Name]'s whistleblowing channel — [Channel Details].

### 13.2 Policy Exceptions

Where strict compliance with a specific requirement in this policy is not technically feasible or creates a disproportionate business impact:

1. The requesting party documents the exception in the **Policy Exception Request Form** — [Form ID].
2. The request must include: the policy requirement being excepted, the reason compliance is not feasible, the proposed compensating control, and the duration of the exception.
3. The exception is reviewed and approved by the **IAM Manager and CISO**.
4. Exceptions involving privileged access or regulated data require **Board Risk Committee** awareness.
5. All approved exceptions are registered in the **Policy Exception Register** — [System / Document].
6. Exceptions shall be time-limited (maximum **[X] months**) and reviewed before expiry.

| Exception ID | Policy Section | Requesting Party | Justification | Compensating Control | Approved By | Valid Until | Review Date |
|---|---|---|---|---|---|---|---|
| [EXC-001] | [Section] | [Name / Team] | [Justification] | [Control Description] | [CISO Name] | [Date] | [Date] |

---

## 14. Review and Approval

### 14.1 Policy Review

This policy shall be reviewed at least **annually** by the IAM Manager, in consultation with the CISO, Compliance, and Internal Audit. Reviews shall also be triggered by:

- Material changes to [Organization Name]'s technology environment.
- Issuance of new or amended BNM guidelines or regulatory requirements.
- Significant access control incidents or audit findings.
- Organizational restructuring affecting roles or system ownership.

### 14.2 Version History

*Record all versions of this document, including initial release and all subsequent amendments.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | [Reviewer] | Initial draft for consultation |
| 0.2 | [Date] | [Author Name] | [Reviewer] | Incorporated review comments |
| 1.0 | [Date] | [Author Name] | [Reviewer] | Approved and issued |
| [1.1] | [Date] | [Author Name] | [Reviewer] | [Description of amendment] |

### 14.3 Approval Sign-Off

*This policy requires formal approval from the following roles before it is effective. Signatures indicate review, agreement with content, and authorization for implementation.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager (Policy Owner) | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Technology Officer / Chief Information Officer | [Name] | [Signature] | [Date] |
| Chief Compliance Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer | [Name] | [Signature] | [Date] |
| Board Risk Committee (Endorsement) | [Chairperson Name] | [Signature] | [Date] |

---

## 15. References

*This policy is issued in response to and should be read in conjunction with the following regulatory documents, standards, and internal policies.*

### 15.1 Regulatory References

| Reference | Issuing Authority | Title | Relevant Section(s) |
|---|---|---|---|
| BNM/RH/PD 028-107 | Bank Negara Malaysia | Risk Management in Technology (RMiT) | **Paragraph 10.51**, 10.49, 10.50, 10.52, 10.53 |
| — | Bank Negara Malaysia | Personal Data Protection Act 2010 | Section 10 (Security Principle) |
| — | NACSA | National Cyber Security Policy | Access Control Domain |
| ISO/IEC 27001:2022 | ISO / IEC | Information Security Management Systems | Annex A Controls 5.15–5.18 |
| ISO/IEC 27002:2022 | ISO / IEC | Information Security Controls | Section 5.15–5.18 (Access Control) |
| NIST SP 800-53 Rev. 5 | NIST | Security and Privacy Controls | AC Family (Access Control) |

### 15.2 Internal References

| Document ID | Title | Owner |
|---|---|---|
| [Doc ID] | Information Security Policy | CISO |
| [Doc ID] | IT Governance Policy | CTO / CIO |
| [Doc ID] | Password Standard | IAM Manager |
| [Doc ID] | Access Control Standard | IAM Manager |
| [Doc ID] | User Access Request Procedure | IAM Manager |
| [Doc ID] | Privileged Access Management Procedure | IAM Manager |
| [Doc ID] | Access Review and Certification Procedure | IAM Manager |
| [Doc ID] | Third-Party Risk Management Policy | CRO |
| [Doc ID] | Human Resources Policy | CHRO |
| [Doc ID] | Incident Response Policy | CISO |

---

## 16. Appendices

### Appendix A — Access Request Form Template

*This form shall be completed by the requesting employee or their line manager for all new access requests or modifications. Submit via [Ticketing System].*

**Section 1: Requestor Details**

| Field | Value |
|---|---|
| Requestor Name | [Full Name] |
| Employee ID | [ID] |
| Department | [Department] |
| Line Manager | [Name] |
| Date of Request | [Date] |
| Ticket Reference | [Ticket ID] |

**Section 2: Access Details**

| Field | Value |
|---|---|
| System / Application Name | [System Name] |
| Type of Request | New Access / Modify Access / Emergency Access |
| Access Level / Role Requested | [Role Name / Permission Level] |
| Duration | Permanent / Temporary (specify end date: [Date]) |
| Business Justification | [Detailed justification] |
| Urgency | Standard / Urgent (state reason for urgency) |

**Section 3: Approvals**

| Role | Name | Decision | Date |
|---|---|---|---|
| Line Manager | [Name] | Approve / Reject | [Date] |
| Business Owner | [Name] | Approve / Reject | [Date] |
| IAM Manager (SoD Check) | [Name] | Approve / Reject | [Date] |
| CISO (if privileged access) | [Name] | Approve / Reject | [Date] |

---

### Appendix B — Access Deprovisioning Checklist

*To be completed by IT and IAM Manager for every offboarding. Retain as evidence.*

| # | Deprovisioning Action | Responsible | Completed | Timestamp | Notes |
|---|---|---|---|---|---|
| 1 | Domain / AD account disabled | IT | ☐ | | |
| 2 | Email account disabled / archived | IT | ☐ | | |
| 3 | VPN credentials revoked | IT | ☐ | | |
| 4 | Core banking access revoked | IT | ☐ | | |
| 5 | All SaaS / cloud access revoked | IT | ☐ | | |
| 6 | Privileged accounts disabled | IAM Manager | ☐ | | |
| 7 | Service accounts reviewed | IAM Manager | ☐ | | |
| 8 | MFA enrolment removed | IT | ☐ | | |
| 9 | Physical access badge deactivated | Facilities | ☐ | | |
| 10 | Data centre access revoked | Facilities / IT | ☐ | | |
| 11 | Shared credentials rotated | IT | ☐ | | |
| 12 | IAM registry updated | IAM Manager | ☐ | | |
| 13 | Completion confirmed to HR | IAM Manager | ☐ | | |

**Completed By:** [Name] | **Date:** [Date] | **Ticket Reference:** [ID]

---

### Appendix C — SoD Exception Register

*Maintained by the IAM Manager. All active SoD exceptions must be listed here and reviewed at least every [X] months.*

| Exception ID | User | System | Conflicting Right A | Conflicting Right B | Business Justification | Compensating Control | Approved By | Approval Date | Expiry Date | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [EX-001] | [Name] | [System] | [Right] | [Right] | [Justification] | [Control] | [Approver] | [Date] | [Date] | [Date] | Active |

---

### Appendix D — User Access Certification Report Template

*This template is to be completed by the IAM Manager at the conclusion of each certification cycle.*

**Certification Cycle:** [Certification Period — e.g., Annual FY2025]
**Report Date:** [Date]
**Prepared By:** [IAM Manager Name]

| Metric | Value |
|---|---|
| Total accounts in scope | [Number] |
| Accounts certified (no change) | [Number] |
| Accounts revoked | [Number] |
| Accounts modified | [Number] |
| Certifications not completed (escalated) | [Number] |
| SoD conflicts identified | [Number] |
| SoD conflicts resolved | [Number] |
| Dormant accounts disabled | [Number] |

**Outstanding Items:**

| User | System | Issue | Assigned To | Target Resolution Date |
|---|---|---|---|---|
| [Name] | [System] | [Issue Description] | [Name] | [Date] |

**Certification Completion Rate:** [X]%

**Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager | [Name] | | [Date] |
| CISO | [Name] | | [Date] |

---

### Appendix E — Privileged Account Inventory Register

*Maintained by the IAM Manager. Updated in real-time and reviewed quarterly.*

| Account ID | Account Name | System / Platform | Account Type | Purpose | Assigned To (Name & ID) | Created Date | Last Password Change | Last Review Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| [PA-001] | [admin-name] | [System] | Local Admin | [Purpose] | [Name / ID] | [Date] | [Date] | [Date] | [Date] | Active |
| [PA-002] | [svc-account] | [System] | Service Account | [Purpose] | N/A (Automated) | [Date] | [Date] | [Date] | [Date] | Active |

---

### Appendix F — Glossary of Access Control Roles

*This appendix defines the specific named roles within [Organization Name] responsible for access control functions, mapped to the organizational chart.*

| Policy Role | Organizational Title | Current Incumbent | Contact |
|---|---|---|---|
| IAM Manager | [Actual Job Title] | [Name] | [Email] |
| CISO | [Actual Job Title] | [Name] | [Email] |
| Business Owner — [System Name] | [Actual Job Title] | [Name] | [Email] |
| Data Owner — [Data Category] | [Actual Job Title] | [Name] | [Email] |
| IT Service Desk Lead | [Actual Job Title] | [Name] | [Email] |

*Update this table whenever a role incumbent changes. Ensure the IAM Manager is notified immediately upon any change in personnel holding the roles above.*

---

*End of Document*

---

**Document Control Footer**

| Field | Detail |
|---|---|
| Document Title | Access Control Policy |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | IAM Manager, [Organization Name] |
| Last Updated | [Last Review Date] |
| Next Review | [Next Review Date] |

*This document is subject to version control. The master copy is maintained in [Document Management System]. Printed copies are uncontrolled. Always verify you are reading the current version before relying on this document.*