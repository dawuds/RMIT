# Project Risk Assessment Report

---

**Document ID:** [DOCUMENT-ID]
**Version:** 1.0
**Classification:** Confidential

| Field | Details |
|---|---|
| **Document Title** | Project Risk Assessment Report |
| **Document ID** | [DOCUMENT-ID] |
| **Version** | 1.0 |
| **Classification** | Confidential — Internal Use Only |
| **Document Owner** | Head of Technology Risk |
| **Prepared By** | [Prepared By Name], [Title] |
| **Organisation** | [Organisation Name] |
| **Project Name** | [Project Name] |
| **Project ID** | [Project ID] |
| **Business Unit** | [Business Unit / Department] |
| **Last Review Date** | [DD Month YYYY] |
| **Next Review Date** | [DD Month YYYY] |
| **Approved By** | [Approved By Name], [Title] |
| **Effective Date** | [Effective Date] |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information of [Organisation Name]. It is intended solely for the use of authorised personnel. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may be subject to legal action. This document must be handled in accordance with [Organisation Name]'s Information Classification and Handling Policy.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Project Overview](#4-project-overview)
5. [Asset and Item Identification](#5-asset-and-item-identification)
6. [Classification and Categorisation](#6-classification-and-categorisation)
7. [Owner and Custodian Assignment](#7-owner-and-custodian-assignment)
8. [Risk Identification](#8-risk-identification)
9. [Risk Analysis and Evaluation](#9-risk-analysis-and-evaluation)
10. [Risk Treatment and Controls](#10-risk-treatment-and-controls)
11. [Status and Lifecycle Stage](#11-status-and-lifecycle-stage)
12. [Last Review and Monitoring](#12-last-review-and-monitoring)
13. [Residual Risk and Risk Acceptance](#13-residual-risk-and-risk-acceptance)
14. [Roles and Responsibilities](#14-roles-and-responsibilities)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Executive Summary

*Provide a concise, senior-management-level summary of the key findings, overall risk posture of the project, and the most critical risk treatment actions required. This section should be self-contained and readable independently of the full report.*

### 1.1 Assessment Overview

| Field | Details |
|---|---|
| **Assessment Type** | [Initial / Periodic / Ad-hoc / Pre-launch / Post-incident] |
| **Assessment Date** | [DD Month YYYY] |
| **Assessment Lead** | [Name], [Title] |
| **Overall Risk Rating** | [Critical / High / Medium / Low] |
| **Total Risks Identified** | [Number] |
| **Risks Requiring Immediate Action** | [Number] |
| **Risks Accepted** | [Number] |
| **Risks Mitigated / Closed** | [Number] |

### 1.2 Key Findings

*Summarise the three to five most significant risk findings. These should directly inform the attention and decisions of senior management and the Board Risk Committee.*

1. **[Key Finding 1]:** [Brief description of finding and its business impact]
2. **[Key Finding 2]:** [Brief description of finding and its business impact]
3. **[Key Finding 3]:** [Brief description of finding and its business impact]
4. **[Key Finding 4]:** [Brief description of finding and its business impact]
5. **[Key Finding 5]:** [Brief description of finding and its business impact]

### 1.3 Risk Profile Summary

| Risk Category | Critical | High | Medium | Low | Total |
|---|---|---|---|---|---|
| Strategic | [#] | [#] | [#] | [#] | [#] |
| Technology Infrastructure | [#] | [#] | [#] | [#] | [#] |
| Cybersecurity | [#] | [#] | [#] | [#] | [#] |
| Operational | [#] | [#] | [#] | [#] | [#] |
| Data and Privacy | [#] | [#] | [#] | [#] | [#] |
| Compliance and Regulatory | [#] | [#] | [#] | [#] | [#] |
| Third-Party / Vendor | [#] | [#] | [#] | [#] | [#] |
| Business Continuity | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

### 1.4 Management Recommendations

*List the top-priority recommendations for management action, in order of urgency. Each recommendation should be actionable and time-bound.*

| Priority | Recommendation | Responsible Party | Target Date |
|---|---|---|---|
| 1 | [Recommendation] | [Owner] | [DD Month YYYY] |
| 2 | [Recommendation] | [Owner] | [DD Month YYYY] |
| 3 | [Recommendation] | [Owner] | [DD Month YYYY] |
| 4 | [Recommendation] | [Owner] | [DD Month YYYY] |
| 5 | [Recommendation] | [Owner] | [DD Month YYYY] |

---

## 2. Purpose and Scope

### 2.1 Purpose

This Project Risk Assessment Report documents the findings of an independent technology risk assessment conducted for **[Project Name]** at **[Organisation Name]**. The assessment has been performed in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** policy document, specifically Sections **10.1** and **10.2**, which mandate that financial institutions establish a structured and independent risk assessment process for all major technology initiatives.

The purpose of this report is to:

- Identify, analyse, and evaluate technology-related risks associated with **[Project Name]** across its full project lifecycle.
- Assess the adequacy and effectiveness of existing controls implemented to manage identified risks.
- Provide evidence of a systematic and independent risk assessment process to satisfy regulatory obligations under BNM RMiT.
- Inform senior management, the Technology Risk Committee, and relevant stakeholders of the project's risk posture and required mitigation actions.
- Establish a baseline risk register for ongoing monitoring and quarterly review cycles as required by BNM RMiT.
- Support informed decision-making regarding project approval, continuation, or escalation of risk treatment activities.

### 2.2 Scope

*Define the precise boundaries of the assessment. Be explicit about what is included and excluded to ensure the report is defensible under regulatory scrutiny.*

#### 2.2.1 In-Scope

The following elements are within the scope of this assessment:

- **Project:** [Project Name] — [Brief one-line description of the project]
- **Project Phase:** [Planning / Design / Development / Testing / Pre-Production / Production / Post-Implementation]
- **Technology Components:**
  - [Component 1 — e.g., Application Layer (Web Application, Mobile Application)]
  - [Component 2 — e.g., Data Layer (Database, Data Warehouse, ETL Pipelines)]
  - [Component 3 — e.g., Infrastructure (Cloud, On-Premises, Hybrid)]
  - [Component 4 — e.g., Integration Points (APIs, Middleware, Third-Party Services)]
  - [Component 5 — e.g., Security Controls (IAM, Encryption, Logging)]
- **Business Processes Supported:** [List the business processes this project enables or affects]
- **Organisational Units Affected:** [List departments, business units, or subsidiaries]
- **Geographic Scope:** [Malaysia / Regional / Global operations affected]
- **Data in Scope:** [Categories of data processed, e.g., Customer PII, Financial Transaction Data, Sensitive Personal Data under PDPA]
- **Regulatory Perimeter:** BNM RMiT, Personal Data Protection Act 2010 (PDPA), NACSA Cybersecurity Policy (where applicable), and [Other Applicable Regulations]

#### 2.2.2 Out-of-Scope

The following elements are explicitly excluded from this assessment:

- [Excluded Component 1 — e.g., Legacy systems not integrated into this project]
- [Excluded Component 2 — e.g., Physical security of data centre facilities (assessed separately)]
- [Excluded Component 3 — e.g., Operational risk outside of technology domains]
- [Excluded Component 4 — e.g., Third-party vendor assessments — refer to [Vendor Risk Assessment Reference]]

#### 2.2.3 Scope Limitations and Caveats

*Document any constraints that may have limited the completeness of this assessment. Transparency about limitations is essential for regulatory submissions.*

| Limitation | Impact | Mitigating Action |
|---|---|---|
| [Limitation 1 — e.g., System not yet fully deployed] | [Impact on assessment completeness] | [How this was addressed] |
| [Limitation 2 — e.g., Vendor documentation not fully available] | [Impact on assessment completeness] | [How this was addressed] |
| [Limitation 3] | [Impact] | [Mitigating Action] |

### 2.3 Assessment Objectives

The specific objectives of this assessment are to:

1. **Identify** all technology assets, components, and processes associated with [Project Name] that could be sources of or contribute to technology risk.
2. **Classify** identified risks by category, likelihood, and potential impact using [Organisation Name]'s approved risk assessment methodology.
3. **Evaluate** the adequacy of existing controls and identify control gaps.
4. **Recommend** risk treatment measures that are proportionate to the risk rating and aligned with the institution's risk appetite.
5. **Monitor** the ongoing risk status of the project on a quarterly basis, consistent with BNM RMiT continuous monitoring requirements.
6. **Report** findings to the Head of Technology Risk, Technology Risk Committee, and Board Risk Committee as required.

---

## 3. Regulatory and Policy Context

### 3.1 Applicable Regulatory Frameworks

*This section documents the regulatory basis for this assessment. It must be kept current with any amendments issued by BNM or other regulators.*

| Framework | Issuing Authority | Effective Date | Relevant Sections |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | [Effective Date of Current Version] | 10.1, 10.2 |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | 2013 (as amended) | [Relevant Sections] |
| Financial Services Act 2013 (FSA) / Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | 2013 | [Relevant Sections] |
| NACSA Cybersecurity Framework | National Cyber Security Agency (NACSA) | [Version Date] | [Relevant Sections] |
| [Other Applicable Regulation] | [Issuing Authority] | [Date] | [Sections] |

### 3.2 Key BNM RMiT Requirements Addressed

#### 3.2.1 BNM RMiT Section 10.1 — Technology Risk Assessment

BNM RMiT Section 10.1 requires financial institutions to establish a comprehensive and systematic approach to technology risk assessment. Specifically, this section mandates:

- A structured methodology for identifying and evaluating technology risks associated with major technology projects.
- The involvement of independent assessment capabilities, separate from project delivery teams.
- Documentation of risk findings in a structured report that is accessible for regulatory inspection.
- Linkage of project risk assessments to the institution's overall Technology Risk Management Framework (TRMF).
- Escalation of high and critical risks to the Technology Risk Committee and, where appropriate, the Board Risk Committee.

*This report satisfies the requirements of BNM RMiT Section 10.1 by providing an independent, structured, and documented assessment of technology risks for [Project Name].*

#### 3.2.2 BNM RMiT Section 10.2 — Continuous Monitoring and Quarterly Review

BNM RMiT Section 10.2 requires financial institutions to implement continuous monitoring of technology risks identified during project assessments, supplemented by formal quarterly reviews. Specifically, this section mandates:

- Establishment of key risk indicators (KRIs) and key control indicators (KCIs) for all significant technology risks.
- Quarterly reporting of risk status to the Head of Technology Risk and relevant governance committees.
- Timely escalation of any change in risk status that breaches defined thresholds.
- Evidence of management action and resolution tracking for open risk items.

*This report satisfies the requirements of BNM RMiT Section 10.2 by establishing a monitoring framework, defining KRIs and KCIs, and scheduling quarterly review cycles for [Project Name].*

### 3.3 Internal Policy Alignment

| Internal Policy | Policy Owner | Alignment Area |
|---|---|---|
| Technology Risk Management Framework | Head of Technology Risk | Overall risk assessment methodology |
| Information Security Policy | Chief Information Security Officer (CISO) | Security risk controls |
| Data Classification and Handling Policy | Data Protection Officer (DPO) | Data risk and classification |
| Vendor and Third-Party Risk Management Policy | Head of Technology Risk | Third-party risk |
| Change Management Policy | Head of IT Operations | Change-related risks |
| Business Continuity Management Policy | Head of Business Continuity | BCP and DR risks |
| [Other Internal Policy] | [Owner] | [Alignment Area] |

### 3.4 Risk Assessment Methodology

*Describe the methodology used to conduct this assessment. Referencing a recognised standard strengthens the regulatory defensibility of the report.*

This assessment was conducted using [Organisation Name]'s approved risk assessment methodology, which is aligned with:

- **ISO/IEC 27005:2022** — Information Security Risk Management
- **NIST SP 800-30 Rev. 1** — Guide for Conducting Risk Assessments
- **BNM RMiT** — Risk Management in Technology

The assessment methodology encompasses the following stages:

1. **Context Establishment** — Define the project context, scope, and risk criteria.
2. **Asset Identification** — Enumerate all technology assets and components in scope.
3. **Threat Identification** — Identify threat sources and events relevant to each asset.
4. **Vulnerability Identification** — Identify weaknesses that could be exploited by threats.
5. **Control Assessment** — Evaluate existing controls for adequacy and effectiveness.
6. **Risk Analysis** — Calculate inherent and residual risk ratings using the approved risk matrix.
7. **Risk Evaluation** — Prioritise risks against the institution's risk appetite.
8. **Risk Treatment** — Define treatment options and assign ownership.
9. **Monitoring** — Establish KRIs, KCIs, and review schedules.

#### 3.4.1 Risk Rating Methodology

**Likelihood Scale:**

| Rating | Score | Description |
|---|---|---|
| Almost Certain | 5 | Expected to occur in most circumstances (>80% probability) |
| Likely | 4 | Will probably occur in most circumstances (60–80% probability) |
| Possible | 3 | Might occur at some time (40–60% probability) |
| Unlikely | 2 | Could occur at some time (20–40% probability) |
| Rare | 1 | May occur only in exceptional circumstances (<20% probability) |

**Impact Scale:**

| Rating | Score | Financial Impact | Operational Impact | Reputational Impact |
|---|---|---|---|---|
| Catastrophic | 5 | >RM [Amount] | Institution-wide disruption | Severe regulatory sanction / media coverage |
| Major | 4 | RM [Amount]–[Amount] | Significant disruption to critical services | Regulatory investigation / significant media |
| Moderate | 3 | RM [Amount]–[Amount] | Moderate disruption to services | Regulatory enquiry / limited media |
| Minor | 2 | RM [Amount]–[Amount] | Minor disruption, limited customer impact | Minor complaints / no media |
| Insignificant | 1 | <RM [Amount] | Negligible disruption | No external impact |

**Risk Rating Matrix:**

| | **Rare (1)** | **Unlikely (2)** | **Possible (3)** | **Likely (4)** | **Almost Certain (5)** |
|---|---|---|---|---|---|
| **Catastrophic (5)** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Major (4)** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Moderate (3)** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Minor (2)** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Insignificant (1)** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

**Risk Rating Thresholds:**

| Rating | Score Range | Required Action |
|---|---|---|
| **Critical** | 20–25 | Immediate escalation to Head of Technology Risk and Technology Risk Committee. Treatment plan required within 5 business days. |
| **High** | 10–19 | Escalation to Head of Technology Risk. Treatment plan required within 10 business days. |
| **Medium** | 5–9 | Management attention required. Treatment plan required within 30 days. |
| **Low** | 1–4 | Monitor and review quarterly. Accept or address in normal course of operations. |

---

## 4. Project Overview

### 4.1 Project Description

*Provide a comprehensive description of the project. Assessors reviewing this document without prior project knowledge must be able to understand the project from this section alone.*

| Field | Details |
|---|---|
| **Project Name** | [Project Name] |
| **Project ID** | [Project ID] |
| **Project Sponsor** | [Name], [Title] |
| **Project Manager** | [Name], [Title] |
| **Technology Owner** | [Name], [Title] |
| **Business Owner** | [Name], [Title] |
| **Project Start Date** | [DD Month YYYY] |
| **Expected Completion Date** | [DD Month YYYY] |
| **Project Budget** | RM [Amount] |
| **Project Priority** | [Critical / High / Medium / Low] |
| **Project Classification** | [Major Technology Initiative / Technology Change / System Upgrade / New System] |
| **Current Phase** | [Initiation / Planning / Execution / Testing / Deployment / Closure] |

**Project Description:**

[Provide a detailed narrative description of the project — its purpose, business drivers, expected outcomes, and the technology being implemented or changed. Minimum two paragraphs. Describe the problem being solved or the opportunity being pursued, the solution approach adopted, and the key stakeholders affected.]

**Business Objectives:**

1. [Business Objective 1]
2. [Business Objective 2]
3. [Business Objective 3]
4. [Business Objective 4]

### 4.2 Technology Architecture Overview

*Describe the high-level technology architecture at a level sufficient to support risk identification. Attach detailed architecture diagrams in the Appendices.*

**Architecture Summary:**

[Describe the high-level architecture — e.g., whether the solution is cloud-based, on-premises, or hybrid; the primary technology stack; key integration points with existing systems; and any significant architectural decisions that have risk implications.]

**Architecture Diagram Reference:** Appendix A — System Architecture Diagram

**Key Technology Components:**

| Component ID | Component Name | Component Type | Technology Stack | Hosting Environment |
|---|---|---|---|---|
| COMP-001 | [Component Name] | [Application / Database / Infrastructure / Integration / Security] | [Technology, Version] | [Cloud / On-Premises / Hybrid — Provider] |
| COMP-002 | [Component Name] | [Type] | [Technology, Version] | [Environment] |
| COMP-003 | [Component Name] | [Type] | [Technology, Version] | [Environment] |
| COMP-004 | [Component Name] | [Type] | [Technology, Version] | [Environment] |
| COMP-005 | [Component Name] | [Type] | [Technology, Version] | [Environment] |

**Integration Points:**

| Integration ID | Source System | Target System | Integration Method | Data Exchanged | Criticality |
|---|---|---|---|---|---|
| INT-001 | [Source] | [Target] | [API / File Transfer / Message Queue / Database Link] | [Data description] | [Critical / High / Medium / Low] |
| INT-002 | [Source] | [Target] | [Method] | [Data] | [Criticality] |
| INT-003 | [Source] | [Target] | [Method] | [Data] | [Criticality] |

### 4.3 Project Stakeholders

| Role | Name | Organisation / Unit | Contact | Responsibility |
|---|---|---|---|---|
| Project Sponsor | [Name] | [Unit] | [Email] | Overall project accountability |
| Project Manager | [Name] | [Unit] | [Email] | Day-to-day project delivery |
| Technology Owner | [Name] | [Unit] | [Email] | Technology decisions and architecture |
| Business Owner | [Name] | [Unit] | [Email] | Business requirements and UAT |
| Information Security Lead | [Name] | [Unit] | [Email] | Security requirements and controls |
| Risk Assessment Lead | [Name] | [Unit] | [Email] | Independent risk assessment |
| Data Protection Officer | [Name] | [Unit] | [Email] | PDPA compliance oversight |
| Chief Information Officer | [Name] | [Unit] | [Email] | Technology governance |
| [Other Stakeholder] | [Name] | [Unit] | [Email] | [Responsibility] |

---

## 5. Asset and Item Identification

*This section documents all technology assets, information assets, and key items associated with [Project Name] that are subject to this risk assessment. Accurate and complete asset identification is the foundation of a defensible risk assessment.*

### 5.1 Asset Identification Methodology

*Describe how assets were identified for this assessment. The methodology should be systematic and repeatable.*

Asset identification for this assessment was conducted through the following activities:

1. **Document Review** — Review of project documentation including Business Requirements Document (BRD), Technical Design Document (TDD), and architecture diagrams.
2. **Stakeholder Interviews** — Structured interviews with [list of interviewees by role].
3. **Technical Discovery** — [Automated scanning / manual enumeration / walkthrough with project team] of technology components.
4. **Dependency Mapping** — Identification of upstream and downstream system dependencies.
5. **Data Flow Analysis** — Review of data flow diagrams to identify data assets in scope.

**Assessment Dates:** [Date(s) of assessment activities]
**Assessment Team:** [Names and roles of individuals who conducted asset identification]

### 5.2 Technology Asset Register

*Enumerate all technology assets associated with this project. Every asset identified here must be carried through to the risk analysis in Section 9. This register forms the authoritative asset inventory for this project.*

| Asset ID | Asset Name | Asset Description | Asset Type | Hosting / Location | Criticality | Related Component |
|---|---|---|---|---|---|---|
| ASSET-001 | [Asset Name] | [Brief description of the asset and its function within the project] | [Hardware / Software / Data / Service / Network / People] | [Location / Environment] | [Critical / High / Medium / Low] | [COMP-XXX] |
| ASSET-002 | [Asset Name] | [Description] | [Type] | [Location] | [Criticality] | [COMP-XXX] |
| ASSET-003 | [Asset Name] | [Description] | [Type] | [Location] | [Criticality] | [COMP-XXX] |
| ASSET-004 | [Asset Name] | [Description] | [Type] | [Location] | [Criticality] | [COMP-XXX] |
| ASSET-005 | [Asset Name] | [Description] | [Type] | [Location] | [Criticality] | [COMP-XXX] |
| ASSET-006 | [Asset Name] | [Description] | [Type] | [Location] | [Criticality] | [COMP-XXX] |
| ASSET-007 | [Asset Name] | [Description] | [Type] | [Location] | [Criticality] | [COMP-XXX] |
| ASSET-008 | [Asset Name] | [Description] | [Type] | [Location] | [Criticality] | [COMP-XXX] |
| ASSET-009 | [Asset Name] | [Description] | [Type] | [Location] | [Criticality] | [COMP-XXX] |
| ASSET-010 | [Asset Name] | [Description] | [Type] | [Location] | [Criticality] | [COMP-XXX] |

### 5.3 Information and Data Assets

*Identify all categories of data processed, stored, or transmitted by the project. This is particularly important for PDPA compliance and BNM RMiT data governance requirements.*

| Data Asset ID | Data Category | Description | Personal Data (PDPA) | Sensitive Financial Data | Volume / Scale | Storage Location |
|---|---|---|---|---|---|---|
| DATA-001 | [Data Category — e.g., Customer Identity Data] | [Description] | [Yes / No] | [Yes / No] | [Approximate records / volume] | [Database / System name] |
| DATA-002 | [Data Category — e.g., Transaction Records] | [Description] | [Yes / No] | [Yes / No] | [Volume] | [Location] |
| DATA-003 | [Data Category — e.g., Authentication Credentials] | [Description] | [Yes / No] | [Yes / No] | [Volume] | [Location] |
| DATA-004 | [Data Category] | [Description] | [Yes / No] | [Yes / No] | [Volume] | [Location] |
| DATA-005 | [Data Category] | [Description] | [Yes / No] | [Yes / No] | [Volume] | [Location] |

### 5.4 Third-Party and Vendor Assets

*Identify all third-party products, services, and vendors involved in the project. Third-party risk is specifically highlighted in BNM RMiT as an area requiring particular attention.*

| Vendor ID | Vendor / Product Name | Service / Product Provided | Engagement Type | Contract Reference | Due Diligence Status | Risk Tier |
|---|---|---|---|---|---|---|
| VEN-001 | [Vendor Name] | [Service description] | [Software Licence / SaaS / Managed Service / Professional Services] | [Contract Ref] | [Completed / In Progress / Pending] | [Critical / High / Medium / Low] |
| VEN-002 | [Vendor Name] | [Service] | [Type] | [Ref] | [Status] | [Tier] |
| VEN-003 | [Vendor Name] | [Service] | [Type] | [Ref] | [Status] | [Tier] |
| VEN-004 | [Vendor Name] | [Service] | [Type] | [Ref] | [Status] | [Tier] |

### 5.5 Asset Valuation

*Assign a business value to each critical asset to support prioritisation of risk treatment. Asset valuation considers both quantitative (financial) and qualitative (operational, reputational) dimensions.*

| Asset ID | Asset Name | Financial Value (RM) | Operational Criticality | Regulatory Impact | Reputational Impact | Overall Asset Value |
|---|---|---|---|---|---|---|
| ASSET-001 | [Name] | [RM Value or Estimated Range] | [Critical / High / Medium / Low] | [Critical / High / Medium / Low] | [Critical / High / Medium / Low] | [Critical / High / Medium / Low] |
| ASSET-002 | [Name] | [Value] | [Criticality] | [Impact] | [Impact] | [Value] |
| ASSET-003 | [Name] | [Value] | [Criticality] | [Impact] | [Impact] | [Value] |

---

## 6. Classification and Categorisation

*This section classifies all identified assets and risks according to [Organisation Name]'s approved classification framework and BNM RMiT risk taxonomy. Consistent classification enables meaningful aggregation and trending of risk data.*

### 6.1 Asset Classification Framework

Asset classification for this project is applied in accordance with [Organisation Name]'s **Data Classification and Handling Policy** and **BNM RMiT** requirements. All assets are classified across two dimensions:

- **Confidentiality Classification** — Based on the sensitivity of information the asset contains or processes.
- **Criticality Classification** — Based on the operational impact of asset unavailability or compromise.

#### 6.1.1 Confidentiality Classification

| Classification Level | Definition | Handling Requirements |
|---|---|---|
| **Top Secret** | Information whose unauthorised disclosure would cause exceptionally grave damage to [Organisation Name] or its customers | Strict need-to-know; encrypted at rest and in transit; access logged and reviewed |
| **Confidential** | Information whose unauthorised disclosure would cause serious damage | Need-to-know basis; encrypted; access controlled |
| **Internal** | Information intended for internal use only; not for public disclosure | Internal distribution only; basic access controls |
| **Public** | Information approved for public release | No restrictions on distribution |

#### 6.1.2 Asset Classification Register

| Asset ID | Asset Name | Confidentiality Classification | Criticality Classification | Classification Rationale | Classified By | Classification Date |
|---|---|---|---|---|---|---|
| ASSET-001 | [Name] | [Top Secret / Confidential / Internal / Public] | [Critical / High / Medium / Low] | [Brief rationale for classification] | [Name, Title] | [DD Month YYYY] |
| ASSET-002 | [Name] | [Classification] | [Criticality] | [Rationale] | [Name] | [Date] |
| ASSET-003 | [Name] | [Classification] | [Criticality] | [Rationale] | [Name] | [Date] |
| ASSET-004 | [Name] | [Classification] | [Criticality] | [Rationale] | [Name] | [Date] |
| ASSET-005 | [Name] | [Classification] | [Criticality] | [Rationale] | [Name] | [Date] |
| DATA-001 | [Name] | [Classification] | [Criticality] | [Rationale] | [Name] | [Date] |
| DATA-002 | [Name] | [Classification] | [Criticality] | [Rationale] | [Name] | [Date] |

### 6.2 Risk Categorisation Framework

*Risks identified in this assessment are categorised using BNM RMiT's technology risk taxonomy, supplemented by [Organisation Name]'s internal risk categorisation framework.*

| Risk Category | Sub-Category | Definition |
|---|---|---|
| **Strategic Risk** | Digital Transformation Risk | Risk of technology initiatives not aligning with or delivering intended strategic outcomes |
| | Technology Obsolescence Risk | Risk of technology becoming outdated, unsupported, or misaligned with business needs |
| **Technology Infrastructure Risk** | Availability Risk | Risk of technology systems or services being unavailable when required |
| | Performance Risk | Risk of technology systems failing to meet performance requirements |
| | Capacity Risk | Risk of technology resources being insufficient to meet demand |
| | Integration Risk | Risk of failures at system integration points |
| **Cybersecurity Risk** | Confidentiality Risk | Risk of unauthorised access to or disclosure of sensitive information |
| | Integrity Risk | Risk of unauthorised modification or destruction of data |
| | Access Control Risk | Risk of inadequate access controls enabling unauthorised activity |
| | Vulnerability Risk | Risk from unpatched or unmitigated software/hardware vulnerabilities |
| **Operational Risk** | Change Management Risk | Risk from inadequately managed technology changes |
| | Human Error Risk | Risk of operational errors by technology personnel |
| | Process Risk | Risk from inadequate or poorly designed operational processes |
| **Data and Privacy Risk** | Data Governance Risk | Risk from inadequate data management practices |
| | Privacy Risk | Risk of non-compliance with PDPA or data privacy obligations |
| | Data Quality Risk | Risk from inaccurate, incomplete, or untimely data |
| **Compliance and Regulatory Risk** | Regulatory Risk | Risk of non-compliance with BNM RMiT and other applicable regulations |
| | Legal Risk | Risk of contractual or legal obligations not being met |
| **Third-Party / Vendor Risk** | Concentration Risk | Risk from over-dependence on a single vendor or third party |
| | Vendor Performance Risk | Risk of vendor failing to meet contractual obligations |
| | Supply Chain Risk | Risk from compromise or failure within the technology supply chain |
| **Business Continuity Risk** | Disaster Recovery Risk | Risk that recovery objectives cannot be met following a major incident |
| | Resilience Risk | Risk of inadequate redundancy or failover capability |

### 6.3 Risk Category Distribution

*Summarise the distribution of identified risks across categories to enable trend analysis and portfolio-level reporting.*

| Risk Category | Number of Risks | % of Total | Dominant Rating |
|---|---|---|---|
| Strategic | [#] | [%] | [Critical / High / Medium / Low] |
| Technology Infrastructure | [#] | [%] | [Rating] |
| Cybersecurity | [#] | [%] | [Rating] |
| Operational | [#] | [%] | [Rating] |
| Data and Privacy | [#] | [%] | [Rating] |
| Compliance and Regulatory | [#] | [%] | [Rating] |
| Third-Party / Vendor | [#] | [%] | [Rating] |
| Business Continuity | [#] | [%] | [Rating] |
| **Total** | **[#]** | **100%** | — |

---

## 7. Owner and Custodian Assignment

*This section documents the designated owners and custodians for all assets in scope. BNM RMiT requires clear accountability for technology assets. Every asset must have a named owner and, where applicable, a designated custodian.*

### 7.1 Ownership Framework

*Define the distinction between asset ownership and custodianship as applied in [Organisation Name].*

**Asset Owner:** The individual accountable for the business use, value, and appropriate protection of an asset. The Asset Owner is responsible for approving access, defining acceptable use, and ensuring the asset is appropriately protected commensurate with its classification.

**Asset Custodian:** The individual or team responsible for the day-to-day management, operation, maintenance, and technical protection of an asset on behalf of the Asset Owner. The Asset Custodian implements the controls and safeguards required by the Asset Owner.

**Risk Owner:** The individual accountable for ensuring that risks associated with an asset are identified, assessed, treated, and monitored. The Risk Owner is typically the same as the Asset Owner for technology assets.

### 7.2 Asset Ownership Register

| Asset ID | Asset Name | Asset Owner | Owner's Title | Asset Custodian | Custodian's Title | Risk Owner | Delegated Authority |
|---|---|---|---|---|---|---|---|
| ASSET-001 | [Asset Name] | [Name] | [Title, e.g., Head of Digital Banking] | [Name] | [Title, e.g., IT Infrastructure Manager] | [Name] | [Any delegated authority] |
| ASSET-002 | [Asset Name] | [Name] | [Title] | [Name] | [Title] | [Name] | [Delegation] |
| ASSET-003 | [Asset Name] | [Name] | [Title] | [Name] | [Title] | [Name] | [Delegation] |
| ASSET-004 | [Asset Name] | [Name] | [Title] | [Name] | [Title] | [Name] | [Delegation] |
| ASSET-005 | [Asset Name] | [Name] | [Title] | [Name] | [Title] | [Name] | [Delegation] |
| DATA-001 | [Data Asset Name] | [Name] | [Title] | [Name] | [Title] | [Name] | [Delegation] |
| DATA-002 | [Data Asset Name] | [Name] | [Title] | [Name] | [Title] | [Name] | [Delegation] |

### 7.3 Risk Ownership by Category

*BNM RMiT requires that every identified risk has a named risk owner who is responsible for overseeing its treatment.*

| Risk Category | Risk Owner | Title | Escalation Path |
|---|---|---|---|
| Strategic Risk | [Name] | [Title, e.g., Chief Technology Officer] | Technology Risk Committee |
| Technology Infrastructure Risk | [Name] | [Title, e.g., Head of IT Infrastructure] | Head of Technology Risk |
| Cybersecurity Risk | [Name] | [Title, e.g., Chief Information Security Officer] | Head of Technology Risk |
| Operational Risk | [Name] | [Title, e.g., Head of IT Operations] | Head of Technology Risk |
| Data and Privacy Risk | [Name] | [Title, e.g., Data Protection Officer] | Head of Technology Risk / Legal |
| Compliance and Regulatory Risk | [Name] | [Title, e.g., Head of Compliance] | Risk Management Committee |
| Third-Party / Vendor Risk | [Name] | [Title, e.g., Head of Vendor Management] | Head of Technology Risk |
| Business Continuity Risk | [Name] | [Title, e.g., Head of Business Continuity] | Head of Technology Risk |

### 7.4 Ownership Gaps and Actions

*Document any identified gaps in ownership assignment and the actions being taken to resolve them.*

| Asset / Risk ID | Gap Description | Interim Owner | Target Resolution Date | Status |
|---|---|---|---|---|
| [ID] | [Description of gap — e.g., Asset Owner vacancy due to staff departure] | [Interim owner name] | [Date] | [Open / In Progress / Resolved] |
| [ID] | [Gap] | [Interim] | [Date] | [Status] |

---

## 8. Risk Identification

*This section documents all technology risks identified for [Project Name]. Risk identification has been conducted through a combination of structured threat modelling, document review, stakeholder interviews, and benchmarking against known risk patterns for similar projects.*

### 8.1 Threat Landscape

*Describe the key threat sources and threat events that are relevant to this project. Understanding the threat landscape is the foundation for credible risk identification.*

#### 8.1.1 Internal Threat Sources

| Threat Source | Description | Relevance to Project |
|---|---|---|
| Malicious Insider | Authorised personnel with malicious intent | [Describe relevance] |
| Negligent Employee | Staff making unintentional errors | [Describe relevance] |
| Privileged User Abuse | Misuse of elevated system access | [Describe relevance] |
| Development / DevOps Errors | Coding or configuration errors introduced during development | [Describe relevance] |
| [Other Internal Threat] | [Description] | [Relevance] |

#### 8.1.2 External Threat Sources

| Threat Source | Description | Relevance to Project |
|---|---|---|
| Cybercriminals | Financially motivated attackers targeting financial institutions | [Describe relevance] |
| Nation-State Actors | Sophisticated state-sponsored threat actors | [Describe relevance] |
| Hacktivists | Ideologically motivated attackers | [Describe relevance] |
| Supply Chain Attackers | Threat actors compromising third-party software or services | [Describe relevance] |
| [Other External Threat] | [Description] | [Relevance] |

#### 8.1.3 Environmental and Systemic Threats

| Threat Source | Description | Relevance to Project |
|---|---|---|
| Natural Disasters | Flooding, earthquake, fire affecting data centre or office | [Describe relevance] |
| Infrastructure Failures | Power outages, network outages, hardware failures | [Describe relevance] |
| Third-Party Dependency Failure | Cloud provider, ISP, or key vendor outage | [Describe relevance] |
| Regulatory Change | New or amended regulations requiring system changes | [Describe relevance] |

### 8.2 Risk Register

*The Risk Register is the master record of all identified risks. Each risk is uniquely identified, described, and linked to the relevant asset(s) and threat source(s). Likelihood and impact ratings in this section reflect the **inherent risk** (before controls are applied).*

| Risk ID | Risk Title | Risk Description | Threat Source | Vulnerability | Affected Asset(s) | Risk Category | Likelihood (Inherent) | Impact (Inherent) | Inherent Risk Rating |
|---|---|---|---|---|---|---|---|---|---|
| RISK-001 | [Risk Title] | [Detailed description of the risk scenario — what could go wrong, how, and what the consequence would be] | [Threat source] | [Vulnerability being exploited] | [ASSET-XXX, DATA-XXX] | [Category] | [1-5] | [1-5] | [Low/Med/High/Critical] |
| RISK-002 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-003 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-004 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-005 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-006 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-007 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-008 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-009 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-010 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-011 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-012 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-013 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-014 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |
| RISK-015 | [Risk Title] | [Description] | [Source] | [Vulnerability] | [Assets] | [Category] | [#] | [#] | [Rating] |

*Continue adding rows as required. All identified risks must be captured.*

---

## 9. Risk Analysis and Evaluation

### 9.1 Control Assessment

*For each risk identified in Section 8, this section evaluates the existing controls in place and their effectiveness. This analysis supports the derivation of the residual risk rating.*

| Control ID | Control Name | Control Description | Control Type | Related Risk(s) | Control Effectiveness | Control Gaps | Evidence |
|---|---|---|---|---|---|---|---|
| CTRL-001 | [Control Name] | [Description of the control and how it mitigates the risk] | [Preventive / Detective / Corrective / Deterrent] | [RISK-XXX, RISK-XXX] | [Effective / Partially Effective / Ineffective] | [Description of any gaps or weaknesses in the control] | [Reference to evidence — e.g., policy document, test result, audit report] |
| CTRL-002 | [Control Name] | [Description] | [Type] | [Risks] | [Effectiveness] | [Gaps] | [Evidence] |
| CTRL-003 | [Control Name] | [Description] | [Type] | [Risks] | [Effectiveness] | [Gaps] | [Evidence] |
| CTRL-004 | [Control Name] | [Description] | [Type] | [Risks] | [Effectiveness] | [Gaps] | [Evidence] |
| CTRL-005 | [Control Name] | [Description] | [Type] | [Risks] | [Effectiveness] | [Gaps] | [Evidence] |
| CTRL-006 | [Control Name] | [Description] | [Type] | [Risks] | [Effectiveness] | [Gaps] | [Evidence] |
| CTRL-007 | [Control Name] | [Description] | [Type] | [Risks] | [Effectiveness] | [Gaps] | [Evidence] |
| CTRL-008 | [Control Name] | [Description] | [Type] | [Risks] | [Effectiveness] | [Gaps] | [Evidence] |

### 9.2 Detailed Risk Analysis

*This section provides a detailed analysis of each risk, documenting the control environment and deriving the residual risk rating. Complete one sub-section per significant risk (Critical and High rated risks must have full detailed analysis).*

#### 9.2.1 RISK-001 — [Risk Title]

| Field | Details |
|---|---|
| **Risk ID** | RISK-001 |
| **Risk Title** | [Risk Title] |
| **Risk Category** | [Category] |
| **Affected Assets** | [ASSET-XXX, DATA-XXX] |
| **Risk Owner** | [Name, Title] |
| **Threat Source** | [Threat source] |
| **Vulnerability** | [Vulnerability description] |
| **Risk Scenario** | [Detailed description of how the risk could materialise and what the consequences would be] |

**Inherent Risk Rating:**

| Factor | Rating | Score |
|---|---|---|
| Likelihood (Inherent) | [Almost Certain / Likely / Possible / Unlikely / Rare] | [5/4/3/2/1] |
| Impact | [Catastrophic / Major / Moderate / Minor / Insignificant] | [5/4/3/2/1] |
| **Inherent Risk Score** | | **[Score]** |
| **Inherent Risk Rating** | | **[Critical / High / Medium / Low]** |

**Existing Controls:**

| Control ID | Control Description | Control Effectiveness |
|---|---|---|
| CTRL-XXX | [Description] | [Effective / Partially Effective / Ineffective] |
| CTRL-XXX | [Description] | [Effectiveness] |

**Residual Risk Rating:**

| Factor | Rating | Score |
|---|---|---|
| Likelihood (Residual) | [Rating after controls] | [Score] |
| Impact (Residual) | [Impact after controls] | [Score] |
| **Residual Risk Score** | | **[Score]** |
| **Residual Risk Rating** | | **[Critical / High / Medium / Low]** |

**Risk Assessment Narrative:**

[Provide a narrative explanation of the risk, why the inherent rating was assigned, how existing controls reduce the risk, and why the residual rating was determined. This narrative is important for audit trail purposes.]

---

*Repeat Section 9.2.x for each significant risk. All Critical and High rated risks require a detailed sub-section.*

---

### 9.3 Residual Risk Summary

*Summarise the residual risk ratings for all identified risks following consideration of existing controls.*

| Risk ID | Risk Title | Category | Inherent Rating | Control Effectiveness | Residual Rating | Risk Owner |
|---|---|---|---|---|---|---|
| RISK-001 | [Title] | [Category] | [Rating] | [Effective/Partial/Ineffective] | [Rating] | [Name] |
| RISK-002 | [Title] | [Category] | [Rating] | [Effectiveness] | [Rating] | [Name] |
| RISK-003 | [Title] | [Category] | [Rating] | [Effectiveness] | [Rating] | [Name] |
| RISK-004 | [Title] | [Category] | [Rating] | [Effectiveness] | [Rating] | [Name] |
| RISK-005 | [Title] | [Category] | [Rating] | [Effectiveness] | [Rating] | [Name] |
| RISK-006 | [Title] | [Category] | [Rating] | [Effectiveness] | [Rating] | [Name] |
| RISK-007 | [Title] | [Category] | [Rating] | [Effectiveness] | [Rating] | [Name] |
| RISK-008 | [Title] | [Category] | [Rating] | [Effectiveness] | [Rating] | [Name] |
| RISK-009 | [Title] | [Category] | [Rating] | [Effectiveness] | [Rating] | [Name] |
| RISK-010 | [Title] | [Category] | [Rating] | [Effectiveness] | [Rating] | [Name] |

---

## 10. Risk Treatment and Controls

*This section documents the agreed risk treatment approach and action plan for each identified risk. Risk treatment must be commensurate with the risk rating and consistent with [Organisation Name]'s risk appetite.*

### 10.1 Risk Treatment Options

*For each risk, one or more of the following treatment options has been selected:*

| Treatment Option | Definition | When Applicable |
|---|---|---|
| **Avoid** | Eliminate the risk by not performing the activity or removing the risk source | Risks that exceed risk appetite and cannot be adequately mitigated |
| **Mitigate (Reduce)** | Implement additional controls to reduce likelihood and/or impact | Risks within risk appetite range where additional controls are feasible |
| **Transfer** | Transfer the risk to a third party (e.g., insurance, contractual transfer) | Risks where financial impact can be transferred more efficiently |
| **Accept** | Acknowledge and accept the residual risk without further treatment | Residual risks within risk appetite, where treatment cost exceeds benefit |

### 10.2 Risk Treatment Plan

*Document the specific actions, controls, and timelines for treating each identified risk. Every Critical and High risk must have a documented treatment plan with named owners and deadlines.*

| Risk ID | Risk Title | Residual Rating | Treatment Option | Treatment Action | Additional Controls Required | Responsible Owner | Target Completion Date | Priority | Status |
|---|---|---|---|---|---|---|---|---|---|
| RISK-001 | [Title] | [Rating] | [Avoid/Mitigate/Transfer/Accept] | [Specific action to be taken] | [New controls to be implemented] | [Name, Title] | [DD Month YYYY] | [1/2/3] | [Not Started / In Progress / Completed] |
| RISK-002 | [Title] | [Rating] | [Treatment] | [Action] | [Controls] | [Owner] | [Date] | [Priority] | [Status] |
| RISK-003 | [Title] | [Rating] | [Treatment] | [Action] | [Controls] | [Owner] | [Date] | [Priority] | [Status] |
| RISK-004 | [Title] | [Rating] | [Treatment] | [Action] | [Controls] | [Owner] | [Date] | [Priority] | [Status] |
| RISK-005 | [Title] | [Rating] | [Treatment] | [Action] | [Controls] | [Owner] | [Date] | [Priority] | [Status] |
| RISK-006 | [Title] | [Rating] | [Treatment] | [Action] | [Controls] | [Owner] | [Date] | [Priority] | [Status] |
| RISK-007 | [Title] | [Rating] | [Treatment] | [Action] | [Controls] | [Owner] | [Date] | [Priority] | [Status] |
| RISK-008 | [Title] | [Rating] | [Treatment] | [Action] | [Controls] | [Owner] | [Date] | [Priority] | [Status] |

### 10.3 Key Risk Indicators (KRIs)

*Define KRIs for significant risks to enable ongoing monitoring. KRIs are measurable indicators that signal a change in the risk environment. BNM RMiT Section 10.2 requires institutions to establish and monitor KRIs for technology risks.*

| KRI ID | KRI Name | Related Risk(s) | KRI Description | Measurement Method | Frequency | Green Threshold | Amber Threshold | Red Threshold | KRI Owner |
|---|---|---|---|---|---|---|---|---|---|
| KRI-001 | [KRI Name] | [RISK-XXX] | [Description of what this KRI measures and why it is a leading indicator of risk] | [How the KRI is measured — automated metric / manual reporting] | [Daily / Weekly / Monthly] | [Green threshold value] | [Amber threshold value] | [Red threshold value] | [Name] |
| KRI-002 | [KRI Name] | [RISK-XXX] | [Description] | [Method] | [Frequency] | [Green] | [Amber] | [Red] | [Owner] |
| KRI-003 | [KRI Name] | [RISK-XXX] | [Description] | [Method] | [Frequency] | [Green] | [Amber] | [Red] | [Owner] |
| KRI-004 | [KRI Name] | [RISK-XXX] | [Description] | [Method] | [Frequency] | [Green] | [Amber] | [Red] | [Owner] |
| KRI-005 | [KRI Name] | [RISK-XXX] | [Description] | [Method] | [Frequency] | [Green] | [Amber] | [Red] | [Owner] |

### 10.4 Key Control Indicators (KCIs)

*Define KCIs to monitor the effectiveness of key controls. KCIs provide evidence that controls are operating as intended.*

| KCI ID | KCI Name | Related Control | KCI Description | Measurement Method | Frequency | Green Threshold | Amber Threshold | Red Threshold | KCI Owner |
|---|---|---|---|---|---|---|---|---|---|
| KCI-001 | [KCI Name] | [CTRL-XXX] | [Description of what this KCI measures about control effectiveness] | [How measured] | [Frequency] | [Green] | [Amber] | [Red] | [Owner] |
| KCI-002 | [KCI Name] | [CTRL-XXX] | [Description] | [Method] | [Frequency] | [Green] | [Amber] | [Red] | [Owner] |
| KCI-003 | [KCI Name] | [CTRL-XXX] | [Description] | [Method] | [Frequency] | [Green] | [Amber] | [Red] | [Owner] |
| KCI-004 | [KCI Name] | [CTRL-XXX] | [Description] | [Method] | [Frequency] | [Green] | [Amber] | [Red] | [Owner] |

---

## 11. Status and Lifecycle Stage

*This section documents the current status of the project and each associated asset within its technology lifecycle. Lifecycle-aware risk assessment is a requirement of BNM RMiT, which recognises that risk profiles change significantly across the technology lifecycle.*

### 11.1 Project Lifecycle Status

*Document the current stage of the project lifecycle and the risk implications of each stage.*

**Current Lifecycle Stage:** [Initiation / Planning / Design / Development / Testing / Pre-Production / Production / Enhancement / Decommission]

| Lifecycle Stage | Description | Key Risk Considerations | Applicable to This Project |
|---|---|---|---|
| **Initiation** | Project is being scoped and business case developed | Strategic alignment risk; incomplete requirements | [Yes / No / Completed] |
| **Planning** | Project plan, resource allocation, and architecture designed | Design flaws; resource constraints; dependency risks | [Yes / No / Completed] |
| **Design** | Detailed technical design completed | Security design gaps; architectural weaknesses | [Yes / No / Completed] |
| **Development** | Software and configurations being built | Insecure code; deviations from design; testing gaps | [Yes / No / In Progress] |
| **Testing** | System, integration, user acceptance, and security testing | Inadequate test coverage; unresolved defects | [Yes / No / In Progress] |
| **Pre-Production** | Final readiness checks before go-live | Go-live risks; rollback inadequacy; training gaps | [Yes / No / Upcoming] |
| **Production** | System live and operational | Operational stability; ongoing cyber risk; performance | [Yes / No / Upcoming] |
| **Enhancement** | Ongoing changes and improvements to live system | Change-induced risk; regression; accumulation of technical debt | [Yes / No / N/A] |
| **Decommission** | System being retired | Data disposal risk; dependency failures; knowledge loss | [Yes / No / N/A] |

### 11.2 Asset Lifecycle Status

*Track the lifecycle stage of each technology asset. Assets at end-of-life or approaching end-of-support represent elevated risk and must be explicitly documented.*

| Asset ID | Asset Name | Current Lifecycle Stage | Vendor Support Status | End-of-Life Date | End-of-Support Date | Lifecycle Risk | Action Required |
|---|---|---|---|---|---|---|---|
| ASSET-001 | [Name] | [Active / Aging / End-of-Life / Decommissioning] | [Fully Supported / Extended Support / End of Support / Unsupported] | [Date or N/A] | [Date or N/A] | [Risk description] | [Action or None] |
| ASSET-002 | [Name] | [Stage] | [Support Status] | [Date] | [Date] | [Risk] | [Action] |
| ASSET-003 | [Name] | [Stage] | [Support Status] | [Date] | [Date] | [Risk] | [Action] |
| ASSET-004 | [Name] | [Stage] | [Support Status] | [Date] | [Date] | [Risk] | [Action] |
| ASSET-005 | [Name] | [Stage] | [Support Status] | [Date] | [Date] | [Risk] | [Action] |

### 11.3 Risk Status Tracking

*Track the current status of each identified risk item. This view provides a management dashboard of open, in-progress, and closed risk items.*

| Risk ID | Risk Title | Risk Rating | Treatment Status | Open Since | Target Closure Date | Days Open | Overdue? | Escalation Status |
|---|---|---|---|---|---|---|---|---|
| RISK-001 | [Title] | [Critical/High/Med/Low] | [Open / In Treatment / Treated / Accepted / Closed] | [Date] | [Date] | [#] | [Yes / No] | [Escalated / Not Escalated] |
| RISK-002 | [Title] | [Rating] | [Status] | [Date] | [Date] | [#] | [Yes/No] | [Status] |
| RISK-003 | [Title] | [Rating] | [Status] | [Date] | [Date] | [#] | [Yes/No] | [Status] |
| RISK-004 | [Title] | [Rating] | [Status] | [Date] | [Date] | [#] | [Yes/No] | [Status] |
| RISK-005 | [Title] | [Rating] | [Status] | [Date] | [Date] | [#] | [Yes/No] | [Status] |

### 11.4 Project Milestone Risk Checkpoints

*BNM RMiT requires that risk assessments be integrated into project governance. Define the risk assessment checkpoints aligned to project milestones.*

| Milestone | Description | Scheduled Date | Risk Assessment Type | Completed | Assessment Reference |
|---|---|---|---|---|---|
| Project Kick-off | Project formally initiated | [Date] | Initial Risk Assessment | [Yes / No] | [Reference] |
| Design Completion | Technical design signed off | [Date] | Design Review | [Yes / No] | [Reference] |
| Development Completion | Code freeze and build complete | [Date] | Pre-UAT Risk Review | [Yes / No] | [Reference] |
| Security Testing Completion | Penetration test and VAPT completed | [Date] | Security Risk Review | [Yes / No] | [Reference] |
| UAT Completion | User acceptance testing signed off | [Date] | Pre-Production Review | [Yes / No] | [Reference] |
| Go-Live Approval | Final approval to deploy to production | [Date] | Go/No-Go Risk Assessment | [Yes / No] | [Reference] |
| Post-Implementation Review | [30/60/90]-day post go-live review | [Date] | Post-Implementation Risk Review | [Yes / No] | [Reference] |
| Quarterly Review | Scheduled quarterly risk review (BNM RMiT 10.2) | [Date] | Periodic Risk Review | [Yes / No] | [Reference] |

---

## 12. Last Review and Monitoring

*This section documents the review history of this risk assessment and the ongoing monitoring arrangements established to comply with BNM RMiT Section 10.2.*

### 12.1 Assessment and Review History

*Maintain a complete record of all formal reviews of this risk assessment. This record is essential for demonstrating compliance with BNM RMiT's continuous monitoring requirements.*

| Review Cycle | Review Date | Review Type | Conducted By | Key Changes / Findings | Overall Risk Rating | Next Review Date | Approved By |
|---|---|---|---|---|---|---|---|
| Initial Assessment | [DD Month YYYY] | Full Assessment | [Name, Title] | Initial assessment — all risks newly identified | [Rating] | [Date] | [Name, Title] |
| Q[X] [YYYY] Review | [DD Month YYYY] | Quarterly Review | [Name, Title] | [Summary of changes, new risks, closed risks] | [Rating] | [Date] | [Name, Title] |
| Q[X] [YYYY] Review | [DD Month YYYY] | Quarterly Review | [Name, Title] | [Changes] | [Rating] | [Date] | [Name, Title] |
| Ad-hoc Review | [DD Month YYYY] | Ad-hoc (Trigger: [Trigger Event]) | [Name, Title] | [Reason for and findings of ad-hoc review] | [Rating] | [Date] | [Name, Title] |

### 12.2 Monitoring Framework

*Define the ongoing monitoring arrangements for this project's risk assessment in accordance with BNM RMiT Section 10.2.*

| Monitoring Activity | Frequency | Responsible Party | Reporting To | Method / Tool | Last Performed | Next Due |
|---|---|---|---|---|---|---|
| KRI Monitoring | [Daily / Weekly / Monthly] | [Name, Title] | Head of Technology Risk | [GRC Tool / Dashboard / Manual Report] | [Date] | [Date] |
| KCI Monitoring | [Weekly / Monthly] | [Name, Title] | Head of Technology Risk | [Tool / Method] | [Date] | [Date] |
| Risk Register Review | Quarterly | Head of Technology Risk | Technology Risk Committee | [Method] | [Date] | [Date] |
| Control Effectiveness Testing | [Quarterly / Semi-Annual] | [Name, Title] | Head of Technology Risk | [Testing method] | [Date] | [Date] |
| Incident and Near-Miss Review | Monthly | [Name, Title] | Head of Technology Risk | Incident Register | [Date] | [Date] |
| Vulnerability Scanning | [Weekly / Monthly] | [Name, Title] | CISO | [Scanning tool] | [Date] | [Date] |
| Penetration Testing | Annual | [Name, Title] | CISO | Third-party VAPT | [Date] | [Date] |
| Vendor Risk Review | [Quarterly / Annual] | [Name, Title] | Head of Vendor Management | Vendor scorecard | [Date] | [Date] |
| BCP / DR Testing | Annual | [Name, Title] | Head of Business Continuity | Tabletop / Full failover test | [Date] | [Date] |

### 12.3 Trigger Events for Immediate Review

*In addition to scheduled reviews, this risk assessment must be immediately reviewed if any of the following trigger events occur:*

| Trigger Event | Notification Path | Required Action |
|---|---|---|
| Significant cybersecurity incident affecting project assets | CISO → Head of Technology Risk | Immediate ad-hoc review; report to Technology Risk Committee within 24 hours |
| Material change in project scope, technology, or architecture | Project Manager → Head of Technology Risk | Ad-hoc review within 5 business days |
| New BNM regulatory guidance or circular affecting the project | Head of Compliance → Head of Technology Risk | Review within 10 business days |
| Breach of a KRI Red threshold | KRI Owner → Head of Technology Risk | Immediate escalation; review within 3 business days |
| Third-party vendor incident, failure, or contract termination | Head of Vendor Management → Head of Technology Risk | Ad-hoc review within 5 business days |
| Significant change in the threat landscape | CISO → Head of Technology Risk | Ad-hoc review within 10 business days |
| Discovery of a high/critical vulnerability in project components | CISO → Head of Technology Risk | Immediate risk assessment update |
| Any event assessed as having Critical risk impact | Risk Owner → Head of Technology Risk | Immediate escalation to CTO and Technology Risk Committee |

### 12.4 Escalation Framework

*Define the escalation thresholds and reporting lines for this project's risk items.*

| Escalation Level | Trigger | Notification Recipients | Response Timeline |
|---|---|---|---|
| Level 1 — Risk Owner | Amber KRI breach or new Medium risk identified | Risk Owner, Project Manager | Within 5 business days |
| Level 2 — Head of Technology Risk | Red KRI breach or new High risk identified | Head of Technology Risk, CTO | Within 2 business days |
| Level 3 — Technology Risk Committee | New Critical risk or unresolved High risk breach of treatment deadline | Technology Risk Committee, CRO | Within 1 business day |
| Level 4 — Board Risk Committee | Critical risk requiring Board awareness or material regulatory concern | Board Risk Committee, CEO, BNM (if required) | Immediately / at next scheduled meeting |

---

## 13. Residual Risk and Risk Acceptance

### 13.1 Residual Risk Statement

*Following the application of existing and planned controls, the following residual risk posture is assessed for [Project Name] as at [Assessment Date].*

[Provide a narrative summary of the overall residual risk posture, the key residual risks that remain, and the justification for proceeding with the project (or the conditions under which the project may proceed). This section is critical for the risk acceptance decision by the Head of Technology Risk.]

**Overall Residual Risk Rating:** [Critical / High / Medium / Low]

**Justification:** [Explain why the overall residual risk rating has been assigned and whether it is within [Organisation Name]'s risk appetite for technology projects.]

### 13.2 Risks Requiring Formal Acceptance

*The following risks have residual ratings that require formal management acceptance. Risk acceptance must be documented with the name and title of the accepting authority, the justification, and the conditions of acceptance.*

| Risk ID | Risk Title | Residual Rating | Acceptance Rationale | Conditions of Acceptance | Accepted By | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|---|
| RISK-XXX | [Title] | [High / Critical] | [Explanation of why the risk is being accepted rather than further mitigated] | [Any conditions, compensating controls, or time limits on acceptance] | [Name, Title] | [Date] | [Date] |
| RISK-XXX | [Title] | [Rating] | [Rationale] | [Conditions] | [Name] | [Date] | [Date] |
| RISK-XXX | [Title] | [Rating] | [Rationale] | [Conditions] | [Name] | [Date] | [Date] |

### 13.3 Go/No-Go Recommendation

*Based on the risk assessment findings, the following recommendation is made regarding the project's progression.*

**Recommendation:** [APPROVED TO PROCEED / APPROVED TO PROCEED WITH CONDITIONS / HOLD PENDING RISK TREATMENT / NOT APPROVED]

**Conditions (if applicable):**
1. [Condition 1 — specific risk treatment action that must be completed before or after go-live]
2. [Condition 2]
3. [Condition 3]

**Recommended By:** [Name], Head of Technology Risk
**Date of Recommendation:** [DD Month YYYY]

---

## 14. Roles and Responsibilities

*This section defines the roles and responsibilities of all parties involved in the risk assessment, ongoing monitoring, and treatment activities for [Project Name].*

### 14.1 Governance Structure

*Describe the governance structure through which technology risk for this project is overseen and managed.*

| Governance Body | Composition | Meeting Frequency | Technology Risk Responsibilities |
|---|---|---|---|
| Board Risk Committee | Board of Directors members | [Frequency] | Oversight of enterprise risk appetite; approval of material risk acceptances |
| Risk Management Committee | CRO, CTO, CFO, COO, Head of Compliance, Head of Technology Risk | [Frequency] | Oversight of technology risk posture; escalation from Technology Risk Committee |
| Technology Risk Committee | Head of Technology Risk, CISO, CTO, Head of IT Operations, DPO | [Frequency] | Oversight of technology risk register; approval of risk treatment plans; monitoring of KRIs |
| Project Steering Committee | Project Sponsor, Project Manager, Business Owner, Technology Owner | [Frequency] | Project-level risk oversight; milestone approvals; resource allocation for risk treatment |
| Project Risk Working Group | Risk Assessment Lead, Project Manager, Security Lead, Subject Matter Experts | [Frequency] | Operational risk identification, analysis, and treatment tracking |

### 14.2 RACI Matrix

*The following RACI matrix defines accountability for key risk management activities for [Project Name]. **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

| Activity | Board Risk Committee | Risk Mgmt Committee | Technology Risk Committee | Head of Technology Risk | CISO | CTO | Project Sponsor | Project Manager | Technology Owner | Risk Assessment Lead | Asset Owner | Asset Custodian |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Risk Assessment — Initial** | I | I | A | A | C | C | I | C | C | R | C | C |
| **Risk Assessment — Quarterly Review** | I | I | A | A | C | C | I | C | C | R | C | C |
| **Risk Identification** | — | — | C | A | C | C | I | C | C | R | C | C |
| **Risk Analysis and Evaluation** | — | — | C | A | C | C | I | C | C | R | C | C |
| **Risk Treatment — Definition** | — | — | A | A | C | C | C | C | C | R | R | C |
| **Risk Treatment — Implementation** | — | — | I | I | C | C | A | R | R | C | R | R |
| **Risk Acceptance** | A | A | A | R | C | C | C | I | I | C | — | — |
| **KRI / KCI Monitoring** | I | I | I | A | C | C | I | I | C | R | C | R |
| **Escalation — Level 1** | — | — | — | I | C | C | A | R | C | C | C | — |
| **Escalation — Level 2** | — | — | I | A | C | C | I | I | C | R | — | — |
| **Escalation — Level 3** | I | A | R | R | C | C | I | I | — | C | — | — |
| **Escalation — Level 4** | R | C | C | C | I | I | I | — | — | — | — | — |
| **Asset Ownership** | — | — | — | I | C | C | — | — | C | C | A | R |
| **Control Implementation** | — | — | I | I | A | A | I | C | R | C | R | R |
| **Control Effectiveness Testing** | — | — | I | A | R | C | I | I | C | C | C | C |
| **Regulatory Reporting (BNM)** | A | A | C | R | C | C | I | I | — | C | — | — |
| **Document Maintenance** | — | — | I | A | C | C | I | I | C | R | C | — |

### 14.3 Individual Responsibilities

| Role | Individual | Key Responsibilities |
|---|---|---|
| **Head of Technology Risk** | [Name] | Ultimate accountability for the technology risk assessment and ongoing monitoring of [Project Name]. Approves the risk assessment report, risk treatment plans, and risk acceptances. Reports to the Technology Risk Committee and escalates material risks as required by BNM RMiT. |
| **Chief Information Security Officer (CISO)** | [Name] | Responsible for cybersecurity risk identification and control recommendations. Oversees security testing, vulnerability management, and KRI/KCI monitoring for cybersecurity risks. |
| **Chief Technology Officer (CTO)** | [Name] | Accountable for technology architecture decisions and their risk implications. Responsible for ensuring technology resources are allocated to implement required risk treatments. |
| **Project Sponsor** | [Name] | Accountable for overall project delivery and business outcomes. Responsible for ensuring the project team allocates sufficient resources for risk treatment activities. |
| **Risk Assessment Lead** | [Name] | Responsible for conducting the independent risk assessment, maintaining the risk register, and producing quarterly review reports. Reports findings to the Head of Technology Risk. |
| **Technology Owner** | [Name] | Responsible for the technical accuracy of asset identification and architecture documentation. Implements technology controls as directed by the risk treatment plan. |
| **Data Protection Officer (DPO)** | [Name] | Responsible for identifying and assessing data privacy risks. Ensures PDPA compliance obligations are incorporated into risk treatment actions. |
| **Asset Owners** | [Various — per Section 7.2] | Accountable for the appropriate classification, protection, and lifecycle management of assigned assets. Approves access and usage. |
| **Asset Custodians** | [Various — per Section 7.2] | Responsible for day-to-day operational management and technical protection of assigned assets. Implements controls as directed by Asset Owners and the risk treatment plan. |

---

## 15. Review and Approval

### 15.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [DD Month YYYY] | [Name, Title] | [Name, Title] | Initial draft for internal review |
| 0.2 | [DD Month YYYY] | [Name, Title] | [Name, Title] | Revised following stakeholder review comments |
| 0.3 | [DD Month YYYY] | [Name, Title] | [Name, Title] | Incorporated security team feedback; updated risk register |
| 1.0 | [DD Month YYYY] | [Name, Title] | [Name, Title] | Final version approved for issuance |
| [Version] | [Date] | [Author] | [Reviewer] | [Description of changes] |

### 15.2 Distribution List

*Document all parties to whom this report has been distributed. Given the Confidential classification, distribution must be controlled and recorded.*

| Name | Title | Organisation / Unit | Distribution Date | Distribution Method |
|---|---|---|---|---|
| [Name] | Head of Technology Risk | [Organisation Name] | [Date] | [Secure email / GRC platform] |
| [Name] | Chief Technology Officer | [Organisation Name] | [Date] | [Method] |
| [Name] | Chief Information Security Officer | [Organisation Name] | [Date] | [Method] |
| [Name] | Chairman, Technology Risk Committee | [Organisation Name] | [Date] | [Method] |
| [Name] | Project Sponsor | [Organisation Name] | [Date] | [Method] |
| [Name] | [Title] | [Organisation] | [Date] | [Method] |

### 15.3 Approval Sign-Off

*The following individuals have reviewed and approved this Project Risk Assessment Report. By signing, approvers confirm that the document accurately reflects the risk assessment findings, that the risk treatment plan is appropriate and resourced, and that the document meets [Organisation Name]'s standards for regulatory compliance.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** — Risk Assessment Lead | [Name] | _________________________ | [DD Month YYYY] |
| **Reviewed By** — CISO | [Name] | _________________________ | [DD Month YYYY] |
| **Reviewed By** — CTO | [Name] | _________________________ | [DD Month YYYY] |
| **Approved By** — Head of Technology Risk | [Name] | _________________________ | [DD Month YYYY] |
| **Endorsed By** — Project Sponsor | [Name] | _________________________ | [DD Month YYYY] |
| **Noted By** — Chairman, Technology Risk Committee | [Name] | _________________________ | [DD Month YYYY] |

> **Note:** This document requires formal approval from the Head of Technology Risk before being considered final. Digital signatures are acceptable provided they comply with [Organisation Name]'s Digital Signature Policy.

---

## 16. References

### 16.1 Regulatory References

The following regulatory instruments and policy documents are directly referenced in this risk assessment:

| Reference | Title | Issuing Authority | Date / Version | Relevant Clauses |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Current version date] | **10.1, 10.2** (primary); also 7.1, 7.2, 8.1, 8.2, 9.1 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 (as amended) | Section 5–8 (Data Principles); Section 10 (Security Principle) |
| FSA 2013 / IFSA 2013 | Financial Services Act / Islamic Financial Services Act | Parliament of Malaysia | 2013 | [Relevant sections] |
| BNM/RH/PD 028-2 | Policy on Management of Customer Information and Permitted Disclosures | Bank Negara Malaysia | [Version date] | [Relevant sections] |
| NACSA CSF | Cybersecurity Framework for Critical National Information Infrastructure | National Cyber Security Agency | [Version date] | [Relevant sections] |
| [Other Regulation] | [Title] | [Issuer] | [Date] | [Sections] |

### 16.2 Standards References

| Standard | Title | Issuing Body | Version | Application |
|---|---|---|---|---|
| ISO/IEC 27001 | Information Security Management Systems — Requirements | ISO/IEC | 2022 | Overall ISMS framework |
| ISO/IEC 27005 | Information Security Risk Management | ISO/IEC | 2022 | Risk assessment methodology |
| ISO/IEC 27002 | Information Security Controls | ISO/IEC | 2022 | Control selection guidance |
| NIST SP 800-30 | Guide for Conducting Risk Assessments | NIST | Rev. 1 | Risk assessment methodology |
| NIST CSF | Cybersecurity Framework | NIST | 2.0 | Cybersecurity control alignment |
| ISO 22301 | Business Continuity Management Systems | ISO | 2019 | BCP/DR risk assessment |
| [Other Standard] | [Title] | [Body] | [Version] | [Application] |

### 16.3 Internal Document References

| Document Reference | Document Title | Owner | Version | Location |
|---|---|---|---|---|
| [DOC-001] | Technology Risk Management Framework | Head of Technology Risk | [Version] | [Document Repository Location] |
| [DOC-002] | Information Security Policy | CISO | [Version] | [Location] |
| [DOC-003] | Data Classification and Handling Policy | DPO | [Version] | [Location] |
| [DOC-004] | Vendor and Third-Party Risk Management Policy | Head of Technology Risk | [Version] | [Location] |
| [DOC-005] | Business Continuity Management Policy | Head of Business Continuity | [Version] | [Location] |
| [DOC-006] | Change Management Policy | Head of IT Operations | [Version] | [Location] |
| [DOC-007] | [Project Name] — Business Requirements Document (BRD) | Project Manager | [Version] | [Location] |
| [DOC-008] | [Project Name] — Technical Design Document (TDD) | Technology Owner | [Version] | [Location] |
| [DOC-009] | [Project Name] — Security Architecture Review | CISO | [Version] | [Location] |
| [DOC-010] | [Project Name] — Penetration Test Report | [VAPT Provider] | [Version] | [Location] |

---

## 17. Appendices

### Appendix A — System Architecture Diagram

*Attach or embed the high-level system architecture diagram for [Project Name]. The diagram should clearly illustrate all components, integration points, data flows, and trust boundaries. Architecture diagrams should be version-controlled and referenced by the same version number as this document.*

**Diagram Title:** [Project Name] — System Architecture (v[Version])
**Diagram Author:** [Name, Title]
**Diagram Date:** [DD Month YYYY]

> [Insert system architecture diagram here, or reference the file location: [Path/to/Architecture_Diagram_v1.0.pdf]]

**Architecture Notes:**

- [Note 1 — e.g., All data flows between [System A] and [System B] are encrypted using TLS 1.3]
- [Note 2 — e.g., The production environment is isolated from development and test environments by a network firewall]
- [Note 3 — Additional notes on architecture decisions relevant to risk assessment]

---

### Appendix B — Data Flow Diagram

*Attach or embed the data flow diagram showing how sensitive data (including personal data under PDPA and financial data) moves through the project systems. This is required to support data privacy risk assessment and PDPA compliance.*

**Diagram Title:** [Project Name] — Data Flow Diagram (v[Version])
**Diagram Author:** [Name, Title]
**Diagram Date:** [DD Month YYYY]

> [Insert data flow diagram here, or reference the file location: [Path/to/Data_Flow_Diagram_v1.0.pdf]]

**Data Flow Notes:**

- [Note 1 — e.g., Personal data collected at Point A is anonymised before storage in Database B]
- [Note 2 — e.g., Transaction data is retained for 7 years in accordance with FSA Section [X] and BNM guidelines]
- [Note 3]

---

### Appendix C — Threat Modelling Worksheet

*Document the full threat modelling analysis conducted using [STRIDE / PASTA / OCTAVE / Attack Tree / other methodology]. This provides the detailed supporting evidence for the threat identification in Section 8.*

**Threat Modelling Methodology:** [STRIDE / PASTA / OCTAVE / Attack Trees]
**Threat Modelling Date:** [DD Month YYYY]
**Conducted By:** [Names, Titles]

| Threat ID | Threat Category (STRIDE) | Threat Description | Affected Component | Attack Vector | Attack Surface | Threat Actor | Likelihood | Notes |
|---|---|---|---|---|---|---|---|---|
| THR-001 | [Spoofing / Tampering / Repudiation / Information Disclosure / Denial of Service / Elevation of Privilege] | [Detailed threat scenario] | [COMP-XXX] | [Network / Local / Physical / Social Engineering] | [Entry point] | [Threat actor type] | [High / Med / Low] | [Additional notes] |
| THR-002 | [Category] | [Scenario] | [Component] | [Vector] | [Surface] | [Actor] | [Likelihood] | [Notes] |
| THR-003 | [Category] | [Scenario] | [Component] | [Vector] | [Surface] | [Actor] | [Likelihood] | [Notes] |
| THR-004 | [Category] | [Scenario] | [Component] | [Vector] | [Surface] | [Actor] | [Likelihood] | [Notes] |
| THR-005 | [Category] | [Scenario] | [Component] | [Vector] | [Surface] | [Actor] | [Likelihood] | [Notes] |

---

### Appendix D — Security Testing Summary

*Summarise the security testing activities conducted for [Project Name]. Attach full security testing reports as separate controlled documents. This appendix provides a cross-reference between security findings and the risk register.*

**Penetration Test / VAPT Provider:** [Vendor Name]
**Testing Period:** [DD Month YYYY] to [DD Month YYYY]
**Testing Scope:** [Description of scope]
**Report Reference:** [Report ID / Reference]

| Finding ID | Severity | Finding Title | Affected Component | CVSS Score | Risk Register Reference | Remediation Status | Remediation Date |
|---|---|---|---|---|---|---|---|
| VAPT-001 | [Critical / High / Medium / Low / Informational] | [Finding Title] | [COMP-XXX] | [Score] | [RISK-XXX or N/A] | [Remediated / In Progress / Accepted / Open] | [Date or N/A] |
| VAPT-002 | [Severity] | [Title] | [Component] | [Score] | [Risk Ref] | [Status] | [Date] |
| VAPT-003 | [Severity] | [Title] | [Component] | [Score] | [Risk Ref] | [Status] | [Date] |
| VAPT-004 | [Severity] | [Title] | [Component] | [Score] | [Risk Ref] | [Status] | [Date] |
| VAPT-005 | [Severity] | [Title] | [Component] | [Score] | [Risk Ref] | [Status] | [Date] |

**VAPT Summary:**

| Severity | Total Found | Remediated | In Progress | Accepted | Open |
|---|---|---|---|---|---|
| Critical | [#] | [#] | [#] | [#] | [#] |
| High | [#] | [#] | [#] | [#] | [#] |
| Medium | [#] | [#] | [#] | [#] | [#] |
| Low | [#] | [#] | [#] | [#] | [#] |
| Informational | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

---

### Appendix E — Vendor Risk Assessment Summary

*Summarise the vendor risk assessments conducted for all third-party vendors and suppliers involved in [Project Name]. Full vendor risk assessment reports are maintained by the Head of Vendor Management.*

| Vendor ID | Vendor Name | Assessment Date | Assessment Type | Overall Rating | Key Risks Identified | Contractual Safeguards in Place | Re-assessment Due |
|---|---|---|---|---|---|---|---|
| VEN-001 | [Vendor Name] | [Date] | [Desktop / On-site / Third-party audit] | [Critical / High / Medium / Low] | [Summary of key risks] | [Yes / No / Partial — reference contract clauses] | [Date] |
| VEN-002 | [Vendor Name] | [Date] | [Type] | [Rating] | [Risks] | [Safeguards] | [Date] |
| VEN-003 | [Vendor Name] | [Date] | [Type] | [Rating] | [Risks] | [Safeguards] | [Date] |

---

### Appendix F — Business Continuity and Disaster Recovery Assessment

*Summarise the business continuity and disaster recovery risk findings for [Project Name]. This appendix supports risk items in the Business Continuity Risk category.*

**Recovery Time Objective (RTO):** [Hours / Minutes]
**Recovery Point Objective (RPO):** [Hours / Minutes]
**Maximum Tolerable Downtime (MTD):** [Hours]

| DR Component | Current Capability | Target (RTO/RPO) | Gap | Risk Implication | Remediation Action |
|---|---|---|---|---|---|
| Primary System Failover | [Current RTO/RPO achieved] | RTO: [X] hrs, RPO: [X] hrs | [Gap description] | [Risk if gap not closed] | [Action required] |
| Data Backup and Restore | [Backup frequency, restore tested?] | RPO: [X] hrs | [Gap] | [Risk] | [Action] |
| Network Redundancy | [Description of redundancy] | [Target] | [Gap] | [Risk] | [Action] |
| Geographic Redundancy | [DR site details] | [Target] | [Gap] | [Risk] | [Action] |
| DR Test Results | Last test: [Date], Result: [Pass/Fail/Partial] | Full test annually | [Gap if not tested] | [Risk] | [Action] |

---

### Appendix G — Regulatory Compliance Checklist

*This checklist provides a traceability matrix between BNM RMiT requirements and the corresponding sections of this risk assessment report.*

| BNM RMiT Requirement | Clause | Requirement Description | Addressed in This Report | Section Reference | Compliance Status |
|---|---|---|---|---|---|
| Technology Risk Assessment | 10.1 | Institutions must conduct structured technology risk assessments for major technology projects | Yes | Sections 5–10 | [Compliant / Partially Compliant / Gap] |
| Continuous Monitoring | 10.2 | Continuous monitoring of technology risks with quarterly formal review | Yes | Sections 11–12 | [Compliant / Partially Compliant / Gap] |
| Asset Identification | [Clause] | All technology assets must be identified and inventoried | Yes | Section 5 | [Status] |
| Asset Classification | [Clause] | Assets must be classified by sensitivity and criticality | Yes | Section 6 | [Status] |
| Risk Ownership | [Clause] | All risks must have a named risk owner | Yes | Sections 7, 14 | [Status] |
| Risk Register | [Clause] | A risk register must be maintained and kept current | Yes | Section 8 | [Status] |
| KRI Monitoring | [Clause] | KRIs must be established and monitored | Yes | Section 10.3 | [Status] |
| Risk Reporting | [Clause] | Risks must be reported to appropriate governance bodies | Yes | Sections 12–14 | [Status] |
| [Additional Requirement] | [Clause] | [Description] | [Yes / No / Partial] | [Section] | [Status] |

---

### Appendix H — Glossary of Terms

| Term | Definition |
|---|---|
| **Asset** | Anything that has value to [Organisation Name] and for which protection is warranted, including information, software, hardware, services, and people. |
| **Asset Custodian** | The individual or team responsible for the operational management and technical protection of an asset on behalf of the Asset Owner. |
| **Asset Owner** | The individual accountable for the business use, value, and appropriate protection of an asset. |
| **BNM** | Bank Negara Malaysia — the central bank and financial regulatory authority of Malaysia. |
| **BCP** | Business Continuity Plan — a documented plan for maintaining essential business functions during and after a disruption. |
| **Control** | A measure that modifies risk. Controls include any process, policy, device, procedure, or other action that modifies the likelihood or impact of a risk. |
| **CVSS** | Common Vulnerability Scoring System — an open framework for communicating the characteristics and severity of software vulnerabilities. |
| **DR** | Disaster Recovery — the process of restoring IT systems and data following a major disruptive event. |
| **GRC** | Governance, Risk, and Compliance — an organisational strategy for managing governance, risk management, and compliance with industry and government regulations. |
| **Inherent Risk** | The level of risk that exists in the absence of any controls or risk treatment measures. |
| **KCI** | Key Control Indicator — a metric used to monitor the effectiveness of a control. |
| **KRI** | Key Risk Indicator — a metric used to provide an early warning signal of increasing risk exposure. |
| **NACSA** | National Cyber Security Agency of Malaysia — the national authority responsible for coordinating the national cyber security policy. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data in commercial transactions. |
| **Residual Risk** | The level of risk remaining after risk treatment measures (controls) have been applied. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions. |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss measured in time. |
| **RTO** | Recovery Time Objective — the targeted duration of time within which a business process must be restored after a disruption. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |
| **Risk Appetite** | The amount and type of risk that [Organisation Name] is willing to accept in pursuit of its strategic objectives. |
| **Risk Owner** | The individual accountable for ensuring that a specific risk is identified, assessed, treated, and monitored. |
| **STRIDE** | A threat modelling framework covering Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege. |
| **VAPT** | Vulnerability Assessment and Penetration Testing — a security testing methodology for identifying and exploiting vulnerabilities in a system. |

---

*End of Document*

---

**Document Control Information**

| Field | Details |
|---|---|
| **Document Title** | Project Risk Assessment Report |
| **Document ID** | [DOCUMENT-ID] |
| **Version** | 1.0 |
| **Classification** | Confidential — Internal Use Only |
| **Owner** | Head of Technology Risk |
| **Last Updated** | [DD Month YYYY] |
| **Next Review** | [DD Month YYYY] |
| **Storage Location** | [Document Repository / GRC Platform — Path] |
| **Retention Period** | 7 years from date of creation (in accordance with [Retention Policy Reference]) |
| **Disposal Method** | Secure deletion / shredding in accordance with [Organisation Name]'s Data Disposal Policy |