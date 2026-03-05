# Test Failure Remediation Records

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
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Reference** | Clause 10.45 |

---

> **Handling Instructions:** This document is classified **Confidential**. It must not be shared outside the organization without the express written approval of the Head of IT Operations or a delegated authority. Physical copies must be stored in locked cabinets. Electronic copies must be access-controlled in accordance with [Organization Name]'s Information Security Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives](#2-objectives)
3. [Remediation Actions and Milestones](#3-remediation-actions-and-milestones)
4. [Accountable Owners](#4-accountable-owners)
5. [RPO and RTO Definitions by Tier](#5-rpo-and-rto-definitions-by-tier)
6. [Backup Schedule and Retention Periods](#6-backup-schedule-and-retention-periods)
7. [Restoration Testing Results](#7-restoration-testing-results)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Escalation and Notification Procedures](#9-escalation-and-notification-procedures)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section states the regulatory basis and operational intent of the document. Authors should describe why this record exists and how it supports the institution's obligations under BNM RMiT.*

This document establishes the formal record of remediation actions undertaken by [Organization Name] in response to failures identified during backup restoration testing activities. It is produced in compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.45**, which requires financial institutions to maintain documented evidence that backup restoration failures are identified, tracked, remediated, and verified within defined timeframes.

Remediation records serve as primary audit evidence that [Organization Name] operates a continuous improvement cycle for its backup and recovery capabilities, ensuring that critical systems and data can be restored within approved Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO) following a disruption.

### 1.2 Scope

*Define the systems, environments, data types, and organizational units covered by this record. Explicitly state any exclusions and the rationale.*

This document applies to all backup and restoration activities within the following scope:

**In Scope:**

- All Tier 1, Tier 2, and Tier 3 systems as classified in the [Organization Name] IT Asset Classification Register \[[Document ID Ref]\]
- On-premises production data centres, including [Data Centre Name / Location]
- Cloud-hosted workloads and data stores managed under [Cloud Service Provider Name] agreements
- Disaster Recovery (DR) site infrastructure located at [DR Site Location]
- Backup media and backup management systems operated by or on behalf of [Organization Name]
- Third-party managed services where [Organization Name] retains data ownership obligations

**Out of Scope:**

- Development and User Acceptance Testing (UAT) environments not connected to production data pipelines
- Archived records beyond the defined retention period (refer to Section 6)
- [Any other exclusions — describe rationale]

### 1.3 Regulatory Context

*Summarize the regulatory obligations that this document directly addresses. Cross-reference clauses to aid auditor navigation.*

[Organization Name] is a licensed financial institution regulated by Bank Negara Malaysia and is subject to the **RMiT Policy Document** issued pursuant to Section 47 of the Financial Services Act 2013 (FSA) / Islamic Financial Services Act 2013 (IFSA). The following obligations directly necessitate the maintenance of this record:

| Regulatory Clause | Obligation Summary |
|---|---|
| RMiT Clause 10.45 | Requires financial institutions to periodically test the restoration of backup copies and document the results, including failures and remediation steps taken. |
| RMiT Clause 10.42 | Mandates that backup copies are taken at a frequency commensurate with the criticality of the system and data. |
| RMiT Clause 10.43 | Requires backup copies to be stored in a secure, geographically separate location. |
| RMiT Clause 10.44 | Requires that backup and restoration procedures are documented and maintained. |
| Personal Data Protection Act 2010 (PDPA) | Data integrity obligations relevant to personally identifiable information (PII) held in backed-up systems. |
| [Other applicable BNM circular or policy] | [Summary of obligation] |

---

## 2. Objectives

*State the specific, measurable objectives that this remediation record is intended to achieve. Authors should align these objectives to the institution's risk appetite and RMiT obligations.*

The objectives of maintaining Test Failure Remediation Records are:

### 2.1 Primary Objectives

- **Accountability:** Ensure that every identified backup restoration failure is assigned a named accountable owner responsible for driving remediation to closure.
- **Traceability:** Provide a complete, auditable trail from the initial failure detection event through root cause analysis, remediation execution, verification testing, and closure.
- **Regulatory Compliance:** Demonstrate to Bank Negara Malaysia supervisory teams and internal/external auditors that [Organization Name] operates a systematic process for addressing backup and recovery deficiencies in accordance with RMiT Clause 10.45.
- **Risk Reduction:** Reduce the probability that an unresolved backup failure will result in unrecoverable data loss or an inability to meet RPO/RTO commitments during an actual incident or declared disaster.
- **Continuous Improvement:** Identify recurring failure patterns that indicate systemic weaknesses in the backup architecture, tooling, processes, or staffing, and feed these into the IT risk register and technology roadmap.

### 2.2 Secondary Objectives

- Maintain an up-to-date record of all open and closed remediation items to support quarterly management reporting.
- Provide input to the Business Continuity Management (BCM) programme and annual DR exercise planning.
- Support vendor performance management where backup failures are attributable to third-party managed services.

### 2.3 Success Criteria

*Define measurable thresholds that indicate this process is performing effectively.*

| Metric | Target | Measurement Frequency |
|---|---|---|
| Tier 1 critical failure remediation closure rate | 100% within [X] business days of detection | Per event |
| Tier 2 failure remediation closure rate | 100% within [X] business days of detection | Per event |
| Tier 3 failure remediation closure rate | 100% within [X] business days of detection | Per event |
| Repeat failures for same root cause | 0 within rolling 12-month period | Quarterly |
| Overdue open remediation items (past target date) | 0 at time of quarterly review | Quarterly |
| Remediation records submitted to CISO/Risk within SLA | ≥ 95% of events | Quarterly |

---

## 3. Remediation Actions and Milestones

*This section documents each discrete remediation action arising from a test failure event. A separate entry or sub-section should be created for each distinct failure incident. Authors must capture all actions, owners, and target/actual completion dates.*

### 3.1 Failure Event Register

*Maintain a chronological register of all backup restoration test failures. Each row links to a detailed remediation plan in Section 3.2.*

| Ref No. | System / Application | Tier | Date of Test | Date Failure Detected | Failure Category | Severity | Remediation Status | Closure Date |
|---|---|---|---|---|---|---|---|---|
| REM-[YYYY]-[NNN] | [System Name] | [1/2/3] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Category — see 3.3] | [Critical/High/Medium/Low] | [Open/In Progress/Closed] | [DD/MM/YYYY or Pending] |
| REM-[YYYY]-[NNN] | [System Name] | [1/2/3] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Category] | [Severity] | [Status] | [Date or Pending] |
| REM-[YYYY]-[NNN] | [System Name] | [1/2/3] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Category] | [Severity] | [Status] | [Date or Pending] |

### 3.2 Detailed Remediation Plan

*For each entry in the Failure Event Register, complete a detailed remediation plan block below. Duplicate this block as required.*

---

**Remediation Reference:** REM-[YYYY]-[NNN]

**System / Application:** [System Name]

**Tier:** [1 / 2 / 3]

**Test Date:** [DD/MM/YYYY]

**Failure Detection Date:** [DD/MM/YYYY]

**Failure Description:**

> [Provide a clear, factual description of what failed during the restoration test. Include the specific backup set or snapshot targeted, the restoration environment used, and the observed failure behaviour. Avoid ambiguous language.]

**Root Cause Analysis (RCA) Summary:**

> [Summarize the root cause as determined through RCA. Reference the full RCA document if produced separately: \[RCA Document Ref\]. Categories: Technical — Backup Agent Failure; Technical — Storage Media Defect; Technical — Network Timeout; Process — Procedure Gap; Process — Untrained Personnel; Vendor — Third-Party Service Failure; Configuration — Incorrect Backup Parameters; Other — \[Describe\].]

**Impact Assessment:**

| Impact Dimension | Assessment |
|---|---|
| Data loss exposure (if failure occurred in production) | [e.g., Up to [X] hours of data potentially unrecoverable] |
| Estimated RTO breach risk | [e.g., Yes — estimated recovery time exceeded approved RTO by [X] hours] |
| Affected business processes | [List affected business processes or functions] |
| Affected regulatory data categories | [e.g., Customer PII, Financial Transaction Records, AML Records] |
| Likelihood of recurrence without remediation | [High / Medium / Low — with rationale] |

**Remediation Actions and Milestones:**

| # | Action Description | Accountable Owner | Target Completion Date | Actual Completion Date | Status | Evidence Ref |
|---|---|---|---|---|---|---|
| 1 | [Describe specific remediation action, e.g., "Replace defective backup agent on [Server Name] with version [X.X]"] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY or Pending] | [Not Started / In Progress / Complete] | [Evidence document or ticket ref] |
| 2 | [Describe action] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY or Pending] | [Status] | [Evidence ref] |
| 3 | [Update backup procedures documentation to reflect corrected process] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY or Pending] | [Status] | [Evidence ref] |
| 4 | [Conduct re-training for [Team/Role] on corrected backup restoration procedure] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY or Pending] | [Status] | [Evidence ref] |
| 5 | [Execute verification re-test to confirm remediation is effective] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY or Pending] | [Status] | [Evidence ref] |

