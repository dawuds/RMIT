# Remediation Compliance Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Vulnerability Management Lead |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Classification Notice:** This document is classified as **Confidential**. It contains information pertaining to the vulnerability posture and remediation activities of [Organization Name] and must be handled in accordance with the organization's Information Classification and Handling Policy. Unauthorized disclosure is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives and Scope](#2-objectives-and-scope)
3. [Actions and Milestones](#3-actions-and-milestones)
4. [Accountable Owners](#4-accountable-owners)
5. [Scanning Scope and Frequency](#5-scanning-scope-and-frequency)
6. [Severity Classification and Service Level Targets](#6-severity-classification-and-service-level-targets)
7. [Remediation Tracking](#7-remediation-tracking)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Exceptions and Risk Acceptances](#9-exceptions-and-risk-acceptances)
10. [Key Performance Indicators and Metrics](#10-key-performance-indicators-and-metrics)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section should articulate the primary intent of the report and its regulatory context. Reference the specific BNM RMiT clauses this document fulfils.*

This Remediation Compliance Report is prepared by [Organization Name] in accordance with **Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 11.14**, which mandates that financial institutions establish and maintain a structured vulnerability and patch management programme with defined remediation timelines and accountability.

The purpose of this report is to:

- Provide a transparent and auditable record of vulnerability remediation activities conducted during the reporting period
- Demonstrate compliance with the defined Service Level Targets (SLTs) for vulnerability remediation across all applicable technology assets
- Identify overdue, in-progress, and completed remediation items and the associated accountable parties
- Support the Board and Senior Management in fulfilling their technology risk oversight obligations
- Serve as evidence of the organization's ongoing cybersecurity posture for internal audit, external audit, and regulatory examination purposes

### 1.2 Regulatory Context

*Briefly state the regulatory obligations that necessitate this report. This provides auditors and reviewers with immediate context for the document's compliance significance.*

This report is produced as a mandatory compliance artifact under the following regulatory framework:

| Regulation / Framework | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 11.14 | Establishment of vulnerability management programme with defined SLTs, remediation tracking, and periodic reporting |
| BNM Risk Management in Technology (RMiT) | Clause 11.1 – 11.3 | Technology risk management governance and accountability |
| [Additional internal policy reference] | [Section] | [Summary] |

### 1.3 Reporting Period

*Specify the exact period this report covers. For quarterly reporting, this should align with calendar or financial quarters as agreed with the Board or Risk Committee.*

| Field | Detail |
|---|---|
| **Reporting Quarter** | [Q1 / Q2 / Q3 / Q4] |
| **Reporting Period Start** | [DD Month YYYY] |
| **Reporting Period End** | [DD Month YYYY] |
| **Report Preparation Date** | [DD Month YYYY] |
| **Submitted To** | [Risk Committee / Board IT Committee / CISO / Regulator] |

---

## 2. Objectives and Scope

### 2.1 Report Objectives

*Define the specific objectives this report seeks to achieve for the current reporting cycle. Objectives should be measurable and directly tied to the remediation SLTs.*

The objectives of this Remediation Compliance Report for the period **[Reporting Period Start] to [Reporting Period End]** are as follows:

1. **Compliance Measurement** — Assess and report the organization's compliance rate against defined SLTs for vulnerability remediation across all severity classifications (Critical, High, Medium, Low)
2. **Accountability Assurance** — Confirm that all identified vulnerabilities have been assigned to accountable owners and that remediation progress is being actively tracked
3. **Risk Exposure Reporting** — Quantify the current residual risk exposure arising from open, overdue, or risk-accepted vulnerabilities
4. **Trend Analysis** — Identify trends in vulnerability discovery, remediation velocity, and SLT compliance over time
5. **Governance Assurance** — Provide assurance to senior management and the Board that the vulnerability management programme is operating effectively and in compliance with RMiT Clause 11.14
6. **Corrective Action Tracking** — Monitor and report on the status of previously identified remediation gaps and the effectiveness of corrective actions

### 2.2 Scope of Coverage

*Define the technology assets, environments, and systems included in this report. Clearly articulate any exclusions and the rationale for exclusion.*

#### 2.2.1 In-Scope Assets

The following asset categories and environments are covered by this report:

| Asset Category | Environment | Coverage |
|---|---|---|
| Production Servers (Physical) | Production | Full |
| Production Servers (Virtual) | Production | Full |
| Database Servers | Production | Full |
| Network Infrastructure (Routers, Switches, Firewalls) | Production | Full |
| End-User Computing Devices (Laptops, Desktops) | Corporate | Full |
| Web Applications (Internet-Facing) | Production | Full |
| Web Applications (Internal) | Production / UAT | Full |
| Cloud Workloads | [Cloud Provider] | Full |
| Mobile Banking Applications | Production | Full |
| ATM / CDM Systems | Production | [Full / Partial] |
| SWIFT Infrastructure | Production | Full |
| [Additional asset category] | [Environment] | [Coverage] |

**Total Assets in Scope:** [Number]

#### 2.2.2 Out-of-Scope Assets

| Asset Category | Reason for Exclusion | Risk Acceptance Reference |
|---|---|---|
| [Asset Category] | [Reason — e.g., vendor-managed, end-of-life decommission in progress] | [Reference Number] |
| [Asset Category] | [Reason] | [Reference Number] |

#### 2.2.3 Geographic Scope

*Identify all offices, data centres, and branches covered by this report.*

- [Primary Data Centre — Location]
- [Disaster Recovery Site — Location]
- [Head Office — Location]
- [Branch Network — if applicable]
- [Cloud Region — e.g., ap-southeast-1]

---

## 3. Actions and Milestones

### 3.1 Remediation Action Plan Summary

*Summarise all active remediation action plans, including those initiated in previous periods and those newly created in the current reporting period. Each action plan should have a defined milestone schedule.*

*This section is the core tracking register for remediation activities. Ensure every open vulnerability with an SLT breach or risk of breach is represented here.*

#### 3.1.1 Active Action Plans — Current Period

| Action Plan ID | Vulnerability / Finding | Severity | Asset / System | Action Owner | Planned Completion Date | Status | % Complete |
|---|---|---|---|---|---|---|---|
| [AP-2024-001] | [e.g., CVE-2024-XXXX — Remote Code Execution in Apache] | Critical | [Asset Name] | [Owner Name] | [DD/MM/YYYY] | [In Progress / Completed / Overdue] | [%] |
| [AP-2024-002] | [e.g., Unpatched Windows Server 2019 — MS24-XXXX] | High | [Asset Name] | [Owner Name] | [DD/MM/YYYY] | [In Progress / Completed / Overdue] | [%] |
| [AP-2024-003] | [Vulnerability Description] | Medium | [Asset Name] | [Owner Name] | [DD/MM/YYYY] | [In Progress / Completed / Overdue] | [%] |
| [AP-2024-004] | [Vulnerability Description] | Low | [Asset Name] | [Owner Name] | [DD/MM/YYYY] | [In Progress / Completed / Overdue] | [%] |

#### 3.1.2 Milestone Schedule — Critical and High Findings

*For Critical and High severity findings, define granular milestones to demonstrate active management. This is particularly important for findings approaching or exceeding SLT.*

| Action Plan ID | Milestone | Milestone Owner | Target Date | Actual Date | Status |
|---|---|---|---|---|---|
| [AP-2024-001] | Vulnerability confirmed and triaged | [Owner] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Completed] |
| [AP-2024-001] | Patch identified and tested in UAT | [Owner] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Completed / In Progress] |
| [AP-2024-001] | Change request raised and approved | [Owner] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Completed / Pending] |
| [AP-2024-001] | Patch deployed to production | [Owner] | [DD/MM/YYYY] | [—] | [Pending] |
| [AP-2024-001] | Verification scan completed — closed | [Owner] | [DD/MM/YYYY] | [—] | [Pending] |

### 3.2 Milestones Completed in Reporting Period

*List all remediation milestones that were fully completed during the reporting period. This demonstrates forward progress and provides evidence for compliance.*

| Action Plan ID | Vulnerability / Finding | Severity | Completion Date | Completed By | Verification Method |
|---|---|---|---|---|---|
| [AP-2024-XXX] | [Vulnerability Description] | [Severity] | [DD/MM/YYYY] | [Name] | [Re-scan / Peer Review / Audit] |
| [AP-2024-XXX] | [Vulnerability Description] | [Severity] | [DD/MM/YYYY] | [Name] | [Re-scan / Peer Review / Audit] |

### 3.3 Milestones Missed or Deferred

*Transparently report any milestones that were not met. Include root cause analysis and revised target dates. This section is critical for regulatory review.*

| Action Plan ID | Original Milestone | Original Target Date | Reason for Deferral | Revised Target Date | Approving Authority |
|---|---|---|---|---|---|
| [AP-2024-XXX] | [Milestone Description] | [DD/MM/YYYY] | [Root cause — e.g., vendor patch not yet available, change freeze period, resource constraint] | [DD/MM/YYYY] | [Name / Role] |
| [AP-2024-XXX] | [Milestone Description] | [DD/MM/YYYY] | [Reason] | [DD/MM/YYYY] | [Name / Role] |

---

## 4. Accountable Owners

### 4.1 Ownership Assignment Framework

*This section defines how ownership is assigned for each vulnerability and remediation action plan. Clear accountability is a core requirement of RMiT Clause 11.14.*

Ownership of vulnerability remediation is assigned at the time of vulnerability identification and confirmed during the triage process. Ownership follows the **Asset Owner model**, whereby the business or technical owner of the affected asset bears primary responsibility for ensuring timely remediation.

The ownership hierarchy for remediation accountability is as follows:

```
Board / Risk Committee
        │
        ▼
Chief Information Security Officer (CISO)
        │
        ▼
Vulnerability Management Lead (Report Owner)
        │
        ▼
System / Application Owners (Remediation Execution)
        │
        ▼
Operations / Engineering Teams (Technical Implementation)
```

### 4.2 Asset and Remediation Ownership Register

*Maintain a current register of all asset owners and their assigned remediation items. This register must be reviewed and updated at each reporting cycle.*

| System / Asset Name | Asset Classification | Business Owner | Technical Owner | Current Open Vulnerabilities (Critical / High / Medium / Low) | Overdue Items |
|---|---|---|---|---|---|
| [System Name] | [Critical / Major / Standard] | [Business Owner Name & Department] | [Technical Owner Name] | [0 / 2 / 5 / 12] | [0] |
| [System Name] | [Critical / Major / Standard] | [Business Owner Name & Department] | [Technical Owner Name] | [1 / 0 / 3 / 7] | [1] |
| [System Name] | [Classification] | [Business Owner] | [Technical Owner] | [Count] | [Count] |

**Total Active Owners:** [Number]
**Owners with Overdue Items:** [Number]

### 4.3 Escalation Register

*Document all escalations raised during the reporting period where an asset owner failed to meet their remediation obligations or where SLT compliance was at risk.*

| Escalation ID | Date Raised | Asset / System | Severity | Days Overdue | Escalated To | Resolution | Resolved Date |
|---|---|---|---|---|---|---|---|
| [ESC-2024-001] | [DD/MM/YYYY] | [System Name] | [Critical] | [X days] | [CISO / CTO] | [Resolution description] | [DD/MM/YYYY] |
| [ESC-2024-002] | [DD/MM/YYYY] | [System Name] | [High] | [X days] | [CISO / CTO] | [Resolution description] | [DD/MM/YYYY] |

---

## 5. Scanning Scope and Frequency

### 5.1 Vulnerability Scanning Programme Overview

*Describe the vulnerability scanning programme that underpins the data in this report. BNM RMiT requires systematic and periodic scanning of all technology assets.*

[Organization Name]'s vulnerability scanning programme is managed by the [Vulnerability Management Team / Information Security Team] and covers all technology assets within the defined scope. The programme utilises the following scanning technologies and methodologies:

| Scanning Tool / Method | Vendor | Version | Scan Type | Coverage |
|---|---|---|---|---|
| [e.g., Tenable Nessus / Qualys / Rapid7] | [Vendor] | [Version] | Authenticated Network Scan | Servers, Network Devices |
| [e.g., OWASP ZAP / Burp Suite Enterprise] | [Vendor] | [Version] | Dynamic Application Security Testing (DAST) | Web Applications |
| [e.g., Snyk / Checkmarx] | [Vendor] | [Version] | Static Application Security Testing (SAST) | Source Code |
| [e.g., Trivy / Prisma Cloud] | [Vendor] | [Version] | Container Image Scanning | Cloud / Containers |
| [e.g., CrowdStrike / Defender] | [Vendor] | [Version] | Agent-Based Endpoint Scanning | Endpoints |
| [Manual Penetration Testing] | [Internal / External Vendor] | [N/A] | Penetration Test | Critical Systems |

### 5.2 Scanning Frequency Schedule

*Define the required scanning frequency per asset category. Frequencies must be risk-commensurate and approved by the CISO.*

| Asset Category | Required Scan Frequency | Scan Type | Last Scan Date | Next Scheduled Scan | Compliance Status |
|---|---|---|---|---|---|
| Internet-Facing Systems | Weekly | Authenticated Network + DAST | [DD/MM/YYYY] | [DD/MM/YYYY] | [Compliant / Non-Compliant] |
| Critical Internal Servers | Fortnightly | Authenticated Network | [DD/MM/YYYY] | [DD/MM/YYYY] | [Compliant / Non-Compliant] |
| Standard Internal Servers | Monthly | Authenticated Network | [DD/MM/YYYY] | [DD/MM/YYYY] | [Compliant / Non-Compliant] |
| Network Infrastructure | Monthly | Authenticated Network | [DD/MM/YYYY] | [DD/MM/YYYY] | [Compliant / Non-Compliant] |
| End-User Devices | Monthly | Agent-Based | [DD/MM/YYYY] | [DD/MM/YYYY] | [Compliant / Non-Compliant] |
| Web Applications (External) | Quarterly + on-release | DAST | [DD/MM/YYYY] | [DD/MM/YYYY] | [Compliant / Non-Compliant] |
| Source Code Repositories | Per CI/CD pipeline + Quarterly | SAST / SCA | [DD/MM/YYYY] | [DD/MM/YYYY] | [Compliant / Non-Compliant] |
| Cloud Workloads | Continuous (agent) + Weekly | CSPM | [DD/MM/YYYY] | [DD/MM/YYYY] | [Compliant / Non-Compliant] |

**Scanning Programme Compliance Rate (Current Period):** [XX]%

### 5.3 Scanning Coverage Metrics

*Report on the actual coverage achieved versus the defined scope. Any gaps must be explained and remediated.*

| Metric | Target | Achieved (This Period) | Variance | Notes |
|---|---|---|---|---|
| % of in-scope assets scanned | 100% | [XX]% | [+/-X]% | [Any exceptions noted] |
| % of internet-facing assets scanned weekly | 100% | [XX]% | [+/-X]% | [Any exceptions noted] |
| % of critical servers scanned fortnightly | 100% | [XX]% | [+/-X]% | [Any exceptions noted] |
| Scan authentication success rate | ≥95% | [XX]% | [+/-X]% | [Any exceptions noted] |
| Assets with no scan in >30 days | 0 | [Count] | [Count] | [List assets or reference Appendix A] |

---

## 6. Severity Classification and Service Level Targets

### 6.1 Vulnerability Severity Classification Framework

*Define the severity classification system used by the organization. This must align with or reference an industry standard (e.g., CVSS) and must be approved by the CISO.*

[Organization Name] classifies vulnerabilities using the **Common Vulnerability Scoring System (CVSS) v3.1** as the baseline, with contextual adjustments applied based on asset criticality, exploitability in the wild, and potential business impact. The classification framework is defined in **[Reference: Vulnerability Management Policy — Document ID XXXX]**.

| Severity Level | CVSS Score Range | Definition | Examples |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Vulnerabilities that can be exploited remotely without authentication, result in complete system compromise, or enable lateral movement across critical systems. Active exploitation in the wild is confirmed or highly likely. | Remote Code Execution (unauthenticated), Known ransomware vectors, CVEs with public exploit code |
| **High** | 7.0 – 8.9 | Vulnerabilities that can be exploited remotely or locally with minimal privileges, with significant impact on confidentiality, integrity, or availability of sensitive systems. | Privilege escalation, Authenticated RCE, SQL injection in production systems |
| **Medium** | 4.0 – 6.9 | Vulnerabilities requiring significant conditions to exploit but which could lead to partial compromise of systems or data. | Cross-site scripting (stored), Information disclosure, Insecure configurations |
| **Low** | 0.1 – 3.9 | Vulnerabilities with limited exploitability or impact in isolation. Best-practice hardening findings. | Outdated TLS versions, Missing security headers, Non-sensitive information exposure |
| **Informational** | N/A | Observations that do not represent a direct vulnerability but indicate a security improvement opportunity. | Security misconfiguration recommendations, Policy alignment gaps |

### 6.2 Contextual Risk Uplift Criteria

*Define when a vulnerability's classification may be uplifted from its base CVSS score.*

A vulnerability's severity classification may be uplifted (but not downgraded) from the base CVSS score where any of the following conditions apply:

| Uplift Condition | Impact on Classification | Approval Required |
|---|---|---|
| Active exploitation confirmed in the wild (CISA KEV listed) | Uplift to Critical regardless of CVSS | Vulnerability Management Lead |
| Asset is classified as Critical (e.g., SWIFT, Core Banking) | Uplift by one severity tier | Vulnerability Management Lead |
| Proof-of-concept (PoC) exploit publicly available | Uplift by one severity tier | Vulnerability Management Lead |
| Affected asset processes personal data (PDPA) | Uplift by one severity tier | CISO |
| Combination of vulnerabilities enabling exploit chain | Uplift to highest tier in chain | CISO |

### 6.3 Remediation Service Level Targets (SLTs)

*Define the SLTs for vulnerability remediation. These SLTs must be formally approved, communicated to all asset owners, and reported against in this document.*

The following SLTs are mandated under [Organization Name]'s **Vulnerability Management Policy** and are consistent with BNM RMiT Clause 11.14 requirements:

| Severity Level | Maximum Remediation SLT | SLT Start Trigger | Compensation Controls Acceptable | Escalation if Breached |
|---|---|---|---|---|
| **Critical** | **24 hours** (emergency patch) / **7 calendar days** (planned remediation) | Date of discovery / confirmed triage | Yes — with CISO approval and documented risk acceptance | Immediate escalation to CISO and CTO |
| **High** | **30 calendar days** | Date of confirmed triage | Yes — with CISO approval | Escalation to Vulnerability Management Lead within 7 days of SLT breach |
| **Medium** | **90 calendar days** | Date of confirmed triage | Yes — with documented rationale | Escalation to System Owner within 14 days of SLT breach |
| **Low** | **180 calendar days** | Date of confirmed triage | Yes — within risk appetite | Noted in next quarterly report |
| **Informational** | **Next planned review cycle** | Date of confirmed triage | N/A | No escalation required |

> **Note:** Where a vendor patch is not yet available, the asset owner must implement documented compensating controls and raise a formal risk acceptance. The SLT clock continues to run regardless of patch availability. All SLT deferrals require written approval from the CISO.

---

## 7. Remediation Tracking

### 7.1 Vulnerability Inventory Summary — Current Period

*Provide a high-level statistical summary of the vulnerability inventory at the close of the reporting period. This is the primary dashboard for management and governance review.*

#### 7.1.1 Vulnerability Count by Severity

| Severity | Open (Start of Period) | New (Discovered This Period) | Remediated (This Period) | Risk Accepted | Open (End of Period) | Overdue | SLT Compliance Rate |
|---|---|---|---|---|---|---|---|
| **Critical** | [X] | [X] | [X] | [X] | [X] | [X] | [XX]% |
| **High** | [X] | [X] | [X] | [X] | [X] | [X] | [XX]% |
| **Medium** | [X] | [X] | [X] | [X] | [X] | [X] | [XX]% |
| **Low** | [X] | [X] | [X] | [X] | [X] | [X] | [XX]% |
| **Informational** | [X] | [X] | [X] | [N/A] | [X] | [N/A] | [N/A] |
| **TOTAL** | [X] | [X] | [X] | [X] | [X] | [X] | [XX]% |

**Overall SLT Compliance Rate (Critical + High):** [XX]%
**Overall SLT Compliance Rate (All Severities):** [XX]%

#### 7.1.2 Vulnerability Distribution by Asset Category

| Asset Category | Critical | High | Medium | Low | Total Open | % of Total |
|---|---|---|---|---|---|---|
| Production Servers | [X] | [X] | [X] | [X] | [X] | [XX]% |
| Network Infrastructure | [X] | [X] | [X] | [X] | [X] | [XX]% |
| Web Applications | [X] | [X] | [X] | [X] | [X] | [XX]% |
| End-User Devices | [X] | [X] | [X] | [X] | [X] | [XX]% |
| Cloud Workloads | [X] | [X] | [X] | [X] | [X] | [XX]% |
| Database Servers | [X] | [X] | [X] | [X] | [X] | [XX]% |
| [Other] | [X] | [X] | [X] | [X] | [X] | [XX]% |
| **TOTAL** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]** | **100%** |

### 7.2 Overdue Remediation Register

*This register is critical for regulatory compliance. Every overdue item must have a documented owner, root cause, revised timeline, and approving authority. Zero-tolerance for undocumented overdue Critical and High vulnerabilities.*

| Vulnerability ID | CVE / Finding Reference | Severity | Affected Asset | Asset Owner | Original SLT Due Date | Days Overdue | Root Cause for Delay | Compensating Control in Place | Risk Acceptance Ref | Revised Target Date | Approving Authority |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [VULN-2024-XXX] | [CVE-XXXX-XXXXX] | Critical | [Asset Name] | [Owner] | [DD/MM/YYYY] | [X] | [e.g., Vendor patch not yet released] | [Yes — WAF rule applied] | [RA-2024-XXX] | [DD/MM/YYYY] | [CISO] |
| [VULN-2024-XXX] | [CVE-XXXX-XXXXX] | High | [Asset Name] | [Owner] | [DD/MM/YYYY] | [X] | [e.g., Change freeze — production moratorium] | [Yes — IPS signature deployed] | [RA-2024-XXX] | [DD/MM/YYYY] | [VM Lead] |
| [VULN-2024-XXX] | [Finding Description] | Medium | [Asset Name] | [Owner] | [DD/MM/YYYY] | [X] | [Resource constraint — patch testing in progress] | [No] | [N/A] | [DD/MM/YYYY] | [System Owner] |

**Total Overdue (Critical):** [X]
**Total Overdue (High):** [X]
**Total Overdue (Medium):** [X]
**Total Overdue (Low):** [X]

### 7.3 Remediation Completed — Verification Log

*All remediated vulnerabilities must be verified through a re-scan or equivalent technical verification. This section provides the audit trail of verified closures.*

| Vulnerability ID | CVE / Finding Reference | Severity | Affected Asset | Remediation Method | Remediated Date | Verified By | Verification Method | Verification Date | Closed Date |
|---|---|---|---|---|---|---|---|---|---|
| [VULN-2024-XXX] | [CVE-XXXX-XXXXX] | Critical | [Asset Name] | [Patch applied — Version X.X.X] | [DD/MM/YYYY] | [Name] | [Authenticated Re-scan] | [DD/MM/YYYY] | [DD/MM/YYYY] |
| [VULN-2024-XXX] | [CVE-XXXX-XXXXX] | High | [Asset Name] | [Configuration change] | [DD/MM/YYYY] | [Name] | [Manual verification + Re-scan] | [DD/MM/YYYY] | [DD/MM/YYYY] |
| [VULN-2024-XXX] | [Finding Description] | Medium | [Asset Name] | [Software update] | [DD/MM/YYYY] | [Name] | [Authenticated Re-scan] | [DD/MM/YYYY] | [DD/MM/YYYY] |

**Total Verified Closures This Period:** [X]

### 7.4 Trend Analysis

*Provide a narrative and data-driven analysis of vulnerability trends over the past four reporting quarters. Identify whether the organisation's security posture is improving, stable, or deteriorating.*

#### 7.4.1 Quarter-on-Quarter Trend Summary

| Metric | Q[X-3] | Q[X-2] | Q[X-1] | Q[X] (Current) | Trend |
|---|---|---|---|---|---|
| Total Open Vulnerabilities | [X] | [X] | [X] | [X] | [↑ / ↓ / →] |
| Critical Open | [X] | [X] | [X] | [X] | [↑ / ↓ / →] |
| High Open | [X] | [X] | [X] | [X] | [↑ / ↓ / →] |
| SLT Compliance Rate (Critical + High) | [XX]% | [XX]% | [XX]% | [XX]% | [↑ / ↓ / →] |
| Overdue Items | [X] | [X] | [X] | [X] | [↑ / ↓ / →] |
| Mean Time to Remediate (Critical) | [X days] | [X days] | [X days] | [X days] | [↑ / ↓ / →] |
| Mean Time to Remediate (High) | [X days] | [X days] | [X days] | [X days] | [↑ / ↓ / →] |

#### 7.4.2 Analysis and Commentary

*Provide a concise analytical narrative (3–5 paragraphs) interpreting the trend data above. Highlight key drivers of improvement or deterioration, significant findings introduced this period, and the effectiveness of remediation actions taken.*

[Insert narrative analysis here. Address the following:
- Overall posture trend (improving / stable / deteriorating) with supporting data
- Key contributing factors to any material changes in open vulnerability counts
- Effectiveness of remediation actions taken during the period
- Notable systemic issues (e.g., recurring vulnerability types, specific asset categories with persistent issues)
- Forward-looking assessment: likelihood of achieving targets in the next reporting period]

---

## 8. Roles and Responsibilities

### 8.1 Vulnerability Management Programme Roles

*This section defines the roles with responsibilities in the vulnerability management and remediation process. A RACI framework is used to ensure clear accountability.*

**RACI Legend:**
- **R** — Responsible: Does the work
- **A** — Accountable: Owns the outcome; one person per activity
- **C** — Consulted: Provides input before action
- **I** — Informed: Notified of outcome after action

### 8.2 RACI Matrix

| Activity | Board / Risk Committee | CISO | Vulnerability Management Lead | System / Asset Owner | Operations / Engineering Team | Internal Audit | IT Risk Manager |
|---|---|---|---|---|---|---|---|
| Define and approve Vulnerability Management Policy | C | A / R | R | C | I | C | C |
| Define and approve SLTs | I | A | R | C | C | C | C |
| Define scanning scope and frequency | I | A | R | C | C | I | C |
| Execute vulnerability scans | I | I | A | I | R | I | I |
| Triage and classify vulnerabilities | I | C | A | C | R | I | C |
| Assign vulnerabilities to asset owners | I | I | A / R | I | I | I | I |
| Execute remediation actions | I | I | I | A | R | I | I |
| Report overdue items to CISO | I | I | A / R | C | I | I | C |
| Approve risk acceptances (Critical / High) | I | A | R | C | I | I | C |
| Approve risk acceptances (Medium / Low) | I | I | A | R | C | I | I |
| Verify and close remediated vulnerabilities | I | I | A | C | R | I | I |
| Prepare quarterly Remediation Compliance Report | I | C | A / R | C | C | I | C |
| Review and approve quarterly report | I | A | R | I | I | C | C |
| Present report to Risk Committee | A | R | C | I | I | I | C |
| Conduct exception and escalation management | I | A | R | C | I | I | C |
| Annual review of Vulnerability Management Policy | I | A | R | C | C | C | C |

### 8.3 Key Contacts for This Report

| Role | Name | Department | Contact |
|---|---|---|---|
| Vulnerability Management Lead (Report Owner) | [Name] | [Department] | [Email] |
| CISO | [Name] | Information Security | [Email] |
| CTO / Head of IT | [Name] | Information Technology | [Email] |
| IT Risk Manager | [Name] | IT Risk | [Email] |
| Internal Audit Liaison | [Name] | Internal Audit | [Email] |
| [Additional Role] | [Name] | [Department] | [Email] |

---

## 9. Exceptions and Risk Acceptances

### 9.1 Exception Management Framework

*This section documents all formal exceptions to the remediation SLTs that are in effect as at the end of the reporting period. All exceptions require formal risk acceptance in accordance with the organization's risk acceptance process.*

Where remediation within the defined SLT is not possible, the following process must be followed:

1. Asset owner documents the rationale for the exception and proposes compensating controls
2. Vulnerability Management Lead reviews and validates the compensating controls
3. Risk acceptance is escalated to the appropriate approving authority based on severity
4. Approved risk acceptance is recorded in the Risk Register and linked to the vulnerability record
5. Risk acceptance is reviewed at each subsequent reporting cycle until the vulnerability is remediated

### 9.2 Active Risk Acceptances Register

*List all risk acceptances currently in effect. Risk acceptances must not be used as a substitute for remediation — they are a temporary mechanism and must have a defined expiry date.*

| Risk Acceptance ID | Vulnerability ID | Severity | Affected Asset | Rationale | Compensating Controls | Residual Risk Rating | Acceptance Date | Expiry Date | Approved By | Review Date |
|---|---|---|---|---|---|---|---|---|---|---|
| [RA-2024-001] | [VULN-2024-XXX] | Critical | [Asset Name] | [Vendor patch not yet available for [Product] — awaiting [Version] release] | [WAF rule deployed; network segmentation applied; enhanced monitoring enabled] | [High] | [DD/MM/YYYY] | [DD/MM/YYYY] | [CISO] | [DD/MM/YYYY] |
| [RA-2024-002] | [VULN-2024-XXX] | High | [Asset Name] | [System scheduled for decommission — patch ROI not justified] | [System isolated from internet; access restricted to [X] users] | [Medium] | [DD/MM/YYYY] | [DD/MM/YYYY] | [CISO] | [DD/MM/YYYY] |
| [RA-2024-003] | [VULN-2024-XXX] | Medium | [Asset Name] | [Rationale] | [Compensating controls] | [Low] | [DD/MM/YYYY] | [DD/MM/YYYY] | [VM Lead] | [DD/MM/YYYY] |

**Total Active Risk Acceptances:** [X]
**Risk Acceptances Expiring Next Quarter:** [X]

---

## 10. Key Performance Indicators and Metrics

### 10.1 KPI Dashboard

*This section provides the consolidated KPI scorecard for the vulnerability management programme. KPIs are measured against targets set in the Vulnerability Management Policy.*

| KPI | Target | Current Period | Previous Period | Status |
|---|---|---|---|---|
| Critical Vulnerability SLT Compliance Rate | 100% | [XX]% | [XX]% | [On Track / At Risk / Breached] |
| High Vulnerability SLT Compliance Rate | ≥95% | [XX]% | [XX]% | [On Track / At Risk / Breached] |
| Medium Vulnerability SLT Compliance Rate | ≥90% | [XX]% | [XX]% | [On Track / At Risk / Breached] |
| Mean Time to Remediate (Critical) | ≤7 days | [X] days | [X] days | [On Track / At Risk / Breached] |
| Mean Time to Remediate (High) | ≤30 days | [X] days | [X] days | [On Track / At Risk / Breached] |
| Mean Time to Remediate (Medium) | ≤90 days | [X] days | [X] days | [On Track / At Risk / Breached] |
| Scanning Coverage Rate | 100% | [XX]% | [XX]% | [On Track / At Risk / Breached] |
| Scan Authentication Success Rate | ≥95% | [XX]% | [XX]% | [On Track / At Risk / Breached] |
| Vulnerabilities with Verified Closure | 100% | [XX]% | [XX]% | [On Track / At Risk / Breached] |
| Risk Acceptances Exceeding 90 Days | 0 (Critical) | [X] | [X] | [On Track / At Risk / Breached] |
| Assets with No Scan in >30 Days | 0 | [X] | [X] | [On Track / At Risk / Breached] |
| Recurring Vulnerabilities (same finding 2+ quarters) | <5% of total | [XX]% | [XX]% | [On Track / At Risk / Breached] |

### 10.2 Management Commentary on KPI Performance

*Provide a brief management commentary on overall KPI performance. Highlight any KPIs that are breached or at risk, and the actions being taken to address them.*

**Overall Programme Status: [Green / Amber / Red]**

[Insert management commentary here. Address:
- Overall assessment of programme health
- KPIs where targets were met and any factors contributing to strong performance
- KPIs where targets were missed, with root cause and remediation actions
- Any systemic issues requiring management attention or investment]

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | [Reviewer Name] | Initial version |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Reviewer Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Reviewer Name] | [Description of changes] |

### 11.2 Review Schedule

This report is produced and reviewed on a **quarterly** basis in accordance with BNM RMiT Clause 11.14 and [Organization Name]'s Vulnerability Management Policy. The review schedule is as follows:

| Quarter | Reporting Period | Report Due Date | Presented To | Review Meeting Date |
|---|---|---|---|---|
| Q1 | 1 January – 31 March | 30 April | [Risk Committee / IT Steering Committee] | [DD/MM/YYYY] |
| Q2 | 1 April – 30 June | 31 July | [Risk Committee / IT Steering Committee] | [DD/MM/YYYY] |
| Q3 | 1 July – 30 September | 31 October | [Risk Committee / IT Steering Committee] | [DD/MM/YYYY] |
| Q4 | 1 October – 31 December | 31 January | [Risk Committee / IT Steering Committee / Board] | [DD/MM/YYYY] |

### 11.3 Approval Sign-Off

*All approvers must review the completed report prior to submission to the Risk Committee or Board. Signatures confirm that the content of the report is accurate to the best of the approver's knowledge.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By — Vulnerability Management Lead | [Name] | _________________________ | [DD/MM/YYYY] |
| Reviewed By — IT Risk Manager | [Name] | _________________________ | [DD/MM/YYYY] |
| Reviewed By — Internal Audit Liaison | [Name] | _________________________ | [DD/MM/YYYY] |
| Approved By — CISO | [Name] | _________________________ | [DD/MM/YYYY] |
| Approved By — CTO / Head of IT | [Name] | _________________________ | [DD/MM/YYYY] |
| Endorsed By — Chief Risk Officer (CRO) | [Name] | _________________________ | [DD/MM/YYYY] |

---

## 12. References

*This section lists the primary regulatory references, internal policies, and standards that govern this document and the activities it reports on.*

### 12.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 11.14 (Vulnerability and Patch Management); Clause 11.1–11.3 (Technology Risk Governance) |
| BNM PDPA Guidance | Personal Data Protection — Financial Sector Guidance | Bank Negara Malaysia | [Relevant sections on data breach prevention] |
| NACSA | National Cyber Security Policy 2.0 | NACSA | [Relevant sections on vulnerability management] |
| [Additional Reference] | [Title] | [Authority] | [Clause] |

### 12.2 Internal Policy References

| Document ID | Document Title | Version | Relationship to This Report |
|---|---|---|---|
| [POL-IS-001] | Information Security Policy | [Version] | Overarching security governance framework |
| [POL-VM-001] | Vulnerability Management Policy | [Version] | Defines SLTs, scope, and ownership model reported herein |
| [POL-PM-001] | Patch Management Policy | [Version] | Defines patch deployment procedures and timelines |
| [POL-CM-001] | Change Management Policy | [Version] | Governs change process for patch deployment |
| [POL-RA-001] | Risk Acceptance Policy | [Version] | Defines risk acceptance approval thresholds and process |
| [PRO-VM-001] | Vulnerability Management Procedure | [Version] | Operational procedure for scanning, triage, and remediation |
| [STD-AS-001] | Asset Classification Standard | [Version] | Defines asset criticality tiers referenced in SLT uplift |

### 12.3 Industry Standards and Frameworks

| Standard | Version | Application |
|---|---|---|
| NIST SP 800-40 | Rev. 4 | Guide to Enterprise Patch Management Planning |
| NIST Cybersecurity Framework (CSF) | 2.0 | ID.RA, PR.IP functions |
| Common Vulnerability Scoring System (CVSS) | v3.1 | Vulnerability severity classification base score |
| CIS Controls | v8 | Control 7: Continuous Vulnerability Management |

---

## Appendices

### Appendix A — Assets Not Scanned During Reporting Period

*List all assets that were not scanned during the reporting period, with justification. This appendix is mandatory if any assets were not scanned.*

| Asset Name / ID | Asset Category | Asset Owner | Last Scan Date | Reason Not Scanned | Remediation Action | Target Scan Date |
|---|---|---|---|---|---|---|
| [Asset Name] | [Category] | [Owner] | [DD/MM/YYYY] | [Reason — e.g., decommission in progress, network isolation] | [Action to restore scanning coverage] | [DD/MM/YYYY] |

### Appendix B — Detailed Vulnerability Inventory (Full Register)

*This appendix contains the complete, unfiltered vulnerability inventory for the reporting period. Due to its sensitivity, distribution should be restricted to the Vulnerability Management Lead, CISO, and authorised reviewers.*

> **Distribution Restriction:** Appendix B is classified **Confidential — Restricted** and must not be distributed beyond the approved reviewer list. Refer to [Vulnerability Management Tool / SIEM] for the live register, or to the separately secured export file: **[Filename — e.g., VulnRegister_Q4_2024_CONFIDENTIAL.xlsx]**

| Vulnerability ID | CVE / Finding ID | Title | CVSS Score | Severity | Affected Asset | Asset Owner | Discovery Date | SLT Due Date | Status | Days to SLT / Days Overdue |
|---|---|---|---|---|---|---|---|---|---|---|
| [VULN-2024-XXX] | [CVE-XXXX-XXXXX] | [Vulnerability Title] | [X.X] | [Severity] | [Asset] | [Owner] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Open / In Progress / Overdue] | [X days] |

