# Cloud Security Control Framework

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
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 17.2 |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of regulatory and contractual obligations.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Governance Structure](#3-governance-structure)
4. [Cloud Service Models and Deployment Types](#4-cloud-service-models-and-deployment-types)
5. [Data Residency Requirements](#5-data-residency-requirements)
6. [Shared Responsibility Matrix](#6-shared-responsibility-matrix)
7. [Identity and Access Management Controls](#7-identity-and-access-management-controls)
8. [Network Security Controls](#8-network-security-controls)
9. [Data Protection and Encryption Controls](#9-data-protection-and-encryption-controls)
10. [Security Monitoring and Logging Controls](#10-security-monitoring-and-logging-controls)
11. [Vulnerability and Patch Management](#11-vulnerability-and-patch-management)
12. [Incident Response in Cloud Environments](#12-incident-response-in-cloud-environments)
13. [Business Continuity and Disaster Recovery](#13-business-continuity-and-disaster-recovery)
14. [Third-Party Cloud Provider Risk Management](#14-third-party-cloud-provider-risk-management)
15. [Compliance and Audit Controls](#15-compliance-and-audit-controls)
16. [Roles and Responsibilities](#16-roles-and-responsibilities)
17. [Review and Approval](#17-review-and-approval)
18. [References](#18-references)
19. [Appendices](#19-appendices)

---

## 1. Executive Summary

*Provide a concise overview of this framework, its strategic rationale, and its alignment with the organization's cloud adoption strategy and regulatory obligations. This section should be accessible to senior management and board-level stakeholders.*

[Organization Name] operates within a regulated financial services environment governed by Bank Negara Malaysia (BNM) and is subject to the **Risk Management in Technology (RMiT)** policy document. The adoption of cloud computing presents significant opportunities for operational agility, cost optimization, and service innovation; however, it also introduces a distinct risk landscape that must be managed through a structured, consistent, and auditable control framework.

This **Cloud Security Control Framework (CSCF)** establishes the security principles, controls, standards, and accountability structures that govern [Organization Name]'s use of cloud services across all deployment models (public, private, hybrid, and multi-cloud) and service models (Infrastructure as a Service, Platform as a Service, and Software as a Service).

This framework has been developed in direct response to BNM RMiT Clause 17.2, which mandates that financial institutions implement robust and comprehensive security controls for cloud environments. It also aligns with internationally recognized standards including ISO/IEC 27017 (Cloud Security), ISO/IEC 27018 (Protection of Personal Data in the Cloud), NIST SP 800-145, and the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM).

**Key objectives of this framework include:**

- Establishing a consistent, risk-based approach to cloud security governance.
- Defining minimum security control requirements for each cloud service and deployment model.
- Clarifying shared responsibilities between [Organization Name] and cloud service providers (CSPs).
- Ensuring data sovereignty, residency compliance, and protection of customer personal data in accordance with PDPA 2010.
- Providing a foundation for ongoing audit, compliance monitoring, and continuous improvement.

This framework is mandatory for all business units, technology teams, and third parties that procure, configure, operate, or consume cloud services on behalf of [Organization Name]. Non-compliance with this framework may result in disciplinary action, regulatory exposure, and suspension of cloud service access.

**Framework Status:** [Active / Draft / Under Review]

**Scope Summary:** [Summarize the organizational units, systems, and cloud environments in scope — e.g., "All cloud-hosted systems classified as Tier 1 and Tier 2 under the Information Asset Classification Policy."]

**Regulatory Compliance Posture:** [Summarize the organization's current compliance posture with respect to BNM RMiT cloud-related requirements.]

---

## 2. Purpose and Scope

### 2.1 Purpose

*State the specific intent and objectives of this document. Explain why this framework exists, what problem it solves, and what regulatory mandate it satisfies.*

The purpose of this Cloud Security Control Framework is to:

1. Define and document the minimum mandatory security controls applicable to all cloud environments used by [Organization Name].
2. Fulfil the requirements of **BNM RMiT Clause 17.2**, which mandates that financial institutions establish a cloud risk management programme inclusive of security controls commensurate with the risk profile of cloud-hosted workloads.
3. Establish clear accountability and ownership for cloud security controls across all organizational layers.
4. Provide a structured reference that can be used for internal audit, BNM examination, and continuous control assessment.
5. Support the safe and compliant adoption of cloud technologies in line with [Organization Name]'s **Cloud Adoption Strategy [Reference: Document ID]**.

This framework does not replace existing policies (e.g., Information Security Policy, Data Classification Policy) but serves as a technical and procedural extension that applies those policies to the cloud context.

### 2.2 Scope

#### 2.2.1 In Scope

*List all systems, environments, organizational units, and personnel to which this framework applies.*

This framework applies to:

- All **cloud service models** procured or used by [Organization Name], including:
  - Infrastructure as a Service (IaaS)
  - Platform as a Service (PaaS)
  - Software as a Service (SaaS)
  - Function as a Service (FaaS) / Serverless

- All **cloud deployment models**, including:
  - Public Cloud
  - Private Cloud
  - Hybrid Cloud
  - Multi-Cloud

- All **organizational units** of [Organization Name] that procure, configure, operate, or consume cloud services, including but not limited to:
  - Information Technology Division
  - Digital Banking / FinTech Units
  - Operations
  - Risk Management
  - Compliance
  - Internal Audit

- All **third-party service providers** that host, process, or transmit [Organization Name] data in cloud environments under contractual arrangements.

- All **cloud environments** regardless of whether they host production, development, testing, staging, or disaster recovery workloads.

- All **data classifications** including Public, Internal, Confidential, and Restricted (as defined in [Organization Name]'s Data Classification Policy [Reference: Document ID]).

#### 2.2.2 Out of Scope

*Clearly define what is excluded from this framework to avoid ambiguity.*

The following are explicitly out of scope for this framework:

- On-premises data centre infrastructure managed entirely within [Organization Name]'s physical facilities without any cloud integration (refer to the Data Centre Physical Security Policy [Reference: Document ID]).
- Personal devices used by employees for non-organizational purposes.
- Cloud services that are not procured, approved, or sanctioned by [Organization Name]'s IT governance process (shadow IT — addressed separately in the Shadow IT Risk Management Procedure [Reference: Document ID]).

#### 2.2.3 Applicability Matrix

| Audience | Applicability |
|---|---|
| Cloud Architecture Team | Mandatory |
| IT Security Team | Mandatory |
| DevOps / Platform Engineering | Mandatory |
| Application Development Teams | Mandatory |
| Procurement / Vendor Management | Mandatory |
| Business Units using SaaS | Mandatory (relevant sections) |
| Internal Audit | Reference |
| Senior Management / Board | Reference (Executive Summary) |
| Third-Party CSPs | Contractual obligation |

### 2.3 Objectives

Upon full implementation, this framework shall achieve the following measurable objectives:

1. **Confidentiality:** Ensure that all data stored, processed, or transmitted in cloud environments is protected against unauthorized access through appropriate technical controls.
2. **Integrity:** Prevent unauthorized modification of data and cloud configuration through access controls, audit logging, and change management.
3. **Availability:** Maintain agreed service levels for cloud-hosted systems through resilience design, redundancy, and tested recovery procedures.
4. **Accountability:** Ensure that all actions within cloud environments are attributable to specific identities through comprehensive logging and monitoring.
5. **Compliance:** Maintain demonstrable adherence to BNM RMiT, PDPA 2010, and other applicable regulatory requirements at all times.

### 2.4 Guiding Principles

*Articulate the foundational principles that underpin the control decisions made in this framework.*

All cloud security controls within this framework are designed in accordance with the following principles:

| Principle | Description |
|---|---|
| **Risk-Based Approach** | Controls are proportionate to the risk classification of the data and workload being hosted. |
| **Least Privilege** | Access to cloud resources is granted only to the extent necessary to perform authorized functions. |
| **Defense in Depth** | Multiple overlapping security controls are applied so that no single control failure results in a security breach. |
| **Secure by Default** | All cloud resources are deployed in a secure baseline configuration; permissive settings require explicit justification and approval. |
| **Shared Responsibility Clarity** | Security responsibilities between [Organization Name] and the CSP are explicitly defined and documented for each service model. |
| **Continuous Monitoring** | Cloud environments are subject to real-time and continuous security monitoring; detection capabilities are maintained at all times. |
| **Data Sovereignty** | Customer and organizational data shall reside within geographies that satisfy BNM data residency requirements and PDPA obligations. |
| **Auditability** | All security-relevant events in cloud environments must be logged, retained, and accessible for audit and investigation purposes. |

---

## 3. Governance Structure

*Describe the organizational and governance structures that oversee cloud security, including the committees, reporting lines, and escalation paths relevant to cloud risk management.*

### 3.1 Cloud Governance Overview

[Organization Name] has established a multi-tier governance structure to provide oversight, direction, and accountability for cloud security. This structure ensures that cloud-related risks are identified, assessed, and managed at appropriate organizational levels and that accountability is maintained from operational teams through to the Board of Directors.

The cloud security governance structure is integrated with [Organization Name]'s broader IT Governance and Information Security governance frameworks, as described in the IT Governance Framework [Reference: Document ID] and the Information Security Management System (ISMS) Policy [Reference: Document ID].

### 3.2 Governance Hierarchy

```
Board of Directors / Board Risk Committee
          |
          v
Senior Management / Management Risk Committee (MRC)
          |
          v
Chief Information Security Officer (CISO) / IT Security Committee
          |
          v
Cloud Architecture Lead (Framework Owner)
          |
    ______|______
   |             |
   v             v
Cloud Security   Cloud Platform
Team             Engineering Team
```

*Replace or expand the above hierarchy to accurately reflect [Organization Name]'s actual organizational structure.*

### 3.3 Governance Bodies

#### 3.3.1 Board Risk Committee (BRC)

| Item | Details |
|---|---|
| **Role in Cloud Security** | Ultimate oversight of technology risk appetite and material cloud risk exposures. |
| **Reporting Frequency** | Quarterly (or as required for material risk events) |
| **Key Metrics Reviewed** | Cloud risk profile, material incidents, regulatory findings, third-party risk posture |

#### 3.3.2 Management Risk Committee (MRC) / IT Security Committee

| Item | Details |
|---|---|
| **Role in Cloud Security** | Review and approval of cloud security policies, exception requests, and risk acceptance decisions. |
| **Reporting Frequency** | Monthly |
| **Key Metrics Reviewed** | Control compliance rates, vulnerability KPIs, audit findings, CSP risk ratings |

#### 3.3.3 Cloud Governance Working Group (CGWG)

| Item | Details |
|---|---|
| **Chair** | Cloud Architecture Lead |
| **Members** | Cloud Security Lead, DevOps Lead, Compliance Officer, Risk Manager, Legal Counsel (for data residency), Procurement Representative |
| **Role** | Operational governance of cloud security; review of new cloud services; control exception management; framework maintenance |
| **Meeting Frequency** | Monthly |
| **Key Outputs** | Cloud service approval decisions, control exception log, framework updates |

### 3.4 Cloud Security Governance Lifecycle

*Describe how cloud security governance operates across the lifecycle of cloud services — from initial evaluation through decommissioning.*

| Lifecycle Phase | Key Governance Activity | Responsible Party |
|---|---|---|
| **Evaluate** | Cloud service risk assessment; regulatory impact analysis; data residency review | Cloud Architecture Lead, Risk Manager |
| **Procure** | Security requirements in contracts; CSP due diligence; SLA review | Procurement, Legal, Cloud Security Team |
| **Onboard** | Secure baseline configuration; IAM provisioning; logging activation | Cloud Platform Engineering, Cloud Security Team |
| **Operate** | Continuous monitoring; vulnerability management; access reviews | Cloud Security Team, Operations |
| **Change** | Change management review; security impact assessment | Cloud Architecture Lead, Change Advisory Board |
| **Audit** | Periodic control testing; compliance reporting; BNM examination support | Internal Audit, Cloud Security Team |
| **Decommission** | Data deletion/migration; access revocation; CSP contract termination | Cloud Architecture Lead, Legal |

### 3.5 Cloud Service Approval Process

*Describe the process by which new cloud services are evaluated and approved for use.*

No cloud service (IaaS, PaaS, or SaaS) may be procured or activated without completing the **Cloud Service Approval Process**, which includes:

1. **Cloud Service Request** — Business unit submits a Cloud Service Request Form [Reference: Appendix A] identifying the service, intended use, data types, and business justification.
2. **Risk Assessment** — Cloud Security Team conducts a security risk assessment of the proposed service, including review of the CSP's security certifications, audit reports (e.g., SOC 2 Type II, ISO 27001), and contractual terms.
3. **Data Residency Review** — Compliance reviews the proposed service for data residency compliance with BNM requirements and PDPA 2010.
4. **Shared Responsibility Mapping** — Cloud Architecture Lead documents the shared responsibility allocation for the proposed service.
5. **Approval** — Cloud Governance Working Group reviews the risk assessment and approves, conditionally approves, or rejects the request.
6. **Onboarding** — Approved services are onboarded in accordance with the Cloud Onboarding Procedure [Reference: Document ID].
7. **Registration** — The approved service is added to the Cloud Service Inventory [Reference: Appendix B].

### 3.6 Policy and Framework Alignment

| Policy / Framework | Relationship to This Document |
|---|---|
| Information Security Policy [Doc ID] | Parent policy; this framework operationalizes cloud-specific controls |
| Data Classification Policy [Doc ID] | Defines data sensitivity levels referenced throughout this framework |
| Third-Party Risk Management Policy [Doc ID] | Governs CSP due diligence and ongoing monitoring |
| Business Continuity and DR Policy [Doc ID] | Cloud BCP/DR requirements are derived from this policy |
| Acceptable Use Policy [Doc ID] | Governs employee use of cloud services |
| Change Management Policy [Doc ID] | Cloud configuration changes are subject to this policy |
| PDPA Compliance Programme [Doc ID] | Data residency and personal data controls align with PDPA obligations |

---

## 4. Cloud Service Models and Deployment Types

*Document the cloud service and deployment models used or approved by the organization, along with the associated risk profile and applicable control requirements for each.*

### 4.1 Overview

[Organization Name] utilizes or is authorized to utilize the following cloud service and deployment models. Each model presents a distinct risk profile and requires differentiated security controls. This section establishes the approved models, their use cases, and the baseline security requirements applicable to each.

### 4.2 Cloud Service Models

#### 4.2.1 Infrastructure as a Service (IaaS)

| Item | Details |
|---|---|
| **Definition** | The CSP provides virtualized computing infrastructure (compute, storage, networking). [Organization Name] is responsible for the operating system, middleware, runtime, data, and applications. |
| **Approved CSPs** | [List approved IaaS providers — e.g., AWS, Microsoft Azure, Google Cloud Platform] |
| **Approved Use Cases** | [e.g., Virtual machine hosting, storage, network infrastructure] |
| **Risk Rating** | [High / Medium / Low — to be assessed] |
| **Data Classification Permitted** | [e.g., Up to Confidential with additional controls; Restricted requires CGWG approval] |

**Key Security Responsibilities for IaaS:**

| Security Domain | [Organization Name] Responsibility | CSP Responsibility |
|---|---|---|
| Physical infrastructure security | None | Full |
| Hypervisor security | None | Full |
| Network controls (physical) | None | Full |
| Operating system hardening | Full | None |
| Identity and access management | Full | Shared (IAM platform) |
| Application security | Full | None |
| Data encryption | Full (customer-managed keys) | Shared (encryption infrastructure) |
| Patch management (OS/App) | Full | None |
| Security monitoring | Shared | Shared |

#### 4.2.2 Platform as a Service (PaaS)

| Item | Details |
|---|---|
| **Definition** | The CSP provides a managed platform (runtime, middleware, databases, development tools). [Organization Name] is responsible for applications and data. |
| **Approved CSPs** | [List approved PaaS providers] |
| **Approved Use Cases** | [e.g., Application development platforms, managed databases, API gateways, container orchestration] |
| **Risk Rating** | [High / Medium / Low — to be assessed] |
| **Data Classification Permitted** | [e.g., Up to Confidential with encryption and access controls] |

**Key Security Responsibilities for PaaS:**

| Security Domain | [Organization Name] Responsibility | CSP Responsibility |
|---|---|---|
| Physical infrastructure | None | Full |
| Hypervisor and platform | None | Full |
| Runtime and middleware | None | Full |
| Application code security | Full | None |
| Application configuration | Full | None |
| Data classification and handling | Full | None |
| Access management (application-level) | Full | Shared |
| Data encryption | Shared | Shared |

#### 4.2.3 Software as a Service (SaaS)

| Item | Details |
|---|---|
| **Definition** | The CSP delivers fully managed applications over the internet. [Organization Name] is responsible for data, user access management, and configuration within the application. |
| **Approved CSPs / Applications** | [List approved SaaS applications — e.g., Microsoft 365, Salesforce, ServiceNow] |
| **Approved Use Cases** | [e.g., Email, collaboration, ITSM, HR management] |
| **Risk Rating** | [High / Medium / Low — to be assessed per application] |
| **Data Classification Permitted** | [e.g., Internal and below by default; Confidential requires DLP controls and CGWG approval] |

**Key Security Responsibilities for SaaS:**

| Security Domain | [Organization Name] Responsibility | CSP Responsibility |
|---|---|---|
| Application and platform security | None | Full |
| Infrastructure and hosting | None | Full |
| User provisioning and deprovisioning | Full | Shared |
| Data access controls within application | Full | Shared |
| Data export/portability | Full | Shared |
| Configuration and settings | Full | Shared |
| Data backup (application-level) | Shared | Shared |

### 4.3 Cloud Deployment Models

#### 4.3.1 Public Cloud

| Item | Details |
|---|---|
| **Description** | Cloud infrastructure owned and operated by a third-party CSP, shared with other customers via logical isolation. |
| **Approved Providers** | [e.g., AWS ap-southeast-1, Azure Southeast Asia, Google Cloud asia-southeast1] |
| **Risk Level** | Medium to High |
| **Minimum Control Requirements** | Encryption at rest and in transit; strong IAM; network segmentation; DLP; continuous monitoring |
| **Restrictions** | Restricted data must not be processed in public cloud without specific CGWG approval and additional compensating controls |

#### 4.3.2 Private Cloud

| Item | Details |
|---|---|
| **Description** | Cloud infrastructure dedicated exclusively to [Organization Name], either on-premises or hosted by a dedicated provider. |
| **Examples** | [e.g., VMware-based private cloud in [Organization Name]'s data centre; dedicated hosted environment] |
| **Risk Level** | Medium |
| **Minimum Control Requirements** | Full infrastructure security controls as per on-premises standards; all IaaS controls apply |

#### 4.3.3 Hybrid Cloud

| Item | Details |
|---|---|
| **Description** | A combination of private and public cloud, with data and workloads able to move between them via secure interconnects. |
| **Risk Level** | Medium to High |
| **Minimum Control Requirements** | All public and private cloud controls; additional requirements for secure interconnect (VPN/ExpressRoute/Direct Connect); data classification enforcement at boundary |
| **Special Considerations** | Network traffic between environments must be encrypted; identity federation must be securely configured |

#### 4.3.4 Multi-Cloud

| Item | Details |
|---|---|
| **Description** | The use of cloud services from two or more distinct CSPs. |
| **Risk Level** | High |
| **Minimum Control Requirements** | Consistent control baseline across all CSPs; centralized monitoring and SIEM integration; unified IAM strategy; consistent data classification enforcement |
| **Special Considerations** | Cloud Security Posture Management (CSPM) tools required; API integration security must be assessed |

### 4.4 Cloud Service Inventory

*Maintain a current inventory of all approved cloud services. The complete inventory is maintained in Appendix B and updated by the Cloud Architecture Lead.*

| Service Name | Provider | Model | Deployment | Data Classification | Business Owner | Approval Date |
|---|---|---|---|---|---|---|
| [Service Name] | [Provider] | [IaaS/PaaS/SaaS] | [Public/Private/Hybrid] | [Classification] | [Owner] | [Date] |
| [Service Name] | [Provider] | [IaaS/PaaS/SaaS] | [Public/Private/Hybrid] | [Classification] | [Owner] | [Date] |
| [Service Name] | [Provider] | [IaaS/PaaS/SaaS] | [Public/Private/Hybrid] | [Classification] | [Owner] | [Date] |

---

## 5. Data Residency Requirements

*This section is of critical importance for BNM compliance. Document all requirements governing where data may be stored, processed, and transmitted in cloud environments, referencing applicable BNM RMiT clauses and PDPA obligations.*

### 5.1 Regulatory Basis

[Organization Name]'s data residency requirements for cloud environments are derived from the following regulatory and legal sources:

| Requirement Source | Relevant Provision | Summary Obligation |
|---|---|---|
| **BNM RMiT** | Clause 17.2 | Financial institutions must ensure that data stored in cloud environments complies with data residency requirements and that BNM retains the ability to access and examine such data. |
| **BNM RMiT** | Clause 20 (Outsourcing) | Material outsourcing arrangements, including to CSPs, must be approved and subject to ongoing oversight. |
| **Personal Data Protection Act 2010 (PDPA)** | Section 129 | Personal data must not be transferred outside Malaysia unless the destination country provides adequate data protection. |
| **Financial Services Act 2013 (FSA)** | [Relevant section] | [Summarize applicable FSA data handling obligation] |
| **BNM Policy on Outsourcing** | [Relevant clauses] | [Summarize outsourcing-related residency obligations] |

### 5.2 Data Classification and Residency Matrix

*Define where each category of organizational data may reside. This matrix is a critical compliance document.*

| Data Classification | Definition | Permitted Residency | Prohibited Locations | Encryption Required | Additional Controls |
|---|---|---|---|---|---|
| **Restricted** | Highly sensitive data — e.g., cryptographic keys, customer PII, transaction records, authentication credentials | Malaysia only (on-premises or CSP regions with data centres in Malaysia) | Outside Malaysia without BNM approval | Mandatory (AES-256 or equivalent, customer-managed keys) | Air-gapped environments preferred; BNM prior notification may be required |
| **Confidential** | Business-sensitive data — e.g., internal financial data, HR data, strategic plans | Malaysia preferred; ASEAN approved CSP regions with contractual residency guarantee | Outside ASEAN without CGWG approval | Mandatory (AES-256 or equivalent) | Contractual data residency clause mandatory |
| **Internal** | Internal operational data — e.g., internal communications, non-sensitive operational data | Malaysia and approved CSP regions | Countries with inadequate data protection (PDPA Schedule) | Mandatory in transit; recommended at rest | Standard CSP security controls |
| **Public** | Data intended for public disclosure | No restriction | Jurisdictions under international sanctions | Not required | Standard CSP security controls |

### 5.3 Approved Cloud Regions and Data Centres

*List all CSP regions and data centres approved for use, their geographic location, and the data classifications they are permitted to host.*

| CSP | Region/Data Centre Name | Geographic Location | Permitted Data Classifications | CSP Data Centre Certification | Notes |
|---|---|---|---|---|---|
| [CSP Name] | [Region Name, e.g., ap-southeast-3] | [Country, City] | [Restricted / Confidential / Internal / Public] | [ISO 27001, SOC 2, etc.] | [Any notes] |
| [CSP Name] | [Region Name] | [Country, City] | [Classification] | [Certifications] | [Notes] |
| [CSP Name] | [Region Name] | [Country, City] | [Classification] | [Certifications] | [Notes] |

**Note:** The use of any CSP region not listed in the above table requires CGWG approval and must be added to the Approved Cloud Regions list before data is stored or processed.

### 5.4 Data Sovereignty Controls

To ensure data sovereignty and compliance with residency requirements, [Organization Name] shall implement the following controls:

1. **Contractual Data Residency Clauses:** All CSP contracts must include explicit data residency commitments specifying the jurisdictions in which [Organization Name] data may be stored and processed. Subprocessor chains must be documented and approved.

2. **CSP Configuration Controls:** Cloud environments must be configured with regional restrictions (e.g., AWS Service Control Policies, Azure Policy, GCP Organization Policies) to prevent data storage or processing outside approved regions.

3. **Data Location Verification:** The Cloud Security Team shall conduct quarterly verification of data residency using CSP-provided tools and audit logs to confirm that data has not migrated outside approved regions.

4. **Encryption Key Control:** For Restricted data, encryption keys must be managed by [Organization Name] (customer-managed keys — CMK) and stored in a Hardware Security Module (HSM) or Key Management Service (KMS) located within Malaysia.

5. **Data in Transit Controls:** All data in transit between [Organization Name] systems and cloud environments must be encrypted using TLS 1.2 or higher. Clear-text transmission of any classified data is prohibited.

6. **Backup and Replication Restrictions:** Data backup and replication configurations must enforce the same residency restrictions as primary data. Cross-region replication outside approved geographies is prohibited.

### 5.5 BNM Access and Examination Rights

In accordance with BNM RMiT requirements, [Organization Name] must ensure that:

1. **BNM Right of Access:** CSP contracts must include provisions granting BNM (or its appointed representatives) the right to access, inspect, and audit [Organization Name]'s cloud environments, data, and records upon request.

2. **Audit Trail Availability:** Audit logs related to all cloud-hosted regulated data must be retained and accessible to BNM within [specify timeframe, e.g., 24 hours] of a request.

3. **Data Portability:** [Organization Name] must be able to retrieve all data from a CSP within [specify timeframe] in the event of regulatory direction or CSP insolvency/exit. Data portability procedures are documented in the Cloud Exit Plan [Reference: Appendix C].

4. **Examination Support:** The Cloud Architecture Lead is designated as the primary contact for BNM examinations involving cloud environments and is responsible for coordinating access and information requests.

### 5.6 Cross-Border Data Transfer Assessment

*Document the process for assessing and approving cross-border data transfers where necessary.*

Where a business need requires data to cross Malaysian borders (e.g., use of a global SaaS platform), the following assessment must be completed prior to approval:

| Assessment Step | Description | Responsible Party | Output |
|---|---|---|---|
| **PDPA Transfer Assessment** | Assess whether the destination country provides adequate data protection under PDPA Schedule | Legal / Compliance | Transfer Assessment Report |
| **BNM Notification Assessment** | Determine whether BNM prior notification or approval is required under RMiT | Compliance Officer | Notification decision |
| **Risk Assessment** | Identify and assess residual risks of cross-border transfer | Cloud Security Team | Risk assessment with mitigating controls |
| **Contract Review** | Confirm data processing agreement includes cross-border transfer clauses, standard contractual clauses, or binding corporate rules | Legal | Approved contract |
| **CGWG Approval** | Formal approval for cross-border data transfer | CGWG | Approval minute |

---

## 6. Shared Responsibility Matrix

*The shared responsibility model is foundational to cloud security. This section defines the allocation of security responsibilities between [Organization Name] and cloud service providers for each service model.*

### 6.1 Principles of Shared Responsibility

In cloud environments, security responsibilities are divided between the CSP and the customer ([Organization Name]) according to the service model. The CSP is responsible for securing the underlying infrastructure ("security OF the cloud"), while [Organization Name] is responsible for securing what it deploys and configures within the cloud ("security IN the cloud").

A clear understanding and documentation of this division is mandatory under BNM RMiT Clause 17.2. Ambiguity in shared responsibility is a key source of cloud security risk and must be resolved before any cloud service is deployed.

**Key principle:** Even where a control is identified as a CSP responsibility, [Organization Name] retains accountability for ensuring that the CSP is fulfilling that responsibility through contractual commitments, independent audit reports, and ongoing monitoring.

### 6.2 Master Shared Responsibility Matrix

*The following matrix defines responsibility allocation across all major security domains. Use R = Responsible (performs the activity), A = Accountable (owns the outcome), C = Consulted, I = Informed, CSP = Cloud Service Provider.*

| Security Domain | Control Activity | IaaS — [Org] | IaaS — CSP | PaaS — [Org] | PaaS — CSP | SaaS — [Org] | SaaS — CSP |
|---|---|---|---|---|---|---|---|
| **Physical Security** | Physical data centre security | I | R/A | I | R/A | I | R/A |
| **Physical Security** | Environmental controls (power, cooling, fire) | I | R/A | I | R/A | I | R/A |
| **Network — Physical** | Physical network infrastructure | I | R/A | I | R/A | I | R/A |
| **Network — Virtual** | Virtual network configuration (VPC/VNet) | R/A | C | R/A | C | I | R/A |
| **Network — Virtual** | Firewall rules and security groups | R/A | I | R/A | C | I | R/A |
| **Network — Virtual** | DDoS protection | C | R/A | C | R/A | I | R/A |
| **Compute** | Hypervisor security | I | R/A | I | R/A | I | R/A |
| **Compute** | Virtual machine / container hardening | R/A | I | R/A | C | I | R/A |
| **Compute** | OS patching and updates | R/A | I | C | R/A | I | R/A |
| **Identity & Access** | CSP IAM platform security | C | R/A | C | R/A | C | R/A |
| **Identity & Access** | User account provisioning and deprovisioning | R/A | I | R/A | I | R/A | C |
| **Identity & Access** | MFA enforcement | R/A | C | R/A | C | R/A | C |
| **Identity & Access** | Privileged access management | R/A | I | R/A | I | R/A | C |
| **Identity & Access** | Role-based access control configuration | R/A | I | R/A | I | R/A | C |
| **Data** | Data classification | R/A | I | R/A | I | R/A | I |
| **Data** | Encryption at rest | R/A | C | R/A | C | C | R/A |
| **Data** | Encryption in transit | R/A | C | R/A | C | C | R/A |
| **Data** | Encryption key management | R/A | C | R/A | C | R/A | C |
| **Data** | Data Loss Prevention (DLP) | R/A | I | R/A | I | R/A | C |
| **Data** | Data backup and recovery | R/A | C | R/A | C | R/A | C |
| **Applications** | Application code security | R/A | I | R/A | I | I | R/A |
| **Applications** | Application configuration security | R/A | I | R/A | C | R/A | C |
| **Applications** | Vulnerability scanning (application) | R/A | I | R/A | C | I | R/A |
| **Security Monitoring** | Platform-level security logging | C | R/A | C | R/A | C | R/A |
| **Security Monitoring** | Application and data access logging | R/A | I | R/A | I | R/A | C |
| **Security Monitoring** | SIEM integration | R/A | C | R/A | C | R/A | C |
| **Security Monitoring** | Threat detection and alerting | R/A | C | R/A | C | R/A | C |
| **Incident Response** | CSP platform incident response | C | R/A | C | R/A | C | R/A |
| **Incident Response** | Customer workload incident response | R/A | C | R/A | C | R/A | C |
| **Incident Response** | Regulatory breach notification | R/A | C | R/A | C | R/A | C |
| **Compliance** | CSP infrastructure compliance certifications | C | R/A | C | R/A | C | R/A |
| **Compliance** | Workload compliance posture | R/A | I | R/A | I | R/A | C |
| **Compliance** | Penetration testing (customer workloads) | R/A | C | R/A | C | R/A | C |

### 6.3 CSP-Specific Responsibility Addenda

*For each approved CSP, document any provider-specific deviations from the master matrix.*

#### 6.3.1 [CSP Name 1] — Responsibility Addendum

| Control Area | Deviation from Master Matrix | Justification | Reference |
|---|---|---|---|
| [Control Area] | [How responsibility differs] | [Reason] | [CSP documentation reference] |
| [Control Area] | [How responsibility differs] | [Reason] | [CSP documentation reference] |

#### 6.3.2 [CSP Name 2] — Responsibility Addendum

| Control Area | Deviation from Master Matrix | Justification | Reference |
|---|---|---|---|
| [Control Area] | [How responsibility differs] | [Reason] | [CSP documentation reference] |

### 6.4 Residual Risk from Shared Responsibility Gaps

*Identify and document any security gaps arising from the shared responsibility model that require compensating controls.*

| Gap Description | Applicable Service Model | Risk Level | Compensating Control | Owner |
|---|---|---|---|---|
| [Description of gap — e.g., CSP does not support customer-managed keys for specific PaaS service] | [IaaS/PaaS/SaaS] | [High/Medium/Low] | [Compensating control — e.g., application-level encryption] | [Owner] |
| [Description of gap] | [Model] | [Level] | [Compensating control] | [Owner] |

---

## 7. Identity and Access Management Controls

*This section defines the mandatory identity and access management (IAM) security controls applicable to all cloud environments.*

### 7.1 IAM Principles

All identity and access management in cloud environments shall adhere to the following principles:

- **Zero Trust:** No user, device, or service is inherently trusted. All access requests must be verified regardless of network location.
- **Least Privilege:** Access rights are granted on a need-to-know, need-to-do basis and are the minimum necessary to perform authorized functions.
- **Just-in-Time Access:** Privileged access is granted for the minimum time necessary and revoked immediately upon task completion.
- **Separation of Duties:** Critical functions are divided among multiple individuals to prevent fraud and error.

### 7.2 Identity Management Controls

| Control ID | Control | Requirement | Verification Method |
|---|---|---|---|
| IAM-01 | Identity Inventory | All human and non-human identities with access to cloud environments must be inventoried and reviewed quarterly. | IAM system export; quarterly review evidence |
| IAM-02 | Unique Identity | Every user must have a unique identity; shared or generic accounts are prohibited except for approved service accounts with documented justification. | IAM policy configuration; account audit |
| IAM-03 | Identity Lifecycle Management | Identities must be provisioned, modified, and deprovisioned through an approved joiner-mover-leaver (JML) process integrated with HR systems. | JML process documentation; access review records |
| IAM-04 | Access Reviews | Access rights for all cloud environments must be reviewed at minimum quarterly for privileged accounts and semi-annually for standard accounts. | Access review records |
| IAM-05 | Service Accounts | Service accounts must be documented, use dedicated identities (not personal accounts), and be subject to access reviews. Key rotation must occur at minimum annually. | Service account inventory; key rotation logs |
| IAM-06 | Federated Identity | Where feasible, cloud IAM must be federated with [Organization Name]'s corporate identity provider (IdP) using SAML 2.0 or OIDC. | SSO/federation configuration |

### 7.3 Authentication Controls

| Control ID | Control | Requirement | Verification Method |
|---|---|---|---|
| AUTH-01 | Multi-Factor Authentication (MFA) | MFA is mandatory for all human access to cloud management consoles, privileged roles, and access to Confidential or Restricted data. | MFA policy configuration; access logs |
| AUTH-02 | Strong Password Policy | Passwords must meet minimum complexity requirements: minimum 12 characters, complexity enabled, no reuse of last 12 passwords. | IAM policy configuration |
| AUTH-03 | Session Management | Cloud management sessions must time out after [specify, e.g., 15 minutes] of inactivity. | Session policy configuration |
| AUTH-04 | Certificate-Based Authentication | Service-to-service authentication must use certificates or managed identities, not static passwords or API keys embedded in code. | Code review; IAM configuration |
| AUTH-05 | Emergency Access | Break-glass emergency access accounts must be maintained, their credentials stored securely offline, and their use logged and reviewed. | Break-glass procedure; access logs |

### 7.4 Privileged Access Management (PAM)

| Control ID | Control | Requirement |
|---|---|---|
| PAM-01 | Privileged Account Inventory | All privileged accounts (admin, root, global admin) in cloud environments must be inventoried. |
| PAM-02 | Privileged Identity Management | Privileged access must be managed through a Privileged Access Management (PAM) solution or equivalent control. |
| PAM-03 | Just-in-Time Privilege Elevation | Standing privileged access must be eliminated; privileged roles are elevated only when required and for the minimum time necessary. |
| PAM-04 | Privileged Session Recording | Sessions conducted under privileged accounts must be recorded and retained for a minimum of [specify, e.g., 12 months]. |
| PAM-05 | No Direct Root/Admin Usage | Root account (AWS) or Global Administrator (Azure/Google) must not be used for routine operations. Dedicated admin accounts must be used. |

---

## 8. Network Security Controls

*Define the mandatory network security controls for all cloud environments.*

### 8.1 Network Segmentation

| Control ID | Control | Requirement |
|---|---|---|
| NET-01 | Virtual Network Isolation | All cloud workloads must be deployed within dedicated virtual networks (VPC/VNet) that are logically isolated from other tenants and from non-production environments. |
| NET-02 | Subnet Segmentation | Virtual networks must be segmented into subnets by function (e.g., public-facing, application, data tiers) with traffic controlled between subnets. |
| NET-03 | Production/Non-Production Separation | Production and non-production cloud environments must be in separate virtual networks and, where possible, separate cloud accounts/subscriptions. |
| NET-04 | DMZ Architecture | Publicly accessible services must be placed in a DMZ subnet, separated from internal application and data tiers. |

### 8.2 Perimeter and Firewall Controls

| Control ID | Control | Requirement |
|---|---|---|
| NET-05 | Default Deny | Network security groups and firewall rules must implement a default-deny posture; only explicitly required traffic is permitted. |
| NET-06 | Ingress Controls | All inbound internet traffic must pass through a Web Application Firewall (WAF) and/or Next-Generation Firewall (NGFW) before reaching application resources. |
| NET-07 | Egress Controls | Outbound internet traffic from cloud environments must be routed through controlled egress points. Unrestricted internet egress is prohibited. |
| NET-08 | Rule Review | Firewall and network security group rules must be reviewed quarterly and any unused or overly permissive rules remediated. |

### 8.3 Secure Connectivity

| Control ID | Control | Requirement |
|---|---|---|
| NET-09 | Encrypted Transit | All data in transit between [Organization Name] on-premises systems and cloud environments must use encrypted tunnels (VPN, ExpressRoute, Direct Connect). |
| NET-10 | TLS Standard | All application-level communication must use TLS 1.2 or higher. TLS 1.0 and 1.1 must be disabled. |
| NET-11 | No Public Exposure of Management Interfaces | Cloud management interfaces (SSH, RDP, management APIs) must not be exposed directly to the public internet. |
| NET-12 | Private Endpoints | Where available, private endpoints or service endpoints must be used to access CSP services (e.g., storage, databases) without routing through the public internet. |

---

## 9. Data Protection and Encryption Controls

*Define mandatory controls for protecting data at rest, in transit, and in use within cloud environments.*

### 9.1 Data Classification Enforcement

| Control ID | Control | Requirement |
|---|---|---|
| DATA-01 | Data Tagging | All cloud resources storing or processing classified data must be tagged with the appropriate data classification label. |
| DATA-02 | Data Discovery | Automated data discovery and classification scanning must be implemented for cloud storage repositories (object storage, databases) processing Confidential or Restricted data. |
| DATA-03 | DLP Controls | Data Loss Prevention (DLP) controls must be configured to detect and prevent unauthorized exfiltration of Confidential and Restricted data. |

### 9.2 Encryption Controls

| Control ID | Control | Algorithm / Standard | Key Management |
|---|---|---|---|
| ENC-01 | Encryption at Rest (Restricted) | AES-256 | Customer-managed keys (CMK) stored in HSM or approved KMS within Malaysia |
| ENC-02 | Encryption at Rest (Confidential) | AES-256 minimum | CMK preferred; CSP-managed keys acceptable with contractual protections |
| ENC-03 | Encryption in Transit | TLS 1.2+ | PKI certificates; certificate management documented |
| ENC-04 | Database Encryption | Transparent Data Encryption (TDE) or equivalent | CMK for Restricted data |
| ENC-05 | Backup Encryption | AES-256 | Same key management as primary data |
| ENC-06 | Key Rotation | Annual minimum for CMK; more frequent for high-risk environments | Key Management Procedure [Reference: Document ID] |

### 9.3 Data Lifecycle and Disposal

| Control ID | Control | Requirement |
|---|---|---|
| DATA-04 | Data Retention | Cloud-hosted data must be retained in accordance with [Organization Name]'s Data Retention Schedule [Reference: Document ID]. Automated lifecycle policies must enforce retention. |
| DATA-05 | Secure Data Deletion | Upon expiry of retention period or contract termination, data must be securely deleted using NIST SP 800-88 standards or equivalent. Certificates of destruction must be obtained from CSPs. |
| DATA-06 | Data Portability | [Organization Name] must maintain the ability to export all data from cloud environments in a usable format within [specify timeframe]. |
| DATA-07 | Test Data | Production data must not be used in non-production (development/test) environments without prior de-identification, anonymization, or pseudonymization. |

---

## 10. Security Monitoring and Logging Controls

*Define requirements for security event logging, monitoring, and alerting in cloud environments.*

### 10.1 Logging Requirements

| Control ID | Log Category | Minimum Events to Log | Retention Period |
|---|---|---|---|
| LOG-01 | Authentication Events | All successful and failed login attempts to cloud management consoles and applications | 12 months online; 7 years archived |
| LOG-02 | Privileged Access | All actions performed under privileged accounts, including API calls | 12 months online; 7 years archived |
| LOG-03 | Configuration Changes | All changes to cloud infrastructure configuration, security groups, IAM policies, and network controls | 12 months online; 7 years archived |
| LOG-04 | Data Access | Access to Confidential and Restricted data, including read, write, and delete operations | 12 months online; 7 years archived |
| LOG-05 | Network Traffic | VPC Flow Logs or equivalent; perimeter firewall logs | 6 months online; 3 years archived |
| LOG-06 | Security Events | Findings from cloud-native security services (e.g., AWS GuardDuty, Azure Defender, GCP Security Command Center) | 12 months online; 7 years archived |
| LOG-07 | API Activity | All API calls to cloud management planes (e.g., AWS CloudTrail, Azure Activity Log, GCP Cloud Audit Logs) | 12 months online; 7 years archived |

### 10.2 Log Integrity and Protection

| Control ID | Control | Requirement |
|---|---|---|
| LOG-08 | Log Immutability | Security logs must be stored in tamper-evident, write-once storage. Deletion or modification of logs must generate an alert. |
| LOG-09 | Log Centralization | All cloud security logs must be forwarded to a centralized Security Information and Event Management (SIEM) system controlled by [Organization Name]. |
| LOG-10 | Log Access Controls | Access to security logs must be restricted to authorized personnel; logs must not be accessible to the teams whose activities they record. |

### 10.3 SIEM and Monitoring

| Control ID | Control | Requirement |
|---|---|---|
| MON-01 | SIEM Integration | All cloud environments in scope must be integrated with [Organization Name]'s SIEM platform within [specify timeframe] of deployment. |
| MON-02 | Detection Rules | Detection rules must be implemented in the SIEM for known cloud attack techniques, including credential abuse, privilege escalation, data exfiltration, and misconfiguration exploitation. |
| MON-03 | 24/7 Monitoring | Cloud security events must be monitored on a 24/7 basis by [Organization Name]'s Security Operations Centre (SOC) or an approved managed security service provider (MSSP). |
| MON-04 | Alert Response | Security alerts must be triaged and responded to within the timeframes defined in the Incident Response Plan [Reference: Document ID]. |
| MON-05 | Cloud Security Posture Management | A CSPM solution must be deployed to continuously assess cloud configurations against security baselines and compliance requirements. |

---

## 11. Vulnerability and Patch Management

*Define controls for identifying and remediating vulnerabilities in cloud-hosted systems.*

### 11.1 Vulnerability Management Controls

| Control ID | Control | Requirement |
|---|---|---|
| VULN-01 | Continuous Scanning | All IaaS virtual machines and containers must be subject to continuous vulnerability scanning. PaaS components under [Organization Name]'s responsibility must be scanned at minimum monthly. |
| VULN-02 | Image Scanning | Container images must be scanned for vulnerabilities before deployment and continuously in registry. Images with critical or high vulnerabilities must not be deployed without a documented exception. |
| VULN-03 | Penetration Testing | Cloud environments hosting Confidential or Restricted data must be subject to independent penetration testing at minimum annually, and after significant architectural changes. |
| VULN-04 | CSPM Assessment | Cloud Security Posture Management tools must be used to continuously identify misconfigurations and deviations from security baselines. |

### 11.2 Patch Management SLAs

| Vulnerability Severity | CVSS Score | Maximum Time to Patch |
|---|---|---|
| **Critical** | 9.0 – 10.0 | 24 hours (emergency patching) |
| **High** | 7.0 – 8.9 | 7 days |
| **Medium** | 4.0 – 6.9 | 30 days |
| **Low** | 0.1 – 3.9 | 90 days |

*Where patching within the above timeframes is not feasible, a documented exception must be raised with compensating controls and escalated to the Cloud Architecture Lead for approval.*

### 11.3 Infrastructure as Code (IaC) Security

| Control ID | Control | Requirement |
|---|---|---|
| IAC-01 | IaC Scanning | Infrastructure as Code templates (Terraform, CloudFormation, Bicep) must be scanned for security misconfigurations before deployment using automated SAST tools. |
| IAC-02 | Secure Baseline Templates | Approved, pre-hardened IaC templates must be maintained and used as the baseline for cloud resource deployment. |
| IAC-03 | Drift Detection | Configuration drift from approved baselines must be detected and remediated. Unauthorized configuration changes must generate alerts. |

---

## 12. Incident Response in Cloud Environments

*Define procedures for detecting, responding to, and recovering from security incidents in cloud environments.*

### 12.1 Cloud-Specific Incident Categories

| Category | Examples | Severity Level |
|---|---|---|
| **Data Breach** | Unauthorized access to or exfiltration of customer or regulated data | Critical |
| **Credential Compromise** | Theft or misuse of cloud IAM credentials; account takeover | Critical / High |
| **Ransomware / Malware** | Encryption or destruction of cloud-hosted data | Critical |
| **Misconfiguration Exposure** | Publicly accessible storage bucket or database containing classified data | High |
| **Unauthorized Configuration Change** | Modifications to security groups, IAM policies, or network rules without authorization | High |
| **Denial of Service** | DDoS attack on cloud-hosted services | Medium / High |
| **Insider Threat** | Unauthorized data access or exfiltration by internal user | Critical |

### 12.2 Cloud Incident Response Procedures

*The detailed Cloud Incident Response Procedure is maintained in [Reference: Cloud Incident Response Playbook, Document ID]. This section provides the high-level framework.*

| Phase | Activities | Responsible Party | Timeframe |
|---|---|---|---|
| **Detect** | Alert triage from SIEM / CSPM; CSP security service findings | SOC | Continuous |
| **Contain** | Isolate affected resources; revoke compromised credentials; block malicious IPs | Cloud Security Team, SOC | Within 1 hour of Critical alert |
| **Eradicate** | Remove malware; remediate misconfigurations; rotate all potentially exposed credentials | Cloud Security Team, Platform Engineering | As required |
| **Recover** | Restore services from clean backups; verify integrity; re-enable access | Cloud Platform Engineering, Business Operations | Per RTO targets |
| **Notify** | Notify BNM (if material); PDPC (if personal data breach); affected customers (as required) | Compliance Officer, Legal | As per regulatory timeframes |
| **Post-Incident Review** | Root cause analysis; lessons learned; control improvements | Cloud Architecture Lead, CISO | Within 14 days of incident closure |

### 12.3 BNM Incident Reporting Obligations

| Incident Type | Reporting Timeline | Reporting Channel |
|---|---|---|
| Material technology or cybersecurity incident | Within [specify hours per BNM guidance] of declaration | BNM secure reporting channel |
| Personal data breach (PDPA) | Within [specify days per PDPA guidance] | PDPC and BNM as applicable |
| Extended service outage (> [specify hours]) | [As per BNM RMiT requirements] | BNM notification |

---

## 13. Business Continuity and Disaster Recovery

*Define requirements for maintaining continuity and recovery of cloud-hosted services.*

### 13.1 Recovery Objectives

Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) for cloud-hosted systems must be aligned with the Business Impact Analysis (BIA) [Reference: Document ID] and the overarching Business Continuity Plan (BCP) [Reference: Document ID].

| System Tier | Definition | Maximum RTO | Maximum RPO |
|---|---|---|---|
| **Tier 1 — Critical** | Core banking, payment systems, customer-facing systems | [e.g., 4 hours] | [e.g., 1 hour] |
| **Tier 2 — Important** | Internal operational systems, regulatory reporting | [e.g., 24 hours] | [e.g., 4 hours] |
| **Tier 3 — Standard** | Non-critical internal systems | [e.g., 72 hours] | [e.g., 24 hours] |

### 13.2 Cloud BCP/DR Controls

| Control ID | Control | Requirement |
|---|---|---|
| BCP-01 | Multi-Region Deployment | Tier 1 systems hosted in cloud must be deployed across minimum two geographically separate CSP regions to provide resilience against regional failure. |
| BCP-02 | Automated Failover | Automated failover capabilities must be configured and tested for all Tier 1 cloud-hosted systems. |
| BCP-03 | Backup and Restore | Cloud-hosted data must be backed up at intervals consistent with the RPO. Backups must be stored in a separate region or account from the primary data. |
| BCP-04 | DR Testing | DR plans for cloud-hosted systems must be tested at minimum annually. Test results and remediation actions must be documented. |
| BCP-05 | CSP Dependency Risk | [Organization Name] must assess the risk of CSP outages and develop contingency plans for extended CSP unavailability, including multi-cloud or hybrid failover options for Tier 1 systems. |
| BCP-06 | Cloud Exit Plan | An up-to-date Cloud Exit Plan [Reference: Appendix C] must be maintained for each CSP, documenting how [Organization Name] can migrate workloads and data in the event of CSP exit, insolvency, or regulatory direction. |

---

## 14. Third-Party Cloud Provider Risk Management

*Define requirements for managing the security risks associated with cloud service providers as third-party entities.*

### 14.1 CSP Due Diligence

Prior to onboarding any cloud service provider or new cloud service, [Organization Name] must complete a formal due diligence assessment covering:

| Due Diligence Area | Minimum Evidence Required | Frequency |
|---|---|---|
| **Security Certifications** | ISO 27001, SOC 2 Type II, CSA STAR; relevant regional certifications | At onboarding; annually |
| **Financial Stability** | Financial statements; credit ratings; company background | At onboarding; annually |
| **Data Residency Capability** | Evidence of in-country data centres; contractual residency commitments | At onboarding; upon change |
| **Subprocessor Chain** | List of subprocessors and their locations; contractual flow-down | At onboarding; upon change |
| **Incident History** | Review of known security incidents and CSP response | At onboarding; annually |
| **BNM Access Rights** | Contractual clause confirming BNM examination rights | At onboarding |
| **Penetration Testing** | Evidence of annual penetration testing of shared infrastructure | At onboarding; annually |
| **Business Continuity** | CSP BCP/DR capabilities and SLAs | At onboarding; annually |

### 14.2 Contractual Requirements

All CSP contracts must include, at minimum, the following security and compliance provisions:

| Clause | Requirement |
|---|---|
| **Data Ownership** | [Organization Name] retains ownership of all data stored or processed by the CSP. |
| **Data Residency** | Explicit commitment to geographic data storage limitations agreed with [Organization Name]. |
| **Security Standards** | CSP commitment to maintain specified security certifications (ISO 27001, SOC 2 Type II). |
| **Audit Rights** | [Organization Name]'s right to audit, inspect, or receive third-party audit reports for the CSP. |
| **BNM Access** | BNM's right to access, inspect, and audit the CSP environment relating to [Organization Name] data. |
| **Incident Notification** | CSP obligation to notify [Organization Name] of security incidents within [specify hours, e.g., 24 hours]. |
| **Data Return/Destruction** | CSP obligation to return or securely destroy all [Organization Name] data upon contract termination. |
| **Subprocessor Management** | CSP obligation to obtain approval before adding subprocessors; flow-down of security requirements. |
| **Change Notification** | CSP obligation to notify [Organization Name] of material changes to security practices, technology, or data handling. |
| **Exit Provisions** | Transition assistance, data portability, and exit support obligations. |

### 14.3 Ongoing CSP Monitoring

| Activity | Frequency | Responsible Party |
|---|---|---|
| Review of CSP security audit reports (SOC 2, ISO cert renewal) | Annual | Cloud Security Team |
| CSP security questionnaire / self-assessment review | Annual | Cloud Security Team |
| Review of CSP security incident notifications | As received; quarterly summary | Cloud Security Team |
| CSP contract compliance review | Annual | Legal / Procurement |
| Material CSP change impact assessment | Upon notification | Cloud Architecture Lead |
| CSP risk rating update in Third-Party Risk Register | Annual or upon material event | Risk Management |

---

## 15. Compliance and Audit Controls

*Define controls for maintaining ongoing compliance with this framework and regulatory requirements.*

### 15.1 Cloud Security Baseline

*Document the approved security baseline configurations for each major cloud environment. Detailed baseline configurations are maintained in the Cloud Security Baseline document [Reference: Document ID].*

| CSP | Service/Platform | Baseline Standard | Baseline Version | Last Updated |
|---|---|---|---|---|
| [CSP] | [Service] | [e.g., CIS Benchmark for AWS, Level 2] | [Version] | [Date] |
| [CSP] | [Service] | [Standard] | [Version] | [Date] |

### 15.2 Continuous Compliance Monitoring

| Control ID | Control | Requirement |
|---|---|---|
| COMP-01 | CSPM Continuous Monitoring | Cloud Security Posture Management (CSPM) tools must be configured to continuously assess all cloud environments against approved security baselines and flag deviations. |
| COMP-02 | Compliance Dashboard | A real-time compliance dashboard must be maintained, showing the control compliance status for all in-scope cloud environments. |
| COMP-03 | Monthly Compliance Report | The Cloud Security Team must produce a monthly cloud security compliance report for review by the CISO and CGWG. |
| COMP-04 | Exception Management | Deviations from this framework must be documented as exceptions, approved by appropriate authority, and time-limited with compensating controls. |

### 15.3 Exception Management Process

| Step | Description | Responsible Party |
|---|---|---|
| **Exception Request** | Business or technical team submits Cloud Security Exception Request Form [Reference: Appendix D] | Requestor |
| **Risk Assessment** | Cloud Security Team assesses risk of the exception and proposes compensating controls | Cloud Security Team |
| **Review and Approval** | CGWG reviews and approves/rejects the exception | CGWG |
| **Documentation** | Approved exception recorded in the Exception Register with expiry date | Cloud Security Team |
| **Monitoring** | Compensating controls monitored; exception reviewed at expiry | Cloud Security Team |

### 15.4 Internal Audit

| Activity | Frequency | Scope | Evidence Required |
|---|---|---|---|
| Cloud Control Framework Compliance Audit | Annual | All in-scope cloud environments | Control testing evidence, logs, configuration screenshots |
| IAM Access Review | Quarterly | All privileged accounts; semi-annually for standard | Access review records |
| Data Residency Compliance Verification | Semi-annual | All cloud storage and processing locations | CSP configuration evidence; log analysis |
| CSP Due Diligence Review | Annual | All approved CSPs | Due diligence assessment reports |
| DR Test Review | Annual | All Tier 1 cloud-hosted systems | DR test plans and results |
| Penetration Test Review | Annual | All environments hosting Confidential/Restricted data | Penetration test reports; remediation evidence |

---

## 16. Roles and Responsibilities

*Define the roles and responsibilities for cloud security across the organization using a RACI framework.*

### 16.1 RACI Key

| Code | Definition |
|---|---|
| **R** | Responsible — performs the activity |
| **A** | Accountable — owns the outcome and makes final decisions |
| **C** | Consulted — provides input before decisions are made |
| **I** | Informed — notified of decisions and outcomes |

### 16.2 Cloud Security RACI Matrix

| Activity | CISO | Cloud Architecture Lead | Cloud Security Team | Cloud Platform Engineering | IT Risk Manager | Compliance Officer | Business Unit Owners | Internal Audit | Legal / Procurement | CSP |
|---|---|---|---|---|---|---|---|---|---|---|
| **Framework Ownership and Maintenance** | A | R | C | I | C | I | I | I | I | I |
| **Cloud Service Approval Process** | A | R | C | C | C | C | I | I | C | I |
| **Cloud Governance Working Group (Chair)** | A | R | C | C | C | C | I | I | I | I |
| **Cloud Security Risk Assessment** | A | C | R | C | C | I | I | I | I | C |
| **IAM Policy Design and Enforcement** | A | C | R | R | I | I | I | I | I | I |
| **Secure Baseline Configuration** | A | R | C | R | I | I | I | I | I | I |
| **Encryption Key Management** | A | C | R | C | I | I | I | I | I | I |
| **Data Residency Compliance Verification** | I | C | R | C | C | R | I | I | C | C |
| **Security Monitoring and SIEM Management** | A | I | R | C | I | I | I | I | I | I |
| **Vulnerability Management** | A | C | R | R | I | I | I | I | I | I |
| **Penetration Testing Coordination** | A | C | R | C | I | I | I | R | I | C |
| **Incident Detection and Initial Response** | A | C | R | C | I | I | I | I | I | I |
| **Incident Escalation and Management** | R/A | R | C | C | C | C | I | I | I | C |
| **BNM Incident Notification** | A | I | C | I | C | R | I | I | C | I |
| **CSP Due Diligence Assessment** | A | R | R | I | C | C | I | I | R | I |
| **CSP Contract Security Review** | A | C | C | I | C | C | I | I | R | I |
| **CSP Ongoing Monitoring** | A | C | R | I | C | I | I | I | I | C |
| **DR Planning and Testing (Cloud)** | A | R | C | R | C | I | C | I | I | I |
| **Exception Request Review and Approval** | A | R | C | C | C | I | I | I | I | I |
| **Annual Framework Review** | A | R | C | C | C | C | I | C | I | I |
| **BNM Examination Support (Cloud)** | A | R | C | C | C | R | I | C | C | C |
| **Internal Audit (Cloud Security)** | I | C | C | I | I | I | I | R/A | I | I |
| **Employee Cloud Security Awareness** | A | C | R | I | I | I | C | I | I | I |

### 16.3 Key Role Descriptions

#### 16.3.1 Cloud Architecture Lead

- **Accountable for:** This Cloud Security Control Framework; all cloud security governance processes; cloud service approval decisions.
- **Key responsibilities:**
  - Chair the Cloud Governance Working Group.
  - Maintain the Cloud Service Inventory and Approved Cloud Regions list.
  - Oversee CSP due diligence and ongoing monitoring.
  - Escalate material cloud security risks to the CISO.
  - Represent [Organization Name] during BNM examinations covering cloud environments.

#### 16.3.2 Cloud Security Team

- **Accountable for:** Operational implementation and monitoring of cloud security controls.
- **Key responsibilities:**
  - Implement and maintain cloud security baselines across all CSPs.
  - Operate CSPM and SIEM tooling for cloud environments.
  - Conduct security risk assessments for new cloud services.
  - Manage vulnerability scanning and remediation tracking.
  - Lead cloud security incident detection and initial response.

#### 16.3.3 Cloud Platform Engineering

- **Accountable for:** Secure deployment and configuration of cloud infrastructure.
- **Key responsibilities:**
  - Deploy and maintain cloud infrastructure in accordance with approved security baselines.
  - Implement and manage IaC templates and pipelines.
  - Execute patching and vulnerability remediation within agreed SLAs.
  - Support DR planning and testing for cloud environments.

#### 16.3.4 Compliance Officer

- **Accountable for:** Regulatory compliance obligations related to cloud, including BNM RMiT, PDPA.
- **Key responsibilities:**
  - Advise on regulatory requirements affecting cloud data handling and residency.
  - Coordinate BNM notifications and examination responses.
  - Monitor regulatory developments that may affect this framework.
  - Review and sign off on cross-border data transfer assessments.

---

## 17. Review and Approval

### 17.1 Review Cycle

This framework shall be reviewed at minimum **annually** in accordance with BNM RMiT requirements and [Organization Name]'s document management policy. Reviews shall also be triggered by:

- Material changes to [Organization Name]'s cloud environment or strategy.
- Significant changes to BNM RMiT or other applicable regulations.
- Material security incidents affecting cloud environments.
- Introduction of a new CSP or cloud service model.
- Findings from internal or external audits.

Reviews are the responsibility of the **Cloud Architecture Lead** and must be approved by the authority level specified in the Approval table below.

### 17.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial release of Cloud Security Control Framework |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes — e.g., Updated CSP approved regions list; added FaaS security controls] |
| [2.0] | [Date] | [Author Name, Title] | [Description of major revision] |

### 17.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Cloud Architecture Lead (Author/Owner) | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Chief Risk Officer (CRO) | [Name] | [Signature] | [Date] |
| Chief Technology Officer (CTO) | [Name] | [Signature] | [Date] |
| Chief Compliance Officer | [Name] | [Signature] | [Date] |
| Chief Executive Officer / MD (if required by policy) | [Name] | [Signature] | [Date] |

---

## 18. References

### 18.1 Regulatory and Legal References

| Reference | Description |
|---|---|
| **BNM RMiT — Clause 17.2** | Cloud security control requirements — primary regulatory basis for this framework |
| **BNM RMiT — Clause 20** | Outsourcing risk management — applicable to all CSP arrangements classified as outsourcing |
| **BNM RMiT — Clause 11** | Security operations, incident management, and threat intelligence |
| **BNM RMiT — Clause 12** | Cyber risk management |
| **BNM Policy on Outsourcing** | Governing [Organization Name]'s outsourcing arrangements with CSPs |
| **Personal Data Protection Act 2010 (PDPA)** | Data privacy obligations, including cross-border data transfer restrictions |
| **Financial Services Act 2013 (FSA)** | Applicable provisions governing technology risk in licensed financial institutions |
| **BNM Policy Document on Operational Risk** | Broader operational risk framework within which cloud risk sits |

### 18.2 Internal Policy References

| Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy for this framework |
| Data Classification Policy | [Doc ID] | Data sensitivity classifications referenced throughout |
| Third-Party Risk Management Policy | [Doc ID] | CSP due diligence and ongoing monitoring |
| Business Continuity Plan | [Doc ID] | RTO/RPO targets for cloud-hosted systems |
| Incident Response Plan | [Doc ID] | Incident response procedures for cloud security events |
| Change Management Policy | [Doc ID] | Governing cloud configuration changes |
| Data Retention Schedule | [Doc ID] | Data retention requirements for cloud-hosted data |
| IT Governance Framework | [Doc ID] | Overarching IT governance structure |
| Cloud Onboarding Procedure | [Doc ID] | Operational procedure for onboarding new cloud services |
| Cloud Incident Response Playbook | [Doc ID] | Detailed cloud-specific incident response procedures |
| Cloud Security Baseline | [Doc ID] | Detailed technical baseline configurations per CSP |
| Acceptable Use Policy | [Doc ID] | Employee obligations for cloud service use |

### 18.3 External Standards and Frameworks

| Standard / Framework | Relevance |
|---|---|
| **ISO/IEC 27001:2022** | Information Security Management System — overarching ISMS standard |
| **ISO/IEC 27017:2015** | Code of practice for information security controls for cloud services |
| **ISO/IEC 27018:2019** | Protection of personal data in public clouds |
| **NIST SP 800-145** | Definition of cloud computing |
| **NIST SP 800-146** | Cloud computing synopsis and recommendations |
| **NIST SP 800-210** | General access control guidance for cloud systems |
| **NIST Cybersecurity Framework (CSF) 2.0** | Risk-based cybersecurity framework |
| **Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) v4** | Cloud-specific control framework used for gap analysis |
| **CSA Security Guidance v4** | Best practice guidance for cloud security architecture |
| **CIS Benchmarks** | Technical security baseline configurations for CSP platforms |
| **MITRE ATT&CK for Cloud** | Threat model for cloud-specific attack techniques |
| **PCI DSS v4.0** | Applicable where cloud environments process payment card data |
| **NIST SP 800-88** | Guidelines for media sanitization (data deletion in cloud) |

---

## 19. Appendices

### Appendix A — Cloud Service Request Form

*This form must be completed by any business unit or technology team requesting the use of a new cloud service or expansion of an existing cloud service.*

---

**CLOUD SERVICE REQUEST FORM**

| Field | Response |
|---|---|
| **Request ID** | [Auto-generated / To be assigned] |
| **Request Date** | [Date] |
| **Requestor Name** | [Name] |
| **Requestor Title** | [Title] |
| **Business Unit** | [Business Unit] |
| **Cloud Service Name** | [Service Name] |
| **Cloud Service Provider** | [CSP Name] |
| **Service Model** | ☐ IaaS  ☐ PaaS  ☐ SaaS  ☐ FaaS |
| **Deployment Model** | ☐ Public  ☐ Private  ☐ Hybrid  ☐ Multi-Cloud |
| **CSP Region(s)** | [Region(s)] |
| **Intended Use / Business Purpose** | [Description] |
| **Data Types to be Processed/Stored** | [List data types] |
| **Highest Data Classification** | ☐ Public  ☐ Internal  ☐ Confidential  ☐ Restricted |
| **Estimated Number of Users** | [Number] |
| **Integration with Other Systems** | [Yes/No — if yes, describe] |
| **Estimated Annual Cost** | [Amount] |
| **Planned Go-Live Date** | [Date] |
| **Existing CSP Contract?** | ☐ Yes (attach)  ☐ No — new contract required |
| **CSP Security Certifications Available** | [List certifications — e.g., ISO 27001, SOC 2 Type II] |
| **Business Justification** | [Detailed justification] |
| **Alternatives Considered** | [On-premises / other cloud / existing tools] |

**Requestor Declaration:** I confirm that the information provided is accurate and that I understand this service will be subject to [Organization Name]'s Cloud Security Control Framework.

| Requestor Signature | Date |
|---|---|
| [Signature] | [Date] |

*For CGWG use only:*

| Decision | ☐ Approved  ☐ Conditionally Approved  ☐ Rejected |
|---|---|
| **Conditions / Compensating Controls Required** | [Details] |
| **CGWG Decision Date** | [Date] |
| **CGWG Chair Signature** | [Signature] |

---

### Appendix B — Cloud Service Inventory

*This inventory is maintained by the Cloud Architecture Lead and updated as cloud services are approved, modified, or decommissioned. A complete and current version of this inventory is available at [location/link].*

| Service ID | Service Name | Provider | Service Model | Deployment | CSP Region(s) | Max Data Classification | Business Owner | Technical Owner | Approval Date | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| CS-001 | [Service Name] | [Provider] | [IaaS/PaaS/SaaS] | [Public/etc.] | [Region] | [Classification] | [Name] | [Name] | [Date] | [Date] | [Active/Decommissioned] |
| CS-002 | [Service Name] | [Provider] | [Model] | [Type] | [Region] | [Classification] | [Name] | [Name] | [Date] | [Date] | [Status] |

---

### Appendix C — Cloud Exit Plan Template

*For each approved CSP, a Cloud Exit Plan must be maintained. The template below outlines the minimum required content.*

---

**CLOUD EXIT PLAN**

**CSP Name:** [Provider Name]
**Plan Owner:** Cloud Architecture Lead
**Last Updated:** [Date]
**Next Review:** [Date]

**1. Exit Triggers**

| Trigger | Description |
|---|---|
| Voluntary Exit | [Organization Name] decision to migrate to another provider or on-premises |
| Regulatory Direction | BNM or other regulator directs cessation of use |
| CSP Insolvency | CSP enters administration or ceases operations |
| Material Security Failure | CSP fails to meet contractual security obligations |
| Contract Expiry | Natural end of contract without renewal |

**2. Data Inventory**

| Data Category | Volume (Estimated) | Location (CSP Region/Service) | Export Format | Retention Required |
|---|---|---|---|---|
| [Category] | [Volume] | [Location] | [Format] | [Yes/No] |

**3. Migration Timeline**

| Phase | Activity | Responsible Party | Duration | Dependencies |
|---|---|---|---|---|
| Preparation | Inventory all data and configurations; identify target environment | Cloud Architecture Lead | [Duration] | [Dependencies] |
| Data Export | Export all data in portable format | Cloud Platform Engineering | [Duration] | CSP cooperation |
| Migration | Transfer data to target environment | Cloud Platform Engineering | [Duration] | Target environment readiness |
| Validation | Verify data completeness and integrity in target environment | Cloud Security Team | [Duration] | Migration completion |
| Decommission | Revoke access; request data deletion certificates | Cloud Architecture Lead | [Duration] | Validation completion |

**4. Data Deletion and Certification**
Upon completion of exit, [Organization Name] shall obtain a written Certificate of Data Deletion from the CSP confirming secure deletion of all [Organization Name] data in accordance with NIST SP 800-88 standards.

**5. Contingency Measures**
In the event of emergency exit (e.g., CSP insolvency), the following interim measures shall apply: [Document interim measures — e.g., use of secondary CSP, on-premises fallback].

---

### Appendix D — Cloud Security Exception Request Form

*Use this form to request an exception to any control requirement in this framework.*

---

**CLOUD SECURITY EXCEPTION REQUEST FORM**

| Field | Response |
|---|---|
| **Exception Request ID** | [To be assigned] |
| **Request Date** | [Date] |
| **Requestor Name and Title** | [Name, Title] |
| **Business Unit** | [Unit] |
| **Cloud Service / Environment Affected** | [Service/Environment] |
| **Framework Control Being Excepted** | [Control ID and description] |
| **Reason for Exception** | [Detailed justification — technical, business, or operational reason] |
| **Risk Assessment** | [Description of the risk created by the exception] |
| **Risk Level (Requestor Assessment)** | ☐ Critical  ☐ High  ☐ Medium  ☐ Low |
| **Compensating Controls Proposed** | [List of mitigating controls to reduce residual risk] |
| **Requested Exception Period** | From: [Date]  To: [Date — maximum 12 months] |
| **Alternative Solutions Considered** | [Description of alternatives assessed and why they were rejected] |

**Cloud Security Team Assessment:**

| Field | Response |
|---|---|
| **Agreed Risk Level** | ☐ Critical  ☐ High  ☐ Medium  ☐ Low |
| **Compensating Controls — Adequacy Assessment** | ☐ Adequate  ☐ Inadequate  ☐ Conditionally adequate |
| **Cloud Security Team Recommendation** | ☐ Approve  ☐ Reject  ☐ Conditional approval |
| **Comments** | [Comments] |
| **Cloud Security Team Sign-off** | [Name, Date] |

**CGWG Decision:**

| Decision | ☐ Approved  ☐ Rejected |
|---|---|
| **Conditions** | [Any conditions attached to approval] |
| **CGWG Chair Signature** | [Signature, Date] |

---

### Appendix E — Cloud Security Control Testing Schedule

*Annual schedule of cloud security control testing activities.*

| Control Domain | Test Activity | Method | Frequency | Responsible Party | Next Due |
|---|---|---|---|---|---|
| IAM | Privileged access review | Manual review of IAM exports | Quarterly | Cloud Security Team | [Date] |
| IAM | Service account key rotation verification | Automated + manual check | Quarterly | Cloud Security Team | [Date] |
| Network | Firewall rule review | Manual review + CSPM | Quarterly | Cloud Security Team | [Date] |
| Data | Data residency verification | Log analysis + CSP configuration review | Semi-annual | Cloud Security Team | [Date] |
| Data | Encryption key management review | Manual + KMS audit | Annual | Cloud Security Team | [Date] |
| Monitoring | SIEM detection rule testing | Purple team exercise | Annual | Cloud Security Team / SOC | [Date] |
| Vulnerability | External penetration test (cloud) | Third-party engagement | Annual | Cloud Architecture Lead | [Date] |
| DR | Disaster recovery test | Simulated failover | Annual | Cloud Platform Engineering | [Date] |
| CSP | CSP due diligence review | Document review + questionnaire | Annual | Cloud Security Team | [Date] |
| Compliance | CSPM benchmark compliance report | Automated (CSPM tool) | Continuous | Cloud Security Team | Ongoing |
| IaC | IaC template security scan | Automated SAST in CI/CD | Per deployment | Cloud Platform Engineering | Ongoing |

---

### Appendix F — Glossary

| Term | Definition |
|---|---|
| **API** | Application Programming Interface — a method for software systems to communicate. |
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia. |
| **BRC** | Board Risk Committee — board-level committee overseeing risk governance. |
| **CGWG** | Cloud Governance Working Group — operational governance body for cloud security. |
| **CISO** | Chief Information Security Officer. |
| **CMK** | Customer-Managed Key — encryption key owned and managed by the customer rather than the CSP. |
| **CSPM** | Cloud Security Posture Management — tools for continuous assessment of cloud security configurations. |
| **CSP** | Cloud Service Provider — a third-party provider of cloud computing services. |
| **DLP** | Data Loss Prevention — controls to prevent unauthorized exfiltration of sensitive data. |
| **DR** | Disaster Recovery. |
| **FaaS** | Function as a Service — a serverless computing model. |
| **HSM** | Hardware Security Module — a dedicated hardware device for secure cryptographic key management. |
| **IaaS** | Infrastructure as a Service — a cloud model where the CSP provides virtualized infrastructure. |
| **IAM** | Identity and Access Management. |
| **IaC** | Infrastructure as Code — the practice of managing infrastructure through machine-readable configuration files. |
| **IdP** | Identity Provider — a system that creates and manages user identities and authentication. |
| **ISMS** | Information Security Management System. |
| **JML** | Joiner-Mover-Leaver — the process for managing user access through the employment lifecycle. |
| **KMS** | Key Management Service — a cloud service for managing encryption keys. |
| **MFA** | Multi-Factor Authentication. |
| **MSSP** | Managed Security Service Provider. |
| **NACSA** | National Cyber Security Agency (Malaysia). |
| **NGFW** | Next-Generation Firewall. |
| **OIDC** | OpenID Connect — an authentication protocol built on OAuth 2.0. |
| **PaaS** | Platform as a Service — a cloud model where the CSP provides a managed application platform. |
| **PAM** | Privileged Access Management. |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia). |
| **PDPC** | Personal Data Protection Commissioner (Malaysia). |
| **PKI** | Public Key Infrastructure. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk in financial institutions. |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss in the event of a disaster. |
| **RTO** | Recovery Time Objective — the maximum acceptable downtime before service must be restored. |
| **SAML** | Security Assertion Markup Language — a protocol for federated identity and SSO. |
| **SAST** | Static Application Security Testing. |
| **SIEM** | Security Information and Event Management. |
| **SLA** | Service Level Agreement. |
| **SOC** | Security Operations Centre. |
| **SaaS** | Software as a Service — a cloud model where the CSP provides a fully managed application. |
| **SSO** | Single Sign-On. |
| **TDE** | Transparent Data Encryption. |
| **TLS** | Transport Layer Security. |
| **VPC/VNet** | Virtual Private Cloud / Virtual Network — logically isolated network segment in the cloud. |
| **WAF** | Web Application Firewall. |

---

### Appendix G — Cloud Security Metrics and KPIs

*The following metrics shall be tracked and reported monthly to the CGWG and quarterly to the IT Security Committee.*

| Metric ID | Metric | Target | Measurement Method | Reporting Frequency |
|---|---|---|---|---|
| KPI-01 | Percentage of cloud environments compliant with security baseline | ≥ 95% | CSPM compliance score | Monthly |
| KPI-02 | Mean Time to Remediate Critical vulnerabilities | ≤ 24 hours | Vulnerability management system | Monthly |
| KPI-03 | Mean Time to Remediate High vulnerabilities | ≤ 7 days | Vulnerability management system | Monthly |
| KPI-04 | Percentage of privileged access accounts with MFA enforced | 100% | IAM audit | Monthly |
| KPI-05 | Percentage of cloud storage repositories with encryption enabled | 100% | CSPM / CSP console | Monthly |
| KPI-06 | Percentage of cloud environments integrated with SIEM | 100% | SIEM integration audit | Monthly |
| KPI-07 | Number of unapproved cloud services detected (shadow IT) | 0 | Cloud discovery tools | Monthly |
| KPI-08 | Number of open cloud security exceptions beyond approved period | 0 | Exception register | Monthly |
| KPI-09 | Percentage of CSPs with current SOC 2 Type II or equivalent | 100% | CSP due diligence records | Annual |
| KPI-10 | Cloud security incident mean time to detect (MTTD) | [Target per SOC SLA] | SOC metrics | Monthly |
| KPI-11 | Cloud security incident mean time to respond (MTTR) | [Target per IRP] | SOC metrics | Monthly |
| KPI-12 | Percentage of cloud access reviews completed on schedule | 100% | Access review records | Quarterly |
| KPI-13 | Data residency compliance rate | 100% | Residency verification audit | Semi-annual |
| KPI-14 | Percentage of critical cloud systems with tested DR plans | 100% | DR test records | Annual |

---

*End of Document*

---

**Document Control:** This document is subject to version control. Printed copies are uncontrolled. Always refer to the document management system for the current approved version.

**[Organization Name] | Cloud Security Control Framework | Version 1.0 | Confidential**