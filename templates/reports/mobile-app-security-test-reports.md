# Mobile App Security Test Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Prepared By:** [Prepared By]
**Report Date:** [Report Date]
**Application Name:** [Mobile Application Name]
**Application Version:** [Application Version]
**Test Engagement Reference:** [Engagement Reference ID]

---

> **Confidentiality Notice:** This document contains sensitive security information and is intended solely for the named recipients and authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. Handle in accordance with the organization's Information Classification Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
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

This Mobile App Security Test Report documents the results of security testing conducted on [Mobile Application Name] version [Application Version] for [Organization Name]. The report provides a structured assessment of the application's security posture against the requirements set forth by Bank Negara Malaysia (BNM) under the **Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 12.2** governing channel security and mobile application controls.

This document serves as evidence of due diligence in meeting BNM RMiT obligations and supports the organization's risk management framework for technology-related risks in mobile channel operations.

### 1.2 Scope

*Define the boundaries of this security test engagement, including which application components, environments, and platforms were tested.*

**In-Scope:**

- Mobile application: [Mobile Application Name] v[Application Version]
- Platforms tested: [Android / iOS / Both]
- OS versions covered: [e.g., Android 12–14, iOS 16–17]
- Test environments: [e.g., Staging / UAT / Production-equivalent]
- Backend API endpoints interfaced by the mobile application
- Authentication and session management modules
- Data storage and transmission mechanisms
- [Additional in-scope items as applicable]

**Out-of-Scope:**

- [List any components or environments explicitly excluded, e.g., backend core banking systems not directly interfaced]
- [Third-party SDKs not maintained by the organization]
- [Physical device security controls]

### 1.3 Regulatory Context

This report is prepared in compliance with the following regulatory requirements:

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 12.2 | Channel security controls for mobile applications |
| BNM RMiT Policy Document | Clause 12 | Technology risk management for digital channels |
| Personal Data Protection Act 2010 (PDPA) | Section 9 | Security of personal data processed via mobile channel |
| [Other applicable regulation] | [Clause] | [Summary] |

---

## 2. Executive Summary

### 2.1 Overview

*Provide a concise, non-technical summary of the test engagement and overall security posture suitable for senior management and risk committee review.*

This security test was conducted between [Test Start Date] and [Test End Date] by [Internal Security Team / Appointed Security Assessment Firm: Name]. The assessment evaluated the security of [Mobile Application Name] prior to its [planned release / quarterly review] in accordance with [Organization Name]'s Mobile Application Security Testing Policy and BNM RMiT Clause 12.2 obligations.

### 2.2 Overall Risk Rating

*Assign an aggregate risk rating based on the consolidated findings. Use the organization's approved risk rating scale.*

| Overall Risk Rating | [CRITICAL / HIGH / MEDIUM / LOW] |
|---|---|
| **Total Findings** | [Total Number] |
| **Critical** | [Number] |
| **High** | [Number] |
| **Medium** | [Number] |
| **Low** | [Number] |
| **Informational** | [Number] |

### 2.3 Key Findings Summary

*Summarize the most significant findings in plain language. Avoid technical jargon. Highlight any findings that require immediate remediation before release.*

[Provide 3–5 bullet points summarizing the most material findings, their potential impact, and the recommended course of action.]

- **[Finding Title]:** [Brief description of the finding and its business/risk impact.]
- **[Finding Title]:** [Brief description of the finding and its business/risk impact.]
- **[Finding Title]:** [Brief description of the finding and its business/risk impact.]

### 2.4 Release Recommendation

*State clearly whether the application is approved for release, conditionally approved, or not approved, and the rationale.*

| Recommendation | [Approved for Release / Conditional Approval / Not Approved for Release] |
|---|---|
| **Rationale** | [State the basis for this recommendation, referencing critical or high findings if applicable.] |
| **Conditions (if any)** | [List any mandatory remediation actions that must be completed prior to or shortly after release.] |
| **Target Remediation Date** | [Date] |

---

## 3. Scope and Methodology

### 3.1 Test Objectives

