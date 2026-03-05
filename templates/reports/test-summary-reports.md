# Test Summary Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorized personnel and must not be disclosed to any third party without prior written approval. Unauthorized disclosure may constitute a breach of applicable laws, including the Personal Data Protection Act 2010 (PDPA).

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

*This section defines the intent of the document and its regulatory basis. Briefly describe why the report exists and what compliance obligation it fulfils.*

This Test Summary Report documents the outcomes of technology-related testing activities conducted by [Organization Name] in accordance with the Bank Negara Malaysia (BNM) **Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 10.8**. The report consolidates test results, findings, risk ratings, and approval decisions to provide assurance that technology systems, controls, and processes meet the required standards before deployment or continued operation.

This document serves as an authoritative record supporting the institution's Technology Risk Management (TRM) framework and is intended for review by senior management, the Board Risk Committee, and relevant regulatory bodies upon request.

### 1.2 Scope

*Define the boundaries of this report — which systems, environments, testing types, and time periods are covered.*

| Scope Element | Details |
|---|---|
| **Systems / Applications in Scope** | [List system names, e.g., Core Banking System, Internet Banking Portal] |
| **Environments Tested** | [e.g., User Acceptance Testing (UAT), Pre-Production, Production] |
| **Testing Types Covered** | [e.g., Functional, Security, Performance, Penetration, Regression] |
| **Reporting Period** | [Start Date] to [End Date] |
| **Business Units Involved** | [e.g., IT, Operations, Risk Management, Compliance] |
| **Geographic Coverage** | [e.g., Malaysia — All Branches / Head Office Only] |

### 1.3 Out of Scope

*Explicitly state what has been excluded from this report to prevent misinterpretation.*

The following are explicitly excluded from this report:

- [Excluded system or environment, e.g., Disaster Recovery (DR) environment testing — covered in separate DR Test Report]
- [Excluded test type, e.g., Third-party vendor systems not hosted by [Organization Name]]
- [Any other exclusion with justification]

---

## 2. Executive Summary

*Provide a concise, non-technical overview of the testing exercise, overall outcome, and key decisions. This section should be comprehensible to senior management and Board members. Limit to one page.*

### 2.1 Overview

[Organization Name] conducted [describe testing exercise, e.g., a comprehensive User Acceptance Testing (UAT) and security assessment] of [System/Application Name] during the period [Start Date] to [End Date]. The testing was performed by [Internal QA Team / External Vendor Name] under the oversight of the QA Lead and Technology Risk function.

### 2.2 Overall Test Outcome

| Metric | Result |
|---|---|
| **Overall Test Status** | [PASS / FAIL / CONDITIONAL PASS] |
| **Total Test Cases Executed** | [Number] |
| **Test Cases Passed** | [Number] ([%]) |
| **Test Cases Failed** | [Number] ([%]) |
| **Defects Identified** | [Number] |
| **Critical / High Defects Resolved** | [Number] ([%]) |
| **Outstanding Defects (Non-Critical)** | [Number] |
| **Approval Decision** | [Approved for Deployment / Approved with Conditions / Not Approved] |

### 2.3 Key Highlights

- **Strengths:** [Summarise areas where the system performed well, e.g., All critical payment processing functions passed with zero defects.]
- **Concerns:** [Summarise primary areas of concern, e.g., Two high-severity vulnerabilities identified in session management require remediation within 30 days.]
- **Approval Conditions:** [State any conditions attached to approval, if applicable, e.g., Deployment approved subject to resolution of Findings F-003 and F-007 prior to go-live.]

### 2.4 Certification Statement

> The undersigned confirms that the testing activities described in this report were conducted in accordance with [Organization Name]'s approved Test Plan [Reference: Test Plan ID], RMiT Clause 10.8 requirements, and industry best practices. The results accurately reflect the state of the system as tested.

**QA Lead:** _________________________________ **Date:** _____________

---

## 3. Scope and Methodology

### 3.1 Test Objectives

*State the specific objectives this testing exercise was designed to achieve.*

The testing exercise was designed to achieve the following objectives:

