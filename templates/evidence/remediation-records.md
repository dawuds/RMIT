# Remediation Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Document Classification Notice:** This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of regulatory obligations under Bank Negara Malaysia (BNM) guidelines and the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Framework](#2-regulatory-and-policy-framework)
3. [Remediation Objectives and Scope](#3-remediation-objectives-and-scope)
4. [Findings Register](#4-findings-register)
5. [Remediation Actions and Milestones](#5-remediation-actions-and-milestones)
6. [Accountable Owners](#6-accountable-owners)
7. [Target Completion Dates and Scheduling](#7-target-completion-dates-and-scheduling)
8. [Resource Requirements](#8-resource-requirements)
9. [Progress Tracking Mechanism](#9-progress-tracking-mechanism)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Escalation and Exception Management](#11-escalation-and-exception-management)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document and its role within the organization's technology risk management lifecycle.*

This document serves as the official **Remediation Record** for [Organization Name] in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically Clause **10.7**. It provides a structured, auditable record of all remediation activities undertaken in response to **Critical** and **High** severity findings identified through vulnerability assessments, penetration testing, audits, security reviews, or any other assurance activity conducted prior to the release or deployment of technology systems, applications, or infrastructure.

The primary purposes of this record are to:

- Demonstrate that [Organization Name] has identified, acknowledged, and acted upon Critical and High findings in a timely and controlled manner.
- Provide regulators, internal auditors, and senior management with transparent evidence of remediation progress and closure.
- Ensure accountability is assigned and maintained throughout the remediation lifecycle.
- Support release governance by confirming that all mandatory remediation conditions have been satisfied prior to production deployment.
- Establish a continuous improvement loop by capturing lessons learned from each remediation cycle.

### 1.2 Scope

*Define the systems, projects, assessments, or events to which this remediation record applies.*

This Remediation Record applies to:

| Scope Dimension | Details |
|---|---|
| **System / Application / Project** | [System Name / Project Name / Assessment Subject] |
| **Assessment Type** | [e.g., Penetration Test / Vulnerability Assessment / Internal Audit / External Audit / BNM Examination] |
| **Assessment Reference** | [Assessment Report Reference Number] |
| **Assessment Conducted By** | [Internal Team / Third-Party Vendor Name] |
| **Assessment Period** | [Start Date] to [End Date] |
| **Environment(s) Covered** | [e.g., Production / UAT / Staging / Development] |
| **Applicable Business Units** | [List of Departments / Business Units] |
| **Planned Release / Deployment Date** | [Target Release Date] |
| **Remediation Record Period** | [Record Start Date] to [Record End Date] |

**Out of Scope:**

*List any items explicitly excluded from this remediation record.*

- [Out of Scope Item 1 — e.g., Low and Informational severity findings addressed separately under standard patch management]
- [Out of Scope Item 2 — e.g., Third-party vendor environments not under direct control of [Organization Name]]
- [Out of Scope Item 3]

---

## 2. Regulatory and Policy Framework

### 2.1 Regulatory Basis

*Summarize the regulatory obligations that mandate the creation and maintenance of remediation records.*

This document is prepared in fulfilment of [Organization Name]'s obligations under the following regulatory instruments:

| Regulation / Policy | Issuing Authority | Applicable Clause / Section | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.7 | Remediation of Critical and High findings must be completed prior to release; evidence of remediation must be maintained |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.1 – 10.6 | Technology risk identification, assessment, and treatment obligations |
| [Internal IT Security Policy] | [Organization Name] | [Section Reference] | Internal policy alignment |
| [Internal Patch and Vulnerability Management Policy] | [Organization Name] | [Section Reference] | Vulnerability management standards |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Communications and Multimedia Malaysia | [Relevant Sections] | Data protection implications of security vulnerabilities |

### 2.2 Internal Policy Alignment

*Reference any internal policies, standards, or procedures that govern the remediation process.*

This record aligns with the following internal governance documents:

- **[Organization Name] Information Security Policy** — Version [X.X], dated [Date]
- **[Organization Name] Vulnerability and Patch Management Standard** — Version [X.X], dated [Date]
- **[Organization Name] Technology Risk Management Framework** — Version [X.X], dated [Date]
- **[Organization Name] Change Management Policy** — Version [X.X], dated [Date]
- **[Organization Name] Release Management Procedure** — Version [X.X], dated [Date]

---

## 3. Remediation Objectives and Scope

### 3.1 Remediation Objectives

*State the specific goals this remediation effort is designed to achieve, aligned with BNM RMiT Clause 10.7 obligations.*

The objectives of this remediation exercise are as follows:

1. **Eliminate Critical and High Risk Exposure:** Ensure all findings rated **Critical** or **High** severity are fully remediated, mitigated, or formally accepted with compensating controls before any production release or deployment.

2. **Regulatory Compliance:** Demonstrate compliance with BNM RMiT Clause 10.7 requirements, ensuring audit-ready evidence is maintained throughout the remediation lifecycle.

3. **Release Gate Enforcement:** Confirm that no Critical findings and no unmitigated High findings remain open at the time of the scheduled release at [Planned Release Date].

4. **Accountability and Traceability:** Assign clear ownership for each finding and maintain an auditable chain of custody for all remediation activities.

5. **Risk Reduction:** Reduce the overall technology risk profile of [System/Project Name] to an acceptable level as defined by [Organization Name]'s risk appetite.

6. **Continuous Improvement:** Capture lessons learned to strengthen future development, testing, and assessment processes.

### 3.2 Severity Classification Criteria

*Define the severity classification scheme used in this record to ensure consistent interpretation of findings.*

| Severity | Definition | Remediation Requirement | Maximum Acceptable Age at Release |
|---|---|---|---|
| **Critical** | Immediate threat; exploitation is trivial or may have already occurred; potential for significant financial loss, reputational damage, or regulatory breach | Must be fully remediated before release; no exceptions without Board/EXCO approval | 0 days — must be resolved |
| **High** | Significant risk; exploitation is feasible; could result in material impact to confidentiality, integrity, or availability | Must be fully remediated or formally accepted with compensating controls before release | [e.g., 30 days from identification] |
| **Medium** | Moderate risk; exploitation requires specific conditions; limited impact if exploited | Remediation recommended within [e.g., 90 days]; may be deferred with documented justification | N/A — not a release gate |
| **Low** | Minor risk; limited exploitability and impact | Remediation within [e.g., 180 days] or accepted as residual risk | N/A — not a release gate |
| **Informational** | No direct risk; advisory or best-practice recommendation | Address in next scheduled improvement cycle | N/A |

### 3.3 Remediation Scope Statement

*Provide a narrative description of what this specific remediation effort covers.*

This remediation record covers [total number] findings identified in [Assessment Report Reference], comprising:

- **Critical Findings:** [Number]
- **High Findings:** [Number]
- **Total Findings in Scope:** [Number]

The remediation effort encompasses [System/Application Name] deployed within [Environment], owned by the [Department Name] business unit, and operated by the [IT Operations / Technology Division] team under the accountability of [Relevant Department Head Name and Title].

---

## 4. Findings Register

### 4.1 Critical Findings Register

*List all Critical severity findings identified in the assessment. Each finding must have a unique identifier, clear description, and reference to the source assessment report.*

| Finding ID | Finding Title | Description | Affected Component | CVSS Score | CWE / CVE Reference | Source Report Ref | Date Identified | Status |
|---|---|---|---|---|---|---|---|---|
| CRIT-001 | [Finding Title] | [Brief description of the vulnerability or finding] | [Affected system, component, or process] | [e.g., 9.8] | [CWE-XXX / CVE-XXXX-XXXXX] | [Report Ref] | [DD/MM/YYYY] | [Open / In Progress / Closed] |
| CRIT-002 | [Finding Title] | [Brief description] | [Affected component] | [Score] | [Reference] | [Report Ref] | [DD/MM/YYYY] | [Status] |
| CRIT-003 | [Finding Title] | [Brief description] | [Affected component] | [Score] | [Reference] | [Report Ref] | [DD/MM/YYYY] | [Status] |

### 4.2 High Findings Register

*List all High severity findings. Include the same level of detail as Critical findings.*

| Finding ID | Finding Title | Description | Affected Component | CVSS Score | CWE / CVE Reference | Source Report Ref | Date Identified | Status |
|---|---|---|---|---|---|---|---|---|
| HIGH-001 | [Finding Title] | [Brief description of the vulnerability or finding] | [Affected system, component, or process] | [e.g., 7.5] | [CWE-XXX / CVE-XXXX-XXXXX] | [Report Ref] | [DD/MM/YYYY] | [Open / In Progress / Closed] |
| HIGH-002 | [Finding Title] | [Brief description] | [Affected component] | [Score] | [Reference] | [Report Ref] | [DD/MM/YYYY] | [Status] |
| HIGH-003 | [Finding Title] | [Brief description] | [Affected component] | [Score] | [Reference] | [Report Ref] | [DD/MM/YYYY] | [Status] |
| HIGH-004 | [Finding Title] | [Brief description] | [Affected component] | [Score] | [Reference] | [Report Ref] | [DD/MM/YYYY] | [Status] |
| HIGH-005 | [Finding Title] | [Brief description] | [Affected component] | [Score] | [Reference] | [Report Ref] | [DD/MM/YYYY] | [Status] |

### 4.3 Findings Summary Dashboard

*Provide an at-a-glance summary of remediation status across all in-scope findings.*

| Metric | Critical | High | Total |
|---|---|---|---|
| **Total Findings Identified** | [#] | [#] | [#] |
| **Open** | [#] | [#] | [#] |
| **In Progress** | [#] | [#] | [#] |
| **Pending Verification** | [#] | [#] | [#] |
| **Closed / Remediated** | [#] | [#] | [#] |
| **Risk Accepted (with compensating controls)** | [#] | [#] | [#] |
| **Deferred (with approval)** | [#] | [#] | [#] |
| **% Complete** | [%] | [%] | [%] |

**Overall Remediation Status:** [On Track / At Risk / Behind Schedule]

**Release Clearance Status:** [CLEARED / NOT CLEARED — [Number] Critical/High findings remain open]

---

## 5. Remediation Actions and Milestones

### 5.1 Detailed Remediation Action Plans

*For each Critical and High finding, provide a detailed action plan specifying the remediation approach, individual steps, and milestones. Replicate this subsection for each finding.*

---

#### 5.1.1 Finding CRIT-001: [Finding Title]

*Document the specific remediation actions, technical approach, and phased milestones for this finding.*

**Finding Summary:**

| Field | Details |
|---|---|
| **Finding ID** | CRIT-001 |
| **Severity** | Critical |
| **Affected Component** | [System / Module / Service] |
| **Root Cause** | [Brief root cause description] |
| **Business Impact** | [Describe potential business impact if unexploited] |
| **Remediation Approach** | [Full Remediation / Compensating Control / Risk Acceptance] |
| **Accountable Owner** | [Name, Title, Department] |

**Remediation Action Steps:**

| Step # | Action Description | Responsible Party | Start Date | Target Completion | Actual Completion | Status |
|---|---|---|---|---|---|---|
| 1 | [e.g., Identify all instances of the vulnerable component across environments] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Not Started / In Progress / Complete] |
| 2 | [e.g., Develop and test the patch or code fix in development environment] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Status] |
| 3 | [e.g., Conduct peer review and security validation of the fix] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Status] |
| 4 | [e.g., Deploy fix to UAT and conduct regression testing] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Status] |
| 5 | [e.g., Obtain sign-off from security team on remediation effectiveness] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Status] |
| 6 | [e.g., Deploy fix to production via change management process] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Status] |
| 7 | [e.g., Conduct post-deployment verification and close finding] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Status] |

**Milestones:**

| Milestone | Target Date | Achieved Date | Notes |
|---|---|---|---|
| Root Cause Confirmed | [DD/MM/YYYY] | [DD/MM/YYYY] | [Notes] |
| Fix Developed | [DD/MM/YYYY] | [DD/MM/YYYY] | [Notes] |
| Fix Validated in UAT | [DD/MM/YYYY] | [DD/MM/YYYY] | [Notes] |
| Fix Deployed to Production | [DD/MM/YYYY] | [DD/MM/YYYY] | [Notes] |
| Finding Closed | [DD/MM/YYYY] | [DD/MM/YYYY] | [Notes] |

**Closure Evidence:**

| Evidence Item | Description | Location / Reference | Date Captured |
|---|---|---|---|
| [e.g., Retest report] | [Third-party retest confirming vulnerability is no longer present] | [Document reference or file path] | [DD/MM/YYYY] |
| [e.g., Screenshot / scan output] | [Automated scan output showing clean result] | [Document reference] | [DD/MM/YYYY] |
| [e.g., Change record] | [Approved change record for production deployment] | [Change ID] | [DD/MM/YYYY] |

---

#### 5.1.2 Finding HIGH-001: [Finding Title]

*Replicate the structure from Section 5.1.1 for each High finding. Complete one subsection per finding.*

**Finding Summary:**

| Field | Details |
|---|---|
| **Finding ID** | HIGH-001 |
| **Severity** | High |
| **Affected Component** | [System / Module / Service] |
| **Root Cause** | [Brief root cause description] |
| **Business Impact** | [Describe potential business impact] |
| **Remediation Approach** | [Full Remediation / Compensating Control / Risk Acceptance] |
| **Accountable Owner** | [Name, Title, Department] |

**Remediation Action Steps:**

| Step # | Action Description | Responsible Party | Start Date | Target Completion | Actual Completion | Status |
|---|---|---|---|---|---|---|
| 1 | [Action description] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Status] |
| 2 | [Action description] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Status] |
| 3 | [Action description] | [Name / Team] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Status] |

**Milestones:**

| Milestone | Target Date | Achieved Date | Notes |
|---|---|---|---|
| Root Cause Confirmed | [DD/MM/YYYY] | [DD/MM/YYYY] | [Notes] |
| Fix Developed | [DD/MM/YYYY] | [DD/MM/YYYY] | [Notes] |
| Fix Validated in UAT | [DD/MM/YYYY] | [DD/MM/YYYY] | [Notes] |
| Fix Deployed to Production | [DD/MM/YYYY] | [DD/MM/YYYY] | [Notes] |
| Finding Closed | [DD/MM/YYYY] | [DD/MM/YYYY] | [Notes] |

**Closure Evidence:**

| Evidence Item | Description | Location / Reference | Date Captured |
|---|---|---|---|
| [Evidence type] | [Description] | [Reference] | [DD/MM/YYYY] |

---

> **Note to Authors:** Replicate Sections 5.1.1 and 5.1.2 for each individual Critical and High finding identified in Section 4. Each finding must have its own dedicated subsection with a complete action plan, milestones, and closure evidence before this record can be approved for release.

---

### 5.2 Consolidated Milestone Schedule

*Provide a high-level Gantt-style milestone view across all Critical and High findings for programme management visibility.*

| Finding ID | Severity | Milestone: Root Cause Confirmed | Milestone: Fix Developed | Milestone: UAT Validated | Milestone: Production Deployed | Milestone: Closed | Release Gate Met? |
|---|---|---|---|---|---|---|---|
| CRIT-001 | Critical | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Yes / No / Pending] |
| CRIT-002 | Critical | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Yes / No / Pending] |
| HIGH-001 | High | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Yes / No / Pending] |
| HIGH-002 | High | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Yes / No / Pending] |
| HIGH-003 | High | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Yes / No / Pending] |

