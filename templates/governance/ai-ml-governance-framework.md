# AI/ML Governance Framework

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Risk Officer (CRO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Framework Reference** | BNM Risk Management in Technology (RMiT) — Clause 17.4 |

---

> **Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. Any printed copies are considered uncontrolled documents.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose, Scope, and Objectives](#2-purpose-scope-and-objectives)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Governance Structure](#4-governance-structure)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [AI/ML Model Lifecycle Management](#6-aiml-model-lifecycle-management)
7. [Model Risk Management](#7-model-risk-management)
8. [Bias, Fairness, and Ethical AI](#8-bias-fairness-and-ethical-ai)
9. [Explainability and Transparency](#9-explainability-and-transparency)
10. [Data Governance for AI/ML](#10-data-governance-for-aiml)
11. [Third-Party and Vendor AI Risk](#11-third-party-and-vendor-ai-risk)
12. [Methodology and Approach](#12-methodology-and-approach)
13. [Implementation Roadmap](#13-implementation-roadmap)
14. [Monitoring, Review, and Continuous Improvement](#14-monitoring-review-and-continuous-improvement)
15. [Incident Management and Escalation](#15-incident-management-and-escalation)
16. [Appendices](#16-appendices)
17. [Review and Approval](#17-review-and-approval)
18. [References](#18-references)

---

## 1. Executive Summary

*Provide a concise overview of the AI/ML Governance Framework, its strategic rationale, alignment with BNM RMiT requirements, and the organization's commitment to responsible AI adoption. This section should be suitable for board-level and senior management readership.*

[Organization Name] is committed to the responsible, transparent, and risk-aware deployment of Artificial Intelligence (AI) and Machine Learning (ML) technologies across its operations. As the adoption of AI/ML expands within the financial services sector, the need for a structured governance framework to manage associated risks — including model risk, algorithmic bias, explainability deficiencies, and systemic operational risk — has become both a regulatory imperative and a strategic priority.

This AI/ML Governance Framework ("the Framework") establishes the policies, standards, processes, roles, and controls that govern the entire lifecycle of AI and ML models at [Organization Name]. It is designed to ensure that AI/ML adoption is conducted in a manner consistent with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, particularly **Clause 17.4**, as well as applicable provisions of the **Personal Data Protection Act 2010 (PDPA)**, and international best practices including ISO/IEC 42001 and the NIST AI Risk Management Framework.

The Framework applies to all AI/ML models developed, procured, or deployed by [Organization Name], whether operated internally or through third-party vendors. It establishes clear accountability lines from the Board of Directors through to operational teams, and mandates the application of risk-proportionate controls across all stages of the AI/ML model lifecycle.

**Key objectives of this Framework include:**

- Ensuring AI/ML use is governed by transparent, documented, and auditable processes.
- Managing model risk through rigorous validation, testing, and monitoring protocols.
- Embedding fairness, bias mitigation, and ethical principles into AI/ML design and deployment.
- Satisfying regulatory obligations under BNM RMiT Clause 17.4 and related requirements.
- Fostering customer trust through explainable and accountable AI/ML outcomes.

This Framework is owned by the **Chief Risk Officer (CRO)** and is reviewed on an **annual** basis, or more frequently in response to material changes in the regulatory environment, technology landscape, or the organization's AI/ML portfolio.

---

## 2. Purpose, Scope, and Objectives

### 2.1 Purpose

*State the primary purpose of this Framework and the regulatory obligation it fulfills. Reference specific BNM RMiT clauses and any other applicable regulatory instruments.*

This Framework is established pursuant to **BNM RMiT Clause 17.4**, which requires financial institutions to implement governance arrangements for the use of AI and ML that address model risk, data quality, bias, explainability, and accountability. The Framework provides [Organization Name] with a comprehensive governance structure to manage AI/ML-related risks in a manner commensurate with the complexity, scale, and materiality of its AI/ML activities.

The Framework also supports compliance with:

- **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document** — particularly Clause 17.4 on AI/ML governance, and related clauses on technology risk management.
- **Personal Data Protection Act 2010 (PDPA)** — with respect to the processing of personal data in AI/ML models.
- **BNM Guidelines on Data Management and Management Information System (MIS)** — as applicable to data inputs and outputs of AI/ML models.
- **Financial Services Act 2013 (FSA) / Islamic Financial Services Act 2013 (IFSA)** — with respect to operational risk management obligations.
- **[Any other applicable internal policies or regulatory instruments].**

### 2.2 Scope

*Define clearly what is in scope and out of scope. Specify the types of AI/ML systems, business units, geographies, and deployment contexts covered.*

#### 2.2.1 In Scope

This Framework applies to:

| Scope Dimension | Description |
|---|---|
| **AI/ML Models** | All AI and ML models used for decision-making, decision-support, automation, prediction, classification, or recommendation within [Organization Name]. |
| **Business Functions** | All business units and functions of [Organization Name] that develop, procure, deploy, or rely upon AI/ML models, including but not limited to: Credit, Risk, Finance, Operations, Customer Experience, Compliance, and Technology. |
| **Deployment Contexts** | Models deployed in production environments, models under development or testing that may impact customer outcomes, and models deployed through third-party or vendor arrangements. |
| **Data** | All data used as inputs to, or generated as outputs from, AI/ML models within the scope above. |
| **Third Parties** | External vendors, technology partners, and service providers who supply AI/ML models or model components to [Organization Name]. |
| **Geographies** | All operations of [Organization Name] within Malaysia and, where applicable, overseas entities subject to home-country oversight. |

#### 2.2.2 Out of Scope

The following are explicitly out of scope for this Framework unless otherwise specified by the CRO:

- Rule-based systems, decision trees, and deterministic algorithms that do not incorporate statistical learning or probabilistic inference.
- Standard business intelligence and analytics tools that produce descriptive reporting only, without predictive or prescriptive outputs.
- Research and proof-of-concept activities that are fully sandboxed and have no connection to production systems or real customer data.

> **Note:** The CRO retains discretion to bring any technology system within scope of this Framework where the risk profile warrants governance oversight.

### 2.3 Objectives

*List the specific, measurable objectives of the Framework.*

The specific objectives of this Framework are to:

1. **Establish governance accountability** by defining clear roles and responsibilities for AI/ML oversight at Board, senior management, and operational levels.
2. **Manage model risk** through standardized development, validation, approval, deployment, and monitoring processes applied proportionally to model risk ratings.
3. **Ensure data integrity and quality** by mandating data governance standards for all data used in AI/ML model development and operation.
4. **Embed ethical AI principles** by requiring assessment and mitigation of bias, promotion of fairness, and protection of vulnerable customer segments.
5. **Enable explainability** by requiring that AI/ML model outputs can be explained to affected individuals, regulators, and internal stakeholders to a degree commensurate with the decision's impact.
6. **Control third-party AI risk** by applying risk-based due diligence and ongoing oversight to vendor-supplied AI/ML solutions.
7. **Support regulatory compliance** by ensuring all AI/ML activities satisfy applicable BNM and other regulatory requirements.
8. **Facilitate continuous improvement** through structured monitoring, review, and learning processes.

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Landscape

*Summarize the key regulatory requirements relevant to AI/ML governance for Malaysian financial institutions. This section should be updated as the regulatory environment evolves.*

AI/ML governance within [Organization Name] is shaped by a layered regulatory and policy environment. The following instruments are directly relevant:

| Regulatory Instrument | Issuing Authority | Key Requirements Relevant to AI/ML |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 17.4: AI/ML governance, model risk, bias, explainability; Clause 10: Technology risk management; Clause 11: Cyber risk |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Communications and Digital | Lawful processing, consent, data minimization, individual rights in automated decision-making |
| Financial Services Act 2013 (FSA) | BNM | Operational risk management, board accountability, outsourcing risk |
| Islamic Financial Services Act 2013 (IFSA) | BNM | As above, applicable to Islamic finance entities |
| BNM Policy Document on Outsourcing | Bank Negara Malaysia | Third-party AI/ML vendor management requirements |
| BNM Policy Document on Technology Risk | Bank Negara Malaysia | Technology risk management principles applicable to AI/ML |
| [Other applicable BNM policy documents] | Bank Negara Malaysia | [Describe] |

### 3.2 BNM RMiT Clause 17.4 — Summary of Requirements

*Provide a plain-language summary of the key requirements under RMiT Clause 17.4 that this Framework addresses.*

BNM RMiT Clause 17.4 requires financial institutions that use AI/ML to:

- Establish governance arrangements that provide appropriate oversight of AI/ML use, including board and senior management accountability.
- Implement a model risk management process covering model development, validation, approval, deployment, monitoring, and retirement.
- Address risks of bias in AI/ML models, particularly where models are used in decisions affecting customers (e.g., credit scoring, fraud detection).
- Ensure AI/ML model outputs can be explained to the extent required by the nature and impact of the decisions made.
- Maintain adequate documentation of AI/ML models throughout their lifecycle.
- Ensure third-party AI/ML solutions are subject to equivalent governance standards.

This Framework directly addresses each of these requirements as described in the subsequent sections.

### 3.3 Internal Policy Alignment

*List the internal policies and frameworks that this Framework must align with or supersede.*

This Framework operates within [Organization Name]'s broader governance architecture and is aligned with the following internal instruments:

| Internal Policy / Framework | Relationship to This Framework |
|---|---|
| Enterprise Risk Management (ERM) Framework | AI/ML model risk is a sub-category of operational risk within the ERM Framework. |
| Technology Risk Management Policy | Governs technology risk broadly; this Framework provides AI/ML-specific requirements. |
| Data Governance Policy | Governs data quality and management; this Framework applies those standards to AI/ML data inputs. |
| Outsourcing and Third-Party Risk Management Policy | Applies to vendor AI/ML procurement; this Framework provides additional AI-specific requirements. |
| Information Security Policy | Governs data security for AI/ML training data and model outputs. |
| Customer Fairness Policy / Treating Customers Fairly (TCF) | This Framework supports TCF obligations in AI-driven customer decisions. |
| [Other applicable internal policies] | [Describe relationship] |

---

## 4. Governance Structure

### 4.1 Overview

*Describe the overall governance architecture for AI/ML at the organization, including the bodies and committees involved and their hierarchical relationships.*

[Organization Name] has established a multi-tiered AI/ML governance structure that provides oversight at the Board, senior management, and operational levels. This structure ensures that accountability for AI/ML risk is clearly defined and that escalation pathways are well-understood across all levels of the organization.

The governance structure is designed on the principle of **Three Lines of Defence**:

- **First Line:** Business units and technology teams that own, develop, and operate AI/ML models.
- **Second Line:** Risk Management and Compliance functions that provide independent oversight and challenge.
- **Third Line:** Internal Audit, which provides independent assurance of AI/ML governance effectiveness.

### 4.2 Board-Level Governance

*Describe the Board's role in AI/ML governance oversight.*

#### 4.2.1 Board of Directors

The Board of Directors holds ultimate accountability for the organization's AI/ML governance arrangements. The Board is responsible for:

- Approving this Framework and any material amendments thereto.
- Ensuring that the organization's risk appetite explicitly addresses AI/ML-related risks.
- Receiving regular reports on the organization's AI/ML portfolio, risk profile, and significant model risk events.
- Satisfying itself that senior management has established adequate governance structures and controls for AI/ML.

#### 4.2.2 Board Risk Committee (BRC)

| Responsibility | Detail |
|---|---|
| **Framework Approval** | Reviews and recommends this Framework to the Board for approval. |
| **Risk Appetite** | Ensures AI/ML risk appetite statements are integrated into the organization's overall risk appetite framework. |
| **Escalated Issues** | Reviews significant AI/ML risk events, model failures, and regulatory findings. |
| **Reporting** | Receives periodic AI/ML risk dashboards and management information. |

### 4.3 Senior Management Governance

*Describe the roles and committees at the senior management level responsible for AI/ML governance.*

#### 4.3.1 Management Risk Committee (MRC) / AI Governance Committee

[Organization Name] [has established / will establish] a dedicated **AI Governance Committee** (or delegates AI/ML governance to the Management Risk Committee) with the following mandate:

| Element | Detail |
|---|---|
| **Chair** | Chief Risk Officer (CRO) |
| **Members** | Chief Technology Officer (CTO), Chief Data Officer (CDO), Chief Compliance Officer (CCO), Chief Financial Officer (CFO), Heads of relevant Business Units |
| **Meeting Frequency** | [Quarterly / as required] |
| **Quorum** | [Define quorum requirements] |
| **Secretariat** | [Model Risk team / CRO Office] |

**Key responsibilities include:**

- Approving the AI/ML model inventory and risk classifications.
- Approving high-risk AI/ML models for deployment (as defined in Section 7).
- Overseeing model validation results and remediation of identified issues.
- Reviewing and approving the organization's AI/ML risk appetite.
- Reviewing the annual AI/ML governance report prior to Board Risk Committee submission.
- Escalating material AI/ML risk events to the Board Risk Committee.

#### 4.3.2 Chief Risk Officer (CRO)

The CRO is the **Framework Owner** and bears primary accountability for:

- Ensuring this Framework is maintained, implemented, and regularly reviewed.
- Providing independent oversight of AI/ML model risk across the organization.
- Reporting AI/ML governance matters to the AI Governance Committee, MRC, and BRC.
- Approving the AI/ML model risk rating methodology.

#### 4.3.3 Chief Technology Officer (CTO) / Chief Data Officer (CDO)

| Role | Key Responsibilities |
|---|---|
| **CTO** | Technology infrastructure for AI/ML; ensuring AI/ML platforms meet security and operational risk standards; overseeing model deployment environments. |
| **CDO** | Data quality and integrity for AI/ML; data governance compliance; oversight of data pipelines feeding AI/ML models. |

### 4.4 Operational Governance

*Describe the operational-level bodies and teams responsible for day-to-day AI/ML governance activities.*

#### 4.4.1 Model Risk Management Function

A dedicated **Model Risk Management (MRM) function** (within the Risk Management division) is responsible for:

- Maintaining the AI/ML Model Inventory.
- Conducting or coordinating independent model validation.
- Assigning and maintaining model risk ratings.
- Tracking model validation findings and remediation status.
- Reporting to the CRO and AI Governance Committee.

#### 4.4.2 Model Owner (Business Unit)

Each AI/ML model must have a designated **Model Owner** within the relevant business unit. The Model Owner is accountable for:

- The ongoing performance and appropriate use of the model.
- Ensuring the model is used only within its approved scope and limitations.
- Escalating model performance issues or out-of-scope use to the MRM function.
- Initiating the model review or retirement process as required.

#### 4.4.3 Model Developer

The **Model Developer** (which may be an internal team or a third-party vendor) is responsible for:

- Developing models in accordance with approved methodology standards.
- Producing complete and accurate model documentation.
- Conducting pre-validation testing and quality assurance.
- Remediating validation findings within agreed timelines.

#### 4.4.4 Model Validator

The **Model Validator** must be independent of the Model Developer and is responsible for:

- Independently assessing model conceptual soundness, data quality, and performance.
- Issuing a validation opinion and risk rating recommendation.
- Identifying and documenting validation findings.
- Confirming finding remediation prior to model deployment or continued use.

### 4.5 Governance Structure Diagram

*Insert a governance structure diagram showing the hierarchical relationships between the Board, Board Risk Committee, AI Governance Committee, CRO, CDO, CTO, MRM function, Model Owners, and Model Developers.*

```
[Insert AI/ML Governance Structure Diagram]

Board of Directors
        |
Board Risk Committee (BRC)
        |
AI Governance Committee (Chair: CRO)
    /       |       \
  CRO      CTO      CDO
    |
Model Risk Management Function
    |           |
Model Owners  Model Validators
    |
Model Developers
```

---

## 5. Roles and Responsibilities

### 5.1 RACI Matrix

*The following RACI matrix defines the roles and accountabilities for key AI/ML governance activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Board / BRC | AI Gov. Committee | CRO | CDO | CTO | MRM Function | Model Owner | Model Developer | Model Validator | Compliance | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Approve Framework and policy | A | C | R | C | C | C | I | I | I | C | I |
| Set AI/ML risk appetite | A | R | C | C | C | I | I | I | I | C | I |
| Maintain AI/ML model inventory | I | I | A | C | C | R | C | C | C | I | I |
| Assign model risk ratings | I | A | C | I | I | R | C | C | R | I | I |
| Develop AI/ML models | I | I | I | C | C | I | A | R | I | I | I |
| Document model development | I | I | I | C | I | C | A | R | C | I | I |
| Conduct model validation | I | A | C | I | I | R | C | I | R | I | I |
| Approve model for deployment (High Risk) | I | A | R | C | C | C | C | I | C | C | I |
| Approve model for deployment (Medium Risk) | I | I | A | C | C | R | C | I | C | I | I |
| Approve model for deployment (Low Risk) | I | I | I | I | I | A | R | C | C | I | I |
| Monitor deployed model performance | I | I | A | C | C | R | R | C | I | I | I |
| Manage model changes / versioning | I | I | A | C | C | R | R | R | C | I | I |
| Conduct bias and fairness assessment | I | I | A | C | I | R | C | R | R | C | I |
| Ensure explainability requirements | I | I | A | C | C | R | R | R | C | C | I |
| Manage third-party AI/ML vendor risk | I | I | A | C | C | C | R | I | I | C | I |
| Respond to regulatory enquiries | A | C | R | C | C | C | C | I | I | R | I |
| Conduct AI/ML governance audit | I | I | I | I | I | I | I | I | I | I | A |
| Escalate material model risk events | I | A | R | C | C | R | R | I | C | C | I |
| Retire / decommission models | I | I | A | C | C | R | R | C | C | I | I |
| Annual framework review | A | C | R | C | C | C | I | I | I | C | I |

### 5.2 Detailed Role Descriptions

*Provide expanded descriptions of each role's AI/ML governance responsibilities.*

#### 5.2.1 Board of Directors

| Responsibility | Description |
|---|---|
| **Strategic Oversight** | Approves the organization's strategy for AI/ML adoption and risk appetite. |
| **Framework Approval** | Approves this Framework and material amendments. |
| **Risk Culture** | Sets the tone for responsible, ethical AI/ML use across the organization. |
| **Regulatory Accountability** | Bears ultimate accountability to BNM for AI/ML governance compliance. |

#### 5.2.2 Board Risk Committee (BRC)

| Responsibility | Description |
|---|---|
| **Framework Recommendation** | Reviews and recommends this Framework to the Board. |
| **Risk Appetite Oversight** | Reviews AI/ML risk appetite statements. |
| **Periodic Reporting** | Reviews periodic AI/ML governance reports and dashboards. |
| **Escalation** | Receives escalated material model risk events and regulatory findings. |

#### 5.2.3 AI Governance Committee

| Responsibility | Description |
|---|---|
| **Model Inventory Oversight** | Reviews and approves the AI/ML model inventory and risk classifications. |
| **High-Risk Model Approval** | Approves the deployment of high-risk AI/ML models. |
| **Policy Oversight** | Reviews and approves AI/ML-related policies and standards. |
| **Performance Monitoring** | Reviews aggregate model performance reports. |
| **Regulatory Liaison** | Ensures organization-wide awareness of evolving AI/ML regulatory requirements. |

#### 5.2.4 Chief Risk Officer (CRO)

| Responsibility | Description |
|---|---|
| **Framework Ownership** | Owns, maintains, and ensures implementation of this Framework. |
| **Independent Oversight** | Provides independent oversight of AI/ML model risk. |
| **MRM Function Leadership** | Leads or oversees the Model Risk Management function. |
| **Regulatory Reporting** | Reports AI/ML governance matters to BNM as required. |

#### 5.2.5 Chief Data Officer (CDO)

| Responsibility | Description |
|---|---|
| **Data Governance** | Ensures data used in AI/ML models meets quality, integrity, and lineage standards. |
| **Data Catalogue** | Maintains data catalogue and lineage documentation for AI/ML data inputs. |
| **PDPA Compliance** | Ensures personal data used in AI/ML models is processed lawfully. |

#### 5.2.6 Chief Technology Officer (CTO)

| Responsibility | Description |
|---|---|
| **Platform Security** | Ensures AI/ML development and deployment platforms meet security standards. |
| **Infrastructure** | Provides and maintains technology infrastructure for AI/ML operations. |
| **Change Management** | Oversees technology change management for AI/ML model deployments. |

#### 5.2.7 Model Risk Management (MRM) Function

| Responsibility | Description |
|---|---|
| **Model Inventory** | Maintains a complete and current AI/ML model inventory. |
| **Validation Coordination** | Coordinates and oversees independent model validation activities. |
| **Risk Rating** | Assigns and reviews model risk ratings. |
| **Findings Tracking** | Tracks validation findings, remediation, and closure. |
| **Reporting** | Prepares AI/ML risk reports for governance committees. |

#### 5.2.8 Model Owner (Business Unit)

| Responsibility | Description |
|---|---|
| **Model Stewardship** | Accountable for model performance, use within approved scope, and compliance with this Framework. |
| **Use Case Definition** | Defines the business use case and requirements for the model. |
| **Performance Monitoring** | Monitors model performance in production and escalates issues. |
| **User Training** | Ensures model users understand model limitations and appropriate use. |

#### 5.2.9 Model Developer

| Responsibility | Description |
|---|---|
| **Model Development** | Develops models in accordance with approved methodology and standards. |
| **Documentation** | Produces complete model documentation (model card, technical documentation, etc.). |
| **Pre-validation Testing** | Conducts testing prior to independent validation. |
| **Finding Remediation** | Remediates validation findings within agreed timelines. |

#### 5.2.10 Model Validator

| Responsibility | Description |
|---|---|
| **Independence** | Maintains independence from model development activities. |
| **Validation Assessment** | Conducts independent assessment of model conceptual soundness, data, and performance. |
| **Validation Report** | Issues a validation report with findings and risk rating recommendation. |
| **Remediation Confirmation** | Confirms adequate remediation of validation findings. |

---

## 6. AI/ML Model Lifecycle Management

### 6.1 Overview of the Model Lifecycle

*Describe the end-to-end lifecycle of AI/ML models at the organization, from ideation through retirement. This section forms the operational core of the Framework.*

[Organization Name] manages AI/ML models through a structured **Model Lifecycle Management** process comprising the following stages:

```
[Stage 1: Ideation & Use Case Approval]
            ↓
[Stage 2: Model Development & Documentation]
            ↓
[Stage 3: Independent Model Validation]
            ↓
[Stage 4: Model Approval & Deployment]
            ↓
[Stage 5: Production Monitoring & Performance Management]
            ↓
[Stage 6: Model Change Management]
            ↓
[Stage 7: Model Retirement & Decommissioning]
```

Each stage has defined entry criteria, activities, outputs, and approval requirements as described below.

### 6.2 Stage 1: Ideation and Use Case Approval

*Describe the process for reviewing and approving proposed AI/ML use cases before development commences.*

#### 6.2.1 Purpose

Before AI/ML model development commences, proposed use cases must be reviewed and approved to ensure alignment with business objectives, regulatory requirements, and risk appetite.

#### 6.2.2 Process

1. **Use Case Proposal:** The sponsoring business unit submits a Use Case Proposal using the **AI/ML Use Case Proposal Template** (Appendix A), covering: business objective, proposed AI/ML approach, data requirements, expected outputs, impacted stakeholders, and preliminary risk assessment.
2. **Risk Screening:** The MRM function conducts an initial risk screening to assign a preliminary risk tier and identify key risks.
3. **Approval:** Use cases are approved by the appropriate authority based on preliminary risk tier:

| Preliminary Risk Tier | Approval Authority |
|---|---|
| High | AI Governance Committee |
| Medium | CRO (or delegated senior risk officer) |
| Low | Head of Model Risk Management |

4. **Ethical AI Pre-Assessment:** All use cases must complete an **Ethical AI Pre-Assessment Checklist** (Appendix B) prior to approval, addressing potential bias, fairness, and explainability considerations.

#### 6.2.3 Documentation Output

- Completed AI/ML Use Case Proposal (signed and approved).
- Ethical AI Pre-Assessment Checklist.
- Preliminary Model Risk Rating.

### 6.3 Stage 2: Model Development and Documentation

*Describe the standards and requirements for AI/ML model development activities.*

#### 6.3.1 Development Standards

All AI/ML model development must adhere to the following standards:

| Standard | Requirement |
|---|---|
| **Reproducibility** | Model development must be reproducible. All code, configurations, data versions, and random seeds must be documented and version-controlled. |
| **Data Quality** | Training, validation, and test datasets must meet the standards defined in Section 10 (Data Governance for AI/ML). |
| **Version Control** | All model code and artefacts must be managed in an approved version control system (e.g., [Git/Bitbucket/other]). |
| **Separation of Environments** | Development, testing, staging, and production environments must be strictly separated. |
| **Methodology Documentation** | Model developers must document: the chosen algorithm(s), rationale for algorithm selection, feature engineering decisions, hyperparameter tuning approach, and performance benchmarks. |
| **Bias Testing** | Developers must conduct bias and fairness testing as part of development (see Section 8). |
| **Security** | Model code and training data must be subject to security review prior to validation. |

#### 6.3.2 Model Documentation Requirements

Each AI/ML model must have a **Model Card** and **Technical Model Documentation** completed prior to independent validation. At a minimum, these must cover:

**Model Card (Summary — for non-technical audiences):**

| Element | Description |
|---|---|
| Model Name and Version | [Placeholder] |
| Model Purpose and Use Case | [Placeholder] |
| Intended Users and Use Contexts | [Placeholder] |
| Out-of-Scope Uses | [Placeholder] |
| Training Data Summary | [Placeholder] |
| Performance Summary | [Placeholder] |
| Known Limitations | [Placeholder] |
| Bias and Fairness Assessment Summary | [Placeholder] |
| Explainability Approach | [Placeholder] |
| Model Owner | [Placeholder] |
| Review Date | [Placeholder] |

**Technical Model Documentation (Detailed):**

- Problem formulation and business objective.
- Data sources, data lineage, and data quality assessment.
- Feature selection methodology and feature importance analysis.
- Algorithm selection rationale and model architecture.
- Training, validation, and test dataset splits and handling of class imbalance.
- Hyperparameter optimization methodology.
- Model performance metrics (training, validation, out-of-sample).
- Benchmark comparisons.
- Bias and fairness testing results.
- Explainability analysis.
- Assumptions, limitations, and known weaknesses.
- Deployment environment requirements.
- Monitoring plan.

### 6.4 Stage 3: Independent Model Validation

*Describe the independent model validation process and requirements.*

#### 6.4.1 Validation Principles

Independent model validation at [Organization Name] is governed by the following principles:

- **Independence:** Validators must be independent of model development activities. For high-risk models, the validator must report to a different function than the Model Developer.
- **Proportionality:** Validation depth is proportionate to the model's risk tier (see Section 7.2).
- **Challenge:** Validators are expected to actively challenge model assumptions, methodology, and documentation.
- **Documentation:** All validation activities and findings must be fully documented in a Validation Report.

#### 6.4.2 Validation Scope

Validation activities must cover, at minimum:

| Validation Domain | Key Activities |
|---|---|
| **Conceptual Soundness** | Review of algorithm choice, theoretical basis, and methodology appropriateness for the use case. |
| **Data Quality and Integrity** | Assessment of data sources, data quality, feature engineering, and data representativeness. |
| **Model Performance** | Independent replication of performance testing; assessment against benchmarks; out-of-time and out-of-sample testing. |
| **Bias and Fairness** | Independent bias testing across protected characteristics and relevant customer segments (see Section 8). |
| **Explainability** | Assessment of model explainability against requirements for the use case (see Section 9). |
| **Implementation Review** | Review of model code, deployment procedures, and monitoring arrangements. |
| **Stress Testing** | Assessment of model performance under stressed or adverse conditions. |
| **Documentation Review** | Assessment of completeness and accuracy of model documentation. |

#### 6.4.3 Validation Outcomes

Following validation, the Validator must issue a **Model Validation Report** containing:

- Validation scope and methodology.
- Summary of findings, categorized by severity (Critical, High, Medium, Low, Informational).
- Risk rating recommendation.
- Conditional or unconditional approval recommendation.
- Remediation requirements and timelines.

| Finding Severity | Definition | Required Action |
|---|---|---|
| **Critical** | Fundamental flaw that materially compromises model integrity; model must not be deployed. | Immediate remediation required; re-validation required before deployment. |
| **High** | Significant issue that must be remediated before deployment or continued use. | Remediation required prior to deployment; re-validation of affected components. |
| **Medium** | Issue that should be remediated; model may be approved with conditions. | Remediation plan required within [30/60] days of deployment. |
| **Low** | Minor issue; model may be approved; remediation encouraged. | Track and address in next scheduled review. |
| **Informational** | Observation or enhancement opportunity; no action required. | Consider for future development iterations. |

### 6.5 Stage 4: Model Approval and Deployment

*Describe the approval and deployment process for AI/ML models following successful validation.*

#### 6.5.1 Approval Process

Following validation, models proceed through the following approval process:

| Risk Tier | Approval Authority | Conditions |
|---|---|---|
| **High** | AI Governance Committee | No Critical or High open findings; Medium findings have approved remediation plan. |
| **Medium** | CRO | No Critical or High open findings; Medium findings have approved remediation plan. |
| **Low** | Head of MRM | No Critical findings; all High findings remediated or have approved plan. |

#### 6.5.2 Deployment Requirements

Prior to production deployment, the following must be in place:

- [ ] Formal model approval documented and signed.
- [ ] Model registered in the AI/ML Model Inventory with current risk rating.
- [ ] Model Card published and accessible to relevant stakeholders.
- [ ] Monitoring dashboard configured and operational.
- [ ] Model Owner briefed on limitations, use conditions, and escalation procedures.
- [ ] User training completed (where applicable).
- [ ] Data pipeline quality checks enabled in production.
- [ ] Security review signed off by information security team.
- [ ] Change management approval obtained.
- [ ] Rollback plan documented and tested.

### 6.6 Stage 5: Production Monitoring and Performance Management

*See Section 14 for detailed monitoring and review requirements.*

### 6.7 Stage 6: Model Change Management

*Describe how changes to deployed AI/ML models are governed.*

AI/ML model changes must be classified and managed as follows:

| Change Type | Definition | Governance Requirement |
|---|---|---|
| **Major Change** | Significant changes to model algorithm, architecture, core features, or training data that may materially affect model outputs. | Full re-development and re-validation cycle. New approval required. |
| **Moderate Change** | Changes to model parameters, feature set, or data sources that may affect model performance but do not constitute a fundamental redesign. | Targeted re-validation of changed components. Approval by CRO or AI Governance Committee (depending on risk tier). |
| **Minor Change** | Routine updates such as model retraining on new data with unchanged architecture, minor configuration changes, or bug fixes with no material impact on model outputs. | MRM review and sign-off. Model Owner approval. |

All model changes must be documented in the **Model Change Log** and reflected in the Model Inventory.

### 6.8 Stage 7: Model Retirement and Decommissioning

*Describe the process for retiring and decommissioning AI/ML models.*

Models may be retired for reasons including: poor performance, replacement by a superior model, change in business strategy, or regulatory requirement. The model retirement process must:

1. Be initiated by the Model Owner with justification documented.
2. Be approved by the relevant authority (consistent with the model's risk tier).
3. Include a transition plan if the model supports business-critical decisions.
4. Include decommissioning of associated data pipelines, monitoring systems, and access controls.
5. Retain all model documentation and data in accordance with the organization's records retention policy.
6. Update the Model Inventory to reflect retired status.

Model documentation must be retained for a minimum of **[7 years / as specified in applicable BNM retention requirements]** following retirement.

---

## 7. Model Risk Management

### 7.1 Model Risk Definition

*Define model risk in the context of [Organization Name]'s AI/ML governance.*

**Model risk** is defined as the risk of adverse consequences arising from decisions based on incorrect or misused AI/ML model outputs. Model risk may manifest as:

- **Model error risk:** The model produces incorrect outputs due to flawed methodology, data, or implementation.
- **Model misuse risk:** The model is applied outside its approved scope or under conditions not contemplated at development.
- **Model deterioration risk:** Model performance degrades over time due to changes in the underlying data distribution or business environment.
- **Model dependency risk:** Over-reliance on model outputs without adequate human oversight.

### 7.2 Model Risk Rating Methodology

*Describe the methodology used to assign risk ratings to AI/ML models.*

[Organization Name] applies a **risk-based tiering** approach to AI/ML model governance. Model risk ratings are assigned by the MRM function based on the following criteria:

| Risk Factor | Considerations |
|---|---|
| **Materiality of Impact** | Financial, reputational, or customer impact if the model performs poorly or fails. |
| **Decision Criticality** | Whether the model output drives automated decisions vs. human-reviewed recommendations. |
| **Customer Impact** | Whether the model is used in decisions that directly affect individual customers (e.g., credit, fraud, product eligibility). |
| **Regulatory Sensitivity** | Whether the model operates in a regulatory-sensitive area (e.g., credit scoring, AML, conduct risk). |
| **Model Complexity** | Complexity of the algorithm; interpretability of outputs. |
| **Data Sensitivity** | Whether the model uses sensitive personal data or data from potentially biased sources. |
| **Maturity and Track Record** | Whether the algorithm is well-established or novel and untested in the use context. |
| **Breadth of Impact** | Number of customers, transactions, or decisions affected by the model. |

#### 7.2.1 Risk Tier Definitions

| Risk Tier | Description | Examples |
|---|---|---|
| **High** | Models whose failure or poor performance could have material financial, customer, reputational, or regulatory consequences; or models used in fully automated, high-volume customer decisions. | Credit scoring, fraud detection, AML transaction monitoring, automated loan approval, regulatory capital models. |
| **Medium** | Models with moderate impact; some human oversight in place; limited but non-trivial customer or financial exposure. | Customer segmentation for marketing, internal performance forecasting, risk early warning indicators. |
| **Low** | Models with limited direct customer or financial impact; human review is integral to the decision process; low complexity. | Internal process optimization tools, staff scheduling, preliminary analytics. |

### 7.3 AI/ML Model Inventory

*Describe the requirements for the AI/ML model inventory.*

[Organization Name] shall maintain a comprehensive **AI/ML Model Inventory** managed by the MRM function. The inventory must capture, at minimum:

| Field | Description |
|---|---|
| Model ID | Unique identifier assigned by MRM. |
| Model Name | Descriptive name of the model. |
| Model Version | Current production version. |
| Business Unit / Model Owner | Responsible business unit and named Model Owner. |
| Model Purpose | Description of the business use case. |
| Model Type | E.g., classification, regression, clustering, NLP, computer vision, generative AI. |
| Algorithm(s) | Primary algorithms used. |
| Risk Tier | High / Medium / Low. |
| Deployment Status | Development / Validation / Approved / Production / Retired. |
| Deployment Date | Date of first production deployment. |
| Last Validation Date | Date of most recent independent validation. |
| Next Scheduled Validation | Scheduled date for next periodic validation. |
| Open Findings | Number and severity of outstanding validation findings. |
| Third-Party / Vendor Model | Yes / No; if Yes, name of vendor. |
| Data Sources | Summary of primary data inputs. |
| Monitoring Status | Active / Exception / Suspended. |
| Last Review Date | Date of most recent governance review. |
| Notes | Any additional relevant information. |

The Model Inventory must be reviewed and updated at least **quarterly** and validated annually as part of the Framework review.

### 7.4 Stress Testing and Scenario Analysis

*Describe requirements for stress testing AI/ML models.*

High-risk AI/ML models must be subject to **stress testing** at the time of initial validation and periodically thereafter (at least annually). Stress testing must assess model performance under:

- Adverse economic or market conditions.
- Significant shifts in input data distributions (data drift scenarios).
- Degradation of input data quality.
- Edge cases and extreme values.
- Scenarios relevant to the specific business use case.

Stress testing results must be documented and considered in the model's risk rating and monitoring thresholds.

---

## 8. Bias, Fairness, and Ethical AI

### 8.1 Principles of Ethical AI

*Articulate the organization's ethical AI principles that underpin bias and fairness requirements.*

[Organization Name] is committed to the ethical use of AI/ML and subscribes to the following principles:

| Principle | Description |
|---|---|
| **Fairness** | AI/ML systems must not discriminate unlawfully or unfairly against individuals or groups based on protected characteristics or proxies thereof. |
| **Accountability** | Clear human accountability must exist for all AI/ML-driven decisions, particularly those affecting customers. |
| **Transparency** | The organization must be able to explain AI/ML decisions to affected individuals, regulators, and other stakeholders. |
| **Privacy** | AI/ML must respect the privacy rights of individuals and comply with PDPA requirements. |
| **Safety and Reliability** | AI/ML systems must be robust, tested, and operated within defined limits. |
| **Human Oversight** | Appropriate human oversight must be maintained, commensurate with the impact and risk of the model. |
| **Beneficence** | AI/ML use should create genuine value for customers and society, not only optimize for internal metrics. |

### 8.2 Bias Risk Assessment

*Describe the required bias risk assessment process for AI/ML models.*

All AI/ML models must undergo a **Bias Risk Assessment** as part of both the development phase and independent validation. The assessment must:

1. **Identify protected and sensitive characteristics** relevant to the model's use case:

| Category | Examples |
|---|---|
| **Legally protected** | Race, religion, gender, nationality, age, disability (as applicable under Malaysian law). |
| **Regulatory sensitive** | Socioeconomic status proxies, geographic indicators that may correlate with protected characteristics. |
| **Customer fairness** | Characteristics related to vulnerability, financial difficulty, or digital exclusion. |

2. **Identify potential sources of bias:**

| Bias Type | Description |
|---|---|
| **Historical Bias** | Training data reflects historical discriminatory patterns. |
| **Representation Bias** | Certain groups are underrepresented in training data. |
| **Measurement Bias** | Features used as proxies introduce indirect discrimination. |
| **Aggregation Bias** | A single model is applied to diverse sub-populations with different underlying distributions. |
| **Feedback Loop Bias** | Model outputs influence future training data, amplifying initial biases. |
| **Evaluation Bias** | Benchmarks do not adequately capture performance across all relevant sub-groups. |

3. **Apply appropriate bias metrics:**

| Metric | Description | Applicable Model Types |
|---|---|---|
| Statistical Parity Difference | Difference in positive outcome rates across groups. | Classification. |
| Equal Opportunity Difference | Difference in true positive rates across groups. | Classification. |
| Predictive Parity | Consistency of precision across groups. | Classification. |
| Disparate Impact Ratio | Ratio of positive outcome rates across groups (threshold typically ≥ 0.8 per industry practice). | Classification. |
| Individual Fairness | Similar individuals receive similar predictions. | All model types. |
| [Additional metrics as appropriate] | [Describe] | [Specify] |

### 8.3 Bias Mitigation

*Describe the bias mitigation approaches available and the process for selecting and applying them.*

Where bias is identified, Model Developers and Validators must consider and document appropriate mitigation measures:

| Mitigation Stage | Technique Examples |
|---|---|
| **Pre-processing** | Re-sampling techniques (oversampling, undersampling), re-weighting of training examples, data augmentation, removal of proxy features. |
| **In-processing** | Fairness-constrained optimization, adversarial debiasing, regularization techniques. |
| **Post-processing** | Threshold calibration across demographic groups, reject option classification. |
| **Procedural** | Enhanced human review for decisions affecting identified at-risk groups, escalation pathways, regular model audits. |

Mitigation choices must be documented with rationale, and their effectiveness must be measured and validated.

### 8.4 Ongoing Bias Monitoring

*Describe the requirements for monitoring bias in production models.*

Bias monitoring is a continuous obligation for all customer-impacting AI/ML models. Requirements include:

- **Periodic Bias Reviews:** All High-risk models must undergo bias review at least **[annually / semi-annually]**. Medium and Low-risk models at least **[annually]**.
- **Trigger-based Reviews:** Any material change in model inputs, outputs, or the customer population served triggers an immediate bias review.
- **Monitoring Metrics:** The bias metrics defined in Section 8.2 must be tracked in production monitoring dashboards.
- **Escalation:** Bias metric breaches must be escalated to the MRM function and Model Owner within **[24 / 48 hours]** and to the CRO within **[5 business days]**.
- **Reporting:** Aggregate bias monitoring results must be reported to the AI Governance Committee **[quarterly]**.

### 8.5 Customer Redress

*Describe the process for customer redress where AI/ML bias or error is identified.*

Where a deployed AI/ML model is found to have produced biased or erroneous outcomes that have materially adversely affected customers, [Organization Name] must:

1. Suspend or restrict the model's use pending investigation.
2. Conduct a root cause analysis.
3. Identify the population of potentially affected customers.
4. Assess the nature and extent of customer harm.
5. Implement appropriate customer redress in accordance with [Organization Name]'s customer fairness and complaint handling policies.
6. Report to BNM in accordance with applicable notification requirements.
7. Implement preventive measures and document lessons learned.

---

## 9. Explainability and Transparency

### 9.1 Explainability Principles

*Describe the organization's approach to AI/ML explainability.*

[Organization Name] recognizes that AI/ML model outputs affecting customers, employees, or other stakeholders must be explainable to a degree commensurate with the nature and impact of the decision. Explainability serves:

- **Regulatory compliance:** Meeting BNM RMiT requirements and, where applicable, obligations to explain automated decisions under PDPA.
- **Customer rights:** Enabling customers to understand adverse decisions and seek recourse.
- **Internal accountability:** Enabling model owners, validators, and governance bodies to assess model behavior.
- **Risk management:** Supporting detection of errors, bias, and model drift.

### 9.2 Explainability Requirements by Decision Type

*Define explainability requirements based on the type and impact of AI/ML decisions.*

| Decision Type | Definition | Explainability Requirement |
|---|---|---|
| **High-Impact Automated Decision** | Fully automated decision with direct, material impact on a customer (e.g., credit decline, fraud block, insurance denial). | Full explanation required. Customer must be provided with meaningful reasons for the decision. Global and local explainability techniques required. |
| **High-Impact Supported Decision** | AI/ML output significantly influences a human decision with material customer impact. | Explanation required for the model output provided to the human decision-maker. Model behaviour must be explainable to validators and governance bodies. |
| **Medium-Impact Decision** | AI/ML output influences a decision with moderate customer or business impact. | Model-level (global) explainability required. Local explainability for complaint or review scenarios. |
| **Low-Impact Decision** | AI/ML output has limited direct customer impact; significant human oversight. | Model-level explainability sufficient. |

### 9.3 Explainability Techniques

*Describe the explainability techniques that should be considered.*

Model Developers must select and document appropriate explainability techniques based on the model's decision type and algorithm:

| Technique Category | Examples | Best Suited For |
|---|---|---|
| **Inherently Interpretable Models** | Linear/logistic regression, decision trees, rule-based systems | Low-complexity use cases where performance tradeoff is acceptable. |
| **Global Explainability** | Feature importance (permutation, Gini), partial dependence plots (PDP), global surrogate models | Understanding overall model behavior and key drivers. |
| **Local Explainability** | SHAP (SHapley Additive exPlanations), LIME (Local Interpretable Model-agnostic Explanations) | Explaining individual predictions. |
| **Counterfactual Explanations** | Algorithmic recourse techniques | Explaining what would need to change for a different outcome (actionable explanations for customers). |
| **Natural Language Generation** | Template-based or AI-generated explanation narratives | Customer-facing explanation delivery. |

### 9.4 Customer-Facing Explanations

*Define standards for customer-facing explanations of AI/ML decisions.*

Where AI/ML is used in decisions with direct customer impact, [Organization Name] must ensure:

- Customers are informed that AI/ML is used in the relevant decision process (transparency disclosure).
- Customers who receive adverse decisions are provided with meaningful explanations of the principal factors that influenced the decision.
- Explanations are provided in plain language, accessible to a general audience.
- Customers are informed of their right to request human review of automated decisions (where applicable under PDPA and applicable regulatory guidance).
- Explanation delivery and customer requests are logged for audit purposes.

Customer-facing explanation templates must be reviewed and approved by the Compliance and Legal functions prior to deployment.

### 9.5 Explainability Documentation Requirements

Each AI/ML model's documentation must include:

- [ ] Description of the explainability approach selected and rationale.
- [ ] Results of global explainability analysis (e.g., feature importance outputs).
- [ ] Sample local explanations for representative cases.
- [ ] Assessment of explanation quality and limitations.
- [ ] Customer-facing explanation templates (where applicable).
- [ ] Evidence of Compliance and Legal review of customer-facing explanations.

---

## 10. Data Governance for AI/ML

### 10.1 Data Quality Requirements

*Describe the data quality standards applicable to AI/ML model data.*

The quality of AI/ML models is directly dependent on the quality of data used for development and operation. [Organization Name] mandates that all data used in AI/ML models meets the following quality dimensions:

| Quality Dimension | Requirement |
|---|---|
| **Accuracy** | Data must accurately represent the real-world entities and events it is intended to capture. |
| **Completeness** | Missing data must be assessed and handled appropriately; high levels of missingness in key features must be documented and justified. |
| **Consistency** | Data must be consistent across sources and over time; inconsistencies must be identified and resolved. |
| **Timeliness** | Data must be sufficiently current for the use case; data latency must be assessed and its impact on model performance documented. |
| **Representativeness** | Training data must be representative of the population to which the model will be applied; sampling biases must be identified and mitigated. |
| **Relevance** | Features used in models must be relevant to the prediction target and legally permissible. |

### 10.2 Data Lineage and Provenance

*Describe requirements for documenting the origin and transformation of AI/ML data.*

All AI/ML models must have documented data lineage covering:

- Source systems for each data element used in the model.
- Data transformations applied (including feature engineering steps).
- Data extraction and refresh frequencies.
- Data storage locations (including whether data is stored in training, validation, and test sets).
- Data access controls.

The CDO is responsible for maintaining data lineage documentation consistent with the organization's Data Governance Policy.

### 10.3 Personal Data and PDPA Compliance

*Describe requirements for handling personal data in AI/ML models.*

AI/ML models that use personal data must comply with the **Personal Data Protection Act 2010 (PDPA)** and [Organization Name]'s Privacy and Data Protection Policy. Requirements include:

| Requirement | Description |
|---|---|
| **Lawful Basis** | A clear lawful basis for processing personal data in the model must be identified and documented (e.g., consent, legitimate interest, contractual necessity, legal obligation). |
| **Purpose Limitation** | Personal data may only be used for AI/ML purposes consistent with the purpose for which it was collected. |
| **Data Minimization** | Only personal data necessary for the model's purpose should be used. Use of sensitive personal data (e.g., health, biometric) requires heightened justification. |
| **Data Retention** | Training data containing personal data must be subject to defined retention limits and secure deletion processes. |
| **Individual Rights** | Processes must exist to respond to individual rights requests (access, correction, erasure) where such data is used in AI/ML models. |
| **Privacy Impact Assessment** | A Privacy Impact Assessment (PIA) must be conducted for any model that processes personal data in a manner that presents material privacy risk. |
| **Cross-Border Transfer** | Personal data transferred outside Malaysia for AI/ML purposes (e.g., use of overseas cloud AI services) must comply with PDPA cross-border transfer provisions. |

### 10.4 Data Security

*Describe data security requirements for AI/ML training data and model outputs.*

- Training datasets containing customer or sensitive data must be stored in secure, access-controlled environments with logging of access.
- Training data used for model development must be anonymized or pseudonymized where technically feasible and consistent with model performance requirements.
- Production AI/ML model outputs that contain or derive personal data must be classified and handled in accordance with [Organization Name]'s data classification policy.
- AI/ML development and testing must not use production personal data unless explicitly approved with compensating controls in place.

### 10.5 Data Drift Monitoring

*Describe requirements for monitoring data drift in production AI/ML models.*

Data drift — changes in the statistical properties of model input data over time — can materially degrade model performance. [Organization Name] requires:

- Statistical monitoring of key model input features in production to detect data drift.
- Defined drift thresholds that trigger alerts, investigation, and potential model review.
- Documentation of data drift findings and actions taken.
- Integration of data drift monitoring into the model performance monitoring dashboard.

---

## 11. Third-Party and Vendor AI Risk

### 11.1 Scope and Applicability

*Define what constitutes a third-party AI/ML model or component for the purposes of this section.*

This section applies to all AI/ML models, algorithms, platforms, and components that are supplied by, hosted by, or rely materially on third-party vendors, technology providers, or outsourced service providers. This includes:

- Vendor-supplied AI/ML scoring or decision models (e.g., credit bureau scores, fraud scoring services).
- AI/ML features embedded in third-party software platforms (e.g., ERP, CRM, banking platforms with embedded AI).
- Cloud-based AI/ML services (e.g., AWS SageMaker, Azure ML, Google AI Platform).
- Open-source AI/ML models adapted for production use.
- Pre-trained foundation models and large language models (LLMs) used in production.

### 11.2 Due Diligence Requirements

*Describe the due diligence that must be conducted before adopting a third-party AI/ML solution.*

Before procuring or deploying a third-party AI/ML solution, [Organization Name] must conduct risk-proportionate due diligence:

| Due Diligence Area | Requirements |
|---|---|
| **Governance and Accountability** | Vendor must demonstrate adequate internal AI governance arrangements. |
| **Model Documentation** | Vendor must provide sufficient documentation to allow [Organization Name] to assess model risk (model card, methodology summary, performance data). |
| **Validation Rights** | Contract must provide [Organization Name] the right to conduct independent validation or access validation reports. |
| **Bias and Fairness** | Vendor must provide evidence of bias testing and mitigation; [Organization Name] must conduct own bias assessment on vendor model outputs. |
| **Explainability** | Vendor must provide mechanisms for [Organization Name] to explain model outputs to customers and regulators. |
| **Data Security and Privacy** | Vendor data handling must comply with PDPA and [Organization Name]'s data security standards. |
| **Concentration Risk** | Reliance on single AI/ML vendor for critical functions must be assessed for concentration risk. |
| **Exit Strategy** | Contracts must include provisions for model access, data portability, and transition support in the event of vendor exit or service discontinuation. |
| **BNM Outsourcing Requirements** | Vendor arrangements must comply with applicable BNM outsourcing policy requirements. |

### 11.3 Ongoing Vendor AI/ML Oversight

*Describe the ongoing oversight requirements for third-party AI/ML solutions in production.*

| Oversight Activity | Frequency | Responsible Party |
|---|---|---|
| Performance monitoring of vendor model outputs | Continuous / Monthly reporting | Model Owner, MRM function |
| Bias assessment of vendor model outputs | At least annually | MRM function |
| Vendor governance review | Annually | Vendor Management / CRO Office |
| Contract compliance review | Annually | Legal / Vendor Management |
| Business continuity testing | [Annually / as per BCP policy] | Technology / Operations |

### 11.4 Open-Source and Foundation Models

*Describe specific requirements for the use of open-source AI/ML models and large language models.*

The use of open-source AI/ML models and foundation models (including large language models) in production requires:

- A documented assessment of model provenance, training data, known limitations, and applicable licenses.
- An assessment of risks specific to foundation models, including: hallucination, prompt injection, data memorization, and unpredictable behavior at edge cases.
- Independent validation before production deployment, consistent with the model's risk tier.
- Enhanced monitoring arrangements appropriate to the unpredictability characteristics of foundation models.
- Legal review of open-source licenses for commercial use compliance.

---

## 12. Methodology and Approach

### 12.1 AI/ML Development Methodology

*Describe the overall methodology and approach that governs how AI/ML is developed and managed at the organization.*

[Organization Name] adopts a **risk-proportionate, lifecycle-based approach** to AI/ML governance, informed by the following methodological principles and reference frameworks:

| Methodological Principle | Description |
|---|---|
| **Risk Proportionality** | Governance requirements are calibrated to model risk tier; high-risk models receive more rigorous oversight than lower-risk models. |
| **Independence of Validation** | Model validation is always conducted independently of model development to ensure objective challenge. |
| **Documentation First** | Comprehensive documentation is a prerequisite for validation and deployment; undocumented models may not proceed to production. |
| **Human-in-the-Loop** | Human oversight is required in proportion to model impact; fully autonomous high-impact decisions require specific justification and controls. |
| **Continuous Monitoring** | Models are treated as dynamic systems requiring continuous performance monitoring, not static artefacts. |
| **Ethics by Design** | Bias, fairness, and explainability considerations are embedded from the use case approval stage, not applied retrospectively. |

### 12.2 Reference Frameworks and Standards

*List the external frameworks and standards that inform the organization's AI/ML methodology.*

| Framework / Standard | Issuing Body | Relevance |
|---|---|---|
| BNM Risk Management in Technology (RMiT) — Clause 17.4 | Bank Negara Malaysia | Primary regulatory requirement. |
| NIST AI Risk Management Framework (AI RMF 1.0) | NIST (US) | International best practice reference for AI risk governance. |
| ISO/IEC 42001:2023 — AI Management System | ISO/IEC | International standard for AI management systems. |
| ISO/IEC 23894:2023 — AI Risk Management | ISO/IEC | Guidance on AI risk management. |
| EU AI Act (as applicable) | European Union | Reference for AI risk classification and high-risk AI requirements. |
| OECD AI Principles | OECD | Foundational ethical AI principles. |
| SR 11-7 — Guidance on Model Risk Management | US Federal Reserve / OCC | International best practice for model risk management (reference only). |
| [Other applicable frameworks] | [Body] | [Describe relevance] |

### 12.3 AI/ML Technology Stack and Platforms

*Describe the approved platforms, tools, and environments for AI/ML development and deployment at the organization.*

*This section should be updated to reflect the organization's actual approved technology environment.*

| Component | Approved Tools / Platforms | Notes |
|---|---|---|
| **Development Environment** | [e.g., Jupyter, VS Code, RStudio] | [Notes] |
| **Version Control** | [e.g., GitLab, GitHub Enterprise, Bitbucket] | All model code must be version-controlled. |
| **ML Platform / MLOps** | [e.g., MLflow, Kubeflow, AWS SageMaker, Azure ML] | Central platform for model tracking and deployment. |
| **Data Platform** | [e.g., Databricks, Snowflake, on-premise data warehouse] | [Notes] |
| **Model Monitoring** | [e.g., Evidently AI, WhyLabs, custom dashboards] | [Notes] |
| **Model Registry** | [e.g., MLflow Model Registry, internal catalogue] | Single source of truth for production models. |
| **Explainability Tools** | [e.g., SHAP, LIME, InterpretML] | [Notes] |
| **Bias Testing Tools** | [e.g., IBM AI Fairness 360, Microsoft Fairlearn, Aequitas] | [Notes] |

---

## 13. Implementation Roadmap

### 13.1 Roadmap Overview

*Describe the phased implementation plan for this Framework, including key milestones, responsible parties, and target completion dates.*

*This section should be updated based on the organization's current maturity state and implementation priorities. The roadmap below provides a template structure.*

The implementation of this AI/ML Governance Framework is structured in **four phases**, with priority given to establishing foundational governance and controls for existing high-risk models before expanding to broader AI/ML portfolio coverage.

### 13.2 Implementation Phases

#### Phase 1: Foundation (Target Completion: [Date])

| Initiative | Description | Owner | Status |
|---|---|---|---|
| Framework publication and communication | Publish and communicate this Framework to all relevant stakeholders. | CRO | [Status] |
| AI Governance Committee establishment | Establish and operationalize the AI Governance Committee. | CRO | [Status] |
| MRM function establishment | Establish or designate the Model Risk Management function with adequate resourcing. | CRO | [Status] |
| AI/ML model inventory — initial population | Conduct a comprehensive inventory of all existing AI/ML models in production. | MRM / Business Units | [Status] |
| Risk tier assignment — existing models | Assign risk tiers to all inventoried models. | MRM | [Status] |
| High-risk model validation — priority queue | Initiate validation of all existing High-risk models not previously validated. | MRM | [Status] |
| Model documentation uplift | Identify and remediate documentation gaps for existing production models. | Model Owners / Developers | [Status] |

#### Phase 2: Control Implementation (Target Completion: [Date])

| Initiative | Description | Owner | Status |
|---|---|---|---|
| Model lifecycle process implementation | Implement end-to-end model lifecycle management processes for all new models. | MRM / CTO | [Status] |
| Monitoring dashboards deployment | Deploy model performance and data drift monitoring dashboards for all High-risk models. | MRM / Technology | [Status] |
| Bias testing framework deployment | Implement standardized bias testing procedures and tooling. | MRM / Data Science | [Status] |
| Explainability standards implementation | Implement explainability requirements for all High and Medium-risk models. | MRM / Model Owners | [Status] |
| Third-party AI due diligence uplift | Apply enhanced due diligence requirements to all existing third-party AI/ML vendors. | Vendor Management / MRM | [Status] |
| Staff training — initial | Deliver AI/ML governance training to all relevant staff. | CRO / HR / L&D | [Status] |

#### Phase 3: Maturity Enhancement (Target Completion: [Date])

| Initiative | Description | Owner | Status |
|---|---|---|---|
| Automated monitoring and alerting | Enhance monitoring with automated alerting for performance, drift, and bias threshold breaches. | Technology / MRM | [Status] |
| Validation of Medium-risk models | Complete validation of all Medium-risk models in the inventory. | MRM | [Status] |
| Customer explainability implementation | Deploy customer-facing explanation mechanisms for all High-impact automated decisions. | Product / Compliance / Technology | [Status] |
| Advanced bias analytics | Implement advanced bias analytics and sub-group performance analysis. | MRM / Data Science | [Status] |
| AI governance reporting enhancement | Establish comprehensive AI/ML governance reporting to AI Governance Committee and BRC. | MRM | [Status] |

#### Phase 4: Continuous Improvement (Ongoing from: [Date])

| Initiative | Description | Owner | Status |
|---|---|---|---|
| Annual framework review | Review and update this Framework annually. | CRO | Recurring |
| Annual model inventory review | Conduct full annual review of the model inventory. | MRM | Recurring |
| Regulatory monitoring | Monitor BNM and other regulatory developments in AI/ML governance. | Compliance | Recurring |
| Industry benchmarking | Benchmark AI/ML governance practices against industry peers and international standards. | CRO | Recurring |
| Emerging technology assessment | Assess governance implications of emerging AI/ML technologies (e.g., generative AI, agentic AI). | CTO / MRM | Recurring |

### 13.3 Resource Requirements

*Describe the resources required to implement and sustain this Framework.*

| Resource Category | Requirement | Notes |
|---|---|---|
| **Human Resources — MRM Function** | [Number of FTEs; skill requirements] | [Notes] |
| **Human Resources — Technology** | [Number of FTEs; skill requirements] | [Notes] |
| **Technology Platforms** | [List required technology investments] | [Notes] |
| **Training** | [Training programs and estimated coverage] | [Notes] |
| **External Expertise** | [External validation, advisory support as required] | [Notes] |
| **Budget** | [Estimated budget for Framework implementation] | [Notes] |

### 13.4 Key Performance Indicators (KPIs) for Implementation

| KPI | Target | Measurement Frequency |
|---|---|---|
| % of production AI/ML models in the inventory | 100% | Quarterly |
| % of High-risk models with current (in-date) validation | 100% | Quarterly |
| % of Medium-risk models with current validation | [Target %] | Quarterly |
| % of High-risk models with active monitoring dashboards | 100% | Monthly |
| Number of open Critical validation findings | 0 | Monthly |
| Number of open High validation findings > [60] days | 0 | Monthly |
| % of AI/ML staff trained on this Framework | [Target %] | Annually |
| Time to complete use case approval (High-risk) | ≤ [20] business days | Quarterly |
| % of third-party AI vendors with current due diligence | 100% | Annually |

---

## 14. Monitoring, Review, and Continuous Improvement

### 14.1 Model Performance Monitoring

*Describe the requirements for ongoing performance monitoring of deployed AI/ML models.*

All deployed AI/ML models must be subject to ongoing performance monitoring commensurate with their risk tier:

| Monitoring Element | High-Risk Models | Medium-Risk Models | Low-Risk Models |
|---|---|---|---|
| **Monitoring Frequency** | Continuous / Daily | Weekly / Monthly | Monthly / Quarterly |
| **Performance Metrics Review** | Monthly formal review | Quarterly formal review | Semi-annual review |
| **Data Drift Monitoring** | Continuous with automated alerts | Monthly | Quarterly |
| **Concept Drift Monitoring** | Monthly assessment | Quarterly assessment | Semi-annually |
| **Bias Metrics Monitoring** | Monthly | Quarterly | Semi-annually |
| **Periodic Full Validation** | Annually (or on material change/trigger) | Every [18] months | Every [2 years] |

#### 14.1.1 Performance Monitoring Metrics

For each model, the following categories of metrics must be tracked (specific metrics to be defined in the model's monitoring plan):

| Metric Category | Examples |
|---|---|
| **Discriminative Power / Accuracy** | AUC-ROC, Gini coefficient, accuracy, precision, recall, F1-score, RMSE, MAE (as appropriate to model type). |
| **Calibration** | Brier score, reliability diagrams, calibration error. |
| **Population Stability** | Population Stability Index (PSI) for score distributions and key features. |
| **Characteristic Stability** | Characteristic Stability Index (CSI) for individual features. |
| **Data Quality** | Missing value rates, out-of-range values, referential integrity failures. |
| **Business Outcome Metrics** | Actual vs. predicted outcome rates; model usage and override rates. |
| **Bias Metrics** | As defined in Section 8.2. |

#### 14.1.2 Performance Thresholds and Escalation

For each model, performance thresholds must be defined at model approval. Breaches of thresholds trigger the following escalation:

| Threshold Level | Definition | Required Response |
|---|---|---|
| **Green** | All metrics within approved thresholds. | Normal monitoring continues. |
| **Amber** | One or more metrics outside approved thresholds but not yet critical. | Model Owner and MRM function notified. Investigation and remediation plan within [10 business days]. |
| **Red** | Critical metric breach; model outputs may be unreliable. | Immediate escalation to CRO. Model use may be suspended pending investigation. Remediation plan within [5 business days]. |

### 14.2 Model Review Triggers

*In addition to scheduled reviews, the following triggers must initiate an unscheduled model review.*

| Trigger Category | Specific Triggers |
|---|---|
| **Performance Degradation** | Breach of Amber or Red performance thresholds; sustained negative trend in key metrics. |
| **Data Changes** | Significant change in data inputs, data sources, or data distribution; data quality failures in production. |
| **Business/Environmental Changes** | Material change in the business environment, economic conditions, or regulatory landscape that may affect model performance. |
| **Operational Events** | System incidents affecting model inputs or outputs; unexplained changes in model behavior. |
| **Regulatory or Legal Changes** | New regulatory guidance on AI/ML, bias, or explainability that requires model reassessment. |
| **Customer Complaints** | Significant increase in customer complaints potentially linked to AI/ML decisions; individual complaints raising model integrity concerns. |
| **Material Changes to the Model** | Any planned change classified as Major or Moderate per Section 6.7. |
| **Third-Party Vendor Changes** | Vendor model updates, vendor exits, or significant changes to vendor governance. |

### 14.3 Annual Governance Review

*Describe the requirements for the annual review of this Framework.*

This Framework is subject to a formal annual review conducted under the ownership of the CRO. The annual review must:

1. **Assess Framework effectiveness:** Review the outcomes of AI/ML governance activities over the review period, including: model validation results, monitoring findings, incidents, and customer complaints.
2. **Assess regulatory alignment:** Review for alignment with any new or updated BNM, PDPA, or other regulatory requirements issued during the year.
3. **Review the Model Inventory:** Validate the completeness and accuracy of the AI/ML model inventory.
4. **Review KPIs:** Assess performance against the KPIs defined in Section 13.4.
5. **Review lessons learned:** Incorporate lessons from AI/ML incidents, validation findings, and industry developments.
6. **Update the Framework:** Make necessary amendments to reflect the outcomes of the review.
7. **Obtain re-approval:** Submit the updated Framework to the Board Risk Committee and Board for re-approval.

The annual review report must be presented to the AI Governance Committee and Board Risk Committee.

### 14.4 Continuous Improvement Mechanisms

*Describe the mechanisms by which continuous improvement of AI/ML governance is facilitated.*

| Mechanism | Description | Frequency |
|---|---|---|
| **Post-Incident Reviews** | Following any material AI/ML risk event, a post-incident review must identify root causes and systemic improvements. | As required |
| **Validation Findings Analysis** | Aggregate analysis of validation findings across the model portfolio to identify systemic development or data issues. | Semi-annually |
| **Industry Benchmarking** | Benchmarking of [Organization Name]'s AI/ML governance practices against industry peers and international standards. | Annually |
| **Regulatory Monitoring** | Systematic monitoring of BNM communications, consultations, and guidance on AI/ML. | Continuous |
| **Technology Horizon Scanning** | Assessment of emerging AI/ML technologies and their governance implications. | [Quarterly / Semi-annually] |
| **Staff Feedback** | Collection of feedback from AI/ML practitioners and model users on governance process effectiveness. | Annually |

### 14.5 Reporting Framework

*Describe the AI/ML governance reporting structure.*

| Report | Content | Frequency | Prepared By | Submitted To |
|---|---|---|---|---|
| AI/ML Model Monitoring Dashboard | Performance, drift, and bias metrics for all production models. | Monthly | MRM function | Model Owners, CRO |
| AI/ML Risk Report | Portfolio risk summary, open findings, escalated events, KPI tracking. | Quarterly | MRM function | AI Governance Committee |
| AI/ML Governance Report | Comprehensive review of governance activities, policy compliance, and recommendations. | Annually | CRO | Board Risk Committee / Board |
| Material Model Risk Event Notification | Details of any critical model risk event requiring immediate escalation. | As required | MRM function / CRO | AI Governance Committee, BRC (as appropriate) |
| Regulatory Submission (if required) | As required by BNM or other regulators. | As required | CRO / Compliance | BNM |

---

## 15. Incident Management and Escalation

### 15.1 AI/ML Incident Definition

*Define what constitutes an AI/ML incident for the purposes of this Framework.*

An **AI/ML incident** is any event, or series of events, involving an AI/ML model that has resulted in, or has the material potential to result in:

- Material financial loss to [Organization Name] or its customers.
- Adverse customer outcomes, including biased or erroneous decisions affecting customers.
- Regulatory non-compliance or exposure.
- Reputational damage to [Organization Name].
- A significant breach of this Framework or related policies.
- A significant security compromise involving AI/ML model data or systems.

### 15.2 Incident Classification

| Severity Level | Definition | Response Time |
|---|---|---|
| **Severity 1 — Critical** | Immediate material harm to customers or significant financial/regulatory exposure. Model must be suspended. | Immediate response; CRO and CEO notified within [1 hour]. |
| **Severity 2 — High** | Significant risk of harm or material model failure. Urgent remediation required. | CRO notified within [4 hours]; remediation plan within [24 hours]. |
| **Severity 3 — Medium** | Moderate impact; model continues operating with enhanced monitoring or restrictions. | MRM function and Model Owner notified within [1 business day]; remediation plan within [5 business days]. |
| **Severity 4 — Low** | Minor issue; model operates normally; remediation in next planned review cycle. | Logged and tracked by MRM function. |

### 15.3 Incident Response Process

*Describe the step-by-step process for responding to AI/ML incidents.*

1. **Detection and Identification:** Incident detected via monitoring systems, staff escalation, customer complaint, or external notification.
2. **Initial Assessment:** Model Owner or MRM function conducts initial severity assessment within [1-4 hours] depending on severity.
3. **Escalation:** Notified parties as defined in Section 15.2.
4. **Containment:** Implement immediate containment measures (e.g., model suspension, restriction of use, manual override).
5. **Investigation:** Root cause analysis conducted by MRM function in collaboration with Model Developer and Technology.
6. **Communication:** Internal communication to relevant governance bodies; external communication (to BNM, customers) as required.
7. **Remediation:** Develop and implement remediation plan.
8. **Post-Incident Review:** Conduct post-incident review and document lessons learned.
9. **Regulatory Notification:** Notify BNM in accordance with applicable RMiT incident reporting requirements.
10. **Closure:** Incident formally closed following remediation and post-incident review sign-off.

### 15.4 Regulatory Notification

*Describe the requirements for notifying BNM of material AI/ML incidents.*

Material AI/ML incidents must be assessed for regulatory notification obligations under:

- **BNM RMiT** technology and cyber incident reporting requirements.
- **BNM incident reporting guidelines** (as applicable).
- **Other applicable regulatory notification obligations.**

The Compliance function must be engaged immediately for Severity 1 and Severity 2 incidents to determine notification obligations.

---

## 16. Appendices

### Appendix A: AI/ML Use Case Proposal Template

*This template must be completed by the sponsoring business unit for all proposed AI/ML use cases prior to development commencing. It should be submitted to the MRM function for risk screening and approval.*

| Field | Response |
|---|---|
| **Use Case Name** | [Enter name] |
| **Business Unit / Sponsor** | [Enter name and role] |
| **Date of Submission** | [Date] |
| **Proposed AI/ML Approach** | [Brief description: supervised learning, NLP, computer vision, etc.] |
| **Business Objective** | [Describe the business problem being solved] |
| **Proposed Decision Type** | [Automated / Human-supported; High/Medium/Low impact] |
| **Customer Impact** | [Yes / No; describe if yes] |
| **Estimated Volume** | [Number of decisions/predictions per day/month] |
| **Data Requirements** | [Describe data sources required; personal data involved?] |
| **Third-Party Involvement** | [Internal development / Vendor; name vendor if applicable] |
| **Regulatory Considerations** | [Any known regulatory requirements or constraints] |
| **Preliminary Risk Assessment** | [High / Medium / Low; rationale] |
| **Ethical Considerations** | [Potential bias risks, fairness concerns, explainability requirements] |
| **Expected Timeline** | [Development start / deployment target] |
| **Budget Estimate** | [Estimate if available] |
| **Business Case / Benefit** | [Summarize expected benefits and success metrics] |
| **Alignment with Strategy** | [How does this align with the organization's AI strategy?] |
| **Additional Notes** | [Any other relevant information] |

**Approval:**

| Role | Name | Decision | Date |
|---|---|---|---|
| MRM Function | | Approved / Rejected / Deferred | |
| CRO | | Approved / Rejected / Deferred | |
| AI Governance Committee | | Approved / Rejected / Deferred | |

---

### Appendix B: Ethical AI Pre-Assessment Checklist

*This checklist must be completed for all proposed AI/ML use cases as part of the use case approval process.*

| # | Question | Response | Notes |
|---|---|---|---|
| 1 | Does the proposed model make or significantly influence decisions that affect individual customers? | Yes / No | |
| 2 | Could the model's outputs disadvantage individuals based on protected characteristics (e.g., race, gender, religion, nationality, age, disability)? | Yes / No / Uncertain | |
| 3 | Are there foreseeable risks that the model could produce biased outcomes for any sub-group of the affected population? | Yes / No / Uncertain | |
| 4 | Will the model use proxy variables that may correlate with protected characteristics? | Yes / No | |
| 5 | Can the model's outputs be explained to affected individuals in plain language? | Yes / No / Partially | |
| 6 | Does the model use personal data as defined under PDPA? | Yes / No | |
| 7 | Is there a lawful basis for using personal data in this model? | Yes (specify) / No / To be determined | |
| 8 | Does the model involve automated decision-making with no human review? | Yes / No | |
| 9 | Are there adequate mechanisms for individuals to seek human review or redress for adverse decisions? | Yes / No / Not applicable | |
| 10 | Could the model create or amplify harmful feedback loops? | Yes / No / Uncertain | |
| 11 | Is the training data representative of the population to which the model will be applied? | Yes / No / Uncertain | |
| 12 | Are there any known ethical concerns or controversies associated with the algorithm or use case? | Yes / No | |
| 13 | Does the proposed use case raise concerns about the dignity, autonomy, or rights of individuals? | Yes / No | |
| 14 | Have relevant stakeholders (including Compliance and Legal) been consulted on ethical implications? | Yes / No | |
| 15 | Is a Privacy Impact Assessment (PIA) required? | Yes / No / To be determined | |

**Summary Assessment:**

| Assessment Element | Detail |
|---|---|
| **Key Ethical Risks Identified** | [Summary] |
| **Proposed Mitigations** | [Summary] |
| **Residual Concerns** | [Summary] |
| **Recommendation** | [Proceed / Proceed with conditions / Do not proceed] |
| **Completed By** | [Name / Role / Date] |
| **Reviewed By (MRM)** | [Name / Role / Date] |

---

### Appendix C: Model Card Template

*A Model Card must be completed for each AI/ML model prior to independent validation. It serves as a concise, accessible summary of the model for non-technical governance audiences.*

**MODEL CARD — [MODEL NAME] v[VERSION]**

| Field | Detail |
|---|---|
| **Model Name** | [Name] |
| **Model ID** | [Assigned by MRM] |
| **Version** | [Version number] |
| **Model Owner** | [Business unit and named owner] |
| **Model Developer** | [Internal team or vendor name] |
| **Date Created** | [Date] |
| **Last Updated** | [Date] |
| **Status** | [Development / Validation / Approved / Production / Retired] |
| **Risk Tier** | [High / Medium / Low] |

**Model Purpose**

| Field | Detail |
|---|---|
| **Primary Purpose** | [One-sentence description of what the model does] |
| **Use Case** | [Business use case and context] |
| **Decision Type** | [Automated / Human-supported] |
| **Affected Population** | [Who is affected by model outputs] |
| **Out-of-Scope Uses** | [Explicitly state uses the model is NOT approved for] |

**Model Details**

| Field | Detail |
|---|---|
| **Model Type** | [Classification / Regression / Clustering / NLP / Other] |
| **Algorithm(s)** | [Primary algorithm(s) used] |
| **Training Data Summary** | [Brief description of training data] |
| **Training Data Period** | [Date range of training data] |
| **Key Input Features** | [List key input features] |
| **Output** | [Description of model output: score, class label, probability, etc.] |
| **Output Threshold(s)** | [Decision thresholds used in production, if applicable] |

**Performance Summary**

| Metric | Training | Validation | Out-of-Sample |
|---|---|---|---|
| [Metric 1] | [Value] | [Value] | [Value] |
| [Metric 2] | [Value] | [Value] | [Value] |
| [Metric 3] | [Value] | [Value] | [Value] |

**Bias and Fairness**

| Field | Detail |
|---|---|
| **Protected Characteristics Assessed** | [List] |
| **Bias Testing Methodology** | [Summary] |
| **Key Findings** | [Summary; note any identified disparities and mitigations] |
| **Residual Bias Risks** | [Any known residual risks] |

**Explainability**

| Field | Detail |
|---|---|
| **Explainability Approach** | [Technique(s) used] |
| **Top Predictive Features** | [List top features with direction of influence] |
| **Customer Explanation Approach** | [How decisions are explained to customers, if applicable] |

**Known Limitations**

[Bullet point list of known limitations, assumptions, and conditions under which model performance may degrade]

**Monitoring**

| Field | Detail |
|---|---|
| **Monitoring Frequency** | [Daily / Weekly / Monthly] |
| **Key Monitoring Metrics** | [List] |
| **Amber Threshold** | [Describe] |
| **Red Threshold** | [Describe] |
| **Next Scheduled Validation** | [Date] |

---

### Appendix D: Model Validation Report Template

*This template provides the structure for the Model Validation Report to be issued following independent model validation.*

**MODEL VALIDATION REPORT**

| Field | Detail |
|---|---|
| **Model Name and Version** | [Name] v[Version] |
| **Model ID** | [ID] |
| **Validation Date** | [Date] |
| **Validator(s)** | [Name(s) and role(s)] |
| **Validation Scope** | [Full / Targeted; describe scope] |
| **Risk Tier** | [High / Medium / Low] |

**Executive Summary**

[2-3 paragraph summary of: validation scope, key findings, risk rating recommendation, and approval recommendation.]

**Validation Scope and Methodology**

[Describe the validation activities conducted, data used, tools applied, and any scope limitations.]

**Validation Findings**

| Finding ID | Domain | Severity | Description | Recommendation | Target Remediation Date | Status |
|---|---|---|---|---|---|---|
| VF-001 | [Domain] | [Critical/High/Medium/Low] | [Description] | [Recommendation] | [Date] | [Open/Closed] |
| VF-002 | | | | | | |

**Risk Rating Assessment**

| Risk Dimension | Assessment | Rationale |
|---|---|---|
| Conceptual Soundness | [High/Medium/Low Risk] | [Rationale] |
| Data Quality | [High/Medium/Low Risk] | [Rationale] |
| Model Performance | [High/Medium/Low Risk] | [Rationale] |
| Bias and Fairness | [High/Medium/Low Risk] | [Rationale] |
| Explainability | [High/Medium/Low Risk] | [Rationale] |
| Implementation and Monitoring | [High/Medium/Low Risk] | [Rationale] |
| **Overall Model Risk Rating** | **[High/Medium/Low]** | |

**Approval Recommendation**

| Recommendation | [Unconditional Approval / Conditional Approval / Do Not Approve] |
|---|---|
| **Conditions (if applicable)** | [List any conditions that must be met] |
| **Validator Signature** | [Name / Date] |

---

### Appendix E: AI/ML Incident Report Template

*This template must be completed following any AI/ML incident.*

| Field | Detail |
|---|---|
| **Incident ID** | [Assigned by MRM] |
| **Incident Title** | [Brief descriptive title] |
| **Date/Time of Detection** | [Date and time] |
| **Date/Time of Occurrence** | [Date and time, if known] |
| **Model(s) Involved** | [Model name(s) and ID(s)] |
| **Incident Severity** | [1 / 2 / 3 / 4] |
| **Reported By** | [Name / Role] |
| **Initial Escalation** | [Who was notified; date/time] |

**Incident Description**

[Detailed description of the incident, including: what happened, how it was detected, initial impact assessment.]

**Containment Actions Taken**

[Describe immediate containment actions taken.]

**Root Cause Analysis**

[Following investigation, describe the root cause(s) of the incident.]

**Impact Assessment**

| Impact Category | Assessment |
|---|---|
| **Financial Impact** | [Estimated financial impact, if any] |
| **Customer Impact** | [Number of customers affected; nature of impact] |
| **Regulatory Impact** | [Any regulatory notification obligations triggered] |
| **Reputational Impact** | [Assessment of reputational risk] |

**Remediation Plan**

| Action | Owner | Target Date | Status |
|---|---|---|---|
| [Action 1] | [Owner] | [Date] | [Status] |
| [Action 2] | | | |

**Regulatory Notification**

| Field | Detail |
|---|---|
| **Notification Required** | Yes / No |
| **Regulator** | [BNM / Other] |
| **Notification Date** | [Date] |
| **Reference Number** | [BNM reference, if applicable] |

**Lessons Learned**

[Describe lessons learned and any systemic improvements to be made.]

**Incident Closure**

| Field | Detail |
|---|---|
| **Closure Date** | [Date] |
| **Closed By** | [Name / Role] |
| **Post-Incident Review Completed** | Yes / No |

---

### Appendix F: Glossary of Terms

| Term | Definition |
|---|---|
| **Artificial Intelligence (AI)** | The simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction. |
| **Machine Learning (ML)** | A subset of AI that enables systems to learn from data and improve their performance without being explicitly programmed. |
| **Model Risk** | The risk of adverse consequences arising from decisions based on incorrect or misused model outputs. |
| **Model Validation** | An independent process of evaluating whether a model is appropriate for its intended purpose. |
| **Bias (Algorithmic)** | Systematic and unfair discrimination in AI/ML model outputs against individuals or groups based on characteristics such as race, gender, age, or other attributes. |
| **Explainability** | The ability to explain AI/ML model outputs in understandable terms to relevant audiences. |
| **Model Drift** | Degradation of model performance over time due to changes in the underlying data distribution (data drift) or the relationship between inputs and outputs (concept drift). |
| **Feature** | An input variable used by an AI/ML model to make predictions or decisions. |
| **Training Data** | The dataset used to develop and train an AI/ML model. |
| **Validation Data** | A dataset separate from training data used to evaluate model performance during development. |
| **Out-of-Sample Testing** | Testing of model performance on data entirely unseen during development. |
| **SHAP** | SHapley Additive exPlanations — a technique for explaining individual model predictions. |
| **LIME** | Local Interpretable Model-agnostic Explanations — a technique for local model explainability. |
| **PSI** | Population Stability Index — a measure of the shift in the distribution of model scores or input variables. |
| **AUC-ROC** | Area Under the Receiver Operating Characteristic Curve — a performance metric for classification models. |
| **Counterfactual Explanation** | An explanation of what minimal changes to input features would result in a different model outcome. |
| **Foundation Model** | A large AI model trained on broad data that can be adapted to a wide range of tasks (e.g., large language models). |
| **MLOps** | Machine Learning Operations — practices for deploying, monitoring, and maintaining ML models in production. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a matrix used to define roles and responsibilities. |
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia and primary financial services regulator. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management in financial institutions. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysia's primary personal data protection legislation. |
| **CRO** | Chief Risk Officer. |
| **CDO** | Chief Data Officer. |
| **CTO** | Chief Technology Officer. |
| **MRM** | Model Risk Management. |
| **LLM** | Large Language Model. |

---

### Appendix G: Related Policies and Documents

*List all related internal and external policies, standards, and documents relevant to this Framework.*

| Document | Type | Owner | Location |
|---|---|---|---|
| Enterprise Risk Management Framework | Internal Policy | CRO | [Document repository link] |
| Technology Risk Management Policy | Internal Policy | CTO / CRO | [Document repository link] |
| Data Governance Policy | Internal Policy | CDO | [Document repository link] |
| Information Security Policy | Internal Policy | CISO | [Document repository link] |
| Outsourcing and Third-Party Risk Management Policy | Internal Policy | CRO | [Document repository link] |
| Privacy and Data Protection Policy | Internal Policy | CCO / CDO | [Document repository link] |
| Customer Fairness Policy | Internal Policy | CCO | [Document repository link] |
| Change Management Policy | Internal Policy | CTO | [Document repository link] |
| Records Retention Policy | Internal Policy | [Owner] | [Document repository link] |
| BNM RMiT Policy Document | Regulatory | BNM | [BNM website] |
| Personal Data Protection Act 2010 | Legislation | Parliament of Malaysia | [Official Gazette] |
| NIST AI RMF 1.0 | External Standard | NIST | [NIST website] |
| ISO/IEC 42001:2023 | External Standard | ISO/IEC | [ISO website] |

---

## 17. Review and Approval

### 17.1 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 0.1 | [Date] | [Author] | Initial draft for internal review. | N/A |
| 0.2 | [Date] | [Author] | Incorporated feedback from [stakeholders]. | N/A |
| 0.3 | [Date] | [Author] | Incorporated Compliance and Legal review. | N/A |
| 1.0 | [Date] | [Author] | First approved version. | [Approver] |
| [Next version] | [Date] | [Author] | [Describe changes] | [Approver] |

### 17.2 Review Schedule

| Review Type | Frequency | Next Due Date | Responsible Party |
|---|---|---|---|
| **Annual Scheduled Review** | Annual | [Date] | CRO |
| **Triggered Review** | As required (see Section 14.2) | N/A | CRO / MRM |
| **Regulatory Change Review** | Within [30 days] of material regulatory change | N/A | CRO / Compliance |

### 17.3 Approval Sign-Off

*This Framework has been reviewed and approved by the following:*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** | [Name], [Title] | | [Date] |
| **Reviewed By — MRM Function** | [Name], Head of Model Risk Management | | [Date] |
| **Reviewed By — Compliance** | [Name], Chief Compliance Officer | | [Date] |
| **Reviewed By — Legal** | [Name], [Title] | | [Date] |
| **Reviewed By — Technology** | [Name], Chief Technology Officer | | [Date] |
| **Reviewed By — Data** | [Name], Chief Data Officer | | [Date] |
| **Approved By — Owner** | [Name], Chief Risk Officer | | [Date] |
| **Recommended By — BRC** | [Name], Chair, Board Risk Committee | | [Date] |
| **Approved By — Board** | [Name], Chairman / Board of Directors | | [Date] |

---

## 18. References

### 18.1 Regulatory References

| Reference | Instrument | Clause / Section | Description |
|---|---|---|---|
| **[REF-01]** | BNM Risk Management in Technology (RMiT) Policy Document | Clause 17.4 | AI/ML governance requirements — model risk, bias, explainability, governance arrangements. |
| **[REF-02]** | BNM Risk Management in Technology (RMiT) Policy Document | Clause 10 | Technology risk management — general principles applicable to AI/ML platforms. |
| **[REF-03]** | BNM Risk Management in Technology (RMiT) Policy Document | Clause 11 | Cyber risk management — applicable to AI/ML system security. |
| **[REF-04]** | BNM Risk Management in Technology (RMiT) Policy Document | Clause 12–14 | Outsourcing requirements — applicable to third-party AI/ML vendor management. |
| **[REF-05]** | Personal Data Protection Act 2010 (PDPA) | Sections 5–14 | Data protection principles applicable to AI/ML personal data processing. |
| **[REF-06]** | Personal Data Protection Act 2010 (PDPA) | Section 42 | Rights of data subjects in automated processing. |
| **[REF-07]** | Financial Services Act 2013 (FSA) | Sections 28–29 | Board and senior management accountability; operational risk management. |
| **[REF-08]** | Islamic Financial Services Act 2013 (IFSA) | [Equivalent sections] | As above, applicable to Islamic finance operations. |
| **[REF-09]** | BNM Policy Document on Outsourcing | [Relevant clauses] | Outsourcing governance requirements for third-party AI/ML services. |

### 18.2 Standards and Frameworks References

| Reference | Standard / Framework | Description |
|---|---|---|
| **[STD-01]** | NIST AI Risk Management Framework (AI RMF) 1.0, January 2023 | International best practice reference for AI risk governance (Govern, Map, Measure, Manage). |
| **[STD-02]** | ISO/IEC 42001:2023 — Information Technology — Artificial Intelligence — Management System | International standard for AI management systems. |
| **[STD-03]** | ISO/IEC 23894:2023 — Information Technology — Artificial Intelligence — Guidance on Risk Management | Guidance on risk management practices for AI. |
| **[STD-04]** | ISO/IEC 38507:2022 — Governance of IT — Governance Implications of the Use of AI by Organizations | AI governance at board level. |
| **[STD-05]** | OECD AI Principles, 2019 (updated 2023) | Foundational principles for trustworthy AI: inclusive growth, human rights, transparency, accountability, security. |
| **[STD-06]** | SR 11-7: Guidance on Model Risk Management (US Federal Reserve / OCC, 2011) | Internationally recognized guidance on model risk management practices (reference). |
| **[STD-07]** | EU Artificial Intelligence Act (Regulation 2024/1689) | International regulatory reference for AI risk classification. |

### 18.3 Internal References

| Reference | Document | Owner |
|---|---|---|
| **[INT-01]** | Enterprise Risk Management Framework | CRO |
| **[INT-02]** | Technology Risk Management Policy | CTO / CRO |
| **[INT-03]** | Data Governance Policy | CDO |
| **[INT-04]** | Information Security Policy | CISO |
| **[INT-05]** | Outsourcing and Third-Party Risk Management Policy | CRO |
| **[INT-06]** | Privacy and Data Protection Policy | CCO / CDO |
| **[INT-07]** | Customer Fairness Policy | CCO |
| **[INT-08]** | Records Retention Policy | [Owner] |

---

*End of Document*

---

> **Document Control:** This is a controlled document. The master version is maintained in [Organization Name]'s document management system. Printed copies are uncontrolled. Always verify you are using the current version before relying on this document.
>
> **Classification: Confidential** — [Organization Name] Internal Use Only.
>
> **Document ID:** [Document ID] | **Version:** 1.0 | **Owner:** Chief Risk Officer | **Next Review:** [Next Review Date]