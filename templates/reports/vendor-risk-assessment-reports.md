# Vendor Risk Assessment Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID, e.g., TRM-VRA-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **RMiT Reference** | Clause 10.46 |

---

> **Handling Instruction:** This document is classified as **Confidential**. It must not be shared outside of [Organization Name] without prior written approval from the Head of Technology Risk. Physical copies must be stored in a secure location and electronic copies must be encrypted at rest.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Vendor Identification and Asset Register](#3-vendor-identification-and-asset-register)
4. [Classification and Categorisation](#4-classification-and-categorisation)
5. [Vendor Ownership and Custodianship](#5-vendor-ownership-and-custodianship)
6. [Vendor Risk Tiering Criteria](#6-vendor-risk-tiering-criteria)
7. [Due Diligence Assessment](#7-due-diligence-assessment)
8. [Service Level Agreements and Key Performance Indicators](#8-service-level-agreements-and-key-performance-indicators)
9. [Exit Strategy and Transition Planning](#9-exit-strategy-and-transition-planning)
10. [Risk Treatment and Remediation](#10-risk-treatment-and-remediation)
11. [Continuous Monitoring and Quarterly Review](#11-continuous-monitoring-and-quarterly-review)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Vendor Risk Assessment Report documents the structured evaluation of technology vendors engaged by [Organization Name] in accordance with the Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.46, which mandates that financial institutions maintain a comprehensive register of technology vendors and subject all vendors providing critical or significant technology services to a formal risk assessment process.

The purpose of this report is to:

- Establish a systematic, repeatable methodology for assessing technology vendor risk across the full vendor lifecycle, from onboarding through offboarding.
- Provide the Board of Directors, Senior Management, and relevant control functions with a consolidated, auditable record of vendor risk exposures and the controls in place to manage them.
- Ensure that [Organization Name] maintains adequate oversight of outsourced technology services and third-party technology dependencies, proportionate to the criticality and risk profile of each vendor.
- Support compliance with BNM RMiT requirements and demonstrate sound governance over the technology supply chain.
- Enable informed decision-making regarding vendor selection, contract negotiation, ongoing management, and exit planning.

### 1.2 Scope

This report covers all technology vendors engaged by [Organization Name], including but not limited to:

- **Cloud Service Providers (CSPs):** Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) providers.
- **Core Banking System Vendors:** Providers of mission-critical banking platforms, payment switches, and transaction processing systems.
- **Managed Security Service Providers (MSSPs):** Vendors delivering cybersecurity monitoring, threat intelligence, or incident response services.
- **Data and Analytics Vendors:** Third parties processing, storing, or transmitting customer or operational data on behalf of [Organization Name].
- **Network and Telecommunications Providers:** Vendors providing connectivity, WAN, SD-WAN, or unified communications services.
- **Hardware and Infrastructure Vendors:** Suppliers of servers, network equipment, end-user computing devices, and data centre infrastructure.
- **Software Vendors:** Providers of licensed software, open-source software under commercial support agreements, and bespoke software development services.
- **IT Support and Professional Services:** Third-party entities providing managed IT services, system integration, or technology consulting.

**Out of Scope:**

The following are excluded from this report unless otherwise determined by the Head of Technology Risk:

- Internal group entities (assessed under the Group Technology Risk framework).
- Vendors providing non-technology goods and services with no access to [Organization Name] systems, data, or premises.
- Vendors engaged under contracts with a total value below [RM threshold, e.g., RM 50,000] per annum and with no access to critical systems or sensitive data, subject to a documented exemption approved by the Head of Technology Risk.

### 1.3 Assessment Period

*State the period covered by this assessment report. For continuous monitoring programmes, indicate the baseline date and the quarterly review cycle this report satisfies.*

| Field | Detail |
|---|---|
| **Assessment Baseline Date** | [DD MMM YYYY] |
| **Quarterly Review Period** | Q[X] [YYYY], covering [Start Date] to [End Date] |
| **Next Scheduled Review** | [DD MMM YYYY] |
| **Report Prepared By** | [Name, Designation] |
| **Report Reviewed By** | [Name, Designation] |

---

## 2. Regulatory Context

### 2.1 Applicable Regulatory Requirements

*This section identifies the specific regulatory obligations that this report satisfies. Authors should ensure all referenced clauses reflect the current version of each policy document in force.*

[Organization Name] is subject to the following primary regulatory requirements governing technology vendor risk management:

| Regulation | Issuing Authority | Relevant Clauses | Obligation Summary |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 10.46 | Maintain a vendor register; conduct formal risk assessments for technology vendors; apply proportionate oversight based on vendor risk tier |
| RMiT | BNM | Clause 10.47 | Assess vendor concentration risk and single points of failure |
| RMiT | BNM | Clause 10.48 | Ensure contractual provisions address security, audit rights, and business continuity |
| RMiT | BNM | Clause 10.49 | Define and test exit strategies for critical vendor relationships |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Section 7, 8, 9 | Ensure vendors processing personal data are subject to adequate contractual data protection obligations |
| Financial Services Act 2013 (FSA) | BNM | Section 57 | Board accountability for outsourcing and vendor oversight |
| Guidelines on Outsourcing | BNM | Para 8–12 | Notification requirements, ongoing monitoring, and right to audit provisions for outsourced services |
| NACSA Cyber Security Framework | NACSA | Domain 5 | Supply chain and third-party cyber risk management |

### 2.2 Internal Policy Alignment

This report is prepared in accordance with the following internal policies and frameworks of [Organization Name]:

- Technology Risk Management Policy ([Policy ID])
- Third-Party Risk Management Policy ([Policy ID])
- Information Security Policy ([Policy ID])
- Data Classification and Handling Policy ([Policy ID])
- Business Continuity Management Policy ([Policy ID])
- Outsourcing Policy ([Policy ID])

### 2.3 Regulatory Reporting Obligations

*Identify any regulatory reporting obligations triggered by findings in this report. For example, BNM must be notified of material vendor incidents or changes to critical outsourced service arrangements.*

| Trigger | Reporting Authority | Timeframe | Reference |
|---|---|---|---|
| Material change to a critical outsourced technology service | BNM | Prior written notification required | RMiT / BNM Outsourcing Guidelines |
| Significant technology incident involving a vendor | BNM | Within [X] hours of declaration | RMiT Clause 11.x |
| Vendor breach involving customer personal data | PDPA Commissioner | Within 72 hours of discovery | PDPA Amendment |
| Vendor insolvency or service cessation (critical vendor) | BNM | As soon as practicable | BNM Outsourcing Guidelines |

---

## 3. Vendor Identification and Asset Register

### 3.1 Overview

*This section establishes the complete inventory of technology vendors in scope for this assessment. The vendor register must be maintained as a living document and updated whenever a new vendor is onboarded, an existing vendor relationship is materially changed, or a vendor is offboarded. All entries must be validated as part of the quarterly review cycle.*

### 3.2 Consolidated Vendor Register

*Complete one row per vendor. Use the Vendor ID assigned in [Organization Name]'s Third-Party Management System or equivalent register. Attach supporting contracts, statements of work, and service descriptions as appendices.*

| Vendor ID | Vendor Legal Name | Trading Name (if different) | Country of Incorporation | Country of Operations | Services Provided | Contract Reference | Contract Start Date | Contract Expiry Date | Auto-Renewal | Relationship Owner |
|---|---|---|---|---|---|---|---|---|---|---|
| VND-001 | [Vendor Legal Name] | [Trading Name] | [Country] | [Country] | [e.g., Cloud IaaS — Core Banking Hosting] | [Contract Ref No.] | [DD MMM YYYY] | [DD MMM YYYY] | Yes / No | [Name, Designation] |
| VND-002 | [Vendor Legal Name] | [Trading Name] | [Country] | [Country] | [e.g., Managed SOC Services] | [Contract Ref No.] | [DD MMM YYYY] | [DD MMM YYYY] | Yes / No | [Name, Designation] |
| VND-003 | [Vendor Legal Name] | [Trading Name] | [Country] | [Country] | [Service Description] | [Contract Ref No.] | [DD MMM YYYY] | [DD MMM YYYY] | Yes / No | [Name, Designation] |
| VND-004 | [Vendor Legal Name] | [Trading Name] | [Country] | [Country] | [Service Description] | [Contract Ref No.] | [DD MMM YYYY] | [DD MMM YYYY] | Yes / No | [Name, Designation] |
| VND-005 | [Vendor Legal Name] | [Trading Name] | [Country] | [Country] | [Service Description] | [Contract Ref No.] | [DD MMM YYYY] | [DD MMM YYYY] | Yes / No | [Name, Designation] |

*Continue for all vendors in scope.*

### 3.3 Technology Asset Mapping

*For each vendor, identify the specific technology assets — systems, platforms, data repositories, and infrastructure components — that the vendor operates, accesses, or supports. This mapping is essential for impact analysis and supports the classification exercise in Section 4.*

| Vendor ID | Asset ID | Asset Name | Asset Type | Hosting Environment | Data Classification | Business Process Supported | Asset Criticality |
|---|---|---|---|---|---|---|---|
| VND-001 | AST-001 | [e.g., Core Banking Platform] | Application | [e.g., Private Cloud — Vendor Managed] | [e.g., Confidential] | [e.g., Deposit Account Management] | [Critical / High / Medium / Low] |
| VND-001 | AST-002 | [e.g., Disaster Recovery Environment] | Infrastructure | [e.g., Colocation — [City]] | [e.g., Confidential] | [e.g., Business Continuity] | [Critical] |
| VND-002 | AST-003 | [e.g., SIEM Platform] | Security Tool | [e.g., SaaS] | [e.g., Internal] | [e.g., Security Monitoring] | [High] |
| VND-003 | AST-004 | [Asset Name] | [Type] | [Environment] | [Classification] | [Business Process] | [Criticality] |

### 3.4 Sub-Contractor and Fourth-Party Dependency Register

*BNM RMiT requires [Organization Name] to understand material sub-contracting arrangements. Vendors must contractually notify [Organization Name] of any sub-contractors used to deliver services. Complete this register based on disclosures received from vendors and independent due diligence.*

| Vendor ID | Sub-Contractor Name | Country | Service Sub-Contracted | Vendor Disclosed? | [Organization Name] Approval Status | Risk Notes |
|---|---|---|---|---|---|---|
| VND-001 | [Sub-Contractor Name] | [Country] | [e.g., Data centre physical security] | Yes / No | Approved / Pending / Not Approved | [Notes] |
| VND-002 | [Sub-Contractor Name] | [Country] | [Service Description] | Yes / No | [Status] | [Notes] |

### 3.5 Vendor Register Change Log

*Record all changes to the vendor register since the previous quarterly review.*

| Change Date | Vendor ID | Vendor Name | Change Type | Change Description | Approved By |
|---|---|---|---|---|---|
| [DD MMM YYYY] | [VND-XXX] | [Vendor Name] | New Onboarding / Amendment / Offboarding | [Description of change] | [Name] |
| [DD MMM YYYY] | [VND-XXX] | [Vendor Name] | [Type] | [Description] | [Name] |

---

## 4. Classification and Categorisation

### 4.1 Overview

*This section documents how each vendor and associated technology asset has been classified. Classification drives the level of due diligence, oversight intensity, contractual requirements, and exit planning obligations applied to each vendor relationship. Classification must be reviewed at least annually or when there is a material change to the vendor's services, financial position, or the assets they support.*

### 4.2 Classification Framework

[Organization Name] applies a two-dimensional classification framework to technology vendors:

**Dimension 1: Service Criticality**

Assessed based on the potential impact on [Organization Name]'s operations, customers, and regulatory obligations if the vendor's services were disrupted or compromised.

| Criticality Level | Definition |
|---|---|
| **Critical** | Vendor provides services that, if disrupted, would result in significant operational impact, inability to serve customers, regulatory breach, or material financial loss. Core banking, payment processing, and primary cloud hosting typically fall in this tier. |
| **High** | Vendor provides services that support key business functions. Disruption would cause significant but manageable operational impact within agreed recovery timeframes. |
| **Medium** | Vendor provides services that support important but non-core functions. Disruption would be inconvenient but alternative arrangements exist or can be arranged within a reasonable timeframe. |
| **Low** | Vendor provides commodity or easily substitutable services. Disruption would have minimal operational impact. |

**Dimension 2: Data Sensitivity**

Assessed based on the classification of data that the vendor accesses, processes, stores, or transmits.

| Data Sensitivity Level | Definition |
|---|---|
| **Highly Sensitive** | Vendor accesses or processes personal financial data, payment card data, authentication credentials, or other highly sensitive personal data subject to PDPA, PCI-DSS, or equivalent obligations. |
| **Sensitive** | Vendor accesses internal data classified as Confidential that is not publicly disclosable. |
| **Internal** | Vendor accesses data classified for internal use only, with no direct personal data exposure. |
| **Public** | Vendor only accesses or processes publicly available information. |

### 4.3 Vendor Classification Matrix

*Assign each vendor to a classification using both dimensions. The resulting combined classification determines the applicable risk tier (see Section 6).*

| Vendor ID | Vendor Name | Service Criticality | Data Sensitivity | Combined Classification | Justification |
|---|---|---|---|---|---|
| VND-001 | [Vendor Name] | Critical | Highly Sensitive | **Tier 1 — Critical** | [e.g., Hosts core banking platform and processes all customer transaction and account data] |
| VND-002 | [Vendor Name] | High | Sensitive | **Tier 2 — High** | [e.g., Provides security monitoring with access to internal logs] |
| VND-003 | [Vendor Name] | Medium | Internal | **Tier 3 — Medium** | [e.g., Provides IT helpdesk services with access to internal ticketing systems] |
| VND-004 | [Vendor Name] | Low | Public | **Tier 4 — Low** | [e.g., Provides domain registration services, no access to internal systems] |
| VND-005 | [Vendor Name] | [Criticality] | [Sensitivity] | [Tier] | [Justification] |

### 4.4 Categorisation by Service Type

*Categorise each vendor by the type of technology service provided. This supports concentration risk analysis (see Section 11) and informs succession planning.*

| Service Category | Vendor IDs | Number of Vendors | Notes |
|---|---|---|---|
| Cloud Infrastructure (IaaS) | [VND-XXX, VND-XXX] | [#] | [e.g., Primary and DR cloud providers] |
| Cloud Platform (PaaS) | [VND-XXX] | [#] | |
| SaaS Applications | [VND-XXX, VND-XXX] | [#] | |
| Core Banking / Core Systems | [VND-XXX] | [#] | |
| Managed Security Services | [VND-XXX] | [#] | |
| Network / Connectivity | [VND-XXX] | [#] | |
| Data Centre / Colocation | [VND-XXX] | [#] | |
| Hardware Supply | [VND-XXX] | [#] | |
| Software Licensing | [VND-XXX, VND-XXX] | [#] | |
| Professional / Managed IT Services | [VND-XXX] | [#] | |
| Other | [VND-XXX] | [#] | |

### 4.5 Outsourcing vs. Non-Outsourcing Determination

*BNM's Outsourcing Guidelines impose additional obligations on arrangements that meet the definition of outsourcing. Complete this table to document the determination for each vendor.*

| Vendor ID | Vendor Name | Service Description | Meets BNM Outsourcing Definition? | BNM Notified? | Notification Date | Outsourcing Register Reference |
|---|---|---|---|---|---|---|
| VND-001 | [Vendor Name] | [Service] | Yes / No | Yes / No / N/A | [Date or N/A] | [Reference or N/A] |
| VND-002 | [Vendor Name] | [Service] | Yes / No | Yes / No / N/A | [Date or N/A] | [Reference or N/A] |

---

## 5. Vendor Ownership and Custodianship

### 5.1 Overview

*Clear ownership of vendor relationships is essential for effective risk governance. This section assigns formal accountability and operational responsibility for each vendor relationship. Owners are accountable for the completeness and accuracy of this register and for ensuring that all risk management activities are performed as required.*

### 5.2 Ownership Definitions

| Role | Definition |
|---|---|
| **Relationship Owner** | Senior member of the business or technology function who is primarily accountable for the business outcomes delivered by the vendor. Accountable for ensuring the vendor relationship is managed in accordance with this framework and that risk assessments are completed on schedule. |
| **Contract Owner** | Individual responsible for managing the contractual relationship with the vendor, including renewals, amendments, and compliance with contractual terms. Typically sits within Procurement or the relevant business function. |
| **Technical Custodian** | Individual with day-to-day technical responsibility for the systems, platforms, or services delivered by the vendor. Responsible for monitoring technical performance and escalating issues. |
| **Risk Custodian** | Technology Risk or Information Security representative responsible for maintaining the risk assessment for this vendor and coordinating any risk treatment activities. |
| **Data Owner** | Owner of data assets processed by the vendor, as defined in [Organization Name]'s Data Governance Framework. Accountable for data classification and for ensuring data protection obligations are met by the vendor. |

### 5.3 Vendor Ownership Register

*Complete one row per vendor. All roles must be assigned to named individuals. Where a role is vacant, this must be escalated to the Head of Technology Risk and remediated within [X] business days.*

| Vendor ID | Vendor Name | Relationship Owner | Contract Owner | Technical Custodian | Risk Custodian | Data Owner | Escalation Contact (Vendor Side) |
|---|---|---|---|---|---|---|---|
| VND-001 | [Vendor Name] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Vendor Contact Name, Title, Email] |
| VND-002 | [Vendor Name] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Vendor Contact Name, Title, Email] |
| VND-003 | [Vendor Name] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Vendor Contact Name, Title, Email] |
| VND-004 | [Vendor Name] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Name, Designation] | [Vendor Contact Name, Title, Email] |

### 5.4 Ownership Review and Handover

*Document any ownership changes since the previous quarterly review. Changes in ownership require a formal handover, including a briefing on current risk posture, open issues, and upcoming contractual milestones.*

| Vendor ID | Previous Owner Role | Previous Owner Name | New Owner Name | Effective Date | Handover Completed? | Handover Notes |
|---|---|---|---|---|---|---|
| [VND-XXX] | [Role] | [Previous Name] | [New Name] | [DD MMM YYYY] | Yes / No / In Progress | [Notes] |

---

## 6. Vendor Risk Tiering Criteria

### 6.1 Overview

*Risk tiering determines the intensity of oversight, due diligence, and contractual protections applied to each vendor. [Organization Name] applies a four-tier model aligned with BNM RMiT Clause 10.46 and the combined classification outcomes documented in Section 4.*

### 6.2 Risk Tier Definitions and Obligations

| Risk Tier | Tier Name | Criteria | Due Diligence Intensity | Review Frequency | On-Site Audit Requirement | BNM Notification Required |
|---|---|---|---|---|---|---|
| **Tier 1** | Critical | Critical service criticality AND/OR Highly Sensitive data. Typically outsourcing arrangements under BNM guidelines. | Comprehensive — full due diligence checklist (see Section 7) | Continuous monitoring; quarterly formal review | Mandatory — annually or upon material change | Yes — subject to BNM Outsourcing Guidelines |
| **Tier 2** | High | High service criticality OR Sensitive data. | Enhanced — full due diligence checklist with targeted deep dives | Bi-annual formal review; continuous performance monitoring | Recommended — bi-annually or risk-based | May apply — assess against BNM Outsourcing definition |
| **Tier 3** | Medium | Medium service criticality AND Internal data. | Standard — core due diligence checklist | Annual formal review | Discretionary — risk-based | Generally not required |
| **Tier 4** | Low | Low service criticality AND no access to sensitive data. | Simplified — basic vendor viability checks | Annual self-assessment | Not required | Not required |

### 6.3 Risk Tier Assignment

*Assign each vendor to a risk tier based on the classification outcomes in Section 4. Document the rationale for any tier assignment that deviates from the standard matrix.*

| Vendor ID | Vendor Name | Service Criticality | Data Sensitivity | Standard Tier (Matrix) | Assigned Tier | Deviation? | Deviation Rationale | Approved By |
|---|---|---|---|---|---|---|---|---|
| VND-001 | [Vendor Name] | Critical | Highly Sensitive | Tier 1 | Tier 1 | No | N/A | N/A |
| VND-002 | [Vendor Name] | High | Sensitive | Tier 2 | Tier 2 | No | N/A | N/A |
| VND-003 | [Vendor Name] | Medium | Internal | Tier 3 | Tier 2 | Yes — Uplifted | [e.g., Vendor has history of security incidents; additional oversight warranted] | [Name, Designation] |
| VND-004 | [Vendor Name] | Low | Public | Tier 4 | Tier 4 | No | N/A | N/A |
| VND-005 | [Vendor Name] | [Criticality] | [Sensitivity] | [Tier] | [Tier] | Yes / No | [Rationale if applicable] | [Approver if applicable] |

### 6.4 Tier Population Summary

| Tier | Tier Name | Number of Vendors | % of Total Vendor Population | Aggregate Annual Spend (RM) | Notes |
|---|---|---|---|---|---|
| Tier 1 | Critical | [#] | [%] | [RM amount] | |
| Tier 2 | High | [#] | [%] | [RM amount] | |
| Tier 3 | Medium | [#] | [%] | [RM amount] | |
| Tier 4 | Low | [#] | [%] | [RM amount] | |
| **Total** | | **[#]** | **100%** | **[RM amount]** | |

### 6.5 Concentration Risk Assessment

*Identify and assess concentration risk arising from the vendor portfolio. Concentration risk exists where [Organization Name] is overly dependent on a single vendor, a small number of vendors, vendors in a single geography, or vendors sharing a common infrastructure or ownership structure.*

| Concentration Risk Type | Identified Concentration | Vendors Involved | Assessment | Mitigation Measures |
|---|---|---|---|---|
| Single Vendor Dependency | [e.g., Single CSP for all cloud workloads] | [VND-XXX] | [High / Medium / Low] | [e.g., Multi-cloud strategy in progress; target completion Q[X] [YYYY]] |
| Geographic Concentration | [e.g., Three Tier 1 vendors with data centres in [City/Country]] | [VND-XXX, VND-XXX] | [Medium] | [e.g., Require at least one geographically diverse DR site under upcoming contract refresh] |
| Common Parent Entity | [e.g., Two vendors are subsidiaries of [Parent Company]] | [VND-XXX, VND-XXX] | [Medium] | [e.g., Consolidated risk assessment conducted; parent entity financial health monitored quarterly] |
| Technology Stack Dependency | [e.g., Multiple vendors dependent on [Technology/Platform]] | [VND-XXX, VND-XXX] | [Low] | [Description of mitigation] |

---

## 7. Due Diligence Assessment

### 7.1 Overview

*Due diligence is the process by which [Organization Name] evaluates a vendor's financial health, operational resilience, security posture, regulatory compliance, and overall suitability to provide services proportionate to the vendor's risk tier. Due diligence must be completed prior to contract execution for new vendors and refreshed at least as frequently as required by the vendor's assigned risk tier.*

### 7.2 Due Diligence Checklist — Tier 1 and Tier 2 Vendors

*Complete the checklist below for each Tier 1 and Tier 2 vendor. For Tier 3 and Tier 4 vendors, use the simplified checklist in Appendix B. Evidence references must point to documents retained in the vendor management file or document management system.*

#### 7.2.1 Financial Viability

| # | Due Diligence Item | Requirement | Assessment Outcome | Evidence Reference | Finding / Gap | Risk Rating | Remediation Required? |
|---|---|---|---|---|---|---|---|
| FV-01 | Latest Audited Financial Statements | Vendor to provide audited financial statements for the last 3 financial years | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings or "None"] | [High / Med / Low / N/A] | Yes / No |
| FV-02 | Credit Rating / Financial Health Indicators | Review of publicly available credit ratings or financial health scores (e.g., D&B, RAM, MARC) | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| FV-03 | Litigation and Regulatory Actions | Confirmation of no material pending litigation, regulatory sanctions, or enforcement actions | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| FV-04 | Beneficial Ownership Disclosure | Verified ultimate beneficial ownership structure; no sanctioned entities identified | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| FV-05 | Business Continuity of the Vendor | Vendor demonstrates financial resilience to continue operations through a sustained downturn | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |

#### 7.2.2 Information Security and Cyber Risk

| # | Due Diligence Item | Requirement | Assessment Outcome | Evidence Reference | Finding / Gap | Risk Rating | Remediation Required? |
|---|---|---|---|---|---|---|---|
| IS-01 | Information Security Certifications | Valid ISO/IEC 27001 certificate or equivalent, covering services provided to [Organization Name] | [Satisfactory / Requires Attention / Unsatisfactory] | [Cert Ref / Expiry Date] | [Findings] | [Rating] | Yes / No |
| IS-02 | SOC 2 Type II Report | Current SOC 2 Type II report (issued within 12 months) covering Security, Availability, and Confidentiality Trust Service Criteria | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref / Report Date] | [Findings] | [Rating] | Yes / No |
| IS-03 | Penetration Testing | Evidence of annual penetration testing by an independent qualified third party; remediation of critical and high findings within agreed timeframes | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref / Last Test Date] | [Findings] | [Rating] | Yes / No |
| IS-04 | Vulnerability Management Programme | Documented vulnerability management process; evidence of patch currency within policy-defined timeframes | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| IS-05 | Access Control and Identity Management | Multi-factor authentication enforced for privileged access; principle of least privilege applied; access reviews conducted quarterly | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| IS-06 | Data Encryption | Customer and sensitive data encrypted at rest (minimum AES-256) and in transit (TLS 1.2 or higher); key management documented | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| IS-07 | Security Incident Management | Documented incident response process; contractual obligation to notify [Organization Name] within [X] hours of a security incident | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| IS-08 | Security Awareness Training | Evidence that vendor staff with access to [Organization Name] systems or data receive annual security awareness training | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| IS-09 | Background Screening | Vendor conducts pre-employment background screening for staff with access to [Organization Name] systems or data | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| IS-10 | Supply Chain Security | Vendor has a documented process for assessing the security of its own sub-contractors and technology supply chain | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |

#### 7.2.3 Operational Resilience and Business Continuity

| # | Due Diligence Item | Requirement | Assessment Outcome | Evidence Reference | Finding / Gap | Risk Rating | Remediation Required? |
|---|---|---|---|---|---|---|---|
| OR-01 | Business Continuity Plan (BCP) | Documented and tested BCP covering all services provided to [Organization Name]; tested within the last 12 months | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref / Last Test Date] | [Findings] | [Rating] | Yes / No |
| OR-02 | Disaster Recovery Plan (DRP) | Documented DRP with defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) consistent with [Organization Name]'s requirements | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref / Last Test Date] | [Findings] | [Rating] | Yes / No |
| OR-03 | DR Test Results | Evidence of DR test conducted within the last 12 months; RTO and RPO achieved; all critical and high findings remediated | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| OR-04 | Redundancy and High Availability | Infrastructure redundancy (N+1 or higher) for components supporting [Organization Name]'s services; no single points of failure | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| OR-05 | Geographic Redundancy | Primary and secondary service delivery from geographically separate facilities with independent utility, network, and cooling | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| OR-06 | Change Management Process | Formal change management process with advance notice to [Organization Name] for changes affecting service delivery | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |

#### 7.2.4 Data Protection and Privacy

| # | Due Diligence Item | Requirement | Assessment Outcome | Evidence Reference | Finding / Gap | Risk Rating | Remediation Required? |
|---|---|---|---|---|---|---|---|
| DP-01 | PDPA Compliance | Vendor has documented processes to comply with Malaysia's Personal Data Protection Act 2010 for all personal data processed on behalf of [Organization Name] | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| DP-02 | Data Processing Agreement | Executed Data Processing Agreement (DPA) or equivalent contractual provisions covering lawful basis, retention, deletion, and security | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| DP-03 | Data Residency | Confirmation of data residency location(s); cross-border transfers assessed against legal and regulatory requirements | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| DP-04 | Data Retention and Disposal | Documented retention schedules aligned with [Organization Name]'s requirements; secure deletion processes verified | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |
| DP-05 | Data Breach Notification | Contractual obligation to notify [Organization Name] within 24 hours of discovering a personal data breach | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |

#### 7.2.5 Regulatory and Legal Compliance

| # | Due Diligence Item | Requirement | Assessment Outcome | Evidence Reference | Finding / Gap | Risk Rating | Remediation Required? |
|---|---|---|---|---|---|---|---|
| RC-01 | Regulatory Licences | Vendor holds all required licences and regulatory approvals for services provided | [Satisfactory / Requires Attention / Unsatisfactory] | [Licence Ref] | [Findings] | [Rating] | Yes / No |
| RC-02 | Sanctions Screening | Vendor and ultimate beneficial owners screened against OFAC, UN, EU, and local sanctions lists; no matches | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref / Screen Date] | [Findings] | [Rating] | Yes / No |
| RC-03 | Right to Audit | Contract includes [Organization Name]'s right to audit the vendor, including on-site inspection, with reasonable notice | [Satisfactory / Requires Attention / Unsatisfactory] | [Contract Clause Ref] | [Findings] | [Rating] | Yes / No |
| RC-04 | BNM Regulatory Access | Contract includes BNM's right to inspect vendor operations related to services provided to [Organization Name] | [Satisfactory / Requires Attention / Unsatisfactory] | [Contract Clause Ref] | [Findings] | [Rating] | Yes / No |
| RC-05 | Anti-Bribery and Corruption | Vendor has a documented anti-bribery and corruption policy; no known violations | [Satisfactory / Requires Attention / Unsatisfactory] | [Doc Ref] | [Findings] | [Rating] | Yes / No |

### 7.3 Due Diligence Summary by Vendor

*Summarise the due diligence outcome for each vendor. Full detailed checklists are maintained in the vendor management file.*

| Vendor ID | Vendor Name | Risk Tier | Due Diligence Date | Overall Outcome | No. of High Findings | No. of Medium Findings | No. of Low Findings | All Critical Findings Remediated? | Next Due Diligence Date |
|---|---|---|---|---|---|---|---|---|---|
| VND-001 | [Vendor Name] | Tier 1 | [DD MMM YYYY] | [Satisfactory / Conditional / Unsatisfactory] | [#] | [#] | [#] | Yes / No / N/A | [DD MMM YYYY] |
| VND-002 | [Vendor Name] | Tier 2 | [DD MMM YYYY] | [Outcome] | [#] | [#] | [#] | Yes / No / N/A | [DD MMM YYYY] |
| VND-003 | [Vendor Name] | Tier 3 | [DD MMM YYYY] | [Outcome] | [#] | [#] | [#] | Yes / No / N/A | [DD MMM YYYY] |
| VND-004 | [Vendor Name] | Tier 4 | [DD MMM YYYY] | [Outcome] | [#] | [#] | [#] | Yes / No / N/A | [DD MMM YYYY] |

### 7.4 Outstanding Due Diligence Items

*List all due diligence items that are overdue, in progress, or pending vendor response. All overdue Tier 1 items must be escalated to the Head of Technology Risk within [X] business days.*

| Vendor ID | Vendor Name | DD Item Reference | Item Description | Original Due Date | Current Status | Owner | Revised Due Date | Escalation Status |
|---|---|---|---|---|---|---|---|---|
| [VND-XXX] | [Vendor Name] | [IS-XX] | [Description of outstanding item] | [DD MMM YYYY] | [In Progress / Awaiting Vendor / Overdue] | [Name] | [DD MMM YYYY] | [Escalated / Not Escalated] |

---

## 8. Service Level Agreements and Key Performance Indicators

### 8.1 Overview

*This section documents the contractual service commitments, key performance indicators (KPIs), and actual performance measurements for each vendor. Contractual SLAs form the primary mechanism by which [Organization Name] holds vendors accountable for service quality and availability. KPIs supplement contractual commitments with operational metrics that provide early warning of degrading vendor performance.*

### 8.2 SLA Register

*Document the key SLA commitments for each vendor. Where a vendor has multiple SLAs across different services, group by vendor and list all applicable SLAs.*

#### Vendor: [VND-001 — Vendor Name]

| SLA ID | Service Component | SLA Metric | Target | Measurement Method | Measurement Frequency | Reporting Mechanism | Penalty for Breach | Contract Clause |
|---|---|---|---|---|---|---|---|---|
| SLA-001-01 | [e.g., Core Banking Platform] | Availability (uptime) | [e.g., 99.95% per calendar month, excluding planned maintenance] | [e.g., Automated monitoring via [Tool Name]] | Monthly | [e.g., Monthly SLA Report from vendor; reviewed in monthly service review meeting] | [e.g., Service credit of [X]% of monthly fee per [Y]% below target] | [Clause X.X] |
| SLA-001-02 | [e.g., Incident Response] | P1 Incident Response Time | [e.g., Acknowledge within 15 minutes; resolve within 4 hours] | [e.g., Incident management system logs] | Per incident | [e.g., Post-incident report within 48 hours] | [e.g., Service credit of RM [X] per hour beyond target] | [Clause X.X] |
| SLA-001-03 | [e.g., Planned Maintenance] | Advance Notice Period | [e.g., Minimum 5 business days for standard maintenance; 24 hours for emergency maintenance] | [e.g., Change management system records] | Per change | [e.g., Change notification via [Method]] | [e.g., Escalation and formal breach notice] | [Clause X.X] |
| SLA-001-04 | [e.g., Disaster Recovery] | Recovery Time Objective (RTO) | [e.g., ≤ 4 hours for Category 1 systems] | [e.g., DR test results and incident records] | Tested annually; measured per incident | [e.g., Annual DR test report] | [e.g., As per contract] | [Clause X.X] |
| SLA-001-05 | [e.g., Disaster Recovery] | Recovery Point Objective (RPO) | [e.g., ≤ 1 hour for Category 1 systems] | [e.g., DR test results] | Tested annually | [e.g., Annual DR test report] | [e.g., As per contract] | [Clause X.X] |
| SLA-001-06 | [e.g., Security Incident Notification] | Notification Timeframe | [e.g., Within 2 hours of confirmed security incident impacting [Organization Name] data] | [e.g., Incident log review] | Per incident | [e.g., Security incident notification] | [e.g., Formal breach notice; potential contract termination] | [Clause X.X] |

*Repeat SLA table for each vendor.*

### 8.3 KPI Register

*Document operational KPIs used to monitor vendor performance beyond contractual SLAs. KPIs are tracked continuously and reviewed at least quarterly.*

| KPI ID | Vendor ID | Vendor Name | KPI Description | Target / Threshold | Warning Threshold | Measurement Source | Review Frequency | Current Quarter Result | Trend | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| KPI-001 | VND-001 | [Vendor Name] | [e.g., Mean Time to Repair (MTTR) for P1 incidents] | [e.g., ≤ 2 hours] | [e.g., > 1.5 hours triggers review] | [e.g., Incident management system] | Monthly | [e.g., 1.8 hours average] | [Improving / Stable / Deteriorating] | [Green / Amber / Red] |
| KPI-002 | VND-001 | [Vendor Name] | [e.g., Patch compliance rate — critical patches within 14 days] | [e.g., 100%] | [e.g., < 95% triggers escalation] | [e.g., Vendor monthly patch report] | Monthly | [e.g., 97%] | [Stable] | [Amber] |
| KPI-003 | VND-001 | [Vendor Name] | [e.g., Change success rate (no unplanned rollbacks)] | [e.g., ≥ 98%] | [e.g., < 95%] | [e.g., Change management system] | Monthly | [e.g., 99.2%] | [Stable] | [Green] |
| KPI-004 | VND-002 | [Vendor Name] | [e.g., Security alert false positive rate] | [e.g., ≤ 15%] | [e.g., > 20%] | [e.g., SIEM analytics dashboard] | Monthly | [Result] | [Trend] | [Status] |
| KPI-005 | VND-003 | [Vendor Name] | [KPI Description] | [Target] | [Warning Threshold] | [Source] | [Frequency] | [Result] | [Trend] | [Status] |

### 8.4 SLA Performance Summary — Current Quarter

*Provide a consolidated summary of SLA performance for the current quarterly review period.*

| Vendor ID | Vendor Name | Risk Tier | No. of SLAs | SLAs Met | SLAs Breached | SLA Breach Description | Service Credits Applied (RM) | Formal Notices Issued | Remediation Plan In Place |
|---|---|---|---|---|---|---|---|---|---|
| VND-001 | [Vendor Name] | Tier 1 | [#] | [#] | [#] | [Brief description of any breaches] | [RM amount or N/A] | Yes / No | Yes / No / N/A |
| VND-002 | [Vendor Name] | Tier 2 | [#] | [#] | [#] | [Description or "None"] | [RM amount or N/A] | Yes / No | Yes / No / N/A |
| VND-003 | [Vendor Name] | Tier 3 | [#] | [#] | [#] | [Description or "None"] | [RM amount or N/A] | Yes / No | Yes / No / N/A |
| **Totals** | | | **[#]** | **[#]** | **[#]** | | **RM [amount]** | | |

### 8.5 Chronic Underperformance Log

*Document any vendor that has breached the same SLA or KPI on three or more consecutive review periods. Chronic underperformance triggers a formal vendor improvement notice and a structured performance improvement plan (PIP).*

| Vendor ID | Vendor Name | SLA / KPI Reference | Metric | Number of Consecutive Periods in Breach | Performance Improvement Plan Issued? | PIP Reference | Target Resolution Date |
|---|---|---|---|---|---|---|---|
| [VND-XXX] | [Vendor Name] | [SLA / KPI ID] | [Metric description] | [#] | Yes / No | [PIP Ref or N/A] | [DD MMM YYYY or N/A] |

---

## 9. Exit Strategy and Transition Planning

### 9.1 Overview

*BNM RMiT Clause 10.49 requires [Organization Name] to establish and maintain documented exit strategies for critical and material vendor relationships. Exit strategies ensure that [Organization Name] can transition away from a vendor — whether due to contract expiry, vendor failure, service degradation, regulatory direction, or strategic decision — without disrupting operations or compromising customer outcomes. Exit strategies must be documented at contract inception and reviewed at each annual risk assessment cycle.*

### 9.2 Exit Trigger Scenarios

*The following scenarios may trigger invocation of an exit strategy. Each scenario must be addressed in the exit plan for Tier 1 and Tier 2 vendors.*

| Scenario ID | Trigger Scenario | Likelihood (H/M/L) | Impact (H/M/L) | Planned Response |
|---|---|---|---|---|
| ET-01 | Vendor insolvency or appointment of liquidator / administrator | [L/M/H] | [H] | [Description of response, e.g., invoke contingency contract with alternate vendor; accelerate data extraction; notify BNM] |
| ET-02 | Regulatory direction to terminate or not renew | [L/M/H] | [H] | [Description] |
| ET-03 | Vendor provides notice of service discontinuation | [L/M/H] | [H] | [Description] |
| ET-04 | Sustained SLA underperformance triggering contractual termination rights | [L/M/H] | [M/H] | [Description] |
| ET-05 | Material security breach or data compromise by vendor | [L/M/H] | [H] | [Description] |
| ET-06 | Strategic decision by [Organization Name] to in-source or change vendor | [L/M/H] | [M] | [Description] |
| ET-07 | Vendor acquisition or change of control creating conflict of interest or concentration risk | [L/M/H] | [M/H] | [Description] |
| ET-08 | Geopolitical event or sanctions impacting vendor's ability to operate | [L/M/H] | [H] | [Description] |

### 9.3 Exit Strategy Register

*Complete an exit strategy entry for each Tier 1 and Tier 2 vendor. Tier 3 and Tier 4 vendors require a simplified exit plan (see Appendix C).*

#### 9.3.1 Exit Strategy: [VND-001 — Vendor Name]

| Field | Detail |
|---|---|
| **Vendor ID** | VND-001 |
| **Vendor Name** | [Vendor Legal Name] |
| **Service(s) Covered** | [List services covered by this exit plan] |
| **Risk Tier** | Tier 1 |
| **Contract Notice Period** | [e.g., 180 days written notice] |
| **Estimated Transition Duration** | [e.g., 12–18 months for full migration] |
| **Exit Plan Owner** | [Name, Designation] |
| **Exit Plan Last Reviewed** | [DD MMM YYYY] |
| **Exit Plan Next Review** | [DD MMM YYYY] |

**Alternative Service Providers Identified:**

| Alternative Provider | Service Coverage | Readiness Assessment | Engagement Status |
|---|---|---|---|
| [Provider Name] | [Service(s) they could provide] | [Assessment: Ready / Partially Ready / Assessment Pending] | [e.g., Preliminary discussions held; RFP issued; No engagement yet] |
| [Provider Name] | [Service(s)] | [Assessment] | [Status] |

**Data Portability and Extraction:**

| Data Asset | Format | Extraction Method | Estimated Extraction Time | Complexity |
|---|---|---|---|---|
| [e.g., Core transaction database] | [e.g., SQL dump / CSV / Proprietary format] | [e.g., Vendor-assisted export; API extraction] | [e.g., 5 business days] | [High / Medium / Low] |
| [e.g., Document management archives] | [e.g., PDF / Original format] | [e.g., Bulk download via portal] | [e.g., 2 business days] | [Low] |
| [Data asset] | [Format] | [Method] | [Timeframe] | [Complexity] |

**Key Exit Milestones:**

| Phase | Milestone | Estimated Duration | Owner | Dependencies |
|---|---|---|---|---|
| 1 — Initiation | Exit decision ratified by Senior Management; exit plan activated | [e.g., Week 1] | [Name] | [Senior Management approval] |
| 2 — Data Extraction | Complete extraction and validation of all [Organization Name] data | [e.g., Weeks 2–6] | [Name] | [Vendor cooperation; data portability provisions in contract] |
| 3 — Parallel Operation | Operate existing vendor and replacement service in parallel for validation | [e.g., Months 2–4] | [Name] | [Replacement vendor ready] |
| 4 — Transition | Migrate all production workloads to replacement service | [e.g., Months 4–12] | [Name] | [Successful parallel operation] |
| 5 — Termination | Formal service termination; final data deletion confirmation; contract close-out | [e.g., Month 13–15] | [Name] | [Migration complete; data confirmed deleted] |

**Exit Readiness Assessment:**

| Readiness Factor | Current Status | Gaps Identified | Mitigation Actions |
|---|---|---|---|
| Alternative provider identified and engaged | [Ready / In Progress / Not Started] | [Gaps] | [Actions] |
| Data portability provisions contractually secured | [Ready / Partially Ready / Not Ready] | [Gaps] | [Actions] |
| Internal skills to manage transition available | [Ready / Partially Ready / Not Ready] | [Gaps] | [Actions] |
| Transition budget approved | [Ready / In Progress / Not Budgeted] | [Gaps] | [Actions] |
| Communication plan for staff and customers prepared | [Ready / In Progress / Not Started] | [Gaps] | [Actions] |
| Regulatory notification requirements mapped | [Ready / In Progress / Not Started] | [Gaps] | [Actions] |

**Overall Exit Readiness Rating:** [Red — Significant gaps / Amber — Some gaps, plan in place / Green — Ready]

*Repeat Exit Strategy entry for each Tier 1 and Tier 2 vendor.*

### 9.4 Exit Strategy Summary

| Vendor ID | Vendor Name | Risk Tier | Exit Plan Documented? | Exit Readiness Rating | Last Tested / Reviewed | Alternative Provider Identified? | Outstanding Actions |
|---|---|---|---|---|---|---|---|
| VND-001 | [Vendor Name] | Tier 1 | Yes / No | [Red / Amber / Green] | [DD MMM YYYY] | Yes / No / Partial | [# outstanding actions] |
| VND-002 | [Vendor Name] | Tier 2 | Yes / No | [Rating] | [DD MMM YYYY] | Yes / No / Partial | [#] |
| VND-003 | [Vendor Name] | Tier 3 | Yes (simplified) / No | [Rating] | [DD MMM YYYY] | Yes / No | [#] |

---

## 10. Risk Treatment and Remediation

### 10.1 Risk Register — Vendor Risks

*This section consolidates all identified vendor risks into a single risk register. Risks are identified from due diligence assessments, SLA performance monitoring, concentration risk analysis, and ongoing vendor oversight activities. Each risk must have an assigned owner, treatment strategy, and target residual risk rating.*

**Risk Rating Scale:**

| Likelihood | Description |
|---|---|
| 5 — Almost Certain | Expected to occur in most circumstances |
| 4 — Likely | Will probably occur in most circumstances |
| 3 — Possible | Might occur at some time |
| 2 — Unlikely | Could occur at some time |
| 1 — Rare | May occur only in exceptional circumstances |

| Impact | Description |
|---|---|
| 5 — Catastrophic | Severe financial loss, regulatory sanction, reputational damage; business continuity threatened |
| 4 — Major | Significant financial loss, regulatory breach, material customer impact |
| 3 — Moderate | Moderate financial loss, significant operational disruption |
| 2 — Minor | Minor financial loss, limited operational impact, manageable |
| 1 — Negligible | Minimal impact; business as usual resolution |

**Risk Rating = Likelihood × Impact. Ratings: 1–4 Low; 5–9 Medium; 10–16 High; 17–25 Critical.**

| Risk ID | Vendor ID | Vendor Name | Risk Category | Risk Description | Inherent Likelihood (1–5) | Inherent Impact (1–5) | Inherent Risk Rating | Current Controls | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Risk Rating | Treatment Strategy | Treatment Actions | Action Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| VR-001 | VND-001 | [Vendor Name] | Operational Resilience | [e.g., Single data centre creates a single point of failure for core banking services] | [4] | [5] | [20 — Critical] | [e.g., Contractual DR requirement; annual DR test] | [e.g., Partially Effective — DR not tested for full workload] | [3] | [5] | [15 — High] | Mitigate | [e.g., Require vendor to complete full-workload DR test by Q3 2025; escalate to CTO if not remediated] | [Name] | [DD MMM YYYY] | [Open / In Progress / Closed] |
| VR-002 | VND-001 | [Vendor Name] | Cybersecurity | [e.g., Vendor's last penetration test is 18 months old, exceeding [Organization Name]'s 12-month requirement] | [3] | [4] | [12 — High] | [e.g., ISO 27001 certification maintained; vendor committed to testing by end of quarter] | [Partially Effective] | [2] | [4] | [8 — Medium] | Mitigate | [e.g., Obtain written commitment and evidence of test by DD MMM YYYY; escalate if not received] | [Name] | [DD MMM YYYY] | [In Progress] |
| VR-003 | VND-002 | [Vendor Name] | Concentration | [Risk description] | [#] | [#] | [Score — Rating] | [Controls] | [Effectiveness] | [#] | [#] | [Score — Rating] | [Mitigate / Transfer / Accept / Avoid] | [Actions] | [Name] | [Date] | [Status] |
| VR-004 | ALL | Portfolio | Concentration | [e.g., Concentration risk from [X]% of Tier 1 vendors hosted in a single geographic region] | [#] | [#] | [Score] | [Controls] | [Effectiveness] | [#] | [#] | [Score] | [Strategy] | [Actions] | [Name] | [Date] | [Status] |

### 10.2 Risk Treatment Summary

| Risk Rating Category | No. of Risks (Inherent) | No. of Risks (Residual) | Treatment Strategy Breakdown | All Accepted Risks Approved? |
|---|---|---|---|---|
| Critical (17–25) | [#] | [#] | [Mitigate: # / Transfer: # / Avoid: # / Accept: #] | Yes / No / N/A |
| High (10–16) | [#] | [#] | [Mitigate: # / Transfer: # / Avoid: # / Accept: #] | Yes / No / N/A |
| Medium (5–9) | [#] | [#] | [Mitigate: # / Transfer: # / Avoid: # / Accept: #] | Yes / No / N/A |
| Low (1–4) | [#] | [#] | [Mitigate: # / Transfer: # / Avoid: # / Accept: #] | Yes / No / N/A |
| **Total** | **[#]** | **[#]** | | |

### 10.3 Overdue Risk Treatment Actions

*All overdue risk treatment actions must be escalated. Critical and High risks with overdue actions are escalated to the CTO / CISO. All overdue actions are reported to the Technology Risk Committee.*

| Risk ID | Vendor ID | Risk Description | Treatment Action | Original Due Date | Days Overdue | Owner | Escalation Level | Revised Due Date |
|---|---|---|---|---|---|---|---|---|
| [VR-XXX] | [VND-XXX] | [Brief risk description] | [Action description] | [DD MMM YYYY] | [#] | [Name] | [Technology Risk Committee / CTO / CISO] | [DD MMM YYYY] |

---

## 11. Continuous Monitoring and Quarterly Review

### 11.1 Monitoring Framework

*[Organization Name] operates a continuous monitoring programme for all Tier 1 and Tier 2 vendors, supplemented by quarterly formal reviews for all vendors in scope. The monitoring framework draws on multiple data sources to provide timely visibility of vendor risk developments.*

| Monitoring Activity | Frequency | Applicable Tiers | Data Source | Owner | Output |
|---|---|---|---|---|---|
| SLA performance monitoring | Monthly | Tier 1, Tier 2 | Vendor monthly reports; automated monitoring tools | Technical Custodian | Monthly performance dashboard |
| KPI tracking and review | Monthly | Tier 1, Tier 2, Tier 3 | Vendor reports; internal monitoring | Technical Custodian | KPI dashboard |
| Security threat intelligence monitoring | Continuous | Tier 1, Tier 2 | OSINT; dark web monitoring; vendor security bulletins | Risk Custodian / CISO | Immediate escalation if material threats identified |
| Vendor financial health check | Quarterly | Tier 1, Tier 2 | Commercial credit monitoring service; public filings | Risk Custodian | Quarterly financial health update |
| Regulatory and sanctions screening | Quarterly | All | Commercial screening database | Compliance | Quarterly screening results |
| Vendor service review meeting | Quarterly | Tier 1, Tier 2 | Meeting minutes; action register | Relationship Owner | Quarterly service review minutes |
| Annual service review meeting | Annually | Tier 3, Tier 4 | Meeting minutes | Relationship Owner | Annual review minutes |
| Formal risk assessment review | Quarterly | Tier 1, Tier 2 | This report | Head of Technology Risk | Quarterly VRA Report |
| Formal risk assessment review | Annually | Tier 3, Tier 4 | Simplified assessment | Head of Technology Risk | Annual VRA update |
| On-site audit | Annually | Tier 1 | Audit report | Head of Technology Risk / Internal Audit | Audit report and findings |

### 11.2 Quarterly Review Findings — Current Period

*Summarise the key findings from this quarter's review across all monitoring activities.*

#### 11.2.1 Financial Health Updates

*Note any material changes to vendor financial health identified this quarter.*

| Vendor ID | Vendor Name | Finding | Impact Assessment | Action Required |
|---|---|---|---|---|
| [VND-XXX] | [Vendor Name] | [e.g., Credit rating downgrade from BBB to BB+ by [Agency] on [Date]] | [e.g., Monitor closely; contingency planning initiated] | [e.g., Initiate enhanced monitoring; review exit readiness] |
| [VND-XXX] | [Vendor Name] | [Finding or "No material change"] | [Assessment] | [Action or "None"] |

#### 11.2.2 Security and Threat Intelligence Updates

*Note any material cybersecurity developments affecting vendors this quarter.*

| Vendor ID | Vendor Name | Threat / Incident | Date Identified | [Organization Name] Impacted? | Vendor Response | [Organization Name] Actions Taken |
|---|---|---|---|---|---|---|
| [VND-XXX] | [Vendor Name] | [e.g., Vendor disclosed a data breach affecting [X] customers globally] | [DD MMM YYYY] | Yes / No / Under Investigation | [e.g., Vendor confirmed [Organization Name] data not affected; patch applied on [Date]] | [e.g., Independent verification requested; enhanced monitoring applied for 90 days] |
| [VND-XXX] | [Vendor Name] | [Description or "No material incidents this quarter"] | | | | |

#### 11.2.3 Regulatory and Compliance Updates

*Note any regulatory developments affecting vendor relationships this quarter.*

| Regulatory Development | Effective Date | Vendors Affected | Impact on [Organization Name] | Actions Required |
|---|---|---|---|---|
| [e.g., BNM issued updated cloud outsourcing requirements] | [Date] | [VND-XXX, VND-XXX] | [Description of impact] | [e.g., Review cloud vendor contracts for compliance by DD MMM YYYY] |
| [Description or "No material regulatory developments this quarter"] | | | | |

#### 11.2.4 Vendor Relationship Changes

*Note any changes to vendor relationships, including acquisitions, management changes, or service changes.*

| Vendor ID | Vendor Name | Change Description | Effective Date | Risk Impact | Actions Required |
|---|---|---|---|---|---|
| [VND-XXX] | [Vendor Name] | [e.g., Vendor acquired by [Parent Company] on [Date]] | [DD MMM YYYY] | [e.g., Concentration risk with [other vendor under same parent]; review required] | [e.g., Obtain commitment on service continuity; reassess exit strategy] |
| [VND-XXX] | [Vendor Name] | [Change or "No material changes this quarter"] | | | |

### 11.3 Escalations and Exceptions

*Document all escalations and exceptions raised during this quarterly review period.*

| Escalation / Exception ID | Date | Vendor ID | Vendor Name | Description | Escalated To | Outcome / Status |
|---|---|---|---|---|---|---|
| ESC-[YYYY]-[###] | [DD MMM YYYY] | [VND-XXX] | [Vendor Name] | [Description of issue escalated] | [e.g., Head of Technology Risk / CTO / Technology Risk Committee] | [Outcome or "Pending"] |

---

## 12. Roles and Responsibilities

### 12.1 RACI Matrix

*The following RACI matrix defines the responsibilities for vendor risk assessment activities within [Organization Name]. R = Responsible (does the work); A = Accountable (owns the outcome, approves); C = Consulted (provides input); I = Informed (receives updates).*

| Activity | Board / Board Risk Committee | CTO / CIO | Head of Technology Risk | Risk Custodian (per vendor) | Relationship Owner (per vendor) | Technical Custodian (per vendor) | Internal Audit | Procurement / Legal | Compliance | CISO |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve Vendor Risk Management Policy | A | C | R | I | I | I | C | C | C | C |
| Approve vendor risk tolerance and tiering framework | A | C | R | I | I | I | C | C | C | C |
| Maintain consolidated vendor register | I | A | R | C | C | I | I | C | C | I |
| Classify and tier new vendors | I | A | R | R | C | C | I | C | C | C |
| Complete due diligence checklist (new vendor) | I | I | A | R | C | C | I | C | C | C |
| Review and approve due diligence outcome | I | A | A | R | C | I | I | C | C | C |
| Assign and maintain vendor ownership | I | A | R | C | R | C | I | C | I | I |
| Define SLAs and KPIs at contract stage | I | C | C | C | A | C | I | R | C | C |
| Monitor SLA / KPI performance | I | I | I | C | A | R | I | I | I | I |
| Conduct quarterly vendor service review | I | I | C | C | A | R | I | I | I | C |
| Prepare quarterly VRA report | I | I | A | R | C | C | I | I | I | C |
| Review and approve quarterly VRA report | I | A | R | I | I | I | C | I | C | C |
| Present VRA summary to Technology Risk Committee | I | A | R | I | I | I | C | I | C | C |
| Manage and escalate open risk treatment actions | I | I | A | R | C | C | I | I | I | C |
| Conduct on-site vendor audit (Tier 1) | I | I | A | C | C | C | R | I | C | C |
| Maintain and test exit strategy (Tier 1 and 2) | I | A | A | R | R | C | I | C | C | C |
| Notify BNM of material vendor changes | A | C | R | C | C | I | I | C | R | I |
| Handle vendor security incident | I | I | C | C | C | C | I | C | C | A/R |
| Offboard vendor | I | I | C | C | A | R | I | R | C | C |

### 12.2 Key Roles — Contact Directory

| Role | Name | Email | Phone | Backup |
|---|---|---|---|---|
| Head of Technology Risk | [Name] | [Email] | [Phone] | [Backup Name] |
| Chief Information Officer | [Name] | [Email] | [Phone] | [Backup Name] |
| Chief Information Security Officer | [Name] | [Email] | [Phone] | [Backup Name] |
| Head of Procurement | [Name] | [Email] | [Phone] | [Backup Name] |
| Head of Compliance | [Name] | [Email] | [Phone] | [Backup Name] |
| Technology Risk Committee Chair | [Name] | [Email] | [Phone] | [Backup Name] |

---

## 13. Review and Approval

### 13.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD MMM YYYY] | [Name, Designation] | Initial version — document created |
| [1.1] | [DD MMM YYYY] | [Name, Designation] | [e.g., Updated vendor register to include VND-006 and VND-007; revised exit strategy for VND-001] |
| [2.0] | [DD MMM YYYY] | [Name, Designation] | [e.g., Annual full review; risk tiering framework updated to align with revised RMiT guidance] |

### 13.2 Quarterly Review Sign-Off

*This table confirms that the quarterly review has been completed and the content of this report has been reviewed and approved for the stated review period.*

| Quarterly Review Period | Q[X] [YYYY] — [Start Date] to [End Date] |
|---|---|
| **Review Completed By** | [Name, Designation] |
| **Review Completion Date** | [DD MMM YYYY] |
| **Approved By** | [Name, Designation] |
| **Approval Date** | [DD MMM YYYY] |
| **Presented to Technology Risk Committee** | Yes / No |
| **TRC Meeting Date** | [DD MMM YYYY or N/A] |
| **TRC Reference** | [Meeting Reference or N/A] |

### 13.3 Approval Sign-Off

*Signatures below confirm review and approval of this document.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name, Designation] | | [DD MMM YYYY] |
| Reviewed By | [Name, Designation] | | [DD MMM YYYY] |
| Head of Technology Risk | [Name] | | [DD MMM YYYY] |
| Chief Information Officer | [Name] | | [DD MMM YYYY] |
| Chief Information Security Officer | [Name] | | [DD MMM YYYY] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Document Title | Issuing Authority | Version / Date | Relevant Clauses |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | [Effective Date of current version] | Clause 10.46 — Vendor register and risk assessment; Clause 10.47 — Concentration risk; Clause 10.48 — Contractual provisions; Clause 10.49 — Exit strategies |
| BNM Outsourcing Guidelines | Guidelines on Outsourcing | Bank Negara Malaysia | [Date] | Paragraphs 8–12 — Notification, monitoring, and audit rights |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | As amended | Section 57 — Board accountability |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | As amended | Sections 7, 8, 9 — Data protection obligations |
| NACSA CSF | Cyber Security Framework | National Cyber Security Agency (NACSA) | [Version / Date] | Domain 5 — Supply chain and third-party risk |
| PCI-DSS | Payment Card Industry Data Security Standard | PCI Security Standards Council | Version [X.X] | Requirement 12.8 — Third-party service provider risk management |
| ISO/IEC 27001 | Information Security Management Systems | ISO / IEC | 2022 | Annex A.15 — Supplier relationships |
| ISO/IEC 27036 | Information Security for Supplier Relationships | ISO / IEC | 2014 / 2023 | All parts |

### 14.2 Internal Policy References

| Reference | Document Title | Document ID | Version | Owner |
|---|---|---|---|---|
| | Technology Risk Management Policy | [Policy ID] | [Version] | Head of Technology Risk |
| | Third-Party Risk Management Policy | [Policy ID] | [Version] | Head of Technology Risk |
| | Information Security Policy | [Policy ID] | [Version] | CISO |
| | Data Classification and Handling Policy | [Policy ID] | [Version] | Data Protection Officer |
| | Business Continuity Management Policy | [Policy ID] | [Version] | Head of Operations |
| | Outsourcing Policy | [Policy ID] | [Version] | Head of Compliance |
| | Procurement Policy | [Policy ID] | [Version] | Head of Procurement |
| | Acceptable Use Policy | [Policy ID] | [Version] | CISO |

---

## 15. Appendices

### Appendix A — Vendor Contract Summary Sheets

*Attach a one-page contract summary for each vendor in scope. The summary should include the parties, services, contract value, key dates, key contractual obligations, and a reference to the executed contract document location.*

**Template — Vendor Contract Summary Sheet:**

| Field | Detail |
|---|---|
| **Vendor ID** | [VND-XXX] |
| **Vendor Legal Name** | [Name] |
| **Contract Reference** | [Ref No.] |
| **Services Covered** | [Description] |
| **Contract Value (Annual, RM)** | [RM amount] |
| **Contract Start Date** | [DD MMM YYYY] |
| **Contract Expiry Date** | [DD MMM YYYY] |
| **Auto-Renewal Clause** | Yes — [Notice period required to prevent auto-renewal] / No |
| **Governing Law** | [e.g., Laws of Malaysia] |
| **Dispute Resolution** | [e.g., Malaysian courts / KLRCA arbitration] |
| **Key Obligations — [Organization Name]** | [e.g., Payment terms; cooperation obligations] |
| **Key Obligations — Vendor** | [e.g., SLA adherence; security standards; audit rights; data protection] |
| **Right to Audit** | Yes — [Clause X.X] / No |
| **BNM Access Rights** | Yes — [Clause X.X] / No |
| **Contract Location (Document Management System)** | [Path or reference] |
| **Contract Owner** | [Name, Designation] |

---

### Appendix B — Simplified Due Diligence Checklist (Tier 3 and Tier 4 Vendors)

*Use this checklist for Tier 3 and Tier 4 vendors. Completed checklists must be retained in the vendor management file.*

| # | Due Diligence Item | Requirement | Met? | Evidence / Notes |
|---|---|---|---|---|
| B-01 | Business Registration | Vendor is a legally registered entity in its country of incorporation | Yes / No | [Companies Commission registration / equivalent] |
| B-02 | Sanctions Screening | Vendor and directors screened against applicable sanctions lists | Yes / No | [Screening date and result] |
| B-03 | Insurance | Vendor holds appropriate professional indemnity and public liability insurance | Yes / No | [Certificate of currency reference] |
| B-04 | Data Access Confirmation | Confirm whether vendor will access [Organization Name] systems or data | Yes / No | [Confirmation and data classification if applicable] |
| B-05 | Confidentiality Agreement | Non-disclosure / confidentiality agreement in place | Yes / No | [NDA reference] |
| B-06 | Basic Security Requirements | Vendor has a documented information security policy and enforces password controls | Yes / No | [Evidence provided] |
| B-07 | References | At least two customer references obtained and verified | Yes / No | [Reference details] |

---

### Appendix C — Simplified Exit Plan (Tier 3 and Tier 4 Vendors)

*Use this template to document a simplified exit plan for Tier 3 and Tier 4 vendors.*

| Field | Detail |
|---|---|
| **Vendor ID** | [VND-XXX] |
| **Vendor Name** | [Name] |
| **Service(s)** | [Description] |
| **Contract Notice Period** | [e.g., 30 days] |
| **Alternative Provider(s) Identified** | [Name(s) or "To be identified if exit triggered"] |
| **Data to be Extracted** | [List data assets held by vendor] |
| **Estimated Transition Time** | [e.g., 30–60 days] |
| **Exit Owner** | [Name, Designation] |
| **Key Exit Steps** | 1. [Step] 2. [Step] 3. [Step] |

---

### Appendix D — Vendor Risk Assessment Methodology

*Provide a brief description of the risk assessment methodology applied, including the risk rating scales, scoring methodology, and any deviations from the standard methodology applied during this review period.*

**Risk Likelihood Scale:** [As defined in Section 10.1]

**Risk Impact Scale:** [As defined in Section 10.1]

**Risk Rating Calculation:** Inherent and residual risk ratings are calculated as Likelihood × Impact. Treatment strategies are determined based on the residual risk rating relative to [Organization Name]'s risk appetite as defined in the [Technology Risk Management Policy, Policy ID].

**Risk Appetite Alignment:**

| Residual Risk Rating | [Organization Name] Risk Appetite | Default Treatment |
|---|---|---|
| Critical (17–25) | Above risk appetite — not acceptable without Board approval | Mitigate or Avoid |
| High (10–16) | Above risk appetite — CTO approval required to accept | Mitigate; Accept requires CTO sign-off |
| Medium (5–9) | At risk appetite boundary — Head of Technology Risk approval to accept | Mitigate or Accept with documented rationale |
| Low (1–4) | Within risk appetite | Accept; document and monitor |

**Methodology Deviations this Period:** [None / Description of any approved deviations]

---

### Appendix E — Glossary of Terms

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia and prudential regulator of financial institutions |
| **Critical Vendor** | A vendor whose failure to deliver services would result in significant operational disruption, regulatory breach, or material customer harm |
| **Concentration Risk** | The risk arising from overreliance on a single vendor, technology, or geographic location to deliver critical services |
| **Due Diligence** | The structured process of evaluating a vendor's suitability, risk profile, and compliance with [Organization Name]'s requirements before engagement and on an ongoing basis |
| **Exit Strategy** | A documented plan enabling [Organization Name] to transition away from a vendor in an orderly manner without disrupting operations |
| **Fourth Party** | A sub-contractor or supplier engaged by a vendor to deliver services on behalf of [Organization Name] |
| **KPI** | Key Performance Indicator — an operational metric used to assess vendor performance |
| **Outsourcing** | An arrangement where [Organization Name] engages a third party to perform a function or activity on its behalf, meeting the definition under BNM's Outsourcing Guidelines |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles in a process or activity |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| **RPO** | Recovery Point Objective — the maximum tolerable period of data loss in the event of a system failure or disaster |
| **RTO** | Recovery Time Objective — the maximum tolerable time to restore a system or service following a disruption |
| **SLA** | Service Level Agreement — contractual commitments defining the expected performance, availability, and quality of a vendor's services |
| **Tier 1 Vendor** | A vendor classified as Critical risk, subject to the most intensive oversight and due diligence requirements |
| **VRA** | Vendor Risk Assessment — this document |

---

### Appendix F — Document Control and Distribution List

| Copy Number | Recipient | Role | Copy Type | Date Issued |
|---|---|---|---|---|
| 1 | [Name] | Head of Technology Risk | Master — Electronic | [DD MMM YYYY] |
| 2 | [Name] | Chief Information Officer | Controlled — Electronic | [DD MMM YYYY] |
| 3 | [Name] | Chief Information Security Officer | Controlled — Electronic | [DD MMM YYYY] |
| 4 | [Name] | Technology Risk Committee Secretary | Controlled — Electronic | [DD MMM YYYY] |
| 5 | [Name] | Internal Audit | Controlled — Electronic | [DD MMM YYYY] |

*This document must not be reproduced, distributed, or disclosed to any other party without the prior written approval of the Head of Technology Risk. Recipients are responsible for maintaining the confidentiality of this document in accordance with [Organization Name]'s Information Handling Policy.*

---

*End of Document*

---

| **Document ID** | [Document ID] | **Version** | 1.0 |
|---|---|---|---|
| **Classification** | Confidential | **Page Count** | [Auto-populated] |
| **Owner** | Head of Technology Risk | **Review Due** | [Next Review Date] |