*Describe what the security test was designed to achieve, aligned with BNM RMiT Clause 12.2 requirements.*

The objectives of this security test engagement were to:

1. Assess the mobile application's resilience against common mobile attack vectors as defined by OWASP Mobile Application Security Verification Standard (MASVS) and OWASP Mobile Top 10.
2. Validate that channel security controls meet the requirements of BNM RMiT Clause 12.2.
3. Identify vulnerabilities in authentication, session management, data storage, and data transmission.
4. Evaluate the adequacy of reverse engineering and tampering controls.
5. Confirm compliance with [Organization Name]'s internal Mobile Application Security Standards.

### 3.2 Testing Methodology

*Describe the testing methodology, standards, and frameworks applied.*

Testing was conducted using the following methodology and standards:

| Framework / Standard | Version / Edition | Application |
|---|---|---|
| OWASP Mobile Application Security Verification Standard (MASVS) | [Version, e.g., v2.0] | Primary test standard |
| OWASP Mobile Top 10 | [Year] | Vulnerability classification |
| OWASP Mobile Application Testing Guide (MASTG) | [Version] | Testing procedures |
| BNM RMiT Policy Document | [Date of Policy] | Regulatory compliance baseline |
| [Organization Internal Standard] | [Version] | Internal control requirements |

### 3.3 Test Types Performed

| Test Type | Performed | Notes |
|---|---|---|
| Static Application Security Testing (SAST) | [Yes / No] | [Tool(s) used, e.g., MobSF, Semgrep] |
| Dynamic Application Security Testing (DAST) | [Yes / No] | [Tool(s) used, e.g., Burp Suite, OWASP ZAP] |
| Manual Penetration Testing | [Yes / No] | [Tester(s) and approach] |
| Binary Analysis / Reverse Engineering | [Yes / No] | [Tool(s) used, e.g., jadx, Frida, objection] |
| Network Traffic Analysis | [Yes / No] | [Tool(s) used] |
| Threat Modelling | [Yes / No] | [Methodology, e.g., STRIDE] |
| Third-Party Library Audit | [Yes / No] | [Tool(s) used, e.g., OWASP Dependency-Check] |

### 3.4 Test Environment

| Parameter | Details |
|---|---|
| **Test Environment** | [Staging / UAT / Production-equivalent] |
| **Test Devices (Android)** | [Device model(s), OS version(s)] |
| **Test Devices (iOS)** | [Device model(s), OS version(s)] |
| **Test Account Types** | [e.g., Standard user, Premium user, Admin] |
| **Network Conditions** | [e.g., WiFi, mobile data, proxy-intercepted] |
| **Jailbreak / Root Testing** | [Yes / No — specify device state] |
| **Backend API Base URL (Test)** | [URL] |

### 3.5 Limitations and Assumptions

*Document any constraints that may affect the completeness or accuracy of the assessment.*

- [e.g., Testing was conducted on non-production environment; findings may not fully reflect production configuration.]
- [e.g., Certain API endpoints were unavailable during testing due to [reason].]
- [e.g., Hardware security module (HSM) integrations were not directly assessable within scope.]
- [Add additional limitations as applicable.]

---

## 4. Key Findings and Observations

### 4.1 Findings Register

*List all identified security vulnerabilities and observations in the findings register below. Each finding must be assigned a unique ID, severity rating, and remediation recommendation. Severity ratings must follow the organization's approved risk rating methodology.*

**Severity Rating Definitions:**

| Severity | Definition |
|---|---|
| **Critical** | Exploitation could lead to immediate, severe compromise of the application, user data, or connected systems. Requires immediate remediation before release. |
| **High** | Significant vulnerability with high likelihood of exploitation and material impact. Remediation required prior to release or within [X] days. |
| **Medium** | Moderate risk; exploitation requires specific conditions. Remediation required within [30–60] days. |
| **Low** | Minor weakness with limited impact. Remediation within [90] days or next release cycle. |
| **Informational** | Best-practice recommendation; no direct security risk. Address in future releases. |

