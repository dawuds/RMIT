# SLA Breach Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Vendor Management |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the authoritative log template for recording all Service Level Agreement (SLA) breaches identified within [Organization Name]'s third-party and vendor service arrangements. It captures the nature of each breach, the impacted service, corrective actions taken, and resolution outcomes, in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically Clauses **10.29** and **10.48**.

These records support the institution's obligations to maintain robust vendor oversight, ensure technology service continuity, and demonstrate accountability to regulators, auditors, and internal governance bodies.

### 1.2 Scope

This log applies to:

- All third-party technology service providers and vendors contracted by [Organization Name]
- All services governed by a formal Service Level Agreement, Underpinning Contract, or Operational Level Agreement
- All SLA breaches, near-breaches, and repeated threshold violations identified through monitoring, incident management, or vendor reporting
- Internal shared service arrangements where SLA commitments are formally defined

This document does **not** cover service degradations that fall within acceptable tolerance bands without breaching agreed thresholds.

---

## 2. Regulatory Basis

*This section identifies the specific BNM RMiT policy clauses that mandate the maintenance of SLA breach records. Reference these clauses when presenting this log to auditors or regulators.*

| Clause | Requirement Summary |
|---|---|
| **RMiT 10.29** | Financial institutions must establish a robust framework for managing outsourced technology services, including monitoring of service levels and maintaining records of performance deviations and remediation actions. |
| **RMiT 10.48** | Institutions are required to ensure that outsourcing agreements contain adequate provisions for service level monitoring, breach escalation, and corrective action, with records retained and available for regulatory review. |

---

## 3. Asset / Item Identification

*Record the identifying details of the vendor service arrangement and the specific SLA item that was breached. Each entry in this log must correspond to a discrete breach event tied to a uniquely identifiable contract or service.*

### 3.1 SLA Breach Record Entry

| Field | Details |
|---|---|
| **Breach Record ID** | [BR-YYYY-NNNNN] |
| **Date and Time of Breach Identified** | [DD/MM/YYYY HH:MM] |
| **Date and Time of Breach Occurrence** | [DD/MM/YYYY HH:MM] |
| **Vendor / Service Provider Name** | [Vendor Name] |
| **Vendor Registration Number** | [Company Registration No.] |
| **Contract / Agreement Reference** | [Contract ID / Agreement Number] |
| **Affected Service Name** | [e.g., Core Banking Platform, Payment Gateway, Cloud Infrastructure] |
| **SLA Metric Breached** | [e.g., System Availability, Incident Response Time, Recovery Time Objective] |
| **Agreed SLA Threshold** | [e.g., 99.9% monthly uptime / 4-hour response time] |
| **Actual Performance Recorded** | [e.g., 98.7% / 6 hours 15 minutes] |
| **Breach Duration** | [e.g., 3 hours 22 minutes] |
| **Monitoring Source / Evidence** | [e.g., ITSM Platform, APM Tool, Vendor Report, Incident Ticket ID] |

---

## 4. Classification and Categorisation

*Classify the breach according to its severity, type, and potential impact. Consistent categorisation enables trend analysis and supports escalation decisions.*

### 4.1 Breach Severity

| Severity Level | Definition | Applicable? |
|---|---|---|
| **Critical** | Breach directly impacts customer-facing services, core banking operations, or regulatory obligations | [ ] Yes / [ ] No |
| **High** | Breach affects significant internal operations or has potential to escalate to customer impact | [ ] Yes / [ ] No |
| **Medium** | Breach affects non-critical internal processes with manageable workarounds in place | [ ] Yes / [ ] No |
| **Low** | Minor breach with negligible operational impact; contained within agreed tolerance margins | [ ] Yes / [ ] No |

**Assigned Severity:** [Critical / High / Medium / Low]

### 4.2 Breach Type

*Select all that apply.*

- [ ] Availability / Uptime Breach
- [ ] Incident Response Time Breach
- [ ] Recovery Time Objective (RTO) Breach
- [ ] Recovery Point Objective (RPO) Breach
- [ ] Change Management SLA Breach
- [ ] Reporting / Communication SLA Breach
- [ ] Security Obligation Breach
- [ ] Data Handling / Confidentiality Breach
- [ ] Other: [Specify]

### 4.3 Recurrence Classification

| Field | Details |
|---|---|
| **First Occurrence for this SLA metric?** | [ ] Yes / [ ] No |
| **Number of breaches for this metric in the past 12 months** | [Number] |
| **Recurrence Classification** | [ ] Isolated / [ ] Recurring / [ ] Systemic |

### 4.4 Regulatory and Reputational Impact Assessment

