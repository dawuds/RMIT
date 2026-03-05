# Data Location Mapping

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Framework](#2-regulatory-framework)
3. [Scope and Applicability](#3-scope-and-applicability)
4. [Data Classification Framework](#4-data-classification-framework)
5. [Data Location Mapping](#5-data-location-mapping)
6. [Step-by-Step Process Flow](#6-step-by-step-process-flow)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Tools and Systems Used](#8-tools-and-systems-used)
9. [Escalation Procedures](#9-escalation-procedures)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

This document establishes [Organization Name]'s authoritative mapping of data classifications to permissible storage and processing locations in accordance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document. It ensures that all data assets are identified, classified, and stored or processed only in locations that meet the applicable regulatory, contractual, and organizational security requirements.

This document supports [Organization Name]'s compliance with RMiT Clause 10.52, which mandates that financial institutions maintain awareness of the location of all critical data and ensure that data residency requirements are satisfied across on-premises, cloud, and third-party environments.

---

## 2. Regulatory Framework

| Regulation | Clause / Section | Obligation |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 10.52 | Maintain a mapping of data classifications to permissible storage and processing locations |
| BNM Risk Management in Technology (RMiT) | Clause 10.49 – 10.51 | Data classification policy and labelling requirements |
| Personal Data Protection Act 2010 (PDPA) | Section 129 | Prohibition on transfer of personal data outside Malaysia except under permitted conditions |
| BNM Guidelines on Outsourcing | Paragraph 10 | Oversight of data handled by third-party service providers |
| [Internal Data Governance Policy] | [Section Reference] | [Organization Name] internal data handling standards |

---

## 3. Scope and Applicability

*Describe the organizational scope, the types of data covered, and any explicit exclusions. Reference system inventories and data asset registers where applicable.*

### 3.1 In Scope

This document applies to:

- All data assets owned, collected, processed, or transmitted by [Organization Name]
- All business units, subsidiaries, and affiliates of [Organization Name] operating under its IT governance framework
- All environments including on-premises data centres, private cloud, public cloud, hybrid environments, and third-party outsourced platforms
- All data classifications as defined in [Organization Name]'s Data Classification Policy ([Document ID Reference])
- Structured and unstructured data in storage, transit, and active processing states

### 3.2 Out of Scope

The following are explicitly excluded from this document:

- [Specify exclusion, e.g., anonymised or fully aggregated data sets that cannot be re-identified]
- [Specify exclusion, e.g., temporary in-memory data with no persistence]
- [Specify exclusion, e.g., publicly available data with no confidentiality obligation]

### 3.3 Applicability Statement

| Entity / System | Applicable (Y/N) | Notes |
|---|---|---|
| [Core Banking System] | Y | [Notes] |
| [Internet Banking Platform] | Y | [Notes] |
| [HR Information System] | Y | [Notes] |
| [Third-Party Payment Gateway] | Y | [Notes] |
| [Development / Test Environments] | Y | [Notes – confirm data masking controls] |
| [Archival / Backup Systems] | Y | [Notes] |

---

## 4. Data Classification Framework

*Summarise the data classification tiers recognised by [Organization Name]. This section should align with the Data Classification Policy. Do not redefine classifications here; reference the source policy and provide a summary table only.*

The following classification tiers are defined in [Organization Name]'s Data Classification Policy ([Document ID Reference]) and are used as the basis for all location mappings in this document.

| Classification Level | Description | Examples |
|---|---|---|
| **Restricted** | Highest sensitivity. Unauthorised disclosure could cause severe harm to the organization, customers, or regulatory standing. | Customer PII, credentials, cryptographic keys, BNM regulatory reports |
| **Confidential** | Sensitive internal information requiring controlled access. | Internal financial data, audit reports, vendor contracts |
| **Internal** | Information intended for internal use only. Not for public release but not highly sensitive. | Internal policies, project plans, meeting minutes |
| **Public** | Information approved for public release. No confidentiality obligation. | Published annual reports, marketing material, public regulatory disclosures |

---

## 5. Data Location Mapping

*This is the core section of the document. For each data classification tier, specify every permissible and impermissible storage and processing location. Update this section whenever new systems, environments, or third parties are onboarded.*

### 5.1 Mapping Summary Table

*Provide a consolidated view of data classification versus permissible location types. Use Y (Permitted), N (Not Permitted), or C (Conditionally Permitted – see notes) in each cell.*

| Location Type | Restricted | Confidential | Internal | Public | Conditions / Notes |
|---|---|---|---|---|---|
| On-Premises Data Centre (Malaysia) | Y | Y | Y | Y | Must comply with physical security controls per [Policy Reference] |
| Private Cloud (Malaysia-hosted) | C | Y | Y | Y | Must have BNM-approved data residency confirmation |
| Public Cloud – Malaysia Region | C | C | Y | Y | Requires data residency attestation and encryption at rest/transit |
| Public Cloud – Non-Malaysia Region | N | C | Y | Y | Subject to PDPA Section 129 cross-border transfer approval and BNM notification |
| Third-Party Outsourced Platform (Malaysia) | C | C | Y | Y | Requires outsourcing agreement with data handling clauses |
| Third-Party Outsourced Platform (Overseas) | N | N | C | Y | Requires BNM approval; prohibited for Restricted data |
| Removable Media / Portable Devices | N | C | C | Y | Must be encrypted; subject to DLP controls |
| Employee Personal Devices (BYOD) | N | N | C | Y | Internal data on BYOD requires MDM enrolment |
| Development / Test Environments | N | N | Y | Y | Production data must be masked before use in non-prod |
| Disaster Recovery Site (Malaysia) | Y | Y | Y | Y | Must mirror primary site controls |
| Disaster Recovery Site (Overseas) | N | C | Y | Y | Subject to cross-border data transfer approval |

**Legend:** Y = Permitted | N = Not Permitted | C = Conditionally Permitted

---

### 5.2 Detailed Data Asset Location Register

*List individual data assets or categories, their classification, current storage location, processing location, and compliance status. This table should be maintained as a living register and updated at every review cycle or upon a triggering event.*

| Data Asset / Category | Classification | Storage Location | Processing Location | Data Owner | Cross-Border Transfer? | Approval Reference | Compliance Status |
|---|---|---|---|---|---|---|---|
| Customer PII (KYC Records) | Restricted | [System / Location Name] | [System / Location Name] | [Data Owner] | N | N/A | [Compliant / Non-Compliant / Under Review] |
| Core Banking Transaction Data | Restricted | [System / Location Name] | [System / Location Name] | [Data Owner] | N | N/A | [Compliant / Non-Compliant / Under Review] |
| Card Holder Data (PAN, CVV) | Restricted | [System / Location Name] | [System / Location Name] | [Data Owner] | N | N/A | [Compliant / Non-Compliant / Under Review] |
| Employee Personal Data | Confidential | [System / Location Name] | [System / Location Name] | [Data Owner] | [Y/N] | [Reference if Y] | [Compliant / Non-Compliant / Under Review] |
| Internal Audit Reports | Confidential | [System / Location Name] | [System / Location Name] | [Data Owner] | N | N/A | [Compliant / Non-Compliant / Under Review] |
| Vendor Contracts | Confidential | [System / Location Name] | [System / Location Name] | [Data Owner] | N | N/A | [Compliant / Non-Compliant / Under Review] |
| Internal Policies and Procedures | Internal | [System / Location Name] | [System / Location Name] | [Data Owner] | [Y/N] | [Reference if Y] | [Compliant / Non-Compliant / Under Review] |
| Marketing Materials | Public | [System / Location Name] | [System / Location Name] | [Data Owner] | Y | N/A | [Compliant / Non-Compliant / Under Review] |
| [Add additional rows as required] | | | | | | | |

---

### 5.3 Cross-Border Data Transfer Register

*List all approved cross-border data transfers separately to facilitate regulatory reporting and BNM notification obligations.*

| Transfer ID | Data Category | Classification | Source Country | Destination Country | Receiving Entity | Legal Basis | BNM Approval Date | PDPA Compliance Mechanism | Review Date |
|---|---|---|---|---|---|---|---|---|---|
| [XBT-001] | [Data Category] | [Classification] | Malaysia | [Country] | [Entity Name] | [Contractual Necessity / Consent / Other] | [Date or N/A] | [Adequacy / Standard Clauses / Consent] | [Date] |
| [Add rows as required] | | | | | | | | | |

---

## 6. Step-by-Step Process Flow

*Describe the end-to-end process for identifying, classifying, and mapping data to permissible locations. This section should be usable as an operational guide by data stewards and IT teams during system onboarding or periodic review.*

### 6.1 Process Overview

The Data Location Mapping process is triggered by the following events:

- **Scheduled Review:** Quarterly, as specified in Section 10
- **New System / Application Onboarding:** Prior to go-live
- **Change in Data Classification:** Following reclassification of a data asset
- **New Outsourcing Arrangement:** Prior to data transfer to a third party
- **Regulatory Change:** Upon issuance of new or amended BNM guidance

---

### 6.2 Process Steps

**Step 1: Data Asset Identification**

- The relevant Data Steward inventories all data assets within their domain using the [Data Asset Register / System Name].
- New data assets identified outside the existing register are logged using [Form / Ticket Reference].
- Confirm system-of-record for each data asset.

**Step 2: Data Classification Verification**

- Verify the current classification of each data asset against the Data Classification Policy ([Document ID Reference]).
- Where classification is ambiguous, escalate to the Data Governance Committee ([DGC]) for determination.
- Document the classification rationale if not already recorded.

**Step 3: Location Identification**

- For each data asset, identify:
  - Primary storage location (system name, hosting environment, jurisdiction)
  - Backup and DR storage location
  - Processing location(s) (if different from storage)
  - Any third-party locations where data is transmitted or accessible

**Step 4: Permissibility Assessment**

- Cross-reference each identified location against the Mapping Summary Table in Section 5.1.
- For conditionally permitted locations, verify that all conditions and approvals are in place.
- Flag any location that is Not Permitted or where conditional approvals are absent.

**Step 5: Gap Identification and Remediation**

- Document all gaps where data is stored or processed in a non-permissible location.
- Raise a remediation action in [IT Risk Register / GRC Tool Name] with a target remediation date.
- Escalate high-risk gaps to the [Chief Information Security Officer / IT Risk Committee] per the escalation procedures in Section 9.

**Step 6: Cross-Border Transfer Review**

- Identify all instances where data crosses national borders.
- Confirm that each transfer has a valid legal basis under PDPA Section 129.
- Verify BNM notification or approval status where required.
- Update the Cross-Border Data Transfer Register (Section 5.3).

**Step 7: Register Update**

- Update the Detailed Data Asset Location Register (Section 5.2) to reflect confirmed locations and compliance status.
- Record the date of review, reviewer name, and any changes made in the Version History (Section 10.1).

**Step 8: Sign-Off and Filing**

- Obtain sign-off from the Document Owner and relevant approvers per Section 10.2.
- File the approved version in [Document Management System] under the path [Filing Path].
- Notify the Compliance / Regulatory Reporting team of any material changes that require BNM reporting.

---

### 6.3 Process Flow Diagram

*Insert a process flow diagram below. The diagram should illustrate the eight steps above, decision points (e.g., "Permitted Location? Y/N"), and escalation paths.*

> **[Insert Process Flow Diagram Here]**
>
> *Recommended tool: Draw.io, Lucidchart, or equivalent. Export as PNG and embed, or attach as Appendix A.*

---

## 7. Roles and Responsibilities

*Assign clear accountability for each activity in the Data Location Mapping process using the RACI framework. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 7.1 RACI Matrix

| Activity | [Relevant Dept Head] (Document Owner) | Data Steward | IT / Infrastructure Team | Information Security | Data Protection Officer | Compliance / Legal | Chief Information Security Officer | Data Governance Committee |
|---|---|---|---|---|---|---|---|---|
| Maintain Data Classification Policy | A | C | I | R | C | C | C | A |
| Identify and inventory data assets | C | R | C | C | I | I | I | A |
| Classify data assets | A | R | I | C | C | C | I | C |
| Identify storage and processing locations | I | R | R | C | I | I | I | I |
| Assess permissibility of locations | A | R | C | R | C | C | I | C |
| Identify and log gaps / non-compliance | I | R | R | R | I | I | A | C |
| Approve cross-border data transfers | A | I | I | C | R | R | C | C |
| Remediate non-compliant locations | I | C | R | R | I | I | A | I |
| Review and approve this document | A | I | I | C | C | C | C | R |
| Report material changes to BNM | I | I | I | C | C | R | A | I |
| Escalate high-risk gaps | C | R | R | R | I | C | A | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

### 7.2 Role Descriptions

| Role | Responsibilities in Context of This Document |
|---|---|
| **[Relevant Department Head] (Document Owner)** | Overall accountability for the accuracy and currency of this document. Approves updates and ensures quarterly review is completed. |
| **Data Steward** | Operational responsibility for identifying, classifying, and mapping data assets within their assigned domain. |
| **IT / Infrastructure Team** | Provides technical details of storage and processing locations, system architecture, and hosting environments. |
| **Information Security** | Assesses the security controls at each location; advises on permissibility of conditional locations. |
| **Data Protection Officer (DPO)** | Advises on PDPA compliance, cross-border transfer legality, and data subject rights implications. |
| **Compliance / Legal** | Reviews regulatory obligations and provides guidance on BNM notification requirements. |
| **Chief Information Security Officer (CISO)** | Escalation point for high-risk gaps; accountable for remediation of critical non-compliance. |
| **Data Governance Committee (DGC)** | Governance body that reviews and ratifies this document; resolves classification disputes. |

---

## 8. Tools and Systems Used

*List the tools, platforms, and systems that support the data location mapping process. Include both technical inventory tools and governance/GRC platforms.*

| Tool / System | Purpose | Owner / Administrator | Access Control |
|---|---|---|---|
| [Data Asset Register / CMDB Name] | Primary inventory of data assets and associated metadata | [IT Asset Management Team] | [Role-based; restricted to Data Stewards and above] |
| [GRC Platform Name, e.g., ServiceNow, MetricStream] | Risk and gap tracking; remediation action management | [Risk Management Team] | [Role-based] |
| [Document Management System, e.g., SharePoint, Confluence] | Storage and version control for this document | [IT / Compliance Team] | [Confidential; restricted distribution] |
| [Cloud Security Posture Management (CSPM) Tool] | Automated detection of data in non-compliant cloud locations | [Information Security Team] | [Restricted to InfoSec] |
| [Data Loss Prevention (DLP) Platform] | Monitoring and enforcement of data handling policies | [Information Security Team] | [Restricted to InfoSec] |
| [Network / Infrastructure Topology Tool] | Identification of data flows and processing locations | [IT Infrastructure Team] | [Restricted to IT] |
| [Third-Party Risk Management System] | Tracking of vendor data handling locations and approvals | [Procurement / Compliance] | [Role-based] |
| [Encryption Key Management System] | Management of keys used to encrypt data in conditional locations | [Information Security Team] | [Highly restricted] |

---

## 9. Escalation Procedures

*Define the escalation path when non-compliant data locations are identified, when a triggering event occurs, or when remediation cannot be completed within required timeframes.*

### 9.1 Escalation Triggers

Escalation is required in the following situations:

- A data asset classified as **Restricted** is identified in a Not Permitted or unapproved location
- A cross-border data transfer is identified with no valid legal basis or BNM approval
- Remediation of a non-compliant location cannot be completed within [30 / 60] calendar days
- A new outsourcing arrangement involves data transfer prior to completion of this mapping exercise
- A regulatory change materially affects the permissibility of an existing data location

### 9.2 Escalation Matrix

| Severity | Trigger Condition | First Escalation Point | Second Escalation Point | Required Response Time | Notification Required |
|---|---|---|---|---|---|
| **Critical** | Restricted data in a non-permitted location; active cross-border transfer without approval | CISO | CEO / Board Risk Committee | Immediate (within 4 hours) | BNM notification may be required – refer to Compliance |
| **High** | Confidential data in a non-permitted location; remediation overdue > 30 days | [Relevant Department Head] | CISO | Within 24 hours | Compliance team to assess BNM notification requirement |
| **Medium** | Conditional location lacking documented approval; new system onboarded without mapping | Data Steward | [Relevant Department Head] | Within 5 business days | Internal notification to Data Governance Committee |
| **Low** | Documentation gap (location known and compliant but not yet recorded in register) | Data Steward | N/A | Within 10 business days | None required |

### 9.3 BNM Notification Obligations

Where a non-compliant data location is assessed as a reportable incident under BNM RMiT or the BNM Policy on Reporting of Incidents, the Compliance / Legal team must:

1. Assess whether the incident meets BNM's materiality threshold for reporting.
2. Prepare the required notification using BNM's prescribed format.
3. Submit notification within the timeframe mandated by BNM (refer to RMiT Clause [Reference] and BNM Incident Reporting Guidelines).
4. Retain a copy of the notification and BNM's acknowledgement in [Document Management System].

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial document creation |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of changes] |

### 10.2 Review Schedule

| Review Type | Trigger | Responsible Party |
|---|---|---|
| Scheduled Review | Quarterly (every 3 months from Effective Date) | [Relevant Department Head] |
| Event-Driven Review | New system onboarding, new outsourcing arrangement, data reclassification, regulatory change | Data Steward (initiates); [Relevant Department Head] (approves) |
| Post-Incident Review | Following any data location incident or BNM inquiry | CISO (leads); [Relevant Department Head] (approves) |

### 10.3 Approval Sign-Off

*All approvers must sign and date below upon each review cycle. Electronic signatures via [DocuSign / SharePoint Approval Workflow] are accepted.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner ([Relevant Department Head]) | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Data Protection Officer | [Name] | [Signature] | [Date] |
| Head of Compliance | [Name] | [Signature] | [Date] |
| Data Governance Committee Chairperson | [Name] | [Signature] | [Date] |

---

## 11. References

| Reference | Description |
|---|---|
| BNM Risk Management in Technology (RMiT), Clause 10.52 | Primary regulatory mandate for data location mapping |
| BNM Risk Management in Technology (RMiT), Clauses 10.49–10.51 | Data classification requirements underlying location mapping |
| Personal Data Protection Act 2010 (PDPA), Section 129 | Restrictions on cross-border transfer of personal data |
| BNM Guidelines on Outsourcing (Revised) | Data handling obligations when engaging third-party service providers |
| BNM Policy on Reporting of Incidents | Notification obligations for data incidents to BNM |
| [Organization Name] Data Classification Policy ([Document ID]) | Internal policy defining classification tiers referenced in this document |
| [Organization Name] IT Risk Management Framework ([Document ID]) | Overarching framework within which this document operates |
| [Organization Name] Third-Party Risk Management Policy ([Document ID]) | Governance of vendor data handling |
| [Organization Name] Cloud Security Policy ([Document ID]) | Controls governing permissible use of cloud environments |
| [Organization Name] Data Retention and Disposal Policy ([Document ID]) | Retention periods and disposal requirements by classification |

---

## 12. Appendices

### Appendix A – Process Flow Diagram

*Insert the end-to-end Data Location Mapping process flow diagram referenced in Section 6.3. Diagram should cover: triggering events → data asset identification → classification verification → location identification → permissibility assessment → gap logging → remediation → sign-off.*

> **[Insert Diagram Here]**

---

### Appendix B – Approved Cloud Service Provider and Hosting Environment Register

*List all cloud service providers and third-party hosting environments approved for use by [Organization Name], including their jurisdiction, relevant certifications, and data residency guarantees.*

| Provider Name | Service Type | Hosting Jurisdiction | Data Residency Guarantee | Security Certifications | Approval Date | Approval Reference |
|---|---|---|---|---|---|---|
| [Provider Name] | [IaaS / PaaS / SaaS] | [Country / Region] | [Y/N – attach evidence] | [ISO 27001, SOC 2, etc.] | [Date] | [Reference] |
| [Add rows as required] | | | | | | |

---

### Appendix C – Approved Cross-Border Data Transfer Mechanisms

*Summarise the legal mechanisms approved by [Organization Name]'s Legal and Compliance team for cross-border data transfers under PDPA Section 129.*

| Mechanism | Description | Applicable Scenarios | Approving Authority |
|---|---|---|---|
| Data User's Code of Practice | Transfer pursuant to an approved code of practice | [Scenario] | PDPC / BNM |
| Contract (Standard Contractual Clauses) | Transfer pursuant to a contractual arrangement providing equivalent protection | [Scenario] | [Organization Name] Legal |
| Explicit Consent | Data subject has given express consent to the transfer | [Scenario] | DPO |
| Necessity for Contract Performance | Transfer necessary to perform a contract with the data subject | [Scenario] | DPO / Legal |
| [Other Mechanism] | [Description] | [Scenario] | [Approving Authority] |

---

### Appendix D – Glossary

| Term | Definition |
|---|---|
| Data Asset | Any data or collection of data that has value to [Organization Name], regardless of format or medium |
| Data Classification | The process of categorising data based on its sensitivity, regulatory obligation, and the impact of unauthorised disclosure |
| Data Location | The physical or logical environment where data is stored or processed, including jurisdiction |
| Data Residency | The requirement that data physically resides within a specified geographic boundary |
| Cross-Border Transfer | Any transfer of data from Malaysia to a location outside Malaysia, including cloud replication |
| Restricted Data | The highest classification tier; data whose unauthorised disclosure would cause severe harm |
| Conditional Location | A storage or processing location that is permissible only when specific controls or approvals are in place |
| RACI | Responsible, Accountable, Consulted, Informed – a responsibility assignment framework |
| DPO | Data Protection Officer |
| CISO | Chief Information Security Officer |
| DGC | Data Governance Committee |
| RMiT | Risk Management in Technology – BNM Policy Document |
| PDPA | Personal Data Protection Act 2010 (Malaysia) |
| BNM | Bank Negara Malaysia |

---

### Appendix E – Change Request Log

*Record all change requests submitted against this document between formal review cycles.*

| Change Request ID | Date Submitted | Submitted By | Description of Requested Change | Status | Outcome |
|---|---|---|---|---|---|
| [CR-001] | [Date] | [Name] | [Description] | [Pending / Approved / Rejected] | [Outcome] |
| [Add rows as required] | | | | | |

---

*End of Document*

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised reproduction, distribution, or disclosure is prohibited. For queries regarding this document, contact [Document Owner Name] at [Contact Details].*