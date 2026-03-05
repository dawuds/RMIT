# Cloud Risk Assessment Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Assessment Subject** | [Cloud Service Provider / Service Name] |
| **Assessment Period** | [Assessment Start Date] to [Assessment End Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Quarterly] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

> **Document Control Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution of this document is strictly prohibited. All printed copies are considered uncontrolled. Refer to the Document Management System for the latest version.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Cloud Service Overview](#4-cloud-service-overview)
5. [Assessment Scope and Criteria](#5-assessment-scope-and-criteria)
6. [Assessment Methodology](#6-assessment-methodology)
7. [Cloud Service Model and Deployment Type](#7-cloud-service-model-and-deployment-type)
8. [Data Residency Requirements](#8-data-residency-requirements)
9. [Shared Responsibility Matrix](#9-shared-responsibility-matrix)
10. [Risk Findings and Ratings](#10-risk-findings-and-ratings)
11. [Risk Treatment Plan](#11-risk-treatment-plan)
12. [Control Assessment](#12-control-assessment)
13. [Vendor Due Diligence](#13-vendor-due-diligence)
14. [Residual Risk Summary and Acceptance](#14-residual-risk-summary-and-acceptance)
15. [Roles and Responsibilities](#15-roles-and-responsibilities)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Executive Summary

*Provide a concise executive-level summary of the cloud risk assessment. This section should be self-contained and understandable without reference to the rest of the document. Summarize the cloud service being assessed, the overall risk posture, key findings, and the recommended disposition.*

### 1.1 Assessment Overview

| Field | Details |
|---|---|
| **Cloud Service Provider (CSP)** | [CSP Name, e.g., Microsoft Azure / AWS / Google Cloud / Alibaba Cloud] |
| **Service / Platform Name** | [Service Name, e.g., Azure Blob Storage / AWS S3] |
| **Business Unit Requesting** | [Business Unit / Department] |
| **Business Justification** | [Brief description of business need] |
| **Proposed Go-Live Date** | [Proposed Go-Live Date] |
| **Assessment Lead** | [Name, Title] |
| **Assessment Date** | [Date] |
| **Overall Inherent Risk Rating** | [Critical / High / Medium / Low] |
| **Overall Residual Risk Rating** | [Critical / High / Medium / Low] |
| **Assessment Outcome** | [Approved / Conditionally Approved / Rejected / Deferred] |

### 1.2 Key Findings Summary

*Summarize the most significant risk findings identified during the assessment. Limit to the top five to seven material findings that require senior management attention.*

| # | Finding | Risk Domain | Inherent Rating | Residual Rating | Status |
|---|---|---|---|---|---|
| F-001 | [Finding Title] | [Domain, e.g., Data Security] | [High] | [Medium] | [Open / Mitigated] |
| F-002 | [Finding Title] | [Domain, e.g., Vendor Lock-in] | [Medium] | [Low] | [Open / Mitigated] |
| F-003 | [Finding Title] | [Domain, e.g., Data Residency] | [High] | [Medium] | [Open / Mitigated] |
| F-004 | [Finding Title] | [Domain, e.g., Access Control] | [Medium] | [Low] | [Open / Mitigated] |
| F-005 | [Finding Title] | [Domain, e.g., Business Continuity] | [High] | [High] | [Open / Mitigated] |

### 1.3 Recommended Disposition

*State the recommended course of action clearly, including any conditions that must be satisfied prior to or following adoption.*

**Recommendation:** [Approve / Conditionally Approve / Reject / Defer]

**Conditions / Remediation Required (if applicable):**

- [ ] [Condition 1 — e.g., Implement multi-factor authentication before go-live]
- [ ] [Condition 2 — e.g., Execute Data Processing Agreement with CSP within 30 days]
- [ ] [Condition 3 — e.g., Confirm data residency within Malaysia or approved jurisdiction]
- [ ] [Condition 4 — e.g., Complete penetration testing within 90 days of deployment]

**Risk Acceptance Authority:** [Name / Committee — e.g., Technology Risk Committee / Board Risk Committee]

---

## 2. Purpose and Scope

### 2.1 Purpose

This Cloud Risk Assessment Report documents the structured evaluation of technology, security, operational, legal, and compliance risks associated with the adoption of cloud services by [Organization Name] in accordance with the requirements of Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 10.50** and associated provisions governing cloud computing arrangements.

This report serves as the formal risk management artifact to:

- Satisfy BNM RMiT regulatory requirements for cloud service risk assessment prior to adoption and on an ongoing quarterly review basis;
- Provide senior management and the Board with a structured, evidence-based view of the risks associated with the proposed cloud service;
- Document the controls framework, shared responsibilities, and residual risk treatment decisions;
- Serve as an audit-ready record of due diligence performed by [Organization Name] as a licensed financial institution under BNM's regulatory purview;
- Establish a baseline for ongoing monitoring and periodic reassessment of the cloud service arrangement.

### 2.2 Scope

*Define the precise boundaries of this assessment, including what is in scope and explicitly what is excluded. Clarity of scope is essential for audit purposes.*

#### 2.2.1 In Scope

This assessment covers:

- **Cloud Service:** [Full name and description of the cloud service being assessed]
- **Cloud Service Provider:** [CSP Name and registered entity]
- **Deployment Regions / Data Centres:** [List of regions, e.g., Southeast Asia, Singapore, Malaysia]
- **Data Categories Processed:** [e.g., Customer PII, Transaction Data, Internal Financial Records]
- **Business Processes Supported:** [e.g., Core Banking, Customer Onboarding, Analytics]
- **Organizational Units Affected:** [List of affected departments or business units]
- **Integration Points:** [Other systems or services that interface with the cloud service]
- **User Population:** [Internal users, customers, third parties — estimated count]
- **Contract and SLA:** [Reference to CSP Master Agreement, SLA version and date]

#### 2.2.2 Out of Scope

The following are explicitly excluded from this assessment:

- [Item excluded — e.g., On-premise infrastructure supporting the cloud integration layer]
- [Item excluded — e.g., Third-party applications hosted on the CSP environment but managed by separate vendors]
- [Item excluded — e.g., Non-production environments unless data classification warrants inclusion]
- [Item excluded — e.g., Physical security of CSP data centres, which is addressed separately through CSP audit reports]

### 2.3 Assessment Triggers

*Indicate what triggered this assessment. Check all that apply.*

- [ ] New cloud service adoption (initial assessment)
- [ ] Significant change to existing cloud service
- [ ] Quarterly periodic review
- [ ] Regulatory direction or audit finding
- [ ] Material incident or breach involving the cloud service
- [ ] CSP change in terms, ownership, or jurisdiction
- [ ] Internal risk threshold breach

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Framework

*This section establishes the regulatory basis for the assessment. Do not modify the regulatory references without consulting the Compliance function.*

This assessment is conducted pursuant to the following regulatory requirements and internal policies:

#### 3.1.1 Bank Negara Malaysia — Risk Management in Technology (RMiT)

| Clause | Title | Requirement Summary |
|---|---|---|
| **10.50** | Cloud Computing — Risk Assessment | Financial institutions must conduct a comprehensive risk assessment for all cloud service adoptions, encompassing operational, security, legal, and compliance risks. |
| **10.51** | Cloud Computing — Due Diligence | Requires ongoing due diligence on cloud service providers including financial health, certifications, and subcontracting arrangements. |
| **10.52** | Cloud Computing — Contractual Safeguards | Mandates specific contractual provisions with CSPs including audit rights, data portability, and exit management. |
| **10.53** | Cloud Computing — Data Management | Requirements on data classification, segregation, residency, and encryption for data hosted in cloud environments. |
| **10.54** | Cloud Computing — Exit Strategy | Requirement for documented exit strategies and periodic exit testing for material cloud arrangements. |
| **10.55** | Cloud Computing — Ongoing Monitoring | Mandates continuous monitoring of cloud service performance, security events, and risk posture. |
| **10.56** | Cloud Computing — Incident Management | Requirements for incident response coordination with CSPs and notification obligations. |
| **7.1 – 7.10** | Outsourcing Risk Management | Applicable where cloud adoption constitutes a material outsourcing arrangement. |

#### 3.1.2 Other Applicable Regulations

| Regulation | Issuing Authority | Relevant Provisions |
|---|---|---|
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Data processing obligations, cross-border transfer restrictions, security safeguards |
| Guidelines on Digital Banking | BNM | Technology risk requirements for digital banking licensees |
| Financial Services Act 2013 (FSA) | BNM | Section 47 — Material outsourcing notification |
| Islamic Financial Services Act 2013 (IFSA) | BNM | [If applicable] |
| National Cybersecurity Policy | NACSA | Critical national information infrastructure requirements |
| Payment Systems Policy Document | BNM | [If applicable — payment-related cloud services] |

#### 3.1.3 Internal Policies

| Policy | Document Reference | Version |
|---|---|---|
| Cloud Governance Policy | [Policy ID] | [Version] |
| Information Security Policy | [Policy ID] | [Version] |
| Technology Risk Management Framework | [Policy ID] | [Version] |
| Data Classification and Handling Policy | [Policy ID] | [Version] |
| Outsourcing Risk Management Policy | [Policy ID] | [Version] |
| Business Continuity Management Policy | [Policy ID] | [Version] |
| Third Party Risk Management Framework | [Policy ID] | [Version] |

### 3.2 Material Outsourcing Determination

*Determine whether the cloud arrangement constitutes a material outsourcing arrangement under BNM guidelines. This determination affects notification and approval obligations.*

| Criterion | Assessment |
|---|---|
| Does the service support a critical business function? | [Yes / No] |
| Would failure of the service significantly impact operations? | [Yes / No] |
| Does the service process or store customer data? | [Yes / No] |
| Is the service integral to regulated activities? | [Yes / No] |
| **Material Outsourcing Determination** | **[Yes — BNM notification required / No]** |
| **BNM Notification Reference (if applicable)** | [Reference number / date of notification] |

---

## 4. Cloud Service Overview

### 4.1 Service Description

*Provide a detailed technical and functional description of the cloud service being assessed. This should be sufficient for a reader unfamiliar with the service to understand its nature and purpose.*

**Service Name:** [Full name of service]

**CSP Name:** [Cloud Service Provider legal entity name]

**CSP Headquarters:** [Country of CSP headquarters]

**CSP Regional Entity (if applicable):** [Local/regional entity name and registration number]

**Service Description:**

[Provide a 3–5 paragraph description of the cloud service, including its primary functions, technical architecture, key features, and the business purpose it fulfills for [Organization Name]. Include information about how the service will be integrated into [Organization Name]'s technology ecosystem.]

### 4.2 Business Case Summary

| Element | Details |
|---|---|
| **Business Objective** | [Describe the primary business objective this cloud service addresses] |
| **Expected Benefits** | [Cost savings, scalability, capability uplift, time-to-market improvement, etc.] |
| **Estimated Annual Cost** | [MYR amount or range] |
| **Contract Duration** | [e.g., 3 years with annual renewal option] |
| **Critical Dependency** | [Yes / No — If yes, describe nature of dependency] |
| **Alternative Solutions Considered** | [List alternatives evaluated and rationale for CSP selection] |
| **Technology Owner** | [Name and title of internal technology owner] |
| **Business Sponsor** | [Name and title of business sponsor] |

### 4.3 CSP Corporate Profile

| Field | Details |
|---|---|
| **Legal Name** | [CSP Full Legal Entity Name] |
| **Registration Number** | [Company registration number in jurisdiction of incorporation] |
| **Jurisdiction of Incorporation** | [Country] |
| **Ultimate Parent Company** | [Parent company name if applicable] |
| **CSP Credit Rating** | [Rating agency and current rating, e.g., Moody's: Aa3] |
| **Years in Operation** | [Years] |
| **Relevant Certifications** | [ISO 27001, SOC 2 Type II, CSA STAR, PCI-DSS, etc.] |
| **Publicly Listed** | [Yes / No — if yes, stock exchange and ticker] |
| **CSP Financial Health Assessment** | [Stable / Watch / Concern — with brief rationale] |

---

## 5. Assessment Scope and Criteria

### 5.1 Assessment Objectives

*Detail the specific objectives this risk assessment aims to achieve. Each objective should map to a regulatory requirement or internal policy obligation.*

This assessment is designed to achieve the following objectives:

1. **Identify and evaluate risks** associated with the adoption of the cloud service across all relevant risk domains, including technology, cybersecurity, operational, legal, compliance, and concentration risk.

2. **Assess the adequacy of controls** implemented by both [Organization Name] and the CSP to mitigate identified risks to an acceptable residual level.

3. **Evaluate alignment with regulatory requirements** under BNM RMiT Clause 10.50 and related provisions, as well as the Personal Data Protection Act 2010 and other applicable regulations.

4. **Determine data residency compliance** to ensure that personal and financial data is processed and stored in jurisdictions consistent with Malaysian regulatory requirements and [Organization Name]'s data governance policies.

5. **Assess the adequacy of the shared responsibility model** and confirm that all critical security and operational responsibilities are clearly allocated between [Organization Name] and the CSP.

6. **Evaluate business continuity and exit strategy** provisions to ensure [Organization Name] can maintain operations and recover data in the event of CSP failure, service disruption, or contract termination.

7. **Document residual risk and obtain formal risk acceptance** from the appropriate governance authority prior to adoption or continuation of the cloud service.

### 5.2 Risk Domain Framework

*This assessment evaluates risks across the following domains. Each domain is assessed independently and contributes to the overall risk rating.*

| # | Risk Domain | Description | Regulatory Basis |
|---|---|---|---|
| 1 | **Technology Risk** | Risks related to system reliability, integration complexity, technical obsolescence, and technology dependencies | RMiT 10.50, 10.55 |
| 2 | **Cybersecurity Risk** | Risks related to data breaches, unauthorized access, malware, vulnerabilities, and security control adequacy | RMiT 10.50, 10.53 |
| 3 | **Operational Risk** | Risks related to service availability, performance, change management, and incident response | RMiT 10.50, 10.56 |
| 4 | **Data and Privacy Risk** | Risks related to data classification, residency, sovereignty, encryption, and PDPA compliance | RMiT 10.53, PDPA 2010 |
| 5 | **Legal and Compliance Risk** | Risks related to contractual gaps, regulatory compliance, cross-border data transfer, and audit rights | RMiT 10.52, FSA 2013 |
| 6 | **Vendor / Third Party Risk** | Risks related to CSP financial stability, subcontracting, concentration, and lock-in | RMiT 10.51 |
| 7 | **Business Continuity Risk** | Risks related to disaster recovery, exit planning, data portability, and service continuity | RMiT 10.54 |
| 8 | **Concentration Risk** | Risks arising from over-reliance on a single CSP or technology platform | RMiT 10.50 |
| 9 | **Governance and Compliance Risk** | Risks related to oversight, accountability, policy alignment, and regulatory reporting | RMiT 10.50 |

### 5.3 Risk Rating Criteria

#### 5.3.1 Likelihood Scale

| Rating | Score | Definition |
|---|---|---|
| **Rare** | 1 | Event is unlikely to occur; less than once every 5 years |
| **Unlikely** | 2 | Event may occur occasionally; once every 2–5 years |
| **Possible** | 3 | Event might occur; once every 1–2 years |
| **Likely** | 4 | Event will probably occur; once or more per year |
| **Almost Certain** | 5 | Event is expected to occur; multiple times per year |

#### 5.3.2 Impact Scale

| Rating | Score | Financial Impact | Operational Impact | Reputational Impact |
|---|---|---|---|---|
| **Negligible** | 1 | < MYR 100,000 | Minimal disruption, < 1 hour | No media coverage |
| **Minor** | 2 | MYR 100,000 – 1M | Short disruption, 1–4 hours | Limited local coverage |
| **Moderate** | 3 | MYR 1M – 10M | Significant disruption, 4–24 hours | Moderate coverage, customer impact |
| **Major** | 4 | MYR 10M – 50M | Severe disruption, 1–7 days | Significant national coverage |
| **Catastrophic** | 5 | > MYR 50M | Critical disruption, > 7 days | Systemic reputational damage |

#### 5.3.3 Risk Rating Matrix

| | **Negligible (1)** | **Minor (2)** | **Moderate (3)** | **Major (4)** | **Catastrophic (5)** |
|---|---|---|---|---|---|
| **Almost Certain (5)** | Medium | High | High | Critical | Critical |
| **Likely (4)** | Low | Medium | High | High | Critical |
| **Possible (3)** | Low | Medium | Medium | High | High |
| **Unlikely (2)** | Low | Low | Medium | Medium | High |
| **Rare (1)** | Low | Low | Low | Medium | Medium |

#### 5.3.4 Risk Acceptance Thresholds

| Residual Risk Rating | Acceptance Authority | Required Action |
|---|---|---|
| **Critical** | Board Risk Committee | Mandatory escalation; service adoption not recommended without extraordinary mitigation |
| **High** | Technology Risk Committee + CRO | Formal risk acceptance with documented compensating controls and remediation timeline |
| **Medium** | Head of Technology Risk | Risk acceptance with documented treatment plan and monitoring schedule |
| **Low** | Technology Risk Manager | Standard monitoring and periodic review |

### 5.4 Assessment Boundaries and Exclusions

*Explicitly state what is not assessed in this review and the rationale for each exclusion.*

| Excluded Item | Rationale for Exclusion | Risk Owner |
|---|---|---|
| [Excluded item 1] | [Rationale] | [Owner] |
| [Excluded item 2] | [Rationale] | [Owner] |
| [Excluded item 3] | [Rationale] | [Owner] |

---

## 6. Assessment Methodology

### 6.1 Methodology Overview

*Describe the approach, methods, and tools used to conduct this assessment. The methodology must be sufficiently documented to enable an independent auditor to understand and replicate the assessment.*

This risk assessment was conducted using [Organization Name]'s **Cloud Risk Assessment Methodology**, which incorporates the following internationally recognized frameworks and standards:

| Framework / Standard | Application in This Assessment |
|---|---|
| **ISO/IEC 27001:2022** | Information security control requirements and assessment criteria |
| **ISO/IEC 27017:2015** | Cloud-specific information security controls |
| **ISO/IEC 27018:2019** | Protection of personally identifiable information in public clouds |
| **NIST SP 800-144** | Guidelines on security and privacy in public cloud computing |
| **CSA Cloud Controls Matrix (CCM) v4** | Cloud security control framework for vendor assessment |
| **BNM RMiT Policy Document** | Primary regulatory compliance framework |
| **ENISA Cloud Computing Risk Assessment** | Risk identification and assessment guidance |
| **CIS Benchmarks** | Configuration baseline assessment |

### 6.2 Assessment Activities

*Detail the specific activities performed during the assessment. Include dates, participants, and outputs for each activity.*

| # | Activity | Description | Date(s) | Participants | Output |
|---|---|---|---|---|---|
| 1 | **Kickoff Meeting** | Alignment on scope, objectives, and timeline | [Date] | [Names/Roles] | Meeting minutes |
| 2 | **Document Review** | Review of CSP documentation, contracts, SLAs, audit reports | [Date] | [Names/Roles] | Document review checklist |
| 3 | **CSP Security Questionnaire** | Completion and review of standardized security questionnaire | [Date] | [Names/Roles] | Completed questionnaire |
| 4 | **Technical Architecture Review** | Assessment of cloud architecture, integration design, and security configuration | [Date] | [Names/Roles] | Architecture review notes |
| 5 | **Data Flow Mapping** | Mapping of data flows between [Organization Name] and CSP | [Date] | [Names/Roles] | Data flow diagram |
| 6 | **Control Assessment** | Evaluation of CSP and [Organization Name] controls against criteria | [Date] | [Names/Roles] | Control assessment matrix |
| 7 | **Vendor Interview / Workshop** | Structured interviews with CSP representatives | [Date] | [Names/Roles] | Interview transcript |
| 8 | **Penetration Test Review** | Review of recent penetration test results (CSP-provided) | [Date] | [Names/Roles] | Pen test review summary |
| 9 | **Legal and Contractual Review** | Assessment of contract terms against regulatory requirements | [Date] | [Names/Roles] | Legal review memo |
| 10 | **Risk Rating and Findings** | Consolidation of findings, inherent and residual risk rating | [Date] | [Names/Roles] | Risk register |
| 11 | **Draft Report Review** | Internal review of draft assessment report | [Date] | [Names/Roles] | Reviewed draft |
| 12 | **Management Presentation** | Presentation of findings to Technology Risk Committee | [Date] | [Names/Roles] | Presentation deck |
| 13 | **Final Report and Approval** | Finalization and formal approval | [Date] | [Names/Roles] | This report |

### 6.3 Evidence Sources

*List all documents, systems, and sources reviewed as part of this assessment.*

| # | Evidence Source | Type | Date / Version | Obtained From |
|---|---|---|---|---|
| E-001 | CSP ISO 27001 Certificate | Certification | [Date] | CSP / Publicly Available |
| E-002 | CSP SOC 2 Type II Report | Audit Report | [Date] | CSP (via NDA) |
| E-003 | CSP Master Agreement / Terms of Service | Contract | [Version/Date] | Procurement |
| E-004 | Service Level Agreement (SLA) | Contract | [Version/Date] | Procurement |
| E-005 | Data Processing Agreement (DPA) | Contract | [Version/Date] | Procurement / Legal |
| E-006 | CSP Security and Compliance Documentation | Technical | [Date] | CSP Portal |
| E-007 | CSP Penetration Test Summary | Security Report | [Date] | CSP (via NDA) |
| E-008 | CSP Business Continuity and DR Documentation | BCP/DR | [Date] | CSP |
| E-009 | CSP Subprocessor List | Vendor List | [Date] | CSP |
| E-010 | [Organization Name] Data Classification Policy | Policy | [Version/Date] | Internal |
| E-011 | CSP Security Questionnaire Responses | Questionnaire | [Date] | CSP |
| E-012 | Cloud Architecture Diagram | Technical | [Date] | [Internal / CSP] |
| E-013 | Data Flow Diagram | Technical | [Date] | [Internal / CSP] |
| E-014 | CSP Financial Statements | Financial | [Year] | Public / CSP |
| E-015 | Previous Assessment Report (if applicable) | Prior Assessment | [Date] | Internal |

### 6.4 Assessment Limitations

*Document any constraints, limitations, or caveats that affected the assessment.*

The following limitations were identified during the conduct of this assessment:

1. **[Limitation 1]:** [Description — e.g., CSP declined to provide full penetration test report; summary only was provided. This limitation was partially mitigated by review of the CSP's ISO 27001 certificate and SOC 2 Type II report.]

2. **[Limitation 2]:** [Description — e.g., On-site inspection of CSP data centres was not conducted. CSP-provided third-party audit reports were relied upon as compensating evidence.]

3. **[Limitation 3]:** [Description — e.g., Assessment was conducted based on documentation as at [date]; configuration changes made after this date are not reflected.]

4. **[Limitation 4]:** [Description — e.g., Subprocessor risk assessments were not individually performed; reliance was placed on CSP's contractual obligations to its subprocessors.]

---

## 7. Cloud Service Model and Deployment Type

### 7.1 Service Model Classification

*Classify the cloud service using the NIST SP 800-145 service model taxonomy. The service model determines the boundary of [Organization Name]'s responsibility and the applicable control framework.*

| Attribute | Details |
|---|---|
| **Service Model** | [Infrastructure as a Service (IaaS) / Platform as a Service (PaaS) / Software as a Service (SaaS) / Function as a Service (FaaS) / Other] |
| **NIST Definition** | [Provide the NIST definition applicable to the selected service model] |
| **Applicable CSA CCM Domain** | [List applicable CSA CCM control domains for this service model] |

#### 7.1.1 Service Model Risk Implications

*Describe the risk implications of the selected service model, including the degree of control retained by [Organization Name] versus delegated to the CSP.*

**Selected Service Model: [IaaS / PaaS / SaaS / FaaS]**

| Control Layer | [Organization Name] Responsibility | CSP Responsibility | Notes |
|---|---|---|---|
| Data | [Full / Shared / None] | [Full / Shared / None] | [Notes] |
| Application | [Full / Shared / None] | [Full / Shared / None] | [Notes] |
| Runtime | [Full / Shared / None] | [Full / Shared / None] | [Notes] |
| Middleware | [Full / Shared / None] | [Full / Shared / None] | [Notes] |
| Operating System | [Full / Shared / None] | [Full / Shared / None] | [Notes] |
| Virtualisation | [Full / Shared / None] | [Full / Shared / None] | [Notes] |
| Servers | [Full / Shared / None] | [Full / Shared / None] | [Notes] |
| Storage | [Full / Shared / None] | [Full / Shared / None] | [Notes] |
| Networking | [Full / Shared / None] | [Full / Shared / None] | [Notes] |
| Physical Security | [Full / Shared / None] | [Full / Shared / None] | [Notes] |
| Data Centre Facilities | [Full / Shared / None] | [Full / Shared / None] | [Notes] |

### 7.2 Deployment Model Classification

*Classify the cloud deployment model. The deployment model significantly affects the risk profile, particularly regarding multi-tenancy, data isolation, and regulatory compliance.*

| Attribute | Details |
|---|---|
| **Deployment Model** | [Public Cloud / Private Cloud / Community Cloud / Hybrid Cloud / Multi-Cloud] |
| **Multi-Tenancy** | [Yes — Shared Infrastructure / Yes — Logical Isolation / No — Dedicated Instance] |
| **Isolation Mechanism** | [Describe how tenant isolation is achieved, e.g., VPC, dedicated hardware, logical segmentation] |

#### 7.2.1 Deployment Architecture Description

*Provide a written description of the deployment architecture, supplemented by a reference to the architecture diagram in the appendices.*

[Describe the deployment architecture in 2–4 paragraphs. Include information on how [Organization Name]'s environment is isolated from other tenants, how data flows between [Organization Name]'s on-premise systems and the cloud environment, how access is controlled, and how the architecture supports regulatory compliance requirements.]

**Reference:** Refer to **Appendix A — Cloud Architecture Diagram** for the technical architecture diagram.

#### 7.2.2 Key Architectural Risk Considerations

| Consideration | Assessment | Risk Implication |
|---|---|---|
| Multi-tenancy data isolation | [Adequate / Partially Adequate / Inadequate] | [Description] |
| Network segmentation | [Adequate / Partially Adequate / Inadequate] | [Description] |
| Dedicated vs. shared resources | [Dedicated / Shared] | [Description] |
| Encryption in transit | [Yes / No / Partially] | [Description] |
| Encryption at rest | [Yes / No / Partially] | [Description] |
| Key management | [[Organization Name]-managed / CSP-managed / Shared] | [Description] |
| API security | [Adequate / Partially Adequate / Inadequate] | [Description] |
| Logging and monitoring | [Adequate / Partially Adequate / Inadequate] | [Description] |

### 7.3 Technology Stack Assessment

*Describe the technology stack, dependencies, and integration landscape of the cloud service.*

| Component | Technology | Version | Notes |
|---|---|---|---|
| [Component 1, e.g., Compute] | [Technology] | [Version] | [Notes] |
| [Component 2, e.g., Storage] | [Technology] | [Version] | [Notes] |
| [Component 3, e.g., Database] | [Technology] | [Version] | [Notes] |
| [Component 4, e.g., Identity] | [Technology] | [Version] | [Notes] |
| [Component 5, e.g., Networking] | [Technology] | [Version] | [Notes] |
| [Component 6, e.g., API Gateway] | [Technology] | [Version] | [Notes] |
| [Component 7, e.g., Monitoring] | [Technology] | [Version] | [Notes] |

### 7.4 Vendor Lock-in Assessment

*Assess the degree of vendor lock-in and the implications for exit planning and portability.*

| Lock-in Factor | Severity | Description |
|---|---|---|
| **Proprietary APIs** | [High / Medium / Low] | [Describe use of CSP-proprietary APIs and portability implications] |
| **Data Format Dependency** | [High / Medium / Low] | [Describe data format compatibility with alternative providers] |
| **Proprietary Services Used** | [High / Medium / Low] | [List CSP-specific services that have no direct equivalent elsewhere] |
| **Contractual Lock-in** | [High / Medium / Low] | [Describe minimum commitment, termination penalties, data portability clauses] |
| **Skills and Knowledge** | [High / Medium / Low] | [Describe internal skills that are CSP-specific and not transferable] |
| **Cost to Migrate** | [High / Medium / Low] | [Estimated cost/effort to migrate to an alternative provider] |

**Overall Vendor Lock-in Rating:** [High / Medium / Low]

**Mitigation Strategy:** [Describe measures taken to reduce vendor lock-in, e.g., use of open standards, containerization, multi-cloud strategy, data portability provisions in contract]

---

## 8. Data Residency Requirements

### 8.1 Data Classification

*Classify all data that will be processed or stored in the cloud environment. Data classification drives the applicable controls, residency requirements, and regulatory obligations.*

#### 8.1.1 Data Inventory

| Data Category | Classification | Personal Data (PDPA) | Volume (Estimated) | Sensitivity |
|---|---|---|---|---|
| [e.g., Customer Identity Data] | [Restricted / Confidential / Internal / Public] | [Yes / No] | [e.g., 500,000 records] | [Critical / High / Medium / Low] |
| [e.g., Transaction Records] | [Restricted / Confidential / Internal / Public] | [Yes / No] | [e.g., 2M transactions/month] | [Critical / High / Medium / Low] |
| [e.g., Audit Logs] | [Restricted / Confidential / Internal / Public] | [Yes / No] | [e.g., 50GB/month] | [Critical / High / Medium / Low] |
| [e.g., Configuration Data] | [Restricted / Confidential / Internal / Public] | [No] | [e.g., < 1GB] | [Critical / High / Medium / Low] |
| [e.g., Analytics / Derived Data] | [Restricted / Confidential / Internal / Public] | [Yes / No] | [e.g., 10TB] | [Critical / High / Medium / Low] |
| [Add additional rows as required] | | | | |

#### 8.1.2 Most Sensitive Data Category

**Highest Data Classification in Scope:** [Restricted / Confidential]

**Regulatory Implication:** [Describe the regulatory implications of the highest classification level present in the cloud environment, including applicable BNM requirements, PDPA obligations, and any sector-specific requirements.]

### 8.2 Residency Requirements Analysis

*Assess compliance with data residency requirements imposed by Malaysian regulations and [Organization Name]'s internal policies.*

#### 8.2.1 Regulatory Residency Requirements

| Regulation | Requirement | Data Category | Compliance Status |
|---|---|---|---|
| **BNM RMiT 10.53** | Data must reside in Malaysia or jurisdictions with adequate legal protections and BNM approval | All regulated financial data | [Compliant / Non-Compliant / Partially Compliant] |
| **PDPA 2010 — Section 129** | Cross-border transfer of personal data only to countries with adequate protection | Personal data | [Compliant / Non-Compliant / Partially Compliant] |
| **[Organization Name] Data Governance Policy** | [Internal policy requirement on data residency] | [Data categories] | [Compliant / Non-Compliant / Partially Compliant] |
| **[Other applicable regulation]** | [Requirement] | [Data category] | [Compliant / Non-Compliant / Partially Compliant] |

#### 8.2.2 Confirmed Data Processing Locations

| Data Category | Primary Processing Location | Backup / DR Location | Meets Residency Requirements |
|---|---|---|---|
| [Data Category 1] | [Country / Region] | [Country / Region] | [Yes / No / Conditional] |
| [Data Category 2] | [Country / Region] | [Country / Region] | [Yes / No / Conditional] |
| [Data Category 3] | [Country / Region] | [Country / Region] | [Yes / No / Conditional] |
| [Data Category 4] | [Country / Region] | [Country / Region] | [Yes / No / Conditional] |

**Evidence of Residency Commitment:** [Describe how the CSP contractually commits to data residency, e.g., DPA clauses, SLA provisions, CSP portal configuration, technical controls]

#### 8.2.3 Cross-Border Transfer Assessment

| Transfer Scenario | From | To | Basis for Transfer | Adequacy |
|---|---|---|---|---|
| [e.g., Primary data processing] | Malaysia | [Country] | [DPA / Contractual Clauses / Consent] | [Adequate / Requires mitigation] |
| [e.g., Backup replication] | Malaysia | [Country] | [DPA / Contractual Clauses / Consent] | [Adequate / Requires mitigation] |
| [e.g., CSP support access] | Malaysia | [Country] | [DPA / Contractual Clauses / Consent] | [Adequate / Requires mitigation] |
| [e.g., Subprocessor access] | Malaysia | [Country] | [DPA / Contractual Clauses / Consent] | [Adequate / Requires mitigation] |

### 8.3 Data Sovereignty Risks

*Assess risks arising from the legal jurisdiction governing the CSP and its data centres, including the risk of foreign government access to data.*

| Risk | Jurisdiction | Description | Risk Rating | Mitigation |
|---|---|---|---|---|
| **Foreign Government Access** | [Country] | [Describe risk of foreign law (e.g., US CLOUD Act, China cybersecurity law) compelling CSP to disclose data] | [High / Medium / Low] | [Encryption with [Organization Name]-managed keys, contractual notification obligations] |
| **Conflicting Legal Orders** | [Country] | [Describe risk of conflicting legal obligations between Malaysian law and CSP jurisdiction] | [High / Medium / Low] | [Legal opinion obtained, contractual protections] |
| **Subprocessor Jurisdiction** | [Countries] | [Describe jurisdiction risk from CSP subprocessors] | [High / Medium / Low] | [Subprocessor list review, DPA obligations flow-through] |

### 8.4 Encryption and Key Management

*Assess the encryption controls applied to data at rest and in transit, and the key management arrangements.*

| Control | Specification | Control Owner | Assessment |
|---|---|---|---|
| **Encryption at Rest** | [Algorithm, e.g., AES-256] | [[Organization Name] / CSP / Shared] | [Adequate / Inadequate] |
| **Encryption in Transit** | [Protocol, e.g., TLS 1.2+] | [[Organization Name] / CSP / Shared] | [Adequate / Inadequate] |
| **Key Management Service** | [Service name and description] | [[Organization Name] / CSP / Shared] | [Adequate / Inadequate] |
| **Customer-Managed Keys (CMK)** | [Yes / No — If yes, describe] | [[Organization Name]] | [Adequate / Inadequate] |
| **Key Rotation Policy** | [Rotation frequency] | [[Organization Name] / CSP] | [Adequate / Inadequate] |
| **Key Backup and Recovery** | [Describe backup and recovery arrangements] | [[Organization Name] / CSP] | [Adequate / Inadequate] |
| **Hardware Security Module (HSM)** | [Yes / No — If yes, FIPS 140-2 Level] | [[Organization Name] / CSP] | [Adequate / Inadequate] |

---

## 9. Shared Responsibility Matrix

### 9.1 Overview

*The shared responsibility model defines the division of security, operational, and compliance obligations between [Organization Name] and the CSP. This matrix is a critical risk management artifact under BNM RMiT and must be maintained and reviewed at least quarterly.*

The shared responsibility model for this cloud service is based on the **[IaaS / PaaS / SaaS]** service model and the **[Public / Private / Hybrid]** deployment model. The following matrix details the allocation of responsibilities across all key control domains.

**Legend:**
- **[ORG]** = [Organization Name] is solely responsible
- **[CSP]** = Cloud Service Provider is solely responsible
- **[SHARED]** = Jointly responsible; specific sub-responsibilities detailed in the table

### 9.2 Security Responsibilities Matrix

| Control Domain | Control Activity | [Organization Name] | CSP | Notes |
|---|---|---|---|---|
| **Identity and Access Management** | User identity lifecycle management | [ORG] | | [Organization Name] manages all user accounts |
| | Privileged access management | [SHARED] | [SHARED] | [Organization Name] for application; CSP for infrastructure |
| | Multi-factor authentication enforcement | [ORG] | | MFA policy set by [Organization Name] |
| | CSP administrator access control | | [CSP] | Subject to contractual audit rights |
| | Single sign-on / federation | [SHARED] | [SHARED] | Federation configuration by [Organization Name] |
| **Data Security** | Data classification and labelling | [ORG] | | Data classification per [Organization Name] policy |
| | Data encryption at rest | [SHARED] | [SHARED] | Keys managed by [Organization Name]; encryption by CSP |
| | Data encryption in transit | [SHARED] | [SHARED] | TLS enforced at both layers |
| | Data loss prevention (DLP) | [ORG] | | [Organization Name] DLP tools applied |
| | Data masking / tokenization | [ORG] | | Applied by [Organization Name] before upload |
| | Secure data deletion | [SHARED] | [SHARED] | Policy set by [Organization Name]; execution by CSP with certification |
| **Network Security** | Firewall and perimeter controls | [SHARED] | [SHARED] | CSP manages physical; [Organization Name] manages logical (VPC rules) |
| | DDoS protection | | [CSP] | CSP provides DDoS mitigation |
| | Network segmentation / VPC | [ORG] | | [Organization Name] configures VPC and subnets |
| | Intrusion detection / prevention | [SHARED] | [SHARED] | CSP provides infrastructure IDS; [Organization Name] provides application-layer |
| | Web Application Firewall (WAF) | [ORG] | | Deployed and managed by [Organization Name] |
| **Endpoint and Application Security** | Application code security | [ORG] | | [Organization Name] responsible for application code |
| | Application vulnerability management | [ORG] | | [Organization Name] conducts VA/PT |
| | Patch management — OS | [ORG / CSP] | [CSP / ORG] | [Specify based on service model] |
| | Patch management — Application | [ORG] | | [Organization Name] responsible for application patching |
| | Secure configuration (baseline) | [SHARED] | [SHARED] | CSP publishes baselines; [Organization Name] implements |
| **Security Monitoring and Logging** | Security event logging | [SHARED] | [SHARED] | CSP generates infrastructure logs; [Organization Name] generates application logs |
| | Log retention | [ORG] | | Minimum 12 months per RMiT; [Organization Name] ensures compliance |
| | Security information and event management (SIEM) | [ORG] | | [Organization Name] SIEM ingests logs from CSP |
| | Security incident detection and response | [SHARED] | [SHARED] | CSP notifies within [X hours]; [Organization Name] leads response |
| | Threat intelligence integration | [ORG] | | [Organization Name] integrates threat feeds into SIEM |
| **Physical Security** | Data centre physical security | | [CSP] | CSP responsibility; evidenced by third-party audit |
| | Hardware security | | [CSP] | CSP responsibility |
| | Environmental controls | | [CSP] | CSP responsibility |
| **Compliance and Audit** | Regulatory compliance (BNM, PDPA) | [ORG] | | [Organization Name] retains regulatory compliance responsibility |
| | Internal audit of cloud environment | [ORG] | | [Organization Name] exercises contractual audit rights |
| | CSP compliance certifications | | [CSP] | CSP maintains ISO 27001, SOC 2, etc. |
| | Audit log integrity | [SHARED] | [SHARED] | Both parties ensure integrity of respective logs |

### 9.3 Operational Responsibilities Matrix

| Operational Domain | Activity | [Organization Name] | CSP | Notes |
|---|---|---|---|---|
| **Availability and Performance** | Service availability SLA | | [CSP] | Per SLA [reference] |
| | Capacity planning | [SHARED] | [SHARED] | [Organization Name] monitors usage; CSP manages infrastructure capacity |
| | Performance monitoring | [SHARED] | [SHARED] | Both parties monitor respective layers |
| | Scheduled maintenance | | [CSP] | CSP provides advance notice per SLA |
| **Change Management** | Application changes | [ORG] | | [Organization Name] follows change management process |
| | Infrastructure changes | | [CSP] | CSP manages; notification obligations per SLA |
| | Configuration management | [SHARED] | [SHARED] | As per service model delineation |
| **Incident Management** | Application incidents | [ORG] | | [Organization Name] first responder |
| | Infrastructure incidents | | [CSP] | CSP first responder; notification to [Organization Name] per SLA |
| | Security incidents | [SHARED] | [SHARED] | Coordinated response per Incident Response Plan |
| | BNM regulatory notification | [ORG] | | [Organization Name] retains regulatory notification responsibility |
| **Business Continuity** | BCP planning and testing | [ORG] | | [Organization Name] maintains BCP |
| | DR infrastructure | | [CSP] | CSP provides DR capabilities |
| | DR testing | [SHARED] | [SHARED] | [Organization Name] leads testing; CSP supports |
| | Data backup | [SHARED] | [SHARED] | [Specify backup ownership and verification] |
| **Exit Management** | Data export / portability | [ORG] | | [Organization Name] exercises data portability rights |
| | Data deletion certification | | [CSP] | CSP provides certified deletion confirmation |
| | Knowledge transfer | [ORG] | | [Organization Name] manages internal knowledge transfer |

### 9.4 Responsibility Gap Analysis

*Identify any responsibility gaps — areas where neither party has clearly assumed responsibility, or where the responsibility allocation is unclear.*

| Gap # | Control Area | Gap Description | Risk Rating | Recommended Resolution | Owner |
|---|---|---|---|---|---|
| G-001 | [Control Area] | [Description of gap] | [High / Medium / Low] | [Recommended action] | [Owner] |
| G-002 | [Control Area] | [Description of gap] | [High / Medium / Low] | [Recommended action] | [Owner] |
| G-003 | [Control Area] | [Description of gap] | [High / Medium / Low] | [Recommended action] | [Owner] |

---

## 10. Risk Findings and Ratings

### 10.1 Detailed Risk Register

*This section contains the detailed findings from the assessment. Each finding is assigned a unique identifier, risk domain, inherent rating, control assessment, and residual rating. Findings are ordered by residual risk rating (highest first).*

---

#### Finding F-001: [Finding Title]

| Field | Details |
|---|---|
| **Finding ID** | F-001 |
| **Risk Domain** | [e.g., Cybersecurity Risk] |
| **RMiT Clause** | [e.g., 10.50, 10.53] |
| **Description** | [Detailed description of the risk finding. Include what was observed, the evidence reviewed, and why this constitutes a risk to [Organization Name].] |
| **Threat Source** | [External attacker / Insider threat / CSP failure / Natural disaster / Regulatory breach] |
| **Vulnerability** | [Describe the vulnerability or gap that gives rise to this risk] |
| **Potential Impact** | [Describe the potential consequences if this risk materializes] |
| **Inherent Likelihood** | [Rare / Unlikely / Possible / Likely / Almost Certain] (Score: [1–5]) |
| **Inherent Impact** | [Negligible / Minor / Moderate / Major / Catastrophic] (Score: [1–5]) |
| **Inherent Risk Rating** | [Critical / High / Medium / Low] |
| **Existing Controls** | [List existing controls in place to mitigate this risk] |
| **Control Effectiveness** | [Strong / Moderate / Weak / None] |
| **Residual Likelihood** | [Rare / Unlikely / Possible / Likely / Almost Certain] (Score: [1–5]) |
| **Residual Impact** | [Negligible / Minor / Moderate / Major / Catastrophic] (Score: [1–5]) |
| **Residual Risk Rating** | [Critical / High / Medium / Low] |
| **Recommended Treatment** | [Describe recommended risk treatment actions] |
| **Treatment Owner** | [Name / Title] |
| **Target Completion Date** | [Date] |

---

#### Finding F-002: [Finding Title]

| Field | Details |
|---|---|
| **Finding ID** | F-002 |
| **Risk Domain** | [e.g., Data and Privacy Risk] |
| **RMiT Clause** | [e.g., 10.53] |
| **Description** | [Detailed description of the risk finding.] |
| **Threat Source** | [External attacker / Insider threat / CSP failure / Natural disaster / Regulatory breach] |
| **Vulnerability** | [Describe the vulnerability or gap] |
| **Potential Impact** | [Describe potential consequences] |
| **Inherent Likelihood** | [Rare / Unlikely / Possible / Likely / Almost Certain] (Score: [1–5]) |
| **Inherent Impact** | [Negligible / Minor / Moderate / Major / Catastrophic] (Score: [1–5]) |
| **Inherent Risk Rating** | [Critical / High / Medium / Low] |
| **Existing Controls** | [List existing controls] |
| **Control Effectiveness** | [Strong / Moderate / Weak / None] |
| **Residual Likelihood** | [Rare / Unlikely / Possible / Likely / Almost Certain] (Score: [1–5]) |
| **Residual Impact** | [Negligible / Minor / Moderate / Major / Catastrophic] (Score: [1–5]) |
| **Residual Risk Rating** | [Critical / High / Medium / Low] |
| **Recommended Treatment** | [Describe recommended risk treatment actions] |
| **Treatment Owner** | [Name / Title] |
| **Target Completion Date** | [Date] |

---

#### Finding F-003: [Finding Title]

| Field | Details |
|---|---|
| **Finding ID** | F-003 |
| **Risk Domain** | [e.g., Vendor / Third Party Risk] |
| **RMiT Clause** | [e.g., 10.51] |
| **Description** | [Detailed description of the risk finding.] |
| **Threat Source** | [External attacker / Insider threat / CSP failure / Natural disaster / Regulatory breach] |
| **Vulnerability** | [Describe the vulnerability or gap] |
| **Potential Impact** | [Describe potential consequences] |
| **Inherent Likelihood** | [Rare / Unlikely / Possible / Likely / Almost Certain] (Score: [1–5]) |
| **Inherent Impact** | [Negligible / Minor / Moderate / Major / Catastrophic] (Score: [1–5]) |
| **Inherent Risk Rating** | [Critical / High / Medium / Low] |
| **Existing Controls** | [List existing controls] |
| **Control Effectiveness** | [Strong / Moderate / Weak / None] |
| **Residual Likelihood** | [Rare / Unlikely / Possible / Likely / Almost Certain] (Score: [1–5]) |
| **Residual Impact** | [Negligible / Minor / Moderate / Major / Catastrophic] (Score: [1–5]) |
| **Residual Risk Rating** | [Critical / High / Medium / Low] |
| **Recommended Treatment** | [Describe recommended risk treatment actions] |
| **Treatment Owner** | [Name / Title] |
| **Target Completion Date** | [Date] |

---

*[Repeat Finding template for all identified findings. Minimum recommended: 5–10 findings for a comprehensive assessment. Number sequentially: F-004, F-005, etc.]*

---

### 10.2 Risk Summary Dashboard

*Provide a consolidated summary of all findings by risk domain and rating for executive review.*

#### 10.2.1 Findings by Risk Domain

| Risk Domain | Critical | High | Medium | Low | Total |
|---|---|---|---|---|---|
| Technology Risk | [#] | [#] | [#] | [#] | [#] |
| Cybersecurity Risk | [#] | [#] | [#] | [#] | [#] |
| Operational Risk | [#] | [#] | [#] | [#] | [#] |
| Data and Privacy Risk | [#] | [#] | [#] | [#] | [#] |
| Legal and Compliance Risk | [#] | [#] | [#] | [#] | [#] |
| Vendor / Third Party Risk | [#] | [#] | [#] | [#] | [#] |
| Business Continuity Risk | [#] | [#] | [#] | [#] | [#] |
| Concentration Risk | [#] | [#] | [#] | [#] | [#] |
| Governance and Compliance Risk | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

#### 10.2.2 Inherent vs. Residual Risk Comparison

| Finding ID | Finding Title | Inherent Rating | Residual Rating | Change |
|---|---|---|---|---|
| F-001 | [Title] | [Critical/High/Medium/Low] | [Critical/High/Medium/Low] | [↓ Reduced / → No Change / ↑ Increased] |
| F-002 | [Title] | [Critical/High/Medium/Low] | [Critical/High/Medium/Low] | [↓ Reduced / → No Change / ↑ Increased] |
| F-003 | [Title] | [Critical/High/Medium/Low] | [Critical/High/Medium/Low] | [↓ Reduced / → No Change / ↑ Increased] |
| [F-00X] | [Title] | [Critical/High/Medium/Low] | [Critical/High/Medium/Low] | [↓ Reduced / → No Change / ↑ Increased] |

---

## 11. Risk Treatment Plan

### 11.1 Treatment Options

*For each identified risk, specify the selected treatment strategy. The four standard treatment options are: Avoid, Mitigate, Transfer, Accept.*

| Treatment | Definition | Applicability |
|---|---|---|
| **Avoid** | Eliminate the risk by discontinuing or not proceeding with the activity | Applicable where residual risk exceeds appetite and cannot be sufficiently mitigated |
| **Mitigate** | Implement controls to reduce likelihood and/or impact | Primary treatment for most technology risks |
| **Transfer** | Transfer risk to a third party (e.g., insurance, contractual) | Applicable for financial losses; limited applicability for regulatory risk |
| **Accept** | Formally accept residual risk within risk appetite | Applicable for Low and some Medium risks; requires documented authorization |

### 11.2 Treatment Action Plan

*Detail all remediation and mitigation actions required. Assign owners, timelines, and success criteria for each action.*

| Action ID | Finding Ref | Treatment Type | Action Description | Responsible Owner | Target Date | Priority | Success Criteria | Status |
|---|---|---|---|---|---|---|---|---|
| A-001 | F-001 | [Mitigate/Avoid/Transfer/Accept] | [Detailed description of the specific action to be taken] | [Name / Title] | [Date] | [Critical / High / Medium / Low] | [Measurable success criteria] | [Not Started / In Progress / Completed] |
| A-002 | F-002 | [Mitigate/Avoid/Transfer/Accept] | [Detailed description] | [Name / Title] | [Date] | [Priority] | [Success criteria] | [Status] |
| A-003 | F-003 | [Mitigate/Avoid/Transfer/Accept] | [Detailed description] | [Name / Title] | [Date] | [Priority] | [Success criteria] | [Status] |
| A-004 | F-001 | [Mitigate/Avoid/Transfer/Accept] | [Detailed description] | [Name / Title] | [Date] | [Priority] | [Success criteria] | [Status] |
| A-005 | F-002 | [Mitigate/Avoid/Transfer/Accept] | [Detailed description] | [Name / Title] | [Date] | [Priority] | [Success criteria] | [Status] |
| [A-00X] | [F-00X] | [Treatment] | [Description] | [Owner] | [Date] | [Priority] | [Criteria] | [Status] |

### 11.3 Pre-Adoption Conditions

*List all conditions that must be satisfied before the cloud service is permitted to go live. These are non-negotiable requirements that the Head of Technology Risk must verify.*

| Condition | Description | Verification Method | Verified By | Verified Date |
|---|---|---|---|---|
| C-001 | [e.g., Data Processing Agreement executed with CSP] | [e.g., Signed DPA on file with Legal] | [Name] | [Date] |
| C-002 | [e.g., Data residency confirmed in writing by CSP] | [e.g., CSP written confirmation letter] | [Name] | [Date] |
| C-003 | [e.g., MFA enforced for all privileged accounts] | [e.g., Configuration screenshot and IAM policy review] | [Name] | [Date] |
| C-004 | [e.g., CSP SOC 2 Type II report reviewed and accepted] | [e.g., Report review documented in this assessment] | [Name] | [Date] |
| C-005 | [e.g., Incident response communication protocol agreed with CSP] | [e.g., Signed IR escalation matrix] | [Name] | [Date] |

### 11.4 Post-Adoption Monitoring Plan

*Define the ongoing monitoring activities required after the cloud service is adopted. This supports compliance with RMiT 10.55.*

| Monitoring Activity | Frequency | Responsible | Output | Escalation Trigger |
|---|---|---|---|---|
| Cloud security posture review | Monthly | [Title] | Security posture report | Any High/Critical finding |
| SLA performance review | Monthly | [Title] | SLA scorecard | Breach of any SLA metric |
| Quarterly risk reassessment | Quarterly | Head of Technology Risk | Updated risk assessment | Risk rating change |
| CSP certification renewal review | Annually | [Title] | Certification status report | Certification lapse |
| Penetration testing (cloud environment) | Annually | [Title] | Pen test report | Critical/High severity finding |
| CSP financial health review | Annually | [Title] | Financial review report | Adverse financial indicators |
| Exit strategy testing | Annually | [Title] | Exit test report | Test failure or data portability issue |
| Incident review | Per incident | [Title] | Incident post-mortem | P1/P2 incidents |
| Regulatory change review | Quarterly | Compliance | Regulatory impact assessment | New applicable regulation |

---

## 12. Control Assessment

### 12.1 Control Framework Mapping

*Assess the adequacy of controls against the CSA Cloud Controls Matrix (CCM) v4 domains and BNM RMiT requirements.*

#### 12.1.1 CSA Cloud Controls Matrix Assessment

| CCM Domain | Domain Title | [Organization Name] Controls | CSP Controls | Combined Rating | Gap |
|---|---|---|---|---|---|
| A&A | Audit & Assurance | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| AIS | Application & Interface Security | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| BCR | Business Continuity Management & Resilience | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| CCC | Change Control & Configuration Management | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| CEK | Cryptography, Encryption & Key Management | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| DCS | Datacenter Security | [N/A] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| DSP | Data Security & Privacy Lifecycle Management | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| GRC | Governance, Risk & Compliance | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| HRS | Human Resources | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| IAM | Identity & Access Management | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| IPY | Interoperability & Portability | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| IVS | Infrastructure & Virtualization Security | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| LOG | Logging & Monitoring | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| SEF | Security Incident Management, E-Discovery & Forensics | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| STA | Supply Chain Management, Transparency & Accountability | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| TVM | Threat & Vulnerability Management | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Adequate / Partial / Inadequate] | [Yes / No] |
| UEM | Universal Endpoint Management | [Adequate / Partial / Inadequate] | [N/A] | [Adequate / Partial / Inadequate] | [Yes / No] |

### 12.2 Critical Control Assessment Detail

*Provide detailed assessment of critical controls identified as key risk mitigants.*

| Control ID | Control Description | Control Type | Implemented By | Test Method | Test Result | Effectiveness |
|---|---|---|---|---|---|---|
| CTL-001 | [e.g., Multi-Factor Authentication for all cloud console access] | [Preventive] | [[ORG] / CSP] | [Inspection / Interview / Testing] | [Pass / Fail / Partial] | [Strong / Moderate / Weak] |
| CTL-002 | [e.g., Privileged access management with just-in-time access] | [Preventive] | [[ORG] / CSP] | [Inspection / Interview / Testing] | [Pass / Fail / Partial] | [Strong / Moderate / Weak] |
| CTL-003 | [e.g., Data encryption at rest using customer-managed keys] | [Preventive] | [[ORG]] | [Inspection / Interview / Testing] | [Pass / Fail / Partial] | [Strong / Moderate / Weak] |
| CTL-004 | [e.g., Real-time security event monitoring and SIEM integration] | [Detective] | [[ORG]] | [Inspection / Interview / Testing] | [Pass / Fail / Partial] | [Strong / Moderate / Weak] |
| CTL-005 | [e.g., Cloud-native DLP policy enforcement] | [Preventive] | [[ORG]] | [Inspection / Interview / Testing] | [Pass / Fail / Partial] | [Strong / Moderate / Weak] |
| CTL-006 | [e.g., Automated security configuration compliance scanning] | [Detective] | [[ORG]] | [Inspection / Interview / Testing] | [Pass / Fail / Partial] | [Strong / Moderate / Weak] |
| CTL-007 | [e.g., Network traffic inspection and anomaly detection] | [Detective] | [[ORG] / CSP] | [Inspection / Interview / Testing] | [Pass / Fail / Partial] | [Strong / Moderate / Weak] |
| CTL-008 | [e.g., Immutable audit log storage with integrity verification] | [Detective] | [[ORG] / CSP] | [Inspection / Interview / Testing] | [Pass / Fail / Partial] | [Strong / Moderate / Weak] |

---

## 13. Vendor Due Diligence

### 13.1 CSP Financial and Corporate Health

*Assess the financial stability and corporate health of the CSP to determine the risk of service discontinuation or degraded service delivery.*

| Assessment Area | Finding | Rating | Evidence |
|---|---|---|---|
| Revenue growth trend | [Description] | [Stable / Concern / Deteriorating] | [Evidence reference] |
| Profitability | [Description] | [Stable / Concern / Deteriorating] | [Evidence reference] |
| Credit rating | [Rating and agency] | [Investment Grade / Sub-investment Grade / Unrated] | [Evidence reference] |
| Debt levels | [Description] | [Stable / Concern / Deteriorating] | [Evidence reference] |
| Market position | [Description] | [Leader / Challenger / Niche] | [Evidence reference] |
| Regulatory investigations | [None / Active — describe] | [Clear / Under Investigation] | [Evidence reference] |
| Ownership changes | [None / Recent change — describe] | [Stable / Changed] | [Evidence reference] |

**Overall CSP Financial Health Rating:** [Stable / Monitor / Concern]

### 13.2 CSP Certifications and Compliance

*Review and assess the CSP's current regulatory certifications and compliance posture.*

| Certification / Standard | Status | Expiry Date | Scope | Assessment |
|---|---|---|---|---|
| ISO/IEC 27001:2022 | [Current / Expired / Not Held] | [Date] | [Data centres / Services in scope] | [Adequate / Insufficient] |
| ISO/IEC 27017:2015 | [Current / Expired / Not Held] | [Date] | [Scope] | [Adequate / Insufficient] |
| ISO/IEC 27018:2019 | [Current / Expired / Not Held] | [Date] | [Scope] | [Adequate / Insufficient] |
| SOC 2 Type II | [Current / Expired / Not Held] | [Date] | [Trust Service Criteria covered] | [Adequate / Insufficient] |
| PCI-DSS (if applicable) | [Current / Expired / Not Held] | [Date] | [Scope] | [Adequate / Insufficient] |
| CSA STAR Level 2 | [Current / Expired / Not Held] | [Date] | [Scope] | [Adequate / Insufficient] |
| [Other relevant certification] | [Current / Expired / Not Held] | [Date] | [Scope] | [Adequate / Insufficient] |

### 13.3 Subprocessor Assessment

*Assess the risk arising from CSP subprocessors (fourth-party risk). Under BNM RMiT, [Organization Name] remains responsible for risk arising from CSP subprocessors.*

| Subprocessor Name | Function | Jurisdiction | Data Accessed | Risk Assessment | Mitigation |
|---|---|---|---|---|---|
| [Subprocessor 1] | [Function, e.g., Support services] | [Country] | [Data types] | [High / Medium / Low] | [Describe mitigation, e.g., contractual flow-through obligations] |
| [Subprocessor 2] | [Function] | [Country] | [Data types] | [High / Medium / Low] | [Describe mitigation] |
| [Subprocessor 3] | [Function] | [Country] | [Data types] | [High / Medium / Low] | [Describe mitigation] |
| [Add rows as required] | | | | | |

**Subprocessor Change Control:** [Describe the process for being notified of and approving changes to CSP subprocessors, including the notice period provided in the contract.]

### 13.4 Contractual Assessment

*Assess the adequacy of the contractual arrangements with the CSP against BNM RMiT Clause 10.52 requirements.*

| Contractual Requirement | Required by RMiT | Present in Contract | Assessment | Reference (Clause) |
|---|---|---|---|---|
| Audit rights for [Organization Name] | Yes | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| Regulatory access rights (BNM) | Yes | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| Data portability and export | Yes | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| Data deletion on termination | Yes | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| Security incident notification (72 hours) | Yes | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| Business continuity and DR commitments | Yes | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| Subprocessor notification | Yes | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| Jurisdiction and governing law | Yes | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| SLA with financial penalties | Recommended | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| Exit assistance obligations | Yes | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| Indemnification and liability | Recommended | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |
| Confidentiality obligations | Yes | [Yes / No / Partial] | [Adequate / Gap] | [Contract clause] |

**Overall Contractual Assessment:** [Adequate / Requires Remediation — describe key gaps and actions]

---

## 14. Residual Risk Summary and Acceptance

### 14.1 Aggregate Residual Risk Profile

*Summarize the aggregate residual risk profile of the cloud service after all controls and mitigations are taken into account.*

| Risk Domain | Aggregate Residual Rating | Key Drivers | Trend |
|---|---|---|---|
| Technology Risk | [Critical / High / Medium / Low] | [Key risk drivers] | [Stable / Improving / Deteriorating] |
| Cybersecurity Risk | [Critical / High / Medium / Low] | [Key risk drivers] | [Stable / Improving / Deteriorating] |
| Operational Risk | [Critical / High / Medium / Low] | [Key risk drivers] | [Stable / Improving / Deteriorating] |
| Data and Privacy Risk | [Critical / High / Medium / Low] | [Key risk drivers] | [Stable / Improving / Deteriorating] |
| Legal and Compliance Risk | [Critical / High / Medium / Low] | [Key risk drivers] | [Stable / Improving / Deteriorating] |
| Vendor / Third Party Risk | [Critical / High / Medium / Low] | [Key risk drivers] | [Stable / Improving / Deteriorating] |
| Business Continuity Risk | [Critical / High / Medium / Low] | [Key risk drivers] | [Stable / Improving / Deteriorating] |
| Concentration Risk | [Critical / High / Medium / Low] | [Key risk drivers] | [Stable / Improving / Deteriorating] |
| **Overall Residual Risk** | **[Critical / High / Medium / Low]** | | |

### 14.2 Risk Appetite Comparison

*Compare the aggregate residual risk against [Organization Name]'s stated risk appetite.*

| Dimension | Risk Appetite Statement | Actual Residual | Within Appetite? |
|---|---|---|---|
| Technology Risk | [e.g., No more than Medium residual risk for non-critical services] | [Rating] | [Yes / No] |
| Cybersecurity Risk | [e.g., Zero tolerance for Critical; High requires Board acceptance] | [Rating] | [Yes / No] |
| Data and Privacy Risk | [e.g., No personal data to reside in non-approved jurisdictions] | [Rating] | [Yes / No] |
| Operational Risk | [e.g., 99.9% availability minimum for customer-facing services] | [Rating] | [Yes / No] |
| Concentration Risk | [e.g., No single CSP to host more than 40% of critical workloads] | [Rating] | [Yes / No] |

### 14.3 Formal Risk Acceptance

*Record the formal risk acceptance decision for this cloud service. Risk acceptance must be documented by the appropriate authority as determined by the residual risk rating.*

**Overall Residual Risk Rating:** [Critical / High / Medium / Low]

**Required Acceptance Authority:** [Board Risk Committee / Technology Risk Committee / CRO / Head of Technology Risk]

**Risk Acceptance Decision:** [Accept / Conditionally Accept / Reject]

**Conditions of Acceptance (if conditional):**

1. [Condition 1 — describe specific condition and deadline]
2. [Condition 2 — describe specific condition and deadline]
3. [Condition 3 — describe specific condition and deadline]

**Risk Acceptance Statement:**

> *"[Organization Name]'s [Technology Risk Committee / Board Risk Committee] has reviewed the Cloud Risk Assessment for [CSP Name — Service Name] dated [Assessment Date]. Having considered the identified risks, the implemented controls, the residual risk profile, and the business case for adoption, the [Committee Name] formally [accepts / conditionally accepts] the residual risks associated with this cloud service arrangement, subject to the conditions and ongoing monitoring activities specified in this report. This acceptance is valid for the period [Date] to [Date], after which the service must be re-assessed."*

| Role | Name | Decision | Date |
|---|---|---|---|
| Head of Technology Risk | [Name] | [Accept / Reject] | [Date] |
| Chief Risk Officer | [Name] | [Accept / Reject] | [Date] |
| Chief Information Security Officer | [Name] | [Accept / Reject] | [Date] |
| Chair, Technology Risk Committee | [Name] | [Approved / Rejected] | [Date] |

---

## 15. Roles and Responsibilities

### 15.1 RACI Matrix

*Define the roles and responsibilities for the cloud risk assessment process and ongoing cloud governance. RACI: **R**esponsible (does the work), **A**ccountable (owns the outcome), **C**onsulted (provides input), **I**nformed (receives updates).*

| Activity | Head of Tech Risk | CISO | CRO | IT/Cloud Team | Compliance | Legal | Procurement | Business Owner | Board/Risk Committee |
|---|---|---|---|---|---|---|---|---|---|
| **Risk Assessment Process** | | | | | | | | | |
| Initiate cloud risk assessment | A/R | C | I | C | I | I | C | C | I |
| Define assessment scope | A/R | C | I | C | C | C | I | C | I |
| Conduct risk assessment | R | R | I | R | C | C | I | C | I |
| Document findings and ratings | A/R | C | I | C | I | I | I | I | I |
| Review and validate findings | A | R | C | R | C | C | I | C | I |
| Prepare assessment report | A/R | C | I | C | I | I | I | I | I |
| Present findings to committee | A/R | C | R | C | C | C | I | C | I |
| **Risk Treatment** | | | | | | | | | |
| Approve risk treatment plan | A | C | R | I | C | I | I | C | I |
| Implement technical controls | I | C | I | A/R | I | I | I | C | I |
| Execute contractual actions | I | I | I | I | C | A/R | R | C | I |
| Monitor treatment completion | A/R | C | I | R | I | I | I | I | I |
| **Risk Acceptance** | | | | | | | | | |
| Recommend risk acceptance | A/R | C | C | I | C | C | I | C | I |
| Approve Low / Medium risk | A/R | I | I | I | I | I | I | I | I |
| Approve High risk | I | C | A/R | I | C | I | I | I | C |
| Approve Critical risk | I | C | C | I | C | I | I | I | A/R |
| **Ongoing Monitoring** | | | | | | | | | |
| Quarterly risk review | A/R | C | I | R | I | I | I | C | I |
| CSP performance monitoring | C | I | I | A/R | I | I | C | R | I |
| Security event monitoring | C | A/R | I | R | I | I | I | I | I |
| Regulatory change assessment | I | I | I | I | A/R | C | I | I | I |
| Annual re-assessment | A/R | C | I | R | C | I | I | C | I |
| BNM regulatory reporting | C | I | I | I | A/R | C | I | I | I |

### 15.2 Key Roles and Contacts

| Role | Name | Contact | Responsibility |
|---|---|---|---|
| **Head of Technology Risk** | [Name] | [Email / Phone] | Overall accountability for this assessment and ongoing cloud risk governance |
| **Chief Information Security Officer (CISO)** | [Name] | [Email / Phone] | Cybersecurity risk oversight and security control adequacy |
| **Chief Risk Officer (CRO)** | [Name] | [Email / Phone] | Risk appetite setting and High/Critical risk acceptance |
| **Cloud / Infrastructure Lead** | [Name] | [Email / Phone] | Technical implementation and control effectiveness |
| **Compliance Manager** | [Name] | [Email / Phone] | Regulatory compliance monitoring and BNM engagement |
| **Legal Counsel** | [Name] | [Email / Phone] | Contractual assessment and cross-border transfer legal advice |
| **Business Owner** | [Name] | [Email / Phone] | Business justification, business continuity, and exit planning |
| **Procurement Manager** | [Name] | [Email / Phone] | Contract management and vendor management |
| **CSP Account Manager** | [Name] | [Email / Phone] | Primary CSP relationship and escalation contact |
| **CSP Security Contact** | [Name] | [Email / Phone] | Security incident notification and CSP security queries |

---

## 16. Review and Approval

### 16.1 Review Schedule

This document is subject to the following mandatory review triggers in addition to the standard quarterly review cycle:

- **Quarterly Review:** Mandatory review every quarter to reflect changes in the risk environment, CSP posture, or regulatory requirements.
- **Material Change:** Any material change to the cloud service, CSP, data types processed, or regulatory requirements triggers an immediate out-of-cycle review.
- **Post-Incident Review:** Following any security incident or significant service disruption, the assessment must be reviewed within 30 days.
- **Regulatory Direction:** Any direction from BNM or other regulator triggers immediate review.
- **CSP Certification Change:** Any lapse or downgrade in CSP certifications triggers a review within 60 days.

### 16.2 Version History

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | Initial draft for internal review | [N/A — Draft] |
| 0.2 | [Date] | [Author Name] | Incorporation of IT / CISO review comments | [N/A — Draft] |
| 0.3 | [Date] | [Author Name] | Incorporation of Legal review comments | [N/A — Draft] |
| 1.0 | [Date] | [Author Name] | Final version — approved by Technology Risk Committee | [Approver Name] |
| 1.1 | [Date] | [Author Name] | [Description of changes — e.g., Q2 quarterly review updates] | [Approver Name] |
| 1.2 | [Date] | [Author Name] | [Description of changes] | [Approver Name] |

### 16.3 Approval Sign-Off

*All named approvers below must sign this document before it is considered formally approved and the cloud service may be adopted or continued.*

| Role | Name | Signature | Date of Approval |
|---|---|---|---|
| **Prepared By** | [Name, Technology Risk Manager] | _________________________ | [Date] |
| **Reviewed By — Technology** | [Name, Head of IT / Cloud Lead] | _________________________ | [Date] |
| **Reviewed By — Cybersecurity** | [Name, CISO] | _________________________ | [Date] |
| **Reviewed By — Compliance** | [Name, Compliance Manager] | _________________________ | [Date] |
| **Reviewed By — Legal** | [Name, Legal Counsel] | _________________________ | [Date] |
| **Approved By — Risk** | [Name, Head of Technology Risk] | _________________________ | [Date] |
| **Approved By — CRO** | [Name, Chief Risk Officer] | _________________________ | [Date] |
| **Endorsed By — Committee** | [Name, Chair — Technology Risk Committee] | _________________________ | [Date] |

---

## 17. References

### 17.1 Regulatory References

| # | Document | Issuing Body | Relevant Clauses | URL / Location |
|---|---|---|---|---|
| 1 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | 10.50, 10.51, 10.52, 10.53, 10.54, 10.55, 10.56 | BNM Website |
| 2 | Guidelines on Outsourcing | Bank Negara Malaysia | All | BNM Website |
| 3 | Personal Data Protection Act 2010 (Act 709) | Parliament of Malaysia | Section 129 (Cross-border transfer), Part III (Security) | Attorney General's Chambers |
| 4 | Personal Data Protection (Security of Personal Data) Regulations 2017 | Ministry of Digital | All | Attorney General's Chambers |
| 5 | Financial Services Act 2013 (Act 758) | Parliament of Malaysia | Section 47 (Outsourcing) | Attorney General's Chambers |
| 6 | Islamic Financial Services Act 2013 (Act 759) | Parliament of Malaysia | [Applicable sections] | Attorney General's Chambers |
| 7 | Guidelines on Digital Banking | Bank Negara Malaysia | Technology risk provisions | BNM Website |
| 8 | National Cybersecurity Policy | NACSA / National Security Council | Critical information infrastructure | NACSA Website |

### 17.2 Standards and Frameworks

| # | Standard / Framework | Issuing Body | Version | Application |
|---|---|---|---|---|
| 1 | ISO/IEC 27001 — Information Security Management | ISO/IEC | 2022 | Information security control assessment |
| 2 | ISO/IEC 27017 — Cloud Security Controls | ISO/IEC | 2015 | Cloud-specific security controls |
| 3 | ISO/IEC 27018 — PII in Public Clouds | ISO/IEC | 2019 | Privacy controls in cloud |
| 4 | ISO/IEC 27005 — Information Security Risk Management | ISO/IEC | 2022 | Risk assessment methodology |
| 5 | NIST SP 800-144 — Security in Public Cloud Computing | NIST | 2011 | Risk assessment guidance |
| 6 | NIST SP 800-145 — Cloud Computing Definition | NIST | 2011 | Service and deployment model taxonomy |
| 7 | CSA Cloud Controls Matrix (CCM) | Cloud Security Alliance | v4.0 | Cloud control framework |
| 8 | CSA Consensus Assessments Initiative Questionnaire (CAIQ) | Cloud Security Alliance | v4.0 | CSP security questionnaire |
| 9 | ENISA Cloud Computing Risk Assessment | ENISA | 2009 | Risk identification reference |
| 10 | CIS Benchmarks | Center for Internet Security | Latest | Configuration baselines |

### 17.3 Internal Policy References

| # | Policy / Document | Document ID | Version | Location |
|---|---|---|---|---|
| 1 | Cloud Governance Policy | [Policy ID] | [Version] | [Document Management System] |
| 2 | Information Security Policy | [Policy ID] | [Version] | [Document Management System] |
| 3 | Technology Risk Management Framework | [Policy ID] | [Version] | [Document Management System] |
| 4 | Data Classification and Handling Policy | [Policy ID] | [Version] | [Document Management System] |
| 5 | Outsourcing Risk Management Policy | [Policy ID] | [Version] | [Document Management System] |
| 6 | Business Continuity Management Policy | [Policy ID] | [Version] | [Document Management System] |
| 7 | Third Party Risk Management Framework | [Policy ID] | [Version] | [Document Management System] |
| 8 | Incident Response Policy | [Policy ID] | [Version] | [Document Management System] |
| 9 | Change Management Policy | [Policy ID] | [Version] | [Document Management System] |
| 10 | Access Control Policy | [Policy ID] | [Version] | [Document Management System] |

---

## 18. Appendices

### Appendix A — Cloud Architecture Diagram

*Attach or embed the cloud architecture diagram showing the logical and physical architecture of the cloud service, including:*

- *Network topology and connectivity between [Organization Name]'s on-premise environment and the CSP*
- *Data flows (inbound and outbound)*
- *Security control placements (firewalls, WAF, IDS/IPS, DLP)*
- *Identity and access management integration*
- *Encryption boundaries*
- *Backup and replication flows*

**[INSERT CLOUD ARCHITECTURE DIAGRAM HERE]**

*Diagram Reference:* [Architecture Diagram Document ID and Version]
*Diagram Author:* [Name]
*Diagram Date:* [Date]

---

### Appendix B — Data Flow Diagram

*Attach or embed the data flow diagram (DFD) showing all data movements between [Organization Name], the CSP, CSP subprocessors, and any other parties. The DFD should clearly show:*

- *Data origin and destination for each data category*
- *Data classification at each processing point*
- *Encryption status at each transfer and storage point*
- *Cross-border data transfers (highlighted)*
- *Third-party access points*

**[INSERT DATA FLOW DIAGRAM HERE]**

*Diagram Reference:* [DFD Document ID and Version]
*Diagram Author:* [Name]
*Diagram Date:* [Date]

---

### Appendix C — CSP Security Questionnaire Responses

*Attach the completed CSP Security Questionnaire (CSA CAIQ or [Organization Name]'s standard questionnaire) with responses provided by the CSP. This document forms part of the evidence base for this assessment.*

**Document Reference:** [Questionnaire Document ID]
**Date Submitted to CSP:** [Date]
**Date Received from CSP:** [Date]
**CSP Respondent:** [Name, Title]
**Review Notes:** [Summary of key observations from questionnaire review]

**[ATTACH COMPLETED CSP SECURITY QUESTIONNAIRE]**

---

### Appendix D — CSP Certifications and Audit Reports

*List all CSP certification documents and third-party audit reports reviewed during this assessment. Attach copies where permissible under NDA.*

| Document | Date | Issuing Body | Scope | Observations |
|---|---|---|---|---|
| ISO 27001 Certificate | [Date] | [Certification body] | [Scope] | [Key observations] |
| SOC 2 Type II Report | [Date — period covered] | [Audit firm] | [Trust Service Criteria] | [Key observations, including exceptions noted] |
| [Other certification] | [Date] | [Issuing body] | [Scope] | [Observations] |

**Key Observations from Third-Party Audit Reports:**

- [Observation 1 — e.g., SOC 2 Type II for the period [dates] contained [X] exceptions. The exceptions related to [describe]. [Organization Name] assessed these as [material / not material] to this assessment.]
- [Observation 2]
- [Observation 3]

---

### Appendix E — Contractual Summary and Gap Analysis

*Provide a summary of the key contractual provisions reviewed and the outcome of the gap analysis against BNM RMiT Clause 10.52 requirements.*

**Master Agreement Reference:** [Agreement name, version, date]
**Data Processing Agreement Reference:** [DPA name, version, date]
**Service Level Agreement Reference:** [SLA name, version, date]

#### Key SLA Metrics

| Metric | CSP Commitment | Financial Penalty for Breach | Assessment |
|---|---|---|---|
| Service Availability | [e.g., 99.9% monthly] | [e.g., Service credits per breach] | [Adequate / Insufficient] |
| Incident Notification — P1 | [e.g., Within 1 hour] | [e.g., Service credits] | [Adequate / Insufficient] |
| Incident Resolution — P1 | [e.g., Within 4 hours] | [e.g., Service credits] | [Adequate / Insufficient] |
| RTO (Recovery Time Objective) | [e.g., 4 hours] | [e.g., Service credits] | [Adequate / Insufficient] |
| RPO (Recovery Point Objective) | [e.g., 1 hour] | [e.g., Service credits] | [Adequate / Insufficient] |
| Data Deletion on Termination | [e.g., Within 30 days with certification] | [N/A] | [Adequate / Insufficient] |
| Advance Notice for Maintenance | [e.g., 72 hours] | [N/A] | [Adequate / Insufficient] |
| Security Breach Notification | [e.g., Within 24 hours of CSP awareness] | [N/A] | [Adequate / Insufficient] |

#### Contractual Gaps and Recommended Actions

| Gap | Description | Recommended Action | Priority |
|---|---|---|---|
| [Gap 1] | [Description] | [Action] | [High / Medium / Low] |
| [Gap 2] | [Description] | [Action] | [High / Medium / Low] |
| [Gap 3] | [Description] | [Action] | [High / Medium / Low] |

---

### Appendix F — Exit Strategy Assessment

*Document the exit strategy for the cloud service in accordance with BNM RMiT Clause 10.54.*

#### F.1 Exit Triggers

The following events would trigger activation of the exit strategy:

- [ ] CSP insolvency or cessation of service
- [ ] Material breach of contract by CSP
- [ ] Regulatory direction to exit
- [ ] Unacceptable risk rating following re-assessment
- [ ] CSP acquisition by an entity in a non-approved jurisdiction
- [ ] Sustained SLA breach exceeding [threshold]
- [ ] Strategic business decision

#### F.2 Exit Planning

| Exit Element | Description | Estimated Effort | Estimated Cost (MYR) |
|---|---|---|---|
| **Data Export** | Export all data from cloud environment in portable format | [Effort estimate] | [Cost estimate] |
| **Data Verification** | Verify completeness and integrity of exported data | [Effort estimate] | [Cost estimate] |
| **Alternative Provider Setup** | Establish equivalent capability with alternative provider or on-premise | [Effort estimate] | [Cost estimate] |
| **Migration** | Migrate workloads to alternative environment | [Effort estimate] | [Cost estimate] |
| **Testing** | Validate migrated environment before go-live | [Effort estimate] | [Cost estimate] |
| **Data Deletion Certification** | Obtain certified confirmation of data deletion from CSP | [Effort estimate] | [Cost estimate] |
| **Contract Termination** | Formal contract termination and final invoicing | [Effort estimate] | [Cost estimate] |
| **Total Estimated Exit Cost** | | | **[Total MYR estimate]** |

**Estimated Total Exit Timeline:** [e.g., 6–12 months depending on data volume and complexity]

**Exit Testing Frequency:** Annually — next scheduled exit test: [Date]

**Exit Test Results (most recent):** [Pass / Fail / Not yet conducted]

---

### Appendix G — Business Continuity Assessment

*Document the business continuity and disaster recovery assessment for the cloud service.*

| BCM Element | CSP Commitment | [Organization Name] Requirement | Gap | Mitigation |
|---|---|---|---|---|
| RTO | [CSP RTO commitment] | [Required RTO] | [Yes / No] | [If gap, describe mitigation] |
| RPO | [CSP RPO commitment] | [Required RPO] | [Yes / No] | [If gap, describe mitigation] |
| Geographic redundancy | [CSP availability zones/regions] | [Requirement] | [Yes / No] | [If gap, describe mitigation] |
| DR testing frequency | [CSP DR test frequency] | [Requirement] | [Yes / No] | [If gap, describe mitigation] |
| CSP BCP documentation | [Available / Partial / Not available] | [Required] | [Yes / No] | [If gap, describe mitigation] |
| Failover process | [Automated / Manual / Hybrid] | [Requirement] | [Yes / No] | [If gap, describe mitigation] |

**Integration with [Organization Name] BCP:** [Describe how the cloud service is incorporated into [Organization Name]'s overall Business Continuity Plan and IT Disaster Recovery Plan, including test results]

---

### Appendix H — Concentration Risk Assessment

*Assess the contribution of this cloud service to [Organization Name]'s overall cloud concentration risk.*

#### H.1 CSP Concentration

| CSP | % of Critical Workloads Hosted | % of Technology Spend | Risk Rating |
|---|---|---|---|
| [CSP Name — this assessment] | [%] | [%] | [High / Medium / Low] |
| [CSP Name 2] | [%] | [%] | [High / Medium / Low] |
| [CSP Name 3] | [%] | [%] | [High / Medium / Low] |
| On-premise | [%] | [%] | [N/A] |
| **Total** | **100%** | **100%** | |

**Concentration Risk Threshold (per policy):** No single CSP to host more than [X]% of critical workloads.

**Current Compliance Status:** [Within threshold / Exceeds threshold — action required]

---

### Appendix I — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia |
| **CCM** | Cloud Controls Matrix — a cybersecurity control framework for cloud computing published by the Cloud Security Alliance |
| **CMK** | Customer-Managed Key — an encryption key managed by [Organization Name] rather than the CSP |
| **CSP** | Cloud Service Provider — the entity providing cloud computing services |
| **DLP** | Data Loss Prevention — technology used to prevent unauthorized transmission of sensitive data |
| **DPA** | Data Processing Agreement — a contractual agreement governing the processing of personal data by a processor on behalf of a controller |
| **DR** | Disaster Recovery — the process of restoring systems and data following a disruptive event |
| **FSCTM** | Financial Sector Cloud Technology Model |
| **HSM** | Hardware Security Module — a physical device that manages cryptographic keys |
| **IaaS** | Infrastructure as a Service — cloud service model providing virtualized computing resources |
| **IDS/IPS** | Intrusion Detection System / Intrusion Prevention System |
| **MFA** | Multi-Factor Authentication — authentication requiring two or more verification factors |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **NDA** | Non-Disclosure Agreement |
| **PaaS** | Platform as a Service — cloud service model providing a platform for application development and deployment |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **RPO** | Recovery Point Objective — maximum acceptable data loss measured in time |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk for financial institutions |
| **RTO** | Recovery Time Objective — maximum acceptable time to restore a service following a disruption |
| **SaaS** | Software as a Service — cloud service model delivering software applications over the internet |
| **SIEM** | Security Information and Event Management |
| **SLA** | Service Level Agreement |
| **SOC 2** | Service Organization Control 2 — a third-party audit standard for service organizations |
| **TLS** | Transport Layer Security — cryptographic protocol for securing data in transit |
| **VPC** | Virtual Private Cloud — an isolated virtual network within a public cloud environment |
| **WAF** | Web Application Firewall |

---

### Appendix J — Assessment Evidence Index

*Maintain a complete index of all evidence collected during this assessment for audit trail purposes.*

| Evidence ID | Description | Type | Source | Date Obtained | Retained At | Retention Period |
|---|---|---|---|---|---|---|
| E-001 | [Description] | [Type] | [Source] | [Date] | [Location] | [e.g., 7 years] |
| E-002 | [Description] | [Type] | [Source] | [Date] | [Location] | [e.g., 7 years] |
| E-003 | [Description] | [Type] | [Source] | [Date] | [Location] | [e.g., 7 years] |
| E-004 | [Description] | [Type] | [Source] | [Date] | [Location] | [e.g., 7 years] |
| E-005 | [Description] | [Type] | [Source] | [Date] | [Location] | [e.g., 7 years] |
| [E-00X] | [Description] | [Type] | [Source] | [Date] | [Location] | [e.g., 7 years] |

---

*End of Document*

---

**Document Control Footer**

| Field | Value |
|---|---|
| Document Title | Cloud Risk Assessment Report |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | Head of Technology Risk |
| Organization | [Organization Name] |
| Last Updated | [Date] |
| Next Review | [Quarterly Review Date] |
| Framework Reference | BNM RMiT Clause 10.50 |

*This document is subject to [Organization Name]'s document retention policy and must be retained for a minimum of seven (7) years from the date of approval, or such longer period as may be required by applicable regulations. Upon disposal, this document must be destroyed in accordance with [Organization Name]'s secure disposal procedure.*