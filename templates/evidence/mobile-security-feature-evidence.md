# Mobile Security Feature Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Channel Security Architecture](#5-channel-security-architecture)
6. [Customer Authentication Requirements](#6-customer-authentication-requirements)
7. [Session Management Controls](#7-session-management-controls)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the formal evidence record for the implementation of required mobile security features within [Organization Name]'s mobile banking and financial services applications. It demonstrates compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 12.2, which mandates that financial institutions implement and maintain robust security controls across all mobile delivery channels.

This evidence document supports the institution's obligation to:

- Demonstrate that mobile application security controls are implemented, tested, and maintained in accordance with RMiT requirements.
- Provide audit-ready evidence of security feature compliance for BNM supervisory reviews and internal audit engagements.
- Establish a baseline record against which subsequent reviews and assessments can be compared.

### 1.2 Scope

*Define the boundary of mobile applications, platforms, and services covered by this evidence document. Include application names, version numbers, and operating system platforms assessed.*

This document covers the following mobile applications and platforms operated by [Organization Name]:

| Application Name | Platform | Version | Environment |
|---|---|---|---|
| [Application Name 1] | iOS / Android | [Version Number] | Production |
| [Application Name 2] | iOS / Android | [Version Number] | Production |
| [Application Name N] | [Platform] | [Version Number] | [Environment] |

**In Scope:**

- Mobile banking applications offered to retail and/or corporate customers
- Backend APIs and middleware components that directly support mobile channel operations
- Authentication and session management infrastructure interfacing with mobile clients
- Third-party mobile SDKs and libraries integrated into in-scope applications

**Out of Scope:**

- Web browser-based banking portals (addressed under separate channel security evidence)
- Internal staff-facing mobile tools and enterprise mobility management (EMM) infrastructure
- [Any other explicitly excluded components]

### 1.3 Regulatory Context

This evidence document is produced in compliance with the following regulatory obligations:

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 12.2 | Mobile security features for financial services mobile applications |
| BNM RMiT Policy Document | [Related Clause] | [Related Requirement] |
| Personal Data Protection Act 2010 (PDPA) | [Relevant Section] | Protection of personal data processed via mobile channels |
| [Other applicable regulation] | [Clause] | [Summary] |

---

## 2. Assessment Scope and Criteria

### 2.1 Assessment Overview

*Describe the scope of the security feature assessment conducted, including which applications were assessed, the assessment period, and the criteria applied to determine compliance.*

| Field | Details |
|---|---|
| **Assessment Title** | Mobile Security Feature Compliance Assessment |
| **Assessment Period** | [Start Date] to [End Date] |
| **Assessment Type** | [Per-Event / Quarterly / Annual] |
| **Trigger** | [Quarterly Schedule / New Release / Significant Change / Incident] |
| **Assessed By** | [Internal Team / External Assessor Name and Firm] |
| **Assessment Date** | [Date of Assessment] |

### 2.2 Assessment Criteria

*List the specific security requirements and standards used as the basis for evaluating mobile security feature implementation. Reference the relevant RMiT clauses and any supplementary standards applied.*

The assessment evaluated mobile security feature implementation against the following criteria:

**Primary Regulatory Criteria (BNM RMiT Clause 12.2):**

- [ ] Implementation of strong customer authentication mechanisms for mobile access
- [ ] Secure communication channels using industry-accepted encryption standards
- [ ] Robust session management controls to limit exposure from unauthorized access
- [ ] Protection against reverse engineering, tampering, and code injection attacks
- [ ] Secure local data storage practices on mobile devices
- [ ] Certificate pinning or equivalent transport layer protection mechanisms
- [ ] Jailbreak and root detection capabilities
- [ ] Runtime application self-protection (RASP) or equivalent controls
- [ ] Secure logging practices that exclude sensitive data from device logs
- [ ] Anti-fraud and anomaly detection integration at the mobile channel layer

**Supplementary Standards Applied:**

| Standard | Version | Relevance |
|---|---|---|
| OWASP Mobile Application Security Verification Standard (MASVS) | [Version] | Technical security baseline |
| OWASP Mobile Top 10 | [Year] | Common mobile vulnerability reference |
| NIST SP 800-163 | [Revision] | Vetting mobile applications |
| [Other Standard] | [Version] | [Relevance] |

### 2.3 Inclusion and Exclusion Criteria

| Criteria Type | Description |
|---|---|
| **Included** | All production mobile applications offering financial transactions or access to customer account data |
| **Included** | Backend authentication services and API gateways serving mobile clients |
| **Excluded** | Pre-production and development builds not yet released to customers |
| **Excluded** | [Other exclusions] |

---

## 3. Methodology

### 3.1 Assessment Approach

*Describe the methodology and techniques used to evaluate the implementation of mobile security features. Include both technical testing approaches and documentation review activities.*

The assessment was conducted using a combination of the following methodologies:

**3.1.1 Documentation Review**

- Review of mobile application security design specifications and architecture documentation
- Examination of development security standards, secure coding guidelines, and internal policies
- Review of prior assessment reports and remediation evidence
- Review of third-party security testing reports (penetration testing, DAST, SAST)

**3.1.2 Technical Testing**

| Testing Type | Tool(s) Used | Scope |
|---|---|---|
| Static Application Security Testing (SAST) | [Tool Name / Version] | Source code analysis |
| Dynamic Application Security Testing (DAST) | [Tool Name / Version] | Runtime behaviour analysis |
| Manual Penetration Testing | [Methodology / Framework] | Authentication, session, API security |
| Binary Analysis / Reverse Engineering Assessment | [Tool Name / Version] | Anti-tampering controls verification |
| Network Traffic Analysis | [Tool Name / Version] | Encryption and certificate validation |
| Automated Vulnerability Scanning | [Tool Name / Version] | Known vulnerability detection |

**3.1.3 Configuration and Code Review**

- Inspection of authentication configuration parameters (token expiry, lockout thresholds)
- Review of cryptographic algorithm selections and key management practices
- Verification of secure storage implementation for sensitive data (Keychain / Keystore usage)
- Examination of session lifecycle management logic

**3.1.4 Interviews and Walkthrough**

- Structured interviews with mobile application development and security teams
- Walkthrough of security feature implementation with the [Mobile Security / Application Security] team
- Review of change management records for security-relevant updates

### 3.2 Evidence Collection

*Describe how evidence was collected, stored, and validated during the assessment.*

Evidence collected during this assessment is catalogued in **Appendix A — Evidence Register**. Evidence types include:

- Screenshots of application security controls in operation
- Configuration file extracts (sanitized of production credentials)
- Testing tool output reports
- Code review findings extracts
- Security testing completion certificates or reports

All evidence was collected during the period [Start Date] to [End Date] and is retained in [Evidence Repository / SharePoint / Secure Document Store] under reference [Evidence Reference Number].

---

## 4. Findings and Ratings

### 4.1 Summary Rating

*Provide an overall compliance rating for the mobile security feature implementation based on the assessment findings. Define the rating scale used.*

**Rating Scale:**

| Rating | Description |
|---|---|
| **Compliant** | Control is fully implemented and operating effectively as required |
| **Partially Compliant** | Control is implemented but with gaps or weaknesses that require remediation |
| **Non-Compliant** | Control is absent or materially deficient; immediate remediation required |
| **Not Applicable** | Control requirement does not apply to the assessed application or context |

**Overall Assessment Rating: [Compliant / Partially Compliant / Non-Compliant]**

| Application | Platform | Overall Rating | Assessment Date |
|---|---|---|---|
| [Application Name 1] | iOS | [Rating] | [Date] |
| [Application Name 1] | Android | [Rating] | [Date] |
| [Application Name 2] | iOS | [Rating] | [Date] |
| [Application Name 2] | Android | [Rating] | [Date] |

### 4.2 Detailed Findings

*For each security control domain assessed, record the finding, evidence reference, rating, and required remediation action where applicable.*

| Finding ID | Control Domain | RMiT Clause | Finding Description | Rating | Evidence Reference | Remediation Owner | Target Date |
|---|---|---|---|---|---|---|---|
| FND-001 | Authentication | 12.2 | [Description of finding] | [Rating] | [Appendix A Ref] | [Owner] | [Date] |
| FND-002 | Session Management | 12.2 | [Description of finding] | [Rating] | [Appendix A Ref] | [Owner] | [Date] |
| FND-003 | Data Storage | 12.2 | [Description of finding] | [Rating] | [Appendix A Ref] | [Owner] | [Date] |
| FND-004 | Communication Security | 12.2 | [Description of finding] | [Rating] | [Appendix A Ref] | [Owner] | [Date] |
| FND-005 | Anti-Tampering | 12.2 | [Description of finding] | [Rating] | [Appendix A Ref] | [Owner] | [Date] |
| FND-006 | [Control Domain] | [Clause] | [Description of finding] | [Rating] | [Appendix A Ref] | [Owner] | [Date] |

### 4.3 Remediation Tracking

*Record the status of remediation actions arising from prior assessment findings. This section should be updated at each subsequent review cycle.*

| Finding ID | Original Assessment Date | Remediation Action | Status | Verified By | Verification Date |
|---|---|---|---|---|---|
| [Prior FND-ID] | [Date] | [Action Taken] | [Open / In Progress / Closed] | [Name] | [Date] |
| [Prior FND-ID] | [Date] | [Action Taken] | [Open / In Progress / Closed] | [Name] | [Date] |

---

## 5. Channel Security Architecture

### 5.1 Mobile Channel Architecture Overview

*Describe the security architecture of the mobile delivery channel, including the key components, data flows, and security controls applied at each layer. Attach or reference architecture diagrams in the Appendices.*

The mobile channel architecture for [Organization Name]'s mobile banking services is illustrated in **Appendix B — Channel Security Architecture Diagram**. The architecture comprises the following layers:

**5.1.1 Client Layer (Mobile Device)**

| Component | Security Control | Implementation Detail |
|---|---|---|
| Mobile Application Binary | Code obfuscation and anti-tampering | [Tool / Approach Used] |
| Local Data Storage | Encrypted storage (AES-256) | iOS Keychain / Android Keystore |
| Certificate Pinning | Public key pinning / certificate pinning | [Implementation Details] |
| Jailbreak / Root Detection | Runtime detection and session termination | [Library / Approach] |
| Clipboard Protection | Sensitive field clipboard access prevention | [Implementation Details] |
| Screenshot Prevention | Secure screen flag / FLAG_SECURE | [Implementation Details] |

**5.1.2 Transport Layer**

| Control | Specification | Notes |
|---|---|---|
| Protocol | TLS 1.2 / TLS 1.3 (minimum TLS 1.2) | TLS 1.0 and 1.1 disabled |
| Cipher Suites | [List approved cipher suites] | Weak ciphers explicitly rejected |
| Certificate Authority | [CA Name] | [Validity Period] |
| Certificate Pinning Enforcement | Yes / No | [Enforcement mechanism] |
| API Gateway / WAF | [Product / Service Name] | [Vendor / Version] |

**5.1.3 Backend / Server Layer**

| Component | Security Control | Implementation Detail |
|---|---|---|
| API Gateway | Authentication enforcement, rate limiting, input validation | [Product Name] |
| Authentication Server | [Authentication mechanism] | [Product / Implementation] |
| Token Management | JWT / OAuth 2.0 / [Other] with [signing algorithm] | [Details] |
| Fraud Detection Engine | Behavioral analytics, anomaly detection | [Product / Vendor] |
| Logging and Monitoring | SIEM integration, security event alerting | [Platform Name] |

### 5.2 Data Flow Security

*Describe how sensitive data flows are protected across the mobile channel, from the customer's device to backend systems.*

| Data Type | Encryption at Rest | Encryption in Transit | Masking / Tokenization | Notes |
|---|---|---|---|---|
| Customer Account Numbers | [Yes / No / N/A] | TLS 1.2+ | [Yes / No] | [Notes] |
| Authentication Credentials | [Yes / No / N/A] | TLS 1.2+ | Hashed / Not stored | [Notes] |
| Transaction Data | [Yes / No / N/A] | TLS 1.2+ | [Yes / No] | [Notes] |
| Biometric Templates | [Yes / No / N/A] | TLS 1.2+ | On-device only | [Notes] |
| Session Tokens | [Yes / No / N/A] | TLS 1.2+ | [Yes / No] | [Notes] |

---

## 6. Customer Authentication Requirements

### 6.1 Authentication Framework

*Document the authentication mechanisms implemented for mobile channel access, demonstrating compliance with RMiT Clause 12.2 requirements for strong customer authentication.*

[Organization Name] has implemented the following authentication mechanisms for mobile channel customer access:

**6.1.1 Authentication Methods Implemented**

| Authentication Method | Factor Type | Application | Status |
|---|---|---|---|
| Password / PIN | Knowledge | Login | Implemented |
| Biometric (Fingerprint) | Inherence | Login / Transaction Authorization | Implemented |
| Biometric (Face Recognition) | Inherence | Login / Transaction Authorization | Implemented |
| One-Time Password (OTP) — SMS | Possession | Step-up Authentication | Implemented |
| One-Time Password (OTP) — In-App | Possession | Step-up Authentication | Implemented |
| Push Notification Approval | Possession | Transaction Authorization | [Implemented / Planned] |
| Hardware Security Key | Possession | [Use Case] | [Implemented / Not Applicable] |

**6.1.2 Multi-Factor Authentication (MFA) Matrix**

| User Action | Factor 1 | Factor 2 | Step-Up Trigger |
|---|---|---|---|
| Initial Login | [Password / Biometric] | [OTP / Push] | [Always / Risk-Based] |
| High-Value Transaction (above RM [Threshold]) | [Factor] | [Factor] | Mandatory |
| Change of Registered Mobile Number | [Factor] | [Factor] | Mandatory |
| Change of Transaction Limit | [Factor] | [Factor] | Mandatory |
| New Payee Registration | [Factor] | [Factor] | Mandatory |
| [Other Sensitive Action] | [Factor] | [Factor] | [Trigger] |

### 6.2 Account Lockout and Brute Force Protection

*Document the controls implemented to protect against credential stuffing, brute force attacks, and unauthorized access attempts.*

| Control | Configuration | Notes |
|---|---|---|
| Maximum Failed Login Attempts | [Number] attempts | Before account lockout |
| Account Lockout Duration | [Duration] | Temporary / Permanent until reset |
| Lockout Notification | [Yes / No] | Customer notified via [Channel] |
| CAPTCHA / Bot Detection | [Yes / No] | [Implementation Details] |
| Suspicious Login Alerting | [Yes / No] | [Alert Channel] |
| Device Binding | [Yes / No] | [Implementation Details] |
| IP-Based Rate Limiting | [Yes / No] | [Threshold and Duration] |

### 6.3 Password / PIN Policy

| Policy Parameter | Requirement | Current Configuration |
|---|---|---|
| Minimum PIN Length | [Min Length] digits | [Configured Value] |
| PIN Complexity Requirements | [Requirements] | [Configured Value] |
| Password Minimum Length | [Min Length] characters | [Configured Value] |
| Password Complexity | [Requirements] | [Configured Value] |
| Password History | Last [N] passwords | [Configured Value] |
| Maximum Password Age | [Days] | [Configured Value] |
| Biometric Fallback | Password / PIN | [Yes / No] |

### 6.4 Device Registration and Binding

*Describe the controls used to bind a customer's mobile application to a registered device, reducing the risk of unauthorized access from unregistered devices.*

| Control | Implementation | Notes |
|---|---|---|
| Device Registration Process | [Description] | [Notes] |
| Device Identifier Binding | [Device ID / Certificate / Other] | [Notes] |
| Maximum Registered Devices per Customer | [Number] | [Notes] |
| Deregistration Process | [Customer-initiated / Automated] | [Notes] |
| Trusted Device Notification | [Yes / No] | [Channel] |

---

## 7. Session Management Controls

### 7.1 Session Lifecycle Management

*Document the session management controls implemented in the mobile application to limit exposure from session hijacking, token theft, and unauthorized session reuse.*

**7.1.1 Session Token Controls**

| Control | Specification | Configured Value |
|---|---|---|
| Session Token Type | [JWT / OAuth 2.0 Access Token / Custom] | [Details] |
| Token Signing Algorithm | [RS256 / ES256 / Other] | [Configured Value] |
| Access Token Validity Period | [Duration] | [Configured Value] |
| Refresh Token Validity Period | [Duration] | [Configured Value] |
| Token Storage Location | [Secure Enclave / Keychain / Keystore] | [Configured Value] |
| Token Binding | [Yes / No] | [Device / Network binding] |
| Token Rotation on Refresh | [Yes / No] | [Configured Value] |
| Revocation Mechanism | [Blacklist / Short Expiry / Other] | [Configured Value] |

**7.1.2 Session Timeout Controls**

| Timeout Type | Trigger | Duration | Action on Expiry |
|---|---|---|---|
| Idle Session Timeout | No user interaction | [Duration] | Session terminated; re-authentication required |
| Absolute Session Timeout | From session creation | [Duration] | Session terminated; re-authentication required |
| Background / Minimized App Timeout | App moved to background | [Duration] | [Session terminated / Re-authentication on resume] |
| High-Value Transaction Session | Post-transaction | [Duration] | [Action] |

### 7.2 Concurrent Session Management

| Control | Specification | Configured Value |
|---|---|---|
| Maximum Concurrent Sessions | [Number] per customer | [Configured Value] |
| Concurrent Session Handling | [Terminate oldest / Block new / Notify customer] | [Configured Value] |
| Cross-Device Session Visibility | [Yes / No] | [Customer can view active sessions] |
| Remote Session Termination | [Yes / No] | [Customer-initiated via [Channel]] |

### 7.3 Sensitive Operation Re-Authentication

*Document the controls requiring re-authentication before sensitive operations, even within an active authenticated session.*

| Sensitive Operation | Re-Authentication Required | Method |
|---|---|---|
| Fund Transfer above RM [Threshold] | Yes | [Method] |
| New Payee Addition | Yes | [Method] |
| Profile Changes (email, phone) | Yes | [Method] |
| Security Settings Changes | Yes | [Method] |
| Loan / Credit Application | Yes | [Method] |
| [Other Sensitive Operation] | [Yes / No] | [Method] |

### 7.4 Session Security Event Logging

*Describe the security events logged in relation to session management, and how these are monitored for anomalies.*

| Event Type | Logged | Log Destination | Alert Generated |
|---|---|---|---|
| Successful Login | Yes | [SIEM / Log Platform] | No (unless anomalous) |
| Failed Login Attempt | Yes | [SIEM / Log Platform] | Yes (after [N] failures) |
| Account Lockout | Yes | [SIEM / Log Platform] | Yes |
| Session Timeout | Yes | [SIEM / Log Platform] | No |
| Explicit Logout | Yes | [SIEM / Log Platform] | No |
| Concurrent Session Conflict | Yes | [SIEM / Log Platform] | Yes |
| Suspicious Activity Flag | Yes | [SIEM / Log Platform] | Yes |
| Device Deregistration | Yes | [SIEM / Log Platform] | Yes |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for the maintenance, assessment, and reporting of mobile security feature evidence.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | [Relevant Dept Head] | Mobile App Dev Team | Information Security | Internal Audit | Risk Management | Compliance | IT Operations |
|---|---|---|---|---|---|---|---|
| Define mobile security feature requirements | C | R | A | I | C | C | I |
| Implement mobile security controls | I | R | C | I | I | I | C |
| Conduct security feature assessment | I | C | R | C | I | I | C |
| Review and approve assessment findings | A | I | R | C | C | C | I |
| Remediate identified findings | I | R | C | I | I | I | R |
| Verify remediation effectiveness | I | C | R | R | I | I | I |
| Maintain evidence documentation | R | C | C | I | I | C | I |
| Submit evidence to regulators / auditors | A | I | C | C | R | R | I |
| Escalate material findings | A | I | R | R | C | C | I |
| Conduct quarterly review cycle | A | R | R | I | C | C | I |

---

## 9. Review and Approval

### 9.1 Review Schedule

This document is subject to the following review triggers:

- **Scheduled Review:** Quarterly, or as stipulated by [Organization Name]'s Technology Risk Policy
- **Event-Driven Review:** Upon release of a new major application version, following a significant security incident affecting the mobile channel, or upon issuance of updated BNM guidance applicable to mobile security
- **Ad Hoc Review:** As directed by the [Relevant Department Head], Information Security, or Internal Audit

### 9.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial document creation |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of changes] |

### 9.3 Approval Sign-Off

*This document requires sign-off from the following roles prior to submission to regulators or use in audit engagements.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], [Title] | | [Date] |
| Reviewed By | [Name], Information Security Manager | | [Date] |
| Reviewed By | [Name], Technology Risk Manager | | [Date] |
| Approved By | [Name], [Relevant Department Head] | | [Date] |
| Endorsed By | [Name], Chief Information Security Officer (CISO) | | [Date] |

---

## 10. References

The following regulatory documents, standards, and internal policies are referenced in or relevant to this evidence document:

| Reference | Document Title | Publisher | Version / Date |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Effective Date] |
| BNM RMiT Clause 12.2 | Mobile Security Requirements | Bank Negara Malaysia | [Effective Date] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 (as amended) |
| OWASP MASVS | Mobile Application Security Verification Standard | OWASP Foundation | [Version] |
| OWASP Mobile Top 10 | OWASP Mobile Top 10 Risks | OWASP Foundation | [Year] |
| NIST SP 800-163 | Vetting the Security of Mobile Applications | NIST | [Revision] |
| [Internal Policy] | [Organization Name] Mobile Application Security Policy | [Organization Name] | [Version / Date] |
| [Internal Policy] | [Organization Name] Technology Risk Management Framework | [Organization Name] | [Version / Date] |
| [Internal Policy] | [Organization Name] Acceptable Use of Cryptography Policy | [Organization Name] | [Version / Date] |
| [Other Reference] | [Title] | [Publisher] | [Version / Date] |

