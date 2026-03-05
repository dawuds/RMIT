# Monthly SLA Performance Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Organization** | [Organization Name] |
| **Reporting Period** | [Month Year] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Methodology](#3-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [SLA Performance Dashboard](#5-sla-performance-dashboard)
6. [Risk Ratings and Prioritisation](#6-risk-ratings-and-prioritisation)
7. [Recommendations and Action Items](#7-recommendations-and-action-items)
8. [Management Response](#8-management-response)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Executive Summary

*Provide a concise, high-level summary of SLA performance for the reporting period, highlighting overall compliance posture, critical breaches, and key actions taken or planned. This section is intended for senior management and should not exceed one page.*

### 1.1 Reporting Period

| Field | Details |
|---|---|
| **Reporting Month** | [Month Year] |
| **Report Prepared By** | [Name, Title] |
| **Report Prepared Date** | [Date] |
| **Distribution List** | [EXCO / IT Steering Committee / Board Risk Committee] |

### 1.2 Overall SLA Compliance Summary

| Metric | Target | Actual | Status |
|---|---|---|---|
| Overall SLA Compliance Rate | ≥ [X]% | [X]% | [Met / Breached] |
| Total Services Monitored | [N] | [N] | — |
| Services Meeting SLA | [N] | [N] | [Green / Amber / Red] |
| Services Breaching SLA | [N] | [N] | [Green / Amber / Red] |
| Critical Incidents Affecting SLA | [N] | [N] | [Green / Amber / Red] |
| Repeat Breaches (Rolling 3-Month) | [N] | [N] | [Green / Amber / Red] |

### 1.3 Highlights

- **[Positive Achievement]:** [Brief description of SLA targets consistently met or exceeded.]
- **[Area of Concern]:** [Brief description of SLA breach or degraded service performance.]
- **[Action Taken]:** [Summary of immediate remediation steps taken during the period.]
- **[Escalation]:** [Any escalations raised to senior management or the Board Risk Committee.]

---

## 2. Purpose and Scope

### 2.1 Purpose

This Monthly SLA Performance Report is prepared in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.29**, which requires financial institutions to monitor, measure, and report on the performance of technology services against defined service level agreements (SLAs). The report provides management with a structured and evidence-based view of IT service performance, availability, and reliability for the reporting period.

This document supports [Organization Name]'s obligations to:

- Maintain oversight of technology service delivery performance;
- Identify and escalate service degradations that may affect business continuity or customer experience;
- Ensure that remediation actions are tracked and resolved within agreed timeframes;
- Demonstrate to BNM that SLA governance mechanisms are operational and effective.

### 2.2 Scope

*Define the boundaries of this report, including which systems, services, and vendors are within scope. Exclude services that are governed by separate reporting mechanisms and state the reason.*

**In-Scope Services:**

| Service Category | Service Name | Service Owner | Vendor / Provider |
|---|---|---|---|
| Core Banking | [Service Name] | [Name] | [Internal / Vendor Name] |
| Internet Banking | [Service Name] | [Name] | [Internal / Vendor Name] |
| Payment Processing | [Service Name] | [Name] | [Internal / Vendor Name] |
| Network Infrastructure | [Service Name] | [Name] | [Internal / Vendor Name] |
| Data Centre Operations | [Service Name] | [Name] | [Internal / Vendor Name] |
| [Other Critical System] | [Service Name] | [Name] | [Internal / Vendor Name] |

**Out-of-Scope:**

- [Services excluded from this report and the rationale, e.g., services under separate vendor SLA review cycles.]

### 2.3 Regulatory Context

This report is issued in compliance with the following regulatory instruments:

| Regulatory Instrument | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 10.29 | Monitoring and reporting of SLA performance to management |
| BNM RMiT Policy Document | [Other Relevant Clause] | [Requirement Summary] |
| [Other BNM Issuance / Act] | [Clause] | [Requirement Summary] |

---

## 3. Methodology

*Describe the data collection processes, tools, measurement periods, and calculation methods used to derive the SLA performance figures in this report. This section provides the audit trail for the data presented.*

### 3.1 Data Collection

| Data Source | Tool / System | Data Custodian | Collection Frequency |
|---|---|---|---|
| System Availability Monitoring | [Monitoring Tool, e.g., Zabbix / Dynatrace] | [Name] | Continuous / Daily |
| Incident Management System | [ITSM Tool, e.g., ServiceNow / Jira] | [Name] | Real-time |
| Change Management Records | [Tool Name] | [Name] | Per change event |
| Vendor Performance Reports | [Vendor Portal / Email Submission] | [Vendor Manager Name] | Monthly |
| Network Performance Metrics | [Network Monitoring Tool] | [Name] | Continuous |

### 3.2 Measurement Period

- **Reporting Window:** [First day of month] to [Last day of month], [Year]
- **Measurement Basis:** [Calendar hours / Business hours — specify per service where applicable]
- **Excluded Maintenance Windows:** [List scheduled maintenance windows excluded from availability calculations, referencing approved Change Advisory Board (CAB) records]

### 3.3 SLA Calculation Methodology

- **Availability (%):** Calculated as `(Total Agreed Service Time − Downtime) / Total Agreed Service Time × 100`
- **Mean Time to Restore (MTTR):** Average elapsed time from incident detection to service restoration, measured in hours.
- **Mean Time Between Failures (MTBF):** Average time between consecutive service failures, measured in hours.
- **Incident Response Compliance (%):** Percentage of incidents responded to within the agreed response time per priority tier.
- **Resolution SLA Compliance (%):** Percentage of incidents resolved within the agreed resolution time per priority tier.

### 3.4 Incident Priority Classification

| Priority | Definition | Target Response Time | Target Resolution Time |
|---|---|---|---|
| P1 — Critical | Complete service outage affecting customers or critical business operations | [X] minutes | [X] hours |
| P2 — High | Significant service degradation affecting multiple users or business functions | [X] minutes | [X] hours |
| P3 — Medium | Partial or intermittent service impact with workaround available | [X] hours | [X] business days |
| P4 — Low | Minor issue with minimal business impact | [X] business days | [X] business days |

---

## 4. Key Findings and Observations

*Document all material findings from the reporting period. Each finding should be factual, traceable to a data source, and clearly linked to the affected SLA metric. Where an SLA has been breached, the root cause and impact must be stated.*

### 4.1 Summary of Findings

*Provide a brief narrative (3–5 sentences) describing the overall performance picture for the period, noting whether performance has improved, deteriorated, or remained stable compared to the prior month.*

[Summary narrative: During [Month Year], [Organization Name] recorded an overall SLA compliance rate of [X]%, compared to [X]% in the prior month. [Number] services breached their defined SLA thresholds, of which [number] were classified as critical. The primary drivers of underperformance were [brief root cause summary]. Remediation actions have been initiated and are tracked in Section 7.]

### 4.2 Detailed Findings

#### Finding 4.2.1 — [Finding Title]

| Field | Details |
|---|---|
| **Finding ID** | [FINDING-YYYY-MM-001] |
| **Affected Service** | [Service Name] |
| **SLA Metric Breached** | [Availability / MTTR / Response Time / Other] |
| **SLA Target** | [X]% / [X] hours |
| **Actual Performance** | [X]% / [X] hours |
| **Variance** | [X]% / [X] hours below target |
| **Duration of Impact** | [Start Date/Time] to [End Date/Time] |
| **Customer / Business Impact** | [Description of impact on customers or operations] |
| **Root Cause** | [Confirmed / Probable root cause] |
| **Detection Method** | [Automated alert / Manual discovery / Customer complaint] |
| **Recurrence** | [First occurrence / Repeat — [N] times in last 3 months] |

#### Finding 4.2.2 — [Finding Title]

| Field | Details |
|---|---|
| **Finding ID** | [FINDING-YYYY-MM-002] |
| **Affected Service** | [Service Name] |
| **SLA Metric Breached** | [Availability / MTTR / Response Time / Other] |
| **SLA Target** | [X]% / [X] hours |
| **Actual Performance** | [X]% / [X] hours |
| **Variance** | [X]% / [X] hours below target |
| **Duration of Impact** | [Start Date/Time] to [End Date/Time] |
| **Customer / Business Impact** | [Description of impact on customers or operations] |
| **Root Cause** | [Confirmed / Probable root cause] |
| **Detection Method** | [Automated alert / Manual discovery / Customer complaint] |
| **Recurrence** | [First occurrence / Repeat — [N] times in last 3 months] |

*Replicate the finding block above for each additional finding in the reporting period.*

### 4.3 Positive Observations

*Document services or areas where performance exceeded targets or where notable improvements were recorded, reinforcing effective controls.*

| Service | Metric | Target | Actual | Observation |
|---|---|---|---|---|
| [Service Name] | [Metric] | [X]% | [X]% | [Brief positive note] |
| [Service Name] | [Metric] | [X]% | [X]% | [Brief positive note] |

### 4.4 Trend Analysis

*Compare current period performance against the prior three months to identify patterns, deteriorating services, or the effectiveness of prior remediation actions.*

| Service | [Month -3] | [Month -2] | [Month -1] | [Current Month] | Trend |
|---|---|---|---|---|---|
| [Service Name] | [X]% | [X]% | [X]% | [X]% | [Improving / Stable / Deteriorating] |
| [Service Name] | [X]% | [X]% | [X]% | [X]% | [Improving / Stable / Deteriorating] |
| [Service Name] | [X]% | [X]% | [X]% | [X]% | [Improving / Stable / Deteriorating] |

---

## 5. SLA Performance Dashboard

*This section presents the consolidated SLA performance metrics for all in-scope services. All figures should be drawn directly from the monitoring and ITSM systems referenced in Section 3.*

### 5.1 Service Availability Performance

| Service Name | SLA Target (%) | Actual Uptime (%) | Downtime (Hours) | Status | Remarks |
|---|---|---|---|---|---|
| [Service Name] | [X]% | [X]% | [X] hrs | ✅ Met | [N/A or brief note] |
| [Service Name] | [X]% | [X]% | [X] hrs | ⚠️ At Risk | [Brief note] |
| [Service Name] | [X]% | [X]% | [X] hrs | ❌ Breached | [Refer Finding ID] |

### 5.2 Incident Management SLA Performance

| Priority | Total Incidents | Within Response SLA | Response SLA % | Within Resolution SLA | Resolution SLA % | Status |
|---|---|---|---|---|---|---|
| P1 — Critical | [N] | [N] | [X]% | [N] | [X]% | [Met / Breached] |
| P2 — High | [N] | [N] | [X]% | [N] | [X]% | [Met / Breached] |
| P3 — Medium | [N] | [N] | [X]% | [N] | [X]% | [Met / Breached] |
| P4 — Low | [N] | [N] | [X]% | [N] | [X]% | [Met / Breached] |
| **Total** | **[N]** | **[N]** | **[X]%** | **[N]** | **[X]%** | — |

### 5.3 Key Performance Indicators Summary

| KPI | Target | Actual | Variance | Status |
|---|---|---|---|---|
| Overall System Availability | ≥ [X]% | [X]% | [±X]% | [Met / Breached] |
| Critical Incident MTTR | ≤ [X] hours | [X] hours | [±X] hours | [Met / Breached] |
| P1 Incident Response Compliance | ≥ [X]% | [X]% | [±X]% | [Met / Breached] |
| Change Success Rate | ≥ [X]% | [X]% | [±X]% | [Met / Breached] |
| Problem Resolution Rate | ≥ [X]% | [X]% | [±X]% | [Met / Breached] |
| Vendor SLA Compliance | ≥ [X]% | [X]% | [±X]% | [Met / Breached] |
| Customer-Impacting Incidents | ≤ [N] | [N] | [±N] | [Met / Breached] |

### 5.4 Vendor / Third-Party SLA Performance

*Include performance data for all material outsourced or third-party technology services. Cross-reference with vendor contracts and escalation logs where applicable.*

| Vendor Name | Service Provided | Contractual SLA | Actual Performance | Status | Escalation Raised |
|---|---|---|---|---|---|
| [Vendor Name] | [Service Description] | [X]% | [X]% | [Met / Breached] | [Yes / No — Ref: ESC-YYYY-MM-001] |
| [Vendor Name] | [Service Description] | [X]% | [X]% | [Met / Breached] | [Yes / No] |

---

## 6. Risk Ratings and Prioritisation

*Assign risk ratings to all identified SLA breaches and service degradations based on their actual or potential impact on the institution's operations, customers, and regulatory standing. Ratings must align with [Organization Name]'s enterprise risk appetite framework.*

### 6.1 Risk Rating Criteria

| Risk Rating | Criteria | Colour Code |
|---|---|---|
| **Critical** | SLA breach causing customer-facing outage, regulatory reportable event, or financial loss | 🔴 Red |
| **High** | SLA breach with significant operational impact, potential regulatory concern, or repeat occurrence | 🟠 Orange |
| **Medium** | SLA breach with limited operational impact; workaround available; first occurrence | 🟡 Yellow |
| **Low** | Minor degradation; no customer impact; within acceptable tolerance | 🟢 Green |

### 6.2 Risk Register — Current Period Findings

| Finding ID | Service | Finding Description | Likelihood | Impact | Inherent Risk | Control Effectiveness | Residual Risk | Priority |
|---|---|---|---|---|---|---|---|---|
| [FINDING-YYYY-MM-001] | [Service Name] | [Brief description] | [High / Med / Low] | [High / Med / Low] | [Critical / High / Med / Low] | [Strong / Adequate / Weak] | [Critical / High / Med / Low] | [1 / 2 / 3] |
| [FINDING-YYYY-MM-002] | [Service Name] | [Brief description] | [High / Med / Low] | [High / Med / Low] | [Critical / High / Med / Low] | [Strong / Adequate / Weak] | [Critical / High / Med / Low] | [1 / 2 / 3] |

### 6.3 Carry-Forward Risk Items

*List risk items from prior months that have not yet been fully remediated, including updated residual risk ratings where applicable.*

| Finding ID (Original) | Original Month | Service | Description | Prior Residual Risk | Current Residual Risk | Remediation Status |
|---|---|---|---|---|---|---|
| [FINDING-YYYY-MM-00X] | [Month Year] | [Service Name] | [Brief description] | [Rating] | [Rating] | [In Progress / Escalated / Pending Vendor / Closed] |

---

## 7. Recommendations and Action Items

*For each finding and risk identified in Sections 4 and 6, document the recommended corrective or preventive action, the accountable owner, and the committed completion date. All open action items must be tracked in [Organization Name]'s IT risk or issue register.*

### 7.1 Recommendations Summary

| Action ID | Finding Reference | Recommendation | Action Type | Priority | Accountable Owner | Target Completion Date | Status |
|---|---|---|---|---|---|---|---|
| ACT-YYYY-MM-001 | [FINDING-YYYY-MM-001] | [Description of recommended action] | [Corrective / Preventive / Compensatory] | [Critical / High / Med / Low] | [Name / Role] | [Date] | [New / In Progress / Completed / Overdue] |
| ACT-YYYY-MM-002 | [FINDING-YYYY-MM-002] | [Description of recommended action] | [Corrective / Preventive / Compensatory] | [Critical / High / Med / Low] | [Name / Role] | [Date] | [New / In Progress / Completed / Overdue] |

### 7.2 Detailed Action Plans

#### Action ACT-YYYY-MM-001 — [Action Title]

| Field | Details |
|---|---|
| **Action ID** | ACT-YYYY-MM-001 |
| **Related Finding** | [FINDING-YYYY-MM-001] |
| **Root Cause Addressed** | [State the specific root cause this action resolves] |
| **Recommended Action** | [Detailed description of the corrective or preventive measure] |
| **Expected Outcome** | [Measurable outcome that confirms the action is effective] |
| **Accountable Owner** | [Name, Title] |
| **Supporting Team** | [Team or individuals providing support] |
| **Required Resources** | [Budget, tools, headcount, vendor engagement, etc.] |
| **Interim Mitigation** | [Compensating controls in place until the action is completed] |
| **Target Completion Date** | [Date] |
| **Review Checkpoint** | [Intermediate milestone date if applicable] |
| **Status** | [New / In Progress / Completed / Overdue / Escalated] |
| **Progress Update** | [Brief status narrative — populate at review] |

*Replicate the action plan block above for each additional action item.*

### 7.3 Carry-Forward Action Items from Prior Months

| Action ID (Original) | Original Month | Description | Owner | Original Target Date | Revised Target Date | Status | Justification for Delay |
|---|---|---|---|---|---|---|---|
| ACT-YYYY-MM-00X | [Month Year] | [Brief description] | [Name] | [Original Date] | [Revised Date] | [In Progress / Overdue / Escalated] | [Reason for delay if applicable] |

---

## 8. Management Response

*This section captures the formal response from management to the findings and recommendations in this report. Responses must be provided within [X] business days of report issuance. Management responses are binding commitments reviewed at the following month's report.*

### 8.1 Management Acknowledgement

*Management confirms receipt and review of this report. Any disagreement with findings or risk ratings must be documented with supporting justification.*

| Field | Details |
|---|---|
| **Report Reviewed By** | [Name, Title] |
| **Review Date** | [Date] |
| **Overall Assessment** | [Accepted / Accepted with Comments / Disputed — state reason] |
| **General Commentary** | [Management's overall commentary on performance and the adequacy of proposed remediation] |

### 8.2 Management Response to Individual Findings

| Finding ID | Management Response | Agreed Action | Committed Owner | Committed Completion Date |
|---|---|---|---|---|
| [FINDING-YYYY-MM-001] | [Accepted / Disputed — provide justification if disputed] | [Agreed corrective action] | [Name] | [Date] |
| [FINDING-YYYY-MM-002] | [Accepted / Disputed — provide justification if disputed] | [Agreed corrective action] | [Name] | [Date] |

### 8.3 Escalations and Board-Level Items

*Document any findings or risks that require escalation to the Board Risk Committee, IT Steering Committee, or senior management beyond the Head of IT Operations.*

| Item | Escalation Rationale | Escalated To | Escalation Date | Expected Resolution |
|---|---|---|---|---|
| [Description] | [Reason escalation is warranted — e.g., regulatory reportable, financial impact, repeat breach] | [Committee / Individual] | [Date] | [Date / Milestone] |

### 8.4 Regulatory Reporting Obligations

*Identify any SLA breach or incident that triggers a mandatory notification obligation to Bank Negara Malaysia under the RMiT policy or other applicable regulations.*

| Incident / Finding | Regulatory Trigger | Applicable Clause | Notification Required By | Notification Status |
|---|---|---|---|---|
| [Description] | [Nature of trigger — e.g., prolonged outage, critical system failure] | [BNM RMiT Clause / Other] | [Date] | [Submitted / Pending / Not Required] |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines the accountabilities for the preparation, review, approval, and distribution of this Monthly SLA Performance Report.*

### 9.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | Head of IT Operations | IT Service Management Team | IT Risk & Compliance | CIO / CITO | Business Continuity Manager | Vendor Managers | Board Risk Committee | BNM (if required) |
|---|---|---|---|---|---|---|---|---|
| Define and maintain SLA targets | A | R | C | C | C | C | I | I |
| Collect and validate performance data | C | R | C | I | I | R (vendor data) | — | — |
| Prepare monthly SLA report | A | R | C | I | I | C | — | — |
| Review findings and risk ratings | A | C | R | C | C | C | — | — |
| Review and approve report | A | C | C | R | I | I | — | — |
| Distribute report to management | R | C | I | I | I | I | I | — |
| Track and close action items | A | R | R | I | I | C | — | — |
| Escalate critical findings | A | C | C | R | C | I | R | I |
| Regulatory notification (if required) | C | I | R | A | I | I | I | R |
| Quarterly review of SLA framework | A | R | R | C | C | C | I | — |

### 9.2 Key Roles and Contacts

| Role | Name | Contact | Responsibility |
|---|---|---|---|
| Head of IT Operations (Report Owner) | [Name] | [Email / Extension] | Overall accountability for report quality and SLA governance |
| IT Service Management Lead | [Name] | [Email / Extension] | Data collection, report preparation, action tracking |
| IT Risk & Compliance Manager | [Name] | [Email / Extension] | Risk rating validation, regulatory compliance review |
| CIO / CITO | [Name] | [Email / Extension] | Report approval, escalation authority |
| Vendor Manager(s) | [Name(s)] | [Email / Extension] | Third-party SLA data submission and escalation |

---

## 10. Review and Approval

### 10.1 Document Review Schedule

| Review Type | Frequency | Trigger for Ad-Hoc Review |
|---|---|---|
| Report Issuance | Monthly | — |
| SLA Target Review | Quarterly | Material change in service, regulatory requirement, or repeated breach pattern |
| Template / Framework Review | Annually | BNM RMiT policy update, significant organisational change, audit recommendation |

### 10.2 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version — template established |
| [1.1] | [Date] | [Author Name] | [Description of changes made] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 10.3 Approval Sign-Off

*This report must be reviewed and approved by the designated approvers prior to distribution. Electronic signatures or documented email approvals are acceptable in accordance with [Organization Name]'s document control policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By — IT Service Management Lead | [Name] | __________________ | [Date] |
| Reviewed By — IT Risk & Compliance Manager | [Name] | __________________ | [Date] |
| Reviewed By — Head of IT Operations | [Name] | __________________ | [Date] |
| Approved By — CIO / CITO | [Name] | __________________ | [Date] |
| Noted By — Board Risk Committee Chairperson | [Name] | __________________ | [Date] |

---

## 11. References

### 11.1 Regulatory References

| Reference | Document Title | Issuing Authority | Relevant Clause(s) | Applicability |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | **Clause 10.29** | SLA monitoring and management reporting |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Other Relevant Clauses] | [Applicability description] |
| [Other BNM Policy] | [Policy Title] | Bank Negara Malaysia | [Clause] | [Applicability description] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | [Section, if applicable] | [Applicability description] |
| [NACSA Guideline] | [Guideline Title, if applicable] | NACSA | [Clause, if applicable] | [Applicability description] |

### 11.2 Internal References

| Document Title | Document ID | Owner | Relationship to This Report |
|---|---|---|---|
| IT Risk Management Policy | [DOC-ID] | Head of IT Risk | Defines risk appetite and rating methodology used in this report |
| Business Continuity Plan | [DOC-ID] | Business Continuity Manager | Referenced for RTO/RPO alignment with SLA targets |
| IT Service Management Policy | [DOC-ID] | Head of IT Operations | Defines SLA framework and incident management procedures |
| Vendor Management Policy | [DOC-ID] | Vendor Management Office | Governs third-party SLA obligations referenced in Section 5.4 |
| IT Incident Management Procedure | [DOC-ID] | IT Service Management Lead | Defines incident classification and escalation used in this report |
| [Service-Level Agreement — Service Name] | [DOC-ID] | [Service Owner] | Provides contractual SLA targets reported in Section 5 |

---

## 12. Appendices

### Appendix A — Incident Log Summary

*Attach or reproduce the full incident log for the reporting period, extracted from [ITSM Tool]. Include Incident ID, priority, affected service, open/close timestamps, resolution summary, and SLA compliance status for each incident.*

| Incident ID | Priority | Affected Service | Opened | Closed | MTTR (hrs) | Response SLA | Resolution SLA | Root Cause Category |
|---|---|---|---|---|---|---|---|---|
| [INC-YYYYMMDD-001] | P[N] | [Service Name] | [DateTime] | [DateTime] | [X] | [Met / Breached] | [Met / Breached] | [Hardware / Software / Process / Vendor / Other] |

### Appendix B — Change Management Summary

*Summarise all changes implemented during the reporting period and their outcome. Highlight any failed or backed-out changes that contributed to SLA impacts.*

| Change ID | Change Type | Affected Service | Implementation Date | Outcome | SLA Impact |
|---|---|---|---|---|---|
| [CHG-YYYYMMDD-001] | [Standard / Normal / Emergency] | [Service Name] | [Date] | [Successful / Failed / Backed Out] | [None / Contributed to [Finding ID]] |

### Appendix C — System Availability Raw Data

*Attach monitoring system extracts confirming the availability figures reported in Section 5.1. Data should be signed off by the IT Service Management Lead to confirm authenticity. Raw data files may be provided as separate attachments referenced here.*

| Service Name | Monitoring System | Data Extract Reference | Validated By | Validation Date |
|---|---|---|---|---|
| [Service Name] | [Monitoring Tool] | [File Name / Attachment Ref] | [Name] | [Date] |

### Appendix D — Vendor SLA Evidence

*Attach vendor-provided SLA performance reports, portal screenshots, or contractual penalty computations for all third-party services in scope. Each vendor submission should be referenced to the relevant row in Section 5.4.*

| Vendor Name | Service | Evidence Type | Reference / Attachment | Received Date | Validated By |
|---|---|---|---|---|---|
| [Vendor Name] | [Service] | [Monthly Report / Portal Extract / Email] | [Attachment Ref] | [Date] | [Name] |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **SLA** | Service Level Agreement — a formal commitment between a service provider and customer defining performance targets |
| **MTTR** | Mean Time To Restore — average time taken to restore a service after a failure |
| **MTBF** | Mean Time Between Failures — average time between service failures |
| **KPI** | Key Performance Indicator — a quantifiable measure of performance against a defined target |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk for financial institutions |
| **P1 / P2 / P3 / P4** | Incident priority tiers as defined in [Organization Name]'s IT Incident Management Procedure |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **CAB** | Change Advisory Board — governance body responsible for authorising technology changes |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a service after a disruption |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss measured in time |
| **BNM** | Bank Negara Malaysia — the Central Bank of Malaysia |

### Appendix F — Prior Month Action Item Status

*Reproduce the full list of open action items carried forward from prior months, updated with current progress. This appendix provides the audit trail for management and regulatory review.*

| Action ID | Month Raised | Description | Owner | Target Date | Current Status | Evidence of Progress |
|---|---|---|---|---|---|---|
| ACT-YYYY-MM-00X | [Month Year] | [Description] | [Name] | [Date] | [In Progress / Overdue / Closed] | [Description of progress or closure evidence] |

---

*This document is classified as **Confidential**. It is intended solely for the use of [Organization Name] management and authorised personnel. Unauthorised disclosure, reproduction, or distribution of this document is strictly prohibited. Queries regarding this document should be directed to the Head of IT Operations at [contact details].*

*Document ID: [Document ID] | Version: 1.0 | Last Updated: [Date]*