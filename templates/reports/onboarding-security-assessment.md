# Onboarding Security Assessment

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Board of Directors / Company Secretary |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

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

This Onboarding Security Assessment evaluates the security posture of [Organization Name]'s digital onboarding channels, controls, and processes. It provides the Board of Directors and senior management with an objective assessment of the effectiveness of security measures implemented to protect customers and the institution during the digital onboarding lifecycle.

This assessment is conducted in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically **Clause 12.8**, which mandates that financial institutions maintain robust security controls for digital services, including customer onboarding processes. It complements the institution's broader technology risk management framework and aligns with applicable provisions under the **Personal Data Protection Act 2010 (PDPA)** and **NACSA Cybersecurity Standards**.

### 1.2 Scope

*Define the boundaries of this assessment — which systems, channels, and processes are included or explicitly excluded.*

This assessment covers the following digital onboarding channels and supporting infrastructure:

- **In-Scope Channels:**
  - [e.g., Mobile Banking Application — iOS and Android]
  - [e.g., Web-based Online Banking Portal]
  - [e.g., Third-Party Onboarding API Integrations]
  - [e.g., eKYC Platform and Identity Verification Services]

- **In-Scope Processes:**
  - Customer identity verification and eKYC workflows
  - Account registration and activation flows
  - Credential issuance and initial authentication setup
  - Consent capture and data processing disclosures
  - Fraud screening during onboarding

- **Out-of-Scope:**
  - [e.g., Branch-assisted onboarding (physical channels)]
  - [e.g., Legacy onboarding systems scheduled for decommission by [Date]]

- **Assessment Period:** [Assessment Start Date] to [Assessment End Date]

- **Assessment Type:** ☐ Initial Assessment &emsp; ☐ Periodic Review &emsp; ☐ Post-Incident Review &emsp; ☐ Change-Triggered Review

---

## 2. Assessment Scope and Criteria

### 2.1 Assessment Objectives

*Describe the specific objectives this assessment seeks to achieve and the security domains evaluated.*

This assessment evaluates whether [Organization Name]'s digital onboarding controls meet the following objectives:

| # | Objective | Relevant Standard |
|---|---|---|
| 1 | Ensure strong customer identity verification during onboarding | BNM RMiT Clause 12.8 |
| 2 | Validate the integrity and confidentiality of onboarding data flows | BNM RMiT Clause 12.8; PDPA s.9 |
| 3 | Confirm resilience of onboarding channels against fraudulent registration | BNM RMiT Clause 12.8 |
| 4 | Assess adequacy of session and access controls at point of onboarding | BNM RMiT Clause 12.8 |
| 5 | Verify logging, monitoring, and alerting coverage for onboarding events | BNM RMiT Clause 10 |
| 6 | Evaluate third-party and API security for onboarding integrations | BNM RMiT Clause 11 |

### 2.2 Assessment Criteria

*List the specific standards, benchmarks, and internal policies used to evaluate each control domain.*

Controls are assessed against the following criteria:

- **Regulatory:** BNM RMiT Policy Document (Clauses 12.8, 10, 11); PDPA 2010; NACSA Cybersecurity Framework
- **Industry Standards:** OWASP Mobile Security Testing Guide (MSTG); NIST SP 800-63-3 (Digital Identity Guidelines); ISO/IEC 27001:2022
- **Internal Policies:**
  - [Organization Name] Information Security Policy v[X.X]
  - [Organization Name] Technology Risk Management Framework v[X.X]
  - [Organization Name] Digital Banking Policy v[X.X]
  - [Organization Name] Customer Data Protection Policy v[X.X]

### 2.3 Control Rating Scale

*All findings are rated against a standardised scale to ensure consistency across assessments.*

| Rating | Definition | Action Required |
|---|---|---|
| **Satisfactory** | Control is fully implemented, effective, and consistently applied. | None; monitor at next review. |
| **Needs Improvement** | Control is partially implemented or shows minor gaps. | Remediation plan required within 90 days. |
| **Unsatisfactory** | Control is absent, ineffective, or poses material risk. | Immediate escalation; remediation plan within 30 days. |
| **Not Applicable** | Control domain is not relevant to the assessed scope. | Document rationale. |

