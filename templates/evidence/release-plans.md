# Release Plans

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
| **Approved By** | [Approved By], [Title] |

**Organization:** [Organization Name]
**System / Release Reference:** [System Name / Release ID]

---

> **Handling Instructions:** This document is classified as **Confidential**. It is intended solely for authorised personnel involved in the planning, execution, review, and approval of technology releases at [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of [Organization Name]'s Information Security Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Framework and Obligations](#2-regulatory-framework-and-obligations)
3. [Release Overview](#3-release-overview)
4. [Scope and Applicability](#4-scope-and-applicability)
5. [Pre-Release Planning](#5-pre-release-planning)
6. [Step-by-Step Release Process Flow](#6-step-by-step-release-process-flow)
7. [Rollback Procedures](#7-rollback-procedures)
8. [Success Criteria and Release Acceptance](#8-success-criteria-and-release-acceptance)
9. [Roles and Responsibilities (RACI)](#9-roles-and-responsibilities-raci)
10. [Tools and Systems Used](#10-tools-and-systems-used)
11. [Communication Plan](#11-communication-plan)
12. [Escalation Procedures](#12-escalation-procedures)
13. [Post-Release Activities](#13-post-release-activities)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document and the release it governs. Explain how this plan supports regulatory compliance and organisational risk management objectives.*

This Release Plan documents the structured approach adopted by [Organization Name] for the controlled deployment of [System Name / Release ID] into the [Production / UAT / Staging] environment. It provides a detailed account of the release scope, execution steps, rollback procedures, success criteria, and accountabilities required to ensure a safe, auditable, and compliant release event.

This document is prepared in accordance with the **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.12**, which mandates that financial institutions maintain formal release management procedures that include documented plans, testing requirements, rollback capabilities, and post-implementation validation.

### 1.2 Scope

*Define the boundaries of this release plan — what systems, environments, teams, and business processes are in scope. Be explicit about what is out of scope to avoid ambiguity during audits.*

This Release Plan applies to:

- **In-Scope Systems:** [List all systems, applications, APIs, databases, and infrastructure components affected by this release]
- **In-Scope Environments:** [e.g., Production, Disaster Recovery, Pre-Production]
- **In-Scope Business Units:** [e.g., Retail Banking, Treasury, IT Operations]
- **In-Scope Processes:** [e.g., Customer onboarding, payment processing, regulatory reporting]

**Out of Scope:**

- [System or component name] — [Brief justification for exclusion]
- [System or component name] — [Brief justification for exclusion]

### 1.3 Document Objectives

This document aims to:

- Provide a single authoritative reference for all stakeholders involved in the release event
- Ensure compliance with BNM RMiT Clause 10.12 release management requirements
- Minimise service disruption and operational risk during and after deployment
- Establish clear success criteria and acceptance gates before go-live
- Define rollback triggers and procedures to enable rapid recovery if required
- Support post-release audit and evidence requirements

---

## 2. Regulatory Framework and Obligations

*Summarise the specific regulatory obligations that this release plan satisfies. Reference the exact clauses, policies, and internal standards that mandate this document's existence and content.*

### 2.1 Primary Regulatory Reference

| Regulation / Standard | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 10.12 | Financial institutions must establish a formal release management process covering planning, testing, rollback, and post-implementation review for changes to technology systems. |
| BNM RMiT | Clause 10.11 | Change management procedures must be documented and approved prior to implementation. |
| BNM RMiT | Clause 10.1 – 10.3 | Technology risk governance framework requirements applicable to all technology change events. |

### 2.2 Internal Policy References

| Policy / Standard | Reference Number | Applicable Section |
|---|---|---|
| [Organization Name] IT Change Management Policy | [Policy ID] | [Section Reference] |
| [Organization Name] Information Security Policy | [Policy ID] | [Section Reference] |
| [Organization Name] Business Continuity Management Policy | [Policy ID] | [Section Reference] |
| [Organization Name] Technology Risk Management Framework | [Policy ID] | [Section Reference] |

### 2.3 Compliance Obligations Summary

This release plan, once approved and executed, serves as **primary evidence** for the following regulatory obligations:

- Demonstration of controlled release management processes to BNM examiners
- Evidence of pre-release testing, approval gates, and stakeholder sign-offs
- Documentation of rollback capability and post-deployment validation
- Support for technology audit trail requirements under BNM supervisory review

---

## 3. Release Overview

*Provide a high-level executive summary of the release. This section should be comprehensible to senior management and non-technical stakeholders.*

### 3.1 Release Identification

| Field | Details |
|---|---|
| **Release ID / Reference** | [Release-YYYY-MM-NNN] |
| **Release Name** | [Descriptive Release Name] |
| **Release Type** | [Major / Minor / Patch / Emergency / Scheduled Maintenance] |
| **Release Priority** | [Critical / High / Medium / Low] |
| **Change Request Reference** | [CR-YYYY-NNN] |
| **Project Reference** | [Project ID / Name, if applicable] |
| **Target Environment** | [Production / DR / Staging] |
| **Planned Release Date** | [DD Month YYYY] |
| **Planned Release Window** | [HH:MM – HH:MM, Timezone] |
| **Planned Duration** | [X hours Y minutes] |
| **Maximum Allowable Downtime** | [X hours Y minutes] |
| **Rollback Decision Deadline** | [HH:MM, DD Month YYYY] |

### 3.2 Release Summary

*Provide a concise, non-technical description of what this release delivers, the business driver, and the expected outcome.*

[Provide a 2–4 sentence summary of the release. Include the business justification, the key changes being deployed, and the expected benefit or risk being addressed. Example: "This release deploys version 3.2.1 of the Core Banking System, incorporating regulatory updates mandated by BNM Circular XYZ/2025, security patches addressing two medium-severity CVEs, and performance improvements to the loan origination module. The release is scheduled during the approved maintenance window and has been fully validated in the UAT environment."]

### 3.3 Release Components

| Component | Version (Current) | Version (New) | Type of Change | Business Impact |
|---|---|---|---|---|
| [Application / Module Name] | [v.X.X.X] | [v.X.X.X] | [Code / Config / Data / Infrastructure] | [High / Medium / Low] |
| [Database Name] | [v.X.X.X] | [v.X.X.X] | [Schema / Data Migration / Stored Procedure] | [High / Medium / Low] |
| [Infrastructure Component] | [Current State] | [Target State] | [Configuration Change] | [High / Medium / Low] |
| [API / Integration] | [v.X.X] | [v.X.X] | [Endpoint / Contract Change] | [High / Medium / Low] |

### 3.4 Risk Summary

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [e.g., Database migration failure] | [High / Medium / Low] | [High / Medium / Low] | [Brief mitigation description] |
| [e.g., Downstream system incompatibility] | [High / Medium / Low] | [High / Medium / Low] | [Brief mitigation description] |
| [e.g., Extended deployment window] | [High / Medium / Low] | [High / Medium / Low] | [Brief mitigation description] |
| [e.g., User authentication disruption] | [High / Medium / Low] | [High / Medium / Low] | [Brief mitigation description] |

---

## 4. Scope and Applicability

*Define with precision which systems, environments, teams, regulatory entities, and customer segments are affected. This section forms the boundary definition for all subsequent procedures.*

### 4.1 Affected Systems and Services

| System / Service | Owner | Dependency Type | Impact During Release |
|---|---|---|---|
| [System Name] | [System Owner / Team] | [Direct / Indirect / Integration] | [Downtime / Degraded / No Impact] |
| [System Name] | [System Owner / Team] | [Direct / Indirect / Integration] | [Downtime / Degraded / No Impact] |
| [Database Name] | [DBA Team] | [Direct] | [Read-Only / Unavailable / No Impact] |
| [API Gateway / ESB] | [Integration Team] | [Integration] | [Degraded / No Impact] |

### 4.2 Affected Business Processes

| Business Process | Business Unit | Impact Level | Service Window Sensitivity |
|---|---|---|---|
| [e.g., Customer Payment Processing] | [e.g., Retail Operations] | [High / Medium / Low] | [Peak Hours: HH:MM–HH:MM] |
| [e.g., Regulatory Reporting] | [e.g., Compliance] | [High / Medium / Low] | [Submission Deadline: DD Month] |
| [e.g., ATM / e-Banking Services] | [e.g., Digital Banking] | [High / Medium / Low] | [24/7 Critical Service] |

### 4.3 Affected Customer Segments

*List the customer or user groups that may be impacted by this release, including estimated volumes where available.*

- **[Customer Segment / User Group]:** [Description of impact and estimated number of affected users]
- **[Customer Segment / User Group]:** [Description of impact and estimated number of affected users]
- **[Internal Users / Staff]:** [Description of impact and estimated number of affected users]

### 4.4 Regulatory and Compliance Applicability

This release is subject to the following regulatory compliance checkpoints:

- [ ] BNM RMiT Clause 10.12 — Release Management approval gate satisfied
- [ ] BNM RMiT Clause 10.11 — Change Management record raised and approved
- [ ] [Organization Name] Change Advisory Board (CAB) approval obtained
- [ ] Information Security review completed (where applicable)
- [ ] Data Protection impact assessment completed (where personal data is involved)
- [ ] Business Continuity / DR impact assessment reviewed

---

## 5. Pre-Release Planning

*Document all preparatory activities that must be completed before the release window opens. Each task should be assigned an owner and a completion deadline.*

### 5.1 Pre-Release Checklist

| # | Pre-Release Task | Owner | Due Date / Time | Status | Evidence / Reference |
|---|---|---|---|---|---|
| 1 | Change Request raised and approved in [ITSM Tool] | [Change Manager] | [Date] | [ ] Pending / [ ] Complete | [CR Reference] |
| 2 | Release plan reviewed and approved by Release Manager | [Release Manager] | [Date] | [ ] Pending / [ ] Complete | [Approval Record] |
| 3 | UAT sign-off obtained from Business Owner | [Business Owner] | [Date] | [ ] Pending / [ ] Complete | [UAT Sign-off Ref] |
| 4 | Security assessment / penetration test results reviewed | [Information Security] | [Date] | [ ] Pending / [ ] Complete | [Security Report Ref] |
| 5 | Performance / load test results reviewed | [QA Lead] | [Date] | [ ] Pending / [ ] Complete | [Test Report Ref] |
| 6 | Rollback procedure tested in Pre-Production | [Technical Lead] | [Date] | [ ] Pending / [ ] Complete | [Test Evidence Ref] |
| 7 | Database backup verified and confirmed | [DBA] | [Date] | [ ] Pending / [ ] Complete | [Backup Job Ref] |
| 8 | Release artefacts validated (checksums / version tags) | [DevOps / Release Engineer] | [Date] | [ ] Pending / [ ] Complete | [Artefact Ref] |
| 9 | Maintenance notification sent to affected users | [Communications Lead] | [Date] | [ ] Pending / [ ] Complete | [Notification Ref] |
| 10 | BNM / regulatory notification submitted (if applicable) | [Compliance Officer] | [Date] | [ ] Pending / [ ] Complete | [Submission Ref] |
| 11 | Incident Management team briefed and on standby | [Incident Manager] | [Date] | [ ] Pending / [ ] Complete | [Briefing Record] |
| 12 | War room / bridge call details distributed | [Release Manager] | [Date] | [ ] Pending / [ ] Complete | [Calendar Invite Ref] |

### 5.2 Environment Readiness

| Environment | Status | Last Health Check | Confirmed By | Date / Time |
|---|---|---|---|---|
| Production | [ ] Ready / [ ] Not Ready | [Date/Time] | [Name] | [Date/Time] |
| Disaster Recovery | [ ] Ready / [ ] Not Ready | [Date/Time] | [Name] | [Date/Time] |
| Monitoring Platform | [ ] Ready / [ ] Not Ready | [Date/Time] | [Name] | [Date/Time] |
| Deployment Pipeline | [ ] Ready / [ ] Not Ready | [Date/Time] | [Name] | [Date/Time] |

### 5.3 Deployment Readiness Gate

*All items below must be confirmed as complete before the release window may commence. The Release Manager must sign off on this gate.*

| Gate Criterion | Met? | Confirmed By |
|---|---|---|
| All pre-release checklist items are complete | [ ] Yes / [ ] No | [Name] |
| No Severity 1 or Severity 2 incidents active on affected systems | [ ] Yes / [ ] No | [Name] |
| Release artefacts are staged and validated in deployment environment | [ ] Yes / [ ] No | [Name] |
| All required personnel are available and contactable | [ ] Yes / [ ] No | [Name] |
| Rollback procedure has been rehearsed and documented | [ ] Yes / [ ] No | [Name] |

**Release Manager Go/No-Go Declaration:**

- **Decision:** [ ] GO — Proceed with Release &nbsp;&nbsp;&nbsp; [ ] NO-GO — Release Postponed
- **Decision Made By:** [Name], [Title]
- **Date / Time:** [DD Month YYYY, HH:MM]
- **Notes:** [Any conditions or observations at the time of the Go/No-Go decision]

---

## 6. Step-by-Step Release Process Flow

*Document the detailed, sequential steps for executing the release. Each step must include the responsible party, estimated duration, and verification action. This section forms the operational runbook for the release team.*

### 6.1 Process Flow Diagram

*Insert or reference the release process flow diagram. The diagram should illustrate the end-to-end sequence from release window open to release closure, including decision points and rollback branches.*

[Insert process flow diagram or reference: Appendix A — Release Process Flow Diagram]

### 6.2 Detailed Release Steps

**Phase 1: Release Window Open**

| Step | Action | Responsible | Duration | Verification / Exit Criteria |
|---|---|---|---|---|
| 1.1 | Open bridge call / war room. Confirm all team members present. | Release Manager | 5 min | All required personnel confirmed on call |
| 1.2 | Confirm production environment health baseline (CPU, memory, active sessions, error rates) | Monitoring / Ops Team | 10 min | Baseline metrics captured and documented |
| 1.3 | Notify Service Desk — release window has commenced | Release Manager | 2 min | Service Desk ticket updated |
| 1.4 | Confirm database backup completed successfully | DBA | 5 min | Backup job confirmed complete; backup reference recorded |
| 1.5 | Enable maintenance mode / redirect traffic (if applicable) | Infrastructure Lead | [X] min | Confirmation of maintenance mode active; user-facing message displayed |

**Phase 2: Deployment Execution**

| Step | Action | Responsible | Duration | Verification / Exit Criteria |
|---|---|---|---|---|
| 2.1 | [Describe specific deployment action — e.g., trigger pipeline, execute deployment script] | DevOps / Release Engineer | [X] min | [Specific success indicator — e.g., pipeline status green, deployment logs show no errors] |
| 2.2 | [Describe database migration step, if applicable] | DBA | [X] min | [Migration script executed successfully; row counts validated] |
| 2.3 | [Describe configuration update, if applicable] | Infrastructure / DevOps | [X] min | [Configuration applied; service restarted successfully] |
| 2.4 | [Describe integration / API update, if applicable] | Integration Team | [X] min | [API health endpoint returns HTTP 200; contract tests pass] |
| 2.5 | [Describe any additional deployment sub-steps] | [Owner] | [X] min | [Specific exit criteria] |

**Phase 3: Smoke Testing and Initial Validation**

| Step | Action | Responsible | Duration | Verification / Exit Criteria |
|---|---|---|---|---|
| 3.1 | Execute smoke test suite on production environment | QA Lead / Release Engineer | [X] min | [X%] of smoke tests pass; zero critical failures |
| 3.2 | Verify core business transaction flows end-to-end | Business Owner / QA | [X] min | [Named transactions complete successfully — e.g., payment, login, report generation] |
| 3.3 | Validate integration points and downstream system responses | Integration Team | [X] min | All integration health checks return expected responses |
| 3.4 | Review application logs for errors or anomalies | Monitoring / Ops Team | [X] min | No unexpected ERROR or FATAL log entries within first [X] minutes |
| 3.5 | Confirm monitoring dashboards reflect new version | Monitoring Team | [X] min | Version tag updated in monitoring platform |

**Phase 4: Release Acceptance and Go-Live**

| Step | Action | Responsible | Duration | Verification / Exit Criteria |
|---|---|---|---|---|
| 4.1 | Business Owner confirms acceptance of release in production | Business Owner | [X] min | Verbal and written confirmation on bridge call |
| 4.2 | Disable maintenance mode / restore full traffic | Infrastructure Lead | [X] min | Traffic routing confirmed; maintenance mode deactivated |
| 4.3 | Notify Service Desk — system live and release window closed | Release Manager | 2 min | Service Desk ticket updated to resolved/closed |
| 4.4 | Post go-live monitoring window begins | Monitoring / Ops Team | [X] min | Monitoring team on heightened alert for [X] hours post-release |
| 4.5 | Send release completion notification to stakeholders | Release Manager | 5 min | Communication sent; distribution list confirmed |

### 6.3 Timeline Summary

| Phase | Planned Start | Planned End | Duration | Actual Start | Actual End |
|---|---|---|---|---|---|
| Release Window Open | [HH:MM] | [HH:MM] | [X] min | | |
| Deployment Execution | [HH:MM] | [HH:MM] | [X] min | | |
| Smoke Testing | [HH:MM] | [HH:MM] | [X] min | | |
| Release Acceptance | [HH:MM] | [HH:MM] | [X] min | | |
| **Total Release Window** | **[HH:MM]** | **[HH:MM]** | **[X hrs Y min]** | | |

---

## 7. Rollback Procedures

*This section is mandatory under BNM RMiT Clause 10.12. Document the complete, tested procedure for reverting the release to the last known good state. Rollback procedures must be executable without reliance on institutional knowledge — they must be actionable by any sufficiently skilled team member.*

### 7.1 Rollback Decision Criteria

*Define the specific, objective conditions that will trigger a rollback decision. Avoid subjective criteria.*

A rollback shall be initiated if **any** of the following conditions are met during or after the release:

| Trigger Condition | Threshold | Measurement Method |
|---|---|---|
| Smoke test failure rate exceeds threshold | > [X]% of smoke tests fail | Automated test report |
| Critical business transaction failure | Any failure of [named transactions] | Manual verification / monitoring alert |
| Application error rate exceeds threshold | > [X] errors per minute (baseline: [Y]) | [Monitoring Tool] dashboard |
| System response time degradation | Average response time > [X] ms (baseline: [Y] ms) | [APM Tool] |
| Database connectivity failure | Unable to connect or query within [X] seconds | Health check endpoint |
| Data integrity issue detected | Any unexpected data discrepancy identified | DBA validation query |
| Rollback decision deadline reached without acceptance | [HH:MM, DD Month YYYY] | Clock |

### 7.2 Rollback Decision Authority

| Scenario | Decision Authority | Backup Authority |
|---|---|---|
| Rollback within planned release window | Release Manager | Technical Lead |
| Rollback after go-live (within [X] hours) | [Department Head] | Release Manager |
| Emergency rollback outside business hours | On-call Incident Manager | [Escalation Contact] |

### 7.3 Rollback Procedure Steps

**Phase R1: Rollback Initiation**

| Step | Action | Responsible | Duration | Verification |
|---|---|---|---|---|
| R1.1 | Declare rollback decision on bridge call. Record decision time. | Release Manager | 2 min | Decision timestamp logged |
| R1.2 | Enable maintenance mode / halt incoming traffic | Infrastructure Lead | [X] min | Maintenance mode confirmed active |
| R1.3 | Notify Service Desk — rollback in progress | Release Manager | 2 min | Service Desk ticket updated |
| R1.4 | Notify affected business units of service interruption | Communications Lead | 5 min | Stakeholder notification sent |

**Phase R2: System Reversion**

| Step | Action | Responsible | Duration | Verification |
|---|---|---|---|---|
| R2.1 | [Describe application rollback step — e.g., trigger rollback pipeline, deploy previous version artefact] | DevOps / Release Engineer | [X] min | Previous version deployed; deployment logs confirm version [X.X.X] |
| R2.2 | [Describe database rollback step — e.g., execute rollback script, restore from backup] | DBA | [X] min | Database schema/data confirmed reverted; row counts validated |
| R2.3 | [Describe configuration rollback step] | Infrastructure Team | [X] min | Previous configuration applied; services restarted |
| R2.4 | [Describe integration rollback step, if applicable] | Integration Team | [X] min | API endpoints responding to previous contract |

**Phase R3: Post-Rollback Validation**

| Step | Action | Responsible | Duration | Verification |
|---|---|---|---|---|
| R3.1 | Execute smoke test suite against reverted system | QA Lead | [X] min | [X]% of smoke tests pass against previous version |
| R3.2 | Verify core business transactions functioning correctly | Business Owner / QA | [X] min | Named transactions complete successfully |
| R3.3 | Review application logs — confirm absence of new errors | Monitoring / Ops Team | [X] min | Log analysis complete; no new critical errors |
| R3.4 | Business Owner confirms system is acceptable post-rollback | Business Owner | [X] min | Verbal and written confirmation |
| R3.5 | Disable maintenance mode / restore traffic | Infrastructure Lead | [X] min | Traffic routing restored; maintenance mode deactivated |
| R3.6 | Send rollback completion notification | Release Manager | 5 min | Stakeholder notification sent |

### 7.4 Rollback Evidence and Documentation

Upon completion of rollback, the following must be recorded:

- [ ] Rollback trigger condition(s) documented
- [ ] Rollback decision time and decision-maker recorded
- [ ] All rollback steps logged with timestamps and outcomes
- [ ] Post-rollback smoke test results retained as evidence
- [ ] Business Owner post-rollback acceptance recorded
- [ ] Post-Incident Report (PIR) initiated — reference: [PIR Reference]

### 7.5 Rollback Timeline

| Rollback Phase | Estimated Duration | Maximum Allowable |
|---|---|---|
| Rollback Initiation | [X] min | [X] min |
| System Reversion | [X] min | [X] min |
| Post-Rollback Validation | [X] min | [X] min |
| **Total Rollback RTO** | **[X] min** | **[X] min** |

---

## 8. Success Criteria and Release Acceptance

*Define the objective, measurable criteria that must be satisfied for this release to be formally accepted. Success criteria should be agreed upon by all stakeholders prior to the release window.*

### 8.1 Functional Success Criteria

*List the specific functional outcomes that must be verified before the release can be accepted.*

| # | Success Criterion | Verification Method | Acceptance Threshold | Tested By | Result |
|---|---|---|---|---|---|
| F1 | [e.g., User authentication and login functions correctly] | Manual test / automated smoke test | 100% pass rate | [QA Lead] | [ ] Pass / [ ] Fail |
| F2 | [e.g., Payment transaction completes end-to-end without errors] | End-to-end test script | Zero transaction failures | [QA Lead] | [ ] Pass / [ ] Fail |
| F3 | [e.g., Regulatory reporting module generates correct output] | Output comparison against expected results | 100% data accuracy | [Business Owner] | [ ] Pass / [ ] Fail |
| F4 | [e.g., All downstream integrations return expected responses] | Integration health check | All integrations return HTTP 2xx | [Integration Team] | [ ] Pass / [ ] Fail |
| F5 | [e.g., New feature / module operates per business requirements] | UAT test cases executed in production | [X]% pass rate | [Business Owner] | [ ] Pass / [ ] Fail |

### 8.2 Non-Functional Success Criteria

| # | Success Criterion | Metric | Acceptance Threshold | Baseline | Tested By | Result |
|---|---|---|---|---|---|---|
| NF1 | Application response time within acceptable range | Average page/API response time | < [X] ms | [Y] ms | [Performance Team] | [ ] Pass / [ ] Fail |
| NF2 | System error rate within acceptable range | Errors per minute in [Monitoring Tool] | < [X] errors/min | [Y] errors/min | [Ops Team] | [ ] Pass / [ ] Fail |
| NF3 | CPU utilisation within normal operating range | Production server CPU utilisation | < [X]% | [Y]% | [Infrastructure] | [ ] Pass / [ ] Fail |
| NF4 | Memory utilisation within normal operating range | Production server memory utilisation | < [X]% | [Y]% | [Infrastructure] | [ ] Pass / [ ] Fail |
| NF5 | Database query performance within acceptable range | Slow query count | < [X] queries > [Y] ms | [Z] baseline | [DBA] | [ ] Pass / [ ] Fail |

### 8.3 Security Success Criteria

| # | Success Criterion | Verification Method | Acceptance Threshold | Tested By | Result |
|---|---|---|---|---|---|
| S1 | No new critical or high severity vulnerabilities introduced | Automated DAST scan post-deployment | Zero critical/high findings | [Security Team] | [ ] Pass / [ ] Fail |
| S2 | Access controls function correctly for all user roles | Role-based access test cases | 100% pass rate | [Security / QA] | [ ] Pass / [ ] Fail |
| S3 | Audit logging is operational and capturing events correctly | Log verification in SIEM / audit system | All expected event types logged | [Security Team] | [ ] Pass / [ ] Fail |

### 8.4 Formal Release Acceptance

*All parties below must provide acceptance before the release is formally closed. A release is not considered complete until all sign-offs have been obtained.*

| Stakeholder | Role | Acceptance Condition | Accepted? | Name | Date / Time |
|---|---|---|---|---|---|
| [Name] | Release Manager | All success criteria met; release plan executed without deviation or with approved deviations documented | [ ] Yes / [ ] No | | |
| [Name] | Business Owner | Functional and non-functional criteria verified; business processes operating correctly | [ ] Yes / [ ] No | | |
| [Name] | Information Security | Security criteria verified; no material risk introduced | [ ] Yes / [ ] No | | |
| [Name] | Technical Lead | All technical deployment steps completed correctly | [ ] Yes / [ ] No | | |
| [Name] | [Department Head] | Overall release accepted on behalf of [Department] | [ ] Yes / [ ] No | | |

---

## 9. Roles and Responsibilities (RACI)

*This RACI matrix defines the accountability structure for the release. All personnel named in this section must be briefed on their responsibilities prior to the release window.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 9.1 RACI Matrix

| Activity | [Department Head] | Release Manager | Technical Lead | DevOps Engineer | DBA | QA Lead | Business Owner | Info Security | Service Desk | Incident Manager |
|---|---|---|---|---|---|---|---|---|---|---|
| **Planning & Approval** | | | | | | | | | | |
| Release plan authoring | I | A/R | C | C | C | C | C | C | I | I |
| Risk assessment | A | R | C | C | C | C | C | C | I | I |
| CAB / Change approval | A | R | C | I | I | I | C | C | I | I |
| Pre-release checklist sign-off | A | R | C | C | C | C | C | C | I | I |
| Go/No-Go decision | A | R | C | I | I | I | C | I | I | C |
| **Execution** | | | | | | | | | | |
| Deployment execution | I | A | C | R | C | I | I | I | I | I |
| Database changes | I | A | C | C | R | I | I | I | I | I |
| Infrastructure configuration | I | A | R | C | I | I | I | I | I | I |
| Smoke test execution | I | A | C | C | C | R | C | I | I | I |
| Business validation | I | A | I | I | I | C | R | I | I | I |
| Release acceptance sign-off | A | R | C | I | I | C | R | C | I | I |
| **Rollback** | | | | | | | | | | |
| Rollback decision authority | A | R | C | I | I | I | C | I | I | C |
| Rollback execution | I | A | C | R | R | I | I | I | I | I |
| Post-rollback validation | I | A | C | C | C | R | R | I | I | I |
| **Communication** | | | | | | | | | | |
| Stakeholder notifications | A | R | I | I | I | I | I | I | C | C |
| Service Desk briefings | I | R | I | I | I | I | I | I | A | I |
| Regulatory notifications (if req.) | A | C | I | I | I | I | I | R | I | I |
| **Post-Release** | | | | | | | | | | |
| Post-release monitoring | I | A | C | C | C | I | I | I | I | R |
| PIR initiation (if rollback) | A | R | C | I | I | I | C | I | I | C |
| Release documentation closure | I | A/R | I | I | I | I | I | I | I | I |

### 9.2 Key Personnel Contact List

*Populate this table with actual names, contact numbers, and escalation details prior to the release window. This must be printed and available offline during the release.*

| Role | Name | Department | Contact Number | Email | Availability |
|---|---|---|---|---|---|
| [Department Head] | [Name] | [Department] | [Number] | [Email] | [Release window hours] |
| Release Manager | [Name] | IT Operations / Change | [Number] | [Email] | [Release window hours] |
| Technical Lead | [Name] | [Team] | [Number] | [Email] | [Release window hours] |
| DevOps / Release Engineer | [Name] | [Team] | [Number] | [Email] | [Release window hours] |
| Database Administrator | [Name] | [Team] | [Number] | [Email] | [Release window hours] |
| QA Lead | [Name] | [Team] | [Number] | [Email] | [Release window hours] |
| Business Owner | [Name] | [Business Unit] | [Number] | [Email] | [Release window hours] |
| Information Security | [Name] | Information Security | [Number] | [Email] | On-call |
| Service Desk Lead | [Name] | IT Service Desk | [Number] | [Email] | [Release window hours] |
| Incident Manager (On-call) | [Name] | IT Operations | [Number] | [Email] | 24/7 On-call |

---

## 10. Tools and Systems Used

*Document all tools, platforms, and systems that will be used during the planning, execution, and validation of this release. This provides auditability and ensures team members access the correct tooling.*

### 10.1 Release Management and ITSM Tools

| Tool / Platform | Purpose | Access URL / Location | Administrator Contact |
|---|---|---|---|
| [ITSM Tool — e.g., ServiceNow, Jira Service Management] | Change Request management, release tracking | [URL / Internal Reference] | [Contact Name] |
| [CI/CD Platform — e.g., Jenkins, GitLab CI, Azure DevOps] | Deployment pipeline execution | [URL / Internal Reference] | [Contact Name] |
| [Artefact Repository — e.g., Nexus, JFrog Artifactory] | Release artefact storage and validation | [URL / Internal Reference] | [Contact Name] |
| [Source Control — e.g., GitLab, GitHub Enterprise] | Source code version control; release tagging | [URL / Internal Reference] | [Contact Name] |

### 10.2 Monitoring and Observability Tools

| Tool / Platform | Purpose | Dashboard / URL | Alert Contact |
|---|---|---|---|
| [APM Tool — e.g., Dynatrace, New Relic, Datadog] | Application performance monitoring | [Dashboard URL] | [Contact Name] |
| [Log Management — e.g., ELK Stack, Splunk] | Log aggregation and error analysis | [Dashboard URL] | [Contact Name] |
| [Infrastructure Monitoring — e.g., Zabbix, Prometheus/Grafana] | Server / infrastructure health monitoring | [Dashboard URL] | [Contact Name] |
| [SIEM Platform — e.g., Wazuh, QRadar] | Security event monitoring | [Dashboard URL] | [Contact Name] |
| [Synthetic Monitoring Tool] | End-to-end transaction monitoring | [Dashboard URL] | [Contact Name] |

### 10.3 Database and Infrastructure Tools

| Tool / Platform | Purpose | Access Method | Administrator Contact |
|---|---|---|---|
| [Database Management Tool] | Database administration, backup verification, migration execution | [Access method] | [DBA Contact] |
| [Infrastructure / Config Management — e.g., Ansible, Terraform] | Infrastructure provisioning and configuration | [Access method] | [Contact Name] |
| [Container Orchestration — e.g., Kubernetes, Docker Swarm] | Container deployment management | [Access method] | [Contact Name] |

### 10.4 Communication Tools

| Tool | Purpose | Details |
|---|---|---|
| [Bridge Call Tool — e.g., MS Teams, Zoom] | Release war room / bridge call | [Meeting ID / Dial-in details] |
| [Messaging Platform — e.g., Slack, Teams] | Real-time team communication during release | [Channel Name] |
| [Email Distribution List] | Stakeholder notifications | [Distribution list address] |

---

## 11. Communication Plan

*Define how information will flow before, during, and after the release to all relevant stakeholders. Clear communication reduces confusion and minimises the risk of escalation.*

### 11.1 Pre-Release Communications

| Communication | Audience | Channel | Sent By | Planned Date / Time | Status |
|---|---|---|---|---|---|
| Maintenance notification to end users | All system users | Email / In-app notice | [Communications Lead] | [Date, HH:MM] | [ ] Sent / [ ] Pending |
| Release briefing to support teams | Service Desk, Incident Management | Email + briefing session | [Release Manager] | [Date, HH:MM] | [ ] Sent / [ ] Pending |
| Regulatory notification (if mandated) | BNM / Relevant regulator | [Regulatory portal / formal submission] | [Compliance Officer] | [Date, HH:MM] | [ ] Sent / [ ] Pending |
| CAB notification of approved release | CAB members | [ITSM Tool] notification | [Change Manager] | [Date, HH:MM] | [ ] Sent / [ ] Pending |
| War room details distributed | All release team members | Email + calendar invite | [Release Manager] | [Date, HH:MM] | [ ] Sent / [ ] Pending |

### 11.2 During-Release Communications

| Communication | Trigger | Audience | Channel | Responsible |
|---|---|---|---|---|
| Release window open confirmation | Release window start time | All release team | Bridge call | Release Manager |
| Deployment complete notification | Deployment steps complete | Release Manager, Business Owner | Bridge call + Teams/Slack | Technical Lead |
| Smoke test results | Test execution complete | All release team | Bridge call | QA Lead |
| Go-live confirmation | Business acceptance obtained | All stakeholders | Email + bridge call | Release Manager |
| Rollback declaration (if triggered) | Rollback criteria met | All stakeholders + Service Desk | Bridge call + email | Release Manager |

### 11.3 Post-Release Communications

| Communication | Audience | Channel | Sent By | Planned Date / Time |
|---|---|---|---|---|
| Release completion notification | All stakeholders, Service Desk | Email | Release Manager | Within 1 hour of go-live |
| Post-release status update | Senior management | Email | [Department Head] | [Next business day] |
| End-user service restoration notice | All system users | Email / In-app notice | [Communications Lead] | Upon maintenance mode deactivation |
| PIR notification (if rollback occurred) | Management, IT teams | Email | Incident Manager | Within 24 hours of rollback |

---

## 12. Escalation Procedures

*Define the escalation path for issues arising during the release. Fast, clear escalation is critical to minimising downtime and making timely rollback decisions.*

### 12.1 Escalation Triggers

The following conditions require immediate escalation beyond the Release Manager:

| Condition | Escalation Level | Escalation Target | Maximum Response Time |
|---|---|---|---|
| Go/No-Go decision cannot be reached by planned time | Level 1 | [Department Head] | 15 minutes |
| Rollback decision required and Release Manager unreachable | Level 1 | Technical Lead → [Department Head] | 10 minutes |
| Data loss or data integrity issue detected | Level 1 | [Department Head] + Information Security | Immediate |
| Security incident detected during or after release | Level 1 | Information Security Lead + CISO | Immediate |
| Release duration exceeds maximum allowable window | Level 2 | [Department Head] + Senior Management | 15 minutes |
| Customer-impacting service outage extends beyond [X] minutes | Level 2 | [Department Head] + Customer Relations | 15 minutes |
| Regulatory reporting obligations at risk | Level 2 | Compliance Officer + [Department Head] | Immediate |
| BNM reportable incident threshold met | Level 3 | CISO + CEO / Executive Management | Immediate |

### 12.2 Escalation Contact Matrix

| Level | Role | Name | Primary Contact | Alternate Contact | Available |
|---|---|---|---|---|---|
| Level 1 | [Department Head] | [Name] | [Phone] | [Email] | [Hours] |
| Level 1 | Information Security Lead | [Name] | [Phone] | [Email] | 24/7 On-call |
| Level 2 | CIO / Head of Technology | [Name] | [Phone] | [Email] | [Hours] |
| Level 2 | Chief Risk Officer | [Name] | [Phone] | [Email] | [Hours] |
| Level 3 | CISO | [Name] | [Phone] | [Email] | 24/7 On-call |
| Level 3 | CEO / Managing Director | [Name] | [Phone] | [Email] | [Hours / On-call] |
| Regulator | BNM Technology Risk Supervision | N/A | [BNM contact per institution's supervisory relationship] | N/A | Business hours |

### 12.3 Escalation Process

1. **Identify** — Release team member identifies a condition meeting escalation criteria
2. **Notify** — Immediately inform the Release Manager on the bridge call
3. **Assess** — Release Manager and Technical Lead assess severity and determine escalation level
4. **Escalate** — Contact appropriate escalation level using the matrix above
5. **Brief** — Provide escalation contact with: current situation, options available, recommendation, and time available for decision
6. **Document** — Record escalation event, decision, and outcome in the release log
7. **Execute** — Implement the decision and continue with release or rollback as directed

---

## 13. Post-Release Activities

*Define the activities that must occur after the release window closes, regardless of whether the release succeeded or was rolled back. These activities support audit evidence, risk management, and continuous improvement.*

### 13.1 Post-Release Monitoring

| Activity | Responsible | Duration | Monitoring Tool | Alert Threshold |
|---|---|---|---|---|
| Heightened application performance monitoring | Monitoring / Ops Team | [X] hours post-release | [APM Tool] | [Specific threshold — e.g., error rate > 2x baseline] |
| Error log surveillance | Monitoring / Ops Team | [X] hours post-release | [Log Tool / SIEM] | Any new ERROR or FATAL entries |
| Business transaction monitoring | Business Owner | [X] hours post-release | [Monitoring Tool] | Any transaction failure rate > [X]% |
| Security event monitoring | Information Security | [X] hours post-release | [SIEM] | Any anomalous authentication or access events |
| Infrastructure stability monitoring | Infrastructure Team | [X] hours post-release | [Infrastructure Monitor] | CPU/memory > [X]% sustained for [Y] minutes |

### 13.2 Release Closure Checklist

| # | Activity | Responsible | Due Date | Status |
|---|---|---|---|---|
| 1 | Update Change Request in [ITSM Tool] — status to Closed / Completed | Change Manager | [Date] | [ ] Complete |
| 2 | Archive all release artefacts and evidence | Release Manager | [Date] | [ ] Complete |
| 3 | Confirm release documentation is complete and filed in [Document Repository] | Release Manager | [Date] | [ ] Complete |
| 4 | Update CMDB / asset register with new version information | [CMDB Owner] | [Date] | [ ] Complete |
| 5 | Confirm monitoring thresholds adjusted to new baseline (if applicable) | Monitoring Team | [Date] | [ ] Complete |
| 6 | Confirm security baseline updated to reflect new deployment | Information Security | [Date] | [ ] Complete |
| 7 | Send release closure notification to stakeholders | Release Manager | [Date] | [ ] Complete |
| 8 | Schedule post-implementation review (PIR) meeting | Release Manager | [Date + [X] business days] | [ ] Complete |

### 13.3 Post-Implementation Review (PIR)

A Post-Implementation Review shall be conducted within **[X] business days** of release closure. The PIR shall address:

- Assessment of actual versus planned release duration
- Evaluation of success criteria outcomes
- Root cause analysis for any deviations, failures, or rollback events
- Lessons learned and process improvement recommendations
- Action items arising from the PIR, with owners and due dates

**PIR Reference:** [PIR-YYYY-MM-NNN]
**PIR Meeting Date:** [DD Month YYYY]
**PIR Facilitator:** [Name], [Title]

---

## 14. Review and Approval

### 14.1 Version History

*Maintain a complete version history for this document. All material changes require a version increment and re-approval.*

| Version | Date | Author | Section(s) Changed | Description of Changes | Approved By |
|---|---|---|---|---|---|
| 1.0 | [DD Month YYYY] | [Author Name] | All | Initial release of document | [Approver Name] |
| [1.1] | [DD Month YYYY] | [Author Name] | [Sections] | [Description] | [Approver Name] |
| [2.0] | [DD Month YYYY] | [Author Name] | [Sections] | [Description] | [Approver Name] |

### 14.2 Scheduled Review

This document shall be reviewed:

- **Per-event:** For each release event, the release-specific sections (Sections 3–13) shall be updated to reflect the specific release scope, steps, and personnel.
- **Periodic:** The framework sections (Sections 1–2 and 14–16) shall be reviewed at a minimum of **quarterly** or whenever there is a material change to BNM RMiT requirements, internal policy, or technology environment.

| Review Type | Frequency | Next Review Due | Owner |
|---|---|---|---|
| Release-specific update | Per release event | Prior to each release | Release Manager |
| Framework / policy review | Quarterly | [DD Month YYYY] | [Department Head] |
| Regulatory alignment review | Annually or upon regulatory update | [DD Month YYYY] | Compliance Officer |

### 14.3 Document Approval Sign-Off

*All approvers listed below must provide their formal approval before this release plan is considered authorised for execution. Electronic approval via [ITSM Tool / Document Management System] is acceptable as an equivalent to physical signature.*

| Role | Name | Signature | Date |
|---|---|---|---|
| [Department Head] (Document Owner) | [Name] | | [DD Month YYYY] |
| Release Manager | [Name] | | [DD Month YYYY] |
| Business Owner | [Name] | | [DD Month YYYY] |
| Information Security Lead | [Name] | | [DD Month YYYY] |
| Change Manager / CAB Chair | [Name] | | [DD Month YYYY] |
| CIO / Head of Technology | [Name] | | [DD Month YYYY] |

---

## 15. References

*List all regulatory, policy, and standards documents that inform or mandate this release plan.*

### 15.1 Regulatory References

| Reference | Title | Issuing Authority | Applicable Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.12 (Release Management), Clause 10.11 (Change Management), Clause 10.1–10.3 (Technology Risk Governance) |
| [BNM Circular Reference] | [Circular Title, if applicable] | Bank Negara Malaysia | [Relevant sections] |
| [PDPA Reference, if applicable] | Personal Data Protection Act 2010 | Government of Malaysia | [Applicable sections where personal data is involved in the release] |
| [NACSA Reference, if applicable] | [NACSA Guideline Title] | National Cyber Security Agency | [Applicable sections] |

### 15.2 Internal Policy References

| Document Title | Document ID | Owner | Version |
|---|---|---|---|
| [Organization Name] IT Change Management Policy | [Doc ID] | [Owner] | [Version] |
| [Organization Name] Technology Risk Management Framework | [Doc ID] | [Owner] | [Version] |
| [Organization Name] Information Security Policy | [Doc ID] | [Owner] | [Version] |
| [Organization Name] Business Continuity Management Policy | [Doc ID] | [Owner] | [Version] |
| [Organization Name] Incident Management Procedure | [Doc ID] | [Owner] | [Version] |
| [Organization Name] Acceptable Use Policy | [Doc ID] | [Owner] | [Version] |

### 15.3 Standards References

| Standard | Title | Applicable Sections |
|---|---|---|
| ISO/IEC 20000-1 | IT Service Management | Change and Release Management |
| ISO/IEC 27001 | Information Security Management Systems | A.12 (Operations Security), A.14 (System Acquisition, Development and Maintenance) |
| ITIL 4 | IT Infrastructure Library | Release Management, Change Enablement Practice |

---

## 16. Appendices

### Appendix A — Release Process Flow Diagram

*Insert the visual process flow diagram illustrating the end-to-end release process, including all decision points, approval gates, and the rollback branch. The diagram should follow the sequence defined in Section 6.*

[Insert release process flow diagram here]

**Diagram Reference:** [Diagram ID / File Name]
**Created By:** [Name]
**Tool Used:** [e.g., Visio, Lucidchart, Draw.io]

---

### Appendix B — Smoke Test Cases

*List or reference the smoke test cases that will be executed in Section 6 Phase 3 and as part of rollback validation. Each test case should include a unique ID, description, steps, expected result, and pass/fail outcome.*

| Test Case ID | Test Description | Test Steps | Expected Result | Actual Result | Pass / Fail | Tested By |
|---|---|---|---|---|---|---|
| SMK-001 | [e.g., User login with valid credentials] | [Step 1, Step 2...] | [Expected outcome] | [Actual outcome] | [ ] Pass / [ ] Fail | [Name] |
| SMK-002 | [e.g., Core transaction submission] | [Step 1, Step 2...] | [Expected outcome] | [Actual outcome] | [ ] Pass / [ ] Fail | [Name] |
| SMK-003 | [e.g., Report generation] | [Step 1, Step 2...] | [Expected outcome] | [Actual outcome] | [ ] Pass / [ ] Fail | [Name] |
| SMK-004 | [e.g., Integration health check — downstream system] | [Step 1, Step 2...] | [Expected outcome] | [Actual outcome] | [ ] Pass / [ ] Fail | [Name] |

**Full smoke test suite reference:** [Test Management Tool — Test Suite ID / Link]

---

### Appendix C — Release Log (Runtime Record)

*This appendix is completed during the live release execution. Every action taken, decision made, issue encountered, and communication sent must be recorded with a timestamp. This log is primary audit evidence for BNM RMiT Clause 10.12 compliance.*

| Timestamp (HH:MM) | Step / Activity | Action Taken | Outcome | Recorded By |
|---|---|---|---|---|
| [HH:MM] | [Step reference] | [Description of action] | [Outcome — Success / Issue / Decision] | [Name] |
| [HH:MM] | | | | |
| [HH:MM] | | | | |

**Release Log completed by:** [Release Manager Name]
**Log finalised at:** [HH:MM, DD Month YYYY]

---

### Appendix D — Rollback Decision Log

*To be completed only if a rollback event occurs. This log documents the trigger, decision chain, and outcome of the rollback, and forms part of the Post-Incident Report evidence package.*

| Field | Details |
|---|---|
| Rollback Trigger | [Describe the specific condition that triggered the rollback] |
| Rollback Decision Time | [HH:MM, DD Month YYYY] |
| Decision Made By | [Name], [Title] |
| Authorised By | [Name], [Title] |
| Rollback Start Time | [HH:MM] |
| Rollback Completion Time | [HH:MM] |
| Post-Rollback Validation Completed | [ ] Yes / [ ] No |
| Business Owner Post-Rollback Acceptance | [ ] Yes / [ ] No — Accepted by [Name] at [HH:MM] |
| PIR Reference | [PIR-YYYY-MM-NNN] |
| Root Cause (Preliminary) | [Brief preliminary root cause statement] |

---

### Appendix E — UAT Sign-Off and Test Evidence Summary

*Reference the UAT test results and formal sign-off that were obtained prior to production release. This appendix provides traceability between pre-production testing and production deployment.*

| Document | Reference | Date | Approved By | Location |
|---|---|---|---|---|
| UAT Test Plan | [UAT Plan ID] | [Date] | [Business Owner Name] | [Document Repository Link] |
| UAT Test Results Report | [Report ID] | [Date] | [QA Lead Name] | [Document Repository Link] |
| UAT Formal Sign-Off | [Sign-off Ref] | [Date] | [Business Owner Name] | [Document Repository Link] |
| Performance Test Report | [Report ID] | [Date] | [Performance Lead Name] | [Document Repository Link] |
| Security Assessment Report | [Report ID] | [Date] | [Security Lead Name] | [Document Repository Link] |

---

### Appendix F — Change Advisory Board (CAB) Approval Record

*Retain the CAB approval record as evidence of the formal change approval process required under BNM RMiT Clause 10.11, which must precede release execution.*

| Field | Details |
|---|---|
| Change Request Number | [CR-YYYY-NNN] |
| CAB Meeting Date | [DD Month YYYY] |
| CAB Chair | [Name], [Title] |
| Decision | [ ] Approved / [ ] Approved with Conditions / [ ] Rejected / [ ] Deferred |
| Conditions (if any) | [List any conditions attached to the approval] |
| CAB Approval Reference | [Approval record location in ITSM Tool] |

---

*End of Document*

---

**Document Control Notice**

This document is controlled under [Organization Name]'s Document Management System. The master copy is maintained at [Document Repository Location]. Printed copies are uncontrolled and valid only on the date of printing. For the current approved version, refer to [Document Repository URL / Internal Reference].

| Prepared By | [Name], [Title], [Department] |
|---|---|
| **Review Due** | [Next Review Date] |
| **Document Repository** | [Internal Document Repository Reference] |