**Findings Register:**

| Finding ID | Title | Category | Severity | OWASP Ref | Affected Component | Status |
|---|---|---|---|---|---|---|
| MAST-001 | [Finding Title] | [e.g., Authentication] | [Critical/High/Medium/Low/Info] | [e.g., M1:2023] | [Component] | [Open / Remediated / Accepted] |
| MAST-002 | [Finding Title] | [e.g., Data Storage] | [Severity] | [OWASP Ref] | [Component] | [Status] |
| MAST-003 | [Finding Title] | [e.g., Cryptography] | [Severity] | [OWASP Ref] | [Component] | [Status] |
| MAST-004 | [Finding Title] | [e.g., Network Communication] | [Severity] | [OWASP Ref] | [Component] | [Status] |
| MAST-005 | [Finding Title] | [e.g., Session Management] | [Severity] | [OWASP Ref] | [Component] | [Status] |
| [MAST-NNN] | [Add rows as needed] | | | | | |

### 4.2 Detailed Findings

*For each finding in the register, provide a detailed write-up using the template below. Replicate this subsection for each finding.*

---

**Finding ID:** MAST-001
**Title:** [Finding Title]
**Severity:** [Critical / High / Medium / Low / Informational]
**Status:** [Open / Remediated / Risk Accepted]

| Field | Details |
|---|---|
| **Category** | [OWASP Mobile Top 10 Category] |
| **Affected Component** | [e.g., Login module, Token storage, API endpoint] |
| **OWASP Reference** | [e.g., MASVS-AUTH-1, M2:2023] |
| **CVE Reference** | [CVE-XXXX-XXXXX / Not Applicable] |
| **RMiT Clause** | [e.g., Clause 12.2] |

**Description:**
[Provide a clear, factual description of the vulnerability. Explain what the issue is, where it exists, and why it is a security concern.]

**Evidence:**
[Describe the evidence supporting this finding. Reference screenshots, logs, or proof-of-concept steps. Attach supporting artefacts in Appendix [X].]

- Step 1: [Action taken]
- Step 2: [Observed behaviour]
- Step 3: [Confirmed impact]

**Impact:**
[Describe the potential business and technical impact if this vulnerability were exploited. Consider confidentiality, integrity, and availability dimensions.]

**Recommendation:**
[Provide specific, actionable remediation guidance. Where applicable, reference secure coding practices, library updates, or configuration changes.]

**References:**
- [OWASP MASTG Test: MASTG-TEST-XXXX]
- [CWE-XXX: Description]
- [Any additional reference]

---

*(Replicate the above subsection for each additional finding.)*

---

### 4.3 Findings Distribution Summary

*Provide a visual summary of findings by severity and category for management reporting.*

**By Severity:**

| Severity | Count | Percentage |
|---|---|---|
| Critical | [N] | [%] |
| High | [N] | [%] |
| Medium | [N] | [%] |
| Low | [N] | [%] |
| Informational | [N] | [%] |
| **Total** | **[N]** | **100%** |

**By OWASP Mobile Top 10 Category:**

| OWASP Category | Count |
|---|---|
| M1: Improper Credential Usage | [N] |
| M2: Inadequate Supply Chain Security | [N] |
| M3: Insecure Authentication/Authorization | [N] |
| M4: Insufficient Input/Output Validation | [N] |
| M5: Insecure Communication | [N] |
| M6: Inadequate Privacy Controls | [N] |
| M7: Insufficient Binary Protections | [N] |
| M8: Security Misconfiguration | [N] |
| M9: Insecure Data Storage | [N] |
| M10: Insufficient Cryptography | [N] |

---

## 5. Channel Security Architecture

### 5.1 Architecture Overview

*Describe the end-to-end security architecture of the mobile channel, from the client device to the backend systems. This section demonstrates compliance with BNM RMiT Clause 12.2 requirements for channel security design.*

