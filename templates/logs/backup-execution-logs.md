# Backup Execution Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |

---

## 1. Purpose and Scope

This document serves as the structured log template for recording and monitoring backup execution activities across all in-scope IT assets at [Organization Name]. It provides a continuous, auditable record of backup operations confirming successful completion, failure events, and restoration test outcomes.

This artifact is maintained in compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.44**, which mandates that financial institutions establish, maintain, and regularly test backup and recovery capabilities proportionate to the criticality of systems and data. Logs generated under this template support the institution's ability to demonstrate operational resilience and data recoverability to regulators, internal audit, and external assessors.

**Scope:** This log covers all production systems, databases, application servers, network configuration data, and other IT assets classified as in-scope under [Organization Name]'s IT Asset Management Policy. Out-of-scope items (e.g., development or sandbox environments not holding regulated data) must be documented as exclusions in Appendix A.

---

## 2. Asset and Item Identification

*For each asset or backup job entry, record the unique identifiers that allow unambiguous tracing of the backup event to a specific system or data set. Every log entry must reference a registered asset.*

| Field | Value |
|---|---|
| **Log Entry ID** | [Auto-generated / BEL-YYYY-MM-DD-NNNN] |
| **Backup Job Name** | [Job Name as configured in backup software] |
| **Asset ID** | [Asset ID from IT Asset Register] |
| **Asset Name / Hostname** | [Server Name / Database Name / Application Name] |
| **Asset Type** | [Server / Database / File Share / Network Device / Application] |
| **Environment** | [Production / DR / Pre-Production] |
| **Physical / Cloud Location** | [Data Centre Name / Cloud Region / Hybrid] |
| **IP Address / Endpoint** | [IP Address or FQDN] |
| **Backup Software / Tool** | [e.g., Veeam / Commvault / AWS Backup / Azure Backup] |
| **Backup Job ID (System-Generated)** | [Populated automatically by backup platform] |

---

## 3. Classification and Categorisation

*Classify each backed-up asset according to its data sensitivity and system criticality tier. Classification drives the applicable backup policy, retention period, and recovery priority. Align classifications with [Organization Name]'s Data Classification Policy and IT Asset Criticality Framework.*

### 3.1 Data Sensitivity Classification

| Classification Level | Description | Examples |
|---|---|---|
| **Restricted** | Highest sensitivity; regulatory, customer PII, financial records | Core banking data, customer account records, transaction logs |
| **Confidential** | Sensitive internal data; limited distribution | HR records, internal financial reports, audit logs |
| **Internal** | General internal use; not for public disclosure | IT documentation, system configurations |
| **Public** | Approved for external release | Published policies, marketing material |

**Classification Applied to This Asset:** [Select: Restricted / Confidential / Internal / Public]

### 3.2 System Criticality Tier

| Tier | Definition | RTO Target | RPO Target |
|---|---|---|---|
| **Tier 1 — Critical** | Systems whose failure causes immediate business or regulatory impact | ≤ 4 hours | ≤ 1 hour |
| **Tier 2 — Important** | Systems whose failure causes significant operational disruption | ≤ 24 hours | ≤ 4 hours |
| **Tier 3 — Standard** | Systems with manageable impact on failure | ≤ 72 hours | ≤ 24 hours |
| **Tier 4 — Non-Critical** | Systems with minimal operational dependency | ≤ 7 days | ≤ 48 hours |

**Criticality Tier Assigned:** [Tier 1 / Tier 2 / Tier 3 / Tier 4]

**Basis for Classification:** [Brief justification, e.g., "Core banking platform; directly supports customer-facing transaction processing"]

---

## 4. Owner and Custodian

*Record the accountable business owner and the technical custodian responsible for this asset's backup integrity. These must be named individuals, not generic role titles alone. Both parties are required to acknowledge quarterly review outcomes.*

| Role | Name | Department | Contact |
|---|---|---|---|
| **Asset / Data Owner** | [Full Name] | [Business Unit] | [Email / Extension] |
| **Technical Custodian** | [Full Name] | IT Operations | [Email / Extension] |
| **Backup Administrator** | [Full Name] | IT Operations | [Email / Extension] |
| **Alternate Contact** | [Full Name] | [Department] | [Email / Extension] |

**Escalation Path for Backup Failures:**

1. Backup Administrator notified automatically via [alerting platform]
2. Technical Custodian notified if unresolved within [X] minutes
3. Head of IT Operations escalated if unresolved within [X] hours
4. CISO / CIO notified for Tier 1 assets unresolved within [X] hours

