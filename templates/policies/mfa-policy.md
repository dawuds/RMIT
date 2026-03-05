# Multi-Factor Authentication (MFA) Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | IAM Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **Applicable Clause(s)** | RMiT 10.54 |

---

> **Document Classification Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may result in disciplinary action and/or legal proceedings.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
7. [MFA Implementation Standards](#7-mfa-implementation-standards)
8. [Critical Systems Classification](#8-critical-systems-classification)
9. [Privileged Access Management](#9-privileged-access-management)
10. [Exceptions and Escalation Process](#10-exceptions-and-escalation-process)
11. [Compliance and Enforcement](#11-compliance-and-enforcement)
12. [Monitoring and Audit](#12-monitoring-and-audit)
13. [Review and Approval History](#13-review-and-approval-history)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*Describe the intent of this policy, why it exists, and the risk it mitigates. Reference the specific regulatory obligation that necessitates this policy.*

This policy establishes the mandatory requirements for the implementation and enforcement of Multi-Factor Authentication (MFA) across all privileged access to critical systems within [Organization Name]. The policy is designed to:

- Protect [Organization Name]'s critical information assets and technology infrastructure from unauthorised access resulting from compromised credentials.
- Ensure that privileged users are authenticated using two or more independent verification factors before access to sensitive or critical systems is granted.
- Comply with the Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.54, which mandates the use of strong authentication mechanisms for privileged access.
- Establish a consistent, enforceable baseline for identity verification across all business units, technology platforms, and third-party access arrangements.
- Support the broader objectives of [Organization Name]'s Information Security Management System (ISMS) and Cybersecurity Framework.

This policy supports [Organization Name]'s commitment to maintaining the confidentiality, integrity, and availability of customer data, financial records, and technology systems in accordance with applicable Malaysian financial sector regulations.

---

## 2. Scope

*Define precisely which systems, users, entities, and access types fall within this policy. Be specific about inclusions and exclusions to prevent ambiguity during audits.*

### 2.1 In Scope

This policy applies to:

**Personnel:**

- All permanent employees of [Organization Name] with privileged access rights to critical systems.
- Contract staff, consultants, and third-party service providers granted privileged access to [Organization Name]'s systems.
- Outsourced IT service providers and managed security service providers (MSSPs) with remote administrative access.
- Vendors and technology partners with maintenance or support access to production environments.

**Systems and Environments:**

- All systems classified as **Critical** or **High** under [Organization Name]'s IT Asset Classification Framework (refer to Appendix A).
- Core banking platforms and payment processing systems.
- Customer-facing digital banking channels and internet banking platforms.
- Data centre infrastructure, including servers, network devices, storage systems, and hypervisors.
- Security systems including Security Information and Event Management (SIEM), Intrusion Detection/Prevention Systems (IDS/IPS), firewalls, and endpoint detection platforms.
- Cloud-hosted environments (public, private, and hybrid) used for critical workloads.
- Database management systems containing customer or financial data.
- Identity and Access Management (IAM) platforms and Active Directory / LDAP directories.
- DevOps pipelines and CI/CD toolchains with production deployment access.

**Access Types:**

- All privileged access sessions, including system administrator, database administrator (DBA), network administrator, and security administrator roles.
- Remote access connections (VPN, jump servers, bastion hosts) to critical systems.
- Emergency/break-glass access to production systems.
- Service accounts used for automated processes where interactive authentication is technically feasible.

### 2.2 Out of Scope

The following are explicitly excluded from the scope of this policy unless otherwise stated:

- Standard end-user access to non-critical internal productivity tools (subject to a separate End-User Authentication Policy).
- Automated machine-to-machine service account interactions where interactive MFA is technically infeasible (subject to the Service Account Management Policy and documented exception process in Section 10).
- Physical access controls, which are governed by the Physical and Environmental Security Policy.

### 2.3 Geographic Applicability

This policy applies to all operations of [Organization Name] conducted within Malaysia and to any overseas operations or subsidiaries where [Organization Name] maintains operational control and where local regulatory requirements do not conflict.

---

## 3. Regulatory Context

*Provide context on the regulatory drivers for this policy. This section demonstrates to auditors and examiners that the policy is grounded in specific regulatory obligations.*

### 3.1 Regulatory Mandate

[Organization Name] is licensed and regulated by Bank Negara Malaysia (BNM) as a [Licensed Institution Type, e.g., Licensed Bank / Licensed Islamic Bank / Payment System Operator]. As such, [Organization Name] is subject to the BNM **Risk Management in Technology (RMiT)** Policy Document issued pursuant to Section 47 of the Financial Services Act 2013 (FSA) / Section 57 of the Islamic Financial Services Act 2013 (IFSA).

### 3.2 Applicable Regulatory Clauses

| Regulation / Standard | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | **10.54** | Financial institutions must implement strong multi-factor authentication for privileged access to critical systems. |
| BNM RMiT | [Additional Clause] | [Brief description of related requirement] |
| Personal Data Protection Act 2010 (PDPA) | [Applicable Section] | [Brief description of data protection obligation supported by MFA] |
| NACSA National Cyber Security Policy | [Applicable Section] | [Brief description] |
| [Other Applicable Standard, e.g., PCI-DSS] | [Clause/Section] | [Brief description] |

### 3.3 Consequences of Non-Compliance

Failure to comply with BNM RMiT Clause 10.54 may expose [Organization Name] to:

- Regulatory enforcement action by BNM, including directives, financial penalties, or restrictions on business activities.
- Reputational damage arising from security incidents attributable to inadequate authentication controls.
- Increased exposure to cyber threats including credential stuffing, privilege escalation, and insider threats.
- Potential civil liability under the Personal Data Protection Act 2010 (PDPA) in the event of a data breach linked to inadequate access controls.

---

## 4. Definitions and Abbreviations

*List all technical and regulatory terms used in this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Authentication Factor** | A credential used to verify the identity of a user. Authentication factors are categorised as: something you know (e.g., password, PIN), something you have (e.g., hardware token, mobile authenticator), and something you are (e.g., fingerprint, facial recognition). |
| **Multi-Factor Authentication (MFA)** | An authentication mechanism that requires a user to present two or more independent authentication factors from different categories before access is granted. |
| **Privileged Access** | Access rights that grant a user elevated permissions beyond those of a standard user, including the ability to modify system configurations, manage user accounts, access sensitive data, or administer critical systems. |
| **Privileged Account** | A user account that holds elevated permissions, including but not limited to system administrator accounts, database administrator accounts, network administrator accounts, and root/superuser accounts. |
| **Critical System** | Any system, application, or infrastructure component classified as Critical or High in [Organization Name]'s IT Asset Register, the compromise of which could materially impact [Organization Name]'s operations, regulatory standing, or customer data. |
| **Authentication Authenticator** | A device or application used to generate or receive a second authentication factor (e.g., hardware security key, TOTP mobile app, SMS OTP). |
| **One-Time Password (OTP)** | A password that is valid for a single authentication session or transaction, typically time-based (TOTP) or event-based (HOTP). |
| **Time-Based One-Time Password (TOTP)** | An OTP generated using a time-based algorithm (per RFC 6238), typically valid for 30 seconds. |
| **Hardware Security Key** | A physical cryptographic device (e.g., FIDO2/WebAuthn-compliant key) used as a second authentication factor. |
| **Jump Server / Bastion Host** | A hardened, monitored server used as the sole point of entry for privileged administrative access to systems in a secure network zone. |
| **Break-Glass Access** | Emergency privileged access granted outside normal procedures in response to a critical system outage or security incident, subject to strict post-event review. |
| **IAM** | Identity and Access Management. |
| **Service Account** | A non-human account used by an application, service, or automated process to interact with other systems. |
| **Phishing-Resistant MFA** | MFA implementations that are not susceptible to real-time phishing attacks, such as FIDO2/WebAuthn hardware keys or certificate-based authentication. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| MFA | Multi-Factor Authentication |
| IAM | Identity and Access Management |
| OTP | One-Time Password |
| TOTP | Time-Based One-Time Password |
| SMS | Short Message Service |
| FIDO2 | Fast Identity Online 2 |
| PAM | Privileged Access Management |
| ISMS | Information Security Management System |
| CISO | Chief Information Security Officer |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| AD | Active Directory |
| VPN | Virtual Private Network |
| SIEM | Security Information and Event Management |
| SOC | Security Operations Centre |
| RACI | Responsible, Accountable, Consulted, Informed |

---

## 5. Roles and Responsibilities

*Define who is responsible for each aspect of this policy's implementation and ongoing management. Use a RACI model to eliminate ambiguity.*

### 5.1 Overview

The following roles bear responsibilities in relation to this policy. All role holders must be formally assigned via [Organization Name]'s HR and access management processes.

### 5.2 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Responsibility | Board / Risk Committee | CISO | IAM Manager | IT Operations | System Owners | Internal Audit | Compliance | End Users / Privileged Users |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Policy approval and periodic endorsement | A | C | R | I | I | C | C | I |
| Policy ownership and maintenance | I | C | **R/A** | I | C | C | C | I |
| MFA technology selection and procurement | I | A | R | C | C | I | I | I |
| MFA solution implementation and configuration | I | A | R | R | C | I | I | I |
| Privileged account identification and classification | I | C | R | C | A | C | I | I |
| Enrolment of privileged users into MFA | I | I | A | R | C | I | I | R |
| Day-to-day MFA administration and helpdesk | I | I | A | R | C | I | I | I |
| MFA exception review and approval | I | A | R | C | C | C | C | R |
| Monitoring and alerting on MFA events | I | A | I | R | I | I | I | I |
| Compliance reporting and audit facilitation | I | C | C | C | C | A | R | I |
| Incident response for MFA bypass or failure | I | A | R | R | C | I | C | I |
| Policy review and update | I | C | **R/A** | C | C | C | C | I |
| Awareness and training delivery | I | C | R | C | C | I | A | I |
| Third-party / vendor MFA compliance oversight | I | A | R | C | A | C | C | I |

### 5.3 Role Descriptions

#### 5.3.1 Board of Directors / Board Risk Committee

- Provide oversight and governance of [Organization Name]'s technology risk posture.
- Formally approve this policy upon initial issuance and upon material revision.
- Review periodic reporting on MFA compliance status as part of technology risk dashboards.

#### 5.3.2 Chief Information Security Officer (CISO)

- Accountable for the overall information security posture of [Organization Name], including the adequacy of authentication controls.
- Champion MFA adoption across the organisation.
- Approve exceptions to this policy where the IAM Manager lacks authority (refer to Section 10).
- Report MFA compliance metrics to the Board Risk Committee and senior management.

#### 5.3.3 IAM Manager (Policy Owner)

- Own, maintain, and periodically review this policy.
- Oversee the day-to-day management of MFA solutions, including enrolment, de-provisioning, and troubleshooting.
- Maintain the register of approved MFA methods and critical systems subject to this policy.
- Chair the MFA Exception Review Panel (refer to Section 10).
- Ensure MFA controls for third-party and vendor access are configured and monitored.
- Produce quarterly compliance reports for submission to the CISO.

#### 5.3.4 IT Operations

- Implement and maintain MFA technical controls on all in-scope systems and infrastructure.
- Integrate MFA enforcement into privileged access workflows, jump servers, and PAM solutions.
- Respond to MFA-related incidents and service disruptions in accordance with the Incident Management Policy.
- Support the IAM Manager in monitoring and reporting on MFA system health.

#### 5.3.5 System Owners

- Ensure all privileged accounts on systems under their ownership are subject to MFA enforcement.
- Provide system-specific technical requirements to the IAM Manager for MFA integration.
- Participate in the exception review process where system-specific constraints apply.
- Report any MFA-related anomalies or incidents to the IAM Manager and SOC.

#### 5.3.6 Internal Audit

- Independently assess compliance with this policy during scheduled and ad hoc audits.
- Report findings and recommendations to the Audit Committee.
- Track remediation of audit findings related to MFA.

#### 5.3.7 Compliance Department

- Monitor changes to BNM RMiT and other applicable regulations that may affect this policy.
- Advise the IAM Manager on regulatory interpretation and compliance obligations.
- Facilitate regulatory examinations relating to authentication controls.

#### 5.3.8 Privileged Users (All In-Scope Personnel)

- Enrol in and use the designated MFA solution as required by this policy.
- Protect MFA authenticators (tokens, devices, applications) from loss, theft, or sharing.
- Immediately report loss, theft, or suspected compromise of an MFA authenticator to the IAM helpdesk.
- Comply with all MFA usage requirements and not attempt to circumvent or disable MFA controls.

---

## 6. Policy Statements and Requirements

*This section contains the normative statements of the policy — the mandatory "shall" and "must" requirements. Each statement should be testable and auditable.*

### 6.1 Mandatory MFA Requirement

**[POL-MFA-001]** All privileged access to critical systems as defined in Section 2 and Section 8 **shall** be protected by Multi-Factor Authentication (MFA) using at least two independent authentication factors from different categories.

**[POL-MFA-002]** MFA **shall** be enforced at the point of authentication and **shall not** be bypassable through any technical workaround, configuration change, or administrative override without following the formal exception process defined in Section 10.

**[POL-MFA-003]** Single-factor authentication (e.g., username and password alone) **shall not** be permitted for any privileged access to in-scope critical systems.

### 6.2 Authentication Factor Requirements

**[POL-MFA-004]** MFA implementations **shall** use authentication factors from at least two of the following three categories:

- **Category 1 — Knowledge Factor (Something You Know):** A memorised secret such as a password or PIN, meeting the requirements of [Organization Name]'s Password Management Policy.
- **Category 2 — Possession Factor (Something You Have):** A physical or digital authenticator device or application, such as a FIDO2 hardware security key, a TOTP mobile authenticator application, or a hardware OTP token.
- **Category 3 — Inherence Factor (Something You Are):** A biometric characteristic, such as a fingerprint, facial recognition, or voice pattern, where technically feasible and appropriate.

**[POL-MFA-005]** SMS-based OTP **shall** be considered a lower-assurance possession factor. Its use for privileged access to Tier 1 Critical Systems (refer to Section 8) is **not recommended** and **shall** require documented justification and IAM Manager approval. Where SMS OTP is in use for Tier 1 systems, a migration plan to a higher-assurance method **shall** be established within [X] months of policy effective date.

**[POL-MFA-006]** For access to systems classified as Tier 1 Critical, [Organization Name] **shall** preferentially deploy phishing-resistant MFA methods (e.g., FIDO2/WebAuthn hardware security keys or certificate-based authentication) where technically feasible.

### 6.3 Remote and Third-Party Access

**[POL-MFA-007]** All remote access by employees, contractors, and third parties to [Organization Name]'s internal networks and critical systems (including VPN, bastion hosts, and jump servers) **shall** require MFA authentication.

**[POL-MFA-008]** Third-party vendors and service providers granted privileged access to [Organization Name]'s critical systems **shall** be subject to MFA requirements equivalent to those applicable to internal privileged users. This requirement **shall** be incorporated into relevant contracts, service agreements, and vendor onboarding checklists.

**[POL-MFA-009]** Shared privileged accounts (where a single account is used by multiple individuals) **shall** be prohibited unless technically unavoidable and formally approved as an exception. Where a shared account exception is granted, MFA **shall** still be enforced, and individual accountability **shall** be maintained through session recording and access logging.

### 6.4 MFA Enrolment and Lifecycle Management

**[POL-MFA-010]** All users requiring privileged access **shall** be enrolled in the designated MFA solution prior to being granted access to any in-scope critical system. No privileged access rights **shall** be activated until MFA enrolment is confirmed.

**[POL-MFA-011]** MFA enrolment **shall** be performed through a secure, identity-verified process. Self-service enrolment without identity verification is prohibited for privileged user accounts.

**[POL-MFA-012]** MFA authenticators (tokens, registered devices, certificates) **shall** be de-provisioned immediately upon:

- Termination or resignation of the user.
- Transfer of the user to a role that no longer requires the associated privileged access.
- Reported loss, theft, or suspected compromise of the authenticator.
- Expiry of a time-limited access grant.

**[POL-MFA-013]** Hardware MFA tokens **shall** be subject to an inventory management process. [Organization Name] **shall** maintain an up-to-date register of all issued hardware tokens, including assigned users, serial numbers, and status.

### 6.5 Service Accounts and Automated Processes

**[POL-MFA-014]** Service accounts and automated processes that require privileged access to critical systems **shall** use technically appropriate strong authentication alternatives where interactive MFA is not feasible (e.g., cryptographic certificates, API keys with IP restrictions, or managed service identity mechanisms).

**[POL-MFA-015]** All service account access arrangements falling under this clause **shall** be formally documented, reviewed by the IAM Manager, and subject to the exception process in Section 10.

### 6.6 MFA Bypass and Break-Glass Procedures

**[POL-MFA-016]** Break-glass (emergency) access to critical systems **shall** be subject to the following controls:

- Prior authorisation by the on-call manager or CISO (or designated authority) via a documented approval mechanism.
- Immediate notification to the SOC and IAM Manager upon activation.
- Full session recording for the duration of the break-glass access session.
- Post-event review within [24/48] hours by the IAM Manager and relevant System Owner.
- Deactivation of the break-glass credential immediately upon resolution of the emergency.

**[POL-MFA-017]** Any MFA bypass (deliberate or unintentional) **shall** be treated as a security incident, investigated under the Incident Management Policy, and reported to the CISO.

---

## 7. MFA Implementation Standards

*Describe the technical standards and approved methods for MFA implementation. This section bridges policy intent with technical execution.*

### 7.1 Approved MFA Methods

*List the authentication methods approved for use within [Organization Name]. Align with NIST SP 800-63B Authenticator Assurance Levels (AAL) where applicable.*

| MFA Method | Assurance Level | Permitted Use Cases | Notes |
|---|---|---|---|
| FIDO2 / WebAuthn Hardware Security Key | High (AAL3) | Tier 1 Critical Systems, all privileged access | Preferred method for highest-risk access |
| Certificate-Based Authentication (PIV/Smart Card) | High (AAL3) | Tier 1 Critical Systems, administrative workstations | Requires PKI infrastructure |
| TOTP Mobile Authenticator App (e.g., [Approved App]) | Medium (AAL2) | Tier 1 and Tier 2 Critical Systems | App must be on [Organization Name]-approved list |
| Hardware OTP Token (e.g., RSA SecurID, OATH-compliant) | Medium (AAL2) | All in-scope systems | Suitable where mobile devices are unavailable |
| Push Notification (e.g., [Approved PAM/IAM Solution]) | Medium (AAL2) | Tier 2 Critical Systems, standard privileged access | Must include number matching to prevent MFA fatigue |
| SMS OTP | Low (AAL1) | Limited use — Tier 2 only with approval | Requires documented justification; migration required for Tier 1 |
| Biometric (Fingerprint / Facial Recognition) | Medium–High | Where supported by device and system | Must be combined with another factor |
| Email OTP | Not Approved | — | Not permitted for privileged access |

### 7.2 Minimum Technical Configuration Standards

*Specify the technical parameters for each approved MFA method to ensure consistent, secure implementation.*

| Parameter | Requirement |
|---|---|
| TOTP token validity window | Maximum 30 seconds per code; maximum 1-step clock drift tolerance |
| OTP code length | Minimum 6 digits |
| Failed authentication attempts before lockout | Maximum [5] consecutive failed attempts |
| Account lockout duration | Minimum [15] minutes or until administrator reset |
| MFA session re-authentication interval | Privileged sessions: maximum [X] hours without re-authentication |
| Hardware token battery/validity management | Tokens to be replaced upon expiry or battery failure |
| Push notification MFA fatigue controls | Number matching and/or geographic context to be enabled |

### 7.3 PAM Solution Integration

*Describe how MFA integrates with the Privileged Access Management (PAM) solution deployed at [Organization Name].*

[Organization Name] **shall** enforce MFA for privileged access through its designated Privileged Access Management (PAM) solution: **[PAM Solution Name, e.g., CyberArk / BeyondTrust / Delinea]**. The following controls shall be implemented within the PAM solution:

- MFA challenge enforced at PAM vault login for all privileged account check-out.
- Session recording enabled for all privileged sessions on Tier 1 and Tier 2 Critical Systems.
- Automated session termination upon breach of approved session duration thresholds.
- Integration with [Organization Name]'s SIEM for real-time alerting on failed MFA attempts and anomalous access patterns.

### 7.4 Integration Points

| System / Platform | MFA Integration Method | Authentication Protocol | Status |
|---|---|---|---|
| Active Directory / Azure AD | [MFA Solution] | RADIUS / SAML 2.0 / OIDC | [Implemented / Planned] |
| Core Banking System ([System Name]) | [MFA Solution] | [Protocol] | [Implemented / Planned] |
| VPN Gateway ([Solution Name]) | [MFA Solution] | RADIUS | [Implemented / Planned] |
| Cloud Console ([AWS/Azure/GCP]) | Native MFA (Hardware Key / Authenticator App) | FIDO2 / TOTP | [Implemented / Planned] |
| Jump Server / Bastion Host | [PAM Solution] | [Protocol] | [Implemented / Planned] |
| Database Administrative Tools | [PAM Solution / MFA Proxy] | [Protocol] | [Implemented / Planned] |
| SIEM / SOC Platform | [MFA Solution] | [Protocol] | [Implemented / Planned] |

---

## 8. Critical Systems Classification

*Define how systems are classified and what tier of MFA requirement applies. This section provides the foundation for scoping decisions.*

### 8.1 System Tier Classification Framework

[Organization Name] classifies systems according to the following tiers for the purposes of this policy. The authoritative system classification is maintained in the IT Asset Register owned by [IT Asset Register Owner].

| Tier | Classification | Description | MFA Requirement |
|---|---|---|---|
| **Tier 1** | Critical | Systems whose compromise, unavailability, or data loss would cause severe operational disruption, regulatory breach, significant financial loss, or material harm to customers. | Phishing-resistant MFA (FIDO2/Certificate) strongly preferred; TOTP minimum. |
| **Tier 2** | High | Systems whose compromise would cause significant but contained operational impact, moderate financial loss, or limited customer harm. | TOTP, hardware token, or push notification MFA required. |
| **Tier 3** | Medium | Systems whose compromise would cause limited operational impact. | MFA required; method at IAM Manager discretion. |
| **Tier 4** | Low | Non-critical internal systems with no sensitive data. | Subject to End-User Authentication Policy; this MFA Policy applies only to privileged access. |

### 8.2 Critical Systems Register (Privileged Access MFA Scope)

*Maintain the list of in-scope systems below or reference the IT Asset Register. The IAM Manager is responsible for keeping this list current.*

| System Name | System Type | Tier | Business Owner | Technical Owner | MFA Method Deployed | Last Verified |
|---|---|---|---|---|---|---|
| [Core Banking System Name] | Core Banking | Tier 1 | [Owner] | [Owner] | [Method] | [Date] |
| [Internet Banking Platform] | Customer Channel | Tier 1 | [Owner] | [Owner] | [Method] | [Date] |
| [Payment Processing System] | Payments | Tier 1 | [Owner] | [Owner] | [Method] | [Date] |
| [Active Directory / IAM Platform] | Identity Management | Tier 1 | [Owner] | [Owner] | [Method] | [Date] |
| [SIEM Platform] | Security | Tier 1 | [Owner] | [Owner] | [Method] | [Date] |
| [Cloud Management Console] | Cloud Infrastructure | Tier 1 | [Owner] | [Owner] | [Method] | [Date] |
| [Database Server(s) — Customer Data] | Database | Tier 1 | [Owner] | [Owner] | [Method] | [Date] |
| [HR System] | Internal Operations | Tier 2 | [Owner] | [Owner] | [Method] | [Date] |
| [Financial Reporting System] | Finance | Tier 2 | [Owner] | [Owner] | [Method] | [Date] |
| *[Add rows as required]* | | | | | | |

---

## 9. Privileged Access Management

*This section describes how MFA requirements integrate with broader privileged access governance.*

### 9.1 Privileged Account Lifecycle

All privileged accounts subject to this policy **shall** follow the lifecycle below:

| Stage | Requirement | Responsible Party |
|---|---|---|
| **Request** | Formal access request submitted via [ITSM Tool] with business justification and approvals. | Requestor / Line Manager |
| **Approval** | Approved by System Owner and IAM Manager (Tier 1) or Line Manager and IAM Team (Tier 2). | System Owner / IAM Manager |
| **Provisioning** | Account created and assigned to individual; MFA enrolment completed before access activation. | IT Operations / IAM Team |
| **Review** | Privileged accounts reviewed at minimum quarterly (Tier 1) or semi-annually (Tier 2). | IAM Manager / System Owner |
| **Modification** | Changes to access scope re-trigger approval workflow. | IAM Manager |
| **Revocation** | Access removed within [X] hours of termination or role change; MFA credential de-provisioned simultaneously. | IT Operations / HR |

### 9.2 Privileged Account Inventory

[Organization Name] **shall** maintain a current, complete inventory of all privileged accounts within the PAM solution and IAM systems. The inventory **shall** include:

- Account name and type (individual/service/shared).
- Associated system(s) and access tier.
- Account owner / responsible individual.
- MFA enrolment status and method.
- Last access date.
- Access review status.

### 9.3 Principle of Least Privilege

All privileged accounts **shall** be provisioned in accordance with the principle of least privilege. Privileged access **shall** be limited to the minimum permissions required to perform the assigned function and **shall** be time-bound where technically feasible (just-in-time access).

### 9.4 Separation of Duties

[Organization Name] **shall** enforce separation of duties for privileged access to critical systems. Specifically:

- Individuals responsible for managing IAM systems **shall** not simultaneously hold uncontrolled administrative access to core banking systems.
- The ability to approve MFA exceptions **shall** be separated from the ability to process operational MFA enrolments.
- [Add further SoD requirements as applicable.]

---

## 10. Exceptions and Escalation Process

*Define a formal, controlled process for managing exceptions to this policy. Exceptions must be time-bound, risk-assessed, and approved at an appropriate level.*

### 10.1 Policy on Exceptions

[Organization Name] recognises that there may be limited technical, operational, or business circumstances in which strict compliance with this policy may not be immediately achievable. Any deviation from the requirements of this policy **shall** be treated as a formal exception and managed through the process defined in this section.

**Exceptions are not approvals to operate without security controls.** All exception cases **shall** include compensating controls sufficient to manage the associated risk to an acceptable level.

### 10.2 Exception Eligibility

Exceptions may be considered for the following categories:

| Exception Category | Description | Example |
|---|---|---|
| **Technical Infeasibility** | A legacy system or application does not support MFA integration through any available mechanism. | Legacy mainframe application with no API or RADIUS support. |
| **Service Account / Automation** | An automated process requires privileged access where interactive MFA is not technically feasible. | Batch processing job requiring database write access. |
| **Business Continuity** | A critical operational need exists that cannot be met within the MFA policy constraints during a defined period. | Disaster recovery failover to a system where MFA is temporarily unavailable. |
| **Third-Party Limitation** | A vendor or third-party system does not support MFA. | Vendor-supplied application with hard-coded authentication. |

### 10.3 Exception Request Process

```
Step 1: Exception Request Submission
  └── Requestor completes the MFA Exception Request Form (Appendix C)
      └── Includes: system details, reason for exception, risk assessment, proposed compensating controls, duration

Step 2: Initial Review (IAM Manager)
  └── IAM Manager reviews completeness and technical validity within [5] business days

Step 3: Risk Assessment
  └── IAM Manager prepares or reviews risk assessment with input from CISO

Step 4: Approval Decision
  └── Tier 2 exception (non-critical system, ≤90 days): IAM Manager approval
  └── Tier 1 exception (critical system, any duration): CISO approval required
  └── Exception >180 days or recurring exception: Board Risk Committee notification

Step 5: Implementation of Compensating Controls
  └── IT Operations implements compensating controls prior to exception activation

Step 6: Documentation and Registration
  └── IAM Manager records exception in the Exception Register (Appendix D)

Step 7: Monitoring and Review
  └── Exception reviewed at the earlier of the expiry date or the next quarterly review cycle
```

### 10.4 Mandatory Compensating Controls

All approved exceptions **shall** include compensating controls. The following minimum compensating controls **shall** apply:

| Compensating Control | Applicability |
|---|---|
| Enhanced monitoring and SIEM alerting on the excepted account | All exceptions |
| Session recording for all privileged sessions under the exception | All Tier 1 exceptions |
| IP address or network segment restriction | All remote access exceptions |
| Time-of-day access restrictions | Where technically feasible |
| Increased access review frequency (monthly) | All exceptions |
| Management of credentials via PAM vault | All exceptions |
| Formal re-assessment if the exception runs for >90 days | All exceptions of >90 days |

### 10.5 Exception Register

The IAM Manager **shall** maintain a current Exception Register containing the following fields:

| Field | Description |
|---|---|
| Exception ID | Unique identifier |
| Request Date | Date exception was submitted |
| Requestor | Name and department |
| Affected System(s) | System name(s) and tier |
| Exception Category | Technical / Service Account / BCM / Third-Party |
| Risk Description | Summary of associated risk |
| Compensating Controls | Controls in place during exception |
| Approved By | Name and role of approving authority |
| Approval Date | Date approved |
| Expiry Date | Date exception expires |
| Status | Active / Expired / Remediated |

### 10.6 Exception Escalation

If an exception request is denied by the IAM Manager, the requestor may escalate to the CISO. If denied by the CISO, the requestor may escalate to the Board Risk Committee. Escalation requests **shall** be submitted in writing with full supporting documentation within [10] business days of the initial denial.

---

## 11. Compliance and Enforcement

*Define how compliance is measured and what happens when the policy is violated.*

### 11.1 Compliance Expectations

All personnel and third parties within scope of this policy are expected to comply fully with its requirements from the policy effective date. Where new systems or roles fall within scope following the effective date, MFA **shall** be implemented within [30] calendar days of the system being classified as in-scope, unless a formal exception has been approved.

### 11.2 Compliance Monitoring

| Activity | Frequency | Responsible Party | Output |
|---|---|---|---|
| Privileged account MFA enrolment status review | Monthly | IAM Manager | Enrolment compliance report |
| MFA system health and availability review | Weekly | IT Operations | System health dashboard |
| Exception register review | Quarterly | IAM Manager | Exception status report |
| Privileged access review (Tier 1 systems) | Quarterly | IAM Manager / System Owners | Access review report |
| Privileged access review (Tier 2 systems) | Semi-annually | IAM Manager / System Owners | Access review report |
| Independent compliance audit | Annually | Internal Audit | Audit report |
| Regulatory compliance self-assessment (BNM RMiT) | Annually | Compliance / IAM Manager | Self-assessment report |

### 11.3 Compliance Metrics and Key Risk Indicators (KRIs)

*Track the following metrics and report to CISO quarterly.*

| Metric | Description | Target Threshold | Reporting Frequency |
|---|---|---|---|
| MFA Enrolment Rate — Privileged Users | % of privileged users enrolled in MFA | 100% | Monthly |
| MFA Coverage — Critical Systems | % of Tier 1 systems with MFA enforced for all privileged access | 100% | Monthly |
| Unapproved MFA Bypass Events | Number of incidents involving MFA bypass without approved exception | 0 | Monthly |
| Open Exceptions (Tier 1 Systems) | Number of active MFA exceptions on Tier 1 systems | ≤[X] | Quarterly |
| Overdue Access Reviews | Number of privileged access reviews overdue | 0 | Quarterly |
| Failed MFA Attempts — Privileged Accounts | Number of failed MFA authentication events on privileged accounts | [Threshold TBD] | Monthly |
| Aged Exceptions (>180 days) | Number of exceptions active for more than 180 days | 0 | Quarterly |

### 11.4 Non-Compliance and Enforcement

*Define consequences for non-compliance. Consequences should be proportionate to the severity and intent of the violation.*

Violations of this policy will be assessed by the IAM Manager in consultation with the CISO, HR, and Legal/Compliance as appropriate. Consequences may include:

| Violation Severity | Examples | Potential Consequences |
|---|---|---|
| **Minor** | Failure to report a lost token promptly; use of an unapproved MFA method in error. | Mandatory retraining; written warning. |
| **Moderate** | Repeated minor violations; sharing of MFA credentials; failure to enrol despite formal direction. | Formal disciplinary action; suspension of privileged access pending investigation. |
| **Serious** | Deliberate MFA bypass; circumvention of policy controls; providing MFA credentials to unauthorised parties. | Immediate revocation of all privileged access; disciplinary proceedings up to and including termination; referral to law enforcement if applicable. |
| **Third Parties** | Vendor or contractor non-compliance. | Formal notice of breach; suspension of access; escalation per contractual terms; contract termination. |

Non-compliance findings will be tracked to remediation. Unresolved material non-compliance will be escalated to the CISO and reported to the Board Risk Committee.

### 11.5 Regulatory Breach Notification

Where a non-compliance event is assessed to be a reportable incident under BNM RMiT or other applicable regulations, [Organization Name]'s Compliance Department and CISO shall assess the reporting obligation and manage the regulatory notification process in accordance with the Incident Management and Regulatory Reporting Policy.

---

## 12. Monitoring and Audit

*Describe how compliance with this policy is monitored on an ongoing basis and how audit activities are conducted.*

### 12.1 Continuous Monitoring

[Organization Name]'s SOC and IT Operations teams **shall** implement the following monitoring controls:

- **Real-time SIEM alerting** on:
  - [X] or more consecutive failed MFA authentication attempts on a single privileged account within [Y] minutes.
  - Successful privileged access authentication without MFA where MFA is required.
  - MFA configuration changes on production systems.
  - Authentication to critical systems from unusual geographic locations or IP addresses.
  - Break-glass account activation.

- **Privileged Session Monitoring:** All sessions on Tier 1 Critical Systems shall be recorded and stored for a minimum of [X months/years] in accordance with [Organization Name]'s log retention requirements.

- **Anomaly Detection:** Behavioural analytics (where available through [SIEM/PAM Solution]) shall be applied to privileged access patterns to identify anomalous activity.

### 12.2 Log Retention

Authentication logs for privileged access shall be retained for a minimum of **[X years]** in accordance with BNM RMiT logging requirements and [Organization Name]'s Log Retention Policy. Logs **shall** be tamper-evident and access to modify or delete logs **shall** be restricted.

### 12.3 Internal Audit

Internal Audit **shall** conduct an annual independent review of MFA policy compliance. The review **shall** include at minimum:

- Verification that MFA is enforced on all in-scope Tier 1 and Tier 2 systems.
- Sample testing of privileged account enrolment records.
- Review of the exception register and adequacy of compensating controls.
- Testing of MFA bypass scenarios on a sample of systems.
- Review of compliance metrics and KRI trend data.
- Assessment of the completeness and currency of the critical systems register.

Audit findings and management responses shall be tracked to remediation within agreed timelines.

### 12.4 Regulatory Examination Support

The IAM Manager, in coordination with the Compliance Department, **shall** maintain audit-ready evidence packs including:

- Current version of this policy with approval records.
- Critical systems register and privileged account inventory.
- MFA compliance reports for the preceding [12] months.
- Exception register with approval documentation.
- Evidence of privileged access reviews.
- SIEM alert logs and investigation records relating to MFA events.

---

## 13. Review and Approval History

### 13.1 Review Schedule

This policy **shall** be reviewed on an **annual** basis or upon any of the following trigger events, whichever occurs first:

- A material change to BNM RMiT or other applicable regulations affecting MFA requirements.
- A significant change to [Organization Name]'s technology environment or critical systems landscape.
- A security incident or audit finding that identifies material weaknesses in MFA controls.
- A change in [Organization Name]'s organisational structure that affects roles identified in this policy.

The IAM Manager is responsible for initiating and coordinating the review. Reviewed versions must be re-approved through the process defined in Section 13.3.

### 13.2 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], IAM Manager | Initial version issued. | [Approver Name] |
| [1.1] | [Date] | [Author Name] | [Brief description of changes] | [Approver Name] |
| [2.0] | [Date] | [Author Name] | [Brief description of major revision] | [Approver Name] |

### 13.3 Approval Sign-Off

*All approvers must sign this section upon each version release or material amendment.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **IAM Manager** (Policy Owner) | [Full Name] | _________________ | [Date] |
| **Chief Information Security Officer** | [Full Name] | _________________ | [Date] |
| **Chief Information Officer / CTO** | [Full Name] | _________________ | [Date] |
| **Chief Risk Officer** | [Full Name] | _________________ | [Date] |
| **Compliance Officer** | [Full Name] | _________________ | [Date] |
| **Board Risk Committee Representative** | [Full Name] | _________________ | [Date] |

---

## 14. References

*List all regulatory, standards, and internal policy documents referenced in or relevant to this policy.*

### 14.1 Regulatory References

| Reference | Title | Issuing Body | Applicable Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | **10.54** |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Section 47 |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | Section 57 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | [Applicable Sections] |
| NACSA NCSP | National Cyber Security Policy | National Cyber Security Agency (NACSA) | [Applicable Sections] |

### 14.2 Standards References

| Standard | Title | Issuing Body | Relevance |
|---|---|---|---|
| NIST SP 800-63B | Digital Identity Guidelines — Authentication and Lifecycle Management | NIST | Authenticator Assurance Levels (AAL) |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO/IEC | Annex A.9 (Access Control) |
| ISO/IEC 27002:2022 | Information Security Controls | ISO/IEC | Control 8.5 (Secure Authentication) |
| FIDO2 / WebAuthn | Web Authentication Standard | FIDO Alliance / W3C | Phishing-resistant authentication |
| PCI-DSS v4.0 | Payment Card Industry Data Security Standard | PCI Security Standards Council | Requirement 8 (Identify Users and Authenticate Access) |
| CIS Controls v8 | CIS Critical Security Controls | Center for Internet Security | Control 6 (Access Control Management) |

### 14.3 Internal Policy References

| Document | Description | Owner |
|---|---|---|
| Information Security Policy | Overarching information security governance framework | CISO |
| Password Management Policy | Requirements for passwords used as knowledge factors | IAM Manager |
| Privileged Access Management Policy | Broader governance of privileged accounts | IAM Manager |
| Access Control Policy | General access management principles | IAM Manager |
| Incident Management and Response Policy | Process for handling MFA-related security incidents | CISO / SOC Manager |
| IT Asset Classification Policy | Framework for classifying systems into tiers | IT Asset Register Owner |
| Vendor and Third-Party Risk Management Policy | Security requirements for third-party access | Risk / Procurement |
| Business Continuity and Disaster Recovery Policy | BCM procedures relevant to MFA failure scenarios | BCM Manager |
| Log Management and Retention Policy | Requirements for retention of authentication logs | IT Operations |

---

## 15. Appendices

### Appendix A — Critical Systems Classification Criteria

*Provide detailed criteria used to classify systems into Tier 1, Tier 2, Tier 3, and Tier 4 for the purposes of this policy. This appendix supports the classification decisions recorded in Section 8.*

**Classification Criteria:**

| Criterion | Tier 1 (Critical) | Tier 2 (High) | Tier 3 (Medium) | Tier 4 (Low) |
|---|---|---|---|---|
| **Customer Data Sensitivity** | Contains sensitive personal/financial data for >1,000 customers | Contains personal/financial data | Contains internal data only | No sensitive data |
| **Regulatory Obligation** | Direct regulatory reporting or compliance obligation | Indirect regulatory relevance | No regulatory obligation | No regulatory obligation |
| **Financial Impact of Compromise** | >RM [X] million potential loss | RM [Y]–[X] million | <RM [Y] million | Negligible |
| **Operational Dependency** | Core business operations depend on availability | Significant operations dependency | Limited dependency | No operational dependency |
| **Recovery Time Objective (RTO)** | <4 hours | 4–24 hours | 24–72 hours | >72 hours |
| **Reputational Impact** | Severe reputational damage / media attention | Moderate reputational impact | Limited reputational impact | Minimal impact |

---

### Appendix B — Approved MFA Authenticator Application List

*Maintain the list of approved mobile authenticator applications permitted for use as TOTP second factors within [Organization Name].*

| Application Name | Platform | Approved Version(s) | Approval Date | Notes |
|---|---|---|---|---|
| [Authenticator App 1, e.g., Microsoft Authenticator] | iOS / Android | [Version] | [Date] | Supports push notification with number matching |
| [Authenticator App 2, e.g., Google Authenticator] | iOS / Android | [Version] | [Date] | TOTP only; no cloud backup permitted |
| [Authenticator App 3, e.g., Authy — Corporate] | iOS / Android | [Version] | [Date] | Multi-device sync permitted under IT configuration only |
| *[Add rows as required]* | | | | |

**Note:** Personal authenticator applications not on this list are not permitted for privileged access MFA. Use of an unapproved application must be raised with the IAM Team before use.

---

### Appendix C — MFA Exception Request Form

*This form must be completed by the requesting party and submitted to the IAM Manager via [submission channel, e.g., ITSM portal / email]. Incomplete forms will not be processed.*

---

**MFA Exception Request Form**

| Field | Response |
|---|---|
| **Exception Request ID** | [Auto-assigned by IAM Team] |
| **Date of Request** | [DD/MM/YYYY] |
| **Requestor Name** | |
| **Requestor Department** | |
| **Requestor Email** | |
| **Line Manager Name** | |
| **Line Manager Email** | |
| **Affected System(s)** | |
| **System Tier** | ☐ Tier 1  ☐ Tier 2  ☐ Tier 3 |
| **Exception Category** | ☐ Technical Infeasibility  ☐ Service Account / Automation  ☐ Business Continuity  ☐ Third-Party Limitation  ☐ Other |
| **Description of Exception Required** | *Describe in detail why MFA cannot be applied to this system/account/access type.* |
| **Risk Assessment Summary** | *Describe the risk associated with the exception. Include likelihood and potential impact.* |
| **Proposed Compensating Controls** | *List all compensating controls that will be implemented during the exception period.* |
| **Requested Exception Start Date** | [DD/MM/YYYY] |
| **Requested Exception Expiry Date** | [DD/MM/YYYY] |
| **Remediation Plan** | *Describe the plan to achieve full MFA compliance, including target date.* |
| **Requestor Declaration** | I confirm that the information provided is accurate and that the proposed compensating controls will be implemented and maintained for the duration of the exception. |
| **Requestor Signature** | _________________ |
| **Date** | [DD/MM/YYYY] |

**For IAM Manager Use Only:**

| Field | Response |
|---|---|
| **Date Received** | |
| **Completeness Check** | ☐ Complete  ☐ Returned for additional information |
| **Risk Assessment Outcome** | ☐ Acceptable with compensating controls  ☐ Unacceptable |
| **IAM Manager Decision** | ☐ Approved  ☐ Denied  ☐ Escalated to CISO |
| **Conditions of Approval** | |
| **IAM Manager Name** | |
| **IAM Manager Signature** | _________________ |
| **Decision Date** | |

**For CISO Use Only (Tier 1 Exceptions):**

| Field | Response |
|---|---|
| **CISO Decision** | ☐ Approved  ☐ Denied |
| **CISO Comments** | |
| **CISO Signature** | _________________ |
| **Decision Date** | |

---

### Appendix D — MFA Exception Register (Template)

*The IAM Manager shall maintain this register and present it at each quarterly review. The register shall be stored in [location, e.g., SharePoint / IAM Document Repository].*

| Exception ID | System | Tier | Category | Requestor | Compensating Controls | Approved By | Approval Date | Expiry Date | Status | Remediation Target |
|---|---|---|---|---|---|---|---|---|---|---|
| EX-MFA-001 | [System Name] | [1/2/3] | [Category] | [Name] | [Brief description] | [Name / Role] | [Date] | [Date] | Active | [Date] |
| *[Add rows as required]* | | | | | | | | | | |

---

### Appendix E — MFA Incident Response Checklist

*Use this checklist when responding to MFA-related security incidents, including MFA bypass, token compromise, or MFA system outage.*

**Incident Type:** ☐ MFA Bypass  ☐ Token/Authenticator Compromise  ☐ MFA System Unavailability  ☐ Suspected Credential Phishing  ☐ Other

| Step | Action | Responsible | Completed |
|---|---|---|---|
| 1 | Identify and isolate affected account(s) and systems. | SOC / IAM Manager | ☐ |
| 2 | Disable or lock the affected privileged account(s) immediately. | IAM Team | ☐ |
| 3 | Revoke / invalidate compromised MFA credentials (tokens, registered devices). | IAM Team | ☐ |
| 4 | Notify CISO and system owner(s). | SOC Manager | ☐ |
| 5 | Preserve all relevant logs (authentication, session recording, SIEM alerts). | IT Operations / SOC | ☐ |
| 6 | Conduct forensic review of session recordings for compromised session(s). | SOC / Forensics | ☐ |
| 7 | Assess scope of access during the compromised session. | System Owner / SOC | ☐ |
| 8 | Determine root cause of MFA bypass or failure. | IAM Manager / IT Operations | ☐ |
| 9 | Implement remediation actions and verify MFA re-enforcement. | IAM Team / IT Operations | ☐ |
| 10 | Re-enrol affected user(s) in MFA through verified process before reinstating access. | IAM Team | ☐ |
| 11 | Assess regulatory notification obligation with Compliance. | CISO / Compliance | ☐ |
| 12 | Prepare post-incident report within [5] business days. | IAM Manager / CISO | ☐ |
| 13 | Update exception register and risk register if applicable. | IAM Manager | ☐ |

---

### Appendix F — MFA User Awareness Quick Reference Card

*This quick reference is to be distributed to all in-scope privileged users upon MFA enrolment and upon annual policy acknowledgement.*

---

**Multi-Factor Authentication — Privileged User Quick Reference**
*[Organization Name] | Confidential*

**Your Responsibilities:**

- Always use your designated MFA authenticator when accessing critical systems.
- Never share your MFA device, app, or generated codes with anyone — including IT support staff.
- Do not approve push notification MFA requests that you did not initiate.
- Register only personal, secured devices approved by [Organization Name] for authenticator apps.

**If You Lose Your MFA Device or Token:**

1. Immediately call the IAM Helpdesk: **[Helpdesk Number]**
2. Send a notification to: **[IAM Team Email]**
3. Do not attempt to access critical systems until your MFA is re-enrolled.

**If You Suspect Your MFA Has Been Compromised:**

- Report immediately to the SOC: **[SOC Number / Email]**
- Do not attempt to continue your privileged session.

**Helpdesk:** [Helpdesk Contact] | **SOC (24/7):** [SOC Contact] | **IAM Manager:** [IAM Manager Contact]

---

*End of Document*

---

**Document Control:** This document is subject to version control. The master copy is maintained in [Document Repository]. Printed copies are uncontrolled. Users should verify they are reading the current version before relying on its contents.

*[Organization Name] | [Document ID] | Version 1.0 | Classification: Confidential*