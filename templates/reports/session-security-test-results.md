# Session Security Test Results

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **RMiT Reference** | Clause 12.6 |

---

> **Confidentiality Notice:** This document contains confidential information pertaining to the security posture of [Organization Name]. It is intended solely for authorized personnel involved in technology risk management and regulatory compliance. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [Risk Ratings and Prioritisation](#5-risk-ratings-and-prioritisation)
6. [Recommendations and Action Items](#6-recommendations-and-action-items)
7. [Management Response](#7-management-response)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document records the security testing results for session management controls implemented across [Organization Name]'s technology systems and digital platforms. It serves as a formal compliance artifact demonstrating adherence to Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, with specific reference to **Clause 12.6**, which mandates robust session security controls to protect against unauthorized access, session hijacking, and related threats.

The Session Security Test Results document provides a structured basis for assessing control effectiveness, tracking identified vulnerabilities, and ensuring timely remediation of session-related security weaknesses. It supports [Organization Name]'s ongoing obligation to maintain a sound technology risk management framework as required by BNM.

### 1.2 Scope

*Describe the systems, applications, and infrastructure components in scope for this testing cycle. Include any explicit exclusions and the rationale for those exclusions.*

**In Scope:**

- [Application/System Name 1] — [Brief description and environment, e.g., Internet Banking Portal, Production]
- [Application/System Name 2] — [Brief description and environment]
- [Application/System Name 3] — [Brief description and environment]
- [API Gateway / Middleware components relevant to session management]
- [Identity and Access Management (IAM) platform, if applicable]

**Out of Scope:**

- [Excluded System/Component 1] — *Reason for exclusion: [e.g., scheduled for decommissioning, covered under separate audit]*
- [Excluded System/Component 2] — *Reason for exclusion: [e.g., third-party managed service, tested separately]*

### 1.3 Regulatory Context

This artifact directly supports compliance with the following regulatory obligations:

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | Clause 12.6 | Session security controls for technology systems |
| BNM RMiT | Clause 12.1 | General access control principles |
| Personal Data Protection Act 2010 (PDPA) | Section 9 | Security standard for personal data processing |
| [Other applicable regulation] | [Clause] | [Requirement summary] |

### 1.4 Testing Period

| Field | Detail |
|---|---|
| **Test Cycle** | Q[Quarter] [Year] |
| **Testing Start Date** | [DD Month YYYY] |
| **Testing End Date** | [DD Month YYYY] |
| **Report Issue Date** | [DD Month YYYY] |
| **Testing Authority** | [Internal Security Team / External Assessor Name] |

---

## 2. Executive Summary

*Provide a concise, non-technical summary of the testing engagement, overall security posture of session management controls, and the most critical findings. This section is intended for senior management and board-level readers.*

### 2.1 Overview

[Organization Name] conducted a comprehensive security assessment of session management controls during the period [Start Date] to [End Date]. Testing was performed across [number] in-scope systems and applications in accordance with the BNM RMiT requirements under Clause 12.6.

The objective of this assessment was to evaluate the design and operational effectiveness of session security controls including session token generation, transmission security, timeout enforcement, concurrent session management, and session invalidation procedures.

### 2.2 Overall Assessment Verdict

| Assessment Dimension | Rating | Commentary |
|---|---|---|
| **Overall Session Security Posture** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief commentary] |
| **Session Token Security** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief commentary] |
| **Timeout and Expiry Controls** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief commentary] |
| **Transmission Security (TLS/HTTPS)** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief commentary] |
| **Concurrent Session Management** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief commentary] |
| **Session Invalidation on Logout** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief commentary] |

### 2.3 Finding Summary

| Severity | Count | Description |
|---|---|---|
| **Critical** | [0] | Findings requiring immediate remediation (within 7 days) |
| **High** | [0] | Findings requiring urgent remediation (within 30 days) |
| **Medium** | [0] | Findings requiring remediation (within 60 days) |
| **Low** | [0] | Findings to be addressed in next development cycle |
| **Informational** | [0] | Observations with no immediate risk impact |
| **Total** | [0] | |

### 2.4 Key Messages to Management

*Summarize 3–5 key messages that management must be aware of arising from this testing cycle.*

