# Cloud Exit Strategy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Cloud Architecture Lead |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Distribution** | Restricted — Internal Use Only |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may be subject to legal action under applicable Malaysian law, including the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Governance Structure](#3-governance-structure)
4. [Cloud Service Model and Deployment Type](#4-cloud-service-model-and-deployment-type)
5. [Data Residency Requirements](#5-data-residency-requirements)
6. [Shared Responsibility Matrix](#6-shared-responsibility-matrix)
7. [Exit Trigger Conditions](#7-exit-trigger-conditions)
8. [Exit Strategy Options](#8-exit-strategy-options)
9. [Data Extraction and Portability Plan](#9-data-extraction-and-portability-plan)
10. [Transition and Migration Plan](#10-transition-and-migration-plan)
11. [Business Continuity During Exit](#11-business-continuity-during-exit)
12. [Vendor Lock-In Risk Management](#12-vendor-lock-in-risk-management)
13. [Testing and Validation of Exit Procedures](#13-testing-and-validation-of-exit-procedures)
14. [Communication and Stakeholder Management](#14-communication-and-stakeholder-management)
15. [Regulatory Notification and Reporting](#15-regulatory-notification-and-reporting)
16. [Post-Exit Activities](#16-post-exit-activities)
17. [Roles and Responsibilities](#17-roles-and-responsibilities)
18. [Review and Approval](#18-review-and-approval)
19. [References](#19-references)
20. [Appendices](#20-appendices)

---

## 1. Executive Summary

*Provide a high-level overview of this document, its strategic importance, and the organization's overall readiness to execute a cloud exit. This section should be suitable for senior leadership and Board-level readers.*

[Organization Name] operates critical technology systems and data assets on cloud infrastructure provided by one or more Cloud Service Providers (CSPs). In accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 17.3, [Organization Name] is required to maintain a documented, tested, and operationally viable exit strategy for all material cloud services.

This Cloud Exit Strategy ("the Strategy") establishes the procedures, responsibilities, and technical mechanisms by which [Organization Name] can safely and efficiently exit from any cloud service arrangement without material disruption to its operations, customers, or regulatory obligations. The Strategy applies to all cloud deployments classified as material outsourcing or significant technology dependencies as defined under the RMiT framework.

### 1.1 Strategic Intent

The overarching objective of this Strategy is to:

- Ensure operational resilience in the event of a planned or unplanned cloud service exit
- Protect customer data and maintain data integrity throughout any transition
- Preserve compliance with BNM, PDPA, and NACSA requirements during and after exit
- Minimize financial, reputational, and operational impact on [Organization Name]

### 1.2 Summary of Cloud Footprint

*Summarize the organization's cloud footprint at a high level, including key providers and service categories. Detail will be expanded in Section 4.*

As of [Effective Date], [Organization Name] utilizes cloud services from the following providers:

| CSP | Service Category | Criticality | Exit Complexity |
|---|---|---|---|
| [CSP Name 1] | [e.g., IaaS, PaaS, SaaS] | [Critical / High / Medium / Low] | [High / Medium / Low] |
| [CSP Name 2] | [e.g., IaaS, PaaS, SaaS] | [Critical / High / Medium / Low] | [High / Medium / Low] |
| [CSP Name 3] | [e.g., IaaS, PaaS, SaaS] | [Critical / High / Medium / Low] | [High / Medium / Low] |

### 1.3 Key Findings and Readiness Assessment

*Summarize the current state of exit readiness, noting any material gaps and remediation timelines.*

| Assessment Area | Current Status | Gap Identified | Target Remediation Date |
|---|---|---|---|
| Data portability mechanisms | [Status] | [Yes / No — describe] | [Date] |
| Alternate infrastructure availability | [Status] | [Yes / No — describe] | [Date] |
| Exit testing conducted | [Status] | [Yes / No — describe] | [Date] |
| Contractual exit provisions | [Status] | [Yes / No — describe] | [Date] |
| Staff capability for exit execution | [Status] | [Yes / No — describe] | [Date] |

---

## 2. Purpose and Scope

### 2.1 Purpose

*Explain the regulatory and operational rationale for this document. Reference specific BNM RMiT clauses and the organization's internal policy hierarchy.*

This document establishes the Cloud Exit Strategy for [Organization Name] in compliance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, effective [BNM RMiT Effective Date]. Specifically, this Strategy addresses the requirements under:

- **RMiT Clause 17.3** — Cloud Services: Exit Strategy, which mandates that financial institutions maintain documented exit strategies for all cloud service arrangements to ensure continuity of operations, data recovery, and regulatory compliance in the event of a planned or unplanned exit.

This Strategy also supports compliance with:

- **BNM Outsourcing Policy** — Requirements for material outsourcing arrangements
- **Personal Data Protection Act 2010 (PDPA)** — Data handling obligations during transition
- **NACSA Cloud Security Guidelines** — National cybersecurity requirements for cloud adoption
- **[Organization Name] Technology Risk Management Policy** — Internal risk management standards
- **[Organization Name] Business Continuity Management Policy** — Continuity obligations

### 2.2 Objectives

The specific objectives of this Cloud Exit Strategy are to:

1. Define the conditions and triggers that would necessitate an exit from one or more cloud services
2. Document the technical and procedural steps required to extract, migrate, or decommission cloud-hosted data and workloads
3. Establish governance and decision-making structures for exit execution
4. Identify and mitigate risks associated with cloud exit, including vendor lock-in, data loss, and service disruption
5. Ensure that exit procedures are tested and validated at regular intervals
6. Define communication protocols for internal stakeholders, regulators, and customers during an exit event
7. Assign clear ownership and accountability for all exit activities

### 2.3 Scope

#### 2.3.1 In Scope

*Define what cloud services, systems, and business functions are covered by this strategy.*

This Strategy applies to all of the following within [Organization Name]:

- All cloud service arrangements classified as **material outsourcing** under BNM guidelines
- All cloud deployments supporting **critical systems** as defined in [Organization Name]'s Technology Asset Register
- All cloud deployments that store, process, or transmit **customer data** or **regulated data**
- All **IaaS, PaaS, and SaaS** arrangements with external Cloud Service Providers
- **Multi-cloud** and **hybrid cloud** configurations where at least one provider is external

The following business units and systems are explicitly in scope:

| Business Unit | System / Application | CSP | Hosting Model |
|---|---|---|---|
| [Business Unit 1] | [System Name] | [CSP Name] | [IaaS / PaaS / SaaS / Hybrid] |
| [Business Unit 2] | [System Name] | [CSP Name] | [IaaS / PaaS / SaaS / Hybrid] |
| [Business Unit 3] | [System Name] | [CSP Name] | [IaaS / PaaS / SaaS / Hybrid] |
| [Business Unit 4] | [System Name] | [CSP Name] | [IaaS / PaaS / SaaS / Hybrid] |

#### 2.3.2 Out of Scope

The following are explicitly **out of scope** for this Strategy:

- Internal private cloud infrastructure owned and operated solely by [Organization Name] on its own premises
- Non-material cloud services as determined by the annual materiality assessment process
- Individual employee productivity SaaS tools that do not process regulated or customer data
- Cloud services used exclusively for non-production, sandboxed development environments with no connection to production data

### 2.4 Definitions and Abbreviations

*Define key terms used throughout this document to ensure consistent interpretation.*

| Term / Abbreviation | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and financial regulator of Malaysia |
| **RMiT** | Risk Management in Technology — BNM Policy Document on technology risk |
| **CSP** | Cloud Service Provider — a third-party organization providing cloud computing services |
| **IaaS** | Infrastructure as a Service — cloud model providing virtualized computing resources |
| **PaaS** | Platform as a Service — cloud model providing a platform for application development |
| **SaaS** | Software as a Service — cloud model providing software applications over the internet |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian data protection legislation |
| **NACSA** | National Cyber Security Agency — Malaysia's national cybersecurity authority |
| **RTO** | Recovery Time Objective — maximum acceptable time to restore a system after disruption |
| **RPO** | Recovery Point Objective — maximum acceptable data loss measured in time |
| **DRP** | Disaster Recovery Plan |
| **BCP** | Business Continuity Plan |
| **Exit Event** | Any planned or unplanned cessation of a cloud service arrangement |
| **Material Outsourcing** | Outsourcing arrangement that meets BNM materiality thresholds |
| **Vendor Lock-In** | Dependency on a specific CSP's proprietary technologies making migration difficult |
| **Data Portability** | The ability to extract and transfer data from a CSP in a usable, standard format |
| **Run-Off Period** | The period between notice of exit and full cessation of cloud services |
| **Shadow IT** | Technology systems deployed without formal IT governance approval |
| **[Org-Specific Term]** | [Definition] |

---

## 3. Governance Structure

*Describe the governance framework that oversees cloud exit planning, execution, and post-exit review. Include committee structures, escalation paths, and decision-making authorities.*

### 3.1 Governance Framework Overview

[Organization Name]'s cloud exit governance is embedded within its broader Technology Risk Management Framework and is subject to oversight at the Board, Senior Management, and operational levels. The following governance hierarchy applies to all cloud exit activities:

```
Board of Directors / Board Risk Committee
        |
        v
Senior Management / Management Risk Committee
        |
        v
Chief Information Officer (CIO) / Chief Technology Officer (CTO)
        |
        v
Cloud Architecture Lead (Document Owner)
        |
        v
Cloud Exit Working Group
        |
        v
Operational Teams (IT, Security, Compliance, Business)
```

### 3.2 Governance Bodies

#### 3.2.1 Board Risk Committee (BRC)

| Attribute | Detail |
|---|---|
| **Chair** | [Name / Role] |
| **Frequency** | Quarterly, or as required during an exit event |
| **Responsibilities** | — Approve material cloud exit decisions involving significant financial or operational impact |
| | — Receive escalated reports on exit readiness and any material gaps |
| | — Ensure adequate resourcing for exit execution |

#### 3.2.2 Management Risk Committee (MRC)

| Attribute | Detail |
|---|---|
| **Chair** | [Name / Role — e.g., CRO or CIO] |
| **Frequency** | Monthly, or as required |
| **Responsibilities** | — Review and approve the Cloud Exit Strategy and material amendments |
| | — Monitor exit readiness metrics and remediation progress |
| | — Approve trigger declarations for exit initiation |
| | — Escalate to BRC where board-level approval is required |

#### 3.2.3 Cloud Exit Working Group (CEWG)

*The Cloud Exit Working Group is the primary operational body responsible for maintaining and executing this Strategy.*

| Attribute | Detail |
|---|---|
| **Chair** | Cloud Architecture Lead |
| **Members** | IT Operations Lead, Chief Information Security Officer (CISO), Data Protection Officer (DPO), Legal Counsel, Compliance Officer, Business Continuity Manager, Procurement / Vendor Management Lead, Finance Representative |
| **Frequency** | Bi-annually for readiness reviews; immediately upon exit trigger declaration |
| **Responsibilities** | — Maintain the currency and accuracy of this Strategy |
| | — Coordinate annual exit testing exercises |
| | — Monitor CSP contract terms for exit-related provisions |
| | — Execute exit procedures upon trigger declaration |
| | — Maintain registry of cloud-hosted assets and dependencies |

### 3.3 Decision Authority Matrix

*Define who has authority to make key decisions related to cloud exit.*

| Decision | Cloud Architecture Lead | CIO / CTO | MRC | BRC |
|---|---|---|---|---|
| Initiate exit planning for non-material service | Approve | Notify | Inform | — |
| Initiate exit for material service | Recommend | Recommend | Approve | Notify |
| Declare exit trigger for critical system | Recommend | Recommend | Approve | Notify / Approve |
| Approve exit budget below [threshold] | — | Approve | Inform | — |
| Approve exit budget above [threshold] | — | Recommend | Approve | Notify |
| Engage alternative CSP | Recommend | Approve | Inform | — |
| Notify BNM of material exit | Prepare | Review | Approve | Endorse |
| Sign exit agreement with CSP | — | — | Approve | — |

### 3.4 Escalation Procedures

*Define the escalation path when issues arise during exit planning or execution.*

In the event that an exit event is triggered, the following escalation thresholds apply:

| Scenario | Escalation Level | Timeframe |
|---|---|---|
| Exit trigger condition identified | Cloud Architecture Lead → CEWG | Within 24 hours |
| Exit will impact critical system | CEWG → CIO/CTO | Within 4 hours |
| Exit involves regulatory notification obligation | CEWG → Compliance → MRC | Within 24 hours |
| Exit cannot be completed within planned timeline | CEWG → MRC | Within 48 hours |
| Exit poses material customer impact | MRC → BRC | Within 24 hours |
| Data loss or breach during exit | CISO → DPO → MRC | Immediately / within 1 hour |

---

## 4. Cloud Service Model and Deployment Type

*Document the complete inventory of cloud services in scope, including service model, deployment type, criticality, and key technical characteristics relevant to exit planning.*

### 4.1 Cloud Service Models

[Organization Name] utilizes the following cloud service models, each of which presents distinct exit considerations:

#### 4.1.1 Infrastructure as a Service (IaaS)

*Document all IaaS arrangements. IaaS exits typically involve the migration of virtual machines, storage volumes, and network configurations.*

| Service Name | CSP | Region | Data Hosted | Criticality | RTO | RPO |
|---|---|---|---|---|---|---|
| [Service Name 1] | [CSP] | [Region] | [Data Types] | [Critical/High/Med/Low] | [Hours] | [Hours] |
| [Service Name 2] | [CSP] | [Region] | [Data Types] | [Critical/High/Med/Low] | [Hours] | [Hours] |
| [Service Name 3] | [CSP] | [Region] | [Data Types] | [Critical/High/Med/Low] | [Hours] | [Hours] |

**Exit Complexity Factors — IaaS:**
- Virtual machine image formats (proprietary vs. open standards such as OVA/OVF)
- Storage attachment types and export mechanisms
- Networking configuration (VPC, subnets, security groups) portability
- Dependencies on CSP-managed managed services (e.g., proprietary managed databases)

#### 4.1.2 Platform as a Service (PaaS)

*Document all PaaS arrangements. PaaS exits may involve migration of application code, runtime environments, databases, and middleware.*

| Service Name | CSP | Platform Type | Applications Hosted | Criticality | RTO | RPO |
|---|---|---|---|---|---|---|
| [Service Name 1] | [CSP] | [e.g., App Platform, Container Service] | [Application Names] | [Critical/High/Med/Low] | [Hours] | [Hours] |
| [Service Name 2] | [CSP] | [e.g., Managed Database] | [Application Names] | [Critical/High/Med/Low] | [Hours] | [Hours] |

**Exit Complexity Factors — PaaS:**
- Proprietary runtime environments and framework dependencies
- Managed database engine compatibility with target environment
- CI/CD pipeline portability
- Serverless function portability (e.g., AWS Lambda vs. Azure Functions)

#### 4.1.3 Software as a Service (SaaS)

*Document all SaaS arrangements. SaaS exits typically center on data extraction, format standardization, and re-implementation of business processes in an alternative solution.*

| Service Name | CSP / Vendor | Function | Data Volume | Criticality | Export Capability |
|---|---|---|---|---|---|
| [Service Name 1] | [Vendor] | [Business Function] | [Estimated GB/TB] | [Critical/High/Med/Low] | [Yes/No/Partial] |
| [Service Name 2] | [Vendor] | [Business Function] | [Estimated GB/TB] | [Critical/High/Med/Low] | [Yes/No/Partial] |
| [Service Name 3] | [Vendor] | [Business Function] | [Estimated GB/TB] | [Critical/High/Med/Low] | [Yes/No/Partial] |

**Exit Complexity Factors — SaaS:**
- Availability of data export APIs or bulk export tools
- Data format standards (CSV, JSON, XML vs. proprietary formats)
- User account and access configuration portability
- Integration dependency mapping with other internal systems

### 4.2 Deployment Types

#### 4.2.1 Public Cloud

*Detail public cloud deployments where infrastructure is shared with other tenants on a CSP's platform.*

| Deployment | CSP | Tenancy Model | Compliance Attestation | Last Audit Date |
|---|---|---|---|---|
| [Deployment Name] | [CSP] | [Single-tenant / Multi-tenant] | [e.g., ISO 27001, SOC 2 Type II] | [Date] |

#### 4.2.2 Private Cloud (Hosted)

*Detail privately hosted cloud instances operated by a third party exclusively for [Organization Name].*

| Deployment | Provider | Data Centre Location | Physical Security Level | Last Audit Date |
|---|---|---|---|---|
| [Deployment Name] | [Provider] | [Location] | [Level] | [Date] |

#### 4.2.3 Hybrid Cloud

*Detail hybrid cloud configurations spanning on-premises and public/private cloud.*

| Hybrid Configuration | On-Premises Component | Cloud Component | Integration Method | Exit Interdependencies |
|---|---|---|---|---|
| [Configuration Name] | [On-Prem Description] | [Cloud Description] | [API / VPN / Direct Connect] | [Description] |

### 4.3 Technology Dependency Map

*Map the interdependencies between cloud services, internal systems, and business processes to inform exit sequencing.*

| Cloud Service | Dependent Internal System | Dependency Type | Exit Sequencing Priority |
|---|---|---|---|
| [Cloud Service 1] | [Internal System A] | [Data feed / Authentication / Storage / API] | [1 — Exit first / 2 / 3 — Exit last] |
| [Cloud Service 2] | [Internal System B] | [Data feed / Authentication / Storage / API] | [1 / 2 / 3] |
| [Cloud Service 3] | [Internal System C] | [Data feed / Authentication / Storage / API] | [1 / 2 / 3] |

### 4.4 Proprietary Technology Risk Register

*Identify where [Organization Name] has significant dependencies on CSP-proprietary technologies that could impede exit.*

| CSP | Proprietary Technology | Business Function | Lock-In Risk Level | Mitigation Strategy |
|---|---|---|---|---|
| [CSP] | [e.g., Proprietary Database Engine] | [Function] | [High / Medium / Low] | [Strategy description] |
| [CSP] | [e.g., Serverless Compute Framework] | [Function] | [High / Medium / Low] | [Strategy description] |
| [CSP] | [e.g., Proprietary ML Platform] | [Function] | [High / Medium / Low] | [Strategy description] |

---

## 5. Data Residency Requirements

*Document all data residency and data sovereignty requirements applicable to cloud-hosted data, including regulatory mandates, contractual obligations, and organizational policy.*

### 5.1 Regulatory Data Residency Framework

[Organization Name], as a financial institution regulated by Bank Negara Malaysia, is subject to the following data residency requirements:

| Regulation / Policy | Requirement | Data Category Affected | Applicability to Exit |
|---|---|---|---|
| BNM RMiT | Paragraph [X] — Data stored and processed in Malaysia | Customer financial data | Data must remain in or be returned to Malaysian jurisdiction during and after exit |
| BNM Outsourcing Policy | Offshore outsourcing notification requirements | All outsourced processing | BNM notification required for material offshore arrangements |
| PDPA 2010 | Restrictions on cross-border data transfer | Personal data of Malaysian residents | Data transfer during exit must comply with PDPA Section 129 |
| NACSA Guidelines | Critical national information infrastructure (CNII) data | CNII-classified systems | Additional approval required for CNII data migration |
| [Other Regulation] | [Requirement] | [Data Category] | [Applicability] |

### 5.2 Current Data Residency Inventory

*Document where each category of regulated data is currently stored and processed.*

| Data Category | Classification | Current Storage Location | CSP / Facility | Residency Status | Compliant? |
|---|---|---|---|---|---|
| Customer Personal Data | Confidential | [Region / Country] | [CSP] | [Local / Offshore] | [Yes / No] |
| Transaction Records | Confidential | [Region / Country] | [CSP] | [Local / Offshore] | [Yes / No] |
| Credit Data | Highly Confidential | [Region / Country] | [CSP] | [Local / Offshore] | [Yes / No] |
| Audit Logs | Internal | [Region / Country] | [CSP] | [Local / Offshore] | [Yes / No] |
| Encryption Keys | Highly Confidential | [Region / Country] | [CSP] | [Local / Offshore] | [Yes / No] |
| [Other Data Type] | [Classification] | [Region / Country] | [CSP] | [Local / Offshore] | [Yes / No] |

### 5.3 Data Classification Framework

*Define the data classification levels used by [Organization Name] and the applicable handling requirements relevant to cloud exit.*

| Classification Level | Definition | Exit Handling Requirements | Authorized Target Environments Post-Exit |
|---|---|---|---|
| **Public** | Information approved for public release | Standard migration procedures | Any environment |
| **Internal** | Internal business information | Standard migration with access controls | Internal systems or approved cloud |
| **Confidential** | Sensitive business or customer information | Encrypted transfer, access-controlled | On-premises or certified Malaysian cloud only |
| **Highly Confidential** | Regulated, privileged, or highly sensitive data | Dual-authorization, encrypted transfer, chain of custody log | On-premises only or with specific BNM approval |

### 5.4 Cross-Border Data Transfer Restrictions During Exit

*Identify any data flows that traverse international boundaries during exit and the controls required.*

| Data Category | Source Location | Proposed Destination | Transfer Method | PDPA S.129 Assessment | BNM Approval Required? |
|---|---|---|---|---|---|
| [Data Category 1] | [Source Country] | [Destination] | [Method] | [Adequate / Conditional / Prohibited] | [Yes / No] |
| [Data Category 2] | [Source Country] | [Destination] | [Method] | [Adequate / Conditional / Prohibited] | [Yes / No] |

### 5.5 Data Retention and Disposition

*Define the obligations for data retention and secure disposal following exit from each cloud service.*

| Data Category | Minimum Retention Period | Post-Exit Retention Location | Secure Disposal Method | Disposal Timeline |
|---|---|---|---|---|
| Customer Transactional Data | [Period per BNM requirements] | [Location] | [Method — e.g., NIST 800-88 compliant wipe] | [After retention period] |
| Audit and Access Logs | [Period] | [Location] | [Method] | [After retention period] |
| Encryption Keys | [Period] | [Location] | [Method — e.g., key destruction with witness log] | [Date] |
| Backups | [Period] | [Location] | [Method] | [Date] |
| [Other Category] | [Period] | [Location] | [Method] | [Date] |

**Secure Disposal Certification:** Upon disposal of any regulated data, a Certificate of Destruction must be obtained from the responsible party and retained for a minimum of [X years] in [Organization Name]'s document management system.

---

## 6. Shared Responsibility Matrix

*Define the division of responsibilities between [Organization Name] and each Cloud Service Provider across all phases of the cloud service lifecycle, with particular emphasis on exit-phase responsibilities.*

### 6.1 General Shared Responsibility Principles

The division of responsibility between [Organization Name] and its CSPs is governed by the service model (IaaS, PaaS, SaaS) and the specific contractual terms of each arrangement. [Organization Name] retains ultimate accountability to BNM for all regulatory obligations regardless of responsibilities delegated to CSPs.

**Responsibility Legend:**
- **O** = Owns / Fully Responsible
- **S** = Supports / Contributes
- **I** = Informed
- **N/A** = Not Applicable

### 6.2 IaaS Shared Responsibility — Exit Phase

| Responsibility Area | [Organization Name] | CSP |
|---|---|---|
| **Data Management** | | |
| Data extraction and export | O | S |
| Data format standardization | O | S |
| Data integrity verification | O | S |
| Data deletion from CSP infrastructure post-exit | S | O |
| Certificate of data destruction | I | O |
| **Infrastructure** | | |
| Virtual machine image export | O | S |
| Storage volume snapshot and export | O | S |
| Network configuration documentation | O | S |
| DNS cutover and traffic redirection | O | S |
| Firewall rule migration | O | N/A |
| **Security** | | |
| Access revocation at exit | O | S |
| Key management and key export | O | N/A |
| Encryption of data in transit during exit | O | S |
| Security incident response during exit | O | S |
| **Contractual and Compliance** | | |
| Regulatory notification to BNM | O | N/A |
| Exit notice to CSP | O | N/A |
| Compliance with contractual exit terms | O | O |
| Provision of exit support services | N/A | O |
| Maintaining SLA during run-off period | S | O |

### 6.3 PaaS Shared Responsibility — Exit Phase

| Responsibility Area | [Organization Name] | CSP |
|---|---|---|
| **Application and Data** | | |
| Application code extraction and packaging | O | S |
| Database dump and export | O | S |
| Application configuration export | O | S |
| Dependency mapping and documentation | O | N/A |
| **Platform** | | |
| Runtime environment documentation | S | O |
| Container image export | O | S |
| CI/CD pipeline migration | O | N/A |
| Managed service configuration documentation | S | O |
| **Operational** | | |
| Maintaining platform availability during notice period | S | O |
| API stability during run-off period | S | O |
| Providing migration assistance tools | N/A | S |
| Post-exit data deletion | S | O |

### 6.4 SaaS Shared Responsibility — Exit Phase

| Responsibility Area | [Organization Name] | CSP / SaaS Vendor |
|---|---|---|
| **Data** | | |
| Initiating data export request | O | N/A |
| Providing data export tools / APIs | N/A | O |
| Data format and completeness validation | O | S |
| Data mapping to target system schema | O | N/A |
| **Operations** | | |
| Re-implementation in target system | O | N/A |
| User access deprovisioning | O | S |
| Integration disconnection | O | S |
| Providing export documentation | S | O |
| Maintaining data availability during run-off | S | O |
| Post-export data deletion confirmation | I | O |
| **Contractual** | | |
| Serving exit notice per contract | O | N/A |
| Honouring minimum exit notice period | O | O |
| Refund of prepaid unused services | I | O |

### 6.5 CSP-Specific Responsibility Addenda

*Document any CSP-specific deviations or additional responsibilities as agreed in contracts.*

#### 6.5.1 [CSP Name 1] — Specific Exit Responsibilities

| Item | Agreed Responsibility | Contract Reference | Notes |
|---|---|---|---|
| [Responsibility Item] | [Organization Name / CSP / Joint] | [Contract Clause] | [Notes] |
| [Responsibility Item] | [Organization Name / CSP / Joint] | [Contract Clause] | [Notes] |

#### 6.5.2 [CSP Name 2] — Specific Exit Responsibilities

| Item | Agreed Responsibility | Contract Reference | Notes |
|---|---|---|---|
| [Responsibility Item] | [Organization Name / CSP / Joint] | [Contract Clause] | [Notes] |

---

## 7. Exit Trigger Conditions

*Define the specific conditions that would trigger the invocation of this exit strategy. Triggers may be planned (contractual, strategic) or unplanned (CSP failure, regulatory direction).*

### 7.1 Planned Exit Triggers

| Trigger Category | Specific Condition | Likelihood | Decision Authority |
|---|---|---|---|
| **Contract Expiry** | Cloud service contract reaches end of term without renewal | High — Certain at contract end | MRC |
| **Strategic Rationalisation** | Board decision to consolidate cloud footprint or change strategy | Medium | BRC |
| **Cost Optimization** | Total cost of ownership exceeds approved thresholds by [X%] | Medium | MRC |
| **Merger / Acquisition** | Corporate restructuring requiring cloud consolidation | Low | BRC |
| **Technology Refresh** | Existing cloud platform becomes end-of-life or unsupported | Medium | CIO / CTO |
| **Better Alternative** | A materially superior CSP offering is identified | Medium | MRC |

### 7.2 Unplanned Exit Triggers

| Trigger Category | Specific Condition | Detection Method | Initial Escalation |
|---|---|---|---|
| **CSP Financial Failure** | CSP enters insolvency, receivership, or ceases operations | CSP communications, news monitoring, credit rating alerts | CIO → MRC immediately |
| **CSP Service Failure** | Prolonged outage exceeding RTO threshold ([X hours]) | Monitoring and alerting systems | IT Operations → Cloud Architecture Lead |
| **Regulatory Direction** | BNM directs [Organization Name] to exit a cloud arrangement | BNM correspondence | Compliance → CIO → BRC |
| **Data Breach by CSP** | CSP confirms breach of [Organization Name]'s data | CSP notification, CISO monitoring | CISO → DPO → MRC |
| **Contractual Breach by CSP** | CSP materially breaches SLA or contract terms | SLA monitoring, contractual review | Vendor Management → Legal → MRC |
| **Regulatory Non-Compliance by CSP** | CSP found non-compliant with applicable regulations | Audit findings, regulatory notifications | Compliance → MRC |
| **Geopolitical / Sanctions Risk** | CSP's jurisdiction subject to sanctions or adverse geopolitical events | Legal and Compliance monitoring | Legal → CIO → MRC |
| **Force Majeure** | Natural disaster or extraordinary event affecting CSP | CSP communications, monitoring | IT Operations → CIO |

### 7.3 Trigger Assessment and Escalation

Upon identification of a potential exit trigger, the following assessment process applies:

**Step 1 — Identification:** Any staff member may identify a potential trigger condition and must report to their line manager and the Cloud Architecture Lead within [X hours].

**Step 2 — Initial Assessment:** The Cloud Architecture Lead conducts an initial assessment within [X hours] to confirm whether the trigger is valid and assess severity.

**Step 3 — CEWG Convening:** If the trigger is confirmed, the Cloud Exit Working Group is convened within [X hours] to begin formal assessment.

**Step 4 — Impact Assessment:** CEWG conducts a formal impact assessment covering:
- Business operations impact
- Customer data risk
- Regulatory notification obligations
- Estimated exit timeline and cost

**Step 5 — Governance Escalation:** Findings escalated to the appropriate governance body per the Decision Authority Matrix in Section 3.3.

**Step 6 — Formal Exit Declaration:** Upon approval from the relevant authority, the exit is formally declared and Section 10 (Transition and Migration Plan) is activated.

---

## 8. Exit Strategy Options

*Define the range of exit strategy options available for each cloud service type, and the criteria for selecting the appropriate strategy.*

### 8.1 Exit Strategy Framework

[Organization Name] shall maintain readiness for the following exit strategy options, applied based on the nature of the exit trigger, available timeline, and target destination:

### 8.2 Option 1: Migration to Alternative Cloud Provider

*Applicable where: A functionally equivalent service is available from an alternative CSP, and sufficient lead time exists for migration.*

| Attribute | Details |
|---|---|
| **Suitability** | Planned exits with [minimum X weeks] lead time; non-critical to critical systems |
| **Estimated Duration** | [X to Y months] depending on workload complexity |
| **Key Activities** | CSP selection and contracting; parallel environment build; data migration; testing; cutover; decommission |
| **Primary Risks** | Data inconsistency during migration; integration failures; cost overrun |
| **Residency Compliance** | Confirm new CSP meets BNM data residency requirements before initiating |

#### 8.2.1 Target Cloud Provider Pre-Qualification Criteria

Before selecting an alternative CSP, the following criteria must be satisfied:

| Criterion | Minimum Requirement | Assessment Method |
|---|---|---|
| Data residency | Malaysian data centre or BNM-approved jurisdiction | Contractual confirmation |
| Security certification | ISO 27001 and SOC 2 Type II at minimum | Current certification evidence |
| BNM outsourcing compliance | Meets BNM outsourcing policy requirements | Legal / Compliance assessment |
| Financial stability | Investment-grade credit rating or equivalent | Financial due diligence |
| Regulatory track record | No material regulatory sanctions in past 3 years | Reference checks, public records |
| Data portability from new CSP | Must support exit strategy equivalent to this document | Contractual commitment |

### 8.3 Option 2: Repatriation to On-Premises Infrastructure

*Applicable where: Regulatory requirements mandate on-premises hosting, no suitable alternative CSP exists, or the organization is strategically de-clouding.*

| Attribute | Details |
|---|---|
| **Suitability** | Regulatory-directed exits; highly sensitive workloads; strategic changes |
| **Estimated Duration** | [X to Y months] — requires infrastructure procurement if new hardware needed |
| **Key Activities** | Infrastructure capacity planning; hardware procurement (if needed); environment build; data migration; testing; cutover; decommission |
| **Primary Risks** | Capacity constraints; hardware lead times; increased operational costs |
| **Residency Compliance** | Fully compliant — data returns to [Organization Name] direct control |

### 8.4 Option 3: Emergency Exit (Unplanned / Rapid)

*Applicable where: CSP failure, security breach, or regulatory direction requires immediate exit without standard lead time.*

| Attribute | Details |
|---|---|
| **Suitability** | Unplanned trigger events; CSP insolvency; material data breach |
| **Estimated Duration** | [X hours to Y weeks] — prioritizes service continuity over optimization |
| **Key Activities** | Emergency data extraction; temporary hosting in pre-provisioned DR environment; parallel restoration; subsequent planned migration if needed |
| **Primary Risks** | Data loss if CSP infrastructure unavailable; potential service disruption; elevated security risk |
| **Pre-Requisite** | Emergency DR environment must be maintained in ready state — see Section 11 |

### 8.5 Option 4: Service Decommissioning (No Migration)

*Applicable where: The cloud-hosted service is being permanently retired and no replacement is required.*

| Attribute | Details |
|---|---|
| **Suitability** | End-of-life systems; consolidated services; regulatory approval for decommission |
| **Estimated Duration** | [X to Y weeks] |
| **Key Activities** | User communication; data archival per retention policy; integration decommission; final data export; secure deletion; contract termination |
| **Primary Risks** | Premature data deletion; overlooked integrations; contractual penalties |

### 8.6 Strategy Selection Matrix

| Exit Trigger Type | Recommended Primary Strategy | Fallback Strategy |
|---|---|---|
| Planned contract expiry | Option 1 (Alternative Cloud) | Option 2 (On-Premises) |
| Strategic de-clouding | Option 2 (On-Premises) | Option 1 (Alternative Cloud) |
| CSP financial failure | Option 3 (Emergency Exit) | Option 2 (On-Premises) |
| CSP data breach | Option 3 (Emergency Exit) | Option 2 (On-Premises) |
| Regulatory direction | Option 2 (On-Premises) | Option 3 (Emergency Exit) |
| Technology end-of-life | Option 1 (Alternative Cloud) | Option 2 (On-Premises) |
| Service retirement | Option 4 (Decommission) | N/A |

---

## 9. Data Extraction and Portability Plan

*Detail the technical procedures for extracting all data from each cloud service in scope. This section is critical to demonstrating compliance with RMiT Clause 17.3.*

### 9.1 Data Extraction Principles

The following principles govern all data extraction activities under this Strategy:

1. **Completeness:** All data must be extracted with no omissions. Extraction must be validated against source inventories.
2. **Integrity:** Extracted data must be verified for integrity using checksums or equivalent mechanisms before the source is decommissioned.
3. **Confidentiality:** All data in transit during extraction must be encrypted using a minimum of AES-256 or TLS 1.3.
4. **Auditability:** All extraction activities must be logged and retained for a minimum of [X years].
5. **Timelines:** Extraction must be completed within the timelines defined in the Transition Plan (Section 10).
6. **Regulatory Compliance:** Data extraction must comply with PDPA requirements for data transfer and NACSA guidelines for data handling.

### 9.2 Data Extraction Inventory

*For each cloud service, document the data to be extracted, the extraction method, and expected volumes.*

#### 9.2.1 [Cloud Service / CSP 1] — Data Extraction Plan

| Data Type | Storage Location (within CSP) | Volume (Estimated) | Export Format | Export Tool / Method | Encryption Required | Owner |
|---|---|---|---|---|---|---|
| [Data Type e.g., Customer Records] | [e.g., S3 Bucket / Azure Blob] | [GB / TB] | [CSV / JSON / SQL Dump] | [Tool Name / API] | [Yes — AES-256] | [Role] |
| [Database] | [e.g., RDS Instance] | [GB / TB] | [SQL Dump / Parquet] | [pg_dump / mysqldump] | [Yes — AES-256] | [Role] |
| [Application Logs] | [Location] | [GB / TB] | [JSON / Text] | [Export API] | [Yes] | [Role] |
| [Encryption Keys] | [KMS / Key Vault] | [N/A] | [Key material export] | [CSP KMS API] | [Yes — HSM] | [CISO] |
| [Backups] | [Backup Vault] | [GB / TB] | [Native / Standard] | [Backup Service API] | [Yes] | [Role] |

#### 9.2.2 [Cloud Service / CSP 2] — Data Extraction Plan

| Data Type | Storage Location | Volume | Export Format | Export Tool | Encryption Required | Owner |
|---|---|---|---|---|---|---|
| [Data Type] | [Location] | [Volume] | [Format] | [Tool] | [Yes / No] | [Role] |

### 9.3 Data Extraction Procedures

#### 9.3.1 Pre-Extraction Checklist

Before initiating data extraction, the following steps must be completed:

- [ ] Exit trigger formally declared and approved by [Decision Authority]
- [ ] Target environment provisioned and validated
- [ ] Extraction timeline confirmed and communicated to all stakeholders
- [ ] Extraction tools tested and validated in non-production environment
- [ ] Encryption keys for transport secured in [Key Management System]
- [ ] Network connectivity between CSP and target environment established and tested
- [ ] Data extraction monitoring and logging enabled
- [ ] Chain-of-custody log initialized
- [ ] CEWG standby roster activated

#### 9.3.2 Extraction Execution Steps

**Step 1 — Snapshot and Freeze (where operationally possible)**

For planned exits, [Organization Name] shall request a data freeze or point-in-time snapshot from the CSP to minimize data drift during extraction.

- Freeze window: [Specify time window, e.g., maintenance window on [Day/Time]]
- Responsible party: [Role], coordinated with CSP [Contact Name / Team]
- CSP confirmation required: Yes — document reference [Contract Clause]

**Step 2 — Structured Data Extraction**

All structured data (databases, tables, records) shall be extracted using the following approach:

| Data Store | Extraction Command / Procedure | Validation Method |
|---|---|---|
| [Database Type e.g., PostgreSQL] | `pg_dump -Fc -h [host] -U [user] [dbname] > [output_file].dump` | Row count comparison; checksum validation |
| [Database Type e.g., MySQL] | `mysqldump --all-databases -h [host] -u [user] -p > [output_file].sql` | Row count comparison |
| [NoSQL e.g., MongoDB] | `mongodump --host [host] --out [output_dir]` | Document count; checksum |
| [Object Store e.g., S3] | `aws s3 sync s3://[bucket] [local_path] --sse AES256` | Object count; ETag comparison |

**Step 3 — Unstructured Data Extraction**

All unstructured data (files, documents, media) shall be extracted and catalogued:

- Extraction method: [e.g., rsync, object storage sync tools, CSP native export]
- Catalogue generation: MD5/SHA-256 hash of all extracted files
- Integrity validation: Hash comparison after transfer to target environment

**Step 4 — Encryption Key Extraction**

- Procedure: [Describe key export procedure, referencing key management documentation]
- Authorization: Requires dual-key holder authorization — [Key Holder 1 Role] and [Key Holder 2 Role]
- Storage: Exported keys transferred to [HSM / Key Management System] at target environment
- Documentation: Key chain-of-custody log updated

**Step 5 — Backup and Archive Extraction**

- All cloud-hosted backups within the defined retention period shall be exported to [target backup solution]
- Archive data subject to regulatory retention requirements shall be transferred to [Archive System] in [Organization Name]'s direct control

### 9.4 Data Integrity Validation

*Define the procedures for validating that extracted data is complete and uncorrupted.*

| Validation Check | Method | Acceptance Criteria | Responsible Role |
|---|---|---|---|
| Row / Record count | Database query comparison: source vs. extracted | 100% match | [Data Lead Role] |
| File count | Manifest comparison | 100% match | [Data Lead Role] |
| Checksum / Hash validation | SHA-256 comparison of all files | 100% match | [Security Role] |
| Referential integrity | Foreign key validation in target environment | Zero integrity violations | [DBA Role] |
| Application smoke test | End-to-end functional test in target environment | All critical functions pass | [Application Owner] |
| Encryption key validation | Decryption test of sample data using extracted keys | Successful decryption | [CISO] |

**Validation Sign-Off:** Data extraction is not deemed complete until all validation checks pass and are signed off by the Cloud Architecture Lead and CISO.

### 9.5 Data Extraction Timeline

| Phase | Activity | Duration | Start Trigger | Responsible |
|---|---|---|---|---|
| Preparation | Environment setup, tool validation | [X days] | Exit declaration | Cloud Architecture Lead |
| Snapshot | Point-in-time snapshot / data freeze | [X hours] | Preparation complete | IT Operations |
| Extraction — Critical Data | Extract Tier 1 critical data sets | [X days] | Snapshot complete | Data Engineering Team |
| Extraction — Standard Data | Extract remaining data sets | [X days] | Critical complete | Data Engineering Team |
| Validation | Integrity and completeness checks | [X days] | All extraction complete | Data Lead + CISO |
| Sign-Off | Formal extraction completion sign-off | [X days] | Validation passed | Cloud Architecture Lead |
| **Total** | | **[X to Y weeks]** | | |

---

## 10. Transition and Migration Plan

*Define the end-to-end plan for transitioning workloads and services from the exiting CSP to the target environment.*

### 10.1 Migration Phases Overview

A cloud exit migration shall be executed in the following phases:

| Phase | Name | Objective | Duration |
|---|---|---|---|
| Phase 0 | Planning and Preparation | Confirm target environment; finalize plan; assemble team | [X weeks] |
| Phase 1 | Target Environment Setup | Provision and configure target infrastructure | [X weeks] |
| Phase 2 | Data Migration | Extract and transfer all data per Section 9 | [X weeks] |
| Phase 3 | Application Migration | Deploy and configure applications in target environment | [X weeks] |
| Phase 4 | Integration Reconnection | Reconnect all internal and external integrations | [X weeks] |
| Phase 5 | Parallel Run and Testing | Run source and target environments concurrently; validate | [X weeks] |
| Phase 6 | Cutover | Switch production traffic to target environment | [X hours/days] |
| Phase 7 | Decommission | Formal exit from CSP; data deletion; contract termination | [X weeks] |

### 10.2 Phase 0: Planning and Preparation

#### 10.2.1 Exit Team Assembly

| Role | Name | Responsibilities |
|---|---|---|
| Exit Project Lead | [Name] | Overall coordination and accountability |
| Cloud Architecture Lead | [Name] | Technical architecture decisions |
| Data Migration Lead | [Name] | Data extraction and validation |
| Application Lead | [Name] | Application migration and testing |
| Security Lead (CISO) | [Name] | Security controls during migration |
| Compliance Officer | [Name] | Regulatory notifications and compliance monitoring |
| Business Continuity Manager | [Name] | BCP activation if required |
| Vendor Management Lead | [Name] | CSP contractual management and notices |
| Legal Counsel | [Name] | Contract review, dispute resolution |
| Communications Lead | [Name] | Stakeholder and customer communications |

#### 10.2.2 Exit Planning Deliverables

| Deliverable | Description | Owner | Due Date |
|---|---|---|---|
| Detailed Migration Plan | System-level migration runbook | Exit Project Lead | [Date] |
| Network Architecture Design | Target network topology | Cloud Architecture Lead | [Date] |
| Data Migration Runbook | Detailed extraction and transfer procedures | Data Migration Lead | [Date] |
| Test Plan | Acceptance testing criteria and procedures | Application Lead | [Date] |
| Cutover Plan | Step-by-step cutover procedures with rollback | Cloud Architecture Lead | [Date] |
| Rollback Plan | Procedures to revert to source if cutover fails | IT Operations Lead | [Date] |
| Communication Plan | Stakeholder notification schedule | Communications Lead | [Date] |
| Regulatory Notification Draft | BNM notification letter | Compliance Officer | [Date] |

### 10.3 Phase 1: Target Environment Setup

*Detail the steps required to provision and configure the target environment to receive migrated workloads.*

| Activity | Description | Acceptance Criteria | Owner | Target Date |
|---|---|---|---|---|
| Compute provisioning | Provision virtual machines / containers per capacity plan | All required compute available and passing health checks | Cloud Architecture Lead | [Date] |
| Storage provisioning | Provision storage volumes per capacity requirements | All storage provisioned and accessible | IT Operations | [Date] |
| Network configuration | Configure VPCs, subnets, routing, firewalls | Network connectivity validated per topology | Network Lead | [Date] |
| Security controls | Deploy WAF, IDS/IPS, SIEM integration | All security controls active and generating alerts | CISO | [Date] |
| Identity and access | Configure IAM roles, SSO integration, MFA | All access controls validated | Security Lead | [Date] |
| Monitoring and alerting | Deploy monitoring stack | All critical metrics being captured | IT Operations | [Date] |
| Backup configuration | Configure backup jobs and test restore | Backup runs successfully; restore tested | IT Operations | [Date] |

### 10.4 Phase 3: Application Migration

*For each application, define the migration approach and key steps.*

#### 10.4.1 Application Migration Register

| Application | Migration Approach | Source Environment | Target Environment | Dependencies | Migration Lead | Target Date |
|---|---|---|---|---|---|---|
| [App Name 1] | [Lift-and-shift / Refactor / Replace] | [Source CSP] | [Target] | [List dependencies] | [Name] | [Date] |
| [App Name 2] | [Lift-and-shift / Refactor / Replace] | [Source CSP] | [Target] | [List dependencies] | [Name] | [Date] |
| [App Name 3] | [Lift-and-shift / Refactor / Replace] | [Source CSP] | [Target] | [List dependencies] | [Name] | [Date] |

#### 10.4.2 Application Migration Runbook Template

*Complete one runbook per application using the template below.*

**Application:** [Application Name]
**Migration Lead:** [Name]
**Version:** [X.X]

| Step | Action | Command / Procedure | Expected Result | Rollback Step |
|---|---|---|---|---|
| 1 | [Action description] | [Command or procedure reference] | [Expected output] | [Rollback procedure] |
| 2 | [Action description] | [Command or procedure reference] | [Expected output] | [Rollback procedure] |
| 3 | [Action description] | [Command or procedure reference] | [Expected output] | [Rollback procedure] |

### 10.5 Phase 5: Parallel Run and Testing

*Define the acceptance testing requirements that must be satisfied before cutover can proceed.*

#### 10.5.1 Acceptance Testing Criteria

| Test Category | Test Description | Pass Criteria | Responsible |
|---|---|---|---|
| **Functional Testing** | | | |
| Core business functions | All critical business workflows execute successfully | 100% pass rate on critical test cases | Application Owner |
| Data integrity | Data in target matches source (post-migration) | Zero discrepancies identified | Data Migration Lead |
| Integration testing | All downstream and upstream integrations functioning | All integrations responding as expected | Integration Lead |
| **Performance Testing** | | | |
| Response time | Application response times in target vs. source | Within [X%] of source benchmark | Performance Team |
| Throughput | Transaction volume capacity | Meets or exceeds source capacity | Performance Team |
| **Security Testing** | | | |
| Vulnerability scan | DAST and SAST on target environment | Zero critical; zero high vulnerabilities | CISO |
| Penetration test | External and internal penetration test | No material findings | CISO |
| Access control | User access validated | All access controls functioning as designed | Security Lead |
| **Disaster Recovery** | | | |
| Backup and restore | Test restore from backup in target | Restore completes within RTO; data within RPO | IT Operations |
| Failover | Test failover to DR in target environment | Failover completes within defined RTO | IT Operations |
| **Compliance** | | | |
| Data residency | Confirm all data resident in approved jurisdiction | 100% compliance confirmed | Compliance Officer |
| Audit logging | Confirm all required audit logs being generated | Audit logs complete and searchable | CISO |

#### 10.5.2 Parallel Run Sign-Off

The following sign-offs are required before cutover can proceed:

| Sign-Off Required From | Condition for Sign-Off |
|---|---|
| Cloud Architecture Lead | All technical acceptance criteria passed |
| Application Owner(s) | All business functional tests passed |
| CISO | All security tests passed; no outstanding critical findings |
| Data Migration Lead | Data integrity fully validated |
| Compliance Officer | Regulatory compliance confirmed |
| Business Continuity Manager | BCP updated to reflect target environment |

### 10.6 Phase 6: Cutover

*Define the cutover procedure for switching production traffic to the target environment.*

#### 10.6.1 Cutover Prerequisites

- [ ] All Phase 5 acceptance tests passed and signed off
- [ ] All Phase 5 sign-offs obtained
- [ ] Maintenance window scheduled and communicated to stakeholders
- [ ] Rollback plan tested and ready to execute
- [ ] Incident response team on standby
- [ ] CSP support teams notified and available
- [ ] Executive sponsor notified and available

#### 10.6.2 Cutover Runbook

| Step | Time (relative) | Action | Responsible | Verification | Rollback Trigger |
|---|---|---|---|---|---|
| 1 | T-24h | Final data sync / backup | Data Lead | Sync confirmation | N/A |
| 2 | T-4h | Maintenance window starts; user communication sent | Comms Lead | Communication delivered | N/A |
| 3 | T-1h | Read-only mode for source systems (if applicable) | IT Operations | Confirmed read-only | Cancel cutover |
| 4 | T-0 | DNS cutover to target environment | Network Lead | DNS propagation confirmed | Revert DNS |
| 5 | T+15min | Smoke test — critical functions | Application Owner | All smoke tests pass | Revert DNS; restore source |
| 6 | T+1h | Full functional validation | Application Owner | All key tests pass | Revert DNS; restore source |
| 7 | T+2h | Security monitoring validation | CISO | Alerts flowing correctly | — |
| 8 | T+4h | Cutover success declared | Exit Project Lead | Sign-off obtained | — |
| 9 | T+24h | Post-cutover monitoring review | IT Operations | No critical incidents | — |
| 10 | T+48h | Maintenance window ends | Exit Project Lead | Users restored to full access | — |

#### 10.6.3 Rollback Plan

In the event that cutover fails or critical issues are identified within the rollback window, the following steps shall be executed:

**Rollback Window:** [X hours] from cutover initiation

| Step | Action | Responsible | Target Completion |
|---|---|---|---|
| 1 | Rollback decision made by [Exit Project Lead / CIO] | Exit Project Lead | Immediately |
| 2 | DNS reverted to source environment | Network Lead | Within [X minutes] |
| 3 | Source environment restored to full operation | IT Operations | Within [X minutes] |
| 4 | Data reconciliation to identify any inconsistencies | Data Lead | Within [X hours] |
| 5 | Incident report initiated | Exit Project Lead | Within [X hours] |
| 6 | Root cause analysis commenced | Cloud Architecture Lead | Within [X days] |

---

## 11. Business Continuity During Exit

*Define the measures in place to maintain business continuity and protect customers during an exit event.*

### 11.1 Business Impact Assessment for Exit Events

*Document the potential business impact of exit events for each in-scope system.*

| System / Service | Maximum Tolerable Downtime | RTO During Exit | RPO During Exit | Customer Impact | Revenue Impact |
|---|---|---|---|---|---|
| [System 1] | [Hours] | [Hours] | [Hours] | [Description] | [MYR / day] |
| [System 2] | [Hours] | [Hours] | [Hours] | [Description] | [MYR / day] |
| [System 3] | [Hours] | [Hours] | [Hours] | [Description] | [MYR / day] |

### 11.2 Emergency DR Environment

*Define the pre-provisioned emergency DR environment available for use in unplanned exit scenarios.*

[Organization Name] maintains a pre-provisioned emergency DR environment capable of hosting all critical systems in the event of an emergency cloud exit. This environment is:

| Attribute | Specification |
|---|---|
| **Location** | [On-premises data centre / Alternative CSP / Co-location facility] |
| **Address** | [Physical or logical address] |
| **Capacity** | [% of production capacity] |
| **Activation Time** | [X hours from decision] |
| **Last Tested** | [Date] |
| **Next Test Due** | [Date] |
| **Responsible Party** | [Role / Team] |

### 11.3 Manual Backup Procedures

*For systems that cannot be immediately migrated, define the manual procedures to maintain business operations.*

| System | Manual Backup Procedure | Capacity Under Manual Operation | Maximum Duration of Manual Operation |
|---|---|---|---|
| [System 1] | [Description of manual procedure] | [% of normal capacity] | [Days / Weeks] |
| [System 2] | [Description of manual procedure] | [% of normal capacity] | [Days / Weeks] |

### 11.4 Customer Communication During Exit

*Define how customers will be kept informed during an exit event, subject to regulatory requirements on disclosure.*

| Scenario | Communication Required | Timing | Channel | Approver |
|---|---|---|---|---|
| Planned exit with no service disruption | Advance notice if service will be affected | [X days before] | [Email / Website / App] | [CCO / MRC] |
| Planned exit with service impact | Advance notice of outage windows | [X days before] | [All channels] | [CCO / BRC] |
| Emergency exit with service disruption | Immediate notification of disruption and restoration ETA | As soon as possible | [All channels] | [CEO / CIO] |

### 11.5 BCP Activation During Exit

*Define when and how the Business Continuity Plan is activated in the context of an exit event.*

The BCP shall be activated in conjunction with this Exit Strategy in the following circumstances:

- Any exit event where expected downtime exceeds the Maximum Tolerable Downtime for any critical system
- Any emergency exit event
- Any exit event classified as a Critical Incident under [Organization Name]'s Incident Management Policy

BCP Activation Authority: [Business Continuity Manager] with approval from [CIO / CEO]

Reference: [BCP Document ID and Title]

---

## 12. Vendor Lock-In Risk Management

*Document the proactive measures taken to minimize vendor lock-in and preserve exit optionality across all cloud services.*

### 12.1 Vendor Lock-In Risk Framework

[Organization Name] recognizes that vendor lock-in is a material risk to its ability to execute an exit strategy. The following framework governs vendor lock-in management:

**Lock-In Risk Categories:**

| Category | Description | Examples |
|---|---|---|
| **Data Lock-In** | Data stored in proprietary formats that are difficult to export | Proprietary database engines; non-standard file formats |
| **Application Lock-In** | Applications dependent on CSP-specific services or APIs | Serverless functions; proprietary ML platforms |
| **Infrastructure Lock-In** | Network or infrastructure configurations tied to CSP | Proprietary networking services; region-specific features |
| **Skills Lock-In** | Staff expertise concentrated in a single CSP's toolset | CSP-specific certifications; proprietary tooling knowledge |
| **Contractual Lock-In** | Contract terms that penalize or impede exit | Long minimum terms; high exit fees; data deletion clauses |

### 12.2 Lock-In Risk Register

| CSP | Service | Lock-In Category | Lock-In Risk Description | Current Risk Level | Mitigation Measure | Mitigation Owner | Review Date |
|---|---|---|---|---|---|---|---|
| [CSP] | [Service] | [Category] | [Description] | [H/M/L] | [Measure] | [Role] | [Date] |
| [CSP] | [Service] | [Category] | [Description] | [H/M/L] | [Measure] | [Role] | [Date] |

### 12.3 Architectural Standards for Portability

*Define the architectural standards that [Organization Name] applies to cloud deployments to maintain portability.*

| Standard | Description | Applicability | Owner |
|---|---|---|---|
| Container-first deployment | All applications must be containerized using OCI-compliant container images | All new cloud workloads | Cloud Architecture Lead |
| Open data formats | All data must be stored in open, standard formats (e.g., CSV, JSON, Parquet, SQL) where technically feasible | All data storage | Data Architecture Lead |
| Infrastructure as Code | All infrastructure defined in portable IaC (e.g., Terraform, not CSP-native tools) | All new IaaS deployments | DevOps Lead |
| API abstraction | Internal systems must not directly call CSP-proprietary APIs without an abstraction layer | All application integrations | Application Architecture Lead |
| Multi-cloud by design | Critical systems must be architecturally capable of operating on at least two different CSPs | Critical systems | Cloud Architecture Lead |

### 12.4 Contractual Provisions for Exit

*Define the mandatory contractual provisions that must be included in all cloud service agreements to support exit.*

The following provisions must be included in all material cloud service contracts, to be validated during contract review and annual assessment:

| Contractual Provision | Description | Mandatory? | Verify During: |
|---|---|---|---|
| Data export right | Explicit right to export all data in standard, machine-readable format | Yes | Contract signing; Annual review |
| Data export assistance | CSP obligation to provide reasonable assistance with data export | Yes | Contract signing |
| Data deletion confirmation | CSP obligation to provide written confirmation of data deletion post-exit | Yes | Contract signing |
| Run-off period | Minimum [X months] run-off period following exit notice | Yes | Contract signing |
| Exit pricing | No material cost increase during run-off period | Yes | Contract signing |
| Exit notice period | Maximum [X months] notice required for exit | Yes | Contract signing |
| No punitive exit fees | No excessive financial penalties for early exit | Yes | Contract signing |
| Survival of obligations | CSP obligations survive contract termination until confirmed data deletion | Yes | Contract signing |

---

## 13. Testing and Validation of Exit Procedures

*Define the testing programme to validate that exit procedures are effective and that [Organization Name] can execute an exit within defined timeframes.*

### 13.1 Exit Testing Programme

[Organization Name] commits to a regular programme of exit testing to validate the effectiveness of this Strategy. Testing is a mandatory requirement under RMiT Clause 17.3.

### 13.2 Testing Schedule

| Test Type | Frequency | Scope | Last Completed | Next Due | Responsible |
|---|---|---|---|---|---|
| **Tabletop Exercise** | Annual | All in-scope CSPs; full exit scenario | [Date] | [Date] | Cloud Architecture Lead |
| **Data Extraction Drill** | Annual | Full data extraction for one critical system | [Date] | [Date] | Data Migration Lead |
| **Emergency DR Activation** | Bi-annual | Emergency DR environment activation and operation | [Date] | [Date] | IT Operations Lead |
| **Partial Migration Test** | Every [X years] | Full migration of one non-critical system | [Date] | [Date] | Cloud Architecture Lead |
| **Full Exit Simulation** | Every [X years] | Full exit simulation for one material cloud service | [Date] | [Date] | Exit Project Lead |

### 13.3 Test Scenario Definitions

#### 13.3.1 Tabletop Exercise — Scenario Template

**Scenario:** [Scenario Name — e.g., "CSP declares bankruptcy with 30-day wind-down"]

| Element | Details |
|---|---|
| **Trigger** | [Description of simulated trigger event] |
| **Participants** | CEWG members; Senior Management representatives |
| **Duration** | [X hours] |
| **Objectives** | Test decision-making; validate escalation procedures; identify gaps |
| **Facilitator** | [Role] |
| **Success Criteria** | All decisions made within defined authorities; no gaps identified in procedures; escalation timelines met |

**Tabletop Discussion Agenda:**

1. Trigger identification and verification (0–30 min)
2. Initial impact assessment (30–60 min)
3. Governance escalation and decision-making (60–90 min)
4. Exit strategy selection (90–120 min)
5. Regulatory notification obligations (120–150 min)
6. Communication to stakeholders (150–180 min)
7. Lessons learned and gap identification (180–240 min)

#### 13.3.2 Data Extraction Drill — Procedure

**Objective:** Confirm that all critical data can be extracted from [selected CSP] within [X hours] in a format that is complete and usable.

| Step | Activity | Success Criteria |
|---|---|---|
| 1 | Initiate extraction of [selected data set] from [CSP] | Extraction initiated within [X minutes] of trigger |
| 2 | Transfer data to test target environment | Transfer complete within [X hours] |
| 3 | Validate data integrity | 100% integrity checks pass |
| 4 | Test data usability in target environment | Application reads data without errors |
| 5 | Document results and timings | Test report completed |

### 13.4 Test Results Register

*Maintain a register of all exit test results, findings, and remediation actions.*

| Test Date | Test Type | CSP / System | Overall Result | Findings | Remediation Required | Remediation Owner | Closed Date |
|---|---|---|---|---|---|---|---|
| [Date] | [Type] | [CSP/System] | [Pass / Fail / Partial] | [Summary] | [Yes / No] | [Role] | [Date] |
| [Date] | [Type] | [CSP/System] | [Pass / Fail / Partial] | [Summary] | [Yes / No] | [Role] | [Date] |

### 13.5 Exit Readiness Score

*Use the following scorecard to assess overall exit readiness on an annual basis.*

| Readiness Domain | Weight | Current Score (1-5) | Weighted Score | Comments |
|---|---|---|---|---|
| Data extraction capability | 25% | [Score] | [Weighted] | [Comments] |
| Alternate environment availability | 20% | [Score] | [Weighted] | [Comments] |
| Staff capability and training | 15% | [Score] | [Weighted] | [Comments] |
| Contractual exit provisions | 15% | [Score] | [Weighted] | [Comments] |
| Testing completion | 15% | [Score] | [Weighted] | [Comments] |
| Documentation currency | 10% | [Score] | [Weighted] | [Comments] |
| **Overall Exit Readiness Score** | **100%** | | **[Total]** | |

**Score Interpretation:**

| Score Range | Readiness Status | Required Action |
|---|---|---|
| 4.5 – 5.0 | Excellent | Maintain current standards |
| 3.5 – 4.4 | Satisfactory | Address minor gaps identified |
| 2.5 – 3.4 | Requires Improvement | Remediation plan required; MRC report |
| Below 2.5 | Inadequate | Immediate remediation; BRC escalation |

---

## 14. Communication and Stakeholder Management

*Define the communication protocols for all stakeholders during a cloud exit event.*

### 14.1 Stakeholder Register

| Stakeholder Group | Interest in Exit | Communication Channel | Frequency During Exit | Communication Lead |
|---|---|---|---|---|
| Board of Directors / BRC | Strategic and reputational risk | Board papers; direct briefing | As required; minimum weekly updates | CEO / CIO |
| Senior Management / MRC | Operational and financial impact | MRC meetings; direct email | Daily during active exit phase | CIO |
| Business Unit Heads | Service availability and continuity | Email; Town Hall | As required; status updates | Exit Project Lead |
| IT Operations | Technical execution | War room / incident channel | Real-time during cutover | Cloud Architecture Lead |
| Compliance | Regulatory obligations | Direct briefing | As required | Compliance Officer |
| Legal | Contractual matters | Direct briefing | As required | Legal Counsel |
| External Customers | Service availability | Official channels (email, app, website) | Per communication plan | CCO / Comms Lead |
| CSP | Exit coordination | Contract manager; technical channels | Daily during active phase | Vendor Management Lead |
| BNM (if notifiable) | Regulatory oversight | Formal written correspondence | Per notification obligations | Compliance Officer |

### 14.2 Internal Communication Templates

#### 14.2.1 Exit Trigger Alert — Internal Notification

> **SUBJECT: [CONFIDENTIAL] Cloud Exit Trigger — [CSP Name] — [Date]**
>
> **To:** [Distribution List]
> **From:** [Cloud Architecture Lead]
> **Date:** [Date]
> **Classification:** Confidential — Internal Use Only
>
> A potential cloud exit trigger has been identified for [CSP Name] / [Service Name]. The Cloud Exit Working Group has been convened and is conducting an initial impact assessment.
>
> **Trigger Type:** [Description]
> **Date Identified:** [Date]
> **Immediate Impact:** [None / Minimal / Moderate / Significant]
> **Next Update:** [Date/Time]
>
> All enquiries to be directed to [Cloud Architecture Lead / CEWG Chair].

#### 14.2.2 Exit Declaration Notice — Internal

> **SUBJECT: [CONFIDENTIAL] Formal Cloud Exit Declaration — [CSP Name] — [Date]**
>
> **To:** [Distribution List]
> **From:** [CIO / Exit Project Lead]
> **Date:** [Date]
> **Classification:** Confidential — Internal Use Only
>
> Following assessment by the Cloud Exit Working Group and approval by [MRC / BRC], [Organization Name] has formally declared an exit from [CSP Name / Service Name] effective [Date].
>
> The Cloud Exit Strategy (Document ID: [ID]) has been activated. The Exit Project Lead is [Name].
>
> **Exit Timeline:** [Summary of key dates]
> **Customer Impact:** [Summary]
> **Regulatory Notification:** [Status]
>
> Updates will be provided [frequency] via [channel].

---

## 15. Regulatory Notification and Reporting

*Define the obligations to notify Bank Negara Malaysia and other regulators of material cloud exit events.*

### 15.1 BNM Notification Requirements

Under BNM's Outsourcing Policy and RMiT, [Organization Name] has the following notification obligations in relation to cloud exit events:

| Scenario | Notification Required | Timing | Format | Approver |
|---|---|---|---|---|
| Planned exit from material cloud service | Yes — prior notification | [X days] before exit | Formal written notice | CEO / CIO |
| Unplanned exit from material cloud service | Yes — post-event notification | Within [X days] of exit trigger | Formal written notice + incident report | CEO / CIO |
| CSP data breach triggering exit | Yes — data breach notification | Within [X hours] of confirmed breach | Incident report per BNM requirements | CEO / CISO |
| Exit resulting in service disruption | Yes — operational risk notification | Within [X days] | Formal written notice + impact assessment | CEO / CIO |

### 15.2 BNM Notification Template

*Refer to Appendix G for the BNM notification letter template. The template is pre-approved by Legal and Compliance and must be used for all BNM notifications related to cloud exit events.*

Key elements of the BNM notification:

- **Institution details:** Full legal name; BNM institution code; contact officer
- **CSP details:** Full legal name; registered jurisdiction; nature of services
- **Exit description:** Type of exit; trigger event; timeline
- **Data protection:** Description of how customer data will be protected during exit
- **Business continuity:** Summary of measures to maintain service continuity
- **Regulatory compliance:** Confirmation of continued PDPA, RMiT, and BNM compliance
- **Target environment:** Description of replacement arrangement (if applicable)

### 15.3 NACSA Notification

For systems classified as Critical National Information Infrastructure (CNII) or where the cloud exit involves data of national security significance, notification to NACSA may be required:

| Condition | NACSA Notification | Timeline | Responsible |
|---|---|---|---|
| Exit involves CNII-classified data | Yes | [X days] prior notification | CISO + Compliance |
| Exit results in cyber incident | Yes | Per NACSA incident reporting requirements | CISO |

### 15.4 PDPA Considerations

Under PDPA 2010, [Organization Name] must ensure:

- Data subjects (customers) are not materially disadvantaged by the exit of a cloud service processor
- Any international transfer of personal data during exit is compliant with PDPA Section 129
- Any data breach arising during exit is reported per PDPA breach notification obligations
- Processors (CSPs) are contractually required to delete personal data upon exit instruction

---

## 16. Post-Exit Activities

*Define the activities required after exit is complete to close out the cloud arrangement and capture lessons learned.*

### 16.1 CSP Decommissioning Checklist

The following must be completed before formally closing the cloud service arrangement:

| Activity | Description | Responsible | Completion Criteria | Date Completed |
|---|---|---|---|---|
| Data deletion confirmation | Obtain written confirmation from CSP that all [Organization Name] data has been securely deleted from all CSP systems, including backups | Vendor Management Lead | Certificate of Destruction received | |
| Access revocation | Confirm all [Organization Name] user accounts, API keys, and service accounts have been deprovisioned | IT Operations / CISO | IAM audit confirms zero active credentials | |
| Network disconnection | Remove all network connectivity (VPN, Direct Connect, peering) to CSP | Network Lead | No active network connections to CSP confirmed | |
| Credential and key disposal | Securely destroy or archive all CSP-specific credentials and keys | CISO | Key disposal log updated | |
| Contract termination | Execute formal contract termination and obtain written confirmation | Legal / Vendor Management | Termination confirmation received from CSP | |
| Financial settlement | Ensure all outstanding invoices settled; reclaim any prepaid amounts | Finance | Zero outstanding balance confirmed | |
| DNS cleanup | Remove all DNS records pointing to CSP infrastructure | Network Lead | DNS audit confirms no CSP records | |
| Monitoring cleanup | Remove CSP from monitoring and alerting systems | IT Operations | Monitoring systems updated | |
| Documentation update | Update all internal documentation referencing the exited CSP | Cloud Architecture Lead | Documents updated and version-controlled | |
| CMDB update | Update Configuration Management Database | IT Operations | CMDB reflects current state | |
| Regulatory notifications | File any required post-exit notifications with BNM / NACSA | Compliance Officer | Notifications acknowledged by regulators | |

### 16.2 Lessons Learned

Following every exit event or exit test, a formal lessons learned exercise must be conducted within [X weeks] of exit completion.

**Lessons Learned Report Template:**

| Element | Details |
|---|---|
| **Exit Event / Test Reference** | [ID / Description] |
| **Date of Exercise** | [Date] |
| **Facilitator** | [Name / Role] |
| **Participants** | [Names / Roles] |

| Area | What Worked Well | What Could Be Improved | Recommended Action | Owner | Due Date |
|---|---|---|---|---|---|
| Planning and preparation | [Observations] | [Gaps] | [Action] | [Role] | [Date] |
| Data extraction | [Observations] | [Gaps] | [Action] | [Role] | [Date] |
| Application migration | [Observations] | [Gaps] | [Action] | [Role] | [Date] |
| Communication | [Observations] | [Gaps] | [Action] | [Role] | [Date] |
| Governance and decision-making | [Observations] | [Gaps] | [Action] | [Role] | [Date] |
| Regulatory compliance | [Observations] | [Gaps] | [Action] | [Role] | [Date] |

### 16.3 Strategy Update Post-Exit

Following each exit event or material test exercise, this Strategy must be reviewed and updated to incorporate lessons learned. The update cycle is:

| Trigger | Review Required | Owner | Timeline |
|---|---|---|---|
| Exit event completed | Yes — full review | Cloud Architecture Lead | Within [X weeks] |
| Exit test completed | Yes — partial review | Cloud Architecture Lead | Within [X weeks] |
| Material change to cloud footprint | Yes — targeted review | Cloud Architecture Lead | Within [X weeks] |
| Annual review | Yes — full review | Cloud Architecture Lead | Annually |

---

## 17. Roles and Responsibilities

*Define the roles and responsibilities for all parties involved in cloud exit planning, execution, and review.*

### 17.1 RACI Matrix — Exit Strategy Maintenance

| Activity | Cloud Architecture Lead | CIO / CTO | CISO | DPO | Compliance Officer | IT Operations | Application Owner | Legal Counsel | Business Continuity Manager | Vendor Management |
|---|---|---|---|---|---|---|---|---|---|---|
| Maintain and update Exit Strategy | O | A | C | C | C | I | I | C | C | I |
| Annual review of Exit Strategy | O | A | C | C | C | I | I | C | C | I |
| Maintain cloud asset inventory | O | A | C | I | I | R | R | I | I | I |
| Monitor CSP financial stability | I | I | I | I | C | I | I | I | I | O |
| Monitor CSP contract terms | I | I | I | I | C | I | I | R | I | O |
| Conduct annual exit tabletop | O | A | R | C | R | R | R | C | R | C |
| Conduct data extraction drill | R | A | C | C | I | R | I | I | I | I |

**RACI Key:** O = Owner, A = Accountable, R = Responsible, C = Consulted, I = Informed

### 17.2 RACI Matrix — Exit Execution

| Activity | Exit Project Lead | Cloud Architecture Lead | CIO / CTO | CISO | DPO | Compliance Officer | IT Operations | Application Owner | Legal Counsel | Business Continuity Manager | Vendor Management | Communications Lead |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Declare exit trigger | R | C | A | C | I | C | I | I | C | I | C | I |
| Convene CEWG | O | R | A | I | I | I | I | I | I | I | I | I |
| Conduct impact assessment | R | R | A | R | R | R | R | R | C | R | R | I |
| Approve exit strategy | C | C | A | I | I | I | I | I | I | I | I | I |
| Notify BNM | C | I | A | C | C | O | I | I | R | I | I | I |
| Execute data extraction | C | R | A | R | C | I | R | C | I | I | I | I |
| Validate data integrity | C | R | A | R | C | I | R | R | I | I | I | I |
| Execute application migration | R | O | A | C | I | I | R | R | I | I | I | I |
| Execute cutover | O | R | A | C | I | I | R | R | I | I | I | I |
| Manage customer communication | C | I | A | I | R | C | I | I | I | I | I | O |
| Manage CSP communication | C | C | A | I | I | I | I | I | R | I | O | I |
| Post-exit decommissioning | R | R | A | R | I | C | R | I | R | I | R | I |
| Lessons learned | O | R | A | R | C | R | R | R | C | R | C | C |

### 17.3 Individual Role Descriptions

#### 17.3.1 Cloud Architecture Lead (Document Owner)

**Accountability:** Overall ownership of the Cloud Exit Strategy, ensuring it remains current, accurate, and testable.

**Responsibilities:**
- Author and maintain this Strategy document
- Chair the Cloud Exit Working Group
- Provide technical leadership during exit execution
- Ensure architectural standards for portability are applied to new deployments
- Present annual exit readiness assessment to MRC

#### 17.3.2 Chief Information Officer / Chief Technology Officer

**Accountability:** Senior leadership accountability for technology exit readiness and execution.

**Responsibilities:**
- Approve this Strategy and material amendments
- Represent technology risk at MRC and BRC
- Authorize exit execution for non-BRC-level events
- Ensure adequate resourcing for exit activities

#### 17.3.3 Chief Information Security Officer

**Accountability:** Security of data and systems throughout the exit process.

**Responsibilities:**
- Ensure security controls are maintained during exit
- Approve data extraction security procedures
- Lead security testing of target environment
- Oversee credential and key management during exit

#### 17.3.4 Data Protection Officer

**Accountability:** Compliance with PDPA obligations during exit.

**Responsibilities:**
- Advise on PDPA implications of data migration
- Ensure cross-border transfer compliance
- Oversee data subject notification obligations if required
- Confirm compliant data disposal by CSP

#### 17.3.5 Compliance Officer

**Accountability:** Regulatory compliance throughout exit.

**Responsibilities:**
- Monitor BNM notification obligations and timelines
- Prepare BNM notification letters
- Confirm ongoing RMiT compliance during exit
- Maintain exit documentation for regulatory inspection

---

## 18. Review and Approval

### 18.1 Review Frequency and Triggers

This document shall be reviewed:

- **Annually** — as part of [Organization Name]'s annual technology risk review cycle
- **Upon significant change** — including but not limited to:
  - Addition or removal of a material cloud service
  - Material change to an existing CSP relationship or contract
  - Change in applicable regulatory requirements (BNM, PDPA, NACSA)
  - Following execution of an exit event (planned or unplanned)
  - Following a material exit test finding that requires procedural changes
  - Following a regulatory inspection finding related to cloud governance

### 18.2 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| 1.1 | [Date] | [Author Name] | [Description of changes] |
| 2.0 | [Date] | [Author Name] | [Description of changes] |

### 18.3 Approval Sign-Off

This document requires the following approvals prior to implementation and following each material revision:

| Role | Name | Signature | Date |
|---|---|---|---|
| Cloud Architecture Lead (Author) | [Name] | __________________ | [Date] |
| Chief Information Officer / CTO | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Data Protection Officer | [Name] | __________________ | [Date] |
| Compliance Officer | [Name] | __________________ | [Date] |
| Management Risk Committee Representative | [Name] | __________________ | [Date] |

### 18.4 Document Control

| Attribute | Details |
|---|---|
| **Document Repository** | [Document Management System path / URL] |
| **Access Control** | Restricted — Authorized personnel only |
| **Printing** | Printed copies are uncontrolled. Refer to document repository for current version. |
| **Disposal** | Superseded versions must be securely destroyed per [Organization Name]'s Information Lifecycle Policy |

---

## 19. References

*List all regulatory documents, standards, and internal policies referenced in this Strategy.*

### 19.1 Regulatory and Statutory References

| Reference | Title | Issuing Body | Relevant Clauses | URL / Reference |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 17.3 (Cloud Exit Strategy); Clauses 17.1–17.8 (Cloud Services) | [BNM Official Reference] |
| BNM Outsourcing Policy | Policy Document on Outsourcing | Bank Negara Malaysia | All clauses on material outsourcing notification and governance | [BNM Official Reference] |
| BNM Operational Risk | Policy Document on Operational Risk | Bank Negara Malaysia | Business continuity requirements | [BNM Official Reference] |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Section 129 (cross-border transfer); Section 40 (security) | Laws of Malaysia |
| NACSA Cloud Security Guidelines | Guidelines on Cloud Computing Security | NACSA | All cloud security requirements | [NACSA Reference] |
| ISO 27001 | Information Security Management Systems | ISO/IEC | Controls relevant to cloud exit | ISO Catalogue |
| ISO 27017 | Code of Practice for Cloud Security | ISO/IEC | Cloud service-specific controls | ISO Catalogue |
| NIST SP 800-88 | Guidelines for Media Sanitization | NIST | Data destruction standards | NIST Publications |

### 19.2 Internal Policy References

| Document ID | Title | Owner | Relationship to This Document |
|---|---|---|---|
| [ID] | Technology Risk Management Policy | CIO | Parent policy; sets risk appetite for cloud |
| [ID] | Business Continuity Management Policy | BCM Manager | Governs BCP activation during exit |
| [ID] | Information Security Policy | CISO | Security requirements during exit |
| [ID] | Data Classification and Handling Policy | DPO | Governs data handling during exit |
| [ID] | Third Party / Outsourcing Management Policy | Vendor Management | Governs CSP relationship management |
| [ID] | Incident Management Policy | IT Operations | Incident classification and escalation |
| [ID] | Cloud Governance Policy | Cloud Architecture Lead | Overall cloud governance framework |
| [ID] | Change Management Policy | IT Operations | Change control during exit migration |

### 19.3 Contractual References

| CSP | Contract Reference | Exit-Relevant Clauses | Contract Manager |
|---|---|---|---|
| [CSP Name 1] | [Contract ID / Reference] | [Exit notice, data deletion, run-off, export] | [Name] |
| [CSP Name 2] | [Contract ID / Reference] | [Exit notice, data deletion, run-off, export] | [Name] |
| [CSP Name 3] | [Contract ID / Reference] | [Exit notice, data deletion, run-off, export] | [Name] |

---

## 20. Appendices

### Appendix A: Cloud Asset Register

*A comprehensive inventory of all cloud-hosted assets within the scope of this Strategy. Maintained as a live register and updated quarterly or upon material change.*

| Asset ID | Asset Name | Asset Type | CSP | Region | Business Unit | Data Classification | Criticality | RTO | RPO | Last Updated |
|---|---|---|---|---|---|---|---|---|---|---|
| [ID] | [Name] | [VM / DB / Storage / App / etc.] | [CSP] | [Region] | [BU] | [Classification] | [H/M/L] | [Hours] | [Hours] | [Date] |

*[Full register maintained in: [Document Management System location]]*

---

### Appendix B: CSP Contact Directory

*Emergency and operational contact information for all in-scope Cloud Service Providers.*

#### [CSP Name 1]

| Contact Type | Contact Name | Role | Phone | Email | Hours |
|---|---|---|---|---|---|
| Account Manager | [Name] | [Role] | [Phone] | [Email] | Business Hours |
| Technical Support | [N/A — use portal] | — | [Support Number] | [Support Email] | 24/7 |
| Contract / Commercial | [Name] | [Role] | [Phone] | [Email] | Business Hours |
| Security Incident | [N/A — use portal] | — | [Security Hotline] | [Security Email] | 24/7 |
| Data Protection Officer | [Name] | [Role] | [Phone] | [Email] | Business Hours |

#### [CSP Name 2]

| Contact Type | Contact Name | Role | Phone | Email | Hours |
|---|---|---|---|---|---|
| Account Manager | [Name] | [Role] | [Phone] | [Email] | Business Hours |
| Technical Support | [N/A] | — | [Support Number] | [Support Email] | 24/7 |

---

### Appendix C: Exit Notice Templates

*Pre-drafted exit notice letters for each in-scope CSP, reviewed and approved by Legal Counsel. These templates must be used when serving exit notice to minimize errors and ensure contractual compliance.*

#### C.1 Formal Exit Notice — [CSP Name 1]

> **[ORGANIZATION LETTERHEAD]**
>
> [Date]
>
> [CSP Legal Entity Name]
> [Registered Address]
>
> **RE: Formal Notice of Exit — Cloud Services Agreement [Contract Reference Number]**
>
> Dear [CSP Account Manager Name],
>
> [Organization Name] (Company Registration No. [Registration Number]) hereby serves formal notice of its intention to exit from the Cloud Services Agreement referenced above, effective [Exit Date], in accordance with Clause [X] of the said Agreement.
>
> This notice is served with [X days/months] advance notice as required under the Agreement.
>
> We request your confirmation of the following within [X business days]:
>
> 1. Acknowledgement of this exit notice
> 2. Confirmation of the agreed run-off period ending [Date]
> 3. Your designated migration assistance contact
> 4. Timeline for provision of data export tools and documentation
> 5. Your process for issuing a Certificate of Data Destruction upon completion of exit
>
> Please acknowledge receipt of this notice in writing to [Contact Name], [Title], at [Email Address].
>
> Yours faithfully,
>
> ______________________________
> [Name]
> [Title]
> [Organization Name]

---

### Appendix D: Data Extraction Technical Runbooks

*Detailed technical runbooks for data extraction from each in-scope CSP. Each runbook is maintained as a separate controlled document.*

| Runbook ID | CSP | Service Type | Description | Version | Location |
|---|---|---|---|---|---|
| [ID]-RB-001 | [CSP Name 1] | IaaS | IaaS VM and Storage Extraction Runbook | [Version] | [Location] |
| [ID]-RB-002 | [CSP Name 1] | PaaS | Managed Database Extraction Runbook | [Version] | [Location] |
| [ID]-RB-003 | [CSP Name 2] | SaaS | [SaaS Application] Data Export Runbook | [Version] | [Location] |

*[Note: Runbooks contain technical credentials and access procedures. Access restricted to IT Operations and Cloud Architecture teams.]*

---

### Appendix E: Exit Test Reports

*Archive of completed exit test reports, including tabletop exercises, data extraction drills, and migration simulations.*

| Test ID | Test Date | Test Type | CSP / System | Overall Result | Report Location |
|---|---|---|---|---|---|
| [ID]-TEST-001 | [Date] | Tabletop Exercise | All CSPs | [Pass / Fail / Partial] | [Location] |
| [ID]-TEST-002 | [Date] | Data Extraction Drill | [CSP] | [Pass / Fail / Partial] | [Location] |

---

### Appendix F: BNM Notification Templates

*Pre-approved notification letter templates for use in BNM regulatory notifications related to cloud exit events. Templates reviewed and approved by Compliance Officer and Legal Counsel.*

#### F.1 Planned Cloud Exit Notification to BNM

> **[ORGANIZATION LETTERHEAD]**
>
> [Date]
>
> Director
> [Relevant Supervision Department]
> Bank Negara Malaysia
> Jalan Dato' Onn
> 50480 Kuala Lumpur
>
> **RE: Notification of Planned Exit from Material Cloud Service Arrangement — [CSP Name]**
>
> Dear Director,
>
> In accordance with Bank Negara Malaysia's Risk Management in Technology Policy Document and Outsourcing Policy, [Organization Name] (Institution Code: [Code]) hereby provides advance notification of its planned exit from the following material cloud service arrangement:
>
> | Field | Details |
> |---|---|
> | Cloud Service Provider | [CSP Name] |
> | Nature of Services | [Description] |
> | Contract Reference | [Reference] |
> | Planned Exit Date | [Date] |
> | Reason for Exit | [Description] |
> | Target Arrangement | [Description of replacement] |
>
> **Data Protection:** All customer data will be [extracted and transferred to / securely deleted] in accordance with PDPA 2010 requirements. A Certificate of Data Destruction will be obtained from [CSP Name] upon exit completion.
>
> **Business Continuity:** [Organization Name] confirms that service continuity will be maintained throughout the exit period. [Describe measures.]
>
> **Compliance Confirmation:** [Organization Name] confirms that this exit has been approved by [MRC / BRC] and that all regulatory requirements will be maintained during and after the exit.
>
> Should Bank Negara Malaysia require any additional information or wish to discuss this matter, please contact [Compliance Officer Name] at [Phone] or [Email].
>
> Yours faithfully,
>
> ______________________________
> [Chief Executive Officer Name]
> Chief Executive Officer
> [Organization Name]

---

### Appendix G: Glossary of Technical Terms

*Extended glossary of technical terms used in the data extraction runbooks and technical sections of this Strategy.*

| Term | Definition |
|---|---|
| **AES-256** | Advanced Encryption Standard with 256-bit key length — the minimum encryption standard for data at rest and in transit under this Strategy |
| **API** | Application Programming Interface — a set of protocols allowing software applications to communicate |
| **CMDB** | Configuration Management Database — a repository of information about IT assets and their configurations |
| **CI/CD** | Continuous Integration / Continuous Deployment — software development and deployment pipeline |
| **DNS** | Domain Name System — the system translating human-readable domain names to IP addresses |
| **HSM** | Hardware Security Module — a physical device providing secure key generation and storage |
| **IAM** | Identity and Access Management — controls governing who can access what within an IT environment |
| **OCI** | Open Container Initiative — an open standard for container formats and runtimes |
| **OVA / OVF** | Open Virtualization Appliance / Format — open standards for virtual machine portability |
| **Parquet** | An open-source, column-oriented data file format used in data engineering |
| **SHA-256** | Secure Hash Algorithm 256-bit — a cryptographic hash function used for data integrity verification |
| **SLA** | Service Level Agreement — contractual commitments by the CSP for service availability and performance |
| **TLS 1.3** | Transport Layer Security version 1.3 — the current standard for encrypted communications in transit |
| **VPC** | Virtual Private Cloud — a logically isolated section of a public cloud |
| **VPN** | Virtual Private Network — encrypted communication tunnel over a public network |
| **WAF** | Web Application Firewall — a security control filtering malicious web traffic |

---

### Appendix H: Exit Strategy Maturity Model

*A self-assessment maturity model for [Organization Name] to track progress in cloud exit readiness over time.*

| Maturity Level | Level Name | Description | Key Indicators |
|---|---|---|---|
| **Level 1** | Initial | Exit strategy exists in draft; limited testing; ad hoc processes | Strategy document exists; no formal testing conducted |
| **Level 2** | Developing | Strategy formally approved; annual review conducted; basic testing performed | Tabletop exercise completed; data extraction partially tested |
| **Level 3** | Defined | Strategy fully implemented; testing programme active; all procedures documented | Annual tabletop; data extraction drill; all runbooks current |
| **Level 4** | Managed | Exit readiness measured and tracked; testing includes migration simulations; gaps proactively remediated | Full migration simulation completed; readiness score tracked; metrics reported to MRC |
| **Level 5** | Optimised | Continuous improvement embedded; exit readiness integrated into CSP selection and architecture; industry benchmarking | Benchmarking against peers; CSP contracts proactively managed; exit readiness a KPI |

**Current Maturity Assessment:**

| Assessment Date | Maturity Level | Assessed By | Target Level | Target Date |
|---|---|---|---|---|
| [Date] | [Level 1–5] | [Cloud Architecture Lead] | [Level] | [Date] |

---

*End of Document*

---

> **Document Control Footer**
>
> | Field | Value |
> |---|---|
> | Document Title | Cloud Exit Strategy |
> | Document ID | [Document ID] |
> | Version | 1.0 |
> | Classification | Confidential |
> | Owner | Cloud Architecture Lead |
> | Last Review | [Last Review Date] |
> | Next Review | [Next Review Date] |
> | Regulatory Reference | BNM RMiT Clause 17.3 |
>
> *Printed copies of this document are uncontrolled. The current version is maintained in [Organization Name]'s document management system. Classification: Confidential — Internal Use Only.*