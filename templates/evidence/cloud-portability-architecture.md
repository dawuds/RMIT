# Cloud Portability Architecture

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Vendor Management |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document provides evidence of [Organization Name]'s cloud portability architecture and demonstrates active measures taken to minimize vendor lock-in across cloud service providers. It supports compliance with **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 17.3**, which requires financial institutions to maintain the ability to migrate workloads and data across cloud providers without disproportionate cost, effort, or operational risk.

**Scope:** This document covers all cloud-hosted systems classified as critical or significant under [Organization Name]'s IT asset inventory, including Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) deployments operated by or on behalf of [Organization Name].

**Out of Scope:** On-premise systems, third-party managed services where [Organization Name] holds no infrastructure responsibility, and development/test environments below [defined risk tier].

---

## 2. Assessment Scope and Criteria

*Describe which cloud environments, services, and workloads are included in the portability assessment, and define the criteria used to evaluate portability risk.*

### 2.1 In-Scope Cloud Environments

| Environment | Provider | Region | Service Classification | Criticality |
|---|---|---|---|---|
| [Environment Name] | [CSP Name] | [Region] | IaaS / PaaS / SaaS | Critical / Significant / Standard |
| [Environment Name] | [CSP Name] | [Region] | IaaS / PaaS / SaaS | Critical / Significant / Standard |

### 2.2 Portability Assessment Criteria

*List the technical, contractual, and operational criteria used to assess whether each workload can be migrated or replicated on an alternative provider.*

- **Data Portability:** Ability to export data in open, non-proprietary formats (e.g., CSV, JSON, Parquet, SQL dump)
- **Application Portability:** Use of containerisation (Docker/Kubernetes), open APIs, and avoidance of provider-specific runtime dependencies
- **Operational Portability:** Availability of equivalent managed services, automation tooling (e.g., Terraform, Ansible), and monitoring integrations on alternative platforms
- **Contractual Portability:** Data repatriation rights, notice periods, and migration assistance obligations defined in the Cloud Service Agreement (CSA)
- **Cost Portability:** Estimated migration cost as a percentage of annual cloud spend, including egress fees and re-engineering effort

---

## 3. Methodology

*Describe the approach, tools, and standards used to evaluate cloud portability. Reference any internal frameworks, industry standards, or regulatory guidance applied.*

### 3.1 Assessment Approach

[Organization Name] conducted this assessment using the following methodology:

1. **Inventory Review** — All cloud-hosted workloads were catalogued from the IT asset register and cross-referenced with the Cloud Service Inventory maintained by [IT/Infrastructure Team].
2. **Dependency Mapping** — Technical teams mapped application-layer dependencies on provider-specific services (e.g., proprietary databases, serverless runtimes, AI/ML platforms).
3. **Portability Scoring** — Each workload was scored against the criteria in Section 2.2 using a [Low / Medium / High] risk rating scale.
4. **Exit Simulation** — For Critical-tier workloads, a tabletop exercise was conducted to estimate migration effort and timeline to an alternate provider.
5. **Contractual Review** — Legal and Vendor Management reviewed active CSAs for data repatriation clauses, exit obligations, and SLA continuity provisions.

### 3.2 Standards and References Applied

| Standard / Framework | Applicability |
|---|---|
| BNM RMiT Clause 17.3 | Mandatory regulatory requirement |
| ISO/IEC 19944 (Cloud Data Flow) | Data portability classification |
| Cloud Security Alliance (CSA) CCM | Cloud control mapping |
| [Internal Framework / Policy Name] | [Description] |

### 3.3 Assessment Period

| Assessment Parameter | Detail |
|---|---|
| Assessment Conducted By | [Name / Team] |
| Assessment Date | [Date] |
| Next Scheduled Review | [Date] or upon material change to cloud architecture |

---

## 4. Findings and Ratings

*Summarise the portability assessment findings for each in-scope workload. Highlight areas of concern and remediation actions where applicable.*

### 4.1 Workload Portability Summary

| Workload / System | Provider | Data Portability | App Portability | Operational Portability | Contractual Portability | Overall Rating | Remediation Required |
|---|---|---|---|---|---|---|---|
| [System Name] | [CSP] | Low / Medium / High | Low / Medium / High | Low / Medium / High | Low / Medium / High | **Low / Medium / High** | Yes / No |
| [System Name] | [CSP] | Low / Medium / High | Low / Medium / High | Low / Medium / High | Low / Medium / High | **Low / Medium / High** | Yes / No |