1. **[Key Message 1]:** [e.g., "All critical and high findings from the previous quarter have been fully remediated, demonstrating effective follow-through on action items."]
2. **[Key Message 2]:** [e.g., "A medium-severity finding relating to session fixation vulnerability was identified in the [Application Name] and requires attention within 60 days."]
3. **[Key Message 3]:** [e.g., "Session timeout configurations are consistent across all tested systems and comply with RMiT Clause 12.6 thresholds."]
4. **[Key Message 4]:** [e.g., "Recommended adoption of security headers (SameSite cookie attribute) across all web applications to strengthen cross-site request forgery mitigations."]

---

## 3. Scope and Methodology

### 3.1 Testing Objectives

*List the specific objectives this testing engagement was designed to achieve, mapped to RMiT requirements.*

The session security testing was conducted to verify that [Organization Name]'s session management controls:

- Generate cryptographically secure and unpredictable session tokens
- Enforce appropriate session timeout and expiry policies
- Securely transmit session tokens using TLS/HTTPS and appropriate cookie attributes
- Properly invalidate sessions upon logout, password change, or privilege escalation
- Prevent session fixation and session hijacking attacks
- Enforce concurrent session restrictions where required by policy
- Log and monitor session events for anomaly detection

### 3.2 Testing Approach

*Describe the overall testing methodology, including whether testing was black-box, grey-box, or white-box, and the standards or frameworks followed.*

Testing was conducted using a **[Black-box / Grey-box / White-box]** approach, combining automated vulnerability scanning with manual testing techniques. The assessment methodology aligns with the following industry standards:

| Standard / Framework | Version / Edition | Application |
|---|---|---|
| OWASP Testing Guide | v4.2 | Session Management Testing (OTG-SESS-*) |
| OWASP Application Security Verification Standard (ASVS) | v4.0 | Level [1/2/3] — Session Management (V3) |
| NIST SP 800-115 | [Edition] | Technical Guide to Information Security Testing |
| [Other applicable standard] | [Version] | [Application] |

### 3.3 Test Cases Executed

*List the session-specific test cases executed during this engagement.*

| Test Case ID | Test Case Name | OWASP Reference | Status |
|---|---|---|---|
| TC-SESS-001 | Session Token Analysis — Entropy and Predictability | OTG-SESS-001 | [Pass / Fail / Not Tested] |
| TC-SESS-002 | Cookie Attributes Validation (Secure, HttpOnly, SameSite) | OTG-SESS-002 | [Pass / Fail / Not Tested] |
| TC-SESS-003 | Session Fixation Testing | OTG-SESS-003 | [Pass / Fail / Not Tested] |
| TC-SESS-004 | Exposed Session Variables | OTG-SESS-004 | [Pass / Fail / Not Tested] |
| TC-SESS-005 | Cross-Site Request Forgery (CSRF) Token Validation | OTG-SESS-005 | [Pass / Fail / Not Tested] |
| TC-SESS-006 | Logout and Session Invalidation | OTG-SESS-006 | [Pass / Fail / Not Tested] |
| TC-SESS-007 | Session Timeout — Idle and Absolute Timeout | OTG-SESS-007 | [Pass / Fail / Not Tested] |
| TC-SESS-008 | Session Puzzling / Variable Overloading | OTG-SESS-008 | [Pass / Fail / Not Tested] |
| TC-SESS-009 | Concurrent Session Control | [Internal Reference] | [Pass / Fail / Not Tested] |
| TC-SESS-010 | Session Token Transmission Security (TLS Enforcement) | [Internal Reference] | [Pass / Fail / Not Tested] |
| TC-SESS-011 | Post-Authentication Session Token Regeneration | [Internal Reference] | [Pass / Fail / Not Tested] |
| TC-SESS-012 | Session Data Stored Client-Side (Sensitive Data Exposure) | [Internal Reference] | [Pass / Fail / Not Tested] |

### 3.4 Tools and Techniques

| Tool / Technique | Version | Purpose |
|---|---|---|
| Burp Suite Professional | [Version] | Manual session testing, interception, and replay |
| OWASP ZAP | [Version] | Automated scanning and session analysis |
| [Custom Script Name] | [Version/Date] | [Purpose, e.g., entropy analysis of session tokens] |
| Browser Developer Tools | N/A | Cookie attribute inspection |
| [Other Tool] | [Version] | [Purpose] |

### 3.5 Assumptions and Constraints

*Document any constraints that may have limited the depth or coverage of testing.*

