# Shared Responsibility Documentation

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

This document defines the shared responsibility model between **[Organization Name]** and each cloud service provider (CSP) engaged for technology and data processing activities. It establishes a clear delineation of security, compliance, and operational obligations to ensure that no responsibility gap exists between the organization and its cloud providers.

This document is maintained in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.50**, which requires financial institutions to document and manage shared responsibilities arising from the use of cloud services. It supports the organization's obligations under the **Personal Data Protection Act 2010 (PDPA)** and relevant **NACSA** guidelines where applicable.

### 1.1 Applicability

*List the organizational units, systems, and cloud environments to which this document applies.*

- **Applicable Business Units:** [Business Unit Names]
- **Applicable Systems and Workloads:** [System / Application Names]
- **Cloud Providers in Scope:** [Cloud Provider Names, e.g., AWS, Azure, Google Cloud]
- **Environments Covered:** [Production / Staging / Development / Disaster Recovery]

### 1.2 Objectives

- Establish a documented and approved shared responsibility model for each cloud provider.
- Ensure accountability for security controls, compliance obligations, and operational duties is unambiguous.
- Support audit, regulatory examination, and internal review requirements under BNM RMiT.
- Identify and remediate any gaps in responsibility coverage.

---

## 2. Assessment Scope and Criteria

*Describe the boundaries of the assessment, the services evaluated, and the criteria used to determine responsibility allocation between the organization and the cloud provider.*

### 2.1 Assessment Scope

| Item | Details |
|---|---|
| **Cloud Provider** | [Cloud Provider Name, e.g., Amazon Web Services (AWS)] |
| **Services Assessed** | [e.g., EC2, S3, RDS, IAM, CloudTrail] |
| **Service Model** | [IaaS / PaaS / SaaS] |
| **Deployment Model** | [Public / Private / Hybrid / Community Cloud] |
| **Assessment Period** | [Start Date] to [End Date] |
| **Assessed By** | [Name / Team] |
| **Assessment Version** | [Version Number] |

### 2.2 Assessment Criteria

*Define the standards, frameworks, and policy requirements used to evaluate and assign responsibilities.*

The assessment criteria are based on the following:

- **BNM RMiT Clause 10.50** — Cloud service risk management and shared responsibility
- **CSP Responsibility Model Documentation** — Published responsibility matrix from [Cloud Provider Name]
- **ISO/IEC 27017** — Code of practice for information security controls for cloud services
- **[Organization Name] Cloud Security Policy** — [Policy Reference Number]
- **PDPA 2010** — Data processor and controller obligations
- **[Any additional internal or regulatory criteria]**

### 2.3 Criteria Weighting and Prioritization

*If criteria are weighted or tiered by criticality, document the approach here.*

| Criteria Category | Weighting / Priority | Rationale |
|---|---|---|
| Data Security & Encryption | [High / Medium / Low] | [Rationale] |
| Access & Identity Management | [High / Medium / Low] | [Rationale] |
| Incident Response | [High / Medium / Low] | [Rationale] |
| Business Continuity | [High / Medium / Low] | [Rationale] |
| Regulatory Compliance | [High / Medium / Low] | [Rationale] |
| Physical Security | [High / Medium / Low] | [Rationale] |

---

## 3. Methodology

*Describe the process, tools, and approach used to conduct the shared responsibility assessment and produce this document.*

### 3.1 Assessment Approach

The shared responsibility assessment was conducted using the following approach:

1. **Document Review** — Review of the cloud provider's published shared responsibility model, service agreements, and security documentation (e.g., AWS Shared Responsibility Model, Azure Security Center documentation).
2. **Contract and SLA Analysis** — Review of the Master Service Agreement (MSA), Data Processing Agreement (DPA), and Service Level Agreements (SLAs) with [Cloud Provider Name].
3. **Control Mapping** — Mapping of cloud provider controls against [Organization Name]'s internal security control framework and BNM RMiT requirements.
4. **Gap Analysis** — Identification of controls that are neither fully covered by the CSP nor currently implemented by [Organization Name].
5. **Stakeholder Consultation** — Interviews and workshops conducted with [Cloud Architecture Lead / IT Security / Compliance / Business Units].
6. **Responsibility Assignment** — Allocation of each control domain to the CSP, [Organization Name], or a shared arrangement.

