# Remote Access Security Policy

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

> **Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. If received in error, please notify the document owner immediately and destroy all copies.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Basis and References](#3-regulatory-basis-and-references)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
   - 6.1 [General Remote Access Principles](#61-general-remote-access-principles)
   - 6.2 [Authentication and Access Controls](#62-authentication-and-access-controls)
   - 6.3 [Approved Remote Access Methods](#63-approved-remote-access-methods)
   - 6.4 [Endpoint Security Requirements](#64-endpoint-security-requirements)
   - 6.5 [Network Security Controls](#65-network-security-controls)
   - 6.6 [Data Protection and Handling](#66-data-protection-and-handling)
   - 6.7 [Third-Party and Vendor Remote Access](#67-third-party-and-vendor-remote-access)
   - 6.8 [Privileged Remote Access](#68-privileged-remote-access)
   - 6.9 [Monitoring and Logging](#69-monitoring-and-logging)
   - 6.10 [Incident Response for Remote Access](#610-incident-response-for-remote-access)
7. [Exceptions and Escalation Process](#7-exceptions-and-escalation-process)
8. [Compliance and Enforcement](#8-compliance-and-enforcement)
9. [Training and Awareness](#9-training-and-awareness)
10. [Review and Approval History](#10-review-and-approval-history)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose

*This section defines the intent of the policy. Clearly articulate why remote access controls are necessary and what risk or regulatory obligation this policy addresses.*

This Remote Access Security Policy establishes the security requirements, controls, and obligations governing remote access to [Organization Name]'s information systems, networks, corporate resources, and data assets. The policy ensures that remote connectivity is granted, managed, and monitored in a secure and controlled manner, commensurate with the associated risk and the sensitivity of the resources being accessed.

Remote access introduces unique security risks including exposure to untrusted networks, endpoint compromise, credential theft, and data leakage. [Organization Name] recognises that effective management of remote access is a critical component of its overall information security posture and a regulatory obligation under Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document.

The objectives of this policy are to:

- Ensure that remote access to [Organization Name]'s systems and data is granted only to authorised individuals using approved methods.
- Protect the confidentiality, integrity, and availability of corporate information assets when accessed remotely.
- Establish baseline security controls for all remote access sessions regardless of access method, device type, or user category.
- Define accountability and responsibilities for the governance of remote access.
- Support compliance with BNM RMiT requirements, particularly Clause 10.41, and other applicable regulatory obligations.
- Provide a framework for the detection, response, and reporting of remote access-related security incidents.

---

## 2. Scope

*Define clearly who and what is covered by this policy. Scope statements should be unambiguous and auditable. Include organisational units, systems, user types, and any explicit exclusions.*

### 2.1 Applicability

This policy applies to:

**Persons:**
- All permanent employees of [Organization Name] who access corporate systems remotely.
- Contract staff, consultants, and temporary workers engaged by [Organization Name].
- Third-party vendors, managed service providers (MSPs), and technology partners who are granted remote access to [Organization Name]'s systems.
- Board members and senior management accessing corporate resources from outside the office premises.
- Any other individual who accesses [Organization Name]'s internal network, systems, or data from outside the organisation's physically secured perimeter.

**Systems and Resources:**
- All systems, servers, applications, databases, and network infrastructure owned or operated by [Organization Name].
- Cloud-hosted platforms and Software-as-a-Service (SaaS) applications accessed via remote connections.
- Data classified as Internal, Confidential, or Restricted, regardless of where it resides.
- [Organization Name]'s corporate Virtual Private Network (VPN) infrastructure and remote desktop environments.
- Development, testing, staging, and production environments accessible via remote connections.

**Devices:**
- [Organization Name]-issued laptops, mobile devices, and workstations used for remote access.
- Personally-owned (BYOD) devices used to access corporate resources, where permitted under separate BYOD policy.
- Third-party devices used by vendors or contractors for remote access.

### 2.2 Exclusions

The following are explicitly excluded from the scope of this policy:

- Physical access to [Organization Name] premises (governed by the Physical Security Policy).
- Internal network access from within [Organization Name]'s secured office locations.
- [Any other specific exclusions relevant to the organisation, e.g., specific isolated test environments].

### 2.3 Geographic Scope

This policy applies globally to all [Organization Name] operations, subsidiaries, and joint ventures where [Organization Name] has management authority over technology infrastructure. Where local laws impose stricter requirements, the more stringent requirement shall apply.

---

## 3. Regulatory Basis and References

*List the specific regulatory obligations that necessitate this policy. For each clause, provide a brief description of the requirement it imposes. This demonstrates regulatory traceability to auditors.*

This policy is issued in accordance with and to satisfy the requirements of the following regulatory frameworks and standards:

| Regulatory Instrument | Issuing Authority | Relevant Clause(s) | Requirement Summary |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 10.41 | Financial institutions must implement security controls for remote access, including strong authentication, encryption, and monitoring of remote sessions. |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Sections 9, 10 | Security standards and retention requirements for personal data accessed remotely. |
| [ISO/IEC 27001:2022] | [ISO] | A.8.20, A.8.21 | Controls for network security and security of network services. |
| [Payment Card Industry Data Security Standard (PCI-DSS)] | [PCI Security Standards Council] | [Requirement 8, 12] | Requirements for identification, authentication, and remote access controls where cardholder data is accessible. |
| [Any other applicable regulation or standard] | [Issuing Authority] | [Clause Reference] | [Brief summary] |

### 3.1 BNM RMiT Clause 10.41 — Key Requirements

BNM RMiT Clause 10.41 specifically mandates that [Organization Name] shall:

- Implement controls to ensure that only authorised users and devices can establish remote connections to internal systems.
- Deploy multi-factor authentication (MFA) for all remote access sessions.
- Encrypt all remote access communications to protect data in transit.
- Maintain audit logs of all remote access activity, including session initiation, duration, and actions performed.
- Conduct periodic reviews of remote access rights to ensure continued appropriateness.
- Establish procedures to immediately revoke remote access upon termination of employment or contract.

---

## 4. Definitions and Terminology

*Define all technical and regulatory terms used in this policy. This is critical for consistent interpretation and application of policy requirements across the organisation.*

| Term | Definition |
|---|---|
| **Remote Access** | The ability to access [Organization Name]'s internal network, systems, or data from outside the organisation's physical premises using a network connection. |
| **VPN (Virtual Private Network)** | A technology that creates an encrypted tunnel over a public network, allowing secure remote access to internal resources. |
| **Multi-Factor Authentication (MFA)** | An authentication method that requires a user to present two or more verification factors (e.g., something they know, have, or are) before access is granted. |
| **Endpoint** | Any computing device (laptop, desktop, mobile, tablet) used to establish a remote access session. |
| **Privileged Access** | Access rights that grant elevated permissions to systems, applications, or data beyond those of a standard user account. |
| **Privileged Access Workstation (PAW)** | A dedicated, hardened computing device used exclusively for privileged remote access activities. |
| **Zero Trust Architecture** | A security model that assumes no implicit trust for any user, device, or network connection and requires continuous verification. |
| **Split Tunnelling** | A configuration that allows remote users to route only certain traffic through the VPN while other traffic exits directly to the internet. |
| **Jump Server / Bastion Host** | A hardened server used as a controlled access point for remote connections to sensitive or critical systems. |
| **Third-Party Remote Access** | Remote access granted to individuals or organisations outside of [Organization Name]'s direct employment. |
| **Session Recording** | The capture and storage of screen activity and keystrokes during a remote access session for audit and forensic purposes. |
| **BYOD (Bring Your Own Device)** | The use of personally-owned computing devices to access [Organization Name]'s corporate resources. |
| **Managed Device** | A computing device owned or formally managed by [Organization Name] with enforced security configurations. |
| **CISO** | Chief Information Security Officer — the senior executive responsible for [Organization Name]'s information security programme. |
| **SOC (Security Operations Centre)** | The team responsible for monitoring, detecting, and responding to security events and incidents. |
| **[Additional Term]** | [Definition] |

---

## 5. Roles and Responsibilities

*Define who is accountable for each aspect of remote access governance. Use a RACI model to ensure clarity. Ambiguity in responsibility is a common audit finding.*

### 5.1 Responsibility Overview

The following roles are defined within this policy:

| Role | Description |
|---|---|
| **CISO** | Chief Information Security Officer — Policy owner and ultimate accountability for remote access security. |
| **CTO** | Chief Technology Officer — Co-owner responsible for technical implementation and infrastructure. |
| **IT Security Team** | Responsible for designing, implementing, and maintaining remote access controls. |
| **IT Operations / Infrastructure Team** | Responsible for day-to-day management and support of remote access infrastructure. |
| **Identity and Access Management (IAM) Team** | Responsible for provisioning, reviewing, and deprovisioning remote access credentials. |
| **Line Managers / Department Heads** | Responsible for requesting and approving remote access for their direct reports. |
| **End Users** | Responsible for complying with this policy and using remote access securely. |
| **Third-Party Vendors** | Responsible for complying with [Organization Name]'s remote access requirements when granted access. |
| **Human Resources (HR)** | Responsible for notifying IT/IAM of staff terminations or role changes to trigger access revocation. |
| **Compliance / Risk Team** | Responsible for periodic reviews, audit support, and regulatory reporting related to remote access. |
| **SOC / Security Monitoring Team** | Responsible for monitoring remote access sessions and investigating anomalies. |
| **Internal Audit** | Responsible for independently assessing the effectiveness of remote access controls. |

### 5.2 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | CTO | IT Security | IT Ops | IAM Team | Line Manager | End User | HR | Compliance | SOC |
|---|---|---|---|---|---|---|---|---|---|---|
| Policy ownership and annual review | A | C | R | I | I | I | I | I | C | I |
| Remote access architecture design | C | A | R | C | C | I | I | I | C | I |
| Remote access provisioning | I | I | C | C | R | A | I | I | I | I |
| MFA enrollment and management | I | I | C | C | R | I | I | I | I | I |
| Approving remote access requests | C | I | C | I | I | A/R | I | I | I | I |
| Remote access periodic access review | A | C | R | C | R | C | I | C | C | I |
| Remote access deprovisioning (leavers) | I | I | C | C | R | I | I | A | I | I |
| Remote access deprovisioning (role change) | I | I | C | C | R | A | I | C | I | I |
| Third-party access approval | A | C | R | C | C | C | I | I | C | I |
| VPN infrastructure management | I | A | C | R | I | I | I | I | I | I |
| Endpoint compliance enforcement | I | C | R | A | I | I | I | I | I | I |
| Session monitoring and logging | A | C | R | C | I | I | I | I | I | R |
| Security incident response | A | C | R | C | I | I | I | I | C | R |
| Exception management | A | C | R | I | I | C | I | I | C | I |
| Regulatory reporting and audit support | A | C | C | I | I | I | I | I | R | C |

### 5.3 Key Responsibilities Detail

#### 5.3.1 CISO

- Maintains ownership of this policy and ensures it remains current with regulatory requirements.
- Approves all exceptions to this policy.
- Reviews and approves the annual remote access risk assessment.
- Reports on remote access compliance status to the Board Risk Committee.

#### 5.3.2 IT Security Team

- Designs and implements technical controls for remote access, including VPN configurations, MFA, and endpoint compliance checks.
- Conducts periodic technical reviews of remote access configurations and access logs.
- Evaluates and approves remote access technologies prior to deployment.
- Develops and maintains remote access security standards and guidelines.

#### 5.3.3 IAM Team

- Manages the lifecycle of remote access credentials, including provisioning, modification, and deprovisioning.
- Conducts quarterly access certification reviews for all remote access accounts.
- Ensures privileged remote access accounts are subject to enhanced controls.
- Maintains an accurate register of all individuals and systems with remote access rights.

#### 5.3.4 Line Managers / Department Heads

- Submit remote access requests for their direct reports using the approved request process.
- Attest to the business need for remote access on a [quarterly/semi-annual] basis during access reviews.
- Notify HR and the IAM Team promptly when a staff member leaves or changes role.
- Ensure direct reports complete mandatory remote access security awareness training.

#### 5.3.5 End Users

- Comply with all requirements of this policy and associated standards.
- Use only approved devices and access methods for remote connectivity.
- Safeguard credentials and MFA tokens against loss, theft, or disclosure.
- Report any suspected security incidents or policy violations to the SOC or IT Security Team.
- Complete all mandatory remote access security training as required.

#### 5.3.6 Third-Party Vendors

- Comply with [Organization Name]'s Remote Access Security Requirements for Third Parties (Appendix C).
- Access only the specific systems and data required for their engagement.
- Report any security incidents related to their remote access to [Organization Name] immediately.
- Provide evidence of their own security controls upon request.

---

## 6. Policy Statements and Requirements

*This is the core of the policy. Each subsection should be specific, measurable, and actionable. Vague policy language is a common audit finding. Use shall/must for mandatory requirements and should/may for recommended practices.*

### 6.1 General Remote Access Principles

*State the overarching security principles that govern all remote access at the organisation. These principles provide the rationale for the specific controls that follow.*

[Organization Name] shall govern remote access in accordance with the following principles:

1. **Least Privilege:** Remote access shall be granted based on the minimum level of access required to fulfil a legitimate business function. Broad or blanket access shall not be permitted.

2. **Need-to-Access:** Remote access shall only be granted where there is a demonstrated and approved business need. Access shall not be granted as a convenience.

3. **Explicit Authorisation:** All remote access must be explicitly authorised by an appropriate authority prior to being provisioned. Unauthorised or informal remote access arrangements are prohibited.

4. **Secure by Default:** Default remote access configurations shall be set to the most restrictive settings. Additional access shall be explicitly enabled only where required and approved.

5. **Continuous Verification:** [Organization Name] shall implement controls that continuously verify the identity and security posture of remote users and devices throughout a session, not only at the point of connection.

6. **Auditability:** All remote access activity shall be logged and records shall be retained in accordance with [Organization Name]'s Log Management and Retention Policy.

7. **Timely Revocation:** Remote access rights shall be revoked immediately upon termination of the business need, employment, or contractual relationship.

### 6.2 Authentication and Access Controls

*Define the specific authentication requirements for remote access. This is typically the highest-scrutiny area during BNM RMiT audits. Be precise about MFA requirements.*

#### 6.2.1 Multi-Factor Authentication (MFA)

- MFA shall be mandatory for **all** remote access sessions without exception.
- Acceptable MFA methods are:

| MFA Method | Acceptable for Standard Access | Acceptable for Privileged Access |
|---|---|---|
| Hardware security key (FIDO2/WebAuthn) | Yes | Yes (Preferred) |
| Certificate-based authentication | Yes | Yes |
| Time-based One-Time Password (TOTP) authenticator app | Yes | Yes |
| Push notification via approved authenticator app | Yes | Yes (with number matching) |
| SMS One-Time Password (OTP) | Conditionally (see Note 1) | No |
| Voice call OTP | No | No |
| Email OTP | No | No |

> **Note 1:** SMS OTP is only acceptable for standard (non-privileged) access where risk assessment demonstrates that higher assurance methods are not technically feasible. Such exceptions require CISO approval and must be documented in the Exception Register.

- MFA factors that are purely knowledge-based (e.g., security questions used as a second factor) are prohibited.
- MFA tokens, devices, and authenticator apps are personal to the individual user and must not be shared.

#### 6.2.2 Password Requirements for Remote Access Accounts

Remote access account credentials shall comply with [Organization Name]'s Password Policy, with the following minimum requirements:

| Parameter | Minimum Requirement |
|---|---|
| Minimum length | 14 characters |
| Complexity | Upper case, lower case, numbers, special characters |
| Maximum age | 90 days (standard) / 60 days (privileged) |
| History | 12 previous passwords cannot be reused |
| Account lockout threshold | 5 consecutive failed attempts |
| Account lockout duration | 30 minutes (or manual unlock by IAM Team) |

#### 6.2.3 Remote Access Account Management

- All remote access accounts shall have a designated account owner who is individually identifiable. Shared, generic, or anonymous remote access accounts are prohibited.
- Remote access accounts shall be distinct from local accounts wherever technically feasible, particularly for privileged access.
- All remote access accounts and their associated permissions shall be recorded in [Organization Name]'s Identity and Access Management system.
- Access rights shall be reviewed and recertified on a [quarterly] basis by the relevant Line Manager and the IAM Team.
- Remote access accounts for personnel who have left [Organization Name] or whose contracts have ended shall be disabled within **[4 hours]** of notification from HR, and permanently deleted within **[30 days]**.
- Remote access rights for personnel who change roles shall be reviewed within **[5 business days]** of the role change, and access not required for the new role shall be removed.

### 6.3 Approved Remote Access Methods

*List the specific technologies approved for remote access. Unapproved methods (e.g., consumer-grade tools like TeamViewer, personal AnyDesk, etc.) should be explicitly prohibited.*

#### 6.3.1 Approved Technologies

Only the following remote access technologies are approved for use within [Organization Name]:

| Method | Technology / Product | Use Case | User Category | Requires MFA |
|---|---|---|---|---|
| Corporate VPN (Full Tunnel) | [VPN Product Name] | General employee remote access to internal resources | Employees, Contractors | Yes — Mandatory |
| Privileged Access Management (PAM) Solution | [PAM Product Name] | Administrative and privileged access to servers, databases, network devices | IT Staff, Vendors | Yes — Mandatory |
| Virtual Desktop Infrastructure (VDI) | [VDI Product Name] | Access to corporate desktop environment from unmanaged or BYOD devices | Approved users, BYOD | Yes — Mandatory |
| Approved Web-Based Application Portal | [Portal Name/URL] | Access to specific approved web applications | All approved users | Yes — via SSO/MFA |
| Secure Shell (SSH) via Bastion Host | [Bastion Host Solution] | Administrative access to Linux/Unix systems | IT Administrators only | Yes — Certificate + MFA |
| Remote Desktop Protocol (RDP) via PAM | [PAM Product Name] | Administrative access to Windows servers | IT Administrators only | Yes — Mandatory |

#### 6.3.2 Prohibited Remote Access Methods

The following remote access methods are explicitly **prohibited**:

- Direct RDP or SSH connections to production systems that bypass the authorised bastion host or PAM solution.
- Use of consumer-grade remote desktop tools (e.g., personal TeamViewer, AnyDesk, LogMeIn free tier, Chrome Remote Desktop) for any corporate access.
- Unapproved VPN services or personal VPN clients.
- Use of modem or dial-up connections.
- Tunnelling corporate traffic through unauthorised proxy services.
- Any method that circumvents [Organization Name]'s security monitoring or authentication controls.
- Modems attached to corporate systems to create an unauthorised back-channel for remote access.

#### 6.3.3 Split Tunnelling

- Split tunnelling on the corporate VPN shall be **disabled by default** for all standard remote access sessions.
- Any exception to this requirement must be approved by the CISO and shall be subject to compensating controls as defined in the approved exception.
- The IT Security Team shall review VPN configurations [quarterly] to confirm split tunnelling settings are enforced.

### 6.4 Endpoint Security Requirements

*Define what security controls must be present on any device before it can be used for remote access. Endpoint compliance checking (NAC) is a common control mandated by RMiT.*

#### 6.4.1 Managed Device Requirements

All [Organization Name]-managed devices used for remote access shall:

| Control | Requirement |
|---|---|
| Operating System | Supported OS with current vendor security patches applied |
| Patch Status | Critical patches applied within **72 hours**; high-severity patches within **14 days** |
| Endpoint Protection | [Approved EDR/AV product] installed, active, and with up-to-date signatures |
| Disk Encryption | Full-disk encryption enabled (e.g., BitLocker for Windows, FileVault for macOS) |
| Host Firewall | Enabled with [Organization Name]-approved configuration; user modification prohibited |
| Screen Lock | Auto-lock after **[5 minutes]** of inactivity; requires MFA or strong password to unlock |
| MDM Enrolment | Enrolled in [Organization Name]'s Mobile Device Management (MDM) solution |
| Security Baseline | Hardened in accordance with [Organization Name]'s Endpoint Security Baseline Standard |

#### 6.4.2 Endpoint Compliance Checking (Network Access Control)

- [Organization Name] shall implement automated endpoint compliance checks (NAC) that verify the above requirements before a remote access connection is established.
- Devices that fail to meet the compliance requirements shall be denied remote access or placed in a quarantine network with no access to production resources.
- Compliance status shall be continuously monitored throughout the remote access session.

#### 6.4.3 BYOD Requirements

Where BYOD is permitted under [Organization Name]'s BYOD Policy, the following minimum requirements apply for remote access:

- BYOD devices shall be enrolled in [Organization Name]'s MDM solution.
- BYOD remote access shall be restricted to the VDI environment or approved web-based portals only. Direct network access to internal systems from BYOD devices is prohibited.
- [Organization Name]'s MDM agents must be installed and active on the BYOD device.
- The device owner accepts that [Organization Name] may remotely wipe corporate data from the device in the event of loss, theft, or a security incident.
- BYOD devices must meet the minimum patch and security requirements set out in Section 6.4.1 to the extent technically feasible.

#### 6.4.4 Third-Party Device Requirements

Third-party vendor devices used for remote access shall:

- Meet the endpoint security requirements specified in Appendix C.
- Be subject to endpoint compliance verification prior to access being granted.
- Not retain any [Organization Name] data locally after the remote session is terminated.

### 6.5 Network Security Controls

*Define controls governing how remote connections traverse networks, including encryption standards and other network-level protections.*

#### 6.5.1 Encryption Requirements

- All remote access communications shall be encrypted in transit using strong, industry-standard cryptographic protocols.
- Minimum acceptable encryption standards are:

| Protocol | Minimum Version / Configuration |
|---|---|
| TLS | TLS 1.2; TLS 1.3 preferred |
| SSH | SSHv2 only; SSHv1 is prohibited |
| VPN Protocols | IKEv2/IPsec or OpenVPN; PPTP and L2TP without IPsec are prohibited |
| Key Length (Asymmetric) | RSA: minimum 2048-bit; ECC: minimum 256-bit |
| Key Length (Symmetric) | AES-128 minimum; AES-256 preferred |

- The IT Security Team shall review encryption configurations [annually] or following any significant change to cryptographic standards.

#### 6.5.2 Network Segmentation

- Remote access users shall be placed in a dedicated, segregated network zone upon connection. Direct access to production or critical systems from the remote access zone shall be controlled by firewall rules enforcing least privilege.
- Privileged remote access users (e.g., administrators) shall connect through a dedicated, more restrictive privileged access network zone.
- Lateral movement from the remote access zone to other internal network segments shall be restricted to only what is explicitly required and approved.

#### 6.5.3 Session Controls

- Idle remote access sessions shall be automatically terminated after **[15 minutes]** of inactivity.
- Maximum single session duration shall not exceed **[8 hours]** without re-authentication.
- Concurrent sessions from the same account shall be limited to **[2]** sessions. Unusual concurrent session activity shall generate a security alert.

### 6.6 Data Protection and Handling

*Define how data must be handled during remote access sessions to prevent data leakage and ensure compliance with PDPA and other data protection obligations.*

#### 6.6.1 Data Classification and Access

- Remote access to data classified as **Restricted** (e.g., board papers, personal financial data, strategic plans) shall require explicit approval from the data owner and must traverse the PAM solution with full session recording.
- Remote access to **Confidential** data (e.g., customer records, employee data) shall require MFA and shall be logged.
- Access to personal data as defined under the Personal Data Protection Act 2010 (PDPA) shall comply with [Organization Name]'s Data Privacy Policy and the principles of purpose limitation and data minimisation.

#### 6.6.2 Data Transfer Controls

- Transfer of data from internal systems to remote endpoints shall be controlled and logged.
- Copy-and-paste of **Restricted** data from remote sessions to local clipboards shall be technically disabled where the technology supports this capability.
- The transfer of bulk data during remote sessions shall be subject to approval and shall be logged by the DLP solution.
- Data Loss Prevention (DLP) controls shall be applied to remote access channels to detect and prevent the unauthorised exfiltration of sensitive data.

#### 6.6.3 Local Data Storage Prohibition

- Remote users shall not save [Organization Name] data to local storage on unmanaged or BYOD devices. Corporate data must reside on [Organization Name]-approved storage systems (e.g., corporate file servers, approved cloud storage).
- Where VDI is used, data shall remain within the virtual desktop environment and not be transferred to the local device.

#### 6.6.4 Physical Environment Controls

Remote workers are responsible for implementing appropriate physical security controls in their remote working environment:

- Screens must be positioned to prevent visual eavesdropping (shoulder surfing).
- Privacy screens should be used where the environment cannot be controlled.
- Sensitive conversations or meetings must not be conducted in public spaces.
- Devices must be locked when unattended, even in private environments.

### 6.7 Third-Party and Vendor Remote Access

*Third-party access is a high-risk area specifically scrutinised by BNM. Define specific controls beyond those for employees.*

#### 6.7.1 Authorisation Process

- All third-party remote access shall be subject to a formal request and approval process. Requests must include:
  - The identity of the vendor/individual requiring access.
  - The specific systems or data that will be accessed.
  - The business justification for remote access.
  - The proposed start and end date of the access period.
  - Evidence that the third party has undergone [Organization Name]'s vendor risk assessment.
- Third-party remote access requests must be approved by the CISO or delegated authority.
- A formal Remote Access Agreement (Appendix D) shall be signed by the authorised representative of the third party before access is provisioned.

#### 6.7.2 Third-Party Access Controls

- Third-party remote access shall be provisioned on a **time-limited** basis, aligned to the duration of the specific engagement. Permanent or indefinite third-party access is prohibited.
- Third-party users shall be assigned individual, named accounts. Shared accounts for multiple vendor personnel are prohibited.
- Third-party remote access shall be restricted exclusively to the systems and data required for their specific task (least privilege).
- All third-party remote access sessions shall be conducted through the PAM solution with **full session recording** enabled.
- Third-party access shall be supervised by a designated [Organization Name] employee where the access involves Restricted systems or data.
- Third-party accounts shall be automatically disabled upon expiry of the access period.

#### 6.7.3 Third-Party Access Review

- Active third-party remote access accounts shall be reviewed on a **monthly** basis by the IAM Team and relevant Line Manager.
- Any access that is no longer required shall be immediately revoked.

### 6.8 Privileged Remote Access

*Privileged access (admin accounts, root access, database access) requires specific, elevated controls. This is a critical control area under RMiT.*

#### 6.8.1 Privileged Account Requirements

- All privileged remote access shall be performed using dedicated privileged accounts, separate from the user's standard user account. Using a standard account with local privilege escalation for administrative remote tasks is prohibited.
- Privileged remote access accounts shall not be used for general-purpose activities such as email, web browsing, or accessing non-administrative applications.
- Privileged accounts shall be subject to more stringent password requirements (see Section 6.2.2).

#### 6.8.2 Privileged Access Workstation (PAW)

- Individuals who regularly require privileged remote access to critical systems shall be issued a dedicated Privileged Access Workstation (PAW).
- PAWs shall be subject to enhanced hardening standards as defined in [Organization Name]'s Privileged Access Management Standard.
- PAWs shall be used exclusively for privileged tasks and shall not be used for general internet browsing, email, or other non-administrative activities.

#### 6.8.3 PAM Solution Requirements

- All privileged remote access shall be brokered through [Organization Name]'s approved PAM solution.
- The PAM solution shall provide:
  - Credential vaulting and just-in-time password issuance.
  - MFA enforcement at the PAM gateway.
  - Full session recording (video and keystroke capture) for all privileged sessions.
  - Session isolation to prevent the privileged account credentials from being exposed to the connecting device.
  - Automated credential rotation following each privileged session.
  - Alerting on anomalous privileged session activity.

#### 6.8.4 Just-In-Time Access

- [Organization Name] shall implement Just-In-Time (JIT) access provisioning for privileged remote access where technically feasible.
- Privileged access rights shall be granted for the minimum duration required to complete the specific administrative task.
- Standing (permanent) privileged remote access accounts shall be minimised; all such accounts require CISO approval and must be documented in the Exception Register.

### 6.9 Monitoring and Logging

*Define what must be logged, how long logs must be retained, and how they must be monitored. RMiT Clause 10.41 explicitly requires monitoring of remote access.*

#### 6.9.1 Mandatory Logging Requirements

[Organization Name] shall log all remote access activity. Logs shall include, at a minimum:

| Log Event | Required Data Elements |
|---|---|
| Successful VPN / Remote Access Connection | Timestamp, Username, Source IP, Device ID, Authentication Method Used, MFA Status |
| Failed Authentication Attempts | Timestamp, Username, Source IP, Failure Reason |
| Session Termination | Timestamp, Username, Session Duration |
| Privileged Session Activity | As above, plus Session Recording Reference ID |
| Third-Party Access Sessions | As above, plus Vendor Organisation Name |
| Access to Restricted Resources | Timestamp, Username, Resource Accessed, Action Taken |
| Remote Access Account Changes | Timestamp, Administrator Who Made Change, Account Affected, Change Made |
| Policy Violations / Blocked Connections | Timestamp, Source, Reason for Block |

#### 6.9.2 Log Retention

- Remote access logs shall be retained for a minimum of **[3 years]** in accordance with [Organization Name]'s Log Management and Retention Policy and BNM regulatory requirements.
- Privileged session recordings shall be retained for a minimum of **[2 years]**.
- Logs shall be stored in a tamper-evident, centralised log management system with access restricted to authorised personnel.

#### 6.9.3 Real-Time Monitoring and Alerting

- The SOC shall monitor remote access logs in near real-time for indicators of compromise or policy violations.
- Automated alerts shall be configured for the following events:

| Alert Trigger | Threshold | Response |
|---|---|---|
| Failed authentication attempts | 5 or more within 10 minutes from a single source | Lock account; notify SOC |
| Successful login from new/unrecognised country | Any occurrence | SOC investigation |
| Login from multiple geographic locations simultaneously | Any occurrence | Suspend session; SOC investigation |
| Access outside normal business hours | [Define threshold, e.g., 10 PM – 6 AM] | SOC review |
| Unusual data volume transfer during session | [Define threshold, e.g., >500 MB] | SOC alert; possible session termination |
| Concurrent session limit exceeded | Threshold exceeded | Alert IAM Team and SOC |
| Privileged session anomaly | Defined by PAM system baselines | SOC investigation |

#### 6.9.4 Periodic Log Review

- The SOC shall conduct a formal review of remote access logs on a [weekly] basis, in addition to real-time monitoring.
- The IT Security Team shall conduct a comprehensive review of remote access patterns on a [monthly] basis.
- Anomalies identified during log reviews shall be investigated and documented. Findings that meet the incident criteria shall be escalated per the Incident Response Policy.

### 6.10 Incident Response for Remote Access

*Define how remote access-related security incidents are handled. Timeliness is critical — define specific response timeframes.*

#### 6.10.1 Remote Access Security Incident Categories

The following events shall be treated as security incidents requiring formal incident response:

- Suspected compromise of a remote access account or credential.
- Loss or theft of a device with active remote access capabilities.
- Confirmed unauthorised remote access to [Organization Name]'s systems.
- Detection of malware on a device used for remote access.
- Confirmed data exfiltration via a remote access channel.
- Repeated failed MFA attempts indicating a targeted attack.
- Any remote access activity from a sanctioned country or jurisdiction.

#### 6.10.2 Immediate Response Actions

Upon detection of a suspected remote access security incident, the following immediate actions shall be taken without delay:

1. **Isolate:** Terminate the suspected malicious or compromised remote access session immediately.
2. **Disable:** Disable the compromised user account(s) pending investigation.
3. **Preserve:** Preserve all relevant logs, session recordings, and forensic evidence.
4. **Notify:** Notify the CISO and the SOC within **[1 hour]** of detection.
5. **Assess:** Conduct an initial impact assessment to determine the scope of the incident.

#### 6.10.3 Escalation and Reporting

- Remote access incidents shall be managed in accordance with [Organization Name]'s Cyber Incident Response Plan.
- Incidents that result in confirmed data breaches involving personal data shall be reported to the relevant regulator (BNM and/or the Personal Data Protection Commissioner) within the timeframes required by applicable law.
- The CISO shall be notified of all significant remote access incidents within **[1 hour]** of detection; the Board shall be notified for incidents classified as Critical within **[24 hours]**.

---

## 7. Exceptions and Escalation Process

*A formal exception process is essential for auditability. Blanket exceptions are a red flag to auditors. Every exception must be time-limited, risk-assessed, and approved.*

### 7.1 Exceptions Policy Statement

Exceptions to the requirements of this policy may be granted in limited circumstances where strict compliance is not technically feasible or would create a disproportionate operational burden relative to the security risk. All exceptions must be formally documented, risk-assessed, and approved.

### 7.2 Exception Request Process

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | Submits a completed Exception Request Form (Appendix E) | Requestor's Line Manager | At point of need |
| 2 | Reviews the exception request and assesses risk | IT Security Team | Within 3 business days |
| 3 | Approves, conditionally approves, or rejects the exception | CISO | Within 5 business days |
| 4 | Documents the approved exception in the Exception Register | IT Security Team | Within 1 business day of approval |
| 5 | Implements compensating controls as specified in the approval | IT Operations / Requestor | As per approval |
| 6 | Reviews the exception at the defined expiry date | IT Security Team / CISO | At expiry |

### 7.3 Exception Conditions

All approved exceptions shall:

- Have a defined and documented business justification.
- Be accompanied by a formal risk assessment and documented compensating controls.
- Be approved by the CISO (or CTO for technical exceptions, subject to CISO notation).
- Have a defined expiry date not exceeding **[12 months]** from the date of approval. Extensions require fresh approval.
- Be recorded in the Exception Register, including all relevant details.

### 7.4 Exception Register

The IT Security Team shall maintain an Exception Register documenting all active policy exceptions. The register shall include:

| Field | Description |
|---|---|
| Exception ID | Unique identifier |
| Policy Clause | The specific clause(s) for which exception is granted |
| Requestor | Individual/team requesting the exception |
| Business Justification | Documented reason for the exception |
| Risk Assessment | Risk level if exception is granted |
| Compensating Controls | Controls mitigating the risk of non-compliance |
| Approved By | Name and role of approver |
| Approval Date | Date of approval |
| Expiry Date | Date on which the exception expires |
| Status | Active / Expired / Under Review |

### 7.5 Non-Approvals and Escalation

- If the CISO does not approve an exception and the requestor believes there is an exceptional circumstance, the matter may be escalated to the [Risk Committee / CEO] for final determination.
- Escalation does not suspend the policy requirement. Access must comply with policy until an exception is formally approved.

### 7.6 Prohibited Exceptions

The following requirements may **not** be subject to exception under any circumstances:

- The requirement for MFA for all remote access sessions.
- The prohibition on shared or generic remote access accounts.
- The requirement for encryption of all remote access communications.
- The requirement to log all remote access activity.

---

## 8. Compliance and Enforcement

*Define how compliance is measured and what consequences follow from non-compliance. This section is important for demonstrating to auditors that the policy has teeth.*

### 8.1 Compliance Measurement

Compliance with this policy shall be assessed through:

- **Automated Endpoint Compliance Checks:** Continuous automated verification of endpoint security posture prior to and during remote access sessions.
- **Periodic Access Reviews:** [Quarterly] access certification reviews conducted by Line Managers and the IAM Team.
- **Security Audits:** [Annual] internal or external audits of remote access controls and configurations.
- **Penetration Testing:** [Annual] penetration testing that includes testing of remote access controls.
- **Log Analysis:** Ongoing review of remote access logs by the SOC and IT Security Team.
- **Regulatory Examinations:** Cooperation with BNM supervisory examinations and related regulatory reviews.

### 8.2 Key Compliance Metrics

The following Key Risk Indicators (KRIs) and Key Performance Indicators (KPIs) shall be tracked and reported to the CISO on a [monthly] basis:

| Metric | Target | Escalation Threshold |
|---|---|---|
| % of remote access accounts with active MFA | 100% | <100% |
| % of remote access endpoints meeting compliance baseline | ≥95% | <90% |
| % of terminated accounts disabled within SLA ([4 hours]) | ≥99% | <95% |
| % of third-party access accounts reviewed monthly | 100% | <100% |
| Number of active remote access policy exceptions | [Defined limit] | Exceeds limit |
| Number of remote access-related security incidents | Baseline | Trend increase |
| Time to detect remote access anomaly | ≤15 minutes | >30 minutes |
| % of privileged sessions with session recording | 100% | <100% |

### 8.3 Non-Compliance Consequences

Non-compliance with this policy may result in:

- **Immediate Suspension of Remote Access:** Remote access privileges may be suspended immediately pending investigation of a compliance breach.
- **Disciplinary Action:** Non-compliance by employees may result in disciplinary action up to and including termination of employment, in accordance with [Organization Name]'s HR disciplinary procedures.
- **Contractual Remedies:** Non-compliance by third parties may result in suspension of access, breach of contract proceedings, or termination of the engagement.
- **Regulatory Reporting:** Where non-compliance results in a reportable incident, [Organization Name] may be required to notify BNM or other regulators.
- **Legal Action:** In cases of deliberate policy violations or malicious activity, legal action may be pursued.

### 8.4 Self-Reporting

[Organization Name] encourages a culture of transparency. Any individual who identifies a potential policy violation or security weakness related to remote access is encouraged to report it promptly to the IT Security Team or the SOC without fear of reprisal, provided the report is made in good faith.

---

## 9. Training and Awareness

*Regulatory bodies including BNM expect that staff are trained on policies they are required to comply with. Document the training requirements here.*

### 9.1 Mandatory Training Requirements

| Audience | Training Programme | Frequency | Delivery Method |
|---|---|---|---|
| All employees with remote access | Remote Access Security Awareness | Annual | E-learning / Intranet |
| IT Staff managing remote access infrastructure | Remote Access Technical Controls Training | Annual | Instructor-led / Online |
| Privileged access users | Privileged Access Management (PAM) Training | Annual + upon PAM system change | Instructor-led |
| Third-party vendors | [Organization Name] Remote Access Security Briefing | Prior to first access; annually thereafter | Online / Briefing document |
| New employees (with remote access) | Remote Access Security Induction | Within 30 days of joining | E-learning |
| Line Managers | Access Management Responsibilities | Annual | E-learning |

### 9.2 Training Completion Requirements

- Completion of mandatory training is a condition of remote access being granted and maintained.
- Remote access shall be suspended for individuals who do not complete the required training within the specified timeframe.
- Training completion records shall be maintained by [HR / Learning and Development team] and made available to the IT Security Team for compliance tracking.

---

## 10. Review and Approval History

*This section demonstrates that the policy is actively maintained. Stale policies (reviewed more than 12 months ago) are a common audit finding.*

### 10.1 Version History

| Version | Date | Author | Reviewed By | Description of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | Initial release of the Remote Access Security Policy. |
| [1.1] | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | [e.g., Updated MFA requirements; added third-party access controls.] |
| [2.0] | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | [e.g., Full policy revision to align with BNM RMiT 2024 update.] |

### 10.2 Scheduled Review

This policy shall be formally reviewed:

- **Annually**, no later than **[Next Review Date]**, by the CISO and IT Security Team.
- **Following any material change** to [Organization Name]'s remote access infrastructure or technology.
- **Following a significant remote access security incident** that reveals a gap in policy coverage.
- **Upon issuance of updated regulatory guidance** from BNM or other applicable regulators.

### 10.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], [Title] | [Signature] | [Date] |
| Reviewed By (IT Security) | [Name], IT Security Manager | [Signature] | [Date] |
| Reviewed By (Compliance) | [Name], Compliance Officer | [Signature] | [Date] |
| Approved By (CISO) | [Name], Chief Information Security Officer | [Signature] | [Date] |
| Approved By (CTO) | [Name], Chief Technology Officer | [Signature] | [Date] |
| Noted By (Risk Committee) | [Name], Chair of Risk Committee | [Signature] | [Date] |

---

## 11. References

*List all documents and regulatory sources that this policy relies on. Auditors check this to verify that policy requirements trace back to legitimate requirements.*

### 11.1 Regulatory References

| Reference | Document | Relevant Clause(s) |
|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document, Bank Negara Malaysia | Clause 10.41 (Remote Access) |
| PDPA 2010 | Personal Data Protection Act 2010, Malaysia | Sections 9, 10 (Security Standards; Retention) |
| [NACSA] | [National Cyber Security Agency Guidelines] | [Relevant sections] |
| [PCI-DSS v4.0] | Payment Card Industry Data Security Standard | [Requirements 8.x, 12.x] |

### 11.2 Internal Documents

| Document | Description | Location |
|---|---|---|
| Information Security Policy | Overarching information security governance framework | [Document Repository Link / Path] |
| Identity and Access Management Policy | Governing the lifecycle of all user accounts and access rights | [Document Repository Link / Path] |
| Privileged Access Management Standard | Technical standard for managing privileged accounts | [Document Repository Link / Path] |
| Endpoint Security Standard | Minimum security configuration for all endpoint devices | [Document Repository Link / Path] |
| BYOD Policy | Governing the use of personally owned devices for corporate access | [Document Repository Link / Path] |
| Data Classification Policy | Classification scheme for [Organization Name]'s information assets | [Document Repository Link / Path] |
| Password Policy | Password requirements for all [Organization Name] systems | [Document Repository Link / Path] |
| Cyber Incident Response Plan | Procedures for detecting, containing, and recovering from cyber incidents | [Document Repository Link / Path] |
| Log Management and Retention Policy | Requirements for security log generation, collection, and retention | [Document Repository Link / Path] |
| Third-Party / Vendor Risk Management Policy | Governing security requirements for third-party relationships | [Document Repository Link / Path] |
| Data Privacy Policy | Governing the handling of personal data under PDPA | [Document Repository Link / Path] |

### 11.3 Industry Standards and Frameworks

| Standard | Description |
|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements |
| ISO/IEC 27002:2022 | Information Security Controls (particularly A.8.20, A.8.21) |
| NIST SP 800-46 Rev. 2 | Guide to Enterprise Telework, Remote Access, and Bring Your Own Device (BYOD) Security |
| NIST SP 800-77 | Guide to IPsec VPNs |
| CIS Controls v8 | Center for Internet Security Controls (CIS Control 12 — Network Infrastructure Management) |

---

## 12. Appendices

### Appendix A — Remote Access Request Form

*This form must be completed by the Line Manager and submitted to the IAM Team for all new remote access provisioning requests.*

**Remote Access Request Form**

| Field | Details |
|---|---|
| **Request Date** | [DD/MM/YYYY] |
| **Requestor (Line Manager)** | [Full Name and Employee ID] |
| **User Requiring Access** | [Full Name and Employee ID / Contractor ID] |
| **User Category** | ☐ Employee ☐ Contractor ☐ Third-Party Vendor |
| **Department** | [Department Name] |
| **Business Justification** | [Describe the business need for remote access] |
| **Access Type Required** | ☐ Standard VPN ☐ Privileged (PAM) ☐ VDI ☐ Web Portal Only ☐ Other: [specify] |
| **Systems / Resources to be Accessed** | [List specific systems, applications, or data repositories] |
| **Access Start Date** | [DD/MM/YYYY] |
| **Access End Date** | [DD/MM/YYYY] — or ☐ Ongoing (subject to quarterly review) |
| **MFA Method** | [Specify the MFA method to be used, e.g., hardware key, TOTP app] |
| **Device to be Used** | ☐ [Organization Name]-Managed Device ☐ BYOD ☐ Third-Party Device |
| **Device Asset ID** | [If applicable] |
| **Line Manager Signature** | [Signature] |
| **Date** | [DD/MM/YYYY] |

*For IAM Team Use Only:*

| Field | Details |
|---|---|
| **Account Provisioned** | ☐ Yes ☐ No |
| **Provisioning Date** | [DD/MM/YYYY] |
| **Account ID** | [Account/User ID created] |
| **MFA Enrolled** | ☐ Yes ☐ No |
| **Access Expiry Configured** | ☐ Yes ☐ No — Expiry Date: [DD/MM/YYYY] |
| **IAM Team Officer** | [Name and Signature] |

---

### Appendix B — Remote Access Account Review Checklist

*This checklist shall be completed by Line Managers during the quarterly access review process.*

**Quarterly Remote Access Access Review**

| Field | Details |
|---|---|
| **Review Period** | [Q1/Q2/Q3/Q4] [Year] |
| **Reviewer (Line Manager)** | [Full Name and Title] |
| **Department** | [Department Name] |
| **Review Date** | [DD/MM/YYYY] |

**User Access Certification Table:**

| Employee / Contractor Name | Employee ID | Role | Remote Access Type | Business Need Still Valid? | Access Level Appropriate? | Any Changes Required? | Reviewer Sign-Off |
|---|---|---|---|---|---|---|---|
| [Name] | [ID] | [Role] | [VPN / PAM / VDI] | ☐ Yes ☐ No | ☐ Yes ☐ No | [e.g., Remove access / Change level / No change] | [Initials] |
| [Name] | [ID] | [Role] | [VPN / PAM / VDI] | ☐ Yes ☐ No | ☐ Yes ☐ No | [e.g., Remove access / Change level / No change] | [Initials] |
| [Name] | [ID] | [Role] | [VPN / PAM / VDI] | ☐ Yes ☐ No | ☐ Yes ☐ No | [e.g., Remove access / Change level / No change] | [Initials] |

**Line Manager Declaration:**

I confirm that I have reviewed all remote access accounts for my direct reports listed above and that the information provided is accurate to the best of my knowledge.

| Line Manager Name | Signature | Date |
|---|---|---|
| [Name] | [Signature] | [DD/MM/YYYY] |

---

### Appendix C — Third-Party Remote Access Security Requirements

*This document must be acknowledged by third-party vendors before remote access is provisioned. It supplements the main Remote Access Agreement.*

**Third-Party Remote Access Security Requirements**

By accessing [Organization Name]'s systems remotely, the third-party organisation and its personnel agree to comply with the following requirements:

1. **Individual Accounts:** Each individual requiring remote access must have their own named account. Shared accounts are prohibited.
2. **MFA:** Multi-factor authentication shall be used for all remote access sessions without exception.
3. **Approved Access Method:** Remote access shall only be conducted through [Organization Name]'s designated PAM solution or approved portal.
4. **Session Recording Consent:** The third party acknowledges and consents to [Organization Name] recording all remote access sessions, including screen activity and keystrokes, for security and audit purposes.
5. **Scope of Access:** The third party shall access only the specific systems and data authorised for their engagement. Accessing systems or data outside the approved scope is prohibited.
6. **No Local Data Retention:** No [Organization Name] data shall be retained on third-party systems or devices after the remote session is terminated unless explicitly authorised in writing.
7. **Incident Reporting:** The third party shall notify [Organization Name]'s SOC at [SOC Contact Details] immediately upon becoming aware of any security incident that may affect [Organization Name]'s systems or data.
8. **Endpoint Security:** Devices used for remote access must have up-to-date operating system patches and active, updated endpoint security software installed.
9. **Prohibition on Sub-contracting:** The third party shall not grant sub-contractors or other third parties access to [Organization Name]'s systems without prior written approval from [Organization Name]'s CISO.
10. **Compliance with [Organization Name] Policies:** The third party acknowledges that all personnel accessing [Organization Name]'s systems must comply with [Organization Name]'s applicable security policies, a summary of which has been provided.

**Acknowledgement:**

| Third-Party Organisation | [Organization Name] |
| Authorised Representative Name | [Name] |
| Title | [Title] |
| Signature | [Signature] |
| Date | [DD/MM/YYYY] |

---

### Appendix D — Remote Access Agreement (Third-Party)

*A formal legal agreement to be executed before any third-party remote access is provisioned. This should be reviewed by [Organization Name]'s legal counsel before use.*

**Remote Access Agreement**

This Remote Access Agreement ("Agreement") is entered into between **[Organization Name]** ("the Company") and **[Third-Party Organization Name]** ("the Vendor") as of [Date].

**1. Grant of Access**
The Company grants the Vendor limited, non-exclusive, non-transferable remote access to specified systems solely for the purpose of [describe specific purpose, e.g., providing support services for System X].

**2. Authorised Personnel**
Access is granted to the following individuals only:

| Name | Role | Employee/Contractor ID (Vendor) |
|---|---|---|
| [Name] | [Role] | [ID] |
| [Name] | [Role] | [ID] |

**3. Access Period**
This Agreement is effective from [Start Date] to [End Date]. Extensions require a new Agreement.

**4. Security Obligations**
The Vendor agrees to comply with all requirements set out in Appendix C (Third-Party Remote Access Security Requirements), which is incorporated herein by reference.

**5. Monitoring**
The Vendor acknowledges that all remote access sessions are subject to monitoring and recording by the Company.

**6. Data Protection**
The Vendor shall handle any personal data accessed during remote sessions in accordance with the Malaysia Personal Data Protection Act 2010 and the Company's Data Privacy Policy.

**7. Breach and Termination**
The Company may immediately terminate this Agreement and revoke access in the event of a security incident, breach of this Agreement, or at its sole discretion.

**8. Governing Law**
This Agreement shall be governed by the laws of Malaysia.

| **[Organization Name]** | **[Third-Party Organization Name]** |
|---|---|
| Authorised Signatory: [Name] | Authorised Signatory: [Name] |
| Title: [Title] | Title: [Title] |
| Signature: [Signature] | Signature: [Signature] |
| Date: [Date] | Date: [Date] |

---

### Appendix E — Policy Exception Request Form

*All requests for exceptions to this policy must be submitted using this form. Verbal or informal exception approvals are not valid.*

**Remote Access Policy Exception Request Form**

| Field | Details |
|---|---|
| **Exception Request ID** | [To be assigned by IT Security Team] |
| **Date of Request** | [DD/MM/YYYY] |
| **Requestor** | [Name, Title, Department] |
| **Policy and Clause** | Remote Access Security Policy, Clause: [e.g., 6.2.1 — MFA Requirement] |
| **Description of Exception** | [Clearly describe what specific requirement cannot be met] |
| **Business Justification** | [Explain why the requirement cannot be met and the operational necessity] |
| **Systems / Users Affected** | [List specific systems, user accounts, or user groups affected] |
| **Risk Assessment** | [Describe the security risk introduced by this exception; include risk level: Low / Medium / High / Critical] |
| **Proposed Compensating Controls** | [List the alternative controls that will be implemented to mitigate the risk] |
| **Proposed Expiry Date** | [DD/MM/YYYY — maximum 12 months from approval date] |
| **Requestor Signature** | [Signature and Date] |
| **Line Manager Approval** | [Name, Signature, Date] |

*For IT Security Team Use:*

| Field | Details |
|---|---|
| **IT Security Risk Review** | [Summary of IT Security assessment] |
| **Risk Rating (Post-Compensating Controls)** | ☐ Low ☐ Medium ☐ High ☐ Critical |
| **IT Security Recommendation** | ☐ Approve ☐ Conditional Approval ☐ Reject |
| **IT Security Officer** | [Name, Signature, Date] |

*For CISO Approval:*

| Field | Details |
|---|---|
| **CISO Decision** | ☐ Approved ☐ Conditionally Approved ☐ Rejected |
| **Conditions (if applicable)** | [List any conditions attached to the approval] |
| **CISO Name** | [Name] |
| **CISO Signature** | [Signature] |
| **Approval Date** | [DD/MM/YYYY] |
| **Expiry Date** | [DD/MM/YYYY] |

---

### Appendix F — Remote Access Technology Inventory

*The IT Security Team shall maintain this inventory and review it [quarterly]. This forms part of the evidence base for RMiT compliance.*

**Approved Remote Access Technology Inventory**

| Asset ID | Technology / Product | Version | Purpose | Owner | Date Approved | Last Reviewed | Risk Classification |
|---|---|---|---|---|---|---|---|
| [ID] | [VPN Product Name] | [Version] | Corporate VPN | [Owner] | [Date] | [Date] | [Medium / High] |
| [ID] | [PAM Product Name] | [Version] | Privileged Access Management | [Owner] | [Date] | [Date] | [High / Critical] |
| [ID] | [VDI Product Name] | [Version] | Virtual Desktop Infrastructure | [Owner] | [Date] | [Date] | [Medium] |
| [ID] | [MFA Product Name] | [Version] | Multi-Factor Authentication | [Owner] | [Date] | [Date] | [High] |
| [ID] | [MDM Product Name] | [Version] | Endpoint Management | [Owner] | [Date] | [Date] | [Medium] |

---

### Appendix G — Glossary of Acronyms

| Acronym | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| BYOD | Bring Your Own Device |
| CISO | Chief Information Security Officer |
| CTO | Chief Technology Officer |
| DLP | Data Loss Prevention |
| EDR | Endpoint Detection and Response |
| FIDO2 | Fast Identity Online 2 (authentication standard) |
| HR | Human Resources |
| IAM | Identity and Access Management |
| IKEv2 | Internet Key Exchange version 2 |
| IPsec | Internet Protocol Security |
| IT | Information Technology |
| JIT | Just-In-Time |
| KPI | Key Performance Indicator |
| KRI | Key Risk Indicator |
| MFA | Multi-Factor Authentication |
| MDM | Mobile Device Management |
| MSP | Managed Service Provider |
| NACSA | National Cyber Security Agency (Malaysia) |
| NAC | Network Access Control |
| OTP | One-Time Password |
| PAM | Privileged Access Management |
| PAW | Privileged Access Workstation |
| PDPA | Personal Data Protection Act 2010 |
| RACI | Responsible, Accountable, Consulted, Informed |
| RDP | Remote Desktop Protocol |
| RMiT | Risk Management in Technology |
| SOC | Security Operations Centre |
| SSH | Secure Shell |
| SSO | Single Sign-On |
| TLS | Transport Layer Security |
| TOTP | Time-based One-Time Password |
| VDI | Virtual Desktop Infrastructure |
| VPN | Virtual Private Network |

---

*End of Document*

---

**Document Classification: Confidential**
**© [Organization Name] [Year] — All rights reserved. Unauthorised reproduction prohibited.**