**Verification Re-Test Result:**

| Field | Details |
|---|---|
| Re-test Date | [DD/MM/YYYY] |
| Re-test Conducted By | [Name, Role] |
| Re-test Environment | [Production / DR Site / Isolated Test Environment] |
| Re-test Outcome | [Pass / Fail / Partial Pass — describe] |
| RPO Achieved | [Yes / No — actual RPO: X hours vs. approved: Y hours] |
| RTO Achieved | [Yes / No — actual RTO: X hours vs. approved: Y hours] |
| Residual Risk | [None / [Describe any residual risk and risk acceptance by whom]] |

**Closure Approval:**

| Field | Details |
|---|---|
| Closed By | [Name, Role] |
| Closure Date | [DD/MM/YYYY] |
| CISO Notified | [Yes / No — Date: DD/MM/YYYY] |
| Risk Register Updated | [Yes / No — Risk Item Ref: \[Ref\]] |
| Lessons Learned Captured | [Yes / No — Ref: \[Document Ref\]] |

---

### 3.3 Failure Category Taxonomy

*Standardized categories to ensure consistent classification of backup restoration failures across all teams and systems.*

| Category Code | Category Name | Description |
|---|---|---|
| BC-AGENT | Backup Agent Failure | Failure of the backup client agent installed on the source system |
| BC-MEDIA | Storage Media Defect | Defective tape, disk, or object storage medium |
| BC-NETWORK | Network / Connectivity | Timeout or connectivity failure during restoration transfer |
| BC-PROCESS | Process / Procedure Gap | Missing, incorrect, or outdated restoration procedure |
| BC-PERSONNEL | Personnel / Skills | Insufficient training or experience of operator |
| BC-VENDOR | Third-Party / Vendor | Failure attributable to a managed service provider or software vendor |
| BC-CONFIG | Configuration Error | Misconfigured backup parameters, schedules, or targets |
| BC-CAPACITY | Capacity / Storage | Insufficient storage capacity at restoration target |
| BC-INTEGRITY | Data Integrity | Backup data is corrupted, truncated, or otherwise unrestorable |
| BC-OTHER | Other | Failures not covered by the above categories — describe fully |

---

