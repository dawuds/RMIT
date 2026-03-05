# Service Level Agreements

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Vendor Management |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable law and internal policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Asset and Service Identification](#3-asset-and-service-identification)
4. [Classification and Categorisation](#4-classification-and-categorisation)
5. [Owner and Custodian Assignments](#5-owner-and-custodian-assignments)
6. [SLA Terms and Performance Metrics](#6-sla-terms-and-performance-metrics)
7. [Status and Lifecycle Stage](#7-status-and-lifecycle-stage)
8. [Monitoring, Reporting, and Escalation](#8-monitoring-reporting-and-escalation)
9. [Breach Management and Remediation](#9-breach-management-and-remediation)
10. [Last Review Date and Review Cadence](#10-last-review-date-and-review-cadence)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document, the business problem it addresses, and why it is required from a regulatory standpoint.*

This document establishes and maintains the formal Service Level Agreements (SLAs) governing all critical technology services deployed by [Organization Name]. It defines the performance standards, availability targets, response and resolution timeframes, and accountability structures applicable to internal technology services and externally procured vendor-managed services.

This document is a mandatory governance artifact under Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically to satisfy obligations under **Clause 10.29**, which requires financial institutions to define, document, and monitor SLAs for technology services supporting critical business functions.

### 1.2 Scope

*Define the boundaries of this SLA document — which systems, vendors, departments, and geographic locations are covered.*

This document applies to:

- All **critical technology services** as defined in [Organization Name]'s Technology Asset Inventory, including but not limited to core banking platforms, payment processing systems, cybersecurity services, and customer-facing digital channels.
- All **internal technology service providers** (IT Department, Operations, Information Security) delivering services to business units.
- All **external vendors and third-party service providers** contracted to deliver or support technology services to [Organization Name].
- All **employees, contractors, and third parties** responsible for the delivery, oversight, and consumption of technology services within the scope of this document.

**Out of Scope:**

- Non-critical technology services (as defined in the Technology Criticality Classification Framework).
- Personal productivity tools not integrated into critical business workflows.
- Shadow IT systems not officially registered in the Technology Asset Inventory.

### 1.3 Objectives

*List the measurable objectives this document is designed to achieve.*

- Establish clear, measurable, and enforceable service performance standards for all critical technology services.
- Assign unambiguous ownership and accountability for SLA compliance at the asset and service level.
- Enable continuous monitoring and quarterly structured review of service delivery performance against agreed benchmarks.
- Provide an auditable record of SLA commitments for BNM supervisory review and internal audit purposes.
- Define escalation and remediation pathways for SLA breaches to minimise business impact.

---

## 2. Regulatory Context

### 2.1 Applicable Regulatory Framework

*Reference all applicable BNM policy documents, circulars, and guidance notes that mandate or inform this document.*

This document is prepared in accordance with the following regulatory requirements:

| Reference | Document Title | Clause(s) | Requirement Summary |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | 10.29 | Financial institutions must document SLAs for all critical technology services, including availability, performance, and support response targets. |
| BNM RMiT | Risk Management in Technology | 10.26 – 10.28 | Requirements for vendor due diligence and technology outsourcing risk management. |
| BNM RMiT | Risk Management in Technology | 11.1 – 11.5 | Technology service continuity and recovery time obligations. |
| PDPA 2010 | Personal Data Protection Act | Section 9 | Security standards for systems processing personal data. |
| [Other Reference] | [Title] | [Clause] | [Summary] |

### 2.2 Internal Policy Alignment

*List internal policies this document is subordinate to or aligned with.*

- [Organization Name] Technology Risk Management Policy
- [Organization Name] Vendor and Third-Party Risk Management Policy
- [Organization Name] Business Continuity Management Policy
- [Organization Name] Information Security Policy
- [Organization Name] Technology Asset Management Policy

---

## 3. Asset and Service Identification

*This section provides a definitive register of all critical technology services for which SLAs have been established. Each service must be uniquely identified and linked to its governing SLA terms. Update this register whenever a new critical service is onboarded, decommissioned, or reclassified.*

### 3.1 Service Register

*List every critical technology service within scope. Use the table below. Assign a unique Service ID using the naming convention SLA-[Department Code]-[Sequence Number] (e.g., SLA-IT-001).*

| Service ID | Service Name | Service Description | Service Type | Delivery Model | Vendor / Internal Owner | Date Registered |
|---|---|---|---|---|---|---|
| SLA-IT-001 | [Core Banking System] | [Primary transaction processing and account management platform] | Core System | Vendor-Managed | [Vendor Name] | [Date] |
| SLA-IT-002 | [Internet Banking Portal] | [Customer-facing digital banking channel] | Customer Channel | Hybrid | [Vendor Name / IT Dept] | [Date] |
| SLA-IT-003 | [Payment Gateway] | [Interbank and real-time payment processing] | Payment System | Vendor-Managed | [Vendor Name] | [Date] |
| SLA-IT-004 | [SIEM / SOC Services] | [Security monitoring and threat detection] | Security Service | Vendor-Managed | [Vendor Name] | [Date] |
| SLA-IT-005 | [Data Centre Hosting] | [Primary data centre co-location and managed services] | Infrastructure | Vendor-Managed | [Vendor Name] | [Date] |
| SLA-IT-006 | [Wide Area Network (WAN)] | [Branch and head office connectivity] | Network | Vendor-Managed | [Vendor Name] | [Date] |
| SLA-IT-007 | [IT Service Desk] | [Internal end-user support services] | Support | Internal | IT Department | [Date] |
| [SLA-IT-XXX] | [Service Name] | [Description] | [Type] | [Model] | [Owner] | [Date] |

### 3.2 Service Identification Criteria

*Describe the criteria used to determine whether a technology service qualifies as "critical" and therefore requires a documented SLA.*

A technology service is deemed **critical** and included in this register if it meets one or more of the following criteria:

- Supports a **critical business function** as defined in [Organization Name]'s Business Impact Analysis (BIA).
- Processes, transmits, or stores **material financial transactions** or **sensitive personal data**.
- Is required to maintain **regulatory compliance** (e.g., payment system availability, AML screening).
- Has a **Recovery Time Objective (RTO)** of 24 hours or less as defined in the Business Continuity Plan.
- Is identified as a **critical outsourced service** under BNM RMiT Clause 10.26.

---

## 4. Classification and Categorisation

*This section defines how critical technology services are classified by tier, type, and risk profile. Classification drives the stringency of SLA commitments, monitoring intensity, and escalation thresholds. Review classifications at minimum annually or following material changes to the service.*

### 4.1 Service Criticality Tiers

*Define the criticality tiers applicable to technology services at [Organization Name]. Each tier should correspond to specific SLA parameter ranges.*

| Tier | Classification | Description | Typical Availability Target | Example Services |
|---|---|---|---|---|
| Tier 1 | **Mission-Critical** | Services where unavailability causes immediate, material financial loss, regulatory breach, or systemic risk. | 99.99% (< 53 min downtime/year) | Core banking, payment gateways, AML systems |
| Tier 2 | **Business-Critical** | Services where unavailability significantly impairs business operations or customer experience. | 99.9% (< 8.7 hrs downtime/year) | Internet banking portal, WAN, SIEM |
| Tier 3 | **Operationally Important** | Services where unavailability causes operational inefficiency but can be tolerated for limited periods. | 99.5% (< 43.8 hrs downtime/year) | Internal portals, reporting tools, IT service desk |
| Tier 4 | **Standard** | Non-critical services with no direct impact on regulated business functions. | 99.0% | Internal collaboration tools, training platforms |

### 4.2 Service Type Classification

*Categorise each service by functional type to facilitate grouping and comparative analysis during reviews.*

| Service Type | Description | Applicable Services (Service ID) |
|---|---|---|
| Core System | Mission-critical transactional and account processing systems | [SLA-IT-001] |
| Customer Channel | External-facing digital platforms used by retail or corporate customers | [SLA-IT-002] |
| Payment System | Interbank, intrabank, and real-time gross settlement infrastructure | [SLA-IT-003] |
| Security Service | Cybersecurity monitoring, identity management, and threat intelligence platforms | [SLA-IT-004] |
| Infrastructure | Data centre, cloud, hosting, and network services | [SLA-IT-005], [SLA-IT-006] |
| Support | Internal IT helpdesk and end-user computing services | [SLA-IT-007] |
| [Type] | [Description] | [Service ID(s)] |

### 4.3 Delivery Model Classification

*Classify services by how they are delivered to determine the applicable SLA governance model.*

| Delivery Model | Description | SLA Governance Approach |
|---|---|---|
| **Vendor-Managed** | Service fully operated and maintained by an external third-party provider | Contractual SLA embedded in vendor agreement; monitored via vendor performance reports and periodic audits |
| **Internal** | Service fully operated by [Organization Name]'s internal IT function | Internal OLA (Operational Level Agreement) governs commitments; reviewed by IT management |
| **Hybrid** | Service jointly operated by internal teams and external vendor(s) | Combined SLA covering both internal OLA and vendor SLA components; integrated monitoring required |
| **Cloud-Hosted** | Service delivered via a public or private cloud provider | Cloud provider SLA supplemented by [Organization Name]'s minimum standards addendum |

### 4.4 Classification Register

*Consolidate the classification attributes for each registered service.*

| Service ID | Service Name | Criticality Tier | Service Type | Delivery Model | Data Classification | Regulatory Scope |
|---|---|---|---|---|---|---|
| SLA-IT-001 | [Core Banking System] | Tier 1 – Mission-Critical | Core System | Vendor-Managed | Confidential | BNM RMiT, PDPA |
| SLA-IT-002 | [Internet Banking Portal] | Tier 2 – Business-Critical | Customer Channel | Hybrid | Confidential | BNM RMiT, PDPA |
| SLA-IT-003 | [Payment Gateway] | Tier 1 – Mission-Critical | Payment System | Vendor-Managed | Highly Confidential | BNM RMiT |
| SLA-IT-004 | [SIEM / SOC Services] | Tier 2 – Business-Critical | Security Service | Vendor-Managed | Confidential | BNM RMiT, NACSA |
| SLA-IT-005 | [Data Centre Hosting] | Tier 1 – Mission-Critical | Infrastructure | Vendor-Managed | Confidential | BNM RMiT |
| SLA-IT-006 | [WAN Connectivity] | Tier 2 – Business-Critical | Infrastructure | Vendor-Managed | Internal | BNM RMiT |
| SLA-IT-007 | [IT Service Desk] | Tier 3 – Operationally Important | Support | Internal | Internal | Internal |
| [SLA-IT-XXX] | [Service Name] | [Tier] | [Type] | [Model] | [Classification] | [Scope] |

---

## 5. Owner and Custodian Assignments

*This section establishes clear, named accountability for each critical technology service. Ownership and custodianship must be formally assigned and accepted. Unassigned or disputed ownership represents a governance gap and must be resolved within 30 days of identification.*

### 5.1 Ownership Definitions

*Define what it means to be a Service Owner versus a Service Custodian at [Organization Name].*

| Role | Definition | Accountability |
|---|---|---|
| **Service Owner** | The senior business or technology leader accountable for the strategic performance, funding, and lifecycle of the service. | Ultimate accountability for SLA performance; escalation point for material breaches; approves SLA changes. |
| **Service Custodian** | The operational manager responsible for the day-to-day delivery, monitoring, and technical management of the service. | Operational accountability; manages vendor relationships; produces performance reports; triggers escalations. |
| **Vendor Contact** | The primary relationship manager or account executive at the external vendor. | Contractual point of contact; escalation within the vendor organisation; delivers SLA reports. |
| **BNM Regulatory Liaison** | The internal function responsible for regulatory reporting related to this service. | Ensures SLA documentation meets BNM requirements; coordinates supervisory submissions. |

### 5.2 Service Ownership Register

*Assign named individuals to each critical technology service. All fields must be populated. "TBC" is not acceptable for Tier 1 and Tier 2 services.*

| Service ID | Service Name | Service Owner (Name / Title) | Service Custodian (Name / Title) | Vendor Primary Contact | BNM Regulatory Liaison | Date Assigned |
|---|---|---|---|---|---|---|
| SLA-IT-001 | [Core Banking System] | [Name] / Chief Technology Officer | [Name] / Core Banking Manager | [Name] / [Vendor] Account Manager | [Name] / Head of Regulatory Affairs | [Date] |
| SLA-IT-002 | [Internet Banking Portal] | [Name] / Head of Digital Banking | [Name] / Digital Channels Manager | [Name] / [Vendor] Account Manager | [Name] / Head of Regulatory Affairs | [Date] |
| SLA-IT-003 | [Payment Gateway] | [Name] / Head of Payments | [Name] / Payments Operations Manager | [Name] / [Vendor] Account Manager | [Name] / Head of Regulatory Affairs | [Date] |
| SLA-IT-004 | [SIEM / SOC Services] | [Name] / Chief Information Security Officer | [Name] / SOC Manager | [Name] / [Vendor] Account Manager | [Name] / Head of Regulatory Affairs | [Date] |
| SLA-IT-005 | [Data Centre Hosting] | [Name] / Chief Technology Officer | [Name] / Infrastructure Manager | [Name] / [Vendor] Account Manager | [Name] / Head of Regulatory Affairs | [Date] |
| SLA-IT-006 | [WAN Connectivity] | [Name] / Chief Technology Officer | [Name] / Network Manager | [Name] / [Vendor] Account Manager | [Name] / Head of Regulatory Affairs | [Date] |
| SLA-IT-007 | [IT Service Desk] | [Name] / Head of IT Operations | [Name] / Service Desk Manager | N/A (Internal) | [Name] / Head of Regulatory Affairs | [Date] |
| [SLA-IT-XXX] | [Service Name] | [Name / Title] | [Name / Title] | [Name / Vendor] | [Name / Title] | [Date] |

### 5.3 Succession and Backup Contacts

*Document designated backup contacts to ensure continuity of SLA governance during absences.*

| Service ID | Service Name | Primary Owner / Custodian | Designated Backup | Backup Contact Details |
|---|---|---|---|---|
| SLA-IT-001 | [Core Banking System] | [Name] | [Backup Name / Title] | [Email / Phone] |
| SLA-IT-002 | [Internet Banking Portal] | [Name] | [Backup Name / Title] | [Email / Phone] |
| [SLA-IT-XXX] | [Service Name] | [Name] | [Backup Name / Title] | [Email / Phone] |

---

## 6. SLA Terms and Performance Metrics

*This section documents the specific, measurable service level commitments for each critical technology service. All metrics must be quantifiable, observable, and directly linked to monitoring mechanisms. Commitments must reflect business requirements and must meet or exceed BNM RMiT minimum standards.*

### 6.1 Standard SLA Metric Definitions

*Define each metric type used across SLA schedules to ensure consistent interpretation.*

| Metric | Definition | Measurement Method |
|---|---|---|
| **Availability** | Percentage of agreed service hours during which the service is fully operational. Excludes pre-approved planned maintenance windows. | Calculated monthly: (Total Agreed Hours – Downtime Hours) / Total Agreed Hours × 100% |
| **Response Time** | Time elapsed from the moment a service request or incident is logged until the service provider acknowledges receipt and assigns ownership. | Measured via ITSM ticketing system timestamps. |
| **Resolution Time** | Time elapsed from the moment an incident is logged until the service is restored to full operational status. | Measured via ITSM ticketing system. Excludes time awaiting customer information (with documented justification). |
| **Recovery Time Objective (RTO)** | Maximum acceptable time to restore the service following a declared disaster or major outage. | Validated during Business Continuity testing and during actual incidents. |
| **Recovery Point Objective (RPO)** | Maximum acceptable data loss measured in time, representing the age of data that must be recoverable following an incident. | Validated during Disaster Recovery testing. |
| **Mean Time Between Failures (MTBF)** | Average time between consecutive service failures. Indicates reliability. | Calculated quarterly from incident records. |
| **Mean Time To Recover (MTTR)** | Average time to restore service following a failure. Indicates recovery efficiency. | Calculated quarterly from incident records. |
| **Throughput / Capacity** | Volume of transactions or data the service can process within a given time period without degradation. | Monitored via infrastructure performance dashboards. |

### 6.2 SLA Schedule — Per Service

*Complete one SLA Schedule subsection for each registered critical service. Copy and populate the template below for each Service ID.*

---

#### 6.2.1 SLA Schedule: SLA-IT-001 — [Core Banking System]

| Parameter | Committed Target | Measurement Period | Data Source |
|---|---|---|---|
| **Availability** | 99.99% | Monthly | [Monitoring Tool / Dashboard] |
| **Planned Maintenance Window** | Max 4 hours/month, pre-approved, outside business hours | Monthly | Change Management Calendar |
| **Incident Response Time — Priority 1** | ≤ 15 minutes | Per incident | ITSM System |
| **Incident Response Time — Priority 2** | ≤ 1 hour | Per incident | ITSM System |
| **Incident Response Time — Priority 3** | ≤ 4 hours | Per incident | ITSM System |
| **Incident Resolution Time — Priority 1** | ≤ 4 hours | Per incident | ITSM System |
| **Incident Resolution Time — Priority 2** | ≤ 24 hours | Per incident | ITSM System |
| **Incident Resolution Time — Priority 3** | ≤ 5 business days | Per incident | ITSM System |
| **Recovery Time Objective (RTO)** | ≤ 2 hours | Per incident/test | DR Test Records |
| **Recovery Point Objective (RPO)** | ≤ 30 minutes | Per incident/test | DR Test Records |
| **Transaction Throughput** | ≥ [X] transactions per second at peak load | Continuous | Performance Dashboard |
| **SLA Performance Report Delivery** | By 5th business day of the following month | Monthly | Vendor Report |

**Service Hours:**

| Day | Service Hours | Comments |
|---|---|---|
| Monday – Friday | 24 hours | Full operation |
| Saturday | 24 hours | Full operation |
| Sunday | 24 hours | Full operation |
| Public Holidays | 24 hours | Full operation (with on-call support) |

**Exclusions and Caveats:**

*List any conditions that are explicitly excluded from SLA calculations for this service.*

- Force majeure events as defined in the master service agreement.
- Outages caused by [Organization Name]'s own infrastructure failures where the vendor has documented and evidenced the root cause.
- Agreed planned maintenance windows notified at least [X] business days in advance.

---

#### 6.2.2 SLA Schedule: SLA-IT-002 — [Internet Banking Portal]

| Parameter | Committed Target | Measurement Period | Data Source |
|---|---|---|---|
| **Availability** | 99.9% | Monthly | [Monitoring Tool] |
| **Planned Maintenance Window** | Max 8 hours/month, pre-approved, between 00:00 – 05:00 | Monthly | Change Management Calendar |
| **Incident Response Time — Priority 1** | ≤ 30 minutes | Per incident | ITSM System |
| **Incident Response Time — Priority 2** | ≤ 2 hours | Per incident | ITSM System |
| **Incident Resolution Time — Priority 1** | ≤ 6 hours | Per incident | ITSM System |
| **Incident Resolution Time — Priority 2** | ≤ 48 hours | Per incident | ITSM System |
| **Recovery Time Objective (RTO)** | ≤ 4 hours | Per incident/test | DR Test Records |
| **Recovery Point Objective (RPO)** | ≤ 1 hour | Per incident/test | DR Test Records |
| **Page Load Performance** | ≤ 3 seconds (95th percentile) | Continuous | Synthetic Monitoring |

---

#### 6.2.3 SLA Schedule: SLA-IT-003 — [Payment Gateway]

| Parameter | Committed Target | Measurement Period | Data Source |
|---|---|---|---|
| **Availability** | 99.99% | Monthly | [Monitoring Tool] |
| **Transaction Processing Latency** | ≤ 500ms (95th percentile) | Continuous | Performance Dashboard |
| **Incident Response Time — Priority 1** | ≤ 15 minutes | Per incident | ITSM System |
| **Incident Resolution Time — Priority 1** | ≤ 2 hours | Per incident | ITSM System |
| **Recovery Time Objective (RTO)** | ≤ 1 hour | Per incident/test | DR Test Records |
| **Recovery Point Objective (RPO)** | ≤ 15 minutes | Per incident/test | DR Test Records |

---

#### 6.2.N SLA Schedule: [SLA-IT-XXX] — [Service Name]

*Copy and complete this schedule for each additional critical service registered in Section 3.1.*

| Parameter | Committed Target | Measurement Period | Data Source |
|---|---|---|---|
| **Availability** | [X]% | [Period] | [Source] |
| **Incident Response Time — Priority 1** | ≤ [X] minutes | Per incident | ITSM System |
| **Incident Response Time — Priority 2** | ≤ [X] hours | Per incident | ITSM System |
| **Incident Resolution Time — Priority 1** | ≤ [X] hours | Per incident | ITSM System |
| **Incident Resolution Time — Priority 2** | ≤ [X] hours | Per incident | ITSM System |
| **Recovery Time Objective (RTO)** | ≤ [X] hours | Per incident/test | DR Test Records |
| **Recovery Point Objective (RPO)** | ≤ [X] hours | Per incident/test | DR Test Records |

---

### 6.3 Incident Priority Matrix

*Define how incidents are classified by priority across all services to ensure consistent application of SLA response and resolution targets.*

| Priority | Description | Business Impact | Examples |
|---|---|---|---|
| **Priority 1 — Critical** | Complete service outage or critical functionality unavailable. | Immediate, material financial loss or regulatory breach imminent. Customer transactions failing. | Core banking down; payment gateway unreachable; customer authentication failing. |
| **Priority 2 — High** | Significant degradation of service. Core functions operational but performance severely impacted. | Major disruption to business operations; multiple users or business units affected. | Slow transaction processing; intermittent login failures; partial channel outage. |
| **Priority 3 — Medium** | Partial functionality impaired. Workarounds available. | Limited operational impact; workarounds possible; small group of users affected. | Reports failing; secondary features unavailable; non-critical batch delays. |
| **Priority 4 — Low** | Minor issues, cosmetic defects, or service requests. | Negligible business impact. | UI display errors; informational requests; scheduled service requests. |

---

## 7. Status and Lifecycle Stage

*This section documents the current operational status and lifecycle stage of each critical technology service. Lifecycle stage determines whether full SLA terms, transition SLAs, or decommission notices are applicable. Status must be updated promptly following any material change.*

### 7.1 Lifecycle Stage Definitions

*Define the lifecycle stages applicable to technology services at [Organization Name].*

| Lifecycle Stage | Definition | SLA Applicability |
|---|---|---|
| **Planning** | Service is being scoped, designed, or procured. Not yet operational. | SLA under development; not yet enforceable. |
| **Implementation** | Service is being deployed, configured, or integrated. Operational readiness testing in progress. | Transition/pilot SLA may apply; full SLA becomes effective upon Production sign-off. |
| **Operational — Active** | Service is fully deployed and in routine production use. | Full SLA terms as documented in Section 6 are enforceable. |
| **Operational — Under Review** | Service is active but under review for replacement, upgrade, or renegotiation. | Existing SLA remains enforceable pending outcome of review. |
| **Operational — Degraded** | Service is active but operating below standard due to a known, time-bound issue. | Temporary SLA waiver or modified targets may apply; must be formally approved and time-limited. |
| **Transition** | Service is being migrated, consolidated, or replaced. Parallel operation may be in effect. | Transition SLA governs; both legacy and replacement service SLAs must be documented. |
| **Decommissioning** | Service is being withdrawn from operation. Decommission plan approved. | Reduced SLA scope; data migration and archival obligations remain active. |
| **Decommissioned** | Service has been fully retired. | No SLA applicable. Historical record retained per data retention policy. |

### 7.2 Service Status and Lifecycle Register

*Record the current status and lifecycle stage of each registered critical technology service.*

| Service ID | Service Name | Current Status | Lifecycle Stage | Stage Effective Date | Anticipated Next Stage | Notes / Comments |
|---|---|---|---|---|---|---|
| SLA-IT-001 | [Core Banking System] | Active | Operational — Active | [Date] | [N/A / Review in Year] | [Any relevant notes] |
| SLA-IT-002 | [Internet Banking Portal] | Active | Operational — Active | [Date] | [N/A] | [Notes] |
| SLA-IT-003 | [Payment Gateway] | Active | Operational — Active | [Date] | [N/A] | [Notes] |
| SLA-IT-004 | [SIEM / SOC Services] | Active | Operational — Under Review | [Date] | Transition (contract renewal due [Date]) | Vendor contract expires [Date]; renewal or replacement under evaluation. |
| SLA-IT-005 | [Data Centre Hosting] | Active | Operational — Active | [Date] | [N/A] | [Notes] |
| SLA-IT-006 | [WAN Connectivity] | Active | Operational — Active | [Date] | [N/A] | [Notes] |
| SLA-IT-007 | [IT Service Desk] | Active | Operational — Active | [Date] | [N/A] | [Notes] |
| [SLA-IT-XXX] | [Service Name] | [Status] | [Stage] | [Date] | [Next Stage] | [Notes] |

### 7.3 SLA Waiver and Temporary Modification Register

*Record any instances where standard SLA targets have been formally waived or temporarily modified, including the justification, approval, and expiry of such waivers.*

| Waiver ID | Service ID | Service Name | Original Target | Temporary Target | Justification | Approved By | Waiver Start Date | Waiver Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| [WAV-001] | [SLA-IT-XXX] | [Service Name] | [Original SLA] | [Temp SLA] | [Business / technical justification] | [Approver Name / Title] | [Date] | [Date] | [Active / Expired] |

---

## 8. Monitoring, Reporting, and Escalation

*This section defines how SLA performance is continuously monitored, reported, and escalated. Monitoring must be automated where possible. Manual monitoring requires documented procedures and accountability. BNM RMiT Clause 10.29 requires that SLA breaches be identified and addressed promptly.*

### 8.1 Monitoring Framework

*Describe the tools, methods, and frequency of SLA monitoring for each service tier.*

| Monitoring Dimension | Tier 1 Services | Tier 2 Services | Tier 3 Services |
|---|---|---|---|
| **Availability Monitoring** | Real-time (continuous), automated alerting | Real-time (continuous), automated alerting | Near-real-time (15-minute intervals) |
| **Performance Monitoring** | Real-time dashboards with threshold alerts | Real-time dashboards with threshold alerts | Hourly checks |
| **Vendor Report Review** | Monthly (within 5 business days of month-end) | Monthly (within 5 business days of month-end) | Quarterly |
| **Automated Alerting** | Immediate on breach | Immediate on breach | Within 1 business day |
| **Manual Review** | Weekly operational review | Fortnightly | Monthly |

### 8.2 Monitoring Tools Register

*Document the tools used to monitor each critical service.*

| Service ID | Service Name | Primary Monitoring Tool | Secondary / Backup Tool | Dashboard / Report Location | Alert Recipients |
|---|---|---|---|---|---|
| SLA-IT-001 | [Core Banking System] | [Tool Name, e.g., Dynatrace] | [Tool Name] | [URL / SharePoint Path] | [Distribution List] |
| SLA-IT-002 | [Internet Banking Portal] | [Tool Name] | [Tool Name] | [URL / SharePoint Path] | [Distribution List] |
| SLA-IT-003 | [Payment Gateway] | [Tool Name] | [Tool Name] | [URL / SharePoint Path] | [Distribution List] |
| [SLA-IT-XXX] | [Service Name] | [Tool] | [Tool] | [Location] | [Recipients] |

### 8.3 Reporting Schedule

*Define the reporting cadence and format for SLA performance reports.*

| Report Type | Frequency | Prepared By | Distributed To | Format | Due Date |
|---|---|---|---|---|---|
| **Monthly SLA Performance Dashboard** | Monthly | Service Custodian / Vendor | Head of Vendor Management, CTO, CISO | PDF / Slide deck | By 5th business day of following month |
| **Quarterly SLA Review Report** | Quarterly | Head of Vendor Management | Technology Risk Committee, Board IT Committee | Formal report | Within 15 business days of quarter-end |
| **SLA Breach Incident Report** | Per breach | Service Custodian | Head of Vendor Management, CTO, Risk Management | Incident report | Within 24 hours of breach confirmation |
| **Annual SLA Adequacy Review** | Annually | Head of Vendor Management | Board of Directors, BNM (if required) | Governance report | Within 30 days of year-end |
| **Ad Hoc Regulatory Report** | As required | Head of Regulatory Affairs | BNM | BNM-prescribed format | Per BNM request |

### 8.4 Escalation Framework

*Define the escalation path when SLA breaches occur or are at risk of occurring. Escalation tiers must be clearly defined and communicated to all relevant parties.*

| Escalation Tier | Trigger | Escalation To | Expected Action | Timeframe |
|---|---|---|---|---|
| **Tier 1 — Operational** | Availability drops below target or Priority 1 incident logged. | Service Custodian + Vendor Primary Contact | Immediate investigation; incident bridge call convened; status updates every 30 minutes. | Immediate (within 15 minutes of trigger) |
| **Tier 2 — Management** | Priority 1 incident not resolved within 50% of resolution SLA. Service unavailable > 2 hours. | Service Owner + Head of Vendor Management | Management oversight of resolution; customer communication initiated if required; vendor executive escalation. | Within 2 hours of trigger |
| **Tier 3 — Executive** | Priority 1 incident not resolved within SLA. Material SLA breach confirmed. Regulatory notification threshold met. | CTO / CISO + CEO (if required) | Executive oversight; regulator notification assessed; major incident declaration considered. | Within 4 hours of trigger |
| **Tier 4 — Regulatory** | Incident meets BNM reportable incident threshold (e.g., disruption > 4 hours affecting significant customer base). | Head of Regulatory Affairs → BNM | Formal notification to BNM per RMiT incident reporting requirements. | Within prescribed BNM timeframe |

---

## 9. Breach Management and Remediation

*This section governs the process for identifying, managing, and resolving SLA breaches. A breach occurs when a committed SLA metric is not achieved within the defined measurement period. Breaches must be formally documented, investigated, and subject to remediation action.*

### 9.1 SLA Breach Definition

*Define what constitutes an SLA breach at [Organization Name].*

An **SLA Breach** is confirmed when:

- A service fails to meet one or more committed SLA metrics within the defined measurement period, **and**
- The failure is not covered by an approved exclusion (Section 6.2) or an active SLA waiver (Section 7.3).

An **SLA Breach Warning** is issued when a service's performance trajectory indicates a breach is likely within the current measurement period, enabling proactive intervention.

### 9.2 Breach Register

*Maintain a running log of all confirmed SLA breaches for audit and trend analysis purposes.*

| Breach ID | Service ID | Service Name | Metric Breached | Committed Target | Actual Performance | Breach Date | Duration / Severity | Root Cause Category | Root Cause Summary | Remediation Action | Vendor Credit Applicable | Resolved Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [BRE-001] | [SLA-IT-XXX] | [Service Name] | [Availability] | [99.99%] | [99.95%] | [Date] | [X hours / Critical] | [Infrastructure / Software / Process] | [Brief RCA summary] | [Action taken] | [Yes / No / TBC] | [Date] | [Resolved / Open] |
| [BRE-002] | [SLA-IT-XXX] | [Service Name] | [Response Time P1] | [≤ 15 min] | [47 min] | [Date] | [Single incident / High] | [Process] | [Brief RCA summary] | [Action taken] | [No] | [Date] | [Resolved] |

### 9.3 Remediation and Service Improvement Plans

*For material or repeat breaches, a formal Service Improvement Plan (SIP) must be developed and tracked to completion.*

**Service Improvement Plan Template:**

| Field | Detail |
|---|---|
| **SIP ID** | [SIP-XXX] |
| **Related Breach ID(s)** | [BRE-XXX] |
| **Service ID** | [SLA-IT-XXX] |
| **Service Name** | [Service Name] |
| **Breach Summary** | [Brief description of the breach and its business impact] |
| **Root Cause Analysis** | [Detailed root cause findings — attach RCA report if required] |
| **Remediation Actions** | [Numbered list of specific corrective actions, each with an owner and target completion date] |
| **Preventive Actions** | [Actions to prevent recurrence, e.g., infrastructure upgrades, process changes, training] |
| **Milestones and Dates** | [Key milestones with target dates] |
| **Vendor Credit / Penalty** | [Amount / Credits agreed; invoice reference; status] |
| **Review Date** | [Date when SIP progress will be formally reviewed] |
| **SIP Owner** | [Name / Title] |
| **Approved By** | [Name / Title] |
| **Status** | [Open / In Progress / Completed] |

### 9.4 Vendor Penalty and Credit Framework

*Define the consequences of SLA breaches by vendors, including service credits and escalating remedies.*

| Breach Severity | Availability Shortfall | Penalty / Credit | Additional Remedy |
|---|---|---|---|
| **Minor** | 0.01% – 0.1% below target | [X]% monthly service fee credit | Written acknowledgment and root cause analysis |
| **Moderate** | 0.1% – 0.5% below target | [X]% monthly service fee credit | Service Improvement Plan required within 30 days |
| **Major** | 0.5% – 1.0% below target | [X]% monthly service fee credit | SIP + executive-level review meeting |
| **Critical** | > 1.0% below target | [X]% monthly service fee credit | SIP + right to terminate with notice; BNM notification assessed |

*Note: Penalty and credit terms must be embedded in vendor contracts and master service agreements. This framework supplements but does not replace contractual obligations.*

---

## 10. Last Review Date and Review Cadence

*This section documents the review history of each SLA and establishes the forward review schedule. BNM RMiT Clause 10.29 requires that SLAs be subject to continuous monitoring with structured periodic reviews. Quarterly reviews are mandatory for all Tier 1 and Tier 2 services.*

### 10.1 Review Policy

*Define [Organization Name]'s SLA review policy, including triggers for out-of-cycle reviews.*

**Scheduled Reviews:**

| Service Tier | Minimum Review Frequency | Review Owner | Review Participants |
|---|---|---|---|
| Tier 1 — Mission-Critical | Quarterly + Continuous monitoring | Head of Vendor Management | Service Owner, Service Custodian, Vendor, Risk Management, CTO |
| Tier 2 — Business-Critical | Quarterly + Continuous monitoring | Head of Vendor Management | Service Owner, Service Custodian, Vendor |
| Tier 3 — Operationally Important | Semi-annual | Service Custodian | Service Owner |
| Tier 4 — Standard | Annual | Service Custodian | [As required] |

**Triggered (Out-of-Cycle) Reviews** must be initiated within 10 business days when:

- A material SLA breach occurs (Priority 1 or confirmed breach).
- A significant change to the service is planned or implemented.
- A merger, acquisition, or outsourcing arrangement affects the service.
- BNM issues updated guidance or requirements relevant to the service.
- The vendor announces end-of-life, restructuring, or material changes to service terms.
- A BNM examination, internal audit, or external audit identifies gaps in SLA governance.

### 10.2 SLA Review History Register

*Document every formal review conducted for each SLA, including outcomes and actions arising.*

| Review ID | Service ID | Service Name | Review Type | Review Date | Conducted By | Key Findings | Actions Arising | Next Review Date |
|---|---|---|---|---|---|---|---|---|
| [REV-001] | [SLA-IT-001] | [Core Banking System] | Quarterly | [Date] | [Name / Title] | [Summary of findings] | [Action items with owners and dates] | [Date] |
| [REV-002] | [SLA-IT-002] | [Internet Banking Portal] | Quarterly | [Date] | [Name / Title] | [Summary] | [Actions] | [Date] |
| [REV-003] | [SLA-IT-003] | [Payment Gateway] | Triggered — Post-Incident | [Date] | [Name / Title] | [Summary] | [Actions] | [Date] |
| [REV-XXX] | [SLA-IT-XXX] | [Service Name] | [Type] | [Date] | [Name] | [Findings] | [Actions] | [Date] |

### 10.3 Forward Review Schedule

*Publish the schedule of upcoming SLA reviews to enable preparation and resource planning.*

| Review Quarter | Review Period | Scheduled Review Date | Services in Scope | Review Facilitator | Status |
|---|---|---|---|---|---|
| Q[X] [Year] | [Month – Month] | [Date] | All Tier 1 & Tier 2 services | Head of Vendor Management | [Scheduled / Completed / Overdue] |
| Q[X+1] [Year] | [Month – Month] | [Date] | All Tier 1 & Tier 2 services | Head of Vendor Management | [Scheduled] |
| Q[X+2] [Year] | [Month – Month] | [Date] | All Tier 1 & Tier 2 services | Head of Vendor Management | [Scheduled] |
| Q[X+3] [Year] | [Month – Month] | [Date] | All Tier 1 & Tier 2 services | Head of Vendor Management | [Scheduled] |
| H2 [Year] | [Month – Month] | [Date] | All Tier 3 services | Service Custodians | [Scheduled] |
| Annual [Year] | [Month] | [Date] | All Tier 4 services + Full SLA adequacy review | Head of Vendor Management | [Scheduled] |

---

## 11. Roles and Responsibilities

*This section defines the governance structure supporting SLA management at [Organization Name], including a RACI matrix to clarify accountability across all key activities.*

### 11.1 Governance Structure

| Role | Individual / Team | Key SLA Responsibilities |
|---|---|---|
| **Board IT Committee** | Board of Directors | Approves SLA governance framework; reviews annual SLA performance report; ensures regulatory compliance posture. |
| **Technology Risk Committee** | Senior Management | Oversees quarterly SLA performance; approves material SLA changes; reviews escalated breaches. |
| **Head of Vendor Management** | [Name / Title] | Document Owner; overall accountability for SLA governance; chairs quarterly reviews; reports to Technology Risk Committee. |
| **Chief Technology Officer (CTO)** | [Name / Title] | Executive sponsor; approves SLA framework and major changes; escalation point for Tier 3 incidents. |
| **Chief Information Security Officer (CISO)** | [Name / Title] | Accountability for security-related SLAs (SIEM, SOC, identity management); escalation for security incidents. |
| **Service Owners** | [Various / per Section 5] | Business accountability for individual service SLA performance; approve SLA changes for their service; escalate material breaches. |
| **Service Custodians** | [Various / per Section 5] | Operational management of SLA; continuous monitoring; prepare performance reports; manage vendor relationships. |
| **Vendor Management Team** | Vendor Management | Administers vendor SLA contracts; manages vendor performance reviews; negotiates service credits; maintains breach register. |
| **Technology Risk Management** | Risk Management | Independent oversight of SLA compliance; assesses SLA risks; validates breach remediation; reports to Technology Risk Committee. |
| **Internal Audit** | Internal Audit | Periodic independent review of SLA governance framework and compliance; reports findings to Audit Committee. |
| **Head of Regulatory Affairs** | [Name / Title] | Monitors regulatory obligations; advises on BNM reporting requirements related to SLA breaches; liaises with BNM. |

### 11.2 RACI Matrix — SLA Management Activities

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | Board IT Committee | Tech Risk Committee | Head of Vendor Mgmt | CTO | CISO | Service Owner | Service Custodian | Vendor Mgmt Team | Tech Risk | Internal Audit | Head of Reg. Affairs |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Define SLA governance framework | I | A | R | C | C | C | I | C | C | I | C |
| Register new critical service | I | I | A | C | C | R | C | R | C | I | I |
| Classify service and assign criticality tier | I | I | A | C | C | R | C | C | C | I | I |
| Assign Service Owner and Custodian | I | A | R | C | C | — | — | C | I | I | I |
| Negotiate and document SLA terms | I | I | A | C | C | R | C | R | C | I | C |
| Monitor SLA performance (continuous) | I | I | I | I | C | I | R | C | C | I | I |
| Prepare monthly SLA performance report | I | I | I | I | I | I | R | A | C | I | I |
| Conduct quarterly SLA review | I | A | R | C | C | C | C | C | C | I | C |
| Identify and confirm SLA breach | I | I | A | I | C | I | R | C | C | I | I |
| Escalate SLA breach (Tier 2+) | I | A | R | C | C | R | C | C | C | I | C |
| Initiate Service Improvement Plan | I | I | A | C | C | R | C | R | C | I | I |
| Negotiate vendor penalty / credit | I | I | A | C | I | C | C | R | C | I | I |
| Notify BNM of reportable breach | A | C | C | C | C | I | I | I | C | I | R |
| Review and approve SLA waiver | I | A | R | C | C | C | I | C | C | I | I |
| Conduct annual SLA adequacy review | A | C | R | C | C | C | C | C | C | C | C |
| Update SLA document | I | I | A | C | C | C | C | R | C | I | I |

---

## 12. Review and Approval

### 12.1 Version History

*Record all versions of this document, including the nature of changes made.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name / Title] | [Reviewer Name / Title] | Initial document creation and approval. |
| [1.1] | [Date] | [Author Name / Title] | [Reviewer Name / Title] | [Description of changes, e.g., SLA-IT-004 targets updated following vendor contract renewal.] |
| [2.0] | [Date] | [Author Name / Title] | [Reviewer Name / Title] | [Major revision — new service added; classification framework updated.] |

### 12.2 Approval Sign-Off

*All individuals listed below must formally approve this document prior to it becoming effective. Approval records must be retained as part of the audit trail.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Vendor Management (Document Owner) | [Name] | | [Date] |
| Chief Technology Officer | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Head of Technology Risk Management | [Name] | | [Date] |
| Head of Regulatory Affairs | [Name] | | [Date] |
| Chair, Technology Risk Committee | [Name] | | [Date] |

### 12.3 Next Scheduled Review

| Review Type | Scheduled Date | Responsibility |
|---|---|---|
| Quarterly Review | [Next Quarter End + 15 Business Days] | Head of Vendor Management |
| Annual Full Review | [Annual Review Date] | Head of Vendor Management |
| Triggered Review | As required (per Section 10.1) | Head of Vendor Management |

---

## 13. References

*This section lists all regulatory documents, internal policies, and standards referenced in or applicable to this document.*

### 13.1 Regulatory References

| Reference | Document Title | Issuing Authority | Relevant Clause(s) | URL / Location |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | **10.29** (SLA documentation), 10.26–10.28 (outsourcing), 11.1–11.5 (continuity) | [BNM Website / Internal Regulatory Library] |
| BNM/RH/PD 028-2 | Guidelines on Outsourcing | Bank Negara Malaysia | Applicable sections on vendor SLA requirements | [BNM Website / Internal Regulatory Library] |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Section 9 (Security of personal data) | [Internal Regulatory Library] |
| NACSA | National Cyber Security Policy | National Cyber Security Agency | Critical information infrastructure protection requirements | [Internal Regulatory Library] |
| [Other Reference] | [Title] | [Authority] | [Clause] | [Location] |

### 13.2 Internal Policy References

| Document Title | Document ID | Version | Location |
|---|---|---|---|
| Technology Risk Management Policy | [Doc ID] | [Version] | [SharePoint / Document Management System] |
| Vendor and Third-Party Risk Management Policy | [Doc ID] | [Version] | [Location] |
| Business Continuity Management Policy | [Doc ID] | [Version] | [Location] |
| Information Security Policy | [Doc ID] | [Version] | [Location] |
| Technology Asset Management Policy | [Doc ID] | [Version] | [Location] |
| Incident Management Policy and Procedures | [Doc ID] | [Version] | [Location] |
| Change Management Policy | [Doc ID] | [Version] | [Location] |

### 13.3 Related Documents

| Document Title | Document ID | Relationship |
|---|---|---|
| Technology Asset Inventory | [Doc ID] | Source for critical service identification |
| Business Impact Analysis (BIA) | [Doc ID] | Source for criticality tier classification |
| Disaster Recovery Plan | [Doc ID] | Source for RTO and RPO targets |
| Vendor Contracts and Master Service Agreements | [Various] | Contractual basis for vendor SLA commitments |
| IT Service Catalogue | [Doc ID] | Comprehensive list of all services (critical and non-critical) |

---

## 14. Appendices

### Appendix A — SLA Template for New Service Onboarding

*Use this template when onboarding a new critical technology service to ensure all required SLA elements are captured before the service enters production.*

**New Service SLA Intake Form:**

| Field | Details |
|---|---|
| **Service Name** | [Name of the service] |
| **Proposed Service ID** | [SLA-[Dept]-[Seq]] |
| **Service Description** | [Brief description] |
| **Business Justification** | [Why this service is required] |
| **Criticality Assessment** | [Refer to Section 4.1; document which criteria are met] |
| **Proposed Criticality Tier** | [Tier 1 / 2 / 3 / 4] |
| **Service Type** | [Core System / Customer Channel / Payment / Security / Infrastructure / Support] |
| **Delivery Model** | [Vendor-Managed / Internal / Hybrid / Cloud-Hosted] |
| **Proposed Service Owner** | [Name / Title] |
| **Proposed Service Custodian** | [Name / Title] |
| **Vendor Name (if applicable)** | [Vendor Name] |
| **Proposed Go-Live Date** | [Date] |
| **Proposed SLA Metrics** | [Draft SLA targets — refer to Section 6] |
| **RTO / RPO Requirements** | [As defined in BCP/DRP] |
| **Data Classification** | [Highly Confidential / Confidential / Internal / Public] |
| **Regulatory Scope** | [BNM RMiT / PDPA / NACSA / Other] |
| **Contract Reference** | [MSA / Contract Number] |
| **Submitted By** | [Name / Title] |
| **Submission Date** | [Date] |

---

### Appendix B — Monthly SLA Performance Report Template

*Service Custodians must use this structure when producing monthly SLA performance reports.*

**Report Header:**

| Field | Detail |
|---|---|
| **Report Period** | [Month Year] |
| **Service ID and Name** | [SLA-IT-XXX — Service Name] |
| **Prepared By** | [Name / Title] |
| **Report Date** | [Date] |
| **Distribution** | [List of recipients] |

**Performance Summary:**

| Metric | Committed Target | Actual Performance | Status | Variance |
|---|---|---|---|---|
| Availability | [X]% | [X]% | [Met / Breached] | [+/- X%] |
| Response Time — P1 | ≤ [X] min | [X] min (avg) | [Met / Breached] | [+/- X min] |
| Resolution Time — P1 | ≤ [X] hrs | [X] hrs (avg) | [Met / Breached] | [+/- X hrs] |
| [Other Metric] | [Target] | [Actual] | [Status] | [Variance] |

**Incident Summary:**

| Priority | Total Incidents | Within SLA | Breached SLA | Breach Rate |
|---|---|---|---|---|
| Priority 1 | [X] | [X] | [X] | [X]% |
| Priority 2 | [X] | [X] | [X] | [X]% |
| Priority 3 | [X] | [X] | [X] | [X]% |
| Total | [X] | [X] | [X] | [X]% |

**Planned Maintenance:**

| Maintenance Window | Date | Duration | Business Impact | Completed Successfully |
|---|---|---|---|---|
| [Description] | [Date] | [X hours] | [Impact description] | [Yes / No] |

**Issues and Actions:**

- [Issue 1]: [Description and action taken]
- [Issue 2]: [Description and action taken]

---

### Appendix C — Quarterly SLA Review Agenda Template

*Use this agenda as the standard structure for quarterly SLA governance reviews.*

**Meeting Details:**

| Field | Detail |
|---|---|
| **Meeting Title** | Quarterly SLA Governance Review — Q[X] [Year] |
| **Date and Time** | [Date / Time] |
| **Location / Platform** | [Meeting Room / Video Conference Link] |
| **Chair** | Head of Vendor Management |
| **Attendees** | [List of required and optional attendees] |
| **Documents Circulated** | [List of pre-read materials — performance reports, breach register, SIP updates] |

**Agenda:**

1. Welcome and quorum confirmation — 5 minutes
2. Review and approval of previous meeting minutes — 10 minutes
3. Monthly performance dashboard walkthrough — Per service (5 minutes each)
4. SLA breach register review — 15 minutes
5. Service Improvement Plan (SIP) status updates — 15 minutes
6. Lifecycle and status changes — 10 minutes
7. Upcoming contract renewals and SLA renegotiations — 10 minutes
8. Regulatory updates and compliance posture — 10 minutes
9. Any other business — 5 minutes
10. Actions and next steps — 5 minutes

---

### Appendix D — SLA Breach Notification Template

*Service Custodians must issue a breach notification within 24 hours of confirming an SLA breach using this template.*

**Subject:** SLA Breach Notification — [Service Name] — [Metric Breached] — [Date]

| Field | Detail |
|---|---|
| **Breach Reference** | [BRE-XXX] |
| **Service ID and Name** | [SLA-IT-XXX — Service Name] |
| **Metric Breached** | [e.g., Availability, Response Time P1] |
| **Committed Target** | [X]% / [X] minutes |
| **Actual Performance** | [X]% / [X] minutes |
| **Breach Period** | [Start Date / Time — End Date / Time] |
| **Business Impact** | [Description of impact on business operations and customers] |
| **Root Cause (Preliminary)** | [Initial assessment — full RCA to follow within [X] days] |
| **Immediate Actions Taken** | [Actions already completed] |
| **Pending Actions** | [Actions in progress with owners and target dates] |
| **Service Credit Applicable** | [Yes / No / Under Assessment] |
| **BNM Notification Required** | [Yes / No / Under Assessment — refer to Appendix E] |
| **Issued By** | [Name / Title] |
| **Issue Date** | [Date] |
| **Distribution** | Head of Vendor Management, CTO, CISO, Risk Management, [Others] |

---

### Appendix E — BNM Reportable Incident Assessment Checklist

*Complete this checklist whenever a Priority 1 incident or confirmed SLA breach occurs to determine whether BNM notification is required under RMiT.*

| Assessment Criterion | Yes / No | Evidence / Notes |
|---|---|---|
| Did the incident involve a critical banking system as defined in BNM RMiT? | [ ] | |
| Did the service disruption affect customers or exceed [X] hours of unavailability? | [ ] | |
| Was there any actual or suspected data breach involving customer personal data? | [ ] | |
| Did the incident meet the BNM threshold for Technology Disruption Incident reporting? | [ ] | |
| Has a similar incident occurred within the past 12 months? | [ ] | |
| **Assessment Outcome** | [Notify BNM / No Notification Required] | |
| **Assessment Completed By** | [Name / Title] | |
| **Assessment Date** | [Date] | |
| **Reviewed By** | Head of Regulatory Affairs | |

*If BNM notification is required, the Head of Regulatory Affairs must submit notification within the timeframe prescribed by BNM RMiT and any applicable circulars.*

---

### Appendix F — Glossary of Terms

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and financial regulator of Malaysia. |
| **Critical Technology Service** | A technology service whose failure would materially impact critical business functions, customer welfare, or regulatory compliance. |
| **Custodian** | The individual operationally responsible for the day-to-day management and monitoring of a technology service. |
| **Lifecycle Stage** | The phase in the operational life of a technology service, from planning through decommissioning. |
| **MTBF** | Mean Time Between Failures — a measure of service reliability. |
| **MTTR** | Mean Time To Recover — a measure of recovery efficiency following a failure. |
| **OLA** | Operational Level Agreement — an internal agreement between teams within [Organization Name] governing service delivery obligations. |
| **Owner** | The senior individual with ultimate accountability for the performance and governance of a technology service. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions. |
| **RPO** | Recovery Point Objective — the maximum acceptable age of data recoverable following a disaster. |
| **RTO** | Recovery Time Objective — the maximum acceptable duration of a service outage following a disaster. |
| **SIP** | Service Improvement Plan — a formal plan to remediate SLA breaches and prevent recurrence. |
| **SLA** | Service Level Agreement — a documented commitment between a service provider and consumer defining performance standards. |
| **SLA Breach** | Failure of a service to meet one or more committed SLA metrics within the defined measurement period. |
| **Tier** | The criticality classification assigned to a technology service, determining the stringency of applicable SLA requirements. |

---

*End of Document*

---

**Document Control:** This document is subject to formal version control. The current approved version is maintained in [Organization Name]'s Document Management System at [Location]. Printed copies are uncontrolled. Verify currency before use.