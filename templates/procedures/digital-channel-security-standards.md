# Digital Channel Security Standards

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Digital Banking |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Roles and Responsibilities](#2-roles-and-responsibilities)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Channel Security Architecture](#4-channel-security-architecture)
5. [Customer Authentication Requirements](#5-customer-authentication-requirements)
6. [Session Management Controls](#6-session-management-controls)
7. [Policy Statements and Security Requirements](#7-policy-statements-and-security-requirements)
8. [Incident Management and Reporting](#8-incident-management-and-reporting)
9. [Monitoring and Compliance](#9-monitoring-and-compliance)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document and the security objectives it seeks to achieve across all digital channels operated by the organization.*

This document establishes the **Digital Channel Security Standards** for [Organization Name] (hereinafter referred to as "the Organization"). It defines the minimum security requirements, technical controls, and operational procedures that must be applied to all digital channels to protect customers, organizational assets, and data integrity.

These standards are issued in compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** policy document, specifically **Clause 12.1**, and are aligned with applicable provisions under the **Personal Data Protection Act 2010 (PDPA)** and guidance issued by the **National Cyber Security Agency (NACSA)**.

The objectives of this document are to:

- Define baseline security requirements for all customer-facing and internal digital channels.
- Establish consistent authentication and session management controls across all platforms.
- Provide clear accountability for the design, implementation, and maintenance of channel security controls.
- Ensure the Organization's digital channels remain resilient against current and emerging cyber threats.
- Support audit readiness and regulatory compliance with BNM RMiT requirements.

### 1.2 Scope

*Define which systems, channels, teams, and third parties fall within the boundaries of this standard.*

This standard applies to:

**Digital Channels Covered:**

| Channel Type | Description | In Scope |
|---|---|---|
| Internet Banking (Web) | Browser-based customer banking portal | Yes |
| Mobile Banking Application (iOS) | Native iOS banking application | Yes |
| Mobile Banking Application (Android) | Native Android banking application | Yes |
| API Banking / Open Banking | Third-party and partner API integrations | Yes |
| USSD / SMS Banking | Unstructured supplementary service data channels | Yes |
| Automated Teller Machine (ATM) Interface | ATM channel front-end systems | Yes |
| Interactive Voice Response (IVR) | Telephone banking channel | Yes |
| Corporate / Business Banking Portal | Business customer-facing portal | Yes |
| Internal Administrative Portals | Staff-facing digital management interfaces | Yes |
| [Additional Channel] | [Description] | [Yes / No] |

**Entities and Personnel Covered:**

- All employees of [Organization Name] involved in the design, development, operation, or support of digital channels.
- Third-party service providers and vendors with access to, or responsibility for, any digital channel component.
- Technology, Information Security, Digital Banking, Compliance, and Risk Management divisions.
- Outsourced development and managed service partners subject to contractual obligations with [Organization Name].

**Out of Scope:**

- Internal back-office systems with no customer-facing component and no connectivity to digital channels.
- [Other exclusions as applicable]

### 1.3 Effective Date

This standard is effective from **[Effective Date]** and supersedes **[Previous Document ID / Title, if applicable]** dated **[Previous Document Date]**.

---

## 2. Roles and Responsibilities

*Define accountability for the implementation, maintenance, and oversight of this standard. Use the RACI framework: Responsible (R), Accountable (A), Consulted (C), Informed (I).*

### 2.1 RACI Matrix

| Activity | Head of Digital Banking | Chief Information Security Officer (CISO) | IT Infrastructure | Application Development | Risk Management | Compliance | Internal Audit | Third-Party Vendors |
|---|---|---|---|---|---|---|---|---|
| Ownership and governance of this standard | A | C | I | I | C | C | I | I |
| Implementation of channel security controls | R | C | R | R | I | I | I | R |
| Authentication framework design and approval | A | R | C | R | C | C | I | C |
| Session management configuration | C | A | R | R | I | I | I | R |
| Penetration testing of digital channels | C | A | R | R | C | I | R | C |
| Vulnerability and patch management | C | A | R | R | I | I | I | R |
| Security incident response (channel-related) | R | A | R | R | C | C | I | R |
| Annual review of this standard | A | R | C | C | R | R | C | I |
| Customer communication on security matters | A | C | I | I | C | R | I | I |
| Regulatory reporting (BNM notifications) | C | R | I | I | R | A | I | I |
| Compliance monitoring and assurance | C | C | I | I | R | A | R | I |
| Training and awareness on channel security | C | R | I | R | I | C | I | I |

### 2.2 Key Roles and Responsibilities (Narrative)

**Head of Digital Banking**
- Serves as the document owner and is accountable for ensuring this standard reflects current regulatory requirements and operational realities.
- Sponsors security investment decisions related to digital channels.
- Approves exceptions and escalates material deviations to the Board Risk Committee where required.

**Chief Information Security Officer (CISO)**
- Responsible for the security architecture governance of all digital channels.
- Ensures alignment with the Organization's broader Information Security Policy framework.
- Leads incident response activities for security events affecting digital channels.
- Reports on channel security posture to senior management and the Board.

**Head of IT Infrastructure**
- Responsible for the secure configuration, capacity, and availability of infrastructure supporting digital channels.
- Implements network segmentation, firewall rules, and DDoS mitigation controls as required by this standard.

**Head of Application Development / Digital Delivery**
- Responsible for embedding security requirements (secure SDLC) into the development and deployment of all digital channel applications.
- Ensures developers are trained in secure coding practices.

**Chief Risk Officer / Head of Risk Management**
- Provides oversight of technology risk associated with digital channels.
- Reviews and endorses risk acceptance decisions where control gaps exist.

**Head of Compliance**
- Monitors adherence to applicable regulatory requirements, including BNM RMiT Clause 12.1.
- Coordinates regulatory submissions and responses related to digital channel security.

**Third-Party Vendors / Service Providers**
- Must comply with the security requirements set out in this standard and any supplementary contractual obligations.
- Subject to periodic audits and security assessments by [Organization Name].

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Framework

*Summarize the key regulatory obligations that this standard addresses.*

[Organization Name] operates under the regulatory supervision of **Bank Negara Malaysia (BNM)** as a licensed financial institution. Digital channel security is a material area of regulatory focus, governed by the following instruments:

| Regulatory Instrument | Issuing Authority | Relevant Sections | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 12.1 | Digital channel security requirements |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10 | Customer authentication and access control |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 11 | Cyber resilience |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Section 9, 11 | Data security and integrity principles |
| Financial Services Act 2013 (FSA) | Bank Negara Malaysia | Section 28, 47 | Sound risk management practices |
| Guidelines on Electronic Know Your Customer (e-KYC) | Bank Negara Malaysia | As applicable | Digital onboarding channel security |
| [NACSA Critical Information Infrastructure Framework] | NACSA | As applicable | Critical infrastructure protection |

### 3.2 Internal Policy Hierarchy

*Describe how this standard sits within the Organization's broader policy framework.*

This standard is a **Tier 3 Procedure / Standard** document and operates under the authority of:

- **[Organization Name] Information Security Policy** (Tier 1 Policy)
- **[Organization Name] Technology Risk Management Framework** (Tier 2 Framework)
- **[Organization Name] Cyber Security Policy** (Tier 2 Policy)

In the event of any conflict between this standard and a higher-tier document, the higher-tier document shall prevail. Exceptions to this standard require approval in accordance with the process defined in **Section 7.6**.

### 3.3 Related Internal Documents

| Document Title | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy |
| Technology Risk Management Framework | [Doc ID] | Parent framework |
| Cyber Security Incident Response Plan | [Doc ID] | Related procedure |
| Privileged Access Management Standard | [Doc ID] | Related standard |
| Secure Software Development Lifecycle (SSDLC) Policy | [Doc ID] | Related standard |
| Third-Party Risk Management Policy | [Doc ID] | Related policy |
| Business Continuity Plan — Digital Channels | [Doc ID] | Related procedure |
| Customer Data Classification Policy | [Doc ID] | Related policy |

---

## 4. Channel Security Architecture

### 4.1 Overview

*Describe the high-level security architecture principles that apply to all digital channels. This section should be supported by architecture diagrams where available.*

All digital channels operated by [Organization Name] shall be designed, deployed, and maintained in accordance with the **defense-in-depth** principle, ensuring multiple layers of security controls are in place to detect, prevent, and respond to threats targeting customer-facing and internal digital interfaces.

### 4.2 Architecture Principles

The following principles govern the security architecture of all digital channels:

- **Least Privilege:** All channel components, services, and integrations shall operate with the minimum permissions necessary to perform their intended function.
- **Segregation of Duties:** Development, testing, and production environments shall be strictly separated. No individual shall have unrestricted access across all three environments.
- **Secure by Default:** All digital channel deployments shall default to the most secure configuration. Insecure defaults must be explicitly justified and approved.
- **Fail Secure:** In the event of a system failure or error, channels shall default to a secure state (e.g., deny access rather than grant it).
- **Data Minimization:** Digital channels shall collect, transmit, and store only the minimum customer data necessary for the transaction or service being provided.
- **Encryption in Transit and at Rest:** All customer data transmitted over digital channels shall be encrypted using current industry-standard protocols.
- **Auditability:** All channel activity shall generate sufficient audit logs to support forensic investigation, regulatory review, and fraud detection.

### 4.3 Network Segmentation and Zoning

*Define the required network zones and segmentation requirements for digital channel infrastructure.*

| Zone | Description | Components | Required Controls |
|---|---|---|---|
| DMZ (De-Militarized Zone) | External-facing perimeter | Web Application Firewall (WAF), Load Balancer, Reverse Proxy | WAF rules enforced, TLS termination, DDoS protection |
| Application Zone | Application logic layer | Application servers, API gateway | Strict ingress/egress filtering, no direct internet access |
| Data Zone | Persistent data storage | Database servers, HSM, key management | Encrypted storage, no direct external access, access logs mandatory |
| Management Zone | Administrative and monitoring | SIEM, monitoring tools, admin consoles | MFA enforced, jump server / bastion host required |
| Integration Zone | Third-party and API connectivity | API endpoints, partner integrations | Mutual TLS (mTLS), API key management, rate limiting |

### 4.4 Transport Layer Security (TLS) Requirements

All digital channel communications must comply with the following TLS standards:

| Requirement | Minimum Standard | Preferred Standard |
|---|---|---|
| TLS Protocol Version | TLS 1.2 | TLS 1.3 |
| Cipher Suites | AES-128-GCM | AES-256-GCM |
| Certificate Authority | Publicly trusted CA | EV Certificate where applicable |
| Certificate Key Length | RSA 2048-bit | RSA 4096-bit or ECDSA P-256 |
| HTTP Strict Transport Security (HSTS) | Mandatory | Max-age ≥ 31536000 seconds |
| Certificate Pinning (Mobile) | Mandatory | Dynamic pinning with fallback |
| TLS 1.0 / 1.1 | **Prohibited** | — |
| SSL 3.0 or earlier | **Prohibited** | — |

### 4.5 Web Application Security Controls

*Specify mandatory controls for web-based digital channels, referencing OWASP Top 10 mitigations as applicable.*

The following controls are mandatory for all web-based digital channel deployments:

- **Web Application Firewall (WAF):** A WAF shall be deployed in front of all public-facing web applications. WAF rule sets shall be reviewed and updated at minimum quarterly.
- **Content Security Policy (CSP):** A strict CSP header shall be enforced on all web channel responses to mitigate Cross-Site Scripting (XSS) attacks.
- **Cross-Site Request Forgery (CSRF) Protection:** CSRF tokens shall be implemented for all state-changing operations.
- **SQL Injection Prevention:** All database interactions shall use parameterized queries or prepared statements. Dynamic SQL construction is prohibited.
- **Input Validation:** All user inputs shall be validated on the server side. Client-side validation alone is insufficient.
- **Security Headers:** The following HTTP security headers are mandatory:

| Header | Required Value |
|---|---|
| Strict-Transport-Security | `max-age=31536000; includeSubDomains` |
| X-Content-Type-Options | `nosniff` |
| X-Frame-Options | `DENY` or `SAMEORIGIN` |
| Content-Security-Policy | [Define per application] |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | [Define per application] |

### 4.6 Mobile Application Security Controls

*Define specific security controls for iOS and Android mobile banking applications.*

| Control Area | Requirement |
|---|---|
| Code Obfuscation | Mandatory for production builds |
| Root / Jailbreak Detection | Application must detect and respond to compromised device state |
| Certificate Pinning | Mandatory; pins must be rotatable without forced app update |
| Secure Local Storage | Sensitive data must not be stored in plaintext on device |
| Biometric Authentication | Where offered, must use platform-native secure enclave |
| Screenshot Prevention | Sensitive screens must disable screenshot/screen recording |
| Clipboard Protection | Sensitive fields (e.g., passwords, OTP) must restrict clipboard access |
| Anti-Tampering | Application integrity checks must be implemented |
| Secure IPC | Inter-process communication must not expose sensitive data |
| Third-Party SDK Review | All SDKs must undergo security review prior to integration |

### 4.7 API Security Controls

*Define security requirements for API-based digital channel integrations, including Open Banking.*

- All APIs shall require authentication via OAuth 2.0 with PKCE, or mutual TLS (mTLS) for machine-to-machine integrations.
- API keys and secrets shall never be embedded in client-side code or mobile applications.
- Rate limiting shall be enforced on all public-facing API endpoints to prevent abuse and enumeration attacks.
- API responses shall not include unnecessary data fields. Response payloads must follow the principle of data minimization.
- All API interactions shall be logged with sufficient detail to support forensic investigation.
- APIs exposed under Open Banking frameworks shall comply with relevant BNM Open API guidelines.

---

## 5. Customer Authentication Requirements

### 5.1 Authentication Framework

*Describe the overall approach to customer identity verification and authentication across digital channels.*

[Organization Name] shall implement a **risk-based authentication** framework for all digital channels, calibrating the strength of authentication controls to the sensitivity of the transaction or operation being performed. This framework shall be aligned with BNM RMiT Clause 10 requirements on customer access controls.

### 5.2 Authentication Factors

| Factor Type | Examples | Usage Context |
|---|---|---|
| Knowledge Factor (Something you know) | Password, PIN, security questions | Low-risk operations, combined with other factors |
| Possession Factor (Something you have) | OTP via SMS/email, hardware token, authenticator app | Standard transactions |
| Inherence Factor (Something you are) | Fingerprint, Face ID, voice recognition | High-assurance authentication |
| Device Binding | Registered device identifier, device fingerprint | All mobile banking sessions |

### 5.3 Multi-Factor Authentication (MFA) Requirements

Multi-Factor Authentication combining at least **two distinct authentication factors** is mandatory for the following:

| Scenario | Minimum Authentication Requirement |
|---|---|
| Initial enrollment / onboarding | MFA (Knowledge + Possession) |
| Login from unrecognized device | MFA (Knowledge + Possession) + Step-up challenge |
| Standard login (recognized device) | MFA (Possession + Inherence) or equivalent |
| High-value transactions (above defined threshold) | Step-up MFA with out-of-band verification |
| Change of registered contact details | MFA + Out-of-band confirmation |
| Password / PIN reset | MFA + Identity re-verification |
| Adding a new payee | MFA + Step-up challenge |
| Cross-border transfers | MFA + Enhanced verification |
| Administrative / privileged access | MFA (mandatory, no exceptions) |

### 5.4 Password and PIN Requirements

*Define the minimum password and PIN policy applicable to customer-facing digital channels.*

**Customer Passwords:**

| Parameter | Requirement |
|---|---|
| Minimum Length | 8 characters |
| Complexity | Must contain uppercase, lowercase, number, and special character |
| Maximum Age | 90 days (or prompt user to update) |
| History | Last 5 passwords may not be reused |
| Lockout Threshold | Maximum 5 consecutive failed attempts |
| Lockout Duration | 30 minutes (or until manual reset) |
| Transmission | Must never be transmitted in plaintext; hashed using bcrypt, Argon2, or equivalent |
| Storage | Salted hash only; plaintext storage is prohibited |

**Customer PINs:**

| Parameter | Requirement |
|---|---|
| Minimum Length | 6 digits |
| Sequential / Repeated Digits | Must be blocked (e.g., 123456, 111111) |
| Lockout Threshold | Maximum 3 consecutive failed attempts |
| Lockout Action | PIN blocked; requires re-activation via authenticated channel |

### 5.5 One-Time Password (OTP) Requirements

| Parameter | Requirement |
|---|---|
| OTP Length | Minimum 6 digits |
| OTP Validity Period | Maximum 5 minutes from time of issue |
| OTP Usage | Single use only; invalidated after successful use or expiry |
| Delivery Channel | SMS to registered number, or authenticator app (TOTP) |
| SMS OTP Rate Limiting | Maximum [X] OTP requests per hour per customer |
| OTP Content | Must not reveal transaction details that could be exploited via SIM swap |
| Push Notification OTP | Must be delivered via encrypted push channel with device binding |

### 5.6 Biometric Authentication Requirements

| Requirement | Specification |
|---|---|
| Platform Biometrics Only | Must use native OS secure enclave (Face ID, Touch ID, Android BiometricPrompt) |
| Fallback Authentication | A non-biometric fallback (PIN/password) must always be available |
| Biometric Template Storage | Templates must never leave the device; no server-side biometric storage |
| Liveness Detection | Where facial recognition is used, liveness detection is mandatory |
| Biometric Opt-in | Customer must explicitly opt in to biometric authentication |
| Disclosure | Customers must be informed how biometric data is used and protected |

### 5.7 Device Registration and Binding

*Define the requirements for registering and trusting customer devices.*

- Customers may register a maximum of **[X] devices** per digital banking account.
- Device registration shall require completion of full MFA verification.
- Registered device identifiers shall be cryptographically bound to the customer's account.
- Changes to registered devices (addition or removal) shall trigger a notification to the customer via a registered out-of-band communication channel.
- The Organization shall maintain an audit log of all device registration and de-registration events.

### 5.8 Transaction Authorization Requirements

*Define step-up authentication requirements for high-value or high-risk transactions.*

| Transaction Category | Value Threshold | Required Authorization |
|---|---|---|
| Intra-bank transfers (own accounts) | Any value | Standard MFA |
| Intra-bank transfers (third party) | Up to RM [Threshold 1] | Standard MFA |
| Intra-bank transfers (third party) | Above RM [Threshold 1] | MFA + OTP |
| Interbank transfers (IBG/RENTAS) | Up to RM [Threshold 2] | MFA + OTP |
| Interbank transfers (IBG/RENTAS) | Above RM [Threshold 2] | MFA + OTP + Cooling period |
| New payee addition | Any | MFA + OTP + 24-hour cooling period |
| International remittance | Any | MFA + OTP + Enhanced verification |
| Investment transactions | Any | MFA + OTP |
| Contact detail changes | Any | MFA + Out-of-band confirmation |

---

## 6. Session Management Controls

### 6.1 Session Management Principles

*Describe the principles guiding session lifecycle management across all digital channels.*

Session management controls are critical to ensuring that authenticated customer sessions cannot be hijacked, replayed, or maintained beyond their intended duration. All digital channels operated by [Organization Name] shall implement session management controls in accordance with the requirements defined in this section.

### 6.2 Session Token Requirements

| Parameter | Requirement |
|---|---|
| Token Generation | Must use cryptographically secure random number generator (CSPRNG) |
| Token Entropy | Minimum 128 bits of entropy |
| Token Transmission | Session tokens must only be transmitted over TLS-encrypted channels |
| Token Storage (Web) | HttpOnly and Secure flags mandatory on session cookies |
| Token Storage (Mobile) | Must use platform-native secure storage (Keychain / Keystore) |
| Token Reuse | Session tokens must not be reused after logout or expiry |
| Token Invalidation | Tokens must be immediately invalidated upon logout or session timeout |
| Token Renewal | New token must be issued upon privilege escalation (step-up auth) |

### 6.3 Session Timeout Controls

*Define the inactivity and absolute session timeout requirements for each channel type.*

| Channel | Inactivity Timeout | Absolute Session Timeout | Action on Timeout |
|---|---|---|---|
| Internet Banking (Web) | 10 minutes | 60 minutes | Automatic logout, session invalidation |
| Mobile Banking Application | 5 minutes | 30 minutes | Application lock, session invalidation |
| Corporate / Business Portal | 10 minutes | 60 minutes | Automatic logout, session invalidation |
| API Sessions (OAuth tokens) | N/A | 15 minutes (access token) | Token expiry; refresh token required |
| Administrative Portals | 5 minutes | 30 minutes | Automatic logout, mandatory re-authentication |
| IVR Banking | 3 minutes (inactivity) | 15 minutes | Automatic disconnection |

### 6.4 Concurrent Session Controls

| Parameter | Requirement |
|---|---|
| Simultaneous Web Sessions | Maximum 1 active session per customer per channel |
| Simultaneous Device Sessions | Maximum [X] concurrent active sessions across devices |
| New Session Behaviour | New login from a different device must invalidate existing session or prompt customer confirmation |
| Concurrent Session Notification | Customer must be notified of concurrent session detection |

### 6.5 Session Hijacking Prevention

The following controls shall be implemented to prevent session hijacking and fixation attacks:

- **Session ID Regeneration:** A new session ID shall be issued upon successful authentication and upon any privilege escalation event.
- **Session Fixation Prevention:** Session IDs provided prior to authentication shall not be accepted post-authentication.
- **IP Binding (Advisory):** Where technically feasible and operationally appropriate, session validity may be tied to the originating IP address, with controls for legitimate IP changes (e.g., mobile network handover).
- **User Agent Binding:** Significant changes to the User-Agent string during an active session shall trigger re-authentication.
- **Anomaly Detection:** Unusual session behavior (e.g., rapid geographic movement, unusually high transaction velocity) shall trigger automated alerts and, where warranted, step-up authentication or session termination.

### 6.6 Logout and Session Termination

- Explicit logout functionality shall be prominently accessible on all digital channel interfaces.
- Upon logout, all server-side session tokens shall be immediately and irrevocably invalidated.
- Client-side session data (cookies, local storage tokens) shall be cleared upon logout.
- The system shall confirm successful logout to the customer.
- Deep-linked or bookmarked pages shall not allow re-entry to an authenticated state without full re-authentication after session termination.

### 6.7 Re-authentication Requirements

Re-authentication (full or step-up) shall be required in the following circumstances:

- Following any session timeout event.
- Before performing high-value or high-risk transactions (per Section 5.8).
- When accessing sensitive account information (e.g., full account number display, card details).
- Following detection of suspicious session activity.
- When the customer changes their authentication credentials.

---

## 7. Policy Statements and Security Requirements

### 7.1 General Security Policy Statements

*Enumerate the mandatory policy positions of [Organization Name] with respect to digital channel security.*

The following policy statements are mandatory and apply to all digital channels operated by [Organization Name]:

1. **Security by Design:** All new digital channel features, products, and integrations shall undergo a formal security review as part of the development lifecycle prior to production deployment.

2. **Vulnerability Management:** All digital channel systems shall be subject to regular vulnerability scanning. Critical and high-severity vulnerabilities shall be remediated within the timeframes specified in the Organization's Vulnerability Management Standard.

3. **Penetration Testing:** All customer-facing digital channels shall undergo penetration testing by a qualified independent party at minimum **annually**, and following any significant change or new deployment.

4. **Patch Management:** Security patches for digital channel components shall be applied within defined SLAs based on criticality. Critical patches shall be applied within **[X] days** of vendor release.

5. **Third-Party Security:** All third-party vendors providing services that form part of or connect to digital channels shall be subject to security due diligence, contractual security obligations, and periodic security assessments.

6. **Security Logging:** All authentication events, session events, and transaction events on digital channels shall be logged and retained for a minimum of **[X] years** in accordance with BNM requirements.

7. **Fraud Detection:** Real-time fraud detection and transaction monitoring controls shall be in place for all digital channels capable of initiating financial transactions.

8. **Customer Notification:** Customers shall be notified in a timely manner of security-relevant events affecting their accounts, including suspicious login activity, device registration, and high-value transaction alerts.

### 7.2 Prohibited Practices

The following practices are explicitly prohibited on all digital channels:

| Prohibited Practice | Rationale |
|---|---|
| Storage of passwords in plaintext | Security of customer credentials |
| Use of TLS 1.0, TLS 1.1, SSL 3.0 or earlier | Known protocol vulnerabilities |
| Transmission of sensitive data in URL query strings | Exposure in server logs, browser history, referrer headers |
| Use of weak or deprecated cryptographic algorithms (MD5, SHA-1, DES, RC4) | Cryptographic weakness |
| Hard-coded credentials in source code or configuration files | Credential exposure risk |
| Direct SQL query construction from user input (without parameterization) | SQL injection risk |
| Storing session tokens in browser local storage for sensitive applications | XSS vulnerability exposure |
| Logging of sensitive data (passwords, full card numbers, OTPs) | Data exposure in logs |
| Disabling security headers without formal risk acceptance | Increased attack surface |
| Production deployment without security testing sign-off | Quality and security assurance |

### 7.3 Cryptography Standards

*Define the approved cryptographic algorithms and key management requirements for digital channels.*

| Cryptographic Use Case | Approved Algorithm(s) | Key Length | Notes |
|---|---|---|---|
| Symmetric Encryption | AES-256-GCM | 256-bit | Preferred; AES-128 minimum |
| Asymmetric Encryption | RSA, ECDSA | RSA ≥ 2048-bit; ECDSA P-256 | RSA 4096-bit preferred for new deployments |
| Hashing (General) | SHA-256, SHA-384, SHA-512 | — | MD5 and SHA-1 prohibited |
| Password Hashing | Argon2id, bcrypt, PBKDF2 | Work factor per NIST 800-132 | Salting mandatory |
| Digital Signatures | RSA-PSS, ECDSA | Per key length above | |
| Key Exchange | ECDH, DHE | — | Forward secrecy required |
| MAC / HMAC | HMAC-SHA256 | — | |
| Random Number Generation | CSPRNG | — | Platform-native secure RNG required |

**Key Management Requirements:**

- Cryptographic keys shall be managed using a dedicated **Hardware Security Module (HSM)** or equivalent approved key management solution.
- Key rotation schedules shall be defined and enforced for all cryptographic keys used in digital channels.
- Key access shall be subject to dual-control and split-knowledge principles for critical keys.
- Key lifecycle (generation, distribution, storage, rotation, revocation, destruction) shall be documented and auditable.

### 7.4 Data Protection Requirements

*Define how customer data must be protected within and across digital channel components.*

| Data Category | Examples | Required Protection |
|---|---|---|
| Authentication Credentials | Passwords, PINs | Hashed (one-way); never stored or logged in plaintext |
| Customer Personal Data | Name, NRIC, address | Encrypted at rest and in transit; subject to PDPA obligations |
| Financial Account Data | Account numbers, balances | Encrypted at rest; masked in display (e.g., show last 4 digits) |
| Card Data | Card numbers, CVV | Full PAN masked in display; CVV must never be stored |
| Session Tokens | JWT, session cookies | Encrypted; HttpOnly and Secure flags; invalidated on logout |
| Transaction Records | Payment history, amounts | Encrypted at rest; access control enforced; retained per policy |
| Audit Logs | Login events, transaction events | Tamper-evident; protected from unauthorized modification |
| Biometric Data | Fingerprint templates, Face ID | Never transmitted to server; stored only in device secure enclave |

### 7.5 Fraud and Anomaly Detection

*Describe the fraud detection controls that must be in place for transaction-capable digital channels.*

The following fraud and anomaly detection controls shall be implemented for all digital channels with financial transaction capability:

- **Real-Time Transaction Monitoring:** Automated controls shall monitor all transactions for indicators of fraud, including but not limited to: unusual transaction amounts, unusual frequency, new payees, geographic anomalies, and account takeover patterns.
- **Behavioral Analytics:** Where technically feasible, behavioral analytics shall be employed to establish baseline customer behavior and flag deviations.
- **Velocity Controls:** Transaction velocity limits shall be enforced at the channel level, with configurable thresholds for individual and aggregate transactions within defined time windows.
- **Device Intelligence:** Device reputation and risk scoring shall be applied at authentication and transaction initiation.
- **Cooling-Off Periods:** New payee registrations and increases to transaction limits shall be subject to a mandatory cooling-off period as defined in Section 5.8.
- **Customer Alerts:** Real-time alerts shall be sent to customers for high-value transactions, new payee additions, and login events from unrecognized devices.

### 7.6 Exception Management

*Define the process for requesting, approving, and tracking exceptions to this standard.*

Exceptions to any requirement in this standard may be requested in the following circumstances:

- Technical infeasibility within a defined remediation timeframe.
- Operational constraint with documented compensating controls.
- Transitional period following acquisition, system migration, or new channel deployment.

**Exception Process:**

| Step | Action | Responsible Party |
|---|---|---|
| 1 | Submit Exception Request Form (Appendix B) with full justification | Requesting team |
| 2 | Technical review and risk assessment | CISO / Information Security |
| 3 | Risk acceptance recommendation | Head of Risk Management |
| 4 | Approval (risk-weighted) | Head of Digital Banking / CRO / CISO |
| 5 | Define compensating controls and review date | Requesting team + CISO |
| 6 | Register in Exception Register | Compliance |
| 7 | Monitor and review at defined interval | Information Security + Compliance |

All approved exceptions shall be time-limited, with a maximum duration of **12 months**, subject to renewal.

---

## 8. Incident Management and Reporting

### 8.1 Security Incident Classification

*Define incident severity levels for digital channel security events.*

| Severity Level | Description | Examples | Response Time |
|---|---|---|---|
| **Critical** | Confirmed breach, mass customer data exposure, active exploitation of digital channel | Account takeover at scale, data exfiltration, ransomware on channel infrastructure | Immediate (within 1 hour) |
| **High** | Significant security event with potential customer impact | Credential stuffing attack, suspected unauthorized access, exploitation of known vulnerability | Within 4 hours |
| **Medium** | Security event with limited customer impact or potential escalation | Brute force attack detected, anomalous transaction patterns, security misconfiguration identified | Within 24 hours |
| **Low** | Security observation with minimal immediate risk | Failed penetration test finding, policy deviation identified, security alert without confirmed exploit | Within 72 hours |

### 8.2 Regulatory Reporting Obligations

In accordance with BNM RMiT requirements, [Organization Name] shall notify BNM of material cyber incidents affecting digital channels as follows:

| Reporting Trigger | Notification Timeline | Responsible Party |
|---|---|---|
| Critical cyber incident (confirmed breach or major disruption) | Within [X] hours of confirmation | CISO / Compliance |
| Significant data breach affecting customer personal data | Within [X] hours (PDPA obligation) | Data Protection Officer / Compliance |
| Prolonged digital channel unavailability (above defined threshold) | Within [X] hours | Head of Digital Banking / Compliance |
| [Additional trigger per BNM RMiT] | [Timeframe] | [Responsible party] |

*Note: Specific notification timelines must be verified against current BNM RMiT requirements and any supplementary guidelines issued by BNM.*

### 8.3 Customer Notification

- Where a security incident results in, or is reasonably suspected to have resulted in, unauthorized access to or disclosure of customer data, affected customers shall be notified in a timely manner.
- Customer notification content and timing shall be coordinated between the CISO, Compliance, and Head of Digital Banking.
- Customer notifications must be clear, accurate, and provide actionable guidance (e.g., password reset, card replacement).

---

## 9. Monitoring and Compliance

### 9.1 Security Monitoring Requirements

*Define the ongoing monitoring controls that must be in place for digital channels.*

| Monitoring Activity | Frequency | Responsible Party | Output |
|---|---|---|---|
| Real-time transaction fraud monitoring | Continuous | Fraud Management / IT Security | Automated alerts, case management |
| Authentication anomaly detection | Continuous | IT Security / SIEM | Automated alerts |
| WAF log review and tuning | Weekly | IT Security | WAF rule updates, incident tickets |
| Vulnerability scanning (authenticated) | Monthly | IT Security | Vulnerability report |
| Penetration testing (external, digital channels) | Annual (minimum) | IT Security + Approved external vendor | Penetration test report |
| Threat intelligence review (channel-specific) | Monthly | IT Security / Threat Intelligence | Threat advisory updates |
| Security patch compliance review | Monthly | IT Infrastructure | Patch status report |
| Audit log review | Monthly | IT Security / Internal Audit | Findings report |
| Exception register review | Quarterly | Compliance + CISO | Updated exception register |
| Compliance self-assessment (vs. this standard) | Annual | Compliance | Self-assessment report |
| Third-party security assessment (critical vendors) | Annual | Third-Party Risk Management | Vendor risk report |

### 9.2 Key Performance Indicators (KPIs) and Key Risk Indicators (KRIs)

*Define the metrics used to measure the effectiveness of digital channel security controls.*

| Metric | Type | Target / Threshold | Measurement Frequency |
|---|---|---|---|
| Critical/High vulnerabilities unpatched beyond SLA | KRI | 0 | Monthly |
| Mean time to remediate High vulnerabilities | KPI | ≤ [X] days | Monthly |
| Percentage of digital channels with up-to-date pen test | KPI | 100% | Annual |
| Number of confirmed account takeover incidents | KRI | 0 | Monthly |
| Percentage of transactions monitored by fraud detection | KPI | 100% | Monthly |
| WAF blocking rate (anomalous requests) | KPI | [Define baseline] | Monthly |
| Authentication failure rate | KRI | ≤ [X]% (baseline) | Weekly |
| Percentage of exceptions beyond approved duration | KRI | 0% | Quarterly |
| Customer complaints related to digital channel security | KRI | [Define threshold] | Monthly |
| Percentage of staff trained on channel security | KPI | ≥ 95% | Annual |

### 9.3 Audit and Assurance

- **Internal Audit** shall conduct an independent review of digital channel security controls at minimum **annually**, with findings reported to the Audit Committee.
- **External Penetration Testing** shall be conducted by a BNM-recognized or CREST/OSCP-qualified vendor at minimum annually.
- **Regulatory Examination:** The Organization shall maintain readiness to support BNM examinations of digital channel security practices at any time. Evidence of compliance with this standard shall be maintained and readily accessible.
- All audit findings related to this standard shall be tracked to closure in the Organization's audit management system, with defined remediation owners and timelines.

---

## 10. Review and Approval

### 10.1 Review Cycle

*This standard shall be reviewed:*

- **Annually**, at minimum, from the date of last approval.
- **Upon significant change** to any in-scope digital channel or underlying technology.
- **Upon issuance of new or revised BNM regulatory guidance** relevant to digital channel security.
- **Following a material security incident** affecting any digital channel.
- **Upon identification of a material control gap** through audit, penetration testing, or risk assessment.

The Head of Digital Banking is responsible for initiating the review process and ensuring updated versions are reviewed and approved by the appropriate governance body.

### 10.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial version — approved for release |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of major revision] |

### 10.3 Approval Sign-Off

*This document requires the following approvals prior to issuance and upon each revision:*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Digital Banking (Document Owner) | [Name] | _____________ | [Date] |
| Chief Information Security Officer | [Name] | _____________ | [Date] |
| Chief Risk Officer / Head of Risk Management | [Name] | _____________ | [Date] |
| Head of Compliance | [Name] | _____________ | [Date] |
| [Chief Technology Officer / Head of IT] | [Name] | _____________ | [Date] |
| [Board Risk Committee / EXCO endorsement, if required] | [Name] | _____________ | [Date] |

---

## 11. References

### 11.1 Regulatory References

| Reference | Issuing Authority | Clause / Section | Subject |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | **Clause 12.1** | Digital channel security requirements |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10 | Customer authentication and access management |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 11 | Cyber resilience |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 9 | Technology risk governance |
| Personal Data Protection Act 2010 | Ministry of Digital, Malaysia | Section 9, 11 | Security and retention of personal data |
| Financial Services Act 2013 | Bank Negara Malaysia | Section 28, 47 | Technology risk management in financial services |
| Guidelines on Electronic Know Your Customer (e-KYC) | Bank Negara Malaysia | As applicable | Digital onboarding security |
| National Cyber Security Policy | NACSA | As applicable | National cybersecurity baseline |

### 11.2 Industry Standards and Frameworks

| Standard / Framework | Body | Relevance |
|---|---|---|
| NIST Cybersecurity Framework (CSF) 2.0 | NIST | Risk management and security controls |
| OWASP Top 10 (Web Application Security Risks) | OWASP | Web channel security controls |
| OWASP Mobile Application Security Verification Standard (MASVS) | OWASP | Mobile channel security controls |
| OWASP API Security Top 10 | OWASP | API channel security controls |
| ISO/IEC 27001:2022 | ISO/IEC | Information security management |
| PCI DSS v4.0 | PCI SSC | Payment card security (where applicable) |
| NIST SP 800-63B (Digital Identity Guidelines) | NIST | Authentication and session management |

---

## 12. Appendices

### Appendix A: Digital Channel Inventory

*Maintain a current inventory of all in-scope digital channels, including version, hosting environment, and last security assessment date.*

| Channel Name | Type | Platform / Technology | Hosting | Version / Build | Last Pen Test Date | Last VA Scan Date | Next Review Due |
|---|---|---|---|---|---|---|---|
| [Internet Banking Portal] | Web | [Technology stack] | [Cloud / On-Premise] | [Version] | [Date] | [Date] | [Date] |
| [Mobile App — iOS] | Mobile | iOS / Swift | App Store | [Version] | [Date] | [Date] | [Date] |
| [Mobile App — Android] | Mobile | Android / Kotlin | Google Play | [Version] | [Date] | [Date] | [Date] |
| [API Banking Gateway] | API | [Technology] | [Cloud / On-Premise] | [Version] | [Date] | [Date] | [Date] |
| [Corporate Portal] | Web | [Technology stack] | [Cloud / On-Premise] | [Version] | [Date] | [Date] | [Date] |
| [Add additional channels] | | | | | | | |

### Appendix B: Exception Request Form Template

*Use this form to request a formal exception to any requirement in this standard.*

---

**DIGITAL CHANNEL SECURITY STANDARDS — EXCEPTION REQUEST FORM**

| Field | Detail |
|---|---|
| **Request Reference** | [Auto-generated / Assigned] |
| **Date of Request** | [Date] |
| **Requesting Department** | [Department] |
| **Requestor Name and Title** | [Name, Title] |
| **Standard Clause Reference** | [Section X.X — Requirement Title] |
| **Affected System / Channel** | [System or channel name] |
| **Nature of Exception Required** | [Describe the specific requirement that cannot be met] |
| **Justification** | [Explain why the requirement cannot be met — technical, operational, or timing constraint] |
| **Risk Assessment** | [Describe the risk introduced by the exception] |
| **Compensating Controls** | [Describe controls in place to mitigate the risk during the exception period] |
| **Requested Exception Duration** | [Start Date] to [End Date] — Maximum 12 months |
| **Remediation Plan** | [Describe steps and timeline to achieve full compliance] |

**Approvals:**

| Role | Name | Decision (Approve / Reject) | Date |
|---|---|---|---|
| CISO | [Name] | | [Date] |
| Head of Risk Management | [Name] | | [Date] |
| Head of Digital Banking | [Name] | | [Date] |

---

### Appendix C: Security Testing Requirements Summary

*Summary of mandatory security testing activities for digital channels, for reference during project planning and governance review.*

| Testing Type | Scope | Frequency | Provider | Deliverable |
|---|---|---|---|---|
| External Penetration Test | All customer-facing digital channels | Annual minimum; post-major release | Qualified external vendor (CREST / OSCP) | Penetration test report with CVSS scoring |
| Internal Penetration Test | Internal administrative portals, API integrations | Annual | Internal red team or qualified vendor | Penetration test report |
| Vulnerability Assessment | All in-scope systems | Monthly | IT Security (automated tooling) | VA scan report |
| Mobile Application Security Test | iOS and Android banking apps | Per major release; annual minimum | Qualified vendor (OWASP MASVS aligned) | Mobile security assessment report |
| API Security Assessment | All public and partner API endpoints | Per major release; annual minimum | IT Security or qualified vendor | API security assessment report |
| Source Code Review (SAST) | All digital channel application code | Per release cycle (automated); annual manual review | Development team (automated) + qualified vendor (manual) | SAST report; manual review findings |
| Dependency / SCA Scan | Third-party libraries and SDKs | Per build (automated) | Development team (automated tooling) | Dependency vulnerability report |
| Social Engineering / Phishing Simulation | Customer-facing channel security awareness | Annual | IT Security or qualified vendor | Simulation report and awareness findings |

### Appendix D: Glossary of Terms

*Define key terms used in this document to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Authentication** | The process of verifying the identity of a user, device, or system prior to granting access. |
| **Authorization** | The process of determining what actions or resources an authenticated entity is permitted to access. |
| **Channel** | Any customer-facing or internal digital interface through which banking services are accessed or delivered. |
| **CSRF** | Cross-Site Request Forgery — an attack that tricks a user's browser into making an unintended request to a trusted site where the user is authenticated. |
| **Defense-in-Depth** | A layered security approach in which multiple independent security controls are implemented to protect assets. |
| **DMZ** | De-Militarized Zone — a network segment that acts as a buffer between an untrusted external network and a trusted internal network. |
| **HSM** | Hardware Security Module — a physical device that manages and protects cryptographic keys. |
| **MFA** | Multi-Factor Authentication — authentication using two or more distinct factors from the categories of knowledge, possession, and inherence. |
| **OTP** | One-Time Password — a password valid for a single use or session, typically time-limited. |
| **Penetration Testing** | An authorized simulated cyberattack on a system to evaluate its security posture. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for licensed financial institutions. |
| **Session Token** | A cryptographic identifier issued to a user upon authentication to maintain their authenticated state during a session. |
| **TLS** | Transport Layer Security — a cryptographic protocol providing secure communication over a network. |
| **WAF** | Web Application Firewall — a security control that monitors and filters HTTP traffic to and from a web application. |
| **XSS** | Cross-Site Scripting — an attack in which malicious scripts are injected into content delivered to users via a trusted website. |
| **[Add additional terms as required]** | [Definition] |

### Appendix E: Related Form and Template References

| Document Title | Purpose | Location |
|---|---|---|
| Security Exception Request Form | Requesting exceptions to this standard | Appendix B / [Document Management System Link] |
| Digital Channel Security Assessment Checklist | Pre-deployment security sign-off | [Document Management System Link] |
| Incident Report Form | Reporting security incidents affecting digital channels | [Document Management System Link] |
| Third-Party Security Assessment Questionnaire | Vendor security due diligence | [Document Management System Link] |
| Penetration Test Scope Agreement Template | Formalizing pen test engagements | [Document Management System Link] |

---

*End of Document*

---

**Document Control:** This document is subject to version control. The master copy is maintained in [Document Management System Name]. Printed copies are uncontrolled. Verify currency of any printed copy against the master before use.

| Field | Value |
|---|---|
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | Head of Digital Banking |
| Last Review | [Last Review Date] |
| Next Review | [Next Review Date] |