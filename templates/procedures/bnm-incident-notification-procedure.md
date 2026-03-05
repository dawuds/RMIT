# BNM Incident Notification Procedure

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

> **Regulatory Reference:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document — Clause 16.1
>
> **Mandatory Status:** Yes — This procedure is a mandatory regulatory obligation. Non-compliance may result in regulatory sanctions under the Financial Services Act 2013 (FSA) or Islamic Financial Services Act 2013 (IFSA).

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Incident Classification Matrix](#5-incident-classification-matrix)
6. [Notification Trigger Criteria](#6-notification-trigger-criteria)
7. [Step-by-Step Process Flow](#7-step-by-step-process-flow)
8. [Escalation Timelines](#8-escalation-timelines)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Communication Templates](#10-communication-templates)
11. [Post-Incident Review Process](#11-post-incident-review-process)
12. [Record-Keeping and Evidence Management](#12-record-keeping-and-evidence-management)
13. [Testing and Drill Requirements](#13-testing-and-drill-requirements)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe the purpose of this procedure, including the regulatory obligation it fulfills and the outcome it is designed to achieve.*

This procedure establishes the formal process by which [Organization Name] (hereinafter "the Organization") identifies, assesses, escalates, and notifies Bank Negara Malaysia (BNM) of material technology-related incidents in accordance with the requirements set out in Clause 16.1 of the BNM Risk Management in Technology (RMiT) Policy Document.

The primary objectives of this procedure are to:

- Ensure BNM receives timely notification of material incidents within the **four (4) hour** mandatory reporting window from the point of incident detection or declaration;
- Establish a clear chain of command and communication protocol to minimize response time and regulatory risk;
- Maintain consistent, accurate, and audit-ready records of all notifications made to BNM;
- Define the criteria by which an incident is classified as "material" and therefore subject to mandatory regulatory notification;
- Support the Organization's broader Technology Risk Management and Business Continuity frameworks.

---

## 2. Scope and Applicability

*Define the boundaries of this procedure — which systems, business units, incident types, and personnel are covered. Explicitly state any exclusions.*

### 2.1 In-Scope

This procedure applies to:

- **Systems and Infrastructure:** All technology systems, platforms, applications, and infrastructure components that support the Organization's licensed financial services activities, including but not limited to:
  - Core banking and payment processing systems
  - Internet and mobile banking platforms
  - Data centers and cloud environments (including third-party hosted systems)
  - Critical API integrations and third-party service dependencies
  - Cybersecurity controls and monitoring systems

- **Business Units:** All business divisions, support functions, and subsidiaries of [Organization Name] that operate under the relevant BNM license(s).

- **Third-Party Service Providers:** Outsourced service providers and technology vendors whose systems or services are integral to the delivery of licensed financial services, where a failure or breach in those services would constitute a material incident.

- **Personnel:** All employees, contractors, consultants, and third-party personnel involved in technology operations, cybersecurity, compliance, and regulatory affairs.

### 2.2 Out of Scope

This procedure does **not** apply to:

- Minor incidents that do not meet the materiality thresholds defined in Section 5 of this document;
- Incidents affecting non-financial services systems with no regulatory impact;
- Planned system maintenance, scheduled downtime, or pre-approved change windows, unless they result in an unplanned material outage.

### 2.3 Regulatory Applicability

| License Type | Applicable |
|---|---|
| Licensed Bank (FSA 2013) | Yes |
| Licensed Islamic Bank (IFSA 2013) | Yes |
| Licensed Insurer / Takaful Operator | Yes |
| Development Financial Institution (DFIA 2002) | Yes |
| Payment System Operator / Issuer | Yes |
| [Other License Type] | [Yes / No] |

---

## 3. Regulatory Context

*Summarize the specific regulatory requirements this procedure fulfills. Reference the exact clauses and policy documents.*

### 3.1 Primary Regulatory Obligation

The BNM **Risk Management in Technology (RMiT)** Policy Document (BNM/RH/PD 028-119), Clause **16.1**, requires financial institutions to notify BNM of material incidents as follows:

> *[Insert verbatim or paraphrased text of RMiT Clause 16.1 as relevant to notification obligations. Reference the most current version of the RMiT Policy Document as published by BNM.]*

Key obligations under Clause 16.1 include:

- **Initial Notification:** BNM must be notified within **four (4) hours** of detecting or declaring a material technology incident;
- **Subsequent Updates:** Progress updates must be provided at regular intervals as specified by BNM or as determined by incident severity;
- **Post-Incident Report:** A formal post-incident report must be submitted to BNM within the timeframe stipulated in the RMiT Policy Document;
- **Regulatory Cooperation:** The Organization must cooperate fully with any BNM investigation or enquiry arising from the incident.

### 3.2 Related Regulatory Frameworks

| Framework | Relevant Provisions | Applicability |
|---|---|---|
| BNM RMiT Policy Document | Clause 16.1 (Incident Notification) | Primary |
| BNM Business Continuity Management (BCM) | [Relevant Clauses] | Supporting |
| Personal Data Protection Act 2010 (PDPA) | Section 30 (Breach Notification) | If personal data is involved |
| NACSA Cybersecurity Act 2018 | [Relevant Provisions] | Critical information infrastructure |
| FSA 2013 / IFSA 2013 | [Relevant Sections] | Licensing obligations |
| [Other Framework] | [Relevant Provisions] | [Applicability] |

### 3.3 Consequences of Non-Compliance

Failure to notify BNM within the prescribed timeframe or providing inaccurate information may result in:

- Regulatory sanctions, fines, or penalties under the FSA 2013 / IFSA 2013;
- Issuance of a direction or directive by BNM;
- Reputational damage and increased supervisory scrutiny;
- Personal liability for Senior Management and Board Directors.

---

## 4. Definitions and Terminology

*Define all key terms used in this procedure to ensure consistent understanding across all personnel.*

| Term | Definition |
|---|---|
| **Material Incident** | A technology-related incident that meets one or more of the materiality criteria defined in Section 5 of this procedure and therefore triggers the BNM mandatory notification obligation. |
| **Detection Time (T0)** | The time at which an incident is first detected, alerted, or reported, regardless of whether it has been formally declared a material incident. |
| **Declaration Time (T1)** | The time at which an authorized officer formally declares the incident as material, initiating the four-hour notification clock. |
| **Notification Deadline (T1 + 4H)** | The absolute deadline by which BNM must receive the initial notification, calculated as four hours from T1. |
| **Incident Response Team (IRT)** | The cross-functional team responsible for managing the technical response to a technology incident. |
| **Incident Notification Officer (INO)** | The designated individual responsible for drafting and submitting notifications to BNM. Typically the Head of Regulatory Affairs or delegate. |
| **Incident Commander** | The senior individual with overall accountability for managing the incident response and authorizing regulatory communications. |
| **RTO (Recovery Time Objective)** | The targeted duration within which a business process must be restored following a disruption. |
| **RPO (Recovery Point Objective)** | The maximum tolerable period in which data might be lost due to a major incident. |
| **BNM Supervisory Contact** | The designated BNM officer or department to which notifications must be directed. |
| **Post-Incident Report (PIR)** | The formal written report submitted to BNM following resolution of a material incident, documenting root cause, impact, remediation, and lessons learned. |
| **[Additional Term]** | [Definition] |

---

## 5. Incident Classification Matrix

*Define the classification tiers used to categorize technology incidents. Ensure that the criteria for "material" incidents align precisely with BNM RMiT definitions. Each tier should trigger different response and escalation actions.*

### 5.1 Classification Overview

All technology incidents detected within the Organization shall be classified into one of four severity tiers. Only incidents classified as **Tier 1 — Critical** or **Tier 2 — High** are subject to the BNM four-hour notification obligation as defined in Clause 16.1.

### 5.2 Incident Severity Tiers

| Tier | Severity | BNM Notification Required | Description |
|---|---|---|---|
| **Tier 1** | Critical | **Yes — within 4 hours** | Material incident with severe, widespread, or systemic impact. Core services unavailable or significantly degraded. Potential systemic risk to the financial system. |
| **Tier 2** | High | **Yes — within 4 hours** | Significant incident affecting critical systems or large customer populations. Material data breach or confirmed cyber intrusion. |
| **Tier 3** | Medium | No (internal escalation only) | Moderate impact, limited customer-facing disruption, manageable within normal operations. |
| **Tier 4** | Low | No (logged for trend review) | Minor issue, no customer impact, resolved within standard SLA. |

### 5.3 Materiality Criteria

*An incident shall be classified as Tier 1 or Tier 2 (material) if it meets one or more of the following criteria. Populate thresholds based on the Organization's risk appetite and BNM guidance.*

| Criterion | Tier 1 Threshold | Tier 2 Threshold |
|---|---|---|
| **Customer Impact — Volume** | More than [X,000] customers affected | [X00] to [X,000] customers affected |
| **Service Unavailability — Duration** | Core services unavailable for more than [X] hours | Critical services degraded for more than [X] hours |
| **Financial Impact — Estimated Loss** | Estimated financial loss exceeding RM [X] million | Estimated financial loss between RM [X] and RM [X] million |
| **Data Breach** | Confirmed breach of personal or sensitive financial data affecting [X+] records | Suspected or confirmed breach affecting [X] to [X] records |
| **Cyber Attack** | Confirmed ransomware, DDoS rendering services unavailable, or nation-state attributed attack | Confirmed intrusion, unauthorized access, or active malware in production systems |
| **Payment System Failure** | Failure of the Organization's participation in any national payment system (e.g., RPP, RENTAS, IBG) | Significant degradation of payment processing exceeding [X]% of daily transaction volume |
| **Regulatory Reporting System Failure** | Failure of systems used for statutory regulatory reporting to BNM | [Threshold] |
| **Third-Party Critical Dependency Failure** | Critical outsourced service failure with direct customer impact | Material third-party outage affecting business continuity |
| **[Additional Criterion]** | [Threshold] | [Threshold] |

### 5.4 Classification Authority

| Action | Authority |
|---|---|
| Initial classification (Tier 3/4) | IT Operations Manager / Security Operations Centre (SOC) Analyst |
| Tier 2 declaration | Chief Information Security Officer (CISO) or Head of IT Operations |
| Tier 1 declaration | Chief Technology Officer (CTO) or Chief Information Officer (CIO) — with immediate notification to CEO |
| Reclassification (upgrade/downgrade) | Incident Commander, with documented rationale |

---

## 6. Notification Trigger Criteria

*Define precisely what event or combination of events triggers the BNM notification obligation. Clarity here is critical to avoiding both under-reporting (regulatory risk) and over-reporting (credibility risk).*

### 6.1 Primary Notification Triggers

The four-hour BNM notification clock **starts immediately** upon the occurrence of any of the following trigger events:

1. **Formal Incident Declaration:** An authorized officer (see Section 5.4) formally declares an incident as Tier 1 — Critical or Tier 2 — High.

2. **Automatic Materiality Threshold Breach:** Monitoring systems or the SOC confirm that one or more materiality criteria in Section 5.3 have been met or exceeded, even if formal declaration is still in progress.

3. **Confirmed Cyber Intrusion:** The SOC or an authorized incident responder confirms unauthorized access to production systems, data exfiltration, or deployment of malicious code.

4. **Payment System Non-Participation:** The Organization is unable to participate in a national payment or settlement system for a period exceeding [X] minutes/hours.

5. **Regulatory Direction:** BNM or another regulatory authority directly instructs the Organization to treat an incident as material and notifiable.

### 6.2 Trigger Assessment Decision Tree

*Use the following decision tree to assess whether BNM notification is required:*

```
Incident Detected (T0)
        │
        ▼
Does the incident meet any Tier 1 or Tier 2 criterion? (Section 5.3)
        │
   YES ─┼─────────────────────────────────────────────────────►
        │                                                     │
        ▼                                                     ▼
Declare Material Incident (T1)                 NO — Classify as Tier 3/4
Notify Incident Commander                      Manage via internal process
Start 4-hour notification clock
        │
        ▼
Prepare BNM Initial Notification (Section 10.1)
        │
        ▼
Submit to BNM before T1 + 4 Hours
```

### 6.3 Ambiguous Cases

Where it is unclear whether an incident meets the materiality threshold, the following principles apply:

- **When in doubt, notify.** The cost of an unnecessary notification is substantially lower than the regulatory and reputational cost of a missed notification.
- The Head of Regulatory Affairs shall be consulted immediately for all borderline cases.
- The Incident Commander has final authority to make a materiality determination, with documented rationale.
- All ambiguous cases shall be logged in the Incident Register regardless of final classification.

---

## 7. Step-by-Step Process Flow

*This section provides the detailed, sequential steps that must be followed from incident detection through to BNM notification and beyond. Assign each step to a responsible role.*

### 7.1 Phase 1 — Detection and Initial Assessment (T0 to T0 + 30 Minutes)

| Step | Action | Responsible | Timeline |
|---|---|---|---|
| 1.1 | Incident detected via monitoring alert, user report, third-party notification, or SOC observation. | SOC Analyst / IT Operations | T0 |
| 1.2 | Log the incident in the Incident Management System with timestamp, initial description, and affected systems. | SOC Analyst | T0 + 5 min |
| 1.3 | Perform initial triage to assess scope, affected systems, and preliminary impact. | SOC Analyst / IT Operations Manager | T0 + 15 min |
| 1.4 | Determine if the incident meets any materiality criteria (Section 5.3). | IT Operations Manager / CISO | T0 + 20 min |
| 1.5 | If potentially material: immediately notify the CISO and Incident Commander. | IT Operations Manager | T0 + 25 min |
| 1.6 | Activate the Incident Response Team (IRT) if materiality is suspected or confirmed. | Incident Commander | T0 + 30 min |

### 7.2 Phase 2 — Incident Declaration (T0 + 30 Minutes to T1)

| Step | Action | Responsible | Timeline |
|---|---|---|---|
| 2.1 | Incident Commander convenes an emergency IRT call to review available information. | Incident Commander | ASAP after 1.6 |
| 2.2 | CISO and Incident Commander formally assess incident against materiality criteria. | CISO, Incident Commander | During IRT call |
| 2.3 | **Formal declaration of material incident (T1).** Record exact time of declaration. | Incident Commander | T1 |
| 2.4 | Notify CEO and Board-level contact (e.g., Chairman of Risk Committee) of material incident declaration. | Incident Commander / Head of Regulatory Affairs | T1 + 10 min |
| 2.5 | Head of Regulatory Affairs notified and begins preparing BNM notification. | Incident Commander | T1 + 10 min |
| 2.6 | Confirm BNM notification channel and current BNM Supervisory Contact details. | Head of Regulatory Affairs / INO | T1 + 15 min |

### 7.3 Phase 3 — BNM Notification Preparation (T1 to T1 + 3 Hours)

| Step | Action | Responsible | Timeline |
|---|---|---|---|
| 3.1 | Incident Notification Officer (INO) prepares the BNM Initial Notification using the template in Appendix A. | INO (Head of Regulatory Affairs or delegate) | T1 + 15 min |
| 3.2 | Gather required information from the IRT: incident timeline, affected systems, customer impact estimate, preliminary root cause, and immediate containment actions. | INO (coordinating with CISO, IRT) | T1 + 30 min |
| 3.3 | Draft the BNM Initial Notification. | INO | T1 + 1.5 hours |
| 3.4 | INO submits draft to Incident Commander for review and approval. | INO | T1 + 2 hours |
| 3.5 | Incident Commander reviews and approves the notification content. | Incident Commander | T1 + 2.5 hours |
| 3.6 | Legal / Compliance review (if time permits). | Head of Legal / Chief Compliance Officer | T1 + 2.5 hours |
| 3.7 | Notification finalized and prepared for submission. | INO | T1 + 3 hours |

### 7.4 Phase 4 — BNM Notification Submission (Before T1 + 4 Hours)

| Step | Action | Responsible | Timeline |
|---|---|---|---|
| 4.1 | Submit the BNM Initial Notification via the designated official channel (see Section 8.3). | INO | **Before T1 + 4 hours** |
| 4.2 | Obtain and retain proof of submission (delivery receipt, email read receipt, submission reference number). | INO | Immediately after 4.1 |
| 4.3 | Record submission timestamp and reference number in the Incident Register. | INO | Immediately after 4.2 |
| 4.4 | Notify CEO, Incident Commander, and Head of Legal that initial notification has been submitted. | INO | Immediately after 4.3 |
| 4.5 | Confirm BNM receipt and note name/designation of BNM officer who received the notification (if applicable). | INO | Within 30 min of submission |

### 7.5 Phase 5 — Ongoing Updates to BNM (Post T1 + 4 Hours)

| Step | Action | Responsible | Timeline |
|---|---|---|---|
| 5.1 | Provide BNM with status updates at intervals agreed during initial notification, or as directed by BNM. | INO | Per BNM instruction |
| 5.2 | IRT provides updated impact assessment, containment status, and estimated resolution time to INO at each update cycle. | CISO / IRT Lead | Before each update |
| 5.3 | Each update logged with timestamp in the Incident Register. | INO | Continuously |
| 5.4 | Notify BNM immediately if incident severity changes materially (escalates or de-escalates). | INO | As occurs |

### 7.6 Phase 6 — Incident Resolution and Post-Incident Reporting

| Step | Action | Responsible | Timeline |
|---|---|---|---|
| 6.1 | Incident declared resolved by Incident Commander. Notify BNM of resolution. | Incident Commander / INO | At resolution |
| 6.2 | Commence Post-Incident Review (Section 11). | Head of IT / CISO | Within [X] business days of resolution |
| 6.3 | Prepare and submit BNM Post-Incident Report (see Appendix B for template). | INO / CISO | Within [X] calendar days per RMiT requirements |
| 6.4 | Submit Post-Incident Report to BNM via official channel. | INO | Per RMiT deadline |
| 6.5 | Archive all incident records, notifications, and correspondence. | INO / IT Operations | Post-submission |

---

## 8. Escalation Timelines

*Summarize all time-bound obligations in a single reference section for rapid consultation during an active incident.*

### 8.1 Master Escalation Timeline

| Milestone | Deadline | Action Required | Responsible |
|---|---|---|---|
| **T0** | Incident Detected | Log incident, begin triage | SOC Analyst |
| **T0 + 30 min** | Initial Assessment Complete | Notify CISO if potentially material | IT Operations Manager |
| **T1** | Material Incident Declared | Start 4-hour notification clock; notify CEO and Board contact | Incident Commander |
| **T1 + 10 min** | Internal Escalation | CEO, Board Risk Committee Chair, Head of Regulatory Affairs notified | Incident Commander |
| **T1 + 15 min** | Notification Preparation Begins | INO commences BNM notification draft | INO |
| **T1 + 2 hours** | Draft Notification Ready | Submitted to Incident Commander for approval | INO |
| **T1 + 3 hours** | Notification Approved | Final review complete; ready for submission | Incident Commander |
| **T1 + 4 hours** | **BNM NOTIFICATION DEADLINE** | **Initial notification submitted to BNM** | **INO** |
| **T1 + 4 hours** | Proof of Submission | Delivery confirmation obtained and logged | INO |
| **Ongoing** | Status Updates | Updates to BNM per agreed schedule or BNM direction | INO |
| **[X] calendar days post-resolution** | Post-Incident Report | Full post-incident report submitted to BNM | INO / CISO |

### 8.2 Internal Escalation Contacts

*Maintain a current copy of the Internal Escalation Contact List as Appendix D. Ensure this list is reviewed and updated at least quarterly.*

| Role | Primary Contact | Alternate Contact | Contact Method |
|---|---|---|---|
| Incident Commander | [Name], [Title] | [Name], [Title] | [Mobile] / [Email] |
| CISO | [Name] | [Name] | [Mobile] / [Email] |
| Head of Regulatory Affairs / INO | [Name] | [Name] | [Mobile] / [Email] |
| CEO | [Name] | [Name] | [Mobile] / [Email] |
| Board Risk Committee Chair | [Name] | [Name] | [Mobile] / [Email] |
| Head of Legal | [Name] | [Name] | [Mobile] / [Email] |
| Chief Compliance Officer | [Name] | [Name] | [Mobile] / [Email] |
| Head of IT / CTO | [Name] | [Name] | [Mobile] / [Email] |

### 8.3 BNM Notification Channel

*Verify this contact information against the most current BNM guidance and update accordingly. Do not rely on outdated contact details.*

| Channel | Details |
|---|---|
| **Primary Channel** | [BNM Official Reporting Portal / Designated Email Address / Hotline per current RMiT guidance] |
| **Secondary Channel** | [BNM Supervisory Contact — direct line] |
| **BNM Supervisory Department** | [Assigned BNM supervisory department for the Organization] |
| **BNM Emergency Hotline** | [BNM 24-hour hotline if available] |
| **Confirmation Method** | Obtain delivery receipt, email read receipt, or verbal confirmation with name and time logged |

---

## 9. Roles and Responsibilities

*Define accountability clearly. Every individual involved in the notification process must understand their specific obligations.*

### 9.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CEO | Board Risk Committee | Incident Commander | CISO | Head of Regulatory Affairs / INO | Head of IT / CTO | IT Operations Manager | SOC Analyst | Legal Counsel | Chief Compliance Officer |
|---|---|---|---|---|---|---|---|---|---|---|
| Incident Detection and Logging | — | — | I | I | I | I | I | **R** | — | — |
| Initial Triage and Assessment | — | — | I | C | I | C | **R** | **R** | — | — |
| Materiality Assessment | I | — | **A** | **R** | C | C | C | — | C | C |
| Material Incident Declaration (Tier 2) | I | I | **A** | **R** | I | C | — | — | — | — |
| Material Incident Declaration (Tier 1) | **A** | I | **R** | **R** | I | C | — | — | — | — |
| Notification of CEO / Board | — | I | **R** | I | I | — | — | — | — | I |
| BNM Notification Preparation | — | — | **A** | C | **R** | C | — | — | C | C |
| BNM Notification Review and Approval | I | — | **A** | C | **R** | — | — | — | C | C |
| BNM Notification Submission | — | — | **A** | I | **R** | — | — | — | I | I |
| Ongoing BNM Status Updates | — | — | **A** | C | **R** | C | — | — | — | I |
| Incident Response (Technical) | — | — | I | **A** | I | **R** | **R** | **R** | — | — |
| Post-Incident Review | I | I | **A** | **R** | C | **R** | C | C | — | C |
| BNM Post-Incident Report | — | I | **A** | C | **R** | C | — | — | C | C |
| Incident Record Archival | — | — | I | I | **R** | C | **R** | — | — | I |
| Quarterly Trend Review | I | I | C | C | **R** | C | — | — | — | **R** |

### 9.2 Detailed Role Descriptions

#### 9.2.1 Incident Commander

- Holds overall accountability for the incident response and all regulatory communications;
- Formally declares an incident as material (Tier 1 or Tier 2) and initiates the notification clock;
- Reviews and approves the BNM Initial Notification and all subsequent formal communications;
- Coordinates between the IRT and the Regulatory Affairs function;
- Reports incident status to the CEO and Board Risk Committee.

**Typical Appointee:** CTO, CIO, or designated Senior Technology Executive.

#### 9.2.2 Incident Notification Officer (INO) / Head of Regulatory Affairs

- Serves as the primary author and submitter of all BNM notifications;
- Maintains up-to-date BNM contact details and notification templates;
- Coordinates with the IRT to obtain accurate and timely information for notifications;
- Confirms receipt of notification with BNM and retains proof of submission;
- Manages the post-incident reporting obligation to BNM;
- Maintains the Incident Register and conducts quarterly trend reviews.

#### 9.2.3 Chief Information Security Officer (CISO)

- Leads the technical assessment of the incident and determines materiality in coordination with the Incident Commander;
- Provides ongoing technical updates to the INO for inclusion in BNM notifications;
- Leads the post-incident root cause analysis;
- Accountable for the technical accuracy of all information submitted to BNM.

#### 9.2.4 CEO

- Accountable to the Board for the Organization's compliance with BNM notification obligations;
- Must be notified immediately upon declaration of a Tier 1 incident;
- Has authority to authorize escalation of notifications to BNM executive level if warranted.

#### 9.2.5 Board Risk Committee

- Receives timely notification of material incidents per the Board's information policy;
- Reviews incident trends and the Organization's response adequacy at committee meetings;
- Oversees the adequacy of this procedure as part of its technology risk governance remit.

#### 9.2.6 Legal Counsel

- Provides legal privilege review of BNM notifications where time permits;
- Advises on any legal implications of the incident (e.g., customer litigation, third-party liability);
- Liaises with external legal counsel if required.

---

## 10. Communication Templates

*This section provides standardized templates for all formal communications to BNM. Using these templates ensures consistency, completeness, and regulatory compliance.*

### 10.1 Template A — BNM Initial Notification (Within 4 Hours)

*Use this template to submit the mandatory initial notification to BNM. All fields marked [REQUIRED] must be completed. Fields marked [IF KNOWN] should be completed if information is available at the time of notification.*

---

**TO:** [BNM Supervisory Department / Designated BNM Contact]
**FROM:** [Organization Name] — [Head of Regulatory Affairs / INO Name], [Title]
**DATE:** [Date of Notification]
**TIME:** [Time of Notification] [MYT]
**SUBJECT:** MATERIAL INCIDENT NOTIFICATION — [Organization Name] — [Incident Reference Number]
**CLASSIFICATION:** CONFIDENTIAL

---

**INCIDENT NOTIFICATION — INITIAL REPORT**

**1. Organization Details**

- **Institution Name:** [Organization Name]
- **BNM License Number:** [License Number]
- **Supervisory Contact at BNM:** [BNM Officer Name / Department, if known]

**2. Incident Identification**

- **Incident Reference Number:** [Internal Incident Reference Number] [REQUIRED]
- **Incident Title / Short Description:** [Brief descriptive title, e.g., "Core Banking System Outage — Internet Banking Unavailable"] [REQUIRED]
- **Incident Severity Classification:** Tier [1 / 2] — [Critical / High] [REQUIRED]

**3. Timeline**

- **Time of Detection (T0):** [Date and Time, MYT] [REQUIRED]
- **Time of Material Incident Declaration (T1):** [Date and Time, MYT] [REQUIRED]
- **Time of This Notification:** [Date and Time, MYT] [REQUIRED]
- **Time Elapsed Since Declaration:** [Hours and Minutes] [REQUIRED]

**4. Incident Description**

- **Nature of Incident:** [e.g., Cyber Attack, System Failure, Data Breach, Third-Party Outage] [REQUIRED]
- **Affected Systems:** [List affected systems, applications, or infrastructure components] [REQUIRED]
- **Brief Description:** [2–5 sentences describing what occurred, how it was detected, and its current status] [REQUIRED]

**5. Impact Assessment (Preliminary)**

- **Customer Impact:** [Estimated number of customers affected / unable to access services] [REQUIRED]
- **Services Affected:** [List specific services impacted, e.g., internet banking, ATM network, payments] [REQUIRED]
- **Financial Impact:** [Estimated financial impact if known; otherwise state "Under assessment"] [IF KNOWN]
- **Data Breach:** [Yes / No / Under Investigation] [REQUIRED]
  - If Yes: [Brief description of data categories and estimated volume affected] [IF KNOWN]
- **Geographic Scope:** [e.g., Nationwide / Klang Valley only / Specific branches] [REQUIRED]

**6. Immediate Actions Taken**

- [Action 1 — e.g., "Incident Response Team activated at [time]"]
- [Action 2 — e.g., "Affected systems isolated from production environment"]
- [Action 3 — e.g., "Third-party vendor notified and engaged"]
- [Action 4 — e.g., "Failover to backup systems initiated"]

**7. Current Status and Recovery**

- **Current Incident Status:** [Active — Contained / Active — Not Contained / Recovering / Resolved]
- **Estimated Resolution Time:** [If known; otherwise state "Under assessment"] [IF KNOWN]
- **Recovery Actions in Progress:** [Brief description]

**8. Next Steps**

- [Expected next action and timeline]
- [Planned next update to BNM]

**9. Primary Contact for BNM**

- **Name:** [Name]
- **Title:** [Title]
- **Mobile:** [Mobile Number]
- **Email:** [Email Address]
- **Availability:** [24/7 / Working hours / Other]

**10. Declaration**

*I, [Name], in my capacity as [Title] of [Organization Name], hereby notify Bank Negara Malaysia of the above material incident in accordance with Clause 16.1 of the BNM Risk Management in Technology (RMiT) Policy Document.*

**Signed:** ______________________________
**Name:** [Name]
**Title:** [Title]
**Date and Time:** [Date and Time, MYT]

---

### 10.2 Template B — BNM Status Update Notification

*Use this template for all subsequent status updates submitted to BNM following the initial notification.*

---

**TO:** [BNM Supervisory Department]
**FROM:** [Organization Name] — [INO Name]
**DATE:** [Date]
**TIME:** [Time] [MYT]
**SUBJECT:** MATERIAL INCIDENT UPDATE [#X] — [Organization Name] — [Incident Reference Number]

---

**INCIDENT STATUS UPDATE — UPDATE NUMBER [X]**

- **Incident Reference Number:** [Incident Reference Number]
- **Time of Previous Update:** [Date and Time of Last Update]
- **Time of This Update:** [Date and Time]

**Current Incident Status:** [Active — Contained / Active — Not Contained / Recovering / Resolved]

**Updates Since Last Notification:**

| Area | Previous Status | Current Status |
|---|---|---|
| Affected Systems | [Previous] | [Current] |
| Customer Impact | [Previous] | [Current] |
| Services Affected | [Previous] | [Current] |
| Root Cause | [Previous] | [Current] |
| Containment | [Previous] | [Current] |

**Actions Taken Since Last Update:**
- [Action 1]
- [Action 2]
- [Action 3]

**Revised Estimated Resolution Time:** [Time / Date or "Under assessment"]

**Next Update Expected:** [Date and Time]

**Submitted by:** [Name], [Title], [Date and Time, MYT]

---

### 10.3 Template C — BNM Resolution Notification

*Use this template to formally notify BNM that the material incident has been resolved.*

---

**TO:** [BNM Supervisory Department]
**FROM:** [Organization Name] — [INO Name]
**DATE:** [Date]
**TIME:** [Time] [MYT]
**SUBJECT:** MATERIAL INCIDENT RESOLVED — [Organization Name] — [Incident Reference Number]

---

- **Incident Reference Number:** [Incident Reference Number]
- **Incident Title:** [Incident Title]
- **Time of Declaration (T1):** [Date and Time]
- **Time of Resolution:** [Date and Time]
- **Total Duration:** [Hours and Minutes from T1 to Resolution]

**Resolution Summary:**
[2–5 sentences summarizing how the incident was resolved and the current status of affected services.]

**Full Service Restoration Confirmed:** [Yes / Partial — describe / No]

**Preliminary Root Cause:** [Brief statement; full analysis to follow in Post-Incident Report]

**Post-Incident Report:** To be submitted by [Target Date] in accordance with RMiT requirements.

**Submitted by:** [Name], [Title], [Date and Time, MYT]

---

### 10.4 Template D — Internal Escalation Notification

*Use this template for the mandatory internal notification to the CEO and Board contact upon material incident declaration.*

---

**TO:** [CEO Name] | [Board Risk Committee Chair Name]
**FROM:** [Incident Commander Name]
**DATE / TIME:** [Date and Time, MYT]
**SUBJECT:** URGENT — MATERIAL TECHNOLOGY INCIDENT DECLARED — [Incident Reference Number]

[Organization Name] has declared a **Tier [1/2] material technology incident** at [Time, MYT] on [Date].

**Incident:** [One-sentence description]
**Affected Services:** [List]
**Estimated Customer Impact:** [Number]
**BNM Notification Deadline:** [T1 + 4 hours = Exact Time, MYT]
**BNM Notification Status:** [In preparation / Submitted]
**Incident Commander:** [Name, Direct Contact]
**INO:** [Name, Direct Contact]

A full briefing will be provided at [Time] or sooner if circumstances change.

---

## 11. Post-Incident Review Process

*The post-incident review is both an internal improvement mechanism and a regulatory obligation. This section defines the structure, timeline, and outputs of the review.*

### 11.1 Objectives

The Post-Incident Review (PIR) serves to:

- Establish an accurate and complete incident timeline;
- Identify the root cause(s) of the incident;
- Assess the adequacy of the Organization's detection, response, and notification processes;
- Identify control failures, gaps, or improvement opportunities;
- Produce the formal BNM Post-Incident Report;
- Generate and track remediation actions to prevent recurrence.

### 11.2 PIR Governance

| Aspect | Detail |
|---|---|
| **PIR Lead** | CISO (technical review) co-led with Head of Regulatory Affairs (regulatory review) |
| **PIR Participants** | IRT members, affected business unit heads, IT Operations, Legal, Compliance |
| **PIR Initiation** | Within [X] business days of incident resolution |
| **Internal PIR Report** | Completed within [X] business days of incident resolution |
| **BNM Post-Incident Report** | Submitted within the timeframe stipulated in RMiT Clause 16.1 |
| **Remediation Tracking** | Actions tracked in [Organization's Risk/Action Tracking System] |
| **Board Reporting** | PIR summary reported to Board Risk Committee at next scheduled meeting or earlier if severity warrants |

### 11.3 PIR Report Structure

The internal Post-Incident Review Report shall address the following:

1. **Incident Summary** — Factual summary of the incident, timeline, and impact;
2. **Detection and Response Assessment** — How was the incident detected? Was the response timely and effective?
3. **Root Cause Analysis** — Primary and contributing root causes (use 5-Why or equivalent methodology);
4. **Notification Compliance Assessment** — Was BNM notified within 4 hours? Were all notifications accurate and complete?
5. **Control Failure Analysis** — Which controls failed or were absent?
6. **Impact Assessment — Final** — Final confirmed customer, financial, operational, and reputational impact;
7. **Remediation Actions** — Specific, time-bound actions to prevent recurrence;
8. **Lessons Learned** — Key insights for improving the Organization's technology risk posture.

### 11.4 Remediation Action Tracking

*All remediation actions identified in the PIR must be formally tracked to closure.*

| Action ID | Description | Root Cause Addressed | Owner | Target Date | Status | Evidence of Completion |
|---|---|---|---|---|---|---|
| [PIR-001] | [Action description] | [Root cause reference] | [Owner name/role] | [Date] | [Open/In Progress/Closed] | [Description] |
| [PIR-002] | | | | | | |
| [PIR-003] | | | | | | |

### 11.5 Quarterly Trend Review

*In addition to per-event reviews, the Head of Regulatory Affairs shall conduct a quarterly trend review of all technology incidents.*

The quarterly trend review shall cover:

- Total number of incidents by tier in the quarter;
- Frequency and nature of material incidents (Tier 1 and Tier 2);
- BNM notification compliance rate (percentage notified within 4 hours);
- Average time from detection (T0) to declaration (T1) and to notification submission;
- Recurring root cause themes;
- Status of open PIR remediation actions;
- Any emerging risk themes or patterns.

The quarterly trend report shall be presented to:
- [Board Risk Committee / Board Technology Committee]
- [Senior Management Risk Committee]
- [Chief Compliance Officer]

---

## 12. Record-Keeping and Evidence Management

*Accurate records are essential both for internal audit and for demonstrating regulatory compliance to BNM.*

### 12.1 Incident Register

The Organization shall maintain a centralized Incident Register that records all technology incidents, regardless of severity tier. The Incident Register shall be maintained by [Head of Regulatory Affairs / IT Operations Manager] and shall be available for BNM inspection upon request.

**Minimum fields for each incident entry:**

| Field | Description |
|---|---|
| Incident ID | Unique identifier |
| Detection Date/Time (T0) | Exact timestamp |
| Declaration Date/Time (T1) | Exact timestamp (if material) |
| Incident Title | Short descriptive title |
| Severity Tier | 1 / 2 / 3 / 4 |
| Affected Systems | List |
| Customer Impact | Number/description |
| BNM Notified? | Yes / No / N/A |
| BNM Notification Time | Exact timestamp |
| Time from T1 to Notification | Hours:Minutes |
| BNM Reference / Acknowledgement | BNM reference or officer name |
| Resolution Date/Time | Exact timestamp |
| Total Duration | Hours and Minutes |
| Root Cause Summary | Brief description |
| PIR Completed? | Yes / No / N/A |
| BNM Post-Incident Report Submitted? | Yes / No / N/A |
| Post-Incident Report Date | Date |

### 12.2 Evidence Retention Requirements

| Record Type | Retention Period | Storage Location | Access Control |
|---|---|---|---|
| BNM Initial Notifications | [X] years | [Secure document management system] | Regulatory Affairs, Legal |
| BNM Status Updates | [X] years | [Storage location] | Regulatory Affairs, Legal |
| BNM Post-Incident Reports | [X] years | [Storage location] | Regulatory Affairs, Legal |
| Incident Register | [X] years | [Storage location] | Regulatory Affairs, Audit |
| Internal PIR Reports | [X] years | [Storage location] | Senior Management, Audit |
| Proof of Submission | [X] years | Attached to notification record | Regulatory Affairs |
| IRT Meeting Notes | [X] years | [Storage location] | CISO, Regulatory Affairs |

*Note: Retention periods must comply with the FSA 2013, IFSA 2013, BNM requirements, and the Organization's Records Management Policy. Confirm minimum periods with Legal Counsel.*

---

## 13. Testing and Drill Requirements

*Regular testing ensures personnel are prepared to execute this procedure effectively during an actual incident.*

### 13.1 Testing Programme

| Test Type | Description | Frequency | Lead | Participants |
|---|---|---|---|---|
| **Tabletop Exercise** | Scenario-based walkthrough of the notification procedure without live system involvement | Annually (minimum) | Head of Regulatory Affairs / CISO | IRT, INO, Legal, Compliance |
| **Notification Drill** | Simulated material incident requiring a mock BNM notification to be prepared (not submitted) within 4 hours | [Semi-annually / Annually] | Head of Regulatory Affairs | INO and delegates |
| **Full Simulation** | End-to-end simulation including technical response and regulatory notification, conducted as part of BCP/DR testing | Annually | CTO / Incident Commander | All relevant functions |
| **Contact List Verification** | Verification that all internal and BNM contact details are current and reachable | Quarterly | Head of Regulatory Affairs | INO |

### 13.2 Test Results and Improvement

- All tests shall be documented with outcomes, gaps identified, and remediation actions;
- Test results shall be reported to the [Board Risk Committee / Senior Management Risk Committee];
- Identified gaps shall be remediated within [X] days and tracked to closure;
- BNM shall be informed of annual testing in accordance with any applicable supervisory requirements.

---

## 14. Review and Approval

### 14.1 Procedure Review Triggers

This procedure shall be reviewed:

- **Quarterly** — Trend review and minor updates as required;
- **Per-event** — Following any material incident, to incorporate lessons learned from the PIR;
- **Annually** — Full formal review and re-approval;
- **Upon regulatory change** — Following any revision to the BNM RMiT Policy Document or related regulations;
- **Upon organizational change** — Following any significant change to the Organization's technology environment, license status, or relevant personnel.

### 14.2 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial issue | [Approved By] |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] | [Approved By] |
| [2.0] | [Date] | [Author Name], [Title] | [Major revision description] | [Approved By] |

### 14.3 Approval Sign-Off

*This procedure requires the following approvals before it takes effect. All approvers confirm that this procedure is fit for purpose, compliant with applicable regulatory requirements, and consistent with the Organization's risk management framework.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Regulatory Affairs (Owner) | [Name] | ______________________ | [Date] |
| Chief Compliance Officer | [Name] | ______________________ | [Date] |
| Chief Information Security Officer | [Name] | ______________________ | [Date] |
| Chief Technology Officer / CIO | [Name] | ______________________ | [Date] |
| Head of Legal | [Name] | ______________________ | [Date] |
| Chief Executive Officer | [Name] | ______________________ | [Date] |
| Board Risk Committee Chairman *(if required by governance policy)* | [Name] | ______________________ | [Date] |

---

## 15. References

*List all regulatory instruments, internal policies, and standards that this procedure references or must be read in conjunction with.*

### 15.1 Regulatory References

| Reference | Document Title | Issuing Authority | Relevant Provisions |
|---|---|---|---|
| BNM/RH/PD 028-119 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | **Clause 16.1** (Material Incident Notification) |
| BNM/RH/PD [XXX] | Business Continuity Management | Bank Negara Malaysia | [Relevant Clauses] |
| BNM/RH/PD [XXX] | Outsourcing | Bank Negara Malaysia | [Relevant Clauses on Third-Party Incidents] |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | [Relevant Sections] |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | [Relevant Sections] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 30 (Data Breach) |
| Cybersecurity Act 2018 | Cybersecurity Act 2018 | NACSA / Parliament of Malaysia | [Relevant Provisions for CII] |

### 15.2 Internal Policy References

| Document ID | Document Title | Owner | Location |
|---|---|---|---|
| [ID] | Technology Risk Management Policy | CISO / CTO | [Document Location] |
| [ID] | Business Continuity Management Policy | [Owner] | [Document Location] |
| [ID] | Incident Management Procedure | Head of IT | [Document Location] |
| [ID] | Information Security Policy | CISO | [Document Location] |
| [ID] | Data Breach Response Procedure | CISO / DPO | [Document Location] |
| [ID] | Outsourcing Risk Management Policy | [Owner] | [Document Location] |
| [ID] | Records Management Policy | [Owner] | [Document Location] |
| [ID] | [Other Related Internal Document] | [Owner] | [Document Location] |

---

## 16. Appendices

### Appendix A — BNM Initial Notification Template (Printable Form)

*A print-ready version of the BNM Initial Notification Template (Section 10.1) for use during incidents where system access may be unavailable. This appendix should be maintained as a hard-copy document in the Incident Response Toolkit.*

[Insert print-friendly version of Template A]

---

### Appendix B — BNM Post-Incident Report Template

*A structured template for the formal post-incident report to be submitted to BNM following resolution of a material incident. Populate in accordance with BNM guidance and the RMiT Policy Document requirements.*

**Sections to include:**

1. Executive Summary
2. Incident Timeline (detailed)
3. Affected Systems and Services
4. Final Impact Assessment (customers, financial, operational, reputational)
5. Root Cause Analysis
6. Immediate Corrective Actions Taken
7. Longer-Term Remediation Plan
8. Control Environment Assessment
9. Regulatory Notification Compliance Assessment
10. Lessons Learned
11. Appendices (technical evidence, system logs summary, correspondence log)

[Insert full template structure]

---

### Appendix C — Incident Classification Quick Reference Card

*A one-page quick reference card summarizing materiality criteria and escalation timelines. To be laminated and kept at IT Operations, SOC, and with key personnel.*

**Is this a MATERIAL INCIDENT requiring BNM notification?**

Answer YES to any of the following → **Declare Tier 1 or Tier 2 → Start 4-hour clock immediately**

- [ ] More than [X,000] customers cannot access services
- [ ] Core banking or payment systems unavailable for more than [X] hours
- [ ] Confirmed or suspected data breach affecting [X+] records
- [ ] Confirmed cyber intrusion, ransomware, or unauthorized access to production systems
- [ ] Unable to participate in national payment/settlement system for [X]+ minutes
- [ ] Estimated financial loss exceeds RM [X] million
- [ ] Regulatory reporting systems unavailable
- [ ] Third-party critical service failure causing material customer impact
- [ ] BNM or another regulator has directed you to treat this as material

**When in doubt → Notify. Call [INO Name] at [Mobile Number] immediately.**

---

### Appendix D — Internal Escalation Contact List

*This list must be reviewed and verified monthly. Version-controlled separately from this procedure due to change frequency.*

| Role | Primary Contact | Mobile | Email | Alternate Contact | Alternate Mobile |
|---|---|---|---|---|---|
| Incident Commander | [Name] | [Number] | [Email] | [Name] | [Number] |
| CISO | [Name] | [Number] | [Email] | [Name] | [Number] |
| Head of Regulatory Affairs / INO | [Name] | [Number] | [Email] | [Name] | [Number] |
| CEO | [Name] | [Number] | [Email] | [Name] | [Number] |
| Board Risk Committee Chair | [Name] | [Number] | [Email] | [Name] | [Number] |
| Head of Legal | [Name] | [Number] | [Email] | [Name] | [Number] |
| Chief Compliance Officer | [Name] | [Number] | [Email] | [Name] | [Number] |
| Head of IT / CTO | [Name] | [Number] | [Email] | [Name] | [Number] |
| BNM Primary Contact | [Name / Department] | [Number] | [Email] | [Name] | [Number] |
| BNM Emergency Hotline | — | [Number] | — | — | — |

**Last Verified:** [Date] **Verified By:** [Name]

---

### Appendix E — Incident Register Template

*A spreadsheet/system template for maintaining the Incident Register. See Section 12.1 for required fields.*

[Insert field list or link to the Incident Register in [Document Management System]]

---

### Appendix F — Notification Compliance Checklist

*Use this checklist during and after every material incident to confirm all notification obligations have been met.*

**BNM Notification Compliance Checklist**

| # | Obligation | Completed | Time / Reference | Initials |
|---|---|---|---|---|
| 1 | Incident detected and logged with timestamp (T0) | ☐ | | |
| 2 | Initial triage completed | ☐ | | |
| 3 | Materiality assessed against Section 5.3 criteria | ☐ | | |
| 4 | Material incident formally declared (T1) — timestamp recorded | ☐ | | |
| 5 | CEO notified | ☐ | | |
| 6 | Board Risk Committee Chair notified | ☐ | | |
| 7 | Head of Regulatory Affairs / INO notified | ☐ | | |
| 8 | BNM notification preparation commenced | ☐ | | |
| 9 | BNM notification drafted and approved by Incident Commander | ☐ | | |
| 10 | BNM notification submitted before T1 + 4 hours | ☐ | **DEADLINE: [T1 + 4H]** | |
| 11 | Proof of BNM notification submission obtained and retained | ☐ | | |
| 12 | Submission logged in Incident Register | ☐ | | |
| 13 | BNM status updates provided as agreed | ☐ | | |
| 14 | BNM resolution notification submitted | ☐ | | |
| 15 | Post-Incident Review initiated | ☐ | | |
| 16 | BNM Post-Incident Report submitted within required timeframe | ☐ | | |
| 17 | All records archived | ☐ | | |

**Checklist completed by:** [Name] **Date:** [Date]

---

*End of Document — BNM Incident Notification Procedure v1.0*

*[Organization Name] | Confidential | Document ID: [Document ID]*