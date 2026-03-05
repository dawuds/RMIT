# Configuration Compliance Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Compliance Officer |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause(s)** | 10.15 |
| **Report Period** | [Quarterly Period, e.g., Q1 2026: 1 January – 31 March 2026] |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information of [Organization Name]. It is intended solely for authorized personnel and regulated parties. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable law, including the Personal Data Protection Act 2010 (PDPA) and applicable BNM guidelines.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives and Compliance Summary](#2-objectives-and-compliance-summary)
3. [Scope of Assessment](#3-scope-of-assessment)
4. [Configuration Baseline Standards](#4-configuration-baseline-standards)
5. [Compliance Assessment Results](#5-compliance-assessment-results)
6. [Deviation Register and Remediation Actions](#6-deviation-register-and-remediation-actions)
7. [Actions and Milestones](#7-actions-and-milestones)
8. [Accountable Owners](#8-accountable-owners)
9. [Resource Requirements](#9-resource-requirements)
10. [Progress Tracking Mechanism](#10-progress-tracking-mechanism)
11. [Risk Assessment of Open Deviations](#11-risk-assessment-of-open-deviations)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section describes the intent of this document and the regulatory obligation it fulfils. Authors should clearly articulate what this report is designed to achieve within the organisation's technology risk management programme.*

This Configuration Compliance Report documents the results of the quarterly assessment of technology configuration baselines across [Organization Name]'s in-scope systems and infrastructure. It provides the Chief Compliance Officer, Senior Management, and the Board Risk Committee with an accurate and auditable view of configuration compliance posture, identified deviations, and the status of remediation activities.

This report is issued in fulfilment of Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.15**, which requires financial institutions to establish, maintain, and enforce configuration standards for technology assets, and to demonstrate active monitoring and remediation of configuration deviations.

### 1.2 Regulatory Basis

*Cite the specific regulatory obligations driving this artifact. Include any cross-referencing to internal policies that operationalise these obligations.*

| Regulatory Instrument | Clause / Section | Obligation Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 10.15 | Establish configuration baseline standards; monitor compliance; remediate deviations in a timely manner |
| BNM RMiT | Clause 10.1 – 10.5 | Technology risk governance and management oversight |
| BNM RMiT | Clause 11.x | Cyber resilience requirements supporting secure configuration |
| [Internal IT Security Policy] | Section [X] | Internal configuration management standard aligned to RMiT |
| [Internal Change Management Policy] | Section [X] | Governance of approved configuration changes |

### 1.3 Reporting Period

*Specify the exact assessment window this report covers. Quarterly reports should align with the organization's defined reporting calendar.*

| Field | Detail |
|---|---|
| **Report Quarter** | [Q1 / Q2 / Q3 / Q4] [Year] |
| **Assessment Start Date** | [DD Month YYYY] |
| **Assessment End Date** | [DD Month YYYY] |
| **Report Prepared Date** | [DD Month YYYY] |
| **Report Submitted To** | Chief Compliance Officer / Board Risk Committee |

---

## 2. Objectives and Compliance Summary

*This section provides the high-level objectives of the configuration compliance programme for the period, and an executive summary of overall compliance posture. Authors should ensure the summary can stand alone as a brief for senior leadership.*

### 2.1 Programme Objectives

The configuration compliance programme for [Organization Name] is designed to achieve the following objectives during the reporting period:

- **Establish and Maintain Baselines:** Ensure that approved configuration baselines exist for all in-scope technology asset categories, aligned with industry standards (CIS Benchmarks, DISA STIGs, vendor hardening guides) and BNM RMiT requirements.
- **Automated and Periodic Assessment:** Conduct systematic, tool-assisted assessments of configuration compliance across all in-scope assets at a frequency commensurate with risk classification.
- **Deviation Identification and Classification:** Identify, classify by severity, and formally register all configuration deviations detected during the assessment period.
- **Timely Remediation:** Ensure all identified deviations are assigned to accountable owners with defined target completion dates and are tracked to closure.
- **Audit Readiness:** Maintain documentation sufficient to demonstrate to BNM examiners and internal audit that configuration controls are operating effectively.
- **Continuous Improvement:** Identify trends, recurring deviation patterns, and systemic weaknesses to drive programme improvement.

### 2.2 Executive Compliance Summary

*Provide a concise, at-a-glance summary of the overall compliance posture for the reporting period. This summary should be suitable for presentation to the Board Risk Committee.*

| Metric | Target | Current Period | Prior Period | Trend |
|---|---|---|---|---|
| **Overall Configuration Compliance Rate** | ≥ 95% | [X]% | [X]% | [↑ / ↓ / →] |
| **Total Assets in Scope** | — | [Number] | [Number] | — |
| **Assets Fully Compliant** | — | [Number] | [Number] | [↑ / ↓ / →] |
| **Assets with Deviations** | — | [Number] | [Number] | [↑ / ↓ / →] |
| **Total Deviations Identified** | — | [Number] | [Number] | [↑ / ↓ / →] |
| **Critical / High Deviations** | 0 open > 30 days | [Number] | [Number] | [↑ / ↓ / →] |
| **Medium Deviations** | 0 open > 90 days | [Number] | [Number] | [↑ / ↓ / →] |
| **Low Deviations** | 0 open > 180 days | [Number] | [Number] | [↑ / ↓ / →] |
| **Deviations Remediated (This Period)** | — | [Number] | [Number] | [↑ / ↓ / →] |
| **Deviations Past Target Date (Overdue)** | 0 | [Number] | [Number] | [↑ / ↓ / →] |
| **Approved Exceptions / Risk Acceptances** | Minimised | [Number] | [Number] | — |

**Overall Compliance Rating for the Period:** [COMPLIANT / PARTIALLY COMPLIANT / NON-COMPLIANT]

*Authors should provide a brief narrative (3–5 sentences) summarising the key compliance story for the period, including any notable improvements, emerging risks, or escalation items for senior management attention.*

> **Narrative Summary:** [Insert 3–5 sentence summary. Example: "During Q[X] [Year], [Organization Name] achieved an overall configuration compliance rate of [X]%, representing a [improvement/decline] of [X] percentage points from the prior quarter. [Number] new deviations were identified, of which [number] were classified as Critical or High severity. All Critical deviations were remediated within the mandated 30-day window. [Number] medium-severity deviations remain open and are within their approved remediation timelines. No approved exceptions expired during the period."]

---

## 3. Scope of Assessment

*This section defines which systems, environments, and asset classes were included in the assessment. Clear scoping is essential for audit purposes and for establishing what is and is not covered by this report.*

### 3.1 In-Scope Asset Categories

*List all technology asset categories included in the configuration compliance assessment. Where asset categories are excluded, provide a documented rationale.*

| Asset Category | Baseline Standard Applied | Assessment Method | No. of Assets | Included in Scope |
|---|---|---|---|---|
| **Servers – Windows (On-Premises)** | CIS Benchmark for Windows Server [Version] | Automated (SCAP/[Tool]) | [Number] | Yes |
| **Servers – Linux (On-Premises)** | CIS Benchmark for Linux [Distro/Version] | Automated (SCAP/[Tool]) | [Number] | Yes |
| **Network Devices – Routers** | CIS Benchmark for [Vendor] / Vendor Hardening Guide | Manual + Script | [Number] | Yes |
| **Network Devices – Switches** | CIS Benchmark for [Vendor] / Vendor Hardening Guide | Manual + Script | [Number] | Yes |
| **Firewalls and Security Appliances** | [Vendor] Hardening Guide / Internal Baseline | Manual Review | [Number] | Yes |
| **Databases** | CIS Benchmark for [DB Engine/Version] | Automated ([Tool]) | [Number] | Yes |
| **Cloud Infrastructure (IaaS/PaaS)** | CIS Benchmark for [Cloud Provider] / CSP Security Baseline | Cloud Security Posture Tool | [Number] | Yes |
| **Endpoints – Corporate Workstations** | CIS Benchmark / MDM Baseline | MDM Compliance Report | [Number] | Yes |
| **Applications – Critical Systems** | [Internal Application Hardening Standard] | Manual / DAST | [Number] | Yes |
| **[Other Asset Category]** | [Baseline Standard] | [Assessment Method] | [Number] | [Yes/No] |

### 3.2 Exclusions and Rationale

*Document any asset categories or specific assets explicitly excluded from the assessment scope, with clear justification. Exclusions must be formally approved.*

| Excluded Asset / Category | Justification | Approved By | Approval Date | Planned Inclusion Date |
|---|---|---|---|---|
| [Asset / Category Name] | [e.g., Legacy system under decommission — scheduled for retirement DD/MM/YYYY] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY or N/A] |
| [Asset / Category Name] | [e.g., Third-party managed system — compliance monitored via vendor SLA and annual audit] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY or N/A] |

### 3.3 Assessment Tools and Methodology

*Briefly describe the tools, scripts, and manual processes used to conduct the assessment. This provides transparency and reproducibility for audit purposes.*

| Tool / Method | Purpose | Version / Configuration | Operated By |
|---|---|---|---|
| [e.g., Microsoft Defender for Endpoint] | Endpoint configuration compliance | [Version] | [Team/Vendor] |
| [e.g., Tenable.sc / Nessus] | Server and network device scanning | [Version] | [Team/Vendor] |
| [e.g., AWS Security Hub / Azure Security Center] | Cloud configuration posture | [Version] | [Team/Vendor] |
| [e.g., Custom PowerShell / Bash Scripts] | Supplementary spot-check for specific controls | [Version / Date] | [Team] |
| [e.g., Manual Review Checklist] | Firewall rule review, application configuration | [Checklist Version] | [Team] |

---

## 4. Configuration Baseline Standards

*This section documents the approved baseline standards in use. Configuration baselines must be formally approved, version-controlled, and reviewed at least annually or upon significant technology change.*

### 4.1 Approved Baseline Register

*List all formally approved configuration baselines. Each baseline should reference the source standard and the internal approval.*

| Baseline ID | Asset Category | Baseline Name / Source | Version | Internal Approval Date | Next Review Date | Owner |
|---|---|---|---|---|---|---|
| BL-001 | Windows Servers | CIS Microsoft Windows Server [Version] Benchmark | [Version] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Team/Role] |
| BL-002 | Linux Servers | CIS [Distro] Linux Benchmark | [Version] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Team/Role] |
| BL-003 | Network – Routers | CIS [Vendor] Benchmark / [Vendor] Hardening Guide | [Version] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Team/Role] |
| BL-004 | Network – Switches | CIS [Vendor] Benchmark / [Vendor] Hardening Guide | [Version] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Team/Role] |
| BL-005 | Firewalls | [Vendor] Security Hardening Guide + Internal Policy | [Version] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Team/Role] |
| BL-006 | Databases | CIS [DB Engine] Benchmark | [Version] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Team/Role] |
| BL-007 | Cloud (IaaS/PaaS) | CIS [Cloud Provider] Foundations Benchmark | [Version] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Team/Role] |
| BL-008 | Endpoints | [MDM/GPO Baseline Name] | [Version] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Team/Role] |
| BL-[NNN] | [Category] | [Baseline Name] | [Version] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Team/Role] |

