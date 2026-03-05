# Technology Risk Management Framework

---

**[Organization Name]**
*Technology Risk Management Framework*

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
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 9.1 |

---

> **Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name] and must not be disclosed to external parties without the prior written approval of the Chief Risk Officer. Any printed copy of this document is considered uncontrolled. Always refer to the document management system for the current version.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Scope and Objectives](#2-scope-and-objectives)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Governance Structure](#4-governance-structure)
5. [Technology Risk Management Methodology and Approach](#5-technology-risk-management-methodology-and-approach)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Technology Risk Identification](#7-technology-risk-identification)
8. [Technology Risk Assessment and Measurement](#8-technology-risk-assessment-and-measurement)
9. [Technology Risk Treatment and Controls](#9-technology-risk-treatment-and-controls)
10. [Technology Risk Reporting](#10-technology-risk-reporting)
11. [Implementation Roadmap](#11-implementation-roadmap)
12. [Monitoring and Review Mechanisms](#12-monitoring-and-review-mechanisms)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Executive Summary

*Provide a high-level overview of the Technology Risk Management Framework, its strategic purpose, and its alignment with the institution's overall risk appetite and BNM RMiT requirements. This section should be written for senior leadership and Board-level audiences.*

### 1.1 Overview

[Organization Name] (hereinafter referred to as "the Institution") operates within a rapidly evolving technology landscape that introduces complex and dynamic risks to the delivery of financial services, the protection of customer data, and the resilience of critical systems. This Technology Risk Management Framework (hereinafter referred to as "the Framework" or "TRMF") establishes the Institution's comprehensive approach to identifying, assessing, treating, monitoring, and reporting technology risks in a structured and consistent manner.

The Framework is developed in accordance with the requirements set out in Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, with specific reference to Clause 9.1, which mandates that financial institutions establish and maintain a robust technology risk management framework approved by the Board of Directors.

### 1.2 Strategic Context

*Describe the Institution's strategic direction with respect to technology, including digital transformation initiatives, cloud adoption, or other relevant programmes that elevate technology risk significance.*

[Organization Name] has embarked on a [describe strategic technology programme, e.g., digital transformation journey / cloud migration programme / core banking modernisation initiative] that significantly increases the Institution's reliance on technology as a strategic enabler. As technology becomes increasingly central to business operations, the identification and management of technology risks must be embedded within the Institution's enterprise risk management (ERM) culture.

Key strategic imperatives that necessitate a robust TRMF include:

- **Digital Service Delivery:** [Describe the Institution's digital channels and their criticality to business operations]
- **Third-Party Technology Dependencies:** [Describe reliance on technology service providers, cloud platforms, or outsourced technology functions]
- **Regulatory Compliance:** Adherence to BNM RMiT, PDPA 2010, and NACSA cybersecurity requirements
- **Cyber Threat Landscape:** The increasing sophistication of cyber threats targeting Malaysian financial institutions
- **Operational Resilience:** Ensuring continuity of critical financial services in the event of technology disruptions

### 1.3 Framework Purpose

This Framework serves as the authoritative document governing how [Organization Name] manages technology risk across its entire organisation. It:

- Establishes the governance structures and accountability mechanisms for technology risk oversight
- Defines the risk management methodology applied to technology risks, including identification, assessment, treatment, and monitoring
- Articulates the Institution's technology risk appetite and tolerance thresholds
- Prescribes reporting requirements to the Board, senior management, and regulators
- Ensures compliance with all applicable BNM RMiT requirements

### 1.4 Key Outcomes

The implementation of this Framework is designed to achieve the following outcomes:

| Outcome | Description | Measurement |
|---|---|---|
| Regulatory Compliance | Full compliance with BNM RMiT Clause 9.1 and associated requirements | Zero material regulatory findings related to technology risk governance |
| Risk Visibility | Comprehensive and timely visibility of technology risks across the Institution | Percentage of technology assets covered by risk assessments |
| Risk Culture | Embedding technology risk awareness across all business and technology functions | Risk training completion rates; risk escalation frequency |
| Operational Resilience | Maintenance of critical technology services within defined recovery objectives | RTO/RPO achievement rates across critical systems |
| Cyber Resilience | Protection of systems and data against cyber threats | Cyber incident rates; mean time to detect and respond |

---

## 2. Scope and Objectives

*Define the precise boundaries of this Framework — what it covers, what is excluded, and what the Framework seeks to achieve. Be specific about the organisational entities, technology assets, and risk categories in scope.*

### 2.1 Scope

#### 2.1.1 Organisational Scope

This Framework applies to all entities, business units, departments, and subsidiaries of [Organization Name], including:

| Entity / Business Unit | Applicability | Notes |
|---|---|---|
| [Business Unit 1, e.g., Retail Banking] | Full Application | All technology systems supporting retail operations |
| [Business Unit 2, e.g., Corporate Banking] | Full Application | All technology systems supporting corporate operations |
| [Business Unit 3, e.g., Treasury] | Full Application | Trading and settlement platforms |
| [Business Unit 4, e.g., Operations] | Full Application | Core banking and payment infrastructure |
| [Subsidiary 1] | Full Application | Where technology services are shared or interdependent |
| [Subsidiary 2] | Partial Application | [Specify applicable sections] |
| Third-Party Technology Service Providers | Applicable via Contractual Obligations | Covered under Clause 9.3 (Outsourcing Risk) |

#### 2.1.2 Technology Asset Scope

This Framework applies to all technology assets owned, operated, managed, or relied upon by [Organization Name], including but not limited to:

- **Application Systems:** Core banking platforms, internet and mobile banking applications, payment systems, treasury management systems, customer relationship management (CRM) systems, and all other business applications
- **Infrastructure:** Servers, storage, networking equipment, data centres, end-user devices, and cloud platforms
- **Data Assets:** Customer data, transactional data, financial data, and all data classified under the Institution's Data Classification Policy
- **Technology Processes:** Change management, patch management, incident management, access management, and all other IT service management processes
- **Third-Party Technology Services:** Cloud service providers, software-as-a-service (SaaS) platforms, technology outsourcing arrangements, and managed service providers
- **Emerging Technologies:** Artificial intelligence and machine learning systems, robotic process automation (RPA), open banking APIs, and other emerging technology deployments

#### 2.1.3 Risk Category Scope

This Framework covers the following technology risk categories as defined in BNM RMiT:

| Risk Category | Description | BNM RMiT Reference |
|---|---|---|
| Cybersecurity Risk | Risks arising from cyber threats including malware, ransomware, phishing, and advanced persistent threats | Clause 11 |
| IT Infrastructure Risk | Risks related to hardware, software, networking, and data centre operations | Clause 10 |
| IT Project and Change Risk | Risks arising from technology projects, changes, and implementations | Clause 9.4 |
| Third-Party Technology Risk | Risks from technology outsourcing and third-party service dependencies | Clause 9.3 |
| Data Risk | Risks related to data integrity, availability, confidentiality, and privacy | Clause 9.2 |
| Technology Operational Risk | Risks from technology failures, human error, and process breakdowns | Clause 9.1 |
| Emerging Technology Risk | Risks from the adoption of new and emerging technologies | Clause 12 |

#### 2.1.4 Exclusions

The following are explicitly excluded from the scope of this Framework:

- Non-technology operational risks, which are governed under the Institution's Operational Risk Management Framework
- Financial risks (credit, market, liquidity), which are governed under their respective risk frameworks
- [Any other specific exclusions relevant to the Institution]

### 2.2 Objectives

The primary objectives of this Technology Risk Management Framework are:

**Objective 1 — Establish Governance**
Establish clear, accountable, and effective governance structures for the oversight and management of technology risk at all levels of the organisation, from the Board of Directors to operational technology teams.

**Objective 2 — Ensure Regulatory Compliance**
Ensure full and demonstrable compliance with BNM RMiT policy requirements, in particular Clause 9.1 and associated provisions, as well as all other applicable technology-related regulatory obligations.

**Objective 3 — Embed Risk Management**
Embed technology risk management practices into the Institution's day-to-day operations, project delivery, change management, and strategic planning processes.

**Objective 4 — Protect Critical Assets**
Protect the confidentiality, integrity, and availability of the Institution's critical technology systems, infrastructure, and data assets.

**Objective 5 — Enable Informed Decision-Making**
Provide senior management and the Board with timely, accurate, and actionable technology risk information to support sound business decisions.

**Objective 6 — Foster Risk Culture**
Foster a culture of technology risk awareness and accountability across all levels of the organisation.

**Objective 7 — Support Operational Resilience**
Ensure the Institution maintains the resilience of critical technology services and can effectively recover from technology disruptions within defined recovery time and recovery point objectives.

---

## 3. Regulatory and Policy Context

*Describe the regulatory environment in which the Institution operates, with specific reference to BNM RMiT and other applicable regulations. This section establishes the legal and regulatory basis for the Framework.*

### 3.1 Regulatory Framework

[Organization Name] is a [licensed financial institution / bank / investment bank / insurance company / payment system operator] regulated by Bank Negara Malaysia (BNM) under the [Financial Services Act 2013 / Islamic Financial Services Act 2013 / other applicable legislation]. As a regulated entity, [Organization Name] is required to comply with all BNM policy documents applicable to its operations, including the Risk Management in Technology (RMiT) Policy Document.

### 3.2 Bank Negara Malaysia Risk Management in Technology (RMiT)

The BNM RMiT Policy Document establishes minimum requirements for technology risk management in Malaysian financial institutions. The following table maps key RMiT requirements to sections of this Framework:

| RMiT Clause | Requirement | Framework Section |
|---|---|---|
| 9.1 | Technology Risk Management Framework | Full document |
| 9.1.1 | Board approval of the TRMF | Section 4 (Governance) |
| 9.1.2 | Technology risk appetite | Section 5 (Methodology) |
| 9.1.3 | Risk identification and assessment | Section 7 & 8 |
| 9.1.4 | Risk treatment and controls | Section 9 |
| 9.1.5 | Risk monitoring and reporting | Section 10 & 12 |
| 9.2 | Technology governance | Section 4 |
| 9.3 | Technology outsourcing risk | Section 7.4 |
| 9.4 | IT project risk | Section 7.5 |
| 10 | IT infrastructure resilience | Section 9.3 |
| 11 | Cybersecurity risk management | Section 7.1, 9.2 |
| 12 | Emerging technology risk | Section 7.6 |

### 3.3 Other Applicable Regulations and Standards

This Framework also gives consideration to the following applicable regulations, standards, and guidelines:

| Regulation / Standard | Issuing Authority | Applicability |
|---|---|---|
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Data protection obligations |
| National Cyber Security Policy (NCSP) | NACSA | National cybersecurity requirements |
| NACSA Critical Information Infrastructure (CII) Framework | NACSA | CII designation requirements |
| Payment Card Industry Data Security Standard (PCI DSS) | PCI Security Standards Council | Card payment data protection |
| ISO/IEC 27001 Information Security Management | ISO/IEC | Information security best practice |
| ISO 22301 Business Continuity Management | ISO | Business continuity best practice |
| NIST Cybersecurity Framework (CSF) | NIST | Cybersecurity risk management |
| COBIT 2019 | ISACA | IT governance and management |
| BNM JIS (Joint IT Supervision) Requirements | BNM | [Applicable if subject to JIS] |
| [Other applicable regulations] | [Issuing Authority] | [Description] |

### 3.4 Internal Policy Alignment

This Framework is to be read in conjunction with, and is supported by, the following internal policies and documents of [Organization Name]:

| Internal Policy / Document | Document ID | Relationship |
|---|---|---|
| Enterprise Risk Management Framework | [Doc ID] | Parent framework |
| Information Security Policy | [Doc ID] | Subordinate policy |
| Cybersecurity Policy | [Doc ID] | Subordinate policy |
| IT Change Management Policy | [Doc ID] | Subordinate policy |
| Business Continuity Management Framework | [Doc ID] | Related framework |
| Data Governance Framework | [Doc ID]| Related framework |
| Technology Outsourcing Policy | [Doc ID] | Subordinate policy |
| IT Asset Management Policy | [Doc ID] | Subordinate policy |
| Incident Management Policy | [Doc ID] | Subordinate policy |
| [Other relevant policies] | [Doc ID] | [Relationship] |

---

## 4. Governance Structure

*Detail the governance architecture for technology risk management, including the role of the Board, Board committees, management committees, and operational-level governance bodies. Include committee mandates, composition, and meeting frequencies.*

### 4.1 Governance Principles

The governance of technology risk within [Organization Name] is guided by the following principles:

- **Accountability:** Clear assignment of accountability for technology risk management at all levels of the organisation
- **Independence:** The risk management function maintains independence from the technology function it oversees
- **Transparency:** Technology risk information is communicated openly and accurately to all relevant stakeholders
- **Proportionality:** Governance structures and controls are proportionate to the nature, scale, and complexity of technology risks
- **Integration:** Technology risk governance is integrated with the Institution's broader enterprise risk management framework

### 4.2 Three Lines of Defence Model

[Organization Name] adopts the Three Lines of Defence model for the governance and management of technology risk:

```
┌─────────────────────────────────────────────────────────────────┐
│                    BOARD OF DIRECTORS                           │
│              Board Risk Management Committee                    │
│              Board Audit Committee                              │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│                  SENIOR MANAGEMENT                              │
│         Management Risk Committee / IT Steering Committee       │
└─────────────────────────────────────────────────────────────────┘
         │                    │                         │
┌────────────────┐  ┌─────────────────────┐  ┌──────────────────┐
│  FIRST LINE    │  │    SECOND LINE       │  │   THIRD LINE     │
│  OF DEFENCE    │  │    OF DEFENCE        │  │  OF DEFENCE      │
│                │  │                      │  │                  │
│ Business Units │  │ Risk Management      │  │ Internal Audit   │
│ IT Department  │  │ Function (CRO)       │  │                  │
│ Technology     │  │ Compliance Function  │  │ External Audit   │
│ Operations     │  │ Information Security │  │                  │
└────────────────┘  └─────────────────────┘  └──────────────────┘
```

| Line of Defence | Primary Responsibility | Key Functions |
|---|---|---|
| **First Line** | Owns and manages technology risks within business and technology operations | Technology risk identification, day-to-day controls implementation, risk self-assessments, KRI monitoring |
| **Second Line** | Provides oversight, challenge, and independent monitoring of technology risks | Technology risk framework ownership, policy development, risk appetite setting, regulatory reporting |
| **Third Line** | Provides independent assurance on the effectiveness of risk management and controls | Technology audit, control testing, regulatory examination support |

### 4.3 Board-Level Governance

#### 4.3.1 Board of Directors

*Describe the Board's overarching responsibility for technology risk governance.*

The Board of Directors is ultimately responsible for the governance of technology risk at [Organization Name]. The Board's responsibilities in relation to technology risk management include:

- Approving the Technology Risk Management Framework and any material amendments thereto
- Approving the Institution's technology risk appetite statement
- Providing strategic oversight of significant technology risks and ensuring adequate resources are allocated to technology risk management
- Receiving and reviewing technology risk reports at least annually, or more frequently as required
- Ensuring that the Institution's technology risk management capabilities are commensurate with the Institution's technology risk profile
- Ensuring that the Chief Risk Officer and other senior technology risk management roles are filled by qualified and experienced individuals

#### 4.3.2 Board Risk Management Committee (BRMC)

| Attribute | Details |
|---|---|
| **Committee Name** | Board Risk Management Committee (BRMC) |
| **Chair** | Independent Non-Executive Director |
| **Members** | [List of members, e.g., minimum three independent non-executive directors] |
| **Meeting Frequency** | Quarterly (minimum); additional meetings as required |
| **Quorum** | [Specify quorum requirement, e.g., majority of members] |
| **Reporting to** | Board of Directors |

**Technology Risk Responsibilities:**

- Review and recommend to the Board the approval of the Technology Risk Management Framework and technology risk appetite
- Provide Board-level oversight of the Institution's technology risk profile
- Review material technology risk incidents and ensure adequate management response
- Receive and review the quarterly Technology Risk Management Report
- Review and endorse significant technology risk treatment plans and remediation activities
- Oversee the Institution's compliance with BNM RMiT requirements

#### 4.3.3 Board Audit Committee (BAC)

| Attribute | Details |
|---|---|
| **Committee Name** | Board Audit Committee (BAC) |
| **Chair** | Independent Non-Executive Director (must not chair BRMC) |
| **Members** | [List of members, e.g., minimum three independent non-executive directors] |
| **Meeting Frequency** | Quarterly (minimum) |
| **Reporting to** | Board of Directors |

**Technology Risk Responsibilities:**

- Receive and review the Internal Audit function's technology audit reports and findings
- Oversee the remediation of material technology audit findings
- Ensure that the internal audit function has adequate competency and resources to audit technology risks
- Receive reports on technology-related regulatory examination findings and management responses

### 4.4 Senior Management Governance

#### 4.4.1 Management Risk Committee (MRC)

| Attribute | Details |
|---|---|
| **Committee Name** | Management Risk Committee (MRC) |
| **Chair** | Chief Risk Officer (CRO) |
| **Members** | Chief Executive Officer, Chief Financial Officer, Chief Technology Officer, Chief Information Security Officer, Chief Operating Officer, Chief Compliance Officer, [Other relevant members] |
| **Meeting Frequency** | Monthly (minimum); more frequently as required |
| **Quorum** | [Specify quorum requirement] |
| **Reporting to** | Board Risk Management Committee |

**Technology Risk Responsibilities:**

- Review and approve management-level technology risk policies and standards
- Monitor the Institution's technology risk profile against the approved risk appetite
- Review and approve significant technology risk treatment plans
- Escalate material technology risks to the BRMC
- Review technology risk incidents and ensure appropriate remediation
- Review and approve the Technology Risk Management Report prior to submission to BRMC

#### 4.4.2 IT Steering Committee (ITSC)

| Attribute | Details |
|---|---|
| **Committee Name** | IT Steering Committee (ITSC) |
| **Chair** | Chief Technology Officer (CTO) / [Chief Executive Officer] |
| **Members** | Chief Risk Officer, Chief Information Security Officer, Chief Operating Officer, Heads of Business Units, [Other relevant members] |
| **Meeting Frequency** | Monthly |
| **Quorum** | [Specify quorum requirement] |
| **Reporting to** | Management Risk Committee |

**Technology Risk Responsibilities:**

- Oversight of the IT strategy and its alignment with business objectives and risk appetite
- Approval of significant technology investments and projects, including associated risk assessments
- Oversight of critical technology projects and change programmes
- Review of technology service performance and resilience metrics
- Oversight of technology vendor and third-party management

#### 4.4.3 Cybersecurity Committee

| Attribute | Details |
|---|---|
| **Committee Name** | Cybersecurity Committee |
| **Chair** | Chief Information Security Officer (CISO) |
| **Members** | Chief Risk Officer, Chief Technology Officer, Head of IT Operations, Head of IT Risk, [Other relevant members] |
| **Meeting Frequency** | Monthly; emergency meetings as required |
| **Reporting to** | Management Risk Committee |

**Technology Risk Responsibilities:**

- Oversight of the cybersecurity risk posture of the Institution
- Review and approval of cybersecurity policies, standards, and procedures
- Review of cybersecurity incident trends and significant incidents
- Oversight of vulnerability management and threat intelligence activities
- Review of cybersecurity awareness and training programmes

### 4.5 Operational-Level Governance

#### 4.5.1 Technology Risk Management Function

*Describe the dedicated technology risk management function within the second line of defence.*

The Technology Risk Management function, under the Chief Risk Officer, is responsible for the day-to-day management and oversight of the Technology Risk Management Framework. This function:

- Maintains and updates the Framework and supporting policies, standards, and procedures
- Develops and monitors the technology risk appetite and key risk indicators
- Coordinates technology risk assessments across all business and technology functions
- Prepares technology risk reports for management and Board-level committees
- Provides guidance to first-line functions on technology risk management practices
- Manages the relationship with BNM on technology risk-related supervisory matters

#### 4.5.2 Information Security Function

*Describe the role of the Information Security / CISO function in technology risk governance.*

The Information Security function, under the Chief Information Security Officer (CISO), is responsible for the day-to-day management of information and cybersecurity risks. This function operates within the second line of defence and:

- Develops and maintains the Information Security Policy and Cybersecurity Policy
- Monitors the cybersecurity threat landscape and provides threat intelligence
- Manages security operations, including the Security Operations Centre (SOC)
- Oversees vulnerability management, penetration testing, and security assessments
- Manages cybersecurity incident response

#### 4.5.3 Internal Audit Function

The Internal Audit function provides independent assurance on the effectiveness of technology risk management controls and governance processes. Specifically:

- Conducts technology audits and cybersecurity audits in accordance with the annual audit plan
- Reports audit findings and recommendations to the Board Audit Committee
- Follows up on the remediation of technology audit findings
- Maintains competency in technology audit methodologies and tools

### 4.6 Governance Escalation Framework

*Define the escalation thresholds and pathways for technology risk events and issues.*

The following escalation framework applies to technology risk events, issues, and breaches of risk appetite:

| Severity Level | Criteria | Immediate Notification | Formal Escalation |
|---|---|---|---|
| **Critical** | Material technology failure; significant data breach; ransomware attack; regulatory breach | CRO, CISO, CTO, CEO within 1 hour | BRMC within 24 hours; BNM as required |
| **High** | Significant system outage (> [X] hours); material control failure; high-risk audit finding | CRO, CISO, CTO within 4 hours | MRC within 48 hours; BRMC at next meeting |
| **Medium** | Moderate system disruption; medium-risk control gap; repeated low-severity incidents | Head of IT Risk within same business day | MRC at next meeting |
| **Low** | Minor incidents; low-risk control gaps; near-misses | Documented in risk register | Quarterly risk report |

---

## 5. Technology Risk Management Methodology and Approach

*Describe the end-to-end methodology used by the Institution to manage technology risks, including the risk management life cycle, risk appetite framework, and the tools and systems used.*

### 5.1 Technology Risk Management Life Cycle

[Organization Name] adopts a continuous technology risk management life cycle consisting of the following phases:

```
┌─────────────────────────────────────────────────────────────────┐
│                TECHNOLOGY RISK MANAGEMENT LIFE CYCLE            │
│                                                                 │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐    │
│  │  IDENTIFY │──▶│  ASSESS  │──▶│  TREAT   │──▶│ MONITOR  │    │
│  │          │   │          │   │          │   │ & REPORT │    │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘    │
│        ▲                                             │          │
│        └─────────────────────────────────────────────┘         │
│                    Continuous Feedback Loop                     │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Technology Risk Appetite

#### 5.2.1 Risk Appetite Statement

*The Board-approved Technology Risk Appetite Statement defines the level of technology risk the Institution is willing to accept in pursuit of its strategic objectives. This must be formally approved by the Board.*

[Organization Name]'s Board of Directors has approved the following Technology Risk Appetite Statement:

> *"[Organization Name] has a [low / low-to-medium] appetite for technology risk. The Institution will invest in robust technology risk management capabilities to protect the confidentiality, integrity, and availability of its systems and data, maintain the trust of its customers, and comply with all applicable regulatory requirements. The Institution accepts that residual technology risks will exist and will ensure that such risks are identified, assessed, treated, and monitored in accordance with this Framework."*

#### 5.2.2 Risk Appetite Thresholds

The following quantitative and qualitative thresholds define the boundaries of the Institution's technology risk appetite:

| Risk Dimension | Risk Appetite Metric | Green (Within Appetite) | Amber (Approaching Limit) | Red (Breached) |
|---|---|---|---|---|
| **Cybersecurity** | Number of critical/high severity cybersecurity incidents per quarter | 0 critical, ≤ 2 high | 1 critical or 3-5 high | > 1 critical or > 5 high |
| **System Availability** | Unplanned downtime of Tier 1 critical systems (hours per quarter) | ≤ [X] hours | [X+1] to [Y] hours | > [Y] hours |
| **Data Integrity** | Number of data integrity incidents per quarter | 0 high severity | 1-2 medium severity | > 2 medium or any high severity |
| **Recovery Objectives** | Percentage of critical systems achieving RTO/RPO | ≥ 95% | 90-94% | < 90% |
| **Regulatory Compliance** | Material regulatory findings related to technology risk | 0 | 1 low-severity finding | Any medium/high severity finding |
| **Third-Party Risk** | Critical third-party technology providers with unresolved high-risk findings | 0 | 1-2 | > 2 |
| **IT Change** | Failed or emergency changes causing production incidents | ≤ [X]% of changes | [X+1%] to [Y%] | > [Y%] |
| **Vulnerability Management** | Critical unpatched vulnerabilities (> 30 days) | 0 | 1-3 | > 3 |
| **Audit Findings** | Overdue high-risk internal audit findings | 0 | 1-2 | > 2 |

#### 5.2.3 Risk Tolerance

*The risk tolerance defines the acceptable variation around risk appetite thresholds. Breaches of risk tolerance trigger mandatory escalation and treatment actions.*

Risk tolerance limits are set at the levels indicated in the "Red" column of the table above. Any breach of a risk tolerance limit must be:

1. Immediately escalated to the Chief Risk Officer
2. Reported to the Management Risk Committee within [X] business days
3. Subject to a formal risk treatment plan approved by the MRC
4. Reported to the BRMC at the next scheduled meeting, or sooner for critical breaches

### 5.3 Risk Scoring Methodology

#### 5.3.1 Likelihood Assessment

Technology risks are assessed for likelihood of occurrence using the following scale:

| Likelihood Rating | Score | Criteria | Indicative Frequency |
|---|---|---|---|
| Rare | 1 | May occur only in exceptional circumstances | Less than once in 10 years |
| Unlikely | 2 | Could occur at some time | Once in 5-10 years |
| Possible | 3 | Might occur at some time | Once in 2-5 years |
| Likely | 4 | Will probably occur in most circumstances | Once in 1-2 years |
| Almost Certain | 5 | Is expected to occur in most circumstances | More than once per year |

#### 5.3.2 Impact Assessment

Technology risks are assessed for impact across the following dimensions:

| Impact Dimension | Description | Weighting |
|---|---|---|
| Financial | Direct financial losses, regulatory fines, remediation costs | [X%] |
| Operational | Disruption to services, productivity loss, customer impact | [X%] |
| Reputational | Damage to brand, customer trust, and market position | [X%] |
| Regulatory / Legal | Regulatory sanctions, legal liability, compliance breaches | [X%] |
| Strategic | Impact on the Institution's ability to achieve strategic objectives | [X%] |

| Impact Rating | Score | Financial Impact | Operational Impact | Regulatory Impact |
|---|---|---|---|---|
| Insignificant | 1 | < RM [X] | Minimal disruption; resolved within hours | No regulatory impact |
| Minor | 2 | RM [X] – RM [Y] | Limited disruption; resolved within 1 business day | Minor regulatory notification |
| Moderate | 3 | RM [Y] – RM [Z] | Significant disruption; resolved within 3 business days | Regulatory inquiry or low-severity finding |
| Major | 4 | RM [Z] – RM [W] | Severe disruption; resolved within 1 week | Regulatory enforcement action |
| Catastrophic | 5 | > RM [W] | Prolonged disruption; > 1 week to resolve | Licence revocation or criminal liability |

#### 5.3.3 Risk Rating Matrix

*The inherent and residual risk ratings are determined by multiplying the likelihood score by the impact score.*

| | **Insignificant (1)** | **Minor (2)** | **Moderate (3)** | **Major (4)** | **Catastrophic (5)** |
|---|---|---|---|---|---|
| **Almost Certain (5)** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Likely (4)** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Possible (3)** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Unlikely (2)** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Rare (1)** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

| Risk Rating | Score Range | Required Action | Escalation |
|---|---|---|---|
| **Critical** | 20-25 | Immediate treatment required; executive oversight | CEO, CRO, Board notification |
| **High** | 10-19 | Treatment plan required within 30 days | CRO, MRC notification |
| **Medium** | 5-9 | Treatment plan required within 90 days | Head of IT Risk notification |
| **Low** | 1-4 | Monitor and review; accept or treat at next cycle | Documented in risk register |

### 5.4 Risk Assessment Approach

#### 5.4.1 Assessment Types

[Organization Name] conducts the following types of technology risk assessments:

| Assessment Type | Frequency | Scope | Responsibility |
|---|---|---|---|
| Annual Technology Risk Assessment | Annual | All technology assets and risk categories | Technology Risk Management function |
| Application Risk Assessment | At project inception and annually | Individual applications and systems | IT Risk, Application Owners |
| Third-Party Technology Risk Assessment | Pre-engagement and annual | All technology service providers | Vendor Risk Management, IT Risk |
| Change Risk Assessment | Per change request | All significant changes to technology | IT Change Management, IT Risk |
| Cybersecurity Risk Assessment | Annual (plus ad hoc post-incidents) | Cybersecurity controls and threat landscape | CISO, Information Security |
| Business Continuity / DR Assessment | Annual (plus post-test) | Critical systems and recovery capabilities | IT Operations, Business Continuity |
| Emerging Technology Risk Assessment | At adoption decision point | New / emerging technology deployments | IT Risk, CTO |

#### 5.4.2 Technology Asset Criticality Classification

All technology assets are classified according to the following criticality tiers to prioritise risk management effort:

| Tier | Classification | Criteria | Examples | Required RTO | Required RPO |
|---|---|---|---|---|---|
| **Tier 1** | Mission Critical | Failure causes immediate and significant customer or regulatory impact | Core banking, payment systems, internet banking | ≤ [X] hours | ≤ [X] hours |
| **Tier 2** | Business Critical | Failure causes significant operational disruption but limited immediate customer impact | CRM, HR systems, internal communication platforms | ≤ [X] hours | ≤ [X] hours |
| **Tier 3** | Business Important | Failure causes inconvenience but workarounds exist | Non-critical reporting systems, internal tools | ≤ [X] days | ≤ [X] days |
| **Tier 4** | Non-Critical | Failure has minimal operational impact | Archival systems, non-essential tools | ≤ [X] days | ≤ [X] days |

---

## 6. Roles and Responsibilities

*Define the specific technology risk management responsibilities of each key role and function within the Institution. The RACI table below maps responsibilities to key technology risk management activities.*

### 6.1 Key Roles and Responsibilities

#### 6.1.1 Board of Directors

- Approves and provides ongoing oversight of the Technology Risk Management Framework
- Approves the technology risk appetite statement and tolerance thresholds
- Ensures adequate resources are allocated to technology risk management
- Receives annual (minimum) technology risk management reports

#### 6.1.2 Board Risk Management Committee (BRMC)

- Reviews and recommends Board approval of the TRMF and risk appetite
- Provides ongoing oversight of the technology risk profile
- Reviews material technology risk incidents and management responses
- Receives quarterly Technology Risk Management Reports

#### 6.1.3 Chief Executive Officer (CEO)

- Accountable to the Board for the effective management of technology risk
- Champions the technology risk culture across the Institution
- Ensures adequate resources are committed to technology risk management
- Escalates material technology risks to the Board as appropriate

#### 6.1.4 Chief Risk Officer (CRO)

- Owns and maintains the Technology Risk Management Framework
- Chairs the Management Risk Committee
- Responsible for the independent oversight and monitoring of technology risk
- Reports the Institution's technology risk profile to senior management and the Board
- Ensures compliance with BNM RMiT requirements
- Leads the Institution's engagement with BNM on technology risk supervisory matters

#### 6.1.5 Chief Technology Officer (CTO)

- Accountable for the management of technology risk within the IT function (first line of defence)
- Chairs the IT Steering Committee
- Ensures technology projects and changes are subject to appropriate risk assessment
- Responsible for the implementation and effectiveness of technology controls
- Ensures technology strategy is aligned with the approved risk appetite

#### 6.1.6 Chief Information Security Officer (CISO)

- Responsible for the management of cybersecurity and information security risks
- Chairs the Cybersecurity Committee
- Develops and maintains the Information Security and Cybersecurity policies
- Oversees security operations, incident response, and vulnerability management
- Reports cybersecurity risk posture to the CRO and relevant committees

#### 6.1.7 Head of Technology Risk Management

- Day-to-day management of the Technology Risk Management function
- Coordinates technology risk assessments and maintains the technology risk register
- Prepares technology risk reports for management and Board committees
- Provides guidance to first-line functions on risk management practices
- Monitors key risk indicators and escalates breaches

#### 6.1.8 Business Unit Heads / Technology Asset Owners

- Accountable for the technology risks within their respective business units
- Conduct and maintain technology risk self-assessments
- Implement and maintain controls for risks within their areas
- Escalate technology risk issues to the Technology Risk Management function
- Ensure staff within their areas complete required technology risk training

#### 6.1.9 IT Operations

- Responsible for the availability, performance, and resilience of technology infrastructure
- Implements and maintains operational technology controls
- Manages technology incidents and escalates as required
- Maintains disaster recovery capabilities and conducts regular DR tests

#### 6.1.10 Internal Audit

- Provides independent assurance on the effectiveness of technology risk management
- Conducts technology and cybersecurity audits in accordance with the audit plan
- Reports findings to the Board Audit Committee and management
- Follows up on the remediation of audit findings

### 6.2 RACI Matrix — Technology Risk Management Activities

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | Board | BRMC | CEO | CRO | CTO | CISO | Head IT Risk | BU Heads | IT Ops | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve TRMF | A | C | C | R | C | C | I | I | I | I |
| Approve Risk Appetite | A | C | C | R | C | C | I | I | I | I |
| Maintain TRMF | I | I | I | A | C | C | R | C | I | I |
| Technology Risk Assessment | I | I | I | A | C | C | R | R | C | I |
| Risk Register Maintenance | I | I | I | A | C | C | R | R | I | I |
| Cybersecurity Risk Assessment | I | I | I | A/C | C | R | C | C | C | I |
| Third-Party Risk Assessment | I | I | I | A | C | C | R | C | I | I |
| Change Risk Assessment | I | I | I | C | A | C | C | C | R | I |
| KRI Monitoring | I | I | I | A | C | C | R | I | C | I |
| Risk Reporting (Quarterly) | I | A | I | R | C | C | R | I | I | I |
| Technology Incident Management | I | I | I | C | A | C | C | C | R | I |
| Incident Escalation | A | A | A | R | R | R | I | I | I | I |
| DR Testing | I | I | I | C | A | C | C | I | R | I |
| Technology Audit | A | A | I | C | C | C | C | I | C | R |
| Audit Finding Remediation | I | I | I | C | A/R | C | C | R | R | A |
| Staff Training | I | I | I | C | C | C | C | R | I | I |
| Regulatory Reporting | I | I | I | A | C | C | R | I | I | I |
| Vendor Risk Management | I | I | I | A | C | C | R | C | I | I |
| Framework Review | I | C | I | A | C | C | R | C | I | C |

---

## 7. Technology Risk Identification

*Describe the processes and methods used to identify technology risks across the Institution, including risk categorisation, the risk register, and specific risk identification approaches for key risk categories.*

### 7.1 Risk Identification Process

Technology risks are identified through the following mechanisms:

| Identification Mechanism | Description | Frequency | Responsibility |
|---|---|---|---|
| Risk and Control Self-Assessments (RCSA) | Structured self-assessment process conducted by first-line functions | Annual; triggered by significant changes | BU Heads, IT Risk |
| Technology Audits | Internal and external technology audits identify control gaps and risk exposures | Annual audit plan; ad hoc | Internal Audit |
| Vulnerability Scanning | Automated scanning of systems for known vulnerabilities | Continuous / Weekly | CISO, IT Operations |
| Penetration Testing | Simulated attacks to identify exploitable vulnerabilities | Annual (minimum); ad hoc | CISO, External Providers |
| Threat Intelligence | Monitoring of internal and external threat intelligence | Continuous | CISO, SOC |
| Technology Incident Analysis | Analysis of technology incidents to identify underlying risk factors | Post-incident; trend analysis quarterly | IT Risk, IT Operations |
| Change Risk Assessment | Risk assessment conducted for all significant technology changes | Per change | IT Change Management |
| Third-Party Risk Assessment | Assessment of technology risks from third-party service providers | Pre-engagement; annual | Vendor Risk Management |
| Business Impact Analysis | Assessment of technology asset criticality and dependencies | Annual; post-significant changes | IT Risk, BU Heads |
| Industry and Regulatory Intelligence | Monitoring of industry events, peer incidents, and regulatory guidance | Continuous | IT Risk, Compliance |

### 7.2 Technology Risk Categories

#### 7.2.1 Cybersecurity Risks

*List and describe the primary cybersecurity risk sub-categories applicable to the Institution.*

| Risk Sub-Category | Description | Example Threat Scenarios |
|---|---|---|
| Malware and Ransomware | Malicious software causing system disruption or data theft/encryption | Phishing-delivered ransomware; supply chain malware |
| Phishing and Social Engineering | Deception of employees to gain unauthorised access | Business email compromise; spear phishing |
| Unauthorised Access | Exploitation of authentication weaknesses or stolen credentials | Credential stuffing; insider threat |
| DDoS Attacks | Deliberate overwhelming of systems to cause service unavailability | Volumetric DDoS targeting internet banking |
| Data Exfiltration | Unauthorised extraction of sensitive customer or business data | APT-driven data theft; insider data theft |
| Supply Chain Compromise | Compromise of third-party software or services | Malicious software updates; compromised APIs |
| Advanced Persistent Threats (APT) | Nation-state or sophisticated actor campaigns | [Describe relevant APT scenarios] |

#### 7.2.2 IT Infrastructure Risks

| Risk Sub-Category | Description |
|---|---|
| Hardware Failure | Failure of servers, storage, networking equipment, or end-user devices |
| Software Failure | Application crashes, operating system failures, or database corruption |
| Network Failure | Network outages, latency issues, or connectivity failures |
| Data Centre Risks | Power failures, cooling failures, physical security breaches |
| Cloud Platform Risks | Cloud provider outages, misconfiguration, data residency issues |
| Capacity and Performance | Insufficient capacity to meet peak demand; performance degradation |

#### 7.2.3 IT Project and Change Risks

| Risk Sub-Category | Description |
|---|---|
| Project Delivery Failure | Cost overruns, schedule delays, or failure to deliver required functionality |
| Change-Induced Incidents | Production incidents caused by poorly tested or managed changes |
| Data Migration Errors | Data integrity issues arising from system migration or conversion activities |
| Integration Failures | Failures in integrating new systems with existing technology estate |
| Vendor Delivery Risk | Third-party vendors failing to deliver contracted technology services |

#### 7.2.4 Third-Party Technology Risks

| Risk Sub-Category | Description |
|---|---|
| Service Disruption | Third-party service provider experiencing outages or disruptions |
| Data Breach at Provider | Customer or business data breached at a third-party service provider |
| Provider Insolvency | Third-party technology provider ceasing operations |
| Concentration Risk | Excessive dependence on a single third-party technology provider |
| Compliance Risk | Third-party provider failing to meet regulatory requirements |

#### 7.2.5 Data Risks

| Risk Sub-Category | Description |
|---|---|
| Data Loss | Accidental or malicious deletion or corruption of data |
| Data Integrity | Inaccurate or inconsistent data affecting business decisions |
| Data Privacy | Unauthorised access to or disclosure of personal data |
| Data Residency | Data stored or processed in non-compliant jurisdictions |

### 7.3 Technology Risk Register

The Technology Risk Register is the central repository for recording all identified technology risks. The Register is maintained by the Technology Risk Management function and is updated on a continuous basis.

**Technology Risk Register — Required Fields:**

| Field | Description |
|---|---|
| Risk ID | Unique identifier for each risk (e.g., TR-001) |
| Risk Category | Category of technology risk (as per Section 7.2) |
| Risk Sub-Category | Sub-category of technology risk |
| Risk Description | Clear description of the risk event and its potential causes |
| Affected Assets | Technology assets affected by the risk |
| Asset Tier | Criticality tier of affected assets (Tier 1-4) |
| Risk Owner | Individual accountable for managing the risk |
| Inherent Likelihood | Likelihood rating before controls (1-5) |
| Inherent Impact | Impact rating before controls (1-5) |
| Inherent Risk Rating | Inherent risk score and rating |
| Existing Controls | Description of controls currently in place |
| Control Effectiveness | Assessment of control effectiveness (Effective / Partially Effective / Ineffective) |
| Residual Likelihood | Likelihood rating after considering existing controls (1-5) |
| Residual Impact | Impact rating after considering existing controls (1-5) |
| Residual Risk Rating | Residual risk score and rating |
| Risk Treatment | Agreed treatment action (Accept / Mitigate / Transfer / Avoid) |
| Treatment Plan | Description of additional treatment actions if not accepted |
| Treatment Owner | Individual responsible for executing treatment actions |
| Target Completion | Target date for treatment completion |
| Status | Status of treatment (Not Started / In Progress / Completed) |
| Last Review Date | Date of last risk review |
| Next Review Date | Date of next scheduled risk review |

### 7.4 Third-Party Technology Risk Identification

*Describe the specific process for identifying technology risks from third-party service providers.*

[Organization Name] maintains a **Third-Party Technology Provider Register** that captures all external providers of technology services. The following criteria determine the scope of providers subject to formal technology risk assessment:

| Provider Category | Assessment Required | Assessment Frequency |
|---|---|---|
| Tier 1 — Critical: Cloud providers hosting Tier 1 systems | Full assessment | Annual; triggered by contract renewal or significant incidents |
| Tier 2 — Important: SaaS providers for Tier 2 systems | Standard assessment | Annual |
| Tier 3 — Standard: Other technology service providers | Basic assessment | Every 2 years |

**Third-Party Risk Assessment — Key Assessment Domains:**

- Security and cybersecurity controls
- Data protection and privacy compliance (PDPA)
- Business continuity and disaster recovery capabilities
- Subcontracting arrangements and fourth-party risks
- Regulatory compliance and audit rights
- Data residency and jurisdiction
- Financial stability and viability
- Incident management and notification obligations

### 7.5 IT Project Risk Identification

All technology projects with a budget exceeding RM [X] or duration exceeding [X] months are subject to a formal Technology Project Risk Assessment. The assessment is conducted:

- At project initiation (pre-approval)
- At each project stage gate
- Upon significant scope changes
- At project closure (post-implementation review)

**Technology Project Risk Assessment — Key Risk Areas:**

| Risk Area | Key Questions |
|---|---|
| Scope and Requirements | Are requirements clearly defined? Are scope boundaries established? |
| Technical Complexity | What is the technical complexity of the solution? Are there integration dependencies? |
| Vendor Delivery | Is the vendor experienced? What are the contractual protections? |
| Data Migration | What is the risk of data loss or corruption during migration? |
| Business Continuity | How will business continuity be maintained during the project? |
| Security | Have security requirements been embedded in the design? |
| Regulatory Compliance | Does the project comply with applicable regulatory requirements? |
| Resourcing | Are adequate skills and resources available? |

### 7.6 Emerging Technology Risk Identification

Prior to the adoption of any emerging technology, [Organization Name] conducts a formal **Emerging Technology Risk Assessment**. Emerging technologies subject to this assessment include, but are not limited to:

- Artificial Intelligence and Machine Learning (AI/ML)
- Generative AI tools and platforms
- Robotic Process Automation (RPA)
- Open Banking / API-based integration platforms
- Distributed Ledger Technology (DLT) / Blockchain
- Quantum computing applications
- [Other relevant emerging technologies]

---

## 8. Technology Risk Assessment and Measurement

*Describe the processes for assessing and measuring technology risks, including the use of key risk indicators (KRIs) and stress testing.*

### 8.1 Risk Assessment Process

The technology risk assessment process follows these steps:

**Step 1 — Asset Identification and Scoping**
Identify all technology assets within the assessment scope and classify by criticality tier.

**Step 2 — Threat and Vulnerability Identification**
For each asset, identify applicable threats and existing vulnerabilities.

**Step 3 — Inherent Risk Assessment**
Assess the inherent likelihood and impact of each identified risk, without considering existing controls.

**Step 4 — Control Assessment**
Identify and assess the effectiveness of existing controls for each risk. Controls are rated as:
- **Effective:** Control is operating as designed and providing adequate risk reduction
- **Partially Effective:** Control is in place but has identified weaknesses or gaps
- **Ineffective:** Control is not operating effectively or is absent

**Step 5 — Residual Risk Assessment**
Assess the residual likelihood and impact of each risk, taking into account the effectiveness of existing controls.

**Step 6 — Risk Treatment Decision**
For each risk, determine the appropriate treatment response:

| Treatment Option | Description | Applicable When |
|---|---|---|
| **Accept** | Formally accept the residual risk without additional treatment | Risk is within appetite and cost of treatment exceeds benefit |
| **Mitigate** | Implement additional controls to reduce likelihood or impact | Risk is above appetite and cost-effective treatment is available |
| **Transfer** | Transfer the risk (e.g., through insurance or contractual provisions) | Risk transfer is cost-effective and appropriate |
| **Avoid** | Eliminate the risk by ceasing the activity or asset | Risk is unacceptably high and cannot be cost-effectively mitigated |

**Step 7 — Treatment Planning and Implementation**
For risks where treatment is required, develop and implement a risk treatment plan with defined owners, actions, and timelines.

**Step 8 — Monitoring and Review**
Monitor the risk profile and treatment progress on an ongoing basis and review formally on the schedule defined in Section 12.

### 8.2 Key Risk Indicators (KRIs)

[Organization Name] maintains a set of Key Risk Indicators to provide early warning signals of increasing technology risk exposure. KRIs are monitored on a continuous or periodic basis and reported in the quarterly Technology Risk Management Report.

| KRI | Description | Measurement Unit | Green Threshold | Amber Threshold | Red Threshold | Reporting Frequency |
|---|---|---|---|---|---|---|
| **KRI-001** | Critical/High cybersecurity incidents | Number per month | 0 critical, ≤ 1 high | 1 critical or 2-3 high | > 1 critical or > 3 high | Monthly |
| **KRI-002** | Tier 1 system availability | % uptime | ≥ 99.9% | 99.5-99.89% | < 99.5% | Continuous |
| **KRI-003** | Mean time to detect (MTTD) security incidents | Hours | ≤ [X] hours | [X+1] to [Y] hours | > [Y] hours | Monthly |
| **KRI-004** | Mean time to respond (MTTR) to critical incidents | Hours | ≤ [X] hours | [X+1] to [Y] hours | > [Y] hours | Monthly |
| **KRI-005** | Unpatched critical vulnerabilities (> 30 days) | Number | 0 | 1-3 | > 3 | Monthly |
| **KRI-006** | Failed IT changes causing production incidents | % of total changes | ≤ [X]% | [X+1]% to [Y]% | > [Y]% | Monthly |
| **KRI-007** | Overdue high-risk IT audit findings | Number | 0 | 1-2 | > 2 | Quarterly |
| **KRI-008** | Third-party providers with unresolved high risks | Number | 0 | 1-2 | > 2 | Quarterly |
| **KRI-009** | Security awareness training completion | % of staff | ≥ 95% | 90-94% | < 90% | Quarterly |
| **KRI-010** | Phishing simulation click-through rate | % of staff | ≤ [X]% | [X+1]% to [Y]% | > [Y]% | Quarterly |
| **KRI-011** | IT systems with no current BCP/DR test | Number of Tier 1 systems | 0 | 1-2 | > 2 | Quarterly |
| **KRI-012** | Privileged access accounts reviewed on schedule | % reviewed | ≥ 95% | 90-94% | < 90% | Quarterly |
| **KRI-013** | Overdue critical or high risk treatment actions | Number | 0 | 1-3 | > 3 | Monthly |
| **KRI-014** | IT project delivery (on time and budget) | % of active projects | ≥ 80% | 70-79% | < 70% | Quarterly |
| **KRI-015** | Data breach / data loss incidents | Number per quarter | 0 | 1 (minor) | > 1 or any major | Continuous |

### 8.3 Technology Risk Stress Testing

*Describe how the Institution conducts stress testing and scenario analysis for technology risks.*

[Organization Name] conducts annual technology risk stress testing to assess the Institution's resilience to severe but plausible technology risk scenarios. Stress testing activities include:

| Stress Test / Scenario | Description | Frequency | Participants |
|---|---|---|---|
| Major Ransomware Attack Simulation | Simulated ransomware attack on critical systems; assess detection, containment, and recovery capabilities | Annual | IT, CISO, Business units, Senior management |
| Critical System Failure Simulation | Simulated failure of a Tier 1 system; assess manual workaround procedures and customer impact | Annual | IT Operations, Business units |
| Core Banking Outage Scenario | Tabletop exercise simulating extended core banking system outage | Annual | Senior management, IT, Operations |
| Major Data Breach Scenario | Tabletop exercise simulating large-scale customer data breach; assess notification obligations (PDPA, BNM) | Annual | Senior management, CISO, Compliance, Legal |
| Third-Party Provider Failure | Simulation of critical third-party technology provider failure | Annual | Vendor Management, IT, Business units |
| Distributed Denial of Service (DDoS) Attack | Simulated DDoS attack on internet banking infrastructure | [Frequency] | IT Operations, CISO |

---

## 9. Technology Risk Treatment and Controls

*Describe the controls framework, including the key control domains and specific controls implemented to manage technology risks. This section should be comprehensive and aligned with BNM RMiT control requirements.*

### 9.1 Technology Controls Framework

[Organization Name] has implemented a layered technology controls framework aligned with BNM RMiT requirements. Controls are organised into the following domains:

| Control Domain | Description | Primary Reference |
|---|---|---|
| Identity and Access Management | Controls governing user authentication, authorisation, and privileged access | BNM RMiT; ISO 27001 A.9 |
| Cybersecurity Operations | Controls for detecting, preventing, and responding to cybersecurity threats | BNM RMiT Clause 11 |
| Infrastructure Security | Controls securing technology infrastructure and networks | BNM RMiT Clause 10 |
| Data Protection and Privacy | Controls protecting the confidentiality, integrity, and availability of data | BNM RMiT; PDPA 2010 |
| IT Change Management | Controls governing changes to technology systems | BNM RMiT |
| IT Incident Management | Controls governing the management of technology incidents | BNM RMiT |
| Business Continuity and DR | Controls ensuring resilience and recovery of critical systems | BNM RMiT Clause 10 |
| Third-Party Management | Controls governing technology third-party relationships | BNM RMiT Clause 9.3 |
| Physical Security | Controls protecting physical technology assets and data centres | ISO 27001 A.11 |
| Security Awareness and Training | Controls ensuring staff competency in cybersecurity and technology risk | BNM RMiT |

### 9.2 Cybersecurity Controls

*List the key cybersecurity controls implemented by the Institution. Align with BNM RMiT Clause 11 requirements.*

| Control | Description | Implementation Status | Control Owner |
|---|---|---|---|
| Multi-Factor Authentication (MFA) | MFA enforced for all privileged access and remote access | [Implemented / In Progress / Planned] | CISO |
| Security Information and Event Management (SIEM) | Centralised log aggregation and security event monitoring | [Status] | CISO |
| Security Operations Centre (SOC) | 24/7 monitoring of security events and incident response | [Status] | CISO |
| Endpoint Detection and Response (EDR) | Advanced endpoint protection and threat detection on all endpoints | [Status] | CISO |
| Email Security Gateway | Advanced email filtering for phishing and malware | [Status] | CISO |
| Web Application Firewall (WAF) | Protection for internet-facing web applications | [Status] | CISO |
| Data Loss Prevention (DLP) | Controls preventing unauthorised exfiltration of sensitive data | [Status] | CISO |
| Vulnerability Management | Regular vulnerability scanning and patch management | [Status] | CISO |
| Penetration Testing | Annual penetration testing of critical systems | [Status] | CISO |
| Threat Intelligence Platform | Aggregation and operationalisation of cyber threat intelligence | [Status] | CISO |
| Network Segmentation | Segmentation of networks to limit lateral movement | [Status] | IT Operations |
| Privileged Access Management (PAM) | Control and monitoring of privileged user access | [Status] | CISO |
| Security Awareness Training | Regular training and phishing simulations for all staff | [Status] | CISO |
| Incident Response Plan | Documented and tested cybersecurity incident response plan | [Status] | CISO |

### 9.3 IT Infrastructure Resilience Controls

*Describe controls for infrastructure resilience, aligned with BNM RMiT Clause 10.*

| Control | Description | Implementation Status | Control Owner |
|---|---|---|---|
| Redundant Infrastructure | N+1 or higher redundancy for all Tier 1 systems and infrastructure components | [Status] | IT Operations |
| Backup Data Centre (BDC) | Geographically separated backup data centre for critical systems | [Status] | IT Operations |
| Automated Failover | Automated failover mechanisms for Tier 1 critical systems | [Status] | IT Operations |
| Data Backup and Recovery | Regular automated backups with tested restoration procedures | [Status] | IT Operations |
| Disaster Recovery Plan | Documented and tested DR plans for all Tier 1 and Tier 2 systems | [Status] | IT Operations |
| Business Continuity Plan (BCP) | Documented and tested BCPs for all critical business functions | [Status] | IT Operations, Business Continuity |
| Capacity Management | Proactive monitoring and management of system capacity | [Status] | IT Operations |
| Performance Monitoring | Real-time monitoring of system performance and availability | [Status] | IT Operations |

### 9.4 Control Testing and Assurance

Controls are subject to regular testing and assurance activities to verify their continued effectiveness:

| Assurance Activity | Description | Frequency | Conducted By |
|---|---|---|---|
| Control Self-Assessment | First-line assessment of control design and operating effectiveness | Annual | BU Heads, IT Risk |
| Independent Control Testing | Second-line independent testing of key controls | Annual | Technology Risk Management |
| Internal Audit | Independent audit of technology controls | Annual audit plan | Internal Audit |
| External Audit | Third-party assessment of technology controls | [Annual / Biennial] | External Auditors |
| Regulatory Examination | BNM supervisory examination of technology risk management | As scheduled by BNM | BNM |
| Penetration Testing | External penetration testing of critical systems | Annual (minimum) | External Security Providers |
| DR Testing | Testing of disaster recovery capabilities | Annual (minimum) | IT Operations |

---

## 10. Technology Risk Reporting

*Define the technology risk reporting framework, including the types of reports, reporting frequency, audience, and content requirements.*

### 10.1 Reporting Framework Overview

[Organization Name] maintains a comprehensive technology risk reporting framework to ensure timely and accurate communication of technology risk information to all relevant stakeholders.

| Report | Audience | Frequency | Prepared By | Approved By |
|---|---|---|---|---|
| Technology Risk Management Report | BRMC, Board | Quarterly | Head of IT Risk | CRO |
| Cybersecurity Status Report | Cybersecurity Committee, MRC | Monthly | CISO | CRO |
| Technology KRI Dashboard | MRC, ITSC | Monthly | Head of IT Risk | CRO |
| Technology Incident Report | MRC, BRMC (material incidents) | Post-incident; summarised monthly | IT Operations, Head of IT Risk | CRO |
| Third-Party Technology Risk Report | MRC, Vendor Risk Committee | Quarterly | Head of IT Risk | CRO |
| Technology Audit Report | BAC | Per audit completion | Internal Audit | Head of Internal Audit |
| DR Test Report | ITSC, MRC | Post-test | IT Operations | CTO |
| Annual Technology Risk Report | Board, BNM (if required) | Annual | Head of IT Risk | CRO, CEO |

### 10.2 Quarterly Technology Risk Management Report — Content Requirements

The Quarterly Technology Risk Management Report is the primary reporting mechanism for technology risk governance. It must include the following sections:

- **Executive Summary:** High-level summary of the technology risk profile, key developments, and actions taken
- **Technology Risk Appetite Monitoring:** Dashboard showing KRI status against appetite thresholds (Green / Amber / Red)
- **Technology Risk Register Summary:** Summary of the risk register, highlighting new, escalated, and closed risks
- **Significant Risk Exposures:** Detailed discussion of high and critical risks, including treatment progress
- **Cybersecurity Posture:** Summary of cybersecurity risk posture, including significant incidents and threat landscape
- **Third-Party Risk Summary:** Status of third-party technology risk assessments and material findings
- **IT Project Risk Summary:** Status of significant technology projects and associated risk exposures
- **Regulatory Compliance:** Status of compliance with BNM RMiT and other applicable requirements
- **Audit and Examination Findings:** Status of technology audit findings and regulatory examination findings
- **Upcoming Risk Events:** Emerging risks and planned risk management activities in the next quarter

### 10.3 Regulatory Reporting Obligations

[Organization Name] is required to report certain technology risk events to BNM in accordance with BNM RMiT requirements. The following table summarises mandatory regulatory reporting obligations:

| Event Type | BNM Reporting Obligation | Reporting Deadline | Responsible Function |
|---|---|---|---|
| Major Technology Incident (as defined by BNM) | Notification to BNM | As specified in BNM RMiT (refer to applicable clause) | CRO, Head of IT Risk |
| Significant Cybersecurity Incident | Notification to BNM | As specified in BNM RMiT | CISO, CRO |
| Material Data Breach | Notification to BNM and Personal Data Protection Commissioner | As specified in applicable regulation | CISO, Compliance, CRO |
| Material Change to Technology Risk Profile | Report to BNM | As required | CRO |
| Annual Technology Risk Assessment | Submission to BNM (if required) | [Specify deadline] | CRO |

---

## 11. Implementation Roadmap

*Describe the phased implementation plan for this Framework, including key milestones, dependencies, and success criteria. This section is particularly relevant for new or substantially revised frameworks.*

### 11.1 Implementation Overview

The implementation of this Technology Risk Management Framework is structured in three phases over [X] months, progressing from foundation-building through to full operational maturity:

| Phase | Name | Timeline | Key Focus |
|---|---|---|---|
| Phase 1 | Foundation | [Month 1] – [Month X] | Governance establishment; policy and process development |
| Phase 2 | Implementation | [Month X+1] – [Month Y] | Risk assessment execution; controls implementation; tooling |
| Phase 3 | Maturity | [Month Y+1] – [Month Z] | Embedding; continuous improvement; advanced capabilities |

### 11.2 Phase 1 — Foundation

**Objectives:** Establish the governance framework, approve key policies, and build foundational risk management capabilities.

| Milestone | Description | Target Date | Owner | Status |
|---|---|---|---|---|
| 1.1 | Board approval of Technology Risk Management Framework | [Date] | CRO | [Status] |
| 1.2 | Board approval of Technology Risk Appetite Statement | [Date] | CRO | [Status] |
| 1.3 | Establish Management Risk Committee and Technology Risk terms of reference | [Date] | CRO | [Status] |
| 1.4 | Appoint Head of Technology Risk Management | [Date] | CRO | [Status] |
| 1.5 | Develop and approve Technology Risk Management Policy | [Date] | Head of IT Risk | [Status] |
| 1.6 | Develop and approve Information Security Policy | [Date] | CISO | [Status] |
| 1.7 | Develop and approve Third-Party Technology Risk Policy | [Date] | Head of IT Risk | [Status] |
| 1.8 | Establish Technology Risk Register | [Date] | Head of IT Risk | [Status] |
| 1.9 | Develop Technology KRI framework and monitoring dashboard | [Date] | Head of IT Risk | [Status] |
| 1.10 | Conduct initial technology asset inventory and criticality classification | [Date] | Head of IT Risk, CTO | [Status] |

### 11.3 Phase 2 — Implementation

**Objectives:** Conduct comprehensive technology risk assessments, implement priority controls, and establish operational reporting.

| Milestone | Description | Target Date | Owner | Status |
|---|---|---|---|---|
| 2.1 | Complete annual technology risk assessment for all Tier 1 and Tier 2 systems | [Date] | Head of IT Risk | [Status] |
| 2.2 | Complete third-party technology risk assessments for all Tier 1 providers | [Date] | Head of IT Risk | [Status] |
| 2.3 | Implement priority cybersecurity controls identified in risk assessment | [Date] | CISO | [Status] |
| 2.4 | Implement Technology Risk Management system / GRC tool | [Date] | Head of IT Risk, IT | [Status] |
| 2.5 | Develop and deliver technology risk training programme | [Date] | Head of IT Risk, HR | [Status] |
| 2.6 | Conduct first quarterly Technology Risk Management Report | [Date] | Head of IT Risk | [Status] |
| 2.7 | Complete DR tests for all Tier 1 systems | [Date] | IT Operations | [Status] |
| 2.8 | Conduct first penetration test of critical systems | [Date] | CISO | [Status] |
| 2.9 | Establish Security Operations Centre (SOC) capability | [Date] | CISO | [Status] |
| 2.10 | Establish technology incident response procedures | [Date] | CISO, IT Operations | [Status] |

### 11.4 Phase 3 — Maturity

**Objectives:** Achieve full Framework maturity, embed risk culture, and develop advanced risk management capabilities.

| Milestone | Description | Target Date | Owner | Status |
|---|---|---|---|---|
| 3.1 | Achieve full technology risk register coverage for all Tier 1-3 assets | [Date] | Head of IT Risk | [Status] |
| 3.2 | Conduct annual technology risk stress testing exercise | [Date] | Head of IT Risk | [Status] |
| 3.3 | Implement continuous control monitoring capabilities | [Date] | CISO, IT Risk | [Status] |
| 3.4 | Develop technology risk metrics and reporting maturity | [Date] | Head of IT Risk | [Status] |
| 3.5 | Conduct technology risk culture assessment | [Date] | CRO, Head of IT Risk | [Status] |
| 3.6 | Conduct annual Framework review and update | [Date] | Head of IT Risk | [Status] |
| 3.7 | Achieve ISO 27001 certification (if applicable) | [Date] | CISO | [Status] |
| 3.8 | Establish threat intelligence sharing with industry bodies | [Date] | CISO | [Status] |

### 11.5 Resource Requirements

*Describe the human, financial, and technology resources required to implement and operate this Framework.*

| Resource Type | Description | Estimated Requirement | Budget Reference |
|---|---|---|---|
| Human Resources | Dedicated Technology Risk Management function staff | [X] FTE | [Budget code] |
| Human Resources | Information Security / CISO function staff | [X] FTE | [Budget code] |
| Technology | GRC (Governance, Risk, Compliance) platform | [Specification] | [Budget code] |
| Technology | Security Operations Centre tooling (SIEM, SOAR, EDR) | [Specification] | [Budget code] |
| External Services | Annual penetration testing | [Scope] | [Budget code] |
| External Services | Threat intelligence platform | [Scope] | [Budget code] |
| Training | Technology risk and security awareness training programme | [X] staff | [Budget code] |

---

## 12. Monitoring and Review Mechanisms

*Describe the ongoing monitoring and periodic review mechanisms that ensure the Framework remains effective, current, and fit for purpose.*

### 12.1 Continuous Monitoring

The following technology risk monitoring activities are conducted on a continuous or near-continuous basis:

| Monitoring Activity | Description | Tools / Mechanism | Responsibility |
|---|---|---|---|
| Security Event Monitoring | 24/7 monitoring of security events via SOC and SIEM | SIEM, SOC | CISO |
| System Availability Monitoring | Real-time monitoring of system availability and performance | IT monitoring tools | IT Operations |
| Vulnerability Scanning | Automated scanning for known vulnerabilities | Vulnerability scanner | CISO |
| Threat Intelligence Monitoring | Monitoring of cyber threat intelligence feeds | Threat intelligence platform | CISO |
| KRI Dashboard Monitoring | Real-time tracking of key risk indicators | GRC platform / dashboard | Head of IT Risk |
| Change Monitoring | Monitoring of technology changes and associated risk indicators | ITSM tool | IT Change Management |

### 12.2 Periodic Review Schedule

In addition to continuous monitoring, the following periodic reviews are conducted to ensure the ongoing effectiveness of the Framework:

| Review Activity | Description | Frequency | Responsibility | Reporting To |
|---|---|---|---|---|
| Monthly KRI Review | Review of monthly KRI performance against thresholds | Monthly | Head of IT Risk | MRC |
| Quarterly Technology Risk Assessment Review | Review of risk register for accuracy and completeness | Quarterly | Head of IT Risk | MRC, BRMC |
| Quarterly Control Effectiveness Review | Review of control effectiveness ratings | Quarterly | Head of IT Risk, CISO | MRC |
| Semi-Annual Policy Review | Review of supporting technology risk policies for currency | Semi-Annual | Head of IT Risk | MRC |
| Annual Technology Risk Assessment | Comprehensive annual risk assessment of all in-scope assets | Annual | Head of IT Risk | MRC, BRMC |
| Annual Framework Review | Formal review of the TRMF for continued relevance and effectiveness | Annual | CRO, Head of IT Risk | BRMC, Board |
| Annual DR Testing | Testing of disaster recovery capabilities | Annual | IT Operations | ITSC, MRC |
| Annual Penetration Testing | External penetration testing of critical systems | Annual | CISO | MRC, BRMC |
| Annual Stress Testing | Technology risk scenario and stress testing exercise | Annual | Head of IT Risk | MRC, BRMC |
| Annual Regulatory Compliance Review | Review of compliance status with BNM RMiT and other requirements | Annual | CRO, Compliance | MRC, BRMC |

### 12.3 Framework Review and Update Triggers

In addition to the scheduled annual review, this Framework shall be reviewed and updated when any of the following trigger events occur:

| Trigger | Description | Action Required |
|---|---|---|
| Regulatory Change | New or amended BNM, NACSA, or PDPA requirements affecting technology risk management | Review and update within [X] days of regulatory effective date |
| Significant Incident | Material technology incident or cybersecurity breach with significant impact | Post-incident review within [X] days; update Framework if systemic gaps identified |
| Material Organisational Change | Mergers, acquisitions, significant business expansion, or major technology transformation | Review and update prior to or within [X] days of change |
| Strategic Technology Change | Adoption of new technology platforms, cloud migration, or other significant technology change | Review and update prior to adoption |
| Significant Industry Events | Major technology incidents at peer institutions or in the industry | Ad hoc review; update if applicable |
| Audit or Regulatory Findings | Material findings from internal audit, external audit, or regulatory examination relating to the Framework | Review and update within [X] days of findings |

### 12.4 Framework Effectiveness Assessment

The effectiveness of this Framework is assessed annually using the following criteria:

| Effectiveness Criterion | Measurement Method | Target |
|---|---|---|
| Risk Register Coverage | Percentage of in-scope technology assets with current risk assessments | ≥ 95% |
| Risk Assessment Currency | Percentage of risks reviewed within required review cycle | ≥ 95% |
| Treatment Action Completion | Percentage of risk treatment actions completed by target date | ≥ 80% |
| KRI Reporting Timeliness | Percentage of KRI reports submitted on schedule | 100% |
| Regulatory Compliance | Number of material RMiT compliance findings | 0 |
| Staff Training Completion | Percentage of relevant staff completing technology risk training | ≥ 95% |
| Escalation Effectiveness | Percentage of escalations handled within defined timeframes | ≥ 95% |
| Control Effectiveness | Percentage of key controls rated as effective | ≥ 80% |

### 12.5 Continuous Improvement

Findings from monitoring activities, periodic reviews, audit results, incident lessons learned, and regulatory feedback are incorporated into a **Continuous Improvement Log** maintained by the Technology Risk Management function. The Continuous Improvement Log captures:

- Identified improvement opportunities
- Priority ranking of improvements
- Responsible owner for each improvement
- Target completion date
- Status of improvement implementation

Material improvements are incorporated into the Framework at the next scheduled review cycle or sooner if urgency demands.

---

## 13. Review and Approval

### 13.1 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial version | [Approved By] |
| [X.X] | [Date] | [Author Name], [Title] | [Description of changes] | [Approved By] |
| [X.X] | [Date] | [Author Name], [Title] | [Description of changes] | [Approved By] |

### 13.2 Document Approval Sign-Off

By signing below, the following individuals confirm that they have reviewed this document and approve its content and implementation.

| Role | Name | Signature | Date |
|---|---|---|---|
| **Chief Risk Officer (CRO)** | [Name] | _________________ | [Date] |
| **Chief Technology Officer (CTO)** | [Name] | _________________ | [Date] |
| **Chief Information Security Officer (CISO)** | [Name] | _________________ | [Date] |
| **Chief Executive Officer (CEO)** | [Name] | _________________ | [Date] |
| **Board Risk Management Committee (Chair)** | [Name] | _________________ | [Date] |
| **Board of Directors (Chair)** | [Name] | _________________ | [Date] |

### 13.3 Board Resolution Reference

This Framework was approved by the Board of Directors of [Organization Name] at its meeting held on [Date of Board Meeting], as recorded in Board Resolution No. [Resolution Number].

---

## 14. References

### 14.1 Regulatory References

| Reference | Document Title | Issuing Authority | Effective Date | Applicable Clauses |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Date] | 9.1, 9.2, 9.3, 9.4, 10, 11, 12 |
| BNM JIS | Joint Inspection Standards | Bank Negara Malaysia | [Date] | [Applicable clauses] |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | 2013 | [Applicable sections] |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | 2013 | [Applicable sections, if applicable] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2013 | [Applicable sections] |
| NCSP | National Cyber Security Policy | NACSA | [Date] | [Applicable sections] |
| [Other BNM Policy Documents] | [Title] | Bank Negara Malaysia | [Date] | [Applicable clauses] |

### 14.2 Standards and Frameworks Referenced

| Standard / Framework | Title | Version | Issuing Body |
|---|---|---|---|
| ISO/IEC 27001 | Information Security Management Systems | [Year] | ISO/IEC |
| ISO/IEC 27005 | Information Security Risk Management | [Year] | ISO/IEC |
| ISO 22301 | Business Continuity Management Systems | [Year] | ISO |
| NIST CSF | Cybersecurity Framework | [Version] | NIST |
| COBIT 2019 | Control Objectives for Information Technologies | 2019 | ISACA |
| PCI DSS | Payment Card Industry Data Security Standard | [Version] | PCI SSC |
| ITIL 4 | IT Service Management | 4 | AXELOS |
| FAIR | Factor Analysis of Information Risk | — | FAIR Institute |
| Three Lines Model | Three Lines Model | 2020 | IIA |

### 14.3 Internal Documents Referenced

| Document Title | Document ID | Owner |
|---|---|---|
| Enterprise Risk Management Framework | [Doc ID] | Chief Risk Officer |
| Information Security Policy | [Doc ID] | Chief Information Security Officer |
| Cybersecurity Policy | [Doc ID] | Chief Information Security Officer |
| IT Change Management Policy | [Doc ID] | Chief Technology Officer |
| Business Continuity Management Framework | [Doc ID] | [Owner] |
| Data Governance Framework | [Doc ID] | [Owner] |
| Technology Outsourcing Policy | [Doc ID] | Chief Risk Officer |
| IT Asset Management Policy | [Doc ID] | Chief Technology Officer |
| Incident Management Policy | [Doc ID] | Chief Technology Officer |
| Cybersecurity Incident Response Plan | [Doc ID] | Chief Information Security Officer |
| Disaster Recovery Plan | [Doc ID] | Chief Technology Officer |
| [Other relevant internal documents] | [Doc ID] | [Owner] |

---

## 15. Appendices

### Appendix A — Technology Risk Appetite Statement (Board-Approved)

*Attach or reproduce the full Board-approved Technology Risk Appetite Statement, including all quantitative thresholds and qualitative statements. This must be a standalone Board-approved document.*

[Attach Board-approved Technology Risk Appetite Statement]

---

### Appendix B — Technology Asset Inventory and Criticality Register

*Attach or reference the current Technology Asset Inventory and Criticality Register, showing all in-scope technology assets classified by criticality tier.*

| Asset ID | Asset Name | Asset Type | Business Owner | IT Owner | Criticality Tier | Key Business Functions Supported | Last Classified |
|---|---|---|---|---|---|---|---|
| [TA-001] | [Asset Name] | [Application / Infrastructure / Service] | [Name] | [Name] | [Tier 1-4] | [Description] | [Date] |
| [TA-002] | [Asset Name] | [Type] | [Name] | [Name] | [Tier] | [Description] | [Date] |

*See [Technology Asset Register — Document ID: [Doc ID]] for the complete and current register.*

---

### Appendix C — Technology Risk Register

*Reference the current Technology Risk Register maintained in the GRC platform.*

*The Technology Risk Register is maintained in [GRC Platform Name] and is accessible to authorised personnel at [system path / URL]. The current register contains [X] risks across all risk categories.*

*A summary extract of the register as at [Date] is provided below for reference:*

| Risk ID | Risk Category | Risk Description | Asset Tier | Inherent Rating | Residual Rating | Risk Owner | Review Date |
|---|---|---|---|---|---|---|---|
| [TR-001] | [Category] | [Description] | [Tier] | [Rating] | [Rating] | [Owner] | [Date] |
| [TR-002] | [Category] | [Description] | [Tier] | [Rating] | [Rating] | [Owner] | [Date] |

---

### Appendix D — Key Risk Indicator Definitions and Data Sources

*Provide detailed definitions, calculation methodologies, and data sources for each Key Risk Indicator listed in Section 8.2.*

| KRI ID | KRI Name | Definition | Numerator | Denominator | Data Source | Collection Method | Calculation Frequency |
|---|---|---|---|---|---|---|---|
| KRI-001 | Critical/High cybersecurity incidents | Number of cybersecurity incidents classified as Critical or High severity in the period | Count of Critical + High incidents | N/A | SOC / SIEM | Automated extraction | Monthly |
| KRI-002 | Tier 1 system availability | Percentage of scheduled uptime achieved by Tier 1 critical systems | Actual uptime minutes | Scheduled uptime minutes | IT monitoring tool | Automated | Continuous |
| [KRI-003] | [Name] | [Definition] | [Numerator] | [Denominator] | [Source] | [Method] | [Frequency] |

---

### Appendix E — Technology Risk Assessment Template

*Provide the standard template to be used for conducting technology risk assessments.*

**Technology Risk Assessment**

| Field | Details |
|---|---|
| Assessment ID | [ID] |
| Assessment Type | [Annual / Application / Third-Party / Change / Emerging Technology] |
| Assessment Scope | [Description of assets, systems, or functions assessed] |
| Assessment Date | [Date] |
| Conducted By | [Name and role] |
| Reviewed By | [Name and role] |

**Risk Assessment Findings:**

| # | Risk Description | Threat | Vulnerability | Inherent Likelihood (1-5) | Inherent Impact (1-5) | Inherent Risk Score | Existing Controls | Control Effectiveness | Residual Likelihood (1-5) | Residual Impact (1-5) | Residual Risk Score | Risk Rating | Recommended Treatment |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [Description] | [Threat] | [Vulnerability] | | | | [Controls] | [Effective/Partial/Ineffective] | | | | [Rating] | [Treatment] |
| 2 | [Description] | [Threat] | [Vulnerability] | | | | [Controls] | | | | | | |

**Assessment Conclusion:**

[Summarise the overall risk posture identified in the assessment, key risk areas, and priority treatment recommendations.]

---

### Appendix F — Third-Party Technology Risk Assessment Questionnaire

*Provide the standard questionnaire used for assessing technology risks posed by third-party service providers.*

**Section 1 — General Information**

| Question | Response |
|---|---|
| Legal entity name of the service provider | |
| Services provided to [Organization Name] | |
| Contract commencement date | |
| Contract expiry / renewal date | |
| Primary contact name and details | |
| Location(s) of service delivery | |
| Location(s) of data processing and storage | |
| Sub-processors / fourth parties utilised | |
| Relevant certifications held (ISO 27001, SOC 2, etc.) | |

**Section 2 — Cybersecurity Controls**

| No. | Assessment Question | Response | Evidence Required | Finding |
|---|---|---|---|---|
| 2.1 | Does the provider have a documented and Board-approved Information Security Policy? | Yes / No / Partial | Policy document | |
| 2.2 | Is multi-factor authentication enforced for all access to systems processing [Organization Name]'s data? | Yes / No / Partial | Screenshots / Audit report | |
| 2.3 | Does the provider conduct annual penetration testing by an independent third party? | Yes / No / Partial | Test report summary | |
| 2.4 | Does the provider have a Security Operations Centre or equivalent security monitoring capability? | Yes / No / Partial | Description | |
| 2.5 | How are security incidents notified to [Organization Name]? What are the notification timelines? | | SLA / Contract | |
| 2.6 | Has the provider experienced any significant cybersecurity incidents in the past 24 months? If yes, provide details. | | Incident disclosure | |

**Section 3 — Data Protection and Privacy**

| No. | Assessment Question | Response | Evidence Required | Finding |
|---|---|---|---|---|
| 3.1 | Does the provider comply with the Malaysian Personal Data Protection Act 2010 (PDPA)? | Yes / No | Compliance confirmation | |
| 3.2 | Is [Organization Name]'s data stored or processed outside Malaysia? If yes, which jurisdictions? | | Data flow diagram | |
| 3.3 | What data encryption standards are applied to [Organization Name]'s data at rest and in transit? | | Technical specification | |
| 3.4 | Does the provider have a documented data breach response and notification procedure? | Yes / No | Procedure document | |

**Section 4 — Business Continuity and Resilience**

| No. | Assessment Question | Response | Evidence Required | Finding |
|---|---|---|---|---|
| 4.1 | Does the provider have a documented and tested Business Continuity Plan (BCP)? | Yes / No | BCP summary | |
| 4.2 | Does the provider have a documented and tested Disaster Recovery Plan (DRP)? | Yes / No | DRP summary / test results | |
| 4.3 | What are the provider's committed RTO and RPO for services provided to [Organization Name]? | | SLA documentation | |
| 4.4 | When was the last DR test conducted and what were the results? | | DR test report | |

---

### Appendix G — Technology Incident Classification and Reporting Matrix

*Provide the standard incident classification scheme and reporting matrix for technology and cybersecurity incidents.*

| Incident Severity | Criteria | Examples | Internal Notification (within) | BNM Notification |
|---|---|---|---|---|
| **Severity 1 — Critical** | Tier 1 system unavailable; major data breach; significant cyber attack in progress | Core banking outage; ransomware attack; DDoS on internet banking | CRO, CISO, CTO, CEO — 30 minutes | As required by BNM RMiT |
| **Severity 2 — High** | Tier 1 system significantly degraded; medium-scale data breach; significant security event | Core banking performance degradation; unauthorised access to sensitive data | CRO, CISO, CTO — 2 hours | As required by BNM RMiT |
| **Severity 3 — Medium** | Tier 2 system unavailable; minor data loss; security anomaly under investigation | CRM system outage; phishing email reported by staff | Head of IT Risk, IT Operations — same business day | As required |
| **Severity 4 — Low** | Minor system disruptions; near-misses; single-user issues | Non-critical application slow performance; suspicious email detected and blocked | Logged in incident management system | Not required |

---

### Appendix H — Glossary of Terms

| Term | Definition |
|---|---|
| **Advanced Persistent Threat (APT)** | A sophisticated, stealthy, and continuous cyber attack, typically by nation-state actors or criminal organisations, targeting specific entities |
| **BNM** | Bank Negara Malaysia, the central bank of Malaysia |
| **Business Continuity Plan (BCP)** | A documented plan for maintaining critical business operations during and after a disruptive event |
| **Chief Information Security Officer (CISO)** | The senior executive responsible for information security and cybersecurity |
| **Chief Risk Officer (CRO)** | The senior executive responsible for enterprise risk management |
| **Chief Technology Officer (CTO)** | The senior executive responsible for technology strategy and operations |
| **Confidentiality, Integrity, Availability (CIA)** | The three core properties of information security |
| **Control** | A measure that modifies risk by reducing likelihood of occurrence or impact of a risk event |
| **Disaster Recovery (DR)** | The process of restoring systems and data following a disruptive event |
| **Distributed Denial of Service (DDoS)** | A cyber attack that overwhelms a system with traffic to make it unavailable |
| **GRC Platform** | Governance, Risk, and Compliance software platform |
| **Inherent Risk** | The level of risk before considering the effect of existing controls |
| **Key Risk Indicator (KRI)** | A metric that provides early warning of increasing risk exposure |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PDPA** | Personal Data Protection Act 2010 |
| **Penetration Testing** | Simulated cyber attack to identify vulnerabilities in systems |
| **Recovery Point Objective (RPO)** | The maximum acceptable amount of data loss measured in time |
| **Recovery Time Objective (RTO)** | The maximum acceptable time to restore a system or service following disruption |
| **Residual Risk** | The level of risk remaining after considering the effect of existing controls |
| **Risk Appetite** | The level and type of risk the Institution is willing to accept in pursuit of its objectives |
| **Risk Tolerance** | The acceptable variation around risk appetite; the maximum risk deviation before mandatory escalation |
| **RMiT** | Risk Management in Technology — BNM Policy Document |
| **Security Information and Event Management (SIEM)** | Software that aggregates and analyses security event data from across an IT environment |
| **Security Operations Centre (SOC)** | A centralised function that monitors, detects, and responds to cybersecurity threats |
| **Technology Risk** | The risk of loss resulting from inadequate or failed internal technology processes, people, or systems, or from external technology-related events |
| **Third-Party Technology Provider** | An external organisation that provides technology services, products, or infrastructure to the Institution |
| **Vulnerability** | A weakness in a system, process, or control that could be exploited by a threat |

---

### Appendix I — Committee Terms of Reference Summary

*Attach or reference the full Terms of Reference for each governance committee referenced in this Framework.*

| Committee | Document Reference | Effective Date |
|---|---|---|
| Board Risk Management Committee (BRMC) — Terms of Reference | [Doc ID] | [Date] |
| Board Audit Committee (BAC) — Terms of Reference | [Doc ID] | [Date] |
| Management Risk Committee (MRC) — Terms of Reference | [Doc ID] | [Date] |
| IT Steering Committee (ITSC) — Terms of Reference | [Doc ID] | [Date] |
| Cybersecurity Committee — Terms of Reference | [Doc ID] | [Date] |

---

### Appendix J — BNM RMiT Compliance Checklist

*Provide a self-assessment checklist mapping each BNM RMiT requirement to the Institution's implementation status.*

| RMiT Clause | Requirement Summary | Implementation Evidence | Status | Responsible Owner | Target Date (if not yet implemented) |
|---|---|---|---|---|---|
| 9.1 | Technology Risk Management Framework established and Board-approved | Board resolution [Ref]; this Framework | Implemented | CRO | — |
| 9.1.1 | Risk appetite approved by Board | Board resolution [Ref]; Appendix A | Implemented | CRO | — |
| 9.1.2 | Risk identification and assessment processes established | Section 7 and 8 of this Framework | Implemented | Head of IT Risk | — |
| 9.1.3 | Risk treatment and control framework established | Section 9 of this Framework | Implemented | CRO, CTO | — |
| 9.1.4 | Risk monitoring and reporting established | Section 10 and 12 of this Framework | Implemented | Head of IT Risk | — |
| 9.2 | Technology governance structure established | Section 4 of this Framework | Implemented | CRO | — |
| 9.3 | Third-party technology risk management | Appendix F; Third-Party Policy [Doc ID] | [Status] | Head of IT Risk | [Date] |
| 9.4 | IT project risk management | Section 7.5 of this Framework | [Status] | Head of IT Risk | [Date] |
| 10 | IT infrastructure resilience requirements | Section 9.3; DR Plan [Doc ID] | [Status] | CTO | [Date] |
| 11 | Cybersecurity risk management | Section 7.1, 9.2; Cybersecurity Policy [Doc ID] | [Status] | CISO | [Date] |
| 12 | Emerging technology risk | Section 7.6; Emerging Tech Policy [Doc ID] | [Status] | Head of IT Risk, CTO | [Date] |

---

*End of Document*

---

> **Document Classification: Confidential**
> © [Year] [Organization Name]. All rights reserved. This document is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited.
>
> **Document ID:** [Document ID] | **Version:** 1.0 | **Last Updated:** [Date]