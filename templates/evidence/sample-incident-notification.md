# Sample Incident Notification

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Regulatory Affairs |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Effective Date:** [Effective Date]

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be distributed outside [Organization Name] without the explicit written approval of the Head of Regulatory Affairs. All printed copies are considered uncontrolled documents.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset and Item Identification](#2-asset-and-item-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian](#4-owner-and-custodian)
5. [Incident Classification Matrix](#5-incident-classification-matrix)
6. [Escalation Timelines](#6-escalation-timelines)
7. [Communication Templates](#7-communication-templates)
8. [Post-Incident Review Process](#8-post-incident-review-process)
9. [Notification Trigger Criteria](#9-notification-trigger-criteria)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the official **Sample Incident Notification** template and evidence record for [Organization Name] in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 11.4**, which mandates timely notification to BNM upon the occurrence of a technology-related incident that materially affects operations, customers, or the integrity of financial systems.

This template fulfils two functions:

- Provides a standardised structure for capturing incident details at the point of occurrence, ensuring completeness and consistency of evidence.
- Serves as the formal notification record submitted to BNM and retained for regulatory audit purposes.

### 1.2 Scope

*Define the organisational and technological boundaries to which this incident notification applies. Include all in-scope entities, systems, and operations.*

This document applies to:

- All technology systems, platforms, and infrastructure operated or managed by [Organization Name], including those hosted on-premises, in the cloud, or through third-party service providers.
- All personnel, contractors, and third parties involved in the management, operation, or support of in-scope technology assets.
- All technology-related incidents that meet the notification thresholds defined in Section 9 of this document.
- Subsidiary entities of [Organization Name]: [List subsidiaries if applicable, or state "Not Applicable"].

**Exclusions:**

- Planned maintenance activities that are communicated to customers in advance and do not result in material service degradation.
- Incidents fully contained within non-production environments with no customer or regulatory impact.

### 1.3 Regulatory Context

*Provide a brief summary of the regulatory obligation driving this notification requirement.*

BNM RMiT Clause 11.4 requires financial institutions to:

1. Notify BNM **within 1 hour** of detecting a material technology-related incident.
2. Provide a **preliminary notification** with the information available at the time.
3. Submit a **full incident report** within the timeframe specified by BNM (typically within 14 calendar days of incident resolution).
4. Maintain records of all incident notifications and supporting evidence for a minimum of **seven (7) years**.

---

## 2. Asset and Item Identification

*Record all technology assets, systems, and items directly involved in or affected by the incident. Provide sufficient detail to enable regulatory review and forensic investigation if required.*

### 2.1 Incident Reference Information

| Field | Details |
|---|---|
| **Incident Reference Number** | [INC-YYYY-NNNN] |
| **Date and Time of Detection** | [DD/MM/YYYY HH:MM (MYT)] |
| **Date and Time of Occurrence** | [DD/MM/YYYY HH:MM (MYT)] |
| **Date and Time of Containment** | [DD/MM/YYYY HH:MM (MYT)] |
| **Date and Time of Resolution** | [DD/MM/YYYY HH:MM (MYT)] |
| **Reporting Date** | [DD/MM/YYYY] |
| **Reported By** | [Full Name, Designation] |
| **Incident Status** | [Open / Contained / Resolved / Closed] |

### 2.2 Affected Asset Register

*List every technology asset involved in the incident. Include all systems that were directly impacted, acted as a vector, or were observed to exhibit anomalous behaviour during the incident window.*

| Asset ID | Asset Name | Asset Type | Environment | Hosting Model | Business Function |
|---|---|---|---|---|---|
| [ASSET-001] | [System/Application Name] | [Server / Application / Database / Network Device / Endpoint / Cloud Service] | [Production / UAT / DR] | [On-Premises / Cloud / Hybrid / Third-Party] | [Business function supported] |
| [ASSET-002] | | | | | |
| [ASSET-003] | | | | | |

### 2.3 Affected Services and Channels

*Identify all customer-facing and internal services that were disrupted or degraded during the incident.*

| Service Name | Channel | Impact Type | Affected Region/Branch | Customer Segment Impacted |
|---|---|---|---|---|
| [e.g. Internet Banking] | [Web / Mobile / API / Branch / ATM] | [Unavailable / Degraded / Partial] | [e.g. Nationwide / KL Region] | [e.g. Retail / SME / Corporate] |
| | | | | |

### 2.4 Data Assets Involved

*Describe any data assets that were accessed, exfiltrated, corrupted, or destroyed as a result of the incident.*

| Data Category | Estimated Records Affected | Sensitivity Classification | Storage Location | Data Residency |
|---|---|---|---|---|
| [e.g. Customer PII] | [Number or "Unknown at time of report"] | [Public / Internal / Confidential / Restricted] | [Database / File Server / Cloud Storage] | [Malaysia / Overseas] |
| | | | | |

**Personal Data Involvement (PDPA Consideration):**

- Personal data of customers affected: **[Yes / No / Under Investigation]**
- If yes, estimated number of individuals: **[Number]**
- PDPA breach notification assessment: **[Required / Not Required / Pending Assessment]**

---

## 3. Classification and Categorisation

*Apply the organisation's incident taxonomy to accurately categorise the incident. Correct classification drives appropriate escalation, notification, and response procedures.*

### 3.1 Incident Category

*Select the primary incident category that best describes the nature of the incident. Multiple categories may apply.*

| Category | Sub-Category | Applicable (Y/N) |
|---|---|---|
| Cybersecurity | Unauthorised Access | |
| Cybersecurity | Malware / Ransomware | |
| Cybersecurity | Denial of Service (DoS/DDoS) | |
| Cybersecurity | Data Breach / Exfiltration | |
| Cybersecurity | Phishing / Social Engineering | |
| Technology Failure | Hardware Failure | |
| Technology Failure | Software Defect / Bug | |
| Technology Failure | Database Corruption | |
| Technology Failure | Network / Connectivity Failure | |
| Third-Party / Vendor | Vendor System Outage | |
| Third-Party / Vendor | Third-Party Security Incident | |
| Operational | Human Error | |
| Operational | Configuration Error | |
| Physical | Physical Security Breach | |
| Physical | Environmental (Power / Cooling) | |

**Primary Incident Category:** [Selected Category]
**Primary Sub-Category:** [Selected Sub-Category]

### 3.2 Incident Severity Classification

*Assign the severity level based on the impact assessment criteria defined in Section 5 (Incident Classification Matrix).*

| Dimension | Assessment |
|---|---|
| **Severity Level** | [Critical (P1) / High (P2) / Medium (P3) / Low (P4)] |
| **Business Impact** | [Catastrophic / Major / Moderate / Minor] |
| **Customer Impact** | [Yes — [Number] customers / No] |
| **Financial Impact (Estimated)** | [MYR [Amount] / Not Quantifiable at this time] |
| **Reputational Impact** | [High / Medium / Low] |
| **Regulatory Reporting Required** | [Yes / No] |
| **BNM Notification Required** | [Yes / No] |

### 3.3 Incident Phase

*Indicate the current phase of the incident lifecycle at the time of this notification.*

- [ ] Detection and Initial Triage
- [ ] Containment
- [ ] Eradication
- [ ] Recovery
- [ ] Post-Incident Review
- [ ] Closed

---

## 4. Owner and Custodian

*Identify all personnel responsible for the assets involved in the incident and for managing the incident response. This information is required for regulatory accountability.*

### 4.1 Incident Response Ownership

| Role | Full Name | Designation | Department | Contact Number | Email |
|---|---|---|---|---|---|
| **Incident Commander** | [Name] | [Designation] | [Department] | [Number] | [Email] |
| **Technical Lead** | [Name] | [Designation] | [Department] | [Number] | [Email] |
| **Business Owner** | [Name] | [Designation] | [Department] | [Number] | [Email] |
| **Regulatory Reporting Lead** | [Name] | [Designation] | [Department] | [Number] | [Email] |
| **Communications Lead** | [Name] | [Designation] | [Department] | [Number] | [Email] |
| **Legal / Compliance Advisor** | [Name] | [Designation] | [Department] | [Number] | [Email] |

### 4.2 Affected Asset Ownership

*For each affected asset identified in Section 2.2, record the designated owner and custodian responsible under [Organization Name]'s asset management framework.*

| Asset ID | Asset Name | System Owner | Business Owner | Technical Custodian | Vendor / Third-Party |
|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [Name, Dept] | [Name, Dept] | [Name, Dept] | [Vendor Name / N/A] |
| [ASSET-002] | | | | | |

### 4.3 Third-Party Involvement

*Record details of any external parties involved in the incident, either as parties affected, vendors supporting resolution, or entities that caused or contributed to the incident.*

| Party Name | Relationship | Role in Incident | Contact Person | Contact Details | SLA / Contract Reference |
|---|---|---|---|---|---|
| [Vendor / Partner Name] | [Service Provider / Cloud Provider / Outsourced Operations] | [Affected / Contributing / Responding] | [Name] | [Contact] | [Contract Ref] |
| | | | | | |

---

## 5. Incident Classification Matrix

*This matrix defines the severity tiers used by [Organization Name] to classify technology incidents for the purposes of internal escalation and BNM notification. All personnel involved in incident response must refer to this matrix during initial triage.*

### 5.1 Severity Classification Criteria

| Severity Level | Label | Service Availability | Customer Impact | Financial Impact | Regulatory Trigger | Response SLA |
|---|---|---|---|---|---|---|
| **P1** | Critical | Complete outage of critical system or channel (>0 minutes) | >10,000 customers OR any corporate/institutional customer | >MYR 1 million or unquantifiable systemic risk | **Immediate BNM notification required** | Incident Commander on-call within 15 minutes |
| **P2** | High | Significant degradation of critical system; partial outage of non-critical system | 1,000–10,000 customers | MYR 100,000–MYR 1 million | BNM notification required within 1 hour | Response within 30 minutes |
| **P3** | Medium | Degraded performance; workaround available | <1,000 customers; no corporate impact | MYR 10,000–MYR 100,000 | Internal escalation only; assess for BNM reporting | Response within 2 hours |
| **P4** | Low | Minimal impact; no customer disruption | No customers affected | <MYR 10,000 | No external reporting required | Response within 8 business hours |

*Note: Severity levels may be upgraded at any point during the incident lifecycle if conditions change. Downgrade requires approval from the Incident Commander and CISO.*

### 5.2 Critical System Classification

*List the systems designated as critical by [Organization Name] in accordance with BNM RMiT Appendix 5 requirements. Any incident affecting these systems is automatically assessed for P1/P2 classification.*

| System Name | Criticality Designation | RMiT Reference | Last Review Date |
|---|---|---|---|
| [e.g. Core Banking System] | Critical | RMiT Appendix 5 | [Date] |
| [e.g. Internet Banking Platform] | Critical | RMiT Appendix 5 | [Date] |
| [e.g. Payment Processing Gateway] | Critical | RMiT Appendix 5 | [Date] |
| [e.g. ATM Network Management System] | Critical | RMiT Appendix 5 | [Date] |

### 5.3 BNM Reportable Incident Criteria

*An incident is automatically reportable to BNM if any of the following conditions are met:*

- [ ] Outage or material degradation of any critical system lasting more than **[X] minutes**
- [ ] Data breach involving personal data of **[number]** or more customers
- [ ] Any cybersecurity incident affecting the integrity of financial transactions
- [ ] Any incident assessed as P1 or P2 under the classification matrix above
- [ ] Any incident resulting in financial loss exceeding **MYR [threshold]**
- [ ] Any incident that attracts or is likely to attract significant media attention
- [ ] Any incident directed at [Organization Name]'s infrastructure by a state-sponsored or advanced persistent threat (APT) actor
- [ ] Incident involving compromise of privileged administrator credentials

---

## 6. Escalation Timelines

*All escalation timelines below are mandatory unless stated otherwise. Deviation from these timelines must be documented and approved by the Chief Information Security Officer (CISO) or Chief Risk Officer (CRO).*

### 6.1 Mandatory Escalation Timeline — BNM Notification

| Milestone | Timeline | Responsible Party | Recipient | Method |
|---|---|---|---|---|
| Initial Detection | T+0 | Detecting Personnel | IT Service Desk / SOC | Ticketing System / Phone |
| Severity Assessment Complete | T+15 minutes | SOC Analyst / IT Manager | Incident Commander | Phone / Secure Messaging |
| Incident Commander Engaged | T+30 minutes | SOC / IT Manager | Incident Commander | Phone |
| CISO / CRO Notified | T+30 minutes | Incident Commander | CISO, CRO | Phone |
| BNM Preliminary Notification (if P1/P2) | **T+1 hour** | Head of Regulatory Affairs | BNM Supervisor | BNM BNMLINK / Email / Phone |
| CEO / Board Notified (P1) | T+2 hours | CRO | CEO, Board Chairman | Phone, Secure Briefing |
| Updated Status Report to BNM | T+4 hours | Head of Regulatory Affairs | BNM Supervisor | BNM BNMLINK |
| Containment Confirmation | As achieved | Incident Commander | CISO, CRO, CEO | Incident Management Platform |
| Full Incident Report to BNM | T+14 calendar days from resolution | Head of Regulatory Affairs | BNM Supervisor | BNM BNMLINK |
| Post-Incident Review Completed | T+30 calendar days from resolution | Incident Commander | CISO, Risk Committee | Internal Report |

### 6.2 Internal Escalation Matrix

| Incident Severity | Notify Immediately | Notify Within 30 Min | Notify Within 1 Hour | Board Notification |
|---|---|---|---|---|
| P1 — Critical | SOC Manager, CISO, CRO, Incident Commander | CEO, Head of Regulatory Affairs, Legal | Board Chairman, Audit Committee Chair | Within 2 hours |
| P2 — High | SOC Manager, CISO, Incident Commander | CRO, Head of Regulatory Affairs | CEO | Within 4 hours |
| P3 — Medium | IT Manager, Incident Lead | CISO | CRO | Not required unless escalated |
| P4 — Low | IT Manager | — | — | Not required |

### 6.3 Escalation Contact Directory

| Role | Primary Contact | Mobile | Alternate Contact | Mobile |
|---|---|---|---|---|
| CISO | [Name] | [Number] | [Name] | [Number] |
| CRO | [Name] | [Number] | [Name] | [Number] |
| CEO | [Name] | [Number] | [Name] | [Number] |
| Head of Regulatory Affairs | [Name] | [Number] | [Name] | [Number] |
| BNM Supervisor (Primary) | [BNM Contact Name] | [Number] | [BNM Contact Name] | [Number] |
| BNM BNMLINK Portal | bnmlink.bnm.gov.my | — | — | — |

---

## 7. Communication Templates

*The following pre-approved templates must be used for all formal communications related to a reportable technology incident. Templates must be completed by the Head of Regulatory Affairs and reviewed by Legal before transmission to BNM.*

### 7.1 Template A — BNM Preliminary Notification (T+1 Hour)

---

**TO:** [BNM Supervisor Name], Bank Negara Malaysia
**FROM:** [Head of Regulatory Affairs Name], [Organization Name]
**DATE:** [DD/MM/YYYY]
**TIME:** [HH:MM MYT]
**SUBJECT:** PRELIMINARY INCIDENT NOTIFICATION — [Incident Reference Number] — [Organization Name]
**CLASSIFICATION:** CONFIDENTIAL

Dear [BNM Supervisor Name],

In accordance with Clause 11.4 of BNM's Risk Management in Technology (RMiT) Policy Document, [Organization Name] (Licence No. [BNM Licence Number]) hereby provides preliminary notification of a technology-related incident.

**1. Incident Overview**

- **Incident Reference:** [INC-YYYY-NNNN]
- **Date and Time of Detection:** [DD/MM/YYYY HH:MM MYT]
- **Estimated Date and Time of Occurrence:** [DD/MM/YYYY HH:MM MYT]
- **Incident Category:** [Category]
- **Severity Level:** [P1 / P2]
- **Current Status:** [In Progress / Contained / Resolved]

**2. Systems and Services Affected**

[Brief description of affected systems and services]

**3. Customer Impact**

[Brief description of customer impact, including estimated number of affected customers]

**4. Actions Taken**

[Summary of immediate response actions taken]

**5. Current Status**

[Current situation as of the time of this notification]

**6. Next Update**

[Organization Name] will provide an updated status report by [DD/MM/YYYY HH:MM MYT] or earlier if there are material developments.

Should you require any further information, please contact:

**[Head of Regulatory Affairs Name]**
[Designation]
[Organization Name]
Tel: [Number] | Email: [Email]

Yours faithfully,

**[Head of Regulatory Affairs Name]**
Head of Regulatory Affairs
[Organization Name]

---

### 7.2 Template B — BNM Status Update Communication

---

**TO:** [BNM Supervisor Name], Bank Negara Malaysia
**FROM:** [Head of Regulatory Affairs Name], [Organization Name]
**DATE:** [DD/MM/YYYY]
**TIME:** [HH:MM MYT]
**SUBJECT:** STATUS UPDATE [Update Number] — [Incident Reference Number] — [Organization Name]
**REFERENCE:** [Reference to previous notification]

**Incident Status as at [DD/MM/YYYY HH:MM MYT]:**

| Field | Details |
|---|---|
| Incident Reference | [INC-YYYY-NNNN] |
| Previous Status | [Status from last update] |
| Current Status | [Current status] |
| Systems Restored | [Yes / Partial / No] |
| Customers Impacted | [Number] |

**Progress Update:**
[Description of progress made since last update]

**Outstanding Actions:**
[Description of remaining actions and estimated timelines]

**Next Update:** [DD/MM/YYYY HH:MM MYT]

---

### 7.3 Template C — Customer Communication (For Review by Legal)

*This template requires Legal approval before issuance. Content must be factually accurate and must not admit liability.*

---

**Dear Valued Customer,**

We wish to inform you that [Organization Name] recently experienced a technical issue that may have affected [description of services] between [time range].

We sincerely apologise for any inconvenience caused.

**What happened:** [Brief, plain-language description of the incident and its effect on services]

**What we did:** Our team detected the issue and immediately took steps to restore services. [Service name] was fully restored as of [time].

**What you should do:** [Instructions, if any, e.g., "No action is required on your part" OR "If you notice any unauthorised transactions, please contact us immediately at [number]."]

Your security and the protection of your information remain our highest priority. If you have any questions, please contact us at [Customer Service Number] or visit [Branch / Website].

Thank you for your continued trust in [Organization Name].

---

### 7.4 Template D — Internal Staff Notification

*To be distributed via internal communications channels only. Do not forward externally.*

---

**[INTERNAL — CONFIDENTIAL]**

**TO:** [Relevant Staff Groups, e.g., All Branch Managers / All Contact Centre Staff]
**FROM:** [CISO / COO Name]
**DATE:** [DD/MM/YYYY]
**SUBJECT:** Internal Advisory — Technology Incident [INC-YYYY-NNNN]

We are currently managing a technology incident affecting [affected systems/services]. Our incident response team is working to resolve this as a priority.

**Impact:** [Brief description]
**Current Status:** [Status]
**Customer Guidance:** If customers enquire, please advise them that [approved customer message].
**Do Not:** Comment to the media, post on social media, or speculate about the cause of the incident.

Further updates will be provided by [time]. Please direct all enquiries to [Contact Name].

---

---

## 8. Post-Incident Review Process

*A formal Post-Incident Review (PIR) must be conducted for all P1 and P2 incidents, and for any P3 incident that resulted in BNM notification or regulatory action. The PIR report must be submitted to the Risk Committee within 30 calendar days of incident resolution.*

### 8.1 Post-Incident Review Schedule

| Activity | Timeline | Responsible | Output |
|---|---|---|---|
| PIR Initiation | Within 5 business days of resolution | Incident Commander | PIR kickoff notification |
| Evidence and log collection | Within 7 calendar days of resolution | Technical Lead | Evidence package |
| Root Cause Analysis (RCA) | Within 10 calendar days of resolution | Technical Lead, SOC | RCA report |
| Draft PIR Report | Within 20 calendar days of resolution | Incident Commander | Draft PIR |
| PIR Review — CISO / CRO | Within 25 calendar days of resolution | CISO, CRO | Reviewed and amended PIR |
| Final PIR Report | Within 30 calendar days of resolution | Head of Regulatory Affairs | Final signed PIR |
| Risk Committee Presentation | Within 45 calendar days of resolution | CRO | Board/Committee minutes |
| Full Incident Report to BNM | Within 14 calendar days of resolution | Head of Regulatory Affairs | BNM submission |

### 8.2 Root Cause Analysis Structure

*Complete the following root cause analysis for all PIRs. The RCA methodology used must be documented.*

**RCA Methodology Used:** [5 Whys / Fishbone / Fault Tree Analysis / Other: specify]

| Layer | Finding |
|---|---|
| **Immediate Cause** | [The direct technical or human action that triggered the incident] |
| **Contributing Cause(s)** | [Factors that allowed the immediate cause to occur or escalate] |
| **Root Cause** | [The fundamental systemic failure that, if addressed, would prevent recurrence] |
| **Systemic Issues Identified** | [Broader organisational, process, or technology gaps] |

### 8.3 Lessons Learned and Corrective Action Plan

*Document all agreed corrective and preventive actions. Each action must have an accountable owner and a committed completion date.*

| Action ID | Lesson Learned | Corrective Action | Action Owner | Priority | Target Completion | Status |
|---|---|---|---|---|---|---|
| [CA-001] | [Description of gap or learning] | [Specific action to address it] | [Name, Designation] | [High / Medium / Low] | [DD/MM/YYYY] | [Not Started / In Progress / Completed] |
| [CA-002] | | | | | | |
| [CA-003] | | | | | | |

### 8.4 PIR Report Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Incident Commander | | | |
| CISO | | | |
| CRO | | | |
| Head of Regulatory Affairs | | | |

---

## 9. Notification Trigger Criteria

*This section defines the precise conditions that obligate [Organization Name] to notify BNM under Clause 11.4 of the RMiT Policy Document. All personnel with incident detection or response responsibilities must be familiar with these criteria.*

### 9.1 Automatic Notification Triggers

*Any single criterion below, when confirmed or reasonably suspected, obligates immediate initiation of the BNM notification process. Do not wait for full confirmation of impact before notifying.*

| Trigger ID | Trigger Condition | Threshold | Evidence Required |
|---|---|---|---|
| T-01 | Outage of critical banking system | Duration > [X] minutes | System monitoring alert, helpdesk tickets |
| T-02 | Payment system disruption | Any disruption to interbank or card payment processing | Transaction log anomalies, acquirer/processor notification |
| T-03 | Cybersecurity breach | Confirmed or suspected unauthorised access to any production system | SOC alert, forensic indicators |
| T-04 | Data breach | Any confirmed or suspected exfiltration of customer data | SIEM alert, endpoint detection, vendor notification |
| T-05 | Ransomware or destructive malware | Detection of ransomware or data-destructive malware on any production asset | EDR alert, file encryption indicators |
| T-06 | DDoS attack | Attack causing material service degradation | DDoS mitigation platform alert, traffic analysis |
| T-07 | Third-party critical failure | Failure of a critical outsourced service provider causing customer impact | Vendor notification, internal monitoring |
| T-08 | Insider threat | Detection of malicious activity by an insider with privileged access | UEBA alert, HR escalation |
| T-09 | Physical security breach | Unauthorised physical access to data centre or server room | CCTV, access control logs |
| T-10 | Media / public disclosure risk | Incident likely to become public before resolution | Communications team assessment |

### 9.2 Notification Decision Flowchart

*Follow this sequence when assessing whether BNM notification is required:*

```
Incident Detected
       |
       v
Is the affected system on the Critical System List? (Section 5.2)
  YES --> Assess severity using Matrix (Section 5.1)
  NO  --> Is there confirmed or suspected customer data exposure?
              YES --> Initiate notification process
              NO  --> Is financial impact > MYR [threshold]?
                          YES --> Initiate notification process
                          NO  --> Does any trigger in Section 9.1 apply?
                                      YES --> Initiate notification process
                                      NO  --> Document as internal incident; monitor for escalation
```

### 9.3 Notification Exemptions

*The following conditions, when clearly established, may exempt [Organization Name] from BNM notification. Exemption decisions must be documented and approved by the CISO and Head of Regulatory Affairs.*

| Condition | Documentation Required |
|---|---|
| Incident fully contained within non-production environment | Written confirmation from Technical Lead and CISO |
| Incident resolved within [X] minutes with no customer impact | System logs confirming resolution timeframe; customer impact nil report |
| Incident is a planned maintenance activity previously communicated to BNM | Reference to prior BNM communication |

*Exemption does not remove the obligation to record the incident internally and conduct a post-incident review where warranted.*

---

## 10. Roles and Responsibilities

*The RACI matrix below defines accountability for the key activities associated with incident notification and management under BNM RMiT Clause 11.4.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | SOC Analyst | IT Manager / Incident Lead | CISO | CRO | Head of Regulatory Affairs | Legal Counsel | CEO | Board / Audit Committee |
|---|---|---|---|---|---|---|---|---|
| Incident Detection and Initial Triage | R | A | I | I | — | — | — | — |
| Severity Classification | R | A | C | I | I | — | — | — |
| Escalation to CISO / CRO | R | A | R | R | I | — | — | — |
| Confirm BNM Notification Trigger | — | C | A | C | R | C | — | — |
| Draft BNM Preliminary Notification | — | C | C | C | R | C | I | — |
| Approve BNM Preliminary Notification | — | — | C | C | R | C | A | — |
| Transmit Notification to BNM | — | — | — | — | R | — | — | — |
| Customer Communication (Drafting) | — | — | I | I | C | R | A | I |
| Internal Staff Communication | — | R | A | C | I | C | I | — |
| Incident Containment and Eradication | R | A | C | I | — | — | — | — |
| Evidence Preservation | R | A | C | — | C | C | — | — |
| Root Cause Analysis | R | A | C | I | I | — | — | — |
| PIR Report Preparation | — | R | A | C | C | — | I | — |
| PIR Report Approval | — | — | R | A | — | — | I | — |
| BNM Full Incident Report | — | C | C | C | R | C | A | I |
| Corrective Action Implementation | R | A | C | I | I | — | — | — |
| Corrective Action Monitoring | — | R | A | C | I | — | I | I |
| Board / Audit Committee Briefing | — | — | R | R | A | C | C | I |
| Regulatory Records Retention | — | — | C | C | A | C | — | — |
| Annual Notification Process Review | — | C | R | A | R | C | — | I |

---

## 11. Review and Approval

### 11.1 Version History

*Record all amendments to this document. The version number must be incremented for every approved change.*

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial release | [Approver Name] |
| | | | | |
| | | | | |

### 11.2 Scheduled Review

*This document is subject to review per-event (following each notifiable incident) and on a quarterly basis for trend analysis and adequacy of thresholds. The next scheduled quarterly review is:*

**Next Scheduled Review Date:** [DD/MM/YYYY]
**Review Owner:** Head of Regulatory Affairs
**Review Trigger (event-based):** Within 30 calendar days following any P1 or P2 incident

### 11.3 Approval Sign-Off

*This document requires the following approvals before it is considered effective. Electronic signatures are acceptable if processed through [Organization Name]'s approved digital signing platform.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Regulatory Affairs | [Name] | | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Name] | | [DD/MM/YYYY] |
| Chief Risk Officer (CRO) | [Name] | | [DD/MM/YYYY] |
| Chief Executive Officer (CEO) | [Name] | | [DD/MM/YYYY] |

---

## 12. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 11.4 | Technology incident notification requirements to BNM |
| BNM RMiT | Clause 11.1 – 11.3 | Incident management framework requirements |
| BNM RMiT | Appendix 5 | Critical system designation criteria |
| BNM RMiT | Clause 10 | Technology risk management and controls |
| PDPA 2010 | Section 6, 7 | Processing and security of personal data |
| PDPA 2010 | Section 9 | Data breach obligations |
| NACSA | National Cyber Security Policy | Critical information infrastructure protection requirements |
| ISO/IEC 27035 | Parts 1 & 2 | Information security incident management standards |
| NIST SP 800-61 | Rev. 2 | Computer security incident handling guide |
| [Organization Name] | Incident Management Policy [Doc ID] | Internal incident management policy |
| [Organization Name] | Business Continuity Plan [Doc ID] | BCP and DRP procedures |
| [Organization Name] | Data Classification Policy [Doc ID] | Data sensitivity classification framework |
| [Organization Name] | Third-Party Risk Management Policy [Doc ID] | Vendor and outsourcing risk requirements |

---

## 13. Appendices

### Appendix A — Incident Notification Log

*This log must be maintained by the Head of Regulatory Affairs and updated following every incident notification submitted to BNM. Retain for a minimum of seven (7) years in accordance with RMiT record retention requirements.*

| Notification Ref | Incident Ref | Notification Type | Date/Time Submitted | Submitted By | BNM Acknowledgement Ref | Date Acknowledged |
|---|---|---|---|---|---|---|
| [NOTIF-2024-001] | [INC-2024-NNNN] | Preliminary | [DD/MM/YYYY HH:MM] | [Name] | [BNM Ref Number] | [DD/MM/YYYY] |
| | | | | | | |

### Appendix B — Quarterly Trend Review Template

*Complete this template at the end of each quarter for submission to the Risk Committee. The trend review should identify patterns across incidents and assess the adequacy of notification thresholds and response capabilities.*

**Review Period:** [Q1/Q2/Q3/Q4] [YYYY] ([DD/MM/YYYY] to [DD/MM/YYYY])

| Metric | Q1 | Q2 | Q3 | Q4 | YTD Total |
|---|---|---|---|---|---|
| Total incidents logged | | | | | |
| P1 (Critical) incidents | | | | | |
| P2 (High) incidents | | | | | |
| P3 (Medium) incidents | | | | | |
| P4 (Low) incidents | | | | | |
| BNM notifications submitted | | | | | |
| Average time to BNM notification (P1/P2) | | | | | |
| Average time to resolution (P1) | | | | | |
| Average time to resolution (P2) | | | | | |
| Incidents with customer data exposure | | | | | |
| Repeat incidents (same root cause) | | | | | |
| Corrective actions overdue | | | | | |

**Trend Observations:** [Narrative summary of trends, patterns, and anomalies]

**Recommended Threshold Adjustments:** [Any proposed changes to notification thresholds or classification criteria, with rationale]

**Risk Committee Conclusion:** [Decision recorded from Risk Committee review]

### Appendix C — BNM BNMLINK Submission Checklist

*Use this checklist before submitting any notification or report via BNM BNMLINK to ensure completeness.*

**Preliminary Notification (T+1 hour):**
- [ ] Incident reference number assigned
- [ ] Date and time of detection confirmed
- [ ] Affected systems identified
- [ ] Severity level assessed
- [ ] Customer impact estimated
- [ ] Template A completed and reviewed by Legal
- [ ] Approved by Head of Regulatory Affairs
- [ ] Submitted via BNM BNMLINK; acknowledgement received and filed

**Full Incident Report (within 14 calendar days of resolution):**
- [ ] Root Cause Analysis completed
- [ ] Full timeline documented
- [ ] Customer and financial impact quantified
- [ ] Corrective Action Plan approved
- [ ] PIR report signed off by CISO and CRO
- [ ] Report reviewed by Legal
- [ ] Approved by CEO
- [ ] Submitted via BNM BNMLINK; acknowledgement received and filed

### Appendix D — Evidence Preservation Checklist

*Preserve the following evidence types immediately upon incident classification as P1 or P2. Evidence integrity is critical for regulatory review and potential legal proceedings.*

| Evidence Type | Preservation Method | Custodian | Retention Period |
|---|---|---|---|
| System and application logs | Immutable log export to isolated storage | SOC Manager | 7 years |
| Network traffic captures (PCAP) | Secure archive with hash validation | SOC Manager | 7 years |
| Security tool alerts (SIEM, EDR, WAF) | Exported alert records with chain of custody | CISO | 7 years |
| Email and communication records | Legal hold applied to relevant mailboxes | Legal Counsel | 7 years |
| Incident management platform records | Read-only export; no deletion | Incident Commander | 7 years |
| Forensic disk images (where applicable) | Forensically sound image with MD5/SHA-256 hash | SOC Manager / External Forensics | 7 years |
| BNM correspondence | Secure document management system | Head of Regulatory Affairs | 7 years |
| PIR reports | Secure document management system | Head of Regulatory Affairs | 7 years |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank and primary financial sector regulator of Malaysia |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk for financial institutions |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PIR** | Post-Incident Review — a structured review conducted after incident resolution to identify root causes and lessons learned |
| **RCA** | Root Cause Analysis — a systematic process for identifying the fundamental cause of an incident |
| **CISO** | Chief Information Security Officer |
| **CRO** | Chief Risk Officer |
| **SOC** | Security Operations Centre |
| **SIEM** | Security Information and Event Management system |
| **EDR** | Endpoint Detection and Response |
| **BNMLINK** | BNM's secure online portal for regulatory submissions and communications |
| **DDoS** | Distributed Denial of Service — a cyberattack that attempts to disrupt service availability |
| **APT** | Advanced Persistent Threat — a sophisticated, long-term cyberattack typically attributed to nation-state actors |
| **P1 / P2 / P3 / P4** | Priority classification levels used in [Organization Name]'s incident severity framework |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential
**Owner:** Head of Regulatory Affairs, [Organization Name]
**Template last updated:** [DD/MM/YYYY]