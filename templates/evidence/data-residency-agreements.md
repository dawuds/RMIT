# Data Residency Agreements

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

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Cloud Service Model and Deployment Type](#5-cloud-service-model-and-deployment-type)
6. [Data Residency Requirements](#6-data-residency-requirements)
7. [Shared Responsibility Matrix](#7-shared-responsibility-matrix)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the formal Data Residency Agreement between **[Organization Name]** and its cloud service provider(s), confirming the geographic storage, processing, and transit boundaries applicable to all data classified as subject to Malaysian regulatory jurisdiction. This agreement provides verifiable evidence of compliance with **Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.52**, which mandates that financial institutions ensure customer data and critical operational data remain within approved jurisdictions unless explicit regulatory approval for cross-border transfer has been obtained.

This document also supports obligations under the **Personal Data Protection Act 2010 (PDPA)**, the **Financial Services Act 2013 (FSA)**, and applicable **National Cyber Security Agency (NACSA)** guidelines governing cloud adoption in critical national information infrastructure sectors.

### 1.2 Scope

*Define the boundaries of this agreement — which systems, data types, business units, and geographic regions are covered.*

This agreement applies to:

- **Organization:** [Organization Name] (hereinafter referred to as "the Institution")
- **Cloud Service Provider:** [Cloud Service Provider Name] (hereinafter referred to as "the Provider")
- **Agreement Period:** [Agreement Start Date] to [Agreement End Date]
- **In-scope Systems and Workloads:**
  - [System / Application Name 1]
  - [System / Application Name 2]
  - [System / Application Name 3]
- **In-scope Data Categories:**
  - Customer personal data
  - Financial transaction records
  - Authentication and access control data
  - Audit logs and compliance records
  - [Other data categories as applicable]
- **Excluded from Scope:** [List any systems, data types, or geographic regions explicitly excluded]

### 1.3 Regulatory Context

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | Clause 10.52 | Data must reside within Malaysia unless BNM approval obtained for offshore storage |
| PDPA 2010 | Section 129 | Prohibition on transfer of personal data outside Malaysia without adequate protection |
| FSA 2013 | Section 133 | BNM discretion to direct financial institutions on data management practices |
| NACSA Cloud Security Guidelines | Section [X] | Security baseline requirements for government-linked and critical sector cloud adoption |

---

## 2. Assessment Scope and Criteria

### 2.1 Assessment Overview

*Describe the scope of the assessment conducted to validate this data residency agreement, including the systems evaluated, time period, and the regulatory and internal criteria applied.*

This section documents the scope and criteria used to assess whether the cloud service provider's data residency commitments meet the Institution's regulatory and internal risk requirements prior to entering into or renewing this agreement.

### 2.2 In-Scope Environments

| Environment | Description | Criticality |
|---|---|---|
| Production | Live customer-facing and core banking workloads | Critical |
| Disaster Recovery | Secondary environment for BCP/DR failover | Critical |
| Staging / UAT | Pre-production testing environment | High |
| Development | Internal development workloads | Medium |
| [Other Environment] | [Description] | [Criticality] |

### 2.3 Assessment Criteria

*List the specific criteria against which the provider's data residency commitments were evaluated. Reference relevant regulatory thresholds and internal policy standards.*

The following criteria were applied during the assessment:

- **Regulatory Compliance:** Does the provider contractually commit to data storage within Malaysia (or an approved jurisdiction)?
- **Data Sovereignty:** Does the provider guarantee that data will not be subject to foreign legal jurisdiction without prior notification?
- **Subprocessor Controls:** Are all subprocessors and third-party data handlers subject to the same residency constraints?
- **Data-at-Rest Location:** Are all persistent storage volumes, backups, and snapshots located within the approved region?
- **Data-in-Transit Controls:** Are data transit routes confirmed to avoid routing through unapproved jurisdictions?
- **Audit and Attestation:** Can the provider provide independent third-party attestation (e.g., ISO 27001, SOC 2 Type II) confirming residency controls?
- **Incident Notification:** Does the provider commit to notifying the Institution of any data residency breach within [X] hours?

### 2.4 Assessment Criteria Summary Table

| Criterion | Regulatory Basis | Acceptable Threshold | Weight |
|---|---|---|---|
| Data storage jurisdiction | BNM RMiT 10.52 | Malaysia only (or BNM-approved) | Critical |
| Backup and DR location | BNM RMiT 10.52 | Same approved jurisdiction | Critical |
| Subprocessor residency | PDPA 2010 S.129 | Contractually bound to same jurisdiction | High |
| Data-in-transit routing | BNM RMiT 10.52 | No routing through unapproved jurisdictions | High |
| Third-party attestation | Internal Policy | Annual SOC 2 Type II or equivalent | Medium |
| Breach notification SLA | BNM RMiT | Within [X] hours of detection | High |

---

## 3. Methodology

### 3.1 Assessment Methodology

*Describe the approach, tools, and processes used to assess and validate the provider's data residency claims. Include both documentary review and technical validation steps.*

The Institution employed the following methodology to validate the Provider's data residency commitments:

#### 3.1.1 Documentary Review

- Review of the Provider's **Master Services Agreement (MSA)** and **Data Processing Addendum (DPA)**
- Review of the Provider's **Data Residency Addendum** or equivalent contractual exhibit
- Review of the Provider's **Subprocessor List** and associated residency declarations
- Review of independent audit reports (SOC 2 Type II, ISO 27017, ISO 27018) issued within the past 12 months
- Review of the Provider's **Privacy Policy** and **Government Access Policy**

#### 3.1.2 Technical Validation

- Configuration review of cloud region and availability zone settings
- Validation of storage bucket/volume region assignment via [cloud management console / API / third-party CSPM tool]
- Network traffic analysis to confirm data-in-transit routing paths
- Review of CDN and caching configurations to ensure no data caching outside approved regions

#### 3.1.3 Provider Attestation

- Formal written declaration from the Provider confirming data residency commitments (see **Appendix A**)
- Responses to the Institution's **Cloud Provider Security Questionnaire** (see **Appendix B**)

### 3.2 Assessment Team

| Role | Name | Department |
|---|---|---|
| Assessment Lead | [Name] | Cloud Architecture |
| IT Risk Reviewer | [Name] | Technology Risk Management |
| Legal / Compliance Reviewer | [Name] | Legal & Compliance |
| Information Security Reviewer | [Name] | Information Security |

### 3.3 Assessment Timeline

| Activity | Planned Date | Completed Date | Status |
|---|---|---|---|
| Initiation and scoping | [Date] | [Date] | [Status] |
| Documentary review | [Date] | [Date] | [Status] |
| Technical validation | [Date] | [Date] | [Status] |
| Provider questionnaire response | [Date] | [Date] | [Status] |
| Draft findings review | [Date] | [Date] | [Status] |
| Final agreement sign-off | [Date] | [Date] | [Status] |

---

## 4. Findings and Ratings

### 4.1 Summary of Findings

*Summarize the outcome of the assessment. Provide an overall rating and highlight any material gaps, exceptions, or conditions attached to this agreement.*

| Finding Category | Rating | Summary |
|---|---|---|
| Data-at-Rest Residency | [Compliant / Partial / Non-Compliant] | [Summary of finding] |
| Data-in-Transit Routing | [Compliant / Partial / Non-Compliant] | [Summary of finding] |
| Backup and DR Location | [Compliant / Partial / Non-Compliant] | [Summary of finding] |
| Subprocessor Controls | [Compliant / Partial / Non-Compliant] | [Summary of finding] |
| Third-Party Attestation | [Compliant / Partial / Non-Compliant] | [Summary of finding] |
| Breach Notification SLA | [Compliant / Partial / Non-Compliant] | [Summary of finding] |
| **Overall Assessment** | **[Rating]** | **[Overall summary]** |

**Rating Scale:**

| Rating | Definition |
|---|---|
| **Compliant** | Provider fully satisfies the requirement with documented evidence |
| **Partial** | Provider partially satisfies the requirement; compensating controls or conditions apply |
| **Non-Compliant** | Provider does not satisfy the requirement; agreement cannot proceed without remediation |

### 4.2 Detailed Findings

#### Finding 1: [Finding Title]

- **Category:** [Category]
- **Rating:** [Rating]
- **Description:** [Detailed description of the finding]
- **Evidence Reviewed:** [List documents, configurations, or attestations reviewed]
- **Risk Impact:** [Description of regulatory or operational risk if unaddressed]
- **Agreed Remediation / Condition:** [Action agreed with Provider, or "None required"]
- **Target Date:** [Date] | **Responsible Party:** [Provider / Institution / Both]

#### Finding 2: [Finding Title]

- **Category:** [Category]
- **Rating:** [Rating]
- **Description:** [Detailed description of the finding]
- **Evidence Reviewed:** [List documents, configurations, or attestations reviewed]
- **Risk Impact:** [Description of regulatory or operational risk if unaddressed]
- **Agreed Remediation / Condition:** [Action agreed with Provider, or "None required"]
- **Target Date:** [Date] | **Responsible Party:** [Provider / Institution / Both]

> *Add additional findings as required.*

### 4.3 Exceptions and Conditions

*Document any formally approved exceptions where full compliance is not achievable, including the compensating controls in place and the approval authority.*

| Exception ID | Description | Compensating Control | Approved By | Approval Date | Review Date |
|---|---|---|---|---|---|
| EXC-001 | [Description of exception] | [Compensating control] | [Approver] | [Date] | [Date] |

---

## 5. Cloud Service Model and Deployment Type

### 5.1 Cloud Service Model

*Identify the cloud service model(s) applicable to this agreement. The service model directly determines the scope of the shared responsibility for data residency controls.*

| Service Model | Applicable | Services Covered |
|---|---|---|
| Infrastructure as a Service (IaaS) | [Yes / No] | [e.g., Virtual machines, block storage, networking] |
| Platform as a Service (PaaS) | [Yes / No] | [e.g., Managed databases, container orchestration] |
| Software as a Service (SaaS) | [Yes / No] | [e.g., Productivity tools, business applications] |

### 5.2 Deployment Model

| Deployment Model | Selected | Justification |
|---|---|---|
| Public Cloud | [Yes / No] | [Justification] |
| Private Cloud | [Yes / No] | [Justification] |
| Hybrid Cloud | [Yes / No] | [Justification] |
| Community Cloud | [Yes / No] | [Justification] |

### 5.3 Provider and Region Details

| Parameter | Details |
|---|---|
| **Cloud Service Provider** | [Provider Name] |
| **Primary Region** | [Region Name and Code — e.g., Malaysia (ap-southeast-1)] |
| **Secondary / DR Region** | [Region Name and Code] |
| **Data Center Location(s)** | [Physical location(s) of data centers, if disclosed] |
| **Availability Zones** | [Availability zone identifiers] |
| **Dedicated vs. Shared Infrastructure** | [Dedicated / Shared / Hybrid] |
| **Service Tier** | [e.g., Enterprise, Government] |

### 5.4 Approved and Restricted Jurisdictions

*Explicitly define which jurisdictions are approved for data storage and processing, and which are explicitly prohibited.*

| Jurisdiction | Status | Regulatory Basis | Notes |
|---|---|---|---|
| Malaysia | **Approved — Primary** | BNM RMiT 10.52 | All production data |
| [Jurisdiction 2] | **Approved — Conditional** | [Basis] | [Conditions, e.g., DR only, BNM approval obtained] |
| [Jurisdiction 3] | **Restricted** | BNM RMiT / PDPA | No data permitted |
| [Jurisdiction 4] | **Prohibited** | [Basis] | No data permitted under any circumstance |

---

## 6. Data Residency Requirements

### 6.1 Residency Commitments

*Detail the specific data residency commitments made by the Provider under this agreement. These commitments form the core legally binding obligations.*

The Provider hereby confirms and commits to the following data residency obligations for the duration of this agreement:

1. **Primary Storage:** All data ingested, generated, or processed under this agreement shall be stored exclusively within **[Approved Region / Country]**.

2. **Backup and Snapshots:** All backup copies, automated snapshots, and archive data shall be stored within **[Approved Region / Country]** or **[Approved Secondary Region]** as designated in Section 5.3.

3. **Disaster Recovery:** In the event of a failover, data shall be replicated only to the approved secondary region identified in this agreement.

4. **Data-in-Transit:** Data transmitted between the Institution and the Provider, or between Provider services, shall not transit through networks or infrastructure located in **[Restricted / Prohibited Jurisdictions]** unless encrypted end-to-end with keys held exclusively by the Institution.

5. **Metadata and Telemetry:** Operational metadata, telemetry, and diagnostic data generated by the Institution's workloads shall be subject to the same residency restrictions as primary data.

6. **Cross-Border Transfer Prohibition:** No data covered by this agreement shall be transferred, replicated, or made accessible from outside the approved jurisdictions without prior written consent from the Institution and, where required, **prior approval from Bank Negara Malaysia**.

### 6.2 Data Classification and Residency Mapping

*Map each data classification tier to its permitted storage locations and handling requirements.*

| Data Classification | Description | Permitted Storage Location(s) | Cross-Border Transfer Allowed | Encryption Required |
|---|---|---|---|---|
| Restricted | Personal financial data, authentication credentials | Malaysia only | No | Yes — AES-256 at rest, TLS 1.2+ in transit |
| Confidential | Internal business data, audit logs | Malaysia only | With BNM approval | Yes |
| Internal | Non-sensitive operational data | Malaysia (preferred) | With CISO approval | Yes |
| Public | Publicly available information | No restriction | Yes | No requirement |

### 6.3 Data Lifecycle and Residency

| Data Lifecycle Stage | Residency Requirement | Responsible Party |
|---|---|---|
| Ingestion / Collection | Approved region only | Provider / Institution |
| Active processing | Approved region only | Provider |
| Storage (primary) | Approved region only | Provider |
| Backup and archival | Approved region(s) only | Provider |
| Data sharing / API | Within approved jurisdiction | Institution |
| Retention period | Per Institution's Data Retention Policy | Institution |
| Secure deletion / disposal | Within approved jurisdiction | Provider / Institution |

### 6.4 Notification and Breach Obligations

*Define the obligations of the Provider in the event that data residency controls are breached or at risk of being breached.*

In the event of any actual or suspected data residency breach, the Provider shall:

- Notify the Institution's designated contact within **[X] hours** of detection
- Provide a preliminary incident report within **[X] business days**
- Provide a full root cause analysis and remediation plan within **[X] calendar days**
- Cooperate fully with any regulatory investigation initiated by BNM or other competent authority

**Institution Escalation Contact:**

| Role | Name | Contact |
|---|---|---|
| Cloud Architecture Lead | [Name] | [Email / Phone] |
| Chief Information Security Officer | [Name] | [Email / Phone] |
| Data Protection Officer | [Name] | [Email / Phone] |

---

## 7. Shared Responsibility Matrix

### 7.1 Overview

*The shared responsibility model defines which security and compliance controls are owned by the Provider, the Institution, or both. This matrix is specific to data residency and must be reviewed whenever the service model or deployment configuration changes.*

The allocation of responsibilities is determined by the cloud service model as identified in Section 5.1. The matrix below reflects the agreed responsibilities for this engagement.

### 7.2 Responsibility Matrix

| Control Domain | Control Activity | Institution | Provider | Shared | Notes |
|---|---|---|---|---|---|
| **Data Residency Configuration** | Region selection and lock-down | R, A | C | | Institution must configure and validate |
| **Data Residency Configuration** | Enforcement of region restrictions via policy | C | R, A | | Provider enforces via platform controls |
| **Data Classification** | Classifying data prior to upload | R, A | | | Institution sole responsibility |
| **Encryption — At Rest** | Key management and rotation | R, A | C | | Institution manages keys (BYOK recommended) |
| **Encryption — At Rest** | Storage encryption implementation | | R, A | | Provider responsibility |
| **Encryption — In Transit** | TLS configuration and certificate management | R | R | A | Shared — both parties must enforce |
| **Backup Management** | Backup schedule and retention configuration | R, A | C | | |
| **Backup Management** | Backup storage within approved region | C | R, A | | Provider must enforce region compliance |
| **Subprocessor Management** | Disclosure of subprocessors | | R, A | | Provider must maintain and publish list |
| **Subprocessor Management** | Approval of subprocessors | R, A | C | | Institution must approve prior to onboarding |
| **Access Control** | Identity and access management for cloud console | R, A | C | | |
| **Access Control** | Physical access to data center infrastructure | | R, A | | Provider sole responsibility |
| **Audit and Logging** | Generation of access and activity logs | C | R, A | | |
| **Audit and Logging** | Retention and review of logs | R, A | C | | |
| **Incident Response** | Detection of data residency breach | C | R, A | | Provider detects; Institution responds |
| **Incident Response** | Notification and escalation | | R | A | Provider notifies per agreed SLA |
| **Compliance Attestation** | Provision of audit reports (SOC 2, ISO) | C | R, A | | Annual provision required |
| **Compliance Attestation** | Regulatory reporting to BNM | R, A | C | | Institution's regulatory obligation |
| **Contract Management** | Maintenance of this agreement | R, A | C | | Cloud Architecture Lead owns |
| **Periodic Review** | Quarterly / per-event residency review | R, A | C | | Per Section 8 |

**Legend:**

| Code | Meaning |
|---|---|
| **R** | Responsible — performs the activity |
| **A** | Accountable — owns the outcome |
| **C** | Consulted — provides input |
| **I** | Informed — notified of outcomes |

---

## 8. Roles and Responsibilities

### 8.1 Internal Roles

| Role | Responsibility |
|---|---|
| **Cloud Architecture Lead** | Document owner; leads assessment; liaises with Provider; ensures technical controls are implemented |
| **Chief Information Security Officer (CISO)** | Approves this agreement; escalation point for residency breaches; reports to Board |
| **Data Protection Officer (DPO)** | Ensures PDPA alignment; approves cross-border transfer decisions; manages regulatory notifications |
| **Chief Risk Officer (CRO)** | Reviews residency risk; approves exceptions; ensures risk register is updated |
| **Technology Risk Management** | Conducts independent review of findings; maintains risk register entries |
| **Legal and Compliance** | Reviews contractual commitments; ensures regulatory accuracy; approves agreement text |
| **Internal Audit** | Periodically audits adherence to this agreement; reports findings to Audit Committee |

### 8.2 RACI Table — Agreement Lifecycle

| Activity | Cloud Arch Lead | CISO | DPO | CRO | Tech Risk | Legal | Internal Audit |
|---|---|---|---|---|---|---|---|
| Initiate assessment | R, A | I | C | I | C | C | I |
| Conduct documentary review | R | I | C | I | C | A | I |
| Conduct technical validation | R, A | I | I | I | C | I | I |
| Draft agreement | R, A | C | C | C | C | C | I |
| Review and approve agreement | C | A | C | C | C | R | I |
| Sign agreement with Provider | C | R, A | C | I | I | C | I |
| Register in contract management system | R, A | I | I | I | I | C | I |
| Quarterly monitoring review | R, A | I | C | I | C | I | C |
| Handle residency breach | R | A | C | C | C | C | I |
| Annual renewal / re-assessment | R, A | C | C | C | C | C | I |
| Report to Board / Audit Committee | C | R | C | C | C | I | A |

---

## 9. Review and Approval

### 9.1 Review Triggers

This agreement shall be reviewed upon any of the following events, in addition to the scheduled quarterly review:

- Change in the cloud service provider, region, or data center
- Addition of new in-scope systems or data categories
- Material change to the Provider's terms of service, DPA, or subprocessor list
- Data residency breach or near-miss incident
- Change in applicable BNM, PDPA, or NACSA requirements
- Merger, acquisition, or corporate restructuring affecting either party
- Directive from BNM or other regulatory authority

### 9.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version — baseline data residency agreement |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 9.3 Approval Sign-Off

*All parties listed below must provide their approval before this agreement becomes effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Cloud Architecture Lead | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Data Protection Officer | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| Head of Legal and Compliance | [Name] | __________________ | [Date] |
| Authorized Signatory — Provider | [Name] | __________________ | [Date] |

---

## 10. References

| Reference | Document / Clause | Relevance |
|---|---|---|
| BNM RMiT | Clause 10.52 | Primary mandate for data residency within Malaysia |
| BNM RMiT | Clause 10.49–10.51 | Cloud risk management framework and due diligence |
| BNM RMiT | Clause 10.53–10.55 | Outsourcing and third-party risk management obligations |
| Personal Data Protection Act 2010 | Section 129 | Prohibition on transfer of personal data outside Malaysia |
| Financial Services Act 2013 | Section 133 | BNM authority to direct data management practices |
| NACSA Cloud Security Guidelines | [Section Reference] | Security baseline for critical sector cloud adoption |
| ISO/IEC 27017:2015 | All | Code of practice for information security controls for cloud services |
| ISO/IEC 27018:2019 | All | Code of practice for protection of personally identifiable information in public clouds |
| [Organization Name] Cloud Security Policy | [Section Reference] | Internal policy governing cloud adoption and data classification |
| [Organization Name] Data Classification Policy | [Section Reference] | Internal data classification framework |
| [Organization Name] Third-Party Risk Management Policy | [Section Reference] | Internal vendor risk assessment requirements |

---

## 11. Appendices

### Appendix A: Provider Data Residency Declaration

*Attach the formal written declaration from [Cloud Service Provider Name] confirming data residency commitments. This declaration must be signed by an authorized representative of the Provider and must reference the specific regions, services, and data categories covered.*

**[Attach Provider's signed Data Residency Declaration]**

---

### Appendix B: Cloud Provider Security Questionnaire — Responses

*Attach the completed security questionnaire submitted to the Provider as part of the assessment methodology described in Section 3.1.3, including the Provider's written responses.*

**[Attach completed Cloud Provider Security Questionnaire and responses]**

---

### Appendix C: Third-Party Audit Reports

*Attach the most recent independent audit reports provided by the Provider in support of the assessment criteria defined in Section 2.3. Reports should be dated within the past 12 months.*

| Report Type | Issuing Body | Report Period | Date Received |
|---|---|---|---|
| SOC 2 Type II | [Audit Firm] | [Period] | [Date] |
| ISO 27001 Certificate | [Certification Body] | [Valid Until] | [Date] |
| ISO 27017 Certificate | [Certification Body] | [Valid Until] | [Date] |
| ISO 27018 Certificate | [Certification Body] | [Valid Until] | [Date] |
| [Other Report] | [Issuing Body] | [Period] | [Date] |

---

### Appendix D: Subprocessor Register

*List all subprocessors engaged by the Provider who may access, store, or process data covered by this agreement. This register must be kept current and reviewed at each quarterly review.*

| Subprocessor Name | Role / Service Provided | Data Accessed | Location | Residency Compliant | Last Reviewed |
|---|---|---|---|---|---|
| [Subprocessor Name] | [e.g., CDN, monitoring] | [Data types] | [Country] | [Yes / No] | [Date] |
| [Subprocessor Name] | [e.g., Support ticketing] | [Data types] | [Country] | [Yes / No] | [Date] |

---

### Appendix E: BNM Approval for Cross-Border Transfer (if applicable)

*If any data covered by this agreement is approved for storage or processing outside Malaysia, attach the formal BNM approval letter and any conditions imposed.*

**[Attach BNM approval letter — or mark "Not Applicable" if all data remains within Malaysia]**

---

### Appendix F: Incident Notification Log

*Maintain a log of all data residency incidents, near-misses, or Provider notifications received during the term of this agreement.*

| Incident ID | Date Detected | Date Notified | Description | Impact | Resolution | Closed Date |
|---|---|---|---|---|---|---|
| INC-001 | [Date] | [Date] | [Description] | [Impact] | [Resolution] | [Date] |

---

*End of Document*

---

> **Document Control Notice:** This document contains confidential and regulatory-sensitive information. It must be stored in the Institution's approved document management system under access controls appropriate for **Confidential** classification. Printed copies must be marked **CONFIDENTIAL** and destroyed by cross-cut shredding when no longer required. Distribution is restricted to authorized personnel with a verified need-to-know.