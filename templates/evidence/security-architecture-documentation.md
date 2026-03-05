# Security Architecture Documentation

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Digital Banking |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Effective Date:** [Effective Date]

---

## 1. Purpose and Scope

This document establishes and records the security architecture for [Organization Name]'s digital banking channels in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.1**, which mandates that financial institutions implement and document robust security controls for customer-facing digital services.

The document covers all digital banking channels operated by [Organization Name], including but not limited to internet banking, mobile banking applications, and API-based open banking interfaces. It defines the baseline security architecture, authentication requirements, and session management controls applicable to these channels.

This document is reviewed **per security-impacting event** (e.g., significant architecture changes, material incidents) or **quarterly**, whichever occurs first.

---

## 2. Assessment Scope and Criteria

*Describe the boundaries of the security assessment, the systems and channels in scope, and the criteria used to evaluate adequacy of controls. Reference any internal risk appetite thresholds or regulatory benchmarks applied.*

### 2.1 In-Scope Channels

| Channel | Platform | Environment | Version / Release |
|---|---|---|---|
| Internet Banking Portal | Web | Production | [Version] |
| Mobile Banking Application (iOS) | iOS | Production | [Version] |
| Mobile Banking Application (Android) | Android | Production | [Version] |
| Open Banking API Gateway | API | Production | [Version] |
| [Additional Channel] | [Platform] | [Environment] | [Version] |

### 2.2 Out-of-Scope Items

- [List any systems, interfaces, or channels explicitly excluded from this assessment]
- [State the rationale for exclusion]

### 2.3 Assessment Criteria

| Criterion | Benchmark / Standard | Threshold |
|---|---|---|
| Authentication Strength | BNM RMiT Clause 12.1; NIST SP 800-63B | [Define threshold] |
| Encryption Standards | TLS 1.2 minimum / TLS 1.3 preferred | [Define threshold] |
| Session Timeout | BNM RMiT guidance | [Define threshold in minutes] |
| Vulnerability Severity | CVSS v3.1 scoring | Critical/High = Fail |
| [Additional Criterion] | [Standard] | [Threshold] |

---

## 3. Methodology

*Describe the approach, tools, and frameworks used to design, review, or assess the security architecture. Reference any threat modelling techniques, standards, or internal frameworks applied.*

### 3.1 Review Approach

- **Architecture Review:** Structured review of network diagrams, data flows, and component configurations against BNM RMiT requirements.
- **Threat Modelling:** [e.g., STRIDE methodology applied to all customer-facing components]
- **Control Validation:** [e.g., Technical testing, configuration audit, or penetration test results referenced]
- **Standards Referenced:** [e.g., NIST SP 800-53, ISO/IEC 27001:2022, OWASP ASVS Level 2]

### 3.2 Review Period

| Activity | Date | Conducted By |
|---|---|---|
| Architecture design / last major change | [Date] | [Team / Vendor] |
| Security review completed | [Date] | [Team / Vendor] |
| Penetration test (if applicable) | [Date] | [Approved Third Party] |
| Document approved | [Date] | [Approver] |

---

## 4. Findings and Ratings

*Summarise the outcomes of the security architecture review. Record identified gaps, risk ratings, remediation status, and ownership. All Critical and High findings must have an accepted remediation plan.*

### 4.1 Summary Rating

| Domain | Rating | Remarks |
|---|---|---|
| Authentication Controls | [Satisfactory / Needs Improvement / Unsatisfactory] | [Summary] |
| Session Management | [Satisfactory / Needs Improvement / Unsatisfactory] | [Summary] |
| Data Encryption (Transit) | [Satisfactory / Needs Improvement / Unsatisfactory] | [Summary] |
| Data Encryption (Rest) | [Satisfactory / Needs Improvement / Unsatisfactory] | [Summary] |
| API Security | [Satisfactory / Needs Improvement / Unsatisfactory] | [Summary] |
| Fraud Detection Integration | [Satisfactory / Needs Improvement / Unsatisfactory] | [Summary] |

### 4.2 Findings Register

| Finding ID | Description | Severity | Affected Component | Status | Remediation Target | Owner |
|---|---|---|---|---|---|---|
| F-001 | [Finding description] | [Critical / High / Medium / Low] | [Component] | [Open / In Progress / Closed] | [Date] | [Owner] |
| F-002 | [Finding description] | [Severity] | [Component] | [Status] | [Date] | [Owner] |

---

## 5. Channel Security Architecture

