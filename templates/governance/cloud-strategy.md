# Cloud Strategy

---

**[Organization Name]**
**Board-Approved Cloud Adoption Strategy**

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Board of Directors / Company Secretary |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By — Board of Directors] |
| **Document Status** | [Draft / Under Review / Approved] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution of this document is strictly prohibited. Recipients are bound by the confidentiality obligations applicable to their engagement with [Organization Name].

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Scope and Objectives](#3-scope-and-objectives)
4. [Governance Structure](#4-governance-structure)
5. [Cloud Service Models and Deployment Types](#5-cloud-service-models-and-deployment-types)
6. [Data Residency Requirements](#6-data-residency-requirements)
7. [Shared Responsibility Matrix](#7-shared-responsibility-matrix)
8. [Risk Management Framework](#8-risk-management-framework)
9. [Cloud Security Architecture](#9-cloud-security-architecture)
10. [Vendor Management and Due Diligence](#10-vendor-management-and-due-diligence)
11. [Business Continuity and Resilience](#11-business-continuity-and-resilience)
12. [Compliance and Regulatory Obligations](#12-compliance-and-regulatory-obligations)
13. [Financial Management and Cost Governance](#13-financial-management-and-cost-governance)
14. [Cloud Operating Model](#14-cloud-operating-model)
15. [Migration Strategy and Roadmap](#15-migration-strategy-and-roadmap)
16. [Monitoring, Audit, and Reporting](#16-monitoring-audit-and-reporting)
17. [Roles and Responsibilities](#17-roles-and-responsibilities)
18. [Review and Approval](#18-review-and-approval)
19. [References](#19-references)
20. [Appendices](#20-appendices)

---

## 1. Executive Summary

*Provide a high-level summary of the organisation's cloud strategy, the strategic rationale for cloud adoption, the board's position on cloud usage, and the key principles that will govern cloud decisions. This section should be accessible to board members and senior executives and should not exceed two pages.*

### 1.1 Strategic Intent

[Organization Name] recognises the transformative potential of cloud computing to enhance operational agility, scalability, and resilience. This Cloud Strategy represents the Board of Directors' formal commitment to a governed, risk-managed, and phased approach to cloud adoption, aligned with [Organization Name]'s overarching digital transformation agenda.

The Board of Directors of [Organization Name] hereby approves this Cloud Strategy as the authoritative document governing all cloud-related decisions, investments, and operations within the organisation. This strategy is effective from [Effective Date] and shall be reviewed no less than annually.

### 1.2 Strategic Rationale

*Summarise the key business drivers that have led the organisation to pursue cloud adoption. Include references to competitive pressures, customer expectations, cost considerations, or regulatory enablement.*

The key strategic drivers underpinning [Organization Name]'s cloud adoption are:

- **Operational Agility:** [Describe how cloud enables faster deployment of products and services]
- **Scalability and Elasticity:** [Describe capacity requirements and how cloud addresses them]
- **Cost Optimisation:** [Describe the shift from capital expenditure to operational expenditure]
- **Resilience and Business Continuity:** [Describe how cloud enhances recovery capabilities]
- **Innovation Enablement:** [Describe access to emerging technologies such as AI, ML, and analytics]
- **Talent and Ecosystem Access:** [Describe access to cloud-native tooling and developer ecosystems]
- **Regulatory Alignment:** [Reference BNM's position on cloud adoption for financial institutions]

### 1.3 Board Position on Cloud Adoption

The Board of [Organization Name] endorses a **[Cloud-First / Cloud-Smart / Hybrid]** approach to technology infrastructure and application development. This position does not mandate the migration of all workloads to cloud environments but establishes cloud evaluation as a default consideration in all new technology investment decisions.

The Board acknowledges that cloud adoption introduces specific risks — including concentration risk, data sovereignty risk, and third-party dependency risk — and mandates that these risks be managed in accordance with this strategy, Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, and all other applicable regulations.

### 1.4 Key Strategic Principles

The following principles shall govern all cloud decisions made by [Organization Name]:

| # | Principle | Description |
|---|---|---|
| P1 | **Security by Design** | Security controls shall be embedded at every layer of cloud architecture, not applied retrospectively |
| P2 | **Data Sovereignty** | Customer and institutional data shall comply with Malaysian data residency requirements and applicable privacy laws |
| P3 | **Risk-Proportionate Adoption** | Cloud deployment decisions shall be commensurate with the risk classification of the workload |
| P4 | **Regulatory Compliance** | All cloud arrangements shall comply with BNM RMiT, PDPA, and other applicable regulatory obligations |
| P5 | **Vendor Accountability** | Cloud service providers shall be subject to robust due diligence, contractual obligations, and ongoing oversight |
| P6 | **Concentration Risk Management** | Multi-cloud or hybrid strategies shall be employed to mitigate excessive dependency on a single provider |
| P7 | **Operational Resilience** | Cloud workloads shall meet or exceed the availability and recovery standards of equivalent on-premises systems |
| P8 | **Cost Transparency** | Cloud expenditure shall be visible, attributable, and subject to ongoing optimisation |
| P9 | **Sustainability** | Cloud adoption shall consider the environmental impact and alignment with [Organization Name]'s sustainability commitments |
| P10 | **Continuous Improvement** | This strategy shall evolve with technology, regulation, and the organisation's maturity |

### 1.5 Summary of Cloud Posture

*Provide a one-paragraph summary of the organisation's current cloud maturity, the target state, and the high-level timeline for achieving it.*

As of [Effective Date], [Organization Name] operates at a cloud maturity level of **[Level — e.g., Exploratory / Managed / Optimised]**, with approximately **[X]%** of workloads hosted in cloud environments. The target state for [Target Year] is **[Target State Description]**, with a focus on **[Key Focus Areas — e.g., migrating Tier 2 workloads, establishing a Cloud Centre of Excellence, achieving full IaC adoption]**.

---

## 2. Purpose and Scope

### 2.1 Purpose

This Cloud Strategy document establishes [Organization Name]'s formal, board-approved position on cloud computing adoption. It provides a structured framework for making decisions about when and how to use cloud technologies, defines the governance structures that will oversee cloud use, and sets out the risk management, security, compliance, and operational requirements that all cloud arrangements must satisfy.

This document is issued pursuant to and in compliance with the following regulatory instruments:

- **Bank Negara Malaysia (BNM) Policy Document on Risk Management in Technology (RMiT)**, specifically Paragraph **17.1** and related provisions governing the use of cloud services by financial institutions
- **Personal Data Protection Act 2010 (PDPA)** and its subsidiary legislation
- **National Cyber Security Agency (NACSA)** guidelines and directives applicable to critical information infrastructure
- **[Any additional applicable regulatory instruments — e.g., Securities Commission guidelines, internal group policies]**

BNM RMiT Paragraph 17.1 requires that a financial institution's board of directors approve a cloud strategy that defines the institution's approach to cloud adoption, including governance, risk management, and compliance considerations. This document fulfils that requirement.

### 2.2 Scope

*Define the boundaries of this strategy — which entities, systems, geographies, and cloud service types are covered.*

#### 2.2.1 Organisational Scope

This strategy applies to:

- [Organization Name] and all its wholly-owned subsidiaries operating in Malaysia
- [List subsidiaries or specify "all subsidiaries as listed in Appendix A"]
- All employees, contractors, consultants, and third parties acting on behalf of [Organization Name] who interact with cloud services
- All departments and business units within [Organization Name]

#### 2.2.2 Technology Scope

This strategy applies to all cloud computing arrangements, including but not limited to:

- Infrastructure as a Service (IaaS) engagements
- Platform as a Service (PaaS) engagements
- Software as a Service (SaaS) engagements
- Function as a Service (FaaS) / Serverless computing
- Container and Kubernetes-managed workloads hosted in cloud environments
- Hybrid cloud and multi-cloud architectures
- Shadow IT cloud usage by any employee or team

#### 2.2.3 Geographic Scope

This strategy covers all cloud deployments and data flows involving data generated, processed, or stored on behalf of [Organization Name], regardless of where the cloud service provider's infrastructure is physically located, subject to the data residency requirements set out in Section 6.

#### 2.2.4 Exclusions

The following are explicitly excluded from this strategy's scope:

- On-premises virtualisation and private data centre infrastructure not connected to public cloud environments
- [List any other specific exclusions]

### 2.3 Relationship to Other Policies

This Cloud Strategy operates within [Organization Name]'s broader policy framework. The following policies and standards are directly related and must be read in conjunction with this document:

| Document | Reference | Relationship |
|---|---|---|
| IT Risk Management Policy | [Doc ID] | Parent risk framework |
| Information Security Policy | [Doc ID] | Security requirements for cloud |
| Data Classification Policy | [Doc ID] | Governs data placement decisions |
| Third-Party Risk Management Policy | [Doc ID] | CSP due diligence and oversight |
| Business Continuity Management Policy | [Doc ID] | Cloud resilience requirements |
| Incident Management Policy | [Doc ID] | Cloud incident response |
| Data Retention and Disposal Policy | [Doc ID] | Cloud data lifecycle management |
| Acceptable Use Policy | [Doc ID] | Employee cloud usage |
| Change Management Policy | [Doc ID] | Cloud change control |
| PDPA Compliance Policy | [Doc ID] | Data protection in cloud |

---

## 3. Scope and Objectives

### 3.1 Strategic Objectives

*Define the specific, measurable objectives that this cloud strategy is designed to achieve. Objectives should be time-bound and linked to organisational goals.*

[Organization Name]'s cloud strategy is designed to achieve the following strategic objectives over a **[X]-year horizon** from [Effective Date]:

#### 3.1.1 Short-Term Objectives (Year 1 — [Year])

| Objective | Key Result | Owner | Target Date |
|---|---|---|---|
| Establish cloud governance framework | Cloud governance committee operational; cloud policy suite published | CTO / CIO | [Date] |
| Complete cloud readiness assessment | Workload classification and cloud suitability assessment for all Tier 1 and Tier 2 systems | CISO / Enterprise Architecture | [Date] |
| Onboard approved Cloud Service Providers | Minimum [X] CSPs assessed, contracted, and onboarded to preferred vendor list | Head of Procurement / CISO | [Date] |
| Achieve baseline cloud security posture | Cloud Security Posture Management (CSPM) tooling deployed and baseline established | CISO | [Date] |
| Notify BNM of material cloud arrangements | Regulatory notification submitted for any Tier 1 cloud deployments | Chief Compliance Officer | [Date] |
| Establish Cloud Centre of Excellence | CoE team formed with defined charter and operating model | CTO / CIO | [Date] |

#### 3.1.2 Medium-Term Objectives (Years 2–3 — [Year]–[Year])

| Objective | Key Result | Owner | Target Date |
|---|---|---|---|
| Migrate Tier 2 workloads to cloud | [X]% of eligible Tier 2 workloads migrated | CTO / Programme Office | [Date] |
| Achieve Infrastructure as Code (IaC) maturity | All new cloud infrastructure provisioned via IaC with automated compliance checks | Enterprise Architecture | [Date] |
| Implement FinOps operating model | Cloud cost variance within [X]% of budget; monthly FinOps reporting operational | CFO / CTO | [Date] |
| Complete cloud security certification | Achieve [Certification — e.g., ISO 27017, CSA STAR] for cloud operations | CISO | [Date] |
| Establish multi-cloud capability | Secondary CSP operational for at least [X] critical workloads | Enterprise Architecture | [Date] |

#### 3.1.3 Long-Term Objectives (Years 4–5 — [Year]–[Year])

| Objective | Key Result | Owner | Target Date |
|---|---|---|---|
| Achieve cloud-native architecture for new workloads | All new application development follows cloud-native design principles | CTO / Architecture Board | [Date] |
| Optimise cloud cost to [X]% of IT spend | Total cloud spend rationalised and optimised | CFO / CTO | [Date] |
| Establish AI/ML cloud capability | Cloud-based AI/ML platform operational for approved use cases | Chief Data Officer | [Date] |
| Full workload portability | All Tier 1 workloads capable of migration between approved CSPs within RTO | Enterprise Architecture | [Date] |

### 3.2 Success Metrics and Key Performance Indicators

*Define the KPIs that will be used to measure progress against the strategic objectives. These should be reported to the board at least annually.*

| KPI | Definition | Baseline | Target | Reporting Frequency |
|---|---|---|---|---|
| Cloud Adoption Rate | % of eligible workloads deployed in approved cloud environments | [X]% | [X]% by [Year] | Quarterly |
| Cloud Security Incidents | Number of security incidents attributable to cloud misconfigurations | [X] | Zero critical incidents | Monthly |
| Policy Compliance Rate | % of cloud resources compliant with [Organization Name] cloud security baseline | [X]% | ≥95% | Monthly |
| CSP Due Diligence Completion | % of active CSPs with current due diligence assessment | [X]% | 100% | Annually |
| Cloud Cost Variance | Actual vs. budgeted cloud expenditure | [X]% | ≤[X]% | Monthly |
| Mean Time to Detect (MTTD) | Average time to detect cloud security events | [X] hours | ≤[X] hours | Monthly |
| Mean Time to Recover (MTTR) | Average recovery time for cloud-hosted critical systems | [X] hours | ≤[X] hours | Quarterly |
| RTO/RPO Achievement | % of cloud workloads meeting documented RTO and RPO | [X]% | 100% | Annually (tested) |
| Regulatory Notifications | Number of overdue BNM regulatory notifications | [X] | Zero | As required |
| Cloud Training Completion | % of IT staff with mandatory cloud training completed | [X]% | ≥90% | Annually |

### 3.3 Out-of-Scope Workloads

*Explicitly list categories of workloads that are not suitable for cloud deployment under this strategy, along with the rationale.*

The following categories of workloads are designated as **Not Suitable for Cloud Deployment** under this strategy, unless individually assessed and approved by the Cloud Governance Committee with Board endorsement:

| Workload Category | Rationale | Applicable to |
|---|---|---|
| [Workload Type — e.g., Core Banking System Tier 0] | [Risk rationale] | [Systems] |
| [Workload Type] | [Regulatory restriction] | [Systems] |
| [Workload Type] | [Data sensitivity classification] | [Systems] |

---

## 4. Governance Structure

### 4.1 Governance Philosophy

*Describe the organisation's overarching philosophy for governing cloud adoption — the principles of accountability, transparency, and oversight that will guide all governance mechanisms.*

[Organization Name] adopts a **federated governance model** for cloud operations, wherein strategic direction and risk appetite are set centrally by the Board and senior leadership, while operational autonomy is delegated to business units and technology teams within clearly defined guardrails. This model balances the need for organisational agility with the imperative for consistent risk management and regulatory compliance.

Cloud governance at [Organization Name] is not a single committee or function but an interconnected system of decision rights, accountability structures, policies, and controls that together ensure cloud adoption delivers value while managing risk appropriately.

### 4.2 Board Responsibilities

The **Board of Directors** retains ultimate accountability for [Organization Name]'s cloud strategy and bears the following specific responsibilities:

- Approving and periodically reviewing this Cloud Strategy
- Setting the risk appetite for cloud-related risks, including third-party concentration risk, data residency risk, and cyber risk
- Receiving and reviewing annual cloud governance reports from management
- Approving material cloud arrangements as defined in Section 10 (Vendor Management)
- Ensuring that senior management is capable of implementing this strategy effectively
- Ensuring regulatory obligations related to cloud adoption are met, including notifications to BNM

### 4.3 Board Risk Committee (BRC)

The **Board Risk Committee** exercises oversight of cloud-related risk on behalf of the Board. Its specific responsibilities include:

- Reviewing cloud risk exposures and the effectiveness of controls on a quarterly basis
- Approving updates to the cloud risk appetite statement
- Reviewing and endorsing the annual cloud risk assessment
- Escalating material cloud risk matters to the Board
- Reviewing CSP concentration risk positions

### 4.4 Board Audit Committee (BAC)

The **Board Audit Committee** provides independent assurance on cloud governance and compliance. Its responsibilities include:

- Reviewing internal and external audit findings related to cloud operations
- Commissioning cloud-specific internal audit reviews as part of the annual audit plan
- Reviewing regulatory examination findings related to cloud
- Overseeing management's remediation of cloud audit findings

### 4.5 Management-Level Governance Bodies

#### 4.5.1 Cloud Governance Committee (CGC)

The **Cloud Governance Committee** is the primary management-level body responsible for implementing this strategy and overseeing cloud operations on a day-to-day basis.

| Attribute | Detail |
|---|---|
| **Chair** | Chief Technology Officer (CTO) / Chief Information Officer (CIO) |
| **Members** | CISO, CFO (or delegate), Chief Compliance Officer, Chief Risk Officer, Chief Data Officer, Head of Enterprise Architecture, Head of Operations |
| **Meeting Frequency** | Monthly (or as required for urgent matters) |
| **Reporting Line** | Management Risk Committee → Board Risk Committee |
| **Quorum** | [X] members including the Chair |

**Responsibilities of the CGC:**

- Approve cloud architecture standards, security baselines, and operating procedures
- Review and approve cloud service provider assessments and onboarding
- Monitor cloud risk metrics, KPIs, and compliance posture
- Approve individual cloud workload deployment decisions above defined risk thresholds
- Oversee the Cloud Centre of Excellence (CCoE)
- Report cloud governance status to the Management Risk Committee quarterly
- Manage BNM regulatory notification obligations related to cloud

#### 4.5.2 Cloud Centre of Excellence (CCoE)

The **Cloud Centre of Excellence** is the operational body responsible for developing and maintaining cloud standards, providing expertise, and enabling cloud adoption across the organisation.

| Attribute | Detail |
|---|---|
| **Lead** | Head of Enterprise Architecture / Head of Cloud Platform |
| **Members** | Cloud architects, cloud security engineers, FinOps practitioners, cloud operations specialists, developer advocates |
| **Reporting Line** | Cloud Governance Committee |

**Responsibilities of the CCoE:**

- Develop and maintain cloud architecture standards and reference architectures
- Operate the cloud landing zone and account vending machine
- Provide advisory services to business units undertaking cloud migration
- Manage relationships with CSPs at a technical level
- Develop and deliver cloud training and enablement programmes
- Operate cloud security posture management tooling
- Manage cloud cost optimisation activities

#### 4.5.3 Management Risk Committee (MRC)

The **Management Risk Committee** provides executive-level oversight of cloud risk and serves as the escalation path from the CGC to the Board Risk Committee.

| Attribute | Detail |
|---|---|
| **Chair** | Chief Executive Officer (CEO) |
| **Frequency** | Quarterly (cloud matters) |
| **Input from CGC** | Quarterly cloud risk and governance report |

### 4.6 Cloud Decision Rights Framework

*Define the authority levels for different categories of cloud decisions. This ensures decisions are made at the appropriate level without unnecessary escalation or bypass.*

| Decision Category | Description | Decision Authority |
|---|---|---|
| Cloud Strategy Approval | Approval of this document and material amendments | Board of Directors |
| Risk Appetite Setting | Cloud-specific risk thresholds and tolerances | Board Risk Committee |
| Tier 1 CSP Engagement | Engagement of any CSP for Tier 1 workloads | Board of Directors (with BNM notification) |
| Tier 2 CSP Engagement | Engagement of any CSP for Tier 2 workloads | Cloud Governance Committee |
| Tier 3 CSP Engagement | Engagement of any CSP for Tier 3 workloads | CTO / CISO joint approval |
| SaaS Product Adoption | Approval of new SaaS tools | Cloud Governance Committee (above [RM threshold]) / CTO (below threshold) |
| Cloud Architecture Deviation | Deviation from approved cloud reference architectures | Cloud Governance Committee |
| Cloud Budget Approval | Annual cloud budget | Board (via annual budget approval) |
| Cloud Budget Variance | In-year variance exceeding [X]% | CFO approval with CGC notification |
| CSP Exit | Planned migration away from a contracted CSP | Cloud Governance Committee with MRC endorsement |
| CSP Exit (emergency) | Unplanned emergency exit from a CSP | CISO / CTO joint authority with immediate CGC notification |
| BNM Regulatory Notification | Submission of cloud notification to BNM | Chief Compliance Officer with CGC endorsement |

### 4.7 Cloud Policy Hierarchy

All cloud operations shall be governed by the following tiered policy framework:

```
Level 1 (Board):       Cloud Strategy (this document)
                                  │
Level 2 (Management):  Cloud Risk Appetite Statement
                       Cloud Security Policy
                       Cloud Vendor Management Policy
                                  │
Level 3 (Standards):   Cloud Architecture Standards
                       Cloud Security Baseline
                       Cloud Access Control Standard
                       Cloud Data Classification Standard
                       Cloud Incident Response Playbooks
                                  │
Level 4 (Procedures):  CSP Onboarding Procedure
                       Cloud Workload Deployment Procedure
                       Cloud Offboarding Procedure
                       Cloud Cost Management Procedure
```

### 4.8 Cloud Risk Appetite Statement

*State the organisation's formally adopted risk appetite for cloud-related risks. This should be specific and measurable.*

The Board of [Organization Name] adopts the following risk appetite positions with respect to cloud adoption:

| Risk Domain | Risk Appetite Statement | Tolerance Threshold |
|---|---|---|
| **Data Loss** | Zero tolerance for loss of customer data hosted in cloud environments | Zero incidents of confirmed customer data loss |
| **Regulatory Non-Compliance** | Zero tolerance for material regulatory breaches arising from cloud arrangements | Zero BNM enforcement actions related to cloud |
| **Service Availability** | Low tolerance for cloud-related service disruptions affecting customers | ≤[X] hours unplanned downtime per year for Tier 1 systems |
| **CSP Concentration** | Moderate tolerance for concentration in a single CSP | No more than [X]% of Tier 1 workloads on a single CSP |
| **Data Residency Breach** | Zero tolerance for data residency violations | Zero confirmed violations |
| **Cloud Security Incidents** | Low tolerance for cloud misconfigurations resulting in data exposure | Zero critical misconfigurations undetected for >24 hours |
| **Cost Overrun** | Moderate tolerance for cloud cost variance | ≤[X]% variance from approved cloud budget |
| **Shadow IT Cloud Usage** | Low tolerance for unapproved cloud service use | ≤[X] confirmed shadow IT incidents per year |

---

## 5. Cloud Service Models and Deployment Types

### 5.1 Overview of Approved Cloud Service Models

*This section defines the cloud service models (IaaS, PaaS, SaaS) that [Organization Name] is authorised to use, and the specific approved deployment types for each. It also establishes the risk classification criteria that determine which service models are appropriate for which workload types.*

[Organization Name] may utilise the following cloud service models subject to the conditions and restrictions set out in this section:

### 5.2 Infrastructure as a Service (IaaS)

IaaS provides virtualised computing resources — including compute, storage, and networking — over the internet. [Organization Name] is responsible for managing the operating system, middleware, runtime, data, and applications.

#### 5.2.1 Approved IaaS Use Cases

| Use Case Category | Examples | Approved Tiers | Conditions |
|---|---|---|---|
| Non-production environments | Development, testing, UAT | Tier 2, Tier 3 | Standard security baseline applies |
| Disaster recovery hosting | DR instances for on-premises Tier 1 systems | Tier 1, Tier 2 | Full security baseline; BNM notification if Tier 1 |
| Analytics and data processing | Batch analytics, data pipelines | Tier 2, Tier 3 | Data must comply with residency requirements |
| Web-facing applications | Customer portals, public websites | Tier 2, Tier 3 | WAF and DDoS protection required |
| [Additional use case] | [Examples] | [Tier] | [Conditions] |

#### 5.2.2 IaaS Restrictions

The following restrictions apply to all IaaS deployments:

- All IaaS compute resources must be provisioned within an approved cloud account managed by the CCoE
- Direct internet access from IaaS instances is prohibited without explicit firewall rule approval
- All IaaS instances must be enrolled in the centralised vulnerability management programme within [X] days of provisioning
- Persistent storage attached to IaaS instances containing Tier 1 or Tier 2 data must be encrypted at rest using approved encryption standards (see Section 9)
- [Organization Name] retains responsibility for patching the operating system and all software installed on IaaS instances

### 5.3 Platform as a Service (PaaS)

PaaS provides a managed platform — including runtime, middleware, and development tools — allowing [Organization Name] to deploy and manage applications without managing the underlying infrastructure. The CSP manages the operating system, infrastructure, and platform components.

#### 5.3.1 Approved PaaS Use Cases

| Use Case Category | Examples | Approved Tiers | Conditions |
|---|---|---|---|
| Application development and hosting | Managed Kubernetes, App Services, Cloud Run | Tier 2, Tier 3 | Container image scanning required |
| Managed databases | Cloud SQL, RDS, Azure SQL | Tier 2, Tier 3 | Encryption at rest and in transit mandatory |
| API management | API gateways, service mesh | Tier 2, Tier 3 | API authentication controls required |
| DevOps and CI/CD tooling | Managed build and deployment pipelines | Tier 3 | Source code access controls required |
| Data analytics platforms | Managed Spark, BigQuery, Synapse | Tier 2, Tier 3 | Data residency controls required |
| AI/ML platforms | Managed model training and inference | Tier 2, Tier 3 | Data anonymisation where possible |

#### 5.3.2 PaaS Shared Responsibility Considerations

Under PaaS models, [Organization Name]'s security responsibilities are reduced compared to IaaS but not eliminated. Key residual responsibilities include:

- Application-layer security and secure coding practices
- Identity and access management configuration
- Data encryption configuration (ensuring encryption is enabled, not relying on defaults)
- API security and input validation
- Monitoring and log management configuration

### 5.4 Software as a Service (SaaS)

SaaS delivers fully managed software applications over the internet. The CSP is responsible for the infrastructure, platform, and application; [Organization Name] is responsible for data, user access management, and configuration.

#### 5.4.1 Approved SaaS Use Cases

| Use Case Category | Examples | Approved Tiers | Conditions |
|---|---|---|---|
| Productivity and collaboration | [e.g., Microsoft 365, Google Workspace] | Tier 2, Tier 3 | DLP controls; MFA mandatory |
| HR and payroll systems | [e.g., Workday, SAP SuccessFactors] | Tier 2 | Employee data residency review required |
| CRM systems | [e.g., Salesforce, Dynamics 365] | Tier 2 | Customer data handling agreement required |
| Security tools | SIEM, SOAR, EDR cloud consoles | Tier 2 | Log data residency review required |
| IT service management | [e.g., ServiceNow, Freshservice] | Tier 2, Tier 3 | Access logs must be retained |
| Communication and video | [e.g., Microsoft Teams, Zoom] | Tier 3 | Recording storage must comply with retention policy |

#### 5.4.2 SaaS Procurement Controls

All new SaaS engagements must:

1. Be reviewed and approved through the cloud service procurement process (see Section 10)
2. Have a designated Business Owner and IT Owner
3. Be registered in the Cloud Service Register
4. Have user access provisioned and deprovisioned through a documented joiner/mover/leaver process
5. Enable audit logging where available
6. Be assessed against the data classification of information to be stored or processed

### 5.5 Cloud Deployment Types

[Organization Name] may utilise the following cloud deployment types, subject to workload risk classification and governance approval:

#### 5.5.1 Public Cloud

*A cloud deployment in which computing resources are provided by a third-party CSP and shared across multiple tenants, with logical separation enforced by the CSP.*

| Attribute | Position |
|---|---|
| **Approved for Tier** | Tier 2 and Tier 3 workloads |
| **Approved for Tier 1** | Only with Board approval and BNM notification |
| **Approved CSPs** | [List approved public cloud providers — e.g., AWS, Microsoft Azure, Google Cloud] |
| **Condition** | All workloads must reside in Malaysian or approved regional data centres (see Section 6) |

#### 5.5.2 Private Cloud

*A cloud deployment in which computing resources are dedicated to a single organisation, either hosted on-premises or in a dedicated hosted environment.*

| Attribute | Position |
|---|---|
| **Approved for Tier** | All tiers, including Tier 1 |
| **Examples** | On-premises OpenStack, VMware-based private cloud, dedicated hosted environment |
| **Condition** | Must meet all security baseline requirements |

#### 5.5.3 Hybrid Cloud

*A combination of on-premises or private cloud infrastructure with public cloud services, interconnected to allow data and applications to move between them.*

| Attribute | Position |
|---|---|
| **Approved for Tier** | All tiers, subject to data flow controls |
| **Preferred model for** | Tier 1 workloads with cloud-based DR; batch analytics; burst compute |
| **Condition** | Data flows between private and public environments must be encrypted and logged |

#### 5.5.4 Multi-Cloud

*The use of cloud services from two or more public cloud service providers.*

| Attribute | Position |
|---|---|
| **Strategic position** | Encouraged for Tier 1 workloads to mitigate CSP concentration risk |
| **Approved for Tier** | All tiers |
| **Condition** | Multi-cloud strategy must be documented; data sovereignty must be maintained across all providers |

### 5.6 Workload Risk Classification

*All cloud workloads must be classified according to the following risk tiers before a deployment decision is made. Classification determines the deployment model, security controls, governance approval level, and regulatory notification obligations.*

| Tier | Classification | Description | Examples | CSP Deployment | BNM Notification |
|---|---|---|---|---|---|
| **Tier 1** | Critical | Systems whose failure or compromise would have a severe impact on customers, the organisation, or financial system stability | Core banking, payment processing, regulatory reporting systems | Hybrid/Private preferred; Public with Board approval | Required |
| **Tier 2** | Important | Systems important to operations whose failure would materially impact customers or operations | CRM, HR, analytics, internal portals | Public cloud permitted with CGC approval | Required if material |
| **Tier 3** | Non-Critical | Systems whose failure would have limited operational or customer impact | Development environments, internal tools, collaboration | All deployment types permitted | Not required |

---

## 6. Data Residency Requirements

### 6.1 Overview

*This section establishes [Organization Name]'s requirements for the geographic location of data stored and processed in cloud environments. These requirements arise from Malaysian legal and regulatory obligations, including PDPA 2010 and BNM RMiT.*

Data residency is one of the most critical compliance requirements governing [Organization Name]'s cloud adoption. The geographic location in which data is stored, processed, and transmitted has direct implications for applicable law, regulatory oversight, and the ability of [Organization Name] and its regulators to access and investigate data.

[Organization Name] adopts a **Malaysia-first data residency principle**: by default, all data subject to Malaysian regulatory jurisdiction shall be stored and processed within Malaysia unless a specific exception has been assessed, approved, and documented.

### 6.2 Regulatory Basis for Data Residency Requirements

The following regulatory instruments establish data residency obligations relevant to [Organization Name]:

| Regulation | Requirement | Applicability |
|---|---|---|
| **BNM RMiT (2023), Para 17.1** | Financial institutions must ensure that customer data and critical data remain in Malaysia or in jurisdictions with adequate regulatory oversight | All Tier 1 and Tier 2 data |
| **Personal Data Protection Act 2010 (PDPA), Section 129** | Personal data shall not be transferred outside Malaysia unless the destination country provides equivalent protection | All personal data of Malaysian data subjects |
| **[Other applicable regulation]** | [Requirement] | [Scope] |

### 6.3 Data Classification and Residency Requirements

All data stored or processed in cloud environments must be classified according to [Organization Name]'s Data Classification Policy and the following residency requirements applied:

| Data Classification | Description | Residency Requirement | Exceptions |
|---|---|---|---|
| **Class 1 — Restricted** | Highly sensitive data; loss or exposure would cause severe harm | Must reside in Malaysia; no exceptions without Board approval | None without BNM consultation |
| **Class 2 — Confidential** | Sensitive internal or customer data | Must reside in Malaysia or approved ASEAN jurisdictions | Approved by CGC with legal review |
| **Class 3 — Internal** | Internal operational data not for public release | Must reside in Malaysia or approved jurisdictions (see 6.4) | Approved by Cloud Governance Committee |
| **Class 4 — Public** | Data intended for public release | No residency restriction | N/A |

#### 6.3.1 Special Category Data

The following data types are subject to the most stringent residency controls and shall not be stored outside Malaysia without specific Board approval and, where applicable, BNM notification:

- Customer financial transaction records
- Personal identification and Know Your Customer (KYC) data
- Payment and card data (subject to PCI DSS)
- Credit bureau and scoring data
- Audit logs and regulatory reporting data

### 6.4 Approved Jurisdictions for Data Storage

*Subject to data classification, the following jurisdictions are approved for data storage and processing. This list is reviewed annually by the Cloud Governance Committee.*

| Jurisdiction | Approved Data Classes | Conditions | Last Reviewed |
|---|---|---|---|
| **Malaysia** | Class 1, 2, 3, 4 | No additional conditions | [Date] |
| **Singapore** | Class 2 (with approval), 3, 4 | Data processing agreement with CSP; legal review required | [Date] |
| **[Other jurisdiction]** | [Classes] | [Conditions] | [Date] |

> **Note:** Approval of a jurisdiction does not constitute approval for all CSPs operating in that jurisdiction. Only approved CSPs (see Section 10) may be used, and only in their approved regions.

### 6.5 Cross-Border Data Transfer Controls

*Describe the controls [Organization Name] will apply when data must legitimately cross jurisdictional borders.*

Where cross-border data transfer is approved, the following controls must be implemented:

1. **Legal Basis:** A valid legal basis for transfer must be documented (e.g., contractual necessity, data subject consent, regulatory requirement)
2. **Contractual Controls:** Standard Contractual Clauses (SCCs) or equivalent contractual mechanisms must be in place with the receiving party
3. **Encryption in Transit:** All cross-border data transfers must be encrypted using approved protocols (TLS 1.2 minimum; TLS 1.3 preferred)
4. **Transfer Impact Assessment:** A Transfer Impact Assessment (TIA) must be completed and approved by the Data Protection Officer (DPO) before transfer commences
5. **Register Maintenance:** All approved cross-border transfers must be logged in the Cross-Border Data Transfer Register (Appendix [X])
6. **Periodic Review:** Approved transfers must be reviewed annually or upon material change

### 6.6 CSP Data Residency Commitments

When engaging a CSP, [Organization Name] must obtain documented commitments covering:

| Commitment | Requirement |
|---|---|
| Data location | CSP must specify and contractually commit to the geographic regions in which [Organization Name] data will be stored |
| Data at rest | CSP must not replicate or back up data outside approved regions without [Organization Name]'s explicit consent |
| Sub-processor location | CSP must disclose all sub-processors and their geographic locations |
| Regulatory access | CSP must commit to notifying [Organization Name] of any regulatory or law enforcement access requests to [Organization Name] data |
| Data sovereignty | CSP must acknowledge Malaysian regulatory jurisdiction over [Organization Name]'s data |
| Evidence of compliance | CSP must provide evidence (e.g., third-party audit reports, certifications) of compliance with data residency commitments |

### 6.7 Data Sovereignty Verification

[Organization Name] shall verify CSP compliance with data residency commitments through the following mechanisms:

- **Annual CSP Attestation:** Written attestation from each CSP confirming data residency compliance
- **Third-Party Audit Reports:** Review of CSP ISO 27001, SOC 2 Type II, or equivalent reports confirming data centre locations
- **Cloud Console Verification:** Periodic review of cloud management consoles to verify resource regions
- **CSPM Tooling:** Automated detection of resources created outside approved regions (will generate immediate alert)
- **Contractual Right to Audit:** [Organization Name] reserves the contractual right to audit CSP data residency practices

### 6.8 Data Residency Incident Response

If [Organization Name] discovers or suspects that data has been stored outside approved jurisdictions:

1. Immediately notify the CISO and Data Protection Officer
2. Classify the incident under the Incident Management Policy
3. Determine the scope — what data, which jurisdictions, how long
4. Assess regulatory notification obligations under PDPA and BNM
5. Remediate — migrate data to approved jurisdictions, delete copies in unapproved locations
6. Conduct root cause analysis and implement preventive controls
7. Report to the Cloud Governance Committee and, if material, to the Board Risk Committee

---

## 7. Shared Responsibility Matrix

### 7.1 Overview

*The shared responsibility model is a fundamental concept in cloud security and risk management. It defines which security and operational responsibilities belong to [Organization Name] (the cloud customer) and which belong to the Cloud Service Provider. Understanding and managing these responsibilities is critical to avoid gaps in security coverage.*

The allocation of responsibilities between [Organization Name] and its CSPs varies by service model (IaaS, PaaS, SaaS). This section provides definitive matrices for each service model and guidance on managing residual responsibilities.

The shared responsibility model does not reduce [Organization Name]'s accountability to BNM and other regulators — regulatory accountability for all cloud-hosted systems remains with [Organization Name] regardless of the CSP's role.

### 7.2 IaaS Shared Responsibility Matrix

*In the IaaS model, the CSP manages physical infrastructure, and [Organization Name] manages everything from the operating system upward.*

| Responsibility Area | Component | CSP Responsibility | [Org Name] Responsibility | Notes |
|---|---|---|---|---|
| **Physical Security** | Data centre physical access | ✅ Full | — | CSP provides certifications |
| **Physical Security** | Hardware security | ✅ Full | — | |
| **Network Infrastructure** | Physical network hardware | ✅ Full | — | |
| **Network Infrastructure** | Network fabric and routing | ✅ Full | — | |
| **Network Infrastructure** | Virtualised network (VPC/VNet) | — | ✅ Full | [Org Name] must configure correctly |
| **Network Infrastructure** | Firewall rules and security groups | — | ✅ Full | Principle of least privilege required |
| **Hypervisor** | Virtualisation layer | ✅ Full | — | |
| **Compute** | Physical compute resources | ✅ Full | — | |
| **Compute** | Virtual machine provisioning | ✅ Provides capability | ✅ Configures and manages | |
| **Storage** | Physical storage media | ✅ Full | — | |
| **Storage** | Storage encryption (at rest) | ✅ Provides capability | ✅ Must enable and configure | [Org Name] must not rely on defaults |
| **Operating System** | OS installation | — | ✅ Full | |
| **Operating System** | OS patching and hardening | — | ✅ Full | Patching SLA: [X days] for critical |
| **Middleware and Runtime** | Installation and configuration | — | ✅ Full | |
| **Middleware and Runtime** | Patching | — | ✅ Full | |
| **Applications** | Application development | — | ✅ Full | |
| **Applications** | Application security | — | ✅ Full | OWASP Top 10 compliance required |
| **Applications** | Application patching | — | ✅ Full | |
| **Identity and Access Management** | CSP IAM platform | ✅ Provides platform | ✅ Configures and manages | MFA mandatory for all admin access |
| **Identity and Access Management** | User provisioning and deprovisioning | — | ✅ Full | |
| **Data** | Data encryption in transit | ✅ Provides capability | ✅ Must enforce | TLS 1.2 minimum required |
| **Data** | Data encryption at rest | ✅ Provides capability | ✅ Must enable | Customer-managed keys for Tier 1 data |
| **Data** | Data classification | — | ✅ Full | |
| **Data** | Data backup | ✅ Provides capability | ✅ Configures and manages | Backup must be in approved region |
| **Monitoring and Logging** | Platform-level logging | ✅ Full | — | |
| **Monitoring and Logging** | Application and OS logging | — | ✅ Full | |
| **Monitoring and Logging** | Log centralisation and SIEM | — | ✅ Full | |
| **Incident Response** | Infrastructure-level incident response | ✅ Full | — | |
| **Incident Response** | Application and data incident response | — | ✅ Full | |
| **Compliance and Audit** | CSP compliance certifications | ✅ Full | — | [Org Name] to review annually |
| **Compliance and Audit** | [Org Name] workload compliance | — | ✅ Full | |

### 7.3 PaaS Shared Responsibility Matrix

*In the PaaS model, the CSP manages infrastructure, operating system, and platform components. [Organization Name] is responsible for application code, data, and configuration of platform services.*

| Responsibility Area | Component | CSP Responsibility | [Org Name] Responsibility | Notes |
|---|---|---|---|---|
| **Physical and Network Infrastructure** | All physical and network layers | ✅ Full | — | |
| **Operating System** | OS management and patching | ✅ Full | — | |
| **Runtime and Middleware** | Managed runtime environment | ✅ Full | — | |
| **Platform Service Configuration** | Default configuration | ✅ Provides defaults | ✅ Must review and harden | Defaults are not guaranteed to be secure |
| **Platform Service Configuration** | Security configuration | — | ✅ Full | CGC-approved configuration baselines apply |
| **Application Code** | Application development and deployment | — | ✅ Full | Secure coding standards apply |
| **Application Code** | Application vulnerability management | — | ✅ Full | SAST/DAST scanning required |
| **Data** | Data storage on platform | ✅ Provides capability | ✅ Manages data lifecycle | |
| **Data** | Encryption at rest | ✅ Provides capability (often on by default) | ✅ Must verify and configure key management | Customer-managed keys preferred |
| **Data** | Data residency | ✅ Provides regional configuration | ✅ Must enforce region selection | Must specify approved regions at provisioning |
| **Identity and Access Management** | Platform IAM integration | ✅ Provides capability | ✅ Configures and manages | Least-privilege roles required |
| **API Security** | Platform API | ✅ Provides secure API | ✅ Must implement authentication | API keys must be rotated; OAuth preferred |
| **Monitoring** | Platform monitoring and logging | ✅ Provides capability | ✅ Enables, configures, and centralises | Platform logs must flow to [Org Name] SIEM |
| **Availability and Scalability** | Platform availability SLA | ✅ Full | — | [Org Name] must design for multi-AZ where required |
| **Backup and Recovery** | Managed backups | ✅ Provides capability | ✅ Configures retention and tests recovery | |
| **Compliance** | Platform certifications | ✅ Full | — | |
| **Compliance** | [Org Name] application compliance | — | ✅ Full | |

### 7.4 SaaS Shared Responsibility Matrix

*In the SaaS model, the CSP manages the vast majority of the stack. [Organization Name]'s responsibilities are focused on data, user access management, and configuration.*

| Responsibility Area | Component | CSP Responsibility | [Org Name] Responsibility | Notes |
|---|---|---|---|---|
| **All Infrastructure Layers** | Physical, network, OS, platform, application | ✅ Full | — | |
| **Application Functionality** | Feature development and maintenance | ✅ Full | — | |
| **Application Security** | Application vulnerability management | ✅ Full | — | [Org Name] must review CSP security bulletins |
| **Application Configuration** | Default settings | ✅ Provides defaults | ✅ Must review and configure for security | Admin team must review all security settings |
| **Identity and Access Management** | IAM platform | ✅ Provides | ✅ Manages all user accounts and roles | SSO integration required where available |
| **Identity and Access Management** | User provisioning | — | ✅ Full | JML process must apply; provisioning within [X days] |
| **Identity and Access Management** | Access reviews | — | ✅ Full | Quarterly access reviews required |
| **Multi-Factor Authentication** | MFA capability | ✅ Provides (if available) | ✅ Must enforce for all users | MFA mandatory; no exceptions |
| **Data Uploaded or Created** | Data input into SaaS | — | ✅ Full ownership | Data classification must be considered before input |
| **Data Portability** | Data export | ✅ Must provide export capability (contractual) | ✅ Must test data export periodically | Exit planning requirement |
| **Data Retention and Deletion** | Data lifecycle in SaaS | ✅ Provides configuration | ✅ Configures and manages | Must align with [Org Name] retention policy |
| **Encryption** | Encryption of data at rest and in transit | ✅ Full responsibility | ✅ Must verify encryption is in place | Review CSP documentation and certifications |
| **Audit Logging** | Availability of audit logs | ✅ Must provide where available | ✅ Must enable and retain | Logs must be exportable to [Org Name] SIEM |
| **Availability** | Service availability SLA | ✅ Full | — | Must review SLA before procurement |
| **Incident Response** | Application-level incidents | ✅ Full | — | [Org Name] must have CSP incident contact |
| **Incident Response** | Data breach notification | ✅ Must notify [Org Name] per contract | ✅ Must notify regulators and affected parties | Contractual notification SLA: [X hours] |
| **Compliance Certifications** | CSP-level certifications | ✅ Full | — | Review ISO 27001, SOC 2 annually |
| **Third-Party Integrations** | Data flows to other systems | ✅ Provides capability | ✅ Reviews and approves all integrations | Third-party integrations require CGC approval |

### 7.5 Responsibility Gap Management

[Organization Name] acknowledges that the shared responsibility model creates the risk of responsibility gaps — areas where neither party has clearly assumed accountability, or where [Organization Name] has failed to exercise its responsibilities. The following controls are in place to manage this risk:

| Control | Description | Owner | Frequency |
|---|---|---|---|
| Shared Responsibility Review | Annual review of CSP-specific shared responsibility documentation for all Tier 1 and Tier 2 CSPs | CISO / CCoE | Annual |
| Cloud Security Posture Assessment | Automated continuous assessment of [Org Name]'s cloud configuration responsibilities | CISO | Continuous |
| CSP Audit Report Review | Review of CSP SOC 2, ISO 27001, and other audit reports to verify CSP responsibilities are discharged | CISO / Internal Audit | Annual |
| Onboarding Responsibility Checklist | Completion of a shared responsibility checklist for every new cloud service onboarding | CCoE | Per onboarding |
| Incident Post-Mortem | Post-incident review of responsibility matrix to identify any gaps | CISO | Post-incident |

---

## 8. Risk Management Framework

### 8.1 Cloud Risk Assessment Process

*Describe the process for identifying, assessing, treating, and monitoring cloud-specific risks. This should align with [Organization Name]'s enterprise risk management framework.*

All cloud deployments are subject to a formal risk assessment before commencement. The risk assessment process follows [Organization Name]'s Enterprise Risk Management (ERM) framework, with cloud-specific extensions to address technology and third-party risks.

#### 8.1.1 Risk Assessment Triggers

A formal cloud risk assessment must be completed:

- Before any new cloud workload deployment
- Before onboarding a new Cloud Service Provider
- Before migrating an existing workload to a higher risk tier
- Annually for all active Tier 1 and Tier 2 cloud arrangements
- Following a material change to a cloud arrangement
- Following a cloud security incident affecting similar services
- When directed by the CGC, MRC, or BRC

#### 8.1.2 Risk Assessment Steps

| Step | Activity | Responsible | Output |
|---|---|---|---|
| 1 | Workload classification — determine the risk tier of the workload | Business Owner + CCoE | Workload Risk Tier |
| 2 | Threat modelling — identify threats specific to the cloud deployment | CISO / Cloud Security | Threat Register |
| 3 | Control assessment — evaluate existing controls against identified threats | CISO / CCoE | Control Gap Analysis |
| 4 | Residual risk rating — assess residual risk after controls | CRO / CISO | Residual Risk Rating |
| 5 | Risk treatment — accept, mitigate, transfer, or avoid the residual risk | CRO with CGC approval | Risk Treatment Plan |
| 6 | Approval — obtain required governance approval before deployment | CGC / Board (Tier 1) | Approval Record |
| 7 | Ongoing monitoring — implement controls and monitor their effectiveness | CISO / CCoE | Risk Register entry |

### 8.2 Key Cloud Risk Categories

| Risk Category | Description | Primary Controls |
|---|---|---|
| **Concentration Risk** | Excessive dependence on a single CSP | Multi-cloud strategy; CSP exit plans |
| **Data Sovereignty Risk** | Data stored outside approved jurisdictions | Data residency controls; CSP contractual commitments |
| **Misconfiguration Risk** | Insecure cloud configuration creating vulnerabilities | CSPM; IaC with policy-as-code; training |
| **Access Control Risk** | Excessive or unauthorised access to cloud resources | PAM; MFA; least-privilege IAM; access reviews |
| **Supply Chain Risk** | Risks from CSP's own supply chain | CSP due diligence; SOC 2 review |
| **Availability Risk** | CSP outages affecting [Org Name] services | Multi-AZ; DR; SLA management |
| **Vendor Lock-in Risk** | Difficulty migrating away from a CSP | Portability standards; exit planning |
| **Regulatory Risk** | Failure to comply with BNM or other regulations | Compliance monitoring; regulatory engagement |
| **Financial Risk** | Uncontrolled cloud expenditure | FinOps; budget controls; spending alerts |
| **Shadow IT Risk** | Unapproved cloud usage by employees | Policy enforcement; CASB; training |

### 8.3 Cloud Risk Register

*A Cloud Risk Register is maintained by the CISO and reviewed by the Cloud Governance Committee monthly. High and critical risks are escalated to the Management Risk Committee quarterly and to the Board Risk Committee as required.*

The Cloud Risk Register shall, at a minimum, include the following fields for each identified risk:

| Field | Description |
|---|---|
| Risk ID | Unique identifier |
| Risk Description | Clear description of the risk event and its consequence |
| Risk Category | Category from Section 8.2 |
| Affected Workloads/CSPs | Systems or providers to which the risk applies |
| Likelihood | Rated 1–5 (Rare to Almost Certain) |
| Impact | Rated 1–5 (Negligible to Critical) |
| Inherent Risk Rating | Pre-control risk score |
| Controls in Place | Description of mitigating controls |
| Residual Risk Rating | Post-control risk score |
| Risk Owner | Named individual accountable for managing the risk |
| Treatment Plan | Planned risk treatment actions |
| Target Date | Date by which treatment will be completed |
| Review Date | Next scheduled review of this risk |

---

## 9. Cloud Security Architecture

### 9.1 Security Design Principles

*Define the security architecture principles that must be applied to all cloud deployments.*

All cloud deployments at [Organization Name] must adhere to the following security architecture principles:

| Principle | Description | Requirement |
|---|---|---|
| **Zero Trust** | No implicit trust based on network location | All access must be authenticated and authorised; assume breach |
| **Defence in Depth** | Multiple layers of security controls | No single control is relied upon exclusively |
| **Least Privilege** | Minimum necessary access | All identities, services, and applications receive minimum required permissions |
| **Immutable Infrastructure** | Infrastructure is replaced, not modified | Production cloud resources deployed via IaC; no manual changes |
| **Encryption Everywhere** | Data encrypted at rest and in transit | Encryption mandatory for all data; key management documented |
| **Visibility and Observability** | Comprehensive logging and monitoring | All cloud resources generate logs; logs centralised to SIEM |
| **Automated Compliance** | Policy enforcement through automation | Policy-as-code enforced through cloud guardrails |

### 9.2 Cloud Landing Zone

[Organization Name] shall operate a cloud landing zone architecture that provides a pre-configured, secure foundation for all cloud workloads. The landing zone includes:

- **Management account/subscription structure:** Hierarchical account structure separating production, non-production, shared services, and security accounts
- **Network architecture:** Hub-and-spoke network topology with centralised egress and inspection
- **Centralised logging:** All accounts forward logs to a dedicated, tamper-resistant logging account
- **Centralised security tooling:** CSPM, SIEM integration, and vulnerability management
- **Guardrails:** Preventive (deny) and detective (alert) policies applied to all accounts
- **Account vending:** Automated provisioning of new cloud accounts meeting baseline security requirements

### 9.3 Identity and Access Management

| Requirement | Standard |
|---|---|
| Authentication | Multi-factor authentication (MFA) is mandatory for all cloud console access without exception |
| Administrative access | Just-in-time (JIT) privileged access; no standing administrative access to production |
| Service accounts | Use of managed identities / service accounts preferred over static credentials |
| Credential storage | No hardcoded credentials in code, scripts, or configuration files |
| Access reviews | Quarterly access reviews for all Tier 1 and Tier 2 cloud environments |
| SSO integration | Single Sign-On (SSO) integration with [Org Name]'s identity provider required for all supported cloud services |

### 9.4 Encryption Standards

| Context | Requirement |
|---|---|
| Data at rest — Tier 1 data | AES-256 encryption with Customer-Managed Keys (CMK) |
| Data at rest — Tier 2 data | AES-256 encryption (CSP-managed keys acceptable with approval) |
| Data at rest — Tier 3 data | Encryption enabled (CSP defaults acceptable) |
| Data in transit | TLS 1.2 minimum; TLS 1.3 preferred; deprecated protocols must be disabled |
| Key management | HSM-backed key storage; annual key rotation; key access logged |
| Certificate management | Automated certificate lifecycle management; no self-signed certificates in production |

### 9.5 Network Security

- All cloud environments must implement network segmentation isolating production from non-production
- All inbound traffic from the internet must traverse a Web Application Firewall (WAF)
- All egress traffic must traverse a centralised inspection point
- Direct peer-to-peer access between cloud workloads and on-premises systems must be encrypted
- Private endpoints must be used where available to avoid data traversal over public internet
- DDoS protection must be enabled for all internet-facing Tier 1 and Tier 2 workloads

### 9.6 Vulnerability Management

| Activity | Requirement | Frequency |
|---|---|---|
| Container image scanning | All container images scanned before deployment | Every build |
| IaC security scanning | All IaC templates scanned for misconfigurations | Every pull request |
| Cloud resource vulnerability scanning | All IaaS instances enrolled in vulnerability management | Continuous / at minimum weekly |
| Penetration testing | External penetration test of internet-facing cloud workloads | Annual; after major changes |
| CSPM assessment | Automated CSPM scan of all cloud environments | Continuous |

---

## 10. Vendor Management and Due Diligence

### 10.1 Cloud Service Provider Classification

All Cloud Service Providers engaged by [Organization Name] are classified according to the risk profile of the services they provide and the data they handle:

| CSP Classification | Criteria | Due Diligence Level | Approval |
|---|---|---|---|
| **Critical CSP** | Hosts Tier 1 workloads or Tier 1 data | Enhanced due diligence; on-site assessment if required | Board approval; BNM notification |
| **Material CSP** | Hosts Tier 2 workloads or Tier 2 data | Standard due diligence | Cloud Governance Committee |
| **Non-Material CSP** | Hosts Tier 3 workloads only | Baseline due diligence | CTO approval |

### 10.2 Approved Cloud Service Providers

*The following CSPs are approved for use by [Organization Name]. Engagement of any CSP not on this list requires CGC approval and a full due diligence assessment.*

| CSP | Approved Service Models | Approved Tiers | Approved Regions | Last Due Diligence | Next Review |
|---|---|---|---|---|---|
| [CSP Name — e.g., Amazon Web Services] | IaaS, PaaS, SaaS | [Tiers] | [Regions] | [Date] | [Date] |
| [CSP Name — e.g., Microsoft Azure] | IaaS, PaaS, SaaS | [Tiers] | [Regions] | [Date] | [Date] |
| [CSP Name — e.g., Google Cloud] | IaaS, PaaS | [Tiers] | [Regions] | [Date] | [Date] |
| [SaaS Provider] | SaaS | [Tiers] | [Regions] | [Date] | [Date] |

### 10.3 CSP Due Diligence Requirements

Before onboarding any new CSP, [Organization Name] shall conduct due diligence covering the following areas:

| Due Diligence Domain | Key Considerations | Evidence Required |
|---|---|---|
| **Financial Stability** | CSP financial viability and business continuity | Annual reports; credit ratings; insurance evidence |
| **Security Certifications** | Independent verification of CSP security controls | ISO 27001; SOC 2 Type II; CSA STAR; PCI DSS (if applicable) |
| **Data Residency Capabilities** | Ability to restrict data to Malaysian or approved regions | Contractual commitment; technical evidence; data centre locations |
| **Regulatory Compliance** | CSP's compliance with applicable Malaysian and international regulations | Regulatory certifications; audit reports |
| **Sub-processor Management** | Management of CSP's own supply chain | Sub-processor list; contractual flow-downs |
| **Incident Response** | CSP's incident detection, response, and notification capabilities | Incident response SLAs; breach notification procedures |
| **Business Continuity** | CSP availability guarantees and disaster recovery capabilities | SLA documentation; DR testing evidence |
| **Data Portability and Exit** | Ability to extract and migrate data from the CSP | Data export formats; migration tooling; exit fees |
| **Audit Rights** | [Org Name]'s right to audit CSP compliance | Contractual right-to-audit clauses; alternative assurance mechanisms |

### 10.4 Mandatory Contractual Requirements

All CSP agreements must include the following contractual provisions:

- **Data Processing Agreement (DPA)** compliant with PDPA 2010
- Data residency commitments — specific regions documented in contract
- Sub-processor disclosure and approval requirements
- Security incident notification to [Organization Name] within **[X hours]** of discovery
- Right to audit or equivalent assurance (e.g., right to receive SOC 2 reports)
- Business continuity and disaster recovery SLAs
- Data portability and exit assistance provisions
- Data deletion and return on termination
- Regulatory cooperation — CSP cooperation with BNM or other regulatory requests
- Liability and indemnification provisions acceptable to [Organization Name]'s legal counsel
- Governing law — Malaysian law preferred; at minimum, Malaysian regulatory access must not be impaired

### 10.5 Ongoing CSP Monitoring

*Approved CSPs are subject to ongoing monitoring throughout the life of the engagement.*

| Monitoring Activity | Frequency | Responsible |
|---|---|---|
| Review CSP security certifications and audit reports | Annual | CISO |
| Review CSP sub-processor changes | As notified by CSP; at minimum annual | CISO / DPO |
| Review CSP incident notifications and disclosures | As received; at minimum quarterly review | CISO |
| CSP performance and SLA monitoring | Monthly | IT Operations |
| CSP financial stability review | Annual | CFO / Procurement |
| Full CSP due diligence refresh | Every [2–3] years or upon material change | CISO / CRO |
| CSP contractual review | Annual | Legal / Procurement |

### 10.6 Concentration Risk Management

[Organization Name] shall actively manage CSP concentration risk in accordance with the risk appetite defined in Section 4.8.

- The proportion of Tier 1 workloads hosted with any single CSP shall not exceed **[X]%** without CGC approval
- A CSP concentration risk report shall be produced quarterly and reviewed by the CGC
- For every Tier 1 workload hosted with a single CSP, an alternative hosting plan must be documented
- At least **[X]** CSPs shall be approved and maintained at all times to ensure optionality

### 10.7 CSP Exit Planning

*For every Critical CSP engagement, [Organization Name] shall maintain a documented exit plan.*

Exit plans must include:

- **Exit triggers:** Events that would necessitate an unplanned CSP exit (e.g., insolvency, regulatory action, material breach, sustained service failure)
- **Data extraction procedure:** Process for extracting all data from the CSP
- **Alternative hosting options:** Identified alternative CSPs or on-premises hosting arrangements
- **Migration timeline:** Estimated RTO for exit in planned and emergency scenarios
- **Exit testing:** Annual tabletop exercise testing the exit plan
- **Exit costs:** Estimated costs of exit and budget provision

---

## 11. Business Continuity and Resilience

### 11.1 Cloud Resilience Requirements

*All cloud workloads must be designed to meet the following resilience requirements, commensurate with their risk tier.*

| Tier | Availability Target | RTO | RPO | Architecture Requirement |
|---|---|---|---|---|
| **Tier 1** | ≥99.99% | ≤[X] hours | ≤[X] minutes | Multi-region or hybrid; active-active or active-passive |
| **Tier 2** | ≥99.9% | ≤[X] hours | ≤[X] hours | Multi-availability zone; automated failover |
| **Tier 3** | ≥99.5% | ≤[X] hours | ≤[X] hours | Single AZ acceptable; manual recovery |

### 11.2 Business Continuity Testing

Cloud workload business continuity plans must be tested in accordance with the following schedule:

| Test Type | Scope | Frequency | Responsible |
|---|---|---|---|
| Recovery Walkthrough | All Tier 1 and Tier 2 cloud workloads | Annual | IT Operations / Business Owner |
| Technical Recovery Test | All Tier 1 cloud workloads | Annual (at minimum) | IT Operations |
| CSP Exit Tabletop | All Critical CSP arrangements | Annual | CCoE / Business Continuity |
| Full DR Simulation | Tier 1 workloads — failover to secondary region | Biennial or as required | IT Operations / Business Continuity |

### 11.3 CSP Outage Response

When a CSP experiences a service disruption:

1. Identify affected workloads and assess business impact
2. Activate relevant incident response procedures
3. Monitor CSP status page and official communications
4. Invoke failover or workaround procedures per the BCP
5. Communicate to affected business units and, if customer-impacting, to customers
6. Assess regulatory notification obligations
7. Document lessons learned and update BCP

---

## 12. Compliance and Regulatory Obligations

### 12.1 BNM Regulatory Obligations

*[Organization Name] is subject to the following BNM RMiT obligations in relation to cloud adoption.*

| Obligation | RMiT Reference | Requirement | Responsible | Status |
|---|---|---|---|---|
| Board-approved cloud strategy | Para 17.1 | Board must approve cloud strategy | Board / CTO | [Status] |
| BNM notification — Tier 1 cloud arrangements | Para 17.1 | BNM must be notified before engaging CSPs for critical workloads | Chief Compliance Officer | [Status] |
| Annual strategy review | Para 17.1 | Cloud strategy reviewed at least annually | Board / CTO | [Status] |
| Data residency | Para 17.1 | Customer data residency requirements | CISO / DPO | [Status] |
| Outsourcing requirements | Para 14 | Third-party and outsourcing risk management | CRO / Procurement | [Status] |
| Concentration risk management | Para 16 | Management of third-party concentration risk | CRO | [Status] |
| Incident reporting | Para 11 | Reporting of technology incidents to BNM | Chief Compliance Officer | [Status] |

### 12.2 PDPA Compliance Obligations

| Obligation | PDPA Provision | Requirement | Responsible |
|---|---|---|---|
| Data Processing Agreement | Section 4 | DPA with all CSPs processing personal data | DPO / Legal |
| Cross-border transfer | Section 129 | Approval and controls for cross-border transfers | DPO |
| Data subject rights | Sections 30–35 | Ability to honour data subject requests for cloud-held data | DPO / Business Owners |
| Security safeguards | Section 9 (Principle 7) | Appropriate security measures for personal data in cloud | CISO |
| Data breach notification | Section 12D | Notification to PDPA Commissioner of breaches | DPO |

### 12.3 Regulatory Notification Process

When [Organization Name] intends to engage a CSP for a Tier 1 workload or any arrangement that requires BNM notification:

1. Chief Compliance Officer prepares regulatory notification using BNM's prescribed format
2. CGC reviews and endorses the notification
3. Board Risk Committee (or Board, if required) approves submission
4. Chief Compliance Officer submits to BNM within the prescribed timeframe
5. BNM acknowledgement or feedback is logged and responded to
6. Notification is recorded in the Regulatory Notification Register

---

## 13. Financial Management and Cost Governance

### 13.1 FinOps Operating Model

*[Organization Name] adopts a FinOps (Cloud Financial Operations) model to ensure cloud spending is visible, accountable, and optimised.*

The FinOps operating model at [Organization Name] is based on the following principles:

- **Visibility:** All cloud costs are tagged, attributed to a cost centre, and reported monthly
- **Accountability:** Each cloud workload has a named Business Owner accountable for its costs
- **Optimisation:** Cloud costs are continuously reviewed for right-sizing, reservation, and efficiency opportunities
- **Governance:** Cloud spending decisions above defined thresholds require approval

### 13.2 Cloud Budget and Spending Controls

| Control | Description | Threshold |
|---|---|---|
| Annual cloud budget | Approved as part of [Org Name]'s annual budget cycle | Set by CFO / Board |
| Monthly spending alert | Automated alert when monthly spend reaches [X]% of monthly budget | [X]% of monthly budget |
| Spending anomaly detection | Automated detection of unusual spending spikes | >[X]% above daily baseline |
| New workload cost approval | Estimated monthly cost must be approved before deployment | >[RM X] per month |
| Reserved instance/commitment approval | Multi-year cloud commitments require approval | All commitments >12 months |

### 13.3 Cost Reporting

Cloud cost reports shall be produced and reviewed as follows:

| Report | Audience | Frequency |
|---|---|---|
| Detailed cloud cost report | CCoE / IT Operations | Monthly |
| Cloud cost dashboard | CGC | Monthly |
| Cloud cost summary | CFO | Monthly |
| Cloud cost trend report | MRC | Quarterly |
| Cloud cost vs. strategy | Board | Annually (in strategy review) |

---

## 14. Cloud Operating Model

### 14.1 Cloud Organisation and Talent

*Describe the organisational capabilities and talent required to operate the cloud strategy.*

[Organization Name] requires the following cloud capabilities and roles to successfully implement this strategy:

| Role | Responsibility | FTE (Target) | Sourcing |
|---|---|---|---|
| Head of Cloud Platform | Overall cloud platform ownership; CCoE leadership | [X] | Internal |
| Cloud Architect | Cloud architecture design and standards | [X] | Internal / Contracted |
| Cloud Security Engineer | Cloud security controls and CSPM | [X] | Internal |
| Cloud DevOps Engineer | IaC, CI/CD, and automation | [X] | Internal |
| FinOps Analyst | Cloud cost management and optimisation | [X] | Internal |
| Cloud Operations Engineer | Day-to-day cloud operations and monitoring | [X] | Internal |

### 14.2 Cloud Training and Competency

All personnel with cloud responsibilities must maintain the following minimum competency levels:

| Role Group | Required Training / Certification | Frequency |
|---|---|---|
| CCoE and IT staff with cloud responsibilities | CSP fundamentals certification (e.g., AWS Cloud Practitioner, Azure Fundamentals) | Once; renewed as required |
| Cloud architects and engineers | CSP associate or professional level certification | Once; renewed every 2 years |
| Cloud security engineers | Cloud security specialisation (e.g., AWS Security Specialty, CCSP) | Once; renewed every 2 years |
| All IT staff | Cloud security awareness training | Annual |
| Board and senior management | Cloud governance and risk briefing | Annual |

### 14.3 Cloud Service Management

Cloud services are managed within [Organization Name]'s broader IT Service Management (ITSM) framework with the following cloud-specific extensions:

- All cloud resources are registered in the Configuration Management Database (CMDB)
- Changes to cloud infrastructure must follow the Change Management Policy, using IaC for production changes
- Cloud incidents are managed under the Incident Management Policy with cloud-specific runbooks
- Cloud capacity is reviewed quarterly against demand forecasts

---

## 15. Migration Strategy and Roadmap

### 15.1 Migration Approach

*[Organization Name] will adopt the following migration approach, aligned with industry-standard migration patterns.*

[Organization Name] adopts a **risk-proportionate, phased migration approach**, using the 7R migration patterns as a decision framework:

| Pattern | Description | Applicable Workloads |
|---|---|---|
| **Retire** | Decommission applications with no business value | Legacy systems identified in portfolio review |
| **Retain** | Keep on-premises; not suitable for cloud | Tier 0/Tier 1 systems pending further assessment |
| **Rehost (Lift and Shift)** | Migrate to cloud with minimal changes | Tier 2 and Tier 3 infrastructure-dependent systems |
| **Replatform** | Migrate with minor optimisations (e.g., managed database) | Tier 2 systems with manageable refactoring cost |
| **Repurchase** | Replace with a SaaS alternative | Systems with viable SaaS equivalents |
| **Refactor/Re-architect** | Redesign for cloud-native architecture | Strategic systems where cloud-native benefits justify investment |
| **Relocate** | Move virtualised workloads to cloud hypervisor | VMware workloads to compatible cloud environments |

### 15.2 Migration Phases

*The following phased roadmap guides [Organization Name]'s cloud migration programme.*

#### Phase 1: Foundation ([Year] — [Year])

*Objective: Establish cloud governance, landing zone, and initial capability.*

| Initiative | Description | Target Date |
|---|---|---|
| Cloud governance framework | Establish CGC, CCoE, and policy framework | [Date] |
| Cloud landing zone | Deploy secure multi-account landing zone | [Date] |
| CSP onboarding | Complete due diligence and onboard [X] approved CSPs | [Date] |
| Initial workload migration | Migrate [X] Tier 3 workloads (pilots) | [Date] |
| Cloud security tooling | Deploy CSPM, SIEM integration, vulnerability management | [Date] |

#### Phase 2: Expansion ([Year] — [Year])

*Objective: Scale cloud adoption to Tier 2 workloads.*

| Initiative | Description | Target Date |
|---|---|---|
| Tier 2 migration programme | Migrate [X] Tier 2 workloads | [Date] |
| FinOps implementation | Full cloud cost management programme | [Date] |
| IaC adoption | All new workloads deployed via IaC | [Date] |
| Multi-cloud capability | Establish secondary CSP for Tier 2 workloads | [Date] |

#### Phase 3: Optimisation ([Year] — [Year])

*Objective: Optimise cloud operations and consider Tier 1 hybrid adoption.*

| Initiative | Description | Target Date |
|---|---|---|
| Cloud-native development | All new development follows cloud-native patterns | [Date] |
| Tier 1 hybrid assessment | Assess hybrid cloud options for Tier 1 DR | [Date] |
| Cost optimisation | Achieve target cloud cost as % of IT spend | [Date] |
| AI/ML capability | Cloud AI/ML platform for approved use cases | [Date] |

---

## 16. Monitoring, Audit, and Reporting

### 16.1 Cloud Monitoring Framework

*Comprehensive monitoring of cloud environments is essential to detect security threats, performance degradation, compliance deviations, and cost anomalies.*

[Organization Name] shall implement the following monitoring capabilities across all cloud environments:

| Monitoring Type | Tool/Mechanism | Scope | Alert Threshold | Response |
|---|---|---|---|---|
| Cloud Security Posture Management (CSPM) | [Tool] | All cloud accounts | Critical finding | Immediate investigation |
| Security Information and Event Management (SIEM) | [Tool] | All cloud logs | Defined alert rules | SOC investigation |
| Infrastructure monitoring | [Tool] | All IaaS and PaaS | Performance threshold breach | Operations team |
| Cost monitoring | [Tool] | All cloud accounts | Budget threshold | FinOps review |
| Availability monitoring | [Tool] | All Tier 1 and Tier 2 workloads | Service degradation | Incident response |
| Data residency monitoring | [Tool/Process] | All cloud storage resources | Out-of-region resource creation | Immediate investigation |
| Identity and access monitoring | [Tool] | All cloud IAM activities | Privileged access anomaly | SOC investigation |

### 16.2 Audit and Assurance

| Assurance Activity | Scope | Frequency | Conducted By | Report To |
|---|---|---|---|---|
| Cloud security assessment | All Tier 1 and Tier 2 cloud environments | Annual | CISO / External assessor | CGC / BAC |
| Internal audit — cloud governance | Governance framework effectiveness | Annual | Internal Audit | BAC |
| Internal audit — cloud controls | Technical cloud security controls | Biennial or risk-based | Internal Audit | BAC |
| External penetration test | Internet-facing cloud workloads | Annual | Approved third party | CGC / BAC |
| CSP audit report review | All Critical and Material CSPs | Annual | CISO | CGC |
| BCP / DR test | All Tier 1 cloud workloads | Annual | IT Operations | CGC / MRC |
| Regulatory examination | As directed by BNM | As required | BNM | Board |

### 16.3 Reporting to the Board

The Board of Directors shall receive the following cloud-related reports:

| Report | Content | Frequency | Prepared By |
|---|---|---|---|
| Annual Cloud Strategy Review | Strategy effectiveness, KPI performance, proposed amendments | Annual | CTO / CIO |
| Cloud Risk Report | Cloud risk posture, material risk changes, concentration risk | Quarterly (to BRC) | CRO / CISO |
| Cloud Compliance Report | Regulatory compliance status, notification register, audit findings | Annual (to BAC) | Chief Compliance Officer |
| Material Incident Report | Material cloud security or availability incidents | As required | CISO / CTO |

---

## 17. Roles and Responsibilities

### 17.1 RACI Matrix — Cloud Strategy and Governance

*The following RACI matrix defines the Responsible (R), Accountable (A), Consulted (C), and Informed (I) roles for key cloud governance activities.*

**R** = Responsible (does the work) | **A** = Accountable (owns the outcome) | **C** = Consulted (provides input) | **I** = Informed (receives updates)

| Activity | Board | BRC | BAC | CEO | CGC | CTO/CIO | CISO | CRO | CCO | DPO | CCoE | Business Owner | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Approve Cloud Strategy | **A/R** | C | C | C | C | C | C | C | C | — | — | — | — |
| Set Cloud Risk Appetite | **A** | **R** | — | C | C | C | C | C | — | — | — | — | — |
| Review Cloud Strategy (annual) | **A** | C | C | — | **R** | R | R | R | R | — | R | — | — |
| Approve Tier 1 CSP engagement | **A/R** | C | — | C | C | C | C | C | C | — | C | — | — |
| Approve Tier 2 CSP engagement | I | — | — | — | **A/R** | R | R | R | C | — | R | — | — |
| Approve CSP exit plan | I | — | — | — | **A/R** | R | R | R | — | — | R | — | — |
| Cloud security policy approval | I | — | — | — | **A/R** | C | R | C | C | — | — | — | — |
| Cloud risk assessment | — | — | — | — | **A** | C | **R** | R | C | C | R | C | — |
| BNM cloud notification | I | I | — | C | C | — | — | — | **A/R** | — | — | — | — |
| Cloud annual budget approval | **A** | — | — | R | C | C | — | — | — | — | — | — | — |
| Monthly cloud KPI reporting | I | I | — | I | **A/R** | R | R | R | R | — | R | — | — |
| CSP due diligence | — | — | — | — | **A** | C | **R** | R | C | C | R | — | — |
| Cloud workload risk assessment | — | — | — | — | **A** | C | **R** | R | C | C | R | C | — |
| Cloud landing zone management | — | — | — | — | I | **A** | C | — | — | — | **R** | — | — |
| Cloud training programme | — | — | — | — | I | **A** | C | — | — | — | **R** | — | — |
| Cloud internal audit | — | — | **A** | — | I | I | I | I | I | — | I | — | **R** |
| Cloud incident response | — | I | — | I | I | **A** | **R** | C | C | C | R | I | — |
| Data residency compliance | — | — | — | — | I | C | C | C | C | **A/R** | R | — | — |
| Cloud cost management | — | — | — | — | I | **A** | — | — | — | — | **R** | R | — |

### 17.2 Key Role Descriptions

| Role | Cloud-Specific Responsibilities |
|---|---|
| **Board of Directors** | Ultimate accountability for cloud strategy; annual approval; sets risk appetite |
| **Board Risk Committee** | Quarterly cloud risk oversight; approves risk appetite amendments |
| **Board Audit Committee** | Independent assurance on cloud governance; oversees cloud audit programme |
| **Cloud Governance Committee** | Primary management governance body; monthly cloud oversight; approves CSPs and policies |
| **Chief Technology Officer / CIO** | Cloud strategy implementation; CCoE leadership; technology decisions |
| **Chief Information Security Officer** | Cloud security architecture; risk assessments; CSP security due diligence; incident response |
| **Chief Risk Officer** | Cloud risk framework; risk appetite monitoring; concentration risk management |
| **Chief Compliance Officer** | Regulatory compliance; BNM notifications; PDPA obligations |
| **Data Protection Officer** | Personal data in cloud; data residency; cross-border transfer approvals |
| **Cloud Centre of Excellence** | Cloud standards; landing zone; migration support; training; CSPM |
| **Business Owner** | Workload ownership; cost accountability; BCP participation; access reviews |
| **Internal Audit** | Independent assurance; cloud audit plan; findings tracking |

---

## 18. Review and Approval

### 18.1 Document Review Schedule

This document shall be reviewed in accordance with the following schedule:

| Review Trigger | Frequency | Responsible |
|---|---|---|
| Scheduled review | Annual | CTO / CIO with CGC |
| Material change to cloud strategy | As required | CGC |
| Material change to BNM RMiT or other applicable regulation | Within [X months] of regulatory change | Chief Compliance Officer |
| Material cloud security incident | Within [X months] of incident | CISO |
| Board direction | As directed | CTO / CIO |

### 18.2 Version History

| Version | Date | Author | Approved By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Board of Directors | Initial document — approved at Board meeting [Date] |
| 1.1 | [Date] | [Author Name, Title] | [Approved By] | [Description of changes] |
| 2.0 | [Date] | [Author Name, Title] | [Approved By] | [Description of material revision] |

### 18.3 Approval Sign-Off

*This document requires the following approvals before it becomes effective. All signatories confirm that they have read, understood, and agree that this document is fit for purpose and compliant with applicable regulatory requirements.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chairman, Board of Directors | [Name] | | [Date] |
| Chairman, Board Risk Committee | [Name] | | [Date] |
| Chief Executive Officer | [Name] | | [Date] |
| Chief Technology Officer / CIO | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| Chief Compliance Officer | [Name] | | [Date] |

> **Board Resolution Reference:** This Cloud Strategy was approved by the Board of Directors of [Organization Name] at the Board meeting held on [Date], as recorded in Board Resolution No. [Resolution Number].

---

## 19. References

### 19.1 Regulatory References

| Document | Issuing Authority | Version / Date | Relevant Provisions |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | [Version/Date] | Para 17.1 (Cloud Strategy); Para 14 (Outsourcing); Para 16 (Concentration Risk); Para 11 (Technology Risk); Para 10 (Cyber Risk) |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Act 709, as amended | Sections 4, 9, 12D, 30–35, 129 |
| Personal Data Protection (Amendment) Act 2023 | Parliament of Malaysia | [Date] | All provisions |
| PDPA Regulations and Orders | Ministry of Digital | Various | As applicable |
| NACSA Guidelines on Cybersecurity | National Cyber Security Agency | [Version/Date] | As applicable to Critical Information Infrastructure |
| [Other BNM Policy Document] | Bank Negara Malaysia | [Version/Date] | [Relevant provisions] |
| [Securities Commission Guideline, if applicable] | Securities Commission Malaysia | [Version/Date] | [Relevant provisions] |
| [Other applicable regulation] | [Issuing Authority] | [Version/Date] | [Relevant provisions] |

### 19.2 Industry Standards and Frameworks

| Standard / Framework | Description | Relevance |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Cloud security baseline |
| ISO/IEC 27017:2015 | Code of Practice for Cloud Services | Cloud-specific security controls |
| ISO/IEC 27018:2019 | Protection of Personally Identifiable Information in Cloud | Personal data in cloud |
| CSA Cloud Controls Matrix (CCM) v4 | Cloud-specific security control framework | Cloud security assessment |
| NIST SP 800-145 | Definition of Cloud Computing | Terminology and service model definitions |
| NIST SP 800-210 | General Access Control Guidance for Cloud Systems | IAM in cloud |
| NIST Cybersecurity Framework (CSF) 2.0 | Cybersecurity risk management framework | Cloud risk management |
| CIS Controls v8 | Cybersecurity best practices | Cloud security controls |
| FinOps Foundation Framework | Cloud financial management best practices | Cloud cost governance |

### 19.3 Internal Documents

| Document | Reference | Relationship |
|---|---|---|
| IT Risk Management Policy | [Doc ID] | Parent risk framework |
| Information Security Policy | [Doc ID] | Security requirements |
| Data Classification Policy | [Doc ID] | Data residency decisions |
| Third-Party Risk Management Policy | [Doc ID] | CSP due diligence |
| Business Continuity Management Policy | [Doc ID] | Cloud resilience |
| Incident Management Policy | [Doc ID] | Cloud incident response |
| Data Retention and Disposal Policy | [Doc ID] | Cloud data lifecycle |
| Acceptable Use Policy | [Doc ID] | Employee cloud usage |

---

## 20. Appendices

### Appendix A — Organisational Scope

*Complete list of entities covered by this Cloud Strategy.*

| Entity | Jurisdiction | Regulatory Classification | Cloud Governance Body | Notes |
|---|---|---|---|---|
| [Organization Name] (parent) | Malaysia | Licensed [institution type] | Cloud Governance Committee | Primary entity |
| [Subsidiary 1] | Malaysia | [Classification] | CGC (delegated) | [Notes] |
| [Subsidiary 2] | [Jurisdiction] | [Classification] | [Body] | [Notes] |

### Appendix B — Cloud Service Register

*The Cloud Service Register is a living document maintained by the CCoE and updated upon every cloud service addition, modification, or retirement. The register is reviewed by the Cloud Governance Committee monthly.*

| Service ID | CSP | Service Name | Service Model | Tier | Data Classification | Business Owner | IT Owner | Region | Approval Date | Last Review |
|---|---|---|---|---|---|---|---|---|---|---|
| CSR-001 | [CSP] | [Service] | [IaaS/PaaS/SaaS] | [Tier] | [Class] | [Name] | [Name] | [Region] | [Date] | [Date] |
| CSR-002 | | | | | | | | | | |

### Appendix C — Cross-Border Data Transfer Register

*Maintained by the Data Protection Officer. Updated upon approval of any new cross-border data transfer arrangement.*

| Transfer ID | Data Description | Data Classification | Source Location | Destination Location | Receiving Entity | Legal Basis | Safeguards | DPO Approval Date | Review Date |
|---|---|---|---|---|---|---|---|---|---|
| CBDT-001 | [Description] | [Class] | Malaysia | [Country] | [Entity] | [Legal basis] | [Safeguards] | [Date] | [Date] |

### Appendix D — Cloud Risk Appetite Statement (Full)

*This appendix contains the full, detailed cloud risk appetite statement as adopted by the Board. The risk appetite statement in Section 4.8 is a summary; this appendix contains the operative version.*

[Insert full risk appetite statement as approved by the Board Risk Committee and endorsed by the Board]

**Risk Category:** Third-Party Concentration Risk
**Risk Appetite Statement:** [Detailed statement]
**Key Risk Indicators:**
- [KRI 1 — metric and threshold]
- [KRI 2 — metric and threshold]
**Escalation Trigger:** [Define what triggers escalation]

**Risk Category:** Data Sovereignty Risk
**Risk Appetite Statement:** [Detailed statement]
**Key Risk Indicators:**
- [KRI 1 — metric and threshold]
**Escalation Trigger:** [Define what triggers escalation]

*[Repeat for each risk category]*

### Appendix E — BNM Regulatory Notification Register

*Maintained by the Chief Compliance Officer. Records all notifications made to BNM in relation to cloud arrangements.*

| Notification ID | Notification Type | CSP / Arrangement | Date Submitted | BNM Reference | BNM Response | Response Date | Notes |
|---|---|---|---|---|---|---|---|
| RN-001 | New Tier 1 cloud arrangement | [CSP / Arrangement] | [Date] | [BNM Ref] | [Response] | [Date] | [Notes] |

### Appendix F — CSP Due Diligence Summary

*Summary of due diligence assessments completed for approved CSPs. Full due diligence reports are held by the CISO and available upon request.*

| CSP | Classification | Assessment Date | Assessor | Overall Rating | Key Findings | Next Assessment | Report Reference |
|---|---|---|---|---|---|---|---|
| [CSP Name] | Critical / Material / Non-Material | [Date] | [Name / Firm] | [Rating] | [Summary] | [Date] | [Reference] |

### Appendix G — CSP Exit Plans Summary

*Summary of exit plans maintained for Critical CSPs. Full exit plans are maintained by the CCoE.*

| CSP | Workloads Covered | Exit Triggers | Alternative CSP/Platform | Estimated RTO (Planned) | Estimated RTO (Emergency) | Last Test Date | Next Test Date |
|---|---|---|---|---|---|---|---|
| [CSP Name] | [Workloads] | [Triggers] | [Alternative] | [RTO] | [RTO] | [Date] | [Date] |

### Appendix H — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and financial regulatory authority of Malaysia |
| **CASB** | Cloud Access Security Broker — a security policy enforcement point between cloud service consumers and providers |
| **CCO** | Chief Compliance Officer |
| **CCoE** | Cloud Centre of Excellence — a cross-functional team responsible for cloud standards, governance, and enablement |
| **CGC** | Cloud Governance Committee — the primary management-level body overseeing cloud adoption |
| **CISO** | Chief Information Security Officer |
| **CMK** | Customer-Managed Key — an encryption key managed by the customer rather than the cloud service provider |
| **CSP** | Cloud Service Provider — a company offering cloud computing services (e.g., AWS, Microsoft Azure, Google Cloud) |
| **CSPM** | Cloud Security Posture Management — tools and processes for continuous assessment of cloud security configuration |
| **DPA** | Data Processing Agreement — a contract governing how a processor handles personal data on behalf of a controller |
| **DPO** | Data Protection Officer |
| **IaaS** | Infrastructure as a Service — cloud service model providing virtualised compute, storage, and networking |
| **IaC** | Infrastructure as Code — management of cloud infrastructure through machine-readable configuration files |
| **JIT** | Just-in-Time — a privileged access model where elevated access is granted temporarily and on-demand |
| **JML** | Joiner, Mover, Leaver — the process managing access through the employee lifecycle |
| **KPI** | Key Performance Indicator |
| **KRI** | Key Risk Indicator |
| **MFA** | Multi-Factor Authentication |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PaaS** | Platform as a Service — cloud service model providing a managed development and deployment platform |
| **PDPA** | Personal Data Protection Act 2010 — Malaysia's primary data protection legislation |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a system after disruption |
| **SaaS** | Software as a Service — cloud service model delivering fully managed software applications |
| **SIEM** | Security Information and Event Management |
| **SLA** | Service Level Agreement |
| **SOC 2** | System and Organisation Controls 2 — a third-party audit report on a service provider's security controls |
| **SSO** | Single Sign-On — authentication mechanism allowing a user to access multiple systems with one set of credentials |
| **TIA** | Transfer Impact Assessment — an assessment of risks associated with cross-border personal data transfers |
| **TLS** | Transport Layer Security — cryptographic protocol for secure data transmission |
| **WAF** | Web Application Firewall |
| **Zero Trust** | A security model based on the principle of never trust, always verify |

### Appendix I — Document Control and Distribution List

*This appendix records the authorised recipients of this document and the distribution history.*

| Recipient | Title | Department | Copy Type | Distribution Date |
|---|---|---|---|---|
| [Name] | Chairman, Board of Directors | Board | Controlled — Electronic | [Date] |
| [Name] | Chief Executive Officer | Executive | Controlled — Electronic | [Date] |
| [Name] | Chief Technology Officer | Technology | Controlled — Electronic | [Date] |
| [Name] | Chief Information Security Officer | Information Security | Controlled — Electronic | [Date] |
| [Name] | Chief Risk Officer | Risk Management | Controlled — Electronic | [Date] |
| [Name] | Chief Compliance Officer | Compliance | Controlled — Electronic | [Date] |
| [Name] | Data Protection Officer | Legal / Compliance | Controlled — Electronic | [Date] |
| [Name] | Head of Internal Audit | Internal Audit | Controlled — Electronic | [Date] |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential
**Owner:** Board of Directors / Company Secretary | **Next Review:** [Next Review Date]

*This document is subject to version control. Printed copies are uncontrolled. Refer to the document management system for the current approved version.*