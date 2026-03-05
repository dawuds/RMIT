# Access Revocation Evidence

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

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Evidence Reviewed](#5-evidence-reviewed)
6. [Recommendations](#6-recommendations)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Sign-off and Approval](#8-sign-off-and-approval)
9. [Review and Approval History](#9-review-and-approval-history)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document provides formal evidence of access revocation actions taken by [Organization Name] in response to access review findings. It demonstrates compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.57**, which requires financial institutions to ensure that access rights are revoked promptly and completely upon the conclusion of access review activities, staff departures, role changes, or other triggering events.

This record serves as an auditable artifact confirming that identified access anomalies, excess privileges, and unauthorized entitlements have been remediated in a timely and controlled manner.

### 1.2 Scope

*Describe the systems, user populations, access types, and time period covered by this revocation exercise. Be specific about what is included and explicitly state any exclusions.*

This revocation exercise covers the following:

- **Systems in Scope:** [List of applications, systems, databases, network devices, cloud platforms]
- **User Populations in Scope:** [e.g., all employees, contractors, privileged users, service accounts, third-party vendors]
- **Access Types in Scope:** [e.g., logical access, privileged access, remote access, application-level roles]
- **Review Period:** [Start Date] to [End Date]
- **Trigger:** [Per-event (e.g., staff resignation, role transfer) / Scheduled quarterly review / Ad-hoc audit finding]
- **Exclusions:** [List any explicitly excluded systems or user groups, with justification]

### 1.3 Regulatory Basis

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | Clause 10.57 | Access rights shall be reviewed and revoked promptly based on review findings; revocation evidence must be maintained |
| BNM RMiT | Clause 10.55 | Periodic access reviews shall be conducted for all critical systems |
| BNM RMiT | Clause 10.56 | Results of access reviews must be acted upon within defined timeframes |
| PDPA 2010 | Section 40 | Personal data processors must enforce access controls to protect personal data |

---

## 2. Assessment Scope and Criteria

### 2.1 Review Trigger

*Identify the specific event or schedule that initiated this access revocation exercise.*

- **Trigger Type:** ☐ Scheduled Quarterly Review &nbsp;&nbsp; ☐ Staff Departure &nbsp;&nbsp; ☐ Role Change / Promotion &nbsp;&nbsp; ☐ Audit Finding &nbsp;&nbsp; ☐ Incident Response &nbsp;&nbsp; ☐ Other: [Specify]
- **Trigger Date:** [Date trigger was identified or review was initiated]
- **Initiated By:** [Name, Role, Department]
- **Reference Event / Ticket:** [Reference number of linked access review, audit report, or HR notification]

### 2.2 Systems and Environments Assessed

*List every system included in the revocation scope. Include system criticality ratings as per your asset register.*

| # | System / Application | Environment | System Owner | Criticality | Access Model |
|---|---|---|---|---|---|
| 1 | [System Name] | [Production / UAT / DR] | [Owner Name] | [Critical / High / Medium / Low] | [RBAC / ABAC / DAC] |
| 2 | [System Name] | [Production / UAT / DR] | [Owner Name] | [Critical / High / Medium / Low] | [RBAC / ABAC / DAC] |
| 3 | [System Name] | [Production / UAT / DR] | [Owner Name] | [Critical / High / Medium / Low] | [RBAC / ABAC / DAC] |

### 2.3 Revocation Criteria

*Define the conditions that determine whether an access entitlement must be revoked. These criteria must align with organizational policy and BNM RMiT requirements.*

Revocation was applied to user accounts or entitlements meeting one or more of the following criteria:

| Criterion | Description | Policy Reference |
|---|---|---|
| **C1 – Terminated Users** | Accounts belonging to employees or contractors who have left the organization | IT Access Control Policy §[X] |
| **C2 – Role Change** | Users whose job responsibilities have changed, rendering prior access no longer required | HR Access Management Procedure §[X] |
| **C3 – Excess Privilege** | Accounts holding privileges beyond what is required for current job function (least-privilege violation) | BNM RMiT Clause 10.57 |
| **C4 – Dormant Accounts** | Accounts with no activity recorded within the past [30 / 60 / 90] days | IT Security Standard §[X] |
| **C5 – Segregation of Duties Conflict** | Access combinations creating SoD violations identified during review | Internal Control Framework §[X] |
| **C6 – Unauthorized Access** | Accounts with access not formally approved through the access request process | IT Access Control Policy §[X] |
| **C7 – Third-Party Expiry** | Vendor or contractor accounts whose engagement period has lapsed | Vendor Management Policy §[X] |

---

## 3. Methodology

### 3.1 Review Approach

*Describe the process and techniques used to identify access entitlements requiring revocation. Include tools, data sources, and validation steps.*

The following methodology was applied to identify and action access revocations:

1. **Data Extraction:** Access entitlement data was extracted from [IAM system / Active Directory / PAM tool] on [Extraction Date] by [Name/Team].
2. **HR Data Reconciliation:** Extracted user data was cross-referenced against the authoritative HR roster as of [HR Data Date] to identify terminated and transferred users.
3. **Role Matrix Comparison:** Current entitlements were compared against the approved Role-to-Function access matrix (version [X]) for each system.
4. **Dormancy Analysis:** Login activity logs were reviewed for the period [Start Date] to [End Date] to identify inactive accounts.
5. **SoD Conflict Analysis:** Entitlement combinations were assessed against the SoD conflict matrix (version [X]).
6. **Business Owner Validation:** Identified exceptions were presented to system and business owners for confirmation prior to revocation.
7. **Revocation Execution:** Confirmed revocations were actioned by [IT Operations / IAM Team] with change records raised in [ITSM Tool].
8. **Post-Revocation Verification:** Access removal was verified by re-extracting entitlement data and confirming absence of revoked permissions.

### 3.2 Tools and Systems Used

| Tool / System | Purpose | Version / Instance |
|---|---|---|
| [Active Directory / LDAP] | User account management and access removal | [Version] |
| [IAM / PAM Tool Name] | Privileged access extraction and revocation | [Version] |
| [ITSM Tool Name] | Change and incident tracking for revocation requests | [Version] |
| [HR System Name] | Authoritative source for employee status | [Version] |
| [SIEM / Log Management Tool] | Dormancy and activity log analysis | [Version] |

### 3.3 Sampling Approach

*If full population review was not performed, document the sampling rationale.*

- **Review Type:** ☐ Full Population &nbsp;&nbsp; ☐ Risk-Based Sample &nbsp;&nbsp; ☐ Statistical Sample
- **Sample Size:** [Number of accounts / Total population] ([Percentage]%)
- **Sampling Rationale:** [Explain basis for sample selection if not a full review, e.g., focus on privileged accounts, critical systems only]

---

## 4. Findings and Ratings

### 4.1 Summary of Findings

*Provide an executive summary of the access review findings that gave rise to this revocation exercise. Reference the source review document.*

- **Source Review Document:** [Access Review Report ID / Audit Report Reference]
- **Review Date:** [Date of source review]
- **Total Accounts Reviewed:** [Number]
- **Total Findings Requiring Revocation:** [Number]

| Finding Category | Accounts Identified | Accounts Actioned | Outstanding | Severity |
|---|---|---|---|---|
| Terminated Users | [#] | [#] | [#] | Critical |
| Excess Privilege | [#] | [#] | [#] | High |
| Dormant Accounts | [#] | [#] | [#] | Medium |
| SoD Conflicts | [#] | [#] | [#] | High |
| Unauthorized Access | [#] | [#] | [#] | Critical |
| Third-Party Expiry | [#] | [#] | [#] | High |
| Role Change | [#] | [#] | [#] | Medium |
| **Total** | **[#]** | **[#]** | **[#]** | — |

### 4.2 Detailed Revocation Log

*Record each individual revocation action. This table forms the primary evidentiary record and must be completed in full.*

| # | User ID | User Name | Department | System | Entitlement / Role Revoked | Finding Category | Severity | Revocation Date | Actioned By | Change Ref | Verification Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [User ID] | [Name] | [Dept] | [System] | [Role/Entitlement] | [Category] | [Critical/High/Medium/Low] | [Date] | [Technician] | [CHG#] | [Date] | ☐ Completed |
| 2 | [User ID] | [Name] | [Dept] | [System] | [Role/Entitlement] | [Category] | [Critical/High/Medium/Low] | [Date] | [Technician] | [CHG#] | [Date] | ☐ Completed |
| 3 | [User ID] | [Name] | [Dept] | [System] | [Role/Entitlement] | [Category] | [Critical/High/Medium/Low] | [Date] | [Technician] | [CHG#] | [Date] | ☐ Pending |

**Status Key:** Completed | Pending — Awaiting Approval | Deferred (with justification) | Compensating Control Applied

### 4.3 Severity Rating Definitions

| Severity | Definition | Required Action Timeline |
|---|---|---|
| **Critical** | Active access by terminated employee; unauthorized privileged access | Immediate — within 24 hours |
| **High** | SoD violation; excess privileged access; expired third-party access | Within 3 business days |
| **Medium** | Dormant accounts; role-change discrepancies; minor excess access | Within 7 business days |
| **Low** | Minor policy deviations; low-risk access with no immediate threat | Within 30 days or next review cycle |

### 4.4 Outstanding Items and Exceptions

*Document any revocations that could not be completed within the required timeframe, including business justification and compensating controls.*

| # | User ID | System | Entitlement | Reason for Deferral | Risk Owner | Compensating Control | Target Completion Date | Approval Reference |
|---|---|---|---|---|---|---|---|---|
| 1 | [User ID] | [System] | [Entitlement] | [Justification] | [Name, Role] | [Description] | [Date] | [Approval Ref] |

---

## 5. Evidence Reviewed

### 5.1 Source Documents and Records

*List all documents, reports, system exports, and other evidence reviewed during this exercise. Each item should be retrievable upon audit request.*

| # | Evidence Item | Document Reference / ID | Date | Source System / Owner | Storage Location |
|---|---|---|---|---|---|
| 1 | Access Entitlement Extract | [Report ID] | [Date] | [IAM System] | [SharePoint / DMS Path] |
| 2 | HR Termination / Transfer Listing | [HR Report Ref] | [Date] | [HR System] | [Storage Path] |
| 3 | Access Review Report (Source) | [Review Report ID] | [Date] | [Access Review Team] | [Storage Path] |
| 4 | Role-to-Function Access Matrix | [Matrix Version] | [Date] | [IT Security] | [Storage Path] |
| 5 | SoD Conflict Matrix | [Matrix Version] | [Date] | [Risk / Compliance] | [Storage Path] |
| 6 | Login Activity / Audit Logs | [Log Reference] | [Period] | [SIEM / Application] | [Storage Path] |
| 7 | Change Records (ITSM Tickets) | [CHG# range] | [Date Range] | [ITSM Tool] | [Storage Path] |
| 8 | Post-Revocation Verification Extract | [Report ID] | [Date] | [IAM System] | [Storage Path] |
| 9 | Business Owner Confirmation Emails | [Email Thread / Ticket Ref] | [Date Range] | [System Owners] | [Storage Path] |
| 10 | [Additional Evidence Item] | [Reference] | [Date] | [Source] | [Storage Path] |

### 5.2 Screenshots and System Evidence

*Reference any screenshots or screen captures taken as point-in-time evidence of revocation. These should be stored in Appendix A or the linked evidence repository.*

| # | Description | Capture Date | Captured By | Appendix / Reference |
|---|---|---|---|---|
| 1 | Pre-revocation entitlement screenshot — [System Name] | [Date] | [Name] | Appendix A-1 |
| 2 | Post-revocation confirmation screenshot — [System Name] | [Date] | [Name] | Appendix A-2 |
| 3 | ITSM change record — [CHG#] | [Date] | [Name] | Appendix A-3 |

---

## 6. Recommendations

### 6.1 Immediate Actions Required

*List any actions that must be taken immediately following this revocation exercise, beyond the revocations already performed.*

| # | Recommendation | Priority | Responsible Party | Target Date | Status |
|---|---|---|---|---|---|
| 1 | [Recommendation description] | [Critical / High / Medium / Low] | [Owner Name, Role] | [Date] | [Open / In Progress / Closed] |
| 2 | [Recommendation description] | [Priority] | [Owner] | [Date] | [Status] |
| 3 | [Recommendation description] | [Priority] | [Owner] | [Date] | [Status] |

### 6.2 Process Improvement Recommendations

*Identify systemic weaknesses revealed by this exercise and recommend process or control enhancements to prevent recurrence.*

| # | Observation | Root Cause | Recommendation | Control Enhancement | Owner | Target Date |
|---|---|---|---|---|---|---|
| 1 | [e.g., Terminated user accounts not disabled within SLA] | [e.g., HR-IT notification process gap] | [e.g., Implement automated HR-IAM integration trigger] | [Preventive / Detective / Corrective] | [Owner] | [Date] |
| 2 | [Observation] | [Root Cause] | [Recommendation] | [Control Type] | [Owner] | [Date] |
| 3 | [Observation] | [Root Cause] | [Recommendation] | [Control Type] | [Owner] | [Date] |

### 6.3 Follow-Up Review Requirements

*Specify any follow-up reviews required to verify that outstanding items and recommendations have been addressed.*

- **Follow-Up Review Date:** [Date]
- **Follow-Up Review Owner:** [Name, Role]
- **Items to Verify:** [List outstanding revocations and open recommendations to be tracked]
- **Escalation Path:** If outstanding items are not resolved by [Date], escalate to [Role / Committee].

---

## 7. Roles and Responsibilities

*This RACI matrix defines accountability for access revocation activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Department Head (Owner) | IT Security / IAM Team | System / Application Owner | IT Operations | HR Department | Internal Audit | Risk & Compliance |
|---|---|---|---|---|---|---|---|
| Initiate access revocation review | A | R | C | I | C | I | C |
| Extract entitlement data | I | R | C | R | I | I | I |
| Reconcile with HR data | C | R | I | I | R | I | I |
| Validate findings with business owners | A | R | R | I | C | I | C |
| Execute access revocations | I | C | C | R | I | I | I |
| Verify post-revocation state | I | R | C | R | I | I | I |
| Document evidence and complete this record | A | R | C | C | I | I | C |
| Review and approve this document | A | C | C | I | I | C | C |
| Follow up on outstanding items | A | R | C | C | I | I | C |
| Report to governance / management | A | C | I | I | I | C | R |
| Retain records per retention policy | A | R | I | C | I | C | C |

---

## 8. Sign-off and Approval

### 8.1 Preparer Declaration

*The preparer confirms that this document accurately records the access revocation activities performed and that all evidence listed in Section 5 is available for inspection.*

| Field | Details |
|---|---|
| **Prepared By** | [Full Name] |
| **Title / Role** | [Job Title] |
| **Department** | [Department Name] |
| **Date Prepared** | [Date] |
| **Signature** | ___________________________ |

### 8.2 Technical Reviewer Sign-Off

*The IT Security or IAM reviewer confirms technical accuracy of the revocation log and evidence.*

| Field | Details |
|---|---|
| **Reviewed By** | [Full Name] |
| **Title / Role** | [e.g., IT Security Manager / IAM Lead] |
| **Department** | [Department Name] |
| **Date Reviewed** | [Date] |
| **Review Outcome** | ☐ Approved without exceptions &nbsp;&nbsp; ☐ Approved with comments &nbsp;&nbsp; ☐ Returned for revision |
| **Comments** | [Any technical review comments] |
| **Signature** | ___________________________ |

### 8.3 System / Business Owner Confirmation

*Each system owner listed in Section 2.2 must confirm that revocations for their system have been validated and completed.*

| System Name | System Owner | Department | Confirmation | Date | Signature |
|---|---|---|---|---|---|
| [System Name] | [Name] | [Dept] | ☐ Confirmed | [Date] | ___________ |
| [System Name] | [Name] | [Dept] | ☐ Confirmed | [Date] | ___________ |
| [System Name] | [Name] | [Dept] | ☐ Confirmed | [Date] | ___________ |

### 8.4 Department Head Approval

*The accountable Department Head approves this record as an accurate and complete representation of access revocation activities.*

| Field | Details |
|---|---|
| **Approved By** | [Full Name] |
| **Title / Role** | [Department Head / Relevant Senior Management Title] |
| **Department** | [Department Name] |
| **Date Approved** | [Date] |
| **Approval Outcome** | ☐ Approved &nbsp;&nbsp; ☐ Conditionally Approved — Pending: [Conditions] &nbsp;&nbsp; ☐ Rejected — Reason: [Reason] |
| **Signature** | ___________________________ |

---

## 9. Review and Approval History

### 9.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Reviewer Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Reviewer Name] | [Description of major revision] |

### 9.2 Document Review Schedule

| Review Type | Frequency | Next Due Date | Assigned To |
|---|---|---|---|
| Per-Event Review | Upon each triggering event | [Upon next trigger] | [IT Security / IAM Team] |
| Scheduled Quarterly Review | Quarterly | [Next Quarter Date] | [Department Head] |
| Annual Policy Alignment Review | Annually | [Annual Review Date] | [Risk & Compliance] |

---

## 10. References

The following regulatory documents, policies, and standards are referenced by this artifact:

| # | Document | Clause / Section | Description |
|---|---|---|---|
| 1 | BNM Risk Management in Technology (RMiT) Policy Document | **Clause 10.57** | Requirement to act on access review findings and revoke access entitlements; evidence of revocation must be maintained |
| 2 | BNM Risk Management in Technology (RMiT) Policy Document | Clause 10.55 | Periodic access reviews for critical systems |
| 3 | BNM Risk Management in Technology (RMiT) Policy Document | Clause 10.56 | Timely remediation of access review findings |
| 4 | Personal Data Protection Act 2010 (PDPA) | Section 40 | Security of personal data; access control obligations for licensed processors |
| 5 | [Organization Name] IT Access Control Policy | §[X] | Internal policy governing access provisioning, review, and revocation |
| 6 | [Organization Name] Privileged Access Management Procedure | §[X] | Procedures for managing and revoking privileged accounts |
| 7 | [Organization Name] Information Security Policy | §[X] | Overarching information security requirements |
| 8 | [Organization Name] HR Leaver / Mover Procedure | §[X] | Process for notifying IT of staff departures and role changes |
| 9 | ISO/IEC 27001:2022 | Control 5.18 | Access rights review and revocation requirements |

---

## 11. Appendices

### Appendix A — Revocation Evidence Screenshots

*Attach or reference point-in-time screenshots demonstrating pre- and post-revocation states for sampled accounts. Label each screenshot clearly with the account, system, date, and whether it represents a pre- or post-revocation state.*

| Ref | Description | System | Account | Date | Status |
|---|---|---|---|---|---|
| A-1 | Pre-revocation entitlement view | [System] | [User ID] | [Date] | [Attached / Linked] |
| A-2 | Post-revocation confirmation | [System] | [User ID] | [Date] | [Attached / Linked] |
| A-3 | ITSM change record approval | [ITSM Tool] | [CHG#] | [Date] | [Attached / Linked] |
| A-4 | [Additional evidence description] | [System] | [Reference] | [Date] | [Attached / Linked] |

### Appendix B — Business Owner Confirmation Records

*Attach email correspondence, system approval workflows, or written confirmations from system and business owners validating the revocation findings prior to execution.*

- [Email thread / Ticket reference confirming [System Name] revocations — Date: [Date]]
- [Email thread / Ticket reference confirming [System Name] revocations — Date: [Date]]
- [Additional correspondence as applicable]

### Appendix C — ITSM Change Records

*Attach or list all IT change management records (change requests, approvals, and completion confirmations) raised in connection with this revocation exercise.*

| Change Record # | System | Description | Raised By | Approved By | Completion Date |
|---|---|---|---|---|---|
| [CHG-XXXXX] | [System] | [Brief description of changes made] | [Name] | [Approver] | [Date] |
| [CHG-XXXXX] | [System] | [Brief description] | [Name] | [Approver] | [Date] |

### Appendix D — Post-Revocation Verification Report

*Attach the post-revocation entitlement extract and comparison report confirming that all revoked accesses are no longer present in the system. Include extraction timestamp.*

- **Extraction Date/Time:** [Date and Time]
- **Extracted By:** [Name, Role]
- **Tool Used:** [IAM System / Active Directory Report]
- **Report Reference:** [Report ID / File Name]
- **Findings:** ☐ All revoked entitlements confirmed removed &nbsp;&nbsp; ☐ Exceptions noted — see Appendix D-1

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **Access Entitlement** | A specific permission, role, or privilege granted to a user account within a system |
| **Dormant Account** | A user account that has had no recorded activity within the defined inactivity threshold |
| **IAM** | Identity and Access Management — the framework of policies and technologies for managing digital identities |
| **Least Privilege** | The principle that users should be granted only the minimum access rights necessary to perform their duties |
| **PAM** | Privileged Access Management — controls governing accounts with elevated or administrative rights |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **Revocation** | The formal removal or disabling of access rights previously granted to a user |
| **SoD** | Segregation of Duties — the separation of critical tasks to prevent fraud or error |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk for financial institutions |

---

*This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. Retain in accordance with [Organization Name] Records Retention Policy.*

*Document ID: [Document ID] | Version 1.0 | © [Organization Name] [Year]*