# Cloud Security Assessment Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Cloud Architecture Lead |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name] and relevant regulatory bodies. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Cloud Service Model and Deployment Type](#4-cloud-service-model-and-deployment-type)
5. [Data Residency Requirements](#5-data-residency-requirements)
6. [Shared Responsibility Matrix](#6-shared-responsibility-matrix)
7. [Findings and Ratings](#7-findings-and-ratings)
8. [Remediation Plan and Tracking](#8-remediation-plan-and-tracking)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Cloud Security Assessment Report documents the results of a systematic evaluation of cloud security controls implemented by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 17.2** governing cloud services. The report validates the effectiveness of security controls, identifies gaps or deficiencies, and tracks remediation progress across all in-scope cloud environments.

This report is produced on a **quarterly** basis and serves as a primary evidence artifact for internal audit, senior management oversight, and regulatory examination purposes.

### 1.2 Scope

*Define the boundary of this assessment, including which cloud environments, accounts, workloads, and data classifications are covered. Explicitly state any exclusions and the rationale.*

**Assessment Period:** [Assessment Start Date] to [Assessment End Date]

**In-Scope Cloud Environments:**

| Environment | Cloud Provider | Account / Subscription ID | Purpose |
|---|---|---|---|
| [Environment Name, e.g., Production] | [e.g., Microsoft Azure / AWS / GCP] | [Account ID] | [e.g., Core banking workloads] |
| [Environment Name, e.g., Staging] | [Cloud Provider] | [Account ID] | [e.g., UAT and pre-production] |
| [Environment Name, e.g., DR Site] | [Cloud Provider] | [Account ID] | [e.g., Disaster Recovery] |

**Out-of-Scope:**

- [Explicitly list any systems, environments, or services excluded from this assessment]
- [State the rationale for exclusion, e.g., "Legacy on-premises systems assessed under separate review cycle"]

**Data Classification in Scope:**

- [ ] Public
- [ ] Internal
- [ ] Confidential
- [ ] Restricted / Sensitive (e.g., customer PII, financial records)

### 1.3 Regulatory Context

This assessment is conducted in compliance with the following regulatory obligations:

- **BNM RMiT Policy Document** — Clause 17.2 (Cloud Services)
- **Personal Data Protection Act 2010 (PDPA)** — Data security obligations for personal data processed in cloud environments
- **[Organization Name] Cloud Security Policy** — Version [X.X], dated [Date]
- **[Organization Name] Information Security Policy** — Version [X.X], dated [Date]

---

## 2. Assessment Scope and Criteria

### 2.1 Assessment Objectives

*List the specific objectives this assessment is designed to achieve. These should align directly with RMiT Clause 17.2 requirements and the organization's cloud risk appetite.*

This assessment was conducted to achieve the following objectives:

1. Validate that cloud security controls remain effective and aligned with the organization's approved Cloud Security Baseline.
2. Confirm compliance with BNM RMiT Clause 17.2 requirements for cloud risk management.
3. Identify new or emerging security risks arising from changes in cloud configuration, architecture, or usage.
4. Verify that previously identified findings have been remediated within agreed timelines.
5. Assess adherence to data residency and sovereignty requirements under applicable Malaysian regulations.

### 2.2 Assessment Criteria

*Specify the standards, baselines, and benchmarks used to evaluate cloud security controls. Reference both internal policies and external frameworks.*

Controls were evaluated against the following criteria:

| Criteria Category | Standard / Baseline | Version / Edition |
|---|---|---|
| Cloud Security Baseline | [Organization Name] Cloud Security Standard | [Version] |
| Regulatory Requirement | BNM RMiT Policy Document | [Effective Date] |
| Industry Framework | CIS Benchmarks for [Cloud Provider] | [Version] |
| Industry Framework | ISO/IEC 27017 — Cloud Security Controls | 2015 |
| Industry Framework | CSA Cloud Controls Matrix (CCM) | v4.0 |
| Data Protection | Personal Data Protection Act 2010 (PDPA) | 2010 (as amended) |
| Identity & Access | [Organization Name] IAM Policy | [Version] |

### 2.3 Assessment Boundary Diagram

*Insert or reference a network/architecture diagram clearly depicting the assessed cloud environment boundary, data flows, and integration points with on-premises systems.*

> **[Insert Cloud Architecture Diagram — Label all ingress/egress points, data flows, and trust boundaries]**

---

## 3. Methodology

### 3.1 Assessment Approach

*Describe the assessment methodology, including whether the assessment was conducted internally, by a third party, or a combination. Specify the techniques used.*

This assessment was conducted using a **[Internal / Third-Party / Hybrid]** approach. The following techniques were employed:

| Technique | Description | Tools Used |
|---|---|---|
| Configuration Review | Automated and manual review of cloud resource configurations against defined baselines | [e.g., Microsoft Defender for Cloud / AWS Security Hub / Prowler] |
| Vulnerability Scanning | Scanning of cloud-hosted workloads for known vulnerabilities | [e.g., Qualys / Tenable.io / Prisma Cloud] |
| Identity & Access Review | Review of IAM roles, policies, and entitlements for least-privilege compliance | [e.g., Azure AD Access Reviews / AWS IAM Access Analyzer] |
| Log & Monitoring Review | Review of SIEM integration, alerting rules, and log retention configurations | [e.g., Microsoft Sentinel / Splunk / Wazuh] |
| Policy-as-Code Validation | Validation of infrastructure-as-code templates against security guardrails | [e.g., Checkov / Terraform Sentinel / AWS Config Rules] |
| Penetration Testing | [If applicable] Targeted testing of cloud-exposed attack surfaces | [e.g., Third-party engagement / Internal red team] |
| Documentation Review | Review of CSP contracts, SLAs, and shared responsibility agreements | Manual |
| Interview | Discussions with cloud operations and security personnel | N/A |

### 3.2 Assessment Team

*List the individuals who conducted the assessment, including their role and whether they are internal staff or external assessors.*

| Name | Role | Organization | Qualification / Certification |
|---|---|---|---|
| [Name] | Assessment Lead | [Internal / Vendor Name] | [e.g., CCSP, CISSP, CISA] |
| [Name] | Cloud Security Analyst | [Internal / Vendor Name] | [e.g., AWS Security Specialty] |
| [Name] | IAM Specialist | [Internal / Vendor Name] | [e.g., Azure Security Engineer] |
| [Name] | Reviewer / Quality Assurance | [Organization Name] | [e.g., CISA] |

### 3.3 Assessment Timeline

| Phase | Activity | Start Date | End Date | Status |
|---|---|---|---|---|
| Planning | Scope definition, criteria alignment, tooling setup | [Date] | [Date] | [Complete / In Progress] |
| Fieldwork | Configuration review, scanning, interviews | [Date] | [Date] | [Complete / In Progress] |
| Analysis | Findings analysis, risk rating, draft report | [Date] | [Date] | [Complete / In Progress] |
| Reporting | Report finalization, management review | [Date] | [Date] | [Complete / In Progress] |
| Remediation Tracking | Follow-up on open findings from prior quarter | [Date] | [Date] | [Complete / In Progress] |

### 3.4 Limitations and Constraints

*Document any limitations that affected the assessment scope or depth. This is important for auditors to understand the completeness of the review.*

- [e.g., "Access to Cloud Provider X audit logs was restricted to the last 90 days due to retention policy limitations."]
- [e.g., "Penetration testing was excluded from this quarter's assessment; scheduled for Q[X] [Year]."]
- [e.g., "Assessment did not include third-party SaaS applications integrated with cloud environments."]

---

## 4. Cloud Service Model and Deployment Type

### 4.1 Cloud Service Model

*Identify the cloud service model(s) in use. This is fundamental for determining the applicable shared responsibility boundaries under BNM RMiT Clause 17.2.*

| Cloud Provider | Service Model | Primary Services in Use | Notes |
|---|---|---|---|
| [Cloud Provider A] | Infrastructure as a Service (IaaS) | [e.g., Virtual Machines, Storage, Networking] | [Notes] |
| [Cloud Provider A] | Platform as a Service (PaaS) | [e.g., Azure SQL Database, App Service, AKS] | [Notes] |
| [Cloud Provider B] | Software as a Service (SaaS) | [e.g., Microsoft 365, Salesforce] | [Notes] |
| [Cloud Provider C] | Function as a Service (FaaS) | [e.g., AWS Lambda, Azure Functions] | [Notes] |

### 4.2 Deployment Model

| Deployment Model | Applicable | Environments | Justification |
|---|---|---|---|
| Public Cloud | [Yes / No] | [Environment names] | [Rationale] |
| Private Cloud | [Yes / No] | [Environment names] | [Rationale] |
| Hybrid Cloud | [Yes / No] | [Environment names] | [Rationale] |
| Multi-Cloud | [Yes / No] | [Environment names] | [Rationale] |

### 4.3 Cloud Service Provider Risk Assessment Summary

*Summarize the current risk posture of each engaged Cloud Service Provider (CSP) based on their latest compliance certifications, audit reports, and contractual obligations. Attach CSP audit reports as appendices.*

| Cloud Service Provider | Certifications Held | Last Audit Report Date | Contractual SLA | Risk Rating |
|---|---|---|---|---|
| [CSP Name] | [e.g., ISO 27001, SOC 2 Type II, CSA STAR Level 2, PCI DSS] | [Date] | [e.g., 99.99% uptime] | [Low / Medium / High] |
| [CSP Name] | [Certifications] | [Date] | [SLA] | [Risk Rating] |

**CSP Risk Rating Rationale:** *[Provide a brief narrative explaining the basis for each CSP's risk rating, referencing their certifications, incident history, and contractual protections.]*

---

## 5. Data Residency Requirements

### 5.1 Regulatory Requirements for Data Residency

*Document the specific Malaysian regulatory requirements governing where data must be stored and processed. BNM RMiT and PDPA impose strict requirements on the location of customer and financial data.*

Under BNM RMiT and applicable Malaysian data protection requirements, [Organization Name] is obligated to ensure that:

- Customer financial data and personally identifiable information (PII) are stored within **Malaysia** unless express regulatory approval has been obtained for offshore storage.
- Cross-border data transfers comply with PDPA requirements and BNM's prior approval process where applicable.
- Critical systems and data must have recovery capabilities within Malaysian jurisdiction.

### 5.2 Data Residency Mapping

*Map each data classification to its storage location, CSP region, and compliance status. Flag any data stored outside Malaysia.*

| Data Classification | Data Type / Description | CSP | CSP Region | Physical Location | Residency Compliant | BNM Approval Obtained | Notes |
|---|---|---|---|---|---|---|---|
| Restricted | Customer PII (name, NRIC, account number) | [CSP] | [e.g., Southeast Asia (KL)] | Malaysia | [Yes / No] | [Yes / No / N/A] | [Notes] |
| Restricted | Financial transaction records | [CSP] | [CSP Region] | [Country] | [Yes / No] | [Yes / No / N/A] | [Notes] |
| Confidential | Internal risk reports | [CSP] | [CSP Region] | [Country] | [Yes / No] | [Yes / No / N/A] | [Notes] |
| Internal | Application logs | [CSP] | [CSP Region] | [Country] | [Yes / No] | [Yes / No / N/A] | [Notes] |

### 5.3 Cross-Border Data Transfer Controls

*Describe the technical and contractual controls in place to manage any approved cross-border data transfers.*

| Transfer Mechanism | Description | Applicable Data Flows | Status |
|---|---|---|---|
| Data Processing Agreement (DPA) | Contractual control governing offshore processing by CSPs | [Data flow description] | [In Place / Pending] |
| Encryption in Transit | TLS 1.2+ enforced for all cross-border data transfers | All cross-border flows | [Compliant / Non-Compliant] |
| Data Residency Policy Enforcement | CSP-level region restrictions via policy guardrails (e.g., Azure Policy, AWS SCP) | All environments | [Compliant / Non-Compliant] |
| Regulatory Approval (BNM) | Formal BNM approval for any data stored outside Malaysia | [Specific data sets] | [Obtained / Not Required / Pending] |

### 5.4 Data Residency Compliance Status

**Overall Compliance:** [Compliant / Non-Compliant / Partially Compliant]

*[Provide a narrative summary of the organization's current data residency compliance posture, highlighting any exceptions, deviations, or in-progress remediation actions.]*

---

## 6. Shared Responsibility Matrix

### 6.1 Overview

*The shared responsibility model defines the division of security obligations between the Cloud Service Provider (CSP) and [Organization Name]. This section maps responsibilities across service models and identifies ownership for each control domain. This is a core requirement under BNM RMiT Clause 17.2.*

**Responsibility Legend:**

| Symbol | Meaning |
|---|---|
| **CSP** | Cloud Service Provider is solely responsible |
| **ORG** | [Organization Name] is solely responsible |
| **SHARED** | Both CSP and [Organization Name] share responsibility |
| **N/A** | Not applicable to this service model |

### 6.2 Shared Responsibility Matrix by Control Domain

| Security Control Domain | IaaS Responsibility | PaaS Responsibility | SaaS Responsibility | [Organization Name] Controls in Place |
|---|---|---|---|---|
| Physical Security (Data Center) | CSP | CSP | CSP | N/A — Rely on CSP certifications (ISO 27001, SOC 2) |
| Network Infrastructure | SHARED | CSP | CSP | VNet/VPC segmentation, NSG/Security Group rules, WAF |
| Hypervisor / Host OS | CSP | CSP | CSP | N/A — Rely on CSP certifications |
| Guest Operating System (Patching) | ORG | SHARED | CSP | Automated patching via [Tool Name]; monthly patch cycle |
| Application Runtime & Middleware | ORG | SHARED | CSP | SAST/DAST in CI/CD pipeline; container image scanning |
| Application Code & Configuration | ORG | ORG | N/A | Secure SDLC, code review, IaC scanning |
| Data Encryption at Rest | SHARED | SHARED | SHARED | Customer-managed keys (CMK) enforced for Restricted data |
| Data Encryption in Transit | SHARED | SHARED | SHARED | TLS 1.2+ enforced; certificate management via [Tool] |
| Identity & Access Management | SHARED | SHARED | SHARED | MFA enforced; PAM solution; quarterly access reviews |
| Privileged Access Management | ORG | ORG | ORG | [PAM Solution Name]; just-in-time access; session recording |
| Logging & Monitoring | SHARED | SHARED | SHARED | SIEM integration ([SIEM Name]); 90-day hot / 1-year cold retention |
| Incident Response | SHARED | SHARED | SHARED | IRP documented; CSP escalation contacts maintained |
| Vulnerability Management | ORG | SHARED | CSP | Quarterly vulnerability scans; CVE tracking via [Tool] |
| Business Continuity / DR | SHARED | SHARED | SHARED | BCP/DRP tested [annually/semi-annually]; RTO [X hrs] RPO [X hrs] |
| Compliance & Regulatory | ORG | ORG | ORG | BNM RMiT compliance program; quarterly assessments |
| Data Classification & Handling | ORG | ORG | ORG | DLP controls; data classification policy enforced |
| Security Configuration Management | ORG | SHARED | CSP | CIS Benchmark hardening; Azure Policy / AWS Config enforcement |

### 6.3 Responsibility Gap Analysis

*Identify any areas where responsibility ownership is unclear, contested, or where the organization's controls do not adequately address its share of the shared responsibility.*

| Control Domain | Identified Gap | Risk Level | Remediation Action | Owner | Target Date |
|---|---|---|---|---|---|
| [e.g., Logging & Monitoring] | [e.g., CSP audit logs for PaaS services not ingested into SIEM] | [High / Medium / Low] | [e.g., Configure Diagnostic Settings to forward logs to Log Analytics Workspace] | [Name / Team] | [Date] |
| [Control Domain] | [Gap description] | [Risk Level] | [Remediation action] | [Owner] | [Date] |

---

## 7. Findings and Ratings

### 7.1 Risk Rating Definitions

*All findings are rated using the following risk classification framework, aligned with [Organization Name]'s Enterprise Risk Management (ERM) methodology.*

| Risk Rating | Description | Required Remediation Timeline |
|---|---|---|
| **Critical** | Exploitable vulnerability or control failure posing immediate risk to confidentiality, integrity, or availability of critical systems or customer data | Immediate — within 7 days |
| **High** | Significant control weakness with high likelihood of exploitation or material regulatory non-compliance | 30 days |
| **Medium** | Control gap with moderate risk; compensating controls may be partially effective | 60 days |
| **Low** | Minor control weakness with limited impact; compensating controls are effective | 90 days |
| **Informational** | Observation or best practice recommendation with no immediate risk impact | Next scheduled review cycle |

### 7.2 Executive Summary of Findings

*Provide a high-level summary of the assessment results for senior management consumption. Use quantitative data where possible.*

| Risk Rating | New Findings (This Quarter) | Carried Over (Prior Quarter) | Closed (This Quarter) | Total Open |
|---|---|---|---|---|
| Critical | [#] | [#] | [#] | [#] |
| High | [#] | [#] | [#] | [#] |
| Medium | [#] | [#] | [#] | [#] |
| Low | [#] | [#] | [#] | [#] |
| Informational | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** |

**Overall Cloud Security Posture Rating:** [Strong / Satisfactory / Needs Improvement / Unsatisfactory]

*[Insert a 2-3 sentence narrative summarizing the overall security posture, key themes in findings, and trajectory compared to the prior quarter.]*

### 7.3 Detailed Findings

*Document each finding using the standard finding template below. Each finding must be uniquely identified and tracked through to closure.*

---

#### Finding [CSA-YYYY-QX-001]

| Field | Details |
|---|---|
| **Finding ID** | CSA-[YYYY]-Q[X]-001 |
| **Title** | [Short descriptive title, e.g., "Multi-Factor Authentication Not Enforced for Privileged Cloud Accounts"] |
| **Risk Rating** | [Critical / High / Medium / Low / Informational] |
| **Status** | [New / Carried Over / In Remediation / Closed] |
| **Control Domain** | [e.g., Identity & Access Management] |
| **Affected Environment** | [e.g., Production — Azure Subscription ID: XXXX] |
| **RMiT Clause** | [e.g., RMiT Clause 17.2 / Supporting clause] |
| **CSP / Service** | [e.g., Microsoft Azure — Azure Active Directory] |

**Observation:**
*[Describe what was observed during the assessment. Be specific — include configuration names, resource identifiers, and evidence references.]*

[Detailed description of the finding, including the specific misconfiguration, gap, or vulnerability identified.]

**Evidence:**
- [e.g., Screenshot reference: Appendix C — Figure C.1]
- [e.g., Azure Policy compliance report — Exported [Date]]
- [e.g., IAM Access Analyzer finding ID: [ID]]

**Risk / Impact:**
*[Describe the potential impact to the organization if this finding is not remediated. Link to specific risks — financial, reputational, regulatory.]*

[Impact description]

**Root Cause:**
[Root cause analysis — e.g., "Conditional Access policy was not applied to the Global Administrators group due to a configuration oversight during the last Azure AD tenant migration."]

**Recommendation:**
[Specific, actionable remediation steps — e.g., "Enable and enforce MFA Conditional Access policy for all accounts assigned privileged roles. Verify policy scope includes break-glass accounts with appropriate monitoring."]

**Management Response:**
[To be completed by the relevant control owner — include acceptance, remediation plan, or risk acceptance rationale.]

**Remediation Owner:** [Name / Team]

**Target Remediation Date:** [Date]

---

#### Finding [CSA-YYYY-QX-002]

*[Repeat the finding template above for each identified finding. Number sequentially.]*

---

### 7.4 Prior Quarter Finding Status

*Track all findings from the prior quarterly assessment and update their remediation status.*

| Finding ID | Title | Original Risk Rating | Remediation Due Date | Current Status | Evidence of Closure / Updated ETA |
|---|---|---|---|---|---|
| CSA-[YYYY]-Q[X-1]-001 | [Finding Title] | [Rating] | [Date] | [Closed / In Remediation / Overdue] | [Evidence or updated ETA] |
| CSA-[YYYY]-Q[X-1]-002 | [Finding Title] | [Rating] | [Date] | [Closed / In Remediation / Overdue] | [Evidence or updated ETA] |

---

## 8. Remediation Plan and Tracking

### 8.1 Consolidated Remediation Plan

*Consolidate all open findings into a single remediation plan. This table is the primary tracking artifact for management and Board reporting.*

| Finding ID | Risk Rating | Finding Title | Control Owner | Remediation Action | Target Date | Progress | Escalation Required |
|---|---|---|---|---|---|---|---|
| [ID] | [Critical] | [Title] | [Owner] | [Action] | [Date] | [% Complete] | [Yes / No] |
| [ID] | [High] | [Title] | [Owner] | [Action] | [Date] | [% Complete] | [Yes / No] |
| [ID] | [Medium] | [Title] | [Owner] | [Action] | [Date] | [% Complete] | [Yes / No] |

### 8.2 Risk Acceptance Register

*Document any findings where management has formally accepted the residual risk rather than remediating. Risk acceptance must be approved by an appropriate authority commensurate with the risk level.*

| Finding ID | Risk Rating | Rationale for Acceptance | Approver | Approval Date | Review Date |
|---|---|---|---|---|---|
| [ID] | [Rating] | [Business justification for accepting the risk] | [Name / Title] | [Date] | [Date] |

---

## 9. Roles and Responsibilities

### 9.1 RACI Matrix

*The following RACI matrix defines responsibilities for the Cloud Security Assessment process. All roles must be filled by named individuals for this assessment.*

**RACI Legend:** **R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | Cloud Architecture Lead | CISO / Head of IT Security | Cloud Operations Team | Internal Audit | Risk Management | Senior Management / Board |
|---|---|---|---|---|---|---|
| Define assessment scope and criteria | R | A | C | C | C | I |
| Execute technical assessment | R | C | R | I | I | — |
| Conduct CSP contract and SLA review | R | C | C | C | I | — |
| Analyse and rate findings | R | A | C | C | C | — |
| Validate data residency compliance | R | C | R | C | I | — |
| Review shared responsibility matrix | R | A | C | I | I | — |
| Draft assessment report | R | A | I | I | I | — |
| Review and validate report | C | A | I | R | C | — |
| Approve and sign off report | C | A | — | I | I | I |
| Present findings to management | C | R | — | C | C | A |
| Track remediation actions | R | A | R | I | C | I |
| Escalate Critical / High findings | R | A | I | I | C | I |
| Maintain assessment records | R | A | I | I | I | — |

### 9.2 Key Contacts for This Assessment

| Role | Name | Department | Contact |
|---|---|---|---|
| Cloud Architecture Lead (Assessment Owner) | [Name] | [Department] | [Email] |
| CISO | [Name] | Information Security | [Email] |
| Cloud Operations Lead | [Name] | Technology Operations | [Email] |
| Internal Audit Representative | [Name] | Internal Audit | [Email] |
| Risk Management Representative | [Name] | Risk Management | [Email] |
| CSP Account Manager — [CSP Name] | [Name] | [CSP Organization] | [Email] |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes / Description |
|---|---|---|---|
| 0.1 | [Date] | [Author Name] | Initial draft |
| 0.2 | [Date] | [Author Name] | Incorporated internal review comments |
| 0.3 | [Date] | [Author Name] | Added prior quarter remediation tracking |
| 1.0 | [Date] | [Author Name] | Approved final version for [Quarter] [Year] |

### 10.2 Review Record

| Reviewer | Role | Review Date | Comments / Outcome |
|---|---|---|---|
| [Name] | Cloud Architecture Lead | [Date] | [Reviewed and approved / Reviewed with comments — see v0.2] |
| [Name] | CISO | [Date] | [Reviewed and approved / Comments incorporated] |
| [Name] | Internal Audit | [Date] | [Reviewed and approved / No further comments] |
| [Name] | Risk Management | [Date] | [Reviewed and approved] |

### 10.3 Approval Sign-Off

*By signing below, the approvers confirm that this Cloud Security Assessment Report accurately represents the findings of the assessment conducted for the period stated, and that remediation plans are adequate and appropriately owned.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Cloud Architecture Lead | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Technology Officer / Head of IT | [Name] | __________________ | [Date] |
| Head of Risk Management | [Name] | __________________ | [Date] |

---

## 11. References

### 11.1 Regulatory and Policy References

| Reference | Document Title | Issuing Body | Relevant Clause / Section |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia (BNM) | Clause 17.2 — Cloud Services |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia (BNM) | Clause 10 — Cyber Risk Management |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia (BNM) | Clause 11 — Security Operations |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Sections 9–10 — Security and Retention |
| NACSA | National Cybersecurity Policy | NACSA | Critical Information Infrastructure protection |

### 11.2 Standards and Frameworks

| Reference | Document Title | Issuing Body | Version |
|---|---|---|---|
| ISO/IEC 27001 | Information Security Management Systems | ISO/IEC | 2022 |
| ISO/IEC 27017 | Code of Practice for Cloud Security Controls | ISO/IEC | 2015 |
| ISO/IEC 27018 | Protection of PII in Public Clouds | ISO/IEC | 2019 |
| CSA CCM | Cloud Controls Matrix | Cloud Security Alliance | v4.0 |
| CIS Benchmarks | CIS Benchmark for [Cloud Provider] | Center for Internet Security | [Version] |
| NIST SP 800-144 | Guidelines on Security and Privacy in Public Cloud Computing | NIST | [Version] |

### 11.3 Internal Policy References

| Document Title | Document ID | Version | Owner |
|---|---|---|---|
| Cloud Security Policy | [Doc ID] | [Version] | Cloud Architecture Lead |
| Information Security Policy | [Doc ID] | [Version] | CISO |
| Data Classification Policy | [Doc ID] | [Version] | CISO |
| Incident Response Plan | [Doc ID] | [Version] | Security Operations |
| Business Continuity Plan | [Doc ID] | [Version] | Business Continuity Manager |
| Vendor / Third-Party Risk Policy | [Doc ID] | [Version] | Risk Management |

---

## 12. Appendices

### Appendix A — Cloud Security Control Checklist

*[Attach the full completed control checklist used during this assessment. The checklist should map each control to its RMiT clause reference, the evidence reviewed, the assessor's rating (Pass / Fail / Partial / N/A), and any associated finding ID.]*

> **[Attach as Appendix A: Cloud Security Control Checklist — [Quarter] [Year]]**

### Appendix B — Automated Scan Reports

*[Attach raw outputs from automated scanning tools, including configuration compliance reports, vulnerability scan results, and policy-as-code validation outputs. Summarise key statistics and reference detailed evidence.]*

> **[Attach as Appendix B: Automated Scan Outputs — [Tool Name] — [Date]]**

| Tool | Scan Date | Total Checks | Passed | Failed | Not Applicable | Report Reference |
|---|---|---|---|---|---|---|
| [e.g., Microsoft Defender for Cloud] | [Date] | [#] | [#] | [#] | [#] | Appendix B.1 |
| [e.g., Prowler / AWS Security Hub] | [Date] | [#] | [#] | [#] | [#] | Appendix B.2 |
| [e.g., Qualys VM] | [Date] | [#] | [#] | [#] | [#] | Appendix B.3 |

### Appendix C — Evidence Screenshots and Artefacts

*[Attach supporting screenshots, configuration exports, and other evidence artefacts referenced in the findings section. Label each exhibit clearly with the finding ID it supports.]*

> **[Attach as Appendix C: Evidence Artefacts — organized by Finding ID]**

### Appendix D — CSP Audit Reports and Certifications

*[Attach or reference the most recent third-party audit reports and compliance certifications obtained from each engaged Cloud Service Provider. These serve as primary evidence of CSP-managed control effectiveness.]*

> **[Attach as Appendix D: CSP Compliance Certifications and Audit Reports]**

| CSP | Certification / Report Type | Validity Period | Source |
|---|---|---|---|
| [CSP Name] | SOC 2 Type II | [From] — [To] | [CSP Trust Portal / Direct delivery] |
| [CSP Name] | ISO/IEC 27001 Certificate | [From] — [To] | [CSP Trust Portal] |
| [CSP Name] | CSA STAR Level 2 | [From] — [To] | [CSA STAR Registry] |
| [CSP Name] | PCI DSS Attestation of Compliance | [From] — [To] | [CSP Trust Portal] |

### Appendix E — Data Residency Confirmation Letters

*[Attach any formal written confirmations from Cloud Service Providers confirming the physical storage location of [Organization Name]'s data, and any BNM approval letters for cross-border data transfer or offshore storage.]*

> **[Attach as Appendix E: CSP Data Residency Confirmation — [CSP Name] — [Date]]**

### Appendix F — Penetration Test Report Summary

*[If penetration testing was conducted as part of this quarterly assessment or since the last quarterly assessment, attach the executive summary of the penetration test report here. The full report is classified as Restricted and maintained separately.]*

> **[Attach as Appendix F: Cloud Penetration Test Executive Summary — [Date] — [Testing Vendor]]**

### Appendix G — Glossary

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia — the central bank and financial regulatory authority of Malaysia |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk |
| PDPA | Personal Data Protection Act 2010 — Malaysian legislation governing personal data |
| CSP | Cloud Service Provider — the vendor providing cloud infrastructure, platform, or software services |
| IaaS | Infrastructure as a Service — cloud model where CSP provides virtualized computing infrastructure |
| PaaS | Platform as a Service — cloud model where CSP provides platform and runtime environment |
| SaaS | Software as a Service — cloud model where CSP provides fully managed application |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| CMK | Customer-Managed Key — encryption key controlled by the customer, not the CSP |
| IAM | Identity and Access Management — policies and controls governing access to cloud resources |
| PAM | Privileged Access Management — controls governing highly privileged accounts and credentials |
| DLP | Data Loss Prevention — controls preventing unauthorized exfiltration of sensitive data |
| SIEM | Security Information and Event Management — centralized log aggregation and alerting platform |
| SLA | Service Level Agreement — contractual commitment on service availability and performance |
| RTO | Recovery Time Objective — maximum acceptable time to restore a service after disruption |
| RPO | Recovery Point Objective — maximum acceptable data loss measured in time |
| PII | Personally Identifiable Information — data that can identify an individual |
| VNet / VPC | Virtual Network / Virtual Private Cloud — logically isolated network segments in the cloud |
| WAF | Web Application Firewall — security control filtering malicious HTTP/S traffic |
| IaC | Infrastructure as Code — managing cloud infrastructure through machine-readable configuration files |

---

*End of Document*

---

**Document Control:** This document is subject to quarterly review. The next scheduled review date is **[Next Review Date]**. Queries regarding this document should be directed to the Cloud Architecture Lead at **[Contact Email]**.