- Testing was performed in the **[Production / Staging / UAT]** environment.
- [Constraint 1, e.g., "Testing was limited to business hours to avoid disruption to production services."]
- [Constraint 2, e.g., "Access to source code was not provided; testing was conducted as grey-box with access to API documentation only."]
- [Constraint 3, e.g., "Multi-factor authentication bypass was excluded from scope per written authorisation from [Authority Name]."]

---

## 4. Key Findings and Observations

*Present each finding in detail. Use one subsection per finding. Assign a unique Finding ID for traceability. Repeat the finding template below for each identified issue.*

### 4.1 Findings Register

| Finding ID | Title | Affected System | Severity | Status |
|---|---|---|---|---|
| SESS-F-001 | [Finding Title] | [System Name] | [Critical/High/Medium/Low/Info] | [Open/Closed/In Progress] |
| SESS-F-002 | [Finding Title] | [System Name] | [Critical/High/Medium/Low/Info] | [Open/Closed/In Progress] |
| SESS-F-003 | [Finding Title] | [System Name] | [Critical/High/Medium/Low/Info] | [Open/Closed/In Progress] |
| SESS-F-004 | [Finding Title] | [System Name] | [Critical/High/Medium/Low/Info] | [Open/Closed/In Progress] |
| SESS-F-005 | [Finding Title] | [System Name] | [Critical/High/Medium/Low/Info] | [Open/Closed/In Progress] |

---

### 4.2 Detailed Findings

#### Finding SESS-F-001: [Finding Title]

*Provide a complete description of each finding including evidence, business impact, and reproduction steps. Replicate this block for each finding.*

| Field | Detail |
|---|---|
| **Finding ID** | SESS-F-001 |
| **Title** | [Short descriptive title, e.g., "Session Token Not Regenerated After Authentication"] |
| **Affected System** | [System/Application Name] |
| **Affected URL / Endpoint** | [URL or endpoint, e.g., `https://[app-domain]/api/auth/login`] |
| **Severity** | [Critical / High / Medium / Low / Informational] |
| **Likelihood** | [High / Medium / Low] |
| **RMiT Reference** | Clause 12.6 |
| **OWASP Reference** | [e.g., A2:2021 – Cryptographic Failures / OTG-SESS-003] |
| **Status** | [Open / In Progress / Closed] |
| **Date Identified** | [DD Month YYYY] |
| **Target Remediation Date** | [DD Month YYYY] |

**Description:**

[Provide a clear, factual description of the vulnerability. Explain what was observed, why it is a vulnerability, and the conditions under which it was found. Avoid jargon where possible.]

**Evidence:**

[Describe the evidence collected, e.g., screenshots, HTTP request/response captures, tool output. Reference Appendix items where screenshots or logs are attached.]

> *See Appendix A — Figure A.1 for screenshot evidence.*

**Business Impact:**

[Describe the potential impact to the organization if this vulnerability is exploited, including customer impact, regulatory consequences, and reputational risk.]

**Steps to Reproduce:**

1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Observed result]

**Recommendation:**

[Provide a specific, actionable recommendation for remediation. Reference vendor documentation, OWASP guidance, or standards where applicable.]

---

#### Finding SESS-F-002: [Finding Title]

*[Repeat the finding block above for each additional finding identified during testing.]*

| Field | Detail |
|---|---|
| **Finding ID** | SESS-F-002 |
| **Title** | [Short descriptive title] |
| **Affected System** | [System/Application Name] |
| **Affected URL / Endpoint** | [URL or endpoint] |
| **Severity** | [Critical / High / Medium / Low / Informational] |
| **Likelihood** | [High / Medium / Low] |
| **RMiT Reference** | Clause 12.6 |
| **OWASP Reference** | [Reference] |
| **Status** | [Open / In Progress / Closed] |
| **Date Identified** | [DD Month YYYY] |
| **Target Remediation Date** | [DD Month YYYY] |

**Description:** [Description]

**Evidence:** [Evidence reference]

**Business Impact:** [Impact description]

**Steps to Reproduce:**

1. [Step 1]
2. [Step 2]

**Recommendation:** [Recommendation]

---

### 4.3 Positive Observations

*Document controls that were found to be operating effectively. This provides a balanced view and acknowledges areas of good practice.*