[Insert or reference an architecture diagram illustrating the mobile application's security layers, API gateway, and backend connectivity. Attach the detailed diagram in Appendix A.]

**High-Level Channel Security Architecture:**

| Layer | Component | Security Control | Assessment Status |
|---|---|---|---|
| Client Device | Mobile Application | [e.g., Certificate pinning, jailbreak detection] | [Adequate / Requires Improvement] |
| Transport Layer | HTTPS/TLS | [e.g., TLS 1.2+, cipher suite configuration] | [Adequate / Requires Improvement] |
| API Gateway | [Gateway Name] | [e.g., OAuth 2.0, rate limiting, WAF] | [Adequate / Requires Improvement] |
| Application Backend | [Backend System] | [e.g., Token validation, input sanitization] | [Adequate / Requires Improvement] |
| Data Layer | [Database / Storage] | [e.g., Encryption at rest, access controls] | [Adequate / Requires Improvement] |

### 5.2 Transport Security Assessment

*Document the assessment of data-in-transit protections.*

| Control | Requirement | Observed Configuration | Compliant |
|---|---|---|---|
| TLS Version | TLS 1.2 minimum | [Observed version] | [Yes / No] |
| Certificate Validity | Valid, not expired | [Certificate details] | [Yes / No] |
| Certificate Pinning | Implemented for sensitive endpoints | [Implementation details] | [Yes / No] |
| Cipher Suites | No weak ciphers (e.g., RC4, DES) | [Observed cipher suites] | [Yes / No] |
| HSTS | HTTP Strict Transport Security enabled | [Status] | [Yes / No] |
| API Endpoint Exposure | No sensitive data in URL parameters | [Observation] | [Yes / No] |

### 5.3 Data Storage Security Assessment

*Document the assessment of data-at-rest protections on the device.*

| Data Type | Storage Location | Encryption Applied | Assessment |
|---|---|---|---|
| Authentication tokens | [e.g., Keystore / Keychain / SharedPreferences] | [Yes / No] | [Adequate / Risk] |
| User credentials | [Storage location] | [Yes / No] | [Adequate / Risk] |
| Personal data (PII) | [Storage location] | [Yes / No] | [Adequate / Risk] |
| Transaction data | [Storage location] | [Yes / No] | [Adequate / Risk] |
| Cache data | [Storage location] | [Yes / No] | [Adequate / Risk] |
| Application logs | [Storage location] | [Yes / No] | [Adequate / Risk] |

### 5.4 Third-Party Libraries and Dependencies

*Document the assessment of third-party libraries used in the application, in accordance with supply chain security requirements.*

| Library / SDK | Version | Purpose | Known Vulnerabilities | Action Required |
|---|---|---|---|---|
| [Library Name] | [Version] | [Purpose] | [CVE(s) / None] | [Update / Accept / Replace] |
| [Library Name] | [Version] | [Purpose] | [CVE(s) / None] | [Action] |
| [Add rows as needed] | | | | |

---

## 6. Customer Authentication Requirements

### 6.1 Authentication Controls Assessment

*Assess the adequacy of customer authentication mechanisms in accordance with BNM RMiT Clause 12.2 requirements for strong customer authentication in digital channels.*

#### 6.1.1 Authentication Mechanism Overview

| Authentication Factor | Type | Implementation | Assessment |
|---|---|---|---|
| Password / PIN | Knowledge | [Description of implementation] | [Adequate / Requires Improvement] |
| Biometric (Fingerprint / Face ID) | Inherence | [Description of implementation] | [Adequate / Requires Improvement] |
| Device binding / Device ID | Possession | [Description of implementation] | [Adequate / Requires Improvement] |
| One-Time Password (OTP) | Possession | [Description of implementation] | [Adequate / Requires Improvement] |
| [Additional factor] | [Type] | [Description] | [Assessment] |

#### 6.1.2 Multi-Factor Authentication (MFA) Assessment

*Assess whether multi-factor authentication is implemented in accordance with BNM RMiT requirements, particularly for high-risk transactions.*

| Scenario | MFA Required | MFA Implemented | Compliant |
|---|---|---|---|
| Initial login | [Yes / No] | [Yes / No] | [Yes / No] |
| High-value transaction (above threshold) | Yes | [Yes / No] | [Yes / No] |
| New payee registration | Yes | [Yes / No] | [Yes / No] |
| Profile / credential change | Yes | [Yes / No] | [Yes / No] |
| Login from new device | Yes | [Yes / No] | [Yes / No] |
| [Additional scenario] | [Requirement] | [Status] | [Compliance] |

#### 6.1.3 Password / PIN Policy Assessment

| Policy Control | Requirement | Observed Implementation | Compliant |
|---|---|---|---|
| Minimum PIN/password length | [e.g., 6-digit PIN / 8-char password] | [Observed] | [Yes / No] |
| Complexity requirements | [Requirements] | [Observed] | [Yes / No] |
| Maximum failed attempts | [e.g., 3–5 attempts] | [Observed] | [Yes / No] |
| Account lockout on failed attempts | Required | [Observed] | [Yes / No] |
| Password/PIN change frequency | [Requirement] | [Observed] | [Yes / No] |
| Prohibition of common/weak credentials | Required | [Observed] | [Yes / No] |
| Credentials masked on screen | Required | [Observed] | [Yes / No] |
| Credentials not stored in plaintext | Required | [Observed] | [Yes / No] |

#### 6.1.4 Biometric Authentication Assessment

| Control | Requirement | Observed Implementation | Compliant |
|---|---|---|---|
| Biometric data stored locally on device | Required (not transmitted) | [Observed] | [Yes / No] |
| Use of platform biometric API (Keystore/Keychain) | Required | [Observed] | [Yes / No] |
| Fallback to PIN/password on biometric failure | Required | [Observed] | [Yes / No] |
| Re-enrolment trigger on device biometric change | Required | [Observed] | [Yes / No] |

### 6.2 Account Takeover Prevention Controls

*Assess controls designed to detect and prevent account takeover attempts.*

| Control | Implemented | Effectiveness Assessment |
|---|---|---|
| Anomalous login detection | [Yes / No / Partial] | [Assessment] |
| Geographic / IP-based anomaly detection | [Yes / No / Partial] | [Assessment] |
| Push notification on new device login | [Yes / No / Partial] | [Assessment] |
| Real-time customer alert on authentication events | [Yes / No / Partial] | [Assessment] |
| Credential stuffing protection | [Yes / No / Partial] | [Assessment] |

---

## 7. Session Management Controls

### 7.1 Session Management Assessment

*Assess the adequacy of session management controls to ensure that authenticated sessions are protected from hijacking, fixation, and unauthorized reuse, in accordance with BNM RMiT Clause 12.2.*

#### 7.1.1 Session Token Assessment

| Control | Requirement | Observed Implementation | Compliant |
|---|---|---|---|
| Session token randomness / entropy | Cryptographically random, sufficient length | [Observed] | [Yes / No] |
| Session token storage | Secure storage (Keystore/Keychain) | [Observed] | [Yes / No] |
| Session token transmission | HTTPS only, not in URL | [Observed] | [Yes / No] |
| Session token rotation on privilege change | Required | [Observed] | [Yes / No] |
| Token invalidation on logout | Required | [Observed] | [Yes / No] |
| Token invalidation on password change | Required | [Observed] | [Yes / No] |

#### 7.1.2 Session Timeout Controls

| Control | Requirement | Observed Implementation | Compliant |
|---|---|---|---|
| Idle session timeout | [e.g., 5 minutes for financial apps] | [Observed timeout value] | [Yes / No] |
| Absolute session timeout | [e.g., 30 minutes maximum session] | [Observed timeout value] | [Yes / No] |
| Background app timeout | [e.g., Re-authentication on app resume] | [Observed] | [Yes / No] |
| User notification before timeout | [Requirement] | [Observed] | [Yes / No] |
| Session data cleared on timeout | Required | [Observed] | [Yes / No] |

#### 7.2 Concurrent Session Controls

| Control | Requirement | Observed Implementation | Compliant |
|---|---|---|---|
| Concurrent session limitation | [e.g., Single active session per user] | [Observed] | [Yes / No] |
| Previous session invalidation on new login | Required | [Observed] | [Yes / No] |
| Active session visibility to user | [Requirement] | [Observed] | [Yes / No] |
| Remote session termination capability | [Requirement] | [Observed] | [Yes / No] |

#### 7.3 Logout and Session Termination

| Control | Requirement | Observed Implementation | Compliant |
|---|---|---|---|
| Explicit logout option readily accessible | Required | [Observed] | [Yes / No] |
| Server-side session invalidation on logout | Required | [Observed] | [Yes / No] |
| Client-side token/cookie clearance on logout | Required | [Observed] | [Yes / No] |
| Screen content clearance after logout | Required | [Observed] | [Yes / No] |
| Prevention of back-navigation to authenticated content post-logout | Required | [Observed] | [Yes / No] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for mobile application security testing activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | QA Lead | CISO / Security Team | Development Team | Risk & Compliance | Business Owner | Senior Management |
|---|---|---|---|---|---|---|
| Define mobile security test scope | R | C | C | C | I | I |
| Execute security testing | R | C | I | I | I | I |
| Review and validate findings | A | R | C | I | I | I |
| Remediate identified vulnerabilities | I | C | R | I | A | I |
| Verify remediation effectiveness | R | A | C | I | I | I |
| Approve application release | C | A | I | C | R | I |
| Submit report to Risk & Compliance | R | C | I | A | I | I |
| Escalate critical/high findings | A | R | I | C | I | I |
| Present findings to senior management | C | R | I | A | C | A |
| Maintain test report records | A | C | I | R | I | I |
| Quarterly review of security posture | R | C | C | A | C | I |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial release |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of changes] |

