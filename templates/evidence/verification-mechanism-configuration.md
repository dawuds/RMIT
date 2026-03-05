# Verification Mechanism Configuration

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head], [Department Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Prepared By:** [Preparer Name], [Title]
**Document Status:** [Draft / Under Review / Approved]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology Used](#3-methodology-used)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Evidence Reviewed](#5-evidence-reviewed)
6. [Recommendations](#6-recommendations)
7. [Sign-off and Approval](#7-sign-off-and-approval)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval History](#9-review-and-approval-history)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

*This section defines the intent of this document and the boundaries within which the verification mechanism configuration applies.*

### 1.1 Purpose

This document records the configuration, assessment, and evidence of independent channel transaction verification mechanisms implemented at [Organization Name] in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.5**, which requires financial institutions to establish robust controls for authenticating and verifying transactions through independent channels to protect customers and the institution from fraud and unauthorized access.

This document serves as an evidence artifact demonstrating that [Organization Name] has appropriately designed, configured, and validated its transaction verification controls as required by the RMiT framework.

### 1.2 Scope

This document applies to:

- All transaction channels subject to independent verification requirements, including but not limited to:
  - Internet banking and mobile banking platforms
  - ATM and self-service terminal networks
  - Telephone banking and interactive voice response (IVR) systems
  - API-based third-party integrations and Open Banking channels
  - Over-the-counter (OTC) and branch-assisted transactions
- All transaction types meeting or exceeding defined risk thresholds: [specify transaction types, e.g., high-value transfers, beneficiary additions, credential changes]
- All systems, applications, and infrastructure components that form part of the verification mechanism
- All customer segments: [e.g., Retail, SME, Corporate]

**Out of Scope:**

- [Explicitly list any systems, channels, or transaction types excluded and the rationale]
- [e.g., Internal interbank transfers below RM [X] processed via [System Name]]

### 1.3 Regulatory Context

This artifact is **mandatory** under the BNM RMiT framework and must be maintained with evidence of configuration reviews conducted **per-event** (following any significant change to verification mechanisms) or **at minimum quarterly**. Non-compliance may result in regulatory findings during BNM Technology Risk examinations or supervisory assessments.

---

## 2. Assessment Scope and Criteria

*This section defines what was assessed, the standards applied, and the criteria used to evaluate the adequacy of verification mechanism configurations.*

### 2.1 Assessment Overview

| Field | Details |
|---|---|
| **Assessment Reference** | [Assessment ID / Reference Number] |
| **Assessment Type** | [Per-Event Change / Quarterly Review / Annual Review] |
| **Triggering Event (if applicable)** | [Describe the change or event that triggered this review, or "Scheduled Quarterly Review"] |
| **Assessment Period** | [Start Date] to [End Date] |
| **Lead Assessor** | [Name], [Title] |
| **Assessment Date** | [Date] |

### 2.2 Channels and Systems in Scope

| # | Channel / System | System Owner | Version / Build | Included in Assessment |
|---|---|---|---|---|
| 1 | [e.g., Mobile Banking Application (iOS/Android)] | [Owner Name] | [v. X.X.X] | Yes / No |
| 2 | [e.g., Internet Banking Portal] | [Owner Name] | [v. X.X.X] | Yes / No |
| 3 | [e.g., ATM Network] | [Owner Name] | [Version] | Yes / No |
| 4 | [e.g., Telephone Banking / IVR] | [Owner Name] | [Version] | Yes / No |
| 5 | [Add rows as needed] | | | |

### 2.3 Assessment Criteria

*List the specific standards, benchmarks, and regulatory requirements used to evaluate the configuration. Each criterion should be traceable to a regulatory clause or internal policy.*

The following criteria were applied in this assessment:

| # | Criterion | Source | Requirement |
|---|---|---|---|
| 1 | Independent channel for OTP delivery | BNM RMiT Clause 12.5 | OTP must be delivered via a channel independent of the transaction initiation channel |
| 2 | OTP validity window | BNM RMiT Clause 12.5 / [Internal Policy Ref] | OTP must expire within [X] minutes of generation |
| 3 | OTP length and complexity | [Internal Policy Ref] / [NIST / ISO 27001 reference] | Minimum [6]-digit numeric or [alphanumeric] OTP |
| 4 | Maximum OTP retry attempts | BNM RMiT Clause 12.5 / [Internal Policy Ref] | Account lockout after [X] consecutive failed attempts |
| 5 | Transaction value thresholds requiring verification | [Internal Policy Ref] | All transactions above RM [X,XXX] require independent verification |
| 6 | Secure transmission of verification codes | [Internal Policy Ref] / [ISO 27001 A.10] | All verification codes must be transmitted over encrypted channels (TLS 1.2 minimum) |
| 7 | Audit logging of verification events | BNM RMiT Clause 12.5 / [Internal Policy Ref] | All verification attempts (success and failure) must be logged with timestamp, user ID, channel, and outcome |
| 8 | [Add further criteria as applicable] | | |

---

## 3. Methodology Used

*Describe the approach, tools, and techniques employed to assess the configuration of verification mechanisms.*

### 3.1 Assessment Approach

The assessment was conducted using the following methodology:

- **Configuration Review:** Direct inspection of system configuration files, administration consoles, and parameter settings for each in-scope channel to validate alignment with defined criteria.
- **Technical Testing:** [Describe testing performed, e.g., functional testing of OTP generation and expiry, penetration testing of authentication flows, replay attack simulation]
- **Document and Policy Review:** Review of relevant internal policies, procedures, and prior assessment reports to assess completeness and currency of controls.
- **Interviews:** Structured interviews conducted with [System Owners / Technology Risk Officers / Operations Staff] to validate operational configurations and identify undocumented deviations.
- **Log Analysis:** Analysis of verification event logs for the period [Start Date] to [End Date] to identify anomalies, failures, or bypass attempts.

### 3.2 Tools and Resources

| Tool / Resource | Purpose | Version / Reference |
|---|---|---|
| [e.g., [System Name] Admin Console] | Configuration parameter review | [Version] |
| [e.g., Burp Suite / OWASP ZAP] | Authentication flow testing | [Version] |
| [e.g., SIEM / Log Management Platform] | Verification event log analysis | [Version] |
| [e.g., Internal Vulnerability Scanner] | TLS/encryption validation | [Version] |
| [Add further tools as applicable] | | |

### 3.3 Sampling Approach

*Where full population review was not feasible, describe the sampling rationale.*

- [e.g., Log review covered a random sample of [X]% of verification events for the assessment period, stratified by channel and transaction type.]
- [e.g., Configuration review was conducted on [X] of [Y] production instances; sampling rationale: [describe rationale]]

---

## 4. Findings and Ratings

*Document all findings from the assessment, including both compliant configurations and identified gaps or weaknesses.*

### 4.1 Overall Assessment Rating

| Overall Rating | [Satisfactory / Requires Improvement / Unsatisfactory] |
|---|---|
| **Rating Rationale** | [Provide a concise narrative justifying the overall rating based on the findings below] |
| **Number of Findings** | Critical: [X] \| High: [X] \| Medium: [X] \| Low: [X] \| Informational: [X] |

**Rating Scale:**

| Rating | Description |
|---|---|
| **Satisfactory** | All critical and high-risk criteria met; minor gaps identified with low residual risk |
| **Requires Improvement** | Material gaps identified in one or more criteria; remediation required within defined timeframe |
| **Unsatisfactory** | Critical gaps identified that expose the institution or customers to significant risk; immediate remediation required |

### 4.2 Detailed Findings

| Finding ID | Channel / System | Criterion Assessed | Observation | Risk Rating | Status |
|---|---|---|---|---|---|
| F-001 | [Channel / System] | [Criterion from Section 2.3] | [Detailed description of what was observed — compliant or non-compliant] | Critical / High / Medium / Low | Open / Closed / In Progress |
| F-002 | [Channel / System] | [Criterion] | [Observation] | [Rating] | [Status] |
| F-003 | [Channel / System] | [Criterion] | [Observation] | [Rating] | [Status] |
| [Add rows as needed] | | | | | |

### 4.3 Configuration Parameters Summary

*Record the actual configuration values observed for each in-scope system against required settings.*

| Parameter | Required Value | [Channel 1] Actual | [Channel 2] Actual | Compliant |
|---|---|---|---|---|
| OTP Validity (minutes) | ≤ [X] minutes | [Observed value] | [Observed value] | Yes / No |
| OTP Length | ≥ [X] digits | [Observed value] | [Observed value] | Yes / No |
| Max Failed Attempts (lockout) | ≤ [X] attempts | [Observed value] | [Observed value] | Yes / No |
| OTP Delivery Channel Independence | Independent channel required | [Observed channel] | [Observed channel] | Yes / No |
| TLS Version (minimum) | TLS 1.2 | [Observed value] | [Observed value] | Yes / No |
| Audit Logging Enabled | Yes | [Yes / No] | [Yes / No] | Yes / No |
| [Add parameters as applicable] | | | | |

---

## 5. Evidence Reviewed

*List all documentation, logs, configuration artefacts, and other evidence reviewed to support the findings in this document.*

### 5.1 Documentation Evidence

| # | Document Title | Document Reference | Version / Date | Source |
|---|---|---|---|---|
| 1 | [e.g., Authentication and Verification Policy] | [Ref No.] | [Version / Date] | [Department / System] |
| 2 | [e.g., Mobile Banking Security Configuration Guide] | [Ref No.] | [Version / Date] | [Department / System] |
| 3 | [e.g., Internet Banking Platform Architecture Document] | [Ref No.] | [Version / Date] | [Department / System] |
| 4 | [e.g., Previous Verification Mechanism Configuration Review] | [Ref No.] | [Version / Date] | [Department / System] |
| 5 | [Add rows as needed] | | | |

### 5.2 Technical Evidence

| # | Evidence Type | Description | Date Obtained | Obtained From |
|---|---|---|---|---|
| 1 | Configuration Screenshot / Export | [e.g., OTP parameter settings — Mobile Banking Admin Console] | [Date] | [System / Person] |
| 2 | System Log Extract | [e.g., Authentication event log extract — [Date Range]] | [Date] | [System / Person] |
| 3 | Network Scan / TLS Report | [e.g., TLS configuration scan results — Internet Banking Portal] | [Date] | [System / Person] |
| 4 | Test Evidence | [e.g., OTP expiry functional test results] | [Date] | [System / Person] |
| 5 | [Add rows as needed] | | | |

### 5.3 Interview Records

| # | Interviewee Name | Title / Role | Date | Topics Covered |
|---|---|---|---|---|
| 1 | [Name] | [Title] | [Date] | [Summary of topics] |
| 2 | [Name] | [Title] | [Date] | [Summary of topics] |
| 3 | [Add rows as needed] | | | |

*All evidence artefacts are retained in [specify evidence repository, e.g., SharePoint / Document Management System] under reference [Repository Path / Reference].*

---

## 6. Recommendations

*Provide actionable recommendations to address identified gaps and further strengthen verification mechanism configurations.*

### 6.1 Summary of Recommendations

| Rec. ID | Finding Reference | Recommendation | Priority | Responsible Owner | Target Completion Date | Status |
|---|---|---|---|---|---|---|
| R-001 | F-001 | [Clear, actionable recommendation to remediate the finding] | Critical / High / Medium / Low | [Owner Name / Team] | [Date] | Open / In Progress / Closed |
| R-002 | F-002 | [Recommendation] | [Priority] | [Owner] | [Date] | [Status] |
| R-003 | N/A | [Enhancement recommendation not tied to a specific finding] | [Priority] | [Owner] | [Date] | [Status] |
| [Add rows as needed] | | | | | | |

### 6.2 Detailed Recommendations

#### Recommendation R-001: [Short Title]

**Finding Reference:** F-001
**Priority:** [Critical / High / Medium / Low]
**Responsible Owner:** [Name / Team]
**Target Completion Date:** [Date]

**Background:**
[Brief description of the issue or gap being addressed.]

**Recommended Action:**
[Detailed description of the recommended remediation steps, including specific configuration changes, process improvements, or additional controls to be implemented.]

**Expected Outcome:**
[Describe the expected improvement in control effectiveness or risk reduction upon implementation.]

**Acceptance Criteria:**
- [Define measurable criteria that will confirm the recommendation has been successfully implemented]
- [e.g., OTP validity window reduced to ≤ [X] minutes across all channels by [Date]]

---

#### Recommendation R-002: [Short Title]

*[Repeat structure above for each recommendation]*

---

## 7. Sign-off and Approval

*This section captures formal acknowledgement and approval of the assessment findings and recommendations by accountable stakeholders.*

### 7.1 Preparer Declaration

I confirm that this Verification Mechanism Configuration review has been conducted in accordance with the applicable methodology and that the findings, evidence, and recommendations documented herein are accurate and complete to the best of my knowledge.

| Role | Name | Signature | Date |
|---|---|---|---|
| Lead Assessor | [Name] | [Signature] | [Date] |
| Co-Assessor (if applicable) | [Name] | [Signature] | [Date] |

### 7.2 Management Acknowledgement

I acknowledge the findings and recommendations of this assessment and commit to implementing the approved remediation actions within the agreed timelines.

| Role | Name | Signature | Date |
|---|---|---|---|
| [Relevant Department Head] | [Name] | [Signature] | [Date] |
| Head of Technology Risk / CISO | [Name] | [Signature] | [Date] |
| Chief Information Officer (CIO) | [Name] | [Signature] | [Date] |

### 7.3 Regulatory Attestation

This document serves as evidence of [Organization Name]'s compliance with BNM RMiT Clause 12.5 requirements for independent channel transaction verification mechanisms as at the review date stated above.

| Attesting Officer | [Name], [Title] |
|---|---|
| **Attestation Date** | [Date] |
| **Next Scheduled Review** | [Date] |

---

## 8. Roles and Responsibilities

*Defines accountability for the maintenance, execution, and oversight of verification mechanism configuration reviews.*

### 8.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | [Relevant Dept Head] | Technology Risk / CISO | IT / System Owner | Internal Audit | Compliance | Risk Management |
|---|---|---|---|---|---|---|
| Define assessment scope and criteria | C | A/R | C | I | C | I |
| Execute technical configuration review | I | R | R | I | I | I |
| Document findings and evidence | I | R | C | I | I | I |
| Develop recommendations | C | R | C | I | C | I |
| Approve findings and recommendations | A | R | C | I | I | C |
| Implement remediation actions | I | C | A/R | I | I | I |
| Verify remediation effectiveness | I | R | C | C | I | I |
| Maintain evidence artefacts | I | R | C | I | I | I |
| Submit to BNM (if required) | A | C | I | I | R | C |
| Escalate critical findings | A | R | C | C | C | C |

### 8.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Document Owner | [Name] | [Department] | [Email / Phone] |
| Lead Assessor | [Name] | [Department] | [Email / Phone] |
| Technology Risk Coordinator | [Name] | [Department] | [Email / Phone] |
| System Owner — [Channel 1] | [Name] | [Department] | [Email / Phone] |
| System Owner — [Channel 2] | [Name] | [Department] | [Email / Phone] |

---

## 9. Review and Approval History

### 9.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Describe changes] |
| [2.0] | [Date] | [Author Name] | [Describe major revision] |

### 9.2 Review Schedule

| Review Type | Trigger | Frequency | Next Due Date |
|---|---|---|---|
| Per-Event Review | Significant change to any in-scope verification mechanism | Upon each qualifying change | [Date of next known change / Ongoing] |
| Scheduled Review | Calendar-based | Quarterly | [Date] |
| Ad-hoc Review | Incident, regulatory direction, or material risk event | As required | N/A |

---

## 10. References

The following regulatory documents, standards, and internal policies are referenced in or applicable to this artifact:

### 10.1 Regulatory References

| # | Document | Issuing Authority | Clause / Section | Relevance |
|---|---|---|---|---|
| 1 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 12.5 | Primary regulatory requirement for independent channel transaction verification |
| 2 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | [Other relevant clauses, e.g., 10.x, 11.x] | [Describe relevance] |
| 3 | Guidelines on Management of Cyber Risk | Bank Negara Malaysia (BNM) | [Relevant section] | [Describe relevance] |
| 4 | [Personal Data Protection Act 2010 (PDPA)] | Government of Malaysia | [Relevant section] | [Describe relevance, if applicable] |
| 5 | [NACSA Guidelines / Standards] | NACSA | [Relevant section] | [Describe relevance, if applicable] |

### 10.2 Internal Policy References

| # | Document Title | Internal Reference | Version |
|---|---|---|---|
| 1 | [Authentication and Access Control Policy] | [Ref No.] | [Version] |
| 2 | [Technology Risk Management Policy] | [Ref No.] | [Version] |
| 3 | [Information Security Policy] | [Ref No.] | [Version] |
| 4 | [Fraud Risk Management Policy] | [Ref No.] | [Version] |
| 5 | [Add further internal references as applicable] | | |

### 10.3 Standards and Frameworks

| # | Standard / Framework | Relevant Section | Relevance |
|---|---|---|---|
| 1 | ISO/IEC 27001:2022 | A.8 (Technological Controls) | Information security controls for authentication |
| 2 | NIST SP 800-63B | Section 5 (Authenticator and Verifier Requirements) | Authentication strength and OTP requirements |
| 3 | OWASP Authentication Cheat Sheet | All | Technical guidance on secure authentication configuration |
| 4 | [Add further standards as applicable] | | |

---

## 11. Appendices

### Appendix A: Configuration Parameter Evidence Screenshots

*Attach or reference screenshots, configuration exports, or system-generated reports that document the actual parameter values observed during the assessment for each in-scope channel.*

| Appendix Ref | Channel / System | Description | Location / Attachment |
|---|---|---|---|
| A-01 | [Channel Name] | Admin console screenshot — OTP configuration parameters | [Attachment / Path] |
| A-02 | [Channel Name] | Admin console screenshot — lockout policy settings | [Attachment / Path] |
| A-03 | [Channel Name] | TLS scan report | [Attachment / Path] |
| [Add rows as needed] | | | |

---

### Appendix B: Verification Event Log Extracts

*Attach representative log extracts demonstrating that verification events are being correctly recorded. Redact any personally identifiable information (PII) in accordance with PDPA requirements prior to inclusion.*

| Appendix Ref | Log Source | Date Range | Events Included | Location / Attachment |
|---|---|---|---|---|
| B-01 | [System / SIEM Name] | [Date Range] | Successful verification events | [Attachment / Path] |
| B-02 | [System / SIEM Name] | [Date Range] | Failed verification attempts and lockout events | [Attachment / Path] |
| [Add rows as needed] | | | | |

---

### Appendix C: Test Evidence

*Attach functional test results, penetration test excerpts, or other technical test evidence supporting the assessment findings.*

| Appendix Ref | Test Type | Description | Tester | Date | Location / Attachment |
|---|---|---|---|---|---|
| C-01 | Functional Test | OTP expiry validation — [Channel Name] | [Tester Name] | [Date] | [Attachment / Path] |
| C-02 | Functional Test | Account lockout after [X] failed attempts | [Tester Name] | [Date] | [Attachment / Path] |
| C-03 | [Penetration Test / VAPT] | Authentication flow security testing | [Tester / Firm Name] | [Date] | [Attachment / Path] |
| [Add rows as needed] | | | | | |

---

### Appendix D: Remediation Tracking Log

*This appendix provides an ongoing tracking record for all open recommendations from this and prior assessment cycles.*

| Rec. ID | Source Assessment | Recommendation Summary | Owner | Target Date | Last Update | Status |
|---|---|---|---|---|---|---|
| R-001 | [Assessment Ref] | [Summary] | [Owner] | [Date] | [Date / Notes] | Open / In Progress / Closed |
| [Add rows as needed] | | | | | | |

---

### Appendix E: Glossary

| Term | Definition |
|---|---|
| Independent Channel | A communication channel used for transaction verification that is separate and distinct from the channel used to initiate the transaction |
| OTP | One-Time Password — a single-use authentication code with a defined validity period |
| MFA | Multi-Factor Authentication — authentication requiring two or more independent factors |
| RMiT | Risk Management in Technology — BNM Policy Document governing technology risk management for financial institutions |
| RACI | Responsible, Accountable, Consulted, Informed — a framework for defining roles in a process |
| TLS | Transport Layer Security — cryptographic protocol for secure communications |
| VAPT | Vulnerability Assessment and Penetration Testing |
| [Add terms as needed] | |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. For queries regarding this document, contact [Document Owner Name] at [Contact Details].*

---
*Document ID: [Document ID] | Version: 1.0 | Last Updated: [Last Review Date]*