1. Validate that [System/Application Name] meets all defined functional requirements as documented in [Business Requirements Document / Functional Specification Reference].
2. Assess the security posture of the system in accordance with BNM RMiT Clause 10.8 and [Organization Name]'s Information Security Policy.
3. Verify system performance under expected and peak load conditions.
4. Confirm that all previously identified defects from [prior test cycle / version] have been adequately remediated.
5. Provide assurance to management and the Board that the system is fit for [deployment / continued operation].

### 3.2 Testing Types and Approach

*Describe each type of testing conducted, the approach taken, and the tools or standards used.*

| Testing Type | Approach | Tools / Standards Used | Conducted By |
|---|---|---|---|
| Functional Testing | Black-box testing against test scripts derived from functional specifications | [e.g., JIRA, HP ALM] | [Team / Vendor] |
| Security / Penetration Testing | OWASP Top 10, SANS Top 25; automated and manual testing | [e.g., Burp Suite, Nessus] | [Team / Vendor] |
| Performance / Load Testing | Simulated peak load at [X]% above projected maximum concurrent users | [e.g., Apache JMeter, Gatling] | [Team / Vendor] |
| Regression Testing | Re-execution of full baseline test suite to confirm no regression | [e.g., Selenium, Postman] | [Team / Vendor] |
| User Acceptance Testing (UAT) | Business users validated end-to-end scenarios against acceptance criteria | Manual, business-led | [Business Unit] |
| Vulnerability Assessment | Automated scan of infrastructure and application layers | [e.g., Qualys, Tenable.io] | [Team / Vendor] |

### 3.3 Test Environment

| Parameter | Details |
|---|---|
| **Environment Name** | [e.g., UAT / Pre-Production] |
| **Infrastructure** | [e.g., On-premise / Cloud — AWS ap-southeast-1] |
| **Application Version Tested** | [Version Number / Build Number] |
| **Database Version** | [e.g., Oracle 19c, PostgreSQL 14] |
| **Network Configuration** | [e.g., Isolated test network mirroring production topology] |
| **Data Used** | [e.g., Anonymised production data / Synthetic test data] |
| **Test Period** | [Start Date] to [End Date] |

### 3.4 Test Entry and Exit Criteria

**Entry Criteria (conditions required before testing commenced):**

- [ ] Test environment deployed and verified as stable
- [ ] Application build [Version/Build Number] successfully deployed to test environment
- [ ] Test data prepared and validated
- [ ] Test plan and test scripts reviewed and approved by QA Lead
- [ ] All prerequisite dependencies (interfaces, stubs, simulators) confirmed operational

**Exit Criteria (conditions required before testing was considered complete):**

- [ ] All planned test cases executed
- [ ] Pass rate of ≥ [e.g., 95]% achieved for functional test cases
- [ ] Zero unresolved Critical or High severity defects
- [ ] All UAT acceptance criteria signed off by business owners
- [ ] Security findings reviewed and remediation plan agreed

### 3.5 Assumptions and Constraints

*Document any assumptions made or constraints encountered that may have affected the completeness or accuracy of testing.*

| # | Assumption / Constraint | Impact |
|---|---|---|
| 1 | [e.g., Test environment was not a full replica of production hardware] | [e.g., Performance results may not fully reflect production behaviour] |
| 2 | [e.g., Third-party payment gateway was simulated via stub] | [e.g., Live integration testing deferred to post-deployment monitoring] |
| 3 | [Add as required] | |

---

## 4. Key Findings and Observations

*Document all findings identified during testing. Each finding must be uniquely identified, categorised, and tracked to resolution. Include all severities.*

### 4.1 Summary of Findings