## 4. Accountable Owners

*This section formally assigns accountability for remediation activities. Accountability must be at the named-individual level, not the team level, to ensure clear ownership.*

### 4.1 Ownership Assignment Matrix

*Authors must ensure that every open remediation item in Section 3.2 maps to a named individual in this matrix. Where personnel change, this matrix must be updated and the change recorded in the version history.*

| Role | Name | Department | Contact | Accountable For |
|---|---|---|---|---|
| Head of IT Operations | [Name] | IT Operations | [Email / Phone] | Overall accountability for all open remediation items; escalation authority for Tier 1 and Tier 2 failures |
| IT Operations Manager | [Name] | IT Operations | [Email / Phone] | Day-to-day management of remediation execution; milestone tracking |
| Backup & Recovery Lead | [Name] | IT Operations — Infrastructure | [Email / Phone] | Technical remediation of backup infrastructure failures; verification re-testing |
| Systems Administrator — [Platform] | [Name] | IT Operations | [Email / Phone] | Remediation of agent-level and OS-level failures on [Platform] systems |
| Cloud Infrastructure Engineer | [Name] | IT Operations / Cloud | [Email / Phone] | Remediation of cloud-hosted backup and restoration failures |
| IT Risk Manager | [Name] | IT Risk & Compliance | [Email / Phone] | Risk register updates; escalation of unresolved high/critical items to the CISO |
| Chief Information Security Officer (CISO) | [Name] | Information Security | [Email / Phone] | Escalation recipient for Tier 1 critical failures; approves risk acceptance for residual risks |
| Vendor Relationship Manager — [Vendor Name] | [Name] | Procurement / IT | [Email / Phone] | Management of vendor remediation commitments where failures are attributable to [Vendor Name] |
| [Additional Role as required] | [Name] | [Department] | [Contact] | [Accountability] |

### 4.2 Escalation Thresholds

*Define the conditions under which remediation accountability escalates to a higher level.*

| Condition | Escalation Level | Timeframe |
|---|---|---|
| Tier 1 system restoration failure | Head of IT Operations + CISO notified | Within [X] hours of detection |
| Tier 1 remediation item overdue by > [X] business days | Escalate to CIO and CISO | Immediately upon breach |
| Tier 2 remediation item overdue by > [X] business days | Escalate to Head of IT Operations | Immediately upon breach |
| Same root cause failure recurring within 12 months | Full RCA mandatory; IT Risk Manager to review risk register | Within [X] business days of recurrence |
| Any failure where RTO or RPO was breached | Head of IT Operations + BCM Team + IT Risk Manager | Within [X] hours of detection |
| Vendor-attributed failure with no accepted remediation plan from vendor | Escalate to Vendor Relationship Manager + Procurement | Within [X] business days |

---

## 5. RPO and RTO Definitions by Tier

*This section defines the approved Recovery Point Objectives and Recovery Time Objectives for each system tier. These are the benchmark targets against which restoration test outcomes are measured. Any test that fails to meet these targets must generate a remediation record.*

### 5.1 System Tier Classification

*Authors should verify that the tier classifications below are consistent with the current IT Asset Classification Register. Any discrepancy must be raised with the IT Risk Manager.*

| Tier | Classification | Criteria | Examples |
|---|---|---|---|
| **Tier 1** | Mission-Critical | Systems whose failure for more than [X] hours would result in regulatory breach, inability to serve customers, or material financial loss | Core banking system, payment processing, internet banking platform, regulatory reporting systems |
| **Tier 2** | Business-Critical | Systems whose failure would significantly impair business operations but where manual workarounds are available for limited periods | [System Examples — e.g., CRM, HR systems, internal email] |
| **Tier 3** | Business-Important | Systems whose failure causes operational inconvenience but does not directly impair customer-facing services or regulatory obligations | [System Examples — e.g., internal collaboration tools, non-critical reporting] |

### 5.2 Approved RPO and RTO by Tier

*These values are approved by the [Board Risk Committee / EXCO / relevant governance body] and must not be modified in this document without formal approval. Reference the source approval document.*

| Tier | System Classification | Approved RPO | Approved RTO | Backup Frequency Requirement | Approval Authority | Approval Document Ref |
|---|---|---|---|---|---|---|
| **Tier 1** | Mission-Critical | [X] hours / [Y] minutes | [X] hours | [e.g., Continuous / Every [X] hours] | [Board Risk Committee / EXCO] | [Document Ref] |
| **Tier 2** | Business-Critical | [X] hours | [X] hours | [e.g., Every [X] hours / Daily] | [CISO / CIO] | [Document Ref] |
| **Tier 3** | Business-Important | [X] hours | [X] hours | [e.g., Daily / Weekly] | [Head of IT Operations] | [Document Ref] |

### 5.3 RPO/RTO Measurement Methodology

*Describe how RPO and RTO are measured during restoration tests to ensure consistency.*

**Recovery Point Objective (RPO) Measurement:**

RPO is measured as the time delta between the timestamp of the most recent successfully restored data point and the declared or simulated failure time. A test passes the RPO requirement when this delta is equal to or less than the approved RPO for the relevant tier.

> *Formula: RPO\_Actual = Failure\_Time − Timestamp\_of\_Last\_Good\_Restored\_Data\_Point*

**Recovery Time Objective (RTO) Measurement:**

RTO is measured from the point at which a restoration is formally initiated (as recorded in the test log) to the point at which the system is declared operational and has passed defined smoke tests or functional verification checks.

> *Formula: RTO\_Actual = System\_Operational\_Time − Restoration\_Initiation\_Time*

**Partial Recovery Assessment:**

