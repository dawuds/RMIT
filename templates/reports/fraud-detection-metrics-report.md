# Fraud Detection Metrics Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Fraud Management |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Review Frequency** | Quarterly |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. Handle in accordance with [Organization Name]'s Information Security and Data Classification Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [Transaction Monitoring Rules](#5-transaction-monitoring-rules)
6. [Alert Triage Procedures](#6-alert-triage-procedures)
7. [Customer Notification Process](#7-customer-notification-process)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Fraud Detection Metrics Report documents the quantitative and qualitative performance of [Organization Name]'s fraud detection capabilities for the reporting period **[Reporting Quarter] [Reporting Year]**. The report consolidates fraud detection rates, false positive rates, alert volumes, triage outcomes, and remediation effectiveness to provide senior management and relevant governance committees with a comprehensive view of the institution's fraud risk posture.

This report is prepared in compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.7**, which mandates that financial institutions establish robust monitoring, detection, and response mechanisms for technology-enabled fraud, and that effectiveness metrics be regularly reviewed by senior management.

### 1.2 Scope

*Specify the systems, channels, and business units covered by this report. Clearly delineate what is in and out of scope to ensure audit clarity.*

This report covers fraud detection activities across the following scope:

**In-Scope Channels and Systems:**

- [e.g., Internet Banking Platform]
- [e.g., Mobile Banking Application]
- [e.g., ATM and CDM Network]
- [e.g., Card Payment Processing (Visa / Mastercard)]
- [e.g., Interbank Fund Transfer (IBG / RENTAS / DuitNow)]
- [e.g., Merchant Acquiring Systems]
- [e.g., Fraud Management System (FMS) — [System Name / Version]]

**In-Scope Business Units:**

- [e.g., Retail Banking]
- [e.g., Corporate and SME Banking]
- [e.g., Cards and Payments]
- [e.g., Digital Banking]

**Out of Scope:**

- [e.g., Insurance product fraud — refer to separate Insurance Fraud Report]
- [e.g., Internal employee fraud — refer to Internal Audit Reports]
- [e.g., Physical branch cash fraud — refer to Operations Risk Report]

### 1.3 Reporting Period

| Field | Details |
|---|---|
| **Reporting Quarter** | [Q1 / Q2 / Q3 / Q4] |
| **Reporting Year** | [YYYY] |
| **Period Start Date** | [DD Month YYYY] |
| **Period End Date** | [DD Month YYYY] |
| **Report Prepared By** | [Name, Designation] |
| **Report Prepared Date** | [DD Month YYYY] |

---

## 2. Executive Summary

*Provide a concise, 1–2 page narrative suitable for senior management and board-level readers. Highlight the most significant trends, achievements, and concerns without requiring the reader to review detailed sections. Include a brief statement on overall fraud risk posture.*

### 2.1 Reporting Period Overview

During **[Reporting Quarter] [Reporting Year]**, [Organization Name]'s Fraud Management function processed a total of **[Total Transaction Volume]** transactions valued at **MYR [Total Transaction Value]** across all monitored channels. The fraud detection system generated **[Total Alerts]** alerts, of which **[Confirmed Fraud Cases]** were confirmed as fraudulent, representing a fraud rate of **[X]%** by volume and **MYR [Fraud Value Confirmed]** by value.

*Summarise whether fraud losses are trending upward, downward, or stable, and provide context for any significant deviations from the prior quarter or year-to-date figures.*

[Insert narrative summary of fraud landscape for the period — e.g., emerging typologies, regulatory developments, industry incidents that may have influenced detection performance.]

### 2.2 Key Performance Indicators at a Glance

| KPI | Target | Actual | Status |
|---|---|---|---|
| Fraud Detection Rate (by volume) | ≥ [X]% | [X]% | [On Target / Below Target / Exceeded] |
| Fraud Detection Rate (by value) | ≥ [X]% | [X]% | [On Target / Below Target / Exceeded] |
| False Positive Rate | ≤ [X]% | [X]% | [On Target / Below Target / Exceeded] |
| Alert-to-Case Conversion Rate | ≥ [X]% | [X]% | [On Target / Below Target / Exceeded] |
| Average Alert Resolution Time (Hours) | ≤ [X] hrs | [X] hrs | [On Target / Below Target / Exceeded] |
| Customer Notification SLA Compliance | ≥ [X]% | [X]% | [On Target / Below Target / Exceeded] |
| Fraud Loss Ratio (Losses / Total Txn Value) | ≤ [X] bps | [X] bps | [On Target / Below Target / Exceeded] |
| Recovery Rate on Confirmed Fraud | ≥ [X]% | [X]% | [On Target / Below Target / Exceeded] |

### 2.3 Material Issues and Management Actions

*List the top 3–5 issues or concerns identified during the quarter, with a brief description of each and the management action taken or planned.*

| No. | Issue / Observation | Severity | Management Action | Target Resolution Date |
|---|---|---|---|---|
| 1 | [e.g., Elevated false positive rate for DuitNow transfers above MYR 10,000] | [High / Medium / Low] | [e.g., Rule threshold recalibration initiated — see Section 5.3] | [DD Month YYYY] |
| 2 | [e.g., New social engineering typology — BNPL account takeover] | [High / Medium / Low] | [e.g., New detection rule deployed on [date]] | [DD Month YYYY] |
| 3 | [Describe issue] | [High / Medium / Low] | [Describe action] | [DD Month YYYY] |

### 2.4 Fraud Risk Posture Assessment

*Provide the overall assessment of the institution's fraud risk posture for the period. This should represent the Head of Fraud Management's professional judgement.*

**Overall Fraud Risk Posture: [Acceptable / Requires Monitoring / Elevated / Critical]**

[Provide a 2–3 sentence justification for the posture rating, referencing the KPI performance above and any qualitative factors.]

---

## 3. Scope and Methodology

*Describe the data sources, analytical methods, and any assumptions or limitations that underpin the metrics reported in this document. This section ensures the report is reproducible and audit-ready.*

### 3.1 Data Sources

| Data Source | System / Platform | Data Owner | Data Completeness |
|---|---|---|---|
| Transaction Data | [e.g., Core Banking System — [System Name]] | [Data Owner] | [e.g., 100% — full period] |
| Fraud Alerts | [e.g., Fraud Management System (FMS)] | [Data Owner] | [e.g., 100% — full period] |
| Case Outcomes | [e.g., Case Management System] | [Data Owner] | [e.g., 98% — [X] cases pending closure] |
| Customer Complaints | [e.g., CRM / Contact Centre System] | [Data Owner] | [e.g., 100%] |
| Card Fraud Data | [e.g., Visa / Mastercard Reporting Portal] | [Data Owner] | [e.g., 100%] |
| Police Reports | [e.g., Internal Records Management] | [Data Owner] | [e.g., 100%] |

### 3.2 Analytical Methodology

*Explain how key metrics are calculated. Reference any industry standards or internal policy documents that define the metric calculations.*

**Fraud Detection Rate (FDR):**
> FDR = (Number of Confirmed Fraud Cases Detected by System / Total Confirmed Fraud Cases) × 100%

**False Positive Rate (FPR):**
> FPR = (Number of Alerts Identified as Non-Fraudulent / Total Alerts Generated) × 100%

**Alert-to-Case Conversion Rate:**
> Conversion Rate = (Number of Confirmed Fraud Cases / Total Alerts Reviewed) × 100%

**Fraud Loss Ratio:**
> Fraud Loss Ratio = (Total Confirmed Fraud Losses / Total Transaction Value Processed) × 10,000 (expressed in basis points)

**Recovery Rate:**
> Recovery Rate = (Value of Fraud Losses Recovered / Total Confirmed Fraud Loss Value) × 100%

### 3.3 Assumptions and Limitations

*Document any known data quality issues, scope exclusions, or methodological assumptions that could affect the interpretation of results.*

| No. | Assumption / Limitation | Impact | Mitigation |
|---|---|---|---|
| 1 | [e.g., Card-not-present fraud losses reported by Visa/Mastercard may include a 30-day lag] | [e.g., Quarter-end figures may be understated by approximately [X]%] | [e.g., Prior quarter figures revised upon receipt of final network reports] |
| 2 | [e.g., Alerts generated by legacy rule engine excluded from FMS dashboard reporting] | [e.g., Estimated [X]% of alerts not captured in main metrics] | [e.g., Manual consolidation performed — see Appendix A] |
| 3 | [Describe assumption] | [Describe impact] | [Describe mitigation] |

### 3.4 Comparison Baseline

| Baseline | Period | Notes |
|---|---|---|
| Prior Quarter | [Q(N-1) YYYY] | Primary comparison period |
| Prior Year Same Quarter | [QN YYYY-1] | Seasonality-adjusted comparison |
| Annual YTD | [01 Jan YYYY – End of Quarter] | Year-to-date cumulative |
| Industry Benchmark | [Source, e.g., BNM Industry Data / ABA Fraud Statistics] | Where available |

---

## 4. Key Findings and Observations

*Present the detailed quantitative findings for the reporting period. Provide trend analysis and commentary on significant deviations. Use charts or graphs where the document format supports them; otherwise reference them as exhibits in the Appendices.*

### 4.1 Overall Fraud Volume and Value

| Metric | Current Quarter | Prior Quarter | QoQ Change | Prior Year Same Quarter | YoY Change |
|---|---|---|---|---|---|
| Total Transactions Processed (Volume) | [X] | [X] | [X]% | [X] | [X]% |
| Total Transactions Processed (Value MYR) | [X] | [X] | [X]% | [X] | [X]% |
| Total Fraud Alerts Generated | [X] | [X] | [X]% | [X] | [X]% |
| Confirmed Fraud Cases | [X] | [X] | [X]% | [X] | [X]% |
| Confirmed Fraud Value (MYR) | [X] | [X] | [X]% | [X] | [X]% |
| Fraud Cases Prevented (Intercepted) | [X] | [X] | [X]% | [X] | [X]% |
| Fraud Value Prevented (MYR) | [X] | [X] | [X]% | [X] | [X]% |
| Net Fraud Losses (MYR) | [X] | [X] | [X]% | [X] | [X]% |

*[Insert Exhibit 1 — Quarterly Fraud Trend Chart or reference Appendix B]*

### 4.2 Fraud by Channel

| Channel | Alert Volume | Confirmed Cases | Fraud Value (MYR) | FDR (%) | FPR (%) |
|---|---|---|---|---|---|
| Internet Banking | [X] | [X] | [X] | [X]% | [X]% |
| Mobile Banking | [X] | [X] | [X] | [X]% | [X]% |
| ATM / CDM | [X] | [X] | [X] | [X]% | [X]% |
| Debit Card (POS) | [X] | [X] | [X] | [X]% | [X]% |
| Credit Card (POS) | [X] | [X] | [X] | [X]% | [X]% |
| Card-Not-Present (e-Commerce) | [X] | [X] | [X] | [X]% | [X]% |
| DuitNow / IBG / RENTAS | [X] | [X] | [X] | [X]% | [X]% |
| Other ([Specify]) | [X] | [X] | [X] | [X]% | [X]% |
| **Total** | **[X]** | **[X]** | **[X]** | **[X]%** | **[X]%** |

### 4.3 Fraud by Typology

| Fraud Typology | Cases | Value (MYR) | % of Total Cases | % of Total Value | QoQ Trend |
|---|---|---|---|---|---|
| Account Takeover (ATO) | [X] | [X] | [X]% | [X]% | [↑ / ↓ / →] |
| Phishing / Smishing / Vishing | [X] | [X] | [X]% | [X]% | [↑ / ↓ / →] |
| Card Skimming / Counterfeiting | [X] | [X] | [X]% | [X]% | [↑ / ↓ / →] |
| Authorised Push Payment (APP) Fraud | [X] | [X] | [X]% | [X]% | [↑ / ↓ / →] |
| Investment Scam / Mule Account | [X] | [X] | [X]% | [X]% | [↑ / ↓ / →] |
| Identity Theft | [X] | [X] | [X]% | [X]% | [↑ / ↓ / →] |
| New Account Fraud | [X] | [X] | [X]% | [X]% | [↑ / ↓ / →] |
| Business Email Compromise (BEC) | [X] | [X] | [X]% | [X]% | [↑ / ↓ / →] |
| Other ([Specify]) | [X] | [X] | [X]% | [X]% | [↑ / ↓ / →] |
| **Total** | **[X]** | **[X]** | **100%** | **100%** | — |

### 4.4 Detection Performance Metrics

| Metric | Q1 [YYYY] | Q2 [YYYY] | Q3 [YYYY] | Q4 [YYYY] | Target | Status |
|---|---|---|---|---|---|---|
| Overall Fraud Detection Rate (%) | [X]% | [X]% | [X]% | [X]% | ≥ [X]% | [Status] |
| False Positive Rate (%) | [X]% | [X]% | [X]% | [X]% | ≤ [X]% | [Status] |
| Alert-to-Case Conversion Rate (%) | [X]% | [X]% | [X]% | [X]% | ≥ [X]% | [Status] |
| Avg. Time to Detect (Minutes) | [X] | [X] | [X] | [X] | ≤ [X] min | [Status] |
| Avg. Alert Resolution Time (Hours) | [X] | [X] | [X] | [X] | ≤ [X] hrs | [Status] |
| Fraud Loss Ratio (bps) | [X] | [X] | [X] | [X] | ≤ [X] bps | [Status] |
| Recovery Rate (%) | [X]% | [X]% | [X]% | [X]% | ≥ [X]% | [Status] |

### 4.5 Key Observations and Commentary

*Provide management commentary on the most significant findings. Each observation should include context, root cause analysis where available, and the action taken or recommended.*

**Observation 1: [Title — e.g., Increase in APP Fraud via DuitNow]**

[Provide 3–4 sentences of narrative describing the observation, any root cause analysis, and the response taken.]

**Observation 2: [Title]**

[Provide 3–4 sentences of narrative.]

**Observation 3: [Title]**

[Provide 3–4 sentences of narrative.]

---

## 5. Transaction Monitoring Rules

*Document the status, performance, and governance of the transaction monitoring rules deployed during the reporting period. This section supports RMiT Clause 12.7 requirements for maintaining effective controls.*

### 5.1 Rule Inventory Summary

*Provide a high-level summary of the rule set in operation during the reporting period.*

| Category | Number of Rules Active | Rules Added This Quarter | Rules Decommissioned | Rules Modified |
|---|---|---|---|---|
| Real-Time Blocking Rules | [X] | [X] | [X] | [X] |
| Near-Real-Time Alert Rules | [X] | [X] | [X] | [X] |
| Batch / Overnight Rules | [X] | [X] | [X] | [X] |
| Machine Learning Model Scores | [X] | [X] | [X] | [X] |
| **Total** | **[X]** | **[X]** | **[X]** | **[X]** |

### 5.2 Rule Performance Analysis

*Report on the top-performing and lowest-performing rules. Include both detection effectiveness (hit rate) and efficiency (false positive rate) metrics. Rule names may be generalised or coded for confidentiality in shared versions of this report.*

**Top-Performing Rules by Detection Contribution:**

| Rule ID | Rule Description | Alerts Generated | Confirmed Fraud Hits | Hit Rate (%) | FP Rate (%) |
|---|---|---|---|---|---|
| [RID-001] | [e.g., High-value transfer to new payee — velocity check] | [X] | [X] | [X]% | [X]% |
| [RID-002] | [e.g., Login from new device + high-risk transaction] | [X] | [X] | [X]% | [X]% |
| [RID-003] | [Describe rule] | [X] | [X] | [X]% | [X]% |
| [RID-004] | [Describe rule] | [X] | [X] | [X]% | [X]% |
| [RID-005] | [Describe rule] | [X] | [X] | [X]% | [X]% |

**Rules Flagged for Review (High False Positive Rate):**

| Rule ID | Rule Description | FP Rate (%) | FP Rate Target (%) | Action Required | Target Completion |
|---|---|---|---|---|---|
| [RID-XXX] | [Describe rule] | [X]% | ≤ [X]% | [e.g., Threshold adjustment — under review] | [DD Month YYYY] |
| [RID-XXX] | [Describe rule] | [X]% | ≤ [X]% | [Describe action] | [DD Month YYYY] |

### 5.3 Rule Changes This Quarter

*Document all rule changes implemented during the reporting period. Rule changes require formal approval as per [Organization Name]'s Fraud Rule Change Management Policy.*

| Change Ref | Rule ID | Type of Change | Description | Business Justification | Approved By | Effective Date | Post-Change FPR |
|---|---|---|---|---|---|---|---|
| [CHG-YYYY-NNN] | [RID-XXX] | [New / Modified / Decommissioned] | [Describe change] | [e.g., Response to new APP fraud typology] | [Approver Name] | [DD Month YYYY] | [X]% |
| [CHG-YYYY-NNN] | [RID-XXX] | [New / Modified / Decommissioned] | [Describe change] | [Describe justification] | [Approver Name] | [DD Month YYYY] | [X]% |

### 5.4 Machine Learning Model Performance

*If ML / AI scoring models are deployed as part of the fraud detection system, report on their performance separately. This is relevant to RMiT requirements on the governance of automated decision-making systems.*

| Model Name | Model Version | Deployment Date | AUC-ROC | Precision (%) | Recall (%) | F1 Score | Status |
|---|---|---|---|---|---|---|---|
| [e.g., Account Takeover Scorer v2.1] | [v2.1] | [DD Month YYYY] | [X.XX] | [X]% | [X]% | [X.XX] | [Active / Under Review / Retraining] |
| [e.g., Card Fraud Neural Net] | [v3.0] | [DD Month YYYY] | [X.XX] | [X]% | [X]% | [X.XX] | [Active / Under Review / Retraining] |

**Model Drift Assessment:**

*Summarise whether any deployed models show signs of performance degradation (model drift) and what actions are planned.*

[Provide narrative commentary on model drift observations for the quarter. Reference scheduled retraining dates and any emergency recalibration actions taken.]

### 5.5 Planned Rule Changes Next Quarter

| Priority | Proposed Change | Business Justification | Estimated Implementation Date | Approver |
|---|---|---|---|---|
| [High / Medium / Low] | [Describe proposed rule change] | [Describe justification] | [DD Month YYYY] | [Approver] |
| [High / Medium / Low] | [Describe proposed rule change] | [Describe justification] | [DD Month YYYY] | [Approver] |

---

## 6. Alert Triage Procedures

*Document the alert handling workflow, capacity, and performance during the reporting period. This section demonstrates operational effectiveness of the fraud monitoring function to internal audit and regulatory reviewers.*

### 6.1 Alert Volume and Disposition

*Provide a complete breakdown of how alerts were categorised and resolved during the quarter.*

| Alert Disposition | Volume | % of Total Alerts |
|---|---|---|
| Total Alerts Generated | [X] | 100% |
| Auto-Closed (Rule-Based — No Review Required) | [X] | [X]% |
| Escalated to Analyst for Review | [X] | [X]% |
| — Confirmed Fraud (True Positive) | [X] | [X]% |
| — Cleared as Legitimate (False Positive) | [X] | [X]% |
| — Suspicious — Under Investigation | [X] | [X]% |
| — Closed — Insufficient Evidence | [X] | [X]% |
| Escalated to Level 2 / Senior Analyst | [X] | [X]% |
| Escalated to Law Enforcement / JSJK | [X] | [X]% |

### 6.2 Alert Handling Timeliness

*Report on whether alerts are being reviewed and resolved within the SLA timeframes defined in [Organization Name]'s Fraud Operations Procedures.*

| Alert Priority | SLA Target | Avg. Actual Response Time | % Alerts Meeting SLA | Breaches |
|---|---|---|---|---|
| Priority 1 — Critical (Real-Time Block) | ≤ [X] minutes | [X] minutes | [X]% | [X] |
| Priority 2 — High (e.g., Card-Not-Present, ATO Indicators) | ≤ [X] hours | [X] hours | [X]% | [X] |
| Priority 3 — Medium (Behavioural Anomaly) | ≤ [X] hours | [X] hours | [X]% | [X] |
| Priority 4 — Low (Batch / Overnight Review) | ≤ [X] business days | [X] business days | [X]% | [X] |
| **Overall** | — | — | **[X]%** | **[X]** |

**SLA Breach Root Cause Analysis:**

*Where SLA breaches occurred, provide root cause and corrective actions.*

| Breach Ref | Alert Priority | Number of Breaches | Root Cause | Corrective Action | Status |
|---|---|---|---|---|---|
| [BR-YYYY-NNN] | [Priority Level] | [X] | [e.g., System outage — FMS unavailable for 4 hours on [date]] | [e.g., Incident raised; vendor patch applied on [date]] | [Resolved / In Progress] |
| [BR-YYYY-NNN] | [Priority Level] | [X] | [Describe root cause] | [Describe corrective action] | [Status] |

### 6.3 Analyst Capacity and Workload

*Report on fraud analyst staffing levels and workload during the quarter. Highlight any capacity constraints that affected alert review timeliness.*

| Metric | Current Quarter | Target | Status |
|---|---|---|---|
| Number of Full-Time Fraud Analysts | [X] | [X] | [Adequate / Understaffed] |
| Average Alerts Reviewed per Analyst per Day | [X] | ≤ [X] | [On Target / Exceeded] |
| Analyst Utilisation Rate (%) | [X]% | ≤ [X]% | [On Target / Exceeded] |
| Staff Turnover (Fraud Team) | [X] | 0 | [Status] |
| Training Hours Completed (per Analyst) | [X] hrs | ≥ [X] hrs | [On Target / Below Target] |

### 6.4 Triage Decision Quality

*Report on the accuracy of analyst decisions to validate that human review adds value and that analysts are correctly identifying fraud.*

| Metric | Current Quarter | Prior Quarter | Target |
|---|---|---|---|
| Analyst Decision Accuracy (QA Sample) | [X]% | [X]% | ≥ [X]% |
| Cases Incorrectly Cleared (Later Confirmed Fraud) | [X] | [X] | 0 |
| Cases Incorrectly Blocked (False Positives Upheld) | [X] | [X] | ≤ [X] |
| QA Sample Size (Cases Reviewed) | [X] | [X] | ≥ [X]% of total |

---

## 7. Customer Notification Process

*Document the performance of customer notification obligations, which are critical for compliance with BNM RMiT requirements and PDPA obligations. Customer notification is a key control in limiting fraud losses and managing customer harm.*

### 7.1 Regulatory and Policy Obligations

*Reference the specific regulatory and internal policy obligations that govern customer notification for fraud incidents.*

Customer notification obligations for [Organization Name] are governed by the following:

- **BNM RMiT Clause 12.7** — Requirements for notification of customers affected by fraud incidents
- **BNM Policy on Financial Consumer Protection** — Obligations for timely and clear communication with customers
- **Personal Data Protection Act 2010 (PDPA)** — Data breach notification requirements where personal data is compromised
- **[Organization Name] Fraud Customer Communication Policy** — Internal standards for notification content, channel, and timing
- **[Organization Name] Data Breach Response Plan** — Escalation requirements where fraud involves a personal data breach

### 7.2 Notification Volume and Timeliness

*Report on whether customer notifications were issued within the required timeframes and through the approved channels.*

| Notification Type | Notifications Issued | Within SLA | SLA Target | SLA Compliance (%) |
|---|---|---|---|---|
| Real-Time SMS / Push Alert (Suspicious Transaction) | [X] | [X] | ≤ [X] minutes from detection | [X]% |
| Account Freeze Notification | [X] | [X] | ≤ [X] hours from freeze action | [X]% |
| Confirmed Fraud Notification (Written) | [X] | [X] | ≤ [X] business days from confirmation | [X]% |
| Compensation / Reimbursement Offer | [X] | [X] | ≤ [X] business days from case closure | [X]% |
| PDPA Data Breach Notification (to PDPC) | [X] | [X] | ≤ 72 hours from awareness | [X]% |
| PDPA Data Breach Notification (to Affected Customers) | [X] | [X] | Without undue delay | [X]% |

### 7.3 Notification Channel Effectiveness

*Report on how customers responded to notifications and whether the notification channels are effective in reaching customers.*

| Channel | Notifications Sent | Delivered (%) | Customer Acknowledgement (%) | Average Time to Acknowledge |
|---|---|---|---|---|
| SMS | [X] | [X]% | [X]% | [X] minutes |
| Push Notification (Mobile App) | [X] | [X]% | [X]% | [X] minutes |
| Email | [X] | [X]% | [X]% | [X] hours |
| Registered Post | [X] | [X]% | [X]% | [X] days |
| In-Branch | [X] | [X]% | [X]% | N/A |
| Telephone | [X] | [X]% | [X]% | [X] minutes |

### 7.4 Customer Complaints Related to Fraud Notifications

*Document complaints received from customers specifically related to fraud notification handling (e.g., delayed notification, unclear communication, incorrect blocking).*

| Complaint Category | Volume | Resolved Within SLA | Root Cause | Action Taken |
|---|---|---|---|---|
| Delayed Fraud Notification | [X] | [X]% | [Describe root cause] | [Describe action] |
| Account Incorrectly Blocked | [X] | [X]% | [Describe root cause] | [Describe action] |
| Reimbursement Not Received | [X] | [X]% | [Describe root cause] | [Describe action] |
| Unclear / Insufficient Communication | [X] | [X]% | [Describe root cause] | [Describe action] |
| Other ([Specify]) | [X] | [X]% | [Describe root cause] | [Describe action] |
| **Total** | **[X]** | **[X]%** | — | — |

### 7.5 Regulatory Reportable Incidents

*List any fraud incidents that met the threshold for regulatory reporting to BNM or other relevant authorities during the quarter.*

| Incident Ref | Date of Occurrence | Date Reported to BNM | Reporting Channel | Brief Description | Status |
|---|---|---|---|---|---|
| [INC-YYYY-NNN] | [DD Month YYYY] | [DD Month YYYY] | [e.g., BNM FIED Reporting Portal] | [Brief description — no sensitive customer data] | [Reported / Pending / Closed] |
| [INC-YYYY-NNN] | [DD Month YYYY] | [DD Month YYYY] | [Channel] | [Brief description] | [Status] |

*Where no reportable incidents occurred, state:* "No fraud incidents meeting the BNM regulatory reporting threshold occurred during [Reporting Quarter] [Reporting Year]."

---

## 8. Roles and Responsibilities

*This section defines the governance structure for fraud detection, reporting, and oversight at [Organization Name]. The RACI matrix below applies to activities documented in this report.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Fraud Management | Fraud Analytics Team | Fraud Operations (Analysts) | Chief Risk Officer | Chief Information Security Officer | Compliance Officer | Internal Audit | Board Risk Committee |
|---|---|---|---|---|---|---|---|---|
| Fraud Detection System Oversight | A | R | I | C | C | I | I | I |
| Transaction Monitoring Rule Management | A | R | C | I | C | I | I | I |
| Alert Triage and Investigation | C | C | R | I | I | I | I | I |
| Customer Notification Execution | C | I | R | I | I | C | I | I |
| Fraud Metrics Report Preparation | A | R | C | C | C | C | I | I |
| Fraud Metrics Report Review | A | R | I | C | I | C | I | I |
| Fraud Metrics Report Approval | A | I | I | R | I | C | I | I |
| Regulatory Reporting (BNM) | A | C | C | C | C | R | I | I |
| Board / Committee Reporting | A | C | I | R | I | C | I | I |
| Internal Audit Liaison | A | C | C | R | C | C | R | I |
| Rule Change Approval | A | C | I | I | C | C | I | I |
| Fraud Loss Escalation (Material) | A | C | I | R | C | C | I | R |

### 8.1 Document Ownership

| Role | Responsibility |
|---|---|
| **Document Owner** | Head of Fraud Management — responsible for the accuracy, completeness, and timely production of this report |
| **Document Author** | [Name, Designation] — Fraud Analytics / Reporting Function |
| **Reviewing Authority** | Chief Risk Officer / Risk Management Committee |
| **Approving Authority** | Chief Risk Officer or delegated authority per [Organization Name]'s Delegation of Authority Policy |
| **Distribution** | As per Section 8.2 below |

### 8.2 Distribution List

| Recipient | Role | Distribution Method | Frequency |
|---|---|---|---|
| [Name] | Chief Risk Officer | Secure email / GRC Platform | Quarterly |
| [Name] | Chief Executive Officer | Secure email | Quarterly |
| [Name] | Chief Information Security Officer | Secure email / GRC Platform | Quarterly |
| [Name] | Compliance Officer | Secure email / GRC Platform | Quarterly |
| [Name] | Head of Retail Banking | Secure email | Quarterly |
| [Name] | Head of Digital Banking | Secure email | Quarterly |
| Board Risk Committee | Committee Members | Board Portal | Quarterly |
| Internal Audit | Head of Internal Audit | Secure email / GRC Platform | Quarterly |
| [Add as required] | [Role] | [Method] | [Frequency] |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [DD Month YYYY] | [Author Name, Designation] | Initial template creation | [Approver Name] |
| [X.X] | [DD Month YYYY] | [Author Name, Designation] | [Describe changes] | [Approver Name] |
| [X.X] | [DD Month YYYY] | [Author Name, Designation] | [Describe changes] | [Approver Name] |

### 9.2 Review Schedule

*This document is subject to the following review cycle in accordance with [Organization Name]'s Document Management Policy and the BNM RMiT requirements.*

| Review Type | Frequency | Trigger |
|---|---|---|
| Scheduled Review | Quarterly (aligned to reporting period) | Calendar-driven |
| Ad-Hoc Review | As required | Material change in fraud landscape, regulatory update, or significant fraud incident |
| Post-Incident Review | Within 30 days of resolution | Any fraud incident exceeding [MYR X] in loss or meeting regulatory reporting threshold |

### 9.3 Approval Sign-Off

*By signing below, the approvers confirm that they have reviewed this Fraud Detection Metrics Report for [Reporting Quarter] [Reporting Year] and are satisfied that it accurately represents [Organization Name]'s fraud detection performance for the reporting period.*

| Role | Name | Designation | Signature | Date |
|---|---|---|---|---|
| Prepared By | [Name] | [e.g., Fraud Analytics Manager] | | [DD Month YYYY] |
| Reviewed By | [Name] | [e.g., Head of Fraud Management] | | [DD Month YYYY] |
| Reviewed By | [Name] | [e.g., Chief Risk Officer] | | [DD Month YYYY] |
| Approved By | [Name] | [e.g., Chief Risk Officer / CRO] | | [DD Month YYYY] |
| Noted By | [Name] | [e.g., Chief Executive Officer] | | [DD Month YYYY] |
| Noted By (Committee) | [Committee Name] | [e.g., Board Risk Committee] | | [DD Month YYYY] |

---

## 10. References

*This section lists the regulatory frameworks, policy documents, and standards that this report is designed to satisfy.*

### 10.1 Regulatory References

| Reference | Document | Clause / Section | Relevance to This Report |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 12.7** | Primary regulatory basis — fraud detection, monitoring, and reporting obligations |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.1 – 10.5 | Technology risk governance and management |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11 | Cyber risk management requirements applicable to fraud detection systems |
| BNM | Financial Consumer Protection Policy | Section [X] | Customer notification and communication obligations |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 12, 30 | Data breach notification and personal data processing obligations |
| BNM | Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLA) | Section [X] | Suspicious transaction reporting obligations intersecting with fraud detection |
| NACSA | National Cybersecurity Policy | [Relevant Section] | National cyber incident reporting obligations |

### 10.2 Internal Policy References

| Document Title | Document ID | Version | Relevance |
|---|---|---|---|
| [Organization Name] Fraud Risk Management Policy | [DOC-ID] | [X.X] | Parent policy governing all fraud management activities |
| [Organization Name] Fraud Operations Procedures | [DOC-ID] | [X.X] | Detailed operating procedures for alert triage and case management |
| [Organization Name] Fraud Rule Change Management Policy | [DOC-ID] | [X.X] | Governance framework for transaction monitoring rule changes |
| [Organization Name] Customer Communication Policy — Fraud | [DOC-ID] | [X.X] | Standards for customer notification in fraud scenarios |
| [Organization Name] Data Breach Response Plan | [DOC-ID] | [X.X] | Procedures for PDPA-relevant data breach notification |
| [Organization Name] Technology Risk Management Policy | [DOC-ID] | [X.X] | Technology risk framework supporting fraud system controls |
| [Organization Name] Information Security Policy | [DOC-ID] | [X.X] | Information classification and handling for this report |

---

## 11. Appendices

*The following appendices provide supporting detail, raw data, and supplementary analysis referenced in the body of this report. Appendices are subject to the same confidentiality classification as the main document.*

---

### Appendix A — Data Consolidation Methodology

*Append the detailed data extraction and consolidation methodology used to compile the metrics in this report, including any manual reconciliation steps, data transformation logic, and validation checks performed.*

[Attach or insert detailed data methodology documentation]

---

### Appendix B — Quarterly Trend Charts

*Append graphical representations of fraud trend data referenced in Section 4.*

**Exhibit B1:** Total Fraud Alert Volume — 12-Month Rolling Trend
[Insert chart or reference to chart file]

**Exhibit B2:** Fraud Detection Rate and False Positive Rate — Quarterly Trend
[Insert chart or reference to chart file]

**Exhibit B3:** Fraud Losses by Channel — Quarterly Comparison
[Insert chart or reference to chart file]

**Exhibit B4:** Fraud Typology Distribution — Current Quarter vs. Prior Quarter
[Insert chart or reference to chart file]

---

### Appendix C — Full Transaction Monitoring Rule Register

*Append the complete rule register for the reporting period, including all active rules, their parameters, owners, last review dates, and performance statistics. This register supports audit review of rule governance.*

[Attach Rule Register — [Rule Register Document ID] — [Version] — [Date]]

> **Note:** The full Rule Register contains sensitive detection logic and is classified as **Restricted**. Distribution is limited to the Head of Fraud Management, CISO, and Internal Audit.

---

### Appendix D — SLA Breach Detail Log

*Append the full list of alert handling and customer notification SLA breaches for the quarter, including the investigation outcome and corrective action for each breach.*

[Attach SLA Breach Log — [Document ID] — [Quarter] [Year]]

---

### Appendix E — Regulatory Incident Register

*Append the Fraud Incident Register for the quarter, listing all incidents assessed against the BNM regulatory reporting threshold.*

[Attach Regulatory Incident Register — [Document ID] — [Quarter] [Year]]

---

### Appendix F — Fraud Analyst Training Log

*Append a summary of fraud analyst training activities completed during the quarter, including courses attended, certifications achieved, and outstanding training requirements.*

[Attach Training Log — [Document ID] — [Quarter] [Year]]

---

### Appendix G — Glossary of Terms

| Term | Definition |
|---|---|
| Alert | A notification generated by the Fraud Management System indicating a transaction or behaviour that requires review against fraud detection criteria |
| Alert-to-Case Conversion Rate | The proportion of reviewed alerts that result in a confirmed fraud case |
| APP Fraud | Authorised Push Payment Fraud — fraud where the customer is manipulated into authorising a payment to a fraudster |
| ATO | Account Takeover — fraud where a fraudster gains unauthorised access to a legitimate customer's account |
| AUC-ROC | Area Under the Receiver Operating Characteristic Curve — a measure of machine learning model classification performance |
| BNM | Bank Negara Malaysia — the Central Bank of Malaysia |
| FDR | Fraud Detection Rate — the proportion of confirmed fraud cases identified by the detection system |
| FMS | Fraud Management System — the technology platform used to monitor transactions and generate fraud alerts |
| FPR | False Positive Rate — the proportion of alerts generated by the system that, upon review, are found to be legitimate transactions |
| JSJK | Jabatan Siasatan Jenayah Komersial — Royal Malaysia Police Commercial Crime Investigation Department |
| NACSA | National Cyber Security Agency of Malaysia |
| PDPA | Personal Data Protection Act 2010 (Malaysia) |
| PDPC | Personal Data Protection Commissioner (Malaysia) |
| RMiT | Risk Management in Technology — BNM Policy Document governing technology and cyber risk management for financial institutions |
| True Positive | An alert that correctly identifies a fraudulent transaction |
| False Positive | An alert that incorrectly flags a legitimate transaction as fraudulent |
| False Negative | A fraudulent transaction that was not detected by the monitoring system |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential | **Owner:** Head of Fraud Management | **Last Review:** [Last Review Date]