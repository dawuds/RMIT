# Risk Treatment Policy

---

| **Field** | **Details** |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Technology Risk |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Issuing Department** | Technology Risk Management |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of [Organization Name]'s information security obligations and applicable Malaysian law, including the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context and Alignment](#2-regulatory-context-and-alignment)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Policy Objectives](#4-policy-objectives)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Risk Treatment Framework](#6-risk-treatment-framework)
7. [Risk Treatment Options](#7-risk-treatment-options)
8. [Approval Authorities and Escalation Thresholds](#8-approval-authorities-and-escalation-thresholds)
9. [Risk Treatment Planning and Implementation](#9-risk-treatment-planning-and-implementation)
10. [Residual Risk Assessment](#10-residual-risk-assessment)
11. [Monitoring and Review of Treatment Controls](#11-monitoring-and-review-of-treatment-controls)
12. [Exceptions and Escalation Process](#12-exceptions-and-escalation-process)
13. [Compliance and Enforcement](#13-compliance-and-enforcement)
14. [Review and Approval History](#14-review-and-approval-history)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the primary intent of this policy — why it exists and what governance problem it solves. Reference the specific regulatory obligation that mandates this document.*

This Risk Treatment Policy establishes the governance framework and mandatory requirements governing how [Organization Name] identifies, evaluates, selects, implements, and monitors risk treatment strategies for technology risks. It defines the range of permissible risk treatment options, the authority levels required to approve each treatment decision, and the processes by which treatment effectiveness is validated.

This policy is issued in fulfilment of [Organization Name]'s obligations under Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically Clause **9.3**, which requires financial institutions to maintain documented policies and processes for technology risk treatment that are commensurate with their risk appetite and operational complexity.

This policy supports [Organization Name]'s overarching Technology Risk Management Framework (TRMF) and is intended to ensure that all technology risks — whether inherent, residual, or emerging — are managed in a structured, accountable, and auditable manner consistent with regulatory expectations and organizational risk tolerance.

### 1.2 Scope

*Define the boundaries of this policy — what systems, processes, entities, and personnel are covered. Be explicit about what is excluded and why.*

This policy applies to:

**In Scope:**

- All technology assets, systems, platforms, and infrastructure owned, operated, or managed by [Organization Name], whether hosted on-premises, in private cloud, or in public cloud environments.
- All technology risk treatment decisions arising from technology risk assessments, internal audits, regulatory examinations, incident reviews, and threat intelligence activities.
- All employees, contractors, third-party vendors, and outsourced service providers who manage, operate, or have privileged access to [Organization Name]'s technology environment.
- All business units and subsidiaries of [Organization Name] subject to BNM regulatory oversight.
- Technology risks arising from critical IT systems as defined under the RMiT Policy Document, including but not limited to core banking systems, payment systems, digital banking platforms, and customer-facing applications.

**Out of Scope:**

- Non-technology operational risks managed under separate risk management policies (e.g., credit risk, market risk, liquidity risk), unless they have a direct technology risk dimension.
- Personal risks and human resource matters, which are governed by [Organization Name]'s Human Resources Policy.
- Physical security risks that do not intersect with technology asset protection, unless such risks could result in technology disruption.

---

## 2. Regulatory Context and Alignment

### 2.1 Regulatory Mandate

*Summarize the regulatory landscape that drives this policy. Reference all applicable BNM policy documents, Malaysian legislation, and industry standards that this policy is designed to satisfy.*

[Organization Name] is a financial institution licensed under [applicable Act — e.g., the Financial Services Act 2013 / Islamic Financial Services Act 2013] and is subject to the full suite of prudential and operational risk requirements issued by Bank Negara Malaysia (BNM).

The primary regulatory mandate for this policy is:

| Regulation / Standard | Issuing Body | Relevant Clause / Section | Applicability |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 9.3 | Mandatory |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 9.1 – 9.2 (Risk Assessment) | Supporting |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 11 (Outsourcing) | Supporting |
| Personal Data Protection Act 2010 (PDPA) | Malaysian Government | Sections 5–7 (Security Principle) | Mandatory |
| Guidelines on Management of IT Outsourcing | Bank Negara Malaysia | Relevant clauses | Supporting |
| ISO/IEC 27005:2022 (Information Security Risk Management) | ISO/IEC | All | Reference |
| NACSA Cybersecurity Framework | NACSA | Relevant controls | Supporting |

### 2.2 Alignment with BNM RMiT Clause 9.3

*Explain, in specific terms, how this policy directly addresses each sub-requirement of RMiT Clause 9.3. This section demonstrates audit readiness to BNM examiners.*

BNM RMiT Clause 9.3 requires [Organization Name] to:

- **(9.3.a)** Identify and implement risk treatment options appropriate to the nature and level of technology risks identified.
- **(9.3.b)** Ensure risk treatment decisions are subject to appropriate approval authority commensurate with risk severity.
- **(9.3.c)** Document risk treatment plans with defined timelines, accountable owners, and measurable outcomes.
- **(9.3.d)** Monitor the ongoing effectiveness of implemented risk treatment controls.
- **(9.3.e)** Escalate unresolved or recurring risks to senior management and the Board where appropriate.

This policy addresses each of these requirements through the sections detailed in Table 2.1 below.

**Table 2.1 — RMiT Clause 9.3 Coverage Mapping**

| RMiT Sub-Clause | Requirement Summary | Addressed In |
|---|---|---|
| 9.3.a | Risk treatment option identification | Section 7 |
| 9.3.b | Approval authority | Section 8 |
| 9.3.c | Risk treatment planning | Section 9 |
| 9.3.d | Control effectiveness monitoring | Section 11 |
| 9.3.e | Escalation to senior management / Board | Section 12 |

---

## 3. Definitions and Abbreviations

### 3.1 Definitions

*Provide clear, unambiguous definitions for all technical and regulatory terms used in this policy. Definitions must align with BNM RMiT terminology where applicable.*

| Term | Definition |
|---|---|
| **Technology Risk** | The risk of loss or harm arising from the failure, disruption, or inadequacy of technology systems, infrastructure, processes, or people. As defined in BNM RMiT, this includes risks arising from cybersecurity, system availability, data integrity, and technology change. |
| **Inherent Risk** | The level of risk that exists before the application of any risk controls or mitigating measures. |
| **Residual Risk** | The level of risk remaining after risk treatment controls have been applied. |
| **Risk Treatment** | The process of selecting and implementing measures to modify risk. Treatment options include risk mitigation (control), risk transfer, risk avoidance, and risk acceptance. |
| **Risk Treatment Plan** | A documented plan describing the selected risk treatment option(s), the controls to be implemented, the responsible owner, the implementation timeline, and the expected residual risk level. |
| **Risk Owner** | The individual with the accountability and authority for managing a specific risk, including ensuring that risk treatment actions are completed within agreed timelines. |
| **Control** | A measure or process implemented to reduce the likelihood or impact of a risk materializing. Controls may be preventive, detective, or corrective. |
| **Risk Acceptance** | A formal decision, approved at the appropriate authority level, to tolerate a risk without implementing additional controls, typically where the cost of treatment exceeds the expected benefit. |
| **Risk Transfer** | A risk treatment option involving the shifting of financial consequences of a risk to a third party, typically through insurance or contractual arrangements. |
| **Risk Avoidance** | A risk treatment option involving the decision to not engage in, or to discontinue, an activity that gives rise to the risk. |
| **Risk Appetite** | The aggregate level and types of risk that [Organization Name] is willing to assume in pursuit of its strategic objectives, as approved by the Board. |
| **Risk Tolerance** | The acceptable deviation from risk appetite, within which [Organization Name] is prepared to operate. |
| **Key Risk Indicator (KRI)** | A metric used to signal changes in risk exposure, typically measured against defined thresholds that trigger management action. |
| **Critical IT System** | As defined in BNM RMiT, a system whose disruption would have a material impact on [Organization Name]'s operations, customers, or financial stability. |
| **TRMF** | Technology Risk Management Framework — the overarching framework governing all aspects of technology risk management at [Organization Name]. |

### 3.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CIO | Chief Information Officer |
| CRO | Chief Risk Officer |
| EXCO | Executive Committee |
| IT | Information Technology |
| KRI | Key Risk Indicator |
| NACSA | National Cyber Security Agency |
| PDPA | Personal Data Protection Act 2010 |
| RACI | Responsible, Accountable, Consulted, Informed |
| RMiT | Risk Management in Technology |
| SOC | Security Operations Centre |
| TRMF | Technology Risk Management Framework |
| TRMC | Technology Risk Management Committee |

---

## 4. Policy Objectives

*State the specific, measurable objectives that this policy is designed to achieve. These should be directly traceable to regulatory requirements and organizational risk management goals.*

This policy is designed to achieve the following objectives:

1. **Structured Treatment Decisions:** Ensure all identified technology risks are subject to a structured, documented, and consistently applied treatment process.

2. **Proportionate Controls:** Ensure that risk treatment responses are proportionate to the severity, likelihood, and potential impact of identified risks, and consistent with [Organization Name]'s approved risk appetite.

3. **Clear Accountability:** Define unambiguous ownership and approval authority for all risk treatment decisions, preventing gaps in accountability that could allow risks to remain unaddressed.

4. **Regulatory Compliance:** Demonstrate to BNM and other regulatory bodies that [Organization Name] maintains a mature, compliant, and auditable technology risk treatment process consistent with RMiT Clause 9.3.

5. **Timely Remediation:** Establish enforceable timelines for risk treatment implementation, with defined escalation triggers where remediation is delayed.

6. **Continuous Monitoring:** Ensure that risk treatment effectiveness is subject to ongoing monitoring and periodic review, so that controls remain effective as the threat and technology landscape evolves.

7. **Board and Senior Management Visibility:** Provide the Board and senior management with timely, accurate information on technology risk treatment status, particularly for high and critical risks.

---

## 5. Roles and Responsibilities

### 5.1 Overview

*This section defines the accountabilities and responsibilities of each role involved in the risk treatment lifecycle. All roles must be mapped to specific individuals or committees within [Organization Name]'s governance structure.*

Risk treatment is a shared responsibility across [Organization Name]'s three lines of defence model, as summarized below.

### 5.2 Three Lines of Defence

| Line | Function | Role in Risk Treatment |
|---|---|---|
| **First Line** | Business Units, Technology Operations, IT Teams | Identify risks, implement treatment controls, own risk treatment plans |
| **Second Line** | Technology Risk Management, Compliance | Define treatment policy, validate treatment adequacy, monitor KRIs, escalate where necessary |
| **Third Line** | Internal Audit | Independently assess the effectiveness of risk treatment processes and controls |

### 5.3 RACI Matrix — Risk Treatment Lifecycle

*The following RACI matrix defines the roles and responsibilities of each key stakeholder across each phase of the risk treatment lifecycle. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Board / Board Risk Committee | Chief Risk Officer (CRO) | Head of Technology Risk | CISO | CIO / CTO | Technology Risk Team | Business Unit / Risk Owners | Internal Audit |
|---|---|---|---|---|---|---|---|---|
| Approve Technology Risk Appetite | A | C | C | C | C | I | I | I |
| Define Risk Treatment Policy | I | A | R | C | C | R | C | C |
| Conduct Technology Risk Assessment | I | I | A | C | C | R | R | I |
| Identify Risk Treatment Options | I | I | A | C | C | R | R | I |
| Approve Risk Treatment — Critical Risk | A | C | R | C | C | I | I | I |
| Approve Risk Treatment — High Risk | I | A | C | C | C | R | C | I |
| Approve Risk Treatment — Medium Risk | I | I | A | C | C | R | R | I |
| Approve Risk Treatment — Low Risk | I | I | I | I | C | R | A | I |
| Approve Risk Acceptance — Critical Risk | A | C | R | C | C | I | I | I |
| Approve Risk Acceptance — High Risk | I | A | C | C | C | R | C | I |
| Develop Risk Treatment Plans | I | I | C | C | C | C | R/A | I |
| Monitor Treatment Implementation | I | I | A | C | C | R | R | I |
| Report Treatment Status (Quarterly) | I | A | R | C | C | R | I | I |
| Validate Control Effectiveness | I | I | C | C | C | C | I | R/A |
| Manage Exceptions and Escalations | I | A | R | C | C | R | C | I |

### 5.4 Key Roles — Detailed Responsibilities

#### 5.4.1 Board / Board Risk Committee

- Approve [Organization Name]'s overall risk appetite, including technology risk appetite thresholds.
- Receive and review quarterly reports on the status of critical and high technology risk treatment items.
- Approve risk acceptance for risks classified as Critical in accordance with Section 8.
- Provide oversight and challenge to management on the adequacy and timeliness of risk treatment.

#### 5.4.2 Chief Risk Officer (CRO)

- Maintain overall accountability for the integrity and effectiveness of [Organization Name]'s risk management framework, including risk treatment.
- Approve risk treatment decisions for High-rated technology risks.
- Approve risk acceptance decisions for High-rated technology risks.
- Escalate Critical technology risks and unresolved High risks to the Board Risk Committee.
- Chair or delegate authority at the Technology Risk Management Committee (TRMC).

#### 5.4.3 Head of Technology Risk

*[To be filled with the name and reporting line of the designated Head of Technology Risk at [Organization Name].]*

- Act as the document owner and primary policy author for this Risk Treatment Policy.
- Ensure that risk treatment processes are implemented consistently across all technology domains.
- Approve risk treatment decisions for Medium-rated technology risks.
- Manage escalations from first-line risk owners where treatment options are disputed or delayed.
- Report technology risk treatment status to the CRO and TRMC on a regular basis.
- Coordinate with the CISO on cybersecurity-specific risk treatments.
- Conduct the annual review of this policy.

#### 5.4.4 Chief Information Security Officer (CISO)

- Provide subject matter expertise on cybersecurity risk treatment options, including technical controls, security architecture, and threat response measures.
- Review and provide input to risk treatment plans where cyber and information security risks are involved.
- Ensure alignment between risk treatment controls and [Organization Name]'s Cybersecurity Framework and NACSA guidelines.

#### 5.4.5 Chief Information Officer (CIO) / Chief Technology Officer (CTO)

- Ensure technology teams provide necessary resources and timelines for risk treatment implementation.
- Review risk treatment plans for technology-specific feasibility and operational impact.
- Escalate to the Head of Technology Risk where implementation constraints prevent timely treatment.

#### 5.4.6 Technology Risk Management Team

- Conduct and facilitate technology risk assessments that identify risks requiring treatment.
- Develop and maintain the technology risk register, including the status of all risk treatment actions.
- Facilitate the selection and documentation of risk treatment options in collaboration with risk owners.
- Monitor and report on risk treatment implementation progress.
- Maintain records of all approved risk treatment decisions, exceptions, and acceptances.

#### 5.4.7 Business Unit Heads / Technology Risk Owners

- Act as the primary Risk Owner for technology risks within their respective business or technology domains.
- Develop and own Risk Treatment Plans for risks assigned to their domain.
- Ensure resources are allocated to implement agreed treatment actions within defined timelines.
- Report implementation progress to the Technology Risk Management Team on a monthly basis.
- Escalate implementation blockers to the Head of Technology Risk promptly.

#### 5.4.8 Internal Audit

- Independently assess the design and operating effectiveness of risk treatment controls.
- Review the adequacy of the risk treatment process against BNM RMiT requirements and this policy.
- Report audit findings and recommendations to the Audit Committee.
- Issue formal findings where risk treatment processes are found to be deficient.

---

## 6. Risk Treatment Framework

### 6.1 Framework Overview

*Describe how risk treatment fits within [Organization Name]'s broader Technology Risk Management Framework. Include a description of the end-to-end risk management cycle that leads to and from risk treatment.*

Risk treatment at [Organization Name] operates within the context of a continuous technology risk management lifecycle, as illustrated below:

```
[Risk Identification] → [Risk Assessment] → [Risk Evaluation] → [Risk Treatment] → [Monitoring & Review] → [Reporting]
         ↑__________________________________________________________________________________________|
```

Risk treatment is triggered upon the completion of a technology risk assessment, where identified risks are evaluated against [Organization Name]'s risk appetite and risk tolerance thresholds. Risks that exceed the acceptable threshold require treatment. Risks that fall within acceptable thresholds may be accepted with documented justification.

### 6.2 Risk Rating Scale

*Define the risk rating scale used to classify technology risks and link it to treatment urgency and approval authorities. This scale must be consistent with [Organization Name]'s TRMF.*

[Organization Name] uses a **5×5 risk matrix** combining Likelihood and Impact ratings to derive an overall risk rating.

**Table 6.1 — Risk Rating Scale**

| Risk Rating | Score Range | Definition | Treatment Urgency |
|---|---|---|---|
| **Critical** | 20–25 | Risks that could cause severe or catastrophic impact on [Organization Name]'s operations, customers, or financial position. May attract regulatory sanctions. | Immediate — treatment plan required within **5 business days** of identification. |
| **High** | 12–19 | Risks with significant potential impact requiring prompt management action. Likely to trigger regulatory attention if unresolved. | Urgent — treatment plan required within **10 business days**. |
| **Medium** | 7–11 | Risks with moderate potential impact. Manageable through standard controls but require structured treatment and monitoring. | Standard — treatment plan required within **20 business days**. |
| **Low** | 3–6 | Risks with limited potential impact. Can be addressed through routine operational processes. | Routine — treatment plan required within **30 business days**. |
| **Negligible** | 1–2 | Risks with minimal impact. May be accepted with standard monitoring. | Accept and monitor — document within **45 business days**. |

**Table 6.2 — Risk Likelihood Scale**

| Rating | Score | Description |
|---|---|---|
| Almost Certain | 5 | Expected to occur in most circumstances; has occurred multiple times in the past 12 months. |
| Likely | 4 | Will probably occur in most circumstances; has occurred at least once in the past 12 months. |
| Possible | 3 | Might occur in some circumstances; has occurred within the past 3 years. |
| Unlikely | 2 | Could occur in some circumstances; has not occurred in the past 3 years but is plausible. |
| Rare | 1 | May only occur in exceptional circumstances; no known occurrence at [Organization Name]. |

**Table 6.3 — Risk Impact Scale**

| Rating | Score | Financial Impact | Operational Impact | Regulatory Impact | Reputational Impact |
|---|---|---|---|---|---|
| Catastrophic | 5 | > RM [X] million | Complete disruption of critical systems; extended outage | Regulatory sanction, licence suspension | Severe national media coverage; loss of public confidence |
| Major | 4 | RM [X]–[Y] million | Significant disruption; multiple critical systems affected | Formal regulatory action; formal warning issued | Significant negative media coverage |
| Moderate | 3 | RM [X]–[Y] million | Partial disruption; single system or process affected | Regulatory inquiry; compliance breach identified | Moderate negative media; complaints escalation |
| Minor | 2 | RM [X]–[Y] million | Minor disruption; workarounds available | Minor non-compliance; internal finding | Limited media attention; isolated complaints |
| Insignificant | 1 | < RM [X] million | No material disruption; contained and resolved quickly | No regulatory impact | No material reputational impact |

*Note: Financial impact thresholds (RM values) must be calibrated to [Organization Name]'s scale and approved by the Board as part of the overall risk appetite framework.*

---

## 7. Risk Treatment Options

### 7.1 Overview

*This section defines the four standard risk treatment options available to risk owners at [Organization Name], consistent with internationally recognized risk management standards (ISO 31000, ISO 27005) and BNM RMiT requirements.*

Upon completing a technology risk assessment, the assigned Risk Owner, in consultation with the Technology Risk Management Team, must select one or more of the following treatment options for each identified risk that exceeds the acceptable risk tolerance threshold.

### 7.2 Treatment Option 1: Risk Mitigation (Reduce)

*Describe when risk mitigation is the appropriate treatment option and what it entails at [Organization Name].*

**Definition:** Risk mitigation involves implementing controls to reduce the likelihood of a risk event occurring, reduce the potential impact if it does occur, or both. Mitigation is the most commonly applied treatment option at [Organization Name] and is the default treatment approach for risks rated Medium and above.

**Applicability:** Risk mitigation is appropriate when:
- The cost of implementing controls is proportionate to the expected risk reduction.
- Technical or operational controls exist that can materially reduce the risk.
- The risk cannot be transferred or avoided without unacceptable business impact.

**Types of Controls:**

| Control Type | Description | Examples |
|---|---|---|
| **Preventive** | Controls that prevent a risk event from occurring. | Multi-factor authentication, network segmentation, patch management |
| **Detective** | Controls that identify when a risk event has occurred or is in progress. | Security monitoring, log analysis, intrusion detection systems |
| **Corrective** | Controls that minimize the impact of a risk event after it has occurred. | Incident response procedures, data backup and recovery, disaster recovery |
| **Compensating** | Alternative controls applied when primary controls cannot be implemented. | Manual processes, enhanced monitoring, interim access restrictions |

**Documentation Requirements:** For each risk subject to mitigation treatment, the Risk Owner must complete a Risk Treatment Plan (see Section 9) documenting the specific controls to be implemented, implementation timeline, resource requirements, and expected residual risk rating.

### 7.3 Treatment Option 2: Risk Transfer (Share)

*Describe the risk transfer option, including the types of transfer mechanisms used at [Organization Name] and the governance requirements for transfer arrangements.*

**Definition:** Risk transfer involves shifting the financial or operational consequences of a risk event to a third party. Common transfer mechanisms include insurance, contractual liability clauses, and outsourcing arrangements. Risk transfer does not eliminate the risk but redistributes the financial burden of loss.

**Applicability:** Risk transfer is appropriate when:
- The risk involves financial loss that is insurable at a reasonable premium.
- A contractual arrangement with a third-party service provider can be structured to assign liability appropriately.
- Transfer is cost-effective relative to the cost of internal mitigation.

**Important Limitation:** Under BNM RMiT and applicable outsourcing guidelines, [Organization Name] retains full regulatory responsibility for technology risks even where those risks are operationally managed by a third party. Risk transfer does **not** absolve [Organization Name] of its regulatory obligations.

**Transfer Mechanisms:**

| Mechanism | Description | Governance Requirement |
|---|---|---|
| **Cyber Insurance** | Insurance policies covering losses from cyber incidents, data breaches, and technology failures. | Must be reviewed annually by Head of Technology Risk and approved by CRO. |
| **Contractual Liability** | Vendor agreements structured to assign liability for technology failures to the vendor. | Must be reviewed by Legal and the Technology Risk Team before execution. |
| **Outsourcing Arrangements** | Transfer of operational responsibility for technology functions to a qualified third party. | Subject to BNM outsourcing guidelines and IT Outsourcing Policy. |
| **Service Level Agreements (SLAs)** | Contractual commitments from vendors on availability and performance, with financial penalties for breach. | Must include technology risk requirements; reviewed by Technology Risk Team. |

### 7.4 Treatment Option 3: Risk Avoidance (Terminate)

*Describe the risk avoidance option, including how decisions to avoid a risk are made and governed at [Organization Name].*

**Definition:** Risk avoidance involves the decision to not commence or to discontinue an activity, process, or technology that gives rise to an unacceptable risk. Avoidance eliminates the risk entirely by eliminating its source.

**Applicability:** Risk avoidance is appropriate when:
- The risk is so severe (e.g., Critical rating) that no combination of mitigation and transfer measures can reduce it to an acceptable level.
- The business activity giving rise to the risk is not strategically necessary or can be replaced by a lower-risk alternative.
- Regulatory or legal requirements prohibit the continuation of the activity.

**Examples of Risk Avoidance:**
- Deciding not to deploy a new technology platform due to unacceptable cybersecurity vulnerabilities that cannot be remediated.
- Terminating a vendor relationship due to persistent material control failures that cannot be remediated.
- Decommissioning a legacy system with critical vulnerabilities that cannot be patched.
- Discontinuing a digital product feature that introduces unacceptable data privacy risk.

**Governance Requirements:** Decisions to avoid a risk by terminating a business activity or technology investment must be approved at the appropriate authority level consistent with the risk rating (see Section 8) and must be documented with a full business impact assessment.

### 7.5 Treatment Option 4: Risk Acceptance (Tolerate)

*Define the conditions under which risk acceptance is permitted, the documentation required, and the approval authority needed for each level of accepted risk. This is a high-governance area subject to BNM scrutiny.*

**Definition:** Risk acceptance is a formal decision to tolerate a risk without implementing additional controls, typically where:
- The cost of treatment significantly outweighs the expected benefit.
- The residual risk after all feasible controls are applied remains above the risk tolerance threshold but is considered manageable.
- The risk cannot be avoided, transferred, or further mitigated within a reasonable timeframe.

**Critical Requirement:** Risk acceptance is **not** a default or passive decision. It is a deliberate, documented, and formally approved governance action. Undocumented or unapproved risk acceptance constitutes a policy breach.

**Conditions for Risk Acceptance:**
- All feasible treatment alternatives have been considered and documented.
- The accepting authority has been fully informed of the nature, likelihood, and potential impact of the risk.
- An acceptance rationale has been documented and is sufficient to withstand regulatory scrutiny.
- A defined acceptance period has been established (maximum [X] months for High risks; no open-ended acceptance for Critical risks).
- A review date has been set, at which the risk will be re-assessed.

**Risk Acceptance is NOT permitted for:**
- Risks arising from known regulatory non-compliance without a documented remediation plan and BNM notification (where required).
- Risks that have previously materialized and caused significant loss, where treatment is technically feasible.

**Table 7.1 — Risk Acceptance Thresholds and Constraints**

| Risk Rating | Acceptance Permitted? | Maximum Acceptance Period | Approval Authority | Review Frequency |
|---|---|---|---|---|
| Critical | Only in exceptional circumstances | [3] months; then re-assessed and re-approved or escalated | Board / Board Risk Committee | Monthly |
| High | Yes, with documented justification | [6] months | Chief Risk Officer (CRO) | Quarterly |
| Medium | Yes | [12] months | Head of Technology Risk | Semi-annually |
| Low | Yes | [24] months | Technology Risk Manager (delegated) | Annually |
| Negligible | Yes | No fixed period | Risk Owner (documented) | Annually |

---

## 8. Approval Authorities and Escalation Thresholds

### 8.1 Approval Authority Matrix

*This section defines the mandatory approval authority levels for risk treatment decisions, including risk mitigation, transfer, avoidance, and acceptance. This matrix must be approved by the Board and reviewed annually.*

All risk treatment decisions must be approved by the appropriate authority as defined in the matrix below. Approval must be documented in the technology risk register and the relevant Risk Treatment Plan prior to implementation.

**Table 8.1 — Risk Treatment Approval Authority Matrix**

| Risk Rating | Risk Mitigation Approval | Risk Transfer Approval | Risk Avoidance Approval | Risk Acceptance Approval | Exception Approval |
|---|---|---|---|---|---|
| **Critical** | Board / Board Risk Committee | Board / Board Risk Committee | Board / Board Risk Committee | Board / Board Risk Committee | Board / Board Risk Committee |
| **High** | Chief Risk Officer (CRO) | CRO + Legal | CRO + EXCO | CRO | CRO |
| **Medium** | Head of Technology Risk | Head of Technology Risk + Legal | Head of Technology Risk | Head of Technology Risk | Head of Technology Risk |
| **Low** | Technology Risk Manager | Technology Risk Manager | Head of Technology Risk | Technology Risk Manager | Head of Technology Risk |
| **Negligible** | Risk Owner | Risk Owner | Head of Technology Risk | Risk Owner | Head of Technology Risk |

### 8.2 Delegated Authority

*Define any delegated authority arrangements, including conditions and limitations on delegation.*

The following delegation arrangements apply:

- The CRO may delegate approval authority for High-rated risks to the Head of Technology Risk in writing, subject to monthly review of all such decisions.
- The Head of Technology Risk may delegate approval authority for Medium-rated risks to a Technology Risk Manager in writing, subject to quarterly review.
- Delegation does not apply to risk acceptance decisions for High or Critical risks under any circumstances.
- All delegated approvals must be reported to the delegating authority within [X] business days.
- Delegation instruments must be reviewed and reconfirmed annually.

### 8.3 Escalation Triggers

*Define specific conditions that automatically trigger escalation to a higher approval authority, regardless of the initial risk rating.*

The following conditions trigger mandatory escalation to the next approval authority level:

| Escalation Trigger | Action Required | Timeframe |
|---|---|---|
| Risk treatment plan overdue by more than [30] calendar days | Escalate to next authority level | Within 5 business days of breach |
| Residual risk after treatment remains above risk tolerance | Re-assess and escalate to next authority level | Within 10 business days of re-assessment |
| Risk has materialized and caused a reportable incident | Escalate to Head of Technology Risk and CRO | Immediately upon incident declaration |
| Risk accepted for more than the approved acceptance period without renewal | Escalate to next authority level | On the day of expiry |
| Risk owner disputes the risk rating assigned by Technology Risk Team | Escalate to Head of Technology Risk for adjudication | Within 5 business days of dispute |
| Regulatory action or finding is linked to the risk | Escalate to CRO and escalate to Board if Critical | Within 24 hours of notification |
| Critical or High risk identified in a BNM examination | Board notification required | Within 24 hours |

---

## 9. Risk Treatment Planning and Implementation

### 9.1 Risk Treatment Plan Requirements

*Define the minimum content requirements for a Risk Treatment Plan. All treatment plans must meet these requirements to be considered complete for governance and audit purposes.*

Every risk treatment decision (other than risk acceptance of Low or Negligible risks) must be supported by a documented **Risk Treatment Plan (RTP)**. The RTP is the primary governance artifact for risk treatment and must be maintained in the technology risk register.

A compliant Risk Treatment Plan must include at minimum:

- **Risk Reference:** Unique risk identifier from the technology risk register.
- **Risk Description:** Clear description of the risk, its source, and potential consequences.
- **Current Risk Rating:** Inherent risk rating (Likelihood × Impact) prior to treatment.
- **Treatment Option Selected:** Mitigation, Transfer, Avoidance, or Acceptance — with justification.
- **Specific Treatment Actions:** Detailed description of each control or action to be implemented.
- **Expected Control Effect:** Whether each control is preventive, detective, or corrective.
- **Responsible Owner:** The individual accountable for each treatment action.
- **Implementation Timeline:** Target completion date for each action, with interim milestones.
- **Resource Requirements:** Budget, personnel, and technology resources required.
- **Expected Residual Risk Rating:** Projected Likelihood × Impact after treatment.
- **Success Criteria:** Measurable criteria confirming the treatment has been effectively implemented.
- **Approval Authority:** Name, role, and date of approval.
- **Review Date:** Date by which the treatment plan will be reviewed for effectiveness.

### 9.2 Risk Treatment Plan — Template Structure

*The following table provides the standard structure for a Risk Treatment Plan at [Organization Name]. This template must be used for all risks rated Medium and above.*

**Table 9.1 — Risk Treatment Plan Template**

| Field | Detail |
|---|---|
| **Risk Register Reference** | [RR-YYYY-NNN] |
| **Risk Title** | [Brief descriptive title] |
| **Risk Owner** | [Name, Role, Business Unit] |
| **Risk Description** | [Full description of the risk, including source, threat, vulnerability, and consequence] |
| **Inherent Risk Rating** | Likelihood: [1–5] / Impact: [1–5] / Rating: [Score] / Level: [Critical/High/Medium/Low/Negligible] |
| **Treatment Option** | [Mitigate / Transfer / Avoid / Accept] |
| **Treatment Justification** | [Explanation of why this treatment option was selected] |
| **Treatment Actions** | See Table 9.2 below |
| **Expected Residual Rating** | Likelihood: [1–5] / Impact: [1–5] / Rating: [Score] / Level: [Critical/High/Medium/Low/Negligible] |
| **Approval Authority** | [Name, Role] |
| **Date Approved** | [DD/MM/YYYY] |
| **Target Completion Date** | [DD/MM/YYYY] |
| **Review Date** | [DD/MM/YYYY] |

**Table 9.2 — Risk Treatment Actions Detail**

| Action # | Treatment Action Description | Control Type | Responsible Person | Target Date | Status | Completion Date |
|---|---|---|---|---|---|---|
| 1 | [Description of treatment action] | [Preventive / Detective / Corrective] | [Name, Role] | [DD/MM/YYYY] | [Not Started / In Progress / Completed / Overdue] | [DD/MM/YYYY or —] |
| 2 | [Description of treatment action] | [Preventive / Detective / Corrective] | [Name, Role] | [DD/MM/YYYY] | [Not Started / In Progress / Completed / Overdue] | [DD/MM/YYYY or —] |
| 3 | [Description of treatment action] | [Preventive / Detective / Corrective] | [Name, Role] | [DD/MM/YYYY] | [Not Started / In Progress / Completed / Overdue] | [DD/MM/YYYY or —] |

### 9.3 Implementation Governance

*Describe the governance process for overseeing Risk Treatment Plan implementation from approval through to completion and closure.*

#### 9.3.1 Pre-Implementation

Prior to commencing treatment implementation, the Risk Owner must:
- Obtain formal written approval from the appropriate authority as defined in Section 8.
- Confirm resource availability and budget allocation.
- Communicate implementation responsibilities to all parties named in the Risk Treatment Plan.
- Register the approved Risk Treatment Plan in the technology risk register.

#### 9.3.2 During Implementation

During the implementation period, the Risk Owner must:
- Provide monthly progress updates to the Technology Risk Management Team.
- Immediately report any implementation blockers, delays, or scope changes to the Head of Technology Risk.
- Maintain evidence of each completed treatment action (e.g., configuration screenshots, audit logs, test results).
- Escalate where the projected completion date cannot be met, following the escalation process defined in Section 12.

#### 9.3.3 Post-Implementation

Upon completion of all treatment actions, the Risk Owner must:
- Submit a completed Risk Treatment Plan with evidence of completion for each action.
- Request a post-implementation review from the Technology Risk Management Team within [30] calendar days of completion.
- Support a control effectiveness assessment (see Section 11).
- The Technology Risk Management Team will update the technology risk register with the residual risk rating upon confirmed completion.

---

## 10. Residual Risk Assessment

### 10.1 Purpose

*Explain the purpose of residual risk assessment and its role in the risk treatment lifecycle.*

Following the implementation of risk treatment controls, [Organization Name] must assess the **residual risk** — the level of risk remaining after treatment measures have been applied. Residual risk assessment validates that the implemented controls have achieved the expected risk reduction and confirms whether the residual risk falls within [Organization Name]'s risk tolerance.

### 10.2 Residual Risk Assessment Process

*Describe the step-by-step process for conducting a residual risk assessment following treatment implementation.*

| Step | Activity | Responsibility |
|---|---|---|
| 1 | Risk Owner notifies Technology Risk Team that all treatment actions are complete. | Risk Owner |
| 2 | Technology Risk Team schedules a residual risk assessment within [30] calendar days. | Technology Risk Team |
| 3 | Technology Risk Team re-evaluates the risk using the standard 5×5 risk matrix, incorporating the effect of implemented controls. | Technology Risk Team |
| 4 | Technology Risk Team documents the residual risk rating and supporting evidence in the risk register. | Technology Risk Team |
| 5 | If residual risk is within risk tolerance: risk is marked as treated; ongoing monitoring assigned. | Head of Technology Risk |
| 6 | If residual risk exceeds risk tolerance: further treatment options must be identified and the cycle repeats. | Head of Technology Risk + Risk Owner |
| 7 | Updated residual risk rating is reported to the TRMC in the next scheduled meeting. | Head of Technology Risk |

### 10.3 Residual Risk Tolerance

*Define the residual risk tolerance for each risk domain and link it to the broader risk appetite framework.*

The residual risk tolerance for technology risks at [Organization Name] is defined as follows:

| Domain | Maximum Acceptable Residual Risk Level | Authority to Approve Higher Residual | Basis |
|---|---|---|---|
| Critical IT Systems | Low | CRO | BNM RMiT operational resilience requirements |
| Cybersecurity | Low | CRO / CISO | NACSA framework; BNM cybersecurity requirements |
| Technology Outsourcing | Medium | Head of Technology Risk | BNM outsourcing guidelines |
| Change Management | Low | CRO | Operational stability requirements |
| Data Governance | Low | CRO | PDPA; BNM data requirements |
| General IT Operations | Medium | Head of Technology Risk | Operational risk tolerance |

---

## 11. Monitoring and Review of Treatment Controls

### 11.1 Ongoing Monitoring

*Define how [Organization Name] monitors the ongoing effectiveness of implemented risk treatment controls. This section must demonstrate to BNM that controls do not simply get implemented and forgotten.*

[Organization Name] is committed to ensuring that risk treatment controls remain effective over time. Monitoring activities include:

- **Key Risk Indicators (KRIs):** Each risk treatment plan must identify at least one KRI to measure the effectiveness of the implemented controls. KRI thresholds must be defined, and breaches must trigger management action.
- **Control Self-Assessments (CSAs):** Risk Owners must conduct periodic CSAs of treatment controls, with frequency determined by risk rating.
- **Continuous Security Monitoring:** The SOC monitors the technology environment continuously for indicators of control failure or risk materialization.
- **Penetration Testing:** Critical IT systems are subject to annual penetration testing, with findings fed back into the risk treatment process.
- **Vulnerability Management:** Identified vulnerabilities are assessed against the technology risk register and risk treatment plans are updated where necessary.

### 11.2 Control Monitoring Schedule

*Define the minimum frequency for monitoring and reviewing the effectiveness of risk treatment controls by risk rating.*

**Table 11.1 — Control Monitoring Schedule**

| Risk Rating | KRI Review Frequency | Control Self-Assessment | Treatment Plan Review | Residual Risk Re-assessment |
|---|---|---|---|---|
| Critical | Weekly | Monthly | Monthly | Quarterly |
| High | Monthly | Quarterly | Quarterly | Semi-annually |
| Medium | Quarterly | Semi-annually | Semi-annually | Annually |
| Low | Semi-annually | Annually | Annually | Annually |
| Negligible | Annually | Annually | Annually | At next risk assessment cycle |

### 11.3 Key Risk Indicator Framework

*Provide guidance on how KRIs should be structured for risk treatment monitoring.*

Each Risk Treatment Plan must include at least one KRI defined using the following structure:

**Table 11.2 — KRI Template**

| Field | Description |
|---|---|
| **KRI Name** | [Descriptive name for the KRI] |
| **KRI Description** | [What the KRI measures and how it relates to the risk treatment] |
| **Measurement Method** | [How the KRI is calculated or measured] |
| **Data Source** | [System or process that produces the KRI data] |
| **Reporting Frequency** | [How often the KRI is measured and reported] |
| **Green Threshold** | [Value/range indicating control is operating effectively] |
| **Amber Threshold** | [Value/range requiring management attention] |
| **Red Threshold** | [Value/range indicating control failure or risk materialization; triggers escalation] |
| **KRI Owner** | [Name, Role] |
| **Escalation Action (Red)** | [Action to be taken if KRI breaches the Red threshold] |

### 11.4 Annual Policy and Control Review

The Head of Technology Risk must conduct an annual review of this policy and all active risk treatment controls to ensure:

- The policy remains aligned with current BNM RMiT requirements and any updated regulatory guidance.
- Risk treatment options and approval authorities remain appropriate given changes to [Organization Name]'s risk profile.
- KRI thresholds remain calibrated to current risk levels and business context.
- Lessons learned from incidents, audit findings, and regulatory examinations are incorporated.

Annual review findings must be presented to the CRO and the TRMC, and any material changes to this policy must be approved in accordance with Section 14.

---

## 12. Exceptions and Escalation Process

### 12.1 Policy Exceptions

*Define the circumstances under which exceptions to this policy may be granted, the process for requesting and approving exceptions, and the governance requirements for exception management. This section is critical for demonstrating to auditors that the policy is enforced with rigour.*

An exception to this policy is a formally documented and approved departure from one or more of the policy's requirements. Exceptions are not a mechanism to avoid compliance — they are a governance-controlled accommodation for circumstances where strict policy adherence is temporarily impractical, provided the underlying risk is managed appropriately.

#### 12.1.1 Grounds for Exception

Exceptions may only be requested on the following grounds:

- **Technical Infeasibility:** The required treatment control is technically impossible to implement within the current technology environment, with documented evidence.
- **Operational Constraint:** Implementation of the required control would cause unacceptable disruption to critical business operations, with documented impact assessment.
- **Commercial Constraint:** The cost of implementing the required control is demonstrably disproportionate to the risk benefit, with documented cost-benefit analysis.
- **Regulatory Transition:** [Organization Name] is in a documented transition period toward compliance, with a credible and approved remediation roadmap.

#### 12.1.2 Exception Request Process

| Step | Activity | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | Risk Owner identifies that policy compliance is not achievable and documents the grounds for exception. | Risk Owner | Within 5 business days of identification |
| 2 | Risk Owner completes the Exception Request Form (Appendix B) and submits to the Technology Risk Management Team. | Risk Owner | Before the applicable policy requirement deadline |
| 3 | Technology Risk Management Team reviews the exception request for completeness and validity. | Technology Risk Team | Within 3 business days of receipt |
| 4 | Exception request is submitted to the appropriate approval authority (see Table 12.1). | Technology Risk Team | Within 5 business days of initial receipt |
| 5 | Approval authority reviews and approves or rejects the exception request. | Relevant Authority | Within [5–10] business days |
| 6 | Approved exception is recorded in the exception register and the technology risk register. | Technology Risk Team | Within 2 business days of decision |
| 7 | Exception is monitored and reviewed at the prescribed review date. | Technology Risk Team | Per exception approval |
| 8 | Exception expires or is renewed; if renewed more than twice, escalation to next authority level is mandatory. | Head of Technology Risk | At expiry date |

**Table 12.1 — Exception Approval Authority**

| Affected Risk Rating | Exception Approval Authority | Maximum Exception Duration |
|---|---|---|
| Critical | Board / Board Risk Committee | [3] months |
| High | Chief Risk Officer (CRO) | [6] months |
| Medium | Head of Technology Risk | [12] months |
| Low | Technology Risk Manager | [12] months |

#### 12.1.3 Compensating Controls

Where an exception is granted, the Risk Owner must implement documented **compensating controls** to manage the risk during the exception period. Compensating controls must be approved by the same authority that approved the exception and must be subject to the same monitoring requirements as standard treatment controls.

### 12.2 Escalation Process

*Define the escalation path for unresolved risk treatment issues, including overdue treatment plans, persistent KRI breaches, and risks that cannot be adequately treated.*

#### 12.2.1 Escalation Principles

- Escalation is a positive governance action, not an admission of failure. Risk owners are encouraged to escalate early and promptly.
- Suppression of escalation (knowingly withholding information about an unresolved or worsening risk) constitutes a serious misconduct and disciplinary matter.
- All escalations must be documented in the technology risk register.

#### 12.2.2 Escalation Matrix

| Trigger | First Escalation | Second Escalation | Third Escalation |
|---|---|---|---|
| Treatment plan overdue ≤ 30 days | Head of Technology Risk | — | — |
| Treatment plan overdue > 30 days | Head of Technology Risk | CRO | Board Risk Committee |
| KRI breaches Amber threshold | Head of Technology Risk | — | — |
| KRI breaches Red threshold | Head of Technology Risk | CRO | — |
| KRI breaches Red for 3+ consecutive months | CRO | Board Risk Committee | — |
| Residual risk above tolerance after treatment | Head of Technology Risk | CRO | Board Risk Committee |
| Risk materializes causing significant loss | CRO | Board Risk Committee | BNM (if reportable) |
| BNM regulatory finding linked to risk | CRO | Board Risk Committee | — |
| Risk Acceptance expiry with no renewal | Head of Technology Risk | CRO (High/Critical) | — |

#### 12.2.3 Regulatory Escalation and Notification

Where a technology risk or risk treatment failure gives rise to an obligation to notify BNM, [Organization Name] must comply with the relevant reporting obligations under:

- BNM RMiT (incident reporting requirements)
- BNM Supervisory Communication guidelines
- Any applicable BNM circulars or supervisory letters

The Head of Technology Risk must notify the CRO and Compliance immediately upon identifying a potential regulatory reporting obligation. The CRO and Compliance will determine the appropriate regulatory notification and manage the communication with BNM.

---

## 13. Compliance and Enforcement

### 13.1 Compliance Obligations

*Define the compliance obligations arising from this policy, who is responsible for monitoring compliance, and the consequences of non-compliance.*

Compliance with this policy is mandatory for all individuals and entities within its scope as defined in Section 1.2. This policy has been issued pursuant to BNM RMiT Clause 9.3 and forms part of [Organization Name]'s regulated compliance obligations.

The following obligations apply to all in-scope individuals:

- All technology risks must be assessed, treated, and documented in accordance with this policy.
- All risk treatment decisions must be approved at the appropriate authority level before implementation or acceptance.
- All Risk Treatment Plans must be completed using the standard template (Section 9.2) and maintained in the technology risk register.
- All KRI breaches must be reported to the Technology Risk Management Team in accordance with the monitoring schedule in Section 11.2.
- All exceptions to this policy must be formally requested and approved in accordance with Section 12.1.
- Risk owners must provide accurate and timely information to the Technology Risk Management Team for risk register maintenance and reporting.

### 13.2 Monitoring of Policy Compliance

The Technology Risk Management Team is responsible for monitoring compliance with this policy. Monitoring activities include:

- **Quarterly Compliance Reviews:** The Technology Risk Management Team will review all active risk treatment plans to assess compliance with policy requirements.
- **Annual Policy Compliance Assessment:** The Head of Technology Risk will conduct an annual assessment of overall policy compliance and report findings to the TRMC and CRO.
- **Internal Audit:** Internal Audit will independently assess compliance with this policy as part of their annual technology risk audit programme.
- **Management Attestation:** Each Business Unit Head and Technology Risk Owner will provide an annual written attestation of compliance with this policy.

### 13.3 Consequences of Non-Compliance

*Define the consequences of non-compliance, escalating by severity. This section must demonstrate to BNM that the policy is enforceable.*

Non-compliance with this policy will be treated seriously and may result in the following consequences, applied in a manner proportionate to the nature and severity of the breach:

| Non-Compliance Category | Examples | Consequence |
|---|---|---|
| **Minor** | Late submission of risk treatment updates; incomplete documentation | Formal notification to Risk Owner and line manager; remediation required within [10] business days |
| **Moderate** | Repeated late submissions; failure to implement approved treatment actions within agreed timelines | Escalation to Head of Technology Risk; formal written warning; mandatory remediation plan |
| **Serious** | Implementing risk treatment without required approval; knowingly providing inaccurate risk information | Escalation to CRO and HR; disciplinary action in accordance with [Organization Name]'s HR policies; potential regulatory notification |
| **Severe** | Wilful suppression of escalation; deliberate falsification of risk documentation; concealment of a risk from the regulator | Escalation to Board; immediate HR action; potential criminal or regulatory referral |

Non-compliance findings identified by Internal Audit will be treated as formal audit findings and tracked through the audit recommendation process.

### 13.4 Policy Breach Reporting

Any individual who identifies a breach or potential breach of this policy must report it to the Technology Risk Management Team or through [Organization Name]'s whistleblowing channel. Reports made in good faith will be protected in accordance with [Organization Name]'s Whistleblowing Policy.

---

## 14. Review and Approval History

### 14.1 Version History

*Record all versions of this document, including the nature of changes made. This table must be updated each time the document is revised.*

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Role] | Initial version | [Approved By Name, Role] |
| [1.1] | [DD/MM/YYYY] | [Author Name, Role] | [Description of changes] | [Approved By Name, Role] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Role] | [Description of major revision] | [Approved By Name, Role] |

### 14.2 Review Schedule

This policy is subject to mandatory annual review. Reviews must also be triggered by:

- Material changes to BNM RMiT or other applicable regulatory requirements.
- Significant changes to [Organization Name]'s technology risk profile.
- Material incidents or near-misses that reveal gaps in the policy.
- Internal audit findings relating to risk treatment processes.
- Requests from the Board Risk Committee, CRO, or TRMC.

### 14.3 Approval Sign-Off

*Obtain formal signatures from all required approvers prior to the effective date of this policy. Digital signatures or approved electronic approval records are acceptable where supported by [Organization Name]'s document management system.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** | [Name], Head of Technology Risk | | [DD/MM/YYYY] |
| **Reviewed By** | [Name], Technology Risk Manager | | [DD/MM/YYYY] |
| **Reviewed By** | [Name], Chief Information Security Officer | | [DD/MM/YYYY] |
| **Reviewed By** | [Name], Compliance Officer | | [DD/MM/YYYY] |
| **Reviewed By** | [Name], Internal Audit Representative | | [DD/MM/YYYY] |
| **Approved By** | [Name], Chief Risk Officer | | [DD/MM/YYYY] |
| **Endorsed By** | [Name], Board Risk Committee Chairman | | [DD/MM/YYYY] |

---

## 15. References

*List all regulatory documents, standards, and internal policies referenced in this document. All references must be current and accessible to policy users.*

### 15.1 Regulatory References

| Document | Issuing Authority | Relevant Clause(s) | Version / Date |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 9.3 (Risk Treatment); Clauses 9.1–9.2 (Risk Assessment); Clause 11 (Outsourcing) | [RMiT Publication Date] |
| Guidelines on Management of IT Outsourcing | Bank Negara Malaysia | All | [Publication Date] |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Sections 5–7 (Security Principle) | 2010, as amended |
| Guidelines on Cybersecurity Framework | NACSA | All | [Publication Date] |
| Financial Services Act 2013 | Parliament of Malaysia | Applicable sections | 2013, as amended |
| Islamic Financial Services Act 2013 | Parliament of Malaysia | Applicable sections | 2013, as amended |

### 15.2 Standards References

| Standard | Issuing Body | Relevant Section(s) | Version |
|---|---|---|---|
| ISO 31000:2018 — Risk Management Guidelines | ISO | Clause 6.5 (Risk Treatment) | 2018 |
| ISO/IEC 27005:2022 — Information Security Risk Management | ISO/IEC | Clause 9 (Risk Treatment) | 2022 |
| ISO/IEC 27001:2022 — Information Security Management Systems | ISO/IEC | Clause 6.1.3; Annex A | 2022 |
| NIST Cybersecurity Framework (CSF) | NIST | Respond and Recover Functions | 2.0 (2024) |
| NIST SP 800-37 — Risk Management Framework | NIST | All | Rev. 2 (2018) |

### 15.3 Internal Policy References

| Document | Owner | Version | Location |
|---|---|---|---|
| Technology Risk Management Framework (TRMF) | Head of Technology Risk | [Version] | [Document Management System Path] |
| Technology Risk Assessment Policy | Head of Technology Risk | [Version] | [Document Management System Path] |
| Technology Risk Register Procedure | Technology Risk Team | [Version] | [Document Management System Path] |
| Information Security Policy | CISO | [Version] | [Document Management System Path] |
| IT Outsourcing Policy | Head of Technology Risk | [Version] | [Document Management System Path] |
| Business Continuity Policy | [Owner] | [Version] | [Document Management System Path] |
| Incident Management Policy | CISO | [Version] | [Document Management System Path] |
| Whistleblowing Policy | Compliance | [Version] | [Document Management System Path] |
| Human Resources Policy | Head of HR | [Version] | [Document Management System Path] |

---

## 16. Appendices

### Appendix A — Risk Rating Matrix (5×5)

*Complete the following risk matrix with the final risk ratings corresponding to each combination of Likelihood and Impact, consistent with [Organization Name]'s risk appetite framework.*

**Table A.1 — Risk Rating Matrix**

| | **Impact: Insignificant (1)** | **Impact: Minor (2)** | **Impact: Moderate (3)** | **Impact: Major (4)** | **Impact: Catastrophic (5)** |
|---|---|---|---|---|---|
| **Likelihood: Almost Certain (5)** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Likelihood: Likely (4)** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Likelihood: Possible (3)** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Likelihood: Unlikely (2)** | Negligible (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Likelihood: Rare (1)** | Negligible (1) | Negligible (2) | Low (3) | Low (4) | Medium (5) |

**Colour Legend:**

| Rating | Score Range |
|---|---|
| Critical | 20–25 |
| High | 12–19 |
| Medium | 5–11 |
| Low | 3–4 |
| Negligible | 1–2 |

---

### Appendix B — Exception Request Form

*This form must be completed in full for all requests for exceptions to this Risk Treatment Policy. Incomplete forms will not be accepted. Submit to the Technology Risk Management Team.*

---

**RISK TREATMENT POLICY — EXCEPTION REQUEST FORM**

| Field | Detail |
|---|---|
| **Exception Request Reference** | [Auto-generated or assigned by Technology Risk Team] |
| **Date of Request** | [DD/MM/YYYY] |
| **Requested By** | [Name, Role, Business Unit] |
| **Risk Register Reference** | [RR-YYYY-NNN] |
| **Risk Title** | [Risk title from risk register] |
| **Risk Rating** | [Critical / High / Medium / Low] |
| **Policy Clause(s) Affected** | [Specific clause(s) of this policy from which an exception is requested] |
| **Grounds for Exception** | [Technical Infeasibility / Operational Constraint / Commercial Constraint / Regulatory Transition — select one and provide full justification] |
| **Supporting Evidence** | [List of attached supporting documents] |
| **Proposed Compensating Controls** | [Describe the compensating controls to be implemented during the exception period] |
| **Proposed Exception Duration** | [From DD/MM/YYYY to DD/MM/YYYY] |
| **Remediation Plan** | [How will full policy compliance be achieved? Include milestones and target dates.] |
| **Risk Owner Sign-Off** | [Name, Role, Date] |
| **Technology Risk Team Review** | [Name, Date, Recommendation: Approve / Reject] |
| **Approval Authority Decision** | [Name, Role, Date, Decision: Approved / Rejected, Conditions] |
| **Exception Register Entry Date** | [DD/MM/YYYY] |

---

### Appendix C — Risk Treatment Plan — Full Template

*Use this template for all Risk Treatment Plans for risks rated Medium and above. Maintain completed plans in the technology risk register and document management system.*

---

**RISK TREATMENT PLAN**

**Section 1 — Risk Identification**

| Field | Detail |
|---|---|
| Risk Register Reference | [RR-YYYY-NNN] |
| Risk Title | [Brief title] |
| Risk Category | [Cybersecurity / IT Operations / Change Management / Outsourcing / Data / Infrastructure / Other] |
| Risk Source | [Internal / External / Regulatory / Third Party / Other] |
| Risk Owner | [Name, Role, Business Unit] |
| Date Risk Identified | [DD/MM/YYYY] |
| Date of Risk Assessment | [DD/MM/YYYY] |
| Inherent Likelihood | [1–5] |
| Inherent Impact | [1–5] |
| Inherent Risk Score | [Score] |
| Inherent Risk Rating | [Critical / High / Medium / Low / Negligible] |

**Section 2 — Risk Description**

*[Provide a detailed description of the technology risk, including the threat actor or source, the vulnerability being exploited, the asset at risk, and the potential consequence if the risk materializes. Minimum 3–5 sentences.]*

**Section 3 — Treatment Selection**

| Treatment Option | Selected? | Justification |
|---|---|---|
| Mitigate (Reduce) | [Yes / No] | [If selected, explain why this option was chosen] |
| Transfer (Share) | [Yes / No] | [If selected, explain the transfer mechanism] |
| Avoid (Terminate) | [Yes / No] | [If selected, explain what activity is being terminated] |
| Accept (Tolerate) | [Yes / No] | [If selected, provide full acceptance rationale] |

**Section 4 — Treatment Actions**

| # | Action | Control Type | Owner | Target Date | Budget Required | Status |
|---|---|---|---|---|---|---|
| 1 | [Action] | [Preventive/Detective/Corrective] | [Name] | [Date] | [RM / N/A] | [Status] |
| 2 | [Action] | [Preventive/Detective/Corrective] | [Name] | [Date] | [RM / N/A] | [Status] |
| 3 | [Action] | [Preventive/Detective/Corrective] | [Name] | [Date] | [RM / N/A] | [Status] |

**Section 5 — Expected Residual Risk**

| Field | Detail |
|---|---|
| Expected Residual Likelihood | [1–5] |
| Expected Residual Impact | [1–5] |
| Expected Residual Score | [Score] |
| Expected Residual Rating | [Critical / High / Medium / Low / Negligible] |
| Within Risk Tolerance? | [Yes / No — if No, explain why further acceptance/escalation is required] |

**Section 6 — KRI Assignment**

| KRI Name | Measurement | Green Threshold | Amber Threshold | Red Threshold | Owner |
|---|---|---|---|---|---|
| [KRI Name] | [How measured] | [Value] | [Value] | [Value] | [Name] |

**Section 7 — Approvals**

| Role | Name | Decision | Date |
|---|---|---|---|
| Risk Owner | | Prepared | |
| Technology Risk Team | | Reviewed | |
| [Approval Authority per Section 8] | | [Approved / Rejected] | |

**Section 8 — Review History**

| Review Date | Reviewer | Findings | Action Taken |
|---|---|---|---|
| [DD/MM/YYYY] | [Name] | [Summary of findings] | [Action] |

---

### Appendix D — Risk Acceptance Register Template

*The Technology Risk Management Team must maintain a central Risk Acceptance Register for all formally accepted risks. This register is subject to review by Internal Audit and BNM.*

**Table D.1 — Risk Acceptance Register**

| Register Reference | Risk Register Ref | Risk Title | Risk Rating | Acceptance Rationale | Acceptance Period | Approval Authority | Approval Date | Review Date | Compensating Controls | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| [RA-YYYY-NNN] | [RR-YYYY-NNN] | [Title] | [Rating] | [Summary] | [From – To] | [Name, Role] | [Date] | [Date] | [Summary] | [Active / Expired / Renewed / Withdrawn] |

---

### Appendix E — Risk Treatment Status Report Template

*The Head of Technology Risk must use this template (or an equivalent approved format) for quarterly reporting to the TRMC, CRO, and Board Risk Committee.*

---

**QUARTERLY TECHNOLOGY RISK TREATMENT STATUS REPORT**

**Report Period:** [Quarter and Year]
**Prepared By:** [Name, Role]
**Prepared Date:** [DD/MM/YYYY]
**Submitted To:** [TRMC / CRO / Board Risk Committee]

**Executive Summary:**

*[2–3 sentences summarizing the overall technology risk treatment posture, key changes from the prior quarter, and any matters requiring Board or senior management attention.]*

**Table E.1 — Risk Treatment Summary by Rating**

| Risk Rating | Total Open Risks | On Track | Overdue | Completed This Quarter | Newly Identified | Accepted |
|---|---|---|---|---|---|---|
| Critical | | | | | | |
| High | | | | | | |
| Medium | | | | | | |
| Low | | | | | | |
| **Total** | | | | | | |

**Table E.2 — Overdue Risk Treatment Plans (>30 Days)**

| Risk Ref | Risk Title | Rating | Owner | Original Due Date | Days Overdue | Reason | Escalation Status |
|---|---|---|---|---|---|---|---|
| [RR-YYYY-NNN] | [Title] | [Rating] | [Name] | [Date] | [Days] | [Reason] | [Escalated To / Action] |

**Table E.3 — Critical and High Risk Acceptance Summary**

| Risk Ref | Risk Title | Rating | Acceptance Approved By | Acceptance Start | Acceptance Expiry | Compensating Controls Effective? |
|---|---|---|---|---|---|---|
| [RA-YYYY-NNN] | [Title] | [Rating] | [Name] | [Date] | [Date] | [Yes / No / Partial] |

**Key Issues and Management Actions:**

*[List the top 3–5 risk treatment issues requiring management attention, with proposed actions and owners.]*

---

### Appendix F — Glossary of Control Types

*Reference guide for classifying controls within Risk Treatment Plans.*

| Control Type | Definition | Examples |
|---|---|---|
| **Preventive** | Designed to stop a risk event from occurring. | MFA, access controls, patch management, encryption, network segmentation |
| **Detective** | Designed to identify that a risk event has occurred or is occurring. | SIEM alerting, intrusion detection, log monitoring, anomaly detection |
| **Corrective** | Designed to limit damage after a risk event and restore normal operation. | Incident response, data recovery, disaster recovery, backup restoration |
| **Compensating** | Alternative controls where primary controls cannot be implemented. | Enhanced manual review, temporary access restrictions, interim monitoring |
| **Directive** | Policies, procedures, and standards that mandate specific behaviours. | Security policies, operational procedures, user awareness training |
| **Physical** | Physical measures that protect technology assets from physical threats. | Data centre access controls, CCTV, secure cable management |

---

*End of Document*

---

**Document Control Notice:** This document is subject to version control. The master copy is maintained in [Organization Name]'s Document Management System at [System Path / Location]. Printed copies are uncontrolled. Always verify you are using the current version before relying on this document.

| Field | Detail |
|---|---|
| **Document ID** | [Document ID] |
| **Current Version** | 1.0 |
| **Classification** | Confidential |
| **Next Mandatory Review** | [Next Review Date] |