# Privileged Access Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT Paragraph 10.56 |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may result in disciplinary action and/or legal proceedings under applicable Malaysian law, including the Personal Data Protection Act 2010 (PDPA) and relevant provisions of the Computer Crimes Act 1997.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context and Obligations](#3-regulatory-context-and-obligations)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
   - 6.1 [Privileged Access Governance](#61-privileged-access-governance)
   - 6.2 [Privileged Account Lifecycle Management](#62-privileged-account-lifecycle-management)
   - 6.3 [Shared and Generic Account Restrictions](#63-shared-and-generic-account-restrictions)
   - 6.4 [Privileged Access Authentication Controls](#64-privileged-access-authentication-controls)
   - 6.5 [Just-In-Time (JIT) and Just-Enough-Access (JEA)](#65-just-in-time-jit-and-just-enough-access-jea)
   - 6.6 [Privileged Session Management](#66-privileged-session-management)
   - 6.7 [Privileged Access Logging and Monitoring](#67-privileged-access-logging-and-monitoring)
   - 6.8 [Privileged Access Reviews and Recertification](#68-privileged-access-reviews-and-recertification)
   - 6.9 [Privileged Access for Third Parties and Vendors](#69-privileged-access-for-third-parties-and-vendors)
   - 6.10 [Emergency and Break-Glass Access](#610-emergency-and-break-glass-access)
7. [Exceptions and Escalation Process](#7-exceptions-and-escalation-process)
8. [Compliance and Enforcement](#8-compliance-and-enforcement)
9. [Related Policies, Standards, and Procedures](#9-related-policies-standards-and-procedures)
10. [Review and Approval History](#10-review-and-approval-history)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose

*This section defines why this policy exists, the problem it addresses, and the high-level objectives it seeks to achieve. Authors should link the policy purpose directly to organizational risk management goals and regulatory obligations.*

This Privileged Access Policy establishes the framework, principles, and mandatory requirements governing the management, use, monitoring, and control of privileged access within [Organization Name]. Privileged access represents one of the highest-risk categories of system access, as accounts with elevated permissions can bypass standard security controls, access sensitive data, and make changes that materially impact the confidentiality, integrity, and availability of [Organization Name]'s systems and information assets.

The purpose of this policy is to:

- Establish clear and enforceable rules for the provisioning, use, and deprovisioning of privileged accounts across all technology environments operated by or on behalf of [Organization Name].
- Minimize the risk of insider threats, external attacks, and inadvertent misuse of privileged access rights.
- Ensure that all privileged activities are subject to comprehensive logging, monitoring, and audit trails sufficient to support forensic investigation and regulatory examination.
- Restrict or eliminate the use of shared, generic, or anonymous privileged accounts that impede individual accountability.
- Fulfill [Organization Name]'s obligations under Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, particularly Paragraph 10.56, and aligned regulatory expectations.
- Support [Organization Name]'s broader Information Security Management System (ISMS) and risk management framework.

This policy reflects [Organization Name]'s commitment to the principle of **least privilege**, ensuring that individuals and systems are granted only the minimum level of access required to perform their authorized functions, for the minimum duration necessary.

---

## 2. Scope

*This section defines the boundaries of the policy — who it applies to, what systems are covered, and any explicit exclusions. Be precise and exhaustive to avoid ambiguity during audits.*

### 2.1 Applicability

This policy applies to:

**Personnel:**

- All permanent employees of [Organization Name] who hold, request, or administer privileged access rights.
- Contract staff, consultants, and temporary workers engaged by [Organization Name] who require privileged access to perform their duties.
- Third-party vendors, managed service providers, and outsourcing partners who are granted privileged access to [Organization Name]'s systems, networks, or data, whether on-premises or remotely.
- System and application accounts (non-human identities) that are granted elevated or administrative privileges.

**Technology Assets:**

- All operating systems (Windows, Linux, Unix, macOS) hosted on-premises, in private cloud, or in public cloud environments (including but not limited to Microsoft Azure, Amazon Web Services, Google Cloud Platform).
- Network infrastructure including routers, switches, firewalls, load balancers, and wireless access points.
- Database management systems (DBMS), including production, staging, and development instances containing sensitive or regulated data.
- Security systems including Security Information and Event Management (SIEM) platforms, Identity and Access Management (IAM) systems, Privileged Access Management (PAM) solutions, and endpoint detection and response (EDR) tools.
- Core banking systems, payment processing platforms, and other financial applications operated by [Organization Name].
- Cloud management consoles, orchestration platforms, and infrastructure-as-code (IaC) toolchains.
- DevOps pipelines, CI/CD systems, and software development toolchains with access to production environments.

### 2.2 Exclusions

The following are explicitly excluded from this policy, though they may be governed by separate, referenced policies:

- Standard (non-privileged) user access, which is governed by the [Access Control Policy, Document ID: [Document ID]].
- Physical access controls, which are governed by the [Physical Security Policy, Document ID: [Document ID]].
- Application-level functional roles below the threshold of privileged access as defined in Section 4 of this policy.

### 2.3 Geographic Scope

This policy applies to all operations of [Organization Name] within Malaysia and, where applicable, to overseas offices, subsidiaries, and branches that operate under [Organization Name]'s technology governance framework.

---

## 3. Regulatory Context and Obligations

*This section anchors the policy in its regulatory basis. Authors should cite specific clause numbers and summarize the regulatory expectation associated with each citation to demonstrate traceability during BNM examinations.*

[Organization Name] is a financial institution licensed and supervised by Bank Negara Malaysia (BNM). As such, it is subject to the BNM Risk Management in Technology (RMiT) Policy Document issued pursuant to Section 47 of the Financial Services Act 2013 (FSA) and Section 57 of the Islamic Financial Services Act 2013 (IFSA).

### 3.1 BNM RMiT — Paragraph 10.56

BNM RMiT Paragraph 10.56 imposes specific requirements on financial institutions regarding the management of privileged access. These requirements include, but are not limited to:

| RMiT Reference | Regulatory Requirement | Policy Section Addressing Requirement |
|---|---|---|
| RMiT 10.56(a) | Privileged access must be strictly controlled and limited to authorized personnel with a legitimate business need. | Section 6.1, 6.2 |
| RMiT 10.56(b) | Shared or generic privileged accounts must be restricted or eliminated; individual accountability must be maintained. | Section 6.3 |
| RMiT 10.56(c) | Strong authentication mechanisms, including multi-factor authentication (MFA), must be enforced for all privileged access. | Section 6.4 |
| RMiT 10.56(d) | All privileged access sessions must be logged and subject to continuous monitoring, with logs retained for a period sufficient to support forensic review. | Section 6.7 |
| RMiT 10.56(e) | Privileged access rights must be subject to periodic review and recertification, with prompt revocation upon change of role or cessation of employment. | Section 6.8 |
| RMiT 10.56(f) | Privileged access granted to third parties must be subject to equivalent controls as those applied to internal users. | Section 6.9 |

### 3.2 Related Regulatory Instruments

This policy is also informed by and consistent with the following regulatory instruments and standards:

| Instrument | Issuing Authority | Relevance |
|---|---|---|
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | Licensing and supervisory basis for BNM oversight |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Protection of personal data accessed via privileged accounts |
| Computer Crimes Act 1997 (CCA) | Parliament of Malaysia | Criminal liability for unauthorized computer access |
| BNM RMiT Policy Document (2020, as amended) | Bank Negara Malaysia | Comprehensive technology risk management framework |
| ISO/IEC 27001:2022 — Annex A.8.2 | ISO/IEC | Privileged access rights controls |
| CIS Controls v8 — Control 5 | Center for Internet Security | Account management, including privileged accounts |
| NIST SP 800-53 Rev. 5 — AC-6 | NIST | Least privilege principle |
| PCI DSS v4.0 — Requirement 7 & 8 | PCI Security Standards Council | Access control for cardholder data environments (where applicable) |

---

## 4. Definitions and Terminology

*This section provides a standardized glossary to ensure consistent interpretation of the policy. Authors should review these definitions against their internal taxonomy and adjust where organizational terminology differs.*

| Term | Definition |
|---|---|
| **Privileged Access** | Any access right, permission, or capability that exceeds that of a standard user account, including but not limited to: system administration, database administration, network device management, security system management, and access to bulk sensitive data. |
| **Privileged Account** | An account (human or non-human) that has been granted privileged access. Includes administrator accounts, root accounts, service accounts with elevated rights, application accounts, and emergency access accounts. |
| **Standard User Account** | An account provisioned with the minimum permissions necessary to perform the user's defined job function, with no administrative or elevated rights. |
| **Shared Account** | Any account whose credentials (username and/or password) are known to or used by more than one individual, preventing attribution of activities to a specific person. |
| **Generic Account** | An account not associated with a specific named individual (e.g., "admin", "sysadmin", "dbadmin") that may be used by multiple personnel. |
| **Service Account** | A non-human account created to run automated processes, services, scripts, or applications. Service accounts may hold privileged rights necessary for their function. |
| **Just-In-Time (JIT) Access** | A model of privileged access provisioning in which elevated rights are granted only at the moment they are required for a specific task and are automatically revoked upon task completion or expiry of a defined time window. |
| **Just-Enough-Access (JEA)** | The principle that privileged access granted for any purpose must be scoped to only the permissions strictly necessary for the defined task, avoiding over-provisioning. |
| **Privileged Access Management (PAM) Solution** | A technology platform used to manage, control, monitor, and audit privileged account credentials and sessions. [Organization Name]'s designated PAM solution is [PAM Solution Name]. |
| **Privileged Session Management (PSM)** | The capability to record, monitor, and control privileged user sessions in real time, including keystroke logging and screen capture. |
| **Break-Glass Account** | An emergency privileged account held in secure escrow, intended for use only during crisis situations where normal access channels are unavailable. Also referred to as an emergency access account. |
| **Least Privilege** | The security principle that every user, process, or system should be granted the minimum access rights necessary to perform its authorized function. |
| **Recertification** | A formal periodic review process by which existing privileged access rights are validated as still appropriate, current, and necessary. |
| **IAM Manager** | The designated owner of this policy and the individual responsible for overseeing the Identity and Access Management function within [Organization Name]. |
| **Access Requester** | The individual submitting a request for privileged access on behalf of themselves or another party. |
| **Access Approver** | The individual with authority to approve or reject a privileged access request, typically the business owner or system owner of the target resource. |

---

## 5. Roles and Responsibilities

*This section defines accountability for privileged access management. The RACI table below should be tailored to reflect [Organization Name]'s actual organizational structure and job titles. Ensure that all roles referenced in the policy body are represented here.*

### 5.1 RACI Matrix

The following RACI matrix defines accountability for key privileged access management activities across relevant roles within [Organization Name].

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | IAM Manager | System/Application Owner | IT Security (CISO Office) | IT Operations / SysAdmin | Internal Audit | Risk Management | HR | End User / Requester |
|---|---|---|---|---|---|---|---|---|
| Policy ownership and maintenance | A/R | C | C | I | I | C | I | — |
| Privileged access request initiation | I | C | I | I | — | — | — | R |
| Privileged access request approval | C | A/R | C | I | — | I | — | I |
| Privileged account provisioning | R | I | C | A | I | — | — | — |
| PAM solution administration | A/R | I | C | R | I | — | — | — |
| Shared/generic account exception approval | A | C | R | C | I | I | — | I |
| MFA enforcement and management | R | I | A | C | I | — | — | I |
| Privileged session monitoring (real-time) | R | I | A | C | — | — | — | — |
| Privileged access log review | R | I | A | C | I | — | — | — |
| Periodic access recertification | C | A/R | C | C | C | — | I | — |
| Joiner/mover/leaver processing (privileged) | R | C | C | A | I | — | R | — |
| Third-party privileged access approval | C | A | R | C | I | C | — | I |
| Break-glass account custodianship | A/R | C | C | C | I | — | — | — |
| Break-glass access activation and logging | R | C | A | C | R | I | — | — |
| Privileged access exception management | A/R | C | R | C | I | C | — | I |
| Policy compliance monitoring and reporting | R | I | A | I | R | C | — | — |
| Annual policy review | A/R | C | C | I | C | C | — | — |

### 5.2 Role Descriptions

**IAM Manager**

The IAM Manager is the designated owner of this policy and bears primary accountability for the design, implementation, and continuous improvement of [Organization Name]'s privileged access management framework. The IAM Manager is responsible for:

- Maintaining this policy and all subordinate standards, procedures, and guidelines.
- Overseeing the operation and configuration of [Organization Name]'s PAM solution.
- Ensuring privileged access controls are implemented consistently across all in-scope systems.
- Reporting privileged access metrics and compliance status to senior management on a quarterly basis.
- Coordinating with Internal Audit and Risk Management on privileged access risk assessments.

**System / Application Owner**

The System or Application Owner is the business or IT leader accountable for a specific technology asset. In the context of privileged access, the System/Application Owner is responsible for:

- Approving or rejecting requests for privileged access to systems under their ownership.
- Conducting and certifying periodic access recertification reviews.
- Ensuring that the principle of least privilege is applied to all privileged roles associated with their system.
- Notifying the IAM team promptly of any changes in personnel that affect privileged access rights.

**IT Security (CISO Office)**

The CISO Office provides independent oversight and direction on privileged access security controls. Responsibilities include:

- Defining security requirements and control standards for privileged access.
- Monitoring privileged access logs and session recordings for anomalous or suspicious activity.
- Escalating identified security incidents involving privileged accounts to the Incident Response team.
- Providing subject matter expertise for policy exceptions involving significant security risk.

**IT Operations / System Administrators**

System Administrators and IT Operations staff are the primary consumers of privileged access in performing their day-to-day duties. Responsibilities include:

- Using privileged access solely for authorized, work-related purposes in accordance with this policy.
- Reporting any suspected compromise of privileged credentials immediately to the IAM team and CISO Office.
- Complying with all session management, logging, and authentication requirements stipulated in this policy.
- Participating in access recertification processes as required.

**Internal Audit**

Internal Audit provides independent assurance over the effectiveness of privileged access controls. Responsibilities include:

- Conducting periodic audits of privileged access management practices against this policy and applicable regulatory requirements.
- Reviewing privileged access logs and recertification records as part of scheduled audit activities.
- Reporting audit findings and recommendations to the Audit Committee and relevant management.

**Human Resources (HR)**

HR plays a critical role in the joiner/mover/leaver (JML) process as it applies to privileged access. Responsibilities include:

- Notifying the IAM team on the same business day of any employment termination, role change, or leave of absence affecting personnel with privileged access.
- Ensuring that privileged access deprovisioning is included in the standard offboarding checklist.

---

## 6. Policy Statements and Requirements

*This section contains the substantive policy requirements. Each subsection should be read as a mandatory obligation unless explicitly stated as a recommendation or guideline. Authors should ensure that all requirements are measurable, enforceable, and directly traceable to the regulatory obligations identified in Section 3.*

### 6.1 Privileged Access Governance

*This subsection establishes the overarching governance structure and principles that underpin all privileged access management activities at [Organization Name].*

#### 6.1.1 Governing Principle — Least Privilege

All privileged access provisioned within [Organization Name] must adhere to the principle of **least privilege**. No individual, process, or system shall be granted more privileged access than is strictly necessary to perform their authorized function. Over-provisioning of privileged rights is prohibited.

#### 6.1.2 Privileged Access Register

[Organization Name] shall maintain a centralized **Privileged Access Register** that records:

| Field | Description |
|---|---|
| Account Name | The identifier of the privileged account |
| Account Type | Human / Service / Break-Glass |
| System / Resource | The target system or resource to which privileged access is granted |
| Access Level | Description of the privilege level (e.g., root, domain admin, DBA) |
| Account Owner | Named individual responsible for the account |
| Business Justification | Documented rationale for the access |
| Approval Reference | Reference to the access request approval record |
| Provisioning Date | Date on which the access was provisioned |
| Last Review Date | Date of the most recent recertification review |
| Next Review Date | Scheduled date for the next recertification review |
| Status | Active / Suspended / Pending Revocation |

The Privileged Access Register shall be maintained in [PAM Solution Name / ITSM Tool Name] and shall be reviewed for completeness and accuracy on a **quarterly** basis by the IAM Manager.

#### 6.1.3 Separation of Duties

[Organization Name] shall enforce separation of duties for privileged access activities wherever operationally feasible. The following separations are mandatory:

- The individual requesting privileged access shall not be the individual approving that access.
- System administrators performing operational tasks shall not also perform the privileged access recertification review for their own accounts.
- Personnel responsible for configuring the PAM solution shall not be solely responsible for reviewing PAM logs.

Where separation of duties cannot be achieved due to organizational constraints, a **compensating control** (such as enhanced logging, peer review, or supervisor oversight) must be documented and approved by the IAM Manager and CISO Office.

#### 6.1.4 Privileged Access for Sensitive Systems

Privileged access to the following categories of systems is subject to **heightened controls** as specified in the relevant subsections of this policy:

- Core banking and payment systems.
- Customer data repositories containing personal data as defined under the PDPA.
- Security systems (SIEM, PAM, IAM, EDR).
- Infrastructure hosting regulated data subject to BNM or other regulatory oversight.

### 6.2 Privileged Account Lifecycle Management

*This subsection governs the end-to-end lifecycle of privileged accounts, from initial request and provisioning through to modification and deprovisioning. Clear lifecycle controls are essential to prevent orphaned accounts and unauthorized access accumulation.*

#### 6.2.1 Request and Approval

All requests for privileged access must:

1. Be submitted through [Organization Name]'s designated ITSM platform ([ITSM Platform Name]) using the **Privileged Access Request** form.
2. Include a documented **business justification** specifying the purpose, the target system(s), the required privilege level, and the anticipated duration of access.
3. Be approved by the relevant **System/Application Owner** prior to provisioning.
4. For access to sensitive systems (as defined in Section 6.1.4), require an additional approval from the **CISO Office**.
5. Be provisioned by the IAM team only upon receipt of all required approvals.

The following table defines approval authorities by privilege level:

| Privilege Level | Primary Approver | Secondary Approver (if applicable) |
|---|---|---|
| Standard Administrator (non-sensitive system) | System/Application Owner | — |
| Domain Administrator | System/Application Owner | CISO Office |
| Database Administrator (non-sensitive data) | System/Application Owner | — |
| Database Administrator (sensitive/regulated data) | System/Application Owner | CISO Office |
| Root / Superuser access | System/Application Owner | CISO Office + IAM Manager |
| Cloud Management Console (IAM/Admin) | System/Application Owner | CISO Office |
| Security System Administration (SIEM, PAM, IAM) | CISO Office | IAM Manager |
| Break-Glass Account Activation | IAM Manager | CISO Office |

#### 6.2.2 Provisioning Standards

Upon approval, privileged accounts shall be provisioned in accordance with the following standards:

- Each privileged account shall be assigned to a single named individual. Shared privileged accounts are prohibited (subject to the exceptions defined in Section 6.3).
- Privileged accounts shall be separate and distinct from the account holder's standard user account. Individuals must not use their privileged account for routine, non-administrative tasks (e.g., email, web browsing).
- Privileged account usernames shall follow [Organization Name]'s privileged account naming convention: `[prefix]-[username]` where `[prefix]` is defined per environment (e.g., `adm-`, `dba-`, `svc-`).
- Initial passwords or credentials for privileged accounts shall be generated by [PAM Solution Name], meet the password complexity requirements defined in Section 6.4, and be delivered to the account holder through a secure channel.
- All privileged accounts must be enrolled in [Organization Name]'s PAM solution at the time of provisioning.

#### 6.2.3 Modification

Changes to the scope or level of existing privileged access (e.g., expansion of rights, addition of target systems) shall be treated as a new access request and must follow the approval process defined in Section 6.2.1.

Temporary elevation of existing privileged access (e.g., for a specific project or maintenance window) must be documented as a time-limited request with a defined expiry date not to exceed [30 days / as defined in procedure].

#### 6.2.4 Deprovisioning

Privileged access shall be promptly revoked in the following circumstances:

| Trigger | Maximum Time to Revoke |
|---|---|
| Employment termination (voluntary or involuntary) | Immediately upon HR notification, prior to or concurrent with departure |
| Role change resulting in loss of business need | Within [1 business day] of effective role change date |
| Leave of absence exceeding [30 days] | Prior to commencement of leave |
| Project or task completion (time-limited access) | On the defined expiry date, or immediately upon task completion, whichever is earlier |
| Recertification review — access not certified | Within [5 business days] of review completion |
| Security incident involving the account | Immediately upon instruction from CISO Office or IAM Manager |
| Vendor engagement end or contract expiry | On or before the contract end date |

The IAM team shall conduct a **monthly reconciliation** of the Privileged Access Register against the HR system and active directory/PAM solution to identify and remediate orphaned privileged accounts.

### 6.3 Shared and Generic Account Restrictions

*This subsection addresses one of the most significant sources of privileged access risk — shared and generic accounts — which undermine individual accountability and complicate forensic investigation. The controls here directly respond to RMiT 10.56(b).*

#### 6.3.1 Prohibition on Shared Privileged Accounts

The use of shared privileged accounts — accounts whose credentials are known to or used by more than one individual — is **prohibited** within [Organization Name]'s technology environment. This prohibition applies to all account types including administrator accounts, database accounts, network device accounts, and application accounts.

#### 6.3.2 Prohibition on Generic Privileged Account Names

Privileged accounts with generic identifiers (e.g., "admin", "administrator", "root", "sa", "sysadmin", "oracle") that are intended for use by multiple individuals are prohibited. Where operating systems or applications create such accounts by default:

- The default account must be **renamed or disabled** upon system commissioning.
- A named, individually-attributed account with equivalent required privileges must be created for each authorized administrator.
- The IAM Manager may approve a documented exception where a system vendor demonstrates that disabling a default account would cause system malfunction (see Section 7).

#### 6.3.3 Service Account Controls

Service accounts, while not used by human users directly, are subject to the following controls in recognition of the elevated risk they present:

- Each service account must have a designated **human owner** responsible for the account, documented in the Privileged Access Register.
- Service account credentials must be stored and managed exclusively within [PAM Solution Name]. Hardcoded credentials in scripts, configuration files, or source code repositories are **strictly prohibited**.
- Service accounts must be granted only the minimum permissions required for their specific automated function.
- Service accounts must not be used for interactive login sessions unless explicitly approved by the IAM Manager for diagnostic purposes, with full session logging.
- Service account passwords must be rotated at least every [90 days], or immediately upon suspected compromise, using [PAM Solution Name]'s automated rotation capability.
- Service accounts shall not have the ability to log in interactively to desktops or workstations.

#### 6.3.4 Application Accounts with Privileged Access

Application-to-application credentials that hold privileged access must be:

- Managed through [PAM Solution Name] or an approved secrets management solution ([Secrets Management Solution Name, e.g., HashiCorp Vault]).
- Documented in the Privileged Access Register with the associated application identified as the owner.
- Subject to periodic review to validate continued necessity.

### 6.4 Privileged Access Authentication Controls

*This subsection defines the authentication requirements for privileged access. Strong authentication is a foundational control for privileged access management and is directly required under RMiT 10.56(c).*

#### 6.4.1 Multi-Factor Authentication (MFA)

**Multi-factor authentication (MFA) is mandatory for all privileged access.** No exceptions to this requirement are permitted without formal approval from the CISO and documentation of compensating controls.

MFA for privileged access must satisfy the following requirements:

- Use a minimum of two distinct authentication factors from: (i) something you know (password/PIN), (ii) something you have (hardware token, authenticator app, smart card), and (iii) something you are (biometric).
- Hardware tokens or FIDO2-compliant authenticators are the preferred second factor for privileged access to critical systems.
- SMS-based one-time passwords (OTPs) are **not approved** as an MFA factor for privileged access due to SIM-swapping and interception risks.
- MFA must be applied at the point of privileged session initiation, regardless of the user's network location (on-premises or remote).

#### 6.4.2 Password Requirements for Privileged Accounts

Privileged account passwords must meet the following minimum requirements:

| Parameter | Requirement |
|---|---|
| Minimum length | 20 characters |
| Complexity | Must include uppercase, lowercase, numeric, and special characters |
| Password history | Must not reuse the last 24 passwords |
| Maximum age | 90 days (automated rotation via PAM solution preferred) |
| Lockout threshold | 5 consecutive failed attempts |
| Lockout duration | Account lock until released by IAM team |
| Storage | Must be stored exclusively in [PAM Solution Name]; plaintext storage is prohibited |

#### 6.4.3 PAM Solution-Mediated Access

All privileged access to in-scope systems must be initiated through [PAM Solution Name]. Direct connections that bypass the PAM solution are prohibited. [PAM Solution Name] provides:

- Credential injection and checkout, preventing users from viewing or knowing passwords for managed accounts.
- Session initiation, recording, and termination.
- Real-time monitoring and the ability to terminate sessions exhibiting suspicious activity.

Where technical constraints prevent PAM-mediated access for specific systems, a documented exception (per Section 7) must be in place, with compensating controls including enhanced logging and more frequent review.

#### 6.4.4 Session Timeout

Privileged sessions must be subject to automatic timeout upon inactivity. Maximum inactivity periods are:

| System Category | Maximum Inactivity Timeout |
|---|---|
| Critical systems (core banking, payment, security) | 5 minutes |
| Standard servers and infrastructure | 10 minutes |
| Database administrative sessions | 5 minutes |
| Network device management sessions | 10 minutes |

### 6.5 Just-In-Time (JIT) and Just-Enough-Access (JEA)

*This subsection governs the application of JIT and JEA principles, which represent the recommended direction of travel for mature privileged access management programs. Authors should reflect [Organization Name]'s current PAM maturity and set aspirational targets where full JIT/JEA implementation is not yet achieved.*

#### 6.5.1 Just-In-Time Access Provisioning

[Organization Name] shall progressively implement Just-In-Time (JIT) access provisioning for privileged access to critical systems. Under a JIT model:

- Privileged accounts are not persistently active; they are activated on demand for a specific authorized task.
- Access is granted for a defined, minimum time window (not to exceed [4 hours] without re-authorization).
- Access is automatically revoked at the expiry of the time window or upon manual closure of the session.
- All JIT access requests and approvals are recorded in [PAM Solution Name] and the ITSM platform.

The implementation roadmap for JIT access is documented in [Reference: PAM Roadmap Document, Document ID: [Document ID]].

#### 6.5.2 Scope Limitation

Privileged access, whether standing or JIT, must be scoped to only the specific systems, databases, directories, or resources required for the authorized task. Blanket or enterprise-wide privileged access is prohibited except for designated roles with a documented business need (e.g., Active Directory Domain Administrators), subject to enhanced monitoring.

#### 6.5.3 Standing Privileged Access

Where standing privileged access (persistent, continuously active privileged accounts) is necessary due to operational requirements:

- A documented business justification must be approved by the System/Application Owner and the CISO Office.
- The access must be subject to all session management, logging, and monitoring controls defined in this policy.
- Standing privileged access must be reviewed during each quarterly recertification cycle.

### 6.6 Privileged Session Management

*This subsection governs the controls applied to active privileged sessions to enable oversight, auditability, and rapid response to suspicious activity.*

#### 6.6.1 Session Recording

All privileged sessions conducted via [PAM Solution Name] must be recorded. Session recordings must capture:

- Session metadata: user identity, source IP address, target system, date and time of connection and termination.
- Full session content: keystroke logs, commands executed, and screen recordings where technically feasible.
- Session recordings must be stored in a tamper-evident format in [Storage Location / SIEM].

#### 6.6.2 Retention of Session Recordings

Session recordings and associated metadata must be retained for a minimum of **[3 years]** in accordance with [Organization Name]'s Records Retention Schedule and BNM examination readiness requirements. Retention periods for specific system categories:

| System Category | Minimum Retention Period |
|---|---|
| Core banking and payment systems | 7 years |
| Customer data systems (PDPA-scope) | 7 years (or duration of data retention obligation, whichever is longer) |
| Security systems | 3 years |
| General IT infrastructure | 3 years |

#### 6.6.3 Session Termination

Privileged sessions must be terminated:

- Upon task completion.
- Upon inactivity timeout (per Section 6.4.4).
- Immediately upon instruction from the CISO Office, IAM Manager, or incident response personnel.
- Automatically upon detection of policy violations by [PAM Solution Name] (e.g., execution of prohibited commands).

#### 6.6.4 Prohibition on Session Sharing

The sharing of an active privileged session (e.g., screen sharing a privileged session with an unauthorized party) is prohibited. Authorized session observation (e.g., supervisor oversight during a critical change) must be conducted through [PAM Solution Name]'s built-in session monitoring capability and must be logged.

### 6.7 Privileged Access Logging and Monitoring

*This subsection defines the comprehensive logging and monitoring requirements for privileged access. Audit trails for privileged activities are essential for regulatory compliance, incident investigation, and anomaly detection, as required under RMiT 10.56(d).*

#### 6.7.1 Mandatory Logging Events

The following events must be logged for all privileged accounts and sessions:

| Event Category | Events to Log |
|---|---|
| Authentication | Successful login, failed login attempts, MFA success/failure, account lockout, password change/reset |
| Session Management | Session initiation, session termination, session timeout, session takeover/termination by administrator |
| Account Management | Account creation, modification, deletion, privilege escalation, privilege reduction, account enable/disable |
| Access Activity | Commands executed, files accessed or modified, databases queried or modified, configuration changes |
| PAM Events | Credential checkout, credential check-in, password rotation, policy violation alerts |
| Anomalous Activity | Logins outside business hours, logins from unusual locations or IP addresses, bulk data access, access to unassigned systems |

#### 6.7.2 Log Integrity and Tamper Protection

Privileged access logs must be:

- Written to a separate, centralized logging infrastructure (SIEM: [SIEM Platform Name]) to which the logged individuals do not have write or delete access.
- Protected by cryptographic integrity controls (e.g., hash chaining, digital signatures) to detect tampering.
- Replicated to a secondary logging node or immutable storage to ensure availability for audit purposes.

#### 6.7.3 Real-Time Monitoring

The CISO Office shall implement real-time monitoring of privileged access activities through [SIEM Platform Name], with alerting configured for the following scenarios (at minimum):

| Alert Scenario | Severity | Response SLA |
|---|---|---|
| Privileged login outside approved working hours | High | 30 minutes |
| Multiple failed MFA attempts on a privileged account | Critical | 15 minutes |
| Privileged access from an unrecognized or foreign IP address | Critical | 15 minutes |
| Execution of privileged commands flagged as high-risk (e.g., bulk delete, privilege escalation) | High | 30 minutes |
| Privileged session duration exceeding [4 hours] without re-authorization | Medium | 1 hour |
| Privileged account access to systems not in the account's approved scope | Critical | 15 minutes |
| Break-glass account activation | Critical | Immediate — concurrent notification to CISO and IAM Manager |
| Service account interactive login | High | 30 minutes |

#### 6.7.4 Log Review

Privileged access logs must be reviewed:

| Review Type | Frequency | Responsible Party |
|---|---|---|
| Automated alert triage and response | Continuous (24/7) | CISO Office / SOC |
| Privileged session recording spot-check | Weekly (minimum 10% sample) | CISO Office |
| Full privileged access activity review (high-risk accounts) | Monthly | CISO Office |
| Comprehensive log review for compliance reporting | Quarterly | IAM Manager + CISO Office |
| Independent log review (audit) | Annually (minimum) | Internal Audit |

### 6.8 Privileged Access Reviews and Recertification

*This subsection establishes the formal recertification process, which is a key detective control ensuring that privileged access rights remain appropriate over time. This directly addresses RMiT 10.56(e).*

#### 6.8.1 Recertification Schedule

All privileged access rights within [Organization Name] are subject to formal recertification on the following schedule:

| Account/Access Category | Recertification Frequency |
|---|---|
| Human privileged accounts (all) | Quarterly |
| Service accounts | Semi-annually |
| Break-glass accounts (existence and custody) | Quarterly |
| Third-party privileged access | Quarterly (aligned to contract milestones) |
| Dormant privileged accounts (no login in 30+ days) | Immediately upon identification; monthly sweep |

#### 6.8.2 Recertification Process

The recertification process shall proceed as follows:

1. **Initiation:** The IAM team shall generate a privileged access recertification report from [PAM Solution Name] at the start of each review period and distribute it to the relevant System/Application Owners.
2. **Review:** Each System/Application Owner must review and certify each privileged account associated with their system within **[10 business days]** of receiving the report.
3. **Decision:** For each account, the reviewer must make one of the following decisions:
   - **Certify (Approve):** The access is still required, appropriate, and the individual's role and employment status remain unchanged.
   - **Modify:** The access level or scope requires adjustment (triggers a modification request per Section 6.2.3).
   - **Revoke:** The access is no longer required or appropriate (triggers deprovisioning per Section 6.2.4).
4. **Escalation:** Accounts not reviewed within the 10-business-day window shall be flagged to the IAM Manager and CISO Office. Access for un-reviewed accounts shall be suspended pending review.
5. **Documentation:** All recertification decisions, including the certifier's identity and date of certification, must be recorded in [PAM Solution Name / ITSM Platform].

#### 6.8.3 Dormant Account Management

Privileged accounts showing no login activity for **[30 consecutive days]** shall be automatically flagged by [PAM Solution Name] for review. The IAM team shall:

1. Contact the account owner to determine whether the access remains required.
2. Disable the account within [5 business days] if no response or justification is received.
3. Permanently delete the account within [30 days] of disabling, unless a documented justification for retention is approved.

### 6.9 Privileged Access for Third Parties and Vendors

*This subsection addresses the specific risks associated with granting privileged access to external parties, including managed service providers, system integrators, and software vendors. Third-party privileged access must be subject to controls equivalent to or exceeding those applied to internal users, per RMiT 10.56(f).*

#### 6.9.1 Pre-Access Requirements

Prior to provisioning privileged access for any third party, [Organization Name] must ensure:

- A current, executed contract is in place that includes specific data protection, confidentiality, and security obligations consistent with [Organization Name]'s security standards and applicable regulatory requirements.
- The third party has been subject to a documented **third-party risk assessment** approved by [Risk Management / CISO Office].
- The third party's personnel requiring privileged access have been individually identified and vetted. Generic vendor accounts are prohibited.
- The third party has acknowledged and agreed to comply with this Privileged Access Policy.

#### 6.9.2 Third-Party Access Provisioning Controls

Third-party privileged access must be:

- **Time-limited:** Provisioned for the minimum duration necessary and set with an automatic expiry date aligned to the engagement timeline.
- **Scoped:** Restricted to only the specific systems required for the third party's contracted scope of work.
- **PAM-mediated:** All third-party privileged sessions must be conducted through [PAM Solution Name], with full session recording enabled.
- **Accompanied by a dedicated account:** Each third-party individual must have their own named account. Shared vendor accounts are prohibited.
- **Conditional on supervision:** For high-sensitivity systems, third-party privileged sessions may require real-time supervision by an authorized [Organization Name] employee.

#### 6.9.3 Remote Access for Third Parties

Third-party privileged access must be conducted over an approved, encrypted remote access channel:

- [Organization Name]'s approved third-party remote access solution is [Remote Access Solution Name, e.g., dedicated VPN with MFA, PAM jump server].
- Direct RDP or SSH connections from external networks that bypass the PAM solution are prohibited.

#### 6.9.4 Third-Party Access Termination

Third-party privileged access must be revoked:

- On or before the contract end date.
- Immediately upon completion of the specific engagement or task for which access was granted.
- Immediately upon notification from the contract manager that the engagement has been terminated, suspended, or the individual's involvement has ended.

### 6.10 Emergency and Break-Glass Access

*This subsection governs the use of emergency access accounts, also known as break-glass accounts, which are held in reserve for use during critical incidents where normal access channels are unavailable. Robust controls around break-glass accounts are essential to prevent their misuse.*

#### 6.10.1 Purpose and Scope of Break-Glass Accounts

Break-glass accounts are emergency privileged accounts intended for use exclusively during declared incidents or crises where:

- Normal administrative access is unavailable due to system failure, PAM solution outage, or identity provider failure.
- Immediate privileged access is required to restore services or prevent significant harm.

Break-glass accounts must not be used as a convenience workaround for normal access difficulties, PAM non-availability during planned maintenance, or avoidance of the standard access approval process.

#### 6.10.2 Break-Glass Account Inventory

[Organization Name] shall maintain a documented inventory of all break-glass accounts. For each account, the following must be recorded:

| Field | Details |
|---|---|
| Account Name | [Account Name] |
| Target System | [System Name] |
| Privilege Level | [Privilege Level, e.g., Domain Admin, Root] |
| Custodian (Primary) | [Name and Title] |
| Custodian (Secondary) | [Name and Title] |
| Credential Storage Location | [PAM Solution Name] / Physical safe [Location] |
| Last Password Rotation Date | [Date] |
| Last Review Date | [Date] |

#### 6.10.3 Break-Glass Credential Storage

Break-glass account credentials must be:

- Stored in [PAM Solution Name]'s secure vault with restricted access, or in a physically secured sealed envelope held in a [fireproof safe / Class A security container] in [Location].
- The physical storage location must be known to the primary and secondary custodians and the IAM Manager only.
- Dual-custody controls must be applied where feasible: access to break-glass credentials should require the concurrent authorization of two designated custodians.

#### 6.10.4 Break-Glass Access Activation Procedure

When a break-glass account must be activated:

1. The requestor must notify the **IAM Manager** and **CISO Office** concurrently and immediately via [approved communication channel].
2. The activation must be authorized by the **IAM Manager** (or their documented delegate in their absence).
3. The activation event, including timestamp, authorizing individual, reason for activation, and expected duration, must be logged immediately in [ITSM Platform Name].
4. The session must be recorded in full through [PAM Solution Name] or an alternative logging mechanism if the PAM solution is unavailable.
5. Upon completion of the emergency task, the break-glass session must be terminated immediately.
6. The break-glass account password must be rotated immediately following use, before being returned to secure storage.

#### 6.10.5 Post-Use Review

Every use of a break-glass account must be followed by a **post-use review** conducted by the CISO Office within [2 business days] of the activation. The review must document:

- Whether the activation was genuinely necessary and proportionate.
- The actions taken during the session (confirmed against session recordings and logs).
- Whether any unauthorized or unexpected actions were taken.
- Recommendations to prevent recurrence of the underlying condition that necessitated break-glass use.

The post-use review report must be provided to the IAM Manager and the relevant System/Application Owner, and retained for audit purposes.

---

## 7. Exceptions and Escalation Process

*This section defines the formal process for requesting, approving, and managing exceptions to the requirements of this policy. All exceptions must be documented, time-limited, and subject to compensating controls. An undocumented exception is a policy violation.*

### 7.1 Grounds for Exception

An exception to this policy may be considered where a specific requirement:

- Is technically infeasible for a particular legacy system or application, and the system cannot be replaced within a reasonable timeframe.
- Would cause a disproportionate operational disruption relative to the risk it mitigates, supported by a documented risk assessment.
- Conflicts with a specific regulatory obligation or vendor warranty condition.

Exceptions will not be granted on grounds of convenience, cost avoidance without a risk-based rationale, or user preference.

### 7.2 Exception Request Process

| Step | Action | Responsible Party |
|---|---|---|
| 1 | Submit a completed **Policy Exception Request Form** ([Form ID: [Form ID]]) via [ITSM Platform Name], documenting the specific requirement, the reason for the exception, the proposed compensating controls, and the requested duration. | Requester |
| 2 | Review the exception request for completeness and preliminary risk assessment. | IAM Manager |
| 3 | Provide security risk opinion and recommendation on the exception request. | CISO Office |
| 4 | Approve or reject the exception request. | IAM Manager (standard exceptions); CISO Office approval required for exceptions involving MFA, logging, or session recording; Board-level Risk Committee for exceptions to core banking systems |
| 5 | If approved: document the exception in the **Policy Exception Register**, configure compensating controls, and set a review date (maximum 12 months). | IAM Manager |
| 6 | Notify relevant System/Application Owner and document approval in the Privileged Access Register. | IAM Manager |

### 7.3 Exception Register

The IAM Manager shall maintain a **Policy Exception Register** containing:

| Field | Details |
|---|---|
| Exception ID | [Unique Identifier] |
| Policy Requirement Excepted | [Section Reference] |
| System/Environment Affected | [System Name] |
| Justification | [Summary of Business/Technical Reason] |
| Risk Assessment Reference | [Risk Register Entry ID] |
| Compensating Controls | [Description of Controls] |
| Approved By | [Name and Title] |
| Approval Date | [Date] |
| Expiry Date | [Date — Maximum 12 Months] |
| Review Date | [Date] |
| Status | Active / Expired / Renewed / Revoked |

### 7.4 Exception Review and Renewal

All active exceptions must be reviewed at least **annually** by the IAM Manager and CISO Office. At each review:

- The original justification must be re-evaluated for continued validity.
- Compensating controls must be assessed for effectiveness.
- A remediation plan to eliminate the need for the exception must be documented and tracked.

Exceptions that cannot be justified upon review must be revoked, and the relevant system must be brought into compliance within [90 days] of revocation.

### 7.5 Escalation

Where a proposed exception involves:

- Core banking or payment system privileged access.
- Exceptions to MFA, session recording, or real-time monitoring requirements.
- Third-party privileged access exceptions.

...the exception request must be escalated to [Chief Risk Officer / Chief Information Officer / Relevant Board Committee] for approval prior to implementation.

---

## 8. Compliance and Enforcement

*This section defines how compliance with this policy will be measured, reported, and enforced. Clear enforcement provisions are essential for the policy to have effect and for demonstrating to regulators that the policy is operationally implemented, not merely documented.*

### 8.1 Compliance Monitoring

Compliance with this policy shall be monitored through the following mechanisms:

| Mechanism | Frequency | Responsible Party | Output |
|---|---|---|---|
| PAM solution automated compliance dashboard | Continuous | IAM Manager | Real-time compliance metrics |
| Privileged access log review | Per schedule in Section 6.7.4 | CISO Office | Log review reports |
| Access recertification completion tracking | Quarterly | IAM Manager | Recertification completion rate |
| Dormant account sweep | Monthly | IAM Manager | Dormant account remediation log |
| Policy exception register review | Quarterly | IAM Manager | Exception status report |
| Third-party privileged access review | Quarterly | IAM Manager | Third-party access compliance report |
| Internal audit of privileged access controls | Annually (minimum) | Internal Audit | Audit report with findings |
| Penetration testing (privilege escalation focus) | Annually | CISO Office / External Tester | Penetration test report |

### 8.2 Key Performance Indicators (KPIs)

[Organization Name] shall track the following KPIs to measure the effectiveness of privileged access controls:

| KPI | Target | Measurement Source |
|---|---|---|
| Recertification completion rate | 100% within defined review period | PAM Solution / ITSM |
| Dormant privileged accounts (30+ days inactive) | 0% of active accounts | PAM Solution |
| Shared/generic privileged accounts | 0 (excluding approved exceptions) | PAM Solution |
| Privileged accounts without MFA | 0% | IAM / MFA Platform |
| Privileged accounts not enrolled in PAM solution | 0% | PAM Solution vs. AD reconciliation |
| Mean time to revoke access upon offboarding | ≤ 4 hours | HR system vs. IAM logs |
| Privileged access policy exceptions open > 12 months | 0 | Exception Register |
| Critical alerts responded to within SLA | ≥ 99% | SIEM / SOC |

### 8.3 Reporting

The IAM Manager shall prepare and distribute:

- A **Monthly Privileged Access Dashboard** to the CISO Office, summarizing KPI performance and any material compliance issues.
- A **Quarterly Privileged Access Compliance Report** to senior management (CISO, CRO, CIO), including KPI trends, exception status, and recertification outcomes.
- A **Board/Risk Committee Privileged Access Update** on a semi-annual basis, or immediately upon identification of a material compliance breach.

### 8.4 Enforcement and Disciplinary Action

Violations of this policy are treated as serious matters that may expose [Organization Name] to regulatory, reputational, and operational risk. Policy violations will be handled as follows:

| Violation Type | Examples | Response |
|---|---|---|
| **Inadvertent / Low Severity** | Failure to close a privileged session promptly; minor procedural non-compliance | Informal counselling by line manager; mandatory refresher training; documented in personnel record |
| **Deliberate / Moderate Severity** | Sharing privileged account credentials; bypassing PAM solution without exception; accessing systems outside approved scope | Formal disciplinary process under [Organization Name]'s HR Disciplinary Policy; access suspended pending investigation |
| **Serious / High Severity** | Unauthorized access to sensitive data using privileged account; deliberate tampering with audit logs; sharing break-glass credentials | Immediate suspension of all access; escalation to HR for potential termination proceedings; notification to CISO Office for security incident response; potential referral to law enforcement |

All enforcement actions must be documented and retained for [7 years] in accordance with [Organization Name]'s Records Retention Schedule.

### 8.5 Regulatory Breach Notification

Where a privileged access violation constitutes a material security incident or technology risk event as defined under BNM RMiT, [Organization Name]'s incident notification and reporting obligations to BNM shall be discharged in accordance with the [Incident Management and Breach Notification Policy, Document ID: [Document ID]].

---

## 9. Related Policies, Standards, and Procedures

*This section cross-references all documents that are directly related to or operate in conjunction with this policy. Maintaining clear cross-references supports holistic governance and facilitates audit trail navigation.*

| Document Title | Document ID | Relationship |
|---|---|---|
| Access Control Policy | [Document ID] | Parent policy; governs all access, of which this policy addresses the privileged subset |
| Information Security Policy | [Document ID] | Overarching security governance framework |
| Identity and Access Management (IAM) Standard | [Document ID] | Technical standard for IAM implementation |
| Privileged Access Management (PAM) Procedure | [Document ID] | Operational procedures implementing this policy |
| Third-Party Risk Management Policy | [Document ID] | Governs engagement with third parties including access |
| Vendor Management Policy | [Document ID] | Governs vendor relationships and obligations |
| Incident Management and Breach Notification Policy | [Document ID] | Governs response to security incidents involving privileged accounts |
| Change Management Policy | [Document ID] | Governs changes to systems, relevant to privileged access for change activities |
| Business Continuity and Disaster Recovery Policy | [Document ID] | Governs emergency access scenarios including break-glass use |
| Records Retention and Disposal Policy | [Document ID] | Governs retention of privileged access logs and records |
| HR Disciplinary Policy | [Document ID] | Governs enforcement actions for policy violations |
| Cryptography and Key Management Standard | [Document ID] | Governs cryptographic controls applied to privileged access logs |
| Network Security Standard | [Document ID] | Governs network controls supporting privileged access segmentation |

---

## 10. Review and Approval History

*This section provides a formal record of the document's history, demonstrating ongoing governance, periodic review, and executive accountability. All version history and approval records must be retained.*

### 10.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name], IAM Manager | [Reviewer Name] | Initial draft for internal review |
| 0.2 | [Date] | [Author Name], IAM Manager | [Reviewer Name], CISO Office | Incorporated CISO Office feedback; expanded Section 6.7 |
| 1.0 | [Date] | [Author Name], IAM Manager | [Approver Name] | Approved for release; initial version |
| | | | | |
| | | | | |

### 10.2 Scheduled Review

This policy is subject to a **quarterly review** cycle as mandated by BNM RMiT requirements for continuous monitoring and periodic assessment. The IAM Manager is responsible for initiating each review. Additionally, this policy must be reviewed immediately upon:

- A material change in [Organization Name]'s technology environment, business operations, or organizational structure.
- Issuance of new or amended regulatory guidance from BNM or other applicable regulators.
- Identification of a significant privileged access incident or audit finding.
- A recommendation from Internal Audit or external assessment.

### 10.3 Approval Sign-Off

By signing below, the individuals listed confirm that they have reviewed this policy document and approve it for implementation within [Organization Name].

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager (Document Owner) | [Name] | __________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | __________________ | [Date] |
| Chief Information Officer (CIO) | [Name] | __________________ | [Date] |
| Chief Risk Officer (CRO) | [Name] | __________________ | [Date] |
| Chief Executive Officer (CEO) / Managing Director | [Name] | __________________ | [Date] |

---

## 11. References

*This section lists the specific regulatory instruments and standards that this policy is designed to address. Maintaining precise references supports regulatory examination readiness and demonstrates that the policy is deliberately anchored in applicable obligations.*

### 11.1 Primary Regulatory Reference

| Reference | Issuing Authority | Relevant Provisions |
|---|---|---|
| **BNM Risk Management in Technology (RMiT) Policy Document** | Bank Negara Malaysia | **Paragraph 10.56** — Privileged access management controls, including individual accountability, shared account restrictions, strong authentication, logging, monitoring, and periodic review |

### 11.2 Supporting Legislation

| Legislation | Parliament of Malaysia | Relevance |
|---|---|---|
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | Section 47 — BNM's authority to issue policy documents; Section 97 — Confidentiality obligations; general supervisory framework |
| Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | Section 57 — BNM's authority for Islamic financial institutions |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Protection of personal data that may be accessed via privileged accounts |
| Computer Crimes Act 1997 (CCA) | Parliament of Malaysia | Criminal liability for unauthorized computer access, unauthorized modification of computer contents |
| Electronic Commerce Act 2006 | Parliament of Malaysia | Legal recognition of electronic records and transactions (relevant to electronic access logs) |

### 11.3 Industry Standards and Frameworks

| Standard / Framework | Issuing Body | Relevant Controls |
|---|---|---|
| ISO/IEC 27001:2022 | ISO/IEC | Annex A.8.2 — Privileged access rights; Annex A.8.15 — Logging; Annex A.5.18 — Access rights |
| ISO/IEC 27002:2022 | ISO/IEC | Control 8.2 — Privileged access rights guidance |
| NIST SP 800-53 Rev. 5 | NIST | AC-6 (Least Privilege); AC-17 (Remote Access); AU-2, AU-9, AU-12 (Audit and Accountability); IA-2 (Identification and Authentication) |
| CIS Controls v8 | Center for Internet Security | Control 5 (Account Management); Control 6 (Access Control Management); Control 8 (Audit Log Management) |
| PCI DSS v4.0 | PCI SSC | Requirement 7 (Restrict Access); Requirement 8 (Identify and Authenticate); Requirement 10 (Log and Monitor) |
| MITRE ATT&CK Framework | MITRE Corporation | Privilege escalation and credential access tactics (for threat modelling of privileged access risks) |

---

## 12. Appendices

*Appendices provide supporting material, tools, and reference documents that complement the policy body. Authors should populate each appendix with the referenced material or confirm that it is maintained as a linked standalone document.*

### Appendix A — Privileged Access Request Form Template

*This appendix contains the standard form to be used when requesting privileged access. The form is also available in [ITSM Platform Name] as ticket template [Template ID: [Template ID]].*

**PRIVILEGED ACCESS REQUEST FORM**

| Field | Details |
|---|---|
| **Request ID** | [Auto-generated by ITSM] |
| **Request Date** | [Date] |
| **Requester Name** | [Full Name] |
| **Requester Employee ID** | [Employee ID] |
| **Requester Department** | [Department] |
| **Requester Manager** | [Manager Name] |
| **Account Holder Name** (if different from requester) | [Full Name] |
| **Account Holder Employee / Vendor ID** | [ID] |
| **Account Type Requested** | ☐ Human Admin Account ☐ Service Account ☐ Break-Glass Account ☐ Third-Party Account |
| **Target System(s)** | [System Name(s)] |
| **Privilege Level Requested** | [e.g., Domain Admin / Root / DBA / Network Admin] |
| **Access Duration** | ☐ Standing (justify below) ☐ Time-limited: From [Date] to [Date] |
| **Business Justification** | [Detailed description of why this access is required] |
| **Least Privilege Confirmation** | I confirm that the access level requested is the minimum required for the stated purpose: ☐ Yes |
| **Manager Approval** | Name: [Name] \| Signature: __________ \| Date: [Date] |
| **System/Application Owner Approval** | Name: [Name] \| Signature: __________ \| Date: [Date] |
| **CISO Office Approval** (if required) | Name: [Name] \| Signature: __________ \| Date: [Date] |
| **IAM Team Provisioning** | Provisioned By: [Name] \| Date: [Date] \| Account Created: [Account Name] |

---

### Appendix B — Privileged Access Policy Exception Request Form Template

*This appendix contains the standard form for requesting exceptions to this policy. All fields are mandatory. Incomplete exception requests will not be processed.*

**PRIVILEGED ACCESS POLICY EXCEPTION REQUEST FORM**

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-generated] |
| **Submission Date** | [Date] |
| **Requester Name and Title** | [Name], [Title] |
| **Department** | [Department] |
| **Policy Section(s) for Which Exception is Sought** | [Section Number(s)] |
| **Specific Requirement Being Excepted** | [Exact requirement text from policy] |
| **System(s) / Environment(s) Affected** | [System Name(s)] |
| **Reason for Exception** | [Detailed technical or business justification. Attach supporting evidence (e.g., vendor documentation, risk assessment) as required.] |
| **Risk Assessment** | Risk Level: ☐ Low ☐ Medium ☐ High \| Risk Register Reference: [ID] |
| **Proposed Compensating Controls** | [Detailed description of controls that will mitigate the risk introduced by the exception] |
| **Requested Exception Duration** | From [Date] to [Date] (Maximum 12 months) |
| **Remediation Plan** | [Plan and timeline to bring the system into full policy compliance, eliminating the need for this exception] |
| **IAM Manager Review** | Recommendation: ☐ Approve ☐ Reject \| Name: [Name] \| Date: [Date] \| Comments: [Comments] |
| **CISO Office Approval** | Decision: ☐ Approved ☐ Rejected \| Name: [Name] \| Date: [Date] \| Comments: [Comments] |
| **Escalation Approval** (if required) | Role: [Role] \| Name: [Name] \| Date: [Date] \| Decision: ☐ Approved ☐ Rejected |

---

### Appendix C — Privileged Account Naming Convention

*This appendix defines the standardized naming conventions for privileged accounts across [Organization Name]'s environments. Consistent naming enables automated detection of privileged accounts and supports audit activities.*

| Account Type | Environment | Prefix | Example |
|---|---|---|---|
| Human Administrator — Windows | On-premises | `adm-` | `adm-jsmith` |
| Human Administrator — Linux/Unix | On-premises | `adm-` | `adm-jsmith` |
| Human Database Administrator | All | `dba-` | `dba-jsmith` |
| Human Network Administrator | All | `net-` | `net-jsmith` |
| Human Cloud Administrator | Cloud | `cld-` | `cld-jsmith` |
| Service Account | All | `svc-` | `svc-appname` |
| Third-Party Administrator | All | `ext-` | `ext-vendorname` |
| Break-Glass Account | All | `bga-` | `bga-system01` |

All naming conventions must be implemented at the time of account creation. Existing accounts that do not conform to this convention must be migrated as part of the annual privilege access remediation cycle.

---

### Appendix D — Approved PAM and Security Tooling

*This appendix lists the technology tools approved for use in managing and monitoring privileged access. Use of unapproved tools for privileged access management is prohibited.*

| Tool Category | Approved Solution | Version | Notes |
|---|---|---|---|
| Privileged Access Management (PAM) | [PAM Solution Name, e.g., CyberArk PAS / BeyondTrust PBPS / Delinea Secret Server] | [Version] | Primary PAM platform |
| Secrets Management | [Secrets Manager Name, e.g., HashiCorp Vault] | [Version] | For service account and API credentials |
| Multi-Factor Authentication (MFA) | [MFA Solution Name, e.g., Microsoft Authenticator / RSA SecurID] | [Version] | Mandatory for all privileged access |
| SIEM / Log Management | [SIEM Platform Name, e.g., Splunk / IBM QRadar / Microsoft Sentinel] | [Version] | Privileged access log collection and alerting |
| ITSM (Access Request Workflow) | [ITSM Platform Name, e.g., ServiceNow / Jira Service Management] | [Version] | Access request, approval, and tracking |
| Remote Access (Third Party) | [Remote Access Solution Name] | [Version] | Approved third-party remote access channel |
| Directory Services | [Directory Service Name, e.g., Microsoft Active Directory / Azure AD] | [Version] | Identity source of record |

---

### Appendix E — Privileged Access Risk Register Summary

*This appendix provides a summary of key risks associated with privileged access management that this policy is designed to mitigate. The full risk register is maintained in [Risk Management Platform / Document ID: [Document ID]].*

| Risk ID | Risk Description | Likelihood | Impact | Inherent Risk Rating | Key Controls (Policy Section) | Residual Risk Target |
|---|---|---|---|---|---|---|
| PAM-R01 | Unauthorized privileged access by insider threat | Medium | Critical | High | 6.1, 6.2, 6.7, 6.8 | Medium |
| PAM-R02 | Compromise of privileged credentials by external attacker | Medium | Critical | High | 6.4, 6.6, 6.7 | Low |
| PAM-R03 | Orphaned privileged accounts providing unauthorized access | High | High | High | 6.2.4, 6.8 | Low |
| PAM-R04 | Shared account usage preventing attribution of malicious activity | Medium | High | High | 6.3 | Low |
| PAM-R05 | Insufficient logging preventing forensic investigation | Low | Critical | High | 6.7 | Low |
| PAM-R06 | Third-party vendor misuse of privileged access | Medium | High | High | 6.9 | Low |
| PAM-R07 | Break-glass account misuse outside emergency context | Low | Critical | High | 6.10 | Low |
| PAM-R08 | Service account credential exposure (hardcoding) | Medium | High | High | 6.3.3 | Low |
| PAM-R09 | Privilege creep through inadequate recertification | High | Medium | High | 6.8 | Low |
| PAM-R10 | Regulatory non-compliance and BNM examination findings | Low | High | Medium | All sections | Low |

---

### Appendix F — Glossary of Regulatory References

*This appendix provides a quick-reference summary of the key regulatory references cited in this policy for the benefit of readers who may not be familiar with the Malaysian financial regulatory landscape.*

| Acronym / Term | Full Name | Issuing Authority | URL / Location |
|---|---|---|---|
| BNM | Bank Negara Malaysia | — | [www.bnm.gov.my] |
| RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | BNM website — Policy Documents section |
| FSA | Financial Services Act 2013 | Parliament of Malaysia | Attorney General's Chambers — MyUndangUndang |
| IFSA | Islamic Financial Services Act 2013 | Parliament of Malaysia | Attorney General's Chambers — MyUndangUndang |
| PDPA | Personal Data Protection Act 2010 | Parliament of Malaysia | Attorney General's Chambers — MyUndangUndang |
| CCA | Computer Crimes Act 1997 | Parliament of Malaysia | Attorney General's Chambers — MyUndangUndang |

---

*End of Document*

---

| Field | Details |
|---|---|
| **Document Title** | Privileged Access Policy |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Last Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

*This document is subject to [Organization Name]'s document control procedures. Printed copies are uncontrolled. Please verify the currency of this document against the master copy held in [Document Management System Name] before relying on its contents.*