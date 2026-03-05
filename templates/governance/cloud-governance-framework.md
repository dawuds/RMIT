# Cloud Governance Framework

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
| **Document Status** | [Draft / Under Review / Approved] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution of this document is strictly prohibited. If you have received this document in error, please notify the document owner immediately.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Governance Structure](#4-governance-structure)
5. [Cloud Service Models and Deployment Types](#5-cloud-service-models-and-deployment-types)
6. [Data Residency Requirements](#6-data-residency-requirements)
7. [Shared Responsibility Matrix](#7-shared-responsibility-matrix)
8. [Cloud Risk Management](#8-cloud-risk-management)
9. [Vendor and Third-Party Management](#9-vendor-and-third-party-management)
10. [Security and Compliance Controls](#10-security-and-compliance-controls)
11. [Business Continuity and Exit Strategy](#11-business-continuity-and-exit-strategy)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

---

## 1. Executive Summary

*Provide a concise overview of the Cloud Governance Framework, its strategic rationale, regulatory context, and the organization's cloud posture. This section should be readable by senior leadership and the Board and should summarize the key governance commitments without excessive technical detail.*

[Organization Name] (hereinafter referred to as "the Organization") operates in a dynamic and increasingly digitalized financial services environment regulated by Bank Negara Malaysia (BNM). As cloud computing becomes central to operational resilience, scalability, and innovation, the Organization recognizes the imperative to govern its adoption of cloud services with rigor, accountability, and alignment to regulatory expectations.

This Cloud Governance Framework (CGF) establishes the principles, structures, processes, and controls by which the Organization will evaluate, adopt, manage, and retire cloud services. It directly addresses the requirements set forth under BNM's **Risk Management in Technology (RMiT) Policy Document**, with particular reference to **Section 17 (Cloud Services)**. It also draws from applicable provisions of the **Personal Data Protection Act 2010 (PDPA)**, the **National Cyber Security Agency (NACSA)** guidelines, and internationally recognized frameworks including ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018, and the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM).

### 1.1 Strategic Cloud Objectives

*Summarize the organization's strategic rationale for cloud adoption. Link cloud strategy to broader business and digital transformation goals.*

The Organization's strategic objectives for cloud adoption are as follows:

- **Operational Resilience:** Leverage cloud infrastructure to achieve enhanced availability, redundancy, and disaster recovery capabilities beyond those achievable in solely on-premise environments.
- **Scalability and Agility:** Enable rapid provisioning of compute and storage resources to support business growth, product launches, and seasonal demand fluctuations.
- **Cost Optimization:** Transition from high capital expenditure (CapEx) infrastructure models to flexible operational expenditure (OpEx) models, optimizing total cost of ownership (TCO).
- **Innovation Enablement:** Access cloud-native capabilities including artificial intelligence, machine learning, managed databases, and DevSecOps toolchains to accelerate product development.
- **Regulatory Compliance:** Ensure all cloud arrangements meet or exceed regulatory obligations under BNM RMiT and applicable Malaysian law.

### 1.2 Key Governance Commitments

*Enumerate the organization's top-level commitments to cloud governance. These should reflect leadership intent and risk appetite.*

The Organization commits to the following overarching governance principles for all cloud services:

1. All cloud adoption decisions will be subject to formal risk assessment, regulatory review, and structured approval processes.
2. Material cloud outsourcing arrangements will be notified to or approved by BNM in accordance with RMiT requirements.
3. Data sovereignty and residency requirements for regulated data will be enforced contractually and technically.
4. A defined shared responsibility model will govern security and operational obligations between the Organization and each cloud service provider (CSP).
5. Cloud services will be subject to ongoing monitoring, performance review, and periodic audit.
6. Exit strategy and portability requirements will be established prior to the commencement of any material cloud arrangement.

### 1.3 Scope Summary

This Framework applies to all business units, subsidiaries, and third parties that provision, manage, or consume cloud services on behalf of [Organization Name]. It encompasses Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) deployment models across public, private, hybrid, and community cloud environments.

---

---

## 2. Purpose and Scope

### 2.1 Purpose

*State the primary purpose of this document — why it exists, what problem it solves, and what regulatory obligation it fulfills.*

The purpose of this Cloud Governance Framework is to establish a structured, consistent, and auditable approach to the management of cloud services at [Organization Name]. Specifically, this document:

- Defines the governance structures, forums, and decision-making processes applicable to cloud services.
- Establishes the criteria for evaluating, approving, and classifying cloud deployments.
- Sets out the responsibilities of all parties involved in cloud service provisioning and oversight.
- Ensures alignment with BNM's Risk Management in Technology (RMiT) policy, particularly Clause 17.1 governing cloud services in financial institutions.
- Provides a reference for internal audit, regulatory examination, and third-party assurance reviews.

This Framework does not replace operational runbooks, cloud security baselines, or individual vendor contractual documentation. Rather, it provides the overarching governance context within which those documents operate.

### 2.2 Scope

*Define the boundaries of this framework — what it covers and what it explicitly excludes. Be precise to avoid ambiguity during audits.*

#### 2.2.1 In Scope

This Framework applies to:

| Scope Dimension | Description |
|---|---|
| **Organizational Units** | All business units, departments, subsidiaries, and branch offices of [Organization Name] |
| **Cloud Service Models** | Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), Software-as-a-Service (SaaS) |
| **Deployment Models** | Public cloud, private cloud, hybrid cloud, community cloud |
| **Data Classifications** | All data classifications including Public, Internal, Confidential, and Restricted |
| **Third Parties** | Managed service providers, system integrators, and subcontractors accessing or managing cloud resources on behalf of the Organization |
| **Geographies** | All jurisdictions in which the Organization operates cloud workloads |
| **Regulated Systems** | Core banking systems, payment systems, customer data platforms, and other systems subject to BNM oversight |

#### 2.2.2 Out of Scope

The following are explicitly excluded from this Framework:

- Internal virtualization platforms and on-premise infrastructure not delivered as a cloud service.
- Personal devices used by employees for productivity purposes under a Bring Your Own Device (BYOD) policy (governed separately).
- Pilot or proof-of-concept environments that do not process, store, or transmit regulated or production data (subject to the Organization's Sandbox Policy).

### 2.3 Objectives

*List the specific, measurable outcomes this framework is designed to achieve.*

This Framework is designed to achieve the following objectives:

1. **Regulatory Compliance:** Ensure full compliance with BNM RMiT Section 17 (Cloud Services) and all applicable Malaysian regulatory requirements.
2. **Risk Management:** Identify, assess, and mitigate risks associated with cloud adoption, including concentration risk, data residency risk, and vendor lock-in risk.
3. **Governance Clarity:** Establish clear lines of accountability and decision authority for all cloud-related decisions.
4. **Security Assurance:** Define minimum security requirements and control expectations for all cloud environments.
5. **Operational Continuity:** Ensure that cloud arrangements support the Organization's business continuity and disaster recovery objectives.
6. **Cost Accountability:** Enable financial oversight and optimization of cloud expenditure across the Organization.
7. **Exit Readiness:** Maintain the Organization's ability to exit any cloud arrangement without material disruption to operations.

### 2.4 Framework Relationships

*Describe how this document relates to other governance documents in the organization's policy architecture.*

This Cloud Governance Framework sits within the Organization's Technology Risk and Governance policy hierarchy and should be read in conjunction with the following documents:

| Document Title | Relationship |
|---|---|
| Technology Risk Management Framework | Parent framework; cloud risk is a subset of technology risk |
| Information Security Policy | Sets overarching information security requirements applicable to cloud environments |
| Outsourcing Risk Management Policy | Governs all material outsourcing, including cloud outsourcing arrangements |
| Data Classification and Handling Policy | Defines data sensitivity levels that determine permissible cloud hosting locations |
| Business Continuity Management Policy | Sets RTO/RPO requirements that cloud arrangements must support |
| Vendor Management Policy | Governs third-party due diligence applicable to cloud service providers |
| Incident Management Policy | Defines incident response obligations applicable to cloud-hosted systems |
| IT Change Management Policy | Governs change processes applicable to cloud environments |

---

---

## 3. Regulatory and Policy Context

*This section documents the regulatory landscape governing cloud usage. It should be reviewed at each annual review cycle to capture regulatory updates. Ensure all cited clauses are verified against the current published version of each regulation.*

### 3.1 Bank Negara Malaysia — Risk Management in Technology (RMiT)

The primary regulatory instrument governing cloud usage at [Organization Name] is BNM's **Risk Management in Technology (RMiT) Policy Document**, issued under the Financial Services Act 2013 (FSA) and the Islamic Financial Services Act 2013 (IFSA).

#### 3.1.1 Relevant RMiT Provisions

| RMiT Clause | Topic | Applicability to This Framework |
|---|---|---|
| **17.1** | Cloud Services — General Requirements | Establishes the foundational requirements for the use of cloud services by financial institutions, including governance, risk assessment, and notification obligations |
| **17.2** | Cloud Services — Risk Assessment | Requires formal risk assessment prior to adopting cloud services for material systems |
| **17.3** | Cloud Services — Data and System Residency | Governs requirements for maintaining data within Malaysia or obtaining BNM approval for offshore hosting |
| **17.4** | Cloud Services — Contractual Safeguards | Prescribes minimum contractual requirements with cloud service providers |
| **17.5** | Cloud Services — Exit Strategy | Requires financial institutions to maintain a viable exit strategy for all material cloud arrangements |
| **10** | Outsourcing Risk | Applicable where cloud arrangements constitute material outsourcing |
| **11** | Technology Risk Management | General technology risk management requirements applicable to cloud environments |

#### 3.1.2 RMiT Clause 17.1 — Detailed Requirements Mapping

*This subsection maps the specific requirements of RMiT Clause 17.1 to the relevant sections of this Framework. This mapping is intended to facilitate regulatory examination and internal audit reviews.*

| RMiT 17.1 Requirement | Framework Section | Status |
|---|---|---|
| Establishment of a cloud governance framework | Sections 4–7 of this document | [Compliant / In Progress / Planned] |
| Board and senior management oversight of cloud services | Section 4.1 | [Compliant / In Progress / Planned] |
| Defined roles and responsibilities for cloud governance | Section 12 | [Compliant / In Progress / Planned] |
| Risk assessment prior to cloud adoption | Section 8.1 | [Compliant / In Progress / Planned] |
| Cloud service provider due diligence | Section 9 | [Compliant / In Progress / Planned] |
| Data residency and sovereignty controls | Section 6 | [Compliant / In Progress / Planned] |
| Shared responsibility documentation | Section 7 | [Compliant / In Progress / Planned] |
| Exit and portability planning | Section 11 | [Compliant / In Progress / Planned] |

### 3.2 Personal Data Protection Act 2010 (PDPA)

The **Personal Data Protection Act 2010 (PDPA)** governs the processing of personal data of Malaysian individuals. All cloud environments hosting personal data of customers, employees, or other data subjects must comply with PDPA requirements, including:

- **Principle 6 (Security):** Personal data must be protected against loss, misuse, modification, unauthorized or accidental access, disclosure, alteration, or destruction.
- **Principle 7 (Retention):** Personal data shall not be kept longer than necessary.
- **Cross-Border Transfers:** Personal data shall not be transferred outside Malaysia unless the destination country provides adequate levels of protection equivalent to PDPA standards, or an exemption applies.

Applicable cloud services hosting personal data are subject to the Organization's PDPA Compliance Framework in addition to this Cloud Governance Framework.

### 3.3 NACSA — National Cybersecurity Policy and Guidelines

The **National Cyber Security Agency (NACSA)** provides guidance applicable to Critical Information Infrastructure (CII) sectors, which include the financial services sector. The Organization shall have regard to:

- NACSA's **National Cybersecurity Policy** requirements applicable to cloud-hosted CII systems.
- NACSA's sector-specific guidance on cloud security for financial institutions.
- Any mandatory incident reporting obligations to NACSA for cloud-related cybersecurity incidents.

### 3.4 International Standards and Frameworks

*The Organization uses the following international standards as reference frameworks to supplement Malaysian regulatory requirements:*

| Standard / Framework | Applicability |
|---|---|
| **ISO/IEC 27001:2022** | Information Security Management System (ISMS) — baseline security controls |
| **ISO/IEC 27017:2015** | Code of practice for information security controls applicable to cloud services |
| **ISO/IEC 27018:2019** | Code of practice for protection of personally identifiable information (PII) in public clouds |
| **CSA Cloud Controls Matrix (CCM) v4** | Cloud-specific security controls reference framework |
| **NIST SP 800-144** | Guidelines on security and privacy in public cloud computing |
| **NIST SP 800-210** | General access control guidance for cloud systems |
| **CIS Controls v8** | Prioritized set of cybersecurity best practices applicable to cloud environments |

---

---

## 4. Governance Structure

*This section defines the governance bodies, forums, and reporting lines that oversee the Organization's cloud strategy and operations. The governance structure should reflect actual organizational structures and be reviewed annually or when organizational changes occur.*

### 4.1 Board and Senior Management Oversight

*Describe the role of the Board and senior management in cloud governance. BNM RMiT requires that Board and senior management maintain oversight of material technology and cloud risks.*

#### 4.1.1 Board of Directors

The Board of Directors (Board) retains ultimate accountability for the Organization's cloud strategy and the risks arising from cloud adoption. The Board's responsibilities with respect to cloud governance include:

- Approving the Organization's cloud strategy and risk appetite for cloud services.
- Ensuring that material cloud outsourcing arrangements are appropriately considered and approved in line with the Outsourcing Risk Management Policy.
- Receiving periodic reporting on cloud risk exposure, concentration risk, and compliance status.
- Overseeing management's responsiveness to BNM guidance and examination findings related to cloud services.

The Board delegates day-to-day cloud governance oversight to the **Board Risk Committee (BRC)** and the **Board Audit Committee (BAC)**.

| Board Committee | Cloud Governance Role |
|---|---|
| **Board Risk Committee (BRC)** | Reviews and approves cloud risk appetite; receives quarterly cloud risk reports; approves material cloud outsourcing |
| **Board Audit Committee (BAC)** | Oversees internal audit coverage of cloud environments; reviews audit findings related to cloud governance |
| **Board IT Committee (BITC)** | [If applicable] Reviews and endorses cloud strategy; monitors strategic cloud initiatives |

#### 4.1.2 Senior Management

Senior management is accountable for implementing the Board's cloud governance directives and ensuring operational compliance with this Framework. Key senior management responsibilities include:

- Championing a culture of cloud governance awareness and accountability.
- Ensuring adequate resources (human, financial, and technical) are allocated to cloud governance activities.
- Reporting cloud risk matters to the Board with appropriate frequency and transparency.
- Ensuring that cloud arrangements are subject to robust due diligence and ongoing monitoring.

### 4.2 Cloud Governance Committees and Forums

*Define the management-level governance bodies responsible for cloud governance. Each committee should have a defined charter, membership, meeting cadence, and escalation path.*

#### 4.2.1 Technology Risk Committee (TRC)

| Attribute | Details |
|---|---|
| **Chair** | Chief Risk Officer (CRO) / Chief Technology Officer (CTO) |
| **Members** | CIO, CISO, Cloud Architecture Lead, Head of IT Operations, Head of Compliance, Head of Internal Audit (observer) |
| **Meeting Frequency** | Quarterly (or ad hoc for material cloud events) |
| **Quorum** | [Quorum requirement, e.g., 50% of members] |
| **Reporting Line** | Board Risk Committee |

**Responsibilities:**

- Review and approve the Cloud Governance Framework and material updates.
- Oversee the cloud risk register and approve risk treatment decisions.
- Review and approve material cloud outsourcing arrangements prior to submission to BNM.
- Monitor key risk indicators (KRIs) and key performance indicators (KPIs) for cloud services.
- Escalate material cloud risk issues to the Board Risk Committee.

#### 4.2.2 Cloud Centre of Excellence (CCoE)

*The Cloud Centre of Excellence is the primary operational governance body for cloud services. It serves as the central authority for cloud standards, architecture decisions, and adoption approvals.*

| Attribute | Details |
|---|---|
| **Chair** | Cloud Architecture Lead |
| **Members** | Cloud Security Architect, Cloud Operations Lead, Representative from each Business Unit, IT Procurement, Legal/Compliance |
| **Meeting Frequency** | Monthly (or ad hoc for urgent cloud adoption requests) |
| **Reporting Line** | Technology Risk Committee |

**Responsibilities:**

- Develop and maintain cloud architecture standards, reference architectures, and guardrails.
- Review and approve cloud adoption requests from business units (refer to Cloud Intake Process, Appendix A).
- Evaluate cloud service providers against the Organization's approved vendor list and due diligence criteria.
- Maintain the Cloud Services Register (refer to Appendix B).
- Coordinate with the CISO's office to ensure cloud security standards are current and enforced.
- Provide technical guidance to business units on cloud architecture and best practices.
- Monitor cloud expenditure and optimize cloud resource utilization.

#### 4.2.3 Cloud Security Working Group (CSWG)

| Attribute | Details |
|---|---|
| **Chair** | Cloud Security Architect / CISO delegate |
| **Members** | IT Security team, Cloud Operations, DevOps/DevSecOps leads, Vulnerability Management |
| **Meeting Frequency** | Monthly |
| **Reporting Line** | Cloud Centre of Excellence |

**Responsibilities:**

- Develop and maintain the Cloud Security Baseline.
- Review cloud-specific threat intelligence and assess applicability to the Organization's cloud environments.
- Oversee cloud security posture management (CSPM) tool findings and remediation.
- Coordinate cloud-specific incident response activities.
- Review cloud vendor security advisories and patches.

### 4.3 Cloud Governance Decision Authority Matrix

*This matrix defines which governance body has authority to approve different types of cloud-related decisions. It prevents decision paralysis and ensures appropriate escalation.*

| Decision Type | Cloud Architect | CCoE | TRC | Board/BRC |
|---|---|---|---|---|
| Approval of new SaaS tool (non-material) | Recommend | **Approve** | Notify | — |
| Approval of new IaaS/PaaS workload | Recommend | **Approve** | Notify | — |
| Designation of cloud service as Material Outsourcing | Recommend | Recommend | **Approve** | Notify |
| BNM notification/approval of material cloud outsourcing | Recommend | Recommend | Recommend | **Approve** |
| Approval of cloud deployment in offshore jurisdiction | Recommend | Recommend | Recommend | **Approve** |
| Approval of new Approved Cloud Service Provider | Recommend | **Approve** | Notify | — |
| Approval of Cloud Security Baseline | Recommend | **Approve** | Notify | — |
| Approval of Cloud Governance Framework | Recommend | Recommend | **Approve** | Endorse |
| Cloud provider exit decision (material) | Recommend | Recommend | **Approve** | Notify |

*Legend: **Approve** = Decision authority; Recommend = Provides recommendation; Notify = Receives notification; — = Not involved*

### 4.4 Cloud Governance Reporting Structure

*Illustrate the reporting flows for cloud governance information. Reporting ensures that the right stakeholders receive the right information at the right time.*

```
Board of Directors
    └── Board Risk Committee (BRC)
    └── Board Audit Committee (BAC)
         └── Technology Risk Committee (TRC)
              └── Cloud Centre of Excellence (CCoE)
                   ├── Cloud Security Working Group (CSWG)
                   ├── Cloud Operations Team
                   └── Business Unit Cloud Owners
```

#### 4.4.1 Reporting Schedule

| Report | Frequency | Prepared By | Submitted To |
|---|---|---|---|
| Cloud Risk Dashboard | Monthly | Cloud Architecture Lead | CCoE, TRC |
| Cloud KPI/KRI Report | Quarterly | Cloud Operations Lead | TRC, BRC |
| Cloud Vendor Performance Report | Quarterly | Vendor Management | CCoE, TRC |
| Cloud Security Posture Report | Monthly | Cloud Security Architect | CSWG, CISO |
| Material Cloud Outsourcing Status | Semi-annually | Compliance | TRC, BRC |
| Annual Cloud Governance Review | Annual | Cloud Architecture Lead | TRC, Board |
| BNM Regulatory Reporting (Cloud) | As required | Compliance | BNM |

### 4.5 Cloud Governance Principles

*Define the core principles that underpin all cloud governance decisions. These principles should be consistent with the Organization's broader IT and risk management principles.*

The following principles govern all cloud-related decisions at [Organization Name]:

| Principle | Description |
|---|---|
| **Regulatory First** | No cloud service will be adopted if it cannot be made compliant with applicable Malaysian regulatory requirements. Regulatory compliance is non-negotiable. |
| **Risk-Informed** | All cloud adoption decisions will be informed by a formal risk assessment appropriate to the materiality and complexity of the cloud service. |
| **Data Sovereignty** | Customer and regulated data will be hosted in accordance with BNM data residency requirements. Offshore hosting requires explicit regulatory approval. |
| **Shared Responsibility** | The Organization does not transfer its regulatory obligations to cloud service providers. Shared responsibility models will be explicitly documented and understood for each cloud service. |
| **Least Privilege** | Cloud access will be granted on a least-privilege basis. Privileged access to cloud environments will be controlled, monitored, and periodically reviewed. |
| **Defense in Depth** | Cloud security will be implemented in layers, combining CSP-native controls with Organization-managed controls and compensating measures. |
| **Portability and Exit** | Cloud services will be adopted with exit strategy and data portability requirements defined upfront. Vendor lock-in will be actively managed and mitigated. |
| **Transparency** | Cloud costs, performance, and risk metrics will be visible to relevant stakeholders through defined reporting mechanisms. |
| **Continuous Improvement** | Cloud governance controls will be regularly reviewed and updated to reflect changes in the regulatory environment, threat landscape, and organizational needs. |

---

---

## 5. Cloud Service Models and Deployment Types

*This section defines the Organization's classification of cloud services and deployment models, establishes the approved categories of cloud use, and sets out the minimum requirements for each category. This section provides the technical and commercial context within which governance controls are applied.*

### 5.1 Cloud Service Model Definitions

*Provide clear definitions of each cloud service model applicable to the Organization's environment. These definitions align with ISO/IEC 17788 and NIST SP 800-145.*

#### 5.1.1 Infrastructure-as-a-Service (IaaS)

IaaS provides virtualized computing resources — including virtual machines, storage, and networking — over the internet. The Organization retains responsibility for the operating system, middleware, runtime, data, and applications. The CSP is responsible for the underlying physical infrastructure.

**Examples in use at [Organization Name]:**

| Service | Provider | Use Case | Classification |
|---|---|---|---|
| [IaaS Service Name] | [CSP Name] | [Use Case Description] | [Critical / Non-Critical] |
| [IaaS Service Name] | [CSP Name] | [Use Case Description] | [Critical / Non-Critical] |

#### 5.1.2 Platform-as-a-Service (PaaS)

PaaS provides a managed platform for developing, testing, and deploying applications without the complexity of managing the underlying infrastructure. The Organization retains responsibility for applications and data; the CSP manages the infrastructure, operating system, middleware, and runtime.

**Examples in use at [Organization Name]:**

| Service | Provider | Use Case | Classification |
|---|---|---|---|
| [PaaS Service Name] | [CSP Name] | [Use Case Description] | [Critical / Non-Critical] |
| [PaaS Service Name] | [CSP Name] | [Use Case Description] | [Critical / Non-Critical] |

#### 5.1.3 Software-as-a-Service (SaaS)

SaaS delivers fully managed software applications over the internet. The Organization is responsible for user access management, data input, and configuration; the CSP manages all underlying infrastructure, platform, and application components.

**Examples in use at [Organization Name]:**

| Service | Provider | Use Case | Classification |
|---|---|---|---|
| [SaaS Service Name] | [CSP Name] | [Use Case Description] | [Critical / Non-Critical] |
| [SaaS Service Name] | [CSP Name] | [Use Case Description] | [Critical / Non-Critical] |

### 5.2 Cloud Deployment Models

#### 5.2.1 Public Cloud

Resources are owned and operated by a third-party CSP and shared across multiple organizations (multi-tenancy). Public cloud offers the highest scalability and cost efficiency but requires careful data classification and contractual controls.

**Organization's Approved Public Cloud Providers:**

| Provider | Services Approved | Approval Date | Approval Authority |
|---|---|---|---|
| [CSP Name] | [IaaS / PaaS / SaaS] | [Date] | [CCoE / TRC] |
| [CSP Name] | [IaaS / PaaS / SaaS] | [Date] | [CCoE / TRC] |

**Permissible Data Classifications for Public Cloud:**

| Data Classification | Permitted in Public Cloud | Conditions |
|---|---|---|
| Public | Yes | No additional conditions |
| Internal | Yes | Must be encrypted in transit and at rest |
| Confidential | Yes (with controls) | Must comply with data residency requirements; encryption mandatory; approved CSP only |
| Restricted | Conditional | Requires TRC approval and BNM notification as applicable; subject to enhanced controls |

#### 5.2.2 Private Cloud

Resources are provisioned for exclusive use by the Organization, hosted either on-premise or by a third party. Private cloud offers greater control and isolation at higher cost.

*Describe the Organization's private cloud arrangements, if any. Include hosting location, ownership model (owned vs. managed), and primary use cases.*

| Private Cloud Environment | Hosting Location | Owner / Operator | Primary Use Cases |
|---|---|---|---|
| [Environment Name] | [On-premise / Third-party data centre] | [Organization / Third Party] | [Use Cases] |

#### 5.2.3 Hybrid Cloud

A combination of public and private cloud environments connected by technology that enables data and application portability. Hybrid cloud is the Organization's strategic deployment model for regulated workloads.

*Describe the Organization's hybrid cloud architecture strategy. Include any integration patterns, connectivity requirements, and data flow considerations.*

- **Connectivity:** [Describe connectivity between on-premise / private cloud and public cloud, e.g., dedicated private circuits, VPN]
- **Data Flow Controls:** [Describe how data flows between environments are governed and controlled]
- **Identity and Access:** [Describe how identity and access management spans hybrid environments]

#### 5.2.4 Community Cloud

Resources are shared among multiple organizations with shared interests (e.g., regulatory requirements, industry standards). Community cloud arrangements are subject to the same governance requirements as public cloud, with additional considerations for shared governance.

*Note whether the Organization participates in or is considering any community cloud arrangements.*

### 5.3 Cloud Workload Classification

*All cloud workloads must be classified to determine applicable governance requirements. The classification determines the level of risk assessment, approval authority, and control requirements.*

| Workload Tier | Definition | Examples | Approval Authority | Regulatory Notification |
|---|---|---|---|---|
| **Tier 1 — Critical** | Supports core business functions; disruption would materially impact financial services delivery or customers | Core banking, payment processing, customer data platforms | TRC + Board | BNM notification required |
| **Tier 2 — Important** | Supports important but non-core functions; disruption would significantly impact operations | HR systems, finance systems, collaboration platforms | TRC | BNM notification as applicable |
| **Tier 3 — Standard** | Supports general business functions; disruption would have limited operational impact | Development/test environments, internal tools | CCoE | Not typically required |
| **Tier 4 — Non-Production** | Non-production environments with no regulated data | Sandbox, proof-of-concept, training environments | Cloud Architecture Lead | Not required |

### 5.4 Cloud Adoption Lifecycle

*Define the stages through which a cloud service must pass from initial evaluation to retirement.*

```
[Identify Need]
      |
      v
[Cloud Intake Request]
      |
      v
[Feasibility Assessment] — IaaS/PaaS/SaaS classification, data classification, workload tier
      |
      v
[Risk Assessment] — Formal risk assessment per Section 8
      |
      v
[Due Diligence] — CSP evaluation per Section 9
      |
      v
[Regulatory Review] — BNM notification/approval as required
      |
      v
[Approval] — Per Decision Authority Matrix (Section 4.3)
      |
      v
[Contractual Negotiation] — Minimum contractual safeguards per Section 9.3
      |
      v
[Security Baseline Configuration] — Per Cloud Security Baseline
      |
      v
[Production Deployment]
      |
      v
[Ongoing Monitoring and Review] — Per Section 8.3
      |
      v
[Exit / Retirement] — Per Section 11
```

---

---

## 6. Data Residency Requirements

*This section defines the Organization's requirements for the geographic location of data processed, stored, and transmitted via cloud services. Data residency is a critical regulatory requirement under BNM RMiT and must be actively managed and monitored.*

### 6.1 Regulatory Basis for Data Residency

BNM's RMiT Policy Document imposes requirements on financial institutions regarding the location of data and systems. The Organization's data residency requirements are derived from:

- **BNM RMiT Section 17.3:** Requirements for data and system residency in cloud environments.
- **BNM RMiT Section 10:** Outsourcing requirements applicable to cloud arrangements involving offshore processing.
- **PDPA 2010, Section 129:** Restrictions on transfer of personal data outside Malaysia.
- **BNM Guidelines on Technology Risk Management:** [Reference specific guideline if applicable]

*Guidance: Review the current published version of BNM RMiT to confirm the precise data residency requirements applicable to your organization's licence type and the specific data categories involved. Requirements may vary for different types of financial institutions (licensed banks, insurance companies, payment system operators, etc.).*

### 6.2 Data Residency Classification Framework

#### 6.2.1 Data Categories and Residency Requirements

| Data Category | Description | Residency Requirement | Offshore Permitted? | Conditions for Offshore |
|---|---|---|---|---|
| **Customer Personal Data** | PII of Malaysian customers including name, NRIC, contact details, financial data | Malaysia-hosted primary copy | Conditional | BNM approval; PDPA cross-border transfer compliance; equivalent data protection |
| **Transaction Data** | Financial transaction records subject to BNM reporting obligations | Malaysia | Restricted | BNM specific approval required |
| **Regulatory Reporting Data** | Data used for regulatory submissions to BNM, SC, or other regulators | Malaysia | No | — |
| **Core Banking Data** | Account data, loan data, deposit data maintained in core banking system | Malaysia | Restricted | BNM specific approval required |
| **Payment System Data** | Data processed through BNM-regulated payment systems | Malaysia | No | — |
| **Internal Operational Data** | Employee data, operational records not subject to specific regulatory requirements | Malaysia preferred | Conditional | Risk assessment required; PDPA compliance |
| **Non-Sensitive Data** | Aggregated, anonymized, or publicly available data | No restriction | Yes | Must confirm anonymization is irreversible |

#### 6.2.2 Approved Jurisdictions for Offshore Data Processing

*Where offshore processing is permitted (subject to the conditions in the table above), only approved jurisdictions may be used. This list requires TRC approval to modify.*

| Jurisdiction | Approval Date | Permitted Data Categories | Conditions |
|---|---|---|---|
| [Country Name] | [Date] | [Data Categories] | [Conditions] |
| [Country Name] | [Date] | [Data Categories] | [Conditions] |

### 6.3 Data Residency Enforcement Mechanisms

*Define how data residency requirements are enforced technically and contractually. Both mechanisms are necessary — contractual commitments must be backed by technical controls.*

#### 6.3.1 Technical Enforcement

| Control | Description | Responsible Party |
|---|---|---|
| **Cloud Region Locking** | Cloud deployments are configured to use only approved regions. Infrastructure-as-code templates enforce region restrictions. | Cloud Architecture Lead |
| **Data Sovereignty Policy in IaC** | All infrastructure-as-code definitions include region constraints aligned with data residency policy. | Cloud Operations / DevSecOps |
| **Data Loss Prevention (DLP)** | DLP tools monitor for unauthorized transfer of regulated data to non-approved jurisdictions. | Cloud Security Architect |
| **Network Egress Controls** | Network policies restrict data egress to approved jurisdictions and endpoints. | Cloud Operations Lead |
| **Encryption Key Residency** | Encryption keys for regulated data are maintained in hardware security modules (HSMs) located in Malaysia. | Cloud Security Architect |
| **Data Replication Controls** | Automated replication is restricted to approved regions. Any cross-region replication requires explicit configuration review. | Cloud Operations Lead |

#### 6.3.2 Contractual Enforcement

All cloud service agreements for services hosting regulated data must include contractual commitments on:

- The specific data centre regions (and country) where data will be processed and stored.
- Prohibition on processing data in non-approved jurisdictions without prior written consent.
- Right to audit data location and confirm compliance with residency requirements.
- Notification obligations if the CSP proposes to move data to a different jurisdiction.
- Sub-processor restrictions ensuring that sub-processors also comply with data residency requirements.

### 6.4 Data Residency Risk Assessment

*A data residency risk assessment must be conducted for any cloud service that processes regulated data. The assessment must consider legal, regulatory, operational, and reputational risks.*

| Risk Factor | Assessment Criteria | Mitigation |
|---|---|---|
| **Jurisdictional Legal Risk** | Laws of the host country that may compel disclosure to foreign governments | Contractual safeguards; encryption with keys held in Malaysia; legal opinion |
| **Regulatory Non-Compliance Risk** | Risk of BNM action for hosting regulated data in non-approved location | Strict region controls; contractual controls; ongoing monitoring |
| **Data Sovereignty Breach Risk** | Risk of data being accessed by unauthorized foreign entities | Encryption; access controls; audit logging |
| **Sub-Processor Risk** | Risk of CSP engaging sub-processors in non-approved jurisdictions | Contractual sub-processor controls; approved sub-processor lists |

### 6.5 Data Residency Monitoring and Assurance

*Data residency compliance must be subject to ongoing monitoring, not just assessed at the point of adoption.*

| Assurance Activity | Frequency | Responsible Party | Output |
|---|---|---|---|
| Cloud configuration review (region verification) | Quarterly | Cloud Operations | Configuration audit report |
| CSP residency certification review | Annual | Vendor Management | Updated residency certification |
| Data flow mapping review | Annual | Cloud Architecture Lead | Updated data flow maps |
| Penetration test / data location verification | Annual | Internal Audit / Third Party | Assurance report |
| Contractual compliance review | Annual | Legal / Compliance | Contract compliance report |
| BNM reporting on data residency | As required by BNM | Compliance | BNM submission |

### 6.6 Data Residency Register

*Maintain a register of all cloud-hosted data assets and their confirmed residency locations. This register supports regulatory reporting and audit.*

| System / Service | CSP | Region(s) | Data Categories Hosted | Residency Compliant | Last Verified | Next Review |
|---|---|---|---|---|---|---|
| [System Name] | [CSP] | [Region, Country] | [Data Categories] | [Yes / No / Conditional] | [Date] | [Date] |
| [System Name] | [CSP] | [Region, Country] | [Data Categories] | [Yes / No / Conditional] | [Date] | [Date] |

---

---

## 7. Shared Responsibility Matrix

*The shared responsibility model defines the division of security and operational responsibilities between the Organization and the cloud service provider (CSP). Understanding and documenting this division is critical to ensuring no gaps exist in coverage. The matrix will vary depending on the cloud service model (IaaS, PaaS, SaaS).*

### 7.1 Shared Responsibility Principles

The Organization acknowledges the following foundational principles of the shared responsibility model:

1. **Regulatory responsibility cannot be outsourced.** Regardless of the division of operational responsibilities with a CSP, [Organization Name] retains full regulatory accountability to BNM for all obligations under its financial institution licence.
2. **CSP responsibility does not equal CSP liability.** Contractual indemnities and liability caps in CSP agreements may not fully compensate the Organization for regulatory, reputational, or customer harm resulting from a CSP failure.
3. **Gaps must be actively identified and closed.** The Organization must proactively identify areas where CSP responsibilities end and the Organization's begin, and ensure adequate internal controls cover the Organization's side of the boundary.
4. **Shared responsibility models must be communicated to staff.** Cloud users must understand what the CSP does and does not protect to avoid incorrect assumptions about coverage.

### 7.2 Generic Shared Responsibility Model by Service Type

*This table provides a high-level generic view of responsibility allocation. Service-specific matrices (Section 7.3) provide more granular detail.*

| Responsibility Domain | IaaS | PaaS | SaaS |
|---|---|---|---|
| **Physical Security** (data centre, hardware) | CSP | CSP | CSP |
| **Host Infrastructure** (servers, networking, storage) | CSP | CSP | CSP |
| **Hypervisor / Virtualization** | CSP | CSP | CSP |
| **Operating System** | **Organization** | CSP | CSP |
| **Network Controls** (virtual networks, firewalls) | **Shared** | **Shared** | CSP |
| **Middleware / Runtime** | **Organization** | CSP | CSP |
| **Application Security** | **Organization** | **Organization** | **Shared** |
| **Data Classification and Protection** | **Organization** | **Organization** | **Organization** |
| **Identity and Access Management** | **Organization** | **Organization** | **Shared** |
| **Encryption (at rest)** | **Shared** | **Shared** | **Shared** |
| **Encryption (in transit)** | **Shared** | **Shared** | **Shared** |
| **Key Management** | **Organization** | **Shared** | **Shared** |
| **Vulnerability Management** (OS/application) | **Organization** | **Shared** | CSP |
| **Patch Management** (OS) | **Organization** | CSP | CSP |
| **Logging and Monitoring** | **Shared** | **Shared** | **Shared** |
| **Incident Response** | **Shared** | **Shared** | **Shared** |
| **Backup and Recovery** | **Shared** | **Shared** | **Shared** |
| **Business Continuity** | **Shared** | **Shared** | **Shared** |
| **Regulatory Compliance** | **Organization** | **Organization** | **Organization** |

*Legend: **Organization** = [Organization Name] is solely responsible; **CSP** = Cloud Service Provider is solely responsible; **Shared** = Both parties have defined responsibilities*

### 7.3 Service-Specific Shared Responsibility Matrices

*Create a separate detailed shared responsibility matrix for each material cloud service or CSP. Each matrix should be co-developed with the CSP and reviewed annually.*

#### 7.3.1 [CSP Name] — IaaS Shared Responsibility Matrix

| Control Domain | Specific Control | CSP Responsible | Organization Responsible | Shared | Control Evidence |
|---|---|---|---|---|---|
| **Physical Security** | Data centre physical access controls | ✓ | | | CSP SOC 2 / ISO 27001 cert |
| **Physical Security** | Environmental controls (fire, flood, power) | ✓ | | | CSP audit report |
| **Network Security** | Perimeter network security | ✓ | | | CSP documentation |
| **Network Security** | Virtual network segmentation | | ✓ | | Network diagram |
| **Network Security** | Web Application Firewall | | ✓ | | WAF configuration |
| **Network Security** | DDoS protection (basic) | ✓ | | | CSP service terms |
| **Network Security** | DDoS protection (advanced) | | ✓ | | Subscription confirmation |
| **Identity Management** | CSP identity platform management | ✓ | | | CSP documentation |
| **Identity Management** | User account provisioning / deprovisioning | | ✓ | | IAM policy |
| **Identity Management** | Privileged access management | | ✓ | | PAM tool records |
| **Identity Management** | Multi-factor authentication (MFA) | | | ✓ | MFA policy + CSP config |
| **Encryption** | Encryption-at-rest (infrastructure level) | ✓ | | | CSP encryption documentation |
| **Encryption** | Customer-managed encryption keys | | ✓ | | KMS configuration |
| **Encryption** | Encryption-in-transit (TLS) | | | ✓ | TLS policy + CSP defaults |
| **Vulnerability Management** | Hypervisor patching | ✓ | | | CSP maintenance schedule |
| **Vulnerability Management** | Guest OS patching | | ✓ | | Patch management records |
| **Vulnerability Management** | Application patching | | ✓ | | Change management records |
| **Logging** | Infrastructure-level logging (CSP) | ✓ | | | CSP audit logs |
| **Logging** | Application-level logging | | ✓ | | Log management policy |
| **Logging** | Log retention (per regulatory requirements) | | | ✓ | Log retention policy |
| **Incident Response** | CSP infrastructure incident response | ✓ | | | CSP IR plan |
| **Incident Response** | Organization-side incident response | | ✓ | | Organization IR plan |
| **Incident Response** | Coordinated response for shared incidents | | | ✓ | CSP IR escalation contacts |
| **Backup** | Infrastructure snapshot capability | ✓ | | | CSP backup services |
| **Backup** | Backup schedule and retention management | | ✓ | | Backup policy |
| **Compliance** | CSP regulatory certifications (ISO, SOC) | ✓ | | | Annual certification review |
| **Compliance** | Organization regulatory compliance (BNM) | | ✓ | | This framework |

#### 7.3.2 [CSP Name] — SaaS Shared Responsibility Matrix

*Create a similar detailed table for each material SaaS provider, focusing on the controls where the Organization retains responsibility even within a fully managed SaaS environment.*

| Control Domain | Specific Control | CSP Responsible | Organization Responsible | Shared | Control Evidence |
|---|---|---|---|---|---|
| **Application Security** | Application security patches and updates | ✓ | | | CSP release notes |
| **Application Security** | Application vulnerability management | ✓ | | | CSP security bulletins |
| **Application Security** | Application configuration hardening | | ✓ | | Configuration review |
| **Data Protection** | Data encryption at rest | ✓ | | | CSP documentation |
| **Data Protection** | Data classification and labelling | | ✓ | | Data classification policy |
| **Data Protection** | Data retention and disposal | | | ✓ | SaaS retention settings + policy |
| **Access Management** | User provisioning and deprovisioning | | ✓ | | IAM process |
| **Access Management** | Role-based access control configuration | | ✓ | | RBAC policy |
| **Access Management** | Single Sign-On (SSO) integration | | | ✓ | SSO configuration |
| **Access Management** | MFA enforcement | | | ✓ | MFA policy + CSP config |
| **Monitoring** | Platform-level security monitoring | ✓ | | | CSP SOC reports |
| **Monitoring** | User activity monitoring | | | ✓ | SIEM integration |
| **Compliance** | Data Processing Agreement (DPA) | | | ✓ | Executed DPA |

### 7.4 Responsibility Gap Analysis

*Conduct and document a gap analysis to identify areas where neither the CSP nor the Organization has clearly defined responsibility. Gaps must be remediated through either contractual negotiation or implementation of additional controls.*

| Control Area | Identified Gap | Risk Level | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| [Control Area] | [Description of gap] | [High/Med/Low] | [Action to close gap] | [Owner] | [Date] | [Open/Closed] |
| [Control Area] | [Description of gap] | [High/Med/Low] | [Action to close gap] | [Owner] | [Date] | [Open/Closed] |

### 7.5 CSP Assurance and Audit Rights

*Document the assurance mechanisms available to the Organization to verify that the CSP is fulfilling its responsibilities.*

| Assurance Mechanism | Description | Frequency | CSP Obligation |
|---|---|---|---|
| **SOC 2 Type II Report** | Independent audit of CSP's security, availability, and confidentiality controls | Annual | CSP provides report annually |
| **ISO/IEC 27001 Certificate** | Certification of CSP's information security management system | Annual | CSP provides current certificate |
| **ISO/IEC 27017 / 27018 Certification** | Cloud-specific security controls certification | Annual | CSP provides if available |
| **Penetration Test Summary** | Summary of CSP's penetration testing program results | Annual | CSP provides executive summary |
| **Right to Audit Clause** | Contractual right to conduct or commission independent audits of CSP | As required | Per contractual terms |
| **Security Questionnaire / CAIQ** | CSA Consensus Assessment Initiative Questionnaire responses | At onboarding; annually | CSP completes CAIQ |
| **Incident Notification** | CSP obligation to notify the Organization of security incidents | Within agreed timeframe | Per contractual SLA |

---

---

## 8. Cloud Risk Management

*This section establishes the risk management process applicable to cloud services. Cloud risk is a subset of technology risk and is managed within the Organization's Enterprise Risk Management (ERM) framework.*

### 8.1 Cloud Risk Assessment Process

*All cloud services must undergo a risk assessment appropriate to their classification and materiality. The risk assessment process follows the Organization's standard risk assessment methodology.*

#### 8.1.1 Risk Assessment Triggers

A formal cloud risk assessment must be conducted:

- Prior to adopting any new cloud service (mandatory for all tiers).
- When a cloud service is materially changed (e.g., service model change, data classification change, new data types).
- When a material change occurs in the CSP (e.g., acquisition, change of ownership, significant security incident).
- Annually as part of the cloud service review cycle.
- When directed by TRC, Internal Audit, or BNM.

#### 8.1.2 Risk Assessment Methodology

| Step | Activity | Responsible |
|---|---|---|
| 1 | **Scope Definition** — Define the cloud service, data types, workload tier, and integration points | Cloud Architecture Lead |
| 2 | **Threat Identification** — Identify threats specific to the cloud environment and service model | Cloud Security Architect |
| 3 | **Vulnerability Assessment** — Assess vulnerabilities in the Organization's cloud configuration and controls | Cloud Security Architect |
| 4 | **Impact Assessment** — Assess the potential impact of identified threats on confidentiality, integrity, availability, and regulatory compliance | Business Unit / Risk Team |
| 5 | **Likelihood Assessment** — Assess the likelihood of threat occurrence considering existing controls | Risk Team |
| 6 | **Risk Rating** — Calculate inherent and residual risk ratings using the Organization's risk matrix | Risk Team |
| 7 | **Risk Treatment** — Identify and assign risk treatment actions (Accept, Mitigate, Transfer, Avoid) | CCoE |
| 8 | **Approval** — Obtain appropriate approval per Section 4.3 | CCoE / TRC / Board |
| 9 | **Documentation** — Record risk assessment in the Cloud Risk Register | Cloud Architecture Lead |
| 10 | **Monitoring** — Monitor risk treatment progress and residual risk | Cloud Operations |

#### 8.1.3 Cloud-Specific Risk Categories

| Risk Category | Description | Key Risk Indicators |
|---|---|---|
| **Concentration Risk** | Over-dependence on a single CSP or geographic region | Percentage of critical workloads on a single CSP |
| **Data Residency Risk** | Data hosted in non-compliant jurisdictions | Number of residency policy violations |
| **Vendor Lock-in Risk** | Inability to migrate away from a CSP at acceptable cost | Proprietary service dependencies; portability assessment score |
| **Multi-tenancy Risk** | Risk of data leakage or interference between tenants on shared infrastructure | CSP isolation certifications; penetration test results |
| **Insider Threat (CSP)** | Risk of malicious or negligent actions by CSP personnel | CSP access controls; background check policy; privileged access logs |
| **Supply Chain Risk** | Risk from CSP's own sub-processors and suppliers | CSP sub-processor list; sub-processor audit rights |
| **Regulatory Change Risk** | Risk that regulatory changes require material changes to cloud architecture | Regulatory monitoring program |
| **Availability Risk** | Risk of cloud service outage impacting business operations | CSP SLA; redundancy architecture; DR test results |
| **Security Breach Risk** | Risk of unauthorized access to cloud-hosted data | Cloud security posture scores; vulnerability assessment results |
| **Contractual Risk** | Risk that CSP contracts are inadequate to protect the Organization | Contract review findings |

### 8.2 Cloud Risk Register

*The Cloud Risk Register is the central repository of identified cloud risks. It must be maintained in the Organization's GRC platform and reviewed at each CCoE meeting.*

| Risk ID | Risk Description | Category | Inherent Risk | Control(s) in Place | Residual Risk | Risk Owner | Treatment | Target Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| CLD-001 | [Risk Description] | [Category] | [High/Med/Low] | [Controls] | [High/Med/Low] | [Owner] | [Mitigate/Accept/Transfer] | [Date] | [Open/Closed] |
| CLD-002 | [Risk Description] | [Category] | [High/Med/Low] | [Controls] | [High/Med/Low] | [Owner] | [Mitigate/Accept/Transfer] | [Date] | [Open/Closed] |

### 8.3 Ongoing Cloud Risk Monitoring

*Risk assessment is not a one-time activity. Ongoing monitoring ensures that the risk profile of cloud services remains understood and managed.*

#### 8.3.1 Key Risk Indicators (KRIs)

| KRI | Description | Threshold | Reporting Frequency | Owner |
|---|---|---|---|---|
| Cloud Security Posture Score | Aggregated security posture rating from CSPM tools | [Threshold, e.g., >90%] | Monthly | Cloud Security Architect |
| Critical Vulnerability Remediation SLA | % of critical vulnerabilities remediated within SLA | [Threshold, e.g., >95%] | Monthly | Cloud Operations Lead |
| Data Residency Compliance Rate | % of cloud-hosted regulated data confirmed in approved regions | [Threshold, e.g., 100%] | Quarterly | Cloud Architecture Lead |
| CSP Availability (SLA Achievement) | CSP uptime against contracted SLA | [Threshold, e.g., ≥99.9%] | Monthly | Cloud Operations Lead |
| Unauthorized Cloud Service Detection | Number of unapproved cloud services detected (shadow IT) | [Threshold, e.g., 0] | Monthly | Cloud Security Architect |
| Cloud Access Review Completion | % of privileged cloud access reviews completed on schedule | [Threshold, e.g., 100%] | Quarterly | IAM / Cloud Security |
| Open High/Critical Cloud Risks | Number of open High or Critical risks in Cloud Risk Register | [Threshold, e.g., <5] | Monthly | Cloud Architecture Lead |

#### 8.3.2 Key Performance Indicators (KPIs)

| KPI | Description | Target | Reporting Frequency | Owner |
|---|---|---|---|---|
| Cloud Cost vs. Budget | Actual cloud expenditure vs. approved budget | ±[X]% | Monthly | Cloud Operations Lead |
| Cloud Adoption Rate | Number of workloads migrated to approved cloud vs. plan | [Target] | Quarterly | Cloud Architecture Lead |
| Cloud Incident Response Time | Mean time to respond to cloud security incidents | <[X] hours | Monthly | Cloud Security Architect |
| Vendor Review Completion | % of annual CSP reviews completed on schedule | 100% | Annual | Vendor Management |
| Policy Compliance Rate | % of cloud deployments compliant with Cloud Security Baseline | >95% | Monthly | Cloud Security Architect |

---

---

## 9. Vendor and Third-Party Management

*Cloud service providers are a form of technology third party and are subject to the Organization's Vendor Management Policy. This section addresses cloud-specific vendor management requirements beyond those covered in the general Vendor Management Policy.*

### 9.1 Cloud Service Provider Approval Process

*Only approved CSPs may be used for hosting Organization data or systems. The approval process ensures that CSPs meet the Organization's minimum standards before engagement.*

#### 9.1.1 CSP Approval Criteria

Prospective CSPs must be evaluated against the following minimum criteria:

| Evaluation Area | Minimum Requirement |
|---|---|
| **Financial Stability** | CSP must demonstrate financial viability and stability (financial statements review, credit ratings) |
| **Regulatory Compliance** | CSP must hold relevant certifications (ISO 27001, SOC 2 Type II, ISO 27017/27018 where applicable) |
| **Security Controls** | CSP must meet requirements defined in the Organization's Cloud Security Assessment questionnaire |
| **Data Residency** | CSP must provide committed data residency in Malaysia or approved jurisdictions |
| **Audit Rights** | CSP must contractually grant audit rights to the Organization and BNM |
| **Incident Response** | CSP must demonstrate mature incident response capabilities and notification SLAs |
| **Business Continuity** | CSP must demonstrate BCP/DR capabilities meeting the Organization's RTO/RPO requirements |
| **Exit Support** | CSP must commit to supporting data portability and exit in a defined timeframe |
| **Sub-processor Controls** | CSP must disclose sub-processors and commit to notifying changes |
| **BNM Compliance** | CSP must acknowledge and support the Organization's BNM regulatory obligations |

#### 9.1.2 Approved Cloud Service Provider Register

*The Approved CSP Register is maintained by the CCoE and reviewed quarterly. Only CSPs on the approved register may be engaged without a new approval process.*

| CSP Name | Services Approved | Approval Date | Approval Authority | Certification(s) Held | Next Review Date | Status |
|---|---|---|---|---|---|---|
| [CSP Name] | [IaaS/PaaS/SaaS] | [Date] | [CCoE/TRC] | [ISO 27001, SOC 2, etc.] | [Date] | Active |
| [CSP Name] | [IaaS/PaaS/SaaS] | [Date] | [CCoE/TRC] | [ISO 27001, SOC 2, etc.] | [Date] | Active |

### 9.2 CSP Due Diligence

*Due diligence must be conducted before approving a new CSP and repeated annually for material cloud arrangements.*

#### 9.2.1 Initial Due Diligence

| Due Diligence Activity | Description | Responsible |
|---|---|---|
| **Security Assessment** | Complete CSA CAIQ or equivalent questionnaire; review CSP's security documentation | Cloud Security Architect |
| **Certification Review** | Verify currency of ISO 27001, SOC 2 Type II, and other relevant certifications | Vendor Management |
| **Financial Review** | Review CSP's financial stability indicators | Finance / Procurement |
| **Legal Review** | Review CSP's standard contract terms; identify gaps against minimum requirements | Legal |
| **Data Protection Review** | Assess CSP's privacy and data protection commitments against PDPA requirements | Compliance / DPO |
| **BNM Compliance Review** | Assess CSP's ability to support BNM audit rights and regulatory obligations | Compliance |
| **Business Continuity Review** | Review CSP's BCP/DR documentation and historical availability data | Cloud Operations |
| **Reference Checks** | Obtain references from comparable financial institution customers of the CSP | Vendor Management |
| **Site Inspection** | [If applicable] Physical inspection of CSP's data centre facilities | Cloud Architecture Lead |

#### 9.2.2 Annual Due Diligence Review

| Review Activity | Frequency | Responsible |
|---|---|---|
| Updated CSP Security Questionnaire | Annual | Cloud Security Architect |
| Updated Certification Verification | Annual | Vendor Management |
| SLA and Performance Review | Quarterly | Cloud Operations Lead |
| Incident and Breach Review | Annual (+ ad hoc post-incident) | Cloud Security Architect |
| Sub-processor Change Review | Annual (+ ad hoc on change) | Legal / Compliance |
| Financial Stability Review | Annual | Finance |
| Contract Review | Annual | Legal |

### 9.3 Minimum Contractual Requirements

*All cloud service agreements for services hosting regulated data or supporting material systems must include the following minimum contractual provisions, as required by BNM RMiT.*

| Contractual Requirement | Description | RMiT Reference |
|---|---|---|
| **Data Ownership** | Explicit confirmation that all data remains the property of the Organization | RMiT 17 |
| **Data Residency Commitment** | Specific commitment to data location(s) and prohibition on unauthorized relocation | RMiT 17.3 |
| **Security Standards** | CSP's obligation to maintain defined security standards and certifications | RMiT 17 |
| **Audit Rights** | Organization's right to conduct or commission audits; CSP's obligation to cooperate with BNM examinations | RMiT 10, 17 |
| **Incident Notification** | CSP's obligation to notify the Organization within [X] hours of a security incident affecting Organization data | RMiT 11 |
| **Data Portability** | CSP's obligation to provide data in a standard, portable format upon request | RMiT 17.5 |
| **Exit Assistance** | CSP's obligation to provide transition assistance for a defined period upon contract termination | RMiT 17.5 |
| **Sub-processor Notification** | CSP's obligation to notify proposed changes to sub-processors with sufficient notice for the Organization to object | PDPA |
| **Business Continuity** | CSP's BCP/DR commitments including RTO/RPO targets | RMiT 11 |
| **Regulatory Compliance** | CSP's acknowledgment of and cooperation with the Organization's regulatory obligations | RMiT 10 |
| **Confidentiality** | CSP's obligation to maintain confidentiality of Organization data | BNM FSA/IFSA |
| **Liability and Indemnity** | Defined liability framework for CSP failures and breaches | Negotiated |
| **Governing Law** | Malaysian law as the governing law; Malaysian courts as the jurisdiction | Legal requirement |
| **Service Level Agreement** | Defined SLAs for availability, performance, and support response times | BNM RMiT |

### 9.4 Concentration Risk Management

*Concentration risk arises when the Organization is overly dependent on a single CSP or a small number of CSPs, creating systemic vulnerability.*

#### 9.4.1 Concentration Risk Appetite

The Organization's cloud concentration risk appetite is as follows:

| Concentration Metric | Risk Appetite Limit | Current Position | Breach Action |
|---|---|---|---|
| Single CSP — % of critical workloads | Maximum [X]% | [Current %] | Escalate to TRC; develop diversification plan |
| Single CSP — % of total cloud spend | Maximum [X]% | [Current %] | Escalate to CCoE; review sourcing strategy |
| Single geographic region | Maximum [X]% of workloads per region | [Current %] | Architecture review; multi-region deployment |
| Single CSP — total number of critical systems | Maximum [X] critical systems | [Current count] | Escalate to TRC |

#### 9.4.2 Concentration Risk Monitoring

Concentration risk is monitored quarterly by the Cloud Architecture Lead and reported to the TRC. Where concentration limits approach or breach thresholds, a remediation plan must be developed within [X] days of identification.

---

---

## 10. Security and Compliance Controls

*This section defines the security and compliance control requirements applicable to all cloud environments. Controls are organized by domain and are derived from the Organization's Cloud Security Baseline, which is a separately maintained technical document.*

### 10.1 Cloud Security Baseline

*The Cloud Security Baseline defines the minimum security configuration requirements for all cloud deployments. This section summarizes the control domains; the full technical baseline is maintained in [reference to Cloud Security Baseline document].*

| Control Domain | Key Requirements | Baseline Reference |
|---|---|---|
| **Identity and Access Management** | MFA mandatory for all cloud console access; privileged access via PAM; access reviews quarterly | CSB-IAM |
| **Network Security** | Virtual network segmentation; WAF for internet-facing applications; no unrestricted inbound access | CSB-NET |
| **Data Protection** | Encryption at rest (AES-256 minimum); encryption in transit (TLS 1.2+); customer-managed keys for Restricted data | CSB-DATA |
| **Logging and Monitoring** | Centralized log management; SIEM integration; 12-month log retention; alerting on critical events | CSB-LOG |
| **Vulnerability Management** | Weekly vulnerability scans; critical vulnerabilities patched within [X] days; annual penetration testing | CSB-VULN |
| **Configuration Management** | Infrastructure-as-code only; no manual production changes; configuration drift detection | CSB-CFG |
| **Incident Response** | Cloud-specific incident response playbooks; CSP escalation contacts; 24/7 alerting capability | CSB-IR |
| **Backup and Recovery** | Daily backups; tested restore procedures; off-site backup storage; backup encryption | CSB-BCK |
| **Secure Development** | DevSecOps pipeline; SAST/DAST in CI/CD; container image scanning; secrets management | CSB-DEV |
| **Endpoint and Privileged Access** | Privileged Access Workstations (PAWs) for cloud console access; no shared accounts | CSB-PAM |

### 10.2 Security Posture Management

*Cloud Security Posture Management (CSPM) provides continuous monitoring of cloud configurations against security baselines and compliance frameworks.*

| CSPM Activity | Tool / Method | Frequency | Owner | Output |
|---|---|---|---|---|
| Continuous configuration compliance monitoring | [CSPM Tool Name] | Continuous | Cloud Security Architect | Real-time dashboard + weekly report |
| Benchmark compliance assessment (CIS, NIST) | [Assessment Tool] | Monthly | Cloud Security Architect | Compliance score report |
| Data classification enforcement monitoring | [DLP Tool] | Continuous | Cloud Security Architect | DLP policy violation alerts |
| Identity risk monitoring | [IAM Tool] | Continuous | IAM / Cloud Security | Risky sign-in and access alerts |
| Secrets and credential scanning | [Secrets Scanner] | Per code commit | DevSecOps | Pipeline blocking + alerts |

### 10.3 DevSecOps and Secure Cloud Development

*Where the Organization develops or customizes applications deployed in cloud environments, security must be integrated into the development and deployment lifecycle.*

| Stage | Security Activity | Tool / Method |
|---|---|---|
| **Plan** | Threat modelling for cloud architectures | Threat modelling workshop; STRIDE methodology |
| **Code** | Static Application Security Testing (SAST) | [SAST Tool] |
| **Build** | Software Composition Analysis (SCA) — open-source dependencies | [SCA Tool] |
| **Build** | Container image vulnerability scanning | [Container Scanner] |
| **Test** | Dynamic Application Security Testing (DAST) | [DAST Tool] |
| **Deploy** | Infrastructure-as-code security scanning | [IaC Scanner, e.g., Checkov, tfsec] |
| **Deploy** | Cloud configuration hardening verification | Cloud Security Baseline checklist |
| **Operate** | Runtime application self-protection (RASP) | [RASP Tool, if applicable] |
| **Monitor** | Continuous security monitoring | SIEM + CSPM |

### 10.4 Compliance Monitoring and Reporting

*Cloud compliance monitoring ensures ongoing adherence to regulatory requirements and internal policies.*

| Compliance Framework | Monitoring Activity | Frequency | Responsible |
|---|---|---|---|
| BNM RMiT | Control self-assessment against RMiT requirements | Annual (minimum) | Compliance |
| PDPA | Data processing activity review for cloud-hosted personal data | Annual | DPO / Compliance |
| ISO 27001 | Internal ISMS audit covering cloud controls | Annual | Internal Audit |
| Cloud Security Baseline | Automated CSPM compliance scan | Continuous | Cloud Security Architect |
| Contractual SLAs | CSP performance monitoring | Monthly | Cloud Operations Lead |

---

---

## 11. Business Continuity and Exit Strategy

*BNM RMiT requires financial institutions to maintain viable exit strategies for all material cloud arrangements. This section defines the Organization's business continuity requirements for cloud services and establishes the framework for exit planning.*

### 11.1 Business Continuity Requirements for Cloud Services

*Cloud services supporting critical and important workloads must meet defined RTO and RPO requirements. These requirements must be reflected in cloud architecture design and validated through regular testing.*

#### 11.1.1 Recovery Time and Point Objectives

| Workload Tier | Maximum RTO | Maximum RPO | Minimum Availability SLA |
|---|---|---|---|
| **Tier 1 — Critical** | [X] hours | [Y] minutes | 99.99% |
| **Tier 2 — Important** | [X] hours | [Y] hours | 99.9% |
| **Tier 3 — Standard** | [X] hours | [Y] hours | 99.5% |
| **Tier 4 — Non-Production** | Best effort | Best effort | Best effort |

#### 11.1.2 Cloud Resilience Architecture Requirements

| Requirement | Description | Applicable Tiers |
|---|---|---|
| **Multi-Availability Zone (Multi-AZ)** | Critical workloads must span multiple availability zones within a region | Tier 1, Tier 2 |
| **Multi-Region** | Most critical workloads should have failover capability to a secondary region | Tier 1 (where applicable) |
| **Active-Active or Active-Passive** | Define the failover mode for each Tier 1 workload | Tier 1 |
| **Circuit Breakers** | Implement circuit breaker patterns to prevent cascading failures | Tier 1, Tier 2 |
| **Load Balancing** | All internet-facing Tier 1/2 services must use cloud-native or managed load balancing | Tier 1, Tier 2 |
| **Auto-Scaling** | Services must be capable of automatically scaling to meet peak demand | Tier 1, Tier 2 |

#### 11.1.3 Business Continuity Testing

| Test Type | Description | Frequency | Participants | Output |
|---|---|---|---|---|
| **Failover Test** | Test failover to secondary availability zone or region | Annual (minimum) | Cloud Operations, Business Unit | Test report with RTO/RPO results |
| **Backup Restore Test** | Test restoration of data from cloud backups | Semi-annually | Cloud Operations | Restore validation report |
| **BCP Tabletop Exercise** | Scenario-based exercise simulating CSP outage | Annual | Senior Management, Cloud Operations, Business | Exercise report and gap analysis |
| **CSP Major Outage Simulation** | Simulate complete loss of primary CSP region | Annual | All relevant teams | Full DR test report |

### 11.2 Cloud Exit Strategy

*BNM RMiT Section 17.5 requires financial institutions to maintain a viable exit strategy for material cloud arrangements. The exit strategy must be defined before a cloud service is adopted and reviewed annually.*

#### 11.2.1 Exit Strategy Requirements

For each material cloud service, the following exit strategy components must be documented:

| Component | Description |
|---|---|
| **Exit Triggers** | Defined circumstances that would trigger an exit (e.g., CSP insolvency, regulatory direction, SLA breach, commercial terms) |
| **Exit Options** | Identified alternative platforms or architectures that could host the workload post-exit |
| **Data Portability** | Confirmed ability to export all data in standard, portable formats |
| **Migration Timeline** | Estimated timeline for migration, including data export, re-platform/re-host, testing, and cutover |
| **Cost of Exit** | Estimated financial cost of exit, including migration costs, parallel running costs, and contractual penalties |
| **Dependencies** | Identified dependencies on CSP-proprietary services that would increase exit complexity |
| **Exit Team** | Defined team responsible for executing the exit |
| **Contractual Provisions** | Confirmation that the CSP contract includes exit assistance and data portability provisions |

#### 11.2.2 Cloud Exit Register

*Maintain a Cloud Exit Register that documents exit strategy details for all material cloud services. Review annually as part of the cloud service review cycle.*

| System / Service | CSP | Workload Tier | Exit Trigger Defined | Portability Confirmed | Alternative Platform Identified | Estimated Exit Timeline | Last Reviewed |
|---|---|---|---|---|---|---|---|
| [System Name] | [CSP] | Tier [1/2/3] | [Yes/No] | [Yes/Partial/No] | [Alternative] | [X months] | [Date] |
| [System Name] | [CSP] | Tier [1/2/3] | [Yes/No] | [Yes/Partial/No] | [Alternative] | [X months] | [Date] |

#### 11.2.3 Vendor Lock-in Risk Management

*Vendor lock-in occurs when proprietary CSP services create barriers to migration. The Organization must actively manage lock-in risk through architectural decisions and contractual protections.*

| Lock-in Factor | Risk Level | Mitigation Strategy |
|---|---|---|
| Use of CSP-proprietary managed databases (no standard SQL) | High | Prefer open-source compatible database engines; implement abstraction layers |
| Use of CSP-proprietary serverless functions | Medium | Containerize where possible; maintain documentation for re-implementation |
| CSP-specific AI/ML services | Medium | Evaluate portability at adoption; maintain training data portability |
| CSP-specific networking constructs | Low | Use standard networking patterns where possible; document CSP-specific configurations |
| Long-term commercial commitments (reserved instances) | Medium | Structure commitments to align with exit strategy timelines; include break provisions where possible |

---

---

## 12. Roles and Responsibilities

*This section defines the roles and responsibilities of all parties involved in cloud governance at [Organization Name]. Clear accountability is essential for effective governance and regulatory compliance.*

### 12.1 RACI Matrix

*The RACI matrix uses the following definitions:*
- **R — Responsible:** The party who performs the activity or produces the output.
- **A — Accountable:** The party who is ultimately answerable for the outcome. There should be only one Accountable party per activity.
- **C — Consulted:** The party who provides input or advice before or during the activity.
- **I — Informed:** The party who is notified of the activity or outcome but does not perform it.

| Activity | Board / BRC | CRO | CTO / CIO | CISO | Cloud Architecture Lead | Cloud Security Architect | Cloud Operations Lead | Business Unit Head | Compliance | Legal | Vendor Management | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Governance and Strategy** | | | | | | | | | | | | |
| Approve Cloud Governance Framework | A | C | C | C | R | C | C | I | C | C | I | I |
| Approve Cloud Risk Appetite | A | R | C | C | C | I | I | C | C | I | I | I |
| Approve Material Cloud Outsourcing | A | C | C | C | C | I | I | I | C | C | I | I |
| BNM Notification / Approval for Cloud | I | C | C | I | C | I | I | I | R/A | C | I | I |
| **Cloud Adoption** | | | | | | | | | | | | |
| Submit Cloud Adoption Request | I | I | I | I | I | I | I | R | I | I | I | I |
| Conduct Cloud Risk Assessment | I | I | I | C | A | R | C | C | C | I | I | I |
| Conduct CSP Due Diligence | I | I | I | C | C | C | I | I | C | C | R/A | I |
| Review and Approve CSP Contract | I | I | I | C | C | I | I | I | C | R/A | C | I |
| Approve Cloud Service (non-material) | I | I | I | C | A | C | I | I | I | I | I | I |
| Approve Cloud Service (material) | I | A | C | C | C | I | I | I | C | C | I | I |
| **Cloud Security** | | | | | | | | | | | | |
| Develop and Maintain Cloud Security Baseline | I | I | C | A | C | R | C | I | I | I | I | I |
| Monitor Cloud Security Posture | I | I | I | A | C | R | C | I | I | I | I | I |
| Conduct Cloud Penetration Testing | I | I | I | A | C | R | C | I | I | I | I | C |
| Manage Cloud Incidents | I | I | C | A | C | R | R | I | I | I | I | I |
| Manage Cloud Access Reviews | I | I | C | A | C | R | C | I | I | I | I | I |
| **Data and Compliance** | | | | | | | | | | | | |
| Maintain Data Residency Register | I | I | I | I | A | R | C | C | C | I | I | I |
| Monitor Data Residency Compliance | I | I | I | I | A | R | C | I | C | I | I | I |
| Maintain Cloud Risk Register | I | I | C | C | R/A | C | C | I | C | I | I | I |
| Report Cloud KPIs/KRIs to TRC | I | C | C | C | R/A | C | C | I | I | I | I | I |
| **Vendor Management** | | | | | | | | | | | | |
| Maintain Approved CSP Register | I | I | I | I | A | C | I | I | I | I | R | I |
| Conduct Annual CSP Review | I | I | I | C | C | C | C | I | C | I | R/A | I |
| Monitor CSP SLAs | I | I | I | I | I | I | R/A | C | I | I | C | I |
| **Business Continuity** | | | | | | | | | | | | |
| Maintain Cloud Exit Register | I | I | I | I | R/A | C | C | C | C | C | I | I |
| Conduct Cloud BCP Test | I | I | A | C | C | C | R | C | I | I | I | C |
| **Audit and Assurance** | | | | | | | | | | | | |
| Conduct Internal Cloud Audit | I | I | I | C | C | C | C | I | C | I | I | R/A |
| Remediate Cloud Audit Findings | I | I | A | C | R | R | R | R | I | I | I | I |
| Facilitate External / Regulatory Audit | I | I | C | C | C | C | C | I | R/A | C | C | I |

### 12.2 Individual Role Responsibilities

*This section provides a narrative description of cloud governance responsibilities for each key role.*

#### 12.2.1 Board of Directors / Board Risk Committee

- Provide ultimate oversight and accountability for cloud governance.
- Approve cloud risk appetite and material cloud outsourcing arrangements.
- Receive and challenge periodic cloud risk reporting.
- Ensure adequate resourcing for cloud governance activities.

#### 12.2.2 Chief Risk Officer (CRO)

- Accountable for the Organization's technology risk framework, including cloud risk.
- Chair the Technology Risk Committee.
- Approve cloud risk appetite within parameters set by the Board.
- Escalate material cloud risk issues to the Board Risk Committee.

#### 12.2.3 Chief Technology Officer (CTO) / Chief Information Officer (CIO)

- Accountable for the Organization's cloud strategy and technology architecture.
- Sponsor the Cloud Centre of Excellence.
- Ensure cloud adoption aligns with the Organization's technology and digital transformation strategy.
- Ensure adequate technical resources are available for cloud governance activities.

#### 12.2.4 Chief Information Security Officer (CISO)

- Accountable for cloud security governance.
- Oversee the Cloud Security Working Group.
- Approve the Cloud Security Baseline.
- Ensure cloud security incidents are managed in accordance with the Incident Management Policy.
- Report cloud security posture to the TRC.

#### 12.2.5 Cloud Architecture Lead

- Responsible for the Cloud Governance Framework and Cloud Security Baseline.
- Chair the Cloud Centre of Excellence.
- Lead cloud risk assessments and maintain the Cloud Risk Register.
- Oversee the Cloud Adoption lifecycle.
- Maintain the Cloud Services Register, Data Residency Register, and Cloud Exit Register.
- Report cloud KPIs/KRIs to the TRC.

#### 12.2.6 Cloud Security Architect

- Responsible for cloud security architecture and the Cloud Security Baseline technical content.
- Lead the Cloud Security Working Group.
- Conduct and oversee cloud security assessments, penetration testing, and CSPM monitoring.
- Manage cloud security incidents.
- Provide security guidance to the CCoE for cloud adoption decisions.

#### 12.2.7 Cloud Operations Lead

- Responsible for the day-to-day operation and reliability of cloud environments.
- Monitor CSP SLAs and performance.
- Coordinate cloud incident response operations.
- Conduct cloud BCP/DR testing.
- Manage cloud cost optimization and financial governance.

#### 12.2.8 Business Unit Heads / Cloud Workload Owners

- Accountable for the appropriate use of cloud services within their business unit.
- Ensure business unit staff comply with this Framework and the Cloud Security Baseline.
- Submit cloud adoption requests through the approved intake process.
- Participate in cloud risk assessments for business unit workloads.

#### 12.2.9 Compliance

- Ensure cloud governance arrangements comply with BNM RMiT and applicable Malaysian regulations.
- Manage regulatory notifications and approvals for cloud arrangements.
- Maintain awareness of regulatory changes affecting cloud governance.
- Conduct compliance reviews and control self-assessments.

#### 12.2.10 Legal

- Review and negotiate cloud service provider contracts.
- Advise on data protection, cross-border transfer, and regulatory obligations.
- Maintain awareness of legal developments affecting cloud services.

#### 12.2.11 Vendor Management

- Conduct CSP due diligence and maintain the Approved CSP Register.
- Coordinate annual CSP reviews.
- Manage CSP relationships and escalate performance issues.

#### 12.2.12 Internal Audit

- Conduct periodic independent audits of cloud governance controls.
- Report audit findings to the Board Audit Committee.
- Track and verify remediation of cloud audit findings.

---

---

## 13. Review and Approval

### 13.1 Document Review Process

This Cloud Governance Framework is subject to a minimum annual review cycle. Reviews will also be triggered by:

- Material changes in the Organization's cloud strategy or architecture.
- Significant changes in applicable regulations (BNM, PDPA, NACSA).
- Significant cloud security incidents.
- Material changes in the Organization's risk profile.
- Direction from BNM, Internal Audit, or the TRC.

Reviews are coordinated by the Cloud Architecture Lead and approved through the process defined in Section 4.3.

### 13.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release of the Cloud Governance Framework |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 13.3 Approval Sign-Off

By signing below, the approvers confirm that they have reviewed this Cloud Governance Framework and are satisfied that it is appropriate for the Organization's risk profile, regulatory obligations, and operational context.

| Role | Name | Signature | Date |
|---|---|---|---|
| Cloud Architecture Lead (Author) | [Name] | ___________________________ | [Date] |
| Chief Information Security Officer | [Name] | ___________________________ | [Date] |
| Chief Technology Officer / CIO | [Name] | ___________________________ | [Date] |
| Chief Risk Officer | [Name] | ___________________________ | [Date] |
| Head of Compliance | [Name] | ___________________________ | [Date] |
| Head of Legal | [Name] | ___________________________ | [Date] |
| Technology Risk Committee Chair | [Name] | ___________________________ | [Date] |
| Board Risk Committee Chair | [Name] | ___________________________ | [Date] |

---

---

## 14. References

*This section lists the regulatory instruments, standards, and frameworks referenced in or applicable to this Cloud Governance Framework. The version or publication date of each reference should be verified and updated at each annual review.*

### 14.1 Malaysian Regulatory References

| Reference | Issuing Authority | Description | URL / Location |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Primary regulatory instrument for technology risk management in Malaysian financial institutions; Section 17 covers cloud services | BNM website |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia | Supplementary guidelines on cybersecurity risk management | BNM website |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | Primary legislation governing licensed banks and financial institutions | Attorney General's Chambers |
| Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | Primary legislation governing Islamic financial institutions | Attorney General's Chambers |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Data protection legislation governing processing of personal data of Malaysian individuals | Attorney General's Chambers |
| National Cybersecurity Policy | NACSA | National policy framework for cybersecurity in Malaysia, including CII protection | NACSA website |
| BNM Guidelines on Outsourcing | Bank Negara Malaysia | Guidelines governing outsourcing arrangements by financial institutions | BNM website |

### 14.2 International Standards and Frameworks

| Reference | Issuing Body | Description |
|---|---|---|
| ISO/IEC 27001:2022 | ISO/IEC | Information Security Management Systems — Requirements |
| ISO/IEC 27002:2022 | ISO/IEC | Information Security Controls |
| ISO/IEC 27017:2015 | ISO/IEC | Code of Practice for Information Security Controls Based on ISO/IEC 27002 for Cloud Services |
| ISO/IEC 27018:2019 | ISO/IEC | Code of Practice for Protection of Personally Identifiable Information (PII) in Public Clouds |
| ISO/IEC 17788:2014 | ISO/IEC | Cloud Computing — Overview and Vocabulary |
| NIST SP 800-144 | NIST | Guidelines on Security and Privacy in Public Cloud Computing |
| NIST SP 800-210 | NIST | General Access Control Guidance for Cloud Systems |
| NIST Cybersecurity Framework (CSF) 2.0 | NIST | Framework for improving critical infrastructure cybersecurity |
| CSA Cloud Controls Matrix (CCM) v4 | Cloud Security Alliance | Cloud-specific security controls reference framework |
| CSA Security Guidance for Cloud Computing v4 | Cloud Security Alliance | Best practice guidance for securing cloud environments |
| CIS Controls v8 | Center for Internet Security | Prioritized cybersecurity best practices |
| ENISA Cloud Security Guide for SMEs | ENISA | Practical cloud security guidance |

### 14.3 Internal Policy References

| Document Title | Owner | Location |
|---|---|---|
| Technology Risk Management Framework | CRO | [Policy Repository Path] |
| Information Security Policy | CISO | [Policy Repository Path] |
| Outsourcing Risk Management Policy | CRO | [Policy Repository Path] |
| Data Classification and Handling Policy | CISO / DPO | [Policy Repository Path] |
| Business Continuity Management Policy | BCM Lead | [Policy Repository Path] |
| Vendor Management Policy | Procurement | [Policy Repository Path] |
| Incident Management Policy | CISO | [Policy Repository Path] |
| IT Change Management Policy | CTO | [Policy Repository Path] |
| Cloud Security Baseline | Cloud Security Architect | [Technical Document Repository Path] |
| PDPA Compliance Framework | DPO | [Policy Repository Path] |

---

---

## 15. Appendices

### Appendix A — Cloud Intake Request Form

*This appendix provides the standard form for requesting approval to adopt a new cloud service or migrate an existing workload to the cloud. All cloud adoption requests must be submitted through this form to the Cloud Centre of Excellence.*

---

**CLOUD ADOPTION INTAKE REQUEST**

| Field | Information |
|---|---|
| **Request ID** | [Auto-generated] |
| **Request Date** | [Date] |
| **Requestor Name** | [Name] |
| **Business Unit** | [Business Unit] |
| **Requestor's Manager** | [Manager Name] |

---

**Section 1 — Service Details**

| Field | Information |
|---|---|
| Cloud Service Name | [Service Name] |
| Cloud Service Provider | [CSP Name] |
| Service Type | ☐ IaaS ☐ PaaS ☐ SaaS |
| Deployment Model | ☐ Public ☐ Private ☐ Hybrid ☐ Community |
| Primary Use Case | [Description] |
| Business Justification | [Justification] |
| Estimated Users | [Number] |
| Estimated Monthly Cost | [Amount] |
| Proposed Go-Live Date | [Date] |

---

**Section 2 — Data Classification**

| Question | Response |
|---|---|
| What data will be processed / stored in this service? | [Description] |
| Data classification of the highest-sensitivity data | ☐ Public ☐ Internal ☐ Confidential ☐ Restricted |
| Will customer personal data be processed? | ☐ Yes ☐ No |
| Will regulated financial data be processed? | ☐ Yes ☐ No |
| Proposed data residency location | [Country / Region] |

---

**Section 3 — System Classification**

| Question | Response |
|---|---|
| Proposed Workload Tier | ☐ Tier 1 — Critical ☐ Tier 2 — Important ☐ Tier 3 — Standard ☐ Tier 4 — Non-Production |
| Is this a material outsourcing arrangement? | ☐ Yes ☐ No ☐ Requires Assessment |
| Does this replace an existing system? | ☐ Yes ☐ No — If yes, which system? [System name] |
| Integration with core banking or payment systems? | ☐ Yes ☐ No — If yes, describe: [Description] |

---

**Section 4 — Declarations**

| Declaration | Confirmed |
|---|---|
| I confirm this request has been reviewed and supported by my business unit head | ☐ Yes |
| I confirm I have read the Cloud Governance Framework | ☐ Yes |
| I confirm a preliminary data protection impact assessment has been or will be conducted (if personal data is involved) | ☐ Yes ☐ N/A |

**Requestor Signature:** ___________________________  **Date:** _______________

---

**CCoE Review**

| Field | Information |
|---|---|
| Risk Assessment Required? | ☐ Yes — Risk Level: [High/Med/Low] ☐ No |
| Due Diligence Required? | ☐ Yes ☐ No |
| BNM Notification Required? | ☐ Yes ☐ No |
| Approval Decision | ☐ Approved ☐ Approved with Conditions ☐ Rejected |
| Conditions (if any) | [Conditions] |
| CCoE Chair Signature | ___________________________ |
| Date | [Date] |

---

### Appendix B — Cloud Services Register

*The Cloud Services Register is the authoritative record of all cloud services in use at [Organization Name]. It is maintained by the Cloud Architecture Lead and reviewed at each monthly CCoE meeting. The full register is maintained in [GRC Platform / SharePoint / Confluence].*

| Register Field | Description |
|---|---|
| **Service ID** | Unique identifier for the cloud service |
| **Service Name** | Name of the cloud service |
| **Service Provider (CSP)** | Name of the cloud service provider |
| **Service Type** | IaaS / PaaS / SaaS |
| **Deployment Model** | Public / Private / Hybrid / Community |
| **Business Unit Owner** | Business unit accountable for the service |
| **Technical Owner** | Technical contact responsible for the service |
| **Workload Tier** | Tier 1 / Tier 2 / Tier 3 / Tier 4 |
| **Data Classifications Hosted** | Data sensitivity levels hosted in the service |
| **Data Residency** | Countries / regions where data is hosted |
| **Residency Compliant** | Yes / No / Conditional |
| **Material Outsourcing?** | Yes / No |
| **BNM Notified / Approved?** | Yes / No / N/A |
| **Contract Expiry Date** | Date on which the CSP contract expires |
| **Annual Review Date** | Date on which the next annual review is due |
| **Approval Date** | Date on which the service was approved for use |
| **Approval Authority** | Body that approved the service |
| **Exit Strategy Documented?** | Yes / No |
| **Status** | Active / Under Review / Decommissioning |

---

### Appendix C — Cloud Risk Assessment Template

*This template provides the standard structure for documenting cloud risk assessments. Completed risk assessments are stored in [GRC Platform / Document Repository].*

---

**CLOUD RISK ASSESSMENT**

| Field | Details |
|---|---|
| Assessment ID | [ID] |
| Assessment Date | [Date] |
| Cloud Service Assessed | [Service Name] |
| CSP | [CSP Name] |
| Workload Tier | [Tier] |
| Lead Assessor | [Name] |
| Review Date | [Date] |

---

**Risk Assessment Scope**

*Describe the scope of this risk assessment, including the systems, data, integrations, and users covered.*

[Assessment scope description]

---

**Risk Identification**

| Risk ID | Risk Description | Risk Category | Threat Source | Potential Impact |
|---|---|---|---|---|
| [R-001] | [Risk description] | [Category] | [Threat] | [Impact] |
| [R-002] | [Risk description] | [Category] | [Threat] | [Impact] |

---

**Risk Evaluation**

| Risk ID | Inherent Likelihood (1-5) | Inherent Impact (1-5) | Inherent Risk Rating | Controls in Place | Control Effectiveness | Residual Likelihood (1-5) | Residual Impact (1-5) | Residual Risk Rating |
|---|---|---|---|---|---|---|---|---|
| [R-001] | [1-5] | [1-5] | [H/M/L] | [Controls] | [Strong/Adequate/Weak] | [1-5] | [1-5] | [H/M/L] |

---

**Risk Treatment Plan**

| Risk ID | Residual Risk Rating | Treatment Decision | Treatment Actions | Owner | Target Date |
|---|---|---|---|---|---|
| [R-001] | [H/M/L] | [Mitigate/Accept/Transfer/Avoid] | [Actions] | [Owner] | [Date] |

---

**Assessment Sign-Off**

| Role | Name | Signature | Date |
|---|---|---|---|
| Lead Assessor | [Name] | ___________________________ | [Date] |
| Cloud Architecture Lead | [Name] | ___________________________ | [Date] |
| CCoE Chair | [Name] | ___________________________ | [Date] |

---

### Appendix D — CSP Due Diligence Checklist

*This checklist is used to conduct structured due diligence on prospective cloud service providers. The completed checklist is maintained in the Vendor Management system.*

---

**CSP DUE DILIGENCE CHECKLIST**

| Field | Details |
|---|---|
| CSP Name | [CSP Name] |
| Assessment Date | [Date] |
| Assessor | [Name] |
| Services Under Assessment | [Service types] |

---

| Due Diligence Item | Evidence Reviewed | Satisfactory? | Notes |
|---|---|---|---|
| **Security Certifications** | | | |
| ISO/IEC 27001 certificate (current) | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| ISO/IEC 27017 certificate (current) | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| ISO/IEC 27018 certificate (current) | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| SOC 2 Type II report (current year) | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| PCI DSS attestation (if applicable) | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| **Data Residency** | | | |
| Confirmed data centre locations (Malaysia / approved regions) | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| Sub-processor list reviewed | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| Sub-processor locations acceptable | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| **Contractual** | | | |
| Draft DPA / data processing agreement reviewed | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| Audit rights clause included | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| BNM examination cooperation clause included | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| Exit and data portability provisions included | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| Incident notification SLA defined | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| **Business Continuity** | | | |
| BCP/DR documentation reviewed | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| Historical availability/uptime data reviewed | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| SLA availability commitment meets Organization requirements | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| **Financial Stability** | | | |
| Financial statements / credit rating reviewed | [Document reference] | ☐ Yes ☐ No ☐ N/A | |
| **Overall Assessment** | | | |
| Overall Due Diligence Outcome | | ☐ Pass ☐ Conditional ☐ Fail | |

**Assessor Signature:** ___________________________  **Date:** _______________

---

### Appendix E — Cloud Security Baseline Summary

*This appendix provides a high-level summary of the Cloud Security Baseline requirements. The full technical baseline is maintained as a separate document: [Cloud Security Baseline — Document Reference]. This appendix is included here to provide governance-level visibility of security requirements.*

| Control Domain | Key Baseline Requirements | Applicability |
|---|---|---|
| **Identity and Access Management** | MFA mandatory for all cloud console access; no shared accounts; privileged access via approved PAM solution; quarterly access reviews | All cloud environments |
| **Network Security** | All cloud VPCs/VNets segmented by environment (prod/non-prod/mgmt); no unrestricted inbound rules (0.0.0.0/0); WAF deployed for all internet-facing applications | All cloud environments |
| **Encryption** | AES-256 encryption at rest for all data; TLS 1.2 minimum for data in transit; customer-managed keys (BYOK) for Confidential and Restricted data | All cloud environments |
| **Logging and Monitoring** | Centralized log aggregation to SIEM; 12-month hot log retention; 7-year archive; alerting for critical events (privileged access, policy changes, unusual data access) | All cloud environments |
| **Vulnerability Management** | Weekly automated scans; critical findings remediated within 72 hours; high findings within 14 days; annual penetration testing | All cloud environments |
| **Configuration Management** | All cloud infrastructure deployed via Infrastructure-as-Code (IaC); no manual production changes; IaC security scanning in CI/CD pipeline | All cloud environments |
| **Secrets Management** | No hardcoded secrets in code repositories; approved secrets management solution mandatory; secrets rotation enforced | All cloud environments |
| **Backup and Recovery** | Daily automated backups; monthly restore tests; backups encrypted; backup copies stored in separate region | Tier 1 and Tier 2 |
| **Container Security** | Container image scanning in CI/CD pipeline; no containers running as root in production; approved base image registry | Where containers are used |
| **Security Monitoring** | CSPM tool deployed across all cloud accounts; alerts reviewed daily; critical findings escalated within 4 hours | All cloud environments |

---

### Appendix F — BNM Notification and Approval Requirements

*This appendix summarizes the circumstances under which the Organization must notify or seek approval from BNM for cloud arrangements. This appendix should be reviewed against the current published version of BNM RMiT at each annual review and updated accordingly.*

*Note: The following is provided as a template guide. The specific thresholds and requirements must be verified against the current BNM RMiT Policy Document applicable to your institution type.*

| Scenario | Action Required | Lead Responsible | Timeframe |
|---|---|---|---|
| Adopting a cloud service for a material / critical system | BNM notification prior to adoption | Compliance | [As specified in RMiT] |
| Offshore hosting of regulated data | BNM approval required | Compliance | [As specified in RMiT] |
| Material change to existing approved cloud arrangement | BNM notification | Compliance | [As specified in RMiT] |
| Termination of material cloud arrangement | BNM notification | Compliance | [As specified in RMiT] |
| Cloud-related security incident affecting regulated data | BNM incident report | Compliance | [As specified in RMiT] |
| Cloud-related operational disruption exceeding [X] hours | BNM incident report | Compliance | [As specified in RMiT] |

---

### Appendix G — Glossary of Terms

| Term | Definition |
|---|---|
| **Availability Zone (AZ)** | A physically separate data centre location within a cloud region, providing fault isolation |
| **BNM** | Bank Negara Malaysia — the central bank and financial regulator of Malaysia |
| **CaaS** | Container-as-a-Service — a cloud service model delivering container orchestration platforms |
| **CCoE** | Cloud Centre of Excellence — the Organization's primary operational cloud governance body |
| **CGF** | Cloud Governance Framework — this document |
| **CII** | Critical Information Infrastructure — systems whose disruption would have serious consequences for national security, economy, or public welfare |
| **CSPM** | Cloud Security Posture Management — tools that continuously monitor cloud configurations for security and compliance |
| **CSP** | Cloud Service Provider — the provider of cloud computing services |
| **DPIA** | Data Protection Impact Assessment — an assessment of the privacy risks of a data processing activity |
| **DPO** | Data Protection Officer — the individual responsible for PDPA compliance |
| **FaaS** | Function-as-a-Service — a serverless cloud service model |
| **IaaS** | Infrastructure-as-a-Service — a cloud service model providing virtualized computing resources |
| **IaC** | Infrastructure-as-Code — the management of infrastructure through machine-readable configuration files |
| **IFSA** | Islamic Financial Services Act 2013 |
| **KRI** | Key Risk Indicator — a metric used to monitor the level of risk exposure |
| **KPI** | Key Performance Indicator — a metric used to measure performance against objectives |
| **NACSA** | National Cyber Security Agency — the Malaysian national cybersecurity authority |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian data protection legislation |
| **PaaS** | Platform-as-a-Service — a cloud service model providing a managed platform for development and deployment |
| **PAM** | Privileged Access Management — tools and processes for managing privileged accounts and access |
| **RACI** | Responsible, Accountable, Consulted, Informed — a matrix for defining roles and responsibilities |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk for financial institutions |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a service after disruption |
| **SaaS** | Software-as-a-Service — a cloud service model delivering fully managed software applications |
| **SIEM** | Security Information and Event Management — a platform for centralized security monitoring and alerting |
| **SOC 2** | Service Organization Control 2 — an auditing standard for service providers, covering security, availability, and confidentiality |
| **TRC** | Technology Risk Committee — the Organization's senior management committee for technology risk oversight |
| **WAF** | Web Application Firewall — a security control that monitors and filters HTTP/HTTPS traffic to web applications |

---

### Appendix H — Document Control and Distribution List

*This appendix records the controlled distribution of this document. Only the versions distributed through this list are considered controlled copies.*

| Recipient | Role | Copy Type | Distribution Date |
|---|---|---|---|
| [Name] | Cloud Architecture Lead | Controlled (Master) | [Date] |
| [Name] | CISO | Controlled | [Date] |
| [Name] | CTO / CIO | Controlled | [Date] |
| [Name] | CRO | Controlled | [Date] |
| [Name] | Head of Compliance | Controlled | [Date] |
| [Name] | Head of Legal | Controlled | [Date] |
| [Name] | Head of Internal Audit | Controlled | [Date] |
| [Name] | BRC Chair | Controlled | [Date] |
| Policy Repository | [Intranet / SharePoint / Confluence] | Published (read access for all staff) | [Date] |

---

*End of Document*

---

*This document is subject to annual review. For queries or to report discrepancies, contact the document owner: Cloud Architecture Lead, [Organization Name], at [contact details].*

*© [Organization Name] [Year] — All rights reserved. Unauthorized reproduction or distribution prohibited.*