**Rating Scale:**
- **Low Risk** — Workload is highly portable; open standards used; minimal provider-specific dependencies
- **Medium Risk** — Some provider-specific services used; migration feasible within [defined timeframe] with moderate effort
- **High Risk** — Significant lock-in identified; migration would require substantial re-engineering; immediate remediation plan required

### 4.2 Key Findings

*List the most significant portability risks identified and their business impact.*

1. **[Finding 1]:** [Description of finding, affected workloads, and risk implication]
2. **[Finding 2]:** [Description of finding, affected workloads, and risk implication]
3. **[Finding 3]:** [Description of finding, affected workloads, and risk implication]

### 4.3 Remediation Actions

| Finding Ref | Workload | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|
| [Ref] | [System] | [Action Description] | [Owner] | [Date] | Open / In Progress / Closed |

---

## 5. Vendor Risk Tiering Criteria

*Define how cloud service providers are tiered based on concentration risk, strategic dependency, and portability risk. This informs escalation, oversight frequency, and exit planning priorities.*

### 5.1 Tiering Framework

| Tier | Label | Definition | Oversight Frequency |
|---|---|---|---|
| Tier 1 | Critical | CSP hosts systems essential to core banking / regulated operations; no feasible short-term substitute | Monthly review |
| Tier 2 | Significant | CSP hosts important systems; migration possible within [6–12 months] | Quarterly review |
| Tier 3 | Standard | CSP hosts non-critical workloads; readily substitutable | Annual review |

### 5.2 Current Vendor Tier Assignment

| Cloud Service Provider | Services Used | Assigned Tier | Justification |
|---|---|---|---|
| [CSP Name] | [Service List] | Tier [1/2/3] | [Rationale] |
| [CSP Name] | [Service List] | Tier [1/2/3] | [Rationale] |

### 5.3 Concentration Risk Assessment

*Note any instances where a single CSP accounts for more than [40%] of critical workloads or cloud spend, triggering enhanced oversight under RMiT.*

- **Current Concentration:** [CSP Name] accounts for [X%] of critical cloud-hosted workloads
- **Threshold Breached:** Yes / No
- **Mitigation Measure:** [Description of multi-cloud strategy, workload distribution, or compensating controls]

---

## 6. Due Diligence Checklist

*This checklist must be completed for all Tier 1 and Tier 2 cloud providers at onboarding and at each scheduled review.*

| # | Due Diligence Item | Applicable To | Status | Evidence Reference | Last Verified |
|---|---|---|---|---|---|
| 1 | CSP holds valid ISO/IEC 27001 or equivalent certification | All Tiers | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 2 | CSP holds SOC 2 Type II report (or equivalent) | Tier 1 & 2 | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 3 | Data residency contractually restricted to Malaysia / approved jurisdictions | All Tiers | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 4 | Data repatriation clause included in CSA with defined timelines | All Tiers | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 5 | Business continuity and disaster recovery obligations defined in CSA | Tier 1 & 2 | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 6 | Sub-processor / subcontractor disclosure obligations in CSA | Tier 1 & 2 | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 7 | Right to audit (or equivalent assurance) included in CSA | Tier 1 | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 8 | CSP financial stability assessed (latest annual report reviewed) | Tier 1 & 2 | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 9 | CSP incident notification obligations (≤ [24/72 hours]) defined | All Tiers | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 10 | Proprietary service dependency impact assessed and documented | All Tiers | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 11 | Portability and migration assistance obligations defined in CSA | Tier 1 & 2 | Compliant / Gap / N/A | [Doc Ref] | [Date] |
| 12 | Exit costs (egress fees, transition support) assessed and acceptable | Tier 1 & 2 | Compliant / Gap / N/A | [Doc Ref] | [Date] |

---

## 7. SLA and KPI Definitions

*Document the minimum service levels and key performance indicators that cloud providers must meet, and specify how these are monitored and enforced.*

### 7.1 Minimum SLA Requirements

