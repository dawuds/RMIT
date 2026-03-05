# Red Team Improvement Plan

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Handling Instructions:** This document is classified **Confidential**. It contains sensitive information regarding security vulnerabilities, remediation activities, and control deficiencies identified through red team exercises. Access is restricted to personnel with a legitimate need to know. Unauthorized disclosure may expose [Organization Name] to material operational, reputational, and regulatory risk. This document must be stored, transmitted, and disposed of in accordance with [Organization Name]'s Information Classification and Handling Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Red Team Exercise Summary](#3-red-team-exercise-summary)
4. [Objectives and Scope of Improvement Plan](#4-objectives-and-scope-of-improvement-plan)
5. [Findings Register and Risk Ratings](#5-findings-register-and-risk-ratings)
6. [Actions and Milestones](#6-actions-and-milestones)
7. [Accountable Owners](#7-accountable-owners)
8. [Target Completion Dates and Schedule](#8-target-completion-dates-and-schedule)
9. [Resource Requirements](#9-resource-requirements)
10. [Progress Tracking Mechanism](#10-progress-tracking-mechanism)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Escalation and Exceptions](#12-escalation-and-exceptions)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document — why the improvement plan exists, what it aims to achieve, and how it supports [Organization Name]'s broader technology risk and cybersecurity posture.*

This Red Team Improvement Plan documents the structured programme of remediation activities undertaken by [Organization Name] in response to findings identified during the red team exercise conducted in [Exercise Period / Reference]. The plan establishes clear actions, accountable owners, target completion dates, and progress tracking mechanisms to ensure timely and effective closure of identified gaps.

This document supports [Organization Name]'s obligations under Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically Clause **11.13**, which requires financial institutions to establish a formal improvement plan addressing findings from adversarial simulation and red team exercises.

### 1.2 Scope

*Define the boundaries of this improvement plan — which systems, business units, threat scenarios, or assessment activities it covers. Exclude anything explicitly out of scope.*

This improvement plan applies to the following:

**In Scope:**

- All findings rated **Critical**, **High**, and **Medium** arising from the red team exercise referenced in Section 3.
- [List of systems, platforms, or business domains assessed — e.g., Internet Banking Platform, Core Banking System, Enterprise Network Infrastructure]
- [List of business units or subsidiaries included in the exercise]
- Remediation activities to be completed within [Organization Name]'s technology, operations, and information security functions.

**Out of Scope:**

- Findings rated **Informational** (tracked separately in the [Reference Document / Security Register]).
- Systems and infrastructure not included in the red team exercise scope as defined in the Rules of Engagement document ([Document Reference]).
- Third-party vendor remediation activities that are governed by separate contractual obligations (tracked in [Third-Party Risk Management Register]).

### 1.3 Document Applicability

This document applies to the following organizational units and personnel:

- Technology Risk Management
- Information Security Operations
- IT Infrastructure and Operations
- Application Development and Engineering
- Business Continuity and Resilience
- Internal Audit (as observer)
- [Any additional relevant units]

---

## 2. Regulatory Context

### 2.1 Regulatory Framework

*Summarize the regulatory obligations that this improvement plan fulfils. Reference specific clauses and articulate what the regulator expects.*

[Organization Name] is a licensed financial institution regulated by **Bank Negara Malaysia (BNM)** and is subject to the following regulatory requirements:

| Regulation | Relevant Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 11.13 | Financial institutions conducting red team exercises shall establish a formal improvement plan to address identified findings, with clear accountabilities, timelines, and progress tracking. |
| BNM RMiT Policy Document | Clause 11.1 – 11.12 | Requirements governing the conduct of technology risk assessments and adversarial simulation exercises. |
| BNM RMiT Policy Document | Clause 10.x | Requirements for cyber resilience and incident response, which may be informed by red team findings. |
| [Additional Framework, e.g., NACSA CSAM] | [Clause Reference] | [Brief description of requirement] |
| [Additional Framework, e.g., PDPA 2010] | [Section Reference] | [Brief description of requirement] |

### 2.2 Supervisory Expectations

*Describe what BNM and relevant regulators expect to see in terms of outcomes and evidence for this artifact.*

BNM expects that [Organization Name]:

- Conducts red team exercises at a frequency and scope commensurate with the institution's risk profile.
- Treats exercise findings as risk items requiring formal management and escalation.
- Maintains documentary evidence of remediation progress that can be produced upon request during regulatory examinations or inspections.
- Reports material findings and remediation status to the Board Risk Committee and/or Board Audit Committee as appropriate.
- Ensures that lessons learned from red team exercises are incorporated into security controls, policies, and training programmes.

### 2.3 Internal Policy Alignment

This improvement plan aligns with the following internal policies and standards:

- [Organization Name] Information Security Policy ([Document Reference])
- [Organization Name] Technology Risk Management Framework ([Document Reference])
- [Organization Name] Vulnerability and Patch Management Standard ([Document Reference])
- [Organization Name] Incident Response Plan ([Document Reference])
- [Organization Name] Third-Party Risk Management Policy ([Document Reference])

---

## 3. Red Team Exercise Summary

### 3.1 Exercise Details

*Provide a factual summary of the red team exercise that generated the findings addressed in this improvement plan. Do not reproduce sensitive attack paths or exploit details in this section — reference the full exercise report.*

| Field | Details |
|---|---|
| **Exercise Name / Reference** | [Exercise Name or Reference ID] |
| **Exercise Type** | [e.g., Full Red Team, Purple Team, Assumed Breach, Threat-Led Penetration Testing (TLPT)] |
| **Conducting Party** | [Internal Red Team / External Provider Name] |
| **Exercise Period** | [Start Date] to [End Date] |
| **Report Reference** | [Red Team Exercise Report Document ID] |
| **Threat Scenarios Simulated** | [e.g., Advanced Persistent Threat (APT), Insider Threat, Supply Chain Compromise] |
| **Target Environment** | [e.g., Production, Staging, Isolated Test Environment] |
| **Rules of Engagement Reference** | [Document Reference] |
| **Exercise Sponsor** | [Name and Title] |

### 3.2 Exercise Objectives

*Summarize what the red team exercise set out to achieve — the threat intelligence basis, attack objectives, and success criteria.*

The red team exercise was designed to:

1. [Objective 1 — e.g., Simulate an external threat actor attempting to compromise the Internet Banking platform]
2. [Objective 2 — e.g., Assess the effectiveness of detective and preventive controls against lateral movement techniques]
3. [Objective 3 — e.g., Test the incident response capability of the Security Operations Centre (SOC)]
4. [Objective 4 — e.g., Evaluate the resilience of privileged access management controls]
5. [Add additional objectives as applicable]

### 3.3 Summary of Findings

*Provide a high-level, non-sensitive summary of findings by severity. Detailed findings are recorded in Section 5.*

| Severity | Count | Remediated at Report Date | Open at Plan Initiation |
|---|---|---|---|
| Critical | [#] | [#] | [#] |
| High | [#] | [#] | [#] |
| Medium | [#] | [#] | [#] |
| Low | [#] | [#] | [#] |
| Informational | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** |

### 3.4 Key Themes

*Describe the overarching themes or control domains where weaknesses were identified, to provide strategic context for the improvement activities.*

The red team exercise identified the following key themes requiring structured remediation:

1. **[Theme 1]** — [e.g., Insufficient detection capability for lateral movement within internal network segments]
2. **[Theme 2]** — [e.g., Gaps in privileged account management and monitoring]
3. **[Theme 3]** — [e.g., Weak email security controls permitting spear-phishing delivery]
4. **[Theme 4]** — [e.g., Incomplete asset inventory leading to unpatched internet-facing systems]
5. **[Theme 5]** — [Add as applicable]

---

## 4. Objectives and Scope of Improvement Plan

### 4.1 Plan Objectives

*State the specific goals this improvement plan is designed to achieve. Objectives should be measurable and time-bound where possible.*

This improvement plan has been established to achieve the following objectives:

1. **Close all Critical and High findings** identified in the red team exercise report within [X] days of plan approval, in accordance with [Organization Name]'s vulnerability remediation SLAs.
2. **Reduce residual risk** associated with identified control gaps to an acceptable level as defined in [Organization Name]'s Risk Appetite Statement.
3. **Strengthen detective and preventive controls** across the affected technology domains to prevent recurrence of identified attack techniques.
4. **Embed lessons learned** from the exercise into security operations, staff training, and policy frameworks.
5. **Demonstrate regulatory compliance** with BNM RMiT Clause 11.13 through documented, evidence-based remediation.
6. **Establish accountability** for each remediation action at the appropriate level of management.
7. [Add additional objectives as required]

### 4.2 Improvement Plan Scope

*Define the boundary of this improvement plan in terms of technology domains, business processes, and organizational units covered.*

**Technology Domains Covered:**

- [e.g., Network Security — Perimeter and Internal Segmentation]
- [e.g., Identity and Access Management (IAM)]
- [e.g., Endpoint Detection and Response (EDR)]
- [e.g., Security Information and Event Management (SIEM) / SOC Operations]
- [e.g., Application Security — Internet Banking Platform]
- [e.g., Email Security Gateway]
- [Add additional domains as required]

**Business Processes Covered:**

- [e.g., Incident Detection and Response]
- [e.g., Privileged Access Review and Recertification]
- [e.g., Security Awareness Training]
- [Add additional processes as required]

**Organizational Units Covered:**

- [e.g., Technology Risk Management]
- [e.g., Information Security Operations]
- [e.g., IT Infrastructure]
- [Add additional units as required]

### 4.3 Success Criteria

*Define what successful completion of this improvement plan looks like — how [Organization Name] will know the plan has been effectively executed.*

| Success Criterion | Measurement Method | Target |
|---|---|---|
| All Critical findings closed | Finding status in tracking register | 100% within [X] days |
| All High findings closed or accepted with residual risk sign-off | Finding status in tracking register | 100% within [X] days |
| Medium findings remediated or risk-accepted | Finding status in tracking register | 100% within [X] days |
| Detective control improvements verified | SOC validation testing / purple team review | [Target Date] |
| Staff awareness training completed | Training completion records | [Coverage %] by [Target Date] |
| Board/BRC reporting completed | Board papers and minutes | As per reporting calendar |
| Verification testing conducted | Re-test results | [Target Date] |

---

## 5. Findings Register and Risk Ratings

### 5.1 Findings Register

*List all findings from the red team exercise that are within scope of this improvement plan. Each finding should be assigned a unique identifier and risk rating. Sensitive technical details should be summarized here — full details remain in the exercise report.*

> **Note:** The complete technical findings, including attack paths, proof-of-concept details, and exploitation evidence, are contained in the Red Team Exercise Report ([Document Reference]). This register provides the management-level view required for remediation tracking.

| Finding ID | Finding Title | Severity | Affected Domain / System | Root Cause Category | Assigned Owner | Current Status | Target Closure Date |
|---|---|---|---|---|---|---|---|
| RT-[YY]-001 | [Finding Title] | Critical | [Domain/System] | [e.g., Configuration, Process, People] | [Name / Role] | Open | [Date] |
| RT-[YY]-002 | [Finding Title] | Critical | [Domain/System] | [e.g., Configuration, Process, People] | [Name / Role] | Open | [Date] |
| RT-[YY]-003 | [Finding Title] | High | [Domain/System] | [e.g., Configuration, Process, People] | [Name / Role] | In Progress | [Date] |
| RT-[YY]-004 | [Finding Title] | High | [Domain/System] | [e.g., Configuration, Process, People] | [Name / Role] | In Progress | [Date] |
| RT-[YY]-005 | [Finding Title] | Medium | [Domain/System] | [e.g., Configuration, Process, People] | [Name / Role] | Open | [Date] |
| RT-[YY]-006 | [Finding Title] | Medium | [Domain/System] | [e.g., Configuration, Process, People] | [Name / Role] | Open | [Date] |
| [Add rows as required] | | | | | | | |

### 5.2 Risk Rating Definitions

*The following risk rating scale is applied consistently across all findings in this improvement plan.*

| Rating | Definition | Remediation SLA |
|---|---|---|
| **Critical** | Exploitation could result in full system compromise, significant financial loss, data breach, or immediate operational disruption. Requires immediate escalation. | [X] days from report date |
| **High** | Exploitation could result in significant unauthorized access, privilege escalation, or material impact to confidentiality, integrity, or availability. | [X] days from report date |
| **Medium** | Exploitation could result in limited unauthorized access or moderate impact. May require multiple steps or specific conditions for successful exploitation. | [X] days from report date |
| **Low** | Exploitation is unlikely or impact is minimal. Represents a defence-in-depth improvement opportunity. | [X] days from report date |
| **Informational** | Observation with no direct exploitability. Best practice recommendation. | Tracked separately |

### 5.3 Root Cause Categories

*Categorizing findings by root cause enables systemic remediation and prevents recurrence.*

| Category | Description | Findings Count |
|---|---|---|
| Configuration | Misconfigured systems, services, or security controls | [#] |
| Process | Absent, ineffective, or inconsistently applied processes | [#] |
| People | Insufficient training, awareness, or human error | [#] |
| Technology | Missing or inadequate technology capability | [#] |
| Third Party | Gaps introduced by vendor or third-party systems | [#] |
| Architecture | Structural design weaknesses in systems or networks | [#] |

---

## 6. Actions and Milestones

### 6.1 Remediation Actions

*For each finding or group of related findings, define the specific remediation actions required. Actions should be specific, measurable, and achievable within the defined timeline.*

#### 6.1.1 Critical Findings — Remediation Actions

| Action ID | Related Finding(s) | Remediation Action Description | Action Type | Owner | Target Date | Dependencies | Status |
|---|---|---|---|---|---|---|---|
| ACT-001 | RT-[YY]-001 | [Describe specific remediation action, e.g., Implement network micro-segmentation between [System A] and [System B] to prevent lateral movement] | [Technical / Process / Training] | [Name / Role] | [Date] | [Any dependencies] | Open |
| ACT-002 | RT-[YY]-002 | [Describe specific remediation action] | [Technical / Process / Training] | [Name / Role] | [Date] | [Any dependencies] | Open |
| [Add rows as required] | | | | | | | |

#### 6.1.2 High Findings — Remediation Actions

| Action ID | Related Finding(s) | Remediation Action Description | Action Type | Owner | Target Date | Dependencies | Status |
|---|---|---|---|---|---|---|---|
| ACT-003 | RT-[YY]-003 | [Describe specific remediation action] | [Technical / Process / Training] | [Name / Role] | [Date] | [Any dependencies] | Open |
| ACT-004 | RT-[YY]-004 | [Describe specific remediation action] | [Technical / Process / Training] | [Name / Role] | [Date] | [Any dependencies] | Open |
| [Add rows as required] | | | | | | | |

#### 6.1.3 Medium Findings — Remediation Actions

| Action ID | Related Finding(s) | Remediation Action Description | Action Type | Owner | Target Date | Dependencies | Status |
|---|---|---|---|---|---|---|---|
| ACT-005 | RT-[YY]-005 | [Describe specific remediation action] | [Technical / Process / Training] | [Name / Role] | [Date] | [Any dependencies] | Open |
| ACT-006 | RT-[YY]-006 | [Describe specific remediation action] | [Technical / Process / Training] | [Name / Role] | [Date] | [Any dependencies] | Open |
| [Add rows as required] | | | | | | | |

#### 6.1.4 Cross-Cutting Improvement Actions

*Actions that address systemic root causes and themes identified across multiple findings.*

| Action ID | Theme Addressed | Improvement Action Description | Owner | Target Date | Status |
|---|---|---|---|---|---|
| ACT-[X] | [Theme, e.g., Detection Capability] | [e.g., Expand SIEM detection rule coverage for techniques identified in the MITRE ATT&CK framework mapping of exercise findings] | [Name / Role] | [Date] | Open |
| ACT-[X] | [Theme, e.g., Staff Awareness] | [e.g., Deliver targeted security awareness training for [Team/Role] based on social engineering techniques used in exercise] | [Name / Role] | [Date] | Open |
| ACT-[X] | [Theme, e.g., Policy Update] | [e.g., Update Privileged Access Management Policy to incorporate controls identified as gaps during the exercise] | [Name / Role] | [Date] | Open |
| [Add rows as required] | | | | | | |

### 6.2 Milestone Schedule

*The following milestones represent the key delivery checkpoints for this improvement plan.*

| Milestone | Description | Target Date | Owner | Status |
|---|---|---|---|---|
| M1 | Improvement plan approved by [Approving Authority] | [Date] | Head of Technology Risk | Pending |
| M2 | All Critical findings remediated and verified | [Date] | CISO / Head of Information Security | Pending |
| M3 | All High findings remediated or risk-accepted | [Date] | Head of Technology Risk | Pending |
| M4 | Cross-cutting improvement actions initiated | [Date] | [Owner] | Pending |
| M5 | First progress report to [Committee, e.g., Technology Risk Committee] | [Date] | Head of Technology Risk | Pending |
| M6 | All Medium findings remediated or risk-accepted | [Date] | [Owner] | Pending |
| M7 | Verification / re-test of remediated controls completed | [Date] | Head of Information Security | Pending |
| M8 | Lessons learned embedded in policies and training programmes | [Date] | [Owner] | Pending |
| M9 | Final progress report and plan closure report to [Committee] | [Date] | Head of Technology Risk | Pending |
| M10 | Plan closure approved by [Approving Authority] | [Date] | [Approving Authority] | Pending |

### 6.3 Implementation Phases

*Summarize the phased approach to implementation where applicable.*

**Phase 1 — Immediate Containment ([Date Range])**
> Address all Critical-rated findings. Implement interim mitigating controls where permanent remediation requires longer lead times. Escalate any Critical findings that cannot be closed within the SLA to [Escalation Authority].

**Phase 2 — Structured Remediation ([Date Range])**
> Close all High-rated findings. Initiate remediation of Medium findings. Begin cross-cutting improvement actions including policy updates and training programmes.

**Phase 3 — Systemic Improvement ([Date Range])**
> Complete Medium finding remediation. Finalize policy and process enhancements. Conduct verification testing to confirm control effectiveness. Deliver lessons-learned outputs.

**Phase 4 — Closure and Verification ([Date Range])**
> Complete verification re-testing. Obtain management sign-off on plan closure. Archive improvement plan and supporting evidence. Brief Board Risk Committee on outcomes.

---

## 7. Accountable Owners

### 7.1 Ownership Framework

*Define how ownership is assigned and the obligations that come with it.*

Each remediation action in this improvement plan is assigned a single **Accountable Owner** who bears primary responsibility for ensuring the action is completed on time and to the required standard. Accountable Owners are expected to:

- Allocate necessary resources (people, budget, tools) to complete assigned actions.
- Provide regular status updates to the Head of Technology Risk as per the reporting cadence defined in Section 10.
- Escalate any impediments, dependency failures, or timeline risks promptly.
- Provide evidence of completion for each action upon closure.
- Coordinate with dependent teams and resolve blockers within their authority.

### 7.2 Ownership Register

*Assign a named individual and their organizational role to each remediation action. Ownership should be at the level of a manager or above who has authority to direct resources.*

| Action ID | Action Summary | Accountable Owner (Name) | Role / Title | Business Unit | Contact / Email | Escalation Path |
|---|---|---|---|---|---|---|
| ACT-001 | [Action Summary] | [Name] | [Role] | [Business Unit] | [Email] | [Escalation Name/Role] |
| ACT-002 | [Action Summary] | [Name] | [Role] | [Business Unit] | [Email] | [Escalation Name/Role] |
| ACT-003 | [Action Summary] | [Name] | [Role] | [Business Unit] | [Email] | [Escalation Name/Role] |
| ACT-004 | [Action Summary] | [Name] | [Role] | [Business Unit] | [Email] | [Escalation Name/Role] |
| ACT-005 | [Action Summary] | [Name] | [Role] | [Business Unit] | [Email] | [Escalation Name/Role] |
| ACT-006 | [Action Summary] | [Name] | [Role] | [Business Unit] | [Email] | [Escalation Name/Role] |
| [Add rows as required] | | | | | | |

### 7.3 Senior Management Accountability

*Confirm the senior management responsibility for this improvement plan at the executive level.*

| Responsibility | Accountable Individual | Role |
|---|---|---|
| Overall plan ownership and delivery | [Name] | Head of Technology Risk |
| Technical security remediation | [Name] | Chief Information Security Officer (CISO) |
| Infrastructure remediation | [Name] | Head of IT Infrastructure |
| Application security remediation | [Name] | Head of Application Development / Engineering |
| Governance and reporting | [Name] | Head of Technology Risk |
| Board-level accountability | [Name] | Chief Risk Officer / CTO |

---

## 8. Target Completion Dates and Schedule

### 8.1 Completion Date Summary

*Provide a consolidated view of all target completion dates by severity band and action.*

| Severity | SLA (from Plan Approval) | Target Completion Date | # Actions Due |
|---|---|---|---|
| Critical | [X] days | [Date] | [#] |
| High | [X] days | [Date] | [#] |
| Medium | [X] days | [Date] | [#] |
| Cross-Cutting Improvements | [X] days | [Date] | [#] |

### 8.2 Detailed Schedule

*A full schedule of all actions and milestones with target dates for use in progress tracking.*

| Week / Period | Actions Due | Milestones Due | Owner(s) |
|---|---|---|---|
| [Week 1–2] | ACT-001, ACT-002 (Critical) | — | [Owner] |
| [Week 3–4] | ACT-003, ACT-004 (High) | M2 — Critical findings closed | [Owner] |
| [Week 5–8] | ACT-005, ACT-006 (Medium), ACT-[X] (Cross-cutting) | M3 — High findings closed; M5 — First progress report | [Owner] |
| [Week 9–12] | Remaining Medium actions; Policy updates | M6 — Medium findings closed | [Owner] |
| [Week 13–16] | Verification re-testing; Training delivery | M7 — Verification complete; M8 — Lessons embedded | [Owner] |
| [Week 17–20] | Final reporting and closure | M9, M10 — Plan closure | Head of Technology Risk |

### 8.3 Timeline Risk and Contingency

*Identify known risks to the schedule and the contingency approach.*

| Schedule Risk | Likelihood | Impact | Contingency / Mitigation |
|---|---|---|---|
| [e.g., Vendor dependency for patch delivery] | [High/Med/Low] | [High/Med/Low] | [e.g., Engage vendor account manager; implement interim workaround] |
| [e.g., Resource availability during BAU project peak] | [High/Med/Low] | [High/Med/Low] | [e.g., Request resource allocation approval from CTO; defer lower-priority BAU work] |
| [e.g., Change freeze window conflicts with remediation timeline] | [High/Med/Low] | [High/Med/Low] | [e.g., Submit emergency change requests; obtain CAB approval for security exemptions] |
| [Add additional risks as identified] | | | |

---

## 9. Resource Requirements

### 9.1 Human Resources

*Identify the staffing requirements needed to execute the improvement plan, including internal resources and any external support.*

| Resource Type | Role / Expertise Required | Estimated Effort | Source | Assigned Individual(s) | Status |
|---|---|---|---|---|---|
| Internal | Security Engineer — Remediation of [Technology Domain] | [X FTE days] | Information Security Operations | [Name] | Confirmed / TBC |
| Internal | Network Engineer — Infrastructure changes | [X FTE days] | IT Infrastructure | [Name] | Confirmed / TBC |
| Internal | Application Developer — Application security fixes | [X FTE days] | Application Development | [Name] | Confirmed / TBC |
| Internal | IAM Administrator — Access control remediation | [X FTE days] | IT Operations | [Name] | Confirmed / TBC |
| Internal | SOC Analyst — Detection rule development | [X FTE days] | Security Operations Centre | [Name] | Confirmed / TBC |
| External | [e.g., Penetration Testing / Verification Re-test] | [X days] | [Vendor Name] | [Engagement Reference] | Confirmed / TBC |
| External | [e.g., Security Awareness Training Provider] | [X days] | [Vendor Name] | [Engagement Reference] | Confirmed / TBC |
| [Add rows as required] | | | | | |

### 9.2 Technology and Tooling Requirements

*Identify any technology, software, or tooling required to complete remediation actions.*

| Action ID | Technology / Tool Required | Estimated Cost | Budget Source | Procurement Status |
|---|---|---|---|---|
| ACT-[X] | [e.g., Endpoint Detection and Response (EDR) platform upgrade] | [MYR X,XXX] | [Budget Line] | [Approved / Pending] |
| ACT-[X] | [e.g., Privileged Access Management (PAM) tool] | [MYR X,XXX] | [Budget Line] | [Approved / Pending] |
| ACT-[X] | [e.g., Additional SIEM licensing for log ingestion capacity] | [MYR X,XXX] | [Budget Line] | [Approved / Pending] |
| [Add rows as required] | | | | |

### 9.3 Budget Summary

*Provide an overall budget estimate for the improvement plan.*

| Category | Estimated Cost (MYR) | Budget Reference | Approval Status |
|---|---|---|---|
| Internal Staff Effort (opportunity cost) | [Amount] | [Budget Reference] | [Approved / Pending] |
| External Services — Re-testing | [Amount] | [Budget Reference] | [Approved / Pending] |
| External Services — Training | [Amount] | [Budget Reference] | [Approved / Pending] |
| Technology / Tooling | [Amount] | [Budget Reference] | [Approved / Pending] |
| Contingency ([X]%) | [Amount] | [Budget Reference] | [Approved / Pending] |
| **Total Estimated Cost** | **[Total Amount]** | | |

### 9.4 Resource Constraints and Risks

*Document any known resource constraints that may affect plan delivery.*

- [e.g., Internal security engineering team is at capacity with existing project commitments during [Period] — request for additional contractor resource submitted to [Approving Authority]]
- [e.g., Budget approval for [Technology/Tool] is pending [Committee] approval scheduled for [Date]]
- [Add additional constraints as identified]

---

## 10. Progress Tracking Mechanism

### 10.1 Tracking Approach

*Describe the mechanism used to monitor, report, and govern progress against this improvement plan.*

Progress against this improvement plan is tracked using the following mechanisms:

1. **Central Tracking Register** — The authoritative record of all findings and actions, maintained by [Responsible Team, e.g., Technology Risk Management]. The register is updated [weekly / fortnightly] with current status, evidence of completion, and any changes to target dates or owners. ([Register Location / System Reference])

2. **Fortnightly Owner Check-ins** — The Head of Technology Risk conducts standing review calls with action owners on a fortnightly basis to review progress, identify blockers, and agree on next steps.

3. **Monthly Progress Reports** — A written progress report is produced monthly and distributed to [Distribution List, e.g., Technology Risk Committee, CISO, CTO]. The report summarizes completion status by severity band, highlights overdue actions, and documents any approved timeline changes.

4. **Governance Committee Reporting** — Progress is reported to [Committee Name, e.g., Technology Risk Committee] at [Frequency, e.g., each scheduled meeting] and to the [Board Risk Committee / Board Audit Committee] [Frequency, e.g., quarterly or at each scheduled meeting until plan closure].

5. **Evidence Collection** — For each closed action, the accountable owner provides formal evidence of completion (e.g., configuration screenshots, test results, policy documents, training records). Evidence is stored at [Document Repository Reference].

6. **Verification Re-testing** — Upon completion of material technical remediations, [Organization Name]'s [Internal Red Team / External Vendor] will conduct targeted verification testing to confirm control effectiveness. Results are documented and referenced in the tracking register.

### 10.2 Status Definitions

| Status | Definition |
|---|---|
| **Open** | Action has been assigned but work has not commenced. |
| **In Progress** | Work is underway. Action is on track to meet the target date. |
| **At Risk** | Action is unlikely to meet the target date. Escalation required. |
| **Overdue** | Target date has passed without completion. Escalation and revised date required. |
| **Completed — Pending Verification** | Remediation work is complete. Awaiting formal verification or evidence review. |
| **Completed** | Remediation work is complete and evidence has been reviewed and accepted by [Head of Technology Risk / CISO]. |
| **Risk Accepted** | Action will not be remediated. Residual risk has been formally accepted by [Approving Authority] with documented justification. |
| **Deferred** | Target date has been revised and approved by [Approving Authority]. Original date and reason for deferral are recorded. |

### 10.3 Progress Dashboard

*This table provides a snapshot view of plan progress at the most recent review date. Update at each reporting cycle.*

| Category | Total | Completed | In Progress | At Risk / Overdue | Open | % Complete |
|---|---|---|---|---|---|---|
| Critical Actions | [#] | [#] | [#] | [#] | [#] | [%] |
| High Actions | [#] | [#] | [#] | [#] | [#] | [%] |
| Medium Actions | [#] | [#] | [#] | [#] | [#] | [%] |
| Cross-Cutting Actions | [#] | [#] | [#] | [#] | [#] | [%] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[%]** |

*Last Updated: [Date] by [Name / Role]*

### 10.4 Reporting Calendar

| Report / Event | Frequency | Audience | Owner | Next Due Date |
|---|---|---|---|---|
| Internal tracking register update | Weekly | Technology Risk Team | Technology Risk Manager | [Date] |
| Owner progress check-in | Fortnightly | Action Owners | Head of Technology Risk | [Date] |
| Management progress report | Monthly | CISO, CTO, Technology Risk Committee | Head of Technology Risk | [Date] |
| Technology Risk Committee update | [Frequency] | Technology Risk Committee | Head of Technology Risk | [Date] |
| Board Risk Committee update | [Frequency] | Board Risk Committee | CRO / CTO | [Date] |
| Verification re-test | Upon completion of material remediations | Head of Technology Risk, CISO | [CISO / Vendor] | [Date] |
| Plan closure report | Upon plan completion | [Committee / Board] | Head of Technology Risk | [Date] |

---

## 11. Roles and Responsibilities

### 11.1 RACI Matrix

*The following RACI matrix defines the responsibilities of key roles in the execution and governance of this improvement plan. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of Technology Risk | CISO / Head of InfoSec | Action Owner | IT Infrastructure / Ops | Application Development | Internal Audit | Technology Risk Committee | Board Risk Committee | CRO / CTO |
|---|---|---|---|---|---|---|---|---|---|
| Improvement plan development and maintenance | A/R | C | C | C | C | I | I | I | C |
| Remediation action execution | I | C | R | R/C | R/C | — | — | — | I |
| Evidence collection and submission | I | C | R | R | R | — | — | — | — |
| Progress tracking register maintenance | A/R | C | I | I | I | — | — | — | I |
| Fortnightly owner check-ins | A/R | C | R | C | C | — | — | — | — |
| Monthly management progress report | A/R | C | I | I | I | I | I | — | I |
| Escalation of overdue / at-risk actions | A/R | C | R | C | C | I | — | — | C |
| Technology Risk Committee reporting | A/R | C | — | — | — | I | I | — | C |
| Board Risk Committee reporting | C | C | — | — | — | I | C | A | R |
| Verification re-testing | C | A/R | I | C | C | I | — | — | I |
| Risk acceptance for non-remediated findings | C | C | C | — | — | C | A/R | I | C |
| Plan closure approval | C | C | — | — | — | C | A | I | R |
| Lessons learned integration | R | C | C | C | C | C | I | — | I |
| Regulatory examination support | A/R | C | C | C | C | C | — | — | C |

### 11.2 Role Descriptions

| Role | Responsibilities in the Context of This Plan |
|---|---|
| **Head of Technology Risk** | Owns and governs the improvement plan. Responsible for tracking progress, producing management reports, escalating issues, and ensuring the plan is executed in accordance with BNM RMiT obligations. |
| **CISO / Head of Information Security** | Provides technical oversight of security remediations. Reviews and approves evidence of completion for technical actions. Leads verification re-testing coordination. |
| **Action Owners** | Named individuals accountable for executing specific remediation actions. Responsible for delivering completed actions on time, providing evidence, and escalating blockers to the Head of Technology Risk. |
| **IT Infrastructure / Operations** | Executes infrastructure-level remediation actions (e.g., patching, network configuration changes, hardening). Provides technical expertise and change management support. |
| **Application Development / Engineering** | Executes application-level remediation actions (e.g., code fixes, configuration changes, API security improvements). |
| **Internal Audit** | Independent review of the improvement plan's completeness and execution. May conduct spot checks on evidence of completion. Reports to Audit Committee. |
| **Technology Risk Committee** | Governance oversight of the improvement plan. Reviews progress reports, approves risk acceptances, and escalates material issues to the Board. |
| **Board Risk Committee** | Board-level oversight and accountability for material technology risks. Receives periodic updates on improvement plan status. |
| **CRO / CTO** | Executive sponsorship and accountability. Ensures adequate resources are committed to the plan. Signs off on plan closure. |

---

## 12. Escalation and Exceptions

### 12.1 Escalation Framework

*Define the conditions under which actions must be escalated, and the escalation path.*

| Trigger | Escalation Level | Escalation Path | Timeframe |
|---|---|---|---|
| Critical finding cannot be closed within SLA | Level 1 | Action Owner → Head of Technology Risk | Immediately upon identification |
| Critical or High finding overdue by > [X] days | Level 2 | Head of Technology Risk → CISO → CTO / CRO | Within [X] business days of SLA breach |
| Material finding requires Board-level awareness | Level 3 | CRO → Board Risk Committee | At next scheduled Board/BRC meeting or sooner |
| Remediation requires budget outside existing approval | Level 1 | Head of Technology Risk → CTO → [Budget Authority] | Within [X] business days of identification |
| Remediation is technically infeasible | Level 2 | Action Owner → CISO → Head of Technology Risk → Technology Risk Committee | Within [X] business days of determination |
| Regulatory enquiry regarding red team findings | Level 3 | Head of Technology Risk → CRO → Board | Immediately |

### 12.2 Risk Acceptance Process

*For findings that cannot be remediated within the defined SLA, or where remediation is not feasible, the following risk acceptance process applies.*

1. **Identification** — The Action Owner identifies that a finding cannot be remediated as planned and documents the reason.
2. **Assessment** — The CISO / Head of Technology Risk assesses the residual risk, including likelihood and impact in the absence of the control.
3. **Documentation** — A formal Risk Acceptance Request is completed, referencing the finding ID, reason for non-remediation, residual risk assessment, and proposed compensating controls (if any).
4. **Approval** — Risk acceptance is approved by [Approving Authority — e.g., Technology Risk Committee for Medium/High; Board Risk Committee for Critical].
5. **Recording** — The approved risk acceptance is recorded in [Organization Name]'s Risk Register ([Reference]) and in the improvement plan tracking register.
6. **Review** — Risk acceptances are reviewed at each semi-annual plan review cycle and upon any material change in the threat environment.

### 12.3 Exception Management

*Any deviation from the approved improvement plan (e.g., changes to scope, timelines, or ownership) must be formally documented and approved.*

| Exception Type | Approval Authority | Documentation Required |
|---|---|---|
| Timeline extension (< [X] days) for any action | Head of Technology Risk | Updated tracking register entry with justification |
| Timeline extension (> [X] days) for High/Critical action | CISO + Head of Technology Risk | Formal exception request with revised plan |
| Change of accountable owner | Head of Technology Risk | Tracking register update; handover documentation |
| Scope reduction (removal of finding from plan) | Technology Risk Committee | Risk acceptance or formal closure justification |
| Significant change to remediation approach | CISO + Action Owner | Updated action description with technical rationale |

---

## 13. Review and Approval

### 13.1 Document Review

*This document is subject to the following review schedule in accordance with the stated review frequency.*

This document shall be reviewed **semi-annually** or upon any of the following trigger events:
- Completion of a new red team exercise generating additional findings.
- Significant change in [Organization Name]'s technology or threat landscape.
- Material change to BNM RMiT requirements or supervisory guidance.
- Direction from Internal Audit, External Audit, or BNM examination.
- Significant change in the status of open findings (e.g., new Critical finding, mass closure event).

### 13.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial document creation. |
| [1.1] | [Date] | [Author Name, Role] | [Description of changes, e.g., Updated findings register following Q[X] review; added ACT-007 for newly identified gap] |
| [2.0] | [Date] | [Author Name, Role] | [Description of changes, e.g., Semi-annual review — updated completion dates, closed ACT-001 to ACT-004, added new actions from follow-up exercise] |
| [Add rows as required] | | | |

### 13.3 Approval Sign-Off

*The following individuals have reviewed and approved this document. Electronic or wet signatures are acceptable in accordance with [Organization Name]'s document management policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk | [Name] | | [Date] |
| Chief Information Security Officer (CISO) | [Name] | | [Date] |
| Chief Technology Officer (CTO) | [Name] | | [Date] |
| Chief Risk Officer (CRO) | [Name] | | [Date] |
| [Additional approver as required] | [Name] | | [Date] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Title | Relevant Clause(s) |
|---|---|---|
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Clause 11.13 — Red Team Improvement Plan |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Clause 11.1–11.12 — Technology Risk Assessment and Adversarial Simulation |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Clause 10.x — Cyber Resilience |
| [NACSA CSAM] | [Cybersecurity Assessment Methodology] | [Relevant section] |
| [PDPA 2010] | Personal Data Protection Act 2010 | [Relevant section, if applicable] |
| [ISO/IEC 27001:2022] | Information Security Management Systems | [Relevant controls, if applicable] |

### 14.2 Internal References

| Document Title | Document ID | Owner |
|---|---|---|
| Red Team Exercise Report — [Exercise Reference] | [Document ID] | CISO |
| Rules of Engagement — [Exercise Reference] | [Document ID] | CISO |
| Technology Risk Management Framework | [Document ID] | Head of Technology Risk |
| Information Security Policy | [Document ID] | CISO |
| Vulnerability and Patch Management Standard | [Document ID] | Head of IT Infrastructure |
| Incident Response Plan | [Document ID] | Head of Information Security |
| Risk Register | [Document ID] | Head of Technology Risk |
| Risk Appetite Statement | [Document ID] | CRO |
| [Add additional references as required] | | |

---

## 15. Appendices

### Appendix A — Findings Detail Sheets

*Provide one-page detail sheets for each finding in scope of this improvement plan. Each sheet should include the finding description, technical evidence summary (sanitized), root cause analysis, and recommended remediation approach, as extracted from the Red Team Exercise Report. This appendix is classified **Restricted** and should be distributed separately from the main document body.*

| Finding ID | Title | Appendix Reference |
|---|---|---|
| RT-[YY]-001 | [Finding Title] | Appendix A.1 |
| RT-[YY]-002 | [Finding Title] | Appendix A.2 |
| RT-[YY]-003 | [Finding Title] | Appendix A.3 |
| [Add rows as required] | | |

> **[Insert Finding Detail Sheets at Appendix A.1, A.2, A.3 etc. in accordance with the Red Team Exercise Report — [Document Reference]]**

---

### Appendix B — MITRE ATT&CK Mapping

*Map each finding to the relevant MITRE ATT&CK Tactic and Technique. This mapping supports prioritization of detection improvements and enables benchmarking against industry threat intelligence.*

| Finding ID | ATT&CK Tactic | ATT&CK Technique ID | Technique Name | Relevant Action(s) |
|---|---|---|---|---|
| RT-[YY]-001 | [e.g., Lateral Movement] | [e.g., T1021] | [e.g., Remote Services] | ACT-001 |
| RT-[YY]-002 | [e.g., Privilege Escalation] | [e.g., T1078] | [e.g., Valid Accounts] | ACT-002 |
| RT-[YY]-003 | [e.g., Initial Access] | [e.g., T1566] | [e.g., Phishing] | ACT-003 |
| [Add rows as required] | | | | |

---

### Appendix C — Evidence Register

*Upon closure of each action, evidence of completion is recorded here. Evidence must be reviewed and accepted by the Head of Technology Risk or CISO before the action is marked as Completed.*

| Action ID | Evidence Description | Evidence Location / Reference | Date Submitted | Reviewed By | Review Date | Outcome |
|---|---|---|---|---|---|---|
| ACT-001 | [e.g., Configuration change record; post-change scan results] | [Repository Path / Ticket Reference] | [Date] | [Name] | [Date] | [Accepted / Rejected / Pending] |
| ACT-002 | [e.g., Updated policy document; training attendance records] | [Repository Path / Ticket Reference] | [Date] | [Name] | [Date] | [Accepted / Rejected / Pending] |
| [Add rows as required] | | | | | | |

---

### Appendix D — Risk Acceptance Register

*Record all formally accepted residual risks arising from this improvement plan.*

| Risk Acceptance ID | Related Finding ID | Residual Risk Description | Risk Rating | Reason for Non-Remediation | Compensating Controls | Approved By | Approval Date | Review Date |
|---|---|---|---|---|---|---|---|---|
| RA-001 | RT-[YY]-[XXX] | [Description of residual risk] | [High/Med/Low] | [Reason] | [Compensating controls in place] | [Name / Role] | [Date] | [Date] |
| [Add rows as required] | | | | | | | | |

---

### Appendix E — Verification Re-Test Summary

*Upon completion of material technical remediations, record the results of verification re-testing conducted to confirm control effectiveness.*

| Re-Test Reference | Related Finding(s) / Action(s) | Re-Test Scope | Conducted By | Re-Test Date | Outcome | Residual Concerns | Sign-Off |
|---|---|---|---|---|---|---|---|
| VT-001 | RT-[YY]-001, ACT-001 | [Scope of re-test] | [Internal / External Provider] | [Date] | [Effective / Partially Effective / Ineffective] | [Any outstanding concerns] | [Name / Role] |
| [Add rows as required] | | | | | | | |

---

### Appendix F — Lessons Learned Register

*Document lessons learned from both the red team exercise and the improvement plan execution process, for incorporation into security operations, policies, and training.*

| Lesson ID | Source | Lesson Description | Recommended Action | Owner | Status |
|---|---|---|---|---|---|
| LL-001 | Red Team Exercise | [e.g., SOC detection capability for [technique] was insufficient — alerts were not generated for [X] hours after compromise] | [e.g., Expand SIEM detection rules; implement additional threat hunting procedures] | [Name / Role] | [Open / In Progress / Implemented] |
| LL-002 | Improvement Plan Execution | [e.g., Dependency on vendor for patching resulted in SLA breach — vendor SLA terms require review] | [e.g., Review and update vendor contracts to include security remediation SLAs] | [Name / Role] | [Open / In Progress / Implemented] |
| [Add rows as required] | | | | | |

---

*End of Document*

---

| Field | Value |
|---|---|
| **Document Title** | Red Team Improvement Plan |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Last Updated** | [Date] |