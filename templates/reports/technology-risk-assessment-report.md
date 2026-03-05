# Technology Risk Assessment Report

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
| **Regulatory Framework** | Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document |
| **Applicable Clauses** | RMiT §9.2 |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution of this document, in whole or in part, is strictly prohibited and may constitute a breach of regulatory obligations under the Financial Services Act 2013 (FSA) and the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Executive Summary](#3-executive-summary)
4. [Asset and Item Identification](#4-asset-and-item-identification)
5. [Classification and Categorisation](#5-classification-and-categorisation)
6. [Owner and Custodian Register](#6-owner-and-custodian-register)
7. [Status and Lifecycle Stage](#7-status-and-lifecycle-stage)
8. [Last Review Date and Assessment History](#8-last-review-date-and-assessment-history)
9. [Risk Assessment Methodology](#9-risk-assessment-methodology)
10. [Risk Register and Findings](#10-risk-register-and-findings)
11. [Control Effectiveness Assessment](#11-control-effectiveness-assessment)
12. [Residual Risk Summary](#12-residual-risk-summary)
13. [Treatment Plans and Remediation](#13-treatment-plans-and-remediation)
14. [Continuous Monitoring Framework](#14-continuous-monitoring-framework)
15. [Roles and Responsibilities](#15-roles-and-responsibilities)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section defines the intent of this document and its role within the organization's technology risk governance framework.*

This Technology Risk Assessment Report documents the results of a comprehensive technology risk assessment conducted by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Section 9.2**, which mandates financial institutions to implement a structured and systematic approach to identifying, assessing, treating, and monitoring technology risks across all critical technology assets and systems.

This report serves the following objectives:

- To provide a structured inventory and risk profile of all critical technology assets within the scope of the assessment.
- To document identified technology risks, their likelihood, impact, and inherent risk ratings.
- To evaluate the effectiveness of existing controls and determine residual risk exposure.
- To define and track risk treatment plans and remediation actions to bring residual risks within the organization's defined risk appetite and tolerance.
- To support the Board of Directors, Senior Management, and relevant governance committees in fulfilling their oversight responsibilities under the RMiT framework.
- To demonstrate regulatory compliance with BNM's supervisory expectations for technology risk management.

### 1.2 Scope

*Describe the boundaries of this assessment, including which systems, domains, entities, and time periods are covered.*

This report covers the following scope dimensions:

**In Scope:**

| Scope Dimension | Details |
|---|---|
| **Assessment Period** | [Start Date] to [End Date] |
| **Assessment Cycle** | [Quarterly / Annual / Ad Hoc – specify trigger] |
| **Entities Covered** | [Organization Name] and its subsidiaries: [List subsidiaries, if applicable] |
| **Technology Domains** | Infrastructure, Applications, Cybersecurity, Data Management, Third-Party Technology, Cloud Services, Operational Technology (OT) |
| **Asset Classes** | Hardware, Software, Network Components, Data Assets, Cloud Environments, Vendor-Managed Systems |
| **Regulatory Perimeter** | All systems supporting critical business functions (CBFs) as defined under RMiT §9.2 |

**Out of Scope:**

*List any explicitly excluded systems, domains, or entities and provide justification for exclusion.*

- [System / Domain 1] — Reason: [e.g., decommissioned prior to assessment period]
- [System / Domain 2] — Reason: [e.g., managed by separate regulated entity with independent assessment]
- [System / Domain 3] — Reason: [e.g., below materiality threshold per internal policy]

### 1.3 Assessment Trigger

*Indicate whether this assessment was triggered by a scheduled review, a material change, an incident, a regulatory request, or another event.*

| Trigger Type | Details |
|---|---|
| **Trigger** | [Scheduled Quarterly Review / Material Change / Incident / Regulatory Directive / Other] |
| **Trigger Date** | [Date of trigger event] |
| **Initiating Authority** | [Name / Committee] |
| **Assessment Lead** | [Name, Title] |

---

## 2. Regulatory and Policy Context

### 2.1 Regulatory Framework

*This section situates the assessment within the applicable regulatory obligations. Authors should ensure all cited clauses reflect the current version of the BNM RMiT Policy Document.*

[Organization Name] is a licensed financial institution regulated by Bank Negara Malaysia (BNM) under the [Financial Services Act 2013 / Islamic Financial Services Act 2013]. As such, [Organization Name] is required to comply with all applicable BNM policy documents, including the **Risk Management in Technology (RMiT) Policy Document** issued on [Issuance Date], effective [Effective Date].

The RMiT Policy Document establishes a comprehensive framework for the governance and management of technology risk, replacing the earlier Guidelines on Management of IT Risk (MITG). This assessment is conducted in fulfilment of the obligations set out under **RMiT §9.2**, which requires financial institutions to:

- Maintain a current and comprehensive inventory of technology assets.
- Systematically assess the risks associated with each asset.
- Implement controls commensurate with the risk profile.
- Continuously monitor the risk posture and report findings to the Board and Senior Management.

### 2.2 Applicable Regulatory Clauses

| Clause | Title | Relevance to This Report |
|---|---|---|
| RMiT §9.1 | Technology Risk Management Framework | Overarching governance and risk appetite context |
| RMiT §9.2 | Technology Risk Assessment | Primary obligation; asset inventory, risk identification, assessment, and treatment |
| RMiT §9.3 | Technology Risk Monitoring and Reporting | Continuous monitoring and escalation obligations |
| RMiT §10 | Technology Operations | Operational resilience and availability requirements |
| RMiT §11 | Cybersecurity | Cybersecurity risk identification and control assessment |
| RMiT §12 | Technology Service Provider Management | Third-party technology risk obligations |
| RMiT §13 | Technology Audit | Independent assurance requirements |

### 2.3 Internal Policy Alignment

*Reference all internal policies and standards that govern this assessment. Ensure version numbers and effective dates are accurate.*

| Internal Document | Document ID | Version | Effective Date |
|---|---|---|---|
| Technology Risk Management Policy | [Doc ID] | [Ver] | [Date] |
| Information Classification and Handling Policy | [Doc ID] | [Ver] | [Date] |
| Asset Management Policy | [Doc ID] | [Ver] | [Date] |
| Cybersecurity Policy | [Doc ID] | [Ver] | [Date] |
| Third-Party Risk Management Policy | [Doc ID] | [Ver] | [Date] |
| Business Continuity and Disaster Recovery Policy | [Doc ID] | [Ver] | [Date] |
| Incident Management Policy | [Doc ID] | [Ver] | [Date] |
| Change Management Policy | [Doc ID] | [Ver] | [Date] |

---

## 3. Executive Summary

### 3.1 Assessment Overview

*Provide a concise, non-technical summary of the assessment findings suitable for Board and Senior Management consumption. This section should be written last, after all findings are consolidated.*

This Technology Risk Assessment Report presents the findings of the [Quarterly / Annual / Ad Hoc] technology risk assessment conducted for [Organization Name] for the period [Start Date] to [End Date]. The assessment was performed in accordance with BNM RMiT §9.2 requirements and [Organization Name]'s internal Technology Risk Management Policy.

A total of **[X]** technology assets were assessed across **[Y]** technology domains. The assessment identified **[Z]** risks, of which:

| Risk Rating | Count | Percentage |
|---|---|---|
| Critical | [#] | [%] |
| High | [#] | [%] |
| Medium | [#] | [%] |
| Low | [#] | [%] |
| **Total** | **[#]** | **100%** |

### 3.2 Key Findings

*Summarise the top findings requiring immediate Board and Senior Management attention. Each finding should reference the relevant section of this report for detail.*

1. **[Finding 1 — Critical/High]:** [Brief description of the finding, affected asset(s), and risk implication.] — See §10.
2. **[Finding 2 — Critical/High]:** [Brief description.] — See §10.
3. **[Finding 3 — High]:** [Brief description.] — See §10.
4. **[Finding 4 — Medium]:** [Brief description.] — See §10.
5. **[Finding 5 — Medium]:** [Brief description.] — See §10.

### 3.3 Overall Risk Posture

*Provide the organization's current overall technology risk posture and compare it against the defined risk appetite.*

| Metric | Current Period | Previous Period | Trend |
|---|---|---|---|
| Overall Inherent Risk Rating | [Critical / High / Medium / Low] | [Rating] | [↑ / ↓ / →] |
| Overall Residual Risk Rating | [Critical / High / Medium / Low] | [Rating] | [↑ / ↓ / →] |
| Open Critical/High Risks | [#] | [#] | [↑ / ↓ / →] |
| Overdue Treatment Actions | [#] | [#] | [↑ / ↓ / →] |
| Within Risk Appetite | [Yes / No / Partially] | [Yes / No / Partially] | — |

### 3.4 Management Recommendations

*List the top recommended actions for Senior Management decision and prioritization.*

1. [Recommendation 1 — Owner: Name/Role — Target Date: Date]
2. [Recommendation 2 — Owner: Name/Role — Target Date: Date]
3. [Recommendation 3 — Owner: Name/Role — Target Date: Date]
4. [Recommendation 4 — Owner: Name/Role — Target Date: Date]
5. [Recommendation 5 — Owner: Name/Role — Target Date: Date]

---

## 4. Asset and Item Identification

### 4.1 Asset Identification Methodology

*Describe how technology assets were identified for inclusion in this assessment. Reference the tools, processes, and data sources used to compile the asset inventory.*

The asset identification process for this assessment was conducted using the following approach:

- **Automated Discovery:** [Describe tools used, e.g., network scanning tools, CMDB queries, cloud asset management platforms.]
- **Manual Enumeration:** [Describe manual processes, e.g., interviews with system owners, IT operations team walkthroughs.]
- **CMDB Reconciliation:** Asset records were reconciled against the Configuration Management Database (CMDB) maintained by [IT Operations / ITSM team].
- **Business Impact Analysis (BIA) Alignment:** Assets supporting Critical Business Functions (CBFs) were prioritised in accordance with the BIA conducted on [Date].
- **Third-Party Asset Inclusion:** Technology assets managed by third-party service providers but falling within [Organization Name]'s operational perimeter were included where applicable.

### 4.2 Asset Inventory — Infrastructure

*Complete this table for all infrastructure assets identified within the assessment scope. Add rows as required.*

| Asset ID | Asset Name | Asset Type | Description | Location | IP Address / Hostname | Serial Number / Tag | Discovery Method |
|---|---|---|---|---|---|---|---|
| INFRA-001 | [Asset Name] | [Server / Network Device / Storage / etc.] | [Brief description of function] | [Data Centre / Cloud Region / Branch] | [IP / Hostname] | [Serial / Tag] | [CMDB / Scan / Manual] |
| INFRA-002 | [Asset Name] | [Type] | [Description] | [Location] | [IP / Hostname] | [Serial / Tag] | [Method] |
| INFRA-003 | [Asset Name] | [Type] | [Description] | [Location] | [IP / Hostname] | [Serial / Tag] | [Method] |
| … | … | … | … | … | … | … | … |

### 4.3 Asset Inventory — Applications

*Complete this table for all application assets identified within the assessment scope.*

| Asset ID | Application Name | Application Type | Technology Stack | Version | Deployment Model | Hosting Environment | Business Function Supported |
|---|---|---|---|---|---|---|---|
| APP-001 | [Application Name] | [Core Banking / Payment / CRM / etc.] | [Tech stack] | [Version] | [On-Premise / Cloud / Hybrid] | [Data Centre / AWS / Azure / etc.] | [CBF or business process supported] |
| APP-002 | [Application Name] | [Type] | [Stack] | [Version] | [Deployment] | [Environment] | [Function] |
| APP-003 | [Application Name] | [Type] | [Stack] | [Version] | [Deployment] | [Environment] | [Function] |
| … | … | … | … | … | … | … | … |

### 4.4 Asset Inventory — Data Assets

*Complete this table for all significant data assets identified within the assessment scope.*

| Asset ID | Data Asset Name | Data Type | Format | Storage Location | Volume / Scale | Regulatory Classification | Linked Systems |
|---|---|---|---|---|---|---|---|
| DATA-001 | [Data Asset Name] | [Customer PII / Financial Records / Transaction Data / etc.] | [Database / File / API Stream / etc.] | [System / Platform / Location] | [Approximate volume] | [PDPA Personal Data / BNM Regulated Data / etc.] | [System IDs] |
| DATA-002 | [Data Asset Name] | [Type] | [Format] | [Location] | [Volume] | [Classification] | [Systems] |
| … | … | … | … | … | … | … | … |

### 4.5 Asset Inventory — Third-Party Technology Services

*Complete this table for all technology services provided by external vendors and service providers.*

| Asset ID | Service Name | Vendor / Provider | Service Category | Contract Reference | Criticality | SLA Reference | Regulatory Notification Requirement |
|---|---|---|---|---|---|---|---|
| TPT-001 | [Service Name] | [Vendor Name] | [Cloud / Managed Service / SaaS / Outsourced Processing / etc.] | [Contract / MSA reference] | [Critical / Non-Critical] | [SLA document reference] | [BNM notification required: Yes / No] |
| TPT-002 | [Service Name] | [Vendor] | [Category] | [Contract ref] | [Criticality] | [SLA ref] | [Yes / No] |
| … | … | … | … | … | … | … | … |

### 4.6 Asset Inventory — Network and Communication Assets

*Complete this table for network infrastructure components within scope.*

| Asset ID | Asset Name | Component Type | Model / Make | Network Segment / VLAN | Managed By | Redundancy | End of Support Date |
|---|---|---|---|---|---|---|---|
| NET-001 | [Asset Name] | [Firewall / Switch / Router / Load Balancer / WAF / etc.] | [Make / Model] | [Segment / VLAN] | [Internal IT / Vendor] | [Redundant / Single] | [Date or N/A] |
| NET-002 | [Asset Name] | [Type] | [Model] | [Segment] | [Managed By] | [Redundancy] | [Date] |
| … | … | … | … | … | … | … | … |

### 4.7 Asset Inventory Summary

*Provide a quantitative summary of assets identified across all categories.*

| Asset Category | Total Assets Identified | Critical Assets | Non-Critical Assets |
|---|---|---|---|
| Infrastructure | [#] | [#] | [#] |
| Applications | [#] | [#] | [#] |
| Data Assets | [#] | [#] | [#] |
| Third-Party Technology Services | [#] | [#] | [#] |
| Network and Communication | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** |

---

## 5. Classification and Categorisation

### 5.1 Classification Framework

*This section describes the criteria applied to classify and categorise all assets within the assessment scope. Classification drives the depth of assessment, control requirements, and reporting obligations.*

[Organization Name] applies a risk-based asset classification framework aligned with BNM RMiT requirements and the internal Information Classification and Handling Policy. All technology assets are assigned:

1. **A Criticality Rating** — reflecting the potential impact of the asset's unavailability or compromise on the organization's operations, customers, and regulatory obligations.
2. **An Information Sensitivity Level** — reflecting the nature of data the asset processes, stores, or transmits.
3. **A Technology Risk Category** — reflecting the primary technology risk domain applicable to the asset.

### 5.2 Criticality Rating Criteria

| Criticality Level | Definition | Examples |
|---|---|---|
| **Critical** | Asset supports a Critical Business Function (CBF) as defined under RMiT. Its failure or compromise would cause significant financial loss, reputational damage, regulatory breach, or harm to customers. | Core banking system, payment gateway, primary customer database |
| **High** | Asset is integral to key business operations. Its failure would significantly degrade service delivery but does not directly impact a CBF. | HR management system, internal reporting platform, secondary authentication server |
| **Medium** | Asset supports important but non-critical functions. Its failure would cause inconvenience or degraded service with manageable impact. | Internal communication tools, non-customer-facing analytics platforms |
| **Low** | Asset has limited operational significance. Its failure has minimal operational impact and can be tolerated for an extended period. | Development sandboxes, test environments, archived data systems |

### 5.3 Information Sensitivity Classification

| Sensitivity Level | Definition | Regulatory Basis |
|---|---|---|
| **Restricted** | Highest sensitivity. Includes regulated data, strategic financial data, cryptographic keys, and authentication credentials. Breach would cause severe harm. | BNM RMiT, FSA 2013, PDPA 2010 |
| **Confidential** | Sensitive business information, customer personal data, proprietary systems documentation. Internal use only; disclosure limited to need-to-know basis. | PDPA 2010, BNM RMiT §11 |
| **Internal** | General internal business information. Not intended for public disclosure but not specifically regulated. | Internal Policy |
| **Public** | Information approved for external disclosure. No confidentiality obligation. | N/A |

### 5.4 Technology Risk Category Mapping

| Risk Category | Description | Applicable Asset Types |
|---|---|---|
| **Infrastructure Risk** | Risk arising from failures in hardware, network, data centre, or platform components. | Servers, network devices, storage, data centres |
| **Application Risk** | Risk arising from software vulnerabilities, development practices, or application failures. | Business applications, APIs, middleware |
| **Cybersecurity Risk** | Risk of unauthorized access, data breach, malware, or cyber attack. | All asset types |
| **Data Risk** | Risk of data loss, corruption, unauthorized disclosure, or non-compliance with data regulations. | Data assets, databases, data pipelines |
| **Third-Party Technology Risk** | Risk arising from dependence on external technology providers. | Vendor-managed systems, cloud services, outsourced processing |
| **Cloud Risk** | Risk specific to cloud-hosted environments including multi-tenancy, data residency, and cloud provider dependency. | Cloud-hosted assets |
| **Operational Technology (OT) Risk** | Risk arising from operational technology systems including physical security, building management, and industrial control systems. | OT systems, if applicable |
| **Change and Project Risk** | Risk arising from technology changes, upgrades, and projects in progress. | Systems undergoing change |

### 5.5 Asset Classification Register

*Complete this table to record the classification assigned to each asset identified in Section 4. Use Asset IDs from the inventory tables.*

| Asset ID | Asset Name | Criticality Rating | Information Sensitivity | Primary Risk Category | Secondary Risk Category | CBF Dependency | Classification Rationale |
|---|---|---|---|---|---|---|---|
| INFRA-001 | [Asset Name] | [Critical / High / Medium / Low] | [Restricted / Confidential / Internal / Public] | [Risk Category] | [Risk Category or N/A] | [CBF Name or None] | [Brief justification for criticality and sensitivity ratings] |
| APP-001 | [Application Name] | [Rating] | [Sensitivity] | [Category] | [Category] | [CBF or None] | [Justification] |
| DATA-001 | [Data Asset Name] | [Rating] | [Sensitivity] | [Category] | [Category] | [CBF or None] | [Justification] |
| TPT-001 | [Service Name] | [Rating] | [Sensitivity] | [Category] | [Category] | [CBF or None] | [Justification] |
| NET-001 | [Asset Name] | [Rating] | [Sensitivity] | [Category] | [Category] | [CBF or None] | [Justification] |
| … | … | … | … | … | … | … | … |

### 5.6 Classification Summary by Criticality

| Criticality | Infrastructure | Applications | Data Assets | Third-Party | Network | Total |
|---|---|---|---|---|---|---|
| Critical | [#] | [#] | [#] | [#] | [#] | [#] |
| High | [#] | [#] | [#] | [#] | [#] | [#] |
| Medium | [#] | [#] | [#] | [#] | [#] | [#] |
| Low | [#] | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

---

## 6. Owner and Custodian Register

### 6.1 Ownership and Custodianship Framework

*This section documents the accountability and stewardship assignments for all technology assets within scope, in accordance with RMiT §9.2 requirements for clear asset ownership.*

[Organization Name] maintains a formal asset ownership model in which every technology asset is assigned:

- **An Asset Owner:** A senior business or technology leader who is accountable for the asset's risk posture, regulatory compliance, and strategic decisions regarding its use, investment, and disposal. Asset owners are typically at the Head of Department level or above.
- **An Asset Custodian:** A technical or operational staff member responsible for the day-to-day management, maintenance, and security of the asset. Custodians may be internal staff or designated representatives of third-party service providers.
- **A Data Owner (where applicable):** For data assets, a designated individual accountable for the accuracy, integrity, and appropriate use of the data.

### 6.2 Ownership Definitions and Responsibilities

| Role | Responsibilities |
|---|---|
| **Asset Owner** | Approves asset risk acceptance; ensures adequate resources for risk treatment; receives risk reports; accountable for compliance with applicable policies; approves major changes to the asset |
| **Asset Custodian** | Implements and maintains security controls; manages day-to-day operations; reports incidents and anomalies; ensures patching and maintenance schedules are met; maintains asset documentation |
| **Data Owner** | Approves data access requests; defines data retention requirements; ensures data quality and integrity; accountable for PDPA compliance obligations relating to the data asset |

### 6.3 Asset Owner and Custodian Register

*Complete this table for all assets within scope. Ensure each asset has a named owner and custodian. Where an asset owner has responsibility for multiple assets, list each asset separately.*

| Asset ID | Asset Name | Asset Owner Name | Asset Owner Title | Asset Owner Department | Asset Custodian Name | Asset Custodian Title | Custodian Department | Data Owner (if applicable) | Emergency Contact |
|---|---|---|---|---|---|---|---|---|---|
| INFRA-001 | [Asset Name] | [Full Name] | [e.g., Head of IT Infrastructure] | [Department] | [Full Name] | [e.g., Senior Systems Administrator] | [Department] | [Name or N/A] | [Email / Phone] |
| APP-001 | [Application Name] | [Full Name] | [Title] | [Department] | [Full Name] | [Title] | [Department] | [Name or N/A] | [Contact] |
| DATA-001 | [Data Asset Name] | [Full Name] | [Title] | [Department] | [Full Name] | [Title] | [Department] | [Full Name] | [Contact] |
| TPT-001 | [Service Name] | [Full Name] | [Title] | [Department] | [Vendor Contact Name] | [Vendor Title] | [Vendor Organization] | [Name or N/A] | [Contact] |
| NET-001 | [Asset Name] | [Full Name] | [Title] | [Department] | [Full Name] | [Title] | [Department] | [N/A] | [Contact] |
| … | … | … | … | … | … | … | … | … | … |

### 6.4 Ownership Gaps and Exceptions

*Document any assets for which an owner or custodian has not been formally assigned, and the action taken to remediate.*

| Asset ID | Asset Name | Gap Type | Gap Description | Interim Responsibility | Remediation Action | Target Date | Status |
|---|---|---|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [No Owner / No Custodian / Disputed Ownership] | [Description of gap] | [Interim owner or custodian] | [Action to assign formal ownership] | [Date] | [Open / In Progress / Closed] |
| … | … | … | … | … | … | … | … |

### 6.5 Third-Party Custodian Contacts

*For assets managed by external service providers, document the designated vendor contact points for operational and security matters.*

| Asset ID | Asset Name | Vendor / Provider | Primary Custodian Contact | Secondary Custodian Contact | Escalation Path | Contract Clause Reference |
|---|---|---|---|---|---|---|
| TPT-001 | [Service Name] | [Vendor Name] | [Name, Email, Phone] | [Name, Email, Phone] | [Escalation procedure description] | [Contract section] |
| … | … | … | … | … | … | … |

---

## 7. Status and Lifecycle Stage

### 7.1 Asset Lifecycle Framework

*This section documents the lifecycle stage of each technology asset, which directly informs the risk assessment approach, control requirements, and treatment prioritisation.*

[Organization Name] categorises technology assets across the following lifecycle stages, consistent with industry best practice and the requirements of BNM RMiT §9.2:

| Lifecycle Stage | Definition | Key Risk Considerations |
|---|---|---|
| **Planning / Procurement** | Asset is being evaluated, selected, or procured. Not yet in production. | Due diligence, security-by-design, vendor risk assessment |
| **Implementation / Deployment** | Asset is being implemented, configured, or migrated into the production environment. | Change risk, configuration risk, parallel-run exposure |
| **Production / Operational** | Asset is fully deployed and in active use supporting business operations. | Operational risk, cybersecurity risk, availability, patching compliance |
| **Maintenance / Sustained** | Asset is stable and in long-term production, subject to routine maintenance. | Technical debt, obsolescence risk, control effectiveness |
| **End of Life / Decommissioning** | Asset is approaching or has reached vendor end-of-support, or is being phased out. | Unpatched vulnerabilities, data migration risk, knowledge loss |
| **Decommissioned** | Asset has been formally retired and removed from production. | Data sanitisation, licence return, documentation archival |

### 7.2 Asset Status and Lifecycle Register

*Complete this table for all assets within scope. Lifecycle stage should be current as at the assessment date.*

| Asset ID | Asset Name | Operational Status | Lifecycle Stage | Vendor Support Status | End of Life Date | Replacement Plan | Lifecycle Notes |
|---|---|---|---|---|---|---|---|
| INFRA-001 | [Asset Name] | [Active / Standby / Degraded / Inactive] | [Lifecycle Stage] | [Fully Supported / Extended Support / End of Life / Custom Support] | [Date or N/A] | [Replacement system or N/A] | [Any relevant notes] |
| APP-001 | [Application Name] | [Active / Standby / Degraded / Inactive] | [Stage] | [Support Status] | [Date or N/A] | [Plan or N/A] | [Notes] |
| DATA-001 | [Data Asset Name] | [Active / Archived / Migrating / Retiring] | [Stage] | [N/A] | [Date or N/A] | [Plan or N/A] | [Notes] |
| TPT-001 | [Service Name] | [Active / Contract Renewal / Transitioning] | [Stage] | [Vendor Supported] | [Contract Expiry or N/A] | [Plan or N/A] | [Notes] |
| NET-001 | [Asset Name] | [Active / Degraded / Standby] | [Stage] | [Support Status] | [Date or N/A] | [Plan or N/A] | [Notes] |
| … | … | … | … | … | … | … | … |

### 7.3 End-of-Life and Extended Support Assets

*List all assets that are operating beyond their vendor-supported end-of-life date or on extended/custom support arrangements. These assets represent elevated risk and require enhanced justification and compensating controls.*

| Asset ID | Asset Name | Original End-of-Life Date | Current Support Arrangement | Compensating Controls Implemented | Formal Risk Acceptance | Risk Acceptance By | Target Replacement Date |
|---|---|---|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [Original EOL date] | [Extended support / No support / Custom vendor agreement] | [Description of compensating controls, e.g., network isolation, enhanced monitoring, restricted access] | [Yes / No] | [Risk Acceptor Name / Role] | [Target date] |
| … | … | … | … | … | … | … | … |

### 7.4 Assets Under Change or Transition

*Document assets that are currently undergoing significant changes, upgrades, migrations, or decommissioning, as these represent heightened risk during the assessment period.*

| Asset ID | Asset Name | Change Type | Change Reference | Change Status | Expected Completion | Risk Implications | Assigned Change Owner |
|---|---|---|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [Upgrade / Migration / Decommission / New Deployment / Integration] | [Change ticket / project reference] | [Planning / In Progress / UAT / Completed] | [Date] | [Description of risk implications during transition] | [Name / Role] |
| … | … | … | … | … | … | … | … |

---

## 8. Last Review Date and Assessment History

### 8.1 Review Schedule

*This section documents the review history and schedule for the technology risk assessment, demonstrating ongoing compliance with BNM RMiT §9.2 and the organization's internal review cycle commitments.*

[Organization Name] conducts technology risk assessments in accordance with the following schedule:

| Review Type | Frequency | Trigger | Responsible Party |
|---|---|---|---|
| **Full Technology Risk Assessment** | Annual | Scheduled | Head of Technology Risk |
| **Quarterly Risk Review** | Quarterly | Scheduled | Technology Risk Manager |
| **Ad Hoc Assessment** | As required | Material change, incident, regulatory directive, new asset onboarding | Technology Risk Team |
| **Continuous Monitoring Review** | Ongoing | Automated monitoring triggers and thresholds | Technology Risk / Security Operations |

### 8.2 Assessment History by Asset

*Document the review history for each asset within scope. This table provides an audit trail of assessment activity and demonstrates continuous oversight.*

| Asset ID | Asset Name | Last Full Assessment Date | Last Quarterly Review Date | Last Ad Hoc Review Date (if applicable) | Ad Hoc Review Trigger | Next Scheduled Review Date | Review Completed By | Assessment Reference |
|---|---|---|---|---|---|---|---|---|
| INFRA-001 | [Asset Name] | [Date] | [Date] | [Date or N/A] | [Trigger or N/A] | [Date] | [Name / Role] | [Assessment ID / Report reference] |
| APP-001 | [Application Name] | [Date] | [Date] | [Date or N/A] | [Trigger or N/A] | [Date] | [Name / Role] | [Reference] |
| DATA-001 | [Data Asset Name] | [Date] | [Date] | [Date or N/A] | [Trigger or N/A] | [Date] | [Name / Role] | [Reference] |
| TPT-001 | [Service Name] | [Date] | [Date] | [Date or N/A] | [Trigger or N/A] | [Date] | [Name / Role] | [Reference] |
| NET-001 | [Asset Name] | [Date] | [Date] | [Date or N/A] | [Trigger or N/A] | [Date] | [Name / Role] | [Reference] |
| … | … | … | … | … | … | … | … | … |

### 8.3 Assessment History — Prior Reports

*List all prior technology risk assessment reports relevant to this assessment cycle. Prior reports should be retained in the document management system.*

| Assessment ID | Assessment Title | Assessment Period | Report Date | Key Findings Summary | Report Status | Storage Location |
|---|---|---|---|---|---|---|
| TRA-[YYYY]-[###] | Technology Risk Assessment Report | [Period] | [Date] | [Brief summary of top findings] | [Final / Superseded / Archived] | [Document management system path] |
| TRA-[YYYY]-[###] | Technology Risk Assessment Report | [Period] | [Date] | [Summary] | [Status] | [Path] |
| … | … | … | … | … | … | … |

### 8.4 Outstanding Actions from Prior Assessment Cycles

*Document all risk treatment actions and remediation items carried forward from prior assessment cycles, including their current status.*

| Action ID | Description | Original Risk ID | Source Report | Original Due Date | Revised Due Date | Action Owner | Current Status | Escalation Required |
|---|---|---|---|---|---|---|---|---|
| ACT-[###] | [Description of the action] | [Risk ID from prior report] | [Report reference] | [Original due date] | [Revised date or N/A] | [Name / Role] | [Not Started / In Progress / Completed / Escalated] | [Yes / No] |
| … | … | … | … | … | … | … | … | … |

---

## 9. Risk Assessment Methodology

### 9.1 Methodology Overview

*This section describes the risk assessment methodology applied in this report. A consistent, documented methodology is essential for defensibility of findings and comparability across assessment cycles.*

[Organization Name] applies a qualitative risk assessment methodology aligned with internationally recognised standards including ISO/IEC 27005, NIST SP 800-30, and BNM RMiT guidance. The methodology involves:

1. **Threat Identification:** Identifying plausible threat scenarios applicable to each asset.
2. **Vulnerability Assessment:** Identifying existing vulnerabilities that could be exploited by the identified threats.
3. **Control Assessment:** Evaluating the effectiveness of existing controls in mitigating identified threats and vulnerabilities.
4. **Inherent Risk Rating:** Rating the risk prior to considering the effect of controls.
5. **Residual Risk Rating:** Rating the risk after accounting for the effectiveness of existing controls.
6. **Risk Treatment Decision:** Determining the appropriate treatment option (accept, mitigate, transfer, avoid) for each residual risk.

### 9.2 Likelihood Scale

| Likelihood Level | Score | Definition | Indicative Frequency |
|---|---|---|---|
| **Almost Certain** | 5 | The event is expected to occur in most circumstances. | More than once per year |
| **Likely** | 4 | The event will probably occur in most circumstances. | Once per year |
| **Possible** | 3 | The event might occur at some time. | Once every 2–5 years |
| **Unlikely** | 2 | The event could occur at some time but is not expected. | Once every 5–10 years |
| **Rare** | 1 | The event may only occur in exceptional circumstances. | Less than once every 10 years |

### 9.3 Impact Scale

| Impact Level | Score | Financial Impact | Operational Impact | Reputational Impact | Regulatory Impact |
|---|---|---|---|---|---|
| **Catastrophic** | 5 | > RM [X]M | Complete loss of CBF; extended outage | Severe public and media scrutiny; significant customer loss | BNM enforcement action; licence conditions |
| **Major** | 4 | RM [X]M – RM [Y]M | Significant degradation of CBF; partial outage | Significant negative publicity; customer complaints | Formal BNM reprimand; notification obligations triggered |
| **Moderate** | 3 | RM [X]M – RM [Y]M | Noticeable degradation; non-CBF outage | Limited negative publicity; manageable customer impact | Internal control deficiency noted by BNM |
| **Minor** | 2 | RM [X]K – RM [Y]M | Minor disruption; quickly resolved | Minor reputational impact; limited customer complaints | Immaterial regulatory exposure |
| **Negligible** | 1 | < RM [X]K | Minimal to no operational disruption | No material reputational impact | No regulatory exposure |

### 9.4 Risk Rating Matrix

*The inherent and residual risk ratings are determined by multiplying the likelihood score by the impact score and mapping the result to the risk rating table below.*

| | **Negligible (1)** | **Minor (2)** | **Moderate (3)** | **Major (4)** | **Catastrophic (5)** |
|---|---|---|---|---|---|
| **Almost Certain (5)** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Likely (4)** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Possible (3)** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Unlikely (2)** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Rare (1)** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

| Risk Rating | Score Range | Definition |
|---|---|---|
| **Critical** | 20–25 | Immediate escalation to Board and Senior Management required. Risk must be treated within [30 days]. |
| **High** | 10–19 | Escalation to Senior Management required. Risk must be treated within [90 days]. |
| **Medium** | 5–9 | Risk must be treated within [180 days]. |
| **Low** | 1–4 | Risk accepted or treated within [365 days]. |

### 9.5 Control Effectiveness Rating

| Control Effectiveness | Score | Definition |
|---|---|---|
| **Strong** | 1 | Control is well-designed, consistently implemented, tested regularly, and highly effective at mitigating the risk. |
| **Adequate** | 2 | Control is in place and generally effective but may have minor gaps or inconsistencies in implementation. |
| **Partial** | 3 | Control exists but has significant gaps, is inconsistently applied, or has not been recently tested. |
| **Weak** | 4 | Control is poorly designed, rarely applied, or has been found to be ineffective. |
| **Absent** | 5 | No control exists for the identified risk. |

---

## 10. Risk Register and Findings

### 10.1 Risk Register — Infrastructure Risks

*Document all identified technology risks associated with infrastructure assets. Each risk entry should reference the relevant asset ID from Section 4 and include all fields below.*

| Risk ID | Asset ID | Asset Name | Risk Category | Risk Description | Threat Source | Vulnerability | Inherent Likelihood | Inherent Impact | Inherent Risk Rating | Existing Controls | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Risk Rating | Risk Owner | Risk Treatment Option | Treatment Ref | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| RISK-INF-001 | INFRA-001 | [Asset Name] | Infrastructure Risk | [Description of the risk scenario, e.g., "Failure of primary data centre cooling system leading to server overheating and unplanned downtime"] | [Internal / External / Environmental] | [e.g., Single point of failure in cooling system; no redundant unit] | [1–5 / Rare–Almost Certain] | [1–5 / Negligible–Catastrophic] | [Critical / High / Medium / Low] | [e.g., Temperature monitoring alerts; manual checks; maintenance schedule] | [Strong / Adequate / Partial / Weak / Absent] | [1–5] | [1–5] | [Rating] | [Name / Role] | [Accept / Mitigate / Transfer / Avoid] | [ACT-###] | [Additional context] |
| RISK-INF-002 | INFRA-002 | [Asset Name] | Infrastructure Risk | [Risk description] | [Source] | [Vulnerability] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Score] | [Score] | [Rating] | [Owner] | [Option] | [Ref] | [Notes] |
| … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … |

### 10.2 Risk Register — Application Risks

| Risk ID | Asset ID | Asset Name | Risk Category | Risk Description | Threat Source | Vulnerability | Inherent Likelihood | Inherent Impact | Inherent Risk Rating | Existing Controls | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Risk Rating | Risk Owner | Risk Treatment Option | Treatment Ref | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| RISK-APP-001 | APP-001 | [Application Name] | Application Risk | [e.g., "Exploitation of unpatched SQL injection vulnerability in customer-facing web portal, leading to unauthorized data access"] | [External – Threat Actor] | [e.g., Known CVE-[XXXX-XXXXX] in application framework; patch not yet applied] | [Score] | [Score] | [Rating] | [e.g., Web application firewall (WAF); input validation; vulnerability scan alerts] | [Effectiveness] | [Score] | [Score] | [Rating] | [Owner] | [Mitigate] | [ACT-###] | [Notes] |
| RISK-APP-002 | APP-002 | [Application Name] | Application Risk | [Risk description] | [Source] | [Vulnerability] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Score] | [Score] | [Rating] | [Owner] | [Option] | [Ref] | [Notes] |
| … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … |

### 10.3 Risk Register — Cybersecurity Risks

| Risk ID | Asset ID | Asset Name | Risk Category | Risk Description | Threat Source | Vulnerability | Inherent Likelihood | Inherent Impact | Inherent Risk Rating | Existing Controls | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Risk Rating | Risk Owner | Risk Treatment Option | Treatment Ref | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| RISK-CYB-001 | [Asset ID] | [Asset Name] | Cybersecurity Risk | [e.g., "Ransomware attack targeting core banking systems via phishing email campaign, resulting in data encryption and operational disruption"] | [External – Organized Cybercriminal Group] | [e.g., Insufficient email filtering; end-user susceptibility; inadequate endpoint detection] | [Score] | [Score] | [Rating] | [e.g., Email gateway filtering; endpoint detection and response (EDR); security awareness training; backup and recovery] | [Effectiveness] | [Score] | [Score] | [Rating] | [Owner] | [Mitigate] | [ACT-###] | [Notes] |
| RISK-CYB-002 | [Asset ID] | [Asset Name] | Cybersecurity Risk | [Risk description] | [Source] | [Vulnerability] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Score] | [Score] | [Rating] | [Owner] | [Option] | [Ref] | [Notes] |
| … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … |

### 10.4 Risk Register — Data Risks

| Risk ID | Asset ID | Asset Name | Risk Category | Risk Description | Threat Source | Vulnerability | Inherent Likelihood | Inherent Impact | Inherent Risk Rating | Existing Controls | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Risk Rating | Risk Owner | Risk Treatment Option | Treatment Ref | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| RISK-DAT-001 | DATA-001 | [Data Asset Name] | Data Risk | [e.g., "Unauthorized access to customer PII database by a privileged insider, resulting in data exfiltration and PDPA breach"] | [Internal – Privileged Insider] | [e.g., Overly broad database access rights; insufficient privileged access monitoring] | [Score] | [Score] | [Rating] | [e.g., Role-based access control (RBAC); database activity monitoring (DAM); quarterly access reviews] | [Effectiveness] | [Score] | [Score] | [Rating] | [Owner] | [Mitigate] | [ACT-###] | [Notes] |
| RISK-DAT-002 | DATA-002 | [Data Asset Name] | Data Risk | [Risk description] | [Source] | [Vulnerability] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Score] | [Score] | [Rating] | [Owner] | [Option] | [Ref] | [Notes] |
| … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … |

### 10.5 Risk Register — Third-Party Technology Risks

| Risk ID | Asset ID | Asset Name | Risk Category | Risk Description | Threat Source | Vulnerability | Inherent Likelihood | Inherent Impact | Inherent Risk Rating | Existing Controls | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Risk Rating | Risk Owner | Risk Treatment Option | Treatment Ref | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| RISK-TPT-001 | TPT-001 | [Service Name] | Third-Party Technology Risk | [e.g., "Failure of cloud service provider to maintain agreed SLA availability, resulting in extended unavailability of hosted critical system"] | [External – Third Party] | [e.g., Single-region cloud deployment; no multi-region failover; SLA enforcement gaps] | [Score] | [Score] | [Rating] | [e.g., SLA monitoring; vendor risk reviews; contractual penalty clauses; business continuity arrangements] | [Effectiveness] | [Score] | [Score] | [Rating] | [Owner] | [Mitigate / Transfer] | [ACT-###] | [Notes] |
| RISK-TPT-002 | TPT-002 | [Service Name] | Third-Party Technology Risk | [Risk description] | [Source] | [Vulnerability] | [Score] | [Score] | [Rating] | [Controls] | [Effectiveness] | [Score] | [Score] | … | [Owner] | [Option] | [Ref] | [Notes] |
| … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … |

---

## 11. Control Effectiveness Assessment

### 11.1 Overview

*This section provides a consolidated assessment of the effectiveness of key technology controls across the organization. Control effectiveness is a key input to the residual risk calculation in Section 10 and to the treatment prioritisation in Section 13.*

Control effectiveness assessments were conducted through a combination of:

- **Evidence review:** Reviewing configuration records, audit logs, policy documents, test results, and vulnerability scan reports.
- **Technical testing:** [Where applicable — penetration test results, vulnerability assessments, configuration reviews.]
- **Interviews:** Discussions with asset owners, custodians, and control operators.
- **Internal audit findings:** Referencing the most recent internal audit reports relevant to the assessed controls.

### 11.2 Key Control Assessment — Access Management

| Control ID | Control Name | Control Description | Assets Covered | Policy Reference | Implementation Status | Effectiveness Rating | Evidence Reference | Gaps Identified | Remediation Required |
|---|---|---|---|---|---|---|---|---|---|
| CTRL-AM-001 | Privileged Access Management (PAM) | Management of privileged accounts including creation, review, and termination across all critical systems | [Asset IDs] | [Policy name / section] | [Fully Implemented / Partially Implemented / Not Implemented] | [Strong / Adequate / Partial / Weak / Absent] | [Evidence document reference] | [Description of gaps] | [Yes / No — ref ACT-###] |
| CTRL-AM-002 | Multi-Factor Authentication (MFA) | MFA enforcement for all remote access and privileged account access | [Asset IDs] | [Policy] | [Status] | [Rating] | [Evidence ref] | [Gaps] | [Yes / No] |
| CTRL-AM-003 | Quarterly Access Reviews | Periodic review and recertification of user access rights across all systems | [Asset IDs] | [Policy] | [Status] | [Rating] | [Evidence ref] | [Gaps] | [Yes / No] |
| … | … | … | … | … | … | … | … | … | … |

### 11.3 Key Control Assessment — Cybersecurity Controls

| Control ID | Control Name | Control Description | Assets Covered | Policy Reference | Implementation Status | Effectiveness Rating | Evidence Reference | Gaps Identified | Remediation Required |
|---|---|---|---|---|---|---|---|---|---|
| CTRL-CYB-001 | Vulnerability Management | Regular scanning, assessment, and remediation of known vulnerabilities | [Asset IDs] | [Policy] | [Status] | [Rating] | [Evidence ref] | [Gaps] | [Yes / No] |
| CTRL-CYB-002 | Security Information and Event Management (SIEM) | Centralized log collection, correlation, and alerting for security events | [Asset IDs] | [Policy] | [Status] | [Rating] | [Evidence ref] | [Gaps] | [Yes / No] |
| CTRL-CYB-003 | Endpoint Detection and Response (EDR) | Real-time detection and response capability on all endpoints | [Asset IDs] | [Policy] | [Status] | [Rating] | [Evidence ref] | [Gaps] | [Yes / No] |
| CTRL-CYB-004 | Data Loss Prevention (DLP) | Controls to detect and prevent unauthorized exfiltration of sensitive data | [Asset IDs] | [Policy] | [Status] | [Rating] | [Evidence ref] | [Gaps] | [Yes / No] |
| … | … | … | … | … | … | … | … | … | … |

### 11.4 Key Control Assessment — Availability and Resilience Controls

| Control ID | Control Name | Control Description | Assets Covered | Policy Reference | Implementation Status | Effectiveness Rating | Evidence Reference | Gaps Identified | Remediation Required |
|---|---|---|---|---|---|---|---|---|---|
| CTRL-AV-001 | Backup and Recovery | Regular backup of critical data and systems; tested recovery capability | [Asset IDs] | [Policy] | [Status] | [Rating] | [Evidence ref] | [Gaps] | [Yes / No] |
| CTRL-AV-002 | Disaster Recovery Plan (DRP) | Documented and tested DRP covering all CBF-supporting systems | [Asset IDs] | [Policy] | [Status] | [Rating] | [Evidence ref] | [Gaps] | [Yes / No] |
| CTRL-AV-003 | High Availability Architecture | Redundant infrastructure design to eliminate single points of failure | [Asset IDs] | [Policy] | [Status] | [Rating] | [Evidence ref] | [Gaps] | [Yes / No] |
| … | … | … | … | … | … | … | … | … | … |

### 11.5 Control Effectiveness Summary

| Control Domain | Total Controls Assessed | Strong | Adequate | Partial | Weak | Absent | Overall Domain Rating |
|---|---|---|---|---|---|---|---|
| Access Management | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| Cybersecurity | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| Availability and Resilience | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| Change Management | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| Third-Party Management | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| Data Protection | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[Overall]** |

---

## 12. Residual Risk Summary

### 12.1 Residual Risk Profile

*This section consolidates the residual risk ratings from the risk register in Section 10 and presents the overall residual risk posture of [Organization Name] as at the assessment date, after accounting for existing controls.*

| Risk Category | Critical | High | Medium | Low | Total Risks |
|---|---|---|---|---|---|
| Infrastructure Risk | [#] | [#] | [#] | [#] | [#] |
| Application Risk | [#] | [#] | [#] | [#] | [#] |
| Cybersecurity Risk | [#] | [#] | [#] | [#] | [#] |
| Data Risk | [#] | [#] | [#] | [#] | [#] |
| Third-Party Technology Risk | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

### 12.2 Risks Above Risk Appetite

*List all risks where the residual risk rating exceeds [Organization Name]'s defined risk appetite. These risks require immediate treatment action and escalation.*

| Risk ID | Asset Name | Risk Description | Residual Risk Rating | Risk Appetite Threshold | Variance | Risk Owner | Treatment Status |
|---|---|---|---|---|---|---|---|
| RISK-[###] | [Asset Name] | [Risk description] | [Critical / High] | [Appetite level] | [Description of variance] | [Owner] | [Action ref and status] |
| … | … | … | … | … | … | … | … |

### 12.3 Risk Appetite Statement Alignment

*Summarise the alignment of the current residual risk posture against the Board-approved technology risk appetite statement.*

| Risk Appetite Dimension | Appetite Statement | Current Posture | Within Appetite | Remarks |
|---|---|---|---|---|
| **Technology Availability** | [e.g., "Zero tolerance for unplanned outage of CBF systems exceeding [X] hours"] | [Description of current posture] | [Yes / No / Partially] | [Remarks] |
| **Cybersecurity Incidents** | [e.g., "Low tolerance for confirmed data breaches involving customer PII"] | [Current posture] | [Yes / No / Partially] | [Remarks] |
| **Third-Party Concentration** | [e.g., "Moderate tolerance for concentration risk with individual technology providers"] | [Current posture] | [Yes / No / Partially] | [Remarks] |
| **Unpatched Vulnerabilities** | [e.g., "Zero tolerance for critical unpatched vulnerabilities on internet-facing systems beyond [30] days"] | [Current posture] | [Yes / No / Partially] | [Remarks] |
| **Data Loss** | [e.g., "Zero tolerance for uncontrolled loss or exfiltration of restricted data"] | [Current posture] | [Yes / No / Partially] | [Remarks] |

---

## 13. Treatment Plans and Remediation

### 13.1 Treatment Strategy

*For each risk identified in Section 10 with a residual rating of Medium or above, a formal treatment plan must be documented. This section consolidates all treatment actions and provides a management dashboard for tracking remediation progress.*

[Organization Name] applies the following risk treatment options in accordance with the Technology Risk Management Policy:

| Treatment Option | Definition | When Applied |
|---|---|---|
| **Mitigate** | Implement or enhance controls to reduce the likelihood or impact of the risk to within appetite. | Preferred option for High and Critical risks; applicable when cost of control is proportionate to risk reduction. |
| **Transfer** | Shift the financial consequence of the risk to a third party (e.g., cyber insurance, contractual liability). | Applied as a complementary treatment; does not eliminate the underlying risk. |
| **Accept** | Acknowledge the risk and consciously decide not to take action to change its likelihood or impact. Requires formal sign-off by the appropriate risk acceptance authority. | Applied for Low risks, or where cost of treatment exceeds benefit. Requires documented justification and periodic review. |
| **Avoid** | Eliminate the activity or asset that gives rise to the risk. | Applied where the risk exposure is unacceptable and no feasible mitigation exists. |

### 13.2 Consolidated Treatment Action Plan

*Complete this table for all risks requiring active treatment. Link each action to the relevant Risk ID from Section 10.*

| Action ID | Risk ID | Risk Description | Risk Rating | Treatment Option | Action Description | Action Owner | Support Required From | Target Completion Date | Estimated Cost | Priority | Status | Completion Date | Evidence of Completion |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ACT-001 | RISK-CYB-001 | [Risk description] | [Critical / High / Medium] | Mitigate | [Detailed description of the specific action to be taken, e.g., "Deploy endpoint detection and response (EDR) solution across all [X] endpoints within the organization"] | [Name / Role] | [Department / Team] | [Date] | [RM or Budget category] | [1 / 2 / 3 — highest to lowest] | [Not Started / In Progress / Completed / Overdue] | [Date or N/A] | [Ref to evidence] |
| ACT-002 | RISK-APP-001 | [Risk description] | [Rating] | Mitigate | [Action description] | [Owner] | [Support] | [Date] | [Cost] | [Priority] | [Status] | [Date] | [Evidence] |
| ACT-003 | RISK-DAT-001 | [Risk description] | [Rating] | Mitigate | [Action description] | [Owner] | [Support] | [Date] | [Cost] | [Priority] | [Status] | [Date] | [Evidence] |
| ACT-004 | RISK-INF-001 | [Risk description] | [Rating] | Transfer | [Action description — e.g., "Obtain cyber insurance coverage for technology failure scenarios; assess adequacy of existing policy terms"] | [Owner] | [Support] | [Date] | [Cost] | [Priority] | [Status] | [Date] | [Evidence] |
| ACT-005 | RISK-TPT-001 | [Risk description] | [Rating] | Mitigate | [Action description] | [Owner] | [Support] | [Date] | [Cost] | [Priority] | [Status] | [Date] | [Evidence] |
| … | … | … | … | … | … | … | … | … | … | … | … | … | … |

### 13.3 Risk Acceptance Register

*Document all risks where the treatment option is "Accept". Risk acceptance must be formally approved by the appropriate authority based on the residual risk rating.*

| Risk ID | Risk Description | Residual Risk Rating | Acceptance Rationale | Compensating Controls | Risk Acceptance Authority | Acceptance Date | Review Date | Risk Acceptor Signature |
|---|---|---|---|---|---|---|---|---|
| RISK-[###] | [Risk description] | [Low / Medium] | [Justification for accepting the risk without further treatment] | [Any compensating controls in place] | [Name / Title — e.g., Head of Technology Risk for Medium; CRO for High] | [Date] | [Date for next acceptance review] | [Signature or reference] |
| … | … | … | … | … | … | … | … | … |

### 13.4 Treatment Prioritisation Dashboard

*Summarise treatment actions by priority and status to provide management with a concise remediation dashboard.*

| Priority | Total Actions | Not Started | In Progress | Completed | Overdue |
|---|---|---|---|---|---|
| Priority 1 (Critical Risk) | [#] | [#] | [#] | [#] | [#] |
| Priority 2 (High Risk) | [#] | [#] | [#] | [#] | [#] |
| Priority 3 (Medium Risk) | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

---

## 14. Continuous Monitoring Framework

### 14.1 Monitoring Approach

*This section describes [Organization Name]'s continuous monitoring framework for technology risks, fulfilling the ongoing monitoring obligations under BNM RMiT §9.3.*

[Organization Name] maintains a continuous monitoring programme to ensure that the technology risk posture is tracked on an ongoing basis between formal assessment cycles. The programme encompasses:

- **Automated technical monitoring** through the Security Operations Centre (SOC) and managed security service tools.
- **Key Risk Indicator (KRI) monitoring** against defined thresholds, with automated alerts for threshold breaches.
- **Periodic management reporting** to governance committees and Senior Management.
- **Event-driven reassessment** triggered by material changes, incidents, or external threat intelligence.

### 14.2 Key Risk Indicators (KRIs)

*Define the KRIs used to monitor technology risk on a continuous basis. Each KRI should have defined threshold levels that trigger escalation.*

| KRI ID | KRI Name | KRI Description | Data Source | Monitoring Frequency | Green Threshold | Amber Threshold | Red Threshold | Current Value | Current Status | Owner |
|---|---|---|---|---|---|---|---|---|---|---|
| KRI-001 | Unpatched Critical Vulnerabilities | Number of critical (CVSS ≥9.0) vulnerabilities unpatched beyond [30] days on internet-facing systems | Vulnerability scanner | Weekly | 0 | 1–2 | ≥3 | [Current value] | [Green / Amber / Red] | [Owner] |
| KRI-002 | Privileged Account Review Compliance | Percentage of privileged accounts reviewed within the required quarterly review cycle | PAM system / IAM | Monthly | ≥95% | 85–94% | <85% | [%] | [Status] | [Owner] |
| KRI-003 | Security Incident Volume | Number of confirmed security incidents per month | SIEM / SOC | Monthly | ≤[X] | [X+1]–[Y] | >[Y] | [#] | [Status] | [Owner] |
| KRI-004 | System Availability (CBF Systems) | Availability percentage of CBF-supporting systems against SLA | Monitoring platform | Daily | ≥99.9% | 99.0–99.89% | <99.0% | [%] | [Status] | [Owner] |
| KRI-005 | Overdue Risk Treatment Actions | Number of risk treatment actions overdue beyond their target completion date | Risk register | Monthly | 0 | 1–3 | ≥4 | [#] | [Status] | [Owner] |
| KRI-006 | Third-Party SLA Breach | Number of third-party SLA breaches in the reporting period | Vendor management | Monthly | 0 | 1 | ≥2 | [#] | [Status] | [Owner] |
| KRI-007 | Failed Backup Recovery Tests | Number of failed or untested backup recovery tests in the quarter | IT Operations | Quarterly | 0 | 1 | ≥2 | [#] | [Status] | [Owner] |
| KRI-008 | Phishing Simulation Failure Rate | Percentage of employees who failed the most recent phishing simulation | Security Awareness Platform | Quarterly | ≤5% | 6–15% | >15% | [%] | [Status] | [Owner] |
| … | … | … | … | … | … | … | … | … | … | … |

### 14.3 KRI Status Summary

| KRI Status | Count | KRI IDs |
|---|---|---|
| Green | [#] | [KRI IDs] |
| Amber | [#] | [KRI IDs] |
| Red | [#] | [KRI IDs] |

### 14.4 Monitoring Reporting and Escalation

| Report | Audience | Frequency | Content | Escalation Trigger |
|---|---|---|---|---|
| Technology Risk Dashboard | Head of Technology Risk; CRO | Monthly | KRI status; open risks; overdue actions | Any Red KRI; new Critical risk identified |
| Technology Risk Report | Technology Risk Committee; ERMC | Quarterly | Full assessment findings; treatment progress; KRI trends | Critical risks; significant posture deterioration |
| Board Technology Risk Update | Board Risk Committee | Semi-annual | Executive summary; risk posture trend; strategic risks | Critical risks; material events |
| Ad Hoc Escalation | Senior Management; Board (as required) | Event-driven | Details of specific material risk event | Any Critical risk newly identified; significant incident |

---

## 15. Roles and Responsibilities

### 15.1 RACI Framework

*This section defines the roles and responsibilities of all parties involved in the preparation, review, approval, and ongoing maintenance of this Technology Risk Assessment Report, in accordance with BNM RMiT governance requirements.*

**RACI Key:**
- **R — Responsible:** Does the work.
- **A — Accountable:** Ultimately answerable for the outcome; approves the work.
- **C — Consulted:** Provides input before the work is done; two-way communication.
- **I — Informed:** Notified of progress or outcomes; one-way communication.

### 15.2 RACI Table

| Activity | Board of Directors / Board Risk Committee | Chief Executive Officer | Chief Risk Officer (CRO) | Chief Information Officer (CIO) | Chief Information Security Officer (CISO) | Head of Technology Risk | Technology Risk Manager / Analyst | Asset Owners | Asset Custodians | Internal Audit | Third-Party Vendors |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Approve Technology Risk Appetite | A | C | R | C | C | C | I | I | I | I | — |
| Approve Technology Risk Assessment Report | A | I | C | C | C | R | C | C | I | I | — |
| Conduct Asset Identification and Inventory | I | I | I | C | C | A | R | C | R | I | C |
| Conduct Asset Classification | I | I | I | C | C | A | R | R | C | I | — |
| Assign Asset Owners and Custodians | I | I | I | A | C | C | R | R | R | I | — |
| Conduct Threat and Vulnerability Assessment | I | I | C | C | C | A | R | C | C | I | — |
| Rate Inherent and Residual Risks | I | I | C | C | C | A | R | C | — | I | — |
| Develop Risk Treatment Plans | I | I | C | C | C | A | R | R | C | I | — |
| Approve Risk Acceptance (Medium) | I | I | C | I | I | A | C | R | — | I | — |
| Approve Risk Acceptance (High) | I | I | A | C | C | R | C | C | — | I | — |
| Implement Treatment Actions | I | I | I | C | C | A | C | R | R | I | R |
| Monitor KRIs and Escalate | I | I | C | C | C | A | R | C | C | I | — |
| Report to Technology Risk Committee | I | I | C | C | C | A | R | I | I | I | — |
| Report to Board Risk Committee | A | I | C | C | C | R | C | I | I | I | — |
| Provide Independent Assurance | A | I | C | I | I | I | I | I | I | A/R | — |
| Maintain Risk Register | I | I | I | I | C | A | R | C | — | I | — |
| Review and Update Risk Assessment | I | I | C | C | C | A | R | C | C | I | — |

### 15.3 Governance Committee Structure

*Describe the governance committees responsible for overseeing technology risk management.*

| Committee | Membership | Meeting Frequency | Technology Risk Responsibilities |
|---|---|---|---|
| **Board Risk Committee (BRC)** | Board Directors (majority independent); CRO (Secretary) | [Quarterly] | Approve technology risk appetite; receive technology risk reports; oversee material technology risks |
| **Executive Risk Management Committee (ERMC)** | CEO (Chair); CRO; CIO; CISO; CFO; Business Unit Heads | [Monthly] | Review technology risk posture; approve escalated treatment plans; review material incidents |
| **Technology Risk Committee (TRC)** | CIO (Chair); CISO; Head of Technology Risk; Business Technology Representatives | [Monthly] | Review risk assessment findings; approve treatment actions; monitor KRIs; escalate to ERMC |
| **Cybersecurity Steering Committee** | CISO (Chair); Head of Technology Risk; Security Operations Lead | [Monthly] | Cybersecurity risk oversight; security incident review; security programme governance |

---

## 16. Review and Approval

### 16.1 Version History

*Maintain a complete version history for this document. All versions should be retained in the document management system.*

| Version | Date | Author | Reviewed By | Changes / Description |
|---|---|---|---|---|
| 0.1 | [Date] | [Name, Title] | — | Initial draft for internal review |
| 0.2 | [Date] | [Name, Title] | [Name, Title] | Incorporated feedback from Technology Risk Manager review |
| 0.3 | [Date] | [Name, Title] | [Name, Title] | Incorporated feedback from CISO and CIO review |
| 0.4 | [Date] | [Name, Title] | [Name, Title] | Incorporated Internal Audit comments |
| 1.0 | [Date] | [Name, Title] | [Name, Title] | Final version approved for submission |

### 16.2 Document Review Schedule

| Review Type | Reviewer | Review Date | Outcome |
|---|---|---|---|
| Technical Review | [Name, Title] | [Date] | [Approved / Approved with comments / Returned for revision] |
| Information Security Review | [Name, Title — CISO or delegate] | [Date] | [Outcome] |
| Risk Review | [Name, Title — CRO or delegate] | [Date] | [Outcome] |
| Independent Review | [Internal Audit / External Reviewer] | [Date] | [Outcome] |

### 16.3 Approval Sign-Off

*This report must be formally approved by the designated approving authority prior to submission to the relevant governance committee. Signatures confirm that the approver has reviewed the document and is satisfied that it accurately represents the technology risk posture of [Organization Name].*

| Role | Name | Department | Signature | Date |
|---|---|---|---|---|
| **Prepared By** | [Full Name] | Technology Risk | _____________________________ | [Date] |
| **Reviewed By** | [Full Name] | Cybersecurity / CISO Office | _____________________________ | [Date] |
| **Reviewed By** | [Full Name] | IT / CIO Office | _____________________________ | [Date] |
| **Reviewed By** | [Full Name] | Internal Audit | _____________________________ | [Date] |
| **Approved By** | [Full Name] | Head of Technology Risk | _____________________________ | [Date] |
| **Endorsed By** | [Full Name] | Chief Risk Officer | _____________________________ | [Date] |

---

## 17. References

### 17.1 Regulatory References

| Reference | Title | Issuing Authority | Date | Applicable Clauses |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | [Issue Date] | §9.1, §9.2, §9.3, §10, §11, §12, §13 |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | 2013 | Applicable licensing and governance provisions |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | 2013 | [If applicable] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 | Applicable data protection obligations for data assets containing personal data |
| BNM JPDP | Jaminan Perlindungan Data Peribadi — applicable BNM guidelines | Bank Negara Malaysia | [Date] | [Applicable sections] |
| BNM OR | Operational Risk Integrated Online Network (ORION) — incident reporting | Bank Negara Malaysia | [Date] | Technology incident reporting obligations |

### 17.2 Standards and Frameworks Referenced

| Standard / Framework | Title | Version / Year | Relevance |
|---|---|---|---|
| ISO/IEC 27001 | Information Security Management Systems | [Current edition] | Information security control framework reference |
| ISO/IEC 27005 | Information Security Risk Management | [Current edition] | Risk assessment methodology |
| NIST SP 800-30 | Guide for Conducting Risk Assessments | Rev 1, 2012 | Supplementary risk assessment methodology |
| NIST Cybersecurity Framework (CSF) | Framework for Improving Critical Infrastructure Cybersecurity | [Current version] | Cybersecurity control mapping |
| CIS Controls | Center for Internet Security Critical Security Controls | [Current version] | Security control benchmarking |
| COBIT 2019 | Control Objectives for Information and Related Technologies | 2019 | IT governance and control framework |

### 17.3 Internal Document References

| Document ID | Document Title | Version | Effective Date |
|---|---|---|---|
| [Doc ID] | Technology Risk Management Policy | [Ver] | [Date] |
| [Doc ID] | Information Classification and Handling Policy | [Ver] | [Date] |
| [Doc ID] | Asset Management Policy | [Ver] | [Date] |
| [Doc ID] | Cybersecurity Policy | [Ver] | [Date] |
| [Doc ID] | Business Continuity and Disaster Recovery Policy | [Ver] | [Date] |
| [Doc ID] | Third-Party Risk Management Policy | [Ver] | [Date] |
| [Doc ID] | Incident Management Policy | [Ver] | [Date] |
| [Doc ID] | Change Management Policy | [Ver] | [Date] |
| [Doc ID] | Business Impact Analysis Report | [Ver] | [Date] |
| [Doc ID] | Prior Technology Risk Assessment Report | [Ver] | [Date] |

---

## 18. Appendices

### Appendix A — Assessment Scope Diagram

*Attach or embed a network/architecture diagram illustrating the technology environment within the scope of this assessment. The diagram should clearly identify critical systems, network segments, trust boundaries, and interconnections with third-party providers.*

> **[ATTACHMENT PLACEHOLDER]**
> Diagram Title: [Organization Name] — Technology Assessment Scope Diagram
> Document Reference: [Diagram ID]
> Prepared By: [Name / Team]
> Date: [Date]
> Tool Used: [e.g., Microsoft Visio / draw.io / Lucidchart]

---

### Appendix B — Asset Classification Criteria Detail

*Provide detailed elaboration of the classification criteria applied in Section 5, including any organization-specific adjustments to standard definitions.*

**B.1 Critical Business Function (CBF) Definitions**

The following functions have been identified as Critical Business Functions (CBFs) in [Organization Name]'s Business Impact Analysis:

| CBF ID | Critical Business Function | Supporting Systems | Recovery Time Objective (RTO) | Recovery Point Objective (RPO) |
|---|---|---|---|---|
| CBF-001 | [e.g., Retail Banking Transaction Processing] | [Asset IDs] | [e.g., 4 hours] | [e.g., 1 hour] |
| CBF-002 | [e.g., Interbank Fund Transfer (IBG/RENTAS)] | [Asset IDs] | [e.g., 2 hours] | [e.g., 30 minutes] |
| CBF-003 | [e.g., Customer Internet Banking] | [Asset IDs] | [e.g., 4 hours] | [e.g., 1 hour] |
| … | … | … | … | … |

---

### Appendix C — Threat Taxonomy

*Provide the complete threat taxonomy used in the risk assessment to ensure consistency of threat identification across all assets and assessment cycles.*

| Threat Category | Threat ID | Threat Description | Threat Actor Examples |
|---|---|---|---|
| Cyber / Malicious | THR-CYB-001 | Ransomware attack | Organized cybercriminal groups, state-sponsored actors |
| Cyber / Malicious | THR-CYB-002 | Phishing / spear-phishing | External threat actors targeting employees |
| Cyber / Malicious | THR-CYB-003 | Supply chain compromise | Compromised software vendor or update mechanism |
| Cyber / Malicious | THR-CYB-004 | Distributed Denial of Service (DDoS) | Hacktivists, cybercriminal groups |
| Insider | THR-INS-001 | Malicious insider data exfiltration | Disgruntled or compromised employee |
| Insider | THR-INS-002 | Accidental data loss or misconfiguration | Employee error |
| Infrastructure | THR-INF-001 | Hardware failure | Equipment malfunction, aging infrastructure |
| Infrastructure | THR-INF-002 | Data centre power failure | Utility failure, UPS malfunction |
| Environmental | THR-ENV-001 | Natural disaster | Flood, earthquake |
| Third Party | THR-TPT-001 | Third-party service outage | Cloud provider failure, ISP outage |
| Third Party | THR-TPT-002 | Third-party data breach | Compromise of vendor systems handling [Organization Name] data |
| … | … | … | … |

---

### Appendix D — Vulnerability Assessment Details

*Where detailed vulnerability scan results, penetration test reports, or configuration review outputs have informed this risk assessment, reference or summarise them here.*

| Assessment Type | Tool / Method | Date Conducted | Conducted By | Report Reference | Key Vulnerabilities Identified | Linked Risk IDs |
|---|---|---|---|---|---|---|
| External Penetration Test | [Tool / Methodology] | [Date] | [Internal Team / External Vendor] | [Report ID] | [Summary of findings, e.g., "2 Critical CVEs on internet-facing web servers"] | [RISK-APP-001, RISK-CYB-002] |
| Internal Vulnerability Scan | [Tool] | [Date] | [Team] | [Report ID] | [Summary] | [Risk IDs] |
| Cloud Configuration Review | [Tool] | [Date] | [Team] | [Report ID] | [Summary] | [Risk IDs] |
| Third-Party Security Assessment | [Method] | [Date] | [Team / Vendor] | [Report ID] | [Summary] | [Risk IDs] |

---

### Appendix E — Regulatory Notification Log

*Document any regulatory notifications made to BNM or other relevant authorities in connection with technology incidents or risk events arising during the assessment period.*

| Notification ID | Notification Type | Submitted To | Submission Date | Incident / Event Description | BNM Reference Number | Current Status | Follow-Up Required |
|---|---|---|---|---|---|---|---|
| NOTIF-001 | [Technology Incident Notification / Material Outsourcing Notification / Other] | [BNM / Other regulator] | [Date] | [Brief description] | [BNM-assigned reference or pending] | [Acknowledged / Under Review / Closed] | [Yes / No — description] |
| … | … | … | … | … | … | … | … |

---

### Appendix F — Glossary of Terms

*Provide definitions of all technical and regulatory terms used in this report to assist readers unfamiliar with specific terminology.*

| Term | Definition |
|---|---|
| **Asset** | Any hardware, software, data, personnel, or process that has value to the organization and requires protection. |
| **CBF** | Critical Business Function — a function whose disruption would result in significant financial loss, reputational damage, regulatory breach, or harm to customers, as defined under BNM RMiT. |
| **Control** | A measure that modifies risk, including any process, policy, device, practice, or other action that modifies risk. |
| **Custodian** | The individual responsible for the day-to-day management and operational security of a technology asset. |
| **CVE** | Common Vulnerabilities and Exposures — a list of publicly known information security vulnerabilities maintained by MITRE. |
| **CVSS** | Common Vulnerability Scoring System — an open standard for assessing the severity of vulnerabilities. |
| **DRP** | Disaster Recovery Plan — documented procedures to recover technology systems following a disruptive event. |
| **EOL** | End of Life — the point at which a vendor ceases to provide support, patches, or updates for a technology product. |
| **IAM** | Identity and Access Management — the framework of policies and technologies ensuring that the right people have appropriate access to technology resources. |
| **Inherent Risk** | The level of risk prior to considering the effect of existing controls. |
| **KRI** | Key Risk Indicator — a metric used to signal increasing risk exposure. |
| **MFA** | Multi-Factor Authentication — an authentication method requiring two or more verification factors. |
| **PAM** | Privileged Access Management — controls governing the use of privileged (administrative) accounts. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data in commercial transactions. |
| **Residual Risk** | The level of risk remaining after controls have been applied. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for licensed financial institutions. |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss, expressed as a time period. |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a system or process after a disruption. |
| **SIEM** | Security Information and Event Management — a system providing real-time analysis of security alerts from across the technology environment. |
| **SLA** | Service Level Agreement — a contract between a service provider and customer defining the expected level of service. |
| **SOC** | Security Operations Centre — a centralized function responsible for monitoring, detecting, and responding to security incidents. |
| **Threat** | A potential cause of an unwanted incident, which may result in harm to a system or organization. |
| **Vulnerability** | A weakness in a system or control that could be exploited by a threat. |

---

### Appendix G — Assessment Team and Acknowledgements

*Document the full assessment team involved in producing this report, including any external assessors.*

| Name | Title | Organization | Role in Assessment | Contact |
|---|---|---|---|---|
| [Full Name] | Head of Technology Risk | [Organization Name] | Assessment Lead; overall accountability | [Email] |
| [Full Name] | Technology Risk Manager | [Organization Name] | Lead assessor; risk register coordination | [Email] |
| [Full Name] | Technology Risk Analyst | [Organization Name] | Asset inventory; data collection | [Email] |
| [Full Name] | [CISO / Security Architect] | [Organization Name] | Cybersecurity risk assessment | [Email] |
| [Full Name] | [IT Infrastructure Manager] | [Organization Name] | Infrastructure asset review; control evidence provision | [Email] |
| [Full Name] | [Representative — Application Teams] | [Organization Name] | Application inventory; application risk input | [Email] |
| [Full Name] | [Vendor Representative] | [External Assessor / Vendor] | [Role — e.g., External penetration testing] | [Email] |

---

*End of Document*

---

**Document Control Reminder:** This document must be stored in [Organization Name]'s approved document management system under the Technology Risk taxonomy. Access is restricted to individuals with a verified need-to-know in accordance with the Information Classification and Handling Policy. Printed copies are uncontrolled. Please verify currency against the document management system before use.

| Field | Value |
|---|---|
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Storage Location | [Document Management System Path] |
| Retention Period | [e.g., 7 years from date of creation, per Records Retention Policy] |
| Disposal Method | [Secure destruction per Information Classification and Handling Policy] |