### 3.2 Tools and References Used

| Tool / Reference | Purpose |
|---|---|
| [Cloud Provider] Shared Responsibility Documentation | Baseline CSP responsibility model |
| [Organization] Cloud Security Policy [Ref No.] | Internal policy alignment |
| NIST SP 800-145 | Cloud computing definition and model reference |
| CSA Cloud Controls Matrix (CCM) v4 | Control framework mapping |
| [Internal GRC Tool, if applicable] | Control tracking and documentation |

### 3.3 Limitations and Assumptions

*Document any known limitations of the assessment or assumptions made during the process.*

- [Assumption or limitation 1, e.g., "This assessment is based on CSP documentation current as of [Date]. Changes to CSP service models may require reassessment."]
- [Assumption or limitation 2]
- [Assumption or limitation 3]

---

## 4. Findings and Ratings

*Summarize the key findings from the shared responsibility assessment, including any identified gaps and their associated risk ratings.*

### 4.1 Summary of Findings

| Finding ID | Control Domain | Finding Description | Responsibility Gap | Risk Rating | Status |
|---|---|---|---|---|---|
| F-001 | [e.g., Data Encryption at Rest] | [Brief description of finding] | [CSP / Organization / Shared] | [Critical / High / Medium / Low] | [Open / In Remediation / Closed] |
| F-002 | [e.g., Vulnerability Management] | [Brief description of finding] | [CSP / Organization / Shared] | [Critical / High / Medium / Low] | [Open / In Remediation / Closed] |
| F-003 | [e.g., Incident Notification SLA] | [Brief description of finding] | [CSP / Organization / Shared] | [Critical / High / Medium / Low] | [Open / In Remediation / Closed] |
| [Add rows as required] | | | | | |

### 4.2 Risk Rating Definitions

| Rating | Description |
|---|---|
| **Critical** | Responsibility gap that could directly lead to a material breach, regulatory violation, or systemic failure. Immediate remediation required. |
| **High** | Significant gap with potential for substantial impact on data confidentiality, integrity, or availability. Remediation required within 30 days. |
| **Medium** | Moderate gap with limited direct impact. Remediation required within 90 days. |
| **Low** | Minor gap or administrative finding. Remediation to be scheduled within the next review cycle. |

### 4.3 Overall Assessment Rating

| Cloud Provider | Overall Rating | Basis for Rating |
|---|---|---|
| [Cloud Provider Name] | [Satisfactory / Needs Improvement / Unsatisfactory] | [Summary rationale] |

### 4.4 Remediation Plan

*Document agreed remediation actions for open findings.*

| Finding ID | Remediation Action | Responsible Party | Target Completion Date | Evidence Required |
|---|---|---|---|---|
| F-001 | [Remediation action description] | [Name / Team] | [Date] | [e.g., Configuration screenshot, policy update] |
| F-002 | [Remediation action description] | [Name / Team] | [Date] | [e.g., Proof of implementation] |
| [Add rows as required] | | | | |

---

## 5. Cloud Service Model and Deployment Type

*Document the specific cloud service and deployment model(s) in use and their implications for responsibility allocation.*

### 5.1 Cloud Provider Profile

| Attribute | Details |
|---|---|
| **Cloud Provider Name** | [e.g., Amazon Web Services / Microsoft Azure / Google Cloud Platform] |
| **Provider Headquarters** | [Country] |
| **Malaysian Operations / Local Presence** | [Yes / No — details] |
| **Regulatory Certifications Held** | [e.g., ISO 27001, SOC 2 Type II, CSA STAR, MyCyberSecurity Certification] |
| **Data Centre Regions Used** | [e.g., ap-southeast-1 (Singapore), ap-east-1 (Hong Kong)] |
| **Account / Subscription ID** | [Account or Subscription Reference] |

### 5.2 Service Model Classification

*Describe whether the service is consumed as IaaS, PaaS, or SaaS, and summarize the responsibility implications of each model.*

