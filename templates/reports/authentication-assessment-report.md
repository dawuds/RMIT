# Authentication Assessment Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It contains sensitive information relating to authentication controls and security posture. Access is restricted to authorized personnel only. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Assessment Scope and Criteria](#3-assessment-scope-and-criteria)
4. [Methodology](#4-methodology)
5. [Findings and Ratings](#5-findings-and-ratings)
6. [Evidence Reviewed](#6-evidence-reviewed)
7. [Recommendations](#7-recommendations)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Executive Summary

*Provide a high-level summary of the assessment outcomes, overall authentication health rating, and the most critical findings requiring immediate attention. This section should be readable by senior management without reference to subsequent sections.*

| Field | Details |
|---|---|
| **Assessment Period** | [Assessment Start Date] to [Assessment End Date] |
| **Assessment Reference** | [Assessment Reference Number] |
| **Prepared By** | [Assessor Name], [Title] |
| **Assessment Type** | ☐ Scheduled Quarterly Review &nbsp;&nbsp; ☐ Triggered Review &nbsp;&nbsp; ☐ Post-Incident Review |
| **Overall Rating** | ☐ Satisfactory &nbsp;&nbsp; ☐ Requires Improvement &nbsp;&nbsp; ☐ Unsatisfactory |

**Summary Narrative:**

[Provide 2–3 paragraphs summarizing: (1) the purpose and context of this assessment, (2) the overall effectiveness rating of customer authentication mechanisms, and (3) the most significant findings and agreed remediation timelines.]

**Critical Findings at a Glance:**

| # | Finding | Severity | Target Remediation Date |
|---|---|---|---|
| 1 | [Finding Title] | ☐ Critical ☐ High ☐ Medium ☐ Low | [Date] |
| 2 | [Finding Title] | ☐ Critical ☐ High ☐ Medium ☐ Low | [Date] |
| 3 | [Finding Title] | ☐ Critical ☐ High ☐ Medium ☐ Low | [Date] |

---

## 2. Purpose and Scope

### 2.1 Purpose

This Authentication Assessment Report documents the findings of a formal assessment of [Organization Name]'s customer authentication mechanisms conducted in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 12.4** governing customer authentication controls.

The purpose of this assessment is to:

- Evaluate the design adequacy and operational effectiveness of authentication controls applied to customer-facing systems and channels.
- Identify control gaps, weaknesses, or deviations from regulatory requirements and internal policy.
- Provide evidence of ongoing compliance monitoring to support regulatory reporting obligations.
- Recommend actionable improvements to strengthen the authentication control environment.

### 2.2 Regulatory Context

*This section maps the assessment to its governing regulatory obligations. Ensure all referenced clauses are verified against the current version of BNM RMiT in force at the time of assessment.*

This assessment is conducted in fulfilment of the following regulatory obligations:

| Regulatory Instrument | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 12.4 | Financial institutions must implement and periodically assess the effectiveness of customer authentication mechanisms to mitigate unauthorized access risks. |
| BNM Risk Management in Technology (RMiT) | [Additional Clause] | [Requirement Summary] |
| Personal Data Protection Act 2010 (PDPA) | [Relevant Section] | [Requirement Summary] |
| [Other Applicable Regulation] | [Clause] | [Requirement Summary] |

### 2.3 Scope Boundary

*Define the precise boundary of what is included and excluded from this assessment to avoid ambiguity during audit review.*

**In Scope:**

- All customer-facing digital channels offered by [Organization Name], including but not limited to:
  - Internet banking portal ([System Name])
  - Mobile banking application ([Application Name / Version])
  - [Other Channel, e.g., ATM, IVR, API-based services]
- Authentication mechanisms applied at all customer touchpoints (enrollment, login, step-up, transaction authorization, and session management).
- Third-party authentication service providers and federated identity arrangements in use during the assessment period.

**Out of Scope:**

- Internal employee authentication systems (covered under a separate assessment).
- [Any explicitly excluded system or channel, with justification].

---

## 3. Assessment Scope and Criteria

### 3.1 Systems and Channels Assessed

*List all systems, applications, and channels included in this assessment. Each entry should be traceable to an asset in the organization's technology asset register.*

| # | System / Channel | Asset ID | Technology / Platform | Authentication Method(s) | Environment |
|---|---|---|---|---|---|
| 1 | [Internet Banking Portal] | [Asset ID] | [e.g., Web — Apache Tomcat] | [e.g., Password + SMS OTP] | Production |
| 2 | [Mobile Banking App — iOS] | [Asset ID] | [e.g., iOS 16+] | [e.g., Biometric + PIN] | Production |
| 3 | [Mobile Banking App — Android] | [Asset ID] | [e.g., Android 12+] | [e.g., Biometric + PIN] | Production |
| 4 | [API Gateway / Open Banking] | [Asset ID] | [e.g., Kong Gateway] | [e.g., OAuth 2.0 + PKCE] | Production |
| 5 | [Other Channel] | [Asset ID] | [Platform] | [Method] | [Environment] |

### 3.2 Assessment Criteria

*Define the specific criteria and standards against which each authentication mechanism was evaluated. Criteria should be pre-agreed and documented before assessment fieldwork begins.*

Authentication mechanisms were assessed against the following criteria:

#### 3.2.1 Regulatory Compliance Criteria

| Criterion ID | Criterion Description | Regulatory Reference |
|---|---|---|
| RC-01 | Multi-factor authentication (MFA) is enforced for all high-risk customer transactions. | BNM RMiT Clause 12.4 |
| RC-02 | Authentication factors span at least two distinct categories (knowledge, possession, inherence). | BNM RMiT Clause 12.4 |
| RC-03 | Step-up authentication is triggered for transactions above defined monetary thresholds. | BNM RMiT Clause 12.4 |
| RC-04 | Out-of-band authentication channels are used for transaction authorization where applicable. | BNM RMiT Clause 12.4 |
| RC-05 | [Additional Criterion] | [Reference] |

#### 3.2.2 Control Effectiveness Criteria

| Criterion ID | Criterion Description | Internal Policy Reference |
|---|---|---|
| CE-01 | Authentication policies are documented, approved, and current. | [Internal Policy Reference] |
| CE-02 | Account lockout controls are configured in accordance with approved thresholds. | [Internal Policy Reference] |
| CE-03 | Session timeout controls are enforced consistently across all channels. | [Internal Policy Reference] |
| CE-04 | Authentication events are logged and subject to security monitoring. | [Internal Policy Reference] |
| CE-05 | Enrollment and recovery processes apply equivalent authentication rigor. | [Internal Policy Reference] |
| CE-06 | [Additional Criterion] | [Reference] |

#### 3.2.3 Rating Scale

| Rating | Definition |
|---|---|
| **Satisfactory** | Controls are well-designed and operating effectively. No material gaps identified. |
| **Requires Improvement** | Controls are generally in place but have identified weaknesses that must be addressed within an agreed timeframe. |
| **Unsatisfactory** | Significant control gaps exist. Immediate remediation action is required. |

---

## 4. Methodology

### 4.1 Assessment Approach

*Describe the overall methodology used to conduct this assessment. The methodology should be repeatable, evidence-based, and defensible to an external auditor.*

This assessment was conducted using a combination of the following techniques:

- **Documentation Review:** Examination of policy documents, standards, configuration baselines, and procedure manuals governing customer authentication.
- **Technical Configuration Review:** Direct inspection of authentication system configurations against approved security baselines and hardening standards.
- **Walkthrough and Demonstration:** Facilitated walkthroughs with system owners to observe authentication flows end-to-end across in-scope channels.
- **Log and Data Analysis:** Analysis of authentication event logs, failed login statistics, lockout events, and anomaly alerts over the assessment period.
- **Interview:** Structured interviews with key personnel responsible for IAM operations, application development, and fraud risk management.
- **Testing:** [Where applicable, describe any controlled testing performed, e.g., simulated authentication attempts, MFA bypass testing in a non-production environment.]

### 4.2 Assessment Team

| Role | Name | Organization / Department | Involvement |
|---|---|---|---|
| Lead Assessor | [Name] | [Department / External Firm] | Overall assessment direction and reporting |
| Technical Assessor | [Name] | [Department] | Configuration review and log analysis |
| IAM Subject Matter Expert | [Name] | [Department] | Authentication architecture input |
| [Additional Role] | [Name] | [Department] | [Involvement] |

### 4.3 Assessment Timeline

| Phase | Activity | Dates | Status |
|---|---|---|---|
| Planning | Scope confirmation, criteria finalization, evidence requests issued | [Date Range] | ☐ Complete |
| Fieldwork | Document review, interviews, configuration inspection, testing | [Date Range] | ☐ Complete |
| Analysis | Findings consolidation, draft report preparation | [Date Range] | ☐ Complete |
| Validation | Draft findings shared with stakeholders for factual accuracy | [Date Range] | ☐ Complete |
| Reporting | Final report issued | [Date] | ☐ Complete |

### 4.4 Limitations and Constraints

*Document any constraints that may have limited the depth or coverage of the assessment. This protects the assessment team and provides context for readers interpreting findings.*

The following limitations applied to this assessment:

- [e.g., Access to production log systems was read-only; no live transaction testing was performed in the production environment.]
- [e.g., Assessment of the [System Name] channel was deferred due to a concurrent system upgrade; a supplementary review will be scheduled by [Date].]
- [e.g., Third-party vendor [Vendor Name] did not provide access to internal configuration documentation; assessment relied on contractual representations and available API-level testing.]

---

## 5. Findings and Ratings

### 5.1 Summary of Findings

*This section presents all findings identified during the assessment. Each finding must be clearly described, rated, and linked to specific evidence. Ratings must be assigned consistently with the scale defined in Section 3.2.3.*

| Finding ID | Finding Title | Affected System(s) | Severity | Criterion Reference | Status |
|---|---|---|---|---|---|
| F-001 | [Finding Title] | [System Name] | Critical | RC-01 | Open |
| F-002 | [Finding Title] | [System Name] | High | CE-02 | Open |
| F-003 | [Finding Title] | [System Name] | Medium | CE-03 | Open |
| F-004 | [Finding Title] | [System Name] | Low | CE-05 | Open |
| F-005 | [Finding Title] | [System Name] | [Severity] | [Criterion] | [Status] |

### 5.2 Detailed Findings

*For each finding identified, complete a finding detail block as follows. Copy this block for each finding.*

---

#### Finding F-001: [Finding Title]

| Field | Detail |
|---|---|
| **Finding ID** | F-001 |
| **Severity** | [Critical / High / Medium / Low] |
| **Affected System(s)** | [System Name(s)] |
| **Criterion Reference** | [RC-01 / CE-02 / etc.] |
| **Regulatory Reference** | BNM RMiT Clause 12.4 |

**Condition (What was found):**

[Describe precisely what was observed or identified. Be factual and objective. Reference specific configurations, logs, or documentation as appropriate.]

**Criteria (What should be in place):**

[State the expected control, policy requirement, or regulatory standard that is not being met.]

**Cause (Why it occurred):**

[Describe the root cause of the finding — e.g., process gap, configuration error, lack of monitoring, resource constraint.]

**Effect (What is the risk):**

[Describe the potential impact if this finding is not remediated — e.g., unauthorized access, regulatory breach, reputational harm, financial loss.]

**Evidence Reference:**

| Evidence ID | Description |
|---|---|
| [EVD-001] | [Description of supporting evidence] |
| [EVD-002] | [Description of supporting evidence] |

**Management Response:**

[Record the system/business owner's agreed response to this finding.]

**Agreed Remediation Action:**

[Describe the specific remediation action to be taken.]

**Responsible Owner:** [Name / Role]

**Target Remediation Date:** [Date]

---

#### Finding F-002: [Finding Title]

*[Repeat the finding detail block above for each additional finding.]*

---

### 5.3 Per-Channel Rating Summary

*Summarize the overall authentication effectiveness rating for each in-scope channel based on the aggregate of findings.*

| Channel | Authentication Method(s) | Overall Rating | Open Findings | Notes |
|---|---|---|---|---|
| [Internet Banking Portal] | [e.g., Password + SMS OTP] | [Satisfactory / Requires Improvement / Unsatisfactory] | [Count] | [Comments] |
| [Mobile Banking — iOS] | [e.g., Biometric + PIN] | [Rating] | [Count] | [Comments] |
| [Mobile Banking — Android] | [e.g., Biometric + PIN] | [Rating] | [Count] | [Comments] |
| [API Gateway] | [e.g., OAuth 2.0 + PKCE] | [Rating] | [Count] | [Comments] |
| [Other Channel] | [Method] | [Rating] | [Count] | [Comments] |

---

## 6. Evidence Reviewed

*This section provides an auditable record of all evidence examined during the assessment. Evidence must be retained and available for inspection by internal audit or regulatory examiners.*

### 6.1 Documentation Reviewed

| Evidence ID | Document Title | Document Reference / Version | Date Reviewed | Provided By |
|---|---|---|---|---|
| EVD-001 | Customer Authentication Policy | [Doc Ref / Version] | [Date] | [Department] |
| EVD-002 | IAM Security Standard | [Doc Ref / Version] | [Date] | [Department] |
| EVD-003 | Authentication System Configuration Baseline | [Doc Ref / Version] | [Date] | [Department] |
| EVD-004 | MFA Implementation Design Document | [Doc Ref / Version] | [Date] | [Department] |
| EVD-005 | Third-Party Authentication Vendor Assessment Report | [Doc Ref / Version] | [Date] | [Department] |
| EVD-006 | [Document Title] | [Doc Ref / Version] | [Date] | [Department] |

### 6.2 Configuration Evidence

| Evidence ID | System | Configuration Item | Review Method | Date Reviewed |
|---|---|---|---|---|
| EVD-007 | [System Name] | Account lockout threshold settings | Direct system inspection | [Date] |
| EVD-008 | [System Name] | Session timeout configuration | Direct system inspection | [Date] |
| EVD-009 | [System Name] | MFA enforcement policy settings | Direct system inspection | [Date] |
| EVD-010 | [System Name] | [Configuration Item] | [Review Method] | [Date] |

### 6.3 Log and Data Evidence

| Evidence ID | Data Source | Data Description | Period Covered | Date Reviewed |
|---|---|---|---|---|
| EVD-011 | [SIEM / Log System] | Authentication failure events | [Date Range] | [Date] |
| EVD-012 | [SIEM / Log System] | Account lockout events | [Date Range] | [Date] |
| EVD-013 | [Fraud System] | Authentication anomaly alerts | [Date Range] | [Date] |
| EVD-014 | [System Name] | MFA step-up trigger logs | [Date Range] | [Date] |
| EVD-015 | [System Name] | [Data Description] | [Date Range] | [Date] |

### 6.4 Interview Records

| Evidence ID | Interviewee Name | Role / Title | Interview Date | Topics Covered |
|---|---|---|---|---|
| EVD-016 | [Name] | [Role] | [Date] | [Topics] |
| EVD-017 | [Name] | [Role] | [Date] | [Topics] |
| EVD-018 | [Name] | [Role] | [Date] | [Topics] |

---

## 7. Recommendations

### 7.1 Prioritized Recommendations

*This section translates findings into actionable recommendations. Recommendations should be specific, measurable, and prioritized to guide resource allocation.*

| Rec ID | Recommendation | Priority | Finding Reference | Responsible Owner | Target Date | Estimated Effort |
|---|---|---|---|---|---|---|
| REC-001 | [Recommendation Title and Description] | Critical | F-001 | [Role / Name] | [Date] | [High / Medium / Low] |
| REC-002 | [Recommendation Title and Description] | High | F-002 | [Role / Name] | [Date] | [High / Medium / Low] |
| REC-003 | [Recommendation Title and Description] | Medium | F-003 | [Role / Name] | [Date] | [High / Medium / Low] |
| REC-004 | [Recommendation Title and Description] | Low | F-004 | [Role / Name] | [Date] | [High / Medium / Low] |

### 7.2 Detailed Recommendations

*For each recommendation, provide sufficient detail to enable the responsible owner to implement the corrective action without further clarification.*

---

#### REC-001: [Recommendation Title]

**Priority:** [Critical / High / Medium / Low]

**Linked Finding(s):** F-001

**Recommendation:**

[Provide a clear, specific description of the recommended action. Include technical guidance where applicable — e.g., specific configuration changes, policy updates, process improvements, or tooling to be implemented.]

**Expected Outcome:**

[Describe the control state that should exist after successful implementation of this recommendation.]

**Implementation Guidance:**

1. [Step 1]
2. [Step 2]
3. [Step 3]

**Success Criteria:**

[Define how completion of this recommendation will be verified — e.g., configuration evidence, updated policy document, test results.]

---

#### REC-002: [Recommendation Title]

*[Repeat the recommendation detail block above for each additional recommendation.]*

---

### 7.3 Recommendations Carried Forward from Prior Assessment

*Document any recommendations from the previous quarterly assessment that remain open. Overdue items should be escalated in accordance with the issue management policy.*

| Rec ID (Prior) | Recommendation | Original Target Date | Current Status | Revised Target Date | Escalated? |
|---|---|---|---|---|---|
| [Prior Rec ID] | [Recommendation Description] | [Original Date] | ☐ Open ☐ Partially Complete ☐ Closed | [Revised Date] | ☐ Yes ☐ No |
| [Prior Rec ID] | [Recommendation Description] | [Original Date] | ☐ Open ☐ Partially Complete ☐ Closed | [Revised Date] | ☐ Yes ☐ No |

---

## 8. Roles and Responsibilities

*This section defines accountabilities for the authentication assessment process and for the remediation of findings identified in this report.*

### 8.1 RACI Matrix — Authentication Assessment Process

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

| Activity | IAM Manager | CISO | IT Security Team | Application Owners | Internal Audit | Risk Management | Business Units |
|---|---|---|---|---|---|---|---|
| Define assessment scope and criteria | R/A | A | C | C | I | C | I |
| Conduct assessment fieldwork | R | I | R | C | I | I | I |
| Prepare draft assessment report | R | I | C | I | C | I | I |
| Review and validate findings | A | C | C | A | C | C | I |
| Approve final assessment report | A | A | I | I | I | I | I |
| Implement remediation actions | C | I | R | R | I | I | R |
| Verify remediation effectiveness | R | I | R | C | C | I | I |
| Report to Board / Senior Management | I | R/A | I | I | C | C | I |
| Maintain assessment evidence | R/A | I | R | I | I | I | I |

### 8.2 Escalation Path

| Scenario | Escalation Action | Escalated To | Timeframe |
|---|---|---|---|
| Critical finding identified | Immediate escalation and notification | CISO, Chief Risk Officer | Within 24 hours |
| High finding with overdue remediation | Formal escalation memo issued | CISO, Business Owner | Within 5 business days of due date |
| Medium finding with overdue remediation | Escalation to department head | Department Head, IAM Manager | Within 10 business days of due date |
| Unsatisfactory overall rating | Senior Management briefing required | Senior Management Committee | Within 10 business days of report issuance |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [Date] | [Author Name] | Initial draft for internal review |
| 0.2 | [Date] | [Author Name] | Incorporated review comments from [Reviewer] |
| 1.0 | [Date] | [Author Name] | Final version approved for issuance |

### 9.2 Review Record

| Reviewer | Role | Review Date | Comments |
|---|---|---|---|
| [Name] | [Role] | [Date] | [e.g., Reviewed and accepted with minor comments] |
| [Name] | [Role] | [Date] | [e.g., Findings validated. Recommendations agreed.] |
| [Name] | [Role] | [Date] | [Comments] |

### 9.3 Approval Sign-Off

*By signing below, the approver confirms that this Authentication Assessment Report has been reviewed and is approved for issuance. The approver acknowledges the findings and agrees to the recommendations and remediation timelines set out herein.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager | [Name] | _____________________________ | [Date] |
| CISO | [Name] | _____________________________ | [Date] |
| Chief Risk Officer | [Name] | _____________________________ | [Date] |
| [Additional Approver] | [Name] | _____________________________ | [Date] |

---

## 10. References

*This section lists all regulatory instruments, internal policies, and standards that govern or inform this assessment.*

### 10.1 Regulatory References

| Reference | Document Title | Issuing Authority | Clause / Section | Version / Effective Date |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 12.4 | [Effective Date] |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Other Clause] | [Effective Date] |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | [Relevant Section] | 2010 (as amended) |
| [Other Regulation] | [Title] | [Authority] | [Clause] | [Date] |

### 10.2 Internal Policy and Standards References

| Reference ID | Document Title | Owner | Version | Location |
|---|---|---|---|---|
| POL-IAM-001 | Customer Authentication Policy | IAM Manager | [Version] | [Document Repository Path] |
| STD-SEC-005 | IAM Security Standard | IAM Manager | [Version] | [Document Repository Path] |
| STD-SEC-012 | MFA Implementation Standard | IAM Manager | [Version] | [Document Repository Path] |
| PRO-IAM-003 | Customer Authentication Review Procedure | IAM Manager | [Version] | [Document Repository Path] |
| [Reference ID] | [Document Title] | [Owner] | [Version] | [Location] |

### 10.3 Industry Standards

| Standard | Title | Relevant Section |
|---|---|---|
| NIST SP 800-63B | Digital Identity Guidelines — Authentication and Lifecycle Management | [Relevant Section] |
| ISO/IEC 27001:2022 | Information Security Management Systems | Control A.8.5 — Secure Authentication |
| OWASP Authentication Cheat Sheet | Authentication Best Practices | [Relevant Section] |
| [Other Standard] | [Title] | [Section] |

---

## 11. Appendices

### Appendix A: Authentication Control Testing Results

*This appendix contains detailed technical results from authentication control testing performed during the assessment. Results are summarized in Section 5 and cross-referenced to findings where applicable.*

| Test ID | Test Description | System Tested | Test Method | Expected Result | Actual Result | Pass / Fail |
|---|---|---|---|---|---|---|
| TST-001 | [e.g., MFA enforcement on login] | [System] | [Method] | [Expected] | [Actual] | ☐ Pass ☐ Fail |
| TST-002 | [e.g., Account lockout after failed attempts] | [System] | [Method] | [Expected] | [Actual] | ☐ Pass ☐ Fail |
| TST-003 | [e.g., Session timeout enforcement] | [System] | [Method] | [Expected] | [Actual] | ☐ Pass ☐ Fail |
| TST-004 | [e.g., Step-up authentication trigger] | [System] | [Method] | [Expected] | [Actual] | ☐ Pass ☐ Fail |
| TST-005 | [Test Description] | [System] | [Method] | [Expected] | [Actual] | ☐ Pass ☐ Fail |

### Appendix B: Authentication Metrics — Assessment Period

*This appendix presents key authentication metrics for the assessment period. Metrics should be extracted from system logs and the fraud/anomaly monitoring platform.*

| Metric | Channel | Value | Benchmark / Threshold | Assessment |
|---|---|---|---|---|
| Total authentication attempts | [Channel] | [Value] | N/A | Informational |
| Authentication failure rate (%) | [Channel] | [Value] | < [Threshold]% | ☐ Within Threshold ☐ Exceeds Threshold |
| Account lockout events | [Channel] | [Value] | [Benchmark] | ☐ Within Threshold ☐ Exceeds Threshold |
| MFA adoption rate (%) | [Channel] | [Value] | 100% | ☐ Within Threshold ☐ Exceeds Threshold |
| Average session duration (minutes) | [Channel] | [Value] | < [Threshold] mins | ☐ Within Threshold ☐ Exceeds Threshold |
| Authentication anomaly alerts triggered | All Channels | [Value] | [Benchmark] | ☐ Within Threshold ☐ Exceeds Threshold |
| Mean time to detect authentication anomaly (minutes) | All Channels | [Value] | < [Threshold] mins | ☐ Within Threshold ☐ Exceeds Threshold |

### Appendix C: Prior Quarter Findings Disposition

*This appendix tracks the disposition of all findings raised in the prior quarterly assessment.*

| Prior Finding ID | Finding Description | Prior Severity | Remediation Owner | Target Date | Verification Date | Outcome |
|---|---|---|---|---|---|---|
| [Prior ID] | [Description] | [Severity] | [Owner] | [Date] | [Date] | ☐ Closed ☐ Carried Forward ☐ Escalated |
| [Prior ID] | [Description] | [Severity] | [Owner] | [Date] | [Date] | ☐ Closed ☐ Carried Forward ☐ Escalated |
| [Prior ID] | [Description] | [Severity] | [Owner] | [Date] | [Date] | ☐ Closed ☐ Carried Forward ☐ Escalated |

### Appendix D: Glossary

| Term | Definition |
|---|---|
| **Authentication** | The process of verifying the identity of a user, system, or entity prior to granting access. |
| **Multi-Factor Authentication (MFA)** | An authentication method requiring the user to present two or more independent verification factors from distinct categories (knowledge, possession, inherence). |
| **Step-Up Authentication** | A process by which an additional or stronger authentication challenge is triggered in response to a higher-risk action, such as a high-value transaction. |
| **Out-of-Band Authentication** | An authentication method that uses a separate communication channel from the primary transaction channel to deliver or verify authentication credentials. |
| **Session Timeout** | The automatic termination of an authenticated session after a defined period of inactivity. |
| **Account Lockout** | A security control that temporarily or permanently disables an account after a defined number of consecutive failed authentication attempts. |
| **IAM** | Identity and Access Management — the framework of policies, processes, and technologies that manage digital identities and control access to systems. |
| **RACI** | A responsibility assignment matrix defining who is Responsible, Accountable, Consulted, and Informed for each activity. |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document. |

### Appendix E: Evidence Register Index

*This appendix provides a consolidated index of all evidence collected during this assessment. Physical or electronic copies of all evidence items listed in Section 6 must be retained in the assessment evidence repository for a minimum of [Retention Period, e.g., 7 years] in accordance with [Internal Records Retention Policy Reference].*

| Evidence ID | Description | Format | Location / Repository | Retention Expiry |
|---|---|---|---|---|
| EVD-001 | [Description] | [PDF / Screenshot / Log Extract] | [Location] | [Date] |
| EVD-002 | [Description] | [Format] | [Location] | [Date] |
| EVD-003 | [Description] | [Format] | [Location] | [Date] |
| *(Continue for all evidence items listed in Section 6)* | | | | |

---

*End of Document*

---

**Document Control:** This document is subject to version control. The master copy is maintained in [Document Repository Name]. Printed copies are uncontrolled. Please verify you are referencing the current version before use.