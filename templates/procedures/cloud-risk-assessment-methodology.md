# Cloud Risk Assessment Methodology

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 10.50 |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorized personnel involved in technology risk management and regulatory compliance activities. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Acronyms](#2-definitions-and-acronyms)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Cloud Risk Assessment Process Flow](#4-cloud-risk-assessment-process-flow)
5. [Cloud Service Model and Deployment Type Classification](#5-cloud-service-model-and-deployment-type-classification)
6. [Data Classification and Residency Requirements](#6-data-classification-and-residency-requirements)
7. [Shared Responsibility Matrix](#7-shared-responsibility-matrix)
8. [Risk Assessment Criteria and Scoring](#8-risk-assessment-criteria-and-scoring)
9. [Roles and Responsibilities (RACI)](#9-roles-and-responsibilities-raci)
10. [Risk Treatment and Escalation](#10-risk-treatment-and-escalation)
11. [Documentation and Record-Keeping](#11-documentation-and-record-keeping)
12. [Continuous Monitoring](#12-continuous-monitoring)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the **Cloud Risk Assessment Methodology** for [Organization Name], providing a structured, repeatable, and audit-ready process for identifying, evaluating, and treating risks associated with the adoption, migration to, and ongoing use of cloud services.

This methodology is mandatory for all cloud service engagements and ensures that [Organization Name] meets its obligations under **Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 10.50**, which requires financial institutions to conduct a comprehensive risk assessment prior to adopting cloud services and to maintain continuous risk oversight throughout the cloud service lifecycle.

### 1.2 Scope

*Define the boundaries of applicability for this methodology. Include which business units, systems, cloud services, and engagement types are in scope.*

This methodology applies to:

- All **cloud service adoption, migration, or expansion** activities initiated by any business unit or technology function within [Organization Name]
- All **cloud service models**, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)
- All **cloud deployment models**, including public cloud, private cloud, hybrid cloud, and multi-cloud environments
- All **cloud service providers (CSPs)** engaged directly by [Organization Name] or through a third-party intermediary
- All **data classifications**, including but not limited to customer data, financial data, and material non-public information
- All **geographic deployments**, whether hosted domestically within Malaysia or cross-border

This methodology applies to the following organizational units:

| Unit | Applicability |
|---|---|
| Technology Division | Mandatory |
| Information Security | Mandatory |
| Technology Risk | Mandatory |
| Business Units (cloud service requestors) | Mandatory |
| Procurement / Vendor Management | Mandatory |
| Legal and Compliance | Advisory |
| Internal Audit | Oversight |

### 1.3 Out of Scope

*List any areas explicitly excluded from this methodology to prevent ambiguity during audits.*

The following are outside the scope of this document:

- On-premises infrastructure risk assessments (refer to [Reference to On-Premises Risk Assessment Procedure])
- Third-party vendor risk assessments that do not involve cloud service delivery (refer to [Reference to Third-Party Risk Procedure])
- Software development security reviews not related to cloud-hosted workloads

---

## 2. Definitions and Acronyms

*Provide clear definitions for all technical and regulatory terms used in this document. Ensure alignment with BNM RMiT definitions where applicable.*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **Cloud Service** | On-demand delivery of computing resources, including servers, storage, databases, networking, software, and analytics, over the internet or a private network by a cloud service provider. |
| **Cloud Service Provider (CSP)** | An entity that offers cloud computing infrastructure, platforms, or applications to customers. |
| **Cloud Risk Assessment** | A formal process to identify, analyze, and evaluate risks associated with the adoption or use of cloud services, in accordance with BNM RMiT requirements. |
| **Data Residency** | The geographic location where data is stored, processed, or accessible at rest or in transit. |
| **Shared Responsibility Model** | A cloud security framework that delineates security and compliance obligations between the CSP and the cloud customer. |
| **Material Outsourcing** | As defined by BNM, an outsourcing arrangement where the failure or disruption of the outsourced function would significantly impact [Organization Name]'s operations or its ability to manage risk. |
| **Concentration Risk** | The risk arising from over-reliance on a single or limited number of cloud service providers, creating systemic vulnerabilities. |
| **Residual Risk** | The level of risk remaining after risk controls and mitigating measures have been applied. |
| **Risk Owner** | The individual accountable for managing an identified risk, ensuring treatment actions are implemented and monitored. |
| **Inherent Risk** | The level of risk in the absence of any controls or mitigating measures. |

### 2.2 Acronyms

| Acronym | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| CSP | Cloud Service Provider |
| IaaS | Infrastructure as a Service |
| PaaS | Platform as a Service |
| SaaS | Software as a Service |
| PDPA | Personal Data Protection Act 2010 |
| DPTM | Department of Personal Data Protection Malaysia |
| SLA | Service Level Agreement |
| BCP | Business Continuity Plan |
| DR | Disaster Recovery |
| RACI | Responsible, Accountable, Consulted, Informed |
| CISO | Chief Information Security Officer |
| CTO | Chief Technology Officer |
| TPRM | Third-Party Risk Management |
| NDA | Non-Disclosure Agreement |
| MRA | Matters Requiring Attention |
| ISMS | Information Security Management System |

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Requirements

*Summarize the relevant regulatory obligations that this methodology fulfills. Cross-reference specific BNM RMiT clauses, PDPA provisions, and any other applicable frameworks.*

[Organization Name] is subject to the following regulatory requirements that directly inform this methodology:

| Regulation / Standard | Relevant Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | Clause 10.50 | Conduct comprehensive risk assessment prior to cloud service adoption; ongoing risk oversight |
| BNM RMiT | Clause 10.51 | Assess CSP's financial viability, operational resilience, and security posture |
| BNM RMiT | Clause 10.52 | Ensure data residency and sovereignty requirements are met |
| BNM RMiT | Clause 10.53 | Evaluate concentration risk arising from reliance on cloud services |
| BNM RMiT | Clause 10.54 | Maintain audit rights and exit strategy for material cloud arrangements |
| BNM RMiT | Clause 10.55 | Notify BNM prior to cloud adoption for material outsourcing arrangements |
| PDPA 2010 | Section 129 | Cross-border data transfer restrictions; data subject protections |
| [Additional Framework] | [Clause] | [Requirement] |

### 3.2 Internal Policy Alignment

*List internal policies that this procedure supports or is subordinate to.*

This methodology is issued under and must be read in conjunction with:

- [Organization Name] Technology Risk Management Policy
- [Organization Name] Information Security Policy
- [Organization Name] Outsourcing and Third-Party Risk Management Policy
- [Organization Name] Data Classification and Handling Policy
- [Organization Name] Business Continuity and Disaster Recovery Policy
- [Organization Name] Cloud Computing Policy

### 3.3 Consequence of Non-Compliance

Failure to conduct a cloud risk assessment in accordance with this methodology, or to satisfy the requirements of BNM RMiT Clause 10.50, may result in:

- Regulatory enforcement action by BNM, including the issuance of Matters Requiring Attention (MRA)
- Financial penalties and reputational damage
- Mandatory suspension of cloud service adoption activities
- Escalation to the Board Risk Committee

---

## 4. Cloud Risk Assessment Process Flow

### 4.1 Overview

*Describe the end-to-end process for conducting a cloud risk assessment, from initial request through to approval and post-implementation review.*

The cloud risk assessment follows a structured, gate-controlled lifecycle comprising six stages. No stage may be bypassed without formal documented approval from the Head of Technology Risk.

```
[Stage 1: Initiation] → [Stage 2: Classification] → [Stage 3: Risk Identification]
        ↓
[Stage 6: Monitoring] ← [Stage 5: Approval and Onboarding] ← [Stage 4: Risk Evaluation and Treatment]
```

### 4.2 Stage 1 — Initiation and Request

*Describe how a cloud risk assessment is triggered, including who initiates it and what information must be provided.*

**Trigger events** for a cloud risk assessment include:

- New cloud service adoption request submitted by a business unit
- Significant change to an existing cloud service (scope, geography, data type)
- Renewal of a material cloud service contract
- Post-incident review identifying need for re-assessment
- Periodic scheduled review (minimum annually, or as directed by Technology Risk)

**Input required at initiation:**

| Input | Description | Provided By |
|---|---|---|
| Cloud Service Request Form | Formal request describing the proposed cloud service, business justification, and intended use | Requesting Business Unit |
| CSP Preliminary Information | CSP name, service description, proposed deployment region, service model (IaaS/PaaS/SaaS) | Requesting Business Unit |
| Data Classification Statement | Classification of data intended to be hosted or processed in the cloud | Data Owner / Business Unit |
| Budget Approval Reference | Reference to approved budget or procurement authority | Finance / Procurement |

**Responsibility:** The requesting business unit must submit a completed Cloud Service Request Form to the Technology Risk team before any procurement, contracting, or technical configuration activity commences.

### 4.3 Stage 2 — Classification and Materiality Determination

*Explain how the proposed cloud arrangement is classified for risk assessment purposes and whether it constitutes a material outsourcing under BNM RMiT.*

Technology Risk will classify the proposed cloud engagement according to the following dimensions:

**4.3.1 Materiality Assessment**

| Criterion | Assessment Questions |
|---|---|
| Criticality to operations | Would failure or disruption of this service materially impact customer service delivery or regulatory obligations? |
| Data sensitivity | Does the service involve customer data, financial records, or regulated data categories? |
| Substitutability | Can the service be replaced within a reasonable timeframe if the CSP exits or fails? |
| Financial exposure | What is the estimated annual contract value and total cost of ownership? |
| Concentration | Does this engagement increase [Organization Name]'s dependency on a single CSP beyond acceptable thresholds? |

**4.3.2 Materiality Outcome**

| Outcome | Definition | Implications |
|---|---|---|
| **Material Outsourcing** | Meets BNM RMiT criteria for material outsourcing | BNM notification required; enhanced due diligence; Board/Senior Management approval |
| **Non-Material Outsourcing** | Does not meet material threshold | Standard risk assessment applies; Management-level approval |
| **Internal Cloud Use** | Cloud infrastructure operated internally or by group entity | Abbreviated assessment; Group policy alignment required |

### 4.4 Stage 3 — Risk Identification

*Describe the process for identifying cloud-specific risks across all relevant risk domains.*

Risk identification shall be conducted using structured workshops, document reviews, and interviews with relevant stakeholders. The following risk domains must be assessed for every cloud engagement:

| Risk Domain | Key Risk Considerations |
|---|---|
| **Cybersecurity and Data Protection** | Data breaches, unauthorized access, insecure APIs, identity and access management weaknesses |
| **Data Residency and Sovereignty** | Cross-border data transfer, foreign jurisdiction legal access, data localization non-compliance |
| **Operational Resilience** | Service availability, CSP outages, disaster recovery capability, SLA adequacy |
| **Vendor and Concentration Risk** | CSP financial stability, market concentration, lock-in, dependency on single provider |
| **Compliance and Regulatory** | Alignment with BNM RMiT, PDPA 2010, audit rights, regulatory notification obligations |
| **Exit and Portability** | Data portability, exit planning, transition timelines, re-patriation of data |
| **Legal and Contractual** | Contract terms, liability, indemnity, governing law, enforcement across jurisdictions |
| **Shared Responsibility Gaps** | Misalignment between CSP and [Organization Name] on security control responsibilities |
| **Change Management** | Unauthorized changes by CSP, lack of change notification, version management |
| **Insider Threat** | CSP personnel access to [Organization Name] data and systems |

**Risk Register Entry:** Each identified risk must be recorded in the Cloud Risk Register using the standard risk entry template (refer to Appendix A).

### 4.5 Stage 4 — Risk Evaluation and Treatment

*Define how identified risks are evaluated (likelihood × impact) and how treatment options are selected.*

Refer to **Section 8** of this document for the full risk scoring methodology and treatment decision framework.

### 4.6 Stage 5 — Approval and Onboarding

*Describe the approval gates that must be cleared before a cloud service may be onboarded.*

Cloud service onboarding is subject to the following approval requirements based on risk rating:

| Risk Rating | Required Approver | Notification |
|---|---|---|
| Critical | Board Risk Committee | BNM notification (if material) |
| High | Chief Risk Officer + CTO | Senior Management briefing |
| Medium | Head of Technology Risk + CISO | Technology Risk Committee |
| Low | Head of Technology Risk | Technology Risk team |

**Onboarding Gate Checklist:**

- [ ] Cloud Risk Assessment report completed and signed off
- [ ] CSP due diligence completed (refer to Appendix B)
- [ ] Shared Responsibility Matrix agreed and signed
- [ ] Data Residency confirmation obtained from CSP (written)
- [ ] Contractual protections verified (audit rights, exit, data return)
- [ ] BNM notification submitted (if material outsourcing)
- [ ] Business Continuity and DR plans updated
- [ ] Security baseline configuration documented
- [ ] Staff training and awareness completed

### 4.7 Stage 6 — Continuous Monitoring and Periodic Review

Refer to **Section 12** of this document for the continuous monitoring framework.

---

## 5. Cloud Service Model and Deployment Type Classification

### 5.1 Cloud Service Models

*Classify the cloud service being assessed and document the security and risk implications of the selected service model.*

The following service model classification must be recorded for every cloud risk assessment:

| Service Model | Description | Examples | Risk Implication |
|---|---|---|---|
| **IaaS** (Infrastructure as a Service) | CSP provides virtualized computing resources; [Organization Name] manages OS, middleware, and applications | AWS EC2, Azure VMs, GCP Compute Engine | Highest configuration and security responsibility for [Organization Name] |
| **PaaS** (Platform as a Service) | CSP provides managed platform; [Organization Name] manages applications and data | Azure App Service, AWS Elastic Beanstalk, Google App Engine | Shared configuration responsibility; limited OS-level visibility |
| **SaaS** (Software as a Service) | CSP provides fully managed application; [Organization Name] manages data and access controls | Microsoft 365, Salesforce, ServiceNow | Lowest control; highest dependency on CSP security posture |
| **FaaS / Serverless** | Event-driven compute managed entirely by CSP | AWS Lambda, Azure Functions | Minimal infrastructure visibility; focus on code-level security |

**Selected Service Model for this Assessment:** [IaaS / PaaS / SaaS / FaaS — select applicable]

### 5.2 Cloud Deployment Models

*Document the deployment type and associated governance implications.*

| Deployment Model | Description | BNM RMiT Consideration |
|---|---|---|
| **Public Cloud** | Resources shared across multiple tenants; managed entirely by CSP | Full CSP dependency; data residency controls critical |
| **Private Cloud** | Dedicated cloud infrastructure for a single organization | Greater control; may be hosted on-premises or by CSP |
| **Hybrid Cloud** | Combination of public and private cloud with orchestration between environments | Complexity of security boundary management; data flow controls essential |
| **Community Cloud** | Shared infrastructure among organizations with common interests (e.g., financial sector cloud) | Assess shared governance model; confirm regulatory acceptance |
| **Multi-Cloud** | Use of two or more cloud providers | Concentration risk mitigation; increased management complexity |

**Selected Deployment Model for this Assessment:** [Public / Private / Hybrid / Community / Multi-Cloud — select applicable]

### 5.3 CSP Profile Assessment

*Capture key details about the cloud service provider to inform the risk assessment.*

| Field | Details |
|---|---|
| CSP Name | [CSP Name] |
| Registered Entity (contracting party) | [Legal Entity Name] |
| Headquarters Jurisdiction | [Country] |
| Data Centre Locations | [List all locations where [Organization Name] data may reside or be processed] |
| Malaysian Data Centre Presence | [Yes / No — specify location if applicable] |
| Regulatory Certifications | [e.g., ISO 27001, SOC 2 Type II, CSA STAR, PCI DSS] |
| Financial Sector Clients (Malaysia) | [Yes / No — list if applicable] |
| BNM-Recognized CSP Status | [Yes / No / Pending] |
| Sub-processors / Sub-contractors | [List known sub-processors with data access] |

---

## 6. Data Classification and Residency Requirements

### 6.1 Data Classification

*Identify and classify all categories of data that will be hosted, processed, or transmitted through the cloud service.*

All data processed by the proposed cloud service must be classified in accordance with [Organization Name]'s Data Classification Policy. The following classification levels apply:

| Classification Level | Definition | Cloud Hosting Restrictions |
|---|---|---|
| **Public** | Information approved for unrestricted public disclosure | No restrictions |
| **Internal** | Non-sensitive information for internal use only | Standard cloud controls required |
| **Confidential** | Sensitive business, operational, or personal data | Enhanced controls; data residency review mandatory |
| **Restricted** | Highly sensitive data including customer PII, financial records, regulated data | Highest controls; explicit CISO and Legal approval required; BNM notification may apply |

**Data Categories In Scope for this Assessment:**

| Data Category | Classification Level | Volume (Estimated) | Data Owner | Regulatory Obligation |
|---|---|---|---|---|
| Customer Personal Data | Restricted | [Volume] | [Data Owner Name] | PDPA 2010; BNM RMiT |
| Financial Transaction Records | Restricted | [Volume] | [Data Owner Name] | BNM RMiT; Financial Services Act |
| Employee Records | Confidential | [Volume] | [Data Owner Name] | PDPA 2010 |
| Operational Logs | Internal | [Volume] | [Data Owner Name] | BNM RMiT (audit trails) |
| [Additional Data Category] | [Level] | [Volume] | [Owner] | [Obligation] |

### 6.2 Data Residency Requirements

*Document [Organization Name]'s data residency requirements and confirm compliance with BNM RMiT Clause 10.52 and PDPA cross-border transfer restrictions.*

**Mandatory Residency Requirements:**

- **Customer data and financial records** designated as Restricted must reside on infrastructure located **within Malaysia** unless an explicit exemption has been granted in writing by the Head of Technology Risk and, where applicable, BNM.
- **Cross-border data transfers** involving Restricted or Confidential data require a documented legal basis under PDPA 2010, Section 129, including confirmation of adequate data protection standards in the receiving jurisdiction.
- **Data-at-rest encryption** is mandatory for all data classifications above Internal.
- **Data-in-transit encryption** using TLS 1.2 or higher is mandatory for all data classifications.

**Data Residency Confirmation Matrix:**

| Data Category | Required Residency | Proposed CSP Region | Compliant? | Evidence Reference |
|---|---|---|---|---|
| Customer Personal Data | Malaysia | [CSP Region] | [Yes / No / Conditional] | [Document Reference] |
| Financial Transaction Records | Malaysia | [CSP Region] | [Yes / No / Conditional] | [Document Reference] |
| Operational Logs | Malaysia preferred | [CSP Region] | [Yes / No / Conditional] | [Document Reference] |
| [Data Category] | [Requirement] | [CSP Region] | [Yes / No / Conditional] | [Document Reference] |

### 6.3 Cross-Border Transfer Assessment

*If any data will be transferred or accessible from outside Malaysia, document the legal basis and controls.*

| Transfer Destination | Data Categories Involved | Legal Basis | Safeguards in Place | Approval Obtained |
|---|---|---|---|---|
| [Country / Region] | [Data Categories] | [e.g., Contractual Clauses, Adequacy Decision] | [e.g., Encryption, Pseudonymization, Access Controls] | [Yes / No / Pending] |

**Cross-border transfer approval is required from:** [CISO / Head of Technology Risk / Legal Counsel — as applicable]

---

## 7. Shared Responsibility Matrix

### 7.1 Overview

*The shared responsibility model defines which security and operational controls are managed by the CSP and which remain the responsibility of [Organization Name]. This section must be completed for every cloud risk assessment and agreed in writing with the CSP.*

The shared responsibility model varies by service model (IaaS, PaaS, SaaS). The matrix below must be reviewed and completed based on the specific service model selected in Section 5.1. Gaps where neither party has assumed clear responsibility must be escalated and resolved before onboarding approval.

**Responsibility Key:**

| Symbol | Meaning |
|---|---|
| **CSP** | Cloud Service Provider is responsible |
| **ORG** | [Organization Name] is responsible |
| **SHARED** | Responsibility is shared; specific obligations defined below |
| **N/A** | Not applicable to this service model |

### 7.2 Shared Responsibility Matrix — IaaS

| Control Domain | Control Activity | IaaS Responsibility | Evidence / Validation Required |
|---|---|---|---|
| Physical Security | Data centre physical access controls | CSP | CSP SOC 2 / ISO 27001 report |
| Physical Security | Hardware lifecycle and disposal | CSP | CSP certification of data destruction |
| Network Security | Perimeter network controls (CSP layer) | CSP | CSP security whitepaper |
| Network Security | Virtual network configuration (VPC/VNET) | ORG | [Organization Name] network architecture review |
| Network Security | Firewall rule management | ORG | Change management records |
| Identity and Access | Privileged access management (OS level) | ORG | PAM tool configuration review |
| Identity and Access | CSP management console IAM | SHARED | IAM policy review; MFA enforcement |
| Data Security | Encryption at rest (OS/application layer) | ORG | Encryption configuration documentation |
| Data Security | Encryption in transit | SHARED | TLS configuration verification |
| Data Security | Key management | ORG | KMS configuration; key rotation policy |
| Vulnerability Management | Hypervisor patching | CSP | CSP SLA commitment |
| Vulnerability Management | OS patching and hardening | ORG | Patch management records |
| Vulnerability Management | Application vulnerability management | ORG | VAPT reports |
| Incident Response | CSP infrastructure incident response | CSP | CSP incident notification SLA |
| Incident Response | Application and data incident response | ORG | [Organization Name] IRP documentation |
| Logging and Monitoring | Infrastructure-level logging | SHARED | Log retention and access confirmation |
| Logging and Monitoring | Application and user activity logging | ORG | SIEM configuration review |
| Business Continuity | Data centre resilience and failover | CSP | CSP BCP documentation |
| Business Continuity | Application-level BCP and DR | ORG | DR plan documentation |
| Compliance | CSP regulatory certification maintenance | CSP | Annual certification renewal evidence |
| Compliance | [Organization Name] regulatory compliance | ORG | Internal compliance review |

### 7.3 Shared Responsibility Matrix — SaaS

| Control Domain | Control Activity | SaaS Responsibility | Evidence / Validation Required |
|---|---|---|---|
| Physical Security | All physical infrastructure | CSP | CSP SOC 2 / ISO 27001 report |
| Network Security | All network infrastructure | CSP | CSP security whitepaper |
| Identity and Access | Application user account management | ORG | Access review records; MFA enforcement |
| Identity and Access | Administrative access to CSP portal | SHARED | Role segregation; privileged access policy |
| Data Security | Data encryption at rest | CSP | CSP encryption documentation |
| Data Security | Data isolation (multi-tenancy) | CSP | CSP tenancy isolation documentation |
| Data Security | Data export and portability | SHARED | Data portability SLA confirmation |
| Data Security | Data classification enforcement | ORG | DLP configuration review |
| Vulnerability Management | Platform and application patching | CSP | CSP patching SLA |
| Incident Response | Platform-level incidents | CSP | CSP incident notification procedures |
| Incident Response | Data breach response | SHARED | Joint incident response plan |
| Logging and Monitoring | Platform audit logging | CSP | Log availability and access confirmation |
| Logging and Monitoring | User activity monitoring | SHARED | Log integration with [Organization Name] SIEM |
| Business Continuity | Platform availability and DR | CSP | SLA uptime guarantees; DR documentation |
| Business Continuity | Data backup and recovery | SHARED | Backup SLA; recovery testing confirmation |
| Compliance | Data residency enforcement | SHARED | Data residency contractual commitment |

### 7.4 Identified Responsibility Gaps

*Document any areas where responsibility is unclear or where neither party has formally assumed accountability.*

| Gap Reference | Control Domain | Description of Gap | Risk Implication | Proposed Resolution | Assigned To | Target Date |
|---|---|---|---|---|---|---|
| GAP-001 | [Control Domain] | [Description] | [Risk Level] | [Resolution Action] | [Owner] | [Date] |
| GAP-002 | [Control Domain] | [Description] | [Risk Level] | [Resolution Action] | [Owner] | [Date] |

---

## 8. Risk Assessment Criteria and Scoring

### 8.1 Risk Rating Methodology

*Define the quantitative and qualitative criteria used to evaluate cloud risks. Align with [Organization Name]'s enterprise risk management framework.*

Cloud risks are evaluated using a two-dimensional matrix: **Likelihood** (probability of occurrence) and **Impact** (consequence severity). The resulting risk rating determines the required treatment and approval level.

### 8.2 Likelihood Scale

| Rating | Score | Definition | Indicative Frequency |
|---|---|---|---|
| Rare | 1 | The event is unlikely to occur under normal circumstances | Less than once in 10 years |
| Unlikely | 2 | The event could occur in exceptional circumstances | Once in 5–10 years |
| Possible | 3 | The event might occur at some point | Once in 2–5 years |
| Likely | 4 | The event will probably occur in most circumstances | Once in 1–2 years |
| Almost Certain | 5 | The event is expected to occur frequently | More than once per year |

### 8.3 Impact Scale

| Rating | Score | Financial Impact | Operational Impact | Regulatory Impact | Reputational Impact |
|---|---|---|---|---|---|
| Negligible | 1 | < MYR [Threshold] | Minimal disruption; recoverable within hours | No regulatory breach | Minimal/no media coverage |
| Minor | 2 | MYR [Threshold] – [Threshold] | Limited disruption; recoverable within 1 day | Minor non-compliance; internal finding | Limited negative coverage |
| Moderate | 3 | MYR [Threshold] – [Threshold] | Significant disruption; recoverable within 1 week | Regulatory notification required | Moderate media coverage |
| Major | 4 | MYR [Threshold] – [Threshold] | Serious disruption; recoverable within 1 month | Regulatory enforcement action probable | Significant media coverage |
| Catastrophic | 5 | > MYR [Threshold] | Inability to operate; recovery > 1 month | Regulatory sanction; license risk | Severe reputational damage |

### 8.4 Risk Rating Matrix

*The risk score is calculated as: **Risk Score = Likelihood × Impact***

|  | **Negligible (1)** | **Minor (2)** | **Moderate (3)** | **Major (4)** | **Catastrophic (5)** |
|---|---|---|---|---|---|
| **Almost Certain (5)** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Likely (4)** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Possible (3)** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Unlikely (2)** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Rare (1)** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

**Risk Rating Thresholds:**

| Rating | Score Range | Action Required | Approval Level |
|---|---|---|---|
| **Critical** | 20–25 | Immediate escalation; cloud adoption suspended pending Board approval | Board Risk Committee |
| **High** | 10–19 | Risk treatment plan mandatory; Management approval required | CRO + CTO |
| **Medium** | 5–9 | Risk treatment plan required; monitored quarterly | Head of Technology Risk |
| **Low** | 1–4 | Risk accepted with standard controls; monitored annually | Technology Risk team |

### 8.5 Cloud Risk Register

*All identified risks must be recorded in the Cloud Risk Register. A new entry is required for each discrete risk.*

| Risk ID | Risk Description | Risk Domain | Inherent Likelihood | Inherent Impact | Inherent Risk Rating | Existing Controls | Residual Likelihood | Residual Impact | Residual Risk Rating | Treatment Option | Risk Owner | Target Completion | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CR-001 | [Risk Description] | [Domain] | [1-5] | [1-5] | [Rating] | [Controls] | [1-5] | [1-5] | [Rating] | [Accept/Treat/Transfer/Avoid] | [Owner] | [Date] | [Open/Closed] |
| CR-002 | [Risk Description] | [Domain] | [1-5] | [1-5] | [Rating] | [Controls] | [1-5] | [1-5] | [Rating] | [Accept/Treat/Transfer/Avoid] | [Owner] | [Date] | [Open/Closed] |

### 8.6 Risk Treatment Options

| Option | Description | When to Apply |
|---|---|---|
| **Treat (Mitigate)** | Implement controls to reduce likelihood or impact | Preferred for High and Medium risks where controls are practical |
| **Transfer** | Transfer risk through insurance, contractual liability, or third-party guarantees | Applicable where residual financial impact can be shifted |
| **Avoid** | Discontinue or redesign the cloud engagement to eliminate the risk | Applied where risk cannot be reduced to acceptable level |
| **Accept** | Formally accept the residual risk with documented justification | Only for Low risks; requires formal sign-off by Risk Owner |

---

## 9. Roles and Responsibilities (RACI)

*Define all parties involved in the cloud risk assessment process and their respective roles using the RACI framework.*

**RACI Key:**
- **R** — Responsible: Performs the work
- **A** — Accountable: Ultimately answerable for the outcome (one per activity)
- **C** — Consulted: Provides input; two-way communication
- **I** — Informed: Receives updates; one-way communication

### 9.1 RACI Matrix — Cloud Risk Assessment Activities

| Activity | Requesting Business Unit | Head of Technology Risk | Technology Risk Analyst | CISO / Information Security | CTO | CRO | Legal & Compliance | Procurement | Internal Audit | Board Risk Committee |
|---|---|---|---|---|---|---|---|---|---|---|
| Submit Cloud Service Request Form | R | I | I | I | I | — | — | C | — | — |
| Initiate Cloud Risk Assessment | C | A | R | C | I | I | C | C | — | — |
| Materiality Determination | C | A | R | C | C | C | C | — | — | — |
| CSP Due Diligence | I | A | R | C | C | — | C | R | — | — |
| Data Classification Review | R | A | C | C | — | — | C | — | — | — |
| Data Residency Assessment | C | A | R | C | — | — | C | — | — | — |
| Risk Identification Workshop | R | A | R | R | C | C | C | — | — | — |
| Risk Scoring and Evaluation | — | A | R | C | C | C | — | — | — | — |
| Shared Responsibility Matrix Review | C | A | R | R | C | — | C | — | — | — |
| Risk Treatment Plan Development | C | A | R | C | C | C | C | — | — | — |
| Approval — Low / Medium Risk | — | A | — | C | I | I | — | — | — | — |
| Approval — High Risk | — | C | — | C | A | R | C | — | I | — |
| Approval — Critical Risk | — | C | — | C | C | C | C | — | I | A |
| BNM Notification (if material) | — | C | R | C | C | C | A | — | — | — |
| Contractual Review and Negotiation | I | C | — | C | C | — | A | R | — | — |
| Onboarding Approval Sign-off | I | C | — | C | A | C | C | C | — | — |
| Post-Implementation Review | C | A | R | C | C | I | — | — | C | — |
| Continuous Risk Monitoring | I | A | R | C | I | I | — | — | C | — |
| Quarterly Risk Review | C | A | R | C | C | C | — | — | C | I |
| Annual Reassessment | C | A | R | C | C | C | C | C | C | I |
| Incident Escalation | R | A | R | C | C | C | C | — | — | I |

### 9.2 Key Role Descriptions

| Role | Cloud Risk Assessment Responsibilities |
|---|---|
| **Head of Technology Risk** | Overall accountability for cloud risk assessment quality and completeness; approves assessments and risk acceptance; escalates to CRO/Board as required |
| **Technology Risk Analyst** | Conducts assessment activities; maintains Cloud Risk Register; prepares assessment reports; coordinates stakeholder inputs |
| **CISO / Information Security** | Provides security domain expertise; reviews and approves shared responsibility matrix; validates security controls |
| **Requesting Business Unit** | Provides service requirements; data classification input; participates in risk identification workshops |
| **CTO** | Technical oversight and approval for cloud architecture; approves onboarding for high-risk engagements |
| **CRO** | Approves acceptance of high-risk cloud engagements; escalates critical risks to Board |
| **Legal & Compliance** | Reviews contractual terms; advises on regulatory notification obligations; PDPA cross-border transfer compliance |
| **Procurement** | Manages CSP commercial engagement; ensures contractual protections are in place |
| **Internal Audit** | Independent oversight of methodology adherence; validates risk assessment completeness |
| **Board Risk Committee** | Final approval authority for critical-rated cloud risks; reviews material outsourcing arrangements |

---

## 10. Risk Treatment and Escalation

### 10.1 Risk Treatment Plan

*For each risk rated Medium or above, a formal Risk Treatment Plan must be documented and tracked.*

| Field | Details |
|---|---|
| Risk ID | [CR-XXX] |
| Risk Description | [Description from Risk Register] |
| Residual Risk Rating | [Critical / High / Medium] |
| Treatment Option Selected | [Treat / Transfer / Avoid / Accept] |
| Control Actions Required | [List specific control implementation actions] |
| Implementation Owner | [Name / Role] |
| Target Completion Date | [Date] |
| Verification Method | [How completion will be confirmed] |
| Reviewed By | [Head of Technology Risk] |
| Review Date | [Date] |

### 10.2 Escalation Thresholds and Procedures

*Define when and how cloud risks must be escalated beyond the Technology Risk team.*

| Scenario | Escalation Path | Timeframe |
|---|---|---|
| New Critical risk identified | Head of Technology Risk → CRO → Board Risk Committee | Within 24 hours of identification |
| High risk with no viable treatment | Head of Technology Risk → CTO + CRO | Within 5 business days |
| CSP security incident affecting [Organization Name] data | CISO → Head of Technology Risk → CRO | Immediately upon notification |
| CSP unable to meet data residency requirements | Head of Technology Risk → Legal → CRO | Within 3 business days |
| Material outsourcing — BNM notification deadline approaching | Legal & Compliance → CRO → Board | 30 days before service commencement |
| Risk treatment actions overdue by > 30 days | Technology Risk Analyst → Head of Technology Risk → CRO | Monthly risk reporting cycle |

### 10.3 Risk Acceptance

Formal risk acceptance is required for any residual risk rated **Medium or above** that cannot be further mitigated. Risk acceptance must be documented using the Cloud Risk Acceptance Form (Appendix C) and approved by the appropriate authority in accordance with Section 8.4.

---

## 11. Documentation and Record-Keeping

### 11.1 Required Documentation

*List all documents that must be produced and retained as evidence of compliance with this methodology and BNM RMiT Clause 10.50.*

| Document | Description | Retention Period | Repository |
|---|---|---|---|
| Cloud Service Request Form | Initial request and business justification | 7 years from service termination | [Document Repository] |
| Cloud Risk Assessment Report | Complete risk assessment findings | 7 years from service termination | [Document Repository] |
| CSP Due Diligence Report | Findings from CSP evaluation | 7 years from service termination | [Document Repository] |
| Data Residency Confirmation | Written confirmation from CSP | 7 years from service termination | [Document Repository] |
| Shared Responsibility Matrix | Agreed responsibility allocation | 7 years from service termination | [Document Repository] |
| Cloud Risk Register | Ongoing risk tracking | Maintained continuously; 7-year archive | [Document Repository] |
| Risk Treatment Plans | Treatment actions and status | 7 years from risk closure | [Document Repository] |
| Risk Acceptance Forms | Formal risk acceptance sign-offs | 7 years from acceptance date | [Document Repository] |
| BNM Notification Records | Notification submissions and acknowledgements | 7 years | [Document Repository] |
| Approval Records | All approval sign-offs | 7 years from service termination | [Document Repository] |
| Monitoring Reports | Quarterly and annual review outputs | 7 years | [Document Repository] |
| Incident Records | Cloud security incidents and response | 7 years from incident closure | [Document Repository] |

### 11.2 Document Classification

All cloud risk assessment documentation must be classified as **Confidential** at minimum. Documents containing customer data references or regulatory correspondence must be classified as **Restricted**.

---

## 12. Continuous Monitoring

### 12.1 Monitoring Framework

*Describe the ongoing monitoring activities required after a cloud service has been onboarded, in accordance with BNM RMiT requirements for continuous risk oversight.*

Cloud risk monitoring operates at three cadences:

| Monitoring Level | Cadence | Activities | Responsible Party |
|---|---|---|---|
| **Operational Monitoring** | Continuous / Real-time | Security alerts, performance metrics, access anomalies, CSP incident notifications | Information Security / Technology Operations |
| **Risk Review** | Quarterly | Cloud Risk Register review; control effectiveness assessment; KRI reporting; CSP certification currency check | Technology Risk Analyst |
| **Formal Reassessment** | Annual (minimum) | Full risk reassessment; CSP due diligence refresh; contract review; SLA performance review | Head of Technology Risk |

### 12.2 Key Risk Indicators (KRIs)

*Define the KRIs to be tracked for each cloud service engagement.*

| KRI | Definition | Threshold | Escalation Trigger |
|---|---|---|---|
| CSP Service Availability | Measured uptime against contracted SLA | < [X]% in any calendar month | Below SLA threshold |
| Security Incident Rate | Number of confirmed security incidents involving cloud-hosted data | > 0 per quarter | Any confirmed incident |
| Unpatched Vulnerabilities (Critical/High) | Number of critical or high-severity vulnerabilities unpatched beyond agreed timelines | > 0 beyond [X] days | Exceedance of patch timeline |
| Data Residency Compliance | Confirmation that data remains within agreed geographic boundaries | Any deviation | Any confirmed deviation |
| CSP Certification Currency | CSP maintains required certifications (ISO 27001, SOC 2) | Certification lapse | Certification expiry without renewal |
| Unauthorised Access Attempts | Number of detected unauthorised access attempts | > [Threshold] per month | Exceedance of threshold |
| Concentration Exposure | Percentage of critical workloads hosted by a single CSP | > [X]% | Exceedance of concentration limit |

### 12.3 Trigger Events for Unscheduled Reassessment

*The following events require an unscheduled cloud risk reassessment, regardless of the standard review cadence.*

- Material change to the cloud service scope, data types, or processing locations
- CSP security incident that affects or could affect [Organization Name] data
- CSP changes sub-processors or data centre locations without prior notification
- Loss or downgrade of CSP regulatory certification
- Material change in CSP ownership, financial condition, or regulatory status
- New regulatory guidance from BNM affecting cloud risk requirements
- Identification of a previously unknown control gap or vulnerability
- Post-incident review recommending reassessment

### 12.4 Quarterly Review Output

The Technology Risk team must produce a **Quarterly Cloud Risk Summary** for each active cloud engagement, covering:

- [ ] KRI status against thresholds
- [ ] Risk Register updates (new risks, closed risks, rating changes)
- [ ] Control effectiveness assessment
- [ ] CSP performance and SLA adherence summary
- [ ] Open treatment plan actions and progress
- [ ] Issues and exceptions requiring Management attention
- [ ] Confirmation of data residency compliance

---

## 13. Review and Approval

### 13.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [Version] | [Date] | [Author Name] | [Description of Changes] |

### 13.2 Scheduled Review

This document shall be reviewed:

- **Quarterly** — for content currency against regulatory changes and operational experience
- **Annually** — for comprehensive review and formal re-approval
- **On trigger** — in response to material changes in BNM guidance, [Organization Name] cloud strategy, or significant cloud incidents

### 13.3 Approval Sign-Off

*The following approvals are required before this methodology is effective and may be applied to cloud risk assessments.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk | [Name] | _________________ | [Date] |
| Chief Information Security Officer | [Name] | _________________ | [Date] |
| Chief Technology Officer | [Name] | _________________ | [Date] |
| Chief Risk Officer | [Name] | _________________ | [Date] |
| Head of Legal & Compliance | [Name] | _________________ | [Date] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Document | Clause / Section | Description |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.50 | Cloud risk assessment requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.51 | CSP due diligence requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.52 | Data residency and sovereignty |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.53 | Concentration risk management |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.54 | Audit rights and exit strategy |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.55 | BNM notification — material outsourcing |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 129 | Cross-border data transfer |
| FSA 2013 | Financial Services Act 2013 | [Relevant sections] | Financial institution obligations |

### 14.2 Internal Policy References

| Document | Owner | Location |
|---|---|---|
| Technology Risk Management Policy | Head of Technology Risk | [Document Repository] |
| Information Security Policy | CISO | [Document Repository] |
| Cloud Computing Policy | CTO | [Document Repository] |
| Data Classification and Handling Policy | CISO | [Document Repository] |
| Outsourcing and Third-Party Risk Management Policy | Head of Technology Risk | [Document Repository] |
| Business Continuity and DR Policy | CTO | [Document Repository] |

### 14.3 Industry Standards and Frameworks

| Standard | Description |
|---|---|
| ISO/IEC 27017:2015 | Code of practice for information security controls for cloud services |
| ISO/IEC 27018:2019 | Code of practice for protection of personally identifiable information in public clouds |
| CSA Cloud Controls Matrix (CCM) | Cloud-specific security control framework |
| NIST SP 800-144 | Guidelines on security and privacy in public cloud computing |
| ENISA Cloud Security Guide | European cloud security reference guidance |

---

## 15. Appendices

### Appendix A — Cloud Risk Register Template

*Use this template to record each identified risk in the Cloud Risk Assessment process.*

| Field | Entry |
|---|---|
| Risk ID | CR-[XXX] |
| Cloud Service Name | [Service Name] |
| Assessment Date | [Date] |
| Risk Description | [Clear, specific description of the risk event and its cause] |
| Risk Domain | [Cybersecurity / Data Residency / Operational / Vendor / Compliance / Exit / Legal / Shared Responsibility / Other] |
| Inherent Likelihood | [1 – Rare / 2 – Unlikely / 3 – Possible / 4 – Likely / 5 – Almost Certain] |
| Inherent Impact | [1 – Negligible / 2 – Minor / 3 – Moderate / 4 – Major / 5 – Catastrophic] |
| Inherent Risk Score | [Score = Likelihood × Impact] |
| Inherent Risk Rating | [Low / Medium / High / Critical] |
| Existing Controls | [List controls currently in place] |
| Control Effectiveness | [Effective / Partially Effective / Ineffective / Not in Place] |
| Residual Likelihood | [1–5] |
| Residual Impact | [1–5] |
| Residual Risk Score | [Score] |
| Residual Risk Rating | [Low / Medium / High / Critical] |
| Treatment Option | [Treat / Transfer / Avoid / Accept] |
| Treatment Actions | [List specific actions] |
| Risk Owner | [Name and Role] |
| Target Completion Date | [Date] |
| Review Date | [Date] |
| Status | [Open / In Progress / Closed] |
| Supporting Evidence | [Document references] |

---

### Appendix B — CSP Due Diligence Checklist

*Complete this checklist for every cloud service provider as part of the risk assessment. Obtain supporting evidence for each item.*

**Section 1: Corporate and Financial**

| Item | Requirement | Evidence Obtained | Compliant? | Notes |
|---|---|---|---|---|
| B1.1 | CSP is a legally registered entity in country of incorporation | Certificate of incorporation / company registration | [Yes / No / Partial] | |
| B1.2 | CSP financial statements reviewed for last 3 years | Audited financial statements | [Yes / No / N/A] | |
| B1.3 | CSP has no material pending litigation that could affect service continuity | Legal disclosure / self-declaration | [Yes / No / N/A] | |
| B1.4 | CSP ownership structure reviewed for conflicts of interest | Corporate structure documentation | [Yes / No / N/A] | |

**Section 2: Security and Compliance Certifications**

| Item | Requirement | Evidence Obtained | Compliant? | Notes |
|---|---|---|---|---|
| B2.1 | ISO/IEC 27001 certification — current and in scope | Certificate (valid, in scope) | [Yes / No] | |
| B2.2 | SOC 2 Type II report — issued within last 12 months | SOC 2 report | [Yes / No] | |
| B2.3 | CSA STAR certification or self-assessment | CSA STAR registry entry | [Yes / No / N/A] | |
| B2.4 | PCI DSS compliance (if payment data in scope) | PCI DSS Attestation of Compliance | [Yes / No / N/A] | |
| B2.5 | Penetration testing conducted annually | Executive summary or confirmation letter | [Yes / No] | |
| B2.6 | Vulnerability disclosure policy in place | Published VDP / Bug bounty programme | [Yes / No] | |

**Section 3: Data Security and Residency**

| Item | Requirement | Evidence Obtained | Compliant? | Notes |
|---|---|---|---|---|
| B3.1 | Data residency controls in place for designated regions | CSP data residency documentation | [Yes / No] | |
| B3.2 | Written commitment to data residency in contract | Contract clause reference | [Yes / No] | |
| B3.3 | Encryption at rest using AES-256 or equivalent | CSP encryption whitepaper | [Yes / No] | |
| B3.4 | Encryption in transit using TLS 1.2 or higher | CSP technical documentation | [Yes / No] | |
| B3.5 | Customer-managed encryption keys available | KMS documentation | [Yes / No / N/A] | |
| B3.6 | Multi-tenancy isolation controls documented | CSP architecture documentation | [Yes / No] | |
| B3.7 | Sub-processor list disclosed and contractually controlled | Sub-processor list / DPA | [Yes / No] | |

**Section 4: Operational Resilience**

| Item | Requirement | Evidence Obtained | Compliant? | Notes |
|---|---|---|---|---|
| B4.1 | SLA uptime commitment of [X]% or higher | Contract SLA | [Yes / No] | |
| B4.2 | Disaster recovery capability documented and tested | DR documentation / test reports | [Yes / No] | |
| B4.3 | Incident response and notification procedures documented | CSP incident response procedures | [Yes / No] | |
| B4.4 | Incident notification SLA of [X] hours for critical incidents | Contract / SLA | [Yes / No] | |
| B4.5 | Business continuity plan reviewed and current | CSP BCP documentation | [Yes / No] | |

**Section 5: Governance and Exit**

| Item | Requirement | Evidence Obtained | Compliant? | Notes |
|---|---|---|---|---|
| B5.1 | Audit rights clause included in contract | Contract clause reference | [Yes / No] | |
| B5.2 | Right to conduct third-party audits | Contract clause reference | [Yes / No] | |
| B5.3 | Data return and deletion procedures documented | CSP data return / deletion policy | [Yes / No] | |
| B5.4 | Exit plan documented with data portability timelines | Exit plan / contract clause | [Yes / No] | |
| B5.5 | Contract termination notice period acceptable | Contract clause reference | [Yes / No] | |
| B5.6 | Data deletion certification available on termination | CSP confirmation | [Yes / No] | |

**Overall Due Diligence Assessment:**

| Field | Details |
|---|---|
| Total Items Assessed | [Count] |
| Compliant | [Count] |
| Non-Compliant | [Count] |
| Not Applicable | [Count] |
| Critical Gaps Identified | [Yes / No — list if yes] |
| Recommendation | [Proceed / Proceed with Conditions / Do Not Proceed] |
| Assessed By | [Name / Role] |
| Assessment Date | [Date] |
| Reviewed By | [Head of Technology Risk] |
| Review Date | [Date] |

---

### Appendix C — Cloud Risk Acceptance Form

*This form must be completed for any residual risk rated Medium or above that is formally accepted rather than treated. Acceptance does not eliminate the risk — the risk remains on the Cloud Risk Register and continues to be monitored.*

| Field | Details |
|---|---|
| Risk Acceptance Reference | RA-[XXX] |
| Related Risk ID | CR-[XXX] |
| Cloud Service Name | [Service Name] |
| Risk Description | [Full risk description from Risk Register] |
| Residual Risk Rating | [Medium / High / Critical] |
| Justification for Acceptance | [Provide detailed business justification; explain why further treatment is not feasible or practical] |
| Compensating Controls | [List any compensating controls that partially mitigate the risk] |
| Monitoring Arrangements | [Describe how this accepted risk will continue to be monitored] |
| Review Date | [Date — accepted risks must be re-evaluated at the next periodic review] |
| Risk Owner | [Name / Role] |
| Acceptance Authority | [Name / Role — must align with approval authority in Section 8.4] |
| Signature | _________________ |
| Date | [Date] |

---

### Appendix D — BNM Notification Checklist (Material Cloud Outsourcing)

*Use this checklist when a cloud engagement has been determined to constitute material outsourcing under BNM RMiT, requiring prior notification to BNM.*

| Item | Requirement | Status | Reference |
|---|---|---|---|
| D1 | Materiality determination documented and approved | [Complete / In Progress / Not Started] | Section 4.3 |
| D2 | Board or Senior Management approval obtained | [Complete / In Progress / Not Started] | Section 4.6 |
| D3 | Cloud risk assessment completed | [Complete / In Progress / Not Started] | This document |
| D4 | BNM notification form prepared | [Complete / In Progress / Not Started] | [BNM Notification Form reference] |
| D5 | Notification submitted to BNM at least [X] days before service commencement | [Complete / In Progress / Not Started] | BNM RMiT Clause 10.55 |
| D6 | BNM acknowledgement received and filed | [Complete / In Progress / Not Started] | [Filing reference] |
| D7 | Contract execution held pending BNM clearance | [Complete / In Progress / Not Started] | Legal confirmation |

---

### Appendix E — Glossary of Cloud Security Terms

*Provide definitions for cloud security terminology referenced in this methodology to assist authors and reviewers unfamiliar with cloud concepts.*

| Term | Definition |
|---|---|
| **Availability Zone** | An isolated data centre location within a cloud region designed to provide redundancy and fault isolation. |
| **Cloud Region** | A geographic area containing one or more availability zones operated by a CSP. |
| **Container** | A lightweight, portable unit of software that packages code and its dependencies for consistent deployment. |
| **Data Loss Prevention (DLP)** | Technologies and processes designed to prevent unauthorized transmission, access, or loss of sensitive data. |
| **Egress** | Data leaving a cloud environment; often relevant to data residency and cost management. |
| **Identity and Access Management (IAM)** | Framework of policies and technologies for ensuring only authorized users can access specific cloud resources. |
| **Key Management Service (KMS)** | A CSP or third-party service for managing cryptographic keys used to encrypt and decrypt cloud-hosted data. |
| **Multi-Tenancy** | A cloud architecture where multiple customers share the same physical or virtual infrastructure, with logical isolation between tenants. |
| **Serverless** | A cloud execution model where the CSP manages the underlying server infrastructure; customers deploy code without provisioning servers. |
| **Virtual Private Cloud (VPC)** | A logically isolated section of a cloud provider's network, provisioned for exclusive use by a single customer. |
| **Zero Trust** | A security model requiring verification of every user and device attempting to access resources, regardless of network location. |

---

*End of Document*

---

*This document was prepared in accordance with Bank Negara Malaysia Risk Management in Technology (RMiT) requirements. It is classified as **Confidential** and is intended for authorized use by [Organization Name] personnel only.*

| Document ID | Version | Classification | Last Updated |
|---|---|---|---|
| [Document ID] | 1.0 | Confidential | [Last Review Date] |