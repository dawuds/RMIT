# Patch Testing Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Regulatory Context](#4-regulatory-context)
5. [Patch Criticality Classification](#5-patch-criticality-classification)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Patch Testing Process Flow](#7-patch-testing-process-flow)
8. [Testing Procedures](#8-testing-procedures)
9. [Rollback Procedures](#9-rollback-procedures)
10. [EOL Technology Register](#10-eol-technology-register)
11. [Exceptions and Waivers](#11-exceptions-and-waivers)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose

*State the purpose of this document in one to three sentences, explaining why this procedure exists and what problem it addresses.*

This Patch Testing Procedure establishes a structured, repeatable process for evaluating software and firmware patches prior to deployment in [Organization Name]'s production environment. It ensures that all patches are assessed for security efficacy, functional compatibility, and operational stability before being promoted, thereby reducing the risk of unplanned outages, data loss, or security compromise. This procedure supports [Organization Name]'s obligations under Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.17 on patch management.

---

## 2. Scope and Applicability

*Define what systems, teams, and patch types are covered by this procedure. Also explicitly state what is out of scope.*

### 2.1 In-Scope

This procedure applies to all patch management activities involving:

- **Systems and Infrastructure**
  - Operating systems (Windows Server, Linux distributions, UNIX variants)
  - Database management systems (DBMS)
  - Network devices (routers, switches, firewalls, load balancers)
  - Middleware and application servers
  - Endpoint devices (workstations, laptops, mobile endpoints managed by the organization)
  - Cloud-hosted infrastructure and containerised workloads managed by [Organization Name]
  - Security appliances (IDS/IPS, WAF, SIEM agents)

- **Application Categories**
  - Core banking systems and financial processing applications
  - Customer-facing digital channels (internet banking, mobile banking)
  - Internal business applications
  - Third-party vendor applications integrated with production systems

- **Personnel**
  - All personnel within [Department Name] and associated IT Operations, Information Security, and QA functions
  - Third-party vendors and managed service providers who perform patch activities on behalf of [Organization Name] under a formal agreement

### 2.2 Out of Scope

The following are explicitly excluded from this procedure:

- Patches applied to non-production, isolated research, or sandbox environments with no connectivity to production networks
- Version upgrades or major release migrations (governed by [Change Management Policy – Document ID])
- Emergency hotfixes applied under the Incident Response Procedure (these are subject to retrospective testing as defined in Section 7.6)

### 2.3 Applicability Conditions

| Condition | Applicable Procedure |
|---|---|
| Standard security patch, vendor-released | This procedure — full testing cycle |
| Critical zero-day vulnerability patch | This procedure — expedited track (Section 7.5) |
| Emergency out-of-band patch | Incident Response Procedure, then retrospective review per Section 7.6 |
| Major version upgrade or platform migration | Change Management Policy [Document ID] |
| Cloud provider-managed patches (automatic) | Cloud Security Policy [Document ID], with notification logging |

---

## 3. Definitions and Abbreviations

*Define key terms used throughout this document to ensure consistent interpretation by all stakeholders.*

| Term / Abbreviation | Definition |
|---|---|
| **Patch** | A set of changes applied to software or firmware to correct security vulnerabilities, fix defects, or improve performance, issued by the software vendor or maintainer. |
| **Critical Patch** | A patch addressing a vulnerability with a CVSS score of 9.0–10.0 or one classified as Critical by the vendor, requiring remediation within the timeframe defined in Section 5. |
| **High Patch** | A patch addressing a vulnerability with a CVSS score of 7.0–8.9 or one classified as High by the vendor. |
| **Medium Patch** | A patch addressing a vulnerability with a CVSS score of 4.0–6.9. |
| **Low Patch** | A patch addressing a vulnerability with a CVSS score of 0.1–3.9 or a non-security defect fix. |
| **Test Environment** | An isolated infrastructure environment that mirrors production configuration and is used to validate patches before deployment. |
| **Staging Environment** | A pre-production environment used for final validation and user acceptance testing before production deployment. |
| **Rollback** | The process of reverting a system to its pre-patch state following a failed patch deployment. |
| **EOL (End-of-Life)** | The date after which a software vendor ceases to provide security patches, updates, or technical support for a product version. |
| **CVSS** | Common Vulnerability Scoring System — an industry-standard framework for rating the severity of software vulnerabilities. |
| **UAT** | User Acceptance Testing — testing conducted by business representatives to validate functional behaviour. |
| **SIT** | System Integration Testing — testing conducted to validate that the patched component continues to function correctly with all integrated systems. |
| **CAB** | Change Advisory Board — the governance body responsible for approving changes to production systems. |
| **RMiT** | Risk Management in Technology — the Bank Negara Malaysia policy document governing technology risk management for financial institutions. |
| **BNM** | Bank Negara Malaysia — the central bank and primary financial regulator of Malaysia. |
| **QA Lead** | Quality Assurance Lead — the document owner responsible for this procedure. |
| **ITSM** | IT Service Management — the platform used for logging, tracking, and managing IT changes and incidents (e.g., [ServiceNow / Jira Service Management / other]). |

---

## 4. Regulatory Context

*Describe the regulatory obligations that necessitate this procedure, citing specific clauses from the applicable frameworks.*

### 4.1 BNM Risk Management in Technology (RMiT)

This procedure directly addresses the requirements of Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, effective [RMiT Effective Date].

| RMiT Clause | Requirement Summary | How This Procedure Addresses It |
|---|---|---|
| **10.17** | Financial institutions must establish a patch management process to identify, evaluate, test, and deploy security patches in a timely manner based on the criticality of the vulnerability. | This procedure defines criticality-tiered testing timelines, test environment requirements, approval gates, and deployment controls. |
| **10.17(a)** | Patches must be tested in a non-production environment before deployment to production. | Section 8 defines mandatory test environment validation steps and exit criteria. |
| **10.17(b)** | A rollback plan must be prepared and validated before any patch deployment. | Section 9 mandates rollback plan preparation and testing as a prerequisite for production deployment approval. |
| **10.17(c)** | End-of-life technology must be identified, risk-assessed, and subject to compensating controls or a remediation plan. | Section 10 establishes the EOL Technology Register and associated risk treatment requirements. |

### 4.2 Supporting Regulatory and Standards References

| Framework / Standard | Relevant Clause / Section | Relevance |
|---|---|---|
| **PDPA 2010** | Section 9 — Security of Personal Data | Patches addressing vulnerabilities in systems processing personal data must be prioritised. |
| **NACSA Critical Information Infrastructure Protection** | CII Protection Guidelines | Systems classified as CII must meet NACSA patch management baselines. |
| **ISO/IEC 27001:2022** | Control 8.8 — Management of Technical Vulnerabilities | Aligns with international best practice for vulnerability and patch management. |
| **PCI DSS v4.0** | Requirement 6.3 | Applicable where payment card data is in scope. |
| **NIST SP 800-40 Rev. 4** | Guide to Enterprise Patch Management Planning | Reference framework for patch management programme design. |

---

## 5. Patch Criticality Classification

*Define the organization's patch criticality tiers and the maximum permissible timelines for testing completion and production deployment for each tier.*

### 5.1 Classification Framework

[Organization Name] classifies patches according to the combined assessment of vendor-assigned severity and the CVSS base score, adjusted by contextual factors including asset criticality, internet exposure, and exploitability.

| Classification | CVSS Score Range | Vendor Severity Label | Testing Completion Target | Production Deployment Target (from vendor release) |
|---|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Critical | 48 hours | 7 calendar days |
| **High** | 7.0 – 8.9 | High | 5 business days | 21 calendar days |
| **Medium** | 4.0 – 6.9 | Medium | 10 business days | 45 calendar days |
| **Low** | 0.1 – 3.9 | Low / Informational | Next scheduled cycle | 90 calendar days |
| **Informational / Enhancement** | N/A | Informational | Next scheduled cycle | At discretion of QA Lead |

> **Note:** Timelines above are maximum targets. Deployment may occur earlier upon successful completion of all required testing steps. For Critical patches where active exploitation is confirmed (zero-day), refer to the expedited track in Section 7.5.

### 5.2 Asset Criticality Modifier

Where a vulnerability affects a system classified as Tier 1 (Mission Critical) in the [Asset Inventory and Classification Register – Document ID], testing timelines are compressed by 25% relative to the standard targets above.

| Asset Tier | Description | Timeline Modifier |
|---|---|---|
| **Tier 1 — Mission Critical** | Core banking, payment processing, regulatory reporting | −25% of standard timeline |
| **Tier 2 — Business Critical** | Internal business applications, non-real-time customer services | Standard timeline |
| **Tier 3 — Standard** | Administrative and support systems | +25% of standard timeline |

### 5.3 Classification Escalation

The Information Security team may escalate a patch's classification at any point in the testing lifecycle if:

- Active exploitation of the vulnerability is confirmed in the wild
- A proof-of-concept exploit is publicly released
- Threat intelligence indicates targeting of the financial sector
- BNM or NACSA issues a directive or advisory referencing the vulnerability

Escalation must be documented in the ITSM change record and communicated to the QA Lead and Head of IT Operations within 2 hours of the decision.

---

## 6. Roles and Responsibilities

*Define who is responsible for each activity in the patch testing lifecycle using the RACI framework (Responsible, Accountable, Consulted, Informed).*

### 6.1 Role Definitions

| Role | Description |
|---|---|
| **QA Lead** | Document owner; oversees the patch testing programme, approves test plans and results. |
| **Information Security (InfoSec) Team** | Monitors vulnerability feeds, performs initial patch assessment and criticality classification. |
| **IT Operations** | Executes patch deployment to test and production environments; manages rollback execution. |
| **System / Application Owner** | Accountable for the patched system; provides business context and approves production deployment. |
| **Change Advisory Board (CAB)** | Approves changes to production systems; reviews patch deployment requests. |
| **QA Engineer** | Designs and executes test cases; documents test results and raises defects. |
| **Business Representative (UAT)** | Validates functional correctness from a business perspective during UAT. |
| **Third-Party Vendor** | Provides patches, release notes, known issues, and vendor-specific testing guidance for vendor-supplied software. |
| **IT Risk and Compliance** | Reviews exception requests and waivers; ensures audit trail completeness. |
| **Chief Information Security Officer (CISO)** | Final approver for Critical/High patch exceptions and EOL risk acceptances. |

### 6.2 RACI Matrix

*A = Accountable, R = Responsible, C = Consulted, I = Informed*

| Activity | QA Lead | InfoSec | IT Ops | System Owner | CAB | QA Engineer | Business Rep | IT Risk & Compliance |
|---|---|---|---|---|---|---|---|---|
| Monitor vulnerability feeds and vendor advisories | C | R/A | I | I | — | — | — | I |
| Assess and classify patch criticality | A | R | C | C | — | — | — | C |
| Notify affected system owners of patch availability | I | R | I | I (notified) | — | — | — | I |
| Develop test plan and test cases | A | C | C | C | — | R | — | — |
| Procure and stage patch in test environment | I | C | R/A | — | — | — | — | — |
| Execute functional and regression testing | A | — | C | C | — | R | C | — |
| Execute System Integration Testing (SIT) | A | C | R | C | — | R | — | — |
| Execute User Acceptance Testing (UAT) | C | — | I | A | — | C | R | — |
| Review and approve test results | R/A | C | I | C | I | I | I | C |
| Prepare rollback plan | A | C | R | C | — | — | — | — |
| Submit Change Request to CAB | I | I | R | A | — | — | — | I |
| CAB review and approval | I | C | C | C | R/A | — | — | I |
| Deploy patch to production | I | I | R/A | I | I | — | — | I |
| Post-deployment validation | A | C | R | C | I | R | C | — |
| Document and close change record | I | I | R | I | I | A | — | R |
| Manage exceptions and waivers | C | C | I | C | I | — | — | R/A |
| Maintain EOL Technology Register | C | R | C | C | — | — | — | A |

---

## 7. Patch Testing Process Flow

*Describe the end-to-end patch lifecycle from identification to closure. Include a high-level process narrative and a step-by-step flow.*

### 7.1 Process Overview

The patch testing lifecycle at [Organization Name] consists of seven phases:

1. **Identification** — Patch availability is detected via automated vulnerability management tooling or vendor notification.
2. **Assessment and Classification** — The patch is evaluated for criticality, applicability, and business impact.
3. **Test Planning** — A test plan and rollback plan are prepared and approved.
4. **Testing Execution** — The patch is applied and validated in the test and staging environments.
5. **Approval** — Test results are reviewed; a Change Request is submitted to and approved by the CAB.
6. **Production Deployment** — The patch is deployed to production during an approved maintenance window.
7. **Post-Deployment Verification and Closure** — System stability is confirmed and the change record is closed.

### 7.2 Phase 1 — Identification

| Step | Action | Responsible | Output |
|---|---|---|---|
| 1.1 | Subscribe to and monitor vendor security advisories, CERT feeds, and NACSA/MyCERT alerts | InfoSec Team | Advisory log entry |
| 1.2 | Scan environment using approved vulnerability management tooling [Tool Name] on a [weekly / daily] schedule | InfoSec Team | Vulnerability scan report |
| 1.3 | Match identified CVEs to [Organization Name]'s asset inventory | InfoSec Team | Affected asset list |
| 1.4 | Log the patch and affected assets in the ITSM system as a Patch Assessment Record | InfoSec Team | ITSM Patch Record (Draft) |

### 7.3 Phase 2 — Assessment and Classification

| Step | Action | Responsible | Output |
|---|---|---|---|
| 2.1 | Review vendor advisory, release notes, and CVSS score | InfoSec Team | Initial classification |
| 2.2 | Apply asset criticality modifier per Section 5.2 | InfoSec Team / QA Lead | Adjusted classification |
| 2.3 | Assess exploitability context (internet-facing, privilege required, exploit available) | InfoSec Team | Contextual risk assessment |
| 2.4 | Confirm final classification and deployment target date | QA Lead (approves) | Confirmed classification in ITSM |
| 2.5 | Notify System Owner and IT Operations of classification and target timeline | InfoSec Team | Notification email / ITSM comment |

### 7.4 Phase 3 — Test Planning

| Step | Action | Responsible | Output |
|---|---|---|---|
| 3.1 | Obtain patch package and vendor release notes from official source | IT Operations | Verified patch package |
| 3.2 | Validate patch package integrity (hash verification against vendor-published checksum) | IT Operations / InfoSec | Hash verification record |
| 3.3 | Identify all dependent systems and integration points affected by the patch | QA Lead / System Owner | Impact assessment |
| 3.4 | Prepare Test Plan (see Appendix A — Test Plan Template) | QA Lead | Approved Test Plan |
| 3.5 | Prepare Rollback Plan (see Section 9 and Appendix B — Rollback Plan Template) | IT Operations | Approved Rollback Plan |
| 3.6 | Confirm test environment availability and parity with production | QA Lead / IT Operations | Environment readiness confirmation |

### 7.5 Phase 4 — Testing Execution (Standard Track)

*Refer to Section 8 for detailed testing procedures for each testing type.*

| Step | Test Type | Environment | Responsible | Exit Criteria |
|---|---|---|---|---|
| 4.1 | Pre-patch baseline capture | Test environment | IT Operations | Baseline snapshot/backup confirmed |
| 4.2 | Patch installation | Test environment | IT Operations | Patch applied without error; version confirmed |
| 4.3 | Smoke testing | Test environment | QA Engineer | All critical services operational post-patch |
| 4.4 | Functional and regression testing | Test environment | QA Engineer | Zero critical/high defects; regression suite passes |
| 4.5 | System Integration Testing (SIT) | Test / Staging environment | QA Engineer / IT Operations | All integration points verified; no data integrity issues |
| 4.6 | User Acceptance Testing (UAT) | Staging environment | Business Representative | Business sign-off obtained |
| 4.7 | Performance and stability testing (if applicable) | Test / Staging environment | QA Engineer / IT Operations | No performance degradation beyond [threshold, e.g., 10%] |
| 4.8 | Security validation | Test environment | InfoSec Team | Vulnerability confirmed remediated; no new vulnerabilities introduced |
| 4.9 | Review and sign-off of test results | QA Lead / System Owner | Approved test results package |

#### 7.5.1 Expedited Track — Critical Zero-Day Patches

Where a patch is classified as Critical and active exploitation is confirmed or imminent, the following compressed timeline applies:

| Step | Action | Maximum Duration | Responsible |
|---|---|---|---|
| E.1 | Patch assessment and classification | 2 hours | InfoSec Team |
| E.2 | Emergency CAB convened (or emergency approval by designated approver) | 2 hours | QA Lead / IT Ops |
| E.3 | Abbreviated test execution (smoke + security validation minimum) | 4 hours | QA Engineer / InfoSec |
| E.4 | CISO or delegated authority sign-off | 1 hour | CISO |
| E.5 | Production deployment | As scheduled | IT Operations |
| E.6 | Full retrospective test documentation | Within 48 hours of deployment | QA Lead |

> **Note:** Expedited track deployments require explicit CISO approval. All deviations from the standard track must be documented in the ITSM change record and reviewed by IT Risk and Compliance within 5 business days.

### 7.6 Phase 5 — Change Advisory Board (CAB) Approval

| Step | Action | Responsible | Output |
|---|---|---|---|
| 5.1 | Compile change request package (test results, rollback plan, deployment schedule) | IT Operations / QA Lead | Change Request package |
| 5.2 | Submit Change Request in ITSM | IT Operations | ITSM Change Request record |
| 5.3 | CAB reviews change request | CAB | CAB meeting minutes |
| 5.4 | CAB approves, rejects, or requests additional information | CAB | Approval decision in ITSM |
| 5.5 | Schedule production deployment window upon approval | IT Operations / System Owner | Confirmed maintenance window |

### 7.7 Phase 6 — Production Deployment

| Step | Action | Responsible | Output |
|---|---|---|---|
| 6.1 | Pre-deployment communication to affected stakeholders | IT Operations | Stakeholder notification |
| 6.2 | Create production system snapshot/backup | IT Operations | Backup confirmation record |
| 6.3 | Deploy patch to production during approved maintenance window | IT Operations | Deployment log |
| 6.4 | Execute post-deployment smoke test | QA Engineer / IT Operations | Smoke test result |
| 6.5 | Confirm patch version and deployment success | IT Operations | Version confirmation record |
| 6.6 | Escalate to rollback if critical failure detected (per Section 9) | IT Operations / QA Lead | Rollback decision record (if triggered) |

### 7.8 Phase 7 — Post-Deployment Verification and Closure

| Step | Action | Responsible | Output |
|---|---|---|---|
| 7.1 | Monitor production system health for [24 / 48 / 72] hours post-deployment | IT Operations | Monitoring log |
| 7.2 | Confirm vulnerability remediation via follow-up scan | InfoSec Team | Post-patch vulnerability scan report |
| 7.3 | Obtain final sign-off from System Owner | System Owner | Sign-off confirmation |
| 7.4 | Update asset register and configuration management database (CMDB) | IT Operations | Updated CMDB records |
| 7.5 | Close ITSM change record; archive all test artefacts | QA Lead / IT Operations | Closed change record |
| 7.6 | Record patch deployment metrics for reporting | QA Lead | Patch management dashboard updated |

---

## 8. Testing Procedures

*Describe in detail the testing activities to be performed at each stage. Include minimum acceptance criteria for each test type.*

### 8.1 Test Environment Requirements

*Specify the minimum requirements for the test environment used to validate patches.*

The test environment used for patch validation must meet the following minimum requirements:

- **Architecture parity:** The test environment must replicate the production environment's operating system version, patch level, middleware configuration, and key integration points to the extent feasible.
- **Data:** The test environment must be populated with anonymised or synthetic data representative of production data volumes and formats. Live production data must not be used in the test environment unless explicitly approved and governed by a data handling agreement.
- **Isolation:** The test environment must be logically isolated from production to prevent cross-contamination.
- **Baseline documentation:** A documented baseline configuration of the test environment must exist and be refreshed before each testing cycle.
- **Access control:** Access to the test environment is restricted to authorised testing personnel only.

| Environment | Purpose | Minimum Parity Requirement |
|---|---|---|
| **Development** | Initial patch installation and developer validation | OS and runtime versions matching production |
| **Test / QA** | Formal test execution (functional, regression, SIT) | Full stack parity with production |
| **Staging / Pre-Production** | UAT, performance testing, final validation | Full production mirror, including network topology |

### 8.2 Pre-Patch Baseline Activities

Before any patch is applied to the test environment, the following baseline activities must be completed and recorded:

- [ ] Confirm and document current software version and patch level of the target system
- [ ] Capture system configuration snapshot (e.g., running configuration export, registry export)
- [ ] Create a full system snapshot or backup with timestamp confirmation
- [ ] Run pre-patch smoke test to confirm system is in a known-good state
- [ ] Document all services, ports, and integration endpoints in an operational state
- [ ] Record baseline performance metrics (CPU, memory, response times) if applicable

### 8.3 Functional Testing

*Define the functional tests to be executed to confirm that the patch does not break existing functionality.*

**Objective:** Confirm that the core functionality of the patched system operates correctly after the patch is applied.

**Minimum test coverage:**
- All business-critical functions identified in the [System Test Plan – Appendix A]
- Any functions explicitly mentioned in the vendor's release notes as affected
- Functions that share code modules with the patched component

| Test Case ID | Test Description | Expected Result | Actual Result | Pass/Fail | Tested By | Date |
|---|---|---|---|---|---|---|
| TC-FUNC-001 | [Describe test case] | [Expected outcome] | [Actual outcome] | [P/F] | [Tester] | [Date] |
| TC-FUNC-002 | [Describe test case] | [Expected outcome] | [Actual outcome] | [P/F] | [Tester] | [Date] |
| TC-FUNC-003 | [Describe test case] | [Expected outcome] | [Actual outcome] | [P/F] | [Tester] | [Date] |

**Exit Criteria:** 100% of critical and high priority test cases must pass. No open defects of Critical or High severity. All Medium defects must be reviewed and accepted by the System Owner.

### 8.4 Regression Testing

*Define the regression testing approach to confirm the patch does not introduce regressions in previously working functionality.*

**Objective:** Confirm that previously validated functionality remains unaffected by the patch.

**Approach:**
- Execute the full regression test suite for the affected system, as maintained in [Test Management Tool Name]
- At minimum, execute all tests tagged as regression-critical
- Automated regression tests should be executed where available; manual regression is acceptable for systems without automation coverage

| Regression Suite | Total Test Cases | Automated | Manual | Minimum Pass Rate Required |
|---|---|---|---|---|
| Core Regression Suite | [Number] | [Number] | [Number] | 100% critical, ≥98% overall |
| Integration Regression Suite | [Number] | [Number] | [Number] | 100% critical, ≥95% overall |
| Security Regression Suite | [Number] | [Number] | [Number] | 100% |

**Exit Criteria:** Pass rates meet or exceed the minimum thresholds above. All Critical and High defects are resolved or accepted with documented rationale prior to CAB submission.

### 8.5 System Integration Testing (SIT)

*Validate that the patched system continues to function correctly with all upstream and downstream integrated systems.*

**Objective:** Confirm that the patch does not disrupt data flows, API contracts, or service dependencies between integrated systems.

**Integration points to be tested for [System Name]:**

| Integration Point | System A | System B | Integration Type | Test Method | Pass Criteria |
|---|---|---|---|---|---|
| [Integration ID-001] | [Patched System] | [Dependent System] | [API / DB / File / Message Queue] | [Method] | [Criteria] |
| [Integration ID-002] | [Patched System] | [Dependent System] | [API / DB / File / Message Queue] | [Method] | [Criteria] |
| [Integration ID-003] | [Upstream System] | [Patched System] | [API / DB / File / Message Queue] | [Method] | [Criteria] |

**Exit Criteria:** All documented integration points verified. No data integrity issues observed. Any integration failures must be reviewed by the System Owner and QA Lead before proceeding.

### 8.6 User Acceptance Testing (UAT)

*Define the UAT process, including who is responsible and what sign-off is required.*

**Objective:** Confirm from a business perspective that the patched system performs its intended functions correctly and that no business process has been disrupted.

**UAT Execution:**
- UAT is conducted in the staging environment by nominated Business Representatives
- UAT test scenarios are derived from business process documentation and are prepared by the QA Lead in consultation with the System Owner
- UAT must be completed within the timeline defined by the patch classification (Section 5)

| UAT Scenario | Business Process | Test Steps | Expected Result | Pass/Fail | Tested By | Date |
|---|---|---|---|---|---|---|
| UAT-001 | [Business Process Name] | [Step-by-step] | [Expected] | [P/F] | [Business Rep] | [Date] |
| UAT-002 | [Business Process Name] | [Step-by-step] | [Expected] | [P/F] | [Business Rep] | [Date] |

**Sign-off Requirement:** UAT sign-off must be obtained from the nominated Business Representative and System Owner before the change request is submitted to CAB.

### 8.7 Security Validation Testing

*Define the security-specific testing to be performed to confirm the vulnerability is remediated and no new issues are introduced.*

**Objective:** Confirm that the vulnerability addressed by the patch is successfully remediated and that the patch itself does not introduce new security weaknesses.

**Security Validation Steps:**

| Step | Activity | Tool / Method | Responsible | Acceptance Criteria |
|---|---|---|---|---|
| SV-01 | Re-scan target system for the specific CVE(s) addressed by the patch | [Vulnerability Scanner, e.g., Tenable / Qualys] | InfoSec Team | CVE no longer detected |
| SV-02 | Confirm patch version strings and checksums match vendor-published values | Manual verification / SIEM | IT Operations | Version confirmed |
| SV-03 | Review audit logs for anomalous activity during patch installation | SIEM / Log Review | InfoSec Team | No anomalous events |
| SV-04 | Run authenticated vulnerability scan of patched component | [Scanner] | InfoSec Team | No new Critical or High CVEs introduced |
| SV-05 | Validate that security configuration baselines (e.g., CIS benchmarks) are maintained | [Configuration tool] | InfoSec / IT Ops | Benchmark compliance maintained |

### 8.8 Performance Testing

*Define when performance testing is required and what thresholds must be met.*

Performance testing is **mandatory** for patches applied to Tier 1 Mission Critical systems and **recommended** for all other production systems. Performance testing is **optional** for Low-classified patches unless the system owner requests it.

**Performance Thresholds:**

| Metric | Baseline (Pre-Patch) | Maximum Acceptable Deviation | Measurement Method |
|---|---|---|---|
| Average response time | [Baseline value] | ≤ 10% increase | [APM Tool / Load Test Tool] |
| Peak throughput (transactions per second) | [Baseline value] | ≤ 5% decrease | [APM Tool / Load Test Tool] |
| CPU utilisation (steady state) | [Baseline value] | ≤ 10% increase | [Monitoring Tool] |
| Memory utilisation (steady state) | [Baseline value] | ≤ 10% increase | [Monitoring Tool] |
| Error rate | [Baseline value] | No increase above baseline | [APM Tool] |

**Exit Criteria:** All metrics remain within acceptable deviation thresholds. Deviations exceeding thresholds must be escalated to the QA Lead and System Owner for a risk-based decision before CAB submission.

---

## 9. Rollback Procedures

*Define the mandatory rollback planning and execution process to ensure systems can be restored to their pre-patch state in the event of a failed deployment.*

### 9.1 Rollback Planning Requirements

A rollback plan is **mandatory** for every patch deployment and must be prepared and approved before the Change Request is submitted to CAB. The rollback plan must be documented using the template in Appendix B.

**Minimum rollback plan contents:**

- [ ] Rollback trigger criteria (what conditions will initiate rollback)
- [ ] Rollback decision authority (who can authorise rollback)
- [ ] Step-by-step rollback instructions
- [ ] Estimated rollback duration
- [ ] Communication plan during rollback execution
- [ ] Post-rollback validation steps
- [ ] Contact list for on-call personnel during deployment

### 9.2 Rollback Trigger Criteria

Rollback must be initiated if any of the following conditions are met during or after production deployment:

| Trigger Condition | Detection Method | Decision Authority |
|---|---|---|
| Critical system service failure post-deployment | Automated monitoring alert / smoke test failure | IT Operations Lead (immediate), notify QA Lead |
| Data integrity error detected in production | Application error log / database integrity check | System Owner + QA Lead |
| Security incident or anomalous activity linked to patch | SIEM alert / SOC notification | CISO / InfoSec Team |
| Integration failure affecting downstream systems | Integration monitoring / service desk tickets | QA Lead + System Owner |
| Performance degradation exceeding [threshold] for more than [30 minutes] | APM monitoring | IT Operations Lead + QA Lead |
| Explicit instruction from CAB or senior management | — | CAB Chair / CIO |

### 9.3 Rollback Execution Steps

*The following is a generalised rollback procedure. System-specific rollback steps must be documented in the System-Specific Rollback Plan (Appendix B).*

| Step | Action | Responsible | Time Target |
|---|---|---|---|
| R.1 | Declare rollback and notify QA Lead, System Owner, and IT Operations Lead | IT Operations (on-site) | Immediate |
| R.2 | Log rollback initiation in ITSM change record | IT Operations | Within 5 minutes |
| R.3 | Isolate the affected system from production traffic if required (maintenance mode / traffic diversion) | IT Operations | Per system runbook |
| R.4 | Restore system from pre-deployment snapshot / backup | IT Operations | Per system runbook |
| R.5 | Verify system version reverted to pre-patch level | IT Operations | After restore |
| R.6 | Execute post-rollback smoke test | QA Engineer / IT Operations | Within 15 minutes of restore |
| R.7 | Confirm integration points are operational | IT Operations | Within 30 minutes of restore |
| R.8 | Return system to production traffic | IT Operations (with System Owner approval) | After all checks pass |
| R.9 | Notify all stakeholders of rollback completion and system status | IT Operations / QA Lead | Immediately after R.8 |
| R.10 | Conduct root cause analysis within 3 business days | QA Lead / InfoSec | Within 3 business days |
| R.11 | Document lessons learned and update test procedures if required | QA Lead | Within 5 business days |

### 9.4 Post-Rollback Actions

Following a rollback, the following actions are mandatory:

1. **Root Cause Analysis (RCA):** A formal RCA must be conducted and documented within 3 business days of the rollback.
2. **Re-classification:** The QA Lead and InfoSec Team must re-assess whether the deferred patch can be re-tested with remediation of the identified failure, or whether a compensating control is required.
3. **Reporting:** Rollback events for Critical and High patches must be reported to IT Risk and Compliance and escalated to the CISO within 24 hours.
4. **BNM Notification:** Where a rollback event results in a material technology incident as defined under RMiT, the incident must be reported to BNM in accordance with [Incident Reporting Procedure – Document ID].

---

## 10. EOL Technology Register

*Maintain a register of all systems and software components that have reached or are approaching End-of-Life (EOL), along with risk treatment plans.*

### 10.1 EOL Technology Management Policy

[Organization Name] is required under RMiT Clause 10.17(c) to:

1. Maintain an up-to-date register of all EOL technology components in the production environment.
2. Conduct a formal risk assessment for each EOL technology in use.
3. Implement compensating controls where EOL technology cannot be immediately replaced.
4. Maintain a documented remediation roadmap for all EOL technology.

EOL technology continues to receive standard vulnerability management oversight. Where a CVE is identified against an EOL component for which no vendor patch is available, the risk must be treated in accordance with the [Information Security Risk Management Policy – Document ID].

### 10.2 EOL Technology Register

*This register must be reviewed and updated at minimum annually and when any new EOL notices are received from vendors. The QA Lead, in consultation with the IT Operations and InfoSec teams, is responsible for maintaining this register.*

| Register ID | System / Component | Version | Vendor EOL Date | Current Status | Asset Tier | Risk Level | Compensating Controls in Place | Remediation Plan | Remediation Target Date | Risk Owner | Last Reviewed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| EOL-001 | [System/OS Name] | [Version] | [EOL Date] | [EOL / Approaching EOL] | [Tier 1/2/3] | [Critical/High/Med/Low] | [List controls, e.g., network isolation, WAF, enhanced monitoring] | [Upgrade / Migration / Decommission] | [Target Date] | [System Owner] | [Date] |
| EOL-002 | [System/OS Name] | [Version] | [EOL Date] | [EOL / Approaching EOL] | [Tier 1/2/3] | [Critical/High/Med/Low] | [Compensating controls] | [Remediation plan summary] | [Target Date] | [System Owner] | [Date] |
| EOL-003 | [Database Name] | [Version] | [EOL Date] | [EOL / Approaching EOL] | [Tier 1/2/3] | [Critical/High/Med/Low] | [Compensating controls] | [Remediation plan summary] | [Target Date] | [System Owner] | [Date] |

### 10.3 EOL Risk Assessment Requirements

For each EOL technology, a risk assessment must be documented addressing:

| Assessment Element | Description |
|---|---|
| **Threat exposure** | What specific threats does the EOL status create (no vendor patches, no security fixes)? |
| **Exploitability** | Is the component internet-facing? What is the attack surface? |
| **Impact** | What is the potential business and data impact if the component is compromised? |
| **Compensating controls** | What controls are in place to reduce the risk in the absence of vendor patches? |
| **Residual risk rating** | What is the residual risk level after compensating controls? |
| **Risk acceptance** | Has the residual risk been formally accepted by the appropriate authority? |

EOL risk assessments must be approved by the CISO and reviewed at least every six months.

### 10.4 EOL Notification and Tracking

| Approaching EOL — Notification Triggers | Action Required |
|---|---|
| 18 months before EOL date | Initiate upgrade / migration planning; include in annual IT budget |
| 12 months before EOL date | Confirm remediation plan; assign project owner |
| 6 months before EOL date | Escalate to CIO and CISO; compensating controls must be in place |
| At EOL date (no remediation completed) | Formal risk acceptance by CISO; mandatory quarterly re-review |
| Post-EOL (>12 months, no remediation) | Board-level risk notification; mandatory escalation to IT Risk Committee |

---

## 11. Exceptions and Waivers

*Define the process for handling situations where patches cannot be applied within the required timelines or where the standard testing procedure cannot be followed.*

### 11.1 Exception Criteria

A formal exception may be requested where:

- The patch cannot be applied within the required classification-based timeline due to operational, technical, or business constraints
- The full testing procedure cannot be followed (e.g., no test environment available, vendor advises against testing)
- The patch introduces a known compatibility issue with a critical system that cannot be resolved within the required timeline

### 11.2 Exception Request Process

| Step | Action | Responsible |
|---|---|---|
| 1 | Document the exception request using the Exception Request Form (Appendix C) | System Owner |
| 2 | Identify and document compensating controls to be implemented for the duration of the exception | InfoSec Team |
| 3 | Conduct and document a risk assessment of the exception | IT Risk and Compliance |
| 4 | Submit exception request for approval | IT Risk and Compliance |
| 5 | Approve or reject exception (Critical/High: CISO approval required; Medium/Low: QA Lead approval) | CISO / QA Lead |
| 6 | Implement compensating controls and log exception in ITSM | IT Operations / InfoSec |
| 7 | Review exception on the schedule defined in approval (maximum 30 days for Critical; 60 days for High; 90 days for Medium/Low) | IT Risk and Compliance |
| 8 | Close exception when patch is applied or when formally accepted as permanent risk | IT Risk and Compliance |

### 11.3 Exception Register

| Exception ID | Patch / CVE Reference | Affected System | Reason for Exception | Compensating Controls | Approval Authority | Approved Date | Review Date | Status |
|---|---|---|---|---|---|---|---|---|
| EXC-001 | [CVE / Patch ID] | [System] | [Reason] | [Controls] | [Approver] | [Date] | [Date] | [Open/Closed] |

---

## 12. Review and Approval

### 12.1 Review Schedule

This document is subject to:

- **Annual review** — conducted by the QA Lead, with input from the InfoSec Team and IT Operations, to ensure continued relevance and regulatory alignment.
- **Ad-hoc review** — triggered by any of the following:
  - Significant change to the technology environment (new platforms, major architecture changes)
  - Changes to applicable BNM RMiT requirements or related regulatory guidance
  - Material patch-related incident or near-miss
  - Internal or external audit findings relating to patch management
  - Direction from the IT Risk Committee or senior management

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], QA Lead | Initial document creation and approval |
| 1.1 | [Date] | [Author Name] | [Brief description of change, e.g., "Updated EOL timelines per new BNM advisory"] |
| [X.X] | [Date] | [Author Name] | [Change description] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead (Document Owner) | [Name] | _________________________ | [Date] |
| Head of IT Operations | [Name] | _________________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | _________________________ | [Date] |
| Head of IT Risk and Compliance | [Name] | _________________________ | [Date] |
| Chief Information Officer (CIO) | [Name] | _________________________ | [Date] |

> This document is approved when all signatures above have been obtained. The approved document must be stored in the [Document Management System Name] and access controlled in accordance with its Confidential classification.

---

## 13. References

*List all regulatory frameworks, policy documents, standards, and guidance referenced in this procedure.*

### 13.1 Regulatory References

| Reference | Document Title | Issuing Body | Clause(s) Relevant | Version / Date |
|---|---|---|---|---|
| **BNM RMiT** | Risk Management in Technology Policy Document | Bank Negara Malaysia | 10.17, 10.17(a), 10.17(b), 10.17(c) | [Effective Date of RMiT] |
| **PDPA 2010** | Personal Data Protection Act 2010 | Malaysian Government | Section 9 | 2010 (as amended) |
| **NACSA CII Guidelines** | Critical Information Infrastructure Protection Guidelines | NACSA | [Relevant section] | [Version / Date] |

### 13.2 Internal Policy and Procedure References

| Document ID | Document Title | Relationship to This Procedure |
|---|---|---|
| [Document ID] | Information Security Policy | Parent policy governing all security controls including patch management |
| [Document ID] | Change Management Policy and Procedure | Governs CAB process and production change approvals |
| [Document ID] | Asset Inventory and Classification Register | Defines asset tiers used for patch prioritisation |
| [Document ID] | Incident Response Procedure | Governs emergency patches and incidents triggered by patch failures |
| [Document ID] | Information Security Risk Management Policy | Governs risk assessment and acceptance for EOL technology |
| [Document ID] | Vulnerability Management Procedure | Upstream procedure feeding patch identification |
| [Document ID] | Business Continuity and Disaster Recovery Plan | Referenced for major patch-related incident scenarios |

### 13.3 Standards and Frameworks

| Standard | Title | Relevant Section |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Control 8.8 — Management of Technical Vulnerabilities |
| NIST SP 800-40 Rev. 4 | Guide to Enterprise Patch Management Planning | All |
| CIS Controls v8 | CIS Critical Security Controls | Control 7 — Continuous Vulnerability Management |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | Requirement 6.3 |

---

## 14. Appendices

### Appendix A — Patch Test Plan Template

*Use this template to document the test plan for each patch testing cycle. A completed test plan must be approved by the QA Lead before testing begins.*

---

**PATCH TEST PLAN**

| Field | Value |
|---|---|
| Test Plan ID | [TP-YYYY-NNN] |
| Patch / CVE Reference | [CVE-XXXX-XXXXX / Vendor Advisory ID] |
| Affected System(s) | [System Name(s)] |
| Patch Classification | [Critical / High / Medium / Low] |
| Test Environment | [Environment Name] |
| Test Plan Author | [Name], QA Engineer |
| Test Plan Approved By | [Name], QA Lead |
| Testing Start Date | [Date] |
| Testing Completion Target | [Date] |

**1. Patch Description**

[Provide a brief description of the patch, the vulnerability it addresses, and its intended effect.]

**2. Scope of Testing**

[List all systems, components, and integration points included in this testing cycle.]

**3. Test Environment Parity Confirmation**

[Confirm that the test environment reflects production configuration. List any known deviations and their risk assessment.]

**4. Test Cases**

[List all test cases by type: Functional, Regression, SIT, UAT, Security Validation, Performance (if applicable). Reference the test case IDs in the test management tool.]

**5. Entry Criteria**

- [ ] Test environment available and confirmed at production parity
- [ ] Patch package received and integrity verified
- [ ] Baseline snapshot of test environment taken
- [ ] Rollback plan prepared and approved
- [ ] All test cases documented and reviewed

**6. Exit Criteria**

- [ ] All Critical and High test cases passed
- [ ] Regression suite pass rate meets minimum threshold
- [ ] Security validation confirms vulnerability remediated
- [ ] No new Critical or High CVEs introduced
- [ ] UAT sign-off obtained from Business Representative
- [ ] Test results reviewed and approved by QA Lead

**7. Defect Management**

[Describe how defects identified during testing will be logged, prioritised, and resolved. Reference the defect management process in [ITSM Tool Name].]

**8. Sign-Off**

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Engineer | [Name] | _________________ | [Date] |
| QA Lead | [Name] | _________________ | [Date] |
| System Owner | [Name] | _________________ | [Date] |

---

### Appendix B — Rollback Plan Template

*A completed rollback plan must accompany every Change Request submitted to the CAB. IT Operations is responsible for preparing this plan.*

---

**ROLLBACK PLAN**

| Field | Value |
|---|---|
| Rollback Plan ID | [RP-YYYY-NNN] |
| Associated Change Request | [CR-YYYY-NNN] |
| System(s) | [System Name(s)] |
| Patch Reference | [Patch / CVE ID] |
| Rollback Plan Author | [Name], IT Operations |
| Rollback Plan Approved By | [Name], QA Lead |

**1. Rollback Trigger Criteria**

[List the specific conditions that will trigger execution of this rollback plan.]

**2. Decision Authority**

[Name the role and individual authorised to make the rollback decision and the escalation path if that individual is unavailable.]

**3. Pre-Deployment Backup Confirmation**

| Item | Backup Method | Location | Timestamp | Confirmed By |
|---|---|---|---|---|
| [System/DB snapshot] | [VM snapshot / backup tool] | [Storage location] | [Timestamp] | [Name] |

**4. Step-by-Step Rollback Instructions**

| Step | Action | Command / Procedure | Responsible | Expected Duration |
|---|---|---|---|---|
| 1 | [Action] | [Command or reference to runbook] | [Role] | [Duration] |
| 2 | [Action] | [Command or reference to runbook] | [Role] | [Duration] |
| 3 | [Action] | [Command or reference to runbook] | [Role] | [Duration] |

**5. Post-Rollback Validation Checklist**

- [ ] System version confirmed reverted to pre-patch level
- [ ] All critical services operational
- [ ] Integration points verified
- [ ] Monitoring confirms no active alerts
- [ ] System Owner confirms system is in acceptable state

**6. Communication Plan**

[List who must be notified during and after rollback execution, the notification method, and timing.]

**7. Estimated Total Rollback Duration**

[Provide an estimate of the total time required to complete rollback, including validation. This informs the maintenance window planning.]

---

### Appendix C — Exception Request Form

*Complete this form when requesting an exception to the standard patch testing timeline or procedure.*

---

**PATCH MANAGEMENT EXCEPTION REQUEST**

| Field | Value |
|---|---|
| Exception Request ID | [EXC-YYYY-NNN] |
| Date of Request | [Date] |
| Requested By | [Name, Role] |
| Patch / CVE Reference | [Patch ID / CVE] |
| Affected System(s) | [System Name(s)] |
| Patch Classification | [Critical / High / Medium / Low] |
| Standard Deployment Deadline | [Date] |
| Requested Extension To | [Date] |

**1. Reason for Exception**

[Provide a detailed description of why the patch cannot be applied within the standard timeline or why the standard testing procedure cannot be followed.]

**2. Risk Assessment**

[Describe the risk to [Organization Name] of deferring the patch, including potential threat exposure, likelihood of exploitation, and potential impact.]

**3. Compensating Controls**

[List the specific compensating controls that will be implemented to reduce risk for the duration of the exception period.]

| Control | Description | Owner | Implementation Date |
|---|---|---|---|
| [Control 1] | [Description] | [Owner] | [Date] |
| [Control 2] | [Description] | [Owner] | [Date] |

**4. Residual Risk Rating**

[State the residual risk rating after compensating controls: Critical / High / Medium / Low]

**5. Remediation Commitment**

[State the committed date by which the patch will be applied and the exception closed.]

**6. Approval**

| Classification | Required Approver | Name | Signature | Date | Decision |
|---|---|---|---|---|---|
| Critical / High Exception | CISO | [Name] | _________________ | [Date] | [Approved / Rejected] |
| Medium / Low Exception | QA Lead | [Name] | _________________ | [Date] | [Approved / Rejected] |
| IT Risk Acknowledgement | Head of IT Risk & Compliance | [Name] | _________________ | [Date] | [Acknowledged] |

---

### Appendix D — Patch Management Metrics and Reporting

*Define the key performance indicators (KPIs) used to measure the effectiveness of the patch management programme.*

| KPI | Description | Target | Reporting Frequency | Report Owner |
|---|---|---|---|---|
| **Critical Patch Compliance Rate** | % of Critical patches deployed within 7 calendar days of vendor release | ≥ 95% | Monthly | QA Lead |
| **High Patch Compliance Rate** | % of High patches deployed within 21 calendar days | ≥ 95% | Monthly | QA Lead |
| **Medium Patch Compliance Rate** | % of Medium patches deployed within 45 calendar days | ≥ 90% | Monthly | QA Lead |
| **Open Exception Count** | Number of active patch exceptions by classification | Critical: 0; High: ≤ 3 | Monthly | IT Risk & Compliance |
| **Rollback Rate** | % of patch deployments requiring rollback | ≤ 5% | Quarterly | QA Lead |
| **EOL Items Tracked** | Number of EOL technology items in the register with active remediation plans | 100% have remediation plans | Quarterly | QA Lead / InfoSec |
| **Mean Time to Patch (MTTP) — Critical** | Average number of days from CVE/advisory publication to production deployment for Critical patches | ≤ 7 days | Monthly | QA Lead |
| **Test Environment Parity** | % of test environments confirmed at production parity before testing | 100% | Per test cycle | QA Lead |

*Patch management metrics are reported to the IT Risk Committee on a [monthly / quarterly] basis and to the Board Risk Committee [as required by policy].*

---

### Appendix E — Glossary of Vulnerability Severity Ratings

| Rating | CVSS Score | Typical Response |
|---|---|---|
| **Critical** | 9.0 – 10.0 | Immediate action required; expedited track |
| **High** | 7.0 – 8.9 | Priority patching within 21 days |
| **Medium** | 4.0 – 6.9 | Scheduled patching within 45 days |
| **Low** | 0.1 – 3.9 | Scheduled next maintenance cycle |
| **Informational** | 0.0 | At discretion; no mandatory timeline |

*CVSS scores are sourced from the National Vulnerability Database (NVD) at nvd.nist.gov. Where vendor-assigned severity differs from NVD CVSS, the higher of the two ratings applies.*

---

*End of Document*

---

*This document is classified **Confidential** and is intended for internal use by [Organization Name] only. Unauthorised disclosure, reproduction, or distribution is prohibited. For queries regarding this document, contact the QA Lead at [contact details].*