---

## 6. Accountable Owners

### 6.1 Ownership Assignment

*Assign clear ownership for each finding and for the overall remediation programme. Accountability must be traceable to named individuals and their organizational roles.*

| Finding ID | Severity | Accountable Owner (Name) | Title / Role | Department | Email | Escalation Contact | Date Assigned |
|---|---|---|---|---|---|---|---|
| CRIT-001 | Critical | [Full Name] | [Title] | [Department] | [email@organization.com] | [Escalation Contact Name] | [DD/MM/YYYY] |
| CRIT-002 | Critical | [Full Name] | [Title] | [Department] | [email@organization.com] | [Escalation Contact Name] | [DD/MM/YYYY] |
| HIGH-001 | High | [Full Name] | [Title] | [Department] | [email@organization.com] | [Escalation Contact Name] | [DD/MM/YYYY] |
| HIGH-002 | High | [Full Name] | [Title] | [Department] | [email@organization.com] | [Escalation Contact Name] | [DD/MM/YYYY] |
| HIGH-003 | High | [Full Name] | [Title] | [Department] | [email@organization.com] | [Escalation Contact Name] | [DD/MM/YYYY] |
| HIGH-004 | High | [Full Name] | [Title] | [Department] | [email@organization.com] | [Escalation Contact Name] | [DD/MM/YYYY] |
| HIGH-005 | High | [Full Name] | [Title] | [Department] | [email@organization.com] | [Escalation Contact Name] | [DD/MM/YYYY] |