| Impact Dimension | Assessment |
|---|---|
| **Customer Impact** | [None / Minimal / Moderate / Significant] — [Brief description] |
| **Regulatory Reporting Obligation Triggered?** | [ ] Yes — [Specify reporting obligation] / [ ] No |
| **Reputational Risk** | [Low / Medium / High] |
| **Financial Exposure** | [None / Penalty clause triggered / Estimated financial impact: RM [Amount]] |

---

## 5. Owner and Custodian

*Identify the accountable parties on both the vendor side and within [Organization Name] for this breach record. This section establishes clear lines of responsibility for remediation and record integrity.*

### 5.1 Internal Ownership

| Role | Name | Department | Contact |
|---|---|---|---|
| **Record Owner** | Head of Vendor Management | Vendor Management | [Email / Extension] |
| **Assigned Breach Manager** | [Name] | [Department] | [Email / Extension] |
| **Technology Risk Focal Point** | [Name] | Technology Risk | [Email / Extension] |
| **Business Owner (Impacted Service)** | [Name] | [Business Unit] | [Email / Extension] |

### 5.2 Record Custodian

| Field | Details |
|---|---|
| **System of Record** | [e.g., GRC Platform / SharePoint / ITSM Tool] |
| **Custodian Role** | [e.g., Vendor Management Team / IT Governance] |
| **Retention Responsibility** | Head of Vendor Management |
| **Record Location / Path** | [System path, folder reference, or URL — internal only] |

### 5.3 Vendor Contact for this Breach

| Field | Details |
|---|---|
| **Vendor Escalation Contact Name** | [Name] |
| **Vendor Escalation Contact Role** | [e.g., Account Manager / Service Delivery Manager] |
| **Vendor Contact Email** | [Email] |
| **Vendor Contact Phone** | [Phone Number] |
| **Vendor Acknowledgement Received** | [ ] Yes — Date: [DD/MM/YYYY] / [ ] No — Reason: [Reason] |

---

## 6. Status and Lifecycle Stage

*Track the end-to-end lifecycle of each SLA breach from identification through to formal closure. All stage transitions must be timestamped and initialled by the responsible party.*

### 6.1 Breach Lifecycle Tracker

| Stage | Status | Date Completed | Actioned By |
|---|---|---|---|
| **1. Breach Identified** | [Complete / In Progress / Pending] | [DD/MM/YYYY] | [Name / Role] |
| **2. Breach Logged** | [Complete / In Progress / Pending] | [DD/MM/YYYY] | [Name / Role] |
| **3. Vendor Notified** | [Complete / In Progress / Pending] | [DD/MM/YYYY] | [Name / Role] |
| **4. Root Cause Analysis Initiated** | [Complete / In Progress / Pending] | [DD/MM/YYYY] | [Name / Role] |
| **5. Corrective Action Plan Submitted by Vendor** | [Complete / In Progress / Pending] | [DD/MM/YYYY] | [Name / Role] |
| **6. Corrective Action Plan Reviewed and Accepted** | [Complete / In Progress / Pending] | [DD/MM/YYYY] | [Name / Role] |
| **7. Corrective Actions Implemented** | [Complete / In Progress / Pending] | [DD/MM/YYYY] | [Name / Role] |
| **8. Effectiveness Verification** | [Complete / In Progress / Pending] | [DD/MM/YYYY] | [Name / Role] |
| **9. Penalty / Remedy Applied (if applicable)** | [Complete / N/A] | [DD/MM/YYYY] | [Name / Role] |
| **10. Breach Record Formally Closed** | [Complete / In Progress / Pending] | [DD/MM/YYYY] | [Name / Role] |

**Current Lifecycle Stage:** [Stage Number and Description]

### 6.2 Root Cause Analysis Summary

*To be completed by the vendor and reviewed by the Assigned Breach Manager. Attach the full RCA report as an appendix to this record.*

| Field | Details |
|---|---|
| **Root Cause Category** | [ ] Technology Failure / [ ] Process Failure / [ ] Human Error / [ ] Third-Party Dependency / [ ] Capacity Issue / [ ] Other: [Specify] |
| **Root Cause Description** | [Concise description of the identified root cause] |
| **Contributing Factors** | [List any contributing factors] |
| **Full RCA Report Reference** | [Document ID / Attachment Reference] |

### 6.3 Corrective Action Plan

*Each corrective action must have a defined owner, target date, and verification method. Do not close this record until all actions are verified as complete.*