| Observation ID | Description | Affected System | Assessment |
|---|---|---|---|
| SESS-O-001 | [e.g., "Session tokens were found to be cryptographically random with high entropy (>128 bits) across all tested applications."] | [System Name] | Effective |
| SESS-O-002 | [e.g., "Idle session timeout of 15 minutes was consistently enforced across all internet-facing applications."] | [System Name] | Effective |
| SESS-O-003 | [e.g., "HttpOnly and Secure flags were correctly set on all session cookies."] | [System Name] | Effective |
| SESS-O-004 | [e.g., "All previous quarter critical and high findings were remediated within the agreed timelines."] | All Systems | Effective |

---

## 5. Risk Ratings and Prioritisation

### 5.1 Risk Rating Methodology

*Explain the risk rating scale used to classify findings. Reference the organization's risk appetite and any relevant BNM guidance.*

All findings are rated using a combination of **Likelihood** and **Impact** in accordance with [Organization Name]'s Technology Risk Management Framework and aligned to BNM RMiT guidance.

**Severity Definitions:**

| Severity | Likelihood × Impact | Description | Remediation Timeline |
|---|---|---|---|
| **Critical** | High × High | Immediate exploitation risk with severe business impact. Potential for significant customer harm or regulatory breach. | Immediate (within 7 calendar days) |
| **High** | High × Medium or Medium × High | Significant risk requiring urgent attention. Exploitable with meaningful business impact. | Within 30 calendar days |
| **Medium** | Medium × Medium or Low × High | Moderate risk. Exploitable under specific conditions or with limited impact. | Within 60 calendar days |
| **Low** | Low × Low or Low × Medium | Limited risk. Exploitable only under highly constrained conditions with minimal impact. | Next development release cycle |
| **Informational** | N/A | No direct risk. Observations on best practice improvements. | At management discretion |

### 5.2 Risk Heat Map

*Plot findings on the risk matrix below by filling in Finding IDs in the appropriate cells.*

| | **Low Impact** | **Medium Impact** | **High Impact** |
|---|---|---|---|
| **High Likelihood** | Medium | High | **Critical** |
| **Medium Likelihood** | Low | Medium | High |
| **Low Likelihood** | Informational | Low | Medium |

**Finding placement:**

| Finding ID | Likelihood | Impact | Severity | Heat Map Cell |
|---|---|---|---|---|
| SESS-F-001 | [High/Medium/Low] | [High/Medium/Low] | [Severity] | [Row × Column] |
| SESS-F-002 | [High/Medium/Low] | [High/Medium/Low] | [Severity] | [Row × Column] |
| SESS-F-003 | [High/Medium/Low] | [High/Medium/Low] | [Severity] | [Row × Column] |

### 5.3 Remediation Priority Order

*List findings in priority order for remediation planning.*

| Priority | Finding ID | Title | Severity | Owner | Target Date |
|---|---|---|---|---|---|
| 1 | SESS-F-[XXX] | [Title] | Critical | [Owner] | [Date] |
| 2 | SESS-F-[XXX] | [Title] | High | [Owner] | [Date] |
| 3 | SESS-F-[XXX] | [Title] | Medium | [Owner] | [Date] |
| 4 | SESS-F-[XXX] | [Title] | Low | [Owner] | [Date] |

### 5.4 Trend Analysis

*Compare findings from this quarter against previous quarters to identify improving or deteriorating trends.*

| Quarter | Critical | High | Medium | Low | Informational | Total |
|---|---|---|---|---|---|---|
| Q[N-2] [Year] | [0] | [0] | [0] | [0] | [0] | [0] |
| Q[N-1] [Year] | [0] | [0] | [0] | [0] | [0] | [0] |
| Q[N] [Year] (Current) | [0] | [0] | [0] | [0] | [0] | [0] |

*[Provide a brief narrative on the trend, e.g., "The overall number of findings has decreased by [X]% compared to the previous quarter, reflecting the effectiveness of the remediation programme. However, the emergence of [X] medium-severity findings in [System Name] warrants attention."]*

---

## 6. Recommendations and Action Items

### 6.1 Summary of Recommendations

*Provide a consolidated list of all recommendations arising from findings and observations, prioritised by risk severity.*

| Rec. ID | Finding ID | Recommendation | Priority | Responsible Team | Target Date | Effort Estimate |
|---|---|---|---|---|---|---|
| REC-001 | SESS-F-001 | [Short description of recommended action] | Critical | [Team Name] | [DD Month YYYY] | [High/Medium/Low] |
| REC-002 | SESS-F-002 | [Short description of recommended action] | High | [Team Name] | [DD Month YYYY] | [High/Medium/Low] |
| REC-003 | SESS-F-003 | [Short description of recommended action] | Medium | [Team Name] | [DD Month YYYY] | [High/Medium/Low] |
| REC-004 | SESS-O-001 | [Best practice enhancement recommendation] | Low | [Team Name] | [DD Month YYYY] | [High/Medium/Low] |

