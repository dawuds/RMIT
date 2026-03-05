# Cybersecurity RACI Matrix

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Risk Officer (CRO) |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **Applicable Clause(s)** | RMiT Clause 11.3 |

---

> **CONFIDENTIALITY NOTICE:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may be subject to disciplinary and/or legal action.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Governance Structure](#3-governance-structure)
4. [Methodology and Approach](#4-methodology-and-approach)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Cybersecurity RACI Matrix](#6-cybersecurity-raci-matrix)
7. [Implementation Roadmap](#7-implementation-roadmap)
8. [Monitoring and Review Mechanisms](#8-monitoring-and-review-mechanisms)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Executive Summary

*Provide a concise overview of this document's purpose, the regulatory context, and the significance of defining cybersecurity accountability within the organization. This section should be readable by senior leadership and Board members without requiring technical expertise.*

[Organization Name] operates within a regulated financial services environment governed by Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document. A foundational requirement of sound technology risk governance is the clear delineation of cybersecurity roles and responsibilities across all organizational levels.

This Cybersecurity RACI Matrix establishes a structured accountability framework that assigns **Responsible**, **Accountable**, **Consulted**, and **Informed** designations to all material cybersecurity functions and activities conducted by [Organization Name]. The matrix is designed to:

- Eliminate ambiguity in cybersecurity ownership and decision-making authority
- Ensure compliance with BNM RMiT Clause 11.3 requirements on technology risk governance
- Support effective escalation and communication pathways during cybersecurity incidents
- Provide a traceable, audit-ready record of accountability for regulatory examination purposes

This document is owned by the **Chief Risk Officer (CRO)** and is subject to **annual review** or upon material changes to the organization's structure, technology landscape, or regulatory obligations, whichever occurs first.

---

## 2. Purpose and Scope

### 2.1 Purpose

*State the formal purpose of this document. Explain why the RACI matrix is required, what regulatory obligation it fulfils, and how it supports the organization's risk management objectives.*

The purpose of this Cybersecurity RACI Matrix is to formally define and document the roles and responsibilities of all parties involved in cybersecurity governance, risk management, and operational activities at [Organization Name]. This document:

- Fulfils the requirements of **BNM RMiT Clause 11.3**, which mandates that financial institutions establish clear accountability structures for technology and cybersecurity risk management
- Provides a single authoritative reference for cybersecurity accountability across business, technology, risk, and operational functions
- Supports Board and senior management oversight by making accountability visible and auditable
- Enables effective cross-functional collaboration by clarifying consultation and communication obligations

### 2.2 Scope

*Define the boundaries of applicability for this RACI matrix. Include which entities, systems, personnel, and geographies are covered. Explicitly state what is out of scope where relevant.*

This Cybersecurity RACI Matrix applies to:

**In Scope:**

- All cybersecurity functions, processes, and activities conducted by or on behalf of [Organization Name]
- All employees, contractors, third-party vendors, and outsourced service providers who have access to [Organization Name]'s systems, data, or facilities
- All technology systems, platforms, and infrastructure operated by or for [Organization Name], including on-premises, cloud-hosted, and hybrid environments
- All subsidiaries and branches of [Organization Name] operating within Malaysia, unless separately governed by an equivalent approved framework
- Cybersecurity domains including, but not limited to: identity and access management, vulnerability management, incident response, security operations, data protection, third-party risk, and business continuity

**Out of Scope:**

- [Specify any entities, systems, or geographies explicitly excluded]
- Physical security arrangements governed separately under [Reference Physical Security Policy]
- Non-technology operational risk activities governed under [Reference Operational Risk Framework]

### 2.3 Regulatory Context

*Briefly describe the regulatory environment that necessitates this document. Reference specific BNM policy documents and clauses.*

[Organization Name] is a licensed financial institution subject to the regulatory oversight of **Bank Negara Malaysia (BNM)**. The following regulatory instruments directly inform this document:

| Regulatory Instrument | Issuing Authority | Relevant Clause(s) | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 11.3 | Technology risk governance and cybersecurity accountability |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 11.1 | Board and senior management responsibilities |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.1–10.5 | Cybersecurity risk management |
| Personal Data Protection Act 2010 (PDPA) | Government of Malaysia | Section 9–10 | Security standard obligations for personal data |
| [Additional Regulation] | [Authority] | [Clause] | [Obligation] |

---

## 3. Governance Structure

### 3.1 Cybersecurity Governance Overview

*Describe the high-level governance hierarchy for cybersecurity within the organization. Explain how accountability flows from the Board down through management layers to operational teams.*

[Organization Name] has established a multi-tiered cybersecurity governance structure to ensure that accountability, oversight, and execution responsibilities are appropriately distributed across all organizational levels. This structure reflects the **three lines of defence** model as referenced in BNM RMiT guidance.

```
Board of Directors / Board Risk Committee
            │
            ▼
  Senior Management / Management Risk Committee
            │
            ▼
  Chief Risk Officer (CRO) / Chief Information Security Officer (CISO)
            │
     ┌──────┴──────┐
     ▼             ▼
 IT/Security    Business
 Functions      Units
     │
     ▼
 Operations / Third Parties
```

### 3.2 Three Lines of Defence Model

*Explain how the three lines of defence apply to cybersecurity governance within the organization.*

| Line | Function | Cybersecurity Role |
|---|---|---|
| **First Line** | Business Units, IT Operations, Technology Functions | Own and manage cybersecurity risks inherent in their activities; implement controls; report risk events |
| **Second Line** | Risk Management, Compliance, Information Security | Establish cybersecurity policy and frameworks; provide oversight, challenge, and assurance of first-line controls |
| **Third Line** | Internal Audit, External Audit | Provide independent assurance over the adequacy and effectiveness of cybersecurity governance, risk management, and controls |

### 3.3 Governance Committees

*List the key governance committees with cybersecurity oversight responsibilities and their mandates.*

| Committee | Chairperson | Frequency | Cybersecurity Mandate |
|---|---|---|---|
| Board Risk Committee (BRC) | [Board Member] | Quarterly | Oversight of enterprise-wide technology and cybersecurity risk appetite and strategy |
| Management Risk Committee (MRC) | Chief Risk Officer | Monthly | Review of cybersecurity risk posture, incidents, and key risk indicators |
| IT Steering Committee (ITSC) | Chief Information Officer | Monthly | Technology investment decisions, cybersecurity programme prioritization |
| Cybersecurity Working Group | CISO | Bi-weekly | Operational cybersecurity coordination, threat intelligence, incident management |
| [Additional Committee] | [Chairperson] | [Frequency] | [Mandate] |

---

## 4. Methodology and Approach

### 4.1 RACI Framework Definition

*Explain the RACI methodology used in this document. Define each designation clearly so readers can apply and interpret the matrix consistently.*

This document employs the **RACI accountability model** as the primary methodology for assigning cybersecurity roles and responsibilities. RACI is an internationally recognized framework used to clarify role assignments in cross-functional processes. The definitions applied throughout this document are as follows:

| Designation | Symbol | Definition |
|---|---|---|
| **Responsible** | **R** | The role(s) that perform the work or execute the activity. There must be at least one Responsible party for every activity. Multiple roles may share Responsible designation for a single activity. |
| **Accountable** | **A** | The single role that is ultimately answerable for the correct and complete execution of the activity and has decision-making authority. There can only be **one Accountable** role per activity. The Accountable role may delegate execution but retains ownership. |
| **Consulted** | **C** | Roles whose input and expertise are sought before a decision or action is taken. Communication is **two-way**. Consulted parties do not hold decision authority but must be engaged. |
| **Informed** | **I** | Roles that are kept informed of progress, decisions, or outcomes after the fact. Communication is **one-way**. Informed parties do not need to be consulted but must receive relevant updates. |

> **Key Rules:**
> - Every activity must have exactly **one Accountable (A)** role
> - Every activity must have at least **one Responsible (R)** role
> - An individual role may hold both **Accountable** and **Responsible** designations for the same activity
> - Excessive **Consulted** assignments should be avoided to prevent bottlenecks

### 4.2 Cybersecurity Domains Covered

*List the cybersecurity domains and functional areas addressed by this RACI matrix. These should align with the organization's cybersecurity framework and BNM RMiT requirements.*

This RACI matrix covers the following cybersecurity domains, aligned with BNM RMiT requirements and industry-recognized frameworks (ISO/IEC 27001, NIST Cybersecurity Framework):

| # | Domain | Description |
|---|---|---|
| 1 | Cybersecurity Governance & Strategy | Policy setting, risk appetite, programme oversight |
| 2 | Identity and Access Management (IAM) | User provisioning, privileged access, authentication |
| 3 | Vulnerability and Patch Management | Vulnerability scanning, risk assessment, remediation |
| 4 | Security Operations & Monitoring | SOC operations, threat detection, log management |
| 5 | Cybersecurity Incident Management | Detection, containment, eradication, recovery, reporting |
| 6 | Third-Party and Vendor Risk Management | Vendor assessment, contractual controls, monitoring |
| 7 | Data Protection and Privacy | Data classification, encryption, PDPA compliance |
| 8 | Network and Infrastructure Security | Perimeter security, segmentation, cloud security |
| 9 | Application Security | Secure development, code review, penetration testing |
| 10 | Business Continuity and Cyber Resilience | BCP/DRP integration, cyber recovery planning |
| 11 | Security Awareness and Training | Staff training, phishing simulation, culture |
| 12 | Regulatory and Audit Compliance | BNM reporting, audit response, evidence management |

### 4.3 Document Maintenance Approach

*Describe how the RACI matrix is maintained, updated, and version-controlled over time.*

This RACI Matrix is maintained under the following governance approach:

- **Annual Review:** The CRO initiates a formal annual review of this document no later than [Month] each year
- **Triggered Review:** An out-of-cycle review is triggered by: material organizational restructuring, significant changes to the technology landscape, new regulatory obligations, or post-incident lessons learned
- **Change Control:** All amendments are subject to the Change Control procedure defined in [Reference Change Management Policy], including approval by the CRO and notation in the Version History table (Section 9)
- **Distribution:** The current approved version is maintained in [Document Management System] and distributed to all function heads listed in this document

---

## 5. Roles and Responsibilities

### 5.1 Role Definitions

*Define each organizational role referenced in the RACI matrix. Provide sufficient description to enable readers to map the role to an actual position within the organization.*

The following roles are referenced throughout this RACI Matrix. Where a role title differs from the organization's internal title, the mapping should be maintained in Appendix A.

| Role | Abbreviation | Description |
|---|---|---|
| Board of Directors | BOD | Ultimate governing body; sets risk appetite and strategic direction for cybersecurity |
| Board Risk Committee | BRC | Board-level committee with delegated oversight of enterprise risk, including technology and cyber risk |
| Chief Executive Officer | CEO | Accountable to the Board for the overall management of the organization including cybersecurity strategy execution |
| Chief Risk Officer | CRO | Senior executive accountable for enterprise risk management framework, including technology and cybersecurity risk |
| Chief Information Officer | CIO | Senior executive accountable for technology strategy, infrastructure, and IT operations |
| Chief Information Security Officer | CISO | Senior executive accountable for the cybersecurity programme, strategy, and operations |
| Chief Compliance Officer | CCO | Senior executive accountable for regulatory compliance, including BNM RMiT obligations |
| Chief Financial Officer | CFO | Accountable for cybersecurity budget allocation and financial risk considerations |
| Head of Internal Audit | HIA | Leads independent assurance activities including cybersecurity audits |
| Business Unit Head | BUH | Leads individual business units; owns cybersecurity risks within their domain |
| IT Security Manager | ITSM | Manages day-to-day cybersecurity operations and the security team |
| Security Operations Centre | SOC | Team responsible for continuous monitoring, threat detection, and first-line incident response |
| IT Operations | ITO | Responsible for infrastructure management, patch deployment, and system administration |
| Risk Management Function | RMF | Second-line risk oversight, policy development, and risk reporting |
| Compliance Function | CF | Regulatory compliance monitoring, BNM liaison, and audit support |
| Data Protection Officer | DPO | Responsible for PDPA compliance and personal data governance |
| Human Resources | HR | Manages personnel security, background checks, and security awareness training coordination |
| Legal Counsel | LC | Provides legal guidance on cybersecurity obligations, contracts, and incident response |
| Third-Party / Vendor | TPV | External service providers with access to organization systems or data |
| [Additional Role] | [Abbrev] | [Description] |

---

## 6. Cybersecurity RACI Matrix

*The tables below assign RACI designations to each cybersecurity activity within each domain. Review each assignment carefully to reflect actual organizational accountabilities. Add or remove rows as required.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

### 6.1 Domain 1: Cybersecurity Governance and Strategy

| Activity | BOD/BRC | CEO | CRO | CISO | CIO | CCO | BUH | RMF | CF | HIA |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve cybersecurity strategy and roadmap | A | I | C | R | C | C | I | C | C | I |
| Set cybersecurity risk appetite statement | A | C | R | C | I | C | I | R | C | I |
| Approve cybersecurity policies and standards | I | I | A | R | C | C | I | C | C | I |
| Oversee cybersecurity programme performance | A | I | R | R | C | I | I | C | I | C |
| Report cybersecurity risk posture to Board | I | I | A | R | C | C | I | C | C | I |
| Define cybersecurity roles and responsibilities | I | I | A | R | C | I | C | C | I | I |
| Allocate cybersecurity budget | A | C | C | R | C | C | I | I | I | I |
| Engage external cybersecurity assessments | I | I | A | R | C | I | I | C | I | C |

---

### 6.2 Domain 2: Identity and Access Management (IAM)

| Activity | CRO | CISO | CIO | ITSM | ITO | BUH | RMF | HR | HIA |
|---|---|---|---|---|---|---|---|---|---|
| Define IAM policy and standards | C | A | C | R | I | C | C | C | I |
| Approve privileged access requests | I | A | C | R | C | C | I | I | I |
| Provision and deprovision user accounts | I | A | C | R | R | C | I | R | I |
| Conduct periodic access reviews | I | A | I | R | C | R | C | I | C |
| Manage privileged access management (PAM) solution | I | A | C | R | R | I | I | I | I |
| Enforce multi-factor authentication (MFA) | I | A | C | R | R | I | I | I | I |
| Monitor and alert on anomalous access | I | A | C | R | R | I | I | I | I |
| Report IAM exceptions and policy breaches | C | A | I | R | R | I | C | I | I |

---

### 6.3 Domain 3: Vulnerability and Patch Management

| Activity | CRO | CISO | CIO | ITSM | ITO | SOC | BUH | RMF | HIA |
|---|---|---|---|---|---|---|---|---|---|
| Define vulnerability management policy | C | A | C | R | I | C | I | C | I |
| Conduct vulnerability scanning | I | A | C | R | R | R | I | I | I |
| Prioritize vulnerabilities by risk rating | C | A | I | R | C | R | I | C | I |
| Remediate identified vulnerabilities | I | A | C | C | R | C | I | I | I |
| Track and report remediation progress | C | A | I | R | R | I | I | C | I |
| Manage patch deployment schedule | I | C | A | C | R | I | I | I | I |
| Conduct penetration testing | I | A | C | R | C | C | I | I | C |
| Review and accept residual vulnerability risk | A | C | I | C | I | I | C | R | I |

---

### 6.4 Domain 4: Security Operations and Monitoring

| Activity | CRO | CISO | CIO | ITSM | SOC | ITO | BUH | RMF | HIA |
|---|---|---|---|---|---|---|---|---|---|
| Operate Security Operations Centre (SOC) | I | A | C | R | R | C | I | I | I |
| Define use cases and detection rules | I | A | C | R | R | I | I | I | I |
| Monitor security events and alerts (24/7) | I | A | I | C | R | I | I | I | I |
| Manage SIEM platform | I | A | C | R | R | R | I | I | I |
| Conduct threat intelligence analysis | C | A | I | R | R | I | I | C | I |
| Review SOC performance metrics | C | A | C | R | R | I | I | C | I |
| Define log retention requirements | C | A | C | R | R | I | I | C | I |
| Manage threat hunting activities | I | A | I | R | R | I | I | I | I |

---

### 6.5 Domain 5: Cybersecurity Incident Management

| Activity | BOD/BRC | CEO | CRO | CISO | CIO | CCO | ITSM | SOC | BUH | CF | LC | DPO |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Define incident response policy and plan | I | I | C | A | C | C | R | C | I | C | C | C |
| Detect and classify security incidents | I | I | I | A | I | I | R | R | I | I | I | I |
| Declare major cybersecurity incident | I | I | A | R | C | C | C | I | I | C | C | I |
| Activate incident response team | I | I | C | A | C | I | R | R | I | I | I | I |
| Lead incident containment and eradication | I | I | C | A | C | I | R | R | I | I | I | I |
| Manage crisis communications | I | A | C | C | I | C | I | I | I | I | C | I |
| Notify BNM of reportable incidents | I | I | C | C | I | A | I | I | I | R | C | C |
| Notify affected individuals (PDPA breach) | I | I | C | C | I | C | I | I | I | C | C | A |
| Conduct post-incident review | I | I | C | A | C | I | R | R | C | I | I | I |
| Implement lessons learned | I | I | C | A | C | I | R | R | C | I | I | I |
| Maintain incident records and evidence | I | I | I | A | I | C | R | R | I | C | C | I |

---

### 6.6 Domain 6: Third-Party and Vendor Risk Management

| Activity | CRO | CISO | CIO | CCO | ITSM | BUH | RMF | CF | LC | DPO |
|---|---|---|---|---|---|---|---|---|---|---|
| Define third-party security requirements | C | A | C | C | R | I | C | C | C | C |
| Conduct vendor cybersecurity due diligence | C | C | I | I | R | C | A | C | C | C |
| Include security clauses in vendor contracts | C | C | I | C | C | I | C | C | A | C |
| Ongoing vendor security monitoring | C | A | C | I | R | C | C | I | I | I |
| Manage vendor access to systems | I | A | C | I | R | C | I | I | I | I |
| Conduct periodic vendor security assessments | C | A | C | I | R | C | R | C | I | I |
| Manage vendor incident notifications | C | A | I | C | R | I | C | C | C | I |
| Maintain vendor risk register | A | C | I | I | C | I | R | C | I | I |

---

### 6.7 Domain 7: Data Protection and Privacy

| Activity | CRO | CISO | CIO | CCO | ITSM | ITO | BUH | RMF | CF | DPO |
|---|---|---|---|---|---|---|---|---|---|---|
| Define data classification policy | C | C | C | C | C | I | C | C | C | A |
| Implement data classification controls | I | C | C | I | R | R | R | I | I | A |
| Manage encryption standards and implementation | I | A | C | I | R | R | I | C | I | C |
| Monitor data loss prevention (DLP) controls | I | A | C | I | R | R | I | I | I | C |
| Manage personal data inventory | I | I | I | C | I | I | R | I | C | A |
| Respond to data subject access requests | I | I | I | C | I | I | C | I | C | A |
| Conduct privacy impact assessments | I | C | C | C | C | I | C | C | C | A |
| Report PDPA compliance status | C | I | I | C | I | I | I | C | C | A |

---

### 6.8 Domain 8: Network and Infrastructure Security

| Activity | CRO | CISO | CIO | ITSM | ITO | SOC | BUH | RMF | HIA |
|---|---|---|---|---|---|---|---|---|---|
| Define network security architecture standards | C | A | C | R | C | I | I | C | I |
| Manage firewall and perimeter security | I | A | C | R | R | C | I | I | I |
| Implement network segmentation | I | A | C | R | R | I | I | C | I |
| Manage cloud security controls | I | A | C | R | R | I | I | C | I |
| Monitor network traffic for threats | I | A | C | R | R | R | I | I | I |
| Manage wireless and remote access security | I | A | C | R | R | I | I | C | I |
| Conduct network security assessments | C | A | C | R | C | C | I | C | I |
| Manage endpoint protection (EDR/AV) | I | A | C | R | R | I | I | I | I |

---

### 6.9 Domain 9: Application Security

| Activity | CRO | CISO | CIO | ITSM | ITO | BUH | RMF | HIA |
|---|---|---|---|---|---|---|---|---|
| Define secure development lifecycle (SDL) standards | C | A | C | R | I | I | C | I |
| Conduct application security code reviews | I | A | C | R | R | I | I | I |
| Perform application penetration testing | I | A | C | R | C | I | I | C |
| Manage web application firewall (WAF) | I | A | C | R | R | I | I | I |
| Remediate application security vulnerabilities | I | C | C | C | R | R | I | I |
| Review third-party software components (SCA) | I | A | C | R | R | I | I | I |
| Approve release of applications to production | I | C | A | C | R | C | I | I |
| Manage API security controls | I | A | C | R | R | I | I | I |

---

### 6.10 Domain 10: Business Continuity and Cyber Resilience

| Activity | BOD/BRC | CEO | CRO | CISO | CIO | ITSM | BUH | RMF | HIA |
|---|---|---|---|---|---|---|---|---|---|
| Define cyber resilience strategy | A | I | R | R | C | I | I | C | I |
| Integrate cybersecurity into BCP/DRP | I | I | A | C | C | C | C | R | I |
| Develop cyber incident recovery plans | I | I | C | A | C | R | I | C | I |
| Conduct tabletop and simulation exercises | I | I | C | A | C | R | R | C | C |
| Test cyber recovery capabilities | I | I | C | A | C | R | I | C | C |
| Report resilience test outcomes to management | I | I | A | R | C | C | I | C | I |
| Maintain recovery time objectives (RTO/RPO) | I | I | C | C | A | R | C | C | I |

---

### 6.11 Domain 11: Security Awareness and Training

| Activity | CRO | CISO | CIO | CCO | ITSM | BUH | RMF | CF | HR |
|---|---|---|---|---|---|---|---|---|---|
| Define security awareness programme | C | A | I | C | R | I | C | C | C |
| Develop cybersecurity training content | I | A | I | C | R | I | I | I | C |
| Deliver mandatory cybersecurity training | I | C | I | C | C | I | I | I | A |
| Conduct phishing simulation exercises | I | A | I | I | R | I | I | I | I |
| Track training completion rates | I | C | I | C | C | C | I | I | A |
| Report awareness programme effectiveness | C | A | I | C | R | I | C | I | C |
| Deliver role-specific security training (e.g., dev, ops) | I | A | I | I | R | C | I | I | C |

---

### 6.12 Domain 12: Regulatory and Audit Compliance

| Activity | BOD/BRC | CRO | CISO | CIO | CCO | ITSM | RMF | CF | HIA |
|---|---|---|---|---|---|---|---|---|---|
| Monitor changes to BNM RMiT requirements | I | C | C | I | A | I | C | R | I |
| Submit mandatory BNM regulatory reports | I | C | C | I | A | I | C | R | I |
| Manage BNM examination and inspection requests | I | C | C | C | A | I | C | R | C |
| Coordinate internal cybersecurity audits | I | C | C | I | C | I | C | C | A |
| Respond to internal audit findings | I | A | C | C | C | R | C | I | I |
| Maintain cybersecurity policy compliance register | I | C | R | I | C | R | C | C | I |
| Track regulatory remediation actions | C | A | C | C | C | R | R | C | C |

---

## 7. Implementation Roadmap

### 7.1 RACI Implementation Milestones

*Outline the key steps required to operationalize this RACI Matrix within the organization. Include timelines, owners, and success criteria. This roadmap should reflect realistic implementation activities following Board approval of this document.*

| Phase | Activity | Owner | Target Date | Success Criteria |
|---|---|---|---|---|
| **Phase 1: Communication** | Distribute approved RACI Matrix to all function heads | CRO Office | [Date] | Confirmed receipt and acknowledgement from all role owners |
| **Phase 1: Communication** | Conduct briefing sessions for each governance committee | CISO | [Date] | Briefings completed; queries resolved |
| **Phase 2: Operationalization** | Embed RACI responsibilities into job descriptions and KPIs | HR + CISO | [Date] | HR records updated for all in-scope roles |
| **Phase 2: Operationalization** | Integrate RACI with incident response runbooks | ITSM | [Date] | Runbooks reference RACI designations |
| **Phase 2: Operationalization** | Update third-party contracts to reflect security obligations | Legal + CISO | [Date] | Contract register updated |
| **Phase 3: Validation** | Conduct tabletop exercise to validate RACI in practice | CISO | [Date] | Gaps identified and remediation actions logged |
| **Phase 3: Validation** | Internal audit review of RACI implementation | HIA | [Date] | Audit report issued; findings tracked |
| **Phase 4: Business as Usual** | Transition to annual review cycle | CRO | [Date] | Annual review scheduled; calendar owner confirmed |

### 7.2 Gap Remediation Actions

*Document any identified gaps between the current state and the RACI-defined target state. Track remediation actions, owners, and target closure dates.*

| Gap ID | Description | Impacted Domain | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| GAP-001 | [Description of gap] | [Domain] | [Action to close gap] | [Owner] | [Date] | [Open/In Progress/Closed] |
| GAP-002 | [Description of gap] | [Domain] | [Action to close gap] | [Owner] | [Date] | [Open/In Progress/Closed] |
| GAP-003 | [Description of gap] | [Domain] | [Action to close gap] | [Owner] | [Date] | [Open/In Progress/Closed] |

---

## 8. Monitoring and Review Mechanisms

### 8.1 RACI Effectiveness Indicators

*Define the key indicators that will be used to assess whether the RACI Matrix is being adhered to in practice. These indicators should be measurable and reviewed at defined intervals.*

The following indicators are used to monitor the effectiveness of the Cybersecurity RACI Matrix:

| Indicator | Description | Measurement Method | Review Frequency | Target |
|---|---|---|---|---|
| Role Coverage | Percentage of cybersecurity activities with a confirmed Accountable role holder | RACI register review | Annual | 100% |
| Training Completion | Percentage of named role holders who have completed cybersecurity role-specific training | HR training records | Quarterly | ≥ 95% |
| Escalation Compliance | Percentage of cybersecurity incidents escalated in accordance with RACI-defined pathways | Incident log review | Quarterly | ≥ 98% |
| Audit Finding Rate | Number of audit findings related to unclear or absent accountability | Internal audit report | Annual | 0 critical findings |
| RACI Amendment Turnaround | Average time from trigger event to updated and approved RACI Matrix | Change control log | Annual | ≤ 30 business days |
| Policy Acknowledgement | Percentage of in-scope staff who have formally acknowledged the RACI Matrix | Acknowledgement register | Annual | 100% |

### 8.2 Annual Review Process

*Describe the formal annual review process for this document. Include who initiates it, what is reviewed, how changes are approved, and how the updated document is communicated.*

The annual review of this Cybersecurity RACI Matrix shall follow the steps below:

1. **Initiation:** The CRO Office issues a formal review notice to all function heads no later than **[Month]** each year, attaching the current RACI Matrix for review
2. **Function-Level Review:** Each function head reviews their assigned designations and submits proposed changes with justification within **[X] business days**
3. **Consolidation:** The CISO consolidates all proposed changes and conducts a reconciliation review to resolve conflicts and ensure RACI rules are maintained
4. **Risk and Compliance Review:** The Risk Management Function and Compliance Function review the consolidated draft for regulatory alignment with BNM RMiT
5. **Management Approval:** The updated draft is presented to the Management Risk Committee for approval
6. **Board Notification:** Material changes to accountability at senior management level are notified to the Board Risk Committee
7. **Publication:** The approved and version-controlled document is published in [Document Management System] and distributed to all function heads
8. **Acknowledgement:** All in-scope role holders are required to formally acknowledge receipt and understanding within **[X] business days** of publication

### 8.3 Triggered Review Criteria

*List the specific events that would trigger an out-of-cycle review of this RACI Matrix.*

A review shall be triggered outside the annual cycle upon the occurrence of any of the following events:

- Material change to the organizational structure (e.g., merger, acquisition, significant restructuring)
- Appointment or departure of a senior role holder named in this document (CISO, CRO, CIO, CTO, CCO, DPO)
- Introduction of a new material technology system, platform, or outsourced service
- A significant cybersecurity incident where RACI gaps contributed to delayed response or accountability confusion
- Amendment to BNM RMiT or other applicable regulation that changes cybersecurity accountability obligations
- Internal or external audit finding that identifies a deficiency in the RACI framework
- [Other organizational trigger as determined by the CRO]

### 8.4 Reporting and Escalation

*Describe how RACI adherence is reported to governance bodies and what escalation mechanisms are in place.*

| Report | Content | Audience | Frequency | Owner |
|---|---|---|---|---|
| Cybersecurity Risk Dashboard | RACI effectiveness indicators, open gaps, escalation compliance | Management Risk Committee | Monthly | CISO |
| Annual Cybersecurity Governance Report | RACI review outcomes, changes made, residual gaps | Board Risk Committee | Annual | CRO |
| Internal Audit Report | Independent assessment of RACI adherence and control effectiveness | Audit Committee | As issued | HIA |
| Regulatory Compliance Report | BNM RMiT compliance status including RACI obligations | CCO → BNM (if required) | As required | CCO |

---

## 9. Review and Approval

### 9.1 Version History

*Record all versions of this document. The initial approved version is 1.0. Subsequent changes increment the minor version (1.1, 1.2) for non-material updates and the major version (2.0) for material changes.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | Initial draft for internal review |
| 0.2 | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | Incorporated feedback from [Function] |
| 1.0 | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | First approved version; issued for organization-wide implementation |
| [1.1] | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | [Description of changes] |

### 9.2 Approval Sign-Off

*This section records the formal approval of the current version of this document. All sign-offs must be obtained prior to publication and distribution.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], [Title] | __________________ | [Date] |
| Reviewed By (Risk) | [Name], Chief Risk Officer | __________________ | [Date] |
| Reviewed By (Security) | [Name], Chief Information Security Officer | __________________ | [Date] |
| Reviewed By (Compliance) | [Name], Chief Compliance Officer | __________________ | [Date] |
| Reviewed By (Internal Audit) | [Name], Head of Internal Audit | __________________ | [Date] |
| Approved By | [Name], [Title] | __________________ | [Date] |
| Board Notation (if applicable) | [Board Member], Board Risk Committee | __________________ | [Date] |

---

## 10. References

### 10.1 Regulatory References

| Reference | Document | Clause / Section | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 11.3** | Primary obligation: clear cybersecurity roles and accountability |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11.1 | Board and senior management technology risk responsibilities |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.1 – 10.5 | Cybersecurity risk management requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 12.1 | Technology service provider management |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 9 (Security Principle) | Obligation to protect personal data from loss, misuse, and unauthorized access |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 10 (Retention Principle) | Data retention obligations with security implications |
| [BNM Circular] | [Circular Title] | [Reference] | [Relevance] |

### 10.2 Internal Policy References

| Document Title | Document ID | Owner | Relationship to this Document |
|---|---|---|---|
| Cybersecurity Policy | [Doc ID] | CISO | Parent policy; this RACI operationalizes accountability therein |
| Technology Risk Management Policy | [Doc ID] | CRO | Broader risk framework within which cybersecurity RACI sits |
| Incident Response Plan | [Doc ID] | CISO | References this RACI for escalation and communication paths |
| Business Continuity Plan | [Doc ID] | CRO | References this RACI for cyber resilience role assignments |
| Third-Party Risk Management Policy | [Doc ID] | CRO | References this RACI for vendor security accountability |
| Data Governance and Classification Policy | [Doc ID] | DPO | References this RACI for data protection role assignments |
| Change Management Policy | [Doc ID] | CIO | Governs amendments to this document |
| Information Security Awareness Policy | [Doc ID] | CISO | References this RACI for training accountability |

### 10.3 Industry Standards and Frameworks

| Standard / Framework | Version / Edition | Relevant Sections | Application |
|---|---|---|---|
| ISO/IEC 27001 | 2022 | Annex A Controls (5.2, 5.3) | Information security roles and responsibilities |
| NIST Cybersecurity Framework | 2.0 | Govern function | Cybersecurity governance and accountability |
| NIST SP 800-53 | Rev 5 | PL-2, PS-2, SA-3 | Planning, personnel security, system development accountability |
| CIS Controls | v8 | Control 17 (Incident Response) | Accountability for incident management |
| [Additional Standard] | [Version] | [Section] | [Application] |

---

## 11. Appendices

### Appendix A: Role-to-Incumbent Mapping

*This appendix maps the role designations used in the RACI Matrix to the actual named incumbents at [Organization Name]. This appendix must be updated whenever there is a change in personnel in any listed role. As a living operational record, Appendix A may be maintained separately from the main document and updated without triggering a full version change, subject to CRO notification.*

| Role | Abbreviation | Current Incumbent | Contact | Effective Date |
|---|---|---|---|---|
| Chief Risk Officer | CRO | [Name] | [Email / Ext.] | [Date] |
| Chief Information Security Officer | CISO | [Name] | [Email / Ext.] | [Date] |
| Chief Information Officer | CIO | [Name] | [Email / Ext.] | [Date] |
| Chief Compliance Officer | CCO | [Name] | [Email / Ext.] | [Date] |
| Chief Executive Officer | CEO | [Name] | [Email / Ext.] | [Date] |
| Chief Financial Officer | CFO | [Name] | [Email / Ext.] | [Date] |
| Head of Internal Audit | HIA | [Name] | [Email / Ext.] | [Date] |
| Data Protection Officer | DPO | [Name] | [Email / Ext.] | [Date] |
| IT Security Manager | ITSM | [Name] | [Email / Ext.] | [Date] |
| [Additional Role] | [Abbrev] | [Name] | [Email / Ext.] | [Date] |

---

### Appendix B: RACI Conflict Resolution Log

*This appendix records any disagreements or conflicts identified during the review and assignment of RACI designations. All conflicts must be resolved before the document can be approved. Document the conflict, the parties involved, the resolution, and the final decision authority.*

| Conflict ID | Domain | Activity | Conflicting Roles | Nature of Conflict | Resolution | Decision Authority | Date Resolved |
|---|---|---|---|---|---|---|---|
| CON-001 | [Domain] | [Activity] | [Role 1] vs [Role 2] | [Description] | [Resolution] | [Role] | [Date] |
| CON-002 | [Domain] | [Activity] | [Role 1] vs [Role 2] | [Description] | [Resolution] | [Role] | [Date] |

---

### Appendix C: Glossary of Terms

*Definitions of key terms used in this document.*

| Term | Definition |
|---|---|
| **Accountability** | Ultimate ownership and answerability for an outcome; the Accountable role cannot be delegated away |
| **BNM** | Bank Negara Malaysia; the central bank and primary financial regulator of Malaysia |
| **CISO** | Chief Information Security Officer; senior executive responsible for the cybersecurity programme |
| **Cyber Resilience** | The ability of an organization to anticipate, withstand, recover from, and adapt to adverse cybersecurity events |
| **DRP** | Disaster Recovery Plan; documented procedures for restoring IT systems following a disruption |
| **IAM** | Identity and Access Management; processes and technologies controlling user access to systems and data |
| **KRI** | Key Risk Indicator; a metric providing early warning of increasing risk exposure |
| **PDPA** | Personal Data Protection Act 2010; Malaysian law governing the processing of personal data |
| **RACI** | Responsible, Accountable, Consulted, Informed; a matrix used to assign roles in processes |
| **RMiT** | Risk Management in Technology; BNM policy document governing technology risk in financial institutions |
| **RTO/RPO** | Recovery Time Objective / Recovery Point Objective; targets for system recovery following an incident |
| **SIEM** | Security Information and Event Management; platform for collecting, correlating, and analysing security logs |
| **SOC** | Security Operations Centre; team responsible for continuous monitoring and incident response |
| **WAF** | Web Application Firewall; security control protecting web applications from attacks |
| **[Term]** | [Definition] |

---

### Appendix D: Acknowledgement Register

*All personnel in roles named in this RACI Matrix are required to formally acknowledge that they have read, understood, and accepted their designated responsibilities. This register records such acknowledgements and must be maintained by [HR / Risk Management Function].*

| Role | Name | Department | Acknowledgement Date | Method (Electronic/Physical) | Acknowledged Version |
|---|---|---|---|---|---|
| [Role] | [Name] | [Department] | [Date] | [Electronic / Physical] | [Version] |
| [Role] | [Name] | [Department] | [Date] | [Electronic / Physical] | [Version] |

---

### Appendix E: Related Regulatory Examination Evidence

*This appendix indexes the evidence artefacts that may be requested by BNM examiners or internal/external auditors in relation to this RACI Matrix. Maintaining this index facilitates rapid evidence production during regulatory examinations.*

| Evidence Item | Description | Location / Reference | Owner | Last Updated |
|---|---|---|---|---|
| Board approval minutes | Minutes of Board/BRC meeting approving this RACI Matrix | [Document Management System Path] | CRO Office | [Date] |
| Annual review records | Documentation of most recent annual review process | [Document Management System Path] | CRO Office | [Date] |
| Training records | Proof of cybersecurity training completion for named role holders | [HR System Path] | HR | [Date] |
| Incident escalation logs | Records demonstrating RACI-compliant incident escalation | [Incident Management System Path] | ITSM | [Date] |
| Acknowledgement register | Signed acknowledgements from named role holders | [Document Management System Path] | HR / RMF | [Date] |
| Gap remediation evidence | Evidence of actions taken to close identified RACI gaps | [Document Management System Path] | CRO / CISO | [Date] |

---

*End of Document*

---

**Document Control:** This document is subject to the [Organization Name] Document Management Policy. The master copy is maintained in [Document Management System]. Printed copies are uncontrolled. Always verify you are referencing the current approved version before use.

| Field | Value |
|---|---|
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Next Review Date | [Next Review Date] |