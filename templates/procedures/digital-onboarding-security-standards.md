# Digital Onboarding Security Standards

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Board of Directors / Company Secretary |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorised personnel. Unauthorised disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Channel Security Architecture](#5-channel-security-architecture)
6. [Customer Authentication Requirements](#6-customer-authentication-requirements)
7. [Session Management Controls](#7-session-management-controls)
8. [Data Protection and Privacy Controls](#8-data-protection-and-privacy-controls)
9. [Fraud Detection and Monitoring](#9-fraud-detection-and-monitoring)
10. [Incident Management](#10-incident-management)
11. [Compliance and Assurance](#11-compliance-and-assurance)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the overarching intent of this document and the business and regulatory imperatives it addresses.*

This document establishes the security standards governing the digital customer onboarding process at [Organization Name]. It defines the minimum security controls, architectural requirements, and procedural obligations that must be implemented across all digital channels through which customers are onboarded, including but not limited to mobile applications, web portals, and API-enabled third-party interfaces.

These standards are established to ensure that:

- Customer identity verification is conducted in a secure and reliable manner;
- Digital onboarding channels are protected against unauthorised access, interception, and fraud;
- Personal and financial data collected during onboarding is handled in accordance with applicable data protection obligations;
- [Organization Name] meets its obligations under Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, specifically Clause 12.8; and
- The organisation maintains customer trust and operational resilience throughout the onboarding lifecycle.

### 1.2 Scope

*Define which business units, systems, channels, and customer segments fall within the ambit of this document.*

This document applies to:

**Organisational Scope:**

- All business units and departments involved in the design, development, operation, or oversight of digital customer onboarding processes;
- Third-party service providers and technology vendors engaged to deliver onboarding functions on behalf of [Organization Name];
- Internal technology and information security teams responsible for supporting onboarding infrastructure.

**Technology Scope:**

- Mobile banking applications (iOS and Android);
- Internet banking portals and web-based onboarding workflows;
- Application Programming Interfaces (APIs) that facilitate onboarding with partner or aggregator platforms;
- Identity verification systems, including eKYC platforms and biometric engines;
- Backend systems that process, store, or transmit onboarding data.

**Customer Scope:**

- Retail customers (individuals);
- Small and medium enterprise (SME) customers;
- [Any other applicable customer segments — e.g., corporate, non-resident customers]

**Out of Scope:**

- Physical branch-based onboarding processes (refer to [Branch Onboarding Procedures Document ID]);
- Employee onboarding and identity provisioning (refer to [HR / IAM Policy Document ID]);
- [Any other explicitly excluded processes or systems]

### 1.3 Objectives

*List the specific, measurable security objectives this standard aims to achieve.*

The specific objectives of this standard are to:

1. Establish minimum baseline security controls for all digital onboarding channels;
2. Ensure strong and risk-proportionate customer authentication during identity verification;
3. Mandate secure session management throughout the onboarding journey;
4. Define clear responsibilities for the implementation, monitoring, and assurance of onboarding security controls;
5. Provide a consistent and auditable framework for regulatory examination and internal review.

---

## 2. Regulatory Context

### 2.1 Regulatory Basis

*Identify the specific regulatory obligations and policy documents that mandate or inform this standard.*

This document has been prepared in response to the requirements set out in the following regulatory instruments:

| Regulatory Instrument | Issuing Authority | Relevant Clause(s) | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 12.8 | Security controls for digital onboarding |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Sections 5–8 (Data Protection Principles) | Collection and processing of customer personal data |
| Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLA) | BNM | [Relevant sections] | Customer due diligence and identity verification |
| Financial Services Act 2013 (FSA) / Islamic Financial Services Act 2013 (IFSA) | BNM | [Relevant sections] | Licensing and conduct obligations |
| [Other applicable BNM circulars or guidelines] | BNM | [Clause reference] | [Description] |

### 2.2 RMiT Clause 12.8 — Digital Services

*Summarise the specific requirements of RMiT Clause 12.8 as they pertain to digital onboarding security. Reference the full policy text in the appendices.*

RMiT Clause 12.8 sets out requirements for financial institutions offering digital services, including customer onboarding conducted through digital channels. Key obligations include:

- Implementation of robust identity verification mechanisms commensurate with the risk profile of the digital channel;
- Adoption of multi-factor authentication (MFA) for customer-facing digital services;
- Establishment of controls to detect and respond to fraudulent onboarding attempts;
- Maintenance of audit trails for all onboarding transactions;
- [Additional clause-specific requirements as extracted from the current RMiT Policy Document].

> **Note to Author:** Reproduce or paraphrase the full text of RMiT Clause 12.8 in Appendix A for ease of reference during audits. Ensure the version of RMiT referenced corresponds to the currently effective policy document.

### 2.3 Alignment with Internal Policy Framework

*Map this document to the organisation's internal policy hierarchy.*

This standard sits within [Organization Name]'s Information Security and Technology Risk Policy Framework and is subordinate to the following parent documents:

| Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent Policy |
| Technology Risk Management Policy | [Doc ID] | Parent Policy |
| Customer Data Protection Policy | [Doc ID] | Peer Policy |
| Identity and Access Management Standard | [Doc ID] | Peer Standard |
| eKYC Operating Procedures | [Doc ID] | Child Procedure |

---

## 3. Definitions and Abbreviations

### 3.1 Definitions

*Define key terms used throughout this document to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Digital Onboarding** | The process by which a customer establishes a relationship with [Organization Name] through a digital channel, including identity verification, account creation, and initial product enrolment, without the requirement for physical branch attendance. |
| **eKYC (Electronic Know Your Customer)** | The use of digital technologies to verify a customer's identity remotely, including the use of biometrics, document scanning, and database cross-referencing. |
| **Multi-Factor Authentication (MFA)** | An authentication mechanism requiring the customer to present two or more independent verification factors drawn from: something they know (knowledge), something they have (possession), and something they are (inherence). |
| **One-Time Password (OTP)** | A single-use password valid for a limited time, delivered via SMS, email, or an authenticator application, used as a second authentication factor. |
| **Session** | A bounded interaction period between a customer and a digital onboarding application, initiated upon authentication and terminated upon logout or timeout. |
| **Biometric Authentication** | Verification of a customer's identity using physiological characteristics such as fingerprint, facial recognition, or voice pattern. |
| **Certificate Pinning** | A security technique that associates a host with its expected X.509 certificate or public key, preventing man-in-the-middle attacks via fraudulent certificates. |
| **API (Application Programming Interface)** | A set of protocols and definitions enabling communication between software components or systems. |
| **Channel** | Any digital medium through which a customer interacts with [Organization Name] for the purposes of onboarding, including mobile applications, web browsers, and API integrations. |
| **[Additional Term]** | [Definition] |

### 3.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| AML | Anti-Money Laundering |
| API | Application Programming Interface |
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CTO | Chief Technology Officer |
| eKYC | Electronic Know Your Customer |
| IAM | Identity and Access Management |
| MFA | Multi-Factor Authentication |
| OWASP | Open Web Application Security Project |
| PDPA | Personal Data Protection Act 2010 |
| PKI | Public Key Infrastructure |
| RMiT | Risk Management in Technology |
| SLA | Service Level Agreement |
| SOC | Security Operations Centre |
| SSL/TLS | Secure Sockets Layer / Transport Layer Security |
| WAF | Web Application Firewall |

---

## 4. Roles and Responsibilities

### 4.1 Overview

*Describe the governance model underpinning the implementation and oversight of this standard.*

[Organization Name] adopts a three-lines-of-defence model for the governance of digital onboarding security. Roles and responsibilities are distributed across business units, technology functions, risk management, and internal audit in accordance with this model.

### 4.2 RACI Matrix

*The following RACI matrix defines the responsibility allocation for key activities related to digital onboarding security. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Board / Senior Management | CISO / Information Security | CTO / Technology | Risk Management | Compliance | Internal Audit | Product / Business Owner | Third-Party Vendor |
|---|---|---|---|---|---|---|---|---|
| Approval of this standard | A | C | C | C | C | I | I | — |
| Annual review and update of this standard | I | R | C | C | C | I | C | — |
| Design of channel security architecture | I | A | R | C | I | I | C | C |
| Implementation of authentication controls | I | A | R | I | I | I | C | R |
| Monitoring of onboarding fraud and anomalies | I | A | R | I | I | I | I | R |
| eKYC vendor due diligence and oversight | I | C | C | A | R | I | I | I |
| Penetration testing of onboarding channels | I | A | R | I | I | C | I | C |
| Reporting of onboarding security incidents | I | R | R | A | I | I | I | R |
| Regulatory reporting on onboarding controls | A | C | I | C | R | I | I | — |
| Customer data protection during onboarding | I | A | R | C | C | I | C | R |
| Training on onboarding security procedures | I | A | C | I | C | I | R | I |
| [Additional activity] | [R/A/C/I] | [R/A/C/I] | [R/A/C/I] | [R/A/C/I] | [R/A/C/I] | [R/A/C/I] | [R/A/C/I] | [R/A/C/I] |

### 4.3 Key Role Descriptions

*Provide narrative descriptions of the primary roles referenced in this standard.*

**Board of Directors / Senior Management**
The Board provides ultimate oversight of the organisation's technology risk posture and approves this standard. Senior Management is accountable for ensuring adequate resources are allocated to implement the controls defined herein.

**Chief Information Security Officer (CISO)**
The CISO is accountable for the integrity of this standard and for ensuring that information security controls governing digital onboarding are designed, implemented, and monitored effectively. The CISO reports onboarding security risk to the Board Risk Committee on a [quarterly/annual] basis.

**Chief Technology Officer (CTO) / Head of Technology**
The CTO is responsible for the technical implementation of the security architecture, authentication controls, and session management mechanisms defined in this standard. The CTO ensures that technology teams adhere to this standard throughout the software development lifecycle.

**Risk Management Function**
The Risk Management function provides independent challenge and oversight of onboarding security risks, maintains the technology risk register, and escalates material risks to the Risk Committee.

**Compliance Function**
The Compliance function monitors adherence to applicable regulatory requirements, including RMiT Clause 12.8, and coordinates responses to regulatory examinations and enquiries relating to digital onboarding.

**Internal Audit**
Internal Audit provides independent assurance over the design and operating effectiveness of the controls described in this standard. Audit findings are reported to the Audit Committee.

**Product / Business Owner**
The Product or Business Owner is responsible for embedding security requirements into digital onboarding product design and for ensuring that user experience considerations do not compromise security control effectiveness.

**Third-Party Vendors**
Vendors engaged to deliver onboarding technology (e.g., eKYC providers, biometric engine suppliers) are responsible for implementing and maintaining security controls as specified in their contractual agreements and service level agreements with [Organization Name].

---

## 5. Channel Security Architecture

### 5.1 Overview

*Describe the security architecture requirements that must be implemented across all digital onboarding channels. This section should be informed by the organisation's enterprise security architecture and reviewed by the technology and information security functions.*

[Organization Name] requires that all digital onboarding channels are designed and operated in accordance with a defence-in-depth security architecture. This architecture shall incorporate multiple layers of security controls to mitigate risks arising from network-based attacks, application vulnerabilities, and fraudulent user behaviour.

### 5.2 Approved Onboarding Channels

*List all approved digital channels through which customers may be onboarded, along with their risk classification.*

| Channel | Description | Risk Classification | Status |
|---|---|---|---|
| Mobile Application (iOS) | Native iOS application available via Apple App Store | High | [Active / Under Review] |
| Mobile Application (Android) | Native Android application available via Google Play Store | High | [Active / Under Review] |
| Internet Banking Portal | Web-based onboarding via HTTPS | High | [Active / Under Review] |
| API Integration (Partner) | Third-party aggregator or partner API onboarding | Very High | [Active / Under Review] |
| [Additional Channel] | [Description] | [Risk Classification] | [Status] |

> **Note:** Any new digital onboarding channel must undergo a formal security risk assessment and receive approval from the CISO and CTO prior to deployment. New channels must be documented in the table above and this standard updated accordingly.

### 5.3 Network Security Requirements

*Define the network-level security controls required to protect the onboarding channel infrastructure.*

The following network security controls are mandatory for all onboarding channels:

**5.3.1 Transport Layer Security**

- All communications between customer devices and [Organization Name] onboarding systems shall be encrypted using TLS version 1.2 or higher. TLS 1.0 and 1.1 are expressly prohibited.
- Cipher suites shall be restricted to those providing forward secrecy. Weak cipher suites (e.g., RC4, 3DES, NULL) shall be disabled.
- All TLS certificates shall be issued by a trusted Certificate Authority and shall have a validity period not exceeding [24 months / as per organisation PKI policy].
- Certificate expiry monitoring shall be in place with automated alerts triggered no less than [30 days] prior to expiry.

**5.3.2 Web Application Firewall (WAF)**

- A WAF shall be deployed in front of all internet-facing onboarding endpoints.
- The WAF shall be configured to detect and block OWASP Top 10 attack categories, including SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).
- WAF rulesets shall be reviewed and updated [monthly / upon release of new threat intelligence].
- WAF logs shall be forwarded to the Security Operations Centre (SOC) for monitoring.

**5.3.3 DDoS Protection**

- All onboarding channel endpoints shall be protected by a DDoS mitigation solution capable of absorbing volumetric, protocol, and application-layer attacks.
- DDoS protection thresholds and response procedures shall be documented in [DDoS Response Runbook Document ID].

**5.3.4 API Gateway Controls**

- All API-based onboarding integrations shall be routed through a centrally managed API Gateway.
- The API Gateway shall enforce rate limiting, request throttling, and payload size restrictions to prevent abuse.
- API keys and OAuth 2.0 tokens used for partner integrations shall be rotated on a [quarterly] basis or upon suspected compromise.

### 5.4 Application Security Requirements

*Define the application-level security controls that must be implemented in onboarding application code and configurations.*

**5.4.1 Secure Development Lifecycle**

- All onboarding application code shall be developed in accordance with [Organization Name]'s Secure Software Development Lifecycle (SSDLC) Policy [Document ID].
- Static Application Security Testing (SAST) shall be performed at each release gate.
- Dynamic Application Security Testing (DAST) and penetration testing shall be conducted prior to the production release of new onboarding channels and at least annually thereafter.

**5.4.2 Mobile Application Security**

- Mobile onboarding applications shall implement certificate pinning to prevent man-in-the-middle attacks using fraudulent certificates.
- Applications shall detect and refuse to operate on rooted (Android) or jailbroken (iOS) devices, or shall present the customer with an appropriate risk warning.
- Sensitive data (e.g., captured identity documents, biometric templates) shall not be stored in plaintext on the device. Secure storage mechanisms provided by the operating system (e.g., iOS Keychain, Android Keystore) shall be used.
- Applications shall implement anti-tampering and code obfuscation controls to deter reverse engineering.
- Clipboard access for sensitive fields (e.g., OTP entry, ID number) shall be restricted where technically feasible.

**5.4.3 Web Application Security**

- Web-based onboarding portals shall implement HTTP Strict Transport Security (HSTS) headers with a minimum max-age of [31536000 seconds].
- Content Security Policy (CSP) headers shall be configured to restrict the sources from which scripts and resources may be loaded.
- Anti-CSRF tokens shall be implemented for all state-changing operations within the onboarding workflow.
- Input validation shall be performed server-side for all customer-submitted data.

### 5.5 Infrastructure and Hosting Requirements

*Define the infrastructure security baseline for systems hosting onboarding services.*

| Control Area | Requirement | Responsible Party |
|---|---|---|
| Operating System Hardening | All servers hosting onboarding services shall be hardened in accordance with [CIS Benchmarks / Organisation Baseline] | CTO / Technology |
| Patch Management | Critical and high-severity patches shall be applied within [14 days] of release | CTO / Technology |
| Network Segmentation | Onboarding application servers shall reside in a dedicated network segment, isolated from internal corporate networks | CTO / Technology |
| Vulnerability Scanning | Infrastructure shall be subject to automated vulnerability scanning [weekly] | CISO / Information Security |
| Intrusion Detection | Network and host-based intrusion detection systems shall monitor onboarding infrastructure | SOC |
| Backup and Recovery | Onboarding system data shall be backed up [daily] and recovery procedures tested [quarterly] | CTO / Technology |
| [Additional Control] | [Requirement] | [Responsible Party] |

### 5.6 Third-Party and Cloud Security

*Define the security requirements applicable to third-party vendors and cloud service providers involved in the onboarding process.*

- All third-party vendors providing technology or services forming part of the digital onboarding channel shall undergo a security due diligence assessment prior to engagement and at least annually thereafter.
- Cloud service providers shall be assessed against the requirements of [BNM Cloud Computing Policy / Organisation Cloud Risk Framework].
- Contractual agreements with technology vendors shall include:
  - Minimum security standards aligned with this document;
  - Right-to-audit provisions;
  - Incident notification obligations (within [24 hours] of discovery);
  - Data residency and sovereignty requirements (data must remain within Malaysia unless otherwise approved by the CISO and CTO).
- A third-party onboarding security risk register shall be maintained and reviewed [quarterly].

---

## 6. Customer Authentication Requirements

### 6.1 Overview

*Describe the authentication framework applied during digital customer onboarding. Authentication controls should be risk-proportionate and aligned with BNM RMiT requirements and the organisation's identity assurance levels.*

[Organization Name] shall implement authentication controls during digital customer onboarding that are commensurate with the risk profile of the channel and the product being onboarded. Authentication during onboarding spans two distinct phases: identity proofing (verifying that the customer is who they claim to be) and channel authentication (verifying the customer's access to the digital channel).

### 6.2 Identity Proofing Requirements

*Define the controls required to verify a customer's identity at the point of onboarding.*

**6.2.1 Identity Document Verification**

- Customers shall be required to submit a valid government-issued identity document as part of the onboarding process. Acceptable identity documents are:

| Document Type | Acceptable For | Notes |
|---|---|---|
| Malaysian Identity Card (MyKad) | Malaysian citizens and permanent residents | Chip data extraction preferred over OCR where technically feasible |
| Malaysian Passport | Malaysian citizens | Accepted for non-resident Malaysians |
| Foreign Passport | Non-resident customers | Subject to enhanced due diligence |
| [Other document type] | [Customer segment] | [Notes] |

- Document verification shall include authenticity checks to detect fraudulent, altered, or expired documents.
- Where supported by the eKYC platform, Near Field Communication (NFC) chip reading of biometric passports and MyKad shall be used to extract machine-readable identity data.

**6.2.2 Biometric Verification**

- Biometric facial verification shall be required for all retail digital onboarding journeys.
- The biometric engine shall perform:
  - **Liveness Detection:** To confirm that the biometric sample is presented by a live individual and not a photograph, video replay, or 3D mask. The liveness detection mechanism shall achieve ISO 30107-3 Level 2 compliance or equivalent.
  - **Face Match:** A comparison of the customer's live biometric against the facial image on the identity document, with a match threshold of no lower than [configurable threshold — e.g., 90%].
- Biometric templates shall not be stored by [Organization Name] beyond the duration required for the onboarding verification process, unless explicitly consented to by the customer for future authentication purposes.
- The eKYC vendor providing biometric services shall be assessed against [ISO/IEC 30107 / NIST SP 800-76] standards.

**6.2.3 Database Cross-Referencing**

- Customer-supplied identity data shall be cross-referenced against authoritative databases to validate accuracy:

| Database | Purpose | Operator |
|---|---|---|
| National Registration Department (NRD) | MyKad verification | Government of Malaysia |
| CTOS / CCRIS | Credit and identity verification | [Credit Bureau] |
| National Blacklist / Sanctions Lists | AML/CFT screening | BNM / Internal Compliance |
| [Other database] | [Purpose] | [Operator] |

- Results of database checks shall be logged and retained as part of the customer's onboarding audit trail.

### 6.3 Multi-Factor Authentication Requirements

*Define the MFA requirements applicable during and after the onboarding process.*

**6.3.1 Mandatory MFA**

Multi-factor authentication shall be mandatory for the following onboarding steps:

| Step | Required Factors | Acceptable Factor Types |
|---|---|---|
| Initial account creation / registration | 2 factors | Mobile OTP (SMS) + Biometric or Knowledge |
| Identity document submission | Inherence factor | Biometric liveness check |
| Onboarding completion and account activation | 2 factors | Mobile OTP (SMS/Email) + Biometric |
| High-risk product enrolment (e.g., credit facility) | 3 factors | Possession + Inherence + Knowledge |
| [Additional step] | [Factors required] | [Acceptable types] |

**6.3.2 Authentication Factor Standards**

*Something You Know (Knowledge Factor):*

- Passwords shall meet the following complexity requirements:
  - Minimum length: [12 characters];
  - Shall contain at least one uppercase letter, one lowercase letter, one numeric character, and one special character;
  - Shall not match any of the customer's previous [5] passwords;
  - Shall not contain the customer's name, email address, or date of birth.
- PINs shall be a minimum of [6 digits] and shall not be a sequential or repeated pattern (e.g., 123456, 111111).

*Something You Have (Possession Factor):*

- OTPs delivered via SMS shall be valid for a maximum of [5 minutes] and shall expire after a single use.
- OTPs shall be a minimum of [6 digits] in length.
- OTP generation shall use a cryptographically secure random number generator.
- The maximum number of OTP entry attempts shall be [3], after which the onboarding session shall be suspended and the customer directed to an alternative verification channel.
- Hardware token or authenticator application (TOTP) use shall be supported as an alternative to SMS OTP.

*Something You Are (Inherence Factor):*

- Biometric authentication shall meet the standards defined in Section 6.2.2.
- Device-bound biometrics (e.g., fingerprint, Face ID) may be accepted as a second factor after the primary onboarding biometric verification has been completed.

### 6.4 Risk-Based Authentication

*Describe how risk scoring is applied to adjust authentication stringency during onboarding.*

[Organization Name] shall implement a risk-based authentication (RBA) framework that dynamically adjusts the level of authentication challenge based on the assessed risk of the onboarding transaction. The RBA engine shall evaluate the following risk signals:

| Risk Signal | Risk Weight | Description |
|---|---|---|
| Device fingerprint / new device | High | Onboarding attempted from a device not previously associated with the applicant |
| Geolocation anomaly | High | IP address or GPS location inconsistent with customer's declared address |
| Velocity anomaly | Very High | Multiple onboarding attempts from the same device or IP within a short period |
| Document quality failure | Medium | Identity document image fails quality checks on first attempt |
| Biometric match score below threshold | High | Liveness or face match score falls within an uncertain range |
| Blacklist match | Critical | Customer data matches an AML/CFT or fraud blacklist |
| [Additional signal] | [Weight] | [Description] |

Risk scoring outcomes shall trigger the following responses:

| Risk Score | Response |
|---|---|
| Low | Proceed with standard authentication requirements |
| Medium | Apply additional authentication step (e.g., knowledge-based question) |
| High | Escalate to manual review or branch-assisted onboarding |
| Critical | Immediately decline and trigger fraud alert to SOC and Compliance |

### 6.5 Credential Storage and Transmission

*Define how authentication credentials are stored and transmitted securely.*

- Customer passwords and PINs shall never be stored in plaintext. Credentials shall be hashed using an approved algorithm (e.g., bcrypt, Argon2id, PBKDF2) with a minimum work factor of [as per OWASP recommendations at time of implementation].
- Biometric templates shall be stored in an encrypted format using AES-256 or equivalent.
- Credentials shall never be transmitted in URL query strings or unencrypted request bodies.
- API tokens and session tokens shall be transmitted exclusively via HTTPS and stored securely using platform-appropriate secure storage mechanisms.

---

## 7. Session Management Controls

### 7.1 Overview

*Define the session management controls that govern the lifecycle of a customer's interaction with the onboarding application, from initiation through completion or abandonment.*

Effective session management is critical to preventing unauthorised access to partially completed onboarding workflows and protecting sensitive customer data entered during the onboarding journey. [Organization Name] shall implement session management controls that balance security with usability throughout the digital onboarding process.

### 7.2 Session Establishment

*Define the controls applied when a new onboarding session is initiated.*

- A new, cryptographically random session token shall be generated upon successful initiation of the onboarding process.
- Session tokens shall have a minimum entropy of [128 bits] and shall be generated using a cryptographically secure pseudorandom number generator (CSPRNG).
- Session tokens shall not contain any personally identifiable information (PII) or predictable elements.
- Session tokens shall be transmitted only over encrypted channels (TLS 1.2+).
- Previous session tokens shall be invalidated immediately upon the issuance of a new token.

### 7.3 Session Timeout Controls

*Define the inactivity and absolute session timeout thresholds applicable to onboarding sessions.*

| Session State | Timeout Period | Action on Timeout |
|---|---|---|
| Active — Pre-Authentication | [5 minutes] inactivity | Terminate session; customer must restart |
| Active — Post-Authentication (Onboarding In Progress) | [10 minutes] inactivity | Display warning; terminate after [2-minute] grace period |
| Absolute Session Limit | [30 minutes] from initiation | Terminate session regardless of activity |
| Incomplete Application (Saved State) | [72 hours] from last activity | Expire saved application; customer must restart |

- On session timeout, any sensitive data held in memory or temporary storage associated with the session shall be securely deleted.
- Customers shall be notified of impending session expiry with a warning displayed [2 minutes] before timeout, offering the option to extend the session.

### 7.4 Session Termination

*Define the conditions and procedures for session termination.*

Sessions shall be immediately and securely terminated under the following conditions:

- Customer explicitly logs out or abandons the onboarding journey;
- Session timeout threshold is reached;
- Onboarding is successfully completed;
- A fraud or anomaly signal triggers a risk threshold requiring session termination;
- Concurrent session detected from a different device or IP address (where concurrent session control is enabled).

Upon termination:

- The session token shall be invalidated server-side and added to a token blacklist (where applicable);
- All server-side session data shall be cleared;
- Cached data in the browser or application shall be cleared (e.g., via appropriate HTTP cache-control headers or application-level clearing routines).

### 7.5 Concurrent Session Controls

*Define how concurrent onboarding sessions are managed.*

- [Organization Name] shall [permit / restrict] concurrent onboarding sessions for the same applicant identity.
- Where concurrent sessions are detected, the following response shall apply: [Define response — e.g., terminate older session, alert the customer via OTP, escalate to manual review].
- Concurrent session events shall be logged and reviewed by the SOC [in real time / daily].

### 7.6 Session Data Protection

*Define the controls required to protect data held within an onboarding session.*

- Onboarding session data shall be stored server-side. Client-side storage of session state (e.g., in browser LocalStorage or cookies without appropriate flags) is prohibited.
- Session cookies shall be configured with the following security attributes:
  - `Secure` flag: Mandatory (cookie transmitted only over HTTPS);
  - `HttpOnly` flag: Mandatory (cookie inaccessible to JavaScript);
  - `SameSite` attribute: Set to `Strict` or `Lax` as appropriate to the onboarding workflow;
  - Appropriate expiry aligned with session timeout thresholds defined in Section 7.3.
- Partial application data (where a customer saves progress and returns) shall be encrypted at rest using AES-256 or equivalent.

### 7.7 Re-Authentication Requirements

*Define the circumstances under which a customer must re-authenticate within an active onboarding session.*

Re-authentication shall be required in the following circumstances:

| Trigger | Re-Authentication Requirement |
|---|---|
| Session resumed after inactivity timeout | Full MFA as defined in Section 6.3 |
| Navigation to a high-risk step (e.g., financial product selection, consent to terms) | Step-up authentication (possession or inherence factor) |
| Anomalous behaviour detected by RBA engine | Step-up authentication or manual review |
| Change of device mid-session | Full re-authentication and session reinitiation |

---

## 8. Data Protection and Privacy Controls

### 8.1 Data Minimisation

*Describe the data minimisation principles applied to the digital onboarding process.*

[Organization Name] shall collect only the personal data that is strictly necessary for the purposes of customer onboarding and regulatory compliance. Data fields collected shall be reviewed and approved by the Data Protection Officer (DPO) and shall be documented in the organisation's Data Inventory Register [Document ID].

The following principles shall be applied:

- Personal data shall not be collected merely because it may be useful in the future;
- Optional data fields shall be clearly distinguished from mandatory fields in the onboarding interface;
- Data fields marked as optional shall not be pre-populated or incentivised in a manner that pressures customers to provide unnecessary data.

### 8.2 Data Retention and Disposal

*Define the retention periods and secure disposal requirements for onboarding data.*

| Data Category | Retention Period | Disposal Method |
|---|---|---|
| Identity verification records (eKYC) | [7 years] from account closure | Secure deletion / cryptographic erasure |
| Biometric templates (not retained for authentication) | Duration of onboarding session only | Immediate secure deletion upon session end |
| Onboarding audit logs | [7 years] | Secure archival and deletion |
| Rejected / abandoned applications | [90 days] | Secure deletion |
| AML/CFT screening records | [7 years] | Secure archival |
| [Additional data category] | [Retention period] | [Disposal method] |

### 8.3 Customer Consent

*Define the consent management requirements applicable to digital onboarding.*

- Customers shall be presented with a clear and plain-language privacy notice prior to the collection of any personal data.
- Explicit consent shall be obtained for the collection and processing of sensitive personal data, including biometric data, where required under the PDPA.
- Consent records shall be captured and retained as part of the onboarding audit trail.
- Customers shall be informed of their rights under the PDPA, including the right to access, correct, and withdraw consent.

---

## 9. Fraud Detection and Monitoring

### 9.1 Real-Time Fraud Detection

*Describe the real-time controls in place to detect and respond to fraudulent onboarding attempts.*

[Organization Name] shall implement automated fraud detection controls that operate in real time throughout the digital onboarding journey. These controls shall include:

- Device fingerprinting and device reputation scoring;
- IP address geolocation and anonymisation detection (e.g., VPN, TOR, proxy detection);
- Velocity checks (multiple applications from the same device, IP, or identity);
- Behavioural biometrics analysis (e.g., typing cadence, navigation patterns);
- Cross-referencing against internal and external fraud databases;
- Automated alerting to the SOC upon detection of anomalous patterns.

### 9.2 Fraud Monitoring and Reporting

*Define the ongoing monitoring and reporting obligations.*

| Monitoring Activity | Frequency | Responsible Party | Escalation Threshold |
|---|---|---|---|
| Real-time fraud alert review | Continuous | SOC | Immediate on Critical alerts |
| Onboarding fraud trend analysis | [Weekly] | Information Security | [Define threshold — e.g., >5 fraud cases per week] |
| eKYC failure rate review | [Daily] | Technology | [Define threshold] |
| Reporting to Senior Management | [Monthly] | CISO | Material fraud events — immediate |
| Reporting to BNM (where required) | As required by regulation | Compliance | Per BNM reporting guidelines |

---

## 10. Incident Management

### 10.1 Onboarding Security Incidents

*Define what constitutes a security incident in the context of digital onboarding and how incidents are to be managed.*

The following events shall be treated as security incidents requiring formal incident response:

- Confirmed or suspected breach of customer identity data collected during onboarding;
- Successful account takeover during or immediately following the onboarding process;
- eKYC system compromise or manipulation;
- Discovery of a vulnerability in the onboarding channel that could expose customer data;
- Sustained DDoS attack targeting onboarding services;
- [Additional incident type].

### 10.2 Incident Response Obligations

All onboarding-related security incidents shall be managed in accordance with [Organization Name]'s Information Security Incident Management Policy [Document ID]. Key obligations include:

- Incidents shall be reported to the CISO within [1 hour] of detection;
- Incidents involving personal data breaches shall be assessed against PDPA notification obligations;
- Incidents that meet BNM's materiality thresholds shall be reported to BNM within the timeframes prescribed in RMiT;
- Post-incident reviews shall be conducted for all incidents rated [Medium] severity and above, with findings documented and remediation actions tracked.

---

## 11. Compliance and Assurance

### 11.1 Compliance Monitoring

*Describe how compliance with this standard is monitored on an ongoing basis.*

[Organization Name] shall maintain a continuous compliance monitoring programme for digital onboarding security controls. This programme shall include:

- Automated control testing integrated into the onboarding technology pipeline;
- Periodic self-assessments conducted by the first line of defence against the requirements of this standard;
- Independent review by the Risk Management function [semi-annually];
- Internal audit assessment [annually or as per the internal audit plan].

### 11.2 Penetration Testing

*Define the penetration testing requirements for digital onboarding channels.*

| Test Type | Frequency | Scope | Responsible Party |
|---|---|---|---|
| External penetration test | Annual (minimum) | All internet-facing onboarding endpoints | CISO / External vendor |
| Mobile application penetration test | Prior to each major release; annually | iOS and Android onboarding applications | CISO / External vendor |
| API security testing | Prior to new integration go-live; annually | All onboarding APIs | CTO / CISO |
| Red team exercise | [Biennial] | Full onboarding kill chain | CISO / External vendor |

Penetration test results shall be reviewed by the CISO and CTO. Critical and high-severity findings shall be remediated within [30 days] and [90 days] respectively, with progress tracked in the vulnerability management register.

### 11.3 Key Performance Indicators

*Define measurable KPIs to assess the effectiveness of onboarding security controls.*

| KPI | Target | Measurement Frequency | Owner |
|---|---|---|---|
| eKYC false acceptance rate (FAR) | < [0.1%] | Monthly | CTO |
| eKYC false rejection rate (FRR) | < [5%] | Monthly | CTO |
| OTP delivery success rate | > [99%] | Monthly | CTO |
| Onboarding fraud detection rate | > [95%] | Monthly | CISO |
| Critical vulnerability remediation time | ≤ 30 days | Per finding | CTO |
| Security incident mean time to detect (MTTD) | < [4 hours] | Monthly | SOC |
| Security incident mean time to respond (MTTR) | < [24 hours] | Monthly | SOC |
| Staff security training completion rate | [100%] | Quarterly | CISO |

---

## 12. Review and Approval

### 12.1 Review Schedule

This standard shall be reviewed:

- **Annually** as part of the scheduled policy review cycle, with the first review due no later than [Next Review Date];
- **Upon significant change**, including but not limited to: introduction of new onboarding channels, material changes to eKYC technology, significant regulatory updates, or following a material security incident affecting onboarding systems;
- **At the direction of the Board, Risk Committee, or regulators**, at any time.

Review findings shall be documented and any amendments to this standard shall follow the approval process described in Section 12.3.

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial version — approved for release |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of changes] |

### 12.3 Approval and Sign-Off

*This document requires approval from the following designated approvers prior to issuance and upon each revision.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Technology Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer | [Name] | [Signature] | [Date] |
| Head of Compliance | [Name] | [Signature] | [Date] |
| Board Representative / Company Secretary | [Name] | [Signature] | [Date] |

---

## 13. References

*List all regulatory documents, standards, and internal policies referenced in or relevant to this standard.*

### 13.1 Regulatory References

| Reference | Issuing Body | Version / Date | Relevant Sections |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | [Effective Date of current version] | Clause 12.8 |
| Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 (as amended) | Sections 5–8, 11 |
| Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 | Parliament of Malaysia | 2001 (as amended) | [Relevant sections] |
| Financial Services Act 2013 | Parliament of Malaysia | 2013 (as amended) | [Relevant sections] |
| BNM Policy Document on Electronic Know Your Customer (eKYC) | Bank Negara Malaysia | [Applicable version] | [All] |
| [Other BNM Circular / Guideline] | Bank Negara Malaysia | [Date] | [Sections] |

### 13.2 Standards and Frameworks

| Standard / Framework | Body | Relevant Sections |
|---|---|---|
| ISO/IEC 27001:2022 — Information Security Management | ISO/IEC | Annex A controls relevant to access control, cryptography, and supplier relationships |
| ISO/IEC 27002:2022 — Information Security Controls | ISO/IEC | [Relevant control domains] |
| ISO/IEC 30107-3 — Biometric Presentation Attack Detection | ISO/IEC | Part 3: Testing and Reporting |
| NIST SP 800-63-3 — Digital Identity Guidelines | NIST | All parts (enrolment, authentication, federation) |
| OWASP Mobile Application Security Verification Standard (MASVS) | OWASP | Levels L1 and L2 |
| OWASP Application Security Verification Standard (ASVS) | OWASP | Level 2 |
| PCI DSS v4.0 | PCI SSC | [Relevant requirements, if applicable to card onboarding] |

### 13.3 Internal Documents

| Document Title | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent Policy |
| Technology Risk Management Policy | [Doc ID] | Parent Policy |
| Secure Software Development Lifecycle (SSDLC) Policy | [Doc ID] | Supporting Policy |
| Identity and Access Management Standard | [Doc ID] | Related Standard |
| Customer Data Protection Policy | [Doc ID] | Related Policy |
| Information Security Incident Management Policy | [Doc ID] | Related Policy |
| eKYC Operating Procedures | [Doc ID] | Child Procedure |
| DDoS Response Runbook | [Doc ID] | Supporting Runbook |
| Third-Party Risk Management Policy | [Doc ID] | Related Policy |

---

## 14. Appendices

### Appendix A — RMiT Clause 12.8 Full Text

*Reproduce or provide an authoritative extract of RMiT Clause 12.8 here for ease of reference during regulatory examinations. Obtain the current text from the BNM RMiT Policy Document in force at the time of this document's last review.*

> **[Insert full text or authoritative extract of RMiT Clause 12.8 here]**

*Source: Bank Negara Malaysia, Risk Management in Technology (RMiT) Policy Document, Clause 12.8. Effective Date: [Date]. Retrieved from: [BNM official source].*

---

### Appendix B — Approved eKYC Vendors

*List the eKYC and identity verification vendors that have been formally assessed and approved for use in [Organization Name]'s digital onboarding process.*

| Vendor Name | Service Provided | Assessment Date | Next Review Date | Approver |
|---|---|---|---|---|
| [Vendor Name] | Biometric liveness detection and face matching | [Date] | [Date] | [CISO Name] |
| [Vendor Name] | Identity document verification (OCR and NFC) | [Date] | [Date] | [CISO Name] |
| [Vendor Name] | Database cross-referencing (NRD, credit bureau) | [Date] | [Date] | [CISO Name] |
| [Additional vendor] | [Service] | [Date] | [Date] | [Name] |

---

### Appendix C — Onboarding Security Risk Register

*Maintain a summary of identified risks to digital onboarding security, including risk ratings and mitigating controls. The full risk register is maintained in [Risk Management System / Document ID].*

| Risk ID | Risk Description | Inherent Risk Rating | Control(s) | Residual Risk Rating | Risk Owner | Last Reviewed |
|---|---|---|---|---|---|---|
| OBR-001 | Identity document forgery defeats eKYC verification | High | Biometric liveness + NFC chip reading + NRD cross-reference | Medium | CISO | [Date] |
| OBR-002 | SIM swap fraud enables OTP interception | High | Biometric authentication as primary factor; SIM swap detection | Medium | CISO | [Date] |
| OBR-003 | Man-in-the-middle attack on onboarding channel | High | TLS 1.3, certificate pinning, WAF | Low | CTO | [Date] |
| OBR-004 | Compromised eKYC vendor | High | Vendor due diligence, contractual security obligations, right to audit | Medium | Risk Management | [Date] |
| OBR-005 | Session token theft via XSS | High | HttpOnly/Secure cookie flags, CSP headers, SAST/DAST | Low | CTO | [Date] |
| [OBR-006] | [Risk description] | [Rating] | [Controls] | [Rating] | [Owner] | [Date] |

---

### Appendix D — Onboarding Security Control Checklist

*Use this checklist during pre-launch assessments, internal audits, and regulatory examinations to confirm that controls required by this standard are in place.*

**Channel Security Architecture**

- [ ] TLS 1.2 or higher enforced on all onboarding endpoints
- [ ] Weak cipher suites disabled
- [ ] WAF deployed and configured for OWASP Top 10
- [ ] DDoS mitigation in place
- [ ] API Gateway enforcing rate limiting and throttling
- [ ] Certificate pinning implemented in mobile applications
- [ ] Jailbreak/root detection implemented
- [ ] Mobile application anti-tampering controls in place
- [ ] HSTS headers configured on web portals
- [ ] CSP headers configured on web portals

**Authentication Controls**

- [ ] MFA enforced for all onboarding steps
- [ ] Biometric liveness detection meets ISO 30107-3 Level 2 or equivalent
- [ ] OTPs expire after 5 minutes and single use
- [ ] OTP retry lockout after 3 failed attempts
- [ ] Risk-based authentication engine operational
- [ ] Passwords hashed using approved algorithm (bcrypt / Argon2id / PBKDF2)

**Session Management**

- [ ] Session tokens cryptographically random (≥128 bit entropy)
- [ ] Session inactivity timeout ≤ 10 minutes
- [ ] Absolute session timeout ≤ 30 minutes
- [ ] Session tokens invalidated server-side on logout
- [ ] Cookies configured with Secure, HttpOnly, and SameSite flags

**Data Protection**

- [ ] PDPA-compliant privacy notice presented prior to data collection
- [ ] Explicit consent obtained for biometric data processing
- [ ] Biometric templates not retained beyond onboarding session (unless consented)
- [ ] Data retention periods defined and enforced

**Monitoring and Assurance**

- [ ] Onboarding audit logs retained for minimum 7 years
- [ ] Real-time fraud detection alerts operational
- [ ] SOC monitoring onboarding channels
- [ ] Annual penetration test completed
- [ ] All critical/high vulnerabilities remediated within SLA

---

### Appendix E — Glossary of Regulatory Terms

*Provide definitions for regulatory and technical terms specific to the Malaysian financial services regulatory environment.*

| Term | Definition | Source |
|---|---|---|
| BNM | Bank Negara Malaysia — the central bank and primary financial regulator of Malaysia | — |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions | BNM RMiT Policy Document |
| eKYC | Electronic Know Your Customer — digital identity verification using technology without physical presence | BNM eKYC Policy Document |
| PDPA | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data in commercial transactions | Malaysia PDPAct 2010 |
| AMLA | Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 | Malaysia AMLAct 2001 |
| [Additional term] | [Definition] | [Source] |

---

### Appendix F — Document Control and Distribution List

*Record the authorised distribution of this document.*

| Copy Number | Recipient | Role | Distribution Date | Format |
|---|---|---|---|---|
| 1 | [Name] | Chief Information Security Officer | [Date] | Electronic |
| 2 | [Name] | Chief Technology Officer | [Date] | Electronic |
| 3 | [Name] | Chief Risk Officer | [Date] | Electronic |
| 4 | [Name] | Head of Compliance | [Date] | Electronic |
| 5 | [Name] | Internal Audit | [Date] | Electronic |
| 6 | [Name] | Company Secretary (Board Records) | [Date] | Electronic / Hard Copy |
| [7] | [Name] | [Role] | [Date] | [Format] |

---

*End of Document*

---

*This document is classified as **Confidential**. It is the property of [Organization Name] and must not be reproduced, disclosed, or distributed without the prior written consent of the document owner. If you have received this document in error, please notify [Contact Name / Department] immediately and destroy all copies.*

*Document ID: [Document ID] | Version: 1.0 | Last Review: [Last Review Date] | Next Review: [Next Review Date]*