Where a system is partially restored (i.e., core functions restored but ancillary functions remain unavailable), the RTO clock is considered met only when the minimum required functions as defined in the System Recovery Requirements document \[[Document Ref]\] are operational.

### 5.4 RPO/RTO Breach Classification

| Breach Type | Definition | Required Action |
|---|---|---|
| **Minor Breach** | Actual RPO or RTO exceeds approved target by ≤ 20% | Document in remediation record; resolve within standard SLA |
| **Significant Breach** | Actual RPO or RTO exceeds approved target by > 20% but ≤ 50% | Document; escalate to Head of IT Operations; RCA mandatory |
| **Critical Breach** | Actual RPO or RTO exceeds approved target by > 50% | Immediate escalation to CISO and CIO; full RCA; IT Risk Register update; notify BCM team |
| **Total Failure** | Restoration could not be completed at all | Immediate escalation to CISO, CIO, and Board Risk Committee; BNM notification assessment required |

---

## 6. Backup Schedule and Retention Periods

*This section documents the approved backup schedules and retention periods for all in-scope systems. This provides the baseline against which test failures are assessed and helps identify whether failures are isolated events or indicative of a schedule or retention misconfiguration.*

### 6.1 Backup Schedule by System Tier

*Authors must ensure this table reflects the live, approved backup schedule. Changes to backup schedules must be approved through the Change Management process and reflected here within [X] business days of implementation.*

| System / Application | Tier | Backup Type | Backup Frequency | Backup Window (Time) | Backup Tool / Platform | Primary Storage Location | Secondary Storage Location | Backup Owner |
|---|---|---|---|---|---|---|---|---|
| [System Name — e.g., Core Banking System] | 1 | Full + Incremental | Full: Weekly; Incremental: Every [X] hours | [e.g., 01:00–04:00 MYT] | [e.g., Veeam / Commvault / AWS Backup] | [e.g., Primary SAN — Data Centre A] | [e.g., Object Storage — DR Site B] | [Name / Role] |
| [System Name] | 1 | [Type] | [Frequency] | [Window] | [Tool] | [Location] | [Location] | [Owner] |
| [System Name] | 2 | [Type] | [Frequency] | [Window] | [Tool] | [Location] | [Location] | [Owner] |
| [System Name] | 2 | [Type] | [Frequency] | [Window] | [Tool] | [Location] | [Location] | [Owner] |
| [System Name] | 3 | [Type] | [Frequency] | [Window] | [Tool] | [Location] | [Location] | [Owner] |
| [System Name] | 3 | [Type] | [Frequency] | [Window] | [Tool] | [Location] | [Location] | [Owner] |

### 6.2 Retention Periods

*Retention periods must comply with both operational recovery requirements and applicable regulatory data retention obligations. Authors should cross-reference the Data Retention Policy \[[Document Ref]\] and any regulatory-specific retention requirements.*

| Tier | Daily Backups Retained | Weekly Backups Retained | Monthly Backups Retained | Annual Backups Retained | Regulatory Minimum Retention | Notes |
|---|---|---|---|---|---|---|
| **Tier 1** | [X] days | [X] weeks | [X] months | [X] years | [e.g., 7 years per FSA / BNM requirements] | [e.g., Final annual backup retained for regulatory period] |
| **Tier 2** | [X] days | [X] weeks | [X] months | [X] years | [Regulatory requirement] | [Notes] |
| **Tier 3** | [X] days | [X] weeks | [X] months | [X] years | [Regulatory requirement] | [Notes] |

### 6.3 Backup Storage Security Controls

*Summarize the security controls applied to backup storage to ensure integrity and confidentiality of backup data.*

| Control | Implementation | Responsible Party |
|---|---|---|
| Encryption at rest | [e.g., AES-256 encryption on all backup media] | [Role / Team] |
| Encryption in transit | [e.g., TLS 1.2+ for all backup data transfers] | [Role / Team] |
| Access controls | [e.g., Role-based access; MFA required for backup console access] | [Role / Team] |
| Immutability / WORM | [e.g., Object Lock enabled on S3 buckets; WORM tapes for regulatory retention] | [Role / Team] |
| Offsite media transport security | [e.g., Encrypted transport; chain of custody log maintained] | [Role / Team] |
| Periodic integrity verification | [e.g., Monthly hash verification of backup sets] | [Role / Team] |
| Backup monitoring and alerting | [e.g., Automated alerts for failed backup jobs within [X] minutes] | [Role / Team] |

### 6.4 Backup Failure Detection and Initial Response

*Describe the process by which backup job failures are detected and how the initial response is triggered before formal remediation begins.*

1. Backup job monitoring is performed via [Monitoring Tool / Platform] with automated alerting configured to notify [Backup & Recovery Lead] and [IT Operations Manager] within [X] minutes of a failed job.
2. Upon receiving an alert, the Backup & Recovery Lead performs an initial triage within [X] hours to determine whether the failure is:
   - A transient failure (e.g., network blip) resolvable by immediate re-run, or
   - A substantive failure requiring formal remediation recording.
3. All substantive failures are recorded in the Failure Event Register (Section 3.1) within [X] business hours of confirmation.
4. Transient failures that resolve upon re-run are logged in the Backup Operations Log \[[Document Ref]\] but do not require a formal remediation record unless they occur [X] or more times within a [X]-day period for the same system.

---

## 7. Restoration Testing Results

*This section records the outcomes of scheduled and ad-hoc backup restoration tests. Test results form the basis for identifying failures requiring remediation and serve as primary evidence of RMiT Clause 10.45 compliance.*

### 7.1 Testing Schedule and Cadence

*Define the mandatory testing frequency by tier. Testing must be completed and results recorded within the defined cadence regardless of whether failures occur.*

