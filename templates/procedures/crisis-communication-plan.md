# Crisis Communication Plan

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

**Organization:** [Organization Name]
**Department:** [Department Name]
**Regulatory Framework:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document
**Applicable Clauses:** RMiT 10.35

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives](#2-objectives)
3. [Scope](#3-scope)
4. [Incident Classification Matrix](#4-incident-classification-matrix)
5. [Communication Protocols and Escalation Timelines](#5-communication-protocols-and-escalation-timelines)
6. [Actions and Milestones](#6-actions-and-milestones)
7. [Accountable Owners and Contact Directory](#7-accountable-owners-and-contact-directory)
8. [Communication Templates](#8-communication-templates)
9. [Regulatory and Stakeholder Notification Requirements](#9-regulatory-and-stakeholder-notification-requirements)
10. [Post-Incident Review Process](#10-post-incident-review-process)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Training and Awareness](#12-training-and-awareness)
13. [Plan Maintenance and Testing](#13-plan-maintenance-and-testing)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section defines the overarching intent of this document and its regulatory basis. Describe the primary objective of maintaining this plan and how it supports the organisation's technology risk management obligations.*

This Crisis Communication Plan ("the Plan") establishes the structured protocols, procedures, and responsibilities governing all internal and external communications during technology incidents, service disruptions, and crisis events at [Organization Name] ("the Organisation"). The Plan ensures that timely, accurate, and consistent information is disseminated to all relevant stakeholders — including management, employees, customers, regulators, vendors, and the public — in a manner that protects the Organisation's operational continuity, reputation, and regulatory standing.

This Plan is established in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, Paragraph 10.35**, which mandates that a financial institution maintain a documented communication plan as an integral component of its technology incident management and business continuity arrangements.

### 1.2 Regulatory Alignment

*Reference all applicable regulations, guidelines, and internal policies that this document fulfils. Ensure all referenced clause numbers are verified against the current version of the cited regulatory instruments.*

| Regulatory Instrument | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | 10.35 | Crisis communication plan for technology incidents and disruptions |
| BNM RMiT Policy Document | 10.28 – 10.34 | Technology incident management and escalation |
| BNM Business Continuity Management (BCM) Policy | [Relevant Section] | Stakeholder communication during business disruptions |
| Personal Data Protection Act 2010 (PDPA) | Section 30 | Notification obligations relating to personal data breaches |
| [Internal Policy Reference] | [Section] | [Summary of internal policy alignment] |

---

## 2. Objectives

*Articulate the specific, measurable objectives this Plan is designed to achieve. Objectives should be outcome-oriented and auditable.*

The objectives of this Crisis Communication Plan are to:

- Ensure **timely notification** of all affected internal and external stakeholders in accordance with defined escalation timelines and regulatory requirements.
- Establish **clear lines of authority** for approving and disseminating crisis communications at each incident severity level.
- Provide **pre-approved communication templates** that reduce response latency and minimise the risk of inconsistent or inaccurate messaging.
- Maintain **regulatory compliance** by meeting mandatory notification timelines stipulated by BNM and other applicable authorities.
- Protect the **reputation and customer trust** of [Organization Name] through transparent, accurate, and empathetic communication.
- Facilitate **coordination** among internal teams, external vendors, and crisis management stakeholders throughout the lifecycle of a technology incident.
- Support the **post-incident review process** to capture lessons learned and improve future communication effectiveness.

---

## 3. Scope

### 3.1 In Scope

*Define the boundaries of this Plan clearly. Specify the systems, services, entities, and event types covered. Ambiguity in scope is a common audit finding.*

This Plan applies to:

- All **technology incidents and disruptions** affecting [Organization Name]'s critical information systems, infrastructure, applications, and services, including but not limited to:
  - Core banking system outages
  - Internet banking and mobile banking service disruptions
  - Payment system failures (e.g., IBG, DuitNow, RENTAS)
  - Cybersecurity incidents including data breaches, ransomware, and DDoS attacks
  - Data centre failures or environmental events
  - Third-party service provider outages impacting critical systems
- All **employees, contractors, and third parties** with a defined role in the incident communication process.
- **All severity levels** as defined in Section 4 (Incident Classification Matrix), noting that communication actions and timelines vary by severity.
- **Domestic and cross-border operations** of [Organization Name], including subsidiaries as listed in Appendix A.

### 3.2 Out of Scope

- Routine service requests and scheduled maintenance windows communicated via standard change management channels.
- Non-technology-related operational incidents (refer to [Business Continuity Plan Reference]).
- Employee relations communications (refer to [HR Policy Reference]).

---

## 4. Incident Classification Matrix

*Define the classification criteria used to categorise technology incidents by severity. Classification drives all subsequent communication timelines, escalation paths, and notification obligations. Ensure thresholds are agreed with the CISO, CTO, and Risk function prior to finalisation.*

[Organization Name] classifies technology incidents into four severity levels based on operational impact, customer exposure, regulatory implications, and estimated recovery time. All incidents must be classified within **[X] minutes** of detection.

### 4.1 Severity Classification Table

| Severity Level | Label | Impact Description | Examples | RTO Target | Communication Triggered |
|---|---|---|---|---|---|
| **P1 – Critical** | Crisis | Complete failure of one or more critical systems; significant customer impact; potential regulatory breach | Core banking outage, ransomware, mass data breach | < [X] hours | Immediate — all stakeholders including BNM |
| **P2 – High** | Major Incident | Significant degradation of critical services; moderate customer impact; escalating risk | Internet banking intermittent; payment delays > [X] minutes | < [X] hours | Senior management, BNM watch notification |
| **P3 – Medium** | Significant Incident | Partial service disruption; limited customer impact; contained within single system | Single application unavailability; non-critical integration failure | < [X] hours | Operations management, internal stakeholders |
| **P4 – Low** | Minor Incident | Minimal or no customer impact; isolated technical issue | Non-customer-facing system degradation; resolved within SLA | < [X] hours | IT management, internal teams only |

### 4.2 Classification Escalation Criteria

*Incidents may be re-classified upward if conditions deteriorate. Define the triggers that require a re-classification decision and who has authority to reclassify.*

An incident **must be re-classified to a higher severity** if any of the following conditions are met:

- The estimated resolution time exceeds the RTO target for the current severity level.
- Customer complaint volume exceeds **[X] complaints within [Y] minutes**.
- The incident is determined to involve or likely involve personal data exposure.
- Media enquiries or social media activity relating to the incident are detected.
- A third-party provider confirms they cannot restore services within the agreed SLA.
- The incident is assessed as having potential systemic or reputational consequences.

**Authority to reclassify:** [Incident Commander Role / Name], with concurrence from [CISO / CTO / Risk Officer].

---

## 5. Communication Protocols and Escalation Timelines

*This section defines the mandatory timelines within which communications must be initiated for each severity level. Timelines must align with BNM RMiT requirements and should be reviewed against current BNM guidance on incident reporting.*

### 5.1 Internal Escalation Timeline

| Milestone | P1 – Critical | P2 – High | P3 – Medium | P4 – Low |
|---|---|---|---|---|
| Incident detected and logged | T+0 | T+0 | T+0 | T+0 |
| Initial classification confirmed | T+[15] min | T+[30] min | T+[60] min | T+[2] hrs |
| Incident Commander assigned | T+[15] min | T+[30] min | T+[60] min | N/A |
| Senior management notified (verbal/SMS) | T+[30] min | T+[60] min | T+[2] hrs | T+[4] hrs |
| Crisis Communication Team activated | T+[30] min | T+[60] min | T+[3] hrs | N/A |
| First internal situation report (SITREP) issued | T+[45] min | T+[90] min | T+[3] hrs | T+[8] hrs |
| Board-level notification (if applicable) | T+[2] hrs | T+[4] hrs | As required | N/A |

### 5.2 External Stakeholder Notification Timeline

| Stakeholder | P1 – Critical | P2 – High | P3 – Medium | P4 – Low |
|---|---|---|---|---|
| BNM (Regulatory notification) | T+[X] hrs | T+[X] hrs | [As required] | N/A |
| NACSA (if cybersecurity incident) | T+[X] hrs | T+[X] hrs | As required | N/A |
| Customers (in-app / SMS / email) | T+[1] hr | T+[2] hrs | T+[4] hrs | N/A |
| Media / Public statement | As directed by [Approver] | As directed | N/A | N/A |
| Third-party vendors / partners | T+[1] hr | T+[2] hrs | T+[3] hrs | T+[8] hrs |
| Insurance provider | T+[4] hrs | T+[8] hrs | As required | N/A |
| MyCERT (if applicable) | T+[X] hrs | T+[X] hrs | N/A | N/A |

> **Note:** All regulatory notification timelines must be validated against the current version of BNM RMiT and applicable BNM circulars. The timelines above are placeholders and must be replaced with the specific hours/days mandated by the relevant regulatory instruments at the time of this document's approval.

### 5.3 Communication Channel Matrix

*Define the approved communication channels for each audience type and incident severity. Avoid ad hoc use of unofficial channels such as personal messaging applications for official crisis communications.*

| Audience | Channel (P1) | Channel (P2) | Channel (P3/P4) | Responsible Party |
|---|---|---|---|---|
| Crisis Management Team | [War room / Bridge call] | [Bridge call / Teams] | [Teams / Email] | Incident Commander |
| Board / Senior EXCO | [Direct call + formal email] | [Formal email + call] | [Email] | [CEO / CTO] |
| BNM | [Regulatory portal + direct call] | [Regulatory portal] | [Portal if required] | [CRO / Compliance] |
| All Staff | [Intranet / Email broadcast] | [Email broadcast] | [Email] | [Corp Comms] |
| Customers | [In-app banner / SMS / website] | [In-app / website] | [Website] | [Customer Comms] |
| Media | [Press release via Corp Comms] | [Holding statement] | N/A | [Corp Comms / CEO] |
| Vendors / Partners | [Dedicated partner email] | [Email / call] | [Email] | [Vendor Manager] |

---

## 6. Actions and Milestones

*Detail the sequential actions that must be taken from the point of incident detection through to resolution and close-out. This section should be actionable and specific enough to guide personnel under stress. Cross-reference with the Incident Response Plan [Document Reference].*

### 6.1 Phase 1: Detection and Initial Notification (T+0 to T+30 min)

| Step | Action | Responsible | Output |
|---|---|---|---|
| 1 | Incident detected via monitoring tool, customer complaint, or staff report | [SOC / IT Operations] | Incident ticket raised in [ITSM Tool] |
| 2 | Initial assessment and severity classification | [Incident Analyst / On-call Manager] | Classification recorded in ticket |
| 3 | Notify Incident Commander (P1/P2) | [On-call Manager] | Verbal/SMS confirmation |
| 4 | Activate Crisis Communication Team (P1/P2) | [Incident Commander] | Crisis team bridge call initiated |
| 5 | Notify Senior Management per escalation tree | [Incident Commander] | Verbal confirmation logged |
| 6 | Initiate internal communication hold — no unauthorised communications | [Incident Commander] | Comms hold acknowledged by team |

### 6.2 Phase 2: Assessment and Communication Activation (T+30 min to T+2 hrs)

| Step | Action | Responsible | Output |
|---|---|---|---|
| 7 | Conduct initial impact assessment (systems, customers, data) | [IT / CISO / Operations] | Impact assessment report |
| 8 | Draft first Situation Report (SITREP 1) | [Crisis Comms Lead] | SITREP 1 approved and distributed |
| 9 | Issue customer-facing initial advisory (if required) | [Customer Comms / Digital] | Advisory live on all channels |
| 10 | Submit initial regulatory notification to BNM (P1/P2) | [Compliance / CRO] | Submission reference number obtained |
| 11 | Notify NACSA if cybersecurity incident suspected | [CISO] | NACSA acknowledgement received |
| 12 | Activate vendor escalation (if third-party involved) | [Vendor Manager] | Vendor bridge call initiated |

### 6.3 Phase 3: Ongoing Management (T+2 hrs to Resolution)

| Step | Action | Responsible | Output |
|---|---|---|---|
| 13 | Issue SITREP updates at defined intervals ([every X hours]) | [Crisis Comms Lead] | SITREPs distributed per schedule |
| 14 | Monitor customer complaints, social media, and media coverage | [Customer Comms / Corp Comms] | Monitoring log updated |
| 15 | Update BNM and regulators as required | [Compliance / CRO] | Regulatory update submissions logged |
| 16 | Convene management update calls at defined intervals | [Incident Commander] | Call notes and decisions recorded |
| 17 | Prepare customer recovery communications (if service restored) | [Customer Comms] | Recovery advisory drafted |

### 6.4 Phase 4: Resolution and Close-Out

| Step | Action | Responsible | Output |
|---|---|---|---|
| 18 | Confirm incident resolved and services restored | [IT / Operations] | Resolution confirmed in ticket |
| 19 | Issue customer recovery notification | [Customer Comms / Digital] | Recovery communication live |
| 20 | Issue all-clear internal communication | [Incident Commander] | All-clear SITREP distributed |
| 21 | Submit final incident report to BNM (if required) | [Compliance / CRO] | Final regulatory submission |
| 22 | Initiate post-incident review (PIR) process | [Incident Commander / PIR Lead] | PIR scheduled within [X] days |
| 23 | Archive all incident communications | [Crisis Comms Lead] | Communications archived in [Repository] |

### 6.5 Key Milestones Summary

| Milestone | Target Time | Owner | Completion Criteria |
|---|---|---|---|
| Incident classified | T+[15/30] min | Incident Analyst | Classification recorded in ITSM |
| Crisis team activated | T+[30] min | Incident Commander | All team members confirmed on bridge |
| First SITREP issued | T+[45] min | Crisis Comms Lead | SITREP distributed to distribution list |
| Initial customer advisory live | T+[1] hr | Customer Comms | Advisory visible on all specified channels |
| BNM initial notification | T+[X] hrs | Compliance | Submission reference obtained |
| Service recovery communication | Within [Y] hrs of restoration | Customer Comms | Recovery message confirmed live |
| Post-incident review scheduled | Within [X] business days | PIR Lead | PIR date confirmed with stakeholders |

---

## 7. Accountable Owners and Contact Directory

*Maintain an up-to-date contact directory for all individuals with a defined role in this Plan. This directory must be reviewed and updated at minimum quarterly, or immediately upon any personnel change. Store a printed copy in the designated emergency response location.*

### 7.1 Crisis Communication Team Structure

| Role | Title | Department | Primary Responsibility |
|---|---|---|---|
| **Crisis Communication Lead** | [Name / TBC] | [Corporate Communications] | Overall coordination of all crisis communications |
| **Incident Commander** | [Name / TBC] | [IT / Operations] | Technical incident management and escalation authority |
| **Regulatory Liaison** | [Name / TBC] | [Compliance / Risk] | BNM and NACSA notifications and updates |
| **Customer Communication Manager** | [Name / TBC] | [Customer Experience / Marketing] | Customer-facing messaging across all channels |
| **Media / PR Manager** | [Name / TBC] | [Corporate Communications] | External media and public statement management |
| **Legal Counsel** | [Name / TBC] | [Legal] | Legal review of all external communications |
| **Technology Representative** | [Name / TBC] | [IT / CISO Office] | Technical accuracy review of communications |
| **Senior Management Sponsor** | [Name / TBC] | [C-Suite] | Executive authority and Board liaison |
| **Vendor Communication Manager** | [Name / TBC] | [Procurement / IT] | Third-party vendor coordination |

### 7.2 Emergency Contact Directory

*This directory must be stored securely and made available offline. Update immediately upon personnel changes.*

| Role | Name | Work Mobile | Personal Mobile | Email | Alternate Contact |
|---|---|---|---|---|---|
| Crisis Communication Lead | [Name] | [Number] | [Number] | [Email] | [Name] |
| Incident Commander | [Name] | [Number] | [Number] | [Email] | [Name] |
| CEO / Managing Director | [Name] | [Number] | [Number] | [Email] | [Name] |
| CTO / Head of Technology | [Name] | [Number] | [Number] | [Email] | [Name] |
| CISO | [Name] | [Number] | [Number] | [Email] | [Name] |
| Chief Risk Officer | [Name] | [Number] | [Number] | [Email] | [Name] |
| Head of Compliance | [Name] | [Number] | [Number] | [Email] | [Name] |
| BNM Supervisory Contact | [Name] | [Number] | N/A | [Email] | [BNM main line] |
| NACSA Emergency Line | N/A | [Number] | N/A | [Email] | [Website] |
| Primary IT Vendor | [Vendor] | [Number] | [Number] | [Email] | [Escalation] |

### 7.3 Escalation Tree

*Provide a visual or structured escalation path to ensure that the correct individuals are notified in the correct sequence. Refer to Appendix B for the full escalation flow diagram.*

**P1 – Critical Incident Escalation Path:**

```
[Detecting Party / SOC]
        ↓ (T+0 to T+15 min)
[On-Call IT Manager]
        ↓ (T+15 to T+30 min)
[Incident Commander] ←→ [CISO / CTO]
        ↓
[Crisis Communication Lead] ←→ [Head of Compliance / Regulatory Liaison]
        ↓
[CEO / Managing Director]
        ↓
[Board Notification (if applicable)]
        ↓ (Parallel)
[BNM] [NACSA] [Customer Comms] [Media / Corp Comms]
```

---

## 8. Communication Templates

*Pre-approved templates reduce response time, minimise errors, and ensure consistent messaging during high-pressure incidents. All templates require approval from [Legal / Compliance / Crisis Comms Lead] before use. Templates must be customised with incident-specific facts before issuance.*

### 8.1 Internal Situation Report (SITREP) Template

---

**SITUATION REPORT [NUMBER] — [CLASSIFICATION: CONFIDENTIAL / RESTRICTED]**
**Incident Reference:** [Incident ID]
**SITREP Issued By:** [Name, Role]
**Date/Time:** [DD/MM/YYYY HH:MM MYT]
**Distribution:** [Crisis Management Team / Senior Management / Board]

**1. INCIDENT SUMMARY**
[Brief description of the incident, systems affected, and current status in 3–5 sentences.]

**2. CURRENT STATUS**
- Severity Level: [P1 / P2 / P3 / P4]
- Incident Status: [Active / Monitoring / Resolved]
- Systems Affected: [List]
- Estimated Customers Impacted: [Number / Unknown]
- Estimated Time to Restoration: [ETA or Unknown]

**3. ACTIONS TAKEN**
- [Action 1 — Time — Owner]
- [Action 2 — Time — Owner]

**4. ACTIONS IN PROGRESS**
- [Action 1 — Owner — ETA]
- [Action 2 — Owner — ETA]

**5. RISKS AND CONCERNS**
[Any emerging risks, dependencies, or blockers.]

**6. REGULATORY STATUS**
- BNM Notified: [Yes / No / Pending] — Reference: [Ref No.]
- NACSA Notified: [Yes / No / N/A]
- Customer Communication Issued: [Yes / No / Pending]

**7. NEXT UPDATE**
[Date/Time of next SITREP]

**Incident Commander:** [Name]
**Crisis Comms Lead:** [Name]

---

### 8.2 Customer Notification — Initial Advisory Template

*Use this template for the first customer-facing communication when services are disrupted. Tone should be factual, empathetic, and free from technical jargon. Legal review is mandatory before release.*

---

**Subject / Heading:** Important Notice: [Service Name] Service Disruption

Dear Valued Customer,

We wish to inform you that [Organization Name] is currently experiencing a disruption affecting [Service Name / Description of impacted services, e.g., "our internet banking and mobile banking services"].

We sincerely apologise for any inconvenience this may cause.

**What has happened:**
[Brief, non-technical description of the issue without disclosing sensitive technical details.]

**Services affected:**
- [Service 1]
- [Service 2]

**Alternative services available:**
- [Alternative 1, e.g., "You may conduct transactions at any of our branches or ATMs."]
- [Alternative 2]

**What we are doing:**
Our technical teams are working urgently to restore services. We will provide updates every [X hours / as soon as further information is available].

We appreciate your patience and understanding. For urgent assistance, please contact our customer service at [Contact Number] or [Email Address].

*[Organization Name]*
*[Date and Time MYT]*

---

### 8.3 Customer Notification — Service Restoration Template

---

**Subject / Heading:** Service Restored — [Service Name]

Dear Valued Customer,

We are pleased to inform you that [Service Name] has been fully restored as of [Time MYT] on [Date].

We sincerely apologise for the inconvenience caused during the service disruption between [Start Time] and [End Time] on [Date].

[Optional: Brief, high-level explanation of what occurred, only if approved by Legal / Compliance.]

If you believe your account or transaction was affected during this period, please contact us at [Contact Number] or visit [Website / Branch] so we may assist you promptly.

We remain committed to providing you with reliable and secure services. Thank you for your continued trust in [Organization Name].

*[Organization Name]*
*[Date and Time MYT]*

---

### 8.4 BNM Regulatory Notification — Initial Report Template

*Submit via [BNM Regulatory Submission Portal / Designated Channel]. Consult the current BNM RMiT and BNM incident reporting guidelines for mandatory fields and submission format. This template is a guide only — the official submission format prescribed by BNM prevails.*

| Field | Content |
|---|---|
| **Institution Name** | [Organization Name] |
| **Reporting Date/Time** | [DD/MM/YYYY HH:MM MYT] |
| **Incident Reference** | [Internal Incident ID] |
| **Incident Type** | [e.g., Service Outage / Cybersecurity Incident / Data Breach] |
| **Date/Time of Incident Detection** | [DD/MM/YYYY HH:MM MYT] |
| **Systems / Services Affected** | [Description] |
| **Estimated Customer Impact** | [Number / Description] |
| **Financial Impact (if known)** | [Amount / Unknown] |
| **Current Incident Status** | [Active / Contained / Resolved] |
| **Actions Taken** | [Summary of response actions] |
| **Estimated Resolution Time** | [ETA or Unknown] |
| **Media / Public Exposure** | [Yes / No / Pending] |
| **Reporting Officer** | [Name, Title, Contact] |

### 8.5 Media / Press Statement — Holding Statement Template

*A holding statement is issued when media enquiries are received before a full statement is ready. It must be approved by [CEO / Legal / Corp Comms] before release. Do not speculate on cause, blame, or financial impact.*

---

**FOR IMMEDIATE RELEASE / HOLDING STATEMENT**
**[Date]**

**[Organization Name] is aware of reports regarding [brief, neutral description of issue].**

We can confirm that our teams are actively investigating [the matter / a technical issue] and we are working to [restore services / resolve the situation] as quickly as possible.

The safety and security of our customers' [accounts / data] remains our highest priority.

We will provide a further update at [Time] or as soon as additional information is available.

**Media Enquiries:**
[Corporate Communications Contact Name]
[Phone Number]
[Email Address]

---

### 8.6 All-Staff Internal Communication Template

---

**FROM:** [Crisis Communication Lead / CEO]
**TO:** All Staff
**SUBJECT:** [CONFIDENTIAL] Technology Incident Update — [Date]
**CLASSIFICATION:** Internal Use Only

Dear Colleagues,

[Organization Name] is currently managing a technology incident affecting [brief description of systems/services].

**What you need to know:**
- [Key fact 1]
- [Key fact 2]

**What you should do:**
- Direct all customer enquiries regarding this matter to [Customer Service / Designated Team].
- Do not discuss this incident on social media or with external parties.
- Do not provide any information to media. Refer all media enquiries to [Corporate Communications — Contact].
- Continue to serve customers using [alternative procedures / workarounds as specified].

Updates will be provided at [frequency / time]. If you have specific operational concerns, please contact [Designated Contact].

Thank you for your professionalism and support.

[Name]
[Title]

---

## 9. Regulatory and Stakeholder Notification Requirements

*This section consolidates all mandatory notification obligations. Compliance and Legal must verify these requirements against the current regulatory instruments prior to each plan review.*

### 9.1 BNM Notification Obligations

| Obligation | Trigger | Deadline | Responsible | Submission Channel |
|---|---|---|---|---|
| Initial incident notification | P1 / P2 technology incident | Within [X] hours of detection | Head of Compliance / CRO | [BNM Portal / Direct contact] |
| Progress update | Ongoing P1 incidents | Every [X] hours until resolved | Head of Compliance | [BNM Portal] |
| Final / root cause report | All P1 incidents; P2 as required | Within [X] calendar days of resolution | Head of Compliance / CTO | [BNM Portal] |
| Data breach notification | Confirmed or suspected personal data breach | [As per PDPA / BNM guidelines] | CISO / Head of Compliance | [Relevant authority] |

### 9.2 NACSA Notification Obligations

| Obligation | Trigger | Deadline | Responsible | Submission Channel |
|---|---|---|---|---|
| Cybersecurity incident report | Confirmed cybersecurity incident affecting critical infrastructure | Within [X] hours | CISO | [NACSA Portal / Email] |
| Follow-up report | As requested by NACSA | Per NACSA instruction | CISO / Compliance | [NACSA Portal] |

### 9.3 Other Notification Obligations

| Stakeholder | Trigger | Obligation | Responsible |
|---|---|---|---|
| PDPA Commissioner | Personal data breach | Notification per PDPA Section 30 and related guidelines | Legal / DPO |
| Malaysian Communications and Multimedia Commission (MCMC) | [If applicable] | [Relevant obligation] | [Responsible party] |
| MyCERT | Cybersecurity incidents | Voluntary / mandatory reporting per applicable guidelines | CISO |
| Cyber Insurance Provider | All P1 incidents; P2 if applicable | Policy notification requirement | [Risk / Finance] |
| Payment Network Operators (e.g., Visa, Mastercard, PayNet) | Payment system incidents | Per network operating rules and SLAs | [Payments / Technology] |

---

## 10. Post-Incident Review Process

*The post-incident review (PIR) is a mandatory component of the incident management lifecycle under BNM RMiT. It enables the Organisation to learn from incidents, improve processes, and demonstrate continuous improvement to regulators.*

### 10.1 PIR Objectives

- Identify the root cause(s) of the incident and contributing factors.
- Evaluate the effectiveness of the crisis communication response.
- Identify gaps, delays, or failures in the communication process.
- Document lessons learned and corrective actions.
- Update this Plan and related documentation as required.

### 10.2 PIR Trigger and Timeline

| Incident Severity | PIR Required? | PIR Completion Target | PIR Report Submission |
|---|---|---|---|
| P1 – Critical | Mandatory | Within [X] business days of resolution | [Head of Technology / Board Risk Committee] |
| P2 – High | Mandatory | Within [X] business days of resolution | [Head of Technology / Senior Management] |
| P3 – Medium | Recommended | Within [X] business days of resolution | [IT Management] |
| P4 – Low | Optional | As deemed necessary | [IT Management] |

### 10.3 PIR Process Steps

| Step | Activity | Responsible | Output |
|---|---|---|---|
| 1 | Schedule PIR meeting within [X] business days of incident resolution | Incident Commander / PIR Lead | Meeting invite issued |
| 2 | Compile incident timeline, communications log, and actions taken | Crisis Comms Lead / Incident Analyst | Incident chronology document |
| 3 | Conduct PIR meeting with all key stakeholders | PIR Lead | Meeting notes and action items |
| 4 | Analyse root cause using [RCA methodology, e.g., 5 Whys, Fishbone] | Technical Lead / PIR Lead | Root Cause Analysis (RCA) report |
| 5 | Evaluate communication effectiveness against this Plan | Crisis Comms Lead | Communication gap analysis |
| 6 | Define corrective actions with owners and deadlines | All PIR participants | Corrective Action Register |
| 7 | Draft and review PIR report | PIR Lead | PIR report (draft) |
| 8 | Obtain approval and distribute PIR report | [Approving Authority] | Final PIR report distributed |
| 9 | Update this Plan and related documents if required | Crisis Comms Lead / Plan Owner | Updated plan version |
| 10 | Track corrective actions to closure | [Risk / Compliance] | Corrective Action Register updated |

### 10.4 Communication Effectiveness Review Criteria

*During the PIR, assess the following criteria to evaluate how well this Plan performed during the incident:*

| Evaluation Criterion | Target | Actual | Gap | Corrective Action |
|---|---|---|---|---|
| Time to first SITREP | T+[X] min | [Actual] | [Gap] | [Action] |
| Time to initial customer advisory | T+[X] min | [Actual] | [Gap] | [Action] |
| BNM notification timeliness | Within [X] hrs | [Actual] | [Gap] | [Action] |
| Accuracy of initial communications | No material corrections required | [Actual] | [Gap] | [Action] |
| Stakeholder satisfaction (internal) | [Target] | [Survey result] | [Gap] | [Action] |
| Use of approved templates | 100% compliance | [Actual] | [Gap] | [Action] |

---

## 11. Roles and Responsibilities

*This RACI matrix defines accountability for all key activities within this Plan. R = Responsible (does the work), A = Accountable (owns the outcome), C = Consulted (provides input), I = Informed (receives updates).*

| Activity | Crisis Comms Lead | Incident Commander | Head of Compliance | CISO | CEO / EXCO | Customer Comms | Corp Comms / PR | Legal | IT / Technology |
|---|---|---|---|---|---|---|---|---|---|
| Activate Crisis Communication Plan | R | A | I | I | I | I | I | I | I |
| Classify incident severity | C | A | C | C | I | I | I | I | R |
| Issue internal SITREP | R/A | C | C | C | I | I | I | C | C |
| Approve customer communications | C | I | C | I | A | R | C | C | I |
| Distribute customer communications | I | I | I | I | I | R/A | C | I | I |
| Notify BNM / regulators | C | I | R/A | C | I | I | I | C | C |
| Notify NACSA | I | I | C | R/A | I | I | I | I | C |
| Manage media / press enquiries | C | I | I | I | A | I | R | C | I |
| Legal review of communications | C | I | C | I | A | C | C | R | I |
| Vendor / third-party communication | C | A | I | C | I | I | I | I | R |
| Board notification | C | C | C | C | R/A | I | I | I | I |
| Post-incident review (lead) | C | A | C | C | I | C | I | I | R |
| Update this Plan post-PIR | R/A | C | C | C | I | C | I | C | C |
| Archive incident communications | R/A | I | I | I | I | C | C | I | I |

---

## 12. Training and Awareness

*A communication plan is only effective if those responsible for executing it are trained and familiar with its contents.*

### 12.1 Training Requirements

| Training Activity | Target Audience | Frequency | Delivery Method | Responsible |
|---|---|---|---|---|
| Crisis Communication Plan orientation | All Crisis Communication Team members | On joining team; after material plan update | Briefing / workshop | Crisis Comms Lead |
| Tabletop exercise — communication scenario | Crisis Communication Team + Senior Management | Annually (minimum) | Facilitated tabletop | [Business Continuity / Crisis Comms Lead] |
| Full simulation exercise | Crisis Communication Team | [Annually / Bi-annually] | Simulated incident drill | [BCM Team] |
| Awareness briefing — all staff | All employees | Annually | [e-Learning / Townhall] | [HR / Corp Comms] |
| Regulatory notification procedure training | Compliance and Risk teams | Annually; after regulatory change | Briefing | Head of Compliance |

### 12.2 Training Record

*Maintain training records in [Training Management System / HR System]. Records must be available for regulatory review on request.*

| Participant Name | Role | Training Activity | Date Completed | Facilitator | Next Due Date |
|---|---|---|---|---|---|
| [Name] | [Role] | [Training] | [Date] | [Name] | [Date] |

---

## 13. Plan Maintenance and Testing

### 13.1 Review Schedule

| Review Type | Frequency | Trigger | Responsible | Approver |
|---|---|---|---|---|
| Scheduled quarterly review | Quarterly | Calendar-based | Crisis Comms Lead / Plan Owner | [Department Head / CRO] |
| Post-incident review update | After every P1/P2 incident | PIR completion | Crisis Comms Lead | [Department Head] |
| Regulatory change review | As required | New or amended BNM / regulatory guidance | Head of Compliance | [CRO / CEO] |
| Contact directory update | Immediately upon change | Personnel changes | Crisis Comms Lead | Crisis Comms Lead |
| Material plan revision | As required | Significant organisational, technology, or regulatory change | Crisis Comms Lead | [Approving Authority] |

### 13.2 Testing and Exercise Schedule

| Exercise Type | Frequency | Last Conducted | Next Scheduled | Outcome |
|---|---|---|---|---|
| Tabletop exercise | Annually | [Date] | [Date] | [Pass / Gaps identified] |
| Communication drill (partial activation) | [Semi-annually] | [Date] | [Date] | [Result] |
| Full simulation | [Annually / Bi-annually] | [Date] | [Date] | [Result] |
| Contact directory verification call | Quarterly | [Date] | [Date] | [Result] |

---

## 14. Review and Approval

### 14.1 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Title] | Initial document creation | [Approver Name, Title] |
| [1.1] | [DD/MM/YYYY] | [Author Name, Title] | [Description of changes] | [Approver Name, Title] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Title] | [Description of changes] | [Approver Name, Title] |

### 14.2 Approval Sign-Off

*This document requires formal approval from the following designated authorities prior to implementation and at each subsequent version release.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner — [Department Head] | [Name] | ________________________ | [Date] |
| Chief Technology Officer | [Name] | ________________________ | [Date] |
| Chief Risk Officer | [Name] | ________________________ | [Date] |
| Head of Compliance | [Name] | ________________________ | [Date] |
| Chief Executive Officer | [Name] | ________________________ | [Date] |
| [Board Risk Committee Chair / BRCC] | [Name] | ________________________ | [Date] |

---

## 15. References

*List all regulatory instruments, internal policies, and standards that this document references or is required to comply with.*

| Reference | Document Title | Issuing Authority | Applicable Clause(s) | Version / Date |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | 10.35 (Crisis Communication); 10.28–10.34 (Incident Management) | [Current Version] |
| BNM BCM | Business Continuity Management Policy Document | Bank Negara Malaysia | [Relevant Sections] | [Current Version] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 30 (Data Breach Notification) | 2010 (as amended) |
| NACSA Guidelines | National Cybersecurity Agency Guidelines on Cybersecurity Incident Reporting | NACSA | [Relevant Sections] | [Current Version] |
| [Internal Policy] | Technology Incident Management Policy | [Organization Name] | All | [Version] |
| [Internal Policy] | Business Continuity Plan | [Organization Name] | All | [Version] |
| [Internal Policy] | Information Security Policy | [Organization Name] | All | [Version] |
| [Internal Policy] | Data Breach Response Plan | [Organization Name] | All | [Version] |
| [Internal Standard] | [Relevant ISO / industry standard, e.g., ISO 22301, ISO/IEC 27035] | [Issuing Body] | [Relevant Sections] | [Current Version] |

---

## 16. Appendices

### Appendix A — Subsidiaries and Entities in Scope

*List all legal entities, subsidiaries, and branches of [Organization Name] to which this Plan applies.*

| Entity Name | Registration No. | Relationship | Location | Included in Scope? |
|---|---|---|---|---|
| [Organization Name] (Head Office) | [Reg. No.] | Parent | [Location] | Yes |
| [Subsidiary Name] | [Reg. No.] | Subsidiary | [Location] | [Yes / No] |
| [Branch Name] | N/A | Branch | [Location] | [Yes / No] |

---

### Appendix B — Escalation Flow Diagram

*Insert the crisis communication escalation flow diagram here. The diagram should visually represent the escalation path from incident detection through to resolution and regulatory notification for P1 and P2 incidents.*

> **[PLACEHOLDER: Insert escalation flow diagram — recommended format: swimlane or flowchart illustrating roles, decision points, and notification paths by severity level.]**

---

### Appendix C — Distribution List

*This Plan must be distributed to all individuals with a defined role in its execution. Maintain a record of all distribution.*

| Name | Role | Distribution Date | Version | Acknowledgement Date |
|---|---|---|---|---|
| [Name] | Crisis Communication Lead | [Date] | [Version] | [Date] |
| [Name] | Incident Commander | [Date] | [Version] | [Date] |
| [Name] | Head of Compliance | [Date] | [Version] | [Date] |
| [Name] | CISO | [Date] | [Version] | [Date] |
| [Name] | CEO | [Date] | [Version] | [Date] |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia |
| **Crisis Communication Team** | The designated group of individuals responsible for executing this Plan during a technology incident |
| **Incident Commander** | The individual with overall authority and accountability for managing the technical incident response |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PDPA** | Personal Data Protection Act 2010 |
| **PIR** | Post-Incident Review — a structured review conducted after an incident to identify root causes and lessons learned |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| **RTO** | Recovery Time Objective — the maximum acceptable duration of a service outage |
| **SITREP** | Situation Report — a structured update issued at regular intervals during an active incident |
| **P1 / P2 / P3 / P4** | Incident severity classification levels as defined in Section 4 of this document |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles and responsibilities |

---

### Appendix E — Corrective Action Register

*Use this register to track all corrective actions arising from post-incident reviews, exercises, and plan audits.*

| Action ID | Source (PIR / Exercise / Audit) | Finding | Corrective Action | Owner | Priority | Due Date | Status | Closure Date |
|---|---|---|---|---|---|---|---|---|
| [CA-001] | [Source] | [Finding description] | [Action description] | [Name] | [High/Med/Low] | [Date] | [Open/Closed] | [Date] |

---

### Appendix F — Regulatory Quick Reference Card

*A condensed one-page quick reference for Crisis Communication Team members to use during an active incident. Print and store in the designated emergency response kit.*

**[Organization Name] — Crisis Communications Quick Reference**

| If severity is... | Notify within... | Who to notify | How |
|---|---|---|---|
| P1 – Critical | [X] min — Internal senior management | Incident Commander → CEO, CTO, CRO | Phone call |
| P1 – Critical | [X] hrs — BNM | Head of Compliance | [BNM Portal / Phone] |
| P1 – Critical | [X] hrs — Customers | Customer Comms Manager | SMS / In-app / Website |
| P2 – High | [X] min — Internal senior management | Incident Commander → CTO, CRO | Phone call |
| P2 – High | [X] hrs — BNM | Head of Compliance | [BNM Portal] |
| Any cybersecurity incident | [X] hrs — NACSA | CISO | [NACSA Portal / Phone] |
| Any suspected data breach | [Per PDPA] — PDPA Commissioner | Legal / DPO | [Regulatory channel] |

**Key contacts — print with current numbers before storing:**

- Crisis Comms Lead: _______________
- Incident Commander: _______________
- BNM Supervisory Contact: _______________
- NACSA Emergency Line: _______________
- Legal Counsel: _______________

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] | [Document ID] | Version 1.0 | Last Reviewed: [Date]**

*This document contains confidential and commercially sensitive information proprietary to [Organization Name]. It must not be copied, distributed, or disclosed to any third party without prior written authorisation from the document owner. This document must be reviewed and updated in accordance with the schedule set out in Section 13.*