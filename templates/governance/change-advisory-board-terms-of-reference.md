# Change Advisory Board — Terms of Reference

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Board of Directors / Company Secretary |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]
**Regulatory Framework:** Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document

---

## Table of Contents

1. [Purpose and Authority](#1-purpose-and-authority)
2. [Scope](#2-scope)
3. [Regulatory Basis](#3-regulatory-basis)
4. [CAB Mandate and Responsibilities](#4-cab-mandate-and-responsibilities)
5. [Membership and Composition](#5-membership-and-composition)
6. [Quorum Requirements](#6-quorum-requirements)
7. [Meeting Frequency and Agenda Structure](#7-meeting-frequency-and-agenda-structure)
8. [Change Classification Framework](#8-change-classification-framework)
9. [Decision-Making and Voting](#9-decision-making-and-voting)
10. [Reporting Obligations](#10-reporting-obligations)
11. [Roles and Responsibilities (RACI)](#11-roles-and-responsibilities-raci)
12. [Escalation and Conflict Resolution](#12-escalation-and-conflict-resolution)
13. [Review and Amendment Process](#13-review-and-amendment-process)
14. [Version History and Approval](#14-version-history-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Authority

*This section establishes the formal purpose of the Change Advisory Board and the authority under which it operates. Describe the CAB's constitutional basis within the organization's governance hierarchy.*

### 1.1 Purpose

The Change Advisory Board (CAB) is a formal governance body established by [Organization Name] to provide structured oversight, review, and authorization of all technology changes that may affect the availability, integrity, confidentiality, or resilience of the organization's information systems, technology infrastructure, and critical business services.

The CAB serves as the primary governance mechanism for technology change management, ensuring that:

- All significant technology changes are assessed for risk prior to implementation.
- Changes are aligned with [Organization Name]'s strategic objectives, operational requirements, and regulatory obligations.
- Adequate rollback and contingency plans are in place before change implementation.
- Post-implementation reviews are conducted and lessons learned are recorded.
- Compliance with Bank Negara Malaysia's Risk Management in Technology (RMiT) policy is maintained at all times.

### 1.2 Authority

The CAB derives its authority from:

- A formal resolution of the **Board of Directors** of [Organization Name], dated [Board Resolution Date], authorizing the establishment and operation of the Change Advisory Board.
- The **[Organization Name] Technology Risk Management Policy**, approved by the Board on [Policy Approval Date].
- The **[Organization Name] IT Governance Framework**, which designates the CAB as the authoritative decision-making body for technology change authorization.

The CAB is empowered to:

- Approve, defer, reject, or conditionally approve technology change requests.
- Mandate additional risk assessments, testing, or stakeholder consultation before approving a change.
- Direct emergency change procedures when circumstances require expedited authorization.
- Impose a change freeze period in response to operational risk events, system instability, or regulatory direction.
- Escalate matters to the Board Risk Committee, Board Audit Committee, or the Board of Directors where changes carry material risk implications.

---

## 2. Scope

*Define the boundaries of what the CAB oversees. Be explicit about what is in scope and out of scope to avoid ambiguity during audits.*

### 2.1 In Scope

The CAB Terms of Reference apply to all technology change activities within [Organization Name], including but not limited to:

- **Application changes:** New application deployments, software upgrades, patches, configuration changes to business-critical applications, and retirement of legacy systems.
- **Infrastructure changes:** Modifications to servers, storage, networking, cloud platforms, data centres, and end-user computing environments.
- **Security changes:** Changes to access controls, firewall rules, encryption configurations, identity and access management systems, and security monitoring tools.
- **Database changes:** Schema changes, data migrations, database upgrades, and changes to backup and recovery configurations.
- **Third-party and vendor changes:** Changes initiated or executed by technology service providers, outsourced service providers, and cloud service providers that affect [Organization Name]'s systems.
- **Integration and API changes:** Modifications to system interfaces, APIs, middleware, and data exchange mechanisms.
- **Disaster recovery and business continuity configurations:** Changes to DR systems, recovery time objectives (RTO), recovery point objectives (RPO), and backup schedules.

### 2.2 Out of Scope

The following activities are excluded from CAB oversight, subject to the conditions noted:

| Exclusion | Condition |
|---|---|
| Emergency break-fix activities (P1 incidents) | Must be ratified by the CAB within [X] business days post-implementation |
| Routine operational tasks defined in approved runbooks | Must comply with pre-approved standard change procedures |
| Development and test environment changes | Unless changes are subsequently promoted to production |
| [Other exclusions specific to the organization] | [Conditions applicable] |

### 2.3 Applicability

These Terms of Reference apply to:

- All employees, contractors, and consultants engaged by [Organization Name] who perform or oversee technology change activities.
- All technology service providers and outsourced parties contractually obligated to comply with [Organization Name]'s change management requirements.
- All subsidiaries and affiliates of [Organization Name] where technology changes interact with group-wide systems or infrastructure.

---

## 3. Regulatory Basis

*Reference the specific regulatory clauses from BNM RMiT and any other applicable frameworks. This section is critical for audit defensibility.*

### 3.1 Primary Regulatory Reference

These Terms of Reference are established in compliance with the following regulatory requirements issued by Bank Negara Malaysia (BNM):

| Regulatory Document | Clause / Section | Requirement Summary |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | **Clause 10.10** | Requires financial institutions to implement a formal change management process that includes risk assessment, authorization, testing, and post-implementation review for all technology changes. |
| Risk Management in Technology (RMiT) Policy Document | [Additional Clause] | [Summary of additional requirement] |
| Risk Management in Technology (RMiT) Policy Document | [Additional Clause] | [Summary of additional requirement] |

### 3.2 Supporting Regulatory and Standards References

| Reference | Description |
|---|---|
| BNM/RH/PD 028-2 — RMiT (latest version) | Bank Negara Malaysia Risk Management in Technology Policy Document |
| Personal Data Protection Act 2010 (PDPA) | Changes affecting personal data processing systems must be assessed for PDPA compliance |
| NACSA Critical Information Infrastructure (CII) Requirements | Applicable where [Organization Name] operates systems designated as CII |
| ISO/IEC 27001:2022 — Annex A.12.1 | Operational procedures and responsibilities, including change management |
| ITIL 4 — Change Enablement Practice | Industry best practice framework underpinning the CAB operating model |
| [Other applicable standards] | [Description] |

### 3.3 Internal Policy Alignment

These Terms of Reference must be read in conjunction with:

- [Organization Name] Technology Risk Management Policy
- [Organization Name] Information Security Policy
- [Organization Name] IT Change Management Procedure
- [Organization Name] Incident Management Policy
- [Organization Name] Business Continuity Management Policy

---

## 4. CAB Mandate and Responsibilities

*Detail the specific mandated functions of the CAB. This section provides the operational basis for all CAB activities and should be comprehensive enough to guide the CAB Chair in conducting meetings.*

### 4.1 Core Mandate

The CAB is mandated to provide governance assurance that technology changes are:

1. **Justified** — The business case and technical rationale for the change are documented and substantiated.
2. **Risk-assessed** — All foreseeable risks, including security, operational, compliance, and reputational risks, have been identified and mitigated.
3. **Tested** — Adequate testing has been conducted in a non-production environment prior to deployment.
4. **Authorized** — Changes receive explicit authorization from the appropriate level of governance authority before implementation.
5. **Communicated** — Relevant stakeholders, including users and downstream system owners, have been notified.
6. **Reversible** — Rollback plans are in place and tested where technically feasible.
7. **Reviewed** — Post-implementation reviews are completed and outcomes are recorded.

### 4.2 Specific Responsibilities

The CAB is responsible for:

- Reviewing and approving, deferring, or rejecting all **Standard Changes**, **Major Changes**, and **Significant Changes** as classified under Section 8 of this document.
- Ratifying **Emergency Changes** implemented outside the standard change process within [X] business days of implementation.
- Reviewing the **Forward Schedule of Change (FSC)** and coordinating change windows to minimize operational risk.
- Monitoring the **change backlog** and identifying changes with overdue approvals or stalled implementations.
- Reviewing **Post-Implementation Review (PIR)** reports and ensuring corrective actions are tracked to closure.
- Overseeing the quality and completeness of **Change Risk Assessments** submitted by change requestors.
- Declaring and lifting **Change Freeze Periods** during critical operational windows (e.g., year-end processing, regulatory reporting periods, major product launches).
- Reviewing and approving changes to the **Change Management Procedure** itself before submission to senior management.
- Ensuring compliance with **regulatory obligations** related to technology change, including any notification requirements to BNM.
- Reporting to the **[Board Risk Committee / Senior Management]** on the status of technology changes and material risks identified.

---

## 5. Membership and Composition

*Define who sits on the CAB, their roles, and the criteria for membership. Include both permanent and ad hoc membership arrangements.*

### 5.1 Permanent Membership

The following roles constitute the permanent membership of the CAB:

| Role | Position/Title | Voting Rights | Delegated By |
|---|---|---|---|
| **CAB Chair** | [Chief Information Officer / Chief Technology Officer / equivalent] | Yes — Casting vote | Board of Directors |
| **Deputy CAB Chair** | [Deputy CIO / Head of IT Operations / equivalent] | Yes | CAB Chair |
| **Head of IT Operations** | [Title] | Yes | [N/A — Ex officio] |
| **Head of Information Security (CISO)** | [Title] | Yes | [N/A — Ex officio] |
| **Head of IT Architecture** | [Title] | Yes | [N/A — Ex officio] |
| **Business Continuity / DR Manager** | [Title] | Yes | [N/A — Ex officio] |
| **Risk Management Representative** | [Title, Risk Division] | Yes | Chief Risk Officer |
| **Compliance Officer (Technology)** | [Title, Compliance Division] | Yes | Chief Compliance Officer |
| **Business Representative(s)** | [Title(s), Business Units] | Yes | Respective Business Unit Head(s) |
| **CAB Secretariat** | [Title, IT Governance / Company Secretary Office] | No — Administrative | [N/A] |

### 5.2 Ad Hoc Membership

The CAB Chair may invite the following parties to attend specific CAB sessions on an ad hoc basis, without voting rights, where their expertise is relevant to items on the agenda:

- External technology vendors or managed service providers (relevant change items only)
- Internal subject matter experts (e.g., database administrators, network engineers)
- Internal auditors (observer status)
- Legal counsel (where changes have legal or contractual implications)
- [Other ad hoc participants as relevant]

### 5.3 Member Responsibilities

All CAB members are individually responsible for:

- Attending CAB meetings regularly and maintaining the required attendance level of **[X]% per calendar year**.
- Reviewing change request documentation in advance of each meeting.
- Providing independent, objective assessments of change risk from their functional perspective.
- Disclosing any conflicts of interest in relation to change items under review.
- Maintaining the confidentiality of all information reviewed in CAB proceedings.
- Ensuring their designated alternates are adequately briefed when they are unable to attend.

### 5.4 Succession and Alternates

Each permanent CAB member must nominate a formally designated **alternate** who may attend and vote in their absence. Alternates must be:

- At a seniority level equivalent to or not more than one level below the permanent member.
- Formally registered with the CAB Secretariat in writing.
- Provided with the same advance documentation as permanent members.

Alternate nominations must be reviewed and updated annually or upon any change in the permanent member's role.

---

## 6. Quorum Requirements

*Specify the minimum attendance threshold needed for the CAB to conduct valid business. Quorum rules are critical for audit defensibility.*

### 6.1 Standard Quorum

A CAB meeting is quorate and may conduct formal business when the following minimum attendance is achieved:

- The **CAB Chair** or designated **Deputy CAB Chair** is present.
- A minimum of **[X] voting members** (including the Chair) out of the total permanent voting membership are present, representing no fewer than **[X] distinct functional areas** (e.g., IT Operations, Information Security, Risk/Compliance, and Business).

*Example: If there are 9 permanent voting members, a quorum of 5 (including the Chair) may be appropriate, subject to the organization's governance requirements.*

### 6.2 Quorum for Emergency Changes

For emergency CAB sessions convened outside the standard meeting schedule:

- A minimum of **[X] voting members** is required, including the **CAB Chair** or **Deputy CAB Chair**.
- At minimum, the **Head of Information Security** or delegate must be present for all emergency changes with a security risk dimension.
- A full record of all participants, the change details, and the rationale for emergency authorization must be documented and presented to the next standard CAB meeting for ratification.

### 6.3 Failure to Achieve Quorum

If a scheduled CAB meeting fails to achieve quorum:

- The meeting must be adjourned. Decisions may not be made or recorded as approved.
- The CAB Secretariat must reschedule the meeting within **[X] business days**.
- Urgent matters requiring decisions before the rescheduled meeting must be escalated to the **[CAB Chair / CIO / relevant executive authority]** for interim direction, subject to ratification at the next quorate meeting.

---

## 7. Meeting Frequency and Agenda Structure

*Define how often the CAB meets, how meetings are convened, and the standard agenda format. Clear procedural rules support consistent, auditable governance.*

### 7.1 Meeting Schedule

| Meeting Type | Frequency | Advance Notice | Chaired By |
|---|---|---|---|
| **Standard CAB Meeting** | [Weekly / Fortnightly] | Minimum [X] business days | CAB Chair |
| **Emergency CAB Meeting** | As required | Minimum [X] hours | CAB Chair or Deputy |
| **CAB Review Session** | Quarterly | Minimum [X] business days | CAB Chair |
| **Annual Terms of Reference Review** | Annual | Minimum [X] weeks | CAB Chair |

### 7.2 Meeting Convening

- The CAB Secretariat is responsible for scheduling all standard CAB meetings and distributing meeting invitations to all members and invited observers.
- All **Change Request documentation**, **Risk Assessment reports**, and supporting materials must be circulated to members no later than **[X] business days** prior to the standard meeting date.
- Members who identify conflicts or issues with proposed changes prior to the meeting may notify the CAB Secretariat in advance to ensure adequate discussion time is allocated.

### 7.3 Standard Agenda Structure

The following agenda structure is to be used for all standard CAB meetings:

| Agenda Item | Description | Indicative Time |
|---|---|---|
| **1. Opening and Quorum Confirmation** | CAB Chair confirms quorum and opens the meeting | [X] minutes |
| **2. Declarations of Interest** | Members declare any conflicts of interest for items on the agenda | [X] minutes |
| **3. Approval of Previous Minutes** | Review and approval of minutes from the previous CAB meeting | [X] minutes |
| **4. Matters Arising** | Update on action items from previous meetings | [X] minutes |
| **5. Forward Schedule of Change (FSC) Review** | Review of upcoming scheduled changes, change windows, and planned freeze periods | [X] minutes |
| **6. Emergency Change Ratifications** | Formal ratification of emergency changes implemented since the last meeting | [X] minutes |
| **7. Standard and Major Change Approvals** | Review and authorization decisions on submitted change requests | [X] minutes |
| **8. Post-Implementation Review (PIR) Reports** | Review of PIRs for recently implemented changes | [X] minutes |
| **9. Risk and Issues Report** | Overview of open change-related risks and incidents | [X] minutes |
| **10. Reporting and Escalation Items** | Items for escalation to Board, Risk Committee, or Senior Management | [X] minutes |
| **11. Any Other Business** | Items not on the standard agenda | [X] minutes |
| **12. Action Items and Close** | Summary of decisions and action items; meeting closure | [X] minutes |

### 7.4 Meeting Documentation

- **Minutes** must be drafted by the CAB Secretariat within **[X] business days** of each meeting.
- Draft minutes must be circulated to all members for review and approval within **[X] business days** of distribution.
- Approved minutes must be stored in the **[Document Management System / Repository]** and retained for a minimum of **[X] years** in accordance with [Organization Name]'s record retention policy and BNM requirements.
- A **Change Decision Register** recording all CAB decisions must be maintained by the Secretariat and be available for inspection by internal audit, external audit, and regulatory examiners upon request.

---

## 8. Change Classification Framework

*Provide clear definitions of change categories to guide requestors and the CAB in applying the correct level of oversight.*

### 8.1 Change Categories

All technology changes submitted to the CAB must be classified according to the following framework:

| Category | Definition | Authorization Level | Examples |
|---|---|---|---|
| **Standard Change** | Pre-approved, low-risk, routine change following a documented runbook with no deviation | CAB pre-approval (periodic review) | Monthly OS patches, scheduled antivirus updates |
| **Normal Change (Minor)** | Low-risk change with limited impact; follows standard process | [CAB Chair / Deputy Chair approval] | Configuration changes to non-critical systems |
| **Normal Change (Major)** | Moderate-to-high risk; significant impact on systems, users, or data | Full CAB approval | New application deployments, network topology changes |
| **Significant Change** | High-risk change with potential systemic impact; may require BNM notification | Full CAB approval + [Board Risk Committee / CIO] endorsement | Core banking system upgrades, cloud migrations |
| **Emergency Change** | Unplanned change required to restore service or address a critical security vulnerability | Emergency CAB; ratified at next standard CAB | Critical security patches, P1 incident break-fixes |

### 8.2 Change Request Requirements

All change requests submitted to the CAB must include:

- Change description and business justification
- Technical impact assessment
- Risk assessment (likelihood, impact, and mitigating controls)
- Testing evidence and results
- Implementation plan with timeline
- Communication plan for affected stakeholders
- Rollback plan
- Post-implementation review plan

---

## 9. Decision-Making and Voting

*Document how the CAB reaches decisions, including the voting mechanism and what constitutes approval.*

### 9.1 Decision Method

The CAB operates by **consensus where possible**. Where consensus cannot be reached, decisions are made by **majority vote** of voting members present.

### 9.2 Voting Rules

- Each permanent voting member (or their designated alternate) holds **one vote**.
- The **CAB Chair** holds a **casting vote** in the event of a tied vote.
- Members with a **declared conflict of interest** on a specific change item must recuse themselves from voting on that item.
- Proxy votes are **not permitted**. Members unable to attend must nominate their registered alternate to attend and vote.

### 9.3 Decision Outcomes

The CAB may make the following decisions on change requests:

| Decision | Meaning | Action Required |
|---|---|---|
| **Approved** | Change is authorized to proceed as submitted | Change requestor may proceed per the approved implementation plan |
| **Approved with Conditions** | Change is authorized subject to specified conditions being met | Change requestor must confirm conditions are met before proceeding |
| **Deferred** | Insufficient information; change is held pending further information | Change requestor must resubmit with additional information |
| **Rejected** | Change is not authorized in its current form | Change requestor must substantially revise and resubmit |
| **Ratified (Emergency)** | Emergency change is formally endorsed after the fact | Record is updated; any identified control gaps must be remediated |

---

## 10. Reporting Obligations

*Define what the CAB reports, to whom, and at what frequency. This section directly supports BNM RMiT Clause 10.10 compliance.*

### 10.1 Internal Reporting

The CAB Chair or Secretariat is responsible for the following internal reports:

| Report | Recipient | Frequency | Content |
|---|---|---|---|
| **CAB Meeting Minutes** | All CAB members; IT Governance records | After each meeting | Decisions, action items, attendance record |
| **Change Management Dashboard** | CIO / CTO | [Monthly] | Volume of changes by category, approval rates, failed changes, overdue PIRs |
| **Technology Risk Report (Change Section)** | Board Risk Committee | [Quarterly] | Material change risks, significant changes, regulatory change compliance |
| **Annual CAB Effectiveness Report** | Board of Directors / Board Audit Committee | Annual | CAB performance against mandate, self-assessment outcomes, recommendations |
| **Change Freeze Status** | All IT staff; Business Unit Heads | As declared | Freeze period dates, scope, escalation path |

### 10.2 Regulatory Reporting

[Organization Name] must notify Bank Negara Malaysia in accordance with the notification and reporting requirements of the RMiT Policy Document for:

- Technology-related **operational disruptions** arising from or exacerbated by technology changes.
- **Significant technology changes** as defined under RMiT that meet the reporting thresholds specified by BNM.
- Any **material adverse outcome** from a technology change affecting the security, availability, or integrity of customer data or financial services.

The CAB must identify reportable events and escalate to the **Compliance Officer** and **CIO** promptly for assessment against BNM notification obligations.

### 10.3 Escalation Triggers

The following situations require immediate escalation by the CAB Chair to senior management and/or the Board Risk Committee:

- A change results in a significant technology incident or service disruption affecting [X]% or more of customers.
- A change is identified as having introduced a material information security vulnerability.
- Emergency changes exceed [X]% of total changes in any calendar month, indicating systemic change control weakness.
- A change is identified as non-compliant with regulatory requirements post-implementation.
- [Other escalation triggers as defined by the organization]

---

## 11. Roles and Responsibilities (RACI)

*The RACI matrix below defines who is Responsible, Accountable, Consulted, and Informed for key change management activities governed by the CAB.*

*Complete the Name/Title column with the actual role titles used in your organization.*

| Activity | CAB Chair | CAB Members | CAB Secretariat | Change Requestor | CIO / CTO | Board Risk Committee | Compliance Officer |
|---|---|---|---|---|---|---|---|
| Submit Change Request | I | I | I | **R/A** | I | — | — |
| Conduct Change Risk Assessment | C | C | — | **R/A** | C | — | C |
| Schedule CAB Meeting | A | I | **R** | — | I | — | — |
| Distribute Meeting Materials | A | I | **R** | — | — | — | — |
| Chair CAB Meeting | **R/A** | — | — | — | — | — | — |
| Review Change Request at CAB | **R** | **R** | — | C | — | — | C |
| Authorize / Reject Change | **A** | **R** | — | I | — | — | — |
| Record CAB Decisions | A | — | **R** | I | — | — | — |
| Implement Approved Change | — | — | — | **R/A** | I | — | — |
| Conduct Post-Implementation Review | C | C | — | **R/A** | I | — | — |
| Report to Board Risk Committee | **R/A** | — | C | — | C | I | C |
| Regulatory Escalation (BNM) | C | — | — | — | **R/A** | I | R |
| Maintain CAB Terms of Reference | **R** | C | A | — | C | I | C |
| Annual CAB Effectiveness Review | **R/A** | C | C | — | C | I | C |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 12. Escalation and Conflict Resolution

*Define how disputes or disagreements within the CAB are resolved, and under what circumstances matters are escalated beyond the CAB.*

### 12.1 Internal Dispute Resolution

Where CAB members are unable to reach agreement on a change decision:

1. The **CAB Chair** shall facilitate discussion to understand the nature of the disagreement and seek a consensus position.
2. If consensus cannot be reached, the matter is decided by **majority vote** in accordance with Section 9.
3. Any dissenting member may request that their dissenting view be formally recorded in the meeting minutes.

### 12.2 External Escalation

The following escalation path applies for matters beyond the CAB's authority:

| Escalation Trigger | Escalation To | Timeframe |
|---|---|---|
| Change with enterprise-wide risk implications | Chief Risk Officer and CIO jointly | Within [X] business days |
| Change with regulatory compliance implications | Compliance Officer; Board Risk Committee | Within [X] business days |
| Change involving potential customer data risk | CISO; Chief Risk Officer | Immediately |
| Change with potential BNM reporting obligation | Compliance Officer; CIO | Immediately |
| Deadlocked CAB decision on high-risk change | CIO; Board Risk Committee | Within [X] business days |

### 12.3 Change Freeze Overrides

A declared change freeze may only be overridden:

- For **emergency security patches** with a demonstrably greater risk of inaction.
- With the **written approval of the CIO** and notification to the **CAB Chair**.
- With a full risk justification documented and presented to the next CAB meeting for ratification.

---

## 13. Review and Amendment Process

*Describe how this Terms of Reference is maintained, reviewed, and updated. Annual review is required under BNM RMiT to ensure continued regulatory alignment.*

### 13.1 Review Frequency

These Terms of Reference must be reviewed **at minimum annually** and whenever a material change occurs in:

- The regulatory requirements applicable to [Organization Name], including updates to BNM RMiT or related BNM policy documents.
- The organizational structure, governance framework, or technology risk appetite of [Organization Name].
- The composition or mandate of the CAB.
- Significant lessons learned from change-related incidents or audit findings.

### 13.2 Review Process

| Step | Action | Responsibility | Timeframe |
|---|---|---|---|
| 1 | CAB Secretariat initiates annual review cycle | CAB Secretariat | [X] months before Next Review Date |
| 2 | CAB Chair assigns review working group | CAB Chair | Within [X] weeks of initiation |
| 3 | Working group reviews document and prepares proposed amendments | Working Group | Within [X] weeks of assignment |
| 4 | Proposed amendments circulated to all CAB members for comment | CAB Secretariat | [X] business days comment period |
| 5 | Revised draft presented to CAB for approval | CAB Chair | At next scheduled CAB meeting |
| 6 | Approved revised ToR submitted to Board of Directors for endorsement | CAB Chair / Company Secretary | Within [X] weeks of CAB approval |
| 7 | Board-endorsed ToR published and distributed | CAB Secretariat | Within [X] business days of Board endorsement |
| 8 | Previous version archived; version history updated | CAB Secretariat | Concurrent with Step 7 |

### 13.3 Interim Amendments

Minor amendments (e.g., updates to member names, titles, or non-substantive wording) may be made by the CAB Chair without full review, subject to:

- Notification of all CAB members within [X] business days.
- Recording in the version history table.
- Formal ratification at the next standard CAB meeting.

Substantive amendments affecting the mandate, authority, quorum, or reporting obligations of the CAB require the full review and Board endorsement process.

---

## 14. Version History and Approval

### 14.1 Version History

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name, Title] | Initial draft for internal review | — |
| 0.2 | [Date] | [Author Name, Title] | Incorporated feedback from [stakeholder] | — |
| 1.0 | [Date] | [Author Name, Title] | First approved version | [Approver Name] |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] | [Approver Name] |

### 14.2 Approval Sign-Off

*All approvers must sign (physically or via authorized electronic signature) to confirm their review and endorsement of this document.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **CAB Chair** | [Full Name] | __________________ | [Date] |
| **Chief Information Officer** | [Full Name] | __________________ | [Date] |
| **Chief Risk Officer** | [Full Name] | __________________ | [Date] |
| **Chief Compliance Officer** | [Full Name] | __________________ | [Date] |
| **Chairman, Board Risk Committee** | [Full Name] | __________________ | [Date] |
| **Board of Directors (Endorsement)** | [Full Name, Chair of Board] | __________________ | [Date] |

---

## 15. References

*The following regulatory instruments, standards, and internal documents form the normative basis for this Terms of Reference.*

### 15.1 Regulatory References

| Reference | Issuing Authority | Relevant Provision |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document (BNM/RH/PD 028-2) | Bank Negara Malaysia | **Clause 10.10** — Change Management; technology changes must be managed through a formal change management process including risk assessment, authorization, testing, and review |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia | Relevant provisions on security patch management and vulnerability remediation via change control |
| Personal Data Protection Act 2010 (Act 709) | Parliament of Malaysia | Obligations relating to changes affecting personal data processing systems |
| [NACSA Critical Information Infrastructure Protection Requirements] | NACSA | [Relevant provisions if applicable] |
| [Other applicable BNM policy documents] | Bank Negara Malaysia | [Relevant provisions] |

### 15.2 Internal References

| Document | Owner | Location |
|---|---|---|
| [Organization Name] Technology Risk Management Policy | CIO / Chief Risk Officer | [Document Repository Path] |
| [Organization Name] IT Change Management Procedure | Head of IT Operations | [Document Repository Path] |
| [Organization Name] Information Security Policy | CISO | [Document Repository Path] |
| [Organization Name] IT Governance Framework | CIO | [Document Repository Path] |
| [Organization Name] Business Continuity Management Policy | BCM Manager | [Document Repository Path] |
| [Organization Name] Record Retention Schedule | Company Secretary | [Document Repository Path] |

### 15.3 Standards References

| Standard | Description |
|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Annex A Control 8.32: Change management |
| ITIL 4 — Change Enablement Practice | Industry best practice for technology change governance |
| COBIT 2019 — BAI06 | Managed IT Changes governance objective |

---

## 16. Appendices

### Appendix A — Change Request Form Template

*Provide the standard change request form template used for submission to the CAB. The form should capture all information required for risk assessment and authorization.*

**[Insert or reference Change Request Form — Document ID: [CRF-XXX]]**

The Change Request Form must capture, at minimum:

- Change reference number (auto-generated)
- Change requestor name, team, and contact details
- Change title and description
- Business justification and benefit
- Systems and services affected
- Change category (as per Section 8.1)
- Proposed implementation date and window
- Risk assessment summary (Likelihood / Impact / Inherent Risk Rating / Residual Risk Rating)
- Testing approach and evidence reference
- Implementation steps
- Rollback procedure
- Stakeholder communication plan
- Post-implementation review plan
- Change requestor sign-off

---

### Appendix B — Emergency Change Process

*Document the expedited process for emergency changes that cannot wait for a standard CAB meeting.*

**[Insert or reference Emergency Change Procedure — Document ID: [ECP-XXX]]**

The Emergency Change Process must address:

1. Criteria for classifying a change as an emergency
2. Initial authorization steps prior to CAB convening (e.g., verbal CIO approval)
3. Minimum documentation required before implementation
4. Emergency CAB convening procedure (conference call / virtual meeting)
5. Minimum quorum for emergency authorization
6. Documentation and ratification at the next standard CAB meeting
7. Post-emergency review requirements

---

### Appendix C — Change Freeze Calendar

*Maintain a calendar of planned change freeze periods for the current year. Update annually or as additional freeze periods are declared.*

| Freeze Period | Start Date | End Date | Reason | Declared By | Date Declared |
|---|---|---|---|---|---|
| Year-End Freeze | [Date] | [Date] | Year-end financial processing | [CAB Chair] | [Date] |
| Regulatory Reporting Freeze | [Date] | [Date] | BNM regulatory reporting window | [CAB Chair] | [Date] |
| [Peak Business Period] | [Date] | [Date] | [Reason] | [CAB Chair] | [Date] |
| [Ad Hoc Freeze] | [Date] | [Date] | [Reason] | [CAB Chair] | [Date] |

---

### Appendix D — CAB Membership Register

*Maintain the current list of CAB members, their alternates, and contact details. Update whenever membership changes.*

| Role | Member Name | Title | Contact | Alternate Name | Alternate Title | Alternate Contact | Effective Date |
|---|---|---|---|---|---|---|---|
| CAB Chair | [Name] | [Title] | [Email] | [Name] | [Title] | [Email] | [Date] |
| Head of IT Operations | [Name] | [Title] | [Email] | [Name] | [Title] | [Email] | [Date] |
| CISO | [Name] | [Title] | [Email] | [Name] | [Title] | [Email] | [Date] |
| Risk Representative | [Name] | [Title] | [Email] | [Name] | [Title] | [Email] | [Date] |
| Compliance Officer | [Name] | [Title] | [Email] | [Name] | [Title] | [Email] | [Date] |
| [Other members] | [Name] | [Title] | [Email] | [Name] | [Title] | [Email] | [Date] |

---

### Appendix E — CAB Performance Metrics

*Define the key performance indicators used to measure CAB effectiveness for the Annual CAB Effectiveness Report.*

| KPI | Description | Target | Reporting Frequency |
|---|---|---|---|
| Change Approval Rate | Percentage of submitted changes approved at first submission | ≥ [X]% | Monthly |
| Emergency Change Rate | Percentage of total changes classified as emergency | ≤ [X]% | Monthly |
| Failed Change Rate | Percentage of implemented changes resulting in unplanned outages or rollback | ≤ [X]% | Monthly |
| PIR Completion Rate | Percentage of major/significant changes with PIR completed on time | ≥ [X]% | Quarterly |
| CAB Quorum Achievement | Percentage of scheduled CAB meetings achieving quorum | ≥ [X]% | Quarterly |
| Member Attendance Rate | Average attendance rate across permanent CAB members | ≥ [X]% | Quarterly |
| Change Backlog | Number of change requests pending CAB review for more than [X] business days | ≤ [X] items | Monthly |
| Regulatory Breach Rate | Number of changes resulting in regulatory compliance breaches | 0 | Monthly |

---

*End of Document*

---

**Document Classification: Confidential**
*This document contains governance information proprietary to [Organization Name]. It must not be reproduced, distributed, or disclosed to any external party without the written authorization of the CAB Chair or the Company Secretary. Retention and disposal of this document must comply with [Organization Name]'s Records Management Policy and applicable BNM requirements.*