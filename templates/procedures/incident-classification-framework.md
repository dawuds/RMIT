# Incident Classification Framework

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Regulatory Affairs |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organisation** | [Organisation Name] |
| **RMiT Reference** | Clause 11.4 |

---

> **Document Control Notice:** This document is classified as **Confidential** and is intended solely for authorised personnel of [Organisation Name]. Unauthorised disclosure, reproduction, or distribution of this document is strictly prohibited and may be subject to regulatory and legal consequences. This document must be stored in accordance with [Organisation Name]'s Information Classification and Handling Policy.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory Context and Obligations](#3-regulatory-context-and-obligations)
4. [Governance Structure](#4-governance-structure)
5. [Incident Classification Matrix](#5-incident-classification-matrix)
6. [Materiality Assessment for BNM Reporting](#6-materiality-assessment-for-bnm-reporting)
7. [Notification Trigger Criteria](#7-notification-trigger-criteria)
8. [Escalation Timelines](#8-escalation-timelines)
9. [Communication Templates](#9-communication-templates)
10. [Post-Incident Review Process](#10-post-incident-review-process)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Executive Summary

*Provide a concise overview of the purpose of this framework, its strategic importance to the organisation, and the key regulatory obligations it fulfils. This section should be suitable for reading by senior leadership and auditors. Summarise the key classification tiers, reporting obligations, and governance arrangements in no more than two pages.*

[Organisation Name] operates within a complex and evolving technology risk environment. As a licensed [financial institution / digital bank / payment service provider / insurance company — select applicable] regulated by Bank Negara Malaysia (BNM), [Organisation Name] is subject to the Risk Management in Technology (RMiT) Policy Document, effective [Effective Date of RMiT], and its associated requirements governing the identification, classification, escalation, and reporting of technology-related incidents.

This Incident Classification Framework ("the Framework") establishes a structured, consistent, and auditable methodology for:

- Identifying and recording all technology and cyber incidents that affect or have the potential to affect [Organisation Name]'s operations, customers, or regulatory standing;
- Classifying incidents according to defined severity and impact criteria;
- Determining whether an incident meets the materiality threshold for mandatory reporting to BNM under RMiT Clause 11.4;
- Governing the escalation and communication of incidents to internal stakeholders and external parties including BNM and, where applicable, the National Cyber Security Agency (NACSA);
- Facilitating post-incident reviews to enable continuous improvement and regulatory compliance.

This Framework is mandatory for all personnel, third-party service providers, and technology systems that fall within the scope defined in Section 2. Compliance with this Framework is subject to periodic internal audit and may be reviewed by BNM during regulatory examinations.

**Key Classification Tiers:**

| Tier | Severity Label | Indicative Description |
|---|---|---|
| P1 | Critical | Major operational disruption, systemic failure, or confirmed high-impact cyber incident |
| P2 | High | Significant service degradation or data exposure affecting a material number of customers |
| P3 | Medium | Localised disruption or potential risk with limited customer impact |
| P4 | Low | Minor incidents or near-misses with negligible operational or customer impact |

**Mandatory BNM Reporting Threshold:** Incidents classified as P1 (Critical) are subject to mandatory initial notification to BNM within the timelines prescribed in RMiT Clause 11.4. Certain P2 (High) incidents may also trigger reporting obligations where materiality criteria are met as defined in Section 6.

This Framework is owned by the Head of Regulatory Affairs and is subject to review per event (for material incidents) and quarterly for trend analysis, as detailed in Section 10 and Section 12.

---

## 2. Purpose and Scope

### 2.1 Purpose

*Articulate the primary purpose of this framework. Reference the specific regulatory clauses it is designed to fulfil and state the expected outcomes for the organisation.*

The purpose of this Incident Classification Framework is to:

1. **Establish a common taxonomy** for technology and cyber incidents across [Organisation Name], ensuring consistent classification regardless of the business unit, technology domain, or personnel involved;

2. **Define materiality thresholds** for escalation and regulatory notification in accordance with BNM RMiT Clause 11.4 and any supplementary guidance issued by BNM from time to time;

3. **Provide clear decision-making criteria** to enable rapid, accurate incident classification at the point of detection, minimising delay in escalation and response activities;

4. **Ensure regulatory compliance** by codifying the notification timelines and communication requirements stipulated in BNM RMiT and other applicable regulatory instruments;

5. **Support organisational resilience** by enabling structured post-incident analysis and facilitating systematic improvement of preventive and detective controls;

6. **Create an auditable record** of incident classification decisions, escalation actions, and regulatory notifications for the purposes of internal audit, regulatory examination, and legal proceedings if required.

### 2.2 Scope

*Define the boundaries of applicability for this framework. Specify which systems, entities, personnel, geographic locations, and third parties are covered. Clearly state any exclusions and the rationale for them.*

#### 2.2.1 In-Scope

This Framework applies to:

**Systems and Platforms:**
- All technology systems owned, operated, or managed by [Organisation Name], including core banking systems, payment processing systems, customer-facing digital channels, internal productivity platforms, data repositories, and infrastructure components;
- Cloud services consumed by [Organisation Name], whether Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), or Software-as-a-Service (SaaS);
- Operational technology (OT) and physical security systems where these interface with digital systems or have the potential to affect operational continuity;
- Third-party hosted systems where [Organisation Name] retains data processing or service delivery responsibility.

**Personnel:**
- All employees of [Organisation Name], including permanent staff, contract staff, and interns;
- Technology service providers, managed service providers (MSPs), and outsourced technology operations personnel acting on behalf of [Organisation Name];
- Relevant third-party vendors with access to [Organisation Name] systems or data.

**Geographic Coverage:**
- All operations of [Organisation Name] within Malaysia;
- Overseas operations of [Organisation Name] to the extent that incidents in those jurisdictions have, or may have, a material impact on [Organisation Name]'s Malaysian operations or its obligations to BNM.

**Incident Types:**
- Technology incidents (system outages, application failures, infrastructure degradation);
- Cyber security incidents (malware, ransomware, unauthorised access, data exfiltration, denial of service);
- Data incidents (data breaches, data loss, data integrity failures);
- Third-party technology incidents that impact [Organisation Name] services or data;
- Physical incidents with technology or data consequences (e.g., data centre physical intrusion).

#### 2.2.2 Out of Scope

The following are explicitly excluded from this Framework:

- Non-technology-related operational incidents (covered under [Organisation Name]'s Operational Risk Framework);
- Human resources matters that do not involve a technology component;
- Financial crime incidents where there is no technology or data dimension (covered under [Organisation Name]'s AML/CFT Framework);
- Planned maintenance activities that result in pre-approved service downtime within communicated maintenance windows, provided that such activities do not exceed approved downtime parameters.

*Note: Where a planned activity gives rise to an unplanned or extended outage exceeding approved parameters, this Framework applies from the point the threshold is breached.*

### 2.3 Relationship to Other Frameworks

*Describe how this framework interacts with other internal policies and frameworks. Use a table for clarity.*

This Framework operates in conjunction with, and should be read alongside, the following [Organisation Name] policy documents:

| Document Title | Document ID | Relationship |
|---|---|---|
| Technology Risk Management Policy | [Doc ID] | Parent policy governing overall technology risk appetite and control requirements |
| Cyber Security Incident Response Plan | [Doc ID] | Operational playbook for responding to cyber incidents; this Framework governs classification |
| Business Continuity Plan (BCP) | [Doc ID] | Activated for P1/P2 incidents with operational continuity implications |
| Disaster Recovery Plan (DRP) | [Doc ID] | Technical recovery procedures for critical system failures |
| Data Breach Response Procedure | [Doc ID] | Specific procedures for incidents involving personal data; interfaces with PDPA obligations |
| Vendor / Third-Party Risk Management Policy | [Doc ID] | Governs classification of incidents originating from or impacting third-party providers |
| Crisis Communication Policy | [Doc ID] | Governs external communications during significant incidents |
| Information Classification and Handling Policy | [Doc ID] | Governs handling of incident records and reports |

---

## 3. Regulatory Context and Obligations

### 3.1 BNM Risk Management in Technology (RMiT)

*Summarise the key regulatory provisions that this framework is designed to address. Do not reproduce the regulatory text verbatim; instead, paraphrase the obligations and reference the specific clauses.*

Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document sets out the minimum standards and expectations for financial institutions with respect to technology risk management. [Organisation Name] is subject to RMiT as a [licensed bank / digital bank / insurance company / payment service provider — select applicable] under [applicable licence].

The following RMiT provisions are of primary relevance to this Framework:

| RMiT Clause | Subject Matter | Relevance to This Framework |
|---|---|---|
| 11.4 | Technology and Cyber Incident Reporting | Establishes mandatory notification requirements to BNM for material technology and cyber incidents, including timelines and content of reports |
| 11.1 | Technology Risk Management | Requires a structured approach to identifying and managing technology risks, of which incident classification is a component |
| 11.2 | Cyber Risk Management | Requires a cyber risk management programme that includes incident detection, classification, and response |
| 11.3 | Technology and Cyber Resilience | Requires financial institutions to maintain resilience capabilities and demonstrate recovery from incidents |
| 10.1–10.3 | Outsourcing and Third-Party Risk | Requires that third-party technology incidents be managed within the institution's overall incident management framework |
| [Additional Clauses] | [Subject] | [Relevance] |

### 3.2 BNM RMiT Clause 11.4 — Incident Reporting Obligations

*Detail the specific obligations arising from RMiT Clause 11.4 that this framework operationalises. Include the mandatory notification timeline and the types of incidents that must be reported.*

Under RMiT Clause 11.4, [Organisation Name] is required to:

1. **Notify BNM immediately** (and no later than the timeframes specified in Section 8 of this Framework) upon the occurrence of a material technology or cyber incident, as defined by the materiality criteria in Section 6;

2. **Submit a preliminary incident report** to BNM within [specify timeframe, e.g., two hours / four hours] of initial notification, containing the information prescribed in the relevant BNM reporting template;

3. **Submit a full incident report** to BNM within [specify timeframe, e.g., 14 calendar days] following the resolution of the incident, containing a comprehensive analysis of the incident, root cause findings, impact assessment, and remediation actions;

4. **Maintain records** of all technology and cyber incidents, classified and unclassified, for a minimum period of [specify retention period in line with RMiT and internal policy, e.g., seven years];

5. **Report aggregated incident data** as part of periodic regulatory submissions, including any trend analysis required by BNM.

*Note: [Organisation Name] should verify the specific notification timelines and report content requirements against the current version of the RMiT Policy Document and any supplementary guidance or circulars issued by BNM, as these may be updated from time to time.*

### 3.3 Other Applicable Regulatory Instruments

*List other regulations and guidelines that intersect with incident classification and reporting obligations.*

| Regulation / Guideline | Issuing Authority | Relevant Obligation | Interface with This Framework |
|---|---|---|---|
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Data breach notification to the Personal Data Protection Commissioner where personal data of data subjects is compromised | P2/P1 incidents involving personal data trigger parallel PDPA notification assessment |
| National Cyber Security Agency (NACSA) Guidelines | NACSA | Reporting of significant cyber incidents to NACSA | High-severity cyber incidents (P1 Cyber) may require concurrent notification to NACSA |
| Financial Services Act 2013 (FSA) / Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | Broad obligation to operate in a safe and sound manner; material incidents may require notification to BNM under broader FSA/IFSA provisions | Materially significant incidents may engage FSA/IFSA reporting obligations independent of RMiT |
| Payment Systems Act 2003 / Financial Services Act 2013 (Payment) | BNM | Payment system disruption reporting for payment service providers | Payment system outages classified P1/P2 may have additional reporting obligations |
| [Other Applicable Instrument] | [Authority] | [Obligation] | [Interface] |

---

## 4. Governance Structure

### 4.1 Governance Overview

*Describe the governance arrangement that underpins this framework, including the key committees, functions, and decision-making bodies involved in incident management and classification.*

[Organisation Name] has established a tiered governance structure for technology and cyber incident management. This structure ensures that incidents are escalated to the appropriate level of authority based on their severity classification, and that regulatory reporting decisions are made by personnel with the requisite authority and expertise.

The governance structure for incident classification and reporting comprises the following tiers:

**Tier 1 — Operational (Detection and Initial Classification)**
Technology operations, security operations, and IT support teams are responsible for detecting incidents, performing initial triage, and applying the classification criteria in this Framework. Initial classification occurs at this tier within [specify timeframe, e.g., 30 minutes] of incident detection.

**Tier 2 — Management (Classification Validation and Escalation)**
Technology Risk, Information Security, and the relevant business unit management validate the initial classification and determine whether escalation to Tier 3 is required. Classification review at this tier must occur within [specify timeframe] of initial classification.

**Tier 3 — Senior Management and Regulatory (Materiality Determination and Notification)**
For P1 and P2 incidents, the Head of Technology Risk, Chief Information Security Officer (CISO), and Head of Regulatory Affairs jointly determine materiality for BNM reporting purposes. The Board Risk Committee or a designated member of the Board is notified for all P1 incidents.

### 4.2 Key Governance Bodies

*Describe the key committees and bodies involved in incident governance. Specify their composition, quorum requirements, and decision-making authority as it relates to incident classification and reporting.*

#### 4.2.1 Technology and Cyber Risk Committee (TCRC)

| Attribute | Details |
|---|---|
| **Chair** | [Chief Risk Officer / Chief Technology Officer — specify] |
| **Members** | Chief Information Security Officer, Head of Technology Risk, Head of IT Operations, Head of Regulatory Affairs, Chief Compliance Officer, [Other Members] |
| **Meeting Frequency** | Monthly (standing); convened ad hoc for P1/P2 incidents within [specify hours] of classification |
| **Quorum** | [Specify, e.g., Chair plus three members] |
| **Decision Authority** | Final internal authority for materiality determination and BNM notification decisions; escalates to Board Risk Committee for systemic or reputationally significant incidents |
| **Secretariat** | [Technology Risk / Compliance function — specify] |

#### 4.2.2 Board Risk Committee (BRC)

| Attribute | Details |
|---|---|
| **Chair** | [Independent Non-Executive Director] |
| **Members** | [Specify board member composition] |
| **Trigger for Involvement** | All P1 (Critical) incidents; P2 incidents with significant customer, financial, or reputational impact as determined by TCRC |
| **Notification Timeline** | Board Risk Committee Chair to be notified within [specify timeframe] of P1 classification; full briefing within [specify timeframe] |
| **Decision Authority** | Oversight of management response; approval of public disclosures and material regulatory communications |

#### 4.2.3 Crisis Management Team (CMT)

| Attribute | Details |
|---|---|
| **Composition** | Senior representatives from Technology, Operations, Legal, Communications, Compliance, and relevant business units |
| **Activation Trigger** | All P1 incidents; P2 incidents where BCP/DRP activation is required |
| **Chairperson** | [Chief Executive Officer / Chief Operating Officer — specify] |
| **Purpose** | Coordinate cross-functional response to significant incidents; manage internal and external communications; liaise with regulators |

#### 4.2.4 Incident Response Team (IRT)

| Attribute | Details |
|---|---|
| **Composition** | Security Operations Centre (SOC), IT Operations, Application Support, and relevant technical subject matter experts |
| **Activation** | All incidents (P1–P4) |
| **Lead** | Incident Manager (rotational on-call) |
| **Purpose** | Technical detection, triage, containment, eradication, and recovery; initial classification and documentation |

### 4.3 Incident Ownership and Accountability

*Clarify the distinction between incident ownership (accountable party) and incident management (operational responsibility). Define the Incident Owner role and how it is assigned.*

Each incident shall have a designated **Incident Owner** who is accountable for:

- Ensuring the incident is correctly classified and the classification is updated as new information becomes available;
- Coordinating the response activities across all involved teams;
- Ensuring all regulatory notification obligations are met within the required timelines;
- Commissioning and overseeing the post-incident review;
- Maintaining the incident record in the designated incident management system.

**Incident Owner Assignment:**

| Incident Severity | Incident Owner |
|---|---|
| P1 (Critical) | [Chief Information Security Officer / Head of IT Operations — specify, with named alternates] |
| P2 (High) | [Head of Information Security / Head of IT Operations — specify, with named alternates] |
| P3 (Medium) | [IT Operations Manager / Security Operations Manager — specify] |
| P4 (Low) | [Shift Lead / On-call Engineer — specify] |

*Where the designated Incident Owner is unavailable, the next named alternate in the escalation chain automatically assumes ownership until the primary owner is reachable.*

---

## 5. Incident Classification Matrix

### 5.1 Classification Principles

*Explain the principles that underpin the classification methodology. These should guide analysts when applying the matrix to real-world incidents, particularly where the criteria are ambiguous or the incident spans multiple categories.*

Incident classification at [Organisation Name] is guided by the following principles:

1. **Precautionary Escalation:** Where there is doubt about the appropriate classification, the analyst shall classify at the higher severity level until additional information confirms a lower classification is appropriate. Classification may be downgraded following review but should not be upgraded retroactively after regulatory notification timelines have been missed.

2. **Worst-Case Assessment:** Initial classification shall be based on the worst reasonably foreseeable impact at the time of detection, not the confirmed impact. As the incident evolves and more information becomes available, classification shall be updated accordingly.

3. **Multi-Dimensional Assessment:** Classification shall consider impact across multiple dimensions simultaneously: operational impact, customer impact, financial impact, reputational impact, and regulatory impact. The highest severity score across any single dimension determines the overall classification.

4. **Independence of Classification:** The initial classification decision shall be made by the Incident Response Team independently of business or commercial pressures. Subsequent reclassification requires documented justification and approval by the Incident Owner.

5. **Dynamic Classification:** Incidents may be reclassified upward or downward as new information emerges. Reclassification must be documented with timestamp, rationale, and the name of the individual making the reclassification decision.

6. **Aggregation:** Multiple low-severity incidents that share a common cause or pattern may collectively constitute a higher-severity incident. The Incident Owner is responsible for assessing whether aggregation is appropriate.

### 5.2 Classification Dimensions

*The multi-dimensional classification table below defines the criteria for each severity level across all relevant impact dimensions. Analysts should assess each dimension and assign the highest applicable severity.*

#### 5.2.1 Operational Impact

| Severity | Label | Criteria |
|---|---|---|
| P1 | Critical | Complete failure of a critical system, service, or process; inability to perform core business functions; full outage of customer-facing services; activation of DRP required |
| P2 | High | Significant degradation of a critical system or service; partial outage affecting a substantial proportion of customers or transactions; DRP activation under consideration |
| P3 | Medium | Degradation of a non-critical system; isolated outage affecting a limited number of customers or internal users; service restored within normal SLA parameters |
| P4 | Low | Minor disruption with negligible operational impact; near-miss; no customer impact; service restored within normal operational parameters |

#### 5.2.2 Customer Impact

| Severity | Label | Criteria |
|---|---|---|
| P1 | Critical | [Specify threshold, e.g., more than 10,000 customers affected] or complete inability of customers to access any banking/payment services; systemic customer data compromise |
| P2 | High | [Specify threshold, e.g., 1,000–10,000 customers affected]; significant service inaccessibility for a defined customer segment; potential compromise of customer data |
| P3 | Medium | [Specify threshold, e.g., fewer than 1,000 customers affected]; intermittent access issues; no confirmed data compromise |
| P4 | Low | No customer impact or isolated single-customer impact resolvable through standard customer service channels |

#### 5.2.3 Financial Impact

| Severity | Label | Criteria |
|---|---|---|
| P1 | Critical | Actual or potential financial loss exceeding [specify threshold, e.g., MYR 1,000,000]; material impact on capital adequacy or liquidity; potential systemic financial contagion |
| P2 | High | Actual or potential financial loss between [specify range, e.g., MYR 100,000–1,000,000]; significant operational cost impact; potential regulatory financial penalty |
| P3 | Medium | Actual or potential financial loss between [specify range, e.g., MYR 10,000–100,000]; manageable remediation costs |
| P4 | Low | Financial loss below [specify threshold, e.g., MYR 10,000] or no quantifiable financial impact |

#### 5.2.4 Data Impact

| Severity | Label | Criteria |
|---|---|---|
| P1 | Critical | Confirmed exfiltration or destruction of sensitive customer data, financial data, or classified institution data at scale; systemic data integrity failure |
| P2 | High | Suspected or confirmed exposure of sensitive data affecting a material number of records; significant data integrity issues in critical systems |
| P3 | Medium | Potential exposure of a limited number of data records; data integrity issues in non-critical systems; no confirmed exfiltration |
| P4 | Low | No data exposure or minor data quality issues with no regulatory implications |

#### 5.2.5 Reputational Impact

| Severity | Label | Criteria |
|---|---|---|
| P1 | Critical | National media coverage expected or confirmed; significant social media adverse commentary; potential loss of public confidence; likely to attract regulatory or parliamentary scrutiny |
| P2 | High | Regional or industry media interest; moderate social media commentary; reputational damage to a specific product or service line |
| P3 | Medium | Potential for isolated customer complaints or social media commentary; manageable through standard communications channels |
| P4 | Low | No external reputational impact expected |

#### 5.2.6 Regulatory and Compliance Impact

| Severity | Label | Criteria |
|---|---|---|
| P1 | Critical | Confirmed breach of regulatory requirement; mandatory BNM notification triggered; potential for regulatory enforcement action; NACSA notification may be required |
| P2 | High | Potential breach of regulatory requirement under assessment; BNM notification under consideration; significant compliance gap identified |
| P3 | Medium | No direct regulatory breach but potential compliance implications requiring management attention and monitoring |
| P4 | Low | No regulatory implications |

### 5.3 Incident Type Classification

*In addition to severity, incidents shall be classified by type. The type classification informs which response playbook is activated and which specialist teams are engaged.*

| Incident Type Code | Type | Description | Primary Response Function |
|---|---|---|---|
| TI-01 | System Outage | Unplanned unavailability of a system or service | IT Operations |
| TI-02 | Application Failure | Software defect or failure causing service disruption | Application Support |
| TI-03 | Infrastructure Failure | Hardware, network, or data centre failure | IT Infrastructure |
| TI-04 | Cyber Attack — Malware | Malicious software including ransomware, trojans, worms | Security Operations (SOC) |
| TI-05 | Cyber Attack — Unauthorised Access | Successful or attempted unauthorised access to systems or data | SOC / Identity and Access Management |
| TI-06 | Cyber Attack — DDoS | Distributed denial of service attack on public-facing services | SOC / Network Operations |
| TI-07 | Cyber Attack — Phishing | Phishing or social engineering attack targeting staff | SOC / Human Resources |
| TI-08 | Data Breach | Confirmed or suspected unauthorised disclosure of data | SOC / Data Protection Officer |
| TI-09 | Data Integrity Failure | Corruption or unauthorised modification of data | IT Operations / Application Support |
| TI-10 | Third-Party / Supply Chain Incident | Incident originating from or significantly affecting a third-party provider | Vendor Management / IT Operations |
| TI-11 | Physical Security | Physical intrusion or physical event with technology consequences | Physical Security / Facilities |
| TI-12 | Insider Threat | Malicious or negligent actions by authorised personnel | SOC / Human Resources / Legal |
| TI-13 | Regulatory / Compliance Event | Incident with primary regulatory consequence | Compliance / Regulatory Affairs |
| TI-14 | Other | Incidents not captured in above categories | Incident Manager (to assess and allocate) |

### 5.4 Classification Decision Tree

*The following decision tree provides guidance for analysts performing initial incident triage. It is a supplement to the classification matrix and does not replace the multi-dimensional assessment in Section 5.2.*

**Step 1: Is there a confirmed or suspected security incident (unauthorised access, malware, data exfiltration)?**
- Yes → Proceed to Step 2 (Cyber Classification Path)
- No → Proceed to Step 5 (Technology Incident Classification Path)

**Step 2 (Cyber Path): Is there confirmed exfiltration of sensitive data or systemic compromise?**
- Yes → Classify as **P1 (Critical)** — Type TI-04/TI-05/TI-08 as applicable → Notify CISO immediately
- No → Proceed to Step 3

**Step 3 (Cyber Path): Is the attack ongoing and is lateral movement confirmed or suspected?**
- Yes → Classify as **P1 (Critical)** → Activate Cyber Incident Response Plan
- No → Proceed to Step 4

**Step 4 (Cyber Path): What is the confirmed or estimated customer/data impact?**
- Exceeds P1 threshold (Section 5.2) → Classify as **P1 (Critical)**
- Exceeds P2 threshold → Classify as **P2 (High)**
- Below P2 threshold → Classify as **P3 (Medium)** and continue monitoring for escalation triggers

**Step 5 (Technology Path): Is a critical system completely unavailable?**
- Yes → Proceed to Step 6
- No → Proceed to Step 7

**Step 6 (Technology Path): Does the outage affect customer-facing services or core banking operations?**
- Yes → Classify as **P1 (Critical)** or **P2 (High)** based on scale of customer impact (Section 5.2.2)
- No → Classify as **P2 (High)** or **P3 (Medium)** based on operational impact assessment (Section 5.2.1)

**Step 7 (Technology Path): Is there a partial degradation of service?**
- Yes → Assess customer and operational impact using Section 5.2 → Classify as P2, P3, or P4 accordingly
- No → Classify as **P4 (Low)** — Near-miss or minor incident; document and monitor

### 5.5 Classification Summary Table

*Quick-reference summary for operational use.*

| Severity | Colour Code | Typical Trigger | BNM Notification? | Board Notification? | Initial Response Time |
|---|---|---|---|---|---|
| P1 — Critical | Red | Major outage, confirmed breach, data exfiltration | **Mandatory** | **Mandatory** | Immediate (within [X] minutes) |
| P2 — High | Amber | Significant degradation, suspected breach, material data exposure | **Assess for materiality** | Chairperson notification | Within [X] minutes |
| P3 — Medium | Yellow | Localised disruption, potential risk, limited impact | Not required | Not required | Within [X] hours |
| P4 — Low | Green | Minor incident, near-miss, no customer impact | Not required | Not required | Within [X] hours (next business day acceptable) |

---

## 6. Materiality Assessment for BNM Reporting

### 6.1 Materiality Assessment Overview

*Explain the materiality assessment process that determines whether an incident must be reported to BNM under RMiT Clause 11.4. Emphasise that materiality is a separate determination from severity classification — a P2 incident may or may not be material for reporting purposes.*

The determination of materiality for BNM reporting purposes is a distinct assessment from the internal severity classification described in Section 5. While all P1 (Critical) incidents are deemed material by definition and must be reported to BNM, P2 (High) incidents require a formal materiality assessment before a reporting obligation is confirmed.

The materiality assessment shall be conducted by the Technology and Cyber Risk Committee (or the designated on-call authority outside business hours) within [specify timeframe, e.g., two hours] of P1/P2 classification.

### 6.2 BNM Reporting Materiality Criteria

*Define the specific criteria that, when met, trigger mandatory reporting to BNM. These criteria should be calibrated to [Organisation Name]'s size, risk profile, and the specific requirements of RMiT Clause 11.4.*

An incident is deemed material for BNM reporting purposes if one or more of the following criteria are met:

#### Criterion A — Service Availability

| Criterion | Threshold | Applicable Service Types |
|---|---|---|
| A1 — Duration of outage for critical services | Unavailability exceeding [specify, e.g., 2 hours] | Internet banking, mobile banking, ATM network, payment processing |
| A2 — Proportion of customers affected | More than [specify, e.g., 5%] of active customer base unable to access services | All customer-facing services |
| A3 — Transaction processing failure | Failure to process transactions exceeding [specify value threshold, e.g., MYR 10 million] in a [specify period] window | Payment systems, settlement systems |

#### Criterion B — Data Compromise

| Criterion | Threshold |
|---|---|
| B1 — Volume of records compromised | Confirmed or suspected compromise of more than [specify, e.g., 1,000] customer records |
| B2 — Sensitivity of data compromised | Any compromise of financial account credentials, authentication data (passwords, PINs, OTPs), or biometric data regardless of volume |
| B3 — Data destruction or integrity | Confirmed destruction or material corruption of data in critical production systems |

#### Criterion C — Financial Impact

| Criterion | Threshold |
|---|---|
| C1 — Direct financial loss | Actual or estimated financial loss exceeding [specify, e.g., MYR 500,000] |
| C2 — Customer financial loss | Actual or estimated customer financial loss exceeding [specify, e.g., MYR 100,000] in aggregate |
| C3 — Capital or liquidity impact | Any incident that may impair [Organisation Name]'s capital adequacy ratio or liquidity coverage ratio |

#### Criterion D — Cyber Attack

| Criterion | Threshold |
|---|---|
| D1 — Confirmed cyber attack on critical infrastructure | Any confirmed, successful cyber attack on systems classified as critical infrastructure regardless of impact |
| D2 — Ransomware | Any confirmed ransomware infection affecting production systems |
| D3 — Targeted attack on the institution | Confirmed advanced persistent threat (APT) or targeted attack attributed to a nation-state or organised criminal group |

#### Criterion E — Systemic and Contagion Risk

| Criterion | Threshold |
|---|---|
| E1 — Industry-wide impact | Incident that affects multiple financial institutions simultaneously or has the potential to cause systemic disruption to the financial system |
| E2 — Critical national infrastructure | Incident affecting systems designated as Critical National Information Infrastructure (CNII) |
| E3 — Payment system disruption | Disruption to any payment system designated as systemically important by BNM |

#### Criterion F — Regulatory and Reputational

| Criterion | Threshold |
|---|---|
| F1 — Media coverage | National media coverage confirmed or imminently expected |
| F2 — Customer complaints | Receipt of a material volume of customer complaints [specify threshold] within a [specify period] window related to the incident |
| F3 — Regulatory inquiry | Receipt of an inquiry from BNM, NACSA, or another regulator related to the incident |

### 6.3 Materiality Assessment Worksheet

*A completed materiality assessment worksheet must be attached to every P1 and P2 incident record. The worksheet must be completed by the Incident Owner and validated by the Head of Regulatory Affairs before BNM notification is submitted or withheld.*

| Assessment Item | Response | Evidence / Basis |
|---|---|---|
| Incident ID | [Incident ID] | |
| Incident Classification | [P1 / P2] | |
| Date/Time of Classification | [DD/MM/YYYY HH:MM] | |
| Assessing Officer | [Name, Title] | |
| Criterion A1 met? | [Yes / No / Under Assessment] | [Basis for determination] |
| Criterion A2 met? | [Yes / No / Under Assessment] | |
| Criterion A3 met? | [Yes / No / Under Assessment] | |
| Criterion B1 met? | [Yes / No / Under Assessment] | |
| Criterion B2 met? | [Yes / No / Under Assessment] | |
| Criterion B3 met? | [Yes / No / Under Assessment] | |
| Criterion C1 met? | [Yes / No / Under Assessment] | |
| Criterion C2 met? | [Yes / No / Under Assessment] | |
| Criterion C3 met? | [Yes / No / Under Assessment] | |
| Criterion D1 met? | [Yes / No / Under Assessment] | |
| Criterion D2 met? | [Yes / No / Under Assessment] | |
| Criterion D3 met? | [Yes / No / Under Assessment] | |
| Criterion E1 met? | [Yes / No / Under Assessment] | |
| Criterion E2 met? | [Yes / No / Under Assessment] | |
| Criterion E3 met? | [Yes / No / Under Assessment] | |
| Criterion F1 met? | [Yes / No / Under Assessment] | |
| Criterion F2 met? | [Yes / No / Under Assessment] | |
| Criterion F3 met? | [Yes / No / Under Assessment] | |
| **Overall Materiality Determination** | **[Material / Not Material / Pending Further Information]** | |
| **BNM Notification Required?** | **[Yes / No / Pending]** | |
| **Head of Regulatory Affairs Sign-Off** | [Name, Date, Time] | |

---

## 7. Notification Trigger Criteria

### 7.1 Internal Notification Triggers

*Define the criteria that trigger internal notifications to specific stakeholders. Internal notification is separate from regulatory notification.*

The following events automatically trigger internal notification obligations regardless of the overall incident severity classification:

| Trigger Event | Notification Recipient | Notification Timeline | Notification Channel |
|---|---|---|---|
| Any incident classified P1 (Critical) | CEO, CRO, CTO, CISO, Head of Regulatory Affairs, Board Risk Committee Chair | Within [specify, e.g., 30 minutes] of P1 classification | Phone call (primary); secure messaging (secondary) |
| Any incident classified P2 (High) | CTO, CISO, Head of Regulatory Affairs, Head of IT Operations | Within [specify, e.g., 1 hour] of P2 classification | Secure messaging; email |
| Any confirmed data breach regardless of scale | Data Protection Officer, Chief Compliance Officer, Legal Counsel | Within [specify, e.g., 30 minutes] of confirmation | Phone call; secure messaging |
| Any confirmed ransomware infection | CISO, CTO, CEO, CRO | Immediately upon detection | Phone call |
| Any incident affecting payment systems | Head of Payment Operations, Head of Operations | Within [specify, e.g., 30 minutes] of detection | Phone call; secure messaging |
| Any incident involving a third-party provider | Head of Vendor Management, relevant Business Owner | Within [specify, e.g., 2 hours] of classification | Email; incident management system |
| Activation of BCP or DRP | CEO, Board Risk Committee Chair | Upon activation | Phone call |
| Any incident generating media coverage | Head of Communications, CEO, Legal Counsel | Within [specify, e.g., 15 minutes] of awareness | Phone call |

### 7.2 Regulatory Notification Triggers

*Define the triggers for regulatory notifications to BNM, NACSA, and other authorities.*

#### 7.2.1 BNM Notification

BNM notification is triggered by:

1. All P1 (Critical) incidents, automatically and without exception;
2. Any P2 (High) incident where the materiality assessment in Section 6 confirms materiality;
3. Any incident that BNM specifically requests to be notified of, as communicated through regulatory correspondence or supervisory direction;
4. Any incident that in the professional judgment of the Head of Regulatory Affairs or the CISO warrants proactive disclosure to BNM, even where formal materiality thresholds are not met.

#### 7.2.2 NACSA Notification

NACSA notification shall be assessed for all incidents classified as:
- P1 (Critical) with incident type TI-04 (Malware), TI-05 (Unauthorised Access), TI-06 (DDoS), or TI-12 (Insider Threat);
- Any incident involving CNII systems, regardless of severity classification;
- Any incident that NACSA has separately requested notification of.

*[Organisation Name] should maintain current contact details for NACSA's 24/7 reporting channel and ensure these are included in the Incident Response contact directory.*

#### 7.2.3 PDPA Notification

Where a data breach incident involving personal data of Malaysian data subjects is confirmed, the Data Protection Officer shall assess notification obligations under the PDPA and advise the Incident Owner within [specify timeframe] of confirmation.

#### 7.2.4 Other Regulatory Notifications

| Authority | Trigger Condition | Assessment Responsibility |
|---|---|---|
| Securities Commission Malaysia | Incidents affecting capital market operations or listed entity obligations | Chief Compliance Officer, Legal Counsel |
| PDRM (Royal Malaysia Police) | Confirmed criminal acts, including cyber crime and insider fraud | Legal Counsel, CISO |
| Financial Intelligence and Enforcement Department (FIED), BNM | Incidents with suspected money laundering or financial crime nexus | Chief Compliance Officer, AMLCO |
| [Other Regulatory Body] | [Trigger Condition] | [Responsibility] |

### 7.3 Customer Notification Triggers

*Define the criteria and process for notifying affected customers.*

Customer notification shall be assessed for all incidents involving:

1. Confirmed or suspected compromise of customer account credentials, personal data, or financial data;
2. Customer financial loss resulting from the incident;
3. Significant service unavailability affecting customer transactions.

Customer notification decisions shall be made jointly by the Head of Regulatory Affairs, Chief Compliance Officer, Data Protection Officer, and Head of Customer Experience, with Legal Counsel input. Customer notification content must be approved by the CEO and Head of Communications before issuance.

---

## 8. Escalation Timelines

### 8.1 Escalation Timeline Overview

*Provide a comprehensive timeline view of the escalation and notification obligations from incident detection through to final resolution reporting. This section is critical for operational compliance with RMiT Clause 11.4 notification timelines.*

The following timelines apply from the point of **incident detection** (the moment at which any [Organisation Name] staff member or automated system first becomes aware of an anomaly that may constitute an incident). All times are in Malaysian Standard Time (MYT, UTC+8) unless otherwise specified.

### 8.2 P1 (Critical) Incident Escalation Timeline

| Time from Detection | Action Required | Responsible Party | Output |
|---|---|---|---|
| T+0 | Incident detected; initial alert raised in incident management system | Detecting party / SOC | Incident ticket created |
| T+[specify, e.g., 15 min] | Initial severity assessment and preliminary classification | SOC / IT Operations on-call | Initial classification recorded |
| T+[specify, e.g., 30 min] | P1 classification confirmed or escalated from P2; Incident Owner assigned | CISO / Head of IT Operations | Incident Owner confirmed; P1 designation recorded |
| T+[specify, e.g., 30 min] | Internal notifications issued: CEO, CRO, CTO, CISO, Head of Regulatory Affairs, BRC Chair | Incident Owner | Notification records |
| T+[specify, e.g., 1 hour] | Materiality assessment completed; BNM notification decision made | Head of Regulatory Affairs, TCRC | Materiality Worksheet signed |
| T+[specify, per RMiT] | **BNM initial notification submitted** (where materiality confirmed) | Head of Regulatory Affairs | BNM notification record |
| T+[specify] | Preliminary BNM report submitted | Head of Regulatory Affairs | BNM preliminary report |
| T+[specify] | NACSA notification (if applicable) | CISO / Head of Regulatory Affairs | NACSA notification record |
| T+[specify] | Internal situation report issued to TCRC | Incident Owner | Situation report |
| T+[specify] | TCRC convened | TCRC Secretariat | Meeting minutes |
| T+[specify] | BRC briefing | Secretariat | Board briefing |
| Ongoing | Regular situation updates at [specify interval] intervals | Incident Owner | Status updates |
| Resolution | Incident declared resolved; BNM notification of resolution | Head of Regulatory Affairs | Resolution notification |
| Resolution + [14 calendar days] | **Full BNM incident report submitted** | Head of Regulatory Affairs | BNM full report |
| Resolution + [specify] | Post-incident review completed | Incident Owner | PIR Report |
| Resolution + [specify] | TCRC review of PIR findings | TCRC | Updated risk register; action plan |

### 8.3 P2 (High) Incident Escalation Timeline

| Time from Detection | Action Required | Responsible Party | Output |
|---|---|---|---|
| T+0 | Incident detected; alert raised | Detecting party / SOC | Incident ticket created |
| T+[specify, e.g., 30 min] | Initial classification as P2 (High) | SOC / IT Operations | Classification recorded |
| T+[specify, e.g., 1 hour] | Internal notifications issued: CTO, CISO, Head of Regulatory Affairs | Incident Owner | Notification records |
| T+[specify, e.g., 2 hours] | Materiality assessment initiated | Head of Regulatory Affairs | Assessment commenced |
| T+[specify, e.g., 2 hours] | Materiality assessment completed | TCRC / Head of Regulatory Affairs | Materiality Worksheet |
| T+[specify] | BNM notification (if material) | Head of Regulatory Affairs | BNM notification record |
| T+[specify] | Regular situation updates at [specify interval] | Incident Owner | Status updates |
| Resolution | Resolution declaration; BNM notification if applicable | Head of Regulatory Affairs | Resolution notification |
| Resolution + [specify] | Post-incident review | Incident Owner | PIR Report |

### 8.4 P3 (Medium) Incident Escalation Timeline

| Time from Detection | Action Required | Responsible Party | Output |
|---|---|---|---|
| T+0 | Incident detected; ticket created | Detecting party | Incident ticket |
| T+[specify, e.g., 2 hours] | Classification confirmed as P3 | IT Operations / SOC | Classification recorded |
| T+[specify, e.g., 4 hours] | Relevant manager notified | Incident Coordinator | Notification record |
| Within SLA | Incident resolved | IT Operations / Application Support | Resolution recorded |
| Monthly | Included in monthly incident trend report | Technology Risk | Trend report |
| Quarterly | Reviewed in quarterly trend analysis | TCRC | Trend analysis findings |

### 8.5 P4 (Low) Incident Escalation Timeline

| Time from Detection | Action Required | Responsible Party | Output |
|---|---|---|---|
| T+0 | Incident detected; ticket created | Detecting party | Incident ticket |
| Within normal working hours | Classification confirmed as P4 | IT Support / Operations | Classification recorded |
| Within SLA | Incident resolved | Relevant support team | Resolution recorded |
| Monthly | Included in monthly incident log | Technology Risk | Monthly log |

### 8.6 Timeline Compliance Monitoring

*Define how compliance with escalation timelines is monitored and reported.*

Timeline compliance shall be monitored as follows:

- The Incident Management System shall automatically timestamp all classification events, notification records, and report submissions;
- The Technology Risk function shall review timeline compliance for all P1 and P2 incidents as part of the post-incident review;
- A quarterly report on timeline compliance (including any instances of delay and the reasons thereof) shall be presented to the TCRC;
- Material failures to comply with BNM notification timelines must be disclosed to BNM with explanation.

---

## 9. Communication Templates

### 9.1 Internal Communication Templates

*This section provides standard templates for internal communications during incident management. Templates should be used as a starting point and customised to reflect the specific circumstances of the incident.*

#### 9.1.1 P1 Initial Alert — Senior Leadership Notification

**Template Reference:** ICF-COMM-INT-001
**Purpose:** Initial notification to senior leadership upon P1 classification
**Channel:** Phone call followed by secure message/email

---

**SUBJECT: [URGENT — P1 CRITICAL INCIDENT] [Incident Reference Number] — [Brief Incident Description]**

**Classification: CONFIDENTIAL — RESTRICTED DISTRIBUTION**

[Organisation Name] — Technology and Cyber Risk

**CRITICAL INCIDENT NOTIFICATION**

| Field | Details |
|---|---|
| Incident Reference | [Incident ID] |
| Classification | P1 — Critical |
| Incident Type | [Type Code and Description] |
| Date/Time Detected | [DD/MM/YYYY HH:MM MYT] |
| Date/Time Classified P1 | [DD/MM/YYYY HH:MM MYT] |
| Incident Owner | [Name, Title] |
| Current Status | [Active / Contained / Under Investigation] |

**Situation Summary:**
[Brief factual description of the incident in 2–3 sentences. State what is known, what is unknown, and what is being done. Avoid speculation.]

**Known Impact:**
- Systems affected: [List]
- Services affected: [List]
- Customers affected (estimate): [Number or range]
- Financial impact (estimate): [Amount or range, or "Under assessment"]

**Immediate Actions Taken:**
- [Action 1]
- [Action 2]

**BNM Notification Status:** [Notification submitted at HH:MM / Under assessment / Not required]

**Next Update:** [Time of next update]

**Contact:** [Incident Owner name and contact number]

---

#### 9.1.2 Situation Report (SITREP) — Ongoing P1 Incident

**Template Reference:** ICF-COMM-INT-002
**Purpose:** Regular status update during an active P1 incident
**Channel:** Secure messaging; incident bridge call
**Frequency:** Every [specify, e.g., 2 hours] during active P1 incident

---

**SUBJECT: [SITREP #X] [Incident Reference Number] — [Brief Description] — [HH:MM MYT]**

**Classification: CONFIDENTIAL — RESTRICTED DISTRIBUTION**

**SITUATION REPORT — TECHNOLOGY INCIDENT**

| Field | Details |
|---|---|
| Incident Reference | [Incident ID] |
| SITREP Number | [X of Y] |
| Date/Time | [DD/MM/YYYY HH:MM MYT] |
| Prepared By | [Name, Title] |
| Current Classification | [P1 / P2 — update if reclassified] |

**Current Status:** [Active — Ongoing / Active — Contained / Recovering / Resolved]

**Situation Update:**
[Update on what has changed since the last SITREP]

**Current Impact Assessment:**
- Customer impact: [Updated estimate]
- Financial impact: [Updated estimate]
- Systems status: [Updated status]

**Actions Completed Since Last SITREP:**
- [Action 1 — Completed at HH:MM]
- [Action 2 — Completed at HH:MM]

**Actions In Progress:**
- [Action 1 — Owner: Name — ETA: HH:MM]
- [Action 2 — Owner: Name — ETA: HH:MM]

**Issues / Blockers:**
- [Issue 1]

**Regulatory Status:**
- BNM notification: [Submitted at HH:MM / Pending — reason]
- Other notifications: [Status]

**Next SITREP:** [HH:MM MYT]

---

#### 9.1.3 Incident Resolution Notification

**Template Reference:** ICF-COMM-INT-003
**Purpose:** Notification of incident resolution to all stakeholders
**Channel:** Email; incident management system

---

**SUBJECT: [RESOLVED] [Incident Reference Number] — [Brief Description]**

**Classification: CONFIDENTIAL**

**INCIDENT RESOLUTION NOTIFICATION**

| Field | Details |
|---|---|
| Incident Reference | [Incident ID] |
| Final Classification | [P1 / P2 / P3 / P4] |
| Date/Time Detected | [DD/MM/YYYY HH:MM MYT] |
| Date/Time Resolved | [DD/MM/YYYY HH:MM MYT] |
| Total Duration | [HH hours MM minutes] |
| Incident Owner | [Name, Title] |

**Resolution Summary:**
[Brief description of how the incident was resolved]

**Final Impact Assessment:**
- Total customers affected: [Final count]
- Total financial impact: [Final amount]
- Data impact: [Final assessment]

**Root Cause (Preliminary):** [Preliminary root cause — full analysis to follow in PIR]

**Immediate Remediation Actions:**
- [Action 1]
- [Action 2]

**Post-Incident Review:** Scheduled for [Date/Time]

**BNM Full Report:** Due [Date — Resolution + 14 calendar days]

---

### 9.2 BNM Communication Templates

*The following templates are for communications with BNM. These must be reviewed and approved by the Head of Regulatory Affairs and, for P1 incidents, the CEO before submission. Refer to the current BNM submission requirements and reporting portal for the latest format requirements, as BNM may prescribe specific forms.*

#### 9.2.1 BNM Initial Notification

**Template Reference:** ICF-COMM-BNM-001
**Purpose:** Initial notification to BNM upon confirmation of a material incident
**Recipient:** BNM designated contact — [specify BNM contact details in Appendix F]
**Approval Required:** Head of Regulatory Affairs; CEO (P1 incidents)
**Channel:** [BNM designated reporting channel — specify]

---

**[Organisation Name]**
**[Organisation Address]**
**[Organisation Licence Number]**

[Date]
[Time] MYT

Director / Head of [Relevant BNM Department]
Bank Negara Malaysia
Jalan Dato' Onn
50480 Kuala Lumpur

**SUBJECT: INITIAL NOTIFICATION OF [TECHNOLOGY / CYBER] INCIDENT — [Incident Classification] — [Organisation Name] — [Date]**

Dear [Title and Name / "the Director"],

In accordance with the requirements of the Risk Management in Technology (RMiT) Policy Document, Clause 11.4, [Organisation Name] hereby provides initial notification of a [technology / cyber] incident that meets the materiality criteria for mandatory reporting.

**1. Incident Details**

| Field | Information |
|---|---|
| Incident Reference | [Organisation internal reference number] |
| Incident Type | [Type and brief description] |
| Date/Time of Detection | [DD/MM/YYYY HH:MM MYT] |
| Date/Time of This Notification | [DD/MM/YYYY HH:MM MYT] |
| Current Status | [Active — Contained / Recovering / Under Investigation] |

**2. Incident Summary**

[Factual, concise description of the incident — no more than 3 paragraphs. State what is known with confidence. Clearly distinguish confirmed facts from preliminary assessments. Avoid speculative language.]

**3. Current Impact Assessment**

| Impact Dimension | Current Assessment |
|---|---|
| System / Services Affected | [Details] |
| Customer Impact | [Estimated number; nature of impact] |
| Financial Impact | [Estimated amount or "Under assessment"] |
| Data Impact | [Nature and estimated scope of data affected] |
| Regulatory Impact | [Other regulatory notifications made or planned] |

**4. Immediate Response Actions**

[Describe the immediate containment and response actions taken as at the time of this notification.]

**5. Next Steps**

[Describe the planned response actions and anticipated timeline for resolution.]

**6. Preliminary Report**

A preliminary incident report will be submitted to BNM by [Date/Time] in accordance with Clause 11.4.

**7. Point of Contact**

For enquiries regarding this notification, please contact:

[Name]
[Title]
[Organisation Name]
[Phone — 24/7 contact]
[Email]

Yours faithfully,

[Name]
[Title — Head of Regulatory Affairs / CEO]
[Organisation Name]

---

#### 9.2.2 BNM Preliminary Incident Report

**Template Reference:** ICF-COMM-BNM-002
**Purpose:** Preliminary incident report to BNM following initial notification
**Approval Required:** Head of Regulatory Affairs; CEO

*[Note: Complete this report using the current BNM prescribed format where one exists. The structure below is illustrative. Verify against current BNM RMiT guidance and any supplementary circulars.]*

---

**[PRELIMINARY INCIDENT REPORT]**
**[Organisation Name]**
**Incident Reference:** [ID]
**BNM Reference (if assigned):** [BNM reference]
**Report Date:** [Date]
**Report Period:** From [detection date/time] to [report date/time]

**Section 1: Incident Overview**
[Comprehensive factual description of the incident as understood at the time of this report]

**Section 2: Timeline of Events**

| Date/Time (MYT) | Event |
|---|---|
| [DD/MM/YYYY HH:MM] | Incident detected |
| [DD/MM/YYYY HH:MM] | [Subsequent event] |
| [DD/MM/YYYY HH:MM] | Classification confirmed |
| [DD/MM/YYYY HH:MM] | BNM initial notification submitted |
| [DD/MM/YYYY HH:MM] | [Other key milestone] |

**Section 3: Impact Assessment**

| Dimension | Assessment |
|---|---|
| Systems/Services | [Detail] |
| Customers Affected | [Number; nature] |
| Transactions Affected | [Volume; value] |
| Financial Loss (Organisation) | [Amount] |
| Financial Loss (Customers) | [Amount] |
| Data Compromised | [Nature; volume] |
| Third Parties Affected | [List] |

**Section 4: Root Cause (Preliminary)**
[Preliminary root cause analysis — note that full RCA will be provided in the final report]

**Section 5: Response Actions Taken**
[Detailed account of all response actions taken to date]

**Section 6: Containment Status**
[Confirm whether the incident is contained, partially contained, or ongoing]

**Section 7: Remediation Plan**
[Describe planned remediation actions with owners and timelines]

**Section 8: Other Regulatory Notifications**
[List any other regulatory authorities notified and the date/time of notification]

---

#### 9.2.3 BNM Full Incident Report

**Template Reference:** ICF-COMM-BNM-003
**Purpose:** Final comprehensive incident report to BNM (due within 14 calendar days of resolution)
**Approval Required:** Head of Regulatory Affairs; CEO; CRO

*[This report is due within [14 calendar days / specify per current RMiT requirements] of the incident being declared resolved. It must include a full root cause analysis, comprehensive impact assessment, and a detailed remediation and preventive action plan. The Head of Regulatory Affairs is responsible for coordinating all inputs.]*

---

**[FULL INCIDENT REPORT]**
**[Organisation Name]**
**Incident Reference:** [ID]
**BNM Reference:** [BNM Reference]
**Report Date:** [Date]
**Resolution Date:** [Date]

**Executive Summary**
[1-page summary suitable for senior BNM officials]

**Section 1: Incident Background and Timeline**
[Full chronological account]

**Section 2: Root Cause Analysis**
[Full RCA — include contributing factors, systemic issues, and control failures]

**Section 3: Full Impact Assessment**
[Final confirmed impact across all dimensions]

**Section 4: Response Effectiveness Assessment**
[Honest assessment of the effectiveness of the incident response — what worked well, what did not]

**Section 5: Remediation Actions Completed**
[Actions completed as at report date, with evidence]

**Section 6: Remediation Actions In Progress**
[Actions in progress, with owners, milestones, and target completion dates]

**Section 7: Preventive Actions — Long-Term**
[Systemic improvements to prevent recurrence; control enhancements]

**Section 8: Lessons Learned**
[Key lessons and how they are being embedded]

**Section 9: Control Environment Update**
[Assessment of whether existing controls have been strengthened as a result of this incident]

**Appendices**
[Attach supporting evidence: logs, screenshots, third-party reports, forensic reports as applicable]

---

### 9.3 Customer Communication Templates

*The following templates are for customer communications. All customer communications must be approved by the Head of Customer Experience, Head of Communications, Chief Compliance Officer, and Legal Counsel before issuance. Do not issue any customer communication without this approval.*

#### 9.3.1 Service Disruption Notice

**Template Reference:** ICF-COMM-CUST-001
**Channel:** Website banner; mobile app notification; SMS (if applicable); social media
**Trigger:** P1/P2 incidents with confirmed customer service impact

---

**SERVICE NOTICE — [DATE]**

We are aware of a [technical issue / service disruption] affecting [describe affected service, e.g., our mobile banking application / internet banking / ATM services].

Our teams are working urgently to resolve this issue.

[If ETA is known]: We expect services to be restored by approximately [Time] MYT.

[If ETA is not known]: We will provide a further update at [Time] MYT.

We apologise for the inconvenience. For urgent assistance, please contact our customer service team at [Phone Number], available [hours].

We will provide further updates as the situation develops.

---

#### 9.3.2 Data Incident Customer Notification

**Template Reference:** ICF-COMM-CUST-002
**Channel:** Registered email; registered mobile (SMS); secure message via online banking
**Trigger:** Confirmed compromise of specific customer data
**Approval:** CEO; Head of Regulatory Affairs; Legal Counsel; Data Protection Officer

---

**IMPORTANT SECURITY NOTICE — [Organisation Name]**

Dear [Customer Name],

We are writing to inform you of a security incident that may have affected your [describe nature, e.g., personal information / account information] held with [Organisation Name].

**What happened:**
[Plain-language description of the incident. Avoid technical jargon. Be factual and direct.]

**What information was involved:**
[Specify the categories of information potentially affected — e.g., name, account number, contact details. Do not speculate about information that was not involved.]

**What we have done:**
[Describe the steps [Organisation Name] has taken to contain the incident and protect customer information.]

**What you should do:**
- [Recommended action 1 — e.g., change your password]
- [Recommended action 2 — e.g., monitor your account for unusual activity]
- [Recommended action 3 — e.g., contact us immediately if you notice any suspicious activity]

**For further assistance:**
Please contact our dedicated support line at [Phone Number], available [hours], or email [Email Address].

We take the security of your information extremely seriously and sincerely apologise for any concern this may cause.

Yours sincerely,

[Name]
[Title]
[Organisation Name]

---

## 10. Post-Incident Review Process

### 10.1 Post-Incident Review Overview

*Explain the purpose and structure of the post-incident review (PIR) process. The PIR is a mandatory component of incident management for all P1 and P2 incidents, and is strongly recommended for P3 incidents with systemic significance.*

The Post-Incident Review (PIR) is a structured, no-blame process for systematically examining what occurred during an incident, why it occurred, how the response was conducted, and what improvements can be made to prevent recurrence and enhance response effectiveness. The PIR is a mandatory component of [Organisation Name]'s incident management process for all P1 and P2 incidents.

The PIR serves multiple purposes:

1. **Root Cause Identification:** Rigorous analysis of the technical, process, and human factors that contributed to the incident;
2. **Response Effectiveness Assessment:** Honest evaluation of what worked well and what could be improved in the response;
3. **Regulatory Reporting Input:** Provision of factual findings and corrective actions for inclusion in the BNM full incident report;
4. **Control Improvement:** Identification of specific control enhancements to reduce the likelihood or impact of similar incidents;
5. **Knowledge Management:** Capturing and sharing lessons learned across the organisation to build institutional resilience;
6. **Regulatory Demonstration:** Demonstrating to BNM and other regulators that [Organisation Name] learns from incidents and takes systematic action to improve.

### 10.2 PIR Governance

| Attribute | P1 (Critical) | P2 (High) | P3 (Medium) |
|---|---|---|---|
| **PIR Mandatory?** | Yes — mandatory | Yes — mandatory | Recommended; mandatory if systemic issue identified |
| **PIR Initiator** | Incident Owner | Incident Owner | Incident Owner / IT Operations Manager |
| **PIR Chair** | Head of Technology Risk | Head of Information Security or delegate | IT Operations Manager or delegate |
| **Participants** | CISO, CTO, relevant technical leads, Head of Regulatory Affairs, Chief Compliance Officer, affected business unit heads | Relevant technical leads, Information Security, Compliance, affected business unit representative | Technical leads, relevant support teams |
| **Timeline to Complete** | Within [specify, e.g., 10 business days] of resolution | Within [specify, e.g., 15 business days] of resolution | Within [specify, e.g., 20 business days] of resolution |
| **Output** | Formal PIR Report; action plan with owners and deadlines | PIR Report; action plan | PIR summary; action items |
| **Review By** | TCRC; Board Risk Committee | TCRC | IT Management Committee |

### 10.3 PIR Methodology

*The PIR shall be conducted using a structured methodology. The recommended approach is a combination of timeline reconstruction and contributing factor analysis.*

**Phase 1 — Data Collection (within [specify] days of resolution)**

The Incident Owner shall coordinate the collection of all relevant data prior to the PIR session, including:

- Complete incident timeline extracted from the incident management system;
- System logs, security logs, and audit trails;
- All internal communications (SITREPs, notifications, emails, call records);
- All regulatory communications;
- Post-incident technical assessments or forensic reports (if applicable);
- Input from all response teams via structured questionnaire.

**Phase 2 — PIR Session**

The PIR session shall be conducted with all key participants present. The session agenda shall include:

1. Timeline walkthrough — factual reconstruction of events from detection to resolution;
2. Impact assessment review — final confirmed impact across all dimensions;
3. Root cause analysis — using [5 Whys / Fishbone / Fault Tree / other methodology — specify] to identify root causes and contributing factors;
4. Response assessment — what went well, what could be improved;
5. Identification of corrective and preventive actions;
6. Owner and timeline assignment for all actions.

**Phase 3 — PIR Report**

A formal PIR Report shall be produced by the Incident Owner within [specify, e.g., 5 business days] of the PIR session. The report shall follow the structure in Appendix D.

**Phase 4 — Action Tracking**

All corrective and preventive actions identified in the PIR shall be tracked in [Organisation Name]'s risk action management system. Progress shall be reported to TCRC monthly until all actions are closed.

### 10.4 Quarterly Trend Review

*In addition to per-incident PIRs, a quarterly trend review shall be conducted to identify patterns across all incidents during the quarter.*

The Technology Risk function shall prepare a quarterly incident trend report for TCRC consideration, covering:

| Analysis Area | Content |
|---|---|
| Incident volume | Total incidents by severity and type; comparison to prior quarter and prior year |
| Classification accuracy | Review of incidents where classification was changed; reasons for reclassification |
| Response timeline compliance | Compliance with escalation and notification timelines; any delays and root causes |
| Recurring themes | Common root causes or incident types appearing repeatedly |
| Effectiveness of prior PIR actions | Status of actions from prior PIRs; evidence of effectiveness |
| Emerging threat landscape | New or emerging threat types observed during the quarter |
| Regulatory interaction | Summary of BNM and other regulatory notifications made during the quarter |
| Trend indicators | Key risk indicators related to incidents; comparison to thresholds |

The quarterly trend report shall be submitted to TCRC for review and discussion. Significant findings shall be escalated to the Board Risk Committee.

### 10.5 Annual Incident Framework Review

This Framework shall be reviewed annually by the Head of Regulatory Affairs in conjunction with the Head of Technology Risk and CISO, covering:

- Adequacy of classification criteria against the current threat landscape;
- Appropriateness of materiality thresholds in light of organisational changes;
- Alignment with any updated BNM guidance or regulatory requirements;
- Effectiveness of communication templates and escalation timelines;
- Lessons from incidents during the year that suggest framework improvements.

The annual review shall be approved by the TCRC and Board Risk Committee. Material changes shall be communicated to all relevant personnel.

---

## 11. Roles and Responsibilities

### 11.1 RACI Matrix

*The following RACI matrix defines the roles and responsibilities for each key activity within the incident classification framework. R = Responsible (does the work), A = Accountable (owns the outcome), C = Consulted (provides input), I = Informed (kept updated).*

| Activity | CEO | CRO | CTO | CISO | Head of Regulatory Affairs | Chief Compliance Officer | Head of Technology Risk | IT Operations Manager | SOC Lead | Incident Owner | Legal Counsel | DPO | Head of Communications | Board Risk Committee |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Incident Detection and Initial Triage** | I | I | I | I | I | I | I | C | R/A | — | — | — | — | — |
| **Initial Incident Classification (P4–P2)** | I | I | C | C | I | I | C | C | R | A | — | — | — | — |
| **P1 Classification Decision** | I | C | C | A | C | I | C | R | R | R | — | — | — | I |
| **Internal Notification — P1** | I | R | R | R | R | R | R | R | R | A | — | — | — | R |
| **Materiality Assessment** | I | C | C | C | A | C | R | — | C | C | C | C | — | — |
| **BNM Initial Notification** | C | C | — | C | A | C | C | — | — | C | C | — | — | I |
| **BNM Preliminary Report** | A | C | C | C | R | C | C | — | C | C | C | — | — | I |
| **BNM Full Incident Report** | A | C | C | C | R | C | C | — | C | C | C | — | — | I |
| **NACSA Notification** | I | C | C | A | R | C | C | — | C | — | C | — | — | I |
| **PDPA Notification Assessment** | I | I | — | C | C | C | — | — | — | C | C | A | — | — |
| **Customer Notification** | A | I | — | C | C | C | — | — | — | C | C | C | R | I |
| **Crisis Management Coordination** | A | C | C | C | C | C | — | C | C | C | C | — | C | I |
| **BCP/DRP Activation** | C | A | R | C | I | I | C | R | C | C | — | — | — | I |
| **Incident Resolution Declaration** | I | I | C | C | I | I | C | A | C | R | — | — | — | I |
| **Post-Incident Review (Chair)** | I | I | I | I | C | C | A | C | C | R | — | — | — | I |
| **PIR Report Approval** | I | A | C | C | C | C | R | — | — | — | — | — | — | I |
| **Action Tracking and Closure** | I | I | I | I | C | C | A | R | C | R | — | — | — | I |
| **Quarterly Trend Report** | I | I | I | C | C | C | A | C | C | — | — | — | — | I |
| **Annual Framework Review** | I | A | C | C | R | C | C | — | — | — | — | — | — | A |
| **Framework Approval** | C | A | C | C | R | C | C | — | — | — | — | — | — | A |

*Key: R = Responsible | A = Accountable | C = Consulted | I = Informed*

### 11.2 Key Role Descriptions

#### 11.2.1 Head of Regulatory Affairs

The Head of Regulatory Affairs is the **document owner** and has overall accountability for:
- Ensuring this Framework is current, complete, and compliant with applicable regulatory requirements;
- Making the final determination on materiality for BNM reporting purposes;
- Ensuring all BNM notifications and reports are submitted accurately and within required timelines;
- Maintaining the relationship with BNM supervisory contacts during and after significant incidents;
- Coordinating the annual review and update of this Framework.

#### 11.2.2 Chief Information Security Officer (CISO)

The CISO has operational accountability for cyber security incidents and is responsible for:
- Confirming P1/P2 classification for all cyber security incidents;
- Leading the cyber incident response for all TI-04, TI-05, TI-06, TI-07, TI-08, and TI-12 incident types;
- Assessing NACSA notification requirements;
- Ensuring forensic integrity of incident evidence;
- Providing technical input to all BNM regulatory reports.

#### 11.2.3 Incident Owner

The Incident Owner is responsible for the day-to-day management of a specific incident from classification through to resolution and PIR completion. Responsibilities include:
- Ensuring the incident record is accurate and up-to-date at all times;
- Coordinating the cross-functional response team;
- Issuing SITREPs on the required schedule;
- Confirming all notification actions are completed within required timelines;
- Commissioning and overseeing the PIR;
- Escalating issues or resource constraints to senior management.

#### 11.2.4 Security Operations Centre (SOC) Lead

The SOC Lead is responsible for:
- 24/7 monitoring and initial detection of technology and cyber incidents;
- Performing initial triage and preliminary classification;
- Escalating detected incidents to the appropriate Incident Owner;
- Providing continuous technical monitoring throughout the incident lifecycle;
- Preserving forensic evidence in accordance with evidence handling procedures.

---

## 12. Review and Approval

### 12.1 Review Schedule

| Review Type | Frequency | Trigger | Reviewer | Approver |
|---|---|---|---|---|
| Per-Event Review (Material Incidents) | After each P1/P2 incident | Completion of PIR; BNM reporting obligations; significant framework gaps identified | Head of Regulatory Affairs, Head of Technology Risk, CISO | TCRC, Board Risk Committee |
| Quarterly Trend Review | Quarterly | Schedule | Head of Technology Risk | TCRC |
| Annual Framework Review | Annually | Schedule; regulatory update; major organisational change | Head of Regulatory Affairs | Board Risk Committee |
| Ad Hoc Review | As required | Material regulatory change; significant incident revealing framework gap; BNM direction | Head of Regulatory Affairs | TCRC |

### 12.2 Version History

*Record all versions of this document, including the nature of changes made.*

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial document — approved for implementation |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of major revision] |

### 12.3 Approval Sign-Off

*All approvers must sign off on this document before it is effective. This table records the approval.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Regulatory Affairs (Document Owner) | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| Chief Technology Officer | [Name] | __________________ | [Date] |
| Chief Compliance Officer | [Name] | __________________ | [Date] |
| Chair, Technology and Cyber Risk Committee | [Name] | __________________ | [Date] |
| Chair, Board Risk Committee | [Name] | __________________ | [Date] |

---

## 13. References

### 13.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Sections / Clauses |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 11.4 (primary); Clauses 11.1, 11.2, 11.3, 10.1–10.3 |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | [Relevant sections — e.g., Part VI — Supervision and Examination] |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | [Relevant sections] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | [Relevant sections — data breach provisions] |
| NACSA Guidelines | [Current NACSA cybersecurity incident reporting guidelines — specify] | NACSA | [Relevant sections] |
| BNM/RH/PD | [Other applicable BNM policy documents — specify] | Bank Negara Malaysia | [Relevant sections] |

### 13.2 Internal References

| Document Title | Document ID | Owner |
|---|---|---|
| Technology Risk Management Policy | [Doc ID] | Head of Technology Risk |
| Cyber Security Incident Response Plan | [Doc ID] | CISO |
| Business Continuity Plan | [Doc ID] | [Owner] |
| Disaster Recovery Plan | [Doc ID] | [Owner] |
| Data Breach Response Procedure | [Doc ID] | Data Protection Officer |
| Vendor / Third-Party Risk Management Policy | [Doc ID] | [Owner] |
| Crisis Communication Policy | [Doc ID] | Head of Communications |
| Information Classification and Handling Policy | [Doc ID] | [Owner] |
| [Other Internal Document] | [Doc ID] | [Owner] |

### 13.3 Industry Standards

| Standard | Title | Applicability |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Clause A.16 — Incident Management |
| ISO/IEC 27035 | Information Security Incident Management | Incident management methodology |
| NIST SP 800-61 | Computer Security Incident Handling Guide | Incident handling best practice |
| NIST Cybersecurity Framework | NIST CSF | Respond and Recover Functions |
| SANS Incident Response | SANS Institute Incident Response Framework | [Reference as applicable] |

---

## 14. Appendices

### Appendix A — Incident Classification Quick Reference Card

*This appendix provides a single-page quick reference card for operational use by SOC and IT operations staff. It should be printed and posted in the SOC and made available on the intranet.*

---

**[Organisation Name] — INCIDENT CLASSIFICATION QUICK REFERENCE**

**STEP 1: CLASSIFY THE SEVERITY**

| Ask yourself... | If YES → |
|---|---|
| Is there a confirmed cyber attack / data exfiltration / ransomware? | Minimum **P1** — Call CISO now |
| Are critical customer services completely unavailable? | Minimum **P1** — Call Incident Manager now |
| Are more than [X] customers affected? | Minimum **P1** |
| Is there significant service degradation or partial outage? | Minimum **P2** — Notify Manager |
| Is there any confirmed financial impact above [MYR threshold]? | Assess for **P1** or **P2** |
| Is this a minor/isolated incident with no customer impact? | **P4** — Log and monitor |

**STEP 2: RAISE THE ALERT**

| Severity | Call | Within |
|---|---|---|
| P1 | [24/7 Incident Hotline: specify number] | IMMEDIATELY |
| P2 | [On-call Manager: specify contact] | [X] minutes |
| P3 | [Shift Lead: specify contact] | [X] hours |
| P4 | [Log in incident system] | Next business day |

**STEP 3: CREATE THE TICKET**

Log the incident in [Incident Management System Name] immediately. Include:
- Date and time of detection;
- System(s) affected;
- Initial description;
- Your initial severity classification;
- Your name and contact details.

**WHEN IN DOUBT — ESCALATE UP, NOT DOWN.**

---

### Appendix B — Incident Classification Examples

*This appendix provides worked examples of the classification process for common incident scenarios. These examples are illustrative and do not constitute definitive classification guidance for all circumstances.*

#### Example 1: Internet Banking Outage

**Scenario:** At 09:15 on a Monday morning, [Organisation Name]'s internet banking portal becomes inaccessible to all customers. The outage is caused by a failed software deployment. No data has been compromised.

| Assessment Dimension | Assessment | Classification |
|---|---|---|
| Operational Impact | Complete unavailability of internet banking — critical service | P1 |
| Customer Impact | All internet banking customers (estimated [X]) unable to access service | P1 |
| Financial Impact | Transaction processing halted; financial impact accruing | P2 (escalate to P1 if prolonged) |
| Data Impact | No data compromise confirmed | P4 |
| Reputational Impact | National media coverage expected if outage exceeds [X] hours | P1 |
| Regulatory Impact | BNM reporting obligation triggered if outage exceeds [X] hours | P1 |

**Overall Classification: P1 (Critical)**
**BNM Notification: Required if outage exceeds [materiality threshold duration]**

---

#### Example 2: Targeted Phishing Attack — Credential Compromise

**Scenario:** A staff member reports clicking a phishing link. The SOC investigates and confirms that the staff member's credentials were captured by the attacker. No evidence of further system access has been found, but the investigation is ongoing.

| Assessment Dimension | Assessment | Classification |
|---|---|---|
| Operational Impact | No operational disruption confirmed | P4 |
| Customer Impact | No customer impact confirmed | P4 |
| Financial Impact | No financial impact confirmed | P4 |
| Data Impact | Credentials compromised; potential for further access — under investigation | P2 (precautionary) |
| Reputational Impact | Not applicable at this stage | P4 |
| Regulatory Impact | Under assessment pending investigation outcome | P2 |

**Overall Classification: P2 (High) — precautionary; subject to escalation to P1 if investigation reveals further compromise**
**BNM Notification: Materiality assessment required; notification likely if further access is confirmed**

---

#### Example 3: Minor System Degradation — Payment Processing

**Scenario:** A processing delay is observed in the back-end payment reconciliation system. Payments are processing but with a delay of approximately 15 minutes. No customer-facing impact has been reported. The issue self-resolved after 45 minutes.

| Assessment Dimension | Assessment | Classification |
|---|---|---|
| Operational Impact | Minor degradation of a non-customer-facing system; self-resolved | P4 |
| Customer Impact | No customer impact | P4 |
| Financial Impact | Negligible | P4 |
| Data Impact | None | P4 |
| Reputational Impact | None | P4 |
| Regulatory Impact | None | P4 |

**Overall Classification: P4 (Low)**
**BNM Notification: Not required**

---

### Appendix C — BNM and Regulatory Contact Directory

*This appendix contains the contact details for BNM and other regulatory authorities for incident notification purposes. This information is sensitive and access should be restricted to authorised personnel only. Contact details should be verified and updated quarterly.*

**Classification: RESTRICTED**

| Authority | Contact Purpose | Primary Contact | Secondary Contact | Contact Method | Availability |
|---|---|---|---|---|---|
| Bank Negara Malaysia — [Relevant Department] | Technology/cyber incident notification | [Name], [Title] — [Phone] — [Email] | [Name], [Title] — [Phone] — [Email] | Phone (primary); Secure email; [BNM portal] | 24/7 for P1; Business hours for P2 |
| NACSA | Cyber incident reporting | [Contact details per NACSA current guidance] | | | |
| PDRM — Commercial Crime Division | Cyber crime reporting | [Contact details] | | | |
| Data Protection Commissioner | PDPA breach notification | [Contact details] | | | |

*[Note: Do not publish this appendix externally. Verify all contact details against current regulatory guidance before relying upon them.]*

---

### Appendix D — Post-Incident Review Report Template

*This appendix provides the standard template for the PIR Report.*

---

**POST-INCIDENT REVIEW REPORT**

| Field | Details |
|---|---|
| Incident Reference | [ID] |
| Incident Classification | [P1/P2/P3] |
| Report Date | [Date] |
| PIR Session Date | [Date] |
| PIR Chair | [Name, Title] |
| PIR Participants | [List all participants with titles] |
| BNM Report Reference (if applicable) | [BNM reference] |

**1. Incident Summary**
[Brief factual summary — 1 paragraph]

**2. Confirmed Impact**

| Dimension | Final Confirmed Impact |
|---|---|
| Duration | [From detection to resolution: HH hours MM minutes] |
| Customers Affected | [Final confirmed number] |
| Financial Impact (Organisation) | [MYR amount] |
| Financial Impact (Customers) | [MYR amount] |
| Data Impact | [Nature and volume] |
| Third-Party Impact | [Details] |

**3. Timeline of Events (Detailed)**

| Date/Time (MYT) | Event | Responsible Party |
|---|---|---|
| [DD/MM/YYYY HH:MM] | [Event description] | [Name/Team] |

**4. Root Cause Analysis**

*4.1 Immediate Cause*
[The direct technical or operational cause of the incident]

*4.2 Contributing Factors*
[Factors that enabled or exacerbated the incident]

*4.3 Systemic / Root Cause*
[Underlying systemic issues — control gaps, process failures, governance issues]

*4.4 Root Cause Methodology Used*
[e.g., 5 Whys, Fishbone Diagram — attach completed analysis as sub-appendix]

**5. Response Effectiveness Assessment**

*5.1 What Went Well*
| Observation | Evidence |
|---|---|
| [What worked well] | [Evidence/basis] |

*5.2 Areas for Improvement*
| Observation | Evidence | Impact of Improvement Gap |
|---|---|---|
| [What could have been better] | [Evidence] | [Impact] |

**6. Corrective and Preventive Actions**

| Action # | Action Description | Category | Owner | Target Date | Priority | Status |
|---|---|---|---|---|---|---|
| 1 | [Action to address root cause] | [Corrective / Preventive / Detective] | [Name, Title] | [Date] | [High/Med/Low] | [Open] |
| 2 | | | | | | |

**7. Lessons Learned**

| Lesson | Applicability | Communication Plan |
|---|---|---|
| [Key lesson] | [Who else should know this] | [How will it be shared] |

**8. Framework / Procedure Updates Required**

| Document | Required Update | Owner | Target Date |
|---|---|---|---|
| [Document title] | [Describe required update] | [Owner] | [Date] |

**9. Regulatory Compliance Assessment**

| Obligation | Required | Completed | On Time? | Notes |
|---|---|---|---|---|
| BNM Initial Notification | [Yes/No] | [Yes/No] | [Yes/No] | |
| BNM Preliminary Report | [Yes/No] | [Yes/No] | [Yes/No] | |
| BNM Full Report | [Yes/No] | [Yes/No] | [Yes/No] | |
| NACSA Notification | [Yes/No] | [Yes/No] | [Yes/No] | |
| PDPA Notification Assessment | [Yes/No] | [Yes/No] | [Yes/No] | |
| Customer Notification | [Yes/No] | [Yes/No] | [Yes/No] | |

**10. PIR Approval**

| Role | Name | Signature | Date |
|---|---|---|---|
| PIR Chair | | | |
| Incident Owner | | | |
| Head of Technology Risk | | | |
| Head of Regulatory Affairs | | | |

---

### Appendix E — Incident Severity Assessment Worksheet

*This worksheet is to be completed for every P1 and P2 incident at the time of classification. It must be retained as part of the incident record.*

---

**INCIDENT SEVERITY ASSESSMENT WORKSHEET**

| Field | Details |
|---|---|
| Incident ID | [Auto-assigned by incident management system] |
| Date/Time of Detection | [DD/MM/YYYY HH:MM MYT] |
| Detecting Party | [Name, Team] |
| Assessing Officer | [Name, Title] |
| Date/Time of Assessment | [DD/MM/YYYY HH:MM MYT] |

**Dimension Assessment:**

| Dimension | P1 Criteria Met? | P2 Criteria Met? | P3 Criteria Met? | P4 Criteria Met? | Basis for Assessment |
|---|---|---|---|---|---|
| Operational Impact | [ ] | [ ] | [ ] | [ ] | |
| Customer Impact | [ ] | [ ] | [ ] | [ ] | |
| Financial Impact | [ ] | [ ] | [ ] | [ ] | |
| Data Impact | [ ] | [ ] | [ ] | [ ] | |
| Reputational Impact | [ ] | [ ] | [ ] | [ ] | |
| Regulatory/Compliance Impact | [ ] | [ ] | [ ] | [ ] | |

**Overall Classification:** [P1 / P2 / P3 / P4]

**Incident Type:** [TI-01 through TI-14 — select all that apply]

**Rationale for Classification:**
[Brief narrative justification for the overall classification, particularly where dimensions give mixed results]

**Classification Confirmed By:**

| Role | Name | Date/Time |
|---|---|---|
| Assessing Officer | | |
| Incident Owner | | |
| CISO / Head of IT Operations (for P1) | | |

**Classification History (if reclassified):**

| Date/Time | Previous Classification | New Classification | Reclassified By | Rationale |
|---|---|---|---|---|
| | | | | |

---

### Appendix F — Incident Record Minimum Requirements

*This appendix defines the minimum data fields that must be captured in the incident management system for every incident.*

| Field | Mandatory? | Description |
|---|---|---|
| Incident ID | Yes | Auto-generated unique identifier |
| Date/Time of Detection | Yes | When the incident was first detected |
| Date/Time of Reporting | Yes | When the incident was logged in the system |
| Detecting Party | Yes | Name and team of person/system that detected the incident |
| Incident Title | Yes | Brief descriptive title |
| Incident Description | Yes | Full description of the incident as known at time of logging |
| Incident Type | Yes | Type code(s) from Section 5.3 |
| Severity Classification | Yes | P1/P2/P3/P4 |
| Classification Date/Time | Yes | When classification was confirmed |
| Classifying Officer | Yes | Name and title of person confirming classification |
| Incident Owner | Yes | Name and title of assigned Incident Owner |
| Systems Affected | Yes | List of affected systems |
| Services Affected | Yes | List of affected services |
| Customer Impact | Yes | Estimated/confirmed customer impact |
| Financial Impact | Yes | Estimated/confirmed financial impact |
| Data Impact | Yes | Estimated/confirmed data impact |
| BNM Notification Required? | Yes (P1/P2) | Yes/No/Pending |
| BNM Notification Date/Time | If applicable | Date and time of initial BNM notification |
| BNM Reference Number | If applicable | Reference number assigned by BNM |
| Containment Actions | Yes | Actions taken to contain the incident |
| Resolution Date/Time | Yes | When the incident was declared resolved |
| Resolution Description | Yes | How the incident was resolved |
| PIR Required? | Yes | Yes/No |
| PIR Completion Date | If applicable | Date PIR report was finalised |
| Retention Date | Yes | Date until which the record must be retained |

---

### Appendix G — Glossary

*This appendix defines key terms used throughout this Framework.*

| Term | Definition |
|---|---|
| Advanced Persistent Threat (APT) | A sophisticated, targeted cyberattack in which an attacker gains access to a network and remains undetected for an extended period of time, typically with the goal of data theft or espionage |
| BNM | Bank Negara Malaysia, the central bank of Malaysia and the primary regulator of financial institutions in Malaysia |
| CNII | Critical National Information Infrastructure — systems and networks that, if disrupted or destroyed, would have a serious impact on the well-being of society and the functioning of government, economy, or national defence |
| Containment | Actions taken to limit the spread or impact of an incident without necessarily resolving the underlying cause |
| Eradication | The process of removing the cause of an incident from the affected environment |
| Incident | Any event that has the potential to, or does, adversely affect the confidentiality, integrity, or availability of [Organisation Name]'s information, systems, or services |
| Incident Owner | The named individual accountable for the management of a specific incident from classification through to PIR completion |
| Materiality | The threshold above which an incident must be reported to BNM under RMiT Clause 11.4, as defined by the criteria in Section 6 of this Framework |
| NACSA | National Cyber Security Agency — the national focal point for cybersecurity in Malaysia |
| PDPA | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| Post-Incident Review (PIR) | A structured review conducted after an incident to identify root causes, assess response effectiveness, and determine corrective and preventive actions |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| Ransomware | A type of malicious software that encrypts a victim's data and demands payment for the decryption key |
| RMiT | Risk Management in Technology — BNM's Policy Document governing technology risk management for financial institutions |
| Root Cause | The fundamental reason(s) for the occurrence of an incident; the correction of which will prevent recurrence |
| Severity | The relative level of impact and urgency of an incident, classified as P1 (Critical), P2 (High), P3 (Medium), or P4 (Low) under this Framework |
| SITREP | Situation Report — a structured update on the current status of an active incident |
| SOC | Security Operations Centre — the function responsible for continuous monitoring and detection of security incidents |
| TCRC | Technology and Cyber Risk Committee — the senior management committee responsible for oversight of technology and cyber risk |
| Triage | The initial assessment of an incident to determine its nature, scope, and severity to prioritise the response |
| [Additional term] | [Definition] |

---

### Appendix H — Amendment Log and Distribution List

#### Amendment Log

*Record all amendments made to this document between full version releases.*

| Amendment Ref | Date | Section Amended | Nature of Amendment | Authorised By |
|---|---|---|---|---|
| [Ref] | [Date] | [Section] | [Description] | [Name, Title] |

#### Distribution List

*This document has been distributed to the following individuals and functions. All recipients are responsible for ensuring they are using the current version.*

| Name / Function | Role | Date of Distribution | Version |
|---|---|---|---|
| Chief Executive Officer | Senior Leadership | [Date] | 1.0 |
| Chief Risk Officer | Senior Leadership | [Date] | 1.0 |
| Chief Technology Officer | Senior Leadership | [Date] | 1.0 |
| Chief Information Security Officer | Senior Leadership | [Date] | 1.0 |
| Chief Compliance Officer | Senior Leadership | [Date] | 1.0 |
| Head of Regulatory Affairs | Document Owner | [Date] | 1.0 |
| Head of Technology Risk | Reviewer | [Date] | 1.0 |
| Head of IT Operations | Operational | [Date] | 1.0 |
| SOC Lead | Operational | [Date] | 1.0 |
| Data Protection Officer | Operational | [Date] | 1.0 |
| Legal Counsel | Advisory | [Date] | 1.0 |
| Head of Communications | Advisory | [Date] | 1.0 |
| Board Risk Committee (via Secretariat) | Governance | [Date] | 1.0 |
| Internal Audit | Oversight | [Date] | 1.0 |
| [Additional recipient] | [Role] | [Date] | 1.0 |

---

*End of Document*

---

**Document Footer**

| Field | Detail |
|---|---|
| Document Title | Incident Classification Framework |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | Head of Regulatory Affairs, [Organisation Name] |
| Page Count | [X] pages |

*This document is subject to [Organisation Name]'s document control procedures. The master copy of this document is maintained in [specify document management system]. Printed copies are uncontrolled. Verify the current version before use.*