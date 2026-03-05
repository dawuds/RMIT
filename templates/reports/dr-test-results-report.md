# Disaster Recovery Test Results Report

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

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorized personnel involved in IT operations, risk management, and regulatory compliance. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [RPO and RTO Definitions Per Tier](#4-rpo-and-rto-definitions-per-tier)
5. [Backup Schedule and Retention Periods](#5-backup-schedule-and-retention-periods)
6. [Restoration Testing Results](#6-restoration-testing-results)
7. [Key Findings and Observations](#7-key-findings-and-observations)
8. [Business Impact Analysis](#8-business-impact-analysis)
9. [Recovery Priority Tiers](#9-recovery-priority-tiers)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Executive Summary

*Provide a concise, management-level summary of the DR test exercise including overall outcomes, critical findings, and the organization's current state of DR readiness. This section should be self-contained for senior leadership review.*

### 1.1 Test Overview

| Field | Details |
|---|---|
| **Test Exercise Name** | [DR Test Exercise Name / Reference Number] |
| **Test Type** | [Full Failover / Partial Failover / Tabletop / Simulation] |
| **Test Date(s)** | [DD Month YYYY – DD Month YYYY] |
| **Test Duration** | [X hours / X days] |
| **Test Location** | [Primary Site / DR Site / Cloud Environment] |
| **DR Site Location** | [DR Site Address / Cloud Region] |
| **Test Coordinator** | [Name, Title] |
| **Overall Test Outcome** | [PASS / PASS WITH OBSERVATIONS / FAIL] |

### 1.2 Summary of Results

*Summarize the pass/fail status of the DR test against defined RTO and RPO targets across all tested systems and tiers.*

| Recovery Tier | Systems Tested | RTO Target | Actual RTO | RPO Target | Actual RPO | Outcome |
|---|---|---|---|---|---|---|
| Tier 1 – Critical | [System Names] | [X hrs] | [X hrs] | [X mins] | [X mins] | [PASS / FAIL] |
| Tier 2 – High | [System Names] | [X hrs] | [X hrs] | [X hrs] | [X hrs] | [PASS / FAIL] |
| Tier 3 – Medium | [System Names] | [X hrs] | [X hrs] | [X hrs] | [X hrs] | [PASS / FAIL] |
| Tier 4 – Low | [System Names] | [X hrs] | [X hrs] | [X hrs] | [X hrs] | [PASS / FAIL] |

### 1.3 Key Highlights

- **Total Systems Tested:** [X]
- **Systems Meeting RTO/RPO:** [X] ([X]%)
- **Systems Failing RTO/RPO:** [X] ([X]%)
- **Critical Issues Identified:** [X]
- **Remediation Actions Required:** [X]
- **Estimated Remediation Completion:** [DD Month YYYY]

### 1.4 Management Attestation

*The Head of IT Operations confirms that the DR test was conducted in accordance with [Organization Name]'s approved DR Test Plan and the results accurately reflect the organization's disaster recovery capabilities as at the test date.*

> **[Head of IT Operations Name]**
> Head of IT Operations, [Organization Name]
> Date: [DD Month YYYY]

---

## 2. Purpose and Scope

### 2.1 Purpose

This Disaster Recovery (DR) Test Results Report documents the outcomes of DR testing conducted by [Organization Name] in compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, with specific reference to **Clause 10.32**.

The purpose of this report is to:

- Provide evidence that [Organization Name] has conducted DR testing as required under BNM RMiT Clause 10.32
- Validate that Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) for critical systems and business functions can be achieved within defined thresholds
- Identify gaps, deficiencies, and areas for improvement in DR capabilities
- Demonstrate organizational readiness to maintain operational continuity in the event of a technology disruption or disaster
- Serve as an auditable record for BNM supervisory review and internal governance purposes

### 2.2 Regulatory Context

This document is produced in accordance with the following regulatory obligations:

| Regulation / Standard | Clause / Section | Requirement |
|---|---|---|
| BNM RMiT Policy Document | Clause 10.32 | DR testing and validation of RTO/RPO |
| BNM RMiT Policy Document | [Additional Clauses] | [Description] |
| [Other Applicable Standard] | [Clause] | [Description] |

BNM RMiT Clause 10.32 requires financial institutions to test their disaster recovery arrangements at a frequency commensurate with the criticality of the systems and functions being recovered, and to ensure that recovery objectives are validated through actual testing rather than assumption.

### 2.3 Document Scope

This report covers:

- **In-Scope Systems:** [List of systems, applications, and infrastructure included in this DR test]
- **In-Scope Business Functions:** [List of business functions and processes covered]
- **Test Period:** [Start Date] to [End Date]
- **Reporting Period:** [Quarter/Year, e.g., Q1 2025]

**Out of Scope:**

- [System or function explicitly excluded, with reason]
- [System or function explicitly excluded, with reason]

---

## 3. Scope and Methodology

### 3.1 Test Objectives

*Describe the specific objectives set for this DR test exercise. Each objective should be measurable and directly linked to RTO/RPO targets or capability requirements.*

The following objectives were established for this DR test exercise:

1. Validate that all Tier 1 (Critical) systems can be recovered within defined RTO and RPO thresholds
2. Confirm integrity and completeness of backup data restored at the DR site
3. Verify that communication and escalation procedures function as documented
4. Test the effectiveness of the DR runbooks and recovery procedures
5. Identify any single points of failure or procedural gaps not previously documented
6. [Additional Objective]

### 3.2 Test Type and Approach

| Attribute | Details |
|---|---|
| **Test Type** | [Full Failover / Partial Failover / Parallel Test / Tabletop Exercise / Simulation] |
| **Test Scenario** | [e.g., Primary data centre declared unavailable due to unplanned outage] |
| **Trigger Assumption** | [e.g., Zero-day notice, catastrophic failure of primary site] |
| **Recovery Mode** | [Hot standby / Warm standby / Cold standby] |
| **Data Replication Method** | [Synchronous / Asynchronous / Backup-based] |

### 3.3 Test Scenario Description

*Describe the simulated disaster scenario used for this test exercise. Be specific about the assumed failure conditions and the scope of impact.*

**Scenario:** [e.g., Complete loss of primary data centre at [Location] due to a simulated total power failure and network outage, requiring full failover to the DR site at [Location].]

**Assumed Conditions:**
- [Condition 1, e.g., Primary data centre is inaccessible and declared a disaster at [Time]]
- [Condition 2, e.g., Last known good backup is from [Time] on [Date]]
- [Condition 3, e.g., DR team is activated and operating from [Location]]
- [Additional assumed condition]

### 3.4 Test Participants

| Role | Name | Department | Responsibilities |
|---|---|---|---|
| Test Coordinator | [Name] | IT Operations | Overall coordination and documentation |
| DR Site Lead | [Name] | IT Infrastructure | On-site recovery execution at DR site |
| Application Lead – Core Banking | [Name] | Application Management | Core banking system recovery |
| Application Lead – [System] | [Name] | [Department] | [System] recovery |
| Network Engineer | [Name] | IT Infrastructure | Network failover and connectivity |
| Security Officer | [Name] | Information Security | Security controls validation during DR |
| Business Representative – [Unit] | [Name] | [Business Unit] | Business function validation |
| Observer / Auditor | [Name] | [Internal Audit / Risk] | Independent observation and documentation |

### 3.5 Pre-Test Conditions and Prerequisites

*Document the state of systems, backups, and prerequisites verified prior to test commencement.*

- [ ] DR Test Plan approved and distributed to all participants
- [ ] DR site readiness confirmed by DR Site Lead
- [ ] All critical backup jobs verified as completed successfully prior to test
- [ ] Communication channels established and tested (primary and secondary)
- [ ] Rollback plan reviewed and approved
- [ ] Business sign-off on test window obtained from [Business Continuity Manager]
- [ ] BNM notification submitted (if applicable): [Reference Number / N/A]
- [ ] [Additional prerequisite]

---

## 4. RPO and RTO Definitions Per Tier

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Recovery Time Objective (RTO)** | The maximum acceptable duration of time within which a system, application, or business function must be restored following a disruption |
| **Recovery Point Objective (RPO)** | The maximum acceptable amount of data loss measured in time; the point in time to which data must be recovered following a disruption |
| **Maximum Tolerable Downtime (MTD)** | The total length of time a business function can be unavailable before it results in unacceptable consequences to the organization |
| **Recovery Level Objective (RLO)** | The minimum level of functionality that must be restored for a business function to resume operations |

### 4.2 Recovery Tier Classification

*Define the recovery tiers used by [Organization Name] and the corresponding RTO/RPO targets approved by senior management and validated through BIA.*

| Tier | Classification | RTO Target | RPO Target | MTD | Description |
|---|---|---|---|---|---|
| **Tier 1** | Critical | ≤ [X] hours | ≤ [X] minutes | ≤ [X] hours | Systems/functions whose failure immediately impacts regulatory obligations, customer transactions, or systemic risk |
| **Tier 2** | High | ≤ [X] hours | ≤ [X] hours | ≤ [X] hours | Systems/functions whose failure significantly impacts core business operations within hours |
| **Tier 3** | Medium | ≤ [X] hours | ≤ [X] hours | ≤ [X] hours | Systems/functions whose failure impacts operations but can be tolerated for a limited period |
| **Tier 4** | Low | ≤ [X] days | ≤ [X] days | ≤ [X] days | Systems/functions that are important but can be recovered on a best-effort basis |

### 4.3 System Tier Assignment

| System / Application | Business Function | Assigned Tier | Rationale | Last BIA Review |
|---|---|---|---|---|
| [Core Banking System] | Payments, Deposits, Loans | Tier 1 | Directly supports customer transactions and regulatory reporting | [Date] |
| [Internet Banking Portal] | Customer self-service | Tier 1 | Customer-facing; reputational and regulatory impact | [Date] |
| [SWIFT / Payment Gateway] | Interbank settlement | Tier 1 | Systemic risk; BNM reporting obligations | [Date] |
| [Risk Management System] | Regulatory reporting | Tier 2 | Required for daily/weekly regulatory submissions | [Date] |
| [HR System] | Human resources | Tier 3 | Operational impact; no immediate regulatory consequence | [Date] |
| [Document Management] | Internal operations | Tier 4 | Administrative; recoverable over days | [Date] |
| [Add System] | [Function] | [Tier] | [Rationale] | [Date] |

---

## 5. Backup Schedule and Retention Periods

### 5.1 Backup Policy Summary

*Summarize the organization's backup policy as it applies to systems within scope of this DR test. Reference the approved Backup and Recovery Policy document.*

**Reference Document:** [Backup and Recovery Policy – Document ID: XXXXX, Version X.X]

### 5.2 Backup Schedule

| System / Data Set | Backup Type | Frequency | Backup Window | Backup Method | Target Storage | Encryption |
|---|---|---|---|---|---|---|
| [Core Banking DB] | Full | Daily | [Time] | [Snapshot / Agent-based] | [On-site + Off-site] | AES-256 |
| [Core Banking DB] | Incremental | Hourly | [Time] | [Log shipping / CDC] | [On-site + Off-site] | AES-256 |
| [Core Banking DB] | Transaction Log | Continuous | N/A | [Replication] | [DR Site] | AES-256 |
| [Application Server] | Full | Weekly | [Time] | [Image-based] | [On-site + Off-site] | AES-256 |
| [Configuration Files] | Full | Daily | [Time] | [File-based] | [Off-site] | AES-256 |
| [Add System] | [Type] | [Frequency] | [Window] | [Method] | [Target] | [Enc.] |

### 5.3 Retention Periods

| Data Classification | Backup Type | Retention Period | Storage Location | Disposal Method |
|---|---|---|---|---|
| Critical (Tier 1) | Daily Full | [X] days | [Primary + DR + Offsite] | Secure erasure per [Policy] |
| Critical (Tier 1) | Weekly Full | [X] weeks | [Primary + Offsite] | Secure erasure per [Policy] |
| Critical (Tier 1) | Monthly Full | [X] months | [Offsite / Tape] | Secure erasure per [Policy] |
| Critical (Tier 1) | Annual Archive | [X] years | [Archival Storage] | Secure erasure per [Policy] |
| High (Tier 2) | Daily Full | [X] days | [Primary + Offsite] | Secure erasure per [Policy] |
| Medium / Low (Tier 3-4) | Weekly Full | [X] weeks | [Primary] | Secure erasure per [Policy] |
| [Regulatory Records] | [Type] | [7 years minimum per BNM] | [Archival] | Approval required |

### 5.4 Backup Verification Status (Pre-Test)

*Document the verification of backup integrity and completeness prior to the DR test exercise.*

| System | Last Successful Full Backup | Backup Size | Integrity Check | Verified By | Status |
|---|---|---|---|---|---|
| [Core Banking DB] | [DD Month YYYY HH:MM] | [X GB] | Checksum verified | [Name] | ✓ Verified |
| [System Name] | [DD Month YYYY HH:MM] | [X GB] | Checksum verified | [Name] | ✓ Verified |
| [System Name] | [DD Month YYYY HH:MM] | [X GB] | [Method] | [Name] | [Status] |

---

## 6. Restoration Testing Results

### 6.1 Test Execution Timeline

*Provide a chronological account of the DR test exercise, documenting key milestones, decisions, and events.*

| Time | Event / Milestone | Responsible | Notes |
|---|---|---|---|
| [HH:MM] | DR test exercise commenced; disaster scenario activated | [Test Coordinator] | All participants confirmed ready |
| [HH:MM] | DR declaration made; DR runbooks initiated | [DR Coordinator] | |
| [HH:MM] | Network failover to DR site initiated | [Network Engineer] | |
| [HH:MM] | Network connectivity at DR site confirmed | [Network Engineer] | |
| [HH:MM] | [System Name] restoration commenced | [App Lead] | |
| [HH:MM] | [System Name] restoration completed; application validation initiated | [App Lead] | |
| [HH:MM] | [System Name] validated and declared operational | [Business Rep] | RTO: [X hrs X mins] |
| [HH:MM] | [Additional Milestone] | [Responsible] | |
| [HH:MM] | All Tier 1 systems declared operational | [Test Coordinator] | |
| [HH:MM] | Business validation of Tier 1 functions completed | [Business Reps] | |
| [HH:MM] | DR test exercise concluded; failback initiated | [Test Coordinator] | |
| [HH:MM] | Full failback to primary site completed | [DR Site Lead] | |

### 6.2 System-Level Restoration Results

*Document the detailed restoration results for each system tested, including actual RTO and RPO achieved versus targets.*

#### 6.2.1 Tier 1 – Critical Systems

| System | Start Time | Recovery Complete | Actual RTO | RTO Target | RTO Outcome | Last Backup Used | Data Loss (Actual RPO) | RPO Target | RPO Outcome | Validated By |
|---|---|---|---|---|---|---|---|---|---|---|
| [Core Banking System] | [HH:MM] | [HH:MM] | [X hr X min] | [X hrs] | **PASS** | [DD/MM HH:MM] | [X mins] | [X mins] | **PASS** | [Name] |
| [Internet Banking] | [HH:MM] | [HH:MM] | [X hr X min] | [X hrs] | **PASS** | [DD/MM HH:MM] | [X mins] | [X mins] | **PASS** | [Name] |
| [Payment Gateway] | [HH:MM] | [HH:MM] | [X hr X min] | [X hrs] | **FAIL** | [DD/MM HH:MM] | [X mins] | [X mins] | **PASS** | [Name] |
| [System Name] | [HH:MM] | [HH:MM] | [X hr X min] | [X hrs] | [Outcome] | [DD/MM HH:MM] | [X mins] | [X mins] | [Outcome] | [Name] |

#### 6.2.2 Tier 2 – High Priority Systems

| System | Actual RTO | RTO Target | RTO Outcome | Actual RPO | RPO Target | RPO Outcome | Validated By |
|---|---|---|---|---|---|---|---|
| [System Name] | [X hrs] | [X hrs] | [PASS/FAIL] | [X hrs] | [X hrs] | [PASS/FAIL] | [Name] |
| [System Name] | [X hrs] | [X hrs] | [PASS/FAIL] | [X hrs] | [X hrs] | [PASS/FAIL] | [Name] |

#### 6.2.3 Tier 3 – Medium Priority Systems

| System | Actual RTO | RTO Target | RTO Outcome | Actual RPO | RPO Target | RPO Outcome | Validated By |
|---|---|---|---|---|---|---|---|
| [System Name] | [X hrs] | [X hrs] | [PASS/FAIL] | [X hrs] | [X hrs] | [PASS/FAIL] | [Name] |

### 6.3 Data Integrity Validation

*Document the results of data integrity checks performed following restoration to confirm completeness and accuracy of recovered data.*

| System | Validation Method | Records Expected | Records Recovered | Discrepancies | Integrity Result | Validated By |
|---|---|---|---|---|---|---|
| [Core Banking DB] | Row count + checksum | [X,XXX,XXX] | [X,XXX,XXX] | None | **PASS** | [Name] |
| [System Name] | [Method] | [Count] | [Count] | [Details / None] | [PASS/FAIL] | [Name] |

### 6.4 Application Functionality Validation

*Record the results of functional testing performed after restoration to confirm that applications are operating correctly.*

| System | Test Scenario | Expected Result | Actual Result | Outcome | Tested By |
|---|---|---|---|---|---|
| [Core Banking] | Process a test financial transaction | Transaction posts successfully | [Result] | [PASS/FAIL] | [Name] |
| [Core Banking] | Generate end-of-day report | Report generated without errors | [Result] | [PASS/FAIL] | [Name] |
| [Internet Banking] | Customer login and balance enquiry | Login succeeds; balance displayed | [Result] | [PASS/FAIL] | [Name] |
| [Payment Gateway] | Initiate interbank transfer | Transfer instruction submitted | [Result] | [PASS/FAIL] | [Name] |
| [System Name] | [Test Case] | [Expected] | [Actual] | [Outcome] | [Name] |

---

## 7. Key Findings and Observations

### 7.1 Findings Summary

*Summarize all significant findings from the DR test, categorized by severity. All findings must be assigned an owner and target remediation date.*

| Finding ID | Severity | System Affected | Finding Description | Root Cause | Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| DR-[YYYY]-001 | **Critical** | [System Name] | [Description of critical issue] | [Root cause] | [Owner] | [DD/MM/YYYY] | Open |
| DR-[YYYY]-002 | **High** | [System Name] | [Description of high severity issue] | [Root cause] | [Owner] | [DD/MM/YYYY] | Open |
| DR-[YYYY]-003 | **Medium** | [System Name] | [Description of medium issue] | [Root cause] | [Owner] | [DD/MM/YYYY] | Open |
| DR-[YYYY]-004 | **Low** | [System Name] | [Description of low severity observation] | [Root cause] | [Owner] | [DD/MM/YYYY] | Open |

**Severity Definitions:**

| Severity | Definition |
|---|---|
| **Critical** | RTO or RPO breached for Tier 1 system; immediate remediation required |
| **High** | RTO or RPO breached for Tier 2 system, or significant procedural gap identified |
| **Medium** | Minor deviation from target; process improvement required |
| **Low** | Observation or enhancement recommendation; no material impact on DR capability |

### 7.2 Detailed Findings

#### Finding DR-[YYYY]-001: [Finding Title]

| Attribute | Details |
|---|---|
| **Finding ID** | DR-[YYYY]-001 |
| **Severity** | Critical |
| **System / Component** | [System Name] |
| **Test Phase** | [Recovery / Validation / Failback] |
| **Description** | [Detailed description of the finding] |
| **Evidence** | [Screenshots, log files, timestamps – reference Appendix X] |
| **Root Cause** | [Identified or suspected root cause] |
| **Impact** | [Impact on RTO/RPO or business function] |
| **Recommendation** | [Specific, actionable remediation step] |
| **Owner** | [Name, Title] |
| **Target Completion** | [DD Month YYYY] |

---

*Repeat the above table for each finding.*

---

### 7.3 Positive Observations

*Document aspects of the DR test that performed well and should be recognized.*

- [Positive observation 1, e.g., Core banking restoration was completed 15 minutes ahead of the RTO target]
- [Positive observation 2, e.g., Communication protocols between primary and DR site teams were effective and well-coordinated]
- [Positive observation 3]

### 7.4 Comparison with Previous Test Results

*Compare the results of this test with the previous DR test to identify trends and improvement or regression.*

| Metric | Previous Test ([Quarter/Year]) | This Test ([Quarter/Year]) | Trend |
|---|---|---|---|
| Tier 1 RTO Achievement Rate | [X]% | [X]% | ↑ Improved / ↓ Regressed / → Stable |
| Tier 1 RPO Achievement Rate | [X]% | [X]% | ↑ / ↓ / → |
| Total Findings | [X] | [X] | ↑ / ↓ / → |
| Critical Findings | [X] | [X] | ↑ / ↓ / → |
| Overall Test Outcome | [Pass/Fail] | [Pass/Fail] | — |

---

## 8. Business Impact Analysis

### 8.1 BIA Overview

*Summarize the Business Impact Analysis (BIA) findings that underpin the DR strategy and tier assignments. Reference the current approved BIA document.*

**Reference Document:** [Business Impact Analysis – Document ID: XXXXX, Version X.X, Date: DD Month YYYY]

The BIA was last reviewed and approved on [DD Month YYYY]. The next scheduled review is [DD Month YYYY].

### 8.2 Critical Business Functions and Impact Assessment

| Business Function | Process Owner | MTD | Financial Impact per Hour | Reputational Impact | Regulatory Impact | Assigned Tier |
|---|---|---|---|---|---|---|
| [Retail Payments Processing] | [Name] | [X hrs] | [RM X,XXX] | High | High – BNM reporting | Tier 1 |
| [Interbank Settlement] | [Name] | [X hrs] | [RM X,XXX] | High | High – Systemic risk | Tier 1 |
| [Customer Onboarding] | [Name] | [X hrs] | [RM X,XXX] | Medium | Medium | Tier 2 |
| [Trade Finance] | [Name] | [X hrs] | [RM X,XXX] | Medium | Medium | Tier 2 |
| [Internal Reporting] | [Name] | [X hrs] | [RM X,XXX] | Low | Low | Tier 3 |
| [Add Function] | [Name] | [X hrs] | [RM X,XXX] | [Level] | [Level] | [Tier] |

### 8.3 Impact of This Test on Business Operations

*Document any actual impact on business operations caused by the DR test exercise itself, and measures taken to mitigate such impact.*

| Area | Planned Impact | Actual Impact | Mitigation Measure | Outcome |
|---|---|---|---|---|
| Customer Services | [Planned downtime/degradation] | [Actual impact] | [Mitigation] | [Outcome] |
| Interbank Transactions | [Planned impact] | [Actual impact] | [Mitigation] | [Outcome] |
| Staff Productivity | [Planned impact] | [Actual impact] | [Mitigation] | [Outcome] |

### 8.4 BIA Review Recommendations

*Based on the DR test results, identify any areas where the BIA may require updating.*

- [ ] [Business function] tier classification to be reviewed — actual recovery time suggests current tier may be incorrect
- [ ] MTD for [function] to be validated with business unit — test results indicate extended recovery time
- [ ] [Additional BIA update recommendation]

---

## 9. Recovery Priority Tiers

### 9.1 Recovery Sequence

*Define the approved sequence for system recovery during a declared disaster, consistent with the BIA and DR Plan.*

**Reference Document:** [Disaster Recovery Plan – Document ID: XXXXX, Version X.X]

### 9.2 Recovery Wave Sequencing

| Wave | Recovery Window | Systems / Functions | Dependencies | Responsible Team |
|---|---|---|---|---|
| **Wave 1** | 0 – [X] hrs | [Core infrastructure: network, DNS, AD, security controls] | None | IT Infrastructure |
| **Wave 2** | [X] – [X] hrs | [Tier 1 applications: Core Banking, Payment Gateway] | Wave 1 complete | Application Management |
| **Wave 3** | [X] – [X] hrs | [Tier 1 applications: Internet Banking, Customer Portal] | Wave 2 complete | Application Management |
| **Wave 4** | [X] – [X] hrs | [Tier 2 applications: Risk System, Reporting] | Wave 2 complete | Application Management |
| **Wave 5** | [X] – [X] hrs | [Tier 3 applications: HR, Document Management] | Wave 4 complete | IT Operations |
| **Wave 6** | [X]+ hrs | [Tier 4 systems and archived data restoration] | Wave 5 complete | IT Operations |

### 9.3 Recovery Dependencies

*Document critical inter-system dependencies that affect recovery sequencing.*

| System | Depends On | Dependency Type | Impact if Dependency Unavailable |
|---|---|---|---|
| [Core Banking System] | [Database Server] | Hard dependency | Cannot start |
| [Core Banking System] | [Active Directory / LDAP] | Authentication | Degraded – local accounts only |
| [Internet Banking] | [Core Banking System] | Data dependency | Cannot start |
| [Payment Gateway] | [Core Banking System] | Transaction dependency | Cannot process payments |
| [Regulatory Reporting] | [Core Banking DB] | Data dependency | Cannot generate reports |
| [System Name] | [Dependency] | [Type] | [Impact] |

### 9.4 Validation of Recovery Sequence Against Test Results

*Assess whether the planned recovery sequence was followed during the test and whether adjustments are recommended.*

| Wave | Planned Completion | Actual Completion | Variance | Outcome | Comments |
|---|---|---|---|---|---|
| Wave 1 – Infrastructure | [HH:MM] | [HH:MM] | [+/- X mins] | [On/Off target] | [Notes] |
| Wave 2 – Tier 1 Apps | [HH:MM] | [HH:MM] | [+/- X mins] | [On/Off target] | [Notes] |
| Wave 3 – Tier 1 Apps | [HH:MM] | [HH:MM] | [+/- X mins] | [On/Off target] | [Notes] |
| Wave 4 – Tier 2 Apps | [HH:MM] | [HH:MM] | [+/- X mins] | [On/Off target] | [Notes] |

---

## 10. Roles and Responsibilities

### 10.1 RACI Matrix – DR Testing

*The following RACI matrix defines the roles and responsibilities for DR test planning, execution, and reporting.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of IT Operations | IT Infrastructure | Application Management | Information Security | Business Continuity Manager | Business Unit Heads | Internal Audit | Senior Management |
|---|---|---|---|---|---|---|---|---|
| DR Test Planning and Scheduling | A | R | C | C | C | I | I | I |
| DR Test Plan Approval | A | I | I | C | C | C | I | I |
| Pre-Test Backup Verification | A | R | R | C | I | I | I | I |
| DR Site Readiness Check | A | R | C | C | I | I | I | I |
| DR Test Execution | A | R | R | C | C | C | O | I |
| Business Function Validation | C | I | I | I | R | A | O | I |
| Findings Documentation | A | R | R | C | C | I | I | I |
| DR Test Results Report (this document) | A | C | C | C | C | I | C | I |
| Remediation Planning | A | R | R | R | C | C | I | I |
| Remediation Tracking | A | C | C | C | R | I | C | I |
| BNM Notification (if required) | A | I | I | C | R | I | C | I |
| Senior Management Reporting | A | I | I | I | C | C | I | R |
| BIA Review and Update | C | I | I | C | A | R | I | C |

*O = Observer (no active role; attends for audit/governance purposes)*

### 10.2 Key Contacts – DR Test Team

| Role | Name | Contact Number | Email | Backup Contact |
|---|---|---|---|---|
| Head of IT Operations | [Name] | [Number] | [Email] | [Backup Name] |
| DR Coordinator | [Name] | [Number] | [Email] | [Backup Name] |
| DR Site Lead | [Name] | [Number] | [Email] | [Backup Name] |
| Business Continuity Manager | [Name] | [Number] | [Email] | [Backup Name] |
| CISO / Information Security | [Name] | [Number] | [Email] | [Backup Name] |
| [Add Role] | [Name] | [Number] | [Email] | [Backup Name] |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Reviewed By | Changes / Description |
|---|---|---|---|---|
| 0.1 | [DD Month YYYY] | [Name] | — | Initial draft |
| 0.2 | [DD Month YYYY] | [Name] | [Name] | Incorporated review comments from [IT Infrastructure / Business] |
| 1.0 | [DD Month YYYY] | [Name] | [Name] | Final version approved for issuance |

### 11.2 Approval Sign-Off

*This document requires the approval of the following designated authority holders prior to issuance. Electronic or wet signatures are acceptable. A signed copy must be retained in the Document Management System under [Reference Folder Path].*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of IT Operations | [Name] | __________________ | [DD Month YYYY] |
| Chief Information Officer | [Name] | __________________ | [DD Month YYYY] |
| Chief Risk Officer | [Name] | __________________ | [DD Month YYYY] |
| Business Continuity Manager | [Name] | __________________ | [DD Month YYYY] |
| [Additional Approver] | [Name] | __________________ | [DD Month YYYY] |

### 11.3 Distribution List

| Recipient | Role / Department | Copy Type | Date Distributed |
|---|---|---|---|
| [Name] | Senior Management | Full Document | [Date] |
| [Name] | Internal Audit | Full Document | [Date] |
| [Name] | Risk Management | Full Document | [Date] |
| [Name] | IT Leadership | Full Document | [Date] |
| BNM (if requested) | Regulator | Full Document | [Date] |
| [Name] | [Department] | [Summary / Full] | [Date] |

---

## 12. References

| Reference | Document Title | Clause / Section | Relevance to This Report |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.32 | DR testing requirements, RTO/RPO validation |
| BNM RMiT | Risk Management in Technology Policy Document | [Clause 10.x] | [Relevant requirement] |
| [Internal Policy] | Disaster Recovery Plan | All | Governs DR execution procedures |
| [Internal Policy] | Business Continuity Plan | All | Governs business continuity during disruption |
| [Internal Policy] | Backup and Recovery Policy | All | Governs backup schedules and retention |
| [Internal Policy] | Business Impact Analysis | All | Basis for tier classifications and MTD |
| [Internal Policy] | IT Risk Management Policy | All | IT risk governance framework |
| ISO 22301 | Business Continuity Management Systems | [Section] | International standard reference |
| ISO/IEC 27031 | Guidelines for ICT Readiness for Business Continuity | [Section] | ICT DR international standard |
| [Other Reference] | [Document Title] | [Section] | [Relevance] |

---

## 13. Appendices

### Appendix A – DR Test Plan Reference

*Reference or attach the approved DR Test Plan that governed this test exercise.*

> **Document Reference:** [DR Test Plan – Document ID: XXXXX, Version X.X, Approved Date: DD Month YYYY]
>
> *The approved DR Test Plan is maintained in [Document Management System] at [Folder Path]. A copy is available upon request from the Head of IT Operations.*

---

### Appendix B – Test Evidence and Screenshots

*Attach or reference supporting evidence collected during the DR test exercise to substantiate findings and results.*

| Evidence ID | Description | System | Timestamp | Collected By | Location |
|---|---|---|---|---|---|
| EVD-001 | Screenshot of [Core Banking] login screen post-recovery | [Core Banking] | [DD/MM HH:MM] | [Name] | [Path / System] |
| EVD-002 | System log extract confirming successful failover | [Infrastructure] | [DD/MM HH:MM] | [Name] | [Path / System] |
| EVD-003 | Transaction reconciliation report post-recovery | [Core Banking] | [DD/MM HH:MM] | [Name] | [Path / System] |
| EVD-004 | Network connectivity confirmation at DR site | [Network] | [DD/MM HH:MM] | [Name] | [Path / System] |
| EVD-005 | [Description of evidence] | [System] | [Timestamp] | [Name] | [Location] |

---

### Appendix C – Remediation Action Plan

*Detail all remediation actions arising from findings identified during the DR test, including owners, timelines, and escalation paths.*

| Action ID | Finding Ref | Action Description | Priority | Owner | Department | Target Date | Escalation If Overdue | Status |
|---|---|---|---|---|---|---|---|---|
| ACT-001 | DR-[YYYY]-001 | [Specific remediation action] | Critical | [Name] | [Dept] | [DD/MM/YYYY] | [Escalation Path] | Open |
| ACT-002 | DR-[YYYY]-002 | [Specific remediation action] | High | [Name] | [Dept] | [DD/MM/YYYY] | [Escalation Path] | Open |
| ACT-003 | DR-[YYYY]-003 | [Specific remediation action] | Medium | [Name] | [Dept] | [DD/MM/YYYY] | [Escalation Path] | Open |

*Remediation actions are subject to monthly tracking review by the IT Risk Committee. Critical and High actions overdue by more than 30 days must be escalated to the Chief Risk Officer.*

---

### Appendix D – Prior Test Results Tracker

*Maintain a rolling summary of DR test results across quarters for trend analysis and regulatory demonstration of continuous testing.*

| Test Period | Test Date | Test Type | Systems Tested | RTO Met | RPO Met | Overall Outcome | Critical Findings | Report Reference |
|---|---|---|---|---|---|---|---|---|
| [Q1 YYYY] | [DD/MM/YYYY] | [Type] | [X] | [X/X] | [X/X] | [Pass/Fail] | [X] | [Doc ID] |
| [Q2 YYYY] | [DD/MM/YYYY] | [Type] | [X] | [X/X] | [X/X] | [Pass/Fail] | [X] | [Doc ID] |
| [Q3 YYYY] | [DD/MM/YYYY] | [Type] | [X] | [X/X] | [X/X] | [Pass/Fail] | [X] | [Doc ID] |
| [Q4 YYYY] | [DD/MM/YYYY] | [Type] | [X] | [X/X] | [X/X] | [Pass/Fail] | [X] | [Doc ID] |

---

### Appendix E – Glossary

| Term | Definition |
|---|---|
| **BCP** | Business Continuity Plan |
| **BIA** | Business Impact Analysis |
| **BNM** | Bank Negara Malaysia |
| **DR** | Disaster Recovery |
| **DRP** | Disaster Recovery Plan |
| **MTD** | Maximum Tolerable Downtime |
| **NACSA** | National Cyber Security Agency |
| **RLO** | Recovery Level Objective |
| **RMiT** | Risk Management in Technology (BNM Policy Document) |
| **RPO** | Recovery Point Objective |
| **RTO** | Recovery Time Objective |
| **RACI** | Responsible, Accountable, Consulted, Informed |
| **[Add Term]** | [Definition] |

---

*End of Document*

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Last Updated** | [DD Month YYYY] |
| **Next Review** | [DD Month YYYY] |

*This document is subject to quarterly review or upon any material change to DR architecture, tier classification, or BNM regulatory requirements. All previous versions are superseded upon issuance of a new approved version.*