| Tier | Minimum Test Frequency | Test Type | Scope | Approving Authority |
|---|---|---|---|---|
| **Tier 1** | [e.g., Monthly full restoration test; weekly backup integrity check] | Full restoration to isolated environment + integrity verification | All Tier 1 systems | Head of IT Operations + CISO |
| **Tier 2** | [e.g., Quarterly full restoration test; monthly integrity check] | Full restoration to isolated environment | All Tier 2 systems | Head of IT Operations |
| **Tier 3** | [e.g., Semi-annual restoration test; monthly integrity check] | Spot restoration of representative sample | Representative sample of Tier 3 systems | IT Operations Manager |
| **DR Exercise (Annual)** | Annually | Full DR failover and restoration exercise | All Tier 1 and selected Tier 2 systems | CIO + BCM Lead |

### 7.2 Restoration Test Results Log

*Complete one row per restoration test performed. Attach the detailed test report as an appendix or as a linked artifact in the document management system.*

| Test ID | System / Application | Tier | Test Date | Test Type | Test Environment | Backup Set Date/Time | Restoration Initiated | Restoration Completed | RPO Target | RPO Actual | RPO Met? | RTO Target | RTO Actual | RTO Met? | Overall Result | Remediation Ref | Test Report Ref | Conducted By |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TEST-[YYYY]-[NNN] | [System] | [1/2/3] | [DD/MM/YYYY] | [Full / Incremental / Integrity Check] | [Isolated / DR Site / Production] | [DD/MM/YYYY HH:MM] | [HH:MM] | [HH:MM] | [X hrs] | [X hrs] | [Y/N] | [X hrs] | [X hrs] | [Y/N] | [Pass / Fail / Partial Pass] | [REM-YYYY-NNN or N/A] | [Report Ref] | [Name, Role] |
| TEST-[YYYY]-[NNN] | [System] | [1/2/3] | [DD/MM/YYYY] | [Type] | [Environment] | [Backup Set] | [Time] | [Time] | [Target] | [Actual] | [Y/N] | [Target] | [Actual] | [Y/N] | [Result] | [Rem Ref] | [Report Ref] | [Name] |
| TEST-[YYYY]-[NNN] | [System] | [1/2/3] | [DD/MM/YYYY] | [Type] | [Environment] | [Backup Set] | [Time] | [Time] | [Target] | [Actual] | [Y/N] | [Target] | [Actual] | [Y/N] | [Result] | [Rem Ref] | [Report Ref] | [Name] |

### 7.3 Test Results Summary — Quarterly Dashboard

*Authors should complete this summary table at the end of each quarter to provide management and auditors with a consolidated view of restoration test performance.*

**Reporting Period:** [Q1/Q2/Q3/Q4] [YYYY] | [DD/MM/YYYY] to [DD/MM/YYYY]

| Metric | Tier 1 | Tier 2 | Tier 3 | Total |
|---|---|---|---|---|
| Tests Scheduled | | | | |
| Tests Completed | | | | |
| Tests Not Completed (with reason) | | | | |
| Tests Passed (all criteria met) | | | | |
| Tests Failed (any criteria not met) | | | | |
| Tests Partially Passed | | | | |
| RPO Breaches | | | | |
| RTO Breaches | | | | |
| Remediation Records Opened This Quarter | | | | |
| Remediation Records Closed This Quarter | | | | |
| Remediation Records Overdue (past target) | | | | |

**Overall Compliance Status for Quarter:** [ ] Compliant — All scheduled tests completed; all failures under active remediation  
**Overall Compliance Status for Quarter:** [ ] Non-Compliant — [Describe non-compliance and remediation plan]

### 7.4 Verification Re-Test Log

*Record the outcomes of re-tests conducted to verify that remediation actions have been effective. Each re-test must be referenced to the original failure remediation record.*

| Re-Test ID | Original Test ID | Remediation Ref | System | Tier | Re-Test Date | Re-Test Result | RPO Met? | RTO Met? | Residual Issues | Closure Approved By | Closure Date |
|---|---|---|---|---|---|---|---|---|---|---|---|
| RETEST-[YYYY]-[NNN] | TEST-[YYYY]-[NNN] | REM-[YYYY]-[NNN] | [System] | [Tier] | [DD/MM/YYYY] | [Pass / Fail] | [Y/N] | [Y/N] | [None / Describe] | [Name, Role] | [DD/MM/YYYY] |
| RETEST-[YYYY]-[NNN] | TEST-[YYYY]-[NNN] | REM-[YYYY]-[NNN] | [System] | [Tier] | [DD/MM/YYYY] | [Pass / Fail] | [Y/N] | [Y/N] | [None / Describe] | [Name, Role] | [DD/MM/YYYY] |

---

## 8. Roles and Responsibilities

*This RACI matrix defines the participation of each role in the backup restoration test failure remediation process. It must be reviewed whenever organizational changes affect the named roles.*

**RACI Key:**
- **R** — Responsible: Performs the work
- **A** — Accountable: Ultimately answerable for the outcome (one per activity)
- **C** — Consulted: Provides input before action
- **I** — Informed: Notified of outcomes

