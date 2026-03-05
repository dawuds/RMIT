# Cloud Risk Assessment Report — BNM Notification

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
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT Paragraph 16.4 |

---

> **DOCUMENT CONTROL NOTICE**
> This document is classified as **Confidential**. It contains material non-public information relating to [Organization Name]'s technology risk posture and cloud adoption strategy. Access is restricted to authorized personnel and designated regulatory bodies. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of regulatory obligations under the Financial Services Act 2013 (FSA) and the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory Context and Notification Obligations](#3-regulatory-context-and-notification-obligations)
4. [Assessment Scope and Criteria](#4-assessment-scope-and-criteria)
5. [Methodology](#5-methodology)
6. [Cloud Service Model and Deployment Type](#6-cloud-service-model-and-deployment-type)
7. [Data Residency Requirements](#7-data-residency-requirements)
8. [Risk Findings and Ratings](#8-risk-findings-and-ratings)
9. [Shared Responsibility Matrix](#9-shared-responsibility-matrix)
10. [Notification Trigger Criteria and Timeline](#10-notification-trigger-criteria-and-timeline)
11. [Risk Treatment and Mitigation Plan](#11-risk-treatment-and-mitigation-plan)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Executive Summary

*Provide a concise executive-level summary of the cloud risk assessment, including the cloud initiative assessed, overall risk rating, key findings, and recommended disposition. This section is intended for senior management and the Board Risk Committee.*

**Assessment Subject:** [Name of Cloud Initiative / Cloud Service Provider (CSP) / System Being Assessed]

**Overall Risk Rating:** [Critical / High / Medium / Low]

**Assessment Date:** [Assessment Date]

**Assessment Lead:** [Name and Designation of Assessment Lead]

**Assessment Period:** [Start Date] to [End Date]

### 1.1 Summary of Key Findings

| Finding Reference | Risk Domain | Rating | Status |
|---|---|---|---|
| [F-001] | [e.g., Data Residency] | [High] | [Open / Mitigated] |
| [F-002] | [e.g., Vendor Lock-in] | [Medium] | [Open / Mitigated] |
| [F-003] | [e.g., Shared Responsibility Gaps] | [High] | [Open / In-Progress] |
| [F-004] | [e.g., Exit Strategy] | [Medium] | [Open / Mitigated] |
| [F-005] | [e.g., Encryption at Rest] | [Low] | [Closed] |

### 1.2 Recommended Disposition

- [ ] **Approve** — Risk is within acceptable tolerance; proceed with cloud adoption.
- [ ] **Approve with Conditions** — Risk is acceptable subject to implementation of specified controls.
- [ ] **Defer** — Material risks identified that must be remediated prior to re-assessment.
- [ ] **Reject** — Risk exceeds institutional appetite; cloud adoption not recommended.

**Recommended Disposition:** [State recommended disposition and brief rationale]

**BNM Notification Required:** [Yes / No]

**Notification Submission Target Date:** [Date, if applicable]

---

## 2. Purpose and Scope

### 2.1 Purpose

*Describe the purpose of this document and why it has been produced. Reference the regulatory obligation that necessitates its preparation.*

This Cloud Risk Assessment Report has been prepared by [Organization Name] in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Paragraph 16.4**, which mandates that financial institutions conduct a formal risk assessment prior to, and periodically throughout, the adoption of cloud services. The assessment supports the institution's obligation to notify BNM prior to the deployment of cloud services for the processing, storage, or transmission of data classified as material or sensitive.

This document serves the following purposes:

- To formally document the risk assessment findings for [Cloud Initiative Name];
- To demonstrate compliance with BNM RMiT Paragraph 16.4 requirements;
- To support the BNM notification submission process;
- To provide the Board and Senior Management with an evidence-based risk opinion on the proposed cloud adoption;
- To establish a record for regulatory inspection and internal audit purposes.

### 2.2 Scope

*Define the boundaries of this assessment, including what is in and out of scope. Be specific about systems, data classifications, geographic boundaries, and time periods.*

**In-Scope:**

| Scope Element | Details |
|---|---|
| **Cloud Initiative / Project** | [Name of cloud project, migration, or service being assessed] |
| **Cloud Service Provider (CSP)** | [CSP Name, e.g., Microsoft Azure, AWS, Google Cloud] |
| **Systems / Applications** | [List of systems, applications, or workloads being migrated or hosted] |
| **Data Classification** | [e.g., Customer PII, financial transaction records, internal operational data] |
| **Business Function** | [e.g., Core Banking, Payment Processing, Customer Onboarding] |
| **Assessment Period** | [Start Date] to [End Date] |
| **Geographic Regions** | [e.g., Malaysia (primary), Singapore (DR)] |

**Out of Scope:**

- [List any systems, applications, or functions explicitly excluded from this assessment]
- [e.g., On-premises infrastructure supporting the cloud environment]
- [e.g., Third-party integrations not directly managed by the CSP or [Organization Name]]

### 2.3 Relationship to Other Risk Assessments

*Describe how this assessment relates to other risk management activities, such as vendor due diligence, IT general controls reviews, or PDPA impact assessments.*

| Related Assessment / Document | Reference | Relationship |
|---|---|---|
| [Vendor Due Diligence Report — CSP Name] | [Document ID] | [Predecessor / Companion] |
| [Data Protection Impact Assessment (DPIA)] | [Document ID] | [Companion] |
| [Business Continuity / DR Test Report] | [Document ID] | [Companion] |
| [Third-Party Risk Assessment] | [Document ID] | [Predecessor] |
| [Previous Cloud Risk Assessment (if applicable)] | [Document ID] | [Prior Version] |

---

## 3. Regulatory Context and Notification Obligations

### 3.1 Regulatory Framework Overview

*Summarize the key regulatory provisions applicable to this cloud adoption. Reference specific BNM policy documents, circulars, and guidelines.*

[Organization Name] is subject to the following regulatory instruments governing the adoption of cloud services:

| Regulatory Instrument | Issuing Authority | Effective Date | Applicable Provisions |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | 1 January 2020 | Paragraphs 16.1–16.7 |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia / BNM | 30 June 2013 | Sections 47, 48, 123 |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Communications | 15 November 2013 | Sections 8, 9, 11 |
| [Any applicable BNM Circular / Addendum] | Bank Negara Malaysia | [Date] | [Provision] |

### 3.2 RMiT Paragraph 16.4 — Cloud Risk Management Requirements

*Provide a precise summary of the obligations under RMiT Paragraph 16.4 that this assessment is designed to fulfil.*

RMiT Paragraph 16.4 establishes the following requirements for cloud adoption by financial institutions:

- Financial institutions shall conduct a **comprehensive risk assessment** before adopting cloud services, with particular attention to data sensitivity, operational resilience, and regulatory compliance;
- The risk assessment shall evaluate risks across the **entire cloud lifecycle**, including onboarding, steady-state operations, and exit;
- Institutions must assess the **cloud service model** (IaaS, PaaS, SaaS) and **deployment type** (public, private, hybrid, community) to determine the risk profile and appropriate controls;
- Institutions are required to maintain a **shared responsibility matrix** clearly delineating control obligations between the institution and the CSP;
- **Data residency** must be assessed and documented, with explicit confirmation that data processing and storage complies with Malaysian legal and regulatory requirements;
- The institution shall **notify BNM** in accordance with the notification criteria and timelines specified in RMiT, prior to or upon adoption of material cloud services.

### 3.3 BNM Notification Requirement

*Confirm whether a BNM notification is required for this cloud initiative and the legal basis for that determination.*

Based on the assessment of [Cloud Initiative Name], [Organization Name] has determined:

- **Notification Required:** [Yes / No]
- **Basis for Determination:** [e.g., The initiative involves processing of customer financial data on a public cloud platform operated by a foreign CSP, triggering notification obligations under RMiT Paragraph 16.4(x)]
- **Notification Category:** [e.g., Prior Notification / Post-Implementation Notification]
- **Target Submission Date:** [Date]

---

## 4. Assessment Scope and Criteria

### 4.1 Assessment Objectives

*State the specific objectives of this risk assessment. Each objective should be measurable and tied to a regulatory or policy requirement.*

The assessment was conducted to achieve the following objectives:

1. Evaluate the **inherent risk** of the proposed cloud adoption across all material risk domains;
2. Assess the **adequacy of controls** implemented or proposed by [Organization Name] and the CSP;
3. Determine the **residual risk** following the application of mitigating controls;
4. Validate compliance with **RMiT Paragraph 16.4** and associated BNM requirements;
5. Assess the adequacy of **data residency** arrangements and their compliance with Malaysian law;
6. Review the **exit strategy** to ensure the institution is not subject to inappropriate vendor dependency;
7. Provide a **formal risk opinion** to support the BNM notification submission.

### 4.2 Assessment Criteria

*Define the criteria and standards against which the cloud environment is being assessed. Include internal policies, regulatory benchmarks, and industry frameworks.*

| Criteria Domain | Standard / Benchmark | Source |
|---|---|---|
| Technology Risk Management | BNM RMiT Paragraph 16.4 | Bank Negara Malaysia |
| Data Protection | Personal Data Protection Act 2010 | Malaysian Law |
| Cloud Security Controls | CSA Cloud Controls Matrix (CCM) v4.0 | Cloud Security Alliance |
| Information Security | ISO/IEC 27017:2015 (Cloud Security) | International Standard |
| Information Security | ISO/IEC 27018:2019 (PII in Cloud) | International Standard |
| Operational Resilience | BNM RMiT Paragraphs 9–11 | Bank Negara Malaysia |
| Vendor Risk Management | [Organization Name] Third-Party Risk Policy | Internal Policy |
| Data Classification | [Organization Name] Data Classification Policy | Internal Policy |
| Exit Planning | BNM RMiT Paragraph 16.4(x) | Bank Negara Malaysia |

### 4.3 Risk Appetite and Tolerance Thresholds

*State the institution's risk appetite for cloud-related risks and define the thresholds that determine acceptable versus unacceptable residual risk.*

**[Organization Name] Cloud Risk Appetite Statement:** [Insert organization's formally approved risk appetite statement for cloud technology risks]

| Risk Rating | Residual Risk Score | Appetite Threshold | Action Required |
|---|---|---|---|
| **Critical** | [Score Range, e.g., 20–25] | Zero tolerance | Mandatory risk treatment; escalate to Board |
| **High** | [Score Range, e.g., 15–19] | Requires Board approval | Risk treatment plan required; BRC endorsement |
| **Medium** | [Score Range, e.g., 8–14] | Acceptable with controls | Management-level monitoring; action plan |
| **Low** | [Score Range, e.g., 1–7] | Within tolerance | Standard monitoring; periodic review |

### 4.4 Inclusions and Exclusions

*Document what risk domains were assessed and any that were deliberately excluded, with justification.*

**Risk Domains Assessed:**

- [ ] Data Security and Privacy
- [ ] Operational Resilience and Business Continuity
- [ ] Vendor / Third-Party Risk
- [ ] Legal and Regulatory Compliance
- [ ] Data Residency and Sovereignty
- [ ] Shared Responsibility and Control Gaps
- [ ] Exit Strategy and Portability
- [ ] Concentration Risk
- [ ] Identity and Access Management
- [ ] Encryption and Key Management
- [ ] Incident Management and Forensics
- [ ] Physical and Environmental Security (CSP facilities)
- [ ] Change Management
- [ ] Audit and Logging

**Exclusions and Justification:**

| Excluded Domain | Justification |
|---|---|
| [Excluded Domain 1] | [Reason for exclusion] |
| [Excluded Domain 2] | [Reason for exclusion] |

---

## 5. Methodology

### 5.1 Assessment Approach

*Describe the overall methodology used to conduct this cloud risk assessment, including the risk assessment framework, scoring model, and governance approach.*

This assessment was conducted using [Organization Name]'s **Cloud Risk Assessment Methodology** (Version [x.x]), which is aligned with:

- BNM RMiT Paragraph 16.4 requirements;
- The Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) v4.0;
- ISO/IEC 27005:2022 Information Security Risk Management;
- NIST SP 800-30 Guide for Conducting Risk Assessments.

The assessment followed a **four-phase approach**:

| Phase | Activity | Output |
|---|---|---|
| **Phase 1: Scoping** | Define assessment scope, objectives, and criteria; engage stakeholders | Scoping document; stakeholder register |
| **Phase 2: Information Gathering** | Document review, CSP questionnaire, interviews, site visits (if applicable) | Evidence repository; interview notes |
| **Phase 3: Risk Analysis** | Identify threats and vulnerabilities; assess inherent risk; evaluate controls; determine residual risk | Risk register entries; control assessment |
| **Phase 4: Reporting** | Consolidate findings; prepare assessment report; obtain review and approval | This document |

### 5.2 Risk Scoring Model

*Define the quantitative or semi-quantitative risk scoring model used to rate risks in this assessment.*

Risks are scored using a **5x5 risk matrix** combining **Likelihood** and **Impact** ratings:

**Likelihood Scale:**

| Rating | Score | Description |
|---|---|---|
| Almost Certain | 5 | Expected to occur in most circumstances (>80% probability) |
| Likely | 4 | Will probably occur in most circumstances (60–80%) |
| Possible | 3 | Might occur at some time (40–60%) |
| Unlikely | 2 | Could occur at some time (20–40%) |
| Rare | 1 | May occur only in exceptional circumstances (<20%) |

**Impact Scale:**

| Rating | Score | Operational Impact | Financial Impact | Regulatory Impact |
|---|---|---|---|---|
| Catastrophic | 5 | Complete service failure; systemic impact | >MYR [X]M | License revocation; criminal liability |
| Major | 4 | Significant disruption; major customer impact | MYR [X]M–[Y]M | BNM enforcement action; significant penalty |
| Moderate | 3 | Moderate service disruption; limited customer impact | MYR [X]M–[Y]M | BNM directive; formal reprimand |
| Minor | 2 | Minor disruption; manageable customer impact | MYR [X]K–[Y]K | Regulatory inquiry; informal guidance |
| Negligible | 1 | Minimal disruption; no customer impact | <MYR [X]K | No regulatory consequence expected |

**Risk Rating Matrix:**

| | **Negligible (1)** | **Minor (2)** | **Moderate (3)** | **Major (4)** | **Catastrophic (5)** |
|---|---|---|---|---|---|
| **Almost Certain (5)** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Likely (4)** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Possible (3)** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Unlikely (2)** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Rare (1)** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

### 5.3 Information Sources

*Document the evidence sources and information-gathering methods used during the assessment.*

| Source Type | Description | Date Obtained |
|---|---|---|
| CSP Documentation | [e.g., Microsoft Azure Trust Center documentation, SOC 2 Type II reports] | [Date] |
| CSP Questionnaire Response | [e.g., Completed CSA CAIQ (Consensus Assessments Initiative Questionnaire)] | [Date] |
| Internal Policy Review | [e.g., [Organization Name] Information Security Policy, Data Classification Policy] | [Date] |
| Stakeholder Interviews | [e.g., Interviews with IT Architecture, Information Security, Business Owner] | [Date] |
| Technical Architecture Review | [e.g., Cloud architecture diagrams, data flow diagrams] | [Date] |
| Third-Party Audit Reports | [e.g., CSP SOC 2 Type II, ISO 27001 Certificate, CSA STAR] | [Date] |
| Previous Assessment Reports | [e.g., Prior cloud risk assessment dated [Date]] | [Date] |
| Penetration Test Results | [e.g., Cloud environment pen test report, if applicable] | [Date] |

### 5.4 Assessment Team

*List the individuals who participated in conducting this assessment and their roles.*

| Name | Designation | Organization | Role in Assessment |
|---|---|---|---|
| [Name] | [Designation] | [Organization Name] | Assessment Lead |
| [Name] | [Designation] | [Organization Name] | Technology Risk Analyst |
| [Name] | [Designation] | [Organization Name] | Information Security SME |
| [Name] | [Designation] | [Organization Name] | Business Owner Representative |
| [Name] | [Designation] | [External Consultant, if applicable] | Independent Reviewer |

### 5.5 Limitations and Caveats

*Document any limitations in the assessment methodology, evidence quality, or scope that may affect the completeness or accuracy of the findings.*

- [Limitation 1, e.g., Physical inspection of CSP data centre facilities was not conducted; assessment relied on third-party audit reports and CSP certifications]
- [Limitation 2, e.g., Assessment is based on architecture as of [Date]; post-deployment changes may alter the risk profile]
- [Limitation 3, e.g., CSP's multi-tenant environment restricts direct control validation; assessment relies on CSP attestations]

---

## 6. Cloud Service Model and Deployment Type

### 6.1 Cloud Service Model

*Describe the cloud service model(s) applicable to this initiative and the risk and control implications of each.*

**Primary Service Model:** [Infrastructure as a Service (IaaS) / Platform as a Service (PaaS) / Software as a Service (SaaS) / Hybrid]

| Service Model | Description | Applicable to This Initiative | Risk Implication |
|---|---|---|---|
| **IaaS** | CSP provides virtualised compute, storage, and network infrastructure | [Yes / No / Partial] | [Risk implication, e.g., Institution retains full OS and application control responsibilities] |
| **PaaS** | CSP provides platform for application development and deployment | [Yes / No / Partial] | [Risk implication] |
| **SaaS** | CSP provides fully managed application services | [Yes / No / Partial] | [Risk implication, e.g., Limited visibility into underlying controls; reliance on CSP certifications] |

**Service Model Detail:**

*Provide a more detailed description of the specific cloud services being consumed under each service model.*

- **[Service Name]** ([IaaS/PaaS/SaaS]): [Description of specific service, e.g., Microsoft Azure Virtual Machines used to host [Application Name]]
- **[Service Name]** ([IaaS/PaaS/SaaS]): [Description]
- **[Service Name]** ([IaaS/PaaS/SaaS]): [Description]

### 6.2 Cloud Deployment Type

*Describe the cloud deployment model and assess its implications for data security, regulatory compliance, and operational resilience.*

**Deployment Type:** [Public Cloud / Private Cloud / Hybrid Cloud / Community Cloud]

| Attribute | Details |
|---|---|
| **Deployment Model** | [e.g., Public Cloud] |
| **CSP Name** | [e.g., Microsoft Azure] |
| **CSP Headquarters** | [e.g., Redmond, Washington, USA] |
| **Primary Region (Production)** | [e.g., Southeast Asia (Singapore)] |
| **Secondary Region (DR)** | [e.g., Southeast Asia (Malaysia West)] |
| **Malaysian Availability Zone** | [Yes — specify / No] |
| **Multi-Tenancy** | [Yes — shared infrastructure / No — dedicated] |
| **Dedicated Instance** | [Yes / No] |

**Deployment Model Risk Assessment:**

| Risk Factor | Rating | Notes |
|---|---|---|
| Multi-tenancy risk | [High / Medium / Low] | [Assessment notes] |
| Physical security of CSP facilities | [High / Medium / Low] | [Assessment notes] |
| Jurisdictional risk (data sovereignty) | [High / Medium / Low] | [Assessment notes] |
| Concentration risk | [High / Medium / Low] | [Assessment notes] |
| Vendor dependency / lock-in risk | [High / Medium / Low] | [Assessment notes] |

### 6.3 Cloud Architecture Overview

*Summarize the high-level cloud architecture for the initiative. Reference attached architecture diagrams.*

[Provide a narrative description of the cloud architecture, including key components, integration points, and data flows. Reference architecture diagrams attached as appendices.]

**Key Architectural Components:**

| Component | CSP Service / Product | Purpose | Data Classification |
|---|---|---|---|
| [Component 1] | [e.g., Azure Virtual Machines] | [Purpose] | [e.g., Confidential] |
| [Component 2] | [e.g., Azure SQL Database] | [Purpose] | [e.g., Restricted] |
| [Component 3] | [e.g., Azure Key Vault] | [Purpose] | [e.g., Restricted] |
| [Component 4] | [e.g., Azure Active Directory] | [Purpose] | [e.g., Internal] |
| [Component 5] | [e.g., Azure Blob Storage] | [Purpose] | [e.g., Confidential] |

*Note: Refer to Appendix A (Cloud Architecture Diagram) for the complete architectural overview.*

---

## 7. Data Residency Requirements

### 7.1 Regulatory Requirements for Data Residency

*Describe the specific legal and regulatory requirements applicable to data residency for [Organization Name] as a Malaysian financial institution.*

[Organization Name], as a financial institution licensed under the [Financial Services Act 2013 / Islamic Financial Services Act 2013], is subject to the following data residency obligations:

| Requirement | Source | Details |
|---|---|---|
| Customer data must be kept within Malaysia unless BNM approval obtained | BNM RMiT Paragraph 16.4 | [Insert specific requirement text or paraphrase] |
| Personal data of Malaysian customers subject to Malaysian jurisdiction | PDPA 2010, Section 129 | [Insert specific requirement text or paraphrase] |
| Financial transaction records retention | [BNM Guideline / FSA Section] | [Retention period and location requirements] |
| [Other requirement] | [Source] | [Details] |

### 7.2 Data Inventory and Classification

*Provide a comprehensive inventory of data types that will be processed, stored, or transmitted via the cloud environment, with their classifications and sensitivity levels.*

| Data Category | Data Type | Classification | Volume (Approx.) | Includes PII | Includes Financial Data | Regulatory Sensitivity |
|---|---|---|---|---|---|---|
| [Customer Data] | [e.g., Customer names, IDs, contact details] | Restricted | [e.g., 1M records] | Yes | No | High — PDPA |
| [Financial Records] | [e.g., Transaction history, account balances] | Confidential | [e.g., 500K records] | Yes | Yes | High — FSA, BNM |
| [Operational Data] | [e.g., System logs, audit trails] | Internal | [e.g., 10TB] | No | No | Medium |
| [Employee Data] | [e.g., HR records] | Restricted | [e.g., 5K records] | Yes | No | Medium — PDPA |
| [Backup / Archive Data] | [e.g., Database backups] | Confidential | [e.g., 50TB] | Yes | Yes | High |

### 7.3 Data Flow Assessment

*Document and assess data flows between [Organization Name]'s systems and the cloud environment, including cross-border flows.*

| Data Flow | Source | Destination | Data Classification | Cross-Border | Encryption in Transit | Approved |
|---|---|---|---|---|---|---|
| [Flow 1] | [e.g., On-premises core banking] | [e.g., Azure SQL Database — MY Region] | Confidential | No | Yes (TLS 1.3) | [Yes / No] |
| [Flow 2] | [e.g., Azure — MY Region] | [e.g., Azure — SG Region (DR replication)] | Confidential | Yes | Yes (TLS 1.3) | [Pending BNM approval] |
| [Flow 3] | [e.g., Branch network] | [e.g., Azure Virtual Machines — MY Region] | Internal | No | Yes (IPSec VPN) | [Yes / No] |

**Cross-Border Data Flow Assessment:**

| Cross-Border Flow | Destination Country | Legal Basis | BNM Approval Status | Risk Rating |
|---|---|---|---|---|
| [Describe flow] | [Country] | [e.g., BNM approval obtained ref: [Reference Number]] | [Approved / Pending / Not Required] | [High / Medium / Low] |

### 7.4 Data Residency Compliance Assessment

*Assess the degree to which the proposed cloud arrangement meets data residency requirements and identify any gaps.*

| Requirement | Status | Evidence | Gap / Risk |
|---|---|---|---|
| Production data stored in Malaysia | [Compliant / Non-Compliant / Partial] | [Reference evidence] | [Describe gap if any] |
| DR data within ASEAN (if Malaysia not available) | [Compliant / Non-Compliant / Partial] | [Reference evidence] | [Describe gap if any] |
| BNM approval for cross-border flows obtained | [Compliant / Non-Compliant / Not Applicable] | [Reference evidence] | [Describe gap if any] |
| Data encryption at rest (Malaysian-controlled keys) | [Compliant / Non-Compliant / Partial] | [Reference evidence] | [Describe gap if any] |
| Data deletion / return upon contract termination | [Compliant / Non-Compliant / Not Assessed] | [Reference evidence] | [Describe gap if any] |

**Overall Data Residency Compliance Rating:** [Compliant / Substantially Compliant / Partially Compliant / Non-Compliant]

---

## 8. Risk Findings and Ratings

### 8.1 Risk Register

*Document all identified risks, their inherent ratings, the controls assessed, and the resulting residual risk ratings. Each finding must include a recommended treatment action.*

| Finding ID | Risk Domain | Risk Description | Threat Source | Inherent Likelihood | Inherent Impact | Inherent Rating | Existing Controls | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Rating | Treatment Action | Owner | Target Date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| F-001 | Data Residency | [Description of risk] | [Threat] | [1–5] | [1–5] | [Rating] | [Controls in place] | [Strong / Adequate / Weak / None] | [1–5] | [1–5] | [Rating] | [Accept / Mitigate / Transfer / Avoid] | [Owner] | [Date] |
| F-002 | Operational Resilience | [Description of risk] | [Threat] | [1–5] | [1–5] | [Rating] | [Controls in place] | [Strong / Adequate / Weak / None] | [1–5] | [1–5] | [Rating] | [Accept / Mitigate / Transfer / Avoid] | [Owner] | [Date] |
| F-003 | Vendor / Third-Party Risk | [Description of risk] | [Threat] | [1–5] | [1–5] | [Rating] | [Controls in place] | [Strong / Adequate / Weak / None] | [1–5] | [1–5] | [Rating] | [Accept / Mitigate / Transfer / Avoid] | [Owner] | [Date] |
| F-004 | Data Security | [Description of risk] | [Threat] | [1–5] | [1–5] | [Rating] | [Controls in place] | [Strong / Adequate / Weak / None] | [1–5] | [1–5] | [Rating] | [Accept / Mitigate / Transfer / Avoid] | [Owner] | [Date] |
| F-005 | Legal / Regulatory Compliance | [Description of risk] | [Threat] | [1–5] | [1–5] | [Rating] | [Controls in place] | [Strong / Adequate / Weak / None] | [1–5] | [1–5] | [Rating] | [Accept / Mitigate / Transfer / Avoid] | [Owner] | [Date] |
| F-006 | Exit Strategy | [Description of risk] | [Threat] | [1–5] | [1–5] | [Rating] | [Controls in place] | [Strong / Adequate / Weak / None] | [1–5] | [1–5] | [Rating] | [Accept / Mitigate / Transfer / Avoid] | [Owner] | [Date] |
| F-007 | Concentration Risk | [Description of risk] | [Threat] | [1–5] | [1–5] | [Rating] | [Controls in place] | [Strong / Adequate / Weak / None] | [1–5] | [1–5] | [Rating] | [Accept / Mitigate / Transfer / Avoid] | [Owner] | [Date] |
| F-008 | Identity & Access Management | [Description of risk] | [Threat] | [1–5] | [1–5] | [Rating] | [Controls in place] | [Strong / Adequate / Weak / None] | [1–5] | [1–5] | [Rating] | [Accept / Mitigate / Transfer / Avoid] | [Owner] | [Date] |

### 8.2 Detailed Findings

*For each finding rated Medium or above, provide a detailed narrative description. Replicate the following structure for each finding.*

---

#### Finding F-001: [Risk Domain] — [Brief Risk Title]

| Attribute | Details |
|---|---|
| **Finding ID** | F-001 |
| **Risk Domain** | [Risk Domain] |
| **Inherent Risk Rating** | [Critical / High / Medium / Low] |
| **Residual Risk Rating** | [Critical / High / Medium / Low] |
| **Treatment Recommendation** | [Accept / Mitigate / Transfer / Avoid] |

**Risk Description:**
[Provide a detailed description of the risk, including the specific circumstances that could give rise to the risk, the potential threat actors or scenarios, and the pathway by which the risk could materialise.]

**Potential Impact:**
[Describe the potential impact on [Organization Name] if this risk materialises, covering financial, operational, reputational, and regulatory dimensions.]

**Existing Controls:**
- [Control 1]
- [Control 2]
- [Control 3]

**Control Gaps Identified:**
- [Gap 1]
- [Gap 2]

**Recommended Treatment Actions:**

| Action | Owner | Priority | Target Date |
|---|---|---|---|
| [Specific action to be taken] | [Owner] | [High / Medium / Low] | [Date] |
| [Specific action to be taken] | [Owner] | [High / Medium / Low] | [Date] |

**Regulatory Linkage:** RMiT Paragraph [x.x]; [Other applicable clause]

---

#### Finding F-002: [Risk Domain] — [Brief Risk Title]

*[Replicate the structure above for each finding rated Medium or above.]*

---

### 8.3 Risk Summary Heat Map

*Summarize the residual risk profile of the cloud initiative visually. The heat map below plots findings by residual likelihood and impact.*

```
                   RESIDUAL RISK HEAT MAP
       
Impact ↑    
   5   |  [  ]  |  [  ]  |  [  ]  |  [  ]  |  [  ]  |
   4   |  [  ]  |  [  ]  |  [  ]  |  [  ]  |  [  ]  |
   3   |  [  ]  |  [  ]  |  [  ]  |  [  ]  |  [  ]  |
   2   |  [  ]  |  [  ]  |  [  ]  |  [  ]  |  [  ]  |
   1   |  [  ]  |  [  ]  |  [  ]  |  [  ]  |  [  ]  |
       +---------+---------+---------+---------+---------→
            1        2        3        4        5     Likelihood
       
       [Insert finding IDs into appropriate cells]
       Legend: ■ Critical  ▲ High  ● Medium  ○ Low
```

*Note: Populate the heat map above by inserting each finding's ID (e.g., F-001) into the cell corresponding to its residual Likelihood (x-axis) and residual Impact (y-axis).*

### 8.4 Overall Risk Rating Summary

| Risk Domain | Number of Findings | Critical | High | Medium | Low | Overall Domain Rating |
|---|---|---|---|---|---|---|
| Data Residency | [n] | [n] | [n] | [n] | [n] | [Rating] |
| Operational Resilience | [n] | [n] | [n] | [n] | [n] | [Rating] |
| Vendor / Third-Party Risk | [n] | [n] | [n] | [n] | [n] | [Rating] |
| Data Security | [n] | [n] | [n] | [n] | [n] | [Rating] |
| Legal / Regulatory Compliance | [n] | [n] | [n] | [n] | [n] | [Rating] |
| Exit Strategy | [n] | [n] | [n] | [n] | [n] | [Rating] |
| Concentration Risk | [n] | [n] | [n] | [n] | [n] | [Rating] |
| Identity & Access Management | [n] | [n] | [n] | [n] | [n] | [Rating] |
| **Total / Overall** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** | **[Overall Rating]** |

---

## 9. Shared Responsibility Matrix

### 9.1 Overview of Shared Responsibility

*Explain the concept of shared responsibility in cloud computing and how it applies to this specific arrangement. Describe how responsibilities differ across service models.*

The shared responsibility model defines the division of security and compliance obligations between [Organization Name] (the cloud customer) and [CSP Name] (the cloud service provider). The allocation of responsibilities varies depending on the cloud service model (IaaS, PaaS, SaaS). [Organization Name] retains ultimate regulatory accountability to BNM for all systems and data regardless of the shared responsibility arrangement.

Under the cloud service model applicable to this initiative ([IaaS / PaaS / SaaS]), the division of responsibilities is summarised below.

### 9.2 Shared Responsibility Matrix

*Complete the following matrix for all control domains. Mark each cell to indicate who holds primary responsibility: Organization (O), CSP (C), Shared (S), or Not Applicable (N/A). Include commentary on gaps or ambiguities.*

| Control Domain | Control Area | [Organization Name] | [CSP Name] | Shared | Contractual Basis | Control Gap |
|---|---|---|---|---|---|---|
| **Physical Security** | Physical data centre security | | C | | [Contract Clause / CSP Policy] | [Yes / No] |
| **Physical Security** | Physical access controls | | C | | [Contract Clause / CSP Policy] | [Yes / No] |
| **Network Security** | Network perimeter controls (CSP layer) | | C | | [Contract Clause / CSP Policy] | [Yes / No] |
| **Network Security** | Network perimeter controls (customer layer) | O | | | [Internal Policy] | [Yes / No] |
| **Network Security** | Firewall and security group configuration | | | S | [Contract Clause] | [Yes / No] |
| **Identity & Access Management** | CSP identity platform | | C | | [Contract Clause / CSP Policy] | [Yes / No] |
| **Identity & Access Management** | Customer IAM (user accounts, MFA) | O | | | [Internal Policy] | [Yes / No] |
| **Identity & Access Management** | Privileged access management | O | | | [Internal Policy] | [Yes / No] |
| **Data Security** | Encryption at rest (infrastructure-level) | | C | | [Contract Clause / CSP Policy] | [Yes / No] |
| **Data Security** | Encryption at rest (application-level) | O | | | [Internal Policy] | [Yes / No] |
| **Data Security** | Encryption key management | O | | | [Internal Policy] | [Yes / No] |
| **Data Security** | Encryption in transit | | | S | [Contract Clause] | [Yes / No] |
| **Data Security** | Data classification and labelling | O | | | [Internal Policy] | [Yes / No] |
| **Vulnerability Management** | Hypervisor and platform patching | | C | | [Contract Clause / CSP Policy] | [Yes / No] |
| **Vulnerability Management** | OS and application patching | O | | | [Internal Policy] | [Yes / No] |
| **Vulnerability Management** | Vulnerability scanning | O | | | [Internal Policy] | [Yes / No] |
| **Incident Management** | CSP platform incident response | | C | | [Contract Clause / SLA] | [Yes / No] |
| **Incident Management** | Customer incident response | O | | | [Internal Policy] | [Yes / No] |
| **Incident Management** | Forensic investigation capability | | | S | [Contract Clause] | [Yes / No] |
| **Business Continuity** | CSP infrastructure resilience | | C | | [Contract Clause / SLA] | [Yes / No] |
| **Business Continuity** | Application-level BC/DR | O | | | [Internal Policy] | [Yes / No] |
| **Compliance & Audit** | CSP regulatory compliance (CSP-layer) | | C | | [Contract Clause / CSP Policy] | [Yes / No] |
| **Compliance & Audit** | Customer regulatory compliance | O | | | [Internal Policy] | [Yes / No] |
| **Compliance & Audit** | Audit log retention and access | | | S | [Contract Clause] | [Yes / No] |
| **Logging & Monitoring** | CSP platform-level logging | | C | | [Contract Clause / CSP Policy] | [Yes / No] |
| **Logging & Monitoring** | Application and security monitoring | O | | | [Internal Policy] | [Yes / No] |
| **Change Management** | CSP infrastructure changes | | C | | [Contract Clause / CSP Policy] | [Yes / No] |
| **Change Management** | Customer application changes | O | | | [Internal Policy] | [Yes / No] |

**Legend:** O = [Organization Name] Responsible | C = CSP Responsible | S = Shared Responsibility

### 9.3 Shared Responsibility Gaps and Remediation

*Identify areas where shared responsibility arrangements create gaps or ambiguities, and document the agreed remediation.*

| Gap ID | Control Area | Gap Description | Risk Rating | Remediation Action | Owner | Target Date |
|---|---|---|---|---|---|---|
| SRG-001 | [Control Area] | [Description of gap, e.g., Forensic investigation capability is contractually ambiguous; no SLA on CSP cooperation with regulatory investigations] | [High / Medium / Low] | [Remediation action, e.g., Negotiate addendum to CSP contract to include explicit forensic cooperation clause] | [Owner] | [Date] |
| SRG-002 | [Control Area] | [Description of gap] | [High / Medium / Low] | [Remediation action] | [Owner] | [Date] |
| SRG-003 | [Control Area] | [Description of gap] | [High / Medium / Low] | [Remediation action] | [Owner] | [Date] |

### 9.4 Contractual Protections Review

*Assess whether the cloud services agreement and associated contracts provide adequate protections to support [Organization Name]'s compliance with RMiT and other applicable requirements.*

| Contractual Requirement | Required by | Present in Contract | Reference (Clause) | Assessment |
|---|---|---|---|---|
| Right to audit CSP | RMiT 16.4 | [Yes / No / Partial] | [Clause] | [Adequate / Requires strengthening] |
| BNM / regulatory authority access rights | RMiT 16.4; FSA | [Yes / No / Partial] | [Clause] | [Adequate / Requires strengthening] |
| Data return and deletion upon termination | PDPA 2010 | [Yes / No / Partial] | [Clause] | [Adequate / Requires strengthening] |
| Incident notification SLA | RMiT 16.4 | [Yes / No / Partial] | [Clause] | [Adequate / Requires strengthening] |
| Sub-contractor disclosure and approval | RMiT 16.4 | [Yes / No / Partial] | [Clause] | [Adequate / Requires strengthening] |
| Data residency commitment | RMiT 16.4 | [Yes / No / Partial] | [Clause] | [Adequate / Requires strengthening] |
| Exit support obligations | RMiT 16.4 | [Yes / No / Partial] | [Clause] | [Adequate / Requires strengthening] |
| Service level agreements (uptime, RTO, RPO) | BNM RMiT (Operational Resilience) | [Yes / No / Partial] | [Clause] | [Adequate / Requires strengthening] |
| Liability cap adequacy | Internal Legal Assessment | [Yes / No / Partial] | [Clause] | [Adequate / Requires strengthening] |

---

## 10. Notification Trigger Criteria and Timeline

### 10.1 BNM Notification Framework

*Describe the BNM notification framework as it applies to cloud adoption by financial institutions, with reference to the specific RMiT provisions.*

BNM RMiT Paragraph 16.4 establishes notification obligations for financial institutions adopting cloud services. The notification framework is designed to enable BNM supervisory oversight of the technology risk implications of cloud adoption and to ensure that institutions are not exposed to material risks that have not been assessed and communicated to the regulator.

### 10.2 Notification Trigger Assessment

*Assess whether the current cloud initiative triggers the BNM notification obligation. Document the analysis and conclusion.*

| Trigger Criterion | RMiT Reference | Applicable to This Initiative | Assessment |
|---|---|---|---|
| First adoption of cloud services for processing, storage, or transmission of customer data | RMiT 16.4(x) | [Yes / No] | [Assessment notes] |
| Material change to existing cloud arrangement (e.g., new CSP, new data categories, new regions) | RMiT 16.4(x) | [Yes / No] | [Assessment notes] |
| Adoption of cloud services for systems classified as critical or highly sensitive | RMiT 16.4(x) | [Yes / No] | [Assessment notes] |
| Cross-border data flows involving customer financial data | RMiT 16.4(x) | [Yes / No] | [Assessment notes] |
| [Other trigger criterion as defined in RMiT] | RMiT 16.4(x) | [Yes / No] | [Assessment notes] |

**Notification Required:** [Yes / No]

**Notification Type:** [Prior Notification (before go-live) / Post-Implementation Notification / Periodic Reporting]

**Justification:** [Provide a clear statement explaining the basis for the notification determination, referencing the specific RMiT trigger criteria met.]

### 10.3 Notification Timeline Requirements

*Document the notification timeline requirements under RMiT and the institution's planned submission schedule.*

| Milestone | RMiT Requirement | [Organization Name] Planned Date | Status |
|---|---|---|---|
| Cloud risk assessment completion | Before BNM notification submission | [Date] | [Complete / In-Progress / Planned] |
| Internal approval (Board / ITSC) | Before BNM notification submission | [Date] | [Complete / In-Progress / Planned] |
| BNM notification submission | [e.g., At least [X] business days / calendar days prior to go-live] | [Date] | [Submitted / Planned] |
| BNM acknowledgement / no-objection | N/A (BNM-dependent) | [Expected Date] | [Received / Pending] |
| Cloud environment go-live | After BNM acknowledgement (if prior notification) | [Date] | [Planned] |
| Post-implementation review submission | [e.g., Within [X] months of go-live] | [Date] | [Planned] |
| Quarterly review and re-assessment | Quarterly | [Next review date] | [Planned] |

### 10.4 BNM Notification Package

*Describe the components of the BNM notification package to be submitted.*

The BNM notification package for this cloud initiative will comprise the following documents:

| Document | Status | Reference |
|---|---|---|
| Cover letter (signed by [CEO / CRO / Head of Technology Risk]) | [Draft / Final] | [Reference] |
| This Cloud Risk Assessment Report | [Draft / Final] | [This Document] |
| Cloud architecture diagram | [Draft / Final] | [Appendix A] |
| Data flow diagram | [Draft / Final] | [Appendix B] |
| CSP certification summary (SOC 2 Type II, ISO 27001, CSA STAR) | [Attached / Pending] | [Appendix C] |
| Board / Senior Management approval evidence | [Draft / Final] | [Appendix D] |
| Shared responsibility matrix | [Included in this report] | Section 9 |
| [Other document required by BNM] | [Status] | [Reference] |

**Submission Channel:** [BNM LINK / Physical Submission / Email — specify]

**Submission Reference Contact:** [BNM Department / Contact Name if applicable]

### 10.5 Post-Notification Monitoring

*Describe the ongoing monitoring and reporting obligations that apply following the initial BNM notification.*

Following the initial BNM notification and commencement of cloud operations, [Organization Name] will:

- Conduct a **quarterly cloud risk review** and update this assessment in accordance with the quarterly review frequency;
- Submit an **annual cloud risk summary** to the Board Risk Committee and Audit Committee;
- **Notify BNM** of any material changes to the cloud arrangement, including changes to CSP, data classifications processed, or geographic regions, within [X] business days of the change;
- Maintain this assessment as a **live document** with version control, ensuring it reflects the current state of the cloud environment at all times;
- Retain all versions of this assessment for a minimum of [X] years in accordance with [Organization Name]'s record retention policy and BNM requirements.

---

## 11. Risk Treatment and Mitigation Plan

### 11.1 Risk Treatment Summary

*Summarize the risk treatment decisions for all findings in the risk register. Treatment actions must be formally approved by the relevant risk owner.*

| Finding ID | Risk Description | Residual Rating | Treatment Decision | Rationale | Approved By | Approval Date |
|---|---|---|---|---|---|---|
| F-001 | [Risk description] | [Rating] | [Mitigate / Accept / Transfer / Avoid] | [Rationale for treatment decision] | [Approver] | [Date] |
| F-002 | [Risk description] | [Rating] | [Mitigate / Accept / Transfer / Avoid] | [Rationale for treatment decision] | [Approver] | [Date] |
| F-003 | [Risk description] | [Rating] | [Mitigate / Accept / Transfer / Avoid] | [Rationale for treatment decision] | [Approver] | [Date] |
| F-004 | [Risk description] | [Rating] | [Mitigate / Accept / Transfer / Avoid] | [Rationale for treatment decision] | [Approver] | [Date] |
| F-005 | [Risk description] | [Rating] | [Mitigate / Accept / Transfer / Avoid] | [Rationale for treatment decision] | [Approver] | [Date] |

### 11.2 Detailed Mitigation Plan

*For all findings where the treatment decision is "Mitigate", provide a detailed action plan with specific, measurable control improvements.*

| Action ID | Finding Reference | Mitigation Action | Control Type | Responsible Owner | Supporting Owner | Priority | Target Completion Date | Completion Evidence |
|---|---|---|---|---|---|---|---|---|
| MA-001 | F-001 | [Specific action, e.g., Implement customer-managed encryption keys (CMEK) for all production databases using Azure Key Vault with HSM-backed keys] | Preventive | [Owner] | [Supporting Owner] | High | [Date] | [Evidence, e.g., Key Vault configuration report] |
| MA-002 | F-001 | [Specific action] | Detective | [Owner] | [Supporting Owner] | High | [Date] | [Evidence] |
| MA-003 | F-002 | [Specific action, e.g., Conduct DR failover test for cloud environment to validate RTO/RPO targets] | Corrective | [Owner] | [Supporting Owner] | High | [Date] | [Evidence] |
| MA-004 | F-003 | [Specific action, e.g., Negotiate CSP contract amendment to include explicit BNM regulatory access clause] | Preventive | [Owner] | [Supporting Owner] | High | [Date] | [Evidence] |
| MA-005 | F-004 | [Specific action] | Detective | [Owner] | [Supporting Owner] | Medium | [Date] | [Evidence] |

### 11.3 Risk Acceptance Register

*For findings where the treatment decision is "Accept", document the formal acceptance, including the rationale and the approving authority.*

*All risk acceptances for findings rated High or Critical must be approved by the Board Risk Committee or its delegated authority.*

| Acceptance ID | Finding Reference | Risk Description | Residual Rating | Acceptance Rationale | Conditions of Acceptance | Acceptance Expiry | Approved By | Approval Date |
|---|---|---|---|---|---|---|---|---|
| RA-001 | [F-XXX] | [Risk description] | [High / Medium / Low] | [Rationale, e.g., Risk is inherent to the cloud deployment model and cannot be fully eliminated; compensating controls are in place] | [Conditions, e.g., Subject to annual review; dependent on continued CSP certification] | [Date] | [Approver and Title] | [Date] |

### 11.4 Mitigation Tracking and Reporting

*Describe the process for tracking the implementation of mitigation actions and reporting progress to management.*

Mitigation actions documented in this plan will be tracked as follows:

- **Tracking System:** [e.g., [Organization Name] GRC system / Jira / SharePoint]
- **Reporting Frequency:** Monthly to [Technology Risk Committee / IT Steering Committee]
- **Escalation Trigger:** Actions overdue by more than [30] days to be escalated to [Head of Technology Risk / CRO]
- **Closure Criteria:** Actions are closed upon receipt and validation of the defined completion evidence by the Technology Risk team
- **Quarterly Review:** All open actions and their status to be reviewed at each quarterly cloud risk assessment cycle

---

## 12. Roles and Responsibilities

### 12.1 RACI Matrix

*Define the roles and responsibilities for all activities associated with the Cloud Risk Assessment and BNM notification process using a RACI framework.*

**RACI Legend:**
- **R** = Responsible (performs the work)
- **A** = Accountable (ultimately answerable for the outcome; signs off)
- **C** = Consulted (provides input; two-way communication)
- **I** = Informed (receives updates; one-way communication)

| Activity | Board / Board Risk Committee | CRO / Chief Risk Officer | Head of Technology Risk | Technology Risk Team | CISO / Information Security | IT Architecture | Business Owner | Legal / Compliance | Internal Audit | CSP Relationship Manager |
|---|---|---|---|---|---|---|---|---|---|---|
| **Assessment Initiation** | I | A | R | R | C | C | C | C | I | I |
| **Scope Definition** | I | A | R | R | C | C | C | C | I | I |
| **Information Gathering** | | I | A | R | C | R | C | C | I | C |
| **Risk Identification** | | I | A | R | C | C | C | C | I | |
| **Control Assessment** | | I | A | R | R | C | C | C | I | C |
| **Risk Scoring and Rating** | | C | A | R | C | | | C | I | |
| **Report Drafting** | | I | A | R | C | C | C | C | I | |
| **Internal Review of Report** | I | A | R | C | C | C | I | C | C | |
| **Approval — Technology Risk Level** | | A | R | I | I | | I | I | I | |
| **Approval — Senior Management** | I | A | I | I | I | | I | I | I | |
| **Approval — Board / BRC** | A | R | C | I | I | | I | I | I | |
| **BNM Notification Preparation** | I | A | R | R | C | | I | R | I | |
| **BNM Notification Submission** | I | A | R | I | I | | I | R | I | |
| **BNM Correspondence Management** | I | A | R | I | | | I | R | I | |
| **Mitigation Action Implementation** | | I | A | C | C | R | R | | I | |
| **Mitigation Tracking and Reporting** | I | I | A | R | I | I | I | I | C | |
| **Quarterly Review** | I | A | R | R | C | C | C | C | I | |
| **Annual Assessment** | A | R | R | R | C | C | C | C | C | |
| **Post-Incident Reassessment** | I | A | R | R | R | C | C | C | C | |

### 12.2 Key Role Definitions

*Define the specific cloud risk-related responsibilities for each key role listed in the RACI matrix.*

| Role | Key Responsibilities — Cloud Risk |
|---|---|
| **Board / Board Risk Committee (BRC)** | Approve the institution's cloud risk appetite; provide ultimate oversight of material cloud risk exposures; endorse BNM notifications for material cloud initiatives; approve risk acceptances for Critical and High-rated findings |
| **Chief Risk Officer (CRO)** | Accountable for the integrity and completeness of the cloud risk assessment program; ensure adequate resources and competencies within the risk function; escalate material cloud risks to Board; sign BNM notification letters |
| **Head of Technology Risk** | Document owner; lead and oversee all cloud risk assessments; ensure BNM notification obligations are met; manage the cloud risk register; report to Technology Risk Committee |
| **Technology Risk Team** | Conduct cloud risk assessments; maintain risk registers; track mitigation actions; prepare BNM notification packages; perform quarterly reviews |
| **CISO / Information Security** | Provide expert input on information security controls; assess encryption, IAM, and data security controls; advise on shared responsibility arrangements |
| **IT Architecture** | Provide technical documentation on cloud architecture; validate technical control implementations; support data flow and architecture diagram preparation |
| **Business Owner** | Define business requirements; confirm data classifications; support scoping of assessments; implement business-side mitigations; accept residual risks within their authority |
| **Legal / Compliance** | Provide legal advice on data residency, contract terms, and regulatory obligations; review and co-sign BNM notification letters; advise on cross-border data flow compliance |
| **Internal Audit** | Provide independent assurance on the adequacy of the cloud risk assessment process; review completed assessments; report findings to Audit Committee |
| **CSP Relationship Manager** | Manage the relationship with the CSP; facilitate responses to assessment questionnaires; escalate contractual issues; coordinate CSP audit rights |

---

## 13. Review and Approval

### 13.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Name, Designation] | [Reviewer Name] | Initial draft for internal review |
| 0.2 | [Date] | [Name, Designation] | [Reviewer Name] | Incorporated comments from Technology Risk Team |
| 0.3 | [Date] | [Name, Designation] | [Reviewer Name] | Incorporated Legal and Compliance review comments |
| 1.0 | [Date] | [Name, Designation] | [Reviewer Name] | Final version approved for BNM submission |

### 13.2 Internal Review Sign-Off

*All reviewers must confirm they have read and are satisfied with the accuracy and completeness of their respective sections prior to submission for approval.*

| Reviewer | Role | Section(s) Reviewed | Reviewed Date | Signature |
|---|---|---|---|---|
| [Name] | Technology Risk Manager | All sections | [Date] | [Signature] |
| [Name] | CISO | Sections 6, 7, 8, 9 | [Date] | [Signature] |
| [Name] | IT Architecture Lead | Sections 6, 7 | [Date] | [Signature] |
| [Name] | Legal Counsel | Sections 3, 7, 9.4, 10 | [Date] | [Signature] |
| [Name] | Compliance Manager | Sections 3, 10 | [Date] | [Signature] |
| [Name] | Business Owner | Sections 4, 7, 11 | [Date] | [Signature] |

### 13.3 Approval Sign-Off

*This document must be formally approved at the appropriate authority level before submission to BNM. Approval authority is determined by the overall risk rating of the assessment.*

| Level | Approval Required When | Role | Name | Date | Signature |
|---|---|---|---|---|---|
| **Level 1 — Technology Risk** | All assessments | Head of Technology Risk | [Name] | [Date] | [Signature] |
| **Level 2 — Senior Management** | All assessments rated Medium or above | Chief Risk Officer | [Name] | [Date] | [Signature] |
| **Level 3 — Senior Management** | All assessments rated High or Critical | Chief Executive Officer | [Name] | [Date] | [Signature] |
| **Level 4 — Board** | All assessments rated Critical; all BNM prior notifications | Chairman, Board Risk Committee | [Name] | [Date] | [Signature] |

**Approval Level Required for This Assessment:** [Level X — based on overall risk rating of [Rating]]

---

## 14. References

### 14.1 Regulatory References

| Reference | Title | Issuing Authority | Date | Relevant Provisions |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | 1 January 2020 | Paragraph 16.4 (Cloud Risk Management) |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | 1 January 2020 | Paragraphs 16.1–16.3 (General Cloud Requirements) |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | 1 January 2020 | Paragraphs 9–11 (Operational Resilience) |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | 30 June 2013 | Sections 47, 48, 123 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 15 November 2013 | Sections 8, 9, 11, 129 |
| [BNM Circular / Addendum] | [Title] | Bank Negara Malaysia | [Date] | [Provision] |

### 14.2 Internal Policy References

| Reference | Title | Version | Date |
|---|---|---|---|
| [Policy ID] | [Organization Name] Information Security Policy | [Version] | [Date] |
| [Policy ID] | [Organization Name] Technology Risk Management Policy | [Version] | [Date] |
| [Policy ID] | [Organization Name] Cloud Adoption Policy | [Version] | [Date] |
| [Policy ID] | [Organization Name] Data Classification Policy | [Version] | [Date] |
| [Policy ID] | [Organization Name] Third-Party Risk Management Policy | [Version] | [Date] |
| [Policy ID] | [Organization Name] Business Continuity Policy | [Version] | [Date] |
| [Policy ID] | [Organization Name] Cloud Risk Assessment Methodology | [Version] | [Date] |

### 14.3 Industry Standards and Frameworks

| Standard | Title | Version | Publisher |
|---|---|---|---|
| ISO/IEC 27001 | Information Security Management Systems | 2022 | ISO |
| ISO/IEC 27017 | Code of Practice for Information Security Controls for Cloud Services | 2015 | ISO |
| ISO/IEC 27018 | Code of Practice for Protection of PII in Public Clouds | 2019 | ISO |
| ISO/IEC 27005 | Information Security Risk Management | 2022 | ISO |
| CSA CCM | Cloud Controls Matrix | v4.0 | Cloud Security Alliance |
| CSA CAIQ | Consensus Assessments Initiative Questionnaire | v4.0.2 | Cloud Security Alliance |
| NIST SP 800-30 | Guide for Conducting Risk Assessments | Rev. 1 | NIST |
| NIST SP 800-145 | The NIST Definition of Cloud Computing | | NIST |

---

## 15. Appendices

### Appendix A — Cloud Architecture Diagram

*This appendix contains the high-level and detailed cloud architecture diagrams for [Cloud Initiative Name]. Diagrams should be prepared to a standard sufficient to support regulatory review.*

**A.1 High-Level Architecture Diagram**

[Insert or attach high-level cloud architecture diagram showing the relationship between [Organization Name]'s on-premises environment, the cloud environment, and external connections]

**A.2 Detailed Component Architecture Diagram**

[Insert or attach detailed component diagram showing individual cloud services, network segments, security controls, and data stores]

**A.3 Network Topology Diagram**

[Insert or attach network topology diagram showing connectivity between on-premises and cloud environments, including VPN / ExpressRoute / Direct Connect configurations]

---

### Appendix B — Data Flow Diagram

*This appendix contains data flow diagrams (DFDs) documenting how data moves between systems, including cross-border flows.*

**B.1 High-Level Data Flow Diagram**

[Insert or attach high-level DFD showing major data flows between [Organization Name] systems and the cloud environment]

**B.2 Detailed Data Flow Diagram**

[Insert or attach detailed DFD for each data category, identifying data classification, flow direction, encryption mechanisms, and storage locations]

**B.3 Cross-Border Data Flow Inventory**

| Flow ID | Data Category | Classification | Origin | Destination | Cross-Border | Legal Basis | Approval Status |
|---|---|---|---|---|---|---|---|
| DFD-001 | [Data Category] | [Classification] | [Origin Location] | [Destination Location] | [Yes / No] | [Legal basis or BNM approval] | [Approved / Pending] |

---

### Appendix C — CSP Certifications and Third-Party Assurance

*This appendix contains evidence of the CSP's third-party certifications and independent assurance reports that were used to support the control assessment.*

**C.1 CSP Certification Summary**

| Certification / Standard | Scope | Validity Period | Report Date | Issuing Auditor |
|---|---|---|---|---|
| ISO/IEC 27001 | [Scope] | [Valid From] to [Valid To] | [Date] | [Auditor] |
| SOC 2 Type II | [Scope — Trust Services Criteria covered] | [Period covered] | [Date] | [Auditor] |
| CSA STAR Level 2 | [Scope] | [Valid From] to [Valid To] | [Date] | [Auditor] |
| PCI DSS | [Scope] | [Valid From] to [Valid To] | [Date] | [Auditor / QSA] |
| [Other certification] | [Scope] | [Valid From] to [Valid To] | [Date] | [Auditor] |

**C.2 CSP Regulatory Compliance Declarations**

[List any CSP-provided declarations of compliance with specific regulations or BNM requirements, including dates and document references]

**C.3 Assessment Notes on CSP Certifications**

[Provide the assessor's analysis of the coverage and sufficiency of the CSP's certifications in relation to the risks assessed in this report, including any coverage gaps]

---

### Appendix D — Board / Senior Management Approval Evidence

*This appendix contains evidence of the internal approvals obtained prior to the BNM notification submission.*

**D.1 Board Risk Committee Resolution**

[Attach or reference: Relevant extract from Board Risk Committee minutes or resolution approving the cloud initiative and authorizing BNM notification]

**D.2 Technology Risk Committee Approval**

[Attach or reference: Relevant extract from Technology Risk Committee or IT Steering Committee minutes approving the cloud risk assessment findings]

**D.3 Risk Acceptance Confirmations**

[Attach or reference: Signed risk acceptance forms for all findings where the treatment decision is "Accept"]

---

### Appendix E — CSP Due Diligence Questionnaire and Responses

*This appendix contains the due diligence questionnaire submitted to [CSP Name] and the CSP's responses, which form part of the evidence base for this assessment.*

**E.1 Due Diligence Questionnaire — Summary**

| Section | Number of Questions | Full Compliance | Partial Compliance | Non-Compliance | Not Applicable |
|---|---|---|---|---|---|
| Data Security | [n] | [n] | [n] | [n] | [n] |
| Operational Resilience | [n] | [n] | [n] | [n] | [n] |
| Physical Security | [n] | [n] | [n] | [n] | [n] |
| Compliance and Audit | [n] | [n] | [n] | [n] | [n] |
| Exit and Portability | [n] | [n] | [n] | [n] | [n] |
| Incident Management | [n] | [n] | [n] | [n] | [n] |
| **Total** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** |

[Attach full questionnaire and CSP responses as a sub-appendix or separate document]

---

### Appendix F — Exit Strategy Assessment

*This appendix documents the assessment of [Organization Name]'s cloud exit strategy, including portability, data retrieval, and transition planning.*

**F.1 Exit Trigger Events**

[List the events or circumstances that would trigger activation of the cloud exit strategy, e.g., CSP insolvency, material service degradation, regulatory direction, strategic decision]

**F.2 Exit Strategy Overview**

| Exit Dimension | Assessment | Adequacy Rating |
|---|---|---|
| Data portability (technical feasibility of data extraction) | [Assessment notes] | [Adequate / Requires improvement] |
| Application portability (ease of migrating to alternative platform) | [Assessment notes] | [Adequate / Requires improvement] |
| Exit timeline (estimated time to complete orderly exit) | [Assessment notes, e.g., Estimated [X] months for full migration] | [Adequate / Requires improvement] |
| Alternative provider readiness (availability of comparable alternatives) | [Assessment notes] | [Adequate / Requires improvement] |
| Contractual exit provisions (notice period, data return, exit support) | [Assessment notes] | [Adequate / Requires improvement] |
| Cost of exit (financial implications of migration) | [Assessment notes] | [Adequate / Requires improvement] |
| Concentration risk (proportion of operations dependent on this CSP) | [Assessment notes] | [Adequate / Requires improvement] |

**F.3 Exit Plan Summary**

[Provide a summary of the documented exit plan, referencing the full exit plan document if maintained separately]

---

### Appendix G — Glossary of Terms

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and financial regulatory authority of Malaysia |
| **BRC** | Board Risk Committee |
| **CAIQ** | Consensus Assessments Initiative Questionnaire — a CSA tool for assessing cloud provider controls |
| **CCM** | Cloud Controls Matrix — a CSA framework for cloud security control assessment |
| **Cloud Service** | The provision of computing resources (infrastructure, platforms, or applications) over the internet on a pay-per-use or subscription basis |
| **CRO** | Chief Risk Officer |
| **CSA** | Cloud Security Alliance |
| **CSP** | Cloud Service Provider — an entity that provides cloud computing services |
| **DPIA** | Data Protection Impact Assessment — an assessment of risks to personal data processing |
| **DR** | Disaster Recovery |
| **FSA** | Financial Services Act 2013 |
| **IaaS** | Infrastructure as a Service — CSP provides virtualised compute, storage, and network |
| **IAM** | Identity and Access Management |
| **ISO** | International Organization for Standardization |
| **MFA** | Multi-Factor Authentication |
| **NIST** | National Institute of Standards and Technology |
| **PaaS** | Platform as a Service — CSP provides a managed platform for application development |
| **PDPA** | Personal Data Protection Act 2010 |
| **PII** | Personally Identifiable Information |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss period in a disaster |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore service after a disaster |
| **SaaS** | Software as a Service — CSP provides a fully managed application over the internet |
| **SOC 2** | Service Organisation Control 2 — an auditing standard for service organisation controls |
| **SLA** | Service Level Agreement |
| **TLS** | Transport Layer Security — a cryptographic protocol for securing data in transit |
| **VPN** | Virtual Private Network |

---

### Appendix H — Assessment Evidence Register

*This appendix lists all evidence items gathered during the assessment, providing an audit trail for regulatory inspection.*

| Evidence ID | Description | Source | Date Obtained | Format | Location / Reference |
|---|---|---|---|---|---|
| EV-001 | [e.g., CSP SOC 2 Type II Report] | [CSP Name] | [Date] | [PDF] | [File path / system reference] |
| EV-002 | [e.g., CSA CAIQ Response from CSP] | [CSP Name] | [Date] | [Excel] | [File path / system reference] |
| EV-003 | [e.g., ISO 27001 Certificate] | [CSP Name] | [Date] | [PDF] | [File path / system reference] |
| EV-004 | [e.g., Cloud Architecture Diagram v[x]] | IT Architecture Team | [Date] | [Visio / PDF] | [File path / system reference] |
| EV-005 | [e.g., Data Flow Diagram v[x]] | IT Architecture Team | [Date] | [Visio / PDF] | [File path / system reference] |
| EV-006 | [e.g., Cloud Service Agreement — [CSP Name]] | Legal | [Date] | [PDF] | [File path / system reference] |
| EV-007 | [e.g., Stakeholder interview notes — IT Architecture] | Technology Risk Team | [Date] | [Word] | [File path / system reference] |
| EV-008 | [e.g., Previous Cloud Risk Assessment dated [Date]] | Technology Risk Team | [Date] | [PDF] | [File path / system reference] |

---

*End of Document*

---

**Document Classification: Confidential**

*This document contains sensitive information relating to [Organization Name]'s technology risk posture and regulatory compliance position. It is intended solely for the use of authorized internal personnel and Bank Negara Malaysia. Any other use, disclosure, or reproduction, in whole or in part, without the express written consent of [Organization Name] is strictly prohibited.*

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Last Updated** | [Last Review Date] |
| **Next Review** | [Next Review Date] |
| **Classification** | Confidential |