---

## 5. RPO and RTO Definitions per Tier

*Define the Recovery Point Objective (RPO) and Recovery Time Objective (RTO) applicable to this asset based on its assigned criticality tier. These values must be approved by the Asset Owner and validated through restoration testing. RTO/RPO targets must be consistent with [Organization Name]'s Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP).*

### 5.1 RPO and RTO Summary for This Asset

| Parameter | Approved Target | Last Validated | Validation Method |
|---|---|---|---|
| **Recovery Point Objective (RPO)** | [e.g., ≤ 1 hour] | [Date] | [Full DR Test / Partial Restoration Test / Tabletop] |
| **Recovery Time Objective (RTO)** | [e.g., ≤ 4 hours] | [Date] | [Full DR Test / Partial Restoration Test / Tabletop] |
| **Maximum Tolerable Downtime (MTD)** | [e.g., ≤ 8 hours] | [Date] | [BIA Reference: BIA-YYYY-NNN] |
| **Minimum Business Continuity Objective (MBCO)** | [e.g., 80% transaction capacity] | [Date] | [BCP Reference: BCP-YYYY-NNN] |

### 5.2 RPO and RTO by Tier Reference Table

*The following table documents approved targets across all tiers for cross-reference. Individual asset values in 5.1 must fall within or improve upon these thresholds.*

| Tier | RPO | RTO | MTD | Backup Frequency Required |
|---|---|---|---|---|
| Tier 1 — Critical | ≤ 1 hour | ≤ 4 hours | ≤ 8 hours | Continuous / Hourly |
| Tier 2 — Important | ≤ 4 hours | ≤ 24 hours | ≤ 48 hours | Every 4–6 hours |
| Tier 3 — Standard | ≤ 24 hours | ≤ 72 hours | ≤ 7 days | Daily |
| Tier 4 — Non-Critical | ≤ 48 hours | ≤ 7 days | ≤ 14 days | Weekly |

---

## 6. Backup Schedule and Retention Periods

*Document the approved backup schedule, type, and retention configuration for this asset. Schedules must align with the RPO requirements in Section 5. Retention periods must comply with applicable regulatory obligations, including BNM record-keeping requirements and PDPA data minimisation principles.*

### 6.1 Backup Schedule Configuration

| Backup Type | Frequency | Scheduled Time (24h) | Day(s) of Week | Next Scheduled Run |
|---|---|---|---|---|
| **Full Backup** | [Daily / Weekly / Monthly] | [HH:MM] | [e.g., Sunday] | [Auto-populated] |
| **Incremental Backup** | [Hourly / Every 4h / Daily] | [HH:MM] | [All / Weekdays] | [Auto-populated] |
| **Differential Backup** | [Daily / As required] | [HH:MM] | [e.g., Mon–Sat] | [Auto-populated] |
| **Snapshot (if applicable)** | [Continuous / Hourly] | N/A | All | [Auto-populated] |
| **Log Backup (DB)** | [Every 15 min / 30 min] | N/A | All | [Auto-populated] |

### 6.2 Retention Policy

| Backup Type | Retention Period | Storage Tier | Location | Encryption |
|---|---|---|---|---|
| Full Backup | [e.g., 12 months] | [Hot / Warm / Cold] | [Primary DC / Offsite / Cloud] | [AES-256 / Yes / No] |
| Incremental Backup | [e.g., 30 days] | [Hot] | [Primary DC] | [Yes] |
| Differential Backup | [e.g., 90 days] | [Warm] | [Offsite] | [Yes] |
| Snapshot | [e.g., 7 days] | [Hot] | [Primary DC] | [Yes] |
| Offsite / Tape | [e.g., 7 years] | [Cold / Tape] | [Offsite Vault: Location] | [Yes] |

**Regulatory Retention Basis:** [Reference applicable BNM guideline, PDPA requirement, or internal data retention schedule — e.g., "BNM FSA 2013 Section 132; minimum 7-year retention for financial records"]

**Offsite / Air-Gap Status:** [Confirmed / Not Applicable — describe offsite media management arrangement]

### 6.3 Backup Execution Log — Continuous Record

*This section is system-generated. Each row represents a single backup job execution event. The backup platform must populate this table automatically and route alerts for any non-SUCCESS status.*

