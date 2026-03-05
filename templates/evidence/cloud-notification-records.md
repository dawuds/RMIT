# Cloud Notification Records

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

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the official record of all cloud adoption notifications submitted to Bank Negara Malaysia (BNM) in accordance with the **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 16.4**. It provides a structured, auditable trail of notification activities undertaken by [Organization Name] prior to and following the adoption, material change, or decommissioning of cloud services.

This record demonstrates [Organization Name]'s ongoing compliance with BNM's cloud oversight requirements and supports regulatory examination, internal audit, and governance review processes.

### 1.2 Scope

This document applies to:

- All cloud service adoptions, expansions, or material changes affecting systems within the regulatory perimeter of [Organization Name]
- All cloud deployment types, including Public, Private, Hybrid, and Community Cloud environments
- All cloud service models, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)
- Notifications submitted to BNM via the Regulatory Reporting Portal or other prescribed submission channels
- All business units, subsidiaries, and third-party managed cloud environments under the operational control of [Organization Name]

### 1.3 Regulatory Basis

| Regulation | Clause / Section | Description |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | 16.4 | Cloud notification and prior approval requirements for financial institutions |
| BNM RMiT | 16.1 – 16.3 | Cloud governance, risk assessment, and vendor due diligence obligations |
| Personal Data Protection Act 2010 (PDPA) | Part III | Data processing and transfer obligations applicable to cloud-stored personal data |
| NACSA Cloud Security Guidelines | Applicable Sections | National cybersecurity standards for cloud deployment in critical sectors |

---

## 2. Asset / Item Identification

*Provide a unique identifier and descriptive details for the cloud asset or workload that is the subject of this notification. Each notification record must reference a distinct, identifiable asset or system.*

