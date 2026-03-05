# Risk Assessment Methodology

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
| **Applicable Clauses** | RMiT 9.2 |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name] and must not be disclosed to external parties without prior written approval from the document owner.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Scope and Applicability](#3-scope-and-applicability)
4. [Risk Assessment Process Flow](#4-risk-assessment-process-flow)
5. [Risk Identification](#5-risk-identification)
6. [Risk Analysis and Evaluation](#6-risk-analysis-and-evaluation)
7. [Risk Rating and Prioritization](#7-risk-rating-and-prioritization)
8. [Risk Treatment and Response](#8-risk-treatment-and-response)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Tools and Systems](#10-tools-and-systems)
11. [Escalation Procedures](#11-escalation-procedures)
12. [Continuous Monitoring and Quarterly Review](#12-continuous-monitoring-and-quarterly-review)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the primary intent of this document and the problem it solves within the technology risk management lifecycle.*

This document establishes the **Risk Assessment Methodology** for [Organization Name], providing a structured, repeatable, and auditable framework for identifying, analyzing, evaluating, and treating technology risks. The methodology ensures that technology risks are managed in a manner consistent with the organization's risk appetite and in full compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically Clause 9.2.

This methodology supports the Board and Senior Management in maintaining a robust technology risk posture, enabling informed risk-based decision-making across all technology domains including information security, IT operations, digital services, and third-party technology arrangements.

### 1.2 Objectives

*List the specific outcomes this methodology is designed to achieve.*

The objectives of this methodology are to:

- Establish a consistent and repeatable process for identifying technology risks across [Organization Name];
- Define clear criteria for risk likelihood and impact assessment;
- Provide a structured approach to risk prioritization aligned with the organization's risk appetite;
- Ensure timely escalation of material technology risks to appropriate governance bodies;
- Support compliance with BNM RMiT requirements and other applicable regulatory obligations;
- Enable continuous monitoring and quarterly review of the technology risk profile;
- Facilitate clear assignment of ownership and accountability for identified risks.

### 1.3 Document Scope

*Define the boundaries of this document — what it covers and what it does not cover.*

This methodology applies to:

- All technology systems, infrastructure, applications, and platforms operated by or on behalf of [Organization Name];
- All departments and business units that own, operate, or rely on technology assets;
- Third-party service providers and vendors delivering technology services to [Organization Name];
- Technology change initiatives, projects, and programmes.

This document does **not** cover:

- Business continuity and disaster recovery planning (refer to [BCP/DR Policy Document ID]);
- Information Security Incident Response procedures (refer to [Incident Response Policy Document ID]);
- Vendor due diligence and onboarding processes (refer to [Third-Party Risk Management Policy Document ID]).

---

## 2. Regulatory Context

### 2.1 BNM RMiT Policy Alignment

*Summarize the relevant regulatory requirements that this document is designed to satisfy.*

[Organization Name] is subject to the **Risk Management in Technology (RMiT)** Policy Document issued by Bank Negara Malaysia (BNM), effective [RMiT Effective Date]. This methodology directly addresses the requirements set out in **Clause 9.2** of RMiT, which mandates that financial institutions maintain a documented technology risk assessment methodology that is:

- Applied consistently across the organization;
- Aligned with the institution's overall risk management framework;
- Reviewed and updated at appropriate intervals;
- Commensurate with the nature, scale, and complexity of technology operations.

### 2.2 Related Regulatory Obligations

*List all other applicable regulations, guidelines, and frameworks referenced by this document.*

| Regulation / Framework | Issuing Authority | Relevant Clause(s) | Applicability |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | 9.2 | Primary |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Clause Reference] | Supplementary |
| Personal Data Protection Act 2010 (PDPA) | Malaysian Government | [Section Reference] | Supplementary |
| NACSA Cybersecurity Framework | NACSA | [Reference] | Supplementary |
| ISO/IEC 27005:2022 – Information Security Risk Management | ISO/IEC | All | Supplementary |
| NIST Special Publication 800-30 | NIST | All | Reference |
| [Internal Enterprise Risk Management Framework] | [Organization Name] | All | Internal |

---

## 3. Scope and Applicability

### 3.1 Organizational Applicability

*Define which business units, functions, and entities this methodology applies to.*

This methodology applies to all of the following:

**Internal Entities:**

| Business Unit / Function | Applicability | Notes |
|---|---|---|
| Information Technology Division | Mandatory | Primary owner of technology assets |
| Information Security Department | Mandatory | Risk identification and assessment lead |
| Operations Division | Mandatory | Technology-dependent operational processes |
| Digital Banking / FinTech Unit | Mandatory | Emerging technology risk |
| Internal Audit | Mandatory | Independent assurance |
| Compliance Department | Mandatory | Regulatory risk oversight |
| [Business Unit Name] | [Mandatory / Advisory] | [Notes] |

**External Entities:**

- Third-party technology service providers under material outsourcing arrangements;
- Cloud service providers and managed security service providers (MSSPs);
- Technology vendors supplying critical systems or components.

### 3.2 Technology Asset Scope

*Define the categories of technology assets subject to this risk assessment methodology.*

Technology assets within scope include but are not limited to:

- **Core Banking Systems:** [List system names, e.g., core banking platform, payment processing systems]
- **Infrastructure:** Servers, network equipment, storage systems, data centres, and cloud environments
- **End-User Computing:** Laptops, mobile devices, and workstations
- **Applications:** Customer-facing applications, internal business applications, and APIs
- **Data Assets:** Databases, data warehouses, and data lakes containing customer or operational data
- **Third-Party Integrations:** APIs, data feeds, and connectivity with external service providers
- **Operational Technology (OT):** [If applicable — building management systems, physical security systems]

### 3.3 Exclusions

*Clearly state what is out of scope to prevent ambiguity during audits.*

The following are explicitly excluded from this methodology:

- Financial risk (credit, market, liquidity) — managed under the [Financial Risk Management Framework];
- Human resources and conduct risk — managed under [HR Policy];
- Physical security risk beyond its interface with technology assets.

---

## 4. Risk Assessment Process Flow

### 4.1 Overview

*Provide a high-level description of the end-to-end risk assessment process before detailing each step.*

The technology risk assessment process at [Organization Name] follows a six-stage lifecycle aligned with ISO/IEC 27005 and BNM RMiT requirements. The process is designed to be continuous, with formal quarterly reviews complemented by event-driven assessments triggered by material changes.

### 4.2 Process Stages

*Each stage below is described in detail in subsequent sections. This overview provides a quick reference.*

```
┌─────────────────────────────────────────────────────────────────────┐
│              TECHNOLOGY RISK ASSESSMENT LIFECYCLE                   │
├──────────┬──────────┬──────────┬──────────┬──────────┬─────────────┤
│  Stage 1 │  Stage 2 │  Stage 3 │  Stage 4 │  Stage 5 │   Stage 6   │
│  Scope & │   Risk   │  Risk    │  Risk    │  Risk    │  Monitor &  │
│  Context │  Identi- │ Analysis │ Evalua-  │Treatment │   Review    │
│  Setting │ fication │          │  tion    │          │             │
└──────────┴──────────┴──────────┴──────────┴──────────┴─────────────┘
```

| Stage | Activity | Trigger | Frequency | Primary Owner |
|---|---|---|---|---|
| 1 | Scope and Context Setting | Annual / Change-triggered | Annually or on material change | Head of Technology Risk |
| 2 | Risk Identification | Continuous | Ongoing | Technology Risk Team |
| 3 | Risk Analysis | Per identified risk | Per identification | Technology Risk Team |
| 4 | Risk Evaluation | Per risk cycle | Quarterly | Technology Risk Committee |
| 5 | Risk Treatment | Post-evaluation | Quarterly / Ongoing | Risk Owners |
| 6 | Monitoring and Review | Continuous | Continuous + Quarterly | Technology Risk Team |

### 4.3 Trigger Events for Ad Hoc Assessments

*Define the conditions that require an out-of-cycle risk assessment to be initiated.*

In addition to scheduled quarterly reviews, an ad hoc risk assessment shall be initiated upon occurrence of any of the following:

- Introduction of a new or significantly changed technology system or platform;
- Onboarding of a new third-party technology service provider;
- A material technology incident or near-miss event;
- Identification of a new threat intelligence indicator relevant to [Organization Name];
- Significant changes in the external threat landscape;
- Regulatory directive or supervisory finding requiring reassessment;
- Significant change in organizational structure or business strategy with technology implications.

---

## 5. Risk Identification

### 5.1 Methodology for Risk Identification

*Describe the approaches used to identify technology risks, including both proactive and reactive methods.*

[Organization Name] employs a multi-source approach to technology risk identification, ensuring comprehensive coverage across threat vectors, vulnerabilities, and business impacts.

**Identification Methods:**

| Method | Description | Responsible Party | Frequency |
|---|---|---|---|
| Asset-Based Review | Systematic review of technology asset inventory to identify risks inherent to each asset class | Technology Risk Team | Quarterly |
| Threat Intelligence Review | Analysis of threat feeds, BNM advisories, and industry alerts | Information Security Department | Continuous |
| Vulnerability Scanning | Automated scanning of infrastructure and applications | IT Operations / Security | [Frequency, e.g., Weekly] |
| Penetration Testing | Simulated attacks to identify exploitable vulnerabilities | [Internal / External Party] | [Frequency, e.g., Annually] |
| Process Walkthroughs | Structured interviews and workshops with process owners | Technology Risk Team | Quarterly |
| Audit and Regulatory Findings | Review of internal audit reports and BNM examination findings | Internal Audit / Compliance | Ongoing |
| Incident Review | Analysis of past technology incidents to identify systemic risks | Incident Management Team | Post-incident |
| Change and Project Risk Review | Risk identification during technology change assessment | Project / Change Management | Per change event |

### 5.2 Risk Register

*Explain the structure of the risk register and how identified risks are logged.*

All identified technology risks shall be recorded in the **Technology Risk Register**, maintained by the Technology Risk Team using [Risk Management System / Tool Name]. Each risk entry shall capture the following minimum data fields:

| Field | Description | Example |
|---|---|---|
| Risk ID | Unique identifier | TRM-2025-001 |
| Risk Category | Classification of risk type | Cybersecurity / IT Operations / Third-Party |
| Risk Description | Clear statement of the risk event | Unauthorized access to core banking system due to weak authentication controls |
| Affected Asset(s) | Technology assets impacted | Core Banking Platform, Customer Database |
| Threat Source | Origin of the threat | External attacker / Insider threat / System failure |
| Vulnerability | Weakness being exploited | Absence of multi-factor authentication |
| Existing Controls | Current mitigating controls in place | [Control Description] |
| Risk Owner | Individual accountable for managing the risk | [Name / Role] |
| Date Identified | Date the risk was first recorded | [DD/MM/YYYY] |
| Date Last Reviewed | Most recent assessment date | [DD/MM/YYYY] |
| Status | Current status | Open / In Treatment / Accepted / Closed |

### 5.3 Risk Categories

*Define the taxonomy of technology risk categories used by the organization.*

Technology risks shall be classified under the following categories aligned with BNM RMiT:

| Risk Category | Sub-Category | Description |
|---|---|---|
| **Cybersecurity Risk** | Threat and Vulnerability | Risks arising from cyber threats including malware, phishing, DDoS, and APTs |
| **Cybersecurity Risk** | Data Breach | Unauthorized access, disclosure, or exfiltration of sensitive data |
| **IT Operations Risk** | System Availability | Risks to system uptime and service continuity |
| **IT Operations Risk** | Change Management | Risks arising from uncontrolled or failed technology changes |
| **Third-Party Risk** | Outsourcing | Risks from third-party technology service providers |
| **Third-Party Risk** | Concentration Risk | Over-reliance on a single vendor or cloud provider |
| **Data Management Risk** | Data Integrity | Risks of data corruption, loss, or unauthorized modification |
| **Emerging Technology Risk** | AI / ML | Risks from adoption of artificial intelligence and machine learning |
| **Emerging Technology Risk** | Cloud | Risks specific to cloud computing environments |
| **Compliance Risk** | Regulatory | Non-compliance with applicable laws and BNM requirements |
| **[Custom Category]** | [Sub-Category] | [Description] |

---

## 6. Risk Analysis and Evaluation

### 6.1 Risk Analysis Approach

*Describe whether the organization uses qualitative, quantitative, or a hybrid approach to risk analysis.*

[Organization Name] adopts a **hybrid risk analysis approach**, combining qualitative assessment for routine risk reviews with semi-quantitative analysis for material or high-rated risks. This approach balances analytical rigour with operational practicality and is consistent with BNM RMiT Clause 9.2 requirements.

### 6.2 Likelihood Assessment

*Define the criteria used to determine the likelihood of a risk event occurring.*

Risk likelihood shall be assessed based on the probability of a threat successfully exploiting an existing vulnerability, taking into account current controls.

**Likelihood Scale:**

| Rating | Level | Description | Indicative Frequency |
|---|---|---|---|
| 5 | Almost Certain | The risk event is expected to occur under most circumstances | More than once per year |
| 4 | Likely | The risk event will probably occur in most circumstances | Once per year |
| 3 | Possible | The risk event might occur at some point | Once every 2–5 years |
| 2 | Unlikely | The risk event could occur in exceptional circumstances | Once every 5–10 years |
| 1 | Rare | The risk event may only occur in exceptional circumstances | Less than once every 10 years |

**Factors considered in likelihood determination:**

- Threat actor capability and motivation;
- Frequency of past incidents (internal and industry);
- Effectiveness of existing preventive controls;
- Current vulnerability status (patched vs. unpatched);
- Threat intelligence indicators.

### 6.3 Impact Assessment

*Define the criteria used to determine the severity of impact if a risk event were to occur.*

Risk impact shall be assessed across the following dimensions, with the **highest dimension rating** used as the overall impact score:

**Impact Dimensions:**

| Dimension | Description |
|---|---|
| Financial | Direct financial loss, regulatory fines, remediation costs |
| Reputational | Damage to brand, customer trust, and public confidence |
| Operational | Disruption to business operations and service delivery |
| Regulatory / Legal | Non-compliance with BNM requirements, legal liability |
| Customer | Harm to customers including data exposure or service unavailability |

**Impact Scale:**

| Rating | Level | Financial Impact | Operational Impact | Regulatory Impact |
|---|---|---|---|---|
| 5 | Catastrophic | > RM [Threshold A] | Complete service disruption > [X] hours | Regulatory sanction / license revocation risk |
| 4 | Major | RM [Threshold B] – RM [Threshold A] | Significant disruption [Y]–[X] hours | Formal regulatory enforcement action |
| 3 | Moderate | RM [Threshold C] – RM [Threshold B] | Partial service impact [Z]–[Y] hours | Regulatory inquiry or warning |
| 2 | Minor | RM [Threshold D] – RM [Threshold C] | Minimal disruption < [Z] hours | Compliance observation raised |
| 1 | Negligible | < RM [Threshold D] | No material disruption | No regulatory implication |

*Note: Financial thresholds [A, B, C, D] are to be defined by Senior Management and approved by the Board Risk Committee, commensurate with the organization's size and risk appetite.*

### 6.4 Risk Rating Matrix

*Describe how likelihood and impact scores are combined to produce an overall risk rating.*

The **inherent risk rating** is calculated as the product of likelihood and impact scores. The **residual risk rating** is calculated after accounting for the effectiveness of existing controls.

**Risk Rating Matrix:**

| | **Impact 1** Negligible | **Impact 2** Minor | **Impact 3** Moderate | **Impact 4** Major | **Impact 5** Catastrophic |
|---|---|---|---|---|---|
| **Likelihood 5** Almost Certain | 5 — Medium | 10 — High | 15 — High | 20 — Critical | 25 — Critical |
| **Likelihood 4** Likely | 4 — Low | 8 — Medium | 12 — High | 16 — Critical | 20 — Critical |
| **Likelihood 3** Possible | 3 — Low | 6 — Medium | 9 — Medium | 12 — High | 15 — High |
| **Likelihood 2** Unlikely | 2 — Low | 4 — Low | 6 — Medium | 8 — Medium | 10 — High |
| **Likelihood 1** Rare | 1 — Low | 2 — Low | 3 — Low | 4 — Low | 5 — Medium |

**Risk Rating Legend:**

| Rating | Score Range | Color Code | Required Action |
|---|---|---|---|
| **Critical** | 16 – 25 | Red | Immediate escalation to Board Risk Committee; treatment plan required within [X] days |
| **High** | 10 – 15 | Orange | Escalation to Technology Risk Committee; treatment plan within [Y] days |
| **Medium** | 5 – 9 | Yellow | Management attention; treatment plan within [Z] days |
| **Low** | 1 – 4 | Green | Routine monitoring; review at next quarterly cycle |

### 6.5 Control Effectiveness Assessment

*Describe how existing controls are assessed to determine their effectiveness in reducing inherent risk to residual risk.*

Each existing control shall be assessed for its effectiveness in reducing the likelihood and/or impact of the associated risk. Control effectiveness shall be rated as follows:

| Effectiveness Rating | Description | Risk Score Reduction |
|---|---|---|
| Strong (3) | Control is fully implemented, regularly tested, and operating effectively | Reduce inherent score by up to [X] points |
| Adequate (2) | Control is implemented but may have minor gaps or inconsistencies | Reduce inherent score by up to [Y] points |
| Weak (1) | Control exists but has material gaps or is not consistently applied | Minimal reduction |
| Not in Place (0) | No relevant control exists | No reduction; residual = inherent |

---

## 7. Risk Rating and Prioritization

### 7.1 Residual Risk Determination

*Explain how residual risk is calculated after considering existing controls.*

Residual risk represents the level of risk remaining after the application of existing controls. It is determined by reassessing likelihood and impact scores in the context of control effectiveness:

**Residual Likelihood** = Inherent Likelihood − Control Effectiveness (Likelihood Reduction)

**Residual Impact** = Inherent Impact − Control Effectiveness (Impact Reduction)

**Residual Risk Score** = Residual Likelihood × Residual Impact

### 7.2 Risk Appetite Alignment

*Define how residual risk ratings are compared against the organization's stated risk appetite.*

Residual risk ratings shall be assessed against [Organization Name]'s approved **Technology Risk Appetite Statement**, which sets the following boundaries:

| Risk Category | Risk Appetite Level | Maximum Acceptable Residual Rating |
|---|---|---|
| Cybersecurity | Low | Medium (score ≤ 9) |
| IT Operations / Availability | Low | Medium (score ≤ 9) |
| Third-Party / Outsourcing | Medium | High (score ≤ 15) |
| Data Management | Low | Medium (score ≤ 9) |
| Emerging Technology | Medium | High (score ≤ 15) |
| Compliance | Zero Tolerance | Low (score ≤ 4) |

*Note: The Technology Risk Appetite Statement is subject to annual Board approval. Refer to [Risk Appetite Statement Document ID].*

### 7.3 Risk Prioritization

*Describe how risks are prioritized for treatment given resource constraints.*

Where multiple risks require treatment simultaneously, prioritization shall be based on:

1. **Residual risk rating** — Critical risks are addressed first;
2. **Regulatory compliance implications** — Risks with direct regulatory breach consequences take precedence;
3. **Customer impact** — Risks affecting customer data or service availability are prioritized;
4. **Treatment feasibility** — Quick wins (high risk reduction, low effort) are actioned concurrently with complex remediations.

---

## 8. Risk Treatment and Response

### 8.1 Treatment Options

*Describe the four standard risk treatment options available to risk owners.*

Following risk evaluation, the risk owner shall select an appropriate treatment strategy:

| Treatment Option | Description | Applicability |
|---|---|---|
| **Avoid** | Eliminate the risk by discontinuing the activity that causes it | Where the risk cannot be reduced to appetite and the activity is not essential |
| **Mitigate / Reduce** | Implement additional controls to reduce likelihood and/or impact | Most common treatment for technology risks |
| **Transfer** | Transfer the financial consequences via insurance or contractual means | Residual risks where mitigation is cost-prohibitive |
| **Accept** | Formally accept the risk where it falls within risk appetite | Low risks or where cost of treatment exceeds benefit |

### 8.2 Treatment Plan Requirements

*Specify what must be included in a risk treatment plan.*

For all **High** and **Critical** rated risks, a formal **Risk Treatment Plan** shall be documented and approved. Each treatment plan shall include:

| Field | Description |
|---|---|
| Risk ID | Reference to the risk register entry |
| Risk Rating (Residual) | Current residual risk rating |
| Treatment Strategy | Selected treatment option (Avoid / Mitigate / Transfer / Accept) |
| Proposed Control(s) | Specific controls or actions to be implemented |
| Target Residual Rating | Expected risk rating post-treatment |
| Responsible Owner | Named individual accountable for treatment implementation |
| Resources Required | Budget, personnel, and tools needed |
| Milestone 1 | [Action] — Target date: [DD/MM/YYYY] |
| Milestone 2 | [Action] — Target date: [DD/MM/YYYY] |
| Completion Target Date | Final implementation date |
| Progress Status | Not Started / In Progress / Completed / Overdue |
| Last Updated | [DD/MM/YYYY] |

### 8.3 Risk Acceptance

*Define the conditions under which formal risk acceptance is permitted and who has authority to accept.*

Residual risks that cannot be fully mitigated shall only be formally accepted within the following authority limits:

| Residual Risk Rating | Acceptance Authority | Documentation Requirement |
|---|---|---|
| Low | Head of Technology Risk | Recorded in Risk Register |
| Medium | Chief Information Officer (CIO) / Chief Risk Officer (CRO) | Written justification and sign-off |
| High | Technology Risk Committee | Committee resolution and documented rationale |
| Critical | Board Risk Committee | Board resolution; BNM notification may be required |

*Note: Risk acceptance does not eliminate the obligation to continue monitoring the risk. All accepted risks shall be reviewed at the next quarterly cycle or upon material change.*

---

## 9. Roles and Responsibilities

### 9.1 Overview

*Describe the governance structure supporting technology risk assessment activities.*

The technology risk assessment process is supported by a defined governance structure. Responsibilities are assigned in accordance with the **Three Lines of Defence** model:

- **First Line:** Business and technology units that own and manage technology risks;
- **Second Line:** Technology Risk and Compliance functions that provide oversight and challenge;
- **Third Line:** Internal Audit, which provides independent assurance.

### 9.2 RACI Matrix

*The RACI matrix defines who is Responsible, Accountable, Consulted, and Informed for each activity in the risk assessment process.*

**RACI Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Board / Board Risk Committee | CIO / CRO | Head of Technology Risk | Technology Risk Team | IT / System Owners | Information Security | Internal Audit | Compliance |
|---|---|---|---|---|---|---|---|---|
| Approve Risk Assessment Methodology | A | C | R | I | I | C | C | C |
| Set and approve Risk Appetite | A | C | C | I | I | C | I | C |
| Define risk assessment scope | I | A | R | R | C | C | I | C |
| Conduct risk identification workshops | I | I | A | R | R | C | I | I |
| Maintain Technology Risk Register | I | I | A | R | C | C | I | I |
| Perform likelihood and impact analysis | I | I | A | R | C | R | I | I |
| Assess control effectiveness | I | I | A | R | R | R | C | I |
| Develop risk treatment plans | I | C | A | C | R | C | I | I |
| Approve risk treatment plans (High/Critical) | C | A | R | I | C | C | I | C |
| Monitor treatment plan progress | I | I | A | R | R | C | I | I |
| Escalate Critical / High risks | A | I | R | C | I | C | I | C |
| Conduct quarterly risk review | I | A | R | R | C | C | I | C |
| Report to Technology Risk Committee | I | A | R | C | I | C | I | I |
| Report to Board Risk Committee | A | C | R | I | I | I | I | C |
| Provide independent assurance | I | I | C | I | I | I | A/R | I |

### 9.3 Key Role Descriptions

*Provide a brief description of the specific responsibilities for each key role.*

**Board Risk Committee**
- Approves the Technology Risk Appetite Statement;
- Receives quarterly technology risk reports;
- Approves formal acceptance of Critical-rated risks;
- Provides oversight of the adequacy of the technology risk management framework.

**Chief Information Officer (CIO) / Chief Risk Officer (CRO)**
- Accountable for the overall technology risk management function;
- Approves High-rated risk treatment plans;
- Chairs or participates in the Technology Risk Committee;
- Escalates material risks to the Board Risk Committee.

**Head of Technology Risk**
- Owns and maintains this Risk Assessment Methodology document;
- Oversees the conduct of all technology risk assessments;
- Manages the Technology Risk Register;
- Prepares risk reports for governance committees.

**Technology Risk Team**
- Executes day-to-day risk identification and assessment activities;
- Maintains and updates the Technology Risk Register;
- Coordinates risk assessment workshops with system owners;
- Monitors the implementation of risk treatment plans.

**IT / System Owners**
- Provide subject matter expertise during risk identification;
- Own and implement risk treatment plans for risks within their domain;
- Report new or emerging risks to the Technology Risk Team.

**Information Security Department**
- Provides threat intelligence inputs to the risk assessment process;
- Assesses cybersecurity-specific risks and control effectiveness;
- Conducts or oversees vulnerability assessments and penetration testing.

**Internal Audit**
- Provides independent assurance on the adequacy and effectiveness of the risk assessment process;
- Reviews compliance with this methodology during scheduled audits;
- Reports findings to the Audit Committee.

---

## 10. Tools and Systems

### 10.1 Risk Management Systems

*List and describe the tools, platforms, and systems used to support the technology risk assessment process.*

| Tool / System | Purpose | Owner | Access Level |
|---|---|---|---|
| [Risk Management System Name, e.g., RiskEdge / MetricStream / Custom GRC Tool] | Primary risk register and workflow management | Technology Risk Team | Technology Risk, CIO, CRO, Internal Audit |
| [Vulnerability Management Platform, e.g., Tenable / Qualys] | Automated vulnerability scanning and reporting | Information Security | IT Operations, Security Team |
| [SIEM Platform, e.g., Wazuh / Splunk] | Security event monitoring and threat detection | Information Security | Security Operations Centre |
| [Threat Intelligence Platform, e.g., MISP / OpenCTI] | Threat intelligence feeds and indicator management | Information Security | Security Team, Technology Risk |
| [Project / Change Management Tool] | Tracking technology change requests and associated risks | IT Operations | IT, Project Management, Change Advisory Board |
| Microsoft Excel / [Approved Spreadsheet Tool] | Ad hoc risk analysis and reporting (where GRC tool unavailable) | Technology Risk Team | Authorized users only |
| [Document Management System] | Storage and version control of risk documentation | [Department] | All authorized staff |

### 10.2 Data Inputs to Risk Assessment

*Describe the information sources and data feeds that inform the risk assessment process.*

The technology risk assessment process draws on the following data inputs:

- **Asset Inventory:** Maintained in [Asset Management System]; updated [frequency];
- **Vulnerability Scan Reports:** Generated by [Vulnerability Management Platform]; reviewed [frequency];
- **Incident Logs:** Extracted from [ITSM / Incident Management System];
- **Audit Reports:** Internal audit findings from [Audit Management System];
- **Threat Intelligence Feeds:** [List feeds, e.g., BNM advisories, FS-ISAC, NACSA alerts, commercial feeds];
- **Third-Party Risk Assessments:** Outputs from vendor due diligence reviews;
- **Penetration Test Reports:** Conducted by [Internal / External Party] on [Frequency];
- **Regulatory Examination Findings:** BNM supervisory feedback and examination reports.

### 10.3 Reporting Outputs

*Define the reports generated by the risk assessment process and their intended audiences.*

| Report | Content | Frequency | Audience | Format |
|---|---|---|---|---|
| Technology Risk Dashboard | Summary of risk register, ratings, and treatment status | Monthly | CIO, CRO, Technology Risk Committee | [Format] |
| Quarterly Technology Risk Report | Detailed risk assessment results, emerging risks, treatment progress | Quarterly | Technology Risk Committee, Board Risk Committee | [Format] |
| Critical Risk Alert | Notification of newly identified Critical-rated risk | Ad hoc / within [X] hours | CIO, CRO, Head of Technology Risk | [Format] |
| Annual Risk Assessment Summary | Comprehensive annual review of technology risk profile | Annually | Board Risk Committee, BNM (if required) | [Format] |
| [Custom Report Name] | [Description] | [Frequency] | [Audience] | [Format] |

---

## 11. Escalation Procedures

### 11.1 Escalation Triggers

*Define the conditions that require escalation beyond the routine risk management process.*

The following conditions shall trigger immediate escalation outside of the standard quarterly review cycle:

| Trigger | Escalation Threshold | Initial Escalation Target | Timeframe |
|---|---|---|---|
| Newly identified Critical-rated risk | Risk score ≥ 16 | Head of Technology Risk | Immediately upon identification |
| Critical risk score increase | Residual rating escalates to Critical | CIO / CRO | Within [X] business hours |
| Treatment plan significantly overdue | > [X] days past target completion date | Technology Risk Committee | Within [Y] business days |
| Material technology incident | [Define materiality threshold] | Incident Response Team + Head of Technology Risk | Immediately |
| Suspected regulatory breach | Any compliance risk rated ≥ Medium | CRO + Compliance Department | Immediately |
| BNM advisory or directive received | Any BNM communication with risk implications | Head of Technology Risk + Compliance | Within [X] business hours |
| Third-party critical failure | Material outsourced service provider incident | CIO + Third-Party Risk Owner | Immediately |

### 11.2 Escalation Path

*Define the escalation hierarchy for technology risk issues.*

```
Level 1: Technology Risk Team
        (Identifies and logs risk; initiates assessment)
             |
             ▼
Level 2: Head of Technology Risk
        (Validates severity; coordinates initial response)
             |
             ▼
Level 3: CIO / CRO
        (Approves treatment plan; notifies senior management)
             |
             ▼
Level 4: Technology Risk Committee
        (Reviews High and Critical risks; approves treatment)
             |
             ▼
Level 5: Board Risk Committee
        (Receives Critical risk reports; approves acceptance)
             |
             ▼
Level 6: BNM Notification (if required by RMiT or other regulation)
```

### 11.3 Escalation Communication Requirements

*Define the mandatory communication requirements during escalation.*

Upon escalation, the following information shall be communicated at each level:

- Risk ID and description;
- Current inherent and residual risk rating;
- Affected systems, assets, and business processes;
- Customer impact assessment;
- Proposed treatment actions and responsible owner;
- Estimated timeline for risk reduction;
- Any regulatory notification obligations.

All escalation communications shall be documented and retained in accordance with [Organization Name]'s records management policy.

### 11.4 BNM Notification Requirements

*Specify the conditions under which BNM must be formally notified.*

[Organization Name] shall notify BNM in accordance with the notification requirements set out in the RMiT Policy Document and other applicable BNM guidelines in the following circumstances:

- [Condition 1, e.g., Material technology incident affecting customer services beyond defined thresholds — refer to Incident Management Policy];
- [Condition 2, e.g., Significant breach of customer data];
- [Condition 3, e.g., Extended system outage exceeding regulatory thresholds];
- [Any other BNM-mandated notification trigger as per current guidelines].

*Note: Refer to the [Incident Response and BNM Reporting Procedure Document ID] for detailed notification procedures, timelines, and templates.*

---

## 12. Continuous Monitoring and Quarterly Review

### 12.1 Continuous Monitoring Activities

*Describe the day-to-day and ongoing monitoring activities that form part of the risk management process.*

Continuous monitoring ensures that the technology risk profile remains current between formal quarterly reviews. The following monitoring activities shall be maintained on an ongoing basis:

| Monitoring Activity | Responsible Party | Frequency | Tool / System |
|---|---|---|---|
| Vulnerability scan review | Information Security | [Weekly / Bi-weekly] | [Vulnerability Platform] |
| Patch compliance monitoring | IT Operations | Weekly | [Patch Management Tool] |
| Security event and alert triage | Security Operations Centre | Continuous / Daily | [SIEM Platform] |
| Threat intelligence review | Information Security | [Daily / Weekly] | [Threat Intel Platform] |
| Change request risk review | Change Advisory Board | Per change event | [Change Management Tool] |
| Third-party performance monitoring | Third-Party Risk Owner | Monthly | [Contract / SLA Monitoring Tool] |
| Treatment plan progress tracking | Technology Risk Team | Bi-weekly | [Risk Management System] |
| Risk register hygiene check | Technology Risk Team | Monthly | [Risk Management System] |

### 12.2 Quarterly Review Process

*Describe the formal quarterly risk review process, including agenda, participants, and outputs.*

A formal **Quarterly Technology Risk Review** shall be conducted according to the following process:

**Step 1 — Preparation (2 weeks prior to review)**
- Technology Risk Team extracts current risk register snapshot;
- System and asset owners submit risk status updates;
- Information Security provides threat landscape update;
- Treatment plan owners submit progress updates.

**Step 2 — Risk Re-Assessment**
- Review all open risks for changes in likelihood, impact, or control effectiveness;
- Identify any new risks emerging since the previous review;
- Close risks that have been fully remediated.

**Step 3 — Report Preparation**
- Technology Risk Team prepares the Quarterly Technology Risk Report;
- Report includes: risk register summary, rating movements, emerging risks, treatment plan status, and recommended actions.

**Step 4 — Technology Risk Committee Review**
- Committee reviews the quarterly report;
- Approves treatment plans for High and Critical risks;
- Issues directives for additional risk treatment actions.

**Step 5 — Board Reporting**
- Summary of material risks and key developments escalated to Board Risk Committee;
- Board approves any Critical risk acceptance decisions.

**Quarterly Review Calendar:**

| Quarter | Review Period | Target Committee Date | Board Report Date |
|---|---|---|---|
| Q1 | January – March | [Target Date, e.g., Last week of March] | [Target Date] |
| Q2 | April – June | [Target Date] | [Target Date] |
| Q3 | July – September | [Target Date] | [Target Date] |
| Q4 | October – December | [Target Date] | [Target Date] |

### 12.3 Annual Review of This Methodology

*Define the process for reviewing and updating this methodology document itself.*

This Risk Assessment Methodology shall be reviewed in full at least **annually** by the Head of Technology Risk, and updated whenever:

- There are material changes to BNM RMiT requirements or other applicable regulations;
- Significant changes occur in [Organization Name]'s technology environment or operating model;
- Internal audit or regulatory examination findings indicate gaps in the methodology;
- Industry best practices or risk management standards are updated.

Any amendments to this document require approval in accordance with Section 13.2 (Approval Sign-Off).

---

## 13. Review and Approval

### 13.1 Version History

*Maintain a complete version history of this document, recording all changes made at each revision.*

| Version | Date | Author | Reviewed By | Description of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name], Technology Risk Team | [Reviewer Name], Head of Technology Risk | Initial release |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Reviewer Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Reviewer Name] | [Major revision — describe key changes] |

### 13.2 Approval Sign-Off

*This section must be completed by all required approvers prior to the document becoming effective. Signatures confirm review and approval of this version of the document.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], Technology Risk Team | | [DD/MM/YYYY] |
| Reviewed By | [Name], Head of Technology Risk | | [DD/MM/YYYY] |
| Reviewed By | [Name], Information Security | | [DD/MM/YYYY] |
| Reviewed By | [Name], Compliance Department | | [DD/MM/YYYY] |
| Reviewed By | [Name], Internal Audit | | [DD/MM/YYYY] |
| Approved By | [Name], Chief Information Officer | | [DD/MM/YYYY] |
| Approved By | [Name], Chief Risk Officer | | [DD/MM/YYYY] |
| Endorsed By | [Name], Board Risk Committee | | [DD/MM/YYYY] |

### 13.3 Distribution List

*Record all parties to whom this document has been formally distributed.*

| Department / Role | Name | Date Distributed | Version |
|---|---|---|---|
| Technology Risk Team | [All members] | [DD/MM/YYYY] | 1.0 |
| Information Security Department | [Head of Information Security] | [DD/MM/YYYY] | 1.0 |
| IT Operations | [Head of IT Operations] | [DD/MM/YYYY] | 1.0 |
| Compliance Department | [Chief Compliance Officer] | [DD/MM/YYYY] | 1.0 |
| Internal Audit | [Chief Internal Auditor] | [DD/MM/YYYY] | 1.0 |
| [Department] | [Name] | [DD/MM/YYYY] | 1.0 |

---

## 14. References

*List all regulatory documents, standards, and internal policies referenced in or informing this document.*

### 14.1 Regulatory References

| Reference | Title | Issuing Body | Version / Date | Relevant Clause(s) |
|---|---|---|---|---|
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | [Effective Date] | **9.2** (Technology Risk Assessment) |
| [BNM Reference] | Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Date] | [Relevant Clauses] |
| [BNM Reference] | Policy Document on Outsourcing | Bank Negara Malaysia | [Date] | [Relevant Clauses] |
| Act 709 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 (as amended) | [Relevant Sections] |
| [NACSA Reference] | [NACSA Cybersecurity Framework] | NACSA | [Date] | [Reference] |

### 14.2 Standards and Frameworks

| Standard | Title | Issuing Body | Version |
|---|---|---|---|
| ISO/IEC 27005:2022 | Information Security, Cybersecurity and Privacy Protection — Guidance on Managing Information Security Risks | ISO/IEC | 2022 |
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | ISO/IEC | 2022 |
| NIST SP 800-30 Rev.1 | Guide for Conducting Risk Assessments | NIST | 2012 |
| NIST Cybersecurity Framework | Framework for Improving Critical Infrastructure Cybersecurity | NIST | 2.0 (2024) |
| COBIT 2019 | Control Objectives for Information Technologies | ISACA | 2019 |

### 14.3 Internal Policy References

| Document ID | Title | Owner | Latest Version |
|---|---|---|---|
| [Doc ID] | Technology Risk Management Policy | Head of Technology Risk | [Version] |
| [Doc ID] | Information Security Policy | Head of Information Security | [Version] |
| [Doc ID] | Technology Risk Appetite Statement | Chief Risk Officer | [Version] |
| [Doc ID] | Incident Response and BNM Reporting Procedure | Head of Technology Risk | [Version] |
| [Doc ID] | Third-Party Risk Management Policy | [Owner] | [Version] |
| [Doc ID] | Business Continuity and Disaster Recovery Plan | [Owner] | [Version] |
| [Doc ID] | Change Management Policy | Head of IT Operations | [Version] |

---

## 15. Appendices

### Appendix A — Risk Register Template

*This template provides a standardized format for recording technology risks in [Organization Name]'s Risk Register. The master Risk Register is maintained in [Risk Management System]. This template is provided for reference and offline use only.*

| Field | Entry |
|---|---|
| **Risk ID** | TRM-[YYYY]-[NNN] |
| **Risk Category** | [Cybersecurity / IT Operations / Third-Party / Data Management / Emerging Technology / Compliance] |
| **Risk Sub-Category** | [Sub-category per Section 5.3] |
| **Risk Description** | [Clear, concise description of the risk event, cause, and potential consequence] |
| **Affected Asset(s)** | [Asset name(s) from asset inventory] |
| **Asset Criticality** | [Critical / High / Medium / Low] |
| **Threat Source** | [External Attacker / Insider / System Failure / Vendor / Natural Event / Other] |
| **Vulnerability / Root Cause** | [Specific weakness or gap enabling this risk] |
| **Existing Controls** | [List current controls with control IDs if available] |
| **Inherent Likelihood** | [1–5] |
| **Inherent Impact** | [1–5] |
| **Inherent Risk Score** | [Likelihood × Impact] |
| **Inherent Risk Rating** | [Critical / High / Medium / Low] |
| **Control Effectiveness** | [Strong / Adequate / Weak / Not in Place] |
| **Residual Likelihood** | [1–5] |
| **Residual Impact** | [1–5] |
| **Residual Risk Score** | [Likelihood × Impact] |
| **Residual Risk Rating** | [Critical / High / Medium / Low] |
| **Within Risk Appetite?** | [Yes / No] |
| **Treatment Strategy** | [Avoid / Mitigate / Transfer / Accept] |
| **Treatment Plan Ref** | [Treatment Plan ID if applicable] |
| **Risk Owner** | [Name and Title] |
| **Date Identified** | [DD/MM/YYYY] |
| **Date Last Reviewed** | [DD/MM/YYYY] |
| **Next Review Date** | [DD/MM/YYYY] |
| **Status** | [Open / In Treatment / Accepted / Closed] |
| **Comments** | [Additional context, links to related risks or incidents] |

---

### Appendix B — Risk Treatment Plan Template

*Use this template to document formal risk treatment plans for High and Critical rated risks. Completed plans must be approved in accordance with Section 8.3.*

**Risk Treatment Plan**

| Field | Details |
|---|---|
| **Plan ID** | RTP-[YYYY]-[NNN] |
| **Risk ID (from Register)** | TRM-[YYYY]-[NNN] |
| **Risk Description** | [As per Risk Register] |
| **Current Residual Rating** | [Critical / High] |
| **Target Residual Rating** | [Rating after treatment] |
| **Treatment Strategy** | [Mitigate / Avoid / Transfer / Accept] |
| **Prepared By** | [Name], [Date] |
| **Approved By** | [Name and Role], [Date] |

**Proposed Controls / Actions:**

| # | Action Description | Control Type | Responsible Owner | Target Date | Status | Evidence of Completion |
|---|---|---|---|---|---|---|
| 1 | [Describe specific action] | [Preventive / Detective / Corrective] | [Name / Role] | [DD/MM/YYYY] | [Not Started / In Progress / Complete] | [Evidence description] |
| 2 | [Describe specific action] | [Control Type] | [Name / Role] | [DD/MM/YYYY] | [Status] | [Evidence] |
| 3 | [Describe specific action] | [Control Type] | [Name / Role] | [DD/MM/YYYY] | [Status] | [Evidence] |

**Resources Required:**

- Budget: RM [Amount] (approved under [Budget Reference])
- Personnel: [Names / Roles]
- External Support: [Vendor / Consultant if applicable]

**Review Dates:**

| Review Date | Reviewer | Status Update | Next Review Date |
|---|---|---|---|
| [DD/MM/YYYY] | [Name] | [Update] | [DD/MM/YYYY] |

---

### Appendix C — Risk Assessment Workshop Guide

*This guide is used by the Technology Risk Team when facilitating risk identification workshops with business units and system owners.*

**Workshop Objectives:**
- Identify technology risks specific to the business unit's processes and systems;
- Validate existing risk register entries for continued relevance;
- Gather input on control effectiveness from frontline owners.

**Pre-Workshop Checklist:**
- [ ] Confirm attendees and distribute pre-read materials at least [X] business days in advance;
- [ ] Prepare asset inventory extract for the relevant business unit;
- [ ] Extract current risk register entries for the scope area;
- [ ] Prepare blank risk register template for new risk capture;
- [ ] Confirm access to [Risk Management System] for real-time entry.

**Workshop Agenda Template:**

| Time | Activity | Facilitator |
|---|---|---|
| [HH:MM] – [HH:MM] | Introduction and objectives | Head of Technology Risk |
| [HH:MM] – [HH:MM] | Review of existing risks and status updates | Technology Risk Team |
| [HH:MM] – [HH:MM] | New risk identification — structured brainstorm | Technology Risk Team |
| [HH:MM] – [HH:MM] | Preliminary likelihood and impact discussion | Technology Risk Team |
| [HH:MM] – [HH:MM] | Control effectiveness review | [System Owner] |
| [HH:MM] – [HH:MM] | Action items and close | Head of Technology Risk |

**Risk Identification Prompts:**
- What would happen if [System X] was unavailable for [Y] hours?
- What sensitive data does your team handle, and how is access controlled?
- Have there been any near-miss events or incidents in the past [period]?
- Are there any upcoming technology changes that may introduce new risks?
- Are there any vendor or third-party dependencies that concern you?

---

### Appendix D — Quarterly Risk Review Checklist

*Use this checklist to ensure all required activities are completed during the quarterly risk review cycle.*

**Preparation (T-14 days):**
- [ ] Extract risk register snapshot from [Risk Management System];
- [ ] Request status updates from all risk and treatment plan owners;
- [ ] Obtain threat intelligence summary from Information Security;
- [ ] Compile list of technology changes, incidents, and new third-party arrangements in the quarter;
- [ ] Identify any new regulatory developments or BNM advisories.

**Assessment (T-7 days):**
- [ ] Re-assess likelihood and impact for all open risks;
- [ ] Update control effectiveness ratings based on latest evidence;
- [ ] Recalculate residual risk scores;
- [ ] Identify any risks that have crossed rating thresholds (e.g., Medium → High);
- [ ] Close risks that have been fully remediated with evidence;
- [ ] Identify and log any new risks emerging in the quarter.

**Reporting (T-3 days):**
- [ ] Prepare Quarterly Technology Risk Report;
- [ ] Prepare Board Risk Committee summary (for material risks);
- [ ] Submit report to Head of Technology Risk for review and approval.

**Committee Review:**
- [ ] Present findings to Technology Risk Committee;
- [ ] Obtain approval for High and Critical risk treatment plans;
- [ ] Record all committee decisions and action items in meeting minutes.

**Post-Review:**
- [ ] Distribute updated risk register to all risk owners;
- [ ] Issue treatment plan approvals to responsible owners;
- [ ] Submit Board report to Secretariat for Board Risk Committee agenda;
- [ ] File all review documentation in [Document Management System].

---

### Appendix E — Glossary

*Definitions of key terms used in this document.*

| Term | Definition |
|---|---|
| **Asset** | Any technology resource of value to [Organization Name], including hardware, software, data, and services |
| **Control** | A measure that modifies risk, including policies, procedures, practices, and technical mechanisms |
| **Inherent Risk** | The level of risk before any controls are applied |
| **Residual Risk** | The level of risk remaining after existing controls are considered |
| **Likelihood** | The probability that a risk event will occur |
| **Impact** | The consequence or effect of a risk event if it were to occur |
| **Risk Appetite** | The amount and type of risk the organization is willing to accept in pursuit of its objectives |
| **Risk Owner** | The individual accountable for managing a specific risk |
| **Risk Register** | A repository for recording identified risks and their assessment details |
| **Threat** | A potential cause of an unwanted incident that may result in harm to an asset |
| **Vulnerability** | A weakness in a system, process, or control that could be exploited by a threat |
| **RMiT** | Risk Management in Technology — BNM Policy Document governing technology risk management for financial institutions |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework |
| **GRC** | Governance, Risk and Compliance |
| **SIEM** | Security Information and Event Management |
| **APT** | Advanced Persistent Threat — a sophisticated, long-term cyber attack |
| **[Term]** | [Definition] |

---

*End of Document*

---

**Document Control Footer**

| | |
|---|---|
| **Document Title** | Risk Assessment Methodology |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk, [Organization Name] |
| **Framework** | BNM RMiT Clause 9.2 |
| **Last Updated** | [DD/MM/YYYY] |

*This document is subject to [Organization Name]'s document management and retention policy. Printed copies are uncontrolled. Always refer to [Document Management System] for the current version.*