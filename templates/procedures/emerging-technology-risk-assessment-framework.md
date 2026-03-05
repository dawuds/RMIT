# Emerging Technology Risk Assessment Framework

---

| Field | Details |
|-------|---------|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Framework Reference** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause** | 17.5 |
| **Review Frequency** | Continuous monitoring, quarterly review |
| **Status** | [Draft / Under Review / Approved] |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for the use of authorised personnel. Unauthorised disclosure, reproduction, or distribution of this document, in whole or in part, is strictly prohibited and may be subject to disciplinary action and/or legal proceedings under applicable Malaysian law, including but not limited to the Personal Data Protection Act 2010 (PDPA) and the Computer Crimes Act 1997.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Governance Structure](#4-governance-structure)
5. [Emerging Technology Classification Taxonomy](#5-emerging-technology-classification-taxonomy)
6. [Risk Assessment Methodology and Approach](#6-risk-assessment-methodology-and-approach)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Risk Assessment Process — Step-by-Step](#8-risk-assessment-process--step-by-step)
9. [Risk Domains and Assessment Criteria](#9-risk-domains-and-assessment-criteria)
10. [Risk Scoring and Prioritisation](#10-risk-scoring-and-prioritisation)
11. [Due Diligence and Technology Evaluation](#11-due-diligence-and-technology-evaluation)
12. [Risk Treatment and Mitigation Planning](#12-risk-treatment-and-mitigation-planning)
13. [Regulatory Reporting and Notification Obligations](#13-regulatory-reporting-and-notification-obligations)
14. [Vendor and Third-Party Risk Considerations](#14-vendor-and-third-party-risk-considerations)
15. [Implementation Roadmap](#15-implementation-roadmap)
16. [Monitoring, Review, and Continuous Improvement](#16-monitoring-review-and-continuous-improvement)
17. [Escalation and Exception Management](#17-escalation-and-exception-management)
18. [Training and Awareness](#18-training-and-awareness)
19. [Review and Approval](#19-review-and-approval)
20. [References](#20-references)
21. [Appendices](#21-appendices)

---

## 1. Executive Summary

*Provide a high-level summary of the framework's purpose, its strategic importance to the organisation, key risk areas addressed, and the overall approach adopted. This section should be suitable for senior management and Board review.*

[Organization Name] (hereinafter referred to as "the Bank" or "the Organisation") operates in a rapidly evolving digital landscape in which emerging technologies present both transformative opportunities and material risks. This **Emerging Technology Risk Assessment Framework** (hereinafter "the Framework") establishes a structured, repeatable, and auditable approach for identifying, evaluating, treating, and monitoring risks arising from the adoption of emerging technologies within the Organisation.

The Framework has been developed in alignment with **Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 17.5**, which requires financial institutions to implement robust risk assessment processes for the adoption of emerging and innovative technologies. The Framework further supports the Organisation's obligations under applicable Malaysian regulatory instruments, including the **Financial Services Act 2013 (FSA)**, the **Islamic Financial Services Act 2013 (IFSA)**, the **Personal Data Protection Act 2010 (PDPA)**, and **NACSA's National Cyber Security Policy**.

### 1.1 Strategic Context

*Describe the organisation's strategic posture towards technology innovation and how this framework supports responsible adoption of emerging technologies.*

[Organization Name] recognises that emerging technologies — including but not limited to Artificial Intelligence (AI), Machine Learning (ML), Distributed Ledger Technology (DLT), Cloud-Native Architectures, Robotic Process Automation (RPA), Application Programming Interfaces (APIs), Internet of Things (IoT), and Quantum Computing — hold significant potential to improve operational efficiency, customer experience, and competitive positioning. However, the adoption of these technologies must be governed by a proportionate and risk-sensitive framework.

### 1.2 Framework Objectives

*Summarise the key objectives of the framework at a level suitable for executive audiences.*

This Framework is designed to achieve the following objectives:

- Establish a **consistent and structured methodology** for assessing the risks of emerging technology adoption across all business units.
- Ensure **regulatory compliance** with BNM RMiT Clause 17.5 and related provisions.
- Enable **informed decision-making** by technology, risk, and business stakeholders prior to and during technology adoption lifecycles.
- Support the **Board and Senior Management** in maintaining oversight of technology risk exposure.
- Provide a **scalable and adaptive** process capable of addressing novel and unforeseen technology risks.
- Integrate emerging technology risk management into the **Enterprise Risk Management (ERM)** framework of the Organisation.

### 1.3 Key Risk Areas

*Provide a brief overview of the primary risk categories addressed by this framework.*

The Framework addresses the following primary risk domains in the context of emerging technology adoption:

| Risk Domain | Brief Description |
|-------------|-------------------|
| Cybersecurity Risk | Vulnerabilities, attack surfaces, and threat vectors introduced by new technologies |
| Operational Risk | Changes to processes, controls, and operational dependencies |
| Compliance and Regulatory Risk | Legal, regulatory, and licensing implications of technology adoption |
| Data Governance and Privacy Risk | Data handling, sovereignty, classification, and PDPA obligations |
| Model and Algorithm Risk | Bias, explainability, and model integrity for AI/ML systems |
| Concentration and Dependency Risk | Over-reliance on single vendors, platforms, or technology stacks |
| Strategic and Reputational Risk | Misalignment with strategy or potential reputational impact |
| Financial Risk | Cost overruns, technology obsolescence, and total cost of ownership |

### 1.4 Document Authority

This Framework is approved by [Approved By] and is effective from [Effective Date]. It supersedes any prior guidance documents relating to emerging technology risk assessment and shall be reviewed on a **quarterly basis**, with continuous monitoring of the risk landscape between scheduled reviews.

---

## 2. Purpose and Scope

*Clearly define what this document is intended to achieve, what it applies to, and any explicit exclusions. Reference the specific BNM RMiT clauses and other regulatory instruments that necessitate this framework.*

### 2.1 Purpose

The purpose of this Framework is to establish a formal, structured, and repeatable process by which [Organization Name] assesses, manages, and monitors risks associated with the adoption of emerging technologies. This Framework operationalises the requirements of **BNM RMiT Clause 17.5** by providing:

- A **taxonomy of emerging technologies** relevant to the Organisation's operations.
- A **risk assessment methodology** calibrated to the unique characteristics of emerging and nascent technologies.
- **Decision-support tools** for risk acceptance, mitigation, or rejection of technology adoption proposals.
- **Governance and accountability structures** for emerging technology risk oversight.
- **Monitoring mechanisms** to ensure ongoing risk management post-adoption.

### 2.2 Scope

#### 2.2.1 In-Scope

This Framework applies to:

- **All business units and subsidiaries** of [Organization Name] that are involved in the evaluation, piloting, procurement, development, or deployment of emerging technologies.
- **All technology adoption initiatives** that involve technologies assessed as "emerging" under the classification criteria defined in Section 5 of this Framework.
- **All third-party and vendor-supplied technologies** that are considered emerging in nature, including Software-as-a-Service (SaaS), Platform-as-a-Service (PaaS), and cloud-based AI/ML services.
- **Proof-of-Concept (PoC), Pilot, and Minimum Viable Product (MVP)** deployments, irrespective of their intended permanence.
- **Sandbox and regulatory innovation hub** participation activities involving emerging technologies.
- **Material enhancements** to existing technology platforms where the enhancement introduces emerging technology components.

#### 2.2.2 Out of Scope

The following are explicitly excluded from the scope of this Framework:

- Routine upgrades, patches, and maintenance of existing, established technology systems (these are governed by the Organisation's **Change Management Policy**).
- Standard commercial off-the-shelf (COTS) software with well-established market maturity and risk profiles.
- Technologies that have been previously assessed under this Framework within the preceding [24] months, unless material changes to the technology or operating environment have occurred.

*Note to document owner: Review the out-of-scope exclusions periodically to ensure they remain appropriate given the evolving definition of what constitutes an "established" versus "emerging" technology.*

### 2.3 Applicability

This Framework applies to all employees, contractors, consultants, and third-party service providers acting on behalf of [Organization Name] who are involved in the evaluation, adoption, or oversight of technology solutions. Compliance with this Framework is **mandatory for all in-scope activities**, regardless of whether the initiative is driven by business, technology, or a regulatory mandate.

### 2.4 Relationship to Other Policies and Frameworks

This Framework does not operate in isolation. It is part of an integrated risk management ecosystem and should be read in conjunction with the following [Organization Name] policies and frameworks:

| Document | Relevance |
|----------|-----------|
| Enterprise Risk Management Framework | Parent framework governing all risk activities |
| Information Technology Risk Policy | Overarching IT risk policy |
| Information Security Policy | Security controls applicable to all technology |
| Vendor and Third-Party Risk Management Policy | Third-party due diligence requirements |
| Data Governance and Privacy Policy | PDPA obligations and data classification |
| Business Continuity Management Policy | Resilience and continuity for adopted technologies |
| Change Management Policy | Controls for deployment of new or changed systems |
| Cloud Risk Management Framework | Specific guidance for cloud adoption |
| AI/ML Risk Management Guideline | Specific guidance for AI and machine learning systems |

---

## 3. Regulatory and Policy Context

*Describe the regulatory environment that necessitates this framework, citing specific clauses, policy documents, and applicable laws. This section provides the compliance rationale for the framework's existence and requirements.*

### 3.1 Bank Negara Malaysia (BNM) Requirements

#### 3.1.1 Risk Management in Technology (RMiT) Policy Document

The **BNM Risk Management in Technology (RMiT) Policy Document** is the primary regulatory instrument governing technology risk management for financial institutions licensed under the Financial Services Act 2013 and the Islamic Financial Services Act 2013. The following clauses are directly relevant to this Framework:

| Clause | Requirement Summary | Relevance to This Framework |
|--------|--------------------|-----------------------------|
| **17.5** | Financial institutions must assess risks of emerging technology adoption before deployment and on an ongoing basis | Primary clause; establishes the mandate for this framework |
| 17.1 | Technology risk governance obligations | Informs governance structure in Section 4 |
| 17.2 | Technology risk appetite and tolerance | Informs risk scoring thresholds in Section 10 |
| 17.3 | Technology risk identification and assessment | Informs methodology in Section 6 |
| 17.4 | Technology risk treatment and monitoring | Informs treatment planning in Section 12 |
| 10.1–10.5 | Cloud risk management | Applicable when emerging technology involves cloud services |
| 11.1–11.8 | Technology project risk management | Applicable to technology adoption projects |

*Note to document owner: Verify the above clause numbering against the current version of the BNM RMiT policy document. BNM periodically updates policy documents and clause references may change.*

#### 3.1.2 BNM Policy Document on Technology Risk Governance (if applicable)

*Insert reference to any supplementary BNM guidance documents, circulars, or frequently asked questions (FAQs) issued in relation to RMiT that are relevant to emerging technology risk.*

[Insert reference to applicable BNM supplementary guidance]

### 3.2 Other Applicable Malaysian Regulatory Instruments

| Instrument | Issuing Authority | Relevance |
|------------|------------------|-----------|
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | Licensing and prudential obligations for conventional financial institutions |
| Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | Licensing and prudential obligations for Islamic financial institutions |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Data privacy obligations; applies when emerging technologies process personal data |
| Computer Crimes Act 1997 | Parliament of Malaysia | Cybercrime provisions applicable to technology security controls |
| Communications and Multimedia Act 1998 | Parliament of Malaysia | Applicable to digital communications and platform technologies |
| National Cyber Security Policy (NCSP) | NACSA / NACSA | National cybersecurity requirements; applicable to critical information infrastructure |
| Securities Commission Malaysia Act 1993 (as amended) | Securities Commission | Applicable where technology adoption relates to capital market activities |

### 3.3 International Standards and Best Practices

While this Framework is primarily governed by Malaysian regulatory requirements, the following international standards inform the methodology and approach:

| Standard / Framework | Relevance |
|---------------------|-----------|
| ISO/IEC 27001:2022 — Information Security Management | Risk management principles and control frameworks |
| ISO 31000:2018 — Risk Management Guidelines | General risk management methodology |
| NIST Cybersecurity Framework (CSF) 2.0 | Cybersecurity risk identification and treatment |
| NIST AI Risk Management Framework (AI RMF 1.0) | AI-specific risk assessment methodology |
| COBIT 2019 | IT governance and management objectives |
| CIS Controls v8 | Security implementation guidance |
| FSB Principles for Sound Practices in AI and ML (2017) | AI/ML risk in financial services |
| Basel Committee on Banking Supervision — Principles for Operational Resilience | Resilience considerations for technology adoption |

---

## 4. Governance Structure

*Describe the governance framework within which emerging technology risk assessment operates, including committee structures, reporting lines, and escalation pathways. Ensure alignment with BNM RMiT governance requirements.*

### 4.1 Overview

[Organization Name] adopts a **three-lines-of-defence** model for the governance of emerging technology risk. This model ensures clear separation of responsibilities between technology operations, risk management, and independent assurance functions.

```
┌─────────────────────────────────────────────────────────────────┐
│                    BOARD OF DIRECTORS                          │
│           Board Risk Committee (BRC) / Board IT Committee      │
└─────────────────────────┬───────────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────────┐
│                  SENIOR MANAGEMENT                             │
│         Management Risk Committee (MRC) / ITSC                 │
└────────┬────────────────┬────────────────────────┬─────────────┘
         │                │                        │
┌────────▼──────┐ ┌───────▼────────┐    ┌──────────▼──────────┐
│  1st Line     │ │   2nd Line     │    │     3rd Line        │
│  Business /   │ │ Technology     │    │  Internal Audit     │
│  Technology   │ │ Risk Function  │    │  & Assurance        │
│  Units        │ │                │    │                     │
└───────────────┘ └────────────────┘    └─────────────────────┘
```

### 4.2 Governance Bodies and Committees

#### 4.2.1 Board Risk Committee (BRC)

*Describe the Board Risk Committee's oversight role in relation to emerging technology risk.*

| Attribute | Details |
|-----------|---------|
| **Composition** | [Insert composition — e.g., non-executive directors, independent directors] |
| **Chairperson** | [Name / Title Placeholder] |
| **Meeting Frequency** | Quarterly (minimum) |
| **Quorum** | [Insert quorum requirements] |
| **Emerging Technology Risk Responsibilities** | Approval of risk appetite for emerging technology; oversight of material technology risk exposures; approval of this Framework |

#### 4.2.2 Management Risk Committee (MRC)

| Attribute | Details |
|-----------|---------|
| **Composition** | Chief Risk Officer (CRO), Chief Technology Officer (CTO), Chief Information Security Officer (CISO), Chief Financial Officer (CFO), Head of Compliance, and other relevant C-suite members |
| **Chairperson** | Chief Risk Officer (CRO) |
| **Meeting Frequency** | Monthly |
| **Quorum** | [Insert quorum requirements] |
| **Emerging Technology Risk Responsibilities** | Review and approval of high-risk emerging technology assessments; monitoring of aggregate technology risk; escalation to BRC as required |

#### 4.2.3 Information Technology Steering Committee (ITSC)

| Attribute | Details |
|-----------|---------|
| **Composition** | CTO, CIO, CISO, Head of Technology Risk, business unit heads, and key technology leaders |
| **Chairperson** | Chief Technology Officer (CTO) or Chief Information Officer (CIO) |
| **Meeting Frequency** | Monthly |
| **Quorum** | [Insert quorum requirements] |
| **Emerging Technology Risk Responsibilities** | Review and endorsement of emerging technology adoption proposals; review of risk assessments prior to MRC escalation; oversight of the emerging technology pipeline |

#### 4.2.4 Emerging Technology Risk Working Group (ETRWG)

*This is an operational-level working group responsible for the day-to-day execution of the emerging technology risk assessment process.*

| Attribute | Details |
|-----------|---------|
| **Composition** | Head of Technology Risk (Chair), Technology Risk Managers, CISO / Information Security representatives, Legal and Compliance representatives, relevant business unit representatives, and subject matter experts as required |
| **Chairperson** | Head of Technology Risk |
| **Meeting Frequency** | Bi-weekly, or as required for active assessments |
| **Quorum** | [Insert quorum requirements] |
| **Emerging Technology Risk Responsibilities** | Conducting risk assessments; preparing assessment reports; maintaining the Emerging Technology Risk Register; coordinating with first-line technology teams; escalating findings to ITSC |

### 4.3 Governance Reporting Lines

*Describe the upward and lateral reporting flows for emerging technology risk information.*

| Report / Information | From | To | Frequency |
|----------------------|------|----|-----------|
| Emerging Technology Risk Assessment Report | ETRWG | ITSC | Per assessment; at minimum quarterly |
| Aggregate Emerging Technology Risk Dashboard | Head of Technology Risk | MRC | Monthly |
| Technology Risk Report (including emerging technology section) | CRO | BRC | Quarterly |
| Regulatory Notification (if required under RMiT) | CRO / CTO | BNM | As required (see Section 13) |
| Audit Findings on Emerging Technology Risk | Internal Audit | Audit Committee | Post-audit |

### 4.4 Integration with Enterprise Risk Management

Emerging technology risk is a subcategory of **Technology Risk** within [Organization Name]'s Enterprise Risk Management (ERM) Framework. All risk exposures identified through this Framework shall be:

- Recorded in the **Enterprise Risk Register** with appropriate taxonomy codes.
- Reported through standard **ERM reporting cycles**.
- Subject to the **risk appetite** and **risk tolerance** thresholds established under the ERM Framework.
- Escalated through the **standard ERM escalation pathways** where thresholds are breached.

---

## 5. Emerging Technology Classification Taxonomy

*Define what constitutes an "emerging technology" for the purposes of this framework, and provide a classification taxonomy to guide consistent identification and scoping of assessments.*

### 5.1 Definition of Emerging Technology

For the purposes of this Framework, an **Emerging Technology** is defined as:

> *Any technology, platform, system, tool, or approach that: (a) has not been previously deployed within [Organization Name] at production scale; (b) is characterised by rapid evolution, limited industry maturity, or limited regulatory guidance; (c) introduces novel risk profiles or risk vectors not fully addressed by existing risk management frameworks; or (d) is classified as emerging by BNM, relevant international regulatory bodies, or recognised industry standards bodies.*

### 5.2 Technology Maturity Classification

The following **Technology Readiness Level (TRL)** classification is used to assess the maturity of a technology and, correspondingly, the depth of risk assessment required:

| TRL Level | Description | Assessment Requirement |
|-----------|-------------|------------------------|
| **TRL 1–2** | Conceptual / Basic Research | Horizon scanning only; no formal assessment required at this stage |
| **TRL 3–4** | Proof of Concept / Experimental | Initial Technology Risk Screening (see Appendix A) |
| **TRL 5–6** | Pilot / Validated in Controlled Environment | Full Emerging Technology Risk Assessment (this Framework) |
| **TRL 7–8** | Operational Prototype / Production-Ready | Full Emerging Technology Risk Assessment + Vendor Due Diligence |
| **TRL 9** | Deployed / Mature | Standard IT risk assessment processes apply; this Framework may apply if novel use case |

### 5.3 Emerging Technology Categories

The following categories of emerging technologies are currently identified as relevant to [Organization Name]'s risk landscape. This list is reviewed quarterly and updated as the technology landscape evolves.

#### 5.3.1 Artificial Intelligence and Machine Learning (AI/ML)

*Include guidance text describing what falls under AI/ML for the purposes of this framework.*

| Sub-Category | Examples | Primary Risk Domains |
|--------------|----------|---------------------|
| Generative AI | Large Language Models (LLMs), text-to-image models, synthetic data generators | Model risk, IP risk, data privacy, information security |
| Predictive and Prescriptive Analytics | Credit scoring models, fraud detection, churn prediction | Model risk, bias, explainability, regulatory compliance |
| Natural Language Processing (NLP) | Chatbots, document processing, sentiment analysis | Data privacy, accuracy, regulatory compliance |
| Computer Vision | Document authentication, identity verification, surveillance | Data privacy, bias, regulatory compliance |
| Autonomous Decision Systems | Automated credit decisioning, algorithmic trading | Model risk, regulatory compliance, governance |
| Machine Learning Operations (MLOps) | Model management platforms, automated retraining pipelines | Operational risk, cybersecurity, model integrity |

#### 5.3.2 Distributed Ledger Technology (DLT) and Blockchain

| Sub-Category | Examples | Primary Risk Domains |
|--------------|----------|---------------------|
| Public Blockchain | Bitcoin, Ethereum, Solana integrations | Regulatory compliance, AML/CFT, volatility |
| Permissioned / Private Blockchain | Hyperledger Fabric, Corda, Quorum | Operational risk, cybersecurity, governance |
| Smart Contracts | Automated contract execution, DeFi protocols | Legal risk, operational risk, cybersecurity |
| Tokenisation Platforms | Asset tokenisation, CBDC infrastructure | Regulatory compliance, financial risk, cybersecurity |
| Decentralised Identity | Self-sovereign identity (SSI), verifiable credentials | Data privacy, regulatory compliance |

#### 5.3.3 Cloud and Edge Computing

| Sub-Category | Examples | Primary Risk Domains |
|--------------|----------|---------------------|
| Multi-Cloud and Hybrid Cloud | AWS + Azure + GCP architectures | Concentration risk, data sovereignty, operational risk |
| Serverless Computing | AWS Lambda, Azure Functions, Google Cloud Run | Operational risk, cybersecurity, cost management |
| Edge Computing | IoT edge devices, 5G edge nodes, branch processing | Cybersecurity, operational risk, data governance |
| Confidential Computing | Trusted Execution Environments (TEEs), secure enclaves | Cybersecurity, vendor risk |
| Cloud-Native Architectures | Kubernetes, microservices, service mesh | Operational complexity, cybersecurity |

#### 5.3.4 Internet of Things (IoT) and Connected Devices

| Sub-Category | Examples | Primary Risk Domains |
|--------------|----------|---------------------|
| Consumer IoT | Mobile banking device integrations, wearable payment | Data privacy, cybersecurity |
| Industrial IoT | Physical security systems, data centre sensors | Operational risk, cybersecurity |
| Embedded Payment Technologies | NFC, RFID, contactless payment terminals | Cybersecurity, regulatory compliance |

#### 5.3.5 Advanced API and Integration Technologies

| Sub-Category | Examples | Primary Risk Domains |
|--------------|----------|---------------------|
| Open Banking APIs | BNM Open API Framework compliance | Regulatory compliance, cybersecurity, data governance |
| Real-Time Integration Platforms | Event-driven architectures, streaming data | Operational risk, cybersecurity |
| GraphQL and Headless Architectures | Flexible API layers for digital banking | Cybersecurity, data governance |

#### 5.3.6 Quantum Computing

| Sub-Category | Examples | Primary Risk Domains |
|--------------|----------|---------------------|
| Quantum Processing | Quantum computing services (IBM Quantum, AWS Braket) | Cybersecurity (encryption threats), strategic risk |
| Post-Quantum Cryptography | NIST PQC standardised algorithms | Operational risk, compliance |

#### 5.3.7 Other Emerging Technologies

| Sub-Category | Examples | Primary Risk Domains |
|--------------|----------|---------------------|
| Robotic Process Automation (RPA) | Process automation bots, attended/unattended RPA | Operational risk, access control, audit trail |
| Augmented and Virtual Reality (AR/VR) | Customer experience applications, training simulations | Data privacy, operational risk |
| 5G and Advanced Connectivity | 5G-enabled banking services, network slicing | Cybersecurity, regulatory compliance |
| Biometrics | Facial recognition, voice authentication, palm vein | Data privacy, PDPA, regulatory compliance |
| Digital Identity | eKYC platforms, digital identity wallets | Regulatory compliance, data privacy, cybersecurity |

---

## 6. Risk Assessment Methodology and Approach

*Describe the overall methodology used to assess emerging technology risks. This section explains the philosophical approach (e.g., risk-based, principles-based) and the key components of the assessment methodology.*

### 6.1 Methodology Overview

[Organization Name] adopts a **risk-based, structured assessment methodology** for evaluating emerging technology risks. The methodology is grounded in the following principles:

1. **Proportionality** — The depth and rigour of the assessment is proportionate to the complexity, novelty, and potential impact of the technology.
2. **Objectivity** — Assessments are conducted by qualified, independent risk professionals using defined criteria.
3. **Holism** — All relevant risk domains are assessed, not limited to cybersecurity or operational risk.
4. **Forward-Looking** — The methodology anticipates future risk scenarios, not only present-state risks.
5. **Auditability** — All assessments are documented in a manner that is transparent, reproducible, and auditable.
6. **Iterability** — Risk assessments are revisited as the technology evolves and new information becomes available.
7. **Alignment** — Assessments are aligned to the Organisation's risk appetite, ERM Framework, and regulatory requirements.

### 6.2 Assessment Triggers

A formal emerging technology risk assessment under this Framework is triggered by any of the following events:

| Trigger | Description | Assessment Type |
|---------|-------------|-----------------|
| New technology proposal | Business or technology unit proposes adoption of an emerging technology | Full Assessment |
| PoC or Pilot initiation | Commencement of a Proof of Concept or pilot involving an emerging technology | Initial Screening + Full Assessment at progression gate |
| Material technology change | A material change to an existing technology system that introduces emerging technology components | Full or Partial Assessment (scoped to the change) |
| Regulatory change | New regulatory guidance issued that affects the risk profile of a previously assessed technology | Review and Update of existing assessment |
| Security incident | A security incident involving an emerging technology that materially affects the risk profile | Triggered Re-Assessment |
| Periodic review | Quarterly scheduled review of all active emerging technology risk assessments | Review and Update |
| Horizon scanning alert | Technology identified through horizon scanning as requiring proactive assessment | Initial Screening |
| Third-party change | A vendor or third-party makes a material change to an emerging technology already in use | Partial Re-Assessment |

### 6.3 Assessment Lifecycle

The emerging technology risk assessment lifecycle comprises the following phases:

```
Phase 1: Intake and Triage
        │
        ▼
Phase 2: Initial Technology Risk Screening
        │
        ▼
Phase 3: Comprehensive Risk Assessment
        │
        ▼
Phase 4: Risk Rating and Risk Treatment Planning
        │
        ▼
Phase 5: Governance Review and Approval
        │
        ▼
Phase 6: Implementation (if approved) with Risk Controls
        │
        ▼
Phase 7: Post-Implementation Review
        │
        ▼
Phase 8: Ongoing Monitoring and Periodic Review
```

Each phase is described in detail in Section 8 of this Framework.

### 6.4 Assessment Approach by Risk Level

The depth of the assessment is calibrated based on the initial risk screening outcome:

| Risk Level | Assessment Approach | Timeline (Target) | Approval Authority |
|------------|--------------------|--------------------|-------------------|
| **Critical** | Comprehensive multi-domain assessment with external expert input and regulatory pre-consultation | [8–12 weeks] | Board Risk Committee |
| **High** | Comprehensive multi-domain assessment with specialist input | [4–8 weeks] | Management Risk Committee |
| **Medium** | Standard multi-domain assessment | [2–4 weeks] | ITSC |
| **Low** | Streamlined assessment using standard templates | [1–2 weeks] | Head of Technology Risk |

### 6.5 Documentation Standards

All assessments under this Framework must be documented using the standard templates provided in Appendix B and must include, at minimum:

- Technology identification and description
- Assessment scope and boundaries
- Risk identification outputs across all applicable risk domains
- Risk scoring (likelihood and impact ratings)
- Risk treatment options and recommendations
- Assessment team details and sign-off
- References to supporting evidence

---

## 7. Roles and Responsibilities

*Define the roles and responsibilities of all key stakeholders in the emerging technology risk assessment process. Include a RACI matrix.*

### 7.1 Key Roles

| Role | Function | Named Individual / Placeholder |
|------|----------|-------------------------------|
| **Head of Technology Risk** (Framework Owner) | Overall ownership of this Framework; accountable for its implementation and maintenance | [Name / Title] |
| **Chief Risk Officer (CRO)** | Executive accountability for technology risk; approval authority for high-risk assessments | [Name / Title] |
| **Chief Technology Officer (CTO)** | Strategic leadership for technology adoption; co-approver of adoption decisions | [Name / Title] |
| **Chief Information Security Officer (CISO)** | Subject matter expertise for cybersecurity risk domains; security sign-off | [Name / Title] |
| **Chief Compliance Officer (CCO)** | Regulatory compliance oversight; responsible for regulatory notification decisions | [Name / Title] |
| **Technology Risk Manager(s)** | Operational execution of risk assessments; maintenance of the Emerging Technology Risk Register | [Name / Title] |
| **Business Unit Heads** | Identification and sponsorship of technology adoption proposals; first-line risk ownership | [Name / Title] |
| **Technology Project Managers** | Provision of technical information for assessments; integration of risk controls into project plans | [Name / Title] |
| **Legal Counsel** | Assessment of legal and regulatory risk dimensions; contract review for vendor technologies | [Name / Title] |
| **Data Privacy Officer (DPO)** | Assessment of PDPA and data privacy risk dimensions | [Name / Title] |
| **Internal Audit** | Independent assurance of the Framework's design and operating effectiveness | [Name / Title] |
| **External Auditors / Consultants** | Independent expert input for critical-level assessments (engaged as required) | [As engaged] |
| **BNM Relationship Manager** | Liaison with BNM for regulatory notifications and pre-consultations | [Name / Title] |

### 7.2 RACI Matrix — Emerging Technology Risk Assessment Process

*The RACI matrix below defines responsibilities for each key activity in the emerging technology risk assessment process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of Tech Risk | CRO | CTO | CISO | CCO | Tech Risk Manager | BU Head | Legal | DPO | Internal Audit |
|----------|:-----------------:|:---:|:---:|:----:|:---:|:-----------------:|:-------:|:-----:|:---:|:--------------:|
| Submit technology adoption proposal | C | I | A | I | I | I | R | I | I | – |
| Perform initial risk screening / triage | A | I | C | C | C | R | C | – | – | – |
| Determine assessment depth / type | A | C | C | C | C | R | I | – | – | – |
| Conduct cybersecurity risk assessment | C | I | C | A | I | R | I | – | – | – |
| Conduct data privacy risk assessment | C | I | C | C | C | R | C | C | A | – |
| Conduct operational risk assessment | A | C | C | C | C | R | C | – | – | – |
| Conduct compliance / regulatory risk assessment | C | C | C | C | A | R | C | C | – | – |
| Conduct vendor / third-party risk assessment | A | I | C | C | C | R | C | C | I | – |
| Consolidate assessment findings | A | I | C | C | C | R | I | – | – | – |
| Develop risk treatment recommendations | A | C | C | C | C | R | C | – | – | – |
| Review and endorse assessment (ITSC) | C | C | A | C | C | C | C | – | – | – |
| Approve assessment — Medium Risk (ITSC) | R | I | A | I | I | I | I | – | – | I |
| Approve assessment — High Risk (MRC) | C | A | C | C | C | I | I | – | – | I |
| Approve assessment — Critical Risk (BRC) | C | C | C | C | C | I | I | – | – | I |
| Determine need for BNM notification | C | A | C | C | R | I | – | C | – | – |
| Submit BNM regulatory notification | I | A | C | I | R | I | – | C | – | – |
| Maintain Emerging Technology Risk Register | A | I | I | I | I | R | I | – | – | I |
| Conduct post-implementation review | A | I | C | C | C | R | C | – | – | – |
| Conduct quarterly periodic review | A | I | C | C | C | R | C | – | – | I |
| Provide annual assurance over Framework | I | I | I | I | I | I | I | – | – | A |
| Maintain and update this Framework | A | C | C | C | C | R | I | – | – | I |

### 7.3 First Line of Defence Responsibilities

*Describe the responsibilities of first-line business and technology unit personnel in managing emerging technology risk.*

Business and technology units acting as the first line of defence are responsible for:

- **Identifying and notifying** the Technology Risk function of any proposed adoption of emerging technologies at the earliest possible stage.
- **Providing complete and accurate information** regarding the technology, its intended use, vendor details, and proposed deployment architecture to support risk assessment activities.
- **Implementing and operating** risk controls identified through the assessment process.
- **Monitoring** the performance and risk profile of deployed emerging technologies on an ongoing basis.
- **Escalating** any material changes to the technology, operating environment, or risk profile to the Technology Risk function.
- **Completing** mandatory training on this Framework and any associated procedures.

### 7.4 Second Line of Defence Responsibilities

*Describe the responsibilities of the Technology Risk function and other second-line functions.*

The Technology Risk function, as the primary second-line function for this Framework, is responsible for:

- **Maintaining** this Framework and its supporting procedures, templates, and tools.
- **Conducting** formal emerging technology risk assessments in accordance with this Framework.
- **Maintaining** the Emerging Technology Risk Register and associated reporting.
- **Providing** specialist risk advisory to first-line units on emerging technology risk matters.
- **Monitoring** the aggregate emerging technology risk profile of the Organisation.
- **Staying abreast** of emerging technology risk developments, regulatory changes, and industry best practices through horizon scanning activities.

### 7.5 Third Line of Defence Responsibilities

The Internal Audit function is responsible for:

- **Providing independent assurance** over the design and operating effectiveness of this Framework on an annual basis (or more frequently as warranted).
- **Reporting** audit findings to the Audit Committee and Senior Management.
- **Tracking** the remediation of audit findings relating to emerging technology risk management.

---

## 8. Risk Assessment Process — Step-by-Step

*Provide a detailed description of each phase of the risk assessment process, including inputs, activities, outputs, and responsible parties for each step.*

### 8.1 Phase 1 — Intake and Triage

#### 8.1.1 Purpose

*The purpose of the intake and triage phase is to capture initial information about the proposed technology adoption and determine whether a formal risk assessment under this Framework is required.*

#### 8.1.2 Trigger and Initiation

The process is initiated when a business or technology unit submits a **Technology Adoption Notification Form** (refer to Appendix B — Form TAF-01) to the Technology Risk function. Submissions may be made:

- Through the [Organisation's GRC / Risk Management System — System Name / URL Placeholder]
- Via email to [Technology Risk function email address placeholder]
- Through the IT Project intake process managed by [Project Management Office / IT Governance function]

#### 8.1.3 Triage Activities

Upon receipt of a Technology Adoption Notification Form, the Technology Risk Manager shall within **[3] business days**:

- [ ] Confirm receipt and assign a unique Emerging Technology Assessment Reference Number.
- [ ] Review the submission to determine whether the technology is in-scope under Section 2.2 of this Framework.
- [ ] If in-scope, classify the technology under the taxonomy in Section 5.3.
- [ ] Conduct a preliminary materiality check against the Emerging Technology Risk Register to determine whether the technology has been previously assessed.
- [ ] Notify the submitting unit of the outcome and next steps.

#### 8.1.4 Outputs

- Acknowledged Technology Adoption Notification Form
- Assigned Assessment Reference Number
- Initial in-scope / out-of-scope determination
- Commencement of Phase 2 (if in-scope)

---

### 8.2 Phase 2 — Initial Technology Risk Screening

#### 8.2.1 Purpose

*The Initial Technology Risk Screening provides a rapid, lightweight assessment of the technology to determine the inherent risk level and, consequently, the appropriate depth of the subsequent full assessment.*

#### 8.2.2 Screening Criteria

The screening shall assess the following dimensions using the **Initial Screening Scorecard** (Appendix B — Form IRS-01):

| Screening Dimension | Guiding Questions |
|--------------------|-------------------|
| Technology Novelty | Has this technology been previously deployed in [Organisation Name]? Is it widely deployed in the Malaysian financial services sector? |
| Regulatory Maturity | Is there existing BNM / SC regulatory guidance for this technology? Has BNM issued specific requirements or guidance? |
| Data Sensitivity | Does the technology process personal data, sensitive financial data, or confidential customer information? |
| Systemic Criticality | Could failure or compromise of this technology affect critical banking systems or services? |
| Vendor Maturity | Is the vendor or technology provider well-established? Is there meaningful market track record? |
| Integration Complexity | Does the technology require deep integration with core banking or critical infrastructure systems? |
| Cross-Border Implications | Does the technology involve data transfer or processing outside Malaysia? |
| Financial Exposure | What is the estimated total cost of ownership and potential financial impact if the technology fails? |

#### 8.2.3 Screening Outcome

| Screening Score | Risk Level | Next Step |
|----------------|------------|-----------|
| [Score Range] | Critical | Proceed to full comprehensive assessment; escalate to CRO; consider BNM pre-consultation |
| [Score Range] | High | Proceed to full comprehensive assessment; flag for MRC awareness |
| [Score Range] | Medium | Proceed to standard assessment |
| [Score Range] | Low | Proceed to streamlined assessment |

*Note to document owner: Define the specific scoring ranges based on the Organisation's risk appetite and calibration exercises.*

---

### 8.3 Phase 3 — Comprehensive Risk Assessment

#### 8.3.1 Purpose

*The comprehensive risk assessment is the core analytical phase of the framework. It involves a structured, multi-domain assessment of all material risks associated with the emerging technology.*

#### 8.3.2 Assessment Team Formation

The Head of Technology Risk shall convene an **Assessment Team** appropriate to the risk level of the technology. The team shall comprise, at minimum:

- Technology Risk Manager (lead assessor)
- Information Security representative (CISO function)
- Legal and Compliance representative
- Data Privacy Officer (where personal data is involved)
- Business Unit representative (as subject matter expert and first-line input)
- Technical architect or subject matter expert (internal or external)

For **Critical-level** assessments, the Assessment Team shall also include:

- External subject matter expert or specialist consultant with expertise in the specific technology domain
- Relevant senior management representation

#### 8.3.3 Information Gathering

The Assessment Team shall gather the following information as inputs to the assessment:

- Completed Technology Adoption Notification Form (Phase 1)
- Initial Screening Scorecard and findings (Phase 2)
- Technology architecture and design documentation
- Vendor documentation (if applicable): security documentation, certifications, audit reports (e.g., SOC 2 Type II, ISO 27001 certificate), regulatory compliance statements
- Proposed use case documentation, user stories, or business requirements
- Data flow diagrams and data inventory
- Proposed integration architecture with existing systems
- Vendor contract drafts (if available)
- Results of any preceding PoC or pilot activities
- Industry research, analyst reports, and regulatory guidance relevant to the technology
- Outputs of horizon scanning activities

#### 8.3.4 Assessment Execution

The Assessment Team shall conduct the comprehensive assessment across all applicable **Risk Domains** as defined in Section 9 of this Framework, using the **Comprehensive Assessment Template** (Appendix B — Form CAT-01).

---

### 8.4 Phase 4 — Risk Rating and Risk Treatment Planning

#### 8.4.1 Risk Rating

Following the completion of the multi-domain assessment, the Assessment Team shall:

- Assign **Likelihood** and **Impact** ratings to each identified risk using the scales defined in Section 10.
- Calculate the **Inherent Risk Rating** for each risk.
- Identify existing controls and assess their effectiveness.
- Calculate the **Residual Risk Rating** for each risk after consideration of existing controls.
- Identify risks that exceed the Organisation's **risk appetite** thresholds.

#### 8.4.2 Risk Treatment Planning

For each risk rated **Medium** or above (residual), the Assessment Team shall develop a **Risk Treatment Plan** specifying:

- The preferred treatment option (Avoid / Mitigate / Transfer / Accept)
- Specific control measures or mitigating actions required
- Responsible owner for each action
- Target completion date
- Measurable success criteria
- Residual risk rating expected after treatment

#### 8.4.3 Overall Technology Risk Assessment Recommendation

The Assessment Team shall prepare an overall recommendation, which shall be one of the following:

| Recommendation | Description |
|----------------|-------------|
| **Approved — Proceed** | The technology may proceed to implementation. Residual risk is within appetite. All required controls are defined and committed. |
| **Approved with Conditions** | The technology may proceed subject to the implementation of specified controls prior to or concurrent with deployment. Progress is monitored. |
| **Deferred — Further Information Required** | The assessment cannot be completed or concluded due to insufficient information. Proceeding must wait until required information is obtained. |
| **Not Approved — Mitigations Insufficient** | The technology cannot be approved in its current form. Significant redesign or alternative solution required. |
| **Not Approved — Risk Exceeds Appetite** | Residual risk, even with proposed mitigations, exceeds the Organisation's risk appetite. Technology adoption is rejected. |

---

### 8.5 Phase 5 — Governance Review and Approval

*Describe the governance approval process based on the risk level of the assessment outcome.*

The completed assessment package, including the Comprehensive Assessment Report and Risk Treatment Plan, shall be submitted for approval to the appropriate governance body based on the risk level determined in Phase 2:

| Risk Level | Submission Timeline (from Phase 4 completion) | Approval Authority |
|------------|----------------------------------------------|--------------------|
| **Critical** | Within [5] business days | Board Risk Committee |
| **High** | Within [5] business days | Management Risk Committee |
| **Medium** | Within [3] business days | Information Technology Steering Committee |
| **Low** | Within [2] business days | Head of Technology Risk |

---

### 8.6 Phase 6 — Implementation with Risk Controls

*Describe the risk management requirements during the technology implementation phase.*

Where the technology adoption is approved (with or without conditions), the Technology Risk function shall:

- Ensure that all conditions and required controls specified in the Risk Treatment Plan are incorporated into the **project plan and implementation schedule**.
- Assign **control owners** for each required risk control.
- Define **Key Risk Indicators (KRIs)** and monitoring metrics for the technology (see Section 16).
- Conduct a **pre-implementation risk review** prior to production deployment to confirm that all pre-deployment conditions have been satisfied.
- Register the technology in the **Emerging Technology Risk Register** and the **Technology Asset Inventory**.

---

### 8.7 Phase 7 — Post-Implementation Review

*Describe the post-implementation review requirements.*

A **Post-Implementation Review (PIR)** shall be conducted within **[90] calendar days** of production deployment. The PIR shall:

- Confirm that risk controls are operating as designed.
- Identify any unexpected risks or issues that have materialised since deployment.
- Review actual performance against pre-deployment risk assumptions.
- Update the risk assessment and risk register accordingly.
- Escalate any material deviations to the appropriate governance body.

---

### 8.8 Phase 8 — Ongoing Monitoring and Periodic Review

*Describe the ongoing monitoring and scheduled review requirements.*

All emerging technologies deployed by [Organization Name] are subject to **continuous monitoring** and **scheduled periodic reviews** in accordance with Section 16 of this Framework.

---

## 9. Risk Domains and Assessment Criteria

*Define the risk domains to be assessed, the assessment criteria for each domain, and the key risk indicators and questions to guide assessment.*

### 9.1 Risk Domain 1 — Cybersecurity Risk

*Assess the cybersecurity threats, vulnerabilities, and attack surfaces introduced or expanded by the emerging technology.*

#### Assessment Criteria

| Assessment Area | Guiding Assessment Questions |
|----------------|------------------------------|
| Threat surface expansion | Does the technology introduce new entry points, attack vectors, or exploitable surfaces? |
| Vulnerability management | Are known vulnerabilities in the technology documented and patchable? What is the vendor's vulnerability disclosure and patching cadence? |
| Authentication and access control | Does the technology support strong authentication mechanisms (e.g., MFA, certificate-based)? Are access controls sufficient for the sensitivity of data processed? |
| Encryption | Is data encrypted in transit and at rest using approved algorithms and key lengths? |
| Security architecture | Has a formal security architecture review been conducted? Are security-by-design principles applied? |
| Penetration testing | Has independent penetration testing been conducted against the technology? Are findings remediated? |
| Supply chain security | What is the security posture of the technology supply chain (software dependencies, build pipeline, etc.)? |
| Security certifications | Does the technology or vendor hold relevant security certifications (e.g., ISO 27001, SOC 2, CSA STAR)? |
| Incident response | Are there defined procedures for security incidents involving this technology? |
| Zero-day exposure | What is the organisation's exposure to zero-day vulnerabilities in this technology? |

---

### 9.2 Risk Domain 2 — Operational Risk

*Assess the operational risks arising from the introduction of the emerging technology into the Organisation's operating environment.*

#### Assessment Criteria

| Assessment Area | Guiding Assessment Questions |
|----------------|------------------------------|
| Operational complexity | Does the technology significantly increase operational complexity? Are staff capable of operating and maintaining it? |
| System integration | What are the risks associated with integration with existing systems? Are integration dependencies well-understood? |
| Change management | Can changes, updates, and patches be applied to the technology in a controlled manner? |
| Business continuity | What is the impact on business continuity if the technology fails? Are failover and recovery mechanisms adequate? |
| Technology obsolescence | What is the risk of the technology becoming obsolete? Is there a vendor roadmap? |
| Key person dependency | Is there undue reliance on specific individuals or vendors for operation of the technology? |
| Process change risk | Does adoption of the technology require significant process changes? Are change management controls adequate? |
| Testing and quality assurance | Have adequate testing (functional, regression, performance, security) regimes been defined? |
| Auditability and logging | Does the technology produce sufficient, tamper-evident audit logs? |

---

### 9.3 Risk Domain 3 — Compliance and Regulatory Risk

*Assess the legal, regulatory, and compliance risks arising from adoption of the emerging technology.*

#### Assessment Criteria

| Assessment Area | Guiding Assessment Questions |
|----------------|------------------------------|
| Regulatory clarity | Is there clear BNM regulatory guidance applicable to this technology? If not, has informal guidance been sought? |
| Licensing and authorisation | Does adoption of this technology require any new licences, authorisations, or regulatory notifications? |
| AML/CFT implications | Does the technology introduce or alter AML/CFT risks or obligations? |
| Consumer protection | Does the technology affect the Organisation's consumer protection obligations under the FSA/IFSA? |
| Legal enforceability | Are agreements, contracts, or transactions facilitated by the technology legally enforceable under Malaysian law? |
| Cross-border regulatory risk | Are there foreign regulatory requirements triggered by the technology (e.g., GDPR, data localisation laws)? |
| Intellectual property | Are there IP ownership, licensing, or infringement risks associated with the technology? |
| Standards compliance | Does the technology comply with applicable industry standards (e.g., PCI DSS, ISO standards)? |

---

### 9.4 Risk Domain 4 — Data Governance and Privacy Risk

*Assess the data governance and personal data protection risks arising from the technology, with specific reference to PDPA 2010 obligations.*

#### Assessment Criteria

| Assessment Area | Guiding Assessment Questions |
|----------------|------------------------------|
| Personal data processing | Does the technology process personal data as defined under PDPA 2010? What categories of personal data? |
| Data minimisation | Does the technology collect and process only the minimum data necessary for the stated purpose? |
| Consent and notice | Are appropriate consent mechanisms and privacy notices in place for data subjects? |
| Data sovereignty and localisation | Where is data stored and processed? Are there data localisation requirements? |
| Data retention and deletion | Are data retention periods defined? Can data be deleted in accordance with PDPA obligations and data subject rights? |
| Cross-border data transfer | Is personal data transferred outside Malaysia? Is this compliant with PDPA requirements? |
| Data subject rights | Can the technology support fulfilment of data subject access and correction rights under PDPA? |
| Data breach risk | What is the risk of a data breach through this technology? Are breach detection and notification procedures in place? |
| Data classification | Is data processed by the technology properly classified under the Organisation's Data Classification Policy? |

---

### 9.5 Risk Domain 5 — Model and Algorithm Risk

*This risk domain applies specifically to technologies involving AI/ML models, algorithmic decision-making, or statistical models.*

#### Assessment Criteria

| Assessment Area | Guiding Assessment Questions |
|----------------|------------------------------|
| Model accuracy and performance | Has the model been validated for accuracy, precision, recall, and other relevant performance metrics? |
| Bias and fairness | Has the model been tested for bias, discrimination, or unfair outcomes? What are the fairness metrics? |
| Explainability and transparency | Can the model's decisions be explained in a manner understandable to regulators and customers? |
| Model governance | Is there a defined model governance process covering development, validation, deployment, and monitoring? |
| Training data quality | Is the training data of sufficient quality, representativeness, and provenance? |
| Model drift | Are there mechanisms to detect and respond to model drift or degradation in performance over time? |
| Adversarial robustness | Is the model resilient to adversarial inputs or data poisoning attacks? |
| Human oversight | Are there adequate human oversight and override mechanisms for automated model decisions? |
| Model documentation | Is the model comprehensively documented in accordance with regulatory model risk management requirements? |

---

### 9.6 Risk Domain 6 — Concentration and Dependency Risk

*Assess the risks arising from reliance on specific technologies, vendors, or platforms.*

#### Assessment Criteria

| Assessment Area | Guiding Assessment Questions |
|----------------|------------------------------|
| Vendor concentration | Does adoption of this technology create or increase concentration risk with an existing vendor? |
| Technology lock-in | Does the technology create exit barriers? What are the switching costs and migration risks? |
| Single point of failure | Does the technology introduce a single point of failure into critical processes or systems? |
| Market concentration | Is this technology controlled by a small number of market participants (e.g., hyperscaler cloud services)? |
| Open source dependency | Does the technology rely heavily on open source components? Are these components actively maintained? |

---

### 9.7 Risk Domain 7 — Strategic and Reputational Risk

*Assess the strategic and reputational risks associated with the technology adoption.*

#### Assessment Criteria

| Assessment Area | Guiding Assessment Questions |
|----------------|------------------------------|
| Strategic alignment | Is the technology adoption aligned with the Organisation's approved technology strategy and digital roadmap? |
| Reputational risk | Could the use of this technology (or its failure) cause reputational harm to the Organisation? |
| Customer trust | Does adoption of the technology risk eroding customer trust (e.g., privacy concerns, algorithmic decisions)? |
| Media and public perception | How might the media or public perceive the Organisation's use of this technology? |
| Ethical considerations | Are there ethical concerns (e.g., AI ethics, environmental impact) associated with the technology? |

---

### 9.8 Risk Domain 8 — Financial Risk

*Assess the financial risks associated with the emerging technology adoption.*

#### Assessment Criteria

| Assessment Area | Guiding Assessment Questions |
|----------------|------------------------------|
| Cost certainty | Is the total cost of ownership (TCO) well-understood and budgeted? Are there cost overrun risks? |
| Technology obsolescence cost | What is the estimated cost of managing technology obsolescence or forced migration? |
| Financial loss exposure | What is the maximum potential financial loss if the technology fails, is breached, or is misused? |
| Insurance coverage | Is the financial risk exposure covered under the Organisation's insurance policies? |
| Return on investment | Is there a credible business case demonstrating value-for-money? |

---

## 10. Risk Scoring and Prioritisation

*Define the risk scoring methodology used to rate and prioritise identified risks.*

### 10.1 Risk Scoring Approach

[Organization Name] uses a **5×5 risk matrix** to score identified risks. Risks are scored on two dimensions:

- **Likelihood** — The probability that the risk will materialise within the assessment period.
- **Impact** — The magnitude of the consequences if the risk materialises.

### 10.2 Likelihood Scale

| Score | Rating | Definition |
|-------|--------|-----------|
| **5** | Almost Certain | Expected to occur within the assessment period. Probability > 70%. |
| **4** | Likely | Will probably occur within the assessment period. Probability 50–70%. |
| **3** | Possible | Could occur within the assessment period. Probability 20–50%. |
| **2** | Unlikely | Not expected but could occur. Probability 5–20%. |
| **1** | Rare | Highly unlikely to occur. Probability < 5%. |

### 10.3 Impact Scale

| Score | Rating | Financial Impact | Operational Impact | Regulatory / Reputational Impact |
|-------|--------|-----------------|-------------------|----------------------------------|
| **5** | Catastrophic | > MYR [X] million loss | Severe, prolonged service disruption | Regulatory sanction, licence risk, or major public scandal |
| **4** | Major | MYR [X–Y] million | Significant disruption to critical services | Formal regulatory action or significant adverse media coverage |
| **3** | Moderate | MYR [X–Y] million | Moderate disruption; manageable within normal operations | Regulatory inquiry or negative media attention |
| **2** | Minor | MYR [X–Y] million | Limited disruption; quickly resolved | Minor regulatory correspondence or limited adverse publicity |
| **1** | Negligible | < MYR [X] million | Minimal disruption; no material operational impact | No regulatory or reputational consequence |

*Note to document owner: Define the financial thresholds (MYR values) for each impact level in accordance with the Organisation's ERM Framework and risk appetite statement.*

### 10.4 Risk Rating Matrix

| | **Impact 1 (Negligible)** | **Impact 2 (Minor)** | **Impact 3 (Moderate)** | **Impact 4 (Major)** | **Impact 5 (Catastrophic)** |
|---|:---:|:---:|:---:|:---:|:---:|
| **Likelihood 5 (Almost Certain)** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Likelihood 4 (Likely)** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Likelihood 3 (Possible)** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Likelihood 2 (Unlikely)** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Likelihood 1 (Rare)** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

### 10.5 Risk Appetite Thresholds

| Risk Rating | Score Range | Risk Appetite Position | Required Action |
|-------------|-------------|------------------------|-----------------|
| **Critical** | 16–25 | Outside risk appetite | Cannot proceed without Board approval and explicit risk acceptance or treatment to reduce to High or below |
| **High** | 10–15 | At the boundary of risk appetite | Requires MRC review; specific treatment measures mandatory; close monitoring |
| **Medium** | 5–9 | Within risk appetite with management attention | Risk treatment recommended; regular monitoring |
| **Low** | 1–4 | Within risk appetite | Monitor through standard mechanisms |

*Note to document owner: Align these thresholds with the Organisation's formal Risk Appetite Statement.*

---

## 11. Due Diligence and Technology Evaluation

*Describe the due diligence requirements that must be satisfied before an emerging technology is approved for adoption.*

### 11.1 Technical Due Diligence

*Describe the technical evaluation activities required to assess the maturity, security, and fitness-for-purpose of the emerging technology.*

The Assessment Team shall conduct or commission the following technical due diligence activities, proportionate to the risk level of the technology:

| Due Diligence Activity | Applicable Risk Levels | Responsible Party |
|------------------------|----------------------|-------------------|
| Security architecture review | All | CISO / Information Security |
| Code review / static analysis (for internally developed or modified components) | All (where code is available) | Information Security / Technology |
| Penetration testing by qualified testers | High, Critical | Information Security (third-party testers) |
| Infrastructure and cloud configuration review | Medium, High, Critical | Information Security / Technology |
| Performance and scalability testing | Medium, High, Critical | Technology / Project Team |
| Interoperability and integration testing | All | Technology / Project Team |
| Disaster recovery and resilience testing | High, Critical | Technology / Business Continuity |
| AI/ML model validation (for AI technologies) | All AI/ML | Data Science / Technology Risk / External |
| Open source licence and dependency scan | All (where open source components used) | Technology |

### 11.2 Vendor Due Diligence

*Describe the vendor due diligence requirements for third-party technology providers.*

Where the emerging technology is provided by a third party, the following vendor due diligence shall be conducted in accordance with the Organisation's **Vendor and Third-Party Risk Management Policy**:

| Due Diligence Area | Documentation Required | Notes |
|-------------------|----------------------|-------|
| Vendor financial stability | Audited financial statements (last 2 years) | To assess viability of the vendor |
| Security certifications | ISO 27001, SOC 2 Type II, CSA STAR, or equivalent | Current and valid certificates required |
| Regulatory compliance | Vendor compliance attestations; BNM RMiT acknowledgement | Where vendor operates in regulated environment |
| Data processing practices | Data Processing Agreement (DPA); sub-processor list | Mandatory where personal data processed |
| Business continuity | Business Continuity and Disaster Recovery documentation | Service criticality-dependent |
| Penetration testing | Vendor penetration test results (last 12 months) | External tests preferred |
| Reference checks | Customer references from comparable financial institutions | At least two references for high-risk technologies |
| Escrow arrangements | Source code escrow agreement | Required for critical system dependencies |
| Exit and termination | Defined exit and data portability procedures | Mandatory for high-risk / critical vendors |
| Insurance | Cyber liability and professional indemnity insurance evidence | Review coverage amounts |

### 11.3 Regulatory Pre-Consultation

For **Critical-level** technology assessments, and for any technology that falls within an area where BNM has requested advance notification or consultation, the Organisation shall:

- Consult internally with Legal and Compliance to determine whether BNM pre-consultation is required.
- Where required, engage with the relevant BNM department or the BNM FinTech regulatory sandbox programme (where applicable) before committing to technology adoption.
- Document the outcome of any BNM pre-consultation as part of the assessment record.

---

## 12. Risk Treatment and Mitigation Planning

*Describe the approach to risk treatment, including the treatment options available, the requirements for risk treatment plans, and the monitoring of treatment progress.*

### 12.1 Risk Treatment Options

For each identified risk, the Assessment Team shall recommend one of the following treatment strategies:

| Treatment Strategy | Description | Applicability |
|-------------------|-------------|---------------|
| **Avoid** | Do not adopt the technology, or redesign the adoption to eliminate the risk entirely | Where risk cannot be reduced to within appetite through other means |
| **Mitigate** | Implement controls to reduce the likelihood and/or impact of the risk | Primary treatment for most identified risks |
| **Transfer** | Transfer or share the risk through contractual arrangements (e.g., vendor liability), insurance, or outsourcing | Where the risk can be effectively managed by a third party |
| **Accept** | Formally accept the risk, acknowledging that it falls within the Organisation's risk appetite and that further treatment is not warranted | Only for Low and Medium risks; requires documented acceptance by an appropriate authority |

### 12.2 Risk Treatment Plan Requirements

A formal **Risk Treatment Plan (RTP)** shall be prepared for all risks rated **Medium or above**. Each RTP shall include:

| Field | Description |
|-------|-------------|
| Risk ID | Unique identifier from the risk register |
| Risk Description | Clear description of the risk |
| Risk Rating (Inherent) | Pre-control likelihood × impact rating |
| Existing Controls | Description of controls currently in place |
| Risk Rating (Current Residual) | Residual risk after existing controls |
| Treatment Strategy | Avoid / Mitigate / Transfer / Accept |
| Proposed Control Measures | Specific, actionable controls to be implemented |
| Control Owner | Named individual responsible for implementing and operating the control |
| Target Completion Date | Date by which the control will be in operation |
| KRI / Success Metric | How effective implementation will be measured |
| Target Risk Rating (Post-Treatment) | Expected residual risk after controls are implemented |
| Status | [Not Started / In Progress / Implemented / Validated] |

### 12.3 Control Categories

*Describe the categories of controls that may be used to mitigate identified risks.*

Risk treatment controls shall be selected from the following categories, in accordance with a **defence-in-depth** approach:

| Control Category | Description | Examples |
|-----------------|-------------|---------|
| **Preventive** | Controls designed to prevent the risk from materialising | Access controls, encryption, input validation, security architecture standards |
| **Detective** | Controls designed to detect when a risk has materialised | Monitoring, logging, anomaly detection, audit trails |
| **Corrective** | Controls designed to limit damage and restore normal operations after a risk event | Incident response procedures, backups, failover mechanisms |
| **Directive** | Controls that direct behaviour through policies, procedures, and training | Security awareness training, policies, contractual obligations |
| **Compensating** | Controls implemented in lieu of a primary control where the primary control cannot be implemented | Additional monitoring, enhanced access reviews |

### 12.4 Residual Risk Acceptance

Where residual risk exceeds the Organisation's risk appetite after all practical mitigation measures have been applied, a **formal risk acceptance** is required:

| Residual Risk Level | Required Risk Acceptance Authority |
|--------------------|-----------------------------------|
| **Critical** | Board Risk Committee |
| **High** | Chief Risk Officer (CRO) |
| **Medium** | Head of Technology Risk |

Risk acceptance decisions must be documented in the **Risk Acceptance Register**, specifying the residual risk level, justification for acceptance, conditions attached to acceptance, and the review date.

---

## 13. Regulatory Reporting and Notification Obligations

*Describe the Organisation's obligations to notify or report to BNM and other regulatory authorities in relation to emerging technology adoption, and the internal process for managing these obligations.*

### 13.1 BNM Notification Requirements

*Provide guidance on when BNM notification or reporting is required in relation to emerging technology adoption. This section should be reviewed and validated by the Legal and Compliance function against current BNM requirements.*

The following circumstances may trigger a BNM notification or reporting obligation:

| Trigger | Applicable Requirement | Notification Timeline | Responsible Party |
|---------|----------------------|-----------------------|-------------------|
| Adoption of a new technology that materially affects the risk profile or service delivery of the institution | BNM RMiT [Applicable Clause] | [As specified by BNM — typically in advance of deployment] | CRO / CCO |
| Technology-related incident affecting service availability or data integrity | BNM Incident Reporting Requirements | [As specified by BNM — typically within 24–72 hours of discovery] | CISO / CTO |
| Participation in the BNM FinTech Regulatory Sandbox | BNM Sandbox Framework | Prior to participation | CCO / CTO |
| Outsourcing of a material function involving emerging technology to a third party | BNM Outsourcing Policy | [As specified by BNM] | CCO |

*Note to document owner: This section must be reviewed and updated by the Legal and Compliance function to accurately reflect current BNM notification requirements, including specific timelines and reporting formats.*

### 13.2 Internal Notification and Escalation

In addition to external regulatory reporting, the following internal notification thresholds apply:

| Event | Internal Notification Requirement |
|-------|-----------------------------------|
| Identification of a Critical-level technology risk | Notify CRO and CTO within [1] business day |
| Assessment outcome of "Not Approved — Risk Exceeds Appetite" | Notify MRC within [3] business days |
| Material change to the risk profile of a deployed emerging technology | Notify Head of Technology Risk within [1] business day; escalate to ITSC within [5] business days |
| Technology-related security incident involving an emerging technology | Notify CISO immediately; follow Incident Response Procedure [IR-XXX] |

---

## 14. Vendor and Third-Party Risk Considerations

*Describe the specific considerations applicable to emerging technologies sourced from third-party vendors, including contractual requirements, ongoing monitoring, and exit planning.*

### 14.1 Contractual Requirements for Emerging Technology Vendors

All contracts with vendors providing emerging technology solutions to [Organization Name] shall include, at minimum, the following provisions:

| Contractual Provision | Description | Mandatory / Recommended |
|----------------------|-------------|------------------------|
| Security requirements | Vendor shall maintain and comply with specified security standards | Mandatory |
| Audit rights | Organisation reserves the right to audit vendor security practices | Mandatory |
| Incident notification | Vendor shall notify the Organisation of security incidents within [24] hours of discovery | Mandatory |
| Data protection | Vendor shall comply with PDPA 2010 obligations; Data Processing Agreement mandatory where personal data processed | Mandatory |
| Data localisation | Data shall be stored and processed within Malaysia (or as permitted by BNM) | Mandatory (subject to BNM approval for offshore processing) |
| Subprocessor management | Vendor shall notify Organisation before engaging subprocessors; Organisation retains approval rights | Mandatory |
| BNM audit rights | Organisation shall have the right to grant BNM access to audit the vendor | Mandatory |
| Business continuity | Vendor shall maintain adequate BCM/DR capabilities | Mandatory |
| Exit / termination | Vendor shall provide data portability and transition assistance upon termination | Mandatory |
| Source code escrow | Source code shall be placed in escrow where technology is critical | Mandatory (for critical technology) |
| IP ownership | Ownership of data, models, and outputs shall be clearly defined | Mandatory |
| SLA and performance standards | Minimum service levels shall be defined and monitored | Mandatory |
| Liability and indemnification | Vendor liability for technology failures and breaches shall be explicitly addressed | Mandatory |

### 14.2 Ongoing Vendor Monitoring

Following deployment of a vendor-provided emerging technology, the Organisation shall conduct ongoing monitoring in accordance with the **Vendor and Third-Party Risk Management Policy**, including:

- **Annual vendor risk reassessment** for all vendors providing emerging technologies.
- **Continuous monitoring** of vendor security notifications, vulnerability disclosures, and regulatory enforcement actions.
- **Periodic review** of vendor security certifications (ISO 27001, SOC 2, etc.) to confirm continued validity.
- **SLA performance monitoring** against contractually agreed service levels.
- **Concentration risk monitoring** to detect and manage increasing dependency on specific vendors.

### 14.3 Exit Planning

An **Exit Plan** shall be developed for all high-risk and critical-risk technology deployments at the time of initial deployment. The Exit Plan shall address:

- Data extraction, portability, and migration procedures.
- Transition timelines and milestones.
- Alternative technology options or in-house fallback capabilities.
- Cost estimates for exit and transition.
- Data destruction or return obligations of the outgoing vendor.

---

## 15. Implementation Roadmap

*Provide a high-level implementation roadmap for the Framework, including key milestones, workstreams, and resource requirements.*

### 15.1 Roadmap Overview

*Describe the phased approach to implementing and embedding this Framework within the Organisation.*

The implementation of this Framework is structured across **[X] phases** as follows:

| Phase | Description | Timeline | Key Milestones |
|-------|-------------|----------|----------------|
| **Phase 1 — Foundation** | Framework approval, governance setup, tooling, and initial training | [Q1 20XX] | Framework approved; ETRWG established; assessment templates finalised; GRC system configured |
| **Phase 2 — Pilot Deployment** | Apply Framework to [X] priority emerging technology assessments as pilot exercises | [Q2 20XX] | [X] pilot assessments completed; lessons learned captured; Framework refined |
| **Phase 3 — Full Rollout** | Full deployment of the Framework across all business units and technology streams | [Q3 20XX] | All in-scope assessments being conducted under the Framework; training complete for all relevant staff |
| **Phase 4 — Optimisation** | Ongoing optimisation, automation, and maturity enhancement | [Q4 20XX onwards] | KPI targets met; Framework review completed; continuous improvement embedded |

### 15.2 Key Implementation Workstreams

| Workstream | Lead | Key Activities |
|-----------|------|----------------|
| Governance and Policy | Head of Technology Risk | Establish ETRWG; document governance arrangements; obtain approvals |
| Tooling and Systems | CTO / Technology Risk | Configure GRC system; build assessment templates; establish risk register |
| Training and Awareness | Head of Technology Risk / HR | Develop training materials; deliver initial training sessions; build awareness campaigns |
| Process Integration | Technology Risk / PMO | Integrate Framework into project intake process; update project management methodology |
| Vendor Due Diligence | Procurement / Technology Risk | Update vendor assessment processes; revise standard contract templates |
| Horizon Scanning | Technology Risk | Establish horizon scanning process; subscribe to relevant intelligence feeds |

### 15.3 Resource Requirements

| Resource Category | Details | Estimated Requirement |
|------------------|---------|----------------------|
| Personnel — Technology Risk | Full-time Technology Risk Manager(s) with expertise in emerging technologies | [X] FTEs |
| Personnel — Information Security | Part-time allocation from CISO function for security assessments | [X] FTEs (fractional) |
| External Specialists | Specialist consultants for critical-level assessments | [Budget Placeholder] per assessment |
| Technology / GRC System | GRC platform module or tooling for risk register and workflow management | [Budget Placeholder] |
| Training | Training programme development and delivery | [Budget Placeholder] |

---

## 16. Monitoring, Review, and Continuous Improvement

*Describe the mechanisms for ongoing monitoring of emerging technology risks and the processes for reviewing and updating the Framework itself.*

### 16.1 Continuous Monitoring

[Organization Name] maintains **continuous monitoring** of the emerging technology risk landscape through the following mechanisms:

#### 16.1.1 Horizon Scanning

The Technology Risk function conducts **ongoing horizon scanning** to identify emerging and nascent technologies that may be relevant to the Organisation's risk profile. Horizon scanning activities include:

- Monitoring of BNM and international regulatory publications, consultations, and guidance.
- Subscription to relevant technology risk intelligence feeds and industry publications.
- Participation in industry working groups, forums, and conferences (e.g., FinTech Association of Malaysia, BNM Financial Innovation Lab).
- Review of analyst reports (e.g., Gartner Hype Cycle, Forrester Wave, IDC reports) relevant to financial services technology.
- Monitoring of NACSA cybersecurity advisories and CERT alerts.
- Review of international regulatory developments (e.g., EU AI Act, DORA, FCA/PRA guidance, MAS Technology Risk Management Guidelines).

#### 16.1.2 Key Risk Indicators (KRIs)

The following KRIs shall be defined and monitored for each deployed emerging technology:

| KRI Category | Example KRIs | Monitoring Frequency |
|-------------|-------------|---------------------|
| Security | Number of security vulnerabilities discovered; days to patch critical vulnerabilities; number of security incidents | Monthly |
| Operational | System availability / uptime against SLA; number of operational incidents; mean time to recovery (MTTR) | Monthly |
| Compliance | Number of compliance exceptions identified; status of regulatory notifications | Monthly |
| Vendor | Vendor SLA performance score; number of vendor incidents; vendor financial health indicators | Quarterly |
| Model (AI/ML) | Model accuracy metrics; model drift indicators; number of challenged model decisions | Monthly |
| Data Privacy | Number of data subject requests; data breach incidents; PDPA compliance audit findings | Monthly |

*Note to document owner: Define specific KRI thresholds, escalation triggers, and reporting requirements for each KRI in the Framework's supporting procedure documentation.*

#### 16.1.3 Emerging Technology Risk Register

The **Emerging Technology Risk Register** is the primary tool for recording, tracking, and managing identified emerging technology risks. The register shall be:

- Maintained in [GRC System Name / Platform Placeholder].
- Updated in real-time as new risks are identified or the status of existing risks changes.
- Reviewed by the Head of Technology Risk on a **monthly** basis.
- Reported to the ITSC on a **monthly** basis.
- Aggregated into the Enterprise Risk Register for **quarterly** ERM reporting.

#### 16.1.4 Post-Deployment Monitoring Activities

For each deployed emerging technology, the following monitoring activities shall be conducted:

| Activity | Frequency | Responsible Party |
|----------|-----------|------------------|
| KRI review and reporting | Monthly | Technology Risk Manager |
| Security vulnerability scan review | Monthly | Information Security |
| Vendor SLA performance review | Monthly | Technology / Vendor Management |
| Risk control effectiveness review | Quarterly | Technology Risk Manager |
| AI/ML model performance review (where applicable) | Monthly | Data Science / Technology Risk |
| Emerging Technology Risk Register update | Continuous | Technology Risk Manager |
| Penetration test (post-deployment) | Annually (at minimum) | Information Security |

### 16.2 Periodic Review of the Framework

This Framework is subject to **periodic review** to ensure its continued relevance, accuracy, and regulatory alignment. Reviews shall be conducted as follows:

| Review Type | Frequency | Trigger | Responsible Party |
|------------|-----------|---------|------------------|
| **Scheduled Quarterly Review** | Quarterly | Calendar-based | Head of Technology Risk |
| **Triggered Review** | As required | Material regulatory change; significant technology risk event; internal audit finding; material change in Organisation's technology strategy | Head of Technology Risk |
| **Annual Comprehensive Review** | Annual | Calendar-based | Head of Technology Risk, with input from CISO, Legal, Compliance, and Internal Audit |

### 16.3 Framework Performance Metrics

The following metrics shall be used to assess the performance and effectiveness of this Framework:

| Metric | Target | Reporting Period |
|--------|--------|-----------------|
| Percentage of in-scope technology adoptions that have a completed risk assessment prior to deployment | 100% | Quarterly |
| Average time to complete an emerging technology risk assessment (by risk level) | [Target timelines from Section 6.4] | Quarterly |
| Percentage of Risk Treatment Plan actions completed on time | ≥ 90% | Quarterly |
| Number of technology deployments proceeding without a completed assessment (zero-tolerance metric) | 0 | Monthly |
| Number of BNM regulatory notifications submitted on time | 100% | As applicable |
| Internal Audit rating of Framework design and operating effectiveness | Satisfactory or above | Annual |

### 16.4 Lessons Learned and Continuous Improvement

The Technology Risk function shall operate a formal **Lessons Learned** process to capture insights from assessments and post-implementation reviews and to drive continuous improvement of this Framework. Lessons learned shall be:

- Documented within [X] weeks of each completed assessment or PIR.
- Reviewed by the ETRWG at its next scheduled meeting.
- Incorporated into Framework updates, training materials, and assessment templates as appropriate.
- Shared (in anonymised form where appropriate) with relevant industry peers through appropriate forums.

---

## 17. Escalation and Exception Management

*Describe the process for escalating risk issues and managing exceptions to the requirements of this Framework.*

### 17.1 Escalation Triggers

The following situations require immediate escalation through the governance structure defined in Section 4:

| Escalation Trigger | Escalation Path | Timeline |
|-------------------|-----------------|----------|
| Discovery of a risk rated Critical (score 16–25) | Technology Risk Manager → Head of Technology Risk → CRO → MRC → BRC (as appropriate) | Within [1] business day of discovery |
| Technology deployment proceeding without a completed risk assessment | Technology Risk Manager → Head of Technology Risk → CTO → MRC | Immediately upon discovery |
| Risk Treatment Plan action that is materially overdue for a High or Critical risk | Technology Risk Manager → Head of Technology Risk → MRC | Upon identification of material overdue status |
| Vendor or technology security incident that materially affects the risk profile | CISO → CRO → MRC → BRC (as appropriate) | Immediately upon confirmation |
| BNM inquiry or request for information relating to an emerging technology | CCO → CRO → Board | Within [1] business day of receipt |
| Discovery that a technology is operating outside the approved scope of its risk assessment | Technology Risk Manager → Head of Technology Risk → CTO | Immediately upon discovery |

### 17.2 Exception Management Process

Where a business or technology unit seeks an exception to the requirements of this Framework (e.g., proceeding with a limited deployment prior to completion of a full assessment), the following process applies:

1. The requesting unit shall submit a formal **Exception Request Form** (Appendix B — Form EXC-01) to the Head of Technology Risk.
2. The Head of Technology Risk shall assess the exception request within **[3] business days** and prepare a recommendation.
3. Exception requests shall be approved by the authority level corresponding to the risk level of the technology (refer to Section 6.4).
4. All approved exceptions shall be:
   - Documented in the **Exception Register**.
   - Subject to defined conditions and a time limit (maximum [90] calendar days).
   - Reviewed prior to expiry of the exception period.
5. Exceptions shall not be granted for technologies assessed as **Critical risk** without Board Risk Committee approval.
6. Repeated exception requests for the same technology shall be escalated to the MRC.

---

## 18. Training and Awareness

*Describe the training and awareness requirements for personnel involved in emerging technology risk assessment and management.*

### 18.1 Training Requirements

The following training requirements apply to all personnel involved in the emerging technology risk management process:

| Role | Training Programme | Frequency | Delivery Format |
|------|-------------------|-----------|--------------| 
| Technology Risk Managers | Comprehensive Emerging Technology Risk Assessment Training | Upon appointment; annually refreshed | Instructor-led + self-paced e-learning |
| CISO / Information Security Staff | Cybersecurity Aspects of Emerging Technology Risk | Annually | Instructor-led |
| Business Unit Heads and Technology Leaders | Emerging Technology Risk Awareness for Leaders | Upon appointment; annually | Executive briefing / e-learning |
| All staff involved in technology adoption | Framework Overview and Technology Adoption Notification Procedure | Annually | E-learning module |
| Legal and Compliance Staff | Regulatory Compliance Aspects of Emerging Technology | Annually | Instructor-led |
| Internal Auditors | Auditing Emerging Technology Risk Management | Annually | Self-paced e-learning + CPD |

### 18.2 Specialist Competency Development

The Technology Risk function shall maintain and develop specialist competency in key emerging technology risk areas. This includes:

- Attendance at relevant industry conferences and training programmes.
- Subscription to technical and regulatory publications.
- Participation in BNM industry engagement activities.
- Certification programmes relevant to emerging technology risk (e.g., CISM, CRISC, AI-specific certifications).

### 18.3 Awareness Programme

In addition to formal training, an ongoing **awareness programme** shall be maintained to keep relevant stakeholders informed of developments in the emerging technology risk landscape. The programme shall include:

- Quarterly **Emerging Technology Risk Bulletin** distributed to all relevant stakeholders.
- Regular updates to the Technology Risk intranet page.
- Annual **Emerging Technology Risk Briefing** for Senior Management.
- Ad hoc alerts for significant technology risk events or regulatory changes.

---

## 19. Review and Approval

### 19.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---------|------|--------|-------------|-------------------|
| 0.1 | [Date] | [Author Name] | [Reviewer Name] | Initial draft for internal review |
| 0.2 | [Date] | [Author Name] | [Reviewer Name] | Incorporated review feedback from [Function/Committee] |
| 0.9 | [Date] | [Author Name] | [Reviewer Name] | Near-final draft submitted for approval |
| **1.0** | **[Effective Date]** | **[Author Name]** | **[Reviewer Name]** | **First approved version** |

*Note: Subsequent version history entries shall be added at each review and update. Major revisions (substantial changes to methodology, scope, or governance) shall increment the major version number (e.g., 1.0 → 2.0). Minor revisions (corrections, clarifications, or minor updates) shall increment the minor version number (e.g., 1.0 → 1.1).*

### 19.2 Review Sign-Off

| Review Role | Function | Name | Date | Signature |
|------------|----------|------|------|-----------|
| Prepared By | Technology Risk | [Name] | [Date] | |
| Reviewed By | Information Security (CISO) | [Name] | [Date] | |
| Reviewed By | Legal and Compliance (CCO) | [Name] | [Date] | |
| Reviewed By | Data Privacy (DPO) | [Name] | [Date] | |
| Endorsed By | ITSC (CTO/CIO) | [Name] | [Date] | |
| Endorsed By | Management Risk Committee (CRO) | [Name] | [Date] | |
| Approved By | Board Risk Committee (Chairperson) | [Name] | [Date] | |

### 19.3 Next Review

This Framework shall next be reviewed no later than **[Next Review Date]** or earlier in the event of a triggered review as described in Section 16.2.

---

## 20. References

*List all regulatory instruments, standards, and internal documents referenced in this Framework.*

### 20.1 Regulatory References

| Reference | Issuing Authority | Applicable Clauses / Sections |
|-----------|-----------------|-------------------------------|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | **Clause 17.5** (Primary); Clauses 17.1, 17.2, 17.3, 17.4, 10.1–10.5, 11.1–11.8 |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia / BNM | [Applicable sections] |
| Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia / BNM | [Applicable sections] |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | All applicable provisions |
| Computer Crimes Act 1997 | Parliament of Malaysia | All applicable provisions |
| Communications and Multimedia Act 1998 | Parliament of Malaysia | All applicable provisions |
| National Cyber Security Policy (NCSP) | NACSA | All applicable provisions |
| BNM Policy Document — Outsourcing | Bank Negara Malaysia | [Applicable clauses] |
| BNM Policy Document — Cloud Services | Bank Negara Malaysia | All applicable provisions |
| BNM Policy Document — Data Management | Bank Negara Malaysia | All applicable provisions |
| Securities Commission Malaysia Act 1993 | Securities Commission Malaysia | [As applicable] |

### 20.2 International Standards and Frameworks

| Standard / Framework | Version / Year | Relevance |
|---------------------|---------------|-----------|
| ISO/IEC 27001 — Information Security Management Systems | 2022 | Security risk management |
| ISO/IEC 27005 — Information Security Risk Management | 2022 | Risk management methodology |
| ISO 31000 — Risk Management Guidelines | 2018 | General risk management principles |
| NIST Cybersecurity Framework (CSF) | 2.0 (2024) | Cybersecurity risk methodology |
| NIST AI Risk Management Framework (AI RMF) | 1.0 (2023) | AI risk management |
| NIST SP 800-53 — Security and Privacy Controls | Rev. 5 | Security control guidance |
| COBIT 2019 | 2019 | IT governance and management |
| CIS Controls | v8 | Security implementation |
| FSB Guidance on Cyber Resilience | 2018 | Cybersecurity in financial services |
| Monetary Authority of Singapore (MAS) — Technology Risk Management Guidelines | 2021 | Comparative regional guidance |
| European Banking Authority (EBA) Guidelines on ICT and Security Risk Management | 2019 | Comparative international guidance |

### 20.3 Internal Document References

| Document Title | Document ID | Owner |
|---------------|-------------|-------|
| Enterprise Risk Management Framework | [Document ID] | Chief Risk Officer |
| Information Technology Risk Policy | [Document ID] | Head of Technology Risk |
| Information Security Policy | [Document ID] | CISO |
| Vendor and Third-Party Risk Management Policy | [Document ID] | Head of Technology Risk / Procurement |
| Data Governance and Privacy Policy | [Document ID] | Data Privacy Officer |
| Business Continuity Management Policy | [Document ID] | Head of Business Continuity |
| Change Management Policy | [Document ID] | CTO / IT Governance |
| Cloud Risk Management Framework | [Document ID] | Head of Technology Risk |
| AI/ML Risk Management Guideline | [Document ID] | Head of Technology Risk |
| Incident Response Procedure | [Document ID] | CISO |
| Risk Appetite Statement | [Document ID] | CRO / Board |

---

## 21. Appendices

### Appendix A — Initial Technology Risk Screening Scorecard (Form IRS-01)

*This appendix contains the standardised screening scorecard used in Phase 2 of the risk assessment process. Complete this form for all in-scope technology adoption proposals before conducting a full assessment.*

---

**INITIAL TECHNOLOGY RISK SCREENING SCORECARD**
**Form Reference: IRS-01 | Version: 1.0**

| Field | Details |
|-------|---------|
| **Assessment Reference** | [Auto-generated / Assigned by Technology Risk] |
| **Technology Name** | [Technology Name] |
| **Submitting Unit** | [Business Unit / Department] |
| **Submitted By** | [Name and Title] |
| **Submission Date** | [Date] |
| **Screened By** | [Technology Risk Manager Name] |
| **Screening Date** | [Date] |

**Screening Dimensions:**

| # | Screening Dimension | Scoring Guide | Score (1–5) | Notes |
|---|--------------------|--------------:|:-----------:|-------|
| 1 | Technology Novelty | 1 = Well-established globally; 5 = Brand new, no industry precedent | | |
| 2 | Regulatory Maturity | 1 = Clear BNM guidance exists; 5 = No regulatory guidance exists | | |
| 3 | Data Sensitivity | 1 = No personal/sensitive data involved; 5 = Highly sensitive data (e.g., financial, health) | | |
| 4 | Systemic Criticality | 1 = No impact on critical systems; 5 = Direct integration with core banking | | |
| 5 | Vendor Maturity | 1 = Established global vendor, strong track record; 5 = Start-up, no track record | | |
| 6 | Integration Complexity | 1 = Standalone, no system integration; 5 = Deep integration with multiple critical systems | | |
| 7 | Cross-Border Implications | 1 = All data and processing within Malaysia; 5 = Significant cross-border data transfer | | |
| 8 | Financial Exposure | 1 = Minimal financial exposure; 5 = Significant financial exposure > MYR [X]M | | |
| 9 | Potential for Bias / Fairness Issues (AI/ML) | N/A if not AI/ML; 1 = No automated decisions; 5 = High-stakes automated decisions | | |
| 10 | Concentration Risk Contribution | 1 = No concentration risk; 5 = Significantly increases concentration risk | | |
| | **Total Score** | | **/50** | |

| Total Score | Risk Level | Next Steps |
|------------|------------|-----------|
| 40–50 | Critical | Full comprehensive assessment; escalate to CRO; consider BNM pre-consultation |
| 28–39 | High | Full comprehensive assessment; flag for MRC awareness |
| 16–27 | Medium | Standard assessment |
| 10–15 | Low | Streamlined assessment |

**Screening Outcome:** [ ] Critical &emsp; [ ] High &emsp; [ ] Medium &emsp; [ ] Low

**Screened By:** _______________________________ &emsp; **Date:** _______________

**Reviewed By (Head of Technology Risk):** _______________________________ &emsp; **Date:** _______________

---

### Appendix B — Comprehensive Risk Assessment Template (Form CAT-01)

*This appendix contains the standardised template for conducting a full emerging technology risk assessment in Phase 3 of the process.*

---

**COMPREHENSIVE EMERGING TECHNOLOGY RISK ASSESSMENT**
**Form Reference: CAT-01 | Version: 1.0**

**SECTION 1 — TECHNOLOGY IDENTIFICATION**

| Field | Details |
|-------|---------|
| **Assessment Reference** | [Assessment Reference Number] |
| **Technology Name** | [Technology Name] |
| **Technology Category** | [Refer to Section 5.3 taxonomy] |
| **Technology Readiness Level (TRL)** | [TRL 1–9 — refer to Section 5.2] |
| **Risk Level (from IRS-01)** | [ ] Critical [ ] High [ ] Medium [ ] Low |
| **Assessment Lead** | [Technology Risk Manager Name] |
| **Assessment Team Members** | [List all team members and their functions] |
| **Assessment Start Date** | [Date] |
| **Assessment Target Completion Date** | [Date] |
| **Sponsoring Business Unit** | [Business Unit] |
| **Technology Owner (1st Line)** | [Name and Title] |
| **Proposed Use Case** | [Brief description of how and where the technology will be used] |
| **Proposed Deployment Scope** | [Customer-facing / Internal / Pilot / Production / etc.] |
| **Data Involved** | [Types of data involved; whether personal data is processed] |
| **Vendor / Supplier** | [Vendor Name and Country of Origin] |
| **Estimated Users / Affected Customers** | [Number of users / customers affected] |
| **Estimated Implementation Date** | [Target go-live date] |
| **Total Cost of Ownership (Estimated)** | [MYR Amount] |

**SECTION 2 — TECHNOLOGY DESCRIPTION**

*Provide a comprehensive description of the technology, its architecture, key components, and how it will be deployed within the Organisation.*

[Technology Description Placeholder — attach architecture diagrams, data flow diagrams, and vendor documentation as referenced exhibits]

**SECTION 3 — RISK ASSESSMENT BY DOMAIN**

*For each applicable risk domain, complete the risk identification and assessment.*

| Risk ID | Risk Domain | Risk Description | Existing Controls | Likelihood (1–5) | Impact (1–5) | Inherent Risk Score | Residual Risk Score | Risk Rating | Treatment Recommendation |
|---------|------------|-----------------|------------------|:----------------:|:------------:|:-------------------:|:-------------------:|:-----------:|-------------------------|
| ETR-[YYYY]-[NNN]-001 | Cybersecurity | [Risk Description] | [Controls] | | | | | | |
| ETR-[YYYY]-[NNN]-002 | Operational | [Risk Description] | [Controls] | | | | | | |
| ETR-[YYYY]-[NNN]-003 | Compliance / Regulatory | [Risk Description] | [Controls] | | | | | | |
| ETR-[YYYY]-[NNN]-004 | Data Privacy | [Risk Description] | [Controls] | | | | | | |
| ETR-[YYYY]-[NNN]-005 | Model / Algorithm | [Risk Description — AI/ML only] | [Controls] | | | | | | |
| ETR-[YYYY]-[NNN]-006 | Concentration / Dependency | [Risk Description] | [Controls] | | | | | | |
| ETR-[YYYY]-[NNN]-007 | Strategic / Reputational | [Risk Description] | [Controls] | | | | | | |
| ETR-[YYYY]-[NNN]-008 | Financial | [Risk Description] | [Controls] | | | | | | |
| *[Add rows as required]* | | | | | | | | | |

**SECTION 4 — OVERALL ASSESSMENT SUMMARY**

| Field | Details |
|-------|---------|
| **Highest Inherent Risk Rating** | [ ] Critical [ ] High [ ] Medium [ ] Low |
| **Highest Residual Risk Rating** | [ ] Critical [ ] High [ ] Medium [ ] Low |
| **Number of Critical Risks Identified** | |
| **Number of High Risks Identified** | |
| **Number of Medium Risks Identified** | |
| **Number of Low Risks Identified** | |
| **Overall Assessment Recommendation** | [ ] Approved — Proceed [ ] Approved with Conditions [ ] Deferred — Further Information Required [ ] Not Approved — Mitigations Insufficient [ ] Not Approved — Risk Exceeds Appetite |
| **Conditions / Key Requirements (if Approved with Conditions)** | [List all conditions that must be satisfied prior to or concurrent with deployment] |
| **Rationale for Recommendation** | [Provide clear rationale for the overall recommendation] |

**SECTION 5 — ASSESSMENT SIGN-OFF**

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Assessment Lead (Technology Risk Manager) | | | |
| Information Security (CISO function) | | | |
| Legal / Compliance | | | |
| Data Privacy Officer | | | |
| Head of Technology Risk | | | |

---

### Appendix C — Risk Treatment Plan Template (Form RTP-01)

*This appendix contains the standardised template for documenting risk treatment plans developed in Phase 4 of the process.*

---

**RISK TREATMENT PLAN**
**Form Reference: RTP-01 | Version: 1.0**

| Field | Details |
|-------|---------|
| **Assessment Reference** | [Assessment Reference Number] |
| **Technology Name** | [Technology Name] |
| **Plan Prepared By** | [Name and Title] |
| **Plan Date** | [Date] |
| **Plan Review Date** | [Date] |

| Risk ID | Risk Description | Residual Rating | Treatment Strategy | Control Measure | Control Owner | Target Date | KRI / Success Metric | Expected Post-Treatment Rating | Status |
|---------|-----------------|:---------------:|:-----------------:|-----------------|:-------------:|:-----------:|----------------------|:-----------------------------:|:------:|
| | | | Mitigate / Avoid / Transfer / Accept | | | | | | |
| | | | | | | | | | |

---

### Appendix D — Technology Adoption Notification Form (Form TAF-01)

*This appendix contains the form used by business and technology units to initiate the emerging technology risk assessment process.*

---

**TECHNOLOGY ADOPTION NOTIFICATION FORM**
**Form Reference: TAF-01 | Version: 1.0**

*Complete this form and submit to the Technology Risk function to initiate an Emerging Technology Risk Assessment. All fields marked \* are mandatory.*

| Field | Response |
|-------|---------|
| **Submitted By \*** | [Name, Title, Department] |
| **Date of Submission \*** | [Date] |
| **Technology Name \*** | [Full name of technology / product / platform] |
| **Technology Vendor / Provider \*** | [Vendor name; "Internal" if developed in-house] |
| **Proposed Use Case \*** | [Description of how and why the technology will be used] |
| **Proposed Users / Beneficiaries \*** | [Internal staff / Customers / Both; estimated numbers] |
| **Estimated Deployment Date \*** | [Target date for production deployment] |
| **Does the technology process personal data? \*** | [ ] Yes [ ] No [ ] Unknown — If Yes, describe: |
| **Does the technology involve offshore data processing or storage? \*** | [ ] Yes [ ] No [ ] Unknown — If Yes, describe: |
| **Does the technology involve AI or automated decision-making? \*** | [ ] Yes [ ] No [ ] Unknown — If Yes, describe: |
| **Is a vendor / third-party involved? \*** | [ ] Yes [ ] No — If Yes, provide vendor name and country of incorporation: |
| **Estimated total cost of ownership (MYR) \*** | [Amount] |
| **Has a PoC or pilot already been conducted?** | [ ] Yes [ ] No — If Yes, summarise findings: |
| **Sponsoring Senior Manager / Budget Holder \*** | [Name and Title] |
| **Additional Information / Attachments** | [List any supporting documentation attached] |

**Declaration:** I confirm that the information provided in this form is accurate and complete to the best of my knowledge, and that I have obtained the necessary internal approvals to submit this notification.

**Submitted By:** _______________________________ &emsp; **Date:** _______________

**Approved By (Sponsoring Manager):** _______________________________ &emsp; **Date:** _______________

---

### Appendix E — Exception Request Form (Form EXC-01)

*This appendix contains the form used to request an exception to the requirements of this Framework.*

---

**EXCEPTION REQUEST FORM**
**Form Reference: EXC-01 | Version: 1.0**

| Field | Details |
|-------|---------|
| **Exception Reference** | [Assigned by Technology Risk] |
| **Technology Name** | [Technology Name] |
| **Assessment Reference (if applicable)** | [Existing assessment reference, if any] |
| **Exception Requested By** | [Name, Title, Department] |
| **Date of Request** | [Date] |
| **Nature of Exception** | [Describe the specific requirement(s) from the Framework for which an exception is sought] |
| **Justification** | [Provide clear business justification for the exception request] |
| **Duration of Exception** | [Specify the period for which the exception is requested — maximum 90 days] |
| **Compensating Controls** | [Describe any compensating controls that will be in place during the exception period] |
| **Risk Acceptance** | [Identify who will formally accept the additional risk during the exception period] |
| **Supporting Documents** | [List any supporting documentation attached] |

**Head of Technology Risk Review:** [Approved / Rejected / Referred to Higher Authority]

**Reviewed By:** _______________________________ &emsp; **Date:** _______________

**Approval Authority:** _______________________________ &emsp; **Date:** _______________

---

### Appendix F — Emerging Technology Risk Register Template

*This appendix provides the structure for the Emerging Technology Risk Register maintained by the Technology Risk function.*

| Field | Description |
|-------|-------------|
| Risk ID | Unique identifier (format: ETR-[YYYY]-[NNN]-[RRR]) |
| Assessment Reference | Reference to the source risk assessment |
| Technology Name | Name of the technology to which the risk relates |
| Technology Category | Classification per Section 5.3 taxonomy |
| Risk Domain | Cybersecurity / Operational / Compliance / Data Privacy / Model / Concentration / Strategic / Financial |
| Risk Description | Clear, concise description of the risk |
| Risk Owner (1st Line) | Business or technology unit responsible for first-line risk management |
| Inherent Likelihood | 1–5 score |
| Inherent Impact | 1–5 score |
| Inherent Risk Score | Likelihood × Impact |
| Inherent Risk Rating | Critical / High / Medium / Low |
| Key Controls | Description of controls currently in operation |
| Residual Likelihood | 1–5 score |
| Residual Impact | 1–5 score |
| Residual Risk Score | Likelihood × Impact |
| Residual Risk Rating | Critical / High / Medium / Low |
| Treatment Status | Within Appetite / Requires Treatment / Risk Accepted / Escalated |
| RTP Reference | Reference to Risk Treatment Plan (if applicable) |
| Last Review Date | Date of most recent review |
| Next Review Date | Date of next scheduled review |
| Comments | Any additional notes or context |

---

### Appendix G — Glossary of Terms

*This appendix defines key terms used throughout this Framework.*

| Term | Definition |
|------|-----------|
| **Artificial Intelligence (AI)** | Technology that enables machines to perform tasks that typically require human intelligence, including but not limited to pattern recognition, language processing, and decision-making. |
| **Blockchain / Distributed Ledger Technology (DLT)** | A distributed database that records transactions across multiple nodes in a manner that is transparent, tamper-resistant, and operates without a central authority. |
| **Control** | Any measure taken to manage risk, including policies, procedures, practices, processes, and technical measures. |
| **Data Privacy Officer (DPO)** | The individual responsible for overseeing the Organisation's compliance with data protection laws, including PDPA 2010. |
| **Emerging Technology** | As defined in Section 5.1 of this Framework. |
| **Horizon Scanning** | The systematic monitoring of the external environment to identify nascent technologies, regulatory developments, and risk trends that may affect the Organisation in the future. |
| **Inherent Risk** | The level of risk present before the application of any controls or mitigating measures. |
| **Key Risk Indicator (KRI)** | A metric used to provide early warning of increasing risk exposure relevant to a particular risk domain. |
| **Machine Learning (ML)** | A subset of AI involving the use of algorithms that enable systems to learn from data and improve their performance over time without being explicitly programmed. |
| **Model Risk** | The risk of adverse consequences resulting from incorrect, misused, or insufficiently validated models, including AI/ML models. |
| **Proof of Concept (PoC)** | A limited exercise to test the feasibility of a technology or approach before committing to full development or deployment. |
| **RACI** | A responsibility assignment matrix that defines roles as Responsible, Accountable, Consulted, or Informed for a given task or decision. |
| **Residual Risk** | The level of risk remaining after existing controls and mitigating measures have been applied. |
| **Risk Appetite** | The aggregate level and types of risk that an organisation is willing to accept in pursuit of its strategic objectives. |
| **Risk Treatment** | The process of selecting and implementing measures to modify risk, including avoidance, mitigation, transfer, and acceptance. |
| **Technology Readiness Level (TRL)** | A scale used to assess the maturity of a technology, ranging from TRL 1 (basic research) to TRL 9 (proven, deployed system). |
| **Third Party** | Any external organisation, vendor, supplier, or service provider that provides technology products or services to [Organization Name]. |
| **BNM** | Bank Negara Malaysia — the central bank and primary financial services regulator of Malaysia. |
| **CISO** | Chief Information Security Officer. |
| **CRO** | Chief Risk Officer. |
| **CTO** | Chief Technology Officer. |
| **ERM** | Enterprise Risk Management. |
| **ETRWG** | Emerging Technology Risk Working Group. |
| **FSA** | Financial Services Act 2013. |
| **IFSA** | Islamic Financial Services Act 2013. |
| **ITSC** | Information Technology Steering Committee. |
| **MRC** | Management Risk Committee. |
| **NACSA** | National Cyber Security Agency of Malaysia. |
| **PDPA** | Personal Data Protection Act 2010. |
| **RMiT** | Risk Management in Technology (BNM Policy Document). |

---

### Appendix H — Assessment Decision Tree

*This appendix provides a visual decision tree to assist Technology Risk Managers in determining the appropriate assessment pathway for a given technology adoption proposal.*

```
START: Technology Adoption Notification Received
                │
                ▼
    ┌───────────────────────┐
    │ Is the technology     │
    │ in-scope under        │
    │ Section 2.2?          │
    └───────────┬───────────┘
       YES │           │ NO
           ▼           ▼
    Proceed to      Notify submitting
    Screening       unit — out of scope.
    (IRS-01)        Direct to appropriate
                    process (e.g., Change
                    Management).
           │
           ▼
    ┌─────────────────────────┐
    │ Has this technology     │
    │ been assessed within    │
    │ the last 24 months?     │
    └──────────┬──────────────┘
       YES │           │ NO
           ▼           ▼
    Has there been  Conduct Initial
    a material      Screening (IRS-01)
    change?
       │
  YES  │     NO
   ▼        ▼
  Proceed   Inform submitting
  to re-    unit that existing
  assessment assessment applies.
            Provide reference.
           │
           ▼
    ┌────────────────────────┐
    │ Initial Screening      │
    │ Outcome (IRS-01)?      │
    └────────────┬───────────┘
    Critical │   │ High │  │ Medium │   │ Low
             ▼   ▼      ▼  ▼        ▼   ▼
          Full   Full   Standard   Streamlined
          Assess Assess Assess     Assess
          + BNM  + MRC  (CAT-01)  (CAT-01,
          consult flag            abbreviated)
```

---

### Appendix I — Regulatory Notification Checklist

*This appendix provides a checklist to assist the Legal and Compliance function in determining whether a BNM regulatory notification is required.*

---

**REGULATORY NOTIFICATION ASSESSMENT CHECKLIST**

| # | Question | Yes / No / N/A | Notes |
|---|----------|:--------------:|-------|
| 1 | Does the technology involve the outsourcing of a material function to a third party? | | |
| 2 | Does the technology require BNM notification under the RMiT policy prior to deployment? | | |
| 3 | Does the technology involve the processing of customer data in jurisdictions outside Malaysia? | | |
| 4 | Does the technology facilitate a new or materially different financial product or service that may require SC or BNM authorisation? | | |
| 5 | Is the organisation participating in the BNM Regulatory Sandbox or FinTech hub in relation to this technology? | | |
| 6 | Has a material incident involving this technology occurred that triggers BNM incident reporting obligations? | | |
| 7 | Does the technology introduction materially change the Organisation's risk profile in a manner that should be disclosed to BNM? | | |

**Assessment Outcome:** [ ] BNM Notification Required &emsp; [ ] BNM Notification Not Required

**Assessed By (Legal / Compliance):** _______________________________ &emsp; **Date:** _______________

**Approved By (CCO):** _______________________________ &emsp; **Date:** _______________

---

*End of Document*

---

| Field | Details |
|-------|---------|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Framework** | BNM Risk Management in Technology (RMiT) — Clause 17.5 |
| **Owner** | Head of Technology Risk |
| **Organisation** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Next Review** | [Next Review Date] |

*This document is subject to the confidentiality notice on page 1. For queries regarding this document, contact [Technology Risk Function Contact Details Placeholder].*