# Outsourcing Governance Framework

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Vendor Management |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. If you have received this document in error, please notify [Information Security Contact] immediately and destroy all copies.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Regulatory and Policy Context](#4-regulatory-and-policy-context)
5. [Governance Structure](#5-governance-structure)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Vendor Risk Tiering Criteria](#7-vendor-risk-tiering-criteria)
8. [Due Diligence Framework](#8-due-diligence-framework)
9. [SLA and KPI Definitions](#9-sla-and-kpi-definitions)
10. [Ongoing Monitoring and Performance Management](#10-ongoing-monitoring-and-performance-management)
11. [Exit Strategy Requirements](#11-exit-strategy-requirements)
12. [Incident and Escalation Management](#12-incident-and-escalation-management)
13. [Data Protection and Confidentiality Requirements](#13-data-protection-and-confidentiality-requirements)
14. [Business Continuity and Resilience](#14-business-continuity-and-resilience)
15. [Audit and Assurance](#15-audit-and-assurance)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Executive Summary

*Provide a concise, senior-management-facing overview of the framework, its strategic purpose, and its importance to the organization's risk posture. This section should be no more than two pages and must be written for a non-technical audience.*

[Organization Name] (hereinafter referred to as "the Institution") relies on a range of third-party technology service providers and outsourced arrangements to deliver its financial services and support its operational objectives. As the volume, complexity, and criticality of these arrangements grow, the need for a structured, risk-informed governance framework becomes paramount.

This **Outsourcing Governance Framework** (hereinafter "the Framework") establishes the principles, structures, processes, and controls that govern how [Organization Name] identifies, assesses, selects, contracts, monitors, and exits technology outsourcing arrangements. It is designed to ensure that all outsourcing activities are conducted in a manner consistent with the Institution's risk appetite, regulatory obligations, and strategic objectives.

The Framework has been developed in accordance with **Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically addressing the requirements set out under **Clause 10.47** and related provisions. It operates alongside the Institution's overarching Enterprise Risk Management (ERM) Framework, Information Security Policy, and Business Continuity Management Framework.

**Key objectives of this Framework include:**

- Establishing clear accountability and governance for all outsourcing decisions and oversight activities.
- Defining a consistent, risk-based methodology for classifying and managing third-party technology vendors.
- Ensuring that due diligence, contractual safeguards, and continuous monitoring are applied proportionately to the risk profile of each arrangement.
- Providing structured exit strategy requirements to protect the Institution's operational continuity and data integrity.
- Maintaining compliance with all applicable regulatory requirements, including BNM RMiT, the Personal Data Protection Act 2010 (PDPA), and any applicable NACSA guidelines.

This Framework is **mandatory** for all business units, technology functions, and support functions of [Organization Name] that engage with, procure, or oversee external technology service providers.

---

## 2. Purpose and Scope

### 2.1 Purpose

*State clearly why this document exists and what problem or regulatory obligation it addresses. Reference the specific BNM RMiT clauses that necessitate this framework.*

This Framework is established to:

1. **Fulfil regulatory obligations** under BNM's Risk Management in Technology (RMiT) Policy Document, in particular Clause 10.47, which requires financial institutions to implement a robust governance framework for technology outsourcing arrangements.
2. **Protect the Institution** from risks arising from third-party dependency, including operational, reputational, legal, regulatory, and concentration risks.
3. **Standardize practices** across the Institution to ensure that all outsourcing decisions are made in a consistent, documented, and risk-informed manner.
4. **Provide assurance** to the Board, senior management, regulators, and other stakeholders that outsourcing risks are adequately identified, assessed, managed, and reported.
5. **Enable accountability** by clearly defining the roles, responsibilities, and authority levels of all parties involved in outsourcing governance.

### 2.2 Scope

*Define the boundaries of this framework — what it covers, who it applies to, and any explicit exclusions.*

#### 2.2.1 In-Scope

This Framework applies to all **technology outsourcing arrangements** entered into by [Organization Name], including but not limited to:

- Cloud computing services (IaaS, PaaS, SaaS)
- Managed security services
- Data centre and hosting services
- Application development and maintenance
- IT infrastructure management
- Payment processing and switching services
- Core banking system support
- Network and telecommunications services
- Disaster Recovery (DR) and Business Continuity services
- IT helpdesk and end-user computing support

The Framework applies to:

- All business units and departments of [Organization Name]
- All subsidiaries over which [Organization Name] exercises management control, where technology outsourcing arrangements are entered into on behalf of or in conjunction with the Institution
- Any joint ventures where [Organization Name] is the lead entity responsible for technology governance
- All staff, including permanent employees, contractors, and secondees, who are involved in the procurement, management, or oversight of technology outsourcing arrangements

#### 2.2.2 Out-of-Scope

The following are explicitly excluded from the scope of this Framework, unless separately designated as in-scope by the Head of Vendor Management or the Technology Risk Committee:

- Procurement of commodity goods (e.g., physical hardware purchases with no ongoing service obligation)
- Non-technology outsourcing arrangements (covered by the separate Operational Risk Management Framework)
- Intra-group service arrangements where services are provided by a wholly owned subsidiary of [Organization Name] (subject to a separate Intra-Group Service Agreement Policy)
- Professional advisory engagements of a one-time, non-operational nature (e.g., legal counsel, audit)

#### 2.2.3 Geographic Scope

This Framework covers all outsourcing arrangements regardless of whether the service provider is domiciled in Malaysia or in a foreign jurisdiction. Where a service provider is located outside Malaysia, additional requirements as specified in Section 8 (Due Diligence Framework) and Section 11 (Exit Strategy Requirements) shall apply.

### 2.3 Objectives

*List the measurable or observable outcomes this framework is intended to achieve.*

| # | Objective | Success Indicator |
|---|---|---|
| 1 | Ensure all outsourcing arrangements are formally classified by risk tier | 100% of active arrangements classified within [X] days of engagement |
| 2 | Ensure critical outsourcing arrangements receive enhanced due diligence | 100% of Tier 1 vendors assessed annually |
| 3 | Maintain an up-to-date outsourcing register | Register reviewed and attested quarterly |
| 4 | Achieve BNM RMiT Clause 10.47 compliance | Zero material findings in regulatory examinations |
| 5 | Ensure all contracts contain mandatory regulatory clauses | 100% contractual compliance verified at signing |
| 6 | Maintain viable exit strategies for all critical vendors | Exit strategies tested for Tier 1 vendors annually |

---

## 3. Definitions and Abbreviations

*Define all key terms used in this document to ensure consistent interpretation across the organization.*

### 3.1 Key Terms

| Term | Definition |
|---|---|
| **Outsourcing** | An arrangement by which [Organization Name] engages a third-party service provider to perform an activity, function, or process that would otherwise be undertaken by the Institution itself, on a continuing basis. |
| **Material Outsourcing** | An outsourcing arrangement that, if disrupted, would have a significant impact on the Institution's business operations, reputation, or ability to meet regulatory obligations. Equivalent to "critical outsourcing" under BNM RMiT. |
| **Critical Outsourcing** | An outsourcing arrangement involving a system or service that is essential to the Institution's core business functions and whose failure would result in material operational disruption. See also: Tier 1 classification under Section 7. |
| **Service Provider** | Any external entity engaged by [Organization Name] under an outsourcing arrangement to provide technology services or functions. Also referred to as "vendor" in this Framework. |
| **Sub-contractor** | A third party engaged by a primary Service Provider to perform part or all of the outsourced activity on its behalf. |
| **Concentration Risk** | The risk arising from an over-reliance on a single service provider or a small number of service providers for critical technology functions, creating systemic vulnerability. |
| **Due Diligence** | The process of investigating and evaluating a service provider before and during an outsourcing arrangement to assess its financial stability, operational capability, security posture, and regulatory compliance. |
| **Service Level Agreement (SLA)** | A contractual agreement between [Organization Name] and a service provider defining the expected performance standards, measurement criteria, and consequences of non-performance. |
| **Key Performance Indicator (KPI)** | A quantifiable metric used to evaluate the performance of a service provider against agreed standards and objectives. |
| **Exit Strategy** | A documented plan defining the steps, timelines, and resources required to transition an outsourced service away from the current service provider, whether to an alternative provider or back to the Institution. |
| **Vendor Risk Tiering** | The process of classifying service providers into risk categories based on the criticality of the services they provide and the potential impact of their failure or compromise. |
| **Outsourcing Register** | The Institution's centralized inventory of all active outsourcing arrangements, maintained by the Vendor Management function. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for clarifying roles and responsibilities. |
| **SaaS** | Software as a Service — a cloud delivery model where software is hosted by the provider and accessed via the internet. |
| **IaaS** | Infrastructure as a Service — a cloud delivery model where computing infrastructure is provided by the provider. |
| **PaaS** | Platform as a Service — a cloud delivery model where a computing platform is provided by the provider. |

### 3.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| TRC | Technology Risk Committee |
| ERM | Enterprise Risk Management |
| GRC | Governance, Risk and Compliance |
| SLA | Service Level Agreement |
| KPI | Key Performance Indicator |
| DR | Disaster Recovery |
| BCP | Business Continuity Plan |
| CIO | Chief Information Officer |
| CISO | Chief Information Security Officer |
| CRO | Chief Risk Officer |
| HOD | Head of Department |
| VMO | Vendor Management Office |
| NDA | Non-Disclosure Agreement |
| RFP | Request for Proposal |
| POC | Proof of Concept |

---

## 4. Regulatory and Policy Context

*Summarize the external regulatory requirements and internal policies that this framework is designed to satisfy. This section provides the justification for the framework's existence and helps auditors trace requirements to their sources.*

### 4.1 Regulatory Requirements

#### 4.1.1 BNM Risk Management in Technology (RMiT) Policy Document

This Framework is primarily designed to fulfil the requirements of BNM's **Risk Management in Technology (RMiT) Policy Document**, which is binding on all licensed financial institutions under BNM's supervision.

The following RMiT clauses are directly addressed by this Framework:

| RMiT Clause | Requirement Summary | Framework Section |
|---|---|---|
| **10.47** | Institutions must establish a governance framework for technology outsourcing, including risk tiering, due diligence, contractual requirements, ongoing monitoring, and exit strategies. | All sections |
| **10.47(a)** | Maintain an inventory of all outsourcing arrangements and classify by criticality. | Section 7, Section 10 |
| **10.47(b)** | Conduct risk-based due diligence before entering outsourcing arrangements. | Section 8 |
| **10.47(c)** | Ensure contracts include minimum mandatory provisions including audit rights, BNM access, data protection, and exit provisions. | Section 9, Section 11 |
| **10.47(d)** | Monitor service provider performance on an ongoing basis. | Section 10 |
| **10.47(e)** | Maintain and test exit strategies for critical outsourcing arrangements. | Section 11 |
| **10.47(f)** | Manage concentration risk arising from outsourcing arrangements. | Section 7.4 |
| **10.47(g)** | Report material outsourcing arrangements to BNM as required. | Section 5.4, Section 6 |

#### 4.1.2 Personal Data Protection Act 2010 (PDPA)

Where outsourcing arrangements involve the processing of personal data of Malaysian data subjects, the requirements of the **Personal Data Protection Act 2010 (PDPA)** and its subsidiary legislation apply. Key obligations addressed by this Framework include:

- Data processor agreements with all vendors processing personal data on behalf of the Institution.
- Restrictions on cross-border data transfers (relevant to offshore service providers).
- Obligations to ensure vendors implement adequate data security measures.
- Data breach notification obligations.

#### 4.1.3 NACSA Guidelines

Where outsourcing arrangements involve systems or services that are designated as **Critical National Information Infrastructure (CNII)** or that are subject to NACSA guidelines, additional cybersecurity requirements shall apply. The CISO is responsible for identifying such arrangements and ensuring compliance with applicable NACSA requirements.

#### 4.1.4 Other Applicable Regulations

| Regulation / Guideline | Issuing Authority | Relevance |
|---|---|---|
| Financial Services Act 2013 (FSA) / Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | General governance obligations |
| Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLATFPUAA) | Parliament of Malaysia | AML/CFT obligations for relevant vendors |
| BNM Guidelines on Management of IT Environment (GPIS 1) | BNM | Legacy IT management requirements |
| BNM Policy Document on Business Continuity Management | BNM | BCM requirements for outsourced services |
| Payment Systems Act 2003 | Parliament of Malaysia | Requirements for payment-related outsourcing |

### 4.2 Internal Policy Context

This Framework operates as part of [Organization Name]'s integrated governance architecture. It shall be read in conjunction with, and is subordinate to where applicable, the following internal policies:

| Policy / Framework | Owner | Relationship to This Document |
|---|---|---|
| Enterprise Risk Management Framework | Chief Risk Officer | Parent framework |
| Information Security Policy | CISO | Security requirements for vendors |
| Data Governance Policy | Chief Data Officer | Data handling obligations |
| Business Continuity Management Framework | Head of BCM | BCM requirements for critical outsourcing |
| Procurement Policy | Head of Procurement | Procurement process and thresholds |
| Third-Party Risk Management Policy | Head of Vendor Management | Overarching TPRM policy |
| Information Classification Policy | CISO | Data classification for vendor access |
| Contract Management Policy | Head of Legal | Contract lifecycle management |

### 4.3 Policy Hierarchy

*Illustrate where this Framework sits within the Institution's policy hierarchy.*

```
Board Risk Appetite Statement
        │
        ▼
Enterprise Risk Management Framework
        │
        ├──► Third-Party Risk Management Policy
        │           │
        │           ▼
        │    Outsourcing Governance Framework  ◄── [THIS DOCUMENT]
        │           │
        │           ├──► Vendor Due Diligence Procedure
        │           ├──► Outsourcing Register Maintenance Procedure
        │           ├──► Vendor Performance Review Procedure
        │           └──► Exit Strategy Execution Procedure
        │
        └──► Information Security Policy
                    │
                    └──► Vendor Security Assessment Standard
```

---

## 5. Governance Structure

*Describe the governance bodies, decision-making hierarchy, and oversight mechanisms that govern outsourcing activities within the Institution.*

### 5.1 Governance Principles

*Articulate the high-level principles that underpin the governance structure for technology outsourcing.*

The governance of technology outsourcing at [Organization Name] is guided by the following principles:

1. **Accountability:** The Institution retains ultimate accountability for all outsourced functions and activities, regardless of the service provider's performance. Outsourcing does not outsource responsibility.
2. **Proportionality:** Governance and oversight intensity are proportionate to the risk profile and criticality of each outsourcing arrangement.
3. **Transparency:** All material outsourcing decisions, performance issues, and risk events are escalated through defined channels and documented appropriately.
4. **Independence:** Oversight and challenge functions (Risk, Compliance, Audit) maintain independence from the business functions that initiate and manage outsourcing arrangements.
5. **Regulatory Primacy:** BNM retains the right to access the Institution's outsourced systems, data, and service providers without restriction, as required under RMiT.
6. **Continuous Improvement:** Governance processes are reviewed and updated regularly to reflect changes in the outsourcing landscape, regulatory environment, and institutional risk appetite.

### 5.2 Governance Bodies

#### 5.2.1 Board of Directors / Board Risk Committee

**Mandate:** The Board retains ultimate oversight responsibility for all material risks arising from technology outsourcing. It is responsible for:

- Approving the Outsourcing Governance Framework and any material amendments.
- Setting and reviewing the Institution's risk appetite for outsourcing risk, including concentration risk thresholds.
- Receiving periodic reports on the overall outsourcing risk profile, including the status of critical vendors and any material incidents.
- Approving new critical outsourcing arrangements (Tier 1) as defined in Section 7.
- Ensuring that outsourcing arrangements do not impede BNM's supervisory access.

**Meeting Frequency:** [Quarterly / as per Board calendar]

**Reporting:** Receives the Outsourcing Risk Dashboard and critical vendor status reports on a [quarterly] basis from the Technology Risk Committee.

#### 5.2.2 Technology Risk Committee (TRC)

**Mandate:** The TRC is the primary management-level governance body for technology risk, including outsourcing risk. It is responsible for:

- Reviewing and recommending the Outsourcing Governance Framework for Board approval.
- Approving the annual outsourcing risk assessment and remediation plans.
- Reviewing and approving new material outsourcing arrangements proposed by business units (Tier 1 and Tier 2).
- Overseeing the performance of critical service providers and escalating material concerns to the Board.
- Monitoring concentration risk across the outsourcing portfolio.
- Reviewing and approving changes to vendor risk tiering classifications.
- Approving exit strategy activation for critical outsourcing arrangements.

**Composition:**

| Role | Member |
|---|---|
| Chair | Chief Information Officer (CIO) or Chief Risk Officer (CRO) |
| Member | Chief Information Security Officer (CISO) |
| Member | Head of Vendor Management |
| Member | Head of Technology |
| Member | Head of Compliance |
| Member | Head of Legal |
| Member | Head of Business Continuity Management |
| Member | Representative from relevant business units (rotating) |
| Secretary | Vendor Management Office |

**Meeting Frequency:** Monthly, with provision for extraordinary meetings as required.

#### 5.2.3 Vendor Management Office (VMO)

**Mandate:** The VMO is the central operational function responsible for the day-to-day management and oversight of the outsourcing governance lifecycle. It operates under the Head of Vendor Management and is responsible for:

- Maintaining the Institution's Outsourcing Register.
- Coordinating and executing the vendor due diligence process.
- Reviewing and negotiating outsourcing contracts to ensure compliance with regulatory requirements and this Framework.
- Monitoring vendor performance against SLAs and KPIs.
- Coordinating vendor risk tiering assessments.
- Facilitating periodic vendor performance reviews.
- Escalating vendor issues and risks to the TRC.
- Maintaining exit strategy documentation and coordinating exit strategy testing.
- Reporting to the TRC and Board on outsourcing risk matters.

**Reporting Line:** Head of Vendor Management (reports to CIO / CRO)

#### 5.2.4 Business Unit / Process Owner

**Mandate:** Each business unit that sponsors or relies upon an outsourcing arrangement acts as the Process Owner and is accountable for:

- Identifying the business need for outsourcing and initiating the procurement process.
- Defining business requirements, SLAs, and KPIs in collaboration with the VMO.
- Participating in the due diligence process as the subject matter expert.
- Day-to-day management of the vendor relationship for operational matters.
- Escalating operational issues and performance concerns to the VMO.
- Ensuring that business continuity plans account for the outsourced service.
- Providing input to the vendor risk tiering assessment.

#### 5.2.5 Second Line Functions (Risk, Compliance, Information Security)

**Mandate:** Second line functions provide independent oversight and challenge of outsourcing risk management practices:

- **Technology Risk Management:** Conducts independent risk assessments of outsourcing arrangements; reviews and challenges the vendor risk tiering; reports to the CRO.
- **Compliance:** Ensures outsourcing arrangements comply with regulatory requirements; reviews contracts for regulatory compliance; coordinates BNM notifications.
- **Information Security (CISO's Office):** Conducts or commissions vendor security assessments; reviews security controls in vendor contracts; manages security incidents involving vendors.

#### 5.2.6 Internal Audit

**Mandate:** Internal Audit provides independent assurance over the outsourcing governance framework and its implementation:

- Conducts periodic audits of the outsourcing governance function and selected vendor arrangements.
- Reviews the adequacy of due diligence, contract management, and performance monitoring processes.
- Reports findings and recommendations to the Audit Committee of the Board.
- Tracks and validates the closure of audit findings.

### 5.3 Governance Lifecycle

*Describe the end-to-end governance process for outsourcing arrangements, from initial identification through to exit.*

The outsourcing governance lifecycle consists of the following phases:

| Phase | Description | Key Activities | Governance Body |
|---|---|---|---|
| **1. Initiation** | Business need identified; decision to outsource made | Business case development; preliminary risk assessment; seek TRC approval in principle | Business Unit, TRC |
| **2. Vendor Selection** | Market assessment; vendor shortlisting and evaluation | RFP/RFI; due diligence; risk tiering; security assessment; legal review | VMO, InfoSec, Legal |
| **3. Contracting** | Negotiation and execution of outsourcing agreement | Contract negotiation; compliance review; SLA/KPI definition; approval | VMO, Legal, Compliance, TRC |
| **4. Onboarding** | Transition of services to the vendor | Transition planning; data migration; integration testing; staff training | Business Unit, VMO, IT |
| **5. Ongoing Management** | Day-to-day operation and oversight | Performance monitoring; periodic reviews; risk reassessment; incident management | VMO, Business Unit |
| **6. Renewal / Variation** | Contract renewal or material change | Renewal assessment; re-due diligence; contract renegotiation | VMO, TRC |
| **7. Exit / Termination** | End of outsourcing arrangement | Exit strategy execution; data retrieval/destruction; transition to successor | VMO, Business Unit, IT |

### 5.4 BNM Notification and Reporting Requirements

*Detail the regulatory notification obligations that apply to outsourcing arrangements under BNM RMiT.*

[Organization Name] is required to notify and report to BNM in respect of outsourcing arrangements as follows:

| Trigger | Notification Type | Timeline | Responsible Party |
|---|---|---|---|
| New material outsourcing arrangement (Tier 1) | Prior notification to BNM | [As specified in BNM RMiT / at least X days before commencement] | Head of Compliance |
| Material changes to an existing critical outsourcing arrangement | Notification to BNM | [As specified in BNM RMiT] | Head of Compliance |
| Termination of a critical outsourcing arrangement | Notification to BNM | [As specified in BNM RMiT] | Head of Compliance |
| Material outsourcing-related incident | Incident report to BNM | [As specified in BNM RMiT Incident Reporting requirements] | CISO / Head of Compliance |
| Annual outsourcing report | Periodic regulatory report | Annually, per BNM reporting calendar | Head of Compliance |

> **Note:** The specific timelines and formats for BNM notifications are governed by the relevant BNM policy documents and Circulars. The Compliance function shall maintain a current schedule of reporting obligations and ensure all deadlines are met. Any ambiguity regarding notification requirements shall be referred to BNM's Supervision Department for clarification.

---

## 6. Roles and Responsibilities

*Define clearly who is responsible for each aspect of outsourcing governance. Use a RACI framework to avoid ambiguity.*

### 6.1 RACI Matrix

**RACI Key:**
- **R** — Responsible: The party who performs the activity.
- **A** — Accountable: The party ultimately answerable for the outcome (one per activity).
- **C** — Consulted: The party whose input is sought before decisions are made.
- **I** — Informed: The party who is kept informed of progress and decisions.

| Activity | Board / BRC | TRC | Head of VM | VMO | Business Unit | Technology Risk | Compliance | InfoSec | Legal | Internal Audit |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Approve Outsourcing Governance Framework | **A** | C | R | R | I | C | C | C | C | I |
| Approve risk appetite for outsourcing | **A** | R | C | I | I | C | C | I | I | I |
| Approve new Tier 1 outsourcing arrangements | **A** | R | C | C | C | C | C | C | C | I |
| Approve new Tier 2 outsourcing arrangements | I | **A** | R | R | C | C | C | C | C | I |
| Approve new Tier 3 outsourcing arrangements | I | I | **A** | R | R | C | I | I | I | I |
| Initiate outsourcing business case | I | I | C | I | **A** | I | I | I | I | I |
| Conduct vendor due diligence | I | I | A | **R** | C | C | C | C | I | I |
| Conduct vendor security assessment | I | I | C | C | C | C | I | **R** | I | I |
| Review and approve outsourcing contracts | I | I | C | C | I | I | **A** | C | R | I |
| Maintain Outsourcing Register | I | I | **A** | R | I | I | I | I | I | I |
| Assign vendor risk tier | I | A | R | **R** | C | C | I | C | I | I |
| Monitor vendor SLA/KPI performance | I | I | A | **R** | R | I | I | I | I | I |
| Conduct quarterly vendor performance reviews | I | I | A | **R** | R | C | I | C | I | I |
| Escalate vendor incidents | I | A | R | **R** | R | C | C | C | I | I |
| Notify BNM of material outsourcing | I | I | C | I | I | I | **A** | I | C | I |
| Develop and test exit strategies | I | A | R | **R** | C | C | I | C | I | I |
| Conduct outsourcing audits | I | I | C | C | I | I | I | I | I | **A** |
| Report outsourcing risk to Board | I | **A** | R | R | I | C | C | I | I | I |

### 6.2 Key Role Descriptions

#### 6.2.1 Head of Vendor Management

*The Head of Vendor Management is the primary owner of this Framework and the outsourcing governance function.*

**Key Responsibilities:**
- Overall ownership and maintenance of the Outsourcing Governance Framework.
- Directing and overseeing the Vendor Management Office.
- Reporting on outsourcing risk matters to the TRC.
- Ensuring all outsourcing arrangements comply with this Framework and applicable regulations.
- Approving vendor risk tiering classifications (Tier 2 and Tier 3), subject to TRC endorsement for Tier 2.
- Escalating material vendor issues to the TRC.
- Ensuring exit strategies are maintained and tested for critical vendors.

**Minimum Qualifications / Experience:** [Define as appropriate for the Institution]

#### 6.2.2 Vendor Relationship Manager (VMO)

*Each active outsourcing arrangement is assigned a Vendor Relationship Manager within the VMO, who serves as the primary point of contact for governance and oversight.*

**Key Responsibilities:**
- Day-to-day management of assigned vendor relationships from a governance perspective.
- Maintaining the outsourcing register entries for assigned vendors.
- Coordinating due diligence activities for new and renewing arrangements.
- Monitoring SLA/KPI performance and preparing performance reports.
- Facilitating periodic vendor review meetings.
- Escalating issues to the Head of Vendor Management.
- Coordinating exit strategy documentation and testing.

#### 6.2.3 Business Unit Process Owner

**Key Responsibilities:**
- Sponsoring and justifying the business case for outsourcing.
- Defining operational requirements, SLAs, and KPIs in collaboration with the VMO.
- Participating in due diligence as the subject matter expert on business requirements.
- Managing the day-to-day operational relationship with the vendor.
- Escalating operational performance issues to the Vendor Relationship Manager.
- Ensuring business continuity plans account for vendor dependencies.
- Approving vendor invoices and confirming service delivery.

#### 6.2.4 Technology Risk Manager

**Key Responsibilities:**
- Conducting independent risk assessments of proposed and existing outsourcing arrangements.
- Reviewing and challenging vendor risk tiering classifications.
- Monitoring the aggregate outsourcing risk profile, including concentration risk.
- Reporting technology outsourcing risk to the CRO and TRC.
- Maintaining the technology risk register entries related to outsourcing.

#### 6.2.5 Compliance Officer (Outsourcing)

**Key Responsibilities:**
- Reviewing outsourcing contracts for regulatory compliance.
- Monitoring changes in regulatory requirements applicable to outsourcing.
- Coordinating BNM notifications and regulatory reporting related to outsourcing.
- Providing compliance guidance to the VMO and business units.
- Liaising with BNM and other regulators on outsourcing matters.

#### 6.2.6 Chief Information Security Officer (CISO)

**Key Responsibilities:**
- Approving or commissioning vendor security assessments.
- Defining minimum security requirements for outsourcing arrangements (by risk tier).
- Reviewing security provisions in outsourcing contracts.
- Managing security incidents involving service providers.
- Reporting on vendor-related security risks to the TRC.

---

## 7. Vendor Risk Tiering Criteria

*Describe the methodology used to classify service providers into risk tiers, the criteria applied, and the governance implications of each tier.*

### 7.1 Purpose of Risk Tiering

Risk tiering enables [Organization Name] to apply oversight and governance resources proportionate to the risk posed by each outsourcing arrangement. All active and prospective outsourcing arrangements must be assessed and assigned a risk tier using the criteria defined in this section.

Tiering is conducted:
- **Prior to entering a new outsourcing arrangement** (initial classification).
- **Annually** as part of the outsourcing register review.
- **Whenever there is a material change** to the scope, nature, or criticality of the service.
- **Following a material incident** involving the service provider.

### 7.2 Tiering Framework

[Organization Name] applies a **three-tier** outsourcing risk classification model:

| Tier | Classification | Description |
|---|---|---|
| **Tier 1** | **Critical / High Risk** | Services that are essential to core business operations; disruption would cause material financial loss, regulatory breach, or significant reputational damage. Equivalent to "material outsourcing" under BNM RMiT. |
| **Tier 2** | **Important / Medium Risk** | Services that are operationally significant but not immediately critical; disruption would cause moderate operational disruption manageable within established recovery timeframes. |
| **Tier 3** | **Standard / Lower Risk** | Services that support non-core activities; disruption would have limited operational impact and can be managed through alternative means or tolerated for an extended period. |

### 7.3 Tiering Criteria

Each outsourcing arrangement is assessed against the following criteria to determine its risk tier:

#### 7.3.1 Criterion 1: Business Criticality

| Score | Description |
|---|---|
| **High (3)** | The service supports a core business process without which the Institution cannot operate (e.g., core banking, payment processing, customer authentication). |
| **Medium (2)** | The service supports an important business process; its absence would cause significant inconvenience and require manual workarounds. |
| **Low (1)** | The service supports a non-core business process; its absence can be tolerated or easily substituted. |

#### 7.3.2 Criterion 2: Data Sensitivity

| Score | Description |
|---|---|
| **High (3)** | The service provider has access to, processes, or stores highly sensitive data including personal financial data, customer PII, or confidential institution data classified as Restricted or Confidential. |
| **Medium (2)** | The service provider has access to internal data that, if compromised, could cause moderate harm to customers or the Institution. |
| **Low (1)** | The service provider has access only to non-sensitive, publicly available, or anonymised data. |

#### 7.3.3 Criterion 3: Regulatory Impact

| Score | Description |
|---|---|
| **High (3)** | Failure or compromise of the service would result in a breach of regulatory requirements (BNM, PDPA, etc.) or require mandatory notification to BNM. |
| **Medium (2)** | Failure or compromise of the service could potentially result in a regulatory breach or would require internal regulatory escalation. |
| **Low (1)** | Failure or compromise of the service would have no direct regulatory impact. |

#### 7.3.4 Criterion 4: Replaceability / Vendor Concentration

| Score | Description |
|---|---|
| **High (3)** | The service provider is the sole supplier of this service with no viable alternative; transition timeframe exceeds 12 months; high switching costs or technical lock-in. |
| **Medium (2)** | Limited alternative suppliers exist; transition timeframe is 3-12 months; moderate switching costs. |
| **Low (1)** | Multiple alternative suppliers readily available; transition timeframe under 3 months; low switching costs. |

#### 7.3.5 Criterion 5: Geographic / Jurisdictional Risk

| Score | Description |
|---|---|
| **High (3)** | Service provider is domiciled in, or data is processed in, a jurisdiction with significant legal, political, or regulatory risk; cross-border data transfer implications; limited BNM enforcement reach. |
| **Medium (2)** | Service provider is domiciled in a jurisdiction with moderate regulatory risk; cross-border data transfer management required. |
| **Low (1)** | Service provider is domiciled in Malaysia or in a jurisdiction with strong regulatory equivalence and data protection frameworks. |

### 7.4 Tier Determination Matrix

The composite risk score is calculated as follows:

**Composite Score = Sum of all criterion scores**

| Composite Score Range | Assigned Tier |
|---|---|
| 12 – 15 | Tier 1 (Critical) |
| 8 – 11 | Tier 2 (Important) |
| 5 – 7 | Tier 3 (Standard) |

> **Note:** Any outsourcing arrangement where **any single criterion** receives a score of **3 (High)** for Criterion 1 (Business Criticality) OR Criterion 3 (Regulatory Impact) shall be classified as **no lower than Tier 2**, regardless of the composite score. This override ensures that critical operational or regulatory risks are not under-classified.

> **Note on BNM Classification:** All Tier 1 arrangements shall be treated as "material outsourcing" for the purposes of BNM RMiT notification and reporting obligations.

### 7.5 Governance Requirements by Tier

| Governance Activity | Tier 1 (Critical) | Tier 2 (Important) | Tier 3 (Standard) |
|---|---|---|---|
| **Approval Authority** | Board / TRC | TRC | Head of Vendor Management |
| **BNM Notification** | Required (prior) | As applicable | Not required |
| **Initial Due Diligence Depth** | Enhanced | Standard + | Standard |
| **Due Diligence Refresh** | Annual | Bi-annual | At renewal |
| **Security Assessment** | Annual (independent) | Annual (self-assessment with VMO validation) | At renewal |
| **SLA/KPI Monitoring** | Monthly | Quarterly | Semi-annual |
| **Formal Performance Review** | Quarterly | Semi-annual | Annual |
| **Exit Strategy** | Required (tested annually) | Required (reviewed annually) | Required (documented) |
| **Sub-contractor Oversight** | Enhanced | Standard | Notification only |
| **Concentration Risk Review** | Quarterly | Annually | At renewal |
| **Outsourcing Register Update** | Real-time | Within 30 days | Within 60 days |
| **Minimum Contract Term Visibility** | Board / TRC | TRC | VMO |

### 7.6 Concentration Risk Management

*Describe how the Institution manages the risk of over-reliance on individual vendors or groups of vendors.*

[Organization Name] monitors concentration risk across its outsourcing portfolio to prevent over-reliance on any single service provider or geographic location. The following concentration risk thresholds are established:

| Concentration Risk Dimension | Threshold | Escalation |
|---|---|---|
| Single vendor providing more than [X]% of critical IT services by value | [X]% | TRC review and mitigation plan |
| More than [X] Tier 1 arrangements with the same vendor | [X] arrangements | Board notification |
| More than [X]% of critical services hosted in a single geographic region | [X]% | TRC review |
| More than [X]% of services dependent on a single cloud service provider | [X]% | TRC review and diversification plan |

> **Guidance:** The specific threshold values above shall be set by the TRC in accordance with the Institution's Board-approved risk appetite and reviewed annually. The VMO shall maintain a concentration risk heat map as part of the Outsourcing Risk Dashboard.

---

## 8. Due Diligence Framework

*Describe the processes, criteria, and activities used to assess service providers before and during outsourcing arrangements.*

### 8.1 Due Diligence Principles

Due diligence at [Organization Name] is:

- **Risk-proportionate:** The depth and breadth of due diligence is scaled to the risk tier of the arrangement.
- **Pre-contractual:** Initial due diligence must be completed, documented, and approved before an outsourcing contract is signed.
- **Ongoing:** Due diligence is not a one-time activity; it is refreshed periodically and on the occurrence of trigger events.
- **Documented:** All due diligence findings, assessments, and decisions must be documented and retained in the Vendor Management System.
- **Multi-disciplinary:** Due diligence involves input from the VMO, Information Security, Technology Risk, Compliance, Legal, and the sponsoring Business Unit.

### 8.2 Trigger Events for Due Diligence

Due diligence is triggered by the following events:

| Trigger | Due Diligence Action |
|---|---|
| New outsourcing arrangement | Full initial due diligence |
| Contract renewal | Refreshed due diligence (depth per tier) |
| Material change in scope of services | Targeted due diligence on changed elements |
| Material change in vendor's financial position | Financial due diligence refresh |
| Material security incident at vendor | Security due diligence refresh |
| Change in vendor ownership / acquisition | Full due diligence refresh |
| Change in vendor's country of domicile or data processing location | Regulatory and geographic due diligence refresh |
| Adverse media or regulatory action against vendor | Reputational and regulatory due diligence |
| Annual review (Tier 1 and Tier 2) | Periodic due diligence refresh per tier schedule |

### 8.3 Due Diligence Checklist

#### 8.3.1 Tier 3 — Standard Due Diligence

*Required for all outsourcing arrangements at initial engagement and at renewal.*

**A. Organizational and Legal Standing**

- [ ] Vendor is a legally registered entity in its country of domicile
- [ ] Certificate of incorporation / business registration verified
- [ ] Directors / beneficial owners identified (where required by AML/CFT obligations)
- [ ] No adverse sanctions screening results (OFAC, UN, Malaysian sanctions lists)
- [ ] Vendor has no outstanding regulatory actions or significant litigation that could affect service delivery

**B. Financial Stability**

- [ ] Most recent audited financial statements reviewed (minimum 1 year)
- [ ] Vendor demonstrates financial capacity to fulfil contractual obligations
- [ ] No evidence of insolvency proceedings or material financial distress

**C. Operational Capability**

- [ ] Vendor has demonstrable experience delivering similar services
- [ ] References from at least [X] comparable clients obtained and checked
- [ ] Vendor has adequate staffing and technical capacity for the engagement
- [ ] Business continuity and disaster recovery capabilities reviewed (at a summary level)

**D. Information Security (Standard)**

- [ ] Vendor has an Information Security Policy in place
- [ ] Vendor has nominated an information security contact
- [ ] Vendor confirms compliance with applicable data protection laws
- [ ] Vendor agrees to notification obligations in the event of a security incident

**E. Contractual and Regulatory**

- [ ] Non-disclosure agreement (NDA) executed prior to sharing confidential information
- [ ] Vendor acknowledges BNM's right of access to premises, systems, and records
- [ ] Data processing agreement (DPA) in place if vendor processes personal data

#### 8.3.2 Tier 2 — Standard+ Due Diligence

*Includes all Tier 3 items, plus the following:*

**A. Financial Stability (Enhanced)**

- [ ] Audited financial statements for the past 3 years reviewed
- [ ] Credit rating or financial health assessment obtained (if available)
- [ ] Vendor's insurance coverage reviewed (professional indemnity, cyber liability, general liability)

**B. Operational Capability (Enhanced)**

- [ ] Site visit or virtual assessment of vendor's operating facilities conducted
- [ ] Key personnel and succession arrangements reviewed
- [ ] Sub-contractor arrangements identified and disclosed
- [ ] Sub-contractors assessed at minimum Standard level

**C. Information Security (Standard+)**

- [ ] Vendor's most recent security certification reviewed (ISO 27001, SOC 2 Type II, or equivalent)
- [ ] Vulnerability management practices reviewed
- [ ] Access control policies and procedures reviewed
- [ ] Incident response capability assessed
- [ ] Data retention and destruction procedures reviewed

**D. Business Continuity (Standard+)**

- [ ] Business Continuity Plan reviewed for relevance to the services provided
- [ ] Disaster Recovery capabilities assessed with evidence of testing
- [ ] Recovery Time Objective (RTO) and Recovery Point Objective (RPO) confirmed

**E. Regulatory Compliance**

- [ ] Vendor's regulatory compliance status reviewed (applicable industry regulations)
- [ ] Any regulatory sanctions, fines, or enforcement actions in the past 5 years reviewed
- [ ] Cross-border data transfer mechanisms confirmed (if applicable)

#### 8.3.3 Tier 1 — Enhanced Due Diligence

*Includes all Tier 2 items, plus the following:*

**A. Financial Stability (Comprehensive)**

- [ ] Independent financial analysis commissioned (if warranted by engagement value or criticality)
- [ ] Detailed review of vendor's debt structure and capital adequacy
- [ ] Vendor's business continuity financial capacity assessed

**B. Information Security (Comprehensive)**

- [ ] Independent third-party security assessment commissioned, or independent review of vendor's most recent audit (e.g., SOC 2 Type II, penetration test results)
- [ ] Cloud security architecture reviewed (if applicable)
- [ ] Data sovereignty and residency controls verified
- [ ] Encryption standards for data in transit and at rest reviewed
- [ ] Multi-tenancy isolation controls reviewed (if applicable)
- [ ] Physical and environmental security controls assessed

**C. Legal and Regulatory (Comprehensive)**

- [ ] Detailed legal analysis of applicable laws in the vendor's jurisdiction
- [ ] Assessment of jurisdictional risk including government access to data laws
- [ ] Contractual protections against changes in applicable law reviewed
- [ ] Force majeure and regulatory change provisions reviewed
- [ ] Audit rights exercised or evidence of recent audit by equivalent institution reviewed

**D. Governance and Concentration Risk**

- [ ] Vendor's corporate governance structure assessed
- [ ] Key man risk assessed and mitigation confirmed
- [ ] Concentration risk analysis completed (Institution-level and sector-level)
- [ ] Alternative service provider options documented as part of exit strategy

**E. Sub-contractor Management**

- [ ] Full sub-contractor chain identified and documented
- [ ] All material sub-contractors assessed at minimum Tier 2 standard
- [ ] Vendor's sub-contractor management policies reviewed
- [ ] Contractual flow-down requirements confirmed

### 8.4 Due Diligence Scoring and Decision

*Describe how due diligence findings are evaluated and translated into a go/no-go decision.*

Due diligence findings are documented in the **Vendor Due Diligence Report** (see Appendix A for template). The Vendor Relationship Manager assigns a risk rating to each due diligence domain:

| Domain Rating | Description | Action |
|---|---|---|
| **Satisfactory** | No material issues identified; vendor meets requirements | Proceed |
| **Requires Improvement** | Minor issues identified; vendor has an acceptable remediation plan | Proceed with conditions; remediation tracked |
| **Unsatisfactory** | Material issues identified; vendor cannot demonstrate adequate controls | Do not proceed; or escalate to TRC with documented risk acceptance |

**Overall Due Diligence Outcome:**

| Outcome | Criteria | Authority |
|---|---|---|
| **Approve** | All domains rated Satisfactory or Requires Improvement with accepted remediation plans | Per vendor tier |
| **Conditional Approval** | One or more domains rated Unsatisfactory with documented risk acceptance and remediation plan | TRC (Tier 1 and 2); Head of VM (Tier 3) |
| **Reject** | Material, unmitigable risks identified; vendor fails to meet minimum requirements | TRC |

### 8.5 Ongoing Due Diligence

Ongoing due diligence activities are managed as part of the performance monitoring framework described in Section 10. In addition, the following trigger events shall initiate an out-of-cycle due diligence refresh:

- Significant change in vendor's ownership, management, or business model.
- Material security incident at the vendor affecting [Organization Name] or similarly situated clients.
- Adverse regulatory action against the vendor by BNM or a comparable regulator.
- Material change in the vendor's financial position (e.g., credit downgrade, announcement of financial distress).
- Significant changes in the geopolitical or legal environment in the vendor's country of domicile.

---

## 9. SLA and KPI Definitions

*Describe the framework for defining, measuring, and managing service level agreements and key performance indicators for outsourced services.*

### 9.1 Purpose of SLAs and KPIs

Service Level Agreements (SLAs) and Key Performance Indicators (KPIs) serve to:

- Establish clear, measurable expectations for service delivery.
- Provide a basis for objective performance assessment and accountability.
- Create contractual remedies for underperformance, including service credits, termination rights, and escalation obligations.
- Enable trend analysis to identify deteriorating performance before it becomes critical.
- Fulfil regulatory requirements for ongoing performance oversight under BNM RMiT.

### 9.2 SLA Framework

#### 9.2.1 Minimum SLA Requirements by Vendor Tier

All outsourcing contracts must include SLAs covering at minimum the following dimensions:

| SLA Dimension | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| **Service Availability** | Required | Required | Required |
| **Incident Response & Resolution** | Required | Required | Required |
| **Recovery Time Objective (RTO)** | Required | Required | Recommended |
| **Recovery Point Objective (RPO)** | Required | Required | Recommended |
| **Performance / Throughput** | Required | Recommended | Optional |
| **Security Incident Notification** | Required | Required | Required |
| **Change Management Timelines** | Required | Required | Recommended |
| **Reporting and Transparency** | Required | Required | Required |
| **Capacity Management** | Required | Recommended | Optional |

#### 9.2.2 Standard SLA Definitions

*The following standard definitions shall be used consistently across all outsourcing contracts, unless business requirements necessitate deviation (which must be documented and approved by the Head of Vendor Management).*

**Service Availability:**

| Availability Class | Target | Maximum Permitted Downtime (per month) | Typical Application |
|---|---|---|---|
| **Platinum** | 99.99% | ~4.4 minutes | Core banking, payment systems (Tier 1) |
| **Gold** | 99.9% | ~43.8 minutes | Critical customer-facing systems (Tier 1/2) |
| **Silver** | 99.5% | ~3.6 hours | Important internal systems (Tier 2) |
| **Bronze** | 99.0% | ~7.3 hours | Standard support systems (Tier 3) |

**Incident Classification and Response SLAs:**

| Severity | Definition | Initial Response | Resolution Target (Tier 1) | Resolution Target (Tier 2/3) |
|---|---|---|---|---|
| **P1 — Critical** | Complete service outage or severe degradation affecting core operations | 15 minutes | 4 hours | 8 hours |
| **P2 — High** | Significant service degradation; core functionality impaired but operational | 30 minutes | 8 hours | 24 hours |
| **P3 — Medium** | Partial service degradation; workarounds available | 2 hours | 72 hours | 5 business days |
| **P4 — Low** | Minor issue; no material operational impact | 4 business hours | 10 business days | 20 business days |

**Recovery Objectives (Minimum Requirements by Tier):**

| Tier | Maximum RTO | Maximum RPO |
|---|---|---|
| Tier 1 — Critical | [X] hours | [X] hours |
| Tier 2 — Important | [X] hours | [X] hours |
| Tier 3 — Standard | [X] hours | [X] hours |

> **Guidance:** The Institution's specific RTO/RPO requirements shall be defined in the Business Continuity Management Framework and cascaded into vendor contracts. The values above should be populated by the Head of BCM in consultation with the Head of Vendor Management.

### 9.3 Key Performance Indicators

#### 9.3.1 Standard KPI Framework

In addition to SLA compliance, the following KPIs shall be measured and reported for all outsourcing arrangements (with depth proportionate to vendor tier):

**Operational Performance KPIs:**

| KPI | Definition | Measurement Method | Reporting Frequency |
|---|---|---|---|
| **SLA Compliance Rate** | Percentage of SLA metrics met within the measurement period | Automated monitoring / service provider report | Monthly (Tier 1); Quarterly (Tier 2/3) |
| **Incident Volume and Trend** | Number of incidents by severity; month-on-month trend | Incident management system | Monthly (Tier 1); Quarterly (Tier 2/3) |
| **Mean Time to Respond (MTTR)** | Average time from incident report to initial vendor response | Incident management system | Monthly (Tier 1); Quarterly (Tier 2/3) |
| **Mean Time to Resolve (MTResolve)** | Average time from incident report to full resolution | Incident management system | Monthly (Tier 1); Quarterly (Tier 2/3) |
| **Change Success Rate** | Percentage of changes implemented without causing an incident | Change management log | Quarterly |
| **Scheduled Maintenance Compliance** | Percentage of maintenance windows adhered to as notified | VMO tracking | Quarterly |

**Security KPIs:**

| KPI | Definition | Measurement Method | Reporting Frequency |
|---|---|---|---|
| **Security Incident Notification Timeliness** | Time from vendor detecting a security incident to notifying the Institution | Incident log | Per incident; trended quarterly |
| **Vulnerability Remediation Rate** | Percentage of identified vulnerabilities remediated within agreed timelines | Security assessment reports | Quarterly (Tier 1); Annually (Tier 2/3) |
| **Patch Compliance Rate** | Percentage of systems patched within agreed timelines | Vendor attestation / audit | Quarterly (Tier 1); Semi-annual (Tier 2/3) |
| **Security Certification Currency** | Validity status of required certifications (ISO 27001, SOC 2, etc.) | Certificate review | Annual |

**Governance and Relationship KPIs:**

| KPI | Definition | Measurement Method | Reporting Frequency |
|---|---|---|---|
| **Reporting Compliance** | Percentage of contractually required reports delivered on time | VMO tracking | Monthly |
| **Audit Finding Closure Rate** | Percentage of audit findings closed within agreed timelines | Audit tracking log | Quarterly |
| **Escalation Response Rate** | Percentage of escalations acknowledged and actioned within agreed timelines | VMO tracking | Monthly |
| **Relationship Health Score** | Composite qualitative and quantitative assessment of the relationship | Business Unit survey + VMO assessment | Quarterly |

#### 9.3.2 KPI Thresholds and Actions

| KPI Status | Threshold | Required Action |
|---|---|---|
| **Green (On Target)** | At or above target | Continue monitoring; note in performance report |
| **Amber (At Risk)** | Below target by ≤ [X]% | Issue formal notice to vendor; require remediation plan; escalate to Head of VM |
| **Red (Breach)** | Below target by > [X]% | Formal breach notice; invoke service credits; escalate to TRC; review exit strategy |
| **Persistent Breach** | Amber or Red for [X] consecutive periods | Escalate to TRC; consider contract termination; activate exit strategy planning |

### 9.4 Service Credit Framework

*Describe the financial remedies available to the Institution in the event of SLA breaches.*

All Tier 1 and Tier 2 outsourcing contracts shall include a service credit regime providing financial compensation to the Institution for SLA breaches. The service credit framework shall include at minimum:

| Element | Minimum Requirement |
|---|---|
| Service credit calculation basis | Percentage of monthly fees per SLA category |
| Maximum service credits per month | [X]% of monthly contract value |
| Service credit cap per annum | [X]% of annual contract value |
| Termination trigger | Right to terminate for cause if credits exceed [X]% in [X] consecutive months |
| Sole remedy waiver | Not permitted — service credits must not be the sole remedy for SLA breach |

> **Note:** The Compliance and Legal functions shall review all service credit clauses to ensure they do not inadvertently limit the Institution's rights to pursue other remedies or invoke BNM's right of access.

### 9.5 SLA Review and Update Process

SLAs and KPIs shall be reviewed:

- **Annually** as part of the vendor performance review cycle.
- **At contract renewal** — all SLAs are to be renegotiated or reaffirmed.
- **Following material incidents** — SLAs may be tightened in response to demonstrated underperformance.
- **Following material changes in business requirements** — SLAs shall be updated to reflect changed service criticality.

---

## 10. Ongoing Monitoring and Performance Management

*Describe the processes for continuously monitoring vendor performance and managing the ongoing vendor relationship.*

### 10.1 Overview

Ongoing monitoring ensures that [Organization Name] maintains visibility of vendor performance, emerging risks, and changes in the vendor's operating environment throughout the life of an outsourcing arrangement. It is a continuous obligation, not a periodic compliance exercise.

### 10.2 Monitoring Activities by Tier

| Monitoring Activity | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| Automated SLA/availability monitoring | Continuous | Continuous | Monthly |
| Incident report review | Weekly | Monthly | Quarterly |
| Performance dashboard update | Monthly | Quarterly | Semi-annual |
| Formal performance review meeting | Quarterly | Semi-annual | Annual |
| Financial health monitoring | Quarterly | Semi-annual | Annual |
| Security posture review | Quarterly (summary) | Annual | At renewal |
| Sub-contractor review | Quarterly | Annual | At renewal |
| Concentration risk assessment | Quarterly | Annual | At renewal |
| Business continuity / DR test review | Annual (with evidence) | Annual (attestation) | At renewal |
| Regulatory compliance status check | Quarterly | Annual | At renewal |
| Adverse media / reputational monitoring | Continuous | Quarterly | Annual |
| Site visit / on-site audit | Annual (or as required) | Bi-annual | Every 3 years |

### 10.3 Performance Review Meetings

*Describe the structure and content of formal vendor performance review meetings.*

#### 10.3.1 Operational Review Meeting

- **Frequency:** Monthly (Tier 1); Quarterly (Tier 2); Semi-annual (Tier 3)
- **Attendees:** Vendor Relationship Manager, Business Unit Process Owner, Vendor Account Manager, Vendor Technical Lead
- **Agenda Items:**
  - SLA/KPI performance scorecard review
  - Open incident and problem review
  - Change management update
  - Action item tracking from previous meeting
  - Upcoming changes or planned maintenance
  - Any security or compliance updates from the vendor

#### 10.3.2 Quarterly Strategic Review (Tier 1 Only)

- **Frequency:** Quarterly
- **Attendees:** Head of Vendor Management, Business Unit Head, Vendor Senior Account Manager, (CIO or delegate as applicable)
- **Agenda Items:**
  - Operational performance summary
  - Strategic relationship review
  - Innovation and roadmap alignment
  - Risk and compliance update
  - Escalation review and resolution
  - Contract and commercial matters

### 10.4 Performance Scorecard

*The VMO shall maintain a standardized performance scorecard for each active vendor, updated at each review cycle.*

| Scorecard Section | Weighting | Green Threshold | Amber Threshold | Red Threshold |
|---|---|---|---|---|
| SLA Compliance | [X]% | ≥ [X]% | [X]% – [X]% | < [X]% |
| Incident Management | [X]% | All P1/P2 within target | ≤ [X]% breaches | > [X]% breaches |
| Security Posture | [X]% | No open critical findings | 1-2 open findings | ≥ 3 open critical findings |
| Governance & Reporting | [X]% | All reports on time | ≤ [X]% late | > [X]% late |
| Relationship Health | [X]% | Satisfactory | Requires improvement | Unsatisfactory |
| **Overall Score** | **100%** | | | |

### 10.5 Outsourcing Register

The VMO shall maintain a comprehensive **Outsourcing Register** that serves as the authoritative inventory of all outsourcing arrangements. The Register shall be maintained in [Vendor Management System / GRC Platform] and shall include for each arrangement:

| Field | Description |
|---|---|
| Arrangement ID | Unique identifier |
| Vendor Name | Legal entity name of the service provider |
| Vendor Jurisdiction | Country of domicile |
| Service Description | Nature of services provided |
| Business Unit Owner | Sponsoring business unit |
| Vendor Relationship Manager | VMO contact |
| Risk Tier | Tier 1 / Tier 2 / Tier 3 |
| Contract Start Date | Effective date of the current contract |
| Contract End Date | Expiry date of the current contract |
| Auto-Renewal Flag | Yes / No |
| Annual Contract Value | [MYR] |
| Data Classification | Classification of data shared with vendor |
| Personal Data Processed | Yes / No |
| Cross-border Data Transfer | Yes / No (and destination) |
| BNM Notified | Yes / No / Not Applicable |
| Last Due Diligence Date | Date of most recent due diligence |
| Next Due Diligence Due | Date of next scheduled due diligence |
| Exit Strategy Reference | Reference to exit strategy document |
| Current SLA Status | Green / Amber / Red |
| Last Review Date | Date of last formal performance review |

The Outsourcing Register shall be reviewed and attested by the Head of Vendor Management on a **quarterly** basis.

---

## 11. Exit Strategy Requirements

*Define the requirements for planning, documenting, maintaining, and executing exit strategies for outsourcing arrangements.*

### 11.1 Purpose

An exit strategy is a pre-planned, documented approach to transitioning an outsourced service away from the current service provider — whether to an alternative provider, back to the Institution (insourcing), or to a managed wind-down. Exit strategies are required to:

- Protect the Institution from over-reliance on a single vendor.
- Ensure operational continuity in the event of planned or unplanned vendor exit.
- Fulfil BNM RMiT Clause 10.47 requirements for exit planning.
- Protect customer data and ensure regulatory compliance during transitions.

### 11.2 Exit Strategy Requirements by Tier

| Requirement | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| **Documented exit strategy** | Mandatory | Mandatory | Mandatory |
| **Exit strategy review** | Annual | Annual | At renewal |
| **Exit strategy testing / simulation** | Annual | Every 2 years | Not required |
| **Alternative vendor identified** | Mandatory | Mandatory | Recommended |
| **Data portability provisions in contract** | Mandatory | Mandatory | Mandatory |
| **Transition assistance obligations in contract** | Mandatory | Mandatory | Recommended |
| **Knowledge transfer plan** | Mandatory | Mandatory | Recommended |

### 11.3 Exit Strategy Document Structure

Each exit strategy document shall contain at minimum the following sections:

#### 11.3.1 Overview and Trigger Scenarios

*Identify the scenarios that could trigger exit strategy activation.*

| Trigger Category | Specific Scenarios |
|---|---|
| **Planned Exit** | Contract expiry; vendor replacement due to competitive tender; strategic decision to insource |
| **Performance-Based Exit** | Persistent SLA breach; loss of required certification; failure to remediate critical security vulnerabilities |
| **Financial / Stability Exit** | Vendor insolvency; acquisition by a competitor; material financial distress |
| **Regulatory Exit** | Regulatory action against the vendor; vendor no longer permitted to operate in relevant jurisdiction; BNM direction to exit |
| **Force Majeure / Crisis Exit** | Vendor unable to provide services due to unforeseeable events (e.g., natural disaster, cyberattack on vendor) |

#### 11.3.2 Exit Options

For each outsourcing arrangement, the following exit options shall be evaluated and documented:

| Exit Option | Description | Feasibility Assessment | Estimated Transition Timeline |
|---|---|---|---|
| **Transfer to Alternative Vendor** | Transition services to a pre-identified alternative service provider | [Feasible / Partially Feasible / Not Feasible] | [X months] |
| **Insourcing** | Bring the function back in-house | [Feasible / Partially Feasible / Not Feasible] | [X months] |
| **Interim / Bridge Arrangement** | Engage a temporary provider while a permanent solution is implemented | [Feasible / Partially Feasible / Not Feasible] | [X months] |
| **Phased Wind-Down** | Gradually reduce reliance on the vendor while transitioning to alternatives | [Feasible / Partially Feasible / Not Feasible] | [X months] |

#### 11.3.3 Exit Transition Plan

| Phase | Activities | Responsible Party | Timeline |
|---|---|---|---|
| **1. Preparation** | Confirm exit decision; notify relevant internal stakeholders; engage legal; review contract exit provisions | Head of VM, Legal, Business Unit | [X weeks prior to exit] |
| **2. Transition Planning** | Finalise exit option; develop detailed transition plan; identify successor provider; resource transition team | VMO, Business Unit, IT | [X weeks prior to exit] |
| **3. Data and Knowledge Transfer** | Initiate data extraction and migration; document institutional knowledge held by vendor; agree knowledge transfer schedule | IT, Business Unit, VMO | [X weeks] |
| **4. Parallel Operations** | Operate new and existing arrangements in parallel to validate successor capability (where feasible) | Business Unit, IT | [X weeks] |
| **5. Cutover** | Switch operations to successor provider; decommission current vendor access; confirm data deletion | IT, Business Unit | [Day of cutover] |
| **6. Post-Exit Verification** | Verify all data retrieved or destroyed; confirm access revoked; close all contractual obligations; document lessons learned | VMO, InfoSec, Legal | [X weeks post-exit] |

#### 11.3.4 Contractual Exit Provisions

All outsourcing contracts must contain the following minimum exit provisions:

| Provision | Requirement |
|---|---|
| **Transition assistance** | Vendor must provide reasonable transition assistance for a minimum of [X] months post-notice |
| **Data portability** | Vendor must return all Institution data in a format that is usable and interoperable within [X] days of request |
| **Data deletion** | Vendor must certify destruction of all Institution data within [X] days of contract termination |
| **Exit notice period** | Minimum [X] months' notice required by either party for planned termination |
| **Termination for convenience** | Institution must have the right to terminate for convenience with [X] months' notice |
| **Termination for cause** | Institution must have the right to terminate immediately (or with short notice) in the event of material breach, insolvency, or regulatory direction |
| **Sub-contractor disclosure** | Vendor must promptly disclose any changes in sub-contractor arrangements during the exit period |
| **Knowledge transfer** | Vendor must cooperate with knowledge transfer and documentation activities during the exit period |

### 11.4 Exit Strategy Testing

For Tier 1 vendors, exit strategies must be tested at least annually. Testing may take the form of:

- **Tabletop exercise:** Structured walkthrough of the exit plan with key stakeholders to identify gaps.
- **Component testing:** Testing specific elements of the exit plan (e.g., data portability, access revocation procedures).
- **Simulation exercise:** More comprehensive exercise simulating the exit scenario.

Exit strategy test results, including any gaps identified and remediation actions, shall be documented and reported to the TRC.

---

## 12. Incident and Escalation Management

*Define how outsourcing-related incidents are identified, reported, escalated, and resolved.*

### 12.1 Incident Categories

| Category | Description | Example |
|---|---|---|
| **Service Disruption** | Unplanned outage or degradation of outsourced service | Core banking system unavailability |
| **Security Incident** | Security breach, data leak, or cyber attack involving the service provider | Ransomware attack on vendor; data exfiltration |
| **Data Breach** | Unauthorized access to, or disclosure of, Institution or customer data | Vendor inadvertently exposes customer PII |
| **Compliance Incident** | Vendor action or inaction that creates a regulatory compliance risk | Vendor fails to obtain required certification |
| **Financial Incident** | Events affecting the vendor's financial stability | Vendor placed in administration |
| **Reputational Incident** | Events that could damage the Institution's reputation through association with the vendor | Vendor subject to significant adverse media |

### 12.2 Incident Escalation Matrix

| Incident Severity | Description | Notification to Institution | Internal Escalation | BNM Notification |
|---|---|---|---|---|
| **Critical** | P1 service disruption; significant data breach; vendor insolvency | Within 1 hour | Immediate: Head of VM, CIO, CISO, CRO | As required by RMiT |
| **High** | P2 service disruption; security incident with potential data impact | Within 4 hours | Within 4 hours: Head of VM, relevant HODs | Assess within 24 hours |
| **Medium** | P3 service disruption; compliance or reputational concern | Within 24 hours | Within 24 hours: VMO, Business Unit | Not required (unless escalated) |
| **Low** | P4 service disruption; minor non-compliance | Within 5 business days | At next performance review | Not required |

### 12.3 Vendor Incident Reporting Requirements

All outsourcing contracts shall require service providers to:

- Notify [Organization Name] of any security incidents that affect, or could potentially affect, the Institution's systems or data within **[X] hours** of discovery.
- Provide an initial incident report within **[X] hours** of notification.
- Provide a full incident report (root cause analysis, impact assessment, remediation plan) within **[X] business days** of resolution.
- Cooperate fully with any forensic investigation conducted by or on behalf of [Organization Name].
- Not make any public statement regarding an incident affecting [Organization Name] without prior written consent.

---

## 13. Data Protection and Confidentiality Requirements

*Describe the data protection obligations that apply to outsourcing arrangements, particularly in relation to the PDPA and cross-border data transfers.*

### 13.1 Data Protection Principles

All outsourcing arrangements involving the processing of personal data must comply with the **Personal Data Protection Act 2010 (PDPA)** and [Organization Name]'s Data Governance Policy. The following principles apply:

| Principle | Requirement |
|---|---|
| **Data Processor Agreement** | A compliant data processing agreement (DPA) must be in place with all vendors that process personal data on behalf of the Institution. |
| **Purpose Limitation** | Vendors may only process personal data for the specific purposes defined in the outsourcing agreement and DPA. |
| **Data Minimization** | Vendors shall have access only to the minimum personal data necessary to perform their contracted services. |
| **Cross-border Transfers** | Personal data may only be transferred to service providers in foreign jurisdictions where adequate data protection standards are in place, or where contractual safeguards are implemented in compliance with PDPA requirements. |
| **Security Measures** | Vendors must implement technical and organizational security measures commensurate with the sensitivity of the personal data processed. |
| **Data Breach Notification** | Vendors must notify the Institution within **[X] hours** of discovering a personal data breach. |
| **Data Retention and Deletion** | Vendors must retain personal data only for the period necessary and securely delete or return it upon contract termination. |
| **Sub-processor Restrictions** | Vendors must not engage sub-processors to process personal data without prior written consent from the Institution; sub-processors must be bound by equivalent data protection obligations. |

### 13.2 Data Classification and Access Control

| Data Classification | Access Permitted to Vendors | Additional Controls Required |
|---|---|---|
| **Public** | Unrestricted | Standard contractual confidentiality |
| **Internal** | Permitted with NDA | NDA; access logging |
| **Confidential** | Restricted; specific authorization required | NDA; access controls; audit logging; DPA |
| **Restricted (including PII)** | Requires explicit approval by CISO and DPO | DPA; enhanced security controls; BNM notification (if applicable) |

### 13.3 Confidentiality Obligations

All outsourcing contracts must contain confidentiality provisions that:

- Prohibit the vendor from disclosing any Institution data to third parties without prior written consent.
- Survive the termination of the contract for a minimum of [X] years.
- Require the vendor to flow down equivalent confidentiality obligations to all sub-contractors.
- Protect the Institution's right to audit compliance with confidentiality obligations.

---

## 14. Business Continuity and Resilience

*Describe the requirements for ensuring that outsourced services are resilient and that the Institution can continue to operate in the event of vendor disruption.*

### 14.1 Business Continuity Requirements

All outsourcing arrangements must be reflected in the Institution's Business Continuity Management Framework. Specifically:

- The Business Unit Process Owner must ensure that the BCM plan for each critical process accounts for the scenario where the outsourced service is unavailable.
- Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) defined in outsourcing contracts must be aligned with the Institution's BCM requirements for the relevant business processes.
- Business continuity obligations must be explicitly addressed in all outsourcing contracts (mandatory for Tier 1 and Tier 2).

### 14.2 Vendor Business Continuity Assessment

| Requirement | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| BCP documentation review | Annual | Bi-annual | At renewal |
| DR test evidence review | Annual | Annual | At renewal |
| RTO/RPO verification | Quarterly (via monitoring) | Annual | At renewal |
| Joint BCM exercise | Bi-annual | As agreed | Not required |
| BCP audit right | Required in contract | Recommended | Optional |

### 14.3 Multi-Region and Redundancy Requirements

For Tier 1 outsourcing arrangements, the contract shall specify:

- Geographic redundancy requirements (e.g., primary and secondary data centre locations).
- Prohibition on locating primary and secondary infrastructure in the same geographic risk zone.
- Notification obligations if the vendor proposes changes to data centre locations or redundancy architecture.
- The Institution's right to conduct or commission independent validation of resilience capabilities.

---

## 15. Audit and Assurance

*Describe the audit and assurance activities that apply to outsourcing governance and individual vendor arrangements.*

### 15.1 Internal Audit

The Internal Audit function shall conduct periodic audits of:

- The Outsourcing Governance Framework and its implementation.
- The VMO's processes for due diligence, performance monitoring, and exit strategy management.
- Selected individual outsourcing arrangements (risk-based selection; Tier 1 vendors prioritized).
- The accuracy and completeness of the Outsourcing Register.

**Audit Frequency:**
- Framework-level audit: [Annually / Bi-annually]
- Tier 1 vendor arrangement audits: [At least one per year, rotating]
- Tier 2 vendor arrangement audits: [Every 2-3 years, risk-based]

Internal Audit findings shall be reported to the Audit Committee and tracked to closure.

### 15.2 Vendor Audit Rights

All outsourcing contracts (Tier 1 and Tier 2, mandatory; Tier 3, recommended) must include the right for [Organization Name] to:

- Conduct audits of the vendor's systems, processes, and controls relevant to the outsourced service.
- Commission independent third-party audits on the Institution's behalf.
- Review audit reports conducted by the vendor's own internal audit function or external auditors.
- Conduct security assessments or penetration tests (with reasonable notice).

Contracts must also explicitly preserve **BNM's right of access** to the vendor's premises, systems, records, and personnel as required by applicable law and BNM regulations.

### 15.3 External Assurance

For Tier 1 vendors, [Organization Name] may accept the following external assurance reports in lieu of conducting its own audit (subject to VMO and CISO review):

- **SOC 2 Type II** report (issued within the past 12 months)
- **ISO 27001 Certification** (current and applicable to the relevant service)
- **PCI DSS Assessment** (where applicable to payment services)
- **Independent penetration test report** (issued within the past 12 months)

The VMO shall review the scope of any such reports to confirm they cover the services provided to [Organization Name]. Gaps in scope shall be addressed through supplementary assessment or contractual representations.

---

## 16. Review and Approval

### 16.1 Review Schedule

This Framework shall be reviewed in accordance with the following schedule:

| Review Type | Frequency | Responsibility |
|---|---|---|
| **Continuous monitoring** | Ongoing | Vendor Management Office |
| **Operational review** | Quarterly | Head of Vendor Management |
| **Full framework review** | Annual | Head of Vendor Management, TRC |
| **Triggered review** | As required (see below) | Head of Vendor Management |

**Trigger events for an unscheduled review include:**

- Material change in BNM regulations applicable to outsourcing.
- Significant change in the Institution's outsourcing strategy or risk appetite.
- Material outsourcing-related incident.
- Significant change in the external technology or vendor landscape.
- Board or TRC direction.

### 16.2 Version History

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 0.1 | [Date] | [Author] | Initial draft | — |
| 0.2 | [Date] | [Author] | Incorporated TRC feedback | — |
| 1.0 | [Effective Date] | [Author] | First approved version | [Approver] |
| | | | | |
| | | | | |

### 16.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Vendor Management | [Name] | _________________ | [Date] |
| Chief Information Officer | [Name] | _________________ | [Date] |
| Chief Risk Officer | [Name] | _________________ | [Date] |
| Chief Information Security Officer | [Name] | _________________ | [Date] |
| Head of Compliance | [Name] | _________________ | [Date] |
| Head of Legal | [Name] | _________________ | [Date] |
| Chair, Technology Risk Committee | [Name] | _________________ | [Date] |
| Board Risk Committee (endorsement) | [Name] | _________________ | [Date] |

---

## 17. References

### 17.1 Regulatory References

| Reference | Document Title | Issuing Body | Relevant Clauses |
|---|---|---|---|
| **BNM RMiT** | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.47 (and all sub-clauses); Clauses 10.1 – 10.10 (general governance); Clause 11 (incident reporting) |
| **FSA 2013** | Financial Services Act 2013 | Parliament of Malaysia | Section 47 (business continuity); Schedule 7 (licensing conditions) |
| **IFSA 2013** | Islamic Financial Services Act 2013 | Parliament of Malaysia | As applicable |
| **PDPA 2010** | Personal Data Protection Act 2010 | Parliament of Malaysia | All applicable provisions |
| **BNM BCM Policy** | Policy Document on Business Continuity Management | Bank Negara Malaysia | All applicable provisions |
| **NACSA Guidelines** | [Applicable NACSA guideline titles] | National Cyber Security Agency | [Applicable sections] |

### 17.2 Internal Policy References

| Document Title | Owner | Location |
|---|---|---|
| Enterprise Risk Management Framework | Chief Risk Officer | [Document Repository Link / Reference] |
| Third-Party Risk Management Policy | Head of Vendor Management | [Document Repository Link / Reference] |
| Information Security Policy | CISO | [Document Repository Link / Reference] |
| Data Governance Policy | Chief Data Officer | [Document Repository Link / Reference] |
| Business Continuity Management Framework | Head of BCM | [Document Repository Link / Reference] |
| Procurement Policy | Head of Procurement | [Document Repository Link / Reference] |
| Information Classification Policy | CISO | [Document Repository Link / Reference] |
| Contract Management Policy | Head of Legal | [Document Repository Link / Reference] |

---

## 18. Appendices

### Appendix A — Vendor Due Diligence Report Template

*This appendix contains the standardized template for documenting the results of vendor due diligence assessments. Complete one report per outsourcing arrangement per due diligence cycle.*

---

**VENDOR DUE DILIGENCE REPORT**

| Field | Details |
|---|---|
| Vendor Name | [Vendor Legal Entity Name] |
| Arrangement ID | [Outsourcing Register ID] |
| Service Description | [Brief description of services] |
| Due Diligence Type | Initial / Refresh / Triggered |
| Risk Tier | Tier 1 / Tier 2 / Tier 3 |
| Due Diligence Lead | [VMO Vendor Relationship Manager] |
| Assessment Date | [Date] |
| Review Period Covered | [From date] to [To date] |

**Assessment Summary:**

| Domain | Rating | Key Findings | Recommended Actions |
|---|---|---|---|
| Organizational & Legal Standing | Satisfactory / Requires Improvement / Unsatisfactory | [Summary] | [Actions] |
| Financial Stability | Satisfactory / Requires Improvement / Unsatisfactory | [Summary] | [Actions] |
| Operational Capability | Satisfactory / Requires Improvement / Unsatisfactory | [Summary] | [Actions] |
| Information Security | Satisfactory / Requires Improvement / Unsatisfactory | [Summary] | [Actions] |
| Business Continuity | Satisfactory / Requires Improvement / Unsatisfactory | [Summary] | [Actions] |
| Regulatory Compliance | Satisfactory / Requires Improvement / Unsatisfactory | [Summary] | [Actions] |
| Sub-contractor Management | Satisfactory / Requires Improvement / Unsatisfactory / N/A | [Summary] | [Actions] |
| Data Protection | Satisfactory / Requires Improvement / Unsatisfactory | [Summary] | [Actions] |

**Overall Due Diligence Outcome:** Approve / Conditional Approval / Reject

**Conditions (if Conditional Approval):**
1. [Condition 1]
2. [Condition 2]

**Approved By:** [Name, Title, Date]

---

### Appendix B — Vendor Risk Tiering Assessment Form

*Complete this form for each new or existing outsourcing arrangement requiring risk tier classification or reclassification.*

---

**VENDOR RISK TIERING ASSESSMENT**

| Field | Details |
|---|---|
| Vendor Name | [Vendor Legal Entity Name] |
| Arrangement ID | [Outsourcing Register ID] |
| Service Description | [Brief description of services] |
| Assessment Date | [Date] |
| Assessed By | [Name, Title] |

**Tiering Criteria Assessment:**

| Criterion | Description | Score (1-3) | Justification |
|---|---|---|---|
| 1. Business Criticality | | | |
| 2. Data Sensitivity | | | |
| 3. Regulatory Impact | | | |
| 4. Replaceability / Concentration | | | |
| 5. Geographic / Jurisdictional Risk | | | |
| **Total Score** | | **/15** | |

**Override Applied?** Yes / No

**Override Justification (if applicable):** [Explain any mandatory floor applied]

**Assigned Risk Tier:** Tier 1 / Tier 2 / Tier 3

**Previous Tier (if reclassification):** Tier 1 / Tier 2 / Tier 3 / New Arrangement

**Approved By:**

| Role | Name | Date |
|---|---|---|
| Vendor Relationship Manager | | |
| Head of Vendor Management | | |
| Technology Risk Manager (if Tier 1/2) | | |

---

### Appendix C — Outsourcing Register Template

*The Outsourcing Register is maintained in [Vendor Management System / GRC Platform]. This appendix provides the field definitions and a sample extract format.*

---

**OUTSOURCING REGISTER — SAMPLE EXTRACT**

| Arrangement ID | Vendor Name | Service Category | Business Unit | Risk Tier | Contract Start | Contract End | Annual Value (MYR) | Data Classification | Personal Data | Cross-border | BNM Notified | Last DD Date | SLA Status | Exit Strategy Ref |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| OUT-2024-001 | [Vendor A] | Cloud IaaS | Technology | Tier 1 | [Date] | [Date] | [Amount] | Confidential | Yes | No | Yes | [Date] | Green | EXIT-2024-001 |
| OUT-2024-002 | [Vendor B] | Managed Security | InfoSec | Tier 1 | [Date] | [Date] | [Amount] | Restricted | Yes | Yes | Yes | [Date] | Amber | EXIT-2024-002 |
| OUT-2024-003 | [Vendor C] | HR SaaS | Human Resources | Tier 2 | [Date] | [Date] | [Amount] | Internal | Yes | No | N/A | [Date] | Green | EXIT-2024-003 |

---

### Appendix D — Minimum Mandatory Contract Provisions Checklist

*Use this checklist to verify that all outsourcing contracts contain the minimum provisions required by BNM RMiT and this Framework before contracts are executed.*

---

**CONTRACT COMPLIANCE CHECKLIST**

| # | Mandatory Provision | Tier 1 | Tier 2 | Tier 3 | Verified By | Date |
|---|---|:---:|:---:|:---:|---|---|
| 1 | Clear description of services and deliverables | ✓ | ✓ | ✓ | | |
| 2 | SLA definitions and measurement methodology | ✓ | ✓ | ✓ | | |
| 3 | Service credit regime | ✓ | ✓ | — | | |
| 4 | BNM right of access to premises, systems, and records | ✓ | ✓ | ✓ | | |
| 5 | Institution's right to audit | ✓ | ✓ | — | | |
| 6 | Data protection and confidentiality obligations | ✓ | ✓ | ✓ | | |
| 7 | Data processing agreement (if personal data processed) | ✓ | ✓ | ✓ | | |
| 8 | Security incident notification obligations | ✓ | ✓ | ✓ | | |
| 9 | Business continuity and DR obligations | ✓ | ✓ | — | | |
| 10 | Sub-contractor disclosure and approval requirements | ✓ | ✓ | ✓ | | |
| 11 | Transition assistance obligations | ✓ | ✓ | — | | |
| 12 | Data portability and return obligations | ✓ | ✓ | ✓ | | |
| 13 | Data deletion certification obligations | ✓ | ✓ | ✓ | | |
| 14 | Exit notice period (minimum [X] months) | ✓ | ✓ | ✓ | | |
| 15 | Termination for cause provisions | ✓ | ✓ | ✓ | | |
| 16 | Termination for convenience provisions | ✓ | ✓ | — | | |
| 17 | Governing law (Malaysia) | ✓ | ✓ | ✓ | | |
| 18 | Change management notification obligations | ✓ | ✓ | — | | |
| 19 | Key personnel and succession requirements | ✓ | — | — | | |
| 20 | Regulatory change provisions | ✓ | ✓ | — | | |

**Reviewed By (Legal):** [Name, Date]

**Reviewed By (Compliance):** [Name, Date]

**Reviewed By (VMO):** [Name, Date]

**Approved for Execution:** [Name, Title, Date]

---

### Appendix E — Exit Strategy Template

*Complete this template for each Tier 1 and Tier 2 outsourcing arrangement. Review annually and update following any material change.*

---

**EXIT STRATEGY DOCUMENT**

| Field | Details |
|---|---|
| Arrangement ID | [Outsourcing Register ID] |
| Vendor Name | [Vendor Legal Entity Name] |
| Service Description | [Brief description] |
| Risk Tier | Tier 1 / Tier 2 |
| Document Owner | [Vendor Relationship Manager] |
| Last Reviewed | [Date] |
| Last Tested | [Date] |
| Next Review Due | [Date] |
| Next Test Due | [Date] |

**Section 1: Trigger Scenarios**

| Trigger Category | Specific Scenario | Likelihood | Potential Impact |
|---|---|---|---|
| Planned | [Scenario] | Low/Medium/High | Low/Medium/High |
| Performance | [Scenario] | Low/Medium/High | Low/Medium/High |
| Financial / Stability | [Scenario] | Low/Medium/High | Low/Medium/High |
| Regulatory | [Scenario] | Low/Medium/High | Low/Medium/High |
| Force Majeure | [Scenario] | Low/Medium/High | Low/Medium/High |

**Section 2: Exit Options Assessment**

| Exit Option | Description | Feasibility | Estimated Timeline | Estimated Cost | Recommended Option |
|---|---|---|---|---|---|
| Transfer to Alternative Vendor | [Details] | High/Medium/Low | [X months] | [MYR] | Yes/No |
| Insourcing | [Details] | High/Medium/Low | [X months] | [MYR] | Yes/No |
| Interim Bridge Arrangement | [Details] | High/Medium/Low | [X months] | [MYR] | Yes/No |

**Identified Alternative Vendors:**

| Vendor | Capability Assessment | Contact | Lead Time to Engage |
|---|---|---|---|
| [Alternative Vendor 1] | [Assessment summary] | [Contact details] | [X weeks] |
| [Alternative Vendor 2] | [Assessment summary] | [Contact details] | [X weeks] |

**Section 3: Transition Plan**

| Phase | Key Activities | Lead | Dependencies | Timeline |
|---|---|---|---|---|
| 1. Preparation | [Activities] | [Owner] | [Dependencies] | [Week X] |
| 2. Alternative Engagement | [Activities] | [Owner] | [Dependencies] | [Week X-Y] |
| 3. Data Migration | [Activities] | [Owner] | [Dependencies] | [Week X-Y] |
| 4. Parallel Operations | [Activities] | [Owner] | [Dependencies] | [Week X-Y] |
| 5. Cutover | [Activities] | [Owner] | [Dependencies] | [Week X] |
| 6. Post-Exit Verification | [Activities] | [Owner] | [Dependencies] | [Week X+Y] |

**Section 4: Data and Intellectual Property**

- **Data Volume:** [Estimated data volume requiring migration/retrieval]
- **Data Format:** [Formats in which data will be returned]
- **Data Migration Tool:** [Tool/method to be used]
- **IP and Documentation:** [Inventory of IP and documentation to be retrieved]
- **Data Destruction Certification:** [Process for obtaining vendor certification]

**Section 5: Communication Plan**

| Stakeholder | Communication | Timing | Owner |
|---|---|---|---|
| Board / TRC | [Content] | [Timing] | [Owner] |
| Affected business units | [Content] | [Timing] | [Owner] |
| BNM | [Content] | [Timing] | [Owner] |
| Customers (if affected) | [Content] | [Timing] | [Owner] |
| Staff | [Content] | [Timing] | [Owner] |

**Section 6: Test History**

| Test Date | Test Type | Participants | Key Findings | Actions Taken |
|---|---|---|---|---|
| [Date] | [Tabletop/Component/Simulation] | [Names] | [Findings] | [Actions] |

---

### Appendix F — Vendor Performance Scorecard Template

*Complete quarterly (Tier 1), semi-annually (Tier 2), or annually (Tier 3) for each active outsourcing arrangement.*

---

**VENDOR PERFORMANCE SCORECARD**

| Field | Details |
|---|---|
| Vendor Name | [Vendor Legal Entity Name] |
| Arrangement ID | [Outsourcing Register ID] |
| Reporting Period | [From date] to [To date] |
| Prepared By | [VMO Vendor Relationship Manager] |
| Review Date | [Date] |

**SLA Performance:**

| SLA Metric | Target | Actual | Variance | Status |
|---|---|---|---|---|
| Service Availability | [X]% | [Actual]% | [+/-]% | Green/Amber/Red |
| P1 Incident Response | 15 min | [Actual] | [+/-] | Green/Amber/Red |
| P1 Incident Resolution | 4 hours | [Actual] | [+/-] | Green/Amber/Red |
| P2 Incident Resolution | 8 hours | [Actual] | [+/-] | Green/Amber/Red |
| Report Delivery | 100% on time | [Actual]% | [+/-]% | Green/Amber/Red |
| [Additional SLA] | [Target] | [Actual] | [Variance] | Green/Amber/Red |

**KPI Summary:**

| KPI | Target | Actual | Status | Trend |
|---|---|---|---|---|
| SLA Compliance Rate | [X]% | [Actual]% | Green/Amber/Red | ↑ / → / ↓ |
| Incident Volume (P1) | ≤ [X] | [Actual] | Green/Amber/Red | ↑ / → / ↓ |
| Incident Volume (P2) | ≤ [X] | [Actual] | Green/Amber/Red | ↑ / → / ↓ |
| Open Critical Vulnerabilities | 0 | [Actual] | Green/Amber/Red | ↑ / → / ↓ |
| Audit Finding Closure Rate | 100% by due date | [Actual]% | Green/Amber/Red | ↑ / → / ↓ |

**Overall Scorecard Rating:** Green / Amber / Red

**Commentary and Key Issues:**

[Provide narrative summary of vendor performance, highlighting any concerns, improvements, or notable events during the reporting period.]

**Actions Required:**

| # | Action | Owner | Due Date | Status |
|---|---|---|---|---|
| 1 | [Action] | [Owner] | [Date] | Open / In Progress / Closed |
| 2 | [Action] | [Owner] | [Date] | Open / In Progress / Closed |

**Approved By:** [Head of Vendor Management, Date]

---

### Appendix G — BNM Notification Log

*Maintain a log of all notifications made to BNM in relation to outsourcing arrangements, for audit and compliance purposes.*

---

**BNM OUTSOURCING NOTIFICATION LOG**

| Log ID | Arrangement ID | Vendor Name | Notification Type | Date Submitted | Submitted By | BNM Reference (if provided) | Outcome / Response | Notes |
|---|---|---|---|---|---|---|---|---|
| BNM-2024-001 | OUT-2024-001 | [Vendor A] | New Material Outsourcing — Prior Notification | [Date] | Head of Compliance | [BNM Ref] | [Acknowledged / No Objection] | [Notes] |
| | | | | | | | | |

---

### Appendix H — Glossary of SLA and KPI Terms

*This appendix provides standardized definitions for SLA and KPI metrics used across all outsourcing contracts.*

| Term | Standardized Definition |
|---|---|
| **Availability** | The percentage of time within a measurement period (typically monthly) during which the service is operational and accessible by authorized users, calculated as: (Total Minutes in Period − Downtime Minutes) / Total Minutes in Period × 100%. Planned maintenance windows, where notified within the agreed notice period, are excluded from downtime calculations. |
| **Planned Maintenance Window** | A pre-agreed period during which the service may be unavailable for maintenance purposes. Must be notified to the Institution at least [X] days in advance. Excluded from availability calculations if notified within the agreed notice period. |
| **Downtime** | Any period during which the service is unavailable or materially degraded such that it cannot be used for its intended purpose, excluding planned maintenance windows. |
| **Incident** | Any unplanned event that causes or could cause a disruption or degradation of the outsourced service. |
| **Problem** | The underlying cause of one or more incidents. |
| **Change** | Any planned modification to the service, its underlying infrastructure, or its configuration. |
| **Response Time** | The elapsed time from the moment [Organization Name] logs or notifies the vendor of an incident to the moment the vendor acknowledges the incident and assigns a resource to address it. |
| **Resolution Time** | The elapsed time from the moment [Organization Name] logs or notifies the vendor of an incident to the moment the service is fully restored to normal operation. |
| **Recovery Time Objective (RTO)** | The maximum acceptable elapsed time from service disruption to service restoration, as agreed in the outsourcing contract. |
| **Recovery Point Objective (RPO)** | The maximum acceptable amount of data loss measured in time, representing the point to which data must be recoverable following a service disruption. |
| **Service Credit** | A financial credit applied to the Institution's invoiced charges as compensation for an SLA breach, calculated in accordance with the service credit formula in the outsourcing contract. |

---

*End of Document*

---

**Document Control Information**

| Field | Details |
|---|---|
| Document Title | Outsourcing Governance Framework |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | Head of Vendor Management |
| Review Frequency | Quarterly (operational); Annual (full review) |
| Storage Location | [Document Management System Path] |
| Related Documents | See Section 17.2 |
| BNM RMiT Reference | Clause 10.47 |