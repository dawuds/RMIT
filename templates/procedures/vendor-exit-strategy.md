# Vendor Exit Strategy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Vendor Management |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | Vendor Management / Technology Risk |
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 10.49 |

**Organization:** [Organization Name]
**Document Title:** Vendor Exit Strategy
**Category:** Procedures — Third-Party Risk Management

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorised personnel. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may be subject to legal action under applicable Malaysian laws, including the Financial Services Act 2013 (FSA), Islamic Financial Services Act 2013 (IFSA), and the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose, Scope, and Objectives](#2-purpose-scope-and-objectives)
3. [Regulatory and Policy Framework](#3-regulatory-and-policy-framework)
4. [Governance Structure](#4-governance-structure)
5. [Vendor Risk Tiering Criteria](#5-vendor-risk-tiering-criteria)
6. [Vendor Portfolio and Critical Vendor Register](#6-vendor-portfolio-and-critical-vendor-register)
7. [Due Diligence Framework and Checklist](#7-due-diligence-framework-and-checklist)
8. [SLA and KPI Definitions](#8-sla-and-kpi-definitions)
9. [Exit Strategy Requirements](#9-exit-strategy-requirements)
10. [Transition Planning and Execution](#10-transition-planning-and-execution)
11. [Data Management and Portability](#11-data-management-and-portability)
12. [Business Continuity and Contingency Provisions](#12-business-continuity-and-contingency-provisions)
13. [Contractual and Legal Obligations](#13-contractual-and-legal-obligations)
14. [Roles and Responsibilities](#14-roles-and-responsibilities)
15. [Communication and Stakeholder Management](#15-communication-and-stakeholder-management)
16. [Testing and Simulation](#16-testing-and-simulation)
17. [Continuous Monitoring and Review](#17-continuous-monitoring-and-review)
18. [Incident and Exception Management](#18-incident-and-exception-management)
19. [Review and Approval](#19-review-and-approval)
20. [References](#20-references)
21. [Appendices](#21-appendices)

---

## 1. Executive Summary

*This section provides a high-level overview of [Organization Name]'s approach to vendor exit planning. It is intended for senior leadership and board-level readers. Summarise the strategic rationale, regulatory context, and key risk exposures addressed by this document.*

[Organization Name] (hereinafter referred to as "the Institution") operates within a complex ecosystem of technology vendors and third-party service providers that are integral to delivering financial services to customers across Malaysia. The stability, resilience, and regulatory compliance of these services depend not only on the careful selection and ongoing management of vendors, but equally on the Institution's preparedness to transition away from any vendor in a controlled, structured, and risk-mitigated manner.

This Vendor Exit Strategy ("the Strategy") establishes the Institution's formal framework for planning, managing, and executing exits from critical technology vendors. It ensures that the Institution can maintain operational continuity, protect customer data, meet its regulatory obligations to Bank Negara Malaysia (BNM), and safeguard its reputation at all stages of a vendor relationship lifecycle — including planned transitions, contract expirations, and emergency exits triggered by vendor failure, insolvency, or material breach.

The Strategy is mandated under BNM's Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.49, which requires financial institutions to maintain documented exit strategies for all critical technology vendors. Compliance with this requirement is treated as a non-negotiable baseline for the Institution's technology risk management programme.

**Key highlights of this Strategy include:**

- A tiered vendor risk classification model to prioritise exit planning effort proportionate to criticality.
- Comprehensive exit strategy templates for Tier 1 (Critical), Tier 2 (Important), and Tier 3 (Standard) vendors.
- Pre-defined exit scenarios covering planned, accelerated, and emergency exits.
- Detailed due diligence and transition checklists to ensure complete and auditable execution.
- SLA and KPI definitions to maintain service quality during transitional periods.
- Data portability, security, and destruction requirements aligned with PDPA and BNM data governance standards.
- Governance structures defining accountability from the Board of Directors through to operational teams.
- Testing and simulation requirements to validate exit readiness on a regular basis.

The Head of Vendor Management is the primary owner of this document, supported by the Chief Information Officer (CIO), Chief Risk Officer (CRO), and Chief Information Security Officer (CISO). This document is subject to continuous monitoring and formal quarterly review.

---

## 2. Purpose, Scope, and Objectives

### 2.1 Purpose

*Describe the primary purpose of this document. Explain what problem it solves and why it exists from a regulatory and operational risk perspective.*

The purpose of this Vendor Exit Strategy is to:

1. Define a structured and repeatable process for managing vendor exits across all categories of technology service providers engaged by [Organization Name].
2. Ensure the Institution maintains operational resilience and service continuity during and after vendor transitions.
3. Demonstrate compliance with BNM RMiT Clause 10.49 and all related third-party risk management obligations.
4. Protect the Institution's customers, data assets, and financial stability from risks arising from vendor dependency, concentration risk, and unplanned exits.
5. Establish clear accountabilities and decision-making authority for vendor exit events.
6. Provide a governance mechanism that enables proactive exit planning rather than reactive crisis management.

### 2.2 Scope

*Define clearly what is in scope and what is out of scope. Be specific about the types of vendors, services, and organisational units covered.*

#### 2.2.1 In Scope

This Strategy applies to:

- All technology vendors providing services classified as critical to the Institution's operations, as defined under the Vendor Risk Tiering Criteria in Section 5.
- All third-party technology service providers engaged under formal contractual arrangements, including but not limited to:
  - Core banking system vendors
  - Cloud service providers (CSPs)
  - Payment gateway and switching service providers
  - IT infrastructure and managed services providers
  - Cybersecurity service providers
  - Software-as-a-Service (SaaS) platform providers
  - Data centre and colocation service providers
  - Business process outsourcing (BPO) providers with technology components
  - API and fintech integration partners
- All business units and subsidiaries of [Organization Name] that utilise technology services from third-party vendors.
- All stages of the vendor lifecycle: pre-engagement due diligence, active engagement, and exit/transition.

#### 2.2.2 Out of Scope

This Strategy does not cover:

- Internal technology services provided by [Organization Name]'s own subsidiaries where no contractual third-party arrangement exists.
- Procurement of one-time goods or non-recurring services with no ongoing service delivery obligations.
- Non-technology vendors (e.g., office supplies, facilities management) unless they incorporate a significant technology component assessed as critical.
- Human resource outsourcing arrangements that do not involve access to the Institution's technology systems or data.

#### 2.2.3 Applicability

| Entity | Applicability |
|---|---|
| [Organization Name] (Parent) | Fully Applicable |
| [Subsidiary Name 1] | Applicable — refer to Section [X] |
| [Subsidiary Name 2] | Applicable — refer to Section [X] |
| Joint Ventures | Applicable where [Organization Name] holds operational control |

### 2.3 Objectives

*List the specific, measurable objectives that this Strategy is designed to achieve. These should be trackable and reviewed during quarterly review cycles.*

| # | Objective | Measurement Indicator |
|---|---|---|
| 1 | Maintain documented, current exit strategies for 100% of Tier 1 (Critical) vendors | % of Tier 1 vendors with approved exit strategy on file |
| 2 | Maintain documented exit strategies for 100% of Tier 2 (Important) vendors | % of Tier 2 vendors with approved exit strategy on file |
| 3 | Complete annual exit simulation exercises for all Tier 1 vendors | Number of simulations completed per annum |
| 4 | Achieve vendor exit transition within defined Recovery Time Objectives (RTOs) | RTO compliance rate per exit event |
| 5 | Ensure zero loss of customer data during vendor transitions | Data loss incidents during transition |
| 6 | Maintain BNM regulatory reporting compliance for all material vendor exits | Timeliness and completeness of regulatory notifications |
| 7 | Reduce single-vendor dependency for Tier 1 services below [X]% concentration | Vendor concentration ratio by service category |

---

## 3. Regulatory and Policy Framework

### 3.1 Regulatory Context

*Describe the regulatory environment that mandates this document. Reference all applicable BNM policy documents, guidelines, and legal instruments.*

[Organization Name] is a licensed financial institution operating under the Financial Services Act 2013 (FSA) / Islamic Financial Services Act 2013 (IFSA) [select applicable] and is subject to the supervisory oversight of Bank Negara Malaysia (BNM). As a regulated entity, the Institution is required to comply with all BNM Policy Documents, guidelines, and directives issued under the FSA/IFSA.

The primary regulatory driver for this Vendor Exit Strategy is BNM's **Risk Management in Technology (RMiT) Policy Document**, which establishes comprehensive requirements for the management of technology risks, including risks arising from third-party technology service providers.

### 3.2 Primary Regulatory Reference — BNM RMiT Clause 10.49

*Reproduce or closely paraphrase the specific RMiT clause(s) that mandate this document. This section should be referenced during regulatory examinations.*

**RMiT Clause 10.49** requires that:

> Financial institutions shall have documented exit strategies for all critical technology vendors. The exit strategies shall address arrangements to ensure business continuity in the event of a vendor relationship termination, including planned and unplanned scenarios, and shall be reviewed and tested regularly.

In fulfilment of Clause 10.49, this Strategy:

- Documents exit strategies for all vendors classified as critical under the Institution's vendor tiering framework.
- Addresses both planned (scheduled contract expiry or strategic transition) and unplanned (emergency, vendor failure, insolvency, regulatory direction) exit scenarios.
- Establishes review cadences and testing requirements to maintain exit strategy validity and operational readiness.

### 3.3 Related BNM Policy Documents and Guidelines

| Document | Reference | Relevance |
|---|---|---|
| Risk Management in Technology (RMiT) | BNM/RH/PD 028-107 | Primary regulatory mandate |
| Outsourcing | BNM/RH/GL/001-13 | Outsourcing risk and exit requirements |
| Business Continuity Management (BCM) | BNM/RH/PD 032-2 | Business continuity linkage |
| Management of Customer Information and Permitted Disclosures | BNM/RH/PD 028-2 | Customer data protection during exits |
| Cloud Services | BNM Concept Paper / Guidance (as applicable) | Cloud vendor exit-specific requirements |
| Cyber Resilience | BNM/RH/PD [Reference] | Cybersecurity obligations during transitions |

### 3.4 Applicable Malaysian Legislation

| Legislation | Relevance |
|---|---|
| Financial Services Act 2013 (FSA) | Licensing, obligations to BNM |
| Islamic Financial Services Act 2013 (IFSA) | Applicable where institution is Islamic |
| Personal Data Protection Act 2010 (PDPA) | Data handling and destruction obligations |
| Computer Crimes Act 1997 | Cybersecurity obligations |
| Communications and Multimedia Act 1998 | Telecommunication vendor obligations |
| Contracts Act 1950 | Contractual enforceability |

### 3.5 Internal Policy Framework

*List all internal policies, standards, and procedures that this document sits within or cross-references.*

| Internal Document | Relationship to This Strategy |
|---|---|
| Third-Party Risk Management Policy | Parent policy — defines overarching TPRM framework |
| Vendor Management Procedure | Operationalises vendor onboarding, management, and offboarding |
| Information Security Policy | Security requirements applicable during vendor transitions |
| Business Continuity Policy | BCM linkage and RTO/RPO alignment |
| Data Classification and Handling Policy | Data portability and destruction requirements |
| Procurement and Contract Management Policy | Contractual requirements for exit provisions |
| Technology Risk Management Framework | Risk appetite and escalation thresholds |

---

## 4. Governance Structure

*Describe the governance bodies, committees, and individuals responsible for overseeing vendor exit strategy management. Include reporting lines, escalation paths, and decision-making authorities.*

### 4.1 Governance Overview

[Organization Name] has established a multi-tiered governance structure to oversee vendor risk management, including the development, maintenance, testing, and execution of vendor exit strategies. The governance framework ensures that appropriate oversight exists at Board, Senior Management, and Operational levels.

### 4.2 Board and Senior Management Oversight

#### 4.2.1 Board of Directors / Board Risk Committee

- Approves the overall Third-Party Risk Management Policy and Risk Appetite Statement, including acceptable levels of vendor concentration risk.
- Receives quarterly reports on critical vendor risk status, including exit strategy readiness.
- Provides oversight of material vendor exits that carry significant financial, reputational, or regulatory risk.
- Reviews and approves changes to the Vendor Exit Strategy framework where material in nature.

#### 4.2.2 Risk Management Committee (RMC) / Senior Management Committee

- Reviews and approves the Vendor Exit Strategy and material updates thereto.
- Monitors the Institution's vendor concentration risk and exit readiness posture.
- Receives escalations from the Head of Vendor Management on Tier 1 exit events.
- Approves emergency exit decisions for critical vendors where normal governance timelines cannot be observed.

#### 4.2.3 Technology Risk Steering Committee / IT Governance Committee

- Oversees the operationalisation of the Vendor Exit Strategy within the technology domain.
- Reviews exit strategy test results and approves remediation plans for identified gaps.
- Approves Tier 1 and Tier 2 vendor exit plans prior to execution.

### 4.3 Operational Governance

#### 4.3.1 Head of Vendor Management (Document Owner)

- Primary owner and accountable officer for this document.
- Responsible for maintaining the currency and completeness of all vendor exit strategies.
- Chairs the Vendor Exit Working Group for planned transitions.
- Reports vendor exit status to the Technology Risk Steering Committee.
- Coordinates with Legal, Compliance, IT, and Business units on exit execution.

#### 4.3.2 Chief Information Officer (CIO)

- Executive sponsor for vendor exit strategy execution within the technology function.
- Approves technology transition plans for Tier 1 vendor exits.
- Escalation point for technical blockers during exit execution.

#### 4.3.3 Chief Risk Officer (CRO)

- Provides independent risk oversight of vendor exit strategies.
- Approves vendor risk tier classifications and changes thereto.
- Ensures alignment between vendor exit strategy and the Institution's overall risk appetite.

#### 4.3.4 Chief Information Security Officer (CISO)

- Responsible for information security requirements embedded in vendor exit strategies.
- Reviews and approves data portability, access revocation, and data destruction plans.
- Ensures cybersecurity continuity during and after vendor transitions.

#### 4.3.5 Chief Compliance Officer (CCO)

- Ensures regulatory compliance throughout vendor exit processes.
- Oversees BNM notification and reporting obligations for material vendor exits.
- Reviews exit strategies for PDPA compliance.

#### 4.3.6 Head of Legal

- Reviews and advises on contractual obligations, exit clauses, and termination provisions.
- Manages legal disputes arising from vendor exit events.
- Ensures contractual exit provisions are enforceable and exercised correctly.

### 4.4 Governance Framework Diagram

*Insert an organisational chart or governance flow diagram here illustrating the reporting structure described above.*

```
[Insert Governance Diagram]

Board Risk Committee
        |
Risk Management Committee
        |
Technology Risk Steering Committee
        |
Head of Vendor Management (Owner)
    /       \           \          \
  CIO       CISO       Legal    Compliance
   |
IT Operations / Vendor Management Team
```

### 4.5 Escalation Matrix

| Scenario | Initial Handler | Escalation Level 1 | Escalation Level 2 | Final Authority |
|---|---|---|---|---|
| Planned Tier 3 vendor exit | Vendor Manager | Head of Vendor Management | — | Head of Vendor Management |
| Planned Tier 2 vendor exit | Head of Vendor Management | CIO | — | Technology Risk Steering Committee |
| Planned Tier 1 vendor exit | Head of Vendor Management | CIO / CRO | RMC | Board Risk Committee |
| Emergency Tier 1 exit | Head of Vendor Management | CIO / CRO (simultaneous) | CEO | Board notified within 24 hours |
| Regulatory-directed exit | CCO / Head of Vendor Management | CRO | CEO | Board |
| Vendor insolvency — Tier 1 | Head of Vendor Management + Legal | CIO / CRO | CEO | Board |

---

## 5. Vendor Risk Tiering Criteria

*Define the criteria used to classify vendors into risk tiers. This section should be precise enough to allow consistent and auditable classification decisions. Include worked examples where helpful.*

### 5.1 Overview of Vendor Risk Tiering

[Organization Name] employs a risk-based tiering model to classify all technology vendors according to their criticality to the Institution's operations, the sensitivity of data they handle, and the systemic risk they represent. The tiering model ensures that exit planning resources and oversight intensity are proportionate to the risk each vendor relationship poses.

All technology vendors are assessed at onboarding and re-assessed at least annually, or when material changes occur in the vendor relationship or operating environment.

### 5.2 Tier Definitions

| Tier | Classification | Description |
|---|---|---|
| **Tier 1** | Critical | Vendors whose failure or exit would cause immediate, material disruption to core banking or financial services operations, or pose significant risk to customer data, regulatory compliance, or financial stability. |
| **Tier 2** | Important | Vendors whose failure or exit would cause significant but manageable disruption to business operations, with impact containable within defined Recovery Time Objectives (RTOs). |
| **Tier 3** | Standard | Vendors providing non-critical services where exit risk is low, alternative providers are readily available, and business impact is minimal. |

### 5.3 Tiering Assessment Criteria

*The following criteria are used to determine vendor tier classification. Vendors are assessed across all dimensions; the highest applicable tier designation prevails.*

#### 5.3.1 Criticality Criteria

| Criterion | Tier 1 (Critical) | Tier 2 (Important) | Tier 3 (Standard) |
|---|---|---|---|
| **Service Criticality** | Supports core banking, payments, or regulatory reporting | Supports significant business operations | Supports administrative or ancillary functions |
| **Customer Impact** | Immediate, direct customer-facing impact | Indirect customer impact; degraded experience | Negligible customer impact |
| **Financial Impact** | Daily revenue loss > RM [X] million or > [X]% of daily transaction volume | Revenue loss RM [X]K – RM [X]M per day | Revenue loss < RM [X]K per day |
| **Recovery Time Objective (RTO)** | RTO < 4 hours | RTO 4–24 hours | RTO > 24 hours |
| **Recovery Point Objective (RPO)** | RPO < 1 hour | RPO 1–8 hours | RPO > 8 hours |
| **Regulatory Reporting** | Vendor supports mandatory BNM/SC regulatory reporting | Vendor supports internal compliance reporting | No regulatory reporting dependency |
| **Substitutability** | No readily available substitute; transition > 6 months | Limited substitutes; transition 3–6 months | Multiple substitutes available; transition < 3 months |
| **Concentration Risk** | Only vendor providing this service category | One of two or three vendors | Multiple alternatives in market |

#### 5.3.2 Data Sensitivity Criteria

| Criterion | Tier 1 (Critical) | Tier 2 (Important) | Tier 3 (Standard) |
|---|---|---|---|
| **Data Classification** | Handles Restricted or Highly Sensitive data (e.g., customer PII, financial records, credentials) | Handles Confidential data | Handles Internal or Public data only |
| **Data Volume** | Large-scale customer data (> [X] records) | Moderate data volumes | Limited or no customer data |
| **PDPA Obligations** | Acts as Data Processor for significant personal data | Acts as Data Processor for limited personal data | No personal data processing |
| **Residency Requirements** | Data subject to strict Malaysia residency requirements | Some data residency considerations | No data residency constraints |

#### 5.3.3 Systemic and Reputational Criteria

| Criterion | Tier 1 (Critical) | Tier 2 (Important) | Tier 3 (Standard) |
|---|---|---|---|
| **Interconnectedness** | Deeply integrated with multiple core systems | Integrated with one or two significant systems | Standalone or loosely integrated |
| **Reputational Risk** | Failure directly visible to customers and media | Failure may become public over time | Failure unlikely to generate public attention |
| **Regulatory Scrutiny** | Vendor subject to BNM/regulatory oversight | Vendor subject to general regulatory compliance | Standard commercial arrangement |
| **Geographic Dependency** | Operates from single or limited jurisdictions | Operates from multiple jurisdictions | Operates locally with no geo-dependency risk |

### 5.4 Tiering Decision Process

```
Step 1: Complete Vendor Tiering Assessment Form (Appendix A)
        |
Step 2: Score against Criticality, Data Sensitivity, and Systemic criteria
        |
Step 3: Apply "highest tier prevails" rule
        |
Step 4: Head of Vendor Management reviews and approves tier designation
        |
Step 5: CRO provides independent validation for all Tier 1 designations
        |
Step 6: Record tier in Vendor Register; communicate to relevant stakeholders
        |
Step 7: Trigger appropriate exit strategy development requirement
```

### 5.5 Tier 1 Vendor Examples

*This list is illustrative and subject to annual review. The definitive Tier 1 vendor list is maintained in the Critical Vendor Register (Section 6).*

| Service Category | Tier Rationale |
|---|---|
| Core Banking System Provider | Underpins all deposit, lending, and payment operations |
| Primary Cloud Service Provider | Hosts critical banking workloads and data |
| SWIFT / Payment Gateway Provider | Enables domestic and international payment settlement |
| Card Management System Provider | Manages all debit and credit card operations |
| Internet / Mobile Banking Platform | Primary customer-facing digital channel |
| Primary Data Centre / Colocation Provider | Hosts critical infrastructure |
| Core Cybersecurity (SOC/SIEM) Provider | Monitors and responds to security threats in real time |

### 5.6 Tiering Review Triggers

The vendor tier classification shall be reviewed under the following circumstances, in addition to the annual review:

- Significant change in the services or data provided by the vendor.
- Merger, acquisition, or change in ownership of the vendor.
- Material change in the Institution's dependency on the vendor (e.g., expanded scope, increased data volumes).
- Vendor financial distress, credit rating downgrade, or adverse media reports.
- Exit of the vendor from a particular market or service line.
- Regulatory direction from BNM or other competent authority.
- Outcome of due diligence review that materially changes risk assessment.

---

## 6. Vendor Portfolio and Critical Vendor Register

*This section maintains the definitive register of all in-scope technology vendors and their tier classifications. The register should be updated continuously and formally reviewed quarterly.*

### 6.1 Critical Vendor Register

*Maintain a comprehensive, current register of all Tier 1 and Tier 2 vendors. This register is the authoritative source for exit strategy planning. Details below are illustrative placeholders.*

| Vendor ID | Vendor Name | Service Category | Service Description | Tier | Exit Strategy Document Ref | Last Reviewed | Exit Strategy Owner | Contract Expiry |
|---|---|---|---|---|---|---|---|---|
| VND-001 | [Vendor Name] | Core Banking | [Service Description] | 1 | ES-VND-001 | [Date] | [Name] | [Date] |
| VND-002 | [Vendor Name] | Cloud Services | [Service Description] | 1 | ES-VND-002 | [Date] | [Name] | [Date] |
| VND-003 | [Vendor Name] | Payment Gateway | [Service Description] | 1 | ES-VND-003 | [Date] | [Name] | [Date] |
| VND-004 | [Vendor Name] | Internet Banking | [Service Description] | 1 | ES-VND-004 | [Date] | [Name] | [Date] |
| VND-005 | [Vendor Name] | Cybersecurity/SOC | [Service Description] | 1 | ES-VND-005 | [Date] | [Name] | [Date] |
| VND-006 | [Vendor Name] | Data Centre | [Service Description] | 1 | ES-VND-006 | [Date] | [Name] | [Date] |
| VND-007 | [Vendor Name] | [Service Category] | [Service Description] | 2 | ES-VND-007 | [Date] | [Name] | [Date] |
| VND-008 | [Vendor Name] | [Service Category] | [Service Description] | 2 | ES-VND-008 | [Date] | [Name] | [Date] |
| VND-009 | [Vendor Name] | [Service Category] | [Service Description] | 3 | ES-VND-009 | [Date] | [Name] | [Date] |

*[Continue register for all in-scope vendors]*

### 6.2 Vendor Concentration Risk Summary

*This sub-section provides a high-level view of vendor concentration risk across service categories. It should be updated quarterly.*

| Service Category | Number of Vendors | Tier 1 Vendors | Concentration Risk Rating | Mitigation Status |
|---|---|---|---|---|
| Core Banking | [X] | [X] | [High/Medium/Low] | [Status] |
| Cloud Services | [X] | [X] | [High/Medium/Low] | [Status] |
| Payment Services | [X] | [X] | [High/Medium/Low] | [Status] |
| Cybersecurity | [X] | [X] | [High/Medium/Low] | [Status] |
| Data Centre | [X] | [X] | [High/Medium/Low] | [Status] |
| Network Services | [X] | [X] | [High/Medium/Low] | [Status] |

### 6.3 Exit Strategy Readiness Dashboard

*This dashboard provides a snapshot of exit strategy completeness and readiness across the vendor portfolio. Reviewed quarterly by the Head of Vendor Management.*

| Metric | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| Total Vendors | [X] | [X] | [X] |
| Exit Strategy Documented | [X] / [X] | [X] / [X] | [X] / [X] |
| Exit Strategy Reviewed (< 12 months) | [X] / [X] | [X] / [X] | N/A |
| Exit Simulation Completed (< 12 months) | [X] / [X] | [X] / [X] | N/A |
| Exit Strategy Gaps Identified | [X] | [X] | [X] |
| Gap Remediation In Progress | [X] | [X] | [X] |

---

## 7. Due Diligence Framework and Checklist

*This section defines the due diligence activities required at each stage of the vendor lifecycle, with a particular focus on ensuring exit readiness is embedded from pre-engagement onwards. Separate checklists are provided for onboarding due diligence and ongoing/exit-specific due diligence.*

### 7.1 Overview

Due diligence is a continuous obligation, not a one-time event. [Organization Name]'s vendor due diligence framework operates across three phases:

1. **Pre-Engagement (Onboarding) Due Diligence** — Conducted before a new vendor is engaged. Includes assessment of exit feasibility and contractual exit provisions.
2. **Ongoing Due Diligence** — Conducted throughout the vendor relationship at frequencies determined by vendor tier. Includes monitoring of vendor financial health, operational performance, and regulatory standing.
3. **Exit Due Diligence** — Conducted when a vendor exit is planned or triggered. Validates exit readiness, assesses transition risks, and confirms obligations.

### 7.2 Pre-Engagement Due Diligence Checklist

*Complete this checklist for all new vendor engagements. All Tier 1 due diligence must be signed off by the Head of Vendor Management and CRO before contract execution.*

#### 7.2.1 Vendor Financial and Organisational Assessment

| # | Due Diligence Item | Tier 1 | Tier 2 | Tier 3 | Evidence Required | Status | Completed By | Date |
|---|---|---|---|---|---|---|---|---|
| 1.1 | Vendor financial statements reviewed (last 3 years) | Mandatory | Mandatory | Optional | Audited accounts | ☐ | | |
| 1.2 | Vendor credit rating assessment conducted | Mandatory | Mandatory | Optional | Credit report | ☐ | | |
| 1.3 | Vendor ownership structure and beneficial ownership verified | Mandatory | Mandatory | Mandatory | Corporate registry extract | ☐ | | |
| 1.4 | Politically Exposed Persons (PEP) and sanctions screening completed | Mandatory | Mandatory | Mandatory | Screening report | ☐ | | |
| 1.5 | Vendor business continuity plan (BCP) reviewed | Mandatory | Mandatory | Optional | BCP document | ☐ | | |
| 1.6 | Vendor disaster recovery plan (DRP) reviewed and tested results available | Mandatory | Mandatory | Optional | DRP test report | ☐ | | |
| 1.7 | Vendor regulatory standing verified (licenses, certifications) | Mandatory | Mandatory | Mandatory | License/cert copies | ☐ | | |
| 1.8 | Adverse media and litigation search conducted | Mandatory | Mandatory | Optional | Search report | ☐ | | |
| 1.9 | Reference checks with existing customers completed | Mandatory | Recommended | Optional | Reference summary | ☐ | | |
| 1.10 | Vendor concentration risk assessed (are we over-dependent on this vendor?) | Mandatory | Mandatory | Optional | Risk assessment | ☐ | | |

#### 7.2.2 Information Security and Data Protection Assessment

| # | Due Diligence Item | Tier 1 | Tier 2 | Tier 3 | Evidence Required | Status | Completed By | Date |
|---|---|---|---|---|---|---|---|---|
| 2.1 | Vendor information security policy and standards reviewed | Mandatory | Mandatory | Recommended | Policy documents | ☐ | | |
| 2.2 | Data classification and handling procedures reviewed | Mandatory | Mandatory | Recommended | Procedure documents | ☐ | | |
| 2.3 | Independent security assessment or penetration test results reviewed | Mandatory | Recommended | Optional | Assessment report | ☐ | | |
| 2.4 | ISO 27001 or equivalent certification verified | Mandatory | Recommended | Optional | Certificate | ☐ | | |
| 2.5 | SOC 2 Type II or equivalent report reviewed | Mandatory | Recommended | Optional | SOC 2 report | ☐ | | |
| 2.6 | PDPA compliance obligations assessed and documented | Mandatory | Mandatory | Mandatory | PDPA assessment | ☐ | | |
| 2.7 | Data residency requirements assessed and confirmed | Mandatory | Mandatory | Recommended | Written confirmation | ☐ | | |
| 2.8 | Encryption standards for data in transit and at rest confirmed | Mandatory | Mandatory | Recommended | Technical specification | ☐ | | |
| 2.9 | Incident response and notification obligations defined | Mandatory | Mandatory | Mandatory | Contract clause / procedure | ☐ | | |
| 2.10 | Access control and privileged access management reviewed | Mandatory | Mandatory | Recommended | Access control policy | ☐ | | |

#### 7.2.3 Exit Feasibility Assessment (Pre-Engagement)

| # | Due Diligence Item | Tier 1 | Tier 2 | Tier 3 | Evidence Required | Status | Completed By | Date |
|---|---|---|---|---|---|---|---|---|
| 3.1 | Exit provisions included in contract (notice periods, termination rights) | Mandatory | Mandatory | Mandatory | Contract review | ☐ | | |
| 3.2 | Data portability and export capabilities confirmed | Mandatory | Mandatory | Recommended | Technical confirmation | ☐ | | |
| 3.3 | Data destruction obligations and certifications defined | Mandatory | Mandatory | Recommended | Contract clause | ☐ | | |
| 3.4 | Transition assistance obligations defined in contract | Mandatory | Mandatory | Recommended | Contract clause | ☐ | | |
| 3.5 | Intellectual property and licensing rights on exit confirmed | Mandatory | Mandatory | Recommended | Legal review | ☐ | | |
| 3.6 | Escrow arrangements for source code (if applicable) confirmed | Mandatory | Recommended | Optional | Escrow agreement | ☐ | | |
| 3.7 | Alternative vendors identified and assessed | Mandatory | Mandatory | Recommended | Market assessment | ☐ | | |
| 3.8 | Estimated exit timeline and effort assessed | Mandatory | Mandatory | Recommended | Exit feasibility assessment | ☐ | | |
| 3.9 | Exit costs estimated (transition, parallel running, migration) | Mandatory | Mandatory | Recommended | Cost estimate | ☐ | | |
| 3.10 | Preliminary exit strategy documented prior to engagement | Mandatory | Recommended | Optional | Exit strategy draft | ☐ | | |

### 7.3 Ongoing Due Diligence Checklist

*The following activities are to be performed on a periodic basis throughout the vendor relationship. Frequency is determined by vendor tier.*

| # | Due Diligence Activity | Tier 1 Frequency | Tier 2 Frequency | Tier 3 Frequency |
|---|---|---|---|---|
| 4.1 | Performance review against SLAs and KPIs | Monthly | Quarterly | Semi-annually |
| 4.2 | Vendor financial health review | Quarterly | Semi-annually | Annually |
| 4.3 | Vendor security posture review (certifications, audit reports) | Annually + on change | Annually | Every 2 years |
| 4.4 | Exit strategy review and update | Quarterly | Semi-annually | Annually |
| 4.5 | Business continuity and DRP review | Annually | Annually | On contract renewal |
| 4.6 | Regulatory compliance status check | Quarterly | Semi-annually | Annually |
| 4.7 | Adverse media and sanctions screening | Monthly | Quarterly | Annually |
| 4.8 | Concentration risk reassessment | Quarterly | Semi-annually | Annually |
| 4.9 | Data handling and PDPA compliance review | Annually | Annually | On contract renewal |
| 4.10 | Contractual terms review (exit provisions, SLAs) | Annually | On renewal | On renewal |

### 7.4 Exit-Specific Due Diligence Checklist

*This checklist is activated when a vendor exit is initiated, whether planned or unplanned. Complete all items prior to or during the exit process.*

| # | Due Diligence Item | Responsible Party | Priority | Status | Completion Date |
|---|---|---|---|---|---|
| 5.1 | Confirm exit trigger and exit scenario type (planned/accelerated/emergency) | Head of Vendor Management | Critical | ☐ | |
| 5.2 | Review current exit strategy document for completeness and currency | Head of Vendor Management | Critical | ☐ | |
| 5.3 | Engage Legal to review contractual exit provisions and rights | Head of Legal | Critical | ☐ | |
| 5.4 | Serve formal notice of termination per contractual requirements | Head of Legal / Head of Vendor Management | Critical | ☐ | |
| 5.5 | Assess current data holdings with vendor — volume, sensitivity, location | CISO / Head of Vendor Management | Critical | ☐ | |
| 5.6 | Initiate data export / portability process | IT Operations / Vendor Management | Critical | ☐ | |
| 5.7 | Confirm availability of replacement vendor or insourcing capability | CIO / Head of Vendor Management | Critical | ☐ | |
| 5.8 | Establish transition project team with defined roles and responsibilities | Head of Vendor Management | High | ☐ | |
| 5.9 | Communicate exit to affected internal stakeholders | Head of Vendor Management / Communications | High | ☐ | |
| 5.10 | Assess and document regulatory notification requirements (BNM, etc.) | CCO / Head of Compliance | High | ☐ | |
| 5.11 | Notify BNM if exit constitutes a material change (per RMiT obligations) | CCO | High | ☐ | |
| 5.12 | Identify and document all integration points, APIs, and dependencies | IT Architecture / IT Operations | High | ☐ | |
| 5.13 | Assess third-party sub-contractor and fourth-party dependencies | Head of Vendor Management | Medium | ☐ | |
| 5.14 | Confirm and document parallel running requirements | CIO / IT Operations | High | ☐ | |
| 5.15 | Revoke vendor access to all systems post-transition (access decommission) | CISO / IT Operations | Critical | ☐ | |
| 5.16 | Obtain data destruction certificate from vendor | CISO / Head of Vendor Management | Critical | ☐ | |
| 5.17 | Conduct post-exit review and lessons-learned documentation | Head of Vendor Management | Medium | ☐ | |

---

## 8. SLA and KPI Definitions

*This section defines the service level and performance measurement framework applicable to vendor relationships, with specific provisions for maintaining service quality during transitional periods. Institutions should customise target values based on their specific risk appetite and contractual arrangements.*

### 8.1 Overview

Service Level Agreements (SLAs) define the minimum acceptable performance standards that technology vendors must meet. Key Performance Indicators (KPIs) provide the quantitative measures used to assess vendor performance against SLAs. Both SLAs and KPIs must be clearly defined in vendor contracts and monitored continuously throughout the vendor relationship.

During exit and transition periods, SLA obligations remain in full force. Special provisions for transition-specific KPIs are defined in Section 8.5.

### 8.2 SLA Framework Structure

| SLA Component | Description |
|---|---|
| **Service Availability** | Minimum uptime percentage for the service over a defined measurement period |
| **Incident Response Time** | Maximum time to acknowledge, respond to, and resolve incidents by severity level |
| **Recovery Time Objective (RTO)** | Maximum time to restore service following a disruption |
| **Recovery Point Objective (RPO)** | Maximum acceptable data loss in time following a disruption |
| **Performance Throughput** | Minimum transaction throughput or processing capacity |
| **Data Accuracy and Integrity** | Maximum permissible data error rates |
| **Security Incident Notification** | Maximum time to notify the Institution of a security breach |
| **Change Management** | Minimum notice periods for planned changes |
| **Reporting** | Frequency and format of performance and compliance reports |

### 8.3 Standard SLA Definitions by Vendor Tier

#### 8.3.1 Tier 1 (Critical) Vendor SLA Standards

| SLA Metric | Target | Measurement Period | Breach Threshold | Consequence |
|---|---|---|---|---|
| **Service Availability** | ≥ 99.95% | Monthly | < 99.90% | Service credit + escalation |
| **Planned Downtime (per month)** | ≤ [X] hours | Monthly | > [X] hours | Service credit |
| **Incident Response — Critical (P1)** | Acknowledge: 15 min; Resolve: 4 hours | Per incident | > 4 hours to resolve | Financial penalty |
| **Incident Response — High (P2)** | Acknowledge: 30 min; Resolve: 8 hours | Per incident | > 8 hours to resolve | Service credit |
| **Incident Response — Medium (P3)** | Acknowledge: 2 hours; Resolve: 24 hours | Per incident | > 24 hours to resolve | Formal notice |
| **RTO** | ≤ 4 hours | Per incident | > 4 hours | Escalation + penalty |
| **RPO** | ≤ 1 hour | Per incident | > 1 hour | Escalation + penalty |
| **Security Incident Notification** | ≤ 1 hour (confirmed breach) | Per incident | > 1 hour | Immediate escalation |
| **Performance Throughput** | ≥ [X] TPS / [X]% of contracted capacity | Monthly | < [X]% of contracted capacity | Service credit |
| **Data Accuracy** | ≥ 99.99% | Monthly | < 99.95% | Formal review |
| **Reporting (Monthly SLA Report)** | By 5th working day of following month | Monthly | > 5 working days late | Formal notice |

#### 8.3.2 Tier 2 (Important) Vendor SLA Standards

| SLA Metric | Target | Measurement Period | Breach Threshold | Consequence |
|---|---|---|---|---|
| **Service Availability** | ≥ 99.9% | Monthly | < 99.5% | Service credit + escalation |
| **Planned Downtime (per month)** | ≤ [X] hours | Monthly | > [X] hours | Service credit |
| **Incident Response — Critical (P1)** | Acknowledge: 30 min; Resolve: 8 hours | Per incident | > 8 hours to resolve | Formal notice |
| **Incident Response — High (P2)** | Acknowledge: 1 hour; Resolve: 24 hours | Per incident | > 24 hours to resolve | Service credit |
| **RTO** | ≤ 24 hours | Per incident | > 24 hours | Escalation |
| **RPO** | ≤ 4 hours | Per incident | > 4 hours | Escalation |
| **Security Incident Notification** | ≤ 4 hours (confirmed breach) | Per incident | > 4 hours | Escalation |
| **Reporting (Quarterly SLA Report)** | Within 10 working days of quarter end | Quarterly | > 10 working days late | Formal notice |

#### 8.3.3 Tier 3 (Standard) Vendor SLA Standards

| SLA Metric | Target | Measurement Period | Breach Threshold | Consequence |
|---|---|---|---|---|
| **Service Availability** | ≥ 99.5% | Monthly | < 99.0% | Formal notice |
| **Incident Response — Critical (P1)** | Acknowledge: 2 hours; Resolve: Next business day | Per incident | > Next business day | Formal notice |
| **RTO** | ≤ 48 hours | Per incident | > 48 hours | Review meeting |
| **Reporting (Semi-Annual Report)** | Within 15 working days of period end | Semi-annually | > 15 working days late | Formal notice |

### 8.4 KPI Framework

*KPIs are used to measure vendor performance beyond minimum SLA requirements, providing richer insight into vendor health and exit readiness.*

| KPI Category | KPI Name | Description | Measurement Method | Target | Review Frequency |
|---|---|---|---|---|---|
| **Availability** | Actual Uptime % | Actual service uptime achieved | Monitoring tool / vendor reports | Tier-specific | Monthly |
| **Availability** | Mean Time Between Failures (MTBF) | Average time between service interruptions | Incident records | > [X] hours | Quarterly |
| **Reliability** | Mean Time to Restore (MTTR) | Average time to restore service after failure | Incident records | < [X] hours | Monthly |
| **Reliability** | Number of P1 Incidents | Count of critical incidents per period | Incident log | ≤ [X] per month | Monthly |
| **Performance** | Transaction Throughput | Actual TPS as % of contracted capacity | Performance monitoring | ≥ 95% of contracted | Monthly |
| **Performance** | System Response Time | Average end-user transaction response time | APM tools | ≤ [X] ms (95th percentile) | Monthly |
| **Security** | Patch Compliance Rate | % of critical patches applied within defined window | Vulnerability management | ≥ 98% | Monthly |
| **Security** | Security Incident Count | Number of security incidents reported | Incident log | 0 critical; ≤ [X] medium | Monthly |
| **Compliance** | Audit Action Closure Rate | % of audit findings closed within agreed timeline | Audit tracker | ≥ 90% on time | Quarterly |
| **Compliance** | Regulatory Compliance Status | Maintenance of required certifications/licenses | Certificate review | 100% compliant | Quarterly |
| **Continuity** | BCP/DRP Test Result | Outcome of most recent DR/BCP test | Test report | Pass | Annually |
| **Financial Health** | Vendor Financial Rating | Current credit rating or financial health indicator | Financial reports | No adverse change | Quarterly |
| **Relationship** | Issue Escalation Response | Time to respond to formal escalations | Escalation log | ≤ [X] business days | Per incident |

### 8.5 Transition-Specific SLA and KPI Provisions

*During vendor exit and transition periods, the following additional SLA provisions apply to maintain service quality and protect the Institution's interests.*

| Transition KPI | Description | Target | Owner |
|---|---|---|---|
| **Parallel Running Availability** | Uptime of incumbent vendor services during parallel running period | ≥ 99.9% (Tier 1); ≥ 99.5% (Tier 2) | Head of Vendor Management |
| **Data Export Completeness** | % of data successfully extracted and validated | 100% | IT Operations / CISO |
| **Data Migration Accuracy** | Data integrity validation pass rate on migrated data | ≥ 99.99% | IT Operations |
| **Knowledge Transfer Completion** | % of knowledge transfer milestones completed on schedule | 100% by agreed date | Head of Vendor Management |
| **System Integration Handover** | % of integration points successfully transitioned | 100% | IT Architecture |
| **Transition Milestone Adherence** | % of transition plan milestones achieved on schedule | ≥ 90% | Project Manager (Exit) |
| **Defect Rate (Post-Migration)** | Rate of defects introduced by migration per [X] transactions | < [X] defects per [X]k transactions | IT Operations |
| **Staff Retraining Completion** | % of affected staff completing transition training | 100% | Head of HR / IT |

### 8.6 SLA Breach Management

| Breach Level | Definition | Immediate Action | Escalation | Remedy |
|---|---|---|---|---|
| **Level 1 — Minor Breach** | Single SLA metric missed by ≤ 5% | Vendor notified; improvement plan requested | Head of Vendor Management | Corrective action plan within [X] days |
| **Level 2 — Moderate Breach** | Single metric missed by > 5% or multiple metrics missed | Formal breach notice issued | CIO / Head of Vendor Management | Root cause analysis and remediation plan |
| **Level 3 — Serious Breach** | Repeated breaches (≥ 3 in rolling 12 months) or material customer impact | SLA review meeting; financial penalty applied | CIO / CRO | Performance improvement plan; potential exit trigger |
| **Level 4 — Critical Breach** | Sustained failure; fundamental inability to meet SLAs; customer detriment | Exit strategy activation | CEO / Board notified | Accelerated exit initiated |

---

## 9. Exit Strategy Requirements

*This section defines the core requirements that must be addressed in individual vendor exit strategies, as well as the standard exit scenarios and response protocols. This is the primary operational section of the document.*

### 9.1 Overview of Exit Scenarios

[Organization Name] recognises three primary exit scenarios, each requiring a tailored response approach:

| Exit Scenario | Description | Typical Trigger | Lead Time | Planning Approach |
|---|---|---|---|---|
| **Planned Exit** | Scheduled, orderly transition with adequate notice | Contract expiry, strategic decision, re-tendering | ≥ 12 months (Tier 1); ≥ 6 months (Tier 2); ≥ 3 months (Tier 3) | Full exit strategy executed per transition plan |
| **Accelerated Exit** | Expedited exit due to vendor performance or risk concerns, with some notice | SLA breaches, financial instability, security concerns, regulatory direction | 3–6 months | Condensed exit strategy; parallel running extended |
| **Emergency Exit** | Immediate or near-immediate exit without normal lead time | Vendor insolvency, critical security breach, regulatory prohibition, force majeure | < 3 months or immediate | Emergency exit playbook activated; crisis management team convened |

### 9.2 Mandatory Exit Strategy Components

Every vendor exit strategy (individual vendor exit strategy documents referenced in the Critical Vendor Register) must include, at minimum, the following components:

#### 9.2.1 Exit Strategy Identification

| Component | Requirement |
|---|---|
| Vendor ID | Reference to Critical Vendor Register |
| Vendor Name | Full legal entity name |
| Service Description | Detailed description of services in scope |
| Vendor Tier | Tier 1 / 2 / 3 per current assessment |
| Exit Strategy Owner | Named individual responsible |
| Version and Review Date | Current version and last review date |
| Applicable Exit Scenarios | Planned / Accelerated / Emergency |

#### 9.2.2 Dependency Mapping

*Catalogue all systems, processes, and services that depend on this vendor.*

| Dependency Type | Description | Business Unit Owner | Criticality |
|---|---|---|---|
| System Integration | [System name, integration type, data flows] | [Owner] | [Critical/High/Medium/Low] |
| Process Dependency | [Business process relying on vendor service] | [Owner] | [Criticality] |
| Data Dependency | [Data sets or feeds provided by vendor] | [Owner] | [Criticality] |
| People Dependency | [Skills or knowledge concentrated in vendor staff] | [Owner] | [Criticality] |
| Sub-contractor Dependency | [Vendor's critical sub-contractors] | [Owner] | [Criticality] |

#### 9.2.3 Alternative Vendor / Insourcing Options

*Document all pre-identified alternatives to the incumbent vendor, including feasibility assessment.*

| Option | Description | Provider | Estimated Transition Timeline | Estimated Cost | Feasibility Rating | Pre-qualification Status |
|---|---|---|---|---|---|---|
| Option 1 — Alternative Vendor A | [Description] | [Vendor Name] | [Timeline] | [Cost range] | [High/Med/Low] | [Status] |
| Option 2 — Alternative Vendor B | [Description] | [Vendor Name] | [Timeline] | [Cost range] | [High/Med/Low] | [Status] |
| Option 3 — Insourcing | [Description] | Internal | [Timeline] | [Cost range] | [High/Med/Low] | [Status] |
| Option 4 — Interim/Bridge Solution | [Description] | [Provider] | [Timeline — short term] | [Cost range] | [High/Med/Low] | [Status] |

#### 9.2.4 Contractual Exit Provisions Summary

| Provision | Current Contractual Position | Adequacy Assessment | Required Action |
|---|---|---|---|
| **Termination Notice Period** | [X] months written notice | [Adequate/Inadequate] | [Action if inadequate] |
| **Termination for Cause** | [Defined triggers and rights] | [Adequate/Inadequate] | [Action] |
| **Termination for Convenience** | [Yes/No; conditions] | [Adequate/Inadequate] | [Action] |
| **Data Return Obligation** | [Timeline, format, completeness] | [Adequate/Inadequate] | [Action] |
| **Data Destruction Obligation** | [Timeline, certification requirement] | [Adequate/Inadequate] | [Action] |
| **Transition Assistance** | [Duration, scope, cost] | [Adequate/Inadequate] | [Action] |
| **Intellectual Property on Exit** | [Rights, licences, escrow] | [Adequate/Inadequate] | [Action] |
| **Source Code Escrow** | [Yes/No; escrow agent; trigger conditions] | [Adequate/Inadequate] | [Action] |
| **Liquidated Damages** | [Applicable provisions] | [Adequate/Inadequate] | [Action] |
| **Dispute Resolution** | [Mechanism; jurisdiction] | [Adequate/Inadequate] | [Action] |

#### 9.2.5 Exit Timeline and Milestones

*The following represents a standard Tier 1 planned exit timeline. Timelines must be customised per vendor based on service complexity and transition requirements.*

| Phase | Phase Name | Key Activities | Duration | Milestone | Owner |
|---|---|---|---|---|---|
| **Phase 0** | Exit Decision and Initiation | Exit trigger confirmed; exit scenario assessed; governance approval obtained; exit team formed | Weeks 1–2 | Exit decision formally approved | Head of Vendor Management |
| **Phase 1** | Exit Planning | Dependency mapping completed; alternative vendor selected; transition plan developed; contractual notice issued; regulatory notification submitted if required | Weeks 3–8 | Transition plan approved | Head of Vendor Management / CIO |
| **Phase 2** | Alternative Vendor Preparation | Replacement vendor onboarded; contracts executed; environment provisioned; integration developed and tested | Weeks 9–24 | New vendor environment ready for parallel testing | CIO / IT Operations |
| **Phase 3** | Parallel Running | Both incumbent and replacement vendor operating in parallel; data validation and reconciliation; performance testing; user acceptance testing | Weeks 25–36 | Parallel run sign-off | CIO / Business Owners |
| **Phase 4** | Data Migration | Full data export from incumbent vendor; data transformation and loading into replacement environment; integrity validation | Weeks 37–44 | Data migration validated | IT Operations / CISO |
| **Phase 5** | Transition Cutover** | Phased or big-bang cutover to replacement vendor; monitoring intensified; rollback plan on standby | Week 45 | Successful cutover confirmed | CIO / Head of Vendor Management |
| **Phase 6** | Incumbent Vendor Decommission | Access revocation; data destruction; final settlement; contract termination confirmed; regulatory notifications completed | Weeks 46–52 | Vendor fully decommissioned; exit strategy closed | Head of Vendor Management / CISO |
| **Phase 7** | Post-Exit Review | Lessons learned; exit strategy documentation updated; Critical Vendor Register updated | Weeks 53–54 | Post-exit review report completed | Head of Vendor Management |

#### 9.2.6 Emergency Exit Playbook

*For each Tier 1 vendor, an emergency exit playbook must be maintained that can be activated within 24 hours of an emergency exit trigger. The playbook provides an immediate-action checklist and escalated decision-making process for scenarios where normal exit planning timelines cannot be observed.*

**Emergency Exit Trigger Events:**

- Vendor insolvency, administration, or liquidation.
- Regulatory prohibition on the vendor (by BNM, SC, or overseas regulator).
- Critical security breach at the vendor that cannot be contained.
- Vendor wilful abandonment of service.
- Force majeure event rendering the vendor unable to continue service.
- Material fraud or criminal activity confirmed at the vendor.

**Emergency Exit Immediate Actions (First 24 Hours):**

| Time | Action | Owner |
|---|---|---|
| 0–1 hour | Emergency exit trigger confirmed and escalated to CIO, CRO, CCO, CEO | Head of Vendor Management |
| 0–2 hours | Crisis Management Team convened | CEO / CIO |
| 0–2 hours | Legal engaged; contractual position reviewed; rights preserved | Head of Legal |
| 0–4 hours | Interim operational continuity measures activated (manual workarounds, fallback systems) | IT Operations / Business Units |
| 0–4 hours | BNM notified if required under RMiT or outsourcing policy | CCO |
| 0–8 hours | Alternative vendor or bridge solution engaged on emergency basis | CIO / Head of Vendor Management |
| 0–8 hours | Data access and protection measures confirmed with vendor (or secured directly if vendor unresponsive) | CISO |
| 0–24 hours | Board notified; emergency exit plan communicated to affected business units | CEO |
| 24–72 hours | Accelerated transition plan developed and activated | Head of Vendor Management / Project Manager |

### 9.3 Exit Readiness Requirements

For each Tier 1 vendor, the following exit readiness prerequisites must be maintained on a continuous basis:

| Readiness Requirement | Standard | Review Frequency | Current Status |
|---|---|---|---|
| Documented exit strategy | Current and approved; reviewed within last 12 months | Quarterly | [Status] |
| Alternative vendor identified and pre-qualified | At least one viable alternative pre-qualified | Annually | [Status] |
| Data export capability tested | Data export tested and validated within last 12 months | Annually | [Status] |
| Integration documentation current | All integration points documented and current | On change | [Status] |
| Emergency exit playbook current | Reviewed and tested within last 12 months | Annually | [Status] |
| Exit simulation completed | Annual simulation completed per Section 16 | Annually | [Status] |
| Contractual exit provisions adequate | Legal review confirms exit provisions are enforceable | On renewal | [Status] |
| Source code escrow current (if applicable) | Escrow arrangement active; escrow agent confirmed | Annually | [Status] |
| Staff capability for transition | Key internal staff capable of managing transition | Annually | [Status] |

---

## 10. Transition Planning and Execution

*This section provides detailed guidance on planning and executing vendor transitions, covering all phases from transition initiation through to decommissioning of the exiting vendor.*

### 10.1 Transition Project Governance

When a Tier 1 or Tier 2 vendor exit is initiated, a formal Transition Project shall be established with the following governance structure:

| Role | Responsibility | Assigned To |
|---|---|---|
| **Executive Sponsor** | Ultimate accountability for transition success | CIO / CEO (Tier 1 exit) |
| **Project Steering Committee** | Oversight of transition progress, risk, and issues | Technology Risk Steering Committee |
| **Transition Project Manager** | Day-to-day management of transition project | [Named Project Manager] |
| **Vendor Management Lead** | Manages incumbent and replacement vendor relationships | Head of Vendor Management |
| **Technical Lead** | Oversees technical migration and integration | IT Architecture / Senior Engineer |
| **Data Migration Lead** | Manages data export, transformation, and validation | IT Operations / Data Management |
| **Security Lead** | Oversees security requirements throughout transition | CISO representative |
| **Business Lead(s)** | Represents affected business units | [Business Unit Heads] |
| **Legal Lead** | Manages contractual and legal aspects | Head of Legal representative |
| **Compliance Lead** | Ensures regulatory compliance throughout | CCO representative |

### 10.2 Transition Risk Register

*During transition execution, a dedicated risk register shall be maintained and reviewed weekly by the Transition Project Manager.*

| Risk ID | Risk Description | Likelihood | Impact | Risk Rating | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| TR-001 | Data loss or corruption during migration | [L/M/H] | [L/M/H] | [Rating] | [Mitigation] | [Owner] | [Status] |
| TR-002 | Replacement vendor unable to meet go-live deadline | [L/M/H] | [L/M/H] | [Rating] | [Mitigation] | [Owner] | [Status] |
| TR-003 | Staff capability gap for managing new vendor platform | [L/M/H] | [L/M/H] | [Rating] | [Mitigation] | [Owner] | [Status] |
| TR-004 | Incumbent vendor becomes uncooperative during transition | [L/M/H] | [L/M/H] | [Rating] | [Mitigation] | [Owner] | [Status] |
| TR-005 | Integration failures between new vendor and core systems | [L/M/H] | [L/M/H] | [Rating] | [Mitigation] | [Owner] | [Status] |
| TR-006 | Service degradation during parallel running period | [L/M/H] | [L/M/H] | [Rating] | [Mitigation] | [Owner] | [Status] |
| TR-007 | Regulatory approval required for transition not obtained in time | [L/M/H] | [L/M/H] | [Rating] | [Mitigation] | [Owner] | [Status] |
| TR-008 | Cost overruns on transition project | [L/M/H] | [L/M/H] | [Rating] | [Mitigation] | [Owner] | [Status] |
| TR-009 | Customer-facing disruption during cutover | [L/M/H] | [L/M/H] | [Rating] | [Mitigation] | [Owner] | [Status] |
| TR-010 | Security vulnerabilities introduced during migration | [L/M/H] | [L/M/H] | [Rating] | [Mitigation] | [Owner] | [Status] |

### 10.3 Rollback Plan Requirements

For every planned cutover event, a documented and tested rollback plan must be prepared and approved in advance. The rollback plan shall include:

- Clear rollback trigger criteria (conditions under which rollback is invoked).
- Maximum acceptable rollback decision window (time from go-live before rollback is no longer feasible).
- Step-by-step rollback execution procedure.
- Named individuals authorised to invoke rollback.
- Communication plan for rollback event.
- Data consistency and recovery steps following rollback.
- Post-rollback review process.

### 10.4 Transition Communication Plan

| Stakeholder Group | Communication Type | Frequency During Transition | Owner |
|---|---|---|---|
| Board of Directors | Executive briefing | Monthly (Tier 1 exit) | CEO / CIO |
| Senior Management | Steering committee update | Weekly | Transition PM |
| Affected Business Units | Status update | Weekly | Transition PM |
| IT Operations Staff | Technical briefing | As required | Technical Lead |
| Customers (if applicable) | Customer communication | Per communication plan | Head of Communications |
| Regulators (BNM) | Regulatory notification | Per notification obligation | CCO |
| Incumbent Vendor | Contractual correspondence | Per contract terms | Head of Legal / Vendor Mgmt |
| Replacement Vendor | Project meetings | Weekly / as required | Vendor Management Lead |

---

## 11. Data Management and Portability

*This section addresses the requirements for managing data throughout the vendor exit process, including data export, validation, migration, and secure destruction. Compliance with PDPA obligations is a critical requirement throughout.*

### 11.1 Data Inventory and Classification

Prior to initiating any vendor exit, a comprehensive data inventory shall be completed for all data held by or accessible to the exiting vendor.

| Data Category | Classification | Volume (approx.) | Location with Vendor | Personal Data (PDPA)? | Data Owner |
|---|---|---|---|---|---|
| [Data type — e.g., Customer Account Data] | [Restricted/Confidential/Internal] | [Records/GB] | [System/Storage location] | [Yes/No] | [Business Unit] |
| [Data type — e.g., Transaction Records] | [Classification] | [Volume] | [Location] | [Yes/No] | [Business Unit] |
| [Data type — e.g., System Configuration Data] | [Classification] | [Volume] | [Location] | [No] | IT Operations |
| [Data type — e.g., Encryption Keys / Secrets] | [Restricted] | [Volume] | [Location] | [No] | CISO |
| [Data type — e.g., Audit Logs] | [Confidential] | [Volume] | [Location] | [Partial] | Compliance |

### 11.2 Data Export Requirements

| Requirement | Standard | Responsible |
|---|---|---|
| **Data Export Format** | Standard, machine-readable format (CSV, JSON, XML) specified in contract; agreed with IT before exit | IT Operations |
| **Data Completeness** | 100% of data identified in inventory must be extracted | IT Operations / Data Management |
| **Data Validation** | All exported data validated against source checksums or record counts | IT Operations |
| **Export Timeline** | Completed within [X] days of notice (Tier 1); [X] days (Tier 2) | Vendor Management |
| **Interim Data Access** | Institution must retain read access to vendor systems during transition | Head of Vendor Management / Legal |
| **Encryption During Export** | All exported data encrypted in transit and at rest during migration | CISO |
| **Chain of Custody** | Full documented chain of custody for exported data | IT Operations / CISO |

### 11.3 Data Destruction Requirements

Upon completion of the transition and confirmation that all data has been successfully migrated and validated, the Institution shall require the exiting vendor to:

1. **Destroy all copies** of Institution data (including backups, test environments, archives, and any data held by sub-contractors) within [X] days of written notice.
2. **Provide written certification** of data destruction, specifying the method of destruction, date, and confirmation that all copies have been addressed.
3. **Confirm sub-contractor data destruction** has been completed where applicable.
4. **Comply with PDPA requirements** for destruction of personal data.

The data destruction certificate shall be retained by the CISO for a minimum of [X] years as evidence of PDPA compliance.

| Data Category | Destruction Method | Certification Required | Timeline | Responsible (Vendor) | Verified By (Institution) |
|---|---|---|---|---|---|
| Customer Personal Data | Cryptographic erasure / NIST 800-88 compliant wipe / Physical destruction | Yes — PDPA compliant | Within [X] days of transition completion | Vendor Data Protection Officer | CISO |
| Financial Records | Secure deletion + audit | Yes | Within [X] days | Vendor IT Security | IT Operations / CISO |
| System Configuration Data | Secure deletion | Yes | Within [X] days | Vendor IT | IT Operations |
| Encryption Keys / Secrets | Cryptographic erasure | Yes | Day of contract termination | Vendor Security | CISO |
| Backup Media | Physical destruction / degaussing | Yes | Within [X] days | Vendor Operations | IT Operations |

### 11.4 PDPA Compliance During Vendor Exit

As a Data Controller under the Personal Data Protection Act 2010 (PDPA), [Organization Name] retains full responsibility for personal data processed by vendors acting as Data Processors on its behalf. During vendor exits, the following PDPA-specific obligations apply:

- **Lawful basis for continued processing** must be maintained throughout the transition period.
- **Data Subject rights** (access, correction, deletion) must continue to be fulfillable during transition.
- **Cross-border transfer restrictions** must be observed if data is temporarily transferred to different jurisdictions during migration.
- **Breach notification obligations** continue to apply if a data breach occurs during the transition period.
- **Records of processing activities** must be updated to reflect the change in Data Processor.
- The **Data Processing Agreement (DPA)** with the outgoing vendor must remain in force until data destruction is confirmed.

---

## 12. Business Continuity and Contingency Provisions

*This section defines how business continuity is maintained during vendor exit events and what contingency measures are available if the transition encounters difficulties.*

### 12.1 Linkage to Business Continuity Management Framework

The Vendor Exit Strategy is designed to operate in alignment with [Organization Name]'s Business Continuity Policy and Business Continuity Plans (BCPs). All exit strategies must be reviewed against existing BCPs to ensure that the transition does not create gaps in business continuity coverage.

| BCP Linkage Requirement | Action Required | Owner |
|---|---|---|
| Review relevant BCPs for dependency on exiting vendor | Identify and document | Business Continuity Manager |
| Update BCPs to reflect transition status during exit execution | Revise BCP where needed | Business Continuity Manager |
| Ensure replacement vendor is incorporated into BCPs pre-cutover | BCP updated before go-live | Business Continuity Manager |
| Test updated BCPs post-transition | BCP test scheduled within [X] months of go-live | Business Continuity Manager |

### 12.2 Minimum Business Service Levels During Transition

*Define the minimum service levels that must be maintained during the transition period to protect customers and meet regulatory obligations.*

| Business Service | Minimum Level During Transition | Contingency If Not Met |
|---|---|---|
| [Core Banking — Deposits] | [X]% availability; no transaction failures | [Contingency — e.g., manual processing, fallback system] |
| [Payment Processing] | [X]% of normal transaction throughput | [Contingency] |
| [Internet / Mobile Banking] | [X]% availability | [Contingency] |
| [Regulatory Reporting] | 100% on-time submission | [Contingency — manual reporting] |
| [Customer Service Systems] | [X]% availability | [Contingency] |

### 12.3 Fallback and Contingency Options

| Scenario | Contingency Option | Activation Trigger | Lead Time to Activate | Owner |
|---|---|---|---|---|
| Replacement vendor delayed or not ready | Extend parallel running; extend incumbent contract | Milestone breach by > [X] days | [X] days notice | Head of Vendor Management |
| Incumbent vendor refuses transition assistance | Legal escalation; escrow activation (source code); manual procedures | Vendor non-cooperation confirmed | Immediate | Head of Legal |
| Data export fails or is incomplete | Re-attempt with alternative extraction method; engage specialist data recovery firm | Export validation failure | [X] days | IT Operations |
| New vendor suffers service failure post-cutover | Rollback to incumbent (if within rollback window); activate BCPs | P1 incident on new vendor platform | Per rollback plan | CIO / IT Operations |
| Emergency exit with no viable alternative vendor | Activate manual/interim procedures; emergency procurement; insourcing | Emergency exit trigger | Immediate | CIO / CEO |

---

## 13. Contractual and Legal Obligations

### 13.1 Mandatory Contract Clauses for Vendor Exit

*All technology vendor contracts for Tier 1 and Tier 2 vendors must include the following clauses as a minimum. Legal review must confirm their presence before contract execution.*

| Contract Clause | Minimum Requirement | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|---|
| **Termination for Convenience** | Right to terminate without cause with defined notice period | Mandatory | Mandatory | Recommended |
| **Termination for Cause** | Right to terminate immediately or on short notice for material breach, insolvency, or regulatory action | Mandatory | Mandatory | Mandatory |
| **Termination Notice Period** | Minimum [X] months notice (Tier 1); [X] months (Tier 2) | Mandatory | Mandatory | Mandatory |
| **Transition Assistance** | Obligation to provide transition assistance for a period of [X] months post-notice, including knowledge transfer and continued service at prevailing SLAs | Mandatory | Mandatory | Recommended |
| **Data Return** | Obligation to return all Institution data in agreed format within [X] days of termination | Mandatory | Mandatory | Mandatory |
| **Data Destruction** | Obligation to destroy all copies of Institution data and certify destruction | Mandatory | Mandatory | Mandatory |
| **Intellectual Property** | Confirmation of Institution's ownership or licence rights to Institution-specific configurations, customisations, and outputs on exit | Mandatory | Mandatory | Recommended |
| **Source Code Escrow** | Requirement for escrow of source code with approved escrow agent where applicable | Mandatory | Recommended | Optional |
| **Sub-contractor Obligations** | Flow-down of exit obligations to sub-contractors | Mandatory | Mandatory | Recommended |
| **Continued Access** | Right to continued read access to vendor systems and data during transition period | Mandatory | Mandatory | Mandatory |
| **Non-solicitation** | Protection against vendor soliciting key transition staff | Mandatory | Recommended | Optional |
| **Regulatory Cooperation** | Obligation to cooperate with BNM or other regulator during any examination or investigation | Mandatory | Mandatory | Mandatory |
| **Liquidated Damages** | Pre-agreed financial remedy for failure to meet exit obligations | Recommended | Recommended | Optional |

### 13.2 Contract Review Schedule

| Activity | Frequency | Owner | Output |
|---|---|---|---|
| Review exit provisions in all Tier 1 contracts | Annually | Head of Legal / Head of Vendor Management | Review report with gaps identified |
| Review exit provisions in all Tier 2 contracts | On renewal | Head of Legal | Contract amendment if required |
| Assess adequacy of transition assistance clauses | Annually (Tier 1); on renewal (Tier 2) | Head of Legal | Gap assessment |
| Update contracts to reflect regulatory changes | Following RMiT or outsourcing policy updates | Head of Legal / CCO | Amended contracts |

### 13.3 Regulatory Notification Obligations

| Event | Notification Requirement | Notification Deadline | Recipient | Owner |
|---|---|---|---|---|
| Planned exit from Tier 1 vendor | Notify BNM in advance per outsourcing policy | [X] days before initiation | BNM | CCO |
| Unplanned / emergency exit from Tier 1 vendor | Immediate notification to BNM | Within [X] hours of trigger | BNM | CCO |
| Material service disruption during transition | Notify BNM if disruption exceeds [X] hours | Within [X] hours of incident | BNM | CCO |
| Data breach during transition | Notify BNM and affected Data Subjects per PDPA and RMiT | Within [X] hours (BNM); 3 days (Data Subjects) | BNM / Data Subjects | CCO / CISO |
| Material change in vendor arrangement | Notify BNM per outsourcing policy | As specified in policy | BNM | CCO |

---

## 14. Roles and Responsibilities

*This section defines the roles and responsibilities of all parties involved in vendor exit strategy management and execution using a RACI framework.*

### 14.1 RACI Key

| Code | Meaning |
|---|---|
| **R** | Responsible — Performs the work |
| **A** | Accountable — Ultimately answerable for the outcome |
| **C** | Consulted — Provides input before work is done |
| **I** | Informed — Kept informed of progress and outcomes |

### 14.2 Vendor Exit Strategy — RACI Matrix

| Activity | Board / BRC | CEO | CRO | CIO | CISO | CCO | Head of Vendor Mgmt | Head of Legal | IT Operations | Business Units | Head of HR |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Policy and Strategy** | | | | | | | | | | | |
| Approve Vendor Exit Strategy document | A | I | C | C | C | C | R | C | I | I | I |
| Maintain and update Vendor Exit Strategy | I | I | C | C | C | C | **A/R** | C | I | I | I |
| Approve vendor tier classifications | I | I | **A** | C | C | I | R | I | I | I | I |
| **Vendor Management** | | | | | | | | | | | |
| Maintain Critical Vendor Register | I | I | C | I | I | I | **A/R** | I | I | I | I |
| Conduct vendor due diligence (onboarding) | I | I | C | C | C | C | **A/R** | C | I | I | I |
| Conduct ongoing vendor performance monitoring | I | I | C | C | I | I | **A/R** | I | I | I | I |
| Monitor vendor financial health | I | I | **A** | I | I | I | R | I | I | I | I |
| **Exit Strategy Development** | | | | | | | | | | | |
| Develop individual vendor exit strategies | I | I | C | C | C | C | **A/R** | C | I | I | I |
| Review and approve exit strategies (Tier 1) | I | I | A | C | C | C | R | C | I | I | I |
| Review and approve exit strategies (Tier 2/3) | I | I | I | A | I | I | **A/R** | I | I | I | I |
| Conduct exit strategy simulations | I | I | C | **A** | C | C | R | I | C | C | I |
| **Exit Execution** | | | | | | | | | | | |
| Initiate exit (planned — Tier 1) | I | A | C | C | I | C | R | C | I | I | I |
| Initiate exit (emergency — Tier 1) | A | **A** | C | C | I | C | R | C | I | I | I |
| Approve transition plan (Tier 1) | I | A | C | A | C | C | R | C | I | I | I |
| Issue contractual termination notice | I | I | I | I | I | I | C | **A/R** | I | I | I |
| Submit regulatory notifications | I | I | C | I | I | **A/R** | C | C | I | I | I |
| Manage data export and migration | I | I | I | A | C | I | C | I | **R** | I | I |
| Oversee data destruction | I | I | I | I | **A/R** | I | C | C | R | I | I |
| Manage security during transition | I | I | C | C | **A/R** | I | C | I | C | I | I |
| Manage transition project | I | I | C | **A** | C | C | C | C | R | C | I |
| Manage incumbent vendor relationship during exit | I | I | I | I | I | I | **A/R** | C | I | I | I |
| Manage staff retraining for new vendor | I | I | I | C | I | I | C | I | C | C | **A/R** |
| **Post-Exit** | | | | | | | | | | | |
| Conduct post-exit review | I | I | C | C | I | I | **A/R** | I | C | C | I |
| Update vendor register post-exit | I | I | I | I | I | I | **A/R** | I | I | I | I |
| Report exit outcome to Board / RMC | **A** | I | C | C | I | C | R | I | I | I | I |

### 14.3 Key Responsibilities Summary

**Head of Vendor Management (Document Owner):**
- Primary owner and maintenance authority for this Vendor Exit Strategy.
- Accountable for ensuring exit strategies exist for all in-scope vendors and are current.
- Leads the vendor exit process for all tiers, in coordination with CIO, CISO, Legal, and Compliance.
- Chairs transition working groups and reports exit status to the Technology Risk Steering Committee.
- Maintains the Critical Vendor Register and Vendor Exit Readiness Dashboard.

**Chief Information Officer (CIO):**
- Executive sponsor for technology transitions.
- Approves technology transition plans and allocates IT resources for exit execution.
- Accountable for IT aspects of transition including integrations, data migration, and platform readiness.
- Provides escalation path for technical blockers.

**Chief Risk Officer (CRO):**
- Independent risk oversight of vendor exit strategies and execution.
- Approves vendor tier classifications for Tier 1 vendors.
- Monitors vendor concentration risk and escalates to Board / RMC where appetite is breached.
- Reviews and challenges exit risk assessments.

**Chief Information Security Officer (CISO):**
- Accountable for all information security requirements during vendor exits.
- Approves data export security controls, access revocation procedures, and data destruction certification.
- Monitors security posture throughout the transition period.

**Chief Compliance Officer (CCO):**
- Ensures all regulatory obligations are met throughout the exit process.
- Owns BNM notification and regulatory reporting during vendor exits.
- Ensures PDPA compliance for all personal data handling during transitions.

**Head of Legal:**
- Reviews and confirms all contractual exit provisions prior to engagement.
- Issues formal termination notices and manages legal correspondence with exiting vendors.
- Manages disputes, escalations, and enforcement of exit obligations.

---

## 15. Communication and Stakeholder Management

### 15.1 Internal Communication Requirements

| Communication Trigger | Target Audience | Communication Type | Owner | Timing |
|---|---|---|---|---|
| Exit strategy annually reviewed | Technology Risk Steering Committee | Review summary report | Head of Vendor Management | Within 5 working days of completion |
| Vendor exit initiated (planned) | Board (Tier 1); RMC (Tier 1/2); affected business units | Briefing note | Head of Vendor Management / CIO | Within [X] days of decision |
| Vendor exit initiated (emergency) | Board; CEO; CIO; CRO; CISO; CCO | Urgent escalation | Head of Vendor Management | Within [X] hours of trigger |
| Transition milestone achieved | Steering committee; project sponsors | Progress update | Transition PM | At each milestone |
| Exit simulation completed | Technology Risk Steering Committee | Simulation report | Head of Vendor Management | Within [X] weeks of simulation |
| Transition completed | Board; senior management; affected units | Completion notice | CIO / Head of Vendor Management | Day of cutover confirmation |
| Post-exit review completed | RMC; Technology Risk Steering Committee | Review report | Head of Vendor Management | Within [X] weeks post-exit |

### 15.2 External Communication Requirements

| Communication | Recipient | Owner | Timing | Notes |
|---|---|---|---|---|
| BNM notification (planned material exit) | Bank Negara Malaysia | CCO | Per RMiT obligation | Must be pre-notified |
| BNM notification (emergency exit) | Bank Negara Malaysia | CCO | Within [X] hours | As per outsourcing policy |
| Customer communication (if service impact) | Affected customers | Head of Communications / CX | Per communication plan | Approved by CEO |
| Formal termination notice | Exiting vendor | Head of Legal | Per contract terms | Written; tracked |
| Data destruction instruction | Exiting vendor | CISO / Head of Vendor Mgmt | Post-transition completion | Written; tracked |

---

## 16. Testing and Simulation

*This section mandates the testing and simulation activities required to validate exit strategy readiness. Regular testing ensures that exit plans are practical, that staff are familiar with their roles, and that technical dependencies are understood.*

### 16.1 Testing Framework Overview

[Organization Name] conducts exit readiness testing through a combination of:

- **Desktop Simulations (Tabletop Exercises):** Scenario-based discussion exercises involving key stakeholders.
- **Technical Exit Drills:** Practical tests of specific technical components (e.g., data export, failover to alternative system).
- **Full Exit Simulations:** End-to-end simulation of an exit scenario, including governance, technical, legal, and communication elements.
- **Post-Exit Reviews:** After-action analysis of actual vendor exit events.

### 16.2 Testing Requirements by Vendor Tier

| Test Type | Tier 1 Frequency | Tier 2 Frequency | Tier 3 Frequency |
|---|---|---|---|
| **Desktop Simulation (Tabletop)** | Annually | Every 2 years | Not required |
| **Technical Exit Drill** (data export, failover) | Annually | Every 2 years | Not required |
| **Full Exit Simulation** | Every 2 years | Every 3 years | Not required |
| **Emergency Exit Playbook Review** | Annually (review + tabletop) | Annually (review only) | Not required |
| **Post-Exit Review** (following actual exit) | Every actual exit | Every actual exit | Every actual exit |

### 16.3 Testing Record

| Vendor | Test Type | Date | Participants | Outcome | Gaps Identified | Remediation Status |
|---|---|---|---|---|---|---|
| [Vendor Name] | Tabletop Exercise | [Date] | [Names/roles] | [Pass/Fail/Partial] | [Gaps] | [Status] |
| [Vendor Name] | Technical Drill | [Date] | [Names/roles] | [Pass/Fail/Partial] | [Gaps] | [Status] |
| [Vendor Name] | Full Simulation | [Date] | [Names/roles] | [Pass/Fail/Partial] | [Gaps] | [Status] |

### 16.4 Simulation Scenario Library

*The following scenarios should be used as the basis for tabletop and full exit simulations. Scenarios should be rotated to ensure broad coverage over time.*

| Scenario ID | Scenario Name | Description | Applicable Tier |
|---|---|---|---|
| SIM-001 | Core Banking Vendor Insolvency | Simulate immediate exit from core banking vendor following insolvency announcement | Tier 1 |
| SIM-002 | Cloud Provider Regulatory Prohibition | BNM directs the Institution to cease using a specific cloud provider within 30 days | Tier 1 |
| SIM-003 | Payment Gateway Critical Security Breach | Payment gateway vendor suffers a critical data breach; emergency exit required | Tier 1 |
| SIM-004 | Planned Core System Replacement | Orderly 12-month planned transition from legacy core banking system | Tier 1 |
| SIM-005 | Managed Services Provider Failure | IT managed services provider goes into administration during contract term | Tier 1 / 2 |
| SIM-006 | SaaS Platform Discontinued | Critical SaaS platform announces end-of-life within 6 months | Tier 2 |
| SIM-007 | Data Centre Relocation | Data centre vendor unable to continue service at current location | Tier 1 / 2 |
| SIM-008 | Vendor Acquisition — New Owner Risk | Incumbent vendor acquired by a competitor; regulatory or risk concerns arise | Tier 1 / 2 |

---

## 17. Continuous Monitoring and Review

### 17.1 Continuous Monitoring Activities

*The following activities are performed on a continuous or near-continuous basis to maintain exit readiness and detect emerging exit risks early.*

| Activity | Frequency | Owner | Escalation Trigger |
|---|---|---|---|
| Vendor SLA performance monitoring | Monthly (Tier 1); Quarterly (Tier 2) | Vendor Management Team | SLA breach or trend deterioration |
| Vendor financial health monitoring | Quarterly (Tier 1); Semi-annually (Tier 2) | Head of Vendor Management / CRO | Financial distress indicators |
| Adverse media and sanctions screening | Monthly (Tier 1); Quarterly (Tier 2) | Vendor Management Team | Adverse finding |
| Vendor concentration risk monitoring | Quarterly | Head of Vendor Management / CRO | Concentration exceeds threshold |
| Exit strategy currency check | Quarterly | Head of Vendor Management | Exit strategy > 12 months without review |
| Contract expiry monitoring | Continuous | Vendor Management Team | Contract expiring within [X] months |
| Regulatory change monitoring | Continuous | CCO | Regulatory change affecting vendor obligations |
| Vendor industry news monitoring | Continuous | Vendor Management Team | Material market developments |

### 17.2 Formal Review Cadence

| Review Activity | Frequency | Owner | Output |
|---|---|---|---|
| **Quarterly Review — Vendor Exit Strategy** | Quarterly | Head of Vendor Management | Updated Vendor Exit Strategy; Readiness Dashboard |
| **Quarterly Review — Critical Vendor Register** | Quarterly | Head of Vendor Management | Updated register with tier changes |
| **Quarterly Review — Exit Readiness Dashboard** | Quarterly | Head of Vendor Management | Dashboard report to Technology Risk Steering Committee |
| **Annual Review — Full Document Review** | Annually | Head of Vendor Management | Revised and re-approved Vendor Exit Strategy |
| **Annual Review — Tier 1 Individual Exit Strategies** | Annually | Head of Vendor Management (per vendor) | Revised individual exit strategy documents |
| **Annual Review — Vendor Risk Tiering** | Annually | Head of Vendor Management / CRO | Updated tier classifications in register |
| **Annual Review — Contractual Exit Provisions** | Annually (Tier 1) | Head of Legal | Contract review report |

### 17.3 Early Warning Indicators

*The following early warning indicators should trigger immediate reassessment of the relevant vendor's exit strategy and escalation to the CRO and CIO.*

| Category | Early Warning Indicator | Response Action |
|---|---|---|
| **Financial** | Credit rating downgrade; adverse earnings reports; loss of major contracts | Accelerate exit strategy review; assess exit readiness |
| **Financial** | Vendor unable to meet financial obligations (e.g., debt covenants breached) | Convene risk review; consider initiating exit planning |
| **Operational** | Sustained SLA underperformance (Level 3 breach) | Trigger formal performance improvement; review exit readiness |
| **Regulatory** | Vendor loses key licences or regulatory approvals | Immediate escalation; assess exit necessity |
| **Regulatory** | BNM or other regulator expresses concern about vendor | Regulatory engagement; exit planning review |
| **Security** | Vendor suffers major data breach or cyber incident | Security risk assessment; potential emergency exit activation |
| **Market** | Vendor announces product/service discontinuation | Initiate planned exit planning immediately |
| **Market** | Vendor announces merger or acquisition | Review new entity risk profile; confirm exit provisions remain valid |
| **Geopolitical** | Sanctions imposed on vendor or its jurisdiction | Immediate legal and compliance review; potential emergency exit |
| **Relationship** | Key vendor personnel departures; service quality decline | Relationship review; exit readiness reassessment |

---

## 18. Incident and Exception Management

### 18.1 Vendor Exit-Related Incidents

Any incident arising during the execution of a vendor exit shall be managed under the Institution's Technology Incident Management Framework, with the following additional requirements:

- All incidents during transition are escalated to the Transition Project Manager as well as the standard incident management path.
- P1 and P2 incidents during transition are automatically escalated to the CIO.
- Any incident resulting in customer impact is immediately escalated to the CEO and relevant communications plans activated.
- All incidents during exit execution are logged in the Transition Risk Register and reviewed by the Transition Steering Committee.

### 18.2 Exception Management

Where it is not possible to fully comply with the requirements of this Strategy (e.g., inability to include mandatory contractual clauses due to vendor non-negotiability, or inability to complete exit simulation within required timeframe), the following exception process applies:

| Step | Action | Owner |
|---|---|---|
| 1 | Document the exception — nature, reason, risk implications, proposed compensating controls | Head of Vendor Management |
| 2 | Assess residual risk with compensating controls in place | CRO / Head of Vendor Management |
| 3 | Submit exception request to Technology Risk Steering Committee for approval | Head of Vendor Management |
| 4 | CRO provides independent risk opinion | CRO |
| 5 | Technology Risk Steering Committee approves or rejects exception | Technology Risk Steering Committee |
| 6 | If approved, set review date for exception (maximum 12 months) | Head of Vendor Management |
| 7 | Record approved exception in Exception Register | Head of Vendor Management |
| 8 | Report material exceptions to RMC and Board Risk Committee | CRO |

### 18.3 Exception Register

| Exception ID | Vendor | Requirement Not Met | Reason | Compensating Control | Risk Rating | Approval Date | Approver | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| EXC-001 | [Vendor] | [Requirement] | [Reason] | [Control] | [H/M/L] | [Date] | [Name] | [Date] | [Open/Closed] |

---

## 19. Review and Approval

### 19.1 Document Review Schedule

This document shall be reviewed:

- **Continuously** — Monitoring of vendor exit triggers and critical vendor register updates.
- **Quarterly** — Formal review of exit strategy currency, readiness dashboard, and critical vendor register.
- **Annually** — Full document review and re-approval.
- **On Trigger** — Following any material vendor exit event, regulatory change affecting vendor obligations, or material change in the Institution's vendor landscape.

### 19.2 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version | [Approver Name] |
| 1.1 | [Date] | [Author Name] | [Summary of changes] | [Approver Name] |
| 2.0 | [Date] | [Author Name] | [Summary of major revision] | [Approver Name] |

### 19.3 Approval Sign-Off

*This document requires the following approvals prior to issuance and following each annual review.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Head of Vendor Management** (Document Owner) | [Name] | | [Date] |
| **Chief Information Officer** | [Name] | | [Date] |
| **Chief Risk Officer** | [Name] | | [Date] |
| **Chief Information Security Officer** | [Name] | | [Date] |
| **Chief Compliance Officer** | [Name] | | [Date] |
| **Head of Legal** | [Name] | | [Date] |
| **Risk Management Committee** (for annual review) | [Chairperson Name] | | [Date] |

---

## 20. References

### 20.1 Regulatory References

| Reference | Document | Clause | Description |
|---|---|---|---|
| **Primary** | BNM Risk Management in Technology (RMiT) Policy Document | **10.49** | Documented exit strategies for all critical technology vendors |
| Supporting | BNM RMiT Policy Document | 10.41–10.48 | Third-party risk management — general requirements |
| Supporting | BNM RMiT Policy Document | 10.50–10.53 | Ongoing oversight and monitoring of technology service providers |
| Supporting | BNM Outsourcing Policy Document | All clauses | Outsourcing risk management, including exit requirements |
| Supporting | BNM Business Continuity Management Policy | All clauses | BCM requirements applicable to vendor transitions |
| Supporting | BNM Management of Customer Information | All clauses | Customer data obligations applicable during vendor exits |
| Supporting | Personal Data Protection Act 2010 | Parts II, IV, V | Data processing, data subject rights, and security obligations |
| Supporting | Financial Services Act 2013 | Section 143 | BNM supervisory obligations of licensed institutions |
| Supporting | BNM Cloud Services Guidance | All applicable | Cloud vendor-specific exit requirements |
| Supporting | NACSA Critical Information Infrastructure Framework | Applicable clauses | CII obligations where vendor services support CII |

### 20.2 Internal Policy References

| Document Title | Document ID | Relationship |
|---|---|---|
| Third-Party Risk Management Policy | [Doc ID] | Parent policy |
| Vendor Management Procedure | [Doc ID] | Related procedure |
| Information Security Policy | [Doc ID] | Security requirements |
| Business Continuity Policy | [Doc ID] | BCM linkage |
| Data Classification and Handling Policy | [Doc ID] | Data requirements |
| Technology Risk Management Framework | [Doc ID] | Risk framework |
| Procurement and Contract Management Policy | [Doc ID] | Contract requirements |
| Technology Incident Management Procedure | [Doc ID] | Incident management |

### 20.3 Industry Standards and Frameworks

| Standard | Description | Applicability |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Security requirements for vendor exit |
| ISO/IEC 27036 | Information security for supplier relationships | Vendor relationship security |
| NIST SP 800-88 | Guidelines for Media Sanitization | Data destruction standards |
| NIST SP 800-161 | Supply Chain Risk Management Practices | Supply chain risk during transitions |
| Basel Committee on Banking Supervision — Principles for Operational Resilience | Operational resilience guidance | Alignment of exit strategy with resilience principles |

---

## 21. Appendices

### Appendix A: Vendor Tiering Assessment Form

*Use this form to conduct and document vendor tier classification assessments. Complete for all new vendors at onboarding and for annual tier reviews.*

**VENDOR TIERING ASSESSMENT FORM**

| Field | Details |
|---|---|
| Vendor Name | [Vendor Name] |
| Vendor ID | [VND-XXX] |
| Service Category | [Category] |
| Service Description | [Description] |
| Assessment Date | [Date] |
| Assessed By | [Name / Role] |
| Reviewed By | [Name / Role] |
| Previous Tier (if applicable) | [Tier] |

**Section 1: Criticality Assessment**

| Criterion | Score (1=Low; 2=Medium; 3=High) | Evidence / Notes |
|---|---|---|
| Service Criticality | | |
| Customer Impact | | |
| Financial Impact | | |
| Recovery Time Objective | | |
| Recovery Point Objective | | |
| Regulatory Reporting Dependency | | |
| Substitutability | | |
| Concentration Risk | | |
| **Section 1 Total Score** | **/24** | |

**Section 2: Data Sensitivity Assessment**

| Criterion | Score (1=Low; 2=Medium; 3=High) | Evidence / Notes |
|---|---|---|
| Data Classification | | |
| Data Volume | | |
| PDPA Obligations | | |
| Data Residency Requirements | | |
| **Section 2 Total Score** | **/12** | |

**Section 3: Systemic and Reputational Assessment**

| Criterion | Score (1=Low; 2=Medium; 3=High) | Evidence / Notes |
|---|---|---|
| Interconnectedness | | |
| Reputational Risk | | |
| Regulatory Scrutiny | | |
| Geographic Dependency | | |
| **Section 3 Total Score** | **/12** | |

**Tier Determination:**

| Score Range | Tier Designation |
|---|---|
| Any Section 1 score ≥ 7 or Total ≥ 34 | **Tier 1 — Critical** |
| Any Section 1 score 4–6 or Total 20–33 | **Tier 2 — Important** |
| All sections score ≤ 3 or Total < 20 | **Tier 3 — Standard** |

**Final Tier Designation:** [Tier 1 / Tier 2 / Tier 3]

**Assessor Sign-Off:** [Signature] | **Date:** [Date]
**CRO Validation (Tier 1 only):** [Signature] | **Date:** [Date]

---

### Appendix B: Individual Vendor Exit Strategy Template

*This template is to be completed for each vendor in the Critical Vendor Register. Completed exit strategies are stored in the Vendor Exit Strategy repository and referenced in the register.*

**INDIVIDUAL VENDOR EXIT STRATEGY**

| Field | Details |
|---|---|
| Vendor Name | [Vendor Name] |
| Vendor ID | [VND-XXX] |
| Exit Strategy Reference | [ES-VND-XXX] |
| Vendor Tier | [Tier] |
| Service Category | [Category] |
| Exit Strategy Owner | [Name / Role] |
| Version | [Version] |
| Last Reviewed | [Date] |
| Next Review | [Date] |
| Applicable Exit Scenarios | [Planned / Accelerated / Emergency] |

**Part 1: Vendor and Service Overview**

[Provide a description of the vendor, the services they provide, and the key dependencies of the Institution on those services.]

**Part 2: Dependency Map**

[Complete the dependency mapping table from Section 9.2.2.]

**Part 3: Alternative Vendor Options**

[Complete the alternative vendor table from Section 9.2.3.]

**Part 4: Contractual Exit Provisions**

[Complete the contractual provisions table from Section 9.2.4.]

**Part 5: Exit Timeline (by Scenario)**

*Planned Exit Timeline:* [Complete per Section 9.2.5]
*Accelerated Exit Timeline:* [Compressed version of planned timeline]
*Emergency Exit Playbook:* [Complete per Section 9.2.6]

**Part 6: Data Inventory**

[Complete data inventory per Section 11.1]

**Part 7: Key Contacts**

| Role | Name | Organisation | Contact Details |
|---|---|---|---|
| Institution — Exit Strategy Owner | [Name] | [Org Name] | [Contact] |
| Vendor — Account Manager | [Name] | [Vendor] | [Contact] |
| Vendor — Transition Lead | [Name] | [Vendor] | [Contact] |
| Replacement Vendor — Key Contact | [Name] | [Vendor] | [Contact] |
| Escrow Agent (if applicable) | [Name] | [Agent] | [Contact] |

**Part 8: Sign-Off**

| Role | Name | Date |
|---|---|---|
| Exit Strategy Owner | | |
| Head of Vendor Management | | |
| CIO (Tier 1 only) | | |
| CRO (Tier 1 only) | | |

---

### Appendix C: Vendor Exit Checklist — Planned Exit

*This is a consolidated checklist to be used when managing a planned vendor exit from initiation to completion. All items must be completed and signed off by the responsible party.*

**PLANNED VENDOR EXIT CHECKLIST**

| Phase | # | Action | Responsible | Due Date | Status | Sign-Off |
|---|---|---|---|---|---|---|
| **Initiation** | 1.1 | Exit decision formally approved by appropriate governance body | Head of Vendor Management | | ☐ | |
| | 1.2 | Exit scenario confirmed as Planned | Head of Vendor Management | | ☐ | |
| | 1.3 | Individual exit strategy reviewed and confirmed current | Head of Vendor Management | | ☐ | |
| | 1.4 | Transition project team established | Head of Vendor Management | | ☐ | |
| | 1.5 | Project kick-off meeting held | Transition PM | | ☐ | |
| **Planning** | 2.1 | Dependency map updated and confirmed | IT Architecture | | ☐ | |
| | 2.2 | Contractual exit provisions reviewed by Legal | Head of Legal | | ☐ | |
| | 2.3 | Formal termination notice issued | Head of Legal | | ☐ | |
| | 2.4 | BNM notification submitted (if required) | CCO | | ☐ | |
| | 2.5 | Data inventory completed | CISO / IT Operations | | ☐ | |
| | 2.6 | Alternative vendor selected and contracted | Head of Vendor Management | | ☐ | |
| | 2.7 | Detailed transition plan developed and approved | Transition PM | | ☐ | |
| | 2.8 | Transition risk register established | Transition PM | | ☐ | |
| | 2.9 | Rollback plan developed | CIO / IT Operations | | ☐ | |
| | 2.10 | Stakeholder communication plan activated | Head of Vendor Management | | ☐ | |
| **Execution** | 3.1 | Replacement vendor environment provisioned | IT Operations | | ☐ | |
| | 3.2 | Integrations developed and unit tested | IT Operations | | ☐ | |
| | 3.3 | System integration testing completed | IT Operations | | ☐ | |
| | 3.4 | User acceptance testing (UAT) completed | Business Units | | ☐ | |
| | 3.5 | Data export completed and validated | IT Operations / Data Mgmt | | ☐ | |
| | 3.6 | Parallel running commenced | IT Operations | | ☐ | |
| | 3.7 | Parallel running sign-off obtained | CIO / Business Owners | | ☐ | |
| | 3.8 | Go-live cutover executed | IT Operations | | ☐ | |
| | 3.9 | Post-cutover stabilisation period completed | IT Operations | | ☐ | |
| **Decommission** | 4.1 | Vendor access revoked from all Institution systems | CISO / IT Operations | | ☐ | |
| | 4.2 | Data destruction instruction issued to vendor | CISO / Head of Vendor Mgmt | | ☐ | |
| | 4.3 | Data destruction certificate received and filed | CISO | | ☐ | |
| | 4.4 | Final financial settlement completed | Finance / Head of Vendor Mgmt | | ☐ | |
| | 4.5 | Contract termination confirmed in writing | Head of Legal | | ☐ | |
| | 4.6 | BNM post-exit notification (if required) | CCO | | ☐ | |
| **Post-Exit** | 5.1 | Critical Vendor Register updated | Head of Vendor Management | | ☐ | |
| | 5.2 | BCP/DRP updated to reflect new vendor | Business Continuity Manager | | ☐ | |
| | 5.3 | Post-exit lessons-learned review conducted | Head of Vendor Management | | ☐ | |
| | 5.4 | Post-exit review report submitted to Technology Risk Steering Committee | Head of Vendor Management | | ☐ | |

---

### Appendix D: Emergency Exit Playbook Template

*This playbook is to be pre-completed for each Tier 1 vendor and maintained in a readily accessible location. It must be immediately actionable within 24 hours of an emergency exit trigger.*

**EMERGENCY EXIT PLAYBOOK**

| Field | Details |
|---|---|
| Vendor Name | [Vendor Name] |
| Vendor ID | [VND-XXX] |
| Service | [Service Description] |
| Playbook Owner | Head of Vendor Management |
| Version | [Version] |
| Last Tested | [Date] |

**Immediate Response (First 2 Hours):**

- [ ] Alert Head of Vendor Management
- [ ] Alert CIO, CRO, CISO, CCO simultaneously
- [ ] Convene Crisis Management Team (CMT)
- [ ] Confirm exit trigger and document
- [ ] Assess current service status with vendor

**First 4 Hours — Operational Continuity:**

- [ ] Activate manual/fallback procedures: [Reference specific fallback procedures]
- [ ] Notify affected business units
- [ ] Engage Legal on contractual rights
- [ ] Contact pre-identified alternative vendor: [Vendor Name; Contact: Name/Phone/Email]

**First 8 Hours — Data and Security:**

- [ ] Confirm data access and security with vendor
- [ ] Initiate data export if immediately possible
- [ ] Freeze vendor's privileged access if security breach is the trigger
- [ ] Activate alternative vendor or bridge solution

**First 24 Hours — Governance and Regulatory:**

- [ ] Notify Board of Directors
- [ ] Submit BNM emergency notification (if required): CCO to contact [BNM Contact Details]
- [ ] Activate accelerated transition plan
- [ ] Issue customer communication (if applicable)

**Key Contacts:**

| Role | Name | Primary Phone | Email | After-Hours |
|---|---|---|---|---|
| Head of Vendor Management | [Name] | [Phone] | [Email] | [Phone] |
| CIO | [Name] | [Phone] | [Email] | [Phone] |
| CRO | [Name] | [Phone] | [Email] | [Phone] |
| CISO | [Name] | [Phone] | [Email] | [Phone] |
| CCO | [Name] | [Phone] | [Email] | [Phone] |
| Head of Legal | [Name] | [Phone] | [Email] | [Phone] |
| Vendor Account Manager | [Name] | [Phone] | [Email] | [Phone] |
| Alternative Vendor Contact | [Name] | [Phone] | [Email] | [Phone] |
| BNM Contact (Regulatory) | [Name/Department] | [Phone] | [Email] | [Emergency line] |

---

### Appendix E: Vendor Financial Health Monitoring Framework

*Quarterly financial health monitoring template for Tier 1 vendors.*

| Indicator | Data Source | Monitoring Frequency | Threshold for Concern | Current Status | Trend |
|---|---|---|---|---|---|
| Credit rating | Rating agency | Quarterly | Downgrade by > 1 notch | [Rating] | [Stable/Negative/Positive] |
| Liquidity ratio | Published accounts | Semi-annually | Current ratio < 1.0 | [Ratio] | [Trend] |
| Debt-to-equity ratio | Published accounts | Semi-annually | > [X]x | [Ratio] | [Trend] |
| Profitability | Published accounts | Annually | Net loss for > 2 consecutive years | [Status] | [Trend] |
| Adverse news | Media monitoring | Monthly | Material adverse findings | [Status] | [Trend] |
| Regulatory sanctions | Regulatory databases | Quarterly | Any active sanctions | [Status] | [Trend] |
| Customer wins/losses | Industry news | Quarterly | Loss of > [X]% of revenue base | [Status] | [Trend] |

**Monitoring Outcome:** [Green / Amber / Red]
**Action Required:** [None / Enhanced monitoring / Risk review / Exit planning escalation]

---

### Appendix F: Post-Exit Review Template

*Complete within [X] weeks of every vendor exit event.*

**POST-EXIT REVIEW REPORT**

| Field | Details |
|---|---|
| Vendor Name | [Vendor Name] |
| Exit Type | [Planned / Accelerated / Emergency] |
| Exit Completion Date | [Date] |
| Review Date | [Date] |
| Review Lead | Head of Vendor Management |

**1. Exit Summary**

[Brief narrative summary of the exit — what happened, when, and outcome.]

**2. Timeline Assessment**

| Milestone | Planned Date | Actual Date | Variance | Reason for Variance |
|---|---|---|---|---|
| Exit initiated | | | | |
| Alternative vendor contracted | | | | |
| Data migration completed | | | | |
| Cutover completed | | | | |
| Vendor decommissioned | | | | |

**3. Outcomes Against Objectives**

| Objective | Target | Achieved | Assessment |
|---|---|---|---|
| Service continuity maintained | No P1/P2 incidents during cutover | [Y/N] | [Pass/Fail] |
| Data integrity confirmed | 100% data validation pass | [%] | [Pass/Fail] |
| Customer impact | Zero customer-impacting incidents | [Y/N] | [Pass/Fail] |
| Regulatory obligations met | All notifications on time | [Y/N] | [Pass/Fail] |
| Cost within budget | Within ±[X]% of estimate | [Y/N] | [Pass/Fail] |

**4. Issues and Challenges Encountered**

| Issue | Impact | Root Cause | How Resolved |
|---|---|---|---|
| [Issue description] | [H/M/L] | [Root cause] | [Resolution] |

**5. Lessons Learned**

| Area | Lesson | Recommended Action | Owner | Target Date |
|---|---|---|---|---|
| [Area] | [Lesson] | [Action] | [Owner] | [Date] |

**6. Improvements to Vendor Exit Strategy**

[Document any recommended changes to this Vendor Exit Strategy or individual vendor exit strategy templates arising from lessons learned.]

**Report Prepared By:** [Name / Head of Vendor Management] | **Date:** [Date]
**Reviewed By:** [Name / CIO] | **Date:** [Date]
**Submitted To:** Technology Risk Steering Committee | **Date:** [Date]

---

### Appendix G: Glossary of Terms

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and financial regulator of Malaysia |
| **BCP** | Business Continuity Plan — documented procedures for maintaining critical business functions during a disruption |
| **CCO** | Chief Compliance Officer |
| **CIO** | Chief Information Officer |
| **CISO** | Chief Information Security Officer |
| **CRO** | Chief Risk Officer |
| **Critical Vendor** | A technology vendor classified as Tier 1 under the Institution's vendor tiering framework |
| **DRP** | Disaster Recovery Plan — documented procedures for recovering IT systems and data following a catastrophic failure |
| **Emergency Exit** | An unplanned, immediate or near-immediate vendor exit triggered by an unforeseen adverse event |
| **Exit Strategy** | A documented plan for transitioning away from a vendor relationship in an orderly and risk-managed manner |
| **FSA** | Financial Services Act 2013 |
| **IFSA** | Islamic Financial Services Act 2013 |
| **KPI** | Key Performance Indicator — a quantitative measure used to assess vendor performance |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PDPA** | Personal Data Protection Act 2010 |
| **Planned Exit** | A scheduled, orderly vendor transition with adequate lead time and structured planning |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk management |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time |
| **RTO** | Recovery Time Objective — the maximum acceptable downtime for a system or service |
| **SLA** | Service Level Agreement — a contractual agreement defining minimum performance standards |
| **TPRM** | Third-Party Risk Management — the framework for identifying, assessing, and managing risks arising from third-party relationships |
| **Transition Assistance** | Contractual obligation of an exiting vendor to support the Institution in transitioning to an alternative provider |
| **Vendor Tiering** | The process of classifying vendors into risk tiers based on their criticality and risk profile |

---

*End of Document*

---

| Field | Details |
|---|---|
| **Document Title** | Vendor Exit Strategy |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Vendor Management |
| **Last Updated** | [Date] |
| **Next Review** | [Date] |
| **Regulatory Reference** | BNM RMiT Clause 10.49 |