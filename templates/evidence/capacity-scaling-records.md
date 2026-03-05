# Capacity Scaling Records

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

**Organisation:** [Organisation Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset / Item Identification](#2-asset--item-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian](#4-owner-and-custodian)
5. [Status and Lifecycle Stage](#5-status-and-lifecycle-stage)
6. [Last Review Date](#6-last-review-date)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the **Capacity Scaling Records** register for [Organisation Name], capturing all capacity scaling actions taken in response to threshold alerts across technology infrastructure and systems. These records provide an auditable trail of operational responses to capacity events and demonstrate adherence to the Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.16, which governs capacity and performance management obligations for financial institutions.

### 1.2 Scope

*This section defines the boundaries of this record. Specify the systems, infrastructure layers, and organisational units covered by capacity scaling activities.*

This record applies to:

- All production and business-critical technology infrastructure operated or managed by [Organisation Name]
- Cloud, on-premises, and hybrid environments subject to capacity monitoring
- Any system generating threshold-based alerts that trigger a scaling response
- The following organisational units: [List Applicable Business Units / IT Domains]

### 1.3 Exclusions

*List any systems, environments, or infrastructure explicitly excluded from the scope of this record.*

- [Exclusion 1 — e.g., development and test environments unless shared resources]
- [Exclusion 2 — e.g., third-party managed services where scaling is contractually delegated]

---

## 2. Asset / Item Identification

*Record the specific asset, system, or infrastructure component for which a capacity scaling action was taken. Each row in the table below represents a discrete scaling event tied to an identified asset. Use the asset identifier from the organisation's CMDB or asset register where available.*

### 2.1 Capacity Scaling Event Register

| Event ID | Event Date & Time | Asset / System Name | Asset ID (CMDB Ref) | Infrastructure Layer | Environment | Alert Reference | Brief Description of Trigger |
|---|---|---|---|---|---|---|---|
| [CSR-YYYY-001] | [DD/MM/YYYY HH:MM] | [System / Service Name] | [Asset ID] | [e.g., Compute / Storage / Network / Database] | [Production / DR / Shared] | [Alert ID / Monitoring Ref] | [Brief description of the threshold breach or alert condition] |
| [CSR-YYYY-002] | [DD/MM/YYYY HH:MM] | [System / Service Name] | [Asset ID] | [e.g., Compute / Storage / Network / Database] | [Production / DR / Shared] | [Alert ID / Monitoring Ref] | [Brief description of the threshold breach or alert condition] |
| [CSR-YYYY-003] | [DD/MM/YYYY HH:MM] | [System / Service Name] | [Asset ID] | [e.g., Compute / Storage / Network / Database] | [Production / DR / Shared] | [Alert ID / Monitoring Ref] | [Brief description of the threshold breach or alert condition] |

### 2.2 Scaling Action Detail

*For each event identified above, capture the specific scaling action performed, the personnel involved, and the outcome. Reference the Event ID from Section 2.1.*

| Event ID | Scaling Action Type | Action Taken | Initiated By | Authorised By | Start Time | End Time | Outcome |
|---|---|---|---|---|---|---|---|
| [CSR-YYYY-001] | [e.g., Vertical Scale-Up / Horizontal Scale-Out / Storage Expansion / Auto-Scale Trigger] | [Description of the specific action — e.g., increased CPU allocation from 4 to 8 vCPUs] | [Name / Team] | [Name / Role] | [HH:MM] | [HH:MM] | [Successful / Partial / Failed] |
| [CSR-YYYY-002] | [e.g., Vertical Scale-Up / Horizontal Scale-Out / Storage Expansion / Auto-Scale Trigger] | [Description of the specific action] | [Name / Team] | [Name / Role] | [HH:MM] | [HH:MM] | [Successful / Partial / Failed] |
| [CSR-YYYY-003] | [e.g., Vertical Scale-Up / Horizontal Scale-Out / Storage Expansion / Auto-Scale Trigger] | [Description of the specific action] | [Name / Team] | [Name / Role] | [HH:MM] | [HH:MM] | [Successful / Partial / Failed] |

---

## 3. Classification and Categorisation

*Classify and categorise each asset involved in a scaling event according to the organisation's asset classification framework and criticality tier. This section supports risk prioritisation and ensures appropriate governance oversight is applied to scaling actions affecting critical systems.*

### 3.1 Asset Classification Matrix

| Asset ID | Asset / System Name | Information Classification | System Criticality Tier | Business Function Supported | Regulatory / Compliance Relevance | Data Sensitivity |
|---|---|---|---|---|---|---|
| [Asset ID] | [System / Service Name] | [Confidential / Restricted / Internal / Public] | [Tier 1 – Mission Critical / Tier 2 – Business Critical / Tier 3 – Support] | [e.g., Core Banking / Payments / Internet Banking / Internal Operations] | [e.g., BNM RMiT / PDPA / PCI-DSS / None] | [e.g., Personal Data / Financial Data / Operational Data / None] |
| [Asset ID] | [System / Service Name] | [Confidential / Restricted / Internal / Public] | [Tier 1 / Tier 2 / Tier 3] | [Business Function] | [Regulatory Relevance] | [Data Sensitivity] |

### 3.2 Capacity Category

*Categorise the type of capacity resource involved in the scaling event to support trend analysis and capacity planning.*

| Event ID | Capacity Category | Resource Type | Threshold Metric | Alert Threshold Value | Observed Value at Alert |
|---|---|---|---|---|---|
| [CSR-YYYY-001] | [Compute / Memory / Storage / Network Bandwidth / Database / Application] | [e.g., CPU Utilisation / RAM / Disk IOPS / Network Throughput / DB Connections] | [e.g., CPU > 80% for 5 min] | [e.g., 80%] | [e.g., 92%] |
| [CSR-YYYY-002] | [Compute / Memory / Storage / Network Bandwidth / Database / Application] | [Resource Type] | [Threshold Metric] | [Threshold Value] | [Observed Value] |

---

## 4. Owner and Custodian

*Record the accountable asset owner and the operational custodian responsible for managing the asset at the time of the scaling event. Ownership and custodianship details must align with the organisation's IT asset register and support clear accountability during audit reviews.*

### 4.1 Asset Ownership Register

| Asset ID | Asset / System Name | Asset Owner (Role) | Asset Owner (Name) | IT Custodian (Role) | IT Custodian (Name) | Business Sponsor | Vendor / Managed Service Provider |
|---|---|---|---|---|---|---|---|
| [Asset ID] | [System / Service Name] | [e.g., Head of IT Operations] | [Name] | [e.g., Infrastructure Engineer / Platform Team] | [Name] | [e.g., Chief Technology Officer / Business Unit Head] | [Vendor Name or Internal] |
| [Asset ID] | [System / Service Name] | [Role] | [Name] | [Role] | [Name] | [Sponsor] | [Vendor / Internal] |

### 4.2 Escalation and Notification Log

*Record escalation and notification actions taken during the capacity scaling event, including stakeholders informed and the time of notification.*

| Event ID | Escalation Level | Notified Party (Role) | Notified Party (Name) | Notification Method | Notification Time | Acknowledgement Time | Notes |
|---|---|---|---|---|---|---|---|
| [CSR-YYYY-001] | [L1 / L2 / L3 / Management] | [Role] | [Name] | [e.g., Email / Pager / Ticket / Phone] | [HH:MM] | [HH:MM] | [Any relevant notes] |
| [CSR-YYYY-002] | [L1 / L2 / L3 / Management] | [Role] | [Name] | [Notification Method] | [HH:MM] | [HH:MM] | [Notes] |

---

## 5. Status and Lifecycle Stage

*Document the current status of each scaling event and the post-event lifecycle stage of the affected asset. This section supports capacity trend analysis and informs forward capacity planning as required under BNM RMiT Clause 10.16.*

### 5.1 Event Status Tracking

| Event ID | Event Status | Resolution Status | Incident Ticket Ref | Change Request Ref | Post-Incident Review Required | Post-Incident Review Completed | Review Date |
|---|---|---|---|---|---|---|---|
| [CSR-YYYY-001] | [Open / In Progress / Resolved / Closed] | [Temporary Mitigation / Permanent Fix / Monitoring] | [INC-XXXXX] | [CHG-XXXXX] | [Yes / No] | [Yes / No / N/A] | [DD/MM/YYYY] |
| [CSR-YYYY-002] | [Open / In Progress / Resolved / Closed] | [Resolution Status] | [INC-XXXXX] | [CHG-XXXXX] | [Yes / No] | [Yes / No / N/A] | [DD/MM/YYYY] |

### 5.2 Asset Lifecycle Stage

*Capture the lifecycle stage of each affected asset to contextualise capacity events within the broader asset management framework.*

| Asset ID | Asset / System Name | Current Lifecycle Stage | Planned Upgrade / Replacement | Estimated EOL Date | Capacity Headroom Post-Scaling | Next Scheduled Capacity Review |
|---|---|---|---|---|---|---|
| [Asset ID] | [System / Service Name] | [Active / Under Review / Planned Decommission / End of Life] | [Yes / No — brief description if Yes] | [DD/MM/YYYY or N/A] | [e.g., 35% headroom on CPU] | [DD/MM/YYYY] |
| [Asset ID] | [System / Service Name] | [Lifecycle Stage] | [Upgrade/Replacement Plan] | [EOL Date] | [Headroom %] | [Next Review Date] |

### 5.3 Recurring Event Analysis

*Note any assets that have experienced repeated capacity scaling events within a review period. Patterns of recurrence must be escalated for capacity planning review.*

| Asset ID | Asset / System Name | No. of Scaling Events (Period) | Review Period | Pattern Identified | Escalated for Capacity Planning | Escalation Date | Escalated To |
|---|---|---|---|---|---|---|---|
| [Asset ID] | [System / Service Name] | [Number] | [e.g., Q1 2025] | [Yes / No — brief description] | [Yes / No] | [DD/MM/YYYY] | [Role / Name] |

---

## 6. Last Review Date

*Record the date on which each capacity scaling record, asset classification, and associated documentation was last reviewed. For system-generated records, the review date corresponds to the last manual validation or quarterly review performed by the asset owner or IT custodian.*

### 6.1 Record Review Log

| Record / Asset Reference | Record Type | Last Reviewed By (Role) | Last Reviewed By (Name) | Last Review Date | Review Outcome | Next Scheduled Review | Notes |
|---|---|---|---|---|---|---|---|
| [CSR-YYYY-001] | Capacity Scaling Event Record | [Role] | [Name] | [DD/MM/YYYY] | [No Issues / Issues Identified — see notes] | [DD/MM/YYYY] | [Any observations or actions arising from review] |
| [Asset ID] | Asset Classification Record | [Role] | [Name] | [DD/MM/YYYY] | [No Issues / Issues Identified] | [DD/MM/YYYY] | [Notes] |
| Ownership Register | Asset Ownership Register | [Role] | [Name] | [DD/MM/YYYY] | [No Issues / Issues Identified] | [DD/MM/YYYY] | [Notes] |

### 6.2 Quarterly Consolidated Review Summary

*Complete this section during the quarterly review cycle. Summarise the aggregate review findings across all capacity scaling records for the quarter.*

**Review Quarter:** [Q1 / Q2 / Q3 / Q4] [YYYY]
**Review Conducted By:** [Name, Role]
**Review Date:** [DD/MM/YYYY]

- **Total scaling events recorded this quarter:** [Number]
- **Events resolved within SLA:** [Number] ([Percentage]%)
- **Events escalated for capacity planning:** [Number]
- **Assets flagged for lifecycle review:** [Number]
- **Outstanding post-incident reviews:** [Number]
- **Key findings:** [Summary of key observations, trends, or concerns identified during the quarterly review]
- **Recommended actions:** [List recommended actions arising from the quarterly review, with responsible parties and target dates]

---

## 7. Roles and Responsibilities

*This section defines the roles and responsibilities associated with the creation, maintenance, and review of Capacity Scaling Records in accordance with BNM RMiT Clause 10.16.*

### 7.1 RACI Matrix

| Activity | Head of IT Operations | Infrastructure / Platform Team | IT Security Team | Business Unit Owner | IT Risk & Compliance | Senior Management / EXCO |
|---|---|---|---|---|---|---|
| Define capacity thresholds and alert parameters | A | R | C | C | C | I |
| Monitor capacity metrics and respond to alerts | A | R | I | I | I | I |
| Execute and document scaling actions | A | R | I | I | I | I |
| Raise and manage associated incident / change tickets | A | R | I | I | I | I |
| Escalate recurring capacity events for planning review | A | R | C | C | C | I |
| Maintain and update Capacity Scaling Records | A | R | I | I | C | I |
| Conduct post-incident review for significant events | A | R | C | C | C | I |
| Perform quarterly consolidated review of records | A | R | C | I | C | I |
| Approve quarterly review findings and recommendations | A | I | I | I | C | R |
| Submit evidence to internal / external audit | A | C | C | I | R | I |
| Update capacity planning and forecasting based on trends | A | R | C | C | C | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 7.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Head of IT Operations | [Name] | [Department] | [Email / Extension] |
| IT Infrastructure Lead | [Name] | [Department] | [Email / Extension] |
| IT Risk & Compliance Manager | [Name] | [Department] | [Email / Extension] |
| IT Security Manager | [Name] | [Department] | [Email / Extension] |
| Document Owner | [Name] | [Department] | [Email / Extension] |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Role | Changes / Remarks |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | [Role] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Role] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Role] | [Description of changes] |

### 8.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name] | __________________ | [DD/MM/YYYY] |
| Reviewed By | [Name] | __________________ | [DD/MM/YYYY] |
| Head of IT Operations | [Name] | __________________ | [DD/MM/YYYY] |
| IT Risk & Compliance Manager | [Name] | __________________ | [DD/MM/YYYY] |
| Approved By | [Name] | __________________ | [DD/MM/YYYY] |

---

## 9. References

The following regulatory documents, policies, and standards provide the authoritative basis for this Capacity Scaling Records template:

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.16 | Capacity management requirements — financial institutions must establish processes to monitor capacity, respond to threshold breaches, and maintain records of scaling actions taken |
| BNM RMiT | Part G (Technology Operations) | Broader operational resilience and technology service management obligations |
| [Organisation Name] IT Risk Management Policy | [Policy Ref] | Internal policy governing IT risk identification, assessment, and treatment |
| [Organisation Name] IT Asset Management Policy | [Policy Ref] | Internal policy governing asset classification, ownership, and lifecycle management |
| [Organisation Name] Incident Management Procedure | [Procedure Ref] | Internal procedure for logging, escalating, and resolving technology incidents |
| [Organisation Name] Change Management Procedure | [Procedure Ref] | Internal procedure governing authorised changes to production infrastructure |
| NIST SP 800-137 | Information Security Continuous Monitoring | Supporting reference for threshold-based monitoring and alerting |
| ISO/IEC 27001:2022 | Annex A — Technological Controls | Capacity management as a component of operational security controls |

---

## 10. Appendices

### Appendix A — Capacity Threshold Reference Table

*Populate this appendix with the approved capacity threshold values for each monitored system or infrastructure layer. Threshold values must be reviewed and reaffirmed at least annually or following significant infrastructure change.*

| System / Component | Metric | Warning Threshold | Critical Threshold | Auto-Scale Trigger | Alert Owner | Last Reviewed |
|---|---|---|---|---|---|---|
| [System Name] | CPU Utilisation | [e.g., 70%] | [e.g., 85%] | [Yes / No — e.g., 80%] | [Role / Team] | [DD/MM/YYYY] |
| [System Name] | Memory Utilisation | [e.g., 75%] | [e.g., 90%] | [Yes / No] | [Role / Team] | [DD/MM/YYYY] |
| [System Name] | Disk Utilisation | [e.g., 75%] | [e.g., 90%] | [Yes / No] | [Role / Team] | [DD/MM/YYYY] |
| [System Name] | Network Throughput | [e.g., 70%] | [e.g., 85%] | [Yes / No] | [Role / Team] | [DD/MM/YYYY] |
| [System Name] | Database Connections | [e.g., 80%] | [e.g., 95%] | [Yes / No] | [Role / Team] | [DD/MM/YYYY] |

### Appendix B — Scaling Action Taxonomy

*This appendix defines the standard taxonomy for classifying scaling actions used throughout this document. Consistent categorisation supports trend reporting and regulatory evidence submission.*

| Scaling Action Type | Definition | Typical Use Case |
|---|---|---|
| Vertical Scale-Up | Increasing the compute, memory, or storage resources of an existing instance or node | Single-system bottleneck; not horizontally scalable |
| Horizontal Scale-Out | Adding additional instances, nodes, or replicas to distribute load | Stateless workloads; load-balanced services |
| Storage Expansion | Increasing allocated disk or object storage capacity | Log volume growth; data retention requirements |
| Network Bandwidth Upgrade | Increasing network throughput capacity or provisioning additional links | High-traffic events; bandwidth saturation |
| Database Scaling | Increasing database resources, read replicas, or connection pool sizes | Query load spikes; connection exhaustion |
| Auto-Scale Trigger | Automated scaling action executed by a pre-configured auto-scaling policy | Cloud workloads; containerised services |
| Manual Override | Human-initiated scaling action outside of automated policy | Unusual events; policy exceptions |

### Appendix C — System-Generated Record Integration Note

*This document template is designed to complement system-generated capacity event logs produced by monitoring platforms (e.g., [Monitoring Tool Name]). Where records are automatically generated by monitoring systems, this template serves as the governance overlay to capture classification, ownership, review, and accountability information not typically included in system logs. System-generated log exports should be attached to this record as supporting evidence where applicable.*

**Monitoring Platform:** [e.g., Prometheus / Datadog / Azure Monitor / Nagios / Custom — specify]
**Log Retention Period:** [Retention period per organisation policy, e.g., 3 years]
**Log Export Location / Repository:** [e.g., SharePoint path / ITSM tool / Document Management System]
**Integration with ITSM:** [Yes / No — if Yes, specify ITSM platform and integration method]

### Appendix D — Glossary

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia — the central bank of Malaysia |
| RMiT | Risk Management in Technology — BNM Policy Document governing technology risk management for financial institutions |
| CMDB | Configuration Management Database — authoritative repository of IT asset and configuration records |
| Capacity Scaling | The act of adjusting technology resource allocation in response to demand changes or threshold breaches |
| Threshold Alert | An automated notification triggered when a monitored metric exceeds a defined warning or critical boundary |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework |
| ITSM | IT Service Management — the practices and tools used to manage IT services |
| EOL | End of Life — the point at which a vendor ceases support for a product or system |
| SLA | Service Level Agreement — a committed performance standard between a service provider and consumer |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organisation Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. For queries regarding this document, contact the Head of IT Operations at [Contact Email].*