| Action ID | Corrective Action Description | Responsible Party | Target Completion Date | Actual Completion Date | Verification Method | Status |
|---|---|---|---|---|---|---|
| CA-001 | [Description of action] | [Vendor / Internal Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [e.g., Evidence submitted / System test] | [Open / In Progress / Closed] |
| CA-002 | [Description of action] | [Vendor / Internal Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [e.g., Evidence submitted / System test] | [Open / In Progress / Closed] |
| CA-003 | [Description of action] | [Vendor / Internal Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [e.g., Evidence submitted / System test] | [Open / In Progress / Closed] |

### 6.4 Preventive Measures

*Document measures agreed to prevent recurrence of this breach type. These should feed into the vendor's service improvement plan and quarterly trend review.*

| Measure | Owner | Target Date | Status |
|---|---|---|---|
| [Description of preventive measure] | [Owner] | [DD/MM/YYYY] | [Pending / Implemented] |
| [Description of preventive measure] | [Owner] | [DD/MM/YYYY] | [Pending / Implemented] |

### 6.5 Breach Closure Summary

| Field | Details |
|---|---|
| **Closure Justification** | [Brief statement confirming all corrective actions verified and breach formally resolved] |
| **Residual Risk Accepted?** | [ ] Yes — [Detail residual risk and approver] / [ ] No |
| **Closed By** | [Name], [Role] |
| **Date Closed** | [DD/MM/YYYY] |

---

## 7. Last Review Date

*This section records the formal review history of this breach record, including interim reviews conducted during the corrective action lifecycle and the mandatory quarterly trend review cycle.*

### 7.1 Record Review History

| Review Date | Review Type | Reviewed By | Role | Outcome / Notes |
|---|---|---|---|---|
| [DD/MM/YYYY] | Initial Logging Review | [Name] | Vendor Management | [e.g., Record validated, vendor notified] |
| [DD/MM/YYYY] | CAP Progress Review | [Name] | Assigned Breach Manager | [e.g., Actions on track / delayed — reason] |
| [DD/MM/YYYY] | Closure Review | [Name] | Head of Vendor Management | [e.g., Approved for closure] |
| [DD/MM/YYYY] | Quarterly Trend Review | [Name] | Head of Vendor Management | [e.g., Included in Q[X] YYYY SLA Trend Report] |

**Date of Last Review:** [DD/MM/YYYY]

**Next Scheduled Review:** [DD/MM/YYYY — align to quarterly review cycle or next CAP milestone]

### 7.2 Quarterly Trend Review Reference

*SLA breach records are aggregated for trend analysis on a quarterly basis. Reference the applicable quarterly SLA Performance Report below.*

| Quarter | Report Reference | Date Issued | Key Finding for this Breach |
|---|---|---|---|
| [Q1/Q2/Q3/Q4 YYYY] | [Report ID] | [DD/MM/YYYY] | [Summary of how this breach featured in trend analysis] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for SLA breach record management across [Organization Name]. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of Vendor Management | Assigned Breach Manager | Technology Risk | Business Owner | Vendor | Internal Audit | Compliance |
|---|---|---|---|---|---|---|---|
| Identify and log SLA breach | R | R | I | I | I | — | — |
| Notify vendor of breach | A | R | I | I | C | — | — |
| Initiate root cause analysis | A | R | C | C | R | — | — |
| Review and accept CAP | A | R | C | C | C | — | — |
| Monitor CAP implementation | A | R | I | I | R | — | — |
| Verify corrective action effectiveness | A | R | C | C | C | I | — |
| Apply contractual penalties | A | R | — | — | I | — | C |
| Conduct quarterly trend review | A | R | C | I | I | I | I |
| Escalate systemic / critical breaches | A | R | R | C | I | I | C |
| Formally close breach record | A | R | I | I | I | — | — |
| Archive and retain records | A | R | — | — | — | I | I |
| Present to Board / Risk Committee | A | — | C | — | — | — | C |

---

## 9. Escalation and Reporting Thresholds

*Define the conditions under which SLA breach information must be escalated beyond the Vendor Management function.*

| Condition | Escalation Path | Timeframe |
|---|---|---|
| Critical severity breach affecting customer services | Head of Vendor Management → CTO / CIO → Risk Committee | Within 24 hours of identification |
| Breach triggers regulatory reporting obligation | Head of Vendor Management → Compliance → BNM (if required) | Per BNM reporting timeline |
| Third consecutive breach of the same SLA metric | Head of Vendor Management → CTO → Contract Review / Remediation | Within 5 business days |
| Vendor fails to submit CAP within agreed timeline | Head of Vendor Management → Legal / Procurement | Upon deadline lapse |
| Systemic breach classification | Head of Vendor Management → Risk Management → Board Risk Committee | Next scheduled committee meeting |

---

## 10. Roles and Responsibilities

### 10.1 Review and Approval

*This log template and the associated process are subject to periodic review to ensure continued alignment with BNM RMiT requirements and [Organization Name]'s vendor management framework.*

**Version History**

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name], [Role] | Initial version established |
| [1.1] | [DD/MM/YYYY] | [Author Name], [Role] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name], [Role] | [Description of major revision] |

**Approval Sign-Off**

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Vendor Management | [Name] | [Signature] | [DD/MM/YYYY] |
| Chief Information Officer / Chief Technology Officer | [Name] | [Signature] | [DD/MM/YYYY] |
| Chief Risk Officer | [Name] | [Signature] | [DD/MM/YYYY] |
| Compliance Officer | [Name] | [Signature] | [DD/MM/YYYY] |
| Internal Audit Representative | [Name] | [Signature] | [DD/MM/YYYY] |

---

## 11. References

| Reference | Description |
|---|---|
| **BNM RMiT Policy Document, Clause 10.29** | Outsourcing risk management — monitoring of service levels, performance deviations, and remediation obligations for third-party technology services |
| **BNM RMiT Policy Document, Clause 10.48** | Requirements for outsourcing agreements to include SLA breach escalation, corrective action provisions, and record retention for regulatory inspection |
| **[Organization Name] Vendor Management Policy** | [Internal policy reference and version] |
| **[Organization Name] Third-Party Risk Management Framework** | [Internal framework reference and version] |
| **[Organization Name] IT Incident Management Policy** | [Internal policy reference and version] |
| **[Organization Name] Business Continuity Management Policy** | [Internal policy reference and version] |
| **Personal Data Protection Act 2010 (PDPA)** | Applicable where SLA breach involves personal data of customers or staff |
| **NACSA Cybersecurity Framework** | Applicable where SLA breach involves cybersecurity obligations of a critical information infrastructure provider |

---

## 12. Appendices

### Appendix A — SLA Breach Log Summary Register

*Maintain a consolidated register of all breach records for management reporting and trend analysis. Each row represents one discrete breach event.*

| Breach Record ID | Vendor Name | Service | SLA Metric Breached | Breach Date | Severity | Status | Closure Date | Quarterly Report Ref |
|---|---|---|---|---|---|---|---|---|
| BR-[YYYY]-00001 | [Vendor] | [Service] | [Metric] | [DD/MM/YYYY] | [Critical/High/Medium/Low] | [Open/Closed] | [DD/MM/YYYY] | [Report ID] |
| BR-[YYYY]-00002 | [Vendor] | [Service] | [Metric] | [DD/MM/YYYY] | [Critical/High/Medium/Low] | [Open/Closed] | [DD/MM/YYYY] | [Report ID] |

### Appendix B — Root Cause Analysis Report Template

*Attach the completed vendor-submitted RCA report here. The RCA report must cover: timeline of events, contributing factors, root cause determination, corrective actions, and preventive measures. Reference format: [RCA-BR-YYYY-NNNNN].*

[Attach RCA Report — Reference: RCA-[Breach Record ID]]

### Appendix C — Evidence of Corrective Action Completion

*Attach documentary evidence for each completed corrective action (e.g., system test results, configuration change records, vendor certification, updated runbooks). Each evidence artefact must be labelled with the corresponding Corrective Action ID.*

| Corrective Action ID | Evidence Description | Document Reference | Date Submitted |
|---|---|---|---|
| CA-001 | [Description of evidence] | [Document ID / Attachment] | [DD/MM/YYYY] |
| CA-002 | [Description of evidence] | [Document ID / Attachment] | [DD/MM/YYYY] |

### Appendix D — SLA Performance Trend Report (Quarterly)

*Reference to the most recent quarterly SLA performance trend report consolidating all breach records for the review period. Report covers: breach frequency by vendor, breach frequency by SLA metric, recurrence analysis, systemic risk indicators, and recommended management actions.*

[Attach or reference: Quarterly SLA Performance Trend Report — Q[X] [YYYY] — Reference: SLAQ-[YYYY]-Q[X]]

### Appendix E — Contractual Penalty Calculation Record

*Where a breach triggers a financial remedy or service credit under the governing contract, attach the penalty calculation and evidence of application or waiver (with justification for any waiver) here.*

| Field | Details |
|---|---|
| **Penalty Clause Reference** | [Contract clause number] |
| **Calculated Penalty / Service Credit** | RM [Amount] |
| **Applied / Waived** | [ ] Applied / [ ] Waived |
| **Waiver Justification (if applicable)** | [Justification and approver name] |
| **Approved By** | [Name], [Role] |
| **Date** | [DD/MM/YYYY] |

---

*This document is classified **Confidential**. Distribution is restricted to authorised personnel within [Organization Name] with a legitimate need to access SLA breach information. Unauthorised disclosure is prohibited and may constitute a breach of [Organization Name]'s information security policy and applicable law.*

*Retention Period: Retain for a minimum of **7 years** from the date of breach closure, or as otherwise required by BNM or applicable legislation, whichever is longer.*