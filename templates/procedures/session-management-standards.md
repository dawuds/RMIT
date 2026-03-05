# Session Management Standards

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

> **Document Control Notice:** This document is classified as **Confidential**. It must not be reproduced, distributed, or disclosed to any party outside [Organization Name] without the prior written approval of the document owner. All printed copies are considered uncontrolled unless stamped "Controlled Copy."

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Framework](#2-regulatory-and-policy-framework)
3. [Definitions and Acronyms](#3-definitions-and-acronyms)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Policy Statements and Requirements](#5-policy-statements-and-requirements)
6. [Channel Security Architecture](#6-channel-security-architecture)
7. [Customer Authentication Requirements](#7-customer-authentication-requirements)
8. [Session Management Controls](#8-session-management-controls)
9. [Monitoring, Logging, and Incident Response](#9-monitoring-logging-and-incident-response)
10. [Compliance and Exceptions](#10-compliance-and-exceptions)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document and the specific security and compliance objective it addresses. Reference the regulatory mandate that necessitates these standards.*

This document establishes the **Session Management Standards** for [Organization Name] to ensure that all digital services, online banking platforms, and customer-facing applications implement secure, consistent, and auditable session management practices. These standards are established in compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 12.6**, which mandates financial institutions to implement adequate controls governing the establishment, maintenance, and termination of user and system sessions across all digital channels.

The purpose of this document is to:

- Define minimum security requirements for session lifecycle management across all digital service channels;
- Establish authentication and re-authentication thresholds commensurate with transaction risk;
- Provide technical and operational guidance to development, infrastructure, and operations teams;
- Ensure consistent protection of customer data and transaction integrity throughout a session;
- Demonstrate compliance with applicable regulatory and internal policy requirements.

### 1.2 Scope

*Define the boundary of this document, specifying which systems, teams, channels, and user populations are covered. Be explicit about exclusions.*

These standards apply to:

**In Scope:**

- All internet banking and mobile banking applications offered to retail and corporate customers of [Organization Name];
- All internal web-based applications and portals that access customer data or core banking systems;
- All API gateway and backend service sessions used to support digital banking operations;
- Third-party and outsourced systems that manage sessions on behalf of [Organization Name] under contractual obligation;
- All channels including but not limited to:
  - Internet Banking Portal (web browser);
  - Mobile Banking Application (iOS and Android);
  - Corporate/Business Banking Portal;
  - Agent and Branch Teller Workstations;
  - API integrations with registered third-party providers (TPPs).

**Out of Scope:**

- Internal corporate productivity tools not connected to core banking systems (governed separately under [IT Security Policy reference]);
- ATM session management (governed separately under [ATM Security Policy reference]);
- Vendor-managed SaaS platforms where session management is contractually delegated, subject to vendor attestation.

### 1.3 Applicability

*Specify the audience for this document.*

This document is applicable to the following personnel and functions within [Organization Name]:

| Audience | Relevance |
|---|---|
| Digital Banking Division | Primary owner and implementer |
| Information Technology (IT) Division | Technical implementation and infrastructure |
| Information Security Division | Security controls oversight and assurance |
| Risk Management Division | Policy compliance and risk acceptance |
| Internal Audit | Audit and assurance activities |
| Compliance Division | Regulatory reporting and liaison |
| Third-Party Vendors (where applicable) | Contractual alignment |

---

## 2. Regulatory and Policy Framework

### 2.1 Regulatory Basis

*List the specific regulatory documents, clauses, and external standards that this document has been written to satisfy. This section is critical for audit traceability.*

These standards have been developed in accordance with the following regulatory and industry frameworks:

| Reference | Document | Clause / Section | Requirement Summary |
|---|---|---|---|
| BNM | Risk Management in Technology (RMiT) | Clause 12.6 | Session management controls for digital services |
| BNM | Risk Management in Technology (RMiT) | Clause 12.1 – 12.5 | Broader digital service security architecture |
| BNM | Risk Management in Technology (RMiT) | Clause 11 | Customer authentication standards |
| BNM | Guidelines on Electronic Money (e-money) | [Applicable Section] | Session controls for e-money platforms |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 6, 9 | Security principle for personal data in transit |
| NACSA | National Cyber Security Policy | [Applicable Standard] | Cyber resilience baseline controls |
| ISO/IEC 27001 | Information Security Management | Annex A.9, A.14 | Access control and session management |
| OWASP | Application Security Verification Standard (ASVS) | Level 2, Section 3 | Session management verification requirements |
| PCI DSS | Payment Card Industry Data Security Standard | Requirement 8 | Unique IDs and authentication controls |

### 2.2 Internal Policy Hierarchy

*Map this document to [Organization Name]'s internal policy framework to demonstrate governance alignment.*

This document sits within [Organization Name]'s policy hierarchy as follows:

```
Board-Approved IT & Cybersecurity Policy
  └── Technology Risk Management Framework
        └── Digital Banking Security Policy
              └── Session Management Standards  ← This Document
                    └── Related Procedures and Guidelines
                          ├── Multi-Factor Authentication Procedure
                          ├── API Security Guidelines
                          └── Incident Response Procedure (Cyber)
```

---

## 3. Definitions and Acronyms

### 3.1 Definitions

*Provide precise definitions for all technical and regulatory terms used in this document to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Session** | A bounded interaction between a user (or system) and an application, initiated upon successful authentication and terminated upon logout, timeout, or system action. |
| **Session Token** | A cryptographically generated identifier issued by the server upon authentication to maintain session state; also referred to as a session ID or access token. |
| **Session Timeout** | The automatic invalidation of a session after a defined period of inactivity or maximum session duration. |
| **Idle Timeout** | The termination of a session due to a lack of user interaction for a defined consecutive period. |
| **Absolute Timeout** | The maximum allowable duration of a session regardless of user activity. |
| **Re-authentication** | The requirement for a user to re-confirm their identity during an active session, typically triggered by elevated-risk actions. |
| **Multi-Factor Authentication (MFA)** | An authentication mechanism requiring the verification of two or more independent factors: knowledge, possession, or inherence. |
| **Step-Up Authentication** | An in-session re-authentication requirement triggered when a user initiates a high-risk transaction or function. |
| **Channel** | A digital medium through which customers interact with [Organization Name]'s services (e.g., mobile app, web portal, API). |
| **Third-Party Provider (TPP)** | An authorized external party that accesses [Organization Name]'s services via API on behalf of a customer under Open Finance or similar frameworks. |
| **Privilege Session** | A session conducted by an administrator, privileged user, or system account with elevated access rights. |
| **Token Binding** | The cryptographic binding of a session token to the client's transport layer to prevent token theft and replay. |
| **Concurrent Session** | The existence of more than one active session for the same user identity at the same time. |

### 3.2 Acronyms

| Acronym | Expansion |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| MFA | Multi-Factor Authentication |
| OTP | One-Time Password |
| API | Application Programming Interface |
| HTTPS | Hypertext Transfer Protocol Secure |
| TLS | Transport Layer Security |
| JWT | JSON Web Token |
| OWASP | Open Web Application Security Project |
| ASVS | Application Security Verification Standard |
| CISO | Chief Information Security Officer |
| SOC | Security Operations Centre |
| SIEM | Security Information and Event Management |
| WAF | Web Application Firewall |
| PII | Personally Identifiable Information |
| IAM | Identity and Access Management |
| SSO | Single Sign-On |
| RACI | Responsible, Accountable, Consulted, Informed |

---

## 4. Roles and Responsibilities

### 4.1 Governance Structure

*Describe the governance structure that oversees session management standards, including committee ownership and escalation paths.*

[Organization Name] maintains a layered governance structure for digital security, with the **Digital Banking Steering Committee** providing strategic oversight and the **Technology Risk Committee** providing second-line assurance over compliance with these standards.

The **Head of Digital Banking** is the designated document owner and is accountable for ensuring that all digital channels operated by the division comply with the requirements set out in this document.

### 4.2 RACI Matrix

*The RACI matrix defines who is Responsible (R), Accountable (A), Consulted (C), and Informed (I) for each key activity related to session management. Each row must have exactly one Accountable (A) party.*

| Activity | Head of Digital Banking | IT Architecture | Information Security | Application Development | IT Operations | Risk & Compliance | Internal Audit |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Maintain and review this document | A | C | C | I | I | C | I |
| Define session timeout thresholds | A | R | C | C | I | C | I |
| Design session management architecture | C | A | C | R | C | I | I |
| Implement session controls in applications | C | C | C | A/R | I | I | I |
| Configure infrastructure-level session controls | C | C | C | I | A/R | I | I |
| Monitor session anomalies and alerts | I | I | A/R | I | R | I | I |
| Conduct periodic session management reviews | A | C | R | C | C | C | I |
| Approve exceptions to session standards | I | I | C | I | I | A | I |
| Audit compliance with this standard | I | I | C | I | I | C | A/R |
| Respond to session-related security incidents | I | C | A/R | C | R | I | I |
| Train staff on session management requirements | C | I | R | C | I | C | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 4.3 Individual Role Descriptions

*Expand on the specific responsibilities of each key role.*

**Head of Digital Banking**
- Owns this document and is accountable for its accuracy, currency, and enforcement.
- Approves changes to session management standards and escalates material deviations to the Technology Risk Committee.
- Ensures adequate resources are allocated for implementation and maintenance of session controls.

**IT Architecture**
- Designs and maintains the session management architecture aligned with these standards.
- Reviews and approves technical design documents for all new digital channels.
- Advises development teams on secure session implementation patterns.

**Information Security (CISO's office)**
- Reviews session management controls for adequacy and alignment with BNM RMiT requirements.
- Monitors threat intelligence relevant to session-based attacks (e.g., session hijacking, replay attacks).
- Provides security assurance over implementation through periodic testing and review.

**Application Development**
- Implements session management controls in accordance with the standards defined herein.
- Adheres to approved secure coding guidelines (see Appendix B).
- Participates in security testing activities prior to release.

**IT Operations**
- Configures and maintains infrastructure components (load balancers, WAF, API gateway) supporting session management.
- Ensures session logs are correctly forwarded to the SIEM platform.
- Responds to operational incidents affecting session availability.

**Risk and Compliance**
- Maintains the exceptions register for approved deviations from these standards.
- Ensures regulatory reporting obligations related to digital banking are met.
- Liaises with BNM on matters related to session management requirements.

**Internal Audit**
- Conducts independent assessments of compliance with this standard.
- Reports findings to the Audit Committee and relevant management.

---

## 5. Policy Statements and Requirements

### 5.1 Overarching Policy Statements

*State the high-level, non-negotiable policy positions of [Organization Name] regarding session management. These should be brief, declarative, and auditable.*

[Organization Name] adopts the following mandatory policy positions with respect to session management across all digital services:

1. **Security by Design:** Session management security shall be incorporated from the design phase of all digital services and shall not be treated as a post-deployment remediation activity.

2. **Principle of Least Privilege:** All sessions shall be granted only the permissions necessary for the user's role and the specific transaction being conducted. Elevated permissions shall require step-up authentication.

3. **Zero Persistence of Credentials:** Session tokens, authentication credentials, and sensitive session state data must not be persisted in insecure storage locations including browser localStorage, URL parameters, or application logs.

4. **Defense in Depth:** Session management controls shall be implemented at multiple layers, including the application tier, API gateway, network perimeter, and endpoint, ensuring no single point of failure.

5. **Mandatory Encryption:** All session communications shall be encrypted using current industry-approved protocols. Unencrypted transmission of session tokens is strictly prohibited.

6. **Auditability:** All session lifecycle events—creation, activity, step-up events, and termination—shall be logged in a tamper-evident manner and retained in accordance with [Organization Name]'s data retention policy.

7. **Regulatory Compliance:** These standards shall at all times meet or exceed the requirements of BNM RMiT Clause 12.6 and all other applicable regulatory mandates.

### 5.2 Mandatory Requirements

*Detail the specific, measurable, and testable requirements that all in-scope systems must satisfy. Requirements should be expressed as "shall" statements and traceable to regulatory sources.*

#### 5.2.1 Session Token Requirements

| Requirement ID | Requirement | Priority | RMiT Reference |
|---|---|---|---|
| STD-ST-001 | Session tokens shall be generated using a cryptographically secure random number generator with a minimum entropy of 128 bits. | Mandatory | RMiT 12.6 |
| STD-ST-002 | Session tokens shall be unique per session and must not be reused or predictable. | Mandatory | RMiT 12.6 |
| STD-ST-003 | Session tokens shall be invalidated server-side upon logout, timeout, or re-authentication. | Mandatory | RMiT 12.6 |
| STD-ST-004 | Session tokens must not be included in URLs, query strings, or log files. | Mandatory | RMiT 12.6 |
| STD-ST-005 | Session cookies shall be configured with the `Secure`, `HttpOnly`, and `SameSite=Strict` (or `SameSite=Lax` where technically justified) attributes. | Mandatory | RMiT 12.6 |
| STD-ST-006 | A new session token shall be issued upon successful authentication and upon privilege elevation. | Mandatory | RMiT 12.6 |

#### 5.2.2 Session Timeout Requirements

| Requirement ID | Requirement | Channel | Idle Timeout | Absolute Timeout |
|---|---|---|---|---|
| STD-TO-001 | Retail Internet Banking | Web Browser | 5 minutes | 30 minutes |
| STD-TO-002 | Retail Mobile Banking | Mobile Application | 5 minutes | 30 minutes |
| STD-TO-003 | Corporate/Business Banking | Web Browser | 5 minutes | 60 minutes |
| STD-TO-004 | Staff Internal Portals | Web Browser | 10 minutes | 8 hours |
| STD-TO-005 | Privileged/Admin Sessions | Web Browser | 5 minutes | 2 hours |
| STD-TO-006 | API Sessions (machine-to-machine) | API | [Define per agreement] | [Define per agreement] |

> **Note:** Timeout values must be reviewed annually or when threat landscape changes. Any reduction in timeout values is not considered a material change. Any increase to timeout values beyond those defined above requires Risk Management approval and documented justification.

#### 5.2.3 Concurrent Session Requirements

| Requirement ID | Requirement | Priority |
|---|---|---|
| STD-CS-001 | Retail customers shall, by default, be limited to one (1) concurrent active session per channel. | Mandatory |
| STD-CS-002 | Where concurrent sessions are detected, the system shall notify the customer and provide options to terminate prior sessions. | Mandatory |
| STD-CS-003 | Corporate users may be permitted up to [N] concurrent sessions subject to documented business justification and Risk Management approval. | Conditional |
| STD-CS-004 | Concurrent session limits and alerts shall be configurable and enforceable at the platform level. | Mandatory |

#### 5.2.4 Session Binding and Integrity

| Requirement ID | Requirement | Priority |
|---|---|---|
| STD-SB-001 | Sessions shall be bound to contextual attributes including IP address, device fingerprint, or user agent. Significant deviation shall trigger re-authentication. | Mandatory |
| STD-SB-002 | The system shall detect and respond to session fixation attacks by rejecting pre-authentication session tokens post-login. | Mandatory |
| STD-SB-003 | The system shall implement Cross-Site Request Forgery (CSRF) tokens for all state-changing operations within a session. | Mandatory |
| STD-SB-004 | Session state shall be maintained server-side. Client-side storage of authoritative session state is prohibited. | Mandatory |

---

## 6. Channel Security Architecture

### 6.1 Overview

*Describe the overarching session management architecture employed across [Organization Name]'s digital channels. Include a reference to the architecture diagram maintained separately.*

[Organization Name] operates a multi-channel digital banking platform. Each channel presents distinct session management requirements based on the client environment, transaction risk profile, and user population. This section defines the session architecture applicable to each channel category.

> *The formal session management architecture diagram is maintained by IT Architecture and referenced as **Appendix C**. All implementations shall conform to the approved architecture.*

### 6.2 Web Browser Channel (Internet Banking Portal)

*Describe the session management architecture specific to web-based banking channels.*

#### 6.2.1 Architecture Controls

| Control Area | Requirement | Implementation Guidance |
|---|---|---|
| Transport Security | TLS 1.2 minimum; TLS 1.3 preferred | Enforce via web server and WAF configuration |
| Session Token Storage | HttpOnly, Secure cookies only | No localStorage or sessionStorage for tokens |
| Cookie Scope | Domain and path scoped to application | Avoid wildcard domain cookies |
| HSTS | HTTP Strict Transport Security enabled | Min-age 31536000; include subdomains |
| CSRF Protection | Synchronizer token pattern | Token validated server-side on all POST/PUT/DELETE |
| Content Security Policy | CSP header configured | Restrict script sources; disable inline scripts |
| Frame Protection | X-Frame-Options: DENY or SAMEORIGIN | Prevent clickjacking attacks |

#### 6.2.2 Session Lifecycle (Web)

*Describe the end-to-end session lifecycle for web channel users.*

| Stage | Event | Action Required |
|---|---|---|
| **Pre-authentication** | User accesses login page | New anonymous session; no privileges |
| **Authentication** | Successful login (MFA completed) | Invalidate pre-auth token; issue new authenticated session token |
| **Active Session** | User navigates and transacts | Renew token on activity; enforce idle timeout |
| **Step-Up** | High-value transaction initiated | Require re-authentication (MFA); elevate session temporarily |
| **Idle Timeout** | No activity for [5] minutes | Invalidate session; display friendly timeout message |
| **Absolute Timeout** | Session reaches [30] minutes | Force logout; redirect to login |
| **Logout** | User clicks logout | Immediate server-side session invalidation; clear all cookies |
| **Forced Logout** | Security event detected | Immediate invalidation; alert SOC |

### 6.3 Mobile Application Channel

*Describe session management architecture specific to iOS and Android mobile banking applications.*

#### 6.3.1 Architecture Controls

| Control Area | Requirement | Implementation Guidance |
|---|---|---|
| Token Storage | Secure Enclave (iOS) / Android Keystore | Never store tokens in shared preferences or plain files |
| Certificate Pinning | TLS certificate pinning enforced | Pin leaf or intermediate certificate; implement pinning bypass detection |
| App Backgrounding | Session suspended on background | Re-authentication required if app is backgrounded beyond [2] minutes |
| Jailbreak/Root Detection | Detect compromised device state | Warn user; optionally deny session establishment |
| Screen Capture Prevention | FLAG_SECURE enabled (Android); UIScreen API controls (iOS) | Prevent sensitive content in recent apps |
| Biometric Re-authentication | Supported for low-risk actions | Biometric does not replace MFA for high-risk transactions |
| Offline Session Tokens | Not permitted for financial transactions | All financial transactions require live server session validation |

#### 6.3.2 Token Refresh Strategy (Mobile)

*Document the token refresh approach for mobile to balance user experience and security.*

[Organization Name] implements a **short-lived access token and long-lived refresh token** pattern for the mobile channel:

| Token Type | Validity Period | Storage Location | Refresh Trigger |
|---|---|---|---|
| Access Token | [15] minutes | In-memory only | On expiry; before each transaction |
| Refresh Token | [8] hours (absolute) | Device Secure Storage | Access token expiry |
| Refresh Token (biometric-extended) | [24] hours | Device Secure Storage, biometric-protected | Daily re-authentication via biometric |

> Refresh tokens shall be single-use (rotation policy). Upon use, a new refresh token is issued and the prior token is immediately invalidated.

### 6.4 API Channel (Open Banking / TPP Integration)

*Describe session and access management for API-based sessions used by third-party providers or machine-to-machine integrations.*

#### 6.4.1 Architecture Controls

| Control Area | Requirement | Implementation Guidance |
|---|---|---|
| Authentication Protocol | OAuth 2.0 with PKCE; OpenID Connect where identity required | No legacy API key-only authentication for customer data APIs |
| Token Type | JWT (signed RS256 or ES256) | Validate signature, expiry, issuer, and audience on every request |
| Access Token Expiry | Maximum [10] minutes for customer-data APIs | Short expiry limits blast radius of token compromise |
| Scope Limitation | Token scopes limited to consented resources | Enforce scope validation at API gateway |
| Token Revocation | Revocation endpoint implemented | Immediate revocation on customer consent withdrawal |
| Rate Limiting | Per-client and per-user rate limits enforced | Prevents session flooding and credential stuffing |
| Mutual TLS (mTLS) | Required for all TPP connections | Client certificate validation at API gateway |

### 6.5 Privileged User and Administrative Sessions

*Define heightened controls for sessions conducted by system administrators, database administrators, and other privileged users.*

Privileged sessions represent the highest risk session category and are subject to the following mandatory additional controls:

- **Privileged Access Workstations (PAW):** All administrative sessions shall be conducted from designated, hardened workstations.
- **Just-in-Time (JIT) Access:** Privileged access shall be provisioned on a time-limited, request-and-approval basis.
- **Session Recording:** All privileged sessions accessing production systems shall be recorded via [Privileged Access Management (PAM) tool name]. Recordings shall be retained for a minimum of [12] months.
- **Dual Control:** Changes to session management configuration parameters shall require a second authorized approver.
- **Reduced Timeout:** Privileged sessions shall apply a 5-minute idle timeout and 2-hour absolute timeout (non-negotiable).
- **Dedicated Credentials:** Administrators shall use separate, dedicated accounts for privileged access and must not use personal accounts.

---

## 7. Customer Authentication Requirements

### 7.1 Authentication Framework

*Describe the authentication framework underpinning session establishment, including the risk-based approach to authentication strength.*

[Organization Name] implements a **Risk-Based Authentication (RBA)** framework aligned with BNM RMiT Clause 11 requirements. Authentication strength is calibrated to the risk profile of the action being performed, ensuring that higher-risk transactions require stronger authentication without unnecessarily burdening low-risk interactions.

### 7.2 Authentication Factor Requirements

| Factor Category | Examples | Permitted Use |
|---|---|---|
| **Knowledge** | Password, PIN, security questions | Only as one component of MFA; not as sole factor for transactions |
| **Possession** | OTP via SMS, hardware token, authenticator app push notification | Permitted; SMS OTP subject to SIM-swap risk mitigation controls |
| **Inherence** | Fingerprint, face recognition, voice | Permitted as authentication factor; biometric data shall not leave the device |

### 7.3 Authentication Requirements by Transaction Risk Level

*Map transaction types to required authentication strength. This table should be reviewed and extended to cover all transaction types offered by [Organization Name].*

| Risk Level | Transaction Type | Minimum Authentication Requirement | Step-Up Trigger |
|---|---|---|---|
| **Low** | View account balance, transaction history | Active authenticated session (initial MFA at login) | None |
| **Low** | Transfer to registered/whitelisted payee (below threshold) | Active authenticated session | None |
| **Medium** | Transfer to registered payee (above [RM X] threshold) | Active session + OTP | At transaction initiation |
| **High** | First-time transfer to new payee | Active session + MFA (possession factor mandatory) | At payee registration and first transfer |
| **High** | Change of registered mobile number or email | Active session + MFA + [additional control] | At initiation |
| **High** | Increase transaction limit | Active session + MFA + [cooling-off period] | At initiation |
| **Critical** | Disable MFA or security features | Active session + MFA + [human verification/call-back] | Mandatory |
| **Critical** | Large value transfer (above [RM Y]) | Active session + MFA + Out-of-band confirmation | At transaction initiation |

> **Threshold values** ([RM X], [RM Y]) shall be defined by the Product and Risk teams, approved by the Technology Risk Committee, and reviewed at least annually. Current approved thresholds are documented in **Appendix D**.

### 7.4 Password and PIN Requirements

| Parameter | Minimum Requirement | Recommended |
|---|---|---|
| Minimum Password Length | 8 characters | 12 characters |
| Character Complexity | Uppercase, lowercase, number, and symbol | As minimum |
| Password History | Last 5 passwords cannot be reused | Last 12 passwords |
| Maximum Password Age | 90 days for staff; 12 months for customers | 90 days |
| Account Lockout Threshold | 5 consecutive failed attempts | 3 attempts |
| Lockout Duration | 30 minutes (auto-unlock) or manual unlock | 30 minutes |
| Breached Password Screening | Screen against known breached password databases at registration and change | Mandatory |

### 7.5 Multi-Factor Authentication (MFA) Controls

*Define the specific MFA implementation requirements and acceptable MFA methods.*

| Control | Requirement |
|---|---|
| MFA Enrollment | MFA enrollment must be completed before the first financial transaction |
| MFA for Login | MFA is required at every login for internet banking; configurable for mobile (with biometric) |
| OTP Validity | SMS and email OTPs shall be valid for a maximum of [3] minutes |
| OTP Length | Minimum 6 digits |
| OTP Delivery | OTP shall be delivered to the pre-registered device/channel only |
| Push Notification MFA | Must display transaction details in push notification for user confirmation |
| Hardware Token | Supported as an alternative for corporate customers |
| MFA Bypass | Not permitted except through documented risk-accepted exception |

### 7.6 SIM-Swap and Account Takeover Mitigations

*Describe controls specific to mitigating SIM-swap fraud, which is a recognized threat in the Malaysian digital banking context.*

Given the prevalence of SIM-swap attacks targeting Malaysian banking customers, [Organization Name] implements the following mitigations:

- **SIM-Swap Detection:** [Organization Name] shall implement real-time or near-real-time SIM-swap checks with telecommunications providers prior to delivering OTPs for high-risk transactions.
- **Recent SIM-Change Cooling-Off:** Where a SIM change is detected within the past [48] hours, OTP delivery to that number shall be suspended for high-risk transactions.
- **Transaction Notification via Secondary Channel:** Confirmation of high-value transactions shall be sent via a secondary channel (e.g., email) in addition to the primary OTP channel.
- **Customer Alerting:** Customers shall be notified immediately upon any registered contact detail change attempt.

---

## 8. Session Management Controls

### 8.1 Session Lifecycle Management

*Define the complete lifecycle of a session from establishment to termination, with controls at each stage.*

A session at [Organization Name] progresses through defined lifecycle stages. Controls are applied at each stage as described below.

#### 8.1.1 Session Establishment Controls

| Control | Description | Standard |
|---|---|---|
| Pre-Authentication Session Isolation | No session data from pre-authentication state shall carry over to authenticated session | Mandatory |
| Session Token Regeneration | New session token issued immediately upon successful authentication | Mandatory |
| Device Fingerprinting | Device attributes captured and associated with session at establishment | Mandatory |
| Geolocation Logging | IP-based geolocation logged at session establishment | Mandatory |
| Anomaly Scoring | Risk score assessed at session establishment; high-risk sessions flagged for monitoring | Recommended |

#### 8.1.2 Active Session Controls

| Control | Description | Standard |
|---|---|---|
| Continuous Validation | Session token validated on every request; invalid tokens rejected immediately | Mandatory |
| Activity Monitoring | All session activity logged with timestamps, actions, and IP addresses | Mandatory |
| Anomaly Detection | Real-time detection of unusual session behavior (IP change, rapid navigation, impossible travel) | Mandatory |
| CSRF Token Validation | CSRF token validated on all state-changing requests | Mandatory |
| Session Extension | Sessions may only be extended through active user interaction, not background processes | Mandatory |

#### 8.1.3 Session Termination Controls

| Termination Trigger | Required Action |
|---|---|
| User-initiated logout | Immediate server-side invalidation; all cookies cleared; redirect to login page |
| Idle timeout | Server-side invalidation; user notified with session expiry message |
| Absolute timeout | Server-side invalidation; user prompted to log in again |
| Security event (e.g., suspicious activity) | Immediate forced logout; session blacklisted; SOC alert raised |
| Account locked or suspended | All active sessions for the account immediately invalidated |
| Password/PIN change | All other active sessions invalidated; current session optionally maintained |
| MFA change | All active sessions invalidated; re-login required |
| Admin-initiated logout | All sessions for the user immediately invalidated |

### 8.2 Secure Token Handling

#### 8.2.1 Token Generation Standards

*Define the technical standards for generating cryptographically secure session tokens.*

- Session tokens shall be generated using a cryptographically secure pseudorandom number generator (CSPRNG).
- Tokens shall have a minimum effective entropy of **128 bits** (minimum 32 hexadecimal characters or 22 base64url characters).
- Tokens shall be validated server-side on every request against the active session store.
- The session store shall record: token hash (not plaintext), user ID, creation time, last activity time, IP address at creation, device fingerprint, and expiry time.

#### 8.2.2 Token Storage Prohibition

The following storage mechanisms are **strictly prohibited** for session tokens:

| Prohibited Storage | Reason |
|---|---|
| URL query parameters | Tokens appear in browser history, server logs, and referrer headers |
| Browser localStorage | Accessible by JavaScript; vulnerable to XSS attacks |
| Browser sessionStorage | Accessible by JavaScript; vulnerable to XSS attacks |
| Application server logs | Tokens in logs increase exposure in log management systems |
| Browser history | Tokens in URLs are cached in browser history |
| HTTP (non-TLS) transmission | Tokens transmitted in cleartext are trivially interceptable |

### 8.3 Concurrent Session Management

*Define the process for detecting and handling concurrent sessions.*

[Organization Name] maintains an active session registry per user identity per channel. The following process applies when concurrent sessions are detected:

1. **Detection:** The session management system identifies that a new authenticated session has been established for a user who already has an active session on the same channel.
2. **Notification:** The new session displays a notification informing the user that an existing session was detected, with the session's approximate creation time and IP geolocation.
3. **User Choice:** The user is offered the option to:
   - Terminate the previous session and continue with the new session; or
   - Terminate the new session and continue with the existing session.
4. **Default Behaviour:** If no choice is made within [2] minutes, the prior session is automatically terminated.
5. **Alerting:** Where concurrent sessions are detected from geographically disparate locations within a short timeframe (impossible travel), an automated alert shall be raised to the SOC for review.

### 8.4 Session Management for High-Risk Scenarios

*Define specific session management controls that apply in elevated-risk scenarios.*

#### 8.4.1 Suspicious Activity Response

| Trigger | Automated Response | Manual Response |
|---|---|---|
| IP address change during session | Session context validation; step-up authentication if significant change | SOC review if pattern repeated |
| Rapid sequential transaction attempts | Rate limiting applied; CAPTCHA triggered | SOC alert if threshold exceeded |
| Login from known malicious IP | Session blocked; user notified | SOC investigation |
| Impossible travel (2 locations within 30 min) | Session suspended; step-up required | SOC alert and investigation |
| Multiple failed OTP attempts | Session terminated; account locked | SOC notification |

#### 8.4.2 Extended Session Requirements (Corporate Banking)

For corporate banking users with documented business requirements for extended sessions:

| Parameter | Standard | Corporate Exception |
|---|---|---|
| Idle Timeout | 5 minutes | Up to [10] minutes with Risk approval |
| Absolute Timeout | 30 minutes | Up to [60] minutes with Risk approval |
| Concurrent Sessions | 1 | Up to [N] with documented business justification |
| Step-Up Authentication | As per Section 7.3 | Additional IP whitelisting controls required |

> Corporate exceptions require documented approval from the Head of Digital Banking and the Chief Risk Officer. Approved exceptions are logged in the Exceptions Register (Appendix E).

### 8.5 API Session Management

*Define session management controls specific to API sessions, including machine-to-machine and customer-delegated access.*

| Control | Requirement |
|---|---|
| Token Issuance | OAuth 2.0 Authorization Server issues time-limited access tokens upon successful authentication and authorization |
| Token Validation | Every API request validated against the authorization server or via local token introspection |
| Scope Enforcement | API gateway enforces that token scopes match the requested resource and action |
| Refresh Token Rotation | Refresh tokens are single-use; a new refresh token is issued on each use |
| Token Revocation | Revocation is effective within [1] minute across all API gateways |
| Consent Tracking | Customer consent records are linked to active tokens; consent withdrawal triggers immediate token revocation |

---

## 9. Monitoring, Logging, and Incident Response

### 9.1 Session Logging Requirements

*Define the mandatory logging requirements for session events. Logs form the primary evidence trail for fraud investigations, regulatory reviews, and security incidents.*

All session management events shall be logged to [Organization Name]'s SIEM platform. Logs shall be:

- Tamper-evident (write-once or SIEM-protected);
- Retained for a minimum of **[3] years** in accordance with regulatory requirements;
- Accessible to authorized personnel for investigation within [4] hours of request.

#### 9.1.1 Mandatory Log Events

| Event Category | Specific Events to Log |
|---|---|
| **Session Establishment** | Login success/failure, MFA success/failure, session token issuance, device fingerprint |
| **Session Activity** | Transaction initiation, step-up authentication events, profile changes |
| **Session Anomalies** | IP change, concurrent session detection, impossible travel, rapid activity |
| **Session Termination** | User logout, idle timeout, absolute timeout, forced logout, admin-initiated logout |
| **Authentication Events** | Password change, MFA change, account lockout, unlock |

#### 9.1.2 Minimum Log Fields

| Field | Description |
|---|---|
| `timestamp` | ISO 8601 format, UTC |
| `event_type` | Standardized event code (see Appendix F) |
| `session_id` | Hashed session token (not plaintext) |
| `user_id` | Anonymized or internal user identifier |
| `channel` | Web, mobile, API |
| `ip_address` | Client IP address |
| `device_fingerprint` | Hash of device attributes |
| `geolocation` | IP-derived country/region |
| `outcome` | Success / Failure / Blocked |
| `reason_code` | Standardized reason for failure or block |

### 9.2 Alerting and Monitoring

*Define the alerting thresholds and monitoring responsibilities for session-related events.*

| Alert Type | Threshold | Response |
|---|---|---|
| Account lockout (brute force indicator) | 5 failed logins within 10 minutes | Automated lockout; SOC notification |
| Mass session invalidation | >100 sessions invalidated in 5 minutes | P1 incident; SOC investigation |
| Privileged session outside business hours | Any privileged login between 22:00–06:00 MYT | SOC alert; approval required |
| Expired session token reuse attempt | Any attempt | Log and block; SOC notification |
| Certificate pinning bypass attempt (mobile) | Any attempt | Block session; security incident raised |
| Admin session from non-PAW device | Any attempt | Block; SOC alert |

### 9.3 Incident Response Integration

*Reference the process for escalating session-related security incidents to the Incident Response team.*

Session-related security incidents shall be handled in accordance with [Organization Name]'s **Cybersecurity Incident Response Procedure [reference]**. The following session events are classified as security incidents:

| Incident Type | Severity | Initial Response |
|---|---|---|
| Confirmed session hijacking | P1 – Critical | Immediate forced logout; account suspension; SOC investigation |
| Suspected account takeover via session | P1 – Critical | Forced logout; fraud team notification; customer contact |
| Mass concurrent session anomaly | P2 – High | SOC investigation; potential platform suspension |
| Privilege escalation via session manipulation | P1 – Critical | Immediate remediation; forensic review |
| API token compromise | P2 – High | Immediate token revocation; client notification |

---

## 10. Compliance and Exceptions

### 10.1 Compliance Monitoring

*Describe how compliance with these standards is monitored on an ongoing basis.*

Compliance with these Session Management Standards shall be assessed through the following mechanisms:

| Activity | Frequency | Responsible Party | Output |
|---|---|---|---|
| Internal Security Assessment (session controls) | Semi-annual | Information Security | Assessment report |
| Penetration Testing (session management scope) | Annual | External certified tester | Pentest report |
| Automated Vulnerability Scanning | Monthly | IT Security | Scan report |
| Log Review (session anomaly audit) | Monthly | SOC | Anomaly report |
| Regulatory Self-Assessment (RMiT) | Annual | Risk & Compliance | Self-assessment report |
| Post-Incident Review | Post-incident | Information Security | Incident report |

### 10.2 Non-Compliance and Exceptions

*Define the process for managing situations where full compliance with these standards cannot be achieved.*

Where a business unit, system, or project is unable to comply with one or more requirements in this document, the following exception process applies:

1. **Exception Request:** The requesting party submits a formal Exception Request Form (Appendix E) to the Head of Digital Banking and Information Security.
2. **Risk Assessment:** Information Security conducts a risk assessment of the proposed exception, including the likelihood and impact of the non-compliant state.
3. **Compensating Controls:** The requesting party proposes compensating controls to reduce residual risk.
4. **Approval:** Exceptions require approval from:
   - Head of Digital Banking (document owner);
   - Chief Information Security Officer (CISO);
   - Chief Risk Officer (for exceptions with High or Critical residual risk).
5. **Time Limitation:** Exceptions are granted for a maximum period of [6] months, after which they must be re-assessed and re-approved or remediated.
6. **Register:** All approved exceptions are recorded in the Exceptions Register maintained by Risk & Compliance.

---

## 11. Review and Approval

### 11.1 Document Review Schedule

This document shall be reviewed:

- **Annually**, as scheduled, by the document owner;
- **Upon significant change** to the digital banking platform, authentication infrastructure, or session management technology;
- **Upon issuance of new or updated BNM guidance** relevant to session management or digital banking security;
- **Following a material security incident** involving session management controls;
- **At the direction of** the Technology Risk Committee or Internal Audit.

### 11.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Initial Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Digital Banking (Document Owner) | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| Head of IT Architecture | [Name] | | [Date] |
| Head of Compliance | [Name] | | [Date] |

---

## 12. References

### 12.1 Regulatory References

| Reference | Title | Publisher | Version / Date |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Publication Date] |
| BNM RMiT Clause 12.6 | Digital Services – Session Management | Bank Negara Malaysia | [Publication Date] |
| BNM RMiT Clause 11 | Customer Authentication | Bank Negara Malaysia | [Publication Date] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 (as amended) |
| NACSA NCSP | National Cyber Security Policy | NACSA | [Version] |

### 12.2 Industry Standards and Frameworks

| Reference | Title | Publisher | Version |
|---|---|---|---|
| ISO/IEC 27001 | Information Security Management Systems | ISO/IEC | 2022 |
| ISO/IEC 27002 | Information Security Controls | ISO/IEC | 2022 |
| OWASP ASVS | Application Security Verification Standard | OWASP | 4.0 |
| OWASP Top 10 | Top 10 Web Application Security Risks | OWASP | 2021 |
| NIST SP 800-63B | Digital Identity Guidelines – Authentication | NIST | 2020 |
| PCI DSS | Payment Card Industry Data Security Standard | PCI SSC | 4.0 |

### 12.3 Internal Policy References

| Reference | Title |
|---|---|
| [POL-IT-001] | IT Security Policy |
| [POL-IT-002] | Digital Banking Security Policy |
| [PROC-IT-003] | Multi-Factor Authentication Procedure |
| [PROC-IT-004] | Privileged Access Management Procedure |
| [PROC-SEC-001] | Cybersecurity Incident Response Procedure |
| [POL-RISK-001] | Technology Risk Management Framework |
| [POL-DATA-001] | Data Classification and Handling Policy |
| [PROC-AUDIT-001] | IT Audit Charter |

---

## 13. Appendices

### Appendix A: Session Management Control Checklist

*This checklist is intended for use by development and security teams during system design reviews, pre-release security assessments, and periodic compliance audits.*

| # | Control | Standard Reference | Compliant (Y/N) | Evidence / Notes |
|---|---|---|---|---|
| 1 | Session tokens generated with ≥128-bit entropy | STD-ST-001 | | |
| 2 | Session token not included in URL | STD-ST-004 | | |
| 3 | Cookies set with Secure, HttpOnly, SameSite attributes | STD-ST-005 | | |
| 4 | New token issued on authentication | STD-ST-006 | | |
| 5 | Idle timeout configured per channel | STD-TO-001 to 006 | | |
| 6 | Absolute timeout configured per channel | STD-TO-001 to 006 | | |
| 7 | Concurrent session limit enforced | STD-CS-001 | | |
| 8 | CSRF tokens implemented | STD-SB-003 | | |
| 9 | Session state maintained server-side | STD-SB-004 | | |
| 10 | Session terminated on logout | Section 8.1.3 | | |
| 11 | TLS 1.2+ enforced on all channels | Section 6.2.1 | | |
| 12 | MFA required at login | Section 7.5 | | |
| 13 | Step-up authentication for high-risk transactions | Section 7.3 | | |
| 14 | Session events logged to SIEM | Section 9.1 | | |
| 15 | Log retention meets 3-year requirement | Section 9.1 | | |
| 16 | Certificate pinning implemented (mobile) | Section 6.3.1 | | |
| 17 | Privileged sessions use PAM tooling | Section 6.5 | | |
| 18 | Privileged session recording enabled | Section 6.5 | | |
| 19 | OAuth 2.0 + PKCE for API sessions | Section 6.4.1 | | |
| 20 | Token revocation endpoint operational | Section 8.5 | | |

**Assessment completed by:** [Name] | **Date:** [Date] | **System/Application:** [Name]

---

### Appendix B: Secure Coding Guidelines for Session Management

*Development teams shall adhere to the following guidelines when implementing session management in [Organization Name]'s applications. These guidelines are aligned with OWASP ASVS Level 2, Section 3.*

**B.1 Token Generation**

```
# Pseudocode example — Do NOT use this verbatim; implement in language-specific secure library
session_token = cryptographically_secure_random(bytes=32)  # 256-bit; use platform CSPRNG
session_token_encoded = base64url_encode(session_token)
```

- Use platform-native CSPRNG: `secrets` (Python), `java.security.SecureRandom` (Java), `crypto.randomBytes` (Node.js).
- Never use `Math.random()`, `rand()`, or timestamp-seeded generators for session tokens.

**B.2 Cookie Configuration Example**

| Attribute | Value | Rationale |
|---|---|---|
| `Secure` | true | HTTPS-only transmission |
| `HttpOnly` | true | Prevent JavaScript access |
| `SameSite` | Strict or Lax | CSRF protection |
| `Path` | /apppath/ | Scope to application |
| `Domain` | .specific.domain.com | No wildcard domains |
| `Max-Age` | Session (no persistent expiry) | Invalidated server-side |

**B.3 Session Invalidation**

Upon logout or timeout, the server must:
1. Remove the session record from the session store (database or cache);
2. Respond with `Set-Cookie` headers that expire/clear all session cookies;
3. Return HTTP 200 or redirect to login page.

Client-side clearing of cookies alone is **not sufficient** — server-side invalidation is mandatory.

---

### Appendix C: Session Management Architecture Diagram

*[Placeholder: Insert or reference the approved session management architecture diagram maintained by IT Architecture. The diagram should illustrate session flows for web, mobile, and API channels, including token issuance, validation, storage, and termination points.]*

**Diagram Reference:** [Architecture Repository Link or Document Reference]
**Maintained by:** Head of IT Architecture
**Last Updated:** [Date]

---

### Appendix D: Approved Transaction Risk Thresholds

*[Placeholder: This appendix contains the current approved transaction thresholds that trigger step-up authentication requirements as referenced in Section 7.3. Thresholds are subject to change by the Product and Risk teams and are maintained separately to allow revision without requiring a full document review.]*

| Transaction Type | Low Risk Threshold (RM) | Step-Up Threshold (RM) | High-Value Threshold (RM) | Approval Date |
|---|---|---|---|---|
| Interbank Transfer (IBG) | Below [X] | [X] to [Y] | Above [Y] | [Date] |
| Instant Transfer (DuitNow) | Below [X] | [X] to [Y] | Above [Y] | [Date] |
| Overseas Remittance | [Define] | [Define] | [Define] | [Date] |
| Bill Payment | [Define] | [Define] | [Define] | [Date] |
| Transaction Limit Change | N/A | Always step-up | N/A | [Date] |

**Approved by:** Head of Digital Banking | Chief Risk Officer
**Last Reviewed:** [Date]

---

### Appendix E: Session Management Exception Request Form

**Exception Request Form**

| Field | Details |
|---|---|
| **Request Reference** | [Auto-generated / Manual reference] |
| **Date of Request** | [Date] |
| **Requesting Business Unit** | [Unit Name] |
| **Requestor Name and Role** | [Name, Role] |
| **System / Application Affected** | [System Name] |
| **Standard Clause(s) Affected** | [e.g., STD-ST-001, STD-TO-002] |
| **Description of Non-Compliance** | [Detailed description of the deviation requested] |
| **Business Justification** | [Why compliance cannot be achieved] |
| **Risk Assessment Summary** | [Likelihood, Impact, Residual Risk rating] |
| **Proposed Compensating Controls** | [Specific controls that will reduce residual risk] |
| **Requested Exception Period** | [Start Date] to [End Date — maximum 6 months] |
| **Remediation Plan** | [How and when full compliance will be achieved] |

**Approval Section**

| Approver | Name | Decision (Approve/Reject) | Conditions | Date |
|---|---|---|---|---|
| Head of Digital Banking | [Name] | | | |
| CISO | [Name] | | | |
| Chief Risk Officer | [Name] | | | |

---

### Appendix F: Session Event Log Reference Codes

*[Placeholder: Define the standardized event codes used in session management logs. These codes are referenced in Section 9.1.1 and used by the SOC for alert correlation.]*

| Event Code | Event Description | Severity |
|---|---|---|
| SESSION-001 | Session created (login success) | Info |
| SESSION-002 | Session terminated (user logout) | Info |
| SESSION-003 | Session terminated (idle timeout) | Info |
| SESSION-004 | Session terminated (absolute timeout) | Info |
| SESSION-005 | Session terminated (forced – security event) | High |
| AUTH-001 | Authentication success | Info |
| AUTH-002 | Authentication failure | Medium |
| AUTH-003 | Account locked (max failures) | High |
| AUTH-004 | MFA success | Info |
| AUTH-005 | MFA failure | Medium |
| AUTH-006 | Step-up authentication triggered | Info |
| AUTH-007 | Step-up authentication success | Info |
| AUTH-008 | Step-up authentication failure | High |
| ANOM-001 | IP address change during session | Medium |
| ANOM-002 | Impossible travel detected | High |
| ANOM-003 | Concurrent session detected | Medium |
| ANOM-004 | Session token reuse attempt | Critical |
| ANOM-005 | Certificate pinning bypass attempt | Critical |

---

*End of Document*

---

**[Organization Name] — Confidential**
*This document is subject to the document control procedures of [Organization Name]. Queries regarding this document should be directed to the Head of Digital Banking.*