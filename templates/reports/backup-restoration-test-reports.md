# Backup Restoration Test Report

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

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [RPO and RTO Definitions Per Tier](#5-rpo-and-rto-definitions-per-tier)
6. [Backup Schedule and Retention Periods](#6-backup-schedule-and-retention-periods)
7. [Restoration Testing Results](#7-restoration-testing-results)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Executive Summary

*Provide a concise, non-technical summary of this quarterly backup restoration test cycle. Summarise overall outcomes, critical findings, pass/fail status, and any immediate remediation actions required. This section should be suitable for senior management review.*

**Test Period:** [Quarter and Year, e.g., Q1 2026 — 1 January 2026 to 31 March 2026]

**Test Conducted By:** [Name(s) and Role(s) of Testing Personnel]

**Overall Test Outcome:** [PASS / FAIL / PARTIAL PASS — with brief justification]

**Summary of Results:**

| Metric | Result |
|---|---|
| Total Systems in Scope | [Number] |
| Systems Successfully Restored | [Number] |
| Systems Failed to Restore | [Number] |
| Overall Pass Rate | [Percentage] % |
| Critical Systems Compliant | [Yes / No / Partial] |
| RPO Compliance (All Tiers) | [Yes / No / Partial] |
| RTO Compliance (All Tiers) | [Yes / No / Partial] |
| Data Integrity Checks Passed | [Number] / [Total] |

**Key Highlights:**

- [Highlight 1: e.g., All Tier 1 critical systems completed restoration within the defined RTO of 4 hours]
- [Highlight 2: e.g., One Tier 2 application, [System Name], exceeded its RTO; root cause investigation initiated]
- [Highlight 3: e.g., Backup data integrity verified for all tested systems via checksum validation]

**Outstanding Actions:**

| Action Item | Owner | Target Remediation Date | Priority |
|---|---|---|---|
| [Action 1] | [Name / Role] | [Date] | [High / Medium / Low] |
| [Action 2] | [Name / Role] | [Date] | [High / Medium / Low] |

---

## 2. Purpose and Scope

### 2.1 Purpose

This Backup Restoration Test Report documents the results of periodic backup restoration tests and data integrity verification exercises conducted by [Organization Name] in compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically under **Clause 10.45**.

The purpose of this report is to:

- Demonstrate that backup data can be successfully restored within defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) for all system tiers;
- Verify the integrity and completeness of backed-up data prior to and following restoration;
- Identify gaps, failures, or degradations in backup and recovery capabilities;
- Support evidence requirements for internal audit, external audit, and BNM supervisory examination; and
- Provide management with assurance that [Organization Name]'s technology recovery capabilities remain operationally effective.

### 2.2 Regulatory Basis

This report is prepared in fulfilment of the following regulatory obligations:

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 10.45 | Financial institutions must periodically test backup restoration procedures to ensure data can be recovered within defined RPO and RTO parameters |
| BNM RMiT Policy Document | [Related Clause, e.g., 10.40–10.44] | [Brief description of related backup management obligations] |
| [Other applicable regulation, e.g., PDPA 2010] | [Section] | [Requirement relating to data integrity / availability] |

### 2.3 Scope Boundaries

*Define the systems, applications, databases, and infrastructure components included and explicitly excluded from this test cycle. Exclusions must be justified.*

**In Scope:**

- [System / Application 1, e.g., Core Banking System — CBS]
- [System / Application 2, e.g., Internet Banking Platform]
- [System / Application 3, e.g., Payment Processing System]
- [Database servers, e.g., Primary Oracle DB Cluster]
- [Infrastructure, e.g., Active Directory Domain Controllers]
- [Any other system included]

**Out of Scope:**

| Excluded System / Component | Justification for Exclusion | Scheduled Test Date |
|---|---|---|
| [System Name] | [e.g., Undergoing planned decommission] | [N/A or future date] |
| [System Name] | [e.g., Tested in prior quarter; next test due Q3] | [Scheduled date] |

---

## 3. Scope and Methodology

### 3.1 Test Objectives

*Describe the specific objectives of this test cycle, including what success looks like and which controls are being validated.*

The primary objectives of this test cycle are to:

1. Validate that all Tier 1 critical systems can be restored within their defined RTO and RPO;
2. Confirm the integrity of backup data through checksum and hash verification;
3. Verify that restored data is operationally usable and free from corruption;
4. Test the documented backup restoration procedures in [Organization Name]'s [Reference: Backup and Recovery Procedure Document ID]; and
5. Identify any deviations from expected outcomes and initiate remediation.

### 3.2 Methodology

*Describe the technical approach used to conduct backup restoration testing, including tools, environments, and validation techniques.*

**Testing Approach:** [e.g., Full restoration test / Partial restoration test / Table-top exercise — specify and justify]

**Testing Environment:** [e.g., Dedicated DR environment / Isolated test environment / Production — note if production is used and the justification]

**Tools and Utilities Used:**

| Tool / Utility | Purpose | Version |
|---|---|---|
| [Tool Name, e.g., Veeam Backup & Replication] | Backup restoration execution | [Version] |
| [Tool Name, e.g., MD5/SHA256 checksum utility] | Data integrity verification | [Version] |
| [Tool Name] | [Purpose] | [Version] |

**Test Steps (General):**

1. Identify the backup snapshot or recovery point to be restored, aligned with the defined RPO for each tier.
2. Initiate restoration to the designated test environment using the applicable backup tooling.
3. Record the time of restoration initiation and completion to calculate actual recovery time.
4. Execute data integrity checks (checksum validation, record count verification, application-level smoke tests).
5. Document test outcomes, deviations, and observations.
6. Obtain sign-off from the system owner confirming restoration success or recording failure.

### 3.3 Test Schedule

| Test Activity | Planned Date | Actual Date | Status |
|---|---|---|---|
| Test preparation and environment setup | [Date] | [Date] | [Complete / In Progress / Pending] |
| Tier 1 system restoration tests | [Date] | [Date] | [Complete / In Progress / Pending] |
| Tier 2 system restoration tests | [Date] | [Date] | [Complete / In Progress / Pending] |
| Tier 3 system restoration tests | [Date] | [Date] | [Complete / In Progress / Pending] |
| Data integrity verification | [Date] | [Date] | [Complete / In Progress / Pending] |
| Results collation and report drafting | [Date] | [Date] | [Complete / In Progress / Pending] |
| Review and approval | [Date] | [Date] | [Complete / In Progress / Pending] |

---

## 4. Key Findings and Observations

### 4.1 Summary of Findings

*Summarise the most significant outcomes from the test cycle, including successes, failures, near-misses, and any systemic issues identified. Findings should be categorised by severity.*

| Finding ID | System / Component | Finding Description | Severity | Status |
|---|---|---|---|---|
| F-001 | [System Name] | [e.g., Restoration completed successfully within RTO; no anomalies detected] | Informational | [Closed] |
| F-002 | [System Name] | [e.g., Restoration exceeded RTO by 47 minutes due to network throughput degradation on DR link] | High | [Open — Remediation in progress] |
| F-003 | [System Name] | [e.g., Backup file found to be corrupted; last valid restore point was 26 hours prior, exceeding RPO] | Critical | [Open — Escalated to CISO] |
| F-004 | [System Name] | [Description] | [Medium / Low] | [Status] |

**Severity Definitions:**

| Severity | Definition |
|---|---|
| **Critical** | Restoration failure with no viable recovery path; RPO or RTO breach with material business impact; immediate escalation required |
| **High** | RTO or RPO breach; data integrity issue identified; remediation required within 14 calendar days |
| **Medium** | Minor deviation from procedure; no breach of RTO/RPO but risk of future breach identified; remediation within 30 days |
| **Low** | Observation or process improvement opportunity; no immediate risk; addressed at next review cycle |
| **Informational** | Positive finding or confirmation of expected behaviour; no action required |

### 4.2 Observations and Recommendations

*Record qualitative observations made during testing that may not constitute formal findings but are noteworthy for management attention or process improvement.*

- **Observation 1:** [e.g., Test environment provisioning took longer than anticipated, suggesting the DR runbook for environment setup should be updated to include pre-staging steps]
- **Observation 2:** [e.g., Documentation for [System Name] restoration procedure was found to be outdated; the current version does not reflect the migration to [Platform] in [Month Year]]
- **Observation 3:** [e.g., Staff performing the restoration test required escalation to vendor support for one system, indicating a knowledge gap that should be addressed through training]
- **Observation 4:** [Add further observations as applicable]

### 4.3 Comparison with Prior Quarter

*Compare this quarter's results against the previous test cycle to identify trends, improvements, or deterioration.*

| Metric | [Prior Quarter, e.g., Q4 2025] | [Current Quarter, e.g., Q1 2026] | Trend |
|---|---|---|---|
| Overall Pass Rate | [%] | [%] | [Improved / Stable / Deteriorated] |
| Critical Findings | [Number] | [Number] | [Improved / Stable / Deteriorated] |
| Average Restoration Time (Tier 1) | [Duration] | [Duration] | [Improved / Stable / Deteriorated] |
| RPO Compliance Rate | [%] | [%] | [Improved / Stable / Deteriorated] |
| RTO Compliance Rate | [%] | [%] | [Improved / Stable / Deteriorated] |
| Open Remediation Items Carried Over | [Number] | [Number] | [Improved / Stable / Deteriorated] |

---

## 5. RPO and RTO Definitions Per Tier

### 5.1 System Criticality Tier Classification

*This section defines the Recovery Point Objective (RPO) and Recovery Time Objective (RTO) applicable to each system criticality tier. These parameters must align with [Organization Name]'s approved Business Continuity Plan (BCP) and Technology Disaster Recovery Plan (DRP).*

**Definitions:**

- **Recovery Point Objective (RPO):** The maximum acceptable amount of data loss measured in time. It defines how far back in time the restored data may be from the point of failure.
- **Recovery Time Objective (RTO):** The maximum acceptable duration of time within which a system must be restored to operational status following a failure or disaster.

### 5.2 Tier Classification and Parameters

| Tier | Classification | Description / Examples | RPO | RTO | Backup Frequency |
|---|---|---|---|---|---|
| **Tier 1** | Mission Critical | Systems whose failure would immediately halt core banking operations or result in regulatory breach. Examples: Core Banking System, Payment Processing, Settlement Systems | [e.g., 1 hour] | [e.g., 4 hours] | [e.g., Continuous / Every 1 hour] |
| **Tier 2** | Business Critical | Systems supporting significant business operations; extended outage causes material impact but core functions can continue manually. Examples: Internet Banking, CRM, HR Systems | [e.g., 4 hours] | [e.g., 24 hours] | [e.g., Every 4 hours / Daily] |
| **Tier 3** | Business Important | Supporting systems; outage causes inconvenience but limited operational impact. Examples: Internal reporting tools, email archiving, development environments | [e.g., 24 hours] | [e.g., 72 hours] | [e.g., Daily / Weekly] |
| **Tier 4** | Non-Critical | Systems with minimal operational dependency; restoration can be scheduled. Examples: Training environments, test systems | [e.g., 72 hours] | [e.g., 7 days] | [e.g., Weekly / Monthly] |

> **Note:** RPO and RTO values above are illustrative. [Organization Name] must confirm these parameters against the board-approved BCP and DRP. Any amendments to tier classifications or parameters must be approved by the [Risk Management Committee / Technology Steering Committee].

### 5.3 System Tier Register

| System / Application | Business Owner | IT Owner | Assigned Tier | Approved RPO | Approved RTO | Last Classification Review |
|---|---|---|---|---|---|---|
| [Core Banking System] | [Name / Role] | [Name / Role] | Tier 1 | [Duration] | [Duration] | [Date] |
| [Internet Banking Platform] | [Name / Role] | [Name / Role] | Tier 2 | [Duration] | [Duration] | [Date] |
| [Payment Processing System] | [Name / Role] | [Name / Role] | Tier 1 | [Duration] | [Duration] | [Date] |
| [Active Directory] | [Name / Role] | [Name / Role] | Tier 1 | [Duration] | [Duration] | [Date] |
| [HR System] | [Name / Role] | [Name / Role] | Tier 2 | [Duration] | [Duration] | [Date] |
| [Add rows as required] | | | | | | |

---

## 6. Backup Schedule and Retention Periods

### 6.1 Backup Policy Overview

*Summarise the organisation's current approved backup policy parameters, including frequencies, media types, storage locations, and retention periods. This section should reflect the live state as at the test date.*

[Organization Name]'s backup management practices are governed by [Reference: Backup Management Policy, Document ID]. The following parameters were in effect during this test period.

### 6.2 Backup Schedule by System Tier

| Tier | Backup Type | Frequency | Backup Window | Retention Period | Storage Medium | Primary Location | Offsite / DR Location |
|---|---|---|---|---|---|---|---|
| Tier 1 | Continuous / Incremental | [e.g., Every 1 hour] | [e.g., Continuous] | [e.g., 30 days online; 1 year archive] | [e.g., SAN / Object Storage] | [Location] | [Location / Cloud Region] |
| Tier 1 | Full | [e.g., Weekly — Sunday] | [e.g., 00:00–04:00] | [e.g., 1 year] | [e.g., Tape / Object Storage] | [Location] | [Location] |
| Tier 2 | Incremental | [e.g., Every 4 hours] | [e.g., Continuous] | [e.g., 14 days online] | [e.g., SAN] | [Location] | [Location] |
| Tier 2 | Full | [e.g., Weekly — Sunday] | [e.g., 02:00–06:00] | [e.g., 6 months] | [e.g., Tape / Cloud] | [Location] | [Location] |
| Tier 3 | Full | [e.g., Daily — Nightly] | [e.g., 01:00–05:00] | [e.g., 90 days] | [e.g., NAS] | [Location] | [Location] |
| Tier 4 | Full | [e.g., Weekly] | [e.g., Saturday 01:00] | [e.g., 30 days] | [e.g., NAS] | [Location] | [Location] |

### 6.3 Retention Compliance

*Confirm that current retention periods meet or exceed regulatory minimum requirements and document any exceptions.*

| Regulatory Requirement | Required Retention Period | [Organization Name] Retention Period | Compliant? | Notes |
|---|---|---|---|---|
| BNM RMiT Clause 10.45 | [As specified] | [Configured period] | [Yes / No] | [Notes] |
| PDPA 2010 | [As applicable] | [Configured period] | [Yes / No] | [Notes] |
| [Other regulation] | [Period] | [Period] | [Yes / No] | [Notes] |

### 6.4 Backup Completion Status (Test Period)

*Record the backup job completion statistics for the period under review to demonstrate reliability of the backup process itself.*

| System | Backup Type | Scheduled Jobs | Completed Successfully | Failed | Success Rate | Trend vs Prior Quarter |
|---|---|---|---|---|---|---|
| [System Name] | [Full / Incremental] | [Number] | [Number] | [Number] | [%] | [Up / Down / Stable] |
| [System Name] | [Full / Incremental] | [Number] | [Number] | [Number] | [%] | [Up / Down / Stable] |
| [Add rows as required] | | | | | | |

---

## 7. Restoration Testing Results

### 7.1 Detailed Test Results by System

*Record the detailed outcome of each restoration test conducted during this cycle. Each system tested must have a corresponding entry below. Attach evidence (screenshots, logs) as appendices.*

---

#### 7.1.1 [System Name — e.g., Core Banking System]

| Field | Detail |
|---|---|
| **System Name** | [System Name] |
| **System Owner** | [Name / Role] |
| **Assigned Tier** | [Tier 1 / 2 / 3 / 4] |
| **Recovery Point Tested** | [Date and Time of backup snapshot used] |
| **Test Environment** | [Environment name / description] |
| **Restoration Initiated** | [Date and Time] |
| **Restoration Completed** | [Date and Time] |
| **Actual Recovery Time** | [Duration, e.g., 2 hours 34 minutes] |
| **Defined RTO** | [Duration] |
| **RTO Met?** | [Yes / No] |
| **Age of Backup at Test** | [Duration, e.g., 45 minutes] |
| **Defined RPO** | [Duration] |
| **RPO Met?** | [Yes / No] |
| **Integrity Check Method** | [e.g., SHA-256 checksum, record count, application smoke test] |
| **Integrity Check Outcome** | [Passed / Failed — with details if failed] |
| **Overall Test Result** | [**PASS** / **FAIL**] |
| **System Owner Sign-Off** | [Name] — [Date] |

**Notes / Observations:**
- [Detail any deviations, issues, or noteworthy observations for this system]

---

#### 7.1.2 [System Name — e.g., Internet Banking Platform]

| Field | Detail |
|---|---|
| **System Name** | [System Name] |
| **System Owner** | [Name / Role] |
| **Assigned Tier** | [Tier 1 / 2 / 3 / 4] |
| **Recovery Point Tested** | [Date and Time] |
| **Test Environment** | [Environment name] |
| **Restoration Initiated** | [Date and Time] |
| **Restoration Completed** | [Date and Time] |
| **Actual Recovery Time** | [Duration] |
| **Defined RTO** | [Duration] |
| **RTO Met?** | [Yes / No] |
| **Age of Backup at Test** | [Duration] |
| **Defined RPO** | [Duration] |
| **RPO Met?** | [Yes / No] |
| **Integrity Check Method** | [Method] |
| **Integrity Check Outcome** | [Passed / Failed] |
| **Overall Test Result** | [**PASS** / **FAIL**] |
| **System Owner Sign-Off** | [Name] — [Date] |

**Notes / Observations:**
- [Detail any deviations, issues, or noteworthy observations for this system]

---

*[Replicate Section 7.1.x for each additional system tested in this cycle]*

---

### 7.2 Consolidated Test Results Summary

| System | Tier | RTO Defined | Actual Recovery Time | RTO Met? | RPO Defined | Backup Age | RPO Met? | Data Integrity | Overall Result |
|---|---|---|---|---|---|---|---|---|---|
| [System Name] | T1 | [Duration] | [Duration] | [Y/N] | [Duration] | [Duration] | [Y/N] | [Pass/Fail] | [**PASS/FAIL**] |
| [System Name] | T1 | [Duration] | [Duration] | [Y/N] | [Duration] | [Duration] | [Y/N] | [Pass/Fail] | [**PASS/FAIL**] |
| [System Name] | T2 | [Duration] | [Duration] | [Y/N] | [Duration] | [Duration] | [Y/N] | [Pass/Fail] | [**PASS/FAIL**] |
| [System Name] | T3 | [Duration] | [Duration] | [Y/N] | [Duration] | [Duration] | [Y/N] | [Pass/Fail] | [**PASS/FAIL**] |
| [Add rows as required] | | | | | | | | | |

### 7.3 Remediation Action Plan

*For every FAIL result or significant finding, a remediation action must be recorded with a named owner and target completion date. All open items must be tracked to closure and reviewed at the next quarterly test.*

| Action ID | Related Finding | System Affected | Remediation Description | Responsible Owner | Target Date | Status | Evidence of Closure |
|---|---|---|---|---|---|---|---|
| A-001 | F-002 | [System Name] | [e.g., Upgrade DR network link capacity from 1Gbps to 10Gbps; re-test restoration post-upgrade] | [Name / Role] | [Date] | [Open / In Progress / Closed] | [Reference to evidence, e.g., Change ticket #] |
| A-002 | F-003 | [System Name] | [e.g., Investigate and resolve backup corruption; implement pre-backup integrity checks; review backup agent version] | [Name / Role] | [Date] | [Open / In Progress / Closed] | [Reference] |
| A-003 | F-004 | [System Name] | [Description] | [Name / Role] | [Date] | [Status] | [Reference] |
| [Add rows as required] | | | | | | | |

---

## 8. Roles and Responsibilities

*This section defines the roles and responsibilities of all parties involved in the backup restoration testing process. Responsibilities are expressed using a RACI framework: **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

### 8.1 RACI Matrix

| Activity | Head of IT Operations | IT Operations Team | System Owners | Information Security | Internal Audit | Risk Management | CISO / CTO |
|---|---|---|---|---|---|---|---|
| Define backup and recovery policy | C | R | C | C | I | C | A |
| Maintain system tier classification register | R | C | R | C | I | C | A |
| Schedule and plan quarterly restoration tests | A | R | C | I | I | I | I |
| Execute backup restoration tests | I | R | C | C | I | I | I |
| Perform data integrity verification | I | R | C | C | I | I | I |
| Document test results | A | R | I | I | I | I | I |
| Review test results and findings | A | C | C | C | C | C | I |
| Sign off individual system test results | I | I | R | I | I | I | I |
| Approve the final test report | I | I | I | C | I | C | A |
| Track remediation action items to closure | A | R | C | C | I | C | I |
| Report to Board / Risk Committee | I | I | I | I | I | C | A |
| Retain test evidence for audit purposes | A | R | I | C | I | I | I |

### 8.2 Key Contacts for This Test Cycle

| Role | Name | Department | Contact |
|---|---|---|---|
| Report Owner / Head of IT Operations | [Name] | IT Operations | [Email] |
| Lead Test Engineer | [Name] | IT Operations | [Email] |
| Information Security Representative | [Name] | Information Security | [Email] |
| Internal Audit Liaison | [Name] | Internal Audit | [Email] |
| [System Name] System Owner | [Name] | [Business Unit] | [Email] |
| [System Name] System Owner | [Name] | [Business Unit] | [Email] |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Name / Role] | Initial version — [Quarter Year] quarterly test results |
| [1.1] | [Date] | [Name / Role] | [e.g., Updated remediation action statuses following management review] |
| [2.0] | [Date] | [Name / Role] | [Description] |

### 9.2 Document Review Schedule

This report is subject to quarterly production in alignment with [Organization Name]'s backup restoration testing schedule. Each report instance constitutes a standalone record and must be retained for a minimum of [define retention period, e.g., 7 years] in accordance with regulatory requirements and [Organization Name]'s Records Retention Policy [Document ID].

| Review Trigger | Frequency | Responsible Party |
|---|---|---|
| Scheduled quarterly test cycle | Quarterly | Head of IT Operations |
| Material change to backup infrastructure or tooling | Ad hoc | Head of IT Operations |
| Post-incident restoration exercise | As required | Head of IT Operations |
| BNM examination or internal audit request | As required | Head of IT Operations / CISO |

### 9.3 Approval Sign-Off

*This report must be reviewed and approved by the designated approvers before it is considered final and filed for regulatory record-keeping purposes.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of IT Operations | [Name] | _________________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | _________________________ | [Date] |
| Chief Technology Officer (CTO) | [Name] | _________________________ | [Date] |
| Head of Risk Management | [Name] | _________________________ | [Date] |
| Internal Audit Representative | [Name] | _________________________ | [Date] |

> **Filing Instruction:** Once approved, the original signed copy of this report must be stored in [Document Repository / Location]. A copy must be provided to Internal Audit and retained as evidence against BNM RMiT Clause 10.45 compliance.

---

## 10. References

The following regulatory documents, internal policies, and standards are referenced in or underpin this report.

### 10.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clause(s) | URL / Location |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.45 | [BNM Official Website] |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Clauses 10.40–10.44 — Backup Management] | [BNM Official Website] |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | [Relevant sections on data integrity and availability] | [Attorney General's Chambers] |
| [NACSA CCoP / other] | [Title] | [NACSA / Other body] | [Relevant section] | [Location] |

### 10.2 Internal Policy References

| Document ID | Document Title | Owner | Version | Location |
|---|---|---|---|---|
| [Doc ID] | Backup Management Policy | Head of IT Operations | [Version] | [Internal repository path] |
| [Doc ID] | Technology Disaster Recovery Plan (DRP) | Head of IT Operations / CISO | [Version] | [Internal repository path] |
| [Doc ID] | Business Continuity Plan (BCP) | [Business Continuity Manager] | [Version] | [Internal repository path] |
| [Doc ID] | IT Security Policy | CISO | [Version] | [Internal repository path] |
| [Doc ID] | Records Retention Policy | [Compliance / Legal] | [Version] | [Internal repository path] |
| [Doc ID] | Backup and Recovery Procedures | IT Operations | [Version] | [Internal repository path] |

---

## 11. Appendices

### Appendix A — Backup Job Completion Logs

*Attach or reference the automated backup job completion logs for the test period. Logs should confirm successful backup completion for all systems in scope prior to the restoration test.*

> **Reference:** [Location of logs, e.g., Backup management console report export, file path, or ticket reference]

| System | Log Reference | Date Range | Format | Attached? |
|---|---|---|---|---|
| [System Name] | [Log ID / filename] | [Date range] | [e.g., PDF export / CSV] | [Yes / No — if No, state location] |
| [System Name] | [Log ID / filename] | [Date range] | [e.g., PDF export / CSV] | [Yes / No] |

---

### Appendix B — Data Integrity Verification Evidence

*Attach hash/checksum comparison outputs, record count verifications, and application smoke test results for each system tested.*

| System | Verification Method | Pre-Restoration Hash / Count | Post-Restoration Hash / Count | Match? | Evidence Reference |
|---|---|---|---|---|---|
| [System Name] | [SHA-256 / Record Count] | [Value] | [Value] | [Yes / No] | [File / attachment reference] |
| [System Name] | [SHA-256 / Record Count] | [Value] | [Value] | [Yes / No] | [File / attachment reference] |

---

### Appendix C — System Owner Sign-Off Sheets

*Individual sign-off sheets from system owners confirming acceptance of restoration test results for their respective systems. Attach signed copies below or reference the filing location.*

> **Reference:** [Filing location for signed system owner sign-off sheets]

| System | System Owner | Sign-Off Date | Result Accepted? | Notes |
|---|---|---|---|---|
| [System Name] | [Name] | [Date] | [Yes / No] | [Any caveats or conditions noted by system owner] |
| [System Name] | [Name] | [Date] | [Yes / No] | [Notes] |

---

### Appendix D — Remediation Tracking Register (Carried Forward)

*This appendix captures all open remediation items from prior quarters that have not yet been fully closed. Items should be transferred to the active remediation action plan in Section 7.3 of the current quarter's report once evidence of closure is obtained.*

| Action ID | Origin Quarter | System Affected | Description | Original Target Date | Revised Target Date | Current Status | Responsible Owner |
|---|---|---|---|---|---|---|---|
| [A-xxx] | [Q# Year] | [System Name] | [Description] | [Date] | [Date] | [In Progress / Escalated] | [Name / Role] |

---

### Appendix E — Glossary of Terms

| Term | Definition |
|---|---|
| **Backup** | A copy of data stored separately from the original, used to restore data in the event of loss, corruption, or disaster |
| **BCP** | Business Continuity Plan — a documented plan for maintaining business operations during and after a disruptive event |
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia |
| **DRP** | Technology Disaster Recovery Plan — a documented plan for restoring IT systems and services following a disaster |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss, measured in time |
| **RTO** | Recovery Time Objective — the maximum acceptable duration for restoring a system to operational status |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk management for financial institutions |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles in a process |
| **Tier 1 / 2 / 3 / 4** | System criticality classification tiers as defined in [Organization Name]'s DRP and this document |
| **[Add terms as required]** | [Definition] |

---

*This document is classified as **Confidential**. It must not be shared outside [Organization Name] without prior written approval from the Head of IT Operations or CISO. Unauthorised disclosure may constitute a breach of [Organization Name]'s Information Security Policy and applicable Malaysian law.*

*© [Organization Name] [Year]. All rights reserved.*