| SLA Parameter | Tier 1 Minimum | Tier 2 Minimum | Tier 3 Minimum | Measurement Method |
|---|---|---|---|---|
| Availability (Uptime) | 99.99% | 99.9% | 99.5% | CSP dashboard / third-party monitoring |
| Incident Response Time (P1) | ≤ 15 minutes | ≤ 1 hour | ≤ 4 hours | CSP ticketing system |
| Incident Resolution Time (P1) | ≤ 4 hours | ≤ 8 hours | ≤ 24 hours | CSP ticketing system |
| Data Restoration RTO | ≤ [X hours] | ≤ [X hours] | ≤ [X hours] | DR test results |
| Data Restoration RPO | ≤ [X hours] | ≤ [X hours] | ≤ [X hours] | Backup verification |
| Security Patch Application | ≤ [X days] (critical) | ≤ [X days] (critical) | ≤ [X days] (critical) | CSP security bulletins |

### 7.2 KPIs for Ongoing Monitoring

| KPI | Definition | Target | Reporting Frequency | Owner |
|---|---|---|---|---|
| Cloud Availability Rate | % uptime against contracted SLA | ≥ SLA minimum | Monthly | [IT Operations] |
| SLA Breach Rate | Number of SLA breaches per quarter | 0 (Tier 1); ≤ [X] (Tier 2) | Quarterly | [IT Operations] |
| Vendor Incident Notification Compliance | % incidents notified within contracted timeframe | 100% | Per-incident | [Vendor Management] |
| Portability Score | Aggregate portability rating across in-scope workloads | ≥ [X%] Low/Medium | Quarterly | [Head of Vendor Management] |
| Due Diligence Completion Rate | % of Tier 1 & 2 checklist items compliant | 100% | Quarterly | [Vendor Management] |

---

## 8. Exit Strategy Requirements

*Document the exit strategy for each Tier 1 and Tier 2 cloud provider, including trigger conditions, migration timelines, and accountabilities.*

### 8.1 Exit Trigger Conditions

The following conditions may trigger activation of a cloud exit strategy:

- CSP fails to meet Tier 1 SLA for [X consecutive months]
- CSP subject to regulatory sanction, insolvency proceedings, or material adverse change
- BNM directs [Organization Name] to cease use of a specific CSP
- Strategic decision to consolidate or change cloud provider
- CSP announces end-of-life for a service hosting critical workloads
- Material data breach attributable to CSP negligence

### 8.2 Exit Plans by Provider

| CSP | Tier | Target Migration Platform | Estimated Migration Duration | Data Repatriation Period | Estimated Exit Cost | Exit Plan Reference |
|---|---|---|---|---|---|---|
| [CSP Name] | [1/2] | [Alternative Platform] | [X weeks/months] | [X days per CSA] | [RM X or X% of annual spend] | [Appendix Ref] |

### 8.3 Exit Readiness Checklist

| Readiness Item | Status | Evidence | Last Tested |
|---|---|---|---|
| Data export procedure documented and tested | Yes / No | [Doc Ref] | [Date] |
| Infrastructure-as-Code (IaC) scripts are provider-agnostic | Yes / No | [Doc Ref] | [Date] |
| Alternative CSP account pre-provisioned / available | Yes / No | [Doc Ref] | [Date] |
| Migration runbook approved and version-controlled | Yes / No | [Doc Ref] | [Date] |
| Parallel-run testing completed for Critical workloads | Yes / No | [Doc Ref] | [Date] |
| Staff trained on exit procedures | Yes / No | [Training records] | [Date] |

---

## 9. Cloud Service Model and Deployment Type

*Document the cloud service and deployment models in use across the organisation to support architecture visibility and portability planning.*

### 9.1 Cloud Service Models

| Service Model | Description | In Use | Examples at [Organization Name] |
|---|---|---|---|
| **IaaS** | Compute, storage, networking provisioned on-demand | Yes / No | [e.g., Virtual machines, object storage] |
| **PaaS** | Managed runtime, database, middleware services | Yes / No | [e.g., Managed Kubernetes, relational DB services] |
| **SaaS** | Fully managed software applications | Yes / No | [e.g., CRM, productivity suite, monitoring tools] |

### 9.2 Deployment Types

| Deployment Type | Definition | In Use | Notes |
|---|---|---|---|
| **Public Cloud** | Shared infrastructure operated by CSP | Yes / No | [Providers and workloads] |
| **Private Cloud** | Dedicated infrastructure, on-premise or hosted | Yes / No | [Location and operator] |
| **Hybrid Cloud** | Combination of public and private cloud | Yes / No | [Integration approach] |
| **Multi-Cloud** | Use of two or more public CSPs | Yes / No | [Providers and rationale] |

### 9.3 Architecture Overview

