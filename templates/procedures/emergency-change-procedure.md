# Emergency Change Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory References and Obligations](#3-regulatory-references-and-obligations)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Emergency Change Classification Criteria](#5-emergency-change-classification-criteria)
6. [Step-by-Step Emergency Change Process Flow](#6-step-by-step-emergency-change-process-flow)
7. [Roles and Responsibilities (RACI)](#7-roles-and-responsibilities-raci)
8. [Tools and Systems Used](#8-tools-and-systems-used)
9. [Escalation Procedures](#9-escalation-procedures)
10. [Retrospective Review Requirements](#10-retrospective-review-requirements)
11. [Documentation and Evidence Requirements](#11-documentation-and-evidence-requirements)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose

*This section should articulate the intent of the document and the problem it is designed to address. Describe why a formal emergency change procedure is necessary and what risk it mitigates.*

This Emergency Change Procedure establishes the formal process by which [Organization Name] manages, authorizes, implements, and retrospectively reviews emergency changes to technology systems, infrastructure, and applications. Emergency changes are unplanned modifications required to immediately restore service availability, address critical security vulnerabilities, or prevent material business disruption where the standard change management lifecycle cannot be followed due to urgency.

This procedure ensures that even under emergency conditions, changes are executed in a controlled, accountable, and auditable manner consistent with the requirements of Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.11**, and aligned with [Organization Name]'s broader Change Management Policy.

This document provides:

- A defined and repeatable process for raising, approving, and implementing emergency changes
- Clear accountability through defined roles and responsibilities
- Mandatory retrospective review requirements to prevent recurrence and drive continuous improvement
- An audit trail sufficient to satisfy regulatory examination and internal audit requirements

---

## 2. Scope and Applicability

*Define what systems, environments, teams, and change types are covered by this procedure. Also explicitly state what is out of scope to avoid ambiguity.*

### 2.1 In Scope

This procedure applies to all emergency changes affecting:

- **Production technology environments**, including but not limited to core banking systems, payment processing platforms, internet and mobile banking channels, and customer-facing digital services
- **Critical infrastructure components**, including servers, network devices, firewalls, databases, storage systems, and cloud environments
- **Security controls and configurations**, including identity and access management systems, security information and event management (SIEM) platforms, and intrusion prevention systems
- **Third-party and vendor-managed systems** where [Organization Name] retains operational or contractual responsibility
- **Data centres and disaster recovery environments** operated by or on behalf of [Organization Name]

This procedure applies to all personnel involved in technology change activities, including:

- Full-time and contract employees of [Organization Name]
- Managed service providers and technology vendors with system access
- System integrators and technology partners performing changes under active service agreements

### 2.2 Out of Scope

The following are not governed by this Emergency Change Procedure:

- Routine or standard changes governed by the **Standard Change Management Procedure [Document ID]**
- Pre-approved changes on the standard change calendar
- Business continuity and disaster recovery (BCP/DR) failover activations governed by the **Business Continuity Plan [Document ID]**
- Configuration changes within pre-approved change authority limits that do not require Emergency Change Board (ECB) approval

### 2.3 Applicability Conditions

This procedure is invoked when **all three** of the following conditions are met:

1. A change to a production system is required **immediately or within [X] hours** to prevent or remediate a material adverse event
2. The normal change management approval and scheduling process **cannot be followed** within the required timeframe
3. Failure to implement the change will result in, or is likely to result in, one or more of the following:
   - Extended or recurring system unavailability impacting customers or critical operations
   - Material financial loss or regulatory breach
   - Exploitation of a confirmed critical or high-severity security vulnerability
   - Regulatory or legal non-compliance

---

## 3. Regulatory References and Obligations

*Reference all applicable regulatory instruments, internal policies, and standards that this procedure is designed to satisfy. This section is critical for demonstrating regulatory alignment during examinations.*

### 3.1 Primary Regulatory Framework

| Regulation / Standard | Relevant Clause / Section | Obligation Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) Policy Document | **Clause 10.11** | Financial institutions must establish procedures to govern emergency changes, including authorization controls and post-implementation review requirements |
| BNM Risk Management in Technology (RMiT) Policy Document | Clause 10.1 – 10.10 | Overarching change management governance requirements forming the policy context for emergency changes |
| BNM Risk Management in Technology (RMiT) Policy Document | Clause 11 | Incident management obligations that may trigger emergency change requirements |

### 3.2 Supporting Regulatory and Legal References

| Regulation / Standard | Relevant Clause / Section | Obligation Summary |
|---|---|---|
| Personal Data Protection Act 2010 (PDPA) | Section 9 – Security Principle | Emergency changes affecting personal data processing systems must maintain data protection controls |
| BNM Guidelines on Cyber Resilience | [Relevant Clause] | Emergency patching and security control changes must be traceable and reviewed |
| NACSA Critical Information Infrastructure (CII) Framework | [Relevant Clause] | CII operators must maintain audit trails for all changes to critical systems |
| ISO/IEC 27001:2022 | Control 8.32 – Change Management | Changes to information systems must follow a defined procedure including for emergency scenarios |

### 3.3 Internal Policy Alignment

| Internal Document | Document ID | Relationship |
|---|---|---|
| Change Management Policy | [Document ID] | Parent policy governing all change types including emergency changes |
| Incident Management Procedure | [Document ID] | Emergency changes are frequently triggered by active incidents |
| Technology Risk Management Framework | [Document ID] | Risk appetite and tolerance thresholds informing emergency change criteria |
| Business Continuity Plan | [Document ID] | BCP activation may precede or follow an emergency change event |
| Information Security Policy | [Document ID] | Security requirements maintained during emergency change execution |

---

## 4. Definitions and Terminology

*Define key terms used throughout this document to ensure consistent interpretation by all stakeholders. Align definitions with those used in the parent Change Management Policy where applicable.*

| Term | Definition |
|---|---|
| **Emergency Change** | An unplanned change to a production system that must be implemented immediately or within a condensed timeframe to prevent or remediate a material adverse event, bypassing the standard change approval workflow |
| **Emergency Change Board (ECB)** | A subset of the Change Advisory Board (CAB) with authority to provide expedited verbal or written approval for emergency changes; typically comprising the Change Manager, relevant system owner, and a senior technology risk representative |
| **Change Requestor** | The individual raising the request for an emergency change, typically the incident responder, system owner, or technology operations team member |
| **Change Implementer** | The technical specialist responsible for executing the emergency change in the production environment |
| **Change Manager** | The individual responsible for overseeing the change management process, maintaining the change register, and convening the ECB |
| **System Owner** | The accountable business or technology manager for the system affected by the emergency change |
| **Retrospective Review** | A structured post-implementation review conducted following an emergency change to assess effectiveness, identify lessons learned, and determine whether the change should be formalized or reversed |
| **Rollback Plan** | A documented set of steps to restore the system to its prior state if the emergency change does not achieve its intended outcome or introduces new issues |
| **Change Record** | The formal record in [ITSM Tool Name] documenting the emergency change request, approval, implementation details, and review outcomes |
| **Production Environment** | The live operational technology environment serving customers, business operations, or critical processes |
| **RTO** | Recovery Time Objective — the target time within which a service must be restored following disruption |
| **CII** | Critical Information Infrastructure — systems and assets designated as critical to national or financial sector security |

---

## 5. Emergency Change Classification Criteria

*This section should help staff distinguish between an emergency change and a standard or expedited change. Clear criteria reduce misuse of the emergency change process and maintain the integrity of change governance.*

### 5.1 Qualifying Criteria

An emergency change is justified only when the following criteria are satisfied. The Change Requestor must document the basis for emergency classification in the Change Record.

| Criterion | Description | Example |
|---|---|---|
| **Urgency** | The change must be implemented within [X] hours to prevent or remediate an adverse event | Critical system is down; RTO breach imminent |
| **Severity of Impact** | The event being addressed is rated High or Critical under [Organization Name]'s incident severity classification | P1 or P2 incident active |
| **Standard Process Infeasibility** | The normal approval timeline (typically [X] business days) cannot be accommodated | CAB meeting is [X] days away; impact is immediate |
| **Authorization Obtainable** | Appropriate emergency authorization can be obtained, even if verbally, before implementation | ECB member reachable for verbal approval |

### 5.2 Disqualifying Conditions

The following conditions indicate the change should **not** be classified as an emergency change:

- The change is desirable but not required for immediate service restoration or security remediation
- The urgency is due to poor planning or missed standard change deadlines
- The change can wait for the next CAB cycle without material impact
- The change is routine maintenance that was deferred

### 5.3 Emergency Change Sub-Types

| Sub-Type | Description | Typical Trigger |
|---|---|---|
| **Break-Fix** | Change required to restore a failed service or system component | P1/P2 incident, system outage |
| **Security Emergency** | Change required to remediate an actively exploited or critically rated vulnerability | Zero-day vulnerability, active intrusion |
| **Regulatory Emergency** | Change required to achieve immediate compliance with a regulatory directive | BNM supervisory requirement with immediate effect |
| **Preventive Emergency** | Change required to prevent an imminent failure identified through monitoring | Disk utilization at [X]%, hardware failure warning |

---

## 6. Step-by-Step Emergency Change Process Flow

*Detail each step of the emergency change lifecycle from identification through retrospective review. This is the core procedural section and should be sufficiently detailed to guide a practitioner through the process under time pressure.*

### 6.1 Process Overview

The Emergency Change Process consists of five phases:

```
[1. Identification & Initiation] → [2. Emergency Authorization] → [3. Implementation] → [4. Post-Implementation Verification] → [5. Retrospective Review & Closure]
```

### 6.2 Phase 1: Identification and Initiation

**Objective:** Identify the need for an emergency change and formally raise the request.

| Step | Action | Responsible | Target Timeframe |
|---|---|---|---|
| 1.1 | Identify the technical issue requiring an emergency change and assess whether emergency classification criteria (Section 5.1) are met | Change Requestor | Immediately upon identification |
| 1.2 | Notify the **Change Manager** and **System Owner** verbally or via [Communication Channel] | Change Requestor | Within [X] minutes of identification |
| 1.3 | Raise an Emergency Change Record in **[ITSM Tool Name]** using the Emergency Change template; assign Priority: Emergency | Change Requestor | Within [X] minutes of notification |
| 1.4 | Document in the Change Record: (a) description of the issue, (b) proposed change, (c) business impact of inaction, (d) rollback plan | Change Requestor | Prior to seeking authorization |
| 1.5 | Confirm the active incident record (if applicable) is linked to the Emergency Change Record in [ITSM Tool Name] | Change Manager | Prior to authorization |

**Minimum Documentation Required at Phase 1:**

- Description of the issue and root cause (if known)
- Proposed change action (specific and technically accurate)
- Systems affected and potential downstream impact
- Rollback plan in sufficient detail to be executed by another team member
- Name of requestor and timestamp

### 6.3 Phase 2: Emergency Authorization

**Objective:** Obtain appropriate authority to proceed with the emergency change in place of standard CAB approval.

| Step | Action | Responsible | Target Timeframe |
|---|---|---|---|
| 2.1 | Convene the Emergency Change Board (ECB) via [Communication Channel — e.g., designated bridge line, Microsoft Teams Emergency Channel] | Change Manager | Within [X] minutes of Phase 1 completion |
| 2.2 | Present the change details, impact of inaction, proposed change, and rollback plan to ECB members | Change Requestor | During ECB session |
| 2.3 | ECB members assess the change and provide verbal or written authorization | ECB Members | During ECB session |
| 2.4 | Record the authorization decision, names of authorizing individuals, and timestamp in the Change Record | Change Manager | Immediately following authorization decision |
| 2.5 | If ECB cannot be convened within [X] minutes, invoke the **Delegated Emergency Authority** process (see Section 9.2) | Change Manager | If ECB unavailable |
| 2.6 | Communicate authorization decision to the Change Implementer and confirm proceed/do not proceed | Change Manager | Immediately post-authorization |

**Authorization Thresholds:**

| Change Scope | Minimum Authorization Required |
|---|---|
| Single non-critical system | System Owner + Change Manager |
| Multiple systems or critical system | ECB quorum (minimum [X] members including [Role]) |
| Core banking or payment system | ECB quorum + [Senior Role, e.g., CTO/CISO] verbal approval |
| CII-designated system | ECB quorum + CISO + [Executive Sponsor] |

> **Note:** Authorization may be verbal in the first instance, provided written confirmation is recorded in the Change Record within [X] hours of implementation.

### 6.4 Phase 3: Implementation

**Objective:** Execute the emergency change in a controlled and documented manner.

| Step | Action | Responsible | Target Timeframe |
|---|---|---|---|
| 3.1 | Confirm the rollback plan is accessible and a second technician is available to assist or observe | Change Implementer | Before commencing implementation |
| 3.2 | Take a pre-change baseline snapshot or configuration backup of the affected system(s) | Change Implementer | Immediately before change execution |
| 3.3 | Implement the change strictly as described in the authorized Change Record | Change Implementer | As determined by urgency |
| 3.4 | Document each action taken, commands executed, and configurations modified in real time within the Change Record | Change Implementer | During implementation |
| 3.5 | Notify the Change Manager upon completion of implementation (success or failure) | Change Implementer | Immediately upon completion |
| 3.6 | If implementation fails or introduces new issues, execute the rollback plan and notify the Change Manager | Change Implementer | Immediately upon failure detection |

**Implementation Controls:**

- No implementation shall commence without documented authorization (verbal authorization acceptable; must be confirmed in writing within [X] hours)
- A minimum of two qualified personnel should be present during implementation of changes to critical or CII-designated systems
- All implementation activity must be conducted via authorized administrative channels with session logging enabled
- Privileged access credentials used during implementation must be rotated within [X] hours post-implementation

### 6.5 Phase 4: Post-Implementation Verification

**Objective:** Confirm the change has achieved its intended outcome and has not introduced new issues.

| Step | Action | Responsible | Target Timeframe |
|---|---|---|---|
| 4.1 | Execute the defined test cases or verification checks to confirm the change resolved the initiating issue | Change Implementer / System Owner | Within [X] hours of implementation |
| 4.2 | Monitor affected systems for a minimum of [X] hours post-implementation for unexpected behavior | Technology Operations | [X] hours post-implementation |
| 4.3 | Confirm service restoration with the business unit or customer service team where applicable | System Owner | Prior to incident closure |
| 4.4 | Update the Change Record with verification outcomes, system health status, and confirmation of service restoration | Change Manager | Within [X] hours of verification |
| 4.5 | Close the linked incident record if all issues are resolved | Incident Manager | Upon service restoration confirmation |

### 6.6 Phase 5: Retrospective Review and Closure

**Objective:** Conduct a structured post-implementation review to assess effectiveness, identify root cause, and drive corrective action. This phase is **mandatory** under RMiT Clause 10.11.

*(Refer to Section 10 for full Retrospective Review Requirements.)*

| Step | Action | Responsible | Target Timeframe |
|---|---|---|---|
| 5.1 | Schedule the retrospective review meeting | Change Manager | Within [X] business days of implementation |
| 5.2 | Complete the Post-Implementation Review (PIR) Report (Appendix B) | Change Requestor + System Owner | Prior to retrospective meeting |
| 5.3 | Conduct the retrospective review session with relevant stakeholders | Change Manager (facilitator) | Within [X] business days of implementation |
| 5.4 | Record findings, lessons learned, and corrective actions in the Change Record | Change Manager | Within [X] business days of retrospective |
| 5.5 | Raise corrective action items in [ITSM Tool / Risk Register] and assign owners | Change Manager / Risk Owner | Within [X] business days |
| 5.6 | Formally close the Emergency Change Record upon completion of all retrospective requirements | Change Manager | Upon corrective action assignment |
| 5.7 | Report closed emergency changes to the CAB at the next scheduled meeting | Change Manager | Next CAB meeting |

---

## 7. Roles and Responsibilities (RACI)

*This section defines accountability for each activity in the emergency change process. The RACI matrix uses the following coding: **R** = Responsible (performs the task), **A** = Accountable (ultimately answerable), **C** = Consulted (input required), **I** = Informed (kept up to date).*

### 7.1 Key Roles

| Role | Description | Typical Title at [Organization Name] |
|---|---|---|
| **Change Requestor** | Raises the emergency change and provides technical justification | [e.g., Incident Responder, System Administrator, Application Support Engineer] |
| **Change Manager** | Oversees the emergency change process; convenes ECB; maintains change register | [e.g., IT Change Manager, Service Delivery Manager] |
| **System Owner** | Accountable for the system being changed; provides business context | [e.g., Head of Core Banking, Head of Digital Channels] |
| **Change Implementer** | Technical specialist executing the change | [e.g., Infrastructure Engineer, Database Administrator] |
| **Emergency Change Board (ECB)** | Convened group with authority to approve emergency changes | Change Manager + System Owner + [Senior Representative] |
| **CISO / Head of Information Security** | Authorizes security-related emergency changes; reviews security impact | [Title] |
| **Technology Risk Manager** | Assesses and records risk exposure; monitors corrective actions | [Title] |
| **Incident Manager** | Manages the associated incident; coordinates with Change Manager | [Title] |
| **IT Audit / Compliance** | Reviews emergency change logs; assesses control effectiveness | [Title] |
| **Executive Sponsor** | Notified for high-impact or CII-affecting emergency changes | [e.g., CTO, COO] |

### 7.2 RACI Matrix

| Activity | Change Requestor | Change Manager | System Owner | Change Implementer | ECB | CISO | Tech Risk Manager | Incident Manager | IT Audit |
|---|---|---|---|---|---|---|---|---|---|
| Identify emergency change need | **R** | I | I | — | — | — | — | I | — |
| Raise Emergency Change Record | **R/A** | C | C | — | — | — | — | I | — |
| Notify Change Manager and System Owner | **R** | **A** | I | — | — | — | — | I | — |
| Convene Emergency Change Board | I | **R/A** | I | — | C | C | C | I | — |
| Authorize emergency change | C | **A** | **R** | — | **R** | C | C | — | — |
| Communicate authorization to Implementer | I | **R/A** | I | I | I | — | — | I | — |
| Take pre-change backup | — | I | I | **R/A** | — | — | — | — | — |
| Execute emergency change | — | I | C | **R/A** | — | — | — | I | — |
| Document implementation actions | — | I | — | **R/A** | — | — | — | — | — |
| Post-implementation verification | — | I | **R/A** | **R** | — | — | — | C | — |
| Monitor post-implementation | — | I | A | **R** | — | — | — | I | — |
| Update Change Record | — | **R/A** | I | C | — | — | — | I | — |
| Notify Executive Sponsor (high-impact only) | — | **R** | **A** | — | — | C | I | — | — |
| Schedule retrospective review | — | **R/A** | I | I | — | — | I | I | I |
| Complete PIR Report | **R** | A | **R** | C | — | C | C | C | — |
| Conduct retrospective review | C | **R/A** | C | C | C | C | C | C | C |
| Raise and assign corrective actions | C | **R** | A | — | — | C | **R** | — | I |
| Report to CAB | — | **R/A** | I | — | I | I | I | — | I |
| Review emergency change log (audit) | — | I | I | — | — | — | I | — | **R/A** |

---

## 8. Tools and Systems Used

*List all tools, platforms, and systems that are used during the emergency change process. Include guidance on how each tool is used in this context.*

### 8.1 ITSM and Change Management Platform

| Tool | Purpose | Access | Notes |
|---|---|---|---|
| **[ITSM Tool Name, e.g., ServiceNow / Jira Service Management]** | Primary platform for raising, tracking, and closing Emergency Change Records | All authorized personnel | Emergency Change template must be used; linked incident record required |
| **[Configuration Management Database (CMDB)]** | Reference for system dependencies and configuration baselines | Change Manager, Change Implementer | Must be consulted prior to implementation to assess downstream impact |

### 8.2 Communication and Collaboration Tools

| Tool | Purpose | Notes |
|---|---|---|
| **[e.g., Microsoft Teams — Emergency Bridge Channel]** | Real-time coordination during ECB convening and implementation | Dedicated emergency channel: [Channel Name/Link] |
| **[e.g., Corporate Email]** | Written confirmation of verbal authorizations | All authorizations must be confirmed via email to [Distribution List] within [X] hours |
| **[e.g., Telephone/Mobile]** | Out-of-hours contact for ECB members | Emergency contact list maintained in Appendix C |

### 8.3 Technical Implementation Tools

| Tool | Purpose | Access | Notes |
|---|---|---|---|
| **[e.g., Jump Server / Privileged Access Workstation (PAW)]** | Secure gateway for production system access during implementation | Change Implementer (with active PAM session) | All sessions must be recorded; session recordings retained for minimum [X] months |
| **[e.g., Privileged Access Management (PAM) Platform, e.g., CyberArk / BeyondTrust]** | Management of privileged credentials used during implementation | Change Implementer + Change Manager (approval workflow) | Emergency access request must reference Change Record ID |
| **[e.g., Backup/Snapshot Tool]** | Pre-change configuration backup | Change Implementer | Backup must be confirmed successful before implementation proceeds |
| **[e.g., Monitoring Platform, e.g., Grafana / Zabbix / Dynatrace]** | Post-implementation monitoring | Technology Operations | Dashboards and alerts for affected systems must be reviewed |

### 8.4 Documentation and Evidence

| Tool | Purpose | Notes |
|---|---|---|
| **[e.g., SharePoint / Confluence]** | Storage of completed PIR Reports, supporting evidence, and retrospective review records | Emergency Change folder: [Path/URL] |
| **[e.g., SIEM / Log Management Platform]** | Audit log evidence of implementation actions | Logs referenced in Change Record must be exported and attached |

---

## 9. Escalation Procedures

*Define the escalation paths for scenarios where standard emergency change process steps cannot be followed, or where the impact of the change warrants senior management involvement.*

### 9.1 Escalation Triggers

The following conditions require escalation beyond the standard Emergency Change Board:

| Trigger | Escalation Level | Escalation Path |
|---|---|---|
| Change affects a CII-designated system | Level 2 | ECB + CISO + CTO + [Executive Sponsor] |
| Change may result in customer data exposure | Level 2 | ECB + CISO + Data Protection Officer (DPO) + [Legal/Compliance] |
| ECB cannot be convened within [X] minutes | Level 1 | Invoke Delegated Emergency Authority (Section 9.2) |
| Rollback has been executed and issue persists | Level 2 | Escalate to Major Incident Process; notify [Executive Sponsor] |
| Regulatory notification may be required | Level 3 | Notify Compliance; assess BNM/NACSA reporting obligations |
| Change affects multiple business units | Level 2 | ECB + relevant Business Unit Heads + [COO/CTO] |
| Implementation fails and rollback is not possible | Level 3 | Major Incident declared; Board notification protocol initiated |

### 9.2 Delegated Emergency Authority

In situations where the Emergency Change Board cannot be convened within the required timeframe, the following delegation hierarchy applies:

| Delegated Authority Level | Authorized Individual(s) | Conditions for Invocation |
|---|---|---|
| **Level 1 — Operational** | Change Manager + System Owner (jointly) | ECB unavailable within [X] minutes; change is non-CII, non-security-critical |
| **Level 2 — Senior** | CTO or designate | Change Manager or System Owner unavailable; or change involves critical/CII system |
| **Level 3 — Executive** | CEO or COO | CTO unavailable; change has material customer, financial, or regulatory impact |

> **Important:** Delegated authority invocations must be documented in the Change Record within [X] hours, including the reason standard ECB convening was not possible and the name and title of the authorizing individual.

### 9.3 After-Hours Escalation

| Contact Role | Name | Primary Contact | Secondary Contact | Notes |
|---|---|---|---|---|
| Change Manager (On-Call) | [Name] | [Phone] | [Phone] | See Appendix C for full on-call roster |
| CISO (On-Call) | [Name] | [Phone] | [Phone] | Contact for security-related emergency changes |
| CTO / Head of Technology | [Name] | [Phone] | [Phone] | Level 2 escalation |
| Data Protection Officer | [Name] | [Phone] | [Phone] | Contact if personal data affected |

> The authoritative and current on-call contact list is maintained in **[System/Location]** and updated by **[Responsible Role]** on a **[Frequency]** basis.

### 9.4 Regulatory Notification Considerations

Where an emergency change is triggered by or results in a security incident or data breach, the following regulatory notification timelines must be assessed by the Compliance team:

| Regulatory Body | Reportable Event | Indicative Timeline | Reference |
|---|---|---|---|
| Bank Negara Malaysia (BNM) | Technology-related incidents affecting critical systems or services | As prescribed in BNM incident reporting guidelines | BNM RMiT Clause 11 |
| National Cyber Security Agency (NACSA) | Cyber incidents affecting CII | As prescribed in NACSA CII framework | NACSA CII Guidelines |
| Personal Data Protection Commissioner | Personal data breach | Within [X] days of becoming aware | PDPA 2010 |

---

## 10. Retrospective Review Requirements

*This section is mandatory under RMiT Clause 10.11. Define the requirements, timeline, content, and outputs of the post-implementation review for all emergency changes.*

### 10.1 Mandatory Retrospective Review Obligation

All emergency changes must undergo a formal retrospective review. This is a non-negotiable requirement under **BNM RMiT Clause 10.11** and [Organization Name]'s Change Management Policy. No Emergency Change Record may be formally closed without evidence of a completed retrospective review.

### 10.2 Retrospective Review Timeline

| Change Impact Level | Retrospective Review Must Be Completed Within |
|---|---|
| Low impact (single non-critical system, no customer impact) | [X] business days of implementation |
| Medium impact (multiple systems, limited customer impact) | [X] business days of implementation |
| High impact (critical system, measurable customer impact) | [X] business days of implementation |
| Critical / CII-affecting | [X] business days of implementation; preliminary findings within [X] business days |

### 10.3 Retrospective Review Participants

The retrospective review must include, at a minimum:

- Change Manager (facilitator)
- Change Requestor
- Change Implementer
- System Owner
- Technology Risk Manager
- [Other relevant participants as determined by Change Manager]

For high-impact or CII-affecting changes, the following must also participate:

- CISO or delegate
- Head of [Relevant Business Unit]
- Internal Audit representative (observer)

### 10.4 Retrospective Review Agenda

The retrospective review session must address each of the following:

| Agenda Item | Description |
|---|---|
| **1. Change Summary** | Brief description of the emergency change, initiating event, and timeline |
| **2. Root Cause Analysis** | Identified root cause of the issue that necessitated the emergency change |
| **3. Change Effectiveness** | Did the change resolve the initiating issue? Were there any unintended consequences? |
| **4. Process Adherence** | Was the emergency change process followed correctly? Were any steps bypassed? If so, why? |
| **5. Authorization Adequacy** | Was the authorization obtained appropriate for the change scope? Was it timely? |
| **6. Documentation Quality** | Was the Change Record completed accurately and within required timeframes? |
| **7. Lessons Learned** | What could be done differently to prevent recurrence or improve the response? |
| **8. Corrective Actions** | Specific, time-bound actions to address root causes and prevent recurrence |
| **9. Permanent Fix Assessment** | Is a permanent fix or standard change required? If so, has it been raised? |

### 10.5 Post-Implementation Review (PIR) Report

A completed PIR Report (Appendix B) is required for all emergency changes. The PIR Report must be:

- Completed by the Change Requestor and System Owner prior to the retrospective meeting
- Reviewed and accepted by the Change Manager
- Stored in **[Repository Location]**
- Referenced in and linked to the Emergency Change Record
- Retained for a minimum of **[X] years** in accordance with [Organization Name]'s Records Retention Policy

### 10.6 Corrective Action Tracking

| Field | Description |
|---|---|
| **Corrective Action ID** | Unique identifier from [ITSM Tool / Risk Register] |
| **Description** | Specific action to be taken |
| **Owner** | Named individual responsible for completion |
| **Due Date** | Target completion date |
| **Status** | Open / In Progress / Completed / Deferred |
| **Evidence of Completion** | Link to evidence or closure note |

All overdue corrective actions must be escalated to the Technology Risk Manager and reported to the next CAB meeting.

### 10.7 Trend Analysis and Reporting

The Change Manager must maintain an Emergency Change Register and produce the following reports:

| Report | Frequency | Audience | Contents |
|---|---|---|---|
| Emergency Change Summary | Monthly | CAB, Technology Risk Committee | Volume, categorization, systems affected, overdue retrospectives |
| Emergency Change Trend Analysis | Quarterly | Technology Risk Committee, CISO | Root cause trends, repeat emergency changes, corrective action completion rates |
| Emergency Change Compliance Report | Annually | Board Risk Committee, Internal Audit | Process adherence, regulatory compliance assessment, year-on-year trend |

---

## 11. Documentation and Evidence Requirements

*This section specifies the minimum documentation that must be captured for each emergency change to satisfy regulatory examination and internal audit requirements.*

### 11.1 Minimum Required Documentation

The following documentation must be captured for every emergency change:

| Document / Record | Where Recorded | Responsible | Retention Period |
|---|---|---|---|
| Emergency Change Record | [ITSM Tool] | Change Requestor + Change Manager | [X] years |
| Authorization record (verbal or written) | [ITSM Tool] Change Record | Change Manager | [X] years |
| Pre-change backup confirmation | [ITSM Tool] Change Record + [Backup Tool] | Change Implementer | [X] years |
| Implementation activity log | [ITSM Tool] Change Record | Change Implementer | [X] years |
| Post-implementation verification results | [ITSM Tool] Change Record | System Owner | [X] years |
| PAM session recording | [PAM Platform] | Automated | [X] months |
| Relevant system / audit logs | [SIEM / Log Platform] | Technology Operations | [X] months (or per log retention policy) |
| PIR Report | [Repository Location] | Change Requestor + System Owner | [X] years |
| Retrospective review minutes | [Repository Location] | Change Manager | [X] years |
| Corrective action records | [ITSM Tool / Risk Register] | Technology Risk Manager | [X] years |

### 11.2 Change Record Mandatory Fields

The Emergency Change Record in [ITSM Tool Name] must include the following fields, completed before the change is closed:

- [ ] Change Record ID
- [ ] Classification: Emergency
- [ ] Linked incident record ID (if applicable)
- [ ] Description of issue and business impact
- [ ] Proposed change and technical details
- [ ] Systems and environments affected
- [ ] Risk assessment (pre-change)
- [ ] Rollback plan
- [ ] Authorization details (names, roles, timestamps)
- [ ] Pre-change backup confirmation
- [ ] Implementation start and completion timestamps
- [ ] Implementation steps taken (detailed)
- [ ] Post-implementation verification results
- [ ] PIR Report reference
- [ ] Retrospective review date and participants
- [ ] Corrective action references
- [ ] Change Record closure timestamp and authorizing individual

---

## 12. Review and Approval

### 12.1 Document Review Schedule

*This procedure is subject to mandatory review on an annual basis, or following any significant change to the regulatory environment, technology architecture, or organizational structure. Earlier review may be triggered by a significant emergency change event or audit finding.*

| Review Trigger | Review Required By |
|---|---|
| Annual scheduled review | [Next Review Date] |
| Material change to BNM RMiT requirements | Within [X] days of regulatory change effective date |
| Significant emergency change event (high-impact or CII) | Within [X] days of event closure |
| Internal or external audit finding impacting this procedure | Within [X] days of finding acceptance |
| Change to organizational structure affecting ownership | Within [X] days of structural change |

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial version — document created |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of major revision] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| **Document Owner** — [Relevant Department Head] | [Name] | [Signature] | [Date] |
| **Change Manager** | [Name] | [Signature] | [Date] |
| **CISO / Head of Information Security** | [Name] | [Signature] | [Date] |
| **Technology Risk Manager** | [Name] | [Signature] | [Date] |
| **Head of Compliance** | [Name] | [Signature] | [Date] |
| **Approving Authority** — [CTO / COO / Board Risk Committee] | [Name] | [Signature] | [Date] |

---

## 13. References

*This section lists all regulatory instruments, standards, and internal documents referenced in this procedure.*

### 13.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-119 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | **Clause 10.11** (Emergency Change); Clauses 10.1–10.10 (Change Management); Clause 11 (Incident Management) |
| [Reference Number] | Guidelines on Cyber Resilience | Bank Negara Malaysia | [Relevant Clauses] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 (Security Principle) |
| [Reference Number] | Critical Information Infrastructure Protection Framework | NACSA | [Relevant Clauses] |

### 13.2 Standards References

| Standard | Title | Relevant Control(s) |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Control 8.32 — Change Management |
| ISO/IEC 20000-1:2018 | IT Service Management | Clause 8.5.3 — Change Management |
| COBIT 2019 | Control Objectives for Information and Related Technology | BAI06 — Managed IT Changes |
| ITIL 4 | IT Infrastructure Library | Change Enablement Practice |

### 13.3 Internal Policy and Procedure References

| Document ID | Title | Relationship |
|---|---|---|
| [Document ID] | Change Management Policy | Parent policy |
| [Document ID] | Standard Change Management Procedure | Companion procedure |
| [Document ID] | Incident Management Procedure | Linked process |
| [Document ID] | Technology Risk Management Framework | Risk context |
| [Document ID] | Information Security Policy | Security requirements |
| [Document ID] | Business Continuity Plan | BCP linkage |
| [Document ID] | Privileged Access Management Policy | PAM controls during emergency changes |
| [Document ID] | Records Retention Policy | Documentation retention requirements |

---

## 14. Appendices

### Appendix A — Emergency Change Process Flow Diagram

*Insert a process flow diagram illustrating the end-to-end emergency change lifecycle as described in Section 6. The diagram should depict the five phases, decision points (e.g., rollback required?), and handoff points between roles. This may be embedded as an image or linked to a separate file.*

**[Insert Process Flow Diagram]**

Diagram should include:
- Five phases as described in Section 6
- Decision diamond: "Is emergency classification criteria met?" (Yes → proceed; No → redirect to Standard Change)
- Decision diamond: "Is ECB available?" (Yes → standard ECB convening; No → Delegated Emergency Authority)
- Decision diamond: "Implementation successful?" (Yes → verification; No → execute rollback)
- Decision diamond: "Rollback successful?" (Yes → incident remains open, raise permanent fix; No → escalate to Level 3)
- Retrospective review loop closing the cycle

---

### Appendix B — Post-Implementation Review (PIR) Report Template

*This template must be completed by the Change Requestor and System Owner following every emergency change and submitted to the Change Manager prior to the retrospective review session.*

---

**POST-IMPLEMENTATION REVIEW REPORT**

| Field | Details |
|---|---|
| **Change Record ID** | [Change Record ID] |
| **Change Title** | [Brief descriptive title] |
| **System(s) Affected** | [System names] |
| **Implementation Date/Time** | [Date and Time] |
| **PIR Completed By** | [Name, Title] |
| **PIR Completion Date** | [Date] |
| **Retrospective Review Date** | [Date] |

**Section 1: Change Summary**

*Provide a brief factual summary of the emergency change — what was done, when, and by whom.*

[Summary text]

**Section 2: Initiating Event and Root Cause**

*Describe the event that necessitated the emergency change and the identified or suspected root cause.*

| Field | Details |
|---|---|
| Initiating event | [Description] |
| Root cause (confirmed / suspected) | [Description] |
| Root cause category | ☐ Hardware failure ☐ Software defect ☐ Configuration error ☐ Security incident ☐ External factor ☐ Human error ☐ Other: [specify] |

**Section 3: Change Effectiveness Assessment**

| Assessment Criteria | Outcome | Evidence / Notes |
|---|---|---|
| Did the change resolve the initiating issue? | ☐ Yes ☐ Partial ☐ No | [Evidence] |
| Were there any unintended consequences or side effects? | ☐ Yes ☐ No | [Description if Yes] |
| Was the rollback plan adequate? | ☐ Yes ☐ No ☐ Not Required | [Notes] |
| Was rollback invoked? | ☐ Yes ☐ No | [If Yes, describe] |

**Section 4: Process Adherence**

| Process Step | Followed? | Deviations and Justification |
|---|---|---|
| Emergency classification criteria applied | ☐ Yes ☐ No | [Notes] |
| Emergency Change Record raised prior to implementation | ☐ Yes ☐ No | [If No, explain] |
| ECB or Delegated Authority invoked | ☐ Yes ☐ No | [Notes] |
| Pre-change backup taken | ☐ Yes ☐ No | [If No, explain] |
| Implementation documented in real time | ☐ Yes ☐ No | [Notes] |
| Verbal authorization confirmed in writing within [X] hours | ☐ Yes ☐ No | [Notes] |
| Post-implementation verification completed | ☐ Yes ☐ No | [Notes] |

**Section 5: Lessons Learned**

*Identify at least one lesson learned from this emergency change.*

| # | Lesson Learned | Applies To |
|---|---|---|
| 1 | [Description] | ☐ Process ☐ Technical ☐ People ☐ Tools |
| 2 | [Description] | ☐ Process ☐ Technical ☐ People ☐ Tools |

**Section 6: Corrective Actions**

| # | Corrective Action | Owner | Due Date | Priority |
|---|---|---|---|---|
| 1 | [Description] | [Name] | [Date] | ☐ High ☐ Medium ☐ Low |
| 2 | [Description] | [Name] | [Date] | ☐ High ☐ Medium ☐ Low |

**Section 7: Permanent Fix Required**

| Field | Details |
|---|---|
| Is a permanent fix or standard change required? | ☐ Yes ☐ No |
| If Yes — Standard Change Record ID | [ID or "To be raised by [Date]"] |
| Estimated completion date | [Date] |

**PIR Sign-Off:**

| Role | Name | Date |
|---|---|---|
| Change Requestor | [Name] | [Date] |
| System Owner | [Name] | [Date] |
| Change Manager | [Name] | [Date] |

---

### Appendix C — Emergency Change Board and On-Call Contact List

*This appendix contains the current ECB membership and on-call contact roster. This list must be reviewed and updated on a [monthly/quarterly] basis by the Change Manager. The authoritative version is maintained in [System/Location].*

**ECB Membership:**

| Role | Name | Primary Contact | Secondary Contact | Alternate |
|---|---|---|---|---|
| Change Manager (ECB Chair) | [Name] | [Phone / Email] | [Phone] | [Name] |
| CISO | [Name] | [Phone / Email] | [Phone] | [Name] |
| Head of Technology Operations | [Name] | [Phone / Email] | [Phone] | [Name] |
| Technology Risk Manager | [Name] | [Phone / Email] | [Phone] | [Name] |
| [Core Banking System Owner] | [Name] | [Phone / Email] | [Phone] | [Name] |
| [Digital Channels System Owner] | [Name] | [Phone / Email] | [Phone] | [Name] |

**After-Hours On-Call Roster:**

*The current on-call schedule is maintained in [System/Location] and is updated on a [weekly/monthly] basis.*

| Week | Change Manager On-Call | Technology Operations On-Call |
|---|---|---|
| [Date Range] | [Name] | [Name] |
| [Date Range] | [Name] | [Name] |

---

### Appendix D — Emergency Change Classification Decision Aid

*This quick-reference guide assists personnel in determining whether an emergency change classification is appropriate. For detailed criteria, refer to Section 5.*

```
START: Is a production system change required?
        |
        YES
        |
Is the change needed within [X] hours?
        |
        YES
        |
Would failure to change result in:
  - Extended customer-impacting outage? OR
  - Active security vulnerability exploitation? OR
  - Regulatory/legal breach?
        |
        YES
        |
Can the standard CAB process be completed in time?
        |
        NO
        |
→ CLASSIFY AS EMERGENCY CHANGE
  → Proceed to Section 6 (Process Flow)
  → Raise Emergency Change Record immediately

If any answer is NO → Standard or Expedited Change Process applies
```

---

### Appendix E — Emergency Change Register Summary Template

*The Change Manager must maintain a running Emergency Change Register. The following template is used for the monthly summary report presented to the CAB and Technology Risk Committee.*

| Month | ECR ID | System | Category | Initiating Event | Auth. Method | Implemented By | Implementation Date | Retro Completed? | Corrective Actions | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| [Month] | [ECR-001] | [System] | Break-Fix | [Description] | ECB / Delegated | [Name] | [Date] | ☐ Yes ☐ No | [#] raised | Closed / Open |

**Monthly Summary Statistics:**

| Metric | Count / Value |
|---|---|
| Total emergency changes this period | [#] |
| Break-Fix | [#] |
| Security Emergency | [#] |
| Regulatory Emergency | [#] |
| Preventive Emergency | [#] |
| Changes involving CII-designated systems | [#] |
| Retrospective reviews completed on time | [#] / [#] |
| Retrospective reviews overdue | [#] |
| Corrective actions raised | [#] |
| Corrective actions overdue | [#] |
| Emergency changes without prior authorization (exceptions) | [#] |

---

### Appendix F — Glossary of Regulatory Terms

*This appendix provides a reference glossary for regulatory and industry terms used in this document, aligned with BNM RMiT definitions.*

| Term | Definition | Source |
|---|---|---|
| **Financial Institution (FI)** | Institutions licensed or approved under the Financial Services Act 2013 (FSA), Islamic Financial Services Act 2013 (IFSA), or Development Financial Institutions Act 2002 (DFIA) | BNM RMiT |
| **Technology Risk** | The risk of loss arising from inadequate or failed internal processes, people, and systems, or from external events, including technology failure, cyber threats, and technology-related fraud | BNM RMiT |
| **Critical Systems** | Technology systems whose failure or compromise would have a significant adverse impact on the financial institution's operations, customers, or financial stability | BNM RMiT |
| **Senior Management** | Personnel responsible for overseeing the implementation of strategies and policies approved by the Board | BNM RMiT |
| **CII** | Critical Information Infrastructure — systems, networks, and services whose disruption would have a significant impact on national security, the economy, public health, or safety | NACSA |

---

*End of Document*

---

> **Document Control Notice:** This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. This document must be stored in accordance with [Organization Name]'s Information Classification and Handling Policy [Document ID].