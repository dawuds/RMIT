# Third-Party Assessment Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Vendor Management |
| **Applicable Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause(s)** | 14.1 |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

> **Handling Instructions:** This document contains confidential information pertaining to third-party vendor assessments. Distribution is restricted to authorized personnel on a need-to-know basis. Unauthorized disclosure is prohibited under [Organization Name]'s Information Security Policy and applicable Malaysian law.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Vendor Risk Tiering](#5-vendor-risk-tiering)
6. [Due Diligence Checklist](#6-due-diligence-checklist)
7. [SLA and KPI Definitions](#7-sla-and-kpi-definitions)
8. [Exit Strategy Requirements](#8-exit-strategy-requirements)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the primary objective of this assessment report, including the regulatory obligation it fulfils and the risk management outcome it supports.*

This Third-Party Assessment Report documents the findings of an independent security and operational assessment conducted on **[Vendor / Third-Party Name]** ("the Vendor"), a **[Critical / High / Medium / Low]** risk-tiered technology service provider to **[Organization Name]** ("the Institution").

This report is prepared in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, Clause 14.1**, which mandates that financial institutions establish a robust third-party risk management framework covering the assessment, selection, monitoring, and exit of technology service providers. The Institution is required to conduct independent assessments of critical third-party providers on a **quarterly** basis or as triggered by material changes, significant incidents, or changes in the Vendor's risk profile.

This report serves as a formal record of the assessment outcome and supports the Institution's obligations to:

- Maintain an auditable record of third-party due diligence activities;
- Demonstrate regulatory compliance to BNM upon request;
- Inform ongoing vendor risk management decisions; and
- Protect the Institution's data, systems, and customers from third-party-introduced risks.

### 1.2 Scope

*Define the boundaries of this assessment — which services, systems, processes, and contractual obligations were in scope.*

This assessment covers the following services and systems provided by the Vendor to the Institution:

| In-Scope Service / System | Service Description | Criticality |
|---|---|---|
| [Service / System Name 1] | [Brief description of service] | [Critical / High / Medium] |
| [Service / System Name 2] | [Brief description of service] | [Critical / High / Medium] |
| [Service / System Name 3] | [Brief description of service] | [Critical / High / Medium] |

**Assessment Period:** [Start Date] to [End Date]

**Assessment Type:** ☐ Initial Onboarding   ☐ Periodic Review (Quarterly)   ☐ Triggered Review   ☐ Pre-Exit Assessment

**Out-of-Scope Items:**

- [Specify any services, systems, or processes explicitly excluded from this assessment and the rationale for exclusion]
- [e.g., Vendor's internal HR systems not connected to Institution's environment]
- [e.g., Subsidiaries of the Vendor not providing services to the Institution]

### 1.3 Regulatory Context

*Briefly summarise the regulatory obligations that make this assessment mandatory.*

Under **BNM RMiT Clause 14.1**, financial institutions must:

- Conduct appropriate due diligence prior to engaging third-party technology service providers;
- Ensure ongoing oversight of third parties throughout the engagement lifecycle;
- Establish clear contractual safeguards, including security, data protection, audit rights, and exit provisions; and
- Assess and manage risks arising from concentration, cross-border data flows, and sub-contracting arrangements.

Non-compliance with these obligations may attract supervisory action by BNM. This report forms part of the Institution's documented evidence of compliance.

---

## 2. Assessment Scope and Criteria

### 2.1 Assessment Objectives

*State the specific objectives of this assessment and the risk domains being evaluated.*

The objectives of this assessment are to:

1. Evaluate the Vendor's information security posture against the Institution's third-party risk management standards and applicable regulatory requirements;
2. Assess the adequacy of the Vendor's operational controls, business continuity capabilities, and data protection practices;
3. Identify, rate, and prioritise risks introduced by the Vendor to the Institution; and
4. Determine whether the Vendor continues to meet the Institution's minimum acceptable risk threshold for [Critical / High] tier service providers.

### 2.2 Assessment Domains

*List the risk and control domains evaluated during this assessment.*

| # | Assessment Domain | Applicable Standard / Reference | Included in This Assessment |
|---|---|---|---|
| 1 | Information Security Governance | BNM RMiT, ISO/IEC 27001 | ☐ Yes   ☐ No   ☐ Partial |
| 2 | Access Control and Identity Management | BNM RMiT 11.x, NIST SP 800-53 | ☐ Yes   ☐ No   ☐ Partial |
| 3 | Network Security and Perimeter Controls | BNM RMiT 10.x | ☐ Yes   ☐ No   ☐ Partial |
| 4 | Data Protection and Privacy | PDPA 2010, BNM RMiT 14.x | ☐ Yes   ☐ No   ☐ Partial |
| 5 | Business Continuity and Disaster Recovery | BNM RMiT 12.x, BCP Policy | ☐ Yes   ☐ No   ☐ Partial |
| 6 | Incident Management and Response | BNM RMiT 13.x | ☐ Yes   ☐ No   ☐ Partial |
| 7 | Physical and Environmental Security | ISO/IEC 27001 A.11 | ☐ Yes   ☐ No   ☐ Partial |
| 8 | Change and Patch Management | BNM RMiT 10.x | ☐ Yes   ☐ No   ☐ Partial |
| 9 | Sub-contractor and Supply Chain Risk | BNM RMiT 14.1 | ☐ Yes   ☐ No   ☐ Partial |
| 10 | Contractual and Legal Compliance | BNM RMiT 14.1, PDPA 2010 | ☐ Yes   ☐ No   ☐ Partial |
| 11 | Financial Stability and Viability | BNM RMiT 14.x | ☐ Yes   ☐ No   ☐ Partial |
| 12 | Concentration Risk | BNM RMiT 14.x | ☐ Yes   ☐ No   ☐ Partial |

### 2.3 Assessment Criteria

*Define the pass/fail or acceptable/unacceptable thresholds applied across each domain.*

The following criteria were applied to determine control adequacy:

- **Satisfactory:** Controls are implemented, documented, tested, and operating effectively. No material gaps identified.
- **Requires Improvement:** Controls are partially implemented or evidence is incomplete. Gaps do not constitute an immediate risk but require remediation within agreed timelines.
- **Unsatisfactory:** Controls are absent, ineffective, or have resulted in a material risk or incident. Immediate escalation and remediation required.
- **Not Applicable:** The domain is not applicable to the services provided by the Vendor.

All **Critical** and **High** risk tier vendors must achieve a minimum rating of **Satisfactory** or **Requires Improvement (with accepted remediation plan)** across all mandatory domains. A rating of **Unsatisfactory** in any mandatory domain triggers immediate escalation to the [Chief Information Security Officer / Chief Risk Officer].

---

## 3. Methodology

### 3.1 Assessment Approach

*Describe the overall approach and framework used to conduct this assessment.*

This assessment was conducted using a **[risk-based / controls-based / hybrid]** approach, combining documentary review, technical testing, and on-site or remote interviews. The assessment was led by **[Assessment Lead Name / Assessing Entity]**, with the following approach:

| Phase | Activity | Method | Duration |
|---|---|---|---|
| 1. Preparation | Define scope, issue questionnaire, request evidence | Documentary | [X days] |
| 2. Desktop Review | Review policies, certifications, and prior assessments | Documentary | [X days] |
| 3. Technical Assessment | Vulnerability scanning, penetration testing, architecture review | Technical | [X days] |
| 4. On-Site / Remote Review | Interviews, walkthroughs, control demonstrations | Interview / Observation | [X days] |
| 5. Findings Analysis | Consolidate findings, assign ratings, validate with Vendor | Analytical | [X days] |
| 6. Reporting | Draft, review, and finalise report | Documentary | [X days] |

### 3.2 Evidence Collection

*List the types of evidence collected and reviewed during this assessment.*

The following evidence categories were reviewed:

- **Policies and Procedures:** Information Security Policy, Data Protection Policy, BCP/DR Policy, Incident Response Policy, Change Management Procedure
- **Certifications and Audits:** ISO/IEC 27001 certificate, SOC 2 Type II report, ISMS audit reports, penetration testing reports
- **Technical Evidence:** Network architecture diagrams, access control configurations, patch management logs, vulnerability scan results
- **Contractual Documents:** Master Service Agreement (MSA), Data Processing Agreement (DPA), SLA schedules
- **Operational Evidence:** Incident logs, BCP test results, SLA performance reports, change management records
- **Personnel Interviews:** [List roles interviewed, e.g., CISO, IT Operations Manager, Data Protection Officer]

### 3.3 Assessment Tools and Standards

*Reference the tools and standards used to conduct the technical components of this assessment.*

| Tool / Standard | Purpose | Administered By |
|---|---|---|
| [e.g., Nessus / Qualys] | Vulnerability scanning | [Internal / External Assessor] |
| [e.g., Burp Suite] | Web application security testing | [Internal / External Assessor] |
| NIST Cybersecurity Framework | Control maturity benchmarking | [Internal / External Assessor] |
| CIS Controls v8 | Technical control baseline | [Internal / External Assessor] |
| BNM RMiT Self-Assessment Questionnaire | Regulatory control alignment | [Vendor] |
| [Organization Name] Third-Party Risk Questionnaire | Institutional risk baseline | [Vendor] |

### 3.4 Limitations and Constraints

*Document any limitations that affected the completeness or depth of the assessment.*

The following limitations were noted during this assessment and should be considered when interpreting findings:

- [e.g., Physical on-site inspection was not conducted due to access restrictions; compensating controls were reviewed remotely]
- [e.g., Penetration testing was limited to production environment; staging environment was not assessed]
- [e.g., Sub-contractor assessment was limited to review of the Vendor's sub-contractor management policy; direct sub-contractor interviews were not conducted]
- [e.g., Financial viability assessment was based on publicly available information only]

---

## 4. Findings and Ratings

### 4.1 Executive Summary

*Provide a high-level narrative summary of the overall assessment outcome for senior management consumption.*

[Provide a 2–4 paragraph executive summary of the overall findings, the Vendor's general security posture, key strengths, critical weaknesses, and the overall risk determination. This section should be written in plain language suitable for Board or senior management review.]

**Overall Assessment Verdict:**

| Overall Risk Rating | ☐ Low   ☐ Medium   ☐ High   ☐ Critical |
|---|---|
| **Recommended Action** | ☐ Continue Engagement (No Conditions)   ☐ Continue with Remediation Plan   ☐ Escalate to Risk Committee   ☐ Initiate Exit Proceedings |
| **Assessment Date** | [Assessment Date] |
| **Valid Until** | [Next Quarterly Review Date] |

### 4.2 Domain-Level Ratings

*Summarise the assessment rating for each domain evaluated.*

| # | Assessment Domain | Rating | Critical Findings | High Findings | Medium Findings | Low Findings |
|---|---|---|---|---|---|---|
| 1 | Information Security Governance | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 2 | Access Control and Identity Management | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 3 | Network Security | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 4 | Data Protection and Privacy | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 5 | Business Continuity and DR | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 6 | Incident Management | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 7 | Physical and Environmental Security | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 8 | Change and Patch Management | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 9 | Sub-contractor / Supply Chain | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 10 | Contractual and Legal Compliance | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 11 | Financial Viability | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |
| 12 | Concentration Risk | [Satisfactory / Requires Improvement / Unsatisfactory] | [#] | [#] | [#] | [#] |

### 4.3 Detailed Findings Register

*Document each individual finding identified during the assessment. Repeat the finding block below for each finding.*

---

**Finding ID:** [F-001]

| Field | Detail |
|---|---|
| **Domain** | [Assessment Domain] |
| **Severity** | ☐ Critical   ☐ High   ☐ Medium   ☐ Low   ☐ Informational |
| **Control Reference** | [e.g., BNM RMiT 14.1 / ISO 27001 A.9.2] |
| **Finding Title** | [Short descriptive title of the finding] |
| **Observation** | [Detailed description of what was observed, including specific evidence reviewed] |
| **Risk Statement** | [Description of the risk to the Institution if this finding is not remediated] |
| **Recommendation** | [Specific, actionable remediation recommendation] |
| **Vendor Response** | [Vendor's formal response and proposed remediation action] |
| **Agreed Remediation Date** | [Date by which remediation must be completed] |
| **Status** | ☐ Open   ☐ In Progress   ☐ Resolved   ☐ Accepted Risk   ☐ Risk Transfer |
| **Owner (Vendor)** | [Vendor contact responsible for remediation] |
| **Owner (Institution)** | [Institution contact responsible for tracking] |

---

**Finding ID:** [F-002]

| Field | Detail |
|---|---|
| **Domain** | [Assessment Domain] |
| **Severity** | ☐ Critical   ☐ High   ☐ Medium   ☐ Low   ☐ Informational |
| **Control Reference** | [e.g., BNM RMiT 14.1 / ISO 27001 A.12.6] |
| **Finding Title** | [Short descriptive title of the finding] |
| **Observation** | [Detailed description of what was observed] |
| **Risk Statement** | [Description of the risk to the Institution] |
| **Recommendation** | [Specific, actionable remediation recommendation] |
| **Vendor Response** | [Vendor's formal response] |
| **Agreed Remediation Date** | [Date] |
| **Status** | ☐ Open   ☐ In Progress   ☐ Resolved   ☐ Accepted Risk   ☐ Risk Transfer |
| **Owner (Vendor)** | [Vendor contact] |
| **Owner (Institution)** | [Institution contact] |

---

*[Repeat finding block for all findings identified. Number findings sequentially: F-001, F-002, F-003, etc.]*

### 4.4 Remediation Tracker Summary

*Provide a consolidated view of all open remediation items for tracking purposes.*

| Finding ID | Severity | Domain | Remediation Deadline | Days Remaining | Status | Escalation Required |
|---|---|---|---|---|---|---|
| F-001 | [Severity] | [Domain] | [Date] | [#] | [Status] | ☐ Yes   ☐ No |
| F-002 | [Severity] | [Domain] | [Date] | [#] | [Status] | ☐ Yes   ☐ No |
| F-003 | [Severity] | [Domain] | [Date] | [#] | [Status] | ☐ Yes   ☐ No |

---

## 5. Vendor Risk Tiering

### 5.1 Risk Tiering Framework

*Describe the Institution's vendor risk tiering model and how it determines the intensity of ongoing oversight and assessment requirements.*

[Organization Name] applies a **four-tier vendor risk classification model** to all technology service providers, aligned with BNM RMiT requirements. Risk tier determines the frequency of formal assessments, the depth of due diligence, and the contractual protections required.

| Risk Tier | Definition | Assessment Frequency | Due Diligence Level |
|---|---|---|---|
| **Tier 1 – Critical** | Provides technology services that, if disrupted or compromised, would materially impact the Institution's critical operations, data integrity, or regulatory compliance | Quarterly + event-triggered | Full — technical, legal, financial, operational |
| **Tier 2 – High** | Provides important services where disruption or compromise would cause significant but containable operational or reputational impact | Semi-annually + event-triggered | Comprehensive — technical, legal, operational |
| **Tier 3 – Medium** | Provides standard services where disruption would cause limited operational impact and no customer data exposure | Annually | Standard — questionnaire + documentary review |
| **Tier 4 – Low** | Provides commodity services with no access to Institution's systems or data | Bi-annually or at renewal | Basic — questionnaire only |

### 5.2 Tiering Criteria

*Define the criteria used to assign a vendor to a risk tier.*

Vendors are classified based on the **highest applicable criterion** across the following dimensions:

| Criterion | Tier 1 – Critical | Tier 2 – High | Tier 3 – Medium | Tier 4 – Low |
|---|---|---|---|---|
| **Data Access** | Access to personal data of >10,000 customers, or any sensitive financial data | Access to personal data of <10,000 customers | Access to anonymised or non-customer data only | No access to Institution data |
| **System Integration** | Direct integration with core banking, payments, or real-time systems | Integration with non-core but significant systems | Limited or no system integration | No system access |
| **Operational Dependency** | Outage would halt critical operations within 4 hours | Outage would cause degraded service within 24 hours | Outage can be absorbed for >72 hours | Service is easily replaceable |
| **Regulatory Obligation** | Explicitly referenced in BNM requirements or covered by outsourcing provisions | Indirectly relevant to regulatory obligations | Minimal regulatory relevance | No regulatory relevance |
| **Concentration Risk** | No viable alternative; switching cost is high | Limited alternatives; switching requires planning | Alternatives available; moderate switching cost | Commodity service; easily replaceable |
| **Geographic / Jurisdictional Risk** | Cross-border data processing or hosting outside Malaysia | Regional processing with contractual repatriation | Domestic processing with contractual controls | Not applicable |

### 5.3 Vendor Risk Tier Assignment — This Assessment

| Dimension | Assessment | Tier Implication |
|---|---|---|
| Data Access | [Describe the Vendor's level of data access] | [Tier] |
| System Integration | [Describe integration depth] | [Tier] |
| Operational Dependency | [Describe criticality of service] | [Tier] |
| Regulatory Obligation | [Describe regulatory relevance] | [Tier] |
| Concentration Risk | [Describe concentration level] | [Tier] |
| Geographic / Jurisdictional Risk | [Describe data residency] | [Tier] |

**Assigned Risk Tier:** **[Tier 1 – Critical / Tier 2 – High / Tier 3 – Medium / Tier 4 – Low]**

**Previous Risk Tier (if re-assessment):** **[Previous Tier]**

**Tier Change Rationale (if applicable):** *[If the tier has changed from the previous assessment, document the reason for the change.]*

---

## 6. Due Diligence Checklist

### 6.1 Pre-Engagement Due Diligence

*This checklist must be completed prior to onboarding a new vendor or renewing an existing contract. Mark each item as Complete, Incomplete, Not Applicable, or Accepted Risk.*

| # | Due Diligence Item | Status | Evidence Reference | Completed By | Date |
|---|---|---|---|---|---|
| **6.1.1** | **Legal and Corporate Standing** | | | | |
| 1 | Company registration documents obtained and verified (Companies Commission of Malaysia / SSM) | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 2 | Beneficial ownership structure reviewed and documented | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 3 | Sanctions screening completed (OFAC, UN, BNM Watch List) | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 4 | Litigation and regulatory enforcement history reviewed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| **6.1.2** | **Financial Viability** | | | | |
| 5 | Audited financial statements (last 2 years) reviewed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 6 | Credit rating or financial health assessment completed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 7 | Insurance coverage (cyber, professional indemnity, general liability) confirmed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| **6.1.3** | **Information Security** | | | | |
| 8 | Information Security Policy reviewed and found acceptable | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 9 | ISO/IEC 27001 certification or equivalent confirmed (if required by tier) | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 10 | Most recent penetration testing report reviewed (within 12 months) | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 11 | Vulnerability management programme reviewed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 12 | Incident response plan reviewed and notification SLA confirmed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| **6.1.4** | **Data Protection** | | | | |
| 13 | Personal Data Protection Act 2010 (PDPA) compliance confirmed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 14 | Data Processing Agreement (DPA) or equivalent executed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 15 | Cross-border data transfer controls identified and assessed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 16 | Data retention, return, and deletion procedures confirmed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| **6.1.5** | **Business Continuity** | | | | |
| 17 | Business Continuity Plan (BCP) reviewed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 18 | Disaster Recovery Plan (DRP) and RTO/RPO reviewed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 19 | BCP/DR test results (within 12 months) reviewed | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| **6.1.6** | **Sub-contractor Management** | | | | |
| 20 | Sub-contractors used in service delivery identified | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 21 | Sub-contractor security standards confirmed equivalent to Vendor standards | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 22 | Institution's right to audit sub-contractors confirmed in contract | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| **6.1.7** | **Contractual Protections** | | | | |
| 23 | Audit rights clause included in contract | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 24 | Incident notification obligations (≤ 4 hours for critical) included | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 25 | Termination for cause and exit assistance provisions included | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |
| 26 | BNM regulatory access clause included | ☐ Complete   ☐ Incomplete   ☐ N/A | [Doc Ref] | [Name] | [Date] |

### 6.2 Ongoing Monitoring Checklist

*This checklist is completed at each quarterly review cycle.*

| # | Monitoring Item | Frequency | Status | Last Completed | Next Due |
|---|---|---|---|---|---|
| 1 | SLA performance report review | Quarterly | [Status] | [Date] | [Date] |
| 2 | Security incident log review | Quarterly | [Status] | [Date] | [Date] |
| 3 | Patch and vulnerability management status review | Quarterly | [Status] | [Date] | [Date] |
| 4 | Access control and privileged user review | Quarterly | [Status] | [Date] | [Date] |
| 5 | BCP/DR status and test results review | Annually | [Status] | [Date] | [Date] |
| 6 | Financial health monitoring | Annually | [Status] | [Date] | [Date] |
| 7 | Sub-contractor change notification review | Quarterly | [Status] | [Date] | [Date] |
| 8 | Regulatory and legal compliance update review | Quarterly | [Status] | [Date] | [Date] |
| 9 | Material change notification review | Ad hoc / Quarterly | [Status] | [Date] | [Date] |
| 10 | Key personnel change notification review | Ad hoc / Quarterly | [Status] | [Date] | [Date] |

---

## 7. SLA and KPI Definitions

### 7.1 Service Level Agreement Summary

*Document the key SLAs that govern this Vendor's service delivery. These should be extracted directly from the executed service agreement.*

**Contract Reference:** [MSA / Service Agreement Reference Number]

**Contract Execution Date:** [Date]

**Contract Expiry Date:** [Date]

### 7.2 Service Availability SLAs

*Define the uptime and availability commitments for each in-scope service.*

| Service | Agreed Availability (%) | Measurement Period | Measurement Window | Exclusions |
|---|---|---|---|---|
| [Service Name 1] | [e.g., 99.9%] | Monthly | [e.g., 24x7] | [e.g., Scheduled maintenance windows] |
| [Service Name 2] | [e.g., 99.5%] | Monthly | [e.g., Business hours 8am–6pm] | [e.g., Force majeure events] |
| [Service Name 3] | [e.g., 99.95%] | Monthly | [e.g., 24x7] | [e.g., Events outside Vendor's control] |

### 7.3 Incident Response SLAs

*Define the Vendor's obligations for incident reporting and resolution.*

| Incident Severity | Definition | Response Time | Notification to Institution | Escalation to BNM (via Institution) | Resolution Target |
|---|---|---|---|---|---|
| **P1 – Critical** | Full service outage or confirmed data breach | 15 minutes | Within 1 hour | Within 4 hours (per BNM RMiT) | 4 hours |
| **P2 – High** | Significant degradation or potential data exposure | 30 minutes | Within 2 hours | As determined by Institution | 8 hours |
| **P3 – Medium** | Partial degradation; workaround available | 2 hours | Within 4 hours | Not required unless escalated | 24 hours |
| **P4 – Low** | Minor issue; minimal business impact | 4 hours | Next business day | Not required | 5 business days |

### 7.4 Performance KPIs

*Define the key performance indicators used to measure the Vendor's ongoing service quality and compliance.*

| KPI ID | KPI Name | Definition | Target | Measurement Method | Reporting Frequency | Penalty / Remedy |
|---|---|---|---|---|---|---|
| KPI-01 | Service Availability | Percentage of time the service is available within agreed window | ≥ [X]% | Automated monitoring | Monthly | [Credit / Escalation per MSA schedule] |
| KPI-02 | Incident Response Time (P1) | Time from incident detection to first response | ≤ 15 minutes | Incident management system | Per incident | [Credit / Escalation per MSA schedule] |
| KPI-03 | Incident Resolution Time (P1) | Time from incident detection to full resolution | ≤ 4 hours | Incident management system | Per incident | [Credit / Escalation per MSA schedule] |
| KPI-04 | Patch Currency | Percentage of critical/high CVEs patched within agreed SLA | ≥ [X]% | Vulnerability scan reports | Quarterly | [Escalation / Remediation plan required] |
| KPI-05 | Security Incident Reporting | Compliance with incident notification timelines | 100% | Incident log audit | Quarterly | [Escalation per contract] |
| KPI-06 | BCP/DR Test Completion | Annual BCP and DR test completed and results shared | 100% | BCP test report | Annually | [Escalation per contract] |
| KPI-07 | Audit Cooperation | Timely and complete response to audit requests and questionnaires | ≥ [X]% on time | Audit tracker | Quarterly | [Escalation per contract] |
| KPI-08 | Data Breach Notification | Notification of data incidents within contractual and regulatory timelines | 100% | Incident log audit | Per incident | [Immediate escalation + legal review] |

### 7.5 SLA Performance — Current Quarter

*Summarise the Vendor's SLA performance during the quarter under review.*

| SLA / KPI | Target | Actual Performance | Status | Trend | Comments |
|---|---|---|---|---|---|
| Service Availability — [Service 1] | [X]% | [X]% | ☐ Met   ☐ Breached | ☐ Improving   ☐ Stable   ☐ Declining | [Notes] |
| Incident Response (P1) | ≤ 15 min | [X] min avg | ☐ Met   ☐ Breached | ☐ Improving   ☐ Stable   ☐ Declining | [Notes] |
| Patch Currency | ≥ [X]% | [X]% | ☐ Met   ☐ Breached | ☐ Improving   ☐ Stable   ☐ Declining | [Notes] |
| BCP/DR Test (if due) | 100% | [X]% | ☐ Met   ☐ N/A this quarter | N/A | [Notes] |
| Audit Cooperation | ≥ [X]% | [X]% | ☐ Met   ☐ Breached | ☐ Improving   ☐ Stable   ☐ Declining | [Notes] |

---

## 8. Exit Strategy Requirements

### 8.1 Exit Strategy Overview

*Describe the Institution's exit strategy for this Vendor, addressing both planned transitions and emergency scenarios, as required by BNM RMiT Clause 14.1.*

[Organization Name] maintains a documented exit strategy for **[Vendor Name]** to ensure that services can be transitioned with minimal disruption to the Institution's operations, customers, and regulatory obligations. This exit strategy addresses both **planned exits** (contract expiry, strategic vendor change) and **unplanned exits** (vendor failure, material breach, regulatory direction, or force majeure).

### 8.2 Exit Trigger Conditions

*Define the conditions under which the exit strategy would be activated.*

| Trigger Category | Trigger Condition | Decision Authority |
|---|---|---|
| **Planned** | Contract expiry without renewal | Head of Vendor Management |
| **Planned** | Strategic decision to in-source or change provider | EXCO / CIO |
| **Triggered** | Material SLA breach (e.g., ≥ [X] consecutive breaches) | CIO / CRO |
| **Triggered** | Unsatisfactory assessment rating with no accepted remediation plan | Head of Vendor Management + CRO |
| **Triggered** | Confirmed data breach or security incident caused by Vendor | CISO + Legal |
| **Emergency** | Vendor insolvency, cessation of business, or force majeure event | EXCO / Crisis Management Team |
| **Regulatory** | Direction from BNM to terminate third-party engagement | Board / CEO |

### 8.3 Exit Readiness Assessment

*Assess the Institution's current readiness to execute an exit from this Vendor.*

| Exit Readiness Criterion | Status | Notes | Owner |
|---|---|---|---|
| Alternative provider identified and pre-qualified | ☐ Yes   ☐ No   ☐ In Progress | [Notes] | [Owner] |
| Data recovery and portability procedures documented | ☐ Yes   ☐ No   ☐ In Progress | [Notes] | [Owner] |
| Data return / deletion obligations confirmed with Vendor | ☐ Yes   ☐ No   ☐ In Progress | [Notes] | [Owner] |
| Knowledge transfer plan documented | ☐ Yes   ☐ No   ☐ In Progress | [Notes] | [Owner] |
| Contractual exit assistance provisions confirmed | ☐ Yes   ☐ No   ☐ In Progress | [Notes] | [Owner] |
| Estimated transition timeline documented | ☐ Yes   ☐ No   ☐ In Progress | [Notes] | [Owner] |
| Regulatory notification requirements identified | ☐ Yes   ☐ No   ☐ In Progress | [Notes] | [Owner] |
| Business continuity during transition period addressed | ☐ Yes   ☐ No   ☐ In Progress | [Notes] | [Owner] |
| Staff retraining requirements identified | ☐ Yes   ☐ No   ☐ In Progress | [Notes] | [Owner] |

### 8.4 Exit Transition Plan

*Provide a high-level transition plan for an orderly exit from this Vendor.*

**Estimated Transition Duration:** [X months]

| Phase | Activity | Duration | Responsible Party | Dependencies |
|---|---|---|---|---|
| 1. Decision and Notification | Formal decision to exit; notify Vendor per contractual notice period | [X weeks] | Head of Vendor Management | Board / EXCO approval |
| 2. Transition Planning | Establish transition project team; finalise transition plan | [X weeks] | CIO / Project Manager | Notice issued |
| 3. Alternative Provider Onboarding | Procure and onboard replacement provider; parallel run if applicable | [X weeks / months] | IT Operations / Vendor Management | Replacement provider selected |
| 4. Data Migration | Migrate Institution data from Vendor to replacement environment | [X weeks] | IT Operations / Data Management | Replacement environment ready |
| 5. Knowledge Transfer | Transfer documentation, configurations, and operational knowledge | [X weeks] | IT Operations / Vendor | Data migration complete |
| 6. Testing and Validation | Validate replacement service; conduct UAT and performance testing | [X weeks] | IT Operations / Business Units | Knowledge transfer complete |
| 7. Cutover | Decommission Vendor access; activate replacement service | [X days] | IT Operations | Testing complete; BNM notified if required |
| 8. Data Return / Deletion | Confirm return or certified deletion of Institution data by Vendor | [X weeks] | Data Management / Legal | Cutover complete |
| 9. Contract Closure | Issue formal termination notice; settle outstanding obligations | [X weeks] | Legal / Finance | Data return confirmed |
| 10. Post-Exit Review | Lessons learned; update third-party risk register | [X weeks] | Head of Vendor Management | All prior phases complete |

### 8.5 Concentration Risk and Dependency Assessment

*Assess the degree to which the Institution is dependent on this Vendor and the associated concentration risk.*

| Concentration Risk Factor | Assessment | Risk Level |
|---|---|---|
| Number of critical services provided by this Vendor | [X services] | ☐ Low   ☐ Medium   ☐ High |
| Availability of qualified alternative providers | [e.g., 2 qualified alternatives identified] | ☐ Low   ☐ Medium   ☐ High |
| Estimated cost and complexity of switching | [e.g., High — significant data migration required] | ☐ Low   ☐ Medium   ☐ High |
| Estimated minimum transition timeline | [e.g., 6 months minimum] | ☐ Low   ☐ Medium   ☐ High |
| Cross-border or jurisdictional dependencies | [e.g., Data hosted in Singapore; repatriation required] | ☐ Low   ☐ Medium   ☐ High |
| **Overall Concentration Risk Rating** | | ☐ Low   ☐ Medium   ☐ High |

**Concentration Risk Mitigation Measures:**

- [Describe any contractual, technical, or operational measures in place to mitigate concentration risk, e.g., escrow arrangements, redundant providers, or contractual portability obligations]

---

## 9. Roles and Responsibilities

### 9.1 RACI Matrix

*The following RACI matrix defines the roles and responsibilities for all activities associated with this Third-Party Assessment Report. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of Vendor Management | CISO / Head of IT Security | CIO | CRO | Legal & Compliance | Business Unit Owner | Internal Audit | External Assessor |
|---|---|---|---|---|---|---|---|---|
| Define assessment scope and criteria | R | C | C | C | C | C | I | I |
| Issue vendor questionnaire | R | C | I | I | I | I | I | I |
| Conduct technical security assessment | I | R | C | I | I | I | I | R |
| Review documentary evidence | R | C | I | I | C | I | I | R |
| Conduct vendor interviews | R | C | C | I | I | C | I | R |
| Compile findings and ratings | I | C | I | C | I | I | I | R |
| Review and validate draft report | A | R | C | C | C | C | C | I |
| Assign / confirm vendor risk tier | A | C | C | R | C | I | I | I |
| Track and follow up remediation items | R | C | I | C | I | I | I | I |
| Approve final report | A | I | I | C | I | I | I | I |
| Escalate critical findings to Risk Committee | A | C | C | R | C | I | I | I |
| Notify BNM (if required) | I | C | I | C | A | R | I | I |
| Maintain assessment register | R | I | I | I | I | I | A | I |
| Initiate exit proceedings (if triggered) | R | C | C | A | C | C | I | I |

### 9.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Head of Vendor Management | [Name] | [Department] | [Email / Phone] |
| CISO | [Name] | [Department] | [Email / Phone] |
| CIO | [Name] | [Department] | [Email / Phone] |
| CRO | [Name] | [Department] | [Email / Phone] |
| Legal and Compliance Lead | [Name] | [Department] | [Email / Phone] |
| Business Unit Owner | [Name] | [Department] | [Email / Phone] |
| Vendor Primary Contact | [Name] | [Vendor Organization] | [Email / Phone] |
| Vendor Security Contact | [Name] | [Vendor Organization] | [Email / Phone] |
| External Assessor Lead | [Name] | [Assessing Firm] | [Email / Phone] |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version |
| [X.X] | [Date] | [Author Name] | [Description of changes] |
| [X.X] | [Date] | [Author Name] | [Description of changes] |

### 10.2 Review Cycle

This document is subject to **quarterly review** in line with BNM RMiT Clause 14.1 requirements for Critical and High tier vendor assessments. An out-of-cycle review must be initiated upon:

- A material change in the Vendor's services, ownership, or financial position;
- A significant security incident or data breach involving the Vendor;
- A change in the Vendor's regulatory or legal status;
- A direction from BNM or other competent authority; or
- A material change in the Institution's regulatory obligations or risk appetite.

### 10.3 Approval Sign-Off

*This report requires the following approvals before it is considered final and may be filed in the compliance register.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Vendor Management | [Name] | __________________________ | [Date] |
| CISO / Head of IT Security | [Name] | __________________________ | [Date] |
| Chief Risk Officer | [Name] | __________________________ | [Date] |
| Chief Information Officer | [Name] | __________________________ | [Date] |

> **Note:** Digital signatures are accepted in lieu of wet ink signatures where the Institution's Electronic Document Management System supports audit-trail-compliant e-signatures.

---

## 11. References

The following regulatory documents, standards, and internal policies are referenced in this report:

| Reference | Document Title | Issuing Body | Applicable Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | 14.1 (Third-Party Risk Management) |
| BNM PDPO | Policy Document on Outsourcing | Bank Negara Malaysia | Relevant outsourcing provisions |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Principles 1–7; Section 44 |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO / IEC | Annex A Controls |
| ISO/IEC 27036 | Information Security for Supplier Relationships | ISO / IEC | All parts |
| NIST SP 800-161 | Cybersecurity Supply Chain Risk Management | NIST | All applicable controls |
| [Internal Ref] | [Organization Name] Third-Party Risk Management Policy | [Organization Name] | All sections |
| [Internal Ref] | [Organization Name] Information Security Policy | [Organization Name] | All sections |
| [Internal Ref] | [Organization Name] Data Protection Policy | [Organization Name] | All sections |
| [Internal Ref] | [Organization Name] Business Continuity Policy | [Organization Name] | All sections |

---

## 12. Appendices

### Appendix A — Vendor Information Summary

*Complete this section with details of the Vendor at the time of assessment.*

| Field | Detail |
|---|---|
| **Vendor Legal Name** | [Full legal name of the Vendor entity] |
| **Trading Name (if different)** | [Trading name] |
| **Company Registration Number** | [e.g., SSM registration number] |
| **Registered Address** | [Registered business address] |
| **Primary Operations Address** | [Primary office / data centre address] |
| **Country of Incorporation** | [Country] |
| **Data Processing Location(s)** | [Country / Region where Institution data is processed and stored] |
| **Parent Company (if applicable)** | [Parent company name and jurisdiction] |
| **Key Sub-contractors** | [List key sub-contractors involved in service delivery] |
| **Certifications Held** | [e.g., ISO/IEC 27001:2022 (cert. no. XXXX), SOC 2 Type II, PCI-DSS] |
| **Relevant Regulatory Licences** | [e.g., MSC Malaysia status, relevant BNM licences] |
| **Account Manager** | [Name, email, phone] |
| **Technical / Security Contact** | [Name, email, phone] |
| **Escalation Contact** | [Name, email, phone] |

---

### Appendix B — Evidence Index

*List all evidence documents reviewed during this assessment.*

| Evidence ID | Document Title | Document Type | Version / Date | Source | Reviewed By |
|---|---|---|---|---|---|
| E-001 | [Document Title] | [Policy / Procedure / Report / Certificate] | [Version / Date] | [Vendor / Internal] | [Reviewer Name] |
| E-002 | [Document Title] | [Policy / Procedure / Report / Certificate] | [Version / Date] | [Vendor / Internal] | [Reviewer Name] |
| E-003 | [Document Title] | [Policy / Procedure / Report / Certificate] | [Version / Date] | [Vendor / Internal] | [Reviewer Name] |

---

### Appendix C — Third-Party Risk Assessment Questionnaire Responses

*Attach or reference the completed Third-Party Risk Assessment Questionnaire as submitted by the Vendor.*

**Document Reference:** [Questionnaire Reference / File Path]

**Date Submitted by Vendor:** [Date]

**Date Reviewed by Institution:** [Date]

**Overall Questionnaire Compliance Score:** [X]% (if scored)

*[Attach completed questionnaire or reference the secure document repository where it is stored.]*

---

### Appendix D — Historical Assessment Summary

*Provide a summary of previous assessment outcomes for this Vendor to support trend analysis.*

| Assessment Period | Assessment Type | Overall Rating | Critical Findings | High Findings | Remediation Status | Assessor |
|---|---|---|---|---|---|---|
| [Q1 20XX] | Quarterly Review | [Rating] | [#] | [#] | [All closed / X open] | [Assessor] |
| [Q4 20XX] | Quarterly Review | [Rating] | [#] | [#] | [All closed / X open] | [Assessor] |
| [Q3 20XX] | Quarterly Review | [Rating] | [#] | [#] | [All closed / X open] | [Assessor] |
| [Initial — 20XX] | Onboarding Assessment | [Rating] | [#] | [#] | [All closed / X open] | [Assessor] |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and principal financial regulator of Malaysia |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk management for financial institutions |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **Critical Third Party** | A third-party technology service provider whose disruption or compromise would materially impact the Institution's critical operations |
| **Due Diligence** | The process of evaluating a third party's capabilities, controls, and risks prior to and during engagement |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a service following an incident |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss, expressed as a time period |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **SLA** | Service Level Agreement — a contractual commitment to specific service performance standards |
| **KPI** | Key Performance Indicator — a measurable metric used to evaluate performance against defined targets |
| **Concentration Risk** | The risk arising from over-reliance on a single third-party provider such that no viable alternative exists |
| **Sub-contractor** | A party engaged by the Vendor to perform part of the services delivered to the Institution |
| **CVE** | Common Vulnerabilities and Exposures — a publicly disclosed list of cybersecurity vulnerabilities |

---

*End of Document*

---
*Document ID: [Document ID] | Version: 1.0 | Classification: Confidential | Owner: Head of Vendor Management | [Organization Name]*