*Attach or reference the current cloud architecture diagram showing workload distribution, data flows, and provider boundaries.*

> **[Attach Architecture Diagram — Reference: Appendix A]**

Key architectural decisions supporting portability:

- **Containerisation Strategy:** [Describe use of Docker/Kubernetes and registry portability]
- **Data Layer Portability:** [Describe database technology choices, e.g., open-source DBMS, standard export formats]
- **API Gateway / Integration Layer:** [Describe abstraction layer isolating application logic from CSP-specific APIs]
- **Infrastructure-as-Code:** [Describe IaC tooling, e.g., Terraform with provider-agnostic modules]
- **Identity and Access Management:** [Describe federated identity approach reducing CSP-specific IAM dependency]

---

## 10. Roles and Responsibilities

*The following RACI table defines accountability for cloud portability architecture documentation and ongoing compliance.*

| Activity | Head of Vendor Management | CISO / CTO | IT Architecture | Legal / Compliance | Cloud Operations | Internal Audit |
|---|---|---|---|---|---|---|
| Maintain Cloud Service Inventory | A | C | R | I | R | I |
| Conduct Portability Assessment | A | C | R | I | R | I |
| Assign and Review Vendor Tier | A | C | C | I | I | I |
| Complete Due Diligence Checklist | R | I | C | C | I | I |
| Review and Approve SLA/KPI | A | C | C | C | R | I |
| Maintain and Test Exit Plans | A | C | R | I | R | I |
| Review and Approve This Document | A | C | I | C | I | I |
| Audit Portability Controls | I | I | I | I | I | R |
| Report to Board / Risk Committee | R | C | I | C | I | I |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [X.X] | [Date] | [Author Name] | [Description of changes] |

### 11.2 Review Trigger

This document shall be reviewed:
- **Quarterly**, as part of the standard vendor management review cycle; or
- **Per-event**, upon any material change to cloud architecture, CSP contract, or vendor tier assignment

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Vendor Management | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Technology Officer | [Name] | __________________ | [Date] |
| Chief Compliance Officer | [Name] | __________________ | [Date] |

---

## 12. References

| Reference | Description |
|---|---|
| **BNM RMiT — Clause 17.3** | Cloud portability and vendor lock-in requirements for financial institutions |
| BNM RMiT — Clause 17.1 | General cloud risk management obligations |
| BNM RMiT — Clause 10.x | Outsourcing risk management requirements |
| ISO/IEC 19944:2020 | Cloud computing — Cloud services and devices: Data flow, data categories and data use |
| CSA Cloud Controls Matrix (CCM) v4 | Cloud security assurance framework |
| [Organization Name] Cloud Security Policy | [Internal Policy ID] |
| [Organization Name] Vendor Management Policy | [Internal Policy ID] |
| [Organization Name] Business Continuity Policy | [Internal Policy ID] |

---

## Appendices

### Appendix A — Cloud Architecture Diagram

*Attach the current logical and physical cloud architecture diagram. Diagram should clearly show: workload placement by provider, data flows between environments, network boundaries, and any hybrid/multi-cloud integration points.*

> **[Attach Diagram — File Reference: [Filename / Version]]**

### Appendix B — Cloud Service Inventory

*Attach the complete Cloud Service Inventory spreadsheet listing all cloud-hosted services, their providers, service models, data classifications, and criticality ratings.*

> **[Attach Inventory — File Reference: [Filename / Version]]**

### Appendix C — Exit Plan Detail (Per Provider)

*Attach detailed migration runbooks for each Tier 1 and Tier 2 cloud provider, including step-by-step procedures, responsible parties, and rollback criteria.*

> **[Attach Exit Plans — File References: [Filename(s) / Version(s)]]**

### Appendix D — SLA Performance Reports

*Attach the most recent quarterly SLA performance reports from each in-scope cloud provider, along with [Organization Name]'s internal monitoring dashboard extracts.*

> **[Attach SLA Reports — File References: [Filename(s) / Period Covered]]**

### Appendix E — Due Diligence Evidence Register

*Attach supporting evidence for all due diligence checklist items in Section 6, including CSP certifications, audit reports, and CSA clause references.*

> **[Attach Evidence Register — File Reference: [Filename / Version]]**

---

*This document is classified **Confidential** and is intended solely for internal use by [Organization Name] and its authorised regulators. Unauthorised disclosure is prohibited.*