### 6.2 Strategic Recommendations

*Beyond individual finding remediation, provide strategic recommendations to improve the overall session security posture.*

1. **Implement Centralized Session Management:** [Recommendation detail — e.g., "Consolidate session management to a centralized identity platform to ensure consistent policy enforcement across all applications and reduce the risk of inconsistent implementations."]

2. **Adopt Security Headers Baseline Standard:** [Recommendation detail — e.g., "Establish and enforce an organization-wide HTTP security headers baseline including Content-Security-Policy, X-Frame-Options, and SameSite cookie attributes across all web applications."]

3. **Enhance Session Monitoring and Alerting:** [Recommendation detail — e.g., "Integrate session anomaly detection rules into the SIEM platform to enable real-time alerting on suspicious session behaviour such as concurrent logins from disparate geographies."]

4. **Developer Security Training:** [Recommendation detail — e.g., "Conduct targeted secure coding training for development teams covering OWASP session management best practices and common session vulnerabilities."]

5. **[Additional Strategic Recommendation]:** [Detail]

### 6.3 Action Item Tracking

| Action ID | Description | Responsible Party | Due Date | Status | Evidence of Completion |
|---|---|---|---|---|---|
| ACT-001 | [Specific action] | [Name / Team] | [Date] | [Not Started / In Progress / Complete] | [Evidence reference or "Pending"] |
| ACT-002 | [Specific action] | [Name / Team] | [Date] | [Not Started / In Progress / Complete] | [Evidence reference or "Pending"] |
| ACT-003 | [Specific action] | [Name / Team] | [Date] | [Not Started / In Progress / Complete] | [Evidence reference or "Pending"] |
| ACT-004 | [Specific action] | [Name / Team] | [Date] | [Not Started / In Progress / Complete] | [Evidence reference or "Pending"] |

---

## 7. Management Response

*This section records formal management responses to the findings and recommendations in this report. Each response must be provided by the system owner or accountable manager within [X] business days of report issuance.*

### 7.1 Management Acknowledgement

*The management of [Organization Name] acknowledges receipt of the Session Security Test Results for Q[Quarter] [Year] and confirms the following responses to the identified findings and recommendations.*

### 7.2 Response to Findings

| Finding ID | Severity | Management Response | Accepted Risk? | Revised Target Date | Respondent | Response Date |
|---|---|---|---|---|---|---|
| SESS-F-001 | [Severity] | [Accept / Remediate / Mitigate / Transfer] — [Brief management commentary on how the finding will be addressed or rationale for risk acceptance] | [Yes / No] | [Date if revised] | [Name, Title] | [Date] |
| SESS-F-002 | [Severity] | [Accept / Remediate / Mitigate / Transfer] — [Commentary] | [Yes / No] | [Date if revised] | [Name, Title] | [Date] |
| SESS-F-003 | [Severity] | [Accept / Remediate / Mitigate / Transfer] — [Commentary] | [Yes / No] | [Date if revised] | [Name, Title] | [Date] |

> **Note:** Any finding where management elects to **accept risk** must be formally documented and escalated to the Technology Risk Committee (TRC) for review and approval. Risk acceptance must not be applied to Critical or High severity findings without explicit Board Risk Committee endorsement.

### 7.3 Accepted Risks

*If any risks are accepted rather than remediated, document the formal risk acceptance below.*

| Risk Acceptance ID | Finding ID | Residual Risk Description | Justification | Compensating Controls | Expiry Date | Approved By | Approval Date |
|---|---|---|---|---|---|---|---|
| RA-001 | SESS-F-[XXX] | [Description of residual risk remaining after acceptance] | [Business justification for acceptance] | [Controls in place to reduce impact] | [Date by which risk acceptance must be reviewed] | [Name, Title] | [Date] |

### 7.4 Management Sign-Off

*Formal acknowledgement by accountable management that this report has been reviewed and management responses are accurate and complete.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | __________________ | [Date] |
| Head of Technology Risk | [Name] | __________________ | [Date] |
| System Owner — [System Name] | [Name] | __________________ | [Date] |
| QA Lead | [Name] | __________________ | [Date] |

---

## 8. Roles and Responsibilities