---

## 11. Appendices

### Appendix A — Evidence Register

*List all evidence items collected during the assessment. Each item should be stored securely and referenced by its unique evidence ID.*

| Evidence ID | Description | Type | Collection Date | Collected By | Storage Location | Retention Period |
|---|---|---|---|---|---|---|
| EVD-001 | [e.g., Screenshot of MFA prompt during login flow] | Screenshot | [Date] | [Name] | [Location] | [Period] |
| EVD-002 | [e.g., SAST scan report — [Application Name] v[X.Y]] | Tool Report | [Date] | [Name] | [Location] | [Period] |
| EVD-003 | [e.g., Penetration test completion certificate] | Certificate | [Date] | [Name] | [Location] | [Period] |
| EVD-004 | [e.g., TLS configuration extract from API gateway] | Configuration Extract | [Date] | [Name] | [Location] | [Period] |
| EVD-005 | [e.g., Session timeout configuration screenshot] | Screenshot | [Date] | [Name] | [Location] | [Period] |
| EVD-006 | [e.g., Certificate pinning implementation code review notes] | Code Review Extract | [Date] | [Name] | [Location] | [Period] |
| EVD-007 | [e.g., Jailbreak/root detection test result log] | Test Log | [Date] | [Name] | [Location] | [Period] |
| EVD-[N] | [Description] | [Type] | [Date] | [Name] | [Location] | [Period] |