---

## 3. Methodology

### 3.1 Assessment Approach

*Describe the overall methodology and approach used to conduct this assessment, including any third-party assessors involved.*

This assessment employed a risk-based methodology combining the following techniques:

| # | Method | Description | Coverage |
|---|---|---|---|
| 1 | **Document Review** | Review of policies, procedures, architecture diagrams, and prior audit findings. | All control domains |
| 2 | **Control Walkthroughs** | Interviews and demonstrations with system owners and process stakeholders. | All control domains |
| 3 | **Technical Testing** | Vulnerability scanning, configuration review, and application security testing of onboarding flows. | Channels and APIs |
| 4 | **Transaction Sampling** | Review of onboarding transaction logs to validate control effectiveness in practice. | Authentication, logging |
| 5 | **Third-Party Review** | Assessment of contracts, SLAs, and security attestations for eKYC and API vendors. | Third-party integrations |

### 3.2 Assessment Team

*Identify the individuals or functions responsible for conducting the assessment.*

| Role | Name / Function | Organization |
|---|---|---|
| Assessment Lead | [Name / Title] | [Internal / External Assessor] |
| Technical Assessor | [Name / Title] | [Internal / External Assessor] |
| Business Stakeholder | [Name / Title] | [Business Unit] |
| IT/Technology SME | [Name / Title] | Technology & Operations |
| Compliance Reviewer | [Name / Title] | Compliance / Risk |

### 3.3 Evidence Collected

*List the key evidence artefacts gathered during the assessment.*

- [ ] System architecture diagrams for digital onboarding platforms
- [ ] eKYC and identity verification vendor documentation
- [ ] API security configuration and gateway logs
- [ ] Authentication policy documentation
- [ ] Session management configuration settings
- [ ] Penetration test reports (dated: [Date])
- [ ] Previous assessment findings and remediation status
- [ ] Customer complaint and fraud incident data related to onboarding
- [ ] Staff interview records and walkthrough notes

### 3.4 Limitations and Constraints

*Document any limitations that may affect the completeness or reliability of findings.*

- [e.g., Assessment was conducted on a test environment; production testing was not performed due to operational risk.]
- [e.g., Third-party eKYC provider did not provide full access to audit logs within the assessment window.]
- [e.g., Penetration testing was limited in scope to [specific modules] as agreed with system owners.]

---

## 4. Findings and Ratings

### 4.1 Executive Summary

*Provide a high-level summary of the overall assessment outcome, suitable for Board and senior management review.*

| Assessment Area | Overall Rating | Key Observations |
|---|---|---|
| Assessment Scope and Controls | [Rating] | [Summary] |
| Channel Security Architecture | [Rating] | [Summary] |
| Customer Authentication | [Rating] | [Summary] |
| Session Management | [Rating] | [Summary] |
| Logging and Monitoring | [Rating] | [Summary] |
| Third-Party / API Security | [Rating] | [Summary] |
| **Overall Assessment** | **[Rating]** | **[Summary]** |

### 4.2 Detailed Findings

*For each finding identified, complete the table below. Assign a unique finding ID and link to the relevant control domain.*

#### 4.2.1 Finding Register

| Finding ID | Control Domain | Finding Description | Risk Rating | Recommendation | Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| OSA-[YYYY]-001 | [Domain] | [Describe the gap or weakness identified.] | High / Medium / Low | [Describe recommended remediation action.] | [Name / Team] | [DD/MM/YYYY] | Open / In Progress / Closed |
| OSA-[YYYY]-002 | [Domain] | [Describe the gap or weakness identified.] | High / Medium / Low | [Describe recommended remediation action.] | [Name / Team] | [DD/MM/YYYY] | Open / In Progress / Closed |
| OSA-[YYYY]-003 | [Domain] | [Describe the gap or weakness identified.] | High / Medium / Low | [Describe recommended remediation action.] | [Name / Team] | [DD/MM/YYYY] | Open / In Progress / Closed |