### 9.2 Document Review Schedule

This document is subject to review in accordance with the following schedule:

| Review Trigger | Action Required |
|---|---|
| Each mobile application release | Full security test and report update |
| Quarterly scheduled review | Review of outstanding findings and remediation status |
| Material change to application architecture | Ad hoc security assessment and report update |
| Discovery of critical vulnerability | Immediate ad hoc assessment |
| Regulatory guidance update (BNM) | Review and update for compliance alignment |

### 9.3 Approval Sign-Off

*This report must be reviewed and approved by the designated approvers prior to being submitted to the Risk & Compliance function and retained as a regulatory artefact.*

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead (Report Owner) | [Name] | | [Date] |
| Head of Information Security / CISO | [Name] | | [Date] |
| Chief Technology Officer (CTO) / IT Head | [Name] | | [Date] |
| Chief Risk Officer / Head of Risk & Compliance | [Name] | | [Date] |
| [Additional Approver as required] | [Name] | | [Date] |

---

## 10. References

### 10.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT Policy Document | Risk Management in Technology | Bank Negara Malaysia | Clause 12.2 (Channel Security), Clause 12 (Technology Risk) |
| Personal Data Protection Act 2010 | PDPA 2010 | Malaysian Parliament | Section 9 (Security of Personal Data) |
| [Additional BNM Guidelines] | [Title] | Bank Negara Malaysia | [Clause(s)] |

