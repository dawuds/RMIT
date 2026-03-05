# Cloud Adoption Notification Procedure

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
| **Framework Reference** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause(s)** | 16.4 |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorized personnel involved in cloud governance, technology risk, and compliance functions. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Notification Trigger Criteria](#5-notification-trigger-criteria)
6. [Notification Timeline Requirements](#6-notification-timeline-requirements)
7. [Cloud Service Model and Deployment Type Classification](#7-cloud-service-model-and-deployment-type-classification)
8. [Data Residency Requirements](#8-data-residency-requirements)
9. [Step-by-Step Notification Process Flow](#9-step-by-step-notification-process-flow)
10. [Roles and Responsibilities (RACI)](#10-roles-and-responsibilities-raci)
11. [Shared Responsibility Matrix](#11-shared-responsibility-matrix)
12. [BNM Notification Package — Required Documentation](#12-bnm-notification-package--required-documentation)
13. [Post-Notification Activities](#13-post-notification-activities)
14. [Exceptions and Escalation](#14-exceptions-and-escalation)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*Describe the purpose of this procedure, including what it is intended to achieve and why it exists within the organization's governance framework.*

This procedure establishes the formal process by which [Organization Name] fulfils its regulatory obligation to notify Bank Negara Malaysia (BNM) prior to adopting cloud services, in accordance with the Risk Management in Technology (RMiT) Policy Document, specifically Clause 16.4. The procedure ensures that all cloud adoption activities are assessed, documented, and communicated to BNM within the prescribed timelines, and that the organization maintains a complete and auditable record of all cloud-related regulatory notifications.

This document provides:

- A structured, repeatable process for preparing and submitting cloud adoption notifications to BNM
- Clear accountability across all functions involved in cloud governance
- Standardized documentation requirements to support regulatory submissions
- Guidance on data residency, shared responsibility, and risk assessment obligations
- A framework for managing BNM queries, responses, and post-notification monitoring

---

## 2. Scope and Applicability

*Define the boundaries of this procedure — what it covers, what it does not cover, and which parts of the organization it applies to.*

### 2.1 In-Scope

This procedure applies to all cloud adoption activities undertaken by [Organization Name], including but not limited to:

- First-time adoption of any cloud service from a new cloud service provider (CSP)
- Material changes to existing cloud arrangements (see Section 5 for trigger criteria)
- Migration of existing on-premises systems or applications to cloud infrastructure
- Adoption of Software-as-a-Service (SaaS), Platform-as-a-Service (PaaS), or Infrastructure-as-a-Service (IaaS) deployments
- Multi-cloud or hybrid cloud arrangements involving new CSPs or new service tiers
- Outsourcing of critical or important functions (COF/IOF) to cloud-based service providers
- Cloud adoption by subsidiaries or entities within the [Organization Name] group where BNM is the consolidated supervisor

### 2.2 Out-of-Scope

The following are outside the scope of this procedure:

- Internal private cloud deployments hosted entirely within [Organization Name]'s own data centres
- Non-production or development/test cloud environments that do not process, store, or transmit customer data or production data
- Cloud services already notified to BNM under a prior submission, where no material change has occurred
- Cloud services assessed and determined below the materiality threshold (refer to Section 5.2)

### 2.3 Applicable Business Units and Functions

| Business Unit / Function | Applicability |
|---|---|
| Technology & Infrastructure | Primary |
| Cloud Architecture | Primary |
| Technology Risk Management | Primary |
| Information Security | Primary |
| Compliance & Regulatory Affairs | Primary |
| Business Lines / Product Owners | Supporting |
| Legal & Contracts | Supporting |
| Finance & Vendor Management | Supporting |
| Internal Audit | Advisory / Oversight |
| Senior Management / Board Risk Committee | Approval |

---

## 3. Regulatory and Policy Context

*Summarize the regulatory obligations and internal policies that underpin this procedure. Reference specific clauses to enable traceability during audits.*

### 3.1 BNM RMiT Policy — Cloud Services

Bank Negara Malaysia's **Risk Management in Technology (RMiT)** Policy Document (effective [BNM Policy Effective Date]) sets out the requirements for financial institutions in Malaysia regarding the management of technology risks, including obligations specific to cloud services under **Part G — Cloud Services (Paragraphs 16.1–16.13)**.

**Clause 16.4** specifically requires that [Organization Name] notify BNM **prior to the adoption** of cloud services, with the notification containing sufficient information to allow BNM to assess the technology and operational risks arising from the proposed cloud arrangement.

### 3.2 Related Internal Policies

| Policy / Standard | Reference | Owner |
|---|---|---|
| Cloud Governance Policy | [Policy Ref] | Cloud Architecture Lead |
| Technology Risk Management Policy | [Policy Ref] | Chief Risk Officer |
| Third-Party / Outsourcing Management Policy | [Policy Ref] | Head of Procurement |
| Information Security Policy | [Policy Ref] | Chief Information Security Officer |
| Data Classification and Handling Standard | [Policy Ref] | Data Protection Officer |
| Business Continuity Management Policy | [Policy Ref] | Head of BCM |

### 3.3 Related Regulatory Instruments

| Regulatory Instrument | Issuing Authority | Relevance |
|---|---|---|
| Risk Management in Technology (RMiT) | BNM | Primary framework |
| Guidelines on Outsourcing | BNM | Outsourcing obligations for cloud |
| Personal Data Protection Act 2010 (PDPA) | PDPC Malaysia | Data protection in cloud |
| Cybersecurity Act 2024 | NACSA / Parliament | Critical information infrastructure |
| Guidelines on Management of Cyber Risk | BNM | Cyber risk in cloud environments |

---

## 4. Definitions and Abbreviations

*Provide clear definitions for all technical and regulatory terms used in this document to ensure consistent understanding across all stakeholders.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Cloud Services** | On-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction, as defined under BNM RMiT. |
| **Cloud Service Provider (CSP)** | An entity that makes cloud services available to customers, including hyperscale providers (e.g., AWS, Azure, GCP) and managed service providers. |
| **Critical or Important Function (COF/IOF)** | Functions as defined under BNM's outsourcing guidelines whose disruption would materially impact the financial institution's operations, customers, or regulatory obligations. |
| **Data Residency** | The physical or geographic location where data is stored, processed, or transmitted at rest or in transit. |
| **Material Change** | A change to an existing cloud arrangement that meets one or more of the trigger criteria defined in Section 5 of this procedure. |
| **Notification** | A formal written communication submitted to BNM prior to the adoption of cloud services, in accordance with RMiT Clause 16.4. |
| **Shared Responsibility Model** | A framework that defines the division of security, operational, and compliance responsibilities between [Organization Name] and the CSP. |
| **SaaS (Software-as-a-Service)** | A cloud delivery model in which the CSP hosts and manages the software application and underlying infrastructure. |
| **PaaS (Platform-as-a-Service)** | A cloud delivery model providing a platform for customers to develop, run, and manage applications without managing the underlying infrastructure. |
| **IaaS (Infrastructure-as-a-Service)** | A cloud delivery model providing virtualized computing infrastructure over the internet. |
| **Hyperscale CSP** | Large-scale cloud providers operating global infrastructure, including but not limited to Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| CSP | Cloud Service Provider |
| COF/IOF | Critical or Important Function / Important Outsourcing Function |
| PDPA | Personal Data Protection Act 2010 |
| CISO | Chief Information Security Officer |
| CRO | Chief Risk Officer |
| DPO | Data Protection Officer |
| SLA | Service Level Agreement |
| DR | Disaster Recovery |
| BCP | Business Continuity Plan |
| RACI | Responsible, Accountable, Consulted, Informed |
| PII | Personally Identifiable Information |
| TRA | Technology Risk Assessment |
| DPIA | Data Protection Impact Assessment |

---

## 5. Notification Trigger Criteria

*Define the specific conditions or events that obligate [Organization Name] to submit a notification to BNM. This section must be kept current and reviewed against BNM guidance at each annual review cycle.*

### 5.1 Mandatory Notification Triggers

A BNM notification under RMiT Clause 16.4 **must** be submitted when any of the following conditions are met:

| Trigger # | Trigger Condition | Example |
|---|---|---|
| T-01 | First-time adoption of any cloud service for production workloads | Onboarding a new SaaS CRM platform |
| T-02 | Engagement of a new CSP not previously notified to BNM | Contracting with a new hyperscale provider |
| T-03 | Migration of a Critical or Important Function (COF/IOF) to cloud | Moving core banking to cloud-hosted infrastructure |
| T-04 | Material change in data residency — including data leaving Malaysia | Shifting storage region from Malaysia to Singapore |
| T-05 | Change in cloud service model (e.g., from SaaS to PaaS) for an existing notified arrangement | Replacing a managed SaaS tool with a self-managed PaaS deployment |
| T-06 | Change in deployment model (e.g., public cloud to hybrid cloud) | Adding a private cloud component to an existing public cloud workload |
| T-07 | Significant change to the shared responsibility model that increases [Organization Name]'s risk exposure | CSP shifting responsibility for encryption key management to [Organization Name] |
| T-08 | Adoption of cloud services involving storage or processing of customer PII outside Malaysia | Enabling global data replication for a cloud analytics platform |
| T-09 | Outsourcing arrangement with a cloud-based third party involving COF/IOF | Engaging a cloud-based fraud detection vendor |
| T-10 | Any other event where BNM has indicated that prior notification is required | As directed by BNM in supervisory correspondence |

### 5.2 Materiality Assessment

*Provide a structured method for determining whether a cloud adoption event crosses the materiality threshold and requires BNM notification. Materiality thresholds must be approved by the Board Risk Committee or delegated authority.*

Where a proposed cloud adoption does not clearly fall within a mandatory trigger above, the Cloud Architecture Lead shall conduct a **Materiality Assessment** using the following criteria:

| Assessment Dimension | Low | Medium | High (Notification Required) |
|---|---|---|---|
| **Data Sensitivity** | Internal / non-sensitive data only | Internal data including employee records | Customer PII, financial data, regulated data |
| **Functional Criticality** | Non-production, test, or development | Supporting / non-critical business function | Critical or Important Function (COF/IOF) |
| **Volume of Affected Customers** | None | < [X] customers | ≥ [X] customers |
| **Regulatory Exposure** | No direct regulatory impact | Indirect regulatory exposure | Direct regulatory obligation involved |
| **CSP Dependency** | Low / easily substitutable | Moderate dependency | High dependency / difficult to exit |
| **Financial Exposure** | < [MYR Threshold 1] | [MYR Threshold 1] – [MYR Threshold 2] | > [MYR Threshold 2] |

> **Decision Rule:** If any single dimension is assessed as **High**, a BNM notification is required. If two or more dimensions are assessed as **Medium**, escalation to the Technology Risk Committee for a determination is required.

---

## 6. Notification Timeline Requirements

*Specify the required lead times for BNM notification submissions. These timelines must be built into project planning for all cloud adoption initiatives.*

### 6.1 Pre-Notification Lead Time

In accordance with RMiT Clause 16.4, [Organization Name] must submit the BNM notification **prior to** the adoption of cloud services. The following minimum lead times apply:

| Cloud Adoption Type | Minimum Notification Lead Time | Rationale |
|---|---|---|
| New cloud service adoption (COF/IOF) | [X] calendar days before go-live | Allow BNM review and potential objection period |
| New cloud service adoption (non-COF/IOF) | [X] calendar days before go-live | Standard notification window |
| Material change to existing arrangement | [X] calendar days before change implementation | Allow BNM to assess risk profile change |
| Emergency / unplanned cloud adoption | As soon as practicable; retrospective notification within [X] days | Only applicable in declared business continuity events |

> **Note:** These timelines represent the minimum required periods. Project teams should plan for notification submissions **at least [X] weeks** before the minimum deadline to allow for internal review, approvals, and any BNM queries.

### 6.2 Internal Preparation Timeline

| Activity | Target Completion (Before Go-Live) |
|---|---|
| Cloud adoption intent identified and escalated | T minus [X] weeks |
| Materiality assessment completed | T minus [X] weeks |
| Technology Risk Assessment (TRA) completed | T minus [X] weeks |
| DPIA completed (if applicable) | T minus [X] weeks |
| Notification package drafted | T minus [X] weeks |
| Internal review and approval of notification package | T minus [X] weeks |
| **BNM notification submitted** | **T minus [X] calendar days (minimum)** |
| BNM acknowledgement received | T minus [X] days |
| BNM query response period (if queries raised) | T minus [X] days |
| Go-live / cloud service adoption | T |

### 6.3 Timeline for BNM Responses

| BNM Response Scenario | [Organization Name] Action | Timeline |
|---|---|---|
| BNM acknowledges notification, no objection | Proceed with cloud adoption as planned | Proceed after acknowledgement |
| BNM requests additional information | Compile and submit supplementary information | Within [X] business days of request |
| BNM raises concerns or requests changes | Engage BNM; revise adoption plan as required | [X] business days; escalate to CRO if unresolved |
| BNM objects to cloud adoption | Place adoption on hold; escalate to Board Risk Committee | Immediately |
| No response received within [X] days | Follow up with BNM Supervision contact | [X] business days after submission |

---

## 7. Cloud Service Model and Deployment Type Classification

*Classify the proposed cloud adoption by service model and deployment type. This classification informs the risk assessment, shared responsibility matrix, and regulatory treatment.*

### 7.1 Service Model Classification

| Service Model | Description | [Organization Name] Examples | Regulatory Considerations |
|---|---|---|---|
| **SaaS** (Software-as-a-Service) | CSP provides fully managed application; [Organization Name] configures and uses | [e.g., Microsoft 365, Salesforce, ServiceNow] | Data sovereignty; access controls; exit provisions |
| **PaaS** (Platform-as-a-Service) | CSP provides platform; [Organization Name] deploys applications | [e.g., Azure App Services, AWS Lambda] | Shared development responsibility; security configuration |
| **IaaS** (Infrastructure-as-a-Service) | CSP provides virtualized infrastructure; [Organization Name] manages OS and above | [e.g., AWS EC2, Azure VM, GCP Compute Engine] | Highest [Organization Name] responsibility; full security stack |

### 7.2 Deployment Model Classification

| Deployment Model | Description | Applicability |
|---|---|---|
| **Public Cloud** | Resources hosted on shared CSP infrastructure, accessible over public internet | Standard for non-COF workloads; COF requires enhanced controls |
| **Private Cloud** | Resources hosted on dedicated infrastructure, may be CSP-managed | Preferred for highly sensitive or regulated workloads |
| **Hybrid Cloud** | Combination of on-premises / private cloud and public cloud | Common for COF migration; requires clear data flow documentation |
| **Multi-Cloud** | Use of multiple CSPs for resilience or capability | Requires consolidated risk view; all CSPs must be notified |
| **Community Cloud** | Shared infrastructure for a specific industry or group | Rare; assess regulatory recognition of community standards |

### 7.3 Cloud Service Register Entry

*Every cloud adoption triggering a BNM notification must be recorded in [Organization Name]'s Cloud Service Register. The following fields are mandatory:*

| Field | Value |
|---|---|
| Cloud Service Name | [Service Name] |
| Cloud Service Provider | [CSP Name] |
| Service Model | [SaaS / PaaS / IaaS] |
| Deployment Model | [Public / Private / Hybrid / Multi / Community] |
| Business Function Supported | [Function Name] |
| COF/IOF Classification | [Yes / No] |
| Data Classification | [Public / Internal / Confidential / Restricted] |
| Data Residency — Primary | [Country / Region] |
| Data Residency — Secondary (DR) | [Country / Region] |
| BNM Notification Reference | [Notification ID] |
| Notification Submission Date | [Date] |
| BNM Acknowledgement Date | [Date] |
| Go-Live Date | [Date] |
| Next Review Date | [Date] |

---

## 8. Data Residency Requirements

*Define the requirements governing where data may be stored, processed, and transmitted in connection with cloud services, in alignment with BNM RMiT and Malaysian data protection obligations.*

### 8.1 Data Residency Policy

[Organization Name] shall comply with the following data residency requirements for all cloud-hosted data:

| Data Category | Residency Requirement | Justification |
|---|---|---|
| Customer PII (Malaysian residents) | Primary storage within Malaysia | PDPA 2010; BNM regulatory requirements |
| Financial transaction records | Primary storage within Malaysia | BNM record-keeping requirements |
| Supervisory / regulatory reporting data | Within Malaysia only | BNM supervisory access requirements |
| Internal operational data (non-PII) | Malaysia preferred; offshore permitted with approval | Risk-based; requires documented approval |
| Anonymized / aggregated analytics data | No restriction | Low regulatory sensitivity |
| Disaster Recovery / backup data | Malaysia preferred; offshore requires Risk Committee approval | Ensure BNM access in the event of examination |

### 8.2 Offshore Data Residency — Approval and Controls

*Where data must be stored or processed outside Malaysia, the following controls must be implemented and documented prior to BNM notification submission:*

- [ ] Data residency exception approved by [Approving Authority — e.g., Risk Committee / Board]
- [ ] Legal assessment of applicable laws in the destination jurisdiction completed
- [ ] Data transfer agreement or equivalent contractual safeguard in place with the CSP
- [ ] BNM notification explicitly discloses offshore residency and jurisdiction
- [ ] Encryption in transit and at rest with [Organization Name]-managed keys confirmed
- [ ] Right of audit and access for BNM confirmed in contractual terms with CSP
- [ ] Data sovereignty risk documented in the Technology Risk Assessment (TRA)

### 8.3 Data Flow Mapping

*A data flow diagram must be prepared and included in the BNM notification package for all cloud adoptions involving customer data or COF/IOF functions. The diagram must show:*

- Source systems and originating data types
- Data ingress and egress points to/from the CSP
- Storage locations (primary, backup, DR) with geographic identification
- Data transformation or processing locations
- Interfaces with third parties or sub-processors
- Encryption points and key management locations

> **Template:** Refer to Appendix A — Data Flow Diagram Template.

### 8.4 Data Residency Attestation

*The Cloud Architecture Lead and Data Protection Officer must jointly sign the Data Residency Attestation (Appendix B) before the BNM notification package is submitted.*

---

## 9. Step-by-Step Notification Process Flow

*This section provides the end-to-end process for preparing, approving, and submitting the BNM cloud adoption notification. Each step must be completed in sequence unless otherwise noted.*

### 9.1 Process Overview

```
[Step 1]          [Step 2]          [Step 3]          [Step 4]
Cloud Adoption --> Trigger &    --> Risk &        --> Notification
Intent           Materiality        Assessment         Package
Identified       Assessment         (TRA / DPIA)       Preparation
                                                          |
[Step 8]          [Step 7]          [Step 6]          [Step 5]
Post-Adoption <-- BNM Response <-- BNM            <-- Internal
Monitoring        Management        Submission         Approval
```

### 9.2 Step-by-Step Procedure

---

#### Step 1 — Cloud Adoption Intent Identification

**Trigger:** A business unit, technology team, or project identifies a requirement to adopt a cloud service.

**Actions:**
1. Project lead or business owner completes the **Cloud Adoption Intent Form** (Appendix C) and submits to the Cloud Architecture Lead.
2. Cloud Architecture Lead logs the intent in the **Cloud Service Register** with status: *Pending Assessment*.
3. Cloud Architecture Lead notifies Technology Risk Management of the intent within [X] business days.

**Outputs:**
- Completed Cloud Adoption Intent Form
- Cloud Service Register entry (Pending Assessment status)

**Responsible:** Project Lead / Business Owner
**Accountable:** Cloud Architecture Lead

---

#### Step 2 — Trigger and Materiality Assessment

**Actions:**
1. Cloud Architecture Lead reviews the intent against the Trigger Criteria in Section 5.1.
2. If a mandatory trigger (T-01 to T-10) applies, proceed to Step 3 immediately.
3. If no mandatory trigger clearly applies, complete the **Materiality Assessment** (Section 5.2) within [X] business days.
4. Document the materiality determination with supporting rationale.
5. If materiality assessment concludes notification is NOT required, obtain sign-off from Technology Risk Management and retain documentation for audit purposes. Close the Cloud Service Register entry with status: *Notification Not Required — Documented*.
6. If notification is required, update Cloud Service Register status: *Notification Required — In Progress* and proceed to Step 3.

**Outputs:**
- Completed Materiality Assessment form
- Documented determination (notification required / not required)
- Notification timeline established

**Responsible:** Cloud Architecture Lead
**Accountable:** Head of Technology Risk Management

---

#### Step 3 — Risk Assessment and Due Diligence

**Actions:**
1. Technology Risk Management initiates and leads the **Technology Risk Assessment (TRA)** for the proposed cloud adoption.
2. Information Security completes a **cloud security review** covering access controls, encryption, key management, vulnerability management, and incident response.
3. Data Protection Officer assesses whether a **Data Protection Impact Assessment (DPIA)** is required under PDPA 2010 and, if so, completes it.
4. Legal reviews the CSP's standard contractual terms against BNM and internal requirements; negotiate contractual amendments as required.
5. Vendor Management / Procurement completes a **Third-Party Risk Assessment (TPRA)** of the CSP.
6. Cloud Architecture Lead confirms data residency requirements and prepares the **Data Flow Diagram** (refer Section 8.3).
7. All assessments must be completed within [X] weeks of Step 2 completion.

**Outputs:**
- Completed Technology Risk Assessment
- Cloud Security Review Report
- Data Protection Impact Assessment (if applicable)
- Legal review summary and contractual amendments log
- Third-Party Risk Assessment
- Data Flow Diagram

**Responsible:** Technology Risk Management, Information Security, DPO, Legal, Cloud Architecture Lead
**Accountable:** Chief Risk Officer

---

#### Step 4 — Notification Package Preparation

**Actions:**
1. Cloud Architecture Lead compiles the **BNM Notification Package** (refer Section 12) incorporating all outputs from Step 3.
2. Complete the **Shared Responsibility Matrix** (Section 11) for the proposed cloud arrangement.
3. Confirm the notification timeline and verify that submission will be made within the minimum lead time (Section 6.1).
4. Compliance & Regulatory Affairs reviews the draft notification package for completeness against BNM RMiT Clause 16.4 requirements.
5. Address all review comments and finalize the notification package.

**Outputs:**
- Completed BNM Notification Package (draft)
- Completed Shared Responsibility Matrix
- Compliance review sign-off

**Responsible:** Cloud Architecture Lead, Compliance & Regulatory Affairs
**Accountable:** Cloud Architecture Lead

---

#### Step 5 — Internal Approval

**Actions:**
1. Cloud Architecture Lead submits the final notification package to the **Technology Risk Committee** (or delegated approver) for internal approval.
2. Technology Risk Committee reviews and approves or requests revisions.
3. Upon Technology Risk Committee approval, submit to **Senior Management** (e.g., CTO / CRO) for final sign-off.
4. Compliance & Regulatory Affairs prepares the formal **BNM covering letter** for Senior Management signature.
5. All approvals must be completed within [X] business days of package finalization.

**Outputs:**
- Technology Risk Committee approval (minutes or approval record)
- Senior Management sign-off
- Signed BNM covering letter

**Responsible:** Cloud Architecture Lead, Compliance & Regulatory Affairs
**Accountable:** CTO / CRO

---

#### Step 6 — BNM Notification Submission

**Actions:**
1. Compliance & Regulatory Affairs submits the BNM notification package via [BNM's designated submission channel — e.g., BNM BNMLINK / secure email / regulatory portal].
2. Record the submission date, reference number, and submission method in the Cloud Service Register.
3. Retain a complete copy of the submitted notification package in the **Compliance Document Repository** ([Repository Location]).
4. Notify the project team, Cloud Architecture Lead, and CRO that submission has been made.

**Outputs:**
- Submitted BNM notification package
- Submission record (date, reference, channel)
- Cloud Service Register updated to status: *Submitted to BNM*

**Responsible:** Compliance & Regulatory Affairs
**Accountable:** Head of Compliance

---

#### Step 7 — BNM Response Management

**Actions:**
1. Compliance & Regulatory Affairs monitors for BNM response or acknowledgement.
2. If BNM acknowledges with no objection: update Cloud Service Register to *BNM Notification Accepted*; communicate go-ahead to project team.
3. If BNM requests additional information: coordinate response with Cloud Architecture Lead, Technology Risk Management, and relevant subject matter experts; submit supplementary information within [X] business days.
4. If BNM raises concerns or objections: immediately escalate to CRO and CTO; engage BNM as directed by Senior Management; do not proceed with cloud adoption without resolution.
5. Maintain a log of all BNM correspondence related to the notification.

**Outputs:**
- BNM correspondence log
- Supplementary information submissions (if applicable)
- Resolution record
- Cloud Service Register status updated

**Responsible:** Compliance & Regulatory Affairs
**Accountable:** Head of Compliance, CRO

---

#### Step 8 — Post-Adoption Monitoring and Record Maintenance

**Actions:**
1. Cloud Architecture Lead confirms cloud service go-live date and updates the Cloud Service Register to *Active*.
2. Technology Risk Management incorporates the cloud service into the ongoing **Third-Party Risk Monitoring** programme.
3. Information Security onboards the cloud service into the **Security Monitoring** programme.
4. Cloud Architecture Lead schedules the periodic review of the cloud arrangement in accordance with [Organization Name]'s Cloud Governance Policy.
5. Compliance & Regulatory Affairs retains all notification records for a minimum of [X] years in accordance with BNM record-keeping requirements.

**Outputs:**
- Cloud Service Register updated to Active status
- Risk monitoring schedule updated
- Security monitoring confirmed
- Record retention confirmed

**Responsible:** Cloud Architecture Lead, Technology Risk Management, Information Security, Compliance & Regulatory Affairs
**Accountable:** Cloud Architecture Lead

---

## 10. Roles and Responsibilities (RACI)

*This RACI matrix defines the responsibilities of each role across all key activities in the cloud adoption notification procedure. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Cloud Architecture Lead | Technology Risk Mgmt | Information Security | Data Protection Officer | Legal | Compliance & Regulatory Affairs | Vendor Mgmt / Procurement | Senior Management (CTO/CRO) | Board Risk Committee | Project / Business Owner |
|---|---|---|---|---|---|---|---|---|---|---|
| Cloud adoption intent identification | C | I | I | I | I | I | I | I | I | **R/A** |
| Cloud Adoption Intent Form submission | C | I | I | I | I | I | I | I | I | **R** |
| Trigger and materiality assessment | **R/A** | C | C | C | C | I | I | I | I | I |
| Technology Risk Assessment | C | **R/A** | C | C | C | I | C | I | I | I |
| Cloud security review | C | C | **R/A** | I | I | I | I | I | I | I |
| Data Protection Impact Assessment | C | C | C | **R/A** | C | I | I | I | I | I |
| Legal / contractual review | I | C | C | C | **R/A** | C | I | I | I | I |
| Third-Party Risk Assessment | C | C | C | I | I | I | **R/A** | I | I | I |
| Data flow mapping | **R/A** | C | C | C | I | I | I | I | I | I |
| Data residency attestation | **R** | I | I | **R** | I | I | I | I | I | I |
| Notification package preparation | **R/A** | C | C | C | C | C | I | I | I | I |
| Shared responsibility matrix | **R/A** | C | C | I | I | I | I | I | I | I |
| Compliance review of notification | C | C | C | C | C | **R/A** | I | I | I | I |
| Technology Risk Committee approval | C | C | C | C | C | C | I | **A** | I | I |
| Senior Management sign-off | I | I | I | I | I | C | I | **R/A** | I | I |
| BNM notification submission | C | I | I | I | I | **R/A** | I | I | I | I |
| BNM response management | C | C | C | I | I | **R/A** | I | C | I | I |
| BNM query responses | C | C | C | C | C | **R** | I | **A** | I | I |
| Cloud Service Register maintenance | **R/A** | C | C | I | I | I | I | I | I | I |
| Post-adoption risk monitoring | C | **R/A** | C | I | I | I | C | I | I | I |
| Post-adoption security monitoring | I | C | **R/A** | I | I | I | I | I | I | I |
| Periodic review of cloud arrangement | **R/A** | C | C | C | I | C | I | I | I | I |
| Escalation of BNM objection | C | C | C | I | C | R | I | **A** | **I** | I |
| Board Risk Committee reporting | I | C | C | I | I | C | I | **R** | **A** | I |

---

## 11. Shared Responsibility Matrix

*The Shared Responsibility Matrix defines which party — [Organization Name] or the CSP — is responsible for each domain of security, risk, and compliance. This matrix must be customized for each cloud arrangement based on the service model and contractual terms.*

### 11.1 General Shared Responsibility Framework

The allocation of responsibilities between [Organization Name] and the CSP varies by service model:

| Responsibility Domain | IaaS | PaaS | SaaS |
|---|---|---|---|
| Physical security of data centres | CSP | CSP | CSP |
| Hypervisor / virtualization security | CSP | CSP | CSP |
| Network infrastructure security | CSP | CSP | CSP |
| Operating system patching and hardening | **[Org]** | CSP | CSP |
| Middleware / runtime security | **[Org]** | Shared | CSP |
| Application security | **[Org]** | **[Org]** | CSP |
| Application configuration and access controls | **[Org]** | **[Org]** | **[Org]** |
| Identity and Access Management (IAM) | **[Org]** | **[Org]** | **[Org]** |
| Data classification and labelling | **[Org]** | **[Org]** | **[Org]** |
| Data encryption (at rest) | Shared | Shared | Shared / **[Org]** |
| Encryption key management | **[Org]** | **[Org]** | Varies |
| Data backup and recovery | **[Org]** | Shared | Shared |
| Network controls and firewall rules | Shared | Shared | CSP |
| Vulnerability scanning and management | Shared | Shared | CSP |
| Security incident detection and response | Shared | Shared | Shared |
| Compliance and regulatory reporting | **[Org]** | **[Org]** | **[Org]** |
| Third-party audit access | **[Org]** arranges | **[Org]** arranges | **[Org]** arranges |
| Contractual and SLA management | **[Org]** | **[Org]** | **[Org]** |
| BNM notification obligation | **[Org]** | **[Org]** | **[Org]** |

> **Key:** **[Org]** = [Organization Name] responsibility | CSP = Cloud Service Provider responsibility | Shared = Joint responsibility

### 11.2 Arrangement-Specific Shared Responsibility Matrix

*The following table must be completed for each specific cloud adoption. Replace generic entries with the actual CSP name, service name, and agreed responsibilities as documented in the contract and service description.*

| Responsibility Domain | [Organization Name] Action / Control | [CSP Name] Action / Control | Contractual Reference | Verification Method |
|---|---|---|---|---|
| Physical data centre security | Monitor via CSP compliance reports (SOC 2, ISO 27001) | Maintain physical security controls | [Contract Clause] | Annual third-party audit report review |
| Data encryption at rest | Manage encryption keys via [KMS Tool] | Provide encryption capability | [Contract Clause] | Quarterly key management review |
| Identity and Access Management | Manage user access, MFA enforcement, privileged access review | Provide IAM platform capabilities | [Contract Clause] | Quarterly access review |
| Incident notification to [Organization Name] | Receive and act on notifications within [X] hours | Notify [Organization Name] of security incidents within [X] hours | [Contract Clause / SLA] | SLA compliance reporting |
| Data deletion upon contract termination | Issue deletion instruction; verify deletion | Execute secure deletion; provide certificate | [Contract Clause] | Deletion certificate review |
| Audit and examination access for BNM | Facilitate BNM access; coordinate with CSP | Provide audit access as contractually required | [Contract Clause] | On-demand; tested in DR exercise |
| Business continuity and DR | Maintain and test BCP; define RTO/RPO | Meet agreed availability SLAs | [SLA Section] | Semi-annual DR test |
| Vulnerability management | Remediate vulnerabilities in [Org]-managed components | Patch CSP-managed infrastructure per agreed schedule | [Contract Clause] | Quarterly security dashboard review |
| [Additional Row] | [Action] | [Action] | [Reference] | [Method] |

---

## 12. BNM Notification Package — Required Documentation

*This section lists the mandatory and supporting documents that must be included in the BNM notification submission. Completeness of the package is the responsibility of the Cloud Architecture Lead and Compliance & Regulatory Affairs.*

### 12.1 Mandatory Documents

| # | Document | Purpose | Prepared By |
|---|---|---|---|
| 1 | BNM Covering Letter | Formal notification letter signed by authorized signatory | Compliance & Regulatory Affairs |
| 2 | Cloud Adoption Notification Form | Structured summary of the proposed cloud arrangement | Cloud Architecture Lead |
| 3 | Technology Risk Assessment (TRA) | Assessment of technology risks arising from the adoption | Technology Risk Management |
| 4 | Cloud Service Provider Profile | Overview of CSP, including financial stability, certifications, regulatory standing | Vendor Management |
| 5 | Data Flow Diagram | Visual representation of data flows to/from the CSP | Cloud Architecture Lead |
| 6 | Data Residency Declaration | Formal declaration of data storage and processing locations | Cloud Architecture Lead + DPO |
| 7 | Shared Responsibility Matrix | Completed matrix per Section 11.2 | Cloud Architecture Lead |
| 8 | Summary of Contractual Terms | Key terms relevant to risk, security, BCP, audit, and exit | Legal |
| 9 | Exit / Transition Plan Summary | Overview of how [Organization Name] would exit the arrangement | Cloud Architecture Lead |

### 12.2 Supporting Documents (Include Where Applicable)

| # | Document | Applicability |
|---|---|---|
| 10 | Data Protection Impact Assessment (DPIA) | Where customer PII is involved |
| 11 | Business Impact Assessment | Where COF/IOF functions are affected |
| 12 | Third-Party Risk Assessment (TPRA) | All engagements; include for COF/IOF |
| 13 | CSP Certifications (SOC 2, ISO 27001, CSA STAR, etc.) | Provide copies or links to audit reports |
| 14 | Penetration Test Results | Where applicable; may be CSP-provided |
| 15 | Business Continuity and DR Plan Summary | For COF/IOF cloud adoptions |
| 16 | Board or Risk Committee Approval Minutes | For material / COF/IOF adoptions |
| 17 | Legal assessment — offshore jurisdiction | Where data is stored outside Malaysia |

### 12.3 BNM Covering Letter — Required Content

*The BNM covering letter must be on [Organization Name] letterhead and signed by the [Authorized Signatory — e.g., Chief Executive Officer / Chief Risk Officer] as specified in BNM's requirements.*

The covering letter must include:

- [ ] [Organization Name] legal name, licence type, and BNM institution code
- [ ] Date of submission
- [ ] Reference to RMiT Clause 16.4
- [ ] Name and description of the proposed cloud service
- [ ] Name of the cloud service provider
- [ ] Service model (SaaS / PaaS / IaaS) and deployment model
- [ ] COF/IOF classification
- [ ] Data residency summary
- [ ] Proposed go-live date
- [ ] Contact person for BNM queries (name, title, email, telephone)
- [ ] List of enclosures / attached documents
- [ ] Authorized signatory name, title, and signature

---

## 13. Post-Notification Activities

*Define the ongoing obligations and activities that [Organization Name] must maintain following a successful BNM notification and cloud service go-live.*

### 13.1 Ongoing Monitoring Obligations

| Activity | Frequency | Responsible | Output |
|---|---|---|---|
| Cloud Service Register review and update | Quarterly | Cloud Architecture Lead | Updated register |
| CSP performance and SLA review | Monthly / Quarterly | Vendor Management | SLA compliance report |
| Third-party risk reassessment | Annual | Technology Risk Management | Updated TPRA |
| Cloud security posture review | Quarterly | Information Security | Security posture report |
| Data residency verification | Semi-annual | Cloud Architecture Lead + DPO | Data residency attestation |
| Access rights and IAM review | Quarterly | Information Security | Access review report |
| Business continuity and DR test | Semi-annual | BCM Team | DR test report |
| Encryption key management review | Quarterly | Information Security | Key management review |
| Regulatory change monitoring (BNM RMiT) | Ongoing | Compliance & Regulatory Affairs | Regulatory change log |

### 13.2 Conditions Requiring a New or Updated BNM Notification

*[Organization Name] must submit a new or updated BNM notification (repeating this procedure from Step 2) if any of the following post-adoption changes occur:*

- CSP is acquired, merged, or undergoes significant change in ownership
- CSP announces or implements a change to data residency that affects [Organization Name]'s data
- [Organization Name] expands the scope of data or functions hosted with the CSP beyond what was notified
- A significant security incident at the CSP affects [Organization Name]'s data or services
- [Organization Name] intends to subcontract or delegate material responsibilities to a fourth party
- Contractual terms material to risk or regulatory compliance are renegotiated
- Any other event assessed as meeting the notification trigger criteria in Section 5

### 13.3 Notification Record Retention

All documents related to BNM cloud adoption notifications must be retained in accordance with the following:

| Document Type | Retention Period | Storage Location |
|---|---|---|
| BNM notification submission package | [X] years from end of arrangement | [Compliance Document Repository] |
| BNM correspondence (including queries and responses) | [X] years from end of arrangement | [Compliance Document Repository] |
| Risk assessments and supporting documents | [X] years from end of arrangement | [Compliance Document Repository] |
| Cloud Service Register | Maintained continuously; archived upon arrangement closure | [Cloud Governance System / SharePoint] |

---

## 14. Exceptions and Escalation

*Define the process for handling exceptions to this procedure and the escalation path when issues arise that cannot be resolved at the operational level.*

### 14.1 Exceptions to This Procedure

*Exceptions to this procedure (including timeline deviations, documentation waivers, or materiality threshold overrides) must be formally approved prior to the relevant action being taken.*

| Exception Type | Approval Required | Documentation Required |
|---|---|---|
| Timeline reduction (shorter than minimum lead time) | CRO + Head of Compliance | Written justification; risk acceptance; BNM consultation if possible |
| Documentation waiver (inability to provide a mandatory document) | CRO | Written justification; compensating control documented |
| Materiality threshold override | Technology Risk Committee | Formal resolution; documented rationale |
| Emergency cloud adoption without prior notification | Board Risk Committee | Retrospective notification to BNM within [X] days; post-incident review |

All approved exceptions must be:
1. Logged in the **Exception Register** maintained by Compliance & Regulatory Affairs
2. Reported to the Technology Risk Committee at its next scheduled meeting
3. Included in the relevant BNM notification with transparent disclosure

### 14.2 Escalation Path

| Issue | First Escalation | Second Escalation | Final Escalation |
|---|---|---|---|
| Process delay risking BNM timeline | Cloud Architecture Lead | CTO | CRO |
| Risk assessment identifies unacceptable risk | Technology Risk Management | CRO | Board Risk Committee |
| CSP refuses to accept required contractual terms | Legal + Vendor Management | CTO | CEO / Board |
| BNM raises objection to proposed cloud adoption | Compliance & Regulatory Affairs | CRO | CEO / Board |
| Data residency non-compliance identified | Cloud Architecture Lead + DPO | CRO | CEO + Board Risk Committee |
| Security incident at CSP during notification period | Information Security (CISO) | CRO | CEO + Board |

---

## 15. Review and Approval

### 15.1 Document Review Schedule

This procedure shall be reviewed:

- **Annually**, no later than [X] months before the Next Review Date recorded in the document header
- **Upon significant change**, including:
  - Material revision to BNM RMiT or related regulatory instruments
  - Significant change to [Organization Name]'s cloud adoption strategy or governance structure
  - Findings from internal audit, regulatory examination, or incident review that indicate procedural gaps
  - Direction from Senior Management or the Board Risk Committee

### 15.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], Cloud Architecture Lead | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 15.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Cloud Architecture Lead (Document Owner) | [Name] | __________________ | [Date] |
| Head of Technology Risk Management | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Data Protection Officer | [Name] | __________________ | [Date] |
| Head of Compliance & Regulatory Affairs | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| Chief Technology Officer | [Name] | __________________ | [Date] |
| Board Risk Committee Chairperson | [Name] | __________________ | [Date] |

---

## 16. References

*This section lists all regulatory instruments, internal policies, and standards referenced in or informing this procedure.*

### 16.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Section(s) |
|---|---|---|---|
| BNM/RH/PD 028-142 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Part G, Clause 16.4 (Cloud Services — Notification) |
| BNM/RH/GL 001-1 | Guidelines on Outsourcing | Bank Negara Malaysia | All (for COF/IOF cloud arrangements) |
| Act 709 | Personal Data Protection Act 2010 | Parliament of Malaysia | Sections 8, 9, 10, 129 |
| BNM/RH/PD [Ref] | Guidelines on Management of Cyber Risk | Bank Negara Malaysia | All |
| [Act Number] | Cybersecurity Act 2024 | Parliament of Malaysia | [Relevant sections] |
| ISO/IEC 27017:2015 | Code of Practice for Information Security Controls for Cloud Services | ISO/IEC | All |
| ISO/IEC 27018:2019 | Code of Practice for Protection of PII in Public Clouds | ISO/IEC | All |
| CSA Cloud Controls Matrix | Cloud Security Alliance CCM | CSA | All |

### 16.2 Internal Policy References

| Document Title | Document ID | Owner |
|---|---|---|
| Cloud Governance Policy | [Doc ID] | Cloud Architecture Lead |
| Technology Risk Management Policy | [Doc ID] | Chief Risk Officer |
| Third-Party and Outsourcing Management Policy | [Doc ID] | Head of Procurement |
| Information Security Policy | [Doc ID] | CISO |
| Data Classification and Handling Standard | [Doc ID] | DPO |
| Business Continuity Management Policy | [Doc ID] | Head of BCM |
| Records Management and Retention Policy | [Doc ID] | Head of Compliance |
| Incident Management Policy | [Doc ID] | CISO / Technology Risk |

---

## 17. Appendices

### Appendix A — Data Flow Diagram Template

*This appendix contains the standard template for preparing data flow diagrams required as part of the BNM notification package. Project teams must use this template and complete all sections for their specific cloud arrangement.*

**Instructions for use:**

1. Identify all source systems that will send or receive data to/from the cloud service.
2. Map all data flows, including ingress, egress, inter-service, and administrative flows.
3. Label each flow with: data type, classification level, protocol/channel, and encryption status.
4. Identify all geographic locations where data will be stored or processed.
5. Note all third-party sub-processors in the CSP's supply chain.

**Template Elements:**

| Element | Description | Notes |
|---|---|---|
| [Source System 1] | [System Name and Description] | On-premises / cloud |
| [Source System 2] | [System Name and Description] | On-premises / cloud |
| Data Flow 1 | [Source → Destination] | [Data type; Classification; Encrypted Y/N] |
| Data Flow 2 | [Source → Destination] | [Data type; Classification; Encrypted Y/N] |
| CSP Primary Region | [Region Name, Country] | Primary storage location |
| CSP DR Region | [Region Name, Country] | Backup / DR storage location |
| CSP Sub-Processor | [Name, Location] | If applicable |

> *Attach the completed data flow diagram as a separate file or diagram page within this appendix.*

---

### Appendix B — Data Residency Attestation

*To be completed and signed by the Cloud Architecture Lead and Data Protection Officer for every BNM notification submission.*

---

**DATA RESIDENCY ATTESTATION**

**[Organization Name]**

**Cloud Service:** [Service Name]
**Cloud Service Provider:** [CSP Name]
**Notification Reference:** [Notification ID]
**Date:** [Date]

We, the undersigned, hereby attest that:

1. The data residency arrangements described in the attached BNM Notification Package are accurate and complete as at the date of this attestation.
2. All customer personally identifiable information (PII) subject to this cloud arrangement will be stored and processed in the following location(s): **[Country / Region]**.
3. Any storage or processing of data outside Malaysia has been assessed, approved by **[Approving Authority]**, and disclosed in full in the notification package.
4. The data flow diagram attached to the notification package accurately represents all data flows, storage locations, and processing locations.
5. We will notify the Compliance & Regulatory Affairs team immediately upon becoming aware of any change to data residency that was not disclosed in this notification.

| Role | Name | Signature | Date |
|---|---|---|---|
| Cloud Architecture Lead | [Name] | __________________ | [Date] |
| Data Protection Officer | [Name] | __________________ | [Date] |

---

### Appendix C — Cloud Adoption Intent Form

*This form must be completed by the project lead or business owner and submitted to the Cloud Architecture Lead to initiate the cloud adoption notification process.*

---

**CLOUD ADOPTION INTENT FORM**

| Field | Response |
|---|---|
| **Project / Initiative Name** | [Project Name] |
| **Business Unit / Department** | [Business Unit] |
| **Project Lead / Business Owner** | [Name, Title] |
| **Contact Email / Telephone** | [Email / Telephone] |
| **Proposed Cloud Service Name** | [Service Name] |
| **Cloud Service Provider** | [CSP Name] |
| **Service Model** | ☐ SaaS ☐ PaaS ☐ IaaS |
| **Deployment Model** | ☐ Public ☐ Private ☐ Hybrid ☐ Multi-Cloud |
| **Business Function Supported** | [Description] |
| **Is this a Critical or Important Function?** | ☐ Yes ☐ No ☐ Under Assessment |
| **Data Types Involved** | ☐ Customer PII ☐ Financial Data ☐ Internal Data ☐ Other: [Specify] |
| **Proposed Data Residency (Primary)** | [Country / Region] |
| **Proposed Data Residency (DR/Backup)** | [Country / Region] |
| **Proposed Go-Live Date** | [Date] |
| **Estimated Annual Contract Value (MYR)** | [Amount] |
| **Estimated Number of Customers Affected** | [Number] |
| **Brief Description of Purpose and Scope** | [Description — max 200 words] |
| **Has BNM been notified of this or similar arrangement previously?** | ☐ Yes (Ref: [Previous Notification ID]) ☐ No |
| **Date of Submission to Cloud Architecture Lead** | [Date] |

---

### Appendix D — BNM Notification Checklist

*This checklist must be completed by Compliance & Regulatory Affairs before the notification package is submitted to BNM. All items must be checked before submission.*

| # | Checklist Item | Completed | Checked By | Date |
|---|---|---|---|---|
| 1 | Cloud Adoption Intent Form received and logged | ☐ | | |
| 2 | Trigger / materiality assessment documented | ☐ | | |
| 3 | Technology Risk Assessment completed and signed | ☐ | | |
| 4 | Cloud security review completed | ☐ | | |
| 5 | DPIA completed (if applicable) | ☐ | | |
| 6 | Legal review and contractual amendments documented | ☐ | | |
| 7 | Third-Party Risk Assessment completed | ☐ | | |
| 8 | Data flow diagram prepared and reviewed | ☐ | | |
| 9 | Data Residency Attestation (Appendix B) signed | ☐ | | |
| 10 | Shared Responsibility Matrix completed | ☐ | | |
| 11 | Exit / transition plan summary prepared | ☐ | | |
| 12 | BNM covering letter drafted and reviewed | ☐ | | |
| 13 | Technology Risk Committee approval obtained | ☐ | | |
| 14 | Senior Management sign-off obtained | ☐ | | |
| 15 | BNM covering letter signed by authorized signatory | ☐ | | |
| 16 | All documents collated and packaged for submission | ☐ | | |
| 17 | Submission timeline verified (minimum lead time met) | ☐ | | |
| 18 | Cloud Service Register updated to *Notification In Progress* | ☐ | | |
| 19 | Submission via BNM designated channel confirmed | ☐ | | |
| 20 | Submission record (date, reference, method) logged | ☐ | | |

**Checklist Completed By:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Compliance & Regulatory Affairs | [Name] | __________________ | [Date] |
| Cloud Architecture Lead | [Name] | __________________ | [Date] |

---

### Appendix E — Glossary of BNM RMiT Cloud Services Terminology

*This appendix provides a quick reference glossary aligned specifically to BNM RMiT terminology as it applies to cloud services, to support authors and reviewers in interpreting and applying this procedure.*

| Term | BNM RMiT Context | Reference |
|---|---|---|
| Cloud services | As defined in BNM RMiT; on-demand networked access to shared computing resources | RMiT Glossary |
| Critical or Important Functions | Functions whose disruption would materially impact the FI | RMiT, Outsourcing Guidelines |
| Material outsourcing | Outsourcing that meets BNM's materiality criteria | Outsourcing Guidelines |
| Technology risk | Risk arising from adoption, use, and management of technology | RMiT |
| Significant change | Change that materially alters the risk profile of a technology arrangement | RMiT Clause 16.4 |
| Third-party service provider | External party providing technology or related services | RMiT |
| [Additional Term] | [BNM Context] | [Reference] |

---

*End of Document*

---

**Document Control:** This document is subject to version control. The master copy is maintained in [Organization Name]'s Compliance Document Repository at [Repository Location]. Printed or locally saved copies are uncontrolled. Always refer to the master copy to ensure currency.