### 6.2 Programme-Level Ownership

*Identify the individuals responsible for overseeing the overall remediation programme, not just individual findings.*

| Role | Name | Title | Contact |
|---|---|---|---|
| **Remediation Programme Sponsor** | [Name] | [e.g., Chief Information Officer / Chief Information Security Officer] | [Email] |
| **Remediation Programme Manager** | [Name] | [e.g., IT Security Manager / Project Manager] | [Email] |
| **Technical Lead** | [Name] | [e.g., Lead Security Engineer] | [Email] |
| **Release Manager** | [Name] | [e.g., IT Operations Manager] | [Email] |
| **Compliance / Risk Officer** | [Name] | [e.g., Technology Risk Manager] | [Email] |
| **Approving Authority (Relevant Department Head)** | [Name] | [Relevant Department Head Title] | [Email] |

### 6.3 Ownership Acknowledgement

*All accountable owners must formally acknowledge their responsibilities by signing below.*

| Finding ID | Owner Name | Acknowledgement Date | Signature |
|---|---|---|---|
| CRIT-001 | [Name] | [DD/MM/YYYY] | ___________________________ |
| CRIT-002 | [Name] | [DD/MM/YYYY] | ___________________________ |
| HIGH-001 | [Name] | [DD/MM/YYYY] | ___________________________ |
| HIGH-002 | [Name] | [DD/MM/YYYY] | ___________________________ |
| HIGH-003 | [Name] | [DD/MM/YYYY] | ___________________________ |

