# Major Project Risk Assessment Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID, e.g., TRM-MPRA-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Technology Risk |
| **Applicable Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause Reference** | 16.2 |
| **Effective Date** | [Effective Date, e.g., DD Month YYYY] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Quarterly from Last Review] |
| **Approved By** | [Approved By — Name and Title] |
| **Organization** | [Organization Name] |
| **Regulatory Submission Reference** | [BNM LINK Submission Reference, if applicable] |

---

> **DOCUMENT SENSITIVITY NOTICE**
> This document is classified as **Confidential**. It contains information pertaining to technology risk assessments for major projects and is subject to Bank Negara Malaysia (BNM) notification obligations under RMiT. Distribution is restricted to authorized personnel on a need-to-know basis. Unauthorized disclosure is prohibited under the Financial Services Act 2013 (FSA) and the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Assessment Scope and Criteria](#3-assessment-scope-and-criteria)
4. [Assessment Methodology](#4-assessment-methodology)
5. [Project Overview](#5-project-overview)
6. [Risk Assessment Findings and Ratings](#6-risk-assessment-findings-and-ratings)
7. [Notification Trigger Criteria](#7-notification-trigger-criteria)
8. [Notification Timeline Requirements](#8-notification-timeline-requirements)
9. [BNM LINK Submission Process](#9-bnm-link-submission-process)
10. [Risk Treatment and Mitigation Plans](#10-risk-treatment-and-mitigation-plans)
11. [Residual Risk Summary](#11-residual-risk-summary)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section explains why this document exists and what it is intended to achieve. Authors should clearly articulate the regulatory obligation and internal governance objective it serves.*

This Major Project Risk Assessment Report has been prepared in accordance with **RMiT Clause 16.2** issued by Bank Negara Malaysia (BNM). It provides a structured, evidence-based evaluation of the technology and operational risks associated with major projects initiated or executed by **[Organization Name]**.

The purpose of this report is to:

- Formally document the identification, analysis, and evaluation of risks associated with major technology projects prior to and during their execution.
- Establish a basis for determining whether the project triggers BNM notification obligations under RMiT.
- Provide senior management and the Board with sufficient risk information to make informed governance decisions.
- Create a verifiable audit trail for regulatory examination and internal assurance purposes.
- Fulfil the submission requirements under the BNM LINK portal where notification thresholds are met.

### 1.2 Scope

*Define the boundaries of the assessment — which project, which systems, which organizational units, and which risk domains are covered. Be explicit about what is excluded and why.*

This report covers the following scope:

| Scope Dimension | Details |
|---|---|
| **Project Name** | [Project Name] |
| **Project Reference** | [Internal Project Reference / PMO ID] |
| **Assessment Period** | [Start Date] to [End Date] |
| **Business Units Covered** | [List of Business Units, e.g., Technology, Operations, Finance, Risk] |
| **Systems in Scope** | [List of systems, applications, or infrastructure impacted] |
| **Geographic Scope** | [e.g., Malaysia Operations / Group-wide] |
| **Risk Domains Covered** | Technology Risk, Operational Risk, Cybersecurity Risk, Third-Party Risk, Compliance Risk |
| **Exclusions** | [Clearly state any systems, processes, or risks explicitly excluded and the rationale] |

### 1.3 Definitions

*Provide definitions for key terms used throughout this document to ensure consistent interpretation by all readers, including BNM reviewers.*

| Term | Definition |
|---|---|
| **Major Project** | As defined under RMiT, a project that introduces, modifies, or retires significant technology systems, infrastructure, or processes material to the financial institution's operations or risk profile. |
| **Inherent Risk** | The level of risk present before the application of any controls or mitigating measures. |
| **Residual Risk** | The level of risk remaining after the application of controls and mitigating measures. |
| **Risk Rating** | A qualitative or quantitative score assigned to a risk based on its likelihood and impact. |
| **BNM Notification** | A formal submission to Bank Negara Malaysia via the BNM LINK portal, triggered when defined thresholds or criteria are met. |
| **Risk Owner** | The individual accountable for managing and monitoring a specific identified risk. |
| **Control Owner** | The individual responsible for implementing and maintaining a specific control. |
| **RMiT** | Risk Management in Technology — the regulatory policy document issued by BNM governing technology risk management for financial institutions. |
| **BNM LINK** | The online regulatory submission portal operated by Bank Negara Malaysia. |
| **[Organization Name]** | [Legal entity name of the financial institution] |

---

## 2. Regulatory and Policy Context

### 2.1 Regulatory Framework

*Summarize the regulatory requirements that mandate this assessment. Reference the specific clauses and explain their implications for the project.*

This assessment is prepared in compliance with the following regulatory instruments:

| Regulation / Policy | Issuing Authority | Relevant Clause(s) | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 16.2 | Major project risk assessment and BNM notification |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 16.1 | Technology project governance and oversight |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10 | Technology risk management framework |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | Section 47, 58 | Duty to manage operational risk soundly |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Principle 7 (Security) | Protection of personal data in project scope |
| [Internal Technology Risk Policy] | [Organization Name] | [Section Reference] | Internal governance alignment |
| [Internal Project Management Policy] | [Organization Name] | [Section Reference] | Project lifecycle and risk gate requirements |

### 2.2 BNM RMiT Clause 16.2 — Summary of Requirements

*Provide a plain-language summary of what RMiT Clause 16.2 requires. This helps readers without direct access to the source document understand the compliance basis.*

RMiT Clause 16.2 requires financial institutions to conduct a comprehensive risk assessment for all major technology projects. Key requirements include:

- **Pre-implementation assessment:** A risk assessment must be completed prior to the commencement or material progression of a major project.
- **Ongoing assessment:** Risk assessments must be refreshed at key project milestones and upon material changes to the project scope, timeline, or risk profile.
- **Notification obligation:** Where the project meets defined criteria (see Section 7), the financial institution must notify BNM within prescribed timelines.
- **Board and senior management oversight:** The findings and outcomes of the risk assessment must be escalated to the appropriate governance body for review and endorsement.
- **Documentation and retention:** All risk assessment documentation must be maintained and made available for regulatory examination upon request.

### 2.3 Internal Policy Alignment

*Reference the internal policies and frameworks that this document aligns to. This demonstrates the institution's integration of regulatory requirements into its governance structure.*

This assessment aligns with the following internal policies and frameworks:

- **[Technology Risk Management Framework]** — Version [X.X], dated [Date]
- **[Project Management Methodology / PMO Framework]** — Version [X.X], dated [Date]
- **[Operational Risk Management Policy]** — Version [X.X], dated [Date]
- **[Information Security Policy]** — Version [X.X], dated [Date]
- **[Third-Party Risk Management Policy]** — Version [X.X], dated [Date] *(if third-party involvement is in scope)*
- **[Business Continuity Management Policy]** — Version [X.X], dated [Date]

---

## 3. Assessment Scope and Criteria

### 3.1 Project Classification

*Explain how the project was classified as a "major project" for the purposes of RMiT. Document the criteria applied and evidence for each criterion met.*

The project has been classified as a **Major Project** based on the following criteria:

#### 3.1.1 Classification Criteria Assessment

| Classification Criterion | Threshold / Definition | Project Value / Status | Met? |
|---|---|---|---|
| **Project Budget** | Exceeds [RM X million] | RM [Amount] | [Yes / No] |
| **Implementation Timeline** | Exceeds [X months] | [X months] | [Yes / No] |
| **Number of Affected Users / Customers** | Exceeds [X users] or customer-facing | [X users / Customer-facing: Yes/No] | [Yes / No] |
| **Critical System Impact** | Impacts core banking, payments, or critical infrastructure | [System Name(s)] | [Yes / No] |
| **New Technology Introduction** | Introduces technology not previously used by the institution | [Yes / No] | [Yes / No] |
| **Regulatory / Compliance Impact** | Modifies systems with direct regulatory reporting obligations | [Yes / No] | [Yes / No] |
| **Third-Party / Outsourcing Involvement** | Involves material outsourcing or cloud adoption | [Vendor Name(s)] | [Yes / No] |
| **Data Sensitivity** | Involves processing of sensitive personal data or financial data at scale | [Yes / No] | [Yes / No] |

**Classification Outcome:** This project is classified as a **[Major / Non-Major]** project.

**Rationale:** [Provide a 2–4 sentence narrative explaining the classification decision, referencing the criteria met above.]

#### 3.1.2 Assessment Stage

| Assessment Stage | Applicable? | Date of Assessment | Assessor |
|---|---|---|---|
| Pre-implementation (Initial) | [Yes / No] | [Date] | [Name / Role] |
| Mid-project (Milestone Review) | [Yes / No] | [Date] | [Name / Role] |
| Pre-go-live (Final) | [Yes / No] | [Date] | [Name / Role] |
| Post-implementation Review | [Yes / No] | [Date] | [Name / Role] |

### 3.2 Assessment Scope Definition

*Define the specific boundaries of this assessment with sufficient precision to allow a third-party reviewer to understand exactly what was and was not examined.*

#### 3.2.1 In-Scope Components

**Technology Components:**

| Component | Type | Description | Criticality |
|---|---|---|---|
| [System / Application Name] | [e.g., Core Banking System] | [Brief description] | [Critical / High / Medium / Low] |
| [Infrastructure Component] | [e.g., Cloud Platform, Network Segment] | [Brief description] | [Critical / High / Medium / Low] |
| [Integration / API] | [e.g., Payment Gateway Integration] | [Brief description] | [Critical / High / Medium / Low] |
| [Data Store] | [e.g., Customer Database, Data Warehouse] | [Brief description] | [Critical / High / Medium / Low] |

**Business Processes:**

| Process | Business Unit | Description | Criticality |
|---|---|---|---|
| [Process Name] | [Business Unit] | [Brief description] | [Critical / High / Medium / Low] |
| [Process Name] | [Business Unit] | [Brief description] | [Critical / High / Medium / Low] |

**Third Parties:**

| Vendor / Third Party | Role in Project | Services Provided | Country of Operation |
|---|---|---|---|
| [Vendor Name] | [e.g., System Integrator, Cloud Provider] | [Description] | [Country] |
| [Vendor Name] | [e.g., Software Vendor] | [Description] | [Country] |

#### 3.2.2 Out-of-Scope Components

| Excluded Component | Reason for Exclusion | Owner of Separate Assessment |
|---|---|---|
| [Component Name] | [e.g., Subject to separate assessment dated DD/MM/YYYY] | [Name / Team] |
| [Component Name] | [e.g., Not impacted by this project] | [Name / Team] |

### 3.3 Risk Assessment Criteria

*Define the scales used to rate likelihood and impact. These must be consistent with the organization's enterprise risk framework and documented here for the benefit of the reader.*

#### 3.3.1 Likelihood Scale

| Rating | Score | Description | Indicative Frequency |
|---|---|---|---|
| **Almost Certain** | 5 | Expected to occur in most circumstances | More than once per year |
| **Likely** | 4 | Will probably occur in most circumstances | Once per year |
| **Possible** | 3 | Might occur at some time | Once every 2–5 years |
| **Unlikely** | 2 | Could occur at some time but is not expected | Once every 5–10 years |
| **Rare** | 1 | May only occur in exceptional circumstances | Less than once every 10 years |

#### 3.3.2 Impact Scale

| Rating | Score | Description | Financial Impact | Customer Impact | Regulatory Impact |
|---|---|---|---|---|---|
| **Catastrophic** | 5 | Severe and widespread impact | > RM [X] million | > [X] customers affected; service unavailable | Regulatory action, license risk |
| **Major** | 4 | Significant impact | RM [X]–[Y] million | [X]–[Y] customers affected | Regulatory sanction / formal direction |
| **Moderate** | 3 | Moderate impact | RM [X]–[Y] million | [X]–[Y] customers affected | Regulatory notification required |
| **Minor** | 2 | Limited impact | RM [X]–[Y] million | < [X] customers affected | Internal management action |
| **Insignificant** | 1 | Negligible impact | < RM [X] million | No customer impact | No regulatory implications |

#### 3.3.3 Risk Rating Matrix

| **Likelihood ↓ / Impact →** | Insignificant (1) | Minor (2) | Moderate (3) | Major (4) | Catastrophic (5) |
|---|---|---|---|---|---|
| **Almost Certain (5)** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Likely (4)** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Possible (3)** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Unlikely (2)** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Rare (1)** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

#### 3.3.4 Risk Appetite and Escalation Thresholds

| Risk Rating | Score Range | Color Code | Action Required | Escalation Level |
|---|---|---|---|---|
| **Critical** | 20–25 | Red | Immediate escalation; project may not proceed without Board approval and risk treatment plan | Board Risk Committee |
| **High** | 10–16 | Orange | Escalation required; senior management approval and documented mitigation plan mandatory | Management Risk Committee / CRO |
| **Medium** | 5–9 | Yellow | Management attention; mitigation plan required; Head of Technology Risk approval | Head of Technology Risk |
| **Low** | 1–4 | Green | Managed through routine controls; documented in risk register | Risk Owner |

---

## 4. Assessment Methodology

### 4.1 Methodology Overview

*Describe the approach used to conduct this risk assessment. Explain why this methodology was selected and how it ensures completeness and objectivity.*

This risk assessment was conducted using **[Methodology Name, e.g., ISO/IEC 27005:2022 Information Security Risk Management / NIST SP 800-30 / ENISA Threat Landscape / Internal Enterprise Risk Assessment Methodology]**, supplemented by BNM RMiT requirements and **[Organization Name]**'s internal Technology Risk Management Framework.

The assessment followed a structured five-step process:

```
Step 1: Risk Identification
         ↓
Step 2: Risk Analysis (Inherent Risk)
         ↓
Step 3: Control Assessment
         ↓
Step 4: Risk Evaluation (Residual Risk)
         ↓
Step 5: Risk Treatment and Reporting
```

### 4.2 Risk Identification Approach

*Detail how risks were identified. Assessors must document the techniques used and the sources consulted.*

Risk identification was conducted through the following methods:

| Method | Description | Participants | Date |
|---|---|---|---|
| **Structured Interviews** | One-on-one interviews with project stakeholders, system owners, and business process owners | [List of interviewees / roles] | [Date range] |
| **Document Review** | Review of project charter, architecture diagrams, vendor contracts, business requirements, and historical incident data | [Assessor Name] | [Date range] |
| **Workshop / Facilitated Session** | Cross-functional risk identification workshop | [List of participants / roles] | [Date] |
| **Threat Modeling** | Application and infrastructure threat modeling (e.g., STRIDE / PASTA) | [Assessor / Security Architect] | [Date] |
| **Benchmarking** | Review of similar project assessments and industry risk registers | [Assessor Name] | [Date] |
| **Regulatory Checklist** | Mapping against RMiT requirements and BNM supervisory guidance | [Compliance / Risk Team] | [Date] |

**Risk Categories Examined:**

- Technology Risk (system failure, technical debt, integration failure)
- Cybersecurity Risk (data breach, unauthorized access, malware, supply chain attack)
- Operational Risk (process failure, change management failure, talent risk)
- Third-Party / Vendor Risk (dependency, concentration, performance)
- Data Privacy Risk (PDPA compliance, data leakage, data residency)
- Business Continuity Risk (availability, recovery capability)
- Regulatory and Compliance Risk (RMiT obligations, notification triggers)
- Project Delivery Risk (scope creep, timeline, budget overrun)

### 4.3 Assessment Team

*Document who conducted this assessment. This is important for accountability and for BNM to understand the competence and independence of the assessors.*

| Role | Name | Title | Organization Unit | Responsibility in Assessment |
|---|---|---|---|---|
| **Assessment Lead** | [Name] | [Title, e.g., Head of Technology Risk] | [Unit] | Overall assessment oversight and sign-off |
| **Technology Risk Analyst** | [Name] | [Title] | [Unit] | Risk identification and analysis |
| **Cybersecurity Specialist** | [Name] | [Title] | [Unit] | Cybersecurity and threat assessment |
| **Business Analyst** | [Name] | [Title] | [Unit] | Business process and impact assessment |
| **Compliance Advisor** | [Name] | [Title] | [Unit] | Regulatory mapping and notification determination |
| **Project Manager** | [Name] | [Title] | [Unit] | Project information and control status |
| **Independent Reviewer** | [Name] | [Title] | [Unit / External Firm] | Quality assurance and independence check |

### 4.4 Data Sources and Evidence

*List the documents, systems, and data sources relied upon in conducting this assessment.*

| Evidence Type | Document / Source | Version / Date | Reference |
|---|---|---|---|
| Project Charter | [Document Title] | [Version / Date] | [Doc ID] |
| Architecture Design Document | [Document Title] | [Version / Date] | [Doc ID] |
| Business Requirements Document | [Document Title] | [Version / Date] | [Doc ID] |
| Vendor Contract / SLA | [Contract Reference] | [Date] | [Doc ID] |
| Vendor Security Assessment | [Document Title] | [Date] | [Doc ID] |
| Penetration Test Report | [Document Title] | [Date] | [Doc ID] |
| Data Flow Diagram | [Document Title] | [Version / Date] | [Doc ID] |
| Previous Risk Assessment (if applicable) | [Document Title] | [Version / Date] | [Doc ID] |
| Incident and Problem Records | [System / Reference] | [Date Range] | [Reference] |
| Business Impact Analysis | [Document Title] | [Version / Date] | [Doc ID] |

### 4.5 Limitations and Assumptions

*Any material limitations on the scope or quality of the assessment must be disclosed here. This protects the institution and informs BNM of the boundaries of the assessment's conclusions.*

The following limitations and assumptions apply to this assessment:

**Limitations:**

| # | Limitation | Potential Impact on Assessment | Mitigating Action |
|---|---|---|---|
| 1 | [e.g., Final architecture not confirmed at time of assessment] | Risk ratings may change upon architecture finalization | Assessment to be refreshed prior to go-live |
| 2 | [e.g., Third-party vendor did not provide full security documentation] | Vendor risks may be underestimated | Additional vendor due diligence in progress |
| 3 | [e.g., Penetration test not yet completed] | Technical vulnerabilities may not be fully identified | Pen test scheduled for [Date]; findings to be incorporated |

**Assumptions:**

| # | Assumption | Basis |
|---|---|---|
| 1 | [e.g., Project scope remains as documented in the Project Charter dated DD/MM/YYYY] | Project Charter [Reference] |
| 2 | [e.g., Existing cybersecurity controls described by the IT Security team are operating as stated] | IT Security attestation dated [Date] |
| 3 | [e.g., All vendor personnel with system access have completed background screening] | Vendor confirmation letter dated [Date] |

---

## 5. Project Overview

### 5.1 Project Description

*Provide a concise but complete description of the project. The reader should be able to understand the project's purpose, scope, and significance without referring to any other document.*

| Field | Details |
|---|---|
| **Project Name** | [Project Name] |
| **Project Sponsor** | [Name and Title] |
| **Project Manager** | [Name and Title] |
| **Project Type** | [e.g., New System Implementation / System Upgrade / Infrastructure Migration / Cloud Adoption / Process Transformation] |
| **Business Objective** | [One to two sentences describing why this project is being undertaken] |
| **Start Date** | [Date] |
| **Planned Go-Live Date** | [Date] |
| **Estimated Project Budget** | RM [Amount] |
| **Project Status at Assessment** | [e.g., Planning / Design / Build / Testing / Pre-Production] |
| **PMO Project Reference** | [Reference Number] |

**Project Description:**

[Provide a 3–5 paragraph description of the project. Cover: the business need or problem being addressed; the solution proposed; the key technology components involved; the user and customer population affected; the key vendors or third parties involved; and any dependencies on other projects or initiatives.]

### 5.2 Project Phases and Milestones

*Map the project timeline to support the assessment of project delivery risks and to anchor the notification timeline analysis in Section 8.*

| Phase | Description | Planned Start | Planned End | Status | Risk Gate Assessment? |
|---|---|---|---|---|---|
| Phase 1: [Name, e.g., Discovery & Planning] | [Brief description] | [Date] | [Date] | [Status] | [Yes / No] |
| Phase 2: [Name, e.g., Design & Architecture] | [Brief description] | [Date] | [Date] | [Status] | [Yes / No] |
| Phase 3: [Name, e.g., Development & Build] | [Brief description] | [Date] | [Date] | [Status] | [Yes / No] |
| Phase 4: [Name, e.g., Testing & QA] | [Brief description] | [Date] | [Date] | [Status] | [Yes / No] |
| Phase 5: [Name, e.g., Pilot / UAT] | [Brief description] | [Date] | [Date] | [Status] | [Yes / No] |
| Phase 6: [Name, e.g., Go-Live & Hypercare] | [Brief description] | [Date] | [Date] | [Status] | [Yes / No] |
| Phase 7: [Name, e.g., Project Closure] | [Brief description] | [Date] | [Date] | [Status] | [Yes / No] |

### 5.3 Key Stakeholders

| Stakeholder | Role in Project | Risk / Compliance Responsibility |
|---|---|---|
| [Name / Title] | Project Sponsor | Ultimate accountability for project outcomes |
| [Name / Title] | Project Manager | Day-to-day delivery and issue escalation |
| [Name / Title] | System Owner | Technical ownership of impacted systems |
| [Name / Title] | Business Owner | Business requirement sign-off and UAT |
| [Name / Title] | Head of Technology Risk | Risk assessment oversight and notification determination |
| [Name / Title] | Chief Information Security Officer | Cybersecurity risk oversight |
| [Name / Title] | Chief Compliance Officer | Regulatory compliance determination |
| [Name / Title] | Chief Risk Officer | Risk escalation recipient and approver |
| [Name / Title] | [External Vendor Representative] | Vendor delivery and risk obligations |

---

## 6. Risk Assessment Findings and Ratings

### 6.1 Risk Register Summary

*This is the core of the assessment. Document each identified risk with sufficient detail to allow independent verification. All risks must be assigned an owner, rated, and linked to controls.*

*The table below should be populated with all risks identified during the assessment. Add rows as required. A minimum of [X] risks is expected for a major project of this scale.*

#### 6.1.1 Consolidated Risk Register

| Risk ID | Risk Category | Risk Description | Threat Source | Affected Component | Likelihood (Inherent) | Impact (Inherent) | Inherent Risk Rating | Key Controls | Control Effectiveness | Likelihood (Residual) | Impact (Residual) | Residual Risk Rating | Risk Owner | Treatment |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TRM-001 | Technology Risk | [e.g., Integration failure between [System A] and [System B] due to API incompatibility, resulting in data loss or system unavailability] | [e.g., Technical / Design] | [System Name] | [3 - Possible] | [4 - Major] | **High (12)** | [e.g., Integration testing, staging environment validation, rollback plan] | [e.g., Partially Effective] | [2 - Unlikely] | [4 - Major] | **Medium (8)** | [Name / Role] | [Mitigate] |
| TRM-002 | Cybersecurity Risk | [e.g., Unauthorized access to customer data via misconfigured cloud storage buckets] | [e.g., External Threat Actor] | [Cloud Storage Service] | [2 - Unlikely] | [5 - Catastrophic] | **High (10)** | [e.g., Cloud security posture management, access controls, encryption at rest] | [e.g., Effective] | [1 - Rare] | [5 - Catastrophic] | **Medium (5)** | [Name / Role] | [Mitigate] |
| TRM-003 | Third-Party Risk | [e.g., Vendor failure to deliver critical integration components on schedule, resulting in project delay and extended parallel running costs] | [e.g., Vendor Performance] | [Vendor: Name] | [3 - Possible] | [3 - Moderate] | **Medium (9)** | [e.g., SLA with penalties, milestone-based payments, backup vendor identified] | [e.g., Partially Effective] | [2 - Unlikely] | [3 - Moderate] | **Low (6)** | [Name / Role] | [Mitigate] |
| TRM-004 | Data Privacy Risk | [e.g., Inadvertent disclosure of personal data during data migration activities] | [e.g., Process Failure] | [Data Migration Process] | [2 - Unlikely] | [4 - Major] | **Medium (8)** | [e.g., Data masking, restricted access during migration, PDPA training for migration team] | [e.g., Effective] | [1 - Rare] | [4 - Major] | **Low (4)** | [Name / Role] | [Mitigate] |
| TRM-005 | Operational Risk | [e.g., Insufficient staff training leading to operational errors post go-live] | [e.g., Human Error] | [Operations Team] | [3 - Possible] | [3 - Moderate] | **Medium (9)** | [e.g., Training program, user acceptance testing, hypercare support plan] | [e.g., Partially Effective] | [2 - Unlikely] | [3 - Moderate] | **Low (6)** | [Name / Role] | [Mitigate] |
| TRM-006 | Business Continuity Risk | [e.g., Failure to restore critical system within RTO during project go-live window] | [e.g., System Failure] | [Core System] | [2 - Unlikely] | [5 - Catastrophic] | **High (10)** | [e.g., DR testing, documented rollback procedure, war room command structure] | [e.g., Partially Effective] | [1 - Rare] | [5 - Catastrophic] | **Medium (5)** | [Name / Role] | [Mitigate] |
| TRM-007 | Compliance Risk | [e.g., Project introduces new data flows not captured in PDPA privacy notice, resulting in non-compliant data processing] | [e.g., Regulatory / Process] | [Privacy Notice / Consent Framework] | [2 - Unlikely] | [4 - Major] | **Medium (8)** | [e.g., Legal review of privacy notice, DPO sign-off required before go-live] | [e.g., Not Yet Implemented] | [2 - Unlikely] | [4 - Major] | **Medium (8)** | [Name / Role] | [Mitigate] |
| TRM-008 | Project Delivery Risk | [e.g., Scope creep resulting from incomplete requirements, leading to budget overrun and delayed go-live] | [e.g., Internal / Governance] | [Project Scope] | [4 - Likely] | [3 - Moderate] | **High (12)** | [e.g., Change control process, steering committee oversight, PMO governance] | [e.g., Partially Effective] | [2 - Unlikely] | [3 - Moderate] | **Low (6)** | [Name / Role] | [Mitigate] |
| [TRM-00X] | [Category] | [Risk Description] | [Source] | [Component] | [Rating] | [Rating] | **[Rating]** | [Controls] | [Effectiveness] | [Rating] | [Rating] | **[Rating]** | [Owner] | [Treatment] |

### 6.2 Risk Distribution Summary

*Summarize the distribution of risks by category and rating. This provides a high-level view for senior management and the Board.*

#### 6.2.1 Inherent Risk Distribution

| Risk Category | Critical | High | Medium | Low | Total |
|---|---|---|---|---|---|
| Technology Risk | [#] | [#] | [#] | [#] | [#] |
| Cybersecurity Risk | [#] | [#] | [#] | [#] | [#] |
| Third-Party Risk | [#] | [#] | [#] | [#] | [#] |
| Data Privacy Risk | [#] | [#] | [#] | [#] | [#] |
| Operational Risk | [#] | [#] | [#] | [#] | [#] |
| Business Continuity Risk | [#] | [#] | [#] | [#] | [#] |
| Compliance Risk | [#] | [#] | [#] | [#] | [#] |
| Project Delivery Risk | [#] | [#] | [#] | [#] | [#] |
| **TOTAL** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

#### 6.2.2 Residual Risk Distribution (After Controls)

| Risk Category | Critical | High | Medium | Low | Total |
|---|---|---|---|---|---|
| Technology Risk | [#] | [#] | [#] | [#] | [#] |
| Cybersecurity Risk | [#] | [#] | [#] | [#] | [#] |
| Third-Party Risk | [#] | [#] | [#] | [#] | [#] |
| Data Privacy Risk | [#] | [#] | [#] | [#] | [#] |
| Operational Risk | [#] | [#] | [#] | [#] | [#] |
| Business Continuity Risk | [#] | [#] | [#] | [#] | [#] |
| Compliance Risk | [#] | [#] | [#] | [#] | [#] |
| Project Delivery Risk | [#] | [#] | [#] | [#] | [#] |
| **TOTAL** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

### 6.3 Key Risk Findings

*Provide narrative commentary on the most significant findings. This section should be written for an executive audience and should highlight areas of particular concern.*

#### 6.3.1 Critical and High Risks Requiring Immediate Attention

[Provide a narrative description of the most significant risks identified. For each Critical or High risk, explain: what the risk is; why it is rated at that level; what controls are in place or planned; and what the risk owner is doing to manage it.]

**Risk TRM-[XXX]: [Risk Title]**

[Narrative description of the risk, its significance, the current control environment, and the planned treatment. 2–4 sentences.]

**Risk TRM-[XXX]: [Risk Title]**

[Narrative description of the risk, its significance, the current control environment, and the planned treatment. 2–4 sentences.]

#### 6.3.2 Systemic Risk Themes

*Identify any patterns or themes in the risk findings that suggest systemic weaknesses.*

| # | Systemic Theme | Risks Affected | Root Cause Assessment | Recommended Programme-Level Response |
|---|---|---|---|---|
| 1 | [e.g., Vendor management and oversight gaps] | [TRM-003, TRM-00X] | [e.g., No formal vendor risk management process for project vendors] | [e.g., Implement vendor onboarding and monitoring framework] |
| 2 | [e.g., Data governance weaknesses in migration activities] | [TRM-004, TRM-007] | [e.g., No data governance policy covering project data flows] | [e.g., DPO review and data governance uplift] |
| 3 | [e.g., Insufficient testing coverage for critical integration paths] | [TRM-001, TRM-006] | [e.g., Test plan does not include full end-to-end integration scenarios] | [e.g., Revise test plan and conduct integration testing sprint] |

### 6.4 Control Assessment

*Assess the overall effectiveness of controls in place. This informs confidence in the residual risk ratings.*

#### 6.4.1 Control Effectiveness Summary

| Control Domain | Number of Key Controls | Fully Effective | Partially Effective | Not Effective / Not Yet Implemented | Overall Control Rating |
|---|---|---|---|---|---|
| Access Management | [#] | [#] | [#] | [#] | [Adequate / Requires Improvement] |
| Change Management | [#] | [#] | [#] | [#] | [Adequate / Requires Improvement] |
| Testing and Quality Assurance | [#] | [#] | [#] | [#] | [Adequate / Requires Improvement] |
| Vendor Management | [#] | [#] | [#] | [#] | [Adequate / Requires Improvement] |
| Data Protection | [#] | [#] | [#] | [#] | [Adequate / Requires Improvement] |
| Business Continuity / DR | [#] | [#] | [#] | [#] | [Adequate / Requires Improvement] |
| Monitoring and Logging | [#] | [#] | [#] | [#] | [Adequate / Requires Improvement] |
| Project Governance | [#] | [#] | [#] | [#] | [Adequate / Requires Improvement] |

#### 6.4.2 Control Gaps and Remediation

| Control Gap ID | Control Domain | Description of Gap | Risk(s) Affected | Remediation Action | Target Date | Owner |
|---|---|---|---|---|---|---|
| CG-001 | [e.g., Testing] | [e.g., No formal integration test plan covering failure scenarios] | TRM-001, TRM-006 | [e.g., Develop and execute integration test plan] | [Date] | [Name] |
| CG-002 | [e.g., Data Protection] | [e.g., Privacy notice not updated to reflect new data flows] | TRM-007 | [e.g., DPO to review and update privacy notice] | [Date] | [Name] |
| CG-003 | [e.g., Vendor Management] | [e.g., No formal SLA monitoring mechanism in place] | TRM-003 | [e.g., Implement vendor SLA dashboard and monthly review] | [Date] | [Name] |

---

## 7. Notification Trigger Criteria

### 7.1 BNM Notification Obligation Assessment

*This section is critical for regulatory compliance. It documents whether the project triggers BNM notification obligations under RMiT and the evidence basis for that determination.*

#### 7.1.1 Notification Determination

| **Notification Required?** | **[YES / NO]** |
|---|---|
| **Determination Date** | [Date] |
| **Determined By** | [Name, Title] |
| **Reviewed By** | [Name, Title — Compliance / Legal] |
| **Approved By** | [Name, Title — CRO / CEO / Board, as applicable] |

#### 7.1.2 Notification Trigger Criteria Checklist

*Assess each criterion against the specific circumstances of this project. All criteria must be assessed; do not leave any blank.*

**Category A: Project Characteristics Triggers**

| # | Trigger Criterion | Threshold | Project Assessment | Triggered? |
|---|---|---|---|---|
| A1 | **New Core Banking System** | Implementation of a new or replacement core banking system | [Assessment against project details] | [Yes / No] |
| A2 | **New Payment System** | Implementation of a new payment system or material change to existing payment infrastructure | [Assessment] | [Yes / No] |
| A3 | **Cloud Adoption** | First-time adoption of public cloud for critical systems or material expansion of cloud footprint | [Assessment] | [Yes / No] |
| A4 | **Outsourcing of Critical Functions** | Outsourcing of a function or activity assessed as critical under RMiT | [Assessment] | [Yes / No] |
| A5 | **New Digital Channel** | Launch of a new customer-facing digital channel (e.g., mobile banking, internet banking) | [Assessment] | [Yes / No] |
| A6 | **Material Technology Change** | Material change to technology infrastructure supporting critical operations (as defined in RMiT) | [Assessment] | [Yes / No] |

**Category B: Risk and Impact Triggers**

| # | Trigger Criterion | Threshold | Project Assessment | Triggered? |
|---|---|---|---|---|
| B1 | **Critical Risk Rating** | One or more risks rated Critical (score 20–25) in the residual risk assessment | [Number of Critical residual risks: X] | [Yes / No] |
| B2 | **High Risk — Multiple Domains** | Three or more High risks across different risk categories in the residual assessment | [Number of High residual risks across categories: X] | [Yes / No] |
| B3 | **Systemic Risk** | Evidence of systemic risk themes indicating structural weaknesses | [Assessment] | [Yes / No] |
| B4 | **Customer Impact** | Project impacts > [X] customers or all retail customers | [Estimated customer impact: X] | [Yes / No] |
| B5 | **Regulatory System Impact** | Project impacts systems used for regulatory reporting to BNM | [Assessment] | [Yes / No] |

**Category C: Financial and Operational Triggers**

| # | Trigger Criterion | Threshold | Project Assessment | Triggered? |
|---|---|---|---|---|
| C1 | **Budget Threshold** | Total project budget exceeds RM [X] million | [Budget: RM X million] | [Yes / No] |
| C2 | **Extended Downtime** | Project requires planned downtime exceeding [X hours] for critical systems | [Planned downtime: X hours] | [Yes / No] |
| C3 | **Data Migration at Scale** | Migration of personal data or financial data for > [X] customers | [Records to be migrated: X] | [Yes / No] |

**Category D: Internal Policy Triggers**

| # | Trigger Criterion | Source | Project Assessment | Triggered? |
|---|---|---|---|---|
| D1 | **Internal Policy Threshold** | [Internal policy name and threshold] | [Assessment] | [Yes / No] |
| D2 | **Board Risk Committee Escalation** | Project escalated to Board Risk Committee due to risk level | [Assessment] | [Yes / No] |

#### 7.1.3 Overall Notification Determination

**Summary of Triggered Criteria:**

| Triggered Criterion | Criterion Description | Category |
|---|---|---|
| [e.g., A3] | [e.g., First-time public cloud adoption for critical systems] | A |
| [e.g., B1] | [e.g., One Critical residual risk identified] | B |
| [Add rows as applicable] | | |

**Notification Determination Statement:**

> Based on the assessment above, **[Organization Name]** has determined that this project **[DOES / DOES NOT]** trigger the BNM notification obligation under RMiT Clause 16.2. The basis for this determination is set out in the table above and is supported by the risk assessment findings in Section 6.
>
> [If notification is required]: Notification to BNM will be submitted via BNM LINK in accordance with the timeline set out in Section 8.
>
> [If notification is not required]: This determination and its supporting rationale will be retained on file and made available for regulatory examination upon request.

---

## 8. Notification Timeline Requirements

### 8.1 Notification Timeline Framework

*Document the specific timelines applicable to BNM notification for major projects. Timeliness of notification is itself a compliance obligation.*

#### 8.1.1 Pre-Implementation Notification

| Requirement | Timeline | Applicable to This Project? | Target Date | Status |
|---|---|---|---|---|
| **Initial Notification — Pre-commencement** | At least [X business days / [X] weeks] before project commencement or material milestone, as specified in RMiT | [Yes / No] | [Date] | [Not Yet Submitted / Submitted / Not Applicable] |
| **Notification of Material Changes** | Within [X business days] of a material change to project scope, timeline, risk profile, or vendor | [Yes / No] | [Date — rolling] | [Not Yet Submitted / Submitted / Not Applicable] |
| **Pre-Go-Live Notification** | At least [X business days] before go-live date | [Yes / No] | [Date] | [Not Yet Submitted / Submitted / Not Applicable] |

#### 8.1.2 Post-Implementation Notification

| Requirement | Timeline | Applicable to This Project? | Target Date | Status |
|---|---|---|---|---|
| **Post-Implementation Report Submission** | Within [X days / weeks] after go-live | [Yes / No] | [Date] | [Not Yet Submitted / Submitted / Not Applicable] |
| **Incident Notification (if applicable)** | Within [X hours] of a material technology incident arising from the project | [Yes / No] | [Rolling] | [N/A unless incident occurs] |

#### 8.1.3 Notification Timeline Schedule

*Provide a specific, date-anchored schedule of notification obligations for this project.*

| Event | Notification Type | Required Submission By | Responsibility | Status |
|---|---|---|---|---|
| [Project Commencement Decision by Board / Steering Committee] | Pre-commencement notification | [Date — calculated from event date] | [Head of Technology Risk / Compliance] | [Pending / Submitted] |
| [Start of Phase 3: Build] | [Notification of material milestone, if required] | [Date] | [Head of Technology Risk] | [Pending / Submitted / N/A] |
| [UAT Commencement] | [Notification of material milestone, if required] | [Date] | [Head of Technology Risk] | [Pending / Submitted / N/A] |
| [Go-Live — [Date]] | Pre-go-live notification | [At least X days before: Date] | [Head of Technology Risk / Compliance] | [Pending / Submitted] |
| [Post-Go-Live + [X days]] | Post-implementation report | [Date] | [Head of Technology Risk] | [Pending / Submitted] |

#### 8.1.4 Consequence of Late or Non-Notification

*Document the regulatory and reputational consequences of failing to notify BNM within the required timelines. This serves as a reminder of the seriousness of timely compliance.*

Failure to notify BNM within the required timelines constitutes a breach of RMiT requirements and may result in:

- Regulatory action by BNM, including formal directions, compounds, or conditions placed on the institution's operations.
- Increased supervisory scrutiny and more frequent examinations.
- Reputational damage to the institution.
- Personal liability for responsible officers in egregious cases under the Financial Services Act 2013.

**Notification Timeline Monitoring:**

| Monitoring Activity | Frequency | Responsible | Escalation Path |
|---|---|---|---|
| Review of upcoming notification obligations against project schedule | Weekly (during active project phases) | [Head of Technology Risk / PMO] | CRO / CEO |
| Verification that submitted notifications have been acknowledged by BNM | Within [X business days] of submission | [Compliance Team] | CRO |
| Post-submission filing of all notifications in document management system | Immediately upon submission | [Compliance Team / Technology Risk] | Head of Technology Risk |

---

## 9. BNM LINK Submission Process

### 9.1 BNM LINK Portal Overview

*Document the process for submitting notifications via the BNM LINK portal. This ensures that all staff involved in the submission process understand the requirements.*

BNM LINK is the official online regulatory submission portal operated by Bank Negara Malaysia. All notifications under RMiT Clause 16.2 must be submitted through BNM LINK. Paper or email submissions are not accepted unless specifically directed by BNM.

| BNM LINK Detail | Information |
|---|---|
| **Portal URL** | [As provided by BNM — do not publish in this document; refer to BNM LINK access credentials held by Compliance] |
| **Institutional Account Reference** | [Organization's BNM LINK Account Reference] |
| **Primary Authorized Submitter** | [Name, Title] |
| **Secondary Authorized Submitter** | [Name, Title] |
| **Submission Category** | [RMiT — Major Project Notification] |

### 9.2 Submission Preparation Checklist

*Use this checklist to ensure all required information and documents are prepared before accessing BNM LINK to submit the notification.*

#### 9.2.1 Pre-Submission Documentation Checklist

| # | Required Document / Information | Status | Owner | Notes |
|---|---|---|---|---|
| 1 | Completed Major Project Risk Assessment Report (this document), approved and signed | [Ready / In Progress / Not Started] | [Head of Technology Risk] | Must be approved before submission |
| 2 | Project Charter or equivalent — approved version | [Ready / In Progress / Not Started] | [Project Manager] | |
| 3 | High-level architecture diagram of systems in scope | [Ready / In Progress / Not Started] | [Solution Architect] | |
| 4 | Summary of risk findings (executive summary format, max 2 pages) | [Ready / In Progress / Not Started] | [Head of Technology Risk] | For upload to BNM LINK |
| 5 | Confirmation of notification trigger criteria met (completed checklist from Section 7) | [Ready / In Progress / Not Started] | [Compliance] | |
| 6 | Board / Management Committee approval minute or resolution | [Ready / In Progress / Not Started] | [Company Secretary / Risk] | |
| 7 | Vendor details for all material third parties | [Ready / In Progress / Not Started] | [Vendor Management / Procurement] | |
| 8 | Data flow diagram (if personal data is involved) | [Ready / In Progress / Not Started] | [DPO / Architect] | |
| 9 | Timeline and milestone schedule | [Ready / In Progress / Not Started] | [PMO] | |
| 10 | Contact details for BNM queries (project lead and technical contact) | [Ready / In Progress / Not Started] | [Head of Technology Risk] | |

#### 9.2.2 Pre-Submission Approval Checklist

| # | Approval Required | Approver | Date Approved | Reference |
|---|---|---|---|---|
| 1 | Risk assessment approved by Head of Technology Risk | [Name] | [Date] | [Approval reference] |
| 2 | Notification determination reviewed by Chief Compliance Officer | [Name] | [Date] | [Approval reference] |
| 3 | Notification submission authorized by Chief Risk Officer | [Name] | [Date] | [Approval reference] |
| 4 | Board / Management Committee informed (as applicable) | [Committee Name] | [Date] | [Meeting minute reference] |

### 9.3 BNM LINK Submission Steps

*Provide step-by-step guidance for the authorized submitter to complete the BNM LINK submission.*

**Step 1: Access BNM LINK**

- Navigate to the BNM LINK portal using the institutional account credentials held by the Compliance team.
- Log in using authorized credentials. Two-factor authentication is required.
- Confirm the session is active under the correct institutional account: **[Organization Name]**.

**Step 2: Navigate to the Correct Submission Module**

- From the BNM LINK dashboard, select: **Regulatory Submissions** > **Technology Risk** > **Major Project Notification (RMiT Clause 16.2)**.
- *(Note: Portal navigation may change — verify current navigation with the BNM LINK user guide or Compliance helpdesk.)*

**Step 3: Complete the Submission Form**

- Fill in all mandatory fields in the BNM LINK submission form. Mandatory fields are marked with an asterisk (*) in the portal.
- Use the information from this Risk Assessment Report and the supporting documents listed in Section 9.2.1.
- Key fields to complete include:

| BNM LINK Form Field | Source of Information |
|---|---|
| Institution Name | [Organization Name] (pre-populated) |
| Project Name | Section 5.1 of this report |
| Project Type | Section 5.1 of this report |
| Notification Type (Pre-commencement / Pre-go-live / Post-implementation) | Section 8.1 of this report |
| Planned Go-Live Date | Section 5.1 of this report |
| Summary of Risk Findings | Section 6.3 and executive summary prepared per checklist item 4 |
| Highest Residual Risk Rating | Section 11 of this report |
| Systems Impacted | Section 3.2.1 of this report |
| Third-Party Vendors | Section 3.2.1 of this report |
| Contact Person for BNM Queries | Section 9.1 of this section |

**Step 4: Upload Supporting Documents**

- Upload all documents listed in Section 9.2.1 that are required for this submission type.
- Ensure all documents are in the accepted file format (PDF preferred; maximum file size per document: [X MB]).
- Confirm all uploaded documents are the final, approved versions.

**Step 5: Review and Submit**

- Review the completed form and all uploaded documents for accuracy and completeness.
- Obtain the confirmation of the authorized secondary submitter as required by internal policy.
- Submit the notification. Note the **submission reference number** generated by BNM LINK.

**Step 6: Record the Submission**

- Record the BNM LINK submission reference number in the table below.
- File a copy of the submitted form and all supporting documents in **[Document Management System reference]** under the project folder.
- Notify the Head of Technology Risk, Chief Compliance Officer, and Chief Risk Officer of the successful submission.

### 9.4 Submission Record

| Submission # | Submission Type | Date Submitted | BNM LINK Reference | Submitted By | Documents Submitted | BNM Acknowledgement Received? | Acknowledgement Reference |
|---|---|---|---|---|---|---|---|
| 1 | [e.g., Pre-commencement] | [Date] | [BNM LINK Ref] | [Name] | [List key documents] | [Yes / No / Pending] | [BNM Acknowledgement Ref] |
| 2 | [e.g., Pre-go-live] | [Date] | [BNM LINK Ref] | [Name] | [List key documents] | [Yes / No / Pending] | [BNM Acknowledgement Ref] |
| 3 | [e.g., Post-implementation] | [Date] | [BNM LINK Ref] | [Name] | [List key documents] | [Yes / No / Pending] | [BNM Acknowledgement Ref] |

### 9.5 BNM Queries and Responses

*Document any queries received from BNM following the submission and the responses provided. This creates a complete audit trail of regulatory engagement.*

| Query # | Date Received | BNM Query Summary | Response Owner | Date Response Due | Date Responded | Response Summary | BNM LINK Reference |
|---|---|---|---|---|---|---|---|
| Q1 | [Date] | [Summary of BNM query] | [Head of Technology Risk / Compliance] | [Date] | [Date] | [Summary of response] | [Reference] |

---

## 10. Risk Treatment and Mitigation Plans

### 10.1 Risk Treatment Strategy

*For each risk rated High or Critical after control assessment, a formal treatment plan must be documented. This section provides the detailed action plans.*

The following risk treatment strategies apply:

| Treatment Strategy | Definition | When Applied |
|---|---|---|
| **Avoid** | Eliminate the risk by not proceeding with the activity or changing approach | Critical risks where mitigation is not feasible or cost-effective |
| **Mitigate** | Implement controls to reduce the likelihood and/or impact of the risk | Most risks; preferred strategy |
| **Transfer** | Transfer the financial consequence of the risk (e.g., insurance, contractual indemnity) | Risks where contractual or insurance transfer is available and practical |
| **Accept** | Consciously accept the risk where the cost of treatment exceeds the benefit, and the risk is within appetite | Low and some Medium risks only; requires documented senior management approval |

### 10.2 Detailed Treatment Plans — Critical and High Risks

*For each Critical or High residual risk, complete a detailed treatment plan. Copy and complete this sub-section for each such risk.*

---

#### Risk Treatment Plan: [TRM-00X] — [Risk Title]

| Field | Details |
|---|---|
| **Risk ID** | [TRM-00X] |
| **Risk Description** | [Full risk description from Section 6] |
| **Current Residual Risk Rating** | **[Critical / High]** — Score: [XX] |
| **Target Residual Risk Rating** | **[High / Medium / Low]** — Score: [XX] |
| **Target Date to Achieve Target Rating** | [Date] |
| **Risk Owner** | [Name, Title] |
| **Treatment Strategy** | [Mitigate / Avoid / Transfer / Accept] |

**Treatment Actions:**

| Action # | Action Description | Owner | Target Date | Resource Required | Success Criteria | Status |
|---|---|---|---|---|---|---|
| 1 | [Specific, measurable action] | [Name] | [Date] | [Resources] | [How will we know this action is complete?] | [Not Started / In Progress / Complete] |
| 2 | [Specific, measurable action] | [Name] | [Date] | [Resources] | [Success criteria] | [Status] |
| 3 | [Specific, measurable action] | [Name] | [Date] | [Resources] | [Success criteria] | [Status] |

**Monitoring and Reporting:**

- **Review Frequency:** [Weekly / Fortnightly / Monthly]
- **Reported To:** [Management Risk Committee / Head of Technology Risk / CRO]
- **Escalation Trigger:** [Define the condition that will trigger escalation, e.g., if Action 1 is not complete by [Date]]

**Contingency Plan:**

[Describe what will be done if the treatment actions are not completed on time or if the risk materializes despite treatment.]

---

*[Repeat the treatment plan sub-section above for each Critical and High residual risk.]*

---

### 10.3 Risk Treatment Summary Table

| Risk ID | Risk Title | Treatment Strategy | Number of Actions | Target Rating | Target Date | Owner | Status |
|---|---|---|---|---|---|---|---|
| TRM-001 | [Title] | Mitigate | [#] | Medium | [Date] | [Name] | [In Progress] |
| TRM-002 | [Title] | Mitigate | [#] | Low | [Date] | [Name] | [In Progress] |
| TRM-003 | [Title] | Mitigate | [#] | Low | [Date] | [Name] | [In Progress] |
| TRM-00X | [Title] | [Strategy] | [#] | [Rating] | [Date] | [Name] | [Status] |

---

## 11. Residual Risk Summary

### 11.1 Overall Residual Risk Rating

*Provide a consolidated overall risk rating for the project after all controls and treatments are applied. This is the headline rating reported to governance bodies and included in the BNM notification.*

| Field | Assessment |
|---|---|
| **Overall Inherent Risk Rating** | **[Critical / High / Medium / Low]** |
| **Overall Residual Risk Rating (Current)** | **[Critical / High / Medium / Low]** |
| **Overall Residual Risk Rating (Target — post treatment)** | **[Critical / High / Medium / Low]** |
| **Is residual risk within organizational risk appetite?** | **[Yes / No / Conditionally — see commentary]** |
| **Recommendation** | **[Proceed / Proceed with conditions / Do not proceed pending treatment of [Risk IDs]]** |

### 11.2 Residual Risk Commentary

*Provide a narrative summary of the overall residual risk position for this project. This should be suitable for inclusion in Board papers or regulatory submissions.*

[Provide a 3–5 paragraph executive narrative that:

1. States the overall residual risk rating and what it means for the project.
2. Highlights the most significant risks and the adequacy of controls in place.
3. Explains any areas where residual risk exceeds risk appetite and what is being done to bring it within appetite.
4. States any conditions that must be met before go-live.
5. Provides an overall recommendation regarding the project's readiness to proceed.]

### 11.3 Go / No-Go Recommendation

| Criterion | Met? | Comments |
|---|---|---|
| All Critical residual risks have an approved treatment plan | [Yes / No / Partially] | [Comment] |
| No unmitigated High risks without documented management acceptance | [Yes / No / Partially] | [Comment] |
| All control gaps with target date before go-live are on track | [Yes / No / Partially] | [Comment] |
| BNM pre-go-live notification submitted (if applicable) | [Yes / No / N/A] | [Comment] |
| Board / Management Committee has been briefed on risk position | [Yes / No] | [Comment] |
| All mandatory testing activities completed | [Yes / No / Partially] | [Comment] |
| Business continuity / rollback plan approved and tested | [Yes / No / Partially] | [Comment] |

**Go / No-Go Recommendation:**

> Based on the above assessment, **[Organization Name]**'s Technology Risk function recommends:
>
> **[GO — The project may proceed to [next phase / go-live] subject to the following conditions:]**
>
> OR
>
> **[NO-GO — The project should not proceed to [next phase / go-live] until the following issues are resolved:]**
>
> **Conditions / Issues:**
> 1. [Condition or issue 1]
> 2. [Condition or issue 2]
> 3. [Condition or issue 3]

---

## 12. Roles and Responsibilities

### 12.1 RACI Matrix

*The RACI matrix below defines accountability for key activities associated with this risk assessment and the BNM notification process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Board / BRC | CEO / ExCo | CRO | Head of Technology Risk | CISO | Compliance | DPO | Project Manager | System Owner | Vendor |
|---|---|---|---|---|---|---|---|---|---|---|
| **Risk Assessment Activities** | | | | | | | | | | |
| Initiate and scope risk assessment | I | I | A | R | C | C | C | C | C | |
| Conduct risk identification workshops | | | I | A/R | R | C | C | C | R | C |
| Perform inherent risk analysis | | | I | A | R | C | C | I | C | |
| Assess control effectiveness | | | I | A | R | C | C | I | R | C |
| Calculate residual risk ratings | | | C | A/R | C | C | C | I | | |
| Develop risk treatment plans | | I | A | R | R | C | C | R | R | C |
| Review and challenge risk assessment | C | I | A | R | C | C | C | I | | |
| Approve risk assessment | A | C | A | R | | C | | I | | |
| **Notification Activities** | | | | | | | | | | |
| Determine notification obligation | I | I | A | R | C | R | C | I | | |
| Prepare BNM LINK submission documents | | | I | A | C | R | C | C | | |
| Obtain pre-submission approvals | | C | A | R | | R | | I | | |
| Submit via BNM LINK | | I | A | R | | R | | | | |
| Monitor for BNM queries and respond | | I | A | R | C | R | C | C | | |
| **Ongoing Monitoring Activities** | | | | | | | | | | |
| Monitor risk treatment plan progress | I | I | A | R | C | C | | R | C | C |
| Report to Management Risk Committee | | I | A | R | C | C | | I | | |
| Escalate to Board Risk Committee | A | C | A | R | | | | | | |
| Conduct quarterly review of assessment | I | I | A | R | C | C | | C | C | |
| Archive and retain assessment records | | | I | A | | R | | C | | |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 12.2 Escalation Framework

*Define clear escalation paths based on risk rating changes or trigger events.*

| Trigger / Event | Escalation Level | Timeframe | Action Required |
|---|---|---|---|
| New Critical risk identified | Board Risk Committee, CRO, CEO | Within 24 hours | Emergency risk committee convened; notification obligation re-assessed |
| Existing High risk deteriorates to Critical | CRO, Board Risk Committee | Within 24 hours | Treatment plan reviewed; BNM notified if notification threshold newly triggered |
| Treatment plan action overdue by > [X days] | Head of Technology Risk, CRO | Within 48 hours | Recovery plan required; senior management review |
| Material change to project scope, budget (+/- [X]%), or timeline (> [X weeks]) | Head of Technology Risk, CRO | Within [X] business days | Risk assessment refresh; notification obligation re-assessed |
| Notification deadline at risk | CRO, Chief Compliance Officer | Immediately | Emergency escalation; BNM LINK submission expedited |
| BNM raises concerns or requests further information | CRO, CEO, Board | Within 24 hours of BNM communication | Dedicated response team convened |

---

## 13. Review and Approval

### 13.1 Version History

*Maintain a complete record of all changes to this document. Each version must be documented here before the document is approved and distributed.*

| Version | Date | Author | Role | Summary of Changes | Approved By |
|---|---|---|---|---|---|
| 0.1 | [Date] | [Name] | [Role] | Initial draft | Draft only — not yet approved |
| 0.2 | [Date] | [Name] | [Role] | [e.g., Incorporated feedback from Risk team review] | Draft only — not yet approved |
| 0.3 | [Date] | [Name] | [Role] | [e.g., Updated with findings from security assessment dated DD/MM/YYYY] | Draft only — not yet approved |
| 1.0 | [Date] | [Name] | [Role] | Final version for approval and submission | [Approver Name] |
| 1.1 | [Date] | [Name] | [Role] | [e.g., Quarterly review — updated risk ratings following completion of Phase 3] | [Approver Name] |

### 13.2 Review Cycle

| Review Type | Frequency | Trigger | Responsible |
|---|---|---|---|
| Scheduled Quarterly Review | Quarterly | Calendar-based | Head of Technology Risk |
| Material Change Review | Ad hoc | Material change to project scope, risk profile, or BNM requirement | Head of Technology Risk |
| Pre-Milestone Review | At each project gate | Project milestone (as defined in Section 5.2) | Head of Technology Risk / Project Manager |
| Post-Incident Review | Within [X days] of incident | Technology incident affecting project scope | Head of Technology Risk / CISO |

### 13.3 Approval Sign-Off

*All approvers must sign below before this document is considered final and may be used as the basis for a BNM notification submission.*

| Role | Name | Signature | Date | Capacity |
|---|---|---|---|---|
| **Prepared By** | [Name] | _____________________ | [Date] | Head of Technology Risk |
| **Reviewed By — Technology Risk** | [Name] | _____________________ | [Date] | [Role] |
| **Reviewed By — Compliance** | [Name] | _____________________ | [Date] | Chief Compliance Officer |
| **Reviewed By — Information Security** | [Name] | _____________________ | [Date] | Chief Information Security Officer |
| **Reviewed By — Data Protection** | [Name] | _____________________ | [Date] | Data Protection Officer |
| **Approved By — Risk** | [Name] | _____________________ | [Date] | Chief Risk Officer |
| **Approved By — Business** | [Name] | _____________________ | [Date] | [Business Sponsor, e.g., Chief Operating Officer] |
| **Noted By** | [Name] | _____________________ | [Date] | [Committee, e.g., Management Risk Committee — represented by Chair] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Title | Issuing Authority | Date Issued | Relevant Clause(s) | Availability |
|---|---|---|---|---|---|
| RMiT | Risk Management in Technology | Bank Negara Malaysia | [Date of current version] | Clause 16.2 (Major Project Risk Assessment and Notification); Clause 16.1 (Technology Project Governance); Clause 10 (Technology Risk Management Framework) | BNM website |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | 2013 | Section 47 (Duty to manage risks); Section 58 (Operational risk) | Attorney General's Chambers portal |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 | Section 9 (Security Principle); Section 6 (Consent Principle) | PDPC Malaysia |
| [BNM/RH/PD] | [Title of any other BNM policy applicable, e.g., Outsourcing Policy, Cloud Computing Policy] | Bank Negara Malaysia | [Date] | [Relevant clauses] | BNM website |
| [Cybersecurity Policy] | [Title, if issued by NACSA or other authority] | [NACSA / MCMC / Other] | [Date] | [Relevant sections] | [Source] |

### 14.2 Internal Policy References

| Reference | Document Title | Version | Date | Owner |
|---|---|---|---|---|
| [Policy Ref] | Technology Risk Management Framework | [Version] | [Date] | Head of Technology Risk |
| [Policy Ref] | Project Management Methodology | [Version] | [Date] | PMO |
| [Policy Ref] | Information Security Policy | [Version] | [Date] | CISO |
| [Policy Ref] | Operational Risk Management Policy | [Version] | [Date] | CRO |
| [Policy Ref] | Third-Party Risk Management Policy | [Version] | [Date] | Head of Vendor Management |
| [Policy Ref] | Business Continuity Management Policy | [Version] | [Date] | BCM Manager |
| [Policy Ref] | Data Protection and Privacy Policy | [Version] | [Date] | DPO |
| [Policy Ref] | Change Management Policy | [Version] | [Date] | Head of IT Operations |

### 14.3 Supporting Project Documents

| Document Title | Version | Date | Location / Reference |
|---|---|---|---|
| [Project Charter — Project Name] | [Version] | [Date] | [Document Management System path / reference] |
| [Architecture Design Document] | [Version] | [Date] | [Reference] |
| [Business Requirements Document] | [Version] | [Date] | [Reference] |
| [Test Plan] | [Version] | [Date] | [Reference] |
| [Vendor Security Assessment — Vendor Name] | [Version] | [Date] | [Reference] |
| [Business Impact Analysis] | [Version] | [Date] | [Reference] |
| [Previous Risk Assessment — if applicable] | [Version] | [Date] | [Reference] |

---

## 15. Appendices

### Appendix A — Glossary of Risk Terms

| Term | Definition | Source |
|---|---|---|
| **Availability** | The property of being accessible and usable upon demand by an authorized entity | ISO/IEC 27000 |
| **Confidentiality** | The property that information is not made available or disclosed to unauthorized individuals, entities, or processes | ISO/IEC 27000 |
| **Integrity** | The property of accuracy and completeness | ISO/IEC 27000 |
| **Control** | A measure that modifies risk, including any process, policy, device, practice, or other action which modifies risk | ISO 31000 |
| **Cyber Threat** | Any circumstance or event with the potential to adversely impact organizational operations, assets, or individuals through an information system | NIST SP 800-30 |
| **Data Breach** | A security incident in which sensitive, protected, or confidential data is copied, transmitted, viewed, stolen, or used by an individual unauthorized to do so | General |
| **Disaster Recovery** | The policies, tools, and procedures to enable the recovery or continuation of vital technology infrastructure and systems following a natural or human-induced disaster | General |
| **Key Risk Indicator (KRI)** | A metric used to measure the likelihood that a combined set of risk factors will exceed a pre-defined threshold | General |
| **Material Change** | A change that significantly alters the risk profile, scope, cost, timeline, or regulatory impact of a project or system | RMiT (contextual) |
| **Recovery Point Objective (RPO)** | The maximum targeted period in which data might be lost from an IT service due to a major incident | BCM / ISO 22301 |
| **Recovery Time Objective (RTO)** | The maximum targeted period of time following an incident within which a business process must be restored | BCM / ISO 22301 |
| **Risk Appetite** | The amount and type of risk that an organization is prepared to pursue, retain, or take | ISO 31000 |
| **Risk Tolerance** | The organization's or stakeholder's readiness to bear the risk after risk treatment in order to achieve its objectives | ISO 31000 |
| **Threat Actor** | An individual or group that attempts to exploit vulnerabilities to gain unauthorized access or cause harm | NIST |
| **Vulnerability** | A weakness of an asset or control that could potentially be exploited by one or more threats | ISO/IEC 27000 |
| [Additional Term] | [Definition] | [Source] |

---

### Appendix B — Detailed Risk Profiles

*For risks rated Critical or High that require additional narrative beyond what the risk register table accommodates, provide detailed risk profiles here.*

#### B.1 Detailed Risk Profile: [TRM-00X] — [Risk Title]

**Risk Statement:**

[A clearly articulated statement of the risk in the format: "There is a risk that [event] occurs due to [cause], resulting in [consequence] for [Organization Name]."]

**Threat Scenario:**

[Describe the specific threat scenario in detail. What is the plausible chain of events that could lead to this risk materializing?]

**Current Control Environment:**

| Control | Control Type | Owner | Frequency | Effectiveness Assessment | Evidence |
|---|---|---|---|---|---|
| [Control 1] | [Preventive / Detective / Corrective] | [Owner] | [Frequency] | [Effective / Partially Effective / Ineffective] | [Evidence reference] |
| [Control 2] | [Type] | [Owner] | [Frequency] | [Effectiveness] | [Evidence] |

**Historical Precedent / Industry Incidents:**

[Reference any known internal incidents, near-misses, or industry incidents that demonstrate this risk is credible.]

**Regulatory Precedent:**

[Reference any regulatory enforcement actions or guidance relevant to this risk.]

---

### Appendix C — Vendor Risk Assessment Summary

*Complete this appendix for each material third-party vendor involved in the project.*

#### C.1 Vendor Assessment: [Vendor Name]

| Field | Details |
|---|---|
| **Vendor Name** | [Vendor Name] |
| **Country of Incorporation** | [Country] |
| **Country of Operations / Data Processing** | [Country] |
| **Service Provided** | [Description] |
| **Contract Reference** | [Contract Number / Date] |
| **Contract Value** | RM [Amount] |
| **Contract Term** | [Start Date] to [End Date] |
| **Data Access** | [Does vendor have access to customer personal data? Yes / No] |
| **Sub-contractors** | [Does vendor use material sub-contractors? Yes / No — if Yes, list them] |
| **Vendor Risk Rating** | **[Critical / High / Medium / Low]** |

**Vendor Risk Assessment Summary:**

| Risk Area | Assessment | Key Concerns | Mitigating Factors |
|---|---|---|---|
| Financial Stability | [Adequate / Requires Monitoring / Concern] | [Concerns if any] | [Mitigating factors] |
| Information Security Posture | [Adequate / Requires Improvement / Concern] | [Concerns] | [Mitigating factors] |
| Business Continuity Capability | [Adequate / Requires Improvement / Concern] | [Concerns] | [Mitigating factors] |
| Regulatory Compliance | [Adequate / Requires Improvement / Concern] | [Concerns] | [Mitigating factors] |
| Sub-contractor Management | [Adequate / Requires Improvement / Concern] | [Concerns] | [Mitigating factors] |
| Data Protection | [Adequate / Requires Improvement / Concern] | [Concerns] | [Mitigating factors] |
| Concentration Risk | [Adequate / Requires Monitoring / Concern] | [Concerns] | [Mitigating factors] |

**Outstanding Vendor Due Diligence Items:**

| # | Item | Responsible | Target Date | Status |
|---|---|---|---|---|
| 1 | [e.g., ISO 27001 certificate to be provided] | [Vendor Name] | [Date] | [Pending] |
| 2 | [e.g., Penetration test results for [Year]] | [Vendor Name] | [Date] | [Pending] |

---

### Appendix D — Assessment Evidence Log

*Maintain a complete log of all evidence reviewed and relied upon in this assessment. This forms part of the audit trail for regulatory examination.*

| Evidence ID | Evidence Type | Document Title | Date of Document | Source | Reviewed By | Review Date | Location / Reference |
|---|---|---|---|---|---|---|---|
| EV-001 | Project Document | [Title] | [Date] | [Source] | [Reviewer] | [Date] | [Reference] |
| EV-002 | Security Assessment | [Title] | [Date] | [Source] | [Reviewer] | [Date] | [Reference] |
| EV-003 | Interview Record | Interview with [Role/Name] | [Date] | [Interviewer] | [Reviewer] | [Date] | [Reference] |
| EV-004 | Vendor Document | [Title] | [Date] | [Vendor Name] | [Reviewer] | [Date] | [Reference] |
| EV-005 | Test Result | [Title] | [Date] | [Source] | [Reviewer] | [Date] | [Reference] |
| [EV-00X] | [Type] | [Title] | [Date] | [Source] | [Reviewer] | [Date] | [Reference] |

---

### Appendix E — Previous Assessment Comparison

*For projects undergoing a refresh assessment, compare key risk metrics with the previous assessment to demonstrate the direction of travel.*

*This appendix is applicable when this assessment is a refresh or update of a prior assessment. If this is the initial assessment, mark this appendix as N/A.*

| Risk ID | Risk Title | Previous Rating (Date) | Current Rating (Date) | Change | Change Driver |
|---|---|---|---|---|---|
| TRM-001 | [Title] | [Rating] ([Date]) | [Rating] ([Date]) | [Improved / Deteriorated / Unchanged] | [Reason for change] |
| TRM-002 | [Title] | [Rating] ([Date]) | [Rating] ([Date]) | [Improved / Deteriorated / Unchanged] | [Reason for change] |
| [New Risk] | [Title] | N/A — New risk | [Rating] ([Date]) | New risk identified | [Driver of new risk] |

**Overall Risk Trend:** [Improving / Stable / Deteriorating]

**Commentary on Trend:** [2–3 sentences explaining the overall direction of the risk profile since the last assessment and the key drivers.]

---

### Appendix F — BNM Notification Correspondence Register

*Maintain a complete register of all formal correspondence with BNM related to this project.*

| Correspondence # | Direction | Date | Method | Subject / Summary | BNM Reference | [Organization] Reference | Responded By | Response Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Outbound | [Date] | BNM LINK | [e.g., Pre-commencement notification — [Project Name]] | [BNM LINK Ref] | [Internal Ref] | [Name] | [Date] | [Submitted / Acknowledged / Query Received] |
| 2 | Inbound | [Date] | BNM LINK / Email | [e.g., BNM query re: vendor risk assessment] | [BNM Reference] | [Internal Ref] | [Name] | [Date] | [Responded / Pending] |

---

### Appendix G — Key Risk Indicator (KRI) Framework

*Define the KRIs that will be monitored throughout the project lifecycle to provide early warning of risk escalation.*

| KRI ID | KRI Description | Risk(s) Monitored | Measurement | Green Threshold | Amber Threshold | Red Threshold | Measurement Frequency | Owner | Reported To |
|---|---|---|---|---|---|---|---|---|---|
| KRI-001 | [e.g., % of treatment plan actions overdue] | All | [% of actions past target date] | < 10% | 10–25% | > 25% | Fortnightly | Head of Technology Risk | Management Risk Committee |
| KRI-002 | [e.g., Number of new High/Critical risks identified since last review] | All | [Count of new High/Critical risks] | 0 | 1–2 | > 2 | Monthly | Head of Technology Risk | CRO |
| KRI-003 | [e.g., Vendor SLA compliance — delivery milestones] | TRM-003 | [% milestones met on time] | > 90% | 75–90% | < 75% | Monthly | Vendor Manager | Head of Technology Risk |
| KRI-004 | [e.g., Number of failed integration tests / total integration tests] | TRM-001 | [Failure rate %] | < 5% | 5–15% | > 15% | Per test cycle | Test Manager | Project Manager / Technology Risk |
| KRI-005 | [e.g., Days until go-live vs. days of outstanding critical actions] | All | [Outstanding critical action days vs. go-live days] | > 30 days buffer | 10–30 days buffer | < 10 days buffer | Weekly (final month) | Head of Technology Risk | CRO / Steering Committee |
| [KRI-00X] | [Description] | [Risks] | [Metric] | [Threshold] | [Threshold] | [Threshold] | [Frequency] | [Owner] | [Reporting Destination] |

---

*End of Document*

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Last Updated** | [Date] |
| **Document Owner** | Head of Technology Risk, [Organization Name] |
| **BNM RMiT Reference** | Clause 16.2 |