| Service Model | Definition | Examples in Use | Responsibility Implication |
|---|---|---|---|
| **IaaS** (Infrastructure as a Service) | CSP manages physical infrastructure, networking, and hypervisor. Organization manages OS, middleware, data, and applications. | [e.g., EC2, Azure VMs] | Organization retains significant security responsibility. |
| **PaaS** (Platform as a Service) | CSP manages infrastructure and runtime. Organization manages applications and data. | [e.g., AWS RDS, Azure App Service] | Shared model; CSP manages underlying platform controls. |
| **SaaS** (Software as a Service) | CSP manages the full stack. Organization manages data, access, and configuration. | [e.g., Microsoft 365, Salesforce] | Organization's responsibility is primarily data governance and access management. |

**Primary model in use for this engagement:** [IaaS / PaaS / SaaS / Hybrid]

### 5.3 Deployment Model

| Attribute | Details |
|---|---|
| **Deployment Type** | [Public Cloud / Private Cloud / Community Cloud / Hybrid Cloud] |
| **Tenancy Model** | [Multi-tenant / Single-tenant / Dedicated Instance] |
| **Network Connectivity** | [Public Internet / Dedicated Private Link / ExpressRoute / AWS Direct Connect] |
| **Justification for Model Selected** | [Brief rationale for deployment model choice] |

---

## 6. Data Residency Requirements

*Document data residency obligations, CSP commitments, and the organization's verification approach to ensure compliance with BNM RMiT and PDPA requirements.*

### 6.1 Regulatory Data Residency Obligations

Under **BNM RMiT** and **PDPA 2010**, [Organization Name] is required to ensure that customer data and material data remain within approved jurisdictions and that cross-border data transfers are governed by appropriate legal mechanisms.

| Obligation | Regulatory Basis | Requirement |
|---|---|---|
| Customer Data Domicile | BNM RMiT Clause 10.50 | [Specify requirement, e.g., Data must be stored and processed within Malaysia or approved jurisdictions] |
| Cross-border Transfer Controls | PDPA 2010, Section 129 | [Data transfer only to jurisdictions with equivalent protection] |
| Material System Data | BNM RMiT | [Specify any restrictions on where core banking or material system data may reside] |

### 6.2 CSP Data Residency Commitments

| Data Category | Approved Storage Region(s) | CSP Contractual Commitment | Verification Mechanism |
|---|---|---|---|
| [e.g., Customer Personal Data] | [e.g., Malaysia / Singapore] | [Yes / No — reference DPA clause] | [e.g., CSP compliance report, Data Processing Agreement] |
| [e.g., Transaction Data] | [e.g., Malaysia only] | [Yes / No — reference DPA clause] | [e.g., CSP portal configuration, audit logs] |
| [e.g., System Logs] | [e.g., Malaysia / Singapore] | [Yes / No] | [e.g., Configuration documentation] |
| [e.g., Backup Data] | [Region(s)] | [Yes / No] | [e.g., Backup policy, CSP region settings] |

### 6.3 Data Transfer Mechanisms

*Document the legal and technical mechanisms used to govern any cross-border data transfers.*

| Transfer Scenario | Destination | Legal Mechanism | Status |
|---|---|---|---|
| [e.g., Disaster recovery replication] | [Country / Region] | [e.g., Standard Contractual Clauses, DPA] | [Approved / Pending / Not Applicable] |
| [e.g., Log analytics processing] | [Country / Region] | [e.g., Data Processing Agreement] | [Approved / Pending / Not Applicable] |

### 6.4 Data Residency Verification

*Describe how [Organization Name] verifies and monitors ongoing compliance with data residency requirements.*

- **Verification Method:** [e.g., Quarterly review of CSP data residency reports, cloud configuration audits]
- **Monitoring Tool:** [e.g., AWS Config, Azure Policy, manual review]
- **Last Verified:** [Date]
- **Next Verification Due:** [Date]
- **Findings:** [Any deviations or issues identified]

---

## 7. Shared Responsibility Matrix

*This matrix defines the allocation of security, operational, and compliance responsibilities between [Organization Name] and [Cloud Provider Name] across all applicable control domains.*

**Legend:**