---

## 7. Target Completion Dates and Scheduling

### 7.1 Remediation Scheduling Framework

*Describe the scheduling principles applied to determine target completion dates, referencing internal SLAs and BNM RMiT requirements.*

Target completion dates for all remediation activities are determined based on the following factors:

- **Severity SLA:** [Organization Name] mandates that Critical findings are remediated within **[e.g., 14 calendar days]** of identification and High findings within **[e.g., 30 calendar days]**, consistent with the vulnerability management SLAs defined in [Vulnerability Management Policy Reference].
- **Release Gate Requirement:** Per BNM RMiT Clause 10.7, all Critical and High findings must be remediated before the planned release date of **[Planned Release Date]**.
- **Dependency Constraints:** Certain remediation tasks are dependent on third-party vendors, change windows, or inter-system dependencies, which are reflected in the individual action plans in Section 5.
- **Resource Availability:** Target dates account for the resource availability detailed in Section 8.

### 7.2 Master Remediation Schedule

*Provide the consolidated target completion and actual completion dates for all Critical and High findings.*

| Finding ID | Severity | Date Identified | SLA Deadline | Target Completion Date | Revised Target Date (if applicable) | Actual Completion Date | Days Overdue (if applicable) | Status |
|---|---|---|---|---|---|---|---|---|
| CRIT-001 | Critical | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or N/A] | [DD/MM/YYYY or Pending] | [# or N/A] | [Status] |
| CRIT-002 | Critical | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or N/A] | [DD/MM/YYYY or Pending] | [# or N/A] | [Status] |
| HIGH-001 | High | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or N/A] | [DD/MM/YYYY or Pending] | [# or N/A] | [Status] |
| HIGH-002 | High | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or N/A] | [DD/MM/YYYY or Pending] | [# or N/A] | [Status] |
| HIGH-003 | High | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or N/A] | [DD/MM/YYYY or Pending] | [# or N/A] | [Status] |
| HIGH-004 | High | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or N/A] | [DD/MM/YYYY or Pending] | [# or N/A] | [Status] |
| HIGH-005 | High | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or N/A] | [DD/MM/YYYY or Pending] | [# or N/A] | [Status] |

### 7.3 Date Revision Log

*Document any revisions to originally agreed target completion dates, including the justification and approving authority for each revision.*

| Finding ID | Original Target Date | Revised Target Date | Reason for Revision | Approved By | Approval Date |
|---|---|---|---|---|---|
| [Finding ID] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Justification for date change] | [Approver Name and Title] | [DD/MM/YYYY] |
| [Finding ID] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Justification] | [Approver Name and Title] | [DD/MM/YYYY] |

---

## 8. Resource Requirements

### 8.1 Human Resource Requirements

*Identify the personnel required to execute the remediation activities, including internal and external resources.*

