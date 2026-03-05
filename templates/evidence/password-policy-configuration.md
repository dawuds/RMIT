# Password Policy Configuration

---

| **Field** | **Details** |
|---|---|
| **Document ID** | [ORG-RMIT-SEC-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Head of Information Security / CISO] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 12 months from Last Review] |
| **Approved By** | [Approved By — Name and Title] |
| **Organization** | [Organization Name] |
| **Regulatory Framework** | Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT Clause 10.55 |
| **Document Status** | [Draft / Under Review / Approved] |

---

> **Handling Instructions:** This document is classified **Confidential**. It contains technical security configuration details that must not be shared outside of authorized personnel. Distribution is restricted to [Organization Name] staff with a need-to-know basis and authorized regulatory examiners. Unauthorized disclosure may constitute a breach of the Personal Data Protection Act 2010 (PDPA) and internal information security policies.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Policy Statements and Requirements](#4-policy-statements-and-requirements)
   - 4.1 [Password Complexity Requirements](#41-password-complexity-requirements)
   - 4.2 [Password Age and Expiry Controls](#42-password-age-and-expiry-controls)
   - 4.3 [Account Lockout Controls](#43-account-lockout-controls)
   - 4.4 [Password History and Reuse Controls](#44-password-history-and-reuse-controls)
   - 4.5 [Multi-Factor Authentication (MFA) Requirements](#45-multi-factor-authentication-mfa-requirements)
   - 4.6 [Privileged Account Password Controls](#46-privileged-account-password-controls)
   - 4.7 [Service and System Account Password Controls](#47-service-and-system-account-password-controls)
   - 4.8 [Default Password Management](#48-default-password-management)
   - 4.9 [Password Transmission and Storage](#49-password-transmission-and-storage)
5. [Technical Configuration Evidence](#5-technical-configuration-evidence)
   - 5.1 [Active Directory / Identity Provider Configuration](#51-active-directory--identity-provider-configuration)
   - 5.2 [Operating System Password Policies](#52-operating-system-password-policies)
   - 5.3 [Application-Level Password Configurations](#53-application-level-password-configurations)
   - 5.4 [Database Password Controls](#54-database-password-controls)
   - 5.5 [Network Device Password Controls](#55-network-device-password-controls)
6. [Exceptions and Escalation Process](#6-exceptions-and-escalation-process)
7. [Compliance and Enforcement](#7-compliance-and-enforcement)
8. [Monitoring and Audit](#8-monitoring-and-audit)
9. [Review and Approval History](#9-review-and-approval-history)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section defines why this document exists and what it aims to demonstrate. Authors should describe the document's role as both a policy instrument and a regulatory evidence artifact.*

This document serves a dual purpose:

1. **Policy Instrument:** To establish and communicate [Organization Name]'s mandatory requirements for password configuration across all information systems, applications, and infrastructure components.

2. **Regulatory Evidence:** To provide auditable, technical evidence that [Organization Name] has implemented and enforces password controls in alignment with the Bank Negara Malaysia (BNM) Policy Document on Risk Management in Technology (RMiT), specifically Clause 10.55, which mandates that financial institutions enforce password-based authentication controls that are commensurate with the risk level of the systems being protected.

This document is a mandatory compliance artifact and forms part of [Organization Name]'s broader Information Security Management System (ISMS) and Technology Risk Management Framework.

### 1.2 Scope

*Authors should enumerate the systems, environments, user populations, and organizational boundaries covered by this policy. Be specific about what is included and explicitly state exclusions where applicable.*

This policy and the technical configurations documented herein apply to:

**In-Scope Systems and Platforms:**

| Category | Systems / Platforms |
|---|---|
| Directory Services | [e.g., Microsoft Active Directory, Azure AD / Entra ID, LDAP] |
| Operating Systems | [e.g., Windows Server, Linux/RHEL/Ubuntu, macOS endpoints] |
| Core Banking Systems | [e.g., System Name, Vendor] |
| Internet Banking Platforms | [e.g., Platform Name] |
| Payment Systems | [e.g., System Name] |
| Data Repositories | [e.g., Oracle DB, MS SQL Server, PostgreSQL] |
| Network Infrastructure | [e.g., Cisco IOS/NX-OS, Palo Alto, Fortinet] |
| Security Tools | [e.g., SIEM, PAM, EDR platforms] |
| Cloud Platforms | [e.g., AWS, Azure, Google Cloud tenants] |
| Third-Party SaaS Applications | [e.g., List key business applications] |

**In-Scope User Populations:**

- All full-time employees of [Organization Name]
- Contractors and third-party service providers with access to [Organization Name] systems
- System and service accounts (non-human identities)
- Privileged users including system administrators, database administrators, and network engineers
- Vendor accounts with remote access privileges

**Explicit Exclusions:**

*List any systems, users, or scenarios explicitly excluded from this policy. All exclusions must have a documented rationale and approved exception on file.*

| Exclusion | Rationale | Exception Reference |
|---|---|---|
| [Excluded System/Category] | [Business or technical justification] | [Exception Ref No.] |
| [Excluded System/Category] | [Business or technical justification] | [Exception Ref No.] |

### 1.3 Objectives

This document is intended to achieve the following objectives:

- Demonstrate to BNM examiners that [Organization Name] has implemented technically enforced password controls as required by RMiT Clause 10.55.
- Provide a single consolidated reference for all password configuration standards across the organization's technology landscape.
- Establish clear, measurable password standards that reduce the risk of unauthorized access through credential-based attacks including brute force, credential stuffing, and password spraying.
- Define accountability for the configuration, monitoring, and maintenance of password controls.
- Support audit readiness by providing traceable evidence of policy-to-configuration alignment.

---

## 2. Regulatory and Policy Context

### 2.1 BNM RMiT Regulatory Requirement

*Authors should provide a direct quotation or paraphrase of the specific RMiT clause(s) that this document addresses. This creates a clear regulatory traceability chain.*

The BNM Policy Document on Risk Management in Technology (RMiT), issued under the Financial Services Act 2013 (FSA) and Islamic Financial Services Act 2013 (IFSA), establishes binding requirements for financial institutions to manage technology risk prudently.

**RMiT Clause 10.55** addresses authentication controls and requires that:

> *[Insert verbatim text of RMiT Clause 10.55 from the official BNM RMiT Policy Document. Ensure the text is current as at the document's effective date.]*

**Compliance Obligation:** As a [licensed bank / investment bank / insurer / takaful operator / payment service provider] regulated by BNM, [Organization Name] is required to comply with the RMiT Policy Document. Non-compliance may result in regulatory action under the relevant enabling legislation.

### 2.2 Related Internal Policies

*List all internal policy documents that this configuration evidence supports or is subordinate to. Maintaining traceability between this evidence artifact and parent policies is essential for audit purposes.*

| Document Title | Document ID | Version | Relationship |
|---|---|---|---|
| Information Security Policy | [ORG-SEC-POL-001] | [Version] | Parent Policy |
| Identity and Access Management Policy | [ORG-IAM-POL-001] | [Version] | Parent Policy |
| Privileged Access Management Policy | [ORG-PAM-POL-001] | [Version] | Related Policy |
| Technology Risk Management Framework | [ORG-TRMF-001] | [Version] | Governance Framework |
| Acceptable Use Policy | [ORG-AUP-001] | [Version] | Related Policy |
| Incident Response Plan | [ORG-IRP-001] | [Version] | Related Procedure |
| Vendor / Third-Party Access Policy | [ORG-VND-POL-001] | [Version] | Related Policy |

### 2.3 Alignment with Industry Standards

*Authors should articulate how the organization's password policy aligns with recognized international security standards. This demonstrates a risk-based, internationally benchmarked approach.*

[Organization Name]'s password configuration standards are designed in alignment with the following internationally recognized frameworks and guidelines:

| Standard / Framework | Relevant Guidance |
|---|---|
| NIST SP 800-63B (Digital Identity Guidelines) | Password length, complexity, and breach-checking requirements |
| ISO/IEC 27001:2022 — Annex A Control 8.5 | Secure authentication controls |
| CIS Controls v8 — Control 5 | Account management and authentication hygiene |
| OWASP Authentication Cheat Sheet | Application-level authentication best practices |
| NACSA Cybersecurity Framework | National cybersecurity baseline requirements applicable to Critical Information Infrastructure (CII) |

---

## 3. Roles and Responsibilities

### 3.1 RACI Matrix

*Complete the RACI matrix below for all activities related to password policy management and technical configuration. Ensure that all named roles correspond to actual positions within [Organization Name]'s organizational structure. RACI definitions: R = Responsible (does the work), A = Accountable (owns the outcome), C = Consulted (provides input), I = Informed (kept updated).*

| Activity | CISO / Head of InfoSec | IT Infrastructure Manager | IAM / Active Directory Team | Application Owners | Database Administrators | Network Team | Internal Audit | Compliance Officer | Business Unit Heads |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Define and approve password policy standards | A | C | C | C | C | C | I | C | I |
| Configure AD/IdP password policies | I | A | R | I | I | I | I | I | I |
| Configure OS-level password policies | I | A | R | I | I | I | I | I | I |
| Configure application password policies | I | C | C | A/R | I | I | I | I | I |
| Configure database password policies | I | C | I | C | A/R | I | I | I | I |
| Configure network device password policies | I | A | I | I | I | R | I | I | I |
| Manage Privileged Access Management (PAM) tool | I | A | R | C | C | C | I | I | I |
| Review and approve policy exceptions | A | C | C | C | C | C | C | R | I |
| Monitor for policy non-compliance | A | C | R | C | C | C | R | C | I |
| Conduct annual policy review | A | C | C | C | C | C | I | R | I |
| Report non-compliance to senior management | A | I | I | I | I | I | I | R | I |
| User awareness and training | C | I | I | I | I | I | I | A/R | C |
| Audit and assurance testing | I | I | I | I | I | I | A/R | C | I |

### 3.2 Role Descriptions

*Authors should map the role titles used in the RACI above to specific named individuals or teams within [Organization Name]. This ensures clear accountability.*

| Role | Responsible Team / Department | Current Role Holder | Contact |
|---|---|---|---|
| CISO / Head of Information Security | [Department Name] | [Name] | [Email / Extension] |
| IT Infrastructure Manager | [Department Name] | [Name] | [Email / Extension] |
| IAM / Active Directory Team | [Department Name] | [Team Lead Name] | [Email / Extension] |
| Application Owner (Core Banking) | [Department Name] | [Name] | [Email / Extension] |
| Application Owner (Internet Banking) | [Department Name] | [Name] | [Email / Extension] |
| Database Administrator Team Lead | [Department Name] | [Name] | [Email / Extension] |
| Network Team Lead | [Department Name] | [Name] | [Email / Extension] |
| Head of Internal Audit (Technology) | [Department Name] | [Name] | [Email / Extension] |
| Compliance Officer (Technology Risk) | [Department Name] | [Name] | [Email / Extension] |

---

## 4. Policy Statements and Requirements

*This section defines the mandatory technical standards for password configuration. Each sub-section maps to a specific control category. All configurations documented in Section 5 must demonstrably meet or exceed these requirements.*

### 4.1 Password Complexity Requirements

*Authors should define the minimum technical requirements for password complexity. These should reflect both the RMiT minimum standards and the organization's own risk appetite. Requirements should be differentiated by user type.*

**Policy Statement:** All system-enforced passwords within [Organization Name]'s technology environment shall meet or exceed the following minimum complexity requirements:

#### 4.1.1 Standard User Accounts

| Requirement | Minimum Standard | [Organization Name] Standard |
|---|---|---|
| Minimum Password Length | 8 characters | [e.g., 12 characters] |
| Maximum Password Length | No upper limit (accommodate passphrases) | [e.g., 64 characters or no limit] |
| Uppercase Letters | Required | [Required / Not Required] |
| Lowercase Letters | Required | [Required / Not Required] |
| Numeric Characters | Required | [Required / Not Required] |
| Special Characters | Required | [Required / Not Required] |
| Dictionary Word Prohibition | Required | [Enabled / Disabled — specify tool] |
| Compromised Password Screening | Recommended (NIST SP 800-63B) | [Enabled / Not Implemented — specify rationale] |
| Username Inclusion Prohibition | Required | [Enabled / Disabled] |

#### 4.1.2 Privileged / Administrative Accounts

| Requirement | Standard | [Organization Name] Privileged Standard |
|---|---|---|
| Minimum Password Length | 12 characters | [e.g., 16 characters] |
| Complexity Requirements | All character classes required | [Specify] |
| Passphrase Option | Permitted if meets length | [Permitted / Not Permitted] |
| Prohibited Patterns | Sequential chars, keyboard walks | [Enforced via: specify tool/control] |

#### 4.1.3 Service and System Accounts

| Requirement | Standard |
|---|---|
| Minimum Password Length | [e.g., 20 characters — recommend maximally complex] |
| Complexity | All character classes, randomly generated |
| Management Method | [PAM Vault / Manual — specify] |
| Rotation Mechanism | [Automated / Manual] |

### 4.2 Password Age and Expiry Controls

*Authors should document the maximum password validity periods. Note: NIST SP 800-63B recommends against mandatory periodic rotation unless a breach is detected. Authors should document the organization's chosen approach and rationale, balancing RMiT compliance with current best practice.*

**Policy Statement:** [Organization Name] enforces the following password expiry controls to limit the window of exposure from compromised credentials:

| Account Type | Maximum Password Age | Minimum Password Age | Rationale |
|---|---|---|---|
| Standard User Accounts | [e.g., 90 days] | [e.g., 1 day] | [Regulatory / risk appetite basis] |
| Privileged / Admin Accounts | [e.g., 60 days] | [e.g., 1 day] | [Higher risk — shorter rotation] |
| Service / System Accounts | [e.g., Annual or PAM-managed] | [N/A — PAM-managed] | [Managed via PAM vault] |
| Vendor / Third-Party Accounts | [e.g., 30 days or per-engagement] | [e.g., 1 day] | [Third-party risk — shorter window] |
| Initial / Temporary Passwords | Must be changed on first login | N/A | [Security hygiene] |

**Note on Forced Reset Triggers:** Passwords shall be immediately reset, regardless of age, upon:
- Suspected or confirmed compromise
- Employee termination or role change removing system access
- Detection of unauthorized access attempts
- Directive from the CISO or as part of an incident response action

### 4.3 Account Lockout Controls

*Authors should document lockout thresholds that balance security (preventing brute force) with operational availability (preventing denial-of-service on accounts). Document the unlock procedure clearly.*

**Policy Statement:** To protect against brute force and credential stuffing attacks, [Organization Name] enforces the following account lockout policies:

| Parameter | Standard User Accounts | Privileged Accounts | Internet Banking / Customer Accounts |
|---|---|---|---|
| Lockout Threshold (Failed Attempts) | [e.g., 5 attempts] | [e.g., 3 attempts] | [e.g., 5 attempts] |
| Observation Window | [e.g., 30 minutes] | [e.g., 15 minutes] | [e.g., 30 minutes] |
| Lockout Duration | [e.g., 30 minutes auto-unlock] | [e.g., Manual unlock required] | [e.g., 30 minutes / OTP unlock] |
| Unlock Procedure | [e.g., Self-service / Help Desk] | [e.g., CISO / Security Team only] | [e.g., OTP to registered mobile] |
| Lockout Event Logging | Required | Required (SIEM alert) | Required (SIEM alert) |
| Failed Login Alerting | [e.g., SIEM alert at threshold] | [e.g., Immediate SIEM alert] | [e.g., Fraud system alert] |

### 4.4 Password History and Reuse Controls

*Authors should specify the number of previous passwords that cannot be reused. This prevents users from cycling between a small set of known passwords.*

**Policy Statement:** [Organization Name] maintains a password history to prevent the reuse of recently used passwords:

| Account Type | Password History Length (Cannot Reuse Last N Passwords) |
|---|---|
| Standard User Accounts | [e.g., Last 12 passwords] |
| Privileged / Admin Accounts | [e.g., Last 24 passwords] |
| Service / System Accounts | [e.g., N/A — PAM-managed, never reused] |

**Prohibition on Trivial Changes:** Password change controls shall be configured to prevent trivial character substitutions (e.g., incrementing a trailing number such as `Password1` to `Password2`) where technically feasible via the platform in use.

### 4.5 Multi-Factor Authentication (MFA) Requirements

*Authors should document MFA requirements and map them to the systems where MFA is mandatory. RMiT Clause 10.55 and related clauses address authentication strength requirements. MFA is increasingly expected for privileged and remote access.*

**Policy Statement:** [Organization Name] mandates Multi-Factor Authentication (MFA) as an additional authentication layer beyond passwords for the following access scenarios:

| Access Scenario | MFA Required | Approved MFA Methods | Exceptions Permitted |
|---|---|---|---|
| Remote access (VPN / ZTNA) | Yes — Mandatory | [e.g., TOTP, Hardware Token, Push Notification] | None |
| Privileged access to production systems | Yes — Mandatory | [e.g., Hardware Token, PAM step-up] | None |
| Cloud management consoles (AWS/Azure/GCP) | Yes — Mandatory | [e.g., TOTP, Hardware Token] | None |
| Internet banking (customer-facing) | Yes — Mandatory | [e.g., TAC/OTP via SMS, Mobile Banking App] | None |
| Internal corporate applications (standard users) | [Yes/Conditional] | [e.g., Push Notification, TOTP] | [State conditions] |
| Email (O365/Google Workspace) | Yes — Mandatory | [e.g., Authenticator App, Push Notification] | None |
| Data centre physical access systems | [Yes/No] | [e.g., Smart Card + PIN] | [State conditions] |

**MFA Bypass Controls:** Any administrative mechanism to bypass MFA shall be:
- Logged and alerted in the SIEM
- Restricted to a named set of break-glass accounts
- Subject to post-event review within [e.g., 24 hours]

### 4.6 Privileged Account Password Controls

*Privileged accounts represent the highest risk. Authors should document additional controls applied specifically to administrative, root, and superuser accounts. Reference the organization's Privileged Access Management (PAM) solution where applicable.*

**Policy Statement:** Privileged accounts, including but not limited to domain administrators, local administrators, root accounts, database superusers, and network device enable accounts, are subject to the following enhanced controls:

- **PAM Vault Requirement:** All privileged account credentials shall be stored in and checked out through [Organization Name]'s approved Privileged Access Management (PAM) solution: **[PAM Solution Name, e.g., CyberArk, BeyondTrust, Delinea]**.
- **Just-In-Time (JIT) Access:** Where technically feasible, privileged access shall be provisioned on a just-in-time basis with automatic expiry upon session completion or maximum session duration of [e.g., 4 hours].
- **Session Recording:** All privileged sessions shall be recorded via the PAM platform and retained for a minimum of [e.g., 12 months] in accordance with [Organization Name]'s log retention policy.
- **Password Rotation Post-Checkout:** Privileged account passwords shall be automatically rotated by the PAM solution upon check-in, or at a minimum every [e.g., 30 days].
- **Prohibition on Shared Credentials:** Privileged accounts must not be shared between individuals. Each administrator must have a uniquely attributed privileged account.
- **Emergency / Break-Glass Accounts:** Emergency access accounts (break-glass) shall have their credentials sealed in [e.g., a physical envelope in a secured location / PAM break-glass vault] with access logged and reviewed by the CISO within [e.g., 24 hours] of any access.

| Privileged Account Category | PAM Managed | Rotation Frequency | Session Recording | MFA Required |
|---|:---:|---|:---:|:---:|
| Domain / Enterprise Admins | Yes | [Auto on check-in] | Yes | Yes |
| Local Admin Accounts (LAPS) | Yes | [Auto — LAPS policy] | Yes | Yes |
| Linux Root / Sudo Accounts | Yes | [Auto on check-in] | Yes | Yes |
| Database Superuser Accounts | Yes | [e.g., 30 days] | Yes | Yes |
| Network Device Enable Accounts | Yes | [e.g., 30 days] | Yes | Yes |
| Cloud IAM Admin Roles | Yes | [e.g., JIT / Session-based] | Yes | Yes |
| Break-Glass Emergency Accounts | Yes | [Post-use, immediate] | Yes | Yes |

### 4.7 Service and System Account Password Controls

*Service accounts represent a significant attack surface as they often have elevated privileges and are long-lived. Authors should document controls to ensure these accounts are secured.*

**Policy Statement:** Service accounts and system accounts used for application-to-application or machine-to-machine authentication shall adhere to the following controls:

- **Inventory:** A complete inventory of all service and system accounts shall be maintained in [Organization Name]'s [CMDB / IAM system / PAM vault] and reviewed on a [quarterly / annual] basis.
- **Password Complexity:** Service account passwords shall be a minimum of [e.g., 20] characters and randomly generated.
- **No Interactive Login:** Service accounts shall be configured to prohibit interactive login where technically feasible.
- **Principle of Least Privilege:** Service accounts shall be granted only the minimum permissions required for their intended function.
- **Secret Management:** Application secrets, API keys, and service account credentials shall be stored in an approved secrets management solution: **[Secrets Manager Name, e.g., HashiCorp Vault, AWS Secrets Manager, Azure Key Vault]** and shall not be embedded in source code or configuration files.

| Service Account Category | Inventory Maintained | PAM / Secrets Manager | Rotation Frequency | Interactive Login Disabled |
|---|:---:|---|---|:---:|
| Windows Service Accounts | Yes | [PAM / gMSA] | [Auto via gMSA / PAM] | Yes |
| Linux System Accounts | Yes | [PAM / Vault] | [e.g., 90 days] | Yes |
| Application Service Accounts | Yes | [Secrets Manager] | [e.g., 90 days / on-rotation] | Yes |
| Database Service Accounts | Yes | [PAM / Vault] | [e.g., 90 days] | Yes |
| API Keys / Tokens | Yes | [Secrets Manager] | [e.g., Annual / on-rotation] | N/A |

### 4.8 Default Password Management

**Policy Statement:** Default manufacturer, vendor, or application passwords shall be changed prior to deployment of any system, device, or application into any [Organization Name] environment.

- No system, device, or application shall be placed into production with a default password.
- System hardening checklists (referenced in Appendix B) shall include verification that default credentials have been changed.
- Scanning tools shall be used during the vulnerability assessment process to detect the presence of default credentials.
- Any instance of a default password discovered post-deployment shall be treated as a security incident and escalated per the Incident Response Plan ([ORG-IRP-001]).

### 4.9 Password Transmission and Storage

**Policy Statement:** [Organization Name] shall ensure that passwords are transmitted and stored securely to prevent interception or disclosure:

| Requirement | Applicable Control |
|---|---|
| Passwords shall never be transmitted in cleartext | TLS 1.2 minimum (TLS 1.3 preferred) for all authentication traffic |
| Passwords shall never be stored in plaintext | All passwords stored as salted cryptographic hashes |
| Approved hashing algorithms for password storage | [e.g., bcrypt, scrypt, Argon2, PBKDF2 with minimum iteration count] |
| Deprecated / prohibited algorithms | MD5, SHA-1, unsalted SHA-256 — prohibited for password hashing |
| Password disclosure in logs | Strictly prohibited — log scrubbing controls in place |
| Password inclusion in email / messaging | Prohibited — passwords shall be communicated only via approved secure channel |
| Password display in applications | Masked by default; reveal-on-demand permitted for user convenience |

---

## 5. Technical Configuration Evidence

*This section is the core of this document as a regulatory evidence artifact. Authors must populate this section with actual, current configuration extracts, screenshots (where applicable), and configuration parameters from each in-scope system. This section directly evidences compliance with RMiT Clause 10.55. All configuration data should reflect the production environment as at the document's effective date.*

### 5.1 Active Directory / Identity Provider Configuration

*Authors should extract and document the current password policy settings from Active Directory Group Policy (or equivalent IdP). Include GPO name, targeted OUs, and the specific settings. Screenshot evidence should be attached in Appendix A.*

**Platform:** [e.g., Microsoft Active Directory — Domain: [domain.organizationname.com]] / [Azure AD / Entra ID] / [Other LDAP-based Directory]

**Configuration Extraction Date:** [Date of Configuration Evidence Collection]

**Extracted By:** [Name, Title]

#### 5.1.1 Default Domain Password Policy (GPO)

| Policy Setting | Configured Value | Required Value | Compliant? |
|---|---|---|---|
| Enforce password history | [e.g., 12 passwords] | ≥ 12 passwords | [Yes / No] |
| Maximum password age | [e.g., 90 days] | ≤ 90 days | [Yes / No] |
| Minimum password age | [e.g., 1 day] | ≥ 1 day | [Yes / No] |
| Minimum password length | [e.g., 12 characters] | ≥ 12 characters | [Yes / No] |
| Password must meet complexity requirements | [Enabled / Disabled] | Enabled | [Yes / No] |
| Store passwords using reversible encryption | [Disabled] | Disabled | [Yes / No] |
| Account lockout threshold | [e.g., 5 invalid attempts] | ≤ 5 invalid attempts | [Yes / No] |
| Account lockout duration | [e.g., 30 minutes] | ≥ 30 minutes | [Yes / No] |
| Reset account lockout counter after | [e.g., 30 minutes] | ≥ 30 minutes | [Yes / No] |

**GPO Name:** [GPO Name]
**GPO GUID:** [{GUID}]
**Linked to OUs:** [List OUs]
**Last GPO Modification:** [Date]
**Configuration Evidence Reference:** [Appendix A — Screenshot A-1]

#### 5.1.2 Fine-Grained Password Policy (PSO) — Privileged Accounts

*Document any Fine-Grained Password Policies (PSOs) applied to privileged user groups. These should enforce stricter controls than the Default Domain Policy.*

| Policy Setting | Configured Value | Required Value | Compliant? |
|---|---|---|---|
| PSO Name | [PSO Name] | N/A | N/A |
| Precedence | [e.g., 10] | Lower = higher precedence | N/A |
| Applied to Group | [e.g., Domain Admins, Privileged Users Group] | — | N/A |
| Enforce password history | [e.g., 24 passwords] | ≥ 24 passwords | [Yes / No] |
| Maximum password age | [e.g., 60 days] | ≤ 60 days | [Yes / No] |
| Minimum password age | [e.g., 1 day] | ≥ 1 day | [Yes / No] |
| Minimum password length | [e.g., 16 characters] | ≥ 16 characters | [Yes / No] |
| Password complexity | [Enabled] | Enabled | [Yes / No] |
| Account lockout threshold | [e.g., 3 invalid attempts] | ≤ 3 invalid attempts | [Yes / No] |
| Lockout duration | [e.g., Manual unlock] | Manual unlock required | [Yes / No] |

**Configuration Evidence Reference:** [Appendix A — Screenshot A-2]

### 5.2 Operating System Password Policies

*Document password policy configurations for all major operating system categories. Where Group Policy enforces standards, this may reference the AD configuration above with addendum for local policy verification on standalone systems.*

#### 5.2.1 Windows Server Endpoints

| Configuration Parameter | Setting | Verified On | Evidence Reference |
|---|---|---|---|
| Enforce via Domain GPO | [Yes / No — Standalone] | [System Name / All Domain Members] | [Appendix A — A-3] |
| Local Security Policy — Password History | [N/A — GPO enforced] | [Date verified] | [Appendix A — A-3] |
| Screen Saver Lock Timeout | [e.g., 15 minutes] | [Date verified] | [Appendix A — A-4] |
| Interactive Logon: Require Smart Card | [Enabled for PAM] | [Date verified] | [Appendix A — A-4] |

#### 5.2.2 Linux / UNIX Systems

*Authors should document PAM (Pluggable Authentication Modules) configurations and /etc/login.defs settings for Linux systems. Include configuration file excerpts.*

**Configuration File:** `/etc/login.defs` — Key Parameters:

```
PASS_MAX_DAYS   [e.g., 90]
PASS_MIN_DAYS   [e.g., 1]
PASS_MIN_LEN    [e.g., 12]
PASS_WARN_AGE   [e.g., 14]
LOGIN_RETRIES   [e.g., 5]
LOGIN_TIMEOUT   [e.g., 60]
```

**PAM Configuration** (`/etc/pam.d/common-password` or equivalent):

```
[Paste relevant PAM configuration lines here, e.g.:]
password    requisite   pam_pwquality.so retry=3 minlen=12 ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1 reject_username enforce_for_root
password    required    pam_pwhistory.so remember=12 use_authtok
password    [success=1 default=ignore]  pam_unix.so obscure use_authtok try_first_pass sha512 rounds=65536
```

**Configuration Extraction Method:** [e.g., Ansible configuration management pull / Manual extraction by [Name]]
**Extraction Date:** [Date]
**Evidence Reference:** [Appendix A — A-5]

| Linux Parameter | Configured Value | Required Value | Compliant? |
|---|---|---|---|
| PASS_MAX_DAYS | [Value] | ≤ 90 | [Yes / No] |
| PASS_MIN_DAYS | [Value] | ≥ 1 | [Yes / No] |
| PASS_MIN_LEN | [Value] | ≥ 12 | [Yes / No] |
| pwquality — minlen | [Value] | ≥ 12 | [Yes / No] |
| pwquality — ucredit | [Value] | ≤ -1 (require ≥ 1 uppercase) | [Yes / No] |
| pwquality — dcredit | [Value] | ≤ -1 (require ≥ 1 digit) | [Yes / No] |
| pwquality — ocredit | [Value] | ≤ -1 (require ≥ 1 special char) | [Yes / No] |
| pam_faillock — deny | [Value] | ≤ 5 | [Yes / No] |
| pam_faillock — unlock_time | [Value] | ≥ 1800 (30 min) | [Yes / No] |
| pam_pwhistory — remember | [Value] | ≥ 12 | [Yes / No] |

### 5.3 Application-Level Password Configurations

*Authors should document password configuration settings for each key business application. Obtain this information from the application administrators and include screenshots or configuration exports in the appendix.*

#### 5.3.1 Core Banking System

| Application Name | [Core Banking System Name] |
|---|---|
| Vendor | [Vendor Name] |
| Version | [Application Version] |
| Environment | Production |
| Configuration Owner | [Application Owner Name] |
| Evidence Date | [Date] |

| Password Parameter | Configured Value | Required Standard | Compliant? |
|---|---|---|---|
| Minimum Password Length | [Value] | ≥ 12 characters | [Yes / No] |
| Password Complexity Enforcement | [Enabled / Disabled] | Enabled | [Yes / No] |
| Maximum Password Age (days) | [Value] | ≤ 90 days | [Yes / No] |
| Password History | [Value] | ≥ 12 | [Yes / No] |
| Account Lockout Threshold | [Value] | ≤ 5 attempts | [Yes / No] |
| Lockout Duration (minutes) | [Value] | ≥ 30 minutes | [Yes / No] |
| Session Timeout (inactive, minutes) | [Value] | ≤ 15 minutes | [Yes / No] |
| MFA Enabled | [Yes / No] | Yes | [Yes / No] |
| Default Passwords Disabled | [Yes / No] | Yes | [Yes / No] |

**Configuration Evidence Reference:** [Appendix A — A-6]

#### 5.3.2 Internet Banking Platform

| Password Parameter | Configured Value | Required Standard | Compliant? |
|---|---|---|---|
| Minimum Password Length | [Value] | ≥ 8 characters (customer) | [Yes / No] |
| Password Complexity Enforcement | [Enabled / Disabled] | Enabled | [Yes / No] |
| Maximum Password Age (days) | [Value] | As per policy | [Yes / No] |
| Account Lockout Threshold | [Value] | ≤ 5 attempts | [Yes / No] |
| Lockout Duration | [Value] | ≥ 30 minutes | [Yes / No] |
| TAC / OTP MFA | [Enabled / Disabled] | Enabled | [Yes / No] |
| Session Timeout (minutes) | [Value] | ≤ 10 minutes (banking) | [Yes / No] |
| HTTPS / TLS Version | [e.g., TLS 1.3] | TLS 1.2 minimum | [Yes / No] |

**Configuration Evidence Reference:** [Appendix A — A-7]

#### 5.3.3 Additional Applications

*Replicate the table format above for all other in-scope applications. Authors should maintain a complete inventory of applications and ensure each is documented or explicitly excluded with a recorded rationale.*

| Application Name | Vendor | Version | Configuration Summary | Evidence Reference | Compliant? |
|---|---|---|---|---|---|
| [Application Name] | [Vendor] | [Version] | See [Appendix A — A-X] | [Appendix A — A-X] | [Yes / No / Exception] |
| [Application Name] | [Vendor] | [Version] | See [Appendix A — A-X] | [Appendix A — A-X] | [Yes / No / Exception] |
| [Application Name] | [Vendor] | [Version] | See [Appendix A — A-X] | [Appendix A — A-X] | [Yes / No / Exception] |

### 5.4 Database Password Controls

*Authors should document password and authentication configurations for all production database platforms. Coordinate with the Database Administration team to obtain current settings.*

| Database Platform | Instance Name | Authentication Method | Min Password Length | Password Expiry | Lockout Threshold | PAM Managed | Compliant? |
|---|---|---|---|---|---|---|---|
| [e.g., Oracle DB] | [Instance] | [DB Auth / AD Auth] | [Value] | [Days] | [Attempts] | [Yes / No] | [Yes / No] |
| [e.g., MS SQL Server] | [Instance] | [SQL Auth / Windows Auth] | [Value] | [Days] | [Attempts] | [Yes / No] | [Yes / No] |
| [e.g., PostgreSQL] | [Instance] | [md5 / scram-sha-256] | [Value] | [Days] | [Attempts] | [Yes / No] | [Yes / No] |
| [e.g., MySQL/MariaDB] | [Instance] | [Native / PAM / LDAP] | [Value] | [Days] | [Attempts] | [Yes / No] | [Yes / No] |

**Evidence Reference:** [Appendix A — A-8 through A-X]

### 5.5 Network Device Password Controls

*Authors should document password configurations on network infrastructure devices. Configuration extracts should be sanitized (passwords and sensitive keys redacted) before inclusion in this document.*

| Device Category | Platform / OS | Configuration Standard | Authentication Method | Compliant? | Evidence Reference |
|---|---|---|---|---|---|
| Core Switches | [e.g., Cisco IOS-XE] | [CIS Benchmark / Internal Hardening Std] | [Local + TACACS+ / RADIUS] | [Yes / No] | [Appendix A — A-X] |
| Perimeter Firewalls | [e.g., Palo Alto PAN-OS] | [CIS Benchmark / Vendor Hardening Std] | [Local + LDAP / RADIUS] | [Yes / No] | [Appendix A — A-X] |
| VPN Gateway | [e.g., Cisco ASA / Fortinet] | [Internal Hardening Std] | [Local + RADIUS + MFA] | [Yes / No] | [Appendix A — A-X] |
| Wireless Controllers | [e.g., Cisco WLC] | [Internal Hardening Std] | [RADIUS + 802.1X] | [Yes / No] | [Appendix A — A-X] |
| Out-of-Band Management | [e.g., iDRAC, iLO, IPMI] | [Internal Hardening Std] | [Local + LDAP] | [Yes / No] | [Appendix A — A-X] |

**Sanitized Configuration Extract (example — Cisco IOS):**

```
! [Device Name] — [Device Role] — Configuration Extract as at [Date]
! Extracted by: [Name], [Title]
! SENSITIVE DATA REDACTED

service password-encryption
security passwords min-length [e.g., 12]
!
aaa new-model
aaa authentication login default group tacacs+ local
aaa authorization exec default group tacacs+ if-authenticated
!
login block-for [e.g., 300] attempts [e.g., 5] within [e.g., 120]
login on-failure log
login on-success log
!
username [ADMIN-USERNAME-REDACTED] privilege 15 algorithm-type scrypt secret [REDACTED]
```

---

## 6. Exceptions and Escalation Process

### 6.1 Exception Policy

*Authors should describe the process for requesting and approving deviations from this password policy. All exceptions must be documented, risk-assessed, and time-limited. This section demonstrates to auditors that the organization has a mature exception management process rather than simply being non-compliant.*

**Policy Statement:** [Organization Name] recognizes that in limited circumstances, strict adherence to password policy requirements may not be technically feasible for specific legacy systems or may impose disproportionate operational impact. In such cases, a formal exception process must be followed.

**Exception Principles:**
- No exception is granted indefinitely. All exceptions are time-limited to a maximum of [e.g., 12 months] and subject to annual renewal.
- Exceptions must be accompanied by documented compensating controls that mitigate the risk introduced by the exception.
- All exceptions require approval at the CISO level at minimum, and for material exceptions, approval from the [Chief Risk Officer / Board Risk Committee].
- Exceptions must be reviewed and re-approved annually in conjunction with this document's annual review.

### 6.2 Exception Request Process

*Authors should document the step-by-step process for obtaining a policy exception. This should reference the organization's formal exception management system or workflow.*

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | Identify the specific policy requirement that cannot be met and document the technical or operational constraint | System/Application Owner | Prior to deployment / upon discovery |
| 2 | Complete the Password Policy Exception Request Form (Appendix C) | System/Application Owner | Prior to exception effective date |
| 3 | Document proposed compensating controls and residual risk assessment | System/Application Owner + InfoSec Team | Within [e.g., 5 business days] |
| 4 | Review exception request and compensating controls | CISO / Head of InfoSec | Within [e.g., 5 business days] of submission |
| 5 | Escalate to [CRO / Risk Committee] if risk rating is High or Critical | CISO | As required |
| 6 | Communicate approval or rejection to requestor | CISO | Within [e.g., 2 business days] of decision |
| 7 | Register approved exception in the Exception Register (Appendix C) | Compliance Officer | Upon approval |
| 8 | Implement and verify compensating controls | System/Application Owner + InfoSec | Within [e.g., 10 business days] of approval |
| 9 | Monitor exception and compensating control effectiveness | InfoSec Team | Ongoing — per monitoring schedule |
| 10 | Review exception at annual policy review or earlier if risk profile changes | CISO + Compliance Officer | Annual |

### 6.3 Current Exception Register

*Authors should maintain a live register of all approved exceptions here. This provides immediate visibility for auditors and reviewers.*

| Exception ID | System / Scope | Policy Requirement Waived | Business Justification | Compensating Controls | Risk Rating | Approval Date | Approved By | Expiry Date | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| [EXC-2024-001] | [System Name] | [Specific policy clause e.g., Clause 4.1 — Min 12-char password] | [e.g., Legacy system — vendor does not support > 8 char passwords. Replacement scheduled Q3 2025.] | [e.g., Network segmentation, enhanced monitoring, PAM jump server required, session recording] | [High / Medium / Low] | [Date] | [CISO Name] | [Date] | [Date] | [Active / Expired / Under Review] |
| [EXC-2024-002] | [System Name] | [Specific policy clause] | [Justification] | [Compensating controls] | [Risk Rating] | [Date] | [Approver Name] | [Date] | [Date] | [Status] |

### 6.4 Escalation Path

*Authors should document the escalation path for security incidents related to password policy breaches or suspected credential compromise.*

| Scenario | Immediate Action | Primary Escalation | Secondary Escalation | Timeframe |
|---|---|---|---|---|
| Suspected password compromise | Lock affected account(s) | CISO | CRO / Incident Response Team | Immediate |
| Confirmed unauthorized access via credentials | Isolate affected systems, lock accounts | CISO → Incident Response | MD / CEO if material | Immediate |
| Discovery of default / weak credentials | Remediate immediately | CISO | System Owner | Within 24 hours |
| Policy non-compliance identified in audit | Develop remediation plan | System/App Owner | CISO | Within [e.g., 5 business days] |
| Exception process breach (unauthorized deviation) | Document and escalate | CISO | CRO | Within [e.g., 24 hours] |

---

## 7. Compliance and Enforcement

### 7.1 Compliance Obligations

This policy is mandatory for all users and systems within its defined scope. Compliance is not optional.

- **Regulatory Obligation:** Non-compliance with the password controls documented herein may constitute a breach of [Organization Name]'s obligations under the BNM RMiT Policy Document, the Financial Services Act 2013 (FSA), and/or the Islamic Financial Services Act 2013 (IFSA). BNM may impose supervisory actions, financial penalties, or other regulatory sanctions on the institution for material non-compliance.
- **Internal Obligation:** Employees, contractors, and third parties who are subject to this policy must adhere to its requirements as a condition of their engagement with [Organization Name]. Breaches are subject to disciplinary or contractual action as outlined below.

### 7.2 Enforcement and Consequences

*Authors should document the consequences of non-compliance. This section should be reviewed against the organization's HR policies and legal counsel to ensure it is consistent with applicable employment law.*

| Actor | Breach Category | Potential Consequence |
|---|---|---|
| Employee | Inadvertent policy violation (e.g., password sharing) | Mandatory re-training, formal warning |
| Employee | Deliberate policy violation | Disciplinary action up to and including termination of employment |
| Employee | Policy violation resulting in security incident | Disciplinary action, potential civil or criminal liability |
| Contractor / Third Party | Policy violation | Contractual breach proceedings, access revocation, contract termination |
| System / Application Owner | Failure to implement required configuration | Escalation to CISO and CRO, mandatory remediation with deadline |

### 7.3 Technical Enforcement Mechanisms

*Authors should describe the technical controls that make this policy technically enforced rather than merely aspirational. Evidence of technical enforcement is critical for regulatory examination.*

[Organization Name] relies on the following technical mechanisms to enforce password policy compliance, reducing reliance on user behaviour:

| Control Mechanism | Platform | Enforces Which Policy Requirements | Automated? |
|---|---|---|---|
| Active Directory Group Policy / PSO | Microsoft AD | Password length, complexity, history, age, lockout | Yes |
| Azure AD / Entra ID Password Protection | Azure AD | Banned password lists, smart lockout | Yes |
| Privileged Access Management (PAM) | [PAM Platform] | Privileged account checkout, session recording, rotation | Yes |
| Secrets Management | [Secrets Manager] | Service account credential management, rotation | Yes |
| Linux PAM (pam_pwquality, pam_faillock) | Linux Servers | Password quality, lockout | Yes |
| SIEM Alerting | [SIEM Platform] | Detection and alerting on policy violations | Yes |
| Vulnerability Scanning | [Scanner Tool] | Detection of default credentials, weak configurations | Scheduled |
| Configuration Management (IaC / Ansible / SCCM) | [CM Tool] | Automated enforcement of OS password policies | Yes |
| Web Application Firewall (WAF) | [WAF Platform] | Detection of credential stuffing attempts | Yes |

---

## 8. Monitoring and Audit

### 8.1 Continuous Monitoring

*Authors should document what ongoing monitoring is in place to detect password policy violations and credential-based attacks. Evidence of monitoring capability is an important element of regulatory examination.*

[Organization Name] maintains the following monitoring controls to provide ongoing assurance of password policy compliance:

| Monitoring Activity | Tool / Platform | Frequency | Alert Threshold | Responsible Team |
|---|---|---|---|---|
| Failed authentication attempt monitoring | [SIEM Platform] | Real-time | [e.g., 5 failures in 10 min] | InfoSec / SOC |
| Account lockout event monitoring | [SIEM Platform] | Real-time | Any lockout on privileged accounts | InfoSec / SOC |
| Password policy configuration drift detection | [SIEM / CM Tool] | [Daily / Weekly] | Any deviation from baseline | InfoSec / Infrastructure |
| Default credential scanning | [Vulnerability Scanner] | [Weekly / Monthly] | Any detection | InfoSec |
| Privileged account activity monitoring | [PAM Platform / SIEM] | Real-time | Any anomalous privileged access | InfoSec / SOC |
| Service account credential expiry monitoring | [PAM / Secrets Manager] | Real-time | Credentials within [e.g., 14 days] of expiry | IAM Team |
| Breached credential monitoring | [e.g., HaveIBeenPwned API / Threat Intel Feed] | [Daily / Weekly] | Any match on organizational email domain | InfoSec |

### 8.2 Compliance Verification Schedule

| Verification Activity | Frequency | Performed By | Last Completed | Next Due | Evidence Stored In |
|---|---|---|---|---|---|
| AD Password Policy Configuration Review | Annual (+ post-change) | IAM Team | [Date] | [Date] | [Document Repository] |
| Linux PAM Configuration Review | Annual (+ post-change) | Infrastructure Team | [Date] | [Date] | [Document Repository] |
| Application Password Configuration Review | Annual | Application Owners | [Date] | [Date] | [Document Repository] |
| Database Password Configuration Review | Annual | DBA Team | [Date] | [Date] | [Document Repository] |
| Privileged Account Audit (PAM) | Quarterly | IAM / InfoSec Team | [Date] | [Date] | [Document Repository] |
| Service Account Inventory Review | Quarterly | IAM Team | [Date] | [Date] | [Document Repository] |
| Exception Register Review | Annual | CISO / Compliance | [Date] | [Date] | [Document Repository] |
| Penetration Testing — Authentication Controls | Annual | [Internal / Third-Party Penetration Tester] | [Date] | [Date] | [Document Repository] |
| Internal Audit — Password Controls | Annual | Internal Audit | [Date] | [Date] | [Document Repository] |

### 8.3 Key Risk Indicators (KRIs)

*Authors should define measurable KRIs that provide early warning of deteriorating password control effectiveness.*

| KRI | Measurement | Threshold (Amber) | Threshold (Red) | Reporting Frequency | Reported To |
|---|---|---|---|---|---|
| % Accounts with Expired Passwords | Count of expired accounts / total accounts | > 2% | > 5% | Monthly | CISO |
| Number of Privileged Account Lockouts | Absolute count | > 2 per week | > 5 per week | Weekly | CISO |
| Number of Active Policy Exceptions | Absolute count | > 5 | > 10 | Monthly | CISO / CRO |
| Number of Overdue Exception Reviews | Absolute count | > 1 | > 3 | Monthly | CISO |
| Time to Remediate Non-Compliant Configurations | Days from detection to closure | > 14 days | > 30 days | Monthly | CISO |
| % Service Accounts Outside PAM/Vault Management | % of service accounts not in PAM | > 5% | > 10% | Quarterly | CISO |
| Credential-Based Security Incidents | Count of confirmed incidents | > 1 per quarter | > 3 per quarter | Monthly | CISO / Board |

---

## 9. Review and Approval History

### 9.1 Version History

*Authors must maintain a complete version history for this document. This provides an audit trail of all changes and the individuals responsible.*

| Version | Date | Author | Reviewed By | Change Description |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name, Title] | [Reviewer Name, Title] | Initial draft created |
| 0.2 | [Date] | [Author Name, Title] | [Reviewer Name, Title] | Incorporated review comments from [Reviewer Name] |
| 0.3 | [Date] | [Author Name, Title] | [Reviewer Name, Title] | Added technical configuration evidence — Sections 5.1–5.5 |
| 1.0 | [Date] | [Author Name, Title] | [CISO Name, CISO] | First approved version for production use |
| [Version] | [Date] | [Author Name, Title] | [Reviewer Name, Title] | [Description of changes — e.g., Annual review — updated configuration evidence, added EXC-2025-001] |

### 9.2 Scheduled Review

This document is subject to mandatory review:
- **Annually**, no later than [Month] of each calendar year, to align with [Organization Name]'s annual technology risk review cycle.
- **Upon material change** to any in-scope system's authentication configuration.
- **Following any security incident** involving credential compromise or authentication bypass.
- **Upon issuance or revision** of BNM RMiT or related regulatory guidance affecting authentication controls.

### 9.3 Approval Sign-Off

*All approvers must sign and date this table to indicate their review and approval of the current version of this document.*

| Role | Name | Signature | Date of Approval |
|---|---|---|---|
| Author | [Author Name, Title, Department] | _________________ | [Date] |
| Reviewed By — Information Security | [Reviewer Name, Title] | _________________ | [Date] |
| Reviewed By — IT Infrastructure | [Reviewer Name, Title] | _________________ | [Date] |
| Reviewed By — Internal Audit | [Reviewer Name, Title] | _________________ | [Date] |
| Reviewed By — Compliance | [Reviewer Name, Title] | _________________ | [Date] |
| Approved By — CISO | [CISO Name, Chief Information Security Officer] | _________________ | [Date] |
| Approved By — CRO (if applicable) | [CRO Name, Chief Risk Officer] | _________________ | [Date] |

---

## 10. References

*This section provides a consolidated reference list of all regulatory instruments, standards, and internal documents cited in this policy. This establishes the document's regulatory traceability chain.*

### 10.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clause(s) | Version / Date |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 10.55 | [Policy Document date — verify current version from BNM website] |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Enabling legislation for BNM oversight | 2013 |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | Enabling legislation for BNM oversight | 2013 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Data security obligations | 2010 |
| NACSA CF | National Cybersecurity Framework | NACSA | CII security baseline | [Current version] |

### 10.2 Industry Standards

| Standard | Title | Relevant Section(s) |
|---|---|---|
| NIST SP 800-63B | Digital Identity Guidelines — Authentication and Lifecycle Management | Section 5 — Authenticator and Verifier Requirements |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A Control 8.5 — Secure Authentication |
| ISO/IEC 27002:2022 | Information Security Controls | Control 8.5 — Secure Authentication |
| CIS Controls v8 | Center for Internet Security Controls | Control 5 — Account Management |
| OWASP ASVS | Application Security Verification Standard | Section 2 — Authentication |
| OWASP Authentication Cheat Sheet | Authentication Best Practices | Full document |

### 10.3 Internal Policy References

| Document ID | Title | Version |
|---|---|---|
| [ORG-SEC-POL-001] | Information Security Policy | [Version] |
| [ORG-IAM-POL-001] | Identity and Access Management Policy | [Version] |
| [ORG-PAM-POL-001] | Privileged Access Management Policy | [Version] |
| [ORG-TRMF-001] | Technology Risk Management Framework | [Version] |
| [ORG-AUP-001] | Acceptable Use Policy | [Version] |
| [ORG-IRP-001] | Incident Response Plan | [Version] |
| [ORG-VND-POL-001] | Vendor and Third-Party Access Policy | [Version] |
| [ORG-LOG-001] | Log Management and Retention Policy | [Version] |
| [ORG-CHG-001] | Change Management Policy | [Version] |

---

## 11. Appendices

### Appendix A — Configuration Evidence Screenshots and Extracts

*Authors must attach or reference all configuration evidence screenshots, exports, and extracts in this appendix. Each piece of evidence should be labelled with a reference number that corresponds to the in-text references in Section 5. Evidence should include date of capture and the name of the person who captured the evidence.*

| Evidence Reference | Description | System | Captured By | Capture Date | Location |
|---|---|---|---|---|---|
| A-1 | Active Directory Default Domain Password Policy — GPO Settings | Active Directory | [Name] | [Date] | [Attached / SharePoint link] |
| A-2 | Fine-Grained Password Policy (PSO) — Privileged Users | Active Directory | [Name] | [Date] | [Attached / SharePoint link] |
| A-3 | Windows Server Local Security Policy — Password Section | [Server Name / "All AD members"] | [Name] | [Date] | [Attached / SharePoint link] |
| A-4 | Windows Workstation Screen Lock Policy | [GPO Name / Endpoints] | [Name] | [Date] | [Attached / SharePoint link] |
| A-5 | Linux PAM Configuration — /etc/pam.d and /etc/login.defs | [Server Name / "All Linux servers"] | [Name] | [Date] | [Attached / SharePoint link] |
| A-6 | Core Banking System — Password Configuration Settings | [Core Banking System Name] | [Name] | [Date] | [Attached / SharePoint link] |
| A-7 | Internet Banking Platform — Authentication Configuration | [Internet Banking Platform Name] | [Name] | [Date] | [Attached / SharePoint link] |
| A-8 | Oracle Database — Password Profile Configuration | [DB Instance Name] | [Name] | [Date] | [Attached / SharePoint link] |
| A-9 | MS SQL Server — Password Policy Settings | [DB Instance Name] | [Name] | [Date] | [Attached / SharePoint link] |
| A-10 | PAM Platform — Password Policy and Rotation Configuration | [PAM Platform Name] | [Name] | [Date] | [Attached / SharePoint link] |
| A-11 | Network Device — Sanitized Configuration Extract | [Device Name / Category] | [Name] | [Date] | [Attached / SharePoint link] |
| A-12 | SIEM — Password Policy Monitoring Dashboard | [SIEM Platform] | [Name] | [Date] | [Attached / SharePoint link] |
| [A-XX] | [Additional evidence as required] | [System] | [Name] | [Date] | [Location] |

---

### Appendix B — System Hardening Standards Reference

*Authors should list the hardening baselines and benchmarks applied to in-scope systems. These standards inform the password configuration requirements and demonstrate a risk-based, benchmark-driven configuration management approach.*

| System Category | Hardening Standard / Benchmark | Version Applied | Maintained By | Last Review Date |
|---|---|---|---|---|
| Windows Server | CIS Microsoft Windows Server Benchmark | [Version] | [Infrastructure Team] | [Date] |
| Linux (RHEL/Ubuntu) | CIS Linux Benchmark | [Version] | [Infrastructure Team] | [Date] |
| Cisco IOS / NX-OS | CIS Cisco IOS Benchmark | [Version] | [Network Team] | [Date] |
| Palo Alto PAN-OS | Palo Alto Security Best Practices / CIS | [Version] | [Network Team] | [Date] |
| Microsoft SQL Server | CIS MS SQL Server Benchmark | [Version] | [DBA Team] | [Date] |
| Oracle Database | CIS Oracle Database Benchmark | [Version] | [DBA Team] | [Date] |
| AWS | CIS AWS Foundations Benchmark | [Version] | [Cloud Team] | [Date] |
| Azure | CIS Microsoft Azure Foundations Benchmark | [Version] | [Cloud Team] | [Date] |
| [Additional Platform] | [Benchmark Name] | [Version] | [Team] | [Date] |

---

### Appendix C — Password Policy Exception Request Form and Register

*Authors should maintain a blank Exception Request Form template below for use by system owners. Completed and approved forms should be filed in [Organization Name]'s document management system and the summary register in Section 6.3 updated.*

#### C.1 Exception Request Form Template

---

**PASSWORD POLICY EXCEPTION REQUEST**

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-assigned by Compliance upon submission] |
| **Date of Request** | [Date] |
| **Requestor Name** | [Name] |
| **Requestor Title** | [Title] |
| **Requestor Department** | [Department] |
| **System / Application Name** | [Name] |
| **System Owner** | [Name] |
| **Policy Clause(s) Requiring Exception** | [e.g., Section 4.1.1 — Minimum 12-character password length] |
| **Current Configuration (Non-Compliant Value)** | [e.g., System only supports 8-character maximum password length] |
| **Required Configuration (Compliant Value)** | [e.g., 12-character minimum password length] |
| **Reason Compliance Cannot Be Achieved** | [Detail the technical or contractual constraint preventing compliance] |
| **Business Impact of Non-Exception** | [Detail what would happen if the exception is not granted] |
| **Proposed Compensating Controls** | [List specific, measurable compensating controls that mitigate the residual risk] |
| **Residual Risk Assessment** | [High / Medium / Low — with brief justification] |
| **Proposed Exception Expiry Date** | [Date — maximum 12 months from approval] |
| **Remediation Plan** | [Describe the plan to achieve compliance before expiry, including target date and key milestones] |
| **Requestor Signature** | _________________ |
| **Date** | [Date] |

---

**REVIEW AND APPROVAL**

| Reviewer | Name | Decision | Conditions Attached | Signature | Date |
|---|---|---|---|---|---|
| InfoSec Review | [CISO / Head of InfoSec] | [Approved / Rejected] | [Yes / No — detail] | _________________ | [Date] |
| CRO Review (if High Risk) | [CRO Name] | [Approved / Rejected] | [Yes / No — detail] | _________________ | [Date] |

---

### Appendix D — Password Policy Compliance Checklist

*Authors and system administrators should use this checklist during annual review to verify compliance across all in-scope systems.*

| # | Control Requirement | Verification Method | Result | Date Verified | Verified By | Notes |
|---|---|---|---|---|---|---|
| 1 | AD Default Domain Password Policy meets minimum standards (Section 4.1.1) | GPO review + GPRESULT output | [Pass / Fail / N/A] | [Date] | [Name] | |
| 2 | Privileged account PSO configured and applied (Section 4.1.2) | AD PSO review | [Pass / Fail / N/A] | [Date] | [Name] | |
| 3 | Password expiry enforced for all account types (Section 4.2) | AD / System review | [Pass / Fail / N/A] | [Date] | [Name] | |
| 4 | Account lockout policy configured on all platforms (Section 4.3) | Per-system verification | [Pass / Fail / N/A] | [Date] | [Name] | |
| 5 | Password history enforced on all platforms (Section 4.4) | Per-system verification | [Pass / Fail / N/A] | [Date] | [Name] | |
| 6 | MFA enabled for all mandatory access scenarios (Section 4.5) | Per-system / IdP verification | [Pass / Fail / N/A] | [Date] | [Name] | |
| 7 | All privileged accounts managed via PAM (Section 4.6) | PAM platform account inventory | [Pass / Fail / N/A] | [Date] | [Name] | |
| 8 | Service account inventory complete and up to date (Section 4.7) | IAM/CMDB review | [Pass / Fail / N/A] | [Date] | [Name] | |
| 9 | No default credentials present on in-scope systems (Section 4.8) | Vulnerability scan results | [Pass / Fail / N/A] | [Date] | [Name] | |
| 10 | Passwords transmitted only over TLS 1.2+ (Section 4.9) | Network scan / App review | [Pass / Fail / N/A] | [Date] | [Name] | |
| 11 | All approved exceptions within valid period and compensating controls verified (Section 6.3) | Exception register review | [Pass / Fail / N/A] | [Date] | [Name] | |
| 12 | SIEM monitoring rules for authentication events active (Section 8.1) | SIEM rule review | [Pass / Fail / N/A] | [Date] | [Name] | |
| 13 | KRI metrics within acceptable thresholds (Section 8.3) | KRI dashboard review | [Pass / Fail / N/A] | [Date] | [Name] | |
| 14 | Document version history and approvals current (Section 9) | Document review | [Pass / Fail / N/A] | [Date] | [Name] | |

**Overall Compliance Status:** [Compliant / Non-Compliant — Remediation Required / Compliant with Approved Exceptions]

**Checklist Completed By:** [Name, Title]

**Date:** [Date]

**Reviewed By (CISO):** [Name]

---

*End of Document*

---

| **Document Control** | |
|---|---|
| Document Title | Password Policy Configuration |
| Document ID | [ORG-RMIT-SEC-001] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | [Head of Information Security / CISO] |
| Last Review Date | [Last Review Date] |
| Next Review Date | [Next Review Date] |
| Approved By | [Approved By — Name and Title] |

*This document is subject to [Organization Name]'s document management and retention policy. The master copy is maintained in [Document Repository Name]. Printed copies are uncontrolled — verify currency against the master copy before use.*