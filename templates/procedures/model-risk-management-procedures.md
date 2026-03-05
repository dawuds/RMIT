# Model Risk Management Procedures

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Framework Reference** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause(s)** | 17.4 |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel and must not be disclosed, reproduced, or distributed without prior written approval from [Relevant Department Head].

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context and Policy Alignment](#2-regulatory-context-and-policy-alignment)
3. [Definitions and Terminology](#3-definitions-and-terminology)
4. [Scope and Applicability](#4-scope-and-applicability)
5. [Model Risk Management Process Flow](#5-model-risk-management-process-flow)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Tools and Systems Used](#7-tools-and-systems-used)
8. [Escalation Procedures](#8-escalation-procedures)
9. [Review and Update History](#9-review-and-update-history)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the overall intent of this document, the risk context it addresses, and how it supports the organization's technology risk governance obligations.*

This document establishes the procedures for identifying, assessing, managing, and monitoring risks associated with Artificial Intelligence (AI) and Machine Learning (ML) models deployed or under development by [Organization Name]. It provides a structured and repeatable framework to ensure that model-driven decisions remain accurate, fair, explainable, and aligned with applicable regulatory and ethical standards.

These procedures support [Organization Name]'s obligations under Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 17.4 governing model risk management, and complement the organization's broader Technology Risk Management Framework and Enterprise Risk Management Policy.

### 1.2 Objectives

The objectives of these procedures are to:

- Establish a consistent lifecycle management process for all AI/ML models used in business decision-making.
- Define clear ownership, accountability, and governance for model development, validation, deployment, and retirement.
- Ensure that model risks — including model error, misuse, data quality failures, and algorithmic bias — are identified and mitigated proactively.
- Facilitate transparency and auditability for internal and external review.
- Support ongoing compliance with BNM RMiT Clause 17.4 and related regulatory requirements.

### 1.3 Guiding Principles

*List the core principles underpinning this procedure. These should reflect regulatory expectations and organizational values.*

| # | Principle | Description |
|---|---|---|
| 1 | **Accountability** | All models must have a designated Model Owner responsible for oversight throughout the model lifecycle. |
| 2 | **Transparency** | Model logic, assumptions, limitations, and performance outcomes must be documented and explainable to stakeholders. |
| 3 | **Independence** | Model validation must be performed by a function independent of model development. |
| 4 | **Proportionality** | The rigor of model risk management controls shall be commensurate with the complexity, materiality, and risk exposure of the model. |
| 5 | **Continuous Monitoring** | Model performance shall be monitored on an ongoing basis to detect degradation, drift, or emerging risks. |
| 6 | **Ethical Use** | Models must be developed and deployed in a manner that avoids unlawful discrimination, respects data privacy, and supports fair outcomes. |

---

## 2. Regulatory Context and Policy Alignment

### 2.1 Regulatory Basis

*Reference the specific BNM RMiT clause(s) this procedure fulfills. Include brief summaries of regulatory expectations to assist authors and auditors.*

This procedure is established in accordance with the following regulatory obligations:

| Regulation / Policy | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 17.4 | Requires financial institutions to implement governance and controls over AI/ML models including model validation, performance monitoring, and risk assessment. |
| BNM Risk Management in Technology (RMiT) | Clause 17.1–17.3 | General technology risk governance obligations informing model oversight. |
| Personal Data Protection Act 2010 (PDPA) | Part II, Part III | Data used in model training and inference must comply with data protection principles including purpose limitation and data minimisation. |
| [Other applicable internal policy] | [Section reference] | [Summary of requirement] |

### 2.2 Internal Policy Alignment

*List internal policies that this procedure supports or operationalizes.*

This procedure operationalizes the following internal policies and frameworks:

- [Organization Name] Technology Risk Management Policy
- [Organization Name] Data Governance Policy
- [Organization Name] Information Security Policy
- [Organization Name] Enterprise Risk Management Framework
- [Organization Name] AI/ML Ethics and Responsible Use Policy *(if applicable)*

---

## 3. Definitions and Terminology

*Define key terms to ensure consistent interpretation across teams. Adjust definitions to reflect organizational or regulatory terminology in use.*

| Term | Definition |
|---|---|
| **Model** | A quantitative or algorithmic method, including statistical, machine learning, or AI-based techniques, applied to data inputs to generate outputs such as predictions, classifications, scores, or recommendations used in business decision-making. |
| **AI/ML Model** | A subset of models that use artificial intelligence or machine learning techniques, including supervised learning, unsupervised learning, reinforcement learning, deep learning, or generative AI methods. |
| **Model Risk** | The risk of adverse consequences arising from decisions based on incorrect, misused, or misinterpreted model outputs. Model risk includes model error risk, implementation risk, and misuse risk. |
| **Model Owner** | The business unit head or designated individual accountable for a model's fitness for purpose, ongoing performance, and risk management across its lifecycle. |
| **Model Developer** | The team or individual responsible for designing, building, testing, and documenting a model. |
| **Model Validator** | An independent function or individual responsible for assessing and challenging the conceptual soundness, assumptions, and performance of a model prior to production deployment. |
| **Model Inventory** | A centralized register of all active, retired, and in-development AI/ML models used within the organization. |
| **Model Drift** | Degradation in model performance over time due to changes in input data distributions, environmental conditions, or underlying relationships between variables. |
| **Challenger Model** | An alternative model developed or tested to compare against an existing production model (champion model) to assess relative performance. |
| **Shadow Mode** | A deployment approach where a new model runs in parallel with the production model without its outputs being used in live decisions, enabling performance comparison. |
| **Explainability** | The ability to describe and justify how a model arrived at a specific output in a manner understandable to the intended audience. |
| **Materiality Tier** | A classification of a model based on its financial exposure, regulatory impact, or operational criticality, used to calibrate the rigor of risk controls. |

---

## 4. Scope and Applicability

### 4.1 In-Scope Models

*Specify which types of models, systems, and organizational units fall within the scope of these procedures.*

These procedures apply to all AI/ML models that meet one or more of the following criteria:

- Used to inform or automate decisions that affect customers, counterparties, or regulatory reporting.
- Used in credit scoring, fraud detection, anti-money laundering (AML) analytics, customer segmentation, or pricing.
- Embedded within or integrated into production technology systems or platforms.
- Deployed by [Organization Name] or provided by a third-party vendor and used by [Organization Name] on behalf of its operations.
- Subject to model validation requirements under BNM RMiT Clause 17.4.

*List specific business functions or use cases in scope:*

| Business Domain | Example Model Use Cases |
|---|---|
| [e.g., Credit Risk] | [e.g., Credit scoring models, probability of default models] |
| [e.g., Fraud & AML] | [e.g., Transaction monitoring rules engines, anomaly detection] |
| [e.g., Customer Experience] | [e.g., Recommendation engines, churn prediction models] |
| [e.g., Treasury & Markets] | [e.g., Market risk pricing models, liquidity forecasting] |
| [e.g., Operations] | [e.g., Document processing automation, OCR/NLP pipelines] |

### 4.2 Out-of-Scope

The following are explicitly excluded from these procedures:

- Rule-based systems with no statistical learning component, unless integrated with an ML model.
- Simple lookup tables or deterministic calculation engines not meeting the definition of a model.
- Research and exploratory models not intended for production deployment.
- [Any other exclusions as determined by [Organization Name]]

### 4.3 Applicability to Third-Party and Vendor Models

*Explain how these procedures apply when models are procured from external vendors or operated by third parties.*

Where AI/ML models are developed, hosted, or operated by third-party vendors:

- The Model Owner retains accountability for risk oversight of vendor-provided models.
- Vendor models must be subject to appropriate due diligence and validation commensurate with their materiality tier prior to deployment.
- Contractual arrangements with vendors must include provisions for model documentation, performance reporting, and access for validation activities.
- Third-party model assessments must be documented in the Model Inventory.

---

## 5. Model Risk Management Process Flow

### 5.1 Model Lifecycle Overview

*Describe the end-to-end model lifecycle. Adapt stages to reflect the organization's actual development and deployment practices.*

The model risk management lifecycle consists of the following stages:

```
[Identification & Registration]
          ↓
[Development & Documentation]
          ↓
[Independent Validation]
          ↓
[Approval & Governance Sign-Off]
          ↓
[Deployment & Implementation]
          ↓
[Ongoing Monitoring & Review]
          ↓
[Modification or Retirement]
```

---

### 5.2 Stage 1: Model Identification and Registration

*Describe the process for identifying new models and registering them in the model inventory before development begins.*

**Trigger:** A new AI/ML model use case is proposed by a business unit, or an existing analytical tool is identified as meeting the definition of a model.

**Procedure:**

1. The proposing business unit completes a **Model Initiation Form** (refer to Appendix A) capturing:
   - Business purpose and use case description
   - Proposed model type and methodology
   - Data inputs and sources
   - Expected outputs and decision impact
   - Preliminary materiality assessment

2. The Model Owner submits the Model Initiation Form to [Model Risk Management Function / Risk Committee] for registration.

3. [Model Risk Management Function] assigns a unique **Model ID** and records the model in the **Model Inventory** (refer to Appendix B).

4. A **Materiality Tier** is assigned in accordance with the Materiality Assessment Criteria (refer to Section 5.2.1).

5. The model is classified as **Pre-Development** in the Model Inventory.

#### 5.2.1 Materiality Assessment Criteria

*Define how models are classified by risk tier. Adjust thresholds to reflect organizational risk appetite.*

| Materiality Tier | Classification Criteria | Validation Rigor |
|---|---|---|
| **Tier 1 — High** | Model outputs directly drive regulatory reporting, large-exposure credit decisions, or AML transaction blocking. Financial impact exceeds [RM threshold]. | Full independent validation mandatory. Board/senior management sign-off required. |
| **Tier 2 — Medium** | Model outputs inform (but do not solely determine) material business decisions. Financial impact between [RM threshold] and [RM threshold]. | Independent validation required. Department-level sign-off required. |
| **Tier 3 — Low** | Model outputs are advisory, operational, or low-impact. Financial impact below [RM threshold]. | Peer review acceptable. Model Owner sign-off required. |

---

### 5.3 Stage 2: Model Development and Documentation

*Describe requirements for model development practices and the documentation standards that must be met before a model proceeds to validation.*

**Trigger:** Model Initiation Form approved and Model ID assigned.

**Procedure:**

1. The Model Developer develops the model in accordance with [Organization Name]'s approved development standards and tooling (refer to Section 7).

2. Upon completion of development, the Model Developer prepares a **Model Development Document (MDD)** comprising:

   | MDD Section | Content Required |
   |---|---|
   | **1. Executive Summary** | Business purpose, intended use, and key design decisions. |
   | **2. Data Description** | Data sources, data quality assessments, feature engineering steps, and lineage documentation. |
   | **3. Methodology** | Model architecture, algorithm selection rationale, assumptions, and limitations. |
   | **4. Training & Testing Results** | Performance metrics, validation datasets used, backtesting results. |
   | **5. Explainability** | Feature importance, SHAP values, or other explainability outputs where applicable. |
   | **6. Known Limitations** | Identified weaknesses, edge cases, and scenarios where model performance may degrade. |
   | **7. Implementation Guide** | Technical specifications for integration, input/output schemas, and monitoring hooks. |
   | **8. Bias and Fairness Assessment** | Assessment of potential discriminatory outcomes and mitigating controls. |

3. The Model Developer conducts **unit testing** and **integration testing** in a non-production environment.

4. The completed MDD is submitted to the Model Validator alongside the model code, configuration files, and test datasets.

5. The model status in the Model Inventory is updated to **Under Validation**.

---

### 5.4 Stage 3: Independent Model Validation

*Describe the independent validation process, including scope, standards, and documentation requirements.*

**Trigger:** Completed Model Development Document and associated artefacts received by the Model Validator.

**Procedure:**

1. The **Model Validator** (or Independent Validation Function) reviews the MDD and conducts an independent validation encompassing:

   | Validation Activity | Description |
   |---|---|
   | **Conceptual Soundness Review** | Assessment of the theoretical basis, methodology selection, and assumptions. |
   | **Data Quality Review** | Independent assessment of input data quality, completeness, and representativeness. |
   | **Replication and Benchmarking** | Independent replication of model results and comparison against benchmark models or challenger models. |
   | **Sensitivity Analysis** | Testing model outputs under varied inputs and stress scenarios. |
   | **Explainability Review** | Assessment of whether model outputs can be adequately explained to business users and regulators. |
   | **Bias and Fairness Testing** | Testing for discriminatory or adverse outcomes across protected or regulated attributes. |
   | **Implementation Review** | Assessment of whether the model has been correctly implemented in the target environment. |
   | **Monitoring Framework Review** | Assessment of the adequacy of proposed performance monitoring metrics and thresholds. |

2. The Model Validator produces a **Model Validation Report (MVR)** documenting findings, risk ratings, and recommendations.

3. Validation findings are classified as:

   | Finding Classification | Description | Required Action |
   |---|---|---|
   | **Critical** | Fundamental flaw rendering the model unfit for use. | Model must not proceed to deployment. Development team must remediate and resubmit for full re-validation. |
   | **Major** | Significant deficiency requiring remediation. | Remediation plan with timelines must be agreed and implemented prior to deployment, or as a condition of limited deployment. |
   | **Minor** | Low-risk observation with recommended enhancement. | Remediation plan documented; may be addressed post-deployment within agreed timeframe. |
   | **Informational** | Advisory observation for awareness. | No mandatory action; Model Owner to consider and respond in writing. |

4. The Model Owner and Model Developer review the MVR, provide written responses to each finding, and submit a **Remediation Plan** for any Critical or Major findings.

5. Upon satisfactory remediation (or documented acceptance of residual risk for Minor findings), the Model Validator issues a **Validation Sign-Off**.

6. The model status in the Model Inventory is updated to **Validated — Pending Approval**.

---

### 5.5 Stage 4: Approval and Governance Sign-Off

*Describe the governance approval process before a model is permitted to enter production.*

**Trigger:** Model Validation Report completed with Validation Sign-Off obtained.

**Procedure:**

1. The Model Owner prepares an **Approval Submission Package** comprising:
   - Model Development Document (final version)
   - Model Validation Report
   - Remediation Plan and responses
   - Proposed monitoring framework and Key Risk Indicators (KRIs)
   - Confirmation of compliance with PDPA data handling requirements

2. The Approval Submission Package is presented to the relevant approval authority as determined by Materiality Tier:

   | Materiality Tier | Approval Authority |
   |---|---|
   | Tier 1 — High | [Risk Committee / Board Risk Committee] |
   | Tier 2 — Medium | [Chief Risk Officer / Technology Risk Committee] |
   | Tier 3 — Low | [Department Head / Model Owner] |

3. The approval authority reviews the submission and either:
   - **Approves** the model for production deployment (unconditionally or with conditions), or
   - **Defers** pending additional information or remediation, or
   - **Rejects** the model and requires re-development.

4. Approval decisions and any conditions attached are documented in the meeting minutes or approval register.

5. The model status in the Model Inventory is updated to **Approved — Pending Deployment**.

---

### 5.6 Stage 5: Deployment and Implementation

*Describe the controls and steps required to deploy an approved model into the production environment.*

**Trigger:** Formal approval obtained from the relevant approval authority.

**Procedure:**

1. The Model Owner coordinates with [IT Operations / Technology Team] to plan the production deployment.

2. A **Deployment Checklist** (refer to Appendix C) must be completed prior to go-live, covering:
   - Confirmation of production environment readiness
   - Data pipeline connectivity and testing
   - User acceptance testing (UAT) sign-off
   - Monitoring dashboard and alert configuration
   - Rollback plan documented and tested
   - Staff training completed (where applicable)

3. Where appropriate, the model is first deployed in **Shadow Mode** for a defined observation period of [X weeks/months] before live decision-making is enabled.

4. Post-deployment, the **Deployment Confirmation** is recorded in the Model Inventory, including:
   - Production deployment date
   - System/platform where model is deployed
   - Responsible technology owner
   - Monitoring start date

5. The model status in the Model Inventory is updated to **Active — Production**.

---

### 5.7 Stage 6: Ongoing Monitoring and Periodic Review

*Describe the ongoing monitoring activities required to detect model drift, performance degradation, and emerging risks in production models.*

**Trigger:** Model enters production. Monitoring is continuous from deployment date.

#### 5.7.1 Ongoing Monitoring

The Model Owner is responsible for ensuring the following monitoring activities are performed:

| Monitoring Activity | Frequency | Responsible Party | Threshold / Trigger |
|---|---|---|---|
| **Performance Metric Monitoring** | [Monthly / Quarterly] | Model Owner / Data Science Team | Metric breach of defined KRI thresholds |
| **Data Quality Monitoring** | [Monthly] | Data Owner / Model Owner | Missing data, distribution shift, or data pipeline failures |
| **Model Drift Detection** | [Quarterly] | Model Developer / Validator | Population Stability Index (PSI) exceeds [threshold] |
| **Outcome Analysis / Back-testing** | [Quarterly / Semi-Annual] | Model Owner | Predicted vs. actual outcomes divergence |
| **Bias and Fairness Monitoring** | [Semi-Annual] | Model Owner / Compliance | Adverse impact detected on protected groups |
| **Volume and Usage Monitoring** | [Monthly] | Technology Owner | Model usage deviating materially from intended design |

#### 5.7.2 Periodic Review

In addition to ongoing monitoring, all active models are subject to **Periodic Review**:

| Materiality Tier | Review Frequency |
|---|---|
| Tier 1 — High | Annual |
| Tier 2 — Medium | Annual |
| Tier 3 — Low | Biennial, or upon significant change |

The Periodic Review shall assess:

- Whether the model continues to perform within acceptable thresholds.
- Whether the original use case, data inputs, and business environment remain valid.
- Whether new regulatory requirements or organizational policies necessitate model updates.
- Whether the model remains aligned with BNM RMiT Clause 17.4 obligations.
- Remediation status of any outstanding findings from prior validation cycles.

Periodic Review findings are documented in a **Periodic Review Report** and submitted to the appropriate approval authority for noting or decision.

---

### 5.8 Stage 7: Model Modification or Retirement

#### 5.8.1 Model Modification

*Describe the change management process when a model is materially changed after deployment.*

**Trigger:** A proposed change to a model's methodology, data inputs, parameters, or deployment configuration.

1. The Model Owner assesses the proposed change using the **Model Change Impact Assessment** (refer to Appendix D) to determine whether the change is:

   | Change Classification | Description | Required Process |
   |---|---|---|
   | **Material Change** | Change to core methodology, algorithm, or training data that may alter model behaviour or risk profile. | Full re-validation required. Return to Stage 3. |
   | **Minor Change** | Routine parameter recalibration, threshold adjustment, or data pipeline update that does not alter model methodology. | Expedited review by Model Validator. Updated documentation required. |
   | **Patch / Bug Fix** | Correction of a technical defect not affecting model logic or outputs. | Model Owner sign-off with documented impact assessment. |

2. All changes are recorded in the **Model Change Log** in the Model Inventory.

#### 5.8.2 Model Retirement

**Trigger:** Model is no longer used in production, has been superseded, or has been found unfit for continued use.

1. The Model Owner submits a **Model Retirement Request** documenting the reason for retirement and confirming that downstream systems and processes have been updated.

2. [Model Risk Management Function] archives the model documentation and updates the Model Inventory status to **Retired**.

3. Retired model artefacts (code, documentation, training data references) are retained in accordance with [Organization Name]'s record retention policy for a minimum of [X years].

---

## 6. Roles and Responsibilities

### 6.1 RACI Matrix

*This RACI matrix defines accountability for each key activity in the model risk management lifecycle. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

*Adjust role titles to reflect the organization's actual governance structure.*

| Activity | Model Owner | Model Developer | Model Validator | Chief Risk Officer | Technology Risk Committee | Compliance | IT Operations |
|---|---|---|---|---|---|---|---|
| **Model identification and registration** | A/R | R | I | I | I | C | I |
| **Materiality tier assignment** | C | I | R | A | I | C | I |
| **Model development and MDD preparation** | A | R | I | I | I | C | I |
| **Data quality and lineage documentation** | C | R | C | I | I | I | I |
| **Independent model validation** | C | C | R/A | I | I | C | I |
| **Validation finding remediation** | A | R | C | I | I | I | I |
| **Governance approval (Tier 1)** | R | I | C | C | A | C | I |
| **Governance approval (Tier 2)** | R | I | C | A | I | C | I |
| **Governance approval (Tier 3)** | A/R | I | C | I | I | I | I |
| **Production deployment** | A | C | I | I | I | I | R |
| **Ongoing performance monitoring** | A/R | C | I | I | I | I | C |
| **Periodic model review** | A | R | R | I | I | C | I |
| **Model change impact assessment** | A/R | R | C | I | I | C | I |
| **Model retirement** | A/R | C | I | I | I | I | C |
| **Model Inventory maintenance** | C | C | C | I | I | I | I |
| **Regulatory reporting (if required)** | C | I | C | A | C | R | I |
| **Escalation of critical model issues** | R | C | R | A | I | C | I |

### 6.2 Role Descriptions

*Provide brief descriptions of key roles to ensure clarity of expectations.*

**Model Owner**
The Model Owner is the designated business unit head or senior manager accountable for a model throughout its lifecycle. The Model Owner is responsible for ensuring the model is used appropriately, monitored continuously, and remains fit for its intended purpose.

**Model Developer**
The Model Developer is the data science, analytics, or technology team responsible for designing, building, testing, and maintaining the technical implementation of a model. The Model Developer prepares the Model Development Document and supports validation activities.

**Model Validator**
The Model Validator (or Independent Validation Function) performs independent challenge and assessment of models prior to production deployment and during periodic reviews. The Model Validator must be independent of the model development function and have no conflict of interest in the model's outcomes.

**Chief Risk Officer (CRO)**
The CRO provides senior management oversight of the model risk management framework and is the approval authority for Tier 2 models. The CRO escalates material model risk concerns to the Board Risk Committee as appropriate.

**Technology Risk Committee**
The Technology Risk Committee provides governance oversight of technology and model risks, serves as the approval authority for Tier 1 models, and reviews periodic model risk reporting.

**Compliance Function**
The Compliance Function advises on regulatory requirements applicable to model design, data use, and output fairness, and supports assessment of PDPA and other legal obligations.

**IT Operations**
IT Operations is responsible for the technical deployment, infrastructure management, and operational monitoring of models in the production environment.

---

## 7. Tools and Systems Used

### 7.1 Approved Model Development Tools

*List the tools, platforms, and environments approved for use in model development, validation, and monitoring. Ensure tools listed have been assessed through the organization's technology risk management process.*

| Tool / Platform | Purpose | Approved Version(s) | Owner |
|---|---|---|---|
| [e.g., Python] | Model development and data analysis | [e.g., 3.10+] | [Technology Team] |
| [e.g., R] | Statistical modelling and validation | [e.g., 4.x] | [Technology Team] |
| [e.g., Jupyter Notebook / JupyterLab] | Development and experimentation environment | [Version] | [Technology Team] |
| [e.g., MLflow] | Experiment tracking, model registry, and lineage | [Version] | [Technology Team] |
| [e.g., Apache Spark / Databricks] | Large-scale data processing and feature engineering | [Version] | [Technology Team] |
| [e.g., SAS] | Statistical analysis and regulatory model development | [Version] | [Technology Team] |
| [e.g., Git / GitHub / Bitbucket] | Version control for model code | [Version] | [Technology Team] |
| [e.g., JIRA / ServiceNow] | Model change management and issue tracking | [Version] | [Technology Team] |
| [e.g., Confluence / SharePoint] | Model documentation repository | [Version] | [Technology Team] |
| [Internal Model Inventory System] | Centralized model register | [Version] | [Model Risk Function] |

### 7.2 Model Monitoring and Observability Tools

| Tool / Platform | Monitoring Capability | Responsible Team |
|---|---|---|
| [e.g., Grafana / Kibana] | Model performance dashboards and alerting | [Technology Team] |
| [e.g., Evidently AI / WhyLabs] | Data drift and model drift detection | [Data Science Team] |
| [e.g., Custom Internal Dashboard] | Business KRI and outcome monitoring | [Model Owner] |

### 7.3 Data Sources and Platforms

| Data Source | Description | Data Owner | Data Classification |
|---|---|---|---|
| [e.g., Core Banking System] | [Customer transaction data] | [Data Owner Name/Team] | [Confidential / Restricted] |
| [e.g., Credit Bureau] | [External credit data] | [Data Owner Name/Team] | [Confidential] |
| [e.g., Data Warehouse] | [Aggregated analytical datasets] | [Data Owner Name/Team] | [Confidential] |
| [Add rows as applicable] | | | |

### 7.4 Tool Governance

All tools used in model development, validation, or deployment must:

- Be approved through [Organization Name]'s technology procurement and risk assessment process.
- Be subject to vulnerability management and patching in accordance with the Information Security Policy.
- Be used only by personnel with appropriate role-based access controls.
- Where cloud-based tools are used, comply with BNM's outsourcing and cloud requirements and [Organization Name]'s Cloud Risk Policy.

---

## 8. Escalation Procedures

### 8.1 Escalation Framework

*Define clear escalation paths for model risk events, performance breaches, and governance failures. Escalation should be proportionate to the severity and materiality of the event.*

The following escalation framework applies to all model risk events and significant findings arising from monitoring, validation, or production operations.

### 8.2 Escalation Triggers

The following events shall trigger escalation in accordance with Section 8.3:

| Trigger | Severity | Initial Escalation Target |
|---|---|---|
| Critical validation finding identified that renders a model unfit for use | Critical | Model Owner → CRO within **24 hours** |
| Production model breach of Tier 1 KRI threshold | High | Model Owner → CRO within **48 hours** |
| Systemic data quality failure affecting model inputs | High | Model Owner → Technology Risk Lead within **48 hours** |
| Model producing discriminatory or harmful outputs detected in production | Critical | Model Owner → CRO + Compliance within **24 hours** |
| Unauthorized model modification or deployment | Critical | Model Owner → CRO + Information Security within **24 hours** |
| Production model breach of Tier 2 KRI threshold | Medium | Model Owner → Department Head within **5 business days** |
| Repeated Minor validation findings indicating systemic development weaknesses | Medium | Model Validator → CRO within **10 business days** |
| Failure to complete Periodic Review within required timeframe | Low | Model Owner → Technology Risk Committee at next scheduled meeting |
| Third-party vendor model performance deterioration | High/Medium | Model Owner → CRO / Vendor Management as appropriate |

### 8.3 Escalation Levels

**Level 1 — Model Owner Response**
- Scope: Initial investigation, containment, and assessment.
- Timeframe: Immediate to 48 hours depending on severity.
- Action: Document the issue, assess materiality and impact, initiate remediation or suspension of model use if warranted, notify relevant parties.

**Level 2 — Department Head / Technology Risk Lead**
- Scope: Management review and decision-making authority for Medium-severity events.
- Timeframe: Within 5 business days.
- Action: Review Model Owner's assessment, authorize remediation plan, determine whether further escalation is required.

**Level 3 — Chief Risk Officer**
- Scope: Senior management oversight for High and Critical events.
- Timeframe: Within 24–48 hours for Critical/High events.
- Action: Assess enterprise risk impact, authorize model suspension or emergency remediation, determine regulatory notification obligations, report to Board Risk Committee if warranted.

**Level 4 — Board Risk Committee / Regulatory Notification**
- Scope: Material model risk events with enterprise-wide, customer, or regulatory impact.
- Timeframe: As required by BNM incident notification requirements.
- Action: Board-level awareness and oversight, regulatory notification to BNM in accordance with reporting obligations, external communication if required.

### 8.4 Escalation Communication Requirements

For all escalations at Level 2 and above, the following documentation must be prepared:

- **Incident Notification** describing the trigger event, affected model(s), and preliminary impact assessment.
- **Status Updates** at intervals appropriate to the severity.
- **Post-Incident Report** upon resolution, covering root cause analysis, remediation actions taken, and control improvements implemented.

All escalation communications and decisions must be documented and retained in accordance with [Organization Name]'s record retention policy.

### 8.5 Emergency Model Suspension

Where a model presents an immediate risk of material harm, financial loss, or regulatory breach, the Model Owner or CRO may authorize **Emergency Model Suspension** without prior governance approval. The following steps apply:

1. Model Owner or CRO authorizes suspension verbally, confirmed in writing within [4 hours].
2. IT Operations suspends or disables model outputs in the production environment.
3. Model Owner notifies all affected downstream users and systems.
4. Model Owner prepares an Emergency Suspension Report within [2 business days].
5. Full post-incident review is conducted and presented to Technology Risk Committee within [15 business days].

---

## 9. Review and Update History

### 9.1 Procedure Review Schedule

*This document shall be reviewed in accordance with the following schedule. Reviews should be brought forward in response to significant regulatory changes, material model risk events, or organizational restructuring.*

| Review Trigger | Review Frequency | Review Owner |
|---|---|---|
| Scheduled periodic review | Annual | [Relevant Department Head] |
| Significant change to BNM RMiT or other applicable regulation | Upon issuance | Compliance + Model Risk Function |
| Material model risk incident | Within 30 days of incident closure | CRO + Model Owner |
| Significant organizational restructuring affecting model governance | Upon occurrence | [Relevant Department Head] |
| Introduction of a new AI/ML technology or methodology | Upon occurrence | Model Risk Function |

### 9.2 Version History

*Record all revisions to this document. Maintain this log for audit purposes.*

| Version | Date | Author | Section(s) Changed | Summary of Changes | Approved By |
|---|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | All | Initial document creation | [Approved By] |
| [1.1] | [Date] | [Author Name] | [Section X] | [Description of change] | [Approved By] |
| [2.0] | [Date] | [Author Name] | [All / Major sections] | [Annual review — major revision] | [Approved By] |

### 9.3 Approval Sign-Off

*All versions of this document require formal sign-off by the designated approvers. Complete this table upon each approval.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner — [Relevant Department Head] | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| Head of Compliance | [Name] | __________________ | [Date] |
| Chief Technology Officer / Head of Technology | [Name] | __________________ | [Date] |
| [Additional approver as required] | [Name] | __________________ | [Date] |

---

## 10. References

### 10.1 Regulatory References

| Document | Issuing Authority | Relevant Clause(s) | Description |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 17.4 | Model risk management requirements for AI/ML models used in financial institutions. |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 17.1–17.3 | General technology risk governance obligations. |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Part II, Part III | Data protection principles applicable to training data and model outputs involving personal data. |
| [BNM Policy Document on Outsourcing] | Bank Negara Malaysia (BNM) | [Relevant clauses] | Applicable where AI/ML models are operated by third parties or cloud service providers. |
| [Other BNM Policy Document] | Bank Negara Malaysia (BNM) | [Relevant clauses] | [Description] |

### 10.2 Internal References

| Document | Document ID | Owner |
|---|---|---|
| Technology Risk Management Policy | [Document ID] | [Owner] |
| Data Governance Policy | [Document ID] | [Owner] |
| Information Security Policy | [Document ID] | [Owner] |
| Enterprise Risk Management Framework | [Document ID] | [Owner] |
| AI/ML Ethics and Responsible Use Policy | [Document ID] | [Owner] |
| Model Inventory Procedures | [Document ID] | [Owner] |
| Third-Party Risk Management Policy | [Document ID] | [Owner] |
| Incident Management Policy | [Document ID] | [Owner] |

---

## 11. Appendices

### Appendix A: Model Initiation Form

*This form must be completed by the proposing business unit and submitted to [Model Risk Management Function] for all new AI/ML model use cases prior to commencement of development.*

---

**SECTION 1: Business Unit and Requestor Details**

| Field | Details |
|---|---|
| Business Unit | [Business Unit Name] |
| Model Owner (Name and Title) | [Name, Title] |
| Date of Submission | [Date] |
| Requested Go-Live Date | [Date] |

**SECTION 2: Model Description**

| Field | Details |
|---|---|
| Proposed Model Name | [Model Name] |
| Business Purpose | [Describe the business problem this model will address] |
| Intended Use and Decision Impact | [Describe how model outputs will be used in business decisions] |
| Proposed Model Type / Methodology | [e.g., Logistic regression, gradient boosting, neural network, NLP, etc.] |
| Primary Data Inputs | [List key data sources and variables] |
| Expected Model Outputs | [e.g., Score, classification, probability, recommendation] |

**SECTION 3: Preliminary Risk Assessment**

| Field | Details |
|---|---|
| Estimated financial exposure or impact | [RM amount / qualitative description] |
| Regulatory reporting implications | [Yes / No — if Yes, describe] |
| Customer-facing impact | [Yes / No — if Yes, describe] |
| Personal data involved | [Yes / No — PDPA implications?] |
| Third-party / vendor involvement | [Yes / No — if Yes, vendor name] |

**SECTION 4: Declaration**

I confirm that the information provided above is accurate and complete to the best of my knowledge, and that I accept accountability as Model Owner for this model.

| Name | Title | Signature | Date |
|---|---|---|---|
| [Name] | [Title] | __________________ | [Date] |

*For Model Risk Management Function Use Only:*

| Field | Details |
|---|---|
| Model ID Assigned | [Model ID] |
| Materiality Tier Assigned | [Tier 1 / Tier 2 / Tier 3] |
| Date Registered | [Date] |
| Registered by | [Name] |

---

### Appendix B: Model Inventory — Field Definitions

*The Model Inventory is the centralized register of all AI/ML models within [Organization Name]. The following fields must be maintained for each model record.*

| Field | Description | Mandatory |
|---|---|---|
| Model ID | Unique identifier assigned at registration | Yes |
| Model Name | Descriptive name of the model | Yes |
| Business Domain | Business unit or function the model serves | Yes |
| Model Owner | Accountable individual (Name and Title) | Yes |
| Model Developer | Team or individual who developed the model | Yes |
| Model Validator | Individual or team who performed validation | Yes |
| Model Type / Methodology | Algorithm or technique used | Yes |
| Materiality Tier | Tier 1, 2, or 3 | Yes |
| Current Status | Pre-Development / Under Development / Under Validation / Approved / Active — Production / Under Review / Retired | Yes |
| Registration Date | Date model was first registered | Yes |
| Validation Date | Date validation was completed | Yes |
| Approval Date | Date governance approval was granted | Yes |
| Production Deployment Date | Date model went live in production | Yes |
| Last Periodic Review Date | Date of most recent periodic review | Yes |
| Next Periodic Review Date | Scheduled date of next periodic review | Yes |
| Deployment Platform / System | System or platform where model is deployed | Yes |
| Key Data Sources | Primary data inputs | Yes |
| Known Limitations | Summary of documented model limitations | Yes |
| Outstanding Findings | Number and classification of open validation findings | Yes |
| Retirement Date | Date model was retired (if applicable) | Conditional |
| Notes | Any additional relevant information | No |

---

### Appendix C: Model Deployment Checklist

*This checklist must be completed and signed off by the Model Owner and IT Operations prior to production deployment of any approved model.*

**Model Name:** [Model Name]
**Model ID:** [Model ID]
**Deployment Date:** [Date]

| # | Checklist Item | Status | Sign-Off | Date |
|---|---|---|---|---|
| 1 | Governance approval obtained and documented | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 2 | Model Development Document (final version) archived | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 3 | Model Validation Report archived | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 4 | All Critical and Major validation findings remediated | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 5 | Production environment readiness confirmed | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 6 | Data pipeline connectivity tested end-to-end | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 7 | User Acceptance Testing (UAT) completed and signed off | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 8 | Model monitoring dashboard configured and tested | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 9 | KRI thresholds and alert configurations set | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 10 | Rollback plan documented and tested | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 11 | Staff training completed for model users | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 12 | PDPA data handling requirements confirmed | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 13 | Shadow mode observation period completed (if applicable) | ☐ Complete / ☐ N/A | [Name] | [Date] |
| 14 | Model Inventory updated with deployment details | ☐ Complete / ☐ N/A | [Name] | [Date] |

**Overall Deployment Approval:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Model Owner | [Name] | __________________ | [Date] |
| IT Operations Lead | [Name] | __________________ | [Date] |

---

### Appendix D: Model Change Impact Assessment Template

*This template must be completed by the Model Owner when a proposed change to an active production model is being assessed. The outcome of this assessment determines the required change management process.*

**Model Name:** [Model Name]
**Model ID:** [Model ID]
**Change Requested By:** [Name and Title]
**Date of Assessment:** [Date]

**SECTION 1: Proposed Change Description**

| Field | Details |
|---|---|
| Description of Proposed Change | [Describe the change in detail] |
| Business Justification | [Why is this change required?] |
| Proposed Implementation Date | [Date] |

**SECTION 2: Change Impact Assessment**

| Assessment Question | Response |
|---|---|
| Does the change alter the core model algorithm or methodology? | Yes / No |
| Does the change alter the training data or feature set? | Yes / No |
| Does the change alter model outputs or their interpretation? | Yes / No |
| Is the change expected to materially alter model performance metrics? | Yes / No |
| Does the change introduce new data sources not previously validated? | Yes / No |
| Does the change affect any regulatory reporting outputs? | Yes / No |
| Does the change have potential customer-facing impact? | Yes / No |

**SECTION 3: Change Classification Decision**

Based on the above assessment, this change is classified as:

- ☐ **Material Change** — Full re-validation required. Return to Stage 3 of the Model Lifecycle.
- ☐ **Minor Change** — Expedited validation review required. Updated documentation required.
- ☐ **Patch / Bug Fix** — Model Owner sign-off with documented impact assessment. No re-validation required.

**Justification for Classification:**
[Provide rationale for the classification decision.]

| Role | Name | Signature | Date |
|---|---|---|---|
| Model Owner | [Name] | __________________ | [Date] |
| Model Validator (if expedited review) | [Name] | __________________ | [Date] |

---

### Appendix E: Key Risk Indicators (KRI) — Example Framework

*The following provides an illustrative KRI framework for model performance monitoring. Actual KRI thresholds must be determined during model development and approved as part of the governance sign-off process.*

| KRI | Metric | Green (Acceptable) | Amber (Watch) | Red (Breach — Escalate) | Monitoring Frequency |
|---|---|---|---|---|---|
| Model Accuracy | [e.g., F1 Score / AUC-ROC] | [> 0.85] | [0.75–0.85] | [< 0.75] | Monthly |
| Population Stability Index (PSI) | PSI score on key features | [< 0.10] | [0.10–0.25] | [> 0.25] | Quarterly |
| Prediction Bias | Mean prediction error | [Within ±X%] | [±X% to ±Y%] | [> ±Y%] | Monthly |
| Data Completeness | % of required fields populated | [> 98%] | [95–98%] | [< 95%] | Monthly |
| Outcome Back-test | Predicted vs. actual divergence | [Within ±X%] | [±X% to ±Y%] | [> ±Y%] | Quarterly |
| Fairness Metric | Disparate impact ratio across demographic groups | [0.80–1.25] | [0.70–0.80 or 1.25–1.30] | [< 0.70 or > 1.30] | Semi-Annual |
| Model Latency | Average inference time (ms) | [< Xms] | [Xms–Yms] | [> Yms] | Monthly |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] | [Document ID] | Version 1.0**
**This document is subject to annual review or review upon significant change.**