| Resource | Role in Remediation | Estimated Effort (Days) | Availability | Department / Vendor | Confirmed (Y/N) |
|---|---|---|---|---|---|
| [Name / Role] | [e.g., Lead developer responsible for code-level fixes for CRIT-001, CRIT-002] | [# days] | [Start Date – End Date] | [Department / Vendor Name] | [Y / N] |
| [Name / Role] | [e.g., Security engineer for vulnerability verification and retesting] | [# days] | [Start Date – End Date] | [Department] | [Y / N] |
| [Name / Role] | [e.g., Infrastructure engineer for patching and configuration changes] | [# days] | [Start Date – End Date] | [Department] | [Y / N] |
| [Name / Role] | [e.g., QA engineer for regression and UAT testing] | [# days] | [Start Date – End Date] | [Department] | [Y / N] |
| [Name / Role] | [e.g., Third-party penetration tester for retest validation] | [# days] | [Start Date – End Date] | [Vendor Name] | [Y / N] |
| [Name / Role] | [e.g., Project manager for programme coordination] | [# days] | [Start Date – End Date] | [Department] | [Y / N] |

### 8.2 Technology and Tool Requirements

*List the technology resources, tools, and environments required to execute remediation activities.*

| Resource Type | Description | Purpose | Availability Confirmed | Notes |
|---|---|---|---|---|
| **Development Environment** | [e.g., Development server — [server name/IP]] | Code fix development and unit testing | [Y / N] | [Notes] |
| **UAT Environment** | [e.g., UAT environment — [environment name]] | Integration and regression testing of fixes | [Y / N] | [Notes] |
| **Scanning Tools** | [e.g., Nessus / Qualys / Burp Suite Professional] | Automated verification of vulnerability remediation | [Y / N] | [Notes] |
| **Change Management System** | [e.g., ServiceNow / Jira] | Logging and approving production change requests | [Y / N] | [Notes] |
| **Source Code Repository** | [e.g., GitLab / GitHub Enterprise] | Version control for code fixes | [Y / N] | [Notes] |
| **CI/CD Pipeline** | [e.g., Jenkins / GitLab CI] | Automated build, test, and deployment | [Y / N] | [Notes] |

### 8.3 Budget Requirements

*Identify any budget allocations required for external resources, tools, or services related to remediation.*

| Budget Item | Description | Estimated Cost (MYR) | Budget Approved By | Approval Reference |
|---|---|---|---|---|
| [e.g., Third-party retest] | [Retest by original penetration testing vendor to validate Critical finding closures] | [MYR Amount] | [Approver Name] | [PO / Budget Reference] |
| [e.g., Software licensing] | [Additional tool licensing for remediation support] | [MYR Amount] | [Approver Name] | [Reference] |
| [e.g., Overtime / contractor] | [Additional resource support for critical remediation timeline] | [MYR Amount] | [Approver Name] | [Reference] |
| **Total Estimated Budget** | | **[MYR Total]** | | |

### 8.4 Resource Constraints and Risks

*Document any resource constraints that may affect remediation timelines and the mitigating actions in place.*

| Constraint | Impact | Affected Findings | Mitigation |
|---|---|---|---|
| [e.g., Key developer on annual leave from [Date] to [Date]] | Delay to CRIT-001 fix development | CRIT-001 | [e.g., Backup developer [Name] assigned; knowledge transfer completed on [Date]] |
| [e.g., Change freeze period [Date] to [Date] for [event]] | Delay to production deployment | All findings | [e.g., All fixes deployed before change freeze; release date adjusted accordingly] |
| [e.g., Third-party vendor retest window availability] | Delay to formal closure verification | CRIT-001, HIGH-002 | [e.g., Retest booked for [Date]; interim controls documented] |

---

## 9. Progress Tracking Mechanism

### 9.1 Tracking and Governance Framework

*Describe how remediation progress is monitored, reported, and governed throughout the remediation lifecycle.*

[Organization Name] employs the following mechanisms to track and govern the progress of remediation activities against Critical and High findings:

**Tracking Tools:**

- **Primary Tracking System:** [e.g., Jira / ServiceNow / Microsoft Project / SharePoint] — Reference: [Project/Ticket Link or Reference]
- **Document Repository:** [e.g., SharePoint / Confluence] — Path: [URL or file path]
- **Reporting Dashboard:** [e.g., PowerBI / Jira Dashboard] — Reference: [Dashboard Name / Link]

**Governance Cadence:**

| Forum | Frequency | Attendees | Purpose |
|---|---|---|---|
| Remediation Working Group | [e.g., Weekly] | [Technical leads, security team, owners] | Technical progress review, blocker resolution |
| Remediation Steering Update | [e.g., Bi-weekly] | [Department heads, CISO, programme manager] | Programme-level status, escalation decisions |
| Release Go/No-Go Review | [Once, prior to release] | [Release manager, CISO, department head, CIO] | Final clearance decision for production release |
| Quarterly Compliance Review | [Quarterly] | [CIO, CISO, Risk Officer, Compliance] | Regulatory standing review; BNM RMiT alignment |

### 9.2 Status Definitions

*Define the status values used in this record to ensure consistent tracking.*

| Status | Definition |
|---|---|
| **Not Started** | Remediation activities have not yet commenced |
| **In Progress** | Active remediation work is underway |
| **Pending Verification** | Fix has been implemented and is awaiting formal verification / retest |
| **Closed — Remediated** | Finding has been fully remediated and verified; closure evidence documented |
| **Closed — Risk Accepted** | Residual risk formally accepted with documented compensating controls and approvals |
| **Closed — Deferred** | Remediation deferred beyond release with formal approval and scheduled resolution date |
| **Escalated** | Remediation is behind schedule or blocked; escalated to steering committee |

### 9.3 Progress Update Log

*Record all material progress updates against each finding. This log serves as the audit trail for the remediation lifecycle.*

| Log Date | Finding ID | Update Description | Updated By | Status Change | Next Action |
|---|---|---|---|---|---|
| [DD/MM/YYYY] | CRIT-001 | [e.g., Root cause analysis complete; fix development commenced] | [Name] | Not Started → In Progress | [e.g., Complete fix development by DD/MM/YYYY] |
| [DD/MM/YYYY] | CRIT-001 | [e.g., Fix developed and unit tested; deployed to UAT] | [Name] | In Progress → In Progress | [e.g., UAT regression testing by DD/MM/YYYY] |
| [DD/MM/YYYY] | CRIT-001 | [e.g., UAT regression testing complete; security team sign-off obtained] | [Name] | In Progress → Pending Verification | [e.g., Deploy to production via Change Record CR-XXXX on DD/MM/YYYY] |
| [DD/MM/YYYY] | HIGH-001 | [e.g., Remediation update] | [Name] | [Status change] | [Next action] |
| [DD/MM/YYYY] | HIGH-002 | [e.g., Remediation update] | [Name] | [Status change] | [Next action] |

### 9.4 Release Readiness Assessment

*Prior to any production release, complete this assessment to confirm all release gate criteria have been met.*

| Release Gate Criterion | Requirement | Status | Evidence Reference | Assessed By | Assessment Date |
|---|---|---|---|---|---|
| All Critical findings remediated | Zero open Critical findings | [Met / Not Met] | [Evidence reference] | [Name] | [DD/MM/YYYY] |
| All High findings remediated or formally accepted | Zero unmitigated High findings at release | [Met / Not Met] | [Evidence reference] | [Name] | [DD/MM/YYYY] |
| Closure evidence documented for all closed findings | Evidence on file per Section 5 | [Met / Not Met] | [Evidence reference] | [Name] | [DD/MM/YYYY] |
| Risk acceptance approved (if applicable) | Formal approval from [Approver title] | [Met / Not Met / N/A] | [Evidence reference] | [Name] | [DD/MM/YYYY] |
| Retest conducted (if required) | Formal retest report on file | [Met / Not Met / N/A] | [Evidence reference] | [Name] | [DD/MM/YYYY] |
| Remediation record approved | Sign-off from Department Head obtained | [Met / Not Met] | [Evidence reference] | [Name] | [DD/MM/YYYY] |

**Release Clearance Decision:**

- **Decision:** [APPROVED FOR RELEASE / NOT APPROVED — Conditions outstanding]
- **Decision Made By:** [Name, Title]
- **Decision Date:** [DD/MM/YYYY]
- **Conditions (if any):** [List any conditions attached to release approval, or state "None"]

---

## 10. Roles and Responsibilities

### 10.1 RACI Matrix

*The following RACI matrix defines accountability for all key activities in the remediation lifecycle. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Relevant Department Head | CISO / Head of Technology Risk | Technical Lead / Security Engineer | Finding Owner | Release Manager | Compliance / Risk Officer | Internal Audit | CIO / CTO |
|---|---|---|---|---|---|---|---|---|
| Initiate remediation programme | A | C | R | I | I | C | I | I |
| Assign finding ownership | A | C | R | I | I | I | I | I |
| Develop remediation action plans | C | C | R | R | I | I | I | I |
| Allocate resources and budget | A | C | C | I | I | I | I | C |
| Execute remediation activities | I | I | R | R | I | I | I | I |
| Track and report progress | A | C | R | R | C | C | I | I |
| Conduct internal verification | C | A | R | I | I | I | C | I |
| Arrange third-party retest | C | A | R | I | I | I | C | I |
| Review and accept risk (where applicable) | A | R | C | C | I | C | C | C |
| Approve closure of findings | A | R | C | C | I | C | I | I |
| Complete release readiness assessment | A | C | R | R | R | C | I | I |
| Approve production release | C | C | C | I | R | C | I | A |
| Maintain and archive remediation records | C | A | C | I | I | R | I | I |
| Report status to Board / EXCO | I | R | I | I | I | C | C | A |
| Submit evidence to BNM / regulators (if required) | C | C | I | I | I | A | C | C |

### 10.2 Responsibility Descriptions

*Provide a brief description of each role's responsibilities within the remediation process.*

| Role | Responsibility Description |
|---|---|
| **Relevant Department Head** | Ultimate accountable owner for remediation completion within their department's domain; approves remediation plans, resource allocation, and risk acceptance decisions; provides sign-off on this record |
| **CISO / Head of Technology Risk** | Oversees the security and risk dimensions of the remediation programme; approves finding closure; ensures BNM RMiT Clause 10.7 obligations are met; manages escalations |
| **Technical Lead / Security Engineer** | Leads technical execution of remediation activities; verifies fix effectiveness; coordinates retesting; maintains the progress tracking log |
| **Finding Owner** | Directly responsible for executing the remediation of assigned findings within agreed timelines; provides progress updates; escalates blockers promptly |
| **Release Manager** | Manages the release process and enforces the release gate; ensures no release proceeds without confirmed remediation clearance |
| **Compliance / Risk Officer** | Ensures regulatory compliance and policy alignment; maintains the formal remediation record; supports regulatory submissions |
| **Internal Audit** | Independent review of remediation evidence; validates that closure criteria have been met; provides assurance to the Board |
| **CIO / CTO** | Provides executive sponsorship; approves production release; accountable for overall technology risk posture |

---

## 11. Escalation and Exception Management

### 11.1 Escalation Triggers

*Define the conditions under which remediation issues must be escalated to senior management.*

The following conditions trigger mandatory escalation:

- A Critical finding has not been resolved within **[e.g., 7 calendar days]** of identification.
- A High finding has not been resolved within **[e.g., 21 calendar days]** of identification.
- A remediation activity is projected to exceed its target completion date by more than **[e.g., 5 business days]**.
- A resource conflict or technical blocker cannot be resolved at working-group level.
- A finding owner requests a risk acceptance that has not been pre-approved.
- The planned release date is at risk due to unresolved Critical or High findings.

### 11.2 Escalation Path

| Level | Trigger | Escalation To | Expected Response Time |
|---|---|---|---|
| Level 1 | Finding blocked at technical level | Technical Lead / Security Manager | Within 1 business day |
| Level 2 | Finding overdue by [5] business days | Relevant Department Head | Within 1 business day |
| Level 3 | Finding overdue by [10] business days; release at risk | CISO / CIO | Within 4 hours |
| Level 4 | Critical finding unresolved at planned release date | Board Risk Committee / EXCO | Immediate |

### 11.3 Exception and Risk Acceptance Register

*Document any approved exceptions, risk acceptances, or deferrals from standard remediation requirements.*

| Exception ID | Finding ID | Exception Type | Justification | Compensating Controls | Accepted Risk Level | Approved By | Approval Date | Review Date |
|---|---|---|---|---|---|---|---|---|
| EXC-001 | [Finding ID] | [Risk Acceptance / Deferral / Compensating Control] | [Detailed justification for why full remediation cannot be completed before release] | [Description of compensating controls implemented to reduce residual risk] | [Residual risk level after controls] | [Approver Name and Title] | [DD/MM/YYYY] | [DD/MM/YYYY] |
| EXC-002 | [Finding ID] | [Type] | [Justification] | [Compensating Controls] | [Residual Risk] | [Approver] | [DD/MM/YYYY] | [DD/MM/YYYY] |

> **Important:** Risk acceptance for Critical findings requires approval from **[e.g., EXCO / Board Risk Committee]**. Risk acceptance for High findings requires approval from the **[e.g., Relevant Department Head and CISO]**. All acceptances must be time-bound and reviewed at the next quarterly remediation review.

---

## 12. Review and Approval

### 12.1 Document Review History

*Record all reviews of this document, including interim progress reviews and final approval.*

| Review Date | Review Type | Reviewed By | Title | Outcome | Comments |
|---|---|---|---|---|---|
| [DD/MM/YYYY] | Initial Draft Review | [Name] | [Title] | [Approved / Revisions Required] | [Comments] |
| [DD/MM/YYYY] | Progress Review (Milestone 1) | [Name] | [Title] | [Accepted / Revisions Required] | [Comments] |
| [DD/MM/YYYY] | Progress Review (Milestone 2) | [Name] | [Title] | [Accepted / Revisions Required] | [Comments] |
| [DD/MM/YYYY] | Pre-Release Final Review | [Name] | [Title] | [Approved / Not Approved] | [Comments] |
| [DD/MM/YYYY] | Quarterly Compliance Review | [Name] | [Title] | [Accepted / Closed] | [Comments] |

### 12.2 Version History

*Maintain a complete version history for this document.*

| Version | Date | Author | Changes Made |
|---|---|---|---|
| 0.1 | [DD/MM/YYYY] | [Author Name] | Initial draft created following receipt of assessment report |
| 0.2 | [DD/MM/YYYY] | [Author Name] | Finding register completed; action plans drafted |
| 0.3 | [DD/MM/YYYY] | [Author Name] | Resource requirements and schedules confirmed |
| 0.4 | [DD/MM/YYYY] | [Author Name] | Progress updates added following Milestone 1 |
| 0.5 | [DD/MM/YYYY] | [Author Name] | Risk acceptance documented for [Finding ID] |
| 1.0 | [DD/MM/YYYY] | [Author Name] | Final version approved for release clearance |

### 12.3 Approval Sign-Off

*This document requires formal sign-off from the following authorities before it may be used as evidence of remediation clearance for release approval.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Relevant Department Head** | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| **Chief Information Security Officer (CISO)** | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| **Chief Information Officer (CIO) / Chief Technology Officer (CTO)** | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| **Compliance / Technology Risk Officer** | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| **Release Manager** | [Full Name] | ___________________________ | [DD/MM/YYYY] |

---

## 13. References

### 13.1 Regulatory References

| Reference | Document Title | Issuing Authority | Applicable Clause / Section | Relevance to This Document |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | **Clause 10.7** | Primary regulatory obligation for remediation of Critical and High findings before release; evidence maintenance requirement |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 10.1 – 10.6 | Technology risk identification, assessment, and treatment framework |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 11 (Appendix) | Technology assessment and assurance requirements |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Sections 9, 10, 11 | Data protection obligations relevant to security vulnerability management |
| [Other BNM Guideline] | [Title] | Bank Negara Malaysia | [Section] | [Relevance] |

### 13.2 Internal Policy References

| Reference | Document Title | Owner | Version | Date |
|---|---|---|---|---|
| [POL-SEC-001] | Information Security Policy | CISO | [X.X] | [DD/MM/YYYY] |
| [POL-VM-002] | Vulnerability and Patch Management Standard | CISO | [X.X] | [DD/MM/YYYY] |
| [POL-TRM-003] | Technology Risk Management Framework | CIO | [X.X] | [DD/MM/YYYY] |
| [POL-CHG-004] | Change Management Policy | IT Operations | [X.X] | [DD/MM/YYYY] |
| [POL-REL-005] | Release Management Procedure | Release Management | [X.X] | [DD/MM/YYYY] |
| [POL-RISK-006] | Risk Appetite Statement | Board Risk Committee | [X.X] | [DD/MM/YYYY] |

### 13.3 Related Assessment Documents

| Document | Reference Number | Date | Author / Assessor |
|---|---|---|---|
| [e.g., Penetration Test Report — [System Name]] | [Report Reference] | [DD/MM/YYYY] | [Assessor Name / Vendor] |
| [e.g., Vulnerability Assessment Report] | [Report Reference] | [DD/MM/YYYY] | [Assessor Name / Vendor] |
| [e.g., Audit Finding Report] | [Report Reference] | [DD/MM/YYYY] | [Auditor Name] |
| [e.g., BNM Examination Finding] | [Reference] | [DD/MM/YYYY] | Bank Negara Malaysia |

---

## 14. Appendices

### Appendix A: Closure Evidence Index

*This appendix provides an indexed catalogue of all evidence collected to support the closure of Critical and High findings. All evidence must be retained for a minimum of [e.g., 7 years] in accordance with [Organization Name]'s records retention policy.*

| Evidence ID | Finding ID | Evidence Type | Description | File Name / Reference | Location | Date Collected | Collected By |
|---|---|---|---|---|---|---|---|
| EVD-001 | CRIT-001 | Retest Report | [Third-party retest report confirming vulnerability closure] | [filename.pdf] | [SharePoint path / document repository] | [DD/MM/YYYY] | [Name] |
| EVD-002 | CRIT-001 | Scan Output | [Automated scan output showing vulnerability no longer present] | [filename.pdf] | [Path] | [DD/MM/YYYY] | [Name] |
| EVD-003 | CRIT-001 | Change Record | [Approved change record for production deployment of fix] | [CR-XXXX] | [Change management system] | [DD/MM/YYYY] | [Name] |
| EVD-004 | CRIT-002 | Code Review | [Peer review sign-off for code fix] | [filename] | [Source code repository / code review tool] | [DD/MM/YYYY] | [Name] |
| EVD-005 | HIGH-001 | Patch Report | [Patch management report confirming patch application] | [filename] | [Patch management system] | [DD/MM/YYYY] | [Name] |
| EVD-006 | HIGH-002 | Configuration Screenshot | [Screenshot of corrected configuration] | [filename.png] | [Path] | [DD/MM/YYYY] | [Name] |

---

### Appendix B: Risk Acceptance Documentation

*For each finding where full remediation was not completed and risk acceptance was granted, reproduce the formal risk acceptance documentation in this appendix.*

**Risk Acceptance Form — [Exception ID EXC-001]**

| Field | Details |
|---|---|
| **Exception Reference** | EXC-001 |
| **Finding Reference** | [Finding ID] |
| **Finding Severity** | [Critical / High] |
| **System / Application** | [System Name] |
| **Date of Risk Acceptance** | [DD/MM/YYYY] |
| **Risk Acceptance Expiry Date** | [DD/MM/YYYY] |
| **Residual Risk Rating** | [High / Medium / Low] |
| **Justification for Acceptance** | [Detailed justification — explain why full remediation is not feasible within the required timeframe, e.g., dependency on third-party vendor, business continuity constraints, etc.] |
| **Compensating Controls Implemented** | [Describe all compensating controls in place to reduce the residual risk, e.g., enhanced monitoring, network segmentation, access restrictions, manual process controls] |
| **Residual Risk Assessment** | [Assess whether the residual risk, after compensating controls, is within [Organization Name]'s risk appetite] |
| **Conditions of Acceptance** | [e.g., Full remediation must be completed by [Date]; compensating controls must be reviewed monthly; no exceptions to compensating control procedures permitted] |
| **Accepted By (Name)** | [Full Name] |
| **Accepted By (Title)** | [Title] |
| **Accepted By (Signature)** | ___________________________ |
| **Accepted By (Date)** | [DD/MM/YYYY] |
| **CISO Endorsement** | ___________________________ [DD/MM/YYYY] |

---

### Appendix C: Third-Party Retest Summary

*Where a third-party vendor was engaged to perform a formal retest of remediated findings, summarise the retest results in this appendix.*

| Field | Details |
|---|---|
| **Retest Vendor** | [Vendor Name] |
| **Retest Period** | [DD/MM/YYYY] to [DD/MM/YYYY] |
| **Retest Report Reference** | [Report Reference Number] |
| **Scope of Retest** | [List findings that were subject to formal retest] |
| **Retest Methodology** | [Brief description of retest approach] |

**Retest Results Summary:**

| Finding ID | Original Severity | Retest Result | Retest Notes |
|---|---|---|---|
| CRIT-001 | Critical | [Remediated / Partially Remediated / Not Remediated] | [Retest notes] |
| CRIT-002 | Critical | [Remediated / Partially Remediated / Not Remediated] | [Retest notes] |
| HIGH-001 | High | [Remediated / Partially Remediated / Not Remediated] | [Retest notes] |
| HIGH-002 | High | [Remediated / Partially Remediated / Not Remediated] | [Retest notes] |

**Retest Conclusion:** [Overall conclusion from the third-party retest — e.g., "All Critical and High findings have been confirmed as remediated. The [System Name] is assessed as suitable for production release from a vulnerability remediation standpoint."]

---

### Appendix D: Lessons Learned Register

*Document lessons learned from this remediation cycle to improve future vulnerability management and secure development practices.*

| Lesson ID | Finding Reference | Category | Observation | Root Cause | Recommended Improvement | Responsible Party | Target Implementation Date |
|---|---|---|---|---|---|---|---|
| LL-001 | [Finding ID] | [e.g., Secure Development / Process / Tooling / Governance] | [Describe what happened and what could have been done better] | [Root cause of the finding or remediation challenge] | [Specific, actionable recommendation to prevent recurrence] | [Owner] | [DD/MM/YYYY] |
| LL-002 | [Finding ID] | [Category] | [Observation] | [Root cause] | [Recommendation] | [Owner] | [DD/MM/YYYY] |
| LL-003 | [Finding ID] | [Category] | [Observation] | [Root cause] | [Recommendation] | [Owner] | [DD/MM/YYYY] |

**Lessons Learned Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Technical Lead | [Name] | ___________________________ | [DD/MM/YYYY] |
| Relevant Department Head | [Name] | ___________________________ | [DD/MM/YYYY] |

---

### Appendix E: Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and financial regulatory authority of Malaysia |
| **CISO** | Chief Information Security Officer |
| **Critical Finding** | A vulnerability or control deficiency with a CVSS score of 9.0–10.0, or assessed as posing an immediate and severe risk to the organization |
| **CVE** | Common Vulnerabilities and Exposures — a publicly disclosed cybersecurity vulnerability identifier |
| **CVSS** | Common Vulnerability Scoring System — an open framework for communicating the characteristics and severity of software vulnerabilities |
| **CWE** | Common Weakness Enumeration — a community-developed list of software and hardware weakness types |
| **High Finding** | A vulnerability or control deficiency with a CVSS score of 7.0–8.9, or assessed as posing a significant risk |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data in commercial transactions |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **Release Gate** | A formal control point in the release management process at which defined criteria must be satisfied before a system may proceed to production |
| **Remediation** | The process of resolving, mitigating, or addressing a security finding to reduce risk to an acceptable level |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions in Malaysia |
| **Risk Acceptance** | A formal decision to acknowledge residual risk without full remediation, subject to compensating controls and approvals |
| **UAT** | User Acceptance Testing — a phase of testing in which the system is validated against user requirements before production release |

---

*End of Document*

---

*This document template was prepared in accordance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document requirements, specifically Clause 10.7. All placeholders in [brackets] must be completed by the relevant document owner prior to submission or use as regulatory evidence. Completed versions of this document are classified **Confidential** and must be stored, accessed, and transmitted in accordance with [Organization Name]'s information classification and handling policy.*