| Symbol | Meaning |
|---|---|
| **O** | Organization ([Organization Name]) is fully responsible |
| **C** | Cloud Provider (CSP) is fully responsible |
| **S** | Shared responsibility — both parties have defined obligations |
| **N/A** | Not applicable to this service model or deployment |

### 7.1 Responsibility Matrix — [Cloud Provider Name] ([Service Model])

| Control Domain | Control Activity | CSP Responsibility | Org Responsibility | Allocation | Notes |
|---|---|---|---|---|---|
| **Physical Security** | Data centre physical access controls | Fully managed by CSP | Rely on CSP | **C** | Covered under CSP ISO 27001 / SOC 2 |
| **Physical Security** | Hardware disposal and decommissioning | Fully managed by CSP | Verify via audit reports | **C** | |
| **Network Security** | Perimeter network controls (firewalls, DDoS) | CSP manages underlying network | Org configures security groups / NSGs | **S** | Org configures virtual network controls |
| **Network Security** | Virtual network segmentation | CSP provides capability | Org designs and implements | **O** | |
| **Network Security** | Network traffic monitoring | CSP provides VPC Flow Logs / NSG Flow Logs | Org must enable and monitor | **S** | |
| **Identity & Access Management** | Physical host identity management | CSP managed | Not applicable | **C** | |
| **Identity & Access Management** | Cloud console access (IAM/RBAC) | CSP provides IAM service | Org configures users, roles, and policies | **O** | MFA enforcement is organization's responsibility |
| **Identity & Access Management** | Application-level authentication | Not applicable | Org implements | **O** | |
| **Data Security** | Encryption of data at rest (physical media) | CSP encrypts underlying storage | Org must enable and manage encryption keys | **S** | Key management is Org's responsibility |
| **Data Security** | Encryption of data in transit | CSP provides TLS endpoints | Org must enforce TLS usage | **S** | |
| **Data Security** | Key Management Service (KMS) | CSP provides KMS capability | Org manages key policies and rotation | **O** | |
| **Data Security** | Data classification and labelling | Not applicable | Org responsible | **O** | |
| **Vulnerability Management** | Hypervisor / host OS patching | Fully managed by CSP | Not applicable | **C** | |
| **Vulnerability Management** | Guest OS patching (IaaS) | Not applicable | Org responsible | **O** | Applicable for IaaS only |
| **Vulnerability Management** | Application vulnerability management | Not applicable | Org responsible | **O** | |
| **Vulnerability Management** | Container image scanning | CSP provides registry scanning capability | Org must enable and act on findings | **S** | |
| **Logging & Monitoring** | Physical infrastructure logging | CSP managed | Not applicable | **C** | |
| **Logging & Monitoring** | Cloud control plane logging (e.g., CloudTrail, Activity Log) | CSP provides capability | Org must enable and retain logs | **S** | BNM RMiT requires log retention per policy |
| **Logging & Monitoring** | Application and workload logging | Not applicable | Org responsible | **O** | |
| **Logging & Monitoring** | Security event monitoring and alerting | CSP provides native tooling | Org must configure and monitor | **O** | |
| **Incident Response** | CSP infrastructure incidents | CSP manages and notifies | Org monitors CSP communications | **S** | Org must maintain escalation contacts |
| **Incident Response** | Cloud account / workload incidents | CSP provides forensic tooling | Org leads investigation and response | **O** | |
| **Incident Response** | Notification to BNM / regulators | Not applicable | Org responsible | **O** | |
| **Business Continuity & DR** | Data centre redundancy | CSP manages availability zones | Org designs for multi-AZ / multi-region | **S** | |
| **Business Continuity & DR** | Backup and recovery | CSP provides backup services | Org configures, tests, and verifies | **O** | |
| **Business Continuity & DR** | RTO / RPO compliance | Not applicable | Org defines and verifies | **O** | |
| **Compliance & Audit** | CSP regulatory certifications (ISO, SOC, CSA STAR) | CSP maintains and provides evidence | Org reviews and retains for audit | **S** | |
| **Compliance & Audit** | Organization-specific regulatory compliance | Not applicable | Org responsible | **O** | Includes BNM RMiT, PDPA |
| **Compliance & Audit** | Third-party audit access | CSP provides reports (SOC 2, etc.) | Org performs third-party assessments | **S** | |
| **Configuration Management** | Hypervisor and platform configuration | CSP managed | Not applicable | **C** | |
| **Configuration Management** | Cloud resource configuration (IaC, policies) | Not applicable | Org responsible | **O** | |
| **Configuration Management** | Configuration drift monitoring | CSP provides tools | Org implements and enforces | **S** | |