#### 4.2.2 Findings by Risk Rating

| Risk Rating | Count | % of Total Findings |
|---|---|---|
| High | [#] | [%] |
| Medium | [#] | [%] |
| Low | [#] | [%] |
| **Total** | **[#]** | **100%** |

### 4.3 Repeat Findings

*Identify any findings that recurred from prior assessments, indicating systemic control weaknesses.*

| Finding ID (Current) | Prior Finding ID | Assessment Date | Root Cause of Recurrence | Escalation Required |
|---|---|---|---|---|
| [OSA-[YYYY]-XXX] | [OSA-[YYYY]-XXX] | [Date] | [Describe root cause] | ☐ Yes &emsp; ☐ No |

### 4.4 Positive Observations

*Document areas where controls exceeded expectations or demonstrated best-practice implementation.*

- [e.g., Multi-factor authentication enforced consistently across all onboarding entry points.]
- [e.g., Real-time fraud scoring integrated into eKYC workflow with automatic rejection triggers.]
- [e.g., [Placeholder for additional positive observation]]

---

## 5. Channel Security Architecture

### 5.1 Overview of Digital Onboarding Channels

*Provide a summary of the channels through which customers can complete digital onboarding and the security architecture supporting each channel.*

| Channel | Platform | Hosting Model | Security Gateway | TLS Version | Last Pentest Date |
|---|---|---|---|---|---|
| Mobile Application (iOS) | [iOS version] | [On-premise / Cloud / Hybrid] | [WAF / API Gateway] | TLS [1.2 / 1.3] | [Date] |
| Mobile Application (Android) | [Android version] | [On-premise / Cloud / Hybrid] | [WAF / API Gateway] | TLS [1.2 / 1.3] | [Date] |
| Web Portal | [Browser compatibility] | [On-premise / Cloud / Hybrid] | [WAF / CDN] | TLS [1.2 / 1.3] | [Date] |
| API (Third-Party Integration) | [API version] | [On-premise / Cloud / Hybrid] | [API Gateway] | TLS [1.2 / 1.3] | [Date] |

### 5.2 Architecture Assessment

*Assess the security design of the onboarding channel architecture against RMiT and industry standards.*

#### 5.2.1 Network Segmentation and Perimeter Controls

- **Control Assessed:** Network segmentation of onboarding systems from core banking and internal networks.
- **Rating:** [Satisfactory / Needs Improvement / Unsatisfactory]
- **Observations:**
  - [e.g., Onboarding application is hosted in a dedicated DMZ with firewall rules limiting inbound/outbound traffic.]
  - [e.g., [Placeholder for additional observation]]
- **Finding Reference:** [OSA-[YYYY]-XXX or N/A]

#### 5.2.2 Encryption in Transit and at Rest

- **Control Assessed:** Encryption standards applied to onboarding data during transmission and storage.
- **Rating:** [Satisfactory / Needs Improvement / Unsatisfactory]
- **Observations:**
  - [e.g., All onboarding API endpoints enforce TLS 1.3; TLS 1.0 and 1.1 are disabled.]
  - [e.g., Customer identity documents stored encrypted using AES-256.]
  - [e.g., [Placeholder for additional observation]]
- **Finding Reference:** [OSA-[YYYY]-XXX or N/A]

#### 5.2.3 API and Third-Party Integration Security

- **Control Assessed:** Security of APIs and integrations with external parties (eKYC, credit bureau, telco).
- **Rating:** [Satisfactory / Needs Improvement / Unsatisfactory]
- **Observations:**
  - [e.g., API authentication enforced via OAuth 2.0 with short-lived tokens.]
  - [e.g., Third-party vendor security attestation (SOC 2 Type II) reviewed and current.]
  - [e.g., [Placeholder for additional observation]]
- **Finding Reference:** [OSA-[YYYY]-XXX or N/A]

#### 5.2.4 Application-Level Security Controls

- **Control Assessed:** OWASP Top 10 mitigations, code security practices, and application-layer defenses.
- **Rating:** [Satisfactory / Needs Improvement / Unsatisfactory]
- **Observations:**
  - [e.g., Most recent DAST scan dated [Date] identified [X] findings, of which [Y] remain open.]
  - [e.g., Certificate pinning implemented in mobile application.]
  - [e.g., [Placeholder for additional observation]]
- **Finding Reference:** [OSA-[YYYY]-XXX or N/A]

---

## 6. Customer Authentication Requirements

### 6.1 Authentication Controls Assessment

*Evaluate the authentication mechanisms applied during the customer onboarding process, including identity verification and initial credential setup, against BNM RMiT Clause 12.8 and NIST SP 800-63-3 standards.*

#### 6.1.1 Identity Verification (eKYC)

| Control | Requirement | Implementation Status | Rating | Finding Ref |
|---|---|---|---|---|
| Government-issued ID verification | Mandatory document capture and liveness check | [Describe implementation] | [Rating] | [Ref] |
| Facial biometric matching | Biometric comparison against ID document | [Describe implementation] | [Rating] | [Ref] |
| Liveness detection | Anti-spoofing controls (passive/active liveness) | [Describe implementation] | [Rating] | [Ref] |
| eKYC vendor accreditation | Vendor compliance with BNM eKYC guidelines | [Describe implementation] | [Rating] | [Ref] |
| Manual review fallback | Human review process for failed eKYC cases | [Describe implementation] | [Rating] | [Ref] |

#### 6.1.2 Initial Credential Setup

| Control | Requirement | Implementation Status | Rating | Finding Ref |
|---|---|---|---|---|
| Strong password policy | Minimum length, complexity, and history rules | [Describe implementation] | [Rating] | [Ref] |
| Multi-factor authentication (MFA) setup | MFA enrollment mandated during onboarding | [Describe implementation] | [Rating] | [Ref] |
| OTP delivery security | Secure OTP channel (SMS / authenticator app) | [Describe implementation] | [Rating] | [Ref] |
| Credential transmission security | Credentials never transmitted in plaintext | [Describe implementation] | [Rating] | [Ref] |
| Account takeover prevention | Controls to prevent interception during setup | [Describe implementation] | [Rating] | [Ref] |

#### 6.1.3 Fraud Screening at Onboarding

*Assess fraud detection and prevention controls applied during the onboarding flow.*

| Control | Description | Implemented | Rating | Finding Ref |
|---|---|---|---|---|
| Device fingerprinting | Capture and risk-score device attributes | ☐ Yes &emsp; ☐ No | [Rating] | [Ref] |
| IP reputation and geolocation checks | Block or flag high-risk IPs/locations | ☐ Yes &emsp; ☐ No | [Rating] | [Ref] |
| Velocity and duplicate detection | Detect multiple registrations from same device/identity | ☐ Yes &emsp; ☐ No | [Rating] | [Ref] |
| Real-time fraud scoring | ML or rules-based risk score applied at onboarding | ☐ Yes &emsp; ☐ No | [Rating] | [Ref] |
| Sanctions and PEP screening | Automated screening against watchlists | ☐ Yes &emsp; ☐ No | [Rating] | [Ref] |

### 6.2 Authentication Assurance Level

*State the Identity Assurance Level (IAL) and Authenticator Assurance Level (AAL) achieved by the onboarding process, mapped to NIST SP 800-63-3.*

| Dimension | Target Level | Achieved Level | Gaps Identified |
|---|---|---|---|
| Identity Assurance Level (IAL) | IAL[2/3] | IAL[X] | [Describe any gaps] |
| Authenticator Assurance Level (AAL) | AAL[2/3] | AAL[X] | [Describe any gaps] |
| Federation Assurance Level (FAL) | FAL[1/2/3] | FAL[X] | [Describe any gaps] |

---

## 7. Session Management Controls

### 7.1 Session Lifecycle Controls

*Evaluate the security of session establishment, maintenance, and termination within the digital onboarding flow. Effective session management is critical to prevent session hijacking, fixation, and replay attacks during the sensitive onboarding process.*

#### 7.1.1 Session Establishment

| Control | Requirement | Implementation Status | Rating | Finding Ref |
|---|---|---|---|---|
| Secure session token generation | Cryptographically random tokens (min. 128-bit entropy) | [Describe implementation] | [Rating] | [Ref] |
| Token binding | Session bound to device/TLS channel where feasible | [Describe implementation] | [Rating] | [Ref] |
| HTTPS-only cookies | Secure and HttpOnly flags set on session cookies | [Describe implementation] | [Rating] | [Ref] |
| Session fixation prevention | New session token issued post-authentication | [Describe implementation] | [Rating] | [Ref] |
| CSRF protection | Anti-CSRF tokens applied to all state-changing requests | [Describe implementation] | [Rating] | [Ref] |

#### 7.1.2 Session Timeout and Expiry

| Control | Requirement | Configured Value | Compliant | Finding Ref |
|---|---|---|---|---|
| Idle session timeout | Maximum [X] minutes of inactivity | [X] minutes | ☐ Yes &emsp; ☐ No | [Ref] |
| Absolute session expiry | Maximum [X] minutes from session start regardless of activity | [X] minutes | ☐ Yes &emsp; ☐ No | [Ref] |
| Onboarding flow timeout | Onboarding must complete within [X] minutes | [X] minutes | ☐ Yes &emsp; ☐ No | [Ref] |
| OTP / link expiry | One-time links/tokens expire after [X] minutes | [X] minutes | ☐ Yes &emsp; ☐ No | [Ref] |

#### 7.1.3 Session Termination

| Control | Requirement | Implementation Status | Rating | Finding Ref |
|---|---|---|---|---|
| Explicit logout | Users can terminate sessions from all active devices | [Describe implementation] | [Rating] | [Ref] |
| Server-side invalidation | Session invalidated server-side upon logout or expiry | [Describe implementation] | [Rating] | [Ref] |
| Concurrent session controls | Restrictions on simultaneous onboarding sessions | [Describe implementation] | [Rating] | [Ref] |
| Session revocation on anomaly | Sessions revoked automatically on suspicious activity | [Describe implementation] | [Rating] | [Ref] |

### 7.2 Session Monitoring and Logging

*Confirm that session events are captured in audit logs sufficient to support forensic investigation and regulatory reporting.*

| Log Event | Captured | Retention Period | Tamper-Evident | Finding Ref |
|---|---|---|---|---|
| Session initiation | ☐ Yes &emsp; ☐ No | [X] months | ☐ Yes &emsp; ☐ No | [Ref] |
| Authentication events (success/failure) | ☐ Yes &emsp; ☐ No | [X] months | ☐ Yes &emsp; ☐ No | [Ref] |
| Session timeout/expiry events | ☐ Yes &emsp; ☐ No | [X] months | ☐ Yes &emsp; ☐ No | [Ref] |
| Explicit logout events | ☐ Yes &emsp; ☐ No | [X] months | ☐ Yes &emsp; ☐ No | [Ref] |
| Session anomaly/revocation events | ☐ Yes &emsp; ☐ No | [X] months | ☐ Yes &emsp; ☐ No | [Ref] |
| Onboarding completion / abandonment | ☐ Yes &emsp; ☐ No | [X] months | ☐ Yes &emsp; ☐ No | [Ref] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for the preparation, execution, review, and remediation activities associated with this assessment.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Board of Directors | CRO / CIO | CISO | Technology & Operations | Compliance | Business Unit Owner | Internal Audit | External Assessor |
|---|---|---|---|---|---|---|---|---|
| Approve assessment scope and criteria | A | C | R | I | C | I | I | — |
| Conduct technical assessment | I | I | A | R | C | C | I | R/C |
| Review and validate findings | I | A | R | C | C | C | C | R |
| Prepare assessment report | I | C | A | C | C | I | I | R |
| Present findings to Board / Senior Management | A | R | R | I | I | I | I | C |
| Develop and own remediation plans | I | A | C | R | C | R | I | I |
| Monitor remediation progress | I | A | C | R | C | R | R | I |
| Escalate unresolved high-risk findings | A | R | R | I | I | I | C | — |
| Maintain and archive assessment records | I | I | A | C | R | I | I | I |
| Trigger next scheduled assessment | I | I | A | C | C | I | I | — |

---

## 9. Review and Approval

### 9.1 Version History

*Record all versions of this document, including amendments and the rationale for changes.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name / Title] | [Reviewer Name / Title] | Initial document — first issuance |
| [1.1] | [DD/MM/YYYY] | [Author Name / Title] | [Reviewer Name / Title] | [Describe changes made] |
| [X.X] | [DD/MM/YYYY] | [Author Name / Title] | [Reviewer Name / Title] | [Describe changes made] |

### 9.2 Approval Sign-Off

*This assessment must be approved by the following signatories prior to submission to the Board of Directors.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Full Name] | __________________ | [DD/MM/YYYY] |
| Chief Risk Officer (CRO) | [Full Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Officer (CIO) | [Full Name] | __________________ | [DD/MM/YYYY] |
| Head of Compliance | [Full Name] | __________________ | [DD/MM/YYYY] |
| Board Representative / Company Secretary | [Full Name] | __________________ | [DD/MM/YYYY] |

### 9.3 Distribution List

*Identify the parties to whom this document is distributed upon approval.*

| Recipient | Role | Copy Type |
|---|---|---|
| Board of Directors | Governance | Full Report |
| [Name / Title] | Audit Committee | Full Report |
| [Name / Title] | Senior Management | Full Report |
| [Name / Title] | Internal Audit | Full Report |
| [Name / Title] | Technology & Operations | Full Report |
| [Name / Title] | Compliance | Full Report |

> **Handling Instruction:** This document is classified **Confidential**. It must not be reproduced, distributed, or disclosed to external parties without the prior written approval of the [Organization Name] Board of Directors or Company Secretary.

---

## 10. References

The following regulatory instruments, standards, and internal policies are referenced in this assessment:

### 10.1 Regulatory References

| Reference | Title | Clause / Section | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Clause 12.8 | Digital channel and onboarding security requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10 | Technology risk governance and monitoring |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11 | Third-party technology risk management |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 9 | Security of personal data collected during onboarding |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 6 | General principles for processing customer data |
| BNM eKYC | Electronic Know-Your-Customer Policy Document | All | eKYC requirements for digital onboarding |
| NACSA | National Cyber Security Agency — Cybersecurity Framework | All | Cybersecurity baseline controls |

### 10.2 Industry Standards

| Reference | Title | Version / Edition |
|---|---|---|
| NIST SP 800-63-3 | Digital Identity Guidelines | Rev. 3 |
| OWASP MSTG | Mobile Security Testing Guide | [Current Version] |
| OWASP ASVS | Application Security Verification Standard | v[X.X] |
| ISO/IEC 27001 | Information Security Management Systems | 2022 |
| ISO/IEC 29115 | Entity Authentication Assurance Framework | 2013 |

### 10.3 Internal References

| Document | Version | Owner |
|---|---|---|
| [Organization Name] Information Security Policy | v[X.X] | CISO |
| [Organization Name] Technology Risk Management Framework | v[X.X] | CRO / CIO |
| [Organization Name] Digital Banking Policy | v[X.X] | [Business Owner] |
| [Organization Name] Customer Data Protection Policy | v[X.X] | Compliance |
| [Organization Name] Incident Response Plan | v[X.X] | CISO |
| [Organization Name] Third-Party Risk Management Policy | v[X.X] | CRO |

---

## 11. Appendices

### Appendix A — Onboarding Channel Architecture Diagram

*Insert a network and application architecture diagram illustrating the digital onboarding channel components, data flows, security boundaries, and integration points. The diagram should clearly identify: (1) customer-facing entry points, (2) API gateways and WAF layers, (3) eKYC and identity verification integrations, (4) core banking connectivity, and (5) logging and monitoring infrastructure.*

> **[Insert Architecture Diagram Here]**
>
> *Figure A.1 — [Organization Name] Digital Onboarding Security Architecture (as at [Date])*

---

### Appendix B — Assessment Evidence Register

*List all evidence artefacts collected during this assessment. Retain physical or electronic copies in accordance with the institution's records retention policy.*

| Ref | Evidence Artefact | Source | Date Obtained | Retained By |
|---|---|---|---|---|
| EVD-001 | [e.g., eKYC System Architecture Diagram v2.3] | Technology & Operations | [Date] | [Name / Team] |
| EVD-002 | [e.g., API Gateway Configuration Export] | Technology & Operations | [Date] | [Name / Team] |
| EVD-003 | [e.g., Penetration Test Report — Mobile App] | [External Assessor Name] | [Date] | [Name / Team] |
| EVD-004 | [e.g., TLS Configuration Scan Results] | [Tool Name] | [Date] | [Name / Team] |
| EVD-005 | [e.g., Staff Interview Notes — Authentication Controls] | Assessment Lead | [Date] | [Name / Team] |
| EVD-006 | [e.g., Third-Party Vendor SOC 2 Type II Report] | [Vendor Name] | [Date] | [Name / Team] |

---

### Appendix C — Remediation Tracker

*Track the status of all remediation actions arising from this assessment. This tracker should be updated monthly and presented to senior management at each review cycle.*

| Finding ID | Risk Rating | Remediation Action | Responsible Owner | Target Date | Completion Date | Status | Evidence of Closure |
|---|---|---|---|---|---|---|---|
| OSA-[YYYY]-001 | [High/Medium/Low] | [Describe action] | [Owner] | [DD/MM/YYYY] | [DD/MM/YYYY or —] | Open / In Progress / Closed | [Reference] |
| OSA-[YYYY]-002 | [High/Medium/Low] | [Describe action] | [Owner] | [DD/MM/YYYY] | [DD/MM/YYYY or —] | Open / In Progress / Closed | [Reference] |
| OSA-[YYYY]-003 | [High/Medium/Low] | [Describe action] | [Owner] | [DD/MM/YYYY] | [DD/MM/YYYY or —] | Open / In Progress / Closed | [Reference] |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and primary financial services regulator of Malaysia |
| **eKYC** | Electronic Know-Your-Customer — digital identity verification process used during onboarding |
| **IAL** | Identity Assurance Level — a measure of confidence in the claimed identity of a user (NIST SP 800-63-3) |
| **AAL** | Authenticator Assurance Level — a measure of strength of the authentication mechanism (NIST SP 800-63-3) |
| **MFA** | Multi-Factor Authentication — authentication requiring two or more distinct factors |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **OTP** | One-Time Password — a single-use authentication code |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk for financial institutions |
| **WAF** | Web Application Firewall — a security control filtering HTTP traffic between a web application and the internet |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **DAST** | Dynamic Application Security Testing — testing technique that analyses a running application for vulnerabilities |
| **MSTG** | Mobile Security Testing Guide — OWASP standard for mobile application security testing |

---

### Appendix E — Prior Assessment Findings Summary

*Summarise the findings from the immediately preceding assessment to facilitate trend analysis and repeat-finding identification.*

| Prior Finding ID | Assessment Date | Risk Rating | Description | Remediation Status at Current Assessment |
|---|---|---|---|---|
| OSA-[YYYY]-001 | [DD/MM/YYYY] | [Rating] | [Description] | Closed / Open / Repeat Finding |
| OSA-[YYYY]-002 | [DD/MM/YYYY] | [Rating] | [Description] | Closed / Open / Repeat Finding |
| OSA-[YYYY]-003 | [DD/MM/YYYY] | [Rating] | [Description] | Closed / Open / Repeat Finding |

---

*End of Document*

---

**Document Control:** This document is subject to [Organization Name]'s document management policy. The master copy is maintained by the Company Secretary. Printed copies are uncontrolled and valid only on the date of printing.