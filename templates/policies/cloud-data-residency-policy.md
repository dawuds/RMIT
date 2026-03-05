# Cloud Data Residency Policy

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
| **Status** | [Draft / Under Review / Approved] |

---

> **CONFIDENTIALITY NOTICE:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution of this document is strictly prohibited. This document contains information subject to regulatory obligations under Bank Negara Malaysia (BNM) guidelines.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context and References](#3-regulatory-context-and-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Policy Statements and Requirements](#5-policy-statements-and-requirements)
6. [Cloud Service Model and Deployment Types](#6-cloud-service-model-and-deployment-types)
7. [Data Residency Requirements](#7-data-residency-requirements)
8. [Data Classification and Residency Mapping](#8-data-classification-and-residency-mapping)
9. [Shared Responsibility Matrix](#9-shared-responsibility-matrix)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Risk Management and Controls](#11-risk-management-and-controls)
12. [Monitoring, Compliance, and Audit](#12-monitoring-compliance-and-audit)
13. [Exceptions and Escalation](#13-exceptions-and-escalation)
14. [Policy Violations and Enforcement](#14-policy-violations-and-enforcement)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*State the primary objective of this policy. Explain why the policy exists, what risk or regulatory requirement it addresses, and the expected outcome of its application across the organization.*

This policy defines the data residency requirements applicable to all data processed, stored, or transmitted through cloud computing environments within [Organization Name]. It establishes mandatory controls, obligations, and governance mechanisms to ensure that data — particularly personal data, material nonpublic information, and data classified as sensitive or critical — remains within approved geographical boundaries as required by Bank Negara Malaysia (BNM) and applicable Malaysian legislation.

The policy seeks to:

- Ensure compliance with BNM's **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 10.52**, governing the use of public cloud services by financial institutions.
- Uphold [Organization Name]'s obligations under the **Personal Data Protection Act 2010 (PDPA)** with respect to cross-border data transfer restrictions.
- Mitigate risks arising from unauthorised data location, jurisdictional exposure, and regulatory non-compliance when leveraging cloud service providers (CSPs).
- Provide clear guidance to cloud architects, data owners, IT operations, and third-party vendors on the acceptable residency of data across all cloud service models and deployment configurations.
- Establish accountability mechanisms that ensure data residency controls are continuously monitored, enforced, and reported to senior management.

This policy is a mandatory governance instrument and compliance with its provisions is required without exception unless a formal exception has been approved in accordance with Section 13 of this document.

---

## 2. Scope

*Define the boundaries of this policy — which entities, systems, data types, personnel, geographies, and cloud services are covered. Be specific about what is included and explicitly note what is excluded if applicable.*

### 2.1 Organizational Scope

This policy applies to:

- **[Organization Name]** and all its subsidiaries, affiliates, and associated entities operating within Malaysia that are subject to BNM oversight.
- All **employees, contractors, consultants, vendors, and third parties** who access, manage, process, or store organizational data using cloud services on behalf of [Organization Name].
- All **business units and functional departments** that utilize cloud services — whether procured centrally through IT or procured independently (shadow IT arrangements are explicitly subject to this policy).

### 2.2 Technical Scope

This policy applies to:

- All **cloud service providers (CSPs)** engaged by [Organization Name], including but not limited to [CSP Name 1], [CSP Name 2], and [CSP Name 3].
- All **cloud service models**, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).
- All **cloud deployment models**, including public cloud, private cloud, hybrid cloud, and multi-cloud environments.
- All **data types** processed, stored, or transmitted within cloud environments, including structured, unstructured, and semi-structured data.
- All **cloud-hosted applications**, microservices, APIs, databases, data lakes, data warehouses, and backup/archive systems.
- **Disaster recovery (DR) and business continuity (BCP) environments** hosted or replicated in cloud infrastructure.
- **DevOps, CI/CD pipelines, and test/development environments** that process or replicate production data.

### 2.3 Data Scope

This policy applies to all data in the following categories when residing in cloud environments:

- Customer personal data and financial records
- Transaction data and payment records
- Employee personal data
- Regulatory reporting data
- Intellectual property and proprietary business information
- Cryptographic keys and authentication credentials
- Audit logs and compliance records
- Any data classified as **Restricted**, **Confidential**, or **Internal** under [Organization Name]'s Data Classification Policy

### 2.4 Exclusions

*List any specific systems, data types, or environments that are explicitly excluded from this policy and provide rationale.*

The following are excluded from this policy, subject to separate governance frameworks:

| Exclusion | Rationale | Governing Document |
|---|---|---|
| [Excluded System/Data Type 1] | [Rationale] | [Reference Policy/Document] |
| [Excluded System/Data Type 2] | [Rationale] | [Reference Policy/Document] |
| Anonymized and aggregated datasets with no re-identification risk | No personal data or regulatory sensitivity | Data Anonymization Standard |
| Publicly available marketing and promotional content | No sensitivity or regulatory nexus | Marketing Policy |

---

## 3. Regulatory Context and References

*Summarize the regulatory obligations that necessitate this policy. Reference specific clauses, acts, and guidelines. This section establishes the legal and regulatory foundation for all requirements stated in this policy.*

### 3.1 Regulatory Foundation

[Organization Name] operates under the regulatory supervision of Bank Negara Malaysia (BNM) as a licensed [financial institution type, e.g., licensed bank / insurance company / payment service provider]. The use of cloud services by financial institutions in Malaysia is governed by the following regulatory instruments:

| Regulatory Instrument | Issuing Authority | Relevant Provision | Summary of Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.52 | Cloud service outsourcing controls including data residency, access rights, and exit management |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.53 – 10.57 | Additional cloud-specific controls on concentration risk, audit rights, and regulatory access |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Communications and Multimedia | Section 129 | Prohibition on cross-border transfer of personal data without adequate protection |
| Financial Services Act 2013 (FSA) | BNM | Section 47 | BNM's right to access data and systems, including cloud-hosted data |
| Islamic Financial Services Act 2013 (IFSA) | BNM | Section 57 | Equivalent access and data provisions for Islamic financial institutions |
| National Cyber Security Policy (NCSP) | NACSA / MOSTI | [Relevant section] | Requirements for critical information infrastructure protection |
| [Other applicable regulation] | [Authority] | [Clause] | [Summary] |

### 3.2 BNM RMiT Clause 10.52 Summary

*Provide a plain-language summary of the specific RMiT obligations this policy addresses. Do not reproduce the full clause text without permission; summarize the regulatory intent.*

BNM RMiT Clause 10.52 requires financial institutions that use public cloud services to ensure, among other things, that:

- **Data residency is explicitly addressed** in cloud service agreements, with clear provisions specifying the location(s) where data will be stored, processed, and transmitted.
- **BNM and the financial institution retain the right to access, inspect, and audit** data and cloud infrastructure, regardless of the jurisdiction in which cloud infrastructure is physically located.
- **Data sovereignty is maintained**, ensuring that data subject to Malaysian law remains accessible to BNM and does not become inaccessible due to foreign jurisdictional claims or CSP operational decisions.
- **Cloud service arrangements are subject to robust risk assessment**, including assessment of geopolitical, concentration, and operational risks associated with the cloud provider's data centre locations.
- **Exit and transition plans** address data retrieval and migration in a manner that preserves data integrity and residency compliance upon cessation of the cloud service.

---

## 4. Definitions and Abbreviations

*Define all technical terms, acronyms, and regulatory concepts used throughout this document. This ensures consistent interpretation across all stakeholders.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Cloud Service Provider (CSP)** | A third-party organization that provides cloud computing services including infrastructure, platforms, or software delivered over the internet or a private network. |
| **Cloud Service Model** | The category of cloud service consumed: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), or Software as a Service (SaaS). |
| **Cloud Deployment Model** | The type of cloud deployment: public cloud, private cloud, hybrid cloud, or multi-cloud. |
| **Data Residency** | The physical or virtual location where data is stored, processed, or replicated. In the context of this policy, data residency refers to the country or jurisdiction in which data centre infrastructure is physically located. |
| **Data Sovereignty** | The principle that data is subject to the laws and governance structures of the jurisdiction in which it is physically located. |
| **Data Localisation** | A regulatory requirement that certain categories of data must be stored and processed within a specific geographic boundary (e.g., within Malaysia). |
| **Primary Data Centre** | The main cloud region or availability zone designated for the storage and processing of [Organization Name]'s production data. |
| **Secondary Data Centre / DR Site** | A backup or disaster recovery cloud region used for data replication, failover, and business continuity purposes. |
| **Personal Data** | Any information that directly or indirectly identifies a living individual, as defined under the Personal Data Protection Act 2010. |
| **Sensitive Data** | Data that requires enhanced protection due to its nature, including personal data, financial records, authentication credentials, and data classified as Restricted or Confidential. |
| **Material Data** | Data deemed material to the financial institution's operations, regulatory reporting, or supervisory oversight, as determined by BNM. |
| **Shared Responsibility Model** | A framework that delineates the security and compliance obligations allocated between the CSP and [Organization Name] for a given cloud service model. |
| **Data Transfer** | The movement of data across network boundaries, including replication, backup, caching, and transmission for processing purposes. |
| **Cross-Border Data Transfer** | The transfer of data from Malaysia to a location outside of Malaysia, whether for processing, storage, backup, or any other purpose. |
| **Encryption at Rest** | The encryption of data stored in cloud storage, databases, or file systems to prevent unauthorised access. |
| **Encryption in Transit** | The encryption of data transmitted between systems, networks, or services to prevent interception. |
| **Geo-Restriction** | A technical or contractual control that limits data storage, processing, or replication to specified geographic regions. |
| **Availability Zone (AZ)** | A physically separate data centre within a cloud provider's region, designed to provide redundancy and fault isolation. |
| **Region** | A geographic area containing multiple availability zones, as defined by the cloud service provider. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework used to clarify roles. |
| **[Additional term]** | [Definition] |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| FSA | Financial Services Act 2013 |
| IFSA | Islamic Financial Services Act 2013 |
| CSP | Cloud Service Provider |
| IaaS | Infrastructure as a Service |
| PaaS | Platform as a Service |
| SaaS | Software as a Service |
| DR | Disaster Recovery |
| BCP | Business Continuity Plan |
| CISO | Chief Information Security Officer |
| CTO | Chief Technology Officer |
| DPO | Data Protection Officer |
| IAM | Identity and Access Management |
| KMS | Key Management Service |
| TLS | Transport Layer Security |
| AES | Advanced Encryption Standard |
| AZ | Availability Zone |
| SLA | Service Level Agreement |
| NACSA | National Cyber Security Agency |
| MOSTI | Ministry of Science, Technology and Innovation |
| [Abbreviation] | [Full Form] |

---

## 5. Policy Statements and Requirements

*State the mandatory policy positions of [Organization Name] with respect to cloud data residency. Each statement should be clear, unambiguous, and directly traceable to a regulatory obligation or organizational risk appetite decision.*

### 5.1 Core Policy Positions

[Organization Name] adopts the following mandatory policy positions governing the residency of data in cloud environments:

**PS-01: Malaysian Primary Residency Mandate**
All data classified as Restricted or Confidential, including personal data, customer financial records, transaction data, and regulatory reporting data, **must be primarily stored and processed within Malaysia** using cloud infrastructure physically located within Malaysian borders.

**PS-02: Approved Secondary Residency**
Replication of Restricted or Confidential data to secondary or disaster recovery sites outside Malaysia is **only permissible where**:
- The target jurisdiction is listed on [Organization Name]'s Approved Cross-Border Data Transfer Jurisdiction List (Appendix A);
- A Data Transfer Impact Assessment (DTIA) has been completed and approved;
- Explicit written approval has been obtained from the Data Protection Officer and the Chief Information Security Officer; and
- Adequate contractual protections are in place with the CSP as required under the PDPA.

**PS-03: Prohibited Jurisdictions**
Data must not be stored, processed, cached, or replicated in jurisdictions listed on [Organization Name]'s **Prohibited Jurisdiction List** (Appendix B), regardless of the cloud service model or deployment type.

**PS-04: CSP Contractual Obligations**
All cloud service agreements must include **explicit, enforceable data residency provisions** specifying:
- The approved data centre location(s) (at country and region level);
- The CSP's obligation to notify [Organization Name] of any proposed change to data location not less than [X] days in advance;
- [Organization Name]'s right to withhold consent to any location change that would breach this policy; and
- BNM's right of access and audit as required under RMiT Clause 10.52.

**PS-05: No Implicit Data Transfer**
No cloud service, feature, or configuration may be enabled that would result in the implicit or automatic transfer of data outside approved residency boundaries. This includes, but is not limited to, global content delivery networks (CDNs), cross-region replication features, and AI/ML training data pipelines.

**PS-06: Encryption Requirement**
All data stored in cloud environments must be **encrypted at rest using AES-256 or equivalent** and **encrypted in transit using TLS 1.2 or higher**. Encryption keys must be managed using [Organization Name]-controlled Key Management Service (KMS) instances located within approved jurisdictions.

**PS-07: BNM Access Right Preservation**
[Organization Name] must, at all times, maintain its ability to provide BNM with **full, timely, and unrestricted access** to all data, systems, and audit logs hosted in cloud environments, regardless of the physical location of cloud infrastructure or the jurisdiction of the CSP's parent entity.

**PS-08: Audit and Monitoring**
Continuous monitoring controls must be in place to detect and alert on any actual or potential breach of data residency requirements. Monitoring results must be reported to the [relevant governance body] on a [quarterly/monthly] basis.

**PS-09: Third-Party and Sub-Processor Obligations**
Where a CSP engages sub-processors or operates through third-party data centre infrastructure, [Organization Name] must ensure that **equivalent data residency obligations flow down** to all sub-processors via contractual provisions.

**PS-10: Exit and Portability**
Upon termination or expiry of any cloud service agreement, [Organization Name] must ensure the **secure retrieval and verified deletion** of all data from the CSP's infrastructure in accordance with the Exit Management Plan required under RMiT.

### 5.2 Mandatory Control Requirements

*List the specific technical and operational controls required to enforce the policy statements above.*

| Control ID | Control Description | Control Type | Policy Statement Reference |
|---|---|---|---|
| CDR-CTL-01 | Cloud region selection must be restricted to approved Malaysian regions at provisioning time | Preventive | PS-01 |
| CDR-CTL-02 | Cross-region replication must be disabled by default; enablement requires CISO approval | Preventive | PS-02, PS-05 |
| CDR-CTL-03 | Data residency configuration must be reviewed as part of all cloud architecture review board (CARB) submissions | Detective | PS-01, PS-02 |
| CDR-CTL-04 | CSP contracts must be reviewed by Legal, DPO, and CISO prior to execution | Preventive | PS-04 |
| CDR-CTL-05 | Encryption at rest (AES-256 minimum) must be enabled for all cloud storage resources | Preventive | PS-06 |
| CDR-CTL-06 | Encryption in transit (TLS 1.2+) must be enforced for all cloud data transmission | Preventive | PS-06 |
| CDR-CTL-07 | Customer-managed encryption keys (CMEK) must be used for all Restricted and Confidential data | Preventive | PS-06 |
| CDR-CTL-08 | Cloud monitoring dashboards must include geo-location alerts for anomalous data movement | Detective | PS-08 |
| CDR-CTL-09 | Annual data residency audit must be performed by [Internal Audit / External Auditor] | Detective | PS-08 |
| CDR-CTL-10 | Data residency compliance status must be reported in the quarterly IT Risk Report to [Board/EXCO] | Corrective | PS-08 |
| CDR-CTL-11 | Sub-processor data residency provisions must be validated annually | Detective | PS-09 |
| CDR-CTL-12 | Exit plans must document data retrieval procedures, timelines, and verified deletion methods | Corrective | PS-10 |
| [CDR-CTL-XX] | [Control Description] | [Type] | [Reference] |

---

## 6. Cloud Service Model and Deployment Types

*Document the cloud service models and deployment configurations that [Organization Name] uses or is authorized to use, and specify the data residency requirements and control responsibilities applicable to each model.*

### 6.1 Approved Cloud Service Models

*Describe which cloud service models are approved for use, what data can be placed in each, and any specific residency considerations per model.*

[Organization Name] currently uses or is evaluating the following cloud service models. All models are subject to the data residency requirements of this policy, with variations in the distribution of control responsibilities as described in Section 9 (Shared Responsibility Matrix).

#### 6.1.1 Infrastructure as a Service (IaaS)

| Attribute | Details |
|---|---|
| **Definition** | CSP provides virtualized computing infrastructure (compute, storage, networking). [Organization Name] manages the OS, middleware, and applications. |
| **Current CSP(s)** | [CSP Name, e.g., AWS, Azure, Google Cloud] |
| **Approved Regions** | [Malaysia region name, e.g., ap-southeast-1 (if Malaysia AZ exists), or nearest approved region] |
| **Data Types Permitted** | [Restricted / Confidential / Internal — specify] |
| **Residency Control Mechanism** | Region selection at resource provisioning; enforced via cloud policy/guardrails (e.g., AWS SCP, Azure Policy) |
| **Key Residency Risk** | Snapshot replication, cross-region backup, CDN edge caching |
| **Approval Status** | [Approved / Conditionally Approved / Under Assessment] |

#### 6.1.2 Platform as a Service (PaaS)

| Attribute | Details |
|---|---|
| **Definition** | CSP provides managed runtime environments, databases, middleware, and development tools. [Organization Name] manages applications and data. |
| **Current CSP(s)** | [CSP Name] |
| **Approved Services** | [e.g., Managed Kubernetes, Managed Databases, Message Queues — list approved PaaS services] |
| **Data Types Permitted** | [Specify] |
| **Residency Control Mechanism** | Region-locked PaaS service deployment; database region pinning; PaaS service-level geo-restriction features |
| **Key Residency Risk** | Platform-level telemetry, logging, and diagnostics data may egress to provider's global systems |
| **Approval Status** | [Approved / Conditionally Approved / Under Assessment] |

#### 6.1.3 Software as a Service (SaaS)

| Attribute | Details |
|---|---|
| **Definition** | CSP delivers fully managed applications over the internet. [Organization Name] manages only user configuration and data input. |
| **Current CSP(s) / Applications** | [List approved SaaS applications, e.g., Microsoft 365, Salesforce, ServiceNow] |
| **Data Types Permitted** | [Specify — note that sensitive/restricted data in SaaS requires heightened scrutiny] |
| **Residency Control Mechanism** | CSP contractual data residency commitments; data residency configuration features (where available); Data Processing Agreements (DPAs) |
| **Key Residency Risk** | Limited visibility and control; sub-processor chains; global data routing by CSP |
| **Approval Status** | [Approved with conditions / Under Assessment] |

### 6.2 Approved Cloud Deployment Models

*Specify which deployment models are authorized and document the rationale, risk profile, and specific data residency provisions for each.*

| Deployment Model | Description | Approved for Use | Data Residency Assurance Level | Notes |
|---|---|---|---|---|
| **Public Cloud** | Shared infrastructure operated by a commercial CSP | Yes — with conditions | Medium (contractual; reliant on CSP controls) | Must comply with CSP-specific data residency clauses in MSA |
| **Private Cloud** | Dedicated cloud infrastructure operated exclusively for [Organization Name] | Yes | High (physical and logical isolation) | On-premises or colocation-hosted; full control over location |
| **Hybrid Cloud** | Combination of public and private cloud, integrated for workload portability | Yes — with conditions | Varies by workload | Data classification determines which workloads can traverse to public cloud |
| **Multi-Cloud** | Use of multiple public cloud providers simultaneously | Yes — with strict governance | Medium | Concentration risk controls and per-provider residency mapping required |
| **Community Cloud** | Shared infrastructure among a defined community (e.g., financial industry cloud) | Under Assessment | TBD | Requires CISO and DPO approval prior to adoption |

### 6.3 Cloud Inventory Register

*Maintain an up-to-date inventory of all cloud services in use. This register must be reviewed quarterly.*

*A complete Cloud Services Inventory Register is maintained by the Cloud Architecture Lead and is accessible at [link/location]. The register records, at minimum, the following attributes for each cloud service:*

| Field | Description |
|---|---|
| Cloud Service ID | Unique identifier for the service instance |
| CSP Name | Name of the cloud service provider |
| Service Name / Type | Description of the specific cloud service |
| Service Model | IaaS / PaaS / SaaS |
| Deployment Model | Public / Private / Hybrid / Multi-Cloud |
| Approved Region(s) | Country and CSP region name |
| Data Classification | Classification of data hosted in this service |
| Business Owner | Name and role of the business data owner |
| Residency Verification Date | Date of last residency verification |
| Exception Status | Yes / No — if Yes, reference Exception ID |

---

## 7. Data Residency Requirements

*This section contains the specific, mandatory data residency requirements for each data category. Requirements must be traceable to policy statements and regulatory obligations.*

### 7.1 Primary Residency Requirements

*Define where primary copies of each data category must reside. "Primary" means the authoritative, production copy of the data.*

| Data Category | Data Examples | Required Primary Residency | Permissible CSP Regions | Notes |
|---|---|---|---|---|
| **Customer Personal Data** | Name, IC/Passport, address, contact details, financial profile | Malaysia | [CSP Malaysia Region, e.g., Azure Malaysia] | Must comply with PDPA cross-border transfer restrictions |
| **Customer Financial Records** | Account statements, transaction history, loan records | Malaysia | [CSP Malaysia Region] | Regulatory retention requirement: [X] years |
| **Payment and Transaction Data** | Payment instructions, fund transfer records, card data | Malaysia | [CSP Malaysia Region] | PCI-DSS compliance also applicable |
| **Employee Personal Data** | Employee records, payroll, HR data | Malaysia | [CSP Malaysia Region] | PDPA applies |
| **Regulatory Reporting Data** | BNM returns, audit reports, statutory submissions | Malaysia | [CSP Malaysia Region] | BNM access right must be preserved |
| **Authentication and Access Data** | Usernames, passwords (hashed), MFA tokens, PKI certificates | Malaysia | [CSP Malaysia Region] | Cryptographic keys: see PS-06 |
| **Audit Logs and Security Logs** | SIEM data, access logs, change logs | Malaysia | [CSP Malaysia Region] | Retention: minimum [X] years per BNM requirements |
| **Application Configuration Data** | System configurations, environment variables, secrets | Malaysia | [CSP Malaysia Region] | Secrets must be stored in approved secrets management service |
| **Internal / General Business Data** | Internal communications, non-sensitive reports, project documents | Malaysia (preferred) | [Specify if alternative permitted] | May permit [alternative region] with CISO notification |
| **Anonymized / Aggregated Data** | De-identified analytics datasets | No restriction | Any approved CSP region | Anonymization standard must be verified before declassification |
| **[Additional Category]** | [Examples] | [Residency] | [Regions] | [Notes] |

### 7.2 Secondary / Disaster Recovery Residency Requirements

*Define where secondary or DR copies of data may reside, conditions under which cross-border replication is permissible, and required controls.*

| Data Category | Primary Location | Permissible Secondary Location(s) | Conditions for Cross-Border Replication | Encryption Requirement |
|---|---|---|---|---|
| **Customer Personal Data** | Malaysia | [Approved jurisdiction, e.g., Singapore with adequate protections] | DTIA completed; DPO and CISO approval; DPA with CSP; PDPA compliance confirmed | AES-256 at rest; TLS 1.2+ in transit; CMEK required |
| **Customer Financial Records** | Malaysia | [Approved jurisdiction] | As above + Legal review of jurisdictional risk | AES-256 at rest; TLS 1.2+ in transit; CMEK required |
| **Payment and Transaction Data** | Malaysia | [Approved jurisdiction] | As above + PCI-DSS DSS Requirement 3 compliance | AES-256 at rest; TLS 1.2+ in transit; CMEK required |
| **Regulatory Reporting Data** | Malaysia | Malaysia only (no cross-border) | Not permitted | AES-256 at rest; TLS 1.2+ in transit; CMEK required |
| **Audit Logs and Security Logs** | Malaysia | [Approved jurisdiction] | CISO approval | AES-256 at rest; TLS 1.2+ in transit |
| **Internal / General Business Data** | Malaysia (preferred) | [Approved jurisdictions] | CISO notification | AES-256 at rest; TLS 1.2+ in transit |
| **[Additional Category]** | [Primary] | [Secondary] | [Conditions] | [Encryption] |

### 7.3 Approved and Prohibited Jurisdictions

#### 7.3.1 Approved Jurisdictions

*List jurisdictions to which cross-border data transfer is approved, subject to conditions. Maintain the full list in Appendix A.*

| Jurisdiction | Approval Basis | Conditions | Approved Data Categories | Review Date |
|---|---|---|---|---|
| Malaysia | Primary / Preferred | None — default location | All categories | [Date] |
| Singapore | Adequate data protection framework; ASEAN proximity | DTIA required; DPA required; No Restricted data without CISO approval | Internal, Confidential (with CISO approval) | [Date] |
| [Jurisdiction 3] | [Basis] | [Conditions] | [Categories] | [Date] |
| [Jurisdiction 4] | [Basis] | [Conditions] | [Categories] | [Date] |

#### 7.3.2 Prohibited Jurisdictions

*List jurisdictions where data may not reside under any circumstances. Maintain the full list in Appendix B.*

| Jurisdiction | Reason for Prohibition | Effective Date |
|---|---|---|
| [Jurisdiction 1] | [e.g., Inadequate data protection; sanctions; geopolitical risk; BNM guidance] | [Date] |
| [Jurisdiction 2] | [Reason] | [Date] |
| [Jurisdiction 3] | [Reason] | [Date] |

### 7.4 Technical Residency Controls

*Describe the specific technical mechanisms used to enforce data residency requirements at the infrastructure level.*

| Control Mechanism | Description | Applicable Cloud Model | Implementation Owner |
|---|---|---|---|
| **Cloud Policy Guardrails** | Service Control Policies (AWS SCP), Azure Policy, or GCP Organization Policies that deny resource creation outside approved regions | IaaS, PaaS | Cloud Architecture Team |
| **Infrastructure as Code (IaC) Templates** | Pre-approved Terraform/ARM/CloudFormation templates with hardcoded approved region parameters | IaaS, PaaS | DevOps / Platform Engineering |
| **CMEK with Region-Locked KMS** | Customer-managed encryption keys stored in KMS instances locked to Malaysian region | IaaS, PaaS, SaaS (where supported) | Cloud Security Team |
| **Network Geo-Restriction** | VPC/VNet configurations that prevent traffic routing outside approved regions | IaaS | Cloud Architecture Team |
| **Data Loss Prevention (DLP) Tools** | Cloud-native DLP (e.g., AWS Macie, Azure Information Protection) configured to alert on cross-border data movement | IaaS, PaaS, SaaS | Cloud Security Team |
| **SIEM Integration** | Cloud activity logs forwarded to SIEM for correlation of geo-location anomalies | All | SOC / Security Operations |
| **Contractual Geo-Restrictions** | Contractual clauses in CSP MSA/DPA specifying permitted regions and prohibition on undisclosed data movement | All | Legal / Procurement |
| **[Additional Control]** | [Description] | [Model] | [Owner] |

---

## 8. Data Classification and Residency Mapping

*This section maps [Organization Name]'s data classification tiers to specific residency requirements and permissible cloud controls. It serves as a quick reference guide for cloud architects and data owners.*

### 8.1 Data Classification Summary

*Refer to [Organization Name]'s Data Classification Policy [Document ID] for the full classification framework. The summary below captures the classification tiers relevant to cloud data residency.*

| Classification Tier | Description | Examples | Handling Requirements |
|---|---|---|---|
| **Restricted** | Highest sensitivity; regulatory or legal obligation to protect | Personal data (PDPA), payment card data (PCI-DSS), BNM-designated material data | Strictest controls; Malaysia-only residency; CMEK mandatory; access strictly limited |
| **Confidential** | Sensitive business information; unauthorized disclosure would cause significant harm | Customer financial records, internal audit findings, executive communications, trade secrets | Strong controls; Malaysia primary residency; cross-border DR with approval; CMEK required |
| **Internal** | Internal use only; limited harm if disclosed but not intended for external sharing | Internal policies, project plans, general business correspondence | Standard controls; Malaysia preferred; approved cross-border residency permissible |
| **Public** | Information approved for public distribution | Marketing materials, published reports, public-facing website content | Minimal residency restrictions; standard encryption recommended |

### 8.2 Data Classification to Residency Mapping Table

| Classification | Primary Residency | Secondary (DR) Residency | Cross-Border Transfer | CSP Region Constraint | Encryption at Rest | CMEK Required | BNM Access Preserved |
|---|---|---|---|---|---|---|---|
| **Restricted** | Malaysia only | Malaysia only | Not permitted | Malaysia AZ only | Mandatory (AES-256) | Yes | Yes — mandatory |
| **Confidential** | Malaysia | Approved jurisdiction only | Permitted with DPO + CISO approval + DTIA | Malaysia primary; approved secondary | Mandatory (AES-256) | Yes | Yes — mandatory |
| **Internal** | Malaysia (preferred) | Approved jurisdictions | Permitted with CISO notification | Approved regions | Mandatory (AES-256) | Recommended | Yes |
| **Public** | No restriction | No restriction | Permitted | No restriction (avoid prohibited jurisdictions) | Recommended | No | N/A |

### 8.3 System and Application Residency Profile

*Maintain a residency profile for each material system or application. The Cloud Architecture Lead is responsible for maintaining this register.*

| System / Application | Data Classification | Cloud Service | CSP | Region | Residency Verified | Last Verified Date | Verified By |
|---|---|---|---|---|---|---|---|
| [Core Banking System] | Restricted | IaaS | [CSP] | [Malaysia Region] | Yes | [Date] | [Name] |
| [Customer Portal] | Confidential | PaaS | [CSP] | [Malaysia Region] | Yes | [Date] | [Name] |
| [HR System] | Restricted | SaaS | [Vendor] | [Region] | [Yes/No] | [Date] | [Name] |
| [Email / Collaboration] | Internal | SaaS | [Vendor] | [Region] | [Yes/No] | [Date] | [Name] |
| [Analytics Platform] | Confidential | PaaS | [CSP] | [Malaysia Region] | [Yes/No] | [Date] | [Name] |
| [System Name] | [Classification] | [Model] | [CSP] | [Region] | [Yes/No] | [Date] | [Name] |

---

## 9. Shared Responsibility Matrix

*The shared responsibility model defines which security and compliance controls are the responsibility of the Cloud Service Provider (CSP) and which are the responsibility of [Organization Name]. This section presents a data residency-specific shared responsibility matrix for each cloud service model.*

### 9.1 Shared Responsibility Overview

*Guidance: The CSP is always responsible for the security of the cloud (physical infrastructure, hypervisor, network fabric). [Organization Name] is always responsible for security in the cloud (data, identities, configurations, access management). Data residency responsibilities are distributed based on the cloud service model.*

### 9.2 IaaS Shared Responsibility Matrix

| Responsibility Area | CSP Responsibility | [Organization Name] Responsibility |
|---|---|---|
| **Physical data centre security** | Full responsibility — physical access controls, environmental controls, power, cooling | None — reliant on CSP |
| **Hypervisor and virtualization security** | Full responsibility | None |
| **Network infrastructure (underlay)** | Full responsibility | None |
| **Region and availability zone selection** | Providing the region/AZ options and guaranteeing physical location as contractually stated | Selecting approved regions; enforcing via IaC templates and cloud guardrails |
| **Data centre location disclosure** | Providing accurate, up-to-date information on physical data centre locations | Verifying CSP disclosures against contractual commitments; maintaining Cloud Inventory Register |
| **Cross-region replication (platform capability)** | Providing the feature; disclosing default behavior | Disabling cross-region replication unless approved; monitoring for unintended replication |
| **Guest OS and middleware security** | None | Full responsibility — patching, hardening, configuration |
| **Application data encryption at rest** | Providing CMEK integration capability (KMS) | Implementing CMEK; managing encryption keys within approved region |
| **Encryption key residency** | Providing region-locked KMS options | Ensuring KMS instances are deployed in approved Malaysian region |
| **Network segmentation (overlay)** | None | VPC/VNet design and configuration |
| **Identity and Access Management (IAM)** | Providing IAM capability | Configuring least-privilege access; managing user roles |
| **Audit log generation** | Generating platform-level logs (CloudTrail, Azure Monitor, GCP Audit Logs) | Enabling log collection; forwarding to SIEM; ensuring log residency |
| **Audit log residency** | Providing log residency options | Configuring log storage in approved region |
| **BNM right of access support** | Providing mechanisms for data export and access | Ensuring access provisions are contractually secured; maintaining access capability |
| **Data deletion upon exit** | Providing secure deletion capabilities and certifications | Executing secure deletion procedures; obtaining and retaining deletion certification |
| **Sub-processor disclosure** | Disclosing sub-processors and their locations | Reviewing sub-processor list; ensuring sub-processors do not violate residency requirements |

### 9.3 PaaS Shared Responsibility Matrix

| Responsibility Area | CSP Responsibility | [Organization Name] Responsibility |
|---|---|---|
| **Physical infrastructure, runtime, middleware** | Full responsibility | None |
| **Platform region locking** | Providing region-locked PaaS service deployment options | Deploying PaaS services in approved regions; enforcing via cloud policy guardrails |
| **Platform telemetry and diagnostics data** | Generating and managing platform telemetry | Reviewing CSP privacy policy for telemetry; negotiating restrictions where necessary; monitoring for data egress |
| **Managed database residency** | Providing region-locked managed database options | Configuring managed databases in approved regions; verifying backup residency |
| **Managed database backup location** | Providing backup location options | Configuring backups to remain in approved region; verifying configuration |
| **Application data and logic** | None | Full responsibility |
| **Application-level encryption** | Providing managed encryption options (e.g., TDE, CMEK) | Implementing application-level encryption; managing keys |
| **API and integration endpoint security** | Providing API gateway capabilities | Configuring API security; managing authentication |
| **Data residency for managed services** | Disclosing data residency for all PaaS components | Verifying residency of each PaaS component used; maintaining mapping in Cloud Inventory Register |

### 9.4 SaaS Shared Responsibility Matrix

| Responsibility Area | CSP / SaaS Vendor Responsibility | [Organization Name] Responsibility |
|---|---|---|
| **All infrastructure, platform, and application layers** | Full responsibility | None — reliant entirely on vendor |
| **Data residency configuration** | Providing data residency options (where available); honouring contractual residency commitments | Selecting data residency options during onboarding; verifying via contractual commitments and periodic audits |
| **Sub-processor chain management** | Managing sub-processors; disclosing sub-processor list | Reviewing sub-processor list prior to engagement; re-reviewing annually; flagging residency concerns |
| **Data encryption** | Providing encryption (often vendor-managed keys by default) | Negotiating CMEK options for Restricted/Confidential data; verifying encryption standards in DPA |
| **Data portability and exit** | Providing data export mechanisms | Verifying export capabilities prior to engagement; maintaining and testing exit plan |
| **Audit and compliance evidence** | Providing compliance certifications (e.g., ISO 27001, SOC 2); responding to audit questionnaires | Reviewing annual certifications; performing vendor risk assessments; escalating residency concerns |
| **BNM access facilitation** | Supporting [Organization Name]'s ability to provide BNM with access to data | Ensuring contractual provisions require vendor cooperation with regulatory access requests |
| **User access and identity** | Providing IAM capabilities | Managing user provisioning/deprovisioning; enforcing MFA and least-privilege access |

### 9.5 Residency Assurance Summary by Service Model

| Control Domain | IaaS | PaaS | SaaS |
|---|---|---|---|
| **Physical location assurance** | CSP (contractual) | CSP (contractual) | CSP (contractual) |
| **Region selection control** | Organization | Organization | Limited (vendor-determined with options) |
| **Encryption at rest (implementation)** | Organization | Shared | CSP / Vendor (verify standards) |
| **Encryption key management** | Organization (CMEK) | Shared (CMEK recommended) | Vendor (CMEK where available) |
| **Cross-border replication control** | Organization | Organization | Limited (vendor) |
| **Audit log control** | Organization | Shared | Limited (vendor) |
| **Sub-processor visibility** | CSP discloses | CSP discloses | Vendor discloses (often limited) |
| **BNM access facilitation** | Organization (with CSP support) | Organization (with CSP support) | Vendor cooperation required |
| **Overall residency assurance level** | **High** | **Medium-High** | **Medium (reliant on vendor)** |

---

## 10. Roles and Responsibilities

*This section defines the roles that have specific responsibilities under this policy and describes those responsibilities. The RACI matrix below clarifies accountability for key activities.*

### 10.1 Role Descriptions

| Role | Organizational Position | Key Responsibilities under this Policy |
|---|---|---|
| **Cloud Architecture Lead** | [Department / IT Architecture] | Policy owner; maintains Cloud Inventory Register; reviews cloud architectures for residency compliance; chairs Cloud Architecture Review Board (CARB); approves IaC templates |
| **Chief Information Security Officer (CISO)** | [Department] | Policy sponsor; approves cross-border data transfers for Confidential data; reviews and approves exceptions; escalates violations to Board/EXCO |
| **Data Protection Officer (DPO)** | [Department / Legal & Compliance] | Advises on PDPA compliance; reviews and approves cross-border transfers involving personal data; maintains Data Transfer Impact Assessments (DTIAs); liaises with PDPA regulator |
| **Chief Technology Officer (CTO)** | [Department] | Accountable for overall technology risk; approves policy exceptions with CISO endorsement; provides cloud strategy direction |
| **Cloud Security Engineer** | [Cloud Security / IT Security] | Implements and maintains technical residency controls (cloud guardrails, CMEK, DLP); monitors residency alerts; remediates violations |
| **Cloud Operations Team** | [IT Operations / Cloud Engineering] | Provisions cloud resources within approved regions; adheres to IaC templates; reports anomalies to Cloud Security |
| **Data Owners (Business Units)** | [Respective Business Unit Heads] | Accountable for data classified within their business domains; ensure cloud-hosted business systems comply with residency requirements; approve use cases involving their data |
| **Legal and Procurement** | [Legal Department] | Reviews and negotiates CSP contracts and DPAs; ensures data residency, audit rights, and exit provisions are included |
| **Internal Audit** | [Audit Committee / Internal Audit Function] | Independently assesses compliance with this policy; reports findings to Audit Committee |
| **Vendor / CSP Relationship Manager** | [IT Procurement / Vendor Management] | Manages CSP relationships; ensures CSPs fulfil contractual data residency obligations; coordinates CSP audits |
| **DevOps / Platform Engineering** | [Engineering] | Builds and maintains CI/CD pipelines and IaC templates in compliance with this policy; does not deploy to unapproved regions |
| **[Additional Role]** | [Department] | [Responsibilities] |

### 10.2 RACI Matrix

*R = Responsible (does the work) | A = Accountable (owns the outcome) | C = Consulted (provides input) | I = Informed (kept up to date)*

| Activity | Cloud Arch Lead | CISO | DPO | CTO | Cloud Security | Cloud Ops | Data Owners | Legal | Internal Audit | DevOps |
|---|---|---|---|---|---|---|---|---|---|---|
| Policy ownership and maintenance | A/R | C | C | I | C | I | I | C | I | I |
| Cloud service onboarding (residency assessment) | A/R | C | C | I | R | I | C | C | I | I |
| CSP contract review (data residency clauses) | C | C | C | I | I | I | I | A/R | I | I |
| CMEK implementation and key management | C | A | I | I | R | C | I | I | I | R |
| Cross-border transfer approval (Confidential data) | C | A/R | R | I | C | I | C | C | I | I |
| Cross-border transfer approval (Personal data) | C | C | A/R | I | C | I | C | C | I | I |
| Data Transfer Impact Assessment (DTIA) | C | C | A/R | I | C | I | I | C | I | I |
| Cloud guardrail configuration and maintenance | A | C | I | I | R | I | I | I | I | C |
| Cloud Inventory Register maintenance | A/R | I | I | I | C | C | I | I | I | I |
| IaC template development (residency controls) | A | C | I | I | C | C | I | I | I | R |
| Monitoring residency alerts | C | A | I | I | R | C | I | I | I | I |
| Residency violation investigation | C | A | C | I | R | C | C | I | I | C |
| Residency violation reporting (management) | C | A/R | C | I | R | I | I | I | I | I |
| Annual residency audit | C | A | C | I | C | C | C | I | R | I |
| Quarterly IT Risk Report (residency section) | R | A | C | I | C | I | I | I | I | I |
| Exception request initiation | C | A | C | A/R | I | I | C | C | I | I |
| Exception approval | C | R | C | A/R | I | I | I | C | I | I |
| Sub-processor residency verification | A/R | C | C | I | C | I | I | C | I | I |
| CSP exit and data deletion | A/R | C | C | I | R | R | C | C | I | C |
| Policy training and awareness | C | A | C | I | R | I | I | I | I | I |
| BNM data access request coordination | C | A | C | I | C | C | C | C | I | I |

---

## 11. Risk Management and Controls

*This section identifies the key risks associated with cloud data residency and maps them to the controls required to mitigate those risks to an acceptable level.*

### 11.1 Risk Register

| Risk ID | Risk Description | Likelihood | Impact | Inherent Risk | Key Controls | Residual Risk | Risk Owner |
|---|---|---|---|---|---|---|---|
| CDR-RISK-01 | Data stored outside Malaysia without authorization, resulting in BNM regulatory sanction | Medium | High | **High** | CDR-CTL-01, CDR-CTL-03, CDR-CTL-08 | Medium | CISO |
| CDR-RISK-02 | Personal data transferred cross-border without PDPA compliance, leading to PDPA enforcement action | Medium | High | **High** | CDR-CTL-04, PS-02, DTIA process | Low-Medium | DPO |
| CDR-RISK-03 | CSP enables cross-region replication by default without [Org Name]'s knowledge, causing data to egress | Low | High | **Medium** | CDR-CTL-02, CDR-CTL-08, CDR-CTL-04 | Low | Cloud Security |
| CDR-RISK-04 | Foreign government or law enforcement accesses [Org Name] data via legal process in CSP's home jurisdiction | Low | High | **Medium** | CDR-CTL-04, PS-07, CSP contract provisions | Medium | CISO |
| CDR-RISK-05 | Shadow IT deployment of unapproved cloud services results in undisclosed data residency | Medium | Medium | **Medium** | Cloud discovery tools; procurement controls; awareness training | Low-Medium | CISO |
| CDR-RISK-06 | BNM unable to access cloud-hosted data during examination or crisis due to CSP access restrictions | Low | High | **Medium** | PS-07, CDR-CTL-04, contractual audit right provisions | Low | Cloud Arch Lead |
| CDR-RISK-07 | CSP insolvency or service termination results in inaccessibility or loss of data | Low | High | **Medium** | CDR-CTL-12, exit plan, multi-CSP strategy | Low | CTO |
| CDR-RISK-08 | Encryption keys stored outside approved jurisdiction, compromising data sovereignty | Low | High | **Medium** | CDR-CTL-07, CMEK with region-locked KMS | Low | Cloud Security |
| CDR-RISK-09 | DevOps pipelines inadvertently process production data in unapproved regions | Medium | Medium | **Medium** | CDR-CTL-03, IaC templates, pipeline controls | Low | Cloud Arch Lead |
| CDR-RISK-10 | SaaS vendor sub-processors store data in prohibited jurisdictions | Medium | Medium | **Medium** | CDR-CTL-11, DPA sub-processor provisions, annual review | Low-Medium | DPO |
| [CDR-RISK-XX] | [Risk Description] | [L/M/H] | [L/M/H] | [Level] | [Controls] | [Level] | [Owner] |

*Likelihood and Impact ratings: Low / Medium / High. Inherent Risk and Residual Risk: Low / Low-Medium / Medium / High / Critical.*

### 11.2 Control Testing Schedule

| Control ID | Control Description | Test Frequency | Test Method | Responsible Party | Last Tested | Next Test Due |
|---|---|---|---|---|---|---|
| CDR-CTL-01 | Cloud region guardrails | Quarterly | Automated scan; attempted provisioning test | Cloud Security | [Date] | [Date] |
| CDR-CTL-02 | Cross-region replication disabled | Quarterly | Configuration review | Cloud Security | [Date] | [Date] |
| CDR-CTL-03 | CARB architecture review | Per submission | Process review | Cloud Arch Lead | [Date] | Ongoing |
| CDR-CTL-04 | CSP contract residency provisions | Annual | Contract review | Legal / DPO | [Date] | [Date] |
| CDR-CTL-05 | Encryption at rest (AES-256) | Quarterly | Automated compliance scan | Cloud Security | [Date] | [Date] |
| CDR-CTL-06 | Encryption in transit (TLS 1.2+) | Quarterly | SSL/TLS scan | Cloud Security | [Date] | [Date] |
| CDR-CTL-07 | CMEK implementation | Quarterly | Configuration review | Cloud Security | [Date] | [Date] |
| CDR-CTL-08 | Geo-location monitoring alerts | Monthly | Alert review; red team test | SOC | [Date] | [Date] |
| CDR-CTL-09 | Annual residency audit | Annual | Full audit | Internal Audit | [Date] | [Date] |
| CDR-CTL-10 | Quarterly IT Risk Report | Quarterly | Report review | CISO | [Date] | [Date] |
| CDR-CTL-11 | Sub-processor verification | Annual | Vendor questionnaire; DPA review | DPO | [Date] | [Date] |
| CDR-CTL-12 | Exit plan documentation | Annual | Plan review; tabletop exercise | Cloud Arch Lead | [Date] | [Date] |

---

## 12. Monitoring, Compliance, and Audit

*This section defines how compliance with this policy is monitored, reported, and independently verified.*

### 12.1 Continuous Monitoring

*Describe the ongoing monitoring mechanisms used to detect residency violations or anomalies in real time or near-real time.*

[Organization Name] implements the following continuous monitoring mechanisms for data residency compliance:

- **Cloud Security Posture Management (CSPM):** [CSP-native CSPM tool or third-party tool, e.g., Prisma Cloud, Defender for Cloud] is configured to scan all cloud resources daily and flag resources deployed in unapproved regions.
- **Cloud Activity Logging:** All cloud API calls are logged via [CloudTrail / Azure Monitor / GCP Audit Logs] and forwarded to the SIEM platform. Logs are stored in approved Malaysian region.
- **SIEM Correlation Rules:** The SOC maintains correlation rules that trigger alerts for: resource creation in unapproved regions; changes to cross-region replication settings; KMS key usage from unapproved regions; unusual data transfer volumes to external endpoints.
- **Data Loss Prevention (DLP):** [DLP tool] is deployed to monitor and alert on sensitive data movement across network boundaries.
- **Encryption Compliance Scan:** Automated daily scan verifies that all cloud storage resources have encryption at rest enabled with approved key types.

### 12.2 Reporting Cadence

| Report | Audience | Frequency | Content | Prepared By |
|---|---|---|---|---|
| Cloud Residency Monitoring Dashboard | Cloud Security Team | Real-time / Daily | Alerts, resource geo-distribution, open findings | Cloud Security |
| Cloud Residency Compliance Summary | CISO, Cloud Arch Lead | Weekly | Summary of monitoring alerts; open findings; new cloud services | Cloud Security |
| IT Risk Report — Cloud Residency Section | CTO, EXCO, Risk Committee | Quarterly | Residency compliance status; key risks; exceptions; audit findings | Cloud Arch Lead / CISO |
| Annual Data Residency Compliance Report | Board, Audit Committee, BNM (if requested) | Annual | Comprehensive residency compliance assessment; findings; remediation status | Internal Audit |
| Residency Violation Incident Report | CISO, CTO, DPO, Legal | Ad hoc (upon incident) | Nature of violation; impacted data; remediation actions; regulatory notification assessment | Cloud Security / CISO |

### 12.3 Audit Rights

*Describe the rights of internal audit, external auditors, and BNM to audit cloud data residency compliance.*

- **Internal Audit:** The Internal Audit function has the right to audit compliance with this policy at any time. An annual scheduled audit of cloud data residency is required. Audit reports are submitted to the Audit Committee and copied to the CISO.
- **External Auditor:** [Organization Name]'s external auditors may include cloud data residency in the scope of their annual audit. The Cloud Architecture Lead and CISO are responsible for facilitating external audit access.
- **BNM Examination:** BNM has the right to examine [Organization Name]'s cloud data residency practices as part of its supervisory functions under the FSA/IFSA. [Organization Name] must ensure that BNM examiners have timely access to all relevant data, systems, configurations, and documentation, regardless of the physical location of cloud infrastructure.
- **CSP Audit:** [Organization Name] has the right (as contractually secured) to audit CSP compliance with data residency obligations, either directly or through agreed third-party audit mechanisms (e.g., CSP SOC 2 Type II reports, ISO 27001 certificates).

---

## 13. Exceptions and Escalation

*Define the process for requesting, reviewing, and approving exceptions to this policy. Exceptions must be rare, time-limited, and subject to compensating controls.*

### 13.1 Exception Process

An exception to this policy may be requested where strict compliance is technically infeasible or where a compelling business need exists that cannot be addressed through compliant means. Exceptions are not a mechanism for avoiding compliance; they are a risk management tool for managing edge cases.

**Step 1 — Exception Request**
The requesting party (business unit head or system owner) submits a completed **Cloud Data Residency Policy Exception Request Form** (Appendix C) to the Cloud Architecture Lead. The request must include:
- Description of the exception requested and the specific policy provision(s) that cannot be complied with
- Business justification and urgency
- Duration of the exception required
- Proposed compensating controls
- Risk assessment of proceeding with the exception

**Step 2 — Technical Review**
The Cloud Architecture Lead reviews the technical feasibility of the exception and whether compensating controls are adequate. The Cloud Security Engineer conducts a security impact assessment.

**Step 3 — Risk and Compliance Review**
The CISO and DPO (if personal data is involved) review the risk assessment and confirm whether the exception is acceptable from a risk and regulatory standpoint.

**Step 4 — Approval**
- Exceptions with residual risk assessed as **Low or Medium**: Approved by CISO.
- Exceptions with residual risk assessed as **High or Critical**: Approved by CTO with CISO and DPO endorsement.
- Exceptions involving data in **prohibited jurisdictions**: Not permitted; no exception process available.

**Step 5 — BNM Notification**
If the exception could result in a breach of BNM RMiT requirements, the CISO must assess whether notification to BNM is required and act accordingly.

**Step 6 — Exception Register**
All approved exceptions are recorded in the **Cloud Data Residency Exception Register** (Appendix D). Each exception is assigned an Exception ID, expiry date, and review date.

### 13.2 Exception Register Summary

*The full Exception Register is maintained by the Cloud Architecture Lead. The summary below is for governance reporting purposes.*

| Exception ID | System / Service | Policy Provision Exempted | Approved By | Approval Date | Expiry Date | Compensating Controls | Status |
|---|---|---|---|---|---|---|---|
| [EX-001] | [System Name] | [Provision] | [Name / Role] | [Date] | [Date] | [Controls] | [Active / Expired] |
| [EX-002] | [System Name] | [Provision] | [Name / Role] | [Date] | [Date] | [Controls] | [Active / Expired] |

### 13.3 Escalation Path

| Situation | Escalation To | Timeline |
|---|---|---|
| Suspected residency violation detected by monitoring | Cloud Security → CISO | Immediate (within 1 hour) |
| Confirmed residency violation involving Restricted data | CISO → CTO → Board Risk Committee | Within 24 hours |
| Confirmed violation involving personal data (PDPA breach) | DPO → CISO → Legal → PDPA Commissioner (if required) | Within 72 hours (PDPA notification window) |
| BNM data access request | CISO → Legal → CTO → BNM | Within BNM-specified timeframe |
| CSP unilaterally changes data location | Cloud Arch Lead → CISO → Legal | Immediate — invoke contract remedies |
| Exception request not resolved within [X] days | Cloud Arch Lead → CISO | Automatic escalation |

---

## 14. Policy Violations and Enforcement

*Define the consequences of non-compliance with this policy and the enforcement mechanism.*

### 14.1 Violation Categories

| Category | Description | Examples |
|---|---|---|
| **Critical Violation** | Actual unauthorised storage or processing of Restricted data outside Malaysia; actual PDPA cross-border breach | Production database replicated to prohibited jurisdiction; Restricted data in unapproved SaaS vendor's servers |
| **Significant Violation** | Deployment of cloud resources in unapproved regions; failure to obtain required approvals for cross-border transfers | Cloud VM provisioned in unapproved region; cross-border replication enabled without CISO approval |
| **Administrative Violation** | Failure to maintain Cloud Inventory Register; non-submission of exception request; missing CARB review | System not registered in Cloud Inventory; IaC template deployed without CARB review |

### 14.2 Enforcement Actions

*Non-compliance with this policy may result in the following actions, applied proportionally to the severity and nature of the violation:*

- **For employees:** Disciplinary action in accordance with [Organization Name]'s HR Disciplinary Policy, up to and including termination of employment for Critical Violations.
- **For contractors and vendors:** Suspension or termination of engagement; invocation of contractual breach remedies.
- **For cloud services:** Immediate suspension of the non-compliant cloud service or resource pending remediation.
- **For the organization:** BNM regulatory enforcement action, financial penalties under FSA/IFSA, and reputational damage.

### 14.3 Violation Reporting

Any employee, contractor, or third party who becomes aware of an actual or potential violation of this policy must report it immediately to the CISO or through [Organization Name]'s designated reporting channel ([reporting channel details]). Whistleblower protections apply in accordance with [Organization Name]'s Whistleblower Policy.

---

## 15. Review and Approval

### 15.1 Version History

*Record all versions of this document, including the changes made in each version.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | [Reviewer Name] | Initial draft for internal review |
| 0.2 | [Date] | [Author Name] | [Reviewer Name] | Incorporated feedback from CISO and DPO review |
| 0.3 | [Date] | [Author Name] | [Reviewer Name] | Updated following Legal review of CSP contract provisions |
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | Approved version; first official release |
| [Future Version] | [Date] | [Author Name] | [Reviewer Name] | [Summary of changes] |

### 15.2 Scheduled Review

This policy is subject to **annual review** by the Cloud Architecture Lead, with input from the CISO, DPO, Legal, and Internal Audit. An unscheduled review must be triggered by any of the following events:

- A material change in BNM RMiT or other applicable regulatory requirements
- A significant data residency incident or breach
- Onboarding of a new cloud service provider or cloud deployment model
- A material change in [Organization Name]'s cloud strategy or data architecture
- Findings from Internal Audit or BNM examination that necessitate policy updates
- A change in the list of approved or prohibited jurisdictions

### 15.3 Approval Sign-Off

*By signing below, the approvers confirm they have reviewed this policy and that it is fit for purpose, compliant with applicable regulatory requirements, and approved for implementation.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Policy Owner** — Cloud Architecture Lead | [Full Name] | __________________ | [Date] |
| **Policy Sponsor** — Chief Information Security Officer | [Full Name] | __________________ | [Date] |
| **Data Protection Officer** | [Full Name] | __________________ | [Date] |
| **Chief Technology Officer** | [Full Name] | __________________ | [Date] |
| **Head of Legal / General Counsel** | [Full Name] | __________________ | [Date] |
| **Chief Risk Officer / Head of Risk** | [Full Name] | __________________ | [Date] |
| **Internal Audit Representative** | [Full Name] | __________________ | [Date] |
| **Board / EXCO Representative** *(if required by governance framework)* | [Full Name] | __________________ | [Date] |

---

## 16. References

*List all regulatory instruments, standards, internal policies, and other documents referenced in or relevant to this policy.*

### 16.1 Regulatory References

| Reference | Issuing Authority | Relevant Sections | URL / Location |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 10.52, 10.53–10.57 | [BNM website / internal shared drive] |
| Personal Data Protection Act 2010 (PDPA) | Malaysian Parliament | Section 129 (cross-border transfer) | [Attorney General's Chambers website] |
| Personal Data Protection Regulations 2013 | Ministry of Communications | All | [Attorney General's Chambers website] |
| Financial Services Act 2013 (FSA) | BNM | Section 47 (BNM access rights) | [BNM website] |
| Islamic Financial Services Act 2013 (IFSA) | BNM | Section 57 | [BNM website] |
| Guidelines on Outsourcing for Financial Institutions | BNM | [Relevant sections] | [BNM website] |
| National Cyber Security Policy (NCSP) | NACSA / MOSTI | [Relevant sections] | [NACSA website] |
| [Additional regulation] | [Authority] | [Sections] | [Location] |

### 16.2 Internal Policy References

| Document Title | Document ID | Version | Location |
|---|---|---|---|
| Data Classification Policy | [Document ID] | [Version] | [Internal document repository] |
| Information Security Policy | [Document ID] | [Version] | [Internal document repository] |
| Cloud Computing Policy | [Document ID] | [Version] | [Internal document repository] |
| Third-Party / Vendor Risk Management Policy | [Document ID] | [Version] | [Internal document repository] |
| Outsourcing Risk Management Policy | [Document ID] | [Version] | [Internal document repository] |
| Business Continuity and Disaster Recovery Policy | [Document ID] | [Version] | [Internal document repository] |
| Cryptographic Key Management Standard | [Document ID] | [Version] | [Internal document repository] |
| Incident Response Policy | [Document ID] | [Version] | [Internal document repository] |
| Whistleblower Policy | [Document ID] | [Version] | [Internal document repository] |
| HR Disciplinary Policy | [Document ID] | [Version] | [Internal document repository] |
| [Additional internal policy] | [Document ID] | [Version] | [Location] |

### 16.3 Standards and Frameworks

| Standard / Framework | Issuing Body | Relevant Guidance |
|---|---|---|
| ISO/IEC 27001:2022 | ISO/IEC | Annex A controls relevant to cloud and data protection |
| ISO/IEC 27017:2015 | ISO/IEC | Code of practice for cloud service information security controls |
| ISO/IEC 27018:2019 | ISO/IEC | Code of practice for PII protection in public clouds (PaaS) |
| NIST SP 800-144 | NIST | Guidelines on security and privacy in public cloud computing |
| CSA Cloud Controls Matrix (CCM) | Cloud Security Alliance | Data Security and Privacy Lifecycle Management domain |
| [Additional standard] | [Body] | [Guidance] |

---

## 17. Appendices

### Appendix A: Approved Cross-Border Data Transfer Jurisdiction List

*This appendix lists all jurisdictions to which [Organization Name] is permitted to transfer data outside Malaysia. This list is maintained by the DPO and reviewed annually or upon material changes in geopolitical conditions or regulatory guidance.*

**Effective Date of This List:** [Date]
**Next Review Date:** [Date]
**Maintained By:** Data Protection Officer

| Jurisdiction | Approval Basis | Conditions / Restrictions | Approved Data Classifications | Approval Date | Expiry / Review Date |
|---|---|---|---|---|---|
| Malaysia | Primary residency — no transfer required | N/A | All | N/A | N/A |
| Singapore | ASEAN proximity; established data protection framework | DTIA required; DPA required; CISO approval for Confidential | Internal, Confidential (with approval) | [Date] | [Date] |
| [Jurisdiction] | [Basis] | [Conditions] | [Classifications] | [Date] | [Date] |

*Note: This appendix is subject to change without a full policy revision. Changes to the jurisdiction list require DPO and CISO co-approval. All users of this policy must ensure they are referring to the current version of this appendix.*

---

### Appendix B: Prohibited Jurisdiction List

*This appendix lists all jurisdictions in which [Organization Name]'s data may not reside under any circumstances. No exception process is available for prohibited jurisdictions.*

**Effective Date of This List:** [Date]
**Next Review Date:** [Date]
**Maintained By:** Data Protection Officer / CISO

| Jurisdiction | Reason for Prohibition | Date Added | Authority |
|---|---|---|---|
| [Jurisdiction 1] | [e.g., Subject to international sanctions; inadequate legal protections for foreign data; high geopolitical risk] | [Date] | [CISO / DPO / BNM guidance] |
| [Jurisdiction 2] | [Reason] | [Date] | [Authority] |

---

### Appendix C: Cloud Data Residency Policy Exception Request Form

*This form must be completed and submitted to the Cloud Architecture Lead for all requests for exceptions to this policy. Incomplete forms will not be processed.*

---

**Exception Request Form**

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-assigned by Cloud Architecture Lead] |
| **Date of Request** | [Date] |
| **Requesting Party** | [Name] |
| **Requesting Department** | [Department] |
| **System / Service Affected** | [Name and description of the cloud service or system] |
| **Policy Provision(s) Requested for Exception** | [Cite specific section(s) of this policy] |
| **Data Classification of Affected Data** | [Restricted / Confidential / Internal] |
| **Current Data Residency** | [Current location] |
| **Proposed Data Residency (if different)** | [Proposed location] |
| **Justification for Exception** | [Detailed business justification — technical infeasibility, regulatory requirement from another jurisdiction, etc.] |
| **Duration of Exception Required** | [Start date] to [End date] — maximum 12 months unless separately approved |
| **Proposed Compensating Controls** | [Describe controls that will mitigate the residency risk during the exception period] |
| **Risk Assessment Summary** | [Describe the risks of granting this exception; assess likelihood and impact] |
| **Residual Risk Rating** | [Low / Medium / High / Critical] |
| **BNM Notification Required?** | [Yes / No — with rationale] |

**Requestor Sign-Off:**

Name: __________________ Role: __________________ Date: __________________

**Technical Review (Cloud Architecture Lead):**

Name: __________________ Recommendation: __________________ Date: __________________

**Security Review (CISO):**

Name: __________________ Decision: [Approved / Rejected] Date: __________________

**Privacy Review (DPO — if personal data involved):**

Name: __________________ Decision: [Approved / Rejected] Date: __________________

**Final Approval (CTO — if High/Critical risk):**

Name: __________________ Decision: [Approved / Rejected] Date: __________________

---

### Appendix D: Cloud Data Residency Exception Register

*This register is maintained by the Cloud Architecture Lead and updated upon each exception approval, expiry, or revocation. The register is reviewed quarterly by the CISO.*

| Exception ID | System / Service | Policy Provision(s) Exempted | Requestor | Approved By | Approval Date | Expiry Date | Compensating Controls | Current Status | Review Date |
|---|---|---|---|---|---|---|---|---|---|
| EX-001 | [System] | [Provision] | [Name] | [CISO / CTO] | [Date] | [Date] | [Controls] | Active | [Date] |
| EX-002 | [System] | [Provision] | [Name] | [CISO / CTO] | [Date] | [Date] | [Controls] | Expired | [Date] |

---

### Appendix E: Cloud Services Inventory Register Template

*The full Cloud Services Inventory Register is maintained by the Cloud Architecture Lead at [location/link]. The template structure is provided below for reference.*

| Field | Description | Example |
|---|---|---|
| Cloud Service ID | Unique identifier | CSI-2024-001 |
| CSP Name | Name of provider | [CSP Name] |
| Service Name | Name of specific service | [Service Name] |
| Service Model | IaaS / PaaS / SaaS | IaaS |
| Deployment Model | Public / Private / Hybrid | Public |
| Cloud Region / Location | Country and CSP region | Malaysia — [Region Code] |
| Data Classification | Highest classification hosted | Confidential |
| Business Owner | Name and role | [Name], Head of [Department] |
| IT Owner | Name and role | [Name], Cloud Architect |
| CSP Contract Reference | Contract ID or reference | [Contract ID] |
| DPA / Addendum Reference | DPA document reference | [DPA ID] |
| Residency Verified? | Yes / No | Yes |
| Last Residency Verification Date | Date | [Date] |
| Verified By | Name and role | [Name] |
| Exception Status | Yes / No + Exception ID | No |
| Onboarding Date | Date first deployed | [Date] |
| Review Date | Next review due | [Date] |
| Notes | Any additional information | [Notes] |

---

### Appendix F: Data Transfer Impact Assessment (DTIA) Checklist

*A DTIA must be completed by the DPO in consultation with the requesting business unit and Cloud Architecture Lead before any cross-border transfer of personal data is approved. This checklist summarizes the key assessment areas.*

| Assessment Area | Questions to Address | Completed (Y/N) | Notes |
|---|---|---|---|
| **Data Identification** | What personal data is being transferred? What is the volume and sensitivity? | | |
| **Transfer Purpose** | What is the specific purpose of the cross-border transfer? Is it necessary and proportionate? | | |
| **Destination Jurisdiction Assessment** | Is the destination on the Approved Jurisdiction List? What data protection laws apply in the destination? | | |
| **Adequacy Assessment** | Does the destination jurisdiction provide adequate protection equivalent to Malaysia's PDPA? | | |
| **CSP / Recipient Assessment** | Who is the data importer? What are their data protection credentials and certifications? | | |
| **Contractual Safeguards** | Is a DPA or Standard Contractual Clauses (SCCs) in place? Does it address PDPA requirements? | | |
| **Technical Safeguards** | Is data encrypted in transit and at rest? Are access controls adequate? | | |
| **Data Subject Rights** | Can data subject rights (access, correction, withdrawal) still be exercised if data is cross-border? | | |
| **Regulatory Notification** | Does the transfer require notification to BNM or the PDPA Commissioner? | | |
| **Risk Assessment** | What are the residual risks of the transfer? Are they acceptable? | | |
| **Approval** | DPO and CISO approval obtained? | | |

---

### Appendix G: Glossary of CSP-Specific Residency Terms

*Different cloud service providers use different terminology for data residency-related features and configurations. This appendix provides a cross-reference of key terms across major CSPs.*

| Concept | AWS Term | Azure Term | Google Cloud Term | Notes |
|---|---|---|---|---|
| Geographic location of data | Region | Region | Region | All major CSPs offer region selection |
| Sub-region redundancy | Availability Zone (AZ) | Availability Zone | Zone | Data remains within the region |
| Data boundary enforcement | Service Control Policy (SCP) | Azure Policy / Management Group | Organization Policy | Prevents resource creation outside approved regions |
| Customer-managed encryption keys | AWS KMS with CMK | Azure Key Vault (BYOK) | Cloud KMS (CMEK) | Keys should be in region-locked KMS instance |
| Cross-region replication control | S3 Replication rules; RDS cross-region | Azure Blob geo-redundancy settings | Cloud Storage dual-region settings | Default settings vary — must be explicitly configured |
| Audit logging | AWS CloudTrail | Azure Monitor / Activity Log | Cloud Audit Logs | Must configure log storage in approved region |
| Data residency commitment | AWS Data Residency documentation | Microsoft EU Data Boundary / regional commitments | Google Cloud data residency guarantees | Verify specific service coverage |
| Global CDN (residency risk) | Amazon CloudFront | Azure CDN / Front Door | Cloud CDN | Edge nodes may cache data outside approved region — do not use for Restricted data |
| [Concept] | [AWS] | [Azure] | [GCP] | [Notes] |

---

*End of Document*

---

**Document Control Footer**

| Field | Value |
|---|---|
| Document Title | Cloud Data Residency Policy |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | Cloud Architecture Lead |
| Organization | [Organization Name] |
| Next Review Due | [Next Review Date] |
| Framework Reference | BNM RMiT Clause 10.52 |

*This document is subject to version control. Always verify that you are reading the current approved version before making compliance decisions. The authoritative version is maintained at [document repository location].*