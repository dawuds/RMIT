# Test Plans and Results

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

> **Handling Instruction:** This document is classified **Confidential**. It must not be distributed outside [Organization Name] without prior written approval from the document owner. Physical and electronic copies must be stored in accordance with the organization's Information Security Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives and Scope of Testing](#2-objectives-and-scope-of-testing)
3. [Actions and Milestones](#3-actions-and-milestones)
4. [Accountable Owners](#4-accountable-owners)
5. [Target Completion Dates](#5-target-completion-dates)
6. [Resource Requirements](#6-resource-requirements)
7. [Progress Tracking Mechanism](#7-progress-tracking-mechanism)
8. [Test Execution Results](#8-test-execution-results)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

This document establishes the formal **Test Plan and Results** for [System / Project Name] at [Organization Name]. It provides a structured framework for planning, executing, and reviewing technology-related testing activities in compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.8**, which mandates that financial institutions maintain documented evidence of test plans and formally reviewed test execution results.

This template applies to all material technology systems, infrastructure changes, and application deployments within scope of the RMiT policy, including but not limited to:

- New system implementations and major upgrades
- Security vulnerability assessments and penetration testing
- Disaster recovery and business continuity testing
- User acceptance testing (UAT) for critical systems
- Regression and performance testing for production-impacting changes

**Out of Scope:** [Explicitly list any systems, environments, or test types excluded from this document, e.g., non-production sandbox environments with no path to production, minor configuration changes below the materiality threshold as defined in [Reference Policy].]

---

## 2. Objectives and Scope of Testing

*Describe the specific goals this test plan is designed to achieve and the boundaries of what will and will not be tested. Clearly articulate measurable success criteria.*

### 2.1 Testing Objectives

The primary objectives of this test plan are to:

- Verify that [System / Module Name] meets defined functional and non-functional requirements prior to deployment
- Confirm compliance with applicable regulatory and internal security controls as required under BNM RMiT Clause 10.8
- Identify and remediate defects, vulnerabilities, or performance bottlenecks before production release
- Provide documented, auditable evidence of test coverage and outcomes for regulatory inspection
- [Additional objective — e.g., validate data integrity after migration]

### 2.2 Scope of Testing

| Attribute | Details |
|---|---|
| **System / Application** | [System Name and Version] |
| **Test Environment** | [UAT / Staging / Pre-Production] |
| **Environment URL / Endpoint** | [Environment URL or IP Range] |
| **Data Classification** | [Anonymized Test Data / Synthetic Data / Production Subset — specify handling] |
| **Testing Types Included** | [Functional, Regression, Performance, Security, UAT, DR — select applicable] |
| **Testing Types Excluded** | [e.g., Load testing deferred to Phase 2] |
| **Geographic Scope** | [e.g., All branches / Head office systems only] |
| **Regulatory Scope** | BNM RMiT Clause 10.8; [Additional clauses if applicable] |

### 2.3 Entry and Exit Criteria

**Entry Criteria** (conditions that must be met before testing commences):

- [ ] Test environment is provisioned and stable
- [ ] Test data is prepared, anonymized, and approved for use
- [ ] System build [Version X.X] has been deployed to the test environment
- [ ] All high-priority defects from previous test cycles are resolved or risk-accepted
- [ ] Test cases have been reviewed and approved by [Approver Role]
- [ ] [Additional entry criterion]

**Exit Criteria** (conditions that must be met before testing is considered complete):

- [ ] [X]% of planned test cases executed (target: ≥ 95%)
- [ ] Zero open **Critical** or **High** severity defects
- [ ] All regulatory control test cases passed
- [ ] Test results formally reviewed and signed off by QA Lead and [Business Owner]
- [ ] Test completion report distributed to relevant stakeholders
- [ ] [Additional exit criterion]

---

## 3. Actions and Milestones

*List all discrete testing activities, phases, and key milestones in sequential order. Each action should be specific, measurable, and linked to an owner and a deadline.*

### 3.1 Test Phases and Activities

| # | Phase | Activity | Description | Owner | Status |
|---|---|---|---|---|---|
| 1 | **Preparation** | Test environment setup | Provision and validate the test environment, including data masking | [Infrastructure Lead] | [Not Started / In Progress / Complete] |
| 2 | **Preparation** | Test data preparation | Create and validate anonymized or synthetic test datasets | [Data Analyst / DBA] | [Status] |
| 3 | **Preparation** | Test case development | Author, peer-review, and baseline all test cases in [Test Management Tool] | [QA Engineer] | [Status] |
| 4 | **Preparation** | Test plan review and approval | Formal review and sign-off of this document | [QA Lead / IT Risk] | [Status] |
| 5 | **Execution** | Functional testing | Execute all functional test cases against defined requirements | [QA Team] | [Status] |
| 6 | **Execution** | Security / vulnerability testing | Conduct security assessment per RMiT Clause 10.8 controls | [Security Team / Vendor] | [Status] |
| 7 | **Execution** | Performance / load testing | Validate system performance under expected and peak load | [Performance Engineer] | [Status] |
| 8 | **Execution** | Regression testing | Confirm no existing functionality is degraded | [QA Team] | [Status] |
| 9 | **Execution** | User acceptance testing (UAT) | Business user validation of functional requirements | [Business Owner / Users] | [Status] |
| 10 | **Closure** | Defect resolution and retest | Track, remediate, and retest all identified defects | [Development Team / QA] | [Status] |
| 11 | **Closure** | Test results review | Formal review of all test execution results and evidence | [QA Lead / IT Risk] | [Status] |
| 12 | **Closure** | Test completion sign-off | Obtain formal approval for go-live recommendation | [Steering Committee] | [Status] |

### 3.2 Key Milestones

| Milestone | Target Date | Actual Date | Status |
|---|---|---|---|
| Test Plan Approved | [DD MMM YYYY] | [DD MMM YYYY] | [Status] |
| Test Environment Ready | [DD MMM YYYY] | [DD MMM YYYY] | [Status] |
| Test Execution Commenced | [DD MMM YYYY] | [DD MMM YYYY] | [Status] |
| All Test Cases Executed | [DD MMM YYYY] | [DD MMM YYYY] | [Status] |
| UAT Sign-Off Received | [DD MMM YYYY] | [DD MMM YYYY] | [Status] |
| Test Completion Report Issued | [DD MMM YYYY] | [DD MMM YYYY] | [Status] |
| Go-Live Recommendation Approved | [DD MMM YYYY] | [DD MMM YYYY] | [Status] |

---

## 4. Accountable Owners

*Identify every individual or team with a defined responsibility in this test plan. Ownership must be unambiguous — each activity has one accountable owner.*

### 4.1 Primary Stakeholders

| Role | Individual | Department | Contact | Responsibility |
|---|---|---|---|---|
| **QA Lead** | [Name] | [Department] | [Email] | Overall accountability for test plan and results |
| **Project Manager** | [Name] | [Department] | [Email] | Milestone tracking and escalation management |
| **System Owner** | [Name] | [Department] | [Email] | Business acceptance and requirements sign-off |
| **IT Risk Officer** | [Name] | IT Risk & Compliance | [Email] | Regulatory compliance review and attestation |
| **Security Lead** | [Name] | Information Security | [Email] | Security test design and results review |
| **Development Lead** | [Name] | [Department] | [Email] | Defect remediation and technical support |
| **DBA / Infrastructure** | [Name] | [Department] | [Email] | Environment provisioning and data management |
| **UAT Coordinator** | [Name] | [Business Unit] | [Email] | Coordination of business user testing |
| **External Vendor / Tester** | [Name / Company] | [N/A] | [Email] | [Specific scope — e.g., penetration testing] |

### 4.2 Escalation Path

| Escalation Level | Trigger Condition | Escalate To | Target Response Time |
|---|---|---|---|
| Level 1 | Blocked test activity, environment issues | QA Lead | 4 business hours |
| Level 2 | Critical defect, milestone at risk | Project Manager + IT Risk Officer | 1 business day |
| Level 3 | Go-live recommendation at risk, regulatory impact | [CTO / CISO / Risk Committee] | Immediate |

---

## 5. Target Completion Dates

*All dates in this section are binding commitments unless formally amended through the change control process. Any change to a target date must be documented in Section 10 (Version History).*

### 5.1 Master Schedule

| Activity | Planned Start | Planned End | Actual Start | Actual End | Variance (Days) |
|---|---|---|---|---|---|
| Test plan development and review | [DD MMM YYYY] | [DD MMM YYYY] | | | |
| Test environment provisioning | [DD MMM YYYY] | [DD MMM YYYY] | | | |
| Test case authoring | [DD MMM YYYY] | [DD MMM YYYY] | | | |
| Functional test execution | [DD MMM YYYY] | [DD MMM YYYY] | | | |
| Security test execution | [DD MMM YYYY] | [DD MMM YYYY] | | | |
| Performance test execution | [DD MMM YYYY] | [DD MMM YYYY] | | | |
| UAT execution | [DD MMM YYYY] | [DD MMM YYYY] | | | |
| Defect remediation window | [DD MMM YYYY] | [DD MMM YYYY] | | | |
| Final results review and sign-off | [DD MMM YYYY] | [DD MMM YYYY] | | | |
| Test completion report issued | [DD MMM YYYY] | [DD MMM YYYY] | | | |

### 5.2 Schedule Assumptions and Dependencies

- [Assumption 1 — e.g., Test environment will be available by [Date] as committed by Infrastructure team]
- [Assumption 2 — e.g., Business UAT testers are available for [X] days during the UAT window]
- [Dependency 1 — e.g., Completion of code freeze by Development team before functional testing begins]
- [Dependency 2 — e.g., Receipt of third-party penetration test report within [X] business days of engagement]

---

## 6. Resource Requirements

*Document all human, technical, financial, and tool-related resources required to execute this test plan. Unmet resource needs must be flagged as risks.*

### 6.1 Human Resources

| Resource Type | Role | Estimated Effort | Source | Availability Confirmed |
|---|---|---|---|---|
| QA Engineers | Test execution and defect management | [X] person-days | Internal | [Yes / No / Pending] |
| Business UAT Testers | User acceptance testing | [X] person-days | [Business Unit] | [Yes / No / Pending] |
| Security Tester | Penetration and vulnerability testing | [X] person-days | [Internal / Vendor Name] | [Yes / No / Pending] |
| DBA | Test data preparation and environment support | [X] person-days | Internal | [Yes / No / Pending] |
| Developer(s) | Defect remediation support | [X] person-days (buffer) | Internal | [Yes / No / Pending] |
| IT Risk Officer | Compliance review | [X] person-days | Internal | [Yes / No / Pending] |

### 6.2 Technical Resources

| Resource | Purpose | Provider | Provisioned |
|---|---|---|---|
| Test / UAT Environment | Isolated environment mirroring production | [Infrastructure Team] | [Yes / No] |
| Test Management Tool | Test case management and results tracking | [e.g., Jira / qTest / Azure DevOps] | [Yes / No] |
| Defect Tracking System | Defect logging, assignment, and closure | [e.g., Jira] | [Yes / No] |
| Performance Testing Tool | Load and stress simulation | [e.g., JMeter / k6] | [Yes / No] |
| Security Scanning Tool | Automated vulnerability scanning | [e.g., Nessus / Burp Suite] | [Yes / No] |
| Test Data Masking Tool | Anonymization of production data for testing | [Tool Name] | [Yes / No] |
| Collaboration / Reporting | Status reporting and document management | [e.g., Confluence / SharePoint] | [Yes / No] |

### 6.3 Budget

| Item | Estimated Cost (MYR) | Approved | Notes |
|---|---|---|---|
| External penetration testing engagement | [Amount] | [Yes / No] | Refer to PO [Reference] |
| Performance testing tool licensing | [Amount] | [Yes / No] | |
| Additional contractor resources | [Amount] | [Yes / No] | |
| **Total** | **[Total Amount]** | | |

### 6.4 Resource Risks

- **Risk:** [e.g., Key QA engineer unavailable due to leave] — **Mitigation:** [e.g., Cross-train backup resource]
- **Risk:** [e.g., Test environment provisioning delayed] — **Mitigation:** [e.g., Begin test case authoring in parallel; escalate to Infrastructure Lead]
- **Risk:** [e.g., Third-party vendor report delayed] — **Mitigation:** [e.g., Buffer period included in schedule; contractual SLA in place]

---

## 7. Progress Tracking Mechanism

*Define how progress will be monitored, reported, and escalated throughout the test execution lifecycle. All metrics must be captured in the referenced tracking tool.*

### 7.1 Tracking Cadence

| Meeting / Report | Frequency | Participants | Purpose |
|---|---|---|---|
| Daily Standup | Daily (during execution) | QA Team, Dev Lead | Execution status, blockers, defect triage |
| Test Progress Report | Weekly | QA Lead, PM, IT Risk | Milestone tracking, metrics review |
| Steering Update | [Bi-weekly / As needed] | Project Sponsor, CTO | Executive status, escalation decisions |
| Final Test Results Review | Once (at closure) | All stakeholders | Formal sign-off on results |

### 7.2 Key Metrics and Thresholds

| Metric | Target | Amber (At Risk) | Red (Escalate) | Current Value |
|---|---|---|---|---|
| Test cases executed (%) | ≥ 95% | 80–94% | < 80% | [X]% |
| Test cases passed (%) | ≥ 90% | 75–89% | < 75% | [X]% |
| Critical defects open | 0 | 1 | ≥ 2 | [X] |
| High defects open | 0 at go-live | 1–3 | > 3 | [X] |
| Schedule variance | 0 days | 1–5 days | > 5 days | [X] days |
| Defect resolution rate (%) | ≥ 80% | 60–79% | < 60% | [X]% |

### 7.3 Defect Classification

| Severity | Definition | Target Resolution Time |
|---|---|---|
| **Critical** | System crash, data loss, security breach, regulatory control failure | Same business day |
| **High** | Major functionality broken, no workaround available | 2 business days |
| **Medium** | Functionality impaired, workaround available | 5 business days |
| **Low** | Minor issue, cosmetic defect, documentation error | Next release cycle |

### 7.4 Progress Dashboard

*The live test execution dashboard is maintained in [Test Management Tool / Dashboard URL]. The QA Lead is responsible for ensuring the dashboard is updated no less than once per business day during active execution.*

Dashboard includes:
- Test case execution burn-down chart
- Defect age and severity distribution
- Milestone completion status (RAG rated)
- Outstanding blockers and risks log

---

## 8. Test Execution Results

*This section captures the formally reviewed outcomes of test execution. All results must be recorded in [Test Management Tool] and summarised here. This section constitutes the primary evidence record for BNM RMiT Clause 10.8 compliance.*

### 8.1 Execution Summary

| Test Type | Total Cases | Executed | Passed | Failed | Blocked | Pass Rate |
|---|---|---|---|---|---|---|
| Functional Testing | [X] | [X] | [X] | [X] | [X] | [X]% |
| Regression Testing | [X] | [X] | [X] | [X] | [X] | [X]% |
| Security / Vulnerability Testing | [X] | [X] | [X] | [X] | [X] | [X]% |
| Performance Testing | [X] | [X] | [X] | [X] | [X] | [X]% |
| User Acceptance Testing (UAT) | [X] | [X] | [X] | [X] | [X] | [X]% |
| **TOTAL** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]%** |

### 8.2 Defect Summary

| Defect ID | Title | Severity | Status | Owner | Resolution Date | Notes |
|---|---|---|---|---|---|---|
| [DEF-001] | [Brief description] | [Critical/High/Medium/Low] | [Open/Fixed/Closed/Risk Accepted] | [Name] | [Date] | |
| [DEF-002] | [Brief description] | | | | | |
| [DEF-003] | [Brief description] | | | | | |

### 8.3 Security Test Results

*Summarise findings from vulnerability assessments and penetration testing. Full reports must be retained as controlled evidence and referenced below.*

| Finding ID | Description | CVSS Score | Risk Rating | Remediation Status | Evidence Reference |
|---|---|---|---|---|---|
| [VULN-001] | [Description] | [X.X] | [Critical/High/Medium/Low] | [Remediated / Accepted / Deferred] | [Appendix X / Report Ref] |
| [VULN-002] | [Description] | | | | |

### 8.4 Performance Test Results

| Scenario | Metric | Target | Actual Result | Pass / Fail |
|---|---|---|---|---|
| Normal load ([X] concurrent users) | Response time (95th percentile) | ≤ [X] ms | [X] ms | [Pass / Fail] |
| Peak load ([X] concurrent users) | Response time (95th percentile) | ≤ [X] ms | [X] ms | [Pass / Fail] |
| Peak load ([X] concurrent users) | Error rate | ≤ [X]% | [X]% | [Pass / Fail] |
| Stress test ([X] concurrent users) | System stability | No crash | [Result] | [Pass / Fail] |
| [Additional scenario] | | | | |

### 8.5 Outstanding Issues and Risk Acceptance

*Any defects or findings not fully resolved prior to sign-off must be formally risk-accepted below.*

| Issue | Severity | Reason for Deferral | Risk Owner | Acceptance Date | Target Resolution |
|---|---|---|---|---|---|
| [Issue description] | [Medium/Low] | [Justification] | [Name / Role] | [Date] | [Target date or release] |

### 8.6 Overall Test Outcome

| Criterion | Target | Result | Met |
|---|---|---|---|
| Test case execution rate | ≥ 95% | [X]% | [Yes / No] |
| Test case pass rate | ≥ 90% | [X]% | [Yes / No] |
| Critical defects open | 0 | [X] | [Yes / No] |
| High defects open at go-live | 0 | [X] | [Yes / No] |
| Security findings remediated or accepted | 100% | [X]% | [Yes / No] |
| UAT sign-off received | Yes | [Yes / No] | [Yes / No] |

**Go-Live Recommendation:** [**APPROVED** / **CONDITIONALLY APPROVED** / **NOT APPROVED**]

*Rationale:* [Provide a concise statement justifying the recommendation, noting any conditions or outstanding items.]

---

## 9. Roles and Responsibilities

*The RACI matrix below defines participation levels for all activities within this document. Each activity has exactly one Accountable (A) party.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | QA Lead | QA Engineer | Project Manager | IT Risk Officer | Security Lead | Dev Lead | Business Owner | Steering Committee |
|---|---|---|---|---|---|---|---|---|
| Test plan authoring | A | R | C | C | C | C | I | I |
| Test plan approval | C | — | C | R | C | — | C | A |
| Test environment provisioning | I | R | C | — | — | A | — | — |
| Test data preparation | A | R | — | C | — | C | C | — |
| Test case authoring | A | R | — | C | C | C | C | — |
| Functional test execution | A | R | I | I | — | C | — | — |
| Security test execution | C | — | I | C | A | C | — | — |
| Performance test execution | A | R | I | I | — | C | — | — |
| UAT coordination | R | C | A | I | — | C | R | — |
| Defect triage and prioritisation | A | R | C | C | C | R | C | — |
| Defect remediation | I | C | I | — | C | A | — | — |
| Risk acceptance decisions | C | — | C | R | C | C | C | A |
| Test results review | A | R | C | R | R | C | C | — |
| Go-live recommendation | R | — | C | R | C | C | R | A |
| Regulatory evidence retention | A | — | — | R | — | — | — | — |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [DD MMM YYYY] | [Name] | Initial draft |
| 0.2 | [DD MMM YYYY] | [Name] | Incorporated review comments from IT Risk |
| 1.0 | [DD MMM YYYY] | [Name] | Approved for use; baseline established |

### 10.2 Formal Review Record

| Review Stage | Reviewer | Role | Review Date | Outcome |
|---|---|---|---|---|
| Technical Review | [Name] | QA Lead | [DD MMM YYYY] | [Approved / Approved with comments] |
| IT Risk Review | [Name] | IT Risk Officer | [DD MMM YYYY] | [Approved / Approved with comments] |
| Security Review | [Name] | Security Lead | [DD MMM YYYY] | [Approved / Approved with comments] |
| Business Review | [Name] | Business Owner | [DD MMM YYYY] | [Approved / Approved with comments] |

### 10.3 Approval Sign-Off

*By signing below, the approver confirms that this document has been reviewed, is accurate to the best of their knowledge, and authorises the activities and outcomes described herein.*

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead | [Name] | __________________ | [DD MMM YYYY] |
| IT Risk Officer | [Name] | __________________ | [DD MMM YYYY] |
| Project Manager | [Name] | __________________ | [DD MMM YYYY] |
| Business Owner | [Name] | __________________ | [DD MMM YYYY] |
| Chief Information Officer / CTO | [Name] | __________________ | [DD MMM YYYY] |

---

## 11. References

| Reference | Document / Clause | Description |
|---|---|---|
| **BNM RMiT** | Clause 10.8 | Test plans and formally reviewed test execution results; requirement for documented evidence of technology testing |
| **BNM RMiT** | Clause 10.1–10.7 | Overarching technology risk management requirements providing context for testing obligations |
| **BNM RMiT** | Clause 11 | Cyber risk management — informs security testing scope and frequency |
| **[Organization Name] IT Change Management Policy** | [Internal Ref] | Defines testing gates within the change management lifecycle |
| **[Organization Name] Information Security Policy** | [Internal Ref] | Controls governing test data handling and environment security |
| **[Organization Name] Risk Acceptance Framework** | [Internal Ref] | Process for formally accepting residual risk from outstanding defects |
| **OWASP Testing Guide** | [Version] | Reference methodology for application security testing |
| **ISO/IEC 29119** | Software Testing Standards | International standard for software test planning and documentation |
| **[Other internal policy or standard]** | [Reference] | [Description] |

---

## 12. Appendices

### Appendix A — Test Case Register

*Attach or reference the full test case register from [Test Management Tool]. The register must include test case ID, description, preconditions, steps, expected result, actual result, pass/fail status, and tester name.*

**Reference:** [Test Management Tool] Project: [Project Name] | Test Cycle: [Cycle Name] | Export Date: [DD MMM YYYY]

[Attach exported test case report or insert hyperlink to the controlled location in the document management system.]

---

### Appendix B — Defect Log

*The full defect log is maintained in [Defect Tracking System — e.g., Jira]. The log must be exported and attached at document closure.*

**Reference:** [Defect Tracking System] Project: [Project Key] | Filter: All defects raised in sprint/cycle | Export Date: [DD MMM YYYY]

[Attach exported defect report or insert hyperlink.]

---

### Appendix C — Security / Penetration Test Report

*The full security assessment or penetration test report is classified **Confidential — Restricted** and is maintained separately under controlled access. Only the summary findings are reproduced in Section 8.3 of this document.*

**Report Title:** [Penetration Test Report — System Name — Date]
**Conducted By:** [Internal Team / Vendor Name]
**Report Reference:** [Report ID / Reference Number]
**Controlled Location:** [Document Management System Path / Vault Location]
**Access Restricted To:** [QA Lead, IT Risk Officer, CISO, Auditors]

---

### Appendix D — Performance Test Evidence

*Raw performance test results, graphs, and JMeter / k6 / [Tool] output files are retained at the following location.*

**Evidence Location:** [Shared drive path / Document management system path]
**Retained By:** [QA Lead / Performance Engineer]
**Retention Period:** [Minimum 3 years, or as per [Organization Name] Records Retention Policy]

---

### Appendix E — UAT Sign-Off Forms

*Individual UAT acceptance forms signed by business users are collected and retained as supporting evidence.*

[Attach completed UAT sign-off forms or reference controlled storage location.]

---

### Appendix F — Regulatory Evidence Checklist

*This checklist confirms all evidence required for BNM RMiT Clause 10.8 compliance has been produced, reviewed, and retained.*

| Evidence Item | Required | Produced | Location | Retained By |
|---|---|---|---|---|
| Approved test plan (this document) | Yes | [Yes / No] | [Location] | [Owner] |
| Test case register with results | Yes | [Yes / No] | [Location] | [Owner] |
| Defect log with closure evidence | Yes | [Yes / No] | [Location] | [Owner] |
| Security / penetration test report | Yes | [Yes / No] | [Location] | [Owner] |
| Performance test results | [If applicable] | [Yes / No] | [Location] | [Owner] |
| UAT sign-off forms | Yes | [Yes / No] | [Location] | [Owner] |
| Formal test completion sign-off | Yes | [Yes / No] | [Location] | [Owner] |
| Risk acceptance records | [If applicable] | [Yes / No] | [Location] | [Owner] |

---

*End of Document*

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential
**[Organization Name]** | Prepared in accordance with BNM Risk Management in Technology (RMiT) Policy Document