### 4.2 Baseline Changes During the Period

*Document any changes made to approved baselines during the reporting period. All baseline changes must follow the change management process.*

| Change Reference | Baseline Affected | Nature of Change | Reason | Change Approved By | Effective Date |
|---|---|---|---|---|---|
| [CHG-XXXX] | [BL-ID] | [e.g., Added TLS 1.3 enforcement control] | [e.g., BNM RMiT advisory / vendor security bulletin] | [Name / Role] | [DD/MM/YYYY] |
| [CHG-XXXX] | [BL-ID] | [Description] | [Reason] | [Name / Role] | [DD/MM/YYYY] |

---

## 5. Compliance Assessment Results

*This section presents the detailed results of the configuration compliance assessment by asset category. Authors should populate this section from assessment tool outputs and summarise findings clearly.*

### 5.1 Compliance Results by Asset Category

*Provide a breakdown of compliance results for each assessed asset category. This data should be derived directly from assessment tool reports, which should be retained as supporting evidence.*

| Asset Category | Baseline Applied | Assets Assessed | Fully Compliant | Assets with Deviations | Compliance Rate | Change vs. Prior Period |
|---|---|---|---|---|---|---|
| Servers – Windows | BL-001 | [#] | [#] | [#] | [X]% | [+/-X%] |
| Servers – Linux | BL-002 | [#] | [#] | [#] | [X]% | [+/-X%] |
| Network – Routers | BL-003 | [#] | [#] | [#] | [X]% | [+/-X%] |
| Network – Switches | BL-004 | [#] | [#] | [#] | [X]% | [+/-X%] |
| Firewalls | BL-005 | [#] | [#] | [#] | [X]% | [+/-X%] |
| Databases | BL-006 | [#] | [#] | [#] | [X]% | [+/-X%] |
| Cloud Infrastructure | BL-007 | [#] | [#] | [#] | [X]% | [+/-X%] |
| Endpoints | BL-008 | [#] | [#] | [#] | [X]% | [+/-X%] |
| **TOTAL / OVERALL** | — | **[#]** | **[#]** | **[#]** | **[X]%** | **[+/-X%]** |

### 5.2 Deviation Severity Distribution

*Summarise the total number of deviations by severity rating. Severity classifications must follow the organisation's approved risk rating methodology.*

| Severity | Definition | New This Period | Carried Over | Remediated | Closed (Accepted) | **Open (End of Period)** |
|---|---|---|---|---|---|---|
| **Critical** | CVSS 9.0–10.0 / Immediate exploitation risk / Breach of regulatory mandatory control | [#] | [#] | [#] | [#] | **[#]** |
| **High** | CVSS 7.0–8.9 / High exploitation risk / Material non-compliance | [#] | [#] | [#] | [#] | **[#]** |
| **Medium** | CVSS 4.0–6.9 / Moderate risk / Partial non-compliance | [#] | [#] | [#] | [#] | **[#]** |
| **Low** | CVSS 0.1–3.9 / Low exploitation risk / Minor non-compliance | [#] | [#] | [#] | [#] | **[#]** |
| **Informational** | Best practice recommendation / No direct compliance impact | [#] | [#] | [#] | [#] | **[#]** |
| **Total** | — | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

### 5.3 Trend Analysis

*Compare current period results against prior periods to identify trends. Three or more data points are required for meaningful trend analysis.*

| Metric | Q[N-3] | Q[N-2] | Q[N-1] | **Q[N] (Current)** | Trend |
|---|---|---|---|---|---|
| Overall Compliance Rate | [X]% | [X]% | [X]% | **[X]%** | [↑ Improving / ↓ Declining / → Stable] |
| Total Open Deviations | [#] | [#] | [#] | **[#]** | [↑ / ↓ / →] |
| Critical/High Open | [#] | [#] | [#] | **[#]** | [↑ / ↓ / →] |
| Mean Time to Remediate (Days) | [#] | [#] | [#] | **[#]** | [↑ / ↓ / →] |
| Overdue Deviations | [#] | [#] | [#] | **[#]** | [↑ / ↓ / →] |

*Authors should provide a brief narrative interpreting the trend data and highlighting any areas of concern or improvement that warrant management attention.*

> **Trend Narrative:** [Insert narrative analysis of trends. Example: "The overall compliance rate has improved by [X] percentage points over the past [N] quarters, reflecting the impact of the automated scanning programme implemented in Q[N-2]. However, the number of medium-severity open deviations has increased, primarily attributed to [asset category / root cause]. Remediation of these items is tracked in Section 7."]

---

## 6. Deviation Register and Remediation Actions

*This section is the core operational register of all identified configuration deviations. It must be kept current and is the primary artefact reviewed during BNM examinations and internal audits. Each deviation must have a unique identifier, severity rating, accountable owner, and target completion date.*

### 6.1 Active Deviation Register

*List all open deviations as at the end of the reporting period. This register should be maintained in the organisation's GRC system and an extract presented here.*

| Dev. ID | Asset Category | Asset ID / Hostname | Baseline Control Ref. | Deviation Description | Severity | Date Identified | Days Open | Accountable Owner | Target Completion Date | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| DEV-[YYYY]-[NNN] | [Category] | [Asset ID] | [BL-ID / Control #] | [Description of the misconfiguration, e.g., "TLS 1.0 enabled on web-facing service"] | Critical | [DD/MM/YYYY] | [#] | [Name / Team] | [DD/MM/YYYY] | In Progress | [Any relevant notes] |
| DEV-[YYYY]-[NNN] | [Category] | [Asset ID] | [BL-ID / Control #] | [Description] | High | [DD/MM/YYYY] | [#] | [Name / Team] | [DD/MM/YYYY] | Not Started | [Notes] |
| DEV-[YYYY]-[NNN] | [Category] | [Asset ID] | [BL-ID / Control #] | [Description] | Medium | [DD/MM/YYYY] | [#] | [Name / Team] | [DD/MM/YYYY] | In Progress | [Notes] |
| DEV-[YYYY]-[NNN] | [Category] | [Asset ID] | [BL-ID / Control #] | [Description] | Low | [DD/MM/YYYY] | [#] | [Name / Team] | [DD/MM/YYYY] | Scheduled | [Notes] |
| *[Continue for all open deviations]* | | | | | | | | | | | |

**Status Legend:** `Not Started` | `In Progress` | `Pending Verification` | `Remediated – Awaiting Closure` | `Risk Accepted` | `Exception Granted`

### 6.2 Deviations Remediated During the Period

*Document all deviations that were fully remediated and verified closed during the reporting period. Evidence of remediation must be retained.*

| Dev. ID | Asset Category | Deviation Description | Severity | Date Identified | Date Remediated | Days to Remediate | SLA Met? | Remediated By | Verified By | Evidence Reference |
|---|---|---|---|---|---|---|---|---|---|---|
| DEV-[YYYY]-[NNN] | [Category] | [Description] | [Severity] | [DD/MM/YYYY] | [DD/MM/YYYY] | [#] | [Yes / No] | [Name / Team] | [Name / Team] | [Evidence ID / Ticket Ref] |
| DEV-[YYYY]-[NNN] | [Category] | [Description] | [Severity] | [DD/MM/YYYY] | [DD/MM/YYYY] | [#] | [Yes / No] | [Name / Team] | [Name / Team] | [Evidence ID / Ticket Ref] |
| *[Continue for all closed deviations]* | | | | | | | | | | |

### 6.3 Approved Exceptions and Risk Acceptances

*Document all deviations for which a formal risk acceptance or exception has been granted. Exceptions must be time-limited, approved by an appropriate authority, and reviewed at each reporting cycle.*

| Exception ID | Dev. ID | Asset / System | Deviation Description | Justification | Risk Rating | Compensating Control(s) | Accepted By | Acceptance Date | Expiry Date | Review Date |
|---|---|---|---|---|---|---|---|---|---|---|
| EXC-[YYYY]-[NNN] | DEV-[YYYY]-[NNN] | [Asset ID] | [Description] | [Business/technical justification] | [High/Med/Low] | [Description of compensating controls] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] |
| *[Continue for all exceptions]* | | | | | | | | | | |

---

## 7. Actions and Milestones

*This section translates deviation findings into a structured remediation action plan with clear milestones. Each action must be specific, measurable, and time-bound. Authors should ensure all Critical and High deviations have actions documented here.*

### 7.1 Remediation Action Plan

*Document all remediation actions required to address open deviations. Group actions by priority where appropriate. Each action must reference the relevant deviation ID(s).*

| Action ID | Related Dev. ID(s) | Action Description | Priority | Accountable Owner | Supporting Team(s) | Start Date | Target Completion Date | Milestone(s) | Status | % Complete |
|---|---|---|---|---|---|---|---|---|---|---|
| ACT-[YYYY]-[NNN] | DEV-[YYYY]-[NNN] | [e.g., Disable TLS 1.0/1.1 across all web servers via GPO enforcement and web server configuration update] | Critical | [Name / Role] | [Infrastructure Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [e.g., M1: GPO drafted DD/MM; M2: UAT complete DD/MM; M3: Production deployment DD/MM] | [Not Started / In Progress / Complete] | [X]% |
| ACT-[YYYY]-[NNN] | DEV-[YYYY]-[NNN] | [Description] | High | [Name / Role] | [Team(s)] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Milestones] | [Status] | [X]% |
| ACT-[YYYY]-[NNN] | DEV-[YYYY]-[NNN] | [Description] | Medium | [Name / Role] | [Team(s)] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Milestones] | [Status] | [X]% |
| ACT-[YYYY]-[NNN] | DEV-[YYYY]-[NNN] | [Description] | Low | [Name / Role] | [Team(s)] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Milestones] | [Status] | [X]% |
| *[Continue for all remediation actions]* | | | | | | | | | | |

### 7.2 Systemic and Programme-Level Actions

*In addition to individual deviation remediation, document any programme-level actions arising from root cause analysis, trend identification, or audit recommendations.*

| Action ID | Category | Programme Action Description | Trigger | Accountable Owner | Target Completion Date | Status |
|---|---|---|---|---|---|---|
| PRG-[YYYY]-[NNN] | [e.g., Tooling] | [e.g., Expand automated scanning coverage to include [Asset Category] — currently assessed manually] | [Trend / Audit Finding / Risk Review] | [Name / Role] | [DD/MM/YYYY] | [Status] |
| PRG-[YYYY]-[NNN] | [e.g., Process] | [e.g., Develop and implement a Joiner-Mover-Leaver process control to prevent account configuration drift] | [Root Cause Analysis] | [Name / Role] | [DD/MM/YYYY] | [Status] |
| PRG-[YYYY]-[NNN] | [e.g., Training] | [Description] | [Trigger] | [Name / Role] | [DD/MM/YYYY] | [Status] |

---

## 8. Accountable Owners

*This section clearly identifies who is responsible for each element of the configuration compliance programme. Clarity of ownership is a key requirement for regulatory examination.*

### 8.1 Programme Ownership

*Define the senior roles accountable for the overall configuration compliance programme.*

| Role | Name | Accountability | Contact |
|---|---|---|---|
| **Chief Compliance Officer** | [Name] | Overall accountability for this report; escalation authority for unresolved deviations; sign-off on exceptions | [Email / Ext.] |
| **Chief Information Security Officer (CISO)** | [Name] | Accountable for configuration security standards, tool operation, and security remediation | [Email / Ext.] |
| **Chief Information Officer (CIO) / IT Director** | [Name] | Accountable for IT infrastructure configuration compliance and remediation resourcing | [Email / Ext.] |
| **Head of Technology Risk** | [Name] | Programme oversight, risk assessment of open deviations, escalation to Board Risk Committee | [Email / Ext.] |
| **Head of IT Operations / Infrastructure** | [Name] | Day-to-day operational accountability for configuration management and remediation execution | [Email / Ext.] |

### 8.2 Asset Category Owners

*For each in-scope asset category, identify the accountable operational owner and the approving senior authority.*

| Asset Category | Operational Owner (Team / Name) | Senior Accountable Owner (Role / Name) | Escalation Contact |
|---|---|---|---|
| Servers – Windows | [Team / Name] | [Role / Name] | [Name] |
| Servers – Linux | [Team / Name] | [Role / Name] | [Name] |
| Network – Routers & Switches | [Team / Name] | [Role / Name] | [Name] |
| Firewalls & Security Appliances | [Team / Name] | [Role / Name] | [Name] |
| Databases | [Team / Name] | [Role / Name] | [Name] |
| Cloud Infrastructure | [Team / Name] | [Role / Name] | [Name] |
| Endpoints | [Team / Name] | [Role / Name] | [Name] |
| Critical Applications | [Team / Name] | [Role / Name] | [Name] |

### 8.3 Remediation Action Owners

*Reference the Remediation Action Plan in Section 7.1. For escalation purposes, confirm the designated owner and escalation path for overdue items.*

| Severity | Remediation Owner Level | Escalation to | Escalation Trigger |
|---|---|---|---|
| Critical | Senior Manager, IT Operations | CISO / CIO | Not remediated within 7 days of identification |
| High | Manager, IT Operations / Security | Head of IT Operations | Not remediated within 30 days |
| Medium | Senior Engineer / Team Lead | Manager, IT Operations | Not remediated within 90 days |
| Low | Engineer | Team Lead | Not remediated within 180 days |
| Overdue (Any) | Head of IT Operations | CIO / CCO | Any deviation past target completion date |

---

## 9. Resource Requirements

*This section documents the human, financial, and tooling resources required to execute the remediation plan and sustain the configuration compliance programme. This information supports budget planning and capacity management.*

### 9.1 Human Resources

*Identify the staffing requirements for executing open remediation actions. Flag any capacity constraints that may affect target completion dates.*

| Team | Current Headcount (FTE) | Required Headcount for Remediation | Capacity Gap | Mitigation Plan |
|---|---|---|---|---|
| IT Infrastructure / Server Team | [#] | [#] | [#] | [e.g., Contractor engagement approved; overtime allocation; deprioritise BAU tasks] |
| Network Engineering Team | [#] | [#] | [#] | [Mitigation] |
| Security Operations (SecOps) | [#] | [#] | [#] | [Mitigation] |
| Database Administration | [#] | [#] | [#] | [Mitigation] |
| Cloud Engineering | [#] | [#] | [#] | [Mitigation] |
| [Other Team] | [#] | [#] | [#] | [Mitigation] |

### 9.2 Financial Resources

*Document the budget required to fund remediation activities, tooling, and programme operations. Reference approved budget allocations.*

| Resource Category | Description | Estimated Cost (MYR) | Budget Approved | Budget Reference | Notes |
|---|---|---|---|---|---|
| Tooling – Licensing | [e.g., Renewal of vulnerability scanner / CSPM tool licence] | [Amount] | [Yes / No / Pending] | [Budget Code] | [Notes] |
| Tooling – Upgrade | [e.g., SCAP scanning tool upgrade to support new OS versions] | [Amount] | [Yes / No / Pending] | [Budget Code] | [Notes] |
| Contractor / Professional Services | [e.g., Specialist engagement for legacy system hardening] | [Amount] | [Yes / No / Pending] | [Budget Code] | [Notes] |
| Training | [e.g., CIS Controls implementation training for infrastructure team] | [Amount] | [Yes / No / Pending] | [Budget Code] | [Notes] |
| [Other] | [Description] | [Amount] | [Yes / No / Pending] | [Budget Code] | [Notes] |
| **Total Estimated Cost** | | **[Total Amount]** | | | |

### 9.3 Tooling and Technology Requirements

*Identify any tooling gaps or upgrades required to maintain or improve configuration compliance assessment capability.*

| Requirement | Purpose | Current State | Required State | Priority | Status |
|---|---|---|---|---|---|
| [e.g., CSPM Tool for Cloud] | Automated cloud configuration assessment | [e.g., Manual review only] | [e.g., Automated daily scan] | High | [e.g., Procurement in progress] |
| [e.g., SCAP Scanner Update] | Support for updated OS baselines | [e.g., Version X, does not support OS Y] | [e.g., Version Z] | Medium | [Status] |
| [e.g., GRC Integration] | Automated deviation ticket creation in ITSM | [e.g., Manual entry] | [e.g., API integration with ServiceNow] | Medium | [Status] |
| [Requirement] | [Purpose] | [Current State] | [Required State] | [Priority] | [Status] |

---

## 10. Progress Tracking Mechanism

*This section describes how remediation progress is monitored, reported, and escalated between quarterly reporting cycles. Continuous tracking is required to ensure deviations are resolved within mandated timeframes.*

### 10.1 Tracking Framework

*Describe the mechanisms used to track remediation progress on a continuous basis.*

| Mechanism | Frequency | Responsible Party | Output / Artefact | Recipients |
|---|---|---|---|---|
| **Automated Compliance Dashboard** | Real-time / Daily | SecOps / IT Operations | Live dashboard (link: [Dashboard URL/Location]) | IT Security, IT Operations, Technology Risk |
| **Weekly Deviation Remediation Review** | Weekly | Head of IT Operations | Meeting minutes / Action tracker update | IT Operations, Security, relevant owners |
| **Monthly Configuration Compliance Status Report** | Monthly | Technology Risk / CISO Office | Brief status report | CIO, CISO, Head of Technology Risk |
| **Quarterly Configuration Compliance Report (This Document)** | Quarterly | Chief Compliance Officer / Technology Risk | This Report | Board Risk Committee, CCO, Regulators (on request) |
| **ITSM Ticket Tracking** | Continuous | All remediation owners | Ticket status in [ITSM System, e.g., ServiceNow / Jira] | Remediation owners, Team Leads |
| **Exception/Risk Acceptance Review** | Quarterly (at report cycle) | Technology Risk | Updated exception register | CCO, CISO, CIO |

### 10.2 Escalation Matrix

*Define the escalation path and triggers for deviations that are at risk of breaching their remediation SLA or that have already become overdue.*

| Scenario | Escalation Level | Escalated To | Action Required | Timeframe |
|---|---|---|---|---|
| Critical deviation identified | Level 1 – Immediate | CISO + Head of IT Operations | Acknowledge, confirm remediation plan, initiate emergency change if required | Within 24 hours of identification |
| Critical deviation not resolved within 7 days | Level 2 | CIO + CCO | Management review; approve emergency resource allocation or risk acceptance | Day 7 |
| High deviation approaching target date (< 7 days remaining) | Level 1 | Head of IT Operations + Remediation Owner | Confirm completion plan; request extension if justified | 7 days before target date |
| Any deviation overdue (past target date) | Level 2 | CIO / CISO + CCO | Formal escalation; revised plan with revised target; documented justification | Day 1 of overdue status |
| Overdue deviation unresolved > 14 days | Level 3 | Board Risk Committee / Technology Committee | Board-level awareness; formal risk acceptance or mandatory resolution order | As required |
| Exception expiry without renewal | Level 1 | CCO + CISO | Remediate or formally renew exception with updated risk assessment | At expiry date |

### 10.3 Key Performance Indicators (KPIs) and Thresholds

*Define the KPIs used to measure the health of the configuration compliance programme and the thresholds that trigger management review.*

| KPI | Target Threshold | Amber (Review Required) | Red (Escalation Required) | Current Period Value | Status |
|---|---|---|---|---|---|
| Overall Configuration Compliance Rate | ≥ 95% | 90%–94.9% | < 90% | [X]% | [Green / Amber / Red] |
| Critical Deviations Open > 30 Days | 0 | 1 | ≥ 2 | [#] | [Green / Amber / Red] |
| High Deviations Open > 60 Days | 0 | 1–2 | ≥ 3 | [#] | [Green / Amber / Red] |
| Overdue Deviations (Any Severity) | 0 | 1–5 | > 5 | [#] | [Green / Amber / Red] |
| Mean Time to Remediate – Critical | ≤ 30 days | 31–45 days | > 45 days | [#] days | [Green / Amber / Red] |
| Mean Time to Remediate – High | ≤ 60 days | 61–90 days | > 90 days | [#] days | [Green / Amber / Red] |
| Approved Exceptions (Active) | Minimised (management discretion) | [Threshold] | [Threshold] | [#] | [Green / Amber / Red] |
| Assets with No Baseline Coverage | 0 | 1–5 | > 5 | [#] | [Green / Amber / Red] |

---

## 11. Risk Assessment of Open Deviations

*This section provides a risk-informed view of open deviations, supporting management decisions on prioritisation, resource allocation, and risk acceptance. Authors should ensure this section is reviewed by the Technology Risk function.*

### 11.1 Top 5 Open Risks

*Identify and describe the five highest-risk open deviations. For each, provide an assessment of the potential impact, likelihood, and any compensating controls in place.*

**Risk 1: [Risk Title / Deviation Summary]**

| Field | Detail |
|---|---|
| **Deviation ID** | DEV-[YYYY]-[NNN] |
| **Asset(s) Affected** | [Asset ID / Description] |
| **Severity** | Critical / High |
| **Risk Description** | [Describe the risk scenario: what could happen if this deviation is exploited or remains unremediated. Reference BNM RMiT obligations where applicable.] |
| **Inherent Risk Rating** | [High / Very High] |
| **Compensating Control(s)** | [Describe any controls that currently reduce the risk while remediation is in progress] |
| **Residual Risk Rating** | [Medium / High] |
| **Remediation Target Date** | [DD/MM/YYYY] |
| **Accountable Owner** | [Name / Role] |

*[Repeat for Risks 2 through 5 using the same structure.]*

---

**Risk 2: [Risk Title / Deviation Summary]**

| Field | Detail |
|---|---|
| **Deviation ID** | DEV-[YYYY]-[NNN] |
| **Asset(s) Affected** | [Asset ID / Description] |
| **Severity** | [Severity] |
| **Risk Description** | [Description] |
| **Inherent Risk Rating** | [Rating] |
| **Compensating Control(s)** | [Controls] |
| **Residual Risk Rating** | [Rating] |
| **Remediation Target Date** | [DD/MM/YYYY] |
| **Accountable Owner** | [Name / Role] |

---

**Risk 3: [Risk Title / Deviation Summary]**

| Field | Detail |
|---|---|
| **Deviation ID** | DEV-[YYYY]-[NNN] |
| **Asset(s) Affected** | [Asset ID / Description] |
| **Severity** | [Severity] |
| **Risk Description** | [Description] |
| **Inherent Risk Rating** | [Rating] |
| **Compensating Control(s)** | [Controls] |
| **Residual Risk Rating** | [Rating] |
| **Remediation Target Date** | [DD/MM/YYYY] |
| **Accountable Owner** | [Name / Role] |

---

**Risk 4: [Risk Title / Deviation Summary]**

| Field | Detail |
|---|---|
| **Deviation ID** | DEV-[YYYY]-[NNN] |
| **Asset(s) Affected** | [Asset ID / Description] |
| **Severity** | [Severity] |
| **Risk Description** | [Description] |
| **Inherent Risk Rating** | [Rating] |
| **Compensating Control(s)** | [Controls] |
| **Residual Risk Rating** | [Rating] |
| **Remediation Target Date** | [DD/MM/YYYY] |
| **Accountable Owner** | [Name / Role] |

---

**Risk 5: [Risk Title / Deviation Summary]**

| Field | Detail |
|---|---|
| **Deviation ID** | DEV-[YYYY]-[NNN] |
| **Asset(s) Affected** | [Asset ID / Description] |
| **Severity** | [Severity] |
| **Risk Description** | [Description] |
| **Inherent Risk Rating** | [Rating] |
| **Compensating Control(s)** | [Controls] |
| **Residual Risk Rating** | [Rating] |
| **Remediation Target Date** | [DD/MM/YYYY] |
| **Accountable Owner** | [Name / Role] |

### 11.2 Items for Management Decision

*Flag any items requiring a management-level decision, such as risk acceptances, exception requests, requests for additional resources, or escalations.*

| Item # | Item Description | Decision Required From | Options Available | Recommendation | Deadline for Decision |
|---|---|---|---|---|---|
| 1 | [e.g., DEV-[YYYY]-[NNN]: Hardening of [legacy system] is technically constrained by vendor support limitations. Formal risk acceptance or system decommission required.] | [CIO / CCO / Board Risk Committee] | [Option A: Risk Accept with compensating controls; Option B: Accelerate decommission; Option C: Vendor engagement for patch] | [e.g., Option A with quarterly review] | [DD/MM/YYYY] |
| 2 | [Description] | [Decision Maker] | [Options] | [Recommendation] | [DD/MM/YYYY] |

---

## 12. Roles and Responsibilities

*This section defines the RACI (Responsible, Accountable, Consulted, Informed) model for the configuration compliance programme and this report. Clarity of roles is essential for effective governance and regulatory examination.*

**RACI Key:** **R** = Responsible (does the work) | **A** = Accountable (owns the outcome) | **C** = Consulted (input required) | **I** = Informed (kept updated)

| Activity | Chief Compliance Officer | CISO | CIO / IT Director | Head of Technology Risk | Head of IT Operations | IT Infrastructure Team | Network Engineering | Security Operations | Database Admin | Internal Audit | Board Risk Committee |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Define and approve configuration baselines | A | R | C | C | C | C | C | C | C | I | I |
| Conduct configuration compliance assessment | I | C | C | C | R | R | R | R | R | I | I |
| Analyse and report compliance results | A | C | C | R | C | I | I | I | I | I | I |
| Identify and register deviations | I | C | I | R | C | R | R | R | R | I | I |
| Assign remediation owners and target dates | C | C | A | C | R | I | I | I | I | I | I |
| Execute remediation actions | I | C | C | I | A | R | R | R | R | I | I |
| Verify and close remediated deviations | I | R | I | C | C | I | I | R | I | C | I |
| Approve exceptions and risk acceptances | A | C | C | R | I | I | I | I | I | C | I |
| Escalate overdue / critical deviations | A | C | C | R | C | I | I | I | I | I | I |
| Present report to Board Risk Committee | A | C | C | C | I | I | I | I | I | I | R |
| Review and approve this report | A | C | C | C | I | I | I | I | I | C | I |
| Maintain programme KPIs and dashboards | C | C | C | R | C | I | I | R | I | I | I |
| Conduct programme review and continuous improvement | A | C | C | R | C | I | I | I | I | C | I |
| Regulatory liaison (BNM enquiries re: this artefact) | A | C | C | C | I | I | I | I | I | I | I |

---

## 13. Review and Approval

### 13.1 Document Review Schedule

*This document is subject to mandatory quarterly review. Ad-hoc reviews must be conducted following any material configuration incident, significant regulatory change, or major technology change.*

| Review Trigger | Review Due Date | Completed By | Review Outcome |
|---|---|---|---|
| Quarterly scheduled review | [DD Month YYYY] | [Name / Role] | [Approved with/without amendments] |
| Material configuration breach | [As required] | [Name / Role] | [Outcome] |
| BNM regulatory update to RMiT | [Within 30 days of update] | [Name / Role] | [Outcome] |
| Major technology change (new platform / system) | [Prior to production deployment] | [Name / Role] | [Outcome] |

### 13.2 Version History

*Maintain a complete version history for audit trail purposes. All versions must be retained in the document management system.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name, Role] | [Name, Role] | Initial version — [Report Quarter] baseline report |
| 1.1 | [DD/MM/YYYY] | [Name, Role] | [Name, Role] | [e.g., Deviation register updated following mid-quarter reassessment; Section 7 remediation plans revised] |
| 2.0 | [DD/MM/YYYY] | [Name, Role] | [Name, Role] | [e.g., Q[N+1] report — new reporting period; updated KPI targets per Technology Risk review] |

### 13.3 Approval Sign-Off

*All quarterly Configuration Compliance Reports must be formally approved before submission to the Board Risk Committee. Electronic approval via the organisation's GRC/document management system is acceptable provided an audit trail is maintained.*

| Role | Name | Signature | Date Approved |
|---|---|---|---|
| Prepared By | [Name], [Title] | __________________ | [DD/MM/YYYY] |
| Reviewed By – Technology Risk | [Name], Head of Technology Risk | __________________ | [DD/MM/YYYY] |
| Reviewed By – CISO | [Name], Chief Information Security Officer | __________________ | [DD/MM/YYYY] |
| **Approved By – Chief Compliance Officer** | **[Name], Chief Compliance Officer** | **__________________** | **[DD/MM/YYYY]** |
| Noted By – Board Risk Committee | [Name], Chair, Board Risk Committee | __________________ | [DD/MM/YYYY] |

---

## 14. References

*This section lists the regulatory instruments, industry standards, and internal policies that underpin this document. Authors must ensure references are kept current.*

### 14.1 Regulatory References

| Reference | Title | Issuing Body | Version / Date | Relevant Section(s) |
|---|---|---|---|---|
| BNM/RH/PD 028-109 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | [Effective Date] | **Clause 10.15** (Configuration Management); Clause 10.1–10.5 (Technology Risk Management); Clause 11 (Cyber Resilience) |
| — | Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | 2010 (as amended) | Applicable provisions on data security |
| — | Financial Services Act 2013 (FSA) | Parliament of Malaysia | 2013 | Section 47, 57 (regulatory compliance obligations) |
| — | [Any BNM supplementary circular or policy advisory relevant to configuration management] | Bank Negara Malaysia | [Date] | [Section] |

### 14.2 Industry Standards

| Standard | Title | Issuing Body | Version |
|---|---|---|---|
| CIS Controls | CIS Critical Security Controls | Center for Internet Security | v8.1 |
| CIS Benchmarks | Configuration Benchmark Library (multiple platforms) | Center for Internet Security | [Version per platform] |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO / IEC | 2022 — Annex A Control 8.9 (Configuration Management) |
| NIST SP 800-128 | Guide for Security-Focused Configuration Management of Information Systems | NIST | Rev. 1 |
| NIST SP 800-53 | Security and Privacy Controls for Information Systems | NIST | Rev. 5 — CM Family |
| DISA STIGs | Security Technical Implementation Guides | DISA (US DoD) | [Version per platform] |

### 14.3 Internal Policy References

| Document ID | Document Title | Owner | Version | Location |
|---|---|---|---|---|
| [POL-IT-XXX] | Information Technology Security Policy | CISO | [Version] | [Document Management System Path] |
| [POL-CM-XXX] | Configuration Management Policy | Head of IT Operations | [Version] | [Document Management System Path] |
| [POL-CHG-XXX] | Change Management Policy and Procedures | Head of IT Operations | [Version] | [Document Management System Path] |
| [POL-RM-XXX] | Technology Risk Management Framework | Head of Technology Risk | [Version] | [Document Management System Path] |
| [POL-EXC-XXX] | IT Risk Exception and Acceptance Policy | CCO / Technology Risk | [Version] | [Document Management System Path] |
| [POL-VUL-XXX] | Vulnerability and Patch Management Policy | CISO | [Version] | [Document Management System Path] |

---

## 15. Appendices

*The following appendices provide supporting detail for the body of the report. Appendices must be retained as part of the formal report package. Where appendix content is voluminous, it may be held as separately numbered controlled documents referenced herein.*

---

### Appendix A: Configuration Baseline Assessment Evidence Index

*This appendix provides an index of all assessment tool reports and evidence artefacts supporting the findings in this report. Original reports must be stored in the designated evidence repository.*

| Evidence ID | Description | Assessment Tool / Source | Date Generated | Storage Location | Retained By |
|---|---|---|---|---|---|
| EVD-[YYYY]-[NNN]-001 | Windows Server compliance scan report – [Quarter] | [Tool Name] | [DD/MM/YYYY] | [Repository Path / SharePoint / GRC System] | [Team] |
| EVD-[YYYY]-[NNN]-002 | Linux server compliance scan report – [Quarter] | [Tool Name] | [DD/MM/YYYY] | [Repository Path] | [Team] |
| EVD-[YYYY]-[NNN]-003 | Network device configuration review output – [Quarter] | [Tool / Script Name] | [DD/MM/YYYY] | [Repository Path] | [Team] |
| EVD-[YYYY]-[NNN]-004 | Cloud security posture management report – [Quarter] | [Tool Name] | [DD/MM/YYYY] | [Repository Path] | [Team] |
| EVD-[YYYY]-[NNN]-005 | Database compliance scan report – [Quarter] | [Tool Name] | [DD/MM/YYYY] | [Repository Path] | [Team] |
| EVD-[YYYY]-[NNN]-006 | Endpoint MDM compliance report – [Quarter] | [MDM Platform] | [DD/MM/YYYY] | [Repository Path] | [Team] |
| *[Continue for all evidence items]* | | | | | |

---

### Appendix B: Remediation Evidence Log

*This appendix records the evidence collected to verify that each remediated deviation has been fully resolved. Verification must be performed by a party independent of the remediation owner where practicable.*

| Dev. ID | Deviation Description | Remediation Evidence Description | Evidence Type | Evidence ID | Verified By | Verification Date |
|---|---|---|---|---|---|---|
| DEV-[YYYY]-[NNN] | [Description] | [e.g., Re-scan output showing control passing; screenshot of updated configuration; change ticket closure] | [Scan Report / Screenshot / Ticket] | EVD-[YYYY]-[NNN]-[###] | [Name / Team] | [DD/MM/YYYY] |
| *[Continue for all remediated deviations]* | | | | | | |

---

### Appendix C: Exception and Risk Acceptance Supporting Documentation Index

*This appendix indexes the formal documentation supporting each approved exception or risk acceptance recorded in Section 6.3.*

| Exception ID | Related Dev. ID | Exception Request Document Ref. | Risk Assessment Ref. | Compensating Control Evidence Ref. | Approval Documentation Ref. |
|---|---|---|---|---|---|
| EXC-[YYYY]-[NNN] | DEV-[YYYY]-[NNN] | [Document ID] | [Risk Assessment ID] | [Evidence ID] | [Approval Record Ref.] |
| *[Continue for all exceptions]* | | | | | |

---

### Appendix D: Configuration Baseline Change Log

*This appendix provides a detailed log of all changes made to approved configuration baselines during the reporting period, supplementing the summary in Section 4.2.*

| Change Ref. | Baseline Affected (BL-ID) | Control / Setting Changed | Previous Value / State | New Value / State | Reason for Change | Change Request Ref. | Approved By | Effective Date |
|---|---|---|---|---|---|---|---|---|
| [CHG-XXXX] | [BL-ID] | [e.g., Minimum password length] | [e.g., 10 characters] | [e.g., 14 characters] | [e.g., Alignment to updated CIS Benchmark v8.1 recommendation] | [Change Ticket] | [Name / Role] | [DD/MM/YYYY] |
| *[Continue for all baseline changes]* | | | | | | | | |

---

### Appendix E: Glossary of Terms

*This appendix defines key terms used throughout this document to ensure consistent interpretation by all readers, including external auditors and BNM examiners.*

| Term | Definition |
|---|---|
| **Configuration Baseline** | An approved, documented specification of the minimum security configuration settings required for a given technology asset category. Baselines are version-controlled and derived from industry standards (e.g., CIS Benchmarks) and internal risk requirements. |
| **Configuration Deviation** | Any identified difference between the actual configuration of a technology asset and its approved configuration baseline. |
| **Configuration Compliance Rate** | The percentage of assessed assets that fully conform to their approved configuration baseline, calculated as: (Number of Compliant Assets / Total Assets Assessed) × 100. |
| **Compensating Control** | A security measure implemented to reduce the residual risk associated with a configuration deviation where full remediation is not immediately feasible. |
| **Risk Acceptance** | A formal management decision to accept the residual risk associated with a known configuration deviation, subject to defined conditions and a time-limited approval. |
| **Exception** | A formally documented and time-limited approval for a deviation from an approved configuration baseline, granted where business or technical constraints prevent immediate remediation. |
| **BNM RMiT** | Bank Negara Malaysia's Risk Management in Technology policy document, which sets out requirements for Malaysian financial institutions to manage technology and cyber risks. |
| **CISO** | Chief Information Security Officer |
| **CCO** | Chief Compliance Officer |
| **CIO** | Chief Information Officer |
| **RACI** | A responsibility assignment matrix indicating who is Responsible, Accountable, Consulted, and Informed for a given activity. |
| **SCAP** | Security Content Automation Protocol — a method for using specific standards to enable automated vulnerability management and configuration compliance checking. |
| **CSPM** | Cloud Security Posture Management — tools and processes for monitoring and enforcing security configuration policies across cloud environments. |
| **GRC** | Governance, Risk, and Compliance platform. |
| **ITSM** | IT Service Management platform (e.g., ServiceNow). |
| **SLA** | Service Level Agreement — in this context, the agreed timeframe within which a deviation of a given severity must be remediated. |

---

### Appendix F: Contact Directory

*This appendix provides contact information for key stakeholders involved in the configuration compliance programme, for use in escalation and regulatory enquiry situations.*

| Role | Name | Department | Email | Office / Mobile |
|---|---|---|---|---|
| Chief Compliance Officer | [Name] | Compliance | [Email] | [Contact] |
| Chief Information Security Officer | [Name] | Information Security | [Email] | [Contact] |
| Chief Information Officer | [Name] | Information Technology | [Email] | [Contact] |
| Head of Technology Risk | [Name] | Technology Risk | [Email] | [Contact] |
| Head of IT Operations | [Name] | IT Operations | [Email] | [Contact] |
| Configuration Compliance Programme Lead | [Name] | IT Security / Technology Risk | [Email] | [Contact] |
| Report Coordinator | [Name] | Compliance / Technology Risk | [Email] | [Contact] |
| BNM Regulatory Liaison (Primary) | [Name] | Compliance | [Email] | [Contact] |

---

*End of Document*

---

| Field | Detail |
|---|---|
| **Document Title** | Configuration Compliance Report |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Compliance Officer, [Organization Name] |
| **Framework** | BNM Risk Management in Technology (RMiT), Clause 10.15 |
| **Review Frequency** | Quarterly |