*This section defines the roles and responsibilities for the preparation, review, approval, and ongoing maintenance of this document and the associated testing programme.*

### 8.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | QA Lead | CISO | Head of Technology Risk | System Owners | Development Teams | Internal Audit | Compliance |
|---|---|---|---|---|---|---|---|
| Define session security test scope | R | A | C | C | I | I | I |
| Execute session security testing | R | A | I | C | C | I | I |
| Document findings and recommendations | R | A | I | I | I | C | C |
| Review and validate findings | C | A | R | C | I | C | I |
| Prepare and issue test results report | R | A | C | I | I | I | I |
| Provide management response | I | C | A | R | C | I | I |
| Remediate identified findings | I | A | C | R | R | I | I |
| Verify remediation effectiveness | R | A | I | C | C | I | I |
| Escalate unresolved critical findings | C | R | A | I | I | I | C |
| Approve risk acceptance decisions | I | C | R | C | I | C | A |
| Submit to Technology Risk Committee | I | R | A | I | I | I | C |
| Archive and retain test records | R | A | C | I | I | C | C |

### 8.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| QA Lead (Document Owner) | [Name] | [Department] | [Email] |
| CISO | [Name] | Information Security | [Email] |
| Head of Technology Risk | [Name] | Technology Risk | [Email] |
| Compliance Manager | [Name] | Compliance | [Email] |
| Internal Audit Contact | [Name] | Internal Audit | [Email] |

---

## 9. Review and Approval

### 9.1 Review Frequency

This document and the associated testing programme are subject to the following review cadence:

| Review Type | Frequency | Trigger |
|---|---|---|
| Scheduled Review | Quarterly | Per compliance calendar |
| Ad-hoc Review | As required | Significant changes to in-scope systems, new regulatory guidance, or material security incidents |
| Post-Incident Review | Within 30 days of incident | Session-related security incident or breach |

### 9.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD Month YYYY] | [Author Name] | Initial document creation |
| [1.1] | [DD Month YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD Month YYYY] | [Author Name] | [Description of changes] |

### 9.3 Approval Sign-Off

*This document requires the following approvals prior to issuance and at each review cycle.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By — QA Lead | [Name] | __________________ | [Date] |
| Reviewed By — Head of Technology Risk | [Name] | __________________ | [Date] |
| Reviewed By — CISO | [Name] | __________________ | [Date] |
| Approved By — [Approving Authority] | [Name] | __________________ | [Date] |

---

## 10. References

### 10.1 Regulatory References

| Reference | Description |
|---|---|
| BNM RMiT, Clause 12.6 | Session security controls — Mandates that financial institutions implement and maintain controls to ensure secure session management across all technology systems, including controls for session token generation, transmission, expiry, and invalidation. |
| BNM RMiT, Clause 12.1 | Access control — Establishes baseline requirements for identity and access management from which session security requirements are derived. |
| BNM RMiT, Clause 10.3 | Vulnerability and patch management — Requires periodic security testing and timely remediation of identified vulnerabilities. |
| Personal Data Protection Act 2010 (PDPA), Section 9 | Security standard — Requires data processors to take practical steps to protect personal data against loss, misuse, modification, unauthorized access, and disclosure. |
| [NACSA Reference, if applicable] | [Description] |

### 10.2 Internal References

| Document | Document ID | Version |
|---|---|---|
| Technology Risk Management Framework | [Document ID] | [Version] |
| Information Security Policy | [Document ID] | [Version] |
| Secure Development Lifecycle (SDLC) Policy | [Document ID] | [Version] |
| Session Management Standard | [Document ID] | [Version] |
| Vulnerability Management Procedure | [Document ID] | [Version] |
| Penetration Testing Policy | [Document ID] | [Version] |

### 10.3 External Standards and Guidance

| Standard | Version | Publisher |
|---|---|---|
| OWASP Testing Guide — Session Management Testing (OTG-SESS-*) | v4.2 | OWASP Foundation |
| OWASP Application Security Verification Standard (ASVS) — V3 Session Management | v4.0 | OWASP Foundation |
| NIST SP 800-115: Technical Guide to Information Security Testing and Assessment | [Edition] | NIST |
| NIST SP 800-63B: Digital Identity Guidelines | [Edition] | NIST |

---

## 11. Appendices

### Appendix A — Evidence Screenshots and Artefacts

