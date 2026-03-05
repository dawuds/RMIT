# Patch Compliance Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Organization** | [Organization Name] |
| **Reporting Period** | [Q1/Q2/Q3/Q4] [YYYY] |
| **Report Date** | [Effective Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Handling Instructions:** This document is classified **Confidential**. It must not be distributed outside of authorized personnel. Physical copies must be stored securely and destroyed when no longer required. Electronic copies must be protected in accordance with [Organization Name]'s Information Security Policy.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Methodology](#3-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [Patch Criticality Classification](#5-patch-criticality-classification)
6. [Patch Deployment Compliance Status](#6-patch-deployment-compliance-status)
7. [Testing and Rollback Procedures](#7-testing-and-rollback-procedures)
8. [End-of-Life (EOL) Technology Register](#8-end-of-life-eol-technology-register)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Remediation and Action Plan](#10-remediation-and-action-plan)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Executive Summary

*Provide a concise, management-level summary of the organization's patch compliance posture for the reporting period. This section should be readable independently and highlight the most critical findings, overall compliance percentage, and any material risks requiring immediate attention.*

For the reporting period **[Q1/Q2/Q3/Q4] [YYYY]**, [Organization Name] conducted a comprehensive review of its patch management activities across all in-scope technology assets. This report documents the organization's compliance against patch deployment timelines as defined in the **Patch Management Policy ([Policy Reference])** and in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, Clause 10.17**.

### 1.1 Overall Compliance Summary

| Metric | Value |
|---|---|
| **Total In-Scope Systems** | [Total Count] |
| **Total Patches Assessed** | [Total Count] |
| **Patches Applied Within SLA** | [Count] ([XX]%) |
| **Patches Overdue** | [Count] ([XX]%) |
| **Critical Patches — Compliant** | [Count] / [Total] ([XX]%) |
| **High Patches — Compliant** | [Count] / [Total] ([XX]%) |
| **Medium Patches — Compliant** | [Count] / [Total] ([XX]%) |
| **Low Patches — Compliant** | [Count] / [Total] ([XX]%) |
| **EOL Systems Identified** | [Count] |
| **Overall Compliance Rating** | [Compliant / Partially Compliant / Non-Compliant] |

### 1.2 Key Highlights

- **[Finding 1]:** [Brief description of the most significant positive finding, e.g., "Critical patch compliance achieved 100% within the mandated 14-day SLA for the third consecutive quarter."]
- **[Finding 2]:** [Brief description of a key risk or concern, e.g., "Three legacy servers running Windows Server 2012 R2 remain in production without an approved EOL remediation plan."]
- **[Finding 3]:** [Brief description of any trend, e.g., "Overall patch compliance improved by [X]% compared to the previous quarter, attributed to automation tooling enhancements."]

### 1.3 Management Attention Required

*List items that require escalation or immediate action from senior management.*

| Priority | Issue | Recommended Action | Target Date |
|---|---|---|---|
| Critical | [e.g., EOL system identified without exemption] | [e.g., Immediate decommission or compensating control] | [Date] |
| High | [e.g., Overdue critical patches on internet-facing systems] | [e.g., Emergency change request to be raised] | [Date] |
| Medium | [e.g., Patch testing environment capacity constraints] | [e.g., Infrastructure uplift] | [Date] |

---

## 2. Purpose and Scope

### 2.1 Purpose

This Patch Compliance Report is a mandatory quarterly artifact produced by the IT Operations Manager in fulfilment of [Organization Name]'s obligations under the **BNM Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.17**, which requires financial institutions to:

- Maintain a formal patch management process covering all technology assets.
- Define and enforce patch deployment timelines based on criticality classification.
- Track and report on patch compliance status to relevant governance bodies.
- Maintain an inventory of end-of-life (EOL) technology and associated remediation plans.

This report provides objective evidence of the organization's patch management posture, supports internal audit and regulatory examination readiness, and informs risk-based decision-making by the IT Risk Committee and Senior Management.

### 2.2 Scope

*Define the boundary of systems, environments, and periods covered in this report. Be explicit about what is included and excluded, and the rationale for any exclusions.*

#### 2.2.1 In-Scope Systems and Environments

| Category | Scope Boundary |
|---|---|
| **Operating Systems** | All Windows, Linux, and Unix servers in Production and UAT environments |
| **Network Infrastructure** | Routers, switches, firewalls, and load balancers managed by IT Operations |
| **Databases** | Oracle, Microsoft SQL Server, MySQL, PostgreSQL instances in Production |
| **Middleware & Application Servers** | [e.g., Apache Tomcat, JBoss, WebLogic] |
| **End-User Devices** | All corporate-managed workstations and laptops issued by [Organization Name] |
| **Security Appliances** | IDS/IPS, WAF, SIEM platforms |
| **Cloud Workloads** | [e.g., Azure VMs, AWS EC2 instances managed by IT Operations] |

#### 2.2.2 Out-of-Scope

| Exclusion | Justification |
|---|---|
| [e.g., Vendor-managed SaaS platforms] | [e.g., Patching responsibility governed by vendor SLA; covered under Third-Party Risk Management] |
| [e.g., Development/sandbox environments] | [e.g., Not connected to production network; lower risk tier] |
| [e.g., ATM and kiosk firmware] | [e.g., Managed under a separate ATM Operations patch schedule] |

#### 2.2.3 Reporting Period

| Field | Details |
|---|---|
| **Reporting Period** | [Start Date] to [End Date] |
| **Data Collection Date** | [Date] |
| **Reference Baseline** | [Previous Report Date / Baseline Date] |

---

## 3. Methodology

*Describe the processes, tools, and data sources used to collect and validate patch compliance data. This section provides auditors with assurance that the report is based on reliable and reproducible methods.*

### 3.1 Data Collection Approach

Patch compliance data was collected using the following tools and methods:

| Data Source | Tool / Method | Coverage |
|---|---|---|
| Server patch inventory | [e.g., Microsoft WSUS / SCCM / Ansible] | Windows servers |
| Linux patch inventory | [e.g., Red Hat Satellite / Ansible / Nessus] | Linux/Unix servers |
| Vulnerability scanning | [e.g., Tenable Nessus / Qualys] | All in-scope systems |
| Network device patching | [e.g., Manual review / Cisco DNA Center] | Network infrastructure |
| Endpoint patch status | [e.g., Microsoft Intune / SCCM] | Corporate endpoints |
| EOL data | [e.g., Vendor advisories / CMDB / Manual] | All categories |

### 3.2 Compliance Measurement Criteria

Patch compliance is measured against the deployment timelines defined in the **[Organization Name] Patch Management Policy ([Policy Reference])**, aligned to RMiT Clause 10.17 requirements:

| Criticality Level | Maximum Deployment Timeline | Measurement Basis |
|---|---|---|
| **Critical** | [e.g., 14 calendar days] from patch release | Date of vendor advisory / CVE publication |
| **High** | [e.g., 30 calendar days] from patch release | Date of vendor advisory / CVE publication |
| **Medium** | [e.g., 60 calendar days] from patch release | Date of patch release |
| **Low** | [e.g., 90 calendar days] from patch release | Date of patch release |

### 3.3 Exceptions and Waivers

Exceptions to standard patching timelines are tracked via the **[Change Management System / Exception Register]**. Approved exceptions are excluded from non-compliance counts, provided:

- A formal risk acceptance has been signed by an authorized approver (minimum: [e.g., Head of IT / CISO]).
- Compensating controls are documented and implemented.
- A remediation target date has been committed.

### 3.4 Limitations

*Document any known limitations that may affect the completeness or accuracy of this report.*

- [e.g., "[X] systems were unreachable during the scanning window due to scheduled maintenance. Manual attestation obtained from system owners."]
- [e.g., "Patch data for vendor-managed components relies on vendor self-attestation and has not been independently verified."]

---

## 4. Key Findings and Observations

*Summarize the significant findings from the patch compliance review. Each finding should be factual, supported by data, and linked to a risk rating. Positive observations should also be included to provide a balanced view.*

### 4.1 Summary of Findings

| Finding ID | Category | Description | Risk Rating | Status |
|---|---|---|---|---|
| F-001 | Critical Patch Compliance | [e.g., "2 internet-facing web servers have not received critical patches within the 14-day SLA. Patches are 22 and 31 days overdue respectively."] | Critical | Open |
| F-002 | EOL Technology | [e.g., "Windows Server 2012 R2 identified on 3 production servers without an approved decommission plan or active CSU (Extended Security Updates)."] | High | Open |
| F-003 | Process Improvement | [e.g., "Patch testing cycle for middleware components averaged 18 days, consuming the full SLA window before deployment approval."] | Medium | In Progress |
| F-004 | Positive Observation | [e.g., "Endpoint patch compliance for corporate workstations reached 97.8%, exceeding the internal target of 95%."] | — | Closed |
| F-005 | [Category] | [Description] | [Rating] | [Status] |

### 4.2 Trend Analysis

*Compare the current reporting period against prior periods to identify improvement trends or deteriorating patterns.*

| Metric | Q[N-1] [YYYY] | Q[N] [YYYY] | Variance | Trend |
|---|---|---|---|---|
| Overall Patch Compliance (%) | [XX]% | [XX]% | +/- [X]% | ↑ / ↓ / → |
| Critical Patch Compliance (%) | [XX]% | [XX]% | +/- [X]% | ↑ / ↓ / → |
| Avg. Days to Patch (Critical) | [X] days | [X] days | +/- [X] days | ↑ / ↓ / → |
| Open Exceptions | [Count] | [Count] | +/- [Count] | ↑ / ↓ / → |
| EOL Systems (Active) | [Count] | [Count] | +/- [Count] | ↑ / ↓ / → |

### 4.3 Notable Observations

- **[Observation 1]:** [e.g., "Improvement in Linux server compliance is attributable to the rollout of automated patching via Ansible playbooks completed in [Month YYYY]."]
- **[Observation 2]:** [e.g., "The increase in medium-severity exceptions is driven by a deferred quarterly patching cycle for the core banking system, pending vendor compatibility certification."]
- **[Observation 3]:** [Describe any external factor impacting compliance, e.g., vendor patch release delays, zero-day disclosures, etc.]

---

## 5. Patch Criticality Classification

*This section documents the criticality classification framework applied during the reporting period. Classifications must align with the organization's Patch Management Policy and BNM RMiT Clause 10.17 requirements for risk-based prioritization.*

### 5.1 Criticality Classification Criteria

[Organization Name] classifies patches according to the following criteria, which incorporate vendor severity ratings (e.g., CVSSv3 scores), asset exposure, and exploitability context:

| Criticality Level | CVSSv3 Base Score | Additional Conditions | Deployment SLA |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | *Or* any score where active exploitation is confirmed (CISA KEV / vendor advisory) | [14] calendar days |
| **High** | 7.0 – 8.9 | *Or* patches for internet-facing or payment-critical systems regardless of base score | [30] calendar days |
| **Medium** | 4.0 – 6.9 | Standard internal systems; no confirmed exploitation | [60] calendar days |
| **Low** | 0.1 – 3.9 | Informational / cosmetic; no exploitable vector identified | [90] calendar days |
| **Informational** | 0.0 | Configuration hygiene; not tracked as compliance metric | Best effort |

### 5.2 Classification Override Process

*Document circumstances where the default CVSSv3-based classification may be overridden, and the authorization required.*

Downgrading a patch criticality level (e.g., from Critical to High) requires:

1. A documented technical justification from the [Vulnerability Management Team / Security Operations].
2. Written approval from the [CISO / Head of IT Security].
3. Registration in the **Patch Exception Register** (Appendix C).

Upgrading a patch criticality level may be initiated by any IT Security or IT Operations team member and takes effect immediately upon notification.

### 5.3 Patch Volume by Criticality — Reporting Period

| Criticality | Total Patches Released | Applied Within SLA | Applied Outside SLA | Open / Pending | Excepted |
|---|---|---|---|---|---|
| **Critical** | [Count] | [Count] ([XX]%) | [Count] ([XX]%) | [Count] | [Count] |
| **High** | [Count] | [Count] ([XX]%) | [Count] ([XX]%) | [Count] | [Count] |
| **Medium** | [Count] | [Count] ([XX]%) | [Count] ([XX]%) | [Count] | [Count] |
| **Low** | [Count] | [Count] ([XX]%) | [Count] ([XX]%) | [Count] | [Count] |
| **Total** | [Count] | [Count] ([XX]%) | [Count] ([XX]%) | [Count] | [Count] |

---

## 6. Patch Deployment Compliance Status

*Provide a detailed breakdown of patch deployment status across system categories and environments.*

### 6.1 Compliance by System Category

| System Category | Total Systems | Fully Patched | Partially Patched | Non-Compliant | Compliance Rate |
|---|---|---|---|---|---|
| Windows Servers (Production) | [Count] | [Count] | [Count] | [Count] | [XX]% |
| Linux Servers (Production) | [Count] | [Count] | [Count] | [Count] | [XX]% |
| Network Devices | [Count] | [Count] | [Count] | [Count] | [XX]% |
| Databases | [Count] | [Count] | [Count] | [Count] | [XX]% |
| Middleware / App Servers | [Count] | [Count] | [Count] | [Count] | [XX]% |
| Corporate Endpoints | [Count] | [Count] | [Count] | [Count] | [XX]% |
| Security Appliances | [Count] | [Count] | [Count] | [Count] | [XX]% |
| Cloud Workloads | [Count] | [Count] | [Count] | [Count] | [XX]% |
| **Total** | **[Count]** | **[Count]** | **[Count]** | **[Count]** | **[XX]%** |

### 6.2 Overdue Patch Detail

*List all patches that have exceeded their deployment SLA and are not covered by an approved exception.*

| System Hostname | Asset Owner | Patch / CVE Reference | Criticality | SLA Deadline | Days Overdue | Risk Justification | Remediation Date |
|---|---|---|---|---|---|---|---|
| [Hostname] | [Team / BU] | [CVE-XXXX-XXXX / MS-XXXX] | Critical | [Date] | [XX] | [Brief justification] | [Committed Date] |
| [Hostname] | [Team / BU] | [CVE-XXXX-XXXX] | High | [Date] | [XX] | [Brief justification] | [Committed Date] |
| [Hostname] | [Team / BU] | [Vendor Patch ID] | Medium | [Date] | [XX] | [Brief justification] | [Committed Date] |

### 6.3 Approved Exceptions Summary

| Exception Ref | System / Component | Patch Reference | Criticality | Approved By | Compensating Control | Expiry Date |
|---|---|---|---|---|---|---|
| EX-[YYYY]-[NNN] | [System Name] | [Patch / CVE ID] | [Level] | [Name / Role] | [e.g., WAF rule, network isolation] | [Date] |
| EX-[YYYY]-[NNN] | [System Name] | [Patch / CVE ID] | [Level] | [Name / Role] | [e.g., Increased monitoring] | [Date] |

---

## 7. Testing and Rollback Procedures

*Document the patch testing and rollback framework applied during the reporting period. This section demonstrates to auditors and regulators that patches are applied in a controlled manner consistent with RMiT Clause 10.17 requirements for change and configuration management.*

### 7.1 Patch Testing Framework

[Organization Name] applies a risk-tiered testing approach before deploying patches to production environments:

| Tier | System Risk Classification | Testing Requirements | Minimum Test Duration |
|---|---|---|---|
| **Tier 1 — High Risk** | Core banking, payment systems, internet-facing | Full regression testing in isolated UAT; sign-off from application owner + IT Security | [e.g., 5 business days] |
| **Tier 2 — Medium Risk** | Internal business applications, databases | Functional smoke test in UAT; sign-off from application owner | [e.g., 3 business days] |
| **Tier 3 — Low Risk** | Standard endpoints, non-critical internal tools | Pilot deployment to [X]% of population; monitoring for [X] hours | [e.g., 24–48 hours] |
| **Emergency / Zero-Day** | All classifications | Expedited review; deploy within [4 hours] with post-deployment monitoring | [N/A — expedited] |

### 7.2 Testing Environment Configuration

| Environment | Purpose | Maintained By | Parity with Production |
|---|---|---|---|
| UAT / Pre-Production | Full regression testing for Tier 1 systems | [Infrastructure Team] | [e.g., Full parity maintained monthly] |
| Staging | Integration and smoke testing for Tier 2 | [Infrastructure Team] | [e.g., Approximate parity; data anonymized] |
| Pilot (Canary) Group | Controlled rollout for endpoint patches | [IT Operations] | [e.g., Representative subset of production] |

### 7.3 Patch Testing Outcomes — Reporting Period

| Patch Reference | System Category | Test Environment Used | Test Result | Issues Identified | Resolution |
|---|---|---|---|---|---|
| [CVE / Patch ID] | [e.g., Core Banking] | UAT | Pass | None | Deployed to Production on [Date] |
| [CVE / Patch ID] | [e.g., Windows Servers] | Staging | Fail — Reverted | [e.g., Application compatibility issue] | [e.g., Vendor consulted; patch deferred pending fix] |
| [CVE / Patch ID] | [e.g., Endpoints] | Pilot Group | Pass | [e.g., Minor UI regression, non-critical] | [e.g., Accepted; deployed with known issue] |

### 7.4 Rollback Procedures

All patch deployments must have an approved rollback plan documented in the associated **Change Request (CR)** prior to deployment commencement. The following minimum rollback standards apply:

| Rollback Requirement | Standard |
|---|---|
| **Pre-deployment snapshot / backup** | Required for all Tier 1 and Tier 2 systems. Snapshots retained for minimum [30] days. |
| **Rollback decision authority** | [e.g., On-call Infrastructure Lead] during the change window; [IT Operations Manager] for post-deployment rollbacks. |
| **Maximum rollback time objective** | [e.g., 4 hours] for Tier 1 systems; [8 hours] for Tier 2 systems. |
| **Rollback documentation** | All rollback events must be documented in the Change Management System within [24 hours] of execution. |

### 7.5 Rollback Events — Reporting Period

| Change Reference | Patch / CVE | System | Rollback Reason | Date of Rollback | Redeployment Status |
|---|---|---|---|---|---|
| CR-[XXXX] | [Patch ID] | [System Name] | [e.g., Application performance degradation] | [Date] | [e.g., Redeployed [Date] after vendor fix] |
| CR-[XXXX] | [Patch ID] | [System Name] | [Reason] | [Date] | [Status] |
| *No rollback events recorded during this period.* | | | | | |

---

## 8. End-of-Life (EOL) Technology Register

*This section maintains a current register of all technology assets that have reached or are approaching vendor end-of-life (EOL) / end-of-support (EOS). Active management of EOL technology is a specific requirement under BNM RMiT Clause 10.17. Each identified EOL system must have an approved remediation plan or a documented risk acceptance with compensating controls.*

### 8.1 EOL Technology Register

| Asset ID | System / Component | Version | EOL / EOS Date | Status | Business Owner | IT Owner | Compensating Controls | Remediation Plan | Remediation Target Date | Risk Acceptance Ref |
|---|---|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [e.g., Windows Server 2012 R2] | [R2 SP1] | [14 Oct 2023] | **Past EOL** | [Business Unit] | [Team] | [e.g., Network segmentation, EDR deployed, ESU license acquired] | [e.g., Migration to Windows Server 2022] | [Date] | [RA-2024-XXX] |
| [ASSET-002] | [e.g., Oracle Database 12c] | [12.1.0.2] | [30 Jun 2024] | **Past EOL** | [Business Unit] | [Team] | [e.g., No direct internet exposure; additional DB activity monitoring] | [e.g., Upgrade to Oracle 19c] | [Date] | [RA-2024-XXX] |
| [ASSET-003] | [e.g., Red Hat Enterprise Linux 7] | [7.9] | [30 Jun 2024] | **Past EOL** | [Business Unit] | [Team] | [e.g., ELS subscription active] | [e.g., Migration to RHEL 9] | [Date] | [RA-2024-XXX] |
| [ASSET-004] | [e.g., Apache Tomcat 8.5] | [8.5.x] | [31 Mar 2024] | **Past EOL** | [Business Unit] | [Team] | [e.g., WAF rules applied, application-level controls] | [e.g., Upgrade to Tomcat 10] | [Date] | [RA-2024-XXX] |
| [ASSET-005] | [System approaching EOL] | [Version] | [Future Date] | **Approaching EOL** | [Business Unit] | [Team] | [e.g., N/A — remediation in progress] | [Remediation plan description] | [Date] | [N/A — proactive] |

### 8.2 EOL Risk Summary

| Status | Count | Notes |
|---|---|---|
| **Past EOL — With Approved Risk Acceptance** | [Count] | Compensating controls verified. Risk accepted by [authorized approver level]. |
| **Past EOL — Without Approved Risk Acceptance** | [Count] | **Requires immediate attention.** Escalation to [CISO / IT Risk Committee] required. |
| **Approaching EOL (within 6 months)** | [Count] | Remediation planning in progress. |
| **Approaching EOL (within 12 months)** | [Count] | Advance notice; remediation plans to be initiated. |
| **Total EOL / Near-EOL Systems** | [Count] | |

### 8.3 EOL Remediation Progress

*Track the remediation progress for EOL items carried forward from prior periods.*

| Asset ID | Previous Report Status | Current Report Status | Actions Taken Since Last Report | Next Milestone |
|---|---|---|---|---|
| [ASSET-001] | [e.g., Approaching EOL] | [e.g., Past EOL — Risk Accepted] | [e.g., ESU license procured; migration project kicked off] | [e.g., UAT completion by [Date]] |
| [ASSET-002] | [e.g., Past EOL] | [e.g., Past EOL — Remediated] | [e.g., Database upgrade completed [Date]] | [e.g., Closed] |

---

## 9. Roles and Responsibilities

*This RACI table defines accountability for patch management activities across the organization, consistent with BNM RMiT governance requirements.*

### 9.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | IT Operations Manager | IT Security / Vulnerability Mgmt | System / Application Owners | Change Advisory Board (CAB) | CISO | IT Risk Committee | Internal Audit |
|---|---|---|---|---|---|---|---|
| Define patch management policy | C | R | C | C | A | I | I |
| Patch criticality classification | C | R | C | I | A | I | I |
| Vulnerability scanning and reporting | I | R | I | I | A | I | I |
| Patch testing (Tier 1 / Tier 2) | R | C | A | C | I | I | I |
| Patch deployment scheduling | R | C | A | A | I | I | I |
| Emergency / zero-day patch deployment | R | R | C | I | A | I | I |
| Exception / waiver approval | C | R | A | I | A | I | I |
| EOL technology identification | R | R | C | I | A | I | I |
| EOL risk acceptance | C | C | A | I | A | A | I |
| Patch compliance reporting | R | C | I | I | A | I | I |
| Report review and sign-off | C | C | I | I | A | A | I |
| Regulatory examination readiness | C | C | C | I | A | A | R |

### 9.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| IT Operations Manager (Report Owner) | [Name] | IT Operations | [Email / Extension] |
| Head of IT Security / CISO | [Name] | Information Security | [Email / Extension] |
| Vulnerability Management Lead | [Name] | IT Security | [Email / Extension] |
| Change Management Lead | [Name] | IT Operations | [Email / Extension] |
| IT Risk Manager | [Name] | IT Risk | [Email / Extension] |

---

## 10. Remediation and Action Plan

*Consolidate all open findings, exceptions, and EOL items into a single tracked action plan. Each item must have a named owner and committed remediation date.*

| Action ID | Source | Description | Risk Rating | Responsible Owner | Target Completion Date | Status | Progress Notes |
|---|---|---|---|---|---|---|---|
| ACT-001 | Finding F-001 | [e.g., Apply critical patches to 2 overdue internet-facing web servers] | Critical | [Name / Team] | [Date] | [Open / In Progress] | [e.g., Emergency CR raised; scheduled for [Date]] |
| ACT-002 | Finding F-002 | [e.g., Submit EOL risk acceptance for Windows Server 2012 R2 systems or initiate decommission] | High | [Name / Team] | [Date] | [Open / In Progress] | [e.g., Risk acceptance drafted; pending CISO sign-off] |
| ACT-003 | Finding F-003 | [e.g., Review and optimize middleware patch testing SLA to reduce cycle time] | Medium | [Name / Team] | [Date] | [In Progress] | [e.g., Process review workshop scheduled for [Date]] |
| ACT-004 | Prev. Report | [Carried-forward action from previous period] | [Rating] | [Name / Team] | [Date] | [In Progress / Overdue] | [Progress update] |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Reviewed By | Changes / Description |
|---|---|---|---|---|
| 0.1 | [Date] | [Name] | — | Initial draft |
| 0.2 | [Date] | [Name] | [Name] | Incorporated peer review comments |
| 1.0 | [Date] | [Name] | [Name] | Approved for issue |

### 11.2 Approval Sign-Off

*This report requires formal sign-off from the following stakeholders prior to submission to the IT Risk Committee and filing as a regulatory compliance artifact.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** — IT Operations Manager | [Name] | __________________ | [Date] |
| **Reviewed By** — Head of IT Security / CISO | [Name] | __________________ | [Date] |
| **Reviewed By** — IT Risk Manager | [Name] | __________________ | [Date] |
| **Approved By** — [CTO / CIO / appropriate authority] | [Name] | __________________ | [Date] |

> By signing above, the approving authority confirms that this report accurately reflects the organization's patch compliance posture for the stated reporting period, that all material risks have been identified and are subject to an active remediation plan, and that this document is suitable for submission to the IT Risk Committee.

---

## 12. References

*The following regulatory instruments, internal policies, and standards govern the activities documented in this report.*

| Reference | Document | Relevant Clause(s) |
|---|---|---|
| **BNM RMiT** | Bank Negara Malaysia — Risk Management in Technology Policy Document (BNM/RH/PD 028-2) | **Clause 10.17** — Patch Management |
| **BNM RMiT** | Bank Negara Malaysia — Risk Management in Technology Policy Document | Clause 10.16 — Vulnerability Management |
| **BNM RMiT** | Bank Negara Malaysia — Risk Management in Technology Policy Document | Clause 10.14 — Change Management |
| **Internal Policy** | [Organization Name] Patch Management Policy | [Policy Reference / Version] |
| **Internal Policy** | [Organization Name] Vulnerability Management Policy | [Policy Reference / Version] |
| **Internal Policy** | [Organization Name] Change Management Policy | [Policy Reference / Version] |
| **Internal Policy** | [Organization Name] Information Security Policy | [Policy Reference / Version] |
| **Internal Policy** | [Organization Name] IT Risk Management Framework | [Framework Reference / Version] |
| **Standard** | NIST SP 800-40 Rev. 4 — Guide to Enterprise Patch Management Planning | All |
| **Standard** | ISO/IEC 27001:2022 | A.8.8 — Management of Technical Vulnerabilities |

---

## 13. Appendices

### Appendix A — Full Patch Inventory

*Attach or reference the complete patch inventory extract from the patch management tool for the reporting period. The inventory should include all patches assessed, their criticality, deployment status, and timestamps.*

> **Reference:** [Link to patch management system report / attached spreadsheet: `[Organization Name]_Patch_Inventory_[Quarter]_[YYYY].xlsx`]

| Hostname | IP Address | OS / Component | Patch KB / CVE | Criticality | Release Date | SLA Deadline | Deployment Date | Status |
|---|---|---|---|---|---|---|---|---|
| [Hostname] | [IP] | [OS/Version] | [Patch ID] | [Level] | [Date] | [Date] | [Date] | [Compliant / Non-Compliant / Excepted] |

---

### Appendix B — Vulnerability Scan Reports

*Provide reference to the authenticated vulnerability scan reports that underpin the findings in this document.*

| Scan Reference | Scan Date | Tool Used | Scope | Report Location |
|---|---|---|---|---|
| SCAN-[YYYY]-[NNN] | [Date] | [e.g., Nessus / Qualys] | [e.g., All production servers] | [Secure document store path / link] |
| SCAN-[YYYY]-[NNN] | [Date] | [e.g., Nessus] | [e.g., Network infrastructure] | [Secure document store path / link] |

---

### Appendix C — Patch Exception Register

*Full register of all active and expired patch exceptions. Each exception must be reviewed at the time of report preparation to confirm continued validity and that compensating controls remain effective.*

| Exception Ref | System / Component | Patch / CVE | Criticality | Date Raised | Approved By | Compensating Controls | Expiry Date | Status | Review Notes |
|---|---|---|---|---|---|---|---|---|---|
| EX-[YYYY]-001 | [System] | [Patch / CVE] | [Level] | [Date] | [Name / Role] | [Controls] | [Date] | [Active / Expired] | [Notes] |

---

### Appendix D — EOL Technology Detail

*Supplementary technical detail for each EOL/EOS system listed in Section 8, including vendor advisory references and detailed compensating control descriptions.*

| Asset ID | System | EOL Advisory Reference | Extended Support Available | Compensating Control Detail | Risk Acceptance Owner | Last Review Date |
|---|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [Vendor URL / Advisory ID] | [Yes — ESU / No] | [Detailed description of all compensating controls, e.g., network zone isolation, additional logging, EDR agent version, WAF rules applied] | [Name / Role] | [Date] |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and financial regulator of Malaysia |
| **CISO** | Chief Information Security Officer |
| **CMDB** | Configuration Management Database |
| **CVE** | Common Vulnerabilities and Exposures — a publicly disclosed cybersecurity vulnerability |
| **CVSS** | Common Vulnerability Scoring System — a framework for rating the severity of security vulnerabilities |
| **EOL / EOS** | End-of-Life / End-of-Support — the date after which a vendor no longer provides security patches or support |
| **ESU / ELS** | Extended Security Updates / Extended Lifecycle Support — paid support programs available after standard EOL |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk in Malaysian financial institutions |
| **SLA** | Service Level Agreement — in this context, the maximum permitted time to deploy a patch |
| **UAT** | User Acceptance Testing — a testing environment used to validate changes before production deployment |
| **WAF** | Web Application Firewall |

---

*End of Document*

---

> **Document Control Notice:** This document is subject to quarterly review. The IT Operations Manager is responsible for ensuring this template remains current with applicable regulatory requirements. Any changes to BNM RMiT requirements or internal policy that affect the content of this report must be reflected within [30] days of the effective date of such changes.