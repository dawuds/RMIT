# Strategy Alignment Documentation

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Cloud Architecture Lead |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Regulatory Reference** | BNM RMiT Policy Document (Ref No. BNM/RH/PD 029-9), Clause 17.1 |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for the use of [Organization Name] and its authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. If you have received this document in error, please notify [Document Owner Contact] immediately.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Governance Structure](#4-governance-structure)
5. [Cloud Service Model and Deployment Type](#5-cloud-service-model-and-deployment-type)
6. [Cloud Strategy Alignment Framework](#6-cloud-strategy-alignment-framework)
7. [Data Residency Requirements](#7-data-residency-requirements)
8. [Shared Responsibility Matrix](#8-shared-responsibility-matrix)
9. [Technology Strategy Integration](#9-technology-strategy-integration)
10. [Risk Alignment and Control Posture](#10-risk-alignment-and-control-posture)
11. [Vendor and Third-Party Management Alignment](#11-vendor-and-third-party-management-alignment)
12. [Cloud Adoption Roadmap and Maturity](#12-cloud-adoption-roadmap-and-maturity)
13. [Performance and Compliance Monitoring](#13-performance-and-compliance-monitoring)
14. [Roles and Responsibilities](#14-roles-and-responsibilities)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the overarching purpose of this document, why it exists, and the regulatory obligation it fulfills. Reference the specific BNM RMiT clause driving its creation.*

This Strategy Alignment Documentation establishes and evidences the alignment between [Organization Name]'s cloud strategy and its overarching technology strategy. It has been prepared in accordance with the Bank Negara Malaysia (BNM) **Risk Management in Technology (RMiT) Policy Document** (Ref No. BNM/RH/PD 029-9), specifically **Clause 17.1**, which requires that a financial institution's cloud strategy be integrated into and consistent with its broader technology strategy.

This document serves as a primary compliance artifact demonstrating to BNM, internal auditors, and relevant regulatory bodies that [Organization Name] has taken a deliberate, governed, and risk-informed approach to cloud adoption that is coherent with its institutional objectives, risk appetite, and regulatory obligations.

The document is **mandatory** and forms part of [Organization Name]'s suite of RMiT compliance evidence. It shall be maintained under continuous monitoring and subjected to a formal quarterly review cycle, or upon any material change to the cloud or technology strategy.

### 1.2 Scope

*Define the organizational, geographic, technical, and regulatory boundaries of this document. Be explicit about what is in-scope and out-of-scope.*

#### 1.2.1 In-Scope

This document applies to:

- All cloud computing services (IaaS, PaaS, SaaS) procured, operated, or managed by [Organization Name] or its subsidiaries.
- All business units, departments, and functions that consume or operate cloud-hosted services.
- All cloud service providers (CSPs) engaged by [Organization Name], including but not limited to [CSP Name 1], [CSP Name 2], and [CSP Name 3].
- Hybrid cloud and multi-cloud configurations.
- Technology systems supporting regulated activities as defined under the Financial Services Act 2013 (FSA) and Islamic Financial Services Act 2013 (IFSA).
- Outsourced technology functions with a cloud component, subject to BNM's outsourcing guidelines.

#### 1.2.2 Out-of-Scope

The following are explicitly excluded from the scope of this document:

- On-premises legacy infrastructure not connected to or interfacing with cloud environments.
- Shadow IT or unapproved cloud services not formally registered with [Department Name / IT Asset Management].
- Personal computing devices used solely for non-organizational purposes.
- Technology strategies of affiliated entities not operating under [Organization Name]'s regulatory licence, unless otherwise stated.

#### 1.2.3 Geographic Scope

| Region | Jurisdiction | Applicability |
|---|---|---|
| Malaysia | Bank Negara Malaysia (BNM) | Primary — all regulated activities |
| [Country / Region] | [Regulatory Body] | [Applicable / Not Applicable] |
| [Country / Region] | [Regulatory Body] | [Applicable / Not Applicable] |

### 1.3 Objectives

*List the specific, measurable objectives this strategy alignment aims to achieve. These should be directly traceable to organizational and regulatory goals.*

The objectives of this Strategy Alignment Documentation are to:

1. Demonstrate that [Organization Name]'s cloud strategy is formally derived from, and consistent with, the organization's approved **Technology Strategy [Year]–[Year]**.
2. Provide a structured and auditable record of governance structures, decision authorities, and accountability for cloud-related technology decisions.
3. Evidence compliance with BNM RMiT Clause 17.1 requirements regarding the integration of cloud computing into the institution's overarching technology risk management framework.
4. Define the approved cloud service models, deployment types, and permissible use cases within the organization.
5. Establish clear data residency and data sovereignty requirements applicable to cloud-hosted data assets.
6. Articulate the shared responsibility model between [Organization Name] and its cloud service providers.
7. Enable continuous monitoring of strategy alignment through defined key performance indicators (KPIs) and key risk indicators (KRIs).

---

## 2. Executive Summary

*Provide a concise, non-technical summary of the cloud strategy, its alignment with the technology strategy, and the key compliance posture of the organization. This section is intended for senior leadership, the Board, and regulatory reviewers.*

### 2.1 Strategic Context

[Organization Name] is a [licensed financial institution / licensed Islamic financial institution / payment system operator] regulated by Bank Negara Malaysia under the [Financial Services Act 2013 / Islamic Financial Services Act 2013 / Applicable Act]. The organization operates across [number] business lines and serves approximately [number] customers as at [date].

In response to rapidly evolving market expectations, competitive pressures, and the imperative for operational resilience, [Organization Name] has developed a **Cloud Strategy** that is a foundational pillar of its **[Year]–[Year] Technology Strategy**. The cloud strategy enables the organization to achieve:

- **Agility:** Accelerated delivery of digital products and services.
- **Scalability:** Elastic capacity aligned with business demand.
- **Resilience:** Improved disaster recovery posture and business continuity.
- **Innovation:** Access to advanced capabilities including artificial intelligence, machine learning, and data analytics.
- **Cost Optimisation:** Transition from capital expenditure to consumption-based operating expenditure.

### 2.2 Regulatory Alignment Statement

[Organization Name]'s cloud strategy has been designed and implemented with explicit reference to the **BNM RMiT Policy Document**, and specifically the requirements of **Clause 17.1**. The organization's Board of Directors and Senior Management have formally approved the cloud strategy and this alignment documentation as evidence of their oversight and commitment to responsible cloud adoption.

The organization has assessed its cloud strategy against all applicable RMiT requirements and is satisfied that:

- Cloud adoption is governed through a defined governance framework with appropriate Board-level visibility.
- Data residency and data classification requirements are embedded in cloud procurement and architecture decisions.
- Shared responsibilities between [Organization Name] and cloud service providers are formally defined and periodically reviewed.
- Risk management controls applicable to cloud environments are integrated into the organization's enterprise risk management (ERM) framework.

### 2.3 Current Cloud Posture Summary

| Dimension | Current State | Target State (FY[Year]) |
|---|---|---|
| Cloud Adoption Maturity | [Level, e.g., Managed / Optimizing] | [Target Level] |
| Primary Cloud Model | [e.g., Hybrid Cloud] | [e.g., Cloud-First Hybrid] |
| Number of Registered CSPs | [Number] | [Number] |
| Workloads in Cloud (% of total) | [%] | [%] |
| Critical Systems in Cloud | [Number] | [Number] |
| Data Residency Compliance | [%] | 100% |
| BNM Prior Approval Obtained | [Yes / In Progress] | Yes |

### 2.4 Key Strategic Decisions

The following key strategic decisions underpin this alignment documentation:

1. [Organization Name] has adopted a **[Cloud-First / Cloud-Smart / Hybrid]** cloud strategy, meaning [brief rationale].
2. [Organization Name] has designated **[CSP Name]** as its primary strategic cloud service provider, with **[CSP Name]** as secondary.
3. All data classified as **Highly Confidential** or above shall remain within Malaysia's geographic boundaries unless explicitly approved by [Approval Authority].
4. [Organization Name] has obtained / is in the process of obtaining BNM's prior approval for the use of cloud services for [categories of material outsourcing / critical systems], as required under RMiT and the BNM Outsourcing Policy.
5. The **Cloud Centre of Excellence (CCoE)** has been established as the primary governance body for cloud strategy execution and compliance oversight.

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Framework Overview

*Summarize the key regulatory obligations that shape the cloud and technology strategy. This section provides the compliance basis for all subsequent sections.*

[Organization Name] operates within a comprehensive regulatory environment. The following regulatory instruments are directly relevant to this Strategy Alignment Documentation:

| Regulatory Instrument | Issuing Authority | Relevant Sections | Effective Date |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 17.1, and related provisions | [Date] |
| Outsourcing Policy | Bank Negara Malaysia | [Relevant Clauses] | [Date] |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | [Relevant Sections] | [Date] |
| Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | [Relevant Sections] | [Date] |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | [Relevant Sections] | [Date] |
| NACSA Cloud Security Guideline | NACSA | [Relevant Sections] | [Date] |
| [Other Applicable Regulation] | [Authority] | [Sections] | [Date] |

### 3.2 BNM RMiT Clause 17.1 — Specific Requirements

*Extract and paraphrase the specific requirements under RMiT Clause 17.1 that this document is intended to address. This provides traceability for auditors.*

BNM RMiT Clause 17.1 establishes that a financial institution utilizing cloud computing must ensure that its cloud strategy is **aligned with and integrated into its overall technology strategy**. The key requirements under this clause, and how this document addresses them, are summarized below:

| RMiT Clause 17.1 Requirement | Addressed In Section |
|---|---|
| Cloud strategy must form part of or be integrated into the institution's technology strategy | Section 6 — Cloud Strategy Alignment Framework |
| Board and Senior Management must oversee the cloud strategy | Section 4 — Governance Structure |
| Institution must define approved cloud deployment and service models | Section 5 — Cloud Service Model and Deployment Type |
| Data residency and data sovereignty requirements must be established | Section 7 — Data Residency Requirements |
| Shared responsibilities with CSPs must be clearly defined | Section 8 — Shared Responsibility Matrix |
| Risk management considerations must be integrated into cloud adoption | Section 10 — Risk Alignment and Control Posture |
| Exit strategy must be defined for cloud-hosted services | Appendix D — Cloud Exit Strategy Summary |
| BNM prior approval must be obtained where required | Section 4.3 — Regulatory Approval Status |

### 3.3 Interaction with Other Internal Policies

*Identify internal policies, standards, and frameworks that interact with this document.*

This Strategy Alignment Documentation should be read in conjunction with the following [Organization Name] internal documents:

| Internal Document | Document ID | Relationship |
|---|---|---|
| Technology Strategy [Year]–[Year] | [Doc ID] | Parent strategy — this document demonstrates alignment |
| Information Security Policy | [Doc ID] | Governs security controls in cloud environments |
| Cloud Security Standard | [Doc ID] | Technical security requirements for cloud use |
| Data Classification and Handling Policy | [Doc ID] | Governs data residency decisions |
| Outsourcing and Third-Party Risk Policy | [Doc ID] | Governs CSP procurement and ongoing oversight |
| Business Continuity and Disaster Recovery Policy | [Doc ID] | Governs RTO/RPO requirements in cloud environments |
| Change Management Policy | [Doc ID] | Governs changes to cloud architecture and configurations |
| IT Risk Management Framework | [Doc ID] | Enterprise risk context for cloud risk |
| Cloud Centre of Excellence Charter | [Doc ID] | CCoE mandate and operating model |

---

## 4. Governance Structure

### 4.1 Overview of Cloud Governance

*Describe the governance framework that oversees the cloud and technology strategy. Explain how governance bodies interact and what decisions each body is responsible for.*

[Organization Name] has established a multi-tiered governance structure to ensure that cloud adoption is strategically directed, operationally managed, and risk-controlled in alignment with the Technology Strategy and regulatory requirements. The governance structure operates at three levels:

1. **Strategic Level** — Board and senior management oversight of cloud strategy and material risks.
2. **Tactical Level** — Technology and risk committees that review, approve, and monitor cloud-related decisions.
3. **Operational Level** — The Cloud Centre of Excellence (CCoE) and day-to-day operational teams responsible for execution and compliance.

### 4.2 Governance Body Hierarchy

```
Board of Directors
        |
Board Risk Committee / Board IT Committee
        |
Management Risk Committee / Technology Steering Committee
        |
Cloud Centre of Excellence (CCoE)
        |
Cloud Architecture Team | Cloud Security Team | Cloud Operations Team
```

### 4.3 Governance Bodies — Terms of Reference Summary

*For each governance body, describe its role, meeting cadence, quorum requirements, and specific cloud-related responsibilities.*

#### 4.3.1 Board of Directors

| Attribute | Detail |
|---|---|
| **Role in Cloud Governance** | Ultimate oversight of technology and cloud strategy; approves material cloud outsourcing arrangements |
| **Meeting Frequency** | [Quarterly / As required] |
| **Cloud-Specific Responsibilities** | Approves the Technology Strategy (including cloud strategy); receives periodic reporting on cloud risk posture; approves submission to BNM for prior approval |
| **Relevant RMiT Reference** | RMiT Clause 10 (Board and Senior Management) |
| **Current Board Champion** | [Name / Title] |

#### 4.3.2 Board Risk Committee / Board IT Committee

| Attribute | Detail |
|---|---|
| **Role in Cloud Governance** | Oversight of technology and cloud risk; reviews escalated cloud risk matters |
| **Meeting Frequency** | [Quarterly] |
| **Cloud-Specific Responsibilities** | Reviews cloud risk register; approves material changes to cloud risk appetite; oversees cloud incident reporting |
| **Relevant RMiT Reference** | RMiT Clause 10, Clause 12 |
| **Committee Chair** | [Name / Title] |

#### 4.3.3 Technology Steering Committee (TSC)

| Attribute | Detail |
|---|---|
| **Role in Cloud Governance** | Senior management-level direction and oversight of technology investments, including cloud |
| **Meeting Frequency** | [Monthly] |
| **Cloud-Specific Responsibilities** | Approves cloud investment decisions above [threshold]; reviews cloud KPIs and KRIs; approves new CSP engagements |
| **Relevant RMiT Reference** | RMiT Clause 10, Clause 17 |
| **Committee Chair** | [Name / CTO / CIO Title] |

#### 4.3.4 Cloud Centre of Excellence (CCoE)

| Attribute | Detail |
|---|---|
| **Role in Cloud Governance** | Operational governance body for cloud strategy execution |
| **Meeting Frequency** | [Bi-weekly / Monthly] |
| **Cloud-Specific Responsibilities** | Defines cloud standards and guardrails; reviews and approves cloud architecture patterns; monitors compliance with cloud policies; maintains cloud register; drives cloud maturity improvement |
| **Relevant RMiT Reference** | RMiT Clause 17 |
| **CCoE Lead** | [Cloud Architecture Lead Name / Title] |

#### 4.3.5 Regulatory Approval Status

*Document the status of all required BNM prior approvals and notifications in relation to cloud adoption.*

| Cloud Service / Category | BNM Prior Approval Required | Approval Status | Approval Reference | Date |
|---|---|---|---|---|
| [Critical System Name] — IaaS | Yes | [Approved / Pending / Not Required] | [BNM Reference Number] | [Date] |
| [System Name] — SaaS | [Yes / No] | [Status] | [Reference] | [Date] |
| [System Name] — PaaS | [Yes / No] | [Status] | [Reference] | [Date] |

### 4.4 Decision Rights Framework

*Define what decisions can be made at each level of governance without escalation, and what triggers escalation.*

| Decision Type | CCoE | TSC | Board / BRC | BNM Prior Approval |
|---|---|---|---|---|
| New non-critical workload migration to cloud | Approve | Inform | Inform | Not Required |
| New critical workload migration to cloud | Recommend | Approve | Inform | May be Required |
| Material outsourcing to cloud CSP | Recommend | Approve | Approve | Required |
| New CSP engagement (non-material) | Approve | Inform | Inform | Not Required |
| New CSP engagement (material outsourcing) | Recommend | Recommend | Approve | Required |
| Change to data residency requirements | Recommend | Approve | Inform | May be Required |
| Cloud exit / CSP termination (critical system) | Recommend | Recommend | Approve | Notify BNM |
| Change to cloud governance framework | Recommend | Approve | Endorse | Not Required |
| Cloud security incident (material) | Manage | Informed | Escalate as per policy | Notify BNM per RMiT |

### 4.5 Cloud Register

*Describe the Cloud Register maintained by [Organization Name] and its relationship to governance.*

[Organization Name] maintains a **Cloud Register** as required by BNM RMiT, administered by the CCoE. The Cloud Register is a live inventory of all cloud services, CSPs, and cloud-hosted workloads. It is reviewed monthly by the CCoE and quarterly by the TSC.

| Cloud Register Field | Description |
|---|---|
| Cloud Service Name | Name of the cloud service or application |
| Cloud Service Provider | Name and entity of the CSP |
| Service Model | IaaS / PaaS / SaaS |
| Deployment Model | Public / Private / Hybrid / Community |
| Data Classification | Public / Internal / Confidential / Highly Confidential |
| Data Residency Location | Country / Region |
| Criticality Classification | Critical / Non-Critical |
| BNM Approval Status | Approved / Pending / Not Required |
| Risk Rating | High / Medium / Low |
| Contract Expiry Date | [Date] |
| Cloud Architecture Lead | [Name] |
| Last Risk Assessment Date | [Date] |

*Refer to [Appendix A — Cloud Register Extract] for the current Cloud Register as at [Date].*

---

## 5. Cloud Service Model and Deployment Type

### 5.1 Cloud Service Models

*Define the cloud service models adopted by [Organization Name], providing clear guidance on acceptable use cases, limitations, and applicable controls for each model.*

[Organization Name] has formally approved the use of the following cloud service models, subject to the controls and conditions described in this section and the associated Cloud Security Standard [Document ID].

#### 5.1.1 Infrastructure as a Service (IaaS)

| Attribute | Detail |
|---|---|
| **Definition** | CSP provides virtualized computing resources (compute, storage, networking) over the internet. [Organization Name] manages the OS, middleware, runtime, data, and applications. |
| **Approved Use Cases** | Development and test environments; disaster recovery infrastructure; scalable compute for approved workloads |
| **Prohibited Use Cases** | Uncontrolled storage of Highly Confidential data without explicit approval; production workloads not registered in the Cloud Register |
| **Key Shared Responsibility** | [Organization Name] retains responsibility for OS patching, application security, identity and access management, and data encryption |
| **Example Platforms** | [CSP Name] Compute Engine / EC2 / Azure VM |
| **Applicable Standards** | Cloud Security Standard [Doc ID], Section [X] |

#### 5.1.2 Platform as a Service (PaaS)

| Attribute | Detail |
|---|---|
| **Definition** | CSP provides a platform including OS, runtime, middleware, and infrastructure. [Organization Name] manages applications and data. |
| **Approved Use Cases** | Application development pipelines; API management platforms; containerized workloads; managed database services |
| **Prohibited Use Cases** | [Specify prohibited uses] |
| **Key Shared Responsibility** | [Organization Name] retains responsibility for application code security, data management, and access controls |
| **Example Platforms** | [CSP Name] App Engine / Azure App Service / AWS Elastic Beanstalk |
| **Applicable Standards** | Cloud Security Standard [Doc ID], Section [X] |

#### 5.1.3 Software as a Service (SaaS)

| Attribute | Detail |
|---|---|
| **Definition** | CSP provides the full application stack, including infrastructure, platform, and software. [Organization Name] manages configuration, user access, and data. |
| **Approved Use Cases** | Productivity tools; HR management systems; CRM platforms; approved financial applications |
| **Prohibited Use Cases** | Storage or processing of Highly Confidential customer data without data residency controls and CSP attestation |
| **Key Shared Responsibility** | [Organization Name] retains responsibility for identity and access management, data classification, and contractual security obligations |
| **Example Platforms** | [CSP Name / Application Name] |
| **Applicable Standards** | Cloud Security Standard [Doc ID], Section [X] |

### 5.2 Cloud Deployment Types

*Define approved and non-approved cloud deployment models and the conditions under which each may be used.*

#### 5.2.1 Approved Deployment Models

| Deployment Model | Definition | Approved for Use | Applicable Conditions |
|---|---|---|---|
| **Public Cloud** | Infrastructure owned by CSP and shared with other tenants. Services delivered over the public internet. | Yes, with conditions | Data classification controls required; not for Highly Confidential data without encryption and residency controls |
| **Private Cloud** | Infrastructure dedicated exclusively to [Organization Name], either on-premises or hosted by a CSP. | Yes | Preferred for critical and Highly Confidential workloads |
| **Hybrid Cloud** | Combination of public and private cloud environments integrated to allow data and application portability. | Yes — Primary Model | Integration points must be secured and governed; data flows documented |
| **Community Cloud** | Infrastructure shared among multiple organizations with common regulatory or operational requirements. | Case-by-case approval | Requires TSC approval; relevant for industry-shared utilities |
| **Multi-Cloud** | Use of cloud services from more than one CSP. | Yes, with governance | Must be registered in the Cloud Register; interoperability and data flow controls required |

#### 5.2.2 Cloud Architecture Patterns

*Describe the approved reference architectures and patterns for cloud deployment.*

[Organization Name] has adopted the following reference architecture patterns, documented in the **Cloud Architecture Playbook [Document ID]**:

1. **Lift-and-Shift (Rehost):** Migration of existing workloads to IaaS without re-architecting. Applicable for legacy systems with limited cloud optimization opportunity.
2. **Re-platform:** Moderate optimization of workloads to take advantage of cloud-native capabilities (e.g., moving to managed database services).
3. **Re-architect (Cloud-Native):** Full redesign of applications to leverage cloud-native patterns including microservices, containers, and serverless.
4. **SaaS Replacement:** Replacing on-premises applications with approved SaaS solutions.

| Pattern | Applicable Workload Types | Required Approval Level | Notes |
|---|---|---|---|
| Lift-and-Shift | Non-critical legacy systems | CCoE | Subject to security baseline assessment |
| Re-platform | Approved business applications | CCoE | Architecture review required |
| Re-architect | New development, critical systems | TSC | Full cloud architecture review; security sign-off |
| SaaS Replacement | Back-office functions | CCoE (non-critical) / TSC (critical) | Third-party risk assessment required |

### 5.3 Approved Cloud Service Providers

*List all approved CSPs and the conditions of their engagement.*

| CSP Name | Entity Name | Headquarters | Malaysia Data Centre | Services Approved | Engagement Classification | BNM Notification |
|---|---|---|---|---|---|---|
| [CSP 1 Name] | [Legal Entity] | [Country] | [Yes / No / Location] | IaaS, PaaS | Primary Strategic CSP | [Notified / Approved] |
| [CSP 2 Name] | [Legal Entity] | [Country] | [Yes / No / Location] | SaaS | Secondary | [Notified / Approved] |
| [CSP 3 Name] | [Legal Entity] | [Country] | [Yes / No / Location] | SaaS | Specific Application | [Notified / Approved] |

---

## 6. Cloud Strategy Alignment Framework

### 6.1 Technology Strategy Overview

*Summarize [Organization Name]'s Technology Strategy and its key pillars. Demonstrate that the cloud strategy is an explicit component of or formally aligned with this strategy.*

[Organization Name]'s **Technology Strategy [Year]–[Year]** (Document ID: [Doc ID]) was approved by the Board of Directors on [Date] and sets the strategic direction for technology investment and capability development over the [X]-year planning horizon. The strategy is built around [number] pillars:

| Pillar | Description |
|---|---|
| [Pillar 1, e.g., Digital Resilience] | [Brief description of strategic intent] |
| [Pillar 2, e.g., Customer-Centric Technology] | [Brief description] |
| [Pillar 3, e.g., Data-Driven Enterprise] | [Brief description] |
| [Pillar 4, e.g., Secure and Compliant Operations] | [Brief description] |
| [Pillar 5, e.g., Cloud-Enabled Agility] | [Brief description — this is where cloud strategy aligns] |

### 6.2 Cloud Strategy as a Technology Strategy Component

*Provide explicit traceability showing how the cloud strategy maps to specific technology strategy objectives.*

The Cloud Strategy is formally recognized as a **strategic enabler** within the Technology Strategy [Year]–[Year]. The following table provides traceability between Technology Strategy objectives and Cloud Strategy initiatives:

| Technology Strategy Objective | Cloud Strategy Initiative | Expected Outcome | Target Date |
|---|---|---|---|
| [Obj 1: e.g., Achieve 99.99% uptime for critical systems] | Migrate critical systems to multi-region cloud architecture | Improved resilience and RTO/RPO | [Quarter/Year] |
| [Obj 2: e.g., Reduce time-to-market for digital products] | Adopt cloud-native development pipeline (PaaS) | 30% reduction in deployment lead time | [Quarter/Year] |
| [Obj 3: e.g., Enable real-time data analytics] | Migrate data platforms to cloud-based analytics services | Real-time business intelligence | [Quarter/Year] |
| [Obj 4: e.g., Strengthen cybersecurity posture] | Implement cloud-native security operations centre | Enhanced threat detection | [Quarter/Year] |
| [Obj 5: e.g., Optimize technology cost structure] | Consolidate infrastructure to cloud; decommission legacy systems | [X]% reduction in infrastructure OPEX | [Quarter/Year] |

### 6.3 Cloud Strategy Objectives

*Define the specific objectives of the Cloud Strategy as approved by the TSC/Board.*

The [Organization Name] Cloud Strategy is designed to achieve the following objectives:

1. **Operational Resilience:** Leverage cloud-native capabilities to achieve availability and disaster recovery targets consistent with BNM's operational resilience expectations.
2. **Regulatory Compliance:** Ensure all cloud adoption activities are compliant with BNM RMiT, the Outsourcing Policy, PDPA, and NACSA guidelines.
3. **Security by Design:** Embed security controls into all cloud architectures from inception, aligned with the [Organization Name] Cloud Security Standard.
4. **Cost Optimisation:** Transition to a consumption-based model to reduce total cost of ownership (TCO) for technology infrastructure.
5. **Innovation Enablement:** Provide access to advanced cloud services (AI/ML, big data, API ecosystems) to support business innovation.
6. **Vendor Risk Management:** Maintain an appropriately diversified cloud vendor portfolio to avoid strategic dependency and concentration risk.

### 6.4 Strategy Alignment Assessment

*Provide a structured assessment of alignment between cloud strategy and technology strategy dimensions.*

#### 6.4.1 Alignment Scorecard

| Alignment Dimension | Technology Strategy Position | Cloud Strategy Position | Alignment Status | Gap / Action |
|---|---|---|---|---|
| Risk Appetite | [Description] | [Description] | [Aligned / Partial / Gap] | [Action if gap] |
| Investment Planning | [Description] | [Description] | [Aligned / Partial / Gap] | [Action if gap] |
| Data Management | [Description] | [Description] | [Aligned / Partial / Gap] | [Action if gap] |
| Security Posture | [Description] | [Description] | [Aligned / Partial / Gap] | [Action if gap] |
| Talent and Capability | [Description] | [Description] | [Aligned / Partial / Gap] | [Action if gap] |
| Regulatory Compliance | [Description] | [Description] | [Aligned / Partial / Gap] | [Action if gap] |
| Vendor Strategy | [Description] | [Description] | [Aligned / Partial / Gap] | [Action if gap] |
| Business Continuity | [Description] | [Description] | [Aligned / Partial / Gap] | [Action if gap] |

#### 6.4.2 Strategic Alignment Narrative

*Provide a narrative explanation (minimum one paragraph per dimension) of how the cloud strategy supports each pillar of the Technology Strategy. Authors should tailor this to the specific strategies of the organization.*

**Pillar [1]: [Technology Strategy Pillar Name]**

[Describe how the cloud strategy directly supports this pillar. Include specific cloud initiatives, capabilities, or investments that contribute to the achievement of this pillar's objectives. Reference relevant KPIs where applicable.]

**Pillar [2]: [Technology Strategy Pillar Name]**

[Describe alignment. Include examples of cloud services or capabilities deployed in support of this pillar.]

**Pillar [3]: [Technology Strategy Pillar Name]**

[Describe alignment.]

**Pillar [4]: [Technology Strategy Pillar Name]**

[Describe alignment.]

**Pillar [5]: [Technology Strategy Pillar Name — Cloud/Agility]**

[Describe alignment — this section should most directly reference cloud adoption initiatives.]

### 6.5 Investment Alignment

*Show that cloud investments are budgeted, approved, and tracked as part of the Technology Strategy investment plan.*

| Investment Category | Technology Strategy Budget Allocation | Cloud Strategy Component | FY[Year] Approved Budget (MYR) | Actual Spend YTD (MYR) | Variance |
|---|---|---|---|---|---|
| Infrastructure Modernisation | [%] | Cloud IaaS migration | [Amount] | [Amount] | [%] |
| Application Development | [%] | Cloud-native development platforms | [Amount] | [Amount] | [%] |
| Security | [%] | Cloud security tooling | [Amount] | [Amount] | [%] |
| Data and Analytics | [%] | Cloud data platform | [Amount] | [Amount] | [%] |
| Training and Capability | [%] | Cloud skills development | [Amount] | [Amount] | [%] |
| **Total** | **100%** | | **[Total]** | **[Total]** | |

---

## 7. Data Residency Requirements

### 7.1 Overview

*Explain the regulatory and organizational basis for data residency requirements, and how these requirements have been operationalized in the cloud strategy.*

Data residency refers to the physical or geographic location in which data is stored, processed, and transmitted. For [Organization Name], data residency requirements are driven by:

- **BNM RMiT:** Requirements relating to the location of data processed and stored in cloud environments, particularly for customer and transactional data.
- **Personal Data Protection Act 2010 (PDPA):** Restrictions on the transfer of personal data outside Malaysia.
- **BNM Outsourcing Policy:** Requirements for data processed under outsourcing arrangements, including restrictions on offshore processing of certain data types.
- **[Organization Name] Data Classification Policy [Doc ID]:** Internal classification of data assets and associated handling requirements.

[Organization Name] affirms that its cloud strategy incorporates data residency as a non-negotiable design parameter. No cloud architecture pattern or CSP engagement may proceed without explicit confirmation of data residency compliance.

### 7.2 Data Classification Framework

*Reference the data classification tiers used by the organization and map them to cloud data residency requirements.*

[Organization Name] classifies its data assets into the following tiers, as defined in the **Data Classification and Handling Policy [Doc ID]**:

| Classification Tier | Description | Cloud Storage Permitted | Permitted Residency Locations | Encryption Required | BNM Approval Required |
|---|---|---|---|---|---|
| **Public** | Information intended for public disclosure | Yes | Any | At rest and in transit (recommended) | No |
| **Internal** | Non-public business information with limited sensitivity | Yes | Preferred: Malaysia; Permitted: [Approved Countries] | At rest and in transit | No |
| **Confidential** | Sensitive business, customer, or operational data | Yes, with controls | Malaysia; [Approved Countries with controls] | Mandatory at rest and in transit | Case-by-case |
| **Highly Confidential** | Regulated customer data, PII, financial records, secrets | Yes, with strict controls | Malaysia only (default) | Mandatory; HSM-managed keys preferred | Required for offshore |

### 7.3 Data Residency Requirements by Category

*Define specific data residency requirements for key categories of data processed by [Organization Name].*

#### 7.3.1 Customer Personal Data (PDPA)

| Requirement | Detail |
|---|---|
| **Regulatory Basis** | PDPA Section 129 (Transfer of personal data to places outside Malaysia) |
| **Default Residency** | Malaysia |
| **Permitted Offshore Transfer** | Only to countries listed in the PDPA (Transfer of Personal Data to Places outside Malaysia) Order [Year], or with explicit data subject consent and adequate safeguards |
| **Contractual Requirement** | CSP agreements must include PDPA-compliant data processing clauses |
| **Monitoring** | Quarterly audit of data flows by [Data Protection Officer] |

#### 7.3.2 Financial Transaction Data

| Requirement | Detail |
|---|---|
| **Regulatory Basis** | BNM RMiT Clause 17.1; BNM Outsourcing Policy |
| **Default Residency** | Malaysia |
| **Permitted Offshore Transfer** | Requires BNM prior approval for primary processing locations outside Malaysia |
| **Contractual Requirement** | CSP must provide binding commitments on data location; right-to-audit must be included |
| **Monitoring** | Continuous monitoring via cloud configuration management; quarterly review |

#### 7.3.3 Audit Logs and Security Event Data

| Requirement | Detail |
|---|---|
| **Regulatory Basis** | BNM RMiT Clause 14 (Audit Logging) |
| **Default Residency** | Malaysia |
| **Retention Period** | Minimum [X] years as per BNM RMiT requirements |
| **Permitted Offshore Transfer** | Secondary backup copies may be stored offshore subject to encryption and approval |
| **Monitoring** | Monthly review by Information Security team |

#### 7.3.4 Business Continuity and Backup Data

| Requirement | Detail |
|---|---|
| **Regulatory Basis** | BNM RMiT Clause 15 (Business Continuity Management) |
| **Default Residency** | Malaysia (primary); [Secondary location] (secondary) |
| **Permitted Offshore Transfer** | Secondary backup with encryption; documented in BCP |
| **RTO/RPO Requirements** | As defined in the BCP [Document ID] |
| **Monitoring** | Quarterly BCP testing; annual DR exercise |

### 7.4 Data Flow Inventory

*Maintain a register of approved data flows between [Organization Name] and cloud environments.*

| Data Flow ID | Data Category | Source System | Destination (CSP / Region) | Classification | Residency Compliant | Approval Reference | Last Reviewed |
|---|---|---|---|---|---|---|---|
| DF-001 | Customer PII | [System Name] | [CSP] / Malaysia | Highly Confidential | Yes | [Reference] | [Date] |
| DF-002 | Transaction Records | [System Name] | [CSP] / Malaysia | Highly Confidential | Yes | [Reference] | [Date] |
| DF-003 | Internal Analytics | [System Name] | [CSP] / [Region] | Confidential | Yes | [Reference] | [Date] |
| DF-004 | [Data Category] | [System Name] | [CSP] / [Region] | [Classification] | [Yes/No] | [Reference] | [Date] |

*Full Data Flow Inventory maintained in: [System / Location]*

### 7.5 Cross-Border Data Transfer Controls

*Describe the technical and contractual controls that govern cross-border data transfers where permitted.*

Where cross-border data transfers are approved, [Organization Name] implements the following controls:

1. **Contractual Safeguards:** Data Processing Agreements (DPAs) with CSPs must include Standard Contractual Clauses (SCCs) or equivalent mechanisms compliant with PDPA requirements.
2. **Encryption:** All data transferred across borders must be encrypted in transit using minimum TLS 1.2 and at rest using AES-256 or equivalent.
3. **Key Management:** Encryption keys for Highly Confidential data must be managed by [Organization Name] or a trusted key management service within Malaysia.
4. **Access Controls:** Offshore access to Malaysian customer data is prohibited unless explicitly approved and subject to privileged access management (PAM) controls.
5. **Audit Logging:** All cross-border data transfers are logged and subject to periodic audit.

---

## 8. Shared Responsibility Matrix

### 8.1 Overview of the Shared Responsibility Model

*Explain the shared responsibility concept in the context of cloud computing and how it applies to [Organization Name]'s cloud deployments.*

In cloud computing environments, responsibilities for security, compliance, availability, and data management are shared between the cloud service provider (CSP) and the cloud customer ([Organization Name]). The delineation of responsibilities varies depending on the cloud service model (IaaS, PaaS, SaaS).

[Organization Name] has adopted a formal **Shared Responsibility Framework** to ensure that:

- All responsibilities are explicitly assigned and documented.
- No responsibility gap exists between [Organization Name] and its CSPs.
- Shared responsibilities are operationalized through contractual agreements, technical controls, and governance processes.
- The framework is reviewed annually and upon any material change to cloud service arrangements.

**Key Principle:** The shared responsibility model does **not** transfer accountability to the CSP. [Organization Name] retains **ultimate accountability** to BNM for all regulatory obligations, regardless of which party performs the operational responsibility.

### 8.2 Shared Responsibility Matrix — By Service Model

*Provide a detailed responsibility allocation matrix across key control domains for each cloud service model.*

**Legend:**
- **O** = [Organization Name] Responsibility (Full)
- **C** = CSP Responsibility (Full)
- **S** = Shared Responsibility
- **N/A** = Not Applicable

#### 8.2.1 IaaS Shared Responsibility

| Control Domain | Sub-Domain | [Org Name] | CSP | Notes |
|---|---|---|---|---|
| **Physical Security** | Data centre physical security | N/A | C | CSP controls physical access |
| **Physical Security** | Hardware lifecycle management | N/A | C | |
| **Network** | Network perimeter (CSP infrastructure) | N/A | C | |
| **Network** | Virtual network configuration | O | N/A | VPC/VNET configuration is customer responsibility |
| **Network** | Network segmentation | O | N/A | |
| **Network** | DDoS protection (platform-level) | N/A | C | |
| **Network** | DDoS protection (application-level) | O | N/A | |
| **Compute** | Hypervisor security | N/A | C | |
| **Compute** | Operating system patching | O | N/A | Customer responsibility in IaaS |
| **Compute** | OS hardening | O | N/A | |
| **Storage** | Storage infrastructure | N/A | C | |
| **Storage** | Data encryption at rest | O | S | Customer manages encryption keys; CSP provides capability |
| **Storage** | Data encryption in transit | O | S | |
| **Identity & Access** | IAM platform | S | S | CSP provides IAM tools; customer configures policies |
| **Identity & Access** | Privileged access management | O | N/A | Customer responsibility |
| **Identity & Access** | MFA enforcement | O | N/A | |
| **Application** | Application security | O | N/A | |
| **Application** | Vulnerability management | O | N/A | |
| **Data** | Data classification | O | N/A | |
| **Data** | Data backup and recovery | O | S | Customer configures; CSP provides backup services |
| **Data** | Data residency enforcement | O | S | Customer configures; CSP provides controls |
| **Monitoring** | Infrastructure monitoring | S | S | CSP provides tooling; customer configures and acts |
| **Monitoring** | Security event monitoring | O | S | |
| **Compliance** | Regulatory compliance | O | S | Customer retains regulatory accountability |

#### 8.2.2 PaaS Shared Responsibility

| Control Domain | Sub-Domain | [Org Name] | CSP | Notes |
|---|---|---|---|---|
| **Physical Security** | Data centre physical security | N/A | C | |
| **Network** | Underlying network infrastructure | N/A | C | |
| **Network** | Application network controls | O | N/A | |
| **Compute** | Hypervisor and OS | N/A | C | CSP manages in PaaS |
| **Compute** | Runtime and middleware | N/A | C | |
| **Application** | Application code security | O | N/A | |
| **Application** | Application configuration | O | N/A | |
| **Application** | Dependency management (libraries) | O | N/A | |
| **Data** | Data management and classification | O | N/A | |
| **Data** | Data encryption (at rest) | O | S | |
| **Identity & Access** | IAM configuration | O | S | |
| **Monitoring** | Application performance monitoring | O | S | |
| **Compliance** | Regulatory compliance | O | S | |

#### 8.2.3 SaaS Shared Responsibility

| Control Domain | Sub-Domain | [Org Name] | CSP | Notes |
|---|---|---|---|---|
| **Physical Security** | Data centre physical security | N/A | C | |
| **Infrastructure** | All infrastructure layers | N/A | C | |
| **Application** | Application functionality and patching | N/A | C | |
| **Application** | Application configuration | O | N/A | Customer configures within CSP-provided options |
| **Data** | Data input and classification | O | N/A | |
| **Data** | Data export and portability | O | S | Customer must ensure data portability rights are contractual |
| **Identity & Access** | User access management | O | S | |
| **Identity & Access** | SSO and federation | O | S | |
| **Monitoring** | Audit log availability | S | C | CSP must provide access to logs |
| **Monitoring** | Log analysis and SIEM integration | O | N/A | |
| **Compliance** | Regulatory compliance | O | S | |
| **Exit/Portability** | Data retrieval on termination | O | S | Contractual right required |

### 8.3 Shared Responsibility — CSP-Specific Matrices

*For each primary CSP, maintain a CSP-specific shared responsibility matrix that aligns with the CSP's published shared responsibility documentation.*

| CSP Name | Published Shared Responsibility Model Reference | [Organization Name] Alignment Document | Last Reviewed |
|---|---|---|---|
| [CSP 1 Name] | [URL / Document Reference] | [Appendix Reference] | [Date] |
| [CSP 2 Name] | [URL / Document Reference] | [Appendix Reference] | [Date] |

*Refer to [Appendix B — CSP-Specific Shared Responsibility Matrices] for detailed mappings.*

### 8.4 Residual Responsibilities and Control Gaps

*Identify any areas where shared responsibilities have resulted in potential control gaps, and the actions taken to remediate.*

| Control Gap ID | Domain | Description of Gap | Risk Rating | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| CG-001 | [Domain] | [Description] | [H/M/L] | [Action] | [Owner] | [Date] | [Open/Closed] |
| CG-002 | [Domain] | [Description] | [H/M/L] | [Action] | [Owner] | [Date] | [Open/Closed] |

### 8.5 Contractual Mechanisms for Shared Responsibility

*Describe the contractual instruments through which shared responsibilities are formalized with CSPs.*

[Organization Name] ensures that shared responsibilities are documented and enforced through the following contractual mechanisms:

1. **Master Service Agreement (MSA):** The primary contract governing the relationship with the CSP, including service standards, liability, and termination rights.
2. **Data Processing Agreement (DPA):** Specifies obligations relating to personal data processing, consistent with PDPA requirements.
3. **Service Level Agreement (SLA):** Defines performance and availability commitments from the CSP and remedies for non-performance.
4. **Information Security Schedule:** Documents specific security obligations of the CSP, including audit rights, incident notification, and security certifications.
5. **Right-to-Audit Clause:** Ensures [Organization Name] and BNM retain the right to audit the CSP's operations and controls.
6. **Exit and Portability Schedule:** Defines data portability, migration support, and transition assistance obligations of the CSP upon termination.

---

## 9. Technology Strategy Integration

### 9.1 Enterprise Architecture Alignment

*Describe how the cloud strategy integrates with the organization's enterprise architecture framework and principles.*

[Organization Name]'s Enterprise Architecture (EA) Framework (Document ID: [Doc ID]) provides the architecture principles and standards that govern all technology decisions, including cloud adoption. The cloud strategy has been reviewed and approved by the **Enterprise Architecture Review Board (EARB)** and is fully consistent with the following EA principles:

| EA Principle | Description | Cloud Strategy Alignment |
|---|---|---|
| [Principle 1, e.g., Security by Design] | [Description] | [How cloud strategy embeds this] |
| [Principle 2, e.g., Reuse Before Buy Before Build] | [Description] | [How cloud strategy embeds this] |
| [Principle 3, e.g., Data as an Asset] | [Description] | [How cloud strategy embeds this] |
| [Principle 4, e.g., Interoperability] | [Description] | [How cloud strategy embeds this] |
| [Principle 5, e.g., Avoid Vendor Lock-In] | [Description] | [How cloud strategy embeds this] |

### 9.2 Application Portfolio Alignment

*Describe how the application portfolio rationalization process incorporates cloud strategy considerations.*

[Organization Name] maintains an **Application Portfolio** that classifies all business applications by their strategic value, technical health, and cloud readiness. The cloud strategy provides the framework for application disposition decisions using the **"6Rs" model**:

| Disposition (R) | Description | Portfolio Count | % of Total | Examples |
|---|---|---|---|---|
| **Retire** | Decommission applications no longer required | [Number] | [%] | [Application Names] |
| **Retain** | Keep on-premises (legitimate technical or regulatory reason) | [Number] | [%] | [Application Names] |
| **Rehost** | Lift-and-shift to IaaS (no code changes) | [Number] | [%] | [Application Names] |
| **Replatform** | Optimize for cloud (minor code changes) | [Number] | [%] | [Application Names] |
| **Refactor** | Re-architect to cloud-native | [Number] | [%] | [Application Names] |
| **Replace** | Replace with SaaS alternative | [Number] | [%] | [Application Names] |

### 9.3 Digital and Business Transformation Alignment

*Describe how cloud capabilities directly enable business transformation initiatives in the Technology Strategy.*

| Business Initiative | Business Unit | Cloud Capability Enabling It | CSP / Service | Status |
|---|---|---|---|---|
| [Initiative 1, e.g., Mobile Banking Platform] | [BU] | [e.g., Containerized microservices (PaaS)] | [CSP/Service] | [In Progress] |
| [Initiative 2, e.g., Real-time fraud detection] | [BU] | [e.g., ML platform / AI services] | [CSP/Service] | [Planned] |
| [Initiative 3] | [BU] | [Cloud capability] | [CSP/Service] | [Status] |

### 9.4 Technology Capability Alignment

*Map cloud-enabled capabilities to technology strategy capability requirements.*

| Technology Capability | Strategy Priority | Cloud-Enabled Solution | Maturity Level | Target Maturity |
|---|---|---|---|---|
| API Management | High | [Cloud API Gateway Service] | [Level] | [Target] |
| Data Analytics | High | [Cloud Data Warehouse / BI Service] | [Level] | [Target] |
| AI / Machine Learning | High | [Cloud ML Platform] | [Level] | [Target] |
| DevSecOps | High | [Cloud CI/CD, SAST/DAST tools] | [Level] | [Target] |
| Observability & Monitoring | Medium | [Cloud SIEM / Monitoring Service] | [Level] | [Target] |
| Identity Management | High | [Cloud IAM / PAM Service] | [Level] | [Target] |

---

## 10. Risk Alignment and Control Posture

### 10.1 Cloud Risk Appetite

*Define the organization's risk appetite specific to cloud adoption, in alignment with the enterprise risk appetite.*

[Organization Name]'s **Enterprise Risk Appetite Statement [Document ID]** has been adapted to address cloud-specific risks. The Cloud Risk Appetite is approved by the Board Risk Committee and reviewed annually.

| Risk Category | Risk Appetite Level | Description |
|---|---|---|
| Operational Risk — Cloud | **Low** | [Organization Name] has low appetite for operational disruptions arising from cloud failures. CSPs must demonstrate SLA commitments consistent with the organization's resilience requirements. |
| Data Security Risk | **Very Low** | [Organization Name] has very low appetite for unauthorized disclosure, loss, or compromise of customer data hosted in cloud environments. |
| Concentration Risk | **Low** | [Organization Name] seeks to avoid strategic dependency on a single CSP for critical operations. Multi-cloud or exit-ready architectures are preferred. |
| Regulatory Non-Compliance Risk | **Zero Tolerance** | [Organization Name] has zero tolerance for regulatory violations arising from cloud adoption, including data residency breaches and failure to obtain required BNM approvals. |
| Third-Party / CSP Risk | **Low** | [Organization Name] maintains ongoing due diligence on CSP financial health, security posture, and service continuity. |

### 10.2 Cloud Risk Register Summary

*Summarize the key risks identified in the Cloud Risk Register and their treatment status.*

| Risk ID | Risk Description | Risk Category | Inherent Risk | Control(s) | Residual Risk | Risk Owner | Review Date |
|---|---|---|---|---|---|---|---|
| CR-001 | CSP service outage impacting critical operations | Operational | High | Multi-region deployment; DR testing; SLA with credits | Medium | [Owner] | [Date] |
| CR-002 | Unauthorized access to cloud-hosted customer data | Data Security | High | IAM; MFA; encryption; PAM; access reviews | Low | [Owner] | [Date] |
| CR-003 | Data residency non-compliance | Regulatory | High | Data classification controls; CSP contractual commitments; monitoring | Low | [Owner] | [Date] |
| CR-004 | CSP concentration / lock-in | Concentration | Medium | Multi-cloud policy; exit strategy; portability testing | Low | [Owner] | [Date] |
| CR-005 | Shadow IT / unapproved cloud use | Operational / Compliance | Medium | Cloud Access Security Broker (CASB); policy; training | Low | [Owner] | [Date] |
| CR-006 | Insufficient CSP security controls | Third-Party | High | CSP due diligence; security schedule; right-to-audit | Medium | [Owner] | [Date] |
| CR-007 | Failure to obtain BNM prior approval | Regulatory | High | Pre-procurement review process; Legal/Compliance sign-off | Low | [Owner] | [Date] |

*Full Cloud Risk Register maintained at: [System / Location]*

### 10.3 Key Controls Framework

*Describe the control framework applied to cloud environments.*

[Organization Name] applies the following key controls across all cloud environments, consistent with the **Cloud Security Standard [Document ID]**:

| Control Domain | Key Controls | Implementation | Monitoring Frequency |
|---|---|---|---|
| Identity & Access Management | MFA, Role-Based Access Control (RBAC), Just-In-Time access, Privileged Access Management (PAM) | [Tool / Platform] | Continuous / Weekly review |
| Data Protection | Encryption at rest and in transit, Key Management Service, Data Loss Prevention (DLP) | [Tool / Platform] | Continuous |
| Network Security | Virtual private cloud segmentation, WAF, DDoS protection, network flow logs | [Tool / Platform] | Continuous |
| Vulnerability Management | Automated vulnerability scanning, patch management, container image scanning | [Tool / Platform] | Weekly scan; monthly patching |
| Security Monitoring | Cloud-native SIEM integration, security event logging, alerting | [Tool / Platform] | Continuous |
| Configuration Management | Cloud Security Posture Management (CSPM), Infrastructure as Code (IaC) policy enforcement | [Tool / Platform] | Continuous |
| Incident Response | Cloud IR playbooks, automated response capabilities, CSP incident escalation path | [IR Framework Doc] | Per incident; quarterly tabletop |
| Business Continuity | Multi-region deployment, automated failover, backup and restore testing | [BCP Document ID] | Quarterly testing |

### 10.4 Key Risk Indicators (KRIs)

*Define measurable KRIs for cloud risk monitoring.*

| KRI ID | KRI Description | Measurement | Green Threshold | Amber Threshold | Red Threshold | Review Frequency |
|---|---|---|---|---|---|---|
| KRI-CL-01 | CSP availability (uptime) against SLA | % uptime per month | ≥ 99.95% | 99.90–99.95% | < 99.90% | Monthly |
| KRI-CL-02 | Cloud security findings (critical/high) unresolved > 30 days | Count | 0 | 1–2 | ≥ 3 | Monthly |
| KRI-CL-03 | Cloud workloads without data classification | % of total | 0% | 1–5% | > 5% | Monthly |
| KRI-CL-04 | Users with excessive cloud privileges (IAM drift) | Count | 0 | 1–3 | > 3 | Weekly |
| KRI-CL-05 | CSP due diligence reviews overdue | Count | 0 | 1 | ≥ 2 | Quarterly |
| KRI-CL-06 | Cloud workloads without documented exit strategy | Count | 0 | 1–2 | ≥ 3 | Quarterly |
| KRI-CL-07 | Data residency policy exceptions unresolved | Count | 0 | 1 | ≥ 2 | Monthly |

### 10.5 Cloud Incident Management

*Describe how cloud-related incidents are managed and escalated.*

Cloud-related security incidents and service disruptions are managed in accordance with the **[Organization Name] Incident Management Framework [Document ID]**. Cloud-specific addenda include:

- **CSP Incident Notification:** CSPs are contractually obligated to notify [Organization Name] of security incidents affecting [Organization Name]'s data within [X] hours.
- **BNM Notification:** Material cloud security incidents or significant service disruptions must be reported to BNM in accordance with RMiT incident reporting requirements.
- **Severity Classification:** Cloud incidents are classified using the standard severity matrix with cloud-specific criteria (e.g., data exposure, service unavailability, regulatory breach).
- **Post-Incident Review:** All P1 and P2 cloud incidents require a formal post-incident review and root cause analysis within [X] business days.

---

## 11. Vendor and Third-Party Management Alignment

### 11.1 CSP Due Diligence and Onboarding

*Describe the due diligence process for onboarding new cloud service providers, aligned with the Technology Strategy and Outsourcing Policy.*

[Organization Name] applies a risk-based due diligence process to all prospective CSPs, consistent with the **Outsourcing and Third-Party Risk Policy [Document ID]**. The level of due diligence is commensurate with the criticality of the service and the classification of data involved.

#### 11.1.1 Due Diligence Requirements

| Due Diligence Dimension | Non-Critical SaaS | Non-Critical IaaS/PaaS | Critical / Material Outsourcing |
|---|---|---|---|
| Financial stability review | Abbreviated | Standard | Comprehensive |
| Security certification verification (ISO 27001, SOC 2) | Required | Required | Required + additional assessments |
| Data residency confirmation | Required | Required | Required + contractual commitment |
| Regulatory compliance review (BNM, PDPA) | Required | Required | Required + Legal sign-off |
| Business continuity and DR assessment | Standard | Standard | Comprehensive + RTO/RPO review |
| Right-to-audit provision | Required | Required | Required |
| Exit strategy assessment | Standard | Standard | Comprehensive |
| BNM prior approval process | Not required | May be required | Required |

#### 11.1.2 CSP Assessment and Performance Management

[Organization Name] conducts periodic performance reviews of all active CSPs:

| Review Type | Frequency | CSP Coverage | Conducted By |
|---|---|---|---|
| Service performance review | Monthly | All CSPs | Cloud Operations Team |
| Security posture review | Quarterly | All CSPs | Information Security / CCoE |
| Contractual compliance review | Annual | All CSPs | Vendor Management / Legal |
| On-site or virtual audit | Annual (critical CSPs) | Critical CSPs | Internal Audit / Third-Party Risk |
| Financial health assessment | Annual | Primary CSPs | Vendor Management / Finance |

### 11.2 Concentration Risk Management

*Describe how [Organization Name] manages concentration risk arising from reliance on cloud service providers.*

[Organization Name] has established **concentration risk limits** for cloud service providers as follows:

| Concentration Measure | Limit | Current Level | Breach Action |
|---|---|---|---|
| Maximum share of critical workloads with single CSP | [X]% | [Current %] | Diversification plan required |
| Maximum share of technology opex with single CSP | [X]% | [Current %] | Review by TSC |
| Minimum CSPs for critical systems | 2 (primary + DR) | [Current] | Escalate to TSC |

### 11.3 Exit Strategy Requirements

*Describe the exit strategy requirements for cloud service providers, consistent with BNM RMiT.*

[Organization Name] requires a documented, tested exit strategy for all CSP relationships involving critical systems or Highly Confidential data. Exit strategies address:

1. **Data Portability:** Contractual right to export all data in an industry-standard format within [X] days of termination notice.
2. **Application Portability:** Architecture decisions that avoid proprietary lock-in; preference for containerized and cloud-agnostic application designs.
3. **Transition Period:** Minimum [X]-month transition support obligation on the outgoing CSP.
4. **Successor Arrangements:** Pre-identification of alternative CSPs capable of assuming the service.
5. **Business Continuity During Exit:** Maintenance of service availability during the transition period.

*Refer to [Appendix D — Cloud Exit Strategy Summary] for service-specific exit strategies.*

---

## 12. Cloud Adoption Roadmap and Maturity

### 12.1 Cloud Maturity Model

*Assess [Organization Name]'s current cloud maturity and define the target maturity state.*

[Organization Name] uses the **[Cloud Maturity Model, e.g., Cloud Maturity Model (CMM) / Gartner / ISACA]** to assess its cloud adoption maturity across the following dimensions:

| Maturity Dimension | Current Level (1–5) | Target Level (FY[Year]) | Key Gap |
|---|---|---|---|
| Cloud Governance | [Level] | [Target] | [Description] |
| Cloud Security | [Level] | [Target] | [Description] |
| Cloud Architecture | [Level] | [Target] | [Description] |
| Cloud Operations | [Level] | [Target] | [Description] |
| Cloud FinOps | [Level] | [Target] | [Description] |
| Cloud Compliance | [Level] | [Target] | [Description] |
| Cloud Talent | [Level] | [Target] | [Description] |

**Maturity Scale:**
1. **Initial** — Ad hoc; no formal process
2. **Developing** — Basic processes defined but inconsistently applied
3. **Defined** — Processes standardized and documented
4. **Managed** — Processes measured and controlled
5. **Optimizing** — Continuous improvement; industry-leading practice

### 12.2 Cloud Adoption Roadmap

*Define the phased cloud adoption roadmap aligned with the Technology Strategy.*

#### Phase 1: Foundation (FY[Year] Q[X] – Q[X])

*Establish the foundational capabilities required for responsible cloud adoption.*

| Initiative | Description | Owner | Status |
|---|---|---|---|
| Cloud governance framework establishment | Establish CCoE; approve policies and standards | Cloud Architecture Lead | [Status] |
| Landing zone deployment | Deploy secure cloud landing zone per CSP | Cloud Architecture Team | [Status] |
| Cloud Register initialization | Catalogue all existing cloud services | CCoE | [Status] |
| BNM prior approval submission | Submit applications for required approvals | Compliance / Legal | [Status] |
| Security tooling deployment (CSPM, CASB) | Deploy cloud security monitoring tools | Information Security | [Status] |

#### Phase 2: Migration (FY[Year] Q[X] – Q[X])

*Execute planned workload migrations in line with application disposition decisions.*

| Initiative | Description | Owner | Status |
|---|---|---|---|
| [Workload/System Name] migration | [Migration type and description] | [Owner] | [Status] |
| [Workload/System Name] migration | [Migration type and description] | [Owner] | [Status] |
| Identity federation | Implement SSO/federation with cloud environments | IAM Team | [Status] |
| DR and backup automation | Automate backup and DR processes in cloud | Cloud Operations | [Status] |

#### Phase 3: Optimisation (FY[Year] Q[X] – Q[X])

*Optimize cloud utilization, cost, and capability.*

| Initiative | Description | Owner | Status |
|---|---|---|---|
| FinOps implementation | Cost visibility and optimization program | FinOps Lead | [Status] |
| Cloud-native re-architecture | Re-architect priority applications to cloud-native | Cloud Architecture | [Status] |
| AI/ML platform enablement | Deploy cloud AI/ML capabilities for business use | Data Team | [Status] |
| Advanced security automation | Implement automated threat response capabilities | InfoSec | [Status] |

### 12.3 Cloud Performance Metrics (KPIs)

*Define the KPIs used to measure the success of the cloud strategy and its alignment with business objectives.*

| KPI | Description | Target | Measurement Frequency | Owner |
|---|---|---|---|---|
| Cloud adoption rate | % of eligible workloads migrated to cloud | [Target %] by [Date] | Quarterly | Cloud Architecture Lead |
| Cloud cost efficiency | Cloud spend as % of total technology budget | [Target %] | Monthly | FinOps Lead / CTO |
| Mean time to provision (MTTP) | Average time to provision approved cloud resources | < [X] hours | Monthly | Cloud Operations |
| Cloud availability (critical systems) | Aggregate uptime of critical systems in cloud | ≥ 99.95% | Monthly | Cloud Operations |
| Security compliance rate | % of cloud workloads compliant with security baseline | 100% | Monthly | InfoSec |
| Unplanned cloud downtime | Hours of unplanned downtime per quarter | < [X] hours | Quarterly | Cloud Operations |
| CSP SLA achievement | % of CSP SLAs met per quarter | 100% | Quarterly | Vendor Management |

---

## 13. Performance and Compliance Monitoring

### 13.1 Continuous Monitoring Framework

*Describe the continuous monitoring approach for strategy alignment and cloud compliance.*

[Organization Name] has implemented a **Continuous Cloud Compliance Monitoring** framework that provides near-real-time visibility into the compliance posture of cloud environments. The framework comprises the following components:

| Monitoring Component | Tool / Platform | Scope | Review Frequency |
|---|---|---|---|
| Cloud Security Posture Management (CSPM) | [Tool Name] | All cloud environments | Continuous; daily report |
| Cloud Access Security Broker (CASB) | [Tool Name] | SaaS and data access | Continuous |
| Identity and Access Monitoring | [Tool Name] | IAM, PAM, privileged accounts | Continuous; weekly review |
| Data Loss Prevention (DLP) | [Tool Name] | Data transfers, data classification | Continuous |
| Configuration Drift Detection | [Tool Name] | IaC compliance; policy adherence | Continuous |
| Cost and Usage Monitoring (FinOps) | [Tool Name] | Cloud spend and resource utilization | Daily |
| Log Aggregation and SIEM | [Tool Name] | Security event correlation | Continuous |

### 13.2 Quarterly Review Process

*Describe the formal quarterly review of strategy alignment and cloud compliance.*

A formal **Quarterly Cloud Strategy Alignment Review** is conducted by the CCoE and reported to the TSC. The quarterly review covers:

1. **KPI and KRI Review:** Assessment of all cloud KPIs and KRIs against thresholds.
2. **Risk Register Review:** Review and update of the Cloud Risk Register.
3. **Compliance Status Review:** Assessment of BNM RMiT compliance posture, including any open findings.
4. **Cloud Register Review:** Update and validation of the Cloud Register.
5. **Strategy Alignment Assessment:** Assessment of whether cloud initiatives remain aligned with the Technology Strategy.
6. **Vendor Performance Review:** Review of CSP performance against SLAs.
7. **Incident and Near-Miss Review:** Review of cloud-related incidents and near-misses in the quarter.
8. **Regulatory Update Review:** Assessment of any new or updated regulatory requirements affecting cloud strategy.

#### 13.2.1 Quarterly Review Reporting

| Report | Audience | Frequency | Owner |
|---|---|---|---|
| Cloud Strategy Alignment Dashboard | TSC | Quarterly | Cloud Architecture Lead |
| Cloud Risk Report | Management Risk Committee | Quarterly | Risk / CCoE |
| Cloud Compliance Report | Compliance Committee | Quarterly | Compliance / CCoE |
| Cloud Performance Report | CTO / CIO | Monthly | Cloud Operations |
| Annual Cloud Strategy Review | Board / BRC | Annual | CTO / Cloud Architecture Lead |

### 13.3 Internal Audit and Independent Assurance

*Describe the assurance activities covering cloud strategy alignment and compliance.*

| Assurance Activity | Conducted By | Frequency | Scope | Reporting To |
|---|---|---|---|---|
| Cloud Controls Assessment | Internal Audit | Annual | Cloud governance, security, and compliance controls | Board Audit Committee |
| CSP On-site / Virtual Audit | Internal Audit / Third-Party Risk | Annual (critical CSPs) | CSP controls and SLA performance | Risk Committee |
| Penetration Testing (cloud) | Internal / External | Annual | Cloud attack surface | CTO / CISO |
| BNM Regulatory Examination | BNM | Ad hoc | Full RMiT compliance | Board |
| SOC 2 / ISO 27001 Review | CSP (customer access) | Annual | CSP security controls | CCoE / InfoSec |

---

## 14. Roles and Responsibilities

*Define the roles and responsibilities for the maintenance, implementation, and oversight of this strategy alignment documentation.*

### 14.1 RACI Matrix

**Legend:**
- **R** = Responsible (performs the work)
- **A** = Accountable (owns the outcome)
- **C** = Consulted (provides input)
- **I** = Informed (kept up to date)

| Activity | Board / BRC | CTO / CIO | Technology Steering Committee | Cloud Architecture Lead (CCoE) | Information Security | Compliance / Legal | Risk Management | Internal Audit | Business Units | Cloud Operations |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve Cloud Strategy | A | R | C | C | C | C | C | I | I | I |
| Maintain this document | I | A | I | R | C | C | C | I | I | I |
| Quarterly strategy alignment review | I | A | C | R | C | C | C | I | I | C |
| Manage Cloud Register | I | A | I | R | C | I | I | I | C | C |
| Cloud risk management | I | A | C | C | C | C | R | I | I | C |
| CSP due diligence and onboarding | I | A | C | R | C | C | C | I | I | I |
| Data residency compliance monitoring | I | A | I | C | R | C | C | I | I | C |
| Cloud security control implementation | I | A | I | C | R | C | C | I | I | C |
| BNM regulatory approval submissions | I | A | C | C | C | R | C | I | I | I |
| Cloud incident management | I | A | C | C | R | C | C | I | I | R |
| CSP performance management | I | A | C | R | C | C | C | I | I | R |
| Cloud audit and assurance | I | I | I | C | C | C | C | R | I | C |
| Cloud strategy investment management | A | R | C | C | I | I | I | I | I | I |

### 14.2 Key Role Descriptions

| Role | Name | Contact | Key Cloud Responsibilities |
|---|---|---|---|
| Cloud Architecture Lead | [Name] | [Email] | CCoE leadership; cloud strategy owner; this document owner |
| Chief Technology Officer (CTO) / CIO | [Name] | [Email] | Technology Strategy owner; accountable for cloud strategy alignment |
| Chief Information Security Officer (CISO) | [Name] | [Email] | Cloud security posture; cloud risk oversight |
| Chief Risk Officer (CRO) | [Name] | [Email] | Enterprise risk framework; cloud risk appetite |
| Data Protection Officer (DPO) | [Name] | [Email] | PDPA compliance; data residency oversight |
| Head of Compliance | [Name] | [Email] | BNM RMiT compliance; regulatory notifications |
| Head of Internal Audit | [Name] | [Email] | Independent assurance; cloud audit |
| Head of Vendor Management | [Name] | [Email] | CSP contracting; third-party risk |
| Cloud Operations Manager | [Name] | [Email] | Day-to-day cloud operations; incident management |

---

## 15. Review and Approval

### 15.1 Document Review Cycle

This document is subject to the following review cycle:

| Review Type | Frequency | Trigger |
|---|---|---|
| **Continuous Monitoring** | Ongoing | Changes to cloud environments, new CSP engagements, incidents |
| **Quarterly Review** | Every 3 months | Scheduled quarterly review cycle |
| **Annual Full Review** | Annually | Annual Technology Strategy planning cycle |
| **Ad Hoc Review** | As required | Material changes to Technology Strategy; new BNM requirements; major cloud incidents; significant changes to CSP landscape |

### 15.2 Version History

| Version | Date | Author | Approved By | Description of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | N/A | Initial draft |
| 0.2 | [Date] | [Author Name] | N/A | Incorporated stakeholder feedback |
| 0.9 | [Date] | [Author Name] | N/A | Final review draft |
| 1.0 | [Date] | [Author Name] | [Approver Name] | First approved version — baseline document |
| [1.1] | [Date] | [Author Name] | [Approver Name] | [Description of changes] |

### 15.3 Approval Sign-Off

*This document requires the following approvals before it is considered effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Cloud Architecture Lead (Document Owner) | [Name] | _________________________ | [Date] |
| Chief Technology Officer / CIO | [Name] | _________________________ | [Date] |
| Chief Information Security Officer | [Name] | _________________________ | [Date] |
| Chief Risk Officer | [Name] | _________________________ | [Date] |
| Head of Compliance | [Name] | _________________________ | [Date] |
| Technology Steering Committee Chair | [Name] | _________________________ | [Date] |

### 15.4 Distribution List

*Record the distribution of this document.*

| Recipient | Role | Date Distributed | Version |
|---|---|---|---|
| [Name] | [Role] | [Date] | [Version] |
| [Name] | [Role] | [Date] | [Version] |
| [Name] | [Role] | [Date] | [Version] |

---

## 16. References

### 16.1 Regulatory References

| Reference | Title | Clause / Section | Relevance |
|---|---|---|---|
| BNM RMiT (BNM/RH/PD 029-9) | Risk Management in Technology | **Clause 17.1** — Cloud Computing Strategy Alignment | Primary regulatory basis for this document |
| BNM RMiT | Risk Management in Technology | Clause 10 — Board and Senior Management | Governance requirements |
| BNM RMiT | Risk Management in Technology | Clause 12 — Risk Management | Risk management integration |
| BNM RMiT | Risk Management in Technology | Clause 14 — Audit Logging | Log management in cloud environments |
| BNM RMiT | Risk Management in Technology | Clause 15 — Business Continuity Management | BCM requirements for cloud |
| BNM RMiT | Risk Management in Technology | Clause 17 (Full) — Cloud Computing | All cloud-related requirements |
| BNM Outsourcing Policy | Outsourcing Policy | All relevant clauses | Material outsourcing to CSPs |
| Financial Services Act 2013 | FSA | Relevant sections | Regulatory context |
| Islamic Financial Services Act 2013 | IFSA | Relevant sections | Regulatory context |
| Personal Data Protection Act 2010 | PDPA | Section 129 — Cross-border transfer | Data residency |
| PDPA Transfer Order | Transfer of Personal Data to Places outside Malaysia Order | All | Cross-border data transfer |
| NACSA Cloud Security Guideline | National Cyber Security Agency | All relevant sections | Cloud security baseline |

### 16.2 Internal Document References

| Document ID | Title | Version | Relationship |
|---|---|---|---|
| [Doc ID] | Technology Strategy [Year]–[Year] | [Version] | Parent strategy |
| [Doc ID] | Cloud Security Standard | [Version] | Technical security requirements |
| [Doc ID] | Information Security Policy | [Version] | Security governance |
| [Doc ID] | Data Classification and Handling Policy | [Version] | Data governance |
| [Doc ID] | Outsourcing and Third-Party Risk Policy | [Version] | CSP governance |
| [Doc ID] | Cloud Centre of Excellence Charter | [Version] | CCoE mandate |
| [Doc ID] | Business Continuity and DR Policy | [Version] | Resilience requirements |
| [Doc ID] | IT Risk Management Framework | [Version] | Risk framework |
| [Doc ID] | Enterprise Architecture Framework | [Version] | EA principles |
| [Doc ID] | Incident Management Framework | [Version] | Cloud incident handling |
| [Doc ID] | Cloud Architecture Playbook | [Version] | Architecture patterns |

### 16.3 External Standards and Frameworks

| Standard / Framework | Publisher | Version / Date | Application |
|---|---|---|---|
| ISO/IEC 27001 | ISO/IEC | [Version] | Information security management |
| ISO/IEC 27017 | ISO/IEC | [Version] | Cloud security controls |
| ISO/IEC 27018 | ISO/IEC | [Version] | Protection of PII in cloud |
| NIST SP 800-145 | NIST | [Date] | Cloud computing definition and taxonomy |
| NIST SP 800-210 | NIST | [Date] | Cloud access control |
| CSA Cloud Controls Matrix (CCM) | Cloud Security Alliance | v4.0 | Cloud security control framework |
| ISACA COBIT | ISACA | 2019 | IT governance framework |

---

## 17. Appendices

### Appendix A — Cloud Register Extract

*This appendix contains the current extract from [Organization Name]'s Cloud Register as at [Date]. The full Cloud Register is maintained in [System / Repository].*

| Cloud Register ID | Service Name | CSP | Service Model | Deployment | Data Classification | Data Residency | Criticality | BNM Approval | Risk Rating | Contract Expiry |
|---|---|---|---|---|---|---|---|---|---|---|
| CR-2024-001 | [Service Name] | [CSP Name] | [IaaS/PaaS/SaaS] | [Public/Private/Hybrid] | [Classification] | [Location] | [Critical/Non-Critical] | [Status] | [H/M/L] | [Date] |
| CR-2024-002 | [Service Name] | [CSP Name] | [IaaS/PaaS/SaaS] | [Public/Private/Hybrid] | [Classification] | [Location] | [Critical/Non-Critical] | [Status] | [H/M/L] | [Date] |
| CR-2024-003 | [Service Name] | [CSP Name] | [IaaS/PaaS/SaaS] | [Public/Private/Hybrid] | [Classification] | [Location] | [Critical/Non-Critical] | [Status] | [H/M/L] | [Date] |

*[Continue for all registered cloud services]*

---

### Appendix B — CSP-Specific Shared Responsibility Matrices

*This appendix contains the detailed shared responsibility matrices for each primary cloud service provider, mapped to [Organization Name]'s control framework.*

#### B.1 [CSP 1 Name] — Shared Responsibility Matrix

*The following matrix is based on [CSP 1 Name]'s published Shared Responsibility Model ([Reference / Date]) and maps responsibilities to [Organization Name]'s Cloud Security Standard.*

| Control ID | Control Description | CSP 1 Responsibility | [Org Name] Responsibility | Control Implementation | Verification Method |
|---|---|---|---|---|---|
| CSP1-IAM-01 | Identity provider federation | Provides integration capability | Configure and manage | [Tool/Process] | Quarterly access review |
| CSP1-ENC-01 | Encryption key management | Provides KMS service | Own and manage keys | [KMS Tool] | Annual key rotation audit |
| CSP1-NET-01 | Virtual network isolation | Provides VPC capability | Configure VPC, subnets, security groups | IaC / [Tool] | Monthly CSPM scan |
| CSP1-LOG-01 | Audit log availability | Provides logging service | Enable, aggregate, retain logs | [SIEM Tool] | Continuous |
| [Continue] | | | | | |

#### B.2 [CSP 2 Name] — Shared Responsibility Matrix

| Control ID | Control Description | CSP 2 Responsibility | [Org Name] Responsibility | Control Implementation | Verification Method |
|---|---|---|---|---|---|
| CSP2-IAM-01 | [Description] | [CSP Responsibility] | [Org Responsibility] | [Tool/Process] | [Verification] |
| [Continue] | | | | | |

---

### Appendix C — Data Flow Diagrams

*This appendix contains approved data flow diagrams illustrating the movement of data between [Organization Name]'s systems and cloud environments.*

#### C.1 Data Flow Diagram — [System/Use Case Name]

*[Insert or reference data flow diagram showing data classification, direction of flow, encryption requirements, and geographic locations.]*

**Data Flow Description:**

| Flow ID | From | To | Data Classification | Encryption | Protocol | Residency | Approved |
|---|---|---|---|---|---|---|---|
| DF-DIAG-001 | [Source System] | [CSP Service / Region] | [Classification] | TLS 1.2+ / AES-256 | [Protocol] | Malaysia | [Yes / Ref] |
| DF-DIAG-002 | [Source System] | [CSP Service / Region] | [Classification] | [Encryption] | [Protocol] | [Location] | [Yes / Ref] |

*[Data flow diagrams to be attached or linked from the architecture documentation repository: [Repository Link / Path]]*

---

### Appendix D — Cloud Exit Strategy Summary

*This appendix summarizes the exit strategy for each critical cloud service, consistent with BNM RMiT requirements for maintaining the ability to exit cloud service arrangements.*

| Service / System Name | CSP | Exit Trigger Criteria | Data Export Method | Target Transition Period | Alternative CSP / On-Prem Option | Last Tested | Next Test Date |
|---|---|---|---|---|---|---|---|
| [System Name] | [CSP Name] | [e.g., CSP insolvency; material SLA breach; regulatory direction] | [e.g., Standard export API; S3-compatible export] | [e.g., 90 days] | [Alternative CSP / On-Prem option] | [Date] | [Date] |
| [System Name] | [CSP Name] | [Criteria] | [Method] | [Period] | [Alternative] | [Date] | [Date] |

**Exit Strategy Elements:**

For each critical service listed above, the following elements are documented in the full Exit Strategy [Document ID]:

1. Exit triggers and decision criteria
2. Data portability and export procedures
3. Application migration or re-deployment procedures
4. Communication plan (internal, customer, regulatory)
5. Business continuity maintenance during transition
6. Post-exit data deletion and certification requirements
7. Lessons learned process

---

### Appendix E — BNM Prior Approval Correspondence

*This appendix contains references to all BNM prior approval submissions and approvals relating to cloud service adoption.*

| Reference No. | Subject Matter | Date Submitted | BNM Response Date | Approval Status | Conditions / Notes |
|---|---|---|---|---|---|
| [BNM Ref] | [Description of cloud arrangement requiring approval] | [Date] | [Date] | [Approved / Pending / Conditional] | [Conditions if applicable] |
| [BNM Ref] | [Description] | [Date] | [Date] | [Status] | [Notes] |

*Copies of original correspondence are maintained in the Regulatory Affairs repository: [Repository Reference]*

---

### Appendix F — Glossary of Terms

*Definitions of key terms used in this document.*

| Term | Definition |
|---|---|
| **Cloud Computing** | On-demand access to a shared pool of configurable computing resources (networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort. (NIST SP 800-145) |
| **Cloud Service Provider (CSP)** | A company that offers cloud computing services, including infrastructure, platform, or software services. |
| **IaaS (Infrastructure as a Service)** | A cloud service model providing virtualized computing infrastructure over the internet. The customer manages operating systems, applications, and data. |
| **PaaS (Platform as a Service)** | A cloud service model providing a platform including OS, middleware, and runtime. The customer manages applications and data. |
| **SaaS (Software as a Service)** | A cloud service model providing fully managed software applications. The customer manages user access and configuration. |
| **Public Cloud** | Cloud infrastructure provisioned for open use by the general public and owned by a cloud service provider. |
| **Private Cloud** | Cloud infrastructure provisioned for exclusive use by a single organization. |
| **Hybrid Cloud** | A cloud deployment model combining public and private cloud environments with integration between them. |
| **Data Residency** | The physical or geographic location in which data is stored or processed. |
| **Data Sovereignty** | The concept that data is subject to the laws of the country in which it is located or processed. |
| **Shared Responsibility Model** | A framework defining the division of security and compliance responsibilities between a CSP and its customer. |
| **Cloud Register** | An inventory maintained by [Organization Name] of all cloud services and CSPs in use. |
| **CCoE (Cloud Centre of Excellence)** | An internal governance body responsible for setting cloud standards, approving cloud architectures, and monitoring cloud compliance. |
| **CSPM (Cloud Security Posture Management)** | A class of tools that continuously monitor cloud environments for security misconfigurations and compliance violations. |
| **CASB (Cloud Access Security Broker)** | A security policy enforcement point between cloud service users and cloud service providers. |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk management for financial institutions. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data. |
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia and primary regulator of financial institutions. |
| **NACSA** | National Cyber Security Agency — the Malaysian government body responsible for national cyber security policy. |
| **RTO (Recovery Time Objective)** | The maximum acceptable time to restore a service after a disruption. |
| **RPO (Recovery Point Objective)** | The maximum acceptable amount of data loss measured in time, in the event of a disruption. |
| **KPI (Key Performance Indicator)** | A measurable value demonstrating how effectively objectives are being achieved. |
| **KRI (Key Risk Indicator)** | A measurable value providing early warning of increasing risk exposure. |
| **RACI** | A responsibility assignment matrix using Responsible, Accountable, Consulted, and Informed designations. |
| **TSC** | Technology Steering Committee — the senior management committee overseeing technology investments and strategy. |
| **SLA (Service Level Agreement)** | A contractual commitment between a CSP and [Organization Name] defining service performance standards. |
| **DPA (Data Processing Agreement)** | A contractual arrangement governing how a CSP processes personal data on behalf of [Organization Name]. |
| **PAM (Privileged Access Management)** | Controls and tools governing elevated access to systems and data. |
| **IaC (Infrastructure as Code)** | The management of infrastructure configuration through machine-readable files, enabling automated and consistent provisioning. |

---

### Appendix G — Related Policies and Standards Summary

*Summary of all internal policies and standards that interact with this document.*

| Document ID | Title | Version | Owner | Review Date | Link / Location |
|---|---|---|---|---|---|
| [Doc ID] | Technology Strategy [Year]–[Year] | [Ver] | CTO/CIO | [Date] | [Repository Link] |
| [Doc ID] | Cloud Security Standard | [Ver] | CISO | [Date] | [Repository Link] |
| [Doc ID] | Information Security Policy | [Ver] | CISO | [Date] | [Repository Link] |
| [Doc ID] | Data Classification and Handling Policy | [Ver] | DPO | [Date] | [Repository Link] |
| [Doc ID] | Outsourcing and Third-Party Risk Policy | [Ver] | CRO | [Date] | [Repository Link] |
| [Doc ID] | Business Continuity and DR Policy | [Ver] | COO | [Date] | [Repository Link] |
| [Doc ID] | IT Risk Management Framework | [Ver] | CRO | [Date] | [Repository Link] |
| [Doc ID] | Incident Management Framework | [Ver] | CISO | [Date] | [Repository Link] |
| [Doc ID] | Cloud Centre of Excellence Charter | [Ver] | Cloud Architecture Lead | [Date] | [Repository Link] |
| [Doc ID] | Cloud Architecture Playbook | [Ver] | Cloud Architecture Lead | [Date] | [Repository Link] |
| [Doc ID] | Enterprise Architecture Framework | [Ver] | Enterprise Architect | [Date] | [Repository Link] |

---

*End of Document*

---

| Field | Detail |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Cloud Architecture Lead |
| **Last Updated** | [Date] |
| **Status** | [Draft / Under Review / Approved] |

> *This document is a controlled document. The master copy is maintained in [Document Management System]. Any printed or downloaded copies are uncontrolled. Verify currency of this document before relying upon its contents.*