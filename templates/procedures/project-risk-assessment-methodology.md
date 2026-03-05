# Project Risk Assessment Methodology

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Category** | Procedures |
| **Owner** | Head of Technology Risk |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of regulatory obligations under Bank Negara Malaysia (BNM) guidelines and applicable Malaysian law.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy References](#3-regulatory-and-policy-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Risk Assessment Process Flow](#5-risk-assessment-process-flow)
6. [Risk Identification](#6-risk-identification)
7. [Risk Analysis and Evaluation](#7-risk-analysis-and-evaluation)
8. [Risk Rating and Prioritization](#8-risk-rating-and-prioritization)
9. [Risk Treatment and Mitigation](#9-risk-treatment-and-mitigation)
10. [Roles and Responsibilities (RACI)](#10-roles-and-responsibilities-raci)
11. [Tools and Systems Used](#11-tools-and-systems-used)
12. [Escalation Procedures](#12-escalation-procedures)
13. [Review and Update History](#13-review-and-update-history)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe the purpose of this document in one to three paragraphs. Explain why this methodology exists, what problem it solves, and how it contributes to the organization's overall risk governance framework.*

This document establishes the standard methodology and template for assessing technology project risks within [Organization Name]. It provides a structured, repeatable approach to identifying, analyzing, evaluating, treating, and monitoring risks associated with technology projects, programmes, and significant change initiatives.

The methodology is designed to ensure that [Organization Name] maintains a robust and consistent approach to technology risk management in alignment with the requirements of Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** policy document, specifically **Paragraph 10.2**, which mandates that financial institutions implement sound risk assessment processes for technology projects.

This document enables project teams, risk owners, and oversight functions to make informed, evidence-based decisions regarding risk acceptance, mitigation, and escalation throughout the full project lifecycle — from initiation through to post-implementation review.

---

## 2. Scope and Applicability

*Define the boundaries of this methodology. Specify which project types, systems, organizational units, and risk categories fall within scope. Clearly state any exclusions and the conditions under which exceptions may be sought.*

### 2.1 In Scope

This methodology applies to all technology projects and initiatives undertaken by or on behalf of [Organization Name], including but not limited to:

- **Tier 1 Projects:** Major technology transformations, core banking system replacements, or enterprise-wide platform migrations with a project budget exceeding [RM X million] or a duration exceeding [X months].
- **Tier 2 Projects:** Significant system enhancements, new product implementations, third-party integrations, or infrastructure upgrades with a project budget between [RM X] and [RM X million].
- **Tier 3 Projects:** Minor enhancements, configuration changes, or low-complexity implementations with a project budget below [RM X].
- **Outsourced and Third-Party Managed Projects:** Any technology project managed wholly or partially by a third-party vendor or outsourced service provider on behalf of [Organization Name].
- **Regulatory-Driven Initiatives:** Projects mandated by BNM, Securities Commission Malaysia, or other regulatory bodies.
- **Cloud Migration and Digital Transformation Programmes:** Projects involving migration to cloud platforms, adoption of new digital channels, or significant architectural changes.

### 2.2 Out of Scope

The following are explicitly excluded from this methodology unless specifically directed by the Head of Technology Risk:

- Routine IT operations, break-fix activities, and standard patching cycles managed under the IT Change Management Policy.
- Business-as-usual (BAU) operational processes not constituting a discrete project or programme.
- Non-technology business projects with no material IT component, as determined by the Technology Risk function.

### 2.3 Applicability by Project Tier

| Project Tier | Risk Assessment Required | Minimum Assessment Depth | Review Frequency |
|---|---|---|---|
| Tier 1 | Mandatory | Full (Qualitative + Quantitative) | Monthly during project lifecycle |
| Tier 2 | Mandatory | Standard (Qualitative) | At each project gate |
| Tier 3 | Mandatory | Simplified (Checklist-based) | At project initiation and closure |
| Emergency/Expedited | Mandatory (post-facto within [X] days) | Standard (Qualitative) | Upon completion of emergency change |

### 2.4 Geographic and Jurisdictional Scope

This methodology applies to all technology projects conducted within Malaysia and, where applicable, to projects involving cross-border data flows, offshore processing, or multinational systems that affect [Organization Name]'s Malaysian operations.

---

## 3. Regulatory and Policy References

*List all applicable regulatory frameworks, internal policies, and industry standards that govern this methodology. Include specific clause or paragraph references where available.*

### 3.1 Regulatory Framework

| Reference | Document | Clause / Paragraph | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Paragraph 10.2 | Technology project risk assessment requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Paragraph 10.1 | Technology risk governance framework |
| BNM RMiT | Risk Management in Technology Policy Document | Paragraph 11 | Outsourcing risk requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Paragraph 12 | Cybersecurity risk requirements |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 9 – Security Principle | Data security obligations for projects handling personal data |
| NACSA | National Cyber Security Policy | [Relevant Section] | Critical information infrastructure protection |
| ISO/IEC 27001 | Information Security Management | Annex A, Clause 6.1 | Risk assessment and treatment |
| ISO 31000 | Risk Management – Guidelines | Clause 6 | Risk assessment process |

### 3.2 Internal Policy References

| Document | Policy / Standard | Owner |
|---|---|---|
| [Policy ID] | Technology Risk Management Policy | Head of Technology Risk |
| [Policy ID] | IT Project Management Framework | Head of IT / CTO |
| [Policy ID] | Information Security Policy | Chief Information Security Officer |
| [Policy ID] | Data Governance Policy | Chief Data Officer |
| [Policy ID] | Outsourcing and Vendor Management Policy | Head of Procurement / Technology Risk |
| [Policy ID] | Business Continuity Management Policy | Head of Business Continuity |
| [Policy ID] | Change Management Policy | Head of IT Operations |

---

## 4. Definitions and Abbreviations

*Define all key terms and abbreviations used in this document. Maintain consistency with BNM RMiT definitions where applicable.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Technology Project Risk** | Any event or condition that, if it occurs, may have a positive or negative effect on the objectives of a technology project, including schedule, cost, scope, quality, security, or regulatory compliance. |
| **Risk Appetite** | The aggregate level and types of risk that [Organization Name] is willing to accept in pursuit of its strategic objectives, as defined by the Board Risk Committee. |
| **Risk Tolerance** | The acceptable level of variation relative to the achievement of a specific project or operational objective. |
| **Inherent Risk** | The level of risk existing in the absence of any controls or mitigating actions. |
| **Residual Risk** | The level of risk remaining after controls and mitigating actions have been applied. |
| **Risk Owner** | The individual accountable for managing a specific identified risk, typically the project sponsor or relevant business/technology domain head. |
| **Project Sponsor** | The senior executive accountable for the project, responsible for approving the project risk appetite and accepting residual risks. |
| **Key Risk Indicator (KRI)** | A forward-looking metric used to signal increasing risk exposure before a risk event materializes. |
| **Control Effectiveness** | An assessment of how well a control reduces the likelihood or impact of a risk. Rated as: Strong, Adequate, or Weak. |
| **Risk Register** | A log of all identified risks for a project, including their assessment details, treatment plans, and monitoring status. |
| **Post-Implementation Review (PIR)** | A structured review conducted after project go-live to assess whether project objectives were achieved and whether residual risks have materialized or changed. |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| RACI | Responsible, Accountable, Consulted, Informed |
| KRI | Key Risk Indicator |
| PIR | Post-Implementation Review |
| CTO | Chief Technology Officer |
| CISO | Chief Information Security Officer |
| BCP | Business Continuity Plan |
| DRP | Disaster Recovery Plan |
| ITSC | IT Steering Committee |
| TRC | Technology Risk Committee |
| PIA | Privacy Impact Assessment |
| UAT | User Acceptance Testing |
| SLA | Service Level Agreement |

---

## 5. Risk Assessment Process Flow

*Describe the end-to-end process for conducting a project risk assessment. The process should cover all phases of the project lifecycle. Include a step-by-step description of each stage and, where appropriate, a visual representation such as a process flow or swimlane diagram.*

### 5.1 Overview

The Project Risk Assessment Methodology follows a six-stage lifecycle aligned with ISO 31000 and adapted to meet BNM RMiT Paragraph 10.2 requirements. The process is iterative and must be revisited at each project governance gate.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  PROJECT RISK ASSESSMENT LIFECYCLE                          │
│                                                                             │
│  [1] Initiation  →  [2] Identification  →  [3] Analysis  →  [4] Evaluation │
│                                                                             │
│  [6] Monitor & Review  ←  [5] Treatment & Response                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Stage-by-Stage Process Description

#### Stage 1: Risk Assessment Initiation

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 1.1 | Project classification — determine project tier (1, 2, or 3) | Project Manager | Project Classification Form |
| 1.2 | Appoint Risk Owner and assemble Risk Assessment Working Group | Project Sponsor | Risk Assessment Working Group Terms of Reference |
| 1.3 | Gather project documentation (scope, architecture, data flows, vendor contracts) | Project Manager | Project Documentation Package |
| 1.4 | Review prior risk assessments for related projects or systems | Technology Risk Analyst | Historical Risk Context Briefing |
| 1.5 | Schedule and facilitate risk identification workshop | Technology Risk Analyst | Workshop Agenda and Attendee List |

#### Stage 2: Risk Identification

*See Section 6 for detailed guidance on risk identification techniques.*

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 2.1 | Conduct risk identification workshop using structured techniques (brainstorming, checklists, scenario analysis) | Technology Risk Analyst | Long-list of identified risks |
| 2.2 | Categorize risks by domain (schedule, cost, technical, security, compliance, operational, reputational) | Technology Risk Analyst | Categorized risk list |
| 2.3 | Validate risk list with subject matter experts and project team | Project Manager / Risk Owner | Validated risk long-list |
| 2.4 | Record all identified risks in the project Risk Register | Technology Risk Analyst | Updated Project Risk Register |

#### Stage 3: Risk Analysis

*See Section 7 for detailed guidance on risk analysis.*

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 3.1 | Assess inherent likelihood and impact for each risk | Technology Risk Analyst | Inherent risk ratings |
| 3.2 | Identify existing controls and assess control effectiveness | Technology Risk Analyst / CISO | Control inventory and effectiveness ratings |
| 3.3 | Calculate residual risk rating (likelihood × impact adjusted for control effectiveness) | Technology Risk Analyst | Residual risk ratings |
| 3.4 | Perform qualitative scenario analysis for Tier 1 projects | Technology Risk Analyst | Scenario Analysis Report |

#### Stage 4: Risk Evaluation

*See Section 8 for detailed guidance on risk evaluation and prioritization.*

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 4.1 | Compare residual risk ratings against the organizational risk appetite | Technology Risk Analyst / Head of Technology Risk | Risk appetite alignment assessment |
| 4.2 | Prioritize risks into Critical, High, Medium, and Low categories | Head of Technology Risk | Prioritized risk list |
| 4.3 | Identify risks requiring escalation to TRC or Board Risk Committee | Head of Technology Risk | Escalation list |

#### Stage 5: Risk Treatment and Response

*See Section 9 for detailed guidance on risk treatment options.*

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 5.1 | Select appropriate treatment strategy for each risk (Avoid, Reduce, Transfer, Accept) | Risk Owner | Risk Treatment Plan |
| 5.2 | Define specific mitigation actions, timelines, and control owners | Project Manager / Risk Owner | Action items in Risk Register |
| 5.3 | Obtain formal acceptance for residual risks above tolerance threshold | Project Sponsor / ITSC | Signed Risk Acceptance Form |
| 5.4 | Integrate risk treatment actions into the project plan | Project Manager | Updated Project Plan |

#### Stage 6: Monitor, Review, and Report

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 6.1 | Track risk mitigation action progress against agreed timelines | Project Manager | Status updates in Risk Register |
| 6.2 | Monitor KRIs and risk triggers on a continuous basis | Technology Risk Analyst | KRI Dashboard |
| 6.3 | Review and update the Risk Register at each project governance gate | Technology Risk Analyst / Risk Owner | Updated Risk Register |
| 6.4 | Report project risk status to the IT Steering Committee | Head of Technology Risk | Project Risk Status Report |
| 6.5 | Conduct Post-Implementation Review within [X] days of go-live | Technology Risk Analyst | Post-Implementation Risk Review Report |

---

## 6. Risk Identification

*This section provides guidance on techniques and categories to use when identifying project risks. The goal is to ensure comprehensive and structured identification of all material risks before analysis begins.*

### 6.1 Risk Identification Techniques

[Organization Name] uses the following structured techniques for project risk identification. The choice of technique should be commensurate with the project tier:

| Technique | Description | Applicable Tier |
|---|---|---|
| **Structured Brainstorming** | Facilitated workshop with project team and SMEs using open-ended questioning | All tiers |
| **Risk Checklist Review** | Review of the standard technology project risk checklist (Appendix A) | All tiers |
| **Assumption and Constraint Analysis** | Examination of stated project assumptions that, if false, would create risk | Tier 1, Tier 2 |
| **Historical Project Review** | Analysis of lessons learned from similar past projects or PIR reports | Tier 1, Tier 2 |
| **Technical Architecture Review** | Assessment of proposed technical design for inherent risk patterns | Tier 1, Tier 2 |
| **Data Flow and Privacy Analysis** | Mapping of personal data flows to identify PDPA and data security risks | All tiers (if personal data is involved) |
| **Third-Party and Vendor Risk Review** | Review of vendor SLAs, concentration risk, and dependency risks | Tier 1, Tier 2 |
| **Regulatory Impact Assessment** | Review of project scope against current BNM and NACSA requirements | Tier 1, Tier 2 |

### 6.2 Risk Categories

All identified risks must be categorized according to the following taxonomy:

| Risk Category | Description | Examples |
|---|---|---|
| **Schedule Risk** | Risk of project delivery delays impacting business or regulatory deadlines | Resource constraints, scope creep, vendor delays |
| **Cost Risk** | Risk of cost overruns or budget exhaustion before project completion | Underestimated complexity, foreign exchange exposure, licensing changes |
| **Technical Risk** | Risk arising from technical complexity, architecture choices, or integration challenges | Integration failures, scalability issues, legacy system incompatibility |
| **Cybersecurity Risk** | Risk of unauthorized access, data breach, or cyber incident during or post project | Insecure design, unpatched dependencies, inadequate testing |
| **Data and Privacy Risk** | Risk of non-compliance with PDPA or mishandling of personal/sensitive data | Data leakage, consent management failures, cross-border data transfer |
| **Operational Risk** | Risk of disruption to business operations during or after project implementation | Production incidents during cutover, inadequate training, BCP gaps |
| **Compliance and Regulatory Risk** | Risk of failing to meet BNM, NACSA, or other regulatory requirements | Missed regulatory deadlines, non-compliant controls, inadequate audit trails |
| **Third-Party and Outsourcing Risk** | Risk arising from dependency on external vendors, cloud providers, or outsourced services | Vendor failure, SLA breaches, exit risk |
| **Reputational Risk** | Risk of negative customer or regulatory perception arising from project failures | Customer data incidents, service outages, regulatory sanctions |
| **People and Change Risk** | Risk arising from inadequate change management, skills gaps, or staff attrition | Loss of key personnel, resistance to change, training deficiencies |

### 6.3 Risk Register Structure

Every identified risk must be recorded in the project Risk Register with the following minimum fields:

| Field | Description |
|---|---|
| **Risk ID** | Unique identifier (e.g., PR-[Project Code]-001) |
| **Risk Category** | Category from the taxonomy in Section 6.2 |
| **Risk Description** | Clear, unambiguous description of the risk event and its cause |
| **Risk Trigger** | The event or condition that would cause this risk to materialize |
| **Potential Consequence** | The likely impact if the risk materializes (financial, operational, regulatory, reputational) |
| **Risk Owner** | Named individual accountable for managing this risk |
| **Inherent Likelihood** | Rating before controls: 1 (Rare) to 5 (Almost Certain) |
| **Inherent Impact** | Rating before controls: 1 (Negligible) to 5 (Catastrophic) |
| **Inherent Risk Rating** | Likelihood × Impact score |
| **Existing Controls** | Description of controls currently in place |
| **Control Effectiveness** | Strong / Adequate / Weak |
| **Residual Likelihood** | Rating after controls |
| **Residual Impact** | Rating after controls |
| **Residual Risk Rating** | Residual Likelihood × Residual Impact |
| **Risk Response Strategy** | Avoid / Reduce / Transfer / Accept |
| **Treatment Actions** | Specific mitigation actions with due dates and action owners |
| **Target Residual Risk** | Desired risk level after treatment |
| **KRI / Early Warning Indicator** | Metric used to monitor this risk |
| **Status** | Open / In Progress / Closed / Accepted |
| **Last Updated** | Date of last review |

---

## 7. Risk Analysis and Evaluation

*This section defines the quantitative and qualitative scales used to analyze and rate identified risks. All assessments must use the scales defined here to ensure consistency and comparability across projects.*

### 7.1 Likelihood Scale

| Rating | Level | Description | Indicative Frequency |
|---|---|---|---|
| 5 | Almost Certain | The event is expected to occur in most circumstances | More than once per year |
| 4 | Likely | The event will probably occur in most circumstances | Once per year |
| 3 | Possible | The event might occur at some time | Once in 1–3 years |
| 2 | Unlikely | The event could occur at some time | Once in 3–10 years |
| 1 | Rare | The event may occur only in exceptional circumstances | Less than once in 10 years |

### 7.2 Impact Scale

| Rating | Level | Financial Impact | Operational Impact | Regulatory / Reputational Impact |
|---|---|---|---|---|
| 5 | Catastrophic | Loss > [RM X million] | Critical systems unavailable > [X] hours; significant customer harm | Regulatory sanction, licence conditions, adverse BNM findings, major media coverage |
| 4 | Major | Loss [RM X] – [RM X million] | Critical systems unavailable [X–X] hours; moderate customer harm | Regulatory breach with mandatory remediation, significant adverse publicity |
| 3 | Moderate | Loss [RM X] – [RM X] | Non-critical systems unavailable; limited customer harm | Regulatory notification required; some adverse media coverage |
| 2 | Minor | Loss [RM X] – [RM X] | Minor degradation of service; minimal customer impact | Internal compliance finding; no public disclosure |
| 1 | Negligible | Loss < [RM X] | No material service disruption | No regulatory or reputational impact |

### 7.3 Risk Rating Matrix

*The inherent and residual risk rating is calculated as: **Risk Rating = Likelihood × Impact**. The resulting score determines the risk level as follows:*

| | **Impact 1** | **Impact 2** | **Impact 3** | **Impact 4** | **Impact 5** |
|---|---|---|---|---|---|
| **Likelihood 5** | 5 — Medium | 10 — High | 15 — Critical | 20 — Critical | 25 — Critical |
| **Likelihood 4** | 4 — Low | 8 — Medium | 12 — High | 16 — Critical | 20 — Critical |
| **Likelihood 3** | 3 — Low | 6 — Medium | 9 — Medium | 12 — High | 15 — Critical |
| **Likelihood 2** | 2 — Low | 4 — Low | 6 — Medium | 8 — Medium | 10 — High |
| **Likelihood 1** | 1 — Low | 2 — Low | 3 — Low | 4 — Low | 5 — Medium |

### 7.4 Risk Level Thresholds and Required Actions

| Risk Level | Score Range | Colour Code | Required Action |
|---|---|---|---|
| **Critical** | 15–25 | Red | Immediate escalation to Head of Technology Risk and Project Sponsor; mandatory TRC notification within [X] business days; dedicated mitigation plan required |
| **High** | 10–12 | Orange | Escalation to Head of Technology Risk; mitigation plan required; monitored at every project governance gate |
| **Medium** | 5–9 | Amber | Risk Owner to develop treatment plan; reviewed at project steering committee meetings |
| **Low** | 1–4 | Green | Risk Owner to monitor; documented in Risk Register; reviewed quarterly |

### 7.5 Control Effectiveness Assessment

When assessing the effectiveness of existing controls, the following criteria apply:

| Effectiveness Rating | Description | Impact on Residual Risk |
|---|---|---|
| **Strong** | Control is fully implemented, regularly tested, and has demonstrated effectiveness with no significant gaps | Reduce inherent likelihood or impact by up to 2 levels |
| **Adequate** | Control is largely implemented with minor gaps; periodic testing indicates generally effective performance | Reduce inherent likelihood or impact by 1 level |
| **Weak** | Control is partially implemented, untested, or has known significant gaps | No reduction to inherent risk; may warrant additional compensating controls |

---

## 8. Risk Rating and Prioritization

*This section describes how assessed risks are ranked, prioritized, and presented to governance bodies. Prioritization ensures that limited risk management resources are directed toward the risks of greatest significance.*

### 8.1 Prioritization Criteria

In addition to the numerical risk score, the following factors must be considered when prioritizing risks for treatment:

- **Velocity:** How quickly could the risk materialize once triggered? Fast-moving risks may require immediate action even at a Medium rating.
- **Regulatory Exposure:** Risks with a direct compliance or regulatory dimension are elevated to the next severity tier regardless of score.
- **Interdependency:** Risks that could trigger or amplify other risks (i.e., risk clusters) receive elevated priority.
- **Reversibility:** Risks whose consequences are difficult or impossible to reverse (e.g., data destruction, reputational damage) are treated with greater urgency.
- **Proximity to Go-Live:** Risks identified within [X] weeks of a planned go-live date are automatically escalated.

### 8.2 Risk Heat Map

*Insert a risk heat map diagram here, plotting all identified residual risks by likelihood (Y-axis) and impact (X-axis). Risks should be labelled with their Risk ID. The heat map must be updated at each project gate review.*

| Risk ID | Risk Description | Residual Likelihood | Residual Impact | Residual Rating | Priority Ranking |
|---|---|---|---|---|---|
| PR-[Code]-001 | [Risk Description] | [1–5] | [1–5] | [Score] | [1, 2, 3...] |
| PR-[Code]-002 | [Risk Description] | [1–5] | [1–5] | [Score] | [1, 2, 3...] |
| PR-[Code]-003 | [Risk Description] | [1–5] | [1–5] | [Score] | [1, 2, 3...] |

---

## 9. Risk Treatment and Mitigation

*This section defines the four standard risk response strategies available to project teams and provides guidance on selecting the most appropriate strategy for each identified risk.*

### 9.1 Risk Response Strategies

| Strategy | Definition | When to Apply | Example |
|---|---|---|---|
| **Avoid** | Change the project plan to eliminate the risk entirely by removing the cause | When the risk is Critical and no viable mitigation exists, or the cost of mitigation exceeds the benefit | Cancel integration with a high-risk third-party system; select an alternative architecture |
| **Reduce** | Implement controls or mitigation actions to reduce the likelihood or impact of the risk | The preferred default strategy for High and Medium risks where risk avoidance is not practical | Implement additional security testing; conduct parallel running before cutover; strengthen access controls |
| **Transfer** | Shift the financial or operational consequences of the risk to a third party | When the risk involves financial loss that can be insured, or when contractual warranties can be obtained from vendors | Cyber insurance; contractual penalties and SLA guarantees in vendor agreements; escrow arrangements |
| **Accept** | Acknowledge the risk and take no further action beyond monitoring | For Low risks where the cost of treatment outweighs the benefit, or where the risk is within the organization's stated risk tolerance | Minor schedule delays within project contingency; minor UI defects deferred to a subsequent release |

### 9.2 Risk Treatment Plan Requirements

For each risk rated High or Critical, a formal Risk Treatment Plan must be documented with the following elements:

| Field | Description |
|---|---|
| **Risk ID** | Reference to the Risk Register entry |
| **Treatment Strategy** | Avoid / Reduce / Transfer / Accept |
| **Treatment Action(s)** | Specific, measurable actions to be taken |
| **Action Owner(s)** | Named individual(s) responsible for completing each action |
| **Target Completion Date** | Agreed date by which the action must be completed |
| **Expected Residual Risk After Treatment** | Projected risk level once actions are complete |
| **Resource Requirements** | Budget, headcount, or tooling required for the treatment |
| **Dependencies** | Other project activities or decisions that the treatment depends on |
| **Verification Method** | How the completion and effectiveness of the treatment will be verified |
| **Escalation Trigger** | Conditions under which the treatment plan must be escalated (e.g., missed deadlines) |

### 9.3 Risk Acceptance Process

Formal risk acceptance is required where:

- Residual risk remains at **High** or **Critical** after treatment.
- A risk is accepted as-is without any mitigating action.
- Risk treatment actions cannot be completed before a significant project milestone or go-live.

| Residual Risk Level | Required Approver |
|---|---|
| Low | Project Manager |
| Medium | Project Sponsor |
| High | IT Steering Committee (ITSC) |
| Critical | Technology Risk Committee (TRC) and/or Board Risk Committee |

Formal risk acceptance must be documented using the **Risk Acceptance Form** (Appendix C) and retained as a project governance artifact.

---

## 10. Roles and Responsibilities (RACI)

*This section defines the roles and responsibilities of all parties involved in the project risk assessment process. The RACI matrix below must be reviewed and confirmed at the commencement of each major project.*

### 10.1 Role Definitions

| Role | Description |
|---|---|
| **Project Sponsor** | Senior executive accountable for the project; approves risk appetite and accepts residual risks above tolerance. |
| **Project Manager** | Day-to-day manager of the project; responsible for maintaining the Risk Register and integrating risk treatment actions into the project plan. |
| **Head of Technology Risk** | Owner of this methodology; provides risk oversight and challenge; escalates material risks to governance committees. |
| **Technology Risk Analyst** | Facilitates risk workshops; conducts risk analysis; maintains the project Risk Register on behalf of the project team. |
| **Chief Information Security Officer (CISO)** | Provides specialist input on cybersecurity and data security risks; approves security-related treatment plans. |
| **Chief Data Officer (CDO)** | Provides specialist input on data governance and PDPA compliance risks. |
| **Enterprise Risk Management (ERM) Function** | Integrates project risk outcomes into the enterprise risk framework; escalates to the Board Risk Committee as required. |
| **IT Steering Committee (ITSC)** | Governance body that reviews project risk status at each gate; approves High residual risks. |
| **Technology Risk Committee (TRC)** | Senior governance body that reviews Critical risks and material escalations; approves risk acceptance above ITSC authority. |
| **Board Risk Committee** | Ultimate governance body for risk acceptance above TRC authority. |
| **Internal Audit** | Independently reviews the adequacy of the project risk assessment process; provides assurance to the Board Audit Committee. |
| **Vendor / Third-Party Representative** | Provides risk information for third-party managed components; bound by contractual obligations to support the risk assessment process. |

### 10.2 RACI Matrix — Project Risk Assessment Activities

**Key: R = Responsible | A = Accountable | C = Consulted | I = Informed**

| Activity | Project Sponsor | Project Manager | Head of Tech Risk | Tech Risk Analyst | CISO | CDO | ITSC | TRC | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|
| Determine project tier and classification | C | R | C | I | I | I | I | I | I |
| Appoint Risk Assessment Working Group | A | R | C | I | I | I | I | I | I |
| Facilitate risk identification workshop | I | C | C | R | C | C | I | I | I |
| Conduct risk analysis (likelihood/impact) | I | C | C | R | C | C | I | I | I |
| Assess control effectiveness | I | C | C | R | R | C | I | I | I |
| Calculate and assign risk ratings | I | C | A | R | C | C | I | I | I |
| Develop risk treatment plans (High/Critical) | C | R | A | C | C | C | I | I | I |
| Approve risk treatment plans | A | I | R | I | C | C | I | I | I |
| Accept Low residual risks | I | A | C | I | I | I | I | I | I |
| Accept Medium residual risks | A | R | C | I | I | I | I | I | I |
| Accept High residual risks | C | I | R | I | I | I | A | I | I |
| Accept Critical residual risks | C | I | R | I | I | I | C | A | I |
| Monitor and report project risk status | I | C | A | R | I | I | I | I | I |
| Report to ITSC | C | C | R | I | I | I | A | I | I |
| Escalate to TRC | C | I | R | I | I | I | C | A | I |
| Conduct Post-Implementation Review | C | R | A | R | C | C | I | I | C |
| Review adequacy of risk assessment process | I | I | C | I | I | I | I | I | R |
| Maintain and update this methodology | I | I | A | R | C | C | I | I | C |

---

## 11. Tools and Systems Used

*Describe the tools, platforms, and systems that support the project risk assessment process. Include information on access rights, data residency, and integration with other risk management systems.*

### 11.1 Primary Risk Management Tools

| Tool / System | Purpose | Managed By | Access Control | Notes |
|---|---|---|---|---|
| [GRC Platform Name] (e.g., ServiceNow GRC / MetricStream / Archer) | Central repository for project Risk Registers, treatment plans, and KRI dashboards | Technology Risk | Role-based access; project teams have read/write to their own risk registers | Primary system of record for all project risk data |
| [Project Management Tool] (e.g., Jira / MS Project / Azure DevOps) | Integration of risk treatment actions into project plans | Project Management Office | Project team access | Risk actions are linked to project tasks for tracking |
| [Document Management System] (e.g., SharePoint / Confluence) | Storage of risk assessment reports, meeting minutes, and evidence | [Owner] | Confidential classification; restricted access | All finalized risk reports must be stored here |
| [Reporting and Dashboard Tool] (e.g., Power BI / Tableau) | Executive risk reporting and KRI visualization | Technology Risk | Read-only for stakeholders; edit access for Technology Risk Analysts | Dashboards refreshed [daily / weekly] |

### 11.2 Supporting Tools

| Tool | Purpose | Notes |
|---|---|---|
| Microsoft Excel / Google Sheets | Supplementary risk register for Tier 3 projects or ad-hoc use | Must be version-controlled and stored in the Document Management System; not a substitute for the GRC platform |
| Threat Intelligence Platform (e.g., OpenCTI / MISP) | Input into cybersecurity risk identification for projects involving internet-facing systems | Managed by CISO; Technology Risk Analysts may request threat intelligence briefings |
| Privacy Impact Assessment Tool | Structured PIA for projects processing personal data | Required for all projects triggering PDPA obligations |

### 11.3 Data Governance for Risk Assessment Records

- All project risk assessment records are classified as **Confidential**.
- Records must be retained for a minimum of **[X] years** in accordance with [Organization Name]'s Records Retention Policy.
- Risk Register data must be stored on [Organization Name]'s approved infrastructure and must not be stored on personal devices, unapproved cloud services, or external systems.
- Access to completed risk assessments is restricted to the project team, Technology Risk, Internal Audit, and authorized governance committee members.

---

## 12. Escalation Procedures

*This section defines the conditions and process for escalating project risks to appropriate governance levels. Timely escalation is a regulatory expectation under BNM RMiT and is critical to maintaining effective risk oversight.*

### 12.1 Escalation Triggers

A project risk must be escalated immediately upon occurrence of any of the following triggers:

| Trigger | Escalation Level | Timeframe |
|---|---|---|
| New or re-rated risk reaches **Critical** level (score ≥ 15) | Head of Technology Risk → TRC | Within [1] business day of identification |
| New or re-rated risk reaches **High** level (score 10–12) | Head of Technology Risk → ITSC | Within [3] business days of identification |
| A risk treatment action is overdue by more than **[X] days** | Project Sponsor | Immediately upon breach of agreed deadline |
| A risk has materialized (i.e., risk event has occurred) | Head of Technology Risk → Project Sponsor → ITSC (if High/Critical) | Same business day; formal incident report within [2] business days |
| A regulatory compliance risk is identified of any severity | Head of Technology Risk → CISO → Compliance Function | Within [1] business day |
| A material change in project scope significantly increases risk exposure | Project Sponsor → ITSC | Prior to proceeding with the scope change |
| Project go-live is planned within [X] weeks and High or Critical risks remain open | Head of Technology Risk → ITSC | Minimum [X] business days prior to go-live |
| Third-party vendor failure or significant SLA breach that impacts the project | Head of Technology Risk → Outsourcing Risk Function | Within [1] business day of confirmed failure |

### 12.2 Escalation Process

The following process applies for all risk escalations:

1. **Identification:** The Technology Risk Analyst or Project Manager identifies the escalation trigger and notifies the Head of Technology Risk.
2. **Assessment:** The Head of Technology Risk assesses the trigger, verifies the risk rating, and confirms the escalation pathway.
3. **Notification:** The Head of Technology Risk notifies the relevant governance body by email within the required timeframe, attaching the updated Risk Register extract and a brief escalation note.
4. **Review:** The governance body reviews the escalated risk at the next scheduled meeting or, for Critical risks, in an extraordinary session convened within [X] business days.
5. **Decision:** The governance body approves a treatment plan, authorizes risk acceptance, or directs further action as appropriate.
6. **Documentation:** All escalation communications, decisions, and approvals are recorded in the GRC platform and stored in the Document Management System.
7. **Closure:** The escalation is formally closed once the governance body confirms satisfactory resolution, treatment, or acceptance of the risk.

### 12.3 Escalation Matrix Summary

| Risk Level | First Escalation Point | Second Escalation Point | Decision Authority |
|---|---|---|---|
| Low | Project Manager | — | Project Manager |
| Medium | Project Sponsor | Head of Technology Risk (advisory) | Project Sponsor |
| High | Head of Technology Risk | ITSC | ITSC |
| Critical | Head of Technology Risk | TRC | TRC / Board Risk Committee |
| Regulatory / Compliance Risk (any level) | Head of Technology Risk + Compliance Function | TRC + Board Risk Committee (if material) | Board Risk Committee |

### 12.4 BNM Reporting Obligations

Where a project risk event materializes and constitutes a technology risk incident that meets BNM RMiT reporting thresholds, the Compliance Function and CISO must be notified immediately to initiate the regulatory incident reporting process in accordance with [Organization Name]'s **Technology Risk Incident Management and Reporting Policy** ([Policy ID]).

---

## 13. Review and Update History

*This section documents the history of reviews and updates to the Project Risk Assessment Methodology itself. It is distinct from the version history of individual project Risk Registers.*

### 13.1 Methodology Review Schedule

This methodology must be reviewed in accordance with the following schedule:

| Review Type | Frequency | Trigger | Responsible Party |
|---|---|---|---|
| **Scheduled Review** | Quarterly | Calendar-based | Head of Technology Risk |
| **Triggered Review** | As required | Significant change in BNM RMiT requirements; material risk event; Internal Audit finding; significant change in the technology landscape | Head of Technology Risk |
| **Post-Incident Review** | Within [X] days of a material project risk event | Risk event materialization | Head of Technology Risk + Technology Risk Analyst |
| **Annual Comprehensive Review** | Annually | Full review of all sections, tools, and RACI | Head of Technology Risk + CISO + ERM |

### 13.2 Continuous Monitoring Activities

Between formal quarterly reviews, the following continuous monitoring activities are performed to ensure the methodology remains current and effective:

- **Monthly:** Review of KRI thresholds against current project portfolio risk profile; update to reflect new project classifications.
- **Ongoing:** Monitoring of BNM regulatory updates, NACSA advisories, and industry threat intelligence for developments that may require methodology updates.
- **Ongoing:** Tracking of open findings from Internal Audit reviews related to project risk management.
- **Upon each PIR completion:** Incorporation of lessons learned from post-implementation reviews into the risk checklist (Appendix A) and relevant sections of this methodology.

---

## 14. Review and Approval

### 14.1 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release of the Project Risk Assessment Methodology | [Approver Name] |
| [1.1] | [Date] | [Author Name] | [Description of changes — e.g., Updated risk rating matrix to align with revised organizational risk appetite; added PIA requirements for PDPA compliance] | [Approver Name] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] | [Approver Name] |

### 14.2 Approval Sign-Off

*This document requires formal sign-off from the following roles prior to issuance or upon each revision.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Head of Technology Risk** (Document Owner) | [Name] | [Signature] | [Date] |
| **Chief Technology Officer / CIO** | [Name] | [Signature] | [Date] |
| **Chief Information Security Officer** | [Name] | [Signature] | [Date] |
| **Chief Risk Officer / Head of ERM** | [Name] | [Signature] | [Date] |
| **Compliance Function Representative** | [Name] | [Signature] | [Date] |
| **IT Steering Committee Chairperson** | [Name] | [Signature] | [Date] |

### 14.3 Distribution List

| Recipient | Role | Distribution Method | Date Distributed |
|---|---|---|---|
| [Name] | Head of Technology Risk | [Document Management System / Email] | [Date] |
| [Name] | Chief Technology Officer | [Document Management System / Email] | [Date] |
| [Name] | Chief Information Security Officer | [Document Management System / Email] | [Date] |
| [Name] | All Technology Risk Analysts | [Document Management System / Email] | [Date] |
| [Name] | Project Management Office | [Document Management System / Email] | [Date] |
| [Name] | Internal Audit | [Document Management System / Email] | [Date] |

---

## 15. References

*List all regulatory, policy, and standards references that underpin this methodology.*

### 15.1 Regulatory References

| Reference | Document Title | Issuing Body | Effective Date | Relevant Clause(s) |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Effective Date] | **Paragraph 10.2** — Technology project risk assessment; Paragraph 10.1 — Technology risk governance |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Effective Date] | Paragraph 11 — Outsourcing risk management |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Effective Date] | Paragraph 12 — Cybersecurity risk management |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Effective Date] | Paragraph 13 — Technology audit |
| PDPA 2010 | Personal Data Protection Act 2010 | Malaysian Government | 15 November 2013 | Section 9 (Security Principle); Section 10 (Retention Principle) |
| NACSA NCSP | National Cyber Security Policy | NACSA | [Effective Date] | [Relevant Thrust / Policy Statement] |

### 15.2 Internal Policy References

| Document ID | Document Title | Owner | Version |
|---|---|---|---|
| [Policy ID] | Technology Risk Management Policy | Head of Technology Risk | [Version] |
| [Policy ID] | IT Project Management Framework | Head of IT / PMO | [Version] |
| [Policy ID] | Information Security Policy | CISO | [Version] |
| [Policy ID] | Data Governance and Classification Policy | Chief Data Officer | [Version] |
| [Policy ID] | Outsourcing and Third-Party Risk Management Policy | Head of Technology Risk | [Version] |
| [Policy ID] | Business Continuity Management Policy | Head of BCM | [Version] |
| [Policy ID] | Change Management Policy | Head of IT Operations | [Version] |
| [Policy ID] | Technology Risk Incident Management and Reporting Policy | CISO / Head of Technology Risk | [Version] |
| [Policy ID] | Records Retention Policy | Compliance / Legal | [Version] |

### 15.3 Standards and Industry Frameworks

| Standard | Title | Version / Edition |
|---|---|---|
| ISO 31000 | Risk Management — Guidelines | 2018 |
| ISO/IEC 27001 | Information Security Management Systems — Requirements | 2022 |
| ISO/IEC 27005 | Information Security Risk Management | 2022 |
| NIST SP 800-30 | Guide for Conducting Risk Assessments | Revision 1 (2012) |
| ISACA COBIT | Control Objectives for Information and Related Technologies | COBIT 2019 |
| PMI PMBOK | Project Management Body of Knowledge | 7th Edition |

---

## 16. Appendices

### Appendix A: Technology Project Risk Checklist

*This checklist is used during the risk identification stage to ensure comprehensive coverage of common technology project risk areas. Project teams must complete this checklist at project initiation and review it at each project gate. Add "Yes", "No", or "N/A" for each item and provide comments where applicable.*

#### A.1 Project Scope and Complexity

| # | Risk Item | Applicable? (Y/N/NA) | Comments / Risk ID if Identified |
|---|---|---|---|
| A.1.1 | Is the project scope well-defined and baselined? If not, is scope creep risk managed? | | |
| A.1.2 | Are project dependencies on other in-flight projects clearly identified and managed? | | |
| A.1.3 | Has the full technical complexity of the solution been assessed by a qualified architect? | | |
| A.1.4 | Is the project timeline realistic given the scope and available resources? | | |
| A.1.5 | Have key assumptions been documented and validated? | | |

#### A.2 Technology and Architecture

| # | Risk Item | Applicable? (Y/N/NA) | Comments / Risk ID if Identified |
|---|---|---|---|
| A.2.1 | Does the proposed architecture comply with [Organization Name]'s Enterprise Architecture standards? | | |
| A.2.2 | Are there integration risks with existing systems, particularly legacy platforms? | | |
| A.2.3 | Has the solution been assessed for scalability, performance, and resilience under production load? | | |
| A.2.4 | Are open-source components used? If so, have licensing, support, and vulnerability risks been assessed? | | |
| A.2.5 | Is the proposed technology on the organization's approved technology stack? | | |

#### A.3 Cybersecurity

| # | Risk Item | Applicable? (Y/N/NA) | Comments / Risk ID if Identified |
|---|---|---|---|
| A.3.1 | Has a security architecture review been conducted? | | |
| A.3.2 | Are internet-facing components included? If so, has a web application security assessment been planned? | | |
| A.3.3 | Does the project introduce new authentication or access management requirements? | | |
| A.3.4 | Has the project been assessed for risks related to privileged access during development and deployment? | | |
| A.3.5 | Is penetration testing or vulnerability assessment planned before go-live? | | |
| A.3.6 | Are security controls embedded in the CI/CD pipeline (DevSecOps)? | | |

#### A.4 Data and Privacy

| # | Risk Item | Applicable? (Y/N/NA) | Comments / Risk ID if Identified |
|---|---|---|---|
| A.4.1 | Does the project process, store, or transmit personal data as defined under PDPA 2010? | | |
| A.4.2 | Has a Privacy Impact Assessment (PIA) been completed? | | |
| A.4.3 | Are there cross-border data transfers? If so, have the PDPA transfer restrictions been assessed? | | |
| A.4.4 | Is data masking or tokenization required for non-production environments? | | |
| A.4.5 | Are data retention and deletion obligations clearly defined and implemented? | | |

#### A.5 Third-Party and Outsourcing

| # | Risk Item | Applicable? (Y/N/NA) | Comments / Risk ID if Identified |
|---|---|---|---|
| A.5.1 | Does the project involve a third-party vendor or outsourced service provider? | | |
| A.5.2 | Has a vendor due diligence assessment been completed? | | |
| A.5.3 | Is there a signed contract with appropriate SLAs, security requirements, and audit rights? | | |
| A.5.4 | Has concentration risk been assessed (e.g., single-vendor dependency, cloud provider concentration)? | | |
| A.5.5 | Is there a viable exit strategy if the vendor relationship is terminated? | | |

#### A.6 Regulatory Compliance

| # | Risk Item | Applicable? (Y/N/NA) | Comments / Risk ID if Identified |
|---|---|---|---|
| A.6.1 | Does the project require prior notification or approval from BNM? | | |
| A.6.2 | Are there specific BNM RMiT requirements applicable to this project (e.g., cloud adoption, outsourcing)? | | |
| A.6.3 | Does the project impact the organization's compliance with PDPA, NACSA, or other regulations? | | |
| A.6.4 | Are there regulatory deadlines associated with this project? | | |

#### A.7 Business Continuity and Disaster Recovery

| # | Risk Item | Applicable? (Y/N/NA) | Comments / Risk ID if Identified |
|---|---|---|---|
| A.7.1 | Has the Business Impact Assessment for the new system been completed? | | |
| A.7.2 | Do the proposed RTO and RPO meet business requirements and BNM expectations? | | |
| A.7.3 | Has a DR test been planned before or shortly after go-live? | | |
| A.7.4 | Is there a tested rollback plan in the event of a failed go-live? | | |

---

### Appendix B: Project Risk Register Template

*Reproduce the Risk Register structure defined in Section 6.3 here as a blank template for project teams to use. The Risk Register must be maintained in the GRC platform ([GRC Platform Name]). This Excel template is provided for initial population and workshops only.*

[**Refer to:** [GRC Platform Name] — Project Risk Register Template — accessible at [System URL / SharePoint Path]]

---

### Appendix C: Risk Acceptance Form

**RISK ACCEPTANCE FORM**

| Field | Details |
|---|---|
| **Project Name** | [Project Name] |
| **Project ID** | [Project ID] |
| **Risk ID** | [Risk ID from Risk Register] |
| **Risk Description** | [Full description of the risk being accepted] |
| **Risk Category** | [Category] |
| **Residual Risk Rating** | [Score] — [Critical / High / Medium / Low] |
| **Reason for Acceptance** | [Explain why this risk is being accepted rather than treated. Include cost-benefit analysis if applicable.] |
| **Conditions of Acceptance** | [Any conditions, compensating controls, or monitoring arrangements that apply to this acceptance] |
| **Review Date** | [Date by which the acceptance must be reviewed or renewed] |
| **Risk Owner** | [Name and Title] |

**Acceptance Approvals:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Risk Owner | [Name] | | |
| Project Sponsor | [Name] | | |
| Head of Technology Risk | [Name] | | |
| [ITSC Chairperson — if High risk] | [Name] | | |
| [TRC Chairperson — if Critical risk] | [Name] | | |

---

### Appendix D: Post-Implementation Risk Review Template

*This template guides the Technology Risk Analyst in conducting the Post-Implementation Review (PIR) risk component within [X] days of project go-live.*

| Section | Content |
|---|---|
| **Project Name and ID** | [Project Name] / [Project ID] |
| **Go-Live Date** | [Date] |
| **PIR Date** | [Date] |
| **PIR Conducted By** | [Name(s)] |
| **Overall Risk Outcome** | [Summary of how risks were managed; key lessons; whether risk events materialized] |

**Risk Outcome Summary Table:**

| Risk ID | Risk Description | Pre-Go-Live Residual Rating | Outcome (Materialized / Not Materialized / Closed) | Post-Go-Live Residual Rating | Lessons Learned |
|---|---|---|---|---|---|
| [ID] | [Description] | [Rating] | [Outcome] | [Rating] | [Lessons] |

**Key Findings and Recommendations:**

1. [Finding 1 — e.g., Risk assessment was conducted too late in the project lifecycle; recommend initiating at project kick-off]
2. [Finding 2]
3. [Finding 3]

**Actions to Update Methodology or Risk Checklist:**

| Action | Responsible Party | Due Date |
|---|---|---|
| [Action — e.g., Add new risk category for AI/ML projects to Appendix A] | Head of Technology Risk | [Date] |

**PIR Approval:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk | [Name] | | |
| Project Sponsor | [Name] | | |

---

### Appendix E: Glossary Supplement

*This appendix provides supplementary definitions for technical and regulatory terms referenced in this methodology that are not covered in Section 4.*

| Term | Source | Definition |
|---|---|---|
| **Technology Risk** | BNM RMiT | The risk of loss or harm arising from the inadequate or failed use of technology, including IT systems, digital infrastructure, and data assets. |
| **Material Outsourcing** | BNM RMiT, Paragraph 11 | An outsourcing arrangement where the disruption or failure of the service would materially impact the financial institution's operations, reputation, or regulatory compliance. |
| **Critical Information Infrastructure (CII)** | NACSA | Systems and assets, whether physical or virtual, so vital to Malaysia that their incapacity or destruction would have a debilitating impact on national security, economic stability, or public health and safety. |
| **Privacy Impact Assessment (PIA)** | PDPA 2010 | A structured process to identify and assess privacy risks associated with the collection, use, disclosure, and disposal of personal data in a project or system. |
| **Recovery Time Objective (RTO)** | ISO 22301 | The maximum tolerable duration of time within which a business process must be restored following a disruption. |
| **Recovery Point Objective (RPO)** | ISO 22301 | The maximum tolerable period during which data might be lost from an IT service due to a major incident. |

---

*End of Document*

---

**Document Control Notice:** This document is subject to version control. Printed or downloaded copies are considered uncontrolled. Always refer to the master version held in [Document Management System / SharePoint Path] for the current approved version.