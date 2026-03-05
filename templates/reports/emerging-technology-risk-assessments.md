# Emerging Technology Risk Assessment Report

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
| **RMiT Reference** | Clause 17.5 |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It contains proprietary risk assessment information relating to emerging technology adoption within [Organization Name]. Distribution is restricted to authorized personnel on a need-to-know basis. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may be subject to disciplinary or legal action.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Framework and Obligations](#2-regulatory-framework-and-obligations)
3. [Emerging Technology Inventory and Asset Identification](#3-emerging-technology-inventory-and-asset-identification)
4. [Classification and Categorisation](#4-classification-and-categorisation)
5. [Ownership, Custodianship, and Accountability](#5-ownership-custodianship-and-accountability)
6. [Technology Lifecycle Stage and Status](#6-technology-lifecycle-stage-and-status)
7. [Risk Assessment Methodology](#7-risk-assessment-methodology)
8. [Detailed Risk Assessment by Technology](#8-detailed-risk-assessment-by-technology)
9. [Control Environment Assessment](#9-control-environment-assessment)
10. [Residual Risk and Treatment Plans](#10-residual-risk-and-treatment-plans)
11. [Horizon Scanning and Emerging Threat Intelligence](#11-horizon-scanning-and-emerging-threat-intelligence)
12. [Regulatory Compliance Considerations](#12-regulatory-compliance-considerations)
13. [Review History and Monitoring Log](#13-review-history-and-monitoring-log)
14. [Roles and Responsibilities](#14-roles-and-responsibilities)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section articulates the specific objectives of this risk assessment report, its regulatory basis, and the decisions it is intended to inform. Authors should clearly state whether this assessment supports an adoption decision, ongoing monitoring, or periodic review.*

This Emerging Technology Risk Assessment Report has been prepared in accordance with **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 17.5**, which requires financial institutions to conduct structured risk assessments for emerging technologies under consideration or currently deployed within the institution's operational environment.

The primary purposes of this document are to:

- Provide a structured, evidence-based assessment of risks associated with emerging technologies being evaluated, piloted, or operationally deployed by [Organization Name].
- Enable informed decision-making by senior management and the Board regarding the adoption, continuation, or decommissioning of emerging technologies.
- Demonstrate ongoing regulatory compliance with BNM RMiT requirements governing the management of technology risk arising from emerging and novel technologies.
- Establish and maintain a documented risk posture for each assessed technology, supporting the institution's overall Technology Risk Management Framework (TRMF).
- Facilitate continuous monitoring and quarterly review of emerging technology risk exposure across the institution.

### 1.2 Scope

*Define the boundaries of this assessment clearly. Specify which business units, systems, geographies, and technology types are in scope and explicitly note any exclusions. This prevents scope ambiguity during audit or supervisory review.*

This assessment covers all emerging technologies that meet one or more of the following criteria within [Organization Name]:

- Technologies currently under active evaluation, proof-of-concept (PoC), or pilot deployment.
- Technologies that have been adopted within the preceding twelve (12) months and have not yet completed their first full annual risk review cycle.
- Technologies assessed by the Technology Risk function as presenting a novel, material, or evolving risk profile warranting enhanced scrutiny.
- Technologies identified through the institution's horizon scanning process as posing significant potential impact to the institution's operations, customers, or regulatory standing within a three (3) to five (5) year planning horizon.

**In Scope:**

| Scope Dimension | Details |
|---|---|
| **Business Units** | [List all in-scope business units, e.g., Retail Banking, Digital Channels, Operations, IT Infrastructure] |
| **Technology Types** | [e.g., Artificial Intelligence / Machine Learning, Cloud-Native Services, Distributed Ledger Technology, Open Banking APIs, Quantum Computing, Robotic Process Automation, Biometric Authentication] |
| **Geographies** | [e.g., Malaysia — all branches and subsidiaries operating under BNM jurisdiction] |
| **Environments** | [e.g., Production, Pre-Production, Pilot, PoC / Sandbox] |
| **Assessment Period** | [Start Date] to [End Date] |

**Out of Scope:**

- Legacy technologies undergoing standard change management (unless incorporating emerging components).
- Technologies assessed and closed under prior review cycles with no material change in risk profile.
- [Any other specific exclusions relevant to this assessment cycle]

### 1.3 Applicable Standards and Frameworks

*List all internal and external frameworks that govern this assessment. Keeping this section current ensures that the document remains aligned with the institution's policy hierarchy.*

This assessment is conducted in accordance with:

- BNM Risk Management in Technology (RMiT) Policy Document, Clause 17.5
- [Organization Name] Technology Risk Management Framework (TRMF) v[X.X]
- [Organization Name] Emerging Technology Policy v[X.X]
- [Organization Name] Information Security Policy v[X.X]
- ISO/IEC 27001:2022 — Information Security Management Systems
- NIST Cybersecurity Framework (CSF) v2.0
- [Any other applicable internal or external standards]

---

## 2. Regulatory Framework and Obligations

### 2.1 BNM RMiT Clause 17.5 Overview

*Summarise the specific regulatory requirements that this document fulfills. Include direct references to policy text where permissible, and cross-reference with any BNM guidance notes or supervisory expectations issued subsequently. This section is frequently examined during BNM technology risk reviews.*

Bank Negara Malaysia's RMiT Policy Document establishes obligations for financial institutions to proactively identify, assess, and manage risks arising from the adoption and use of emerging technologies. Clause 17.5 specifically requires that:

- Financial institutions maintain a structured process for the identification and ongoing assessment of emerging technology risks.
- Risk assessments consider the potential impact on the institution's operations, customers, and systemic stability.
- Documented assessments are subject to review by the Board or a delegated Board-level committee.
- Findings are escalated appropriately and integrated into the institution's broader technology risk governance framework.

### 2.2 Regulatory Obligations Summary

*Use this table to map each regulatory obligation to the corresponding section of this document and the accountable internal owner. This mapping is essential for demonstrating compliance coverage during supervisory examinations.*

| Obligation Reference | Description | Document Section | Accountable Owner | Status |
|---|---|---|---|---|
| RMiT Clause 17.5(a) | Identification of emerging technologies in use or under evaluation | Section 3 | Head of Technology Risk | [Compliant / In Progress / Gap] |
| RMiT Clause 17.5(b) | Risk assessment of identified emerging technologies | Sections 7, 8 | Head of Technology Risk | [Compliant / In Progress / Gap] |
| RMiT Clause 17.5(c) | Control environment assessment | Section 9 | Chief Information Security Officer | [Compliant / In Progress / Gap] |
| RMiT Clause 17.5(d) | Residual risk determination and treatment | Section 10 | Head of Technology Risk | [Compliant / In Progress / Gap] |
| RMiT Clause 17.5(e) | Board / Senior Management reporting | Sections 14, 15 | Chief Risk Officer | [Compliant / In Progress / Gap] |
| RMiT Clause 17.5(f) | Continuous monitoring and periodic review | Sections 11, 13 | Technology Risk Team | [Compliant / In Progress / Gap] |

### 2.3 Interaction with Other Regulatory Requirements

*Note any intersections with other BNM policy documents or external regulations that are relevant to emerging technology risk, such as PDPA obligations for AI systems processing personal data, or SCxSC / Securities Commission requirements for FinTech activities.*

This assessment intersects with the following additional regulatory and compliance obligations:

- **Personal Data Protection Act 2010 (PDPA):** Emerging technologies involving the processing of personal data (e.g., AI/ML models, biometric systems) must be assessed for compliance with PDPA obligations. Refer to the institution's PDPA Compliance Framework.
- **BNM Policy on Outsourcing:** Cloud computing and SaaS technologies assessed herein may engage third-party service providers and are subject to the institution's outsourcing risk management requirements.
- **BNM Operational Risk Policy:** Technology failures arising from emerging technology adoption are captured within the institution's operational risk capital calculations.
- **Securities Commission Digital Asset Guidelines:** [If applicable — complete as relevant.]
- **NACSA National Cybersecurity Policy:** Assessments of technologies with potential cybersecurity implications are aligned with NACSA's national-level guidelines.

---

## 3. Emerging Technology Inventory and Asset Identification

### 3.1 Inventory Overview

*This section serves as the master register of all emerging technologies in scope for this assessment. It must be maintained as a living document and reconciled against the institution's broader IT Asset Register. Each entry should have a unique identifier to enable traceability throughout the document.*

*Complete one row per emerging technology. Ensure that the Technology ID is consistent with the institution's asset management system to enable cross-referencing with the IT Asset Register, vendor contracts, and change management records.*

The following table presents the complete inventory of emerging technologies identified as in scope for this assessment cycle. This inventory has been compiled through a combination of technology horizon scanning, business unit submissions, vendor engagement records, and review of the institution's IT Asset Register.

**Assessment Period:** [Start Date] to [End Date]
**Total Technologies Identified:** [Number]
**Total Technologies In-Scope for Full Assessment:** [Number]

### 3.2 Emerging Technology Register

| Technology ID | Technology Name | Technology Description | Business Unit / Function | Primary Use Case | Environment | Date First Identified | Identification Source |
|---|---|---|---|---|---|---|---|
| ET-001 | [Technology Name] | [Brief description of the technology and its function] | [Business Unit] | [Primary use case, e.g., customer identity verification, fraud detection, process automation] | [Production / Pre-Production / Pilot / PoC] | [DD/MM/YYYY] | [Horizon Scan / Business Unit Submission / Vendor Engagement / IT Asset Review] |
| ET-002 | [Technology Name] | [Brief description] | [Business Unit] | [Primary use case] | [Environment] | [DD/MM/YYYY] | [Source] |
| ET-003 | [Technology Name] | [Brief description] | [Business Unit] | [Primary use case] | [Environment] | [DD/MM/YYYY] | [Source] |
| ET-004 | [Technology Name] | [Brief description] | [Business Unit] | [Primary use case] | [Environment] | [DD/MM/YYYY] | [Source] |
| ET-005 | [Technology Name] | [Brief description] | [Business Unit] | [Primary use case] | [Environment] | [DD/MM/YYYY] | [Source] |

*Add additional rows as required. The register should be exhaustive. If a technology has been reviewed and closed in a prior cycle with no material change, reference the prior assessment report ID rather than creating a new full entry.*

### 3.3 Technology Identification Methodology

*Document the processes used to identify emerging technologies within the institution. This demonstrates to regulators and auditors that the identification process is systematic and comprehensive rather than ad hoc.*

Emerging technologies within [Organization Name] are identified through the following systematic processes:

**3.3.1 Horizon Scanning Programme**

The Technology Risk function conducts structured horizon scanning on a [monthly / quarterly] basis to identify emerging technology trends and assess their potential relevance and risk implications for the institution. Sources include:

- BNM and NACSA publications, advisories, and consultation papers.
- Financial Services Information Sharing and Analysis Center (FS-ISAC) intelligence.
- Industry analyst reports (e.g., Gartner Hype Cycle, Forrester Wave).
- Academic and research institution publications.
- Peer institution benchmarking through industry working groups.
- Vendor briefings and technology partnership engagements.

**3.3.2 Business Unit Submission Process**

Business units are required to submit an Emerging Technology Notification Form to the Technology Risk function at the earliest stage of evaluation of any new technology. The notification threshold is triggered by:

- Commencement of any vendor demonstration or proof-of-concept activity.
- Inclusion of a new technology in a project business case or feasibility study.
- Procurement of any technology product or service not previously used by the institution.

**3.3.3 Change Management Integration**

The institution's Change Advisory Board (CAB) process includes a screening step to identify whether proposed changes involve emerging or novel technologies, triggering referral to the Technology Risk function for assessment.

---

## 4. Classification and Categorisation

### 4.1 Classification Framework

*This section applies the institution's technology classification scheme to each identified emerging technology. Consistent classification enables risk-proportionate oversight and ensures that the most material technologies receive appropriate scrutiny. Classification decisions must be documented with supporting rationale.*

[Organization Name] classifies emerging technologies across two primary dimensions: **Technology Category** (the type of technology) and **Risk Classification** (the assessed inherent risk level). Classification is performed by the Technology Risk function in consultation with the relevant business unit and, where appropriate, the Information Security function.

### 4.2 Technology Category Definitions

*Use this taxonomy consistently across all risk assessments and internal reporting to enable trend analysis and portfolio-level risk aggregation.*

| Category Code | Category Name | Description | Examples |
|---|---|---|---|
| TC-01 | Artificial Intelligence & Machine Learning | Systems that use algorithms to simulate human intelligence, learn from data, or make automated decisions | Large Language Models, Computer Vision, Predictive Analytics, Natural Language Processing |
| TC-02 | Cloud & Edge Computing | Infrastructure and platforms delivered as a service, including distributed edge architectures | Public Cloud (IaaS/PaaS/SaaS), Hybrid Cloud, Edge Computing, Serverless Computing |
| TC-03 | Distributed Ledger Technology | Technologies enabling distributed, decentralised record-keeping without a central authority | Blockchain, Smart Contracts, Tokenisation, Central Bank Digital Currency (CBDC) infrastructure |
| TC-04 | Open Banking & API Ecosystems | Technologies enabling secure data sharing and interoperability between financial institutions and third parties | Open APIs, Banking-as-a-Service (BaaS), Payment Initiation Services |
| TC-05 | Biometric & Identity Technologies | Technologies for authenticating or identifying individuals using physiological or behavioural characteristics | Facial Recognition, Voice Authentication, Behavioural Biometrics, Digital Identity |
| TC-06 | Robotic Process Automation | Software robots that automate repetitive, rule-based processes | RPA, Intelligent Document Processing, Hyperautomation |
| TC-07 | Quantum Technologies | Technologies leveraging quantum mechanical phenomena for computation, communication, or sensing | Quantum Computing, Quantum Key Distribution, Post-Quantum Cryptography |
| TC-08 | Internet of Things | Networks of connected physical devices with embedded sensors and software | IoT Devices, Smart Branches, Connected ATMs |
| TC-09 | Other Emerging Technology | Emerging technologies not captured by the above categories | [To be defined as identified] |

### 4.3 Risk Classification Criteria

*The inherent risk classification must be assigned before controls are considered. This ensures that control assessments are not allowed to artificially reduce the perceived risk of inherently high-risk technologies.*

| Risk Class | Label | Criteria |
|---|---|---|
| RC-1 | **Critical** | Technology processes critical / sensitive customer data OR directly controls financial transactions OR failure could cause systemic impact OR regulatory non-compliance risk is high |
| RC-2 | **High** | Technology supports significant business operations OR processes regulated data OR has a material dependency on third-party providers with limited substitutability |
| RC-3 | **Medium** | Technology supports non-critical business functions OR operates in a limited / sandboxed environment OR risk can be substantially mitigated through standard controls |
| RC-4 | **Low** | Technology is at early evaluation stage only, with no production data OR limited business impact OR risk is well-understood and manageable with existing frameworks |

### 4.4 Technology Classification Register

*Complete this table for each technology identified in Section 3.2. Ensure that classification decisions are reviewed and confirmed by the Head of Technology Risk. Any technology classified RC-1 or RC-2 requires mandatory escalation to the Chief Risk Officer.*

| Technology ID | Technology Name | Technology Category | Category Code | Risk Classification | Classification Rationale | Classified By | Classification Date | CRO Escalation Required |
|---|---|---|---|---|---|---|---|---|
| ET-001 | [Technology Name] | [Category Name] | [TC-XX] | [RC-1 / RC-2 / RC-3 / RC-4] | [Brief rationale for the risk classification, referencing specific risk drivers] | [Name, Title] | [DD/MM/YYYY] | [Yes / No] |
| ET-002 | [Technology Name] | [Category Name] | [TC-XX] | [RC-1 / RC-2 / RC-3 / RC-4] | [Rationale] | [Name, Title] | [DD/MM/YYYY] | [Yes / No] |
| ET-003 | [Technology Name] | [Category Name] | [TC-XX] | [RC-1 / RC-2 / RC-3 / RC-4] | [Rationale] | [Name, Title] | [DD/MM/YYYY] | [Yes / No] |
| ET-004 | [Technology Name] | [Category Name] | [TC-XX] | [RC-1 / RC-2 / RC-3 / RC-4] | [Rationale] | [Name, Title] | [DD/MM/YYYY] | [Yes / No] |
| ET-005 | [Technology Name] | [Category Name] | [TC-XX] | [RC-1 / RC-2 / RC-3 / RC-4] | [Rationale] | [Name, Title] | [DD/MM/YYYY] | [Yes / No] |

### 4.5 Data Classification Intersection

*Emerging technologies that process, store, or transmit data must be assessed against the institution's data classification framework. This is particularly important for AI/ML systems, cloud platforms, and open banking APIs. Cross-reference with the Data Governance and PDPA compliance functions.*

| Technology ID | Technology Name | Data Types Processed | Highest Data Classification | PDPA Applicability | Data Residency | Cross-Border Transfer |
|---|---|---|---|---|---|---|
| ET-001 | [Technology Name] | [e.g., Customer PII, Transaction Data, Biometric Data] | [Public / Internal / Confidential / Restricted] | [Yes / No — if Yes, reference DPIA status] | [Malaysia / Overseas — specify jurisdiction] | [Yes / No — if Yes, specify countries] |
| ET-002 | [Technology Name] | [Data types] | [Classification] | [Yes / No] | [Residency] | [Yes / No] |
| ET-003 | [Technology Name] | [Data types] | [Classification] | [Yes / No] | [Residency] | [Yes / No] |

---

## 5. Ownership, Custodianship, and Accountability

### 5.1 Ownership Framework

*Clear ownership is a fundamental requirement of sound technology risk governance. This section formalises accountability for each emerging technology across three distinct roles: the Business Owner, the Technology Owner, and the Risk Owner. These roles must not be collapsed into a single individual to preserve segregation of duties.*

[Organization Name] applies a three-tier ownership model to all emerging technologies:

- **Business Owner:** The senior business leader accountable for the business outcomes and risk appetite decisions associated with the technology. Typically a Head of Business Unit or equivalent.
- **Technology Owner:** The senior technology leader accountable for the technical implementation, operation, and maintenance of the technology. Typically a Head of IT Domain or equivalent.
- **Risk Owner:** The senior risk leader responsible for ensuring that risks associated with the technology are identified, assessed, treated, and monitored in accordance with the institution's risk management framework. For emerging technologies, this is the Head of Technology Risk unless delegated.

### 5.2 Ownership Register

*This register must be kept current. Any change in ownership must be formally recorded and the incoming owner must confirm acceptance of accountability in writing. Ownership gaps — technologies without a designated owner — represent a governance deficiency and must be escalated immediately.*

| Technology ID | Technology Name | Business Owner (Name, Title) | Technology Owner (Name, Title) | Risk Owner (Name, Title) | Third-Party Vendor (if applicable) | Vendor Contact | Vendor Risk Tier |
|---|---|---|---|---|---|---|---|
| ET-001 | [Technology Name] | [Name, Title, Business Unit] | [Name, Title, IT Domain] | [Name, Title] | [Vendor Name / N/A] | [Vendor Contact Name, Email] | [Tier 1 / Tier 2 / Tier 3 / N/A] |
| ET-002 | [Technology Name] | [Name, Title, Business Unit] | [Name, Title, IT Domain] | [Name, Title] | [Vendor Name / N/A] | [Contact] | [Tier] |
| ET-003 | [Technology Name] | [Name, Title, Business Unit] | [Name, Title, IT Domain] | [Name, Title] | [Vendor Name / N/A] | [Contact] | [Tier] |
| ET-004 | [Technology Name] | [Name, Title, Business Unit] | [Name, Title, IT Domain] | [Name, Title] | [Vendor Name / N/A] | [Contact] | [Tier] |
| ET-005 | [Technology Name] | [Name, Title, Business Unit] | [Name, Title, IT Domain] | [Name, Title] | [Vendor Name / N/A] | [Contact] | [Tier] |

### 5.3 Third-Party and Vendor Accountability

*Technologies provided or operated by third parties introduce additional risk dimensions, including concentration risk, operational dependency, and limited direct oversight. The following section documents the due diligence status for each third-party technology provider.*

| Technology ID | Technology Name | Vendor Name | Vendor HQ Jurisdiction | Contract Expiry | SLA in Place | Last Vendor Risk Assessment | Vendor Assessment Outcome | Outsourcing Risk Category |
|---|---|---|---|---|---|---|---|---|
| ET-001 | [Technology Name] | [Vendor Name] | [Country] | [DD/MM/YYYY] | [Yes / No] | [DD/MM/YYYY / Not Yet Conducted] | [Satisfactory / Requires Action / Unsatisfactory] | [Material / Non-Material / Not Applicable] |
| ET-002 | [Technology Name] | [Vendor Name] | [Country] | [DD/MM/YYYY] | [Yes / No] | [DD/MM/YYYY] | [Outcome] | [Category] |
| ET-003 | [Technology Name] | [Vendor Name] | [Country] | [DD/MM/YYYY] | [Yes / No] | [DD/MM/YYYY] | [Outcome] | [Category] |

### 5.4 Accountability Acceptance Records

*Written acknowledgement of ownership responsibilities must be obtained from each designated owner. This section records the status of such acknowledgements.*

| Technology ID | Owner Role | Owner Name | Acknowledgement Method | Acknowledgement Date | Status |
|---|---|---|---|---|---|
| ET-001 | Business Owner | [Name] | [Email / Signed Form / JIRA Ticket] | [DD/MM/YYYY] | [Confirmed / Pending] |
| ET-001 | Technology Owner | [Name] | [Method] | [DD/MM/YYYY] | [Confirmed / Pending] |
| ET-001 | Risk Owner | [Name] | [Method] | [DD/MM/YYYY] | [Confirmed / Pending] |
| ET-002 | Business Owner | [Name] | [Method] | [DD/MM/YYYY] | [Confirmed / Pending] |

---

## 6. Technology Lifecycle Stage and Status

### 6.1 Lifecycle Framework

*This section applies [Organization Name]'s technology lifecycle model to each emerging technology. The lifecycle stage determines the applicable risk management activities, governance requirements, and monitoring intensity. Technologies in early stages require different oversight than those in full production.*

[Organization Name] manages emerging technologies through a defined lifecycle comprising the following stages:

| Stage Code | Stage Name | Description | Governance Requirements |
|---|---|---|---|
| LS-1 | **Horizon / Watch** | Technology has been identified through scanning; no active evaluation underway | Record in register; assign preliminary classification; schedule for periodic review |
| LS-2 | **Evaluation / Feasibility** | Active evaluation underway; may include vendor demonstrations, market analysis, or technical feasibility studies. No data processing beyond synthetic or anonymised test data | Preliminary risk assessment; Business Owner designation; Risk Owner notification |
| LS-3 | **Proof of Concept (PoC)** | Limited, controlled technical testing in an isolated environment. No production data | Full risk assessment required; Technology Owner designation; CISO review for security risks; Board awareness |
| LS-4 | **Pilot** | Controlled deployment in a limited production-like environment. May involve live but limited data | Full risk assessment required; all ownership roles confirmed; controls implemented; monitoring in place; Board / BRMC approval required for RC-1/RC-2 technologies |
| LS-5 | **Production (Active)** | Technology is fully deployed and operationally active | Continuous monitoring; quarterly risk review; integrated into annual Technology Risk Assessment; incident management integrated |
| LS-6 | **Under Review** | Technology is under active review for continuation, modification, or decommissioning | Enhanced monitoring; interim risk assessment; Board awareness |
| LS-7 | **Decommissioning** | Technology is being retired from the institution's environment | Decommissioning risk assessment; data disposal procedures; contract termination |
| LS-8 | **Decommissioned** | Technology has been fully retired | Retain records per the institution's retention policy; close risk register entries |

### 6.2 Current Lifecycle Status Register

*Update this register at each review cycle. The lifecycle stage directly determines the intensity of oversight and the applicable risk management activities. Any technology that has progressed a lifecycle stage since the last review must be subject to a refreshed risk assessment.*

| Technology ID | Technology Name | Current Lifecycle Stage | Stage Code | Date Entered Current Stage | Previous Stage | Target Next Stage | Expected Transition Date | Stage Change Since Last Review |
|---|---|---|---|---|---|---|---|---|
| ET-001 | [Technology Name] | [Stage Name] | [LS-X] | [DD/MM/YYYY] | [Previous Stage / N/A — initial entry] | [Target Stage] | [DD/MM/YYYY / TBD] | [Yes / No — if Yes, describe change] |
| ET-002 | [Technology Name] | [Stage Name] | [LS-X] | [DD/MM/YYYY] | [Previous Stage] | [Target Stage] | [DD/MM/YYYY] | [Yes / No] |
| ET-003 | [Technology Name] | [Stage Name] | [LS-X] | [DD/MM/YYYY] | [Previous Stage] | [Target Stage] | [DD/MM/YYYY] | [Yes / No] |
| ET-004 | [Technology Name] | [Stage Name] | [LS-X] | [DD/MM/YYYY] | [Previous Stage] | [Target Stage] | [DD/MM/YYYY] | [Yes / No] |
| ET-005 | [Technology Name] | [Stage Name] | [LS-X] | [DD/MM/YYYY] | [Previous Stage] | [Target Stage] | [DD/MM/YYYY] | [Yes / No] |

### 6.3 Lifecycle Transition Approvals

*All lifecycle transitions from LS-3 onwards require formal approval. This table records the approval history for each technology's lifecycle progression. For technologies classified RC-1 or RC-2, transitions to LS-4 (Pilot) and LS-5 (Production) require Board Risk Management Committee (BRMC) approval.*

| Technology ID | Technology Name | Transition | Approval Authority | Approved By | Approval Date | Approval Reference | Conditions Attached |
|---|---|---|---|---|---|---|---|
| ET-001 | [Technology Name] | [e.g., LS-2 to LS-3] | [e.g., CRO / BRMC] | [Name, Title] | [DD/MM/YYYY] | [Minutes Reference / Decision Memo ID] | [Yes / No — if Yes, describe conditions] |
| ET-002 | [Technology Name] | [Transition] | [Authority] | [Name, Title] | [DD/MM/YYYY] | [Reference] | [Yes / No] |

### 6.4 Last Review Date Summary

*This section provides a consolidated view of the last formal risk review date for each technology in scope. Technologies that have not been reviewed within the required frequency must be flagged for immediate attention.*

| Technology ID | Technology Name | Risk Classification | Review Frequency Required | Last Full Review Date | Last Review Conducted By | Last Review Report Reference | Days Since Last Review | Review Status |
|---|---|---|---|---|---|---|---|---|
| ET-001 | [Technology Name] | [RC-X] | [Continuous / Quarterly / Semi-Annual] | [DD/MM/YYYY] | [Name, Title] | [Report ID] | [Number] | [Current / Overdue — flag if overdue] |
| ET-002 | [Technology Name] | [RC-X] | [Frequency] | [DD/MM/YYYY] | [Name, Title] | [Report ID] | [Number] | [Current / Overdue] |
| ET-003 | [Technology Name] | [RC-X] | [Frequency] | [DD/MM/YYYY] | [Name, Title] | [Report ID] | [Number] | [Current / Overdue] |
| ET-004 | [Technology Name] | [RC-X] | [Frequency] | [DD/MM/YYYY] | [Name, Title] | [Report ID] | [Number] | [Current / Overdue] |
| ET-005 | [Technology Name] | [RC-X] | [Frequency] | [DD/MM/YYYY] | [Name, Title] | [Report ID] | [Number] | [Current / Overdue] |

---

## 7. Risk Assessment Methodology

### 7.1 Methodology Overview

*This section documents the risk assessment approach applied in this report. A clearly documented, repeatable methodology is essential for regulatory credibility and enables year-on-year comparability. Do not deviate from the approved methodology without formal sign-off from the Head of Technology Risk and Chief Risk Officer.*

The risk assessment methodology applied in this report is aligned with [Organization Name]'s Technology Risk Management Framework (TRMF) and is consistent with the guidance set out in BNM RMiT. The methodology follows a structured, four-phase approach:

1. **Risk Identification:** Systematic identification of threats, vulnerabilities, and risk scenarios relevant to each emerging technology, considering both technology-specific characteristics and the institutional context.
2. **Inherent Risk Assessment:** Assessment of the likelihood and impact of each identified risk scenario in the absence of mitigating controls, producing an inherent risk rating.
3. **Control Assessment:** Evaluation of the design adequacy and operating effectiveness of controls currently in place or planned for implementation.
4. **Residual Risk Assessment:** Determination of the residual risk level after accounting for the effectiveness of existing controls, and comparison against the institution's risk appetite.

### 7.2 Risk Rating Scales

**7.2.1 Likelihood Scale**

| Rating | Label | Definition | Indicative Frequency |
|---|---|---|---|
| 5 | Almost Certain | The risk event is expected to occur in most circumstances | More than once per year |
| 4 | Likely | The risk event will probably occur in most circumstances | Once per year |
| 3 | Possible | The risk event might occur at some time | Once every 1–3 years |
| 2 | Unlikely | The risk event could occur at some time | Once every 3–10 years |
| 1 | Rare | The risk event may only occur in exceptional circumstances | Less than once every 10 years |

**7.2.2 Impact Scale**

| Rating | Label | Financial Impact | Operational Impact | Reputational Impact | Regulatory Impact |
|---|---|---|---|---|---|
| 5 | Catastrophic | > RM [X]M loss | Institution-wide systems failure; critical services unavailable > 24 hours | Systemic reputational damage; major media coverage; customer exodus | BNM enforcement action; licence conditions / revocation risk |
| 4 | Major | RM [X]M – RM [X]M loss | Significant business disruption; critical services unavailable 4–24 hours | Significant adverse media coverage; measurable customer attrition | BNM formal investigation; regulatory directive issued |
| 3 | Moderate | RM [X]M – RM [X]M loss | Notable disruption to business unit operations; services degraded 1–4 hours | Adverse media coverage; customer complaints elevated | BNM supervisory concern; remedial action required |
| 2 | Minor | RM [X]K – RM [X]M loss | Limited operational disruption; workarounds available | Isolated customer complaints; limited external visibility | Internal compliance finding; self-reported to BNM |
| 1 | Negligible | < RM [X]K loss | Minimal disruption; operations maintained with minor inconvenience | No external visibility; internal reputational impact only | No regulatory impact anticipated |

*Note: Financial impact thresholds should be calibrated to the institution's materiality thresholds as approved by the Board.*

**7.2.3 Risk Rating Matrix**

| | **Impact 1** | **Impact 2** | **Impact 3** | **Impact 4** | **Impact 5** |
|---|---|---|---|---|---|
| **Likelihood 5** | Medium (5) | High (10) | High (15) | Critical (20) | Critical (25) |
| **Likelihood 4** | Low (4) | Medium (8) | High (12) | High (16) | Critical (20) |
| **Likelihood 3** | Low (3) | Medium (6) | Medium (9) | High (12) | High (15) |
| **Likelihood 2** | Low (2) | Low (4) | Medium (6) | Medium (8) | High (10) |
| **Likelihood 1** | Low (1) | Low (2) | Low (3) | Low (4) | Medium (5) |

| Risk Score | Risk Label | Management Response |
|---|---|---|
| 20–25 | **Critical** | Immediate escalation to CRO and Board. Treatment plan required within 5 business days. |
| 12–19 | **High** | Escalation to Head of Technology Risk. Treatment plan required within 20 business days. |
| 6–11 | **Medium** | Management within Technology Risk function. Treatment plan required within 60 days. |
| 1–5 | **Low** | Accept or monitor. Review at next scheduled cycle. |

### 7.3 Emerging Technology Risk Taxonomy

*This taxonomy ensures consistent identification of risk types across all emerging technology assessments. Use these risk categories when completing Section 8.*

| Risk Category | Risk Code | Description |
|---|---|---|
| Technology Novelty Risk | ETR-01 | Risk arising from the institution's unfamiliarity with the technology, including gaps in internal expertise and immature vendor solutions |
| Cybersecurity Risk | ETR-02 | Vulnerabilities introduced by the technology that could be exploited by threat actors, including novel attack vectors not addressed by existing security controls |
| Operational Risk | ETR-03 | Risk of operational disruption, failure, or error arising from the adoption or use of the technology |
| Data Risk | ETR-04 | Risks to data confidentiality, integrity, and availability, including PDPA and data governance implications |
| Third-Party / Concentration Risk | ETR-05 | Risks arising from dependence on third-party vendors, including single points of failure and limited market alternatives |
| Regulatory / Compliance Risk | ETR-06 | Risk of regulatory non-compliance arising from the adoption of the technology, including evolving regulatory expectations |
| Model / Algorithmic Risk | ETR-07 | For AI/ML technologies: risk of erroneous, biased, or unexplainable automated decisions |
| Ethical and Conduct Risk | ETR-08 | Risk of unfair customer outcomes, bias, or ethical concerns arising from the use of the technology |
| Interconnectedness Risk | ETR-09 | Risk arising from the technology's integration with other systems, creating complex dependencies and potential cascading failures |
| Strategic Risk | ETR-10 | Risk that the technology fails to deliver expected business value or creates strategic misalignment |

---

## 8. Detailed Risk Assessment by Technology

*This section contains individual risk assessments for each technology identified in the register. Complete one subsection (8.X) per technology. The level of detail should be proportionate to the technology's risk classification — RC-1 and RC-2 technologies require comprehensive assessments; RC-4 technologies may be assessed at a higher level.*

*Copy the template below for each technology in the register. Subsections are numbered 8.1, 8.2, 8.3, etc., corresponding to ET-001, ET-002, ET-003, etc.*

---

### 8.1 [ET-001] [Technology Name]

#### 8.1.1 Technology Overview

*Provide a concise technical description of the technology sufficient for a non-specialist reader (e.g., a Board Risk Management Committee member) to understand what it does, how it works at a high level, and why the institution is considering or using it.*

| Field | Details |
|---|---|
| **Technology Name** | [Technology Name] |
| **Technology ID** | ET-001 |
| **Version / Release** | [Version number or 'N/A'] |
| **Vendor / Provider** | [Vendor Name / In-house developed] |
| **Technology Category** | [TC-XX — Category Name] |
| **Risk Classification** | [RC-X — Label] |
| **Current Lifecycle Stage** | [LS-X — Stage Name] |
| **Business Owner** | [Name, Title] |
| **Technology Owner** | [Name, Title] |
| **Risk Owner** | [Name, Title] |
| **Assessment Date** | [DD/MM/YYYY] |
| **Assessed By** | [Name, Title] |

**Technology Description:**
[Provide a 3–5 sentence description of the technology, including its core function, the underlying technical mechanism, and the specific use case within [Organization Name].]

**Business Rationale:**
[Describe the business case for the technology — what problem does it solve, what opportunity does it address, and what is the expected benefit to the institution and its customers?]

**Technical Architecture Summary:**
[Describe at a high level how the technology is integrated into the institution's technical environment, including key system interfaces, data flows, and infrastructure dependencies.]

#### 8.1.2 Risk Identification and Inherent Risk Assessment

*For each relevant risk category from the taxonomy in Section 7.3, identify specific risk scenarios and assess their inherent likelihood and impact (before controls). Focus on risks that are material and specific to this technology — avoid generic boilerplate risks that do not reflect the actual risk profile.*

| Risk ID | Risk Category | Risk Code | Risk Scenario Description | Likelihood (1–5) | Impact (1–5) | Inherent Risk Score | Inherent Risk Rating |
|---|---|---|---|---|---|---|---|
| ET-001-R01 | [Risk Category] | [ETR-XX] | [Specific, detailed description of the risk scenario — what could go wrong, what is the trigger, and what would the consequence be?] | [1–5] | [1–5] | [Score] | [Critical / High / Medium / Low] |
| ET-001-R02 | [Risk Category] | [ETR-XX] | [Risk scenario description] | [1–5] | [1–5] | [Score] | [Rating] |
| ET-001-R03 | [Risk Category] | [ETR-XX] | [Risk scenario description] | [1–5] | [1–5] | [Score] | [Rating] |
| ET-001-R04 | [Risk Category] | [ETR-XX] | [Risk scenario description] | [1–5] | [1–5] | [Score] | [Rating] |
| ET-001-R05 | [Risk Category] | [ETR-XX] | [Risk scenario description] | [1–5] | [1–5] | [Score] | [Rating] |

**Highest Inherent Risk:** [Rating] — [Risk ID] — [Brief description]

#### 8.1.3 Key Risk Drivers

*Identify the specific factors that amplify or drive the risks identified above. Risk drivers provide actionable context for the control environment assessment.*

- [Risk Driver 1: e.g., Rapid evolution of the technology with limited established best practices in the financial services industry]
- [Risk Driver 2: e.g., Heavy dependency on a single vendor with limited contractual oversight provisions]
- [Risk Driver 3: e.g., Integration with core banking systems creating potential for cascading failures]
- [Risk Driver 4: e.g., Processing of sensitive customer personal data with novel algorithmic logic that is difficult to audit]
- [Risk Driver 5: Add as relevant]

---

### 8.2 [ET-002] [Technology Name]

*[Repeat the full structure from Section 8.1 for ET-002. Replace all placeholder values with the specific details for this technology.]*

#### 8.2.1 Technology Overview

| Field | Details |
|---|---|
| **Technology Name** | [Technology Name] |
| **Technology ID** | ET-002 |
| **Version / Release** | [Version] |
| **Vendor / Provider** | [Vendor / In-house] |
| **Technology Category** | [TC-XX] |
| **Risk Classification** | [RC-X] |
| **Current Lifecycle Stage** | [LS-X] |
| **Business Owner** | [Name, Title] |
| **Technology Owner** | [Name, Title] |
| **Risk Owner** | [Name, Title] |
| **Assessment Date** | [DD/MM/YYYY] |
| **Assessed By** | [Name, Title] |

**Technology Description:** [Description]

**Business Rationale:** [Rationale]

**Technical Architecture Summary:** [Architecture summary]

#### 8.2.2 Risk Identification and Inherent Risk Assessment

| Risk ID | Risk Category | Risk Code | Risk Scenario Description | Likelihood | Impact | Inherent Risk Score | Inherent Risk Rating |
|---|---|---|---|---|---|---|---|
| ET-002-R01 | [Category] | [Code] | [Description] | [1–5] | [1–5] | [Score] | [Rating] |
| ET-002-R02 | [Category] | [Code] | [Description] | [1–5] | [1–5] | [Score] | [Rating] |
| ET-002-R03 | [Category] | [Code] | [Description] | [1–5] | [1–5] | [Score] | [Rating] |

#### 8.2.3 Key Risk Drivers

- [Risk Driver 1]
- [Risk Driver 2]
- [Risk Driver 3]

*[Continue for ET-003 through ET-00N as required, following the same structure.]*

---

## 9. Control Environment Assessment

### 9.1 Control Assessment Methodology

*The control environment assessment evaluates both the design adequacy and operating effectiveness of controls. Design adequacy asks: is this the right control for this risk? Operating effectiveness asks: is the control actually working as intended? Both dimensions are required for a credible residual risk assessment.*

Controls are assessed against two criteria:

- **Design Adequacy (DA):** Does the control, if operating as intended, adequately address the risk scenario?
  - **Adequate:** Control design fully addresses the risk scenario.
  - **Partially Adequate:** Control design partially addresses the risk but has notable gaps.
  - **Inadequate:** Control design does not sufficiently address the risk scenario.

- **Operating Effectiveness (OE):** Is the control consistently operating as designed?
  - **Effective:** Control is operating as designed with no exceptions noted.
  - **Partially Effective:** Control is operating but with some exceptions or inconsistencies.
  - **Ineffective:** Control is not operating as designed, or evidence of effectiveness is unavailable.

**Overall Control Rating:**

| Design Adequacy | Operating Effectiveness | Overall Control Rating |
|---|---|---|
| Adequate | Effective | **Strong** |
| Adequate | Partially Effective | **Moderate** |
| Adequate | Ineffective | **Weak** |
| Partially Adequate | Effective | **Moderate** |
| Partially Adequate | Partially Effective | **Weak** |
| Partially Adequate | Ineffective | **Weak** |
| Inadequate | Any | **Insufficient** |

### 9.2 Control Register by Technology

*Complete this table for each risk identified in Section 8. A single risk may have multiple controls. Where a control gap exists (i.e., a material risk has no mitigating control or only insufficient controls), this must be flagged as a gap finding and escalated accordingly.*

| Technology ID | Risk ID | Control ID | Control Description | Control Type | Control Owner | Design Adequacy | Operating Effectiveness | Overall Control Rating | Control Gap? | Gap Description |
|---|---|---|---|---|---|---|---|---|---|---|
| ET-001 | ET-001-R01 | CT-001 | [Description of control, e.g., Vendor security assessment conducted prior to deployment and annually thereafter] | [Preventive / Detective / Corrective / Deterrent] | [Control Owner Name, Title] | [Adequate / Partially Adequate / Inadequate] | [Effective / Partially Effective / Ineffective] | [Strong / Moderate / Weak / Insufficient] | [Yes / No] | [Describe gap if Yes] |
| ET-001 | ET-001-R01 | CT-002 | [Control description] | [Type] | [Owner] | [DA] | [OE] | [Rating] | [Yes / No] | [Gap description] |
| ET-001 | ET-001-R02 | CT-003 | [Control description] | [Type] | [Owner] | [DA] | [OE] | [Rating] | [Yes / No] | [Gap description] |
| ET-001 | ET-001-R03 | CT-004 | [Control description] | [Type] | [Owner] | [DA] | [OE] | [Rating] | [Yes / No] | [Gap description] |
| ET-002 | ET-002-R01 | CT-005 | [Control description] | [Type] | [Owner] | [DA] | [OE] | [Rating] | [Yes / No] | [Gap description] |

### 9.3 Control Gap Summary

*This summary table consolidates all identified control gaps for management attention and action planning. Each gap must have an assigned owner and a target remediation date. Open gaps represent a heightened risk exposure until remediated.*

| Gap ID | Technology ID | Risk ID | Control Gap Description | Gap Severity | Gap Owner | Target Remediation Date | Interim Mitigation in Place | Interim Mitigation Description |
|---|---|---|---|---|---|---|---|---|
| GAP-001 | [ET-XXX] | [Risk ID] | [Detailed description of the control gap and why it is material] | [Critical / High / Medium / Low] | [Name, Title] | [DD/MM/YYYY] | [Yes / No] | [Description of any interim measures in place while the gap is being remediated] |
| GAP-002 | [ET-XXX] | [Risk ID] | [Description] | [Severity] | [Owner] | [Date] | [Yes / No] | [Description] |
| GAP-003 | [ET-XXX] | [Risk ID] | [Description] | [Severity] | [Owner] | [Date] | [Yes / No] | [Description] |

---

## 10. Residual Risk and Treatment Plans

### 10.1 Residual Risk Assessment Summary

*Residual risk is the risk remaining after the application of existing controls. The residual risk must be compared against the institution's risk appetite. Any technology with a residual risk that exceeds appetite requires a formal risk treatment decision from the appropriate governance authority.*

| Technology ID | Technology Name | Risk ID | Risk Scenario | Inherent Risk Rating | Control Rating | Residual Likelihood (1–5) | Residual Impact (1–5) | Residual Risk Score | Residual Risk Rating | Within Risk Appetite? |
|---|---|---|---|---|---|---|---|---|---|---|
| ET-001 | [Technology Name] | ET-001-R01 | [Risk scenario] | [Critical/High/Medium/Low] | [Strong/Moderate/Weak/Insufficient] | [1–5] | [1–5] | [Score] | [Critical/High/Medium/Low] | [Yes / No — if No, treatment required] |
| ET-001 | [Technology Name] | ET-001-R02 | [Risk scenario] | [Rating] | [Control] | [1–5] | [1–5] | [Score] | [Rating] | [Yes / No] |
| ET-002 | [Technology Name] | ET-002-R01 | [Risk scenario] | [Rating] | [Control] | [1–5] | [1–5] | [Score] | [Rating] | [Yes / No] |

### 10.2 Risk Treatment Options

*Where residual risk exceeds appetite, one of the following treatment strategies must be selected and formally approved. The choice of treatment strategy must be documented with rationale and approved by the appropriate authority.*

| Treatment Strategy | Description | Applicable Scenarios |
|---|---|---|
| **Mitigate** | Implement additional or enhanced controls to reduce the likelihood and/or impact of the risk | Preferred strategy for most operational and cybersecurity risks where cost-effective controls exist |
| **Transfer** | Transfer the financial consequence of the risk to a third party (e.g., cyber insurance, contractual indemnity) | Appropriate for residual risks where internal mitigation is not cost-effective or technically feasible |
| **Avoid** | Discontinue or refrain from the activity that generates the risk | Appropriate where risk cannot be reduced to within appetite and the business case does not justify the risk exposure |
| **Accept** | Formally accept the residual risk where it is within appetite or where treatment cost exceeds benefit | Only permissible with explicit approval from the appropriate risk governance authority |

### 10.3 Risk Treatment Plans

*For each residual risk that exceeds appetite, document the approved treatment plan. Treatment plans must be specific, time-bound, and have a designated owner. Vague or open-ended treatment plans will not be accepted.*

| Treatment Plan ID | Technology ID | Risk ID | Residual Risk Rating | Treatment Strategy | Treatment Actions | Action Owner | Target Completion Date | Progress Update | Status |
|---|---|---|---|---|---|---|---|---|---|
| TP-001 | [ET-XXX] | [Risk ID] | [Rating] | [Mitigate / Transfer / Avoid / Accept] | [Specific, actionable steps to be taken, e.g., "Implement privileged access management (PAM) solution for AI platform access by Q3 2025"] | [Name, Title] | [DD/MM/YYYY] | [Current progress update, or 'Not yet commenced'] | [Open / In Progress / Completed / Overdue] |
| TP-002 | [ET-XXX] | [Risk ID] | [Rating] | [Strategy] | [Actions] | [Owner] | [Date] | [Update] | [Status] |
| TP-003 | [ET-XXX] | [Risk ID] | [Rating] | [Strategy] | [Actions] | [Owner] | [Date] | [Update] | [Status] |

### 10.4 Risk Acceptance Register

*Formal risk acceptances must be documented and approved by the appropriate authority commensurate with the risk level. Risk acceptances must be time-limited and subject to review at the next assessment cycle.*

| Acceptance ID | Technology ID | Risk ID | Risk Description | Residual Risk Rating | Acceptance Rationale | Accepted By | Acceptance Date | Acceptance Expiry | Review Trigger Conditions |
|---|---|---|---|---|---|---|---|---|---|
| RA-001 | [ET-XXX] | [Risk ID] | [Risk description] | [Rating] | [Clear rationale for accepting the risk rather than treating it further — must address why treatment is not feasible or proportionate] | [Name, Title — must be appropriate authority] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Conditions that would require early review of this acceptance, e.g., increase in risk rating, material change in technology, new regulatory guidance] |
| RA-002 | [ET-XXX] | [Risk ID] | [Description] | [Rating] | [Rationale] | [Name, Title] | [Date] | [Expiry] | [Triggers] |

---

## 11. Horizon Scanning and Emerging Threat Intelligence

### 11.1 Horizon Scanning Summary

*This section documents the horizon scanning activities conducted during the assessment period and summarises the key findings. Horizon scanning is a forward-looking activity that ensures the institution is aware of emerging threats and opportunities before they materialise.*

**Scanning Period:** [Start Date] to [End Date]
**Scanning Frequency:** [Monthly / Quarterly]
**Conducted By:** [Name, Title]

### 11.2 Emerging Technology Trends Identified

*Document the key technology trends identified during the horizon scanning period that are relevant to the institution's risk profile. For each trend, assess the potential impact on the institution and the timeframe within which the institution should expect to engage with it.*

| Trend ID | Technology / Trend | Description | Potential Impact on [Organization Name] | Expected Relevance Timeframe | Recommended Action | Priority |
|---|---|---|---|---|---|---|
| TR-001 | [Technology / Trend Name] | [Brief description of the trend and its significance in the financial services context] | [Assessment of how this trend could affect the institution's risk profile, operations, or competitive position] | [0–12 months / 1–2 years / 2–5 years / > 5 years] | [Watch / Evaluate / Assess for adoption / No action required] | [High / Medium / Low] |
| TR-002 | [Technology / Trend Name] | [Description] | [Impact] | [Timeframe] | [Action] | [Priority] |
| TR-003 | [Technology / Trend Name] | [Description] | [Impact] | [Timeframe] | [Action] | [Priority] |
| TR-004 | [Technology / Trend Name] | [Description] | [Impact] | [Timeframe] | [Action] | [Priority] |

### 11.3 Threat Intelligence Integration

*Summarise threat intelligence relevant to technologies in the institution's emerging technology portfolio. Cross-reference with the institution's Threat Intelligence function and Security Operations Centre (SOC) where applicable.*

| Intelligence Item | Source | Technology(ies) Affected | Threat Description | Assessed Likelihood | Assessed Impact | Action Taken / Recommended |
|---|---|---|---|---|---|---|
| TI-001 | [Source, e.g., FS-ISAC, NACSA, BNM Advisory, Commercial Threat Intel Feed] | [ET-XXX, ET-XXX] | [Description of the threat or vulnerability] | [High / Medium / Low] | [High / Medium / Low] | [Action taken or recommended, e.g., 'Controls reviewed — no additional action required' or 'Recommend enhanced monitoring pending further intelligence'] |
| TI-002 | [Source] | [Technologies] | [Description] | [Likelihood] | [Impact] | [Action] |
| TI-003 | [Source] | [Technologies] | [Description] | [Likelihood] | [Impact] | [Action] |

### 11.4 Regulatory and Industry Developments

*Document relevant regulatory developments, guidance, and industry initiatives that affect the institution's emerging technology risk landscape. This section supports the Regulatory Compliance Considerations in Section 12.*

| Development | Source | Date Published | Relevance to [Organization Name] | Action Required | Target Date |
|---|---|---|---|---|---|
| [Development name, e.g., BNM Consultation Paper on AI in Financial Services] | [BNM / NACSA / Securities Commission / PDPC / Other] | [DD/MM/YYYY] | [Assessment of how this development affects the institution's risk profile or compliance obligations] | [Action required, e.g., Review internal AI governance policy; Submit consultation response] | [DD/MM/YYYY] |
| [Development] | [Source] | [Date] | [Relevance] | [Action] | [Date] |
| [Development] | [Source] | [Date] | [Relevance] | [Action] | [Date] |

---

## 12. Regulatory Compliance Considerations

### 12.1 BNM RMiT Compliance Status

*This section provides a consolidated assessment of the institution's compliance with BNM RMiT requirements as they relate to emerging technology risk management. Any compliance gaps must be reflected in the Risk Treatment Plans in Section 10.*

| RMiT Clause | Requirement Description | Compliance Status | Evidence | Gap Description (if any) | Gap Owner | Target Remediation |
|---|---|---|---|---|---|---|
| 17.5 | Emerging technology risk assessment | [Compliant / Partial / Non-Compliant] | [Reference to evidence, e.g., 'This document'] | [Gap description if not fully compliant] | [Name, Title] | [DD/MM/YYYY] |
| [Other RMiT clauses as relevant] | [Description] | [Status] | [Evidence] | [Gap] | [Owner] | [Date] |

### 12.2 PDPA Compliance Considerations

*For each emerging technology that processes personal data, document the PDPA compliance status. Technologies that have not completed a Data Protection Impact Assessment (DPIA) where required represent a compliance gap.*

| Technology ID | Technology Name | Personal Data Processed | DPIA Required | DPIA Status | DPIA Reference | PDPA Compliance Status | Outstanding Actions |
|---|---|---|---|---|---|---|---|
| ET-001 | [Technology Name] | [Yes / No — if Yes, describe categories] | [Yes / No — per the institution's DPIA trigger criteria] | [Completed / In Progress / Not Yet Commenced / Not Required] | [DPIA reference number] | [Compliant / Partial / Non-Compliant / N/A] | [Description of outstanding actions] |
| ET-002 | [Technology Name] | [Yes / No] | [Yes / No] | [Status] | [Reference] | [Status] | [Actions] |

### 12.3 Other Regulatory Considerations

*Document any additional regulatory considerations specific to the technologies assessed, including sector-specific guidelines, international standards, and applicable industry codes of practice.*

| Technology ID | Regulatory Body | Regulation / Guideline | Requirement | Compliance Status | Outstanding Actions |
|---|---|---|---|---|---|
| [ET-XXX] | [BNM / SC / NACSA / PDPC / Other] | [Regulation name] | [Specific requirement] | [Compliant / Partial / Non-Compliant / Under Assessment] | [Actions required] |

---

## 13. Review History and Monitoring Log

### 13.1 Continuous Monitoring Activities

*This section documents the ongoing monitoring activities conducted between formal quarterly reviews. Continuous monitoring provides assurance that the risk profile of emerging technologies remains current and that any material changes are identified and actioned promptly.*

| Monitoring Activity | Frequency | Conducted By | Technology(ies) Covered | Last Completed | Next Due | Output / Finding Summary |
|---|---|---|---|---|---|---|
| Vendor security posture review | [Monthly / Quarterly] | [Name / Team] | [List technologies / All applicable] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Summary of findings, or 'No material findings'] |
| Technology incident log review | [Weekly / Monthly] | [Name / Team] | [Technologies] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Summary] |
| Threat intelligence feed review | [Weekly] | [Name / Team] | [Technologies] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Summary] |
| Control effectiveness testing | [Quarterly / Semi-Annual] | [Name / Team] | [Technologies] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Summary] |
| Treatment plan progress review | [Monthly] | [Name / Team] | [Technologies] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Summary] |
| Risk register reconciliation | [Quarterly] | [Name / Team] | [Technologies] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Summary] |
| Horizon scanning update | [Monthly] | [Name / Team] | [All] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Summary] |

### 13.2 Material Change Log

*Any material change to a technology in scope — including significant configuration changes, vendor changes, significant incidents, new regulatory guidance, or changes in the threat landscape — must be recorded here and may trigger an out-of-cycle risk assessment.*

| Log ID | Date | Technology ID | Change / Event Description | Material Change Classification | Triggered Out-of-Cycle Assessment? | Assessment Reference | Logged By |
|---|---|---|---|---|---|---|---|
| MCL-001 | [DD/MM/YYYY] | [ET-XXX] | [Description of the material change or event] | [Technology Change / Vendor Change / Security Incident / Regulatory Development / Threat Intelligence Update / Other] | [Yes / No — if Yes, reference the assessment] | [Assessment reference / N/A] | [Name, Title] |
| MCL-002 | [DD/MM/YYYY] | [ET-XXX] | [Description] | [Classification] | [Yes / No] | [Reference] | [Name] |

### 13.3 Quarterly Review Summary

*This table provides a summary of formal quarterly reviews conducted. Each quarterly review should update the risk register, validate monitoring findings, and report to the appropriate governance forum.*

| Quarter | Review Date | Technologies Reviewed | Key Findings | Risk Profile Change | Escalations Made | Next Review Date | Review Conducted By | Approved By |
|---|---|---|---|---|---|---|---|---|
| [Q1/Q2/Q3/Q4 YYYY] | [DD/MM/YYYY] | [List technology IDs reviewed] | [Summary of key findings from the review] | [Improved / Stable / Deteriorated / Mixed] | [Summary of any escalations, or 'None'] | [DD/MM/YYYY] | [Name, Title] | [Name, Title] |
| [Quarter] | [Date] | [Technologies] | [Findings] | [Change] | [Escalations] | [Next Date] | [Reviewer] | [Approver] |

---

## 14. Roles and Responsibilities

### 14.1 RACI Matrix

*This RACI matrix defines the responsibilities of key stakeholders in the emerging technology risk assessment process. R = Responsible (performs the work), A = Accountable (owns the outcome), C = Consulted (provides input), I = Informed (receives output).*

| Activity | Board / BRMC | CRO | Head of Technology Risk | CISO | Technology Risk Team | Business Owner | Technology Owner | Internal Audit | Legal & Compliance | Vendor Management |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve Emerging Technology Risk Policy | A | C | R | C | I | I | I | C | C | I |
| Set risk appetite for emerging technologies | A | R | C | C | I | I | I | I | C | I |
| Approve lifecycle transition (LS-4 Pilot — RC-1/RC-2) | A | C | R | C | I | C | C | I | C | I |
| Approve lifecycle transition (LS-5 Production — RC-1/RC-2) | A | C | R | C | I | C | C | C | C | I |
| Conduct horizon scanning | I | I | A | C | R | C | C | I | C | I |
| Maintain Emerging Technology Register | I | I | A | I | R | C | C | I | I | I |
| Conduct risk classification | I | I | A | C | R | C | C | I | C | I |
| Conduct inherent risk assessment | I | I | A | C | R | C | C | I | C | I |
| Conduct control environment assessment | I | I | A | R | R | C | C | C | C | I |
| Assign and confirm ownership | I | C | A | I | R | A | A | I | I | I |
| Develop risk treatment plans | I | C | A | C | R | C | R | I | C | I |
| Approve risk treatment plans (High / Critical) | I | A | R | C | C | C | C | I | C | I |
| Implement risk treatment actions | I | I | C | C | I | R | R | I | I | C |
| Monitor treatment plan progress | I | I | A | C | R | C | C | I | I | I |
| Conduct continuous monitoring | I | I | A | C | R | C | C | I | I | I |
| Conduct quarterly risk review | I | C | A | C | R | C | C | I | C | I |
| Report to BRMC / Board | A | C | R | C | C | I | I | I | C | I |
| Conduct DPIA for applicable technologies | I | I | C | C | C | C | C | I | A | I |
| Conduct vendor risk assessment | I | I | C | C | C | C | C | I | C | A |
| Independent assurance review | C | C | C | C | C | C | C | A | C | I |

### 14.2 Escalation Framework

*Clear escalation paths ensure that risk events and threshold breaches are promptly communicated to the appropriate decision-making authority. The following escalation triggers and paths apply to emerging technology risk.*

| Trigger | Escalation Level 1 | Escalation Level 2 | Escalation Level 3 | Timeframe |
|---|---|---|---|---|
| New technology identified with potential RC-1 classification | Head of Technology Risk | CRO | N/A | Within 2 business days |
| Residual risk classified Critical | Head of Technology Risk | CRO | BRMC | Within 1 business day |
| Residual risk classified High and outside appetite | Head of Technology Risk | CRO | N/A | Within 5 business days |
| Control gap identified for Critical or High inherent risk | Head of Technology Risk | CRO | N/A | Within 2 business days |
| Security incident involving an emerging technology | CISO | CRO / Head of Technology Risk | BRMC (if material) | Immediately |
| Material regulatory non-compliance identified | Head of Technology Risk / Legal & Compliance | CRO | Board / BRMC | Within 1 business day |
| Treatment plan milestone missed (Critical / High risk) | Head of Technology Risk | CRO | N/A | Within 2 business days |
| Significant adverse vendor development | Vendor Management / Head of Technology Risk | CRO | N/A | Within 2 business days |
| Technology lifecycle stage change (RC-1/RC-2 to LS-4+) | Head of Technology Risk | CRO | BRMC | Before transition |

---

## 15. Review and Approval

### 15.1 Version History

*Maintain a complete version history for this document. Every revision, regardless of scope, must be recorded here. Minor revisions (e.g., editorial corrections, updated monitoring data) increment the minor version number; substantive revisions (e.g., material changes to risk ratings, new technologies added, methodology changes) increment the major version number.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name, Title] | [Name, Title] | Initial version — established template and first full assessment cycle. |
| 1.1 | [DD/MM/YYYY] | [Name, Title] | [Name, Title] | [e.g., Updated monitoring log; added ET-003 to register; corrected control owner for CT-005.] |
| 2.0 | [DD/MM/YYYY] | [Name, Title] | [Name, Title] | [e.g., Full quarterly review — updated risk ratings for ET-001 and ET-002 following threat intelligence update; added new treatment plans TP-003 and TP-004.] |

### 15.2 Distribution List

*All recipients of this document must be recorded. Given its Confidential classification, distribution must be strictly controlled. Recipients must not further distribute this document without written approval from the document owner.*

| Recipient Name | Title | Department | Distribution Method | Date Distributed |
|---|---|---|---|---|
| [Name] | [Title] | [Department] | [Secure Email / SharePoint / Physical Copy] | [DD/MM/YYYY] |
| [Name] | [Title] | [Department] | [Method] | [DD/MM/YYYY] |
| [Name] | [Title] | [Department] | [Method] | [DD/MM/YYYY] |

### 15.3 Approval Sign-Off

*This document requires approval from all parties listed below before it is considered formally approved and issued. Digital signatures or approved workflow tool records are acceptable in lieu of handwritten signatures, provided they comply with the institution's document management policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** | [Name] — Technology Risk Manager | | [DD/MM/YYYY] |
| **Reviewed By** | [Name] — Head of Technology Risk | | [DD/MM/YYYY] |
| **Reviewed By** | [Name] — Chief Information Security Officer | | [DD/MM/YYYY] |
| **Reviewed By** | [Name] — Legal & Compliance Representative | | [DD/MM/YYYY] |
| **Approved By** | [Name] — Chief Risk Officer | | [DD/MM/YYYY] |
| **Noted By** | [Name] — Chief Technology Officer | | [DD/MM/YYYY] |
| **Endorsed By** | [Name] — Chair, Board Risk Management Committee | | [DD/MM/YYYY] |

---

## 16. References

### 16.1 Regulatory References

| Reference | Title | Issuing Authority | Date / Version | Relevant Clauses |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Effective Date] | Clause 17.5 (primary); Clauses 17.1–17.4 (supporting context) |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 (as amended) | All — where personal data is processed by assessed technologies |
| NACSA NCP | National Cybersecurity Policy | National Cyber Security Agency (NACSA) | [Version / Date] | Relevant principles on emerging technology cybersecurity |
| BNM Outsourcing | Policy on Outsourcing | Bank Negara Malaysia | [Effective Date] | All — where emerging technologies involve third-party service providers |
| BNM Operational Risk | Policy on Operational Risk | Bank Negara Malaysia | [Effective Date] | All — operational risk arising from technology failures |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO / IEC | 2022 | All — information security controls relevant to emerging technologies |
| ISO 31000:2018 | Risk Management — Guidelines | ISO | 2018 | Risk assessment methodology guidance |
| NIST CSF v2.0 | Cybersecurity Framework | NIST | 2024 | Identify, Protect, Detect, Respond, Recover, Govern functions |

### 16.2 Internal Policy References

| Reference | Document Title | Version | Date |
|---|---|---|---|
| [Doc ID] | Technology Risk Management Framework (TRMF) | [X.X] | [DD/MM/YYYY] |
| [Doc ID] | Emerging Technology Policy | [X.X] | [DD/MM/YYYY] |
| [Doc ID] | Information Security Policy | [X.X] | [DD/MM/YYYY] |
| [Doc ID] | Data Governance Policy | [X.X] | [DD/MM/YYYY] |
| [Doc ID] | Outsourcing and Third-Party Risk Management Policy | [X.X] | [DD/MM/YYYY] |
| [Doc ID] | Change Management Policy | [X.X] | [DD/MM/YYYY] |
| [Doc ID] | Incident Management Policy | [X.X] | [DD/MM/YYYY] |
| [Doc ID] | Business Continuity and Disaster Recovery Policy | [X.X] | [DD/MM/YYYY] |

---

## 17. Appendices

### Appendix A — Glossary of Terms

*Provide definitions for all technical terms, abbreviations, and acronyms used in this document. This is particularly important for Board-level readers who may not have a technical background.*

| Term / Abbreviation | Definition |
|---|---|
| AI / ML | Artificial Intelligence / Machine Learning — technologies that simulate human intelligence or learn from data. |
| BRMC | Board Risk Management Committee — the Board-level committee responsible for oversight of risk management. |
| CAB | Change Advisory Board — the governance body responsible for approving technology changes. |
| CISO | Chief Information Security Officer — the executive responsible for information security strategy and oversight. |
| CRO | Chief Risk Officer — the executive responsible for enterprise risk management. |
| DPIA | Data Protection Impact Assessment — a structured assessment of privacy risks for technologies that process personal data, required under PDPA for high-risk processing. |
| DLT | Distributed Ledger Technology — a type of database that is consensually shared and synchronised across multiple sites, without a central administrator. |
| ETR | Emerging Technology Risk — the risk taxonomy code prefix used in this document. |
| FS-ISAC | Financial Services Information Sharing and Analysis Center — a global financial industry consortium for sharing cybersecurity threat intelligence. |
| IoT | Internet of Things — the network of physical devices embedded with sensors and software that connect and exchange data. |
| NACSA | National Cyber Security Agency — Malaysia's national authority for cybersecurity. |
| PDPA | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data. |
| PoC | Proof of Concept — a limited technical demonstration to verify that a concept is feasible before committing to full implementation. |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions. |
| RPA | Robotic Process Automation — software that automates repetitive, rule-based tasks. |
| SOC | Security Operations Centre — the team responsible for monitoring and responding to cybersecurity threats. |
| TRMF | Technology Risk Management Framework — the institution's internal framework for managing technology risk. |
| [Add additional terms as required] | |

---

### Appendix B — Emerging Technology Notification Form Template

*This form must be completed by any business unit or technology team that identifies an emerging technology for evaluation or potential adoption. Submit to the Technology Risk function for registration and preliminary assessment.*

**EMERGING TECHNOLOGY NOTIFICATION FORM**

| Field | Details |
|---|---|
| **Date of Notification** | [DD/MM/YYYY] |
| **Submitted By** | [Name, Title, Business Unit] |
| **Technology Name** | [Technology Name] |
| **Vendor / Provider** | [Vendor Name / In-house / Open Source] |
| **Proposed Use Case** | [Description of the intended use case] |
| **Proposed Business Unit** | [Business Unit(s)] |
| **Anticipated Lifecycle Stage at Notification** | [LS-1 / LS-2 / LS-3 / LS-4 / LS-5] |
| **Anticipated Production Date** | [DD/MM/YYYY / TBD / Not Applicable] |
| **Personal Data Involved?** | [Yes / No — if Yes, describe categories] |
| **Third-Party Provider Involved?** | [Yes / No — if Yes, provide vendor details] |
| **Estimated Business Value / Benefit** | [Brief description] |
| **Known Risks or Concerns** | [Any known risks or concerns at time of notification] |
| **Supporting Documentation** | [List any attached documentation, e.g., vendor proposal, business case, technical architecture diagram] |
| **Notification Received By (Technology Risk)** | [Name, Title] |
| **Date Registered in Emerging Technology Register** | [DD/MM/YYYY] |
| **Technology ID Assigned** | [ET-XXX] |
| **Preliminary Risk Classification** | [RC-1 / RC-2 / RC-3 / RC-4 / TBD] |

---

### Appendix C — Risk Assessment Workshop Agenda Template

*Use this template when conducting risk identification workshops for individual emerging technologies. Workshops are recommended for RC-1 and RC-2 technologies.*

**EMERGING TECHNOLOGY RISK ASSESSMENT WORKSHOP**

| Field | Details |
|---|---|
| **Technology** | [Technology Name] — [ET-XXX] |
| **Date** | [DD/MM/YYYY] |
| **Duration** | [e.g., 2 hours] |
| **Facilitator** | [Name, Title] |
| **Location / Platform** | [Room / Teams / Zoom] |

**Invited Participants:**
- Head of Technology Risk (Chair)
- Business Owner — [Name, Title]
- Technology Owner — [Name, Title]
- Representative, Information Security — [Name, Title]
- Representative, Legal & Compliance — [Name, Title]
- Representative, Vendor Management (if applicable) — [Name, Title]
- Subject matter experts as required — [Names, Titles]

**Agenda:**

| Time | Agenda Item | Facilitator |
|---|---|---|
| [HH:MM] | Welcome, introductions, and workshop objectives | Head of Technology Risk |
| [HH:MM] | Technology overview presentation | Technology Owner |
| [HH:MM] | Review of preliminary risk identification | Technology Risk Team |
| [HH:MM] | Breakout: Risk scenario development by risk category | All |
| [HH:MM] | Risk rating exercise — inherent likelihood and impact | Facilitator |
| [HH:MM] | Control identification and assessment | Technology Owner / CISO |
| [HH:MM] | Residual risk determination | Facilitator |
| [HH:MM] | Treatment plan development (if required) | Business Owner / Technology Owner |
| [HH:MM] | Agreement on owners, actions, and timelines | All |
| [HH:MM] | Wrap-up and next steps | Head of Technology Risk |

---

### Appendix D — Quarterly Review Checklist

*This checklist must be completed by the Technology Risk team at each quarterly review cycle to ensure all required activities are completed.*

**QUARTERLY EMERGING TECHNOLOGY RISK REVIEW CHECKLIST**

**Review Quarter:** [Q1/Q2/Q3/Q4 YYYY]
**Review Completed By:** [Name, Title]
**Review Date:** [DD/MM/YYYY]

| # | Checklist Item | Completed | Date Completed | Notes |
|---|---|---|---|---|
| 1 | Reconcile Emerging Technology Register against IT Asset Register | [Yes / No] | [DD/MM/YYYY] | |
| 2 | Verify all ownership assignments are current and confirmed | [Yes / No] | [DD/MM/YYYY] | |
| 3 | Update lifecycle stage for all technologies with a stage change | [Yes / No] | [DD/MM/YYYY] | |
| 4 | Review horizon scanning findings and update Section 11 | [Yes / No] | [DD/MM/YYYY] | |
| 5 | Incorporate threat intelligence updates into risk assessments | [Yes / No] | [DD/MM/YYYY] | |
| 6 | Review and update control effectiveness evidence | [Yes / No] | [DD/MM/YYYY] | |
| 7 | Update treatment plan progress status | [Yes / No] | [DD/MM/YYYY] | |
| 8 | Review and update residual risk ratings | [Yes / No] | [DD/MM/YYYY] | |
| 9 | Review risk acceptances — check for expired acceptances | [Yes / No] | [DD/MM/YYYY] | |
| 10 | Review PDPA / DPIA status for all personal-data-processing technologies | [Yes / No] | [DD/MM/YYYY] | |
| 11 | Review vendor risk assessment status | [Yes / No] | [DD/MM/YYYY] | |
| 12 | Review regulatory developments and update Section 12 | [Yes / No] | [DD/MM/YYYY] | |
| 13 | Update Material Change Log | [Yes / No] | [DD/MM/YYYY] | |
| 14 | Prepare quarterly review summary (Section 13.3) | [Yes / No] | [DD/MM/YYYY] | |
| 15 | Prepare management report for CRO / BRMC | [Yes / No] | [DD/MM/YYYY] | |
| 16 | Obtain Head of Technology Risk sign-off on updated assessment | [Yes / No] | [DD/MM/YYYY] | |
| 17 | Distribute updated report per distribution list | [Yes / No] | [DD/MM/YYYY] | |
| 18 | Update document version history | [Yes / No] | [DD/MM/YYYY] | |

**Checklist Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Completed By | [Name, Title] | | [DD/MM/YYYY] |
| Reviewed By | [Name, Title — Head of Technology Risk] | | [DD/MM/YYYY] |

---

### Appendix E — Technology Risk Heat Map

*The following heat map provides a visual summary of the residual risk positions for all technologies assessed in this report. Technologies are plotted by residual likelihood (x-axis) and residual impact (y-axis). This visual is for management reporting purposes and should be updated at each quarterly review.*

**RESIDUAL RISK HEAT MAP — AS AT [DD/MM/YYYY]**

```
Impact
  5  |  [ET-XXX]  |           |           |  [ET-XXX]  |  [ET-XXX]  |
     |  (Low)     |           |           |  (High)    |  (Critical)|
  4  |            |  [ET-XXX] |           |            |            |
     |            |  (Low)    |           |            |            |
  3  |            |           |  [ET-XXX] |            |            |
     |            |           |  (Medium) |            |            |
  2  |            |           |           |  [ET-XXX]  |            |
     |            |           |           |  (Medium)  |            |
  1  |            |           |           |            |            |
     +------------+-----------+-----------+------------+------------+
           1           2           3           4            5
                             Likelihood
```

*[Replace placeholder technology IDs and positions with actual assessed technologies. Use the residual likelihood and impact scores from Section 10.1 to determine placement.]*

**Heat Map Legend:**

| Zone | Risk Rating | Cell Scores | Management Action |
|---|---|---|---|
| Red | Critical | 20–25 | Immediate escalation; mandatory treatment |
| Orange | High | 12–19 | Escalation to Head of Technology Risk; treatment plan required |
| Yellow | Medium | 6–11 | Management attention; treatment plan at discretion |
| Green | Low | 1–5 | Accept or monitor |

---

### Appendix F — Assessment Evidence Index

*Maintain a complete index of evidence collected during this assessment. Evidence must be retained for a minimum of [X] years in accordance with [Organization Name]'s records retention policy and must be available for inspection by BNM supervisors or internal auditors upon request.*

| Evidence ID | Technology ID | Evidence Type | Description | Source / Custodian | Date Collected | Storage Location | Retention Expiry |
|---|---|---|---|---|---|---|---|
| EV-001 | [ET-XXX] | [Vendor Assessment Report / Security Scan / Control Test / Interview Notes / System Documentation / Regulatory Correspondence / Other] | [Brief description of the evidence item] | [Name / Team who provided or collected the evidence] | [DD/MM/YYYY] | [Document Management System reference / SharePoint path] | [DD/MM/YYYY] |
| EV-002 | [ET-XXX] | [Type] | [Description] | [Source] | [Date] | [Location] | [Expiry] |
| EV-003 | [ET-XXX] | [Type] | [Description] | [Source] | [Date] | [Location] | [Expiry] |

---

*End of Document*

---

**Document Control:** This document is subject to the review and approval process defined in Section 15. The most recent approved version is the authoritative version. Printed copies are uncontrolled — verify currency against the document management system before relying on a printed copy.

| Field | Value |
|---|---|
| **Document ID** | [Document ID] |
| **Current Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Last Updated** | [DD/MM/YYYY] |