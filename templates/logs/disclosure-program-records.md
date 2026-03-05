# Disclosure Program Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Handling Instructions:** This document is classified as **Confidential**. It must not be disclosed to unauthorized parties. Access is restricted to personnel with a legitimate need to know. Physical copies must be stored securely. Electronic copies must be protected in accordance with [Organization Name]'s Information Security Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives and Scope of the Disclosure Program](#2-objectives-and-scope-of-the-disclosure-program)
3. [Vulnerability Disclosure Log](#3-vulnerability-disclosure-log)
4. [Actions and Milestones](#4-actions-and-milestones)
5. [Accountable Owners](#5-accountable-owners)
6. [Target Completion Dates](#6-target-completion-dates)
7. [Resource Requirements](#7-resource-requirements)
8. [Progress Tracking Mechanism](#8-progress-tracking-mechanism)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the official register of **Disclosure Program Records** for [Organization Name]. It provides a structured, auditable log of all vulnerabilities reported through the organization's Vulnerability Disclosure Program (VDP), together with the remediation actions, milestones, responsible parties, and completion timelines associated with each reported finding.

This record is maintained in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.15**, which requires financial institutions to establish a mechanism for the responsible disclosure of vulnerabilities identified in their technology systems. The maintenance of these records demonstrates [Organization Name]'s commitment to proactive vulnerability management, continuous improvement of its cybersecurity posture, and regulatory compliance.

### 1.2 Scope

*This section defines the boundaries of the Disclosure Program and the systems, processes, and parties covered by these records. Describe all in-scope technology assets, systems, and organizational units.*

This Disclosure Program Records document applies to:

- **In-Scope Systems and Assets:**
  - All internet-facing applications and services operated by [Organization Name]
  - Core banking systems and associated middleware
  - Customer-facing digital channels (mobile banking, internet banking, APIs)
  - Internal enterprise applications handling sensitive or regulated data
  - Cloud-hosted infrastructure and services under [Organization Name]'s operational control
  - Third-party integrated systems where [Organization Name] is the primary data controller

- **Out-of-Scope Systems and Assets:**
  - Systems operated exclusively by third-party vendors without [Organization Name]'s administrative access
  - Physical security controls (unless intersecting with digital systems)
  - [Other exclusions as defined in the VDP Policy]

- **Covered Disclosure Channels:**
  - Official Vulnerability Disclosure Program (VDP) portal at [VDP Portal URL/Contact]
  - Designated security disclosure email: [security@organization.com]
  - Bug bounty platform (if applicable): [Platform Name]
  - Responsible disclosures received via regulatory referral (e.g., BNM, CyberSecurity Malaysia, NACSA)

- **Organizational Scope:**
  - All business units, subsidiaries, and branches of [Organization Name] operating under its technology infrastructure

### 1.3 Regulatory Basis

This document is maintained in direct support of the following regulatory requirements:

| Regulatory Reference | Requirement Summary |
|---|---|
| BNM RMiT Clause 11.15 | Establishment and maintenance of a vulnerability disclosure program with records of reported vulnerabilities and remediation |
| BNM RMiT Clause 11.1–11.4 | General cybersecurity risk management obligations |
| Personal Data Protection Act 2010 (PDPA) | Obligations relating to security of personal data in the event of vulnerability exploitation |
| NACSA National Cybersecurity Policy | Incident and vulnerability reporting obligations for critical information infrastructure |

---

## 2. Objectives and Scope of the Disclosure Program

### 2.1 Disclosure Program Objectives

*Describe the overarching goals of the organization's Vulnerability Disclosure Program. These objectives should align with BNM RMiT requirements and the organization's risk appetite.*

The Vulnerability Disclosure Program (VDP) of [Organization Name] is governed by the following objectives:

1. **Establish a Trusted Reporting Channel:** Provide a safe, clearly defined, and accessible mechanism for internal staff, external researchers, customers, and third parties to report suspected vulnerabilities without fear of legal repercussion, provided disclosures are made in good faith.

2. **Enable Timely Remediation:** Ensure that all reported vulnerabilities are triaged, assessed, and remediated within risk-appropriate timeframes, prioritized according to severity and potential impact on customers, data, and operations.

3. **Maintain Audit-Ready Records:** Produce and retain complete, accurate records of all disclosed vulnerabilities and their resolution lifecycle to satisfy regulatory examination requirements under BNM RMiT Clause 11.15.

4. **Promote Continuous Security Improvement:** Use disclosure findings as inputs into the organization's broader vulnerability management, threat intelligence, and security architecture improvement cycles.

5. **Foster Responsible Disclosure Culture:** Encourage ethical, coordinated disclosure from both internal and external parties by maintaining a transparent, respectful, and legally clear disclosure process.

6. **Support Regulatory Reporting Obligations:** Enable timely escalation and notification to BNM, NACSA, and other relevant authorities where disclosed vulnerabilities constitute reportable cybersecurity incidents.

### 2.2 Program Governance

*Summarize the governance structure that oversees the disclosure program, including the policy documents that define its rules and the senior management body accountable for its effectiveness.*

| Governance Element | Detail |
|---|---|
| **Governing Policy** | [Organization Name] Vulnerability Disclosure Policy (VDP) v[X.X] |
| **Supporting Procedures** | Vulnerability Management Procedure, Incident Response Procedure |
| **Program Owner** | IT Operations Manager |
| **Executive Sponsor** | Chief Information Security Officer (CISO) / Chief Technology Officer (CTO) |
| **Oversight Body** | IT Risk and Security Committee |
| **Review Cadence** | Continuous (per disclosure); Formal quarterly review |

### 2.3 Disclosure Program Rules of Engagement

*Document the agreed terms under which disclosures are accepted. This ensures that records include context about the conditions under which each vulnerability was reported.*

- **Safe Harbour Commitment:** [Organization Name] commits not to pursue legal action against reporters who disclose vulnerabilities in good faith in accordance with the VDP guidelines.
- **Coordinated Disclosure Period:** Reporters are requested to allow [Organization Name] a minimum of **[90] calendar days** to remediate before public disclosure.
- **Prohibited Activities:** Disclosures involving active exploitation, data exfiltration, denial-of-service testing, or social engineering of staff are excluded from safe harbour protections.
- **Acknowledgement SLA:** [Organization Name] will acknowledge receipt of a valid disclosure report within **[5] business days**.
- **Communication Commitment:** [Organization Name] will provide status updates to reporters at least every **[30] calendar days** until resolution.

---

## 3. Vulnerability Disclosure Log

### 3.1 Log Overview

*This section is the primary operational register of all vulnerabilities received through the disclosure program. Each entry must be maintained accurately and updated at every stage of the vulnerability lifecycle. This log is the principal artifact reviewed during regulatory examination.*

The Vulnerability Disclosure Log records every vulnerability received through [Organization Name]'s disclosure channels. Entries are created upon receipt of a report and updated continuously until the vulnerability is fully remediated and closed.

**Log Retention Period:** Records must be retained for a minimum of **[7] years** in accordance with [Organization Name]'s Records Retention Policy and BNM regulatory requirements.

### 3.2 Disclosure Register

| Field | Description |
|---|---|
| **VDR-ID** | Unique Vulnerability Disclosure Record identifier (format: VDR-YYYY-NNNN) |
| **Report Date** | Date the disclosure was received |
| **Reporter Type** | Internal / External Researcher / Customer / Vendor / Regulatory Referral |
| **Reporter Identity** | Name or alias of reporter (may be anonymized per VDP policy) |
| **Affected System(s)** | System(s), application(s), or asset(s) identified in the report |
| **Vulnerability Class** | e.g., OWASP Top 10 category, CVE classification, custom description |
| **Severity Rating** | Critical / High / Medium / Low / Informational |
| **CVSS Score** | Common Vulnerability Scoring System score (if applicable) |
| **CVE Reference** | CVE identifier (if publicly assigned) |
| **Description** | Summary of the reported vulnerability |
| **Status** | Received / In Triage / Confirmed / In Remediation / Resolved / Closed / Disputed |
| **Closure Date** | Date the record was formally closed |

---

**Active and Historical Disclosure Records:**

| VDR-ID | Report Date | Reporter Type | Affected System | Vulnerability Class | Severity | CVSS | CVE Ref | Status | Closure Date |
|---|---|---|---|---|---|---|---|---|---|
| VDR-[YYYY]-0001 | [DD/MM/YYYY] | [Reporter Type] | [System Name] | [e.g., SQL Injection] | [Critical] | [9.8] | [CVE-XXXX-XXXXX] | [Status] | [DD/MM/YYYY] |
| VDR-[YYYY]-0002 | [DD/MM/YYYY] | [Reporter Type] | [System Name] | [e.g., XSS] | [High] | [7.5] | [N/A] | [Status] | [DD/MM/YYYY] |
| VDR-[YYYY]-0003 | [DD/MM/YYYY] | [Reporter Type] | [System Name] | [e.g., Misconfiguration] | [Medium] | [5.3] | [N/A] | [Status] | [DD/MM/YYYY] |
| *[Add rows as required]* | | | | | | | | | |

### 3.3 Detailed Disclosure Record — Individual Entry Template

*For each vulnerability, a detailed record must be maintained. The following template should be completed for every entry in the disclosure register. Entries are filed as sub-records referenced by VDR-ID.*

---

**Record Reference:** VDR-[YYYY]-[NNNN]

| Attribute | Details |
|---|---|
| **VDR-ID** | VDR-[YYYY]-[NNNN] |
| **Date Received** | [DD/MM/YYYY] |
| **Date Acknowledged** | [DD/MM/YYYY] |
| **Reporter Name / Alias** | [Reporter Name or Anonymized Alias] |
| **Reporter Contact** | [Email / Platform Handle] |
| **Reporter Type** | [Internal Staff / External Researcher / Customer / Vendor / Regulatory Body] |
| **Disclosure Channel** | [VDP Portal / Email / Bug Bounty Platform / Regulatory Referral] |
| **Affected System(s)** | [System Name(s)] |
| **Environment** | [Production / Staging / Development] |
| **Vulnerability Classification** | [OWASP Category / CWE ID / Custom] |
| **CWE Reference** | [CWE-XXX: Description] |
| **CVE Reference** | [CVE-XXXX-XXXXX or N/A] |
| **CVSS v3.1 Score** | [Score] ([Vector String]) |
| **Internal Severity Rating** | [Critical / High / Medium / Low / Informational] |
| **Potential Impact** | [Description of potential business, data, or operational impact] |
| **Exploitability Assessment** | [Easily exploitable / Requires authentication / Complex conditions] |
| **Proof of Concept Provided** | [Yes / No] |
| **Data at Risk** | [Customer PII / Financial Data / Credentials / None / Unknown] |
| **Regulatory Notification Required** | [Yes / No — if Yes, reference notification record] |

**Vulnerability Description:**

> [Detailed description of the vulnerability as reported and as confirmed during triage. Include technical details, affected endpoints, steps to reproduce, and any supporting evidence references.]

**Triage Assessment:**

> [Summary of internal triage findings. Confirm or dispute the reported severity. Document the rationale for the assigned severity rating. Note any factors that increase or mitigate risk.]

**Remediation Summary:**

> [Summary of the remediation approach taken. Describe the fix implemented, any compensating controls applied in the interim, and the verification method used to confirm resolution.]

---

## 4. Actions and Milestones

### 4.1 Standard Remediation SLA Framework

*Define the organization's standard remediation timeframes by severity level. These SLAs should reflect both regulatory expectations and the organization's risk appetite. All active disclosures must be tracked against these timelines.*

[Organization Name] applies the following mandatory remediation SLAs to all confirmed vulnerabilities arising from the disclosure program:

| Severity Level | CVSS Score Range | Acknowledgement SLA | Triage Completion SLA | Remediation Target SLA | Escalation Trigger |
|---|---|---|---|---|---|
| **Critical** | 9.0 – 10.0 | 1 business day | 2 business days | 14 calendar days | Immediate — CISO and CTO |
| **High** | 7.0 – 8.9 | 2 business days | 3 business days | 30 calendar days | 3 business days — IT Security Manager |
| **Medium** | 4.0 – 6.9 | 5 business days | 5 business days | 60 calendar days | 10 business days — IT Operations Manager |
| **Low** | 0.1 – 3.9 | 5 business days | 10 business days | 90 calendar days | 20 business days — IT Operations Manager |
| **Informational** | N/A | 5 business days | 15 business days | Best effort (next release cycle) | N/A |

### 4.2 Milestone Tracking per Disclosure Record

*For each active disclosure record, document the specific milestones and their completion status. This table must be updated in real-time and reviewed at every formal quarterly review.*

**Milestone Register — VDR-[YYYY]-[NNNN]:**

| Milestone ID | Milestone Description | Planned Date | Actual Date | Status | Owner | Notes |
|---|---|---|---|---|---|---|
| M-01 | Disclosure received and logged | [DD/MM/YYYY] | [DD/MM/YYYY] | [Completed] | IT Security Team | |
| M-02 | Acknowledgement sent to reporter | [DD/MM/YYYY] | [DD/MM/YYYY] | [Completed] | IT Security Team | |
| M-03 | Initial triage completed | [DD/MM/YYYY] | [DD/MM/YYYY] | [In Progress] | [Triage Lead] | |
| M-04 | Severity rating confirmed and recorded | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | [Security Analyst] | |
| M-05 | Affected system owner notified | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | IT Operations Manager | |
| M-06 | Remediation plan approved | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | [System Owner] | |
| M-07 | Interim compensating control implemented (if required) | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | [System Owner] | |
| M-08 | Remediation implemented in non-production | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | [Development Lead] | |
| M-09 | Security testing / verification of fix | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | [Security Testing Team] | |
| M-10 | Remediation deployed to production | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | [Release Manager] | |
| M-11 | Post-remediation validation completed | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | [Security Analyst] | |
| M-12 | Reporter notified of resolution | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | IT Security Team | |
| M-13 | Record formally closed | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | IT Operations Manager | |

### 4.3 Milestone Exception and Escalation Log

*Document any instances where SLA milestones were not met, the reasons for deviation, and the escalation actions taken. This record supports audit evidence of management oversight.*

| VDR-ID | Milestone Missed | Original Due Date | Revised Due Date | Reason for Delay | Escalation Action Taken | Escalated To | Date Escalated |
|---|---|---|---|---|---|---|---|
| VDR-[YYYY]-[NNNN] | [Milestone Description] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Reason] | [Action Taken] | [Name/Role] | [DD/MM/YYYY] |
| *[Add rows as required]* | | | | | | | |

---

## 5. Accountable Owners

### 5.1 Ownership Assignment Framework

*Every disclosure record and associated remediation action must have a clearly designated accountable owner. This section documents the ownership assignments for each active and historical disclosure and defines the ownership model applied by [Organization Name].*

[Organization Name] applies a two-tier ownership model to all disclosure records:

- **Record Owner:** The individual responsible for maintaining the accuracy and completeness of the disclosure record, coordinating communication with the reporter, and ensuring all milestones are tracked.
- **Remediation Owner:** The individual accountable for delivering the technical or operational remediation within the agreed SLA. This is typically the system or application owner of the affected asset.

### 5.2 Disclosure Record Ownership Register

| VDR-ID | Affected System | Record Owner | Record Owner's Manager | Remediation Owner | Remediation Owner's Manager | Executive Escalation Point |
|---|---|---|---|---|---|---|
| VDR-[YYYY]-0001 | [System Name] | [Name, Title] | [Manager Name] | [Name, Title] | [Manager Name] | [CISO / CTO] |
| VDR-[YYYY]-0002 | [System Name] | [Name, Title] | [Manager Name] | [Name, Title] | [Manager Name] | [CISO / CTO] |
| *[Add rows as required]* | | | | | | |

### 5.3 Ownership Transfer Log

*Document any changes in ownership of a disclosure record during its lifecycle. Ownership transfers must be formally authorized and recorded to maintain accountability continuity.*

| VDR-ID | Transfer Date | Previous Owner | New Owner | Reason for Transfer | Authorized By |
|---|---|---|---|---|---|
| VDR-[YYYY]-[NNNN] | [DD/MM/YYYY] | [Previous Owner Name] | [New Owner Name] | [e.g., Organizational restructure / Staff departure] | [Authorizing Manager] |
| *[Add rows as required]* | | | | | |

---

## 6. Target Completion Dates

### 6.1 Completion Date Register

*This section provides a consolidated view of all target completion dates for active disclosure records. It is the primary reference for management reporting and SLA tracking. Dates must reflect the most current approved remediation plan.*

| VDR-ID | Severity | Report Date | Triage Due | Triage Completed | Remediation Due | Remediation Completed | SLA Status | Days Remaining / Overdue |
|---|---|---|---|---|---|---|---|---|
| VDR-[YYYY]-0001 | [Critical] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [On Track / At Risk / Overdue] | [X days] |
| VDR-[YYYY]-0002 | [High] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [On Track / At Risk / Overdue] | [X days] |
| VDR-[YYYY]-0003 | [Medium] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pending] | [DD/MM/YYYY] | [Pending] | [On Track] | [X days] |
| *[Add rows as required]* | | | | | | | | |

### 6.2 Completion Date Extensions

*Any extension to an original target completion date requires formal approval and documentation. Extensions must not be granted routinely; each request must be justified by documented risk acceptance or technical constraint.*

| VDR-ID | Original Due Date | Extension Request Date | Requested By | New Target Date | Justification | Approved By | Approval Date |
|---|---|---|---|---|---|---|---|
| VDR-[YYYY]-[NNNN] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name, Title] | [DD/MM/YYYY] | [Technical / Business justification] | [Manager / CISO] | [DD/MM/YYYY] |
| *[Add rows as required]* | | | | | | | |

### 6.3 Risk Acceptance for Overdue Items

*Where a vulnerability cannot be remediated within the SLA and no extension is feasible, a formal risk acceptance must be documented. This is subject to executive approval and must be time-bound.*

| VDR-ID | Severity | SLA Overdue By | Risk Acceptance Rationale | Compensating Controls in Place | Risk Acceptance Owner | Risk Acceptance Expiry | Board / ITRC Notified |
|---|---|---|---|---|---|---|---|
| VDR-[YYYY]-[NNNN] | [High] | [X days] | [Justification for accepting risk] | [Description of compensating controls] | [CISO / CTO] | [DD/MM/YYYY] | [Yes / No] |
| *[Add rows as required]* | | | | | | | |

---

## 7. Resource Requirements

### 7.1 Resource Planning Overview

*This section documents the human, financial, and technical resources required to support the disclosure program and to execute remediation activities for active disclosure records. Resource requirements should be reviewed quarterly and escalated to management where gaps exist.*

Effective operation of the Vulnerability Disclosure Program and timely remediation of reported vulnerabilities require the following categories of resources:

**7.1.1 Human Resources**

| Resource Role | Responsibility | FTE / Time Allocation | Current Assignee | Gap Identified |
|---|---|---|---|---|
| IT Operations Manager | Program oversight, record governance, quarterly review | [0.2 FTE / 1 day per week] | [Name] | [Yes / No] |
| Security Analyst (Triage) | Initial triage, severity assessment, reporter communication | [0.5 FTE / 2.5 days per week] | [Name] | [Yes / No] |
| Application / System Owners | Remediation delivery for affected systems | [Variable — per disclosure] | [Multiple] | [Yes / No] |
| Development / Engineering | Patching, code fixes, configuration remediation | [Variable — per disclosure] | [Name / Team] | [Yes / No] |
| Security Testing Team | Verification of remediation effectiveness | [Variable — per disclosure] | [Name / Team] | [Yes / No] |
| Legal / Compliance | Safe harbour review, regulatory notification, reporter agreements | [On-demand] | [Name] | [Yes / No] |
| Communications / PR | External communications in case of significant disclosures | [On-demand] | [Name] | [Yes / No] |

**7.1.2 Technology Resources**

| Resource | Purpose | Current Status | Owner |
|---|---|---|---|
| VDP Management Platform | Intake, tracking, and communication for disclosures | [In Use / Planned / Gap] | [Owner Name] |
| Vulnerability Scanning Tools | Validation and reproduction of reported vulnerabilities | [In Use / Planned / Gap] | [Owner Name] |
| SIEM / Log Analysis Platform | Supporting investigation of potential exploitation | [In Use / Planned / Gap] | [Owner Name] |
| Secure Communication Channel | Encrypted communication with external reporters | [In Use / Planned / Gap] | [Owner Name] |
| Patch Management System | Deployment of remediation patches | [In Use / Planned / Gap] | [Owner Name] |
| Bug Bounty Platform (if applicable) | External researcher engagement and reward management | [In Use / Planned / Gap] | [Owner Name] |

**7.1.3 Financial Resources**

| Budget Item | Annual Estimate | Actual YTD | Variance | Approved Budget |
|---|---|---|---|---|
| VDP Platform Licensing | [RM X,XXX] | [RM X,XXX] | [RM X,XXX] | [Yes / No] |
| Bug Bounty Payouts | [RM X,XXX] | [RM X,XXX] | [RM X,XXX] | [Yes / No] |
| External Security Testing (verification) | [RM X,XXX] | [RM X,XXX] | [RM X,XXX] | [Yes / No] |
| Staff Training (VDP-related) | [RM X,XXX] | [RM X,XXX] | [RM X,XXX] | [Yes / No] |
| Emergency Remediation Reserve | [RM X,XXX] | [RM X,XXX] | [RM X,XXX] | [Yes / No] |
| **Total** | **[RM XX,XXX]** | **[RM XX,XXX]** | **[RM X,XXX]** | |

### 7.2 Resource Constraints and Gap Log

*Document any identified gaps in resources that are impeding or may impede the effective operation of the disclosure program or the timely remediation of vulnerabilities. Each gap must have a remediation action assigned.*

| Gap ID | Resource Type | Gap Description | Impact on Program | Proposed Resolution | Target Resolution Date | Owner |
|---|---|---|---|---|---|---|
| RG-001 | [Human / Technology / Financial] | [Description of gap] | [Impact description] | [Proposed action] | [DD/MM/YYYY] | [Name, Title] |
| *[Add rows as required]* | | | | | | |

---

## 8. Progress Tracking Mechanism

### 8.1 Tracking Methodology

*Describe how [Organization Name] monitors the status of all disclosure records in real-time and produces management reporting. This section provides the framework for ongoing oversight and the quarterly formal review.*

[Organization Name] employs the following mechanisms to ensure continuous and accurate tracking of all disclosure program records:

**8.1.1 Operational Tracking (Continuous)**

- All disclosure records are maintained in **[VDP Platform / Ticketing System Name]**, which provides real-time status, owner assignment, and SLA countdown for each record.
- Automated alerts are triggered when a disclosure record reaches **[50%]**, **[75%]**, and **[100%]** of its SLA duration without progressing to the next milestone.
- The IT Operations Manager reviews the active disclosure queue **weekly** and escalates stalled records to the relevant system owner.
- All status updates, communications with reporters, and remediation evidence are logged directly in the disclosure record within **[VDP Platform / Ticketing System Name]**.

**8.1.2 Formal Quarterly Review**

A formal review of all disclosure program records is conducted **quarterly** and documented in the Quarterly Disclosure Program Review Report. The review covers:

- Status of all open disclosure records vs. SLA
- Remediation completion rates by severity
- Resource utilization and budget variance
- Trend analysis (volume, severity distribution, recurring vulnerability classes)
- Lessons learned and program improvement recommendations
- Escalation items requiring IT Risk and Security Committee decision

### 8.2 Dashboard and KPI Summary

*This section provides a snapshot view of program health at the time of each formal review. This table should be updated at every quarterly review and preserved as a historical record.*

**Reporting Period:** [Q1/Q2/Q3/Q4] [YYYY]

**Review Date:** [DD/MM/YYYY]

| Key Performance Indicator | Target | Actual | Status |
|---|---|---|---|
| Total disclosures received (period) | — | [N] | — |
| Total disclosures received (YTD) | — | [N] | — |
| Average time to acknowledgement (business days) | ≤ 5 | [X] | [Green / Amber / Red] |
| Average time to triage completion (business days) | ≤ 5 | [X] | [Green / Amber / Red] |
| % Critical vulnerabilities remediated within SLA | 100% | [X%] | [Green / Amber / Red] |
| % High vulnerabilities remediated within SLA | 100% | [X%] | [Green / Amber / Red] |
| % Medium vulnerabilities remediated within SLA | ≥ 90% | [X%] | [Green / Amber / Red] |
| % Low vulnerabilities remediated within SLA | ≥ 85% | [X%] | [Green / Amber / Red] |
| Number of open records past SLA (unmitigated) | 0 | [N] | [Green / Amber / Red] |
| Number of records with approved risk acceptance | ≤ [X] | [N] | [Green / Amber / Red] |
| Reporter satisfaction (survey, if applicable) | ≥ [X]% | [X%] | [Green / Amber / Red] |
| Regulatory notifications triggered (period) | — | [N] | — |

### 8.3 Trend Analysis

*Document trend observations across reporting periods to identify systemic issues, recurring vulnerability types, or resource patterns that may require strategic response.*

**Vulnerability Volume Trend:**

| Quarter | Total Received | Critical | High | Medium | Low | Informational | Closed in Period |
|---|---|---|---|---|---|---|---|
| Q1 [YYYY] | [N] | [N] | [N] | [N] | [N] | [N] | [N] |
| Q2 [YYYY] | [N] | [N] | [N] | [N] | [N] | [N] | [N] |
| Q3 [YYYY] | [N] | [N] | [N] | [N] | [N] | [N] | [N] |
| Q4 [YYYY] | [N] | [N] | [N] | [N] | [N] | [N] | [N] |

**Top Recurring Vulnerability Classes:**

| Rank | Vulnerability Class | Frequency (YTD) | Most Affected System | Systemic Risk Indicator |
|---|---|---|---|---|
| 1 | [e.g., Injection Flaws] | [N] | [System Name] | [High / Medium / Low] |
| 2 | [e.g., Authentication Weaknesses] | [N] | [System Name] | [High / Medium / Low] |
| 3 | [e.g., Sensitive Data Exposure] | [N] | [System Name] | [High / Medium / Low] |
| *[Add rows as required]* | | | | |

### 8.4 Quarterly Review Sign-Off

*Each formal quarterly review must be signed off by the IT Operations Manager and reviewed by the CISO. This sign-off confirms the accuracy of the records as at the review date.*

| Review Period | Review Date | Reviewed By | Title | Reviewed By | Title | Sign-off Date |
|---|---|---|---|---|---|---|
| [Q1/Q2/Q3/Q4 YYYY] | [DD/MM/YYYY] | [Name] | IT Operations Manager | [Name] | CISO | [DD/MM/YYYY] |
| *[Add rows for each quarter]* | | | | | | |

---

## 9. Roles and Responsibilities

### 9.1 RACI Matrix

*The following RACI matrix defines the responsibilities of key roles in the operation of the Disclosure Program. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IT Operations Manager | CISO | Security Analyst | System / Application Owner | Development / Engineering | Legal / Compliance | IT Risk & Security Committee | BNM / Regulator |
|---|---|---|---|---|---|---|---|---|
| Maintain and govern disclosure program policy | C | A | I | I | I | C | I | I |
| Operate VDP intake channel | A | I | R | I | I | I | I | I |
| Acknowledge disclosure to reporter | A | I | R | I | I | C | I | I |
| Perform initial triage and severity rating | A | C | R | C | I | I | I | I |
| Notify affected system owner | R | I | A | I | I | I | I | I |
| Develop and approve remediation plan | C | C | C | A | R | I | I | I |
| Implement interim compensating controls | C | I | I | A | R | I | I | I |
| Execute remediation | I | I | I | A | R | I | I | I |
| Verify effectiveness of remediation | A | C | R | C | I | I | I | I |
| Communicate resolution to reporter | A | I | R | I | I | C | I | I |
| Determine regulatory notification requirement | C | A | C | I | I | R | C | I |
| Submit regulatory notification (BNM/NACSA) | C | A | I | I | I | R | I | R |
| Maintain disclosure program records | A | I | R | I | I | I | I | I |
| Conduct quarterly program review | A | C | R | I | I | I | I | I |
| Report to IT Risk and Security Committee | R | A | C | I | I | I | I | I |
| Approve risk acceptance for overdue items | C | A | I | C | I | C | I | I |
| Monitor SLA compliance | A | I | R | I | I | I | I | I |
| Manage bug bounty rewards (if applicable) | A | C | R | I | I | C | I | I |

### 9.2 Key Roles — Detailed Responsibilities

**IT Operations Manager**
- Accountable for the end-to-end governance and accuracy of all Disclosure Program Records
- Chairs the quarterly disclosure program review
- Escalates unresolved or high-risk disclosures to the CISO and IT Risk and Security Committee
- Approves remediation plans and target completion dates
- Signs off the quarterly review record

**Chief Information Security Officer (CISO)**
- Provides executive accountability for the Vulnerability Disclosure Program
- Approves risk acceptance decisions for Critical and High severity unresolved items
- Determines and authorizes regulatory notifications
- Reports material disclosure program findings to the Board Risk Committee

**Security Analyst**
- Performs day-to-day operation of the VDP intake channel
- Conducts triage of all incoming disclosures
- Maintains real-time accuracy of the disclosure log
- Coordinates communication with reporters throughout the lifecycle
- Conducts post-remediation verification

**System / Application Owner**
- Accountable for remediation delivery within SLA for their assigned systems
- Approves the remediation plan for their system
- Ensures development and engineering resources are allocated for remediation
- Reports progress to the IT Operations Manager

**Legal / Compliance**
- Advises on safe harbour terms and reporter agreements
- Reviews regulatory notification obligations
- Supports escalation of disclosures involving potential PDPA breaches

---

## 10. Review and Approval

### 10.1 Document Review Schedule

This document must be reviewed:

- **Continuously** — updated in real-time as new disclosures are received and milestones progress
- **Quarterly** — formally reviewed for completeness, accuracy, and SLA compliance
- **Ad hoc** — following any material change to the disclosure program, regulatory guidance, or upon receipt of a Critical severity disclosure

### 10.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Title] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Author Name, Title] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Title] | [Description of major revision] |

### 10.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name, Security Analyst] | __________________ | [DD/MM/YYYY] |
| Reviewed By | [Name, IT Operations Manager] | __________________ | [DD/MM/YYYY] |
| Approved By | [Name, CISO] | __________________ | [DD/MM/YYYY] |
| Endorsed By | [Name, CTO / COO] | __________________ | [DD/MM/YYYY] |

---

## 11. References

The following regulatory documents, standards, and internal policies govern this Disclosure Program Records document:

### 11.1 Regulatory References

| Reference | Document | Clause / Section | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 11.15** | Mandatory establishment of vulnerability disclosure program with records of reported vulnerabilities and remediation |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11.1 – 11.4 | General cybersecurity risk management framework obligations |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11.7 – 11.10 | Vulnerability assessment and penetration testing requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11.11 – 11.14 | Patch management and remediation obligations |
| PDPA 2010 | Personal Data Protection Act 2010 | Part III, Section 9 | Security principle — obligation to protect personal data from unauthorized access or disclosure |
| NACSA | National Cybersecurity Policy | Critical Information Infrastructure Protection Framework | Vulnerability and incident reporting obligations |
| CyberSecurity Malaysia | Guidelines on Responsible Disclosure | All | Best practice framework for vulnerability disclosure coordination |

### 11.2 Internal Policy References

| Reference | Document Title | Version | Owner |
|---|---|---|---|
| INT-POL-001 | Information Security Policy | [X.X] | CISO |
| INT-POL-002 | Vulnerability Disclosure Policy | [X.X] | IT Operations Manager |
| INT-POL-003 | Vulnerability Management Policy | [X.X] | IT Operations Manager |
| INT-POL-004 | Incident Response Policy | [X.X] | CISO |
| INT-POL-005 | Patch Management Policy | [X.X] | IT Operations Manager |
| INT-POL-006 | Records Retention Policy | [X.X] | Compliance Officer |
| INT-POL-007 | Risk Acceptance Policy | [X.X] | Chief Risk Officer |

### 11.3 External Standards and Frameworks

| Standard | Body | Relevance |
|---|---|---|
| ISO/IEC 29147:2018 | ISO/IEC | Information technology — Vulnerability disclosure |
| ISO/IEC 30111:2019 | ISO/IEC | Information technology — Vulnerability handling processes |
| CVSS v3.1 | FIRST | Common Vulnerability Scoring System for severity rating |
| OWASP Top 10 | OWASP | Web application vulnerability classification reference |
| NIST SP 800-40 | NIST | Guide to enterprise patch management planning |

---

## 12. Appendices

### Appendix A — Vulnerability Disclosure Program (VDP) Public Statement

*Include the full text of [Organization Name]'s published Vulnerability Disclosure Program statement. This should match the statement published on the organization's official website and/or VDP portal. The statement must include: scope, reporting instructions, safe harbour terms, expected response timelines, and prohibited activities.*

**[Insert current VDP public statement text here]**

---

### Appendix B — Disclosure Intake Form Template

*This is the standard form used to capture disclosure details at the point of receipt. This form should be completed by the receiving Security Analyst for every disclosure, whether received via VDP portal, email, or other channel.*

**Disclosure Intake Form**

| Field | Response |
|---|---|
| Date/Time Received | [DD/MM/YYYY HH:MM] |
| Received Via | [VDP Portal / Email / Bug Bounty / Phone / Regulatory / Other] |
| Reporter Name / Alias | |
| Reporter Contact (Email / Handle) | |
| Reporter agrees to VDP terms | [Yes / No / Not confirmed] |
| Reported System / URL | |
| Vulnerability Description (as reported) | |
| Steps to Reproduce | |
| Proof of Concept Attached | [Yes / No] |
| Reporter's Estimated Severity | [Critical / High / Medium / Low / Unknown] |
| Initial Internal Severity Assessment | [Critical / High / Medium / Low — pending full triage] |
| Assigned VDR-ID | VDR-[YYYY]-[NNNN] |
| Assigned Record Owner | |
| Acknowledgement Sent | [Yes / No] — Date: |

---

### Appendix C — Severity Rating Criteria

*This appendix provides internal guidance for security analysts conducting triage to ensure consistent severity rating across all disclosure records.*

**Internal Severity Rating Guide:**

| Severity | CVSS Range | Criteria | Examples |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Unauthenticated remote code execution; direct access to customer financial data; complete system compromise | RCE on internet-facing server; authentication bypass on core banking API |
| **High** | 7.0 – 8.9 | Authenticated RCE; significant data exposure; high-impact privilege escalation; exploitable without complex conditions | SQL injection requiring login; IDOR exposing bulk customer records |
| **Medium** | 4.0 – 6.9 | Limited data exposure; requires multiple conditions; moderate impact on confidentiality or integrity | Reflected XSS; insecure direct object reference with limited scope |
| **Low** | 0.1 – 3.9 | Minimal impact; requires significant attacker conditions; informational leakage | Version disclosure; missing security headers; verbose error messages |
| **Informational** | N/A | Best practice deviation; no direct exploitability; security hygiene observation | Absence of HSTS; session timeout recommendations |

---

### Appendix D — Regulatory Notification Decision Tree

*Use this decision tree to determine whether a disclosed vulnerability triggers a regulatory notification obligation to BNM, NACSA, or other bodies.*

**Step 1:** Has the vulnerability been confirmed as exploited (i.e., is this also a cybersecurity incident)?
- **Yes** → Activate Incident Response Plan. Regulatory notification under BNM RMiT incident reporting requirements. Proceed to Step 2.
- **No** → Proceed to Step 2.

**Step 2:** Does the vulnerability expose or risk exposing customer personal data or financial data?
- **Yes** → Consult Legal / Compliance. Assess PDPA notification obligations. Notify CISO immediately.
- **No** → Proceed to Step 3.

**Step 3:** Is the affected system classified as Critical Information Infrastructure (CII)?
- **Yes** → Consult NACSA notification requirements. Notify CISO.
- **No** → Proceed to Step 4.

**Step 4:** Is the severity rating Critical or High, affecting a production system?
- **Yes** → Notify CISO within 24 hours. CISO to assess whether voluntary notification to BNM is appropriate.
- **No** → Manage within standard disclosure program SLA. No regulatory notification required at this stage.

**Regulatory Notification Log:**

| VDR-ID | Notification Trigger | Regulator Notified | Notification Date | Reference Number | Follow-up Required |
|---|---|---|---|---|---|
| VDR-[YYYY]-[NNNN] | [Trigger description] | [BNM / NACSA / PDPA Commissioner] | [DD/MM/YYYY] | [Reference] | [Yes / No] |
| *[Add rows as required]* | | | | | |

---

### Appendix E — Glossary of Terms

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia |
| **CISO** | Chief Information Security Officer |
| **Compensating Control** | A security measure implemented as an interim safeguard while a primary remediation is in progress |
| **CVSS** | Common Vulnerability Scoring System — a standardized framework for rating the severity of security vulnerabilities |
| **CWE** | Common Weakness Enumeration — a community-developed list of software and hardware weakness types |
| **CVE** | Common Vulnerabilities and Exposures — a reference system for publicly known cybersecurity vulnerabilities |
| **Disclosure Program / VDP** | Vulnerability Disclosure Program — a formal channel and process for receiving, triaging, and remediating reported security vulnerabilities |
| **Good Faith Disclosure** | A vulnerability report submitted with the intent to improve security, without attempting to exploit, damage, or profit from the vulnerability beyond the agreed terms |
| **IDOR** | Insecure Direct Object Reference — a type of access control vulnerability |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| **Safe Harbour** | Legal protection extended to security researchers who report vulnerabilities in good faith under the VDP terms |
| **SLA** | Service Level Agreement — in this context, the agreed timeframe for completing remediation milestones |
| **VDR-ID** | Vulnerability Disclosure Record Identifier — unique reference for each disclosure record |

---

### Appendix F — Record Retention and Disposal Schedule

*Disclosure program records must be retained and disposed of in accordance with [Organization Name]'s Records Retention Policy and applicable regulatory requirements.*

| Record Type | Retention Period | Storage Location | Disposal Method | Responsible Party |
|---|---|---|---|---|
| Vulnerability Disclosure Log (master) | 7 years from closure date | [Secure Document Management System] | Secure deletion / shredding | IT Operations Manager |
| Individual Disclosure Record (detailed) | 7 years from closure date | [Secure Document Management System] | Secure deletion / shredding | IT Operations Manager |
| Reporter Communications | 7 years from closure date | [Email Archive / VDP Platform] | Secure deletion | IT Operations Manager |
| Remediation Evidence | 7 years from closure date | [ITSM / Change Management System] | Secure deletion | System Owner |
| Quarterly Review Reports | 7 years from report date | [Document Management System] | Secure deletion / shredding | IT Operations Manager |
| Regulatory Notification Records | 10 years | [Compliance Records System] | Secure deletion / shredding | Compliance Officer |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential | **Owner:** IT Operations Manager | **Organization:** [Organization Name]