| Activity | Head of IT Operations | IT Operations Manager | Backup & Recovery Lead | Systems Administrator | Cloud Infra Engineer | IT Risk Manager | CISO | CIO | Internal Audit | BCM Lead | Vendor Manager |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Define and maintain backup schedule | A | R | C | C | C | C | I | I | I | I | I |
| Execute scheduled backup jobs | I | A | R | R | R | — | — | — | — | — | I |
| Monitor backup job completion | I | A | R | R | R | — | — | — | — | — | I |
| Detect and classify backup failures | I | A | R | R | R | I | I | — | — | — | I |
| Open remediation record | A | R | C | — | — | I | I | — | — | — | I |
| Conduct Root Cause Analysis | A | C | R | C | C | C | I | — | — | — | C |
| Assign and track remediation actions | A | R | C | C | C | I | I | — | — | — | C |
| Execute technical remediation | I | A | R | R | R | — | — | — | — | — | R |
| Update risk register | C | I | — | — | — | R | A | I | I | I | — |
| Approve remediation plan | A | C | C | — | — | C | C | — | — | — | — |
| Conduct verification re-test | A | C | R | R | R | — | — | — | — | — | — |
| Approve re-test results and close record | A | C | R | — | — | C | I | — | — | — | — |
| Escalate Tier 1 critical failures | A | C | C | — | — | C | R | I | — | I | — |
| Quarterly management reporting | A | R | C | — | — | C | I | I | I | I | — |
| Annual DR exercise coordination | C | C | R | C | C | C | C | A | I | R | C |
| Regulatory examination support | A | C | C | — | — | R | C | C | I | — | — |
| Policy and procedure updates | A | R | C | — | — | C | C | — | — | — | — |
| Vendor performance management | I | I | I | — | — | — | — | — | — | — | A |
| Notify BNM (if required) | I | — | — | — | — | C | A | R | — | — | — |

---

## 9. Escalation and Notification Procedures

*This section defines the formal escalation and notification chain for backup restoration failures, ensuring timely awareness at appropriate management levels and compliance with any BNM notification requirements.*

### 9.1 Internal Escalation Matrix

| Failure Severity | Immediate Notification (within) | Escalation Level 1 (within) | Escalation Level 2 (within) | Documentation Required |
|---|---|---|---|---|
| **Tier 1 — Critical (Total Failure or Critical Breach)** | IT Operations Manager notified within [X] minutes | Head of IT Operations + CISO within [X] hours | CIO + Board Risk Committee within [X] hours | Immediate incident log; full RCA within [X] business days |
| **Tier 1 — Significant Breach** | IT Operations Manager notified within [X] hours | Head of IT Operations + CISO within [X] hours | CIO informed within [X] business days | Remediation record opened within [X] business hours |
| **Tier 1 — Minor Breach** | Backup & Recovery Lead notified immediately | IT Operations Manager within [X] hours | Head of IT Operations within [X] business days | Remediation record opened within [X] business days |
| **Tier 2 — Any Failure** | Backup & Recovery Lead notified immediately | IT Operations Manager within [X] hours | Head of IT Operations within [X] business days | Remediation record opened within [X] business days |
| **Tier 3 — Any Failure** | Backup & Recovery Lead notified immediately | IT Operations Manager within [X] business days | Head of IT Operations if unresolved after [X] days | Remediation record opened within [X] business days |

### 9.2 BNM Notification Assessment

*Authors must complete this assessment for any Tier 1 failure that results in a Critical Breach or Total Failure.*

BNM notification obligations must be assessed against the requirements of the **RMiT Policy Document** and any applicable supervisory guidelines. The following criteria trigger a formal notification assessment:

- [ ] Failure results in confirmed data loss exceeding approved RPO for a Tier 1 system
- [ ] Failure results in inability to meet approved RTO for a Tier 1 system during an actual incident
- [ ] Failure affects systems processing regulated financial services or transactions
- [ ] Failure affects the security or confidentiality of customer data (PDPA implications)
- [ ] Failure is part of a pattern indicating systemic weaknesses (3 or more similar failures in 12 months)

**If any box above is checked, escalate to CISO and CIO immediately for BNM notification determination.**

| Assessment Field | Details |
|---|---|
| Assessment Date | [DD/MM/YYYY] |
| Assessed By | [Name, Role] |
| BNM Notification Required | [Yes / No / Under Review] |
| Rationale | [Provide clear rationale for determination] |
| Notification Date (if applicable) | [DD/MM/YYYY] |
| BNM Reference Number (if applicable) | [BNM Reference] |
| CISO Approval of Assessment | [Name, Date] |

---

## 10. Review and Approval

### 10.1 Document Review Cycle

*This document must be reviewed at the following intervals and upon the occurrence of specified trigger events.*

| Review Trigger | Review Type | Responsible Party | Approval Required From |
|---|---|---|---|
| Per-event (any backup restoration failure) | Remediation record update and validation | Head of IT Operations | Head of IT Operations |
| Quarterly | Full document review; update test results summary | Head of IT Operations + IT Risk Manager | Head of IT Operations + CISO |
| Annual | Comprehensive policy and procedure review; RPO/RTO validation | Head of IT Operations | CIO / [Board Risk Committee] |
| Material change to backup architecture | Ad-hoc review | Head of IT Operations + Backup & Recovery Lead | Head of IT Operations + CISO |
| Following a declared disaster or DR exercise | Post-event review | Head of IT Operations + BCM Lead | CIO |
| BNM examination or audit finding | Ad-hoc review | Head of IT Operations + IT Risk Manager | CISO + CIO |

### 10.2 Version History

*Record all material changes to this document. Minor typographical corrections do not require a version increment.*

| Version | Date | Author | Role | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | [Role] | Initial document creation |
| 1.1 | [DD/MM/YYYY] | [Author Name] | [Role] | [e.g., Updated RPO/RTO values following Board approval — Ref: \[Document Ref\]] |
| 1.2 | [DD/MM/YYYY] | [Author Name] | [Role] | [e.g., Added Tier 3 systems to backup schedule following system classification review] |
| 2.0 | [DD/MM/YYYY] | [Author Name] | [Role] | [e.g., Major revision following BNM RMiT audit findings — Ref: \[Audit Ref\]] |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Role] | [Description of changes] |