---

### Appendix B — Channel Security Architecture Diagram

*Attach or embed the current approved mobile channel security architecture diagram. The diagram should illustrate all security control boundaries, data flows, authentication touchpoints, and integration points between the mobile client, transport layer, API gateway, and backend systems.*

**[Insert Architecture Diagram Here]**

Diagram Reference: [Diagram ID / Title]
Diagram Version: [Version]
Diagram Last Updated: [Date]
Maintained By: [Team / Role]

---

### Appendix C — Mobile Security Control Checklist

*Use this checklist to validate that all required mobile security features are in place prior to application release or at each quarterly review cycle.*

| Control Reference | Control Description | RMiT Clause | Status | Evidence Reference | Notes |
|---|---|---|---|---|---|
| MOB-CTL-01 | TLS 1.2 or higher enforced for all network communications | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-02 | Certificate pinning implemented and enforced | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-03 | Sensitive data encrypted at rest using platform-approved secure storage | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-04 | Multi-factor authentication enforced for login and high-risk transactions | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-05 | Account lockout after defined failed authentication attempts | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-06 | Idle session timeout implemented and enforced | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-07 | Absolute session timeout implemented and enforced | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-08 | Jailbreak and root detection implemented | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-09 | Code obfuscation applied to application binary | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-10 | Anti-tampering / integrity verification controls in place | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-11 | Screenshot prevention enabled on sensitive screens | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-12 | Sensitive data excluded from application logs | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-13 | Device binding / registration controls implemented | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-14 | Re-authentication enforced for sensitive in-session operations | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |
| MOB-CTL-15 | Security events logged and forwarded to SIEM | 12.2 | [Compliant / Non-Compliant] | [EVD-ID] | |

---

### Appendix D — Prior Assessment Summary

*Summarize findings from the immediately preceding assessment cycle for comparison and trend analysis.*

| Assessment Date | Overall Rating | Total Findings | Critical | High | Medium | Low | Closed by This Review |
|---|---|---|---|---|---|---|---|
| [Prior Date] | [Rating] | [N] | [N] | [N] | [N] | [N] | [N] |
| [Current Date] | [Rating] | [N] | [N] | [N] | [N] | [N] | [N] |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It must not be shared outside [Organization Name] without the written approval of the [Relevant Department Head] or the Chief Information Security Officer. Physical copies must be stored securely and disposed of in accordance with [Organization Name]'s Information Classification and Handling Policy.