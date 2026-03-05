# Business Impact Analysis Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Regulatory Reference:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document — Clause 10.34
>
> **Confidentiality Notice:** This document contains confidential information proprietary to [Organization Name]. It is intended solely for authorized personnel involved in technology risk management and business continuity planning. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Framework](#2-regulatory-and-policy-framework)
3. [Scope and Applicability](#3-scope-and-applicability)
4. [Business Impact Analysis Process Flow](#4-business-impact-analysis-process-flow)
5. [Critical Business Processes Inventory](#5-critical-business-processes-inventory)
6. [Technology Dependencies Assessment](#6-technology-dependencies-assessment)
7. [Impact Assessment and Recovery Objectives](#7-impact-assessment-and-recovery-objectives)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Tools and Systems Used](#9-tools-and-systems-used)
10. [Escalation Procedures](#10-escalation-procedures)
11. [BIA Findings and Risk Rating Summary](#11-bia-findings-and-risk-rating-summary)
12. [Recommendations and Action Plan](#12-recommendations-and-action-plan)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

*This section describes the intent of the Business Impact Analysis (BIA) and the boundaries within which it applies. Authors should clearly articulate the regulatory obligation being fulfilled and the business context driving this assessment.*

This Business Impact Analysis (BIA) Report has been prepared by [Organization Name] in fulfilment of the requirements under Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 10.34**, which mandates that financial institutions identify and assess the impact of technology disruptions on critical business operations.

The primary objectives of this BIA are to:

- Identify and catalogue all **critical business processes** and their associated technology dependencies within [Organization Name].
- Determine **Maximum Tolerable Downtime (MTD)**, **Recovery Time Objectives (RTO)**, and **Recovery Point Objectives (RPO)** for each critical process.
- Assess the **financial, operational, regulatory, and reputational impact** of technology disruptions.
- Provide a structured basis for **Business Continuity Planning (BCP)** and **Disaster Recovery Planning (DRP)** initiatives.
- Inform technology investment and risk treatment decisions at the Board and Senior Management level.

This report is reviewed on a **continuous monitoring basis** with formal quarterly reviews and a comprehensive **annual update** to reflect organizational changes, new technology deployments, and evolving threat landscapes.

---

## 2. Regulatory and Policy Framework

*This section maps the document to its governing regulatory instruments. Authors should confirm clause references remain current against the latest BNM RMiT issuance and note any related internal policies.*

### 2.1 Regulatory Basis

| Regulatory Instrument | Issuing Authority | Relevant Clause(s) | Obligation Summary |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.34 | Financial institutions must conduct a BIA to identify critical processes, assess technology dependencies, and establish recovery objectives. |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | Section 28 | Duty to manage risks prudently and maintain operational resilience. |
| Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | Section 29 | Equivalent obligations for Islamic financial institutions. |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Section 9 | Security standard obligations relevant to data processing systems identified in BIA. |

### 2.2 Internal Policy Alignment

| Internal Policy / Standard | Document Reference | Alignment Notes |
|---|---|---|
| Technology Risk Management Policy | [Internal Document ID] | Parent policy governing BIA methodology |
| Business Continuity Management Policy | [Internal Document ID] | BIA outputs feed into BCP/DRP |
| Information Security Policy | [Internal Document ID] | Data classification for systems identified |
| IT Change Management Policy | [Internal Document ID] | Change triggers for BIA refresh |

---

## 3. Scope and Applicability

*This section defines precisely what is in scope and out of scope for this BIA cycle. Authors should ensure all business units with technology-enabled critical processes are included and document any justified exclusions.*

### 3.1 Organizational Scope

This BIA applies to all business units, subsidiaries, and functions of **[Organization Name]** that rely on technology systems to deliver regulated financial services, including but not limited to:

- [Business Unit 1 — e.g., Retail Banking Operations]
- [Business Unit 2 — e.g., Treasury and Capital Markets]
- [Business Unit 3 — e.g., Trade Finance and Corporate Banking]
- [Business Unit 4 — e.g., Digital Banking and Channels]
- [Business Unit 5 — e.g., Risk Management and Compliance]
- [Business Unit 6 — e.g., Finance and Reporting]
- [Business Unit 7 — e.g., Information Technology Operations]

### 3.2 Geographic Scope

| Location | Inclusion Status | Rationale |
|---|---|---|
| [Head Office — City, Malaysia] | In Scope | Primary operations and technology hub |
| [Branch Network — Malaysia] | In Scope | Customer-facing technology services |
| [Disaster Recovery Site — Location] | In Scope | Critical recovery infrastructure |
| [Overseas Operations — Country] | [In/Out of Scope] | [Rationale for inclusion or exclusion] |

### 3.3 Technology Scope

This BIA covers:

- **Core banking systems** and transaction processing platforms
- **Customer-facing digital channels** including internet banking, mobile banking, and ATM/CDM networks
- **Payment infrastructure** including inter-bank connectivity (e.g., IBG, DuitNow, RENTAS)
- **Data centres** and cloud-hosted infrastructure (primary and secondary sites)
- **Third-party and outsourced technology services** supporting critical processes
- **Communication and collaboration systems** supporting business operations

### 3.4 Out of Scope

The following are explicitly excluded from this BIA cycle with documented justification:

| Excluded Item | Justification | Owner of Exclusion Decision |
|---|---|---|
| [e.g., Non-critical internal administrative systems] | [e.g., No direct customer or regulatory impact; assessed separately] | [Role/Name] |
| [e.g., Systems under decommission — System Name] | [e.g., Scheduled for retirement by DD/MM/YYYY; covered in transition plan] | [Role/Name] |

---

## 4. Business Impact Analysis Process Flow

*This section documents the step-by-step methodology used to conduct the BIA. Authors should ensure the process is repeatable and defensible under regulatory examination. Each step should reference the tools or templates used.*

### 4.1 BIA Methodology Overview

*Briefly describe the BIA methodology adopted (e.g., ISO 22317, BNM-aligned internal methodology) and how it has been tailored to the organization's context.*

[Organization Name] employs a **[methodology name — e.g., ISO 22317-aligned]** BIA methodology, adapted to meet the specific requirements of BNM RMiT Clause 10.34 and the operational characteristics of a Malaysian licensed financial institution.

### 4.2 Step-by-Step Process

```
Step 1: Initiation and Planning
    └─ Confirm BIA scope, timeline, and stakeholder engagement plan
    └─ Assign BIA Coordinator and departmental BIA Champions

Step 2: Data Collection
    └─ Distribute BIA questionnaires to all in-scope business units
    └─ Conduct interviews and workshops with process owners
    └─ Collect technology dependency data from IT Asset Register

Step 3: Process Identification and Classification
    └─ Enumerate all business processes within scope
    └─ Classify processes by criticality (Critical / Important / Normal)
    └─ Validate classification with business unit heads

Step 4: Impact Assessment
    └─ Assess financial, operational, regulatory, and reputational impacts
    └─ Determine impact at defined time intervals (e.g., 1hr, 4hr, 8hr, 24hr, 48hr, 72hr)
    └─ Establish Maximum Tolerable Downtime (MTD) per process

Step 5: Recovery Objective Setting
    └─ Define Recovery Time Objectives (RTO) per process
    └─ Define Recovery Point Objectives (RPO) per process
    └─ Validate objectives against regulatory and contractual obligations

Step 6: Technology Dependency Mapping
    └─ Map each critical process to its supporting technology systems
    └─ Identify single points of failure and concentration risks
    └─ Assess third-party and outsourced technology dependencies

Step 7: Gap Analysis
    └─ Compare current recovery capabilities against RTO/RPO targets
    └─ Identify gaps in resilience, redundancy, and recovery procedures

Step 8: Reporting and Review
    └─ Compile BIA findings and draft report
    └─ Review with process owners and IT for accuracy
    └─ Present findings to Technology Risk Committee and Board Risk Committee

Step 9: Action Planning
    └─ Document recommendations and risk treatment actions
    └─ Assign owners and timelines for remediation
    └─ Update BCP and DRP based on BIA outputs
```

### 4.3 BIA Cycle and Trigger Events

| Review Type | Frequency | Trigger |
|---|---|---|
| Continuous Monitoring | Ongoing | Material changes to systems, processes, or threat environment |
| Formal Quarterly Review | Every 3 months | Scheduled; review of changes since last formal assessment |
| Annual Comprehensive BIA | Annually | Full re-assessment of all in-scope processes and systems |
| Ad Hoc Review | As required | Major incident, significant technology change, new regulatory requirement, M&A activity |

---

## 5. Critical Business Processes Inventory

*This section catalogues all business processes assessed during this BIA cycle. Authors must ensure every regulated activity and customer-facing service is represented. Criticality ratings should be validated by the respective business unit heads.*

### 5.1 Criticality Classification Criteria

| Criticality Level | Definition | Typical MTD |
|---|---|---|
| **Critical** | Disruption causes immediate regulatory breach, significant financial loss, or inability to serve customers in core regulated services | < 4 hours |
| **Important** | Disruption causes material operational impact, reputational damage, or escalating financial loss but does not immediately trigger regulatory breach | 4 – 24 hours |
| **Normal** | Disruption causes manageable operational inconvenience; manual workarounds available; no immediate regulatory or reputational impact | > 24 hours |

### 5.2 Critical Business Processes Register

*Complete one row per identified business process. Ensure MTD, RTO, and RPO are agreed with the process owner and validated against regulatory obligations.*

| Process ID | Business Process Name | Business Unit | Process Owner | Criticality | MTD | Target RTO | Target RPO | Regulatory Obligation |
|---|---|---|---|---|---|---|---|---|
| BP-001 | [e.g., Payment Processing — IBG/DuitNow] | [e.g., Operations] | [Name/Role] | Critical | [e.g., 2 hours] | [e.g., 1 hour] | [e.g., 15 min] | [e.g., BNM RMiT 10.34, Payment Systems Act] |
| BP-002 | [e.g., Core Banking Transaction Processing] | [e.g., IT Operations] | [Name/Role] | Critical | [e.g., 4 hours] | [e.g., 2 hours] | [e.g., 30 min] | [e.g., BNM RMiT 10.34] |
| BP-003 | [e.g., Internet Banking — Customer Access] | [e.g., Digital Banking] | [Name/Role] | Critical | [e.g., 4 hours] | [e.g., 2 hours] | [e.g., 1 hour] | [e.g., BNM RMiT 10.34] |
| BP-004 | [e.g., ATM/CDM Network Operations] | [e.g., Channel Banking] | [Name/Role] | Critical | [e.g., 2 hours] | [e.g., 1 hour] | [e.g., 15 min] | [e.g., BNM RMiT 10.34] |
| BP-005 | [e.g., Treasury and Dealing Room Operations] | [e.g., Treasury] | [Name/Role] | Critical | [e.g., 4 hours] | [e.g., 2 hours] | [e.g., 30 min] | [e.g., BNM RMiT, RENTAS Rules] |
| BP-006 | [e.g., Regulatory Reporting to BNM] | [e.g., Finance/Compliance] | [Name/Role] | Important | [e.g., 24 hours] | [e.g., 8 hours] | [e.g., 4 hours] | [e.g., BNM Reporting Requirements] |
| BP-007 | [e.g., Credit and Loan Processing] | [e.g., Credit Operations] | [Name/Role] | Important | [e.g., 24 hours] | [e.g., 8 hours] | [e.g., 4 hours] | [e.g., BNM RMiT] |
| BP-008 | [e.g., Trade Finance — Letters of Credit] | [e.g., Corporate Banking] | [Name/Role] | Important | [e.g., 24 hours] | [e.g., 12 hours] | [e.g., 4 hours] | [e.g., UCP 600, BNM RMiT] |
| BP-009 | [e.g., Human Resources — Payroll Processing] | [e.g., HR] | [Name/Role] | Normal | [e.g., 72 hours] | [e.g., 48 hours] | [e.g., 24 hours] | — |
| BP-010 | [Process Name] | [Business Unit] | [Name/Role] | [Level] | [MTD] | [RTO] | [RPO] | [Reference] |

---

## 6. Technology Dependencies Assessment

*This section maps critical business processes to their underlying technology systems and infrastructure. Authors should work with IT Architecture and IT Operations to ensure accuracy of dependency mapping, including upstream and downstream dependencies.*

### 6.1 System Criticality Classification

| System Criticality | Definition |
|---|---|
| **Tier 1** | Directly supports Critical business processes; loss results in immediate process failure |
| **Tier 2** | Supports Important processes or provides enabling capability to Tier 1 systems |
| **Tier 3** | Supports Normal processes; degraded operations tolerable for extended periods |

### 6.2 Technology Dependency Matrix

| System ID | System / Application Name | System Type | Tier | Hosting Model | Supported Process(es) | Vendor / Provider | Single Point of Failure | DR Capability |
|---|---|---|---|---|---|---|---|---|
| SYS-001 | [e.g., Core Banking System — System Name] | Application | Tier 1 | [On-premise / Cloud / Hybrid] | BP-001, BP-002, BP-007 | [Vendor Name] | [Yes / No] | [Yes / No — DR Site/Type] |
| SYS-002 | [e.g., Internet Banking Platform] | Application | Tier 1 | [On-premise / Cloud / Hybrid] | BP-003 | [Vendor Name] | [Yes / No] | [Yes / No] |
| SYS-003 | [e.g., Payment Gateway — IBG/DuitNow Connector] | Infrastructure | Tier 1 | [On-premise] | BP-001, BP-004 | [Vendor / In-house] | [Yes / No] | [Yes / No] |
| SYS-004 | [e.g., Primary Data Centre Infrastructure] | Infrastructure | Tier 1 | [On-premise] | All Critical Processes | [In-house / Colo Provider] | [Yes / No] | [Yes — Secondary DC] |
| SYS-005 | [e.g., RENTAS/BNM Connectivity] | Network | Tier 1 | [Managed Service] | BP-001, BP-005 | [SWIFT / BNM] | [Yes / No] | [Yes / No] |
| SYS-006 | [e.g., ATM Switch] | Application | Tier 1 | [On-premise] | BP-004 | [Vendor Name] | [Yes / No] | [Yes / No] |
| SYS-007 | [e.g., Treasury Management System] | Application | Tier 2 | [On-premise] | BP-005 | [Vendor Name] | [Yes / No] | [Yes / No] |
| SYS-008 | [e.g., Regulatory Reporting Tool] | Application | Tier 2 | [Cloud / SaaS] | BP-006 | [Vendor Name] | [Yes / No] | [Yes / No — Provider SLA] |
| SYS-009 | [e.g., Identity and Access Management (IAM)] | Infrastructure | Tier 1 | [On-premise] | All Processes | [In-house / Vendor] | [Yes / No] | [Yes / No] |
| SYS-010 | [System Name] | [Type] | [Tier] | [Model] | [Process IDs] | [Vendor] | [Yes/No] | [Yes/No] |

### 6.3 Third-Party and Outsourced Technology Dependencies

*Authors must ensure all material outsourced technology services are captured here, aligned with BNM's requirements on outsourcing risk management.*

| Provider Name | Service Description | Contract Reference | Criticality | SLA — Availability | SLA — Recovery | BIA Risk Rating | Concentration Risk Flag |
|---|---|---|---|---|---|---|---|
| [Provider Name] | [e.g., Cloud Infrastructure Services] | [Contract Ref] | Critical | [e.g., 99.95%] | [e.g., RTO 4hr] | [High / Medium / Low] | [Yes / No] |
| [Provider Name] | [e.g., ATM Network Managed Services] | [Contract Ref] | Critical | [e.g., 99.9%] | [e.g., RTO 2hr] | [High / Medium / Low] | [Yes / No] |
| [Provider Name] | [e.g., SWIFT Service Bureau] | [Contract Ref] | Critical | [e.g., 99.99%] | [e.g., RTO 1hr] | [High / Medium / Low] | [Yes / No] |
| [Provider Name] | [Service Description] | [Contract Ref] | [Criticality] | [SLA] | [SLA] | [Rating] | [Yes/No] |

---

## 7. Impact Assessment and Recovery Objectives

*This section documents the detailed impact analysis for each critical process. Authors should quantify impacts wherever possible, using actual transaction volumes, revenue data, and regulatory penalty schedules to substantiate ratings.*

### 7.1 Impact Dimensions

All impacts are assessed across the following dimensions:

| Dimension | Description |
|---|---|
| **Financial** | Direct revenue loss, transaction failure costs, penalty fees, and remediation costs |
| **Operational** | Inability to process transactions, degraded service delivery, manual workaround burden |
| **Regulatory** | Breach of BNM, SC, or other regulatory obligations; mandatory reporting triggers |
| **Reputational** | Customer confidence impact, media exposure, brand damage |
| **Legal / Contractual** | Breach of SLAs, contractual obligations, or legal duties to customers |

### 7.2 Impact Rating Scale

| Rating | Financial Impact | Operational Impact | Regulatory / Reputational Impact |
|---|---|---|---|
| **Critical (4)** | > RM [Amount] loss per hour | Complete cessation of core services | Regulatory breach; mandatory BNM notification |
| **High (3)** | RM [Amount] – RM [Amount] per hour | Major degradation; limited service only | Likely regulatory attention; reputational risk |
| **Medium (2)** | RM [Amount] – RM [Amount] per hour | Partial degradation; workarounds available | Possible customer complaints; internal escalation |
| **Low (1)** | < RM [Amount] per hour | Minor inconvenience; full workarounds available | Minimal external impact |

### 7.3 Impact Assessment by Process

| Process ID | Process Name | Financial Impact (per hour) | Operational Impact Rating | Regulatory Impact Rating | Reputational Impact Rating | Overall Impact | MTD | RTO | RPO |
|---|---|---|---|---|---|---|---|---|---|
| BP-001 | [Payment Processing] | [RM Amount] | Critical (4) | Critical (4) | Critical (4) | **Critical** | [MTD] | [RTO] | [RPO] |
| BP-002 | [Core Banking] | [RM Amount] | Critical (4) | Critical (4) | High (3) | **Critical** | [MTD] | [RTO] | [RPO] |
| BP-003 | [Internet Banking] | [RM Amount] | High (3) | High (3) | Critical (4) | **Critical** | [MTD] | [RTO] | [RPO] |
| BP-004 | [ATM Network] | [RM Amount] | Critical (4) | High (3) | Critical (4) | **Critical** | [MTD] | [RTO] | [RPO] |
| BP-005 | [Treasury] | [RM Amount] | Critical (4) | Critical (4) | High (3) | **Critical** | [MTD] | [RTO] | [RPO] |
| BP-006 | [Regulatory Reporting] | [RM Amount] | Medium (2) | Critical (4) | High (3) | **High** | [MTD] | [RTO] | [RPO] |
| BP-007 | [Credit Processing] | [RM Amount] | Medium (2) | Medium (2) | Medium (2) | **Medium** | [MTD] | [RTO] | [RPO] |

### 7.4 Recovery Capability Gap Analysis

*Document the gap between current recovery capabilities (as measured in the most recent DR test or actual incident) and the target RTO/RPO derived from the impact assessment.*

| Process ID | Target RTO | Current Recovery Capability | Gap (Hours) | Gap Severity | Remediation Required |
|---|---|---|---|---|---|
| BP-001 | [e.g., 1 hour] | [e.g., 3 hours — last DR test] | [+2 hours] | High | [Yes — Action Ref: ACT-001] |
| BP-002 | [e.g., 2 hours] | [e.g., 2.5 hours — last DR test] | [+0.5 hours] | Medium | [Yes — Action Ref: ACT-002] |
| BP-003 | [e.g., 2 hours] | [e.g., 2 hours — last DR test] | [0] | None | No |
| [BP-ID] | [Target] | [Actual] | [Gap] | [Severity] | [Yes/No — Ref] |

---

## 8. Roles and Responsibilities

*This section defines the accountability structure for BIA activities. Authors should confirm named individuals with HR records and ensure alternates are identified for all critical roles.*

### 8.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | Board Risk Committee | CRO | Head of Tech Risk | BIA Coordinator | Business Unit Heads | IT Operations | Compliance | Internal Audit |
|---|---|---|---|---|---|---|---|---|
| Approve BIA methodology and scope | A | C | R | — | C | C | C | I |
| Conduct BIA data collection and workshops | I | A | R | R | C | C | C | I |
| Validate process criticality ratings | I | A | C | R | R | C | C | I |
| Confirm technology dependency data | I | A | C | R | I | R | I | I |
| Conduct impact assessment | I | A | R | R | C | C | C | I |
| Set and validate RTO/RPO targets | A | C | R | R | R | C | C | I |
| Review and sign off BIA report | A | R | R | C | I | I | C | I |
| Present BIA findings to committee | A | R | R | C | I | I | I | I |
| Track and close remediation actions | I | A | R | R | R | R | C | I |
| Conduct quarterly review | I | A | R | R | C | C | I | I |
| Annual BIA refresh | A | R | R | R | R | R | C | I |
| BNM regulatory reporting (if required) | A | R | R | C | I | I | R | I |

### 8.2 Named Responsibilities

| Role | Name | Department | Contact | Alternate |
|---|---|---|---|---|
| Head of Technology Risk (Document Owner) | [Name] | Technology Risk | [Email / Ext] | [Alternate Name] |
| BIA Coordinator | [Name] | Technology Risk | [Email / Ext] | [Alternate Name] |
| Chief Risk Officer | [Name] | Risk Management | [Email / Ext] | [Alternate Name] |
| [Business Unit BIA Champion — Unit 1] | [Name] | [Business Unit] | [Email / Ext] | [Alternate Name] |
| [Business Unit BIA Champion — Unit 2] | [Name] | [Business Unit] | [Email / Ext] | [Alternate Name] |
| [Business Unit BIA Champion — Unit 3] | [Name] | [Business Unit] | [Email / Ext] | [Alternate Name] |
| Head of IT Operations | [Name] | IT Operations | [Email / Ext] | [Alternate Name] |
| Head of Compliance | [Name] | Compliance | [Email / Ext] | [Alternate Name] |

---

## 9. Tools and Systems Used

*This section inventories all tools, platforms, and systems used to conduct, manage, and maintain the BIA. Authors should ensure all tools are licensed, access-controlled, and captured in the IT Asset Register.*

### 9.1 BIA Management Tools

| Tool / System | Purpose | Vendor / Owner | Access Control | Storage Location | Data Classification |
|---|---|---|---|---|---|
| [e.g., BIA Management Platform — Tool Name] | Primary BIA data collection, workflow, and reporting | [Vendor / In-house] | [Role-based; IAM-controlled] | [On-premise / Cloud — Location] | Confidential |
| [e.g., GRC Platform — Tool Name] | Risk register integration; action tracking | [Vendor] | [Role-based; IAM-controlled] | [Location] | Confidential |
| [e.g., Microsoft SharePoint] | Document management; version control | [Microsoft / Internal] | [AD Group controlled] | [SharePoint Site URL] | Confidential |
| [e.g., IT Asset Management System] | Technology dependency data source | [Vendor] | [Read access for BIA Team] | [Location] | Internal |
| [e.g., Project / Action Tracking Tool] | Remediation action tracking | [Vendor / In-house] | [Role-based] | [Location] | Internal |
| [e.g., BIA Questionnaire Tool — e.g., MS Forms] | Data collection from business units | [Microsoft] | [Internal only] | [SharePoint] | Confidential |

### 9.2 Data Sources Referenced

| Data Source | Description | Owner | Refresh Frequency |
|---|---|---|---|
| IT Asset Register | Authoritative inventory of all technology systems and infrastructure | Head of IT Operations | [Frequency] |
| IT Architecture Diagrams | System topology and dependency maps | Enterprise Architecture | [Frequency] |
| Outsourcing Register | Register of all outsourced technology services and providers | Head of Procurement / Compliance | [Frequency] |
| Incident and Problem Management Records | Historical data on past technology failures and recovery times | IT Service Management | Continuous |
| DR Test Reports | Evidence of most recent recovery capability measurements | Head of IT Operations | [Frequency] |
| Financial Transaction Data | Transaction volumes and revenue data for impact quantification | Finance | [Frequency] |
| Regulatory Reporting Obligations Register | Documented regulatory deadlines and notification obligations | Compliance | [Frequency] |

---

## 10. Escalation Procedures

*This section defines the escalation path when BIA findings reveal critical gaps or when a technology disruption requires the BIA to be invoked as part of incident response. Authors must ensure contact details are tested and alternates are current.*

### 10.1 BIA Finding Escalation — Severity Thresholds

| Finding Severity | Criteria | Required Escalation | Timeframe |
|---|---|---|---|
| **Critical** | RTO/RPO gap > 50% of target; unmitigated Tier 1 SPOF; regulatory breach risk identified | Escalate to CRO and CEO; present to Board Risk Committee | Within 5 business days of finding |
| **High** | RTO/RPO gap 25–50% of target; significant concentration risk; third-party SLA insufficient | Escalate to CRO; report to Technology Risk Committee | Within 10 business days of finding |
| **Medium** | RTO/RPO gap < 25%; remediation feasible within BAU; no immediate regulatory risk | Head of Technology Risk to manage; report in next quarterly BIA review | Within the next quarterly review cycle |
| **Low** | Minor gap or improvement opportunity; no material impact on recovery capability | Document in BIA action log; address in annual refresh | In next annual BIA cycle |

### 10.2 Escalation Contact Directory

| Escalation Level | Role | Primary Contact | Phone | Email | Alternate Contact |
|---|---|---|---|---|---|
| Level 1 | Head of Technology Risk | [Name] | [Phone] | [Email] | [Alternate Name] |
| Level 2 | Chief Risk Officer (CRO) | [Name] | [Phone] | [Email] | [Alternate Name] |
| Level 3 | Chief Executive Officer (CEO) | [Name] | [Phone] | [Email] | [Alternate Name] |
| Level 4 | Board Risk Committee Chair | [Name] | [Phone] | [Email] | [Alternate Name] |
| Regulatory | BNM Reporting (if required) | BNM Supervision Department | [BNM Contact] | [BNM Email] | — |

### 10.3 Escalation to Business Continuity Activation

When a live technology incident is assessed to exceed the MTD of any Critical or Important process, the following escalation to BCM activation applies:

1. **Incident Detection** — IT Operations detects or receives notification of technology disruption.
2. **Initial Assessment** — IT Service Desk assesses affected systems and notifies Head of IT Operations within **[time — e.g., 15 minutes]**.
3. **BIA Reference** — Head of IT Operations references current BIA to identify impacted critical processes and applicable MTD thresholds.
4. **BIA Coordinator Notification** — BIA Coordinator notified to assess whether BCP/DRP activation is warranted.
5. **CRO Notification** — If MTD is projected to be breached, CRO is notified immediately.
6. **BCM Activation Decision** — CRO and CEO jointly decide on BCP/DRP activation per the Business Continuity Management Policy ([Internal Document ID]).
7. **Regulatory Notification** — If the incident triggers BNM notification requirements (per RMiT), Compliance initiates regulatory notification within the prescribed timeframe.

### 10.4 Post-Incident BIA Update

Following any technology incident that breaches or approaches the MTD of a Critical process, a **post-incident BIA review** must be completed within **[timeframe — e.g., 20 business days]** of incident closure. Findings must be presented to the Technology Risk Committee.

---

## 11. BIA Findings and Risk Rating Summary

*This section consolidates the key findings of the current BIA cycle. Authors should write narrative findings that are clear and actionable for senior management and the Board. All findings must be traceable to evidence gathered during the BIA process.*

### 11.1 Executive Summary of Findings

*Provide a concise (1–2 paragraph) narrative summary of the overall BIA findings, highlighting the most significant risks and the overall state of the organization's technology resilience.*

[Insert executive narrative summary of BIA findings. This should be written in clear, non-technical language suitable for Board-level consumption. Highlight the number of critical processes assessed, the overall number of gaps identified, and the top risk themes observed during this BIA cycle. Note any significant improvements since the previous BIA cycle.]

### 11.2 Key Findings Register

| Finding ID | Finding Description | Affected Process(es) | Affected System(s) | Severity | Root Cause Category | Date Identified |
|---|---|---|---|---|---|---|
| FIND-001 | [e.g., RTO gap of 2 hours exists for Payment Processing — current recovery time exceeds target by 100%] | BP-001 | SYS-001, SYS-003 | Critical | [e.g., Insufficient DR automation] | [Date] |
| FIND-002 | [e.g., Single point of failure identified in IBG connectivity — no secondary link] | BP-001 | SYS-003 | Critical | [e.g., Network architecture — insufficient redundancy] | [Date] |
| FIND-003 | [e.g., Third-party SLA for Cloud Infrastructure insufficient to meet RTO for Internet Banking] | BP-003 | SYS-002 | High | [e.g., Vendor SLA / contractual gap] | [Date] |
| FIND-004 | [e.g., IT Asset Register incomplete — 15% of Tier 1 systems lack documented recovery procedures] | Multiple | Multiple | High | [e.g., Documentation / process gap] | [Date] |
| FIND-005 | [Finding Description] | [Process IDs] | [System IDs] | [Severity] | [Category] | [Date] |

### 11.3 Overall Risk Heat Map Summary

| Impact / Likelihood | Low Likelihood | Medium Likelihood | High Likelihood |
|---|---|---|---|
| **Critical Impact** | — | FIND-003 | FIND-001, FIND-002 |
| **High Impact** | — | FIND-004 | — |
| **Medium Impact** | [Finding ID] | — | — |
| **Low Impact** | — | — | — |

---

## 12. Recommendations and Action Plan

*This section translates BIA findings into concrete, time-bound remediation actions. Authors must assign a named owner for every action and ensure due dates are realistic. Actions must be tracked through the GRC platform.*

### 12.1 Recommended Actions

| Action ID | Related Finding | Recommendation | Priority | Responsible Owner | Target Completion | Status | GRC Ref |
|---|---|---|---|---|---|---|---|
| ACT-001 | FIND-001 | [e.g., Implement automated failover for Core Banking System to reduce RTO from 3 hours to 1 hour. Engage vendor for DR automation upgrade.] | Critical | [Head of IT Operations] | [Date] | [Not Started / In Progress / Completed] | [GRC Ticket Ref] |
| ACT-002 | FIND-002 | [e.g., Procure and deploy secondary IBG connectivity link to eliminate SPOF on payment network.] | Critical | [Head of IT Infrastructure] | [Date] | [Not Started / In Progress / Completed] | [GRC Ticket Ref] |
| ACT-003 | FIND-003 | [e.g., Renegotiate Cloud Infrastructure SLA to include contractual RTO commitment of 2 hours for production failover. Escalate to Procurement and Legal.] | High | [Head of Technology Risk / Procurement] | [Date] | [Not Started / In Progress / Completed] | [GRC Ticket Ref] |
| ACT-004 | FIND-004 | [e.g., Complete IT Asset Register gap fill exercise for all Tier 1 systems. Document recovery procedures for all identified systems.] | High | [BIA Coordinator] | [Date] | [Not Started / In Progress / Completed] | [GRC Ticket Ref] |
| ACT-005 | [Finding Ref] | [Recommendation] | [Priority] | [Owner] | [Date] | [Status] | [Ref] |

### 12.2 Actions Carried Forward from Previous BIA Cycle

| Action ID (Previous) | Original Finding | Recommendation | Original Due Date | Revised Due Date | Responsible Owner | Reason for Carry-Forward |
|---|---|---|---|---|---|---|
| [ACT-XXX] | [Previous Finding Ref] | [Recommendation] | [Original Date] | [Revised Date] | [Owner] | [Reason — e.g., budget approval pending, vendor lead time] |

---

## 13. Review and Approval

*This section documents the version history and formal approval of this document. All versions must be retained in the document management system. Approval signatures must be obtained prior to the document being considered effective.*

### 13.1 Version History

| Version | Date | Author | Reviewed By | Description of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Name, Role] | [Name, Role] | Initial draft for internal review |
| 0.2 | [Date] | [Name, Role] | [Name, Role] | Incorporated feedback from Business Unit BIA Champions |
| 0.3 | [Date] | [Name, Role] | [Name, Role] | Incorporated IT Operations review — technology dependency updates |
| 1.0 | [Date] | [Name, Role] | [Name, Role] | Final approved version for issuance |

### 13.2 Quarterly Review Log

| Review Period | Review Date | Reviewed By | Changes Made | Next Review Due |
|---|---|---|---|---|
| Q[X] [Year] | [Date] | [Name, Role] | [e.g., No material changes / Updated BP-003 RTO following DR test] | [Date] |
| Q[X] [Year] | [Date] | [Name, Role] | [Summary of changes] | [Date] |
| Q[X] [Year] | [Date] | [Name, Role] | [Summary of changes] | [Date] |
| Q[X] [Year] | [Date] | [Name, Role] | [Summary of changes] | [Date] |

### 13.3 Approval Sign-Off

*This document requires the following approvals before it is considered effective. Electronic or physical signatures are acceptable. Approved documents must be stored in the designated document management repository.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk (Document Owner) | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| Head of IT Operations | [Name] | | [Date] |
| Head of Compliance | [Name] | | [Date] |
| Chair, Technology Risk Committee | [Name] | | [Date] |

> **Distribution List:** Board Risk Committee, Technology Risk Committee, CRO, CEO, Head of IT Operations, Head of Compliance, Internal Audit, [Other relevant stakeholders]

---

## 14. References

*This section lists all regulatory instruments, standards, and internal documents referenced in or relevant to this BIA Report. Authors should verify that all references reflect the current issued version of each document.*

### 14.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clause(s) | Version / Date |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | **Clause 10.34** | [Version / Effective Date] |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 10.1 — 10.33 (Technology Risk Management Framework) | [Version / Effective Date] |
| BNM BCM | Business Continuity Management | Bank Negara Malaysia | [Relevant Clauses] | [Version / Effective Date] |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Section 28 | 2013 |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | Section 29 | 2013 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 | 2010 (as amended) |
| BNM — Outsourcing | Guidelines on Outsourcing | Bank Negara Malaysia | [Relevant Clauses] | [Version / Effective Date] |

### 14.2 Standards References

| Reference | Title | Body | Relevance |
|---|---|---|---|
| ISO 22301:2019 | Business Continuity Management Systems | ISO | BIA methodology alignment |
| ISO 22317:2021 | Business Impact Analysis | ISO | Primary BIA methodology reference |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO/IEC | Information asset classification |
| NIST SP 800-34 | Contingency Planning Guide for Federal Information Systems | NIST | Recovery planning reference |

### 14.3 Internal Document References

| Document Title | Document ID | Owner | Relationship to this BIA |
|---|---|---|---|
| Technology Risk Management Policy | [Doc ID] | Head of Technology Risk | Parent policy |
| Business Continuity Management Policy | [Doc ID] | Head of BCM | BIA feeds into BCP |
| Disaster Recovery Plan | [Doc ID] | Head of IT Operations | BIA outputs drive DR requirements |
| IT Asset Register | [Doc ID] | Head of IT Operations | Primary data source for technology dependencies |
| Outsourcing Risk Register | [Doc ID] | Head of Procurement / Compliance | Third-party dependency data source |
| Most Recent DR Test Report | [Doc ID] | Head of IT Operations | Current recovery capability evidence |

---

## 15. Appendices

*Appendices provide supporting evidence and detailed working data for the BIA. All appendices must be stored and version-controlled alongside the main report. Authors should cross-reference appendices within the relevant sections of the main document.*

### Appendix A — BIA Data Collection Questionnaire

*Attach or reference the standardized BIA questionnaire template distributed to Business Unit BIA Champions. This ensures auditability of the data collection process.*

| Field | Details |
|---|---|
| **Document Reference** | [Appendix A — BIA Questionnaire Template v[X.X]] |
| **Storage Location** | [Document Management System Path / SharePoint URL] |
| **Completed Questionnaires** | [Location of completed questionnaires by Business Unit] |

> See attached: **[Appendix A — BIA Questionnaire Template.xlsx]**

---

### Appendix B — Technology Dependency Maps

*Include system topology diagrams and dependency maps showing the relationship between critical business processes and their supporting technology systems. These should be maintained by the Enterprise Architecture team.*

| Diagram Reference | Description | Version | Owner |
|---|---|---|---|
| [ARCH-001] | [e.g., Core Banking System — Dependency Map] | [Version] | [Enterprise Architect] |
| [ARCH-002] | [e.g., Payment Infrastructure — Network Topology] | [Version] | [Head of IT Infrastructure] |
| [ARCH-003] | [e.g., Internet Banking Platform — Architecture Diagram] | [Version] | [Head of IT Architecture] |
| [ARCH-004] | [e.g., Primary and DR Data Centre — Infrastructure Overview] | [Version] | [Head of IT Operations] |

> See attached: **[Appendix B — Architecture and Dependency Diagrams]**

---

### Appendix C — Most Recent DR Test Results Summary

*Attach the summary results of the most recent Disaster Recovery test exercise, as evidence of current recovery capability used in the gap analysis in Section 7.4.*

| Field | Details |
|---|---|
| **DR Test Reference** | [DR Test Report Ref] |
| **Test Date** | [Date] |
| **Test Scope** | [Systems and processes tested] |
| **Overall Result** | [Pass / Partial Pass / Fail] |
| **Key Findings** | [Summary of key findings from DR test] |
| **Report Location** | [Document Management System Path] |

> See attached: **[Appendix C — DR Test Report [Date].pdf]**

---

### Appendix D — Previous BIA Cycle Comparison

*Provide a comparison table showing changes in criticality ratings, RTO/RPO targets, and gap findings between this BIA cycle and the previous annual BIA. This evidences continuous improvement and demonstrates responsiveness to prior findings.*

| Process ID | Previous Criticality | Current Criticality | Previous RTO | Current RTO | Change Rationale |
|---|---|---|---|---|---|
| BP-001 | [Previous] | [Current] | [Previous RTO] | [Current RTO] | [Rationale — e.g., No change / Updated based on regulatory change / Updated post-incident] |
| BP-002 | [Previous] | [Current] | [Previous RTO] | [Current RTO] | [Rationale] |

---

### Appendix E — Glossary of Terms

| Term | Definition |
|---|---|
| **BIA** | Business Impact Analysis — a process to identify and evaluate the effects of an interruption to critical business operations. |
| **BCP** | Business Continuity Plan — a documented collection of procedures and information developed to ensure continuity of critical processes during and after a disruption. |
| **DRP** | Disaster Recovery Plan — a documented plan for restoring IT systems and data after a technology disaster. |
| **MTD** | Maximum Tolerable Downtime — the maximum period a business process can be unavailable before the impact becomes unacceptable. |
| **RTO** | Recovery Time Objective — the target time within which a business process must be restored after a disruption. |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time. |
| **RMiT** | Risk Management in Technology — BNM's policy document setting requirements for technology risk management at financial institutions. |
| **SPOF** | Single Point of Failure — a component whose failure would cause the entire system or process to fail. |
| **Tier 1 System** | A technology system that directly supports Critical business processes; loss results in immediate process failure. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework. |
| **GRC** | Governance, Risk, and Compliance — the integrated collection of capabilities that enable an organization to reliably achieve objectives, address uncertainty, and act with integrity. |

---

*End of Document*

---

**Document Control Notice:** This document is subject to version control. The master copy is maintained in [Document Management System / SharePoint location]. Printed copies are uncontrolled. Before using this document, verify you have the current version by checking the document management system.

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk, [Organization Name] |
| **Regulatory Reference** | BNM RMiT Clause 10.34 |