*Attach or reference all evidence collected during testing. Each piece of evidence should be labelled with a figure number and cross-referenced from the relevant finding in Section 4.*

| Figure | Description | Finding Reference | Location |
|---|---|---|---|
| A.1 | [e.g., "Screenshot of HTTP response showing missing Secure flag on session cookie for [Application Name]"] | SESS-F-001 | [Attached / Path to file] |
| A.2 | [e.g., "Burp Suite intercept log demonstrating session token reuse post-authentication"] | SESS-F-002 | [Attached / Path to file] |
| A.3 | [e.g., "ZAP automated scan report extract — session management findings"] | Multiple | [Attached / Path to file] |
| A.4 | [e.g., "Session token entropy analysis output"] | SESS-O-001 | [Attached / Path to file] |

---

### Appendix B — Detailed Test Results Log

*Provide a full log of all test cases executed, including pass/fail status, notes, and tester details.*

| Test Case ID | Test Case Name | Tester | Date Tested | Result | Notes |
|---|---|---|---|---|---|
| TC-SESS-001 | Session Token Entropy Analysis | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-002 | Cookie Attribute Validation | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-003 | Session Fixation | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-004 | Exposed Session Variables | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-005 | CSRF Token Validation | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-006 | Logout and Session Invalidation | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-007 | Idle and Absolute Timeout | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-008 | Session Puzzling | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-009 | Concurrent Session Control | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-010 | TLS Enforcement | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-011 | Post-Authentication Token Regeneration | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |
| TC-SESS-012 | Client-Side Session Data Exposure | [Tester Name] | [Date] | [Pass/Fail] | [Notes] |

---

### Appendix C — Previous Quarter Remediation Verification

*Track and verify that findings from the previous testing cycle have been appropriately remediated.*

| Previous Finding ID | Title | Original Severity | Target Remediation Date | Verification Date | Verification Result | Verified By |
|---|---|---|---|---|---|---|
| [Q-1]-SESS-F-001 | [Title] | [Severity] | [Date] | [Date] | [Closed / Partially Closed / Overdue] | [Name] |
| [Q-1]-SESS-F-002 | [Title] | [Severity] | [Date] | [Date] | [Closed / Partially Closed / Overdue] | [Name] |
| [Q-1]-SESS-F-003 | [Title] | [Severity] | [Date] | [Date] | [Closed / Partially Closed / Overdue] | [Name] |

---

### Appendix D — Scope Confirmation Sign-Off

*Formal confirmation by system owners that the scope defined in Section 1.2 accurately reflects the systems under their ownership.*

| System Name | System Owner | Scope Confirmation | Signature | Date |
|---|---|---|---|---|
| [System/Application Name 1] | [Name, Title] | [Confirmed In Scope / Confirmed Out of Scope] | __________________ | [Date] |
| [System/Application Name 2] | [Name, Title] | [Confirmed In Scope / Confirmed Out of Scope] | __________________ | [Date] |
| [System/Application Name 3] | [Name, Title] | [Confirmed In Scope / Confirmed Out of Scope] | __________________ | [Date] |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia responsible for monetary policy and financial regulation. |
| **CSRF** | Cross-Site Request Forgery — an attack that tricks an authenticated user into submitting a request to a web application from a different site. |
| **HttpOnly** | A cookie attribute that prevents client-side scripts from accessing the cookie value, mitigating XSS-based session theft. |
| **OWASP** | Open Web Application Security Project — a nonprofit foundation producing open-source guidance on application security. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data in commercial transactions. |
| **RMiT** | Risk Management in Technology — BNM policy document establishing technology risk management requirements for financial institutions. |
| **Secure Flag** | A cookie attribute that restricts transmission of the cookie to HTTPS connections only. |
| **Session Fixation** | An attack where an adversary sets a user's session identifier before authentication, allowing the adversary to subsequently hijack the authenticated session. |
| **Session Hijacking** | Unauthorized takeover of a valid session between a user and a server, typically through theft or prediction of a session token. |
| **SameSite** | A cookie attribute that controls whether cookies are sent with cross-site requests, mitigating CSRF attacks. |
| **TLS** | Transport Layer Security — a cryptographic protocol providing secure communications over a network. |

---

*End of Document*

---

*This template was prepared in accordance with BNM RMiT requirements. All placeholders in [brackets] must be replaced with organization-specific content prior to formal issuance. This document must be treated as **Confidential** and stored in accordance with [Organization Name]'s information classification and records retention policies.*