*Document the security architecture for each digital banking channel, including network topology, key security components, and data flow protections. Architecture diagrams should be attached as appendices.*

### 5.1 Architecture Overview

[Organization Name]'s digital banking channels are hosted on [describe hosting model: e.g., on-premises data centre / private cloud / public cloud with CSP name] and follow a [describe pattern: e.g., multi-tier / microservices / zero-trust] architecture.

**Reference:** See **Appendix A** for network and logical architecture diagrams.

### 5.2 Security Zones and Controls

| Zone | Description | Key Controls |
|---|---|---|
| Internet-Facing (DMZ) | Public-facing load balancers and WAF | WAF, DDoS protection, TLS termination |
| Application Tier | Core banking application servers | Application firewall, code-level controls, secrets management |
| Data Tier | Databases and data stores | Encryption at rest, access controls, audit logging |
| Internal Network | Backend integration with core banking | Network segmentation, mTLS, API gateway |
| Management Network | Administrative access | Privileged Access Management (PAM), MFA enforced |

### 5.3 Key Security Components

| Component | Product / Technology | Purpose | Version |
|---|---|---|---|
| Web Application Firewall (WAF) | [Product] | Layer 7 protection for web and API channels | [Version] |
| DDoS Mitigation | [Product] | Availability protection | [Version] |
| API Gateway | [Product] | API authentication, rate limiting, traffic control | [Version] |
| SIEM | [Product] | Security event correlation and alerting | [Version] |
| Secrets Management | [Product] | Credential and key management | [Version] |
| [Additional Component] | [Product] | [Purpose] | [Version] |

### 5.4 Data Flow and Encryption

| Data Flow | Protocol | Encryption Standard | Certificate Authority |
|---|---|---|---|
| Customer browser / app → Load Balancer | HTTPS | TLS 1.3 | [CA Name] |
| Load Balancer → Application Server | HTTPS | TLS 1.2 minimum | [Internal CA / CA Name] |
| Application Server → Database | [Protocol] | [Standard] | [CA Name] |
| Application Server → Core Banking | [Protocol] | [Standard] | [CA Name] |

---

## 6. Customer Authentication Requirements

*Define the authentication standards and controls applied to customers accessing each digital banking channel, consistent with BNM RMiT Clause 12.1 requirements for strong customer authentication.*

### 6.1 Authentication Framework

[Organization Name] implements **[Multi-Factor Authentication / Strong Customer Authentication]** for all digital banking channels. Authentication factors are classified as follows:

- **Factor 1 — Something you know:** [e.g., Username and password with defined complexity policy]
- **Factor 2 — Something you have:** [e.g., OTP via registered mobile number / hardware token / push notification]
- **Factor 3 — Something you are (where applicable):** [e.g., Biometric — fingerprint, facial recognition]

### 6.2 Authentication Controls by Channel

| Channel | Primary Factor | Second Factor | Step-Up Authentication Trigger |
|---|---|---|---|
| Internet Banking | Username + Password | OTP (SMS / Email) | [e.g., High-value transaction, new payee] |
| Mobile Banking | [Method] | Biometric / PIN | [Trigger condition] |
| Open Banking API | OAuth 2.0 / Client Certificate | [Method] | [Trigger condition] |
| [Additional Channel] | [Method] | [Method] | [Trigger condition] |

### 6.3 Password and Credential Policy

| Parameter | Requirement |
|---|---|
| Minimum password length | [e.g., 12 characters] |
| Complexity requirements | [e.g., Upper, lower, numeric, special character] |
| Password history | [e.g., Last 12 passwords not reused] |
| Maximum password age | [e.g., 180 days] |
| Account lockout threshold | [e.g., 5 consecutive failed attempts] |
| Account lockout duration | [e.g., 30 minutes / until unlocked by support] |

### 6.4 Step-Up and Risk-Based Authentication

*Describe any adaptive or risk-based authentication controls applied, including the triggers and the additional verification steps invoked.*

- **Trigger scenarios:** [e.g., New device, unusual geolocation, high-value transaction exceeding threshold, new payee registration]
- **Step-up method:** [e.g., Re-authentication with OTP, biometric confirmation]
- **Integration with fraud detection:** [Describe how authentication decisions are informed by fraud scoring or behavioural analytics]

---

## 7. Session Management Controls

*Document the session management controls implemented across all digital banking channels to prevent session hijacking, fixation, and replay attacks, in accordance with BNM RMiT requirements.*

### 7.1 Session Control Parameters

