# API Security Assessment Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

> **CONFIDENTIAL** — This document contains sensitive security assessment information and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Evidence Reviewed](#5-evidence-reviewed)
6. [Recommendations](#6-recommendations)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This API Security Assessment Report documents the quarterly security assessment of application programming interfaces (APIs) operated by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 12.3. The report provides a structured evaluation of API security controls, identifies vulnerabilities and gaps, and tracks remediation activities to ensure the organization maintains a robust API security posture.

This report serves as a formal record of compliance with BNM RMiT requirements and supports the organization's overall Technology Risk Management (TRM) framework.

### 1.2 Scope

*Define the boundaries of this assessment, including which APIs, environments, and time period are covered. Clearly state any exclusions and the rationale for them.*

**Assessment Period:** [Assessment Start Date] to [Assessment End Date]

**In-Scope APIs:**

| API Name | Version | Environment | Business Function | Hosting |
|---|---|---|---|---|
| [API Name] | [Version] | [Production / UAT / Dev] | [Description] | [Internal / Cloud / Third-Party] |
| [API Name] | [Version] | [Production / UAT / Dev] | [Description] | [Internal / Cloud / Third-Party] |
| [API Name] | [Version] | [Production / UAT / Dev] | [Description] | [Internal / Cloud / Third-Party] |

**Out-of-Scope:**

- [List any APIs or environments explicitly excluded from this assessment]
- [State reasons for exclusion, e.g., recently assessed, decommissioning in progress]

**Assessment Trigger:**

- [ ] Scheduled Quarterly Assessment
- [ ] Post-Incident Assessment
- [ ] Pre-Launch Assessment
- [ ] Triggered by Significant Change
- [ ] Regulatory Directive

---

## 2. Assessment Scope and Criteria

### 2.1 Assessment Objectives

*Describe the specific security objectives this assessment is designed to evaluate. Align objectives to BNM RMiT Clause 12.3 requirements and the organization's internal API security policy.*

The assessment was conducted to achieve the following objectives:

1. Evaluate the effectiveness of API authentication and authorization controls.
2. Identify vulnerabilities in API endpoints, data transmission, and input handling.
3. Verify compliance with [Organization Name]'s API Security Policy and BNM RMiT Clause 12.3.
4. Assess the adequacy of logging, monitoring, and alerting mechanisms for API activity.
5. Review API lifecycle management practices, including versioning, deprecation, and access governance.

### 2.2 Assessment Criteria

*List the specific standards, policies, and benchmarks against which APIs were evaluated. Include internal policies and relevant external frameworks.*

APIs were assessed against the following criteria:

| # | Criteria | Source |
|---|---|---|
| 1 | API Authentication Controls (OAuth 2.0, API keys, mTLS) | BNM RMiT Clause 12.3 |
| 2 | Authorization and Access Control (least privilege, RBAC) | BNM RMiT Clause 12.3 |
| 3 | Data Encryption in Transit (TLS 1.2 minimum) | BNM RMiT Clause 12.3 |
| 4 | Input Validation and Output Encoding | OWASP API Security Top 10 |
| 5 | Rate Limiting and Throttling | [Organization Name] API Security Policy |
| 6 | API Inventory and Lifecycle Management | BNM RMiT Clause 12.3 |
| 7 | Logging, Monitoring, and Alerting | BNM RMiT Clause 12.3 |
| 8 | Sensitive Data Exposure Controls | PDPA 2010 / BNM RMiT |
| 9 | Error Handling and Information Leakage | OWASP API Security Top 10 |
| 10 | Third-Party and Partner API Security | BNM RMiT Clause 12.3 |

### 2.3 Compliance Thresholds

*Define what constitutes a pass, partial compliance, or non-compliance for this assessment cycle.*

| Rating | Definition | Required Action |
|---|---|---|
| **Compliant** | Control is implemented and operating effectively | No immediate action required |
| **Partially Compliant** | Control exists but has gaps or deficiencies | Remediation plan required within 30 days |
| **Non-Compliant** | Control is absent or fundamentally ineffective | Immediate escalation; remediation within 14 days |
| **Not Applicable** | Control does not apply to the assessed API | Document rationale |

---

## 3. Methodology

### 3.1 Assessment Approach

*Describe the overall methodology and framework used to conduct the assessment. Include whether the assessment was automated, manual, or hybrid.*

The assessment was conducted using a **[Automated / Manual / Hybrid]** approach over **[X] days** by **[Internal Team / External Assessor / [Third-Party Firm Name]]**. The assessment methodology consisted of the following phases:

| Phase | Activity | Duration | Responsible |
|---|---|---|---|
| **Phase 1 – Planning** | Scope definition, criteria alignment, stakeholder engagement | [X days] | [Role / Team] |
| **Phase 2 – Discovery** | API inventory review, documentation review, architecture walkthrough | [X days] | [Role / Team] |
| **Phase 3 – Technical Testing** | Automated scanning, manual testing, penetration testing | [X days] | [Role / Team] |
| **Phase 4 – Analysis** | Findings analysis, risk rating, evidence collation | [X days] | [Role / Team] |
| **Phase 5 – Reporting** | Draft report, management review, finalization | [X days] | [Role / Team] |

### 3.2 Tools and Techniques

*List all tools, scripts, and techniques used during the assessment. Include version numbers where relevant to ensure reproducibility.*

| Tool / Technique | Purpose | Version |
|---|---|---|
| [e.g., OWASP ZAP] | Automated API vulnerability scanning | [Version] |
| [e.g., Burp Suite Pro] | Manual penetration testing | [Version] |
| [e.g., Postman] | API functional and security testing | [Version] |
| [e.g., Custom Scripts] | Automated compliance checks | [N/A] |
| [e.g., API Gateway Logs Review] | Log analysis and anomaly detection | [N/A] |
| [e.g., Code Review (SAST)] | Static analysis of API source code | [Version] |

### 3.3 Testing Standards Applied

- **OWASP API Security Top 10** (latest edition)
- **BNM RMiT Policy Document** — Clause 12.3
- **[Organization Name] API Security Policy** — Version [X.X]
- **NIST SP 800-95** — Guide to Secure Web Services
- **ISO/IEC 27001:2022** — Annex A controls applicable to API security

### 3.4 Limitations and Constraints

*Document any constraints that may have limited the completeness or depth of the assessment. This is important for audit transparency.*

- [e.g., Assessment was limited to production environment; non-production APIs were excluded per agreed scope.]
- [e.g., Source code was not available for APIs hosted by [Third-Party Name]; assessment was limited to black-box testing.]
- [e.g., Testing window was restricted to off-peak hours to avoid impact on production systems.]

---

## 4. Findings and Ratings

### 4.1 Executive Summary

*Provide a concise summary of the overall assessment outcome, highlighting the number of findings by severity and the overall risk posture. This section is intended for senior management and board-level readers.*

The **[Q1/Q2/Q3/Q4] [Year]** API Security Assessment of [Organization Name] identified a total of **[X] findings** across **[X] APIs** assessed. The overall API security posture is rated as **[Critical / High / Medium / Low / Satisfactory]**.

**Summary of Findings:**

| Severity | Count | Change from Previous Quarter |
|---|---|---|
| **Critical** | [X] | [↑ / ↓ / — ] [X] |
| **High** | [X] | [↑ / ↓ / — ] [X] |
| **Medium** | [X] | [↑ / ↓ / — ] [X] |
| **Low** | [X] | [↑ / ↓ / — ] [X] |
| **Informational** | [X] | [↑ / ↓ / — ] [X] |
| **Total** | [X] | |

**Overall Assessment Conclusion:**

> [Provide a 2–4 sentence narrative summarizing the overall state of API security, key risk areas identified, and whether the organization's API security posture is improving, deteriorating, or stable compared to the previous quarter.]

### 4.2 Detailed Findings

*Document each finding individually. Each finding must include sufficient detail for technical teams to reproduce and remediate the issue, and for auditors to assess risk impact.*

---

#### Finding [F-001]

| Field | Details |
|---|---|
| **Finding ID** | F-001 |
| **Title** | [Short descriptive title of the finding] |
| **Severity** | [Critical / High / Medium / Low / Informational] |
| **Affected API(s)** | [API Name(s) and Version(s)] |
| **Affected Component** | [Endpoint / Authentication Module / Gateway / etc.] |
| **OWASP Category** | [e.g., API1:2023 – Broken Object Level Authorization] |
| **BNM RMiT Clause** | 12.3 |
| **Date Identified** | [Date] |
| **Status** | [Open / In Remediation / Remediated / Accepted] |

**Description:**

[Provide a detailed technical description of the finding. Explain what was observed, how it was identified, and why it constitutes a security risk.]

**Evidence:**

[Describe the evidence collected. Reference specific log entries, screenshots, or test outputs. Actual evidence artifacts should be stored in Appendix [X].]

**Risk Impact:**

[Describe the potential business and security impact if this finding is exploited. Include confidentiality, integrity, and availability implications.]

**Recommended Remediation:**

[Provide specific, actionable remediation steps. Include configuration changes, code fixes, or policy updates as applicable.]

**Target Remediation Date:** [Date]

**Responsible Party:** [Team / Individual]

---

#### Finding [F-002]

| Field | Details |
|---|---|
| **Finding ID** | F-002 |
| **Title** | [Short descriptive title of the finding] |
| **Severity** | [Critical / High / Medium / Low / Informational] |
| **Affected API(s)** | [API Name(s) and Version(s)] |
| **Affected Component** | [Endpoint / Authentication Module / Gateway / etc.] |
| **OWASP Category** | [e.g., API2:2023 – Broken Authentication] |
| **BNM RMiT Clause** | 12.3 |
| **Date Identified** | [Date] |
| **Status** | [Open / In Remediation / Remediated / Accepted] |

**Description:**

[Provide a detailed technical description of the finding.]

**Evidence:**

[Describe the evidence collected.]

**Risk Impact:**

[Describe the potential business and security impact.]

**Recommended Remediation:**

[Provide specific, actionable remediation steps.]

**Target Remediation Date:** [Date]

**Responsible Party:** [Team / Individual]

---

*[Repeat Finding block for each identified finding. Use sequential Finding IDs: F-001, F-002, F-003, etc.]*

### 4.3 Control Assessment Summary

*Summarize the compliance status of each assessed control domain across all in-scope APIs. This table provides auditors with a consolidated view of control effectiveness.*

| Control Domain | BNM RMiT Ref. | Compliant | Partially Compliant | Non-Compliant | N/A |
|---|---|---|---|---|---|
| Authentication & Identity | 12.3 | [ ] | [ ] | [ ] | [ ] |
| Authorization & Access Control | 12.3 | [ ] | [ ] | [ ] | [ ] |
| Data Encryption in Transit | 12.3 | [ ] | [ ] | [ ] | [ ] |
| Input Validation | 12.3 | [ ] | [ ] | [ ] | [ ] |
| Rate Limiting & Throttling | 12.3 | [ ] | [ ] | [ ] | [ ] |
| API Inventory & Lifecycle | 12.3 | [ ] | [ ] | [ ] | [ ] |
| Logging & Monitoring | 12.3 | [ ] | [ ] | [ ] | [ ] |
| Sensitive Data Exposure | 12.3 | [ ] | [ ] | [ ] | [ ] |
| Error Handling | 12.3 | [ ] | [ ] | [ ] | [ ] |
| Third-Party API Security | 12.3 | [ ] | [ ] | [ ] | [ ] |

### 4.4 Trend Analysis

*Compare findings from this quarter with the previous three quarters to identify patterns, recurring issues, and the effectiveness of remediation efforts.*

| Quarter | Critical | High | Medium | Low | Info | Total |
|---|---|---|---|---|---|---|
| [Q-3 Quarter, Year] | [X] | [X] | [X] | [X] | [X] | [X] |
| [Q-2 Quarter, Year] | [X] | [X] | [X] | [X] | [X] | [X] |
| [Q-1 Quarter, Year] | [X] | [X] | [X] | [X] | [X] | [X] |
| **[Current Quarter, Year]** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]** |

**Trend Observations:**

- [e.g., Critical findings have decreased by X% over the past four quarters, indicating effective remediation of systemic issues.]
- [e.g., Medium-severity findings related to input validation remain persistent, suggesting a need for developer training or automated SAST integration.]
- [e.g., [API Name] has recurring findings; a root cause analysis is recommended.]

---

## 5. Evidence Reviewed

### 5.1 Documentation Reviewed

*List all documentation reviewed as part of this assessment. This provides an auditable record of the information relied upon to form assessment conclusions.*

| # | Document Title | Version | Date | Source |
|---|---|---|---|---|
| 1 | API Security Policy | [Version] | [Date] | [Team / System] |
| 2 | API Inventory Register | [Version] | [Date] | [Team / System] |
| 3 | API Architecture Diagrams | [Version] | [Date] | [Team / System] |
| 4 | Previous Quarter API Security Assessment Report | [Version] | [Date] | [Team / System] |
| 5 | API Gateway Configuration Documentation | [Version] | [Date] | [Team / System] |
| 6 | Penetration Testing Results (if applicable) | [Version] | [Date] | [Team / System] |
| 7 | Incident Logs related to API security (last quarter) | [N/A] | [Date Range] | [Team / System] |
| 8 | Third-Party API Security Assessments / SLAs | [Version] | [Date] | [Team / System] |
| 9 | Change Management Records for API changes | [N/A] | [Date Range] | [Team / System] |
| 10 | [Additional document] | [Version] | [Date] | [Team / System] |

### 5.2 Interviews and Walkthroughs Conducted

*Record all stakeholders interviewed or who participated in technical walkthroughs. This supports the assessment's credibility and scope coverage.*

| # | Interviewee | Role | Department | Date | Topics Covered |
|---|---|---|---|---|---|
| 1 | [Name] | [Role] | [Department] | [Date] | [e.g., API governance, inventory management] |
| 2 | [Name] | [Role] | [Department] | [Date] | [e.g., API gateway configuration, authentication] |
| 3 | [Name] | [Role] | [Department] | [Date] | [e.g., logging, monitoring, incident response] |
| 4 | [Name] | [Role] | [Department] | [Date] | [e.g., third-party API management, vendor contracts] |

### 5.3 Technical Evidence Collected

*Reference specific technical evidence collected during testing. Full artifacts should be attached as appendices or stored in the designated secure evidence repository.*

| Evidence ID | Description | Collection Method | Date Collected | Storage Location |
|---|---|---|---|---|
| EVD-001 | API vulnerability scan output — [API Name] | Automated scan ([Tool Name]) | [Date] | [Appendix / Repository Path] |
| EVD-002 | Authentication bypass test results — [API Name] | Manual testing | [Date] | [Appendix / Repository Path] |
| EVD-003 | API gateway access logs — [Date Range] | Log export from [System] | [Date] | [Appendix / Repository Path] |
| EVD-004 | TLS configuration verification output | [Tool Name] output | [Date] | [Appendix / Repository Path] |
| EVD-005 | API inventory export from [Registry/CMDB] | System export | [Date] | [Appendix / Repository Path] |
| EVD-006 | [Additional evidence description] | [Collection method] | [Date] | [Location] |

### 5.4 Previous Assessment Remediation Status

*Track the status of findings from the previous quarter's assessment to demonstrate closure and accountability.*

| Finding ID (Prior) | Description | Severity | Target Date | Current Status | Notes |
|---|---|---|---|---|---|
| [Prior F-001] | [Finding description] | [Severity] | [Date] | [Remediated / Open / Overdue] | [Notes] |
| [Prior F-002] | [Finding description] | [Severity] | [Date] | [Remediated / Open / Overdue] | [Notes] |
| [Prior F-003] | [Finding description] | [Severity] | [Date] | [Remediated / Open / Overdue] | [Notes] |

---

## 6. Recommendations

### 6.1 Priority Remediation Actions

*List the most critical recommendations requiring immediate action. Each recommendation should be specific, measurable, and assigned to a responsible party.*

| Priority | Recommendation | Addresses Finding(s) | Responsible Party | Target Date | Effort Estimate |
|---|---|---|---|---|---|
| **P1 — Critical** | [Specific remediation action] | [F-00X] | [Team / Role] | [Date] | [High / Medium / Low] |
| **P1 — Critical** | [Specific remediation action] | [F-00X] | [Team / Role] | [Date] | [High / Medium / Low] |
| **P2 — High** | [Specific remediation action] | [F-00X] | [Team / Role] | [Date] | [High / Medium / Low] |
| **P2 — High** | [Specific remediation action] | [F-00X] | [Team / Role] | [Date] | [High / Medium / Low] |
| **P3 — Medium** | [Specific remediation action] | [F-00X] | [Team / Role] | [Date] | [High / Medium / Low] |
| **P4 — Low** | [Specific remediation action] | [F-00X] | [Team / Role] | [Date] | [High / Medium / Low] |

### 6.2 Strategic Recommendations

*Beyond addressing individual findings, provide higher-level recommendations to improve the organization's API security program maturity.*

1. **API Security Governance:** [e.g., Establish a formal API Security Standard to complement the existing API Security Policy, incorporating specific configuration baselines for API gateways and authentication mechanisms.]

2. **Shift-Left Security:** [e.g., Integrate SAST and DAST tooling into the CI/CD pipeline to detect API security issues earlier in the development lifecycle, reducing the cost and frequency of post-deployment findings.]

3. **API Discovery and Inventory:** [e.g., Implement an automated API discovery tool to maintain a continuously updated API inventory, reducing the risk of shadow APIs that bypass security controls.]

4. **Third-Party API Risk Management:** [e.g., Enforce contractual security requirements for third-party API providers, including mandatory annual security assessments and right-to-audit clauses.]

5. **Developer Security Training:** [e.g., Conduct targeted API security training for development teams, focusing on OWASP API Security Top 10 vulnerabilities identified as recurring findings.]

6. **[Additional strategic recommendation]:** [Description]

### 6.3 Remediation Tracking

*Remediation progress will be tracked through [Tracking System / JIRA / ServiceNow / etc.] and reported to the Technology Risk Committee on a [monthly / quarterly] basis. The next assessment will verify the closure of all open findings.*

---

## 7. Roles and Responsibilities

### 7.1 RACI Matrix

*This RACI matrix defines accountability for API security assessment activities and follow-up actions. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of Technology Risk | CISO / CTO | API Development Team | IT Security Team | Internal Audit | Third-Party Assessor | Technology Risk Committee |
|---|---|---|---|---|---|---|---|
| Define assessment scope and criteria | A | C | C | R | C | I | I |
| Conduct technical assessment | I | I | C | A/R | I | R | I |
| Review and validate findings | A | C | C | R | C | I | I |
| Develop remediation plans | C | A | R | C | I | I | I |
| Implement remediation actions | I | A | R | C | I | I | I |
| Verify remediation effectiveness | C | I | I | R | A | C | I |
| Approve and sign off assessment report | A | C | I | C | C | I | I |
| Escalate critical / high findings | R | A | I | C | I | I | I |
| Report to Technology Risk Committee | R | C | I | C | A | I | I |
| Retain assessment records | R | I | I | C | C | I | A |
| Coordinate with BNM (if required) | C | A | I | C | C | I | R |

### 7.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Head of Technology Risk (Owner) | [Name] | Technology Risk | [Email / Extension] |
| CISO | [Name] | Information Security | [Email / Extension] |
| API Security Lead | [Name] | IT Security | [Email / Extension] |
| Lead Assessor | [Name] | [Internal / External] | [Email / Extension] |
| Internal Audit Representative | [Name] | Internal Audit | [Email / Extension] |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [Date] | [Author Name] | Initial draft |
| 0.2 | [Date] | [Author Name] | Incorporated review comments from [Reviewer] |
| 0.3 | [Date] | [Author Name] | Final revisions prior to approval |
| 1.0 | [Date] | [Author Name] | Approved and issued |

### 8.2 Report Sign-Off

*This report requires formal sign-off from the following authorized personnel before it is considered final and may be submitted to the Technology Risk Committee or retained for regulatory purposes.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Lead Assessor** | [Name] | _________________________ | [Date] |
| **IT Security Manager** | [Name] | _________________________ | [Date] |
| **Head of Technology Risk** | [Name] | _________________________ | [Date] |
| **CISO / CTO** | [Name] | _________________________ | [Date] |
| **Internal Audit Representative** | [Name] | _________________________ | [Date] |

### 8.3 Distribution List

*This report is classified as **Confidential** and must only be distributed to the following roles. Recipients must not forward this document without prior written approval from the Head of Technology Risk.*

| Recipient | Role | Date Distributed |
|---|---|---|
| [Name] | Technology Risk Committee | [Date] |
| [Name] | CISO | [Date] |
| [Name] | Internal Audit | [Date] |
| [Name] | Head of Technology Risk | [Date] |
| [Name] | [Other authorized recipient] | [Date] |

---

## 9. References

### 9.1 Regulatory References

| Reference | Title | Relevant Clause(s) | Issuing Authority |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 12.3** — API Security | Bank Negara Malaysia |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10 — Cybersecurity | Bank Negara Malaysia |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11 — Cloud Services (if applicable) | Bank Negara Malaysia |
| PDPA 2010 | Personal Data Protection Act 2010 | Sections 5–7 — Security and Data Handling | Government of Malaysia |
| FSA 2013 | Financial Services Act 2013 | Section 47 — Technology Risk | Government of Malaysia |
| IFSA 2013 | Islamic Financial Services Act 2013 | Section 57 — Technology Risk | Government of Malaysia |

### 9.2 Industry Standards and Frameworks

| Standard | Title | Relevant Section(s) |
|---|---|---|
| OWASP API Security Top 10 | OWASP API Security Top 10 (latest edition) | All categories |
| NIST SP 800-95 | Guide to Secure Web Services | All sections |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A — Controls |
| ISO/IEC 27002:2022 | Information Security Controls | 8.24 — Use of cryptography; 5.15 — Access control |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | Req. 6.2, 6.3 (if applicable) |

### 9.3 Internal Policy References

| Document | Version | Owner |
|---|---|---|
| [Organization Name] API Security Policy | [Version] | Head of Technology Risk |
| [Organization Name] Information Security Policy | [Version] | CISO |
| [Organization Name] Technology Risk Management Framework | [Version] | Head of Technology Risk |
| [Organization Name] Vulnerability Management Procedure | [Version] | IT Security Team |
| [Organization Name] Third-Party Risk Management Policy | [Version] | Head of Technology Risk |

---

## 10. Appendices

### Appendix A — API Inventory (Full List)

*Attach or reference the complete API inventory as at the assessment date, including all in-scope and out-of-scope APIs. The inventory should include API name, version, owner, business function, authentication method, and classification.*

> **Reference:** [Link to API Inventory Register in [CMDB / API Gateway Portal / SharePoint]] or attach as a separate controlled document.

| API Name | Version | Owner | Business Function | Authentication | Data Classification | Environment | Status |
|---|---|---|---|---|---|---|---|
| [API Name] | [Version] | [Owner] | [Function] | [OAuth 2.0 / API Key / mTLS] | [Public / Internal / Confidential] | [Prod / UAT] | [Active / Deprecated] |

### Appendix B — Detailed Technical Test Results

*Attach raw output from automated scanning tools and manual testing scripts. Each artifact should be labeled with the tool name, version, date of execution, and the API tested.*

> **Evidence Reference:** EVD-001 through EVD-006 (see Section 5.3). Stored at [Secure Repository Path / SharePoint Location].

- [ ] Automated vulnerability scan output — [Tool Name] — [Date]
- [ ] Manual penetration test working notes — [Date]
- [ ] TLS/SSL configuration analysis — [Date]
- [ ] Authentication testing results — [Date]

### Appendix C — Remediation Action Plan

*A formal, time-bound remediation action plan should be extracted from Section 6 and maintained as a living document updated monthly until all findings are closed.*

| Finding ID | Severity | Remediation Action | Owner | Start Date | Target Date | Status | Completion Date |
|---|---|---|---|---|---|---|---|
| F-001 | [Severity] | [Action] | [Owner] | [Date] | [Date] | [Status] | [Date] |
| F-002 | [Severity] | [Action] | [Owner] | [Date] | [Date] | [Status] | [Date] |

### Appendix D — Risk Acceptance Register (If Applicable)

*Where findings cannot be remediated within the required timeframe, a formal risk acceptance must be documented, approved, and retained.*

| Finding ID | Severity | Reason for Acceptance | Risk Owner | Approval Authority | Approval Date | Review Date |
|---|---|---|---|---|---|---|
| [F-00X] | [Severity] | [Justification for accepting risk rather than remediating] | [Name / Role] | [Head of Technology Risk / CISO] | [Date] | [Date] |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **API** | Application Programming Interface — a set of defined rules enabling communication between software systems. |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document. |
| **mTLS** | Mutual Transport Layer Security — a protocol where both client and server authenticate each other. |
| **OAuth 2.0** | Open Authorization 2.0 — an industry-standard protocol for authorization. |
| **OWASP** | Open Web Application Security Project — a nonprofit foundation producing security resources. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |
| **SAST** | Static Application Security Testing — analysis of source code for security vulnerabilities. |
| **DAST** | Dynamic Application Security Testing — testing of running applications for security vulnerabilities. |
| **TRM** | Technology Risk Management. |
| **[Add additional terms as required]** | [Definition] |

---

*End of Document*

---

**Document Control Notice:** This document is subject to the document control procedures of [Organization Name]. The master copy is maintained by the Head of Technology Risk. Printed copies are uncontrolled. Always verify you are using the current version before relying on this document for regulatory or audit purposes.