| Severity | Count | Resolved | Outstanding |
|---|---|---|---|
| **Critical** | [#] | [#] | [#] |
| **High** | [#] | [#] | [#] |
| **Medium** | [#] | [#] | [#] |
| **Low** | [#] | [#] | [#] |
| **Informational** | [#] | [#] | [#] |
| **Total** | [#] | [#] | [#] |

### 4.2 Detailed Findings Register

*Each finding must be documented with sufficient detail to enable independent review and verification of remediation.*

---

**Finding ID:** F-001
**Severity:** [Critical / High / Medium / Low / Informational]
**Category:** [e.g., Security / Functional / Performance / Configuration]
**System / Component Affected:** [e.g., Internet Banking — Login Module]
**Date Identified:** [Date]
**Identified By:** [Tester Name / Tool]

**Description:**
[Provide a clear, factual description of the finding. Include the observed behaviour, the expected behaviour, and any relevant technical details.]

**Evidence / Reproduction Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Risk / Impact:**
[Describe the potential business, regulatory, or security impact if this finding is not remediated.]

**Status:** [Open / In Progress / Resolved / Risk Accepted]
**Resolution / Remediation:** [Describe the fix applied or planned, including the build/version in which it was resolved.]
**Resolution Date:** [Date / Target Date]
**Verified By:** [Name, Date of verification]

---

**Finding ID:** F-002
**Severity:** [Critical / High / Medium / Low / Informational]
**Category:** [e.g., Security / Functional / Performance / Configuration]
**System / Component Affected:** [System/Component]
**Date Identified:** [Date]
**Identified By:** [Tester Name / Tool]

**Description:**
[Description of finding]

**Evidence / Reproduction Steps:**
1. [Step 1]
2. [Step 2]

**Risk / Impact:**
[Impact description]

**Status:** [Open / In Progress / Resolved / Risk Accepted]
**Resolution / Remediation:** [Resolution details]
**Resolution Date:** [Date / Target Date]
**Verified By:** [Name, Date]

---

*[Replicate the above block for each additional finding. Minimum one block per finding. All Critical and High findings must include evidence.]*

### 4.3 Observations and Notable Positives

*Record noteworthy observations that do not constitute defects but are relevant to risk management or future improvement. Also record positive observations to provide a balanced view.*

| # | Observation | Category | Recommendation |
|---|---|---|---|
| O-001 | [e.g., Audit logging is comprehensive and exceeds minimum RMiT requirements] | Positive | [e.g., Maintain current logging standards in future releases] |
| O-002 | [e.g., Error messages returned to end users contain verbose stack trace information] | Security | [e.g., Suppress technical error details in production error handling] |
| O-003 | [Add as required] | | |

---

## 5. Risk Ratings and Prioritisation

### 5.1 Risk Rating Methodology

*Explain the risk rating framework applied to classify findings. Reference the organization's internal methodology and any regulatory guidance.*

Findings were rated using [Organization Name]'s Technology Risk Rating Matrix, aligned with BNM RMiT requirements and industry standards (e.g., CVSS v3.1 for security vulnerabilities). Ratings are determined by assessing:

- **Likelihood:** Probability that the finding could be exploited or cause failure
- **Impact:** Consequence to the institution's operations, customers, regulatory standing, or financial position

| Severity | Likelihood | Impact | Required Remediation Timeframe |
|---|---|---|---|
| **Critical** | High | Critical / Catastrophic | Immediate — prior to deployment or within 24 hours if in production |
| **High** | High / Medium | Major | Within [e.g., 7] calendar days |
| **Medium** | Medium | Moderate | Within [e.g., 30] calendar days |
| **Low** | Low | Minor | Within [e.g., 90] calendar days or next release |
| **Informational** | Low | Negligible | Best effort / next major release |

### 5.2 Risk Heat Map

*Provide a visual risk distribution of all findings by severity and category to assist management in prioritising remediation resources.*

| Category | Critical | High | Medium | Low | Informational |
|---|---|---|---|---|---|
| Security | [#] | [#] | [#] | [#] | [#] |
| Functional | [#] | [#] | [#] | [#] | [#] |
| Performance | [#] | [#] | [#] | [#] | [#] |
| Configuration | [#] | [#] | [#] | [#] | [#] |
| Compliance | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

### 5.3 Residual Risk Assessment

*Assess the residual risk remaining after remediation of resolved findings and agreed treatment of outstanding findings.*

| Finding ID | Residual Risk | Risk Treatment | Risk Owner | Accepted By |
|---|---|---|---|---|
| F-001 | [Low / Medium / High] | [Mitigated / Accepted / Transferred] | [Role / Name] | [Name, Date] |
| F-002 | [Low / Medium / High] | [Mitigated / Accepted / Transferred] | [Role / Name] | [Name, Date] |
| [Add rows as required] | | | | |

**Overall Residual Risk Rating:** [Low / Medium / High / Critical]

> **Note:** Any residual risk rated **High** or above must be formally accepted by the Chief Risk Officer (CRO) or Chief Technology Officer (CTO) and reported to the Board Risk Committee within [e.g., 5 business days].

---

## 6. Recommendations and Action Items

*Provide actionable, prioritised recommendations to address findings and improve the overall technology risk posture. Each recommendation must be linked to one or more findings and assigned a clear owner and target date.*

### 6.1 Prioritised Recommendations

| Rec. ID | Priority | Recommendation | Linked Finding(s) | Assigned To | Target Date | Status |
|---|---|---|---|---|---|---|
| R-001 | Critical | [e.g., Implement multi-factor authentication for all privileged administrative accounts before go-live] | F-001 | [Role / Name] | [Date] | [Open / In Progress / Completed] |
| R-002 | High | [e.g., Patch identified SQL injection vulnerability in the customer search API endpoint] | F-002, F-005 | [Role / Name] | [Date] | [Open / In Progress / Completed] |
| R-003 | High | [e.g., Update session timeout configuration to enforce maximum idle period of 10 minutes for internet banking sessions] | F-003 | [Role / Name] | [Date] | [Open / In Progress / Completed] |
| R-004 | Medium | [e.g., Suppress verbose error messages in production error handling to prevent information disclosure] | O-002 | [Role / Name] | [Date] | [Open / In Progress / Completed] |
| R-005 | Low | [e.g., Review and update password complexity policy to align with latest BNM RMiT guidance] | F-010 | [Role / Name] | [Date] | [Open / In Progress / Completed] |
| [Add rows as required] | | | | | | |

### 6.2 Strategic Recommendations

*Provide broader, forward-looking recommendations that go beyond immediate defect remediation to strengthen the institution's technology risk management capability.*

1. **[Strategic Recommendation Title]:** [e.g., Establish a continuous automated security scanning pipeline within the CI/CD process to detect vulnerabilities earlier in the development lifecycle, reducing the volume and severity of findings reaching UAT.] — *Responsible: [CTO / Head of IT / DevSecOps Lead]*

2. **[Strategic Recommendation Title]:** [e.g., Conduct annual penetration testing of all Tier 1 applications by an independent, BNM-accredited third-party vendor, with results reported directly to the Board Risk Committee.] — *Responsible: [CISO / Head of Technology Risk]*

3. **[Strategic Recommendation Title]:** [Add further strategic recommendations as appropriate] — *Responsible: [Role]*

---

## 7. Management Response

*This section records the formal response of management to the findings and recommendations in this report. Responses must be provided by the accountable system or business owner and reviewed by the QA Lead and Technology Risk function.*

### 7.1 Management Response Summary

*Management should provide a clear, unambiguous response to each recommendation, committing to either accept and implement, accept with modification, or formally accept the risk with rationale.*

| Rec. ID | Management Response | Action Committed | Revised Target Date (if applicable) | Responding Manager | Response Date |
|---|---|---|---|---|---|
| R-001 | [Accepted / Accepted with Modification / Risk Accepted] | [Description of committed action] | [Date] | [Name, Role] | [Date] |
| R-002 | [Accepted / Accepted with Modification / Risk Accepted] | [Description of committed action] | [Date] | [Name, Role] | [Date] |
| R-003 | [Accepted / Accepted with Modification / Risk Accepted] | [Description of committed action] | [Date] | [Name, Role] | [Date] |
| R-004 | [Accepted / Accepted with Modification / Risk Accepted] | [Description of committed action] | [Date] | [Name, Role] | [Date] |
| R-005 | [Accepted / Accepted with Modification / Risk Accepted] | [Description of committed action] | [Date] | [Name, Role] | [Date] |

### 7.2 Risk Acceptance Declarations

*Any finding or recommendation where management elects to formally accept the residual risk rather than implement remediation must be documented here with full justification. Risk acceptance is subject to approval thresholds defined in [Organization Name]'s Risk Appetite Statement.*

---

**Risk Acceptance Reference:** RA-[001]
**Related Finding / Recommendation:** [F-XXX / R-XXX]
**Risk Accepted:** [Describe the specific risk being accepted]
**Justification:** [Provide business rationale for risk acceptance, including cost-benefit analysis if applicable]
**Compensating Controls in Place:** [Describe any compensating controls that reduce the likelihood or impact of the risk]
**Risk Acceptance Level:** [Medium / High / Critical]
**Accepted By:** _________________________________ **Role:** _________________ **Date:** _____________
**Approval Authority:** _________________________________ **Role:** _________________ **Date:** _____________
**Review Date:** [Date on which this risk acceptance must be reviewed]

---

*[Replicate the above block for each additional risk acceptance declaration.]*

### 7.3 Follow-Up and Tracking

All open action items from this report will be tracked via [Organization Name]'s [Issue Tracking System, e.g., JIRA / ServiceNow] under project [Project Reference]. Progress will be reviewed at the [frequency, e.g., monthly] Technology Risk Committee meeting. The QA Lead is responsible for verifying completion of all remediation actions and updating this report accordingly.

| Tracking Reference | System | Review Cadence | Escalation Path |
|---|---|---|---|
| [Project / Ticket Reference] | [e.g., JIRA Board: SEC-UAT-2024] | [e.g., Monthly] | QA Lead → CISO → CRO |

---

## 8. Roles and Responsibilities

*This section defines accountability for the preparation, execution, review, and approval of this Test Summary Report in accordance with BNM RMiT requirements.*

### 8.1 RACI Matrix

| Activity | QA Lead | IT / Dev Team | Technology Risk | Business Owner | CISO | CTO / CIO | Board Risk Committee |
|---|---|---|---|---|---|---|---|
| Define test scope and objectives | A/R | C | C | C | I | I | I |
| Prepare and approve test plan | A/R | C | C | I | C | I | I |
| Execute test cases | I | R | I | I | I | I | I |
| Document findings | R | C | I | I | I | I | I |
| Assign risk ratings to findings | A/R | I | C | I | C | I | I |
| Develop recommendations | A/R | C | C | C | C | I | I |
| Provide management response | I | C | C | A/R | C | C | I |
| Formal risk acceptance (High/Critical) | I | I | C | C | C | A/R | I |
| Review and approve this report | I | I | C | C | I | A/R | I |
| Report to Board Risk Committee | I | I | C | I | I | R | A |
| Track remediation to closure | A/R | C | C | C | I | I | I |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 8.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| **QA Lead (Document Owner)** | [Name] | [Department] | [Email] |
| **Technology Risk Manager** | [Name] | Technology Risk | [Email] |
| **System / Application Owner** | [Name] | [Business Unit] | [Email] |
| **Chief Information Security Officer (CISO)** | [Name] | Information Security | [Email] |
| **Chief Technology Officer (CTO)** | [Name] | Technology | [Email] |
| **Lead Tester / Test Manager** | [Name] | [QA / Vendor] | [Email] |
| **External Testing Vendor (if applicable)** | [Name] | [Vendor Organization] | [Email] |

---

## 9. Review and Approval

### 9.1 Document Version History

| Version | Date | Author | Description of Changes | Reviewed By |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | Initial draft | [Reviewer Name] |
| 0.2 | [Date] | [Author Name] | Incorporated review comments from Technology Risk | [Reviewer Name] |
| 1.0 | [Date] | [Author Name] | Final version approved for issue | [Approver Name] |
| [1.x] | [Date] | [Author Name] | [Description of subsequent amendments] | [Reviewer Name] |

### 9.2 Review Schedule

This document is subject to **quarterly review** or upon occurrence of any of the following trigger events:

- Completion of a major testing exercise for a Tier 1 or Tier 2 system
- Identification of Critical or High severity findings requiring escalation
- Changes to BNM RMiT requirements or related regulatory guidance
- Material changes to [Organization Name]'s technology risk appetite or testing methodology
- Direction from the Board Risk Committee or senior management

### 9.3 Approval Sign-Off

*All individuals listed below confirm that they have reviewed this document and that its contents are accurate, complete, and approved for issue.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **QA Lead (Author / Document Owner)** | [Name] | _________________________ | [Date] |
| **Technology Risk Manager (Reviewer)** | [Name] | _________________________ | [Date] |
| **System / Application Owner (Reviewer)** | [Name] | _________________________ | [Date] |
| **Chief Information Security Officer (Reviewer)** | [Name] | _________________________ | [Date] |
| **Chief Technology Officer (Final Approver)** | [Name] | _________________________ | [Date] |

> By signing above, the approver confirms that the testing activities described herein were conducted in accordance with [Organization Name]'s approved testing methodology, BNM RMiT Clause 10.8, and applicable regulatory requirements.

---

## 10. References

*This section lists all regulatory, policy, and standards references applicable to this document.*

### 10.1 Regulatory References

| Reference | Document | Clause / Section | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 10.8** | Primary regulatory basis for technology testing requirements, test documentation, and reporting obligations |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.1–10.7 | Broader technology risk management context for testing activities |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11 | Technology service provider and outsourcing testing requirements |
| PDPA 2010 | Personal Data Protection Act 2010 | Sections 9–10 | Data protection obligations applicable to test data handling |
| FSA 2013 | Financial Services Act 2013 | Section 57 | BNM's authority to issue and enforce technology-related policies |

### 10.2 Internal Policy References

| Reference ID | Document Title | Owner | Version |
|---|---|---|---|
| [POL-IT-001] | Information Technology Security Policy | CISO | [Version] |
| [POL-TRM-001] | Technology Risk Management Framework | Technology Risk | [Version] |
| [POL-QA-001] | Quality Assurance and Testing Policy | QA Lead | [Version] |
| [STD-SEC-001] | Application Security Testing Standard | CISO | [Version] |
| [PROC-QA-001] | Test Plan and Test Management Procedure | QA Lead | [Version] |

### 10.3 Standards and Frameworks Referenced

- OWASP Testing Guide v4.2 (Web Application Security Testing)
- NIST SP 800-115 (Technical Guide to Information Security Testing and Assessment)
- ISO/IEC 29119 (Software Testing Standard)
- CVSS v3.1 (Common Vulnerability Scoring System — severity rating)
- PTES (Penetration Testing Execution Standard)

---

## 11. Appendices

*Supporting documentation and detailed evidence referenced in the body of this report. All appendices must be retained as part of the official test record for a minimum of [e.g., 7] years in accordance with [Organization Name]'s Records Retention Policy [Reference: POL-REC-001] and BNM record-keeping requirements.*

---

### Appendix A — Test Plan Reference

*[Attach or reference the approved Test Plan that governed this testing exercise.]*

| Field | Detail |
|---|---|
| **Test Plan Document ID** | [Document ID] |
| **Test Plan Version** | [Version] |
| **Test Plan Approved By** | [Name, Role] |
| **Test Plan Approval Date** | [Date] |
| **Location** | [Document Management System path / SharePoint URL] |

---

### Appendix B — Test Case Execution Summary

*[Provide a complete listing of all test cases executed, or reference the test management system report. The table below is a representative summary — attach full report as a separate file if volume exceeds 20 test cases.]*

| Test Case ID | Test Case Description | Module / Feature | Priority | Expected Result | Actual Result | Status | Defect ID (if failed) |
|---|---|---|---|---|---|---|---|
| TC-001 | [e.g., Verify successful login with valid credentials] | Authentication | High | [Expected] | [Actual] | Pass / Fail | — |
| TC-002 | [e.g., Verify account lockout after 5 failed login attempts] | Authentication | High | [Expected] | [Actual] | Pass / Fail | [F-001] |
| TC-003 | [Add rows as required] | | | | | | |

**Full test execution report available at:** [Document Management System path / JIRA export reference]

---

### Appendix C — Defect Log

*[Provide a complete defect log or reference the issue tracking system. Summarised here; full log available in [JIRA / ServiceNow / tracking system].]*

| Defect ID | Severity | Summary | Module | Date Raised | Assigned To | Status | Fix Version | Verified By |
|---|---|---|---|---|---|---|---|---|
| F-001 | [Critical/High/Med/Low] | [Defect summary] | [Module] | [Date] | [Name] | [Open/Resolved] | [Version] | [Name] |
| F-002 | [Critical/High/Med/Low] | [Defect summary] | [Module] | [Date] | [Name] | [Open/Resolved] | [Version] | [Name] |
| [Add rows as required] | | | | | | | | |

**Full defect log available at:** [Issue Tracking System URL / Export Reference]

---

### Appendix D — Security Testing Evidence

*[Summarise or reference security testing artefacts. Detailed penetration test reports, vulnerability scan outputs, and CVSS scoring sheets should be attached or referenced here. These documents are classified Confidential and should be distributed on a need-to-know basis.]*

| Evidence Item | Description | Tool / Source | Date Generated | Location |
|---|---|---|---|---|
| Penetration Test Report | Full narrative report from external penetration testing | [Vendor Name] | [Date] | [Location] |
| Vulnerability Scan Report | Automated vulnerability scan output — application layer | [e.g., Nessus / Qualys] | [Date] | [Location] |
| Vulnerability Scan Report | Automated vulnerability scan output — infrastructure layer | [e.g., Qualys] | [Date] | [Location] |
| CVSS Score Sheet | CVSS v3.1 scoring for all security findings | Internal / [Vendor] | [Date] | [Location] |
| Screenshots / Proof of Concept | Evidence for Critical and High findings | Manual capture | [Date] | [Location] |

---

### Appendix E — Performance Test Results

*[Attach or reference detailed performance and load test results, including response time graphs, throughput metrics, and resource utilisation data.]*

| Performance Metric | Target / SLA | Result | Status |
|---|---|---|---|
| Average Response Time (normal load) | ≤ [e.g., 2 seconds] | [Actual] | [Pass / Fail] |
| Average Response Time (peak load) | ≤ [e.g., 5 seconds] | [Actual] | [Pass / Fail] |
| Maximum Concurrent Users Supported | ≥ [e.g., 5,000] | [Actual] | [Pass / Fail] |
| Transaction Throughput (TPS) | ≥ [e.g., 500 TPS] | [Actual] | [Pass / Fail] |
| Error Rate Under Peak Load | ≤ [e.g., 0.1%] | [Actual] | [Pass / Fail] |
| CPU Utilisation (peak) | ≤ [e.g., 80%] | [Actual] | [Pass / Fail] |
| Memory Utilisation (peak) | ≤ [e.g., 75%] | [Actual] | [Pass / Fail] |

**Detailed performance test report available at:** [Location]

---

### Appendix F — UAT Sign-Off Records

*[Attach signed UAT acceptance forms from business users confirming that user acceptance criteria have been met.]*

| Business Unit | UAT Scenario(s) Accepted | Business User Name | Signature | Date |
|---|---|---|---|---|
| [e.g., Retail Banking Operations] | [Scenario IDs, e.g., UAT-001 to UAT-015] | [Name] | _____________ | [Date] |
| [e.g., Compliance] | [Scenario IDs] | [Name] | _____________ | [Date] |
| [e.g., Finance] | [Scenario IDs] | [Name] | _____________ | [Date] |

---

### Appendix G — Regulatory Checklist

*[Confirm compliance with specific BNM RMiT Clause 10.8 requirements through a structured checklist.]*

| RMiT Requirement | Clause | Addressed in This Report | Section Reference | Notes |
|---|---|---|---|---|
| Technology testing requirements are documented and approved prior to testing | 10.8 | Yes / No / Partial | Section 3 | |
| Test scope covers security, functional, and performance dimensions | 10.8 | Yes / No / Partial | Section 3.2 | |
| Findings are risk-rated using an approved methodology | 10.8 | Yes / No / Partial | Section 5.1 | |
| Critical and High findings are escalated to senior management | 10.8 | Yes / No / Partial | Section 2, Section 5 | |
| Management has formally responded to all findings | 10.8 | Yes / No / Partial | Section 7 | |
| Test results are documented and retained for regulatory review | 10.8 | Yes / No / Partial | Section 9, Appendix B | |
| Testing conducted by personnel with appropriate competency | 10.8 | Yes / No / Partial | Section 3.2, Section 8 | |
| Approval decision is documented with rationale | 10.8 | Yes / No / Partial | Section 2.2 | |

---

*End of Document*

---

**Document Classification: Confidential**
*This document is the property of [Organization Name]. Unauthorised reproduction or distribution is strictly prohibited.*

*[Organization Name] | [Department] | Version 1.0 | [Effective Date]*