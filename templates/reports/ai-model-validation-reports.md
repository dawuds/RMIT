# AI Model Validation Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID, e.g., TECH-RISK-RPT-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Validation Period** | [Start Date] to [End Date] |
| **Report Date** | [Report Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Quarterly] |
| **Approved By** | [Approved By — Name and Designation] |
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 17.4 |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for the use of authorised personnel within [Organization Name]. It must not be disclosed to any third party without prior written approval from the document owner. Unauthorised disclosure may constitute a breach of regulatory obligations under the Financial Services Act 2013 (FSA 2013), Islamic Financial Services Act 2013 (IFSA 2013), and the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Scope and Methodology](#2-scope-and-methodology)
3. [Key Findings and Observations](#3-key-findings-and-observations)
4. [Risk Ratings and Prioritisation](#4-risk-ratings-and-prioritisation)
5. [Recommendations and Action Items](#5-recommendations-and-action-items)
6. [Management Response](#6-management-response)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Executive Summary

*Provide a concise, senior-management-level overview of the AI model(s) validated during the reporting period, the overall validation outcome, and the most critical findings requiring immediate attention. This section should be self-contained and not exceed two pages.*

### 1.1 Overview of AI Models Validated

During the validation period of **[Start Date]** to **[End Date]**, the following AI model(s) were subject to independent validation as part of [Organization Name]'s AI model governance programme in accordance with BNM RMiT Clause 17.4:

| Model ID | Model Name | Business Domain | Model Type | Status |
|---|---|---|---|---|
| [MDL-001] | [Model Name] | [e.g., Credit Scoring] | [e.g., Gradient Boosting] | [Active / In Development / Decommissioned] |
| [MDL-002] | [Model Name] | [e.g., Fraud Detection] | [e.g., Neural Network] | [Active / In Development / Decommissioned] |
| [MDL-003] | [Model Name] | [e.g., AML Monitoring] | [e.g., Logistic Regression] | [Active / In Development / Decommissioned] |

### 1.2 Overall Validation Outcome

*Summarise the aggregate risk posture across all models validated. Indicate whether models are recommended for continued deployment, conditional approval, or remediation prior to further use in customer-facing decisions.*

| Validation Outcome | Count |
|---|---|
| **Approved — No Material Issues** | [N] |
| **Approved with Conditions** | [N] |
| **Requires Remediation Prior to Deployment** | [N] |
| **Decommissioning Recommended** | [N] |
| **Total Models Validated** | [N] |

### 1.3 Summary of Critical Findings

*List the top three to five findings of highest risk significance. Each finding should reference the relevant model and the associated risk category.*

- **[Finding 1]:** [Brief description of finding, model affected, and risk implication.]
- **[Finding 2]:** [Brief description of finding, model affected, and risk implication.]
- **[Finding 3]:** [Brief description of finding, model affected, and risk implication.]

### 1.4 Certifying Statement

This report has been prepared by the independent model validation function of [Organization Name] and reflects the findings of validation activities conducted during the stated validation period. The validation team operated independently of model development and business ownership functions in accordance with the three-lines-of-defence framework.

---

## 2. Scope and Methodology

*Describe the boundaries of the validation exercise, the models included and excluded, the validation techniques applied, and any material limitations that may affect the completeness of findings. This section provides the evidentiary foundation for the findings in Section 3.*

### 2.1 Validation Scope

#### 2.1.1 Models in Scope

The following criteria were used to determine models included in this validation cycle:

- AI models used directly or indirectly in **customer-facing decisions**, including credit approval, product eligibility, fraud disposition, and pricing.
- Models scheduled for **quarterly review** under the AI Model Inventory as of [Review Date].
- Models flagged for **out-of-cycle review** due to material performance degradation or significant changes to underlying data or business context.

Specific exclusions from scope:

| Excluded Model / Domain | Reason for Exclusion |
|---|---|
| [Model Name / Domain] | [e.g., Under active redevelopment — deferred to next cycle] |
| [Model Name / Domain] | [e.g., Decommissioned prior to validation window] |

#### 2.1.2 Validation Objectives

The validation exercise was conducted to assess the following properties of each AI model in scope:

1. **Conceptual soundness** — whether the model's theoretical basis, design choices, and assumptions are appropriate for the intended use case.
2. **Data integrity and representativeness** — whether training, validation, and production data are accurate, complete, and representative of the target population.
3. **Performance and accuracy** — whether the model meets defined performance thresholds under current operating conditions.
4. **Stability and robustness** — whether the model performs consistently over time and under stressed or edge-case scenarios.
5. **Fairness and bias** — whether the model produces equitable outcomes across protected demographic attributes where applicable.
6. **Explainability and interpretability** — whether model outputs are sufficiently interpretable for the purpose of customer communication and regulatory enquiry.
7. **Governance and controls** — whether model monitoring, change management, and escalation controls are operating effectively.

### 2.2 Validation Methodology

*Describe the specific quantitative and qualitative techniques applied during validation. Reference any internal standards or external benchmarks used to calibrate findings.*

#### 2.2.1 Document and Evidence Review

- Review of model development documentation, including Model Development Reports (MDRs), feature engineering logs, and training artefacts.
- Review of prior validation reports and tracking of previously raised recommendations.
- Assessment of model change logs and Material Model Change notifications submitted since the last validation cycle.

#### 2.2.2 Quantitative Performance Testing

The following statistical tests and performance metrics were applied, as applicable per model type:

| Test / Metric | Purpose | Threshold / Benchmark |
|---|---|---|
| Gini Coefficient / AUROC | Discriminatory power | [e.g., ≥ 0.65 per internal policy] |
| Kolmogorov-Smirnov (KS) Statistic | Score distribution separation | [e.g., ≥ 0.25] |
| Population Stability Index (PSI) | Input feature drift | [e.g., < 0.10 Stable; 0.10–0.25 Monitor; > 0.25 Investigate] |
| Characteristic Stability Index (CSI) | Variable-level drift | [e.g., < 0.10 Stable] |
| Precision / Recall / F1 Score | Classification performance | [Per model-specific threshold] |
| Expected Calibration Error (ECE) | Probability calibration | [Per model-specific threshold] |
| Confusion Matrix Analysis | Error distribution review | [N/A — qualitative review] |
| Shapley Value (SHAP) Analysis | Feature attribution and explainability | [N/A — qualitative review] |

#### 2.2.3 Stress and Scenario Testing

- Out-of-time (OOT) validation using holdout data from [Period].
- Stress testing using [e.g., macroeconomic downturn scenario / synthetic adversarial inputs].
- Sensitivity analysis to assess model behaviour under variation of key input features.

#### 2.2.4 Fairness and Bias Assessment

- Disparate impact analysis across [list protected attributes assessed, e.g., age group, gender] where permissible under PDPA 2010.
- Assessment of proxy variable risk — identification of input features that may correlate with protected characteristics.

#### 2.2.5 Governance and Controls Assessment

- Walkthrough of model monitoring dashboard with the model owner.
- Review of alert logs and escalation records for the validation period.
- Assessment of model access controls and change management procedures.

### 2.3 Limitations and Caveats

*Document any constraints that limit the completeness or reliability of validation findings. These must be transparently reported to enable risk-owners to appropriately contextualise findings.*

| Limitation | Impact on Findings | Mitigating Action Taken |
|---|---|---|
| [e.g., Production data access limited to aggregated extracts] | [e.g., Unable to conduct full individual-level bias analysis] | [e.g., Supplemented with aggregated demographic analysis] |
| [e.g., Model code was not made available for white-box review] | [e.g., Validation limited to black-box behavioural testing] | [e.g., Requested access escalated to model owner — see Finding F-003] |
| [e.g., Short OOT window due to recent model deployment] | [e.g., Temporal stability assessment is preliminary] | [e.g., Accelerated monitoring scheduled for next 90 days] |

---

## 3. Key Findings and Observations

*Document all material findings identified during the validation exercise. Each finding must be assigned a unique identifier, linked to the specific model, categorised by type, and substantiated with evidence. Findings must be reviewed by the relevant model owner prior to report finalisation.*

### 3.1 Findings Summary

| Finding ID | Model | Category | Title | Severity | Status |
|---|---|---|---|---|---|
| [F-001] | [MDL-001] | [Performance] | [Finding Title] | [Critical / High / Medium / Low] | [Open / Closed / In Progress] |
| [F-002] | [MDL-001] | [Data Quality] | [Finding Title] | [Critical / High / Medium / Low] | [Open / Closed / In Progress] |
| [F-003] | [MDL-002] | [Governance] | [Finding Title] | [Critical / High / Medium / Low] | [Open / Closed / In Progress] |
| [F-004] | [MDL-002] | [Fairness/Bias] | [Finding Title] | [Critical / High / Medium / Low] | [Open / Closed / In Progress] |
| [F-005] | [MDL-003] | [Explainability] | [Finding Title] | [Critical / High / Medium / Low] | [Open / Closed / In Progress] |

### 3.2 Detailed Finding Descriptions

*Each finding below follows a standardised structure to ensure consistency and traceability.*

---

#### Finding F-001: [Finding Title]

| Field | Detail |
|---|---|
| **Finding ID** | F-001 |
| **Model Affected** | [MDL-001 — Model Name] |
| **Category** | [Performance / Data Quality / Stability / Fairness / Explainability / Governance / Controls] |
| **Severity** | [Critical / High / Medium / Low] |
| **RMiT Reference** | Clause 17.4.[sub-clause if applicable] |
| **Status** | [Open / In Progress / Closed] |

**Observation:**

[Provide a factual description of the issue identified. Reference specific metrics, thresholds, or evidence. For example: "The AUROC for MDL-001 decreased from 0.72 (prior validation cycle) to 0.61 (current cycle), falling below the institution's minimum acceptable threshold of 0.65. The decline is consistent with drift in the [feature name] input distribution, as evidenced by a PSI of 0.31."]

**Evidence:**

- [Evidence item 1, e.g., Performance monitoring dashboard extract dated [Date] — see Appendix B]
- [Evidence item 2, e.g., PSI report for features [X], [Y], [Z] — see Appendix C]
- [Evidence item 3, e.g., Model monitoring alert log — Ticket [REF-XXXX]]

**Root Cause (if determined):**

[Describe the identified or suspected root cause. For example: "Significant shift in applicant demographic mix following [business event] resulted in the model scoring a population materially different from its training sample."]

**Recommendation:**

[State the specific, actionable recommendation. For example: "Model owner to conduct targeted model recalibration or retraining using data from [period]. Recalibrated model to be subject to expedited validation review prior to redeployment."]

**Target Remediation Date:** [Date]

**Finding Owner:** [Role / Name]

---

#### Finding F-002: [Finding Title]

| Field | Detail |
|---|---|
| **Finding ID** | F-002 |
| **Model Affected** | [MDL-001 — Model Name] |
| **Category** | [Category] |
| **Severity** | [Critical / High / Medium / Low] |
| **RMiT Reference** | Clause 17.4.[sub-clause if applicable] |
| **Status** | [Open / In Progress / Closed] |

**Observation:**

[Description of finding.]

**Evidence:**

- [Evidence item 1]
- [Evidence item 2]

**Root Cause (if determined):**

[Root cause description.]

**Recommendation:**

[Recommendation.]

**Target Remediation Date:** [Date]

**Finding Owner:** [Role / Name]

---

*[Repeat the above structure for each finding. Minimum one entry per finding listed in Section 3.1.]*

### 3.3 Carry-Forward Findings from Prior Cycle

*Document any findings from the previous validation cycle that remain open or partially remediated.*

| Finding ID (Prior) | Original Report | Title | Prior Severity | Current Status | Updated Commentary |
|---|---|---|---|---|---|
| [F-XXX] | [Prior Report ID] | [Finding Title] | [Severity] | [Open / Partially Remediated / Closed] | [Brief update on remediation progress] |
| [F-XXX] | [Prior Report ID] | [Finding Title] | [Severity] | [Open / Partially Remediated / Closed] | [Brief update on remediation progress] |

---

## 4. Risk Ratings and Prioritisation

*Provide the risk severity framework applied to findings in this report and the aggregate risk posture for each validated model. Risk ratings must be assigned consistently using the organisation's approved model risk taxonomy.*

### 4.1 Severity Rating Framework

| Severity | Definition | Required Response Timeline |
|---|---|---|
| **Critical** | Material deficiency that renders the model unfit for purpose or poses immediate risk of customer harm, regulatory breach, or financial loss. | Immediate escalation; model to be suspended or remediated before continued use. |
| **High** | Significant weakness that materially undermines model reliability or governance. Continued operation represents elevated risk. | Remediation plan required within 15 business days. |
| **Medium** | Moderate weakness that may degrade model performance or governance over time if unaddressed. | Remediation plan required within 45 business days. |
| **Low** | Minor observation or enhancement opportunity with limited immediate risk impact. | Action to be incorporated into next scheduled model review. |

### 4.2 Model-Level Risk Ratings

*The following aggregate risk rating is assigned to each model based on the severity and number of findings identified.*

| Model ID | Model Name | Aggregate Risk Rating | Validation Outcome | Rationale |
|---|---|---|---|---|
| [MDL-001] | [Model Name] | [Critical / High / Medium / Low] | [Approved / Conditionally Approved / Suspend Pending Remediation] | [Brief rationale, e.g., "One High finding related to performance degradation below threshold."] |
| [MDL-002] | [Model Name] | [Critical / High / Medium / Low] | [Approved / Conditionally Approved / Suspend Pending Remediation] | [Brief rationale] |
| [MDL-003] | [Model Name] | [Critical / High / Medium / Low] | [Approved / Conditionally Approved / Suspend Pending Remediation] | [Brief rationale] |

### 4.3 Risk Heat Map

*The following matrix illustrates the distribution of findings by likelihood of materialisation and severity of impact. Each cell references the relevant Finding ID(s).*

| | **Low Impact** | **Medium Impact** | **High Impact** | **Critical Impact** |
|---|---|---|---|---|
| **High Likelihood** | [Finding IDs] | [Finding IDs] | [Finding IDs] | [Finding IDs] |
| **Medium Likelihood** | [Finding IDs] | [Finding IDs] | [Finding IDs] | [Finding IDs] |
| **Low Likelihood** | [Finding IDs] | [Finding IDs] | [Finding IDs] | [Finding IDs] |

### 4.4 Trend Analysis

*Compare the current cycle's risk posture against the prior two cycles to identify whether the institution's AI model risk profile is improving, stable, or deteriorating.*

| Metric | [Q-2 Cycle] | [Q-1 Cycle] | [Current Cycle] | Trend |
|---|---|---|---|---|
| Total Findings | [N] | [N] | [N] | [↑ / ↓ / →] |
| Critical Findings | [N] | [N] | [N] | [↑ / ↓ / →] |
| High Findings | [N] | [N] | [N] | [↑ / ↓ / →] |
| Average Days to Remediate | [N days] | [N days] | [N days] | [↑ / ↓ / →] |
| Models with Aggregate Rating ≥ High | [N] | [N] | [N] | [↑ / ↓ / →] |

---

## 5. Recommendations and Action Items

*Consolidate all recommendations arising from Section 3 into a tracked action plan. Each action must be assigned an owner and a target date. This section serves as the basis for ongoing tracking through the model risk register.*

### 5.1 Consolidated Action Plan

| Action ID | Finding Ref | Recommendation | Priority | Action Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| [A-001] | [F-001] | [Action description] | [Critical / High / Medium / Low] | [Role / Name] | [Date] | [Not Started / In Progress / Completed] |
| [A-002] | [F-002] | [Action description] | [Critical / High / Medium / Low] | [Role / Name] | [Date] | [Not Started / In Progress / Completed] |
| [A-003] | [F-003] | [Action description] | [Critical / High / Medium / Low] | [Role / Name] | [Date] | [Not Started / In Progress / Completed] |
| [A-004] | [F-004] | [Action description] | [Critical / High / Medium / Low] | [Role / Name] | [Date] | [Not Started / In Progress / Completed] |
| [A-005] | [F-005] | [Action description] | [Critical / High / Medium / Low] | [Role / Name] | [Date] | [Not Started / In Progress / Completed] |

### 5.2 Systemic Recommendations

*In addition to finding-specific actions, document any systemic or programme-level recommendations arising from patterns observed across multiple models or validation cycles.*

1. **[Systemic Recommendation 1]:** [e.g., "Establish a centralised feature store to improve data lineage documentation and reduce risk of undocumented feature changes across models."] — *Recommended Owner: [Role]*

2. **[Systemic Recommendation 2]:** [e.g., "Implement automated PSI monitoring for all production models, with alert thresholds configured to trigger validation review at PSI > 0.10."] — *Recommended Owner: [Role]*

3. **[Systemic Recommendation 3]:** [e.g., "Develop a standardised explainability output template to ensure customer-facing explanation letters comply with PDPA data subject rights obligations."] — *Recommended Owner: [Role]*

---

## 6. Management Response

*This section records the formal response of model owners and senior management to the findings and recommendations in this report. Responses must be completed by model owners within [N] business days of draft report circulation and are incorporated into the final report prior to approval.*

### 6.1 Response Process

*Document the timeline and process for obtaining management responses.*

| Milestone | Date |
|---|---|
| Draft Report Issued to Model Owners | [Date] |
| Management Response Deadline | [Date] |
| Final Report Issued | [Date] |
| Report Approved by Head of Technology Risk | [Date] |

### 6.2 Model Owner Responses

---

#### Response to Finding F-001

**Finding:** [Finding Title]

**Model Owner:** [Name, Designation, Business Unit]

**Response:**

> *[Model owner to provide their formal response here. The response should: (a) confirm acceptance or dispute the finding; (b) describe the specific remediation actions planned; (c) confirm ownership and target date; and (d) identify any constraints or dependencies that may affect delivery of the remediation.]*

**Agreed Remediation Action:** [Description of agreed action]

**Committed Target Date:** [Date]

**Escalation Required:** [Yes / No — if Yes, state the escalation path]

---

#### Response to Finding F-002

**Finding:** [Finding Title]

**Model Owner:** [Name, Designation, Business Unit]

**Response:**

> *[Model owner response.]*

**Agreed Remediation Action:** [Description of agreed action]

**Committed Target Date:** [Date]

**Escalation Required:** [Yes / No]

---

*[Repeat for each finding requiring a management response.]*

### 6.3 Disputed Findings

*Document any findings that have been disputed by the model owner and the resolution process to be applied.*

| Finding ID | Basis of Dispute | Validation Team Position | Resolution Mechanism | Resolution Date |
|---|---|---|---|---|
| [F-XXX] | [Model owner's basis for dispute] | [Validation team's maintained position] | [e.g., Escalation to Model Risk Committee] | [Date] |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for the AI model validation process across the three lines of defence.*

### 7.1 RACI Matrix — AI Model Validation

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | Model Development Team | Model Owner (Business) | Head of Technology Risk | Model Validation Team | Chief Risk Officer | Board Risk Committee | Internal Audit |
|---|---|---|---|---|---|---|---|
| Maintain AI Model Inventory | R | A | C | I | I | I | I |
| Prepare Model Development Report | R | A | I | C | I | I | I |
| Notify of Material Model Changes | R | A | C | I | I | I | I |
| Conduct Independent Validation | I | C | A | R | I | I | I |
| Assign Risk Ratings to Findings | I | C | A | R | I | I | I |
| Provide Management Response | C | R/A | I | I | I | I | I |
| Approve Validation Report | I | C | R/A | C | I | I | I |
| Escalate Critical Findings | I | C | R | C | A | I | I |
| Report to Board / Committee | I | I | R | C | A | A | I |
| Track Remediation Progress | I | R | A | C | I | I | I |
| Conduct Annual Model Risk Review | I | C | R | A | C | C | C |
| Perform Independent Audit of Process | I | I | C | C | C | I | R/A |

### 7.2 Key Role Definitions

| Role | Responsibilities |
|---|---|
| **Model Owner (Business)** | Accountable for the fitness for purpose of the model in its intended business use case. Provides management response to findings and owns remediation delivery. |
| **Model Development Team** | Responsible for design, development, and documentation of the model. Supports validation by providing access to artefacts, data, and code. |
| **Head of Technology Risk** | Approves the validation report. Accountable for the institution's overall AI model risk framework. Escalates critical findings to senior management. |
| **Model Validation Team** | Conducts independent validation activities. Assigns risk ratings. Prepares and issues the validation report. Operates independently of model development. |
| **Chief Risk Officer** | Receives escalated reports. Accountable for aggregate model risk posture across the institution. Reports to the Board Risk Committee. |
| **Board Risk Committee** | Receives reporting on material model risk issues. Provides oversight and challenge. Approves model risk appetite. |
| **Internal Audit** | Provides independent assurance over the model validation process and governance framework on a periodic basis. |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Designation] | Initial document — first validation report for [reporting period]. |
| [1.1] | [Date] | [Author Name, Designation] | [Description of change, e.g., Updated Section 3.2 to incorporate model owner responses.] |
| [2.0] | [Date] | [Author Name, Designation] | [Description of change, e.g., Major revision following quarterly model re-validation.] |

### 8.2 Review Record

| Reviewer | Role | Review Date | Comments |
|---|---|---|---|
| [Name] | [e.g., Senior Model Validation Analyst] | [Date] | [e.g., Reviewed quantitative analysis and findings — no material changes required.] |
| [Name] | [e.g., Model Validation Lead] | [Date] | [e.g., Reviewed complete draft — recommended additional commentary in Section 4.4.] |
| [Name] | [e.g., Head of Technology Risk] | [Date] | [e.g., Final review and approval.] |

### 8.3 Approval Sign-Off

*By signing below, the approving parties confirm that this report accurately reflects the findings of the validation exercise conducted during the stated period and that the risk ratings assigned are consistent with the institution's model risk taxonomy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Lead Validation Analyst | [Name] | _________________________ | [Date] |
| Head of Model Validation | [Name] | _________________________ | [Date] |
| Head of Technology Risk | [Name] | _________________________ | [Date] |
| Chief Risk Officer (for Critical findings only) | [Name] | _________________________ | [Date] |

---

## 9. References

### 9.1 Regulatory References

| Reference | Document | Clause / Section | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology, Bank Negara Malaysia (2020) | Clause 17.4 | AI and machine learning model governance; validation requirements for AI models used in customer-facing decisions. |
| BNM RMiT | Risk Management in Technology, Bank Negara Malaysia (2020) | Clause 17.1–17.3 | Broader AI/ML governance framework context for which model validation is a component control. |
| FSA 2013 | Financial Services Act 2013 | Section 57, Schedule 7 | Technology risk management obligations for licensed financial institutions. |
| IFSA 2013 | Islamic Financial Services Act 2013 | Section 57, Schedule 7 | As above, for licensed Islamic financial institutions. |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 6 (Principles) | Obligations relating to automated decision-making processes using personal data, including AI scoring models. |
| BNM JDR | Joint Discussion Paper on Responsible AI (2023) | All | Responsible AI principles, including fairness, accountability, transparency, and ethics (FATE). |

### 9.2 Internal References

| Document ID | Document Title | Version | Location |
|---|---|---|---|
| [DOC-ID] | AI Model Risk Policy | [Version] | [Internal document repository link / path] |
| [DOC-ID] | AI Model Inventory | [Version] | [Internal document repository link / path] |
| [DOC-ID] | Model Development Standards | [Version] | [Internal document repository link / path] |
| [DOC-ID] | Technology Risk Management Framework | [Version] | [Internal document repository link / path] |
| [DOC-ID] | Model Monitoring Procedures | [Version] | [Internal document repository link / path] |
| [DOC-ID] | Prior AI Model Validation Report ([Period]) | [Version] | [Internal document repository link / path] |

---

## 10. Appendices

### Appendix A — AI Model Inventory Extract

*Provide an extract from the institution's AI Model Inventory for the models validated in this report, including metadata such as model version, deployment date, last update date, data sources, and intended use case.*

| Field | MDL-001 | MDL-002 | MDL-003 |
|---|---|---|---|
| Model Name | [Name] | [Name] | [Name] |
| Model Version | [Version] | [Version] | [Version] |
| Business Domain | [Domain] | [Domain] | [Domain] |
| Intended Use Case | [Description] | [Description] | [Description] |
| Model Type / Algorithm | [Type] | [Type] | [Type] |
| Development Date | [Date] | [Date] | [Date] |
| Production Deployment Date | [Date] | [Date] | [Date] |
| Last Retraining Date | [Date] | [Date] | [Date] |
| Training Data Period | [Period] | [Period] | [Period] |
| Primary Data Sources | [Sources] | [Sources] | [Sources] |
| Number of Features (Input) | [N] | [N] | [N] |
| Target Variable | [Variable] | [Variable] | [Variable] |
| Model Owner | [Name / Role] | [Name / Role] | [Name / Role] |
| Development Team | [Team] | [Team] | [Team] |
| Deployment Environment | [e.g., Production API] | [e.g., Batch scoring] | [e.g., Real-time decisioning] |
| Customer Impact | [High / Medium / Low] | [High / Medium / Low] | [High / Medium / Low] |
| Estimated Monthly Decision Volume | [N] | [N] | [N] |

---

### Appendix B — Performance Metrics Detail

*Provide full performance metric outputs for each model validated, including time-series data where available to illustrate performance trends.*

#### B.1 [MDL-001 — Model Name] — Performance Summary

| Metric | Training Set | Validation Set (In-Time) | Out-of-Time Test | Current Production (Period) | Threshold | Status |
|---|---|---|---|---|---|---|
| AUROC | [Value] | [Value] | [Value] | [Value] | [≥ X.XX] | [Pass / Fail] |
| Gini Coefficient | [Value] | [Value] | [Value] | [Value] | [≥ X.XX] | [Pass / Fail] |
| KS Statistic | [Value] | [Value] | [Value] | [Value] | [≥ X.XX] | [Pass / Fail] |
| Precision | [Value] | [Value] | [Value] | [Value] | [≥ X.XX] | [Pass / Fail] |
| Recall | [Value] | [Value] | [Value] | [Value] | [≥ X.XX] | [Pass / Fail] |
| F1 Score | [Value] | [Value] | [Value] | [Value] | [≥ X.XX] | [Pass / Fail] |

*[Repeat table for each model in scope.]*

---

### Appendix C — Population Stability Index (PSI) Report

*Provide input feature PSI scores for each model, comparing the current production population against the model's development reference population.*

#### C.1 [MDL-001 — Model Name] — PSI by Feature

| Feature Name | Feature Description | PSI Value | Status |
|---|---|---|---|
| [Feature 1] | [Description] | [Value] | [Stable / Monitor / Investigate] |
| [Feature 2] | [Description] | [Value] | [Stable / Monitor / Investigate] |
| [Feature 3] | [Description] | [Value] | [Stable / Monitor / Investigate] |
| [Feature N] | [Description] | [Value] | [Stable / Monitor / Investigate] |
| **Overall Model PSI** | | **[Value]** | **[Stable / Monitor / Investigate]** |

*[Repeat table for each model in scope.]*

---

### Appendix D — Fairness and Bias Assessment

*Summarise the results of the disparate impact analysis conducted for each applicable model. Note: assessment is limited to attributes permissible under PDPA 2010 and does not constitute profiling by protected characteristics.*

| Model | Attribute Assessed | Group A Approval Rate | Group B Approval Rate | Disparate Impact Ratio | Threshold | Status |
|---|---|---|---|---|---|---|
| [MDL-001] | [e.g., Age Band: < 30 vs ≥ 30] | [XX%] | [XX%] | [X.XX] | [≥ 0.80 per 4/5ths rule] | [Pass / Fail / Review] |
| [MDL-001] | [e.g., Gender] | [XX%] | [XX%] | [X.XX] | [≥ 0.80] | [Pass / Fail / Review] |
| [MDL-002] | [Attribute] | [XX%] | [XX%] | [X.XX] | [≥ 0.80] | [Pass / Fail / Review] |

---

### Appendix E — Explainability Assessment Outputs

*Document the outputs of the explainability assessment, including top feature contributions (SHAP values or equivalent) and assessment of whether the model's decision logic is interpretable to a non-technical reviewer.*

#### E.1 Top Feature Contributions — [MDL-001 — Model Name]

| Rank | Feature Name | Mean |SHAP Value| | Direction of Impact | Interpretability Assessment |
|---|---|---|---|---|
| 1 | [Feature Name] | [Value] | [Increases / Decreases score] | [e.g., Intuitive — higher value indicates lower credit risk] |
| 2 | [Feature Name] | [Value] | [Increases / Decreases score] | [e.g., Review required — impact direction not aligned with business expectation] |
| 3 | [Feature Name] | [Value] | [Increases / Decreases score] | [e.g., Intuitive] |
| [N] | [Feature Name] | [Value] | [Increases / Decreases score] | [Assessment] |

**Overall Explainability Rating:** [Satisfactory / Requires Enhancement / Unsatisfactory]

**Rationale:** [Brief commentary on whether the model's decision logic can be explained to customers and regulators in plain language.]

---

### Appendix F — Monitoring Alert Log Summary

*Summarise all model monitoring alerts triggered during the validation period, including their disposition.*

| Alert ID | Model | Alert Type | Trigger Date | Threshold Breached | Action Taken | Resolution Date | Escalated? |
|---|---|---|---|---|---|---|---|
| [ALT-001] | [MDL-001] | [PSI Breach] | [Date] | [PSI = X.XX vs threshold X.XX] | [Description] | [Date] | [Yes / No] |
| [ALT-002] | [MDL-002] | [Performance Degradation] | [Date] | [AUROC = X.XX vs threshold X.XX] | [Description] | [Date] | [Yes / No] |

---

### Appendix G — Glossary

| Term | Definition |
|---|---|
| **AI Model** | An algorithm or statistical model that uses data inputs to generate predictions, classifications, scores, or recommendations used in business decision-making. |
| **AUROC** | Area Under the Receiver Operating Characteristic Curve. A measure of a binary classification model's ability to discriminate between classes. |
| **CSI** | Characteristic Stability Index. Measures drift in individual input features between the development population and the current production population. |
| **Disparate Impact** | A condition in which a model produces outcomes that disproportionately disadvantage a protected group relative to another, even in the absence of explicit discriminatory intent. |
| **Gini Coefficient** | A measure of inequality in model score distribution; commonly used as a summary metric of model discriminatory power. Gini = 2 × AUROC − 1. |
| **KS Statistic** | Kolmogorov-Smirnov Statistic. Measures the maximum separation between cumulative distributions of scores for positive and negative classes. |
| **Model Drift** | Degradation in model performance over time due to changes in the relationship between input features and the target outcome in the production environment. |
| **Model Owner** | The business function accountable for the use and performance of an AI model in its intended context. |
| **Model Validation** | An independent function responsible for evaluating the soundness, performance, and governance of AI models before deployment and on an ongoing basis. |
| **OOT Testing** | Out-of-Time testing. Validation of model performance on data from a time period not used in model development, to assess temporal generalisability. |
| **PSI** | Population Stability Index. Measures the degree of shift between the score or input feature distribution at model development versus production. |
| **RMiT** | Risk Management in Technology. BNM's policy document outlining technology risk management requirements for financial institutions licensed under FSA 2013 and IFSA 2013. |
| **SHAP** | SHapley Additive exPlanations. A game-theoretic approach to explaining the contribution of each input feature to individual model predictions. |
| **Three Lines of Defence** | A governance model in which business management (first line), risk and compliance functions (second line), and internal audit (third line) each bear distinct responsibilities for risk management and assurance. |

---

*End of Document*

---

*This template was prepared in accordance with BNM Risk Management in Technology (RMiT) Clause 17.4 requirements. It is intended as a structural framework and must be completed with institution-specific content, validated data, and duly authorised approvals prior to use as a regulatory compliance artefact. [Organization Name] is responsible for ensuring that the completed document meets all applicable regulatory obligations.*