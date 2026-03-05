# Escalation Procedures for Risk Appetite Threshold Breaches

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Risk Officer (CRO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Bank Negara Malaysia (BNM) — Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT Paragraph 9.4 |

---

> **Confidentiality Notice:** This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable laws, including the Personal Data Protection Act 2010 (PDPA) and [Organization Name]'s Information Security Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory Context](#3-regulatory-context)
4. [Scope and Applicability](#4-scope-and-applicability)
5. [Quantitative Thresholds and Key Risk Indicators (KRIs)](#5-quantitative-thresholds-and-key-risk-indicators-kris)
6. [Qualitative Risk Tolerance Statements](#6-qualitative-risk-tolerance-statements)
7. [Breach Escalation Triggers](#7-breach-escalation-triggers)
8. [Step-by-Step Escalation Process Flow](#8-step-by-step-escalation-process-flow)
9. [Roles and Responsibilities (RACI)](#9-roles-and-responsibilities-raci)
10. [Communication and Notification Requirements](#10-communication-and-notification-requirements)
11. [Documentation and Evidence Requirements](#11-documentation-and-evidence-requirements)
12. [Trend Review and Reporting](#12-trend-review-and-reporting)
13. [Exceptions and Waivers](#13-exceptions-and-waivers)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the primary intent of this document and the regulatory obligation it fulfils. Reference the specific RMiT clause and the risk management objective it supports.*

This document establishes the formal escalation procedures to be followed by [Organization Name] when a risk appetite threshold breach — or a condition indicating that a breach is imminent — is identified within the technology risk domain. These procedures ensure that material technology risks are surfaced promptly to the appropriate level of governance, enabling timely and informed decision-making in accordance with **BNM RMiT Paragraph 9.4**.

The escalation procedures support [Organization Name]'s broader Technology Risk Management Framework (TRMF) by:

- Defining clear escalation pathways for technology-related risk events, control failures, and Key Risk Indicator (KRI) threshold breaches;
- Ensuring accountability and traceability from detection to resolution;
- Facilitating regulatory compliance with BNM RMiT and related supervisory expectations;
- Enabling the Board and Senior Management to exercise effective oversight of the institution's technology risk posture.

### 1.2 Objectives

*List the specific measurable outcomes this procedure is designed to achieve.*

The specific objectives of this document are to:

- Establish a standardised, repeatable escalation process for all technology risk appetite threshold breaches;
- Define escalation triggers, timelines, and notification requirements at each tier of the governance hierarchy;
- Assign clear roles and responsibilities to all parties involved in the escalation lifecycle;
- Ensure that escalated matters receive appropriate management attention, remediation action, and post-incident review;
- Maintain an auditable record of all breaches, escalations, decisions, and outcomes;
- Support quarterly trend analysis of escalation events to inform risk appetite recalibration.

---

## 2. Definitions and Abbreviations

*Provide precise definitions for all technical and regulatory terms used throughout this document. Ensure alignment with BNM RMiT and internal policy language.*

| Term / Abbreviation | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and financial regulator of Malaysia |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| **Risk Appetite** | The aggregate level and types of risk [Organization Name] is willing to accept in pursuit of its strategic objectives, as approved by the Board |
| **Risk Appetite Statement (RAS)** | The formal document articulating [Organization Name]'s qualitative and quantitative risk appetite parameters |
| **Risk Appetite Threshold** | A specific measurable limit, boundary, or tolerance level within the RAS, beyond which a breach is deemed to have occurred |
| **Risk Limit** | An operational sub-limit set below the risk appetite threshold, used to provide early warning prior to a breach |
| **Key Risk Indicator (KRI)** | A forward-looking metric used to signal increasing risk exposure or deteriorating control effectiveness |
| **KRI Breach** | A KRI value that meets or exceeds a defined threshold trigger level |
| **Escalation** | The formal process of elevating a risk event, control failure, or threshold breach to a higher level of authority for awareness, decision, and action |
| **Escalation Tier** | A defined level within the governance hierarchy at which escalation is directed (e.g., Business Unit, Risk Function, Senior Management, Board) |
| **Breach Event** | Any instance in which a technology risk metric, KRI, or risk limit is exceeded, or a control failure occurs that may lead to a threshold breach |
| **Material Risk Event** | A risk event meeting defined criteria for materiality (severity, financial impact, regulatory reportability) |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for assigning roles in a process |
| **CRO** | Chief Risk Officer |
| **CTO** | Chief Technology Officer |
| **CISO** | Chief Information Security Officer |
| **BRC** | Board Risk Committee |
| **MANCO** | Management Committee |
| **TRMF** | Technology Risk Management Framework |
| **ITSO** | Information Technology Security Officer |
| **BCP/DRP** | Business Continuity Plan / Disaster Recovery Plan |
| **RTO** | Recovery Time Objective |
| **RPO** | Recovery Point Objective |
| **SLA** | Service Level Agreement |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia) |

---

## 3. Regulatory Context

### 3.1 BNM RMiT — Paragraph 9.4

*Summarise the specific regulatory obligation from RMiT Paragraph 9.4 that mandates this procedure, using language consistent with the policy document.*

BNM's **Risk Management in Technology (RMiT)** policy document, effective [Effective Date of RMiT], requires financial institutions to establish and maintain robust technology risk appetite frameworks. Paragraph 9.4 specifically mandates that:

- The Board-approved risk appetite and corresponding risk limits for technology risks are clearly defined and communicated;
- Mechanisms are in place to monitor technology risk exposures against defined limits on an ongoing basis;
- **Formal escalation procedures are documented and operationalised** to ensure prompt notification to senior management and the Board when risk appetite thresholds are breached or at risk of being breached;
- Management is required to take appropriate and timely corrective action upon escalation;
- All escalations, decisions, and remediation actions are documented and subject to independent review.

### 3.2 Related Regulatory Requirements

*Reference additional regulatory obligations that intersect with these escalation procedures.*

| Regulatory Instrument | Relevant Requirement | Relationship to This Procedure |
|---|---|---|
| BNM RMiT — Paragraph 9.4 | Technology risk appetite escalation | Primary obligation |
| BNM RMiT — Paragraph 10 | Technology incident management | Escalations arising from technology incidents |
| BNM RMiT — Paragraph 11 | Business continuity management | BCP/DRP activation escalation triggers |
| BNM RMiT — Paragraph 4 | Board and Senior Management responsibilities | Governance recipients of escalations |
| BNM Guidelines on Operational Risk | Operational loss event reporting | Material operational risk escalation |
| PDPA 2010 | Personal data breach notification | Data breach escalation requirements |
| BNM Guidelines on Financial Reporting | Material event disclosure | Board reporting obligations |
| [Other applicable BNM guidelines] | [Description] | [Relationship] |

---

## 4. Scope and Applicability

### 4.1 Scope

*Define the boundaries of applicability for these escalation procedures — which entities, systems, risk categories, and risk types are covered.*

These escalation procedures apply to all technology risk appetite threshold breaches identified within [Organization Name], including its subsidiaries and branches operating under the consolidated group, where applicable.

**In scope:**

- All technology domains covered under [Organization Name]'s Technology Risk Management Framework, including:
  - Information security and cybersecurity risks
  - Technology availability and resilience risks
  - Technology change and project delivery risks
  - Third-party and outsourcing technology risks
  - Data management and data governance risks
  - Emerging technology risks (cloud, AI/ML, API ecosystems)
- All systems classified as **Critical** or **High** under [Organization Name]'s Application Criticality Classification;
- KRI breaches reported through the [Technology Risk Monitoring System / GRC Platform];
- Risk events that trigger mandatory escalation under [Organization Name]'s Risk Event Reporting Policy;
- Technology-related control failures identified through [Internal Audit / Risk and Control Self-Assessment / Continuous Control Monitoring].

**Out of scope:**

- Non-technology risk escalations (e.g., credit risk, market risk, liquidity risk) — refer to [relevant policy];
- Technology incidents managed entirely within defined SLAs without threshold breach — refer to [IT Incident Management Procedure];
- Routine risk reporting that does not meet escalation trigger criteria defined in Section 7.

### 4.2 Applicability

*Identify the staff, functions, and entities to whom this procedure applies.*

| Applicability | Details |
|---|---|
| **Primary Responsibility** | All Risk Owners, Risk Champions, and Business Unit Heads across [Organization Name] |
| **Risk Function** | Technology Risk Management team under the CRO |
| **Technology Function** | CTO's organisation, including IT Operations, Infrastructure, and Information Security |
| **Internal Audit** | For independent assurance and post-escalation review |
| **Board and Committees** | Board Risk Committee (BRC), Audit Committee (AC), MANCO |
| **Subsidiary Applicability** | [List subsidiaries / state "Not applicable for standalone entity"] |
| **Third Parties** | Outsourced service providers where contractual obligations require breach notification to [Organization Name] |

### 4.3 Guiding Principles

*State the overarching principles that govern how escalations should be handled.*

All personnel involved in escalation activities must adhere to the following principles:

- **Timeliness:** Escalations must be initiated without delay upon breach identification, within the timeframes specified in Section 8.
- **Completeness:** All relevant facts, data, and context must accompany the escalation notification.
- **Accountability:** Risk Owners retain accountability for breach remediation even after escalation.
- **No Suppression:** Personnel must not suppress, delay, or circumvent escalation obligations. Suppression of material escalations constitutes a disciplinary matter.
- **Confidentiality:** Escalation communications must be handled on a need-to-know basis and classified at minimum as **Confidential**.
- **Independence:** The Risk Function must exercise independent judgment in escalation decisions, free from business unit pressure.

---

## 5. Quantitative Thresholds and Key Risk Indicators (KRIs)

### 5.1 KRI Framework Overview

*Describe how KRIs are structured and how threshold levels translate into escalation obligations. Reference the Technology Risk Appetite Statement.*

[Organization Name]'s technology risk appetite is operationalised through a set of Key Risk Indicators (KRIs) defined in the **Technology Risk Appetite Statement (RAS)** approved by the Board. Each KRI is assigned three threshold levels:

| Threshold Level | Status | Colour Indicator | Action Required |
|---|---|---|---|
| **Green (Tolerance)** | Within appetite | Green | Continue monitoring — no escalation required |
| **Amber (Warning)** | Approaching appetite limit | Amber | Heightened monitoring; Risk Owner to investigate and report to Risk Function |
| **Red (Breach)** | Appetite threshold breached | Red | Mandatory escalation per this procedure |

### 5.2 Technology Risk KRI Threshold Schedule

*Populate this table with the specific KRIs applicable to [Organization Name]. The examples below are illustrative and must be replaced with Board-approved values.*

#### 5.2.1 Information Security and Cybersecurity KRIs

| KRI ID | KRI Name | Unit | Green (Tolerance) | Amber (Warning) | Red (Breach) | Measurement Frequency | Risk Owner |
|---|---|---|---|---|---|---|---|
| IS-KRI-01 | Number of Critical Security Vulnerabilities (Unpatched > 30 days) | Count | 0 | 1–2 | ≥ 3 | Weekly | CISO |
| IS-KRI-02 | Mean Time to Detect (MTTD) — Security Incidents | Hours | ≤ 4 hrs | 4–8 hrs | > 8 hrs | Per incident | CISO |
| IS-KRI-03 | Mean Time to Respond (MTTR) — Critical Security Incidents | Hours | ≤ 2 hrs | 2–4 hrs | > 4 hrs | Per incident | CISO |
| IS-KRI-04 | Number of Successful Phishing Attempts | Count/month | 0 | 1–3 | > 3 | Monthly | CISO |
| IS-KRI-05 | Percentage of Security Awareness Training Completion | % | ≥ 95% | 85–94% | < 85% | Quarterly | CISO |
| [IS-KRI-0X] | [KRI Name] | [Unit] | [Green] | [Amber] | [Red] | [Frequency] | [Owner] |

#### 5.2.2 Technology Availability and Resilience KRIs

| KRI ID | KRI Name | Unit | Green (Tolerance) | Amber (Warning) | Red (Breach) | Measurement Frequency | Risk Owner |
|---|---|---|---|---|---|---|---|
| TA-KRI-01 | System Availability — Core Banking System | % uptime | ≥ 99.9% | 99.0–99.89% | < 99.0% | Monthly | CTO |
| TA-KRI-02 | Number of P1 (Critical) Technology Incidents | Count/month | 0 | 1 | ≥ 2 | Monthly | CTO |
| TA-KRI-03 | RTO Achievement — Disaster Recovery Tests | % tests passed | 100% | 90–99% | < 90% | Per test | CTO |
| TA-KRI-04 | Unplanned Technology Downtime — Internet Banking | Hours/month | ≤ 0.5 hrs | 0.5–2 hrs | > 2 hrs | Monthly | CTO |
| [TA-KRI-0X] | [KRI Name] | [Unit] | [Green] | [Amber] | [Red] | [Frequency] | [Owner] |

#### 5.2.3 Technology Change and Project Delivery KRIs

| KRI ID | KRI Name | Unit | Green (Tolerance) | Amber (Warning) | Red (Breach) | Measurement Frequency | Risk Owner |
|---|---|---|---|---|---|---|---|
| TC-KRI-01 | Percentage of Emergency Changes | % of total changes | ≤ 5% | 5–10% | > 10% | Monthly | CTO |
| TC-KRI-02 | Post-implementation Defects — Critical Applications | Count | 0 | 1–2 | ≥ 3 | Per release | CTO |
| TC-KRI-03 | Critical IT Project Schedule Overrun | % overrun | ≤ 10% | 10–25% | > 25% | Monthly | CTO / CRO |
| [TC-KRI-0X] | [KRI Name] | [Unit] | [Green] | [Amber] | [Red] | [Frequency] | [Owner] |

#### 5.2.4 Third-Party and Outsourcing Technology KRIs

| KRI ID | KRI Name | Unit | Green (Tolerance) | Amber (Warning) | Red (Breach) | Measurement Frequency | Risk Owner |
|---|---|---|---|---|---|---|---|
| TP-KRI-01 | Critical Vendor SLA Breaches | Count/quarter | 0 | 1 | ≥ 2 | Quarterly | CTO / CRO |
| TP-KRI-02 | Percentage of Critical Vendors with Overdue Risk Assessments | % | 0% | 1–10% | > 10% | Quarterly | CRO |
| TP-KRI-03 | Number of Critical Vendor Security Incidents | Count/month | 0 | 1 | ≥ 2 | Monthly | CISO |
| [TP-KRI-0X] | [KRI Name] | [Unit] | [Green] | [Amber] | [Red] | [Frequency] | [Owner] |

#### 5.2.5 Data Management KRIs

| KRI ID | KRI Name | Unit | Green (Tolerance) | Amber (Warning) | Red (Breach) | Measurement Frequency | Risk Owner |
|---|---|---|---|---|---|---|---|
| DM-KRI-01 | Number of Personal Data Breaches | Count | 0 | N/A | ≥ 1 (any) | Per event | CISO / DPO |
| DM-KRI-02 | Data Quality Issues — Critical Regulatory Reports | Count | 0 | 1–2 | ≥ 3 | Per submission | CTO / CFO |
| [DM-KRI-0X] | [KRI Name] | [Unit] | [Green] | [Amber] | [Red] | [Frequency] | [Owner] |

### 5.3 Aggregate Risk Position Thresholds

*Define how multiple concurrent amber or red indicators are aggregated to determine an overall portfolio-level escalation requirement.*

In addition to individual KRI breaches, the following aggregate positions require escalation regardless of individual KRI levels:

| Aggregate Condition | Escalation Tier |
|---|---|
| Three (3) or more Amber KRIs across any single risk category | Tier 2 — Risk Function and CRO notification |
| Five (5) or more Amber KRIs across all technology risk categories | Tier 3 — MANCO escalation |
| Any single Red KRI breach | Tier 2 minimum; Tier 3 if material (per Section 7) |
| Two (2) or more concurrent Red KRI breaches | Tier 3 — MANCO and BRC notification |
| [Additional aggregate condition] | [Tier] |

---

## 6. Qualitative Risk Tolerance Statements

### 6.1 Overview

*Explain the role of qualitative tolerance statements in supplementing quantitative KRIs. Some risk conditions cannot be fully captured by metrics alone.*

Certain technology risk scenarios cannot be fully characterised by quantitative KRI metrics. [Organization Name] has therefore established qualitative risk tolerance statements to guide escalation decisions in ambiguous situations. These statements reflect the Board's expressed risk appetite on specific technology risk themes and must be applied with professional judgement by the CRO and Risk Function.

### 6.2 Qualitative Tolerance Statement Register

*The following table contains [Organization Name]'s approved qualitative risk tolerance statements. Each statement identifies conditions that, if present, require escalation even in the absence of a formal KRI breach.*

| Statement ID | Risk Theme | Qualitative Tolerance Statement | Escalation Trigger Condition | Minimum Escalation Tier |
|---|---|---|---|---|
| QTS-01 | Cybersecurity | [Organization Name] has **zero tolerance** for any confirmed exfiltration of customer personal data or regulated financial data by a malicious actor | Any confirmed or suspected exfiltration of personal or financial data | Tier 3 — Immediate MANCO and BRC notification; BNM notification per regulatory obligation |
| QTS-02 | Technology Resilience | [Organization Name] **does not accept** extended unavailability of customer-facing digital channels exceeding agreed RTOs during business hours | Any core banking or internet banking outage exceeding defined RTO during peak hours | Tier 2 — Immediate CRO and CTO escalation |
| QTS-03 | Regulatory Compliance | [Organization Name] has **zero tolerance** for wilful non-compliance with BNM technology regulatory requirements or supervisory directives | Any confirmed or probable breach of a mandatory BNM regulatory requirement | Tier 3 — MANCO; regulatory legal review required |
| QTS-04 | Third-Party Dependency | [Organization Name] is **not willing** to accept concentration risk from a single critical third-party technology provider without a documented and tested contingency plan | Identification of undocumented critical single-source dependency | Tier 2 — Risk Function and CRO notification |
| QTS-05 | Technology Change | [Organization Name] **does not accept** deployments to production systems without successful completion of required testing and change approval processes | Any confirmed bypass of the change management process for production systems | Tier 2 — CRO and CTO notification; disciplinary review |
| QTS-06 | Emerging Technology | [Organization Name] maintains a **low risk tolerance** for adoption of emerging technologies without a completed and approved risk assessment | Implementation of AI/ML, cloud, or other emerging technology without a completed risk assessment | Tier 2 — Risk Function notification |
| [QTS-0X] | [Risk Theme] | [Qualitative tolerance statement] | [Trigger condition] | [Tier] |

### 6.3 Qualitative Breach Assessment Process

*Describe how personnel should assess and document a potential qualitative breach.*

Where a condition potentially meets a qualitative risk tolerance breach:

1. **The identifying party** must document the observed condition with factual detail, referencing the applicable QTS statement.
2. **The Risk Function** must convene a Qualitative Breach Assessment within **[X] business hours** of notification.
3. The assessment team (minimum: Risk Owner, Technology Risk Manager, and CRO delegate) must collectively determine whether the qualitative breach threshold has been met.
4. The outcome of the assessment — including rationale — must be documented in the **Risk Event Register** prior to escalation.
5. If breach is confirmed, escalation proceeds per Section 8.

---

## 7. Breach Escalation Triggers

### 7.1 Trigger Categories

*Define the distinct event types and conditions that activate the escalation procedure. Distinguish between automatic (system-generated) and judgement-based triggers.*

Escalation triggers are categorised as follows:

| Category | Description | Trigger Source |
|---|---|---|
| **Category A — Automatic KRI Breach** | A KRI metric crosses a Red threshold as reported by the monitoring system | Automated — [GRC Platform / Risk Monitoring System] |
| **Category B — Approaching Threshold** | A KRI metric enters the Amber zone for two consecutive measurement periods | Automated or manual — Risk Function review |
| **Category C — Qualitative Breach** | A condition matches a qualitative risk tolerance statement in Section 6 | Manual — Risk Owner or Risk Function judgement |
| **Category D — Aggregate Position** | Multiple Amber/Red KRIs meet aggregate escalation criteria in Section 5.3 | Automated or manual — Risk Function review |
| **Category E — Control Failure** | A key control is confirmed as ineffective or absent, irrespective of current KRI level | Manual — Internal Audit, RCSA, or Control Monitoring |
| **Category F — External Event** | An external technology event (industry incident, regulatory action, threat intelligence) presents a credible and material risk to [Organization Name] | Manual — Risk Function or CISO judgement |
| **Category G — Regulatory Direction** | BNM or another regulator issues a supervisory finding, directive, or enforcement action relating to technology risk | Manual — Compliance Function |

### 7.2 Trigger-to-Tier Mapping

*Map each trigger category to the mandatory escalation tier, notification timeline, and minimum required action.*

| Trigger Category | Severity | Escalation Tier | Maximum Notification Timeline | Minimum Required Action |
|---|---|---|---|---|
| Category A — KRI Red Breach (Critical) | Critical | Tier 3 | **Within 2 hours** of confirmation | Immediate notification to CRO, CTO, CISO; MANCO briefing within 24 hours; BRC notification at next scheduled meeting or within 5 business days if material |
| Category A — KRI Red Breach (High) | High | Tier 2 | **Within 4 hours** of confirmation | Notification to CRO, relevant Risk Owner; remediation plan required within 24 hours |
| Category B — Amber (2 consecutive periods) | Elevated | Tier 1–2 | **Within 1 business day** | Risk Function notification; enhanced monitoring; pre-emptive action plan |
| Category C — Qualitative Breach | Material | Tier 3 | **Within 2 hours** of determination | Same as Category A Critical |
| Category D — Aggregate Position | High | Tier 2–3 | **Within 4 hours** | Risk Function assessment; CRO notification; aggregate remediation plan |
| Category E — Control Failure | High | Tier 2 | **Within 1 business day** | CRO notification; compensating control implementation; Internal Audit notification |
| Category F — External Event | High/Medium | Tier 2 | **Within 4 hours** of assessed materiality | CRO, CISO, and CTO notification; threat assessment; pre-emptive controls review |
| Category G — Regulatory Direction | Critical | Tier 3 | **Within 24 hours** of receipt | CRO, CEO, Compliance notification; MANCO briefing; response plan |

### 7.3 Materiality Assessment

*Define the criteria used to classify a breach as material, which may trigger additional reporting obligations including to BNM.*

A technology risk breach is deemed **material** if it meets one or more of the following criteria:

- **Financial Impact:** Actual or reasonably estimated financial loss exceeds MYR [X] million;
- **Customer Impact:** The breach affects [X] or more customers, or results in exposure of customer personal data;
- **Regulatory Reportability:** The breach constitutes a technology-related incident requiring notification to BNM under RMiT or other applicable guidelines;
- **Reputational Impact:** The breach has resulted in, or is reasonably likely to result in, negative public or media coverage;
- **Operational Impact:** The breach has caused, or threatens to cause, a failure of a core business process for more than [X] hours;
- **Strategic Impact:** The breach affects [Organization Name]'s ability to execute a material strategic initiative;
- **Legal Impact:** The breach involves a confirmed personal data breach notifiable under PDPA 2010 or creates material legal exposure.

---

## 8. Step-by-Step Escalation Process Flow

### 8.1 Process Overview

*Provide a high-level narrative of the end-to-end escalation lifecycle before detailing each step.*

The escalation process follows a four-phase lifecycle:

| Phase | Name | Key Activities |
|---|---|---|
| **Phase 1** | Detection and Initial Assessment | Breach identified; initial triage; severity determination |
| **Phase 2** | Notification and Escalation | Formal notification per tier; communication to stakeholders |
| **Phase 3** | Response and Remediation | Remediation planning; execution; status tracking |
| **Phase 4** | Closure and Post-Event Review | Breach closure; root cause analysis; lessons learned; reporting |

### 8.2 Tier Definitions

*Define the escalation tiers applicable to [Organization Name]'s governance structure.*

| Tier | Name | Escalation Recipients | Nature of Escalation |
|---|---|---|---|
| **Tier 1** | Business Unit / Operational Level | Risk Owner; Business Unit Head; Technology Risk Champion | Operational awareness; self-managed remediation |
| **Tier 2** | Risk Function / Senior Management | CRO; CTO; CISO; Technology Risk Management team | Management escalation; resource authorisation; remediation oversight |
| **Tier 3** | Executive / Board Committee Level | CEO; MANCO; Board Risk Committee (BRC) | Governance escalation; strategic decision; regulatory notification (if required) |

### 8.3 Phase 1 — Detection and Initial Assessment

#### Step 1.1 — Breach Identification

*Detail how a breach is identified, whether through automated monitoring or manual observation.*

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 1.1.1 | KRI monitoring system generates a threshold breach alert **OR** employee manually identifies a breach condition | [GRC Platform / Monitoring System] / Risk Owner | Real-time / As identified |
| 1.1.2 | Receiving party acknowledges the alert and logs a preliminary entry in the **Risk Event Register** with: Date/time of identification; KRI/trigger reference; initial description of the breach condition | Risk Owner / Technology Risk Management | Within 30 minutes of identification |
| 1.1.3 | Confirm that the alert is not a false positive by cross-referencing source data | Risk Owner with support from Technology Risk Management | Within 1 hour of alert receipt |

#### Step 1.2 — Initial Severity Assessment

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 1.2.1 | Apply the Trigger-to-Tier Mapping in Section 7.2 to determine the escalation tier | Technology Risk Manager | Within 1 hour of breach confirmation |
| 1.2.2 | Apply the Materiality Assessment criteria in Section 7.3 to determine if the breach is material | Technology Risk Manager with CRO input | Within 1 hour of breach confirmation |
| 1.2.3 | Document initial severity rating, escalation tier, and materiality determination in the Risk Event Register | Technology Risk Manager | Within 2 hours of breach confirmation |
| 1.2.4 | If the breach is confirmed material, immediately notify the CRO to initiate Tier 3 escalation, irrespective of the initial assessment | Technology Risk Manager | Immediately upon determination |

### 8.4 Phase 2 — Notification and Escalation

#### Step 2.1 — Tier 1 Escalation (All Breaches)

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 2.1.1 | Notify the relevant Risk Owner and Business Unit Head via [defined communication channel — e.g., email to dedicated escalation inbox + phone call for Critical/High] | Technology Risk Manager | Per trigger timeline in Section 7.2 |
| 2.1.2 | Provide the Risk Owner with a completed **Breach Notification Form** (see Appendix A) | Technology Risk Manager | Concurrent with notification |
| 2.1.3 | Risk Owner acknowledges notification and confirms understanding of escalation obligations | Risk Owner | Within 30 minutes of notification |

#### Step 2.2 — Tier 2 Escalation (High and Critical Breaches)

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 2.2.1 | Technology Risk Manager prepares a **Tier 2 Escalation Brief** (see Appendix B) summarising: Breach description; KRI/trigger reference; initial impact assessment; proposed immediate actions | Technology Risk Manager | Within 2 hours of breach confirmation |
| 2.2.2 | CRO or delegate formally notifies CTO, CISO (as applicable), and relevant Senior Management via designated escalation channel | CRO | Per trigger timeline in Section 7.2 |
| 2.2.3 | CRO convenes an Emergency Risk Response Meeting with relevant Risk Owners, CTO, and CISO | CRO | Within 4 hours for Critical; within 1 business day for High |
| 2.2.4 | Emergency Risk Response Meeting outputs: Confirmed severity classification; approved immediate remediation actions; ownership assignment; status update cadence | CRO (Chair) | At conclusion of meeting |

#### Step 2.3 — Tier 3 Escalation (Critical Breaches and Material Events)

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 2.3.1 | CRO prepares a **Tier 3 Executive Escalation Briefing** (see Appendix C) for submission to CEO and MANCO | CRO | Within 4 hours of breach confirmation for Critical events |
| 2.3.2 | CEO and MANCO notified via [defined channel]; MANCO convened within [24 hours / next scheduled meeting — per materiality] | CEO / CRO | Per trigger timeline |
| 2.3.3 | CRO submits a written briefing to the Chair of the Board Risk Committee (BRC) | CRO | Within 24 hours for Critical events; within 5 business days for High |
| 2.3.4 | Board Risk Committee (BRC) considers the escalation at next scheduled meeting or in extraordinary session if warranted | BRC Chair | Per BRC governance terms of reference |
| 2.3.5 | If the breach meets BNM notification criteria, CRO and Compliance Function prepare regulatory notification; CEO approves prior to submission | CRO / Compliance | Per BNM notification timelines |

### 8.5 Phase 3 — Response and Remediation

#### Step 3.1 — Remediation Planning

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 3.1.1 | Risk Owner develops a formal **Remediation Action Plan** (see Appendix D) containing: Root cause (preliminary); Immediate containment actions; Short-term corrective actions; Long-term preventive actions; Milestones and target completion dates; Resource requirements | Risk Owner | Within 24 hours for Critical; within 3 business days for High |
| 3.1.2 | Technology Risk Management reviews and validates the Remediation Action Plan | CRO / Technology Risk Manager | Within 1 business day of submission |
| 3.1.3 | CRO approves the Remediation Action Plan; escalates to MANCO/BRC if additional resources or strategic decisions required | CRO | Within 1 business day of plan submission |

#### Step 3.2 — Remediation Execution and Monitoring

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 3.2.1 | Risk Owner executes approved remediation actions per plan milestones | Risk Owner | Per approved plan |
| 3.2.2 | Technology Risk Management performs [weekly / bi-weekly] status reviews of open remediation items and updates the Risk Event Register | Technology Risk Manager | Per agreed cadence |
| 3.2.3 | CRO provides status updates to MANCO and BRC at each regular reporting cycle, until breach is remediated | CRO | Per governance reporting calendar |
| 3.2.4 | If remediation is delayed beyond agreed milestones, Risk Owner must re-escalate to CRO with revised plan and rationale | Risk Owner | Upon identification of delay |

### 8.6 Phase 4 — Closure and Post-Event Review

#### Step 4.1 — Breach Closure

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 4.1.1 | Risk Owner confirms completion of all remediation actions and requests closure approval | Risk Owner | Upon completion of remediation |
| 4.1.2 | Technology Risk Management verifies that the relevant KRI has returned to Green (Tolerance) level for a minimum of [X] consecutive measurement periods prior to closure | Technology Risk Manager | Prior to closure recommendation |
| 4.1.3 | CRO formally approves breach closure and updates the Risk Event Register with closure date and final status | CRO | Within 2 business days of verification |
| 4.1.4 | For Tier 3 escalations, CRO communicates closure to MANCO and BRC | CRO | At next scheduled meeting or within 5 business days |

#### Step 4.2 — Post-Event Review (Root Cause Analysis)

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 4.2.1 | For all Critical and material breaches, CRO commissions a formal **Post-Event Review** (Root Cause Analysis) | CRO | Initiated within 5 business days of breach confirmation |
| 4.2.2 | Post-Event Review team (Risk Owner, Technology Risk Manager, independent reviewer) conducts root cause analysis using [5-Whys / Fishbone / equivalent methodology] | Post-Event Review Team | Completed within [15–20] business days |
| 4.2.3 | Post-Event Review Report submitted to CRO; reviewed and approved | Post-Event Review Team / CRO | Within [25] business days of breach |
| 4.2.4 | Lessons learned and systemic control improvement recommendations incorporated into the Technology Risk Management Framework and relevant procedures | CRO / Technology Risk Management | Within [30] business days of breach |
| 4.2.5 | Post-Event Review Report presented to MANCO and BRC | CRO | At next scheduled meeting after completion |

---

## 9. Roles and Responsibilities (RACI)

### 9.1 RACI Matrix — Escalation Procedure

*This RACI matrix defines the roles of key participants across the escalation lifecycle. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Risk Owner / BU Head | Technology Risk Manager | CRO | CTO | CISO | CEO | MANCO | BRC | Internal Audit | Compliance | Legal |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **PHASE 1 — Detection and Assessment** | | | | | | | | | | | |
| KRI monitoring and breach identification | R | R | I | C | C | — | — | — | I | — | — |
| False positive validation | R | R | C | C | C | — | — | — | — | — | — |
| Initial severity and materiality assessment | C | R | A | C | C | — | — | — | — | — | — |
| Risk Event Register logging | R | R | A | — | — | — | — | — | I | — | — |
| **PHASE 2 — Notification and Escalation** | | | | | | | | | | | |
| Tier 1 notification (Risk Owner / BU Head) | A | R | I | — | — | — | — | — | — | — | — |
| Breach Notification Form preparation | C | R | A | — | — | — | — | — | — | — | — |
| Tier 2 escalation (Senior Management) | C | R | A | I | I | — | — | — | — | — | — |
| Tier 2 Escalation Brief preparation | C | R | A | C | C | — | — | — | — | — | — |
| Emergency Risk Response Meeting (chair) | C | C | A/R | C | C | — | — | — | I | — | — |
| Tier 3 escalation (Executive / Board) | C | C | R | C | C | A | I | I | — | — | — |
| Tier 3 Executive Escalation Briefing | C | C | R | C | C | A | I | I | — | — | — |
| BRC notification | — | — | R | — | — | C | C | A | — | — | — |
| Regulatory (BNM) notification | — | — | R | C | C | A | C | I | — | R | C |
| **PHASE 3 — Response and Remediation** | | | | | | | | | | | |
| Remediation Action Plan development | R | C | A | C | C | — | — | — | — | — | — |
| Remediation Action Plan approval | C | C | R/A | C | C | — | I | I | — | — | — |
| Remediation execution | R | I | A | C | C | — | — | — | — | — | — |
| Remediation status monitoring | C | R | A | I | I | — | I | I | — | — | — |
| Status reporting to MANCO / BRC | C | C | R | C | C | I | A | A | — | — | — |
| **PHASE 4 — Closure and Review** | | | | | | | | | | | |
| KRI return-to-green verification | C | R | A | C | C | — | — | — | — | — | — |
| Formal breach closure approval | C | C | R/A | I | I | — | I | I | — | — | — |
| Post-Event Review commissioning | C | C | R/A | C | C | — | I | I | — | — | — |
| Root cause analysis execution | R | R | A | C | C | — | — | — | C | — | — |
| Post-Event Review Report approval | C | C | R/A | C | C | — | I | I | — | — | — |
| Lessons learned implementation | R | R | A | C | C | — | I | I | C | — | — |

### 9.2 Key Role Descriptions

*Provide a brief description of each role's specific responsibilities within the escalation process.*

| Role | Escalation Responsibilities |
|---|---|
| **Risk Owner / Business Unit Head** | First line of defence for breach identification; accountable for Tier 1 escalation initiation; owns remediation plan development and execution; primary point of contact during the response phase |
| **Technology Risk Manager** | Coordinates escalation process; prepares escalation documentation; maintains the Risk Event Register; monitors remediation progress; conducts trend analysis |
| **Chief Risk Officer (CRO)** | Ultimate accountability for escalation procedure compliance; decision authority on breach severity and materiality; primary communicator to executive and Board levels; approves remediation plans and closures |
| **Chief Technology Officer (CTO)** | Provides technology expertise and operational input during breach response; supports remediation planning for technology-domain breaches; resource authorisation within IT function |
| **Chief Information Security Officer (CISO)** | Leads response for information security and cybersecurity-related breaches; advises on threat landscape and control effectiveness |
| **Chief Executive Officer (CEO)** | Accountable for Tier 3 escalations reaching executive level; approves regulatory notifications; provides strategic direction for material breach response |
| **Management Committee (MANCO)** | Receives Tier 3 escalation briefings; provides governance oversight of material breaches; approves significant remediation resource allocation; receives closure and post-event reports |
| **Board Risk Committee (BRC)** | Exercises Board-level oversight; receives escalation briefings on material breaches; reviews and challenges risk appetite framework in light of breach trends; approves material changes to risk appetite thresholds |
| **Internal Audit** | Provides independent assurance on breach response effectiveness; conducts post-event review as independent reviewer where required; reports audit findings to Audit Committee |
| **Compliance Function** | Advises on regulatory notification obligations; coordinates BNM reporting; monitors regulatory developments that may affect escalation requirements |
| **Legal Function** | Advises on legal implications of breach events; supports regulatory communication where legal risk is present; engaged for PDPA-notifiable personal data breaches |

---

## 10. Communication and Notification Requirements

### 10.1 Internal Communication Standards

*Define the required communication channels, formats, and confidentiality requirements for escalation notifications.*

| Communication Type | Channel | Format | Classification | Retention |
|---|---|---|---|---|
| Tier 1 Breach Notification | Email to [designated escalation inbox] + verbal notification | Breach Notification Form (Appendix A) | Confidential | Minimum 7 years |
| Tier 2 Escalation Brief | Encrypted email + [secure messaging platform] | Tier 2 Escalation Brief template (Appendix B) | Confidential | Minimum 7 years |
| Tier 3 Executive Briefing | In-person / video call + written brief | Tier 3 Executive Briefing template (Appendix C) | Confidential | Minimum 7 years |
| MANCO Paper | MANCO secretariat distribution | Standard MANCO paper format | Confidential | Minimum 7 years |
| BRC Paper | BRC secretariat distribution | Standard BRC paper format | Confidential — Board | Minimum 7 years |
| Status Updates | [GRC Platform] + Email | Risk Event Register update | Confidential | Minimum 7 years |

### 10.2 Regulatory Notification — BNM

*Describe the criteria and process for notifying BNM of technology risk breaches, consistent with applicable RMiT and supervisory reporting requirements.*

[Organization Name] must notify BNM of technology-related events in accordance with:

- **RMiT Paragraph 10** — Technology incident reporting thresholds;
- **BNM Reporting Guidelines for Financial Institutions** — [specific guideline reference];
- **PDPA 2010** — Personal data breach notification obligations.

| Notification Condition | Notification Requirement | Timeline | Responsible Party |
|---|---|---|---|
| Technology incident meeting BNM reportability threshold | Submit incident report to BNM per prescribed format | Within [X] hours of confirmation per BNM guidelines | CRO / Compliance |
| Personal data breach involving customer data | Notify relevant authorities per PDPA 2010 | As required under PDPA | CISO / DPO / Legal |
| Systemic or material technology risk event | Proactive notification to BNM supervisor | As warranted by materiality and supervisory relationship | CEO / CRO / Compliance |
| Regulatory directive non-compliance | Respond to BNM per directive | Per directive instructions | CEO / CRO / Compliance / Legal |

### 10.3 Escalation Communication Do's and Don'ts

*Provide practical guidance to staff on appropriate escalation communication conduct.*

**Do:**
- Communicate facts — what is known, what is unknown, and what actions have been taken.
- Use approved templates and channels.
- Escalate uncertainty — if you are unsure whether a breach has occurred, escalate for assessment rather than waiting for certainty.
- Maintain confidentiality — escalation communications must not be shared outside the defined distribution.
- Retain all escalation records, including sent items and meeting minutes.

**Do Not:**
- Delay escalation in hope that a metric will self-correct.
- Attempt to remediate a material breach without first initiating the escalation process.
- Communicate escalation details via unsecured channels (personal email, public messaging apps).
- Speculate about root cause or impact in written communications prior to formal assessment.
- Share escalation documentation externally without CRO or Legal approval.

---

## 11. Documentation and Evidence Requirements

### 11.1 Risk Event Register

*Describe the register used to record and track all breach events and their escalation status.*

All technology risk appetite threshold breaches, from identification through closure, must be recorded and maintained in [Organization Name]'s **Risk Event Register** ([GRC Platform / System Name]). Required data fields include:

| Field | Description | Required |
|---|---|---|
| Event ID | Unique identifier auto-generated by system | Mandatory |
| Date / Time Identified | Date and time the breach was first identified | Mandatory |
| Identified By | Name and role of identifying party | Mandatory |
| KRI / Trigger Reference | Specific KRI code or qualitative trigger statement reference | Mandatory |
| Breach Description | Factual description of the breach condition | Mandatory |
| Severity Classification | Critical / High / Medium | Mandatory |
| Materiality Determination | Material / Not Material, with rationale | Mandatory |
| Escalation Tier | Tier 1 / Tier 2 / Tier 3 | Mandatory |
| Escalation Date / Time | Date and time of each tier notification | Mandatory |
| Escalation Recipients | Named recipients of each tier notification | Mandatory |
| Remediation Action Plan Reference | Link or reference to approved plan | Mandatory |
| Remediation Status | Open / In Progress / Closed | Mandatory |
| Closure Date | Date of formal CRO closure approval | Mandatory upon closure |
| Post-Event Review Reference | Link or reference to Post-Event Review Report | For Critical/Material only |

### 11.2 Document Retention

All escalation-related documentation must be retained for a minimum of **seven (7) years** or as otherwise required by applicable law and regulation, including:

- Breach Notification Forms;
- Escalation Briefs and Executive Briefings;
- MANCO and BRC papers and meeting minutes;
- Remediation Action Plans and evidence of completion;
- Post-Event Review Reports;
- Regulatory notification correspondence.

---

## 12. Trend Review and Reporting

### 12.1 Quarterly Trend Review

*Describe the quarterly trend review process and its outputs. This review is a core component of [Organization Name]'s ongoing risk appetite management.*

In addition to per-event escalation responses, the Technology Risk Management team shall conduct a **Quarterly Trend Review** of all KRI data and escalation events to identify systemic issues and inform risk appetite calibration.

#### Quarterly Trend Review Agenda

| Review Element | Description | Data Source |
|---|---|---|
| KRI Movement Analysis | Review of KRI trajectory across all categories for the quarter — direction, velocity, and proximity to threshold | KRI monitoring system |
| Escalation Event Summary | Count, categorisation, and disposition of all escalation events in the quarter | Risk Event Register |
| Repeat Breach Analysis | Identification of KRIs or risk categories with recurring breaches | Risk Event Register |
| Remediation Effectiveness | Assessment of whether prior-quarter remediation actions have sustainably returned KRIs to tolerance | Remediation tracking |
| Emerging Risk Identification | Review of external threat intelligence and industry events for forward-looking risk indicators | CISO / External sources |
| Risk Appetite Calibration Recommendation | Recommendation to adjust KRI thresholds, tolerance statements, or risk appetite if warranted | CRO |

#### Quarterly Trend Review Outputs

| Output | Recipient | Timeline |
|---|---|---|
| Technology Risk Quarterly Dashboard | CRO, CTO, CISO | Within 15 business days of quarter-end |
| Quarterly Technology Risk Report | MANCO | Within 20 business days of quarter-end |
| Board Risk Committee Technology Risk Report | BRC | At next scheduled BRC meeting |
| Risk Appetite Calibration Recommendation (if applicable) | Board for approval | Annual review cycle or upon material change |

### 12.2 Annual Thresholds Review

The Technology Risk Appetite Statement, KRI thresholds, and qualitative tolerance statements shall be formally reviewed **annually**, or upon any of the following triggers:

- A material change in [Organization Name]'s strategic direction or business model;
- A significant technology change (e.g., cloud migration, core banking replacement);
- A material breach event that reveals thresholds are inappropriate;
- A change in applicable regulatory requirements;
- A significant change in the external threat landscape.

---

## 13. Exceptions and Waivers

### 13.1 Temporary Exceptions

*Define the process for granting temporary exceptions to risk appetite thresholds, where operationally necessary.*

In exceptional circumstances, [Organization Name] may grant a **Temporary Exception** to a risk appetite threshold where:

- An immediate remediation to threshold levels is not operationally feasible;
- Appropriate compensating controls are in place or will be implemented;
- The risk of maintaining the exception is assessed as acceptable and time-limited.

#### Temporary Exception Process

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 1 | Risk Owner submits a **Temporary Exception Request** (see Appendix E) to the Technology Risk Management team, detailing: Nature of exception; Justification; Duration requested; Compensating controls; Remediation plan | Risk Owner | Prior to or concurrently with breach escalation |
| 2 | Technology Risk Manager reviews the request for completeness and reasonableness | Technology Risk Manager | Within 1 business day |
| 3 | CRO approves or rejects the Temporary Exception Request | CRO | Within 2 business days |
| 4 | For exceptions exceeding [30 days] or involving Critical-severity KRIs, MANCO approval is required | CRO | Within 3 business days |
| 5 | Approved exception is logged in the Risk Event Register with an expiry date | Technology Risk Manager | Upon approval |
| 6 | CRO monitors the exception against the compensating controls and remediation plan | Technology Risk Manager | Per agreed review cadence |
| 7 | Exception is either remediated and closed, or renewed per the same process, prior to expiry | Risk Owner | Before exception expiry |

### 13.2 Exception Limits

| Exception Type | Maximum Duration | Approval Authority | Disclosure |
|---|---|---|---|
| Standard Temporary Exception | 30 calendar days | CRO | MANCO — Information only |
| Extended Temporary Exception | 31–90 calendar days | MANCO | BRC — Information only |
| Long-Term Exception (>90 days) | Up to 6 months | Board Risk Committee | Board — Formal approval |

> **Note:** No exception shall be granted that would result in [Organization Name] operating in breach of a mandatory regulatory requirement without the prior written consent of the relevant regulator.

---

## 14. Review and Approval

### 14.1 Document Review Schedule

| Review Type | Frequency | Trigger |
|---|---|---|
| Per-Event Review | Upon each significant breach event | Material breach confirmation |
| Periodic Review | Quarterly (trend review inputs) | End of each quarter |
| Comprehensive Review | Annually | Annual policy cycle |
| Ad-hoc Review | As required | Regulatory change, strategic change, material control failure |

### 14.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial version — created in response to BNM RMiT compliance programme |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [X.X] | [Date] | [Author Name], [Title] | [Description of changes] |

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Risk Officer (Document Owner) | [Name] | __________________ | [Date] |
| Chief Technology Officer | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Executive Officer | [Name] | __________________ | [Date] |
| Board Risk Committee Chair (Endorsement) | [Name] | __________________ | [Date] |

---

## 15. References

### 15.1 Regulatory References

| Reference | Description |
|---|---|
| **BNM RMiT — Paragraph 9.4** | Technology risk appetite escalation procedures — primary regulatory obligation addressed by this document |
| **BNM RMiT — Paragraph 4** | Board and Senior Management responsibilities for technology risk governance |
| **BNM RMiT — Paragraph 10** | Technology incident management and reportability thresholds |
| **BNM RMiT — Paragraph 11** | Business continuity management |
| **Personal Data Protection Act 2010 (Malaysia)** | Personal data breach notification and data protection obligations |
| **BNM Guidelines on Operational Risk** | Operational risk event reporting requirements |
| **BNM Financial Reporting Guidelines** | Material event disclosure obligations |
| **[Other BNM Policy Document / Guideline]** | [Description and relevance] |

### 15.2 Internal Policy References

| Document | Description |
|---|---|
| Technology Risk Management Framework (TRMF) | Parent framework governing technology risk management at [Organization Name] |
| Technology Risk Appetite Statement (RAS) | Board-approved risk appetite, thresholds, and tolerance statements |
| IT Incident Management Procedure | Operational procedure for technology incident response |
| Business Continuity Plan (BCP) | Business continuity and disaster recovery procedures |
| Change Management Policy | Technology change governance requirements |
| Third-Party Risk Management Policy | Outsourcing and vendor risk management |
| Information Security Policy | Information security governance framework |
| Risk Event Reporting Policy | Enterprise-wide risk event identification and reporting |
| [Other internal policy] | [Description] |

---

## 16. Appendices

### Appendix A — Breach Notification Form (Tier 1)

*This form must be completed by the Technology Risk Manager and submitted to the Risk Owner / Business Unit Head as part of the Tier 1 notification.*

---

**BREACH NOTIFICATION FORM — TIER 1**

| Field | Details |
|---|---|
| **Event ID** | [Auto-generated / [Event ID]] |
| **Date of Notification** | [Date] |
| **Notified By** | [Name], [Title], Technology Risk Management |
| **Notified To** | [Name], [Title], [Business Unit] |
| **KRI / Trigger Reference** | [KRI ID and Name / Qualitative Trigger Statement Reference] |
| **Breach Date / Time Identified** | [Date and Time] |
| **Breach Description** | [Factual description of the breach condition — what was observed, against which threshold] |
| **Severity Classification** | [ ] Critical  [ ] High  [ ] Medium |
| **Materiality Determination** | [ ] Material  [ ] Not Material |
| **Escalation Tier** | [ ] Tier 1 only  [ ] Tier 2 required  [ ] Tier 3 required |
| **Immediate Actions Required** | [Actions required from the Risk Owner within the next 24 hours] |
| **Remediation Plan Due Date** | [Date by which Risk Owner must submit Remediation Action Plan] |
| **Risk Event Register Entry** | [Confirmed / Link to entry] |
| **CRO Contact** | [CRO Name], [Contact Details] |

---

### Appendix B — Tier 2 Escalation Brief Template

*This template must be completed by the Technology Risk Manager and approved by the CRO prior to submission to Senior Management.*

---

**TIER 2 ESCALATION BRIEF**

**Classification:** Confidential
**Date:** [Date]
**Prepared By:** [Technology Risk Manager Name]
**Approved By:** [CRO Name]
**Distribution:** [CRO, CTO, CISO, relevant Senior Management]

**1. Executive Summary**

[2–3 sentence summary of the breach, its current status, and the immediate actions underway.]

**2. Breach Details**

| Item | Details |
|---|---|
| Event ID | [Event ID] |
| KRI / Trigger | [Reference] |
| Breach Identified | [Date / Time] |
| Severity | [Critical / High] |
| Materiality | [Material / Not Material] |
| Current KRI Value | [Value] |
| Threshold | [Red threshold value] |

**3. Impact Assessment**

- **Operational Impact:** [Description]
- **Customer Impact:** [Description]
- **Financial Impact:** [Estimated or actual, if known]
- **Regulatory Impact:** [Is BNM notification required? Yes / No / Under Assessment]
- **Reputational Impact:** [Description]

**4. Immediate Actions Taken**

- [Action 1 — owner — target date]
- [Action 2 — owner — target date]

**5. Proposed Remediation Approach**

[High-level description of proposed remediation; full Remediation Action Plan to follow within [X] hours/days.]

**6. Decisions Required**

[Specify any decisions required from Senior Management recipients of this brief.]

**7. Next Update**

[Date and time of next status update.]

---

### Appendix C — Tier 3 Executive Escalation Briefing Template

*This template is used for Board-level and Executive-level escalations. It must be approved by the CEO before submission to the Board Risk Committee.*

---

**TIER 3 EXECUTIVE ESCALATION BRIEFING**

**Classification:** Confidential — Board
**Date:** [Date]
**Prepared By:** [CRO Name]
**Approved By:** [CEO Name]
**Distribution:** CEO, MANCO Members, Board Risk Committee Chair

**1. Executive Summary**

[3–5 sentence briefing. Describe what happened, the significance, the current status, and what actions [Organization Name] is taking. Written for a non-technical Board audience.]

**2. Background and Context**

[Brief context on the relevant KRI, risk domain, and prior breach history if applicable.]

**3. Breach Details and Impact**

| Dimension | Assessment |
|---|---|
| Severity | Critical |
| Materiality | Material |
| Customer Impact | [Yes / No / Number affected] |
| Financial Exposure | [MYR X million / Under assessment] |
| Regulatory Notification Required | [Yes / No — if yes, to whom and by when] |
| Reputational Risk | [High / Medium / Low] |

**4. Management Response**

[Summary of immediate actions taken and the approved Remediation Action Plan.]

**5. Board / MANCO Decisions Required**

[Explicitly state what, if any, decisions or approvals are sought from the Board or MANCO.]

**6. Regulatory Position**

[Status of any regulatory notification obligations; confirm whether BNM has been or will be notified.]

**7. Timeline to Resolution**

[Expected timeline for remediation and return to tolerance, based on current plan.]

**8. CRO Attestation**

I confirm that the information contained in this briefing is accurate to the best of my knowledge as of the date of preparation.

Signed: __________________ Date: __________________

[CRO Name], Chief Risk Officer

---

### Appendix D — Remediation Action Plan Template

*The Risk Owner must complete this template and submit it to the Technology Risk Management team within the timeframe specified in Section 8.5.*

---

**REMEDIATION ACTION PLAN**

| Field | Details |
|---|---|
| **Event ID** | [Event ID] |
| **KRI / Trigger Reference** | [Reference] |
| **Plan Prepared By** | [Risk Owner Name and Title] |
| **Plan Reviewed By** | [Technology Risk Manager Name] |
| **Plan Approved By** | [CRO Name] |
| **Approval Date** | [Date] |
| **Target Closure Date** | [Date] |

**Root Cause (Preliminary)**

[Preliminary assessment of the root cause of the breach. To be confirmed following Post-Event Review.]

**Immediate Containment Actions**

| # | Action | Owner | Target Completion | Status |
|---|---|---|---|---|
| 1 | [Action description] | [Owner] | [Date] | [Not Started / In Progress / Complete] |
| 2 | [Action description] | [Owner] | [Date] | [Status] |

**Short-Term Corrective Actions (0–30 days)**

| # | Action | Owner | Target Completion | Status |
|---|---|---|---|---|
| 1 | [Action description] | [Owner] | [Date] | [Status] |

**Long-Term Preventive Actions (30–90 days)**

| # | Action | Owner | Target Completion | Status |
|---|---|---|---|---|
| 1 | [Action description] | [Owner] | [Date] | [Status] |

**Resource Requirements**

[Describe any additional resources, budget, or approvals required to execute the remediation plan.]

**Success Criteria**

[Define measurable criteria that will confirm the breach has been remediated and the KRI has sustainably returned to the Green (Tolerance) zone.]

---

### Appendix E — Temporary Exception Request Form

*This form must be submitted by the Risk Owner when requesting a temporary exception to a risk appetite threshold.*

---

**TEMPORARY EXCEPTION REQUEST**

| Field | Details |
|---|---|
| **Request ID** | [Auto-generated] |
| **Event ID (if applicable)** | [Event ID] |
| **Date of Request** | [Date] |
| **Requested By** | [Risk Owner Name and Title] |
| **Business Unit** | [Business Unit] |
| **KRI / Threshold Reference** | [KRI ID and Name] |
| **Current KRI Value** | [Value] |
| **Threshold Value** | [Red threshold] |
| **Exception Start Date** | [Date] |
| **Exception Duration Requested** | [Number of days] |
| **Exception End Date** | [Date] |

**Justification for Exception**

[Explain why immediate remediation to threshold levels is not operationally feasible. Include business and technical context.]

**Compensating Controls**

[Describe the compensating controls that will be in place during the exception period to mitigate the elevated risk exposure.]

**Remediation Plan Summary**

[Summarise the plan to return to threshold compliance by the exception end date.]

**Risk Owner Attestation**

I confirm that the information provided is accurate and that the compensating controls described will be implemented prior to the exception start date.

Signed: __________________ Date: __________________

[Risk Owner Name], [Title]

**CRO Decision**

[ ] Approved  [ ] Rejected  [ ] Referred to MANCO

Comments: [CRO comments]

Signed: __________________ Date: __________________

[CRO Name], Chief Risk Officer

---

### Appendix F — Escalation Contact Directory

*Maintain this directory with current contact details. Review and update at minimum quarterly.*

| Role | Name | Primary Contact | Alternate Contact | Out-of-Hours Contact |
|---|---|---|---|---|
| Chief Risk Officer | [Name] | [Email / Phone] | [Email / Phone] | [Phone] |
| Chief Technology Officer | [Name] | [Email / Phone] | [Email / Phone] | [Phone] |
| Chief Information Security Officer | [Name] | [Email / Phone] | [Email / Phone] | [Phone] |
| Chief Executive Officer | [Name] | [Email / Phone] | [Email / Phone] | [Phone] |
| Technology Risk Manager | [Name] | [Email / Phone] | [Email / Phone] | [Phone] |
| Head of Compliance | [Name] | [Email / Phone] | [Email / Phone] | [Phone] |
| Head of Legal | [Name] | [Email / Phone] | [Email / Phone] | [Phone] |
| BRC Chair | [Name] | [Email / Phone] | [Email / Phone] | [Phone] |
| [BNM Supervisory Contact] | [Name] | [Refer to regulatory correspondence] | — | — |

---

### Appendix G — Escalation Decision Tree (Summary Reference)

*This appendix provides a simplified decision tree for first-line staff to determine the correct escalation path.*

```
START: A potential risk appetite threshold breach has been identified.
│
├─► Is this a confirmed or suspected breach of a KRI or qualitative tolerance statement?
│     │
│     ├─► YES → Log in Risk Event Register → Proceed to Step 1.1
│     │
│     └─► NO / UNSURE → Notify Technology Risk Manager for assessment → They will confirm
│
└─► CONFIRMED BREACH
      │
      ├─► Is the KRI in RED (Breach) territory, OR does it match a qualitative breach (Section 6)?
      │     │
      │     ├─► YES → Determine Severity
      │     │           │
      │     │           ├─► CRITICAL or MATERIAL → Tier 3 Escalation → Notify CRO immediately
      │     │           │                           → CRO notifies CEO, MANCO, BRC
      │     │           │                           → Assess BNM notification obligation
      │     │           │
      │     │           └─► HIGH (non-material) → Tier 2 Escalation → Notify CRO within 4 hours
      │     │                                   → CRO convenes Emergency Risk Response Meeting
      │     │
      │     └─► Is the KRI in AMBER (Warning) for 2+ consecutive periods?
      │               │
      │               ├─► YES → Tier 1 / Tier 2 Escalation → Notify Risk Function
      │               │         → Enhanced monitoring → Pre-emptive action plan
      │               │
      │               └─► NO → Continue standard monitoring → No escalation required
```

---

*End of Document*

---

**Document Control Notice**

This document is subject to version control. The current approved version is maintained in [Document Management System / SharePoint / GRC Platform]. Printed copies are uncontrolled. Please verify you are referring to the current version before use.

**[Organization Name]** | Technology Risk Management | Chief Risk Officer
Document ID: [Document ID] | Version 1.0 | Classification: Confidential