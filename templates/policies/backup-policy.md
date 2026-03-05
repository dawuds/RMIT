# Backup Policy

---

**[Organization Name]**
**Technology Risk Management**

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID, e.g., IT-POL-BCK-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of IT Operations |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 12 months from Last Review Date] |
| **Approved By** | [Approved By — Name and Title] |
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 10.44 |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. If received in error, please notify the document owner immediately and destroy all copies.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Framework](#2-regulatory-and-policy-framework)
3. [Definitions and Terminology](#3-definitions-and-terminology)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Policy Statements and Requirements](#5-policy-statements-and-requirements)
6. [Recovery Point Objective (RPO) and Recovery Time Objective (RTO) by Tier](#6-recovery-point-objective-rpo-and-recovery-time-objective-rto-by-tier)
7. [Backup Schedule and Retention Periods](#7-backup-schedule-and-retention-periods)
8. [Backup Storage Requirements](#8-backup-storage-requirements)
9. [Backup Security and Access Controls](#9-backup-security-and-access-controls)
10. [Restoration Testing and Verification](#10-restoration-testing-and-verification)
11. [Exceptions and Non-Compliance](#11-exceptions-and-non-compliance)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the overarching intent of this policy — why it exists, what risk it mitigates, and what it mandates.*

This policy establishes the requirements governing the backup of [Organization Name]'s information assets, technology systems, and data. It defines the minimum standards for backup frequency, retention, storage, security, and restoration testing to ensure the availability, integrity, and recoverability of critical data in the event of system failure, data corruption, cyber incident, or disaster.

This policy is issued in compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** policy document, specifically **Clause 10.44**, which mandates that financial institutions implement adequate data backup and recovery mechanisms commensurate with the criticality of their technology systems and data.

### 1.2 Scope

*Define the boundaries of this policy — which systems, data types, business units, entities, and third parties are covered.*

This policy applies to:

**Systems and Data:**
- All production IT systems, applications, and infrastructure owned, operated, or managed by [Organization Name]
- All data classified under [Organization Name]'s Data Classification Policy, including Customer Data, Financial Data, Operational Data, and Regulatory Records
- All databases, file servers, email systems, endpoint devices, and cloud-hosted platforms
- Configuration data, system images, and application code repositories

**Organisational Scope:**
- All business units, departments, and subsidiaries of [Organization Name]
- All employees, contractors, vendors, and third-party service providers with access to or responsibility over [Organization Name] systems
- Third-party managed service providers operating IT systems on behalf of [Organization Name]

**Exclusions:**
*List any explicitly excluded systems, environments, or data categories with justification.*

| Excluded Item | Justification | Alternative Control |
|---|---|---|
| [System/Data Category] | [Reason for exclusion] | [Compensating control in place] |
| [System/Data Category] | [Reason for exclusion] | [Compensating control in place] |

---

## 2. Regulatory and Policy Framework

### 2.1 Regulatory Basis

*Reference the specific regulatory instruments that mandate or inform this policy.*

This policy is issued to fulfil [Organization Name]'s obligations under the following regulatory frameworks:

| Regulatory Instrument | Issuing Authority | Relevant Provisions |
|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 10.44 — Backup and Recovery |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Principle of Security, Data Integrity |
| Guidelines on Management of Cyber Risk | BNM | Section on Business Continuity |
| [Other applicable BNM guidelines] | BNM | [Clause references] |
| [Internal Group Policy reference, if applicable] | [Group Entity] | [Reference] |

### 2.2 Internal Policy Hierarchy

*Show how this policy sits within the broader internal policy framework.*

This policy is subordinate to and must be read in conjunction with:

- [Organization Name] **Information Security Policy** ([Doc ID])
- [Organization Name] **Business Continuity and Disaster Recovery Policy** ([Doc ID])
- [Organization Name] **Data Classification and Handling Policy** ([Doc ID])
- [Organization Name] **Cloud Computing Policy** ([Doc ID], if applicable)
- [Organization Name] **Vendor and Third-Party Risk Management Policy** ([Doc ID])

---

## 3. Definitions and Terminology

*Define all technical terms used throughout this document to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Backup** | A copy of data or system configuration taken at a specific point in time for the purpose of restoration in the event of data loss, corruption, or system failure. |
| **Recovery Point Objective (RPO)** | The maximum tolerable period in which data may be lost due to an incident, measured from the point of the last successful backup to the point of failure. |
| **Recovery Time Objective (RTO)** | The maximum tolerable duration within which a system or data must be restored following an incident, measured from the time of failure to full restoration of service. |
| **Full Backup** | A complete copy of all selected data and systems at a specific point in time. |
| **Incremental Backup** | A backup that captures only the data changed since the most recent backup of any type (full or incremental). |
| **Differential Backup** | A backup that captures all data changed since the last full backup, regardless of subsequent incremental backups. |
| **Snapshot** | A point-in-time image of a system or storage volume, typically used for near-instantaneous recovery at the infrastructure level. |
| **Offsite Backup** | A backup copy stored at a physically separate geographic location from the primary data centre. |
| **Immutable Backup** | A backup stored in a write-once, read-many format that cannot be modified, deleted, or encrypted by ransomware during a defined retention period. |
| **Air-Gapped Backup** | A backup physically or logically isolated from the production network and internet, providing protection from network-borne threats. |
| **Retention Period** | The minimum duration for which a backup copy must be preserved before it may be deleted or overwritten. |
| **Restoration Test** | A formal exercise to verify that backup data can be successfully recovered and that restored systems function as expected within defined RTO parameters. |
| **Tier** | A classification of systems based on their criticality to business operations, used to assign proportionate RPO, RTO, and backup frequency requirements. |
| **Primary Data Centre** | [Organization Name]'s main data centre location at [Primary DC Location]. |
| **Disaster Recovery Site (DR Site)** | [Organization Name]'s secondary data centre location at [DR Site Location], designated for disaster recovery operations. |
| **BCP** | Business Continuity Plan — the documented plan to sustain critical business functions during and after a disruption. |
| **DRP** | Disaster Recovery Plan — the documented plan to restore IT systems and data following a major disruption. |

---

## 4. Roles and Responsibilities

### 4.1 RACI Matrix

*Assign accountability for backup-related activities using the RACI model: **R** = Responsible (performs the task), **A** = Accountable (owns the outcome), **C** = Consulted (provides input), **I** = Informed (notified of outcome).*

| Activity | Head of IT Operations | IT Infrastructure Manager | System Administrators | Information Security Officer | Business Unit Owners | IT Audit | Risk Management | External Vendor |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Policy ownership and annual review | **A** | C | I | C | I | C | C | I |
| Backup strategy design and approval | **A** | R | C | C | C | I | I | C |
| Day-to-day backup execution | I | A | **R** | I | I | I | I | R* |
| Backup monitoring and alerting | I | A | **R** | C | I | I | I | R* |
| Backup failure remediation | A | **R** | R | I | I | I | I | R* |
| Offsite and immutable backup management | A | **R** | R | C | I | I | I | R* |
| Restoration test planning | A | **R** | C | C | C | I | I | C |
| Restoration test execution | A | **R** | **R** | C | I | I | I | R* |
| Restoration test results reporting | A | **R** | C | C | I | **R** | I | C |
| Exception management and approval | **A** | R | I | C | R | I | C | I |
| Regulatory compliance reporting (RMiT) | C | I | I | **A** | I | R | C | I |
| Third-party backup SLA oversight | **A** | R | I | C | I | I | I | C |

*\* External Vendor responsibility applies only where backup operations are contracted to a managed service provider.*

### 4.2 Detailed Role Descriptions

#### 4.2.1 Head of IT Operations

- Holds ultimate accountability for the implementation, compliance, and effectiveness of this policy
- Approves the annual backup strategy, schedules, and retention requirements
- Escalates material backup failures or non-compliance to the Chief Information Officer (CIO) and Information Security Officer (ISO)
- Reviews and approves all exceptions to this policy

#### 4.2.2 IT Infrastructure Manager

- Responsible for the day-to-day management and oversight of backup infrastructure and systems
- Ensures backup jobs are scheduled, monitored, and completed successfully
- Reviews backup monitoring reports and escalates failures appropriately
- Coordinates and oversees restoration testing exercises

#### 4.2.3 System Administrators

- Execute backup configuration and scheduling for assigned systems
- Monitor backup job completion and investigate failures
- Perform restoration tests and document results
- Maintain backup-related runbooks and procedures

#### 4.2.4 Information Security Officer (ISO)

- Ensures backup controls align with [Organization Name]'s information security requirements
- Reviews backup encryption, access control, and immutability standards
- Coordinates with IT Operations on incident response involving data recovery
- Reports backup compliance status to the Risk Management Committee

#### 4.2.5 Business Unit Owners (Data Owners)

- Classify business data in accordance with the Data Classification Policy
- Define business requirements for RPO and RTO in consultation with IT Operations
- Confirm adequacy of restoration tests from a business process perspective
- Approve any exceptions that affect systems under their ownership

#### 4.2.6 Internal Audit

- Independently assess compliance with this policy during scheduled IT audits
- Review restoration test records and backup monitoring reports
- Report audit findings to the Audit Committee

#### 4.2.7 External Vendors / Managed Service Providers

*Complete this section where backup services are outsourced.*

- Comply with all backup requirements specified in the relevant Service Level Agreement (SLA) and this policy
- Provide regular backup completion reports and test results to [Organization Name]
- Notify [Organization Name] of backup failures within [X hours] of occurrence
- Subject to audit by [Organization Name] or its appointed representative

---

## 5. Policy Statements and Requirements

### 5.1 General Backup Principles

*State the overarching mandatory requirements that govern all backup activities across the organisation.*

All backup activities within [Organization Name] must adhere to the following principles:

1. **Completeness:** All systems and data within scope of this policy must have documented backup configurations. No in-scope system shall operate without an approved backup arrangement.

2. **Integrity:** Backup copies must be protected against corruption. Backup integrity shall be verified through regular checksum validation and restoration testing.

3. **Confidentiality:** Backup data must receive the same classification and protection as the source data. All backup media and transmissions must be encrypted using algorithms approved by [Organization Name]'s Information Security Policy.

4. **Availability:** Backup copies must be accessible when needed for recovery. Single points of failure in backup storage and retrieval must be eliminated or mitigated.

5. **Segregation:** Backup copies must be stored separately from the source systems they protect. Backup storage environments must be logically or physically isolated from production environments.

6. **Immutability:** At least one backup copy for each Tier 1 and Tier 2 system must be maintained in an immutable or air-gapped state to protect against ransomware and malicious deletion.

7. **Geographic Separation:** At least one backup copy for each in-scope system must be stored at a geographically separate location from the primary data centre.

8. **Compliance:** All backup retention periods must meet or exceed regulatory minimum requirements under BNM RMiT, PDPA, and any other applicable legislation.

### 5.2 Backup Coverage Requirements

*Specify what must be backed up across different system and data categories.*

The following categories of data and systems must be covered by backup arrangements:

| Category | Examples | Backup Requirement |
|---|---|---|
| **Customer Data** | Account records, transaction data, KYC/AML records | Mandatory — Tier 1 or Tier 2 as classified |
| **Financial Data** | Core banking records, GL, reconciliation data | Mandatory — Tier 1 |
| **Application Data** | Application databases, application configurations | Mandatory — per system tier |
| **System Configurations** | Server OS configs, network device configs, security appliance configs | Mandatory — Tier 2 minimum |
| **Email and Communications** | Corporate email archives | Mandatory — Tier 2 minimum |
| **Cryptographic Key Material** | Encryption keys, certificates | Mandatory — Tier 1; subject to separate Key Management Policy |
| **Audit Logs** | SIEM logs, access logs, change logs | Mandatory — retention per regulatory requirements |
| **Source Code Repositories** | Application source code, IaC templates | Mandatory — Tier 2 minimum |
| **Virtual Machine Images** | VM snapshots for critical systems | Mandatory — per system tier |
| **Cloud Data and Configurations** | Cloud storage, cloud service configurations | Mandatory — where applicable |

### 5.3 Prohibited Practices

The following practices are expressly prohibited:

- Storing the only copy of backup data on the same physical infrastructure as the source system
- Using unencrypted backup media for data classified as Confidential or above
- Transmitting backup data over unencrypted network channels
- Storing backup credentials in plaintext or sharing backup system access credentials
- Deleting or overwriting backup data before the expiry of the defined retention period without documented authorisation
- Disabling backup monitoring alerts without documented approval from the IT Infrastructure Manager
- Using backup infrastructure for purposes other than backup and restoration operations without written approval

---

## 6. Recovery Point Objective (RPO) and Recovery Time Objective (RTO) by Tier

### 6.1 System Criticality Tier Classification

*Define how systems are classified into tiers based on their business criticality. Tier classification drives backup frequency, RPO, and RTO requirements.*

All in-scope systems must be assigned a criticality tier in the [Organization Name] IT Asset Register. Tier assignments must be reviewed annually and upon material changes to the system or its business function.

| Tier | Classification | Definition | Examples |
|---|---|---|---|
| **Tier 1** | Mission Critical | Systems whose failure would cause immediate and material disruption to core financial services, regulatory reporting, or customer access. Recovery is time-critical. | Core banking system, payment gateway, internet banking platform, SWIFT/FIN messaging |
| **Tier 2** | Business Critical | Systems that support important business functions. Their failure causes significant operational impact but workarounds may exist for a limited period. | Loan management system, CRM, HR system, internal finance system, email platform |
| **Tier 3** | Important | Systems that support operational efficiency. Their failure causes inconvenience but does not halt core services. | Collaboration tools, intranet, non-critical reporting tools, development/test environments |
| **Tier 4** | Non-Critical | Systems with minimal business impact if unavailable for extended periods. | Archive systems, decommissioned system backups, internal training platforms |

### 6.2 RPO and RTO Requirements by Tier

*Define the maximum acceptable data loss (RPO) and maximum acceptable downtime (RTO) for each tier. These values must be agreed with Business Unit Owners and validated through Business Impact Assessments (BIA).*

| Tier | Classification | **RPO (Maximum Data Loss)** | **RTO (Maximum Recovery Time)** | BIA Reference |
|---|---|---|---|---|
| **Tier 1** | Mission Critical | ≤ 1 hour | ≤ 4 hours | [BIA Document Reference] |
| **Tier 2** | Business Critical | ≤ 4 hours | ≤ 8 hours | [BIA Document Reference] |
| **Tier 3** | Important | ≤ 24 hours | ≤ 24 hours | [BIA Document Reference] |
| **Tier 4** | Non-Critical | ≤ 72 hours | ≤ 72 hours | [BIA Document Reference] |

> **Note:** RPO and RTO values represent the **maximum tolerable** thresholds. [Organization Name] should target recovery capabilities that consistently exceed these thresholds to provide an adequate buffer. Where contractual SLAs with customers impose stricter requirements, those values shall take precedence for affected systems.

### 6.3 System Tier Register

*Maintain a register of all in-scope systems with their assigned tier. This may be maintained as a separate IT Asset Register and referenced here.*

The authoritative list of system tier assignments is maintained in the **[Organization Name] IT Asset Register** ([Document ID / System Reference]). A summary of critical systems is provided in **Appendix A**.

| System Name | System Owner | Assigned Tier | RPO | RTO | Last Classification Review Date |
|---|---|---|---|---|---|
| [Core Banking System] | [Head of Retail Banking / IT] | Tier 1 | ≤ 1 hour | ≤ 4 hours | [Date] |
| [Payment Gateway] | [Head of Payments / IT] | Tier 1 | ≤ 1 hour | ≤ 4 hours | [Date] |
| [Internet Banking Platform] | [Head of Digital / IT] | Tier 1 | ≤ 1 hour | ≤ 4 hours | [Date] |
| [Loan Management System] | [Head of Credit / IT] | Tier 2 | ≤ 4 hours | ≤ 8 hours | [Date] |
| [CRM System] | [Head of Sales / IT] | Tier 2 | ≤ 4 hours | ≤ 8 hours | [Date] |
| [HR Information System] | [Head of HR / IT] | Tier 2 | ≤ 4 hours | ≤ 8 hours | [Date] |
| [Intranet / Collaboration] | [IT Operations] | Tier 3 | ≤ 24 hours | ≤ 24 hours | [Date] |
| [Development Environment] | [IT Operations] | Tier 3 | ≤ 24 hours | ≤ 24 hours | [Date] |

---

## 7. Backup Schedule and Retention Periods

### 7.1 Backup Frequency Requirements

*Define the minimum backup frequency for each tier. Actual implemented schedules must meet or exceed these minimums.*

| Tier | Minimum Backup Frequency | Backup Types Required | Snapshot Requirement |
|---|---|---|---|
| **Tier 1** | Continuous or near-continuous (database log shipping / replication) + Full backup every 24 hours | Continuous log backup, Daily full backup, Weekly archive | Hourly snapshots minimum |
| **Tier 2** | Full backup every 24 hours + Incremental every 4–6 hours | Daily full backup, Intraday incremental, Weekly archive | [As applicable] |
| **Tier 3** | Full backup every 24 hours | Daily full backup, Weekly archive | [As applicable] |
| **Tier 4** | Full backup weekly | Weekly full backup | Not required |

### 7.2 Backup Schedule

*Document the actual backup schedule implemented for each in-scope system. This table may be maintained in a separate Backup Schedule Register.*

| System Name | Tier | Backup Type | Schedule (Time/Frequency) | Backup Window | Backup Tool | Storage Target |
|---|---|---|---|---|---|---|
| [Core Banking System — DB] | Tier 1 | Transaction Log | Every 15 minutes | 24/7 | [Tool Name] | [Primary Storage] |
| [Core Banking System — DB] | Tier 1 | Full Backup | Daily at [Time, e.g., 01:00 AM] | 01:00–04:00 AM | [Tool Name] | [Primary Storage] |
| [Core Banking System — DB] | Tier 1 | Weekly Archive | Sunday at [Time] | [Window] | [Tool Name] | [Offsite/Tape/Cloud] |
| [Payment Gateway] | Tier 1 | Transaction Log | Every 15 minutes | 24/7 | [Tool Name] | [Primary Storage] |
| [Payment Gateway] | Tier 1 | Full Backup | Daily at [Time] | [Window] | [Tool Name] | [Primary Storage] |
| [Loan Management System] | Tier 2 | Incremental | Every 4 hours | [Window] | [Tool Name] | [Primary Storage] |
| [Loan Management System] | Tier 2 | Full Backup | Daily at [Time] | [Window] | [Tool Name] | [Primary Storage] |
| [CRM System] | Tier 2 | Full Backup | Daily at [Time] | [Window] | [Tool Name] | [Primary Storage] |
| [Intranet] | Tier 3 | Full Backup | Daily at [Time] | [Window] | [Tool Name] | [Primary Storage] |
| [Development Environment] | Tier 4 | Full Backup | Weekly — Sunday at [Time] | [Window] | [Tool Name] | [Primary Storage] |

### 7.3 Retention Period Requirements

*Define the minimum retention periods for backup copies. Where statutory or regulatory requirements prescribe longer retention, those requirements take precedence.*

| Tier | Backup Type | Minimum Retention Period | Regulatory Basis |
|---|---|---|---|
| **Tier 1** | Daily Full Backup | 90 days | BNM RMiT, internal policy |
| **Tier 1** | Weekly Archive | 1 year | BNM RMiT, internal policy |
| **Tier 1** | Monthly Archive | 7 years | FSA/IFSA record retention requirements |
| **Tier 1** | Annual Archive | 7 years | FSA/IFSA, PDPA |
| **Tier 2** | Daily Full Backup | 60 days | Internal policy |
| **Tier 2** | Weekly Archive | 1 year | Internal policy |
| **Tier 2** | Monthly Archive | 3 years | Internal policy |
| **Tier 3** | Daily Full Backup | 30 days | Internal policy |
| **Tier 3** | Weekly Archive | 6 months | Internal policy |
| **Tier 4** | Weekly Full Backup | 30 days | Internal policy |
| **Audit Logs** | All log types | 5 years minimum | BNM RMiT, AML/CFT requirements |
| **Customer Financial Records** | All types | 7 years post-relationship end | PDPA, FSA/IFSA |
| **Regulatory Submissions** | All types | 7 years | BNM requirements |

> **Note:** The retention periods above represent **minimum requirements**. Systems or data categories subject to specific regulatory, legal hold, or litigation requirements may require extended retention. The Head of Legal and Compliance must be consulted when legal holds are applied.

### 7.4 Retention Period Enforcement

- Backup media must not be overwritten, deleted, or destroyed before the expiry of its defined retention period.
- Automated retention policies must be configured within backup management systems to enforce minimum retention periods.
- End-of-retention deletion must be logged and subject to quarterly review.
- Legal holds must override automated deletion policies. A process for placing and releasing legal holds on backup data must be documented in the [Organization Name] Legal Hold Procedure ([Document Reference]).

---

## 8. Backup Storage Requirements

### 8.1 Storage Architecture

*Define the required storage locations and architecture for backup copies to ensure resilience and geographic separation.*

[Organization Name] shall maintain backup copies in accordance with a **3-2-1 backup strategy** as a minimum, defined as:

- **3** copies of data (1 primary production copy + 2 backup copies)
- **2** different storage media types or environments
- **1** copy stored offsite at a geographically separate location

For Tier 1 systems, [Organization Name] shall implement an enhanced **3-2-1-1 strategy**:

- **3** copies of data
- **2** different storage media or environments
- **1** offsite copy
- **1** immutable or air-gapped copy

| Copy | Location | Media/Environment | Purpose | Applies To |
|---|---|---|---|---|
| **Primary Backup (Copy 1)** | Primary Data Centre — [Location] | [SAN / NAS / Backup Appliance] | Fast local restoration | All Tiers |
| **Secondary Backup (Copy 2)** | Disaster Recovery Site — [DR Location] | [Replicated Storage / Backup Appliance] | DR restoration | Tier 1, Tier 2 |
| **Immutable Backup (Copy 3)** | [Immutable Storage — Primary DC or Cloud] | [Object Storage with WORM / Tape] | Ransomware protection, long-term retention | Tier 1, Tier 2 |
| **Offsite Archive (Copy 4)** | [Offsite Location / Cloud Provider] | [Cloud Object Storage / Physical Tape] | Long-term archive and compliance retention | All Tiers (monthly/annual) |

### 8.2 Offsite Storage Requirements

- Offsite backup copies must be stored at a minimum distance of **[X km]** from the primary data centre to ensure they are not subject to the same localised disaster (flood, fire, power failure).
- The offsite storage location is: **[Offsite Location Address or Cloud Region]**
- Physical media transported offsite must be inventoried, logged, and transported using a secure, bonded courier service.
- Offsite storage facilities must have appropriate physical security controls (access control, CCTV, climate control, fire suppression).

### 8.3 Cloud Backup Requirements

*Complete this section if cloud storage is used for any backup copies.*

Where cloud storage platforms are used for backup storage, the following requirements apply:

- Cloud backup providers must be approved through [Organization Name]'s vendor risk management process and must meet BNM's cloud outsourcing requirements.
- Data stored in cloud backup environments must be encrypted at rest using **AES-256** or equivalent.
- Data in transit to cloud backup locations must be encrypted using **TLS 1.2 or above**.
- Cloud storage regions must be configured to retain data within **Malaysia or approved jurisdictions** in accordance with PDPA and BNM data localisation requirements.
- Approved cloud backup provider(s): **[Cloud Provider Name(s) and Region(s)]**

### 8.4 Immutable Backup Requirements

- Immutable backup copies must be stored with a write-once, read-many (WORM) lock applied for the full retention period.
- Immutability locks must be applied at the time of backup creation and must not be removable by system administrators without dual authorisation from the Head of IT Operations and the Information Security Officer.
- Immutable backup integrity must be verified at least quarterly.

---

## 9. Backup Security and Access Controls

### 9.1 Encryption Requirements

| Scenario | Encryption Standard | Key Management |
|---|---|---|
| Data at rest in backup storage | AES-256 | Managed via [Organization Name] Key Management System — [KMS Reference] |
| Data in transit (backup transmission) | TLS 1.2 minimum | [Certificate Authority / Protocol Details] |
| Physical backup media (tapes, portable drives) | AES-256 hardware or software encryption | [Media Encryption Key Management Reference] |
| Cloud-stored backup data | AES-256 at rest, TLS 1.2 in transit | Cloud provider-managed or [Organization Name]-managed keys |

Encryption keys used for backup encryption must be stored separately from the backup data and must be subject to [Organization Name]'s **Cryptographic Key Management Policy** ([Document Reference]).

### 9.2 Access Controls

- Access to backup systems, backup storage, and backup management consoles must follow the **principle of least privilege**.
- Backup system administrative access must be restricted to authorised IT Operations personnel only.
- All access to backup systems must be authenticated using **Multi-Factor Authentication (MFA)**.
- Shared or generic backup system accounts are prohibited. All access must be individual and attributable.
- Backup system access rights must be reviewed **quarterly** or upon personnel changes.
- Backup administrators must not have the ability to permanently delete backup data within its retention period without a dual-authorisation process.

### 9.3 Backup Monitoring and Alerting

- All backup jobs must be monitored for successful completion.
- Backup monitoring must be implemented via **[Backup Monitoring Tool / SIEM Integration]**.
- Automated alerts must be generated and delivered to the IT Operations team for:
  - Backup job failures
  - Backup jobs not initiated at the scheduled time
  - Storage capacity thresholds (alert at **[X]%** capacity)
  - Backup integrity validation failures
  - Unauthorised access attempts on backup systems
- Backup job completion status must be reviewed **daily** by the duty System Administrator and weekly by the IT Infrastructure Manager.
- A consolidated backup status report must be produced **monthly** and reviewed by the Head of IT Operations.

### 9.4 Audit Logging

All backup-related activities must be logged and retained, including:

- Backup job initiation, completion, and failure events
- Backup data access and restoration events
- Changes to backup schedules, policies, or configurations
- Administrative access to backup systems
- Backup media check-in/check-out events (for physical media)

Backup audit logs must be retained for a minimum of **[X years]** and must not be modifiable by backup administrators.

---

## 10. Restoration Testing and Verification

### 10.1 Purpose of Restoration Testing

*This section defines the mandatory requirements for testing the recoverability of backup data. Backup copies that are never tested cannot be relied upon during a real incident.*

Backup copies are only effective if they can be successfully restored within defined RTO parameters. [Organization Name] shall conduct regular restoration tests to verify:

1. Backup data is complete, uncorrupted, and restorable
2. Restoration procedures are accurate, documented, and executable by trained personnel
3. Restoration times meet defined RTO targets
4. Restored systems and data are functionally operational

### 10.2 Restoration Testing Frequency

| Tier | Restoration Test Frequency | Test Type | Business Validation Required |
|---|---|---|---|
| **Tier 1** | Quarterly (minimum) | Full system restoration test | Yes — Business Unit Owner sign-off required |
| **Tier 2** | Semi-annually (minimum) | Full or selective data restoration test | Yes — Business Unit Owner review required |
| **Tier 3** | Annually (minimum) | Selective data restoration test | Recommended |
| **Tier 4** | Annually (minimum) | Sample data restoration test | Not required |
| **Offsite / Immutable Copies** | Annually (minimum) | Restoration from offsite source | Required for Tier 1 |

> Additional ad hoc restoration tests must be conducted following:
> - Major infrastructure changes
> - Migration of systems to new environments or cloud platforms
> - Material changes to backup architecture
> - Discovery of backup integrity issues
> - Post-incident review recommendations

### 10.3 Restoration Test Procedure

*Describe the standard procedure for conducting and documenting a restoration test.*

Each restoration test must follow the steps below:

1. **Test Planning:** The IT Infrastructure Manager prepares a test plan identifying the systems/data to be tested, the test environment, the test date, and the expected RTO target.
2. **Test Authorisation:** The Head of IT Operations approves the test plan.
3. **Environment Preparation:** A dedicated restoration test environment is prepared, isolated from production. Restoration must **never** be tested directly in the production environment unless in a declared DR exercise with explicit executive approval.
4. **Restoration Execution:** The assigned System Administrator executes the restoration from the designated backup copy, recording the start time and completion time.
5. **Functional Verification:** The restored system or data is verified for completeness and functional accuracy, with input from the relevant Business Unit Owner for Tier 1 and Tier 2 systems.
6. **RTO Assessment:** Actual restoration time is compared against the defined RTO. Any breach of the RTO target must be recorded and escalated.
7. **Documentation:** Results are recorded in the **Restoration Test Register** (Appendix C) and the Restoration Test Report.
8. **Sign-Off:** The IT Infrastructure Manager and relevant Business Unit Owner sign off on the completed test report.

### 10.4 Restoration Test Results Register

*Record all restoration tests performed. The Restoration Test Register must be maintained as a living document and made available for regulatory inspection.*

| Test Date | System Name | Tier | Backup Date Used | Test Type | Test Environment | Restoration Start | Restoration Complete | Actual Time (hrs) | RTO Target (hrs) | RTO Met? | Functional Verification | Test Conducted By | Business Sign-Off | Issues Found | Remediation Action |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [Date] | [System Name] | [Tier] | [Backup Date] | [Full/Selective/Offsite] | [Test Env Name] | [Time] | [Time] | [X hrs] | [X hrs] | Yes / No | Pass / Fail | [Name] | [Name] | [None / Describe] | [NA / Action Description] |
| [Date] | [System Name] | [Tier] | [Backup Date] | [Full/Selective/Offsite] | [Test Env Name] | [Time] | [Time] | [X hrs] | [X hrs] | Yes / No | Pass / Fail | [Name] | [Name] | [None / Describe] | [NA / Action Description] |
| [Date] | [System Name] | [Tier] | [Backup Date] | [Full/Selective/Offsite] | [Test Env Name] | [Time] | [Time] | [X hrs] | [X hrs] | Yes / No | Pass / Fail | [Name] | [Name] | [None / Describe] | [NA / Action Description] |

### 10.5 Restoration Test Reporting

- A **Restoration Test Summary Report** must be produced after each scheduled test exercise and submitted to the Head of IT Operations within **5 business days** of test completion.
- An **Annual Restoration Test Summary** must be produced and presented to the IT Risk Committee and retained for regulatory inspection purposes.
- Where RTO targets are not met or restoration fails, the Head of IT Operations must notify the Chief Information Officer (CIO) and Information Security Officer (ISO) within **24 hours**.

### 10.6 Failure Remediation

Where a restoration test reveals failures or deficiencies, the following process applies:

| Severity | Definition | Required Action | Escalation | Remediation Timeline |
|---|---|---|---|---|
| **Critical** | Restoration completely fails; data cannot be recovered | Immediate incident response; invoke backup failover procedure; notify CIO | CIO, Risk Committee, Board IT Committee | Immediate — root cause fix within 5 business days |
| **High** | Restoration succeeds but RTO is materially breached (>50% over target) | Escalate to Head of IT Operations; remediation plan required | Head of IT Operations, ISO | Root cause fix within 30 days |
| **Medium** | Restoration succeeds but minor data gaps identified or RTO marginally breached | Document and remediate; update backup configuration | IT Infrastructure Manager | Fix within 60 days |
| **Low** | Minor procedural or documentation issues identified | Update runbooks and documentation | IT Infrastructure Manager | Fix before next scheduled test |

---

## 11. Exceptions and Non-Compliance

### 11.1 Exception Management

*Where strict compliance with this policy is not technically feasible or commercially practicable, an exception process must be followed.*

All exceptions to this policy must be:

1. Formally documented using the **[Organization Name] Policy Exception Request Form** ([Document Reference])
2. Risk-assessed to identify compensating controls
3. Approved by the Head of IT Operations and the Information Security Officer
4. Reviewed and renewed at minimum **annually**
5. Reported to the IT Risk Committee for awareness

Exceptions must not be granted if they would result in [Organization Name] being in breach of BNM RMiT requirements or other mandatory regulatory obligations.

### 11.2 Exceptions Register

| Exception ID | System / Data Affected | Policy Clause Excepted | Business Justification | Risk Assessment | Compensating Controls | Approved By | Approval Date | Review / Expiry Date |
|---|---|---|---|---|---|---|---|---|
| [EXC-001] | [System Name] | [Clause, e.g., 7.3 — Retention] | [Justification] | [Low/Med/High] | [Describe controls] | [Name, Title] | [Date] | [Date] |
| [EXC-002] | [System Name] | [Clause] | [Justification] | [Low/Med/High] | [Describe controls] | [Name, Title] | [Date] | [Date] |

### 11.3 Non-Compliance Consequences

Failure to comply with this policy may result in:

- Disciplinary action in accordance with [Organization Name]'s Human Resources Policy
- Regulatory sanctions, financial penalties, or supervisory action by BNM
- Increased risk of data loss, operational disruption, or breach of customer obligations
- Reputational damage to [Organization Name]

Suspected non-compliance must be reported to the Information Security Officer and the Head of IT Operations. Confirmed non-compliance incidents must be logged in [Organization Name]'s incident management system and reported to the IT Risk Committee.

---

## 12. Review and Approval

### 12.1 Policy Review

This policy must be reviewed at minimum **annually** or when any of the following occur:

- Material changes to [Organization Name]'s IT infrastructure or backup architecture
- Changes to regulatory requirements (BNM RMiT, PDPA, FSA/IFSA, or other applicable regulation)
- Occurrence of a material backup failure or data loss incident
- Significant business changes (mergers, acquisitions, new product lines) affecting the scope of systems
- Recommendations from internal or external audit
- Changes to industry best practices or threat landscape

### 12.2 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Name, Title] | [Name, Title] | Initial version — issued for adoption |
| [1.1] | [Date] | [Name, Title] | [Name, Title] | [Description of changes, e.g., updated retention periods, added cloud backup requirements] |
| [2.0] | [Date] | [Name, Title] | [Name, Title] | [Major revision — description] |

### 12.3 Approval Sign-Off

*This policy requires approval from the following authorised signatories before it becomes effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Head of IT Operations** (Policy Owner) | [Full Name] | __________________ | [Date] |
| **Chief Information Officer (CIO)** | [Full Name] | __________________ | [Date] |
| **Chief Information Security Officer (CISO) / ISO** | [Full Name] | __________________ | [Date] |
| **Chief Risk Officer (CRO)** | [Full Name] | __________________ | [Date] |
| **Chief Executive Officer (CEO)** *(or delegated authority)* | [Full Name] | __________________ | [Date] |

> **Board / Committee Endorsement:** This policy was noted / approved by the **[Board IT Committee / IT Risk Committee / EXCO]** at its meeting on **[Date]** (Minute Reference: **[Minute Ref]**).

---

## 13. References

### 13.1 Regulatory References

| Document | Issuing Authority | Clause / Section | Subject Matter |
|---|---|---|---|
| **Risk Management in Technology (RMiT)** | Bank Negara Malaysia | **Clause 10.44** | Backup and recovery requirements for financial institutions |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.40–10.43 | Business continuity and disaster recovery (contextual) |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 11 | Cyber resilience requirements |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Part III — Security Principle | Protection of personal data, including backup copies |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | Section 47, 143 | Record retention obligations for licensed financial institutions |
| Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | Section 57, 155 | Record retention obligations (Islamic financial institutions) |
| Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLA) | Parliament of Malaysia | Section 14 | Record-keeping requirements (minimum 6 years) |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Relevant Sections] | Cyber resilience, data protection |

### 13.2 Internal Policy References

| Document | Document ID | Owner |
|---|---|---|
| Information Security Policy | [Doc ID] | Information Security Officer |
| Business Continuity and Disaster Recovery Policy | [Doc ID] | Head of IT Operations |
| Data Classification and Handling Policy | [Doc ID] | Information Security Officer |
| Cryptographic Key Management Policy | [Doc ID] | Information Security Officer |
| Cloud Computing Policy | [Doc ID] | Head of IT Operations |
| Vendor and Third-Party Risk Management Policy | [Doc ID] | Chief Risk Officer |
| IT Change Management Policy | [Doc ID] | IT Infrastructure Manager |
| Legal Hold Procedure | [Doc ID] | Head of Legal and Compliance |
| Policy Exception Request Form | [Doc ID] | Information Security Officer |

### 13.3 Industry Standards

| Standard | Body | Relevance |
|---|---|---|
| ISO/IEC 27001:2022 — Annex A, Control 8.13 | ISO / IEC | Information backup |
| ISO 22301:2019 | ISO | Business continuity management systems |
| NIST SP 800-34 Rev. 1 | NIST | Contingency planning for IT systems |

---

## 14. Appendices

### Appendix A — Critical System Inventory and Tier Classification

*This appendix provides a comprehensive listing of all in-scope systems, their assigned criticality tier, backup configuration summary, and responsible owner. The authoritative source is the IT Asset Register ([Document Reference]). This appendix must be reviewed and revalidated annually.*

| System ID | System Name | Business Function | Data Classification | Criticality Tier | RPO | RTO | Business Owner | IT Owner | Last Review Date |
|---|---|---|---|---|---|---|---|---|---|
| [SYS-001] | [Core Banking System] | Core financial transactions, account management | Confidential — Restricted | Tier 1 | 1 hour | 4 hours | [Name / Role] | [Name / Role] | [Date] |
| [SYS-002] | [Internet Banking Platform] | Customer self-service, digital transactions | Confidential — Restricted | Tier 1 | 1 hour | 4 hours | [Name / Role] | [Name / Role] | [Date] |
| [SYS-003] | [Payment Gateway / SWIFT] | Interbank and international payments | Confidential — Restricted | Tier 1 | 1 hour | 4 hours | [Name / Role] | [Name / Role] | [Date] |
| [SYS-004] | [Loan Management System] | Loan origination, servicing, collections | Confidential | Tier 2 | 4 hours | 8 hours | [Name / Role] | [Name / Role] | [Date] |
| [SYS-005] | [CRM System] | Customer relationship management | Confidential | Tier 2 | 4 hours | 8 hours | [Name / Role] | [Name / Role] | [Date] |
| [SYS-006] | [HR Information System] | Human resources, payroll | Confidential | Tier 2 | 4 hours | 8 hours | [Name / Role] | [Name / Role] | [Date] |
| [SYS-007] | [Email Platform] | Corporate communications | Internal | Tier 2 | 4 hours | 8 hours | [Name / Role] | [Name / Role] | [Date] |
| [SYS-008] | [Collaboration / Intranet] | Internal collaboration | Internal | Tier 3 | 24 hours | 24 hours | [Name / Role] | [Name / Role] | [Date] |
| [SYS-009] | [Development Environment] | Software development and testing | Internal | Tier 3 | 24 hours | 24 hours | [Name / Role] | [Name / Role] | [Date] |

---

### Appendix B — Backup Infrastructure and Tool Register

*This appendix documents the backup tools, platforms, and infrastructure used by [Organization Name]. It must be kept current and reviewed annually or upon changes to the backup environment.*

| Tool / Platform | Version / Edition | Vendor | Function | Systems Covered | Primary Storage Target | Offsite Target | Support Contact |
|---|---|---|---|---|---|---|---|
| [Backup Tool Name, e.g., Veeam Backup & Replication] | [Version] | [Vendor] | VM and application backup | [System List or "All Tier 1 VMs"] | [Storage Array / Appliance] | [DR Site / Cloud] | [Contact / SLA Ref] |
| [Database Backup Tool, e.g., RMAN / SQL Server Backup] | [Version] | [Vendor] | Database backup | [Database List] | [Storage Target] | [Offsite Target] | [Contact / SLA Ref] |
| [Cloud Backup Service] | [N/A] | [Cloud Provider] | Cloud workload and long-term archive | [Cloud Systems] | [Cloud Region] | [Secondary Cloud Region] | [Contact / SLA Ref] |
| [Tape Library, if applicable] | [Model] | [Vendor] | Long-term archive and offsite retention | All Tier 1 & 2 | On-site tape library | Offsite vaulting — [Vendor] | [Contact / SLA Ref] |

---

### Appendix C — Restoration Test Register

*This appendix is the official record of all restoration tests conducted. It must be maintained as a living document throughout the year and submitted as evidence during regulatory examinations and internal audits.*

*Refer to **Section 10.4** for the full table structure and required fields.*

**Annual Summary — Restoration Tests for [Year]:**

| Quarter | Tests Planned | Tests Completed | RTO Met (%) | Failures | Open Remediation Items |
|---|---|---|---|---|---|
| Q1 [Year] | [X] | [X] | [X]% | [X] | [X] |
| Q2 [Year] | [X] | [X] | [X]% | [X] | [X] |
| Q3 [Year] | [X] | [X] | [X]% | [X] | [X] |
| Q4 [Year] | [X] | [X] | [X]% | [X] | [X] |
| **Annual Total** | **[X]** | **[X]** | **[X]%** | **[X]** | **[X]** |

*Detail records for each individual test are maintained in the Restoration Test Register spreadsheet: **[File Path / SharePoint Location]***

---

### Appendix D — Backup Failure Escalation Procedure

*This appendix defines the step-by-step escalation procedure to be followed when a backup failure is detected.*

**Step 1 — Detection**
- Backup monitoring system generates alert to IT Operations team
- Duty System Administrator acknowledges alert within **[X minutes]**

**Step 2 — Initial Assessment (within 30 minutes of detection)**
- System Administrator determines the cause and scope of the failure
- Classifies failure as: Job failure only / Storage issue / Infrastructure failure / Security incident

**Step 3 — Escalation Decision**

| Scenario | Escalation To | Timeframe |
|---|---|---|
| Single job failure — non-critical system (Tier 3/4) | IT Infrastructure Manager (email notification) | Within 2 hours |
| Single job failure — critical system (Tier 1/2) | IT Infrastructure Manager (phone call) | Immediately |
| Multiple failures or recurring failures | Head of IT Operations | Within 1 hour |
| Storage capacity exceeded | Head of IT Operations | Immediately |
| Security incident suspected (e.g., ransomware attempting to delete backups) | ISO + Head of IT Operations | Immediately — invoke Incident Response Plan |
| RTO likely to be breached if restoration required now | CIO + Head of IT Operations | Immediately |

**Step 4 — Remediation**
- Root cause identified and documented
- Corrective action taken and re-run of failed backup job attempted
- IT Infrastructure Manager confirms successful completion of remediation backup

**Step 5 — Documentation**
- Failure, cause, and resolution recorded in the IT Service Management system (Ticket Ref: **[ITSM Tool Reference]**)
- If failure constitutes a policy breach, record in the Policy Exception / Non-Compliance Register

---

### Appendix E — Glossary of Regulatory Terms

| Term | Definition | Source |
|---|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and financial regulatory authority of Malaysia | — |
| **RMiT** | Risk Management in Technology — BNM policy document issued [effective date] governing technology risk management by financial institutions | BNM RMiT |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data in commercial transactions | Malaysian Legislation |
| **FSA** | Financial Services Act 2013 — primary legislation governing conventional financial institutions licensed by BNM | Malaysian Legislation |
| **IFSA** | Islamic Financial Services Act 2013 — primary legislation governing Islamic financial institutions licensed by BNM | Malaysian Legislation |
| **AMLA** | Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 — legislation governing AML/CFT obligations | Malaysian Legislation |
| **ISO** | International Organisation for Standardisation — international standards body | — |
| **NIST** | National Institute of Standards and Technology — US federal agency issuing cybersecurity frameworks | — |
| **WORM** | Write Once, Read Many — a data storage technology that ensures written data cannot be modified or erased | Industry Term |
| **SAN** | Storage Area Network — a high-speed network that provides access to consolidated block-level data storage | Industry Term |
| **NAS** | Network Attached Storage — file-level computer data storage connected to a computer network | Industry Term |

---

*End of Document*

---

| Field | Value |
|---|---|
| **Document Title** | Backup Policy |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Last Updated** | [Date] |
| **Next Review** | [Date — 12 months from Last Updated] |

*This document is subject to version control. Printed copies are uncontrolled. Always refer to the document management system for the current version.*