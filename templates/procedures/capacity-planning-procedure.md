# Capacity Planning Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Regulatory Reference:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document — Clause 10.16
>
> **Mandatory Status:** Yes — This document is a mandatory artifact under BNM RMiT requirements applicable to all licensed financial institutions operating in Malaysia.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy References](#3-regulatory-and-policy-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Capacity Planning Principles](#5-capacity-planning-principles)
6. [Process Flow — Capacity Planning Lifecycle](#6-process-flow--capacity-planning-lifecycle)
   - 6.1 [Capacity Demand Forecasting](#61-capacity-demand-forecasting)
   - 6.2 [Capacity Assessment and Baselining](#62-capacity-assessment-and-baselining)
   - 6.3 [Gap Analysis and Remediation Planning](#63-gap-analysis-and-remediation-planning)
   - 6.4 [Capacity Provisioning and Implementation](#64-capacity-provisioning-and-implementation)
   - 6.5 [Continuous Monitoring and Alerting](#65-continuous-monitoring-and-alerting)
   - 6.6 [Quarterly Review and Reporting](#66-quarterly-review-and-reporting)
7. [Roles and Responsibilities (RACI)](#7-roles-and-responsibilities-raci)
8. [Tools and Systems](#8-tools-and-systems)
9. [Capacity Thresholds and Escalation Procedures](#9-capacity-thresholds-and-escalation-procedures)
10. [Capacity Planning for Critical Systems](#10-capacity-planning-for-critical-systems)
11. [Cloud and Hybrid Infrastructure Considerations](#11-cloud-and-hybrid-infrastructure-considerations)
12. [Performance Benchmarks and KPIs](#12-performance-benchmarks-and-kpis)
13. [Exceptions and Deviations](#13-exceptions-and-deviations)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*This section defines the intent of this procedure and its relationship to the organization's broader technology risk management obligations.*

This Capacity Planning Procedure establishes the formal process by which [Organization Name] plans, monitors, manages, and reviews the capacity of its technology infrastructure, systems, and platforms. It ensures that sufficient technology capacity is available to support current and anticipated business demands while maintaining the performance, availability, and resilience of critical systems.

This procedure is established in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.16**, which requires financial institutions to implement formal capacity management processes to proactively identify and address capacity constraints before they affect business operations or service delivery.

The objectives of this procedure are to:

- Ensure technology infrastructure capacity is aligned with current and projected business requirements.
- Establish systematic processes for monitoring, forecasting, and provisioning capacity across compute, storage, network, and application layers.
- Define clear escalation paths when capacity thresholds are approached or breached.
- Support the organization's obligations under BNM RMiT to maintain operational resilience and system availability.
- Enable informed investment decisions for technology capacity based on evidence-based demand forecasting.
- Provide documentary evidence of compliance with regulatory capacity management requirements for audit and supervisory review.

---

## 2. Scope and Applicability

*This section defines which systems, teams, environments, and geographic locations are covered by this procedure. Be specific to ensure there are no gaps in coverage that could be identified during a regulatory audit.*

### 2.1 In-Scope Systems and Infrastructure

This procedure applies to all technology assets and infrastructure operated, managed, or contracted by [Organization Name], including but not limited to:

| Category | Examples | Applicable |
|---|---|---|
| **Compute Infrastructure** | On-premises servers, virtual machines, containerised workloads | Yes |
| **Storage Infrastructure** | SAN, NAS, object storage, backup storage | Yes |
| **Network Infrastructure** | WAN, LAN, load balancers, firewalls, internet gateways | Yes |
| **Database Systems** | Relational databases, NoSQL, data warehouses | Yes |
| **Application Servers** | Core banking, payment systems, middleware platforms | Yes |
| **Cloud Services** | IaaS, PaaS, SaaS environments (public, private, hybrid) | Yes |
| **End-User Computing** | VDI environments, endpoint fleets | Yes |
| **Disaster Recovery Infrastructure** | DR site compute, storage, and replication | Yes |
| **Third-Party Managed Services** | Outsourced or co-managed platforms | Yes — with oversight |

### 2.2 Organizational Scope

This procedure applies to all personnel in the following functions:

- IT Operations
- IT Infrastructure and Architecture
- Application Development and DevOps
- IT Risk and Governance
- Business Units that are significant consumers of IT capacity (e.g., Operations, Finance, Digital Banking)
- Third-party service providers and managed service providers (MSPs) contracted to manage or deliver technology services on behalf of [Organization Name]

### 2.3 Environments

This procedure covers all operating environments:

- **Production** (highest priority)
- **Pre-Production / Staging**
- **Development and Test** (where shared infrastructure applies)
- **Disaster Recovery (DR)**

### 2.4 Exclusions

*List any systems, environments, or organizational units explicitly excluded from this procedure's scope, with justification.*

| Exclusion | Justification | Alternative Control |
|---|---|---|
| [Excluded System/Environment] | [Reason for Exclusion] | [Reference to alternative procedure] |
| [Excluded System/Environment] | [Reason for Exclusion] | [Reference to alternative procedure] |

---

## 3. Regulatory and Policy References

*This section anchors the procedure to the specific regulatory obligations that make it mandatory. All referenced clauses should be traceable to current versions of the cited documents.*

### 3.1 Primary Regulatory Reference

| Reference | Document | Clause / Section | Requirement Summary |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 10.16** | Financial institutions must establish capacity management processes to plan, monitor, and manage technology capacity to meet current and projected demands. |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.1 | Technology risk management framework — general obligations. |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.4 | Technology operations management, including performance and availability. |

### 3.2 Supporting Regulatory and Standards References

| Reference | Document | Relevance |
|---|---|---|
| BNM BCM | Business Continuity Management Policy | Capacity requirements for DR and BCP scenarios |
| ISO/IEC 20000-1 | IT Service Management | Capacity and availability management processes |
| ITIL 4 | IT Infrastructure Library — Capacity and Performance Management Practice | Best practice alignment |
| ISO/IEC 27001:2022 | Information Security Management | Annex A — Capacity management as a control |
| [Internal Policy Reference] | IT Risk Management Policy | [Section Reference] |
| [Internal Policy Reference] | Technology Infrastructure Policy | [Section Reference] |

### 3.3 Internal Policies and Procedures

| Document | Reference Code | Relationship |
|---|---|---|
| IT Risk Management Policy | [Policy ID] | Parent policy governing this procedure |
| Technology Infrastructure Standards | [Doc ID] | Defines baseline configuration and thresholds |
| Change Management Procedure | [Doc ID] | Governs provisioning changes arising from capacity planning |
| Incident Management Procedure | [Doc ID] | Governs capacity-related incidents |
| Vendor Management Procedure | [Doc ID] | Governs third-party capacity obligations |

---

## 4. Definitions and Abbreviations

*Define all technical terms, acronyms, and regulatory terminology used in this document to ensure consistent interpretation across teams and during audit review.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Capacity** | The maximum throughput, volume, or load that a technology component, system, or environment can sustain while meeting defined performance targets. |
| **Capacity Planning** | The process of forecasting future demand and provisioning sufficient technology resources to meet that demand while avoiding performance degradation. |
| **Capacity Threshold** | A predefined utilization level at which action (monitoring escalation, remediation, or provisioning) is triggered. |
| **Baseline** | A documented measurement of resource utilization under normal operating conditions, used as a reference point for trend analysis and anomaly detection. |
| **Demand Forecast** | A projection of future technology resource consumption based on business growth, seasonality, and planned change. |
| **Headroom** | The percentage of unused capacity maintained as a buffer to absorb unexpected demand spikes without breaching performance thresholds. |
| **Saturation** | A condition where a resource is fully utilized, resulting in queuing, latency, or service degradation. |
| **Remediation Plan** | A documented and approved plan to address an identified capacity gap, including actions, timelines, and accountable owners. |
| **Critical System** | A system whose failure or degraded performance would have a material impact on business operations, customer service, or regulatory obligations. Refer to [Organization Name]'s Critical System Register. |
| **SLA** | Service Level Agreement — the documented performance and availability commitments for a given system or service. |
| **MTTR** | Mean Time to Recover — the average time to restore a system following a failure. |
| **RTO / RPO** | Recovery Time Objective / Recovery Point Objective — BCP/DR metrics used to inform capacity requirements for DR infrastructure. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| RACI | Responsible, Accountable, Consulted, Informed |
| SAN | Storage Area Network |
| NAS | Network Attached Storage |
| IaaS | Infrastructure as a Service |
| PaaS | Platform as a Service |
| SaaS | Software as a Service |
| VDI | Virtual Desktop Infrastructure |
| MSP | Managed Service Provider |
| KPI | Key Performance Indicator |
| ITSM | IT Service Management |
| CMDB | Configuration Management Database |
| DR | Disaster Recovery |
| BCP | Business Continuity Plan |
| CPU | Central Processing Unit |
| RAM | Random Access Memory |
| IOPS | Input/Output Operations Per Second |

---

## 5. Capacity Planning Principles

*This section establishes the governing principles that underpin all capacity planning activities. These principles inform decision-making when specific guidance is absent and demonstrate a mature, principle-based approach to regulators.*

All capacity planning activities at [Organization Name] shall be conducted in accordance with the following principles:

**5.1 Proactive Management**
Capacity constraints shall be identified and addressed before they affect service performance or availability. Reactive responses to capacity failures are not acceptable for Critical Systems.

**5.2 Business-Aligned Forecasting**
Capacity plans shall be informed by business demand forecasts, including planned product launches, regulatory changes, growth projections, and seasonal demand patterns. IT Capacity Planning shall maintain active engagement with Business Units and senior management to obtain forward-looking demand signals.

**5.3 Risk-Based Prioritization**
Capacity management effort and monitoring frequency shall be prioritized based on the criticality of the system and the consequence of capacity failure. Critical Systems shall receive the highest level of attention and the most conservative headroom buffers.

**5.4 Evidence-Based Decision Making**
All capacity assessments, gap analyses, and provisioning decisions shall be based on measured data, not assumptions. Monitoring tools shall provide accurate, near-real-time utilization data to support evidence-based planning.

**5.5 Defined Headroom Standards**
[Organization Name] shall maintain minimum capacity headroom buffers for all production systems, as defined in **Section 9 — Capacity Thresholds**. Headroom buffers ensure that unexpected demand spikes or resource failures do not immediately result in service degradation.

**5.6 Documentation and Audit Trail**
All capacity planning activities, assessments, decisions, and remediation actions shall be documented and retained in accordance with [Organization Name]'s records retention policy. Documentation shall be sufficient to satisfy regulatory examination and internal audit requirements.

**5.7 Continuous Improvement**
Capacity planning processes shall be reviewed quarterly and updated to reflect lessons learned, changes in technology, and evolving business requirements.

---

## 6. Process Flow — Capacity Planning Lifecycle

*This section describes the end-to-end capacity planning process. Each subsection represents a distinct phase in the lifecycle, with clearly defined inputs, activities, outputs, and responsibilities.*

### Capacity Planning Lifecycle Overview

```
[Demand Forecasting] → [Capacity Assessment & Baselining] → [Gap Analysis]
        ↑                                                          ↓
[Quarterly Review] ← [Continuous Monitoring & Alerting] ← [Provisioning & Implementation]
```

---

### 6.1 Capacity Demand Forecasting

*This phase captures the anticipated future demand for technology resources. Forecasts must be grounded in business plans and quantitative trend analysis, not estimates.*

**Trigger:** Quarterly planning cycle initiation OR significant business event (e.g., new product launch, merger, regulatory change).

**Responsible Party:** IT Operations — Capacity Analyst / Infrastructure Lead

#### 6.1.1 Inputs

| Input | Source | Frequency |
|---|---|---|
| Business growth projections | Business Units / Strategy | Annually (updated quarterly) |
| Transaction volume forecasts | Operations / Finance | Quarterly |
| Planned technology changes | Project Portfolio / Architecture | Quarterly |
| Seasonal demand patterns (historical) | Monitoring systems | Historical analysis |
| Contracted SLA requirements | Vendor / Service catalogues | As-needed |
| DR/BCP capacity requirements | BCM team | Annually (reviewed quarterly) |

#### 6.1.2 Activities

1. **Obtain business demand inputs:** The Capacity Analyst shall engage with relevant Business Unit representatives to obtain planned business growth, new initiatives, and any anticipated changes in transaction volumes or user numbers for the next 12 months.

2. **Analyse historical utilization trends:** Extract utilization data from monitoring systems for the preceding [12 months / as applicable]. Identify seasonal patterns, growth trends, and anomalies.

3. **Apply forecasting methodology:** Apply the approved forecasting methodology (see Appendix A) to project future resource consumption. Forecasting shall be performed for:
   - 3-month horizon (operational planning)
   - 12-month horizon (budgetary and procurement planning)
   - 24-month horizon (strategic infrastructure planning)

4. **Adjust for planned changes:** Incorporate the impact of known planned changes (new systems, decommissions, major projects, regulatory compliance initiatives) into the demand forecast.

5. **Document forecast:** Record all assumptions, data sources, and projections in the Capacity Demand Forecast report (see **Appendix B — Capacity Demand Forecast Template**).

#### 6.1.3 Outputs

| Output | Format | Owner | Distribution |
|---|---|---|---|
| Capacity Demand Forecast Report | [Template Reference] | Infrastructure Lead | IT Management, IT Risk |
| Updated Capacity Planning Register | [System/Tool] | Capacity Analyst | IT Operations team |

---

### 6.2 Capacity Assessment and Baselining

*This phase establishes the current state of technology capacity and compares it against the demand forecast. Accurate baselining is essential for credible gap analysis.*

**Trigger:** Completion of Demand Forecasting phase OR quarterly review cycle.

**Responsible Party:** IT Operations — Infrastructure Team

#### 6.2.1 Assessment Scope

The capacity assessment shall cover the following resource types across all in-scope systems:

| Resource Type | Metrics Collected | Assessment Tool |
|---|---|---|
| **CPU** | Utilization (%), frequency of peak utilization, saturation indicators | [Monitoring Tool] |
| **Memory (RAM)** | Utilization (%), swap usage, memory pressure indicators | [Monitoring Tool] |
| **Storage** | Used capacity, available capacity, IOPS, latency, growth rate | [Monitoring Tool] |
| **Network** | Bandwidth utilization (%), packet loss, latency, interface errors | [Monitoring Tool] |
| **Application Tier** | Transaction throughput, response time, concurrent sessions, queue depths | [APM Tool] |
| **Database** | Connection pool utilization, query execution times, tablespace growth | [DB Monitoring Tool] |
| **Backup and Recovery** | Backup job duration, backup data volume growth, restore test results | [Backup Tool] |

#### 6.2.2 Baselining Procedure

1. Extract [30-day / 90-day] utilization data from monitoring systems for each resource type listed above.
2. Calculate baseline metrics:
   - **Average utilization** (daily, weekly, monthly)
   - **Peak utilization** (intraday, daily, weekly, monthly peaks)
   - **Utilization trend** (growth rate expressed as % per month)
   - **P95 / P99 utilization** (to capture near-peak conditions)
3. Validate data quality — flag and investigate any gaps, anomalies, or data collection failures.
4. Record baseline data in the Capacity Register (see **Appendix C — Capacity Register Template**).

#### 6.2.3 Capacity Register — Required Fields

| Field | Description |
|---|---|
| System / Component ID | Unique identifier linking to the CMDB |
| System Name | Descriptive name |
| Criticality Classification | Critical / High / Medium / Low |
| Resource Type | CPU / Memory / Storage / Network / Application / Database |
| Current Installed / Provisioned Capacity | Total capacity available |
| Average Utilization | % average over baseline period |
| Peak Utilization | Highest recorded utilization % |
| Growth Rate (Monthly) | % month-on-month growth trend |
| Projected Capacity Required (3M / 12M / 24M) | Forecast demand at horizon points |
| Available Headroom (%) | Installed capacity minus current utilization |
| Threshold Breach Risk | Green / Amber / Red |
| Last Assessment Date | Date of last data collection |
| Next Assessment Due | Date of next scheduled assessment |
| Owner | Accountable IT Operations team member |
| Notes | Any relevant context or qualifications |

---

### 6.3 Gap Analysis and Remediation Planning

*This phase identifies where current or projected capacity is insufficient relative to demand forecasts and defined thresholds. Every identified gap must have an assigned owner and a documented remediation plan.*

**Trigger:** Completion of Capacity Assessment, or when continuous monitoring triggers an Amber or Red threshold alert.

**Responsible Party:** Infrastructure Lead, with review by Head of IT Operations

#### 6.3.1 Gap Identification

A capacity gap is identified when any of the following conditions are met:

| Condition | Indicator |
|---|---|
| Current utilization exceeds the **Amber threshold** defined in Section 9 | Immediate gap — requires remediation planning |
| Projected utilization will exceed the **Amber threshold** within the **3-month horizon** | Near-term gap — requires remediation planning |
| Projected utilization will exceed the **Amber threshold** within the **12-month horizon** | Strategic gap — requires budget and procurement planning |
| System cannot meet defined SLA under peak load conditions | Performance gap — requires investigation |
| DR infrastructure cannot meet RTO/RPO requirements due to capacity constraints | DR capacity gap — requires urgent remediation |

#### 6.3.2 Remediation Options

For each identified gap, the following remediation options shall be evaluated:

| Option | Description | Typical Lead Time | Cost Implication |
|---|---|---|---|
| **Optimisation** | Improve utilization efficiency (e.g., workload balancing, query optimisation, compression) | Days – Weeks | Low |
| **On-premises Scaling** | Procure and deploy additional physical hardware | Weeks – Months | High capital |
| **Virtualisation Scaling** | Provision additional VM resources from existing hypervisor pool | Hours – Days | Low (if headroom exists) |
| **Cloud Burst / Elastic Scaling** | Leverage cloud elasticity for demand peaks | Hours | Variable (operational cost) |
| **Cloud Migration** | Migrate workload to cloud infrastructure | Months | Variable |
| **Decommission / Consolidation** | Remove unused systems to free capacity for critical workloads | Weeks | Cost saving |
| **Demand Management** | Work with Business Units to defer or modify demand | Weeks | Indirect |

#### 6.3.3 Remediation Plan Requirements

Each remediation plan shall document:

| Field | Requirement |
|---|---|
| Gap Reference ID | Unique identifier |
| System / Component | Affected system |
| Gap Description | Nature and severity of gap |
| Remediation Option Selected | Chosen approach with justification |
| Actions Required | Step-by-step remediation actions |
| Responsible Owner | Named individual accountable for delivery |
| Target Completion Date | Committed date for gap closure |
| Interim Mitigations | Controls in place while remediation is pending |
| Estimated Cost | Budget implication (if applicable) |
| Approval Required | Change request reference / management approval |
| Status | Open / In Progress / Closed |
| Closure Evidence | Date closed, evidence of resolution |

---

### 6.4 Capacity Provisioning and Implementation

*This phase governs the execution of approved remediation plans, ensuring that capacity changes are implemented in a controlled manner consistent with the Change Management Procedure.*

**Trigger:** Approved remediation plan requiring infrastructure change.

**Responsible Party:** IT Operations — Infrastructure Team

#### 6.4.1 Provisioning Process

All capacity provisioning activities that result in a change to production infrastructure must follow the **Change Management Procedure ([Doc ID])**. The following steps apply:

1. **Raise Change Request:** Raise a formal change request in the ITSM platform ([ITSM Tool Name]), referencing the capacity gap ID and remediation plan.

2. **Technical Assessment:** The Infrastructure Team shall document the technical implementation plan, including rollback procedures, within the change request.

3. **Risk Assessment:** The change shall be risk-assessed in accordance with the Change Management Procedure. Capacity changes for Critical Systems shall be treated as **Standard-High** or **Major** changes unless previously pre-approved as a standard change.

4. **Change Approval:** Obtain approval from the Change Advisory Board (CAB) or appropriate authority per the Change Management Procedure.

5. **Implementation:** Execute the provisioning change during the approved maintenance window. Monitor performance before, during, and after the change.

6. **Post-Implementation Validation:** Following implementation, verify that the capacity gap has been resolved by:
   - Confirming new utilization metrics reflect expected headroom.
   - Running performance benchmark tests where applicable.
   - Confirming SLA thresholds are met.

7. **Update Capacity Register:** Update the Capacity Register to reflect the new provisioned capacity, revised baseline, and gap closure.

8. **Close Remediation Plan:** Mark the remediation plan item as Closed with evidence of resolution.

#### 6.4.2 Emergency Capacity Provisioning

Where capacity saturation poses an immediate risk to service availability, the following expedited process applies:

1. Invoke the **Incident Management Procedure ([Doc ID])** and classify as a Priority 1 / Priority 2 incident as appropriate.
2. The Head of IT Operations may approve emergency capacity provisioning outside normal CAB cycle, using the Emergency Change process defined in the Change Management Procedure.
3. All emergency capacity changes must be retrospectively reviewed at the next CAB meeting.
4. A post-incident review shall be conducted to identify the root cause and prevent recurrence.

---

### 6.5 Continuous Monitoring and Alerting

*Continuous monitoring is the primary mechanism for detecting emerging capacity issues between formal quarterly reviews. Monitoring must be automated, threshold-driven, and linked to defined escalation procedures.*

**Responsible Party:** IT Operations — Infrastructure Monitoring Team

#### 6.5.1 Monitoring Requirements

| Requirement | Standard |
|---|---|
| **Monitoring Coverage** | 100% of in-scope production systems must have automated capacity monitoring configured |
| **Data Collection Frequency** | Not less than every [5 minutes] for Critical Systems; [15 minutes] for other production systems |
| **Metric Retention** | Raw monitoring data retained for a minimum of [12 months] for trend analysis |
| **Alerting** | Automated alerts must be configured for Amber and Red threshold breaches (see Section 9) |
| **Alert Routing** | Alerts must be routed to the appropriate on-call team and logged in the ITSM platform |
| **Dashboard Availability** | A capacity monitoring dashboard must be available to IT Operations and IT Management at all times |

#### 6.5.2 Monitoring Tool Configuration

*Document the approved monitoring tools and their configuration standards for each infrastructure layer.*

| Infrastructure Layer | Monitoring Tool | Alert Configuration | Dashboard Location |
|---|---|---|---|
| Server / VM (CPU, RAM) | [Tool Name] | [Configuration Reference] | [Dashboard URL / Location] |
| Storage | [Tool Name] | [Configuration Reference] | [Dashboard URL / Location] |
| Network | [Tool Name] | [Configuration Reference] | [Dashboard URL / Location] |
| Application Performance | [Tool Name] | [Configuration Reference] | [Dashboard URL / Location] |
| Database | [Tool Name] | [Configuration Reference] | [Dashboard URL / Location] |
| Cloud Infrastructure | [Tool Name] | [Configuration Reference] | [Dashboard URL / Location] |
| Backup | [Tool Name] | [Configuration Reference] | [Dashboard URL / Location] |

#### 6.5.3 Alert Response Procedure

Upon receipt of a capacity threshold alert:

1. **Acknowledge alert** in the monitoring platform within [15 minutes] for Red alerts; [1 hour] for Amber alerts during business hours.
2. **Investigate** the affected resource to confirm the alert is genuine (not a monitoring anomaly or false positive).
3. **Assess impact:** Determine whether the alert represents an immediate service impact or a forward risk.
4. **Escalate** per the escalation matrix defined in **Section 9**.
5. **Log** the alert and investigation outcome in the ITSM platform.
6. **Initiate remediation** per Section 6.3 if the gap is confirmed.

---

### 6.6 Quarterly Review and Reporting

*The quarterly review ensures that capacity planning remains current, aligned with business plans, and compliant with BNM RMiT Clause 10.16 documentation requirements.*

**Trigger:** End of each calendar quarter (January, April, July, October).

**Responsible Party:** Head of IT Operations (chairs review); Infrastructure Lead (prepares materials).

#### 6.6.1 Quarterly Review Agenda

| Agenda Item | Description | Presenter |
|---|---|---|
| 1. Previous Quarter Capacity Performance | Review of capacity utilization trends vs. targets; incidents attributable to capacity | Infrastructure Lead |
| 2. Open Remediation Plans Status | Status update on all open gap remediation items | Capacity Analyst |
| 3. Capacity Register Review | Full review of the Capacity Register for all Critical and High systems | Infrastructure Lead |
| 4. Updated Demand Forecast | Present updated 3M / 12M / 24M demand forecasts incorporating latest business inputs | Capacity Analyst |
| 5. New Gap Identification | Present newly identified gaps from the current quarter's assessment | Infrastructure Lead |
| 6. Upcoming Planned Changes | Review of planned projects or changes that may impact capacity in the next quarter | IT Architecture / Project Team |
| 7. Budget and Procurement Review | Review of capacity-related budget requirements and procurement pipeline | Head of IT Operations |
| 8. Action Items and Owners | Capture and assign action items arising from the review | Head of IT Operations |

#### 6.6.2 Quarterly Capacity Review Report

Following each quarterly review, the Head of IT Operations shall produce a **Quarterly Capacity Review Report** for submission to [IT Steering Committee / CTO / CRO] within [10 business days] of the review meeting. The report shall include:

- Executive summary of capacity status across all critical systems
- Utilization heat map / dashboard snapshot
- Summary of open and closed gap remediation items
- Forward-looking demand forecast summary
- Budget implications and recommendations
- Compliance attestation statement (confirming this procedure has been followed)

The Quarterly Capacity Review Report shall be retained as a regulatory compliance record for a minimum of **[5 years / as per records retention policy]**.

---

## 7. Roles and Responsibilities (RACI)

*This section defines accountability for all capacity planning activities. The RACI matrix must reflect actual organizational roles. Update role titles to match [Organization Name]'s structure before publishing.*

**RACI Key:**
- **R** = Responsible (does the work)
- **A** = Accountable (owns the outcome; only one A per activity)
- **C** = Consulted (provides input before/during)
- **I** = Informed (notified of outcomes)

### 7.1 RACI Matrix

| Activity | Head of IT Operations | Infrastructure Lead | Capacity Analyst | IT Risk & Governance | Business Units | CTO / CIO | Internal Audit | Third-Party MSP |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Demand Forecasting — Obtain Business Inputs** | A | C | R | I | C | I | — | — |
| **Demand Forecasting — Trend Analysis** | A | C | R | I | — | I | — | I |
| **Capacity Baselining — Data Collection** | A | R | R | I | — | — | — | R (for MSP-managed systems) |
| **Capacity Baselining — Capacity Register Update** | A | C | R | I | — | — | — | — |
| **Gap Analysis — Identification** | A | R | R | C | — | I | — | — |
| **Gap Analysis — Remediation Plan Development** | A | R | C | C | C | I | — | C |
| **Remediation Plan — Approval (Standard)** | A | — | — | C | — | I | — | — |
| **Remediation Plan — Approval (Significant Cost)** | C | — | — | C | — | A | — | — |
| **Capacity Provisioning — Change Request** | A | R | — | I | — | I | I | R (if MSP) |
| **Capacity Provisioning — Implementation** | A | R | — | I | — | I | — | R (if MSP) |
| **Continuous Monitoring — Tool Configuration** | A | R | C | I | — | — | — | R (if MSP) |
| **Continuous Monitoring — Alert Response** | A | R | R | I | — | I | — | R (if MSP) |
| **Threshold Breach Escalation** | A | R | R | C | — | I | — | R (if MSP) |
| **Quarterly Review — Preparation** | A | R | R | C | C | I | I | I |
| **Quarterly Review — Chairing** | A | — | — | — | — | C | — | — |
| **Quarterly Review Report — Production** | A | R | C | C | — | I | I | — |
| **Quarterly Review Report — Submission to Management** | R | — | — | — | — | A | I | — |
| **Procedure Review and Update** | A | R | C | C | — | I | I | — |
| **Regulatory Compliance Attestation** | R | C | — | C | — | A | I | — |
| **Evidence Retention for Audit** | A | R | R | C | — | — | I | — |

### 7.2 Role Descriptions

| Role | Capacity Planning Responsibilities |
|---|---|
| **Head of IT Operations** | Owns this procedure. Accountable for all capacity planning activities. Chairs quarterly reviews. Signs off on the quarterly report. Approves remediation plans. Escalates significant capacity risks to senior management. |
| **Infrastructure Lead** | Day-to-day management of the capacity planning lifecycle. Prepares assessment reports, gap analyses, and remediation plans. Manages the Capacity Register. Presents at quarterly reviews. |
| **Capacity Analyst** | Collects and analyses monitoring data. Maintains the Capacity Register. Produces demand forecasts. Monitors alerts and escalates as required. Supports all reporting activities. |
| **IT Risk & Governance** | Reviews capacity planning outputs from a risk perspective. Ensures alignment with the IT Risk Management Policy and BNM RMiT obligations. Maintains regulatory reporting records. |
| **Business Units** | Provide business demand inputs (growth plans, new initiatives, volume forecasts) to inform capacity planning. Participate in quarterly review as required. |
| **CTO / CIO** | Receives quarterly capacity review reports. Approves significant capacity investment decisions. Accountable for overall technology resilience at executive level. |
| **Internal Audit** | Periodically audits compliance with this procedure. Reviews evidence retained for regulatory purposes. Reports findings to the Audit Committee. |
| **Third-Party MSP** | Where applicable, responsible for collecting and reporting capacity data for managed systems. Participates in remediation planning. Must adhere to this procedure's requirements as specified in contractual obligations. |

---

## 8. Tools and Systems

*This section documents the approved tools used to support capacity planning. Keeping this current is important for audit evidence — regulators may ask to verify that monitoring is genuinely automated and comprehensive.*

### 8.1 Approved Capacity Planning Tools

| Tool Name | Version | Purpose | Infrastructure Scope | Owner | Access Control |
|---|---|---|---|---|---|
| [Monitoring Tool — e.g., Zabbix, PRTG, Datadog] | [Version] | Infrastructure monitoring, alerting, dashboards | Servers, VMs, Network | IT Operations | [Access control reference] |
| [APM Tool — e.g., Dynatrace, New Relic] | [Version] | Application performance monitoring | Application tier | IT Operations / App Team | [Access control reference] |
| [DB Monitoring Tool] | [Version] | Database capacity and performance monitoring | Database tier | DBA Team | [Access control reference] |
| [Cloud Monitoring Tool — e.g., AWS CloudWatch, Azure Monitor] | [Version] | Cloud infrastructure capacity monitoring | Cloud environments | IT Operations | [Access control reference] |
| [Backup Monitoring Tool] | [Version] | Backup job monitoring and capacity tracking | Backup infrastructure | IT Operations | [Access control reference] |
| [ITSM Platform — e.g., ServiceNow, Jira Service Management] | [Version] | Change requests, incident logging, remediation tracking | All | IT Operations | [Access control reference] |
| [Capacity Planning / Reporting Tool] | [Version] | Trend analysis, forecasting, report generation | All | IT Operations | [Access control reference] |
| [CMDB Tool] | [Version] | Asset registry, configuration data | All | IT Operations | [Access control reference] |

### 8.2 Tool Maintenance Requirements

| Requirement | Standard |
|---|---|
| Monitoring agent coverage | 100% of in-scope production systems |
| Monitoring tool availability SLA | [99.9%] — monitoring tools are themselves subject to capacity management |
| Tool version management | Patched and updated per the [Patch Management Procedure] |
| Tool access review | Quarterly, or upon personnel change |
| Monitoring configuration review | Quarterly, as part of the capacity review cycle |

### 8.3 Data and Reporting Repository

All capacity planning records, including the Capacity Register, Demand Forecasts, Gap Analysis Reports, Remediation Plans, and Quarterly Review Reports, shall be stored in:

| Repository | Location | Access | Retention Period |
|---|---|---|---|
| Capacity Planning SharePoint / Document Repository | [Location] | IT Operations, IT Risk, Management | [5 years minimum] |
| ITSM Platform (change and incident records) | [Location] | IT Operations | [5 years minimum] |
| Monitoring System (raw metrics data) | [Location] | IT Operations | [12 months minimum for raw data] |

---

## 9. Capacity Thresholds and Escalation Procedures

*Threshold definitions are critical for demonstrating a systematic, risk-based approach to capacity management. Thresholds must be documented, consistently applied, and reviewed regularly.*

### 9.1 Standard Capacity Thresholds

The following thresholds apply to all in-scope production systems. Thresholds for individual systems may be set more conservatively based on criticality or known performance characteristics and shall be documented in the Capacity Register.

| Resource Type | Green (Normal) | Amber (Warning — Action Required) | Red (Critical — Immediate Action) |
|---|---|---|---|
| **CPU Utilization** (sustained average, 5-min) | < 70% | 70% – 85% | > 85% |
| **CPU Utilization** (peak, Critical Systems) | < 60% | 60% – 75% | > 75% |
| **Memory Utilization** | < 75% | 75% – 88% | > 88% |
| **Storage Utilization** | < 70% | 70% – 85% | > 85% |
| **Storage IOPS** (% of provisioned capacity) | < 65% | 65% – 80% | > 80% |
| **Network Bandwidth** (% of provisioned capacity) | < 60% | 60% – 80% | > 80% |
| **Application Response Time** (vs. SLA baseline) | < 80% of SLA threshold | 80% – 95% of SLA threshold | Exceeds SLA threshold |
| **Database Connection Pool** | < 70% | 70% – 85% | > 85% |
| **Backup Window Overrun** | Completes within window | Within [110%] of window | Exceeds window by > 10% |

> **Note:** Thresholds are based on sustained utilization over the monitoring interval (typically 5 minutes). Brief spikes that resolve within one measurement interval shall be recorded but may not require immediate escalation. Patterns of recurring spikes shall be treated as Amber conditions.

### 9.2 Headroom Standards

| System Criticality | Minimum Required Headroom | Rationale |
|---|---|---|
| **Critical Systems** | ≥ 40% of provisioned capacity | Absorb 3x normal peak demand during incident or failure scenarios |
| **High Criticality Systems** | ≥ 30% of provisioned capacity | Absorb significant demand spikes |
| **Medium Criticality Systems** | ≥ 20% of provisioned capacity | Standard operational buffer |
| **Low Criticality Systems** | ≥ 10% of provisioned capacity | Minimum administrative buffer |

### 9.3 Escalation Matrix

| Alert Level | Response Time | Initial Responder | Escalation (if unresolved after…) | Escalation Target | Management Notification |
|---|---|---|---|---|---|
| **Amber** (Business Hours) | Within 1 hour | Capacity Analyst / On-Call IT Ops | 4 hours | Infrastructure Lead | Infrastructure Lead to notify Head of IT Operations |
| **Amber** (Outside Business Hours) | Within 2 hours (next business day if non-critical) | On-Call IT Ops | Next business day | Infrastructure Lead | Infrastructure Lead to notify Head of IT Operations at start of business day |
| **Red** (Any Time) | Within 15 minutes | On-Call IT Ops / Capacity Analyst | 1 hour | Infrastructure Lead | Immediate notification to Head of IT Operations |
| **Red — Critical System** (Any Time) | Within 15 minutes | On-Call IT Ops + Infrastructure Lead (simultaneous) | 30 minutes | Head of IT Operations | Head of IT Operations to notify CTO/CIO immediately |
| **Service Impact Confirmed** | Invoke Incident Management Procedure | Incident Manager | Per Incident Mgmt Procedure | Per Incident Mgmt Procedure | Per Incident Mgmt Procedure |

### 9.4 Escalation Contact List

*Maintain an up-to-date escalation contact list. This must be reviewed quarterly and updated immediately upon personnel changes.*

| Role | Name | Primary Contact | Secondary Contact | Out-of-Hours? |
|---|---|---|---|---|
| Capacity Analyst (On-Call) | [Name] | [Phone / Pager] | [Email] | Yes |
| Infrastructure Lead | [Name] | [Phone] | [Email] | Yes |
| Head of IT Operations | [Name] | [Phone] | [Email] | Yes — for Critical Systems only |
| CTO / CIO | [Name] | [Phone] | [Email] | Yes — for Red / Critical System alerts only |
| IT Risk Manager | [Name] | [Phone] | [Email] | No — business hours only |
| [Third-Party MSP On-Call] | [Name / Service Desk] | [Phone / Ticket Portal] | [Email] | Per SLA |

---

## 10. Capacity Planning for Critical Systems

*Critical Systems require a heightened level of capacity management attention. This section defines the additional requirements applicable to systems classified as Critical under [Organization Name]'s system criticality framework.*

### 10.1 Critical System Identification

Systems classified as **Critical** for capacity planning purposes are those that appear on [Organization Name]'s **Critical System Register ([Reference])**, which includes but is not limited to:

| System Category | Examples |
|---|---|
| Core Banking Platform | [System Name] |
| Payment Processing | [System Name] |
| Internet / Mobile Banking | [System Name] |
| ATM / POS Processing | [System Name] |
| Treasury Management System | [System Name] |
| Regulatory Reporting Systems | [System Name] |
| Identity and Access Management | [System Name] |
| [Other critical systems as applicable] | |

### 10.2 Additional Requirements for Critical Systems

| Requirement | Standard | Frequency |
|---|---|---|
| Capacity monitoring frequency | Minimum every [5 minutes] | Continuous |
| Dedicated capacity assessment | Separate detailed assessment, not aggregated | Monthly |
| Minimum headroom | ≥ 40% of provisioned capacity | Maintained continuously |
| Capacity stress testing | Simulate peak load and failure scenarios | [Bi-annually / As per BCP test calendar] |
| DR capacity validation | Confirm DR infrastructure can meet RTO/RPO under capacity constraints | [Annually / Per BCM test cycle] |
| Escalation response time (Red) | 15 minutes — Infrastructure Lead notified simultaneously with on-call | Immediately upon alert |
| Executive reporting | Critical System capacity status included in quarterly report to CTO/CIO | Quarterly |

### 10.3 Peak Period Preparation

For known peak periods (e.g., salary crediting cycles, festive seasons, regulatory reporting deadlines, major product launches), the following advance preparation steps shall be completed:

1. Identify upcoming peak periods at least **[4 weeks] in advance**.
2. Review current capacity headroom against expected peak demand forecast.
3. Pre-provision additional capacity where forecasts indicate potential threshold breaches.
4. Increase monitoring alert sensitivity during the peak period (reduce Amber threshold by [10%]).
5. Ensure on-call coverage is confirmed for the peak period.
6. Conduct a post-peak review within [5 business days] to capture lessons learned.

---

## 11. Cloud and Hybrid Infrastructure Considerations

*As [Organization Name] operates or transitions to cloud or hybrid infrastructure environments, capacity planning must account for the distinct characteristics of elastic cloud resources, including auto-scaling, cost management, and vendor dependency.*

### 11.1 Cloud Capacity Planning Principles

| Principle | Application |
|---|---|
| **Elasticity is not a substitute for planning** | Auto-scaling capabilities do not remove the obligation to plan and forecast capacity. Over-reliance on auto-scaling without cost governance can result in unexpected expenditure. |
| **Cost is a capacity constraint** | In cloud environments, budget limits may function as a de facto capacity constraint. Cost thresholds shall be incorporated into cloud capacity monitoring alongside technical utilization metrics. |
| **Vendor concentration risk** | Where critical systems depend on a single cloud provider region or availability zone, concentration risk shall be assessed and mitigated. |
| **Shared responsibility** | In IaaS / PaaS environments, [Organization Name] retains responsibility for application-tier capacity management even where infrastructure management is delegated to the provider. |

### 11.2 Cloud Capacity Controls

| Control | Description |
|---|---|
| **Auto-scaling configuration review** | Auto-scaling policies (minimum, maximum, and target instances/resources) shall be reviewed quarterly as part of the capacity review cycle. |
| **Budget alerts** | Cloud cost budgets and alerts shall be configured at [80%] and [100%] of monthly budget for each cloud environment. |
| **Reserved / committed capacity** | For predictable baseline workloads, reserved or committed capacity contracts shall be used to ensure availability and cost efficiency. |
| **Quota monitoring** | Cloud service quotas (e.g., vCPU limits, API rate limits) shall be monitored and requests for quota increases submitted proactively. |
| **Multi-region / failover capacity** | Failover capacity in secondary regions shall be validated to confirm it can absorb production workloads within RTO. |

### 11.3 Third-Party and Outsourced Capacity Management

Where technology capacity management is performed in whole or in part by a third-party service provider or MSP, the following requirements shall apply:

| Requirement | Standard |
|---|---|
| Contractual obligation | The MSP contract must include capacity management obligations aligned with this procedure. |
| Reporting | The MSP must provide capacity utilization reports at the frequency specified in the service contract, and no less than monthly for production systems. |
| Threshold alignment | MSP-managed systems must adhere to the same capacity thresholds defined in Section 9. |
| Audit right | [Organization Name] retains the right to audit MSP capacity management practices, with notice as per the contract. |
| Escalation integration | MSP escalation contacts must be included in the escalation contact list (Section 9.4) and tested quarterly. |
| Regulatory compliance | MSPs must support [Organization Name]'s compliance obligations under BNM RMiT and cooperate with regulatory examinations as required. |

---

## 12. Performance Benchmarks and KPIs

*Key performance indicators provide measurable evidence that the capacity planning process is operating effectively. These metrics shall be reported in the quarterly review.*

### 12.1 Capacity Planning KPIs

| KPI | Description | Target | Measurement Source | Reporting Frequency |
|---|---|---|---|---|
| **Capacity Coverage** | % of in-scope production systems with active capacity monitoring configured | 100% | Monitoring tool inventory | Monthly |
| **Threshold Breach Rate — Red** | Number of Red threshold breach events per quarter (Critical Systems) | Zero | Monitoring alerts log | Quarterly |
| **Threshold Breach Rate — Amber** | Number of Amber threshold breach events per quarter (Critical Systems) | < [X] per quarter | Monitoring alerts log | Quarterly |
| **Remediation Plan Closure Rate** | % of open remediation plans closed within target completion date | ≥ 90% | ITSM platform | Quarterly |
| **Headroom Compliance** | % of Critical Systems meeting minimum headroom standards | 100% | Capacity Register | Quarterly |
| **Forecast Accuracy** | Variance between 3-month capacity forecast and actual utilization | ± [15%] | Capacity Register vs. monitoring data | Quarterly |
| **Quarterly Review Completion** | Quarterly capacity review conducted within schedule | 100% (on time) | Meeting records | Quarterly |
| **Capacity-Related Incidents** | Number of IT incidents attributable to capacity failure | Zero (Critical Systems) | ITSM incident log | Monthly |
| **Alert Response Compliance** | % of capacity alerts acknowledged within defined response time (Section 9.3) | ≥ 95% | Monitoring / ITSM logs | Monthly |
| **Capacity Register Currency** | % of Capacity Register entries updated within the last [90 days] | 100% | Capacity Register | Quarterly |

### 12.2 Management Reporting

Capacity planning KPI performance shall be included in the following management reporting:

| Report | Audience | Frequency | Responsible |
|---|---|---|---|
| Quarterly Capacity Review Report | CTO/CIO, IT Steering Committee | Quarterly | Head of IT Operations |
| IT Operational Risk Dashboard | IT Risk Committee, CRO | Monthly | IT Risk & Governance |
| BNM RMiT Compliance Report | Board Risk Committee, BNM (if requested) | Annually (or on demand) | IT Risk & Governance / Compliance |

---

## 13. Exceptions and Deviations

*A formal exception process ensures that deviations from this procedure are controlled, documented, and approved — and are not a mechanism for bypassing regulatory obligations.*

### 13.1 Exception Process

Where it is not operationally feasible to comply with a specific requirement of this procedure, a formal exception must be raised:

1. **Document the exception** using the Exception Request form (**Appendix D**), stating:
   - The specific requirement that cannot be met
   - The business or technical reason for the exception
   - The risk implications of non-compliance
   - Proposed compensating controls
   - Requested exception duration

2. **Review and approval:** Exceptions must be reviewed by the **IT Risk & Governance** team and approved by the **Head of IT Operations**. Exceptions affecting Critical Systems must be additionally approved by the **CTO / CIO**.

3. **Time-limited:** All exceptions are time-limited to a maximum of **[90 days]** unless a renewal is specifically approved.

4. **Register:** All approved exceptions must be recorded in the **Exceptions Register** maintained by IT Risk & Governance.

5. **Regulatory notification:** Where an exception relates to a requirement directly mandated by BNM RMiT, the exception must be reported to the relevant regulatory compliance function for assessment of regulatory disclosure obligations.

### 13.2 Exceptions Register

| Exception ID | Requirement Ref | System / Scope | Reason | Compensating Controls | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| [EXC-001] | [Section / Clause] | [System] | [Reason] | [Controls] | [Name] | [Date] | [Date] | Open / Closed |

---

## 14. Review and Approval

### 14.1 Procedure Review Schedule

This procedure shall be reviewed:

- **Annually** as a scheduled review
- **Continuously** in response to monitoring alerts, and as part of the quarterly review cycle
- **Ad hoc** following:
  - A capacity-related IT incident
  - A significant change to technology architecture or infrastructure
  - An update to BNM RMiT or related regulatory requirements
  - An internal or external audit finding related to capacity management
  - A material change to business operations that affects capacity demand

### 14.2 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Role] | Initial version — document created | [Approver Name] |
| [1.1] | [Date] | [Author Name], [Role] | [Description of changes] | [Approver Name] |
| [2.0] | [Date] | [Author Name], [Role] | [Description of changes] | [Approver Name] |

### 14.3 Approval Sign-Off

*This document requires formal sign-off from the following roles prior to publication and upon each reviewed version.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Document Owner** — Head of IT Operations | [Name] | _________________ | [Date] |
| **Reviewer** — IT Risk & Governance Manager | [Name] | _________________ | [Date] |
| **Reviewer** — Infrastructure Lead | [Name] | _________________ | [Date] |
| **Approver** — CTO / CIO | [Name] | _________________ | [Date] |
| **Acknowledgement** — Internal Audit | [Name] | _________________ | [Date] |

---

## 15. References

*All references cited in this document are listed below for traceability and audit purposes.*

### 15.1 Regulatory References

| Reference | Title | Issuing Authority | Version / Date | Clause(s) Referenced |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Issue Date / Version] | Clause 10.16 (primary); 10.1; 10.4 |
| BNM BCM | Business Continuity Management | Bank Negara Malaysia | [Issue Date / Version] | [Relevant clauses] |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | 2010 (as amended) | [Relevant sections, if applicable] |
| [NACSA Reference] | [Cybersecurity Framework / Guideline] | NACSA | [Version] | [Relevant sections, if applicable] |

### 15.2 Internal Documents

| Document | Document ID | Version | Relationship |
|---|---|---|---|
| IT Risk Management Policy | [Doc ID] | [Version] | Parent policy |
| Technology Infrastructure Policy | [Doc ID] | [Version] | Supporting policy |
| Change Management Procedure | [Doc ID] | [Version] | Referenced in Section 6.4 |
| Incident Management Procedure | [Doc ID] | [Version] | Referenced in Sections 6.4, 6.5 |
| Business Continuity Plan | [Doc ID] | [Version] | Referenced in Section 10 |
| Vendor / Third-Party Management Procedure | [Doc ID] | [Version] | Referenced in Section 11.3 |
| Critical System Register | [Doc ID] | [Version] | Referenced in Section 10 |
| Records Retention Policy | [Doc ID] | [Version] | Referenced in Section 8.3 |

### 15.3 Standards and Frameworks

| Standard | Title | Relevance |
|---|---|---|
| ISO/IEC 20000-1:2018 | IT Service Management | Capacity and availability management practice |
| ISO/IEC 27001:2022 | Information Security Management | Annex A.8.6 — Capacity management |
| ITIL 4 | Capacity and Performance Management Practice | Best practice process guidance |
| COBIT 2019 | BAI04 — Manage Availability and Capacity | Governance and management framework alignment |

---

## 16. Appendices

### Appendix A — Capacity Demand Forecasting Methodology

*This appendix describes the approved quantitative methodology for projecting future capacity demand. Authors should document the specific models and assumptions approved for use at [Organization Name].*

**A.1 Forecasting Approach**

[Organization Name] shall use the following forecasting methodologies, applied based on the data available and the planning horizon:

| Methodology | Applicable Horizon | When Used |
|---|---|---|
| **Linear Trend Extrapolation** | 3-month, 12-month | Stable, consistent growth trends |
| **Seasonal Decomposition** | 12-month | Systems with clear seasonal demand patterns |
| **Business-Driven Projection** | 12-month, 24-month | Growth driven by known business plans (e.g., new product, customer acquisition targets) |
| **Scenario-Based Planning** | 24-month | Strategic planning; accounts for multiple business growth scenarios |

**A.2 Forecasting Assumptions**

All forecasting shall document assumptions, including:

- Baseline period used (e.g., trailing 12 months)
- Business growth rate assumed (source and reference)
- Seasonal adjustment factors applied
- Any anomalies excluded from the baseline (e.g., one-time events)
- Confidence interval for the forecast

**A.3 Forecast Validation**

Each quarterly review shall include a retrospective validation of the previous quarter's forecast against actual utilization. Significant variances (> [15%]) shall trigger a review of the forecasting methodology and assumptions.

---

### Appendix B — Capacity Demand Forecast Report Template

*Complete one report per planning cycle (quarterly). Archive all completed reports per the records retention policy.*

| Field | Content |
|---|---|
| **Report Reference** | [CPF-YYYY-QN] |
| **Prepared By** | [Name, Role] |
| **Date Prepared** | [Date] |
| **Planning Period** | [Quarter / Year] |
| **Distribution** | [Head of IT Ops, IT Risk, CTO/CIO] |

**Section 1 — Business Demand Inputs**

*[Summarise business growth projections, new initiatives, and volume forecasts provided by Business Units.]*

| Business Unit | Growth Assumption | New Initiatives | Impact on IT Capacity |
|---|---|---|---|
| [Business Unit] | [e.g., +10% transaction volumes] | [e.g., Launch of [Product]] | [e.g., +15% on Payment Processing CPU] |

**Section 2 — Historical Trend Summary**

*[Summarise utilization growth trends from the baseline period for each critical resource.]*

**Section 3 — Capacity Projections**

| System | Resource | Current Utilization | 3M Forecast | 12M Forecast | 24M Forecast | Threshold Breach Risk |
|---|---|---|---|---|---|---|
| [System Name] | CPU | [X%] | [X%] | [X%] | [X%] | Green / Amber / Red |

**Section 4 — Identified Gaps and Recommended Actions**

*[List all projected gaps and recommended remediation actions, with priority and estimated timelines.]*

---

### Appendix C — Capacity Register Template

*The Capacity Register is a living document updated continuously through monitoring and formally reviewed quarterly. It is a primary compliance artifact under BNM RMiT Clause 10.16.*

| Field | [System 1] | [System 2] | [System N] |
|---|---|---|---|
| System / Component ID | | | |
| System Name | | | |
| Environment | Production / DR / Other | | |
| Criticality | Critical / High / Medium / Low | | |
| Resource Type | CPU / RAM / Storage / Network | | |
| Provisioned Capacity | | | |
| Avg Utilization (last 30 days) | | | |
| Peak Utilization (last 30 days) | | | |
| P95 Utilization | | | |
| Monthly Growth Rate | | | |
| 3M Forecast Utilization | | | |
| 12M Forecast Utilization | | | |
| Headroom (%) | | | |
| Threshold Status | Green / Amber / Red | | |
| Open Remediation Plans | | | |
| Last Assessment Date | | | |
| Next Assessment Due | | | |
| Owner | | | |
| Notes | | | |

---

### Appendix D — Capacity Planning Exception Request Form

*Complete this form for any deviation from the requirements of this procedure. Submit to IT Risk & Governance for review and approval.*

| Field | Content |
|---|---|
| **Exception Reference** | [EXC-YYYY-NNN] |
| **Date of Request** | [Date] |
| **Requested By** | [Name, Role] |
| **Affected System(s)** | [System Name / Scope] |
| **Procedure Requirement** | Cite the specific section/requirement that cannot be met |
| **Reason for Exception** | Provide full explanation of the technical or business constraint |
| **Risk Assessment** | Describe the risk implications of the exception — likelihood and potential impact |
| **Compensating Controls** | Detail controls that will partially mitigate the risk during the exception period |
| **Requested Duration** | From [Date] to [Date] (maximum 90 days) |
| **Review Plan** | What actions will be taken to resolve the underlying issue and close the exception? |
| **IT Risk Review** | [Reviewer Name, Date, Recommendation] |
| **Approval Decision** | Approved / Rejected / Approved with Conditions |
| **Approver** | [Name, Role, Date] |
| **Conditions (if any)** | [List any conditions attached to approval] |
| **Closure Date** | [Date exception was closed] |
| **Closure Evidence** | [Description of how the exception was resolved] |

---

### Appendix E — Quarterly Capacity Review Report Template

*Complete this report following each quarterly review meeting and submit to IT management within [10 business days].*

| Field | Content |
|---|---|
| **Report Reference** | [QCR-YYYY-QN] |
| **Reporting Period** | [Quarter, Year] |
| **Review Date** | [Date of quarterly review meeting] |
| **Prepared By** | [Name, Role] |
| **Approved By** | Head of IT Operations |
| **Distribution** | CTO/CIO, IT Steering Committee, IT Risk & Governance |

**Section 1 — Executive Summary**

*[2–3 paragraph summary of overall capacity status, key risks, and material actions taken or planned.]*

**Section 2 — Capacity Status by System Tier**

| System | Criticality | CPU Status | Memory Status | Storage Status | Network Status | Overall Status | Open Gaps |
|---|---|---|---|---|---|---|---|
| [System] | Critical | Green | Green | Amber | Green | Amber | 1 |

**Section 3 — Remediation Plan Status**

| Gap ID | System | Description | Target Date | Status | Comments |
|---|---|---|---|---|---|
| [GAP-001] | [System] | [Description] | [Date] | In Progress | [Update] |

**Section 4 — KPI Performance**

*[Present KPI metrics from Section 12 for the reporting period. Include trend vs. prior quarter.]*

**Section 5 — Demand Forecast Update**

*[Summarise updated 3M and 12M forecasts and any material changes from prior quarter's forecast.]*

**Section 6 — Budget and Procurement Requirements**

*[Summarise any capacity-related expenditure required in the next quarter, with budget references.]*

**Section 7 — Compliance Attestation**

> I confirm that the Capacity Planning Procedure ([Document ID], Version [X.X]) has been followed during the reporting period. All known capacity gaps have been assessed and remediation plans are in place where required. This report constitutes the formal quarterly review record required under BNM RMiT Clause 10.16.
>
> **Signed:** _________________ **Name:** [Name] **Role:** Head of IT Operations **Date:** [Date]

---

### Appendix F — Glossary of Monitoring Metrics

*This appendix provides standard definitions for the monitoring metrics referenced in this procedure, to ensure consistent measurement and interpretation across tools and teams.*

| Metric | Definition | Unit | Notes |
|---|---|---|---|
| CPU Utilization | Percentage of CPU cycles consumed over a measurement interval | % | Measure at system/VM level; distinguish user vs. system vs. I/O wait |
| Memory Utilization | Percentage of total RAM in use (excluding OS file cache where applicable) | % | Define cache handling convention for consistency across platforms |
| Storage Utilization | Percentage of provisioned storage capacity consumed by data | % | Exclude reserved blocks; measure at volume/LUN level |
| IOPS | Number of I/O operations per second completed by a storage device or volume | ops/sec | Distinguish read vs. write IOPS for storage planning |
| Network Throughput | Volume of data transmitted over a network interface per unit time | Mbps / Gbps | Measure in both directions (ingress and egress) |
| Application Response Time | End-to-end time from request submission to response receipt at the client | ms | Define measurement point consistently (server-side vs. client-side) |
| Transaction Throughput | Number of business transactions processed per unit time | TPS (Transactions/sec) | Define "transaction" per system |
| Database Connection Pool Utilization | Percentage of available database connections in use at any point | % | Alert on sustained high utilization, not instantaneous peaks |
| Backup Duration | Elapsed time from backup job start to successful completion | Hours / Minutes | Compare against allocated backup window |
| Queue Depth | Number of requests or jobs waiting to be processed in a system queue | Count | Sustained high queue depths indicate saturation |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It is intended solely for authorized personnel of [Organization Name] and must not be disclosed to external parties without the written approval of the document owner. Printed copies are uncontrolled — always verify against the current version held in the document repository at [Repository Location].