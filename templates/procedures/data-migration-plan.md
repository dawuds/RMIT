# Data Migration Plan

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Vendor Management |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By], [Title] |
| **Department** | [Department Name] |

---

> **Confidentiality Notice:** This document contains confidential information proprietary to [Organization Name]. It is intended solely for authorized personnel involved in vendor management, technology risk, and compliance functions. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Objectives and Scope of Migration](#3-objectives-and-scope-of-migration)
4. [Actions and Milestones](#4-actions-and-milestones)
5. [Accountable Owners](#5-accountable-owners)
6. [Vendor Risk Tiering Criteria](#6-vendor-risk-tiering-criteria)
7. [Due Diligence Checklist](#7-due-diligence-checklist)
8. [SLA and KPI Definitions](#8-sla-and-kpi-definitions)
9. [Exit Strategy Requirements](#9-exit-strategy-requirements)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section describes the intent of the document and its relevance to the organization's regulatory obligations. Authors should clearly state the business and compliance drivers for this plan.*

This Data Migration Plan establishes a structured and governed approach for the migration of data and the transition of services from an existing vendor to a successor vendor or in-house system. It ensures that [Organization Name] fulfils its obligations under Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 10.49**, which mandates that financial institutions maintain a robust exit and transition plan when engaging third-party technology service providers.

This document provides a systematic framework to safeguard data integrity, continuity of critical services, and the protection of customer information throughout the migration lifecycle.

### 1.2 Scope

*Define the boundaries of this plan — which systems, services, vendors, datasets, and business units are included or excluded. Be specific to avoid ambiguity during audit.*

This plan applies to:

- **In-scope Systems and Services:**
  - [System / Application Name 1] — [Brief description]
  - [System / Application Name 2] — [Brief description]
  - [System / Application Name 3] — [Brief description]

- **In-scope Data:**
  - [Data Type / Dataset 1] — e.g., Customer account records, transaction histories
  - [Data Type / Dataset 2] — e.g., Configuration data, cryptographic keys
  - [Data Type / Dataset 3] — e.g., Audit logs, compliance archives

- **Incumbent Vendor:** [Incumbent Vendor Name], providing [service description] under contract reference [Contract Reference Number].

- **Successor Vendor / In-House System:** [Successor Vendor Name / In-House Platform], as selected through [selection process reference].

- **Business Units Affected:**
  - [Business Unit 1]
  - [Business Unit 2]
  - [Business Unit 3]

- **Out of Scope:**
  - [Explicitly excluded systems, datasets, or business units]

### 1.3 Assumptions and Constraints

*List any assumptions made during the planning of this migration and constraints that may affect execution.*

| # | Assumption / Constraint | Impact |
|---|---|---|
| 1 | [e.g., Incumbent vendor will cooperate with data extraction requests] | [e.g., Migration timeline is dependent on vendor cooperation] |
| 2 | [e.g., Network bandwidth between environments is sufficient] | [e.g., Large dataset transfers may require off-peak scheduling] |
| 3 | [e.g., All source data is in a documented, exportable format] | [e.g., Manual transformation may be required for legacy formats] |
| 4 | [e.g., Regulatory approval is not required prior to migration] | [e.g., Plan proceeds upon internal governance approval only] |

---

## 2. Regulatory and Policy Context

### 2.1 Regulatory Framework

*Reference all applicable BNM policies, internal policies, and industry standards. Auditors will cross-reference this section against the actual documents cited.*

This Data Migration Plan has been developed in accordance with the following regulatory requirements and internal governance policies:

| Regulation / Policy | Issuing Authority | Relevant Clause(s) | Requirement Summary |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | **10.49** | Financial institutions must ensure exit and transition plans are in place for material outsourced technology services, covering data retrieval, service continuity, and secure decommissioning. |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | 10.44 – 10.48 | Vendor management lifecycle, due diligence, and ongoing monitoring requirements for third-party technology providers. |
| Personal Data Protection Act 2010 (PDPA) | Government of Malaysia | Section 9, 10 | Security and retention of personal data during transfer and processing. |
| [Internal IT Security Policy] | [Organization Name] | [Clause] | [Internal requirement summary] |
| [Internal Data Governance Policy] | [Organization Name] | [Clause] | [Internal requirement summary] |
| [Internal Business Continuity Policy] | [Organization Name] | [Clause] | [Internal requirement summary] |

### 2.2 Key Regulatory Obligations

The following obligations from BNM RMiT Clause 10.49 are directly addressed by this plan:

- **Data Portability:** The organization must ensure all data held by the vendor is retrievable in a usable format upon contract termination.
- **Service Continuity:** Critical services must continue without material disruption during the transition period.
- **Secure Decommissioning:** Incumbent vendor systems must be decommissioned securely, including sanitization of all [Organization Name] data from vendor infrastructure.
- **Transition Timeline:** A defined transition timeline must be agreed upon with the incumbent vendor and documented prior to contract expiry or termination.
- **Testing and Validation:** Data completeness and integrity must be validated prior to cutover and sign-off.

---

## 3. Objectives and Scope of Migration

### 3.1 Migration Objectives

*State the specific, measurable objectives this migration is designed to achieve. Link each objective to a business or regulatory driver where possible.*

| # | Objective | Success Criteria | Business / Regulatory Driver |
|---|---|---|---|
| 1 | Complete extraction of all in-scope data from incumbent vendor systems | 100% of records extracted and validated against source counts | RMiT 10.49 — Data portability |
| 2 | Ensure zero loss of critical customer data during migration | Data reconciliation confirms zero record discrepancies | PDPA Section 9 — Data integrity |
| 3 | Maintain continuity of [Service Name] throughout the transition | No Severity 1 or Severity 2 incidents attributable to migration activities | RMiT 10.49 — Service continuity |
| 4 | Achieve secure decommissioning of vendor infrastructure within [X] days of cutover | Vendor provides written certification of data sanitization | RMiT 10.49 — Secure decommission |
| 5 | Transfer all relevant documentation, configurations, and operational knowledge to the successor | Knowledge transfer sign-off completed by [Target Date] | Internal IT Governance Policy |
| 6 | [Additional objective] | [Success criteria] | [Driver] |

### 3.2 Migration Scope Statement

*Provide a precise scope statement suitable for inclusion in board or management reporting.*

> This migration encompasses the end-to-end transition of [describe services and data] from [Incumbent Vendor Name] to [Successor Vendor / In-House Platform], covering the period from [Migration Start Date] to [Migration Completion Date]. The migration is classified as [Critical / High / Medium] priority based on [Organization Name]'s vendor risk tiering criteria. All activities are subject to oversight by the Technology Risk Management function and reporting to [Governance Committee Name].

### 3.3 Migration Approach

*Describe the high-level approach selected (e.g., big-bang, phased, parallel run). Justify the selection.*

**Selected Approach:** [Big-Bang Migration / Phased Migration / Parallel Run / Hybrid]

**Justification:** [Explain why this approach was selected, e.g., "A phased migration approach was selected to minimize service disruption to critical systems, allowing staged validation before full cutover."]

| Approach Option | Description | Suitability Assessment |
|---|---|---|
| Big-Bang | All data migrated in a single cutover event | [Suitable / Not Suitable — Reason] |
| Phased Migration | Data and services migrated in defined stages | [Suitable / Not Suitable — Reason] |
| Parallel Run | Both incumbent and successor systems operate simultaneously for a defined period | [Suitable / Not Suitable — Reason] |
| Hybrid | Combination of phased and parallel approaches | [Suitable / Not Suitable — Reason] |

---

## 4. Actions and Milestones

### 4.1 Migration Phases

*This section maps the end-to-end migration into discrete phases, each with defined deliverables and completion criteria. Populate dates based on the approved project schedule.*

#### Phase 1: Initiation and Planning

| # | Action | Owner | Target Date | Completion Criteria | Status |
|---|---|---|---|---|---|
| 1.1 | Formal notification of migration intent to incumbent vendor | Head of Vendor Management | [Date] | Written acknowledgement received from vendor | [Not Started / In Progress / Complete] |
| 1.2 | Appointment of Migration Project Manager | [CIO / CTO] | [Date] | Project Manager confirmed and communicated | |
| 1.3 | Establish Migration Steering Committee | Head of Vendor Management | [Date] | First Steering Committee meeting held | |
| 1.4 | Complete current-state data inventory | [Data Owner] | [Date] | Data inventory document approved | |
| 1.5 | Conduct vendor risk tiering assessment for incumbent | Technology Risk Manager | [Date] | Risk tier confirmed and documented | |
| 1.6 | Review and activate exit clauses in incumbent vendor contract | Legal / Contracts | [Date] | Legal opinion obtained; notice period triggered | |
| 1.7 | Define data classification for all in-scope datasets | [Data Governance Lead] | [Date] | Data classification register updated | |

#### Phase 2: Due Diligence and Successor Readiness

| # | Action | Owner | Target Date | Completion Criteria | Status |
|---|---|---|---|---|---|
| 2.1 | Complete due diligence assessment on successor vendor / in-house platform | Technology Risk Manager | [Date] | Due diligence report approved | |
| 2.2 | Confirm successor environment infrastructure readiness | [IT Infrastructure Lead] | [Date] | Environment readiness checklist signed off | |
| 2.3 | Establish data migration tooling and secure transfer mechanisms | [IT Security / Architecture] | [Date] | Tools deployed and tested in non-production | |
| 2.4 | Define and document data mapping between source and target schemas | [Data Architect] | [Date] | Data mapping document approved | |
| 2.5 | Agree transition SLAs and KPIs with successor vendor | Head of Vendor Management | [Date] | SLAs documented in successor contract | |
| 2.6 | Develop and approve test strategy for data validation | [QA Lead] | [Date] | Test strategy document approved | |

#### Phase 3: Data Extraction and Preparation

| # | Action | Owner | Target Date | Completion Criteria | Status |
|---|---|---|---|---|---|
| 3.1 | Request full data extract from incumbent vendor | Head of Vendor Management | [Date] | Data extract received and initial volume confirmed | |
| 3.2 | Perform data quality assessment on extracted data | [Data Governance Lead] | [Date] | Data quality report issued | |
| 3.3 | Execute data cleansing and transformation procedures | [Data Engineer] | [Date] | Transformation log reviewed and approved | |
| 3.4 | Establish data transfer channels (secure file transfer / API / physical media) | [IT Security] | [Date] | Transfer channel security assessment completed | |
| 3.5 | Complete non-production migration trial run | [Migration Project Manager] | [Date] | Trial run report reviewed; issues resolved | |

#### Phase 4: Migration Execution

| # | Action | Owner | Target Date | Completion Criteria | Status |
|---|---|---|---|---|---|
| 4.1 | Obtain formal migration go/no-go approval from Steering Committee | Steering Committee | [Date] | Go/no-go decision recorded in meeting minutes | |
| 4.2 | Execute production data migration | [Migration Project Manager] | [Date] | All datasets transferred to successor environment | |
| 4.3 | Perform data reconciliation and integrity validation | [Data Governance Lead] | [Date] | Reconciliation report confirms 100% completeness | |
| 4.4 | Execute parallel run / user acceptance testing (if applicable) | [Business Unit Leads] | [Date] | UAT sign-off obtained from all business units | |
| 4.5 | Execute formal cutover to successor environment | [IT Infrastructure Lead] | [Date] | Cutover checklist completed; service operational on successor | |
| 4.6 | Decommission access to incumbent vendor systems | [IT Security] | [Date] | All access credentials revoked; access logs reviewed | |

#### Phase 5: Post-Migration and Closure

| # | Action | Owner | Target Date | Completion Criteria | Status |
|---|---|---|---|---|---|
| 5.1 | Monitor successor environment stability for [X] days post-cutover | [IT Operations] | [Date] | Hypercare period completed; no material incidents | |
| 5.2 | Obtain data sanitization certification from incumbent vendor | Head of Vendor Management | [Date] | Written certification received and filed | |
| 5.3 | Complete and archive migration lessons learned report | Migration Project Manager | [Date] | Report approved and stored in document management system | |
| 5.4 | Update vendor register and internal system inventory | [Vendor Management Team] | [Date] | Registers reflect new vendor / system | |
| 5.5 | Conduct post-migration security assessment | [IT Security / CISO] | [Date] | Security assessment report with no outstanding critical findings | |
| 5.6 | Close migration project and report to Steering Committee | Migration Project Manager | [Date] | Project closure report approved | |

### 4.2 Summary Milestone Schedule

| Milestone | Target Date | Responsible |
|---|---|---|
| M1 — Migration Plan Approved | [Date] | Head of Vendor Management |
| M2 — Data Inventory and Classification Complete | [Date] | Data Governance Lead |
| M3 — Successor Environment Ready | [Date] | IT Infrastructure Lead |
| M4 — Data Extract Received from Incumbent Vendor | [Date] | Migration Project Manager |
| M5 — Non-Production Trial Run Complete | [Date] | Migration Project Manager |
| M6 — Go/No-Go Decision | [Date] | Steering Committee |
| M7 — Production Cutover | [Date] | IT Infrastructure Lead |
| M8 — Data Sanitization Certification Received | [Date] | Head of Vendor Management |
| M9 — Migration Project Closed | [Date] | Migration Project Manager |

---

## 5. Accountable Owners

### 5.1 Migration Governance Structure

*Describe the governance hierarchy for this migration. Identify all decision-making bodies and their authority levels.*

| Body / Role | Members | Authority Level | Meeting Cadence |
|---|---|---|---|
| **Migration Steering Committee** | [CIO/CTO], Head of Vendor Management, CISO, Head of [Business Unit] | Strategic direction; go/no-go decisions; escalation authority | [Weekly / Fortnightly] during active migration |
| **Migration Working Group** | Migration Project Manager, Data Governance Lead, IT Architecture, IT Security, Business Analysts | Operational execution; issue resolution; progress reporting | [Weekly] |
| **Technology Risk Committee** | [CRO], Technology Risk Manager, CISO | Risk acceptance; escalation of material risks | [As required] |
| **[Board / Board IT Committee]** | Board members / designated committee | Oversight and approval for material outsourcing changes | [As required] |

### 5.2 Key Role Assignments

| Role | Assigned Individual | Department | Contact Details | Responsibilities |
|---|---|---|---|---|
| **Migration Project Manager** | [Name] | [Department] | [Email / Phone] | Overall coordination of migration activities; progress reporting to Steering Committee; issue and risk log management |
| **Head of Vendor Management** | [Name] | Vendor Management | [Email / Phone] | Incumbent and successor vendor engagement; contract management; regulatory compliance of exit process |
| **Data Governance Lead** | [Name] | [Department] | [Email / Phone] | Data inventory, classification, quality assessment, and reconciliation sign-off |
| **IT Security Lead** | [Name] | Information Security | [Email / Phone] | Secure transfer mechanisms; access deprovisioning; post-migration security assessment |
| **IT Infrastructure Lead** | [Name] | IT Operations | [Email / Phone] | Successor environment readiness; cutover execution; post-migration monitoring |
| **Data Architect** | [Name] | IT Architecture | [Email / Phone] | Data mapping; transformation design; schema validation |
| **Legal / Contracts** | [Name] | Legal | [Email / Phone] | Contract review; exit clause activation; vendor legal obligations |
| **[Business Unit Representative 1]** | [Name] | [Business Unit] | [Email / Phone] | Business requirements validation; UAT sign-off |
| **[Business Unit Representative 2]** | [Name] | [Business Unit] | [Email / Phone] | Business requirements validation; UAT sign-off |

### 5.3 Escalation Path

*Document the escalation path for issues and risks arising during the migration.*

```
Level 1: Migration Working Group
  └─ Unresolved within [X] business days
      │
Level 2: Migration Steering Committee
  └─ Material risk, regulatory breach, or service disruption
      │
Level 3: Technology Risk Committee / [CIO / CTO]
  └─ Board-level escalation threshold met (per escalation policy)
      │
Level 4: Board / Board IT Committee
```

---

## 6. Vendor Risk Tiering Criteria

### 6.1 Overview

*Explain the purpose of risk tiering and how it influences the rigour of the migration process. Reference the organization's vendor risk management framework.*

*Risk tiering determines the level of due diligence, oversight, and migration controls applied to the incumbent and successor vendors. Higher-tier vendors are subject to enhanced scrutiny given their criticality to [Organization Name]'s operations and data assets.*

[Organization Name] applies a four-tier vendor risk classification model in accordance with [Internal Vendor Risk Management Policy / RMiT requirements]. The tier assigned to the incumbent vendor directly determines the controls, oversight frequency, and exit requirements applicable to this migration.

### 6.2 Vendor Risk Tier Definitions

| Risk Tier | Classification | Criteria | Migration Requirements |
|---|---|---|---|
| **Tier 1 — Critical** | Highest risk | Supports critical operations; processes sensitive/personal customer data; no viable short-term alternative exists; material impact if unavailable | Full migration plan required; board notification; BNM notification if applicable; enhanced due diligence on successor; minimum [X]-month parallel run |
| **Tier 2 — High** | High risk | Significant operational dependency; processes regulated data; replacement would require [X] months+ | Detailed migration plan required; senior management approval; enhanced due diligence; [X]-week parallel run |
| **Tier 3 — Medium** | Moderate risk | Operational dependency but viable alternatives exist; limited regulated data; replacement feasible within [X] months | Standard migration plan required; management approval; standard due diligence |
| **Tier 4 — Low** | Lower risk | Minimal operational dependency; no regulated data; easily replaceable | Simplified transition checklist; business unit approval |

### 6.3 Risk Tiering Assessment — Incumbent Vendor

| Assessment Criterion | Rating (High / Medium / Low) | Evidence / Justification |
|---|---|---|
| Criticality of supported services to business operations | [H / M / L] | [Justification] |
| Volume and sensitivity of personal data processed | [H / M / L] | [Justification] |
| Availability of alternative service providers | [H / M / L] | [Justification] |
| Estimated recovery time if vendor becomes unavailable | [H / M / L] | [Justification] |
| Regulatory reporting obligations associated with vendor | [H / M / L] | [Justification] |
| Contractual and legal complexity of exit | [H / M / L] | [Justification] |
| Degree of data integration and system interdependency | [H / M / L] | [Justification] |
| **Overall Tier Assignment** | **[Tier 1 / 2 / 3 / 4]** | **[Summary justification]** |

**Tier Assessment Approved By:** [Name, Title] on [Date]

### 6.4 Risk Tiering Assessment — Successor Vendor

| Assessment Criterion | Rating (High / Medium / Low) | Evidence / Justification |
|---|---|---|
| Financial stability and operational track record | [H / M / L] | [Justification] |
| Security certifications and compliance posture | [H / M / L] | [Justification] |
| Data residency and sovereignty compliance | [H / M / L] | [Justification] |
| Contractual protections for exit and data portability | [H / M / L] | [Justification] |
| Subcontractor and fourth-party risk exposure | [H / M / L] | [Justification] |
| **Overall Risk Rating** | **[High / Medium / Low]** | **[Summary justification]** |

---

## 7. Due Diligence Checklist

### 7.1 Purpose

*Describe how the due diligence checklist is used and who is responsible for completing and reviewing it.*

*This checklist must be completed prior to committing to migration execution. All items must be marked as either Complete, In Progress, Not Applicable, or Outstanding. Outstanding items must be escalated to the Migration Steering Committee before the go/no-go decision.*

### 7.2 Incumbent Vendor Exit Due Diligence

| # | Due Diligence Item | Responsible | Status | Evidence / Notes |
|---|---|---|---|---|
| **Contractual and Legal** | | | | |
| 1.1 | Contract exit clause reviewed and notice period confirmed | Legal / Contracts | [ ] Complete / [ ] In Progress / [ ] N/A | [Reference contract clause] |
| 1.2 | Formal written notice of termination served to incumbent vendor | Head of Vendor Management | | |
| 1.3 | Incumbent vendor obligations upon termination confirmed (data return, sanitization, transition assistance) | Legal / Contracts | | |
| 1.4 | Dispute resolution and penalty clauses reviewed | Legal / Contracts | | |
| 1.5 | NDA and confidentiality obligations post-termination confirmed | Legal / Contracts | | |
| **Data and Systems** | | | | |
| 2.1 | Complete data inventory obtained from incumbent vendor | Data Governance Lead | | |
| 2.2 | Data formats confirmed as exportable and documented | Data Architect | | |
| 2.3 | Encryption and key management arrangements confirmed for data in transit | IT Security Lead | | |
| 2.4 | Data retention and disposal obligations under PDPA confirmed | Data Governance Lead | | |
| 2.5 | All API integrations and system dependencies mapped | IT Architecture | | |
| 2.6 | Software licenses and intellectual property rights reviewed | Legal / [IT Asset Management] | | |
| **Security** | | | | |
| 3.1 | Access rights review completed — all [Organization Name] privileged accounts identified | IT Security Lead | | |
| 3.2 | Plan for revocation of all access upon cutover documented | IT Security Lead | | |
| 3.3 | Penetration test or security assessment of successor environment completed | IT Security Lead | | |
| 3.4 | Incident response responsibilities during transition period documented | CISO | | |
| **Operational Continuity** | | | | |
| 4.1 | Business continuity plan updated to reflect migration activities | [BCM Lead] | | |
| 4.2 | Rollback plan documented and tested | Migration Project Manager | | |
| 4.3 | Communication plan to affected business units and customers (if applicable) prepared | [Communications / Head of Vendor Management] | | |
| 4.4 | Support and escalation contacts at incumbent vendor confirmed for transition period | Head of Vendor Management | | |

### 7.3 Successor Vendor Onboarding Due Diligence

| # | Due Diligence Item | Responsible | Status | Evidence / Notes |
|---|---|---|---|---|
| **Governance and Compliance** | | | | |
| 5.1 | Successor vendor risk tiering assessment completed and approved | Technology Risk Manager | [ ] Complete / [ ] In Progress / [ ] N/A | |
| 5.2 | Information security policy and controls documentation reviewed | IT Security Lead | | |
| 5.3 | Regulatory compliance certifications confirmed (ISO 27001, SOC 2, etc.) | Technology Risk Manager | | |
| 5.4 | Subcontractor / fourth-party risk assessment completed | Vendor Management Team | | |
| 5.5 | BNM outsourcing notification requirements assessed and actioned (if applicable) | Head of Vendor Management / Compliance | | |
| **Contractual** | | | | |
| 6.1 | Data processing agreement executed in compliance with PDPA | Legal / Contracts | | |
| 6.2 | SLA and KPI definitions included in successor contract | Head of Vendor Management | | |
| 6.3 | Exit and data portability clauses included in successor contract | Legal / Contracts | | |
| 6.4 | Audit rights clause included in successor contract | Legal / Contracts | | |
| **Technical Readiness** | | | | |
| 7.1 | Successor environment infrastructure provisioned and documented | IT Infrastructure Lead | | |
| 7.2 | Data migration tooling deployed and tested in non-production | Data Architect | | |
| 7.3 | Connectivity and network security between [Organization Name] and successor confirmed | IT Security Lead / IT Infrastructure Lead | | |
| 7.4 | Disaster recovery and backup configurations on successor environment confirmed | IT Infrastructure Lead | | |

---

## 8. SLA and KPI Definitions

### 8.1 Transition Period SLAs — Incumbent Vendor

*Define service levels that the incumbent vendor must maintain during the transition period to protect [Organization Name]'s operations until cutover is complete.*

| SLA ID | Service | Service Level Requirement | Measurement Method | Reporting Frequency | Consequence of Breach |
|---|---|---|---|---|---|
| SLA-T01 | [Service Name] availability during transition | [e.g., 99.5% monthly uptime] | [Automated monitoring / vendor reporting] | Monthly | [Escalation to Steering Committee; liquidated damages per contract clause X] |
| SLA-T02 | Incident response time (Severity 1) | [e.g., Response within 1 hour] | Incident ticketing system | Per incident | [Escalation; potential breach notice] |
| SLA-T03 | Data extraction request fulfilment | [e.g., Full extract delivered within 10 business days of request] | Extraction log | Per request | [Formal breach notice; legal action] |
| SLA-T04 | Transition assistance cooperation | [e.g., Named transition contact available during business hours] | Meeting attendance records | Weekly | [Escalation] |
| SLA-T05 | Data sanitization completion | [e.g., Written certification delivered within 30 days of cutover] | Certification document receipt | Post-cutover | [Escalation; retention of final payment] |

### 8.2 Post-Migration SLAs — Successor Vendor

*Define the service levels expected from the successor vendor once migration is complete, as documented in the successor contract.*

| SLA ID | Service | Service Level Requirement | Measurement Method | Reporting Frequency | Consequence of Breach |
|---|---|---|---|---|---|
| SLA-S01 | [Core Service Name] availability | [e.g., 99.9% monthly uptime, excluding agreed maintenance windows] | [Monitoring tool / vendor dashboard] | Monthly | [Service credit per contract Schedule X] |
| SLA-S02 | Incident response time (Severity 1 — Production Outage) | [e.g., Acknowledgement within 15 minutes; workaround within 2 hours] | Incident ticketing system | Per incident | [Service credit; escalation] |
| SLA-S03 | Incident response time (Severity 2 — Degraded Service) | [e.g., Acknowledgement within 1 hour; resolution within 8 hours] | Incident ticketing system | Per incident | [Service credit] |
| SLA-S04 | Planned maintenance notification | [e.g., Minimum 5 business days advance notice] | Change management records | Per maintenance event | [Escalation] |
| SLA-S05 | Data backup and recovery testing | [e.g., Monthly backup test; RTO of [X] hours; RPO of [X] hours] | Backup test reports | Monthly | [Escalation; remediation plan required] |
| SLA-S06 | Security incident notification to [Organization Name] | [e.g., Notification within 24 hours of confirmed security incident] | Security incident log | Per incident | [Formal breach notice] |

### 8.3 Migration KPIs

*KPIs measure the health and progress of the migration process itself. These should be reported to the Steering Committee at each review meeting.*

| KPI ID | KPI Name | Target | Measurement Method | Reporting Frequency |
|---|---|---|---|---|
| KPI-01 | Milestone completion rate | 100% of milestones met within [X] days of target date | Project schedule | Fortnightly |
| KPI-02 | Data extraction completeness | 100% of in-scope records extracted and accounted for | Data reconciliation report | Upon each extract |
| KPI-03 | Data quality pass rate | ≥ [X]% of records pass quality checks without remediation | Data quality assessment | Upon each extract |
| KPI-04 | Migration-related incidents (Severity 1/2) | Zero Severity 1 incidents attributable to migration | Incident log | Weekly |
| KPI-05 | Rollback exercises completed | [X] rollback test(s) completed prior to production cutover | Test records | Pre-cutover |
| KPI-06 | Due diligence items outstanding at go/no-go | Zero Outstanding items in due diligence checklist | Due diligence checklist | At go/no-go gate |
| KPI-07 | User acceptance testing pass rate | ≥ [X]% of UAT test cases passed | UAT report | Upon UAT completion |
| KPI-08 | Data sanitization certification received | Certification received within [X] days of cutover | Document management system | Post-cutover |

---

## 9. Exit Strategy Requirements

### 9.1 Exit Strategy Overview

*Describe the overarching exit strategy, including the circumstances that trigger execution, and align it with RMiT 10.49 requirements.*

This exit strategy defines the requirements and procedures for transitioning services away from [Incumbent Vendor Name] in a controlled, secure, and regulatorily compliant manner. It covers all scenarios under which exit may be triggered and ensures that [Organization Name] retains full control over its data and operations throughout the process.

### 9.2 Exit Trigger Scenarios

| Scenario | Description | Activation Authority |
|---|---|---|
| **Planned Contract Expiry** | Contract reaches its end date and renewal is not pursued | Head of Vendor Management |
| **Vendor-Initiated Termination** | Incumbent vendor provides notice of service discontinuation | Head of Vendor Management / [CIO] |
| **Performance-Based Termination** | Persistent SLA breaches or service failures trigger termination clause | Technology Risk Committee |
| **Insolvency / Business Continuity Event** | Vendor enters administration, receivership, or ceases operations | [CIO / CTO] with board notification |
| **Regulatory Direction** | BNM or other regulatory body directs termination of the arrangement | [Board] with Compliance notification |
| **Security Incident** | Material security breach by vendor necessitates emergency exit | CISO / [CIO] |
| **Strategic Decision** | Organizational decision to insource or change service provider | [Board / Management Committee] |

### 9.3 Data Return Requirements

*Specify the exact requirements for data return from the incumbent vendor, including format, completeness, and timelines.*

Upon triggering of exit, [Incumbent Vendor Name] is contractually required to:

| Requirement | Specification | Contract Reference |
|---|---|---|
| **Data return format** | [e.g., CSV / JSON / SQL dump / vendor-specific export] in documented schema | [Contract Clause] |
| **Data completeness** | 100% of records within scope, including all historical data for [X] years | [Contract Clause] |
| **Encryption of returned data** | Data encrypted using [AES-256 / organization-provided key] during transfer | [Contract Clause] |
| **Return timeline** | Full extract delivered within [X] business days of formal exit notice | [Contract Clause] |
| **Metadata and documentation** | Data dictionary, schema documentation, and processing logs included | [Contract Clause] |
| **Verification** | Vendor to provide record counts and checksums for reconciliation | [Contract Clause] |

### 9.4 Secure Decommissioning Requirements

*Detail the requirements for secure decommissioning of [Organization Name] data from incumbent vendor infrastructure, including certification requirements.*

| Step | Requirement | Responsible | Verification Method |
|---|---|---|---|
| 1 | All [Organization Name] data deleted from primary storage systems | Incumbent Vendor | Written certification with reference to deletion log |
| 2 | All backups containing [Organization Name] data purged | Incumbent Vendor | Written certification; backup schedule evidence |
| 3 | All cryptographic keys held by vendor for [Organization Name] data destroyed | Incumbent Vendor / IT Security | Key destruction certificate |
| 4 | All [Organization Name] privileged access credentials deactivated | IT Security Lead | Access audit log review |
| 5 | All API keys and integration credentials rotated or invalidated | IT Security Lead | Configuration management records |
| 6 | Final security scan of successor environment post-migration | IT Security Lead | Post-migration security assessment report |
| 7 | Incumbent vendor data sanitization certificate received and filed | Head of Vendor Management | Certificate on file in document management system |

**Decommissioning Certification Standard:** [Specify standard, e.g., NIST SP 800-88 Guidelines for Media Sanitization / DoD 5220.22-M / organization-defined standard]

### 9.5 Rollback Plan

*A rollback plan must be documented and tested before production migration commences. Define the conditions under which rollback is invoked and the specific steps to be taken.*

**Rollback Decision Authority:** [Name of role authorised to invoke rollback, e.g., Migration Steering Committee / CIO]

**Rollback Trigger Conditions:**

- Data reconciliation identifies loss or corruption exceeding [X]% of records
- Severity 1 incident occurs during cutover that cannot be resolved within [X] hours
- Successor environment availability drops below [X]% during the first [X] hours post-cutover
- [Additional trigger condition]

**Rollback Procedure:**

| Step | Action | Responsible | Estimated Duration |
|---|---|---|---|
| 1 | Invoke rollback decision and notify Steering Committee | Migration Project Manager | [X] minutes |
| 2 | Redirect all production traffic back to incumbent vendor systems | IT Infrastructure Lead | [X] minutes |
| 3 | Notify affected business units of rollback | [Communications Lead] | [X] minutes |
| 4 | Preserve all migration logs and artefacts for post-incident review | IT Security Lead | [X] hours |
| 5 | Conduct root cause analysis and remediation before reattempting migration | Migration Working Group | [X] days |

**Rollback Test Schedule:**

| Test # | Planned Date | Scope | Completed | Sign-Off |
|---|---|---|---|---|
| Rollback Test 1 | [Date] | [Scope of test] | [ ] Yes / [ ] No | [Name] |
| Rollback Test 2 | [Date] | [Scope of test] | [ ] Yes / [ ] No | [Name] |

### 9.6 Knowledge Transfer Requirements

*Ensure all operational knowledge held by the incumbent vendor is captured and transferred to [Organization Name] or the successor vendor before decommissioning.*

| Knowledge Domain | Format | Recipient | Target Completion Date | Sign-Off |
|---|---|---|---|---|
| System architecture and configuration documentation | [Format, e.g., Word / PDF / Wiki] | IT Architecture | [Date] | [Name] |
| Operational runbooks and procedures | [Format] | IT Operations | [Date] | [Name] |
| Integration specifications and API documentation | [Format] | IT Architecture | [Date] | [Name] |
| Incident history and known issues log | [Format] | IT Operations / IT Security | [Date] | [Name] |
| Data dictionary and schema documentation | [Format] | Data Governance Lead | [Date] | [Name] |
| Security configuration and access control documentation | [Format] | IT Security Lead | [Date] | [Name] |
| [Additional knowledge domain] | [Format] | [Recipient] | [Date] | [Name] |

---

## 10. Roles and Responsibilities

### 10.1 RACI Matrix

*The RACI matrix defines who is Responsible (R), Accountable (A), Consulted (C), and Informed (I) for each key activity in the migration lifecycle.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Vendor Mgmt | Migration PM | Data Gov Lead | IT Security Lead | IT Infra Lead | Legal / Contracts | Technology Risk Mgr | CISO | Business Unit Leads | [Board / IT Committee] |
|---|---|---|---|---|---|---|---|---|---|---|
| Migration plan development and approval | A | R | C | C | C | C | C | C | I | I |
| Vendor risk tiering assessment | C | I | I | C | I | I | R/A | C | I | I |
| Contract exit clause activation | A | I | I | I | I | R | C | I | I | I |
| Data inventory and classification | C | I | A/R | I | I | I | C | I | C | I |
| Due diligence checklist — incumbent vendor exit | A | R | C | C | C | C | C | C | I | I |
| Due diligence checklist — successor vendor onboarding | A | R | I | C | C | C | R | C | I | I |
| Data extraction request | A/R | I | C | C | I | C | I | I | I | I |
| Data quality assessment | C | I | A/R | I | I | I | I | I | I | I |
| Secure transfer mechanism design | C | I | C | A/R | R | I | C | C | I | I |
| Non-production migration trial | C | A/R | C | C | R | I | I | C | C | I |
| Go/no-go decision | A | C | C | C | C | C | C | C | C | I |
| Production migration execution | C | A/R | C | C | R | I | I | C | I | I |
| Data reconciliation and validation | C | C | A/R | I | I | I | I | I | C | I |
| UAT sign-off | C | C | I | I | I | I | I | I | A/R | I |
| Access deprovisioning (incumbent) | C | C | I | A/R | R | I | I | C | I | I |
| Data sanitization certification | A/R | I | I | C | I | C | C | I | I | I |
| Post-migration security assessment | C | I | I | C | C | I | C | A/R | I | I |
| Steering committee reporting | A/R | R | C | C | C | I | C | C | I | A |
| Lessons learned and project closure | C | A/R | C | C | C | I | C | I | C | I |

---

## 11. Review and Approval

### 11.1 Document Review Schedule

This document is subject to the following review schedule:

| Review Trigger | Description | Action Required |
|---|---|---|
| **Annual Review** | Scheduled review regardless of changes | Full document review; update version if changes required |
| **Significant Change** | Material change to vendor arrangements, regulatory requirements, or organizational structure | Full document review and update; re-approval required |
| **Post-Migration Review** | Following completion of a migration exercise | Update with lessons learned; revise procedures as appropriate |
| **Regulatory Update** | BNM issues updated RMiT or related policy | Review for compliance gap; update and re-approve |

### 11.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial document creation and approval |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of major revision] |

### 11.3 Approval Sign-Off

*All individuals listed below must review and sign off this document prior to it being considered approved and effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Head of Vendor Management** (Document Owner) | [Name] | _________________ | [Date] |
| **Chief Information Officer / Chief Technology Officer** | [Name] | _________________ | [Date] |
| **Chief Information Security Officer** | [Name] | _________________ | [Date] |
| **Technology Risk Manager** | [Name] | _________________ | [Date] |
| **Chief Risk Officer** | [Name] | _________________ | [Date] |
| **Head of Compliance** | [Name] | _________________ | [Date] |
| **[Additional Approver Role]** | [Name] | _________________ | [Date] |

---

## 12. References

### 12.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | **10.49** — Exit and transition plan requirements for outsourced technology services |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | 10.44–10.48 — Vendor management lifecycle and due diligence |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | 10.34–10.43 — Outsourcing risk management requirements |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Section 9 (Security), Section 10 (Retention) |
| [BNM JPDPD / Other BNM Policy] | [Policy Title] | Bank Negara Malaysia | [Relevant clause] |

### 12.2 Internal Policy References

| Reference | Title | Document ID | Version |
|---|---|---|---|
| [Internal Policy 1] | Vendor Risk Management Policy | [Doc ID] | [Version] |
| [Internal Policy 2] | Information Security Policy | [Doc ID] | [Version] |
| [Internal Policy 3] | Data Governance Policy | [Doc ID] | [Version] |
| [Internal Policy 4] | Business Continuity Management Policy | [Doc ID] | [Version] |
| [Internal Policy 5] | Outsourcing Policy | [Doc ID] | [Version] |
| [Internal Policy 6] | IT Change Management Policy | [Doc ID] | [Version] |

### 12.3 Related Documents

| Document | Purpose | Location |
|---|---|---|
| Vendor Register | Inventory of all third-party technology vendors and their risk classifications | [Document Management System Path] |
| [Incumbent Vendor] Contract | Governing contract including exit clauses | [Document Management System Path] |
| [Successor Vendor] Contract | Governing contract including SLAs and data portability clauses | [Document Management System Path] |
| Data Classification Register | Classification of all in-scope data assets | [Document Management System Path] |
| Business Continuity Plan | BCP arrangements during migration period | [Document Management System Path] |

---

## 13. Appendices

### Appendix A — Data Inventory Register

*Complete this register for all in-scope data prior to commencing migration activities. This register forms the basis for data extraction requests and post-migration reconciliation.*

| # | Data Type / Dataset | Data Classification | Volume (Records / Size) | Location on Incumbent System | Retention Requirement | Personal Data (Y/N) | PDPA Applicable (Y/N) | Data Owner |
|---|---|---|---|---|---|---|---|---|
| 1 | [Dataset Name] | [Confidential / Restricted / Internal / Public] | [Volume] | [System / Database / Table] | [X years] | [Y/N] | [Y/N] | [Owner Name] |
| 2 | | | | | | | | |
| 3 | | | | | | | | |

### Appendix B — System Integration and Dependency Map

*Document all integrations between in-scope systems and other internal or external systems. This must be completed before migration to ensure no dependencies are missed.*

| Integration ID | Source System | Target System | Integration Type | Data Exchanged | Criticality | Action Required During Migration |
|---|---|---|---|---|---|---|
| INT-001 | [System Name] | [System Name] | [API / File Transfer / Database Link / etc.] | [Data type] | [Critical / High / Medium / Low] | [e.g., Reconfigure API endpoint; update connection strings] |
| INT-002 | | | | | | |

### Appendix C — Migration Test Cases and Results

*Record all test cases executed during non-production trial migration and UAT. This appendix must be completed and signed off before go/no-go decision.*

| Test Case ID | Test Description | Test Data Used | Expected Result | Actual Result | Pass / Fail | Tested By | Test Date | Defects Raised |
|---|---|---|---|---|---|---|---|---|
| TC-001 | [e.g., Full data extract and load — Customer records] | [Test dataset] | [Expected outcome] | [Actual outcome] | [ ] Pass / [ ] Fail | [Name] | [Date] | [Defect ID / None] |
| TC-002 | | | | | | | | |

### Appendix D — Migration Communication Plan

*Document the communication strategy for notifying internal and external stakeholders of the migration. Tailor to the nature of the migration and the audiences affected.*

| Stakeholder | Communication Type | Message Summary | Channel | Responsible | Target Date |
|---|---|---|---|---|---|
| Affected Business Units | Internal notice | Overview of migration timeline, expected impact, and points of contact | Email / Intranet | Migration PM | [Date] |
| Board / Management Committee | Management report | Status update on migration progress and risk | Board paper / Management report | Head of Vendor Management | [Date] |
| [Customers, if applicable] | Customer notice | [Notification of service changes, if required under regulatory obligations] | [Channel] | [Owner] | [Date] |
| BNM (if notification required) | Regulatory notification | [Notification per BNM outsourcing notification requirements] | [Official submission channel] | Compliance | [Date] |

### Appendix E — Migration Risk Register

*Maintain a risk register throughout the migration lifecycle. Risks must be reviewed at each Steering Committee meeting.*

| Risk ID | Risk Description | Likelihood (1–5) | Impact (1–5) | Risk Rating | Risk Owner | Mitigation / Controls | Residual Risk | Status |
|---|---|---|---|---|---|---|---|---|
| R-001 | Incumbent vendor fails to cooperate with data extraction within required timeframe | [L] | [I] | [L×I] | Head of Vendor Management | Contractual obligations enforced; legal notice prepared; escalation path defined | [Residual] | [Open / Closed] |
| R-002 | Data corruption or loss during migration transfer | [L] | [I] | [L×I] | Migration PM / Data Gov Lead | Checksums validated; rollback plan in place; test migration completed | [Residual] | |
| R-003 | Successor environment not ready by planned cutover date | [L] | [I] | [L×I] | IT Infrastructure Lead | Weekly readiness reporting to Steering Committee; contingency planning | [Residual] | |
| R-004 | Regulatory non-compliance during migration (e.g., PDPA breach) | [L] | [I] | [L×I] | CISO / Compliance | PDPA impact assessment completed; data handling protocols enforced | [Residual] | |
| R-005 | [Additional risk] | | | | | | | |

### Appendix F — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia |
| **Data Migration** | The process of transferring data between storage systems, formats, or computing environments |
| **Data Sanitization** | The process of deliberately, permanently, and irreversibly removing or destroying data from a storage medium |
| **Due Diligence** | An investigation or audit of a potential vendor or existing arrangement to confirm facts and assess risk |
| **Exit Strategy** | A structured plan for transitioning services and data away from an incumbent vendor in a controlled manner |
| **Incumbent Vendor** | The existing third-party technology service provider from whom services are being transitioned |
| **KPI** | Key Performance Indicator — a measurable value that demonstrates how effectively an objective is being achieved |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk management for financial institutions |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time |
| **RTO** | Recovery Time Objective — the maximum acceptable length of time that a system can be offline |
| **SLA** | Service Level Agreement — a commitment between a service provider and a customer defining the expected level of service |
| **Successor Vendor** | The new third-party technology service provider or in-house platform receiving the transitioned services |
| **UAT** | User Acceptance Testing — testing conducted by end users to verify that a solution meets their requirements |
| **Vendor Risk Tiering** | The classification of vendors into risk categories based on their criticality and risk exposure to the organization |

---

*End of Document*

---

*This document template was prepared in accordance with BNM Risk Management in Technology (RMiT) requirements, specifically Clause 10.49. It should be reviewed by [Organization Name]'s legal, compliance, and technology risk functions before use in a regulated environment.*