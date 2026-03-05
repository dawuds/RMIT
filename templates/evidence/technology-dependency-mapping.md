# Technology Dependency Mapping

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head], [Department Name] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By], [Title] |
| **Regulatory Framework** | Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) |
| **Applicable Clause(s)** | RMiT 10.34 |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Scope and Applicability](#3-scope-and-applicability)
4. [Technology Dependency Mapping Process Flow](#4-technology-dependency-mapping-process-flow)
5. [Critical Business Processes](#5-critical-business-processes)
6. [Technology Services Inventory](#6-technology-services-inventory)
7. [Business Process to Technology Dependency Matrix](#7-business-process-to-technology-dependency-matrix)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Tools and Systems Used](#9-tools-and-systems-used)
10. [Escalation Procedures](#10-escalation-procedures)
11. [Monitoring and Continuous Review](#11-monitoring-and-continuous-review)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

*This section explains the intent of the document and the regulatory obligations it fulfills. Authors should clearly state why this document exists and what it governs.*

This document establishes the **Technology Dependency Mapping** for [Organization Name] in accordance with the Bank Negara Malaysia (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically Clause **10.34**. It provides a structured and auditable mapping between the institution's critical business processes and the underlying technology services, systems, and infrastructure upon which those processes depend.

The purpose of this mapping is to:

- Enable [Organization Name] to identify, assess, and manage technology risks associated with critical business operations.
- Support business continuity and disaster recovery planning by establishing clear dependencies between business functions and their technology enablers.
- Demonstrate compliance with BNM RMiT requirements for technology risk management and resilience.
- Facilitate impact analysis during technology incidents, changes, or third-party service disruptions.
- Provide a baseline for Technology Risk Assessments and Business Impact Analyses (BIA).

This document is **mandatory** and must be maintained as a living record, subject to continuous monitoring and formal quarterly review.

---

## 2. Regulatory Context

*Summarize the specific regulatory obligations that this document fulfills. Reference the exact clauses from the applicable frameworks to establish a clear audit trail.*

### 2.1 BNM RMiT Policy Document

[Organization Name] is subject to the **Bank Negara Malaysia Risk Management in Technology (RMiT)** Policy Document issued by BNM. The following clause directly mandates the maintenance of this artifact:

| Clause | Requirement Summary |
|---|---|
| **10.34** | A financial institution shall maintain an up-to-date mapping of critical business processes to the technology services supporting those processes, including identification of technology dependencies, single points of failure, and concentration risks. |

### 2.2 Related Regulatory Obligations

| Framework | Clause / Section | Relevance |
|---|---|---|
| BNM RMiT | 10.1 – 10.5 | Technology risk governance and accountability |
| BNM RMiT | 10.30 – 10.33 | Technology asset management and service categorization |
| BNM RMiT | 11.1 – 11.10 | Business continuity management for technology |
| BNM RMiT | 13.1 – 13.15 | Third-party risk management (where applicable to external technology services) |
| [Other applicable BNM policy, e.g., PDPA 2010] | [Section] | [Brief relevance description] |

---

## 3. Scope and Applicability

*Define the boundaries of this document. Specify which business units, systems, geographies, and entities are covered. Explicitly state what is excluded and why, to avoid ambiguity during audits.*

### 3.1 In-Scope

This Technology Dependency Mapping applies to:

- **Entities:** [Organization Name] and its [wholly-owned subsidiaries / branches / business units, as applicable]
- **Business Processes:** All critical business processes as defined in [Organization Name]'s Business Impact Analysis (BIA) [Document ID: BIA-XXXX] and classified as Tier 1 (Critical) or Tier 2 (Important)
- **Technology Services:** All technology services, platforms, applications, middleware, infrastructure components, and third-party services that directly support in-scope business processes
- **Environments:** Production environments; [staging/UAT environments where they support critical processes]
- **Delivery Models:** On-premises, cloud-hosted (IaaS, PaaS, SaaS), and hybrid deployments

### 3.2 Out of Scope

The following are explicitly excluded from this mapping:

- Development and test environments not connected to production critical processes
- [Other exclusions specific to the organization, e.g., legacy decommissioned systems]
- Business processes classified as Tier 3 (Non-critical) unless otherwise specified

### 3.3 Applicability Statement

*State which organizational roles or functions are required to comply with or contribute to this document.*

All department heads, technology owners, system owners, and process owners within [Organization Name] are required to:

1. Identify and declare technology dependencies for business processes under their ownership.
2. Notify the [Technology Risk / IT Governance] function of any changes to dependencies promptly.
3. Participate in quarterly reviews of this mapping.

---

## 4. Technology Dependency Mapping Process Flow

*Describe the end-to-end process for identifying, documenting, validating, and maintaining technology dependencies. This section provides operational guidance for staff responsible for maintaining this artifact.*

### 4.1 Process Overview

The following step-by-step process governs how [Organization Name] identifies, maps, and maintains technology dependencies:

**Step 1 — Identify Critical Business Processes**
> The [Technology Risk / Business Continuity] team, in coordination with each department head, identifies all business processes from the current BIA register. Processes classified as Tier 1 (Critical) or Tier 2 (Important) are confirmed in scope.

**Step 2 — Enumerate Technology Services**
> For each critical business process, the responsible process owner, supported by the System/Application Owner, enumerates all technology services required. This includes applications, databases, middleware, network services, compute infrastructure, storage, and third-party APIs or SaaS platforms.

**Step 3 — Establish Dependency Relationships**
> Each business process is linked to its supporting technology services in the Dependency Matrix (Section 7). Dependency type (direct, indirect, shared) and criticality are recorded.

**Step 4 — Identify Single Points of Failure (SPOFs) and Concentration Risk**
> The [Technology Risk] team reviews the completed matrix to identify SPOFs — technology services on which multiple critical processes depend without redundancy — and concentration risks arising from over-reliance on a single vendor or platform.

**Step 5 — Risk Assessment**
> Identified SPOFs and concentration risks are assessed for likelihood and impact and escalated to the Technology Risk Register [Document ID: TRR-XXXX] where required.

**Step 6 — Validate and Approve**
> The completed mapping is reviewed by all relevant process owners and technology owners, then approved by [Relevant Department Head / CTO / CISO] as defined in Section 8.

**Step 7 — Continuous Monitoring and Quarterly Review**
> Changes to business processes or technology services trigger an immediate update. A full formal review is conducted quarterly as per Section 11.

### 4.2 Process Flow Diagram

*Insert a process flow diagram here (e.g., as an embedded image or a reference to a separate diagram file). The diagram should illustrate the steps described in Section 4.1.*

> **[Insert Process Flow Diagram — Reference: Appendix A]**

---

## 5. Critical Business Processes

*List all critical business processes in scope. For each process, provide a structured description, its criticality tier, recovery objectives, and the accountable process owner. This section is the foundation of the dependency mapping.*

### 5.1 Critical Business Process Register

*The table below should be populated in coordination with the Business Continuity and BIA documentation. Process Tier is derived from the organization's Business Impact Analysis.*

| Process ID | Business Process Name | Department / Function | Process Tier | RTO | RPO | Process Owner | Last Validated |
|---|---|---|---|---|---|---|---|
| BP-001 | [e.g., Core Banking Transaction Processing] | [e.g., Operations] | Tier 1 — Critical | [e.g., 4 hours] | [e.g., 1 hour] | [Name / Title] | [Date] |
| BP-002 | [e.g., Customer Onboarding (Digital)] | [e.g., Retail Banking] | Tier 1 — Critical | [e.g., 8 hours] | [e.g., 4 hours] | [Name / Title] | [Date] |
| BP-003 | [e.g., Interbank Fund Transfer (IBG/RENTAS)] | [e.g., Treasury / Payments] | Tier 1 — Critical | [e.g., 2 hours] | [e.g., 30 minutes] | [Name / Title] | [Date] |
| BP-004 | [e.g., Regulatory Reporting (BNM submissions)] | [e.g., Finance / Compliance] | Tier 2 — Important | [e.g., 24 hours] | [e.g., 4 hours] | [Name / Title] | [Date] |
| BP-005 | [e.g., Anti-Money Laundering (AML) Screening] | [e.g., Compliance] | Tier 1 — Critical | [e.g., 4 hours] | [e.g., 2 hours] | [Name / Title] | [Date] |
| [BP-XXX] | [Business Process Name] | [Department] | [Tier] | [RTO] | [RPO] | [Owner] | [Date] |

**Tier Definitions:**

| Tier | Classification | Description |
|---|---|---|
| Tier 1 | Critical | Disruption causes immediate significant financial, regulatory, or reputational harm. |
| Tier 2 | Important | Disruption causes material but manageable impact within defined recovery windows. |
| Tier 3 | Non-Critical | Out of scope for this mapping; managed under standard IT operations. |

---

## 6. Technology Services Inventory

*Catalogue all technology services that support the critical business processes identified in Section 5. Each technology service should be uniquely identified and described with sufficient detail to support risk assessments and incident management.*

### 6.1 Technology Services Register

*This register covers applications, infrastructure platforms, middleware, data services, and third-party/cloud services. It should be maintained in alignment with the Technology Asset Register [Document ID: TAR-XXXX].*

| Service ID | Technology Service Name | Category | Deployment Model | Vendor / Provider | Version / Release | System Owner | Hosting Location | Criticality | Last Updated |
|---|---|---|---|---|---|---|---|---|---|
| TS-001 | [e.g., Core Banking System (CBS)] | Application | On-Premises | [Vendor Name] | [Version] | [Name / Title] | [e.g., Primary DC, Cyberjaya] | Critical | [Date] |
| TS-002 | [e.g., Internet Banking Platform] | Application | Hybrid | [Vendor Name] | [Version] | [Name / Title] | [e.g., Private Cloud / AWS ap-southeast-1] | Critical | [Date] |
| TS-003 | [e.g., RENTAS / PayNet Connectivity Gateway] | Middleware / Integration | On-Premises | [PayNet / Internal] | [Version] | [Name / Title] | [e.g., Primary DC] | Critical | [Date] |
| TS-004 | [e.g., Primary Database Cluster (Oracle RAC)] | Database | On-Premises | Oracle | [Version] | [Name / Title] | [e.g., Primary DC, Cyberjaya] | Critical | [Date] |
| TS-005 | [e.g., Active Directory / Identity Provider] | Infrastructure | On-Premises | Microsoft | [Version] | [Name / Title] | [e.g., Primary DC + DR] | Critical | [Date] |
| TS-006 | [e.g., AML Transaction Monitoring System] | Application | SaaS | [Vendor Name] | [N/A — SaaS] | [Name / Title] | [Vendor Cloud — Region] | Critical | [Date] |
| TS-007 | [e.g., WAN / MPLS Network] | Network Infrastructure | On-Premises / Managed | [Telco Provider] | [N/A] | [Name / Title] | [Nationwide] | Critical | [Date] |
| TS-008 | [e.g., Data Centre Facility (Primary)] | Physical Infrastructure | Co-location | [Co-lo Provider] | [N/A] | [Name / Title] | [Cyberjaya / KLCC] | Critical | [Date] |
| [TS-XXX] | [Service Name] | [Category] | [Model] | [Vendor] | [Version] | [Owner] | [Location] | [Criticality] | [Date] |

**Service Category Definitions:**

| Category | Examples |
|---|---|
| Application | Core banking, CRM, internet banking, mobile banking, AML, fraud detection |
| Database | RDBMS, NoSQL, data warehouses |
| Middleware / Integration | ESB, API gateways, message queues, connectivity platforms |
| Infrastructure | Compute (servers/VMs), storage (SAN/NAS), virtualisation (VMware/Hyper-V) |
| Network Infrastructure | WAN, LAN, firewall, load balancer, DNS |
| Cloud Service | IaaS, PaaS, SaaS from external cloud providers |
| Physical Infrastructure | Data centre facilities, power, cooling |
| Third-Party / Vendor Service | Managed services, outsourced IT, external APIs |

---

## 7. Business Process to Technology Dependency Matrix

*This is the core mapping artifact. It directly links each critical business process (Section 5) to its supporting technology services (Section 6). It should identify the nature of the dependency, whether redundancy exists, and flag any SPOFs or concentration risks.*

### 7.1 Dependency Matrix

*Populate one row per business-process-to-technology-service dependency pair. A single business process will typically have multiple rows — one for each technology service it depends upon.*

| Process ID | Business Process Name | Service ID | Technology Service Name | Dependency Type | Redundancy / Failover Available? | SPOF Identified? | Concentration Risk? | Risk Notes | Last Validated |
|---|---|---|---|---|---|---|---|---|---|
| BP-001 | [Core Banking Transaction Processing] | TS-001 | [Core Banking System] | Direct — Primary | Yes — Active/Passive DR | No | No | [e.g., DR failover tested [Date]] | [Date] |
| BP-001 | [Core Banking Transaction Processing] | TS-004 | [Primary Database Cluster] | Direct — Data | Yes — RAC + DR replication | No | No | [e.g., RPO < 30 min validated] | [Date] |
| BP-001 | [Core Banking Transaction Processing] | TS-005 | [Active Directory / IdP] | Direct — Authentication | Yes — Dual DC | No | No | — | [Date] |
| BP-001 | [Core Banking Transaction Processing] | TS-008 | [Data Centre Facility (Primary)] | Indirect — Hosting | Yes — Secondary DC at [Location] | No | **Yes** | [e.g., Both DC hosted by same co-lo provider] | [Date] |
| BP-002 | [Customer Onboarding (Digital)] | TS-002 | [Internet Banking Platform] | Direct — Primary | Yes — Cloud HA | No | No | — | [Date] |
| BP-003 | [Interbank Fund Transfer] | TS-003 | [RENTAS / PayNet Gateway] | Direct — Primary | **No — Single connection** | **Yes** | No | **SPOF: No redundant PayNet link. Mitigation: Manual fallback SOP [SOP-XXX]** | [Date] |
| BP-005 | [AML Screening] | TS-006 | [AML Transaction Monitoring — SaaS] | Direct — Primary | Limited — Vendor SLA only | **Yes** | **Yes** | **Concentration Risk: Sole AML vendor. Third-party risk assessed in [TPR-XXX]** | [Date] |
| [BP-XXX] | [Process Name] | [TS-XXX] | [Service Name] | [Type] | [Yes/No] | [Yes/No] | [Yes/No] | [Notes] | [Date] |

**Dependency Type Definitions:**

| Type | Description |
|---|---|
| Direct — Primary | The business process cannot function without this technology service. |
| Direct — Supporting | The business process is significantly degraded without this service, but partial operation is possible. |
| Indirect — Hosting | The service hosts or provides infrastructure for another directly dependent service. |
| Indirect — Shared | The service is shared across multiple processes; failure impacts multiple processes simultaneously. |

### 7.2 Single Points of Failure (SPOF) Summary

*Summarize all SPOFs identified in Section 7.1. For each, document the associated risk treatment and current mitigation status.*

| SPOF ID | Technology Service | Affected Business Processes | Risk Description | Mitigation / Treatment | Target Remediation Date | Status |
|---|---|---|---|---|---|---|
| SPOF-001 | [e.g., RENTAS / PayNet Gateway — TS-003] | BP-003 | Single network connection to PayNet; failure halts interbank transfers | Manual fallback SOP [SOP-XXX]; BNM notification procedure | [Date] | [Open / In Progress / Closed] |
| SPOF-002 | [e.g., AML System — TS-006] | BP-005 | Sole AML vendor; SaaS outage halts all transaction screening | Manual sampling procedure; escalation to compliance head | [Date] | [Open / In Progress / Closed] |
| [SPOF-XXX] | [Service] | [Process IDs] | [Description] | [Mitigation] | [Date] | [Status] |

### 7.3 Concentration Risk Summary

*Identify technology dependencies where over-reliance on a single vendor, provider, platform, or location creates systemic exposure.*

| Risk ID | Concentration Risk Description | Affected Services | Affected Processes | Assessment | Mitigation Actions |
|---|---|---|---|---|---|
| CR-001 | [e.g., Both primary and DR data centres hosted by same co-location provider] | TS-008 | BP-001, BP-002, BP-003 | High | [e.g., Reviewing alternative DR co-lo provider; target: Q[X] [Year]] |
| CR-002 | [e.g., Multiple critical applications hosted on single cloud provider (AWS)] | TS-002, TS-006 | BP-002, BP-005 | Medium | [e.g., Multi-cloud feasibility study initiated] |
| [CR-XXX] | [Description] | [Services] | [Processes] | [Assessment] | [Actions] |

---

## 8. Roles and Responsibilities

*Define accountability for the creation, maintenance, review, and approval of this document and the ongoing management of technology dependencies. Use a RACI model to eliminate ambiguity.*

### 8.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | [Department Head / Process Owner] | [Technology Risk Manager] | [System / Application Owner] | [IT Operations] | [CISO / CTO] | [Audit / Compliance] |
|---|---|---|---|---|---|---|
| Identify critical business processes | R | C | I | I | A | I |
| Enumerate technology dependencies per process | R | C | R | C | I | I |
| Populate and maintain Dependency Matrix | C | R | R | C | A | I |
| Identify and document SPOFs | C | R | C | C | A | I |
| Assess concentration risk | C | R | C | I | A | C |
| Escalate identified risks to Technology Risk Register | I | R | C | I | A | C |
| Approve Technology Dependency Mapping document | I | C | I | I | A | I |
| Conduct quarterly formal review | R | R | R | C | A | C |
| Receive and action change notifications | I | R | R | R | I | I |
| Provide evidence to internal / external auditors | C | R | C | I | A | R |

### 8.2 Roles Description

| Role | Responsibilities |
|---|---|
| **[Department Head / Process Owner]** | Owns the critical business processes within their department. Accountable for declaring technology dependencies accurately and notifying changes promptly. |
| **[Technology Risk Manager]** | Coordinates the overall mapping exercise. Maintains the Dependency Matrix, SPOF register, and concentration risk register. Escalates risks as required. |
| **[System / Application Owner]** | Accountable for the accurate technical description of technology services under their ownership. Validates dependency relationships and confirms recovery capabilities. |
| **[IT Operations]** | Provides operational details on infrastructure dependencies, redundancy configurations, and recovery capabilities. |
| **[CISO / CTO]** | Ultimate accountability for the completeness and integrity of this document. Approves the final mapping and associated risk treatments. |
| **[Audit / Compliance]** | Reviews the mapping as part of technology risk audits. Does not maintain the document but is consulted and informed during reviews. |

---

## 9. Tools and Systems Used

*Document the specific tools, systems, and platforms used to create, maintain, and monitor the Technology Dependency Mapping. This section supports reproducibility and ensures that tools used are themselves subject to appropriate governance.*

### 9.1 Mapping and Documentation Tools

| Tool / System | Purpose | Owner | Access Control |
|---|---|---|---|
| [e.g., ServiceNow CMDB] | Configuration Management Database — primary source of truth for technology assets and relationships | [IT Operations] | Role-based; read access for all stakeholders; write access restricted to CMDB administrators |
| [e.g., Confluence / SharePoint] | Document repository for this Dependency Mapping artifact | [Technology Risk] | Restricted to authorized staff; version-controlled |
| [e.g., Microsoft Visio / Lucidchart] | Process flow diagrams and dependency visualizations | [Technology Risk] | [Access policy] |
| [e.g., Jira / ServiceNow] | Tracking of SPOF remediation and concentration risk treatment actions | [Technology Risk] | [Access policy] |
| [e.g., Monitoring Platform (Dynatrace / SIEM)] | Continuous monitoring of technology service availability and dependency health | [IT Operations] | [Access policy] |

### 9.2 Integration with Other Frameworks and Registers

*This mapping should be maintained in alignment with and cross-referenced to the following organizational documents and systems:*

- **Technology Asset Register** [Document ID: TAR-XXXX] — Master inventory of all technology assets.
- **Business Impact Analysis (BIA)** [Document ID: BIA-XXXX] — Source of process criticality tiers and RTO/RPO objectives.
- **Technology Risk Register** [Document ID: TRR-XXXX] — Repository for risks identified through this mapping.
- **Business Continuity Plan (BCP)** [Document ID: BCP-XXXX] — Consumes dependency mapping to define continuity strategies.
- **Disaster Recovery Plan (DRP)** [Document ID: DRP-XXXX] — Uses dependency mapping to determine recovery sequencing.
- **Third-Party Risk Register** [Document ID: TPR-XXXX] — Cross-references third-party technology service dependencies.
- **Change Management System** [Document ID / System: CMx-XXXX] — Triggers dependency mapping updates when technology changes are approved.

---

## 10. Escalation Procedures

*Define the conditions and procedures under which technology dependency risks identified through this mapping are escalated to senior management, the board, or the regulator. This section ensures that the artifact actively feeds into the institution's risk management governance.*

### 10.1 Escalation Triggers

The following conditions require immediate escalation outside the standard quarterly review cycle:

| Trigger | Escalation Required To | Timeframe |
|---|---|---|
| Identification of a new SPOF affecting a Tier 1 Critical process | Technology Risk Manager → CISO / CTO | Within **24 hours** of identification |
| Identification of a new concentration risk rated **High** or **Critical** | Technology Risk Manager → CISO / CTO → Risk Committee | Within **48 hours** |
| Material change to a critical technology service (addition, modification, decommission) | System Owner → Technology Risk Manager | Within **5 business days** of change |
| Technology service outage impacting a Tier 1 process where a SPOF was previously documented | Incident Manager → Technology Risk Manager → CISO | Per Incident Response Plan [IRP-XXXX] |
| Failure to remediate a SPOF by its agreed Target Remediation Date | Technology Risk Manager → CISO / CTO → Risk Committee | At next Risk Committee meeting |
| Regulatory enquiry or audit request related to this mapping | Technology Risk Manager → Compliance Officer → [MD / CEO] | Within **24 hours** of receipt |

### 10.2 Escalation Path

```
Process / System Owner
        │
        ▼
Technology Risk Manager
        │
        ├──► CISO / CTO  (operational escalation)
        │
        ├──► Technology Risk Committee  (governance escalation)
        │
        ├──► Board Risk Committee  (strategic escalation — High/Critical risks)
        │
        └──► BNM (regulatory notification — as required under RMiT and applicable BNM guidelines)
```

### 10.3 Regulatory Notification

*Where technology dependencies or failures have implications for BNM-reportable incidents or technology risk disclosures, the following applies:*

- Notifications to BNM shall be made in accordance with **BNM RMiT** and the **BNM Reporting Requirements for Financial Institutions**.
- The [Compliance Officer / Company Secretary] is responsible for coordinating all regulatory notifications.
- All regulatory notifications shall be documented and retained for a minimum of **[7 years / as per BNM record-keeping requirements]**.

---

## 11. Monitoring and Continuous Review

*Describe the processes for continuously monitoring technology dependencies and conducting formal periodic reviews to ensure the mapping remains accurate and current.*

### 11.1 Continuous Monitoring

[Organization Name] maintains continuous monitoring of critical technology services through the following mechanisms:

| Monitoring Mechanism | Coverage | Responsible Party | Alert Threshold |
|---|---|---|---|
| [e.g., Dynatrace / SolarWinds — Application Performance Monitoring] | All Tier 1 application services | IT Operations | [e.g., Availability < 99.9%; response time > X ms] |
| [e.g., SIEM (Splunk / Wazuh)] | Security events across all critical systems | SOC / CISO | [e.g., Per SIEM alerting policy] |
| [e.g., Infrastructure Monitoring (Zabbix / Nagios)] | Compute, storage, network for critical services | IT Operations | [e.g., CPU > 85%; disk > 90%] |
| [e.g., Third-Party Service Status Monitoring] | SaaS and cloud provider uptime | Technology Risk | [e.g., Any reported degradation by vendor] |
| [e.g., Change Management System Review] | Changes that may affect dependency relationships | Technology Risk Manager | [e.g., Any change tagged as affecting Tier 1/2 process] |

### 11.2 Formal Quarterly Review

A formal review of this mapping shall be conducted **at minimum quarterly**, covering:

- [ ] Validation of all business processes in Section 5 (any additions, modifications, or retirements)
- [ ] Validation of all technology services in Section 6 (any additions, modifications, or decommissions)
- [ ] Review of Dependency Matrix (Section 7) for completeness and accuracy
- [ ] Review of SPOF register (Section 7.2) — status of mitigations
- [ ] Review of Concentration Risk register (Section 7.3) — status of treatments
- [ ] Sign-off by all Process Owners and System Owners for their respective domains
- [ ] Update of Version History (Section 12)
- [ ] Approval by [CISO / CTO / Relevant Department Head]

### 11.3 Event-Triggered Updates

The following events shall trigger an immediate unscheduled update to this document:

- Deployment of a new technology service supporting a critical business process
- Decommissioning or material modification of an existing critical technology service
- Identification of a previously undocumented dependency
- Completion of SPOF or concentration risk remediation
- Organizational restructuring affecting process ownership
- Acquisition, outsourcing, or insourcing of technology services

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Description of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial document creation | [Approver Name], [Title] |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] | [Approver Name], [Title] |
| [2.0] | [Date] | [Author Name], [Title] | [Major revision description] | [Approver Name], [Title] |

### 12.2 Approval Sign-Off

*This document requires formal sign-off from the following roles prior to issuance or upon revision. Signatures confirm that the mapping has been reviewed, is accurate to the best of the signatories' knowledge, and is approved for use as a compliance artifact.*

| Role | Name | Department | Signature | Date |
|---|---|---|---|---|
| Document Author | [Name] | [Technology Risk / IT Governance] | | [Date] |
| [Relevant Department Head] | [Name] | [Department] | | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Technology / Information Security] | | [Date] |
| Chief Technology Officer (CTO) | [Name] | [Technology] | | [Date] |
| Compliance Officer | [Name] | [Compliance] | | [Date] |
| [Additional Approver, if required] | [Name] | [Department] | | [Date] |

---

## 13. References

*List all regulatory documents, internal policies, and related artifacts that govern or inform this document.*

### 13.1 Regulatory References

| Reference | Title | Issuing Authority | Version / Date | Relevant Clause(s) |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Effective Date of Policy] | **10.34**, 10.1–10.5, 10.30–10.33, 11.1–11.10, 13.1–13.15 |
| [BNM/RH/PD 028-3] | Outsourcing | Bank Negara Malaysia | [Date] | [Clauses relevant to outsourced technology services] |
| [PDPA 2010] | Personal Data Protection Act 2010 | Government of Malaysia | 2010 (as amended) | [Where technology services process personal data] |
| [NACSA Guidelines] | [Applicable NACSA guideline title] | NACSA | [Date] | [Where applicable to critical information infrastructure] |

### 13.2 Internal Document References

| Document ID | Title | Owner |
|---|---|---|
| [BIA-XXXX] | Business Impact Analysis | [Business Continuity / Technology Risk] |
| [TAR-XXXX] | Technology Asset Register | [IT Operations] |
| [TRR-XXXX] | Technology Risk Register | [Technology Risk] |
| [BCP-XXXX] | Business Continuity Plan | [Business Continuity] |
| [DRP-XXXX] | Disaster Recovery Plan | [IT Operations / Technology Risk] |
| [TPR-XXXX] | Third-Party Risk Register | [Technology Risk / Procurement] |
| [IRP-XXXX] | Incident Response Plan | [CISO / SOC] |
| [SOP-XXX] | [Manual Fallback SOP (e.g., Interbank Transfers)] | [Operations] |

---

## 14. Appendices

### Appendix A — Process Flow Diagram

*Insert a visual diagram illustrating the end-to-end Technology Dependency Mapping process as described in Section 4. The diagram should use a standard notation (e.g., BPMN, swimlane flowchart) and be readable when printed at A4 size.*

> **[Insert Process Flow Diagram]**
>
> *File reference: [diagram filename or link to diagram repository]*

---

### Appendix B — Dependency Visualization Map

*Insert a visual topology map or network diagram showing the relationships between critical business processes and their supporting technology services. Highlight identified SPOFs and concentration risks using distinct visual indicators (e.g., red nodes for SPOFs, orange for concentration risks).*

> **[Insert Dependency Topology Diagram]**
>
> *File reference: [diagram filename or link to diagram repository]*

---

### Appendix C — Glossary of Terms

| Term | Definition |
|---|---|
| **Business Impact Analysis (BIA)** | A process that identifies and evaluates the potential effects of an interruption to critical business operations. |
| **Concentration Risk** | The risk arising from over-reliance on a single vendor, provider, technology platform, or geographic location. |
| **Critical Business Process** | A business process whose disruption would cause significant financial, operational, regulatory, or reputational harm to the institution. |
| **Dependency** | A reliance relationship whereby a business process requires a technology service to function at its defined service level. |
| **Recovery Point Objective (RPO)** | The maximum tolerable period in which data might be lost due to a major incident. |
| **Recovery Time Objective (RTO)** | The targeted duration within which a business process must be restored after a disruption. |
| **Single Point of Failure (SPOF)** | A component of the technology environment that, if it fails, will cause the entire process or system to stop functioning, with no redundant path available. |
| **Technology Dependency Mapping** | A structured record of the relationships between critical business processes and the technology services upon which they depend, maintained in accordance with BNM RMiT 10.34. |
| **Tier 1 — Critical** | Business processes whose disruption causes immediate and significant harm; highest recovery priority. |
| **Tier 2 — Important** | Business processes whose disruption causes material but manageable impact within defined recovery windows. |

---

### Appendix D — Quarterly Review Checklist

*Use this checklist as a structured guide for conducting the formal quarterly review of this document. Complete and retain a signed copy of this checklist as evidence of each review.*

**Review Period:** [Q1/Q2/Q3/Q4] [Year] | **Review Date:** [Date] | **Reviewer:** [Name, Title]

| # | Review Activity | Completed | Notes |
|---|---|---|---|
| 1 | Confirm all critical business processes in Section 5 remain current | ☐ Yes ☐ No | |
| 2 | Confirm all technology services in Section 6 remain current | ☐ Yes ☐ No | |
| 3 | Verify Dependency Matrix (Section 7) reflects current state | ☐ Yes ☐ No | |
| 4 | Review SPOF register — update remediation status | ☐ Yes ☐ No | |
| 5 | Review Concentration Risk register — update treatment status | ☐ Yes ☐ No | |
| 6 | Confirm all Process Owner sign-offs obtained | ☐ Yes ☐ No | |
| 7 | Confirm all System Owner sign-offs obtained | ☐ Yes ☐ No | |
| 8 | Escalate any new or unresolved High/Critical risks | ☐ Yes ☐ No ☐ N/A | |
| 9 | Update Version History table | ☐ Yes ☐ No | |
| 10 | Obtain formal approval sign-off for updated version | ☐ Yes ☐ No | |
| 11 | File updated document in [Document Repository] | ☐ Yes ☐ No | |
| 12 | Notify Audit / Compliance of updated version | ☐ Yes ☐ No | |

**Reviewer Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Technology Risk Manager | [Name] | | [Date] |
| [CISO / CTO] | [Name] | | [Date] |

---

*End of Document*

---

**Document Classification: Confidential**
*This document contains sensitive information pertaining to [Organization Name]'s technology infrastructure and risk posture. Distribution is restricted to authorized personnel only. Unauthorized disclosure, reproduction, or transmission is prohibited.*

*© [Year] [Organization Name]. All rights reserved.*