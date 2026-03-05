# Password Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | CISO / CTO |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution of this document is strictly prohibited and may constitute a breach of applicable laws and regulations, including the Personal Data Protection Act 2010 (PDPA) and relevant Bank Negara Malaysia (BNM) guidelines.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context and Obligations](#3-regulatory-context-and-obligations)
4. [Definitions and Acronyms](#4-definitions-and-acronyms)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
   - 6.1 [Password Complexity Requirements](#61-password-complexity-requirements)
   - 6.2 [Password History Requirements](#62-password-history-requirements)
   - 6.3 [Password Age Requirements](#63-password-age-requirements)
   - 6.4 [Account Lockout Requirements](#64-account-lockout-requirements)
   - 6.5 [Multi-Factor Authentication Requirements](#65-multi-factor-authentication-requirements)
   - 6.6 [Privileged Account Password Requirements](#66-privileged-account-password-requirements)
   - 6.7 [Service and System Account Password Requirements](#67-service-and-system-account-password-requirements)
   - 6.8 [Default and Vendor-Supplied Passwords](#68-default-and-vendor-supplied-passwords)
   - 6.9 [Password Transmission and Storage](#69-password-transmission-and-storage)
   - 6.10 [Password Reset and Recovery Procedures](#610-password-reset-and-recovery-procedures)
   - 6.11 [Remote Access and Third-Party Access Passwords](#611-remote-access-and-third-party-access-passwords)
7. [Exceptions and Escalation Process](#7-exceptions-and-escalation-process)
8. [Compliance and Enforcement](#8-compliance-and-enforcement)
9. [Related Documents and Controls](#9-related-documents-and-controls)
10. [Review and Approval History](#10-review-and-approval-history)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose

*Describe the intent of this policy and the problem it addresses. Explain why strong password management is critical to the organization's security posture and regulatory obligations.*

This Password Policy establishes the minimum requirements and standards governing the creation, management, protection, and use of passwords and authentication credentials across all information systems, applications, and infrastructure assets owned or operated by [Organization Name].

Passwords remain a primary mechanism for authenticating users, administrators, and systems to information assets. Weak, reused, or improperly managed passwords represent one of the most significant vectors for unauthorized access, data breaches, and cybersecurity incidents in the financial services sector. This policy is designed to mitigate these risks through enforceable technical and procedural controls.

This policy is established in accordance with the requirements of Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** policy document, specifically **Clause 10.55**, which mandates that licensed financial institutions implement robust authentication controls commensurate with the sensitivity and criticality of the systems and data being protected.

[Organization Name] is committed to maintaining a strong information security posture to protect its customers, employees, partners, and institutional assets. This policy forms a foundational control within the organization's broader Information Security Management System (ISMS) and cybersecurity framework.

---

## 2. Scope

*Define the boundaries of this policy — which systems, people, and processes are covered. Be explicit about what is included and excluded.*

### 2.1 In Scope

This policy applies to:

**Personnel:**
- All permanent employees of [Organization Name], regardless of seniority or role
- Contractors, consultants, and temporary staff with access to [Organization Name] systems
- Third-party vendors and service providers granted access to [Organization Name] information systems or networks
- Board members and senior management with system access privileges
- Outsourced IT service providers operating on behalf of [Organization Name]

**Systems and Assets:**
- All production, staging, development, and test information systems
- All end-user devices (desktops, laptops, mobile devices) managed or enrolled by [Organization Name]
- Network infrastructure, including routers, switches, firewalls, and wireless access points
- Server infrastructure (on-premises and cloud-hosted)
- Core banking systems and financial transaction processing platforms
- Customer-facing digital channels (online banking, mobile banking, APIs)
- Database management systems and data repositories
- Email and collaboration platforms
- Remote access solutions (VPN, remote desktop, jump servers)
- Cloud service platforms and Software-as-a-Service (SaaS) applications procured by [Organization Name]

**Account Types:**
- Standard user accounts
- Privileged and administrative accounts
- Service accounts and application accounts
- System-to-system integration accounts
- Emergency and break-glass accounts

### 2.2 Out of Scope

The following are explicitly excluded from this policy unless otherwise stated:

- Customer authentication credentials used to access [Organization Name]'s retail banking products (these are governed by the **[Customer Authentication Policy / Terms and Conditions]**). However, the underlying system configurations enforcing those credentials remain in scope.
- Hardware security keys, certificates, and PKI-based authentication mechanisms (governed by the **[Certificate and PKI Management Policy]**)
- Biometric authentication systems (governed by the **[Biometric Authentication Standard]**)

---

## 3. Regulatory Context and Obligations

*Reference all applicable regulatory requirements, standards, and frameworks that this policy is designed to satisfy. Include specific clause numbers where available.*

[Organization Name], as a [licensed bank / investment bank / insurance company / payment system operator / other regulated entity] under the purview of Bank Negara Malaysia, is subject to the following regulatory obligations relevant to this policy:

### 3.1 Primary Regulatory Framework

| Regulation / Standard | Issuing Body | Relevant Clauses | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | **Clause 10.55** | Implement strong authentication controls including password complexity, history, age, and lockout |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.50 – 10.60 | Access control and identity management requirements |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.1 – 10.10 | Technology risk governance and accountability |
| Personal Data Protection Act 2010 (PDPA) | Government of Malaysia | Section 9, 10 | Security principle: protect personal data against unauthorized access |
| Guidelines on Cyber Resilience (NACSA) | NACSA | [Relevant Sections] | Cyber hygiene and credential security |

### 3.2 Supporting Standards and Frameworks

| Standard | Reference | Relevance |
|---|---|---|
| ISO/IEC 27001:2022 | Annex A, Control 8.5 | Secure authentication |
| ISO/IEC 27002:2022 | Section 8.5 | Secure authentication implementation guidance |
| NIST SP 800-63B | Section 5 | Digital identity guidelines — memorized secrets |
| PCI DSS v4.0 | Requirement 8 | Identify users and authenticate access to system components |
| CIS Controls v8 | Control 5 | Account Management |

### 3.3 BNM RMiT Clause 10.55 — Summary of Requirements

*Provide a summary of the specific obligations arising from the primary regulatory clause. Consult the current BNM RMiT policy document for the authoritative text.*

BNM RMiT Clause 10.55 requires that [Organization Name] implement authentication controls that include, at a minimum:

- Enforcement of minimum password length and complexity
- Prevention of password reuse within a defined history
- Mandatory password change intervals
- Account lockout mechanisms following repeated failed authentication attempts
- Prohibition of default or easily guessable credentials
- Secure handling of passwords in transit and at rest

[Organization Name] is required to document, implement, and periodically review these controls as part of its technology risk management framework, and to demonstrate compliance to BNM upon request.

---

## 4. Definitions and Acronyms

*Define all technical terms and acronyms used throughout the document. This ensures consistent interpretation by all readers.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Authentication** | The process of verifying the identity of a user, system, or entity prior to granting access to a resource. |
| **Account Lockout** | A security control that temporarily or permanently disables an account after a defined number of consecutive failed authentication attempts. |
| **Break-Glass Account** | A highly privileged emergency account used only in exceptional circumstances when normal access methods are unavailable. Also referred to as a "firecall" account. |
| **Credential** | Any form of authentication proof, including passwords, PINs, tokens, certificates, or biometric data. |
| **Dictionary Attack** | A brute-force attack technique that systematically tests commonly used words, phrases, and patterns as potential passwords. |
| **Hashing** | A one-way cryptographic function that transforms a password into a fixed-length string, preventing the original password from being recovered. |
| **Multi-Factor Authentication (MFA)** | An authentication mechanism requiring the user to provide two or more verification factors from different categories (knowledge, possession, inherence). |
| **Passphrase** | A sequence of words or a sentence used as a password, typically longer than a traditional password to improve security and memorability. |
| **Password** | A secret string of characters used to authenticate a user's identity to an information system. |
| **Password Age** | The length of time a password has been in use since it was last changed. |
| **Password Complexity** | A measure of the difficulty of guessing a password based on its length, character variety, and unpredictability. |
| **Password History** | A record of previously used passwords that prevents users from reusing recent credentials. |
| **Privileged Account** | An account with elevated access rights beyond those of a standard user, such as system administrator, database administrator, or root accounts. |
| **Salt** | A random value added to a password before hashing to prevent pre-computed hash attacks (rainbow table attacks). |
| **Service Account** | An account used by an application, service, or automated process rather than an individual user, to authenticate and interact with other systems. |
| **Single Sign-On (SSO)** | An authentication method that allows a user to log in once and gain access to multiple systems without re-authenticating. |

### 4.2 Acronyms

| Acronym | Expansion |
|---|---|
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CTO | Chief Technology Officer |
| IAM | Identity and Access Management |
| ISMS | Information Security Management System |
| IT | Information Technology |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| PAM | Privileged Access Management |
| PDPA | Personal Data Protection Act 2010 |
| PIN | Personal Identification Number |
| PKI | Public Key Infrastructure |
| RACI | Responsible, Accountable, Consulted, Informed |
| RMiT | Risk Management in Technology |
| SOC | Security Operations Centre |
| SSO | Single Sign-On |
| VPN | Virtual Private Network |

---

## 5. Roles and Responsibilities

*Define who is accountable, responsible, consulted, and informed for each aspect of this policy. A RACI matrix ensures clarity of ownership and supports auditability.*

### 5.1 RACI Matrix

*Complete the RACI matrix below for key policy activities. Use the following codes: **R** = Responsible (does the work), **A** = Accountable (owns the outcome), **C** = Consulted (provides input), **I** = Informed (notified of outcome).*

| Activity | CISO | CTO | IT Security Team | IT Operations / Sysadmin | IAM / PAM Team | HR | Business Unit Heads | Internal Audit | All Staff |
|---|---|---|---|---|---|---|---|---|---|
| Policy ownership and approval | A | C | R | I | C | I | I | C | — |
| Policy review and update | A | C | R | C | C | C | C | C | I |
| Technical implementation of password controls | C | A | C | R | R | — | — | I | — |
| Privileged account password management | A | C | R | C | R | — | — | I | — |
| Service account password management | A | C | C | R | R | — | — | I | — |
| User awareness and training | A | I | R | I | I | R | C | I | I |
| Exception management and approval | A | C | R | I | C | I | C | I | — |
| Compliance monitoring and audit | A | I | R | I | C | — | I | R | — |
| Incident response (credential compromise) | A | C | R | R | R | I | I | I | I |
| Onboarding / offboarding credential management | C | I | C | R | R | R | C | I | — |
| Password reset (end users) | I | I | C | R | R | — | I | — | I |
| Policy compliance reporting to Board / BNM | A | C | R | I | I | — | I | C | — |

### 5.2 Detailed Role Descriptions

#### 5.2.1 Chief Information Security Officer (CISO)

- Holds ultimate accountability for this policy and its effective implementation across [Organization Name]
- Approves exceptions to this policy and escalates material exceptions to the Board or relevant committee
- Reports on password policy compliance as part of regular technology risk reporting
- Ensures this policy remains aligned with BNM RMiT and other applicable regulatory requirements
- Sponsors periodic policy reviews and ensures resources are allocated for implementation

#### 5.2.2 Chief Technology Officer (CTO)

- Accountable for the technical implementation of password controls across all technology platforms
- Ensures IT infrastructure and application development practices comply with this policy
- Provides technical guidance on feasibility of implementing policy requirements
- Collaborates with the CISO on risk acceptance for exceptions where technical constraints exist

#### 5.2.3 IT Security Team

- Develops and maintains technical standards and configuration baselines aligned to this policy
- Monitors compliance with password policy controls through periodic audits and automated tooling
- Investigates and responds to credential-related security incidents
- Reviews and recommends approval or rejection of exception requests
- Provides guidance to IT Operations on secure password configuration

#### 5.2.4 IT Operations / System Administrators

- Implements and enforces technical password controls on managed systems and infrastructure
- Administers service accounts and system accounts in accordance with this policy
- Responds to authorized password reset requests in a timely manner
- Ensures default passwords are changed prior to production deployment

#### 5.2.5 Identity and Access Management (IAM) / Privileged Access Management (PAM) Team

- Manages the IAM platform(s) and enforces password policy parameters within identity systems
- Administers privileged account vaulting and rotation through the PAM solution
- Maintains the register of service accounts and their associated credentials
- Supports periodic access reviews and recertification exercises

#### 5.2.6 Human Resources (HR)

- Ensures password policy awareness is incorporated into employee onboarding and induction programs
- Notifies IT Operations and IAM teams promptly upon employee termination or role change to trigger credential deprovisioning
- Maintains records of signed acknowledgement of this policy by all staff

#### 5.2.7 Business Unit Heads

- Ensure all staff within their respective business units are aware of and comply with this policy
- Escalate operational requirements that may necessitate exceptions to the CISO
- Support periodic compliance reviews and user access recertifications

#### 5.2.8 Internal Audit

- Conducts independent periodic audits of password policy compliance and technical controls
- Reports audit findings to the Audit Committee and CISO
- Validates that exceptions are properly documented and approved

#### 5.2.9 All Staff (General Users)

- Understand and comply with this policy
- Do not share passwords with colleagues, managers, or third parties under any circumstances
- Report suspected password compromise or unauthorized access immediately to the IT Security Team / SOC
- Complete mandatory security awareness training on password security

---

## 6. Policy Statements and Requirements

*This section contains the core enforceable requirements of this policy. All subsections represent mandatory controls unless explicitly marked as recommended. Technical implementation details are further elaborated in the associated [Password Management Technical Standard].*

### 6.1 Password Complexity Requirements

*Define the minimum structural requirements for all passwords created within the organization's systems. Requirements should balance security with usability.*

#### 6.1.1 Standard User Account Passwords

All passwords for standard user accounts **must** meet the following minimum complexity requirements:

| Parameter | Minimum Requirement |
|---|---|
| **Minimum Length** | 12 characters |
| **Uppercase Letters** | At least 1 character (A–Z) |
| **Lowercase Letters** | At least 1 character (a–z) |
| **Numeric Characters** | At least 1 character (0–9) |
| **Special Characters** | At least 1 character (e.g., `! @ # $ % ^ & * ( ) _ + - = [ ] { } ; ' : " , . < > ? /`) |
| **Maximum Length** | [128] characters (systems must support) |
| **Spaces** | Permitted (to support passphrases) |

#### 6.1.2 Prohibited Password Patterns

The following passwords or patterns are **strictly prohibited**:

- The user's own name, username, or email address, or any obvious variation thereof
- The organization's name, brand name, or product names
- Sequential characters or repeated characters (e.g., `123456`, `aaaaaa`, `qwerty`)
- Dates of birth, phone numbers, or other personal information
- Any password appearing in known compromised password lists (where technically feasible, systems should check against breach databases such as the HIBP dataset)
- Dictionary words without modification
- Previously used passwords (see Section 6.2)
- Default, factory-set, or vendor-supplied passwords (see Section 6.8)
- Keyboard patterns (e.g., `asdfgh`, `zxcvbn`)

#### 6.1.3 Passphrase Encouragement

[Organization Name] encourages the use of **passphrases** — long sequences of random words or a memorable sentence — as a preferred alternative to traditional complex passwords, provided they meet minimum length requirements. Example format (do not use this example): a phrase of four or more unrelated words exceeding 16 characters is generally stronger than a shorter complex password.

Systems must be configured to support passphrases, including accepting spaces within passwords where technically feasible.

### 6.2 Password History Requirements

*Prevent users from cycling back to previously used passwords, ensuring that password changes represent a genuine security improvement.*

#### 6.2.1 History Enforcement

| Account Type | Minimum Password History |
|---|---|
| Standard User Accounts | Last **12** passwords |
| Privileged / Administrative Accounts | Last **24** passwords |
| Service Accounts | Last **12** passwords |

- Systems **must** be configured to prevent users from reusing any password within the defined history window.
- Password history enforcement **must** apply at the technical/system level and cannot be satisfied by manual processes alone.
- Where a system is technically incapable of enforcing password history, this must be documented as an exception (see Section 7) and compensating controls must be implemented.

#### 6.2.2 Immediate Reuse Prohibition

- Users **must not** change their password multiple times in quick succession to circumvent history controls and return to a preferred password.
- Systems should enforce a minimum password age (see Section 6.3) to prevent rapid cycling.

### 6.3 Password Age Requirements

*Control how frequently passwords must be changed (maximum age) and how soon after a change a further change can be made (minimum age).*

#### 6.3.1 Maximum Password Age

| Account Type | Maximum Password Age |
|---|---|
| Standard User Accounts | **90 days** |
| Privileged / Administrative Accounts | **60 days** |
| Service Accounts (automated rotation) | **90 days** (or upon personnel change) |
| Emergency / Break-Glass Accounts | **After each use**, or every **30 days** if unused |
| Third-Party / Vendor Accounts | **60 days** |

- Users **must** be notified of impending password expiry:
  - First notification: **14 days** before expiry
  - Second notification: **7 days** before expiry
  - Final notification: **3 days** before expiry
  - Notification on the day of expiry

- Systems **must** be configured to enforce mandatory password change upon expiry. Users **must not** be permitted to continue accessing systems with an expired password beyond a [grace period of 0–3 days as configured].

- Password expiry **must not** be disabled for any account type unless formally approved as an exception (see Section 7).

#### 6.3.2 Minimum Password Age

| Account Type | Minimum Password Age |
|---|---|
| Standard User Accounts | **1 day** |
| Privileged / Administrative Accounts | **1 day** |

- A minimum password age prevents users from immediately changing their password back to a previously used one, thereby defeating history controls.

#### 6.3.3 Immediate Password Change Requirements

Passwords **must** be changed immediately (i.e., upon next login) in the following circumstances:

- Upon initial account creation or provisioning
- Upon password reset by IT Operations or the helpdesk
- Following a confirmed or suspected credential compromise
- When a user with knowledge of a shared credential leaves the organization or changes roles
- Upon discovery that a password has been disclosed, intercepted, or written down insecurely

### 6.4 Account Lockout Requirements

*Protect accounts against brute-force and credential stuffing attacks by locking accounts after a defined number of failed authentication attempts.*

#### 6.4.1 Lockout Thresholds

| Account Type | Maximum Failed Attempts | Lockout Duration |
|---|---|---|
| Standard User Accounts | **5** consecutive failures | **30 minutes** (auto-unlock) or manual unlock |
| Privileged / Administrative Accounts | **3** consecutive failures | **Manual unlock required** |
| Online / Internet-Facing Customer Accounts | **[5]** consecutive failures | **[As per Customer Authentication Policy]** |
| API / Service-to-Service Accounts | **10** consecutive failures | **Indefinite until manual review** |
| Emergency / Break-Glass Accounts | Exempt from auto-lockout (alert-based) | N/A — SOC alert triggered |

#### 6.4.2 Lockout Notification and Logging

- All account lockout events **must** be logged in the centralized Security Information and Event Management (SIEM) system.
- Lockout events **must** trigger an automated notification to:
  - The affected user (via registered email or secondary channel)
  - The IT Security Team / SOC (for privileged account lockouts)
- Repeated lockout events for the same account within a 24-hour period **must** trigger a security alert for investigation.

#### 6.4.3 Lockout Bypass Controls

- Account lockout **must not** be disabled on any system without formal exception approval.
- The account unlock process **must** include verification of the user's identity before reinstatement.
- Break-glass / emergency accounts that are exempt from lockout **must** be subject to enhanced monitoring and alerting as a compensating control.

#### 6.4.4 Progressive Lockout and Delay

Where systems support it, progressive delays between failed authentication attempts are recommended in addition to hard lockout:

| Attempt Number | Recommended Delay |
|---|---|
| 1st – 3rd attempt | No delay |
| 4th attempt | 5-second delay |
| 5th attempt | Account lockout triggered |

### 6.5 Multi-Factor Authentication Requirements

*MFA significantly reduces the risk of account compromise even when passwords are exposed. This section defines where MFA is mandatory.*

#### 6.5.1 Mandatory MFA Contexts

Multi-factor authentication **must** be enforced for:

| Access Scenario | MFA Requirement |
|---|---|
| Privileged / Administrative account access to all systems | **Mandatory** |
| Remote access (VPN, remote desktop, jump servers) | **Mandatory** |
| Cloud platform management consoles (AWS, Azure, GCP, etc.) | **Mandatory** |
| Core banking system administrative access | **Mandatory** |
| Access to systems processing sensitive personal data | **Mandatory** |
| External-facing customer authentication (online/mobile banking) | **Mandatory** |
| Access to production environments by developers or vendors | **Mandatory** |
| Email access from unmanaged or external devices | **Mandatory** |

#### 6.5.2 Approved MFA Methods

The following MFA methods are approved for use within [Organization Name]:

| MFA Method | Approved | Notes |
|---|---|---|
| Hardware security tokens (FIDO2/WebAuthn) | Yes | Preferred for privileged accounts |
| Authenticator app (TOTP) — e.g., Google Authenticator, Microsoft Authenticator | Yes | Standard for most users |
| Push notification authentication | Yes | Subject to MFA fatigue awareness training |
| SMS OTP | Conditional | Permitted where stronger methods are unavailable; SMS is susceptible to SIM-swap attacks |
| Email OTP | Conditional | Lower risk tolerance contexts only |
| Voice call OTP | Not preferred | Use only as fallback |
| Knowledge-based authentication (KBA/security questions) alone | **Prohibited** | Not considered a valid second factor |

#### 6.5.3 MFA Exceptions

Any system or access scenario where MFA cannot be enforced must be documented as a formal exception (see Section 7). Compensating controls (e.g., IP whitelisting, enhanced monitoring, reduced session duration) **must** be implemented and approved.

### 6.6 Privileged Account Password Requirements

*Privileged accounts carry significantly elevated risk and require enhanced controls beyond those applied to standard user accounts.*

#### 6.6.1 Definition of Privileged Accounts

For the purposes of this policy, privileged accounts include but are not limited to:

- Domain administrators and local administrators
- Database administrators (DBA accounts)
- Network device management accounts (root, enable, admin)
- Cloud platform root/owner accounts
- Application superuser or admin accounts
- Security tool administrator accounts (SIEM, PAM, firewall management)
- Operating system root accounts

#### 6.6.2 Privileged Account Password Controls

| Control | Requirement |
|---|---|
| **Password Length** | Minimum **16 characters** |
| **Complexity** | As per Section 6.1 plus prohibition of predictable admin patterns (e.g., `Admin@2024`) |
| **MFA** | Mandatory (see Section 6.5) |
| **Password Rotation** | Maximum **60 days** |
| **PAM Vaulting** | All privileged account credentials **must** be stored in the approved PAM solution: **[PAM Solution Name]** |
| **Shared Credentials** | Prohibited — each administrator must have a uniquely attributed privileged account |
| **Just-in-Time (JIT) Access** | Recommended — privileged access should be granted on demand and revoked upon session completion |
| **Session Recording** | All privileged sessions **must** be recorded and retained for **[12 months / as per retention policy]** |
| **Break-Glass Accounts** | Sealed and stored in physical and/or digital vault; access triggers immediate alert; password changed after each use |

#### 6.6.3 Privileged Account Inventory

- The IAM / PAM Team **must** maintain a current register of all privileged accounts, including:
  - Account name and system
  - Account owner / custodian
  - Business justification
  - Last credential rotation date
  - Last access review date

- This register **must** be reviewed and recertified at minimum **quarterly**.

### 6.7 Service and System Account Password Requirements

*Service accounts present unique challenges as they are often non-interactive and may be shared across multiple processes. Rigorous controls are essential.*

#### 6.7.1 Service Account Password Standards

| Control | Requirement |
|---|---|
| **Password Length** | Minimum **20 characters** (machine-generated, random) |
| **Complexity** | Full character set including upper, lower, numeric, and special characters |
| **Human Memorability** | Not required — credentials must be stored in PAM vault or secrets manager |
| **Password Rotation** | Maximum **90 days** or immediately upon personnel change or suspected compromise |
| **Hard-Coded Credentials** | **Strictly prohibited** — credentials must never be hard-coded in source code, scripts, or configuration files |
| **Credential Storage** | Approved secrets management solution: **[Secrets Manager Name, e.g., HashiCorp Vault, AWS Secrets Manager]** |

#### 6.7.2 Hard-Coded Credential Prohibition

- Developers **must not** embed service account credentials, API keys, or passwords in source code, version control repositories, build scripts, configuration files, or documentation.
- Code repositories **must** be scanned for hard-coded credentials using automated tooling as part of the CI/CD pipeline.
- Discovery of hard-coded credentials constitutes a security incident and must be reported and remediated immediately.

#### 6.7.3 Service Account Register

The IAM Team **must** maintain a register of all service accounts, including:

| Field | Description |
|---|---|
| Account Name | Unique identifier of the service account |
| System / Application | System the account is used by |
| Business Purpose | Justification for the account's existence |
| Account Owner | Named individual responsible for the account |
| Credential Storage Location | PAM vault / secrets manager reference |
| Last Rotation Date | Date credentials were last changed |
| Rotation Method | Manual / automated |
| Expiry Date | Scheduled next rotation |

### 6.8 Default and Vendor-Supplied Passwords

*Default credentials represent one of the most commonly exploited vulnerabilities in organizational environments.*

- All default, factory-set, or vendor-supplied passwords **must** be changed **before** any system, device, or application is connected to [Organization Name]'s network or made accessible to users.
- This requirement applies to:
  - Network devices (routers, switches, firewalls, wireless access points)
  - Servers and operating systems
  - Database management systems
  - Applications and web servers
  - Printers, CCTV, and other networked devices (IoT)
  - Cloud service accounts
- IT Operations **must** verify the absence of default credentials as part of the formal **system commissioning / pre-production checklist**.
- A pre-deployment security check confirming default password removal **must** be documented and retained.
- Systems discovered in production with unchanged default credentials must be reported as a security incident and remediated immediately.

### 6.9 Password Transmission and Storage

*How passwords are transmitted and stored is as important as their complexity. Insecure handling negates the protection offered by strong passwords.*

#### 6.9.1 Password Transmission

- Passwords **must never** be transmitted in plaintext over any network, including internal networks.
- All authentication sessions **must** use encrypted protocols:
  - Web-based: **TLS 1.2 or higher** (TLS 1.3 preferred)
  - Remote administration: **SSH v2** (Telnet is prohibited)
  - Email and messaging: Passwords **must not** be communicated via email, instant messaging, or collaboration tools under any circumstances
- Password reset links sent via email must be single-use, time-limited tokens (expiring within **[1 hour]**), not the actual password.

#### 6.9.2 Password Storage

- Passwords **must never** be stored in plaintext in any database, file, log, or system.
- Passwords **must** be stored using approved strong hashing algorithms with salting:

| Use Case | Approved Algorithm |
|---|---|
| User account passwords (application level) | **bcrypt** (cost factor ≥ 12), **Argon2id**, or **PBKDF2** (≥ 600,000 iterations with SHA-256) |
| Operating system password hashes | **SHA-512** (Linux), **NTLMv2** or **Kerberos AES** (Windows Active Directory) |
| Service account credentials | PAM vault with AES-256 encryption |

- The following algorithms are **prohibited** for password storage: MD5, SHA-1, DES, unsalted SHA-256.
- Application logs **must not** capture or log password values under any circumstance. Logging controls must be reviewed and tested periodically.

#### 6.9.3 Physical Security of Passwords

- Passwords **must not** be written on paper, sticky notes, whiteboards, or any physical medium.
- Where emergency credentials must be stored physically (e.g., break-glass envelopes), they must be:
  - Stored in a tamper-evident sealed envelope
  - Kept in a physically secured location (e.g., safe, locked cabinet)
  - Logged when accessed, with access reviewed at minimum quarterly

### 6.10 Password Reset and Recovery Procedures

*A secure, auditable password reset process is critical to prevent social engineering attacks that target helpdesk personnel.*

#### 6.10.1 Self-Service Password Reset (SSPR)

Where SSPR is available, it **must** incorporate:

- Minimum two identity verification methods (e.g., registered email OTP + mobile OTP, or security questions + MFA)
- Security questions alone are **not** sufficient as the sole identity verification method
- Rate limiting on reset attempts
- Notification to the user's registered email/mobile upon successful reset
- All reset events logged in SIEM

#### 6.10.2 Helpdesk-Assisted Password Reset

When a user requests a password reset via the helpdesk:

1. **Identity verification** — The helpdesk agent **must** verify the user's identity through at least one of the following before initiating a reset:
   - Video call with employee ID verification
   - Manager confirmation via authorized channel
   - [Organization Name]-issued identity verification token or challenge
2. **Temporary password** — A temporary password is generated by the system (never set manually to a predictable value) and communicated through a secure, out-of-band channel
3. **Forced change** — The user **must** be required to change the temporary password upon next login
4. **Audit log** — All reset requests and approvals **must** be logged with the agent's identity and timestamp
5. **Notification** — The account holder is notified of the reset via their registered secondary contact channel

#### 6.10.3 Prohibited Reset Practices

- Helpdesk agents **must not** set passwords to predictable values (e.g., `Welcome@123`, `Password@1`)
- Passwords **must not** be verbally communicated or sent via email, SMS, or chat in plaintext
- Helpdesk agents **must not** reset passwords without completing the identity verification steps above

### 6.11 Remote Access and Third-Party Access Passwords

*Remote access and third-party access represent elevated-risk authentication scenarios requiring additional controls.*

#### 6.11.1 Remote Access Controls

- All remote access to [Organization Name] systems **must** require MFA (see Section 6.5)
- Remote access credentials are subject to all requirements of this policy
- VPN and remote desktop credentials **must not** be shared between individuals
- Remote sessions **must** have defined idle timeout periods: **[15 minutes]** of inactivity triggers session lock; **[30 minutes]** triggers session termination

#### 6.11.2 Third-Party and Vendor Access

- Third-party vendors granted access to [Organization Name] systems must use unique, individually attributed credentials (shared generic accounts are prohibited)
- Third-party credentials are subject to all requirements of this policy, with maximum password age of **60 days**
- Third-party access must be:
  - Time-limited to the duration of the engagement or task
  - Scoped to minimum necessary systems and data
  - Deactivated immediately upon completion of the engagement
- Third-party access must be conducted over approved secure channels with MFA enforced
- Third parties must sign the **[Third-Party Information Security Agreement]** which includes acknowledgement of this policy's requirements

---

## 7. Exceptions and Escalation Process

*No policy can anticipate every operational scenario. This section provides a controlled mechanism for managing exceptions while maintaining an auditable record.*

### 7.1 Exception Principles

- Exceptions to this policy are granted on an exceptional basis only, where genuine technical or operational constraints exist that cannot be remediated within a reasonable timeframe.
- Exceptions are **not** granted on the basis of user preference or convenience.
- All exceptions **must** be accompanied by documented compensating controls that mitigate the associated risk to an acceptable level.
- Exceptions are temporary in nature and must be reviewed at defined intervals.

### 7.2 Exception Request Process

*Describe the step-by-step process for requesting and approving a policy exception. Ensure the process is practical and does not create unnecessary barriers to legitimate exceptions.*

**Step 1 — Identification:** The requesting party (system owner, business unit head, or IT team) identifies a specific requirement of this policy that cannot be met and documents the technical or operational constraint.

**Step 2 — Exception Request Submission:** The requesting party completes the **[Password Policy Exception Request Form]** (see Appendix D) and submits it to the IT Security Team via **[exception request channel/system]**.

**Step 3 — Risk Assessment:** The IT Security Team conducts a risk assessment of the proposed exception, evaluating:
- Nature and severity of the risk created by the exception
- Adequacy of proposed compensating controls
- Duration of the exception
- Regulatory implications (particularly BNM RMiT compliance)

**Step 4 — Review and Recommendation:** The IT Security Team documents a recommendation (Approve / Reject / Approve with Conditions) within **[5 business days]** of receipt.

**Step 5 — Approval Authority:**

| Risk Level | Approval Authority |
|---|---|
| Low Risk | IT Security Manager |
| Medium Risk | CISO |
| High Risk | CISO + CTO |
| Critical Risk / Regulatory Impact | CISO + Board Risk Committee |

**Step 6 — Communication:** The decision is communicated to the requesting party in writing. Approved exceptions are registered in the **[Exception Register]**.

**Step 7 — Monitoring:** Approved exceptions are monitored for compliance with stated compensating controls. The IT Security Team reviews all active exceptions quarterly.

**Step 8 — Review and Closure:** Each exception is assigned a defined expiry date (maximum **12 months**). Prior to expiry, the exception must be:
- Remediated (control implemented and exception closed), or
- Re-applied for with updated justification and risk assessment

### 7.3 Exception Register

The IT Security Team **must** maintain an Exception Register containing at minimum:

| Field | Description |
|---|---|
| Exception ID | Unique identifier |
| Policy Clause | Specific policy requirement being excepted |
| System / Application | Affected system |
| Requestor | Name and role |
| Business Justification | Reason exception is required |
| Risk Assessment | Risk level and assessment summary |
| Compensating Controls | Controls implemented to mitigate risk |
| Approval Authority | Name and role of approver |
| Approval Date | Date approved |
| Expiry Date | Date exception must be reviewed or closed |
| Status | Active / Under Review / Closed |

### 7.4 Escalation Process

Where a requested exception involves potential non-compliance with BNM RMiT requirements or other regulatory obligations, the CISO **must**:

1. Assess whether the exception represents a reportable breach under applicable regulations
2. Consult with the Chief Compliance Officer and Legal Counsel as appropriate
3. Determine whether proactive disclosure to BNM is required
4. Document the escalation and outcome

---

## 8. Compliance and Enforcement

*Define how compliance with this policy is measured, monitored, and enforced. Establish consequences for non-compliance.*

### 8.1 Compliance Monitoring

[Organization Name] will monitor compliance with this policy through the following mechanisms:

| Monitoring Activity | Frequency | Responsible Party | Reporting To |
|---|---|---|---|
| Automated password policy configuration audit | Monthly | IT Security Team | CISO |
| User account compliance scan (expired passwords, lockout bypass) | Monthly | IT Security Team / IAM Team | IT Security Manager |
| Privileged account password rotation verification | Monthly | PAM Team | CISO |
| Service account inventory and rotation audit | Quarterly | IAM / PAM Team | CISO |
| Exception register review | Quarterly | IT Security Team | CISO |
| Internal audit of password policy compliance | Annually | Internal Audit | Audit Committee |
| External / BNM examination | As required | CISO, IT Security Team | Board |

### 8.2 Key Compliance Metrics

The following metrics will be tracked and reported as part of technology risk reporting:

| Metric | Target | Reporting Frequency |
|---|---|---|
| % of user accounts with compliant password age | ≥ 98% | Monthly |
| % of privileged accounts managed in PAM vault | 100% | Monthly |
| Number of active policy exceptions | < [threshold] | Quarterly |
| Mean time to resolve account lockouts (standard users) | < [X] hours | Monthly |
| % of systems with default passwords changed | 100% | Monthly |
| Number of credential-related security incidents | Trend tracking | Monthly |
| % of privileged accounts with MFA enabled | 100% | Monthly |

### 8.3 Non-Compliance and Disciplinary Action

*Establish proportionate consequences for non-compliance to reinforce the seriousness of this policy.*

Non-compliance with this policy by employees of [Organization Name] may result in disciplinary action in accordance with [Organization Name]'s **[Disciplinary Policy / Code of Conduct]** and applicable employment law. The severity of disciplinary action will be proportionate to:

- The nature and intent of the non-compliance (negligence vs. deliberate breach)
- The potential or actual impact on [Organization Name] and its customers
- Whether the non-compliance constitutes a repeat offence

| Category of Non-Compliance | Examples | Potential Consequence |
|---|---|---|
| Minor / Inadvertent | Failure to change password before expiry; failure to complete password training | Verbal warning; mandatory retraining |
| Moderate | Sharing passwords; writing passwords in insecure locations; failure to report suspected compromise | Written warning; mandatory remedial training; temporary access restriction |
| Serious / Wilful | Deliberately circumventing password controls; unauthorized account access; disclosing credentials to third parties | Formal disciplinary action up to and including termination; referral to law enforcement |
| Contractor / Vendor | Any non-compliance by third parties | Formal notice; access revocation; contract penalty; contract termination |

Non-compliance by third parties will be addressed through the relevant contractual mechanisms and may result in immediate access revocation.

### 8.4 Regulatory Non-Compliance

Identified non-compliance with BNM RMiT Clause 10.55 or other applicable regulatory requirements must be:

1. Escalated immediately to the CISO and Chief Compliance Officer
2. Assessed for materiality and potential regulatory disclosure obligations
3. Remediated within a documented and agreed timeframe
4. Reported to the Board Risk Committee if material
5. Disclosed to BNM if required under applicable reporting obligations

---

## 9. Related Documents and Controls

*Cross-reference all related policies, standards, procedures, and controls to provide a complete picture of the control environment.*

| Document | Type | Relationship |
|---|---|---|
| Information Security Policy | Policy | Parent policy — this document is a subsidiary control |
| Access Control Policy | Policy | Governing framework for user access management |
| Identity and Access Management Standard | Standard | Technical standard for IAM controls |
| Privileged Access Management Standard | Standard | Detailed controls for privileged account management |
| Password Management Technical Standard | Standard | Technical configuration baselines implementing this policy |
| Acceptable Use Policy | Policy | Governs appropriate use of [Organization Name] IT resources |
| Incident Response Policy | Policy | Procedures for responding to credential compromise incidents |
| Third-Party Information Security Policy | Policy | Security requirements for vendors and third parties |
| Data Classification Policy | Policy | Defines sensitivity levels that inform authentication requirements |
| Business Continuity Plan | Plan | Addresses emergency access requirements |
| [Customer Authentication Policy] | Policy | Governs authentication for customer-facing channels |
| Certificate and PKI Management Policy | Policy | Governs PKI-based authentication |
| Security Awareness Training Program | Program | Includes password security training for all staff |

---

## 10. Review and Approval History

*Maintain a complete audit trail of document revisions and approvals. This is critical for regulatory examinations and demonstrates governance maturity.*

### 10.1 Version History

*Record all revisions to this document, including minor updates. A complete version history demonstrates active policy management.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name, Title] | [Reviewer Name, Title] | Initial draft for internal review |
| 0.2 | [Date] | [Author Name, Title] | [Reviewer Name, Title] | Incorporated IT Security Team feedback; expanded Section 6.6 |
| 0.3 | [Date] | [Author Name, Title] | [Reviewer Name, Title] | Incorporated Legal and Compliance review; updated regulatory references |
| 1.0 | [Date] | [Author Name, Title] | [Reviewer Name, Title] | Approved for release — initial published version |

### 10.2 Approval Sign-Off

*All approvers must sign this document (physically or via electronic approval workflow) prior to publication. Retain signed copies in the Document Management System.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by | [Name], [Title] | ________________ | [Date] |
| Reviewed by (IT Security) | [Name], IT Security Manager | ________________ | [Date] |
| Reviewed by (Legal / Compliance) | [Name], Chief Compliance Officer | ________________ | [Date] |
| Reviewed by (Internal Audit) | [Name], Head of Internal Audit | ________________ | [Date] |
| Approved by (Owner) | [Name], CISO / CTO | ________________ | [Date] |
| Endorsed by | [Name], Chief Executive Officer | ________________ | [Date] |

### 10.3 Review Schedule

| Review Type | Frequency | Next Due Date | Responsible Party |
|---|---|---|---|
| Scheduled Annual Review | Annual | [Date + 1 year from effective date] | CISO |
| Triggered Review — Regulatory Change | Upon issuance of new/amended BNM guidelines | As required | CISO + Compliance |
| Triggered Review — Material Incident | Following a credential-related security incident | As required | CISO |
| Triggered Review — Technology Change | Following significant changes to authentication infrastructure | As required | CTO |

---

## 11. References

*List all regulatory instruments, standards, and guidance documents referenced in this policy.*

### 11.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clauses |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | **Clause 10.55** (Authentication Controls); Clauses 10.50–10.60 (Access Control); Clauses 10.1–10.10 (Technology Risk Governance) |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Sections 9, 10 (Security Principle) |
| NACSA Guidelines | Guidelines on Cyber Resilience | National Cyber Security Agency (NACSA) | [Relevant sections as applicable] |
| FSA 2013 | Financial Services Act 2013 | Government of Malaysia | Section 58 (Risk Management); Section 143 (Directions by BNM) |
| IFSA 2013 | Islamic Financial Services Act 2013 | Government of Malaysia | [Applicable sections] |

### 11.2 Industry Standards

| Reference | Title | Version | Relevant Sections |
|---|---|---|---|
| ISO/IEC 27001 | Information Security Management Systems — Requirements | 2022 | Annex A, Control 8.5 (Secure Authentication) |
| ISO/IEC 27002 | Information Security Controls | 2022 | Section 8.5 (Secure Authentication) |
| NIST SP 800-63B | Digital Identity Guidelines: Authentication and Lifecycle Management | 3rd Edition | Section 5 (Authenticator and Verifier Requirements) |
| NIST SP 800-53 | Security and Privacy Controls for Information Systems and Organizations | Rev. 5 | IA-5 (Authenticator Management) |
| PCI DSS | Payment Card Industry Data Security Standard | v4.0 | Requirement 8 (Identify Users and Authenticate Access) |
| CIS Controls | Center for Internet Security Critical Security Controls | v8 | Control 5 (Account Management) |
| OWASP | Authentication Cheat Sheet | Current | Password Storage, Reset, MFA sections |

---

## 12. Appendices

### Appendix A — Password Complexity Quick Reference Card

*This appendix provides a user-friendly summary of password requirements for distribution to all staff. It may be reproduced as a standalone handout or included in security awareness training materials.*

---

**[Organization Name] — Password Requirements at a Glance**

| Requirement | Standard Users | Administrators |
|---|---|---|
| Minimum length | 12 characters | 16 characters |
| Uppercase letter | Required | Required |
| Lowercase letter | Required | Required |
| Number | Required | Required |
| Special character | Required | Required |
| Maximum age | 90 days | 60 days |
| History | 12 passwords | 24 passwords |
| MFA | Where available | Mandatory |
| Lockout after | 5 failed attempts | 3 failed attempts |

**Do:**
- Use a passphrase (e.g., four or more random words)
- Use a password manager for storing credentials
- Change your password immediately if you suspect it has been compromised
- Use a unique password for every system

**Do Not:**
- Share your password with anyone — including IT staff or your manager
- Write your password on paper or store it in unprotected files
- Reuse passwords across work and personal accounts
- Use personal information (name, birthdate, phone number) in your password

---

### Appendix B — Approved Password Managers and Tools

*List organization-approved tools for credential management. Only tools listed here are approved for use with [Organization Name] credentials.*

| Tool | Type | Approved Use | Administrator |
|---|---|---|---|
| [PAM Solution Name] | Privileged Access Management (PAM) | Privileged and service accounts | IAM / PAM Team |
| [Secrets Manager Name] | Secrets Management | Service accounts, API keys, application secrets | IT Security / DevOps |
| [Enterprise Password Manager] | Enterprise Password Manager | Standard user credentials (where deployed) | IT Operations |

**Note:** Personal consumer password managers (e.g., browser-based password storage on personal devices) are **not approved** for storing [Organization Name] credentials.

---

### Appendix C — Password Incident Response Checklist

*Use this checklist when a password compromise is suspected or confirmed. Complete all steps and retain this record as part of the incident report.*

**Incident Reference:** [Incident ID]
**Date/Time Identified:** [Date/Time]
**Reported By:** [Name / Role]
**Systems Potentially Affected:** [List systems]

| Step | Action | Responsible | Completed | Timestamp |
|---|---|---|---|---|
| 1 | Immediately disable / lock the compromised account | IT Security / IAM | ☐ | |
| 2 | Notify the CISO and SOC | Reporting party | ☐ | |
| 3 | Identify scope — which systems was the credential used on? | IT Security | ☐ | |
| 4 | Review logs for unauthorized access using compromised credential | SOC / IT Security | ☐ | |
| 5 | Force password reset on all systems where credential was used | IAM Team | ☐ | |
| 6 | Invalidate all active sessions associated with the account | IT Operations | ☐ | |
| 7 | If MFA tokens were also compromised, revoke and re-enrol MFA | IAM Team | ☐ | |
| 8 | Notify affected users and relevant business units | CISO | ☐ | |
| 9 | Assess whether customer data was accessed or exfiltrated | IT Security / DPO | ☐ | |
| 10 | Determine PDPA / BNM notification obligations | DPO / Compliance | ☐ | |
| 11 | Document full incident timeline and remediation | Incident Manager | ☐ | |
| 12 | Conduct post-incident review and implement lessons learned | CISO | ☐ | |

---

### Appendix D — Password Policy Exception Request Form

*Complete this form to request a formal exception to any requirement within this Password Policy. Submit to: [IT Security Team email / portal link].*

---

**SECTION 1 — REQUESTOR DETAILS**

| Field | Details |
|---|---|
| Requestor Name | [Name] |
| Requestor Title | [Title] |
| Department / Business Unit | [Department] |
| Date of Request | [Date] |
| Contact Email | [Email] |

**SECTION 2 — EXCEPTION DETAILS**

| Field | Details |
|---|---|
| Policy Reference | Password Policy, Section [X.X] |
| Specific Requirement Being Excepted | [Describe the specific control or requirement] |
| System / Application Affected | [System name(s)] |
| Number of Users / Accounts Affected | [Number] |

**SECTION 3 — JUSTIFICATION**

*Describe why compliance with the stated policy requirement is not feasible. Include technical constraints, vendor limitations, or operational necessity.*

[Free text — provide detailed justification]

**SECTION 4 — RISK ASSESSMENT**

*Describe the security risk created by granting this exception.*

| Risk Factor | Details |
|---|---|
| Risk Description | [Describe the risk] |
| Risk Level (estimated) | Low / Medium / High / Critical |
| Likelihood of Exploitation | Low / Medium / High |
| Potential Impact | [Describe potential impact to [Organization Name] and customers] |

**SECTION 5 — PROPOSED COMPENSATING CONTROLS**

*Describe the controls that will be implemented to mitigate the risk created by this exception.*

| Compensating Control | Implementation Timeline | Owner |
|---|---|---|
| [Control 1] | [Date] | [Name / Role] |
| [Control 2] | [Date] | [Name / Role] |
| [Control 3] | [Date] | [Name / Role] |

**SECTION 6 — EXCEPTION DURATION**

| Field | Details |
|---|---|
| Requested Start Date | [Date] |
| Requested End Date / Expiry | [Date — maximum 12 months] |
| Remediation Plan | [Describe plan to bring into compliance or make exception permanent] |

**SECTION 7 — APPROVAL**

| Role | Name | Decision | Signature | Date |
|---|---|---|---|---|
| IT Security Manager | [Name] | Approve / Reject / Conditions | ________________ | [Date] |
| CISO | [Name] | Approve / Reject / Conditions | ________________ | [Date] |
| CTO (if required) | [Name] | Approve / Reject / Conditions | ________________ | [Date] |

**Conditions of Approval (if applicable):**
[Document any conditions attached to the approval]

---

### Appendix E — Glossary of Hashing Algorithms

*Technical reference for system administrators and developers implementing password storage controls.*

| Algorithm | Type | Status | Notes |
|---|---|---|---|
| bcrypt | Password hashing | **Approved** | Use cost factor ≥ 12; widely supported |
| Argon2id | Password hashing | **Approved (Preferred)** | Winner of Password Hashing Competition; NIST recommended |
| PBKDF2-SHA256 | Key derivation | **Approved** | Use ≥ 600,000 iterations; FIPS compliant |
| scrypt | Memory-hard KDF | **Approved** | Suitable where memory-hardness is required |
| SHA-512 (salted) | Cryptographic hash | **Approved (OS level only)** | Acceptable for OS password stores; not recommended for application-level |
| SHA-256 (unsalted) | Cryptographic hash | **Prohibited** | Vulnerable to rainbow table attacks |
| SHA-1 | Cryptographic hash | **Prohibited** | Cryptographically broken |
| MD5 | Cryptographic hash | **Prohibited** | Cryptographically broken |
| DES / 3DES | Symmetric cipher | **Prohibited** | Legacy; not suitable for password storage |
| NTLM (v1) | Windows hash | **Prohibited** | Legacy and insecure |

---

### Appendix F — BNM RMiT Clause 10.55 Compliance Mapping

*This appendix maps the specific requirements of BNM RMiT Clause 10.55 to the corresponding sections of this policy, supporting regulatory examination and internal audit.*

*Note: Replace [requirement summary] with the actual text or summary from the current BNM RMiT policy document. Consult Compliance / Legal for the authoritative version.*

| BNM RMiT Clause 10.55 Requirement | Requirement Summary | Policy Section(s) | Control Status |
|---|---|---|---|
| 10.55(a) | [Minimum password length and complexity] | Section 6.1 | Implemented |
| 10.55(b) | [Password history — prohibition of reuse] | Section 6.2 | Implemented |
| 10.55(c) | [Maximum password age / mandatory change interval] | Section 6.3 | Implemented |
| 10.55(d) | [Account lockout after failed attempts] | Section 6.4 | Implemented |
| 10.55(e) | [Prohibition of default credentials] | Section 6.8 | Implemented |
| 10.55(f) | [Secure password transmission and storage] | Section 6.9 | Implemented |
| 10.55(g) | [Multi-factor authentication for privileged access] | Section 6.5, 6.6 | Implemented |
| 10.55(h) | [Privileged account controls] | Section 6.6 | Implemented |
| 10.55(i) | [Service account credential management] | Section 6.7 | Implemented |
| 10.55(j) | [Periodic review of authentication controls] | Section 10.3 | Implemented |

---

*— End of Document —*

**[Organization Name] | Password Policy | Version 1.0 | Classification: Confidential | Document ID: [Document ID]**