| Log Entry ID | Date | Start Time | End Time | Duration | Job Name | Asset ID | Backup Type | Status | Data Size (GB) | Files/Objects | Error Code | Error Description | Operator / System |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BEL-[YYYY-MM-DD]-0001 | [Date] | [HH:MM:SS] | [HH:MM:SS] | [HH:MM:SS] | [Job Name] | [Asset ID] | [Full/Incr/Diff] | [SUCCESS / FAILED / PARTIAL / SKIPPED] | [Size] | [Count] | [Code or N/A] | [Description or N/A] | [System/Auto] |
| BEL-[YYYY-MM-DD]-0002 | | | | | | | | | | | | | |
| BEL-[YYYY-MM-DD]-0003 | | | | | | | | | | | | | |

**Status Definitions:**

| Status | Meaning | Required Action |
|---|---|---|
| **SUCCESS** | Backup completed fully within expected parameters | None; log retained |
| **PARTIAL** | Backup completed with warnings; some items may be excluded | Investigate within [X] hours; document findings |
| **FAILED** | Backup did not complete; data may be unprotected | Immediate investigation; escalate per Section 4 |
| **SKIPPED** | Job did not run as scheduled | Investigate cause; initiate manual backup if RPO at risk |

---

## 7. Restoration Testing Results

*Restoration testing validates that backups are recoverable and that RTO/RPO targets can be met. Restoration tests must be conducted at minimum quarterly for Tier 1 and Tier 2 assets, and semi-annually for Tier 3 and Tier 4 assets, in accordance with RMiT Clause 10.44. All test outcomes must be documented in this section.*

### 7.1 Restoration Test Log

| Test ID | Test Date | Asset ID | Asset Name | Backup Date Used | Backup Type | Test Type | Environment | Restoration Started | Restoration Completed | Total Time | RTO Met? | RPO Met? | Data Integrity Verified? | Test Outcome | Deficiencies Found | Remediation Action | Tested By | Witnessed By |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| RT-[YYYY]-001 | [Date] | [ID] | [Name] | [Backup Date] | [Full/Incr] | [Full / Partial / Tabletop] | [DR / Sandbox / Production] | [HH:MM] | [HH:MM] | [HH:MM:SS] | [Yes / No] | [Yes / No] | [Yes / No] | [PASS / FAIL / PARTIAL] | [Description or None] | [Action / None] | [Name] | [Name] |
| RT-[YYYY]-002 | | | | | | | | | | | | | | | | | | |

### 7.2 Test Type Definitions

| Test Type | Description | Frequency (Minimum) |
|---|---|---|
| **Full Restoration Test** | Complete system or database restored to isolated environment; functionality verified | Annually for all tiers; quarterly for Tier 1 |
| **Partial Restoration Test** | Subset of data or specific files restored and verified | Quarterly (Tier 1 & 2); Semi-annually (Tier 3 & 4) |
| **Tabletop Exercise** | Walkthrough of restoration procedures without live execution | As a supplement; not a substitute for live tests |
| **Integrity Verification** | Automated checksum / hash validation of backup media without full restoration | Continuous / Monthly |

### 7.3 Outstanding Remediation Actions

*Track any open deficiencies identified during restoration testing that have not yet been resolved.*

