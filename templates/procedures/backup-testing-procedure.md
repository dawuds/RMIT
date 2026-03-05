# Backup Testing Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 10.45 |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. Handle in accordance with [Organization Name]'s Information Classification Policy.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy References](#3-regulatory-and-policy-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [RPO and RTO Definitions by Tier](#6-rpo-and-rto-definitions-by-tier)
7. [Backup Schedule and Retention Policy](#7-backup-schedule-and-retention-policy)
8. [Backup Restoration Testing Process](#8-backup-restoration-testing-process)
9. [Restoration Testing Results and Reporting](#9-restoration-testing-results-and-reporting)
10. [Exception and Failure Management](#10-exception-and-failure-management)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose

*State the intent of this procedure, its regulatory basis, and the operational outcomes it is designed to achieve.*

This procedure establishes the formal, structured process by which [Organization Name] conducts regular backup restoration testing to verify the integrity, completeness, and recoverability of all backed-up data and systems. It ensures that backup assets are reliable and can be restored within defined recovery objectives when required during a disaster recovery, business continuity, or incident response scenario.

This procedure is issued in compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.45**, which mandates that financial institutions implement and periodically test backup and recovery mechanisms to validate their effectiveness and alignment with documented recovery objectives.

The objectives of this procedure are to:

- Validate that backup files are complete, uncorrupted, and restorable to a known-good state.
- Confirm adherence to defined Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO) across all system tiers.
- Provide documented evidence of testing activities for internal audit, external regulatory examination, and management assurance.
- Identify gaps or weaknesses in backup and recovery configurations and drive timely remediation.
- Support [Organization Name]'s overall Business Continuity Plan (BCP) and IT Disaster Recovery Plan (ITDRP).

---

## 2. Scope and Applicability

*Define the systems, environments, locations, data types, and personnel covered by this procedure. Explicitly state what is excluded and why.*

### 2.1 In-Scope Systems and Environments

This procedure applies to all backup and recovery activities performed across the following environments owned or operated by [Organization Name]:

| Environment | Description | Examples |
|---|---|---|
| **Production** | Live systems supporting business operations | Core banking, internet banking, payment gateways |
| **Disaster Recovery (DR)** | Replicated or standby systems at secondary site | DR replication targets, hot/warm standby systems |
| **Development / UAT** | Non-production systems with sensitive or masked data | Pre-production databases, staging environments |
| **Cloud-Hosted** | Workloads hosted on cloud service providers | [Cloud Provider Name] instances, managed databases |

### 2.2 Data and Asset Types Covered

- **Databases:** Relational databases (e.g., Oracle, MS SQL, PostgreSQL), NoSQL stores.
- **Application data:** Configuration files, application binaries, customer data repositories.
- **Operating system and server images:** Full system snapshots and bare-metal backups.
- **File shares and document repositories:** Network-attached storage (NAS), SharePoint, document management systems.
- **Virtual machine snapshots:** VMware/Hyper-V VM snapshots and templates.
- **Security and audit logs:** SIEM log archives, audit trail repositories.
- **Cryptographic key backups:** HSM key backups, certificate stores (subject to separate key management procedures).

### 2.3 Geographic and Infrastructure Scope

| Location | Type | Role |
|---|---|---|
| [Primary Data Centre Name] | On-premises | Primary backup target |
| [Secondary Data Centre / DR Site Name] | On-premises / Co-location | Off-site backup and DR testing |
| [Cloud Region Name] | Cloud | Cloud-tier backup storage |

### 2.4 Exclusions

The following are explicitly excluded from this procedure:

- Archival data that has been formally decommissioned and is subject to a separate data disposal process.
- Personal devices and endpoints managed outside the corporate device management framework.
- Third-party vendor systems where backup and recovery responsibility is contractually delegated to the vendor, provided that equivalent controls and testing evidence are obtained and reviewed annually.

### 2.5 Applicability

This procedure applies to all [Organization Name] employees, contractors, managed service providers, and third parties who manage, operate, or have access to systems and data within the defined scope.

---

## 3. Regulatory and Policy References

*List all regulatory instruments, internal policies, and industry standards that govern or inform this procedure.*

### 3.1 Regulatory Requirements

| Reference | Document | Clause / Section | Requirement Summary |
|---|---|---|---|
| BNM | Risk Management in Technology (RMiT) | **10.45** | Financial institutions must ensure backup and recovery mechanisms are periodically tested to validate recoverability and alignment with RPO/RTO. |
| BNM | Risk Management in Technology (RMiT) | 10.43 – 10.44 | Requirements for backup strategy, off-site storage, and encryption of backup media. |
| BNM | Business Continuity Management (BCM) | [Relevant Clause] | Requirements for testing of recovery capabilities as part of BCM programme. |
| PDPA 2010 | Personal Data Protection Act | Section 9 | Security of personal data including backup and recovery controls. |
| NACSA | National Cyber Security Policy / CII Sector Requirements | [Relevant Control] | Requirements applicable to Critical Information Infrastructure operators. |

### 3.2 Internal Policy References

| Document | Document ID | Owner |
|---|---|---|
| IT Disaster Recovery Plan (ITDRP) | [ITDRP-DOC-ID] | Head of IT Operations |
| Business Continuity Plan (BCP) | [BCP-DOC-ID] | Chief Risk Officer |
| Information Security Policy | [ISP-DOC-ID] | Chief Information Security Officer |
| Data Classification and Handling Policy | [DCP-DOC-ID] | Data Protection Officer |
| Change Management Policy | [CMP-DOC-ID] | Head of IT Operations |
| Vendor and Third-Party Management Policy | [VTMP-DOC-ID] | Head of Procurement / Risk |

### 3.3 Industry Standards

- ISO/IEC 27001:2022 — Annex A, Control 8.13 (Information backup)
- NIST Special Publication 800-34 Rev.1 — Contingency Planning Guide
- ISACA COBIT 2019 — DSS04 (Manage Continuity)

---

## 4. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent interpretation.*

| Term / Abbreviation | Definition |
|---|---|
| **Backup** | A copy of data, system configurations, or application states stored separately from the primary system to enable recovery in the event of data loss, corruption, or system failure. |
| **Restoration Testing** | A controlled process of recovering data or systems from backup copies to verify that backups are complete, uncorrupted, and recoverable within required timeframes. |
| **Recovery Point Objective (RPO)** | The maximum acceptable amount of data loss, measured in time, that [Organization Name] can tolerate following a disruption. RPO determines the minimum frequency of backups required. |
| **Recovery Time Objective (RTO)** | The maximum acceptable duration of time within which a system or process must be restored to operational status following a disruption. |
| **Full Backup** | A complete copy of all designated data and system files at a specific point in time. |
| **Incremental Backup** | A backup that captures only data changed since the last backup of any type (full or incremental). |
| **Differential Backup** | A backup that captures all data changed since the last full backup. |
| **Off-site Backup** | A backup stored at a geographically separate location from the primary data centre to protect against site-level disasters. |
| **Air-gapped Backup** | A backup stored on media physically isolated from the network, providing protection against ransomware and cyber attacks. |
| **Hot Standby** | A fully operational duplicate system that can assume production workload with minimal or zero switchover time. |
| **Warm Standby** | A partially active system that requires some configuration or data synchronisation before assuming production workload. |
| **Cold Standby** | A system that is available but not running; requires full configuration and restoration before use. |
| **Tier 1 System** | Mission-critical systems whose unavailability would result in immediate material financial, operational, or regulatory impact. |
| **Tier 2 System** | Important systems that support significant business functions but whose short-term unavailability can be tolerated with manual workarounds. |
| **Tier 3 System** | Supporting systems with lower criticality where extended recovery windows are acceptable. |
| **BNM** | Bank Negara Malaysia — the central bank and primary financial regulatory authority of Malaysia. |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk management for financial institutions. |
| **ITDRP** | IT Disaster Recovery Plan |
| **BCP** | Business Continuity Plan |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles and responsibilities. |
| **CISO** | Chief Information Security Officer |
| **DPO** | Data Protection Officer |
| **SLA** | Service Level Agreement |
| **CAB** | Change Advisory Board |

---

## 5. Roles and Responsibilities

*Define who is responsible for each activity in the backup testing lifecycle using a RACI model.*

### 5.1 Role Definitions

| Role | Individual / Team | Responsibilities in Backup Testing Context |
|---|---|---|
| **Head of IT Operations** | [Name / Position] | Procedure owner; approves test schedules; escalation authority for failures; reports to senior management. |
| **Backup Administrator** | [Name / Team] | Executes backup and restoration jobs; maintains backup tooling; logs test results. |
| **System / Application Owner** | [Name / Team] | Validates restored data integrity from a business/application perspective; confirms successful restoration. |
| **IT Security / CISO Office** | [Name / Team] | Reviews security controls applied to backup media; reviews encryption and access control compliance. |
| **Internal Audit** | [Name / Team] | Independent review of test results and procedure adherence; regulatory evidence review. |
| **Risk Management** | [Name / Team] | Tracks backup testing as a risk control; monitors exceptions and escalates material risks. |
| **Vendor / Managed Service Provider** | [Vendor Name] | Executes restoration tasks for vendor-managed systems; provides test evidence; subject to SLA obligations. |
| **Change Advisory Board (CAB)** | [Members] | Approves change requests associated with restoration tests that may impact production or DR environments. |

### 5.2 RACI Matrix — Backup Restoration Testing Activities

*Use R = Responsible, A = Accountable, C = Consulted, I = Informed. Each activity must have exactly one Accountable (A) owner.*

| Activity | Head of IT Ops | Backup Admin | System / App Owner | IT Security | Internal Audit | Risk Mgmt | Vendor / MSP |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Define annual backup test schedule | A | R | C | C | I | C | I |
| Obtain CAB approval for test activities | A | R | C | I | I | I | I |
| Execute backup restoration job | I | R/A | I | I | I | I | R (if applicable) |
| Monitor restoration job progress | I | R | I | I | I | I | R (if applicable) |
| Validate restored data integrity (technical) | C | R/A | C | I | I | I | R (if applicable) |
| Validate restored data integrity (business) | I | C | R/A | I | I | I | I |
| Record test results in testing log | I | R | C | I | I | I | R (if applicable) |
| Escalate restoration failures | R | A | C | C | I | I | I |
| Prepare Backup Test Summary Report | C | R | C | C | I | I | I |
| Review and sign off test report | A | C | C | C | C | C | I |
| Submit evidence to Internal Audit | A | R | I | I | R | I | I |
| Track remediation of identified gaps | A | R | C | C | C | R | C |
| Annual procedure review and update | A | R | C | C | C | C | I |

---

## 6. RPO and RTO Definitions by Tier

*Define the recovery objectives applicable to each system tier. These must align with the ITDRP and BCP.*

### 6.1 System Tier Classification

*List each production system against its assigned tier. Tier classification must be approved by the relevant System Owner and Head of IT Operations, and reviewed at least annually or upon significant change.*

| System / Application | Business Function | Criticality Tier | Tier Rationale |
|---|---|---|---|
| [Core Banking System] | Core financial processing | Tier 1 | Revenue-critical; regulatory reporting dependency |
| [Internet Banking Platform] | Customer-facing transactions | Tier 1 | Customer impact; high transaction volume |
| [Payment Gateway] | Interbank and card payment processing | Tier 1 | Financial settlement; regulatory obligation |
| [HR System] | Human resource management | Tier 2 | Operational dependency; manual workaround possible |
| [Email / Collaboration Platform] | Internal communications | Tier 2 | Operational impact; short-term workaround feasible |
| [Document Management System] | Document storage and retrieval | Tier 3 | Non-critical; extended recovery acceptable |
| [Development / Test Environment] | Software development and testing | Tier 3 | Non-production; loss tolerable within defined window |

### 6.2 RPO and RTO Targets by Tier

*These targets are the approved baseline for [Organization Name]. Deviations must be formally approved and documented as risk acceptances.*

| Tier | Tier Description | RPO Target | RTO Target | Backup Frequency (Minimum) | Standby Type |
|---|---|---|---|---|---|
| **Tier 1** | Mission-critical systems | ≤ 1 hour | ≤ 4 hours | Continuous / every 1 hour | Hot or Warm Standby |
| **Tier 2** | Important business systems | ≤ 4 hours | ≤ 24 hours | Every 4–6 hours | Warm Standby |
| **Tier 3** | Supporting systems | ≤ 24 hours | ≤ 72 hours | Daily | Cold Standby |

### 6.3 RPO/RTO Validation in Testing

During each restoration test, the following RPO/RTO validation steps must be performed and recorded:

- **RPO Validation:** Confirm that the restored data reflects a recovery point no earlier than the RPO window for the applicable tier (e.g., Tier 1 data must not be more than 1 hour old at the point of recovery).
- **RTO Validation:** Record the actual time elapsed from test commencement to confirmed successful restoration. Compare against the RTO target. Any exceedance constitutes a test failure requiring escalation and remediation.

---

## 7. Backup Schedule and Retention Policy

*Document the approved backup schedule and retention periods for all in-scope systems. This section must be kept current and reviewed whenever backup infrastructure or system criticality changes.*

### 7.1 Backup Schedule

| System / Application | Tier | Full Backup Frequency | Incremental / Differential Frequency | Backup Window (Time) | Backup Tool / Method | Primary Storage Location | Secondary (Off-site) Location |
|---|---|---|---|---|---|---|---|
| [Core Banking System] | 1 | Daily | Every 1 hour (transaction log) | [00:00 – 04:00 MYT] | [Backup Tool Name] | [Primary DC Storage] | [DR Site / Cloud] |
| [Internet Banking Platform] | 1 | Daily | Every 2 hours | [00:00 – 04:00 MYT] | [Backup Tool Name] | [Primary DC Storage] | [DR Site / Cloud] |
| [Payment Gateway] | 1 | Daily | Every 1 hour (transaction log) | [01:00 – 03:00 MYT] | [Backup Tool Name] | [Primary DC Storage] | [DR Site / Cloud] |
| [HR System] | 2 | Weekly (Sunday) | Daily | [02:00 – 05:00 MYT] | [Backup Tool Name] | [Primary DC Storage] | [Off-site Tape / Cloud] |
| [Email Platform] | 2 | Weekly (Sunday) | Daily | [03:00 – 06:00 MYT] | [Backup Tool Name] | [Primary DC Storage] | [Off-site Tape / Cloud] |
| [Document Management System] | 3 | Weekly (Sunday) | N/A | [04:00 – 07:00 MYT] | [Backup Tool Name] | [Primary DC Storage] | [Off-site Tape] |

### 7.2 Backup Retention Policy

*Retention periods must comply with PDPA 2010 retention requirements and any sector-specific BNM data retention obligations.*

| Backup Type | Tier 1 Retention | Tier 2 Retention | Tier 3 Retention | Destruction Method |
|---|---|---|---|---|
| Daily Full Backup | 30 days | 14 days | 7 days | Secure deletion / degaussing |
| Weekly Full Backup | 12 months | 6 months | 3 months | Secure deletion / degaussing |
| Monthly Full Backup | 7 years | 3 years | 1 year | Secure deletion / degaussing |
| Transaction Log Backup | 90 days | 30 days | N/A | Secure deletion |
| Yearly Archive Backup | 7 years | 7 years | 5 years | Secure deletion / physical destruction |

> **Note:** Retention periods are the minimum required. Legal holds or regulatory directives may extend retention obligations. The DPO must be consulted before any backup data is destroyed.

### 7.3 Backup Media and Storage Controls

- All backup media (physical and logical) must be encrypted using [Encryption Standard, e.g., AES-256].
- Physical backup media (tapes, portable drives) must be stored in a locked, access-controlled environment with a recorded chain of custody.
- Off-site media must be transported using an approved and audited courier or logistics provider.
- Cloud backup storage must be located in a jurisdiction compliant with BNM data residency requirements (data must reside in Malaysia unless prior approval is obtained from BNM).
- Access to backup systems and storage must be restricted to authorized personnel only, with access logs reviewed monthly.

---

## 8. Backup Restoration Testing Process

*This section describes the end-to-end, step-by-step process for planning, executing, and closing a backup restoration test. Follow each step in sequence and document completion of each step in the Restoration Test Log.*

### 8.1 Testing Frequency Requirements

| Test Type | Tier 1 | Tier 2 | Tier 3 | Trigger for Ad-hoc Testing |
|---|---|---|---|---|
| **Full restoration test** | Quarterly | Semi-annually | Annually | Post-incident, post-migration, post-major change |
| **Partial / spot restoration test** | Monthly | Quarterly | Semi-annually | Post-patch, post-infrastructure change |
| **Integrity / checksum verification** | Daily (automated) | Weekly (automated) | Weekly (automated) | N/A — automated |
| **DR failover test (combined with restoration)** | Annually | Annually | As per ITDRP | Significant infrastructure change |

### 8.2 Pre-Test Planning and Preparation

**Step 1: Identify Test Scope**

- The Backup Administrator, in consultation with the Head of IT Operations and relevant System Owners, must identify the systems, data sets, and backup versions to be tested.
- The test scope must be documented in the **Restoration Test Plan** (refer to Appendix A).
- Scope must include at least one Tier 1 system in each scheduled test cycle.

**Step 2: Risk Assessment and Impact Analysis**

- Assess the potential impact of restoration testing on production and DR environments.
- Confirm that restoration testing will be conducted in an isolated test environment unless otherwise approved and documented.
- Where testing in or near production is unavoidable, a formal risk assessment must be completed and approved by the Head of IT Operations.

**Step 3: Raise a Change Request**

- A Change Request (CR) must be submitted to the CAB for all planned restoration tests that interact with or may affect production, DR, or network infrastructure.
- Emergency or ad-hoc tests following an incident may follow the expedited change process as defined in [Change Management Procedure Document ID].
- Obtain CAB approval prior to test execution.

**Step 4: Notify Stakeholders**

- Issue a test notification to all relevant stakeholders a minimum of **[X] business days** before the scheduled test.
- Notification must include: test date, scope, responsible personnel, expected duration, and any potential service impact.

**Step 5: Prepare the Test Environment**

- Provision or confirm availability of the isolated test environment.
- Ensure the test environment has sufficient storage, compute, and network capacity to receive and host restored data.
- Confirm that test environment access is restricted to authorized test personnel only.
- Verify that all backup tools, agents, and connectivity required for restoration are operational.

**Step 6: Identify Backup Sets for Testing**

- Select the specific backup sets to be restored. Selection must include:
  - The most recent full backup.
  - A selection of incremental or differential backups spanning the RPO window.
  - At least one backup from off-site storage (quarterly minimum for Tier 1 systems).
- Record backup set identifiers, creation timestamps, and storage locations in the test log.

---

### 8.3 Test Execution

**Step 7: Initiate Restoration Job**

- Record the **test start time** in the Restoration Test Log.
- Initiate the restoration job using the approved backup tool ([Backup Tool Name]) in accordance with the tool's documented restoration procedure.
- Restoration must be performed by the Backup Administrator or authorized delegate.
- Do not interrupt or modify the restoration job once initiated except in the event of a critical system or security event.

**Step 8: Monitor Restoration Progress**

- Monitor the restoration job in real time using the backup tool's console or monitoring dashboard.
- Log any warnings, errors, or unexpected delays in the test log as they occur.
- If the restoration job fails or produces errors, follow the failure management steps in Section 10.

**Step 9: Confirm Restoration Completion**

- Upon job completion, confirm that all designated files, database objects, system volumes, or VM images have been fully restored.
- Record the **restoration completion time** in the test log.
- Calculate and record the actual elapsed restoration time.

---

### 8.4 Post-Restoration Validation

**Step 10: Technical Data Integrity Validation**

The Backup Administrator and/or System Administrator must perform the following technical validation checks:

| Validation Check | Method | Expected Outcome | Pass / Fail |
|---|---|---|---|
| File/object count verification | Compare restored count against source manifest | Count matches within tolerance | [ ] |
| Checksum / hash verification | Compare hash of restored files against backup manifest | Hashes match | [ ] |
| Database consistency check | Run DBCC CHECKDB or equivalent | No corruption errors | [ ] |
| Application service startup | Attempt to start application services against restored data | Services start without error | [ ] |
| Sample data spot-check | Query known records in restored database | Records present and accurate | [ ] |
| Transaction log continuity (Tier 1) | Verify log sequence numbers | No gaps in log chain | [ ] |
| VM boot test (if applicable) | Boot restored VM in isolated environment | VM starts and OS loads correctly | [ ] |

**Step 11: Business / Application Owner Validation**

- The System / Application Owner must perform application-layer validation to confirm that restored data is logically consistent and functionally usable.
- Validation activities must be documented and signed off by the System / Application Owner in the test log.

Example validation activities:
- Log in to the restored application and verify key transaction records.
- Run a sample report and compare output to expected baseline data.
- Confirm data completeness for a defined sample period.

**Step 12: RPO and RTO Measurement**

- **RPO Measurement:** Identify the timestamp of the most recent data included in the restoration. Calculate the gap between this timestamp and the declared failure point. Confirm that this gap is within the RPO target.
- **RTO Measurement:** Calculate the total elapsed time from test start (Step 7) to confirmed successful completion of business validation (Step 11). Confirm that elapsed time is within the RTO target.
- Record both measurements in the test log and flag any exceedances.

---

### 8.5 Test Closure

**Step 13: Clean Up Test Environment**

- Upon successful validation, securely wipe or deprovision all restored data from the test environment.
- Confirm that no restored data (particularly personal or confidential data) remains accessible in the test environment beyond the test window.
- Document clean-up completion in the test log.

**Step 14: Prepare Restoration Test Report**

- The Backup Administrator must prepare a **Backup Restoration Test Report** (refer to Appendix B) within **[X] business days** of test completion.
- The report must include all information required under Section 9.

**Step 15: Review and Sign-Off**

- The Head of IT Operations must review and formally approve the Restoration Test Report.
- Where test failures, exceptions, or RPO/RTO exceedances occurred, the report must include a documented remediation plan prior to sign-off.
- Approved reports must be filed in [Document Management System / Repository Name] and made available to Internal Audit.

---

## 9. Restoration Testing Results and Reporting

*This section defines the required structure and content of restoration test records and reports, ensuring traceability and audit-readiness.*

### 9.1 Restoration Test Log

*A Restoration Test Log must be maintained for every test execution. The log is the primary contemporaneous record of test activities and must be completed in real time during the test.*

| Field | Value |
|---|---|
| **Test Reference Number** | [TEST-YYYY-NNN] |
| **Test Date** | [DD/MM/YYYY] |
| **System / Application Tested** | [System Name] |
| **Criticality Tier** | [Tier 1 / 2 / 3] |
| **Test Type** | [Full Restoration / Partial Restoration / Spot Check] |
| **Backup Set Identifier** | [Backup Job ID / Label] |
| **Backup Creation Timestamp** | [DD/MM/YYYY HH:MM MYT] |
| **Backup Storage Location Tested** | [Primary DC / Off-site / Cloud] |
| **Test Environment** | [Environment Name / IP Range] |
| **Test Lead (Backup Admin)** | [Name] |
| **Test Start Time** | [HH:MM MYT] |
| **Restoration Completion Time** | [HH:MM MYT] |
| **Actual Restoration Duration** | [X hours Y minutes] |
| **RTO Target** | [X hours] |
| **RTO Pass / Fail** | [Pass / Fail] |
| **RPO Measurement (data age)** | [X hours Y minutes] |
| **RPO Target** | [X hours] |
| **RPO Pass / Fail** | [Pass / Fail] |
| **Overall Test Result** | [Pass / Fail / Conditional Pass] |
| **Business Owner Validation Completed** | [Yes / No] |
| **Business Owner Name** | [Name] |
| **Exceptions / Issues Encountered** | [Description or "None"] |
| **Remediation Required** | [Yes / No] |
| **Test Lead Signature** | [Signature] |
| **Head of IT Operations Sign-off** | [Signature] |

### 9.2 Validation Checklist Summary

*Record the outcome of each validation check performed during Step 10.*

| # | Validation Check | Result | Notes |
|---|---|---|---|
| 1 | File / object count verification | [ Pass / Fail / N/A ] | |
| 2 | Checksum / hash verification | [ Pass / Fail / N/A ] | |
| 3 | Database consistency check | [ Pass / Fail / N/A ] | |
| 4 | Application service startup | [ Pass / Fail / N/A ] | |
| 5 | Sample data spot-check | [ Pass / Fail / N/A ] | |
| 6 | Transaction log continuity | [ Pass / Fail / N/A ] | |
| 7 | VM boot test | [ Pass / Fail / N/A ] | |
| 8 | Business owner functional validation | [ Pass / Fail / N/A ] | |

### 9.3 Consolidated Annual Backup Testing Register

*The Head of IT Operations must maintain a consolidated Backup Testing Register summarising all test activities within the financial year. This register must be reviewed by Internal Audit annually and presented to the IT Risk Committee.*

| Test Ref | Date | System | Tier | Test Type | Backup Source | RTO Result | RPO Result | Overall Result | Report Reference |
|---|---|---|---|---|---|---|---|---|---|
| [TEST-YYYY-001] | [Date] | [System] | [1/2/3] | [Type] | [Primary/Off-site/Cloud] | [Pass/Fail] | [Pass/Fail] | [Pass/Fail] | [Report ID] |
| [TEST-YYYY-002] | | | | | | | | | |
| [TEST-YYYY-003] | | | | | | | | | |

### 9.4 Reporting and Escalation Requirements

| Report | Frequency | Prepared By | Reviewed By | Submitted To |
|---|---|---|---|---|
| Backup Restoration Test Report (per test) | Per test execution | Backup Administrator | Head of IT Operations | Internal Audit file |
| Backup Testing Summary Report | Quarterly | Head of IT Operations | CIO / CISO | IT Risk Committee |
| Annual Backup Testing Compliance Summary | Annually | Head of IT Operations | Internal Audit | Board Risk Committee / BNM (if required) |
| Exception / Failure Notification | Immediately upon failure | Backup Administrator | Head of IT Operations | CIO, Risk Management, Internal Audit |

---

## 10. Exception and Failure Management

*This section defines how to handle backup restoration test failures, exceptions, and deviations from this procedure.*

### 10.1 Failure Classification

| Failure Class | Description | Examples |
|---|---|---|
| **Critical Failure** | Backup cannot be restored at all; data is unrecoverable or corrupt. | Backup file missing, backup encrypted with lost key, hardware failure. |
| **RTO Exceedance** | Backup restores successfully but exceeds the RTO target. | Restoration took 6 hours against a 4-hour RTO. |
| **RPO Exceedance** | Restored data is older than the RPO target. | Most recent backup is 3 hours old against a 1-hour RPO. |
| **Partial Failure** | Restoration is incomplete; some data objects are missing or corrupt. | Partial file set recovered; some database tables missing. |
| **Test Environment Failure** | Test cannot proceed due to test environment issues (not backup-related). | Test server unavailable, network connectivity issue to DR site. |
| **Process Deviation** | Test was not conducted in accordance with this procedure. | CAB approval not obtained; test log incomplete. |

### 10.2 Immediate Escalation Procedure

Upon identification of a Critical Failure or RPO/RTO exceedance during testing:

1. **Backup Administrator** must immediately notify the **Head of IT Operations** by telephone and follow up in writing within 1 hour.
2. **Head of IT Operations** must notify the **CIO** and **Risk Management** within 2 hours.
3. If the failure relates to a production system and poses an immediate operational risk, the **ITDRP escalation procedure** must be activated.
4. A formal **Exception Report** must be raised and logged within [X] business days.

### 10.3 Root Cause Analysis and Remediation

| Step | Action | Responsible | Timeframe |
|---|---|---|---|
| 1 | Document failure details in test log | Backup Administrator | Immediately |
| 2 | Conduct root cause analysis (RCA) | Backup Administrator + System Owner | Within [X] business days |
| 3 | Identify remediation actions | Backup Administrator + Head of IT Operations | Within [X] business days |
| 4 | Raise remediation tasks in issue tracking system | Backup Administrator | Within [X] business days |
| 5 | Implement remediation | Responsible team | Per agreed remediation timeline |
| 6 | Conduct re-test to confirm resolution | Backup Administrator | Within [X] weeks of remediation |
| 7 | Update test register with re-test results | Backup Administrator | Upon re-test completion |
| 8 | Report remediation closure to Head of IT Ops | Backup Administrator | Upon re-test pass |

### 10.4 Repeat Failures

Where the same system experiences two or more consecutive restoration test failures, the Head of IT Operations must:

- Escalate to the CIO and Board Risk Committee.
- Assess whether the system's tier classification and risk profile require formal review.
- Consider engaging a specialist vendor to review backup architecture and configuration.
- Document the matter as a risk item in the IT Risk Register pending full remediation.

### 10.5 Procedure Exceptions

Any deviation from this procedure must be:

- Documented in a formal **Exception Request** and approved by the Head of IT Operations.
- Recorded in the exception register maintained by Risk Management.
- Subject to a compensating control where the deviation introduces additional risk.
- Reviewed at the next annual procedure review cycle.

---

## 11. Review and Approval

### 11.1 Review Triggers

This procedure must be reviewed under the following circumstances:

- **Annually**, on or before [Annual Review Date].
- Upon any **significant change** to backup infrastructure, tools, or architecture.
- Following a **critical backup failure** or major incident involving data loss or recovery failure.
- Upon issuance of a **new or revised BNM regulatory requirement** that affects backup or recovery obligations.
- Upon a material **change in system tier classification** affecting RPO/RTO obligations.

### 11.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial version. |
| 1.1 | | | |
| 2.0 | | | |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** — Backup Administrator | [Name] | | [DD/MM/YYYY] |
| **Reviewed By** — Head of IT Operations | [Name] | | [DD/MM/YYYY] |
| **Reviewed By** — IT Security / CISO | [Name] | | [DD/MM/YYYY] |
| **Reviewed By** — Internal Audit | [Name] | | [DD/MM/YYYY] |
| **Approved By** — CIO / Head of Technology | [Name] | | [DD/MM/YYYY] |
| **Noted By** — Chief Risk Officer | [Name] | | [DD/MM/YYYY] |

---

## 12. References

*The following regulatory instruments, policy documents, and standards are formally referenced by this procedure.*

### 12.1 Regulatory References

| # | Reference | Issuing Authority | Clause / Section | Date |
|---|---|---|---|---|
| 1 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | **10.45** (Backup and recovery testing) | [Issue Date] |
| 2 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | 10.43–10.44 (Backup strategy and storage) | [Issue Date] |
| 3 | Business Continuity Management | Bank Negara Malaysia | [Relevant Clauses] | [Issue Date] |
| 4 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 (Security principle) | 2010 |
| 5 | National Cyber Security Policy | NACSA / MOSTI | [Relevant Controls] | [Issue Date] |

### 12.2 Internal Document References

| # | Document Title | Document ID | Owner |
|---|---|---|---|
| 1 | IT Disaster Recovery Plan (ITDRP) | [ITDRP-DOC-ID] | Head of IT Operations |
| 2 | Business Continuity Plan (BCP) | [BCP-DOC-ID] | Chief Risk Officer |
| 3 | Information Security Policy | [ISP-DOC-ID] | CISO |
| 4 | Data Classification and Handling Policy | [DCP-DOC-ID] | DPO |
| 5 | Change Management Policy and Procedure | [CMP-DOC-ID] | Head of IT Operations |
| 6 | Vendor and Third-Party Management Policy | [VTMP-DOC-ID] | Head of Procurement |
| 7 | IT Risk Management Framework | [ITMRF-DOC-ID] | CIO / Risk Management |

### 12.3 Industry Standards

| # | Standard | Issuing Body | Relevant Section |
|---|---|---|---|
| 1 | ISO/IEC 27001:2022 | ISO/IEC | Annex A, Control 8.13 — Information backup |
| 2 | NIST SP 800-34 Rev.1 | NIST | Contingency Planning Guide for Federal Information Systems |
| 3 | COBIT 2019 | ISACA | DSS04 — Manage Continuity |

---

## 13. Appendices

### Appendix A — Restoration Test Plan Template

*Complete this plan prior to each scheduled restoration test and obtain required approvals before test execution.*

---

**BACKUP RESTORATION TEST PLAN**

| Field | Value |
|---|---|
| **Test Plan Reference** | [PLAN-YYYY-NNN] |
| **Prepared By** | [Name] |
| **Preparation Date** | [DD/MM/YYYY] |
| **Planned Test Date** | [DD/MM/YYYY] |
| **Planned Test Window** | [HH:MM – HH:MM MYT] |
| **Change Request Reference** | [CR-YYYY-NNN] |
| **CAB Approval Date** | [DD/MM/YYYY] |

**A1. Test Scope**

| System / Application | Tier | Backup Set(s) to Test | Backup Source | Test Environment |
|---|---|---|---|---|
| [System Name] | [1/2/3] | [Backup ID / Date] | [Primary/Off-site/Cloud] | [Environment Name] |

**A2. Test Objectives**

- [ ] Validate full restoration of [System Name] from [backup type] backup.
- [ ] Confirm RPO compliance: restored data must not be older than [X hours].
- [ ] Confirm RTO compliance: restoration must complete within [X hours].
- [ ] Validate data integrity via checksum verification and application validation.
- [ ] Confirm off-site backup recoverability (if applicable).

**A3. Test Team**

| Role | Name | Contact |
|---|---|---|
| Test Lead (Backup Admin) | [Name] | [Email / Phone] |
| System / Application Owner | [Name] | [Email / Phone] |
| IT Security Representative | [Name] | [Email / Phone] |
| Vendor Contact (if applicable) | [Name] | [Email / Phone] |

**A4. Pre-Test Checklist**

| # | Pre-Test Item | Completed By | Date |
|---|---|---|---|
| 1 | Test environment provisioned and confirmed available | | |
| 2 | Backup sets identified and verified accessible | | |
| 3 | Change Request raised and CAB approval obtained | | |
| 4 | Stakeholder notification issued | | |
| 5 | Backup tool connectivity and credentials confirmed | | |
| 6 | Test log prepared and accessible | | |

**A5. Rollback Plan**

*Describe the steps to be taken if the test environment encounters an issue that requires rollback or emergency shutdown.*

[Describe rollback steps — e.g., isolate test environment, terminate restoration job, restore test environment to baseline snapshot, notify stakeholders.]

**A6. Approvals**

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of IT Operations | [Name] | | |
| System / Application Owner | [Name] | | |

---

### Appendix B — Backup Restoration Test Report Template

*Complete this report within [X] business days of test completion.*

---

**BACKUP RESTORATION TEST REPORT**

| Field | Value |
|---|---|
| **Report Reference** | [RPT-YYYY-NNN] |
| **Test Plan Reference** | [PLAN-YYYY-NNN] |
| **Prepared By** | [Name] |
| **Report Date** | [DD/MM/YYYY] |
| **Test Date** | [DD/MM/YYYY] |

**B1. Executive Summary**

*Provide a 3–5 sentence summary of the test, overall result, any failures or exceptions, and remediation actions underway.*

[Executive summary text.]

**B2. Test Results Summary**

| System Tested | Tier | Overall Result | RTO Result | RPO Result | Issues Identified |
|---|---|---|---|---|---|
| [System Name] | [1/2/3] | [Pass/Fail] | [Pass/Fail — Actual: X hrs] | [Pass/Fail — Actual: X hrs] | [None / See Section B4] |

**B3. Detailed Validation Results**

*Attach or insert completed validation checklist from Section 9.2.*

[Attach or reproduce completed validation checklist.]

**B4. Exceptions and Issues**

| # | Issue Description | Severity | Root Cause (if known) | Remediation Action | Owner | Due Date |
|---|---|---|---|---|---|---|
| 1 | | [Critical/High/Medium/Low] | | | | |
| 2 | | | | | | |

**B5. Recommendations**

*List any recommendations arising from this test to improve backup configurations, procedures, or infrastructure.*

1. [Recommendation 1]
2. [Recommendation 2]

**B6. Approvals**

| Role | Name | Signature | Date |
|---|---|---|---|
| Test Lead (Backup Administrator) | [Name] | | |
| Head of IT Operations | [Name] | | |
| Internal Audit (for file) | [Name] | | |

---

### Appendix C — Backup Testing Compliance Calendar

*Use this calendar to plan and track all scheduled backup restoration tests for the financial year. Update monthly.*

| Month | Scheduled Tests | Systems | Tier | Test Type | Planned Date | Actual Date | Status |
|---|---|---|---|---|---|---|---|
| January | [Test 1] | [System] | [1] | Full Restoration | [Date] | | [ ] Completed |
| February | [Test 2] | [System] | [2] | Partial Restoration | [Date] | | [ ] Completed |
| March | [Test 3] | [System] | [1] | Full Restoration | [Date] | | [ ] Completed |
| April | [Test 4] | [System] | [3] | Spot Check | [Date] | | [ ] Completed |
| May | [Test 5] | [System] | [2] | Full Restoration | [Date] | | [ ] Completed |
| June | [Test 6] | [System] | [1] | Full Restoration + Off-site | [Date] | | [ ] Completed |
| July | [Test 7] | [System] | [1] | Partial Restoration | [Date] | | [ ] Completed |
| August | [Test 8] | [System] | [2] | Full Restoration | [Date] | | [ ] Completed |
| September | [Test 9] | [System] | [1] | Full Restoration | [Date] | | [ ] Completed |
| October | [Test 10] | [System] | [3] | Full Restoration | [Date] | | [ ] Completed |
| November | [Test 11] | [System] | [2] | Spot Check | [Date] | | [ ] Completed |
| December | [Test 12] | [System] | [1] | Full DR Failover + Restoration | [Date] | | [ ] Completed |

---

### Appendix D — Glossary of Backup Types and Technologies

*This appendix provides additional context for personnel unfamiliar with backup technologies referenced in this procedure.*

| Term | Description |
|---|---|
| **Snapshot** | A point-in-time copy of a storage volume or virtual machine, typically taken at the hypervisor or storage array level. Snapshots are fast but generally not suitable as sole backup mechanism for long-term recovery. |
| **Replication** | Continuous or near-continuous copying of data to a secondary system or site. Replication enables low RPO but does not protect against logical corruption unless combined with a lag. |
| **Tape Backup** | Physical magnetic tape used for long-term archival and off-site storage. Tapes must be stored securely and transported under chain-of-custody controls. |
| **Object Storage Backup** | Backup to cloud or on-premises object storage (e.g., S3-compatible). Commonly used for scalable, low-cost long-term retention. |
| **Immutable Backup** | Backup stored with write-once / object-lock properties that prevent modification or deletion for a defined retention period. Provides protection against ransomware. |
| **Synthetic Full Backup** | A full backup constructed from the most recent full and subsequent incremental backups, eliminating the need to re-run a full backup job each time. |
| **Deduplication** | A technique that eliminates redundant data blocks to reduce backup storage consumption. Deduplication must be accounted for when estimating restoration performance. |

---

*End of Document*

---

| Field | Value |
|---|---|
| **Document Title** | Backup Testing Procedure |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Organization** | [Organization Name] |
| **Approved By** | [Approved By] |
| **Approval Date** | [Effective Date] |