### 10.3 Approval Sign-Off

*This document requires the following approvals prior to formal issuance and following each annual review.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name] — Backup & Recovery Lead | | [DD/MM/YYYY] |
| Reviewed By | [Name] — IT Operations Manager | | [DD/MM/YYYY] |
| Reviewed By | [Name] — IT Risk Manager | | [DD/MM/YYYY] |
| Approved By | [Name] — Head of IT Operations | | [DD/MM/YYYY] |
| Endorsed By | [Name] — Chief Information Security Officer | | [DD/MM/YYYY] |
| Noted By | [Name] — Chief Information Officer | | [DD/MM/YYYY] |

---

## 11. References

*This section lists the regulatory instruments, internal policies, and related documents that this artifact is designed to satisfy or support.*

### 11.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-109 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clauses 10.42, 10.43, 10.44, **10.45** |
| Financial Services Act 2013 | Financial Services Act 2013 | Parliament of Malaysia | Section 47 (BNM Supervisory Powers) |
| Islamic Financial Services Act 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | Section 47 (BNM Supervisory Powers) |
| Personal Data Protection Act 2010 | Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Security Principle; Retention Principle |
| [BNM Circular Ref] | [Title of applicable BNM circular or policy] | Bank Negara Malaysia | [Relevant sections] |
| NACSA CCoP | Cybersecurity Code of Practice for Critical National Information Infrastructure | National Cyber Security Agency (NACSA) | [Relevant sections] |

### 11.2 Internal Policy and Procedure References

| Document ID | Document Title | Owner | Relationship to This Document |
|---|---|---|---|
| [Doc ID] | IT Asset Classification Register | Head of IT Operations | Defines system tier classifications used in Section 5 |
| [Doc ID] | Backup and Recovery Policy | Head of IT Operations | Parent policy governing backup and recovery requirements |
| [Doc ID] | Backup and Recovery Procedure | Backup & Recovery Lead | Operational procedures for backup execution and restoration |
| [Doc ID] | Disaster Recovery Plan | Head of IT Operations + BCM Lead | DR strategy and recovery procedures for Tier 1 systems |
| [Doc ID] | Business Continuity Plan | BCM Lead | Business-level continuity arrangements referencing IT recovery |
| [Doc ID] | IT Risk Register | IT Risk Manager | Risk items arising from backup failures recorded here |
| [Doc ID] | Data Retention Policy | Head of IT Operations + Legal | Retention periods and regulatory data obligations |
| [Doc ID] | Change Management Policy | IT Operations Manager | Change control requirements for backup schedule modifications |
| [Doc ID] | Information Security Policy | CISO | Security controls applicable to backup data |
| [Doc ID] | Vendor Management Policy | Procurement / IT | Obligations and escalation procedures for vendor-attributed failures |
| [Doc ID] | Incident Management Policy | IT Operations Manager | Interface between backup failures and IT incident management |

---

## 12. Appendices

### Appendix A — Backup Restoration Test Report Template

*Authors should attach completed restoration test reports to this document or reference them by document management system ID. A blank template is provided below for operational use.*

---

**BACKUP RESTORATION TEST REPORT**

| Field | Details |
|---|---|
| Test Report ID | TEST-[YYYY]-[NNN] |
| System / Application | [System Name] |
| Tier | [1 / 2 / 3] |
| Test Date | [DD/MM/YYYY] |
| Test Type | [Full Restoration / Incremental Restoration / Integrity Check / DR Exercise] |
| Test Environment | [Isolated Test Environment / DR Site / Production (emergency only)] |
| Conducted By | [Name, Role] |
| Witnessed By | [Name, Role] |
| Test Authorization Ref | [Change Request / Test Plan Ref] |

**Pre-Test Verification Checklist:**

| # | Pre-Test Check | Completed | Notes |
|---|---|---|---|
| 1 | Target restoration environment prepared and isolated from production | [ ] Y / [ ] N | |
| 2 | Backup set identified and verified as present on storage | [ ] Y / [ ] N | |
| 3 | Backup set integrity hash verified (if applicable) | [ ] Y / [ ] N | |
| 4 | Sufficient storage capacity confirmed at restoration target | [ ] Y / [ ] N | |
| 5 | Restoration procedure document version confirmed (latest) | [ ] Y / [ ] N | |
| 6 | Change management approval obtained | [ ] Y / [ ] N | Ref: [CR Ref] |
| 7 | Stakeholders notified of test window | [ ] Y / [ ] N | |

**Test Execution Log:**

| Step | Time (HH:MM) | Action | Outcome | Operator |
|---|---|---|---|---|
| 1 | | Restoration job initiated | [Success / Warning / Error] | |
| 2 | | [Checkpoint — e.g., First 10% of data restored] | [Status] | |
| 3 | | [Checkpoint — e.g., Database services started] | [Status] | |
| 4 | | [Smoke test — core application functions verified] | [Pass / Fail] | |
| 5 | | System declared operational | | |
| 6 | | RPO and RTO calculated and recorded | | |

**Post-Test Summary:**

| Field | Details |
|---|---|
| Restoration Completion Time | [HH:MM DD/MM/YYYY] |
| Total RTO Actual | [X hours Y minutes] |
| RPO Actual | [X hours Y minutes] |
| RPO Target Met | [Yes / No — if No, breach type: Minor / Significant / Critical] |
| RTO Target Met | [Yes / No — if No, breach type: Minor / Significant / Critical] |
| Overall Test Result | [Pass / Fail / Partial Pass] |
| Failures / Issues Observed | [Describe or state None] |
| Remediation Record Required | [Yes — Ref: REM-[YYYY]-[NNN] / No] |
| Restoration Environment Decommissioned | [Yes — Date: DD/MM/YYYY / No — Reason] |
| Test Report Approved By | [Name, Role, Date] |