| Action ID | Identified Date | Test Ref | Description | Risk Rating | Owner | Target Closure Date | Status |
|---|---|---|---|---|---|---|---|
| RA-[YYYY]-001 | [Date] | [Test ID] | [Description of deficiency] | [High / Medium / Low] | [Name] | [Date] | [Open / In Progress / Closed] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for backup management and log maintenance activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of IT Operations | Backup Administrator | Technical Custodian | Asset / Data Owner | CISO | Internal Audit | BCP / DR Manager |
|---|---|---|---|---|---|---|---|
| Define backup policy and schedules | A | R | C | C | C | I | C |
| Configure and maintain backup jobs | A | R | C | I | I | I | I |
| Monitor daily backup execution logs | A | R | I | I | I | I | I |
| Investigate and remediate backup failures | A | R | C | I | I | I | I |
| Escalate unresolved failures (Tier 1/2) | R | R | I | I | A | I | C |
| Conduct restoration testing | A | R | C | C | C | I | R |
| Document and sign off restoration test results | A | R | I | C | C | I | C |
| Quarterly log review and attestation | A | R | C | C | C | I | C |
| Report to CISO / Management | A | I | I | I | R | I | I |
| Maintain offsite / DR backup media | A | R | I | I | I | I | C |
| Annual review of RPO/RTO targets | C | C | C | R | A | I | R |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| | | | |
| | | | |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of IT Operations | [Name] | | [Date] |
| Chief Information Security Officer (CISO) | [Name] | | [Date] |
| Chief Information Officer (CIO) | [Name] | | [Date] |
| Internal Audit Representative | [Name] | | [Date] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.44 | Backup and recovery requirements for technology systems; mandates regular backup, offsite storage, and tested restoration capability |
| BNM RMiT | Clause 10.40–10.43 | Broader IT service continuity requirements contextualising backup within the overall resilience framework |
| BNM FSA 2013 | Section 132 | Record retention obligations for licensed financial institutions |
| PDPA 2010 | Principle 7 — Security | Protection of personal data including data held in backups |
| NACSA | Critical Information Infrastructure (CII) Standards | Applicable to institutions designated as CII operators |
| [Organization Name] BCP | [BCP Document ID] | Business Continuity Plan defining MTD and MBCO for in-scope systems |
| [Organization Name] DRP | [DRP Document ID] | Disaster Recovery Plan defining RTO/RPO targets and restoration procedures |
| [Organization Name] Data Classification Policy | [Policy ID] | Data sensitivity classification framework referenced in Section 3 |
| [Organization Name] IT Asset Management Policy | [Policy ID] | Asset register and criticality tier framework referenced in Sections 2 and 3 |

---

## 11. Appendices

### Appendix A — Excluded Assets

*List all IT assets explicitly excluded from this backup log's scope, with documented justification. Exclusions require sign-off from the Head of IT Operations.*

| Asset ID | Asset Name | Exclusion Reason | Approved By | Approval Date |
|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [e.g., Development environment; no production data] | [Name] | [Date] |

### Appendix B — Backup Failure Incident Register

*Cross-reference to the IT Incident Management system. Log all backup failures that triggered an incident ticket.*

| Incident Ticket ID | Date | Asset Affected | Failure Duration | Impact Assessment | Resolution Summary | Root Cause | Preventive Action |
|---|---|---|---|---|---|---|---|
| INC-[YYYY]-NNNN | [Date] | [Asset Name] | [Duration] | [Description] | [Summary] | [Root Cause] | [Action Taken] |

### Appendix C — Backup Media and Storage Inventory

*Inventory of physical or logical backup media, including tapes, object storage buckets, or vaulted snapshots.*

| Media ID | Type | Location | Encryption Key Ref | Date Created | Expiry / Destruction Date | Custodian |
|---|---|---|---|---|---|---|
| [Media ID] | [Tape / Object / Snapshot] | [Vault / Bucket Name] | [Key ID] | [Date] | [Date] | [Name] |

### Appendix D — Quarterly Review Attestation

*Completed quarterly by the Head of IT Operations. Confirms that backup execution logs have been reviewed and that no unresolved material issues exist.*

| Quarter | Review Period | Review Completed By | Date | Findings Summary | Escalations Raised | Sign-Off |
|---|---|---|---|---|---|---|
| Q[N] [YYYY] | [Start Date] – [End Date] | [Name, Head of IT Operations] | [Date] | [No issues / Summary of findings] | [Yes / No — reference IR or remediation ticket] | |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **RPO (Recovery Point Objective)** | The maximum tolerable period of data loss measured in time; defines how current the recovered data must be |
| **RTO (Recovery Time Objective)** | The maximum tolerable duration to restore a system or service following a disruption |
| **MTD (Maximum Tolerable Downtime)** | The total time a business process can be unavailable before causing unacceptable harm to the organisation |
| **MBCO (Minimum Business Continuity Objective)** | The minimum level of services or products that must be maintained during a disruption |
| **Full Backup** | A complete copy of all selected data at a specific point in time |
| **Incremental Backup** | A backup capturing only data changed since the last backup of any type |
| **Differential Backup** | A backup capturing all data changed since the last full backup |
| **Air-Gap** | Physical or logical isolation of backup media from the production network to protect against ransomware or malicious deletion |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document |
| **CII** | Critical Information Infrastructure, as designated under Malaysia's national cybersecurity framework |

---

*This document is classified as **Confidential**. Unauthorised disclosure is prohibited. All printed copies are uncontrolled — refer to the document management system for the current version.*

*[Organization Name] | Head of IT Operations | Document ID: [Document ID] | Version 1.0*