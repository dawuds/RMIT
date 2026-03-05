# Access Review Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Title** | Access Review Procedure |
| **Category** | Procedures |
| **Owner** | [Relevant Department Head] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 10.57 |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It must not be disclosed, reproduced, or distributed to any unauthorized party without prior written consent from [Organization Name].

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Access Review Principles](#5-access-review-principles)
6. [Access Review Schedule and Triggers](#6-access-review-schedule-and-triggers)
7. [Step-by-Step Process Flow](#7-step-by-step-process-flow)
8. [Roles and Responsibilities (RACI)](#8-roles-and-responsibilities-raci)
9. [Tools and Systems Used](#9-tools-and-systems-used)
10. [Access Review Outcomes and Decision Criteria](#10-access-review-outcomes-and-decision-criteria)
11. [Escalation Procedures](#11-escalation-procedures)
12. [Documentation and Evidence Requirements](#12-documentation-and-evidence-requirements)
13. [Metrics and Reporting](#13-metrics-and-reporting)
14. [Non-Compliance and Exceptions](#14-non-compliance-and-exceptions)
15. [Review and Update History](#15-review-and-update-history)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose

*Describe the purpose of this procedure, including the regulatory driver and the business objective it serves.*

This procedure establishes the formal process by which [Organization Name] conducts periodic reviews and recertification of user access rights to all information systems, applications, and data assets. It ensures that access privileges remain appropriate, principle of least privilege is upheld, and that access granted to individuals reflects their current roles and responsibilities.

This procedure is established in compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.57, which mandates that financial institutions implement a formal process for the periodic review of user access rights to ensure they remain appropriate and authorized.

The objectives of this procedure are to:

- Ensure all access rights granted across [Organization Name]'s technology environment are reviewed on a defined periodic basis.
- Identify and remediate inappropriate, excessive, or orphaned access in a timely manner.
- Demonstrate regulatory compliance with BNM RMiT and applicable internal policies.
- Establish clear accountability for access certification decisions.
- Provide a documented audit trail of access review activities.
- Mitigate the risk of unauthorized access, insider threats, and privilege creep.

---

## 2. Scope and Applicability

*Define the boundaries of this procedure — which systems, users, and organizational units it applies to. Be specific to avoid ambiguity during audits.*

### 2.1 In-Scope Systems and Environments

This procedure applies to all access review activities conducted across the following systems and environments operated or managed by [Organization Name]:

| Category | Examples | Included |
|---|---|---|
| Core Banking Systems | [System Name], [System Name] | Yes |
| Internet Banking Platforms | [Platform Name] | Yes |
| Payment and Settlement Systems | [System Name] | Yes |
| Enterprise Resource Planning (ERP) | [System Name] | Yes |
| Customer Relationship Management (CRM) | [System Name] | Yes |
| Data Warehouses and Analytics Platforms | [Platform Name] | Yes |
| Network Infrastructure (VPN, Firewalls) | [Device/System Name] | Yes |
| Cloud Platforms and SaaS Applications | [Platform Name] | Yes |
| Privileged Access / Administrative Accounts | All environments | Yes |
| Active Directory / Identity Providers | [AD Domain / IDP Name] | Yes |
| Third-Party and Vendor Managed Systems | [Specify if applicable] | [Yes/No] |

### 2.2 In-Scope User Populations

This procedure applies to all individuals who hold access to in-scope systems, including but not limited to:

- **Permanent employees** — all grades and business units
- **Contract and temporary staff** — short-term, project-based, or agency-engaged workers
- **Third-party vendors and service providers** — with any form of access to [Organization Name] systems
- **Privileged users** — system administrators, database administrators, security administrators, and other elevated-privilege accounts
- **Service accounts** — non-human identities used for system-to-system integrations
- **Shared and generic accounts** — where applicable

### 2.3 Out of Scope

The following are explicitly excluded from this procedure:

- Physical access control systems (covered under [Reference Physical Access Policy])
- Read-only public-facing content (e.g., public website)
- [Any other exclusions relevant to the organization]

### 2.4 Applicability

This procedure applies to all business units, subsidiaries, and branches of [Organization Name] operating within Malaysia. Application to overseas subsidiaries shall be determined in accordance with local regulatory requirements and the Group Access Management Policy.

---

## 3. Regulatory and Policy Context

*List all regulatory requirements, internal policies, and standards that this procedure is designed to satisfy. Reference specific clauses where available.*

### 3.1 Regulatory Requirements

| Regulation / Standard | Issuing Body | Relevant Clause / Section | Requirement Summary |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.57 | Financial institutions must implement a formal process for periodic review of user access rights to verify that access remains appropriate and authorized |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.54 – 10.56 | Access control requirements including segregation of duties and privileged access management |
| Personal Data Protection Act 2010 (PDPA) | Malaysian Government | Section 5 (Security Principle) | Organizations must take practical steps to protect personal data from unauthorized access |
| [Other Applicable Regulation] | [Issuing Body] | [Clause] | [Requirement Summary] |

### 3.2 Internal Policy and Standards Alignment

| Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy governing access management |
| Access Control and Identity Management Policy | [Doc ID] | Governing policy for this procedure |
| Privileged Access Management Procedure | [Doc ID] | Related procedure for privileged account reviews |
| Joiner, Mover, Leaver (JML) Procedure | [Doc ID] | Related procedure for access provisioning and deprovisioning |
| Information Classification Policy | [Doc ID] | Governs classification levels determining review frequency |
| Vendor and Third-Party Access Management Policy | [Doc ID] | Governs third-party access review obligations |
| IT Risk Management Framework | [Doc ID] | Overarching risk governance framework |

---

## 4. Definitions and Abbreviations

*Provide clear definitions for all technical and regulatory terms used in this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Access Rights** | Permissions granted to a user, service account, or system to read, write, execute, or administer resources within an information system |
| **Access Recertification** | The formal process by which an authorized reviewer confirms that an individual's current access rights are appropriate for their role and business need |
| **Privilege Creep** | The gradual accumulation of access rights beyond what is necessary for a user's current role, typically resulting from role changes without corresponding access modifications |
| **Least Privilege** | The principle that users should be granted the minimum level of access rights required to perform their legitimate job functions |
| **Orphaned Account** | A user account that remains active in a system following the departure or role change of the associated individual, with no current legitimate owner |
| **Privileged Account** | An account that holds elevated permissions, including but not limited to system administrator, database administrator, or root-level access |
| **Service Account** | A non-human account used by an application, service, or automated process to interact with other systems |
| **Recertification Campaign** | A time-bound, structured exercise during which designated reviewers certify or revoke user access across defined systems |
| **Access Owner** | The individual (typically a manager or system owner) responsible for authorizing and certifying access to a specific system or dataset |
| **Residual Risk** | Risk remaining after controls have been applied |
| **Segregation of Duties (SoD)** | A control that distributes critical tasks among multiple individuals to reduce the risk of error or fraud |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| IAM | Identity and Access Management |
| PAM | Privileged Access Management |
| RACI | Responsible, Accountable, Consulted, Informed |
| JML | Joiner, Mover, Leaver |
| SoD | Segregation of Duties |
| IT | Information Technology |
| CISO | Chief Information Security Officer |
| AD | Active Directory |
| MFA | Multi-Factor Authentication |
| GRC | Governance, Risk, and Compliance |

---

## 5. Access Review Principles

*Articulate the guiding principles that underpin the access review process, ensuring reviewers understand the intent of the controls.*

The access review process at [Organization Name] is governed by the following core principles:

### 5.1 Least Privilege

All users shall be granted only the minimum level of access necessary to perform their assigned job functions. Access review activities shall actively identify and remediate instances where users hold access beyond their current business need.

### 5.2 Need-to-Know

Access to sensitive, confidential, or restricted information shall be limited to individuals with a demonstrated, current business need. Access reviewers must apply this principle when certifying access to high-classification data and systems.

### 5.3 Accountability

Each access certification decision must be made by an accountable, named individual who has sufficient knowledge of the user's role and responsibilities to make an informed judgment. Automated or blanket approvals are not permitted.

### 5.4 Segregation of Duties

The access review process shall identify and flag any access combinations that violate SoD controls. No individual shall hold conflicting access rights that could enable fraud or error without detection.

### 5.5 Timeliness

Access identified as inappropriate during a review campaign must be remediated within the timeframes defined in Section 10 of this procedure. Deferred remediation must follow the exception process defined in Section 14.

### 5.6 Auditability

All access review activities, decisions, and outcomes must be documented and retained in accordance with [Organization Name]'s records retention policy to support regulatory examination and internal audit.

---

## 6. Access Review Schedule and Triggers

*Define when access reviews must occur, both on a scheduled basis and in response to specific events.*

### 6.1 Scheduled (Periodic) Reviews

Access reviews shall be conducted on a risk-based frequency determined by the sensitivity of the system and the nature of the access:

| Review Type | Systems / Access Category | Frequency | Responsible Party |
|---|---|---|---|
| Full Access Recertification Campaign | All in-scope systems | Annually (minimum) | System Owners / Line Managers |
| Privileged Account Review | All privileged and administrative accounts | Quarterly | IT Security / PAM Team |
| Third-Party and Vendor Access Review | All external party access | Semi-annually | Vendor Managers / System Owners |
| Service Account Review | All service and shared accounts | Semi-annually | Application Owners / IT Operations |
| High-Risk System Review | Core banking, payment systems, PII data stores | Semi-annually | System Owners |
| Segregation of Duties Review | All SoD conflict-sensitive roles | Annually | IT Security / Internal Audit |

### 6.2 Event-Triggered (Ad Hoc) Reviews

In addition to scheduled reviews, access reviews must be initiated upon the occurrence of any of the following significant changes or events:

| Trigger Event | Scope of Review | Required Completion |
|---|---|---|
| Employee terminates employment | All access for departing individual | Immediate (day of departure) |
| Employee transfers to a new role | Access for transferred individual | Within [X] business days |
| Significant system upgrade or migration | All access to affected system | Prior to go-live |
| Security incident involving unauthorized access | All access to affected system(s) | Within [X] business days of incident |
| Outsourcing or insourcing of a function | All access related to the function | Prior to or upon transition |
| Mergers, acquisitions, or restructuring | All access affected by the change | Within [X] days of effective date |
| Regulatory examination or internal audit finding | Access related to the finding | Per remediation plan timeline |
| Introduction of a new high-risk system | All access to the new system | Within [X] days of go-live |

### 6.3 Review Campaign Planning

*Describe the annual planning process for scheduling access review campaigns, including how campaigns are communicated to reviewers.*

The [IT Security Team / IAM Team] shall maintain an annual Access Review Calendar that schedules all periodic review campaigns. The calendar shall be:

- Published by [Month] each year for the forthcoming review cycle.
- Communicated to all System Owners and Line Managers via [Communication Channel].
- Updated promptly to reflect any event-triggered reviews.
- Reviewed as part of the annual IT Security governance calendar.

---

## 7. Step-by-Step Process Flow

*This section defines the end-to-end procedural steps for conducting an access review campaign. Authors should supplement this with a process flow diagram where available.*

### 7.1 Process Overview

The access review process consists of the following five phases:

```
Phase 1: Preparation → Phase 2: Distribution → Phase 3: Certification → Phase 4: Remediation → Phase 5: Reporting & Closure
```

---

### 7.2 Phase 1 — Preparation

**Step 1.1 — Initiate the Review Campaign**

The [IT Security Team / IAM Team] shall formally initiate each access review campaign by:

- Issuing a campaign initiation notice to all relevant System Owners and Line Managers, referencing the scheduled campaign date from the Access Review Calendar.
- Confirming the scope of the campaign (systems, user populations, and access types to be reviewed).
- Confirming the review window duration (standard: [X] business days).
- Assigning campaign identifiers for tracking purposes.

**Step 1.2 — Extract Access Data**

Prior to distribution of review tasks, the [IT Security Team / IAM Team] shall:

- Extract current access entitlement reports from all in-scope systems as at the campaign start date.
- Validate the completeness and accuracy of extracted data against the [Asset Register / CMDB].
- Reconcile user accounts against the current HR employee register to identify active employees, inactive employees, contractors, and service accounts.
- Flag accounts with no activity within the past [X] days for heightened scrutiny.
- Flag all privileged and administrative accounts for separate review.
- Identify any accounts with no associated HR record (potential orphaned accounts).

**Step 1.3 — Prepare Review Packages**

The [IT Security Team / IAM Team] shall prepare individual review packages for each reviewer, containing:

- A list of all users and their current access entitlements within the reviewer's scope.
- The last date of access activity for each user (where available).
- Flags for accounts of concern (inactive, orphaned, high-risk).
- Instructions and decision guidance for reviewers.
- The review completion deadline.

---

### 7.3 Phase 2 — Distribution

**Step 2.1 — Assign Review Tasks**

Access review tasks shall be assigned as follows:

| User Type | Assigned Reviewer | Rationale |
|---|---|---|
| Permanent employees | Direct Line Manager | Best knowledge of role and business need |
| Contract / temporary staff | Responsible Contract Manager | Accountable for contractor activity |
| Third-party / vendor users | Relationship / Vendor Manager | Accountable for vendor access |
| Service accounts | Application / System Owner | Responsible for application function |
| Orphaned accounts | [IT Security Team] | No current manager — security team reviews |
| Privileged accounts | [IT Security / PAM Team] + Line Manager | Joint review for elevated accounts |

**Step 2.2 — Distribute Review Tasks**

The [IT Security Team / IAM Team] shall distribute review tasks via [IAM Tool / GRC Platform / Email] with:

- Clear instructions on how to access and complete the review.
- Decision options available to reviewers (Certify / Revoke / Modify / Escalate).
- A link to this procedure and supporting guidance.
- The campaign deadline and escalation contact details.

**Step 2.3 — Acknowledge Receipt**

Reviewers are required to acknowledge receipt and acceptance of their review tasks within [X] business days of distribution. Non-acknowledgment shall trigger an escalation per Section 11.

---

### 7.4 Phase 3 — Certification

**Step 3.1 — Reviewer Assessment**

For each user and access entitlement within their scope, the reviewer shall assess:

- Is the user still employed or engaged by [Organization Name] in an active capacity?
- Does the user's current role require the access entitlement in question?
- Is the level of access (e.g., read, write, admin) appropriate for the user's current function?
- Does the access entitlement create any SoD conflict?
- Is the access still required, or was it granted for a specific project that has since concluded?

**Step 3.2 — Certification Decision**

Based on the assessment, the reviewer shall record one of the following decisions for each access entitlement:

| Decision | Meaning | Required Action |
|---|---|---|
| **Certify (Approve)** | Access is appropriate and should be retained | No change required |
| **Revoke** | Access is no longer appropriate and must be removed | Submit revocation request |
| **Modify** | Access level should be changed (e.g., downgraded from Admin to Read) | Submit modification request |
| **Escalate** | Reviewer is uncertain — requires additional information or approval | Escalate per Section 11 |

**Step 3.3 — Submission of Decisions**

Reviewers shall submit all certification decisions via [IAM Tool / GRC Platform / Designated Form] by the campaign deadline. Decisions must include:

- The reviewer's name, title, and date.
- The specific access entitlement reviewed.
- The decision selected.
- A justification note for all Revoke and Modify decisions.

**Step 3.4 — Manager of Manager Review (for escalations)**

Where a reviewer is uncertain or identifies a potential conflict of interest, the review shall be escalated to the reviewer's line manager or the System Owner for a second-level decision per Section 11.

**Step 3.5 — Overdue Review Follow-Up**

The [IT Security Team] shall monitor campaign progress daily during the review window. Reviewers who have not completed their tasks by [X] business days before the campaign deadline shall receive a formal reminder notice. Non-completion by the deadline triggers the escalation process defined in Section 11.2.

---

### 7.5 Phase 4 — Remediation

**Step 4.1 — Initiate Remediation**

Upon receipt of certified decisions, the [IT Security Team / IAM Team] shall:

- Consolidate all Revoke and Modify decisions into a remediation work list.
- Raise access removal or modification requests with the relevant [IT Operations / Service Desk / System Administrators] via [ITSM Tool / Ticketing System].
- Assign priority to remediation tasks in accordance with Section 10.2.
- Confirm SLA start date for each remediation task.

**Step 4.2 — Access Removal and Modification**

The responsible [System Administrator / IT Operations Team] shall:

- Execute access removals and modifications in accordance with the approved decisions.
- Confirm completion back to the [IT Security Team] via [ITSM Tool] within the required timeframe.
- Retain evidence of the change (e.g., screenshot, system log, change record) for audit purposes.

**Step 4.3 — Orphaned Account Disposition**

Orphaned accounts identified during the review shall be handled as follows:

| Scenario | Required Action | Timeframe |
|---|---|---|
| Account confirmed as orphaned with no business need | Disable account immediately; delete after [X] days | Immediate |
| Account confirmed as service account with active function | Document owner and business justification; assign to System Owner | Within [X] business days |
| Account ownership unclear | Escalate to [IT Security Team] for investigation | Within [X] business days |

**Step 4.4 — Verification of Remediation**

The [IT Security Team] shall verify that all access removals and modifications have been completed by:

- Re-extracting entitlement data from in-scope systems post-remediation.
- Comparing post-remediation data against the approved decisions list.
- Confirming closure of all remediation tickets in [ITSM Tool].
- Documenting any discrepancies and raising follow-up actions.

---

### 7.6 Phase 5 — Reporting and Closure

**Step 5.1 — Compile Campaign Results**

Upon completion of the remediation phase, the [IT Security Team] shall compile a formal Access Review Campaign Report covering:

- Total access entitlements reviewed.
- Number of entitlements certified, revoked, modified, and escalated.
- Total number of accounts disabled or deleted.
- Number of SoD conflicts identified and resolved.
- Remediation completion rates and any overdue items.
- Non-participating reviewers and actions taken.

**Step 5.2 — Formal Closure Approval**

The Access Review Campaign Report shall be submitted to the [CISO / IT Risk Committee] for formal review and approval of campaign closure.

**Step 5.3 — Communication of Outcomes**

Following closure approval, the [IT Security Team] shall communicate campaign outcomes to:

- [CISO / Head of IT Risk] — summary report.
- Relevant System Owners — system-specific outcomes.
- [Internal Audit] — full campaign report for audit purposes.
- [Risk and Compliance Team] — for regulatory reporting purposes.

**Step 5.4 — Record Retention**

All campaign documentation, including access entitlement extracts, certification decisions, remediation records, and the campaign closure report, shall be retained for a minimum of [X] years in accordance with [Organization Name]'s Records Retention Policy and BNM regulatory requirements.

---

## 8. Roles and Responsibilities (RACI)

*This RACI matrix defines the responsibilities of each role across the key activities of the access review process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 8.1 Role Definitions

| Role | Description |
|---|---|
| **IT Security Team / IAM Team** | Administers the access review process, extracts entitlement data, coordinates campaigns, and tracks remediation |
| **CISO / Head of IT Risk** | Executive accountability for the access review program; approves campaign closure |
| **Line Manager** | Certifies access for direct reports; accountable for correctness of certification decisions |
| **System Owner** | Accountable for access to their system; certifies service accounts and vendor access |
| **IT Operations / System Administrators** | Executes access removals and modifications; provides evidence of completion |
| **Vendor / Contract Manager** | Certifies access for third-party and contractor users under their management |
| **Internal Audit** | Independent assurance; reviews access review records and tests process effectiveness |
| **HR Department** | Provides current employee roster; confirms employment and role status |
| **Risk and Compliance Team** | Ensures regulatory compliance obligations are met; receives reporting |

### 8.2 RACI Matrix

| Activity | IT Security / IAM | CISO / Head of IT Risk | Line Manager | System Owner | IT Operations / Sysadmin | Vendor / Contract Manager | Internal Audit | HR | Risk & Compliance |
|---|---|---|---|---|---|---|---|---|---|
| Maintain access review schedule and calendar | R | A | I | I | I | I | I | — | I |
| Extract access entitlement data | R | A | — | C | C | — | — | — | — |
| Reconcile user list against HR register | R | A | — | — | — | — | — | C | — |
| Prepare and distribute review packages | R | A | I | I | — | I | — | — | — |
| Certify access for direct reports | C | — | R/A | — | — | — | — | — | — |
| Certify service and shared accounts | C | — | — | R/A | — | — | — | — | — |
| Certify vendor and contractor access | C | — | — | C | — | R/A | — | — | — |
| Escalate uncertain or conflicted decisions | R | A | C | C | — | C | — | — | — |
| Initiate remediation requests | R | A | I | I | — | — | — | — | — |
| Execute access removals and modifications | I | I | — | I | R/A | — | — | — | — |
| Verify remediation completion | R | A | — | I | C | — | — | — | — |
| Compile and issue campaign report | R | A | I | I | — | — | I | — | I |
| Approve campaign closure | C | A/R | — | — | — | — | — | — | C |
| Retain access review records | R | A | — | — | — | — | — | — | C |
| Review for internal audit assurance | C | I | — | C | — | — | R/A | — | C |

---

## 9. Tools and Systems Used

*Identify the specific tools, platforms, and systems used to support the access review process. This section enables consistent execution and supports audit evidence collection.*

### 9.1 Primary Tools

| Tool / System | Purpose | Owner / Administrator | Access |
|---|---|---|---|
| [IAM / PAM Platform, e.g., SailPoint, CyberArk, Saviynt] | Automated access entitlement extraction, campaign management, certification workflow | [IT Security Team] | [Restricted – IT Security] |
| [GRC Platform, e.g., ServiceNow GRC, Archer] | Campaign tracking, reporting, and risk documentation | [Risk & Compliance Team] | [Restricted – Risk Team] |
| [ITSM Tool, e.g., ServiceNow, Jira Service Management] | Remediation ticket management and SLA tracking | [IT Operations] | [Broad – IT Staff] |
| [Active Directory / Azure AD / LDAP] | Source system for user account and access data | [IT Operations] | [Restricted – IT Admins] |
| [HR Information System, e.g., SAP HR, Workday] | Current employee and role data for reconciliation | [HR Department] | [Restricted – HR] |
| [Core Banking System] | Access entitlement data for core banking users | [Application Owner] | [Restricted – System Admins] |
| [Data Analytics / Reporting Tool] | Campaign metrics and dashboard reporting | [IT Security Team] | [IT Security / Management] |

### 9.2 Supporting Documentation Tools

| Tool / Purpose | Location |
|---|---|
| Access Review Campaign Report template | [SharePoint / Network Drive Path] |
| Reviewer Guidance and Training Material | [SharePoint / Intranet Link] |
| Access Review Decision Form (manual fallback) | [SharePoint / Network Drive Path] |
| Escalation Log Template | [SharePoint / Network Drive Path] |

### 9.3 Manual Review Process (Contingency)

*Describe the fallback process to be followed if primary IAM tooling is unavailable during a review campaign.*

In the event that the primary [IAM Tool] is unavailable, the [IT Security Team] shall:

1. Extract access entitlement data directly from source systems using available administrative reports.
2. Prepare manual access review spreadsheets using the approved template (Appendix B).
3. Distribute review packages to reviewers via [Secure Email / Encrypted File Transfer].
4. Collect completed review decisions via [Secure Email / Designated SharePoint Folder].
5. Process remediation decisions manually via [ITSM Tool].
6. Document the contingency event in the campaign closure report.

---

## 10. Access Review Outcomes and Decision Criteria

*Define the criteria reviewers should apply when making certification decisions, and the remediation timeframes that apply to each decision type.*

### 10.1 Decision Criteria Guidance

Reviewers should apply the following criteria when evaluating each access entitlement:

| Decision | Apply When |
|---|---|
| **Certify** | The user is actively employed / engaged; their current role requires this specific access; the level of access is proportionate to the role; no SoD conflict exists |
| **Revoke** | The user has left the organization; the user's role no longer requires this access; the access was granted for a completed project; the account appears to be orphaned; an SoD conflict exists |
| **Modify** | The access level is disproportionate to the current role (e.g., admin access where read-only suffices); the user has been promoted or transferred and requires adjusted access |
| **Escalate** | The reviewer lacks sufficient information to make a determination; a potential conflict of interest exists; the access appears unusual but the reviewer cannot confirm appropriateness |

### 10.2 Remediation Timeframes

Access identified for revocation or modification must be remediated within the following timeframes, based on risk classification:

| Risk Level | Scenario | Remediation Timeframe |
|---|---|---|
| **Critical** | Terminated employee with active privileged access; active security incident | Immediate — same business day |
| **High** | Terminated employee with non-privileged access; active SoD conflict | Within [1] business day |
| **Medium** | Current employee with inappropriate privileged access | Within [5] business days |
| **Low** | Current employee with minor access adjustment required | Within [10] business days |
| **Exception** | Remediation not feasible within standard timeframe | Exception process per Section 14 |

### 10.3 Post-Review Verification

All revocations and modifications shall be verified by the [IT Security Team] within [X] business days of the stated remediation completion date. Verification shall include re-extraction of entitlement data from the source system to confirm the change has been applied.

---

## 11. Escalation Procedures

*Define the escalation paths for situations that cannot be resolved at the reviewer level, including non-participation, uncertain decisions, and system access emergencies.*

### 11.1 Escalation Scenarios

| Scenario | Escalation Path | Required Action |
|---|---|---|
| Reviewer unable to make certification decision | Reviewer → Line Manager of Reviewer | Reviewer documents uncertainty and escalates within [X] hours |
| Reviewer has conflict of interest | Reviewer → [IT Security Team] | IT Security assigns an independent reviewer |
| Reviewer non-responsive to initial assignment | [IT Security Team] → Reviewer's Line Manager | Line Manager notified after [X] business days of non-response |
| Reviewer non-responsive after Line Manager escalation | [IT Security Team] → Department Head | Department Head notified and asked to assign a delegate |
| Department Head non-responsive | [IT Security Team] → CISO | CISO approves default action (conservative: revoke access pending review) |
| Orphaned account with no identifiable owner | [IT Security Team] → System Owner | System Owner determines disposition within [X] business days |
| Critical risk access identified during review | [IT Security Team] → CISO + System Owner | Immediate notification; emergency revocation may be initiated without awaiting campaign closure |
| SoD conflict identified | [IT Security Team] → System Owner + Risk Team | Conflict logged in GRC platform; remediation plan raised within [X] business days |

### 11.2 Escalation for Non-Completion of Reviews

The following escalation timeline applies when a reviewer fails to complete their access review tasks by the campaign deadline:

| Timeline | Action |
|---|---|
| Campaign deadline – [5] business days | Automated reminder sent to reviewer |
| Campaign deadline – [2] business days | Manual reminder sent to reviewer; Line Manager CC'd |
| Campaign deadline passed with incomplete review | Formal escalation notice to Line Manager; CISO informed |
| [X] business days post-deadline | Department Head escalation; conservative default action applied (revoke unreviewed access) |
| [X+5] business days post-deadline | CISO decision on final disposition; incident logged for governance reporting |

### 11.3 Emergency Access Revocation

Where evidence of unauthorized, fraudulent, or malicious access activity is identified during the review process, the [IT Security Team] is authorized to immediately revoke access without awaiting standard campaign processes. Emergency revocations shall be:

- Executed by [IT Security Team / System Administrator] immediately upon identification.
- Documented and logged in [ITSM Tool] with emergency priority.
- Reported to the [CISO] and [Incident Response Team] within [X] hours.
- Reviewed post-incident in accordance with the [Incident Management Procedure].

---

## 12. Documentation and Evidence Requirements

*Define the documentation that must be produced and retained as evidence of each access review campaign. This section is critical for regulatory examination and audit.*

### 12.1 Mandatory Documentation

The following documentation must be produced and retained for every access review campaign:

| Document | Description | Format | Retention Owner |
|---|---|---|---|
| Access Review Campaign Initiation Notice | Formal notice issued to reviewers at campaign start | Email / PDF | [IT Security Team] |
| Pre-Review Access Entitlement Extract | Raw entitlement data extracted at campaign start date | CSV / System Report | [IT Security Team] |
| HR Reconciliation Report | Comparison of access data against current HR employee register | Spreadsheet / Report | [IT Security Team] |
| Reviewer Task Assignment Records | Evidence of task assignment to each reviewer | IAM Tool Record / Email | [IT Security Team] |
| Completed Certification Decisions | All reviewer decisions (Certify, Revoke, Modify, Escalate) with justifications | IAM Tool Record / Signed Form | [IT Security Team] |
| Escalation Log | Record of all escalations raised during the campaign | Escalation Log (Appendix C) | [IT Security Team] |
| Remediation Work List | Consolidated list of all access changes required | Spreadsheet / ITSM Report | [IT Security Team] |
| ITSM Remediation Tickets | Evidence of access change requests raised and completed | ITSM Tool Records | [IT Operations] |
| Post-Remediation Verification Report | Evidence that access changes have been applied in source systems | System Extract / Report | [IT Security Team] |
| Access Review Campaign Closure Report | Summary report approved by CISO confirming campaign completion | PDF / GRC Record | [IT Security Team / CISO] |

### 12.2 Evidence Retention

All access review documentation shall be retained for a minimum of **[5] years** (or as required by BNM and applicable legislation) in [SharePoint / Secure Document Repository / GRC Platform] under access-controlled storage with change audit logging enabled.

---

## 13. Metrics and Reporting

*Define the key performance indicators and reporting outputs that will be used to measure the effectiveness of the access review program.*

### 13.1 Key Performance Indicators (KPIs)

| KPI | Target | Measurement Frequency | Reported To |
|---|---|---|---|
| Access review campaign completion rate | ≥ 95% of assigned tasks completed by deadline | Per campaign | CISO / IT Risk Committee |
| Revocation SLA adherence (Critical) | 100% completed within 1 business day | Per campaign | CISO |
| Revocation SLA adherence (High) | ≥ 98% completed within 1 business day | Per campaign | CISO |
| Revocation SLA adherence (Medium) | ≥ 95% completed within 5 business days | Per campaign | CISO |
| Orphaned accounts identified and resolved | 100% resolved within campaign window | Per campaign | IT Risk Committee |
| SoD conflicts identified and remediated | 100% with documented remediation plan | Per campaign | Risk & Compliance |
| Privileged account review completion rate | 100% reviewed per quarter | Quarterly | CISO |
| Repeat access violations (privilege creep) | Reduction trend YoY | Annual | IT Risk Committee |

### 13.2 Reporting Schedule

| Report | Audience | Frequency | Owner |
|---|---|---|---|
| Access Review Campaign Status Report | CISO, IT Risk Committee | Per campaign (progress) | IT Security Team |
| Access Review Campaign Closure Report | CISO, Internal Audit, Risk & Compliance | Per campaign (closure) | IT Security Team |
| Privileged Account Review Summary | CISO | Quarterly | IT Security / PAM Team |
| Annual Access Review Program Report | Board Risk Committee / Senior Management | Annual | CISO |
| Regulatory Compliance Evidence Pack | BNM (upon examination) | As required | Risk & Compliance |

---

## 14. Non-Compliance and Exceptions

*Define how exceptions to this procedure are managed and what constitutes non-compliance.*

### 14.1 Exceptions Process

Where it is not feasible to remediate access within the standard timeframes defined in Section 10.2, an exception may be sought through the following process:

1. The relevant System Owner or Line Manager submits a formal exception request to the [IT Security Team / Risk and Compliance Team] via [Exception Request Form — Appendix D].
2. The exception request must include:
   - The specific access entitlement requiring an exception.
   - The business justification for the exception.
   - The proposed extended remediation date.
   - Compensating controls applied in the interim.
   - The risk assessment of maintaining the access beyond the standard timeframe.
3. The [IT Security Team] reviews the exception request and makes a recommendation to the [CISO / IT Risk Committee].
4. The [CISO / IT Risk Committee] approves or rejects the exception.
5. Approved exceptions are logged in the [GRC Platform] and reviewed at the next IT Risk Committee meeting.
6. Exceptions shall not be granted for periods exceeding [X] months without escalation to [Senior Management / Board Risk Committee].

### 14.2 Non-Compliance

The following behaviors constitute non-compliance with this procedure:

| Non-Compliance Scenario | Consequence |
|---|---|
| Failure to complete assigned access review tasks within the campaign window without an approved extension | Escalation to Department Head; logged for governance reporting |
| Providing inaccurate or unsupported certification decisions | Disciplinary action in accordance with [HR Disciplinary Policy] |
| Failure to execute approved access revocations within required SLAs | Escalation to IT Management; potential disciplinary action |
| Unauthorized bulk approval of access entitlements without individual assessment | Decision invalidated; access subject to immediate independent review |
| Failure to raise an exception request for non-remediable access | Regulatory risk; potential disciplinary action |

Non-compliance incidents shall be documented in the [GRC Platform] and reported to the [CISO] and [Internal Audit] as part of the campaign closure report.

---

## 15. Review and Update History

*Record all versions of this document, including the nature of changes made at each revision.*

*This table should be updated each time the document is reviewed or modified, even if no substantive changes are made.*

| Version | Date | Author | Reviewed By | Approved By | Summary of Changes |
|---|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | [Approver Name], [Title] | Initial document creation |
| [1.1] | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | [Approver Name], [Title] | [Describe changes, e.g., Updated escalation timeframes in Section 11.2] |
| [2.0] | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | [Approver Name], [Title] | [Describe changes, e.g., Revised to align with updated BNM RMiT clause references] |

### 15.1 Scheduled Review

This procedure shall be reviewed at a minimum of once per year, or upon any of the following events:

- Material changes to BNM RMiT or other applicable regulations.
- Significant changes to [Organization Name]'s IT environment or organizational structure.
- Post-incident review identifying gaps in the access review process.
- Recommendation from Internal Audit or an external regulatory examination.
- Changes to the tools and systems used to support the access review process.

---

## 16. Review and Approval

*This section records the formal approval of this document by authorized personnel. All approvers must sign and date this section before the document is considered effective.*

### 16.1 Prepared By

| Name | Title | Department | Date |
|---|---|---|---|
| [Name] | [Title] | [Department] | [Date] |

### 16.2 Reviewed By

| Name | Title | Department | Review Date | Comments |
|---|---|---|---|---|
| [Name] | [Title] | [Department] | [Date] | [e.g., Reviewed for technical accuracy] |
| [Name] | [Title] | [Department] | [Date] | [e.g., Reviewed for regulatory alignment] |
| [Name] | [Title] | Internal Audit | [Date] | [e.g., Reviewed for audit sufficiency] |

### 16.3 Approved By

*The signatures below confirm that the named individuals have reviewed this document and authorize its issuance and implementation.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner — [Relevant Department Head] | [Name] | __________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | __________________ | [Date] |
| Chief Risk Officer / Head of Risk | [Name] | __________________ | [Date] |
| Chief Information Officer (CIO) / Head of IT | [Name] | __________________ | [Date] |
| [Head of Compliance / Regulatory Affairs] | [Name] | __________________ | [Date] |

---

## 17. References

*List all regulatory documents, internal policies, and standards referenced in or used to develop this procedure.*

### 17.1 Regulatory References

| Reference | Issuing Body | Clause / Section | Description |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | **Clause 10.57** | Periodic review of user access rights to verify access remains appropriate and authorized |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.54 | Access control — granting access on a need-to-know and least-privilege basis |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.55 | Privileged access management requirements |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.56 | Segregation of duties requirements |
| Personal Data Protection Act 2010 (PDPA) | Government of Malaysia | Section 5 — Security Principle | Obligation to protect personal data from unauthorized access, collection, use, disclosure |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia (BNM) | [Relevant Section] | Cyber risk management requirements including access management |

### 17.2 Internal Policy References

| Document Title | Document ID | Relationship to This Procedure |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy |
| Access Control and Identity Management Policy | [Doc ID] | Governing policy |
| Privileged Access Management Procedure | [Doc ID] | Related procedure |
| Joiner, Mover, Leaver (JML) Procedure | [Doc ID] | Related procedure |
| Vendor and Third-Party Access Management Policy | [Doc ID] | Related policy |
| Information Classification and Handling Policy | [Doc ID] | Informs review frequency and classification |
| Incident Response Procedure | [Doc ID] | Referenced for emergency access revocations |
| Records Retention Policy | [Doc ID] | Governs documentation retention requirements |
| IT Risk Management Framework | [Doc ID] | Overarching risk governance context |
| IT Change Management Procedure | [Doc ID] | Referenced for access change execution |

---

## 18. Appendices

*Appendices provide supporting materials, templates, and reference tools for use during the access review process.*

### Appendix A — Access Review Process Flow Diagram

*Insert a visual process flow diagram illustrating the end-to-end access review procedure, from campaign initiation through reporting and closure. The diagram should reflect the five phases described in Section 7.*

**[INSERT PROCESS FLOW DIAGRAM HERE]**

Diagram should include:
- Phase labels (Preparation, Distribution, Certification, Remediation, Reporting & Closure)
- Decision nodes (Certify / Revoke / Modify / Escalate)
- Actor swim lanes (IT Security, Reviewer, IT Operations, CISO)
- Escalation paths

---

### Appendix B — Access Review Decision Form (Manual Fallback)

*To be used when the primary IAM tool is unavailable. This form must be completed and signed by the reviewer for each access entitlement reviewed.*

**[Organization Name] — Access Review Decision Form**

| Field | Details |
|---|---|
| Campaign ID | [Campaign ID] |
| Review Date | [Date] |
| Reviewer Name | [Name] |
| Reviewer Title | [Title] |
| Reviewer Department | [Department] |
| System / Application Reviewed | [System Name] |

| User Name | User ID | Role / Job Title | Access Entitlement | Last Active Date | Decision (Certify / Revoke / Modify / Escalate) | Justification | Reviewer Initials |
|---|---|---|---|---|---|---|---|
| [Name] | [ID] | [Role] | [Entitlement] | [Date] | [Decision] | [Notes] | [Initials] |
| [Name] | [ID] | [Role] | [Entitlement] | [Date] | [Decision] | [Notes] | [Initials] |

**Reviewer Declaration:**
I confirm that the access decisions recorded above are accurate to the best of my knowledge and reflect the genuine access requirements of each individual in relation to their current role and responsibilities.

Reviewer Signature: __________________ Date: __________________

---

### Appendix C — Escalation Log Template

*To be maintained by the IT Security Team throughout each access review campaign.*

| Log ID | Date Raised | System / Account | Issue Description | Escalated To | Escalation Reason | Resolution | Resolution Date | Resolved By |
|---|---|---|---|---|---|---|---|---|
| [ESC-001] | [Date] | [System / Account] | [Description] | [Name / Role] | [Reason] | [Action Taken] | [Date] | [Name] |
| [ESC-002] | [Date] | [System / Account] | [Description] | [Name / Role] | [Reason] | [Action Taken] | [Date] | [Name] |

---

### Appendix D — Exception Request Form

*To be submitted when standard remediation timeframes cannot be met.*

**[Organization Name] — Access Review Exception Request Form**

| Field | Details |
|---|---|
| Exception Request ID | [Auto-generated or manual ID] |
| Date Submitted | [Date] |
| Submitted By | [Name, Title, Department] |
| System / Application | [System Name] |
| User / Account Affected | [User Name / Account ID] |
| Access Entitlement | [Description of access entitlement] |
| Standard Remediation Deadline | [Date] |
| Proposed Extended Deadline | [Date] |
| Business Justification | [Describe why standard remediation is not feasible] |
| Compensating Controls | [Describe interim controls applied to mitigate risk] |
| Risk Assessment | [High / Medium / Low — provide brief rationale] |

**Approvals:**

| Role | Name | Decision (Approve / Reject) | Comments | Signature | Date |
|---|---|---|---|---|---|
| IT Security Team | [Name] | [Decision] | [Comments] | __________________ | [Date] |
| CISO / IT Risk Committee | [Name] | [Decision] | [Comments] | __________________ | [Date] |

---

### Appendix E — Access Review Campaign Closure Report Template

*To be completed by the IT Security Team upon conclusion of each access review campaign and submitted to the CISO for formal approval.*

**[Organization Name] — Access Review Campaign Closure Report**

| Field | Details |
|---|---|
| Campaign ID | [Campaign ID] |
| Campaign Type | [Annual / Quarterly / Ad Hoc / Event-Triggered] |
| Campaign Scope | [Systems and user populations covered] |
| Campaign Start Date | [Date] |
| Campaign End Date | [Date] |
| Prepared By | [Name, Title] |
| Report Date | [Date] |

**Campaign Summary Statistics:**

| Metric | Value |
|---|---|
| Total access entitlements reviewed | [Number] |
| Total entitlements certified (retained) | [Number] |
| Total entitlements revoked | [Number] |
| Total entitlements modified | [Number] |
| Total escalations raised | [Number] |
| Total orphaned accounts identified | [Number] |
| Total orphaned accounts resolved | [Number] |
| Total SoD conflicts identified | [Number] |
| Total SoD conflicts remediated | [Number] |
| Reviewer completion rate | [%] |
| Remediation completion rate (Critical) | [%] |
| Remediation completion rate (High) | [%] |
| Remediation completion rate (Medium/Low) | [%] |
| Exceptions granted | [Number] |
| Outstanding open items | [Number] |

**Outstanding Items and Follow-Up Actions:**

| Item | Description | Owner | Due Date | Status |
|---|---|---|---|---|
| [Item 1] | [Description] | [Owner] | [Date] | [Open / In Progress] |

**Campaign Closure Approval:**

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Security Team Lead | [Name] | __________________ | [Date] |
| CISO / Head of IT Risk | [Name] | __________________ | [Date] |

---

### Appendix F — Reviewer Quick Reference Guide

*A one-page summary for distribution to reviewers at the commencement of each campaign.*

**Access Review — Reviewer Guide**

**Your responsibilities:**
- Review each user and access entitlement assigned to you before the campaign deadline.
- Apply the least-privilege and need-to-know principles.
- Record a decision for every entitlement (Certify, Revoke, Modify, or Escalate).
- Provide a written justification for all Revoke, Modify, and Escalate decisions.
- Submit your decisions via [IAM Tool / Campaign Portal] by **[Campaign Deadline Date]**.

**Decision guide:**

| Decision | Use When |
|---|---|
| **Certify** | Access is appropriate — user needs it for their current role |
| **Revoke** | Access should be removed — user has left, changed roles, or no longer needs it |
| **Modify** | Access level needs adjustment — too high or too low for current role |
| **Escalate** | You are unsure — contact [IT Security Team contact details] |

**Key contacts:**
- Campaign queries: [IT Security Team email / phone]
- Technical tool support: [IT Helpdesk email / phone]
- Urgent / emergency issues: [CISO / IT Security Manager direct contact]

**Important:** Failure to complete your review by the deadline may result in escalation to your Department Head and could require default revocation of unreviewed access.

---

*End of Document*

---

*This template was prepared in accordance with the requirements of BNM Risk Management in Technology (RMiT) Policy Document, Clause 10.57. [Organization Name] should tailor all placeholder content to reflect its specific organizational structure, systems landscape, and operational context prior to issuance. This document should be reviewed by [Organization Name]'s legal, compliance, and internal audit functions before adoption.*