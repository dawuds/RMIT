# DR Communication Plan

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Title** | Disaster Recovery Communication Plan |
| **Owner** | Head of IT Operations |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorized personnel involved in disaster recovery planning and response. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives and Scope of DR Communication](#2-objectives-and-scope-of-dr-communication)
3. [Actions and Milestones](#3-actions-and-milestones)
4. [Accountable Owners](#4-accountable-owners)
5. [RPO and RTO Definitions per Tier](#5-rpo-and-rto-definitions-per-tier)
6. [Backup Schedule and Retention Periods](#6-backup-schedule-and-retention-periods)
7. [Restoration Testing Results](#7-restoration-testing-results)
8. [Business Impact Analysis Summary](#8-business-impact-analysis-summary)
9. [Recovery Priority Tiers](#9-recovery-priority-tiers)
10. [Communication Protocols and Escalation Procedures](#10-communication-protocols-and-escalation-procedures)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Disaster Recovery (DR) Communication Plan establishes structured communication procedures, escalation pathways, and notification protocols to be activated during a declared disaster recovery event at [Organization Name]. The plan ensures that all relevant stakeholders — internal personnel, external partners, regulators, and customers — receive timely, accurate, and consistent information throughout the lifecycle of a DR activation.

This document is mandated under **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.31**, which requires financial institutions to maintain and test documented disaster recovery plans including communication procedures. Compliance with this plan directly supports [Organization Name]'s obligations under the RMiT policy framework.

### 1.2 Scope

This plan applies to:

- All critical technology systems and infrastructure supporting [Organization Name]'s operations
- All staff with defined roles in the Disaster Recovery Team (DRT), Crisis Management Team (CMT), and Business Continuity Team (BCT)
- Third-party service providers and technology vendors with contractual disaster recovery obligations
- All recovery tiers as defined in Section 9 of this document

This plan is **activated** when:

- The Head of IT Operations or designated authority declares a DR event
- A major technology failure, data centre outage, cybersecurity incident, or natural disaster renders primary production systems unavailable beyond the defined RTO threshold
- A DR test or planned failover exercise is initiated

This plan is **not applicable** to:

- Minor incidents resolved within normal incident management procedures (P3/P4 incidents)
- Business continuity events that do not involve technology system recovery
- [Specify any additional exclusions relevant to the organization]

### 1.3 Relationship to Other Documents

*List the related documents that this plan operates alongside or depends upon.*

| Related Document | Document ID | Purpose |
|---|---|---|
| Business Continuity Plan (BCP) | [BCP-DOC-ID] | Overarching business continuity framework |
| Incident Response Plan | [IRP-DOC-ID] | Initial incident triage and escalation |
| DR Technical Recovery Runbooks | [RB-DOC-ID] | System-specific technical recovery procedures |
| Crisis Communication Policy | [CCP-DOC-ID] | External stakeholder communication guidelines |
| Vendor Management Policy | [VMP-DOC-ID] | Third-party escalation and SLA management |
| BNM RMiT Policy Document | N/A | Regulatory obligation (Clause 10.31) |

---

## 2. Objectives and Scope of DR Communication

### 2.1 Communication Objectives

*Define the primary goals of the communication plan during a DR event. These objectives should be measurable and achievable within the declared RTO.*

The DR Communication Plan is designed to achieve the following objectives:

1. **Timely Notification** — Ensure all relevant stakeholders are notified of a DR declaration within **[X] minutes** of event declaration.
2. **Situational Awareness** — Maintain a shared, accurate understanding of the DR event status across all response teams at all times.
3. **Decision Support** — Provide leadership with sufficient information to make informed decisions regarding recovery prioritization, resource allocation, and regulatory notification.
4. **Regulatory Compliance** — Fulfill BNM notification obligations within prescribed timeframes as required under RMiT Clause 10.31 and applicable BNM reporting guidelines.
5. **Stakeholder Confidence** — Maintain customer, partner, and regulatory confidence through controlled, transparent, and consistent external messaging.
6. **Post-Recovery Clarity** — Communicate system restoration status, service resumption timelines, and post-incident actions clearly to all affected parties.

### 2.2 Communication Scope by Stakeholder Group

*Identify all stakeholder groups within scope of the communication plan and their respective communication needs.*

| Stakeholder Group | Scope | Communication Channel | Primary Contact |
|---|---|---|---|
| Crisis Management Team (CMT) | Internal — Executive Leadership | Secure messaging / Phone bridge | [CMT Lead Name/Role] |
| Disaster Recovery Team (DRT) | Internal — Technical Response | [Tool, e.g., Microsoft Teams DR Channel] | Head of IT Operations |
| Business Unit Heads | Internal — Operations | Email / Phone | [BU Contact List — Appendix A] |
| IT Operations Staff | Internal — Technical | [Notification Tool/Platform] | IT Operations Manager |
| Human Resources | Internal — Staff welfare | Email | HR Director |
| Bank Negara Malaysia (BNM) | Regulator | Official written notification / Phone | [BNM Liaison Contact] |
| NACSA / CERT MY | Regulator / CSIRT | Incident report portal / Email | [NACSA Liaison Contact] |
| Customers | External | Website / SMS / Call Centre | Head of Customer Experience |
| Third-Party Vendors / MSPs | External — Technical | Phone / Secure portal | [Vendor Contact List — Appendix B] |
| Board of Directors | Governance | Written briefing / Board portal | Company Secretary |
| Audit & Risk Committee | Governance | Written briefing | Chief Risk Officer |
| Media / Public | External | Press statement via approved channel | Head of Corporate Communications |

### 2.3 Activation Thresholds

*Define the specific conditions that trigger activation of this communication plan.*

| Trigger Event | Severity | Activation Level |
|---|---|---|
| Complete primary data centre failure | Critical | Full DR Activation |
| Core banking system unavailability exceeding [X] hours | Critical | Full DR Activation |
| Ransomware / destructive cyberattack on production systems | Critical | Full DR Activation |
| Network connectivity loss to primary site exceeding [X] hours | High | Partial DR Activation |
| Planned DR failover test | Scheduled | Test Activation (simulated) |
| Vendor-declared force majeure event impacting hosted services | High | Partial DR Activation |

---

## 3. Actions and Milestones

### 3.1 DR Communication Timeline Overview

*This section defines the sequence of communication actions and key milestones from initial detection through to full service restoration. Times are measured from the point of DR Declaration (T=0).*

### 3.2 Phase 1: Detection and Initial Notification (T=0 to T+[X] Minutes)

*Describe the actions that must occur immediately upon detection of a DR-triggering event.*

| Milestone | Action | Owner | Target Time | Completion Criteria |
|---|---|---|---|---|
| M1.1 | Incident detected and logged in [ITSM Tool] | IT Operations On-Call | T+0 | Incident ticket raised with P1 priority |
| M1.2 | Initial severity assessment completed | IT Operations Manager | T+[X] min | Severity confirmed as P1/DR-trigger |
| M1.3 | Head of IT Operations notified | IT Operations Manager | T+[X] min | Verbal/SMS confirmation received |
| M1.4 | DR Declaration decision made | Head of IT Operations | T+[X] min | DR Declaration formally issued |
| M1.5 | DR Team assembled (virtual/physical) | DR Coordinator | T+[X] min | All DRT leads confirmed online |
| M1.6 | CMT notified (CEO, CTO, CRO, CFO) | Head of IT Operations | T+[X] min | CMT bridge call initiated |
| M1.7 | DR Communication Bridge opened | DR Coordinator | T+[X] min | All key leads joined bridge |

### 3.3 Phase 2: Assessment and Escalation (T+[X] to T+[Y] Hours)

*Describe the communications and actions during the initial impact assessment and escalation phase.*

| Milestone | Action | Owner | Target Time | Completion Criteria |
|---|---|---|---|---|
| M2.1 | Full impact assessment completed | DR Technical Lead | T+[X] hr | Affected systems list confirmed |
| M2.2 | Estimated RTO communicated to CMT | Head of IT Operations | T+[X] hr | RTO estimate accepted by CMT |
| M2.3 | Business Unit Heads notified | DR Coordinator | T+[X] hr | All BU Heads confirmed receipt |
| M2.4 | BNM initial notification submitted | Chief Risk Officer / Compliance | T+[X] hr | BNM notification reference received |
| M2.5 | Vendor/MSP DR escalation initiated | IT Vendor Manager | T+[X] hr | SLA clock confirmed with vendor |
| M2.6 | Customer communication draft approved | Head of Corporate Communications | T+[X] hr | Message approved by CMT |
| M2.7 | Initial customer notification issued | Head of Customer Experience | T+[X] hr | SMS/website banner activated |
| M2.8 | First status update issued to all stakeholders | DR Coordinator | T+[X] hr | Status update distributed |

### 3.4 Phase 3: Recovery Execution (T+[Y] to RTO)

*Describe the communication cadence and milestones during active recovery execution.*

| Milestone | Action | Owner | Frequency | Completion Criteria |
|---|---|---|---|---|
| M3.1 | Regular status updates to CMT | Head of IT Operations | Every [X] hours | CMT acknowledges each update |
| M3.2 | Recovery progress updates to BU Heads | DR Coordinator | Every [X] hours | BU Heads confirm receipt |
| M3.3 | Vendor recovery status calls | IT Vendor Manager | Every [X] hours | Progress confirmed against SLA |
| M3.4 | Customer updates (website / SMS) | Head of Customer Experience | Every [X] hours | Published and acknowledged |
| M3.5 | Board / Audit Committee briefing | Company Secretary | [Defined trigger, e.g., >4 hours] | Briefing note delivered |
| M3.6 | BNM progress update (if required) | Compliance Officer | Per BNM guidance | BNM notified of status |

### 3.5 Phase 4: Service Restoration and Stand-Down

*Describe the communication actions required to formally close the DR event.*

| Milestone | Action | Owner | Target Time | Completion Criteria |
|---|---|---|---|---|
| M4.1 | Service restoration verified by business | Business System Owners | Post-RTO | UAT sign-off obtained |
| M4.2 | DR Stand-Down declared | Head of IT Operations | Post-verification | Stand-down communicated to all teams |
| M4.3 | All-staff notification of restoration | DR Coordinator | Post stand-down | Staff communication sent |
| M4.4 | Customer restoration notification issued | Head of Customer Experience | Post stand-down | External communication published |
| M4.5 | BNM restoration notification submitted | Compliance Officer | Within [X] hours of restoration | BNM reference received |
| M4.6 | Post-incident communication issued | Head of Corporate Communications | Within [X] business days | Approved communication distributed |
| M4.7 | Post-Incident Review (PIR) scheduled | Head of IT Operations | Within [X] business days | PIR date confirmed with all leads |

---

## 4. Accountable Owners

### 4.1 DR Communication Team Structure

*This section identifies the key roles, individuals, and alternates responsible for executing this communication plan. All named individuals must be reachable on a 24/7 basis during a DR event.*

### 4.2 Primary Contacts

| Role | Name | Department | Primary Contact | Alternate Contact | Alternate Name |
|---|---|---|---|---|---|
| **DR Communication Lead** | [Name] | IT Operations | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **Head of IT Operations** | [Name] | IT Operations | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **DR Technical Lead** | [Name] | IT Infrastructure | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **DR Coordinator** | [Name] | IT Operations | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **Chief Technology Officer (CTO)** | [Name] | Technology | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **Chief Risk Officer (CRO)** | [Name] | Risk & Compliance | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **Chief Executive Officer (CEO)** | [Name] | Executive | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **Chief Financial Officer (CFO)** | [Name] | Finance | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **Compliance Officer** | [Name] | Compliance | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **IT Vendor Manager** | [Name] | IT Operations | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **Head of Customer Experience** | [Name] | Operations | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **Head of Corporate Communications** | [Name] | Communications | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **Company Secretary** | [Name] | Governance | [Phone] / [Email] | [Phone] / [Email] | [Alternate Name] |
| **HR Director** | [Name] | Human Resources | [Phone] / [Email] / [Email] | [Phone] / [Email] | [Alternate Name] |

### 4.3 Regulator and External Contact Directory

| Organization | Contact Person | Role | Phone | Email | Notification SLA |
|---|---|---|---|---|---|
| Bank Negara Malaysia (BNM) | [Name] | [Role / Supervisory Team] | [Phone] | [Email] | Within [X] hours of declaration |
| NACSA / CERT MY | [Name] | [Incident Reporting Contact] | [Phone] | [Email] | Within [X] hours (cyber incidents) |
| [Primary MSP / Cloud Provider] | [Name] | Account Manager / DR Contact | [Phone] / [Email] | [Email] | Immediate upon DR declaration |
| [Secondary Vendor] | [Name] | Support Lead | [Phone] | [Email] | Within [X] hours |
| [Telecommunications Provider] | [Name] | Enterprise Support | [Phone] | [Email] | Immediate upon network DR event |
| [Insurance Provider] | [Name] | Claims Contact | [Phone] | [Email] | Within [X] business days |
| [Legal Counsel] | [Name] | Partner / IT Law | [Phone] | [Email] | Upon CMT direction |

---

## 5. RPO and RTO Definitions per Tier

### 5.1 Overview

*This section defines the Recovery Point Objective (RPO) and Recovery Time Objective (RTO) for each system tier. These targets are derived from the Business Impact Analysis (Section 8) and are approved by the Crisis Management Team. All DR communication timelines in Section 3 must be calibrated against these targets.*

**Definitions:**

- **Recovery Time Objective (RTO):** The maximum acceptable duration from the point of disaster declaration to the point at which a system or service is restored to operational status.
- **Recovery Point Objective (RPO):** The maximum acceptable amount of data loss measured in time, representing the point to which data must be recovered following a disaster.

### 5.2 System Tier Classification and Recovery Targets

| Tier | Classification | Description | RTO | RPO | Justification |
|---|---|---|---|---|---|
| **Tier 1** | Mission-Critical | Systems whose unavailability causes immediate financial loss, regulatory breach, or inability to process customer transactions | [X] hours | [X] minutes/hours | [e.g., Core banking, payment processing, SWIFT/IBG connectivity] |
| **Tier 2** | Business-Critical | Systems whose unavailability significantly impacts operations but does not immediately halt revenue generation | [X] hours | [X] hours | [e.g., CRM, online banking portal, internal communication] |
| **Tier 3** | Important | Systems whose unavailability causes operational inconvenience but can be mitigated by manual processes | [X] hours | [X] hours | [e.g., HR systems, reporting tools, secondary databases] |
| **Tier 4** | Standard | Systems whose unavailability has minimal operational impact; recovery can be scheduled | [X] business days | [X] hours/days | [e.g., Development environments, archive systems] |

### 5.3 Tier 1 System Inventory and Recovery Targets

*List all Tier 1 (Mission-Critical) systems with their specific RTO and RPO targets.*

| System Name | System Owner | RTO | RPO | DR Strategy | Recovery Site |
|---|---|---|---|---|---|
| [Core Banking System] | [System Owner] | [X] hours | [X] minutes | Hot standby | [DR Site Name/Location] |
| [Payment Processing Gateway] | [System Owner] | [X] hours | [X] minutes | Active-active | [DR Site Name/Location] |
| [Internet Banking Platform] | [System Owner] | [X] hours | [X] hours | Warm standby | [DR Site Name/Location] |
| [SWIFT / IBG Connectivity] | [System Owner] | [X] hours | [X] minutes | Hot standby | [DR Site Name/Location] |
| [ATM Network Management] | [System Owner] | [X] hours | [X] hours | Warm standby | [DR Site Name/Location] |
| [Active Directory / Identity] | [System Owner] | [X] hours | [X] hours | Active-active | [DR Site Name/Location] |

### 5.4 Tier 2 System Inventory and Recovery Targets

*List all Tier 2 (Business-Critical) systems with their specific RTO and RPO targets.*

| System Name | System Owner | RTO | RPO | DR Strategy | Recovery Site |
|---|---|---|---|---|---|
| [CRM System] | [System Owner] | [X] hours | [X] hours | Warm standby | [DR Site Name/Location] |
| [Email / Collaboration Platform] | [System Owner] | [X] hours | [X] hours | Cloud-replicated | [DR Site Name/Location] |
| [Online Banking Portal] | [System Owner] | [X] hours | [X] hours | Warm standby | [DR Site Name/Location] |
| [Data Warehouse / Reporting] | [System Owner] | [X] hours | [X] hours | Cold standby | [DR Site Name/Location] |

### 5.5 Tier 3 and Tier 4 System Inventory

*Reference Appendix C for the complete inventory of Tier 3 and Tier 4 systems.*

---

## 6. Backup Schedule and Retention Periods

### 6.1 Backup Policy Overview

*This section documents the backup schedule, methods, and retention periods for all systems within the scope of this DR Communication Plan. Backup configurations must align with the RPO targets defined in Section 5.*

All backup operations are governed by [Organization Name]'s **Data Backup and Recovery Policy** ([Document ID]). This section summarizes backup parameters relevant to DR activation and communication.

### 6.2 Backup Schedule by Tier

| Tier | System / Data Type | Backup Type | Frequency | Backup Window | Method | Backup Location |
|---|---|---|---|---|---|---|
| Tier 1 | Core banking transactions | Incremental | Every [X] minutes | Continuous / [Time] | [e.g., Log shipping, replication] | [Primary DR Site] |
| Tier 1 | Core banking full database | Full | Daily | [Time, e.g., 02:00 MYT] | [e.g., Snapshot] | [Primary DR Site] + [Offsite/Cloud] |
| Tier 1 | Payment gateway logs | Incremental | Every [X] minutes | Continuous | [Method] | [DR Site] |
| Tier 2 | CRM database | Full | Daily | [Time] | [Method] | [DR Site] |
| Tier 2 | Email / collaboration data | Incremental | Daily | [Time] | [Method] | [Cloud / Offsite] |
| Tier 3 | HR / ERP systems | Full | Weekly | [Day / Time] | [Method] | [Offsite] |
| Tier 3 | Development environments | Full | Weekly | [Day / Time] | [Method] | [Local / Offsite] |
| Tier 4 | Archive systems | Full | Monthly | [Day / Time] | [Method] | [Offsite] |

### 6.3 Retention Periods

| Data / Backup Type | Retention Period | Regulatory Basis | Storage Location | Disposal Method |
|---|---|---|---|---|
| Core banking full backup | [X] years | BNM / FSA 2013 | [Location] | Secure deletion per data disposal policy |
| Transaction logs (Tier 1) | [X] years | BNM RMiT / AML requirements | [Location] | Secure deletion |
| Audit logs | [X] years | BNM RMiT Clause [X] | [Location] | Secure deletion |
| Email / communication records | [X] years | [Regulatory basis] | [Location] | Secure deletion |
| System configuration backups | [X] years | Internal policy | [Location] | Secure deletion |
| DR test reports | [X] years | BNM RMiT Clause 10.31 | [Location] | Secure deletion |
| Incident and DR event logs | [X] years | BNM RMiT / internal audit | [Location] | Secure deletion |

### 6.4 Backup Verification and Monitoring

*Describe how backup integrity is verified and monitored.*

| Verification Activity | Frequency | Owner | Tool / Method | Escalation Threshold |
|---|---|---|---|---|
| Automated backup job monitoring | Daily | IT Operations | [Monitoring Tool] | Any failed backup job triggers P2 alert |
| Backup integrity check (checksum) | Weekly | IT Operations | [Tool] | Integrity failure triggers P1 alert |
| Test restore (Tier 1 systems) | Monthly | DR Technical Lead | Manual / scripted | Failure triggers immediate DR test review |
| Test restore (Tier 2 systems) | Quarterly | DR Technical Lead | Manual / scripted | Failure triggers remediation plan |
| Full DR backup audit | Annual | Head of IT Operations | Internal audit | Findings escalated to CTO and CRO |

---

## 7. Restoration Testing Results

### 7.1 Testing Programme Overview

*This section documents the results of DR restoration tests conducted in accordance with BNM RMiT Clause 10.31. All DR tests must be formally documented, reviewed, and signed off by the Head of IT Operations. Test results inform continuous improvement of this Communication Plan.*

[Organization Name] conducts DR restoration tests in accordance with the following programme:

| Test Type | Frequency | Scope | Lead |
|---|---|---|---|
| Tabletop exercise | Semi-annual | Communication plan walkthrough | DR Coordinator |
| Partial system failover test | Annual | Tier 1 systems | DR Technical Lead |
| Full DR failover test | Annual (or upon significant change) | All tiers | Head of IT Operations |
| Backup restore spot check | Monthly | Random selection of Tier 1/2 backups | IT Operations |

### 7.2 DR Test Results Log

*Record the results of all DR tests conducted within the review period. Tests must be completed within the timeframes specified by BNM RMiT.*

| Test ID | Test Date | Test Type | Systems Tested | RTO Target | Actual RTO Achieved | RPO Target | Actual RPO Achieved | Test Result | Deficiencies Identified | Remediation Status |
|---|---|---|---|---|---|---|---|---|---|---|
| DR-TEST-[YYYY]-001 | [Date] | Full failover | Tier 1 | [X] hours | [X] hours | [X] min | [X] min | Pass / Fail | [Description or "None"] | [Completed / In Progress / N/A] |
| DR-TEST-[YYYY]-002 | [Date] | Partial failover | Core banking | [X] hours | [X] hours | [X] min | [X] min | Pass / Fail | [Description or "None"] | [Status] |
| DR-TEST-[YYYY]-003 | [Date] | Backup restore | Tier 1 full backup | [X] hours | [X] hours | N/A | N/A | Pass / Fail | [Description or "None"] | [Status] |
| DR-TEST-[YYYY]-004 | [Date] | Tabletop exercise | Communication plan | N/A | N/A | N/A | N/A | Pass / Fail | [Description or "None"] | [Status] |

### 7.3 Deficiency Tracking and Remediation

*Document all deficiencies identified during DR testing and track remediation to closure.*

| Deficiency ID | Identified Date | Test Reference | Description | Risk Rating | Remediation Action | Owner | Target Date | Closure Date |
|---|---|---|---|---|---|---|---|---|
| DEF-[YYYY]-001 | [Date] | DR-TEST-[YYYY]-001 | [Description of gap or failure] | High / Medium / Low | [Remediation steps] | [Owner] | [Target Date] | [Closure Date or "Open"] |
| DEF-[YYYY]-002 | [Date] | DR-TEST-[YYYY]-002 | [Description] | [Rating] | [Steps] | [Owner] | [Target Date] | [Closure Date or "Open"] |

### 7.4 BNM Regulatory Reporting of DR Tests

*In accordance with BNM RMiT Clause 10.31, [Organization Name] shall submit DR test results and outcomes to BNM as required. The following records confirm submission.*

| Submission Reference | Submission Date | Test Reference | Outcome Reported | BNM Acknowledgement Reference |
|---|---|---|---|---|
| [Ref No.] | [Date] | [Test ID] | [Summary of outcome] | [BNM Ref No.] |

---

## 8. Business Impact Analysis Summary

### 8.1 BIA Overview

*This section summarizes the Business Impact Analysis (BIA) findings relevant to disaster recovery communication. The full BIA is maintained as a separate controlled document ([BIA-DOC-ID]). This summary provides the context required to prioritize recovery actions and communicate impacts to stakeholders during a DR event.*

The BIA was last conducted on **[BIA Date]** and was approved by **[Approving Authority]**. The next scheduled BIA review is **[Next BIA Date]**.

### 8.2 Critical Business Processes and Maximum Tolerable Downtime

*List the critical business processes, their Maximum Tolerable Period of Disruption (MTPD), and supporting systems.*

| Business Process | Business Unit | MTPD | Supporting Systems (Tier) | Financial Impact per Hour | Regulatory Impact | Reputational Impact |
|---|---|---|---|---|---|---|
| [e.g., Interbank fund transfers] | [Treasury / Operations] | [X] hours | [System Name] (Tier 1) | [MYR amount or range] | High | High |
| [e.g., Customer loan processing] | [Retail Banking] | [X] hours | [System Name] (Tier 1) | [MYR amount] | High | Medium |
| [e.g., ATM / debit card transactions] | [Card Services] | [X] hours | [System Name] (Tier 1) | [MYR amount] | High | High |
| [e.g., Internet banking] | [Digital Banking] | [X] hours | [System Name] (Tier 2) | [MYR amount] | Medium | High |
| [e.g., Customer onboarding (eKYC)] | [Retail Banking] | [X] hours | [System Name] (Tier 2) | [MYR amount] | Medium | Medium |
| [e.g., Regulatory reporting (BNM)] | [Compliance] | [X] hours | [System Name] (Tier 2) | N/A | High | High |
| [e.g., Internal payroll processing] | [HR / Finance] | [X] hours | [System Name] (Tier 3) | [MYR amount] | Low | Medium |

### 8.3 Cumulative Financial Impact Thresholds

*Summarize the financial impact thresholds that trigger escalated communication and board-level notification.*

| Duration of Disruption | Estimated Cumulative Financial Impact | Communication Action Required |
|---|---|---|
| 0–[X] hours | < MYR [Amount] | DRT and CMT notification |
| [X]–[Y] hours | MYR [Amount] – MYR [Amount] | BNM initial notification; Board briefing |
| [Y]–[Z] hours | MYR [Amount] – MYR [Amount] | BNM progress update; Public communication |
| > [Z] hours | > MYR [Amount] | BNM formal incident report; Board resolution; External press release |

### 8.4 Regulatory Reporting Triggers

*Identify the specific conditions that require mandatory regulatory notification during a DR event.*

| Trigger Condition | Applicable Regulation | Notification Authority | Notification Deadline | Contact |
|---|---|---|---|---|
| Technology outage affecting customer services > [X] hours | BNM RMiT Clause 10.31 | Bank Negara Malaysia | Within [X] hours | [BNM Contact] |
| Cyberattack resulting in data breach or system compromise | PDPA 2010; BNM RMiT | BNM + NACSA/PDPD | Within [X] hours | [Contact details] |
| Failure to process interbank payments (IBG/RENTAS) | BNM Payment Systems regulations | BNM (FSPD) | Immediate | [BNM Payment Systems Contact] |
| System compromise affecting customer personal data | PDPA 2010 | [PDPD] + BNM | Within [X] days | [Contact] |
| Material operational risk event | BNM RMiT; Basel III/ORSA | BNM (Risk Supervision) | Per BNM guidance | [Contact] |

---

## 9. Recovery Priority Tiers

### 9.1 Tier Classification Framework

*This section defines the criteria for system and service tier classification, and specifies the order in which systems are recovered during a DR event. Recovery sequencing is communicated to all teams via the DR Coordinator at the point of DR Declaration.*

Recovery priority is determined by a combination of:

1. Business impact severity (from BIA — Section 8)
2. Regulatory obligations and mandatory service continuity requirements
3. Technical dependencies between systems
4. Financial and reputational risk of continued unavailability

### 9.2 Recovery Priority Order

| Priority Order | Tier | Recovery Phase | Target Recovery Time from DR Declaration | Systems |
|---|---|---|---|---|
| 1 (First) | Tier 1 — Mission-Critical | Phase 1: Immediate Recovery | 0 – [X] hours | Core banking, payment processing, SWIFT/IBG, identity infrastructure |
| 2 | Tier 1 — Mission-Critical (secondary) | Phase 1: Immediate Recovery | [X] – [Y] hours | ATM network, regulatory reporting systems |
| 3 | Tier 2 — Business-Critical | Phase 2: Business Recovery | [Y] – [Z] hours | Internet banking, CRM, email/collaboration |
| 4 | Tier 2 — Business-Critical (secondary) | Phase 2: Business Recovery | [Z] – [A] hours | Data warehouse, reporting tools |
| 5 | Tier 3 — Important | Phase 3: Operational Recovery | [A] – [B] hours | HR systems, secondary tools |
| 6 | Tier 4 — Standard | Phase 4: Full Recovery | > [B] hours | Development, archive, non-critical systems |

### 9.3 Recovery Sequencing Detail — Tier 1

*Detail the specific recovery sequence for Tier 1 systems, including inter-dependencies.*

| Step | System | Dependency | Recovery Action | Owner | Target Completion |
|---|---|---|---|---|---|
| 1 | [Network / Core Infrastructure] | None | Activate DR network at [DR Site] | Infrastructure Lead | T+[X] min |
| 2 | [Active Directory / Identity] | Network | Promote DR AD controller | Systems Admin | T+[X] min |
| 3 | [Core Banking — Database] | AD, Network | Validate DR DB replication; promote secondary | DBA Lead | T+[X] hours |
| 4 | [Core Banking — Application] | Database, AD | Start application services at DR site | Application Lead | T+[X] hours |
| 5 | [Payment Gateway] | Core banking, Network | Validate payment routing to DR instance | Payments Lead | T+[X] hours |
| 6 | [SWIFT / IBG Connectivity] | Network, Core banking | Re-establish correspondent connectivity | Treasury IT | T+[X] hours |
| 7 | [Monitoring / Alerting] | All Tier 1 | Validate DR environment monitoring | IT Operations | T+[X] hours |

### 9.4 Communication Messages by Recovery Phase

*Pre-approved communication messages aligned to each recovery phase for use by the DR Communication Lead.*

| Phase | Audience | Message Template | Channel | Owner |
|---|---|---|---|---|
| Phase 1 — DR Declared | Internal (all staff) | *"[Organization Name] has activated its Disaster Recovery Plan at [Time] on [Date] due to [brief description]. The DR team is actively working to restore services. Updates will be provided every [X] hours. Please refer all media enquiries to [Communications contact]."* | Email / Intranet | DR Coordinator |
| Phase 1 — DR Declared | Customers | *"We are currently experiencing a system interruption affecting [service name]. Our teams are working urgently to restore services. We will provide an update by [Time]. We apologise for any inconvenience caused."* | Website / SMS | Head of Customer Experience |
| Phase 2 — Recovery in Progress | Internal (CMT) | *"Recovery progress update as at [Time]: Tier 1 systems [status]. Estimated restoration of [system] by [time]. Current RTO trajectory: [on/off track]. Next update at [time]."* | Bridge call / Secure message | Head of IT Operations |
| Phase 3 — Partial Restoration | Customers | *"[Service name] has been partially restored. [Specific services] are now available. We are continuing to restore remaining services and expect full restoration by [estimated time]. Thank you for your patience."* | Website / SMS | Head of Customer Experience |
| Phase 4 — Full Restoration | All | *"[Organization Name] confirms that all systems have been fully restored as at [Time] on [Date]. We apologise for the disruption and wish to assure customers that all transactions have been safeguarded. A full incident review is underway."* | All channels | Head of Corporate Communications |

---

## 10. Communication Protocols and Escalation Procedures

### 10.1 Communication Channels and Tools

*Define the approved communication channels and tools to be used during a DR event.*

| Channel | Purpose | Primary Users | Backup Channel | Notes |
|---|---|---|---|---|
| [e.g., Microsoft Teams — DR Channel] | Primary DRT coordination | DRT, IT Operations | Phone bridge | Pre-configured; access list maintained by DR Coordinator |
| [e.g., Secure Phone Bridge — Number: XXXX] | CMT bridge calls; executive updates | CMT, Head of IT Operations | [Backup number] | Bridge PIN: [Stored in DR sealed envelope] |
| Corporate Email | Business unit notifications; written updates | All internal staff | [SMS gateway] | Distribution lists in Appendix A |
| SMS Gateway | Customer notifications; staff alerts | Customers; staff | Email | Pre-approved message templates in Appendix D |
| [Organization] Website / Banner | Public customer communication | Customers; public | Social media | Banner activation by [Role] |
| [Secure Messaging App] | Sensitive communications between executives | CMT members | Phone | [App name and configuration details] |
| BNM Reporting Portal / Email | Regulatory notifications | Compliance Officer | Phone to BNM supervisor | BNM contact in Section 4.3 |

### 10.2 Escalation Matrix

*Define the escalation thresholds and escalation pathway for DR communications.*

| Escalation Level | Trigger | Notified Parties | Escalation Owner | Response Timeframe |
|---|---|---|---|---|
| Level 1 — IT Operations | P1 incident detected; DR trigger threshold met | IT Operations team; DR Coordinator | IT Operations Manager | Immediate |
| Level 2 — DR Activation | DR formally declared by Head of IT Operations | DRT; CMT; Business Unit Heads | Head of IT Operations | Within [X] minutes of declaration |
| Level 3 — Executive | RTO trajectory at risk; financial impact > MYR [X] | CEO; CFO; CRO; Board Chair (if warranted) | CTO / Head of IT Operations | Within [X] hours of declaration |
| Level 4 — Regulatory | Customer-impacting outage > [X] hours; cyber incident; payment system failure | BNM; NACSA (if cyber) | Compliance Officer / CRO | Within [X] hours |
| Level 5 — Board | Material financial impact; reputational risk; regulatory breach | Board of Directors; Audit & Risk Committee | Company Secretary / CEO | Within [X] hours |
| Level 6 — Public | Extended outage; media enquiries; social media escalation | Customers; media; public | Head of Corporate Communications | Per CMT direction |

### 10.3 Media and External Communications Policy

*Communications to external parties (media, public, social media) must adhere to the following controls.*

- All external communications must be approved by **[Head of Corporate Communications]** and **[CEO or designated executive]** before release.
- No member of the DRT or IT Operations staff is authorized to speak to media or post publicly on behalf of [Organization Name] during a DR event without explicit authorization.
- Social media monitoring shall be activated upon DR declaration by **[Role]** to track public sentiment and misinformation.
- A designated spokesperson is: **[Name / Role]**. Alternate spokesperson: **[Name / Role]**.
- Pre-approved holding statements are maintained in **Appendix D**.

---

## 11. Roles and Responsibilities

### 11.1 RACI Matrix — DR Communication Activities

*The following RACI matrix defines accountability for each key activity within this DR Communication Plan. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of IT Ops | DR Coordinator | DR Tech Lead | CTO | CRO / Compliance | CMT (CEO/CFO) | BU Heads | Corp. Comms | IT Vendor Mgr | Company Secretary |
|---|---|---|---|---|---|---|---|---|---|---|
| DR event declaration | **A/R** | C | C | C | C | I | I | I | I | I |
| Internal DRT notification | A | **R** | R | I | I | I | I | I | I | I |
| CMT bridge call initiation | **R** | R | I | I | I | A | I | I | I | I |
| BNM regulatory notification | C | C | I | C | **A/R** | A | I | I | I | I |
| NACSA / CERT MY notification (cyber) | C | C | I | C | **A/R** | A | I | I | I | I |
| Business unit stakeholder updates | A | **R** | I | I | I | C | I | I | I | I |
| Customer communication (external) | C | C | I | C | C | A | C | **R** | I | I |
| Vendor / MSP escalation | A | C | C | I | I | I | I | I | **R** | I |
| Media / press statement | I | I | I | C | C | **A** | I | **R** | I | I |
| Board / ARC briefing | C | I | I | C | C | A | I | I | I | **R** |
| Status update cadence (DRT) | A | **R** | R | I | I | I | I | I | I | I |
| DR stand-down declaration | **A/R** | C | C | C | C | I | I | I | I | I |
| Post-incident review initiation | **A/R** | R | R | C | C | I | C | I | C | I |
| Plan update post-incident | **A** | **R** | C | C | C | I | I | I | I | I |
| BNM restoration notification | C | C | I | C | **A/R** | A | I | I | I | I |

### 11.2 Key Role Descriptions

| Role | DR Communication Responsibilities |
|---|---|
| **Head of IT Operations** | Overall accountability for DR communications; DR declaration authority; CMT liaison; BNM escalation authority |
| **DR Coordinator** | Manages communication bridge; distributes status updates; maintains communication log; coordinates vendor escalations |
| **DR Technical Lead** | Provides technical recovery status; inputs to RTO/RPO assessments; system-level communications |
| **CTO** | Executive sponsor; CMT technical advisor; escalation authority for vendor disputes |
| **CRO / Compliance Officer** | Regulatory notification (BNM, NACSA); regulatory risk assessment; Board-level risk communication |
| **CEO** | Ultimate accountability for crisis communications; external spokesperson authority; Board liaison |
| **CFO** | Financial impact assessment and communication; insurance notification; Board financial briefing |
| **Head of Corporate Communications** | All external communications; media management; customer notification approvals; social media monitoring |
| **IT Vendor Manager** | Third-party escalation; SLA enforcement communications; vendor status tracking |
| **Company Secretary** | Board and Audit Committee communications; formal notification records |

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Reviewer Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Reviewer Name] | [Description of major revision] |

### 12.2 Review Schedule

This document shall be reviewed:

- **Annually**, no later than [Month] of each calendar year, or
- **Upon any of the following significant changes:**
  - Material change to IT infrastructure or DR site
  - Change in key personnel identified in Section 4
  - Change in BNM regulatory requirements affecting DR obligations
  - Following any DR activation (real or test) where deficiencies were identified
  - Merger, acquisition, or significant business change affecting critical systems
  - Following any BNM examination finding related to DR

The next scheduled review date is: **[Next Review Date]**

### 12.3 Approval Sign-Off

*The following individuals confirm they have reviewed this document and approve it for use.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of IT Operations | [Name] | | [Date] |
| Chief Technology Officer | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| Compliance Officer | [Name] | | [Date] |
| Chief Executive Officer | [Name] | | [Date] |

---

## 13. References

The following regulatory documents, standards, and internal policies are referenced in or inform this DR Communication Plan:

| Reference | Document / Clause | Relevance |
|---|---|---|
| BNM RMiT | Clause 10.31 — Disaster Recovery | Primary regulatory obligation for DR planning, testing, and documentation |
| BNM RMiT | Clause 10.27–10.30 — Business Continuity | BCP framework within which this DR plan operates |
| BNM RMiT | Clause 11.x — Cybersecurity (if applicable) | Cyber incident notification and recovery obligations |
| BNM RMiT | Part C — Technology Risk Management | Overarching technology risk governance requirements |
| Financial Services Act 2013 (FSA) | Section 143 — Operational Risk | Operational risk management obligations |
| Personal Data Protection Act 2010 (PDPA) | Section 9 — Security Principle | Data security and breach notification obligations |
| NACSA Cybersecurity Act 2018 | Section 9 — Incident Reporting | Cybersecurity incident reporting to NACSA for critical national information infrastructure (CNII) |
| ISO/IEC 22301:2019 | Business Continuity Management Systems | International standard informing BC/DR best practice |
| ISO/IEC 27001:2022 | Annex A, Control 5.30 — ICT Readiness for BC | Information security controls for business continuity |
| BNM Guidelines on Technology Risk Management | [Version / Date] | Supplementary BNM guidance on technology risk |

---

## 14. Appendices

### Appendix A — Internal Communication Distribution Lists

*Maintain current distribution lists for all internal stakeholder groups referenced in this plan. Lists must be reviewed quarterly and updated whenever personnel changes occur.*

| List Name | Description | Owner | Last Updated |
|---|---|---|---|
| DRT — All Members | Full Disaster Recovery Team | DR Coordinator | [Date] |
| CMT — Crisis Management Team | Executive crisis management | Company Secretary | [Date] |
| BU Heads — All Business Units | All business unit heads | DR Coordinator | [Date] |
| IT Operations — All Staff | Full IT Operations team | Head of IT Operations | [Date] |
| Board of Directors | All board members | Company Secretary | [Date] |

*[Attach or reference the actual distribution lists. Ensure lists are stored in the DR documentation repository and are accessible from the DR site.]*

---

### Appendix B — Third-Party and Vendor Contact Directory

*Maintain the complete and current contact directory for all vendors and third-party service providers relevant to DR recovery.*

| Vendor / Provider | Service Category | Account Manager | 24/7 Support Number | Escalation Contact | SLA Reference | Contract ID |
|---|---|---|---|---|---|---|
| [Primary Data Centre Operator] | Co-location / DR Site | [Name] | [Number] | [Escalation contact] | [SLA Ref] | [Contract ID] |
| [Primary MSP / Cloud Provider] | Managed services / Cloud | [Name] | [Number] | [Escalation contact] | [SLA Ref] | [Contract ID] |
| [Core Banking Vendor] | Core banking software | [Name] | [Number] | [Escalation contact] | [SLA Ref] | [Contract ID] |
| [Telecommunications Provider] | WAN / MPLS / Internet | [Name] | [Number] | [Escalation contact] | [SLA Ref] | [Contract ID] |
| [Backup Solution Vendor] | Backup and recovery | [Name] | [Number] | [Escalation contact] | [SLA Ref] | [Contract ID] |
| [Cybersecurity / SOC Provider] | Security monitoring | [Name] | [Number] | [Escalation contact] | [SLA Ref] | [Contract ID] |

---

### Appendix C — Full System Inventory (All Tiers)

*Maintain the complete inventory of all in-scope systems, their tier classification, owners, and recovery parameters. This inventory must be kept current and reviewed at each annual DR review cycle.*

| System Name | Business Function | Tier | System Owner | Technical Owner | RTO | RPO | DR Strategy | DR Site | Last Validated |
|---|---|---|---|---|---|---|---|---|---|
| [System Name] | [Function] | [1/2/3/4] | [Business Owner] | [Technical Owner] | [X hrs] | [X min/hrs] | [Hot/Warm/Cold] | [Location] | [Date] |

*[Complete table with all in-scope systems]*

---

### Appendix D — Pre-Approved Communication Templates

*The following message templates are pre-approved for use during DR activation. Templates must be approved annually by the Head of Corporate Communications. Variable fields are indicated in [brackets].*

**Template D1 — Initial Customer Holding Statement (Website / SMS)**

> We are currently experiencing a technical interruption affecting [service/s]. Our technology teams are working urgently to restore full service. We will provide an update by [Time]. We apologise for any inconvenience. For urgent assistance, please contact our Customer Service Centre at [number].

**Template D2 — BNM Initial Notification (Email)**

> Dear [BNM Supervisor Name],
>
> [Organization Name] ([License Number]) hereby notifies Bank Negara Malaysia of a technology disruption event that occurred at [Time] on [Date]. The event affects [brief description of affected systems/services]. Our Disaster Recovery Plan has been activated. Estimated service restoration is [time/date]. We will provide a further update by [time]. This notification is made pursuant to BNM RMiT Clause 10.31.
>
> Contact for further information: [Name, Role, Phone, Email]

**Template D3 — Internal Staff Notification**

> **[INTERNAL — CONFIDENTIAL]**
>
> To: All Staff
> From: [Head of IT Operations / CEO]
> Subject: DR Activation Notice — [Date]
>
> At [Time] today, [Organization Name] activated its Disaster Recovery Plan following [brief description of event]. The Disaster Recovery Team is actively managing the situation. [Services affected] are currently unavailable. All media enquiries must be directed to [Communications contact]. Please do not discuss this matter externally. Updates will be provided at [interval].

**Template D4 — Service Restoration Notification (All Channels)**

> [Organization Name] confirms that all services have been fully restored as at [Time] on [Date]. We apologise for any disruption experienced. All transactions conducted during the affected period have been safeguarded. If you have any concerns regarding your account, please contact [contact details]. We will provide a further communication regarding the cause and our remediation actions within [timeframe].

---

### Appendix E — DR Communication Checklist

*Use this checklist during every DR activation to ensure all communication obligations are met.*

**Phase 1 — Immediate (T=0 to T+[X] minutes)**

- [ ] DR event logged in [ITSM Tool]
- [ ] Severity assessed and confirmed as DR-trigger
- [ ] Head of IT Operations notified
- [ ] DR Declaration formally issued and time-stamped
- [ ] DR team assembled on communication bridge
- [ ] CMT notified and bridge call initiated
- [ ] DR Communication Log opened (see Appendix F)

**Phase 2 — Assessment (T+[X] hours)**

- [ ] Full impact assessment completed
- [ ] RTO estimate communicated to CMT
- [ ] Business unit heads notified
- [ ] BNM initial notification submitted (time-stamped)
- [ ] NACSA notified (if cyber incident)
- [ ] Vendor / MSP escalation confirmed
- [ ] Customer holding message published
- [ ] First status update distributed to all stakeholders

**Phase 3 — Recovery Execution**

- [ ] Regular status updates issued at [X]-hour intervals
- [ ] Vendor recovery progress confirmed at each interval
- [ ] BNM progress updates submitted as required
- [ ] Board / ARC briefed (if threshold met)
- [ ] Communication log maintained throughout

**Phase 4 — Restoration and Stand-Down**

- [ ] Business sign-off on system restoration obtained
- [ ] DR stand-down formally declared and time-stamped
- [ ] All-staff restoration notification sent
- [ ] Customer restoration notification published
- [ ] BNM restoration notification submitted
- [ ] Communication log closed and archived
- [ ] Post-Incident Review scheduled

---

### Appendix F — DR Communication Log Template

*A communication log must be maintained throughout the duration of every DR event (real or test). The log is a key audit document and must be retained per the retention policy in Section 6.*

| Log Entry # | Date / Time (MYT) | Event / Communication | Sent By | Sent To | Channel | Message Summary | Acknowledgement Received (Y/N) | Notes |
|---|---|---|---|---|---|---|---|---|
| 001 | [Date / Time] | DR Declaration | [Name] | DRT; CMT | Bridge call | DR formally declared; all teams assembled | Y | |
| 002 | [Date / Time] | BNM Initial Notification | [Name] | BNM | Email | Initial notification per RMiT Cl. 10.31 | Y — Ref: [BNM Ref] | |
| 003 | [Date / Time] | Customer Holding Message | [Name] | All customers | Website / SMS | Template D1 issued | N/A | |
| 004 | [Date / Time] | Status Update #1 | [Name] | CMT; BU Heads | Email / Bridge | [Summary of status] | Y | |

---

*End of Document*

---

*This template was prepared in accordance with BNM Risk Management in Technology (RMiT) Policy Document requirements. All [placeholder] fields must be completed by [Organization Name] prior to formal adoption and approval. This document should be stored in the organization's document management system and access restricted to authorized personnel only.*