# Vendor Lock-In Risk Assessment

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
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Reference** | Clause 17.3 |

---

> **Classification Notice:** This document is classified as **Confidential**. It is intended solely for the use of authorized personnel within [Organization Name] and must not be disclosed to unauthorized parties without prior written approval from the Head of Technology Risk or equivalent authority.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Assessment Scope and Criteria](#3-assessment-scope-and-criteria)
4. [Methodology](#4-methodology)
5. [Cloud Service Model and Deployment Type](#5-cloud-service-model-and-deployment-type)
6. [Vendor Risk Tiering Criteria](#6-vendor-risk-tiering-criteria)
7. [Due Diligence Checklist](#7-due-diligence-checklist)
8. [Findings and Ratings](#8-findings-and-ratings)
9. [SLA and KPI Definitions](#9-sla-and-kpi-definitions)
10. [Exit Strategy Requirements](#10-exit-strategy-requirements)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Risk Treatment Plan](#12-risk-treatment-plan)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section describes the intent of this document and the regulatory obligations it fulfills.*

This Vendor Lock-In Risk Assessment has been prepared by [Organization Name] in accordance with the Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 17.3, which mandates that financial institutions assess and manage risks arising from concentration, dependency, and vendor lock-in in technology service arrangements, particularly those involving cloud services.

The purpose of this assessment is to:

- Identify and evaluate the degree of vendor lock-in exposure across cloud service providers engaged by [Organization Name];
- Assess the operational, financial, strategic, and regulatory risks arising from such dependencies;
- Establish a structured framework for ongoing monitoring of vendor dependency risk;
- Define and validate exit strategy readiness for each cloud service arrangement;
- Provide assurance to the Board Risk Committee and senior management that vendor concentration risk is within the institution's risk appetite.

### 1.2 Scope

*This section defines the boundary of the assessment, including which systems, vendors, and service arrangements are in scope.*

This assessment covers all cloud service arrangements currently in production or undergoing active procurement as of **[Assessment Reference Date]**, including but not limited to:

- Infrastructure-as-a-Service (IaaS) engagements;
- Platform-as-a-Service (PaaS) engagements;
- Software-as-a-Service (SaaS) engagements;
- Managed cloud services and cloud-adjacent services (e.g., cloud-based CDN, DNS, identity providers).

**In-Scope Entities and Systems:**

| System / Application | Business Owner | Cloud Provider | Service Model | Criticality |
|---|---|---|---|---|
| [System Name 1] | [Business Unit] | [Provider] | IaaS / PaaS / SaaS | Critical / High / Medium / Low |
| [System Name 2] | [Business Unit] | [Provider] | IaaS / PaaS / SaaS | Critical / High / Medium / Low |
| [System Name 3] | [Business Unit] | [Provider] | IaaS / PaaS / SaaS | Critical / High / Medium / Low |
| [System Name 4] | [Business Unit] | [Provider] | IaaS / PaaS / SaaS | Critical / High / Medium / Low |
| [System Name 5] | [Business Unit] | [Provider] | IaaS / PaaS / SaaS | Critical / High / Medium / Low |

**Out-of-Scope:**

The following are explicitly excluded from this assessment:

- On-premise technology infrastructure not hosted or managed by a third-party cloud provider;
- Software licensed under perpetual terms with no cloud dependency;
- Services under assessment for procurement not yet contracted;
- [Any other exclusion — describe reason].

### 1.3 Assessment Period

| Field | Detail |
|---|---|
| **Assessment Reference Date** | [Assessment Reference Date] |
| **Assessment Conducted By** | [Assessor Name / Team] |
| **Assessment Quarter** | Q[X] [YYYY] |
| **Previous Assessment Date** | [Previous Assessment Date] |
| **Next Scheduled Assessment** | [Next Scheduled Assessment Date] |

---

## 2. Regulatory Context

### 2.1 BNM RMiT Policy Overview

*This section summarizes the regulatory requirements that this document is designed to satisfy.*

The BNM Risk Management in Technology (RMiT) Policy Document establishes the minimum standards for technology risk management in licensed financial institutions in Malaysia. [Organization Name] is required to comply with all applicable provisions of RMiT as a condition of its operating license.

Clause 17 of the RMiT addresses **Cloud Services**, setting out requirements for the governance, risk management, and oversight of cloud service engagements. Specifically:

| RMiT Clause | Requirement Summary |
|---|---|
| **17.1** | Financial institutions must perform a risk assessment prior to adopting cloud services and periodically thereafter. |
| **17.2** | Cloud service risks, including data residency, data sovereignty, and access risks, must be identified and managed. |
| **17.3** | Financial institutions must assess and manage vendor lock-in risks, including developing and maintaining viable exit strategies for each cloud service. |
| **17.4** | Concentration risk arising from cloud service usage must be monitored and managed. |
| **17.5** | Exit strategies must be tested periodically to validate their operability. |

### 2.2 Applicability to [Organization Name]

*Describe how RMiT Clause 17.3 applies to the organization's current cloud footprint.*

[Organization Name], as a [licensed bank / licensed insurer / payment institution / other], holds obligations under the RMiT to ensure that its adoption of cloud services does not expose the institution to unacceptable levels of vendor concentration, operational disruption, or technology dependency risk. The following cloud engagements trigger the obligations under Clause 17.3:

- [Brief description of cloud service — e.g., "Core banking platform hosted on [Provider] IaaS"]
- [Brief description of cloud service]
- [Brief description of cloud service]

### 2.3 Risk Appetite Statement

*State the organization's approved risk appetite as it relates to vendor lock-in and technology concentration risk.*

> [Organization Name]'s approved technology risk appetite, as endorsed by the Board Risk Committee on [Approval Date], stipulates that **vendor lock-in risk shall be maintained at a [Low / Medium] risk level** for all cloud service arrangements supporting critical systems. Any arrangement assessed as High or Critical risk must be escalated to the Chief Risk Officer and the Board Risk Committee within [X] business days of identification.

**Approved Risk Tolerance Parameters:**

| Risk Parameter | Tolerance Threshold |
|---|---|
| Maximum permissible concentration with a single cloud provider (% of critical workloads) | [X]% |
| Maximum permissible data migration timeline to alternative provider | [X] days |
| Minimum notice period required in vendor exit clause | [X] months |
| Maximum acceptable unmitigated lock-in risk rating | [Medium / Low] |

---

## 3. Assessment Scope and Criteria

### 3.1 Assessment Objectives

*Define what the assessment seeks to evaluate and achieve.*

This assessment is structured to evaluate the following dimensions of vendor lock-in risk for each in-scope cloud service arrangement:

1. **Contractual Lock-In** — degree to which contractual terms restrict the institution's ability to exit, migrate, or renegotiate the arrangement;
2. **Technical Lock-In** — degree to which proprietary technologies, data formats, APIs, or architectures create migration barriers;
3. **Operational Lock-In** — degree to which internal processes, staff competency, and operational dependencies have become bound to a specific vendor's toolchain;
4. **Financial Lock-In** — extent of financial penalties, sunk costs, or re-platforming costs that would be incurred on exit;
5. **Data Portability** — ability to extract, migrate, and reconstruct all institutional data in a usable format with an alternative provider;
6. **Exit Readiness** — maturity and operability of documented exit strategies and transition plans.

### 3.2 Assessment Criteria Framework

*Describe the scoring criteria used to evaluate each dimension of vendor lock-in risk.*

Each dimension is assessed using the following criteria scale:

| Rating | Score | Description |
|---|---|---|
| **Critical** | 4 | Severe lock-in with no viable exit path. Immediate escalation required. |
| **High** | 3 | Significant lock-in with material barriers to exit. Exit strategy inadequate or untested. |
| **Medium** | 2 | Moderate lock-in with some exit constraints. Exit strategy exists but has gaps. |
| **Low** | 1 | Minimal lock-in. Exit strategy documented, tested, and operable within acceptable timelines. |

### 3.3 In-Scope Assessment Dimensions

For each cloud service arrangement in scope, the following dimensions are assessed:

| Dimension | Assessment Criteria | Weight (%) |
|---|---|---|
| Contractual Lock-In | Termination rights, notice periods, data return clauses, portability obligations | [X]% |
| Technical Lock-In | Proprietary formats, API dependencies, integration complexity, migration tooling availability | [X]% |
| Operational Lock-In | Staff skillset dependency, process integration depth, vendor-managed operations | [X]% |
| Financial Lock-In | Exit penalties, migration costs, re-licensing costs, stranded investment | [X]% |
| Data Portability | Data export format, completeness, SLA for export, regulatory data residency on exit | [X]% |
| Exit Readiness | Existence, currency, and test results of exit strategy documentation | [X]% |
| **Total** | | **100%** |

### 3.4 Assessment Exclusion Criteria

The following conditions would exclude a vendor arrangement from a specific dimension's scoring:

- **Contractual dimension excluded** where: the arrangement is month-to-month with no lock-in terms and may be terminated on [X] days' notice;
- **Technical dimension excluded** where: the service is purely open-standard with no proprietary integration;
- **Financial dimension excluded** where: no financial exit penalties are documented in the contract and migration costs are demonstrably negligible.

Any exclusion applied must be documented with supporting rationale in **Section 8 (Findings and Ratings)**.

---

## 4. Methodology

### 4.1 Assessment Approach

*Describe the overall methodology, data collection approach, and assessment process used to conduct this review.*

This assessment was conducted using a structured risk-based methodology aligned with:

- BNM RMiT Clause 17.3;
- [Organization Name]'s Enterprise Risk Management Framework (ERMF);
- ISO/IEC 27017:2015 (Code of Practice for Information Security Controls for Cloud Services);
- [Any other applicable internal or external frameworks].

The assessment was conducted through the following phases:

| Phase | Activities | Responsible Party |
|---|---|---|
| **1. Scoping** | Identify all in-scope cloud service arrangements; confirm business owners; obtain contract documentation | Technology Risk Team |
| **2. Data Collection** | Distribute vendor questionnaires; collect contractual documentation; conduct interviews with system owners | Technology Risk Team / Business Owners |
| **3. Due Diligence Review** | Review vendor responses; validate against contract terms; assess technical architecture | Technology Risk Team / Enterprise Architecture |
| **4. Risk Rating** | Score each arrangement against the assessment criteria framework; calculate composite risk rating | Technology Risk Team |
| **5. Exit Strategy Review** | Review and validate documented exit strategies for completeness and operability | Technology Risk Team / IT Operations |
| **6. Findings Compilation** | Compile findings, ratings, and recommended mitigations | Technology Risk Team |
| **7. Review and Approval** | Submit to Head of Technology Risk; escalate High/Critical findings; obtain sign-off | Head of Technology Risk / CRO |

### 4.2 Data Collection Methods

The following data collection methods were employed:

- **Document Review:** Contractual agreements, service schedules, SLAs, and prior assessment reports;
- **Vendor Questionnaires:** Structured questionnaires issued to each in-scope cloud provider;
- **Stakeholder Interviews:** Structured interviews conducted with business owners and IT system owners;
- **Technical Review:** Architecture diagrams, integration maps, and data flow documentation reviewed by Enterprise Architecture;
- **Exit Strategy Walkthrough:** Tabletop walkthrough of exit procedures with IT Operations and Business Continuity Management.

### 4.3 Scoring Methodology

*Describe how individual dimension scores are aggregated into a composite risk rating.*

**Step 1: Dimension Score Assignment**

Each assessor assigns a score (1–4) to each assessment dimension for each in-scope vendor, per the criteria defined in Section 3.2.

**Step 2: Weighted Score Calculation**

The weighted score for each dimension is calculated as:

> **Weighted Score = Dimension Score × Weight (%)**

**Step 3: Composite Risk Rating**

The composite vendor lock-in risk score is the sum of all weighted dimension scores. The composite score maps to the following risk rating:

| Composite Score Range | Composite Risk Rating |
|---|---|
| 1.00 – 1.74 | Low |
| 1.75 – 2.49 | Medium |
| 2.50 – 3.24 | High |
| 3.25 – 4.00 | Critical |

**Step 4: Override Conditions**

Notwithstanding the composite score, a rating of **Critical** shall automatically be assigned where:

- No documented exit strategy exists for a Critical-rated system; or
- The exit strategy has not been tested within the preceding [X] months; or
- Data portability is technically impossible or contractually restricted.

### 4.4 Assessment Limitations

*Describe any known limitations or constraints that affected the quality or completeness of this assessment.*

| Limitation | Impact | Mitigating Action |
|---|---|---|
| [e.g., Vendor did not respond to questionnaire] | [e.g., Technical dimension scored conservatively] | [e.g., Follow-up issued; rating to be revised on receipt] |
| [Limitation] | [Impact] | [Mitigating Action] |
| [Limitation] | [Impact] | [Mitigating Action] |

---

## 5. Cloud Service Model and Deployment Type

### 5.1 Cloud Service Model Classification

*Document the service model classification for each in-scope cloud service arrangement. The service model determines the division of responsibility between the institution and the provider, and therefore the nature of lock-in risk.*

Each in-scope cloud service arrangement has been classified according to the following service models:

| Service Model | Description | Lock-In Risk Profile |
|---|---|---|
| **IaaS** (Infrastructure-as-a-Service) | Provider supplies virtualized compute, storage, and networking. Institution manages OS, middleware, and applications. | Moderate — infrastructure migration feasible but complex at scale. |
| **PaaS** (Platform-as-a-Service) | Provider supplies runtime environment, development tools, and middleware. Institution manages applications and data. | High — proprietary platform dependencies significantly impede portability. |
| **SaaS** (Software-as-a-Service) | Provider supplies complete application stack. Institution manages configuration and data input. | High to Critical — application replacement required on exit; data portability is primary risk. |
| **Managed Services** | Provider manages specific components (e.g., managed database, managed Kubernetes) on provider infrastructure. | High — operational dependency combined with potential proprietary API exposure. |

### 5.2 Cloud Deployment Type Classification

| Deployment Type | Description | Concentration Risk Implication |
|---|---|---|
| **Public Cloud** | Services delivered via shared, multi-tenant public cloud infrastructure. | Concentration risk if majority of workloads reside with single public cloud provider. |
| **Private Cloud** | Dedicated cloud infrastructure hosted in a third-party data centre or on-premise. | Lower concentration risk but potential single-vendor for hardware/software stack. |
| **Hybrid Cloud** | Combination of public and private cloud, with defined workload distribution policy. | Requires dual-provider risk management governance. |
| **Multi-Cloud** | Use of two or more public cloud providers for equivalent or different workloads. | Mitigates concentration risk; increases operational complexity. |

### 5.3 Cloud Service Inventory

*Complete the following inventory for all in-scope cloud service arrangements. This forms the baseline reference for this assessment.*

| # | System / Service Name | Business Owner | Cloud Provider | Deployment Region | Service Model | Deployment Type | System Criticality | Data Classification |
|---|---|---|---|---|---|---|---|---|
| 1 | [System Name] | [Owner] | [Provider] | [Region] | IaaS / PaaS / SaaS | Public / Private / Hybrid | Critical / High / Medium / Low | Confidential / Restricted / Public |
| 2 | [System Name] | [Owner] | [Provider] | [Region] | IaaS / PaaS / SaaS | Public / Private / Hybrid | Critical / High / Medium / Low | Confidential / Restricted / Public |
| 3 | [System Name] | [Owner] | [Provider] | [Region] | IaaS / PaaS / SaaS | Public / Private / Hybrid | Critical / High / Medium / Low | Confidential / Restricted / Public |
| 4 | [System Name] | [Owner] | [Provider] | [Region] | IaaS / PaaS / SaaS | Public / Private / Hybrid | Critical / High / Medium / Low | Confidential / Restricted / Public |
| 5 | [System Name] | [Owner] | [Provider] | [Region] | IaaS / PaaS / SaaS | Public / Private / Hybrid | Critical / High / Medium / Low | Confidential / Restricted / Public |

### 5.4 Vendor Concentration Analysis

*Summarize the distribution of critical and high-criticality workloads across cloud providers to identify concentration risk.*

**Workload Distribution by Provider:**

| Cloud Provider | No. of Systems | No. of Critical Systems | % of Total Workloads | % of Critical Workloads |
|---|---|---|---|---|
| [Provider A] | [X] | [X] | [X]% | [X]% |
| [Provider B] | [X] | [X] | [X]% | [X]% |
| [Provider C] | [X] | [X] | [X]% | [X]% |
| **Total** | **[X]** | **[X]** | **100%** | **100%** |

**Concentration Risk Assessment:**

> [Narrative summary of concentration risk findings. For example: "As at [Assessment Reference Date], [X]% of [Organization Name]'s critical technology workloads are hosted with [Provider A], which represents a concentration risk above the institution's approved threshold of [X]%. This finding is classified as [High / Medium] and is subject to the mitigating actions described in Section 12."]

---

## 6. Vendor Risk Tiering Criteria

### 6.1 Vendor Tiering Framework

*This section defines the criteria used to categorize cloud service vendors into risk tiers. Tiering determines the level of due diligence, monitoring frequency, and exit strategy requirements applicable to each vendor engagement.*

[Organization Name] applies a three-tier vendor risk framework to all cloud service arrangements, aligned with the BNM Outsourcing Policy and RMiT requirements:

| Tier | Label | Definition | Monitoring Frequency | Exit Strategy Requirement |
|---|---|---|---|---|
| **Tier 1** | Critical Vendor | Cloud service supports a Critical or High-criticality system; loss of service would cause material financial loss, regulatory breach, or significant operational disruption to customers. | Monthly | Fully documented, tested, and independently validated exit strategy mandatory. |
| **Tier 2** | Important Vendor | Cloud service supports a Medium-criticality system; loss of service would cause moderate internal operational disruption without direct customer impact. | Quarterly | Documented exit strategy with annual walkthrough mandatory. |
| **Tier 3** | Standard Vendor | Cloud service supports a Low-criticality system; loss of service would have minimal operational impact and can be tolerated for an extended period. | Annually | High-level exit strategy documented. |

### 6.2 Tiering Criteria Matrix

*The following criteria are used to determine the tier assignment for each vendor engagement.*

| Criterion | Tier 1 (Critical) | Tier 2 (Important) | Tier 3 (Standard) |
|---|---|---|---|
| **System Criticality** | Critical or High | Medium | Low |
| **Customer Impact** | Direct material impact | Indirect or limited impact | No customer impact |
| **Regulatory Data** | Contains PII, financial data, or regulated data | May contain limited regulated data | No regulated data |
| **Revenue Dependency** | Core revenue-generating system | Operational support system | Administrative or internal system |
| **Recovery Time Objective (RTO)** | < 4 hours | 4–24 hours | > 24 hours |
| **Recovery Point Objective (RPO)** | < 1 hour | 1–8 hours | > 8 hours |
| **Substituability** | No equivalent alternative available within acceptable timeframe | Alternative available within [X] months | Alternative readily available |
| **Annual Spend** | > RM [X] million | RM [X]K – RM [X] million | < RM [X]K |

### 6.3 Vendor Tier Assignment Register

*Record the tier assignment for each in-scope vendor, with supporting rationale.*

| # | Cloud Provider | Primary System(s) Supported | Assigned Tier | Rationale | Assigned By | Assignment Date |
|---|---|---|---|---|---|---|
| 1 | [Provider] | [System(s)] | Tier [1/2/3] | [Rationale] | [Name] | [Date] |
| 2 | [Provider] | [System(s)] | Tier [1/2/3] | [Rationale] | [Name] | [Date] |
| 3 | [Provider] | [System(s)] | Tier [1/2/3] | [Rationale] | [Name] | [Date] |
| 4 | [Provider] | [System(s)] | Tier [1/2/3] | [Rationale] | [Name] | [Date] |
| 5 | [Provider] | [System(s)] | Tier [1/2/3] | [Rationale] | [Name] | [Date] |

### 6.4 Tier Escalation and De-escalation Triggers

The following events may trigger a review and adjustment of the vendor's assigned tier outside the standard quarterly review cycle:

**Escalation Triggers (upgrade to higher tier):**

- Material change in the system's criticality classification;
- Acquisition of new business functions reliant on the vendor's service;
- Adverse regulatory finding referencing the vendor;
- Significant increase in annual spend beyond tier thresholds;
- Evidence of financial distress, merger, acquisition, or geopolitical risk affecting the vendor.

**De-escalation Triggers (downgrade to lower tier):**

- Decommissioning or migration of critical workloads to an alternative provider;
- Material reduction in institutional dependency on the vendor's service;
- Successful completion of a parallel migration to an equivalent alternative.

---

## 7. Due Diligence Checklist

### 7.1 Due Diligence Framework

*This section provides a structured due diligence checklist to be completed for each in-scope Tier 1 and Tier 2 vendor. Tier 3 vendors are subject to a reduced checklist as noted.*

Due diligence must be completed:

- **Prior to initial engagement** with any new cloud service provider;
- **Annually** for all Tier 1 vendors;
- **Biennially** for all Tier 2 vendors;
- **On material contract renewal** for all tiers.

### 7.2 Vendor Financial and Operational Stability

*Assess the financial health, corporate governance, and operational stability of the cloud provider.*

| # | Due Diligence Item | Tier Applicability | Evidence Obtained | Status | Findings / Notes |
|---|---|---|---|---|---|
| 1.1 | Reviewed vendor's most recent audited financial statements | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 1.2 | Confirmed vendor holds appropriate insurance coverage (professional indemnity, cyber liability) | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 1.3 | Verified no material adverse regulatory actions against vendor in preceding 24 months | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 1.4 | Reviewed vendor's business continuity and disaster recovery capabilities | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 1.5 | Confirmed vendor's corporate ownership structure; identified any change of control risks | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 1.6 | Confirmed vendor has no pending insolvency, acquisition, or material litigation proceedings | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |

### 7.3 Contractual and Legal Due Diligence

| # | Due Diligence Item | Tier Applicability | Evidence Obtained | Status | Findings / Notes |
|---|---|---|---|---|---|
| 2.1 | Contract includes explicit data portability and return provisions on termination | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 2.2 | Contract specifies minimum notice period for service termination (minimum [X] months) | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 2.3 | Contract includes right-to-audit and right-to-inspect clauses | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 2.4 | Governing law is Malaysian law or equivalent acceptable jurisdiction | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 2.5 | Contract prohibits vendor from sub-contracting core services without prior written consent | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 2.6 | Contract specifies data residency and data sovereignty requirements consistent with PDPA and BNM requirements | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 2.7 | Exit assistance obligations (transition support, knowledge transfer) are explicitly documented in contract | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 2.8 | Contract does not contain excessive lock-in provisions (e.g., auto-renewal, price escalation, capacity reservation penalties) | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |

### 7.4 Technical and Architectural Due Diligence

| # | Due Diligence Item | Tier Applicability | Evidence Obtained | Status | Findings / Notes |
|---|---|---|---|---|---|
| 3.1 | Data export in open, industry-standard formats confirmed (e.g., JSON, CSV, SQL dump) | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 3.2 | Vendor does not require proprietary client software as the sole means of data access or export | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 3.3 | APIs are documented, versioned, and based on open standards | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 3.4 | Integration architecture reviewed; proprietary integration points documented | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 3.5 | Data migration tooling and estimated migration timeline confirmed with vendor | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 3.6 | Encryption key management does not create dependency on vendor-managed HSMs or KMS | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 3.7 | Backup and recovery processes do not require vendor infrastructure for restoration | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 3.8 | Alternative cloud providers assessed for technical equivalence and migration feasibility | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |

### 7.5 Security and Compliance Due Diligence

| # | Due Diligence Item | Tier Applicability | Evidence Obtained | Status | Findings / Notes |
|---|---|---|---|---|---|
| 4.1 | Vendor holds current ISO/IEC 27001 certification | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 4.2 | Vendor holds current SOC 2 Type II report | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 4.3 | Vendor holds current CSA STAR certification or equivalent | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 4.4 | Vendor's PDPA-equivalent data processing addendum (DPA) reviewed and executed | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 4.5 | Incident notification procedures meet BNM requirements (notification within [X] hours) | Tier 1, 2, 3 | [Document Reference] | Pass / Fail / N/A | [Notes] |
| 4.6 | Penetration testing and vulnerability management programme confirmed | Tier 1, 2 | [Document Reference] | Pass / Fail / N/A | [Notes] |

### 7.6 Due Diligence Summary

| Vendor | Total Items | Pass | Fail | N/A | Outstanding | Overall Status |
|---|---|---|---|---|---|---|
| [Provider A] | [X] | [X] | [X] | [X] | [X] | Satisfactory / Requires Follow-Up / Unsatisfactory |
| [Provider B] | [X] | [X] | [X] | [X] | [X] | Satisfactory / Requires Follow-Up / Unsatisfactory |
| [Provider C] | [X] | [X] | [X] | [X] | [X] | Satisfactory / Requires Follow-Up / Unsatisfactory |

---

## 8. Findings and Ratings

### 8.1 Summary of Findings

*This section presents the consolidated risk ratings for each in-scope cloud service arrangement. Findings should be supported by evidence referenced in Section 7 and the assessor's working papers.*

**Assessment Date:** [Assessment Date]

**Summary Risk Rating Distribution:**

| Risk Rating | No. of Vendors | No. of Systems |
|---|---|---|
| Critical | [X] | [X] |
| High | [X] | [X] |
| Medium | [X] | [X] |
| Low | [X] | [X] |
| **Total** | **[X]** | **[X]** |

### 8.2 Vendor-Level Risk Ratings

*Complete a detailed risk rating for each in-scope vendor arrangement.*

---

#### Vendor Assessment: [Vendor / Provider Name]

**System(s) Supported:** [System Name(s)]
**Assessment Date:** [Date]
**Assessor:** [Name]

| Dimension | Score (1–4) | Weight (%) | Weighted Score | Key Finding |
|---|---|---|---|---|
| Contractual Lock-In | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| Technical Lock-In | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| Operational Lock-In | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| Financial Lock-In | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| Data Portability | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| Exit Readiness | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| **Composite Score** | | **100%** | **[Total]** | |
| **Composite Risk Rating** | | | | **[Low / Medium / High / Critical]** |

**Narrative Finding:**

> [2–4 sentences summarizing the key drivers of the composite risk rating, notable strengths, and primary areas of concern for this vendor arrangement.]

**Override Applied:** Yes / No
**Override Rationale (if applicable):** [Describe reason for override, e.g., "No exit strategy exists for this Critical system. Automatic Critical rating applied per Section 4.3 override conditions."]

---

#### Vendor Assessment: [Vendor / Provider Name]

**System(s) Supported:** [System Name(s)]
**Assessment Date:** [Date]
**Assessor:** [Name]

| Dimension | Score (1–4) | Weight (%) | Weighted Score | Key Finding |
|---|---|---|---|---|
| Contractual Lock-In | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| Technical Lock-In | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| Operational Lock-In | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| Financial Lock-In | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| Data Portability | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| Exit Readiness | [Score] | [X]% | [Score × Weight] | [Brief finding] |
| **Composite Score** | | **100%** | **[Total]** | |
| **Composite Risk Rating** | | | | **[Low / Medium / High / Critical]** |

**Narrative Finding:**

> [2–4 sentences summarizing the key drivers of the composite risk rating for this vendor arrangement.]

**Override Applied:** Yes / No
**Override Rationale (if applicable):** [Description]

---

### 8.3 Comparative Risk Heatmap

*Provide a visual summary of vendor risk ratings across the two key risk dimensions: likelihood of lock-in materializing and impact if lock-in occurs.*

| | **Low Impact** | **Medium Impact** | **High Impact** | **Critical Impact** |
|---|---|---|---|---|
| **High Probability** | Medium | High | Critical | Critical |
| **Medium Probability** | Low | Medium | High | Critical |
| **Low Probability** | Low | Low | Medium | High |
| **Negligible Probability** | Low | Low | Low | Medium |

**Vendor Placement on Heatmap:**

| Vendor | Probability of Lock-In | Impact of Lock-In | Heatmap Rating |
|---|---|---|---|
| [Provider A] | [High / Medium / Low / Negligible] | [Critical / High / Medium / Low] | [Rating] |
| [Provider B] | [High / Medium / Low / Negligible] | [Critical / High / Medium / Low] | [Rating] |
| [Provider C] | [High / Medium / Low / Negligible] | [Critical / High / Medium / Low] | [Rating] |

### 8.4 Key Findings Register

*List all material findings identified during this assessment, cross-referenced to the relevant vendor and dimension.*

| Finding ID | Vendor | System | Dimension | Finding Description | Risk Rating | Recommended Action | Target Resolution Date | Owner |
|---|---|---|---|---|---|---|---|---|
| VLI-[YYYY]-001 | [Provider] | [System] | [Dimension] | [Description] | Critical / High / Medium / Low | [Action] | [Date] | [Owner] |
| VLI-[YYYY]-002 | [Provider] | [System] | [Dimension] | [Description] | Critical / High / Medium / Low | [Action] | [Date] | [Owner] |
| VLI-[YYYY]-003 | [Provider] | [System] | [Dimension] | [Description] | Critical / High / Medium / Low | [Action] | [Date] | [Owner] |
| VLI-[YYYY]-004 | [Provider] | [System] | [Dimension] | [Description] | Critical / High / Medium / Low | [Action] | [Date] | [Owner] |
| VLI-[YYYY]-005 | [Provider] | [System] | [Dimension] | [Description] | Critical / High / Medium / Low | [Action] | [Date] | [Owner] |

### 8.5 Findings from Previous Assessment — Status Update

*Track the status of findings identified in the prior assessment period.*

| Finding ID (Prior) | Original Finding | Original Rating | Current Status | Updated Rating | Evidence of Resolution | Notes |
|---|---|---|---|---|---|---|
| VLI-[YYYY-1]-001 | [Description] | [Rating] | Resolved / In Progress / Overdue / Accepted | [Current Rating] | [Evidence] | [Notes] |
| VLI-[YYYY-1]-002 | [Description] | [Rating] | Resolved / In Progress / Overdue / Accepted | [Current Rating] | [Evidence] | [Notes] |
| VLI-[YYYY-1]-003 | [Description] | [Rating] | Resolved / In Progress / Overdue / Accepted | [Current Rating] | [Evidence] | [Notes] |

---

## 9. SLA and KPI Definitions

### 9.1 SLA Framework Overview

*This section defines the Service Level Agreement (SLA) and Key Performance Indicator (KPI) parameters that are relevant to vendor lock-in risk monitoring and exit strategy operability.*

Effective SLA management is a key control in managing vendor lock-in risk. Inadequate SLA terms — or persistent SLA failures — may elevate lock-in risk by undermining the institution's confidence in the vendor's continued operational suitability, while also creating barriers to timely identification of migration triggers.

### 9.2 Core SLA Parameters by Service Model

| SLA Parameter | IaaS | PaaS | SaaS | Monitoring Method |
|---|---|---|---|---|
| **Service Availability (Uptime)** | ≥ [X]% per month | ≥ [X]% per month | ≥ [X]% per month | Vendor dashboard / third-party monitor |
| **Planned Maintenance Window** | ≤ [X] hours/month | ≤ [X] hours/month | ≤ [X] hours/month | Advance notice review |
| **Incident Response — Critical** | ≤ [X] minutes | ≤ [X] minutes | ≤ [X] minutes | Incident ticket review |
| **Incident Response — High** | ≤ [X] hours | ≤ [X] hours | ≤ [X] hours | Incident ticket review |
| **Data Recovery (RPO)** | ≤ [X] hours | ≤ [X] hours | ≤ [X] hours | DR test results |
| **Service Restoration (RTO)** | ≤ [X] hours | ≤ [X] hours | ≤ [X] hours | DR test results |
| **Data Export SLA on Request** | ≤ [X] business days | ≤ [X] business days | ≤ [X] business days | Contract clause reference |
| **Exit Transition Support Period** | ≥ [X] months | ≥ [X] months | ≥ [X] months | Contract clause reference |

### 9.3 Vendor SLA Register

*Document the contracted SLA commitments for each in-scope vendor and compare against the organization's minimum requirements.*

| Vendor | SLA Parameter | Required Standard | Contracted Standard | Gap | Status |
|---|---|---|---|---|---|
| [Provider A] | Availability | [X]% | [X]% | [Delta] | Compliant / Non-Compliant |
| [Provider A] | RTO | [X] hours | [X] hours | [Delta] | Compliant / Non-Compliant |
| [Provider A] | RPO | [X] hours | [X] hours | [Delta] | Compliant / Non-Compliant |
| [Provider A] | Data Export SLA | [X] days | [X] days | [Delta] | Compliant / Non-Compliant |
| [Provider A] | Exit Support Period | [X] months | [X] months | [Delta] | Compliant / Non-Compliant |
| [Provider B] | Availability | [X]% | [X]% | [Delta] | Compliant / Non-Compliant |
| [Provider B] | RTO | [X] hours | [X] hours | [Delta] | Compliant / Non-Compliant |
| [Provider B] | RPO | [X] hours | [X] hours | [Delta] | Compliant / Non-Compliant |
| [Provider B] | Data Export SLA | [X] days | [X] days | [Delta] | Compliant / Non-Compliant |
| [Provider B] | Exit Support Period | [X] months | [X] months | [Delta] | Compliant / Non-Compliant |

### 9.4 KPI Definitions for Ongoing Vendor Lock-In Monitoring

*Define the KPIs used to monitor vendor lock-in risk on an ongoing basis between formal quarterly assessments.*

| KPI ID | KPI Name | Definition | Measurement Frequency | Target | Alert Threshold | Data Source |
|---|---|---|---|---|---|---|
| KPI-VL-01 | Vendor Concentration Ratio | % of critical workloads hosted with the single largest cloud provider | Monthly | < [X]% | > [X]% | Cloud inventory register |
| KPI-VL-02 | Exit Strategy Currency | % of Tier 1 vendor exit strategies reviewed within the preceding [X] months | Quarterly | 100% | < 100% | Exit strategy register |
| KPI-VL-03 | Exit Strategy Test Coverage | % of Tier 1 vendor exit strategies tested within the preceding [X] months | Semi-annually | 100% | < 100% | Test evidence register |
| KPI-VL-04 | SLA Compliance Rate | % of SLA parameters met by all in-scope vendors over the period | Monthly | ≥ [X]% | < [X]% | Vendor performance reports |
| KPI-VL-05 | Data Portability Readiness | % of critical systems for which a full data export has been tested within the preceding [X] months | Quarterly | 100% | < 100% | Data portability test log |
| KPI-VL-06 | Unresolved High/Critical Findings (Age) | Number of open High or Critical findings aged beyond [X] days | Monthly | 0 | ≥ 1 | Findings register |
| KPI-VL-07 | Vendor Due Diligence Currency | % of Tier 1 vendor due diligence reviews completed within required period | Annually | 100% | < 100% | Due diligence register |

### 9.5 SLA Breach Escalation Procedure

In the event of an SLA breach by any in-scope cloud vendor, the following escalation procedure applies:

| Breach Severity | Definition | Initial Response | Escalation Timeline | Escalation Path |
|---|---|---|---|---|
| **Critical SLA Breach** | Availability falls below [X]% or RTO/RPO breached for a Critical system | Immediate vendor notification; incident declared | Within [X] hours | IT Operations → Head of IT → CTO → CRO |
| **High SLA Breach** | Availability falls below [X]% or repeated incident response SLA failures | Vendor notification within [X] business days | Within [X] business days | IT Operations → Head of IT → Head of Technology Risk |
| **Medium SLA Breach** | SLA metric degraded but within manageable tolerance | Formal vendor notification; remediation plan requested | Within [X] business days | IT Operations → [Designated Owner] |
| **Persistent SLA Breach** | Same SLA metric breached in [X] consecutive months | Formal breach notice; contract review initiated; exit strategy readiness confirmed | Immediate | Head of Technology Risk → CTO → Legal |

---

## 10. Exit Strategy Requirements

### 10.1 Exit Strategy Policy

*Define the policy requirements for exit strategies for each cloud service arrangement, aligned with RMiT Clause 17.3.*

[Organization Name] requires that a documented, validated, and periodically tested exit strategy be maintained for all Tier 1 and Tier 2 cloud service arrangements. Exit strategies must be maintained as living documents and reviewed in conjunction with each quarterly Vendor Lock-In Risk Assessment.

**Minimum Exit Strategy Requirements by Tier:**

| Requirement | Tier 1 (Critical) | Tier 2 (Important) | Tier 3 (Standard) |
|---|---|---|---|
| Exit strategy document mandatory | Yes | Yes | Recommended |
| Executive sign-off required | Yes | Yes | No |
| Alternative vendor identified and assessed | Yes | Yes | Optional |
| Data portability test completed | Annually | Biennially | Optional |
| Tabletop exercise completed | Annually | Biennially | Optional |
| Full exit simulation completed | Every [X] years | Optional | Optional |
| Maximum migration timeline documented | ≤ [X] months | ≤ [X] months | ≤ [X] months |

### 10.2 Exit Strategy Components

Each exit strategy document must include the following minimum components:

1. **Trigger Conditions** — The specific events or circumstances that would cause an exit strategy to be activated;
2. **Exit Options** — At least [two] alternative cloud service providers or delivery models assessed as technically and operationally viable;
3. **Migration Timeline** — A documented, vendor-validated timeline for the full migration of data, workloads, and integrations;
4. **Data Portability Plan** — A step-by-step plan for exporting all institutional data, validating completeness and integrity, and re-ingesting into the target environment;
5. **Transition Support Plan** — Documentation of vendor obligations to provide transition support, and the institution's plan for managing the transition period;
6. **Staff and Skills Plan** — Identification of any skills gaps that would arise on exit and the plan to address them;
7. **Cost Estimate** — High-level estimate of direct and indirect exit costs;
8. **Dependencies Map** — Identification of all internal and external systems dependent on the exiting vendor's service;
9. **Regulatory Notification Plan** — Description of any regulatory notification obligations triggered by a planned or forced exit;
10. **Test Results** — Record of the most recent exit strategy test or tabletop exercise.

### 10.3 Exit Strategy Register

*Maintain a register of exit strategies for all in-scope cloud service arrangements, tracking currency and test status.*

| # | Vendor | System | Tier | Exit Strategy Document Ref | Last Review Date | Last Test Date | Test Type | Test Outcome | Next Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [Provider] | [System] | [Tier] | [Doc Ref] | [Date] | [Date] | Tabletop / Simulation / Full | Pass / Fail / Not Tested | [Date] | Current / Overdue / Missing |
| 2 | [Provider] | [System] | [Tier] | [Doc Ref] | [Date] | [Date] | Tabletop / Simulation / Full | Pass / Fail / Not Tested | [Date] | Current / Overdue / Missing |
| 3 | [Provider] | [System] | [Tier] | [Doc Ref] | [Date] | [Date] | Tabletop / Simulation / Full | Pass / Fail / Not Tested | [Date] | Current / Overdue / Missing |
| 4 | [Provider] | [System] | [Tier] | [Doc Ref] | [Date] | [Date] | Tabletop / Simulation / Full | Pass / Fail / Not Tested | [Date] | Current / Overdue / Missing |
| 5 | [Provider] | [System] | [Tier] | [Doc Ref] | [Date] | [Date] | Tabletop / Simulation / Full | Pass / Fail / Not Tested | [Date] | Current / Overdue / Missing |

### 10.4 Exit Strategy Gap Analysis

*Identify and document any gaps in exit strategy coverage identified during this assessment period.*

| Gap ID | Vendor | System | Gap Description | Gap Severity | Remediation Action | Target Date | Owner |
|---|---|---|---|---|---|---|---|
| ES-GAP-001 | [Provider] | [System] | [e.g., No alternative vendor identified or assessed] | Critical / High / Medium | [Action] | [Date] | [Owner] |
| ES-GAP-002 | [Provider] | [System] | [e.g., Data export has never been tested] | Critical / High / Medium | [Action] | [Date] | [Owner] |
| ES-GAP-003 | [Provider] | [System] | [e.g., Exit strategy last reviewed more than 12 months ago] | High / Medium | [Action] | [Date] | [Owner] |
| ES-GAP-004 | [Provider] | [System] | [e.g., Migration timeline exceeds policy maximum of [X] months] | High / Medium | [Action] | [Date] | [Owner] |

### 10.5 Exit Trigger Conditions

*Define the standard trigger conditions that would initiate activation of an exit strategy for any cloud service arrangement.*

The following trigger conditions, if met, will initiate a formal review of the relevant exit strategy and may result in the activation of an exit process:

| Trigger Category | Trigger Condition | Response |
|---|---|---|
| **Vendor Financial Risk** | Vendor enters administration, receivership, or insolvency proceedings | Immediate activation of exit strategy; escalation to CRO and Board |
| **Regulatory Direction** | BNM or other regulator directs the institution to exit a particular cloud service arrangement | Immediate activation of exit strategy |
| **Persistent SLA Failure** | Vendor fails to meet critical SLA parameters for [X] consecutive months | Formal exit review initiated |
| **Security Incident** | Material security breach or data compromise affecting the vendor's infrastructure | Formal exit review initiated; escalation to CISO and CRO |
| **Contractual Dispute** | Unresolved contractual dispute that cannot be resolved within [X] months | Legal and risk review; exit strategy readiness confirmed |
| **Strategic Change** | Institution's technology strategy requires exit from specific cloud provider or service model | Managed exit process activated |
| **Merger / Acquisition** | Vendor is subject to change of control that materially alters the risk profile | Exit strategy reviewed; may escalate to activation |

---

## 11. Roles and Responsibilities

### 11.1 RACI Matrix

*Define the accountabilities for vendor lock-in risk management across the institution.*

**RACI Key:**
- **R** — Responsible (performs the activity)
- **A** — Accountable (owns the outcome; single point of accountability)
- **C** — Consulted (provides input before or during the activity)
- **I** — Informed (notified of outcomes)

| Activity | Head of Technology Risk | CTO / Head of IT | CISO | Enterprise Architecture | IT Operations | Business Owners | CRO | Board Risk Committee | Legal / Compliance | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve Vendor Lock-In Risk Assessment | A | C | C | C | I | I | C | I | I | I |
| Conduct vendor lock-in assessment | R | C | C | C | C | R | I | I | I | I |
| Assign vendor tier classifications | R | C | I | C | I | C | A | I | I | I |
| Complete vendor due diligence | R | C | C | R | C | C | I | I | C | I |
| Develop and maintain exit strategies | R | C | C | R | R | C | I | I | C | I |
| Test exit strategies | R | C | C | C | R | C | I | I | I | I |
| Monitor KPIs and SLA compliance | R | I | I | I | R | I | I | I | I | I |
| Escalate High/Critical findings | R | C | C | I | I | I | A | I | C | I |
| Report findings to Board Risk Committee | A | C | I | I | I | I | C | R | I | I |
| Review and approve exit strategy activation | A | C | C | C | I | C | R | I | C | I |
| Manage exit transition | I | A | C | C | R | C | I | I | C | I |
| Conduct post-exit review | R | C | C | C | C | C | C | I | I | R |

### 11.2 Key Roles and Definitions

| Role | Responsibilities in the Context of Vendor Lock-In Risk Management |
|---|---|
| **Head of Technology Risk** | Overall accountability for the Vendor Lock-In Risk Assessment process; approves assessment outputs; escalates material findings to the CRO and Board Risk Committee. |
| **CTO / Head of IT** | Provides strategic direction on cloud adoption; ensures technology decisions account for lock-in risk; owns the exit strategy activation decision for non-critical scenarios. |
| **CISO** | Provides input on security-related lock-in risks; advises on encryption key management, access control dependencies, and incident response implications. |
| **Enterprise Architecture** | Provides technical assessment of proprietary dependencies, API complexity, integration architecture, and migration feasibility. |
| **IT Operations** | Executes and validates exit strategy tests; manages vendor performance monitoring; raises SLA breach alerts. |
| **Business Owners** | Provide input on business impact of lock-in scenarios; confirm system criticality classifications; sign off on exit strategy timelines for their systems. |
| **CRO** | Approves vendor risk tiering for Tier 1 vendors; receives escalation of Critical and High risk findings; approves risk acceptance decisions. |
| **Board Risk Committee** | Receives quarterly summary of vendor lock-in risk position; approves institution-level risk appetite for vendor concentration. |
| **Legal / Compliance** | Reviews contractual lock-in provisions; advises on regulatory notification obligations; provides input on governing law and enforceability of exit clauses. |
| **Internal Audit** | Independently validates the adequacy and effectiveness of the vendor lock-in risk management framework on a periodic basis. |

---

## 12. Risk Treatment Plan

### 12.1 Risk Treatment Approach

*Describe the organization's chosen approach to treating identified vendor lock-in risks.*

For each material finding identified in Section 8, [Organization Name] adopts one of the following risk treatment approaches, subject to approval by the relevant authority:

| Treatment | Description | Approval Authority |
|---|---|---|
| **Mitigate** | Implement specific controls to reduce the likelihood or impact of lock-in risk materializing (e.g., implement multi-cloud architecture, re-negotiate contractual exit terms, develop exit strategy). | Head of Technology Risk |
| **Transfer** | Shift financial consequences of lock-in risk to a third party (e.g., via contractual penalties, insurance). | Head of Technology Risk / CRO |
| **Accept** | Formally accept the residual risk where the cost of mitigation exceeds the expected benefit and risk is within appetite. Requires formal Risk Acceptance Form. | CRO (for High); Board Risk Committee (for Critical) |
| **Avoid** | Exit the vendor arrangement or decline to proceed with a new engagement where lock-in risk exceeds appetite and cannot be mitigated. | CTO / CRO |

### 12.2 Risk Treatment Action Plan

*Document the agreed risk treatment actions for all open findings from this assessment.*

| Finding ID | Vendor | System | Risk Rating | Treatment Approach | Treatment Action | Target Date | Responsible Owner | Progress Status |
|---|---|---|---|---|---|---|---|---|
| VLI-[YYYY]-001 | [Provider] | [System] | Critical / High / Medium | Mitigate / Transfer / Accept / Avoid | [Specific action] | [Date] | [Owner] | Not Started / In Progress / Completed / Overdue |
| VLI-[YYYY]-002 | [Provider] | [System] | Critical / High / Medium | Mitigate / Transfer / Accept / Avoid | [Specific action] | [Date] | [Owner] | Not Started / In Progress / Completed / Overdue |
| VLI-[YYYY]-003 | [Provider] | [System] | Critical / High / Medium | Mitigate / Transfer / Accept / Avoid | [Specific action] | [Date] | [Owner] | Not Started / In Progress / Completed / Overdue |
| VLI-[YYYY]-004 | [Provider] | [System] | Critical / High / Medium | Mitigate / Transfer / Accept / Avoid | [Specific action] | [Date] | [Owner] | Not Started / In Progress / Completed / Overdue |
| VLI-[YYYY]-005 | [Provider] | [System] | Critical / High / Medium | Mitigate / Transfer / Accept / Avoid | [Specific action] | [Date] | [Owner] | Not Started / In Progress / Completed / Overdue |

### 12.3 Risk Acceptance Register

*Formally document any risk acceptance decisions taken during this assessment period.*

| Acceptance ID | Vendor | System | Risk Rating | Reason for Acceptance | Residual Risk | Approved By | Approval Date | Expiry Date | Review Conditions |
|---|---|---|---|---|---|---|---|---|---|
| RA-[YYYY]-001 | [Provider] | [System] | [Rating] | [Justification] | [Rating] | [Approver] | [Date] | [Date] | [When to re-review] |
| RA-[YYYY]-002 | [Provider] | [System] | [Rating] | [Justification] | [Rating] | [Approver] | [Date] | [Date] | [When to re-review] |

---

## 13. Review and Approval

### 13.1 Review Schedule

This document is subject to the following review schedule:

| Review Type | Frequency | Trigger | Responsible Party |
|---|---|---|---|
| **Scheduled Review** | Quarterly | Calendar-based | Head of Technology Risk |
| **Ad-hoc Review** | As required | New material cloud service engagement; significant change to existing engagement; material vendor incident; regulatory direction | Head of Technology Risk |
| **Full Framework Review** | Annually | Annual policy review cycle | Head of Technology Risk / CRO |

### 13.2 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 0.1 | [Date] | [Author] | Initial draft | [Approver] |
| 1.0 | [Date] | [Author] | First approved version | [Approver] |
| [X.X] | [Date] | [Author] | [Description of changes] | [Approver] |
| [X.X] | [Date] | [Author] | [Description of changes] | [Approver] |

### 13.3 Approval Sign-Off

*This assessment must be approved by the following parties prior to submission to the Board Risk Committee.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** — Technology Risk Analyst | [Name] | | [Date] |
| **Reviewed By** — Head of Technology Risk | [Name] | | [Date] |
| **Reviewed By** — CTO / Head of IT | [Name] | | [Date] |
| **Approved By** — Chief Risk Officer | [Name] | | [Date] |
| **Noted By** — Board Risk Committee Representative | [Name] | | [Date] |

### 13.4 Distribution List

| Recipient | Role | Reason for Distribution |
|---|---|---|
| [Name] | Head of Technology Risk | Owner |
| [Name] | Chief Risk Officer | Approval authority |
| [Name] | CTO / Head of IT | Technical oversight |
| [Name] | CISO | Security oversight |
| [Name] | Board Risk Committee Secretary | BRC submission |
| [Name] | Internal Audit | Independent oversight |
| [Name] | Head of Compliance | Regulatory compliance oversight |

---

## 14. References

### 14.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clauses |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 17.3 (Vendor Lock-In), 17.1 (Cloud Risk Assessment), 17.4 (Concentration Risk), 17.5 (Exit Strategy Testing) |
| BNM Outsourcing Policy | Guidelines on Outsourcing | Bank Negara Malaysia | All applicable clauses relating to third-party technology service providers |
| PDPA 2010 | Personal Data Protection Act 2010 | Malaysian Government | Section 6 (General Principles), Section 9 (Security Principle), Section 12 (Data Processor obligations) |
| NACSA | National Cyber Security Agency Guidelines | NACSA Malaysia | Critical Information Infrastructure protection requirements |

### 14.2 Standards References

| Reference | Title | Issuing Body | Relevance |
|---|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO / IEC | Overall information security management |
| ISO/IEC 27017:2015 | Code of Practice for Information Security Controls for Cloud Services | ISO / IEC | Cloud-specific security controls |
| ISO/IEC 27018:2019 | Code of Practice for Protection of PII in Public Clouds | ISO / IEC | Personal data in cloud environments |
| ISO/IEC 19086 | Cloud SLA Framework | ISO / IEC | Cloud SLA standards |
| CSA Cloud Controls Matrix (CCM) | Cloud Controls Matrix | Cloud Security Alliance | Cloud security assessment framework |
| NIST SP 800-145 | The NIST Definition of Cloud Computing | NIST | Cloud service model definitions |

### 14.3 Internal References

| Document Title | Document ID | Version | Owner |
|---|---|---|---|
| Enterprise Risk Management Framework | [Document ID] | [Version] | Chief Risk Officer |
| Cloud Services Policy | [Document ID] | [Version] | Head of IT |
| Technology Risk Appetite Statement | [Document ID] | [Version] | Board Risk Committee |
| Outsourcing Risk Management Policy | [Document ID] | [Version] | Head of Technology Risk |
| Business Continuity Management Policy | [Document ID] | [Version] | Head of BCM |
| Information Classification Policy | [Document ID] | [Version] | CISO |
| Vendor Management Policy | [Document ID] | [Version] | Head of Procurement |

---

## 15. Appendices

### Appendix A: Vendor Questionnaire Template

*This appendix contains the standard questionnaire issued to cloud service providers as part of the annual due diligence process.*

**Instructions to Vendor:**

> Please complete all sections of this questionnaire and return it to [Contact Name] at [Contact Email] by [Due Date]. Supporting documentation (certifications, audit reports, SLA schedules) should be submitted as attachments. Incomplete responses will be followed up by [Organization Name]'s Technology Risk team.

**Section A: Vendor Organization Information**

| Question | Vendor Response |
|---|---|
| Full legal entity name | |
| Registered address | |
| Primary contact name and role | |
| Primary contact email and phone | |
| Date of incorporation | |
| Key regulatory licenses held | |
| Parent company (if applicable) | |
| Ultimate beneficial owner(s) | |

**Section B: Financial Stability**

| Question | Vendor Response |
|---|---|
| Most recent audited financial year-end | |
| Revenue for most recent financial year (RM / USD) | |
| Net profit / (loss) for most recent financial year | |
| Current credit rating (if applicable) | |
| Any pending insolvency, administration, or material litigation proceedings? | |
| Any planned mergers, acquisitions, or change of control events? | |

**Section C: Cloud Service Description**

| Question | Vendor Response |
|---|---|
| Service name and brief description | |
| Service model (IaaS / PaaS / SaaS / Other) | |
| Deployment model (Public / Private / Hybrid / Multi-Cloud) | |
| Primary data centre location(s) | |
| Data residency locations for [Organization Name]'s data | |
| Failover / redundancy site location(s) | |

**Section D: Data Portability and Exit**

| Question | Vendor Response |
|---|---|
| What data export formats are supported? | |
| What is the estimated time to complete a full data export for [Organization Name]'s data volume? | |
| Is data export available at any time, or only upon termination? | |
| What transition support will the vendor provide on contract termination? | |
| What is the minimum notice period for contract termination by [Organization Name]? | |
| Are there any financial penalties applicable on early termination? | |
| Does the vendor provide migration assistance to a competing provider? | |

**Section E: Security and Compliance**

| Question | Vendor Response |
|---|---|
| Current ISO/IEC 27001 certification — certificate number and expiry | |
| Current SOC 2 Type II — report period and scope | |
| CSA STAR certification level | |
| Most recent penetration test date and scope | |
| Incident response notification SLA (hours to notify customer) | |
| Sub-processors used in delivering the service to [Organization Name] | |

---

### Appendix B: Exit Strategy Template

*This appendix provides the standard template to be used for documenting exit strategies for all Tier 1 and Tier 2 cloud service arrangements.*

---

**Cloud Service Exit Strategy**

| Field | Detail |
|---|---|
| **Document Title** | Exit Strategy — [Vendor Name] — [System Name] |
| **Document ID** | [Document ID] |
| **System Name** | [System Name] |
| **Cloud Provider** | [Provider Name] |
| **Service Model** | IaaS / PaaS / SaaS |
| **Vendor Tier** | Tier 1 / Tier 2 |
| **Owner** | [System Owner Name / Role] |
| **Version** | [Version] |
| **Last Updated** | [Date] |
| **Last Tested** | [Date] |
| **Next Review Date** | [Date] |

**B.1 Trigger Conditions**

> List the specific events or conditions that would activate this exit strategy.

- [Trigger 1]
- [Trigger 2]
- [Trigger 3]

**B.2 Alternative Service Options**

| Alternative | Provider | Service Model | Estimated Migration Effort | Estimated Migration Cost | Technical Readiness |
|---|---|---|---|---|---|
| Option A | [Provider] | IaaS / PaaS / SaaS | [Effort — Low / Medium / High] | RM [X] | Assessed / Not Assessed |
| Option B | [Provider] | IaaS / PaaS / SaaS | [Effort — Low / Medium / High] | RM [X] | Assessed / Not Assessed |
| Option C (In-house / On-premise) | N/A | N/A | [Effort] | RM [X] | Assessed / Not Assessed |

**B.3 Migration Timeline**

| Phase | Activity | Duration | Dependencies | Owner |
|---|---|---|---|---|
| 1 | Activate exit strategy; notify vendor | [X] days | Trigger conditions met | Head of Technology Risk |
| 2 | Stand up target environment | [X] weeks | Option selected | IT Operations |
| 3 | Data export from [Provider] | [X] days | Vendor cooperation | IT Operations |
| 4 | Data validation and integrity check | [X] days | Data export complete | IT Operations / Business Owner |
| 5 | Integration re-configuration | [X] weeks | Target environment ready | Enterprise Architecture |
| 6 | User acceptance testing | [X] weeks | Integration complete | Business Owner |
| 7 | Cutover to target environment | [X] days | UAT passed | IT Operations |
| 8 | Parallel run and decommission of exiting service | [X] weeks | Cutover successful | IT Operations |
| **Total Estimated Duration** | | **[X] months** | | |

**B.4 Data Portability Plan**

- **Data Volume Estimate:** [X] TB
- **Export Format:** [Format]
- **Export Method:** [Method — API / manual export / vendor-assisted]
- **Export SLA:** [X] business days (per contract)
- **Data Integrity Validation Method:** [Method]
- **Backup of Exported Data:** [Location and retention]

**B.5 Staff and Skills Considerations**

| Skill / Knowledge Area | Current Capability | Gap on Exit | Remediation Plan |
|---|---|---|---|
| [e.g., [Vendor]-specific administration] | [Capability level] | [Gap description] | [e.g., Training on target platform; external contractor] |
| [Skill Area] | [Capability level] | [Gap description] | [Remediation] |

**B.6 Cost Estimate**

| Cost Item | Estimated Cost (RM) | Notes |
|---|---|---|
| Data export and migration | [X] | |
| Target environment setup | [X] | |
| Integration re-development | [X] | |
| Staff training | [X] | |
| External consulting / migration assistance | [X] | |
| Contractual exit penalties (if applicable) | [X] | |
| Parallel run period costs | [X] | |
| **Total Estimated Exit Cost** | **RM [X]** | |

**B.7 Regulatory Notification Obligations**

| Obligation | Trigger | Notification Recipient | Timeline | Responsibility |
|---|---|---|---|---|
| [e.g., BNM notification of material outsourcing change] | [Trigger] | [Recipient] | [X] days | [Owner] |
| [Obligation] | [Trigger] | [Recipient] | [Timeline] | [Owner] |

**B.8 Exit Strategy Test Record**

| Test Date | Test Type | Test Scope | Participants | Outcome | Findings | Follow-Up Actions |
|---|---|---|---|---|---|---|
| [Date] | Tabletop / Simulation | [Scope] | [Names] | Pass / Fail | [Findings] | [Actions] |
| [Date] | Tabletop / Simulation | [Scope] | [Names] | Pass / Fail | [Findings] | [Actions] |

---

### Appendix C: Risk Rating Calibration Guide

*This appendix provides calibration guidance and example scenarios to assist assessors in applying consistent ratings across assessment dimensions.*

**C.1 Contractual Lock-In — Rating Calibration**

| Rating | Score | Example Scenario |
|---|---|---|
| Low | 1 | Contract provides [X] months' notice termination right with no financial penalty; explicit data return obligation within [X] days; exit assistance obligation documented. |
| Medium | 2 | Contract provides [X] months' notice; minor financial penalties on early termination; data return obligation present but vague on format and timeline. |
| High | 3 | Minimum [X] year commitment; significant early termination fees; data portability clause absent or commercially impractical. |
| Critical | 4 | Perpetual or auto-renewing contract with no viable exit clause; prohibitive financial penalties; no data return obligation; vendor has historically prevented migration. |

**C.2 Technical Lock-In — Rating Calibration**

| Rating | Score | Example Scenario |
|---|---|---|
| Low | 1 | Service uses open-standard APIs and open data formats; data migration tooling available and tested; equivalent services available from multiple providers. |
| Medium | 2 | Service uses predominantly open standards with limited proprietary extensions; data migration requires moderate re-configuration but is technically feasible. |
| High | 3 | Service uses significant proprietary APIs and data formats; data migration requires substantial re-development; limited alternative providers with equivalent capability. |
| Critical | 4 | Service is built on entirely proprietary architecture with no open-standard interfaces; data export is technically restricted or impossible; no viable alternative provider exists. |

**C.3 Data Portability — Rating Calibration**

| Rating | Score | Example Scenario |
|---|---|---|
| Low | 1 | Full data export in open formats (CSV, JSON, SQL) available on demand; export tested and validated within preceding [X] months; export completes within [X] days. |
| Medium | 2 | Data export available but in proprietary format requiring transformation; export untested or tested more than [X] months ago; export timeline acceptable. |
| High | 3 | Data export is available but is technically complex, requires vendor assistance, or would take longer than [X] months; export format requires significant transformation effort. |
| Critical | 4 | Data export is unavailable, contractually restricted, technically impossible, or would take longer than the institution's maximum tolerable migration timeline. |

---

### Appendix D: Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia. |
| **Cloud Services** | IT services delivered over the internet from a third-party provider's infrastructure, encompassing IaaS, PaaS, and SaaS models. |
| **Concentration Risk** | The risk arising from an excessive reliance on a single vendor, technology, or service provider, such that a failure or disruption could have a disproportionate impact on the institution. |
| **CSA STAR** | Cloud Security Alliance Security, Trust, Assurance, and Risk certification program for cloud service providers. |
| **Data Portability** | The ability to export, migrate, and reconstruct institutional data in a format that can be used with an alternative service provider. |
| **Exit Strategy** | A documented plan detailing how an institution would migrate away from a cloud service provider in an orderly manner, including trigger conditions, migration steps, and cost estimates. |
| **IaaS** | Infrastructure-as-a-Service — a cloud service model in which the provider supplies virtualized compute, storage, and networking infrastructure. |
| **KPI** | Key Performance Indicator — a quantifiable measure used to evaluate performance against a defined target. |
| **NACSA** | National Cyber Security Agency of Malaysia. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data by commercial organizations. |
| **PaaS** | Platform-as-a-Service — a cloud service model providing a managed development and runtime environment. |
| **RACI** | A responsibility assignment matrix using the categories Responsible, Accountable, Consulted, and Informed. |
| **RMiT** | Risk Management in Technology — BNM's policy document establishing technology risk management requirements for licensed financial institutions. |
| **RPO** | Recovery Point Objective — the maximum acceptable period of data loss in the event of a disruption. |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a system or service after a disruption. |
| **SaaS** | Software-as-a-Service — a cloud service model in which the provider delivers a complete application over the internet. |
| **SLA** | Service Level Agreement — a contractual commitment by a service provider to deliver services at a defined level of performance. |
| **Vendor Lock-In** | A situation in which a customer becomes excessively dependent on a single vendor and is unable to switch providers without incurring material financial, technical, or operational costs. |
| **Vendor Tier** | A risk-based classification of a cloud service vendor based on the criticality of the services it provides to the institution. |

---

### Appendix E: Assessment Workpapers Index

*This appendix lists all supporting workpapers and evidence collected during this assessment. Workpapers must be retained for a minimum of [X] years in accordance with [Organization Name]'s records retention policy.*

| Workpaper ID | Description | Date Obtained | Obtained From | Location |
|---|---|---|---|---|
| WP-001 | Cloud services inventory as at [Assessment Date] | [Date] | [Source] | [File Path / Document Management System Reference] |
| WP-002 | Vendor questionnaire response — [Provider A] | [Date] | [Provider A] | [Location] |
| WP-003 | Vendor questionnaire response — [Provider B] | [Date] | [Provider B] | [Location] |
| WP-004 | Contract extract — [Provider A] — termination and data portability clauses | [Date] | [Source] | [Location] |
| WP-005 | Contract extract — [Provider B] — termination and data portability clauses | [Date] | [Source] | [Location] |
| WP-006 | ISO 27001 certificate — [Provider A] | [Date] | [Provider A] | [Location] |
| WP-007 | SOC 2 Type II report — [Provider A] | [Date] | [Provider A] | [Location] |
| WP-008 | Exit strategy test results — [System A] — [Date] | [Date] | IT Operations | [Location] |
| WP-009 | Stakeholder interview notes — [System Owner] | [Date] | [Interviewee] | [Location] |
| WP-010 | Architecture review — [System A] — proprietary dependency mapping | [Date] | Enterprise Architecture | [Location] |
| WP-011 | Previous assessment report — Q[X] [YYYY] | [Date] | Technology Risk | [Location] |
| WP-012 | Risk Acceptance Form — RA-[YYYY]-001 | [Date] | [Approver] | [Location] |
| [WP-XXX] | [Description] | [Date] | [Source] | [Location] |

---

*End of Document*

---

| Field | Detail |
|---|---|
| **Document Title** | Vendor Lock-In Risk Assessment |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Regulatory Framework** | BNM RMiT Clause 17.3 |
| **Next Review Date** | [Next Review Date] |