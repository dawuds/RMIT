# BNM Incident Reporting Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Regulatory Affairs |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be reproduced, distributed, or disclosed to any third party without prior written approval from the Head of Regulatory Affairs. All printed copies are uncontrolled. The master copy is maintained in [Document Management System Name].

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Incident Classification Matrix](#5-incident-classification-matrix)
6. [Notification Trigger Criteria](#6-notification-trigger-criteria)
7. [Step-by-Step Process Flow](#7-step-by-step-process-flow)
8. [Escalation Timelines](#8-escalation-timelines)
9. [Roles and Responsibilities (RACI)](#9-roles-and-responsibilities-raci)
10. [Communication Templates](#10-communication-templates)
11. [Post-Incident Review Process](#11-post-incident-review-process)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose

*Describe the primary purpose of this procedure and the regulatory obligation it fulfills. Reference the four-hour reporting requirement and the governing BNM policy document.*

This procedure establishes the formal process by which [Organization Name] (hereinafter referred to as "the Organization") detects, assesses, escalates, and reports material technology incidents to Bank Negara Malaysia (BNM) in compliance with the **Risk Management in Technology (RMiT) Policy Document**, specifically **Paragraph 11.4**.

The procedure ensures that:

- All material incidents are identified and classified in a consistent and timely manner.
- BNM is notified within **four (4) hours** of an incident being classified as material, in accordance with RMiT requirements.
- Internal stakeholders, the Board, Senior Management, and relevant third parties are informed through a structured escalation process.
- Post-incident reviews are conducted to drive continuous improvement and remediation.
- The Organization maintains a comprehensive audit trail of all incident reporting activities for regulatory examination purposes.

This procedure is **mandatory** and must be followed by all personnel involved in technology incident management, regulatory affairs, and operational resilience.

---

## 2. Scope and Applicability

*Define the organizational scope, system boundaries, and categories of incidents covered by this procedure. Specify any exclusions.*

### 2.1 Organizational Scope

This procedure applies to:

- **All business units** of [Organization Name] that operate, maintain, or rely upon technology systems for the delivery of financial services.
- **All subsidiary entities** of [Organization Name] that are licensed by or subject to supervision by BNM, including but not limited to: [List Applicable Subsidiaries].
- **All third-party service providers and outsourcing partners** whose technology failures may constitute a material incident affecting the Organization's operations or its customers.

### 2.2 System and Asset Scope

This procedure covers incidents affecting:

- **Core banking systems**, payment platforms, and transaction processing engines.
- **Internet and mobile banking channels** accessible to retail and corporate customers.
- **Critical infrastructure**, including data centres, network infrastructure, and cloud environments.
- **Cybersecurity systems**, including firewalls, intrusion detection systems, SIEM platforms, and identity management systems.
- **Data assets**, including customer personal data and financial records.
- **Third-party managed services** integrated with the Organization's technology environment.

### 2.3 Incident Categories in Scope

| Category | Examples |
|---|---|
| Cyber incidents | Ransomware, DDoS attacks, data breaches, unauthorized access |
| System outages | Core banking downtime, payment system unavailability |
| Data loss or leakage | Accidental disclosure, unauthorized data exfiltration |
| Fraud-related technology events | Account takeover facilitated by system compromise |
| Third-party/outsourcing failures | Critical vendor outages impacting service delivery |
| Operational technology disruptions | ATM network failures, POS system outages |

### 2.4 Exclusions

The following are outside the scope of this procedure unless they escalate to material status:

- Routine IT service desk incidents and low-severity service requests.
- Planned maintenance windows and pre-approved change-related outages.
- Minor performance degradation that does not affect customer-facing services.
- Incidents fully contained within non-production environments with no customer impact.

---

## 3. Regulatory Context

*Summarize the relevant regulatory obligations from BNM RMiT and any related policies. Ensure this section is updated whenever BNM issues revised guidance.*

### 3.1 Governing Regulatory Instruments

| Instrument | Issuing Authority | Relevant Section(s) |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Paragraph 11.4 |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Relevant Paragraphs] |
| Business Continuity Management (BCM) Policy | Bank Negara Malaysia | [Relevant Paragraphs] |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Breach notification obligations |
| [Organization Name] Technology Risk Policy | [Organization Name] | [Internal Policy Reference] |

### 3.2 Key Regulatory Requirements

Under **RMiT Paragraph 11.4**, the Organization is required to:

1. **Report material incidents to BNM within four (4) hours** of the Organization becoming aware of the incident.
2. Submit a **preliminary incident report** that captures the nature, impact, and initial containment actions taken.
3. Provide **subsequent progress updates** to BNM at intervals determined by the severity and evolving nature of the incident.
4. Submit a **final post-incident report** within a period specified by BNM, detailing root cause analysis, full impact assessment, and remediation actions.
5. Maintain records of all incidents and regulatory communications for a minimum of **[X] years** in accordance with BNM record-keeping requirements.

### 3.3 Relationship to Other Internal Policies

This procedure operates in conjunction with:

- **[Organization Name] Incident Management Policy** — defines the broader incident management lifecycle.
- **[Organization Name] Crisis Management Plan** — activated for incidents of the highest severity.
- **[Organization Name] Business Continuity Plan** — governs service recovery activities.
- **[Organization Name] Data Breach Response Procedure** — applicable when personal data is involved.

---

## 4. Definitions and Abbreviations

*Define all key terms used in this procedure to ensure consistent interpretation across the organization.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Material Incident** | A technology incident that meets one or more of the notification trigger criteria defined in Section 6 of this procedure, requiring mandatory reporting to BNM. |
| **Incident** | Any unplanned disruption or degradation of an IT service, or a security event that may have an adverse impact on the Organization's operations, customers, or reputation. |
| **Cyber Incident** | A malicious or suspicious activity that compromises the confidentiality, integrity, or availability of the Organization's information systems or data. |
| **Preliminary Report** | The initial notification submitted to BNM within four (4) hours of a material incident being declared, containing the information available at that time. |
| **Final Post-Incident Report** | A comprehensive report submitted to BNM after full resolution, detailing root cause, total impact, and remediation measures. |
| **Incident Commander** | The designated individual responsible for coordinating the Organization's overall response to a declared material incident. |
| **Recovery Time Objective (RTO)** | The targeted duration within which a system or process must be restored following a disruption. |
| **Recovery Point Objective (RPO)** | The maximum acceptable period of data loss in the event of a disruption. |
| **BNM** | Bank Negara Malaysia, the central bank of Malaysia. |
| **RMiT** | Risk Management in Technology — the BNM policy document governing technology risk management for financial institutions. |
| **CISO** | Chief Information Security Officer. |
| **CTO** | Chief Technology Officer. |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia). |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| CISO | Chief Information Security Officer |
| CTO | Chief Technology Officer |
| CRO | Chief Risk Officer |
| CEO | Chief Executive Officer |
| RACI | Responsible, Accountable, Consulted, Informed |
| SLA | Service Level Agreement |
| SOC | Security Operations Centre |
| SIEM | Security Information and Event Management |
| PIR | Post-Incident Review |
| RCA | Root Cause Analysis |
| PDPA | Personal Data Protection Act 2010 |
| DPO | Data Protection Officer |
| MIS | Management Information Systems |

---

## 5. Incident Classification Matrix

*Define the classification tiers used to assess incident severity. Ensure criteria are measurable and unambiguous to enable consistent classification decisions under time pressure.*

### 5.1 Classification Overview

All incidents must be classified within **[30] minutes** of initial detection using the criteria in the matrix below. Classification determines the escalation path, reporting obligations, and resource mobilization required.

### 5.2 Severity Classification Matrix

| Severity Level | Label | Customer Impact | System Impact | Financial Impact | Regulatory / Reputational Impact |
|---|---|---|---|---|---|
| **P1 — Critical** | Material Incident | Widespread customer-facing service unavailability (>X% of customer base or >X hours) | Complete outage of one or more critical systems | Potential loss or exposure exceeding RM [Threshold] | Likely to attract regulatory scrutiny; media exposure probable |
| **P2 — High** | Significant Incident | Degraded service affecting a significant subset of customers | Partial outage or severe performance degradation of a critical system | Financial impact between RM [Threshold] and RM [Threshold] | Potential for regulatory reporting; escalation to senior management required |
| **P3 — Medium** | Moderate Incident | Limited customer impact; workarounds available | Non-critical system affected; critical systems operating normally | Financial impact below RM [Threshold] | Internal management attention required; no immediate regulatory obligation |
| **P4 — Low** | Minor Incident | No customer impact | Isolated or non-production system affected | Negligible or no financial impact | Handled through standard IT service management process |

### 5.3 Incident Type Classification

| Incident Type | Description | Default Severity |
|---|---|---|
| Ransomware / Destructive Malware | Encryption or destruction of production data or systems | P1 — Critical |
| Unauthorized Access to Customer Data | Confirmed breach or exfiltration of customer PII or financial data | P1 — Critical |
| Core Banking System Outage | Full unavailability of core banking platform | P1 — Critical |
| DDoS Attack (Service Impact) | DDoS resulting in customer-facing service unavailability | P1 — Critical |
| Payment System Failure | Interbank or retail payment system unavailability | P1 / P2 (by duration) |
| Internet / Mobile Banking Outage | Channel unavailability exceeding [X] minutes | P1 / P2 (by duration) |
| Insider Threat — Confirmed Data Access | Confirmed unauthorized access by internal personnel | P1 — Critical |
| Third-Party Critical Vendor Outage | Outsourced service failure with significant operational impact | P2 — High |
| Data Integrity Issue | Corruption of production data with customer impact | P1 / P2 (by scope) |

### 5.4 Classification Escalation

*If an incident initially classified as P2 or lower subsequently meets P1 criteria due to evolving impact, it must be immediately reclassified and the BNM notification clock starts from the point of reclassification.*

- Incident Commanders have the authority to **upgrade** classification at any time.
- Downgrading from P1 — Critical requires approval from [Designated Authority, e.g., CISO and CRO].
- All reclassification decisions must be timestamped and documented in the incident log.

---

## 6. Notification Trigger Criteria

*Define the specific conditions that must be met for an incident to be declared "material" and subject to mandatory BNM reporting under RMiT 11.4. These criteria must be reviewed against BNM guidance regularly.*

### 6.1 Mandatory BNM Notification Triggers

An incident **must** be reported to BNM if **any one** of the following criteria is met:

| # | Trigger Criterion | Threshold / Condition |
|---|---|---|
| 1 | **Customer service unavailability** | Customer-facing services (internet banking, mobile banking, ATM, payment systems) are unavailable for more than **[X hours]** |
| 2 | **Customer data breach or unauthorized disclosure** | Confirmed or reasonably suspected unauthorized access to, or exfiltration of, personal data or financial data of **[X or more]** customers |
| 3 | **Significant financial loss** | Actual or potential financial loss to the Organization or its customers exceeding **RM [Threshold]** |
| 4 | **Core system compromise** | Confirmed compromise, unauthorized modification, or destruction of any critical production system, including core banking, payment systems, or MIS |
| 5 | **Malicious cyber activity** | Detection of a confirmed targeted cyberattack (e.g., ransomware, APT intrusion, destructive attack) regardless of whether full containment has been achieved |
| 6 | **Critical third-party/outsourcing failure** | A critical outsourced service provider suffers an incident that causes the above thresholds to be met |
| 7 | **Fraud facilitated by technology compromise** | Technology-enabled fraud event with financial impact exceeding **RM [Threshold]** |
| 8 | **Regulatory or legal obligation** | An incident that triggers a reporting obligation under PDPA 2010 or another applicable law or regulation |
| 9 | **BNM-designated critical system** | Any incident affecting a system designated as critical infrastructure by BNM, regardless of impact thresholds |
| 10 | **Reputational / media escalation** | An incident that has or is likely to receive significant media coverage or public attention |

### 6.2 Ambiguous Situations

Where it is unclear whether an incident meets the notification trigger criteria, the **default position is to report**. The Head of Regulatory Affairs, in consultation with the CISO and CRO, has the authority to make a final determination. This determination must be documented with supporting rationale.

### 6.3 Pre-emptive Notification

The Organization may choose to notify BNM **before** all trigger thresholds are formally confirmed if:

- The incident is rapidly evolving and thresholds are likely to be met.
- Early BNM engagement would facilitate a more coordinated response.
- Industry-wide impact is suspected (e.g., sector-wide cyberattack).

---

## 7. Step-by-Step Process Flow

*Detail every procedural step from initial detection through to final report submission and closure. Each step should specify who is responsible and the maximum elapsed time permitted.*

### 7.1 Process Overview

```
[Detection / Alert]
        │
        ▼
[Initial Assessment & Triage]  ← T+0 to T+30 min
        │
        ▼
[Incident Classification]      ← T+30 min
        │
   P1 — Critical?
   YES ──────────► [Declare Material Incident]  ← T+45 min
        │                  │
        │                  ▼
        │          [Activate Incident Response Team]
        │                  │
        │                  ▼
        │          [Prepare Preliminary BNM Report] ← T+3 hr
        │                  │
        │                  ▼
        │          [Submit Preliminary Report to BNM] ← T+4 hr (DEADLINE)
        │                  │
        │                  ▼
        │          [Ongoing Response & Updates to BNM]
        │                  │
        │                  ▼
        │          [Incident Resolution & Containment]
        │                  │
        │                  ▼
        │          [Post-Incident Review (PIR)]
        │                  │
        │                  ▼
        │          [Submit Final Post-Incident Report to BNM]
        │
   NO ──────────► [Standard Incident Management Process]
```

### 7.2 Detailed Process Steps

#### Step 1 — Detection and Initial Alert (T+0)

| Field | Detail |
|---|---|
| **Trigger** | Automated monitoring alert, SOC detection, employee report, customer complaint, third-party notification |
| **Responsible Party** | IT Operations / Security Operations Centre (SOC) |
| **Action** | Log the event in the incident management system ([System Name]) with a unique Incident ID. Capture: date/time, detection source, initial description, affected systems, and detecting personnel. |
| **Output** | Incident record created in [Incident Management System] |

#### Step 2 — Initial Assessment and Triage (T+0 to T+30 minutes)

| Field | Detail |
|---|---|
| **Responsible Party** | Incident Manager (on-call) / SOC Analyst |
| **Action** | Perform rapid triage to assess: (a) affected systems and services; (b) estimated customer impact; (c) potential financial exposure; (d) indicators of malicious activity. Assign initial severity based on Section 5 criteria. |
| **Output** | Initial severity classification recorded; relevant on-call team notified |
| **Escalation** | If P1 classification is likely, immediately notify the CISO and Head of Regulatory Affairs (do not wait for formal Step 3 classification) |

#### Step 3 — Formal Incident Classification (T+30 minutes)

| Field | Detail |
|---|---|
| **Responsible Party** | Incident Commander (CISO or designate) |
| **Action** | Formally classify the incident using the matrix in Section 5. Determine whether the incident meets any BNM notification trigger criteria from Section 6. Document the classification decision with supporting rationale. |
| **Output** | Formal classification recorded; BNM notification decision made |

#### Step 4 — Declaration of Material Incident (T+45 minutes, if P1)

| Field | Detail |
|---|---|
| **Responsible Party** | CISO, in consultation with Head of Regulatory Affairs and CRO |
| **Action** | Formally declare a Material Incident. Activate the Incident Response Team (IRT). Notify the CEO and Board Risk Committee Chair. Start the BNM four-hour notification clock from this declaration. |
| **Output** | Material Incident declared; IRT activated; clock started |

#### Step 5 — Activate Incident Response Team (T+45 minutes to T+1 hour)

| Field | Detail |
|---|---|
| **Responsible Party** | Incident Commander |
| **Action** | Convene the IRT via [Conference Bridge / War Room details]. Assign roles: (a) Technical Lead — containment and investigation; (b) Communications Lead — internal and external communications; (c) Regulatory Affairs Lead — BNM notification preparation; (d) Business Continuity Lead — service recovery. |
| **Output** | IRT convened; roles assigned; incident bridge established |

#### Step 6 — Containment Actions (T+1 hour onwards, concurrent)

| Field | Detail |
|---|---|
| **Responsible Party** | Technical Lead / IT Operations / SOC |
| **Action** | Implement immediate containment measures to prevent further spread or data loss. Preserve forensic evidence (do not wipe or restart affected systems without authorization). Document all technical actions taken with timestamps. |
| **Output** | Containment actions documented; forensic preservation confirmed |

#### Step 7 — Prepare Preliminary BNM Report (T+1 hour to T+3 hours)

| Field | Detail |
|---|---|
| **Responsible Party** | Head of Regulatory Affairs, supported by CISO and Technical Lead |
| **Action** | Prepare the Preliminary Incident Report using **Template A** (Appendix A). Populate all available information. Clearly note where information is preliminary and subject to revision. Obtain sign-off from CEO or designated authority. |
| **Output** | Signed Preliminary BNM Report ready for submission |

#### Step 8 — Submit Preliminary Report to BNM (T+4 hours — DEADLINE)

| Field | Detail |
|---|---|
| **Responsible Party** | Head of Regulatory Affairs |
| **Action** | Submit the Preliminary Report to BNM via [BNM designated submission channel / portal / email]. Retain confirmation of receipt (delivery receipt, portal acknowledgment, or BNM response). Log submission time in the incident record. |
| **Output** | BNM notification submitted; receipt confirmed and documented |
| **CRITICAL** | If submission will be delayed beyond four hours due to exceptional circumstances, the Head of Regulatory Affairs must **immediately contact BNM** to advise and agree on a revised timeline. |

#### Step 9 — Ongoing Updates to BNM (Post T+4 hours)

| Field | Detail |
|---|---|
| **Responsible Party** | Head of Regulatory Affairs |
| **Action** | Provide BNM with progress updates at intervals specified by BNM or, if not specified, at every **[X hours]** until the incident is fully resolved. Use **Template B** (Appendix B) for progress updates. |
| **Output** | Progress update reports submitted; all communications logged |

#### Step 10 — Incident Resolution and Recovery (Timeline: per BCP/RTO)

| Field | Detail |
|---|---|
| **Responsible Party** | Technical Lead / Business Continuity Lead |
| **Action** | Restore affected systems and services in accordance with recovery procedures. Validate data integrity. Confirm service restoration with business owners. Declare incident contained and services restored. |
| **Output** | Services restored; resolution confirmed; incident status updated |

#### Step 11 — Incident Closure and Documentation (T+24 hours post-resolution)

| Field | Detail |
|---|---|
| **Responsible Party** | Incident Commander / Head of Regulatory Affairs |
| **Action** | Close the incident in [Incident Management System]. Compile complete incident documentation including: timeline, all actions taken, all communications, and evidence logs. Retain records per the Organization's record retention policy. |
| **Output** | Incident formally closed; records archived |

#### Step 12 — Post-Incident Review (see Section 11)

*Refer to Section 11 for the full Post-Incident Review process, including timelines for submission of the Final Post-Incident Report to BNM.*

---

## 8. Escalation Timelines

*Define all time-bound obligations clearly. These timelines are non-negotiable for material incidents and must be monitored by the Head of Regulatory Affairs throughout the incident lifecycle.*

### 8.1 Internal Escalation Timeline

| Elapsed Time from Declaration | Action Required | Responsible Party |
|---|---|---|
| T+0 | Material Incident declared; BNM notification clock starts | CISO |
| T+15 minutes | CEO notified | Head of Regulatory Affairs |
| T+15 minutes | Board Risk Committee Chair notified | Head of Regulatory Affairs |
| T+30 minutes | Incident Response Team convened | Incident Commander |
| T+30 minutes | Head of Compliance notified | Head of Regulatory Affairs |
| T+1 hour | Legal counsel notified (if data breach suspected) | Head of Regulatory Affairs |
| T+1 hour | DPO notified (if personal data involved) | Head of Regulatory Affairs |
| T+3 hours | Preliminary BNM Report draft completed and signed | Head of Regulatory Affairs |
| **T+4 hours** | **PRELIMINARY REPORT SUBMITTED TO BNM — HARD DEADLINE** | **Head of Regulatory Affairs** |
| T+6 hours | First internal management status update circulated | Incident Commander |
| T+12 hours | Board briefing (verbal or written, as appropriate) | CEO / Head of Regulatory Affairs |
| Every [X] hours | BNM progress update submitted (until resolution) | Head of Regulatory Affairs |

### 8.2 Post-Resolution Timeline

| Elapsed Time from Resolution | Action Required | Responsible Party |
|---|---|---|
| T+24 hours | Incident formally closed; documentation compiled | Incident Commander |
| T+5 business days | Post-Incident Review (PIR) convened | Head of Technology Risk |
| T+10 business days | PIR report drafted | Head of Technology Risk |
| T+15 business days | PIR report approved | CISO / CRO |
| T+[X] days (BNM specified) | Final Post-Incident Report submitted to BNM | Head of Regulatory Affairs |

### 8.3 Notification Escalation Matrix

*If the primary contact is unavailable, escalate to the designated backup immediately. Do not allow unavailability of a single individual to delay a required notification.*

| Role | Primary Contact | Backup Contact | After-Hours Contact |
|---|---|---|---|
| Head of Regulatory Affairs | [Name] | [Name] | [Mobile / Pager] |
| CISO | [Name] | [Name] | [Mobile / Pager] |
| CRO | [Name] | [Name] | [Mobile / Pager] |
| CTO | [Name] | [Name] | [Mobile / Pager] |
| CEO | [Name] | [Name] | [Mobile / Pager] |
| BNM Supervisory Contact | [BNM Contact Name] | [BNM Alternate] | [BNM Emergency Line] |
| Legal Counsel | [Name / Firm] | [Name] | [Mobile] |
| DPO | [Name] | [Name] | [Mobile] |

---

## 9. Roles and Responsibilities (RACI)

*Ensure all roles are mapped to named positions (not individuals) for organizational resilience. Review this table whenever there are structural changes to the organization.*

### 9.1 RACI Key

| Code | Meaning |
|---|---|
| **R** | Responsible — performs the task |
| **A** | Accountable — owns the outcome; single point of accountability |
| **C** | Consulted — provides input; two-way communication |
| **I** | Informed — receives updates; one-way communication |

### 9.2 RACI Matrix — BNM Incident Reporting

| Activity | CISO | Head of Reg. Affairs | CRO | CTO | CEO | IT Operations / SOC | Legal Counsel | DPO | Board |
|---|---|---|---|---|---|---|---|---|---|
| Detect and log incident | I | I | I | I | — | **R/A** | — | — | — |
| Perform initial triage | C | I | I | **R** | — | **R** | — | — | — |
| Classify incident severity | **A** | C | C | **R** | — | C | — | — | — |
| Declare material incident | **A** | **R** | C | C | I | — | — | — | — |
| Notify CEO and Board | **R** | **A** | C | I | I | — | — | — | **I** |
| Activate Incident Response Team | **A** | **R** | I | **R** | I | **R** | — | — | — |
| Implement containment | C | I | I | **A** | I | **R** | — | — | — |
| Prepare preliminary BNM report | C | **A/R** | C | C | C | C | — | — | — |
| Approve preliminary BNM report | C | **R** | C | C | **A** | — | C | — | — |
| Submit report to BNM | — | **A/R** | I | — | I | — | — | — | — |
| Manage BNM communications | — | **A/R** | I | I | I | — | C | — | — |
| Notify DPO (data breach) | **R** | **A** | I | I | — | — | C | **I** | — |
| Coordinate media/public communications | C | **R** | I | I | **A** | — | C | — | — |
| Oversee recovery activities | C | I | I | **A** | I | **R** | — | — | — |
| Conduct post-incident review | **A** | C | C | **R** | I | **R** | — | — | — |
| Submit final report to BNM | C | **A/R** | C | C | I | — | — | — | — |
| Board debrief | **R** | **R** | **R** | **R** | **A** | — | — | — | **I** |
| Remediation tracking and closure | C | C | **A** | **R** | I | **R** | — | — | — |

### 9.3 Role Descriptions

**CISO (Chief Information Security Officer)**
- Ultimate accountability for the technical response to all cybersecurity-related material incidents.
- Authority to declare material incidents and activate the Incident Response Team.
- Provides technical briefings to the CEO, Board, and BNM as required.

**Head of Regulatory Affairs**
- Sole point of accountability for all regulatory communications, including BNM notifications.
- Responsible for ensuring the four-hour preliminary report deadline is met without exception.
- Manages the ongoing regulatory relationship throughout the incident lifecycle.

**Chief Risk Officer (CRO)**
- Provides independent risk oversight during the incident response.
- Approves final post-incident reports before submission to BNM.
- Escalates to the Board Risk Committee as required.

**Chief Technology Officer (CTO)**
- Accountable for all technical recovery and restoration activities.
- Provides technical input to incident reports.
- Engages critical technology vendors and outsourcing partners.

**Chief Executive Officer (CEO)**
- Final approver for submission of Preliminary Report to BNM.
- Chairs Board-level briefings during major incidents.
- Makes decisions regarding public communications and media engagement.

**IT Operations / Security Operations Centre**
- First line of detection and initial response.
- Implements technical containment and recovery actions.
- Provides real-time technical updates to the Incident Commander.

**Legal Counsel**
- Advises on legal obligations triggered by the incident (PDPA, contractual, litigation risk).
- Reviews communications for legal risk prior to external distribution.

**Data Protection Officer (DPO)**
- Engaged for all incidents involving personal data.
- Assesses PDPA notification obligations.
- Manages personal data breach response in parallel with this procedure.

---

## 10. Communication Templates

*The following templates must be used for all regulatory communications with BNM. Do not deviate from the required structure without prior approval from the Head of Regulatory Affairs. Templates should be populated with accurate, factual information only — avoid speculation.*

### 10.1 Template A — Preliminary Incident Report (Four-Hour Report)

---

**PRELIMINARY INCIDENT REPORT — MATERIAL TECHNOLOGY INCIDENT**
**CONFIDENTIAL — FOR REGULATORY USE**

**To:** Bank Negara Malaysia
**Attention:** [BNM Supervisory Contact Name], [BNM Department]
**From:** [Organization Name]
**Submitted By:** [Head of Regulatory Affairs Name], Head of Regulatory Affairs
**Date and Time of Submission:** [DD/MM/YYYY] [HH:MM] (Malaysia Standard Time)

---

**1. Incident Reference Number:** [Organization Incident ID]

**2. Incident Classification:** Material Technology Incident — P1 Critical

**3. Date and Time of Incident Occurrence:** [DD/MM/YYYY] [HH:MM] (MST)
*(If exact time is not yet confirmed, state the earliest estimated time and note that it is under investigation)*

**4. Date and Time Organization Became Aware:** [DD/MM/YYYY] [HH:MM] (MST)

**5. Nature and Description of Incident:**
*[Provide a factual, concise description of what has occurred. Include: the type of incident, affected systems, and the nature of the impact. Do not speculate on root cause at this stage.]*

[Incident Description Placeholder]

**6. Systems and Services Affected:**

| System / Service | Status | Estimated % of Customers Affected |
|---|---|---|
| [System Name] | [Unavailable / Degraded / Unknown] | [%] |

**7. Customer and Operational Impact:**
*[Describe the impact on customers, including services unavailable, estimated number of customers affected, and any financial impact to customers or the Organization.]*

[Impact Description Placeholder]

**8. Immediate Containment Actions Taken:**

- [Action 1 — timestamp]
- [Action 2 — timestamp]
- [Action 3 — timestamp]

**9. Current Status of Investigation:**
*[Note: This is a preliminary report. Investigation is ongoing.]*

[Investigation Status Placeholder]

**10. Preliminary Root Cause (if known):**

[Preliminary Root Cause Placeholder — or state "Under investigation"]

**11. Estimated Time to Resolution:**

[Estimated Resolution Time — or state "To be advised"]

**12. Next Update to BNM:**
The Organization will provide a progress update by **[DD/MM/YYYY] [HH:MM] (MST)**.

**13. Primary Contact for BNM Enquiries:**

| Field | Details |
|---|---|
| Name | [Contact Name] |
| Title | Head of Regulatory Affairs |
| Phone | [Phone Number] |
| Email | [Email Address] |

**Authorized by:**

Name: ________________________________
Title: Chief Executive Officer
Date: ________________________________

---

### 10.2 Template B — Progress Update Report

---

**INCIDENT PROGRESS UPDATE — MATERIAL TECHNOLOGY INCIDENT**
**CONFIDENTIAL — FOR REGULATORY USE**

**To:** Bank Negara Malaysia
**From:** [Organization Name]
**Organization Incident ID:** [Incident ID]
**Update Number:** [#]
**Date and Time of This Update:** [DD/MM/YYYY] [HH:MM] (MST)

---

**1. Current Incident Status:** [ ] Ongoing  [ ] Partially Resolved  [ ] Resolved

**2. Summary of Developments Since Last Update:**

[Summary of Developments Placeholder]

**3. Actions Completed Since Last Update:**

- [Action — timestamp]
- [Action — timestamp]

**4. Actions Currently in Progress:**

- [Action — ETA]
- [Action — ETA]

**5. Revised Impact Assessment:**

[Revised Impact Placeholder — update customer numbers, financial impact, affected systems]

**6. Revised Root Cause Assessment:**

[Updated Root Cause Placeholder]

**7. Estimated Time to Full Resolution:**

[Revised ETA Placeholder]

**8. Next Update to BNM:**
**[DD/MM/YYYY] [HH:MM] (MST)** — or upon resolution, whichever is earlier.

---

### 10.3 Template C — Final Post-Incident Report

---

**FINAL POST-INCIDENT REPORT — MATERIAL TECHNOLOGY INCIDENT**
**CONFIDENTIAL — FOR REGULATORY USE**

**To:** Bank Negara Malaysia
**From:** [Organization Name]
**Organization Incident ID:** [Incident ID]
**Date of Incident Resolution:** [DD/MM/YYYY] [HH:MM] (MST)
**Date of This Report:** [DD/MM/YYYY]

---

**1. Executive Summary:** [Concise summary of the incident, total impact, and outcome]

**2. Incident Timeline:** [Comprehensive timeline from detection to resolution]

| Date/Time | Event | Action Taken | Responsible Party |
|---|---|---|---|
| [DD/MM/YYYY HH:MM] | [Event] | [Action] | [Role] |

**3. Root Cause Analysis:** [Confirmed root cause with supporting evidence]

**4. Full Impact Assessment:**

| Category | Detail |
|---|---|
| Customers Affected | [Number] |
| Services Affected | [List] |
| Duration of Disruption | [Hours/Minutes] |
| Financial Impact (Organization) | [RM Amount] |
| Financial Impact (Customers) | [RM Amount / Under Assessment] |
| Data Compromised | [Yes / No — if Yes, describe] |

**5. Containment and Recovery Actions:** [Full chronological list of all actions taken]

**6. Remediation Plan:**

| Remediation Action | Owner | Target Completion Date | Status |
|---|---|---|---|
| [Action] | [Role] | [Date] | [Open / In Progress / Completed] |

**7. Control Improvements:** [Changes to be made to prevent recurrence]

**8. Lessons Learned:** [Key lessons from the incident for organizational learning]

**9. Regulatory and Legal Notifications Made:**

| Authority / Party | Notification Date/Time | Method | Reference |
|---|---|---|---|
| Bank Negara Malaysia (Preliminary) | [Date/Time] | [Email/Portal] | [Reference] |
| [Other Authority] | [Date/Time] | [Method] | [Reference] |

**Authorized by:**

Name: ________________________________
Title: Chief Executive Officer
Date: ________________________________

Name: ________________________________
Title: Chief Risk Officer
Date: ________________________________

---

### 10.4 Template D — Internal Incident Notification (Senior Management)

*Use this template for internal notifications to the CEO, Board Risk Committee Chair, and other senior stakeholders at the time of Material Incident declaration.*

---

**INTERNAL NOTIFICATION — MATERIAL TECHNOLOGY INCIDENT DECLARED**

**To:** [CEO Name], CEO; [Board Risk Chair Name], Board Risk Committee Chair
**From:** [CISO Name], CISO
**Date/Time:** [DD/MM/YYYY HH:MM]
**Incident ID:** [ID]
**Classification:** P1 — Material Incident

A material technology incident has been declared. BNM notification is required within four hours.

**Summary:** [Two to three sentences describing the incident]
**Current Impact:** [Brief impact summary]
**Immediate Actions Taken:** [One to two sentences]
**BNM Notification Deadline:** [DD/MM/YYYY HH:MM]
**Incident Commander:** [Name]
**Next Update:** [Time]

*This notification will be followed by a full briefing at [time/location/bridge details].*

---

## 11. Post-Incident Review Process

*The Post-Incident Review (PIR) is a mandatory step for all material incidents. It must be conducted in a blameless, fact-finding manner. The outputs feed directly into the Final Post-Incident Report to BNM and into the Organization's risk register.*

### 11.1 PIR Objectives

The PIR aims to:

1. Establish a complete and accurate timeline of the incident.
2. Identify the confirmed root cause(s) and contributing factors.
3. Assess the effectiveness of the incident response procedure.
4. Identify control gaps, process failures, and areas for improvement.
5. Produce a remediation plan with named owners and target dates.
6. Generate input for the Final Post-Incident Report to BNM.

### 11.2 PIR Trigger and Timeline

| Condition | PIR Timeline |
|---|---|
| All P1 — Material Incidents | PIR must be convened within **5 business days** of incident resolution |
| P2 — High Severity Incidents | PIR must be convened within **10 business days** of resolution |
| P3 — Medium Severity Incidents | Simplified PIR / lessons-learned review within **[X] business days** |
| P4 — Low Severity Incidents | No formal PIR required; captured in monthly IT operations review |

### 11.3 PIR Participants

| Role | Required Attendance |
|---|---|
| Head of Technology Risk (PIR Facilitator) | Mandatory |
| CISO | Mandatory |
| Incident Commander | Mandatory |
| Technical Lead | Mandatory |
| Head of Regulatory Affairs | Mandatory (for all material incidents) |
| CRO | Mandatory (for all material incidents) |
| Business Continuity Lead | Mandatory |
| Affected Business Unit Head(s) | Mandatory |
| Third-Party Representative | As required (if third party was involved) |
| Internal Audit | Observer (for all material incidents) |

### 11.4 PIR Process

**Phase 1 — Preparation (pre-PIR)**

- Incident Commander compiles complete incident documentation.
- Technical Lead prepares timeline reconstruction and technical analysis.
- All participants review documentation prior to the PIR session.

**Phase 2 — PIR Session**

- Facilitator opens with a reminder of the blameless, fact-finding purpose.
- Walk through the incident timeline in chronological order.
- For each key event: What happened? Why did it happen? Was detection timely? Was the response effective?
- Identify root causes using an appropriate methodology (e.g., Five Whys, fishbone analysis).
- Identify control gaps and process failures.
- Agree on remediation actions, owners, and target completion dates.

**Phase 3 — PIR Report**

The PIR Report must include:

- [ ] Incident summary and timeline
- [ ] Confirmed root cause analysis
- [ ] Full impact assessment (customers, financial, operational, reputational)
- [ ] Assessment of response effectiveness against this procedure
- [ ] List of control weaknesses identified
- [ ] Remediation action plan (see template below)
- [ ] Lessons learned
- [ ] Recommendation for procedure updates

### 11.5 Remediation Tracking

All remediation actions from PIRs must be tracked in [Organization's Risk Register / Remediation Tracking System]:

| Action ID | Remediation Action | Root Cause Addressed | Owner | Priority | Target Date | Status | Evidence of Completion |
|---|---|---|---|---|---|---|---|
| [REM-001] | [Description] | [Root Cause Ref] | [Name/Role] | [High/Med/Low] | [DD/MM/YYYY] | [Open] | [To be provided] |

### 11.6 Quarterly Trend Review

In addition to per-event PIRs, the Head of Technology Risk must conduct a **quarterly trend review** of all incidents (including non-material incidents) to identify systemic issues, recurring failure patterns, and emerging risks. The quarterly trend review output must be presented to the **Technology Risk Committee** and included in the **Board Risk Committee's quarterly reporting pack**.

Quarterly trend metrics must include at minimum:

- Total incident count by classification tier.
- Mean time to detect (MTTD) and mean time to resolve (MTTR).
- Number of incidents meeting BNM notification thresholds.
- Status of outstanding PIR remediation actions.
- Trends in incident type and affected systems.
- Comparison to prior quarter and year-to-date.

---

## 12. Review and Approval

### 12.1 Document Review Schedule

This procedure must be reviewed:

- **Per-event:** Following every material incident, to assess whether procedural updates are required.
- **Quarterly:** As part of the quarterly trend review by the Head of Technology Risk.
- **Annually:** Full scheduled review by the Head of Regulatory Affairs.
- **Triggered:** Immediately upon issuance of new or revised BNM guidance affecting incident reporting obligations.

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial release |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Regulatory Affairs (Owner) | [Name] | _________________ | [Date] |
| Chief Information Security Officer | [Name] | _________________ | [Date] |
| Chief Risk Officer | [Name] | _________________ | [Date] |
| Chief Executive Officer | [Name] | _________________ | [Date] |
| Board Risk Committee (Noted) | [Chair Name] | _________________ | [Date] |

---

## 13. References

*This section lists all regulatory instruments, internal policies, and standards that this procedure is designed to fulfil or align with.*

| # | Reference | Issuing Authority | Version / Date | Relevant Section |
|---|---|---|---|---|
| 1 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | [Version/Date] | Paragraph 11.4 — Incident Reporting |
| 2 | Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Version/Date] | [Relevant Paragraphs] |
| 3 | Business Continuity Management (BCM) Policy Document | Bank Negara Malaysia | [Version/Date] | [Relevant Paragraphs] |
| 4 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010 (as amended) | Part VI — Security |
| 5 | [Organization Name] Technology Risk Policy | [Organization Name] | [Version] | All |
| 6 | [Organization Name] Incident Management Policy | [Organization Name] | [Version] | All |
| 7 | [Organization Name] Business Continuity Plan | [Organization Name] | [Version] | All |
| 8 | [Organization Name] Data Breach Response Procedure | [Organization Name] | [Version] | All |
| 9 | [Organization Name] Crisis Communications Plan | [Organization Name] | [Version] | All |
| 10 | ISO/IEC 27035 — Information Security Incident Management | ISO/IEC | 2023 | All |
| 11 | NIST SP 800-61 — Computer Security Incident Handling Guide | NIST | Rev 2 | All |

---

## 14. Appendices

### Appendix A — BNM Notification Submission Details

*Populate this appendix with the current BNM submission channel details. Verify with BNM that these details are current before each use. Do not rely on outdated contact details.*

| Field | Details |
|---|---|
| BNM Submission Portal | [URL / Portal Name] |
| BNM Supervisory Email | [Email Address — obtain from BNM directly] |
| BNM Emergency Hotline | [Telephone Number] |
| BNM Primary Supervisor | [Name and Title] |
| BNM Secondary Contact | [Name and Title] |
| Submission Reference Required | [Yes / No — specify format if Yes] |

> **Important:** All communications with BNM must be copied to the Head of Regulatory Affairs and retained in [Document Management System] for audit purposes.

---

### Appendix B — Incident Response Team Contact List

*Maintain this list in the incident management system and review at least quarterly to ensure accuracy. This list must be accessible 24/7 to all Incident Response Team members.*

| Role | Name | Primary Phone | Secondary Phone | Email | Backup |
|---|---|---|---|---|---|
| Incident Commander (CISO) | [Name] | [Phone] | [Mobile] | [Email] | [Backup Name] |
| Head of Regulatory Affairs | [Name] | [Phone] | [Mobile] | [Email] | [Backup Name] |
| CRO | [Name] | [Phone] | [Mobile] | [Email] | [Backup Name] |
| CTO | [Name] | [Phone] | [Mobile] | [Email] | [Backup Name] |
| CEO | [Name] | [Phone] | [Mobile] | [Email] | [EA Name] |
| Legal Counsel | [Name / Firm] | [Phone] | [Mobile] | [Email] | [Backup Name] |
| DPO | [Name] | [Phone] | [Mobile] | [Email] | [Backup Name] |
| Head of Technology Risk | [Name] | [Phone] | [Mobile] | [Email] | [Backup Name] |
| IT Operations Lead | [Name] | [Phone] | [Mobile] | [Email] | [Backup Name] |
| SOC Manager | [Name] | [Phone] | [Mobile] | [Email] | [Backup Name] |
| Head of Corporate Communications | [Name] | [Phone] | [Mobile] | [Email] | [Backup Name] |

---

### Appendix C — Incident Log Template

*Use this log to maintain a chronological record of all actions, decisions, and communications during the incident. The log must be maintained in real time throughout the incident.*

| Log # | Date / Time (MST) | Entry Type | Description | Action Taken | Entered By |
|---|---|---|---|---|---|
| 001 | [DD/MM/YYYY HH:MM] | Detection | [Description of detection event] | Incident ticket raised; triage initiated | [Name] |
| 002 | [DD/MM/YYYY HH:MM] | Classification | P1 — Critical classified by [Name] | CISO and Head of Reg. Affairs notified | [Name] |
| 003 | [DD/MM/YYYY HH:MM] | Declaration | Material Incident declared | IRT activated; CEO notified; clock started | [Name] |
| 004 | [DD/MM/YYYY HH:MM] | Containment | [Description of containment action] | [Action taken] | [Name] |
| 005 | [DD/MM/YYYY HH:MM] | BNM Notification | Preliminary Report submitted to BNM | Receipt confirmed; reference [BNM Ref] | [Name] |
| 006 | [DD/MM/YYYY HH:MM] | [Entry Type] | [Description] | [Action] | [Name] |

---

### Appendix D — Incident Severity Decision Aid

*This decision aid is intended to assist on-call staff in making rapid classification decisions under pressure. When in doubt, escalate — do not under-classify.*

```
START HERE: Has an IT event or alert been detected?
│
YES
│
▼
Does it affect a customer-facing service?
│
├── YES ──► Is the service fully unavailable?
│               │
│               ├── YES ──► Duration > [X] minutes? ──► YES ──► P1 — MATERIAL
│               │                                    └── NO  ──► P2 — escalate to Incident Manager
│               └── NO  ──► Degraded? For how long? ──► Assess against Section 5 matrix
│
└── NO ───► Does it affect a critical backend system or involve a security event?
                │
                ├── YES (Security Event) ──► Any indicators of data exfiltration or compromise?
                │                               │
                │                               ├── YES ──► P1 — MATERIAL (notify CISO immediately)
                │                               └── NO  ──► P2 — escalate; monitor for escalation
                │
                └── NO  ──► P3 or P4 — handle via standard ITSM process
```

---

### Appendix E — Regulatory Examination Checklist

*Use this checklist when preparing for a BNM regulatory examination or when responding to BNM inquiries regarding incident management.*

| # | Requirement | Evidence Required | Location | Status |
|---|---|---|---|---|
| 1 | Documented incident reporting procedure aligned with RMiT 11.4 | This document | [Document Management System] | [ ] |
| 2 | Evidence of four-hour reporting compliance for all material incidents | Incident logs; BNM submission receipts | [Archive Location] | [ ] |
| 3 | Completed PIRs for all material incidents | PIR reports | [Archive Location] | [ ] |
| 4 | Remediation tracking for PIR action items | Risk register / remediation log | [System Name] | [ ] |
| 5 | Staff training records for incident response roles | Training records | [HR System] | [ ] |
| 6 | Quarterly trend review reports | Board / committee minutes and reports | [Archive Location] | [ ] |
| 7 | Board-level oversight evidence | Board Risk Committee minutes | [Archive Location] | [ ] |
| 8 | BNM communications archive (all reports submitted) | Archived reports and receipts | [Archive Location] | [ ] |
| 9 | Annual procedure review evidence | Version history; approval sign-off records | [Archive Location] | [ ] |
| 10 | Incident classification records for all P1 incidents | Incident management system export | [System Name] | [ ] |

---

*End of Document*

---

**[Organization Name] | BNM Incident Reporting Procedure | Version 1.0 | Confidential**
*This document is subject to review following any material incident and at least annually. For queries regarding this procedure, contact the Head of Regulatory Affairs at [email address].*