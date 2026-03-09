# Cybersecurity Governance Framework

---

**[Organization Name]**
**Cybersecurity Governance Framework**

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
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 11.3 |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorised personnel. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable laws and regulatory obligations.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Governance Structure](#4-governance-structure)
5. [Cybersecurity Strategy and Objectives](#5-cybersecurity-strategy-and-objectives)
6. [Three Lines of Defence Model](#6-three-lines-of-defence-model)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Cybersecurity Risk Management Methodology](#8-cybersecurity-risk-management-methodology)
9. [Control Framework and Security Domains](#9-control-framework-and-security-domains)
10. [Incident Management and Response](#10-incident-management-and-response)
11. [Third-Party and Supply Chain Risk](#11-third-party-and-supply-chain-risk)
12. [Cybersecurity Culture and Awareness](#12-cybersecurity-culture-and-awareness)
13. [Implementation Roadmap](#13-implementation-roadmap)
14. [Monitoring, Measurement, and Review](#14-monitoring-measurement-and-review)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Executive Summary

*Provide a concise overview of the Cybersecurity Governance Framework, its strategic purpose, alignment with organizational objectives, and the regulatory imperatives that necessitate its existence. This section should be suitable for Board and senior leadership consumption and should not exceed two pages.*

### 1.1 Overview

[Organization Name] ("the Organization") operates as a [financial institution / licensed bank / payment service provider / insurance company] regulated by Bank Negara Malaysia (BNM) under [applicable licensing legislation, e.g., the Financial Services Act 2013 / Islamic Financial Services Act 2013]. Cybersecurity represents one of the most significant operational and technology risks facing the Organization and the broader Malaysian financial system.

This **Cybersecurity Governance Framework** ("the Framework") establishes the overarching governance structure, accountabilities, principles, and mechanisms through which [Organization Name] manages cybersecurity risks in a manner commensurate with its risk appetite, operational complexity, and regulatory obligations. The Framework is a mandatory governance artifact under BNM's **Risk Management in Technology (RMiT)** policy document, specifically Clause 11.3.

### 1.2 Strategic Imperative

The increasing sophistication of cyber threats — including ransomware, advanced persistent threats (APT), supply chain compromises, and insider threats — demands that [Organization Name] maintains a robust, adaptive, and Board-endorsed governance posture. The Framework provides the structural foundation from which all cybersecurity policies, standards, procedures, and controls are derived.

### 1.3 Key Highlights

- **Board Accountability:** The Board of Directors retains ultimate accountability for cybersecurity risk oversight, exercised through the Board Risk Committee (BRC) and delegated to the Chief Risk Officer (CRO) and Chief Information Security Officer (CISO).
- **Three Lines of Defence:** Cybersecurity governance is organised across the three lines of defence model, ensuring clear segregation of ownership, oversight, and assurance functions.
- **Risk-Based Approach:** Controls and investments are prioritised based on a structured risk assessment methodology aligned with the Organization's Risk Appetite Statement (RAS).
- **Regulatory Compliance:** The Framework is designed to satisfy the requirements of BNM RMiT (Clause 11.3), the Personal Data Protection Act 2010 (PDPA), and NACSA's National Cyber Security Policy (NCSP), among other applicable standards.
- **Continuous Improvement:** The Framework is subject to annual review and is updated in response to material changes in the threat landscape, technology environment, or regulatory requirements.

### 1.4 Effective Date and Validity

This Framework is effective from **[Effective Date]** and remains valid until superseded or amended through the formal document management process described in Section 14.

---

## 2. Purpose and Scope

*Define the purpose of this document, the boundaries of its applicability, and any explicit exclusions. Be specific about which entities, systems, and personnel are in scope.*

### 2.1 Purpose

The purpose of this Framework is to:

1. Establish a clear and accountable **cybersecurity governance structure** across [Organization Name], consistent with the requirements of BNM RMiT Clause 11.3.
2. Define the **roles, responsibilities, and authorities** of all parties involved in cybersecurity risk management, from the Board of Directors to operational staff.
3. Articulate the **three lines of defence** model as applied to cybersecurity, ensuring appropriate segregation between risk ownership, risk oversight, and independent assurance.
4. Provide the **strategic direction and principles** that guide the development, implementation, and continuous improvement of cybersecurity policies, standards, and controls.
5. Establish the **mechanisms for monitoring, reporting, and escalation** of cybersecurity risks and incidents to appropriate governance bodies.
6. Demonstrate to BNM, external auditors, and other stakeholders that [Organization Name] maintains a mature, documented, and operationally effective cybersecurity governance posture.

### 2.2 Scope

#### 2.2.1 Organisational Scope

This Framework applies to:

| Entity / Group | Applicability |
|---|---|
| Board of Directors | Fully applicable — ultimate accountability |
| Board Risk Committee (BRC) | Fully applicable — oversight role |
| Senior Management (ExCo) | Fully applicable — strategic ownership |
| Chief Information Security Officer (CISO) | Fully applicable — operational leadership |
| Chief Risk Officer (CRO) | Fully applicable — document owner |
| Group IT Department | Fully applicable — first line of defence |
| Group Risk Management | Fully applicable — second line of defence |
| Internal Audit | Fully applicable — third line of defence |
| All Employees | Applicable to the extent of cybersecurity awareness obligations |
| Subsidiaries and Affiliates | [Applicable / Applicable with local adaptations — specify] |
| Third-Party Service Providers | Applicable to the extent of contractual obligations and vendor risk management |
| Outsourced IT Service Providers | Fully applicable — subject to formal contractual incorporation |

#### 2.2.2 Technology and Information Asset Scope

The Framework governs cybersecurity risk management for all information assets and technology systems that:

- Are owned, operated, leased, or managed by [Organization Name];
- Process, store, or transmit material non-public information, personal data, or financial transaction data;
- Are hosted on-premises, in co-location facilities, or in public, private, or hybrid cloud environments;
- Are provided by third parties under outsourcing or managed service arrangements where [Organization Name] retains regulatory accountability.

#### 2.2.3 Geographic Scope

This Framework applies to all operations of [Organization Name] within **Malaysia**. [Where applicable: Operations in other jurisdictions are subject to local regulatory requirements and must maintain alignment with this Framework to the extent permissible under local law.]

### 2.3 Exclusions

The following are explicitly excluded from the scope of this Framework:

- [Specify any entities, systems, or geographies explicitly excluded, e.g., dormant subsidiaries, non-technology vendor relationships]
- Physical security (governed separately under the Physical Security Policy)
- Business continuity planning (governed separately under the BCP/DR Framework, though cybersecurity incident scenarios are considered)

### 2.4 Relationship to Other Documents

*List the hierarchy of documents this Framework sits within. Ensure this section is updated when new policies are introduced.*

| Document | Relationship |
|---|---|
| Board-Approved Risk Appetite Statement | Parent — defines acceptable risk thresholds |
| Enterprise Risk Management Framework | Parent — overarching risk governance |
| Information Security Policy | Child — operationalises this Framework |
| Cybersecurity Incident Response Plan | Child — operationalises Section 10 |
| Vendor Risk Management Policy | Related — operationalises Section 11 |
| Business Continuity Management Framework | Related — cyber resilience scenarios |
| Data Classification and Handling Policy | Related — asset protection obligations |
| IT Risk Management Policy | Related — broader technology risk governance |

---

## 3. Regulatory and Policy Context

*Summarise all applicable regulatory frameworks, standards, and internal policies that this Framework is designed to address. This section supports audit readiness and demonstrates regulatory alignment.*

### 3.1 Regulatory Framework

[Organization Name] is subject to the following primary regulatory instruments governing cybersecurity:

#### 3.1.1 Bank Negara Malaysia (BNM) Requirements

| Regulatory Instrument | Relevant Clauses | Obligation Summary |
|---|---|---|
| Risk Management in Technology (RMiT) | 11.1 – 11.3, 10.1 – 10.5 | Cybersecurity governance, risk management, and incident reporting |
| RMiT | 11.3 | Board-level cybersecurity governance framework mandatory |
| RMiT | 10.53–10.57 | Cyber risk assessments and penetration testing |
| RMiT | 11.8–11.11 | Security Operations Centre (SOC) and threat monitoring |
| RMiT | 11.4 – 11.7 | Cybersecurity incident notification to BNM |
| Guidelines on Management of Cyber Risk | All | Supplementary guidance on cyber risk controls |
| Financial Services Act 2013 (FSA) | Section 57, 136 | Technology risk prudential requirements |
| Islamic Financial Services Act 2013 (IFSA) | Section 57, 136 | As above for Islamic financial institutions |

#### 3.1.2 National Cybersecurity Requirements

| Instrument | Issuing Body | Relevance |
|---|---|---|
| National Cyber Security Policy (NCSP) | NACSA / MOSTI | National critical information infrastructure (CII) obligations |
| Cyber Security Act 2024 | Parliament of Malaysia | Cyber security obligations for CII sectors, including financial services |
| Critical National Information Infrastructure (CNII) Sector Requirements | NACSA | Sector-specific standards for financial services as CII |

#### 3.1.3 Data Protection Requirements

| Instrument | Issuing Body | Relevance |
|---|---|---|
| Personal Data Protection Act 2010 (PDPA) | PDPD / Ministry of Digital | Protection of personal data, including security obligations under Principle 5 |
| PDPA (Amendment) Act 2023 | Parliament of Malaysia | Enhanced obligations, mandatory breach notification |

### 3.2 Applicable Standards and Frameworks

In addition to regulatory requirements, [Organization Name] aligns its cybersecurity governance with the following internationally recognised standards:

| Standard / Framework | Version / Year | Application |
|---|---|---|
| NIST Cybersecurity Framework (CSF) | 2.0 (2024) | Primary cybersecurity framework for control mapping |
| ISO/IEC 27001 | 2022 | Information security management system reference |
| ISO/IEC 27002 | 2022 | Security control catalogue reference |
| CIS Controls | v8 | Prioritised control implementation guidance |
| COBIT | 2019 | IT governance and management alignment |
| PCI DSS | 4.0 | Applicable to payment card data environments |
| SWIFT Customer Security Programme (CSP) | Current | Applicable to SWIFT-connected systems |
| [Other applicable standards] | [Version] | [Application] |

### 3.3 Internal Policy Hierarchy

*Describe how this Framework sits within the Organization's internal governance hierarchy.*

```
Board-Level Governance
├── Board Risk Appetite Statement
├── Enterprise Risk Management Framework
│   └── Cybersecurity Governance Framework  ◄ THIS DOCUMENT
│       ├── Information Security Policy
│       ├── Acceptable Use Policy
│       ├── Access Management Policy
│       ├── Cryptography Policy
│       ├── Vulnerability Management Policy
│       ├── Cybersecurity Incident Response Plan
│       ├── Third-Party Risk Management Policy
│       └── [Other security policies and standards]
```

---

## 4. Governance Structure

*Detail the formal governance bodies, committees, and reporting lines responsible for cybersecurity oversight. Include committee mandates, meeting frequencies, and escalation pathways.*

### 4.1 Governance Philosophy

[Organization Name] adopts a **layered governance model** for cybersecurity, where accountability flows from the Board of Directors through Senior Management to operational functions. This structure ensures that cybersecurity risk is:

- Treated as a **strategic business risk**, not solely a technical concern;
- Subject to **Board-level visibility and oversight** at least annually, or more frequently in response to material events;
- **Integrated into enterprise risk management** processes, with cybersecurity risk forming a distinct risk category within the Organisation's risk taxonomy.

### 4.2 Governance Bodies

#### 4.2.1 Board of Directors

| Attribute | Detail |
|---|---|
| **Accountability** | Ultimate accountability for cybersecurity risk and strategic direction |
| **Primary Delegate** | Board Risk Committee (BRC) |
| **Key Responsibilities** | Approve Cybersecurity Governance Framework; receive annual cybersecurity risk report; approve material cybersecurity investments; oversee major incident response |
| **Reporting Received** | Annual Cybersecurity Risk Report; material incident notifications |
| **Meeting Frequency** | [e.g., Quarterly Board meetings; cybersecurity agenda item at least annually] |

#### 4.2.2 Board Risk Committee (BRC)

| Attribute | Detail |
|---|---|
| **Accountability** | Board-delegated oversight of cybersecurity risk |
| **Chair** | [Independent Non-Executive Director] |
| **Membership** | [Specify: NEDs, CRO (standing invitee), CISO (standing invitee), CTO (as required)] |
| **Key Responsibilities** | Review and recommend approval of this Framework; oversee cybersecurity risk profile; review material incident post-mortems; approve risk appetite for cybersecurity |
| **Reporting Received** | Quarterly Cybersecurity Risk Dashboard; material incident briefings |
| **Meeting Frequency** | [e.g., Quarterly] |

#### 4.2.3 Board Audit Committee (BAC)

| Attribute | Detail |
|---|---|
| **Accountability** | Oversight of cybersecurity audit and assurance activities |
| **Chair** | [Independent Non-Executive Director] |
| **Key Responsibilities** | Receive cybersecurity audit findings from Internal Audit; oversee remediation of material audit findings; commission external cybersecurity assurance |
| **Reporting Received** | Internal Audit cybersecurity reports; external assessor findings |
| **Meeting Frequency** | [e.g., Quarterly] |

#### 4.2.4 Executive Committee (ExCo) / Management Risk Committee (MRC)

| Attribute | Detail |
|---|---|
| **Accountability** | Senior management ownership and decision-making on cybersecurity risk |
| **Chair** | Chief Executive Officer (CEO) / Chief Risk Officer (CRO) |
| **Membership** | CEO, CRO, CFO, COO, CTO/CIO, CISO, General Counsel, [others as relevant] |
| **Key Responsibilities** | Approve operational cybersecurity policies; resource allocation for cybersecurity; escalation forum for material incidents; review and approval of risk treatment decisions |
| **Reporting Received** | Monthly/Quarterly Cybersecurity Operational Report; incident updates |
| **Meeting Frequency** | [e.g., Monthly] |

#### 4.2.5 Cybersecurity Steering Committee (CSC)

| Attribute | Detail |
|---|---|
| **Accountability** | Cross-functional coordination of cybersecurity programmes and initiatives |
| **Chair** | CISO |
| **Membership** | CISO, IT Risk Manager, IT Operations Head, Compliance Officer, Legal Counsel, Business Unit Representatives, Internal Audit (observer) |
| **Key Responsibilities** | Operationalise cybersecurity strategy; coordinate cross-functional security programmes; review cybersecurity KPIs and KRIs; approve operational security standards and procedures |
| **Reporting Received** | Operational security metrics; programme status reports |
| **Meeting Frequency** | [e.g., Monthly] |

#### 4.2.6 Cybersecurity Incident Response Team (CIRT)

| Attribute | Detail |
|---|---|
| **Accountability** | Operational response to cybersecurity incidents |
| **Chair** | CISO / Incident Commander |
| **Membership** | Security Operations, IT Operations, Legal, Communications, Business Units (as required) |
| **Activation** | Upon declaration of a cybersecurity incident meeting defined severity thresholds |
| **Key Responsibilities** | Incident containment, eradication, recovery, and post-incident review |

### 4.3 Governance Reporting Lines

*Insert or describe an organisational chart showing cybersecurity governance reporting lines. The narrative below describes the key reporting flows.*

```
Board of Directors
       │
       ├─── Board Risk Committee (BRC) ──────────────────── Board Audit Committee (BAC)
       │           │                                                    │
       │           │ (Oversight)                            (Audit Oversight)
       │           │                                                    │
Executive Committee (ExCo) / Management Risk Committee (MRC)    Internal Audit
       │
       ├─── Chief Risk Officer (CRO)  [Document Owner]
       │           │
       │           └─── Group Risk Management (2nd Line)
       │
       ├─── Chief Information Security Officer (CISO)
       │           │
       │           └─── Cybersecurity Steering Committee
       │                       │
       │                       ├─── Security Operations Centre (SOC)
       │                       ├─── IT Risk & Compliance
       │                       └─── Cybersecurity Incident Response Team (CIRT)
       │
       └─── Chief Technology Officer / Chief Information Officer (CTO/CIO)
                   │
                   └─── IT Operations (1st Line)
```

### 4.4 Escalation Framework

*Define the thresholds and pathways for escalating cybersecurity matters to progressively senior governance bodies.*

| Escalation Level | Triggering Events | Escalation Target | Timeline |
|---|---|---|---|
| Level 1 — Operational | Low/medium severity incidents; routine operational issues | CISO / IT Operations | Immediate (operational) |
| Level 2 — Management | High severity incidents; material control failures; significant vulnerabilities | CRO / ExCo / MRC | Within [X] hours of identification |
| Level 3 — Board | Critical/major incidents; material breaches; regulatory notifications required | BRC / Board | Within [X] hours; Board briefing within [X] business days |
| Level 4 — Regulatory | Incidents meeting BNM RMiT notification thresholds | BNM (via designated officer) | As per BNM RMiT Clause 11.4 — within [specified timeframe] |

---

## 5. Cybersecurity Strategy and Objectives

*Articulate the Organization's cybersecurity strategy, connecting it to the broader business strategy and risk appetite. Include measurable objectives.*

### 5.1 Cybersecurity Vision

*State the Organization's long-term aspiration for its cybersecurity posture.*

> "[Organization Name]'s cybersecurity vision is to be a trusted financial institution that effectively protects its customers, stakeholders, and operations from cyber threats through a risk-based, intelligence-led, and continuously improving cybersecurity programme."

### 5.2 Cybersecurity Mission

> "To protect the confidentiality, integrity, and availability of [Organization Name]'s information assets and technology systems by implementing proportionate, risk-based cybersecurity controls, fostering a culture of security awareness, and maintaining compliance with all applicable regulatory obligations."

### 5.3 Core Cybersecurity Principles

The following principles guide all cybersecurity decisions and activities within [Organization Name]:

| # | Principle | Description |
|---|---|---|
| 1 | **Risk-Based Prioritisation** | Cybersecurity investments and controls are prioritised based on assessed risk, potential impact, and likelihood, aligned with the Board-approved Risk Appetite Statement. |
| 2 | **Defence in Depth** | Multiple, overlapping layers of controls are deployed to protect against the failure of any single control. |
| 3 | **Least Privilege** | Access to systems, data, and functionality is restricted to the minimum necessary for legitimate business purposes. |
| 4 | **Security by Design** | Cybersecurity requirements are embedded into technology and business processes from inception, not retrofitted. |
| 5 | **Cyber Resilience** | The Organisation maintains the ability to anticipate, withstand, recover from, and adapt to cyber incidents. |
| 6 | **Shared Accountability** | Cybersecurity is the responsibility of all employees, not solely the IT or security function. |
| 7 | **Transparency and Reporting** | Material cybersecurity risks, incidents, and control deficiencies are reported promptly and accurately to appropriate governance bodies. |
| 8 | **Continuous Improvement** | The cybersecurity programme is subject to ongoing review, learning from incidents, and adaptation to the evolving threat landscape. |
| 9 | **Regulatory Compliance** | All cybersecurity activities are conducted in full compliance with applicable regulatory requirements, including BNM RMiT and PDPA. |
| 10 | **Third-Party Risk Management** | Cybersecurity obligations extend to third parties that access or process [Organization Name]'s information assets. |

### 5.4 Strategic Cybersecurity Objectives

*Define measurable strategic objectives for the cybersecurity programme. These should be reviewed and updated annually.*

| Objective | Description | Key Metric | Target | Review Period |
|---|---|---|---|---|
| **Reduce Attack Surface** | Minimise exploitable vulnerabilities across the technology estate | % critical/high vulnerabilities remediated within SLA | [e.g., >95%] | Quarterly |
| **Strengthen Identity Security** | Enforce multi-factor authentication and privileged access management | % of privileged accounts enrolled in PAM | [e.g., 100%] | Quarterly |
| **Enhance Threat Detection** | Improve mean time to detect (MTTD) for cybersecurity incidents | Average MTTD | [e.g., <24 hours] | Quarterly |
| **Improve Incident Response** | Improve mean time to respond (MTTR) for cybersecurity incidents | Average MTTR for high-severity incidents | [e.g., <4 hours] | Quarterly |
| **Maintain Regulatory Compliance** | Achieve and maintain compliance with BNM RMiT cybersecurity requirements | % of RMiT control requirements met | [e.g., 100%] | Annual (+ interim) |
| **Elevate Security Culture** | Increase employee cybersecurity awareness and reduce phishing susceptibility | Phishing simulation click-through rate | [e.g., <5%] | Semi-annual |
| **Manage Third-Party Risk** | Ensure critical vendors meet cybersecurity baseline requirements | % of critical vendors with current security assessment | [e.g., 100%] | Annual |

### 5.5 Cybersecurity Risk Appetite

*Summarise the Board-approved cybersecurity risk appetite. Reference the full Risk Appetite Statement for detail.*

[Organization Name]'s Board-approved Risk Appetite for cybersecurity is defined as follows:

- **Overall Cyber Risk Appetite:** [e.g., "Low — The Organisation has a low tolerance for cybersecurity events that could result in material financial loss, regulatory sanction, or reputational damage affecting customer trust."]
- **Data Breach Tolerance:** [e.g., "Zero tolerance for breaches involving sensitive customer personal data or financial transaction data."]
- **System Availability Tolerance:** [e.g., "No more than [X] hours of unplanned downtime for critical customer-facing systems in any rolling 12-month period attributable to cybersecurity incidents."]
- **Regulatory Non-Compliance Tolerance:** [e.g., "Zero tolerance for material non-compliance with BNM RMiT cybersecurity requirements."]

*Refer to the Board-approved Risk Appetite Statement [Document ID: RAS-[XX]] for full definitions, thresholds, and escalation triggers.*

---

## 6. Three Lines of Defence Model

*Detail the application of the three lines of defence model to cybersecurity governance. This section is central to BNM RMiT Clause 11.3 compliance.*

### 6.1 Model Overview

[Organization Name] applies the **Three Lines of Defence (3LoD)** model to cybersecurity governance to ensure clear delineation between risk ownership, risk oversight, and independent assurance. The model provides structural clarity on accountability and prevents the concentration of both risk-taking and oversight in the same organisational unit.

### 6.2 First Line of Defence — Risk Ownership

*The first line owns and manages cybersecurity risks as part of their day-to-day operations.*

**Entities:** IT Department, Technology Operations, Business Units, Application Development Teams, [other operational units]

**Key Cybersecurity Responsibilities:**

| Function | Responsibilities |
|---|---|
| **IT Operations** | Implement and maintain technical security controls; manage security configurations; apply patches and updates; manage access provisioning and deprovisioning |
| **Security Operations Centre (SOC)** | 24/7 monitoring of security events; alert triage and initial incident response; threat intelligence consumption; vulnerability scanning |
| **Application Development** | Implement secure coding practices; conduct SAST/DAST testing; remediate identified vulnerabilities; participate in security design reviews |
| **Business Units** | Enforce acceptable use policies; report suspicious activity; manage business-facing access rights; participate in cybersecurity awareness training |
| **IT Asset Management** | Maintain an accurate and current inventory of all IT assets within scope of cybersecurity controls |

**Control Framework:** The first line implements controls aligned with the control domains defined in Section 9 of this Framework.

**Reporting Obligations:** The first line reports cybersecurity operational metrics, incident status, and control effectiveness to the CISO and the Cybersecurity Steering Committee on a [monthly] basis.

### 6.3 Second Line of Defence — Risk Oversight

*The second line provides oversight, challenge, and guidance to the first line, and maintains the cybersecurity risk framework.*

**Entities:** Group Risk Management, IT Risk Function, Compliance Function, CISO Office (where positioned as second line)

**Key Cybersecurity Responsibilities:**

| Function | Responsibilities |
|---|---|
| **IT Risk Management** | Develop and maintain the cybersecurity risk framework, policies, and standards; conduct independent risk assessments; maintain the cybersecurity risk register; challenge first-line risk assessments |
| **Compliance Function** | Monitor compliance with BNM RMiT and other applicable regulatory requirements; coordinate regulatory submissions and notifications; maintain regulatory horizon scanning |
| **CISO Office** | [Where positioned in second line] Provide strategic cybersecurity direction; oversee the adequacy of the cybersecurity programme; report to BRC and ExCo |
| **Third-Party Risk** | Conduct vendor cybersecurity due diligence; maintain vendor risk assessments; manage contractual security obligations |

**Reporting Obligations:** The second line reports the cybersecurity risk profile, key risk indicators, and regulatory compliance status to the CRO, ExCo/MRC, and BRC on a [quarterly] basis.

### 6.4 Third Line of Defence — Independent Assurance

*The third line provides independent, objective assurance on the adequacy and effectiveness of cybersecurity governance and controls.*

**Entities:** Internal Audit, External Auditors, Regulatory Examiners, Independent Security Assessors

**Key Cybersecurity Responsibilities:**

| Function | Responsibilities |
|---|---|
| **Internal Audit** | Conduct risk-based cybersecurity audits; test the design and operating effectiveness of key cybersecurity controls; assess compliance with this Framework and underlying policies; report findings to BAC |
| **External Auditors** | [Where in scope] Provide independent assessment of IT general controls; assess cybersecurity disclosures |
| **External Security Assessors** | Conduct independent penetration testing; provide external maturity assessments; review specific high-risk environments |
| **BNM Examiners** | Conduct regulatory examinations of cybersecurity governance and controls |

**Audit Planning:** Internal Audit's annual audit plan includes a dedicated cybersecurity audit stream. The scope and frequency of cybersecurity audits are risk-based and reviewed annually.

**Reporting Obligations:** Internal Audit reports cybersecurity findings, remediation tracking, and thematic assessments to the BAC on a [quarterly] basis, with copies to the BRC and CRO.

### 6.5 Interaction Between Lines

*Describe how the three lines interact and coordinate to ensure effective cybersecurity governance.*

| Interaction | Mechanism | Frequency |
|---|---|---|
| 1st ↔ 2nd Line | Cybersecurity Steering Committee meetings | Monthly |
| 1st ↔ 2nd Line | Control self-assessments reviewed by IT Risk | Quarterly |
| 2nd → Board/BRC | Cybersecurity Risk Report | Quarterly |
| 3rd → BAC | Internal Audit cybersecurity reports | Per audit |
| 2nd ↔ 3rd Line | Audit finding remediation tracking | Ongoing |
| All Lines | Cybersecurity incident post-mortem reviews | Post-incident |
| All Lines | Annual cybersecurity framework review | Annual |

---

## 7. Roles and Responsibilities

*This section defines individual and functional accountability for cybersecurity governance. A RACI matrix is provided to clarify decision rights.*

### 7.1 Key Roles and Responsibilities

#### 7.1.1 Board of Directors

- Approve this Cybersecurity Governance Framework and material amendments;
- Receive and review the Annual Cybersecurity Risk Report;
- Ensure adequate resources are allocated to the cybersecurity programme;
- Exercise ultimate accountability for the Organisation's cybersecurity posture.

#### 7.1.2 Board Risk Committee (BRC)

- Exercise Board-delegated oversight of cybersecurity risk;
- Review and recommend the Cybersecurity Governance Framework for Board approval;
- Review the quarterly Cybersecurity Risk Dashboard;
- Provide challenge and oversight of management's cybersecurity risk management activities;
- Receive briefings on material cybersecurity incidents and review post-incident reports.

#### 7.1.3 Board Audit Committee (BAC)

- Oversee the independence and scope of cybersecurity audit activities;
- Review Internal Audit cybersecurity findings and management remediation responses;
- Commission external cybersecurity assurance activities where appropriate;
- Escalate material unresolved audit findings to the Board.

#### 7.1.4 Chief Executive Officer (CEO)

- Champion a culture of cybersecurity awareness and accountability across the Organisation;
- Ensure the cybersecurity programme is adequately resourced;
- Escalate material cybersecurity risks to the Board as appropriate.

#### 7.1.5 Chief Risk Officer (CRO)

- **Document Owner** of this Cybersecurity Governance Framework;
- Integrate cybersecurity risk into the enterprise risk management framework;
- Present the cybersecurity risk profile to the BRC and ExCo;
- Approve cybersecurity risk treatment decisions in accordance with the RAS;
- Ensure the three lines of defence model is maintained with appropriate independence.

#### 7.1.6 Chief Information Security Officer (CISO)

- Develop, implement, and maintain the cybersecurity programme;
- Maintain day-to-day accountability for the cybersecurity risk posture;
- Lead the Cybersecurity Steering Committee;
- Oversee the SOC and CIRT;
- Report cybersecurity incidents, metrics, and programme status to the CRO, ExCo, and BRC;
- Ensure compliance with BNM RMiT cybersecurity requirements;
- Serve as the primary point of contact for BNM on cybersecurity matters.

#### 7.1.7 Chief Technology Officer / Chief Information Officer (CTO/CIO)

- Ensure that technology systems are designed, deployed, and operated in accordance with security requirements;
- Allocate appropriate IT resources to implement and maintain security controls;
- Ensure security requirements are embedded in the System Development Life Cycle (SDLC);
- Support the CISO in implementing technical cybersecurity controls.

#### 7.1.8 Chief Financial Officer (CFO)

- Ensure adequate budget allocation for the cybersecurity programme;
- Support the quantification of cybersecurity risk in financial terms;
- Oversee cybersecurity insurance arrangements where applicable.

#### 7.1.9 Data Protection Officer (DPO) / Compliance Officer

- Ensure cybersecurity controls are aligned with PDPA obligations;
- Coordinate regulatory notifications for data breaches under PDPA and BNM RMiT;
- Maintain compliance with applicable regulatory cybersecurity requirements.

#### 7.1.10 IT Risk Manager

- Maintain the cybersecurity risk register;
- Conduct and coordinate cybersecurity risk assessments;
- Monitor and report on Key Risk Indicators (KRIs);
- Support the CISO in preparing regulatory submissions.

#### 7.1.11 SOC Manager / Security Operations

- Manage 24/7 security monitoring and alert management;
- Lead initial incident response activities;
- Maintain threat intelligence feeds and SIEM platform;
- Report security metrics to the CISO.

#### 7.1.12 All Employees

- Complete mandatory cybersecurity awareness training;
- Comply with all cybersecurity policies and procedures;
- Report suspected security incidents, phishing attempts, or policy violations;
- Protect the Organisation's information assets in accordance with applicable policies.

### 7.2 RACI Matrix — Cybersecurity Governance

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

| Activity | Board | BRC | BAC | CEO | CRO | CISO | CTO/CIO | IT Risk | Internal Audit | Business Units |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve Cybersecurity Governance Framework | A | C | I | I | R | C | C | C | I | I |
| Define Cybersecurity Risk Appetite | A | C | I | C | R | C | I | C | I | I |
| Develop Cybersecurity Strategy | I | C | I | C | A | R | C | C | I | C |
| Manage Cybersecurity Risk Register | I | I | I | I | A | C | I | R | C | I |
| Implement Security Controls | I | I | I | I | I | A | R | C | I | C |
| Monitor Security Operations (SOC) | I | I | I | I | I | A | R | I | I | I |
| Conduct Cybersecurity Risk Assessments | I | I | I | I | A | C | C | R | I | C |
| Manage Security Incidents (CIRT) | I | I | I | C | C | A | C | I | I | R |
| Report to BNM (Material Incidents) | A | C | I | C | C | R | I | C | I | I |
| Conduct Internal Audit (Cybersecurity) | I | C | A | I | I | C | I | I | R | I |
| Conduct Penetration Testing | I | I | I | I | C | A | C | C | I | I |
| Manage Third-Party Security | I | I | I | I | C | A | C | R | I | C |
| Deliver Security Awareness Training | I | I | I | C | I | A | C | I | I | R |
| Board/BRC Cybersecurity Reporting | I | I | I | I | R | C | I | C | I | I |
| Annual Framework Review | A | C | I | C | R | C | C | C | C | I |

---

## 8. Cybersecurity Risk Management Methodology

*Describe the methodology used to identify, assess, treat, and monitor cybersecurity risks. This section should align with the Enterprise Risk Management Framework.*

### 8.1 Overview

[Organization Name]'s cybersecurity risk management methodology follows the standard risk management lifecycle, adapted for cybersecurity risks. The methodology is consistent with the Enterprise Risk Management Framework and aligned with ISO/IEC 27005 (Information Security Risk Management) and the NIST Cybersecurity Framework.

### 8.2 Risk Management Lifecycle

The cybersecurity risk management lifecycle consists of five phases:

```
[Identify] → [Assess] → [Treat] → [Monitor] → [Report]
     ↑                                               │
     └───────────────────────────────────────────────┘
                    (Continuous Feedback Loop)
```

### 8.3 Phase 1 — Risk Identification

*Describe the methods used to identify cybersecurity risks.*

Risk identification sources include, but are not limited to:

| Source | Description | Frequency |
|---|---|---|
| Threat Intelligence | Consumption of external threat intelligence feeds (FS-ISAC, NACSA, vendor feeds) | Continuous |
| Vulnerability Scanning | Automated scanning of internal and external attack surfaces | [Weekly/Monthly] |
| Penetration Testing | Manual testing of systems, applications, and network infrastructure | Annual / as required |
| Red Team Exercises | Simulated adversary attacks against defined objectives | [Annual / Bi-annual] |
| Control Self-Assessments (CSA) | First-line assessment of control design and operating effectiveness | Annual |
| Security Incident Analysis | Lessons learned from past incidents (internal and industry) | Post-incident / Quarterly |
| Change Risk Assessment | Security assessment of material changes to technology or business processes | Per change |
| Third-Party Risk Assessment | Security assessment of critical vendors and outsourced service providers | Annual / At onboarding |
| Regulatory Guidance | BNM circulars, NACSA advisories, and industry alerts | As issued |
| Business Impact Analysis | Identification of critical assets and processes requiring cybersecurity protection | Annual |

### 8.4 Phase 2 — Risk Assessment

#### 8.4.1 Risk Assessment Methodology

[Organization Name] uses a **qualitative risk assessment methodology** [and/or quantitative where applicable, e.g., using FAIR] to assess cybersecurity risks. Each identified risk is assessed on two dimensions:

- **Likelihood:** The probability of the risk materialising within the assessment period, considering current threat landscape, vulnerabilities, and existing controls.
- **Impact:** The potential consequence if the risk materialises, considering financial loss, operational disruption, reputational damage, and regulatory consequences.

#### 8.4.2 Likelihood Scale

| Rating | Score | Description |
|---|---|---|
| Rare | 1 | Unlikely to occur; no known instances in the financial services sector in the past 3 years |
| Unlikely | 2 | Low probability; occasional instances in the sector |
| Possible | 3 | May occur; instances known in the sector in the past 12 months |
| Likely | 4 | Will probably occur; multiple instances in the sector annually |
| Almost Certain | 5 | Expected to occur; actively exploited threat or known targeting of the Organisation |

#### 8.4.3 Impact Scale

| Rating | Score | Financial Impact | Operational Impact | Regulatory Impact | Reputational Impact |
|---|---|---|---|---|---|
| Negligible | 1 | < [RM X] | Minimal disruption; <[X] hours | Minor non-compliance; no action | Limited internal awareness |
| Minor | 2 | [RM X – Y] | Moderate; [X–Y] hours | Regulatory attention; formal communication | Limited external awareness |
| Moderate | 3 | [RM Y – Z] | Significant; [X–Y] hours for critical systems | Formal regulatory action; fine possible | Sector-level awareness |
| Major | 4 | [RM Z – W] | Severe; extended disruption | Material regulatory sanction | National/media attention |
| Critical | 5 | > [RM W] | Catastrophic; sustained loss of critical services | Licence conditions/revocation | Systemic reputational damage |

#### 8.4.4 Risk Rating Matrix

| | **Negligible (1)** | **Minor (2)** | **Moderate (3)** | **Major (4)** | **Critical (5)** |
|---|---|---|---|---|---|
| **Almost Certain (5)** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Likely (4)** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Possible (3)** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Unlikely (2)** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Rare (1)** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

#### 8.4.5 Risk Rating Thresholds

| Rating | Score Range | Required Action |
|---|---|---|
| **Critical** | 20 – 25 | Immediate escalation to CRO and CISO; Board/BRC notification; treatment plan within [X] days |
| **High** | 10 – 19 | Escalation to CISO; treatment plan within [X] days; ExCo notification |
| **Medium** | 5 – 9 | CISO awareness; treatment plan within [X] days; managed within cybersecurity programme |
| **Low** | 1 – 4 | Monitored; treated through routine operations; reviewed annually |

### 8.5 Phase 3 — Risk Treatment

*Describe the options available for treating identified cybersecurity risks.*

Risk treatment options, in order of preference:

| Treatment Option | Description | Approval Required |
|---|---|---|
| **Avoid** | Eliminate the risk by ceasing or not undertaking the activity that gives rise to it | CRO / ExCo |
| **Mitigate (Reduce)** | Implement controls to reduce the likelihood and/or impact to an acceptable level | CISO / CRO (depending on materiality) |
| **Transfer** | Transfer the financial impact through insurance or contractual arrangements | CRO / CFO |
| **Accept** | Accept the residual risk where treatment cost exceeds benefit and risk is within appetite | CRO (within appetite limits) / BRC (above appetite) |

**Risk Acceptance:** No cybersecurity risk rated **Critical** may be formally accepted without BRC approval. Risks rated **High** require CRO approval. All accepted risks are documented in the Cybersecurity Risk Register with explicit rationale, residual risk rating, and review date.

### 8.6 Phase 4 — Risk Monitoring

*Refer to Section 14 for the full monitoring and review mechanism.*

- Cybersecurity risks are monitored through Key Risk Indicators (KRIs) and control metrics;
- The Cybersecurity Risk Register is reviewed and updated [monthly / quarterly];
- Material changes to the risk profile (new Critical or High risks, significant changes in existing risks) are escalated promptly per the escalation framework in Section 4.4.

### 8.7 Phase 5 — Risk Reporting

*Refer to Section 14.3 for the full reporting schedule.*

- Cybersecurity risk reporting is integrated into the Enterprise Risk Reporting framework;
- A dedicated Cybersecurity Risk Dashboard is prepared by IT Risk / CISO for the BRC [quarterly];
- An Annual Cybersecurity Risk Report is presented to the Board.

### 8.8 Cybersecurity Risk Register

The Cybersecurity Risk Register is the primary tool for recording and tracking identified cybersecurity risks. It is maintained by the IT Risk Manager and reviewed by the CISO.

**Minimum data fields for each risk:**

| Field | Description |
|---|---|
| Risk ID | Unique identifier |
| Risk Category | [e.g., External Threat / Internal Threat / Third-Party / Compliance] |
| Risk Description | Plain-language description of the risk scenario |
| Threat Actor / Source | [e.g., Nation-state / Organised crime / Insider / Accidental] |
| Affected Assets | Critical systems or data types exposed |
| Inherent Likelihood | Score (1–5) before controls |
| Inherent Impact | Score (1–5) before controls |
| Inherent Risk Rating | Calculated score and rating |
| Existing Controls | Controls currently in place |
| Control Effectiveness | Assessment of current control adequacy |
| Residual Likelihood | Score (1–5) after controls |
| Residual Impact | Score (1–5) after controls |
| Residual Risk Rating | Calculated score and rating |
| Risk Owner | Named individual accountable for risk treatment |
| Treatment Plan | Agreed actions, owner, and target date |
| Treatment Status | [Open / In Progress / Completed / Accepted] |
| Last Review Date | Date of most recent assessment |
| Next Review Date | Scheduled next review |

---

## 9. Control Framework and Security Domains

*Define the cybersecurity control domains and the baseline control requirements for each. This section provides the structural link between governance and operational controls.*

### 9.1 Control Framework Overview

[Organization Name]'s cybersecurity control framework is organised into **[X] security domains**, aligned with the NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover) and mapped to BNM RMiT requirements. Each domain has a designated domain owner within the first line of defence.

### 9.2 Security Domains

| # | Domain | Domain Owner | Primary BNM RMiT Reference | Primary Standard Reference |
|---|---|---|---|---|
| 1 | Asset Management | [Role] | 10.1 – 10.5 | ISO 27001 A.5.9 |
| 2 | Identity and Access Management | [Role] | 10.10 – 10.15 | ISO 27001 A.5.15 – 5.18 |
| 3 | Network Security | [Role] | 10.20 – 10.25 | ISO 27001 A.8.20 – 8.22 |
| 4 | Endpoint Security | [Role] | 10.26 – 10.30 | CIS Controls 4–6 |
| 5 | Application Security | [Role] | 10.31 – 10.40 | ISO 27001 A.8.26 |
| 6 | Data Security | [Role] | 10.41 – 10.50 | ISO 27001 A.5.33 |
| 7 | Vulnerability Management | [Role] | 10.53–10.57 | CIS Controls 7 |
| 8 | Security Monitoring and SOC | [Role] | 11.8–11.11 | ISO 27001 A.8.15 |
| 9 | Incident Management | [Role] | 11.4 – 11.7 | ISO 27001 A.5.24 |
| 10 | Third-Party Security | [Role] | 10.46–10.49 | ISO 27001 A.5.19 |
| 11 | Physical and Environmental Security | [Role] | [Ref] | ISO 27001 A.7 |
| 12 | Cryptography and Key Management | [Role] | [Ref] | ISO 27001 A.8.24 |
| 13 | Cloud Security | [Role] | [Ref] | ISO 27001 A.5.23 |
| 14 | Business Continuity and DR | [Role] | [Ref] | ISO 22301 |
| 15 | Security Awareness and Training | [Role] | 11.3 | ISO 27001 A.6.3 |

### 9.3 Domain Control Summaries

*This section provides a high-level summary of mandatory baseline controls for key domains. Detailed control requirements are documented in domain-specific policies and standards referenced in Section 2.4.*

#### 9.3.1 Asset Management

- Maintain a comprehensive and current inventory of all IT assets (hardware, software, data);
- Classify all information assets in accordance with the Data Classification Policy;
- Assign ownership to all information assets;
- Track end-of-life and end-of-support dates for all software and hardware components.

#### 9.3.2 Identity and Access Management

- Enforce the principle of least privilege for all user and system accounts;
- Implement multi-factor authentication (MFA) for all remote access and privileged accounts;
- Conduct access reviews for privileged and sensitive accounts at least [quarterly];
- Implement a Privileged Access Management (PAM) solution for all privileged accounts;
- Disable or remove accounts promptly upon employee departure or role change;
- Segregate duties for sensitive financial system functions.

#### 9.3.3 Vulnerability Management

- Conduct automated vulnerability scanning of all in-scope systems at least [monthly];
- Conduct external attack surface scanning at least [monthly];
- Remediate critical vulnerabilities within [X] days; high within [X] days; medium within [X] days;
- Conduct annual penetration testing of critical systems and applications, aligned with BNM RMiT 10.52;
- Track all identified vulnerabilities in a formal vulnerability management register.

#### 9.3.4 Security Monitoring and SOC

- Operate a Security Operations Centre (SOC) providing 24/7 monitoring of critical systems;
- Implement and maintain a Security Information and Event Management (SIEM) platform;
- Define and maintain a library of detection use cases aligned with the threat landscape;
- Maintain log retention in accordance with BNM RMiT requirements (minimum [X] months);
- Integrate threat intelligence feeds into SOC operations;
- Measure and report Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR).

#### 9.3.5 Data Security

- Classify all data assets in accordance with the Data Classification Policy;
- Implement encryption for sensitive data at rest and in transit;
- Implement Data Loss Prevention (DLP) controls for sensitive data;
- Conduct data flow mapping and maintain a data inventory;
- Implement controls to prevent unauthorised exfiltration of sensitive data.

---

## 10. Incident Management and Response

*Describe the governance framework for cybersecurity incident management. Detailed procedures are documented in the Cybersecurity Incident Response Plan.*

### 10.1 Incident Management Overview

[Organization Name] maintains a documented **Cybersecurity Incident Response Plan (CIRP)** [Document ID: [XX]] that operationalises this section. This Framework establishes the governance principles and BNM reporting obligations; the CIRP provides detailed operational procedures.

### 10.2 Incident Classification

Cybersecurity incidents are classified by severity to ensure proportionate and timely response:

| Severity Level | Criteria | Response Owner | Escalation |
|---|---|---|---|
| **P1 — Critical** | Material system outage; confirmed data breach; ransomware; suspected nation-state activity | CISO / CIRT Lead | CEO, CRO, BRC, BNM (if threshold met) |
| **P2 — High** | Significant control failure; high-risk vulnerability actively exploited; material suspicious activity | CISO | CRO, ExCo |
| **P3 — Medium** | Security event with contained or limited impact; suspected but unconfirmed breach | SOC Manager | CISO |
| **P4 — Low** | Minor policy violation; low-risk security event; near-miss | SOC Analyst | SOC Manager |

### 10.3 Incident Response Lifecycle

| Phase | Key Activities | Owner |
|---|---|---|
| **Preparation** | Maintain CIRP; train CIRT; test response capabilities; establish external contacts | CISO |
| **Detection and Analysis** | Alert monitoring; initial triage; severity classification; evidence preservation | SOC / CIRT |
| **Containment** | Short-term and long-term containment; isolate affected systems; preserve forensic evidence | CIRT |
| **Eradication** | Remove malware; patch vulnerabilities; remediate root cause | IT Operations / CIRT |
| **Recovery** | Restore systems to normal operation; verify integrity; enhanced monitoring | IT Operations / CIRT |
| **Post-Incident Review** | Document lessons learned; update controls and procedures; regulatory reporting if required | CISO / IT Risk |

### 10.4 BNM Regulatory Notification Requirements

In accordance with BNM RMiT Clause 11.4 – 11.7, [Organization Name] is obligated to notify BNM of cybersecurity incidents meeting defined materiality thresholds. The following governance controls are in place:

| Requirement | Detail | Responsible Party |
|---|---|---|
| Initial Notification | Notify BNM within [X] hours of confirmed material incident | CISO / Compliance Officer |
| Incident Report | Submit formal incident report to BNM within [X] business days | CISO / CRO |
| Post-Incident Report | Submit post-incident review report within [X] days of incident resolution | CISO |
| Notification Threshold | [Define materiality threshold per BNM RMiT guidance] | CISO (with CRO approval) |

*Designated BNM Reporting Officer: [Name / Role]*
*BNM Contact Details: [As per BNM RMiT official contact guidance]*

### 10.5 Post-Incident Review

All **P1 and P2** incidents must be subject to a formal Post-Incident Review (PIR) within **[X] business days** of incident resolution. The PIR report must include:

- Timeline of events and actions taken;
- Root cause analysis;
- Assessment of control failures or gaps;
- Lessons learned;
- Recommended improvements to controls, procedures, or monitoring;
- Action plan with owners and target dates.

PIR reports are reviewed by the CISO and shared with the CRO, ExCo, and (for P1 incidents) the BRC.

### 10.6 Cybersecurity Exercise Programme

[Organization Name] conducts regular exercises to test cybersecurity incident response readiness:

| Exercise Type | Frequency | Scope | Owner |
|---|---|---|---|
| Tabletop Exercise | [Annual / Semi-annual] | CIRT, ExCo | CISO |
| Technical Simulation | [Annual] | SOC, IT Operations | SOC Manager |
| Full-Scale Crisis Simulation | [Bi-annual] | ExCo, Board, CIRT, Communications | CISO / CRO |
| Red Team Exercise | [Annual / Bi-annual] | As defined in scope | CISO (External engagement) |

---

## 11. Third-Party and Supply Chain Risk

*Define the cybersecurity governance requirements for third parties, outsourced service providers, and supply chain relationships.*

### 11.1 Overview

[Organization Name] recognises that third-party relationships represent a material cybersecurity risk vector, including through access to systems, processing of sensitive data, and supply chain compromise. Third-party cybersecurity risk is managed in accordance with the **Third-Party Risk Management Policy** [Document ID: [XX]] and the principles established in this section.

### 11.2 Third-Party Risk Classification

| Tier | Criteria | Cybersecurity Due Diligence Requirement |
|---|---|---|
| **Tier 1 — Critical** | Access to sensitive customer data; critical system dependency; outsourced material functions (as defined by BNM) | Comprehensive security assessment; on-site audit rights; contractual security obligations; annual reassessment |
| **Tier 2 — High** | Access to internal systems or non-public data; significant operational dependency | Security questionnaire; contractual security obligations; annual review |
| **Tier 3 — Standard** | Limited access; no access to sensitive data; low operational dependency | Standard contractual security clauses; periodic review |
| **Tier 4 — Low** | No access to systems or data; commodity vendors | Basic contractual terms; review upon contract renewal |

### 11.3 Mandatory Contractual Requirements

All contracts with Tier 1 and Tier 2 vendors must include, as a minimum:

- Right to audit cybersecurity controls (first party or third-party assessor);
- Mandatory incident notification obligations (aligned with BNM RMiT reporting timelines);
- Data protection and confidentiality obligations aligned with PDPA;
- Requirements to maintain and evidence compliance with applicable security standards;
- Sub-contractor management and notification obligations;
- Requirements to apply security patches within defined timeframes;
- Data retention, return, and destruction obligations upon contract termination;
- Right to terminate for material security breaches.

### 11.4 Outsourcing to Cloud Service Providers

Cloud service provider (CSP) engagements are subject to additional governance requirements in accordance with BNM's cloud risk guidelines, including:

- Completion of a Cloud Risk Assessment prior to engagement;
- Shared Responsibility Model documentation;
- Data residency and sovereignty requirements;
- Exit and portability planning;
- Ongoing monitoring of CSP security posture and incident reports.

---

## 12. Cybersecurity Culture and Awareness

*Describe the programme for building a strong cybersecurity culture across the Organisation.*

### 12.1 Programme Objectives

*A strong security culture is a critical compensating control. This section defines the governance framework for building and sustaining cybersecurity awareness.*

[Organization Name] operates a **Cybersecurity Awareness and Culture Programme** designed to:

- Ensure all employees understand their cybersecurity obligations;
- Reduce the likelihood of successful social engineering and phishing attacks;
- Foster a "report-first" culture where employees promptly report suspicious activity;
- Embed security considerations into business processes and decision-making.

### 12.2 Training Programme

| Programme Component | Target Audience | Frequency | Delivery Method | Owner |
|---|---|---|---|---|
| Mandatory Cybersecurity Awareness Training | All employees | Annual | eLearning / LMS | CISO / HR |
| New Joiner Security Induction | All new employees | Upon joining | eLearning + live session | CISO / HR |
| Phishing Simulation | All employees | [Quarterly / Semi-annual] | Simulated phishing campaign | CISO / SOC |
| Privileged User Training | All privileged users | Annual | eLearning + supplementary | CISO / IT |
| Cybersecurity for Senior Management | ExCo and above | Annual | Facilitated workshop | CISO |
| Board Cybersecurity Briefing | Board of Directors | Annual | Board session | CISO / CRO |
| Developer Secure Coding Training | Software developers | Annual | Technical training | CISO / CTO |
| Incident Response Drills | CIRT members | [Annual / Semi-annual] | Exercise | CISO |

### 12.3 Awareness Metrics

| Metric | Measurement | Target | Reporting Frequency |
|---|---|---|---|
| Training Completion Rate | % of employees completing annual training | [e.g., 100% within [X] months] | Monthly |
| Phishing Simulation Click Rate | % of employees clicking simulated phishing links | [e.g., <5%] | Per campaign |
| Phishing Report Rate | % of employees reporting simulated phishing | [e.g., >60%] | Per campaign |
| Security Incident Reports (Employee-Generated) | Number of security events reported by employees | Trending upward | Monthly |
| Policy Acknowledgement Rate | % of employees acknowledging security policies | [e.g., 100%] | Annual |

---

## 13. Implementation Roadmap

*Define the phased implementation plan for the cybersecurity programme. This section is particularly important for institutions building or maturing their cybersecurity governance.*

### 13.1 Current State Assessment

*Summarise the findings of the most recent cybersecurity maturity assessment. This informs the prioritisation of initiatives in the roadmap.*

| Assessment Area | Current Maturity Level | Target Maturity Level | Gap Summary |
|---|---|---|---|
| Governance and Accountability | [e.g., 2 — Developing] | [e.g., 4 — Managed] | [Describe key gaps] |
| Identity and Access Management | [e.g., 2 — Developing] | [e.g., 4 — Managed] | [Describe key gaps] |
| Threat Detection and Response | [e.g., 3 — Defined] | [e.g., 4 — Managed] | [Describe key gaps] |
| Vulnerability Management | [e.g., 2 — Developing] | [e.g., 3 — Defined] | [Describe key gaps] |
| Third-Party Risk Management | [e.g., 1 — Initial] | [e.g., 3 — Defined] | [Describe key gaps] |
| Security Awareness and Culture | [e.g., 2 — Developing] | [e.g., 3 — Defined] | [Describe key gaps] |

*Maturity levels: 1 — Initial / 2 — Developing / 3 — Defined / 4 — Managed / 5 — Optimising*

### 13.2 Phased Implementation Plan

#### Phase 1: Foundation ([Quarter / Year] – [Quarter / Year])

*Establish baseline governance, critical controls, and regulatory compliance.*

| Initiative | Priority | Owner | Target Completion | Status | Budget (RM) |
|---|---|---|---|---|---|
| Approve and publish Cybersecurity Governance Framework | Critical | CRO | [Date] | [Status] | — |
| Appoint / confirm CISO and cybersecurity team structure | Critical | CEO | [Date] | [Status] | — |
| Conduct comprehensive cybersecurity risk assessment | Critical | CISO / IT Risk | [Date] | [Status] | [Amount] |
| Implement MFA for all privileged accounts | Critical | CISO / CTO | [Date] | [Status] | [Amount] |
| Establish Cybersecurity Risk Register | High | IT Risk | [Date] | [Status] | — |
| Launch mandatory cybersecurity awareness training | High | CISO / HR | [Date] | [Status] | [Amount] |
| Establish security incident reporting process | High | CISO | [Date] | [Status] | — |
| [Additional Phase 1 initiatives] | | | | | |

#### Phase 2: Enhancement ([Quarter / Year] – [Quarter / Year])

*Strengthen detection, response, and third-party risk management capabilities.*

| Initiative | Priority | Owner | Target Completion | Status | Budget (RM) |
|---|---|---|---|---|---|
| Implement / enhance SOC capabilities and SIEM | High | CISO / CTO | [Date] | [Status] | [Amount] |
| Deploy Privileged Access Management (PAM) solution | High | CISO / CTO | [Date] | [Status] | [Amount] |
| Conduct external penetration testing | High | CISO | [Date] | [Status] | [Amount] |
| Implement formal third-party security assessment programme | High | IT Risk | [Date] | [Status] | [Amount] |
| Develop and test Cybersecurity Incident Response Plan | High | CISO | [Date] | [Status] | — |
| Implement automated vulnerability management programme | Medium | CISO / CTO | [Date] | [Status] | [Amount] |
| [Additional Phase 2 initiatives] | | | | | |

#### Phase 3: Optimisation ([Quarter / Year] – [Quarter / Year])

*Achieve target maturity, embed continuous improvement, and advance threat detection.*

| Initiative | Priority | Owner | Target Completion | Status | Budget (RM) |
|---|---|---|---|---|---|
| Implement advanced threat detection capabilities (UEBA, XDR) | Medium | CISO / CTO | [Date] | [Status] | [Amount] |
| Establish formal cybersecurity metrics and dashboard programme | Medium | CISO / IT Risk | [Date] | [Status] | — |
| Conduct red team exercise | Medium | CISO | [Date] | [Status] | [Amount] |
| Achieve ISO/IEC 27001 certification [if applicable] | Medium | CISO | [Date] | [Status] | [Amount] |
| Implement cyber risk quantification capability | Low | CRO / IT Risk | [Date] | [Status] | [Amount] |
| [Additional Phase 3 initiatives] | | | | | |

### 13.3 Roadmap Summary Timeline

| Initiative | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 |
|---|---|---|---|---|---|---|---|---|
| Governance Framework Approved | ████ | | | | | | | |
| Risk Assessment Completed | ████ | | | | | | | |
| MFA for Privileged Accounts | ████ | ████ | | | | | | |
| Awareness Training Programme | | ████ | | | | | | |
| SOC / SIEM Enhancement | | ████ | ████ | ████ | | | | |
| PAM Implementation | | | ████ | ████ | | | | |
| Penetration Testing | | | | ████ | | | | ████ |
| Third-Party Programme | | | ████ | ████ | ████ | | | |
| Advanced Detection (UEBA/XDR) | | | | | | ████ | ████ | |
| ISO 27001 Certification | | | | | | ████ | ████ | ████ |

---

## 14. Monitoring, Measurement, and Review

*Define the mechanisms for ongoing monitoring of the cybersecurity programme effectiveness, KRIs, and the formal review cycle for this Framework.*

### 14.1 Key Performance Indicators (KPIs)

*KPIs measure the performance and effectiveness of the cybersecurity programme.*

| KPI | Description | Measurement | Target | Owner | Reporting Frequency |
|---|---|---|---|---|---|
| Critical Vulnerability Remediation SLA | % of critical vulnerabilities remediated within SLA | % on-time closure | ≥ 95% | CISO | Monthly |
| High Vulnerability Remediation SLA | % of high vulnerabilities remediated within SLA | % on-time closure | ≥ 90% | CISO | Monthly |
| Patch Compliance Rate | % of critical systems at current patch level | % patched | ≥ 98% | CTO/CISO | Monthly |
| MFA Adoption Rate | % of accounts with MFA enabled | % enrolled | 100% (privileged); ≥ 95% (all) | CISO | Monthly |
| Security Awareness Training Completion | % of employees completing annual training | % complete | 100% | CISO/HR | Monthly |
| Phishing Simulation Click Rate | % of employees clicking phishing simulation links | % clicked | ≤ 5% | CISO | Per campaign |
| Mean Time to Detect (MTTD) | Average time from incident occurrence to detection | Hours | ≤ [X] hours | SOC Manager | Monthly |
| Mean Time to Respond (MTTR) | Average time from detection to containment | Hours (High/Critical) | ≤ [X] hours | CISO | Monthly |
| Access Review Completion Rate | % of access reviews completed on schedule | % on-time | 100% | IAM Owner | Quarterly |
| SOC Alert False Positive Rate | % of SOC alerts classified as false positives | % false positive | ≤ [X]% | SOC Manager | Monthly |
| Penetration Test Coverage | % of in-scope systems tested annually | % tested | 100% | CISO | Annual |
| Third-Party Assessment Completion | % of Tier 1/2 vendors with current assessment | % current | 100% | IT Risk | Annual |

### 14.2 Key Risk Indicators (KRIs)

*KRIs provide early warning signals of increasing cybersecurity risk.*

| KRI | Description | Warning Threshold | Escalation Threshold | Owner | Reporting Frequency |
|---|---|---|---|---|---|
| Unpatched Critical Vulnerabilities | Number of open critical vulnerabilities > SLA | > 5 | > 20 | CISO | Monthly |
| Privileged Accounts Without MFA | Number of privileged accounts lacking MFA | > 0 | Any | CISO | Monthly |
| Active High/Critical Incidents | Number of open P1/P2 incidents | ≥ 1 | ≥ 3 | CISO | Real-time |
| Failed Access Control Reviews | Number of overdue access reviews | > [X] | > [X] | IAM Owner | Quarterly |
| SOC Detection Gap | % of tested scenarios detected by SOC | < [X]% | < [X]% | SOC Manager | Per exercise |
| Critical Vendor Security Non-Compliance | Number of Tier 1 vendors with unresolved high findings | ≥ 1 | ≥ 3 | IT Risk | Quarterly |
| Phishing Click Rate Trend | Increasing trend over 3 consecutive campaigns | +2% | +5% | CISO | Per campaign |

### 14.3 Cybersecurity Reporting Schedule

| Report | Content | Audience | Frequency | Owner |
|---|---|---|---|---|
| SOC Daily Operations Report | Daily alert summary, incidents, threat intelligence highlights | CISO | Daily | SOC Manager |
| Monthly Cybersecurity Operations Report | KPIs, incident summary, vulnerability status, patch compliance | CISO, CTO | Monthly | CISO |
| Quarterly Cybersecurity Risk Dashboard | KRIs, risk register updates, remediation status, upcoming activities | CRO, ExCo, MRC | Quarterly | CISO / IT Risk |
| Quarterly Cybersecurity Report (BRC) | Risk profile, material incidents, programme status, regulatory compliance | BRC | Quarterly | CRO / CISO |
| Annual Cybersecurity Risk Report | Comprehensive annual review; maturity assessment; upcoming year priorities | Board | Annual | CRO / CISO |
| Post-Incident Report (P1/P2) | Timeline, root cause, lessons learned, action plan | CRO, ExCo, BRC (P1) | Post-incident | CISO |
| Regulatory Notification (BNM) | Material incident notification and updates | BNM | Per requirement | CISO / Compliance |

### 14.4 Framework Review Process

This Cybersecurity Governance Framework is subject to **formal annual review** as a mandatory requirement under BNM RMiT. The review process is as follows:

| Step | Activity | Owner | Timeline |
|---|---|---|---|
| 1 | Initiate annual review; assign review team | CRO | [X] months before review due date |
| 2 | Review against current regulatory requirements (BNM, PDPA, NACSA) | Compliance Officer | [X] weeks |
| 3 | Review against current threat landscape and organisational changes | CISO / IT Risk | [X] weeks |
| 4 | Incorporate findings from Internal Audit and external assessments | IT Risk | [X] weeks |
| 5 | Draft revised Framework | CRO / CISO | [X] weeks |
| 6 | Internal review and consultation (Legal, Compliance, IT, Business) | CRO | [X] weeks |
| 7 | Submit to ExCo/MRC for review and endorsement | CRO | [Date] |
| 8 | Submit to BRC for review and recommendation | CRO | [Date] |
| 9 | Submit to Board for approval | CRO | [Date] |
| 10 | Publish approved Framework and communicate changes | CRO / CISO | Within [X] days of approval |

**Interim Review Triggers:** In addition to the annual review, this Framework must be reviewed and updated on an interim basis in response to:

- Material changes to BNM RMiT or other applicable regulatory requirements;
- Significant changes to the Organisation's technology architecture or operating model;
- A Critical (P1) cybersecurity incident that reveals material gaps in the governance framework;
- Material acquisitions, mergers, or divestitures;
- Direction from the Board, BRC, or BNM requiring policy amendments.

### 14.5 Control Self-Assessment Programme

The first line of defence conducts an annual **Cybersecurity Control Self-Assessment (CSA)** covering all security domains defined in Section 9. Results are:

- Reviewed and challenged by the second line (IT Risk);
- Consolidated into the Annual Cybersecurity Risk Report;
- Used to inform the annual review of this Framework;
- Shared with Internal Audit to support audit planning.

---

## 15. Review and Approval

### 15.1 Version History

| Version | Date | Author | Reviewed By | Description of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Name, Role] | [Name, Role] | Initial draft for internal consultation |
| 0.2 | [Date] | [Name, Role] | [Name, Role] | Revised following internal review; incorporated legal and compliance comments |
| 0.3 | [Date] | [Name, Role] | [Name, Role] | Revised following ExCo review |
| 1.0 | [Date] | [Name, Role] | [Name, Role] | Final version approved by Board |

### 15.2 Review and Endorsement Record

| Review Stage | Reviewer | Role | Date Reviewed | Outcome |
|---|---|---|---|---|
| Cybersecurity Steering Committee | [Name] | CISO | [Date] | [Endorsed / Endorsed with comments] |
| Compliance Review | [Name] | Compliance Officer | [Date] | [Endorsed / Endorsed with comments] |
| Legal Review | [Name] | General Counsel | [Date] | [Endorsed / Endorsed with comments] |
| Management Risk Committee | [Name] | CRO (Chair) | [Date] | [Endorsed / Endorsed with comments] |
| Board Risk Committee | [Name] | BRC Chair | [Date] | [Recommended for Board approval] |

### 15.3 Board Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| Chairman, Board of Directors | [Name] | _________________________ | [Date] |
| Chairman, Board Risk Committee | [Name] | _________________________ | [Date] |
| Chief Executive Officer | [Name] | _________________________ | [Date] |
| Chief Risk Officer (Document Owner) | [Name] | _________________________ | [Date] |

---

## 16. References

### 16.1 Primary Regulatory References

| Reference | Title | Issuing Authority | Relevant Clauses |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | 10.1–10.57, 11.1 – 11.7 (especially 11.3) |
| BNM RMiT | Guidelines on Management of Cyber Risk | Bank Negara Malaysia | All |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Sections 57, 136 |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | Sections 57, 136 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 (Security Principle) |
| PDPA (Amendment) 2023 | Personal Data Protection (Amendment) Act 2023 | Parliament of Malaysia | Data breach notification provisions |
| Cyber Security Act 2024 | Cyber Security Act 2024 | Parliament of Malaysia | All — obligations for CII entities |
| NCSP | National Cyber Security Policy | NACSA / MOSTI | Financial sector provisions |

### 16.2 Standards and Frameworks

| Reference | Title | Issuing Body | Version |
|---|---|---|---|
| NIST CSF | Cybersecurity Framework | NIST | 2.0 (2024) |
| ISO/IEC 27001 | Information Security Management Systems | ISO/IEC | 2022 |
| ISO/IEC 27002 | Information Security Controls | ISO/IEC | 2022 |
| ISO/IEC 27005 | Information Security Risk Management | ISO/IEC | 2022 |
| ISO 22301 | Business Continuity Management | ISO | 2019 |
| CIS Controls | CIS Critical Security Controls | Center for Internet Security | v8 |
| COBIT | COBIT Framework | ISACA | 2019 |
| PCI DSS | Payment Card Industry Data Security Standard | PCI SSC | 4.0 |
| SWIFT CSP | Customer Security Programme | SWIFT | Current |
| FAIR | Factor Analysis of Information Risk | FAIR Institute | Current |

### 16.3 Internal Policy References

| Document ID | Document Title | Relationship |
|---|---|---|
| [ID] | Enterprise Risk Management Framework | Parent framework |
| [ID] | Board Risk Appetite Statement | Parent — defines risk thresholds |
| [ID] | Information Security Policy | Child — operationalises this Framework |
| [ID] | Acceptable Use Policy | Child |
| [ID] | Access Management and Identity Policy | Child |
| [ID] | Cryptography and Key Management Policy | Child |
| [ID] | Vulnerability Management Policy | Child |
| [ID] | Cybersecurity Incident Response Plan | Child |
| [ID] | Third-Party and Vendor Risk Management Policy | Related |
| [ID] | Data Classification and Handling Policy | Related |
| [ID] | Business Continuity Management Framework | Related |
| [ID] | IT Risk Management Policy | Related |
| [ID] | Change Management Policy | Related |

---

## 17. Appendices

### Appendix A — Glossary of Terms

*Define key terms used in this Framework to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Advanced Persistent Threat (APT)** | A prolonged and targeted cyberattack in which an intruder gains access to a network and remains undetected for an extended period. |
| **Attack Surface** | The sum of all possible attack vectors through which an unauthorised user can attempt to enter data or extract data from an environment. |
| **BNM** | Bank Negara Malaysia, the Central Bank of Malaysia. |
| **CIRT** | Cybersecurity Incident Response Team — the designated team responsible for responding to cybersecurity incidents. |
| **CISO** | Chief Information Security Officer — the senior executive responsible for the information security programme. |
| **CRO** | Chief Risk Officer — the senior executive responsible for the enterprise risk management programme and owner of this Framework. |
| **CSC** | Cybersecurity Steering Committee. |
| **Cyber Resilience** | The ability of an organisation to anticipate, withstand, recover from, and adapt to adverse conditions, stresses, attacks, or compromises on cyber resources. |
| **Cybersecurity** | The practice of protecting systems, networks, and programmes from digital attacks, damage, or unauthorised access. |
| **Defence in Depth** | A layered security strategy in which multiple security measures are deployed to protect against multiple attack vectors. |
| **FAIR** | Factor Analysis of Information Risk — a quantitative cyber risk management framework. |
| **IAM** | Identity and Access Management. |
| **KPI** | Key Performance Indicator — a measurable value that demonstrates how effectively an organisation is achieving key objectives. |
| **KRI** | Key Risk Indicator — a metric used to indicate the level of risk exposure and provide early warning of increasing risk. |
| **Least Privilege** | The principle that every user, program, or process should access only the information and resources that are necessary for its legitimate purpose. |
| **MTTD** | Mean Time to Detect — the average time between the start of a security incident and its detection. |
| **MTTR** | Mean Time to Respond — the average time between detection of a security incident and its containment or resolution. |
| **NACSA** | National Cyber Security Agency of Malaysia. |
| **PAM** | Privileged Access Management — solutions that manage and secure privileged accounts and access. |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia). |
| **Penetration Testing** | A simulated cyberattack on a computer system performed to evaluate the security of that system. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a matrix used to clarify roles and responsibilities. |
| **RAS** | Risk Appetite Statement. |
| **Red Team** | An independent group that challenges an organisation to improve its effectiveness by assuming an adversarial role. |
| **RMiT** | Risk Management in Technology — a BNM policy document governing technology risk management for financial institutions. |
| **SDLC** | System Development Life Cycle — the process of planning, creating, testing, and deploying an information system. |
| **SIEM** | Security Information and Event Management — a system that provides real-time analysis of security alerts. |
| **SOC** | Security Operations Centre — a centralised unit that deals with security issues on an organisational level. |
| **Three Lines of Defence** | A model for governance and risk management that segregates responsibilities across three organisational layers: risk ownership (1st), risk oversight (2nd), and independent assurance (3rd). |
| **UEBA** | User and Entity Behaviour Analytics — a cybersecurity process that uses analytics to detect anomalies in user behaviour. |
| **Vulnerability** | A weakness in a system, application, or process that could be exploited by a threat actor. |
| **XDR** | Extended Detection and Response — a cybersecurity approach that integrates multiple security products to provide unified threat detection. |
| **Zero Trust** | A security model that requires strict identity verification for every person and device attempting to access resources, regardless of location. |

---

### Appendix B — BNM RMiT Clause 11.3 Compliance Mapping

*This appendix maps the specific requirements of BNM RMiT Clause 11.3 to sections of this Framework, supporting audit and regulatory examination readiness.*

| BNM RMiT Requirement | Clause Reference | Framework Section | Evidence / Artefact |
|---|---|---|---|
| Board-approved cybersecurity governance framework | 11.3(a) | Sections 4, 15.3 | This document; Board minutes |
| Defined cybersecurity roles and responsibilities | 11.3(b) | Sections 7, 6 | Section 7 RACI; Section 6 (3LoD) |
| Cybersecurity risk management methodology | 11.3(c) | Section 8 | Cybersecurity Risk Register |
| Cybersecurity strategy and objectives | 11.3(d) | Section 5 | Section 5.3, 5.4 |
| Three lines of defence for cybersecurity | 11.3(e) | Section 6 | Section 6 (3LoD Model) |
| Cybersecurity reporting to Board/senior management | 11.3(f) | Sections 4.2, 14.3 | Reporting templates; Board/BRC minutes |
| Annual review of cybersecurity governance framework | 11.3(g) | Section 14.4 | Review records; approval minutes |
| [Additional sub-clauses as applicable] | 11.3([x]) | [Section] | [Artefact] |

---

### Appendix C — Cybersecurity Governance Committee Terms of Reference

*This appendix contains or references the Terms of Reference (ToR) for the key governance bodies responsible for cybersecurity oversight.*

#### C.1 Board Risk Committee — Cybersecurity Mandate

*[Insert or reference the BRC Terms of Reference, highlighting the cybersecurity-specific mandate]*

- **Mandate Reference:** BRC Terms of Reference [Document ID: [XX]]
- **Cybersecurity-Specific Mandate:** Section [X] of the BRC ToR
- **Key Cybersecurity Responsibilities:** [Summary — refer to Section 4.2.2 of this Framework]

#### C.2 Cybersecurity Steering Committee — Terms of Reference

| Item | Detail |
|---|---|
| **Name** | Cybersecurity Steering Committee (CSC) |
| **Purpose** | Cross-functional coordination of cybersecurity programmes, risk management, and regulatory compliance |
| **Chair** | Chief Information Security Officer (CISO) |
| **Standing Members** | CISO, IT Risk Manager, Head of IT Operations, Compliance Officer, Legal Counsel, Business Unit Representatives (rotating) |
| **Observers** | Internal Audit (standing observer) |
| **Meeting Frequency** | Monthly |
| **Quorum** | [e.g., CISO + 3 standing members] |
| **Decision Authority** | Operational cybersecurity matters within the programme; matters requiring ExCo/Board approval are escalated |
| **Reporting To** | CRO / ExCo / MRC (quarterly) |
| **Secretariat** | [Role/function responsible for minutes and actions] |

---

### Appendix D — Cybersecurity Maturity Assessment Framework

*This appendix defines the maturity scale used for assessing the Organisation's cybersecurity capabilities.*

| Maturity Level | Name | Description |
|---|---|---|
| **1** | Initial | Processes are ad hoc, largely reactive. Cybersecurity activities are not defined or documented. Outcomes are unpredictable. |
| **2** | Developing | Basic processes exist but may not be consistently applied. Key cybersecurity controls are in place but may have gaps. |
| **3** | Defined | Processes are documented, standardised, and consistently applied. Controls are designed and operating. Regular reviews occur. |
| **4** | Managed | Processes are measured and controlled. Metrics are used to manage performance. Cybersecurity risk is proactively managed. |
| **5** | Optimising | Continuous improvement is embedded. Advanced capabilities (threat intelligence, automation) are utilised. Industry-leading practices are adopted. |

*Maturity assessments are conducted [annually] using [specify methodology, e.g., the NIST CSF, CMMI-based model, or a proprietary framework]. Results are reported to the BRC and inform the implementation roadmap in Section 13.*

---

### Appendix E — Regulatory Notification Templates and Contacts

*This appendix provides template notification letters and contact details for regulatory reporting. Details must be maintained as current.*

#### E.1 BNM Cybersecurity Incident Notification — Contact Details

| Recipient | Contact Method | Contact Details | Notes |
|---|---|---|---|
| Bank Negara Malaysia (Primary) | [e.g., Dedicated secure portal / email] | [As per current BNM RMiT guidance] | Do not include specific contact details — refer to current BNM RMiT |
| [Internal BNM Relationship Manager] | [Method] | [Contact] | [Notes] |

*Note: Contact details for BNM regulatory notifications must be verified and updated at each annual review of this Framework. Refer to the current BNM RMiT policy document and BNM's official communications for the latest notification procedures.*

#### E.2 Internal Escalation Contacts — Cybersecurity Incident

| Role | Name | Contact (Work) | Contact (Out of Hours) |
|---|---|---|---|
| CISO | [Name] | [Contact] | [Contact] |
| CRO | [Name] | [Contact] | [Contact] |
| CEO | [Name] | [Contact] | [Contact] |
| General Counsel | [Name] | [Contact] | [Contact] |
| Compliance Officer / DPO | [Name] | [Contact] | [Contact] |
| Head of Communications | [Name] | [Contact] | [Contact] |
| External Legal Counsel (Cyber) | [Firm / Name] | [Contact] | [Contact] |
| Cyber Insurance Broker | [Firm / Name] | [Contact] | [Contact] |
| External Forensics Retainer | [Firm / Name] | [Contact] | [Contact] |

---

### Appendix F — Related Policies and Standards Index

*A comprehensive index of all cybersecurity-related policies, standards, and procedures maintained by [Organization Name].*

| Document ID | Document Title | Owner | Version | Last Review | Next Review |
|---|---|---|---|---|---|
| [ID] | Information Security Policy | CISO | [Ver] | [Date] | [Date] |
| [ID] | Acceptable Use Policy | CISO / HR | [Ver] | [Date] | [Date] |
| [ID] | Access Management and Identity Policy | CISO | [Ver] | [Date] | [Date] |
| [ID] | Privileged Access Management Standard | CISO | [Ver] | [Date] | [Date] |
| [ID] | Password / Credential Management Standard | CISO | [Ver] | [Date] | [Date] |
| [ID] | Cryptography and Key Management Policy | CISO | [Ver] | [Date] | [Date] |
| [ID] | Network Security Policy | CISO / CTO | [Ver] | [Date] | [Date] |
| [ID] | Endpoint Security Standard | CISO | [Ver] | [Date] | [Date] |
| [ID] | Application Security Standard | CISO / CTO | [Ver] | [Date] | [Date] |
| [ID] | Vulnerability Management Policy | CISO | [Ver] | [Date] | [Date] |
| [ID] | Penetration Testing Standard | CISO | [Ver] | [Date] | [Date] |
| [ID] | Cybersecurity Incident Response Plan | CISO | [Ver] | [Date] | [Date] |
| [ID] | Data Classification and Handling Policy | DPO / CISO | [Ver] | [Date] | [Date] |
| [ID] | Data Loss Prevention Policy | CISO | [Ver] | [Date] | [Date] |
| [ID] | Cloud Security Policy | CISO / CTO | [Ver] | [Date] | [Date] |
| [ID] | Third-Party and Vendor Risk Management Policy | IT Risk / Procurement | [Ver] | [Date] | [Date] |
| [ID] | Security Awareness Training Standard | CISO / HR | [Ver] | [Date] | [Date] |
| [ID] | Physical and Environmental Security Policy | [Facilities / CISO] | [Ver] | [Date] | [Date] |
| [ID] | Business Continuity Management Framework | CRO / COO | [Ver] | [Date] | [Date] |
| [ID] | IT Change Management Policy | CTO | [Ver] | [Date] | [Date] |
| [ID] | IT Asset Management Policy | CTO / CISO | [Ver] | [Date] | [Date] |

---

### Appendix G — Document Control and Distribution

#### G.1 Document Control

| Attribute | Detail |
|---|---|
| **Document Owner** | Chief Risk Officer (CRO) |
| **Document Author** | [Name, Role] |
| **Document Custodian** | [Name, Role — responsible for maintaining and distributing the document] |
| **Storage Location** | [e.g., GRC system / SharePoint / Document Management System — specify path] |
| **Access Control** | Confidential — access restricted to authorised personnel as defined in the distribution list |
| **Format** | [e.g., PDF (controlled copy); Word (working copy)] |
| **Version Control** | Managed through [Document Management System / GRC platform] |

#### G.2 Distribution List

| Recipient | Role | Copy Type | Distribution Date |
|---|---|---|---|
| [Name] | Chairman, Board of Directors | Controlled (PDF) | [Date] |
| [Name] | Chairman, Board Risk Committee | Controlled (PDF) | [Date] |
| [Name] | Chairman, Board Audit Committee | Controlled (PDF) | [Date] |
| [Name] | Chief Executive Officer | Controlled (PDF) | [Date] |
| [Name] | Chief Risk Officer | Master Copy | [Date] |
| [Name] | Chief Information Security Officer | Controlled (PDF) | [Date] |
| [Name] | Chief Technology Officer | Controlled (PDF) | [Date] |
| [Name] | Chief Financial Officer | Controlled (PDF) | [Date] |
| [Name] | General Counsel | Controlled (PDF) | [Date] |
| [Name] | Compliance Officer / DPO | Controlled (PDF) | [Date] |
| [Name] | Head of Internal Audit | Controlled (PDF) | [Date] |
| [Name] | IT Risk Manager | Controlled (PDF) | [Date] |
| All Staff (summary/awareness version) | — | Intranet publication | [Date] |

---

*End of Document*

---

**[Organization Name] | Cybersecurity Governance Framework | Version 1.0 | Confidential**
**Document ID: [Document ID] | Last Review: [Last Review Date] | Next Review: [Next Review Date]**