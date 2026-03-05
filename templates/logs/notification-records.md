# BNM Incident Notification Records

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
| **Organisation** | [Organisation Name] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset and Item Identification](#2-asset-and-item-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian Registry](#4-owner-and-custodian-registry)
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

This document establishes and maintains the official records of all technology-related incident notifications submitted to Bank Negara Malaysia (BNM) by [Organisation Name], in accordance with the Risk Management in Technology (RMiT) Policy Document issued by BNM. It serves as the authoritative register of regulatory notification obligations, submitted reports, follow-up communications, and post-incident outcomes arising from technology incidents that meet BNM reportable thresholds.

This record set supports [Organisation Name]'s commitment to timely, accurate, and transparent regulatory reporting, and provides an auditable trail for supervisory review, internal governance, and trend analysis.

### 1.2 Scope

This document applies to:

- All technology incidents classified as reportable under BNM RMiT, including but not limited to cyber incidents, critical system outages, data breaches, and technology failures affecting financial services
- All initial notifications, progress updates, and final closure reports submitted to BNM
- Internal escalation records linked to externally notified incidents
- Quarterly trend analysis outputs derived from notification records
- All staff within [Organisation Name] involved in incident detection, assessment, escalation, and regulatory reporting, including but not limited to Information Technology, Cybersecurity, Risk Management, Compliance, and Regulatory Affairs

This document does **not** cover internal incident records that do not meet BNM notification thresholds, which are maintained separately under [Reference to Internal Incident Management Policy].

### 1.3 Regulatory Basis

This document is maintained in compliance with the following regulatory requirements:

| Regulation | Clause / Section | Obligation |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 16.1 | Mandatory incident notification to BNM within prescribed timelines |
| BNM RMiT | Clause 16.1 | Submission of follow-up and closure reports |
| Personal Data Protection Act 2010 (PDPA) | Section 30 | Data breach notification obligations (where applicable) |
| [Additional Applicable Regulation] | [Clause] | [Obligation] |

---

## 2. Asset and Item Identification

*This section records the specific technology assets, systems, or services involved in each notified incident. Each entry must be traceable to the organisation's official asset register. Complete one entry per notification event.*

### 2.1 Asset Register Reference

| Field | Details |
|---|---|
| **Notification Record ID** | [NR-YYYY-NNN] |
| **Incident Reference ID** | [IR-YYYY-NNN] |
| **BNM Submission Reference** | [BNM Reference Number, if issued] |
| **Date of Notification** | [DD/MM/YYYY] |
| **Reporting Period** | [Quarterly period, e.g., Q1 2025] |

### 2.2 Affected Assets

*List all technology assets directly involved in or materially affected by the incident. Cross-reference against the Technology Asset Register maintained by [Asset Owner / IT Division].*

| Asset ID | Asset Name | Asset Type | Business Function Supported | Criticality Rating | Asset Register Reference |
|---|---|---|---|---|---|
| [ASSET-001] | [System/Application Name] | [Server / Application / Network / Database / Cloud Service] | [e.g., Core Banking, Payment Processing] | [Critical / High / Medium / Low] | [TAR-YYYY-NNN] |
| [ASSET-002] | [System/Application Name] | [Asset Type] | [Business Function] | [Criticality] | [TAR-YYYY-NNN] |
| [ASSET-003] | | | | | |

### 2.3 Supporting Infrastructure Affected

*Document any underlying or dependent infrastructure components that contributed to or were impacted by the incident.*

- **Data Centres / Facilities:** [Primary DC / Disaster Recovery Site / Cloud Region]
- **Network Segments:** [e.g., Production LAN, DMZ, External-facing services]
- **Third-Party / Vendor Systems:** [Vendor Name, Service Description]
- **Cloud / Managed Service Providers:** [Provider Name, Service Name, Region]

---

## 3. Classification and Categorisation

*This section documents the formal classification assigned to each notified incident. Classification must be performed in accordance with the Incident Classification Matrix in Section 5 and must be recorded at the time of initial assessment and reviewed upon closure.*

### 3.1 Incident Classification Record

| Classification Field | Initial Assessment | Final Classification (Post-Review) |
|---|---|---|
| **Incident Type** | [Cyber Attack / System Outage / Data Breach / Third-Party Failure / Fraud / Other] | [Final Type] |
| **Incident Category** | [Category per Section 5 matrix] | [Final Category] |
| **Severity Level** | [Critical / High / Medium / Low] | [Final Severity] |
| **BNM Reportability** | [Yes — Mandatory / Yes — Precautionary / No — Below Threshold] | [Confirmed] |
| **PDPA Notification Required** | [Yes / No / Under Review] | [Final Determination] |
| **Customer Impact** | [Yes / No] | [Confirmed Impact Level] |
| **Financial Impact Estimate** | [MYR amount or N/A] | [Final Estimate] |
| **Reputational Risk** | [High / Medium / Low / None] | [Final Assessment] |

### 3.2 Classification Rationale

*Provide a brief explanation of why the incident was classified at the stated severity and type. Document any changes between initial and final classification and the reasons for reclassification.*

> **Initial Classification Rationale:** [Explain basis for initial classification, referencing specific criteria from the Incident Classification Matrix]

> **Reclassification (if applicable):** [Explain any changes to classification upon closure, including the additional information that prompted the change]

### 3.3 Regulatory Reportability Assessment

*Confirm the determination that this incident meets or does not meet BNM mandatory notification thresholds.*

| Threshold Criterion | Met? | Basis for Determination |
|---|---|---|
| Significant disruption to financial services | [Yes / No / Partial] | [Explanation] |
| Unauthorised access to customer data | [Yes / No / Under Investigation] | [Explanation] |
| Material financial loss | [Yes / No] | [Explanation] |
| Reputational impact to the financial system | [Yes / No] | [Explanation] |
| Predefined system unavailability thresholds exceeded | [Yes / No] | [Threshold value and actual duration] |
| [Other BNM-specified criterion] | [Yes / No] | [Explanation] |

---

## 4. Owner and Custodian Registry

*This section identifies the accountable and responsible parties for each notified incident and the associated notification record. Entries must be consistent with the organisation's approved RACI framework and HR records.*

### 4.1 Incident Ownership

| Role | Name | Department | Contact Number | Email |
|---|---|---|---|---|
| **Incident Owner** | [Full Name] | [Department] | [+60X-XXXXXXXX] | [email@organisation.com] |
| **Head of Regulatory Affairs** | [Full Name] | Regulatory Affairs | [+60X-XXXXXXXX] | [email@organisation.com] |
| **Incident Manager** | [Full Name] | [IT / Cybersecurity / Operations] | [+60X-XXXXXXXX] | [email@organisation.com] |
| **Technology Risk Owner** | [Full Name] | Technology Risk | [+60X-XXXXXXXX] | [email@organisation.com] |
| **Data Protection Officer** | [Full Name] | Compliance | [+60X-XXXXXXXX] | [email@organisation.com] |
| **BNM Liaison Officer** | [Full Name] | Regulatory Affairs | [+60X-XXXXXXXX] | [email@organisation.com] |

### 4.2 Asset Custodianship

| Asset ID | Asset Name | Business Owner | Technical Custodian | Vendor/Third-Party Contact (if applicable) |
|---|---|---|---|---|
| [ASSET-001] | [System Name] | [Name, Title] | [Name, Title] | [Vendor Contact Name, +60X-XXXXXXXX] |
| [ASSET-002] | [System Name] | [Name, Title] | [Name, Title] | N/A |

### 4.3 Notification Record Custodian

| Field | Details |
|---|---|
| **Record Custodian** | Head of Regulatory Affairs |
| **Backup Custodian** | [Name, Title] |
| **Storage Location** | [Secure Document Repository Path / SharePoint URL / Physical Location] |
| **Retention Period** | [Minimum 7 years, per BNM record retention requirements] |
| **Access Controls** | [Restricted — Regulatory Affairs, Senior Management, Internal Audit] |

---

## 5. Incident Classification Matrix

*This matrix defines the criteria used to determine incident severity and BNM notification requirements. It must be applied consistently at the time of incident triage and referenced in Section 3. Review this matrix annually or following material changes to BNM guidance.*

### 5.1 Severity Classification Criteria

| Severity Level | System Impact | Customer Impact | Financial Impact | Operational Downtime | Example Scenarios |
|---|---|---|---|---|---|
| **Critical** | Core banking or payment systems fully unavailable | >10,000 customers affected OR any customer data exfiltrated | >MYR [threshold] loss | >4 hours unplanned outage | Ransomware attack on core systems; payment rails completely down |
| **High** | Significant degradation of key services | 1,000–10,000 customers affected | MYR [threshold]–[threshold] | 2–4 hours unplanned outage | Internet banking unavailable; partial data exposure |
| **Low** | Minor or no customer-facing impact | <100 customers affected | <MYR [threshold] | <30 minutes | Failed batch job with rapid recovery; isolated access anomaly |

### 5.2 Incident Type Categories

| Category Code | Incident Type | Description | Typical BNM Notifiability |
|---|---|---|---|
| **CY** | Cyber Attack | Malware, ransomware, DDoS, phishing leading to compromise | Mandatory if Critical or High |
| **DB** | Data Breach | Unauthorised access, disclosure, or exfiltration of customer data | Mandatory — any confirmed breach |
| **SO** | System Outage | Unplanned unavailability of critical or major systems | Mandatory if exceeding prescribed downtime threshold |
| **TP** | Third-Party Failure | Failure by vendor or service provider causing service disruption | Mandatory if Critical or High impact |
| **FR** | Fraud | Technology-enabled fraud causing financial loss | Mandatory if above financial threshold |
| **DC** | Data Corruption | Loss of integrity of critical data assets | Mandatory if Critical |
| **OT** | Other | Incidents not falling into above categories | Case-by-case assessment |

### 5.3 BNM Notification Threshold Summary

*Confirm final notification determination by checking applicable thresholds against BNM RMiT requirements.*

| Threshold Type | BNM-Specified Threshold | [Organisation Name] Internal Threshold (Precautionary) |
|---|---|---|
| System downtime — critical systems | [X hours, per RMiT] | [Y hours — notify BNM proactively] |
| Customers affected | [Number, per BNM guidance] | [Internal lower threshold] |
| Financial loss | [MYR amount, per BNM guidance] | [Internal lower threshold] |
| Data records compromised | [Number, per BNM/PDPA] | [Internal lower threshold] |

---

## 6. Escalation Timelines

*This section documents the mandatory escalation and notification timelines applicable to each incident type, and records actual timelines achieved for each notified event. Deviations from prescribed timelines must be explained and remediation actions recorded.*

### 6.1 Mandatory Notification Timeline Requirements

| Notification Type | Recipient | Prescribed Timeline | Consequence of Non-Compliance |
|---|---|---|---|
| **Initial Notification** | BNM (via designated channel) | Within [X hours] of confirmed incident declaration | Regulatory breach; potential enforcement action |
| **Progress Update** | BNM | Every [Y hours / days] until resolution | Regulatory breach if not submitted |
| **Final Closure Report** | BNM | Within [Z days] of incident closure | Regulatory breach if not submitted |
| **Internal Board / EXCO Notification** | Board Risk Committee / CEO | Within [X hours] for Critical; [Y hours] for High | Internal policy breach |
| **Customer Notification** | Affected customers | Within [X days] (PDPA, if data breach confirmed) | PDPA enforcement action |
| **NACSA Notification** | NACSA / CyberSecurity Malaysia | [Per NACSA guidelines, if applicable] | Per applicable regulation |

### 6.2 Timeline Achievement Record — Per Notification Event

*Complete one row per notification submission for each notified incident. Attach copies of all submissions as evidence.*

| Notification Record ID | Incident Reference | Notification Type | Prescribed Deadline | Actual Submission Date/Time | Compliant? | Deviation Explanation | Remediation Action |
|---|---|---|---|---|---|---|---|
| [NR-YYYY-001] | [IR-YYYY-001] | Initial Notification | [DD/MM/YYYY HH:MM] | [DD/MM/YYYY HH:MM] | [Yes / No] | [If No, explain] | [If No, corrective action taken] |
| [NR-YYYY-001] | [IR-YYYY-001] | Progress Update #1 | [DD/MM/YYYY HH:MM] | [DD/MM/YYYY HH:MM] | [Yes / No] | | |
| [NR-YYYY-001] | [IR-YYYY-001] | Final Closure Report | [DD/MM/YYYY HH:MM] | [DD/MM/YYYY HH:MM] | [Yes / No] | | |

### 6.3 Internal Escalation Pathway

*Document the internal escalation chain activated for each incident. Confirm that escalation occurred within prescribed timeframes.*

```
[Incident Detection / Alert]
         |
         v
[L1 Operations / SOC Team] — Initial triage (within [X minutes])
         |
         v
[Incident Manager / CISO] — Severity assessment (within [Y minutes] of L1 escalation)
         |
         v
[Technology Risk / Head of IT] — Confirmed Critical or High (within [Z minutes])
         |
         v
[Head of Regulatory Affairs] — BNM notification decision (within [X hours])
         |
         v
[CEO / CRO / Board Risk Committee] — Mandatory for Critical (within [Y hours])
         |
         v
[BNM Notification Submitted] — Per prescribed timeline
```

---

## 7. Communication Templates

*This section contains the approved communication templates for BNM notifications. Templates must be used as the basis for all regulatory submissions. Content must be tailored to the specific incident; no template should be submitted without customisation and review by the Head of Regulatory Affairs.*

### 7.1 Template 1: Initial Incident Notification to BNM

---

**TO:** Bank Negara Malaysia — [Designated BNM Supervisory Contact / Portal]
**FROM:** [Organisation Name] — Head of Regulatory Affairs
**DATE:** [DD/MM/YYYY]
**SUBJECT:** Technology Incident Notification — [Incident Reference ID] — [Incident Type]
**CLASSIFICATION:** Confidential — Regulatory Submission

---

Dear [BNM Contact Name / Supervisory Division],

[Organisation Name] (Licence No.: [BNM Licence Number]) hereby notifies Bank Negara Malaysia of a technology incident in accordance with Clause 16.1 of the Risk Management in Technology (RMiT) Policy Document.

**1. Incident Summary**

| Field | Details |
|---|---|
| Incident Reference | [IR-YYYY-NNN] |
| Date and Time Detected | [DD/MM/YYYY HH:MM MYT] |
| Date and Time Confirmed | [DD/MM/YYYY HH:MM MYT] |
| Incident Type | [Cyber Attack / System Outage / Data Breach / Other] |
| Severity Classification | [Critical / High] |
| Systems Affected | [System names] |
| Services Impacted | [Financial services affected] |
| Customer Impact | [Estimated number of customers; nature of impact] |

**2. Description of Incident**

[Provide a factual, concise description of what occurred, how it was detected, and the immediate impact. Avoid speculation. Limit to confirmed facts at time of notification.]

**3. Immediate Actions Taken**

- [Containment action 1]
- [Containment action 2]
- [Notification of internal stakeholders]

**4. Ongoing Response Activities**

[Describe investigation and recovery activities currently in progress.]

**5. Estimated Resolution Timeline**

[Provide best estimate of restoration timeline, clearly noting this is subject to change.]

**6. Primary Contact for BNM Enquiries**

| | |
|---|---|
| **Name** | [Full Name] |
| **Title** | Head of Regulatory Affairs |
| **Mobile** | [+60X-XXXXXXXX] |
| **Email** | [email@organisation.com] |

We will provide a progress update by [DD/MM/YYYY HH:MM MYT] or earlier if there are material developments.

Yours faithfully,

[Name]
Head of Regulatory Affairs
[Organisation Name]

---

### 7.2 Template 2: Progress Update to BNM

*Use this template for each scheduled update submission. Number updates sequentially (Update #1, #2, etc.).*

---

**TO:** Bank Negara Malaysia
**FROM:** [Organisation Name] — Head of Regulatory Affairs
**DATE:** [DD/MM/YYYY]
**SUBJECT:** Technology Incident Progress Update #[N] — [Incident Reference ID]
**REFERENCE:** [BNM Reference Number if issued]

---

Dear [BNM Contact],

Further to our initial notification dated [DD/MM/YYYY], [Organisation Name] provides the following progress update.

| Field | Update |
|---|---|
| Current Status | [Contained / Under Investigation / Recovery in Progress / Resolved] |
| Root Cause (if determined) | [Root cause or "Under investigation"] |
| Customer Impact (updated) | [Revised customer impact figures] |
| Financial Impact (updated) | [Revised estimate or "Under assessment"] |
| Actions Completed Since Last Update | [List key actions taken] |
| Actions in Progress | [Ongoing remediation steps] |
| Estimated Resolution | [Revised timeline if changed] |
| Next Update Due | [DD/MM/YYYY HH:MM MYT] |

[Narrative update if required.]

Yours faithfully,

[Name]
Head of Regulatory Affairs
[Organisation Name]

---

### 7.3 Template 3: Final Closure Report to BNM

*The closure report must be submitted within the prescribed deadline following incident resolution. It must include a complete post-incident analysis.*

---

**TO:** Bank Negara Malaysia
**FROM:** [Organisation Name] — Head of Regulatory Affairs
**DATE:** [DD/MM/YYYY]
**SUBJECT:** Technology Incident Closure Report — [Incident Reference ID]
**REFERENCE:** [BNM Reference Number]

---

**Executive Summary:** [Two to three sentence summary of the incident, resolution, and key outcomes.]

| Field | Details |
|---|---|
| Incident Resolved Date/Time | [DD/MM/YYYY HH:MM MYT] |
| Total Duration | [X hours Y minutes] |
| Root Cause (Confirmed) | [Confirmed root cause] |
| Total Customers Affected | [Final figure] |
| Total Financial Impact | [MYR amount or Nil] |
| Data Records Compromised | [Number or Nil] |
| Regulatory Breaches Identified | [Yes — specify / No] |

**Root Cause Analysis Summary:** [Detail confirmed root cause and contributing factors.]

**Remediation Actions Completed:** [List all remediation steps completed prior to closure.]

**Outstanding Remediation Actions:**

| Action | Owner | Target Completion Date | Status |
|---|---|---|---|
| [Remediation item] | [Name / Team] | [DD/MM/YYYY] | [In Progress / Planned] |

**Lessons Learned and Preventive Measures:** [Key learnings and systemic improvements to be implemented.]

Yours faithfully,

[Name]
Head of Regulatory Affairs
[Organisation Name]

---

---

## 8. Post-Incident Review Process

*This section documents the structured post-incident review process that must be completed following every BNM-notified incident. Reviews are mandatory and the outputs feed into the quarterly trend analysis submitted to the Board Risk Committee.*

### 8.1 Post-Incident Review Requirements

| Review Type | Trigger | Timeline | Facilitator | Audience |
|---|---|---|---|---|
| **Immediate Hot Wash** | Within 24 hours of incident closure | ≤24 hours post-closure | Incident Manager | Incident Response Team |
| **Full Post-Incident Review** | All BNM-notified incidents | Within [X business days] of closure | Head of Technology Risk | CISO, CRO, Head of IT, Regulatory Affairs |
| **Board-Level Review** | Critical severity incidents | Within [Y days] of closure | CRO / CISO | Board Risk Committee |
| **Quarterly Trend Review** | All notifications — aggregated | Quarterly | Head of Regulatory Affairs | Board Risk Committee / EXCO |

### 8.2 Post-Incident Review Record

*Complete this section for each reviewed incident. Attach the full Post-Incident Review Report as an appendix.*

| Field | Details |
|---|---|
| **Incident Reference** | [IR-YYYY-NNN] |
| **Review Date** | [DD/MM/YYYY] |
| **Review Facilitator** | [Name, Title] |
| **Attendees** | [Names and roles] |
| **PIR Report Reference** | [PIR-YYYY-NNN] |

**Key Findings:**

| Finding Ref | Finding Description | Contributing Factor | Severity |
|---|---|---|---|
| [F-001] | [Description of finding] | [Technical / Process / People / Vendor] | [High / Medium / Low] |
| [F-002] | | | |

**Remediation Action Plan:**

| Action Ref | Finding Ref | Action Description | Owner | Target Date | Status | Evidence of Completion |
|---|---|---|---|---|---|---|
| [A-001] | [F-001] | [Description] | [Name / Team] | [DD/MM/YYYY] | [Open / In Progress / Closed] | [Document reference when closed] |
| [A-002] | [F-001] | | | | | |

**Control Effectiveness Assessment:**

| Control | Was the Control in Place? | Did the Control Function Effectively? | Improvement Required? |
|---|---|---|---|
| [Control name, e.g., Intrusion Detection] | [Yes / No] | [Yes / No / Partially] | [Yes / No — describe] |
| [Security Patching Process] | | | |
| [Third-Party Risk Management] | | | |
| [Incident Response Plan] | | | |

### 8.3 Quarterly Trend Analysis Summary

*Aggregate data from all notification records within the quarter for submission to the Board Risk Committee. Retain completed trend reports as appendices to this record.*

| Metric | Q[N] [YYYY] | Q[N-1] [YYYY] | Trend | Commentary |
|---|---|---|---|---|
| Total BNM notifications submitted | [Number] | [Number] | [↑ / ↓ / →] | [Brief commentary] |
| Notifications — Critical severity | [Number] | [Number] | | |
| Notifications — High severity | [Number] | [Number] | | |
| Average detection-to-notification time | [Hours] | [Hours] | | |
| Notifications submitted within BNM timeline | [Number / %] | [Number / %] | | |
| Notifications with timeline deviation | [Number] | [Number] | | |
| Most common incident type | [Category] | [Category] | | |
| Open remediation actions (carried forward) | [Number] | [Number] | | |

---

## 9. Notification Trigger Criteria

*This section defines the criteria that automatically trigger or require assessment for BNM notification. Staff must apply these criteria at the time of incident triage. Any ambiguity should be escalated to the Head of Regulatory Affairs immediately.*

### 9.1 Mandatory Notification Triggers

The following conditions constitute automatic triggers requiring immediate BNM notification. Notification must commence regardless of whether the incident is fully contained or the root cause is confirmed.

| Trigger ID | Trigger Description | Applicable Incident Types | Notification Timeline from Trigger |
|---|---|---|---|
| **T-001** | Confirmed or suspected unauthorised access to, or exfiltration of, customer personal data or financial data | Cyber Attack, Data Breach | Immediate — within [X hours] |
| **T-002** | Unplanned unavailability of core banking, payment, or settlement systems exceeding [X hours] | System Outage | Within [Y hours] of threshold breach |
| **T-003** | Ransomware or destructive malware confirmed on production systems | Cyber Attack | Immediate — within [X hours] |
| **T-004** | DDoS attack resulting in service unavailability exceeding [X hours] | Cyber Attack | Within [Y hours] of threshold breach |
| **T-005** | Critical third-party or vendor failure causing material service disruption | Third-Party Failure | Within [Y hours] of impact assessment |
| **T-006** | Technology-enabled fraud resulting in financial loss exceeding MYR [threshold] | Fraud | Within [Y hours] of confirmed loss |
| **T-007** | Any incident resulting in confirmed compromise of [Number] or more customer records | Data Breach | Immediate — within [X hours] |
| **T-008** | Any incident assessed as posing systemic risk to financial stability | All types | Immediate — within [X hours] |

### 9.2 Precautionary Notification Triggers

The following conditions require assessment by the Head of Regulatory Affairs to determine whether precautionary BNM notification is appropriate, even if mandatory thresholds are not definitively met.

| Trigger ID | Condition | Assessment Owner | Assessment Deadline |
|---|---|---|---|
| **PT-001** | Incident approaching but not yet meeting mandatory thresholds | Head of Regulatory Affairs | Within [X hours] of detection |
| **PT-002** | High-profile or reputationally sensitive incident with potential media attention | CEO / Head of Regulatory Affairs | Within [X hours] of detection |
| **PT-003** | Novel threat type not previously encountered by the organisation | CISO / Head of Technology Risk | Within [X hours] of classification |
| **PT-004** | Incident involving a third party that has notified multiple financial institutions | Head of Regulatory Affairs | Within [X hours] of receipt of third-party notification |

### 9.3 Decision Flowchart — Notification Determination

```
Incident Confirmed
         |
         v
Does the incident meet ANY Mandatory Trigger (T-001 to T-008)?
    YES ──────────────────────────────────────────────────────> Notify BNM immediately
                                                                (per prescribed timeline)
     |
    NO
     |
     v
Does the incident meet ANY Precautionary Trigger (PT-001 to PT-004)?
    YES ──────> Head of Regulatory Affairs assesses within [X hours]
                         |
                 Decision to notify? ──> YES ──> Notify BNM (precautionary)
                         |
                        NO
                         |
                         v
               Document rationale for non-notification
               in this Notification Record
     |
    NO
     |
     v
Incident below notification threshold — record in internal
incident management system only; include in quarterly trend data
```

---

## 10. Roles and Responsibilities

*This section defines the roles and responsibilities of all parties involved in the BNM notification process. The RACI matrix below uses the following designations: **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

### 10.1 RACI Matrix

| Activity | Head of Regulatory Affairs | CISO / Head of Cybersecurity | Chief Risk Officer | Head of IT / Technology | CEO / MD | Incident Manager | Legal / Compliance | Data Protection Officer | Board Risk Committee |
|---|---|---|---|---|---|---|---|---|---|
| Incident detection and initial logging | I | R | I | R | I | A | I | I | — |
| Severity classification | C | R | C | C | I | A | C | C | — |
| Notification trigger assessment | A | C | C | C | I | R | C | C | — |
| Decision to notify BNM | A | C | R | C | C | I | C | C | — |
| Drafting BNM initial notification | R | C | C | C | I | C | C | C | — |
| Reviewing and approving BNM notification | A | C | R | — | C | — | C | — | — |
| Submitting notification to BNM | R | — | — | — | — | — | — | — | — |
| Maintaining notification timeline record | R | I | I | I | — | I | I | I | — |
| Drafting progress updates | R | C | C | C | I | C | C | C | — |
| Drafting closure report | R | C | C | C | I | C | C | C | — |
| Facilitating post-incident review | C | C | A | C | — | R | C | C | — |
| Implementing remediation actions | I | R | A | R | I | R | I | I | — |
| Quarterly trend analysis preparation | R | C | C | — | — | — | C | — | — |
| Board / EXCO reporting | C | C | R | C | A | — | C | — | I |
| Retention of notification records | R | I | I | I | — | — | C | I | — |
| Annual review of notification procedures | A | C | C | C | — | — | C | C | — |

### 10.2 BNM Liaison Contact Details

| Role | Name | Direct Line | Email | Alternate Contact |
|---|---|---|---|---|
| Primary BNM Liaison | [Name] | [+60X-XXXXXXXX] | [email] | [Alternate name / number] |
| Secondary BNM Liaison | [Name] | [+60X-XXXXXXXX] | [email] | |
| BNM Supervisory Contact | [BNM Officer Name, if known] | [BNM number] | [BNM email] | [BNM general line] |

---

## 11. Review and Approval

### 11.1 Document Review Schedule

This document is subject to review:

- **Per-event:** Upon each BNM notification event, to record incident-specific details
- **Quarterly:** Trend analysis section updated following each quarter
- **Annually:** Full procedural review by Head of Regulatory Affairs
- **Ad hoc:** Following material changes to BNM RMiT requirements, significant incidents, or internal policy changes

### 11.2 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name, Title] | [Name, Title] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Name] | [Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Name] | [Name] | [Description of material revision] |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Regulatory Affairs | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Risk Officer | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Security Officer | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Executive Officer / Managing Director | [Name] | __________________ | [DD/MM/YYYY] |
| Board Risk Committee Chair (for Critical incidents) | [Name] | __________________ | [DD/MM/YYYY] |

---

## 12. References

| Reference | Document / Clause | Relevance |
|---|---|---|
| BNM RMiT | Clause 16.1 — Technology Incident Notification | Primary regulatory obligation for BNM notification |
| BNM RMiT | Clause 16 — Technology Incident Management | Broader incident management framework context |
| BNM RMiT | Clause 10 — Technology Risk Management | Technology risk governance and asset risk classification |
| Personal Data Protection Act 2010 | Section 30 — Notification of Data Breach | Data breach customer notification obligation |
| National Cyber Security Agency (NACSA) | Incident Reporting Guidelines | Cyber incident reporting to NACSA where applicable |
| [Organisation Name] Incident Response Plan | [Document ID] | Internal incident management procedures |
| [Organisation Name] Technology Asset Register | [Document ID] | Source of asset identification data |
| [Organisation Name] Information Security Policy | [Document ID] | Overarching security governance framework |
| [Organisation Name] Business Continuity Plan | [Document ID] | Recovery procedures referenced during incidents |
| [Organisation Name] Data Classification Policy | [Document ID] | Data sensitivity classification basis |
| [Organisation Name] Third-Party Risk Policy | [Document ID] | Vendor incident obligations and assessment |

---

## 13. Appendices

### Appendix A: BNM Notification Submission Log (Master Register)

*This appendix contains the master log of all BNM notification submissions made by [Organisation Name]. It is updated in real time upon each submission and reviewed quarterly.*

| Log ID | Incident Ref | BNM Ref (if issued) | Notification Type | Submission Date/Time | Submitted By | BNM Acknowledgement Received? | Acknowledgement Date | Closure Confirmed? |
|---|---|---|---|---|---|---|---|---|
| [LOG-001] | [IR-YYYY-001] | [BNM-REF] | Initial Notification | [DD/MM/YYYY HH:MM] | [Name] | [Yes / No] | [DD/MM/YYYY] | [Yes / No] |
| [LOG-002] | [IR-YYYY-001] | | Progress Update #1 | [DD/MM/YYYY HH:MM] | [Name] | [Yes / No] | | |
| [LOG-003] | [IR-YYYY-001] | | Closure Report | [DD/MM/YYYY HH:MM] | [Name] | [Yes / No] | [DD/MM/YYYY] | Yes |

---

### Appendix B: BNM Contact and Submission Channel Details

*Maintain current BNM submission channel details here. Update immediately upon receipt of any BNM circular updating submission procedures.*

| Submission Channel | Details | Last Verified |
|---|---|---|
| BNM Designated Portal | [URL / Portal Name] | [DD/MM/YYYY] |
| BNM Supervisory Division Email | [BNM email address] | [DD/MM/YYYY] |
| BNM Emergency Hotline | [BNM number] | [DD/MM/YYYY] |
| BNM Supervisory Officer (Primary) | [Name, if known] | [DD/MM/YYYY] |

---

### Appendix C: Post-Incident Review Reports

*Attach completed Post-Incident Review (PIR) reports for each notified incident. Index below.*

| PIR Reference | Incident Reference | Review Date | Status | Report Location |
|---|---|---|---|---|
| [PIR-YYYY-001] | [IR-YYYY-001] | [DD/MM/YYYY] | [Completed / Draft / Pending] | [File path / SharePoint link] |

---

### Appendix D: Regulatory Correspondence Archive Index

*Maintain an index of all correspondence with BNM related to notified incidents, including emails, letters, and portal submissions.*

| Document Ref | Incident Ref | Date | Direction | Document Type | Summary | Location |
|---|---|---|---|---|---|---|
| [CORR-001] | [IR-YYYY-001] | [DD/MM/YYYY] | Outbound | Initial Notification | [Brief description] | [File path] |
| [CORR-002] | [IR-YYYY-001] | [DD/MM/YYYY] | Inbound | BNM Acknowledgement | [Brief description] | [File path] |
| [CORR-003] | [IR-YYYY-001] | [DD/MM/YYYY] | Inbound | BNM Queries / Requests for Information | [Brief description] | [File path] |
| [CORR-004] | [IR-YYYY-001] | [DD/MM/YYYY] | Outbound | Response to BNM Queries | [Brief description] | [File path] |

---

### Appendix E: Definitions and Abbreviations

| Term / Abbreviation | Definition |
|---|---|
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CRO | Chief Risk Officer |
| DDoS | Distributed Denial of Service |
| EXCO | Executive Committee |
| IOC | Indicator of Compromise |
| MYT | Malaysia Time (UTC+8) |
| NACSA | National Cyber Security Agency |
| PDPA | Personal Data Protection Act 2010 |
| PIR | Post-Incident Review |
| RACI | Responsible, Accountable, Consulted, Informed |
| RMiT | Risk Management in Technology (BNM Policy Document) |
| SOC | Security Operations Centre |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organisation Name] and regulatory authorities as required. Unauthorised disclosure is prohibited. For queries regarding this document, contact the Head of Regulatory Affairs at [email@organisation.com].*

*— End of Document —*