### 7.2 Responsibility Gap Register

*Document any areas where responsibility is unclear, contested, or where current coverage is insufficient.*

| Gap ID | Control Domain | Description of Gap | Risk | Proposed Resolution | Target Date |
|---|---|---|---|---|---|
| G-001 | [Control Domain] | [Description of the gap in responsibility coverage] | [High / Medium / Low] | [Agreed resolution or compensating control] | [Date] |
| G-002 | [Control Domain] | [Description] | [High / Medium / Low] | [Resolution] | [Date] |
| [Add rows as required] | | | | | |

---

## 8. Roles and Responsibilities

*This section defines the organizational roles responsible for maintaining, reviewing, and acting upon this Shared Responsibility Documentation.*

### 8.1 RACI Matrix

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Cloud Architecture Lead | IT Security Team | Compliance Officer | Business Unit Owner | Technology Risk Officer | Senior Management |
|---|---|---|---|---|---|---|
| Develop and maintain this document | R | C | C | I | C | I |
| Approve this document | C | C | C | I | C | A |
| Conduct shared responsibility assessment | R | R | C | C | C | I |
| Monitor CSP responsibility fulfilment | R | R | I | I | C | I |
| Manage remediation of identified gaps | A | R | C | C | R | I |
| Report compliance status to management | I | I | R | I | A | I |
| Review and update upon cloud change events | R | C | C | I | C | I |
| Escalate unresolved gaps to regulator | I | I | A | I | R | R |
| Conduct periodic review (quarterly) | R | C | C | I | C | I |

### 8.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Cloud Architecture Lead (Document Owner) | [Name] | [Department] | [Email] |
| IT Security Manager | [Name] | [Department] | [Email] |
| Compliance Officer | [Name] | [Department] | [Email] |
| Technology Risk Officer | [Name] | [Department] | [Email] |
| CSP Account Manager — [Cloud Provider] | [Name] | [Cloud Provider] | [Email] |
| CSP Security Contact — [Cloud Provider] | [Name / Team] | [Cloud Provider] | [Email / Portal] |

---

## 9. Review and Approval

### 9.1 Review Triggers

This document shall be reviewed under the following conditions:

- **Scheduled Review:** Quarterly, or at minimum annually.
- **Per-Event Review Triggers:**
  - Onboarding a new cloud provider or cloud service.
  - Material change to an existing cloud service, deployment model, or service scope.
  - Significant change to the CSP's published shared responsibility model.
  - Following a security incident or audit finding relating to cloud responsibilities.
  - Regulatory guidance update from BNM, NACSA, or other relevant authorities.
  - Organizational restructuring affecting cloud ownership or accountability.

### 9.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Cloud Architecture Lead | [Name] | [Signature] | [Date] |
| IT Security Manager | [Name] | [Signature] | [Date] |
| Technology Risk Officer | [Name] | [Signature] | [Date] |
| Chief Information Officer (CIO) | [Name] | [Signature] | [Date] |
| Chief Risk Officer (CRO) / Compliance Officer | [Name] | [Signature] | [Date] |

---

## 10. References

The following regulatory documents, standards, and policies are referenced in this artifact:

| Reference | Title | Relevance |
|---|---|---|
| BNM RMiT, Clause 10.50 | Risk Management in Technology — Cloud Services | Primary regulatory mandate for shared responsibility documentation |
| BNM RMiT, Clause 10.51–10.55 | Risk Management in Technology — Cloud Risk Controls | Supporting clauses on cloud risk management |
| PDPA 2010, Section 129 | Personal Data Protection Act 2010 — Transfer of Personal Data | Cross-border data transfer obligations |
| ISO/IEC 27017:2015 | Code of practice for information security controls for cloud services | International control framework for cloud security |
| ISO/IEC 27001:2022 | Information security management systems | Overarching ISMS standard |
| NIST SP 800-145 | The NIST Definition of Cloud Computing | Cloud service and deployment model definitions |
| CSA Cloud Controls Matrix v4 | Cloud Security Alliance — Cloud Controls Matrix | Control mapping framework |
| [Organization] Cloud Security Policy | [Policy Reference Number] | Internal cloud security requirements |
| [Organization] Information Security Policy | [Policy Reference Number] | Internal information security baseline |
| [Cloud Provider] Shared Responsibility Model | [URL or Document Reference — internal copy] | CSP's published responsibility allocation |
| [Cloud Provider] Data Processing Agreement | [Agreement Reference] | Contractual data processing obligations |

---

## 11. Appendices

### Appendix A — Cloud Provider Shared Responsibility Model (CSP-Published)

*Attach or reference the official published shared responsibility model documentation from [Cloud Provider Name]. This should be the version current at the time of this document's review and should be retained as evidence.*

- **Document Title:** [e.g., AWS Shared Responsibility Model]
- **Version / Date:** [Version and date of CSP document]
- **Source:** [Internal document repository reference — do not include live external URLs]
- **Attachment:** [Attached as Appendix A-1 / Stored at: (internal path or document reference)]

---

### Appendix B — Cloud Service Agreement and DPA Summary

*Summarise the key obligations and commitments extracted from the contractual agreements with [Cloud Provider Name] that are relevant to shared responsibility.*

| Agreement | Reference | Key Obligation | [Org] Commitment | CSP Commitment |
|---|---|---|---|---|
| Master Service Agreement | [MSA Ref No.] | [Key obligation] | [Org's commitment] | [CSP's commitment] |
| Data Processing Agreement | [DPA Ref No.] | [Key obligation] | [Org's commitment] | [CSP's commitment] |
| Service Level Agreement | [SLA Ref No.] | [Key obligation, e.g., 99.9% uptime] | [Org's monitoring obligation] | [CSP's performance commitment] |

---

### Appendix C — Evidence Register

*List the evidence collected to support the findings and responsibility allocations documented in this artifact.*

| Evidence ID | Description | Source | Date Collected | Retained At |
|---|---|---|---|---|
| E-001 | [e.g., CSP ISO 27001 Certificate of Compliance] | [Cloud Provider] | [Date] | [Document repository path] |
| E-002 | [e.g., SOC 2 Type II Report — [Cloud Provider]] | [Cloud Provider] | [Date] | [Document repository path] |
| E-003 | [e.g., Cloud configuration export — IAM policy review] | [Internal — IT Security] | [Date] | [Document repository path] |
| E-004 | [e.g., Data residency confirmation letter from CSP] | [Cloud Provider] | [Date] | [Document repository path] |
| [Add rows as required] | | | | |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and primary financial regulator of Malaysia |
| **CSP** | Cloud Service Provider — a third-party entity providing cloud computing services |
| **DPA** | Data Processing Agreement — a contract governing the processing of personal data |
| **IaaS** | Infrastructure as a Service — cloud model where the provider delivers virtualized computing infrastructure |
| **MSA** | Master Service Agreement — the overarching contractual agreement with a vendor |
| **NACSA** | National Cyber Security Agency — Malaysia's national authority for cybersecurity |
| **PDPA** | Personal Data Protection Act 2010 — Malaysia's primary data protection legislation |
| **PaaS** | Platform as a Service — cloud model where the provider manages the platform layer |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk for financial institutions |
| **RPO** | Recovery Point Objective — maximum acceptable data loss measured in time |
| **RTO** | Recovery Time Objective — maximum acceptable system downtime |
| **SaaS** | Software as a Service — cloud model where the provider delivers the full application stack |
| **SLA** | Service Level Agreement — contractual commitment on service performance |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. All printed copies are uncontrolled; refer to the document management system for the current version.*

*Document ID: [Document ID] | Version: 1.0 | Owner: Cloud Architecture Lead | [Organization Name]*