### 10.2 Standards and Frameworks References

| Reference | Title | Version |
|---|---|---|
| OWASP MASVS | Mobile Application Security Verification Standard | [Version] |
| OWASP MASTG | Mobile Application Security Testing Guide | [Version] |
| OWASP Mobile Top 10 | Top 10 Mobile Risks | [Year] |
| NIST SP 800-163 | Vetting the Security of Mobile Applications | Rev. 1 |
| ISO/IEC 27001 | Information Security Management Systems | [Edition] |
| [Internal Policy Reference] | [Title] | [Version] |

### 10.3 Internal Policy References

| Document | Version | Owner |
|---|---|---|
| Mobile Application Security Policy | [Version] | [Owner] |
| Information Classification Policy | [Version] | [Owner] |
| Vulnerability Management Policy | [Version] | [Owner] |
| Secure Software Development Lifecycle (SSDLC) Policy | [Version] | [Owner] |
| Incident Response Policy | [Version] | [Owner] |

---

## 11. Appendices

### Appendix A: Channel Security Architecture Diagram

*Attach a diagram illustrating the end-to-end security architecture of the mobile channel, including client-side components, transport layer, API gateway, application backend, and data storage layers. The diagram should annotate key security controls at each layer.*

[Architecture Diagram — Insert or attach as separate artefact]

