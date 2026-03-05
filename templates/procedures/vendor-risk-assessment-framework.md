# Vendor Risk Assessment Framework

---

| **Field** | **Details** |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Title** | Vendor Risk Assessment Framework |
| **Category** | Procedures |
| **Owner** | Head of Technology Risk |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organisation** | [Organisation Name] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clauses** | 10.46 |

---

> **CONFIDENTIALITY NOTICE:** This document is classified as **Confidential**. It contains proprietary and regulatory-sensitive information belonging to [Organisation Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. Recipients are bound by applicable confidentiality obligations and [Organisation Name]'s information security policies.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Scope and Objectives](#2-scope-and-objectives)
3. [Governance Structure](#3-governance-structure)
4. [Vendor Risk Tiering Criteria](#4-vendor-risk-tiering-criteria)
5. [Due Diligence Checklist](#5-due-diligence-checklist)
6. [SLA and KPI Definitions](#6-sla-and-kpi-definitions)
7. [Exit Strategy Requirements](#7-exit-strategy-requirements)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Executive Summary

*Provide a high-level summary of this framework's purpose, the regulatory imperative driving its adoption, and the key outcomes it is designed to achieve. This section should be written last, after all other sections are complete, and should be suitable for a Board or senior management audience.*

### 1.1 Overview

[Organisation Name] (hereinafter referred to as "the Organisation") operates in a highly regulated financial services environment governed by Bank Negara Malaysia (BNM). The increasing reliance on third-party technology vendors to deliver critical banking services necessitates a robust, structured, and risk-proportionate approach to vendor risk management.

This **Vendor Risk Assessment Framework** (hereinafter "the Framework") establishes the methodology, governance structures, processes, and controls required to identify, assess, monitor, and mitigate risks arising from the Organisation's relationships with technology vendors. It has been developed in full alignment with BNM's **Risk Management in Technology (RMiT) Policy Document**, with particular reference to Clause **10.46**, which mandates that financial institutions implement comprehensive technology vendor risk management practices.

### 1.2 Strategic Context

*Summarise the Organisation's strategic dependence on technology vendors and the risk implications of this dependence. Reference any recent regulatory findings, internal audit observations, or industry developments that have informed the development of this Framework.*

[Organisation Name]'s technology landscape includes [Number] active technology vendors providing services across [describe service categories, e.g., core banking, cloud infrastructure, cybersecurity, payment processing, data analytics]. The aggregate risk profile of these vendor relationships represents a significant area of operational and technology risk exposure that must be actively governed.

Key drivers for this Framework include:

- **Regulatory Compliance:** Mandatory requirements under BNM RMiT Clause 10.46 for formalised vendor risk assessment processes.
- **Operational Resilience:** Ensuring continuity of critical banking services in the event of vendor failure, disruption, or exit.
- **Cyber Risk Management:** Mitigating risks introduced through vendor access to the Organisation's systems, networks, and data.
- **Data Protection:** Compliance with the **Personal Data Protection Act 2010 (PDPA)** and BNM's data-related requirements when personal and financial data is processed by vendors.
- **Concentration Risk:** Managing dependency on single vendors or geographically concentrated vendor ecosystems.

### 1.3 Framework Principles

This Framework is underpinned by the following core principles:

| **Principle** | **Description** |
|---|---|
| **Risk Proportionality** | Assessment rigour and monitoring intensity are calibrated to the criticality and risk tier of each vendor. |
| **Lifecycle Coverage** | Risk management spans the full vendor lifecycle: pre-engagement, onboarding, ongoing monitoring, and exit. |
| **Accountability** | Clear ownership is assigned for every vendor relationship and associated risk. |
| **Continuous Improvement** | The Framework is subject to periodic review and is updated to reflect evolving threats, regulatory guidance, and lessons learned. |
| **Independence** | Risk assessments are conducted independently from the business units that procure vendor services. |
| **Transparency** | Vendor risk posture is reported to senior management and the Board through established governance channels. |

### 1.4 Summary of Key Outcomes

Successful implementation of this Framework will deliver the following outcomes:

- A comprehensive, up-to-date inventory of all technology vendors engaged by the Organisation.
- Risk-tiered classification of all vendors, enabling proportionate oversight and resource allocation.
- Standardised due diligence processes applied consistently across all vendor engagements.
- Contractual protections embedded in all vendor agreements, including SLA, audit rights, data protection, and exit provisions.
- A continuous monitoring regime supported by defined KPIs and escalation procedures.
- Documented exit strategies for all Tier 1 and Tier 2 vendors, validated through periodic testing.
- Audit-ready evidence of compliance with BNM RMiT Clause 10.46.

---

## 2. Scope and Objectives

*Define the boundaries of this Framework — which entities, vendor types, and services it applies to — and articulate the specific objectives it is designed to achieve. Be explicit about any exclusions and the rationale for them.*

### 2.1 Purpose

This Framework establishes the Organisation's formal approach to managing technology vendor risk throughout the entire vendor lifecycle. It provides:

1. A **risk tiering methodology** to classify vendors by criticality and risk exposure.
2. **Standardised due diligence requirements** proportionate to vendor risk tier.
3. **Contractual minimum standards** for SLAs, KPIs, audit rights, and data protection.
4. A **continuous monitoring programme** with defined triggers for escalation and reassessment.
5. **Exit strategy requirements** to ensure orderly transition in the event of vendor termination or failure.

### 2.2 Regulatory Basis

This Framework has been developed to satisfy the following regulatory requirements:

| **Regulation / Policy** | **Relevant Clause / Section** | **Requirement** |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 10.46 | Technology vendor risk management |
| BNM Risk Management in Technology (RMiT) | Clause 10.47 | Outsourcing risk management |
| BNM Risk Management in Technology (RMiT) | Clause 10.48 | Vendor concentration risk |
| BNM Outsourcing Policy | Sections 3–7 | Material outsourcing arrangements |
| Personal Data Protection Act 2010 (PDPA) | Sections 6, 9, 11 | Data processor obligations |
| BNM Guidelines on Business Continuity Management | Sections 4–5 | Vendor BCP requirements |
| NACSA Critical Information Infrastructure Guidelines | Section [X] | CII vendor security requirements |

### 2.3 Scope of Application

#### 2.3.1 Entities Covered

This Framework applies to:

- [Organisation Name] (the licensed financial institution)
- All subsidiaries and affiliates under [Organisation Name]'s Group structure, where applicable and to the extent permitted by applicable law
- [List any joint ventures or associated entities, if applicable]

#### 2.3.2 Vendor Types Covered

This Framework applies to all third-party entities that provide technology-related products or services to the Organisation, including but not limited to:

| **Vendor Category** | **Examples** |
|---|---|
| Core Banking System Providers | [Core banking platform vendors] |
| Cloud Service Providers (CSPs) | Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), Software-as-a-Service (SaaS) providers |
| Cybersecurity Vendors | Managed Security Service Providers (MSSPs), endpoint protection, SIEM |
| Payment System Providers | Card processing, payment gateway, interbank connectivity |
| Telecommunications Providers | WAN, internet connectivity, MPLS, managed network services |
| Data and Analytics Vendors | Data bureaus, analytics platforms, AI/ML service providers |
| IT Hardware and Infrastructure | Servers, storage, network equipment suppliers |
| Software Vendors | Enterprise software, middleware, database systems |
| IT Professional Services | System integrators, consultants, managed IT services |
| Business Process Outsourcing (BPO) | Technology-enabled BPO with system access |

#### 2.3.3 Exclusions

The following are explicitly excluded from the scope of this Framework:

| **Exclusion** | **Rationale** | **Applicable Governance** |
|---|---|---|
| Non-technology vendors (facilities, catering, etc.) | No technology risk exposure | Procurement Policy |
| Intra-group service providers | Governed under separate intra-group policy | [Intra-Group Services Policy] |
| Regulatory bodies and government agencies | Not applicable | N/A |
| Vendors with no access to Organisation systems or data | No material technology risk | Standard Procurement |

*Document any additional exclusions specific to [Organisation Name] here, with clear rationale.*

### 2.4 Objectives

This Framework has the following primary objectives:

1. **Identify** all technology vendor relationships and the associated risks to the Organisation's operations, data, and regulatory standing.

2. **Classify** vendors into risk tiers based on a standardised, objective methodology that reflects criticality, data sensitivity, and systemic risk.

3. **Assess** vendor risks comprehensively through structured due diligence at onboarding and at defined periodic intervals.

4. **Mitigate** identified risks through contractual protections, compensating controls, and ongoing monitoring.

5. **Monitor** vendor performance and risk posture on a continuous basis, with formal quarterly reviews.

6. **Escalate** material risk findings to appropriate governance forums in a timely manner.

7. **Exit** vendor relationships in an orderly, controlled manner that preserves operational continuity and protects the Organisation's data and interests.

8. **Report** vendor risk exposure to the Board and senior management through established governance channels.

### 2.5 Framework Boundaries

| **In Scope** | **Out of Scope** |
|---|---|
| All technology vendor onboarding assessments | Internal IT asset risk assessments |
| Ongoing vendor risk monitoring | Customer risk assessments |
| Vendor contract minimum standards | Employee background screening |
| Vendor business continuity assessments | Internal project risk management |
| Vendor data protection compliance | Physical security assessments |
| Vendor exit planning and execution | Regulatory examination management |

---

## 3. Governance Structure

*Describe the governance model that underpins vendor risk management across the Organisation. Clearly define the reporting lines, committee structures, and escalation pathways. This section should be consistent with the Organisation's broader IT and operational risk governance framework.*

### 3.1 Governance Philosophy

Effective vendor risk governance requires clear accountability, independent oversight, and structured escalation mechanisms. [Organisation Name] has established a **three-lines-of-defence model** for vendor risk management, supported by a committee governance structure that ensures appropriate senior oversight of material vendor risks.

### 3.2 Three Lines of Defence Model

#### 3.2.1 First Line of Defence — Business and Technology Units

The first line comprises all business and technology units that engage, manage, or directly interact with technology vendors. First-line responsibilities include:

- Identification of vendor requirements and initiation of vendor engagement processes.
- Day-to-day management of vendor relationships and performance.
- Completion of initial risk assessments and escalation of concerns to the second line.
- Maintenance of vendor inventory data within the Vendor Management System.
- Ensuring vendors comply with contractual obligations and security requirements.
- Reporting vendor incidents and performance issues through defined channels.

**Designated Vendor Relationship Owners (VROs)** are appointed for each vendor engagement and bear primary accountability for first-line vendor management activities.

#### 3.2.2 Second Line of Defence — Technology Risk and Compliance

The second line comprises the Technology Risk function and the Compliance function. Second-line responsibilities include:

- Developing and maintaining this Framework and all associated policies and procedures.
- Conducting independent risk assessments and validating first-line assessments.
- Performing vendor risk reviews and challenging vendor risk classifications.
- Reporting vendor risk exposure to governance committees.
- Ensuring regulatory compliance of vendor management practices.
- Providing advisory support to first-line units on vendor risk matters.

#### 3.2.3 Third Line of Defence — Internal Audit

Internal Audit provides independent assurance over the adequacy and effectiveness of vendor risk management controls. Third-line activities include:

- Periodic audits of vendor risk management practices against this Framework.
- Assessment of compliance with BNM RMiT and other applicable regulations.
- Independent evaluation of specific high-risk vendor relationships.
- Reporting audit findings and recommendations to the Audit Committee.

### 3.3 Committee Governance Structure

#### 3.3.1 Board Risk Committee (BRC)

| **Attribute** | **Details** |
|---|---|
| **Chair** | [Independent Non-Executive Director] |
| **Membership** | Board Directors, CRO, CEO (by invitation) |
| **Meeting Frequency** | Quarterly |
| **Vendor Risk Responsibilities** | Oversight of material vendor risks; approval of Framework; review of Tier 1 vendor risk reports |

#### 3.3.2 Management Risk Committee (MRC)

| **Attribute** | **Details** |
|---|---|
| **Chair** | Chief Risk Officer (CRO) |
| **Membership** | CTO, CIO, CISO, Head of Compliance, Head of Technology Risk, Business Unit Heads |
| **Meeting Frequency** | Monthly |
| **Vendor Risk Responsibilities** | Approval of Tier 1 vendor engagements; review of quarterly vendor risk dashboard; escalation of material vendor risks to BRC |

#### 3.3.3 Technology and Cyber Risk Committee (TCRC)

| **Attribute** | **Details** |
|---|---|
| **Chair** | Chief Information Security Officer (CISO) / Chief Technology Officer (CTO) |
| **Membership** | Head of Technology Risk, Head of IT Operations, Head of Cybersecurity, Head of Architecture, Compliance (by invitation) |
| **Meeting Frequency** | Monthly |
| **Vendor Risk Responsibilities** | Review of vendor risk assessments; approval of Tier 2 vendor engagements; monitoring of vendor KPIs and SLAs; management of vendor incidents |

#### 3.3.4 Vendor Management Working Group (VMWG)

| **Attribute** | **Details** |
|---|---|
| **Chair** | Head of Technology Risk |
| **Membership** | Vendor Relationship Owners, Technology Risk team, Procurement, Legal |
| **Meeting Frequency** | Monthly (operational); ad hoc as required |
| **Vendor Risk Responsibilities** | Operational coordination of vendor risk activities; review of due diligence outputs; tracking of remediation actions; preparation of committee reports |

### 3.4 Governance Escalation Framework

*Define the escalation thresholds and pathways for vendor risk issues. Ensure that material issues reach the appropriate committee level in a timely manner.*

| **Risk Level** | **Description** | **Escalation Pathway** | **Timeline** |
|---|---|---|---|
| **Low** | Minor compliance gaps, low-impact performance issues | Vendor Relationship Owner → VMWG | Next scheduled VMWG meeting |
| **Medium** | Moderate security or compliance concerns, SLA breaches | VMWG → TCRC | Within 5 business days |
| **High** | Significant security incident, material SLA failure, regulatory finding | TCRC → MRC | Within 2 business days |
| **Critical** | Active cybersecurity incident, vendor insolvency, imminent service disruption | MRC → BRC (emergency session) | Within 24 hours |

### 3.5 Vendor Management System (VMS)

[Organisation Name] maintains a **Vendor Management System (VMS)** as the authoritative system of record for all vendor risk management activities. The VMS contains:

- Complete vendor inventory with risk tier classifications.
- Due diligence assessment records and supporting documentation.
- Contract metadata including expiry dates, SLA terms, and review schedules.
- Vendor performance scorecards and KPI tracking.
- Audit and review history for each vendor.
- Incident and exception records.

| **VMS Field** | **Description** | **Mandatory** |
|---|---|---|
| Vendor Name | Legal entity name of vendor | Yes |
| Vendor ID | System-generated unique identifier | Yes |
| Risk Tier | 1, 2, or 3 based on tiering assessment | Yes |
| Service Category | Type of service provided | Yes |
| Vendor Relationship Owner | Named Organisation employee | Yes |
| Contract Expiry Date | Date of contract expiry | Yes |
| Last Assessment Date | Date of most recent risk assessment | Yes |
| Next Assessment Due | Date of next scheduled assessment | Yes |
| Overall Risk Rating | Composite risk score | Yes |
| Regulatory Classification | Material outsourcing, non-material, etc. | Yes |

---

## 4. Vendor Risk Tiering Criteria

*This section defines the methodology used to classify vendors into risk tiers. The tiering methodology must be objective, consistently applied, and calibrated to the Organisation's risk appetite. All tiering decisions must be documented in the VMS and reviewed at least annually.*

### 4.1 Purpose of Vendor Risk Tiering

Vendor risk tiering is the process of classifying technology vendors based on the relative risk they pose to the Organisation. Tiering enables:

- **Proportionate due diligence:** Higher-risk vendors are subject to more rigorous assessment.
- **Resource prioritisation:** Limited risk management resources are focused on the highest-risk relationships.
- **Appropriate oversight:** Monitoring frequency and governance oversight are calibrated to tier.
- **Regulatory alignment:** Tiering supports the identification of **material outsourcing arrangements** as required by BNM.

### 4.2 Tiering Model Overview

[Organisation Name] employs a **three-tier model** for vendor risk classification:

| **Tier** | **Label** | **Description** | **Approximate % of Vendor Population** |
|---|---|---|---|
| **Tier 1** | **Critical** | Vendors whose failure or compromise would have a severe, potentially systemic impact on the Organisation's operations, financial position, reputation, or regulatory standing. | [X]% |
| **Tier 2** | **Significant** | Vendors whose failure or compromise would have a moderate to significant impact, requiring significant management attention but not posing a systemic risk. | [X]% |
| **Tier 3** | **Standard** | Vendors whose failure or compromise would have a limited or manageable impact on the Organisation. | [X]% |

### 4.3 Tiering Assessment Criteria

Vendor risk tiering is determined by evaluating each vendor against a set of **weighted criteria** across five dimensions:

#### 4.3.1 Dimension 1: Operational Criticality

| **Criterion** | **Scoring Guidance** | **Weight** |
|---|---|---|
| Nature of service | Core/critical (3), Important (2), Supporting (1) | [X]% |
| Replaceability | No viable alternative (3), Limited alternatives (2), Easily replaceable (1) | [X]% |
| Recovery time objective (RTO) if vendor fails | < 4 hours (3), 4–24 hours (2), > 24 hours (1) | [X]% |
| Number of downstream systems dependent on vendor | > 10 (3), 3–10 (2), < 3 (1) | [X]% |
| Customer impact in event of failure | Immediate customer impact (3), Delayed customer impact (2), No customer impact (1) | [X]% |

#### 4.3.2 Dimension 2: Data Sensitivity

| **Criterion** | **Scoring Guidance** | **Weight** |
|---|---|---|
| Data classification processed by vendor | Highly Confidential / Personal Data (3), Confidential (2), Internal/Public (1) | [X]% |
| Volume of personal data | > 100,000 records (3), 1,000–100,000 (2), < 1,000 (1) | [X]% |
| Sensitivity of financial data | Core financial transactions (3), Financial reporting (2), Non-financial (1) | [X]% |
| Cross-border data transfer | Yes, to high-risk jurisdiction (3), Yes, to approved jurisdiction (2), No (1) | [X]% |
| Data residency compliance risk | High (3), Medium (2), Low (1) | [X]% |

#### 4.3.3 Dimension 3: Access and Integration

| **Criterion** | **Scoring Guidance** | **Weight** |
|---|---|---|
| Level of system access | Privileged / admin access (3), Standard user access (2), No direct access (1) | [X]% |
| Network connectivity | Direct connection to production network (3), DMZ/segregated (2), No connectivity (1) | [X]% |
| Integration complexity | Deep API/system integration (3), Moderate integration (2), Standalone (1) | [X]% |
| Access to payment systems | Yes (3), Indirect (2), No (1) | [X]% |

#### 4.3.4 Dimension 4: Concentration and Dependency Risk

| **Criterion** | **Scoring Guidance** | **Weight** |
|---|---|---|
| Vendor concentration | > 30% of critical services (3), 10–30% (2), < 10% (1) | [X]% |
| Geographic concentration of vendor operations | Single location in high-risk area (3), Limited diversification (2), Geographically diversified (1) | [X]% |
| Subcontractor dependency | Heavy reliance on undisclosed subcontractors (3), Disclosed subcontractors (2), No subcontractors (1) | [X]% |
| Vendor financial stability | Distressed / uncertain (3), Moderate stability (2), Strong financial position (1) | [X]% |

#### 4.3.5 Dimension 5: Regulatory and Compliance Risk

| **Criterion** | **Scoring Guidance** | **Weight** |
|---|---|---|
| BNM material outsourcing status | Material outsourcing (3), Potentially material (2), Non-material (1) | [X]% |
| Regulatory reporting dependencies | Vendor processes regulatory reporting data (3), Supports regulatory processes (2), No regulatory dependency (1) | [X]% |
| Vendor's own regulatory compliance history | Material findings/breaches (3), Minor findings (2), Clean record (1) | [X]% |
| Jurisdiction of vendor operations | Non-cooperative jurisdiction (3), Standard overseas (2), Malaysia / approved jurisdiction (1) | [X]% |

### 4.4 Tiering Scoring Matrix

*The following table maps composite weighted scores to risk tiers. [Organisation Name] shall calibrate the score thresholds to reflect its risk appetite and document the rationale for threshold selection.*

| **Composite Weighted Score** | **Risk Tier** | **Tier Label** |
|---|---|---|
| [X] – [X] | Tier 1 | Critical |
| [X] – [X] | Tier 2 | Significant |
| [X] – [X] | Tier 3 | Standard |

### 4.5 Mandatory Tier 1 Criteria (Override Rules)

*Regardless of the weighted scoring outcome, any vendor meeting one or more of the following criteria shall be automatically classified as Tier 1:*

- Vendor is designated as a **Material Outsourcing arrangement** under BNM's Outsourcing Policy.
- Vendor has access to the Organisation's **production core banking system**.
- Vendor processes **more than [X] personal data records** belonging to the Organisation's customers.
- Vendor provides services to **more than [X]% of the Organisation's critical business processes**.
- Vendor is the **sole provider** of a service with an RTO of less than 4 hours.
- Vendor has access to the Organisation's **payment infrastructure**.
- Vendor provides **cloud hosting** for any system classified as Critical or High in the Organisation's IT asset register.

### 4.6 Tiering Review Triggers

Vendor tier classifications shall be reviewed:

| **Trigger** | **Review Required** |
|---|---|
| Annual scheduled review | All tiers — full reassessment |
| Material change in vendor's service scope | Immediate reassessment |
| Vendor acquisition, merger, or significant corporate change | Immediate reassessment |
| Material vendor security incident | Immediate reassessment |
| Addition of new systems or data processed by vendor | Immediate reassessment |
| Regulatory change affecting vendor classification | Within 30 days of change |
| Vendor financial distress indicators | Immediate reassessment |

### 4.7 Tiering Approval and Documentation

| **Tier** | **Assessment Conducted By** | **Approval Authority** | **Documentation Required** |
|---|---|---|---|
| Tier 1 | Technology Risk, with CISO input | Management Risk Committee | Full tiering assessment, RACI, sign-off form |
| Tier 2 | Technology Risk | Technology and Cyber Risk Committee | Tiering assessment, sign-off form |
| Tier 3 | Vendor Relationship Owner | Head of Technology Risk | Tiering assessment form |

---

## 5. Due Diligence Checklist

*This section defines the due diligence requirements applicable at each stage of the vendor lifecycle. Requirements are differentiated by vendor risk tier to ensure proportionality. All due diligence activities must be documented in the VMS and retained for a minimum of [X] years.*

### 5.1 Due Diligence Lifecycle Stages

Due diligence is conducted across three stages:

| **Stage** | **Description** | **Timing** |
|---|---|---|
| **Pre-Engagement (Initial)** | Assessment prior to contract execution or service commencement | Before contract signing |
| **Onboarding** | Validation of controls prior to granting system access or commencing data processing | Before go-live |
| **Ongoing / Periodic** | Continuous monitoring and periodic formal reassessment | Per tier schedule |

### 5.2 Pre-Engagement Due Diligence

#### 5.2.1 Tier 1 — Critical Vendors

| **Due Diligence Item** | **Description** | **Evidence Required** | **Responsible Party** |
|---|---|---|---|
| **Financial Viability Assessment** | Review of audited financial statements, credit ratings, and financial health indicators | Audited accounts (last 3 years), credit report | Technology Risk / Finance |
| **Ownership and Corporate Structure** | Verification of legal entity, beneficial ownership, and group structure | Company registry extract, beneficial ownership declaration | Legal / Compliance |
| **Regulatory Compliance Status** | Confirmation of all applicable regulatory licences and compliance history | Regulatory certificates, compliance declarations | Compliance |
| **Information Security Policy Review** | Assessment of vendor's information security management system | ISO 27001 certification or equivalent, security policy summary | CISO / Technology Risk |
| **Penetration Testing and Vulnerability Assessment** | Review of most recent third-party penetration test results | Penetration test report (within 12 months) | CISO |
| **Business Continuity and Disaster Recovery Assessment** | Evaluation of vendor BCP/DR capabilities relevant to services provided | BCP/DR policy, RTO/RPO documentation, test results | Technology Risk / IT Operations |
| **Data Protection Assessment** | Assessment of vendor's data protection practices, PDPA compliance, and data residency | Data protection policy, DPA, data residency declaration | Compliance / DPO |
| **Third-Party Audit Reports** | Review of independent audit reports (SOC 2, ISAE 3402, ISO audits) | SOC 2 Type II report, ISAE 3402, or equivalent | Technology Risk |
| **Subcontractor Disclosure** | Identification of all subcontractors, especially those with access to Organisation data or systems | Complete subcontractor list with roles | Legal / Technology Risk |
| **Sanctions and Watchlist Screening** | Screening of vendor and key personnel against applicable sanctions lists | Screening report | Compliance / AML |
| **Conflict of Interest Assessment** | Assessment of any conflicts of interest between vendor and Organisation | Conflict of interest declaration | Compliance |
| **Cybersecurity Questionnaire** | Completion of Organisation's vendor cybersecurity questionnaire | Completed questionnaire, scored | CISO / Technology Risk |
| **On-Site Assessment (where required)** | Physical visit to vendor's primary service delivery location | On-site assessment report | Technology Risk |
| **Legal and Contractual Review** | Review of proposed contract terms against minimum contractual standards | Legal sign-off, contract checklist | Legal |
| **BNM Notification (if Material Outsourcing)** | Notification to BNM for Material Outsourcing arrangements | BNM acknowledgement | Compliance |

#### 5.2.2 Tier 2 — Significant Vendors

| **Due Diligence Item** | **Description** | **Evidence Required** | **Responsible Party** |
|---|---|---|---|
| Financial Viability Assessment | Summary financial review | Latest audited accounts, credit check | Technology Risk |
| Regulatory Compliance Status | Confirmation of licences and compliance | Regulatory certificates | Compliance |
| Information Security Policy Review | Review of security certifications | ISO 27001 or equivalent certification | CISO / Technology Risk |
| Business Continuity Assessment | Desk-based BCP/DR review | BCP summary, RTO/RPO | Technology Risk |
| Data Protection Assessment | Review of data protection practices | Data protection declaration, DPA | Compliance / DPO |
| Third-Party Audit Reports | Review of available audit reports | SOC 2 or equivalent (where available) | Technology Risk |
| Subcontractor Disclosure | Disclosure of key subcontractors | Subcontractor list | Legal |
| Sanctions Screening | Standard sanctions screening | Screening report | Compliance |
| Cybersecurity Questionnaire | Abbreviated cybersecurity questionnaire | Completed questionnaire | Technology Risk |
| Legal and Contractual Review | Contract terms review | Legal sign-off | Legal |

#### 5.2.3 Tier 3 — Standard Vendors

| **Due Diligence Item** | **Description** | **Evidence Required** | **Responsible Party** |
|---|---|---|---|
| Regulatory Compliance | Basic compliance confirmation | Self-declaration | VRO |
| Information Security | Basic security confirmation | Security questionnaire (abbreviated) | VRO / Technology Risk |
| Data Protection | Confirmation of data protection practices | PDPA compliance declaration | VRO / Compliance |
| Sanctions Screening | Standard screening | Screening report | Compliance |
| Legal Review | Standard contract terms | Contract sign-off | Legal |

### 5.3 Onboarding Due Diligence

*Prior to granting a vendor access to the Organisation's systems or commencing live data processing, the following onboarding checks must be completed regardless of tier:*

| **Onboarding Check** | **Tier 1** | **Tier 2** | **Tier 3** | **Evidence Required** |
|---|---|---|---|---|
| Data Processing Agreement (DPA) executed | Mandatory | Mandatory | Mandatory | Signed DPA |
| Non-Disclosure Agreement (NDA) executed | Mandatory | Mandatory | Mandatory | Signed NDA |
| Information Security Agreement executed | Mandatory | Mandatory | Recommended | Signed ISA |
| Access provisioning approved via IAM process | Mandatory | Mandatory | Mandatory | IAM approval record |
| Principle of least privilege access confirmed | Mandatory | Mandatory | Mandatory | Access review sign-off |
| Vendor personnel security screening completed | Mandatory | Mandatory | Conditional | Screening records |
| Network access controls implemented and tested | Mandatory | Mandatory | If applicable | Network configuration record |
| Logging and monitoring of vendor access enabled | Mandatory | Mandatory | If applicable | SIEM configuration record |
| Vendor added to VMS with complete profile | Mandatory | Mandatory | Mandatory | VMS record |
| SLA and KPIs documented and agreed | Mandatory | Mandatory | Recommended | Executed SLA schedule |
| Vendor onboarding checklist signed off | Mandatory | Mandatory | Mandatory | Signed checklist |

### 5.4 Ongoing Due Diligence Schedule

| **Activity** | **Tier 1 Frequency** | **Tier 2 Frequency** | **Tier 3 Frequency** |
|---|---|---|---|
| Vendor risk profile review | Quarterly | Semi-annually | Annually |
| Full due diligence reassessment | Annually | Annually | Every 2 years |
| Financial viability review | Semi-annually | Annually | As triggered |
| Security questionnaire refresh | Annually | Annually | Every 2 years |
| Third-party audit report review | Annually | Annually | As available |
| On-site assessment | Annually | Every 2 years | As triggered |
| BCP/DR review | Annually | Every 2 years | As triggered |
| Penetration test results review | Annually | Every 2 years | N/A |
| SLA and KPI performance review | Monthly | Quarterly | Quarterly |
| Contract compliance review | Quarterly | Semi-annually | Annually |
| Subcontractor change review | Upon notification | Upon notification | Upon notification |

### 5.5 Cybersecurity Due Diligence Questionnaire — Key Domains

*The Organisation's vendor cybersecurity questionnaire shall cover the following domains at minimum. Full questionnaire templates are maintained in Appendix C.*

| **Domain** | **Key Assessment Areas** |
|---|---|
| **Information Security Governance** | ISMS policy, security organisation, board oversight, security budget |
| **Asset Management** | Asset inventory, classification, handling procedures |
| **Access Control** | IAM framework, privileged access management, MFA, access reviews |
| **Cryptography** | Encryption standards, key management, certificate management |
| **Physical Security** | Data centre physical controls, clean desk, visitor management |
| **Network Security** | Segmentation, firewall configuration, intrusion detection, VPN |
| **System Security** | Patch management, vulnerability management, hardening standards |
| **Supplier Management** | Vendor's own vendor risk management practices (fourth-party risk) |
| **Incident Management** | Incident response plan, breach notification procedures, testing |
| **Business Continuity** | BCP/DR plans, RTO/RPO, test history |
| **Compliance** | Regulatory certifications, audit findings, legal compliance |
| **Cloud Security** | (if applicable) Shared responsibility model, cloud configuration management |

---

## 6. SLA and KPI Definitions

*This section establishes the minimum service level agreement (SLA) and key performance indicator (KPI) requirements that must be embedded in all vendor contracts. These standards are minimum baselines; individual contracts may specify more stringent requirements based on the criticality of the service.*

### 6.1 Guiding Principles for SLAs and KPIs

- SLAs must be **measurable, objective, and enforceable** through contractual provisions.
- KPIs must reflect the **actual risk and operational significance** of the service to the Organisation.
- Measurement methodologies must be **agreed in writing** with vendors prior to contract execution.
- SLA and KPI data must be **reported by vendors** at defined intervals and validated by the Organisation.
- **Penalties, remedies, and escalation mechanisms** must be defined for SLA breaches.
- SLA and KPI performance must be **reviewed at governance forums** at the defined frequency.

### 6.2 Minimum SLA Requirements by Tier

#### 6.2.1 Tier 1 — Critical Vendors

| **SLA Parameter** | **Minimum Requirement** | **Measurement Method** | **Reporting Frequency** |
|---|---|---|---|
| **System Availability** | ≥ 99.9% (excluding agreed maintenance windows) | Uptime monitoring logs | Monthly |
| **Planned Maintenance Notice** | Minimum 10 business days advance notice | Written notification record | Per event |
| **Emergency Maintenance Notice** | Minimum 4 hours advance notice | Written notification record | Per event |
| **Incident Response Time (P1 — Critical)** | Initial response within 15 minutes | Ticketing system timestamps | Per incident |
| **Incident Resolution Time (P1 — Critical)** | Resolution within 4 hours | Ticketing system timestamps | Per incident |
| **Incident Response Time (P2 — High)** | Initial response within 1 hour | Ticketing system timestamps | Per incident |
| **Incident Resolution Time (P2 — High)** | Resolution within 8 hours | Ticketing system timestamps | Per incident |
| **Security Incident Notification** | Notification to Organisation within 1 hour of discovery | Written notification / call log | Per incident |
| **Data Breach Notification** | Notification within 1 hour of confirmed breach | Written notification | Per incident |
| **Disaster Recovery RTO** | As per agreed BCP (to be specified per contract) | DR test results | Annual test |
| **Disaster Recovery RPO** | As per agreed BCP (to be specified per contract) | DR test results | Annual test |
| **Patch Management — Critical Vulnerabilities** | Critical patches applied within 24 hours | Patch management reports | Monthly |
| **Patch Management — High Vulnerabilities** | High patches applied within 7 days | Patch management reports | Monthly |
| **Report Delivery (SLA/KPI reports)** | Within 5 business days of month-end | Report submission record | Monthly |
| **Dedicated Account Manager** | Named, senior-level account manager | Contact information on file | Ongoing |

#### 6.2.2 Tier 2 — Significant Vendors

| **SLA Parameter** | **Minimum Requirement** | **Measurement Method** | **Reporting Frequency** |
|---|---|---|---|
| **System Availability** | ≥ 99.5% (excluding agreed maintenance windows) | Uptime monitoring logs | Monthly |
| **Planned Maintenance Notice** | Minimum 5 business days advance notice | Written notification record | Per event |
| **Incident Response Time (P1 — Critical)** | Initial response within 30 minutes | Ticketing system timestamps | Per incident |
| **Incident Resolution Time (P1 — Critical)** | Resolution within 8 hours | Ticketing system timestamps | Per incident |
| **Security Incident Notification** | Notification within 4 hours of discovery | Written notification | Per incident |
| **Data Breach Notification** | Notification within 2 hours of confirmed breach | Written notification | Per incident |
| **Patch Management — Critical Vulnerabilities** | Critical patches within 48 hours | Patch management reports | Quarterly |
| **Report Delivery** | Within 10 business days of quarter-end | Report submission record | Quarterly |

#### 6.2.3 Tier 3 — Standard Vendors

| **SLA Parameter** | **Minimum Requirement** | **Measurement Method** | **Reporting Frequency** |
|---|---|---|---|
| **System Availability** | ≥ 99.0% (excluding agreed maintenance windows) | Uptime monitoring logs | Quarterly |
| **Incident Response Time (P1 — Critical)** | Initial response within 4 hours | Ticketing system timestamps | Per incident |
| **Security Incident Notification** | Notification within 24 hours of discovery | Written notification | Per incident |
| **Report Delivery** | Within 15 business days of quarter-end | Report submission record | Quarterly |

### 6.3 Key Performance Indicators (KPIs)

*KPIs measure the broader quality and risk management performance of the vendor relationship beyond pure availability metrics. The following KPIs are mandatory for all Tier 1 vendors and recommended for Tier 2 vendors.*

#### 6.3.1 Operational KPIs

| **KPI** | **Definition** | **Target** | **Measurement** | **Frequency** |
|---|---|---|---|---|
| **Service Availability Rate** | Percentage of agreed service hours that the service is available | ≥ 99.9% (Tier 1) | Automated uptime monitoring | Monthly |
| **Mean Time to Detect (MTTD)** | Average time from incident occurrence to vendor detection | ≤ [X] minutes | Incident log analysis | Monthly |
| **Mean Time to Respond (MTTR)** | Average time from detection to initial response | ≤ [X] minutes (P1) | Ticketing system | Monthly |
| **Mean Time to Resolve (MTTR)** | Average time from detection to full resolution | ≤ [X] hours (P1) | Ticketing system | Monthly |
| **Change Success Rate** | Percentage of changes implemented without service disruption | ≥ 95% | Change management records | Monthly |
| **Problem Recurrence Rate** | Percentage of resolved incidents that recur within 30 days | ≤ 5% | Ticketing system | Monthly |
| **Capacity Utilisation** | Resource utilisation vs. contracted capacity | ≤ 80% average | Capacity reports | Monthly |

#### 6.3.2 Security KPIs

| **KPI** | **Definition** | **Target** | **Measurement** | **Frequency** |
|---|---|---|---|---|
| **Critical Vulnerability Remediation Rate** | Percentage of critical vulnerabilities remediated within SLA | 100% | Vulnerability scan reports | Monthly |
| **High Vulnerability Remediation Rate** | Percentage of high vulnerabilities remediated within SLA | ≥ 95% | Vulnerability scan reports | Monthly |
| **Security Awareness Training Completion** | Percentage of vendor personnel with Organisation data access completing training | 100% | Training records | Annually |
| **Access Review Completion** | Percentage of access reviews completed on schedule | 100% | IAM audit records | Quarterly |
| **MFA Adoption Rate** | Percentage of privileged accounts with MFA enabled | 100% | IAM configuration report | Quarterly |
| **Security Incident Rate** | Number of security incidents per quarter | [Baseline / Target] | Incident register | Quarterly |
| **Penetration Test Findings Remediation** | Percentage of critical/high pentest findings remediated within agreed timeline | 100% | Pentest remediation report | Per test |

#### 6.3.3 Compliance KPIs

| **KPI** | **Definition** | **Target** | **Measurement** | **Frequency** |
|---|---|---|---|---|
| **Regulatory Compliance Certification Currency** | All required certifications (ISO 27001, SOC 2, etc.) current and valid | 100% current | Certificate expiry tracking | Quarterly |
| **Audit Report Submission Timeliness** | Percentage of required audit reports submitted within agreed timeline | 100% | Report submission log | Per report |
| **Contractual Obligation Compliance** | Percentage of contractual obligations met without breach | ≥ 98% | Contract compliance review | Quarterly |
| **Data Breach Notification Compliance** | Notifications provided within contractual/regulatory timeframe | 100% | Incident register | Per event |
| **BCP/DR Test Completion** | Annual BCP/DR tests completed as scheduled | 100% | Test reports | Annually |

#### 6.3.4 Relationship KPIs

| **KPI** | **Definition** | **Target** | **Measurement** | **Frequency** |
|---|---|---|---|---|
| **Report Delivery Timeliness** | Percentage of required reports delivered within agreed timeline | ≥ 95% | Report log | Monthly |
| **Escalation Response Rate** | Percentage of escalations acknowledged within SLA | 100% | Escalation log | Per event |
| **Service Review Meeting Attendance** | Vendor attendance at scheduled service review meetings | 100% | Meeting records | Per meeting |
| **Action Item Closure Rate** | Percentage of action items closed within agreed timelines | ≥ 90% | Action log | Quarterly |

### 6.4 SLA Breach Management

#### 6.4.1 Breach Classification

| **Breach Level** | **Definition** | **Escalation** | **Remediation Timeframe** |
|---|---|---|---|
| **Level 1 — Minor** | Single SLA missed, no operational impact | VRO notified | Vendor provides RCA within 5 business days |
| **Level 2 — Moderate** | Multiple SLA misses in a quarter, or single miss with operational impact | VRO escalates to VMWG | Vendor provides RCA and remediation plan within 3 business days |
| **Level 3 — Significant** | Sustained SLA breaches or breach with material business/regulatory impact | VMWG escalates to TCRC | Vendor provides remediation plan within 1 business day; formal performance improvement plan initiated |
| **Level 4 — Critical** | Sustained material breaches, risk of contract termination | TCRC escalates to MRC | Contract penalty provisions invoked; exit strategy review initiated |

#### 6.4.2 Service Credits and Penalties

*The following table defines the minimum service credit and penalty provisions that must be included in all Tier 1 and Tier 2 vendor contracts. Specific values shall be negotiated on a contract-by-contract basis, subject to legal review.*

| **SLA Breach Type** | **Minimum Service Credit / Penalty** |
|---|---|
| Availability below 99.9% (Tier 1) | [X]% service credit per [X]% below threshold per month |
| P1 Incident response time breach | [X]% service credit per incident |
| Security incident notification breach | [X]% service credit; right to audit |
| Data breach notification breach | [X]% service credit; right to audit; regulatory notification costs borne by vendor |
| BCP/DR test failure | [X]% service credit; mandatory re-test within 30 days |

---

## 7. Exit Strategy Requirements

*This section defines the requirements for vendor exit planning, which must be documented for all Tier 1 and Tier 2 vendors prior to contract execution. Exit strategies must be reviewed annually and tested for Tier 1 vendors at least every [X] years. The objective is to ensure the Organisation can exit any vendor relationship in an orderly manner without material disruption to operations or harm to customers.*

### 7.1 Purpose and Importance of Exit Planning

Effective vendor exit planning is a critical element of operational resilience. The Organisation must be able to exit any vendor relationship — whether planned or unplanned — without:

- Disruption to critical business services or customer-facing operations.
- Loss or compromise of data held or processed by the departing vendor.
- Breach of regulatory obligations during the transition period.
- Undue financial cost or commercial disadvantage.

BNM RMiT Clause 10.46 explicitly requires that financial institutions maintain documented exit strategies for technology vendor relationships, particularly those classified as material outsourcing.

### 7.2 Exit Scenarios

Exit strategy documentation must address the following scenarios:

| **Exit Scenario** | **Description** | **Planning Priority** |
|---|---|---|
| **Planned Exit — Expiry** | Contract reaches end of term and is not renewed | All tiers |
| **Planned Exit — Replacement** | Vendor is replaced by alternative provider | All tiers |
| **Planned Exit — Insourcing** | Service is brought in-house | Tier 1 and 2 |
| **Emergency Exit — Vendor Insolvency** | Vendor enters administration or ceases operations | Tier 1 and 2 |
| **Emergency Exit — Regulatory Mandate** | BNM or other regulator directs exit | All tiers |
| **Emergency Exit — Security Incident** | Vendor compromise necessitates immediate termination | Tier 1 and 2 |
| **Emergency Exit — Performance Failure** | Sustained material SLA failure triggers termination clause | Tier 1 and 2 |
| **Emergency Exit — Contractual Breach** | Vendor in material breach of contractual obligations | All tiers |

### 7.3 Exit Strategy Document Requirements

For each Tier 1 and Tier 2 vendor, a documented **Vendor Exit Strategy** must be maintained. The minimum contents are:

#### 7.3.1 Section A: Vendor and Service Summary

| **Field** | **Content** |
|---|---|
| Vendor Name | [Vendor Legal Name] |
| Service Description | [Description of services subject to this exit plan] |
| Risk Tier | [1 / 2] |
| Contract Expiry Date | [Date] |
| Minimum Notice Period for Termination | [As per contract] |
| Data Held by Vendor | [Description of data categories and volumes] |
| System Integrations | [List of systems integrated with vendor] |
| Business Processes Dependent on Vendor | [List of dependent business processes] |

#### 7.3.2 Section B: Exit Readiness Assessment

*Assess the Organisation's current state of exit readiness for this vendor.*

| **Readiness Factor** | **Current Status** | **Gaps Identified** | **Remediation Required** |
|---|---|---|---|
| Availability of replacement vendor | [Identified / Partially identified / Not identified] | [Details] | [Actions] |
| Internal capability to manage transition | [Adequate / Requires augmentation] | [Details] | [Actions] |
| Source code / IP escrow arrangement | [In place / Not in place] | [Details] | [Actions] |
| Data portability confirmed | [Confirmed / Partially confirmed / Not confirmed] | [Details] | [Actions] |
| Documentation of vendor-specific processes | [Complete / Partially complete / Not complete] | [Details] | [Actions] |
| Knowledge transfer capability | [Adequate / Insufficient] | [Details] | [Actions] |
| Regulatory notification requirements identified | [Yes / Partially / No] | [Details] | [Actions] |

#### 7.3.3 Section C: Transition Plan

*Detail the step-by-step process for executing an orderly exit from this vendor relationship.*

**Phase 1: Initiation (Weeks 1–[X])**

| **Step** | **Activity** | **Owner** | **Dependencies** | **Timeline** |
|---|---|---|---|---|
| 1.1 | Formal exit decision communicated to vendor | [Owner] | Board / MRC approval | Week 1 |
| 1.2 | Activate exit project governance | [Owner] | — | Week 1 |
| 1.3 | Appoint transition project manager | [Owner] | — | Week 1 |
| 1.4 | Notify BNM (if Material Outsourcing) | Compliance | Regulatory assessment | Week 1 |
| 1.5 | Activate data retention and export procedures | [Owner] | Data mapping | Week 1–2 |

**Phase 2: Transition Preparation (Weeks [X]–[X])**

| **Step** | **Activity** | **Owner** | **Dependencies** | **Timeline** |
|---|---|---|---|---|
| 2.1 | Issue request for proposal (RFP) to replacement vendors | Procurement | Approved shortlist | Week [X] |
| 2.2 | Complete due diligence on replacement vendor | Technology Risk | RFP responses | Week [X] |
| 2.3 | Execute contract with replacement vendor | Legal | Due diligence approval | Week [X] |
| 2.4 | Initiate knowledge transfer from incumbent vendor | [Owner] | Contract provisions | Week [X] |
| 2.5 | Document all vendor-specific processes and configurations | [Owner] | Access to documentation | Week [X] |
| 2.6 | Plan data migration and validate data integrity | Technology / Data | Data mapping | Week [X] |

**Phase 3: Migration and Testing (Weeks [X]–[X])**

| **Step** | **Activity** | **Owner** | **Dependencies** | **Timeline** |
|---|---|---|---|---|
| 3.1 | Deploy replacement solution in test environment | Technology | Contract executed | Week [X] |
| 3.2 | Execute UAT and integration testing | Technology / Business | Deployment complete | Week [X] |
| 3.3 | Conduct parallel run (if applicable) | Technology / Operations | Testing passed | Week [X] |
| 3.4 | Validate data migration completeness and integrity | Technology / Data | Migration complete | Week [X] |
| 3.5 | Update all documentation, runbooks, and procedures | Technology / Operations | Testing complete | Week [X] |

**Phase 4: Cutover and Decommission (Weeks [X]–[X])**

| **Step** | **Activity** | **Owner** | **Dependencies** | **Timeline** |
|---|---|---|---|---|
| 4.1 | Execute production cutover | Technology | All testing passed | Week [X] |
| 4.2 | Revoke all vendor access to Organisation systems | CISO / IAM | Cutover confirmed | Day of cutover |
| 4.3 | Confirm data deletion by departing vendor | Legal / Compliance | Written confirmation required | Within 30 days |
| 4.4 | Decommission integrations and connectivity | Technology | Access revoked | Week [X] |
| 4.5 | Finalise commercial settlement | Finance / Legal | Contract terms | Week [X] |
| 4.6 | Close vendor record in VMS | Technology Risk | All activities complete | Week [X] |

**Phase 5: Post-Exit Review (Weeks [X]–[X])**

| **Step** | **Activity** | **Owner** | **Dependencies** | **Timeline** |
|---|---|---|---|---|
| 5.1 | Post-exit lessons learned review | Technology Risk | 4 weeks post-cutover | Week [X] |
| 5.2 | Update exit strategy templates based on lessons | Head of Technology Risk | Lessons learned | Week [X] |
| 5.3 | Report exit outcome to TCRC / MRC | Head of Technology Risk | Review complete | Week [X] |

### 7.4 Emergency Exit Provisions

For emergency exit scenarios, the following minimum requirements apply:

| **Requirement** | **Tier 1** | **Tier 2** |
|---|---|---|
| Maximum tolerable disruption period | [X] hours | [X] hours |
| Pre-approved emergency replacement vendors | Required (minimum 1 identified) | Required (minimum 1 identified) |
| Emergency exit playbook | Mandatory | Mandatory |
| Emergency exit simulation/table-top exercise | Annually | Every 2 years |
| Escrow arrangements for source code / data | Mandatory | Recommended |
| Regulatory notification within | 24 hours of triggering event | 48 hours |

### 7.5 Contractual Exit Provisions — Minimum Requirements

The following provisions must be included in all vendor contracts, with more comprehensive provisions required for Tier 1 vendors:

| **Contract Provision** | **Tier 1** | **Tier 2** | **Tier 3** |
|---|---|---|---|
| Termination for convenience clause | Mandatory | Mandatory | Mandatory |
| Minimum notice period for termination | [X] months | [X] months | [X] months |
| Data return / deletion obligations | Mandatory (30-day deadline) | Mandatory (60-day deadline) | Mandatory |
| Transition assistance obligations | Mandatory (12 months post-notice) | Mandatory (6 months post-notice) | Recommended |
| Source code escrow | Mandatory | Recommended | Not required |
| Knowledge transfer obligations | Mandatory | Mandatory | Recommended |
| Survival clauses (confidentiality, audit rights) | Mandatory | Mandatory | Mandatory |
| Step-in rights | Mandatory | Recommended | Not required |
| Audit rights post-termination | Mandatory (12 months) | Mandatory (6 months) | Recommended |

### 7.6 Exit Strategy Review Schedule

| **Activity** | **Tier 1** | **Tier 2** |
|---|---|---|
| Annual review of exit strategy document | Yes | Yes |
| Table-top exit simulation exercise | Annually | Every 2 years |
| Full exit strategy rehearsal / dry run | Every [X] years | Every [X] years |
| Update following material change in service | Immediately | Within 30 days |

---

## 8. Roles and Responsibilities

*This section defines the responsibilities of all key stakeholders in the vendor risk management process using a RACI model. RACI definitions: **R** = Responsible (performs the work), **A** = Accountable (owns the outcome), **C** = Consulted (provides input), **I** = Informed (kept updated).*

### 8.1 Key Stakeholder Definitions

| **Role** | **Description** |
|---|---|
| **Board Risk Committee (BRC)** | Board-level committee with ultimate oversight of risk management |
| **Management Risk Committee (MRC)** | Senior management committee for enterprise risk governance |
| **Technology and Cyber Risk Committee (TCRC)** | Management-level committee for technology and cyber risk |
| **Chief Risk Officer (CRO)** | Executive accountable for enterprise risk management |
| **Chief Information Security Officer (CISO)** | Executive accountable for information security and cyber risk |
| **Chief Technology Officer (CTO) / Chief Information Officer (CIO)** | Executive accountable for technology strategy and operations |
| **Head of Technology Risk** | Owner of this Framework; leads the Technology Risk function |
| **Vendor Relationship Owner (VRO)** | Named employee accountable for a specific vendor relationship |
| **Technology Risk Team** | Functional team executing vendor risk assessments and monitoring |
| **Procurement** | Function managing commercial and contracting aspects of vendor engagement |
| **Legal** | Function providing legal advice on vendor contracts and regulatory matters |
| **Compliance / DPO** | Function ensuring regulatory compliance and data protection obligations |
| **Internal Audit** | Independent assurance function |
| **Finance** | Function managing financial aspects of vendor relationships |

### 8.2 RACI Matrix — Vendor Lifecycle Activities

| **Activity** | **BRC** | **MRC** | **TCRC** | **CRO** | **CISO** | **CTO/CIO** | **Head of Tech Risk** | **VRO** | **Tech Risk Team** | **Procurement** | **Legal** | **Compliance/DPO** | **Internal Audit** | **Finance** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Framework Governance** | | | | | | | | | | | | | | |
| Approve Vendor Risk Assessment Framework | A | C | C | C | C | C | R | I | I | I | I | I | I | — |
| Annual Framework Review | I | C | C | C | C | C | A/R | C | R | C | C | C | C | — |
| Vendor Risk Reporting to Board | I | C | C | C | C | C | R | — | R | — | — | C | — | — |
| **Vendor Tiering** | | | | | | | | | | | | | | |
| Initiate tiering assessment | I | — | — | — | — | — | — | A/R | R | C | — | — | — | — |
| Conduct tiering assessment | — | — | I | — | C | — | A | R | R | — | — | C | — | — |
| Approve Tier 1 classification | — | A | C | C | C | C | R | C | C | — | C | C | — | — |
| Approve Tier 2 classification | — | I | A | — | C | C | R | C | C | — | C | C | — | — |
| Approve Tier 3 classification | — | — | I | — | — | — | A | R | R | — | — | — | — | — |
| Annual tier review | — | I | C | — | C | C | A | R | R | — | — | C | — | — |
| **Pre-Engagement Due Diligence** | | | | | | | | | | | | | | |
| Initiate due diligence process | — | — | — | — | — | — | — | A/R | R | R | — | — | — | — |
| Conduct security assessment | — | — | I | — | C | — | — | — | A/R | — | — | — | — | — |
| Conduct data protection assessment | — | — | — | — | — | — | — | C | C | — | — | A/R | — | — |
| Conduct financial viability assessment | — | — | — | — | — | — | — | C | C | — | — | — | — | A/R |
| Legal contract review | — | — | — | — | — | — | C | C | C | C | A/R | C | — | — |
| Approve Tier 1 vendor engagement | — | A | R | C | C | C | R | C | C | C | C | C | — | — |
| Approve Tier 2 vendor engagement | — | I | A/R | — | C | C | C | C | C | C | C | C | — | — |
| Notify BNM (material outsourcing) | — | A | C | C | — | — | C | — | — | — | C | A/R | — | — |
| **Ongoing Monitoring** | | | | | | | | | | | | | | |
| Day-to-day vendor relationship management | — | — | — | — | — | — | — | A/R | — | — | — | — | — | — |
| Monthly SLA/KPI review | — | — | I | — | — | — | — | R | A/R | — | — | — | — | — |
| Quarterly vendor risk review | — | I | A | — | C | C | R | C | R | — | — | C | — | — |
| Annual vendor risk reassessment | — | I | C | — | C | C | A | R | R | C | C | C | — | — |
| Vendor performance scorecard management | — | — | I | — | — | — | — | A/R | C | — | — | — | — | — |
| Escalation of material risk findings | — | A | R | C | C | C | R | C | C | — | — | C | — | — |
| **Incident Management** | | | | | | | | | | | | | | |
| Receive and log vendor security incidents | — | — | I | — | R | — | C | A/R | R | — | — | C | — | — |
| Assess and escalate vendor incidents | — | C | A | C | R | C | R | R | R | — | C | C | — | — |
| Regulatory notification for data breaches | — | A | C | C | C | — | C | C | C | — | C | A/R | — | — |
| **Exit Management** | | | | | | | | | | | | | | |
| Maintain exit strategy documentation | — | — | I | — | C | C | A | R | R | C | C | C | — | — |
| Approve vendor exit decision (Tier 1) | — | A | C | C | C | C | R | C | — | C | C | C | — | — |
| Execute vendor exit / transition | — | I | C | — | C | A/R | C | R | C | R | C | C | — | C |
| Post-exit review and lessons learned | — | I | C | — | C | C | A/R | R | R | C | C | C | — | — |
| **Assurance** | | | | | | | | | | | | | | |
| Internal audit of vendor risk management | A | I | I | I | I | I | C | C | C | — | — | C | A/R | — |

### 8.3 Vendor Relationship Owner (VRO) — Detailed Responsibilities

The VRO is the Organisation employee who bears primary accountability for managing a specific vendor relationship. Each active vendor must have a named VRO. VRO responsibilities include:

| **Responsibility Area** | **Specific Obligations** |
|---|---|
| **Relationship Management** | Serve as the primary point of contact for the vendor; maintain regular communication; manage escalations |
| **Performance Monitoring** | Review and validate vendor-submitted SLA/KPI reports; maintain the vendor performance scorecard; escalate breaches |
| **Risk Monitoring** | Monitor vendor risk profile and flag material changes to Technology Risk; maintain awareness of vendor developments |
| **Documentation** | Maintain accurate and current vendor records in the VMS; ensure all required documentation is current |
| **Due Diligence** | Coordinate and complete all required due diligence activities within defined timelines |
| **Contract Management** | Monitor contract compliance; track expiry dates; initiate renewal or exit processes as appropriate |
| **Incident Management** | Receive, log, and escalate vendor incidents; coordinate the Organisation's response |
| **Exit Planning** | Maintain and periodically test the vendor exit strategy; update on material changes |

---

## 9. Review and Approval

### 9.1 Document Review Schedule

This Framework is subject to the following review schedule:

| **Review Type** | **Frequency** | **Trigger** | **Reviewer** | **Approver** |
|---|---|---|---|---|
| Scheduled Quarterly Review | Quarterly | Calendar-driven | Head of Technology Risk | Technology and Cyber Risk Committee |
| Continuous Monitoring Review | Ongoing | Material events, regulatory changes | Technology Risk Team | Head of Technology Risk |
| Annual Comprehensive Review | Annually | Calendar-driven | Head of Technology Risk + CISO | Management Risk Committee |
| Triggered Review | As needed | Regulatory change, material incident, BNM guidance | Head of Technology Risk | As determined by materiality |

### 9.2 Document Maintenance Responsibilities

| **Responsibility** | **Owner** |
|---|---|
| Day-to-day Framework maintenance | Technology Risk Team |
| Annual comprehensive review coordination | Head of Technology Risk |
| Regulatory alignment review | Compliance |
| Legal review of contractual provisions | Legal |
| Board and MRC reporting | Head of Technology Risk |
| VMS system maintenance | [IT Operations / Technology Risk] |

### 9.3 Version History

| **Version** | **Date** | **Author** | **Reviewed By** | **Changes Made** |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | Initial version |
| 1.1 | [Date] | [Author Name] | [Reviewer Name] | [Description of changes] |
| 1.2 | [Date] | [Author Name] | [Reviewer Name] | [Description of changes] |
| 2.0 | [Date] | [Author Name] | [Reviewer Name] | [Major revision — describe] |

### 9.4 Approval Sign-Off

This document has been reviewed and approved by the following authorised signatories:

| **Role** | **Name** | **Department** | **Signature** | **Date** |
|---|---|---|---|---|
| Head of Technology Risk | [Name] | Technology Risk | _________________ | [Date] |
| Chief Information Security Officer | [Name] | Information Security | _________________ | [Date] |
| Chief Technology Officer / CIO | [Name] | Technology | _________________ | [Date] |
| Chief Risk Officer | [Name] | Risk Management | _________________ | [Date] |
| Head of Compliance | [Name] | Compliance | _________________ | [Date] |
| Head of Legal | [Name] | Legal | _________________ | [Date] |
| Chairman, Management Risk Committee | [Name] | [Department] | _________________ | [Date] |

*For major revisions (new major version), Board Risk Committee endorsement is required.*

| **Role** | **Name** | **Signature** | **Date** |
|---|---|---|---|
| Chairman, Board Risk Committee | [Name] | _________________ | [Date] |

---

## 10. References

### 10.1 Primary Regulatory References

| **Document** | **Issuing Authority** | **Clause / Section** | **Relevance** |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | **Clause 10.46** | Core requirement for technology vendor risk management framework |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.47 | Outsourcing risk management requirements |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.48 | Vendor concentration risk |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clauses 11.1–11.20 | Technology risk governance |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clauses 12.1–12.10 | Cybersecurity requirements applicable to vendors |
| Outsourcing Policy | Bank Negara Malaysia (BNM) | Sections 3–7 | Material outsourcing definition and requirements |
| Guidelines on Business Continuity Management | Bank Negara Malaysia (BNM) | Sections 4–5 | BCP requirements for outsourced services |
| Electronic Know-Your-Customer (e-KYC) Policy | Bank Negara Malaysia (BNM) | [Section] | Technology vendor requirements for e-KYC services (if applicable) |

### 10.2 Data Protection References

| **Document** | **Issuing Authority** | **Section** | **Relevance** |
|---|---|---|---|
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Sections 6, 9, 11 | Data processor obligations for vendors |
| Personal Data Protection Regulations 2013 | Ministry of Digital | All | Implementing regulations |
| Personal Data Protection (Amendment) Act 2024 | Parliament of Malaysia | All amendments | Updated data protection obligations |

### 10.3 Cybersecurity and Infrastructure References

| **Document** | **Issuing Authority** | **Section** | **Relevance** |
|---|---|---|---|
| National Cyber Security Policy | NACSA / Malaysian Government | All | National cybersecurity framework |
| Critical Information Infrastructure (CII) Sector-Specific Requirements | NACSA | Financial sector requirements | CII vendor obligations |
| Guidelines on Digital Infrastructure | BNM | All | Digital and cloud infrastructure |

### 10.4 International Standards and Frameworks

| **Standard / Framework** | **Issuing Body** | **Relevance** |
|---|---|---|
| ISO/IEC 27001:2022 — Information Security Management Systems | ISO/IEC | Vendor security management baseline |
| ISO/IEC 27036 — Information Security for Supplier Relationships | ISO/IEC | Vendor risk management methodology |
| ISO 22301:2019 — Business Continuity Management | ISO | Vendor BCP assessment baseline |
| SOC 2 (Service Organisation Control 2) | AICPA | Vendor assurance reporting standard |
| ISAE 3402 / SSAE 18 | IAASB / AICPA | Vendor assurance for outsourced services |
| NIST Cybersecurity Framework (CSF) 2.0 | NIST | Cybersecurity due diligence reference |
| NIST SP 800-161 — Cybersecurity Supply Chain Risk Management | NIST | Supply chain risk reference |
| FSB Principles for Financial Market Infrastructures (PFMI) | Financial Stability Board | Third-party risk for FMI-connected services |

### 10.5 Internal Documents

*List all internal policies, procedures, and standards that this Framework references or is aligned with.*

| **Document Title** | **Document ID** | **Owner** | **Relationship** |
|---|---|---|---|
| Information Security Policy | [Doc ID] | CISO | Parent policy |
| Outsourcing Policy | [Doc ID] | Head of Compliance | Complementary |
| Procurement Policy | [Doc ID] | Head of Procurement | Complementary |
| Data Classification Policy | [Doc ID] | CISO / DPO | Referenced |
| Business Continuity Management Policy | [Doc ID] | Head of IT Operations | Referenced |
| IT Risk Management Framework | [Doc ID] | Head of Technology Risk | Parent framework |
| Access Control Policy | [Doc ID] | CISO | Referenced |
| Incident Response Policy | [Doc ID] | CISO | Referenced |
| Data Protection Policy | [Doc ID] | DPO | Referenced |
| Contract Management Policy | [Doc ID] | Head of Legal | Complementary |

---

## 11. Appendices

### Appendix A: Vendor Inventory Template

*This appendix provides the standard template for maintaining the Organisation's vendor inventory in the VMS. All fields marked as mandatory must be completed for each vendor record.*

| **Field** | **Description** | **Mandatory** | **Format** |
|---|---|---|---|
| Vendor ID | System-generated unique identifier | Yes | Auto-generated |
| Vendor Name | Full legal entity name | Yes | Text |
| Vendor Trading Name | Trading name (if different) | If applicable | Text |
| Company Registration Number | Registered company number | Yes | Text |
| Jurisdiction of Incorporation | Country/state | Yes | Dropdown |
| Principal Contact Name | Main relationship contact at vendor | Yes | Text |
| Principal Contact Email | Email address | Yes | Email |
| Principal Contact Phone | Phone number | Yes | Text |
| Vendor Relationship Owner | [Organisation Name] employee | Yes | Staff ID + Name |
| Service Category | Category from defined list | Yes | Dropdown |
| Service Description | Summary description of service | Yes | Text |
| Risk Tier | 1, 2, or 3 | Yes | Dropdown |
| Risk Tier Rationale | Summary of tiering rationale | Yes | Text |
| Tiering Assessment Date | Date of last tiering assessment | Yes | Date |
| Contract Reference | Contract identifier | Yes | Text |
| Contract Start Date | | Yes | Date |
| Contract Expiry Date | | Yes | Date |
| Auto-Renewal Provisions | Y/N; if yes, describe | Yes | Y/N + Text |
| Material Outsourcing Status | Y/N; if yes, BNM notification reference | Yes | Y/N + Text |
| BNM Notification Reference | Reference number from BNM | If material | Text |
| Annual Contract Value (MYR) | | Yes | Currency |
| Data Processed | Categories of data processed | Yes | Multi-select |
| Personal Data Volume | Approximate number of personal data records | If applicable | Number |
| Cross-Border Data Transfer | Y/N; destination country | If applicable | Y/N + Text |
| System Access Level | Privileged / Standard / Read-only / None | Yes | Dropdown |
| Network Connectivity | Direct / DMZ / None | Yes | Dropdown |
| Subcontractors | Y/N; list of key subcontractors | Yes | Y/N + Text |
| Last Due Diligence Date | | Yes | Date |
| Next Due Diligence Due | | Yes | Date |
| Last SLA Review Date | | Yes | Date |
| Overall Risk Rating | Composite score and rating | Yes | Score + Rating |
| Notes / Comments | Free text | Optional | Text |
| Record Created Date | | Yes | Auto |
| Record Last Updated | | Yes | Auto |
| Record Updated By | | Yes | Auto |

---

### Appendix B: Vendor Risk Tiering Assessment Form

*Use this form to document the vendor risk tiering assessment. Complete one form per vendor. File the completed form in the VMS.*

**VENDOR RISK TIERING ASSESSMENT FORM**

| **Field** | **Entry** |
|---|---|
| Vendor Name | |
| Service Description | |
| Assessment Date | |
| Assessed By | |
| Reviewed By | |
| Approved By | |

**DIMENSION 1: OPERATIONAL CRITICALITY**

| **Criterion** | **Score (1–3)** | **Rationale** |
|---|---|---|
| Nature of service | | |
| Replaceability | | |
| Recovery time objective | | |
| Downstream system dependencies | | |
| Customer impact in event of failure | | |
| **Dimension 1 Weighted Score** | | |

**DIMENSION 2: DATA SENSITIVITY**

| **Criterion** | **Score (1–3)** | **Rationale** |
|---|---|---|
| Data classification | | |
| Volume of personal data | | |
| Sensitivity of financial data | | |
| Cross-border data transfer | | |
| Data residency compliance risk | | |
| **Dimension 2 Weighted Score** | | |

**DIMENSION 3: ACCESS AND INTEGRATION**

| **Criterion** | **Score (1–3)** | **Rationale** |
|---|---|---|
| Level of system access | | |
| Network connectivity | | |
| Integration complexity | | |
| Access to payment systems | | |
| **Dimension 3 Weighted Score** | | |

**DIMENSION 4: CONCENTRATION AND DEPENDENCY RISK**

| **Criterion** | **Score (1–3)** | **Rationale** |
|---|---|---|
| Vendor concentration | | |
| Geographic concentration | | |
| Subcontractor dependency | | |
| Vendor financial stability | | |
| **Dimension 4 Weighted Score** | | |

**DIMENSION 5: REGULATORY AND COMPLIANCE RISK**

| **Criterion** | **Score (1–3)** | **Rationale** |
|---|---|---|
| BNM material outsourcing status | | |
| Regulatory reporting dependencies | | |
| Vendor compliance history | | |
| Jurisdiction of operations | | |
| **Dimension 5 Weighted Score** | | |

**OVERALL ASSESSMENT**

| **Field** | **Entry** |
|---|---|
| Composite Weighted Score | |
| Proposed Risk Tier | |
| Mandatory Tier 1 Override Triggered? (Y/N) | |
| If yes, override criterion | |
| **Final Risk Tier** | |
| Assessor Recommendation | |
| Comments / Qualifications | |

**SIGNATURES**

| **Role** | **Name** | **Signature** | **Date** |
|---|---|---|---|
| Assessed By | | | |
| Reviewed By | | | |
| Approved By | | | |

---

### Appendix C: Vendor Cybersecurity Questionnaire — Full Version

*This appendix contains the full vendor cybersecurity questionnaire. The questionnaire is available in three versions: Full (Tier 1), Standard (Tier 2), and Abbreviated (Tier 3). The full version is presented here; sections marked [Tier 1 Only] are not required for Tier 2 assessments.*

**VENDOR CYBERSECURITY QUESTIONNAIRE**

**Vendor Name:** _______________________
**Assessment Date:** _______________________
**Service Assessed:** _______________________
**Completed By:** _______________________ **Title:** _______________________

**SECTION 1: INFORMATION SECURITY GOVERNANCE**

| **#** | **Question** | **Response** | **Supporting Evidence** |
|---|---|---|---|
| 1.1 | Does the vendor have a formally documented Information Security Management System (ISMS)? | Y / N / Partial | Policy document, certification |
| 1.2 | Is the vendor ISO/IEC 27001 certified? If yes, provide certificate details. | Y / N | ISO 27001 certificate |
| 1.3 | Does the vendor have a dedicated information security function/team? | Y / N | Org chart |
| 1.4 | Is information security governance reviewed at board or senior management level? | Y / N | Board minutes / governance documentation |
| 1.5 | Has the vendor experienced any material information security breaches in the last 3 years? | Y / N | Incident summary |
| 1.6 | What is the vendor's annual information security budget as a percentage of IT spend? | [X]% | Budget documentation |
| 1.7 | [Tier 1 Only] Does the vendor maintain a formal risk register for information security risks? | Y / N | Risk register excerpt |

**SECTION 2: ACCESS CONTROL**

| **#** | **Question** | **Response** | **Supporting Evidence** |
|---|---|---|---|
| 2.1 | Does the vendor enforce multi-factor authentication (MFA) for all privileged accounts? | Y / N | IAM configuration |
| 2.2 | Does the vendor enforce MFA for all remote access? | Y / N | VPN/remote access policy |
| 2.3 | Does the vendor conduct periodic access reviews? If yes, what is the frequency? | Y / N / Frequency | Access review records |
| 2.4 | Is privileged access management (PAM) implemented for all administrator accounts? | Y / N | PAM tool documentation |
| 2.5 | Is role-based access control (RBAC) implemented? | Y / N | IAM policy |
| 2.6 | How does the vendor manage access for departed employees? | [Description] | Offboarding procedure |
| 2.7 | [Tier 1 Only] Does the vendor use a Privileged Access Workstation (PAW) or equivalent for privileged operations? | Y / N | Technical documentation |

**SECTION 3: VULNERABILITY AND PATCH MANAGEMENT**

| **#** | **Question** | **Response** | **Supporting Evidence** |
|---|---|---|---|
| 3.1 | Does the vendor have a formal vulnerability management programme? | Y / N | VMP policy |
| 3.2 | What is the vendor's patch management SLA for critical vulnerabilities? | [X] hours/days | Patch policy |
| 3.3 | Does the vendor perform regular vulnerability scanning? What is the frequency? | Y / N / Frequency | Scan reports |
| 3.4 | Does the vendor conduct annual penetration testing by an independent third party? | Y / N | Pentest report (last 12 months) |
| 3.5 | [Tier 1 Only] Does the vendor participate in responsible disclosure or bug bounty programmes? | Y / N | Programme details |

**SECTION 4: NETWORK SECURITY**

| **#** | **Question** | **Response** | **Supporting Evidence** |
|---|---|---|---|
| 4.1 | Does the vendor employ network segmentation to isolate client environments? | Y / N | Network architecture diagram |
| 4.2 | Does the vendor operate intrusion detection/prevention systems (IDS/IPS)? | Y / N | Security architecture |
| 4.3 | Is web application firewall (WAF) protection in place for web-facing services? | Y / N | WAF documentation |
| 4.4 | Does the vendor conduct regular firewall rule reviews? | Y / N / Frequency | Firewall policy |
| 4.5 | [Tier 1 Only] Does the vendor implement Zero Trust network architecture principles? | Y / N | Architecture documentation |

**SECTION 5: INCIDENT RESPONSE**

| **#** | **Question** | **Response** | **Supporting Evidence** |
|---|---|---|---|
| 5.1 | Does the vendor have a documented incident response plan (IRP)? | Y / N | IRP document |
| 5.2 | Has the IRP been tested in the last 12 months? | Y / N | Test report |
| 5.3 | What is the vendor's commitment for notifying clients of security incidents? | [X] hours | Notification procedure / SLA |
| 5.4 | Does the vendor operate a Security Operations Centre (SOC) or equivalent 24/7 monitoring capability? | Y / N | SOC details |
| 5.5 | Does the vendor have cyber insurance? | Y / N | Insurance certificate |

**SECTION 6: BUSINESS CONTINUITY AND DISASTER RECOVERY**

| **#** | **Question** | **Response** | **Supporting Evidence** |
|---|---|---|---|
| 6.1 | Does the vendor maintain a documented Business Continuity Plan (BCP)? | Y / N | BCP document |
| 6.2 | What RTO and RPO does the vendor commit to for services provided to the Organisation? | RTO: [X] / RPO: [X] | DR documentation |
| 6.3 | Has BCP/DR been tested in the last 12 months? | Y / N | Test results |
| 6.4 | Are primary and disaster recovery data centres geographically separated? | Y / N | Data centre details |
| 6.5 | [Tier 1 Only] Does the vendor operate active-active or active-passive DR configuration? | Active-Active / Active-Passive | Architecture documentation |

**SECTION 7: DATA PROTECTION AND PRIVACY**

| **#** | **Question** | **Response** | **Supporting Evidence** |
|---|---|---|---|
| 7.1 | Does the vendor have a documented data protection / privacy policy? | Y / N | Policy document |
| 7.2 | Does the vendor comply with Malaysia's Personal Data Protection Act 2010? | Y / N | Compliance declaration |
| 7.3 | Where will the Organisation's data be stored? In which countries/jurisdictions? | [Countries] | Data residency declaration |
| 7.4 | Is data encrypted at rest and in transit? What encryption standards are used? | Y / N / Standards | Encryption policy |
| 7.5 | What is the vendor's process for data deletion upon contract termination? | [Description] | Data deletion procedure |
| 7.6 | Does the vendor have a data breach response procedure? | Y / N | Data breach procedure |
| 7.7 | [Tier 1 Only] Does the vendor maintain a Record of Processing Activities (ROPA) or equivalent? | Y / N | ROPA excerpt |

**SECTION 8: SUBCONTRACTORS AND FOURTH-PARTY RISK**

| **#** | **Question** | **Response** | **Supporting Evidence** |
|---|---|---|---|
| 8.1 | Does the vendor engage subcontractors who will have access to the Organisation's data or systems? | Y / N | Subcontractor list |
| 8.2 | If yes, provide a complete list of subcontractors, their roles, and the data/systems they access. | [See attached] | Subcontractor disclosure |
| 8.3 | Does the vendor apply equivalent security standards to its subcontractors? | Y / N | Vendor security requirements for subcontractors |
| 8.4 | Does the vendor conduct due diligence on its own vendors? | Y / N | Vendor risk policy |
| 8.5 | [Tier 1 Only] Does the vendor have a formal third-party / supply chain risk management programme? | Y / N | Programme documentation |

**DECLARATION**

*I, the undersigned, confirm that the information provided in this questionnaire is accurate and complete to the best of my knowledge. I understand that providing false or misleading information may result in termination of the vendor relationship.*

| **Field** | **Entry** |
|---|---|
| Name | |
| Title | |
| Organisation | |
| Date | |
| Signature | |

---

### Appendix D: Vendor Contract Minimum Standards Checklist

*This appendix provides a checklist for Legal to validate that all minimum contractual standards have been incorporated into vendor agreements prior to execution. Tier-specific requirements are noted.*

**CONTRACT MINIMUM STANDARDS CHECKLIST**

| **Vendor Name:** | | **Contract Reference:** | |
|---|---|---|---|
| **Tier:** | | **Reviewed By (Legal):** | |
| **Date:** | | | |

| **#** | **Contract Provision** | **Tier 1** | **Tier 2** | **Tier 3** | **Included?** | **Clause Reference** |
|---|---|---|---|---|---|---|
| 1 | Scope of services definition | ✓ | ✓ | ✓ | Y / N | |
| 2 | Data Processing Agreement (DPA) | ✓ | ✓ | ✓ | Y / N | |
| 3 | PDPA compliance obligations | ✓ | ✓ | ✓ | Y / N | |
| 4 | Data residency requirements | ✓ | ✓ | If applicable | Y / N | |
| 5 | Data deletion / return provisions | ✓ | ✓ | ✓ | Y / N | |
| 6 | SLA and KPI schedule | ✓ | ✓ | Recommended | Y / N | |
| 7 | Service credit / penalty provisions | ✓ | ✓ | Optional | Y / N | |
| 8 | Security incident notification (≤ 1 hour for Tier 1) | ✓ | ✓ | ✓ | Y / N | |
| 9 | Data breach notification obligation | ✓ | ✓ | ✓ | Y / N | |
| 10 | Right to audit (with reasonable notice) | ✓ | ✓ | Recommended | Y / N | |
| 11 | Regulatory audit cooperation clause | ✓ | ✓ | ✓ | Y / N | |
| 12 | BNM right of access clause | ✓ | ✓ | ✓ | Y / N | |
| 13 | Subcontractor disclosure and approval | ✓ | ✓ | Recommended | Y / N | |
| 14 | Change notification requirements | ✓ | ✓ | ✓ | Y / N | |
| 15 | Security standards compliance | ✓ | ✓ | ✓ | Y / N | |
| 16 | Business continuity obligations | ✓ | ✓ | Recommended | Y / N | |
| 17 | BCP/DR test results sharing | ✓ | ✓ | Optional | Y / N | |
| 18 | Termination for convenience clause | ✓ | ✓ | ✓ | Y / N | |
| 19 | Termination for cause clause | ✓ | ✓ | ✓ | Y / N | |
| 20 | Transition assistance obligations | ✓ | ✓ | Recommended | Y / N | |
| 21 | Source code escrow | ✓ | Recommended | N/A | Y / N / N/A | |
| 22 | Intellectual property ownership | ✓ | ✓ | ✓ | Y / N | |
| 23 | Confidentiality and NDA | ✓ | ✓ | ✓ | Y / N | |
| 24 | Liability cap and indemnification | ✓ | ✓ | ✓ | Y / N | |
| 25 | Insurance requirements | ✓ | ✓ | Recommended | Y / N | |
| 26 | Governing law (Malaysia) | ✓ | ✓ | ✓ | Y / N | |
| 27 | Dispute resolution mechanism | ✓ | ✓ | ✓ | Y / N | |
| 28 | Anti-bribery and corruption clause | ✓ | ✓ | ✓ | Y / N | |
| 29 | Sanctions compliance clause | ✓ | ✓ | ✓ | Y / N | |
| 30 | Financial crime compliance clause | ✓ | ✓ | ✓ | Y / N | |

**Legal Reviewer Sign-Off:**

| **Field** | **Entry** |
|---|---|
| Reviewed By | |
| Title | |
| Date | |
| Signature | |
| Approved for Execution | Y / N (if N, attach exceptions list) |

---

### Appendix E: Vendor Exit Strategy Template

*Complete one exit strategy document per Tier 1 and Tier 2 vendor. File in the VMS linked to the vendor record. Review annually and update within 30 days of any material change.*

**VENDOR EXIT STRATEGY**

| **Field** | **Details** |
|---|---|
| Vendor Name | |
| Service Description | |
| Risk Tier | |
| Contract Reference | |
| Contract Expiry Date | |
| Notice Period Required | |
| VRO | |
| Exit Strategy Owner | |
| Document Version | |
| Last Review Date | |
| Next Review Due | |

*[Complete all sections as defined in Section 7.3 of this Framework]*

---

### Appendix F: Vendor Performance Scorecard Template

*This scorecard is used to assess vendor performance on a monthly (Tier 1) or quarterly (Tier 2/3) basis. Scores are maintained in the VMS and used to compile the quarterly vendor risk dashboard.*

**VENDOR PERFORMANCE SCORECARD**

| **Field** | **Details** |
|---|---|
| Vendor Name | |
| Risk Tier | |
| Service Category | |
| Assessment Period | |
| VRO | |
| Completed By | |
| Date | |

**PERFORMANCE CATEGORY SCORES**

| **Category** | **Weight** | **Score (1–5)** | **Weighted Score** | **Commentary** |
|---|---|---|---|---|
| Service Availability | [X]% | | | |
| Incident Management | [X]% | | | |
| Security Compliance | [X]% | | | |
| SLA Adherence | [X]% | | | |
| Regulatory Compliance | [X]% | | | |
| Business Continuity Readiness | [X]% | | | |
| Relationship Management | [X]% | | | |
| **Total Weighted Score** | 100% | | | |

**SCORING SCALE**

| **Score** | **Rating** | **Description** |
|---|---|---|
| 5 | Excellent | Consistently exceeds requirements |
| 4 | Good | Meets all requirements; minor areas for improvement |
| 3 | Satisfactory | Meets most requirements; some improvement needed |
| 2 | Needs Improvement | Below expectations; formal improvement plan required |
| 1 | Unsatisfactory | Material failure; escalation and remediation required |

**COMPOSITE SCORECARD RATING**

| **Composite Score** | **Overall Rating** | **Action Required** |
|---|---|---|
| 4.0 – 5.0 | Excellent | Maintain; recognise performance |
| 3.0 – 3.9 | Satisfactory | Monitor; address areas for improvement |
| 2.0 – 2.9 | Needs Improvement | Formal improvement plan; escalate to TCRC |
| 1.0 – 1.9 | Unsatisfactory | Escalate to MRC; consider contract action |

**OPEN ISSUES AND ACTION ITEMS**

| **#** | **Issue Description** | **Raised Date** | **Owner** | **Target Date** | **Status** |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

**VRO SIGN-OFF**

| **Field** | **Entry** |
|---|---|
| VRO Name | |
| Signature | |
| Date | |

---

### Appendix G: Vendor Incident Register Template

*All security incidents and significant service incidents involving vendors must be logged in this register and maintained in the VMS. The register is reviewed monthly by the Technology Risk team and reported to TCRC quarterly.*

| **Incident ID** | **Date Reported** | **Vendor Name** | **Incident Type** | **Severity** | **Description** | **Organisation Impact** | **Vendor Notified (Y/N)** | **Notification Received (Date/Time)** | **Notification Within SLA? (Y/N)** | **Resolution Date** | **Resolution Within SLA? (Y/N)** | **Root Cause** | **Remediation Actions** | **Regulatory Notification Required?** | **Lessons Learned** | **Closed Date** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| VIR-[YYYY]-[NNN] | | | | | | | | | | | | | | | | |

---

### Appendix H: Glossary of Terms

| **Term** | **Definition** |
|---|---|
| **BCP** | Business Continuity Plan — documented procedures for maintaining or restoring business operations following a disruptive event |
| **BNM** | Bank Negara Malaysia — the central bank and primary financial services regulator of Malaysia |
| **CISO** | Chief Information Security Officer |
| **CTO/CIO** | Chief Technology Officer / Chief Information Officer |
| **CRO** | Chief Risk Officer |
| **DPA** | Data Processing Agreement — a contract governing the processing of personal data by a vendor on behalf of the Organisation |
| **DPO** | Data Protection Officer |
| **DR** | Disaster Recovery |
| **Due Diligence** | The formal process of investigating and assessing a vendor's capabilities, financial health, and risk posture prior to or during engagement |
| **Exit Strategy** | A documented plan for transitioning away from a vendor relationship in an orderly and controlled manner |
| **Fourth-Party Risk** | Risk arising from vendors engaged by the Organisation's primary vendors (i.e., the Organisation's vendor's vendors) |
| **IAM** | Identity and Access Management |
| **IRP** | Incident Response Plan |
| **ISMS** | Information Security Management System |
| **KPI** | Key Performance Indicator — a measurable value demonstrating the effectiveness of a vendor in achieving operational and risk objectives |
| **Material Outsourcing** | An outsourcing arrangement as defined by BNM's Outsourcing Policy that meets defined materiality thresholds |
| **MFA** | Multi-Factor Authentication |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **NDA** | Non-Disclosure Agreement |
| **PAM** | Privileged Access Management |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia) |
| **RMiT** | Risk Management in Technology — BNM Policy Document on technology risk management |
| **RPO** | Recovery Point Objective — the maximum tolerable period of data loss in the event of a disruption |
| **RTO** | Recovery Time Objective — the target time to restore a service following a disruption |
| **SLA** | Service Level Agreement — contractual commitments on service performance |
| **SOC 2** | Service Organisation Control 2 — an audit framework for assessing technology service providers' controls |
| **Tier 1 Vendor** | A vendor classified as Critical under this Framework's tiering methodology |
| **Tier 2 Vendor** | A vendor classified as Significant under this Framework's tiering methodology |
| **Tier 3 Vendor** | A vendor classified as Standard under this Framework's tiering methodology |
| **VMS** | Vendor Management System — the Organisation's authoritative system of record for vendor risk information |
| **VRO** | Vendor Relationship Owner — the Organisation employee accountable for managing a specific vendor relationship |

---

*End of Document*

---

| **Document ID** | [Document ID] | **Version** | 1.0 |
|---|---|---|---|
| **Classification** | Confidential | **Next Review** | [Next Review Date] |
| **Owner** | Head of Technology Risk | **Approved By** | [Approved By] |

*This document is the property of [Organisation Name]. Unauthorised reproduction or distribution is prohibited.*