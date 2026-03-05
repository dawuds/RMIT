# Technology Risk Posture Assessment

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT Clause 16.7 |
| **Document Status** | [Draft / Under Review / Approved] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and intended solely for the use of [Organization Name] and its authorised personnel. Unauthorised disclosure, reproduction, or distribution of this document is strictly prohibited. This document contains sensitive technology risk information subject to regulatory obligations under Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Technology Risk Posture Overview](#4-technology-risk-posture-overview)
5. [Asset and Item Identification](#5-asset-and-item-identification)
6. [Classification and Categorisation](#6-classification-and-categorisation)
7. [Owner and Custodian Register](#7-owner-and-custodian-register)
8. [Status and Lifecycle Stage](#8-status-and-lifecycle-stage)
9. [Last Review Date and Review History](#9-last-review-date-and-review-history)
10. [Technology Risk Assessment Findings](#10-technology-risk-assessment-findings)
11. [Control Effectiveness Assessment](#11-control-effectiveness-assessment)
12. [Key Risk Indicators and Metrics](#12-key-risk-indicators-and-metrics)
13. [Emerging and Horizon Risks](#13-emerging-and-horizon-risks)
14. [Remediation and Risk Treatment Plan](#14-remediation-and-risk-treatment-plan)
15. [Roles and Responsibilities](#15-roles-and-responsibilities)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Executive Summary

*Provide a concise, board-level summary of the organization's current technology risk posture. This section should synthesize the overall findings of the assessment, highlight critical risks, and summarize the adequacy of existing controls. The Executive Summary must be written in plain language suitable for senior management and Board Risk Committee consumption.*

### 1.1 Overall Technology Risk Rating

*State the organization's aggregate technology risk rating for the assessment period. Reference the approved risk appetite statement and indicate whether the current posture is within or outside accepted tolerance levels.*

| Assessment Period | Overall Risk Rating | Prior Period Rating | Trend | Risk Appetite Status |
|---|---|---|---|---|
| [Q1/Q2/Q3/Q4 YYYY] | [Critical / High / Medium / Low] | [Critical / High / Medium / Low] | [↑ Increasing / → Stable / ↓ Decreasing] | [Within / Outside Appetite] |

**Narrative Assessment:**

[Organization Name]'s technology risk posture for the assessment period ending [Date] is assessed as **[Risk Rating]**. This assessment reflects [brief qualitative description of the overall posture, e.g., "a stable control environment with identified weaknesses in legacy infrastructure and third-party risk management"]. The posture represents a [improvement / deterioration / maintenance] from the prior assessment period.

Key factors influencing the current rating include:

- **[Factor 1]:** [Brief description, e.g., "Continued reliance on end-of-life operating systems across X% of critical systems"]
- **[Factor 2]:** [Brief description, e.g., "Increased cyber threat activity targeting Malaysian financial institutions"]
- **[Factor 3]:** [Brief description, e.g., "Partial completion of strategic technology modernisation programme"]
- **[Factor 4]:** [Brief description]
- **[Factor 5]:** [Brief description]

### 1.2 Critical Risk Summary

*List the top technology risks identified during the assessment period. Limit to five to seven critical or high-rated risks that require immediate Board and senior management attention.*

| Rank | Risk Description | Risk Domain | Inherent Risk | Residual Risk | Control Adequacy | Owner |
|---|---|---|---|---|---|---|
| 1 | [Critical Risk 1, e.g., Legacy System Vulnerabilities] | [Infrastructure] | High | High | Inadequate | [Name / Role] |
| 2 | [Critical Risk 2, e.g., Third-Party Concentration Risk] | [Third-Party] | High | Medium | Partial | [Name / Role] |
| 3 | [Critical Risk 3, e.g., Ransomware Exposure] | [Cybersecurity] | Critical | High | Partial | [Name / Role] |
| 4 | [Critical Risk 4] | [Domain] | [Rating] | [Rating] | [Adequacy] | [Name / Role] |
| 5 | [Critical Risk 5] | [Domain] | [Rating] | [Rating] | [Adequacy] | [Name / Role] |

### 1.3 Management Actions and Commitments

*Summarise the key management actions and remediation commitments arising from this assessment. Include target completion dates and accountable owners.*

| Action | Responsible Party | Target Date | Status |
|---|---|---|---|
| [Action 1, e.g., Complete legacy system decommissioning roadmap] | [Name / Role] | [Date] | [Not Started / In Progress / Completed] |
| [Action 2] | [Name / Role] | [Date] | [Status] |
| [Action 3] | [Name / Role] | [Date] | [Status] |
| [Action 4] | [Name / Role] | [Date] | [Status] |
| [Action 5] | [Name / Role] | [Date] | [Status] |

---

## 2. Purpose and Scope

### 2.1 Purpose

*Articulate the purpose of this document clearly and concisely, linking it to the organization's regulatory obligations and internal risk management framework.*

This Technology Risk Posture Assessment document has been prepared by [Organization Name] in fulfilment of its obligations under Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically Clause **16.7**, which requires financial institutions to conduct and maintain a comprehensive assessment of their technology risk posture.

The primary purposes of this assessment are to:

- Provide [Organization Name]'s Board of Directors, Board Risk Committee, and senior management with a holistic view of the organization's technology risk landscape;
- Evaluate the adequacy and effectiveness of technology controls relative to identified risks;
- Identify, assess, and prioritise technology risks that may adversely impact the confidentiality, integrity, availability, and resilience of [Organization Name]'s technology systems, services, and data;
- Support informed decision-making regarding technology risk appetite, investment, and remediation priorities;
- Demonstrate [Organization Name]'s ongoing compliance with applicable regulatory requirements, including BNM RMiT, the Personal Data Protection Act 2010 (PDPA), and relevant NACSA cybersecurity guidelines;
- Establish a structured basis for continuous monitoring and quarterly review of the technology risk posture; and
- Provide an auditable record of technology risk management activities for regulatory examination purposes.

This document forms part of [Organization Name]'s Annual Report cycle and is presented to the Board Risk Committee on a quarterly basis, with continuous monitoring conducted by the Technology Risk Management function.

### 2.2 Scope

*Define clearly what systems, processes, entities, and time periods are covered by this assessment.*

**In Scope:**

This assessment encompasses all technology assets, systems, and processes that support [Organization Name]'s business operations, including but not limited to:

- **Core Banking and Financial Systems:** All systems directly supporting retail banking, corporate banking, treasury, payments, and financial market operations;
- **Information Technology (IT) Infrastructure:** Servers, network devices, storage systems, endpoints, and data centre facilities managed or consumed by [Organization Name];
- **Operational Technology (OT):** Building management systems, physical security systems, and other operational technology assets where applicable;
- **Cloud and Hosted Services:** All cloud service provider environments (public, private, and hybrid), including Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) deployments;
- **Third-Party and Outsourced Technology Services:** Technology services and functions outsourced to or dependent upon third-party service providers, including material outsourcing arrangements subject to BNM Guidelines on Outsourcing;
- **Cybersecurity Controls and Processes:** All cybersecurity controls, tools, processes, and capabilities, including those referenced in NACSA's National Cybersecurity Policy;
- **Data and Information Assets:** All data repositories, databases, and information assets classified under [Organization Name]'s Data Classification Policy;
- **Technology Projects and Change:** Material technology projects, programmes, and system changes initiated or completed during the assessment period;
- **Digital Channels:** Internet banking, mobile banking, APIs, and digital service delivery platforms; and
- **Business Continuity and Disaster Recovery:** Technology continuity plans, recovery capabilities, and resilience arrangements.

**Out of Scope:**

- [Specify any explicitly excluded systems, subsidiaries, or geographic locations, e.g., "Subsidiary operations in [Country] pending integration into group-wide risk framework"]
- [Specify other exclusions as applicable]

**Assessment Period:**

| Parameter | Details |
|---|---|
| **Primary Assessment Period** | [Start Date] to [End Date] |
| **Continuous Monitoring Window** | [Date] to [Date] |
| **Quarterly Review Date** | [Date] |
| **Annual Assessment Cycle** | [Financial Year / Calendar Year] |

**Geographic Coverage:**

| Location | Included | Notes |
|---|---|---|
| [Head Office, City, Malaysia] | Yes | Primary assessment scope |
| [Branch Network, Malaysia] | Yes | [Number] branches covered |
| [Data Centre 1 Location] | Yes | Primary data centre |
| [Data Centre 2 Location] | Yes | Secondary/DR data centre |
| [Regional / International Location] | [Yes / No] | [Notes] |

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Framework

*Identify all applicable regulatory frameworks, policy documents, and guidelines that this assessment addresses. Describe how each framework informs the assessment methodology and content.*

This Technology Risk Posture Assessment is conducted within the following regulatory and policy framework:

#### 3.1.1 Bank Negara Malaysia — Risk Management in Technology (RMiT)

The BNM RMiT Policy Document constitutes the primary regulatory framework for this assessment. The RMiT Policy Document establishes requirements for financial institutions to manage technology risks effectively, maintain operational resilience, and protect customer data and financial system integrity.

**Key RMiT obligations addressed by this assessment:**

| RMiT Clause | Description | Addressed in Section |
|---|---|---|
| **16.7** | Technology Risk Posture Assessment — annual requirement for comprehensive assessment included in annual report | Entire document |
| [16.1] | [Description of clause] | [Section reference] |
| [16.2] | [Description of clause] | [Section reference] |
| [16.3] | [Description of clause] | [Section reference] |
| [Additional Clause] | [Description] | [Section reference] |

#### 3.1.2 Personal Data Protection Act 2010 (PDPA)

*Describe how PDPA obligations are considered within the technology risk posture, particularly in relation to data protection, privacy risk, and the security of personal data processed by [Organization Name].*

The Personal Data Protection Act 2010 imposes obligations on [Organization Name] as a data user to protect personal data against loss, misuse, modification, unauthorised or accidental access or disclosure, alteration, or destruction. This assessment evaluates technology risks that may affect compliance with PDPA requirements, including:

- Data security principle compliance;
- Data retention and disposal risk;
- Cross-border data transfer controls; and
- Personal data breach detection and response capabilities.

#### 3.1.3 NACSA National Cybersecurity Policy and Guidelines

*Reference applicable NACSA guidelines and how they inform the cybersecurity risk assessment components of this document.*

[Organization Name] aligns its cybersecurity risk assessment methodology with the National Cyber Security Agency (NACSA) guidelines and the National Cybersecurity Policy. Key NACSA frameworks applied include:

- Malaysia Cybersecurity Strategy [current year];
- Critical National Information Infrastructure (CNII) sector requirements applicable to the financial services sector; and
- [Any other applicable NACSA guideline or directive].

#### 3.1.4 Internal Policy Framework

*Reference the internal policies and standards that govern technology risk management at [Organization Name] and that inform this assessment.*

This assessment is conducted in accordance with [Organization Name]'s internal technology risk management framework, including:

| Policy / Standard | Version | Effective Date |
|---|---|---|
| Technology Risk Management Policy | [Version] | [Date] |
| Information Security Policy | [Version] | [Date] |
| IT Asset Management Policy | [Version] | [Date] |
| Data Classification Policy | [Version] | [Date] |
| Business Continuity Management Policy | [Version] | [Date] |
| Outsourcing and Third-Party Risk Policy | [Version] | [Date] |
| Change Management Policy | [Version] | [Date] |
| [Additional Policy] | [Version] | [Date] |

### 3.2 Assessment Methodology

*Describe the methodology used to conduct the technology risk posture assessment. Include the risk assessment approach, scoring criteria, and how risks are aggregated to produce an overall posture rating.*

#### 3.2.1 Risk Assessment Approach

[Organization Name]'s Technology Risk Posture Assessment is conducted using a structured risk assessment methodology aligned with internationally recognised standards, including ISO/IEC 27005 (Information Security Risk Management) and NIST Special Publication 800-30 (Guide for Conducting Risk Assessments), adapted to meet BNM RMiT requirements.

The assessment employs a **qualitative and semi-quantitative** approach comprising the following steps:

1. **Asset Identification:** Comprehensive identification and cataloguing of technology assets, systems, and processes within scope;
2. **Threat Identification:** Identification of relevant threat actors, threat events, and threat vectors applicable to each asset or asset category;
3. **Vulnerability Assessment:** Assessment of vulnerabilities within identified assets, including technical vulnerabilities, configuration weaknesses, and process gaps;
4. **Inherent Risk Scoring:** Assessment of inherent risk (risk without controls) based on likelihood and impact;
5. **Control Assessment:** Evaluation of the existence, design adequacy, and operating effectiveness of controls mitigating identified risks;
6. **Residual Risk Scoring:** Assessment of residual risk (risk after controls) based on control effectiveness;
7. **Risk Aggregation:** Aggregation of individual risk scores to produce domain-level and overall posture ratings; and
8. **Trend Analysis:** Comparison with prior period assessments to identify risk trends and the effectiveness of remediation efforts.

#### 3.2.2 Risk Scoring Criteria

**Likelihood Scale:**

| Score | Rating | Description |
|---|---|---|
| 5 | Almost Certain | Expected to occur in most circumstances; more than once per year |
| 4 | Likely | Will probably occur in most circumstances; once per one to two years |
| 3 | Possible | Might occur at some time; once per two to five years |
| 2 | Unlikely | Could occur at some time; once per five to ten years |
| 1 | Rare | May occur only in exceptional circumstances; less than once per ten years |

**Impact Scale:**

| Score | Rating | Financial Impact | Operational Impact | Reputational Impact |
|---|---|---|---|---|
| 5 | Catastrophic | > RM [Amount] | Total or near-total service disruption | Severe regulatory sanction; systemic reputational damage |
| 4 | Major | RM [Amount] – RM [Amount] | Significant service disruption (> 4 hours critical systems) | Regulatory investigation; significant media coverage |
| 3 | Moderate | RM [Amount] – RM [Amount] | Moderate service disruption (1–4 hours) | Regulatory inquiry; limited media coverage |
| 2 | Minor | RM [Amount] – RM [Amount] | Minor service degradation (< 1 hour) | Minor complaints; no media coverage |
| 1 | Insignificant | < RM [Amount] | Negligible operational impact | No meaningful reputational impact |

**Risk Rating Matrix:**

| Likelihood ↓ / Impact → | 1 – Insignificant | 2 – Minor | 3 – Moderate | 4 – Major | 5 – Catastrophic |
|---|---|---|---|---|---|
| **5 – Almost Certain** | Medium | High | High | Critical | Critical |
| **4 – Likely** | Low | Medium | High | High | Critical |
| **3 – Possible** | Low | Medium | Medium | High | High |
| **2 – Unlikely** | Low | Low | Medium | Medium | High |
| **1 – Rare** | Low | Low | Low | Medium | Medium |

**Control Effectiveness Rating:**

| Rating | Description |
|---|---|
| Effective | Control is well-designed and operating effectively; residual risk materially reduced |
| Substantially Effective | Control is largely effective with minor gaps; limited residual risk elevation |
| Partially Effective | Control has identifiable gaps in design or operation; some residual risk elevation |
| Ineffective | Control fails to adequately mitigate risk; significant residual risk elevation |
| Absent | No control exists; full inherent risk retained as residual risk |

---

## 4. Technology Risk Posture Overview

### 4.1 Posture Dashboard

*Provide a high-level dashboard view of the technology risk posture across all major risk domains. This section should give readers an immediate and clear understanding of where the greatest risks and control weaknesses lie.*

#### 4.1.1 Risk Domain Heat Map

*Describe the heat map narrative below. If rendered in a document management system or reporting tool, replace with a visual heat map chart.*

| Risk Domain | Inherent Risk | Control Effectiveness | Residual Risk | Trend | Priority |
|---|---|---|---|---|---|
| Cybersecurity | [Critical / High / Medium / Low] | [Effective / Partial / Ineffective] | [Critical / High / Medium / Low] | [↑ / → / ↓] | [1] |
| IT Infrastructure & Resilience | [Rating] | [Rating] | [Rating] | [Trend] | [2] |
| Data Management & Privacy | [Rating] | [Rating] | [Rating] | [Trend] | [3] |
| Third-Party & Outsourcing | [Rating] | [Rating] | [Rating] | [Trend] | [4] |
| Technology Change & Projects | [Rating] | [Rating] | [Rating] | [Trend] | [5] |
| Cloud & Emerging Technology | [Rating] | [Rating] | [Rating] | [Trend] | [6] |
| Operational Technology | [Rating] | [Rating] | [Rating] | [Trend] | [7] |
| IT Governance & Compliance | [Rating] | [Rating] | [Rating] | [Trend] | [8] |
| Business Continuity & DR | [Rating] | [Rating] | [Rating] | [Trend] | [9] |
| Fraud & Financial Crime Tech | [Rating] | [Rating] | [Rating] | [Trend] | [10] |

#### 4.1.2 Risk Count Summary

| Risk Category | Critical | High | Medium | Low | Total |
|---|---|---|---|---|---|
| Open Risks (current period) | [#] | [#] | [#] | [#] | [#] |
| New Risks (identified this period) | [#] | [#] | [#] | [#] | [#] |
| Closed Risks (remediated this period) | [#] | [#] | [#] | [#] | [#] |
| Escalated Risks (from prior period) | [#] | [#] | [#] | [#] | [#] |
| De-escalated Risks | [#] | [#] | [#] | [#] | [#] |
| **Net Movement** | [+/-#] | [+/-#] | [+/-#] | [+/-#] | [+/-#] |

#### 4.1.3 Risk Appetite Compliance

*Compare the current technology risk posture against Board-approved risk appetite statements for each technology risk domain.*

| Risk Domain | Risk Appetite Statement | Appetite Threshold | Current Level | Status |
|---|---|---|---|---|
| Cybersecurity | [e.g., Zero tolerance for successful ransomware incidents affecting core systems] | [Threshold] | [Current] | [Within / Breached] |
| Infrastructure Availability | [e.g., Core banking availability ≥ 99.9%] | [Threshold] | [Current] | [Within / Breached] |
| Data Privacy | [e.g., Zero reportable personal data breaches] | [Threshold] | [Current] | [Within / Breached] |
| Third-Party Concentration | [e.g., No single third party to exceed X% of critical technology services] | [Threshold] | [Current] | [Within / Breached] |
| Technology Change | [e.g., ≤ X% of material changes resulting in unplanned incidents] | [Threshold] | [Current] | [Within / Breached] |

### 4.2 Period Comparison

*Describe the evolution of the technology risk posture compared to the prior assessment period. Explain the key drivers of any changes.*

#### 4.2.1 Posture Trend Analysis

| Metric | Current Period | Prior Period | Change | Commentary |
|---|---|---|---|---|
| Overall Risk Rating | [Rating] | [Rating] | [↑ / → / ↓] | [Brief explanation] |
| Total Open Risks | [#] | [#] | [+/-#] | [Brief explanation] |
| Critical Risks | [#] | [#] | [+/-#] | [Brief explanation] |
| Control Effectiveness Score | [Score/100] | [Score/100] | [+/-] | [Brief explanation] |
| Overdue Remediation Items | [#] | [#] | [+/-#] | [Brief explanation] |
| Technology Incidents | [#] | [#] | [+/-#] | [Brief explanation] |
| Mean Time to Detect (MTTD) | [Hours/Days] | [Hours/Days] | [Change] | [Brief explanation] |
| Mean Time to Respond (MTTR) | [Hours/Days] | [Hours/Days] | [Change] | [Brief explanation] |

---

## 5. Asset and Item Identification

*This section provides the comprehensive register of technology assets and items subject to the risk posture assessment. Asset identification is the foundation of effective technology risk management and is required to ensure all material technology risks are identified and assessed.*

### 5.1 Asset Identification Methodology

*Describe how assets are identified, including discovery methods, sources of data, and how the asset register is maintained. Reference the tools and processes used for automated and manual asset discovery.*

[Organization Name] maintains a comprehensive technology asset inventory through the following mechanisms:

- **Automated Asset Discovery:** [Tool name, e.g., ServiceNow, Qualys, Tenable] is used for automated discovery and continuous inventory of IT assets connected to [Organization Name]'s network environments;
- **Manual Registration:** Technology owners are required to register assets in the Configuration Management Database (CMDB) upon procurement, deployment, and decommissioning;
- **Cloud Asset Management:** Cloud service provider native tools (e.g., [AWS Config / Azure Resource Manager / GCP Asset Inventory]) are used to maintain inventory of cloud-hosted assets;
- **Periodic Reconciliation:** Quarterly reconciliation between the CMDB, financial asset register, and automated discovery outputs is performed to identify discrepancies; and
- **Third-Party Asset Identification:** Material outsourced technology services are identified through the Third-Party Risk Register and associated due diligence records.

**Asset Identification Confidence Rating:**

| Asset Category | Discovery Method | Coverage Estimate | Confidence |
|---|---|---|---|
| Network Infrastructure | Automated + Manual | [X%] | [High / Medium / Low] |
| Server and Compute | Automated + Manual | [X%] | [High / Medium / Low] |
| Endpoint Devices | Automated + Manual | [X%] | [High / Medium / Low] |
| Cloud Assets | Automated (CSP tools) | [X%] | [High / Medium / Low] |
| Applications | Manual (CMDB) | [X%] | [High / Medium / Low] |
| Data Assets | Manual (Data Inventory) | [X%] | [High / Medium / Low] |
| Third-Party Services | Manual (TPR Register) | [X%] | [High / Medium / Low] |

### 5.2 Technology Asset Register Summary

*The Technology Asset Register below provides a summary-level view of all technology assets within scope. The detailed asset register is maintained in [System/Tool Name] and is referenced in Appendix A.*

#### 5.2.1 Asset Count by Category

| Asset Category | Sub-Category | Total Count | Critical Assets | Non-Critical Assets | Last Updated |
|---|---|---|---|---|---|
| **IT Infrastructure** | Servers (Physical) | [#] | [#] | [#] | [Date] |
| | Servers (Virtual) | [#] | [#] | [#] | [Date] |
| | Network Devices (Routers/Switches) | [#] | [#] | [#] | [Date] |
| | Firewalls and Security Appliances | [#] | [#] | [#] | [Date] |
| | Storage Systems | [#] | [#] | [#] | [Date] |
| | Data Centre Facilities | [#] | [#] | [#] | [Date] |
| **Endpoints** | Workstations / Desktops | [#] | [#] | [#] | [Date] |
| | Laptops | [#] | [#] | [#] | [Date] |
| | Mobile Devices (Corporate) | [#] | [#] | [#] | [Date] |
| | ATMs and Self-Service Terminals | [#] | [#] | [#] | [Date] |
| | Point of Sale Terminals | [#] | [#] | [#] | [Date] |
| **Applications** | Core Banking System | [#] | [#] | [#] | [Date] |
| | Payments Systems | [#] | [#] | [#] | [Date] |
| | Internet / Mobile Banking | [#] | [#] | [#] | [Date] |
| | Enterprise Applications | [#] | [#] | [#] | [Date] |
| | Custom / In-House Applications | [#] | [#] | [#] | [Date] |
| **Cloud Services** | IaaS | [#] | [#] | [#] | [Date] |
| | PaaS | [#] | [#] | [#] | [Date] |
| | SaaS | [#] | [#] | [#] | [Date] |
| **Data Assets** | Customer Data Repositories | [#] | [#] | [#] | [Date] |
| | Financial Data Repositories | [#] | [#] | [#] | [Date] |
| | Operational Data Repositories | [#] | [#] | [#] | [Date] |
| **Third-Party Services** | Material Outsourcing Arrangements | [#] | [#] | [#] | [Date] |
| | Critical Service Providers | [#] | [#] | [#] | [Date] |
| **Total** | | **[Total]** | **[Total Critical]** | **[Total Non-Critical]** | |

#### 5.2.2 Critical Asset Identification

*The following assets have been identified as critical assets based on their role in supporting [Organization Name]'s critical business functions, their classification under BNM RMiT criticality criteria, and their potential impact on customers, operations, or regulatory compliance if compromised or unavailable.*

**Criticality Assessment Criteria:**

An asset is classified as critical if one or more of the following criteria are met:

- Directly supports a critical business function or service as defined in [Organization Name]'s Business Impact Analysis;
- Processes, stores, or transmits customer financial data or personal data at scale;
- Required to meet regulatory reporting or payment clearing obligations;
- Failure or compromise would result in a significant incident as defined in BNM's Incident Reporting Framework; or
- Has no adequate backup, failover, or alternative available within the required recovery time objective.

**Critical Asset Register (Summary):**

| Asset ID | Asset Name | Asset Type | Business Function Supported | Criticality Basis | Owner | Location |
|---|---|---|---|---|---|---|
| [ASSET-001] | [e.g., Core Banking Platform — Production] | Application | [e.g., Retail and Corporate Banking] | [e.g., Critical Business Function, Customer Data] | [Role / Name] | [Location] |
| [ASSET-002] | [e.g., Real-Time Gross Settlement Interface] | Application / Interface | [e.g., Payments — Interbank] | [e.g., Regulatory / Payment Obligation] | [Role / Name] | [Location] |
| [ASSET-003] | [e.g., Primary Data Centre — DC1] | Infrastructure | [All critical systems] | [e.g., Hosts all critical systems] | [Role / Name] | [Location] |
| [ASSET-004] | [e.g., Internet Banking Platform] | Application | [e.g., Retail Digital Banking] | [e.g., Customer-facing, personal data] | [Role / Name] | [Location] |
| [ASSET-005] | [e.g., Customer Data Warehouse] | Data Asset | [e.g., Analytics, Reporting, CRM] | [e.g., Contains personal data of [#] customers] | [Role / Name] | [Location] |
| [ASSET-006] | [Asset Name] | [Type] | [Function] | [Basis] | [Owner] | [Location] |
| [ASSET-007] | [Asset Name] | [Type] | [Function] | [Basis] | [Owner] | [Location] |
| [ASSET-008] | [Asset Name] | [Type] | [Function] | [Basis] | [Owner] | [Location] |

*For the complete critical asset register, refer to **Appendix A: Detailed Technology Asset Register**.*

### 5.3 Technology Landscape Map

*Describe the overall technology landscape and architecture, including the key layers of the technology stack and how assets interact. This provides context for the risk assessment.*

#### 5.3.1 Technology Architecture Layers

| Layer | Description | Key Assets / Systems | Known Risk Areas |
|---|---|---|---|
| **User / Presentation Layer** | Customer-facing and internal user interfaces | [Internet banking portal, mobile app, internal portals] | [Fraud, phishing, access control] |
| **Application Layer** | Business applications and processing systems | [Core banking, payments, CRM, HR] | [Application vulnerabilities, change risk] |
| **Integration / API Layer** | APIs, middleware, and system integration | [API gateway, ESB, interbank connectors] | [API security, data leakage] |
| **Data Layer** | Databases, data warehouses, and storage | [Oracle DB, SQL Server, data warehouse] | [Data integrity, privacy, retention] |
| **Infrastructure Layer** | Servers, compute, and virtualisation | [VMware, physical servers, HCI] | [Patch management, end-of-life systems] |
| **Network Layer** | LAN, WAN, internet connectivity, and segmentation | [Core switches, firewalls, MPLS] | [Network segmentation, DDoS] |
| **Facilities Layer** | Data centres and physical infrastructure | [DC1, DC2, branch IT rooms] | [Physical security, environmental] |
| **Cloud Layer** | Cloud-hosted services and platforms | [IaaS, SaaS subscriptions] | [Cloud misconfiguration, shared responsibility] |

---

## 6. Classification and Categorisation

*This section documents the classification and categorisation of technology assets and risks. Classification ensures that appropriate controls are applied commensurate with the sensitivity, criticality, and regulatory significance of each asset.*

### 6.1 Asset Classification Framework

*Describe [Organization Name]'s asset classification framework and how it aligns with regulatory requirements and industry best practices.*

[Organization Name] applies a multi-dimensional asset classification framework that assigns each technology asset a classification across the following dimensions:

- **Confidentiality Classification:** Based on the sensitivity of data processed, stored, or transmitted;
- **Criticality Classification:** Based on the impact of loss or degradation on business operations and regulatory obligations; and
- **Regulatory Significance:** Based on whether the asset is subject to specific regulatory requirements or contains regulated data.

#### 6.1.1 Confidentiality Classification

| Classification Level | Definition | Examples | Required Controls |
|---|---|---|---|
| **Strictly Confidential** | Highest sensitivity; disclosure would cause severe harm to [Organization Name], customers, or regulatory standing | Cryptographic keys, board papers, customer financial data, personal data at scale | Encryption at rest and in transit; strict access control; enhanced logging; DLP |
| **Confidential** | Sensitive business information; restricted to authorised personnel | Internal reports, HR records, contracts, system configurations | Encryption where practical; role-based access; logging |
| **Internal** | For internal use only; not for public disclosure | Internal procedures, operational data, meeting minutes | Access restricted to employees and authorised parties |
| **Public** | Approved for public disclosure | Published policies, marketing materials, public website content | Standard integrity controls |

#### 6.1.2 Criticality Classification

| Criticality Level | Definition | Recovery Time Objective (RTO) | Recovery Point Objective (RPO) |
|---|---|---|---|
| **Mission Critical** | Loss or unavailability causes immediate and severe impact on core banking operations, regulatory obligations, or customer services | ≤ [X] hours | ≤ [X] minutes |
| **Business Critical** | Loss causes significant operational disruption but can be managed for a limited period | ≤ [X] hours | ≤ [X] hours |
| **Business Important** | Loss causes operational inconvenience; workarounds available | ≤ [X] days | ≤ [X] hours |
| **Non-Critical** | Loss has minimal immediate operational impact; can be restored from backup within standard timeframes | ≤ [X] days | ≤ [X] days |

#### 6.1.3 Asset Classification Summary

| Asset Category | Total Assets | Strictly Confidential | Confidential | Internal | Public | Mission Critical | Business Critical | Business Important | Non-Critical |
|---|---|---|---|---|---|---|---|---|---|
| Applications | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Infrastructure | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Endpoints | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Data Assets | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Cloud Services | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Third-Party Services | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |

### 6.2 Risk Domain Categorisation

*Categorise the technology risks identified in this assessment by risk domain. Risk domain categorisation supports targeted risk management and reporting.*

#### 6.2.1 Technology Risk Domains

[Organization Name] categorises technology risks into the following domains, aligned with BNM RMiT and industry frameworks:

| Risk Domain | Description | BNM RMiT Reference | Risk Count (Current) |
|---|---|---|---|
| **Cybersecurity Risk** | Risks arising from cyber threats including malware, ransomware, phishing, DDoS, and unauthorized access | [Clause reference] | [#] |
| **IT Infrastructure Risk** | Risks related to IT infrastructure availability, reliability, capacity, and end-of-life management | [Clause reference] | [#] |
| **Data Management and Privacy Risk** | Risks related to data quality, integrity, retention, disposal, and unauthorised disclosure of personal or sensitive data | [Clause reference] | [#] |
| **Third-Party and Outsourcing Risk** | Risks arising from reliance on third-party service providers, including concentration risk and vendor performance risk | [Clause reference] | [#] |
| **Technology Change Risk** | Risks introduced by technology changes, upgrades, projects, and deployments | [Clause reference] | [#] |
| **Cloud and Emerging Technology Risk** | Risks specific to cloud service consumption, AI/ML adoption, and emerging technology deployments | [Clause reference] | [#] |
| **Business Continuity and Resilience Risk** | Risks to [Organization Name]'s ability to maintain or recover critical technology services following a disruption | [Clause reference] | [#] |
| **Fraud and Financial Crime Technology Risk** | Technology risks enabling or facilitating financial fraud, money laundering, or other financial crimes | [Clause reference] | [#] |
| **IT Governance and Compliance Risk** | Risks arising from inadequate IT governance, non-compliance with regulatory requirements, or policy gaps | [Clause reference] | [#] |
| **Operational Technology Risk** | Risks related to OT systems, physical security technology, and building management systems | [Clause reference] | [#] |

#### 6.2.2 Risk Categorisation by Business Impact

| Risk Domain | Customer Impact | Regulatory Impact | Financial Impact | Operational Impact |
|---|---|---|---|---|
| Cybersecurity Risk | [High / Medium / Low] | [High / Medium / Low] | [High / Medium / Low] | [High / Medium / Low] |
| IT Infrastructure Risk | [Rating] | [Rating] | [Rating] | [Rating] |
| Data Management and Privacy Risk | [Rating] | [Rating] | [Rating] | [Rating] |
| Third-Party and Outsourcing Risk | [Rating] | [Rating] | [Rating] | [Rating] |
| Technology Change Risk | [Rating] | [Rating] | [Rating] | [Rating] |
| Cloud and Emerging Technology Risk | [Rating] | [Rating] | [Rating] | [Rating] |
| Business Continuity and Resilience Risk | [Rating] | [Rating] | [Rating] | [Rating] |
| Fraud and Financial Crime Technology Risk | [Rating] | [Rating] | [Rating] | [Rating] |
| IT Governance and Compliance Risk | [Rating] | [Rating] | [Rating] | [Rating] |
| Operational Technology Risk | [Rating] | [Rating] | [Rating] | [Rating] |

---

## 7. Owner and Custodian Register

*This section documents the accountability and responsibility structure for technology assets. Clear ownership and custodianship are fundamental to effective technology risk management and are required under BNM RMiT.*

### 7.1 Ownership and Custodianship Framework

*Describe [Organization Name]'s framework for assigning and maintaining technology asset ownership and custodianship, including the definitions of each role.*

#### 7.1.1 Role Definitions

[Organization Name] distinguishes the following roles in relation to technology asset governance:

| Role | Definition | Accountabilities |
|---|---|---|
| **Asset Owner** | Senior business or technology leader accountable for the purpose, use, and risk profile of an asset | Risk acceptance; classification decisions; access approval; compliance responsibility |
| **Asset Custodian** | Technical function or team responsible for the day-to-day operation, maintenance, and security of an asset on behalf of the owner | Operational management; patch management; monitoring; incident response; backup |
| **Data Owner** | Business function accountable for data assets, including classification, access policy, and data lifecycle decisions | Data classification; access governance; retention and disposal decisions |
| **Data Custodian** | IT function responsible for implementing data management controls on behalf of the data owner | Data storage; backup; encryption; access enforcement |
| **Process Owner** | Business or technology leader accountable for a technology-enabled business process | Process design; control effectiveness; process risk acceptance |
| **Third-Party Relationship Manager** | Individual responsible for managing the ongoing relationship with a specific third-party technology service provider | Contract management; performance monitoring; risk escalation |

### 7.2 Owner and Custodian Register — Critical Assets

*The following table documents the assigned owners and custodians for all critical technology assets. The complete register for all assets is maintained in [System Name] and summarised in Appendix B.*

| Asset ID | Asset Name | Asset Type | Asset Owner | Asset Owner Role | Asset Custodian | Asset Custodian Team | Last Ownership Confirmation | Next Confirmation Due |
|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking Platform — Production] | Application | [Name] | [CTO / Head of Core Systems] | [Name] | [Core Banking Operations Team] | [Date] | [Date] |
| [ASSET-002] | [RTGS Interface] | Application | [Name] | [Head of Payments Technology] | [Name] | [Payments Operations Team] | [Date] | [Date] |
| [ASSET-003] | [Primary Data Centre — DC1] | Infrastructure | [Name] | [Head of Infrastructure] | [Name] | [Data Centre Operations] | [Date] | [Date] |
| [ASSET-004] | [Internet Banking Platform] | Application | [Name] | [Head of Digital Banking] | [Name] | [Digital Technology Team] | [Date] | [Date] |
| [ASSET-005] | [Customer Data Warehouse] | Data Asset | [Name] | [Chief Data Officer] | [Name] | [Data Engineering Team] | [Date] | [Date] |
| [ASSET-006] | [Asset Name] | [Type] | [Name] | [Role] | [Name] | [Team] | [Date] | [Date] |
| [ASSET-007] | [Asset Name] | [Type] | [Name] | [Role] | [Name] | [Team] | [Date] | [Date] |
| [ASSET-008] | [Asset Name] | [Type] | [Name] | [Role] | [Name] | [Team] | [Date] | [Date] |

### 7.3 Ownership Gaps and Issues

*Document any identified gaps in asset ownership or custodianship, including assets where ownership has not been formally assigned, where ownership confirmation is overdue, or where there are disputes or ambiguities regarding responsibility.*

| Issue ID | Asset ID | Asset Name | Issue Description | Risk Implication | Responsible for Resolution | Target Resolution Date | Status |
|---|---|---|---|---|---|---|---|
| [OWN-001] | [ASSET-XXX] | [Asset Name] | [e.g., Owner departed; no successor assigned] | [e.g., Risk decisions cannot be made; access reviews overdue] | [Role] | [Date] | [Open / In Progress] |
| [OWN-002] | [ASSET-XXX] | [Asset Name] | [Issue description] | [Risk implication] | [Role] | [Date] | [Status] |
| [OWN-003] | [ASSET-XXX] | [Asset Name] | [Issue description] | [Risk implication] | [Role] | [Date] | [Status] |

---

## 8. Status and Lifecycle Stage

*This section documents the operational status and lifecycle stage of all technology assets within scope. Lifecycle management is critical to managing technology risk, particularly risks arising from end-of-life systems, unsupported software, and technology obsolescence.*

### 8.1 Asset Status Framework

*Describe [Organization Name]'s framework for defining and tracking asset operational status and lifecycle stages.*

#### 8.1.1 Operational Status Definitions

| Status | Definition |
|---|---|
| **Active / Production** | Asset is fully operational and in active production use |
| **Active / Standby** | Asset is operational and configured for failover but not actively processing workloads |
| **Under Maintenance** | Asset is temporarily unavailable due to planned maintenance; return to service expected |
| **Decommissioning** | Asset is in the process of being retired; phased migration or shutdown in progress |
| **Decommissioned** | Asset has been formally retired and removed from the production environment |
| **Development / Test** | Asset exists in a non-production environment for development or testing purposes |
| **Pending Deployment** | Asset has been procured or built but not yet deployed to production |

#### 8.1.2 Lifecycle Stage Definitions

| Lifecycle Stage | Description | Typical Duration | Key Risk Considerations |
|---|---|---|---|
| **Planning** | Asset is being evaluated, designed, or procured | [Duration] | Requirements risk; procurement risk; security-by-design |
| **Implementation** | Asset is being deployed, configured, or integrated | [Duration] | Change risk; integration risk; security misconfiguration |
| **Operations** | Asset is in active production use | [Duration] | Availability; patch management; performance; capacity |
| **Evolution** | Asset is being upgraded, enhanced, or migrated | [Duration] | Change risk; data migration risk; regression |
| **End of Life — Managed** | Asset has passed vendor-supported lifecycle but is maintained under an extended support agreement or managed exception | [Duration] | Elevated vulnerability risk; exception governance; accelerated decommissioning required |
| **End of Life — Unmanaged** | Asset has passed vendor-supported lifecycle with no support arrangement in place | [Duration] | **Critical risk:** unpatched vulnerabilities; immediate escalation required |
| **Decommissioning** | Formal process to retire asset underway | [Duration] | Data migration; access removal; secure disposal |

### 8.2 Asset Status and Lifecycle Register

#### 8.2.1 Status Summary by Asset Category

| Asset Category | Active (Production) | Active (Standby) | Under Maintenance | End of Life (Managed) | End of Life (Unmanaged) | Decommissioning | Total |
|---|---|---|---|---|---|---|---|
| Applications | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Servers (Physical) | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Servers (Virtual) | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Network Devices | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Endpoints | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

#### 8.2.2 End-of-Life Asset Register

*End-of-life (EOL) systems represent a significant technology risk. The following register documents all assets that have reached or are approaching end of vendor-supported lifecycle. EOL assets without approved exception management plans require immediate remediation.*

| Asset ID | Asset Name | Asset Type | Vendor | Product Version | Vendor EOL Date | EOL Status | Extended Support | Exception Approved | Decommission Target | Owner | Risk Rating |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [EOL-001] | [e.g., Windows Server 2012 R2 — [Server Name]] | Server OS | Microsoft | Windows Server 2012 R2 | [Date] | Unmanaged EOL | None | [Yes / No] | [Target Date] | [Name] | [Critical / High] |
| [EOL-002] | [e.g., Oracle Database 11g — [Database Name]] | Database | Oracle | 11g | [Date] | Managed EOL | [Yes — until Date] | Yes | [Target Date] | [Name] | [High] |
| [EOL-003] | [Asset Name] | [Type] | [Vendor] | [Version] | [Date] | [Status] | [Yes/No] | [Yes/No] | [Date] | [Name] | [Rating] |
| [EOL-004] | [Asset Name] | [Type] | [Vendor] | [Version] | [Date] | [Status] | [Yes/No] | [Yes/No] | [Date] | [Name] | [Rating] |
| [EOL-005] | [Asset Name] | [Type] | [Vendor] | [Version] | [Date] | [Status] | [Yes/No] | [Yes/No] | [Date] | [Name] | [Rating] |

**EOL Summary Statistics:**

| Metric | Count | % of Total Assets |
|---|---|---|
| Total EOL Assets (all categories) | [#] | [%] |
| EOL Assets — Critical / Mission Critical | [#] | [%] |
| EOL Assets with Approved Exception | [#] | [%] |
| EOL Assets with No Exception (Unmanaged) | [#] | [%] |
| EOL Assets with Decommission Plan in Place | [#] | [%] |
| EOL Assets Due to Reach EOL within 12 Months | [#] | [%] |

#### 8.2.3 Technology Refresh and Decommissioning Pipeline

*Summarise the planned technology refresh and decommissioning activities for the current and upcoming periods.*

| Project / Initiative | Scope | Target Completion | Assets Affected | Budget Allocated | Status |
|---|---|---|---|---|---|
| [e.g., Legacy OS Upgrade Programme Phase 2] | [Upgrade remaining Windows Server 2012 R2 instances] | [Date] | [# assets] | [RM Amount] | [On Track / At Risk / Delayed] |
| [e.g., Core Banking Modernisation] | [Replace legacy core banking system] | [Date] | [# assets] | [RM Amount] | [Status] |
| [e.g., Network Refresh Programme] | [Replace end-of-life network hardware] | [Date] | [# assets] | [RM Amount] | [Status] |
| [Initiative Name] | [Scope] | [Date] | [# assets] | [RM Amount] | [Status] |

---

## 9. Last Review Date and Review History

*This section documents the review history for this Technology Risk Posture Assessment and the underlying asset and risk records. Regular review is required under BNM RMiT Clause 16.7 and [Organization Name]'s Technology Risk Management Policy.*

### 9.1 Assessment Review Schedule

*Describe the review schedule for this assessment and the underlying records, including continuous monitoring activities and formal quarterly reviews.*

| Review Type | Frequency | Responsible Party | Review Criteria | Output |
|---|---|---|---|---|
| **Continuous Monitoring** | Ongoing (daily / weekly) | Technology Risk Management Team | Real-time risk indicators; incident alerts; threat intelligence | Risk register updates; escalation alerts |
| **Operational Review** | Monthly | Head of Technology Risk | KRI threshold monitoring; remediation progress; new risks | Monthly Technology Risk Report |
| **Formal Quarterly Review** | Quarterly | Head of Technology Risk; CTO; CRO | Full posture review; risk appetite compliance; board reporting | Updated Technology Risk Posture Assessment |
| **Annual Comprehensive Review** | Annually | Head of Technology Risk; External/Internal Audit | Complete reassessment of all risks, controls, assets, and posture | Annual Risk Posture Report (this document) |
| **Triggered Review** | Event-driven | Head of Technology Risk | Significant incidents; material changes; regulatory direction | Ad hoc posture update |

### 9.2 Review History — This Document

| Version | Review Date | Review Type | Reviewer | Key Changes / Findings | Approval Status |
|---|---|---|---|---|---|
| 1.0 | [Date] | Initial Assessment | [Name, Role] | Initial document creation | [Approved by / Pending] |
| 1.1 | [Date] | Quarterly Review | [Name, Role] | [Summary of key changes] | [Approved by] |
| 1.2 | [Date] | Quarterly Review | [Name, Role] | [Summary of key changes] | [Approved by] |
| 1.3 | [Date] | Quarterly Review | [Name, Role] | [Summary of key changes] | [Approved by] |
| 2.0 | [Date] | Annual Comprehensive Review | [Name, Role] | [Summary of key changes] | [Approved by] |

### 9.3 Asset Review History — Critical Assets

*The following table documents the last review date and next scheduled review for each critical asset. Asset reviews include re-assessment of classification, ownership, lifecycle status, and associated risks.*

| Asset ID | Asset Name | Last Review Date | Reviewer | Review Type | Findings Summary | Next Review Date | Overdue? |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking Platform] | [Date] | [Name] | [Annual / Triggered] | [e.g., No material changes; controls confirmed effective] | [Date] | [Yes / No] |
| [ASSET-002] | [RTGS Interface] | [Date] | [Name] | [Annual] | [Summary] | [Date] | [Yes / No] |
| [ASSET-003] | [Primary Data Centre] | [Date] | [Name] | [Annual] | [Summary] | [Date] | [Yes / No] |
| [ASSET-004] | [Internet Banking Platform] | [Date] | [Name] | [Triggered — post incident] | [Summary] | [Date] | [Yes / No] |
| [ASSET-005] | [Customer Data Warehouse] | [Date] | [Name] | [Annual] | [Summary] | [Date] | [Yes / No] |

### 9.4 Review Completion Metrics

| Metric | Target | Current Period | Prior Period | Status |
|---|---|---|---|---|
| % Critical Assets Reviewed on Schedule | 100% | [%] | [%] | [On Target / Below Target] |
| % All Assets Reviewed within Cycle | [Target %] | [%] | [%] | [On Target / Below Target] |
| Overdue Asset Reviews | 0 | [#] | [#] | [On Target / Below Target] |
| Average Days Between Reviews (Critical Assets) | ≤ [X] days | [Days] | [Days] | [On Target / Below Target] |
| Quarterly Risk Posture Reviews Completed | 4 per year | [#] | [#] | [On Target / Below Target] |

---

## 10. Technology Risk Assessment Findings

*This section presents the detailed findings from the technology risk assessment, organised by risk domain. Each risk entry provides the information required to understand the risk, assess its significance, and determine appropriate treatment.*

### 10.1 Cybersecurity Risk

*Summarise cybersecurity risks identified during the assessment period, including threats from external and internal actors, vulnerabilities in systems and processes, and the effectiveness of cybersecurity controls.*

#### 10.1.1 Cybersecurity Threat Landscape

*Describe the current cybersecurity threat landscape relevant to [Organization Name], including active threat actors targeting Malaysian financial institutions, prevalent attack techniques, and intelligence received from NACSA, BNM, and industry sources.*

During the assessment period, [Organization Name]'s Cybersecurity team, supported by threat intelligence from [sources, e.g., NACSA, BNM Cybersecurity Division, industry information sharing groups], identified the following key threats:

- **[Threat 1]:** [e.g., Ransomware — increased targeting of Malaysian financial institutions by [threat group], with [# incidents] reported across the sector]
- **[Threat 2]:** [e.g., Business Email Compromise — continued phishing campaigns targeting finance and payments staff]
- **[Threat 3]:** [e.g., Supply chain attacks — compromise of third-party software vendors used by Malaysian FIs]
- **[Threat 4]:** [Description]
- **[Threat 5]:** [Description]

#### 10.1.2 Cybersecurity Risk Register

| Risk ID | Risk Description | Threat Actor | Attack Vector | Affected Assets | Inherent Likelihood | Inherent Impact | Inherent Risk | Key Controls | Control Effectiveness | Residual Risk | Risk Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [CYB-001] | [e.g., Ransomware attack on core banking infrastructure] | External (organised cybercrime) | Phishing / RDP exploitation | Core Banking, Infrastructure | [4] | [5] | [Critical] | [EDR, network segmentation, backup] | [Partial] | [High] | [Name] |
| [CYB-002] | [e.g., Insider threat — privileged access abuse] | Internal malicious | Privileged access | All systems | [3] | [4] | [High] | [PAM, user behaviour analytics] | [Partial] | [High] | [Name] |
| [CYB-003] | [e.g., DDoS attack on internet banking platform] | External | Volumetric/L7 attack | Internet Banking, APIs | [4] | [3] | [High] | [DDoS mitigation service, CDN] | [Effective] | [Medium] | [Name] |
| [CYB-004] | [Risk Description] | [Actor] | [Vector] | [Assets] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Rating] | [Owner] |
| [CYB-005] | [Risk Description] | [Actor] | [Vector] | [Assets] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Rating] | [Owner] |
| [CYB-006] | [Risk Description] | [Actor] | [Vector] | [Assets] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Rating] | [Owner] |

### 10.2 IT Infrastructure and Resilience Risk

*Assess risks related to the availability, reliability, performance, and resilience of [Organization Name]'s IT infrastructure.*

| Risk ID | Risk Description | Affected Assets | Inherent Likelihood | Inherent Impact | Inherent Risk | Key Controls | Control Effectiveness | Residual Risk | Risk Owner |
|---|---|---|---|---|---|---|---|---|---|
| [INF-001] | [e.g., Single point of failure in network core switches] | [Core network, all systems] | [3] | [5] | [High] | [Redundant links; failover configuration] | [Partial] | [High] | [Name] |
| [INF-002] | [e.g., Data centre capacity constraints limiting scalability] | [DC1 — all systems] | [4] | [3] | [High] | [Capacity monitoring; cloud burst plan] | [Partial] | [Medium] | [Name] |
| [INF-003] | [e.g., Prolonged power outage at primary data centre] | [DC1] | [2] | [5] | [High] | [UPS; generators; DR site] | [Substantially Effective] | [Medium] | [Name] |
| [INF-004] | [Risk Description] | [Assets] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Rating] | [Owner] |
| [INF-005] | [Risk Description] | [Assets] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Rating] | [Owner] |

### 10.3 Data Management and Privacy Risk

*Assess risks related to data integrity, confidentiality, retention, disposal, and compliance with PDPA and other data-related regulatory requirements.*

| Risk ID | Risk Description | Data Category | Affected Assets | Inherent Risk | Key Controls | Control Effectiveness | Residual Risk | PDPA Relevance | Risk Owner |
|---|---|---|---|---|---|---|---|---|---|
| [DAT-001] | [e.g., Unauthorised access to customer personal data] | Personal Data | [Customer Database, CRM] | [High] | [Access control, encryption, DLP] | [Partial] | [High] | Yes | [Name] |
| [DAT-002] | [e.g., Personal data retained beyond lawful retention period] | Personal Data | [Multiple repositories] | [Medium] | [Retention policy; automated archival] | [Ineffective] | [High] | Yes | [Name] |
| [DAT-003] | [e.g., Data integrity failure in financial reporting systems] | Financial Data | [Reporting systems] | [High] | [Reconciliation controls; audit logs] | [Effective] | [Low] | No | [Name] |
| [DAT-004] | [Risk Description] | [Category] | [Assets] | [Rating] | [Controls] | [Effectiveness] | [Rating] | [Yes/No] | [Owner] |

### 10.4 Third-Party and Outsourcing Risk

*Assess technology risks arising from [Organization Name]'s reliance on third-party technology service providers.*

| Risk ID | Risk Description | Third Party | Service Criticality | Inherent Risk | Key Controls | Control Effectiveness | Residual Risk | BNM Outsourcing Classified | Risk Owner |
|---|---|---|---|---|---|---|---|---|---|
| [TPR-001] | [e.g., Concentration risk — [Provider] supports [X]% of critical IT services] | [Provider Name] | Critical | [High] | [Concentration monitoring; contingency plan] | [Partial] | [High] | [Yes] | [Name] |
| [TPR-002] | [e.g., Inadequate security controls at cloud service provider] | [CSP Name] | Critical | [High] | [CSP security assessment; contractual controls] | [Partial] | [Medium] | [Yes] | [Name] |
| [TPR-003] | [e.g., Sub-contractor risk — undisclosed fourth parties] | [Provider Name] | Important | [Medium] | [Contract clauses; periodic disclosure] | [Ineffective] | [Medium] | [No] | [Name] |
| [TPR-004] | [Risk Description] | [Provider] | [Criticality] | [Rating] | [Controls] | [Effectiveness] | [Rating] | [Yes/No] | [Owner] |

### 10.5 Technology Change Risk

| Risk ID | Risk Description | Change Category | Affected Systems | Inherent Risk | Key Controls | Control Effectiveness | Residual Risk | Risk Owner |
|---|---|---|---|---|---|---|---|---|
| [CHG-001] | [e.g., Emergency changes bypassing full testing — increased defect introduction rate] | Emergency Change | All systems | [High] | [Emergency change governance; post-implementation review] | [Partial] | [Medium] | [Name] |
| [CHG-002] | [e.g., Inadequate release management for digital channels] | Release Management | Internet/Mobile Banking | [Medium] | [Release calendar; staging environment testing] | [Partial] | [Medium] | [Name] |
| [CHG-003] | [Risk Description] | [Category] | [Systems] | [Rating] | [Controls] | [Effectiveness] | [Rating] | [Owner] |

### 10.6 Cloud and Emerging Technology Risk

| Risk ID | Risk Description | Cloud Provider / Technology | Inherent Risk | Key Controls | Control Effectiveness | Residual Risk | Risk Owner |
|---|---|---|---|---|---|---|---|
| [CLD-001] | [e.g., Cloud misconfiguration exposing sensitive data] | [AWS / Azure / GCP] | [High] | [Cloud security posture management; CSPM tool] | [Partial] | [High] | [Name] |
| [CLD-002] | [e.g., AI/ML model bias and explainability in credit decisioning] | [AI/ML Platform] | [Medium] | [Model governance; explainability controls; human oversight] | [Partial] | [Medium] | [Name] |
| [CLD-003] | [Risk Description] | [Provider / Technology] | [Rating] | [Controls] | [Effectiveness] | [Rating] | [Owner] |

### 10.7 Business Continuity and Resilience Risk

| Risk ID | Risk Description | Critical Function | RTO Requirement | Current RTO Capability | Gap | Inherent Risk | Residual Risk | Risk Owner |
|---|---|---|---|---|---|---|---|---|
| [BCR-001] | [e.g., Inadequate DR capability for core banking — RTO exceeds business requirement] | Core Banking | [X hours] | [Y hours] | [Gap of Z hours] | [High] | [High] | [Name] |
| [BCR-002] | [e.g., DR tests failing to achieve recovery objectives] | [Multiple functions] | [Varies] | [Varies] | [Varies] | [Medium] | [Medium] | [Name] |
| [BCR-003] | [Risk Description] | [Function] | [RTO] | [Capability] | [Gap] | [Rating] | [Rating] | [Owner] |

---

## 11. Control Effectiveness Assessment

*This section provides a comprehensive assessment of the effectiveness of key technology controls. Control effectiveness assessment is essential to understanding the residual risk profile and identifying areas requiring remediation.*

### 11.1 Control Assessment Framework

*Describe the methodology used to assess control effectiveness, including how design adequacy and operating effectiveness are evaluated.*

| Effectiveness Rating | Description | Residual Risk Adjustment |
|---|---|---|
| **Effective** | Control is appropriately designed and operating as intended; objectives consistently met | Risk significantly reduced |
| **Substantially Effective** | Minor gaps in design or operation; objectives largely met | Moderate risk reduction |
| **Partially Effective** | Notable gaps in design or operation; objectives partially met | Limited risk reduction |
| **Ineffective** | Significant gaps in design or operation; objectives not met | Minimal risk reduction |
| **Absent / Not Implemented** | Control does not exist | No risk reduction |

### 11.2 Key Control Effectiveness Summary

| Control Domain | Control | Design Adequacy | Operating Effectiveness | Overall Effectiveness | Last Tested | Next Test Due | Gaps Identified |
|---|---|---|---|---|---|---|---|
| **Access Management** | Privileged Access Management (PAM) | [Adequate / Partial / Inadequate] | [Effective / Partial / Ineffective] | [Rating] | [Date] | [Date] | [Yes / No — detail] |
| | Multi-Factor Authentication (MFA) | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | User Access Reviews | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| **Cybersecurity** | Endpoint Detection and Response (EDR) | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | Security Information and Event Management (SIEM) | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | Vulnerability Management | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | Data Loss Prevention (DLP) | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | Web Application Firewall (WAF) | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| **Infrastructure** | Patch Management | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | Network Segmentation | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | Backup and Recovery | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| **Data Protection** | Encryption at Rest | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | Encryption in Transit | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | Data Masking / Tokenisation | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| **Change Management** | Change Advisory Board | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | Pre-Production Testing | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| **Third-Party Risk** | Vendor Due Diligence | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | Continuous Vendor Monitoring | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| **Resilience** | Business Continuity Planning | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |
| | DR Testing | [Adequacy] | [Effectiveness] | [Rating] | [Date] | [Date] | [Yes / No] |

### 11.3 Control Gap Analysis

*Summarise the key control gaps identified during the assessment and the associated risk exposure.*

| Gap ID | Control Domain | Gap Description | Risk Exposure | Priority | Remediation Owner | Target Date |
|---|---|---|---|---|---|---|
| [GAP-001] | [e.g., Access Management] | [e.g., MFA not enforced for privileged remote access to X% of critical systems] | [High] | [1] | [Name / Role] | [Date] |
| [GAP-002] | [e.g., Patch Management] | [e.g., Critical patches applied beyond 30-day SLA for [X]% of systems] | [High] | [2] | [Name / Role] | [Date] |
| [GAP-003] | [e.g., Data Protection] | [e.g., DLP solution does not cover email exfiltration channel] | [Medium] | [3] | [Name / Role] | [Date] |
| [GAP-004] | [Domain] | [Gap Description] | [Exposure] | [Priority] | [Owner] | [Date] |
| [GAP-005] | [Domain] | [Gap Description] | [Exposure] | [Priority] | [Owner] | [Date] |

---

## 12. Key Risk Indicators and Metrics

*This section presents the Key Risk Indicators (KRIs) used to monitor [Organization Name]'s technology risk posture on a continuous and periodic basis. KRIs provide early warning signals when risk levels are approaching or exceeding acceptable thresholds.*

### 12.1 KRI Framework

*Describe [Organization Name]'s KRI framework, including how KRI thresholds are set, how metrics are collected, and how breaches are escalated.*

[Organization Name] maintains a comprehensive set of technology risk KRIs, reported monthly to the Technology Risk Management Committee and quarterly to the Board Risk Committee. KRI thresholds are aligned with Board-approved risk appetite statements.

**KRI Threshold Definitions:**

| Threshold | Description | Action Required |
|---|---|---|
| **Green** | Within risk appetite; no action required | Continue monitoring |
| **Amber** | Approaching risk appetite boundary; increased monitoring and management attention required | Escalate to management; remediation plan required |
| **Red** | Risk appetite breached; immediate management intervention required | Escalate to Board Risk Committee; immediate remediation |

### 12.2 Technology Risk KRI Dashboard

| KRI ID | KRI Name | Domain | Metric | Target / Green | Amber Threshold | Red Threshold | Current Value | Trend | Status | Owner |
|---|---|---|---|---|---|---|---|---|---|---|
| **Cybersecurity KRIs** | | | | | | | | | | |
| [KRI-CYB-001] | Phishing click rate | Cybersecurity | % users clicking simulated phishing | ≤ [X%] | [X+1]% – [Y%] | > [Y%] | [Z%] | [↑/→/↓] | [G/A/R] | [Name] |
| [KRI-CYB-002] | Critical vulnerability remediation rate (30 days) | Cybersecurity | % critical vulns patched within 30 days | ≥ [X%] | [Y%] – [X-1]% | < [Y%] | [Z%] | [↑/→/↓] | [G/A/R] | [Name] |
| [KRI-CYB-003] | Mean Time to Detect (MTTD) — security incidents | Cybersecurity | Average hours to detect security incident | ≤ [X] hrs | [X+1] – [Y] hrs | > [Y] hrs | [Z] hrs | [↑/→/↓] | [G/A/R] | [Name] |
| [KRI-CYB-004] | Mean Time to Respond (MTTR) | Cybersecurity | Average hours to contain incident | ≤ [X] hrs | [X+1] – [Y] hrs | > [Y] hrs | [Z] hrs | [↑/→/↓] | [G/A/R] | [Name] |
| [KRI-CYB-005] | Security event volume (anomalous) | Cybersecurity | # high/critical SIEM alerts | [Target] | [Amber range] | [Red threshold] | [Count] | [Trend] | [Status] | [Name] |
| **Infrastructure KRIs** | | | | | | | | | | |
| [KRI-INF-001] | Core banking system availability | Infrastructure | % uptime (monthly) | ≥ 99.9% | 99.5% – 99.89% | < 99.5% | [Z%] | [Trend] | [Status] | [Name] |
| [KRI-INF-002] | Internet banking availability | Infrastructure | % uptime (monthly) | ≥ 99.5% | 99.0% – 99.49% | < 99.0% | [Z%] | [Trend] | [Status] | [Name] |
| [KRI-INF-003] | Patch compliance rate (critical patches) | Infrastructure | % systems patched per SLA | ≥ [X%] | [Y%] – [X-1]% | < [Y%] | [Z%] | [Trend] | [Status] | [Name] |
| [KRI-INF-004] | % EOL assets without exception | Infrastructure | % EOL with no approved exception | 0% | 0.1% – 2% | > 2% | [Z%] | [Trend] | [Status] | [Name] |
| **Change Management KRIs** | | | | | | | | | | |
| [KRI-CHG-001] | Change success rate | Change | % changes with no unplanned incidents | ≥ [X%] | [Y%] – [X-1]% | < [Y%] | [Z%] | [Trend] | [Status] | [Name] |
| [KRI-CHG-002] | Emergency change rate | Change | % of all changes classified as emergency | ≤ [X%] | [X+1]% – [Y%] | > [Y%] | [Z%] | [Trend] | [Status] | [Name] |
| **Data and Privacy KRIs** | | | | | | | | | | |
| [KRI-DAT-001] | Personal data breach incidents | Data / Privacy | # confirmed personal data breaches | 0 | 1 | ≥ 2 | [Count] | [Trend] | [Status] | [Name] |
| [KRI-DAT-002] | Data retention compliance rate | Data | % data compliant with retention policy | ≥ [X%] | [Y%] – [X-1]% | < [Y%] | [Z%] | [Trend] | [Status] | [Name] |
| **Third-Party KRIs** | | | | | | | | | | |
| [KRI-TPR-001] | % critical vendors with current assessment | Third-Party | % assessed within 12 months | 100% | 90% – 99% | < 90% | [Z%] | [Trend] | [Status] | [Name] |
| [KRI-TPR-002] | Vendor SLA breach rate | Third-Party | # SLA breaches by critical vendors | 0 per quarter | 1-2 | ≥ 3 | [Count] | [Trend] | [Status] | [Name] |
| **Resilience KRIs** | | | | | | | | | | |
| [KRI-BCR-001] | DR test success rate | Resilience | % DR tests meeting RTO/RPO objectives | 100% | 80% – 99% | < 80% | [Z%] | [Trend] | [Status] | [Name] |
| [KRI-BCR-002] | % BCP plans reviewed within cycle | Resilience | % plans reviewed per schedule | 100% | 90% – 99% | < 90% | [Z%] | [Trend] | [Status] | [Name] |

### 12.3 KRI Breach Log

*Document all KRI breaches during the assessment period, including the actions taken to resolve each breach.*

| KRI ID | KRI Name | Breach Date | Breach Value | Threshold Breached | Root Cause | Action Taken | Resolution Date | Current Status |
|---|---|---|---|---|---|---|---|---|
| [KRI-XXX-XXX] | [KRI Name] | [Date] | [Value] | [Amber / Red] | [Root cause description] | [Action taken] | [Date / Ongoing] | [Resolved / Open] |
| [KRI-XXX-XXX] | [KRI Name] | [Date] | [Value] | [Amber / Red] | [Root cause] | [Action] | [Date] | [Status] |

---

## 13. Emerging and Horizon Risks

*This section identifies technology risks that are emerging or anticipated to become material within the next 12 to 36 months. Early identification of horizon risks allows [Organization Name] to prepare and respond proactively.*

### 13.1 Emerging Risk Assessment

*Describe the process used to identify and assess emerging risks, including the sources of intelligence and horizon scanning activities used.*

[Organization Name] conducts horizon scanning through the following mechanisms:

- Engagement with BNM's cybersecurity intelligence sharing network;
- Participation in [Industry body, e.g., AIBIM, PDRM JSJK] information sharing forums;
- Subscriptions to threat intelligence services provided by [Vendor names];
- Review of NACSA advisories and alerts;
- Engagement with technology vendors and consultants; and
- Internal research and analysis by the Technology Risk Management function.

### 13.2 Emerging Risk Register

| Risk ID | Emerging Risk | Risk Domain | Time Horizon | Potential Impact | Likelihood Assessment | Early Warning Indicators | Preparedness Level | Owner |
|---|---|---|---|---|---|---|---|---|
| [EMR-001] | [e.g., Quantum computing threats to current encryption standards] | Cybersecurity | 3–5 years | [Critical — would compromise current PKI/encryption] | [Low — currently] | [NIST post-quantum standards adoption; vendor announcements] | [Low — planning stage] | [Name] |
| [EMR-002] | [e.g., AI-generated deepfake fraud targeting voice authentication] | Cybersecurity / Fraud | 1–2 years | [High — could undermine customer authentication] | [Medium] | [Vendor advisories; sector fraud reports] | [Medium — controls being assessed] | [Name] |
| [EMR-003] | [e.g., Increased regulatory requirements for AI/ML explainability in financial services] | IT Governance / Compliance | 1–2 years | [High — significant compliance effort required] | [High] | [BNM consultation papers; PDPC guidelines] | [Medium] | [Name] |
| [EMR-004] | [e.g., 5G network adoption creating new attack surfaces for mobile banking] | Cybersecurity / Infrastructure | 2–3 years | [Medium] | [Medium] | [Telco announcements; threat research] | [Low] | [Name] |
| [EMR-005] | [Emerging Risk Description] | [Domain] | [Horizon] | [Impact] | [Likelihood] | [Indicators] | [Preparedness] | [Owner] |
| [EMR-006] | [Emerging Risk Description] | [Domain] | [Horizon] | [Impact] | [Likelihood] | [Indicators] | [Preparedness] | [Owner] |

---

## 14. Remediation and Risk Treatment Plan

*This section documents the risk treatment decisions and remediation plans for all identified risks. Risk treatment options are aligned with [Organization Name]'s Technology Risk Management Policy and BNM RMiT requirements.*

### 14.1 Risk Treatment Options

*[Organization Name] applies the following risk treatment options in accordance with its approved risk management framework:*

| Treatment Option | Description | Conditions for Use |
|---|---|---|
| **Mitigate** | Implement or enhance controls to reduce likelihood or impact | Primary treatment for risks above risk appetite |
| **Accept** | Accept the residual risk without further treatment | Only for risks within risk appetite; requires formal owner sign-off |
| **Transfer** | Transfer risk to a third party (e.g., through insurance or contractual obligations) | Where transfer is cost-effective and appropriate |
| **Avoid** | Cease the activity giving rise to the risk | Where risk cannot be adequately mitigated and activity is not business-critical |

### 14.2 Risk Treatment Register

| Risk ID | Risk Description | Current Residual Risk | Treatment Decision | Treatment Rationale | Remediation Actions | Milestone 1 | Milestone 2 | Target Completion | Accountable Owner | Investment Required | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [CYB-001] | [Ransomware attack on core banking] | [High] | Mitigate | [Control enhancement required to meet risk appetite] | [1. Deploy immutable backup solution; 2. Enhance EDR coverage to 100%; 3. Implement network micro-segmentation] | [Date — EDR 100% coverage] | [Date — Immutable backup live] | [Date] | [Name] | [RM Amount] | [In Progress] |
| [INF-001] | [Single point of failure — network core] | [High] | Mitigate | [Infrastructure resilience required for core availability SLA] | [1. Procure and deploy redundant core switches; 2. Reconfigure for ECMP load balancing] | [Date] | [Date] | [Date] | [Name] | [RM Amount] | [Planned] |
| [DAT-002] | [Personal data retained beyond lawful period] | [High] | Mitigate | [PDPA compliance obligation; zero tolerance for retention breaches] | [1. Implement automated retention enforcement in data management tool; 2. Conduct data remediation exercise for existing non-compliant records] | [Date] | [Date] | [Date] | [Name] | [RM Amount] | [In Progress] |
| [Risk ID] | [Description] | [Rating] | [Treatment] | [Rationale] | [Actions] | [Milestone 1] | [Milestone 2] | [Date] | [Owner] | [Amount] | [Status] |
| [Risk ID] | [Description] | [Rating] | [Treatment] | [Rationale] | [Actions] | [Milestone 1] | [Milestone 2] | [Date] | [Owner] | [Amount] | [Status] |

### 14.3 Remediation Progress Summary

| Domain | Total Remediation Items | Completed | In Progress | Not Started | Overdue | % Complete |
|---|---|---|---|---|---|---|
| Cybersecurity | [#] | [#] | [#] | [#] | [#] | [%] |
| Infrastructure | [#] | [#] | [#] | [#] | [#] | [%] |
| Data / Privacy | [#] | [#] | [#] | [#] | [#] | [%] |
| Third-Party | [#] | [#] | [#] | [#] | [#] | [%] |
| Change Management | [#] | [#] | [#] | [#] | [#] | [%] |
| Cloud / Emerging Tech | [#] | [#] | [#] | [#] | [#] | [%] |
| Resilience | [#] | [#] | [#] | [#] | [#] | [%] |
| Governance | [#] | [#] | [#] | [#] | [#] | [%] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[%]** |

### 14.4 Formally Accepted Risks

*Document all risks that have been formally accepted by an authorised risk owner. Risk acceptance is subject to annual review.*

| Risk ID | Risk Description | Residual Risk Level | Acceptance Rationale | Accepted By | Acceptance Date | Acceptance Expiry | Review Date |
|---|---|---|---|---|---|---|---|
| [ACCEPT-001] | [e.g., Continued operation of legacy system X pending full replacement — managed EOL exception] | [Medium] | [Business case for immediate replacement not approved; extended support in place; compensating controls deployed; replacement planned for FY[XX]] | [CTO / Head of Technology Risk] | [Date] | [Date] | [Date] |
| [ACCEPT-002] | [Risk Description] | [Level] | [Rationale] | [Accepted By] | [Date] | [Date] | [Date] |

---

## 15. Roles and Responsibilities

*This section defines the roles and responsibilities for the governance, preparation, maintenance, and review of this Technology Risk Posture Assessment, as well as the broader technology risk management activities it covers.*

### 15.1 RACI Matrix

*The following RACI matrix defines the roles of each function in relation to key technology risk posture assessment activities. **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

| Activity | Board / BRC | CRO | CTO | Head of Technology Risk | CISO | Business Lines | Internal Audit | Compliance | External Auditor / BNM |
|---|---|---|---|---|---|---|---|---|---|
| **Governance and Oversight** | | | | | | | | | |
| Approve Technology Risk Appetite | A | R | C | C | C | I | I | C | I |
| Review and approve Technology Risk Posture Assessment | A | C | C | R | C | I | I | I | I |
| Board-level escalation of critical risks | A | R | C | C | C | I | I | I | I |
| **Asset Management** | | | | | | | | | |
| Asset identification and registration | I | I | A | C | C | R | I | I | I |
| Asset classification | I | I | A | C | R | C | I | C | I |
| Owner and custodian assignment | I | I | A | C | C | R | I | I | I |
| Asset review and lifecycle management | I | I | A | R | C | C | I | I | I |
| **Risk Assessment** | | | | | | | | | |
| Conduct technology risk assessment | I | C | C | R | C | C | I | C | I |
| Validate risk assessment findings | I | A | C | R | C | I | C | C | I |
| Approve risk treatment decisions | I | A | C | R | C | C | I | C | I |
| **Control Assessment** | | | | | | | | | |
| Control design assessment | I | I | C | R | C | C | A | C | I |
| Control operating effectiveness testing | I | I | I | C | C | I | R | C | C |
| Report control gaps | I | C | C | R | C | I | C | C | I |
| **Monitoring and Reporting** | | | | | | | | | |
| Continuous KRI monitoring | I | I | I | R | C | I | I | I | I |
| Monthly technology risk reporting | I | C | C | R | C | I | I | I | I |
| Quarterly posture assessment update | A | C | C | R | C | I | I | I | I |
| Annual posture assessment (this document) | A | C | C | R | C | I | C | C | I |
| **Incident Response** | | | | | | | | | |
| Technology incident detection and triage | I | I | C | C | R | I | I | I | I |
| Incident escalation to BNM | A | R | C | C | C | I | I | C | I |
| Post-incident risk review | I | C | C | R | R | I | I | I | I |
| **Third-Party Risk** | | | | | | | | | |
| Third-party risk assessment | I | I | C | R | C | C | I | C | I |
| Vendor performance monitoring | I | I | C | C | I | R | I | I | I |
| **Audit and Assurance** | | | | | | | | | |
| Internal audit of technology risk framework | I | I | I | C | I | I | R | I | I |
| External / regulatory examination response | A | R | C | C | C | I | C | C | R |

### 15.2 Key Roles — Detailed Responsibilities

| Role | Name | Responsibilities in Relation to This Document |
|---|---|---|
| **Board Risk Committee (BRC)** | [Committee Members] | Approves technology risk appetite; reviews and endorses the Technology Risk Posture Assessment; escalates material risks to the full Board |
| **Chief Risk Officer (CRO)** | [Name] | Accountable for the overall risk management framework; oversees technology risk posture; presents posture assessment to BRC |
| **Chief Technology Officer (CTO)** | [Name] | Accountable for technology strategy and operations; provides input to risk assessment; accountable for remediation of technology infrastructure risks |
| **Head of Technology Risk** | [Name] | Owns and maintains this document; conducts risk assessments; manages KRI monitoring; reports to CRO and BRC; prepares quarterly posture updates |
| **Chief Information Security Officer (CISO)** | [Name] | Responsible for cybersecurity risk management; provides cybersecurity risk findings and KRI data; leads incident response |
| **Business Line Technology Owners** | [Names / Roles] | Asset owners for business-line technology systems; provide risk input; accountable for remediation within their domains |
| **Head of Internal Audit** | [Name] | Provides independent assurance of the technology risk management framework; conducts control effectiveness testing |
| **Head of Compliance** | [Name] | Ensures technology risk management practices comply with regulatory requirements; coordinates regulatory examination responses |

---

## 16. Review and Approval

### 16.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [Date] | [Name, Role] | Initial draft for internal review |
| 0.2 | [Date] | [Name, Role] | Incorporated feedback from CTO and CISO |
| 0.3 | [Date] | [Name, Role] | Incorporated Internal Audit comments |
| 1.0 | [Date] | [Name, Role] | Final version approved for submission to Board Risk Committee |
| 1.1 | [Date] | [Name, Role] | Q[X] quarterly review update — [summary of changes] |
| 1.2 | [Date] | [Name, Role] | Q[X] quarterly review update — [summary of changes] |
| 1.3 | [Date] | [Name, Role] | Q[X] quarterly review update — [summary of changes] |
| 2.0 | [Date] | [Name, Role] | Annual comprehensive review — FY[YYYY] |

### 16.2 Approval Sign-Off

*This Technology Risk Posture Assessment has been reviewed and approved by the following authorised signatories. By signing, each approver confirms that they have reviewed the document and are satisfied that it accurately reflects [Organization Name]'s technology risk posture as at the assessment date.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk | [Name] | _________________ | [Date] |
| Chief Risk Officer | [Name] | _________________ | [Date] |
| Chief Technology Officer | [Name] | _________________ | [Date] |
| Chief Information Security Officer | [Name] | _________________ | [Date] |
| Chairman, Board Risk Committee | [Name] | _________________ | [Date] |

### 16.3 Board Risk Committee Endorsement

*Record of Board Risk Committee review and endorsement of this Technology Risk Posture Assessment:*

| Parameter | Details |
|---|---|
| **BRC Meeting Date** | [Date] |
| **BRC Meeting Reference** | [Meeting Reference Number] |
| **Agenda Item** | [Agenda Item Number] |
| **Resolution / Decision** | [e.g., The Board Risk Committee reviewed and endorsed the Technology Risk Posture Assessment for the period [Date] to [Date] and noted the management actions and remediation commitments therein.] |
| **BRC Chairman** | [Name] |
| **Minute Confirmed** | [Date] |

---

## 17. References

*This section lists all regulatory frameworks, policy documents, standards, and guidelines referenced in this Technology Risk Posture Assessment.*

### 17.1 Regulatory References

| Reference | Title | Issuing Authority | Publication Date / Version | Clauses Addressed |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | [Date / Version] | **16.7** (Technology Risk Posture Assessment) |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | [Date / Version] | [Other applicable clauses] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 | [Relevant sections] |
| PDPA Regulations | Personal Data Protection Regulations 2013 | Parliament of Malaysia | 2013 | [Relevant regulations] |
| BNM Guidelines on Outsourcing | Guidelines on Outsourcing | Bank Negara Malaysia | [Date] | [Relevant sections] |
| BNM Guidelines on Business Continuity Management | Guidelines on Business Continuity Management | Bank Negara Malaysia | [Date] | [Relevant sections] |
| BNM Incident Reporting | Technology and Cyber Incident Reporting Guidelines | Bank Negara Malaysia | [Date] | [Relevant sections] |
| NACSA | National Cybersecurity Policy | National Cyber Security Agency | [Date] | [Relevant sections] |
| NACSA | Malaysia Cybersecurity Strategy [Year] | National Cyber Security Agency | [Date] | [Relevant sections] |

### 17.2 International Standards and Frameworks

| Standard / Framework | Title | Issuing Body | Version / Year | Application |
|---|---|---|---|---|
| ISO/IEC 27001 | Information Security Management Systems — Requirements | ISO / IEC | [Current version] | Control framework reference |
| ISO/IEC 27005 | Information Security Risk Management | ISO / IEC | [Current version] | Risk assessment methodology |
| NIST SP 800-30 | Guide for Conducting Risk Assessments | NIST | [Current version] | Risk assessment methodology |
| NIST CSF | Cybersecurity Framework | NIST | [Version 2.0] | Cybersecurity control framework |
| COBIT | Control Objectives for Information and Related Technologies | ISACA | [Current version] | IT governance and control |
| [Additional Standard] | [Title] | [Body] | [Version] | [Application] |

### 17.3 Internal References

| Document | Owner | Version | Location |
|---|---|---|---|
| Technology Risk Management Policy | [Owner] | [Version] | [Document Management System location] |
| Information Security Policy | [Owner] | [Version] | [Location] |
| IT Asset Management Policy | [Owner] | [Version] | [Location] |
| Data Classification Policy | [Owner] | [Version] | [Location] |
| Business Continuity Management Policy | [Owner] | [Version] | [Location] |
| Third-Party Risk Management Policy | [Owner] | [Version] | [Location] |
| Change Management Policy | [Owner] | [Version] | [Location] |
| Incident Response Policy and Procedures | [Owner] | [Version] | [Location] |
| Prior Technology Risk Posture Assessment | Head of Technology Risk | [Version] | [Location] |

---

## 18. Appendices

### Appendix A: Detailed Technology Asset Register

*The full Technology Asset Register maintained in [System Name, e.g., ServiceNow CMDB] is reproduced here as at [Date]. This register covers all technology assets within the scope of this assessment.*

*Guidance: Export the complete asset register from the CMDB and paste or attach here. The register must include, at minimum, the following fields for each asset:*

| Field | Description |
|---|---|
| Asset ID | Unique identifier from the CMDB |
| Asset Name | Full descriptive name of the asset |
| Asset Type | Category (server, application, network device, endpoint, cloud service, data asset, etc.) |
| Sub-Type | Specific type within the category |
| Vendor / Manufacturer | Asset vendor or manufacturer |
| Product Name | Product name |
| Version / Model | Software version or hardware model |
| Serial Number / Instance ID | Physical serial number or cloud instance identifier |
| Location | Physical location (data centre, office, cloud region) |
| Environment | Production / DR / Development / Test / UAT |
| Confidentiality Classification | Strictly Confidential / Confidential / Internal / Public |
| Criticality Classification | Mission Critical / Business Critical / Business Important / Non-Critical |
| Lifecycle Stage | Planning / Implementation / Operations / Evolution / EOL Managed / EOL Unmanaged / Decommissioning |
| Operational Status | Active / Standby / Under Maintenance / Decommissioning / Decommissioned |
| Vendor Support Status | Fully Supported / Limited Support / Extended Support / End of Life |
| Vendor EOL Date | Date vendor support ends or ended |
| Asset Owner | Full name and role of asset owner |
| Asset Custodian | Full name and team of asset custodian |
| Business Function Supported | Primary business function(s) this asset supports |
| Last Review Date | Date of most recent formal asset review |
| Next Review Date | Date of next scheduled asset review |
| Date Added to Register | Date asset was first registered |
| Associated Risks | Reference to risks in the risk register |
| Notes | Any additional relevant notes |

*[Attach or insert full asset register export here]*

---

### Appendix B: Owner and Custodian Register — Complete

*This appendix contains the complete Owner and Custodian Register for all technology assets within scope, including assets not listed in the main body of this document.*

*Guidance: Export the complete ownership register from the asset management system and paste or attach here. The register must be consistent with the asset register in Appendix A.*

| Asset ID | Asset Name | Asset Type | Asset Owner Name | Asset Owner Role | Asset Owner Email | Asset Custodian Name | Asset Custodian Team | Custodian Contact | Last Confirmation Date | Next Confirmation Due |
|---|---|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Name] | [Type] | [Name] | [Role] | [Email] | [Name] | [Team] | [Contact] | [Date] | [Date] |
| [ASSET-002] | [Name] | [Type] | [Name] | [Role] | [Email] | [Name] | [Team] | [Contact] | [Date] | [Date] |
| [...] | | | | | | | | | | |

---

### Appendix C: End-of-Life Asset Register — Complete

*This appendix contains the complete register of all technology assets that have reached or are approaching end of vendor-supported lifecycle.*

*Guidance: Ensure this register is reconciled against the asset register in Appendix A. All EOL assets must have a documented exception or decommissioning plan.*

| Asset ID | Asset Name | Asset Type | Vendor | Product | Version | Vendor EOL Date | Extended Support | Extended Support Expiry | Exception Approved | Exception Approver | Exception Approval Date | Compensating Controls | Decommission Plan | Decommission Target Date | Owner | Risk Rating |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [EOL-001] | [Name] | [Type] | [Vendor] | [Product] | [Version] | [Date] | [Yes/No] | [Date if applicable] | [Yes/No] | [Approver] | [Date] | [Summary of compensating controls] | [Plan reference] | [Date] | [Owner] | [Rating] |
| [...] | | | | | | | | | | | | | | | | |

---

### Appendix D: Risk Register — Complete

*This appendix contains the complete Technology Risk Register, including all risks identified across all domains. The risk register is maintained on a continuous basis in [Risk Management System Name] and the version reproduced here reflects the state as at [Date].*

*Guidance: Export the complete risk register and paste or attach here. Include all open, in-monitoring, and recently closed risks.*

| Risk ID | Risk Domain | Risk Category | Risk Description | Threat Source | Vulnerability | Affected Assets | Inherent Likelihood | Inherent Impact | Inherent Risk | Controls in Place | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Risk | Treatment Decision | Risk Owner | Date Identified | Last Review Date | Target Resolution Date | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [CYB-001] | Cybersecurity | External Threat | [Description] | [Threat] | [Vulnerability] | [Assets] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Score] | [Score] | [Rating] | [Treatment] | [Owner] | [Date] | [Date] | [Date] | [Open] | [Notes] |
| [...] | | | | | | | | | | | | | | | | | | | | | |

---

### Appendix E: Control Assessment Detail

*This appendix provides detailed control assessment workpapers supporting the control effectiveness ratings presented in Section 11. For each key control, the assessment covers design adequacy, operating effectiveness, testing performed, and findings.*

#### E.1 Access Management Controls

**Control: Privileged Access Management (PAM)**

| Assessment Parameter | Detail |
|---|---|
| Control Description | [Description of the PAM control, including scope, tools, and processes] |
| Control Objective | [e.g., Ensure privileged access to critical systems is restricted to authorised individuals, monitored, and audited] |
| Regulatory Reference | [e.g., BNM RMiT Clause X.X] |
| Control Owner | [Name / Role] |
| Assessment Date | [Date] |
| Assessor | [Name / Role] |
| Testing Period | [From Date] to [To Date] |
| **Design Adequacy** | |
| Design Assessment | [Adequate / Partially Adequate / Inadequate] |
| Design Findings | [Summary of design assessment findings] |
| **Operating Effectiveness** | |
| Operating Effectiveness Rating | [Effective / Substantially Effective / Partially Effective / Ineffective] |
| Testing Performed | [Description of testing, e.g., sample testing of X privileged access requests; configuration review; log analysis] |
| Sample Size | [e.g., 25 privileged access reviews; X% of privileged accounts] |
| Exceptions Found | [Number and description of exceptions] |
| **Overall Effectiveness** | [Rating] |
| Key Findings and Gaps | [Detailed description of findings] |
| Recommendations | [Recommended remediation actions] |
| Management Response | [Management's response and committed actions] |
| Target Remediation Date | [Date] |

*[Repeat structure for each key control assessed. Additional control workpapers may be maintained separately in the Technology Risk Management workpaper repository at [Location].]*

---

### Appendix F: Incident Log — Assessment Period

*This appendix documents technology incidents that occurred during the assessment period and that are relevant to the technology risk posture.*

| Incident ID | Date | Incident Type | Severity | Systems Affected | Duration | Customer Impact | Root Cause | Regulatory Reporting Required | Reported to BNM | Resolution | Residual Risk | Lessons Learned |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [INC-YYYY-001] | [Date] | [e.g., Cybersecurity — Phishing] | [P1 / P2 / P3 / P4] | [Systems] | [Hours/Days] | [Description / None] | [Root cause] | [Yes / No] | [Yes / No / N/A] | [Resolution summary] | [Risk reference] | [Lessons learned] |
| [INC-YYYY-002] | [Date] | [Type] | [Severity] | [Systems] | [Duration] | [Impact] | [Root cause] | [Yes/No] | [Yes/No] | [Resolution] | [Risk] | [Lessons] |
| [...] | | | | | | | | | | | | |

**Incident Summary Statistics:**

| Metric | P1 (Critical) | P2 (Major) | P3 (Moderate) | P4 (Minor) | Total |
|---|---|---|---|---|---|
| Total Incidents — Assessment Period | [#] | [#] | [#] | [#] | [#] |
| Cybersecurity Incidents | [#] | [#] | [#] | [#] | [#] |
| Infrastructure / Availability Incidents | [#] | [#] | [#] | [#] | [#] |
| Change-Related Incidents | [#] | [#] | [#] | [#] | [#] |
| Third-Party / Vendor Incidents | [#] | [#] | [#] | [#] | [#] |
| Incidents Reported to BNM | [#] | [#] | [#] | [#] | [#] |
| Incidents with Customer Impact | [#] | [#] | [#] | [#] | [#] |
| Mean MTTD (hours) | [Hrs] | [Hrs] | [Hrs] | [Hrs] | [Hrs] |
| Mean MTTR (hours) | [Hrs] | [Hrs] | [Hrs] | [Hrs] | [Hrs] |

---

### Appendix G: Third-Party Risk Assessment Summary

*This appendix summarises the technology risk assessments conducted on material and critical third-party technology service providers during the assessment period.*

| Provider | Service Description | Outsourcing Classification | Assessment Date | Assessment Scope | Overall Risk Rating | Key Findings | Action Required | Next Assessment Due |
|---|---|---|---|---|---|---|---|---|
| [Provider Name] | [Service description, e.g., Cloud Infrastructure (IaaS) — Production workloads] | [Material / Critical / Non-Material] | [Date] | [e.g., SOC 2 Type II review; security questionnaire; on-site visit] | [High / Medium / Low] | [Summary of key findings] | [Actions required] | [Date] |
| [Provider Name] | [Service] | [Classification] | [Date] | [Scope] | [Rating] | [Findings] | [Actions] | [Date] |
| [Provider Name] | [Service] | [Classification] | [Date] | [Scope] | [Rating] | [Findings] | [Actions] | [Date] |

---

### Appendix H: Glossary of Terms

| Term | Definition |
|---|---|
| **Asset Custodian** | The technical function or team responsible for the day-to-day operation, maintenance, and security of a technology asset on behalf of the asset owner |
| **Asset Owner** | The senior business or technology leader who is accountable for the purpose, use, and risk profile of a technology asset |
| **BNM** | Bank Negara Malaysia — the central bank and financial regulatory authority of Malaysia |
| **BRC** | Board Risk Committee — the committee of the Board of Directors responsible for overseeing the organization's risk management framework |
| **CMDB** | Configuration Management Database — the central repository for recording and managing technology assets and their relationships |
| **CNII** | Critical National Information Infrastructure — designated infrastructure whose disruption would have a debilitating impact on national security |
| **Control Effectiveness** | The degree to which a control achieves its intended objective of mitigating a specific risk |
| **DLP** | Data Loss Prevention — technology controls designed to detect and prevent the unauthorised transmission or exfiltration of sensitive data |
| **DR** | Disaster Recovery — the process, policies, and procedures related to restoring IT systems and data following a disruptive event |
| **EDR** | Endpoint Detection and Response — security technology deployed on endpoints to detect, investigate, and remediate threats |
| **EOL** | End of Life — the point at which a technology vendor ceases to provide support, security patches, and updates for a product |
| **IaaS** | Infrastructure as a Service — a cloud service model where virtualized computing infrastructure is provided over the internet |
| **Inherent Risk** | The level of risk before taking into account the effect of existing controls |
| **KRI** | Key Risk Indicator — a metric used to provide early warning signals of increasing risk exposure |
| **MTTD** | Mean Time to Detect — the average time between the occurrence of an incident and its detection |
| **MTTR** | Mean Time to Respond / Resolve — the average time between incident detection and containment or resolution |
| **NACSA** | National Cyber Security Agency — Malaysia's national authority responsible for coordination of cybersecurity efforts |
| **PAM** | Privileged Access Management — controls and processes to manage and monitor access by privileged users to critical systems |
| **PaaS** | Platform as a Service — a cloud service model providing a platform for developing, running, and managing applications |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **Residual Risk** | The level of risk remaining after taking into account the effect of existing controls |
| **RMiT** | Risk Management in Technology — BNM's policy document establishing requirements for technology risk management in financial institutions |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time, expressed as the point in time to which data must be recovered |
| **RTO** | Recovery Time Objective — the maximum acceptable duration of downtime for a system or process following a disruptive event |
| **SaaS** | Software as a Service — a cloud service model where software applications are provided over the internet on a subscription basis |
| **SIEM** | Security Information and Event Management — technology that aggregates and analyses security event data from across the IT environment |
| **WAF** | Web Application Firewall — a security control that monitors, filters, and blocks HTTP traffic to and from a web application |

---

### Appendix I: BNM RMiT Compliance Mapping

*This appendix provides a detailed mapping of this Technology Risk Posture Assessment to applicable BNM RMiT clauses, demonstrating how each requirement is addressed.*

| RMiT Clause | Clause Title / Description | Requirement Summary | How Addressed in This Document | Section Reference | Evidence Location | Compliance Status |
|---|---|---|---|---|---|---|
| **16.7** | **Technology Risk Posture Assessment** | **Financial institutions must conduct a comprehensive technology risk posture assessment and include findings in the annual report** | **This entire document constitutes [Organization Name]'s Technology Risk Posture Assessment prepared pursuant to RMiT Clause 16.7** | **All sections** | **This document** | **[Compliant / Partially Compliant / Non-Compliant]** |
| [Clause] | [Title] | [Requirement] | [How addressed] | [Section] | [Evidence] | [Status] |
| [Clause] | [Title] | [Requirement] | [How addressed] | [Section] | [Evidence] | [Status] |
| [Clause] | [Title] | [Requirement] | [How addressed] | [Section] | [Evidence] | [Status] |
| [Clause] | [Title] | [Requirement] | [How addressed] | [Section] | [Evidence] | [Status] |

**Compliance Summary:**

| Status | Count | % of Applicable Clauses |
|---|---|---|
| Compliant | [#] | [%] |
| Partially Compliant | [#] | [%] |
| Non-Compliant | [#] | [%] |
| **Total Applicable Clauses** | **[#]** | **100%** |

---

### Appendix J: Supporting Evidence Index

*This appendix lists the supporting evidence documents that substantiate the findings, control assessments, and risk ratings in this Technology Risk Posture Assessment. Supporting evidence must be retained for a minimum of [X] years in accordance with [Organization Name]'s Records Retention Policy.*

| Evidence ID | Description | Document Type | Date | Location | Prepared By | Referenced In |
|---|---|---|---|---|---|---|
| [EV-001] | [e.g., Vulnerability scan report — [System Name] — [Date]] | Technical Report | [Date] | [Location] | [Name / Team] | [Section 10.1 / KRI-CYB-002] |
| [EV-002] | [e.g., Privileged access review results — Q[X] [Year]] | Audit Evidence | [Date] | [Location] | [Name / Team] | [Section 11.2 / GAP-001] |
| [EV-003] | [e.g., DR test report — [System] — [Date]] | Test Report | [Date] | [Location] | [Name / Team] | [Section 10.7 / KRI-BCR-001] |
| [EV-004] | [e.g., [Provider] SOC 2 Type II report — FY[YYYY]] | Third-Party Assurance | [Date] | [Location] | [Provider] | [Appendix G] |
| [EV-005] | [e.g., Penetration test report — [Scope] — [Date]] | Technical Report | [Date] | [Location] | [Name / Firm] | [Section 10.1] |
| [EV-006] | [e.g., BCP test exercise results — [Date]] | Test Report | [Date] | [Location] | [Name / Team] | [Section 10.7] |
| [EV-007] | [Evidence Description] | [Type] | [Date] | [Location] | [Author] | [Reference] |
| [EV-008] | [Evidence Description] | [Type] | [Date] | [Location] | [Author] | [Reference] |

---

*End of Document*

---

**Document Control Notice**

This document is subject to [Organization Name]'s Document Management and Records Retention Policy. The current approved version of this document is maintained in [Document Management System Name]. Printed copies of this document are uncontrolled. Before relying on a printed copy, verify currency against the document management system.

For queries regarding this document, contact: **[Head of Technology Risk]** | **[Email]** | **[Phone]**

**[Organization Name]** | Technology Risk Management | [Document ID] v[Version] | [Date]