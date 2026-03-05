# Third-Party Assessment Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Vendor Management |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for the use of authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Framework and References](#3-regulatory-framework-and-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
7. [Vendor Risk Tiering Criteria](#7-vendor-risk-tiering-criteria)
8. [Third-Party Assessment Lifecycle](#8-third-party-assessment-lifecycle)
9. [Due Diligence Checklist](#9-due-diligence-checklist)
10. [SLA and KPI Definitions](#10-sla-and-kpi-definitions)
11. [Exit Strategy Requirements](#11-exit-strategy-requirements)
12. [Non-Compliance and Escalation](#12-non-compliance-and-escalation)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*Describe the intent of this policy — why it exists, what risk or obligation it addresses, and the overarching outcome it aims to achieve.*

This policy establishes the requirements and procedures for [Organization Name] to conduct independent, structured, and risk-proportionate security assessments of third-party service providers, with particular focus on Critical Service Providers (CSPs) and vendors with access to critical systems, sensitive data, or regulated services.

The policy ensures that [Organization Name] meets its obligations under Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 14.1, which mandates that financial institutions implement governance arrangements over outsourced and third-party technology functions commensurate with the risks involved.

The objectives of this policy are to:

- Establish a consistent and repeatable framework for assessing third-party technology and security risks.
- Define minimum standards for pre-engagement due diligence and ongoing monitoring of third-party service providers.
- Ensure that the risks associated with third-party relationships are identified, assessed, treated, and reported in accordance with [Organization Name]'s risk appetite.
- Protect the confidentiality, integrity, and availability of [Organization Name]'s information assets and systems that are accessed or managed by third parties.
- Ensure regulatory compliance with BNM RMiT, the Personal Data Protection Act 2010 (PDPA), and any applicable National Cyber Security Agency (NACSA) guidelines.
- Provide a defensible, audit-ready record of third-party oversight activities for regulatory examination purposes.

---

## 2. Scope

*Define the boundaries of this policy — which entities, services, systems, and relationships it applies to, and explicitly note any exclusions.*

### 2.1 In-Scope Entities

This policy applies to:

- All employees, contractors, and secondees of [Organization Name] involved in the procurement, management, or oversight of third-party service providers.
- All business units and departments that engage or rely upon third-party technology services, managed services, cloud services, or outsourced functions.
- All subsidiaries and affiliates of [Organization Name] operating within [Jurisdiction] that are subject to BNM oversight.

### 2.2 In-Scope Third Parties

This policy covers all third-party relationships including but not limited to:

- **Critical Service Providers (CSPs):** Third parties whose failure or compromise would materially impact [Organization Name]'s ability to deliver regulated financial services or meet regulatory obligations.
- **Technology Outsourcing Providers:** Vendors providing outsourced technology functions, including application hosting, infrastructure management, and IT operations.
- **Cloud Service Providers (CSPs):** Providers of Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) solutions used in regulated operations.
- **Managed Security Service Providers (MSSPs):** Vendors providing cybersecurity monitoring, incident response, or security operations functions.
- **Data Processors:** Third parties that process personal data on behalf of [Organization Name] under the PDPA 2010.
- **System Integrators and Professional Services Firms:** Vendors with access to [Organization Name]'s internal systems, networks, or data during project delivery.
- **Fourth Parties (Sub-processors):** Material sub-contractors engaged by primary third parties that introduce additional risk to [Organization Name].

### 2.3 Out-of-Scope

The following are explicitly excluded from this policy:

- Suppliers of generic commodities (e.g., office stationery, hardware components without system integration).
- Professional services engagements with no access to [Organization Name]'s systems or data.
- Intragroup service arrangements governed by a separate Intragroup Outsourcing Policy (refer to [Policy Reference]).

### 2.4 Geographic Scope

This policy applies to all third-party engagements regardless of the geographic location of the third party, including onshore, offshore, and cross-border arrangements. Offshore arrangements shall be subject to additional controls as specified in Section 6.5.

---

## 3. Regulatory Framework and References

*List the specific regulatory instruments, clauses, and industry standards that this policy is designed to address. This section anchors the policy to its compliance obligations.*

[Organization Name] operates within the following regulatory and standards framework relevant to this policy:

| Regulatory Instrument | Issuing Authority | Relevant Clause(s) | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | 14.1, 14.2, 14.3 | Governance of outsourced technology and third-party risk management |
| Guidelines on Outsourcing | Bank Negara Malaysia (BNM) | [Relevant Clauses] | Requirements for outsourcing arrangements in financial institutions |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Section 6, 7, 8, 9 | Data protection obligations for third-party data processors |
| National Cyber Security Policy | NACSA / National Security Council | [Relevant Provisions] | Critical information infrastructure protection requirements |
| ISO/IEC 27001:2022 | ISO/IEC | Annex A 5.19–5.23 | Information security in supplier relationships |
| ISO/IEC 27036 | ISO/IEC | All Parts | Guidelines for information security for supplier relationships |
| Payment Card Industry Data Security Standard (PCI DSS) | PCI SSC | Requirement 12.8 | Managing service providers |
| [Additional Standard] | [Issuing Body] | [Clause] | [Obligation] |

---

## 4. Definitions and Abbreviations

*Define all technical terms, acronyms, and regulatory terminology used throughout this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Third Party** | Any external organization, vendor, supplier, contractor, or service provider that has a contractual relationship with [Organization Name] and provides goods, services, or functions on its behalf. |
| **Critical Service Provider (CSP)** | A third party whose disruption, failure, or compromise would have a material impact on [Organization Name]'s business operations, financial stability, customer outcomes, or regulatory compliance posture. |
| **Outsourcing** | An arrangement where [Organization Name] uses a service provider to perform activities, on a continuing basis, that would normally be undertaken by [Organization Name] itself. |
| **Material Outsourcing** | An outsourcing arrangement that, if disrupted, has the potential to significantly impact [Organization Name]'s business operations or its ability to manage risks effectively. |
| **Independent Security Assessment** | A structured evaluation of a third party's information security controls, practices, and posture, conducted by or on behalf of [Organization Name] using objective criteria independent of the third party's self-attestation. |
| **Due Diligence** | The process of investigating and evaluating a third party before entering into or renewing a contractual relationship, to identify and assess associated risks. |
| **Fourth Party** | A sub-contractor or sub-processor engaged by a primary third party that performs functions material to the services delivered to [Organization Name]. |
| **Risk Appetite** | The level of risk [Organization Name] is willing to accept in pursuit of its strategic objectives, as defined in the [Risk Appetite Statement Reference]. |
| **Inherent Risk** | The level of risk present in a third-party relationship before the application of any controls or mitigations. |
| **Residual Risk** | The level of risk remaining after the application of controls and mitigations. |
| **Vendor Risk Tier** | A risk classification assigned to a third party based on defined criteria including criticality, data sensitivity, regulatory exposure, and financial exposure. |
| **Service Level Agreement (SLA)** | A contractual commitment between [Organization Name] and a third party specifying the expected level of service performance, availability, and quality. |
| **Key Performance Indicator (KPI)** | A measurable value used to evaluate the effectiveness of a third party's performance against agreed service objectives. |
| **Exit Strategy** | A documented plan that enables [Organization Name] to terminate a third-party relationship and transition services in an orderly manner with minimal disruption. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| CSP | Critical Service Provider / Cloud Service Provider (context-dependent) |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| CISO | Chief Information Security Officer |
| CRO | Chief Risk Officer |
| DPA | Data Processing Agreement |
| ISMS | Information Security Management System |
| MSSP | Managed Security Service Provider |
| NDA | Non-Disclosure Agreement |
| TPRA | Third-Party Risk Assessment |
| RACI | Responsible, Accountable, Consulted, Informed |
| SLA | Service Level Agreement |
| KPI | Key Performance Indicator |
| KRI | Key Risk Indicator |
| MAS | Monetary Authority of Singapore (reference comparison) |
| ISO | International Organization for Standardization |
| PCI DSS | Payment Card Industry Data Security Standard |
| VAPT | Vulnerability Assessment and Penetration Testing |
| SOC | System and Organization Controls |

---

## 5. Roles and Responsibilities

*Define who is responsible for each aspect of the third-party assessment lifecycle. Use the RACI model to assign accountability clearly and prevent gaps in oversight.*

### 5.1 RACI Matrix

The following RACI matrix defines the roles and responsibilities for key activities within the third-party assessment process.

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Vendor Management | CISO / IT Security | Business Unit Owner | Legal & Compliance | CRO | Board / Risk Committee | Procurement | Internal Audit |
|---|---|---|---|---|---|---|---|---|
| Define and maintain Third-Party Assessment Policy | R | C | C | C | A | I | I | I |
| Maintain vendor inventory and risk register | R | C | I | I | A | I | C | I |
| Conduct initial vendor risk tiering | R | C | C | I | A | I | C | I |
| Perform pre-engagement due diligence | R | C | C | C | I | I | C | I |
| Commission independent security assessments | R | A | C | I | C | I | I | I |
| Review and approve assessment findings | C | R | I | I | A | I | I | C |
| Negotiate and approve contractual security terms | C | C | C | R | I | I | A | I |
| Monitor ongoing SLA and KPI performance | R | C | R | I | I | I | I | I |
| Review fourth-party arrangements | R | C | C | I | A | I | I | I |
| Manage incident notification from third parties | C | R | R | C | A | I | I | I |
| Initiate and oversee exit strategy execution | R | C | A | C | C | I | C | I |
| Report third-party risk to Board / Risk Committee | C | C | I | C | R | A | I | I |
| Conduct annual policy review | R | C | C | C | A | I | I | C |
| Independent audit of third-party risk program | I | I | I | I | I | A | I | R |

### 5.2 Role Descriptions

#### 5.2.1 Head of Vendor Management

The Head of Vendor Management is the Policy Owner and bears primary accountability for the implementation and ongoing effectiveness of this policy. Responsibilities include:

- Maintaining the enterprise-wide third-party inventory and risk register.
- Overseeing the end-to-end third-party assessment lifecycle from onboarding through exit.
- Coordinating with business units to ensure timely completion of due diligence activities.
- Escalating unresolved third-party risks to the CRO and Board Risk Committee.
- Reporting on third-party risk posture through defined governance channels.

#### 5.2.2 Chief Information Security Officer (CISO)

The CISO is responsible for defining and enforcing information security requirements applicable to third-party relationships. Responsibilities include:

- Setting minimum security standards and control requirements for third-party assessments.
- Reviewing and approving the results of independent security assessments.
- Advising on risk treatment for identified security deficiencies.
- Ensuring that third-party security incidents are managed in accordance with the Incident Response Policy.

#### 5.2.3 Business Unit Owner

The Business Unit Owner is the internal sponsor of a third-party relationship and is responsible for:

- Identifying and registering new third-party requirements with Vendor Management.
- Providing business context for risk tiering and assessment scope.
- Monitoring day-to-day service performance against SLA and KPI targets.
- Escalating service performance issues and security concerns to Vendor Management.

#### 5.2.4 Legal and Compliance

The Legal and Compliance function is responsible for:

- Reviewing and advising on contractual terms related to data protection, confidentiality, and regulatory compliance.
- Ensuring that outsourcing arrangements satisfy BNM notification and approval requirements where applicable.
- Maintaining oversight of PDPA obligations in third-party data processing arrangements.

#### 5.2.5 Chief Risk Officer (CRO)

The CRO is accountable for the overall third-party risk framework and is responsible for:

- Approving the risk tiering methodology and risk appetite thresholds.
- Receiving escalated third-party risk items and making treatment decisions.
- Reporting material third-party risks to the Board Risk Committee.

#### 5.2.6 Board / Risk Committee

The Board Risk Committee provides oversight and governance over the third-party risk program. Responsibilities include:

- Approving the Third-Party Assessment Policy and any material amendments.
- Reviewing periodic third-party risk reports.
- Providing strategic direction on risk appetite for third-party relationships.

---

## 6. Policy Statements and Requirements

*State the mandatory requirements of this policy. These are the binding obligations that all relevant stakeholders must comply with. Each statement should be clear, actionable, and traceable to a regulatory obligation.*

### 6.1 General Policy Requirements

**PS-01:** [Organization Name] shall maintain a comprehensive and up-to-date inventory of all third-party relationships, classified by risk tier, that is reviewed at minimum on a [Quarterly/Annual] basis.

**PS-02:** No third-party relationship shall be established, renewed, or materially amended without completion of a risk assessment commensurate with the risk tier of the third party.

**PS-03:** All third parties in Tier 1 (Critical) and Tier 2 (High Risk) classifications shall be subject to an independent security assessment prior to onboarding and at intervals defined in Section 7 of this policy.

**PS-04:** Contractual agreements with all in-scope third parties shall include minimum security, data protection, audit rights, incident notification, and exit provisions as specified in this policy.

**PS-05:** [Organization Name] shall not transfer or grant access to critical systems or sensitive customer data to a third party unless a satisfactory risk assessment has been completed and approved.

### 6.2 Pre-Engagement Requirements

**PS-06:** Prior to entering into any new third-party arrangement involving technology services or data access, the Business Unit Owner shall initiate a Third-Party Risk Assessment (TPRA) by submitting a request to Vendor Management.

**PS-07:** The scope of pre-engagement due diligence shall be determined by the assigned risk tier and shall include, at minimum, the elements specified in Section 9 (Due Diligence Checklist) of this policy.

**PS-08:** Where a prospective third party is unable or unwilling to provide information necessary to complete the due diligence process, the engagement shall not proceed unless a risk exception is approved in accordance with Section 6.7.

**PS-09:** For material outsourcing arrangements as defined by BNM, [Organization Name] shall notify BNM in accordance with the notification timelines specified in the Guidelines on Outsourcing.

### 6.3 Independent Security Assessment Requirements

**PS-10:** Independent security assessments shall be conducted by qualified assessors who are independent of the third party being assessed. Assessors may be internal (e.g., [Organization Name]'s internal audit or security team) or external (third-party assessors engaged by [Organization Name]).

**PS-11:** The scope of independent security assessments for Tier 1 CSPs shall include, at minimum:
- Review of the third party's information security management framework and policies.
- Technical vulnerability assessment and/or penetration testing of interfaces connected to [Organization Name]'s systems.
- Review of access control, privileged access management, and identity management practices.
- Assessment of business continuity and disaster recovery capabilities relevant to services provided to [Organization Name].
- Review of data protection and privacy controls relevant to personal data processed on behalf of [Organization Name].
- Review of sub-processor (fourth-party) management practices.

**PS-12:** Assessment findings shall be documented in a formal Third-Party Security Assessment Report and shared with the assessed third party. The third party shall be required to provide a formal remediation plan within [30] calendar days of receiving the report.

**PS-13:** Critical findings (those rated High or Critical) shall be escalated to the CISO and CRO within [5] business days of identification.

### 6.4 Ongoing Monitoring Requirements

**PS-14:** All Tier 1 and Tier 2 third parties shall be subject to periodic performance reviews at the frequency defined in Section 7.4 of this policy.

**PS-15:** [Organization Name] shall monitor publicly available threat intelligence, regulatory advisories, and security bulletins relevant to its critical service providers and take appropriate action where a third party is identified as compromised or subject to material security risk.

**PS-16:** Third parties shall be contractually required to notify [Organization Name] of any security incident, data breach, or material service disruption affecting [Organization Name]'s data or services within the timelines specified in Section 10.3.

**PS-17:** [Organization Name] shall maintain audit rights over all Tier 1 and Tier 2 third parties, exercisable at [Organization Name]'s discretion and at minimum once every [12/24] months.

### 6.5 Offshore and Cross-Border Arrangements

**PS-18:** Where a third-party arrangement involves the processing, transmission, or storage of [Organization Name]'s data outside Malaysia, the arrangement shall be assessed for compliance with applicable cross-border data transfer requirements under the PDPA 2010 and any relevant BNM guidelines.

**PS-19:** Critical data, as defined in [Organization Name]'s Data Classification Policy, shall not be stored or processed outside Malaysia without explicit approval from the CRO and, where required, notification to BNM.

**PS-20:** For offshore arrangements, [Organization Name] shall satisfy itself that the third party is subject to equivalent regulatory and legal protections in its home jurisdiction, or that adequate contractual safeguards are in place.

### 6.6 Fourth-Party Risk Management

**PS-21:** Third parties in Tier 1 and Tier 2 classifications shall be required to disclose all material sub-processors and fourth-party arrangements to [Organization Name] upon request and to provide advance notice of any material changes to sub-processor arrangements.

**PS-22:** [Organization Name] shall assess the concentration risk associated with fourth-party arrangements, particularly where multiple critical service providers rely on a common sub-processor.

### 6.7 Risk Exception Process

**PS-23:** Where a third-party relationship proceeds despite identified risks that exceed defined thresholds, a formal Risk Exception must be documented and approved by the CRO. Risk exceptions shall:
- Describe the nature of the risk and the reason the exception is sought.
- Specify the compensating controls in place.
- Define an expiry date (maximum [12] months).
- Be reviewed at the next scheduled risk review cycle.

---

## 7. Vendor Risk Tiering Criteria

*Define the methodology used to classify third parties by risk level. Risk tiering determines the intensity of due diligence, the frequency of reassessment, and the contractual requirements applicable to each vendor relationship.*

### 7.1 Risk Tiering Methodology Overview

[Organization Name] classifies all third-party relationships into four risk tiers based on an assessment of inherent risk. Risk tiering is performed at onboarding and reviewed annually or upon a material change in the third-party relationship.

The risk tier assigned to a third party determines:
- The depth of pre-engagement due diligence required.
- The frequency and scope of independent security assessments.
- The contractual security and audit provisions required.
- The escalation and reporting requirements applicable.

### 7.2 Risk Tiering Criteria

*Complete the scoring weights and thresholds below in accordance with [Organization Name]'s enterprise risk framework and risk appetite statement.*

| Risk Dimension | Tier 1 — Critical | Tier 2 — High | Tier 3 — Medium | Tier 4 — Low |
|---|---|---|---|---|
| **Criticality to Business Operations** | Service disruption would halt core regulated functions or cause systemic failure | Service disruption would materially degrade regulated functions | Service disruption would cause localized or temporary impact | Service disruption would have negligible operational impact |
| **Data Sensitivity** | Processes or stores Critical/Restricted data including bulk customer PII, financial data, or payment credentials | Processes or stores Confidential data including non-bulk customer information | Processes or stores Internal data with limited sensitivity | No access to [Organization Name] data |
| **Access to [Organization Name] Systems** | Privileged or direct access to core banking systems, payment systems, or regulated infrastructure | Access to internal systems with network connectivity | Limited access via controlled interfaces | No direct system access |
| **Regulatory Exposure** | Directly supports regulated financial services; failure creates direct regulatory breach | Supports regulated activities with indirect regulatory exposure | Supports non-regulated support functions | No regulatory exposure |
| **Financial Exposure** | Contract value exceeds [RM X million] or represents more than [X%] of IT spend | Contract value between [RM X million] and [RM Y million] | Contract value below [RM X million] | Minimal financial exposure |
| **Substitutability** | Highly specialized or sole-source provider with no viable alternative | Limited alternatives available; transition would be complex | Alternatives available with moderate transition effort | Commodity provider with readily available alternatives |
| **Geographic/Jurisdictional Risk** | Offshore processing of critical/restricted data in high-risk jurisdiction | Cross-border data flow with moderate jurisdictional risk | Onshore or low-risk offshore arrangement | Onshore only |
| **Customer Impact** | Direct customer-facing service with significant customer impact potential | Indirect customer impact | Limited customer impact | No customer impact |

### 7.3 Tier Definitions

| Tier | Classification | Description | Examples |
|---|---|---|---|
| **Tier 1** | Critical | Third parties whose failure, compromise, or non-performance would have a material impact on [Organization Name]'s regulated operations, customer outcomes, or regulatory compliance. | Core banking system providers, payment processors, cloud hosting of regulated systems, primary network connectivity providers |
| **Tier 2** | High Risk | Third parties with significant access to [Organization Name]'s systems or data, or whose failure would cause material service degradation. | Managed security service providers, HR systems with employee PII, secondary data centres, key software vendors |
| **Tier 3** | Medium Risk | Third parties with limited access to internal systems or data, with moderate potential impact on operations. | Marketing platforms, non-critical SaaS tools, professional services with limited data access |
| **Tier 4** | Low Risk | Third parties with no access to sensitive data or critical systems, and with negligible impact on regulated operations. | Office supply vendors, low-risk commodity SaaS, generic professional services |

### 7.4 Assessment Frequency by Tier

| Tier | Pre-Engagement Due Diligence | Independent Security Assessment | Ongoing Performance Review | Risk Tier Review |
|---|---|---|---|---|
| **Tier 1 — Critical** | Full due diligence required | Annual (minimum); ad hoc upon material incident | Quarterly | Annual |
| **Tier 2 — High Risk** | Full due diligence required | Biennial; ad hoc upon material incident | Semi-annual | Annual |
| **Tier 3 — Medium Risk** | Standard due diligence required | Every 3 years or upon material change | Annual | Biennial |
| **Tier 4 — Low Risk** | Simplified due diligence | On request or upon material concern | Annual (documentary review) | Biennial |

### 7.5 Tier Re-Classification Triggers

A third party's risk tier shall be reviewed and potentially re-classified upon any of the following trigger events:

- Material change in the scope of services provided by the third party.
- Identification of a security incident or data breach involving the third party.
- Changes in the third party's ownership, control, or financial stability.
- Changes in the regulatory classification of services provided.
- Significant change in [Organization Name]'s dependency on the third party.
- Receipt of a material adverse audit finding relating to the third party.
- Changes in the third party's sub-processor arrangements.
- BNM or other regulatory direction.

---

## 8. Third-Party Assessment Lifecycle

*This section describes the end-to-end process for managing third-party relationships from initial identification through to exit. Each phase should be completed in sequence, with appropriate approvals and documentation at each gate.*

### 8.1 Phase 1: Identification and Registration

Upon identification of a new third-party requirement, the Business Unit Owner shall:

1. Complete a **Third-Party Engagement Request Form** (Appendix A) and submit to Vendor Management.
2. Provide a business justification, estimated contract value, and description of services and data access required.
3. Confirm whether the proposed arrangement constitutes outsourcing of a regulated function.

Vendor Management shall:

1. Register the prospective third party in the **Third-Party Inventory Register** (Appendix B).
2. Assign a preliminary risk tier based on the information provided.
3. Initiate the due diligence process in accordance with the assigned risk tier.

### 8.2 Phase 2: Pre-Engagement Due Diligence

Vendor Management, in coordination with IT Security, Legal, and the Business Unit Owner, shall complete the due diligence checklist in Section 9 of this policy.

Due diligence activities shall be documented in the **Third-Party Due Diligence Record** and retained in accordance with [Organization Name]'s Records Management Policy.

A due diligence gate review shall be conducted upon completion. The following outcomes are possible:

| Outcome | Condition | Next Step |
|---|---|---|
| **Approved — Proceed** | All mandatory checks passed; no material risks identified | Proceed to contract negotiation (Phase 3) |
| **Approved with Conditions** | Minor risks identified; compensating controls or contractual commitments agreed | Proceed to Phase 3 with documented conditions |
| **Escalated for Risk Acceptance** | Material risks identified; Business Unit Owner and CRO must approve risk exception | Proceed only upon formal risk exception approval |
| **Rejected** | Critical risks identified; risk cannot be mitigated to acceptable level | Do not proceed; document rationale |

### 8.3 Phase 3: Contract Negotiation and Execution

Legal, in coordination with Vendor Management and IT Security, shall ensure that the contractual agreement includes the following minimum provisions:

- **Security Requirements:** Third party must maintain an information security program commensurate with the risks associated with the services provided, meeting minimum standards as specified in the Security Schedule (Appendix C).
- **Data Protection:** Where the third party processes personal data, a Data Processing Agreement (DPA) compliant with PDPA 2010 must be executed.
- **Audit Rights:** [Organization Name] must retain the right to conduct or commission security assessments and audits of the third party at reasonable notice.
- **Incident Notification:** Third party must notify [Organization Name] of any security incident or data breach affecting [Organization Name]'s data within [24/48/72] hours of detection (refer to Section 10.3).
- **Sub-processor Management:** Third party must obtain [Organization Name]'s consent before engaging material sub-processors and must impose equivalent security obligations on sub-processors.
- **Business Continuity:** Third party must maintain and test business continuity and disaster recovery plans relevant to the services provided.
- **Exit Provisions:** Contract must include provisions supporting an orderly exit in accordance with Section 11 of this policy.
- **Regulatory Compliance:** Third party must comply with all applicable regulatory requirements and cooperate with regulatory examinations.
- **Confidentiality:** Non-disclosure obligations must be maintained during and following the contract term.

### 8.4 Phase 4: Onboarding and Access Provisioning

Upon contract execution, the Business Unit Owner and IT Security shall:

- Confirm completion of all pre-onboarding security requirements specified in the contract.
- Approve provisioning of system access in accordance with the principle of least privilege.
- Ensure completion of [Organization Name]'s mandatory third-party security awareness briefing.
- Register the third party in the **Access Management System** with appropriate access entitlements.

### 8.5 Phase 5: Ongoing Management and Monitoring

Vendor Management and the Business Unit Owner shall conduct ongoing monitoring of third-party relationships in accordance with the frequency specified in Section 7.4, including:

- Periodic performance reviews against SLA and KPI targets (Section 10).
- Annual risk tier reviews.
- Independent security assessments per the schedule in Section 7.4.
- Monitoring of publicly available threat intelligence relevant to the third party.
- Review of the third party's financial stability and regulatory standing.

### 8.6 Phase 6: Contract Renewal

At least [90] calendar days prior to contract expiry, Vendor Management shall:

- Conduct a renewal risk assessment to confirm the current risk tier remains appropriate.
- Review the third party's performance record over the contract term.
- Update due diligence documentation where the contract term has exceeded [24] months since the last full due diligence exercise.
- Confirm that contractual security provisions remain aligned with current policy requirements.

### 8.7 Phase 7: Exit and Termination

Exit and termination of third-party relationships shall be managed in accordance with Section 11 (Exit Strategy Requirements) of this policy.

---

## 9. Due Diligence Checklist

*This section provides the structured due diligence checklist to be completed for each third party in accordance with their assigned risk tier. Document the outcome of each check and retain supporting evidence.*

### 9.1 Applicability of Due Diligence Elements by Tier

| Due Diligence Element | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Corporate and Financial Standing | Mandatory | Mandatory | Mandatory | Simplified |
| Regulatory and Legal Compliance | Mandatory | Mandatory | Mandatory | Simplified |
| Information Security Posture | Mandatory (In-depth) | Mandatory (Standard) | Mandatory (Simplified) | Self-Attestation |
| Data Protection and Privacy | Mandatory | Mandatory | As applicable | As applicable |
| Business Continuity Capability | Mandatory | Mandatory | Simplified | Not required |
| Fourth-Party / Sub-processor Disclosure | Mandatory | Mandatory | As applicable | Not required |
| Insurance Coverage | Mandatory | Mandatory | As applicable | Not required |
| References and Past Performance | Mandatory | Recommended | Optional | Not required |
| Site Visit / On-Site Assessment | Mandatory | As determined by risk | Not required | Not required |
| Penetration Testing / VAPT | Mandatory | As determined | Not required | Not required |

### 9.2 Corporate and Financial Standing

*Verify the legal standing, financial stability, and corporate governance of the third party to assess its viability as a long-term partner.*

| # | Check | Evidence Required | Outcome | Assessor | Date |
|---|---|---|---|---|---|
| 1.1 | Verify legal incorporation and registration status | Company registration certificate (SSM or equivalent) | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 1.2 | Review most recent audited financial statements (2 years minimum) | Audited accounts | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 1.3 | Assess financial stability and going concern risk | Credit rating, financial ratio analysis | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 1.4 | Verify ownership structure and identify ultimate beneficial owners | Corporate structure chart, ownership declarations | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 1.5 | Screen against sanctions lists (UN, OFAC, MAS, BNM) | Screening output | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 1.6 | Check for adverse media, litigation, or regulatory actions | Open-source intelligence review | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 1.7 | Verify professional indemnity and liability insurance coverage | Insurance certificates | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |

### 9.3 Regulatory and Legal Compliance

*Confirm that the third party operates in compliance with applicable legal and regulatory requirements relevant to the services it provides.*

| # | Check | Evidence Required | Outcome | Assessor | Date |
|---|---|---|---|---|---|
| 2.1 | Verify applicable licenses and regulatory authorizations | License certificates, regulatory correspondence | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 2.2 | Confirm compliance with BNM guidelines applicable to services | Self-attestation, independent audit | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 2.3 | Confirm compliance with PDPA 2010 obligations for data processors | Data processing agreement, privacy policy | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 2.4 | Review history of regulatory sanctions or enforcement actions | Regulatory disclosures | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 2.5 | Assess compliance with applicable anti-bribery and corruption laws | Policy documentation | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 2.6 | Review cross-border data transfer compliance (if applicable) | Legal opinion or adequacy determination | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |

### 9.4 Information Security Posture

*Evaluate the third party's information security management practices, controls, and maturity.*

| # | Check | Evidence Required | Outcome | Assessor | Date |
|---|---|---|---|---|---|
| 3.1 | Review information security policy and governance framework | Policy documentation | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.2 | Verify ISO 27001 certification or equivalent ISMS | Certification certificate (must be valid) | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.3 | Review most recent SOC 2 Type II report (or equivalent) | Audit report | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.4 | Assess access control and privileged access management practices | Technical assessment, documentation review | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.5 | Review vulnerability management and patch management practices | Vulnerability scan results, patch records | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.6 | Assess network security architecture and segmentation | Network diagram, configuration review | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.7 | Review security incident detection and response capabilities | Incident response policy, SOC capability | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.8 | Assess security awareness training program | Training records, policy | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.9 | Review change management and software development security practices | SDLC policy, change records | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.10 | Commission independent VAPT on interfaces connecting to [Organization Name] (Tier 1/2 only) | VAPT report from approved assessor | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.11 | Review encryption standards for data at rest and in transit | Technical documentation, configuration review | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 3.12 | Assess logging, monitoring, and audit trail capabilities | Technical assessment | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |

### 9.5 Data Protection and Privacy

*Assess the third party's capacity to protect personal data processed on behalf of [Organization Name] in compliance with the PDPA 2010 and contractual obligations.*

| # | Check | Evidence Required | Outcome | Assessor | Date |
|---|---|---|---|---|---|
| 4.1 | Identify all categories and volumes of personal data to be processed | Data flow mapping, DPIA | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 4.2 | Confirm data residency and processing locations | Data residency declaration | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 4.3 | Review data retention and deletion practices | Data retention policy | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 4.4 | Assess data breach notification procedures | Incident response documentation | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 4.5 | Confirm Data Processing Agreement (DPA) executed | Signed DPA | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 4.6 | Verify data subject rights handling procedures | Process documentation | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |

### 9.6 Business Continuity Capability

*Evaluate the third party's capacity to maintain service continuity and recover from disruptions.*

| # | Check | Evidence Required | Outcome | Assessor | Date |
|---|---|---|---|---|---|
| 5.1 | Review Business Continuity Plan (BCP) relevant to services provided | BCP documentation | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 5.2 | Review Disaster Recovery Plan (DRP) and Recovery Time/Point Objectives | DRP documentation, RTO/RPO commitments | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 5.3 | Review results of most recent BCP/DRP test exercise | Test exercise report | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 5.4 | Assess concentration risk including single points of failure | Architecture review | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |
| 5.5 | Confirm geographic redundancy of critical infrastructure (Tier 1 only) | Infrastructure documentation | [ ] Pass [ ] Fail [ ] N/A | [Name] | [Date] |

---

## 10. SLA and KPI Definitions

*This section defines the minimum service level commitments and performance indicators that must be incorporated into agreements with third parties. SLAs and KPIs shall be tailored to the specific services and risk tier of each third party, using the framework below as a baseline.*

### 10.1 Service Level Agreement (SLA) Framework

*All SLAs must be measurable, time-bound, and subject to regular reporting by the third party. Minimum SLA standards by service category are defined below. Business Unit Owners shall negotiate specific SLA values within the ranges specified.*

#### 10.1.1 Availability and Uptime

| Service Category | Minimum SLA Threshold | Measurement Period | Exclusions |
|---|---|---|---|
| Core Banking System Integration | [99.9%] uptime | Monthly | Scheduled maintenance windows |
| Payment Processing | [99.99%] uptime | Monthly | Agreed maintenance windows (max [4 hours/month]) |
| Data Centre / Cloud Hosting | [99.95%] uptime | Monthly | Force majeure events |
| Managed Security Services | [99.5%] uptime | Monthly | Scheduled maintenance |
| [Service Category] | [Threshold] | [Period] | [Exclusions] |

#### 10.1.2 Incident Response SLAs

| Incident Severity | Definition | Initial Response Time | Resolution Target | Escalation Trigger |
|---|---|---|---|---|
| **P1 — Critical** | Service outage or security breach affecting core regulated operations | [15] minutes | [4] hours | If not resolved within [2] hours |
| **P2 — High** | Material service degradation or significant security event | [30] minutes | [8] hours | If not resolved within [4] hours |
| **P3 — Medium** | Partial service degradation; limited operational impact | [2] hours | [24] hours | If not resolved within [12] hours |
| **P4 — Low** | Minor issue with minimal operational impact | [8] hours | [5] business days | [Standard escalation] |

#### 10.1.3 Security Incident Notification SLAs

| Event Type | Notification Deadline | Notification Channel | Information Required |
|---|---|---|---|
| Confirmed data breach involving [Organization Name] data | Within [24] hours of detection | Designated security contact + email | Incident details, data categories affected, estimated volume, containment steps taken |
| Suspected data breach under investigation | Within [48] hours of detection | Designated security contact | Initial assessment, investigation status |
| Security incident affecting service availability | Within [1] hour of detection | [Hotline + Email] | Nature of incident, services affected, estimated resolution |
| Ransomware or destructive malware affecting third party | Immediately upon detection | [Hotline] | Nature of malware, systems affected, isolation actions taken |
| Discovery of a vulnerability exploitable against [Organization Name] systems | Within [24] hours of discovery | CISO + Vendor Management | CVE details, affected systems, patch availability |

### 10.2 Key Performance Indicators (KPIs)

*KPIs are used to measure the ongoing performance and risk posture of third-party relationships. The following framework defines minimum KPI categories. Specific targets shall be negotiated per contract.*

#### 10.2.1 Service Performance KPIs

| KPI | Description | Target | Measurement Frequency | Reporting Method |
|---|---|---|---|---|
| System Availability | Percentage of time services are available within agreed hours | ≥ [SLA threshold per Section 10.1.1] | Monthly | Monthly performance report |
| Incident Resolution Rate | Percentage of incidents resolved within agreed SLA timeframes | ≥ [95%] | Monthly | Incident management report |
| Mean Time to Resolve (MTTR) | Average time to resolve P1/P2 incidents | ≤ [Target per Section 10.1.2] | Monthly | Incident management report |
| Change Success Rate | Percentage of changes implemented without unplanned outage | ≥ [98%] | Monthly | Change management report |
| [Custom KPI] | [Description] | [Target] | [Frequency] | [Method] |

#### 10.2.2 Security Performance KPIs

| KPI | Description | Target | Measurement Frequency | Reporting Method |
|---|---|---|---|---|
| Patch Compliance Rate | Percentage of critical/high vulnerability patches applied within SLA | ≥ [95%] for Critical, ≥ [90%] for High | Monthly | Vulnerability management report |
| Security Incident Rate | Number of confirmed security incidents per period | Trend downward | Quarterly | Security operations report |
| Audit Finding Closure Rate | Percentage of agreed remediation items closed within deadline | ≥ [90%] | Quarterly | Audit management report |
| Security Assessment Compliance | Completion of required security assessments on schedule | [100%] | Annual | Assessment schedule tracker |
| Staff Security Training Completion | Percentage of third-party staff with access to [Organization Name] systems completing required security training | [100%] | Annual | Training records |

#### 10.2.3 Compliance and Governance KPIs

| KPI | Description | Target | Measurement Frequency | Reporting Method |
|---|---|---|---|---|
| SLA Reporting Timeliness | Percentage of performance reports submitted by agreed deadline | [100%] | Monthly | Report submission log |
| Sub-processor Disclosure Compliance | Timely notification of sub-processor changes | [100%] within [30] days of change | Ongoing | Change notification log |
| Business Continuity Test Completion | BCP/DRP tests completed per agreed schedule | [100%] | Annual | Test completion certificates |
| Regulatory Compliance Attestation | Annual self-attestation of regulatory compliance submitted | [100%] | Annual | Attestation register |

### 10.3 SLA Breach Management

**Step 1 — Detection:** SLA breaches shall be identified through regular performance reporting submitted by the third party and through [Organization Name]'s independent monitoring.

**Step 2 — Notification:** Upon identification of an SLA breach, the Business Unit Owner shall formally notify the third party's designated account manager within [2] business days.

**Step 3 — Root Cause Analysis:** For P1/P2 SLA breaches, the third party shall provide a Root Cause Analysis (RCA) within [5] business days of the breach.

**Step 4 — Remediation Plan:** The third party shall provide a remediation plan with defined milestones within [10] business days of the breach.

**Step 5 — Escalation:** Repeated SLA breaches (defined as [3] or more breaches in a [3-month] period) shall be escalated to the Head of Vendor Management and may trigger a formal contract review.

**Step 6 — Service Credits:** Where contractually agreed, service credits shall be calculated and applied in accordance with the service credit schedule in the relevant contract.

**Step 7 — Remedies:** Persistent SLA failures may result in invocation of step-in rights, contract termination, or exit strategy activation as provided in Section 11.

---

## 11. Exit Strategy Requirements

*This section defines the mandatory requirements for exit planning and the process for terminating third-party relationships in an orderly, controlled manner that protects [Organization Name]'s operational continuity, data, and regulatory standing.*

### 11.1 Exit Planning Requirements

**EP-01:** For all Tier 1 and Tier 2 third parties, an **Exit Strategy Plan** shall be developed and documented at the time of contract execution and reviewed annually thereafter.

**EP-02:** The Exit Strategy Plan shall be a living document, maintained by Vendor Management in collaboration with the Business Unit Owner, IT Security, and Legal.

**EP-03:** Exit Strategy Plans shall be tested at minimum once every [2] years for Tier 1 critical service providers, through tabletop exercises or defined simulation activities.

### 11.2 Minimum Exit Strategy Plan Contents

Each Exit Strategy Plan shall address the following elements:

#### 11.2.1 Service Transition Planning

| Element | Description | Responsibility |
|---|---|---|
| Alternative provider identification | Identification of at least [one] viable alternative service provider capable of delivering equivalent services | Business Unit Owner + Vendor Management |
| Transition timeline | Estimated timeline for transitioning services to an alternative provider or insourcing | Business Unit Owner + IT |
| Transition team | Named internal stakeholders and their roles in managing a transition | Business Unit Owner |
| Knowledge transfer requirements | Documentation of institutional knowledge, configurations, and processes required for transition | IT + Business Unit Owner |
| Transition testing plan | Plan for testing service continuity during and after transition | IT Security + Business Unit Owner |

#### 11.2.2 Data Recovery and Portability

| Element | Description |
|---|---|
| Data inventory | Complete inventory of all [Organization Name] data held by the third party, including format, location, and volume |
| Data return format | Format and mechanism for return of [Organization Name] data upon exit |
| Data return timeline | Contractually committed timeline for return of all data (target: within [30] calendar days of exit) |
| Data deletion confirmation | Requirement for third party to confirm secure deletion of all [Organization Name] data post-exit, with certification |
| Data retention during transition | Arrangements for temporary retention of data by third party during the transition period |

#### 11.2.3 Access Revocation

| Step | Action | Responsible | Timeline |
|---|---|---|---|
| 1 | Initiate access revocation process upon notice of termination | IT Security | Within [1] business day of termination notice |
| 2 | Revoke all privileged access accounts | IT Security | Within [24] hours of exit date |
| 3 | Revoke all standard access accounts | IT Security | Within [48] hours of exit date |
| 4 | Recover all [Organization Name]-issued hardware and devices | IT + Procurement | Within [5] business days |
| 5 | Revoke all API keys, certificates, and authentication tokens | IT Security | Within [24] hours of exit date |
| 6 | Update firewall rules and network ACLs | IT Security | Within [24] hours of exit date |
| 7 | Confirm completion of all access revocation steps | IT Security | Within [5] business days of exit date |

#### 11.2.4 Contractual Exit Provisions

All third-party contracts for Tier 1 and Tier 2 vendors shall include the following exit provisions:

- **Notice Period:** Minimum [90] days' notice of termination for convenience; or as specified for cause or regulatory direction.
- **Transition Assistance:** Third party must provide reasonable transition assistance during the notice period, including knowledge transfer and data migration support.
- **Data Return:** Third party must return all [Organization Name] data in an agreed format within [30] calendar days of the exit date.
- **Data Deletion:** Third party must securely delete all [Organization Name] data within [60] calendar days of the exit date and provide written certification of deletion.
- **Continued Service:** Third party must continue to provide services at agreed SLA levels during the notice and transition period.
- **No Disruption Clause:** Third party must not disrupt, degrade, or withhold services as a result of contract termination proceedings, except where legally entitled to do so.
- **Regulatory Cooperation:** Third party must cooperate with [Organization Name] and regulators during any regulatory examination conducted during or following the exit period.

### 11.3 Exit Triggers

An exit strategy may be activated under the following circumstances:

| Trigger | Category | Initiating Action |
|---|---|---|
| Strategic decision to terminate the relationship | Planned | [90]-day notice; initiate transition plan |
| Persistent material SLA failures | Performance | [30]-day cure period; exit if not remediated |
| Confirmed data breach caused by third-party negligence | Security | Immediate escalation; conditional continuation pending RCA |
| Critical unremediated security vulnerabilities | Security | [30]-day remediation window; exit if not remediated |
| Third-party insolvency or cessation of business | Financial | Emergency exit protocol; immediate activation |
| Regulatory direction to terminate | Regulatory | Compliance with regulatory timeline |
| Material adverse change in third-party ownership or control | Governance | Reassessment; exit if risk threshold exceeded |
| Third-party failure to cooperate with audit or assessment | Governance | Escalation to CRO; potential exit |

### 11.4 Emergency Exit Protocol

Where an exit must be executed on an emergency basis (e.g., due to third-party insolvency, regulatory direction, or critical security incident), the following compressed timeline applies:

1. **Day 0 — Activation:** Head of Vendor Management activates Emergency Exit Protocol; notifies CRO, CISO, and Board Risk Committee.
2. **Day 1 — Stabilization:** Identify and activate contingency arrangements to maintain service continuity; initiate access audit.
3. **Day 3 — Data Inventory:** Complete inventory of all data held by third party; initiate data recovery process.
4. **Day 7 — Access Revocation:** Complete revocation of all third-party access to [Organization Name] systems.
5. **Day 14 — Alternative Provision:** Activate alternative service provider or interim internal provision.
6. **Day 30 — Transition Complete:** Confirm full service transition; obtain data return confirmation.
7. **Day 60 — Closure:** Obtain data deletion certification; complete post-exit review and lessons learned.

---

## 12. Non-Compliance and Escalation

*Define the consequences of non-compliance with this policy, both for [Organization Name] personnel and for third parties, and establish the escalation pathway for unresolved risks.*

### 12.1 Internal Non-Compliance

Failure by [Organization Name] personnel to comply with this policy may result in:

- Formal notification to the employee's line manager and HR.
- Disciplinary action in accordance with [Organization Name]'s disciplinary procedures.
- Mandatory remediation training.
- Escalation to the CRO and CISO where the non-compliance creates material risk.
- Regulatory reporting where the non-compliance constitutes a breach of BNM or other regulatory requirements.

### 12.2 Third-Party Non-Compliance

Where a third party fails to meet the requirements of this policy or the contractual obligations derived from it, the following escalation steps apply:

| Level | Trigger | Action | Responsible | Timeline |
|---|---|---|---|---|
| **Level 1** | Minor non-compliance or first occurrence | Written notification to third party; remediation plan requested | Business Unit Owner | Within [5] business days |
| **Level 2** | Repeated non-compliance or failure to submit remediation plan | Formal notice from Head of Vendor Management; escalation to CISO if security-related | Head of Vendor Management | Within [10] business days |
| **Level 3** | Material non-compliance or failure to remediate | Escalation to CRO; potential suspension of new work or access restriction | CRO + Head of Vendor Management | Within [15] business days |
| **Level 4** | Critical non-compliance or confirmed breach | Contract review; potential termination; regulatory notification if required | CRO + Legal + Board | Immediate |

### 12.3 Regulatory Reporting

[Organization Name] shall notify BNM of material incidents involving critical service providers in accordance with the notification timelines prescribed in the RMiT Policy Document and Guidelines on Outsourcing. The CISO and Head of Vendor Management are jointly responsible for ensuring timely regulatory notifications.

---

## 13. Review and Approval

### 13.1 Policy Review

This policy shall be reviewed annually by the Head of Vendor Management, in consultation with the CISO, Legal and Compliance, and CRO. Interim reviews shall be conducted upon:

- Material changes to the BNM RMiT policy document or related guidelines.
- Significant changes to [Organization Name]'s third-party risk profile.
- Material incidents involving critical service providers.
- Board or regulatory direction.

### 13.2 Version History

| Version | Date | Author | Approved By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], Head of Vendor Management | [Approved By] | Initial policy release |
| [1.1] | [Date] | [Author Name] | [Approved By] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Approved By] | [Description of changes] |

### 13.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Vendor Management (Policy Owner) | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| Chief Compliance Officer / Head of Legal | [Name] | __________________ | [Date] |
| Board Risk Committee Chair | [Name] | __________________ | [Date] |

---

## 14. References

*List all regulatory instruments, standards, and internal policies referenced in or relevant to this document.*

### 14.1 Regulatory References

| Reference | Issuing Authority | Relevant Sections |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 14.1, 14.2, 14.3 |
| Guidelines on Outsourcing | Bank Negara Malaysia | [All relevant clauses] |
| Financial Services Act 2013 | Parliament of Malaysia | [Relevant sections] |
| Islamic Financial Services Act 2013 | Parliament of Malaysia | [Relevant sections — where applicable] |
| Personal Data Protection Act 2010 | Parliament of Malaysia | Sections 6–9, Section 129 |
| National Cyber Security Policy | National Security Council | [Relevant provisions] |
| NACSA Critical Information Infrastructure Protection Framework | NACSA | [Relevant sections] |

### 14.2 Standards References

| Standard | Issuing Body | Relevant Sections |
|---|---|---|
| ISO/IEC 27001:2022 — Information Security Management | ISO/IEC | Annex A 5.19–5.23 |
| ISO/IEC 27036 — Information Security for Supplier Relationships | ISO/IEC | Parts 1–4 |
| ISO/IEC 27017 — Cloud Security Controls | ISO/IEC | [Relevant controls] |
| ISO/IEC 27018 — Protection of PII in Public Clouds | ISO/IEC | [Relevant controls] |
| NIST SP 800-161 — Cybersecurity Supply Chain Risk Management | NIST | [Relevant sections] |
| SOC 2 — Service Organization Control Reports | AICPA | Trust Services Criteria |
| PCI DSS v4.0 | PCI SSC | Requirement 12.8–12.9 |

### 14.3 Internal Policy References

| Policy / Document | Document ID | Owner |
|---|---|---|
| Information Security Policy | [Doc ID] | CISO |
| Data Classification Policy | [Doc ID] | CISO |
| Outsourcing Policy | [Doc ID] | CRO |
| Risk Appetite Statement | [Doc ID] | CRO |
| Incident Response Policy | [Doc ID] | CISO |
| Business Continuity Policy | [Doc ID] | [Owner] |
| Data Governance Policy | [Doc ID] | [Owner] |
| Records Management Policy | [Doc ID] | [Owner] |
| Procurement Policy | [Doc ID] | Head of Procurement |

---

## 15. Appendices

### Appendix A — Third-Party Engagement Request Form

*This form shall be completed by the Business Unit Owner for all new third-party engagements and submitted to Vendor Management to initiate the due diligence process.*

---

**Third-Party Engagement Request Form**

| Field | Details |
|---|---|
| **Requestor Name** | [Name] |
| **Business Unit** | [Business Unit] |
| **Date of Request** | [Date] |
| **Proposed Third Party Name** | [Vendor Name] |
| **Registered Business Address** | [Address] |
| **Contact Name** | [Contact Name] |
| **Contact Email / Phone** | [Contact Details] |
| **Description of Services Required** | [Description] |
| **Business Justification** | [Justification] |
| **Estimated Contract Value (RM)** | [Value] |
| **Estimated Contract Duration** | [Duration] |
| **Is this a renewal of an existing relationship?** | [ ] Yes — Existing Vendor ID: [ID] [ ] No |
| **Does the third party require access to [Organization Name] systems?** | [ ] Yes — Systems: [Systems] [ ] No |
| **Does the third party process personal data on behalf of [Organization Name]?** | [ ] Yes — Categories: [Categories] [ ] No |
| **Is this arrangement an outsourcing of a regulated function?** | [ ] Yes [ ] No [ ] Uncertain — requires legal review |
| **Proposed start date** | [Date] |
| **Is there a BCP/Disaster Recovery dependency on this third party?** | [ ] Yes [ ] No |
| **Preliminary Risk Assessment** | [ ] Tier 1 [ ] Tier 2 [ ] Tier 3 [ ] Tier 4 |
| **Requestor Signature** | __________________ |
| **Line Manager Approval** | __________________ |

---

### Appendix B — Third-Party Inventory Register

*The Third-Party Inventory Register is maintained by Vendor Management and updated continuously. A summary excerpt template is provided below.*

| Vendor ID | Vendor Name | Service Category | Risk Tier | Contract Start | Contract End | Last Assessment Date | Next Assessment Due | Business Unit Owner | Assessment Status |
|---|---|---|---|---|---|---|---|---|---|
| [ID] | [Vendor] | [Category] | [Tier] | [Date] | [Date] | [Date] | [Date] | [Name] | [Status] |

---

### Appendix C — Minimum Security Requirements Schedule

*This schedule defines the minimum security requirements to be incorporated into contractual agreements with third parties. Requirements are tiered by vendor risk classification.*

#### C.1 Tier 1 — Critical Vendor Minimum Security Requirements

- [ ] Maintain a certified or auditable Information Security Management System (ISMS) aligned to ISO 27001 or equivalent.
- [ ] Provide annual SOC 2 Type II report or equivalent independent audit covering services provided to [Organization Name].
- [ ] Maintain a dedicated Security Operations Centre (SOC) or equivalent 24/7 security monitoring capability.
- [ ] Conduct annual third-party penetration testing of systems and interfaces connected to [Organization Name] and provide results within [30] days.
- [ ] Implement and maintain multi-factor authentication (MFA) for all privileged access accounts.
- [ ] Apply critical security patches within [72] hours and high-severity patches within [14] days of release.
- [ ] Maintain a documented and tested Incident Response Plan (IRP).
- [ ] Maintain a documented and tested Business Continuity Plan (BCP) with RTO/RPO commitments aligned to [Organization Name]'s requirements.
- [ ] Encrypt all [Organization Name] data at rest (minimum AES-256) and in transit (minimum TLS 1.2).
- [ ] Maintain comprehensive audit logs for all access to [Organization Name] data and systems, retained for minimum [12] months.
- [ ] Submit to [Organization Name]'s audit rights, exercisable with [30] days' notice.

#### C.2 Tier 2 — High Risk Vendor Minimum Security Requirements

- [ ] Maintain an information security policy framework and demonstrate compliance.
- [ ] Provide a current security attestation (ISO 27001 certificate, SOC 2, or equivalent).
- [ ] Maintain MFA for privileged access.
- [ ] Apply critical patches within [7] days and high-severity patches within [30] days.
- [ ] Encrypt all [Organization Name] data at rest and in transit.
- [ ] Maintain audit logs for access to [Organization Name] data.
- [ ] Submit to [Organization Name]'s audit rights with [30] days' notice.

#### C.3 Tier 3 — Medium Risk Vendor Minimum Security Requirements

- [ ] Maintain an information security policy.
- [ ] Provide security self-attestation annually.
- [ ] Apply critical patches within [30] days.
- [ ] Encrypt [Organization Name] data in transit.

---

### Appendix D — Independent Security Assessment Report Template

*This template provides the structure for documenting the results of independent security assessments of third-party service providers.*

---

**Third-Party Security Assessment Report**

| Field | Details |
|---|---|
| **Assessment ID** | [ID] |
| **Third Party Name** | [Vendor Name] |
| **Assessment Date(s)** | [Date(s)] |
| **Lead Assessor** | [Name / Organization] |
| **Assessment Scope** | [Description] |
| **Risk Tier** | [Tier] |
| **Assessment Type** | [ ] Desktop Review [ ] On-Site [ ] VAPT [ ] Combined |
| **Report Classification** | Confidential |
| **Report Date** | [Date] |

**Executive Summary**

[Provide a brief summary of overall findings, risk rating, and key recommendations.]

**Overall Risk Rating:** [ ] Critical [ ] High [ ] Medium [ ] Low [ ] Informational

**Findings Summary**

| Finding ID | Domain | Severity | Description | Recommendation | Third-Party Response | Target Remediation Date |
|---|---|---|---|---|---|---|
| [F-001] | [Domain] | [Critical/High/Medium/Low] | [Description] | [Recommendation] | [Response] | [Date] |

**Remediation Tracking**

| Finding ID | Severity | Agreed Remediation | Target Date | Status | Verified By | Verification Date |
|---|---|---|---|---|---|---|
| [F-001] | [Severity] | [Action] | [Date] | [ ] Open [ ] In Progress [ ] Closed | [Name] | [Date] |

---

### Appendix E — Exit Strategy Plan Template

*This template provides the structure for documenting the exit strategy for each Tier 1 and Tier 2 third-party relationship.*

---

**Exit Strategy Plan**

| Field | Details |
|---|---|
| **Vendor Name** | [Vendor Name] |
| **Vendor ID** | [ID] |
| **Service(s) Covered** | [Services] |
| **Risk Tier** | [Tier] |
| **Plan Owner** | [Name, Role] |
| **Last Updated** | [Date] |
| **Next Review Date** | [Date] |
| **Approved By** | [Name, Role] |

**Alternative Provider Assessment**

| Provider | Services Offered | Estimated Transition Cost (RM) | Estimated Transition Timeline | Feasibility Assessment |
|---|---|---|---|---|
| [Provider 1] | [Services] | [Cost] | [Timeline] | [ ] Feasible [ ] Conditional [ ] Not Feasible |
| [Provider 2] | [Services] | [Cost] | [Timeline] | [ ] Feasible [ ] Conditional [ ] Not Feasible |
| **In-house provision** | [Description] | [Cost] | [Timeline] | [ ] Feasible [ ] Conditional [ ] Not Feasible |

**Data Inventory**

| Data Category | Format | Volume | Location | Return Method | Deletion Method |
|---|---|---|---|---|---|
| [Category] | [Format] | [Volume] | [Location] | [Method] | [Method] |

**Transition Milestones**

| Milestone | Description | Responsible | Target Timeline (Days from Exit Trigger) |
|---|---|---|---|
| 1 | Exit trigger confirmed; stakeholders notified | Head of Vendor Management | Day 0 |
| 2 | Alternative provider engaged | Business Unit Owner | Day [X] |
| 3 | Data inventory completed | IT + Vendor Management | Day [X] |
| 4 | Access revocation completed | IT Security | Day [X] |
| 5 | Data returned by third party | IT + Vendor Management | Day [X] |
| 6 | Services fully transitioned | Business Unit Owner | Day [X] |
| 7 | Data deletion certificate received | Vendor Management | Day [X] |
| 8 | Post-exit review completed | Head of Vendor Management | Day [X] |

---

### Appendix F — Glossary of Risk Ratings

| Rating | Description | Typical Response Timeline |
|---|---|---|
| **Critical** | Immediate material impact on regulated operations, customer data, or regulatory compliance. Requires immediate escalation and remediation. | Immediate |
| **High** | Significant risk with potential for material impact if not addressed. Requires priority remediation. | Within [30] days |
| **Medium** | Moderate risk with limited immediate impact. Requires remediation within a defined timeframe. | Within [90] days |
| **Low** | Minor risk with minimal impact. Should be addressed as part of routine risk management activities. | Within [180] days |
| **Informational** | Observation or best-practice recommendation. No immediate risk. | Next review cycle |

---

*End of Document*

---

**Document Control**

This document is subject to version control. The current approved version is maintained in [Document Management System]. Printed copies are uncontrolled. Always verify you are using the current version before relying on this document.

| Classification | Confidential |
|---|---|
| Distribution | Authorised Personnel Only |
| Storage | [Document Management System Path] |
| Retention Period | [7 years from supersession date, or as required by BNM record-keeping requirements] |