### Appendix C — Penetration Test Findings Remediation Tracker

*Track the remediation status of findings from formal penetration tests conducted within or prior to the reporting period.*

| Pentest Reference | Test Date | Testing Vendor | Finding ID | Finding Title | Severity | Asset | Owner | Remediation Status | Target Date | Evidence of Remediation |
|---|---|---|---|---|---|---|---|---|---|---|
| [PT-2024-001] | [DD/MM/YYYY] | [Vendor Name] | [PT-001-F01] | [Finding Title] | [Critical / High / Medium] | [Asset] | [Owner] | [Open / In Progress / Completed] | [DD/MM/YYYY] | [Reference to evidence] |

### Appendix D — Compensating Controls Register

*Document all compensating controls currently in place in lieu of patching. Each control must be technically validated and time-limited.*

| Control ID | Vulnerability ID | Severity | Affected Asset | Compensating Control Description | Date Implemented | Implemented By | Technical Validation Date | Validated By | Control Expiry Date |
|---|---|---|---|---|---|---|---|---|---|
| [CC-2024-001] | [VULN-2024-XXX] | [Critical] | [Asset Name] | [e.g., Web Application Firewall rule blocking exploitation of CVE-XXXX; network ACL restricting access to affected port] | [DD/MM/YYYY] | [Name] | [DD/MM/YYYY] | [Name] | [DD/MM/YYYY] |