| Parameter | Internet Banking | Mobile Banking | Open Banking API |
|---|---|---|---|
| Absolute session timeout | [e.g., 20 minutes] | [e.g., 30 minutes] | [e.g., 60 minutes / token expiry] |
| Idle session timeout | [e.g., 5 minutes] | [e.g., 5 minutes] | [e.g., N/A — stateless] |
| Concurrent session limit | [e.g., 1 active session] | [e.g., 1 per device] | [e.g., Per client credential] |
| Session token entropy | [e.g., 256-bit] | [e.g., 256-bit] | [e.g., Per OAuth 2.0 spec] |
| Secure cookie flags | Secure, HttpOnly, SameSite=Strict | N/A | N/A |

### 7.2 Session Lifecycle Controls

- **Session creation:** Sessions are issued only upon successful completion of all authentication factors. Session tokens are generated server-side using a cryptographically secure random number generator.
- **Session binding:** [e.g., Sessions are bound to client IP address and/or User-Agent string to detect anomalous reuse]
- **Session termination:** Sessions are explicitly invalidated on logout, timeout, and password change. [Describe any additional invalidation triggers]
- **Re-authentication:** [e.g., Re-authentication is enforced before high-value or sensitive operations regardless of remaining session validity]

### 7.3 Anti-Session Attack Controls

| Threat | Control Implemented |
|---|---|
| Session hijacking | TLS in transit; HttpOnly and Secure cookie flags |
| Session fixation | New session token issued upon authentication |
| Cross-Site Request Forgery (CSRF) | CSRF tokens / SameSite cookie policy |
| Token replay | Short-lived tokens; nonce or timestamp validation for APIs |
| Concurrent session abuse | Single active session enforcement; alerts on concurrent login |

---

## 8. Roles and Responsibilities

*This RACI table defines accountabilities for the maintenance, review, and enforcement of this security architecture.*

| Activity | Head of Digital Banking | CISO / Head of IT Security | IT Architecture | IT Operations | Internal Audit | Risk Management |
|---|---|---|---|---|---|---|
| Own and maintain this document | **A** | C | C | I | I | I |
| Design and approve security architecture | C | **A** | R | I | I | C |
| Implement security controls | I | A | C | **R** | I | I |
| Conduct periodic architecture review | **A** | R | R | C | I | C |
| Perform or commission security testing | C | **A** | C | C | I | I |
| Remediate identified findings | C | A | C | **R** | I | I |
| Report to Board / Senior Management | C | R | I | I | I | **A** |
| Audit compliance with this document | I | I | I | I | **R** | C |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial document created |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Digital Banking | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| [Additional Approver] | [Name] | | [Date] |

---

## 10. References

| Reference | Description |
|---|---|
| BNM RMiT — Clause 12.1 | Security controls for digital banking channels |
| BNM RMiT — Policy Document | Risk Management in Technology, Bank Negara Malaysia |
| NIST SP 800-63B | Digital Identity Guidelines — Authentication and Lifecycle Management |
| OWASP Application Security Verification Standard (ASVS) | Web and mobile application security requirements |
| ISO/IEC 27001:2022 | Information Security Management Systems |
| [Organization Name] Information Security Policy | [Internal Document Reference] |
| [Organization Name] IT Risk Management Framework | [Internal Document Reference] |

---

## Appendices

**Appendix A — Network and Logical Architecture Diagrams**
*Attach current network topology and logical architecture diagrams for all in-scope digital banking channels. Diagrams must be dated and version-controlled.*
[Attach diagram — File reference: [Filename, Version, Date]]

**Appendix B — Threat Model**
*Attach the threat model (e.g., STRIDE analysis or data flow diagram with identified threats) for the digital banking environment.*
[Attach document — File reference: [Filename, Version, Date]]

**Appendix C — Penetration Test Summary / Security Assessment Report**
*Reference the most recent third-party penetration test or security assessment report for digital banking channels.*
[Report reference: [Report Title, Vendor, Date, Reference Number]]

**Appendix D — Security Control Exceptions Register**
*List any approved exceptions to the security architecture standards documented herein, including compensating controls and exception expiry dates.*

| Exception ID | Control Requirement | Justification | Compensating Control | Approved By | Expiry Date |
|---|---|---|---|---|---|
| EX-001 | [Control] | [Business justification] | [Compensating control] | [Approver] | [Date] |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure is prohibited. For queries regarding this document, contact the Document Owner: Head of Digital Banking.*