# Disaster Recovery Plans

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
| **RMiT Clause(s)** | 10.31 |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel involved in technology risk management, disaster recovery operations, and regulatory compliance. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Scope and Applicability](#3-scope-and-applicability)
4. [Recovery Objectives — RPO and RTO Definitions](#4-recovery-objectives--rpo-and-rto-definitions)
5. [Business Impact Analysis](#5-business-impact-analysis)
6. [Recovery Priority Tiers](#6-recovery-priority-tiers)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Backup Schedule and Retention Periods](#8-backup-schedule-and-retention-periods)
9. [Disaster Recovery Procedures — Step-by-Step Process Flow](#9-disaster-recovery-procedures--step-by-step-process-flow)
10. [Restoration Testing Results](#10-restoration-testing-results)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*State the primary objective of this document and the regulatory obligation it fulfills. Identify the systems and processes it governs.*

This Disaster Recovery Plan (DRP) establishes the procedures, responsibilities, and technical steps required to recover [Organization Name]'s critical information systems and technology infrastructure following a disruptive event. It ensures continuity of critical operations within defined recovery time and recovery point objectives, and demonstrates compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy, specifically Clause 10.31.

This document is a mandatory component of [Organization Name]'s Technology Risk Management (TRM) framework and is reviewed no less than annually, or upon any significant change to the technology environment, organizational structure, or risk landscape.

### 1.2 Objectives

*List the specific outcomes this DRP is designed to achieve.*

- Minimize the impact of technology disruptions on business operations and customers.
- Ensure critical systems are recovered within approved RPO and RTO thresholds.
- Define clear escalation paths and decision-making authority during a declared disaster.
- Satisfy BNM RMiT Clause 10.31 requirements for documented, tested, and regularly reviewed disaster recovery capability.
- Provide a structured and repeatable recovery process that can be executed under adverse conditions.
- Ensure staff at all levels understand their roles and responsibilities during a recovery event.

### 1.3 Document Ownership

*Identify the accountable owner and the team responsible for maintaining this document.*

| Attribute | Detail |
|---|---|
| **Document Owner** | Head of IT Operations |
| **Custodian** | [IT Risk / Technology Risk Management Team] |
| **Review Trigger** | Annual review cycle, significant technology change, post-incident review, or BNM directive |
| **Distribution** | [Restricted — Authorized Personnel Only] |

---

## 2. Regulatory Context

*Summarize the BNM RMiT requirements this document addresses. Include direct references to policy clauses.*

### 2.1 BNM RMiT Policy Overview

Bank Negara Malaysia's Risk Management in Technology (RMiT) policy establishes comprehensive expectations for financial institutions regarding the management of technology risk. [Organization Name] is subject to full compliance with RMiT as a [licensed bank / licensed insurer / payment system operator — select applicable].

### 2.2 Applicable Clauses

| Clause | Title | Requirement Summary |
|---|---|---|
| 10.31 | Disaster Recovery | Financial institutions shall establish, implement, and regularly test disaster recovery plans for all critical systems. Plans shall define recovery objectives, assign responsibilities, and be reviewed at least annually or upon significant changes. |
| [10.x] | [Related Clause Title] | [Summary of related obligation] |
| [10.x] | [Related Clause Title] | [Summary of related obligation] |

### 2.3 Relationship to Other Frameworks

*Describe how this DRP relates to other internal policies and external frameworks applicable to the organization.*

This DRP operates within, and is consistent with, the following:

- **[Organization Name] Business Continuity Management (BCM) Policy** — The DRP is a subsidiary document to the BCM Policy and is invoked as part of the broader business continuity response.
- **[Organization Name] Technology Risk Management Framework** — Defines risk appetite thresholds that inform RPO and RTO targets.
- **BNM Business Continuity Management (BCM) Policy** — Complements RMiT obligations relating to operational continuity.
- **NACSA Cyber Security Framework** — Informs cyber-incident triggered DR scenarios.
- **ISO/IEC 22301:2019 (Business Continuity Management)** — [Organization Name] aligns its BCM/DR practices to ISO 22301 as a best-practice reference.
- **Personal Data Protection Act 2010 (PDPA)** — Recovery procedures must preserve the integrity and confidentiality of personal data throughout the recovery lifecycle.

---

## 3. Scope and Applicability

*Define precisely which systems, services, locations, and personnel fall within the scope of this DRP. Be explicit about what is excluded and why.*

### 3.1 In-Scope Systems and Services

*List all critical systems covered by this plan. Cross-reference the Business Impact Analysis (Section 5) and Recovery Priority Tiers (Section 6).*

| System / Application | System Owner | Criticality Tier | Hosting Environment |
|---|---|---|---|
| [Core Banking System] | [System Owner Name / Team] | Tier 1 — Mission Critical | [On-premise / Private Cloud / Hybrid] |
| [Payment Processing System] | [System Owner Name / Team] | Tier 1 — Mission Critical | [On-premise / Private Cloud / Hybrid] |
| [Internet Banking Platform] | [System Owner Name / Team] | Tier 1 — Mission Critical | [On-premise / Private Cloud / Hybrid] |
| [ATM/CDM Network] | [System Owner Name / Team] | Tier 1 — Mission Critical | [On-premise / Private Cloud / Hybrid] |
| [SWIFT/Interbank Connectivity] | [System Owner Name / Team] | Tier 1 — Mission Critical | [On-premise / Private Cloud / Hybrid] |
| [Active Directory / Identity Management] | [System Owner Name / Team] | Tier 2 — Business Critical | [On-premise / Private Cloud / Hybrid] |
| [Email and Collaboration Platform] | [System Owner Name / Team] | Tier 2 — Business Critical | [On-premise / Private Cloud / Hybrid] |
| [Risk Management System] | [System Owner Name / Team] | Tier 2 — Business Critical | [On-premise / Private Cloud / Hybrid] |
| [HR and Payroll System] | [System Owner Name / Team] | Tier 3 — Operational] | [On-premise / Private Cloud / Hybrid] |
| [Document Management System] | [System Owner Name / Team] | Tier 3 — Operational | [On-premise / Private Cloud / Hybrid] |

### 3.2 In-Scope Locations and Infrastructure

*Identify the physical locations and infrastructure components covered by this plan.*

- **Primary Data Centre:** [Name and Address of Primary DC]
- **Disaster Recovery (DR) Site:** [Name and Address of DR Site]
- **Network Infrastructure:** [WAN, LAN, SD-WAN components covered]
- **End-User Computing:** [Scope of device recovery, if applicable]
- **Third-Party Hosted / Cloud Services:** [List cloud-hosted services in scope]

### 3.3 Out-of-Scope Items

*Clearly document what is excluded from this DRP and reference the document that covers excluded items.*

| Excluded Item | Rationale / Governing Document |
|---|---|
| [Non-critical administrative systems (Tier 4)] | [Covered under departmental continuity plans] |
| [Physical site recovery (building reinstatement)] | [Covered under Facilities and Premises BCM Plan] |
| [Employee welfare and crisis communications] | [Covered under Human Resources Crisis Management Plan] |
| [Vendor-managed SaaS platforms with own DR] | [Managed under Third-Party Risk Management Policy; vendor DR evidence reviewed annually] |

### 3.4 Applicability

This DRP applies to:

- All employees of [Organization Name] with technology operations responsibilities.
- Third-party service providers and vendors operating in-scope systems under contract with [Organization Name].
- Technology subsidiaries of [Organization Name] as listed in **Appendix A**.

---

## 4. Recovery Objectives — RPO and RTO Definitions

*Define the approved Recovery Point Objective (RPO) and Recovery Time Objective (RTO) for each system tier. These values must be derived from the Business Impact Analysis (Section 5) and formally approved by senior management.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Recovery Time Objective (RTO)** | The maximum acceptable duration of time within which a system, application, or business process must be restored following a disruption, to avoid unacceptable consequences to the organization. |
| **Recovery Point Objective (RPO)** | The maximum acceptable amount of data loss measured in time. It defines the point in time to which data must be recovered following a disruption. |
| **Maximum Tolerable Downtime (MTD)** | The total length of time an organization can survive without a critical function before viability is threatened. MTD is always greater than or equal to RTO. |
| **Work Recovery Time (WRT)** | The time required to verify recovery integrity and resume normal operations after the system is technically restored. WRT + RTO ≤ MTD. |

### 4.2 Approved RPO and RTO by System Tier

*These values are informed by the BIA (Section 5) and represent the maximum thresholds approved by [Organization Name]'s Board/EXCO. Actual achieved recovery times are recorded in DR test results (Section 10).*

| Tier | Classification | RTO | RPO | MTD | Approved By | Date Approved |
|---|---|---|---|---|---|---|
| **Tier 1** | Mission Critical | ≤ 4 hours | ≤ 1 hour | 8 hours | [Name / Committee] | [Date] |
| **Tier 2** | Business Critical | ≤ 24 hours | ≤ 4 hours | 48 hours | [Name / Committee] | [Date] |
| **Tier 3** | Operational | ≤ 72 hours | ≤ 24 hours | 7 days | [Name / Committee] | [Date] |
| **Tier 4** | Non-Critical | ≤ 30 days | ≤ 7 days | 30 days | [Name / Committee] | [Date] |

### 4.3 System-Level RPO and RTO Assignments

| System / Application | Tier | RTO | RPO | Last Validated (DR Test) |
|---|---|---|---|---|
| [Core Banking System] | Tier 1 | [X hours] | [X hours] | [Date] |
| [Payment Processing System] | Tier 1 | [X hours] | [X hours] | [Date] |
| [Internet Banking Platform] | Tier 1 | [X hours] | [X hours] | [Date] |
| [ATM/CDM Network] | Tier 1 | [X hours] | [X hours] | [Date] |
| [SWIFT/Interbank Connectivity] | Tier 1 | [X hours] | [X hours] | [Date] |
| [Active Directory] | Tier 2 | [X hours] | [X hours] | [Date] |
| [Email Platform] | Tier 2 | [X hours] | [X hours] | [Date] |
| [Risk Management System] | Tier 2 | [X hours] | [X hours] | [Date] |
| [HR and Payroll System] | Tier 3 | [X hours] | [X hours] | [Date] |
| [Document Management] | Tier 3 | [X hours] | [X hours] | [Date] |

---

## 5. Business Impact Analysis

*Summarize the Business Impact Analysis (BIA) findings that underpin the recovery priorities and objectives in this DRP. The full BIA report is maintained as a separate document; this section captures the key outputs relevant to DR planning.*

### 5.1 BIA Reference

| Attribute | Detail |
|---|---|
| **BIA Document Reference** | [BIA Document ID / Title] |
| **BIA Version** | [Version Number] |
| **BIA Date Completed** | [Date] |
| **BIA Owner** | [Name / Team] |
| **Next BIA Review** | [Date] |

### 5.2 Critical Business Functions and Technology Dependencies

*Map each critical business function to its supporting technology systems. This mapping drives recovery prioritization.*

| Critical Business Function | Supporting Systems | Business Impact of Disruption | Regulatory Reporting Obligation |
|---|---|---|---|
| [Retail Banking Transactions] | [Core Banking, Payment Gateway, ATM Network] | [Financial loss, customer impact, regulatory breach] | [Yes — BNM reporting within X hours] |
| [Interbank / RENTAS Payments] | [SWIFT, Core Banking, Payment System] | [Systemic risk, counterparty exposure] | [Yes — BNM reporting within X hours] |
| [Internet / Mobile Banking] | [Internet Banking Platform, API Gateway, Core Banking] | [Customer service disruption, reputational risk] | [Yes — BNM reporting within X hours] |
| [Treasury Operations] | [Treasury System, Bloomberg, Risk System] | [Market risk, financial loss] | [Yes / No] |
| [Regulatory Reporting] | [Data Warehouse, Reporting Platform] | [Regulatory non-compliance, penalty risk] | [Yes — statutory deadlines] |
| [Customer Onboarding / KYC] | [CRM, eKYC Platform, Core Banking] | [Revenue impact, onboarding delays] | [No] |

### 5.3 Quantified Impact Assessment

*Provide a summary of financial, operational, reputational, and regulatory impacts by time duration for each critical function.*

| Business Function | Impact Category | 0–4 Hours | 4–24 Hours | 24–72 Hours | > 72 Hours |
|---|---|---|---|---|---|
| [Core Banking] | Financial (MYR) | [Low] | [MYR X–Y million] | [MYR Y–Z million] | [> MYR Z million] |
| [Core Banking] | Regulatory | [Notification required] | [BNM formal reporting] | [Potential enforcement] | [Enforcement action] |
| [Core Banking] | Reputational | [Minimal] | [Moderate] | [High] | [Critical] |
| [Payment Processing] | Financial (MYR) | [Low] | [MYR X–Y million] | [MYR Y–Z million] | [> MYR Z million] |
| [Payment Processing] | Regulatory | [Notification required] | [BNM formal reporting] | [Potential enforcement] | [Enforcement action] |
| [Internet Banking] | Reputational | [Moderate] | [High] | [Critical] | [Critical] |

### 5.4 Key BIA Assumptions

*Document assumptions made during the BIA that affect DR planning.*

- [All Tier 1 systems are assumed to require 24/7 availability with no planned maintenance windows during market hours.]
- [The BIA assumes a single-site failure scenario as the primary DR trigger; multi-site failure scenarios are addressed in the BCM Plan.]
- [Impact estimates are based on average daily transaction volumes as of [BIA Date].]
- [Regulatory reporting obligations are based on BNM RMiT and FSA/IFSA notification requirements current as of [Date].]

---

## 6. Recovery Priority Tiers

*Define the recovery sequence and prioritization criteria used to determine the order in which systems and services are recovered following a disaster declaration.*

### 6.1 Prioritization Principles

*Describe the criteria used to assign recovery priorities.*

Recovery priorities are determined by the following criteria, applied in order:

1. **Regulatory and Legal Obligation** — Systems whose failure triggers mandatory regulatory reporting or legal non-compliance are recovered first.
2. **Financial Exposure** — Systems whose unavailability directly causes quantifiable financial loss (transaction failures, settlement risk) take precedence.
3. **Customer Impact** — Customer-facing systems with broad impact are prioritized over internal systems.
4. **Dependency Chains** — Infrastructure and platform dependencies (e.g., network, identity, databases) are recovered before dependent applications.
5. **Operational Necessity** — Systems required to execute the recovery process itself (e.g., management networks, monitoring tools) are recovered as part of the initial recovery wave.

### 6.2 Recovery Waves

*Map systems and services to sequential recovery waves. Wave 1 must complete before Wave 2 begins, etc.*

#### Wave 1 — Infrastructure Foundation (Target: 0–2 Hours)

*Recover the foundational infrastructure required to support all subsequent recovery activities.*

| Priority | System / Service | Responsible Team | Target Recovery Time |
|---|---|---|---|
| 1.1 | [DR Site Network Connectivity] | [Network Team] | [30 minutes] |
| 1.2 | [Core Network Services (DNS, DHCP, NTP)] | [Network Team] | [45 minutes] |
| 1.3 | [Storage and SAN Infrastructure] | [Storage Team] | [60 minutes] |
| 1.4 | [Active Directory / Identity Services] | [Systems Team] | [90 minutes] |
| 1.5 | [Security Controls (Firewall, IDS/IPS, PAM)] | [Security Team] | [120 minutes] |

#### Wave 2 — Mission-Critical Applications (Target: 2–4 Hours)

*Recover Tier 1 business applications once foundational infrastructure is confirmed operational.*

| Priority | System / Service | Responsible Team | Target Recovery Time |
|---|---|---|---|
| 2.1 | [Core Banking System] | [Core Banking Team] | [RTO: X hours from declaration] |
| 2.2 | [Payment Processing System] | [Payments Team] | [RTO: X hours from declaration] |
| 2.3 | [SWIFT / Interbank Connectivity] | [Payments Team] | [RTO: X hours from declaration] |
| 2.4 | [ATM/CDM Network Management] | [Channels Team] | [RTO: X hours from declaration] |
| 2.5 | [Internet Banking Platform] | [Digital Channels Team] | [RTO: X hours from declaration] |

#### Wave 3 — Business-Critical Applications (Target: 4–24 Hours)

*Recover Tier 2 systems supporting critical business operations.*

| Priority | System / Service | Responsible Team | Target Recovery Time |
|---|---|---|---|
| 3.1 | [Email and Collaboration] | [Workspace Team] | [RTO: X hours from declaration] |
| 3.2 | [Risk Management System] | [Risk IT Team] | [RTO: X hours from declaration] |
| 3.3 | [Treasury System] | [Treasury IT Team] | [RTO: X hours from declaration] |
| 3.4 | [Regulatory Reporting Platform] | [Data/Reporting Team] | [RTO: X hours from declaration] |

#### Wave 4 — Operational and Non-Critical Systems (Target: 24–72 Hours)

| Priority | System / Service | Responsible Team | Target Recovery Time |
|---|---|---|---|
| 4.1 | [HR and Payroll System] | [IT Support Team] | [RTO: X hours from declaration] |
| 4.2 | [Document Management System] | [IT Support Team] | [RTO: X hours from declaration] |
| 4.3 | [Internal Helpdesk / ITSM Tool] | [IT Support Team] | [RTO: X hours from declaration] |

---

## 7. Roles and Responsibilities

*Define the organizational structure activated during a disaster recovery event. Include all personnel with DR responsibilities and their authority levels.*

### 7.1 DR Team Structure

*Describe the command structure for DR operations.*

During a declared disaster, [Organization Name] activates the **Disaster Recovery Command Structure** comprising the following functions:

- **Executive Sponsor** — Provides executive authority and decision-making for disaster declarations and major recovery decisions.
- **DR Incident Commander** — Central coordinator responsible for overall DR execution and inter-team coordination.
- **Recovery Team Leads** — Technical leads responsible for recovering specific system domains.
- **Business Recovery Liaison** — Represents business units to validate recovery completeness and communicate status to stakeholders.
- **Communications Lead** — Manages internal and external communications during the DR event.

### 7.2 DR Team Members and Contact Details

*List all DR team members, their roles, and contact information. Store in a format accessible during a major outage (e.g., printed copy, offline secure location).*

| Role | Name | Team | Primary Contact | Alternate Contact | Backup Person |
|---|---|---|---|---|---|
| Executive Sponsor | [Name] | [EXCO / CTO / CIO] | [Mobile] | [Email] | [Name] |
| DR Incident Commander | [Name] | IT Operations | [Mobile] | [Email] | [Name] |
| Infrastructure Lead | [Name] | IT Operations | [Mobile] | [Email] | [Name] |
| Network Lead | [Name] | Network Team | [Mobile] | [Email] | [Name] |
| Security Lead | [Name] | Information Security | [Mobile] | [Email] | [Name] |
| Core Banking Lead | [Name] | Core Banking Team | [Mobile] | [Email] | [Name] |
| Payments Lead | [Name] | Payments Team | [Mobile] | [Email] | [Name] |
| Database Administrator | [Name] | DBA Team | [Mobile] | [Email] | [Name] |
| Storage / Backup Lead | [Name] | Storage Team | [Mobile] | [Email] | [Name] |
| Communications Lead | [Name] | Corporate Communications | [Mobile] | [Email] | [Name] |
| Business Recovery Liaison | [Name] | [Business Unit] | [Mobile] | [Email] | [Name] |
| BNM Liaison Officer | [Name] | Compliance | [Mobile] | [Email] | [Name] |
| Vendor Support Lead | [Name] | IT Procurement | [Mobile] | [Email] | [Name] |

### 7.3 RACI Matrix

*The RACI matrix defines who is Responsible (R), Accountable (A), Consulted (C), and Informed (I) for each key DR activity.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| DR Activity | Executive Sponsor | DR Incident Commander | Infrastructure Lead | Security Lead | System Recovery Leads | DBA | Comms Lead | Business Liaison | BNM Liaison |
|---|---|---|---|---|---|---|---|---|---|
| Declare Disaster / Invoke DR Plan | A | R | C | C | I | I | I | C | I |
| Notify BNM (within required timeframe) | A | C | I | I | I | I | I | I | R |
| Activate DR Site | I | A | R | C | C | C | I | I | I |
| Notify DR Team Members | I | R/A | I | I | I | I | I | I | I |
| Recover Network Infrastructure | I | A | R | C | I | I | I | I | I |
| Recover Identity / Active Directory | I | A | R | C | R | I | I | I | I |
| Recover Security Controls | I | A | C | R | C | I | I | I | I |
| Recover Core Banking System | I | A | C | C | R | R | I | C | I |
| Recover Payment Systems | I | A | C | C | R | R | I | C | I |
| Restore Databases from Backup | I | A | C | C | C | R | I | I | I |
| Validate Data Integrity (post-recovery) | I | A | C | C | R | R | I | R | I |
| Test and Verify System Functionality | I | A | R | C | R | R | I | R | I |
| Notify Business Units of Recovery Status | I | A | I | I | I | I | R | R | I |
| Manage External Communications | A | C | I | I | I | I | R | C | I |
| Declare Recovery Complete | A | R | C | C | C | C | C | R | I |
| Initiate Failback to Primary Site | A | R | R | C | R | R | I | C | I |
| Conduct Post-Incident Review | A | R | R | R | R | R | C | R | C |
| Update DR Plan Post-Incident | I | A | R | R | R | R | I | C | I |

### 7.4 Escalation Thresholds and Decision Authority

*Define the criteria and authority levels for key decisions during a DR event.*

| Decision | Authority Level | Escalation Trigger |
|---|---|---|
| Invoke DR Plan (declare disaster) | [CTO / CIO / EXCO] | [Primary site unavailable for > X hours, or confirmed as unrecoverable within RTO] |
| Activate DR Site (initiate failover) | [Head of IT Operations] | [Authorization from CTO/CIO, or after X hours of failed primary site recovery] |
| Notify BNM under RMiT | [CEO / CTO + Compliance Officer] | [Disruption exceeds [X] hours for Tier 1 systems; or per BNM reporting thresholds] |
| Engage emergency vendor support | [Head of IT Operations] | [Recovery blocked by vendor-managed component for > X hours] |
| Declare recovery complete / failback | [CTO / CIO + Business Liaison] | [All Tier 1 and Tier 2 systems validated and operational at DR site] |
| Invoke business continuity (manual procedures) | [Business COO / Business Continuity Manager] | [RTO breach for Tier 1 systems; business cannot wait for technical recovery] |

---

## 8. Backup Schedule and Retention Periods

*Define the backup strategy, schedule, media, storage locations, and retention policies for all in-scope systems. Backup configurations must be validated during DR tests.*

### 8.1 Backup Strategy Overview

*Describe the overall backup architecture and approach.*

[Organization Name] employs a **[3-2-1 / 3-2-1-1-0]** backup strategy:

- **[3]** copies of data maintained at all times.
- **[2]** different storage media types used.
- **[1]** copy stored offsite / at the DR site.
- **[1]** copy stored offline or air-gapped (if applicable).
- **[0]** errors verified during backup testing.

Backup infrastructure: [Describe backup software, backup servers, tape libraries, cloud backup destinations, as applicable.]

### 8.2 Backup Schedule

*Specify the backup frequency for each in-scope system or data category.*

| System / Data Category | Backup Type | Frequency | Backup Window | Backup Tool | Destination |
|---|---|---|---|---|---|
| [Core Banking Database] | Full | Weekly (Sunday) | [02:00–06:00] | [Backup Tool Name] | [Primary Backup Server + DR Site] |
| [Core Banking Database] | Incremental | Daily (Mon–Sat) | [02:00–03:00] | [Backup Tool Name] | [Primary Backup Server + DR Site] |
| [Core Banking Transaction Logs] | Continuous / Log Shipping | Real-time | N/A | [Replication Tool] | [DR Site — Standby DB] |
| [Payment System Database] | Full | Weekly (Sunday) | [01:00–04:00] | [Backup Tool Name] | [Primary Backup Server + DR Site] |
| [Payment System Database] | Incremental | Daily | [01:00–02:00] | [Backup Tool Name] | [Primary Backup Server + DR Site] |
| [Internet Banking Platform] | Full | Weekly | [03:00–05:00] | [Backup Tool Name] | [Primary Backup Server + DR Site] |
| [Active Directory] | Full | Daily | [23:00–00:00] | [Backup Tool Name] | [Primary Backup Server + DR Site] |
| [File Servers / Document Store] | Full | Weekly | [00:00–04:00] | [Backup Tool Name] | [Primary Backup Server + DR Site] |
| [File Servers / Document Store] | Incremental | Daily | [23:30–00:30] | [Backup Tool Name] | [Primary Backup Server] |
| [Email Platform] | Full | Weekly | [01:00–05:00] | [Backup Tool Name] | [Primary Backup Server + DR Site] |
| [Configuration Files (Network/Security)] | Versioned snapshot | On-change + Weekly | [N/A] | [Config Management Tool] | [DR Site + Secure Vault] |
| [Virtual Machine Images] | VM Snapshot | Weekly | [02:00–06:00] | [Hypervisor Backup Tool] | [Primary + DR Site Storage] |

### 8.3 Backup Retention Periods

*Define retention periods in line with regulatory obligations and data classification requirements.*

| Data / Backup Category | Daily Retention | Weekly Retention | Monthly Retention | Annual Retention | Regulatory Basis |
|---|---|---|---|---|---|
| [Core Banking Transaction Data] | 7 days | 4 weeks | 12 months | 7 years | [FSA 2013 / BNM Records Management Policy] |
| [Payment System Data] | 7 days | 4 weeks | 12 months | 7 years | [Payment Systems Act / BNM] |
| [Audit Logs] | 90 days (online) | — | — | 7 years (archive) | [RMiT / PDPA] |
| [Email and Communications] | — | 4 weeks | 12 months | 7 years | [Internal Policy / Legal Hold] |
| [System Configuration Backups] | 30 days | 12 weeks | 12 months | 3 years | [Internal Policy] |
| [VM Snapshots] | 7 days | 4 weeks | 3 months | — | [Internal Policy] |
| [DR Test Backups (point-in-time)] | — | — | — | 3 years (after test) | [RMiT Audit Evidence] |

### 8.4 Backup Verification and Integrity Checks

*Describe the processes used to verify backup integrity and ensure restorability.*

| Verification Activity | Frequency | Responsible | Evidence Retained |
|---|---|---|---|
| Automated backup completion check (job logs) | Daily | [Backup Operations Team] | [ITSM / Monitoring Tool logs] |
| Spot restore test (single file / object) | Weekly | [Backup Operations Team] | [Test log, sign-off sheet] |
| Full restore test (database / application) | Quarterly | [DBA / System Owner] | [DR Test Report — Section 10] |
| Offsite / DR site backup replication validation | Monthly | [Storage Team] | [Replication report] |
| Annual end-to-end DR test (restore to DR site) | Annual | [IT Operations + All Teams] | [Annual DR Test Report — Section 10] |
| Backup encryption key validation | Quarterly | [Information Security] | [Key management audit log] |

### 8.5 Backup Storage Locations

| Location Type | Physical Location | Access Controls | Encryption |
|---|---|---|---|
| Primary Backup Server | [Primary Data Centre, Rack/Row] | [Access control list, MFA required] | [AES-256 at rest] |
| DR Site Backup Storage | [DR Site Address, Room] | [Access control list, MFA required] | [AES-256 at rest] |
| Offsite Tape / Archive | [Third-party storage provider, Location] | [Locked vault, authorized personnel only] | [AES-256, encrypted before transport] |
| Cloud Backup (if applicable) | [Cloud Provider, Region] | [IAM-controlled, dedicated backup account] | [AES-256, TLS in transit] |

---

## 9. Disaster Recovery Procedures — Step-by-Step Process Flow

*This section contains the operational procedures for executing the disaster recovery plan. Procedures are organized by phase. Each procedure should be executable by a trained DR team member under adverse conditions.*

### 9.1 DR Invocation Criteria

*Define the specific conditions that trigger formal declaration of a disaster and invocation of this DRP.*

A disaster is declared and this DRP is formally invoked when one or more of the following conditions are met:

| Condition | Threshold | Decision Authority |
|---|---|---|
| Primary data centre unavailable | > [2 hours] with no restoration path confirmed | [CTO / CIO] |
| Tier 1 system unavailable | > [RTO threshold — X hours] with no restoration path | [Head of IT Operations] |
| Cyber security incident (ransomware, destructive malware) | Confirmed containment requiring system rebuild | [CISO + CTO] |
| Physical disaster at primary site | Confirmed site inaccessibility | [CEO / EXCO] |
| Network connectivity failure (primary site) | > [1 hour] with ISP confirming no near-term resolution | [Head of IT Operations] |
| Utility / power failure (beyond UPS/generator capacity) | > [4 hours] with no restoration ETA | [Head of IT Operations] |

### 9.2 Phase 1 — Detection and Assessment (0–30 Minutes)

*Actions immediately following detection of a potential disaster-level event.*

**Step 1.1 — Initial Alert and Triage**

- [ ] On-call IT Operations Engineer receives alert from monitoring system or incident report.
- [ ] Engineer assesses scope and severity of the incident.
- [ ] Engineer attempts initial diagnosis and first-line remediation per the relevant runbook.
- [ ] If issue cannot be resolved within [30 minutes], engineer escalates to the DR Incident Commander.

**Step 1.2 — Notify DR Incident Commander**

- [ ] On-call engineer contacts the DR Incident Commander via [phone / out-of-band communication channel].
- [ ] Provide: description of the incident, systems affected, estimated impact, actions taken so far.
- [ ] DR Incident Commander logs time of notification: _______________

**Step 1.3 — Convene Initial Assessment Call**

- [ ] DR Incident Commander convenes bridge call with: Infrastructure Lead, Security Lead, relevant System Recovery Leads.
- [ ] Call bridge details: [Phone number / conferencing link — stored offline in Appendix B]
- [ ] Assess: scope, cause (if known), recovery options, and feasibility of restoring primary site within RTO.

**Step 1.4 — Escalation Decision**

- [ ] DR Incident Commander recommends course of action to Executive Sponsor:
  - Option A: Continue primary site recovery (if RTO still achievable).
  - Option B: Declare disaster and invoke DR failover.
- [ ] Decision documented: _______________
- [ ] Time of decision: _______________

---

### 9.3 Phase 2 — Disaster Declaration (30–60 Minutes)

**Step 2.1 — Formal Disaster Declaration**

- [ ] Executive Sponsor (or delegate) formally declares a disaster.
- [ ] Declaration recorded in the DR incident log (Appendix C).
- [ ] Time of declaration: _______________

**Step 2.2 — Activate DR Team**

- [ ] DR Incident Commander notifies all DR team members using the contact list in Section 7.2.
- [ ] Use [SMS blast / phone tree / out-of-band messaging platform] as primary notification method.
- [ ] DR team members acknowledge receipt and confirm availability.
- [ ] Team assembly target: all leads online within [30 minutes] of declaration.

**Step 2.3 — Notify Regulators (if required)**

- [ ] BNM Liaison Officer assesses whether the incident meets BNM notification thresholds under RMiT.
- [ ] If notification required: BNM Liaison Officer initiates notification to BNM via [prescribed channel] within [timeframe per BNM requirement].
- [ ] Notification logged in the incident record.
- [ ] BNM contact details: [Stored in Appendix B — not published in this document]

**Step 2.4 — Notify Internal Stakeholders**

- [ ] Communications Lead drafts and issues initial internal communication to [EXCO, Business Unit Heads, Customer Service].
- [ ] Communication template available in Appendix D.
- [ ] Initial external customer communication (if applicable) prepared and held pending CTO/CEO approval.

**Step 2.5 — Activate DR Site**

- [ ] Infrastructure Lead initiates DR site activation procedures.
- [ ] Confirm DR site physical access for on-site DR team: [DR site access procedure in Appendix E].
- [ ] Confirm DR site utilities (power, cooling, network) are operational.
- [ ] Time DR site confirmed operational: _______________

---

### 9.4 Phase 3 — Recovery Execution (1–[RTO] Hours)

*Execute recovery in the sequence defined in Section 6 (Recovery Waves). Each wave must be validated before proceeding to the next.*

#### 9.4.1 Wave 1 Recovery — Infrastructure Foundation

**Step 3.1 — Restore DR Site Network Connectivity**

- [ ] Network Lead verifies DR site WAN links are active: [circuit IDs in Appendix F].
- [ ] Confirm routing tables are correct and BGP/MPLS failover is active.
- [ ] Test connectivity from DR site to: [Internet / SWIFT / interbank networks / BNM infrastructure].
- [ ] Network validated by: _______________ Time: _______________

**Step 3.2 — Restore Core Network Services**

- [ ] Systems Team verifies DNS, DHCP, NTP services are operational at DR site.
- [ ] Confirm DNS records point to DR site IP addresses for in-scope systems.
- [ ] Validate NTP synchronization (critical for financial transaction timestamps and Kerberos authentication).
- [ ] Core network services validated by: _______________ Time: _______________

**Step 3.3 — Restore Storage Infrastructure**

- [ ] Storage Lead verifies DR site SAN/storage arrays are operational.
- [ ] Confirm replication data is current (validate RPO — check last replication timestamp).
- [ ] Present storage volumes to recovery hosts as required.
- [ ] Last replication timestamp confirmed: _______________ RPO gap: _______________

**Step 3.4 — Restore Active Directory / Identity Services**

- [ ] Systems Team promotes DR site AD domain controllers if not already in place.
- [ ] Verify AD replication health and confirm no replication lag.
- [ ] Test user authentication from DR site workstations.
- [ ] AD services validated by: _______________ Time: _______________

**Step 3.5 — Restore Security Controls**

- [ ] Security Lead verifies DR site firewall rules and policies are active.
- [ ] Confirm IDS/IPS and WAF are operational and policies are current.
- [ ] Confirm Privileged Access Management (PAM) solution is accessible.
- [ ] Confirm SIEM is receiving events from DR site infrastructure.
- [ ] Security controls validated by: _______________ Time: _______________

**Wave 1 Sign-Off**

Infrastructure Lead: _______________ DR Incident Commander: _______________ Time: _______________

---

#### 9.4.2 Wave 2 Recovery — Mission-Critical Applications

**Step 3.6 — Restore Core Banking System**

- [ ] Core Banking Team Lead initiates core banking recovery procedure: [refer to Core Banking DR Runbook — Appendix G.1].
- [ ] Start database instances in correct startup sequence: [Document sequence in runbook].
- [ ] Restore from latest validated backup / confirm standby database is current.
- [ ] Apply outstanding transaction logs / redo logs to minimize data loss.
- [ ] Run data integrity verification scripts: [Script names/locations in Appendix G.1].
- [ ] Conduct functional smoke test: [Test cases in Appendix G.1].
- [ ] Core Banking validated by: _______________ Time: _______________ RPO achieved: _______________

**Step 3.7 — Restore Payment Processing System**

- [ ] Payments Team Lead initiates payment system recovery: [refer to Payments DR Runbook — Appendix G.2].
- [ ] Confirm connectivity to payment scheme networks (IBG, DuitNow, RENTAS, Visa/Mastercard).
- [ ] Validate payment queue integrity — identify and reconcile any in-flight transactions at time of failover.
- [ ] Conduct functional smoke test for payment processing.
- [ ] Payment System validated by: _______________ Time: _______________ RPO achieved: _______________

**Step 3.8 — Restore SWIFT / Interbank Connectivity**

- [ ] Confirm SWIFT BIC and correspondent bank details are configured at DR site.
- [ ] Test SWIFT connectivity using test messages.
- [ ] Notify correspondent banks of DR site activation if required.
- [ ] SWIFT validated by: _______________ Time: _______________

**Step 3.9 — Restore ATM/CDM Network**

- [ ] Channels Team confirms ATM network management platform is operational at DR site.
- [ ] Switch ATM network management to DR site endpoints.
- [ ] Validate sample ATM connectivity and transaction processing.
- [ ] ATM Network validated by: _______________ Time: _______________

**Step 3.10 — Restore Internet Banking Platform**

- [ ] Digital Channels Team restores internet banking application servers.
- [ ] Update DNS/load balancer to route customer traffic to DR site.
- [ ] Conduct end-to-end functional test (login, enquiry, transfer).
- [ ] Internet Banking validated by: _______________ Time: _______________

**Wave 2 Sign-Off**

System Recovery Leads: _______________ Business Liaison: _______________ DR Incident Commander: _______________ Time: _______________

---

#### 9.4.3 Wave 3 and Wave 4 Recovery

*Repeat the structured recovery approach above for each Wave 3 and Wave 4 system in accordance with the relevant system-specific runbooks (Appendices G.3 onwards). Wave 3 recovery is led by the respective System Recovery Lead under the direction of the DR Incident Commander.*

---

### 9.5 Phase 4 — Validation and Recovery Completion

**Step 4.1 — Business Validation**

- [ ] Business Recovery Liaison conducts end-to-end business process validation for each critical function.
- [ ] All Tier 1 and Tier 2 business functions confirmed operational.
- [ ] Outstanding data reconciliation items identified and logged.

**Step 4.2 — Declare Recovery Complete**

- [ ] DR Incident Commander confirms all Wave 1 and Wave 2 systems are operational and validated.
- [ ] Executive Sponsor formally declares recovery phase complete.
- [ ] Time of recovery completion: _______________
- [ ] Total RTO achieved: _______________ hours.

**Step 4.3 — Notify Stakeholders of Recovery**

- [ ] Communications Lead issues "recovery complete" notification to internal stakeholders.
- [ ] External customer communication issued if applicable.
- [ ] BNM Liaison Officer provides recovery status notification to BNM if required.

---

### 9.6 Phase 5 — Stabilization and Failback

*Actions to stabilize operations at the DR site and plan return to the primary site.*

**Step 5.1 — DR Site Stabilization**

- [ ] Confirm all monitoring and alerting tools are active at DR site.
- [ ] Initiate reverse replication (DR site → Primary site) in preparation for failback.
- [ ] Assess root cause of original primary site failure and confirm it has been resolved.

**Step 5.2 — Failback Planning**

- [ ] DR Incident Commander and Infrastructure Lead prepare a failback plan.
- [ ] Failback plan reviewed and approved by CTO/CIO.
- [ ] Failback window scheduled to minimize business impact (typically non-business hours).
- [ ] Stakeholders notified of planned failback timing.

**Step 5.3 — Failback Execution**

- [ ] Execute failback in reverse wave order (Tier 3/4 first, Tier 1 last) to minimize risk.
- [ ] Validate each system after failback to primary site.
- [ ] Confirm replication from DR site to primary is current before failover.
- [ ] Primary site declared operational.
- [ ] Time of failback completion: _______________

---

## 10. Restoration Testing Results

*Document the outcomes of all DR tests conducted. Regular DR testing is a mandatory requirement under RMiT Clause 10.31. This section serves as the audit record of DR test activities and results.*

### 10.1 DR Testing Requirements

*Describe the minimum testing requirements and types of tests conducted.*

[Organization Name] conducts DR tests in accordance with the following schedule, as required by BNM RMiT:

| Test Type | Frequency | Scope | Lead |
|---|---|---|---|
| Tabletop / Walkthrough Exercise | Semi-annual | All DR team members; review plan and scenarios | DR Incident Commander |
| Backup Restore Test (database-level) | Quarterly | Select Tier 1 databases restored to isolated environment | DBA Team |
| Partial Failover Test (non-production) | Semi-annual | Tier 1 systems failed over to DR site in isolated window | IT Operations |
| Full DR Exercise (production failover) | Annual | All in-scope systems failed over to DR site; business validation | All DR Teams |
| Unannounced / Surprise Test | [Frequency — e.g., once every 2 years] | [Scope] | [Lead] |

### 10.2 DR Test Record

*Maintain a running record of all DR tests conducted. Each completed test must be recorded here and supported by a full test report filed in [Document Repository Location].*

| Test ID | Test Date | Test Type | Systems Tested | Lead | Result (Pass/Fail/Partial) | RTO Achieved | RPO Achieved | Key Findings | Report Reference |
|---|---|---|---|---|---|---|---|---|---|
| DRT-[YYYY]-001 | [Date] | [Test Type] | [Systems] | [Lead Name] | [Pass / Fail / Partial] | [X hours] | [X hours] | [Summary of key findings] | [Report ID / Link] |
| DRT-[YYYY]-002 | [Date] | [Test Type] | [Systems] | [Lead Name] | [Pass / Fail / Partial] | [X hours] | [X hours] | [Summary of key findings] | [Report ID / Link] |
| DRT-[YYYY]-003 | [Date] | [Test Type] | [Systems] | [Lead Name] | [Pass / Fail / Partial] | [X hours] | [X hours] | [Summary of key findings] | [Report ID / Link] |

### 10.3 Most Recent Full DR Test Summary

*Provide a summary of the most recent full DR exercise for quick reference. Full details are in the test report.*

| Attribute | Detail |
|---|---|
| **Test ID** | [DRT-YYYY-XXX] |
| **Test Date** | [Date] |
| **Test Scenario** | [e.g., Total primary data centre failure due to power outage] |
| **Test Lead** | [Name] |
| **Overall Result** | [Pass / Fail / Partial Pass] |
| **Overall RTO Achieved** | [X hours Y minutes] |
| **Overall RPO Achieved** | [X hours Y minutes] |
| **Tier 1 Systems Recovered** | [X of Y systems — list any failures] |
| **Tier 2 Systems Recovered** | [X of Y systems — list any failures] |
| **Business Validation Outcome** | [Pass / Fail — key observations] |
| **Number of Deficiencies Identified** | [N] |
| **Critical Deficiencies** | [Describe or state "None"] |
| **Full Report Location** | [Document Repository Path / Link] |

### 10.4 Outstanding Deficiencies and Remediation

*Track all deficiencies identified during DR tests and their remediation status. Unresolved critical deficiencies must be escalated to IT Risk Committee.*

| Deficiency ID | Source Test | Description | Severity | Owner | Target Resolution Date | Status | Resolved Date |
|---|---|---|---|---|---|---|---|
| DEF-[YYYY]-001 | [Test ID] | [Description of deficiency] | [Critical / High / Medium / Low] | [Owner Name] | [Date] | [Open / In Progress / Resolved] | [Date or N/A] |
| DEF-[YYYY]-002 | [Test ID] | [Description of deficiency] | [Critical / High / Medium / Low] | [Owner Name] | [Date] | [Open / In Progress / Resolved] | [Date or N/A] |

---

## 11. Review and Approval

### 11.1 Review Triggers

This document must be reviewed and updated under the following conditions:

- Annually, no later than [month] each year, as part of the formal IT risk review cycle.
- Following any significant change to in-scope systems or infrastructure.
- Following any declared disaster or major incident affecting in-scope systems.
- Following any DR test that identifies material deficiencies.
- Upon any change to BNM RMiT requirements or related regulatory obligations.
- Upon change to organizational structure affecting DR roles.

### 11.2 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | Initial document creation. |
| 1.1 | [Date] | [Author Name] | [Reviewer Name] | [Description of changes] |
| 2.0 | [Date] | [Author Name] | [Reviewer Name] | [Description of major revision] |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of IT Operations (Owner) | [Name] | _______________ | [Date] |
| Chief Information Officer | [Name] | _______________ | [Date] |
| Chief Technology Officer | [Name] | _______________ | [Date] |
| Chief Information Security Officer | [Name] | _______________ | [Date] |
| Chief Risk Officer | [Name] | _______________ | [Date] |
| Chief Compliance Officer | [Name] | _______________ | [Date] |
| Board Risk Committee Representative | [Name] | _______________ | [Date] |

---

## 12. References

*List all regulatory requirements, internal policies, and standards that this document addresses or is governed by.*

### 12.1 Regulatory References

| Reference | Title | Issuing Authority | Clause(s) | URL / Access |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy | Bank Negara Malaysia | 10.31 | [BNM Website / Internal Policy Library] |
| BNM BCM | Business Continuity Management Policy | Bank Negara Malaysia | [Relevant clauses] | [BNM Website / Internal Policy Library] |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | [Relevant sections] | [Internal Legal Repository] |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | [Relevant sections — if applicable] | [Internal Legal Repository] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | [Relevant sections] | [Internal Legal Repository] |
| NACSA CSF | Cybersecurity Framework | NACSA | [Relevant controls] | [Internal Policy Library] |

### 12.2 Internal Policy References

| Document ID | Document Title | Owner | Location |
|---|---|---|---|
| [POL-BCM-001] | Business Continuity Management Policy | [BCM Manager] | [Internal Policy Library] |
| [POL-TRM-001] | Technology Risk Management Framework | [CTO / CISO] | [Internal Policy Library] |
| [POL-ISM-001] | Information Security Policy | [CISO] | [Internal Policy Library] |
| [POL-DM-001] | Data Management and Classification Policy | [CDO / CISO] | [Internal Policy Library] |
| [POL-ITDR-001] | IT Disaster Recovery Policy | [Head of IT Operations] | [Internal Policy Library] |
| [POL-IRM-001] | Incident Response Management Policy | [CISO] | [Internal Policy Library] |
| [POL-TPRM-001] | Third-Party Risk Management Policy | [CRO] | [Internal Policy Library] |

### 12.3 Standards References

| Standard | Title | Relevance |
|---|---|---|
| ISO/IEC 22301:2019 | Security and Resilience — Business Continuity Management Systems | BCM/DR framework alignment |
| ISO/IEC 27001:2022 | Information Security Management Systems | Information security controls during recovery |
| ISO/IEC 27031:2011 | Guidelines for ICT Readiness for Business Continuity | ICT DR planning guidance |
| NIST SP 800-34 Rev.1 | Contingency Planning Guide for Federal Information Systems | DR planning methodology reference |

---

## 13. Appendices

*The following appendices provide supplementary detail, reference materials, and operational aids required during DR execution. All appendices must be maintained and kept current. Critical appendices (B, C, E) must be available in printed form at both the primary site and DR site.*

---

### Appendix A — Subsidiary and Affiliate Scope Statement

*List any technology subsidiaries or affiliates of [Organization Name] covered by this DRP, including their systems and any specific DR arrangements.*

| Entity | Systems in Scope | DR Arrangement | Contact |
|---|---|---|---|
| [Subsidiary Name] | [Systems] | [Covered under this DRP / Separate DRP — reference] | [Name / Contact] |

---

### Appendix B — Emergency Contact Directory

*Provide the full emergency contact directory for DR team members, key vendors, regulators, and infrastructure providers. This appendix must be printed and stored securely at: (1) primary site DR coordinator's desk, (2) DR site, (3) with the DR Incident Commander.*

> **Note:** Full contact details are maintained in a separate controlled document — **[Emergency Contact Register — Document ID]** — to facilitate updates without triggering a full DRP version change.

| Category | Organization / Role | Primary Contact | Alternate Contact | Account / Reference |
|---|---|---|---|---|
| BNM (Regulator) | Bank Negara Malaysia — Technology Supervision | [Contact Number] | [Contact Number] | [Organization BNM License No.] |
| DR Site Management | [DR Site Facility Manager] | [Contact Number] | [Contact Number] | [Contract Reference] |
| Internet Service Provider | [ISP Name — Primary Circuit] | NOC: [Contact Number] | Account Manager: [Contact] | [Circuit IDs] |
| Internet Service Provider | [ISP Name — DR Circuit] | NOC: [Contact Number] | Account Manager: [Contact] | [Circuit IDs] |
| Core Banking Vendor | [Vendor Name] | Support: [Contact Number] | Escalation: [Contact] | [Support Contract No.] |
| Hardware Vendor (Servers) | [Vendor Name] | Support: [Contact Number] | Escalation: [Contact] | [Support Contract No.] |
| Storage Vendor | [Vendor Name] | Support: [Contact Number] | Escalation: [Contact] | [Support Contract No.] |
| SWIFT Service Bureau | [Provider Name] | Support: [Contact Number] | Escalation: [Contact] | [BIC / Reference] |
| Tape Storage / Offsite | [Provider Name] | Operations: [Contact Number] | Account Manager: [Contact] | [Account No.] |

---

### Appendix C — DR Incident Log Template

*Use this log to record all key decisions, actions, and timestamps during a DR event. A physical printed copy must be used if systems are unavailable.*

**DR Incident Reference:** _______________  
**Date/Time Declared:** _______________  
**DR Incident Commander:** _______________

| Time (24h) | Action / Event | Performed By | Approved By | Notes |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

---

### Appendix D — Communication Templates

*Pre-approved communication templates for use during a DR event. Templates must be reviewed and updated annually.*

#### D.1 — Internal Staff Notification (Initial Alert)

> **To:** All Staff  
> **From:** [CTO / Head of IT Operations]  
> **Subject:** IT Incident — Systems Disruption — [Date/Time]  
>
> We are currently experiencing a disruption affecting [list of systems]. Our IT teams are actively working to restore services. We will provide an update by [time]. Please avoid attempting to access affected systems. Contact your manager for guidance on manual procedures.  
>
> [Contact Name] | [Title] | [Contact Number]

#### D.2 — BNM Initial Notification

*[Complete in accordance with BNM prescribed notification format and channel. Refer to BNM RMiT for specific content requirements. Contact Compliance Officer immediately.]*

#### D.3 — External Customer Notification (if applicable)

*[Draft to be prepared by Communications team and approved by CEO/CTO before issuance. Template held by Corporate Communications.]*

---

### Appendix E — DR Site Access Procedures

*Provide the step-by-step procedure for gaining physical access to the DR site during an emergency, including after-hours and weekend access.*

| Step | Action | Details |
|---|---|---|
| 1 | Contact DR Site Facility Manager | [Name / Number — see Appendix B] |
| 2 | Provide authorization credentials | [Authorization procedure — e.g., passphrase, staff ID, approval from Head of IT Ops] |
| 3 | Physical access — main entrance | [Address, gate/door code procedure, security desk location] |
| 4 | Server room access | [Access control method — proximity card / PIN / biometric] |
| 5 | Emergency spare key / access card location | [Secure location — known to DR Incident Commander and CTO only] |
| 6 | Out-of-hours security contact | [Security company name and number] |

---

### Appendix F — Network and Circuit Reference

*Document key network circuit details required for DR site activation.*

| Circuit Type | Provider | Circuit ID | Primary Use | DR Site Endpoint | Status |
|---|---|---|---|---|---|
| [MPLS / Leased Line] | [ISP Name] | [Circuit ID] | [Primary WAN] | [DR Site Interface] | [Active / Standby] |
| [Internet Broadband] | [ISP Name] | [Circuit ID] | [Internet access] | [DR Site Interface] | [Active / Standby] |
| [SWIFT Network] | [Provider] | [Circuit ID] | [SWIFT messaging] | [DR Site Interface] | [Active / Standby] |
| [Payment Network] | [Provider] | [Circuit ID] | [IBG/DuitNow] | [DR Site Interface] | [Active / Standby] |

---

### Appendix G — System-Specific DR Runbooks

*Each in-scope system has a dedicated DR runbook providing system-specific recovery commands, scripts, and procedures. Runbooks are maintained by the respective System Owner and reviewed as part of the annual DR exercise.*

| Appendix | System | Runbook Owner | Version | Last Updated | Location |
|---|---|---|---|---|---|
| G.1 | [Core Banking System] | [System Owner] | [Version] | [Date] | [Repository Path] |
| G.2 | [Payment Processing System] | [System Owner] | [Version] | [Date] | [Repository Path] |
| G.3 | [Internet Banking Platform] | [System Owner] | [Version] | [Date] | [Repository Path] |
| G.4 | [Active Directory / Identity Services] | [System Owner] | [Version] | [Date] | [Repository Path] |
| G.5 | [Network Infrastructure] | [System Owner] | [Version] | [Date] | [Repository Path] |
| G.6 | [SWIFT / Interbank Connectivity] | [System Owner] | [Version] | [Date] | [Repository Path] |
| G.7 | [ATM/CDM Network] | [System Owner] | [Version] | [Date] | [Repository Path] |
| G.8 | [Email and Collaboration Platform] | [System Owner] | [Version] | [Date] | [Repository Path] |
| G.9 | [Risk Management System] | [System Owner] | [Version] | [Date] | [Repository Path] |

---

### Appendix H — DR Test Schedule (Current Year)

*Maintain the annual DR test schedule, updated at the start of each calendar year and after any schedule changes.*

| Test ID | Test Type | Planned Date | Scope | Lead | Status |
|---|---|---|---|---|---|
| DRT-[YYYY]-001 | Tabletop Exercise | [Q1 — Date] | All DR team | DR Incident Commander | [Planned / Completed] |
| DRT-[YYYY]-002 | Backup Restore Test | [Q1 — Date] | Tier 1 Databases | DBA Team | [Planned / Completed] |
| DRT-[YYYY]-003 | Partial Failover | [Q2 — Date] | Tier 1 Applications | IT Operations | [Planned / Completed] |
| DRT-[YYYY]-004 | Backup Restore Test | [Q3 — Date] | Tier 1 Databases | DBA Team | [Planned / Completed] |
| DRT-[YYYY]-005 | Full DR Exercise | [Q4 — Date] | All in-scope systems | All DR Teams | [Planned / Completed] |

---

### Appendix I — Glossary

| Term | Definition |
|---|---|
| **BIA** | Business Impact Analysis — a process to identify critical business functions and quantify the impact of their disruption. |
| **BCM** | Business Continuity Management — the holistic management process that identifies potential threats to an organization and provides a framework for resilience. |
| **DR** | Disaster Recovery — the process of restoring IT systems and data following a disruptive event. |
| **DRP** | Disaster Recovery Plan — this document. |
| **MTD** | Maximum Tolerable Downtime — the longest period a business function can be unavailable before unacceptable consequences result. |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss expressed as a point in time. |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a system or function after a disruption. |
| **RMiT** | Risk Management in Technology — BNM's policy governing technology risk management for financial institutions. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a matrix used to assign roles and responsibilities. |
| **Tier 1** | Mission Critical — systems whose unavailability causes immediate and severe financial, operational, or regulatory impact. |
| **Tier 2** | Business Critical — systems whose unavailability causes significant but manageable business impact within 24 hours. |
| **Tier 3** | Operational — systems whose unavailability causes operational inconvenience but can be managed manually for up to 72 hours. |
| **Tier 4** | Non-Critical — systems whose unavailability does not materially affect operations in the short term. |
| **WRT** | Work Recovery Time — time required to verify system integrity and resume normal operations post-recovery. |

---

*End of Document*

---

**Document Control:** This document is subject to access controls consistent with its **Confidential** classification. Printed copies are uncontrolled. The master version is maintained in [Document Repository Name] at [Repository Location]. All requests for access, copies, or amendments must be directed to the Document Owner.

| Attribute | Detail |
|---|---|
| **Document Owner** | Head of IT Operations, [Organization Name] |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Last Updated** | [Date] |