### Appendix E — Glossary of Terms

| Term | Definition |
|---|---|
| **CVSS** | Common Vulnerability Scoring System — an industry-standard framework for rating the severity of security vulnerabilities |
| **CVE** | Common Vulnerabilities and Exposures — a reference system for publicly known information-security vulnerabilities |
| **SLT** | Service Level Target — the maximum time permitted for remediating a vulnerability of a given severity classification |
| **Vulnerability Management** | The cyclical practice of identifying, classifying, remediating, and mitigating software vulnerabilities |
| **Patch Management** | The process of acquiring, testing, and applying updates to software and firmware to address vulnerabilities |
| **Risk Acceptance** | A formal documented decision to accept a known risk without remediation, within defined parameters and with compensating controls |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles in a process |
| **DAST** | Dynamic Application Security Testing — testing a running application to identify vulnerabilities |
| **SAST** | Static Application Security Testing — analysing source code to identify vulnerabilities |
| **CSPM** | Cloud Security Posture Management — continuous assessment of cloud infrastructure configurations |
| **BNM RMiT** | Bank Negara Malaysia's Risk Management in Technology Policy Document |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **KEV** | Known Exploited Vulnerabilities — CISA's catalogue of CVEs with confirmed active exploitation |
| **Mean Time to Remediate (MTTR)** | The average elapsed time from vulnerability discovery to verified closure |

---

*End of Document*

---

**Document Control Footer**

| Field | Detail |
|---|---|
| Document Title | Remediation Compliance Report |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | Vulnerability Management Lead — [Organization Name] |
| Last Updated | [DD/MM/YYYY] |
| Next Review Due | [DD/MM/YYYY] |

*This document is subject to [Organization Name]'s Document Retention Policy. Printed copies are uncontrolled. For the current version, refer to [Document Management System / SharePoint URL].*