| Field | Details |
|---|---|
| **Asset / System Name** | [Name of the cloud asset, workload, or system] |
| **Asset ID** | [Internal asset register ID, e.g., CA-2024-001] |
| **Business System Description** | [Brief description of the system's function and business purpose] |
| **Application / Service Owner** | [Name of the application or service owner] |
| **Business Unit** | [Owning business unit or department] |
| **Related Project / Initiative** | [Project name or initiative driving the cloud adoption, if applicable] |
| **Environment Type** | [ ] Production  [ ] Non-Production  [ ] Disaster Recovery  [ ] Development / Test |
| **Hosting Transition Type** | [ ] New Cloud Adoption  [ ] Migration from On-Premises  [ ] Material Change  [ ] Decommissioning |

---

## 3. Classification and Categorisation

*Classify the asset and the data it processes according to [Organization Name]'s data classification policy and BNM's prescribed sensitivity tiers. Accurate classification determines the level of regulatory scrutiny and notification obligations applicable.*

### 3.1 Data Classification

| Classification Level | Description | Applicable? |
|---|---|---|
| Public | Information intended for public release | [ ] Yes  [ ] No |
| Internal | Non-sensitive internal operational data | [ ] Yes  [ ] No |
| Confidential | Sensitive business or customer data requiring access controls | [ ] Yes  [ ] No |
| Restricted / Secret | Highly sensitive data subject to strictest controls (e.g., MPC keys, supervisory data) | [ ] Yes  [ ] No |

**Assigned Classification:** [Classification Level]

### 3.2 Data Categories Processed

- [ ] Personal Data (as defined under PDPA 2010)
- [ ] Financial Data (account, transaction, credit records)
- [ ] Sensitive Personal Data (health, biometric, identity documents)
- [ ] Regulatory / Supervisory Data
- [ ] Intellectual Property / Proprietary Business Data
- [ ] Non-personal / Anonymised Data
- [ ] Other: [Specify]

### 3.3 System Criticality

| Criterion | Rating | Justification |
|---|---|---|
| **Business Criticality** | [ ] Critical  [ ] High  [ ] Medium  [ ] Low | [Justification] |
| **Impact if Unavailable** | [ ] Severe  [ ] Significant  [ ] Moderate  [ ] Minor | [Justification] |
| **Regulatory Significance** | [ ] Yes  [ ] No | [Justification] |
| **Customer-Facing** | [ ] Yes  [ ] No | [Justification] |

---

## 4. Owner and Custodian

*Identify all individuals and teams accountable for the governance, operation, and security of this cloud asset. A clear ownership structure is required for regulatory accountability under RMiT Clause 16.4.*

| Role | Name | Department | Contact |
|---|---|---|---|
| **Asset Owner** | [Name] | [Department] | [Email / Phone] |
| **Cloud Architecture Lead** | [Name] | Technology / Cloud Centre of Excellence | [Email / Phone] |
| **System Custodian (Technical)** | [Name] | [Department] | [Email / Phone] |
| **Information Security Officer** | [Name] | Information Security | [Email / Phone] |
| **Data Protection Officer** | [Name] | Compliance / Legal | [Email / Phone] |
| **Risk Owner** | [Name] | [Department] | [Email / Phone] |
| **Vendor Relationship Manager** | [Name] | Vendor / Procurement Management | [Email / Phone] |

**Escalation Contact for BNM Queries:** [Name], [Title], [Email], [Phone]

---

## 5. Cloud Service Model and Deployment Type

*Specify the cloud service and deployment model applicable to this asset. This information is used to determine BNM's notification category and the applicable shared responsibility obligations under RMiT.*

### 5.1 Cloud Service Provider (CSP)

| Field | Details |
|---|---|
| **Cloud Service Provider Name** | [e.g., Microsoft Azure, Amazon Web Services, Google Cloud Platform, Alibaba Cloud] |
| **CSP Country of Incorporation** | [Country] |
| **CSP Local Entity / Representative** | [Local entity name, if applicable] |
| **Contract Reference** | [Contract ID or agreement number] |
| **Contract Commencement Date** | [Date] |
| **Contract Expiry / Renewal Date** | [Date] |
| **BNM-Registered Third-Party Service Provider** | [ ] Yes  [ ] No  [ ] Pending Registration |

### 5.2 Service Model

| Service Model | Description | Applicable? |
|---|---|---|
| **IaaS** (Infrastructure as a Service) | Virtualized compute, storage, and networking resources | [ ] |
| **PaaS** (Platform as a Service) | Managed runtime, middleware, and development platforms | [ ] |
| **SaaS** (Software as a Service) | Fully managed software applications delivered via the cloud | [ ] |
| **Hybrid** | Combination of the above models | [ ] |

**Selected Service Model:** [Service Model]

**Service Description:** [Describe the specific cloud service(s) being consumed, e.g., Azure Kubernetes Service for containerised workload hosting]

### 5.3 Deployment Model

| Deployment Model | Description | Applicable? |
|---|---|---|
| **Public Cloud** | Shared multi-tenant infrastructure owned by CSP | [ ] |
| **Private Cloud** | Dedicated single-tenant infrastructure | [ ] |
| **Hybrid Cloud** | Integration of public and private cloud environments | [ ] |
| **Community Cloud** | Shared infrastructure for a defined community (e.g., financial sector cloud) | [ ] |

**Selected Deployment Model:** [Deployment Model]

---

## 6. Data Residency Requirements

*Document the geographic location of all data storage and processing activities associated with this cloud asset. BNM requires that certain categories of data remain within Malaysia unless explicit approval is obtained for cross-border transfer.*

### 6.1 Primary Data Location

| Data Category | Storage Region | Country | Data Centre Location (if known) |
|---|---|---|---|
| [Data Category 1] | [Region, e.g., Southeast Asia] | [Country, e.g., Malaysia] | [DC name / city] |
| [Data Category 2] | [Region] | [Country] | [DC name / city] |
| [Data Category 3] | [Region] | [Country] | [DC name / city] |

### 6.2 Secondary / Backup Data Location

| Backup Type | Storage Region | Country | Data Centre Location |
|---|---|---|---|
| [Backup Type, e.g., Geo-redundant backup] | [Region] | [Country] | [DC name / city] |

### 6.3 Cross-Border Data Transfer Assessment

| Question | Response |
|---|---|
| Does data processing occur outside Malaysia? | [ ] Yes  [ ] No |
| If yes, which countries are involved? | [List countries] |
| Has BNM approval been obtained for cross-border transfer? | [ ] Yes  [ ] No  [ ] Not Required |
| BNM Approval Reference (if applicable) | [Reference number and date] |
| Is a Data Transfer Impact Assessment (DTIA) completed? | [ ] Yes  [ ] No  [ ] In Progress |
| DTIA Reference | [Document reference] |
| Are adequate safeguards in place (e.g., SCCs, adequacy decisions)? | [ ] Yes  [ ] No |

**Data Residency Compliance Statement:** [Provide a concise statement confirming compliance with BNM data residency requirements or documenting any approved exceptions]

---

## 7. Shared Responsibility Matrix

*Define the allocation of security and operational responsibilities between [Organization Name] and the Cloud Service Provider. This matrix must align with the selected service model and be reviewed at each material change.*

### 7.1 Responsibility Allocation

*The following matrix uses "FI" ([Organization Name] / Financial Institution), "CSP" (Cloud Service Provider), and "Shared" to denote responsibility ownership.*

| Domain | Control Area | IaaS | PaaS | SaaS | Notes |
|---|---|---|---|---|---|
| **Physical Security** | Data centre physical access | CSP | CSP | CSP | |
| **Network Infrastructure** | Underlying network hardware | CSP | CSP | CSP | |
| **Network Controls** | Firewall rules, segmentation | Shared | Shared | CSP | FI configures virtual network controls |
| **Hypervisor / Virtualisation** | Virtualisation layer security | CSP | CSP | CSP | |
| **Operating System** | OS patching and hardening | FI | CSP | CSP | |
| **Runtime / Middleware** | Application runtime environment | FI | CSP | CSP | |
| **Application Code** | Application development and security | FI | FI | CSP | |
| **Data Encryption (at rest)** | Encryption of stored data | FI | Shared | Shared | FI manages encryption keys (BYOK) |
| **Data Encryption (in transit)** | TLS/mTLS configuration | FI | Shared | CSP | |
| **Identity and Access Management** | User access provisioning and MFA | FI | FI | Shared | |
| **Privileged Access Management** | Privileged account controls | FI | FI | FI | |
| **Security Monitoring / SIEM** | Log collection and alerting | FI | Shared | Shared | |
| **Incident Response** | Detection, containment, remediation | Shared | Shared | Shared | SLA-bound CSP obligations |
| **Business Continuity / DR** | RTO/RPO configuration and testing | FI | Shared | CSP | |
| **Compliance and Audit** | Regulatory reporting and audit logs | FI | FI | FI | FI retains full regulatory responsibility |
| **Data Classification** | Tagging and classification of data | FI | FI | FI | |
| **Vendor Risk Management** | Fourth-party / sub-processor oversight | FI | FI | FI | |

**Matrix Version:** [Version]
**Last Reviewed:** [Date]
**Reviewed By:** [Name, Role]

### 7.2 Key Contractual Obligations Confirmed

- [ ] Right to audit provisions included in contract
- [ ] Incident notification SLA confirmed (≤ [X] hours for critical incidents)
- [ ] Sub-processor disclosure obligations confirmed
- [ ] Data deletion / portability obligations confirmed
- [ ] Business continuity and disaster recovery obligations defined

---

## 8. Notification Trigger Criteria

*Document the specific circumstances that triggered the BNM notification requirement for this record. RMiT Clause 16.4 specifies the conditions under which financial institutions must notify BNM prior to or following cloud adoption activities.*

### 8.1 Trigger Classification

*Select all triggers applicable to this notification record.*

| Trigger Category | Trigger Description | Applicable? |
|---|---|---|
| **New Cloud Adoption** | First-time adoption of a cloud service for a business function | [ ] Yes  [ ] No |
| **Material Change — Service** | Change in cloud service model (e.g., IaaS to SaaS) or provider | [ ] Yes  [ ] No |
| **Material Change — Data** | Migration of additional data categories, including personal or sensitive data | [ ] Yes  [ ] No |
| **Material Change — Geography** | Change in data residency or introduction of cross-border data transfer | [ ] Yes  [ ] No |
| **Material Change — Scale** | Significant expansion of cloud footprint (volume, criticality, users) | [ ] Yes  [ ] No |
| **Material Change — Contract** | Renewal, renegotiation, or termination of CSP agreement | [ ] Yes  [ ] No |
| **Security Incident** | Cloud-related security breach or incident requiring regulatory disclosure | [ ] Yes  [ ] No |
| **Decommissioning** | Planned migration away from or termination of a cloud service | [ ] Yes  [ ] No |
| **BNM Ad-hoc Request** | Notification in response to a specific BNM supervisory request | [ ] Yes  [ ] No |

**Primary Trigger Selected:** [Trigger Category]

**Trigger Description:** [Describe in detail the specific event or decision that generated this notification requirement]

### 8.2 Internal Trigger Assessment

| Assessment Item | Details |
|---|---|
| **Date Trigger Event Identified** | [Date] |
| **Identified By** | [Name, Role] |
| **Internal Governance Decision** | [Reference to Board / EXCO / Cloud Governance Committee decision, if applicable] |
| **Risk Assessment Reference** | [Cloud Risk Assessment document ID] |
| **Vendor Due Diligence Reference** | [VDD document ID] |
| **Privacy Impact Assessment Reference** | [PIA document ID, if personal data is involved] |

---

## 9. Notification Timeline Requirements

*Record the mandatory notification timelines applicable to this trigger event under RMiT Clause 16.4 and document compliance with those timelines.*

### 9.1 Applicable Timeline Requirements

*Consult BNM's RMiT policy and any applicable supervisory guidance to confirm the notification window. The table below reflects standard notification obligations — verify against the latest BNM issuance.*

| Notification Type | Regulatory Timeline | [Organization Name] Internal Deadline | Status |
|---|---|---|---|
| **Prior Notification (Pre-adoption)** | [e.g., At least 30 calendar days before go-live] | [Internal deadline] | [ ] Met  [ ] Not Applicable  [ ] At Risk |
| **Post-Adoption Notification** | [e.g., Within 14 calendar days of go-live] | [Internal deadline] | [ ] Met  [ ] Not Applicable  [ ] At Risk |
| **Material Change Notification** | [e.g., As soon as practicable, within [X] days] | [Internal deadline] | [ ] Met  [ ] Not Applicable  [ ] At Risk |
| **Incident-Triggered Notification** | [e.g., Within 24 hours for critical incidents] | [Internal deadline] | [ ] Met  [ ] Not Applicable  [ ] At Risk |
| **Annual Cloud Inventory Submission** | [e.g., By 31 March each year] | [Internal deadline] | [ ] Met  [ ] Not Applicable  [ ] At Risk |

### 9.2 Notification Submission Record

| Field | Details |
|---|---|
| **Notification Reference Number** | [BNM-assigned or internal reference, e.g., BNM-CLOUD-2024-001] |
| **Submission Date** | [Date submitted to BNM] |
| **Submission Method** | [ ] BNM Regulatory Reporting Portal  [ ] Formal Letter  [ ] Email  [ ] Other: [Specify] |
| **Submitted By** | [Name, Title] |
| **BNM Acknowledgement Received** | [ ] Yes  [ ] No  [ ] Pending |
| **BNM Acknowledgement Reference** | [Reference number, if issued] |
| **BNM Acknowledgement Date** | [Date] |
| **BNM Approval / Non-Objection Required** | [ ] Yes  [ ] No |
| **BNM Approval Reference** | [Reference number, if applicable] |
| **BNM Approval Date** | [Date, if applicable] |
| **Any BNM Conditions Imposed** | [ ] Yes  [ ] No — If Yes: [Describe conditions] |
| **Condition Compliance Status** | [Compliant / In Progress / Overdue] |
| **Go-Live / Implementation Date** | [Actual or planned date] |

### 9.3 Supporting Evidence Log

*List all documents submitted to BNM or retained as supporting evidence for this notification.*

| Document Title | Document ID | Date | Submitted to BNM? | Location |
|---|---|---|---|---|
| Cloud Risk Assessment | [ID] | [Date] | [ ] Yes  [ ] No | [File path / DMS location] |
| Vendor Due Diligence Report | [ID] | [Date] | [ ] Yes  [ ] No | [File path / DMS location] |
| Data Flow Diagram | [ID] | [Date] | [ ] Yes  [ ] No | [File path / DMS location] |
| Privacy Impact Assessment | [ID] | [Date] | [ ] Yes  [ ] No | [File path / DMS location] |
| Shared Responsibility Matrix | [ID] | [Date] | [ ] Yes  [ ] No | [File path / DMS location] |
| Business Continuity / DR Plan | [ID] | [Date] | [ ] Yes  [ ] No | [File path / DMS location] |
| CSP Contract / SLA | [ID] | [Date] | [ ] Yes  [ ] No | [File path / DMS location] |
| [Additional Document] | [ID] | [Date] | [ ] Yes  [ ] No | [File path / DMS location] |

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability for cloud notification activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Cloud Architecture Lead | CISO / InfoSec | DPO / Compliance | Business / Asset Owner | Risk Management | Technology Risk | Board / EXCO | BNM |
|---|---|---|---|---|---|---|---|---|
| Identify notification trigger event | R | C | C | R | C | C | I | — |
| Conduct cloud risk assessment | R | C | C | A | R | C | — | — |
| Complete vendor due diligence | R | C | C | A | C | C | — | — |
| Prepare notification package | R | C | A | C | C | C | — | — |
| Internal governance approval | C | C | C | C | A | C | A | — |
| Submit notification to BNM | A | C | R | I | I | C | I | — |
| Track BNM acknowledgement and response | A | I | R | I | I | C | I | R |
| Implement BNM-imposed conditions | R | R | A | R | C | C | I | I |
| Maintain notification records | A | I | C | I | I | I | — | — |
| Quarterly notification register review | A | C | C | C | C | C | I | — |
| Annual cloud inventory submission | A | C | R | C | C | C | I | — |
| Report non-compliance or delays | C | C | A | I | R | C | A | — |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial document creation |
| [Version] | [Date] | [Author Name, Role] | [Description of changes] |
| [Version] | [Date] | [Author Name, Role] | [Description of changes] |

### 11.2 Document Review Schedule

| Review Type | Frequency | Next Due Date | Responsible Party |
|---|---|---|---|
| Per-Event Review | Upon each cloud adoption trigger | As triggered | Cloud Architecture Lead |
| Periodic Register Review | Quarterly | [Date] | Cloud Architecture Lead |
| Annual Comprehensive Review | Annually | [Date] | Cloud Architecture Lead / CISO |
| Regulatory Change Review | Upon BNM policy update | As applicable | Compliance / DPO |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Cloud Architecture Lead | [Name] | _________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | _________________ | [Date] |
| Data Protection Officer (DPO) | [Name] | _________________ | [Date] |
| Chief Risk Officer (CRO) | [Name] | _________________ | [Date] |
| Chief Technology Officer (CTO) / CIO | [Name] | _________________ | [Date] |
| Chief Compliance Officer | [Name] | _________________ | [Date] |

---

## 12. References

| Reference | Document / Clause | Relevance |
|---|---|---|
| BNM RMiT Policy Document | **Clause 16.4** | Cloud adoption notification requirements for licensed financial institutions |
| BNM RMiT Policy Document | Clauses 16.1–16.3 | Cloud governance framework, risk assessment, and vendor due diligence |
| BNM RMiT Policy Document | Clause 10 | Technology risk management and outsourcing oversight |
| BNM Guidelines on Outsourcing | Applicable sections | Third-party and cloud vendor risk management obligations |
| Personal Data Protection Act 2010 (PDPA) | Part III, Part IV | Processing of personal data in cloud environments |
| NACSA Cloud Security Guidelines | All applicable sections | National cybersecurity requirements for cloud deployments in critical infrastructure |
| [Organization Name] Cloud Governance Policy | [Policy ID] | Internal cloud adoption governance and approval framework |
| [Organization Name] Data Classification Policy | [Policy ID] | Data sensitivity tiers and handling requirements |
| [Organization Name] Vendor Risk Management Policy | [Policy ID] | Third-party due diligence and ongoing monitoring requirements |
| [Organization Name] Information Security Policy | [Policy ID] | Baseline information security controls applicable to cloud environments |

---

## Appendices

### Appendix A — Cloud Notification Register (Summary)

*A consolidated register of all BNM cloud notifications submitted by [Organization Name]. This appendix is updated upon each notification event and reviewed quarterly.*

| Notification Ref | Asset / System Name | CSP | Service Model | Trigger Type | Submission Date | BNM Ack. Date | Approval Status | Go-Live Date | Conditions |
|---|---|---|---|---|---|---|---|---|---|
| [BNM-CLOUD-YYYY-001] | [System Name] | [CSP] | [IaaS/PaaS/SaaS] | [Trigger] | [Date] | [Date] | [Approved / Noted / Pending] | [Date] | [None / Specify] |
| [BNM-CLOUD-YYYY-002] | [System Name] | [CSP] | [IaaS/PaaS/SaaS] | [Trigger] | [Date] | [Date] | [Approved / Noted / Pending] | [Date] | [None / Specify] |

### Appendix B — BNM Notification Submission Template

*Attach or reference the standardised notification template prescribed by BNM for cloud adoption submissions. Update this appendix if BNM issues a revised template.*

- **Template Title:** [BNM Cloud Notification Submission Form]
- **Template Version:** [Version]
- **Issued By:** Bank Negara Malaysia
- **Effective Date:** [Date]
- **Location:** [File path / DMS location / BNM portal URL]

### Appendix C — Cloud Risk Assessment Summary

*Attach a summary or reference to the Cloud Risk Assessment conducted prior to this notification. The full Cloud Risk Assessment should be retained and available for regulatory inspection.*

- **Risk Assessment Document ID:** [ID]
- **Assessment Date:** [Date]
- **Conducted By:** [Name, Role]
- **Overall Risk Rating:** [ ] High  [ ] Medium  [ ] Low
- **Key Residual Risks:** [Summary of key residual risks accepted]
- **Full Document Location:** [File path / DMS location]

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and primary financial regulator of Malaysia |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology and cyber risk for financial institutions |
| **CSP** | Cloud Service Provider — a third-party organization offering cloud computing services |
| **IaaS** | Infrastructure as a Service — cloud delivery of virtualized compute, storage, and networking |
| **PaaS** | Platform as a Service — cloud delivery of managed runtime and development platforms |
| **SaaS** | Software as a Service — cloud delivery of fully managed software applications |
| **BYOK** | Bring Your Own Key — an encryption model in which the financial institution manages its own encryption keys |
| **DPO** | Data Protection Officer — the individual responsible for PDPA compliance within [Organization Name] |
| **DTIA** | Data Transfer Impact Assessment — an assessment of risks associated with cross-border data transfers |
| **NACSA** | National Cyber Security Agency — Malaysia's national authority for cybersecurity |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework |
| **RTO / RPO** | Recovery Time Objective / Recovery Point Objective — business continuity metrics for system recovery |
| **SLA** | Service Level Agreement — contractual commitments on service availability and performance |

---

*This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name] and regulatory review by Bank Negara Malaysia. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.*

*Document ID: [Document ID] | Version: 1.0 | © [Year] [Organization Name]*