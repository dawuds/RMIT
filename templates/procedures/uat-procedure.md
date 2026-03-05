# User Acceptance Testing (UAT) Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | QA Lead |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Approval Date** | [Approval Date] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of regulatory obligations under Bank Negara Malaysia (BNM) guidelines and the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [UAT Environment Standards](#5-uat-environment-standards)
6. [Step-by-Step UAT Process Flow](#6-step-by-step-uat-process-flow)
7. [Test Planning and Preparation](#7-test-planning-and-preparation)
8. [Test Execution](#8-test-execution)
9. [Defect Management](#9-defect-management)
10. [Roles and Responsibilities (RACI)](#10-roles-and-responsibilities-raci)
11. [Tools and Systems Used](#11-tools-and-systems-used)
12. [UAT Entry and Exit Criteria](#12-uat-entry-and-exit-criteria)
13. [UAT Sign-Off Process](#13-uat-sign-off-process)
14. [Escalation Procedures](#14-escalation-procedures)
15. [Data Management and Privacy Controls](#15-data-management-and-privacy-controls)
16. [Review and Update History](#16-review-and-update-history)
17. [Review and Approval](#17-review-and-approval)
18. [References](#18-references)
19. [Appendices](#19-appendices)

---

## 1. Purpose

*This section states the intent of this procedure document and why it exists within the organization's technology governance framework.*

This procedure establishes the formal User Acceptance Testing (UAT) process for [Organization Name], ensuring that all technology systems, applications, and changes undergo structured end-user validation prior to deployment to production environments. It defines the minimum standards, responsibilities, and sign-off requirements that must be satisfied before any system or change is approved for live operation.

This document supports [Organization Name]'s compliance with Bank Negara Malaysia's **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 10.9**, which requires financial institutions to implement robust testing procedures — including user acceptance testing — as part of the system development and change management lifecycle.

The objectives of this procedure are to:

- Ensure that new systems and changes meet defined business and functional requirements before go-live.
- Validate that systems operate correctly within [Organization Name]'s regulatory, operational, and security environment.
- Provide an auditable, documented record of user acceptance and sign-off that satisfies BNM examination requirements.
- Protect the integrity and stability of production systems by enforcing structured quality gates.
- Ensure that testing activities are conducted in a controlled environment that appropriately segregates UAT from production data and infrastructure.

---

## 2. Scope and Applicability

*Define which systems, projects, teams, and change types this procedure applies to. Be specific to avoid ambiguity during audits.*

### 2.1 In-Scope

This procedure applies to all of the following within [Organization Name]:

- **New system implementations** — any greenfield technology system being deployed for the first time.
- **System upgrades and version changes** — major or minor version changes to existing production systems.
- **Significant changes** — changes assessed as significant under [Organization Name]'s Change Management Policy, including changes to core banking systems, payment systems, data management platforms, and regulatory reporting systems.
- **Vendor-supplied and third-party applications** — including Software-as-a-Service (SaaS) platforms and outsourced system changes.
- **Internal integrations and API changes** — modifications to system interfaces or data exchange mechanisms between internal or external systems.
- **Regulatory and compliance-driven changes** — changes mandated by BNM, Securities Commission Malaysia, or other regulatory bodies.

### 2.2 Out of Scope

The following are explicitly excluded from this UAT procedure and are governed by separate procedures:

| Exclusion | Governing Procedure |
|---|---|
| Emergency hotfixes and critical security patches | Emergency Change Management Procedure |
| Minor cosmetic or UI changes with no functional impact | Minor Change Procedure |
| Infrastructure-only changes (patching, hardware upgrades) | Infrastructure Change Management Procedure |
| Penetration testing and security assessments | Vulnerability Assessment and Penetration Testing (VAPT) Procedure |
| Disaster Recovery testing | Business Continuity and DR Testing Procedure |

### 2.3 Applicability

| Applicability Dimension | Details |
|---|---|
| **Departments** | All business units that own or use technology systems subject to change |
| **Geographies** | All operations of [Organization Name] within Malaysia and [overseas branches/subsidiaries, if applicable] |
| **System Criticality** | Critical, High, and Medium criticality systems as defined in the Asset Classification Policy |
| **Third Parties** | Vendors and service providers delivering system changes on behalf of [Organization Name] |

---

## 3. Regulatory and Policy Context

*Reference the specific regulatory clauses, internal policies, and standards that mandate or inform this procedure.*

This procedure has been developed to meet the following regulatory and internal requirements:

### 3.1 Regulatory Requirements

| Reference | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | **Clause 10.9** | Requires FIs to implement user acceptance testing as part of the system development and change management process, with documented evidence of testing outcomes and sign-off prior to production deployment. |
| BNM RMiT Policy Document | Clause 10.1 – 10.8 | Broader system development lifecycle requirements that UAT supports. |
| BNM RMiT Policy Document | Clause 11 (Change Management) | UAT is a mandatory quality gate within the change management process. |
| BNM RMiT Policy Document | Clause 14 (Technology Service Provider) | UAT requirements extend to changes delivered by third-party technology service providers. |
| Personal Data Protection Act 2010 (PDPA) | Sections 5–7 | Obligations regarding the processing of personal data during UAT, including the prohibition on using live personal data without appropriate safeguards. |
| NACSA Cybersecurity Framework | Control Domain 5 | Secure test environment requirements and segregation of duties during testing. |

### 3.2 Internal Policy Alignment

| Internal Document | Relationship to This Procedure |
|---|---|
| IT Change Management Policy | UAT is a mandatory phase within the change approval workflow. |
| System Development Lifecycle (SDLC) Policy | This procedure implements the UAT phase of the SDLC. |
| Information Security Policy | UAT environment security controls and data handling requirements. |
| Data Classification Policy | Governs the use and masking of data within the UAT environment. |
| Risk Management Framework | UAT outcomes feed into the risk acceptance decision for production deployment. |
| Vendor Management Policy | Extends UAT obligations to third-party change deliverables. |

---

## 4. Definitions and Abbreviations

*Provide clear definitions to ensure consistent interpretation of this document by all stakeholders.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **User Acceptance Testing (UAT)** | A formal testing phase in which business end-users validate that a system or change meets agreed business requirements and is fit for purpose in a controlled pre-production environment. |
| **UAT Environment** | A dedicated, isolated technology environment that mirrors production sufficiently to support valid testing, but is strictly segregated from live production systems and data. |
| **Test Case** | A documented set of inputs, execution conditions, and expected outcomes designed to validate a specific functional or non-functional requirement. |
| **Test Script** | A structured sequence of test cases organized to validate an end-to-end business process or system function. |
| **Defect** | Any deviation between the actual system behavior observed during testing and the expected behavior defined in the test case or business requirements. |
| **Entry Criteria** | The minimum conditions that must be satisfied before UAT activities may commence. |
| **Exit Criteria** | The minimum conditions that must be satisfied before UAT may be formally concluded and sign-off granted. |
| **UAT Sign-Off** | Formal written approval from authorized business representatives confirming that UAT has been completed satisfactorily and the system is approved for production deployment. |
| **Test Lead** | The individual responsible for coordinating UAT activities, managing testers, and reporting on test progress. |
| **Business Owner** | The senior business representative with accountability for the system or process being tested, and authority to grant UAT sign-off. |
| **Significant Change** | A change assessed as having material impact on system functionality, security posture, regulatory compliance, or customer-facing services. |
| **Data Masking** | The process of replacing sensitive or personal data with realistic but fictitious data to enable safe use in non-production environments. |
| **Regression Testing** | Testing performed to confirm that previously functioning system capabilities remain unaffected by a new change. |
| **Test Traceability Matrix (TTM)** | A document that maps test cases to business requirements, ensuring complete coverage of all requirements during UAT. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| UAT | User Acceptance Testing |
| SDLC | System Development Lifecycle |
| QA | Quality Assurance |
| RACI | Responsible, Accountable, Consulted, Informed |
| SIT | System Integration Testing |
| TTM | Test Traceability Matrix |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| CAB | Change Advisory Board |
| PIR | Post-Implementation Review |
| PII | Personally Identifiable Information |
| DRP | Disaster Recovery Plan |
| UAM | User Access Management |

---

## 5. UAT Environment Standards

*Describe the minimum technical and operational standards that the UAT environment must meet before testing can begin. This section satisfies RMiT Clause 10.9 requirements for controlled test environments.*

### 5.1 Environment Architecture Requirements

The UAT environment must adhere to the following minimum standards:

- **Segregation:** The UAT environment must be completely segregated from the production environment at the network, application, and data layers. No direct connectivity between UAT and production systems is permitted unless explicitly approved by the Information Security team and documented with compensating controls.
- **Parity with Production:** The UAT environment must replicate the production environment configuration to a degree sufficient to produce valid, representative test results. Key configuration elements — including operating system versions, middleware, database versions, and application server configurations — must match production.
- **Access Controls:** Access to the UAT environment must be governed by the principle of least privilege. Access must be granted only to personnel with an active role in the UAT activity and must be revoked upon UAT completion.
- **Data Integrity:** All data used in the UAT environment must be either synthetically generated or masked/anonymized production data. The use of live, unmasked personal data in UAT is prohibited in accordance with the PDPA 2010 and [Organization Name]'s Data Classification Policy.
- **Audit Logging:** All activities within the UAT environment, including user access, configuration changes, and test execution, must be logged. Logs must be retained for a minimum of [X months/years] in accordance with the Records Retention Policy.

### 5.2 Environment Setup Checklist

*This checklist must be completed and signed off by the Infrastructure Team Lead before UAT Entry Criteria can be assessed.*

| # | Requirement | Responsible | Status | Evidence / Notes |
|---|---|---|---|---|
| 1 | UAT environment provisioned and configured | Infrastructure Team | [ ] Complete | |
| 2 | Environment parity with production verified | Infrastructure Team | [ ] Complete | |
| 3 | Network segregation from production confirmed | Information Security | [ ] Complete | |
| 4 | UAT environment access controls configured | IT Operations / UAM | [ ] Complete | |
| 5 | Test data loaded and masked/anonymized | Data Management Team | [ ] Complete | |
| 6 | Audit logging enabled and verified | Information Security | [ ] Complete | |
| 7 | System under test deployed to UAT environment | Development/Release Team | [ ] Complete | |
| 8 | Smoke test (basic sanity check) passed | QA Lead | [ ] Complete | |
| 9 | UAT environment access credentials distributed | QA Lead | [ ] Complete | |
| 10 | Backup of UAT environment taken (baseline) | Infrastructure Team | [ ] Complete | |

### 5.3 Test Data Management

| Requirement | Standard |
|---|---|
| **Source of test data** | Synthetic data generation or masked production data |
| **Masking standard** | [Refer to Data Masking Standard Document ID] |
| **PII handling** | No unmasked PII permitted in UAT environment |
| **Data refresh frequency** | [At the start of each UAT cycle / As required] |
| **Data disposal** | UAT environment data to be sanitized upon project closure |
| **Approval for data use** | Data Management / Privacy Officer sign-off required |

---

## 6. Step-by-Step UAT Process Flow

*This section provides the end-to-end procedural flow for UAT. Each step must be followed sequentially. Deviations require written approval from the QA Lead and must be documented.*

### 6.1 Process Overview

```
[Change Request Raised]
        │
        ▼
[UAT Planning & Preparation]
        │
        ▼
[Environment Setup & Verification]
        │
        ▼
[Entry Criteria Assessment]
        │
   Pass? ──────No──────► [Remediate & Reassess]
        │ Yes
        ▼
[UAT Test Execution]
        │
        ▼
[Defect Logging & Management]
        │
        ▼
[Exit Criteria Assessment]
        │
   Pass? ──────No──────► [Resolve Critical Defects & Reassess]
        │ Yes
        ▼
[UAT Sign-Off]
        │
        ▼
[Production Deployment Approval]
        │
        ▼
[Post-Implementation Review]
```

### 6.2 Detailed Process Steps

#### Step 1: Change Registration and UAT Trigger

| Attribute | Details |
|---|---|
| **Trigger** | Change Request approved by Change Advisory Board (CAB) and assigned to UAT phase. |
| **Responsible** | Change Manager / Project Manager |
| **Input** | Approved Change Request, Business Requirements Document (BRD) or User Stories |
| **Output** | UAT initiation notification to QA Lead |
| **SLA** | UAT Lead notified within [X] business days of CAB approval |

**Actions:**
1. Change Manager notifies QA Lead of upcoming UAT requirement, providing Change Request reference number, business requirements documentation, technical specification, and planned go-live date.
2. QA Lead acknowledges receipt and schedules UAT Planning meeting within [X] business days.
3. Project Manager logs UAT initiation in the project management tool.

---

#### Step 2: UAT Planning and Test Design

| Attribute | Details |
|---|---|
| **Responsible** | QA Lead (with Business Analysts and Business Users) |
| **Input** | Business Requirements Document, Functional Specifications, System Integration Testing (SIT) results |
| **Output** | UAT Test Plan, Test Cases, Test Traceability Matrix |
| **SLA** | UAT Test Plan completed within [X] business days of initiation |

**Actions:**
1. QA Lead convenes UAT Planning meeting with Business Owner, Business Analysts, and nominated UAT testers.
2. Business Analysts provide a walkthrough of business requirements and functional specifications.
3. QA Lead prepares the **UAT Test Plan** covering: test scope, test objectives, test schedule, resource requirements, entry and exit criteria, and risk assessment.
4. Business Analysts and QA team collaboratively develop **Test Cases** mapped to each business requirement.
5. QA Lead compiles the **Test Traceability Matrix (TTM)** to confirm 100% coverage of in-scope requirements.
6. Business Owner reviews and approves the UAT Test Plan and Test Cases.
7. QA Lead submits approved UAT Test Plan to Change Manager for project record.

---

#### Step 3: UAT Environment Setup and Verification

| Attribute | Details |
|---|---|
| **Responsible** | Infrastructure Team (setup); QA Lead (verification) |
| **Input** | UAT Test Plan, Environment Specification |
| **Output** | Completed Environment Setup Checklist (Section 5.2) |
| **SLA** | Environment ready [X] business days before planned UAT start date |

**Actions:**
1. Infrastructure Team provisions and configures the UAT environment per the standards defined in Section 5.
2. Release/Development Team deploys the system under test to the UAT environment.
3. Data Management Team loads masked/synthetic test data per the approved data set.
4. QA Lead conducts a smoke test to verify basic system accessibility and functionality.
5. QA Lead completes and signs the Environment Setup Checklist (Section 5.2).
6. Information Security reviews and confirms environment segregation and access controls.

---

#### Step 4: Entry Criteria Assessment

| Attribute | Details |
|---|---|
| **Responsible** | QA Lead |
| **Input** | Environment Setup Checklist, SIT Completion Report, UAT Test Plan |
| **Output** | Entry Criteria Assessment Report (Pass / Fail) |
| **SLA** | Assessment completed on the planned UAT start date |

**Actions:**
1. QA Lead assesses all Entry Criteria defined in Section 12.1.
2. QA Lead documents the assessment outcome in the Entry Criteria Assessment Report.
3. If Entry Criteria are **met:** QA Lead formally opens UAT and notifies all UAT participants.
4. If Entry Criteria are **not met:** QA Lead documents outstanding items, notifies Project Manager and Business Owner, and schedules a re-assessment date. UAT does not commence until all mandatory Entry Criteria are satisfied.

---

#### Step 5: UAT Test Execution

| Attribute | Details |
|---|---|
| **Responsible** | UAT Testers (business users); QA Lead (coordination and oversight) |
| **Input** | Approved Test Cases, Test Scripts, UAT Environment |
| **Output** | Completed Test Execution Records, Defect Log |
| **SLA** | Per agreed UAT test schedule in the UAT Test Plan |

**Actions:**
1. QA Lead conducts a UAT kick-off briefing with all testers, covering: test objectives, test scope, test execution process, defect logging procedure, and communication channels.
2. Testers execute test cases in sequence as defined in the Test Script, recording the actual result for each test step.
3. Each test case outcome is recorded as **Pass**, **Fail**, or **Blocked**.
4. For each failed test case, testers immediately raise a defect in the defect management tool (see Step 6).
5. QA Lead provides daily test progress updates to the Project Manager and Business Owner.
6. QA Lead maintains the Test Execution Register, updated at the close of each test day.
7. Upon completion of all planned test cases, QA Lead compiles the **UAT Test Execution Summary Report**.

---

#### Step 6: Defect Management

*Refer to Section 9 for the detailed Defect Management procedure.*

**Actions:**
1. Testers log all defects in [Defect Management Tool] immediately upon identification.
2. QA Lead triages and classifies all defects by severity (Critical, High, Medium, Low) within [X] hours of logging.
3. QA Lead assigns defects to the responsible development/vendor team for investigation and resolution.
4. Development team resolves defects and deploys fixes to the UAT environment.
5. Testers perform re-testing (verification testing) of resolved defects.
6. QA Lead tracks defect status daily and escalates unresolved critical/high defects per the Escalation Procedure in Section 14.

---

#### Step 7: Exit Criteria Assessment

| Attribute | Details |
|---|---|
| **Responsible** | QA Lead |
| **Input** | Test Execution Summary Report, Defect Log |
| **Output** | Exit Criteria Assessment Report (Pass / Fail) |

**Actions:**
1. Upon completion of all test execution activities, QA Lead assesses the Exit Criteria defined in Section 12.2.
2. QA Lead documents the Exit Criteria Assessment outcome.
3. If Exit Criteria are **met:** QA Lead proceeds to Step 8 (UAT Sign-Off).
4. If Exit Criteria are **not met:** QA Lead documents outstanding defects, presents options to the Business Owner (defer go-live, accept residual risk, or continue testing), and follows the Escalation Procedure in Section 14 as required.

---

#### Step 8: UAT Sign-Off

*Refer to Section 13 for the detailed UAT Sign-Off procedure.*

**Actions:**
1. QA Lead compiles the **UAT Sign-Off Package** (see Section 13.2).
2. QA Lead presents the Sign-Off Package to the Business Owner for review.
3. Business Owner and other authorized signatories review and execute the **UAT Sign-Off Form** (Appendix A).
4. Signed UAT Sign-Off Form is submitted to the Change Manager and retained in the project record.
5. Change Manager updates the Change Request status to reflect UAT completion and initiates the production deployment approval process.

---

#### Step 9: Post-Implementation Review

| Attribute | Details |
|---|---|
| **Responsible** | QA Lead and Project Manager |
| **Trigger** | [X] business days after production deployment |
| **Output** | Post-Implementation Review Report |

**Actions:**
1. QA Lead and Project Manager conduct a PIR meeting with key stakeholders within [X] business days of go-live.
2. Review covers: UAT process effectiveness, defects identified versus defects found in production, test coverage gaps, and lessons learned.
3. Lessons learned are documented and fed back into the UAT process for continuous improvement.
4. PIR Report is retained in the project record and reviewed by the QA Lead as part of the annual procedure review.

---

## 7. Test Planning and Preparation

*This section provides detailed guidance on producing the key planning artefacts required for UAT. Templates for each artefact are provided in the Appendices.*

### 7.1 UAT Test Plan

The UAT Test Plan is the primary governance document for each UAT engagement. It must be produced for every UAT activity and must receive Business Owner approval before UAT commences.

**Minimum contents of the UAT Test Plan:**

| Section | Required Content |
|---|---|
| Test Scope | Systems, modules, and business processes in scope and out of scope |
| Test Objectives | What the UAT aims to validate |
| Test Approach | Testing methodology (scripted, exploratory, or hybrid) |
| Test Schedule | Start date, end date, key milestones, and daily test windows |
| Resource Plan | Named testers, their business units, and availability |
| Entry Criteria | Conditions that must be met before UAT starts |
| Exit Criteria | Conditions that must be met before UAT can be signed off |
| Risk Assessment | Known risks to UAT delivery and mitigation measures |
| Defect Management Approach | Defect classification, assignment, and escalation process |
| Communication Plan | Reporting frequency, format, and distribution list |
| Approvals | Business Owner signature and date |

### 7.2 Test Case Design Standards

All test cases must meet the following minimum standards:

- Each test case must be traceable to at least one documented business requirement (via the TTM).
- Test cases must include both positive (happy path) and negative (error/exception) scenarios.
- Each test case must specify: Test Case ID, Test Case Description, Pre-conditions, Test Steps, Test Data required, Expected Result, and Pass/Fail criteria.
- Test cases must be reviewed and approved by the Business Analyst before UAT execution.
- Test cases must cover, at minimum: core functional requirements, boundary conditions, integration points with other systems, and regulatory reporting requirements.

### 7.3 Test Traceability Matrix (TTM)

*The TTM is a mandatory artefact that provides auditable evidence of requirements coverage. It must be maintained throughout UAT and updated to reflect final test outcomes.*

| Requirement ID | Requirement Description | Test Case ID(s) | Priority | Test Result | Notes |
|---|---|---|---|---|---|
| [REQ-001] | [Requirement description] | [TC-001, TC-002] | High | [Pass / Fail / Not Tested] | |
| [REQ-002] | [Requirement description] | [TC-003] | Medium | [Pass / Fail / Not Tested] | |
| [REQ-003] | [Requirement description] | [TC-004, TC-005] | High | [Pass / Fail / Not Tested] | |
| [REQ-XXX] | [Requirement description] | [TC-XXX] | [Priority] | [Result] | |

---

## 8. Test Execution

### 8.1 Test Execution Standards

- All test cases must be executed by nominated business users (UAT Testers), not by members of the development or IT team, to preserve the independence of UAT.
- Test results must be recorded in real time during execution, not retrospectively.
- Screenshots or system-generated evidence must be captured for all test case outcomes (Pass and Fail) where technically feasible.
- Testers must not modify the UAT environment configuration or test data during execution without prior approval from the QA Lead.
- Any ambiguity in test case steps or expected results must be escalated to the QA Lead before proceeding.

### 8.2 Test Execution Register

*The Test Execution Register is maintained by the QA Lead and updated daily. It provides a real-time view of test progress.*

| Test Case ID | Test Case Name | Tester | Execution Date | Status | Defect Ref | Notes |
|---|---|---|---|---|---|---|
| TC-001 | [Test Case Name] | [Tester Name] | [Date] | Pass / Fail / Blocked | [DEF-XXX if applicable] | |
| TC-002 | [Test Case Name] | [Tester Name] | [Date] | Pass / Fail / Blocked | | |
| TC-003 | [Test Case Name] | [Tester Name] | [Date] | Pass / Fail / Blocked | | |

### 8.3 Daily Status Reporting

| Report Element | Details |
|---|---|
| **Reporting Frequency** | Daily during UAT execution phase |
| **Report Owner** | QA Lead |
| **Distribution** | Business Owner, Project Manager, Change Manager, [Other Stakeholders] |
| **Report Contents** | Test cases planned vs. executed, Pass/Fail/Blocked counts, new defects raised, defects resolved, outstanding defects by severity, overall RAG status, risks and issues |
| **Format** | [Email / Project Management Tool Dashboard / [Report Template Ref]] |

---

## 9. Defect Management

*This section defines the end-to-end process for logging, classifying, tracking, and resolving defects identified during UAT. All defects must be managed through the approved defect management tool.*

### 9.1 Defect Severity Classification

| Severity | Definition | Examples | Target Resolution SLA |
|---|---|---|---|
| **Critical** | Defect renders a core business function entirely unusable; blocks further testing; poses a regulatory compliance risk; data integrity issue. | System crash; inability to complete a payment transaction; regulatory report produces incorrect outputs. | [X] hours |
| **High** | Significant functional defect that impairs a major business process but a workaround exists; affects multiple users. | Incorrect calculation in a non-critical field; inability to complete a secondary workflow. | [X] business days |
| **Medium** | Functional defect with limited business impact; isolated to a specific scenario; workaround readily available. | Incorrect data displayed in a rarely used screen; minor workflow inefficiency. | [X] business days |
| **Low** | Cosmetic or minor usability issue with no functional or business process impact. | Typo in a field label; minor formatting inconsistency; non-essential UI element misaligned. | [X] business days / next release |

### 9.2 Defect Lifecycle

```
[Defect Identified by Tester]
        │
        ▼
[Defect Logged in Tool] ──► Status: New
        │
        ▼
[QA Lead Triage & Classification] ──► Status: Open / Rejected
        │
        ▼
[Assigned to Development/Vendor] ──► Status: Assigned
        │
        ▼
[Investigation & Root Cause Analysis] ──► Status: In Progress
        │
        ▼
[Fix Implemented & Deployed to UAT] ──► Status: Ready for Retest
        │
        ▼
[Tester Performs Verification Testing]
        │
   Pass? ──No──► [Defect Re-Opened] ──► Status: Reopened
        │ Yes
        ▼
[QA Lead Closes Defect] ──► Status: Closed
```

### 9.3 Defect Log

*The Defect Log is maintained in [Defect Management Tool] and exported for inclusion in the UAT Sign-Off Package.*

| Defect ID | Raised By | Date Raised | Test Case Ref | Defect Description | Severity | Priority | Assigned To | Status | Date Resolved | Resolution Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| DEF-001 | [Tester Name] | [Date] | TC-XXX | [Description] | Critical / High / Medium / Low | [P1/P2/P3/P4] | [Assignee] | New / Open / In Progress / Resolved / Closed | [Date] | |
| DEF-002 | [Tester Name] | [Date] | TC-XXX | [Description] | | | | | | |

### 9.4 Defect Acceptance (Risk Acceptance)

Where a defect cannot be resolved prior to the planned go-live date, the Business Owner may choose to formally accept the residual risk and proceed to production, subject to the following conditions:

- The defect is classified as Medium or Low severity only. **Critical and High severity defects may not be risk-accepted without CISO and CTO approval.**
- A documented risk acceptance form is completed and signed by the Business Owner.
- A remediation plan with a committed resolution date is agreed and documented.
- The Risk Acceptance is recorded in [Organization Name]'s risk register.
- The Change Advisory Board (CAB) is notified of the risk acceptance prior to production deployment approval.

---

## 10. Roles and Responsibilities (RACI)

*This section defines the roles involved in the UAT process and their respective responsibilities. The RACI framework is used: **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

### 10.1 Role Definitions

| Role | Description |
|---|---|
| **QA Lead** | Owns and manages the end-to-end UAT process. Responsible for test planning, coordination, defect management oversight, and sign-off facilitation. Reports to [Head of QA / CTO]. |
| **Business Owner** | Senior business representative with authority over the system or process under test. Accountable for UAT sign-off and risk acceptance decisions. |
| **UAT Testers** | Business users nominated by the Business Owner to execute test cases. Must have sufficient domain knowledge to assess whether system behavior meets business expectations. |
| **Business Analyst** | Supports test case design, clarifies requirements ambiguities, and validates test traceability. |
| **Development Lead** | Responsible for delivering the system or change to the UAT environment, resolving defects, and confirming the completeness of SIT prior to UAT handover. |
| **Infrastructure Team Lead** | Responsible for provisioning, maintaining, and securing the UAT environment. |
| **Change Manager** | Coordinates UAT within the broader change management process; receives UAT sign-off and initiates production deployment approval. |
| **Information Security** | Reviews UAT environment security controls; approves the use of masked data; confirms segregation from production. |
| **Data Management / Privacy Officer** | Approves test data sets; ensures PDPA compliance in test data handling. |
| **Project Manager** | Overall project delivery accountability; escalation point for schedule and resource conflicts. |
| **Vendor / Third Party** | Where the change is delivered by an external party, the vendor is responsible for defect resolution and may participate in UAT coordination. |
| **CISO / CTO** | Approves risk acceptance for Critical or High severity defects; final authority on production deployment decisions where significant risks exist. |

### 10.2 RACI Matrix

| UAT Activity | QA Lead | Business Owner | UAT Testers | Business Analyst | Development Lead | Infrastructure Lead | Change Manager | InfoSec | Data Mgmt | Project Manager |
|---|---|---|---|---|---|---|---|---|---|---|
| UAT Initiation | R | A | I | I | I | I | C | I | I | I |
| UAT Test Plan development | R | A | C | C | C | C | I | C | C | I |
| Test Case design | R | C | C | A | R | I | I | I | I | I |
| Test Traceability Matrix | R | A | I | C | I | I | I | I | I | I |
| UAT Environment setup | C | I | I | I | R | A | I | C | C | I |
| Test data preparation | I | I | I | I | I | I | I | C | A/R | I |
| Environment security review | I | I | I | I | I | C | I | A/R | C | I |
| Entry Criteria assessment | A/R | C | I | I | C | C | I | C | I | I |
| UAT Test Execution | C | C | R | C | I | I | I | I | I | I |
| Daily status reporting | A/R | I | I | I | I | I | I | I | I | I |
| Defect logging | C | I | R | C | I | I | I | I | I | I |
| Defect triage & classification | A/R | I | I | C | C | I | I | I | I | I |
| Defect resolution | I | I | I | I | A/R | I | I | I | I | I |
| Defect verification (retest) | C | I | R | I | I | I | I | I | I | I |
| Risk acceptance (Med/Low) | C | A | I | I | I | I | C | I | I | I |
| Risk acceptance (Critical/High) | C | C | I | I | I | I | C | A | I | C |
| Exit Criteria assessment | A/R | C | I | I | C | I | C | C | I | I |
| UAT Sign-Off | C | A | I | I | I | I | C | I | I | I |
| UAT Sign-Off Package compilation | A/R | C | I | I | I | I | C | I | I | I |
| Production deployment approval | I | C | I | I | I | I | A/R | C | I | C |
| Post-Implementation Review | R | C | I | I | I | I | C | I | I | A |

---

## 11. Tools and Systems Used

*List all tools and platforms used to support UAT activities at [Organization Name]. Ensure that access to all tools is governed by the User Access Management policy.*

### 11.1 UAT Toolset

| Tool Category | Tool Name | Purpose | Access Governed By |
|---|---|---|---|
| **Test Management** | [e.g., Jira / Azure DevOps / TestRail / HP ALM] | Test case management, test execution tracking, defect management | IT Access Management |
| **Defect Management** | [e.g., Jira / Azure DevOps / Bugzilla] | Defect logging, tracking, and lifecycle management | IT Access Management |
| **Test Environment** | [Environment Name / URL (UAT)] | Hosted UAT application environment | Infrastructure Team |
| **Test Data Management** | [e.g., Informatica / Custom Scripts / [Tool Name]] | Data masking and synthetic data generation | Data Management Team |
| **Communication & Collaboration** | [e.g., Microsoft Teams / Email] | UAT communications, meeting coordination | IT |
| **Document Management** | [e.g., SharePoint / Confluence / [System Name]] | Storage of UAT artefacts, test cases, reports | IT Access Management |
| **Screen Capture / Evidence** | [e.g., Snagit / Built-in OS Screenshot] | Capturing test evidence for Pass/Fail documentation | N/A |
| **Project Management** | [e.g., Jira / Microsoft Project / [Tool Name]] | Overall project tracking and UAT schedule management | IT Access Management |
| **Reporting** | [e.g., Jira Dashboards / Excel / Power BI] | UAT progress dashboards and status reports | IT Access Management |

### 11.2 System Access Requirements for UAT

| Access Requirement | Governed By | Notes |
|---|---|---|
| UAT environment application access | UAM Policy / IT Request Process | Access provisioned per role, revoked post-UAT |
| Test management tool access | UAM Policy | Read/write for testers; admin for QA Lead |
| Defect management tool access | UAM Policy | All UAT participants require access |
| Document repository access | UAM Policy | Read for testers; write for QA Lead and BA |
| Reporting dashboards | UAM Policy | Read-only for Business Owner and stakeholders |

---

## 12. UAT Entry and Exit Criteria

*Entry and Exit Criteria define the quality gates that govern when UAT may commence and when it may be formally concluded. These criteria must be assessed and documented at each gate; deviation requires written approval from the QA Lead and Business Owner.*

### 12.1 Entry Criteria

*All mandatory Entry Criteria must be satisfied before UAT can commence. Optional criteria should be assessed and their status documented.*

| # | Criterion | Mandatory? | Assessment Status | Notes |
|---|---|---|---|---|
| EC-01 | UAT Test Plan reviewed and approved by Business Owner | Yes | [ ] Met / [ ] Not Met | |
| EC-02 | Test Cases and Test Scripts completed and approved | Yes | [ ] Met / [ ] Not Met | |
| EC-03 | Test Traceability Matrix completed showing 100% requirements coverage | Yes | [ ] Met / [ ] Not Met | |
| EC-04 | UAT environment provisioned and verified (Environment Setup Checklist complete) | Yes | [ ] Met / [ ] Not Met | |
| EC-05 | System under test successfully deployed to UAT environment | Yes | [ ] Met / [ ] Not Met | |
| EC-06 | Smoke test passed (basic system accessibility confirmed) | Yes | [ ] Met / [ ] Not Met | |
| EC-07 | SIT completed and SIT sign-off received from Development Lead | Yes | [ ] Met / [ ] Not Met | |
| EC-08 | Test data loaded to UAT environment and approved by Data Management team | Yes | [ ] Met / [ ] Not Met | |
| EC-09 | No open Critical defects from SIT phase | Yes | [ ] Met / [ ] Not Met | |
| EC-10 | UAT testers identified, confirmed available, and briefed | Yes | [ ] Met / [ ] Not Met | |
| EC-11 | UAT environment access provisioned for all UAT participants | Yes | [ ] Met / [ ] Not Met | |
| EC-12 | Information Security sign-off on UAT environment segregation | Yes | [ ] Met / [ ] Not Met | |
| EC-13 | Open High defects from SIT phase reviewed and approved for UAT commencement | Yes | [ ] Met / [ ] Not Met | |
| EC-14 | UAT schedule confirmed and communicated to all participants | Yes | [ ] Met / [ ] Not Met | |

**Entry Criteria Assessment Outcome:** [ ] **PASS — UAT may commence** &nbsp;&nbsp; [ ] **FAIL — UAT cannot commence**

**Assessed By (QA Lead):** ___________________________________ **Date:** _______________

### 12.2 Exit Criteria

*All mandatory Exit Criteria must be satisfied before the UAT Sign-Off process may be initiated. The QA Lead and Business Owner must jointly assess Exit Criteria.*

| # | Criterion | Mandatory? | Assessment Status | Notes |
|---|---|---|---|---|
| EX-01 | 100% of planned test cases executed | Yes | [ ] Met / [ ] Not Met | |
| EX-02 | [≥95%] of test cases passed (or as agreed in UAT Test Plan) | Yes | [ ] Met / [ ] Not Met | |
| EX-03 | Zero open Critical defects | Yes | [ ] Met / [ ] Not Met | |
| EX-04 | Zero open High defects (or each High defect has an approved risk acceptance) | Yes | [ ] Met / [ ] Not Met | |
| EX-05 | All resolved defects have been successfully verified (retested and closed) | Yes | [ ] Met / [ ] Not Met | |
| EX-06 | Test Execution Summary Report completed and reviewed | Yes | [ ] Met / [ ] Not Met | |
| EX-07 | Defect Log is up to date with current status of all defects | Yes | [ ] Met / [ ] Not Met | |
| EX-08 | All open Medium and Low defects documented with agreed resolution timelines | Yes | [ ] Met / [ ] Not Met | |
| EX-09 | Test Traceability Matrix updated to reflect final test outcomes | Yes | [ ] Met / [ ] Not Met | |
| EX-10 | UAT Sign-Off Package compiled and ready for Business Owner review | Yes | [ ] Met / [ ] Not Met | |
| EX-11 | All risk acceptance forms signed (where applicable) | Yes | [ ] Met / [ ] Not Met | |
| EX-12 | UAT environment decommission plan agreed | No | [ ] Met / [ ] Not Met | |

**Exit Criteria Assessment Outcome:** [ ] **PASS — UAT Sign-Off may proceed** &nbsp;&nbsp; [ ] **FAIL — UAT cannot be signed off**

**Assessed By (QA Lead):** ___________________________________ **Date:** _______________

**Reviewed By (Business Owner):** ___________________________________ **Date:** _______________

---

## 13. UAT Sign-Off Process

*The UAT Sign-Off is the formal business approval that certifies the system or change is fit for purpose and approved for production deployment. It is a mandatory control point under BNM RMiT Clause 10.9.*

### 13.1 Sign-Off Conditions

UAT Sign-Off may only be granted when:

1. All mandatory Exit Criteria (Section 12.2) are assessed as **Met**.
2. The UAT Sign-Off Package (Section 13.2) has been compiled and reviewed.
3. The Business Owner has reviewed the Sign-Off Package and is satisfied with the test outcomes.
4. All risk acceptance decisions for open defects have been formally documented and approved.
5. The Business Owner and other designated signatories have signed the UAT Sign-Off Form (Appendix A).

### 13.2 UAT Sign-Off Package Contents

The QA Lead is responsible for compiling the UAT Sign-Off Package. The package must contain the following documents:

| # | Document | Status |
|---|---|---|
| 1 | UAT Test Plan (approved) | [ ] Included |
| 2 | Test Traceability Matrix (final, with outcomes) | [ ] Included |
| 3 | Test Execution Summary Report | [ ] Included |
| 4 | Defect Log (final, showing all defect statuses) | [ ] Included |
| 5 | Defect Summary Report (counts by severity and status) | [ ] Included |
| 6 | Risk Acceptance Forms (where applicable) | [ ] Included / [ ] N/A |
| 7 | Exit Criteria Assessment Report | [ ] Included |
| 8 | Environment Setup Checklist | [ ] Included |
| 9 | UAT Sign-Off Form (Appendix A) | [ ] Included |

### 13.3 Authorized Signatories

The following roles are required to sign the UAT Sign-Off Form. Additional signatories may be added at the Business Owner's discretion or as required by the nature of the change.

| Role | Authority | Mandatory? |
|---|---|---|
| Business Owner | Confirms business acceptance and approves production deployment | Yes |
| QA Lead | Confirms UAT process was followed, Exit Criteria were met, and Sign-Off Package is complete | Yes |
| Change Manager | Confirms UAT completion is recorded in the Change Record | Yes |
| CISO (or delegate) | Required only where Critical/High severity defects have been risk-accepted | Conditional |
| CTO (or delegate) | Required for Tier 1 / Critical system changes as defined in the IT Asset Classification | Conditional |
| [Additional Signatory] | [Role-specific justification] | [As required] |

### 13.4 Post-Sign-Off Actions

Upon receipt of signed UAT Sign-Off:

1. Change Manager updates the Change Request status to **UAT Complete — Approved for Production Deployment**.
2. QA Lead archives the complete UAT Sign-Off Package in the document repository under [Document Repository Path] / [Project Name] / UAT.
3. Change Manager schedules the Production Deployment CAB review.
4. QA Lead notifies Infrastructure Team to initiate UAT environment decommission per the agreed plan.
5. QA Lead schedules the Post-Implementation Review for [X] business days after go-live.

---

## 14. Escalation Procedures

*This section defines the escalation paths to be followed when UAT activities are at risk of failing to meet their objectives, when critical defects are unresolved, or when the go-live date is at risk.*

### 14.1 Escalation Triggers

The QA Lead must initiate an escalation when any of the following conditions occur:

| # | Escalation Trigger | Severity | Escalation Timeframe |
|---|---|---|---|
| ESC-01 | A Critical severity defect is not resolved within the defined SLA | Critical | Immediately upon SLA breach |
| ESC-02 | A High severity defect remains unresolved [X] business days before the planned go-live date | High | Immediately upon identification |
| ESC-03 | UAT Entry Criteria cannot be met within [X] business days of the planned UAT start date | High | [X] business days before planned start |
| ESC-04 | The volume of open defects is such that the UAT schedule is materially at risk | High | Upon identification |
| ESC-05 | UAT Exit Criteria cannot be met and the Business Owner wishes to proceed to production | Critical | Immediately upon Exit Criteria failure |
| ESC-06 | The development or vendor team is unresponsive to defect resolution within the agreed SLA | High | Upon SLA breach |
| ESC-07 | A security-related defect is identified that may expose a compliance or regulatory risk | Critical | Immediately upon identification |
| ESC-08 | UAT testers are unavailable, creating a resource gap that threatens the test schedule | Medium | Upon identification |

### 14.2 Escalation Matrix

| Escalation Level | Condition | Escalate To | Timeframe | Method |
|---|---|---|---|---|
| **Level 1** | Defect resolution delay; minor schedule risk; tester availability issues | Project Manager | Within [X] hours | Verbal + Email |
| **Level 2** | Unresolved Critical defect; significant schedule risk; Entry/Exit Criteria failure | Business Owner + IT Manager | Within [X] hours | Formal meeting + Email |
| **Level 3** | Business Owner wishes to accept risk and proceed with open Critical/High defects; regulatory compliance risk identified | CTO + CISO + Change Manager | Immediately | Escalation form + Emergency CAB |
| **Level 4** | Systemic failure of UAT process; potential regulatory reporting obligation | Chief Risk Officer + CEO | As determined | Formal governance process |

### 14.3 Escalation Process

1. **Identify:** QA Lead identifies the escalation trigger condition.
2. **Document:** QA Lead records the escalation details in the project log, including: trigger, date/time, parties notified, and context.
3. **Notify:** QA Lead notifies the appropriate escalation level per Section 14.2 within the specified timeframe.
4. **Convene:** Project Manager schedules an emergency meeting with the relevant parties if the issue cannot be resolved via email within [X] hours.
5. **Resolve:** Escalation parties agree on a resolution path, including any required risk acceptance, schedule adjustment, or process change.
6. **Document Outcome:** QA Lead documents the escalation outcome, agreed actions, and responsible parties in the project log.
7. **Track:** QA Lead tracks agreed actions to closure and reports status at daily standup until resolved.

### 14.4 Escalation Communication Template

*When initiating a formal escalation (Level 2 and above), the QA Lead should use the following communication structure:*

---
**ESCALATION NOTIFICATION — [Project Name] UAT**

**Date/Time:** [Date and Time]
**Raised By:** [QA Lead Name]
**Escalation Level:** [Level 1 / 2 / 3 / 4]
**Escalation Trigger:** [ESC-XX: Description]

**Current Situation:** [Brief factual description of the issue]

**Impact:** [Impact on UAT schedule, go-live date, business operations, or regulatory compliance]

**Actions Taken to Date:** [What has already been attempted to resolve the issue]

**Decision Required:** [Specific decision or action required from escalation recipient]

**Deadline for Response:** [Date and Time]

---

---

## 15. Data Management and Privacy Controls

*This section addresses the specific requirements for protecting personal and sensitive data during UAT activities, in compliance with the PDPA 2010 and [Organization Name]'s Data Classification Policy.*

### 15.1 Prohibition on Live Data Use

The use of unmasked, live personal data — including customer data, employee data, and any other data classified as Confidential or above — in the UAT environment is **strictly prohibited** without explicit written approval from the Privacy Officer and CISO, supported by documented compensating controls.

### 15.2 Approved Data Sources for UAT

| Data Type | Approved Source | Approval Required From |
|---|---|---|
| Customer transaction data | Masked/anonymized from production | Data Management Team + Privacy Officer |
| Personal identification data | Synthetically generated | Data Management Team |
| Financial account data | Masked/anonymized from production | Data Management Team + Privacy Officer |
| Internal employee data | Synthetic data only | HR + Privacy Officer |
| Third-party reference data | Vendor-provided test data sets | Data Management Team |

### 15.3 Data Handling Requirements During UAT

- UAT testers must not extract, copy, or retain any data from the UAT environment outside of the approved testing tools and document repository.
- Screenshots containing personal data — even masked data — must be stored securely in the approved document repository and not shared via unsecured channels (e.g., personal email, messaging applications).
- At the conclusion of UAT, the Data Management Team must sanitize or destroy all data in the UAT environment within [X] business days of UAT closure.
- Any data breach or suspected data breach identified during UAT must be reported immediately to the Information Security team and Privacy Officer per the Data Breach Response Procedure.

---

## 16. Review and Update History

*This section records the history of changes made to this procedure document. All changes, regardless of magnitude, must be recorded here.*

### 16.1 Document Change Log

| Version | Date | Author | Change Description | Reviewed By | Approved By |
|---|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation | [Reviewer Name] | [Approver Name] |
| 1.1 | [Date] | [Author Name] | [Description of change] | [Reviewer Name] | [Approver Name] |
| 1.2 | [Date] | [Author Name] | [Description of change] | [Reviewer Name] | [Approver Name] |
| 2.0 | [Date] | [Author Name] | [Description of major revision — e.g., annual review, regulatory update] | [Reviewer Name] | [Approver Name] |

### 16.2 Review Schedule

| Review Type | Frequency | Trigger |
|---|---|---|
| **Scheduled Annual Review** | Every 12 months from the Last Review Date | Calendar-based |
| **Triggered Review** | As required | Significant change to regulatory requirements (BNM RMiT update); material change to [Organization Name]'s technology or operating environment; significant deficiency identified during UAT or post-implementation review; internal or external audit finding related to UAT |

### 16.3 Review Responsibilities

| Activity | Responsible |
|---|---|
| Initiating the annual review | QA Lead |
| Conducting the review | QA Lead with input from Business Owners, Information Security, and Compliance |
| Reviewing proposed changes | [Head of QA / IT Risk Committee] |
| Approving updated document | [CTO / Designated Approver] |
| Distributing updated document | QA Lead |
| Archiving superseded versions | Document Control / QA Lead |

---

## 17. Review and Approval

### 17.1 Approval Sign-Off

*The following individuals have reviewed and approved this document for use within [Organization Name]. By signing below, each approver confirms that the document is accurate, complete, and fit for purpose.*

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead (Document Owner) | [Name] | | [Date] |
| [Head of Quality Assurance / IT Manager] | [Name] | | [Date] |
| Chief Technology Officer (CTO) | [Name] | | [Date] |
| Chief Information Security Officer (CISO) | [Name] | | [Date] |
| Chief Compliance Officer | [Name] | | [Date] |
| [Additional Approver] | [Name] | | [Date] |

### 17.2 Distribution List

*This document is distributed to the following roles. Recipients are responsible for familiarizing themselves with its contents and ensuring it is applied within their areas of responsibility.*

| Role / Team | Distribution Method | Date Distributed |
|---|---|---|
| QA Team | [Document Repository] | [Date] |
| IT Management | [Document Repository + Email] | [Date] |
| Business Owners | [Document Repository + Email] | [Date] |
| Change Management | [Document Repository] | [Date] |
| Information Security | [Document Repository] | [Date] |
| Internal Audit | [Document Repository] | [Date] |
| Compliance | [Document Repository] | [Date] |
| Vendor Management | [Document Repository] | [Date] |

---

## 18. References

*This section lists the regulatory instruments, internal policies, and standards that this procedure is designed to satisfy or implement.*

### 18.1 Regulatory References

| Reference | Document | Clause / Section | Relevance |
|---|---|---|---|
| BNM | Risk Management in Technology (RMiT) Policy Document | **Clause 10.9** | Primary regulatory basis for UAT as a mandatory control in the system development lifecycle |
| BNM | Risk Management in Technology (RMiT) Policy Document | Clause 10.1 – 10.8 | Broader SDLC requirements that UAT supports and integrates with |
| BNM | Risk Management in Technology (RMiT) Policy Document | Clause 11 | Change management requirements; UAT as a mandatory gate in the change process |
| BNM | Risk Management in Technology (RMiT) Policy Document | Clause 14 | Extension of UAT requirements to technology service providers and outsourced changes |
| Malaysian Government | Personal Data Protection Act 2010 (PDPA) | Sections 5, 6, 7 | Data protection obligations applicable to the handling of personal data during UAT |
| NACSA | National Cyber Security Policy / Cybersecurity Framework | Control Domain 5 | Secure test environment and segregation of duties requirements |
| BNM | Guidelines on Data Management and Management Information System | [Relevant Sections] | Data governance requirements applicable to test data management |

### 18.2 Internal Policy References

| Document Title | Document ID | Version | Relationship |
|---|---|---|---|
| IT Change Management Policy | [Doc ID] | [Ver] | UAT is a mandatory phase within the Change Management process |
| System Development Lifecycle (SDLC) Policy | [Doc ID] | [Ver] | This procedure implements the UAT phase of the SDLC |
| Information Security Policy | [Doc ID] | [Ver] | Security controls applicable to the UAT environment |
| Data Classification Policy | [Doc ID] | [Ver] | Governs data handling and masking requirements for UAT |
| User Access Management Policy | [Doc ID] | [Ver] | Governs access provisioning and deprovisioning for UAT environments |
| Vendor Management Policy | [Doc ID] | [Ver] | Extends UAT obligations to third-party change deliverables |
| Risk Management Framework | [Doc ID] | [Ver] | UAT outcomes and defect risk acceptance feed into the risk register |
| Records Retention Policy | [Doc ID] | [Ver] | Governs the retention period for UAT artefacts and evidence |
| Data Breach Response Procedure | [Doc ID] | [Ver] | Applicable if a data breach is identified during UAT |

### 18.3 Related Procedures and Templates

| Document Title | Document ID | Purpose |
|---|---|---|
| UAT Test Plan Template | [Doc ID] | Standard template for producing UAT Test Plans |
| UAT Test Case Template | [Doc ID] | Standard template for documenting test cases |
| UAT Sign-Off Form | [Doc ID] / Appendix A | Formal sign-off form for UAT completion |
| Defect Log Template | [Doc ID] / Appendix B | Standard defect tracking log |
| Test Execution Register Template | [Doc ID] / Appendix C | Standard test execution tracking register |
| Risk Acceptance Form | [Doc ID] / Appendix D | Form for documenting and approving defect risk acceptance |

---

## 19. Appendices

### Appendix A: UAT Sign-Off Form

*This form must be completed upon successful conclusion of UAT and retained as evidence of UAT completion. This form is a mandatory artefact for BNM RMiT compliance.*

---

**UAT SIGN-OFF FORM**

| Field | Details |
|---|---|
| **Project / Change Name** | [Project / Change Name] |
| **Change Request Reference** | [CR Number] |
| **System / Application** | [System Name] |
| **UAT Period** | [Start Date] to [End Date] |
| **UAT Test Plan Reference** | [Document ID] |
| **QA Lead** | [Name] |

**UAT Outcome Summary:**

| Metric | Result |
|---|---|
| Total Test Cases Planned | |
| Total Test Cases Executed | |
| Test Cases Passed | |
| Test Cases Failed | |
| Test Cases Blocked | |
| Total Defects Raised | |
| Critical Defects Resolved | |
| High Defects Resolved | |
| Medium Defects Open (Risk Accepted) | |
| Low Defects Open (Deferred) | |
| Overall Pass Rate | % |

**Exit Criteria Met:** [ ] Yes &nbsp; [ ] No (if No, attach Exit Criteria Assessment Report with justification)

**Outstanding Defects / Risk Acceptance:**

*List any defects that remain open at sign-off and the agreed disposition for each:*

| Defect ID | Severity | Description | Disposition | Resolution Date |
|---|---|---|---|---|
| | | | Risk Accepted / Deferred | |
| | | | Risk Accepted / Deferred | |

**Sign-Off Declaration:**

*By signing below, I confirm that UAT has been conducted in accordance with the UAT Procedure [Document ID], that Exit Criteria have been assessed, and that I approve the system / change for deployment to the production environment.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Business Owner | | | |
| QA Lead | | | |
| Change Manager | | | |
| CISO (if applicable) | | | |
| CTO (if applicable) | | | |

---

### Appendix B: UAT Test Plan Template

*This appendix provides a structured template for producing the UAT Test Plan for each UAT engagement. The QA Lead is responsible for completing this template prior to UAT commencement.*

---

**UAT TEST PLAN**

| Field | Details |
|---|---|
| **Project / Change Name** | |
| **Change Request Reference** | |
| **System / Application** | |
| **Version Under Test** | |
| **Document Version** | |
| **Prepared By (QA Lead)** | |
| **Date Prepared** | |
| **Business Owner** | |
| **Approved By (Business Owner)** | |
| **Approval Date** | |

**1. Test Scope**

*In Scope:*
- [Business process / module / function 1]
- [Business process / module / function 2]

*Out of Scope:*
- [Exclusion 1 and rationale]
- [Exclusion 2 and rationale]

**2. Test Objectives**
- [Objective 1]
- [Objective 2]

**3. Test Approach**
- [ ] Fully scripted (all test cases pre-defined)
- [ ] Hybrid (scripted for core paths; exploratory for edge cases)
- [ ] Exploratory (for low-risk changes only)

**4. Test Schedule**

| Milestone | Planned Date | Responsible |
|---|---|---|
| UAT Environment Ready | | Infrastructure Lead |
| Entry Criteria Assessment | | QA Lead |
| UAT Kick-Off | | QA Lead |
| Test Execution — Phase 1 | | UAT Testers |
| Defect Fix Deployment | | Development Lead |
| Test Execution — Phase 2 (Regression & Retest) | | UAT Testers |
| Exit Criteria Assessment | | QA Lead |
| UAT Sign-Off | | Business Owner |

**5. Resource Plan**

| Role | Name | Business Unit | Availability (%) |
|---|---|---|---|
| QA Lead | | | |
| UAT Tester 1 | | | |
| UAT Tester 2 | | | |
| Business Analyst | | | |

**6. Entry Criteria** *(refer to Section 12.1 of UAT Procedure)*

**7. Exit Criteria** *(refer to Section 12.2 of UAT Procedure)*

**8. Risk Assessment**

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Key tester unavailability | Medium | High | Identify backup testers in advance |
| Environment instability | Low | High | Environment stability smoke test on Day 1 |
| High defect volume delaying schedule | Medium | High | Buffer days built into schedule; daily escalation tracking |
| [Risk] | | | |

**9. Defect Management**
- Defect tool: [Tool Name]
- Triage frequency: Daily
- Escalation SLA: per Section 14 of UAT Procedure

**10. Communication Plan**

| Communication | Frequency | Owner | Audience |
|---|---|---|---|
| Daily status report | Daily (end of test day) | QA Lead | Business Owner, PM, Change Manager |
| Escalation notifications | As required | QA Lead | Per escalation matrix |
| UAT completion notification | Upon sign-off | QA Lead | All stakeholders |

---

### Appendix C: Defect Log Template

*Use this template as the basis for the defect log maintained in [Defect Management Tool]. Export to this format for inclusion in the UAT Sign-Off Package.*

| Defect ID | Date Raised | Raised By | Test Case Ref | Module / Function | Defect Description | Steps to Reproduce | Actual Result | Expected Result | Severity | Priority | Assigned To | Status | Date Resolved | Resolution Description | Verified By | Close Date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| DEF-001 | | | | | | | | | | | | | | | | |
| DEF-002 | | | | | | | | | | | | | | | | |

---

### Appendix D: Risk Acceptance Form

*This form must be completed for each defect where the Business Owner elects to accept residual risk and proceed to production deployment with the defect unresolved.*

---

**DEFECT RISK ACCEPTANCE FORM**

| Field | Details |
|---|---|
| **Project / Change Name** | |
| **Change Request Reference** | |
| **Defect ID** | |
| **Defect Description** | |
| **Defect Severity** | [ ] Critical &nbsp; [ ] High &nbsp; [ ] Medium &nbsp; [ ] Low |
| **Reason Defect Cannot Be Resolved Pre-Go-Live** | |
| **Impact Assessment** | |
| **Compensating Controls (if any)** | |
| **Remediation Plan** | |
| **Committed Resolution Date** | |
| **Risk Owner** | |

**Risk Acceptance Approvals:**

*Note: Risk acceptance for Critical and High severity defects requires CISO and CTO approval in addition to Business Owner.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Business Owner | | | |
| QA Lead | | | |
| CISO (Critical/High only) | | | |
| CTO (Critical/High only) | | | |

**Risk Register Reference:** [Risk Register ID — to be completed by Risk/Compliance team]

---

### Appendix E: Post-Implementation Review (PIR) Template

*The PIR is conducted by the QA Lead and Project Manager [X] business days after production deployment to assess the effectiveness of the UAT process and identify improvements.*

---

**POST-IMPLEMENTATION REVIEW REPORT**

| Field | Details |
|---|---|
| **Project / Change Name** | |
| **Go-Live Date** | |
| **PIR Date** | |
| **Conducted By** | |
| **Attendees** | |

**1. Deployment Outcome**
- [ ] Successful — no issues in production
- [ ] Successful with minor issues
- [ ] Rollback required

**2. Production Defects Identified Post-Go-Live**

| Defect | Severity | Was this identified during UAT? | Root Cause | Action |
|---|---|---|---|---|
| | | [ ] Yes &nbsp; [ ] No | | |

**3. UAT Process Effectiveness Assessment**

| Assessment Area | Rating (1-5) | Comments |
|---|---|---|
| Test case coverage | | |
| Defect detection rate | | |
| Environment stability | | |
| Tester engagement and capability | | |
| Schedule adherence | | |
| Communication effectiveness | | |
| Sign-off process | | |

**4. Lessons Learned**

| Lesson | Category | Recommended Improvement | Owner | Target Date |
|---|---|---|---|---|
| | Process / People / Tools / Environment | | | |

**5. Actions**

| Action | Owner | Target Date | Status |
|---|---|---|---|
| | | | |

**Prepared By (QA Lead):** ___________________________________ **Date:** _______________

**Reviewed By (Project Manager):** ___________________________________ **Date:** _______________

---

*End of Document*

---

*This document is the property of [Organization Name] and is subject to the confidentiality obligations stated on the cover page. For queries regarding this document, contact the QA Lead at [Contact Details].*

| Document ID | Version | Classification | Last Reviewed | Next Review |
|---|---|---|---|---|
| [Document ID] | 1.0 | Confidential | [Last Review Date] | [Next Review Date] |