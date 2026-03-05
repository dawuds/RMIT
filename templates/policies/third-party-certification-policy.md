# Third-Party Certification Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Vendor Management |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Department** | Vendor Management / Technology Risk |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Any reproduction, distribution, or disclosure to unauthorised parties is strictly prohibited and may constitute a breach of applicable laws and internal policy.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context and Obligations](#3-regulatory-context-and-obligations)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
7. [Vendor Risk Tiering Criteria](#7-vendor-risk-tiering-criteria)
8. [Recognised Security Certifications](#8-recognised-security-certifications)
9. [Due Diligence Checklist](#9-due-diligence-checklist)
10. [SLA and KPI Definitions](#10-sla-and-kpi-definitions)
11. [Exit Strategy Requirements](#11-exit-strategy-requirements)
12. [Non-Compliance and Escalation](#12-non-compliance-and-escalation)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*This section articulates the intent of this policy, the regulatory driver, and the organisational rationale for mandating security certifications from third-party vendors. Authors should tailor the language to reflect the institution's risk appetite and strategic objectives.*

This policy establishes the mandatory requirements for [Organization Name] ("the Organisation") with respect to the maintenance and verification of recognised security certifications by critical and material third-party vendors, service providers, and technology partners. The policy forms part of the Organisation's broader Third-Party Risk Management (TPRM) framework and is designed to ensure that the security posture of external parties providing critical services meets or exceeds minimum standards required under applicable regulatory obligations.

The objectives of this policy are to:

- Ensure that critical vendors maintain recognised, independently verified security certifications appropriate to the nature and sensitivity of the services rendered.
- Establish a structured, risk-tiered approach to vendor certification requirements.
- Define the processes for verifying, monitoring, and enforcing compliance with certification requirements throughout the vendor lifecycle.
- Protect the Organisation's data, systems, and operational continuity from risks introduced through third-party relationships.
- Demonstrate compliance with Bank Negara Malaysia's ("BNM") Risk Management in Technology ("RMiT") Policy Document, in particular Paragraph 14.2, and other applicable regulatory obligations.
- Provide clear accountability and governance structures for managing vendor certification obligations.

---

## 2. Scope

*This section defines which entities, systems, relationships, and geographies are covered by the policy. Be specific to avoid ambiguity during audits. Authors should identify all applicable business units, subsidiaries, and third-party categories.*

### 2.1 In Scope

This policy applies to:

**Organisational Entities:**
- All business units, departments, and subsidiaries of [Organization Name].
- All employees, contractors, and personnel responsible for procuring, managing, or overseeing third-party technology services.
- All members of the Vendor Management Office, Technology Risk, IT Security, Procurement, and Legal functions.

**Third-Party Relationships:**
- All Critical Service Providers (CSPs) as defined in Paragraph 14.2 of the BNM RMiT Policy Document.
- All Material Outsourcing Arrangements as notified to or approved by BNM.
- Cloud service providers, data centre operators, managed security service providers (MSSPs), payment processors, core banking system vendors, and all other vendors classified under Tier 1 or Tier 2 of the Organisation's Vendor Risk Tiering Framework (see Section 7).
- All new vendor onboarding activities from the effective date of this policy.
- All existing vendor relationships subject to the transition timelines specified in Section 6.7.

**Systems and Services:**
- Technology systems, platforms, and infrastructure managed wholly or in part by third parties.
- Services involving the storage, processing, transmission, or access to the Organisation's data, including personal data and financial data.
- Third-party integrations to core banking, payment, and operational systems.

### 2.2 Out of Scope

The following are explicitly excluded from the scope of this policy:

- One-time, low-value procurement engagements that do not involve access to the Organisation's systems or data (Tier 3 vendors as defined in Section 7).
- Intra-group arrangements that are subject to a separate Intra-Group Technology Risk Policy.
- Professional services engagements (e.g., legal counsel, audit firms) unless they are granted access to critical systems or sensitive data.
- Open-source software components unless maintained under a commercial support arrangement.

### 2.3 Geographic Applicability

This policy applies to all third-party relationships regardless of the vendor's geographic location. Where a vendor operates in a jurisdiction with different regulatory requirements, the stricter of the two standards shall apply, unless a formal risk exception has been granted in accordance with Section 12.

---

## 3. Regulatory Context and Obligations

*This section provides the regulatory foundation for the policy. Authors should cross-reference all applicable BNM policy documents, acts, and guidelines. This section supports the Organisation's ability to demonstrate regulatory traceability during supervisory examinations.*

### 3.1 Bank Negara Malaysia — Risk Management in Technology (RMiT)

This policy is issued in compliance with the **BNM Risk Management in Technology (RMiT) Policy Document** (effective [RMiT Effective Date]), which sets out technology risk management requirements applicable to all financial institutions licensed under the Financial Services Act 2013 (FSA), the Islamic Financial Services Act 2013 (IFSA), and the Development Financial Institutions Act 2002 (DFIA).

The following RMiT provisions are directly addressed by this policy:

| RMiT Reference | Requirement Summary |
|---|---|
| **Paragraph 14.2** | Financial institutions must ensure that Critical Service Providers maintain recognised security certifications and that the institution conducts adequate due diligence and ongoing monitoring of the security posture of such providers. |
| Paragraph 14.1 | Governance requirements for technology outsourcing and third-party relationships. |
| Paragraph 14.3 | Contract provisions and minimum standards for outsourcing arrangements. |
| Paragraph 14.4 | Monitoring and reporting obligations for material outsourcing. |
| Paragraph 10 | Cyber risk management requirements, including supply chain security. |
| Paragraph 11 | Technology operations and resilience requirements applicable to vendors supporting critical functions. |

### 3.2 Other Applicable Regulatory Frameworks

| Framework / Instrument | Relevance |
|---|---|
| **Personal Data Protection Act 2010 (PDPA)** | Third-party processors handling personal data must meet appropriate security standards. |
| **Financial Services Act 2013 (FSA), Section 144** | Obligations regarding outsourcing of regulated activities. |
| **BNM Outsourcing Policy** | Supplementary guidance on outsourcing governance and risk management. |
| **NACSA Cybersecurity Framework** | National cybersecurity baseline applicable to critical national information infrastructure (CNII) entities. |
| **Payment Card Industry Data Security Standard (PCI DSS)** | Applicable to vendors in the payment processing chain. |
| **ISO/IEC 27001** | International standard for information security management systems, referenced as a recognised certification under this policy. |
| **BNM Guidelines on Financial Technology Regulatory Sandbox** | Applicable where fintech vendors are engaged under sandbox arrangements. |

### 3.3 Internal Policy Alignment

This policy is to be read in conjunction with the following internal policies and frameworks:

- [Organization Name] Third-Party Risk Management Policy
- [Organization Name] Information Security Policy
- [Organization Name] Outsourcing Policy
- [Organization Name] Data Classification and Handling Policy
- [Organization Name] Business Continuity Management Policy
- [Organization Name] Procurement Policy
- [Organization Name] IT Governance Policy

---

## 4. Definitions and Terminology

*This section ensures consistent interpretation of key terms throughout the document. Authors should align definitions with those used in BNM issuances and internal policies to avoid conflicts.*

| Term | Definition |
|---|---|
| **Critical Service Provider (CSP)** | As defined in BNM RMiT Paragraph 14.2: a third-party entity providing services that, if disrupted or compromised, would materially impact the Organisation's operations, financial position, or regulatory compliance. |
| **Material Outsourcing Arrangement** | An outsourcing arrangement where a service failure would have a material impact on the Organisation's business operations, reputation, or ability to comply with legal and regulatory obligations. |
| **Recognised Security Certification** | A formally accredited, independently audited certification or attestation that demonstrates a vendor's adherence to recognised information security standards (see Section 8 for the list of recognised certifications). |
| **Third-Party Vendor** | Any external legal entity or individual engaged by the Organisation to provide goods, services, or technology, including cloud providers, managed service providers, and technology vendors. |
| **Vendor Risk Tier** | A classification assigned to vendors based on the criticality of their services and the potential risk they pose to the Organisation (see Section 7). |
| **Due Diligence** | The process of assessing and verifying a vendor's security, operational, and compliance posture prior to onboarding and on an ongoing basis. |
| **Certification Gap** | An instance where a vendor does not hold, or has allowed to lapse, a certification required under this policy for their assigned risk tier. |
| **Outsourcing** | The use of a third party to perform on a continuing basis an activity that would normally be undertaken by the Organisation itself. |
| **Sub-contractor** | A third party engaged by a vendor to perform functions related to the services provided to the Organisation. |
| **SLA** | Service Level Agreement: a contractual commitment defining the minimum performance standards expected of a vendor. |
| **KPI** | Key Performance Indicator: a measurable value used to evaluate vendor performance against defined benchmarks. |
| **RACI** | Responsible, Accountable, Consulted, Informed: a framework for assigning roles and responsibilities. |
| **Exit Strategy** | A documented plan outlining the steps, timelines, and arrangements required to safely and orderly terminate a vendor relationship and transition services to an alternative provider or in-house function. |
| **Security Assessment Report** | A formal report, produced by an independent third party or the Organisation's internal security team, evaluating a vendor's security controls. |
| **Audit Right** | A contractual entitlement allowing the Organisation or its appointed representative to inspect and audit the vendor's operations, systems, and controls. |

---

## 5. Roles and Responsibilities

*This section defines clear accountability for all activities related to vendor certification management. The RACI table below should be reviewed against the Organisation's actual organisational structure and adjusted accordingly. All role titles should match the Organisation's HR system.*

### 5.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Vendor Management | CTO / CIO | CISO / Head of IT Security | Technology Risk Manager | Procurement Manager | Business Unit Owner | Legal / Compliance | Board / Risk Committee |
|---|---|---|---|---|---|---|---|---|
| Define and maintain vendor risk tiering criteria | R | C | C | C | I | I | C | I |
| Approve vendor risk tier classification | A | C | C | R | I | C | I | I |
| Maintain list of recognised certifications | R | I | A | C | I | I | C | I |
| Conduct pre-onboarding certification due diligence | R | I | C | C | C | I | I | I |
| Verify and validate certification documents | R | I | R | C | I | I | I | I |
| Negotiate certification requirements in contracts | C | I | C | C | A | I | R | I |
| Monitor ongoing vendor certification status | R | I | C | A | I | I | I | I |
| Conduct annual vendor certification review | R | C | C | A | I | I | C | I |
| Manage certification gaps and remediation | R | C | A | C | I | C | C | I |
| Approve risk exceptions for non-certified vendors | C | C | C | R | I | C | A | I |
| Escalate material certification failures | R | I | C | C | I | I | C | A |
| Report to Board / Risk Committee | A | C | C | R | I | I | C | R |
| Maintain vendor certification register | R | I | I | C | I | I | I | I |
| Manage vendor exit and transition | A | C | C | C | R | C | C | I |
| Review and update this policy (annual) | A | C | C | C | C | I | C | I |

### 5.2 Role Descriptions

#### 5.2.1 Head of Vendor Management

The Head of Vendor Management is the **Policy Owner** and bears primary accountability for the implementation and enforcement of this policy. Responsibilities include:

- Maintaining the Organisation's Vendor Register and Vendor Certification Register.
- Overseeing the end-to-end vendor lifecycle, including onboarding, periodic review, and exit.
- Ensuring all critical vendors are classified according to the risk tiering framework.
- Reporting non-compliance and certification gaps to the Technology Risk Manager and CISO.
- Coordinating with Procurement to embed certification requirements in vendor contracts.
- Presenting an annual vendor certification status report to the Technology Risk Committee.

#### 5.2.2 Chief Information Security Officer (CISO) / Head of IT Security

- Defines and maintains the list of recognised security certifications applicable under this policy.
- Reviews and approves security assessments and certification verification outcomes.
- Provides subject matter expertise in evaluating the adequacy of vendor certifications.
- Manages escalation of material security risks identified through vendor certification reviews.
- Advises on compensating controls where vendor certifications are pending or incomplete.

#### 5.2.3 Technology Risk Manager

- Maintains the Technology Risk Register, including third-party risk entries.
- Reviews and approves risk tier classifications for all new and existing vendors.
- Assesses and approves risk exceptions for vendors unable to meet certification requirements.
- Produces periodic risk reports on vendor certification compliance for the Risk Committee.

#### 5.2.4 Procurement Manager

- Ensures that certification requirements are included as mandatory criteria in all relevant Requests for Proposal (RFPs), Requests for Information (RFIs), and vendor evaluation processes.
- Collaborates with Legal to incorporate certification obligations into vendor contracts and SLAs.
- Maintains procurement records evidencing vendor certification status at the point of engagement.

#### 5.2.5 Business Unit Owner

- Identifies and communicates the criticality of services procured from third parties to the Vendor Management function.
- Participates in vendor risk tier classification decisions for vendors supporting their business unit.
- Escalates vendor performance and compliance concerns to the Head of Vendor Management.

#### 5.2.6 Legal and Compliance

- Reviews and advises on the legal enforceability of certification requirements in vendor contracts.
- Ensures alignment of vendor certification obligations with applicable regulatory requirements.
- Manages regulatory notifications where required (e.g., material outsourcing notifications to BNM).
- Advises on data protection obligations in the context of vendor security certifications.

#### 5.2.7 Board of Directors / Board Risk Committee

- Provides oversight and governance of the Organisation's third-party risk management framework.
- Reviews and approves material changes to this policy.
- Receives periodic reporting on vendor certification compliance and material risks.

---

## 6. Policy Statements and Requirements

*This section contains the binding policy requirements. Each statement should be written in unambiguous, mandatory language. Authors should ensure each requirement is measurable and can be verified during an audit.*

### 6.1 Mandatory Certification Requirements

**6.1.1** All vendors classified as **Tier 1 (Critical)** or **Tier 2 (High Risk)** under the Organisation's Vendor Risk Tiering Framework (see Section 7) **must** hold at least one recognised security certification as listed in Section 8, appropriate to the nature of their services.

**6.1.2** Certification requirements shall be determined based on the vendor's risk tier, the nature of services provided, and the type of data processed, as follows:

| Vendor Tier | Minimum Certification Requirement |
|---|---|
| **Tier 1 — Critical** | Minimum of two (2) applicable certifications from the Recognised Certifications List (Section 8), one of which must be ISO/IEC 27001 or SOC 2 Type II (or equivalent). |
| **Tier 2 — High Risk** | Minimum of one (1) applicable certification from the Recognised Certifications List (Section 8). |
| **Tier 3 — Low Risk** | Certification recommended but not mandatory; vendor self-attestation acceptable. |

**6.1.3** Where a vendor provides services in a specialised domain (e.g., payment processing, cloud hosting, healthcare data), additional domain-specific certifications may be mandated by the CISO. Such additional requirements shall be documented in the vendor's contract and the Vendor Certification Register.

**6.1.4** Certifications must be:
- Issued by an accredited, independent certification body.
- Current and valid (not expired) at all times during the vendor engagement.
- Applicable to the specific systems, services, and locations used to deliver services to the Organisation.
- Renewed prior to expiry; vendors must provide evidence of renewal no later than **30 calendar days** before the expiry of an existing certification.

### 6.2 Pre-Onboarding Requirements

**6.2.1** No Tier 1 or Tier 2 vendor shall be onboarded without first providing verifiable evidence of the required security certifications. The due diligence process outlined in Section 9 must be completed and approved by the Head of Vendor Management and the Technology Risk Manager before a contract is executed.

**6.2.2** Vendors that do not hold the required certifications at the time of onboarding may only be engaged under the following conditions:
- A formal risk exception has been approved in accordance with Section 12.
- A binding contractual commitment, with a defined timeline not exceeding **12 months**, is in place for the vendor to obtain the required certification(s).
- Compensating controls have been documented and accepted by the CISO.

**6.2.3** Proof of certification must be submitted in the form of:
- Original or certified copies of certification letters or certificates.
- Access to publicly verifiable certification registries where applicable.
- Contact details of the issuing certification body for independent verification.

### 6.3 Ongoing Monitoring and Periodic Review

**6.3.1** The Organisation shall conduct a **formal annual review** of all Tier 1 and Tier 2 vendor certifications. The review shall be completed within **Q1 of each calendar year** and the results recorded in the Vendor Certification Register.

**6.3.2** Vendors must proactively notify [Organization Name]'s Head of Vendor Management within **five (5) business days** of any change in certification status, including:
- Expiry of a certification.
- Suspension or withdrawal of a certification by the issuing body.
- Scope reductions that affect services provided to the Organisation.
- Any adverse findings raised in a certification audit.

**6.3.3** The Organisation reserves the right to conduct or commission independent security assessments of any vendor at any time, subject to the audit rights provisions in the vendor contract.

**6.3.4** Vendors shall provide the Organisation with a copy of their most recent external audit report (e.g., SOC 2 Type II report, ISO 27001 surveillance audit report) upon request, and in any case no less frequently than **annually**.

### 6.4 Certification Verification

**6.4.1** All certification documents provided by vendors must be verified for authenticity by the Vendor Management team, using one or more of the following methods:
- Cross-referencing with the certification body's public registry or verification portal.
- Direct confirmation from the issuing certification body via written correspondence.
- Review by the Organisation's internal IT Security team or an appointed external assessor.

**6.4.2** Verification outcomes must be documented in the Vendor Certification Register, including the date of verification, the method used, and the name of the verifying officer.

**6.4.3** Certificates that cannot be independently verified shall be treated as non-compliant pending successful verification. The vendor shall be notified and given **10 business days** to provide verifiable evidence.

### 6.5 Sub-Contractor Obligations

**6.5.1** Vendors must disclose all material sub-contractors used in the delivery of services to the Organisation. This disclosure must be made at the point of onboarding and updated within **10 business days** of any change.

**6.5.2** Material sub-contractors providing services that are within the scope of the vendor's engagement must, as a minimum, hold equivalent certifications to those required of the primary vendor under this policy.

**6.5.3** Vendors are responsible for ensuring and evidencing their sub-contractors' compliance with the certification requirements of this policy. The Organisation may request evidence of sub-contractor certification status at any time.

**6.5.4** The Organisation's right to audit extends to material sub-contractors where applicable under the vendor contract.

### 6.6 Contractual Obligations

**6.6.1** All contracts with Tier 1 and Tier 2 vendors must include, at a minimum, the following provisions relating to security certifications:

- A representation and warranty by the vendor that it holds, and will maintain throughout the term, the certifications specified in the contract.
- An obligation to notify [Organization Name] of any change in certification status within **5 business days**.
- An audit right permitting [Organization Name] or its designated representative to verify certification compliance.
- A right of termination for cause in the event of a material and unremedied certification failure.
- An obligation to provide annual certification evidence on the anniversary of the contract date.

**6.6.2** Procurement must use the Organisation's approved vendor contract template, which incorporates the standard certification clauses. Any derogations from standard clauses must be approved by Legal and the Head of Vendor Management.

### 6.7 Transition Arrangements for Existing Vendors

**6.7.1** Existing vendors that do not meet the certification requirements of this policy at the time of its effective date shall be subject to the following transition arrangements:

| Vendor Tier | Transition Period | Required Action |
|---|---|---|
| Tier 1 — Critical | 6 months from effective date | Obtain required certifications or obtain approved risk exception |
| Tier 2 — High Risk | 12 months from effective date | Obtain required certifications or obtain approved risk exception |
| Tier 3 — Low Risk | No mandatory transition | Encourage certification; review at next contract renewal |

**6.7.2** The Head of Vendor Management shall produce a transition plan within **30 days** of the effective date, identifying all existing vendors subject to transition requirements and the actions planned to achieve compliance.

**6.7.3** Progress against the transition plan shall be reported to the Technology Risk Committee on a **quarterly basis** until all Tier 1 and Tier 2 vendors are compliant.

---

## 7. Vendor Risk Tiering Criteria

*This section defines how vendors are classified into risk tiers. The tiering criteria should reflect the Organisation's actual risk appetite and the specific nature of financial services operations. Authors should validate these criteria against BNM RMiT definitions of "Critical Service Providers".*

### 7.1 Tiering Framework Overview

The Organisation employs a three-tier vendor risk classification framework. All third-party vendors must be assessed against the criteria below and assigned to an appropriate tier at the point of onboarding and reviewed at least annually or upon any material change in the vendor relationship.

### 7.2 Tier Classification Criteria

#### Tier 1 — Critical

A vendor is classified as **Tier 1 (Critical)** if **any** of the following criteria apply:

| Criterion | Threshold / Description |
|---|---|
| **Operational Criticality** | Services provided are essential to the Organisation's ability to conduct regulated financial activities; disruption would immediately impact customers or regulatory compliance. |
| **Data Sensitivity** | Vendor has access to, or processes, Category 1 data (as defined in the Data Classification Policy), including personal financial data, account credentials, or authentication data. |
| **System Access** | Vendor has privileged access to core banking systems, payment systems, or other Tier 1 critical IT assets. |
| **Regulatory Classification** | Arrangement is classified as a Material Outsourcing Arrangement requiring BNM notification/approval. |
| **Substitutability** | No viable alternative provider can be engaged within **30 days** in the event of vendor failure. |
| **Customer Impact** | A failure of the vendor's services would result in direct customer impact affecting more than **[X]%** of the Organisation's customer base. |
| **Financial Exposure** | Annual contract value exceeds **MYR [Threshold Amount]** or represents more than **[X]%** of the Organisation's IT expenditure. |

*Examples of Tier 1 vendors typically include: Core banking system providers, cloud infrastructure providers hosting production systems, payment gateway operators, managed security operations centres (SOCs).*

#### Tier 2 — High Risk

A vendor is classified as **Tier 2 (High Risk)** if it does not meet Tier 1 criteria but **any** of the following apply:

| Criterion | Threshold / Description |
|---|---|
| **Data Sensitivity** | Vendor has access to Category 2 data, including non-public internal business information or aggregated customer data. |
| **System Access** | Vendor has non-privileged access to internal systems or networks. |
| **Operational Impact** | Disruption to vendor services would cause degradation (not cessation) of regulated activities. |
| **Substitutability** | Alternative provider can be engaged within **30–90 days**. |
| **Regulatory Relevance** | Vendor supports compliance reporting, regulatory data submission, or audit functions. |
| **Sub-contracting Role** | Vendor acts as a material sub-contractor for a Tier 1 vendor arrangement. |

*Examples of Tier 2 vendors typically include: HR software providers with employee data access, marketing analytics platforms, secondary data centre operators.*

#### Tier 3 — Low Risk

A vendor is classified as **Tier 3 (Low Risk)** if **none** of the Tier 1 or Tier 2 criteria apply:

| Criterion | Description |
|---|---|
| **Data Access** | No access to the Organisation's data beyond publicly available information. |
| **System Access** | No access to internal IT systems or networks. |
| **Substitutability** | Easily substituted within **30 days** with no material impact. |
| **Operational Impact** | Disruption would not affect regulated activities or customer services. |

*Examples of Tier 3 vendors typically include: Office supply vendors, courier services, generic software-as-a-service tools with no data integration.*

### 7.3 Tiering Process

1. **Initial Classification:** Business Unit Owner completes the Vendor Risk Assessment Questionnaire (Appendix A) at the time of onboarding.
2. **Review and Approval:** Technology Risk Manager reviews the questionnaire and approves the tier assignment.
3. **Recording:** Head of Vendor Management records the tier classification in the Vendor Register.
4. **Annual Review:** Tier classifications are reviewed annually or upon material change in the vendor relationship.
5. **Appeals:** Vendors or Business Unit Owners may request a reclassification review through the Head of Vendor Management, with final determination by the Technology Risk Manager.

### 7.4 Tier Escalation Triggers

Any of the following events shall trigger an immediate re-assessment of a vendor's risk tier:

- A material change in the scope of services provided by the vendor.
- A significant security incident affecting the vendor's environment.
- A change in the vendor's ownership structure (e.g., merger, acquisition).
- Discovery that the vendor has sub-contracted services to a material sub-contractor without prior disclosure.
- A regulatory action against the vendor in any jurisdiction.
- Withdrawal or suspension of a key certification.

---

## 8. Recognised Security Certifications

*This section provides the definitive list of certifications accepted under this policy. The list should be reviewed annually by the CISO and updated to reflect the evolving landscape of security standards. Authors should confirm that each listed certification is appropriate for the Malaysian financial services context.*

### 8.1 Approved Certification List

The following certifications are recognised under this policy as of the **[Last Review Date]**. The CISO is responsible for maintaining and updating this list on an annual basis.

#### 8.1.1 Information Security Management

| Certification | Issuing Body | Applicability | Tier Requirement |
|---|---|---|---|
| **ISO/IEC 27001:2022** — Information Security Management System | Accredited certification bodies (UKAS, DAkkS, JAB, etc.) | All vendor types; foundational certification | Tier 1 (mandatory) |
| **SOC 2 Type II** — Trust Services Criteria (Security, Availability, Confidentiality) | AICPA-licensed CPA firms | Cloud service providers, SaaS vendors, data processors | Tier 1 (mandatory or as alternative to ISO 27001) |
| **SOC 2 Type I** | AICPA-licensed CPA firms | As above | Tier 2 (acceptable for initial onboarding; Type II required within 18 months) |
| **ISO/IEC 27017:2015** — Cloud Security Controls | Accredited certification bodies | Cloud service providers | Tier 1 cloud vendors (supplementary) |
| **ISO/IEC 27018:2019** — Protection of PII in Public Clouds | Accredited certification bodies | Cloud vendors processing personal data | Tier 1 cloud vendors processing personal data |

#### 8.1.2 Payment and Financial Services

| Certification | Issuing Body | Applicability | Tier Requirement |
|---|---|---|---|
| **PCI DSS Level 1** — Payment Card Industry Data Security Standard | PCI SSC Qualified Security Assessors (QSA) | Payment processors, card scheme participants | Mandatory for payment vendors |
| **PCI DSS Level 2–4** | PCI SSC QSA or Self-Assessment Questionnaire (SAQ) | Lower-volume payment entities | As applicable to transaction volumes |
| **PCI PIN (PCI PTS)** | PCI SSC | PIN entry device manufacturers and operators | Applicable to PIN-related services |
| **PCI P2PE** | PCI SSC | Point-to-point encryption solution providers | Applicable to P2PE service vendors |

#### 8.1.3 Technology and Cloud Security

| Certification | Issuing Body | Applicability | Tier Requirement |
|---|---|---|---|
| **CSA STAR Level 2** (Cloud Security Alliance Security, Trust, Assurance, and Risk) | CSA / Accredited auditors | Cloud service providers | Tier 1 cloud vendors (supplementary) |
| **FedRAMP Moderate/High** (where applicable) | US FedRAMP PMO | US government-accredited cloud vendors | Accepted as equivalent to CSA STAR / SOC 2 |
| **MTCS (Multi-Tier Cloud Security) SS 584** | Singapore BSI / Accredited bodies | ASEAN cloud vendors | Accepted for ASEAN-based cloud providers |

#### 8.1.4 Business Continuity and Operational Resilience

| Certification | Issuing Body | Applicability | Tier Requirement |
|---|---|---|---|
| **ISO 22301:2019** — Business Continuity Management System | Accredited certification bodies | Tier 1 vendors supporting critical operations | Recommended for Tier 1; mandatory for data centre operators |
| **ISO/IEC 27031** — ICT Readiness for Business Continuity | Accredited certification bodies | IT service continuity | Supplementary |

#### 8.1.5 Other Recognised Standards

| Certification / Standard | Issuing Body | Applicability |
|---|---|---|
| **NIST Cybersecurity Framework (CSF) Assessment** | NIST (assessment by qualified assessor) | Accepted as supplementary evidence |
| **Cyber Essentials Plus** (UK NCSC) | NCSC UK / Accredited CBs | UK-based vendors; accepted as supplementary |
| **ISO/IEC 20000-1** — IT Service Management | Accredited certification bodies | IT managed service providers |

### 8.2 Certification Equivalency

Where a vendor holds a certification not listed above but claims equivalency, the following process applies:

1. The vendor submits a written equivalency request to the Head of Vendor Management, including full details of the certification, the issuing body's accreditation, and a mapping to the relevant recognised standard.
2. The CISO reviews the request and provides a written recommendation within **15 business days**.
3. Equivalency determinations are approved by the Technology Risk Manager and recorded in the Vendor Certification Register.
4. Approved equivalencies are reviewed annually and may be revoked if the underlying standard is deprecated or materially revised.

### 8.3 Certification Scope Considerations

Certifications must be scoped to cover, at a minimum:

- The specific services, systems, and infrastructure used to deliver services to the Organisation.
- The geographic locations from which services are delivered.
- Any sub-contractors or third parties that materially contribute to service delivery.

Vendors must provide a copy of the certification scope statement, and any material discrepancy between the certified scope and the services provided must be disclosed and assessed by the CISO.

---

## 9. Due Diligence Checklist

*This section provides a structured checklist to guide vendor management teams through the certification due diligence process. The checklist should be completed for all Tier 1 and Tier 2 vendors at onboarding and annually thereafter. Authors should adapt the checklist to reflect any additional organisational-specific requirements.*

### 9.1 Pre-Onboarding Due Diligence

The following checklist must be completed and signed off by the Head of Vendor Management and Technology Risk Manager before a Tier 1 or Tier 2 vendor contract is executed.

#### Phase 1 — Information Collection

| # | Due Diligence Item | Evidence Required | Status | Responsible | Date Completed |
|---|---|---|---|---|---|
| 1.1 | Confirm vendor's legal entity name, registration, and jurisdiction of incorporation. | Certificate of Incorporation / Company Registry extract | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| 1.2 | Obtain completed Vendor Risk Assessment Questionnaire (Appendix A). | Completed questionnaire | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| 1.3 | Confirm vendor risk tier classification. | Tier classification approval (Technology Risk Manager) | [ ] Complete [ ] Pending [ ] N/A | Technology Risk | |
| 1.4 | Obtain copies of all applicable security certifications. | Original or certified copies of certificates | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| 1.5 | Obtain certification scope statements for all certifications. | Scope statements from certification bodies | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| 1.6 | Identify all material sub-contractors and obtain their certification evidence. | Sub-contractor disclosure and certification evidence | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| 1.7 | Obtain most recent external security audit report (e.g., penetration test results, SOC 2 report). | Audit report (dated within 12 months) | [ ] Complete [ ] Pending [ ] N/A | IT Security | |
| 1.8 | Obtain vendor's information security policy and related documentation. | Security policy documentation | [ ] Complete [ ] Pending [ ] N/A | IT Security | |
| 1.9 | Obtain vendor's business continuity and disaster recovery plans. | BCP / DRP documentation | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| 1.10 | Review vendor's incident management and notification procedures. | Incident response policy | [ ] Complete [ ] Pending [ ] N/A | IT Security | |

#### Phase 2 — Verification

| # | Due Diligence Item | Verification Method | Status | Responsible | Date Completed |
|---|---|---|---|---|---|
| 2.1 | Verify all certification documents against issuing body's registry. | Online registry / direct confirmation with issuing body | [ ] Complete [ ] Pending [ ] N/A | IT Security | |
| 2.2 | Confirm certifications are current, valid, and not under suspension. | Registry check / issuing body confirmation | [ ] Complete [ ] Pending [ ] N/A | IT Security | |
| 2.3 | Verify certification scope covers services and locations relevant to the Organisation. | Scope statement review | [ ] Complete [ ] Pending [ ] N/A | IT Security | |
| 2.4 | Cross-reference vendor questionnaire responses against certification evidence. | Document review | [ ] Complete [ ] Pending [ ] N/A | Technology Risk | |
| 2.5 | Conduct reference checks with existing clients of the vendor (where possible). | Reference interviews / written references | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| 2.6 | Review vendor's financial stability (financial statements or credit reports). | Financial statements / credit agency report | [ ] Complete [ ] Pending [ ] N/A | Procurement | |
| 2.7 | Conduct sanctions and adverse media screening on vendor entity and key personnel. | Screening tool / manual search | [ ] Complete [ ] Pending [ ] N/A | Legal / Compliance | |

#### Phase 3 — Assessment and Approval

| # | Due Diligence Item | Output | Status | Responsible | Date Completed |
|---|---|---|---|---|---|
| 3.1 | Prepare Due Diligence Assessment Report summarising findings. | Written report | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| 3.2 | Identify any gaps, risks, or concerns; document proposed mitigants. | Risk register entry / gap analysis | [ ] Complete [ ] Pending [ ] N/A | Technology Risk | |
| 3.3 | Obtain approval from Head of Vendor Management for onboarding. | Signed approval | [ ] Complete [ ] Pending [ ] N/A | Head of Vendor Mgmt | |
| 3.4 | Obtain approval from Technology Risk Manager for onboarding. | Signed approval | [ ] Complete [ ] Pending [ ] N/A | Technology Risk | |
| 3.5 | Record vendor and certification details in Vendor Certification Register. | Register updated | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| 3.6 | Ensure certification requirements are embedded in vendor contract. | Contract review confirmation | [ ] Complete [ ] Pending [ ] N/A | Legal | |

### 9.2 Annual Due Diligence Review

The following checklist must be completed annually for all Tier 1 and Tier 2 vendors.

| # | Annual Review Item | Evidence Required | Status | Responsible | Date Completed |
|---|---|---|---|---|---|
| A.1 | Confirm vendor risk tier classification remains appropriate. | Re-assessment documentation | [ ] Complete [ ] Pending [ ] N/A | Technology Risk | |
| A.2 | Obtain updated copies of all certifications due for renewal in the past 12 months. | Renewal certificates | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| A.3 | Verify all certifications remain current and have not lapsed or been suspended. | Registry check | [ ] Complete [ ] Pending [ ] N/A | IT Security | |
| A.4 | Obtain most recent external audit report (e.g., annual SOC 2 Type II report). | Audit report | [ ] Complete [ ] Pending [ ] N/A | IT Security | |
| A.5 | Review any material changes to sub-contractors or delivery arrangements. | Vendor disclosure | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| A.6 | Review vendor SLA performance against KPIs for the prior 12 months. | SLA performance report | [ ] Complete [ ] Pending [ ] N/A | Business Unit Owner | |
| A.7 | Confirm no material regulatory actions or sanctions against the vendor. | Adverse media / regulatory search | [ ] Complete [ ] Pending [ ] N/A | Legal / Compliance | |
| A.8 | Confirm vendor's incident notification compliance for any incidents in the prior year. | Incident log review | [ ] Complete [ ] Pending [ ] N/A | IT Security | |
| A.9 | Update Vendor Certification Register with review outcomes. | Register updated | [ ] Complete [ ] Pending [ ] N/A | Vendor Management | |
| A.10 | Escalate any findings or gaps to Technology Risk Manager. | Escalation report (if applicable) | [ ] Complete [ ] Pending [ ] N/A | Head of Vendor Mgmt | |

---

## 10. SLA and KPI Definitions

*This section defines the service level commitments and performance indicators that vendors must meet in relation to their security certification obligations. Authors should adjust thresholds to reflect the Organisation's risk appetite and the criticality of each vendor relationship. These SLAs should be incorporated into vendor contracts.*

### 10.1 Certification Maintenance SLAs

The following SLAs govern vendor obligations in relation to maintaining and evidencing security certifications.

| SLA Reference | Obligation | Measurement | Target | Consequence of Breach |
|---|---|---|---|---|
| **SLA-CERT-01** | Maintain valid, in-scope certifications at all times | Continuous monitoring; verified at annual review | 100% — no lapses permitted for Tier 1 | Immediate escalation; potential contract suspension |
| **SLA-CERT-02** | Notify [Organization Name] of certification changes | Business days from change event | ≤ 5 business days | Formal warning; repeat breach triggers review |
| **SLA-CERT-03** | Submit renewal certification evidence prior to expiry | Calendar days before expiry | ≤ 30 calendar days before expiry | Formal warning; failure to renew triggers SLA-CERT-01 breach |
| **SLA-CERT-04** | Provide annual certification evidence | Days from annual review request | ≤ 15 business days from request | Formal warning; second failure escalated to CISO |
| **SLA-CERT-05** | Submit response to certification verification queries | Business days from query | ≤ 10 business days | Formal warning |
| **SLA-CERT-06** | Submit sub-contractor certification evidence on request | Business days from request | ≤ 15 business days | Formal warning |
| **SLA-CERT-07** | Disclose new material sub-contractors | Business days from engagement | ≤ 10 business days | Formal warning; breach of contract |

### 10.2 Incident and Audit SLAs

| SLA Reference | Obligation | Target | Consequence of Breach |
|---|---|---|---|
| **SLA-INC-01** | Notify [Organization Name] of security incidents affecting services | ≤ 4 hours for P1 incidents; ≤ 24 hours for P2 | Formal escalation; potential contract review |
| **SLA-INC-02** | Provide incident root cause analysis report | ≤ 5 business days from incident resolution | Formal warning |
| **SLA-AUD-01** | Cooperate fully with [Organization Name] audit requests | Within agreed audit window | Formal escalation; potential contract suspension |
| **SLA-AUD-02** | Provide access to audit logs and evidence on request | ≤ 5 business days from request | Formal warning |

### 10.3 Key Performance Indicators

The following KPIs are used to measure vendor performance in relation to certification and security compliance and are reviewed at the annual vendor review meeting.

| KPI Reference | KPI Name | Description | Target | Measurement Frequency |
|---|---|---|---|---|
| **KPI-CERT-01** | Certification Currency Rate | Percentage of required certifications that are current and valid | 100% | Quarterly |
| **KPI-CERT-02** | Certification Renewal Timeliness | Percentage of certifications renewed before expiry (with ≥30 days notice to the Organisation) | ≥ 95% | Annual |
| **KPI-CERT-03** | Notification Compliance Rate | Percentage of certification changes notified within the SLA-CERT-02 timeframe | ≥ 95% | Annual |
| **KPI-CERT-04** | Due Diligence Response Rate | Percentage of due diligence requests responded to within agreed timeframes | ≥ 90% | Annual |
| **KPI-INC-01** | Incident Notification Timeliness | Percentage of security incidents notified within SLA-INC-01 timeframes | 100% for P1; ≥ 95% for P2 | Annual |
| **KPI-AUD-01** | Audit Cooperation Rate | Percentage of audit requests completed within agreed timelines | ≥ 95% | Annual |
| **KPI-RISK-01** | Open Risk Item Resolution Rate | Percentage of identified security risk items remediated within agreed timelines | ≥ 80% | Quarterly |

### 10.4 SLA Reporting and Governance

**10.4.1** Vendors must provide a quarterly SLA performance report to the Head of Vendor Management no later than **15 business days** after the end of each quarter. The report format is specified in Appendix C.

**10.4.2** The Head of Vendor Management shall consolidate vendor SLA performance data and present a summary report to the Technology Risk Committee on a **semi-annual basis**.

**10.4.3** Persistent SLA underperformance (defined as failing to meet any SLA target in **two or more consecutive quarters**) shall trigger a formal Vendor Performance Improvement Plan (PIP). The PIP process is defined in the Organisation's Third-Party Risk Management Policy.

**10.4.4** SLA targets may be adjusted by mutual written agreement between the Organisation and the vendor, subject to approval by the Head of Vendor Management and Technology Risk Manager. Adjustments must not reduce targets below the minimum standards implied by this policy.

---

## 11. Exit Strategy Requirements

*This section defines the requirements for planning and executing the termination of a vendor relationship, whether due to certification non-compliance, contract expiry, vendor failure, or other reasons. Authors should ensure exit plans are practical and tested. BNM RMiT requires financial institutions to demonstrate they can exit critical vendor relationships without material disruption.*

### 11.1 Exit Strategy Policy

**11.1.1** A documented Exit Strategy must be in place for **all Tier 1 vendors** before the vendor relationship commences and maintained throughout the duration of the engagement. Exit Strategies for Tier 2 vendors must be in place within **90 days** of onboarding.

**11.1.2** Exit Strategies must be reviewed and updated **annually** and upon any material change in the vendor relationship, the regulatory environment, or the Organisation's operational structure.

**11.1.3** Exit Strategies must be tested through a desktop exercise or simulation at least **every two years** for Tier 1 vendors. Test results and any identified gaps must be reported to the Technology Risk Committee.

**11.1.4** Exit Strategies must be stored in a location accessible to key stakeholders independent of the vendor's systems or infrastructure.

### 11.2 Minimum Exit Strategy Content

Each Exit Strategy document must address the following elements:

#### 11.2.1 Trigger Events

The Exit Strategy must identify the events that would trigger activation, including but not limited to:

| Exit Trigger Category | Examples |
|---|---|
| **Certification Failure** | Failure to obtain or renew required certifications; suspension of a material certification. |
| **Security Incident** | A material security breach or data loss event caused by or involving the vendor. |
| **Vendor Insolvency** | Vendor enters administration, receivership, or winding-up proceedings. |
| **Regulatory Action** | Regulatory prohibition or restriction imposed on the vendor in any jurisdiction. |
| **Contract Breach** | Material breach of contractual obligations by the vendor. |
| **Regulatory Direction** | Direction from BNM or another regulator to terminate the arrangement. |
| **Strategic Decision** | Organisational decision to in-source, re-source, or discontinue the service. |
| **Contract Expiry** | Planned termination at the end of the contract term. |

#### 11.2.2 Exit Plan Components

| Component | Required Content |
|---|---|
| **Service Inventory** | Comprehensive list of all services, systems, integrations, and data assets covered by the vendor arrangement. |
| **Dependencies Mapping** | Identification of all internal processes, systems, and third parties that depend on the vendor's services. |
| **Transition Options** | Analysis of at least two alternative transition paths: (a) in-sourcing, and (b) alternative vendor. Preferred option recommended with rationale. |
| **Alternative Vendor Identification** | At least one pre-identified alternative vendor with preliminary capability assessment for Tier 1 vendors. |
| **Transition Timeline** | Realistic, phased timeline for executing the transition, from trigger event to full migration. Tier 1: target ≤ **[X months]**; Tier 2: target ≤ **[Y months]**. |
| **Data Migration Plan** | Procedures for the secure return, migration, or destruction of the Organisation's data held by the vendor, including confirmation of deletion. |
| **Knowledge Transfer Requirements** | Documentation, training, or handover activities required from the vendor to ensure continuity of operations. |
| **Resource Requirements** | Identification of internal and external resources required to execute the exit, including budget estimate. |
| **Communication Plan** | Stakeholder communication plan, including internal teams, customers (if applicable), and regulators. |
| **Regulatory Notification** | Obligations to notify BNM or other regulators in the event of an exit from a material outsourcing arrangement. |
| **Contractual Protections** | Summary of contractual exit clauses, notice periods, data return obligations, and post-termination obligations. |
| **Continuity Measures** | Interim arrangements to maintain service continuity during the transition period. |
| **Exit Completion Criteria** | Defined criteria for declaring the exit complete, including data deletion confirmation and system disconnection. |

### 11.3 Contractual Exit Provisions

All Tier 1 and Tier 2 vendor contracts must include, as a minimum, the following exit-related provisions:

- A **minimum notice period** for termination by either party of **[X months]** for Tier 1 and **[Y months]** for Tier 2, unless termination is for cause.
- An obligation on the vendor to provide reasonable **transition assistance** for a period of up to **[Z months]** following notice of termination.
- An obligation to **return or securely destroy** all of the Organisation's data within **[X days]** of the termination date, with written confirmation of completion.
- A prohibition on the vendor **deleting or encrypting** the Organisation's data during the notice or transition period.
- Rights for the Organisation to access the vendor's systems solely for the purpose of data extraction during the transition period.
- **Step-in rights** allowing the Organisation or a designated third party to take over operations in the event of vendor insolvency or material breach.
- Restrictions on the vendor **ceasing operations** without adequate notice to allow the Organisation to activate its exit plan.

### 11.4 Certification-Related Exit Triggers

Where exit is triggered by a certification failure, the following specific procedures apply:

| Step | Action | Timeline | Responsible |
|---|---|---|---|
| 1 | Receive notification of certification lapse or suspension. | Day 0 | Vendor Management |
| 2 | Assess severity and impact; classify as P1 (critical) or P2 (significant). | Day 0–1 | Technology Risk |
| 3 | Notify CISO, CTO, and Head of Vendor Management. | Day 1 | Vendor Management |
| 4 | Engage vendor to understand remediation plan and timeline. | Day 1–3 | Head of Vendor Mgmt |
| 5 | Assess whether compensating controls are sufficient to continue operations. | Day 1–5 | CISO |
| 6 | If remediation is feasible: issue formal remediation notice and agree timeline (max 90 days for Tier 1). | Day 5 | Head of Vendor Mgmt |
| 7 | If remediation is not feasible or agreed timeline is unacceptable: activate Exit Plan. | Day 5–10 | Head of Vendor Mgmt |
| 8 | Notify Board Risk Committee of material certification failure and response. | Day 5 | Technology Risk |
| 9 | Consider BNM notification obligations if the arrangement is a material outsourcing. | Day 5–10 | Legal / Compliance |
| 10 | Monitor remediation progress at agreed intervals. | Ongoing | Vendor Management |
| 11 | Confirm certification reinstatement in writing; update Vendor Certification Register. | Upon resolution | Vendor Management |

---

## 12. Non-Compliance and Escalation

*This section defines the Organisation's response to instances of vendor non-compliance with this policy. A proportionate, risk-based escalation framework is essential to demonstrate effective governance to regulators.*

### 12.1 Non-Compliance Classification

| Classification | Description | Examples |
|---|---|---|
| **Minor Non-Compliance** | Isolated, low-impact breach with no material security risk; readily remediable. | Late submission of certification evidence (within 5 days of SLA deadline); administrative error in certification documentation. |
| **Moderate Non-Compliance** | Repeated or unresolved minor breach; or a single incident with potential (but not actual) security impact. | Failure to notify a certification change within SLA timeframe; certification scope gap identified but remediated promptly. |
| **Material Non-Compliance** | Serious breach with actual or potential significant security or regulatory impact. | Lapse in a mandatory certification for a Tier 1 vendor; undisclosed sub-contractor with access to sensitive data; discovery of fraudulent certification documentation. |
| **Critical Non-Compliance** | Severe breach posing immediate risk to the Organisation, its customers, or regulatory standing. | Vendor operating without any required certification; certification revoked due to regulatory action or security breach; vendor refusal to cooperate with audit. |

### 12.2 Escalation and Response Framework

| Classification | Response Actions | Timeline | Approving Authority |
|---|---|---|---|
| **Minor** | Issue written notification to vendor; document in Vendor Register; monitor for recurrence. | Within 5 business days | Head of Vendor Management |
| **Moderate** | Issue formal warning letter; require written remediation plan from vendor; increase monitoring frequency; escalate to Technology Risk Manager. | Within 10 business days | Technology Risk Manager |
| **Material** | Issue formal breach notice; require urgent remediation plan (max 30 days); consider contract suspension; notify CISO and CTO; escalate to Technology Risk Committee. | Within 3 business days | CISO / Technology Risk Committee |
| **Critical** | Activate Exit Plan (if applicable); consider immediate contract suspension; notify Board Risk Committee; assess BNM notification obligations; engage Legal. | Immediate (within 24 hours) | CTO / Board Risk Committee |

### 12.3 Risk Exception Process

**12.3.1** Vendors that are unable to meet the certification requirements of this policy may apply for a formal risk exception. Risk exceptions are extraordinary measures and must not be granted as a matter of routine.

**12.3.2** A risk exception request must include:

- A detailed explanation of why the vendor is unable to meet the certification requirement.
- A risk assessment quantifying the potential impact of the exception.
- A description of compensating controls proposed to mitigate the risk.
- A defined remediation timeline with milestones.
- The business justification for continuing the vendor relationship.

**12.3.3** Risk exceptions must be:

- Approved by the Technology Risk Manager for Tier 2 vendors.
- Approved by the CISO and CTO for Tier 1 vendors.
- Noted by the Board Risk Committee for any exception granted to a Tier 1 vendor.
- Documented in the Technology Risk Register and the Vendor Certification Register.
- Subject to quarterly review until the exception is resolved.
- Time-limited: no exception may be granted for a period exceeding **12 months** without re-approval.

**12.3.4** Any exception granted to a vendor that is classified as a Material Outsourcing Arrangement must be assessed for regulatory notification obligations under BNM guidelines.

---

## 13. Review and Approval

### 13.1 Policy Review Schedule

This policy shall be reviewed:
- **Annually** from the effective date, by the Head of Vendor Management.
- Following any material change in BNM RMiT or other applicable regulatory requirements.
- Following a material security incident involving a third-party vendor.
- At the direction of the Board Risk Committee or senior management.

### 13.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Effective Date] | [Author Name] | Initial version — new policy document issued in accordance with BNM RMiT Paragraph 14.2. |
| [1.1] | [Date] | [Author Name] | [Description of change] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 13.3 Approval Sign-Off

*All approvers must sign and date this table to confirm that they have reviewed and approved the policy as fit for purpose.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Vendor Management (Policy Owner) | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Technology Officer / Chief Information Officer | [Name] | [Signature] | [Date] |
| Technology Risk Manager | [Name] | [Signature] | [Date] |
| Head of Legal and Compliance | [Name] | [Signature] | [Date] |
| Chief Risk Officer | [Name] | [Signature] | [Date] |
| Board Risk Committee Chairperson | [Name] | [Signature] | [Date] |

---

## 14. References

*This section provides a consolidated list of all regulatory instruments, standards, and internal documents referenced in this policy. Authors should verify that all references are current and hyperlinked where accessible on internal systems.*

### 14.1 Regulatory References

| Reference | Title | Publisher | Relevance |
|---|---|---|---|
| **BNM RMiT** | Risk Management in Technology Policy Document | Bank Negara Malaysia | Primary regulatory driver; Paragraph 14.2 directly mandates third-party certification requirements. |
| **BNM RMiT Para 14.1** | Governance of Technology Outsourcing | Bank Negara Malaysia | Governance framework for third-party technology relationships. |
| **BNM RMiT Para 14.3** | Contractual Requirements for Outsourcing | Bank Negara Malaysia | Minimum contract provisions for outsourcing arrangements. |
| **BNM RMiT Para 10** | Cyber Risk Management | Bank Negara Malaysia | Cyber risk requirements including supply chain security. |
| **BNM Outsourcing Policy** | Guidelines on Outsourcing | Bank Negara Malaysia | Supplementary guidance on outsourcing governance. |
| **FSA 2013** | Financial Services Act 2013 | Parliament of Malaysia | Regulatory framework for licensed financial institutions; Section 144 on outsourcing. |
| **IFSA 2013** | Islamic Financial Services Act 2013 | Parliament of Malaysia | Equivalent regulatory framework for Islamic financial institutions. |
| **PDPA 2010** | Personal Data Protection Act 2010 | Parliament of Malaysia | Data protection obligations applicable to vendor data processing. |
| **NACSA Cybersecurity Framework** | National Cybersecurity Framework | NACSA Malaysia | National cybersecurity baseline for CNII entities. |

### 14.2 Standards and Frameworks

| Standard | Title | Body |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO / IEC |
| ISO/IEC 27002:2022 | Information Security Controls | ISO / IEC |
| ISO/IEC 27017:2015 | Cloud Security Controls | ISO / IEC |
| ISO/IEC 27018:2019 | Protection of PII in Public Clouds | ISO / IEC |
| ISO 22301:2019 | Business Continuity Management Systems | ISO |
| SOC 2 Trust Services Criteria | System and Organisation Controls | AICPA |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | PCI SSC |
| CSA STAR | Cloud Security Alliance Security, Trust, Assurance and Risk Program | CSA |
| NIST Cybersecurity Framework v2.0 | Cybersecurity Framework | NIST |

### 14.3 Internal Policy References

| Policy / Framework | Owner |
|---|---|
| [Organization Name] Third-Party Risk Management Policy | Head of Vendor Management |
| [Organization Name] Information Security Policy | CISO |
| [Organization Name] Outsourcing Policy | Head of Legal and Compliance |
| [Organization Name] Data Classification and Handling Policy | CISO |
| [Organization Name] Business Continuity Management Policy | Head of Operations |
| [Organization Name] Procurement Policy | Procurement Manager |
| [Organization Name] IT Governance Policy | CTO / CIO |
| [Organization Name] Technology Risk Management Framework | Technology Risk Manager |

---

## 15. Appendices

*The appendices below provide supporting tools, templates, and reference materials for implementing this policy. Authors should ensure each appendix is maintained in alignment with the main policy and reviewed at each annual review cycle.*

---

### Appendix A — Vendor Risk Assessment Questionnaire

*This appendix contains the standardised questionnaire to be completed by prospective vendors and used to support risk tier classification. Authors should ensure the questionnaire covers all dimensions of the tiering criteria defined in Section 7.*

**Section A: Vendor Information**

| Field | Response |
|---|---|
| Vendor Legal Entity Name | |
| Registration Number | |
| Country of Incorporation | |
| Principal Place of Business | |
| Contact Name (Relationship Manager) | |
| Contact Email and Phone | |
| Nature of Services to be Provided | |
| Contract Value (Annual, MYR) | |
| Contract Term | |

**Section B: Security Certifications**

| Question | Response |
|---|---|
| List all current security certifications held by the organisation. | |
| For each certification: name, issuing body, date of issue, expiry date, and scope. | |
| Are any certifications currently under suspension or subject to ongoing surveillance findings? | Yes / No — If Yes, provide details. |
| What is the vendor's certification renewal process? | |
| Does the vendor have a certification roadmap for certifications not yet held? | Yes / No — If Yes, provide roadmap. |

**Section C: Sub-Contractors**

| Question | Response |
|---|---|
| Does the vendor use material sub-contractors in delivering services? | Yes / No |
| If Yes, list all material sub-contractors, their role, and their certification status. | |
| How does the vendor monitor and enforce security requirements for sub-contractors? | |

**Section D: Data and Systems**

| Question | Response |
|---|---|
| What types of data will the vendor access, process, or store? | |
| Where will the data be stored (country/jurisdiction)? | |
| What systems of the Organisation will the vendor have access to? | |
| What level of access will vendor personnel have (read-only / privileged / administrative)? | |

**Section E: Incident Management**

| Question | Response |
|---|---|
| Describe the vendor's security incident detection and response process. | |
| What is the vendor's policy for notifying clients of security incidents? | |
| Has the vendor experienced any security incidents in the past 3 years affecting client data? | Yes / No — If Yes, provide summary. |

**Section F: Business Continuity**

| Question | Response |
|---|---|
| Does the vendor have a documented BCP and DRP? | Yes / No |
| When was the BCP/DRP last tested? What were the outcomes? | |
| What is the vendor's Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for critical services? | |

---

### Appendix B — Vendor Certification Register Template

*This appendix provides the template for the Vendor Certification Register, which must be maintained by the Head of Vendor Management and updated as described in this policy.*

| Field | Description |
|---|---|
| **Vendor ID** | [Unique identifier from Vendor Register] |
| **Vendor Name** | [Legal entity name] |
| **Vendor Tier** | [Tier 1 / Tier 2 / Tier 3] |
| **Services Provided** | [Brief description] |
| **Certification Name** | [e.g., ISO/IEC 27001:2022] |
| **Issuing Body** | [e.g., BSI, DNV, Bureau Veritas] |
| **Certificate Number** | [Certificate reference number] |
| **Issue Date** | [DD/MM/YYYY] |
| **Expiry Date** | [DD/MM/YYYY] |
| **Certified Scope** | [Scope of certification as stated on certificate] |
| **Scope Adequacy** | [Confirmed / Partial / Insufficient] |
| **Last Verified Date** | [DD/MM/YYYY] |
| **Verification Method** | [Registry check / Issuing body confirmation / Internal review] |
| **Verified By** | [Name and role of verifying officer] |
| **Status** | [Valid / Expired / Suspended / Renewal Pending] |
| **Next Review Due** | [DD/MM/YYYY] |
| **Notes / Exceptions** | [Any relevant notes or exception references] |

---

### Appendix C — Quarterly SLA Performance Report Template

*This appendix provides the template to be used by vendors for quarterly SLA performance reporting. Authors should ensure vendors understand this is a contractual obligation and that the format aligns with the SLA definitions in Section 10.*

**Report Period:** [Q1/Q2/Q3/Q4 — Year]
**Vendor Name:** [Vendor Legal Entity Name]
**Prepared By:** [Name and Title]
**Date of Report:** [DD/MM/YYYY]

| SLA Reference | SLA Description | Target | Actual Performance | Compliant (Y/N) | Comments / Explanation |
|---|---|---|---|---|---|
| SLA-CERT-01 | Maintain valid certifications | 100% | [%] | | |
| SLA-CERT-02 | Notify certification changes | ≤ 5 business days | [Average days] | | |
| SLA-CERT-03 | Submit renewal evidence before expiry | ≤ 30 calendar days | [Days] | | |
| SLA-INC-01 | Incident notification (P1) | ≤ 4 hours | [Average hours] | | |
| SLA-INC-01 | Incident notification (P2) | ≤ 24 hours | [Average hours] | | |
| SLA-AUD-01 | Audit cooperation | Within agreed window | [Met/Not Met] | | |

**Summary of Certification Status:**

| Certification | Expiry Date | Status | Renewal Action |
|---|---|---|---|
| [Certification name] | [Date] | [Valid/Due for renewal] | [Action planned] |

**Incidents During Period:**

| Incident Date | Incident Reference | Severity | Notified Within SLA | Summary |
|---|---|---|---|---|
| [Date] | [Reference] | [P1/P2/P3] | [Yes/No] | [Brief summary] |

---

### Appendix D — Exit Strategy Plan Template

*This appendix provides the minimum structure for vendor Exit Strategy documents required under Section 11. A separate Exit Strategy document must be completed for each Tier 1 vendor and maintained as a living document.*

**Vendor Name:** [Vendor Legal Entity Name]
**Services Covered:** [Description of services covered by this Exit Strategy]
**Exit Strategy Version:** [Version number]
**Last Review Date:** [DD/MM/YYYY]
**Next Review Date:** [DD/MM/YYYY]
**Owner:** [Head of Vendor Management]

**1. Service and Dependency Inventory**

*[Complete table for all services, integrations, and data assets covered by this arrangement.]*

| Service / System | Description | Dependencies | Data Classification | Estimated Volume |
|---|---|---|---|---|
| [Service name] | | | | |

**2. Transition Options Analysis**

| Option | Description | Estimated Timeline | Estimated Cost | Key Risks | Recommended |
|---|---|---|---|---|---|
| In-sourcing | | | | | |
| Alternative Vendor A | | | | | |
| Alternative Vendor B | | | | | |

**3. Transition Timeline (Preferred Option)**

| Phase | Activities | Start (T+) | Duration | Responsible |
|---|---|---|---|---|
| Phase 1 — Activation | Confirm trigger; assemble exit team; notify stakeholders. | Day 0 | [X days] | Head of Vendor Mgmt |
| Phase 2 — Planning | Finalise transition plan; engage alternative provider; notify regulator (if required). | Day [X] | [X weeks] | Head of Vendor Mgmt |
| Phase 3 — Migration | Data migration; system reconfiguration; user acceptance testing. | Day [X] | [X weeks] | CTO / IT |
| Phase 4 — Cutover | Activate new arrangement; decommission vendor access; confirm data return/destruction. | Day [X] | [X days] | CTO / IT |
| Phase 5 — Closure | Post-exit review; update registers; confirm completion. | Day [X] | [X weeks] | Head of Vendor Mgmt |

**4. Data Migration and Return Plan**

*[Describe the procedures for migrating or retrieving the Organisation's data from the vendor, including confirmation of secure deletion.]*

**5. Resource Requirements**

| Resource Type | Description | Estimated Cost (MYR) | Source |
|---|---|---|---|
| Internal IT resource | | | |
| External transition consultant | | | |
| Alternative vendor set-up costs | | | |
| Legal and contractual costs | | | |
| **Total Estimated Exit Cost** | | **[Total]** | |

**6. Communication Plan**

| Stakeholder | Communication | Channel | Timing | Responsible |
|---|---|---|---|---|
| Board Risk Committee | | Board meeting / emergency briefing | Immediate (Critical) | CTO |
| BNM | Material outsourcing notification | Written submission | As required | Legal |
| Internal staff | Service change notification | Internal email | Prior to cutover | Head of Vendor Mgmt |
| Customers (if impacted) | Service disruption notice | Email / in-app | As required | Head of Marketing |

---

### Appendix E — Certification Gap Remediation Plan Template

*This appendix provides a template for recording and tracking remediation actions where a vendor certification gap has been identified.*

**Vendor Name:** [Vendor Legal Entity Name]
**Gap Identified By:** [Name / Role]
**Date Identified:** [DD/MM/YYYY]
**Gap Reference:** [Unique reference number]

| Field | Details |
|---|---|
| **Certification(s) Affected** | [List affected certifications] |
| **Nature of Gap** | [Lapsed / Suspended / Scope deficiency / Not held] |
| **Vendor Risk Tier** | [Tier 1 / Tier 2] |
| **Potential Impact Assessment** | [Brief assessment of risk impact] |
| **Non-Compliance Classification** | [Minor / Moderate / Material / Critical — per Section 12.1] |
| **Compensating Controls in Place** | [Describe any interim mitigating controls] |
| **Remediation Actions Required** | [Specific steps the vendor must take] |
| **Target Remediation Date** | [DD/MM/YYYY] |
| **Escalation Level** | [As per Section 12.2] |
| **Approving Authority** | [Name / Role] |
| **Review Frequency** | [Weekly / Fortnightly / Monthly during remediation] |

**Remediation Progress Tracking:**

| Review Date | Status Update | Completed Actions | Outstanding Actions | Next Review Date |
|---|---|---|---|---|
| [Date] | | | | |

**Remediation Closure:**

| Field | Details |
|---|---|
| Date Gap Resolved | [DD/MM/YYYY] |
| Evidence of Resolution | [Description of evidence obtained] |
| Verified By | [Name / Role] |
| Vendor Certification Register Updated | [Yes / No / Date] |
| Closed By (Head of Vendor Management) | [Name / Signature / Date] |

---

*End of Document*

---

**Document Classification: Confidential**
**© [Organization Name] [Year] — All rights reserved. Unauthorised disclosure prohibited.**