---

### Appendix B — Root Cause Analysis Template

*Authors should complete an RCA for all Tier 1 failures and all Tier 2 failures assessed as Significant or Critical breach. Reference this appendix as an attached document with a unique document ID.*

---

**ROOT CAUSE ANALYSIS REPORT**

| Field | Details |
|---|---|
| RCA Report ID | RCA-[YYYY]-[NNN] |
| Related Remediation Ref | REM-[YYYY]-[NNN] |
| System / Application | [System Name] |
| Failure Date | [DD/MM/YYYY] |
| RCA Conducted By | [Name, Role] |
| RCA Reviewed By | [Name, Role] |
| RCA Date | [DD/MM/YYYY] |

**1. Failure Description:**

> [Detailed description of the failure]

**2. Timeline of Events:**

| Date/Time | Event | Source |
|---|---|---|
| [DD/MM/YYYY HH:MM] | [Event description] | [Log / Alert / Operator observation] |
| | | |

**3. Five Whys Analysis:**

| Why # | Question | Answer |
|---|---|---|
| Why 1 | Why did the backup restoration fail? | [Answer] |
| Why 2 | Why did [answer to Why 1] occur? | [Answer] |
| Why 3 | Why did [answer to Why 2] occur? | [Answer] |
| Why 4 | Why did [answer to Why 3] occur? | [Answer] |
| Why 5 | Why did [answer to Why 4] occur? | [Answer — Root Cause] |

**4. Root Cause Statement:**

> [Single clear statement of the root cause as identified through the Five Whys or other analytical method used]

**5. Contributing Factors:**

- [Contributing factor 1]
- [Contributing factor 2]
- [Contributing factor 3]

**6. Recommended Corrective Actions:**

| # | Action | Type (Technical / Process / People) | Priority | Recommended Owner | Target Date |
|---|---|---|---|---|---|
| 1 | [Action] | [Type] | [High/Med/Low] | [Role] | [DD/MM/YYYY] |
| 2 | [Action] | [Type] | [Priority] | [Role] | [DD/MM/YYYY] |

**7. Lessons Learned:**

> [Document key lessons to be shared with the broader IT Operations team and fed into training, procedures, and the annual DR exercise planning process]

---

### Appendix C — Glossary of Terms

| Term | Definition |
|---|---|
| **Backup** | A copy of data taken at a specific point in time for the purpose of recovery in the event of data loss or system failure. |
| **Backup Agent** | Software installed on a source system to facilitate backup operations, typically managed by a central backup server or platform. |
| **BCM** | Business Continuity Management — the holistic management process to ensure that critical business functions can continue during and after a disruption. |
| **BNM** | Bank Negara Malaysia — the central bank and financial services regulator of Malaysia. |
| **CISO** | Chief Information Security Officer — the senior executive responsible for information security strategy and oversight. |
| **DR** | Disaster Recovery — the process of restoring IT infrastructure and operations following a major disruption or declared disaster. |
| **Incremental Backup** | A backup that captures only the data that has changed since the last backup (full or incremental). |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing and protection of personal data. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |
| **RMiT** | Risk Management in Technology — the BNM policy document governing technology risk management for licensed financial institutions. |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time (i.e., how old the restored data can be). |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a system to operational status following a failure. |
| **Smoke Test** | A preliminary test to verify that the core functions of a restored system are operational before full production use. |
| **Tier 1 System** | A mission-critical system whose failure would result in regulatory breach, inability to serve customers, or material financial loss. |
| **Tier 2 System** | A business-critical system whose failure would significantly impair operations but where limited manual workarounds are available. |
| **Tier 3 System** | A business-important system whose failure causes operational inconvenience without directly impairing customer-facing services or regulatory obligations. |
| **WORM** | Write Once Read Many — storage technology that prevents modification or deletion of data, used to ensure backup immutability for regulatory retention. |

---

### Appendix D — Regulatory Compliance Mapping

*This appendix maps each section of this document to the specific RMiT clauses it is designed to address, facilitating efficient audit navigation.*

| Document Section | Section Title | RMiT Clause(s) Addressed | Compliance Evidence Provided |
|---|---|---|---|
| Section 1 | Purpose and Scope | 10.45 | Establishes the scope and regulatory basis of the remediation record |
| Section 2 | Objectives | 10.45 | Documents measurable objectives and success criteria |
| Section 3 | Remediation Actions and Milestones | **10.45** | Primary evidence of failure remediation: actions, owners, milestones, verification |
| Section 4 | Accountable Owners | 10.45 | Named accountability for all remediation items |
| Section 5 | RPO and RTO Definitions | 10.45 | Approved recovery objectives used to assess test outcomes |
| Section 6 | Backup Schedule and Retention | 10.42, 10.43, 10.44 | Evidence of compliant backup frequency, storage, and retention |
| Section 7 | Restoration Testing Results | **10.45** | Test logs, outcomes, and verification re-test results |
| Section 8 | Roles and Responsibilities | 10.45 | RACI demonstrating governance and accountability |
| Section 9 | Escalation and Notification | 10.45 | Escalation procedures including BNM notification assessment |
| Appendix A | Test Report Template | 10.45 | Standardized test evidence format |
| Appendix B | RCA Template | 10.45 | Root cause analysis evidence for material failures |

---

*End of Document*

---

**Document Control Notice:** This document is subject to the version control and access control requirements of [Organization Name]'s Document Management Policy \[[Document ID]\]. The authoritative copy of this document is maintained in [Document Management System Name]. Printed copies are uncontrolled. Verify currency before use.