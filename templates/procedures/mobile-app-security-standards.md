# Mobile Application Security Standards

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy References](#2-regulatory-and-policy-references)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Mobile Application Security Policy Statements and Requirements](#5-mobile-application-security-policy-statements-and-requirements)
6. [Channel Security Architecture](#6-channel-security-architecture)
7. [Customer Authentication Requirements](#7-customer-authentication-requirements)
8. [Session Management Controls](#8-session-management-controls)
9. [Secure Development Lifecycle for Mobile Applications](#9-secure-development-lifecycle-for-mobile-applications)
10. [Third-Party and Open-Source Component Management](#10-third-party-and-open-source-component-management)
11. [Mobile Application Testing and Assurance](#11-mobile-application-testing-and-assurance)
12. [Incident Response and Monitoring](#12-incident-response-and-monitoring)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the **Mobile Application Security Standards** for [Organization Name] (hereinafter referred to as "the Organization"). It defines the minimum security requirements, controls, and practices that must be implemented across all mobile applications developed, procured, or operated by the Organization to protect customer data, financial assets, and the integrity of digital banking channels.

These standards are established in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.2**, which mandates that financial institutions implement robust security controls for technology channels, including mobile banking and financial services applications.

### 1.2 Scope

*Define the boundaries of this standard, including which applications, platforms, environments, and teams are subject to these requirements.*

These standards apply to:

- All mobile applications (iOS and Android) that are:
  - **Customer-facing** — retail banking, corporate banking, investment, insurance, and e-wallet applications;
  - **Staff-facing** — internal productivity, approval, and operations applications that access Organization systems or data;
  - **Third-party operated** — white-label or vendor-developed applications deployed under the Organization's brand or licence.
- All environments in which such applications operate, including:
  - Production
  - User Acceptance Testing (UAT)
  - Development and Staging
- All departments, business units, and third parties involved in the **design, development, testing, deployment, operation, and decommissioning** of mobile applications.

### 1.3 Exclusions

*List any systems, applications, or scenarios explicitly excluded from this standard.*

The following are **excluded** from the scope of this document unless otherwise stated:

- Web browser-based applications accessed via mobile devices (governed by [Reference to Web Application Security Standards]);
- Internal desktop or server-side applications with no mobile component;
- [Any other exclusions specific to the Organization].

---

## 2. Regulatory and Policy References

*List all external regulatory mandates and internal policies that this document derives from or must be read in conjunction with.*

### 2.1 Regulatory References

| Reference | Document | Clause / Section |
|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Clause 12.2 — Technology Channel Security |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10 — Cybersecurity |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11 — Technology Operations |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 5 — General Principles |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 9 — Security Principle |
| NACSA | National Cyber Security Policy | [Applicable Reference] |
| FSTC | Financial Sector Technology and Innovation Framework | [Applicable Reference] |
| OWASP | OWASP Mobile Application Security Verification Standard (MASVS) | [Applicable Level] |

### 2.2 Internal Policy References

| Document ID | Document Title | Version |
|---|---|---|
| [POL-IT-001] | Information Security Policy | [Version] |
| [POL-IT-002] | Data Classification and Handling Policy | [Version] |
| [POL-IT-003] | Acceptable Use Policy | [Version] |
| [POL-RISK-001] | Enterprise Risk Management Policy | [Version] |
| [STD-IT-001] | Secure Software Development Lifecycle (SDLC) Standard | [Version] |
| [STD-IT-002] | Vulnerability Management Standard | [Version] |
| [STD-IT-003] | Cryptography and Key Management Standard | [Version] |
| [PRO-IT-001] | Incident Response Procedure | [Version] |

---

## 3. Definitions and Abbreviations

*Define key terms used throughout this document to ensure consistent interpretation.*

### 3.1 Definitions

| Term | Definition |
|---|---|
| **Mobile Application** | A software application designed to run on a mobile device such as a smartphone or tablet, operating on platforms including iOS and Android. |
| **Customer-Facing Application** | A mobile application provided to retail or corporate customers to access the Organization's financial products or services. |
| **Jailbreaking / Rooting** | The process of removing software restrictions imposed by the device manufacturer or operating system vendor, which significantly increases security risk. |
| **Certificate Pinning** | A security control that restricts which TLS certificates a mobile application will accept during communications, reducing the risk of man-in-the-middle attacks. |
| **Multi-Factor Authentication (MFA)** | An authentication mechanism requiring two or more independent verification factors (knowledge, possession, or inherence). |
| **Secure Enclave** | A hardware-based secure processing environment available on modern mobile devices used to store cryptographic keys and perform sensitive operations. |
| **Runtime Application Self-Protection (RASP)** | Security technology built into an application that detects and responds to attacks in real time during application execution. |
| **Obfuscation** | The transformation of application code to make it difficult to reverse-engineer or understand. |
| **API Gateway** | A server-side component that acts as an entry point for all client requests to back-end services, enforcing authentication, authorisation, and rate limiting. |
| **Sensitive Data** | Any data that, if disclosed, modified, or destroyed without authorisation, could cause harm to the Organization, its customers, or third parties; includes personal data as defined under PDPA 2010. |

### 3.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act |
| NACSA | National Cyber Security Agency |
| MASVS | Mobile Application Security Verification Standard |
| OWASP | Open Web Application Security Project |
| MFA | Multi-Factor Authentication |
| OTP | One-Time Password |
| TLS | Transport Layer Security |
| API | Application Programming Interface |
| SDLC | Secure Software Development Lifecycle |
| RASP | Runtime Application Self-Protection |
| MDM | Mobile Device Management |
| SIEM | Security Information and Event Management |
| DAST | Dynamic Application Security Testing |
| SAST | Static Application Security Testing |
| CI/CD | Continuous Integration / Continuous Deployment |
| CVE | Common Vulnerabilities and Exposures |
| CVSS | Common Vulnerability Scoring System |

---

## 4. Roles and Responsibilities

*Define who owns, approves, implements, and audits the controls described in this document. Use the RACI model: **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

### 4.1 RACI Matrix

| Activity | [Relevant Department Head] | CISO / Information Security | Mobile Development Team | IT Operations | Risk & Compliance | Internal Audit | Third-Party Vendor |
|---|---|---|---|---|---|---|---|
| Approve and own this standard | A | C | I | I | C | I | I |
| Define and update security requirements | C | A/R | R | C | C | I | C |
| Implement security controls in mobile apps | I | C | A/R | C | I | I | R |
| Conduct static application security testing (SAST) | I | A | R | I | I | I | R |
| Conduct dynamic application security testing (DAST) | I | A | C | R | I | I | C |
| Manage third-party component vulnerabilities | I | A | R | R | C | I | R |
| Monitor and respond to runtime security events | I | A | C | R | I | I | I |
| Conduct annual review of this standard | A | R | C | C | R | C | I |
| Perform independent security assessments | I | C | I | I | A | R | I |
| Escalate and manage security incidents | A | R | R | R | C | I | C |
| Maintain application inventory | C | C | R | A | I | I | I |

### 4.2 Role Descriptions

**[Relevant Department Head]**

*The designated owner of this standard. Responsible for ensuring adequate resources, oversight, and executive accountability.*

- Approves and signs off on this standard and all subsequent revisions;
- Ensures business alignment with security requirements;
- Escalates non-compliance issues to senior management.

**Chief Information Security Officer (CISO) / Head of Information Security**

*Responsible for setting the security direction and ensuring standards remain current with threat landscape and regulatory requirements.*

- Maintains and updates this standard;
- Provides security expertise and advisory to development teams;
- Reviews and approves security exceptions.

**Mobile Development Team**

*Responsible for embedding security controls throughout the development lifecycle.*

- Implements all technical controls specified in this standard;
- Participates in security design reviews and threat modelling;
- Remediates identified vulnerabilities within agreed timelines.

**IT Operations**

*Responsible for the infrastructure and runtime environment supporting mobile applications.*

- Maintains secure configurations for API gateways and back-end services;
- Monitors infrastructure-level security events;
- Supports certificate and key management operations.

**Risk and Compliance**

*Responsible for ensuring regulatory alignment and risk governance.*

- Reviews this standard against regulatory requirements;
- Tracks and reports compliance status to senior management;
- Maintains the register of approved exceptions.

**Internal Audit**

*Provides independent assurance on the design and operating effectiveness of controls.*

- Conducts periodic audits of compliance with this standard;
- Reports findings and monitors remediation;
- Escalates unresolved material findings to the Audit Committee.

---

## 5. Mobile Application Security Policy Statements and Requirements

*This section articulates the mandatory policy positions and high-level security requirements that govern all mobile applications. Authors should align these statements with the Organization's overall Information Security Policy.*

### 5.1 Policy Statements

The Organization is committed to providing secure, trustworthy mobile applications that protect customer data and financial assets. The following policy statements apply to all in-scope mobile applications:

1. **Security by Design** — Security considerations shall be incorporated from the earliest stage of mobile application design, not as an afterthought.

2. **Minimum Privilege** — Mobile applications shall request only the device permissions strictly required for their intended functionality. Excessive permissions are prohibited.

3. **Data Minimisation** — Mobile applications shall collect, process, and retain only the minimum customer data necessary to fulfil the service purpose, consistent with PDPA 2010 requirements.

4. **Zero Trust for Channels** — Mobile applications shall not inherently trust the device, network, or runtime environment. All communications with back-end services shall be authenticated and encrypted.

5. **No Sensitive Data in Insecure Storage** — Sensitive data, including credentials, tokens, personal data, and transaction records, shall not be stored in plaintext on the device.

6. **Regulatory Compliance** — All mobile applications shall comply with BNM RMiT Clause 12.2 and all applicable Malaysian laws and regulations.

7. **Continuous Security Assurance** — Security testing shall be conducted before each major release and at minimum annually, regardless of whether changes have been made.

8. **Vendor Accountability** — Third-party developers and technology vendors shall comply with these standards as a contractual obligation.

### 5.2 Mandatory Security Requirements Summary

*The table below summarises mandatory security controls. Each control is cross-referenced to its detailed specification in subsequent sections.*

| Control ID | Control Description | Applicability | Detailed Section |
|---|---|---|---|
| MOB-001 | Implement certificate pinning for all API communications | All customer-facing apps | Section 6.3 |
| MOB-002 | Enforce multi-factor authentication for account access | All customer-facing apps | Section 7.2 |
| MOB-003 | Detect and block application use on jailbroken/rooted devices | All customer-facing apps | Section 6.5 |
| MOB-004 | Implement secure local storage using platform-native secure enclave | All apps handling sensitive data | Section 6.4 |
| MOB-005 | Enforce session timeout after [X] minutes of inactivity | All customer-facing apps | Section 8.2 |
| MOB-006 | Apply code obfuscation and anti-tampering controls | All customer-facing apps | Section 6.6 |
| MOB-007 | Conduct SAST and DAST prior to each production release | All in-scope apps | Section 11.2 |
| MOB-008 | Implement runtime application self-protection (RASP) | All customer-facing apps | Section 6.7 |
| MOB-009 | Apply transport layer security (TLS 1.2 minimum, TLS 1.3 preferred) | All in-scope apps | Section 6.3 |
| MOB-010 | Maintain an approved third-party component inventory | All in-scope apps | Section 10.1 |
| MOB-011 | Disable clipboard access for sensitive input fields | All customer-facing apps | Section 6.4 |
| MOB-012 | Implement device binding for registered user sessions | All customer-facing apps | Section 7.4 |
| MOB-013 | Log all authentication events and forward to SIEM | All in-scope apps | Section 12.2 |
| MOB-014 | Implement biometric authentication as a supported MFA factor | All customer-facing apps | Section 7.3 |

### 5.3 Security Exception Management

*Describe the process for requesting, reviewing, and approving exceptions to mandatory controls.*

Where strict compliance with a mandatory security control is not technically feasible or creates a disproportionate business impact, a **Security Exception Request** may be submitted. All exceptions shall:

- Be documented using [Reference to Exception Request Form];
- Identify the specific control(s) affected and the justification;
- Propose compensating controls;
- Be reviewed and approved by the CISO and [Relevant Department Head];
- Be time-limited with a defined remediation plan;
- Be reported to Risk and Compliance for inclusion in the risk register;
- Be reviewed at the next scheduled review of this standard.

| Field | Details |
|---|---|
| Exception Form Reference | [FORM-ISEC-EXC-001] |
| Approval Authority | CISO and [Relevant Department Head] |
| Maximum Exception Duration | [12 months] |
| Exception Register Location | [Reference to Risk Register / GRC System] |

---

## 6. Channel Security Architecture

*This section defines the required security architecture for mobile application communication channels and client-side security controls. Authors should include architecture diagrams or reference them as appendices where applicable.*

### 6.1 Architecture Principles

*Describe the overarching security architecture principles that govern how mobile applications are designed and connected to back-end infrastructure.*

The mobile application channel architecture shall conform to the following principles:

- **Defence in Depth** — Multiple overlapping security controls shall be applied at the device, transport, API, and application layers;
- **Segmentation** — Mobile-facing APIs shall be isolated from internal systems through an API gateway layer;
- **Encryption Everywhere** — All data in transit and at rest shall be encrypted using approved algorithms;
- **API Security First** — Back-end services exposed to mobile clients shall be designed as secure APIs, with no direct database access from the mobile layer.

### 6.2 Reference Architecture

*Insert or reference a network/application architecture diagram illustrating the security zones, components, and trust boundaries for the mobile channel.*

**[Insert Mobile Channel Architecture Diagram — See Appendix A]**

The mobile channel architecture shall include the following components:

| Layer | Component | Security Controls Required |
|---|---|---|
| Client (Device) | Mobile Application | Code obfuscation, RASP, secure storage, jailbreak detection |
| Transport | TLS Channel | TLS 1.2/1.3, certificate pinning, HSTS |
| Edge | API Gateway / WAF | Authentication enforcement, rate limiting, DDoS protection, input validation |
| Application | Mobile API Services | Token-based authorisation (OAuth 2.0 / JWT), input validation, audit logging |
| Data | Back-End Databases | Encryption at rest, access control, audit trails |

### 6.3 Transport Layer Security

*Specify requirements for securing data in transit between the mobile application and server-side components.*

The following requirements apply to all network communications initiated by mobile applications:

- **TLS Version** — Only TLS 1.2 or TLS 1.3 shall be used. SSLv3, TLS 1.0, and TLS 1.1 are prohibited.
- **Cipher Suites** — Only strong, approved cipher suites shall be used. A list of approved cipher suites is maintained in [Reference to Cryptography Standard].
- **Certificate Validity** — Server certificates shall be issued by an approved Certificate Authority (CA), shall not be expired, and shall have a validity period not exceeding [24 months].
- **Certificate Pinning** — All customer-facing applications shall implement certificate pinning to prevent acceptance of fraudulent certificates. The pinning strategy shall include:
  - Pinning of the leaf certificate or the CA public key;
  - A fallback mechanism for certificate rotation without forced app updates;
  - A defined process for pin updates during certificate renewal.
- **No Cleartext Traffic** — Applications shall enforce `cleartext traffic disabled` at the platform level (iOS App Transport Security; Android Network Security Configuration).

| Requirement | Minimum Standard | Preferred Standard |
|---|---|---|
| Protocol Version | TLS 1.2 | TLS 1.3 |
| Certificate Validity | Issued by approved CA | Extended Validation (EV) |
| Certificate Pinning | Leaf or CA pin | CA public key pin with backup |
| Cleartext Traffic | Prohibited | Prohibited |

### 6.4 Sensitive Data Storage Controls

*Define requirements for how sensitive data is stored on the mobile device.*

Mobile applications shall not store sensitive data in locations that are accessible to other applications or easily extractable. The following controls are mandatory:

**Prohibited Storage Locations:**

- Plaintext files on external storage (SD card or shared storage);
- Shared preferences / NSUserDefaults without encryption;
- Application logs or debug output;
- SQLite databases without encryption;
- The device clipboard (for sensitive input fields such as passwords, OTPs, and account numbers).

**Approved Storage Mechanisms:**

| Data Type | Approved Storage Mechanism | Platform |
|---|---|---|
| Cryptographic keys, biometric references | Android Keystore / iOS Secure Enclave / Keychain | Android / iOS |
| Session tokens | Android Keystore-encrypted SharedPreferences / iOS Keychain | Android / iOS |
| User credentials (if stored) | Platform-native credential storage only | Android / iOS |
| Application configuration with sensitive values | Encrypted file using AES-256 with key in Keystore/Keychain | Android / iOS |
| Cached customer data | Encrypted SQLite (e.g., SQLCipher) or encrypted file store | Android / iOS |

**Additional Requirements:**

- Sensitive data shall be cleared from memory as soon as it is no longer required;
- Auto-fill and text prediction shall be disabled for sensitive input fields;
- Screenshots and screen recording shall be blocked when the application displays sensitive data (use `FLAG_SECURE` on Android; prevent screenshots via iOS display layer controls).

### 6.5 Jailbreak and Root Detection

*Specify the controls required to detect and respond to applications running on compromised devices.*

Mobile applications shall implement runtime detection of jailbroken (iOS) or rooted (Android) devices. Upon detection, the application shall:

- **Block access** to sensitive features and data;
- Display an appropriate user-facing warning message;
- Generate a security event log entry to be forwarded to the SIEM;
- Optionally prompt the user to contact customer support.

Detection mechanisms shall include but are not limited to:

| Detection Method | iOS | Android |
|---|---|---|
| Presence of jailbreak/root tools | Check for Cydia, SuperSU, Magisk | Check for su binary, Superuser.apk |
| File system access checks | Write to `/private` directory | Access to `/system/xbin/su` |
| Sandbox integrity checks | Fork restriction test | Check for test-keys in build properties |
| Process integrity | Check for unexpected running processes | Check for root management processes |
| Third-party detection libraries | [Approved Library Name] | [Approved Library Name] |

The CISO shall maintain a list of approved detection libraries and mechanisms. Detection logic shall be reviewed at each major release cycle to account for evasion technique evolution.

### 6.6 Code Protection and Anti-Tampering

*Define requirements for protecting application code from reverse engineering and unauthorised modification.*

- **Code Obfuscation** — All customer-facing application code shall be obfuscated prior to release. Obfuscation shall cover class names, method names, and string literals. The approved obfuscation tool is [Tool Name / Version].
- **Anti-Debugging** — Applications shall detect and respond to attempts to attach a debugger at runtime.
- **Integrity Verification** — Applications shall verify their own integrity (e.g., checksum or signature validation) at startup and periodically during runtime. Any tampering detected shall result in immediate session termination.
- **Binary Hardening** — Applications shall be compiled with stack protection, address space layout randomisation (ASLR), and position-independent executable (PIE) flags enabled.
- **Repackaging Detection** — Applications shall validate their signing certificate at runtime and terminate if they are not signed by the Organisation's approved signing key.

### 6.7 Runtime Application Self-Protection (RASP)

*Specify requirements for RASP controls embedded within mobile applications.*

[Organization Name] shall implement RASP capabilities in all customer-facing mobile applications. RASP controls shall include:

- Real-time detection of dynamic instrumentation frameworks (e.g., Frida, Xposed);
- Hooking detection for security-critical functions (authentication, payment authorisation);
- Emulator detection to prevent automated attack execution in emulated environments;
- Automated response to detected threats, including session termination and event logging.

The approved RASP solution(s) are: **[RASP Solution Name / Version]**

| RASP Detection Capability | Response Action | Log Level |
|---|---|---|
| Debugger attached | Terminate session | Critical |
| Dynamic instrumentation detected | Terminate session | Critical |
| Emulator environment detected | Block access | High |
| Code tampering detected | Terminate application | Critical |
| Hooking of security functions detected | Terminate session | Critical |

---

## 7. Customer Authentication Requirements

*This section defines the authentication controls that must be implemented for customer-facing mobile applications. Authors should align these requirements with the Organization's Authentication Policy and BNM RMiT Clause 12.2 specifications for strong customer authentication.*

### 7.1 Authentication Policy Statements

- All customer-facing mobile applications shall require **authentication before granting access** to any account information, financial features, or personal data;
- Authentication shall meet the requirements of **strong customer authentication (SCA)** as defined by BNM RMiT;
- Authentication mechanisms shall be **resistant to phishing, replay attacks, and credential stuffing**;
- The Organisation shall maintain a centralised **Identity and Access Management (IAM)** system as the authoritative source for customer authentication.

### 7.2 Multi-Factor Authentication (MFA) Requirements

*Specify when MFA is mandatory and define the accepted authentication factors.*

MFA is **mandatory** for the following activities:

| Activity | MFA Required | Accepted Factors |
|---|---|---|
| Initial application login | Yes | Password + OTP / Biometric |
| High-value transaction authorisation | Yes | Biometric + Transaction Signing |
| Device registration | Yes | Password + OTP |
| Change of security credentials | Yes | Password + OTP + Biometric |
| Access from new/unregistered device | Yes | All factors |
| Password / PIN reset | Yes | OTP + Identity Verification |
| View full account number / sensitive data | Yes | Biometric or OTP |

**Accepted Authentication Factors:**

| Factor Type | Accepted Mechanisms |
|---|---|
| Knowledge | Password, PIN (minimum [6] digits), Security Questions (secondary only) |
| Possession | SMS OTP, Email OTP, Hardware Token, Push Notification |
| Inherence | Fingerprint (Touch ID / Fingerprint sensor), Face recognition (Face ID) |

**Prohibited Authentication Practices:**

- Static passwords without a second factor for transaction initiation;
- SMS OTP as the sole authentication factor for high-value transactions (above BNM-specified thresholds);
- Security questions as a primary authentication factor;
- Storage of passwords or PINs in plaintext, reversibly encrypted, or weakly hashed form.

### 7.3 Biometric Authentication

*Define requirements for implementing biometric authentication in mobile applications.*

- Biometric authentication shall leverage **platform-native biometric APIs** (Android BiometricPrompt API; iOS LocalAuthentication framework) and shall not implement custom biometric matching;
- The application shall not store raw biometric data; all biometric processing shall occur within the device's secure enclave;
- Biometric authentication shall be **Class 3 (Strong) biometric** on Android (formerly Face/Fingerprint biometric at the highest assurance level);
- **Fallback to knowledge factor** shall be permitted after a defined number of failed biometric attempts: **[Maximum: 3 failed attempts before fallback]**;
- The application shall provide an option for customers to **disable biometric authentication** and revert to knowledge-factor-based authentication;
- Re-enrolment of biometric credentials at the device level shall trigger a **re-authentication challenge** on next application access.

| Biometric Control | Requirement |
|---|---|
| API Usage | Platform-native only (BiometricPrompt / LocalAuthentication) |
| Data Storage | Secure enclave only; no raw biometric data |
| Failed Attempt Limit | [3] attempts before fallback |
| Fallback Mechanism | PIN / Password + OTP |
| New Biometric Enrolment | Triggers re-authentication |
| Supported Modalities | Fingerprint, Face (where supported by device) |

### 7.4 Device Registration and Binding

*Specify requirements for binding an authenticated user session to a registered device.*

- Customers shall be required to **register each device** used to access mobile banking services;
- Device registration shall require full MFA completion and shall generate a unique **device binding token** stored in the device's secure storage;
- A customer shall be permitted to register a maximum of **[X] devices** concurrently. Registration of additional devices shall require de-registration of an existing device;
- Customers shall be able to **remotely de-register devices** via the mobile application, online banking portal, or customer service channel;
- Each device registration event shall be **notified to the customer** via an out-of-band channel (SMS or email);
- Unregistered devices shall only be permitted to access non-sensitive features (e.g., product information, branch locator).

| Device Registration Control | Requirement |
|---|---|
| Registration Factor | Full MFA (Knowledge + OTP) |
| Device Binding Token Storage | Platform Keystore / Keychain |
| Maximum Registered Devices | [X] per customer |
| Customer Notification | SMS and/or email on registration and de-registration |
| Remote De-registration | Available via app, online banking, and customer service |
| Token Validity | Bound to device; invalidated on de-registration or credential change |

### 7.5 Password and PIN Policy

*Define the minimum complexity, rotation, and management requirements for passwords and PINs used within mobile applications.*

| Parameter | Password | Transaction PIN |
|---|---|---|
| Minimum Length | [12] characters | [6] digits |
| Complexity | Uppercase, lowercase, number, special character | Numeric only |
| History | Last [12] passwords prohibited | Last [5] PINs prohibited |
| Maximum Age | [90] days | [180] days |
| Account Lockout | [5] failed attempts | [3] failed attempts |
| Lockout Duration | [30 minutes] or admin unlock | [30 minutes] or admin unlock |
| Reset Channel | In-app with MFA, or via contact centre | In-app with MFA |

---

## 8. Session Management Controls

*This section defines the controls required to manage customer sessions within mobile applications securely, from initiation through to termination. Authors should ensure these controls are tested as part of each release.*

### 8.1 Session Token Requirements

*Define requirements for the generation, storage, and management of session tokens.*

- Session tokens shall be generated by the **server-side authentication service** and shall not be generated or trusted if generated client-side;
- Tokens shall be **cryptographically random**, with a minimum entropy of **[128 bits]**;
- Tokens shall be transmitted **exclusively over TLS-protected channels**;
- Tokens shall be stored in **platform-native secure storage** (Android Keystore / iOS Keychain) and shall never be written to logs, URIs, or unencrypted storage;
- Separate tokens shall be used for **authentication sessions** and **transaction authorisation**;
- Token format shall conform to **[JWT with RS256/ES256 signature / OAuth 2.0 Bearer Token]** as defined in the Organisation's API Security Standard.

| Token Property | Requirement |
|---|---|
| Generation | Server-side only |
| Entropy | Minimum 128 bits |
| Transmission | TLS only |
| Storage | Platform Keystore / Keychain |
| Scope | Separate tokens for session and transactions |
| Format | [JWT / OAuth 2.0 Bearer] |

### 8.2 Session Timeout and Inactivity Controls

*Specify inactivity and absolute session timeout values and the actions required upon timeout.*

| Timeout Type | Duration | Action on Expiry |
|---|---|---|
| Inactivity timeout (foreground) | [5] minutes of user inactivity | Display re-authentication prompt |
| Background timeout | [1] minute in background | Lock application; require biometric or PIN to resume |
| Absolute session timeout | [30] minutes from session creation | Terminate session; require full login |
| High-value transaction timeout | [2] minutes from authorisation prompt display | Cancel transaction; notify customer |

Upon session timeout:

- The application shall **invalidate the server-side session token**;
- All sensitive data currently displayed shall be **cleared from the screen**;
- Any in-progress transaction shall be **cancelled** and the customer notified;
- A **re-authentication flow** shall be initiated before granting access.

### 8.3 Concurrent Session Management

*Define the controls applied when a customer attempts to establish multiple concurrent sessions.*

- A customer shall be permitted to hold a maximum of **[1] concurrent active session** across all registered devices;
- Establishment of a new session shall **automatically invalidate** the existing session on the previous device;
- The customer shall be **notified via out-of-band channel** (SMS or email) when an active session is terminated due to new login;
- Concurrent session policy exceptions (e.g., for corporate multi-user accounts) must be approved by the CISO and documented in the exceptions register.

### 8.4 Session Termination and Logout

*Define requirements for secure session termination.*

- The application shall provide a clearly visible and accessible **logout function** at all times during an authenticated session;
- On logout (user-initiated or timeout-triggered):
  - The **server-side session token shall be revoked** and added to a token deny-list;
  - All **cached sensitive data** shall be cleared from device memory and application storage;
  - The application shall **return to the pre-authentication state**;
  - The event shall be **logged** with timestamp, device identifier, and session identifier.
- **Back navigation** after logout shall not allow access to previously displayed sensitive screens (prevent back-stack exploitation).

### 8.5 Re-authentication Requirements

*Specify conditions under which the application must require the customer to re-authenticate.*

Re-authentication shall be required under the following conditions:

| Trigger Condition | Re-authentication Requirement |
|---|---|
| Session inactivity timeout | Biometric or PIN |
| Background timeout | Biometric or PIN |
| Absolute session timeout | Full login (MFA) |
| Access from new device | Full login (MFA) + Device Registration |
| Change of security settings | Full login (MFA) |
| High-value or atypical transaction | Transaction Signing (biometric or OTP) |
| Detected security anomaly (RASP event) | Full login (MFA) |

---

## 9. Secure Development Lifecycle for Mobile Applications

*This section defines the security activities that must be integrated into the development and release lifecycle for all in-scope mobile applications.*

### 9.1 Security by Design Requirements

*Specify the security activities required during the design and planning phases of development.*

- A **threat modelling exercise** shall be conducted for each new mobile application and for significant changes to existing applications;
- Threat modelling shall use the **[STRIDE / PASTA / other approved methodology]** methodology;
- The threat model shall be reviewed and approved by the Information Security team before development commences;
- Security requirements shall be documented as **acceptance criteria** in the project backlog.

### 9.2 Secure Coding Standards

*Define the coding standards and guidelines that development teams must follow.*

- All mobile application development shall conform to the **OWASP Mobile Application Security Verification Standard (MASVS)** at **[Level 2]** for customer-facing applications and **[Level 1]** for internal applications;
- Developers shall follow the **OWASP Mobile Security Testing Guide (MSTG)** as a reference for secure implementation;
- The Organisation's **Secure Coding Guidelines** ([Reference: STD-IT-SSDLC-001]) shall apply;
- Code reviews shall include a **security-focused review** by a trained developer or Information Security team member prior to merging to main/production branches.

### 9.3 Security in CI/CD Pipelines

*Specify the automated security gates required within the continuous integration and deployment pipeline.*

| Pipeline Stage | Required Security Activity | Blocking on Failure |
|---|---|---|
| Code Commit | Pre-commit hooks for secret scanning | Yes |
| Build | SAST scan (automated) | Yes — Critical findings |
| Build | Dependency vulnerability scan (SCA) | Yes — Critical/High CVEs |
| Pre-Release | DAST scan against test environment | Yes — Critical findings |
| Pre-Release | Manual security review sign-off | Yes |
| Release | Binary signing verification | Yes |
| Post-Release | Production monitoring alert configuration | No |

### 9.4 Security Sign-Off for Releases

*Define the security approval requirements before a mobile application is released to production or to public app stores.*

A **Security Release Approval** is required before each production release. Approval shall confirm:

- All mandatory security controls (Section 5.2) are implemented and verified;
- SAST and DAST results have been reviewed; critical and high findings are remediated or have approved exceptions;
- Third-party components have been reviewed and no unapproved critical CVEs are present;
- Threat model has been reviewed for changes in scope;
- Security test results are documented and retained in [Reference to Document Repository].

| Approver | Approval Scope |
|---|---|
| Mobile Development Lead | Technical implementation completeness |
| Information Security | Security testing results and control compliance |
| [Relevant Department Head] / Product Owner | Business risk acceptance |

---

## 10. Third-Party and Open-Source Component Management

*Define how the Organisation manages the security risk introduced by third-party libraries, SDKs, and open-source components in mobile applications.*

### 10.1 Component Inventory Requirements

- A **Software Bill of Materials (SBOM)** shall be maintained for each mobile application, listing all third-party and open-source components, their versions, licences, and known vulnerabilities;
- The SBOM shall be updated with each release and stored in [Reference to Repository];
- All third-party components shall be reviewed and **approved by Information Security** before inclusion in an application.

| SBOM Field | Description |
|---|---|
| Component Name | Name of the library or SDK |
| Version | Current version in use |
| Licence | Software licence type |
| Source | Package repository or vendor |
| Last Vulnerability Review | Date of last CVE check |
| Approval Status | Approved / Conditionally Approved / Prohibited |

### 10.2 Vulnerability Management for Components

- The Organisation shall subscribe to **vulnerability intelligence feeds** (e.g., NVD, vendor advisories) for all components in the SBOM;
- Components with **Critical (CVSS 9.0+)** vulnerabilities shall be patched or replaced within **[72 hours]**;
- Components with **High (CVSS 7.0–8.9)** vulnerabilities shall be patched or replaced within **[30 days]**;
- Components with no available patch shall be subject to an **exception request** with compensating controls;
- **End-of-life components** shall not be used in production applications.

| Severity | CVSS Score | Required Remediation Timeline |
|---|---|---|
| Critical | 9.0 – 10.0 | [72] hours |
| High | 7.0 – 8.9 | [30] days |
| Medium | 4.0 – 6.9 | [90] days |
| Low | 0.1 – 3.9 | Next scheduled release |

---

## 11. Mobile Application Testing and Assurance

*Define the security testing requirements for mobile applications, including the types of testing, frequency, and remediation obligations.*

### 11.1 Testing Overview

Security testing shall be conducted by **qualified personnel** or approved third-party security testing firms. Testing scope and results shall be documented and retained for a minimum of **[3 years]**.

### 11.2 Required Testing Types

| Test Type | Frequency | Performed By | Scope |
|---|---|---|---|
| Static Application Security Testing (SAST) | Every build (automated), pre-release (manual review) | Development Team / InfoSec | Source code analysis |
| Dynamic Application Security Testing (DAST) | Pre-release, and after significant changes | InfoSec / Approved Vendor |  Runtime analysis against test environment |
| Penetration Testing | Annual and before major releases | Approved External Vendor | Full application and API |
| Software Composition Analysis (SCA) | Every build (automated) | Development Team | Third-party components |
| Manual Security Code Review | Pre-release (significant changes) | InfoSec | Security-critical modules |
| Security Regression Testing | Post-patch | Development Team | Affected modules |

### 11.3 Penetration Testing Requirements

- Penetration testing of mobile applications shall align with the **OWASP Mobile Security Testing Guide (MSTG)** test cases;
- Testing shall cover at minimum: authentication, authorisation, data storage, cryptography, network communication, platform interaction, and reverse engineering resistance;
- The penetration testing vendor shall be **approved by Information Security** and shall hold relevant qualifications (e.g., CREST, OSCP, eWPTX);
- A **remediation plan** shall be developed and agreed within **[30 days]** of receipt of the penetration testing report;
- Critical findings shall be remediated within **[30 days]**; high findings within **[60 days]**.

### 11.4 Findings Classification and Remediation SLAs

| Severity | Definition | Remediation SLA |
|---|---|---|
| Critical | Exploitable; direct financial or data impact | [30] days |
| High | Exploitable with moderate effort; significant impact | [60] days |
| Medium | Requires specific conditions; moderate impact | [90] days |
| Low | Limited exploitability; minor impact | Next scheduled release |
| Informational | Best practice; no direct exploitability | Review and accept |

---

## 12. Incident Response and Monitoring

*Define the monitoring and incident response requirements specific to mobile application security events.*

### 12.1 Security Event Monitoring Requirements

All customer-facing mobile applications shall generate security event logs for the following activities:

| Event Category | Event Type | Log Level |
|---|---|---|
| Authentication | Successful login | Info |
| Authentication | Failed login attempt | Warning |
| Authentication | Account lockout triggered | High |
| Authentication | MFA bypass attempt | Critical |
| Session | Session created | Info |
| Session | Session timeout | Info |
| Session | Session forcibly terminated (anomaly) | High |
| Device | New device registration | High |
| Device | Device de-registration | Info |
| Device | Jailbreak/Root detected | Critical |
| Device | Tampering/RASP event detected | Critical |
| Transaction | High-value transaction initiated | High |
| Transaction | Transaction declined (security rule) | High |
| API | Rate limit exceeded | Warning |
| API | Unauthorised API access attempt | Critical |

### 12.2 Log Management Requirements

- All security event logs shall be forwarded to the Organisation's **SIEM** in real time or near-real time;
- Logs shall be retained for a minimum of **[12 months] online** and **[7 years] in archive**, consistent with BNM RMiT retention requirements;
- Logs shall include at minimum: timestamp (UTC), event type, session identifier, device identifier (anonymised), and outcome;
- Logs shall **not contain raw sensitive data** (passwords, card numbers, full account numbers, biometric data);
- Log integrity shall be protected against tampering.

### 12.3 Mobile-Specific Incident Response

*Describe the incident response procedures specific to mobile application security incidents, including escalation paths and communication requirements.*

In the event of a confirmed or suspected mobile application security incident:

1. **Identification** — Security event detected via SIEM alerting, customer report, or third-party notification;
2. **Containment** — Immediate actions may include: forced session invalidation across all active sessions, temporary suspension of affected features, or emergency application update;
3. **Eradication** — Root cause analysis; vulnerability patching; re-testing;
4. **Recovery** — Controlled restoration of service with enhanced monitoring;
5. **Notification** — Customer notification and BNM reporting as required under RMiT incident notification obligations;
6. **Post-Incident Review** — Lessons learned; updates to controls, standards, and procedures.

The escalation matrix for mobile security incidents is defined in **[Reference: PRO-IT-INC-001 — Incident Response Procedure]**.

| Incident Severity | Initial Response Time | Escalation To | BNM Notification |
|---|---|---|---|
| P1 — Critical | [1] hour | CISO, [Relevant Department Head], CEO | Within [24] hours if customer impact |
| P2 — High | [4] hours | CISO, [Relevant Department Head] | Within [72] hours |
| P3 — Medium | [8] hours | InfoSec Lead | As required |
| P4 — Low | [Next business day] | InfoSec Team | Not required |

---

## 13. Review and Approval

### 13.1 Review Schedule

This standard shall be reviewed:

- **Annually**, at minimum, from the effective date;
- **Upon significant change**, including:
  - Material changes to BNM RMiT or related regulatory requirements;
  - Introduction of a new mobile application platform or significant architectural change;
  - Following a significant security incident affecting mobile applications;
  - Following material changes to the mobile threat landscape.

The next scheduled review date is: **[Next Review Date]**

### 13.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 13.3 Approval Sign-Off

*This document requires the following approvals prior to becoming effective. All approvers confirm that they have read the document, understand its contents, and approve it for release.*

| Role | Name | Signature | Date |
|---|---|---|---|
| [Relevant Department Head] (Document Owner) | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer | [Name] | [Signature] | [Date] |
| Chief Technology Officer | [Name] | [Signature] | [Date] |
| Head of Compliance | [Name] | [Signature] | [Date] |

---

## 14. References

*List all external standards, regulatory documents, and frameworks referenced in this document.*

### 14.1 Regulatory and Legal References

| Reference | Document Title | Issuing Body | Relevant Clause |
|---|---|---|---|
| BNM/RH/PD 028-126 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 12.2 |
| BNM/RH/PD 028-126 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10 (Cybersecurity) |
| Act 709 | Personal Data Protection Act 2010 | Parliament of Malaysia | Sections 5, 9 |
| — | National Cyber Security Policy | NACSA | [Relevant sections] |
| — | Financial Sector Technology and Innovation (FSTI) Framework | Bank Negara Malaysia | [Relevant sections] |

### 14.2 Industry Standards and Frameworks

| Reference | Document Title | Issuing Body | Version |
|---|---|---|---|
| OWASP MASVS | Mobile Application Security Verification Standard | OWASP Foundation | [v2.x] |
| OWASP MSTG | Mobile Security Testing Guide | OWASP Foundation | [Latest] |
| OWASP Top 10 Mobile | OWASP Mobile Top 10 Risks | OWASP Foundation | [Latest] |
| NIST SP 800-63B | Digital Identity Guidelines — Authentication | NIST | [Latest] |
| ISO/IEC 27001 | Information Security Management Systems | ISO/IEC | 2022 |
| ISO/IEC 27005 | Information Security Risk Management | ISO/IEC | 2022 |
| PCI DSS | Payment Card Industry Data Security Standard | PCI SSC | v4.0 |

---

## 15. Appendices

### Appendix A — Mobile Channel Architecture Diagram

*Insert or attach a network and application architecture diagram illustrating the mobile application security zones, trust boundaries, component interactions, and security controls at each layer.*

**[Diagram Placeholder — Mobile Channel Security Architecture]**

Key elements to include in the diagram:
- Mobile client layer (device security zone)
- Transport layer (TLS channel)
- Edge security layer (API gateway, WAF, load balancer)
- Application services layer (mobile APIs, authentication service, session management)
- Data layer (databases, key management service, logging/SIEM)
- Out-of-band notification channel (SMS gateway, email)

---

### Appendix B — Approved Cryptographic Algorithms

*List the cryptographic algorithms approved for use in mobile applications. This list shall be maintained in alignment with the Organisation's Cryptography and Key Management Standard ([STD-IT-CRYPTO-001]).*

| Use Case | Approved Algorithm | Key Length | Notes |
|---|---|---|---|
| Data encryption at rest | AES-GCM | 256-bit | |
| Data encryption in transit | TLS 1.2 / TLS 1.3 | — | Specific cipher suites per Cryptography Standard |
| Digital signatures | ECDSA / RSA | P-256 / 2048-bit minimum | |
| Key derivation | PBKDF2, bcrypt, scrypt, or Argon2 | Per algorithm guidance | For password/PIN hashing |
| Hashing (data integrity) | SHA-256 or SHA-3 | — | SHA-1 prohibited |
| Random number generation | Platform-native CSPRNG | — | SecureRandom (Android), SecRandomCopyBytes (iOS) |

---

### Appendix C — Security Testing Checklist

*A high-level checklist for security testing of mobile applications, aligned to OWASP MASVS. This shall be completed and retained as evidence for each security testing cycle.*

| Control Area | Test ID | Test Description | MASVS Ref | Pass / Fail / N/A |
|---|---|---|---|---|
| Data Storage | MOB-T-001 | Sensitive data is not stored in plaintext on the device | MASVS-STORAGE-1 | |
| Data Storage | MOB-T-002 | No sensitive data in application logs | MASVS-STORAGE-2 | |
| Cryptography | MOB-T-003 | Only approved cryptographic algorithms are used | MASVS-CRYPTO-1 | |
| Authentication | MOB-T-004 | MFA is enforced for account login | MASVS-AUTH-1 | |
| Authentication | MOB-T-005 | Biometric authentication uses platform-native API | MASVS-AUTH-2 | |
| Session Management | MOB-T-006 | Session tokens invalidated on logout | MASVS-AUTH-3 | |
| Session Management | MOB-T-007 | Inactivity timeout enforced | MASVS-AUTH-4 | |
| Network | MOB-T-008 | TLS 1.2+ enforced; no cleartext traffic | MASVS-NETWORK-1 | |
| Network | MOB-T-009 | Certificate pinning implemented | MASVS-NETWORK-2 | |
| Platform | MOB-T-010 | Jailbreak/root detection implemented | MASVS-RESILIENCE-1 | |
| Platform | MOB-T-011 | Anti-debugging controls implemented | MASVS-RESILIENCE-2 | |
| Platform | MOB-T-012 | Code obfuscation applied | MASVS-RESILIENCE-3 | |
| Platform | MOB-T-013 | RASP controls implemented | MASVS-RESILIENCE-4 | |
| Permissions | MOB-T-014 | Only minimum required permissions requested | MASVS-PLATFORM-1 | |
| Data Display | MOB-T-015 | Screenshot prevention active on sensitive screens | MASVS-PLATFORM-2 | |

---

### Appendix D — Security Exception Register Template

*Maintain a register of all approved exceptions to this standard. Each entry shall be reviewed at the time of annual standard review.*

| Exception ID | Control Reference | Description of Exception | Justification | Compensating Controls | Approval Date | Approved By | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| EXC-MOB-001 | [e.g., MOB-003] | [Description] | [Business/technical justification] | [Compensating control description] | [Date] | [Name/Role] | [Date] | [Active/Expired] |

---

### Appendix E — Glossary of Regulatory References

*Provide a summary of the specific BNM RMiT clauses this document addresses, for quick reference during audits.*

| RMiT Clause | Title | Summary Requirement | Addressed In |
|---|---|---|---|
| 12.2 | Technology Channel Security | Financial institutions must implement security controls for all technology channels including mobile banking | Sections 6, 7, 8 |
| 12.2(a) | Authentication Controls | Strong customer authentication for digital channels | Section 7 |
| 12.2(b) | Session Management | Secure session management for digital channels | Section 8 |
| 12.2(c) | Channel Monitoring | Monitoring and detection of anomalous activity | Section 12 |
| 10.x | Cybersecurity | Comprehensive cybersecurity controls and incident response | Sections 9, 11, 12 |
| 11.x | Technology Operations | Secure operations, change management, and third-party management | Sections 9, 10 |

---

*End of Document*

---

**Document Control Notice:** This document is classified as **Confidential**. It shall not be reproduced, distributed, or disclosed to any party outside [Organization Name] without the prior written approval of [Relevant Department Head]. Printed copies are uncontrolled. The master copy is maintained in [Document Management System Name/Location].