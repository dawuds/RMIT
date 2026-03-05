# Release Management Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Release Management Process Flow](#5-release-management-process-flow)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Release Planning](#7-release-planning)
8. [Change Classification and Categorisation](#8-change-classification-and-categorisation)
9. [Development and Testing Requirements](#9-development-and-testing-requirements)
10. [Release Approval and Change Advisory Board](#10-release-approval-and-change-advisory-board)
11. [Deployment Procedures](#11-deployment-procedures)
12. [Post-Release Verification and Monitoring](#12-post-release-verification-and-monitoring)
13. [Rollback Procedures](#13-rollback-procedures)
14. [Tools and Systems](#14-tools-and-systems)
15. [Escalation Procedures](#15-escalation-procedures)
16. [Compliance and Audit](#16-compliance-and-audit)
17. [Review and Approval](#17-review-and-approval)
18. [References](#18-references)
19. [Appendices](#19-appendices)

---

## 1. Purpose

*Describe the intent of this procedure and the regulatory obligation it fulfils. Link to RMiT and any internal policy documents.*

This procedure establishes a structured and controlled approach for the planning, testing, approval, deployment, and post-release verification of changes to production technology environments at [Organization Name]. It ensures that all releases are managed in a manner that minimises operational risk, protects the integrity and availability of critical systems, and maintains compliance with applicable regulatory requirements.

This document supports [Organization Name]'s obligations under Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.12, which mandates that financial institutions implement a robust release management process to govern changes deployed into production environments.

---

## 2. Scope and Applicability

*Define the boundaries of this procedure — which systems, teams, release types, and environments are covered. Be explicit about any exclusions.*

### 2.1 In-Scope

This procedure applies to all technology changes — including software releases, infrastructure modifications, configuration changes, and third-party package updates — that are intended for deployment to production environments owned or operated by [Organization Name].

This procedure covers:

- All **production application releases** across core banking, digital channels, middleware, and supporting systems
- **Infrastructure changes** including server provisioning, network configuration, and cloud resource modifications
- **Database changes** including schema migrations, stored procedure updates, and data transformation scripts
- **Third-party software updates**, patches, and vendor-supplied releases
- **Emergency and hotfix releases** deployed outside of the standard release schedule
- **Configuration changes** to production systems, including parameter updates, access control modifications, and integration settings
- All technology environments: Development, System Integration Testing (SIT), User Acceptance Testing (UAT), Pre-Production (Staging), and Production

### 2.2 Out-of-Scope

The following activities are outside the scope of this procedure:

- Changes deployed exclusively to development or sandbox environments that have no impact on production
- Read-only or informational content updates to internal intranets or knowledge bases, as defined by [Relevant Department Head]
- Break-fix activities resolved entirely within development environments with no production impact

### 2.3 Applicable Systems and Applications

*List all critical and non-critical systems subject to this procedure. Update this list as the application portfolio changes.*

| System / Application | System Owner | Criticality | Environment |
|---|---|---|---|
| [Core Banking System Name] | [System Owner] | Critical | Production |
| [Internet Banking Platform] | [System Owner] | Critical | Production |
| [Mobile Banking Application] | [System Owner] | High | Production |
| [Payment Gateway] | [System Owner] | Critical | Production |
| [Customer Relationship Management] | [System Owner] | Medium | Production |
| [Data Warehouse / Reporting Platform] | [System Owner] | Medium | Production |
| [IT Service Management Platform] | [System Owner] | Medium | Production |
| [Other Systems] | [System Owner] | [Level] | [Environment] |

---

## 3. Regulatory and Policy Context

*Reference all applicable regulatory frameworks, internal policies, and standards that this procedure fulfils. This section forms the basis for audit traceability.*

### 3.1 Regulatory Requirements

This procedure is established in accordance with the following regulatory instruments:

| Regulatory Reference | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 10.12 | Controlled deployment of changes to production environments |
| BNM Risk Management in Technology (RMiT) | Clause 10.1 – 10.11 | General technology risk management requirements |
| BNM Risk Management in Technology (RMiT) | Clause 11 | Technology audit and review |
| Personal Data Protection Act 2010 (PDPA) | Section 9 – Security Principle | Protection of personal data during system changes |
| [Other Applicable Regulation] | [Section] | [Requirement] |

### 3.2 Internal Policy Alignment

This procedure operates within the framework established by the following internal policies and standards:

- [Organization Name] Information Technology Policy
- [Organization Name] Information Security Policy
- [Organization Name] Change Management Policy
- [Organization Name] Incident Management Procedure
- [Organization Name] Business Continuity Plan
- [Organization Name] IT Risk Management Framework

### 3.3 External Standards and Best Practices

Where applicable, this procedure aligns with:

- ITIL 4 — Release Management Practice
- ISO/IEC 27001:2022 — Annex A Control 8.32 (Change Management)
- ISACA COBIT 2019 — BAI06 (Managed IT Changes)

---

## 4. Definitions and Abbreviations

*Provide clear definitions for all technical and procedural terms used in this document to ensure consistent interpretation across departments.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Release** | A versioned and tested set of one or more changes to a technology system, packaged and ready for deployment to production |
| **Change** | Any addition, modification, or removal of a technology component, configuration, or service that may affect production systems |
| **Production Environment** | The live operational environment that directly supports business services and end-user transactions |
| **Pre-Production / Staging Environment** | A near-identical replica of the production environment used for final validation prior to deployment |
| **User Acceptance Testing (UAT)** | Formal testing conducted by business users to validate that a release meets defined business requirements |
| **System Integration Testing (SIT)** | Technical testing to verify that integrated systems function correctly following a change |
| **Rollback** | The process of reverting a production environment to its prior stable state following a failed or problematic release |
| **Change Advisory Board (CAB)** | A governance body responsible for reviewing, prioritising, and approving changes to production environments |
| **Emergency Change** | An unplanned change required urgently to restore service or address a critical security vulnerability |
| **Standard Change** | A pre-approved, low-risk, repeatable change with a documented and tested implementation procedure |
| **Normal Change** | A change that follows the full release management workflow, including CAB review and approval |
| **Release Calendar** | A forward-looking schedule of planned releases and associated maintenance windows |
| **Deployment Window** | An approved time slot during which production deployments may be executed |
| **Hotfix** | An emergency software patch deployed outside the standard release cycle to address a critical defect |
| **Release Manager** | The individual accountable for coordinating the end-to-end release process |
| **Artefact** | A versioned build package, configuration file, script, or binary produced during the software development lifecycle |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| CAB | Change Advisory Board |
| ITSM | IT Service Management |
| UAT | User Acceptance Testing |
| SIT | System Integration Testing |
| CI/CD | Continuous Integration / Continuous Deployment |
| SDLC | Software Development Lifecycle |
| SLA | Service Level Agreement |
| RTO | Recovery Time Objective |
| RPO | Recovery Point Objective |
| RACI | Responsible, Accountable, Consulted, Informed |
| PIR | Post-Implementation Review |
| RFC | Request for Change |

---

## 5. Release Management Process Flow

*Provide a high-level description of the end-to-end release lifecycle. Include a visual process flow diagram or a sequential stage description. This section serves as the primary reference for all participants in the release process.*

### 5.1 Process Overview

The release management process at [Organization Name] follows a structured lifecycle comprising the following sequential stages:

```
[Request Initiation] → [Change Classification] → [Development & Build]
        → [Testing (SIT/UAT)] → [CAB Review & Approval] → [Release Packaging]
                → [Deployment] → [Post-Release Verification] → [PIR & Closure]
```

*Insert a formal process flow diagram here. Diagram should be version-controlled and stored in [Document Repository Path].*

### 5.2 Stage Summary

| Stage | Description | Key Gate Criteria |
|---|---|---|
| **1. Request Initiation** | A Request for Change (RFC) is raised via the ITSM platform with full impact assessment | RFC fully completed; business justification documented |
| **2. Change Classification** | The Release Manager classifies the change as Standard, Normal, or Emergency | Classification approved by Change Manager |
| **3. Development & Build** | Developer implements the change in the development environment and produces a versioned artefact | Code review completed; artefact version-tagged |
| **4. Testing** | SIT and UAT are conducted in designated test environments | All test cases passed; no open Critical or High defects |
| **5. CAB Review & Approval** | The Change Advisory Board reviews and approves the release for production | CAB sign-off recorded in ITSM; business sponsor approval obtained |
| **6. Release Packaging** | The release artefact is packaged, signed, and stored in the approved artefact repository | Artefact checksum verified; deployment runbook finalised |
| **7. Deployment** | The release is deployed to production within an approved deployment window by authorised personnel | Deployment checklist completed; change record updated in real-time |
| **8. Post-Release Verification** | System health checks and functional smoke tests confirm successful deployment | All verification steps passed; no P1/P2 incidents raised |
| **9. PIR & Closure** | A Post-Implementation Review is conducted and the change record is formally closed | PIR report filed; lessons learned documented |

---

## 6. Roles and Responsibilities

*Define all roles involved in the release management process and their respective accountabilities. Ensure alignment with the organisation's existing role structure.*

### 6.1 Role Descriptions

| Role | Description |
|---|---|
| **Release Manager** | Accountable for end-to-end coordination of the release process, including scheduling, gate reviews, and stakeholder communication |
| **Change Manager** | Owns the change management policy and process; chairs the Change Advisory Board |
| **Application Development Lead** | Responsible for the technical quality of code changes and artefact production |
| **Quality Assurance (QA) Lead** | Responsible for test strategy, test execution oversight, and sign-off on testing completeness |
| **System / Infrastructure Engineer** | Responsible for environment provisioning, deployment execution, and infrastructure health monitoring |
| **Information Security Officer** | Reviews changes for security impact; provides security sign-off for high-risk releases |
| **Business Owner / Project Sponsor** | Accountable for business justification; provides UAT sign-off |
| **IT Risk Manager** | Assesses technology risk associated with releases; escalation point for risk acceptance |
| **IT Operations Manager** | Oversees production stability during and after deployment; authorises deployment window usage |
| **Change Advisory Board (CAB)** | Governance body that reviews and approves production changes |
| **Service Desk / L1 Support** | First point of contact for post-release incidents; monitors alerts during deployment window |

### 6.2 RACI Matrix

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

| Activity | Release Manager | Change Manager | Dev Lead | QA Lead | Infra Engineer | CISO / ISO | Business Owner | IT Risk Manager | IT Ops Manager |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Raise Request for Change (RFC) | R | I | C | I | I | I | C | I | I |
| Classify Change Type | A | R | C | I | C | C | I | C | I |
| Conduct Impact and Risk Assessment | C | A | R | C | C | C | C | R | C |
| Develop and Unit Test | I | I | R/A | C | I | I | I | I | I |
| Conduct SIT | C | I | R | A | C | I | I | I | I |
| Conduct UAT | C | I | C | R | I | I | A | I | I |
| Package and Version Release Artefact | R | I | A | C | R | I | I | I | I |
| Submit to CAB for Approval | R | A | C | C | I | C | C | C | I |
| CAB Review and Approval | C | A | C | C | I | C | C | C | C |
| Security Review and Sign-Off | I | C | C | I | I | R/A | I | C | I |
| Schedule Deployment Window | A | C | I | I | R | I | I | I | C |
| Execute Production Deployment | C | I | C | I | R/A | I | I | I | C |
| Post-Release Smoke Testing | C | I | C | R | A | I | C | I | C |
| Monitor Post-Deployment Stability | I | I | C | I | R | I | I | I | A |
| Initiate Rollback (if required) | A | C | C | I | R | C | I | C | R |
| Conduct Post-Implementation Review | A | C | R | R | C | C | C | C | C |
| Close Change Record | R | A | I | I | I | I | I | I | I |

---

## 7. Release Planning

*Describe how releases are planned, scheduled, and communicated. Include guidance on the release calendar, freeze periods, and stakeholder notification requirements.*

### 7.1 Release Schedule and Calendar

[Organization Name] maintains a **Release Calendar** that is published and accessible to all relevant stakeholders via [Document Repository / ITSM Tool]. The Release Calendar is reviewed and updated [monthly / quarterly] by the Release Manager in coordination with project teams and IT Operations.

Key scheduling principles:

- All normal (non-emergency) releases must be scheduled a minimum of **[X] business days** in advance
- Releases to critical systems (Tier 1) require a minimum of **[X] business days** advance notice to CAB
- Releases must be aligned with approved **Deployment Windows** (see Section 7.3)
- The Release Manager is responsible for resolving scheduling conflicts and communicating changes to all affected parties

### 7.2 Release Freeze Periods

*Define periods during which production deployments are prohibited or require elevated approval. Common examples include financial year-end, regulatory reporting periods, and festive public holidays.*

Production releases shall be prohibited or subject to emergency-level approval during the following freeze periods:

| Freeze Period | Dates (Indicative) | Applicable Systems | Exception Authority |
|---|---|---|---|
| Financial Year-End Freeze | [Date Range] | All Production Systems | [CIO / CTO Name/Role] |
| Regulatory Reporting Blackout | [Date Range] | Core Banking, Reporting | [CIO / Compliance Head] |
| Major Public Holiday Period | [Date Range] | All Production Systems | [CIO / CTO Name/Role] |
| System Audit Period | [Date Range] | Systems Under Audit | [IT Risk Manager] |
| [Other Freeze Period] | [Date Range] | [Applicable Systems] | [Authority] |

Any exception to release freeze periods must be approved in writing by the designated Exception Authority and documented in the corresponding change record.

### 7.3 Deployment Windows

All production deployments must be executed within approved deployment windows unless an emergency change is authorised.

| Window Type | Permitted Hours | Days | Applicable System Tier |
|---|---|---|---|
| Standard Deployment Window | [e.g., 10:00 PM – 02:00 AM] | [e.g., Tuesday, Thursday] | Tier 2 and Tier 3 |
| Critical System Window | [e.g., 11:00 PM – 03:00 AM] | [e.g., Saturday] | Tier 1 (Core Banking) |
| Emergency Window | Any time, with authorisation | Any day | All tiers |

### 7.4 Stakeholder Communication

The Release Manager is responsible for communicating release activities to stakeholders in accordance with the following schedule:

| Communication | Timing | Recipients | Channel |
|---|---|---|---|
| Release Notification (Normal) | [X] business days before deployment | IT Operations, Business Owners, Service Desk | [Email / ITSM / Communication Platform] |
| Release Notification (Critical Systems) | [X] business days before deployment | All stakeholders + Senior Management | [Email / ITSM] |
| Pre-Deployment Reminder | 24 hours before deployment | IT Operations, Service Desk, On-call Team | [Email / Communication Platform] |
| Deployment Commencement Notice | At start of deployment window | IT Operations, Service Desk | [Communication Platform] |
| Deployment Completion Notice | Upon successful deployment | All release stakeholders | [Email / Communication Platform] |
| Post-Release Summary | Within [X] business days of deployment | IT Management, Business Owners | [Email / ITSM] |

---

## 8. Change Classification and Categorisation

*Define the types of changes recognised by the organisation and the criteria for classifying each type. This section determines the approval path and urgency level for each release.*

### 8.1 Change Types

All changes must be classified into one of the following categories at the time of RFC submission:

#### 8.1.1 Standard Change

A pre-approved, low-risk, repeatable change with a fully documented and tested implementation procedure. Standard changes do not require CAB approval for each instance, but must be logged in the ITSM system.

**Criteria for Standard Change:**
- Previously approved implementation procedure exists and is documented
- Risk rating is Low as per the Risk Assessment Matrix (Appendix A)
- Change has been successfully implemented at least [X] times previously without incident
- Can be fully reversed within [X] minutes

**Examples:** Routine password resets, pre-approved SSL certificate renewals, scheduled antivirus definition updates.

#### 8.1.2 Normal Change

A change that follows the complete release management workflow, including CAB review and approval. Normal changes are further sub-classified by risk and impact.

| Sub-Category | Risk Level | Impact | CAB Approval Required | Minimum Lead Time |
|---|---|---|---|---|
| Normal — Minor | Low | Low | [Abbreviated CAB / Email approval] | [X] business days |
| Normal — Moderate | Medium | Medium | Full CAB meeting | [X] business days |
| Normal — Major | High | High or Widespread | Full CAB + Senior Management | [X] business days |

#### 8.1.3 Emergency Change

An unplanned change required urgently to restore a failed service, remediate a critical security vulnerability, or address a regulatory directive. Emergency changes follow an expedited approval path but must be fully documented and reviewed post-implementation.

**Criteria for Emergency Change:**
- The change is required to restore a P1/P2 production incident or prevent imminent service disruption
- A critical security vulnerability (CVSS Score ≥ 9.0) requires immediate patching
- A regulatory or supervisory directive mandates immediate action
- The change cannot be safely deferred to the next standard deployment window

**Authorisation:** Emergency changes require approval from [Authorised Roles, e.g., IT Operations Manager + CISO or CTO] prior to deployment. Full CAB review must be completed within [X] business hours post-implementation.

### 8.2 Risk Rating Matrix

*All changes must be risk-rated using the matrix below at the time of RFC submission.*

| Impact \ Likelihood | Low | Medium | High |
|---|---|---|---|
| **High** | Medium | High | Critical |
| **Medium** | Low | Medium | High |
| **Low** | Low | Low | Medium |

| Risk Rating | Required Actions |
|---|---|
| **Critical** | Mandatory CISO and IT Risk Manager review; Senior Management notification; enhanced rollback planning required |
| **High** | Full CAB approval; security review; IT Risk Manager sign-off |
| **Medium** | Full CAB approval; standard risk assessment |
| **Low** | Abbreviated approval; standard process |

---

## 9. Development and Testing Requirements

*Define the mandatory quality gates that all releases must pass before they are eligible for production deployment. This section ensures that releases meet both technical and business quality standards.*

### 9.1 Development Standards

All development activities associated with a release must adhere to [Organization Name]'s Software Development Lifecycle (SDLC) Policy and the following minimum standards:

- All code changes must be committed to the approved version control system: **[Version Control System, e.g., GitLab / Azure DevOps]**
- Code changes must undergo a formal **peer code review** by at least [X] developer(s) before promotion to SIT
- Code reviews must verify adherence to [Organization Name]'s Secure Coding Standards
- Artefacts must be **version-tagged** using the approved versioning scheme: `[Major].[Minor].[Patch]-[Build Number]`
- No release artefact may be manually modified after passing code review; all changes must be re-reviewed

### 9.2 Testing Requirements

*Specify the mandatory testing stages and the pass criteria for each. Define who is responsible for each testing phase and what documentation is required.*

All releases must successfully complete the following testing stages before CAB submission:

#### 9.2.1 Unit Testing

| Requirement | Detail |
|---|---|
| **Responsible Party** | Application Development Team |
| **Environment** | Development |
| **Minimum Coverage** | [X]% code coverage for new code |
| **Pass Criteria** | Zero critical or high severity test failures |
| **Evidence Required** | Unit test report generated by CI pipeline |

#### 9.2.2 System Integration Testing (SIT)

| Requirement | Detail |
|---|---|
| **Responsible Party** | QA Team |
| **Environment** | SIT Environment |
| **Test Scope** | All integration points affected by the change |
| **Pass Criteria** | All critical and high test cases passed; no open P1/P2 defects |
| **Evidence Required** | SIT Test Report signed off by QA Lead |
| **Regression Testing** | Mandatory for Normal — Major and all Tier 1 system releases |

#### 9.2.3 User Acceptance Testing (UAT)

| Requirement | Detail |
|---|---|
| **Responsible Party** | Business Owner / Designated Business Users |
| **Environment** | UAT Environment |
| **Test Scope** | All business processes affected by the change |
| **Pass Criteria** | Business Owner sign-off; no open UAT defects of Medium severity or above |
| **Evidence Required** | UAT Sign-Off Form (Appendix B) |
| **Waiver** | UAT may be waived for emergency changes with written approval from [Business Owner / CIO] |

#### 9.2.4 Performance and Load Testing

*Required for releases to Tier 1 systems or releases that introduce significant architectural changes.*

| Requirement | Detail |
|---|---|
| **Trigger Condition** | Tier 1 system release; changes to APIs, databases, or high-volume transaction flows |
| **Responsible Party** | QA Team with Infrastructure support |
| **Pass Criteria** | Response times within SLA thresholds under [X]% of peak production load |
| **Evidence Required** | Performance Test Report |

#### 9.2.5 Security Testing

| Requirement | Detail |
|---|---|
| **Trigger Condition** | Any change to authentication, authorisation, encryption, or external-facing components |
| **Responsible Party** | Information Security Team or approved third party |
| **Testing Types** | Static Application Security Testing (SAST); Dynamic Application Security Testing (DAST); Vulnerability Scanning |
| **Pass Criteria** | No Critical or High vulnerabilities unresolved at time of deployment |
| **Evidence Required** | Security Test Report; CISO / ISO sign-off |

### 9.3 Defect Management and Release Gates

| Severity | Definition | Release Gate Impact |
|---|---|---|
| **Critical (P1)** | System crash, data loss, or security breach | Release **blocked**; must be resolved before deployment |
| **High (P2)** | Major feature failure; no acceptable workaround | Release **blocked**; must be resolved or formally accepted by Business Owner |
| **Medium (P3)** | Partial feature failure; workaround available | Release may proceed with documented acceptance and remediation plan |
| **Low (P4)** | Minor defect; cosmetic issue | Release may proceed; defect logged for future release |

---

## 10. Release Approval and Change Advisory Board

*Define the composition, meeting cadence, and decision-making authority of the Change Advisory Board (CAB). Specify the approval requirements for each change type.*

### 10.1 Change Advisory Board Composition

| Member | Role | Voting Rights |
|---|---|---|
| [Name / Role] | CAB Chair (Change Manager) | Yes |
| [Name / Role] | IT Operations Manager | Yes |
| [Name / Role] | Application Development Lead | Yes |
| [Name / Role] | Information Security Officer | Yes |
| [Name / Role] | IT Risk Manager | Yes |
| [Name / Role] | Business Representative | Yes |
| [Name / Role] | Infrastructure / Platform Lead | Yes |
| [Name / Role] | Release Manager | No (Secretary) |
| [Name / Role] | Service Desk Manager | No (Observer) |

*Additional members (e.g., external vendors, project managers) may be invited on an ad-hoc basis for specific releases.*

### 10.2 CAB Meeting Cadence

| Meeting Type | Frequency | Agenda Scope |
|---|---|---|
| Standard CAB | [Weekly / Bi-weekly] | All Normal — Minor and Normal — Moderate changes |
| Major Change CAB | [As required, minimum 48 hours notice] | Normal — Major and high-risk changes |
| Emergency CAB | Convened within [X] hours of request | Emergency changes only |
| CAB Review Board | [Monthly] | Review of completed changes, PIR findings, process improvements |

### 10.3 CAB Submission Requirements

A Request for Change (RFC) submitted to CAB must include the following documentation:

- [ ] Completed RFC form in ITSM system with full impact and risk assessment
- [ ] Technical design document or change specification
- [ ] Testing evidence (SIT report, UAT sign-off, security review as applicable)
- [ ] Deployment runbook with step-by-step implementation instructions
- [ ] Rollback plan with estimated rollback time
- [ ] Communication plan for affected stakeholders
- [ ] Business Owner approval

### 10.4 Approval Thresholds

| Change Type | Minimum Approvals Required |
|---|---|
| Standard Change | Pre-approved; log in ITSM only |
| Normal — Minor | [X] CAB members (email approval permitted) |
| Normal — Moderate | Majority CAB vote at scheduled CAB meeting |
| Normal — Major | Full CAB quorum vote + written sign-off from [CIO / CTO] |
| Emergency Change | [IT Operations Manager] + [CISO or CTO]; post-implementation CAB review within [X] hours |

---

## 11. Deployment Procedures

*Provide step-by-step guidance for executing a production deployment. This section must be followed precisely for all releases.*

### 11.1 Pre-Deployment Checklist

The following checks must be completed and signed off **prior** to commencing any production deployment:

| # | Pre-Deployment Check | Responsible | Status |
|---|---|---|---|
| 1 | CAB approval confirmed in ITSM; change record status set to "Approved" | Release Manager | [ ] |
| 2 | Deployment runbook reviewed and approved by Release Manager and IT Operations Manager | Release Manager / IT Ops | [ ] |
| 3 | Rollback plan documented and resources staged | Infrastructure Engineer | [ ] |
| 4 | Release artefact retrieved from approved repository; checksum verified | Infrastructure Engineer | [ ] |
| 5 | Pre-production / staging deployment completed successfully within [X] hours of production deployment | QA Lead | [ ] |
| 6 | Production database backup completed and verified | DBA / Infrastructure Engineer | [ ] |
| 7 | On-call support team notified and available for deployment window | IT Operations Manager | [ ] |
| 8 | Service Desk briefed on expected changes and potential impact | Release Manager | [ ] |
| 9 | Monitoring and alerting systems confirmed operational | Infrastructure Engineer | [ ] |
| 10 | Deployment window confirmed and stakeholders notified | Release Manager | [ ] |
| 11 | Access credentials and deployment permissions confirmed for deployment team | Infrastructure Engineer | [ ] |
| 12 | Change record updated to "In Progress" in ITSM | Release Manager | [ ] |

### 11.2 Deployment Execution Steps

*The following steps must be executed in order. The deployment engineer must document the actual start and end time for each step in the change record.*

| Step | Action | Responsible | Expected Duration | Actual Start | Actual End | Status |
|---|---|---|---|---|---|---|
| 1 | Open change record; confirm deployment window is active | Release Manager | 5 min | | | |
| 2 | Notify all stakeholders that deployment has commenced | Release Manager | 5 min | | | |
| 3 | Place affected system(s) into maintenance mode / suppress alerts as appropriate | Infrastructure Engineer | [X] min | | | |
| 4 | Execute deployment runbook Step 1: [e.g., Stop application services] | Infrastructure Engineer | [X] min | | | |
| 5 | Execute deployment runbook Step 2: [e.g., Deploy artefact to application server] | Infrastructure Engineer | [X] min | | | |
| 6 | Execute deployment runbook Step 3: [e.g., Apply database scripts] | DBA | [X] min | | | |
| 7 | Execute deployment runbook Step 4: [e.g., Update configuration parameters] | Infrastructure Engineer | [X] min | | | |
| 8 | Execute deployment runbook Step 5: [e.g., Restart application services] | Infrastructure Engineer | [X] min | | | |
| 9 | Conduct initial smoke test (see Section 12) | QA Lead / Infrastructure Engineer | [X] min | | | |
| 10 | Remove maintenance mode; re-enable alerting | Infrastructure Engineer | [X] min | | | |
| 11 | Notify Release Manager of deployment completion | Infrastructure Engineer | 5 min | | | |
| 12 | Update change record to "Deployed — Monitoring" | Release Manager | 5 min | | | |

*Note: If any step fails, the Infrastructure Engineer must immediately notify the Release Manager. The decision to continue, pause, or initiate rollback must be made within [X] minutes of failure detection.*

### 11.3 Separation of Duties Requirements

To maintain integrity and auditability of the deployment process, the following separation of duties controls must be enforced:

- The individual who developed the change **must not** be the individual who executes the production deployment
- CAB approval **must not** be granted by the same individual who submitted the RFC
- Database changes **must** be executed by a designated DBA or privileged access holder, not the application developer
- Production access credentials used during deployment must be returned or disabled within [X] hours post-deployment

---

## 12. Post-Release Verification and Monitoring

*Define the mandatory verification activities that must be conducted immediately after every production deployment to confirm that the release was successful and that production systems are stable.*

### 12.1 Smoke Testing

Immediately following deployment, the following smoke tests must be executed and results recorded:

| Test ID | Test Description | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|
| SMK-001 | Verify application is accessible and login is functional | Successful login within [X] seconds | | |
| SMK-002 | Verify core business function 1: [e.g., Account balance inquiry] | [Expected Result] | | |
| SMK-003 | Verify core business function 2: [e.g., Fund transfer initiation] | [Expected Result] | | |
| SMK-004 | Verify integration with [Downstream System] is operational | [Expected Result] | | |
| SMK-005 | Verify system health dashboard shows no critical alerts | No P1/P2 alerts active | | |
| SMK-006 | Verify database connectivity and core data queries | [Expected Result] | | |
| SMK-007 | [Additional test specific to release] | [Expected Result] | | |

### 12.2 Monitoring Period

Following a successful smoke test, the production environment must be actively monitored for a minimum of **[X] hours** post-deployment before the change record is considered stable.

| Monitoring Parameter | Threshold / Alert Condition | Monitoring Tool | Responsible |
|---|---|---|---|
| Application response time | > [X] ms average over [X] minutes | [APM Tool, e.g., Dynatrace] | IT Operations |
| Error rate | > [X]% of transactions in [X]-minute window | [Monitoring Tool] | IT Operations |
| CPU utilisation | > [X]% sustained over [X] minutes | [Infrastructure Monitor] | Infrastructure Engineer |
| Memory utilisation | > [X]% sustained over [X] minutes | [Infrastructure Monitor] | Infrastructure Engineer |
| Database query performance | > [X]% degradation vs. baseline | [DB Monitor] | DBA |
| Transaction success rate | < [X]% of expected throughput | [APM Tool] | IT Operations |
| Security events | Any anomalous authentication or access events | [SIEM Tool] | Information Security |

### 12.3 Post-Implementation Review (PIR)

A Post-Implementation Review must be conducted within **[X] business days** of every Normal — Major release and any emergency change. For Normal — Minor releases, a lightweight PIR shall be completed within **[X] business days**.

The PIR must address:

- Was the release deployed within the approved deployment window? If not, why?
- Were all pre-deployment checklist items completed as required?
- Did the deployment proceed according to the runbook? Document any deviations.
- Was the deployment completed within the planned duration?
- Were there any incidents or alerts triggered during or after the deployment?
- Was a rollback required? If so, document the root cause and resolution.
- What lessons were learned and what process improvements are recommended?

The PIR report must be stored in [Document Repository Path] and findings must be presented at the next CAB Review Board meeting.

---

## 13. Rollback Procedures

*Define the conditions under which a rollback is initiated, the authority required to authorise a rollback, and the step-by-step rollback procedure.*

### 13.1 Rollback Triggers

A rollback must be initiated if any of the following conditions are met during or after a production deployment:

- A P1 (Critical) incident is raised directly attributable to the release
- Smoke testing reveals a failure in a core business function with no immediate fix available
- System performance degrades beyond defined thresholds and cannot be stabilised within **[X] minutes**
- A critical security vulnerability is introduced by the release
- The deployment is not completed within the approved deployment window and continuation is assessed as high risk
- The Release Manager, IT Operations Manager, or CISO determines that rollback is necessary to protect system integrity or customer data

### 13.2 Rollback Authorisation

| Scenario | Authorisation Required |
|---|---|
| Rollback during deployment window | Release Manager in consultation with IT Operations Manager |
| Rollback after deployment window (system stable but issues detected) | IT Operations Manager + Release Manager + Business Owner notification |
| Emergency rollback (P1 incident) | IT Operations Manager has sole authority to initiate; notify Release Manager and CISO immediately |

### 13.3 Rollback Execution Steps

| Step | Action | Responsible |
|---|---|---|
| 1 | Declare rollback decision; notify all stakeholders via [Communication Channel] | Release Manager / IT Operations Manager |
| 2 | Place affected system(s) into maintenance mode | Infrastructure Engineer |
| 3 | Execute rollback runbook: revert application artefact to prior version | Infrastructure Engineer |
| 4 | Execute database rollback scripts (if applicable) — restore from pre-deployment backup | DBA |
| 5 | Revert configuration changes to prior state | Infrastructure Engineer |
| 6 | Restart application services | Infrastructure Engineer |
| 7 | Conduct smoke test to verify rollback success | QA Lead |
| 8 | Remove maintenance mode; re-enable alerting | Infrastructure Engineer |
| 9 | Notify all stakeholders that rollback is complete | Release Manager |
| 10 | Update change record to "Rolled Back" status in ITSM | Release Manager |
| 11 | Initiate incident record for the failed deployment | Service Desk / IT Operations |
| 12 | Schedule PIR within [X] business days | Release Manager |

### 13.4 Rollback Time Objectives

| System Tier | Maximum Rollback Time (RTO) |
|---|---|
| Tier 1 — Critical Systems | [X] minutes |
| Tier 2 — High Importance Systems | [X] minutes |
| Tier 3 — Standard Systems | [X] minutes |

*Rollback time objectives must be validated during pre-production testing. Where objectives cannot be met, the Release Manager must escalate to the IT Operations Manager prior to deployment.*

---

## 14. Tools and Systems

*List all tools and platforms used to support the release management process. Include the purpose of each tool and the team responsible for its administration.*

### 14.1 Release Management Toolchain

| Tool / Platform | Purpose | Administered By | Access Control |
|---|---|---|---|
| [ITSM Platform, e.g., ServiceNow / Jira Service Management] | RFC logging, CAB workflow, change record management | IT Operations | Role-based access; [Access Control Policy Reference] |
| [Version Control System, e.g., GitLab / Azure DevOps / GitHub Enterprise] | Source code management, version tagging, code review | Development Team | Role-based access; MFA enforced |
| [CI/CD Platform, e.g., Jenkins / GitLab CI / Azure Pipelines] | Automated build, test, and deployment pipeline | DevOps / Infrastructure | Service account; access restricted to pipeline service users |
| [Artefact Repository, e.g., JFrog Artifactory / Nexus] | Versioned artefact storage and distribution | DevOps / Infrastructure | Read-only for deployment; write-restricted to CI/CD pipeline |
| [Test Management Tool, e.g., Zephyr / Xray / TestRail] | Test case management, test execution records, reporting | QA Team | Role-based access |
| [Infrastructure Monitoring, e.g., Datadog / Dynatrace / Prometheus] | Real-time system health and performance monitoring | IT Operations | Read access for operations; admin restricted |
| [SIEM Platform, e.g., Splunk / Wazuh] | Security event monitoring during and post-deployment | Information Security | Restricted to Security team |
| [Communication Platform, e.g., Microsoft Teams / Slack] | Deployment notifications and incident coordination | All Teams | Managed by IT |
| [Document Repository, e.g., SharePoint / Confluence] | Storage of runbooks, PIR reports, and release documentation | IT Operations | Role-based access |

### 14.2 Access Control Requirements

- All production deployment tools must enforce **Multi-Factor Authentication (MFA)** for all users
- **Privileged access** for production deployments must be managed via [Privileged Access Management (PAM) Tool], with session recording enabled
- Production deployment credentials must be rotated within **[X] hours** after each deployment
- Access logs for all deployment tools must be retained for a minimum of **[X] months** in accordance with [Organization Name]'s log retention policy

---

## 15. Escalation Procedures

*Define the escalation paths for issues arising during any stage of the release management process, including deployment failures, security incidents, and regulatory concerns.*

### 15.1 Escalation Matrix

| Issue Type | Level 1 Escalation | Level 2 Escalation | Level 3 Escalation | Timeframe |
|---|---|---|---|---|
| Deployment failure (non-critical) | Release Manager | IT Operations Manager | CIO / CTO | Within [X] minutes |
| P1 production incident post-deployment | IT Operations Manager + CISO | CIO / CTO | CEO (if customer-impacting) | Immediate |
| Failed rollback | IT Operations Manager | CIO / CTO | CEO + External Incident Response | Immediate |
| Security incident or data breach | CISO | CIO / CEO | BNM Notification (as required) | Within [X] hours |
| Regulatory compliance concern | IT Risk Manager | Chief Compliance Officer | CEO | Within [X] business hours |
| CAB unable to reach quorum | Change Manager | CIO | — | Within [X] business hours |
| Vendor / third-party release failure | Vendor Manager / IT Operations | CIO | Legal / Procurement | Within [X] business hours |
| Contested rollback decision | IT Operations Manager | CIO | — | Within [X] minutes |

### 15.2 BNM Regulatory Notification Requirements

In the event of a release that results in a significant technology disruption, [Organization Name] must comply with BNM's incident reporting obligations as follows:

| Incident Category | BNM Notification Requirement | Responsible Officer | Deadline |
|---|---|---|---|
| Significant Technology Disruption (as defined under RMiT) | Submit incident report to BNM | Chief Compliance Officer + CIO | As specified under RMiT / within [X] hours |
| Personal Data Breach (PDPA) | Notify PDPC and affected individuals | Chief Compliance Officer + DPO | Within [X] days of discovery |
| Cybersecurity Incident | Notify BNM and NACSA as applicable | CISO + Chief Compliance Officer | As specified under BNM / NACSA guidelines |

*Refer to [Organization Name]'s Incident Response and Regulatory Notification Procedure for detailed notification templates and timelines.*

### 15.3 After-Hours Escalation

For deployments scheduled outside business hours, the following on-call contacts must be established:

| Role | On-Call Contact | Contact Method |
|---|---|---|
| IT Operations (On-Call) | [Name / Rotation Schedule] | [Phone / Communication Platform] |
| Release Manager (On-Call) | [Name / Rotation Schedule] | [Phone / Communication Platform] |
| CISO / Security On-Call | [Name / Rotation Schedule] | [Phone / Communication Platform] |
| IT Management Escalation | [Name] | [Phone] |

---

## 16. Compliance and Audit

*Define the controls, records, and evidence requirements that demonstrate compliance with this procedure and the underlying regulatory obligations.*

### 16.1 Records and Evidence Retention

All records generated as part of the release management process must be retained in accordance with [Organization Name]'s Records Retention Policy:

| Record Type | Retention Period | Storage Location | Responsible |
|---|---|---|---|
| Request for Change (RFC) records | [X] years | [ITSM Platform / Document Repository] | IT Operations |
| CAB meeting minutes and approval records | [X] years | [Document Repository] | Change Manager |
| Test reports (SIT, UAT, Security, Performance) | [X] years | [Document Repository / Test Management Tool] | QA Lead |
| Deployment runbooks and checklists | [X] years (per version) | [Document Repository] | Release Manager |
| Post-Implementation Review reports | [X] years | [Document Repository] | Release Manager |
| Deployment logs and audit trails | [X] years | [Log Management / SIEM Platform] | IT Operations |
| Access logs for deployment tools | [X] months | [Log Management Platform] | Information Security |
| Rollback records and incident reports | [X] years | [ITSM Platform / Document Repository] | IT Operations |

### 16.2 Key Performance Indicators (KPIs)

*The following KPIs must be measured and reported to IT Management on a [monthly / quarterly] basis.*

| KPI | Description | Target | Reporting Frequency |
|---|---|---|---|
| Release Success Rate | % of releases deployed without rollback | ≥ [X]% | Monthly |
| On-Time Deployment Rate | % of releases deployed within planned window | ≥ [X]% | Monthly |
| CAB Approval Lead Time | Average time from RFC submission to CAB approval | ≤ [X] business days | Monthly |
| Emergency Change Rate | % of total changes classified as Emergency | ≤ [X]% | Monthly |
| Post-Release Incident Rate | Number of P1/P2 incidents within [X] hours of a release | ≤ [X] per quarter | Monthly |
| PIR Completion Rate | % of required PIRs completed within defined timeframe | 100% | Quarterly |
| Rollback Rate | % of releases requiring rollback | ≤ [X]% | Monthly |

### 16.3 Internal Audit Requirements

This procedure is subject to periodic internal audit by [Internal Audit / IT Risk] function. Auditors must have access to:

- All change records and CAB approval documentation
- Deployment logs and artefact integrity records
- Test evidence and sign-off records
- PIR reports and lessons learned registers

Audit findings must be remediated within timeframes agreed with Internal Audit and tracked to closure by the Release Manager and IT Risk Manager.

---

## 17. Review and Approval

### 17.1 Review Schedule

This procedure must be reviewed:

- **Annually** from the date of last approval, or
- **Upon significant change** to the organisation's technology architecture, risk profile, or applicable regulatory requirements, whichever occurs first

The Release Manager is responsible for initiating the review process and coordinating with all relevant stakeholders.

### 17.2 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| | | | |
| | | | |

### 17.3 Approval Sign-Off

This document has been reviewed and approved by the following authorised signatories:

| Role | Name | Signature | Date |
|---|---|---|---|
| [Relevant Department Head] | [Name] | | [Date] |
| Chief Information Officer | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| IT Risk Manager | [Name] | | [Date] |
| Chief Compliance Officer | [Name] | | [Date] |

---

## 18. References

The following regulatory instruments, standards, and internal documents are referenced in or directly relevant to this procedure:

### 18.1 Regulatory References

| Reference | Document Title | Issuing Authority | Relevant Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.12 (Release Management); Clauses 10.1–10.11 |
| — | Personal Data Protection Act 2010 | Government of Malaysia | Section 9 (Security Principle) |
| — | Financial Services Act 2013 | Government of Malaysia | Applicable sections |
| — | NACSA Cybersecurity Guidelines | NACSA | Applicable sections |

### 18.2 Internal Documents

| Document Title | Document ID | Owner |
|---|---|---|
| [Organization Name] Information Technology Policy | [Doc ID] | CIO |
| [Organization Name] Information Security Policy | [Doc ID] | CISO |
| [Organization Name] Change Management Policy | [Doc ID] | Change Manager |
| [Organization Name] Incident Management Procedure | [Doc ID] | IT Operations Manager |
| [Organization Name] Secure Coding Standards | [Doc ID] | Development Lead |
| [Organization Name] Records Retention Policy | [Doc ID] | Compliance / Legal |
| [Organization Name] Business Continuity Plan | [Doc ID] | BCM Manager |
| [Organization Name] Privileged Access Management Procedure | [Doc ID] | CISO |

### 18.3 External Standards

| Standard | Title | Relevant Section |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A, Control 8.32 — Change Management |
| ITIL 4 | IT Service Management | Release Management Practice |
| ISACA COBIT 2019 | Governance and Management of Enterprise IT | BAI06 — Managed IT Changes |

---

## 19. Appendices

### Appendix A: Risk Assessment Matrix and Scoring Guidance

*Provide a detailed risk assessment matrix for use during RFC completion, including scoring criteria for likelihood and impact dimensions, and worked examples.*

*[Insert Risk Assessment Matrix — see Section 8.2 for summary version]*

**Likelihood Scoring:**

| Score | Likelihood | Description |
|---|---|---|
| 1 | Rare | May occur only in exceptional circumstances (< once in 5 years) |
| 2 | Unlikely | Could occur but not expected (once in 2–5 years) |
| 3 | Possible | May occur at some point (once per year) |
| 4 | Likely | Will probably occur in most circumstances (several times per year) |
| 5 | Almost Certain | Expected to occur frequently (monthly or more) |

**Impact Scoring:**

| Score | Impact | Description |
|---|---|---|
| 1 | Negligible | No customer impact; minimal financial or reputational effect |
| 2 | Minor | Limited customer impact; manageable financial effect; no regulatory breach |
| 3 | Moderate | Noticeable customer impact; moderate financial effect; potential regulatory attention |
| 4 | Major | Significant customer impact; material financial loss; regulatory notification required |
| 5 | Catastrophic | Widespread customer impact; severe financial/reputational damage; regulatory enforcement risk |

---

### Appendix B: UAT Sign-Off Form Template

*This form must be completed and signed by the Business Owner or designated UAT lead before a release is submitted to CAB.*

| Field | Details |
|---|---|
| **Release / RFC Reference** | [RFC-XXXX] |
| **Application / System** | [System Name] |
| **Release Version** | [X.X.X] |
| **UAT Environment** | [UAT Environment Name] |
| **UAT Period** | [Start Date] to [End Date] |
| **Total Test Cases Executed** | [Number] |
| **Test Cases Passed** | [Number] |
| **Test Cases Failed** | [Number] |
| **Open Defects (High/Medium/Low)** | [Number / Number / Number] |

**UAT Outcome:**

- [ ] **UAT PASSED** — Release approved for CAB submission
- [ ] **UAT CONDITIONALLY PASSED** — Release approved subject to resolution of outstanding defects as noted below
- [ ] **UAT FAILED** — Release must not proceed to production

**Conditions / Outstanding Defects (if applicable):**

| Defect ID | Severity | Description | Resolution Plan | Target Date |
|---|---|---|---|---|
| | | | | |

**Business Owner Sign-Off:**

| Name | Role | Signature | Date |
|---|---|---|---|
| | | | |

---

### Appendix C: Deployment Runbook Template

*A deployment runbook must be created for every release and reviewed by the Release Manager and IT Operations Manager before CAB submission. This template provides the minimum required structure.*

**Runbook Header:**

| Field | Details |
|---|---|
| **Release / RFC Reference** | [RFC-XXXX] |
| **Application / System** | [System Name] |
| **Release Version** | [X.X.X] |
| **Deployment Date** | [Date] |
| **Deployment Window** | [Start Time] – [End Time] |
| **Deployment Lead** | [Name] |
| **Rollback Lead** | [Name] |
| **Estimated Deployment Duration** | [X] minutes |
| **Maximum Rollback Time** | [X] minutes |

**Pre-Deployment Steps:** *(See Section 11.1)*

**Deployment Steps:**

| Step # | Action | Command / Procedure | Responsible | Duration | Rollback Step |
|---|---|---|---|---|---|
| 1 | [Step description] | [Command or SOP reference] | [Role] | [X min] | [Rollback Step #] |
| 2 | [Step description] | [Command or SOP reference] | [Role] | [X min] | [Rollback Step #] |

**Rollback Steps:**

| Step # | Action | Command / Procedure | Responsible | Duration |
|---|---|---|---|---|
| 1 | [Rollback step description] | [Command or SOP reference] | [Role] | [X min] |

**Verification Steps:** *(See Section 12.1 Smoke Test)*

---

### Appendix D: Change Advisory Board (CAB) Meeting Agenda Template

*Standard agenda for CAB meetings. The Release Manager is responsible for distributing the agenda a minimum of [X] business days prior to the meeting.*

**Meeting Details:**

| Field | Details |
|---|---|
| **Meeting Date** | [Date] |
| **Time** | [Time] |
| **Location / Platform** | [Meeting Room / Video Conference Link] |
| **Chair** | [Change Manager Name] |
| **Secretary** | [Release Manager Name] |

**Agenda:**

1. Quorum confirmation and apologies
2. Review and approval of previous CAB minutes
3. Review of changes deployed since last CAB meeting
   - Post-Implementation Review outcomes
   - Incidents attributable to recent releases
4. Presentation of new change requests for approval
   - RFC-[XXXX]: [Change Title] — [System] — [Requester]
   - RFC-[XXXX]: [Change Title] — [System] — [Requester]
5. Emergency changes reviewed (post-implementation)
6. KPI dashboard review (Release Success Rate, Emergency Change Rate, etc.)
7. Risk and compliance matters
8. Any other business
9. Next meeting date confirmation

---

### Appendix E: Post-Implementation Review (PIR) Report Template

*This template must be completed by the Release Manager within [X] business days of a Normal — Major release or Emergency change.*

| Field | Details |
|---|---|
| **Release / RFC Reference** | [RFC-XXXX] |
| **Application / System** | [System Name] |
| **Release Version** | [X.X.X] |
| **Deployment Date** | [Date] |
| **PIR Completed By** | [Name, Role] |
| **PIR Date** | [Date] |

**1. Deployment Summary**

*Briefly describe what was deployed and the business objective of the release.*

[Summary text]

**2. Deployment Outcomes**

| Criteria | Planned | Actual | Variance |
|---|---|---|---|
| Deployment Start Time | [Time] | [Time] | [+/- X minutes] |
| Deployment End Time | [Time] | [Time] | [+/- X minutes] |
| Downtime (if applicable) | [X minutes] | [X minutes] | |
| Rollback Required | No | [Yes/No] | |

**3. Issues Encountered**

| Issue # | Description | Impact | Resolution | Preventive Action |
|---|---|---|---|---|
| | | | | |

**4. Incidents Raised Post-Deployment**

| Incident ID | Severity | Description | Root Cause | Status |
|---|---|---|---|---|
| | | | | |

**5. Lessons Learned**

*What went well? What did not go as planned? What should be done differently?*

| # | Observation | Recommendation | Owner | Target Date |
|---|---|---|---|---|
| | | | | |

**6. Sign-Off**

| Name | Role | Signature | Date |
|---|---|---|---|
| | Release Manager | | |
| | IT Operations Manager | | |
| | Business Owner | | |

---

*End of Document*

---

*This document is classified as **Confidential**. Distribution is restricted to authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Last Reviewed: [Last Review Date]*