---

### Appendix B: Test Environment Configuration Details

*Provide detailed configuration information for the test environment, including device specifications, OS versions, proxy configurations, and any environment-specific settings relevant to the assessment.*

| Parameter | Value |
|---|---|
| Android Test Device 1 | [Make, Model, OS Version] |
| Android Test Device 2 | [Make, Model, OS Version] |
| iOS Test Device 1 | [Make, Model, OS Version] |
| iOS Test Device 2 | [Make, Model, OS Version] |
| Proxy Tool | [Tool Name and Version] |
| SAST Tool | [Tool Name and Version] |
| DAST Tool | [Tool Name and Version] |
| Binary Analysis Tool | [Tool Name and Version] |
| Network Analysis Tool | [Tool Name and Version] |

---

### Appendix C: Evidence Screenshots and Artefacts

*Attach evidence screenshots, log extracts, and proof-of-concept artefacts supporting each finding documented in Section 4. Label each exhibit clearly with the corresponding Finding ID.*

| Exhibit | Finding ID | Description | File / Location |
|---|---|---|---|
| Exhibit C-1 | MAST-001 | [Description of screenshot or artefact] | [Filename / path] |
| Exhibit C-2 | MAST-002 | [Description] | [Filename / path] |
| [Add rows as needed] | | | |

---

### Appendix D: Remediation Tracking Log

*Track the remediation status of all identified findings. This log is to be updated by the development team and reviewed by the QA Lead upon each remediation verification cycle.*

| Finding ID | Severity | Title | Assigned To | Target Date | Remediation Date | Verified By | Status |
|---|---|---|---|---|---|---|---|
| MAST-001 | [Severity] | [Title] | [Developer/Team] | [Date] | [Date] | [QA Lead] | [Open / In Progress / Remediated / Accepted] |
| MAST-002 | [Severity] | [Title] | [Developer/Team] | [Date] | [Date] | [QA Lead] | [Status] |
| [Add rows as needed] | | | | | | | |

---

### Appendix E: Third-Party Assessment Firm Credentials

*Where security testing is conducted by an external party, retain evidence of the firm's credentials, qualifications, and authorization to conduct testing.*

| Field | Details |
|---|---|
| Assessment Firm Name | [Firm Name] |
| Engagement Letter Reference | [Reference Number] |
| Lead Tester Name | [Name] |
| Lead Tester Certifications | [e.g., OSCP, CEH, CREST CRT] |
| Testing Authorization Letter | [Reference / Attached as Exhibit E-1] |
| NDA Reference | [Reference Number / Date] |

---

### Appendix F: Glossary

| Term | Definition |
|---|---|
| DAST | Dynamic Application Security Testing — testing of a running application to identify vulnerabilities at runtime |
| MASVS | Mobile Application Security Verification Standard — OWASP standard for mobile application security requirements |
| MASTG | Mobile Application Security Testing Guide — OWASP guide for testing mobile application security |
| MFA | Multi-Factor Authentication — use of two or more authentication factors to verify identity |
| OTP | One-Time Password — single-use credential valid for a short period |
| PDPA | Personal Data Protection Act 2010 — Malaysian data protection legislation |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk management |
| SAST | Static Application Security Testing — analysis of application source code or binaries without execution |
| TLS | Transport Layer Security — cryptographic protocol for securing data in transit |

---

*End of Document*

---

*This document is classified as **Confidential**. Retention, disposal, and access controls must be applied in accordance with [Organization Name]'s Information Classification and Records Management Policy. Minimum retention period: [e.g., 7 years] in accordance with applicable regulatory requirements.*