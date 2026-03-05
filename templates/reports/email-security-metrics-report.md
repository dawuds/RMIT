# Email Security Metrics Report

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Information Security Officer (CISO) |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organisation** | [Organisation Name] |
| **Effective Date** | [Effective Date] |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [Risk Ratings and Prioritisation](#5-risk-ratings-and-prioritisation)
6. [Recommendations and Action Items](#6-recommendations-and-action-items)
7. [Management Response](#7-management-response)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Executive Summary

*Provide a concise, non-technical summary of the email security posture for the reporting period. Highlight critical metrics, significant incidents, trend changes, and the overall effectiveness of email security controls. This section is intended for senior management and board-level readers.*

**Reporting Period:** [Q1/Q2/Q3/Q4] [YYYY] — [Start Date] to [End Date]

**Overall Email Security Posture:** [Satisfactory / Requires Attention / Critical]

### 1.1 Highlights

| Metric | Previous Period | Current Period | Trend |
|---|---|---|---|
| Total Emails Processed | [#] | [#] | [↑ / ↓ / →] |
| Phishing Emails Detected | [#] | [#] | [↑ / ↓ / →] |
| Phishing Detection Rate (%) | [%] | [%] | [↑ / ↓ / →] |
| Malware/Attachment Threats Blocked | [#] | [#] | [↑ / ↓ / →] |
| Spam Detection Rate (%) | [%] | [%] | [↑ / ↓ / →] |
| Business Email Compromise (BEC) Attempts | [#] | [#] | [↑ / ↓ / →] |
| User-Reported Suspicious Emails | [#] | [#] | [↑ / ↓ / →] |
| False Positive Rate (%) | [%] | [%] | [↑ / ↓ / →] |
| Mean Time to Detect (MTTD) — hours | [#] | [#] | [↑ / ↓ / →] |
| Mean Time to Respond (MTTR) — hours | [#] | [#] | [↑ / ↓ / →] |

### 1.2 Executive Assessment

*Summarise the key conclusions drawn from the data above. Indicate whether the organisation's email security controls are operating effectively and whether any escalation to senior management or the Board Risk Committee is warranted.*

> [Provide a 2–4 sentence executive assessment of the current email security posture, highlighting the most critical findings and any immediate actions required.]

### 1.3 Critical Issues Requiring Immediate Attention

*List any issues that require urgent senior management action or Board-level awareness.*

| # | Issue Description | Severity | Recommended Action | Owner | Due Date |
|---|---|---|---|---|---|
| 1 | [Critical Issue Description] | Critical | [Recommended Action] | [Owner] | [Date] |
| 2 | [Critical Issue Description] | High | [Recommended Action] | [Owner] | [Date] |

---

## 2. Purpose and Scope

### 2.1 Purpose

This Email Security Metrics Report is prepared in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.9**, which mandates that financial institutions establish robust controls to protect electronic communications infrastructure against threats including phishing, malware delivery, and business email compromise.

This report fulfils the following regulatory and governance obligations:

- Documents the operational effectiveness of email security controls on a quarterly basis.
- Supports the CISO and senior management in making risk-informed decisions regarding email threat management.
- Provides evidence of compliance with BNM RMiT requirements for audit and supervisory review purposes.
- Contributes to the organisation's broader Technology Risk Management (TRM) reporting obligations.

### 2.2 Regulatory Basis

| Regulatory Instrument | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 11.9 | Email and electronic messaging security controls, monitoring, and incident response |
| BNM RMiT Policy Document | Clause 10 | Cyber risk management framework and threat intelligence |
| BNM RMiT Policy Document | Clause 11 | Security of technology systems and infrastructure |
| Personal Data Protection Act 2010 (PDPA) | Section 9 | Security principle — protection of personal data transmitted via email |
| NACSA Cybersecurity Framework | [Applicable Control Reference] | Email security baseline controls |

### 2.3 Scope

This report covers the email security posture of **[Organisation Name]** for the period **[Start Date]** to **[End Date]** and encompasses:

- **In-Scope Systems:**
  - Corporate email platform: [e.g., Microsoft Exchange Online / Google Workspace / On-Premises Exchange — specify version]
  - Email security gateway: [e.g., Proofpoint / Mimecast / Microsoft Defender for Office 365 — specify version]
  - Anti-phishing and anti-malware filtering engines
  - Email Data Loss Prevention (DLP) controls
  - DMARC, DKIM, and SPF enforcement mechanisms

- **In-Scope Organisational Units:**
  - [List of departments, subsidiaries, or entities covered]
  - [e.g., All employees of [Organisation Name] — [#] licensed mailboxes]

- **Out-of-Scope:**
  - [List any systems, entities, or email domains explicitly excluded and rationale]

---

## 3. Scope and Methodology

*Describe the data sources, measurement methodologies, tools, and analytical approaches used to compile this report. This section provides auditability and reproducibility of the metrics presented.*

### 3.1 Data Sources

| Data Source | System / Tool | Data Period | Responsible Team |
|---|---|---|---|
| Email gateway logs | [Tool Name, e.g., Mimecast SIEM Integration] | [Date Range] | [Team Name] |
| Phishing simulation results | [Tool Name, e.g., KnowBe4 / Proofpoint Security Awareness] | [Date Range] | [Team Name] |
| Incident management system | [Tool Name, e.g., ServiceNow / Jira] | [Date Range] | [Team Name] |
| SIEM platform | [Tool Name, e.g., Splunk / Microsoft Sentinel] | [Date Range] | [Team Name] |
| User-reported phishing portal | [Tool Name / Process] | [Date Range] | [Team Name] |
| Threat intelligence feeds | [Source Names] | [Date Range] | [Team Name] |

### 3.2 Measurement Methodology

**Phishing Detection Rate** is calculated as:

> *Phishing Detection Rate (%) = (Phishing Emails Detected by Controls ÷ Total Phishing Emails Attempted) × 100*

**False Positive Rate** is calculated as:

> *False Positive Rate (%) = (Legitimate Emails Incorrectly Quarantined ÷ Total Emails Processed) × 100*

**Phishing Simulation Click Rate** is calculated as:

> *Click Rate (%) = (Users Who Clicked Simulated Phishing Link ÷ Total Users Tested) × 100*

### 3.3 Reporting Limitations and Caveats

*Note any known data gaps, system outages, or limitations that may affect the accuracy or completeness of the metrics presented.*

- [Limitation 1: e.g., Email gateway logs unavailable for [specific dates] due to scheduled maintenance — estimated impact: [describe]]
- [Limitation 2: e.g., Phishing simulation data excludes [department/subsidiary] — coverage gap noted for remediation]
- [Limitation 3: e.g., Threat intelligence feed [Name] was decommissioned on [Date] — replacement implemented on [Date]]

### 3.4 Baseline and Benchmarking

| Metric | Internal Baseline (Prior Year Average) | Industry Benchmark | Current Period Result | Status |
|---|---|---|---|---|
| Phishing Detection Rate (%) | [%] | ≥ 99.5% | [%] | [Met / Not Met] |
| False Positive Rate (%) | [%] | ≤ 0.1% | [%] | [Met / Not Met] |
| Phishing Simulation Click Rate (%) | [%] | ≤ 5% (post-training) | [%] | [Met / Not Met] |
| DMARC Enforcement Coverage (%) | [%] | 100% | [%] | [Met / Not Met] |
| MTTD — Email Threats (hours) | [#] | ≤ 1 hour | [#] | [Met / Not Met] |
| MTTR — Email Incidents (hours) | [#] | ≤ 4 hours | [#] | [Met / Not Met] |

---

## 4. Key Findings and Observations

*Present the detailed findings from the reporting period. Organise findings by threat category and include supporting data. Each finding should be clearly stated, supported by evidence, and linked to a risk or recommendation.*

### 4.1 Email Traffic Overview

| Category | Volume | % of Total | Change vs Prior Period |
|---|---|---|---|
| Total Inbound Emails | [#] | 100% | [+/- %] |
| Legitimate Emails Delivered | [#] | [%] | [+/- %] |
| Spam Blocked | [#] | [%] | [+/- %] |
| Phishing Emails Blocked | [#] | [%] | [+/- %] |
| Malware/Malicious Attachments Blocked | [#] | [%] | [+/- %] |
| BEC / Impersonation Attempts Blocked | [#] | [%] | [+/- %] |
| Quarantined (Pending Review) | [#] | [%] | [+/- %] |
| False Positives Released | [#] | [%] | [+/- %] |
| Total Outbound Emails | [#] | 100% | [+/- %] |
| Outbound DLP Policy Violations | [#] | [%] | [+/- %] |

### 4.2 Phishing Threat Analysis

**Finding 4.2.1 — Phishing Detection Rates**

*Summarise the effectiveness of automated phishing detection controls during the reporting period, including detection by control layer.*

| Detection Layer | Phishing Emails Caught | % Contribution |
|---|---|---|
| DNS/IP Reputation Filtering | [#] | [%] |
| URL Sandboxing / Detonation | [#] | [%] |
| Anti-Phishing ML Engine | [#] | [%] |
| DMARC/DKIM/SPF Enforcement | [#] | [%] |
| User-Reported (Phish Button) | [#] | [%] |
| **Total Detected** | **[#]** | **100%** |

**Finding 4.2.2 — Phishing Simulation Results**

*Summarise the results of any phishing simulation exercises conducted during the reporting period, including click rates, credential submission rates, and training completion rates.*

| Simulation Campaign | Date | Target Group | Users Tested | Click Rate (%) | Submission Rate (%) | Training Completion (%) |
|---|---|---|---|---|---|---|
| [Campaign Name] | [Date] | [Group] | [#] | [%] | [%] | [%] |
| [Campaign Name] | [Date] | [Group] | [#] | [%] | [%] | [%] |

**Key Observations:**
- [Observation 1: e.g., Click rate for [department] increased by [X%] compared to prior quarter, indicating elevated risk exposure.]
- [Observation 2: e.g., Credential submission rate remains below the [X%] internal threshold, demonstrating effective awareness training.]
- [Observation 3: e.g., [X%] of users who clicked completed mandatory remedial training within the required [X]-day window.]

### 4.3 Malware and Malicious Attachment Threats

**Finding 4.3.1 — Attachment Threat Summary**

| Threat Type | Instances Blocked | Top File Extensions | Notable Campaigns |
|---|---|---|---|
| Ransomware Dropper | [#] | [.exe, .js, .zip] | [Campaign Name / N/A] |
| Macro-Enabled Documents | [#] | [.docm, .xlsm] | [Campaign Name / N/A] |
| Credential Harvesting Links | [#] | [URLs in PDF/DOC] | [Campaign Name / N/A] |
| Remote Access Trojan (RAT) | [#] | [.exe, .dll] | [Campaign Name / N/A] |
| Other Malicious Payloads | [#] | [specify] | [Campaign Name / N/A] |

### 4.4 Business Email Compromise (BEC) and Impersonation

**Finding 4.4.1 — BEC Threat Summary**

*Detail attempts to impersonate executives, suppliers, or other trusted entities via email, and the effectiveness of controls in detecting and preventing these attacks.*

| BEC Type | Attempts Detected | Attempts That Reached Users | Financial Exposure Prevented (MYR) |
|---|---|---|---|
| CEO / Executive Impersonation | [#] | [#] | [MYR Amount / N/A] |
| Vendor / Supplier Impersonation | [#] | [#] | [MYR Amount / N/A] |
| Internal Account Takeover | [#] | [#] | [MYR Amount / N/A] |
| Invoice Fraud | [#] | [#] | [MYR Amount / N/A] |
| **Total** | **[#]** | **[#]** | **[MYR Amount]** |

### 4.5 Email Authentication Controls (DMARC / DKIM / SPF)

| Domain | SPF Published | DKIM Enabled | DMARC Policy | DMARC Enforcement | Compliance Status |
|---|---|---|---|---|---|
| [domain.com.my] | Yes / No | Yes / No | None / Quarantine / Reject | Yes / No | Compliant / Non-Compliant |
| [mail.domain.com.my] | Yes / No | Yes / No | None / Quarantine / Reject | Yes / No | Compliant / Non-Compliant |
| [subsidiary-domain.com.my] | Yes / No | Yes / No | None / Quarantine / Reject | Yes / No | Compliant / Non-Compliant |

**DMARC Report Summary:**

- **Total DMARC-aligned messages:** [#] ([%] of all inbound mail from [Organisation Name] domains)
- **DMARC failures (potential spoofing):** [#] ([%])
- **Domains not yet at DMARC Reject policy:** [List domains] — Remediation target: [Date]

### 4.6 Email Data Loss Prevention (DLP)

| DLP Policy | Violations Detected | Violations Blocked | Violations Escalated | False Positives |
|---|---|---|---|---|
| Personal Data (PDPA) — Outbound | [#] | [#] | [#] | [#] |
| Customer Account Data | [#] | [#] | [#] | [#] |
| Confidential Financial Data | [#] | [#] | [#] | [#] |
| Credentials / Authentication Data | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** |

### 4.7 Email Security Incidents

*Summarise confirmed email security incidents that required escalation or formal incident response during the reporting period.*

| Incident ID | Date | Incident Type | Severity | Affected Users | Status | RCA Completed |
|---|---|---|---|---|---|---|
| [INC-YYYY-XXX] | [Date] | [Phishing / BEC / Malware] | [Critical/High/Medium/Low] | [#] | [Closed / Open] | Yes / No |
| [INC-YYYY-XXX] | [Date] | [Phishing / BEC / Malware] | [Critical/High/Medium/Low] | [#] | [Closed / Open] | Yes / No |

**Total Incidents This Quarter:** [#] | **Open Incidents:** [#] | **Closed Incidents:** [#]

---

## 5. Risk Ratings and Prioritisation

*Assess and rate the risks identified through the email security metrics. Ratings should align with the organisation's enterprise risk management framework and BNM RMiT risk appetite thresholds.*

### 5.1 Risk Rating Methodology

Risks are rated using a **5×5 Likelihood × Impact** matrix aligned with [Organisation Name]'s Enterprise Risk Management Framework:

| Rating | Score Range | Description |
|---|---|---|
| **Critical** | 20–25 | Immediate action required; potential regulatory breach or significant financial loss |
| **High** | 12–19 | Prompt action required; material impact on operations or compliance posture |
| **Medium** | 6–11 | Planned remediation required; moderate operational or reputational impact |
| **Low** | 1–5 | Monitor and review; minimal impact if exploited |

### 5.2 Risk Register — Email Security

| Risk ID | Risk Description | Likelihood (1–5) | Impact (1–5) | Risk Score | Rating | Control Effectiveness | Residual Risk | Trend |
|---|---|---|---|---|---|---|---|---|
| ESR-001 | Phishing email bypassing automated detection controls | [1–5] | [1–5] | [Score] | [Critical/High/Med/Low] | [Strong/Adequate/Weak] | [Score] | [↑/↓/→] |
| ESR-002 | Business Email Compromise resulting in fraudulent payment | [1–5] | [1–5] | [Score] | [Critical/High/Med/Low] | [Strong/Adequate/Weak] | [Score] | [↑/↓/→] |
| ESR-003 | Malicious attachment evading sandbox analysis | [1–5] | [1–5] | [Score] | [Critical/High/Med/Low] | [Strong/Adequate/Weak] | [Score] | [↑/↓/→] |
| ESR-004 | Outbound data exfiltration via email | [1–5] | [1–5] | [Score] | [Critical/High/Med/Low] | [Strong/Adequate/Weak] | [Score] | [↑/↓/→] |
| ESR-005 | Email domain spoofing due to incomplete DMARC enforcement | [1–5] | [1–5] | [Score] | [Critical/High/Med/Low] | [Strong/Adequate/Weak] | [Score] | [↑/↓/→] |
| ESR-006 | Credential compromise via targeted spear phishing | [1–5] | [1–5] | [Score] | [Critical/High/Med/Low] | [Strong/Adequate/Weak] | [Score] | [↑/↓/→] |
| ESR-007 | Inadequate user awareness leading to high phishing click rates | [1–5] | [1–5] | [Score] | [Critical/High/Med/Low] | [Strong/Adequate/Weak] | [Score] | [↑/↓/→] |
| ESR-008 | Email security gateway misconfiguration or outage | [1–5] | [1–5] | [Score] | [Critical/High/Med/Low] | [Strong/Adequate/Weak] | [Score] | [↑/↓/→] |

### 5.3 Risk Heat Map Summary

*Summarise the distribution of email security risks across the risk matrix quadrants for visual representation in management presentations.*

| | **Low Impact** | **Medium Impact** | **High Impact** | **Critical Impact** |
|---|---|---|---|---|
| **Very Likely** | [Risk IDs] | [Risk IDs] | [Risk IDs] | [Risk IDs] |
| **Likely** | [Risk IDs] | [Risk IDs] | [Risk IDs] | [Risk IDs] |
| **Possible** | [Risk IDs] | [Risk IDs] | [Risk IDs] | [Risk IDs] |
| **Unlikely** | [Risk IDs] | [Risk IDs] | [Risk IDs] | [Risk IDs] |
| **Rare** | [Risk IDs] | [Risk IDs] | [Risk IDs] | [Risk IDs] |

### 5.4 Key Risk Indicators (KRIs) — Status

| KRI | Threshold | Current Value | Status | Trend |
|---|---|---|---|---|
| Phishing Detection Rate | ≥ 99.5% | [%] | [Green / Amber / Red] | [↑/↓/→] |
| Phishing Click Rate (Simulations) | ≤ 5% | [%] | [Green / Amber / Red] | [↑/↓/→] |
| False Positive Rate | ≤ 0.1% | [%] | [Green / Amber / Red] | [↑/↓/→] |
| BEC Incidents per Quarter | ≤ [#] | [#] | [Green / Amber / Red] | [↑/↓/→] |
| DMARC Reject Policy Coverage | 100% | [%] | [Green / Amber / Red] | [↑/↓/→] |
| MTTD — Email Threats | ≤ 1 hour | [hours] | [Green / Amber / Red] | [↑/↓/→] |
| MTTR — Email Incidents | ≤ 4 hours | [hours] | [Green / Amber / Red] | [↑/↓/→] |
| Outstanding High/Critical Email Security Issues | 0 | [#] | [Green / Amber / Red] | [↑/↓/→] |

---

## 6. Recommendations and Action Items

*Detail all recommended actions arising from the findings and risk assessment. Each recommendation should be specific, measurable, and assigned to a responsible owner with a clear target completion date.*

### 6.1 Summary of Recommendations

| Rec # | Priority | Recommendation | Risk Reference | Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| REC-001 | Critical | [Recommendation description] | ESR-[XXX] | [Owner / Team] | [Date] | [New / In Progress / Completed] |
| REC-002 | High | [Recommendation description] | ESR-[XXX] | [Owner / Team] | [Date] | [New / In Progress / Completed] |
| REC-003 | High | [Recommendation description] | ESR-[XXX] | [Owner / Team] | [Date] | [New / In Progress / Completed] |
| REC-004 | Medium | [Recommendation description] | ESR-[XXX] | [Owner / Team] | [Date] | [New / In Progress / Completed] |
| REC-005 | Medium | [Recommendation description] | ESR-[XXX] | [Owner / Team] | [Date] | [New / In Progress / Completed] |
| REC-006 | Low | [Recommendation description] | ESR-[XXX] | [Owner / Team] | [Date] | [New / In Progress / Completed] |

### 6.2 Detailed Recommendations

#### Recommendation REC-001: [Title]

**Priority:** Critical
**Risk Reference:** [ESR-XXX]
**Finding Reference:** [Section X.X]

**Background:**
*Describe the context and justification for this recommendation, referencing the specific finding or risk that prompted it.*

[Provide 2–3 sentences explaining the issue and its potential impact if not addressed.]

**Recommended Action:**
- [Specific action step 1]
- [Specific action step 2]
- [Specific action step 3]

**Expected Outcome:** [Describe the measurable outcome upon completion of this recommendation.]

**Owner:** [Name / Team]
**Target Completion Date:** [Date]
**Success Criteria:** [How will successful implementation be measured?]

---

#### Recommendation REC-002: [Title]

**Priority:** High
**Risk Reference:** [ESR-XXX]
**Finding Reference:** [Section X.X]

**Background:**
[Provide 2–3 sentences explaining the issue and its potential impact if not addressed.]

**Recommended Action:**
- [Specific action step 1]
- [Specific action step 2]

**Expected Outcome:** [Describe the measurable outcome upon completion of this recommendation.]

**Owner:** [Name / Team]
**Target Completion Date:** [Date]
**Success Criteria:** [How will successful implementation be measured?]

---

*[Repeat the above structure for all additional recommendations as required.]*

### 6.3 Carryover Items from Prior Period

*Track recommendations from the previous quarterly report that remain open or partially completed.*

| Rec # (Original) | Original Quarter | Recommendation | Original Due Date | Revised Due Date | Status | Comments |
|---|---|---|---|---|---|---|
| [Prior Rec #] | [Q/YYYY] | [Description] | [Original Date] | [Revised Date] | [In Progress / Overdue] | [Reason for delay / update] |
| [Prior Rec #] | [Q/YYYY] | [Description] | [Original Date] | [Revised Date] | [In Progress / Overdue] | [Reason for delay / update] |

---

## 7. Management Response

*This section records the formal response of responsible management to the findings and recommendations contained in this report. Management responses should be provided within [10] business days of report issuance.*

### 7.1 CISO Response

**Date of Response:** [Date]
**Respondent:** [CISO Name], Chief Information Security Officer

*Provide the CISO's formal acknowledgement of the findings, acceptance or rejection of each recommendation, and any additional context or mitigating factors relevant to the risk posture.*

> [CISO formal response — include acknowledgement of findings, agreed actions, and any disagreements with risk ratings or recommendations with supporting rationale.]

### 7.2 Management Action Plan

| Rec # | Management Response | Agreed? | Agreed Action | Responsible Owner | Committed Date | Comments |
|---|---|---|---|---|---|---|
| REC-001 | [Accept / Partially Accept / Reject] | Yes / No | [Agreed action description] | [Owner] | [Date] | [Comments or conditions] |
| REC-002 | [Accept / Partially Accept / Reject] | Yes / No | [Agreed action description] | [Owner] | [Date] | [Comments or conditions] |
| REC-003 | [Accept / Partially Accept / Reject] | Yes / No | [Agreed action description] | [Owner] | [Date] | [Comments or conditions] |
| REC-004 | [Accept / Partially Accept / Reject] | Yes / No | [Agreed action description] | [Owner] | [Date] | [Comments or conditions] |

**Note on Rejected Recommendations:** Where management has chosen not to accept a recommendation, the rationale and any compensating controls must be documented and reviewed by the Board Risk Committee at the next scheduled meeting.

### 7.3 Risk Acceptance

*Where residual risks are formally accepted rather than remediated, document the formal risk acceptance below.*

| Risk ID | Risk Description | Residual Risk Rating | Reason for Acceptance | Accepted By | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|
| ESR-[XXX] | [Risk Description] | [High/Medium/Low] | [Rationale] | [Name, Title] | [Date] | [Date] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for email security monitoring, reporting, and remediation activities at [Organisation Name].*

### 8.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | CISO | IT Security Team | IT Operations | Compliance | Internal Audit | Business Units | Board / BRCC |
|---|---|---|---|---|---|---|---|
| Define email security KPIs and thresholds | A | R | C | C | I | I | I |
| Monitor email security systems (daily) | I | R | R | I | — | — | — |
| Compile quarterly email security metrics | A | R | C | C | I | I | — |
| Conduct phishing simulations | A | R | C | I | I | I | — |
| Manage email security incidents | A | R | R | C | I | I | — |
| Perform root cause analysis on incidents | A | R | C | C | C | I | — |
| Maintain DMARC / DKIM / SPF records | I | A | R | I | — | — | — |
| Manage email security gateway configuration | A | C | R | I | — | — | — |
| Prepare and issue this report | A | R | C | C | I | I | — |
| Review and approve this report | A | — | — | C | C | — | I |
| Present findings to senior management | R | C | — | C | I | — | I |
| Implement remediation actions | C | R | R | I | I | R | — |
| Track and verify remediation completion | A | R | C | C | R | I | — |
| Conduct annual email security policy review | A | R | C | R | C | I | I |

### 8.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Report Owner — CISO | [Name] | [Department] | [Email / Ext] |
| Report Preparer | [Name] | IT Security | [Email / Ext] |
| Email Security Gateway Admin | [Name] | IT Operations | [Email / Ext] |
| Compliance Reviewer | [Name] | Compliance | [Email / Ext] |
| Internal Audit Liaison | [Name] | Internal Audit | [Email / Ext] |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes / Reason for Revision |
|---|---|---|---|
| 0.1 | [Date] | [Author Name] | Initial draft |
| 0.2 | [Date] | [Author Name] | Incorporated CISO review comments |
| 1.0 | [Date] | [Author Name] | Approved for issuance — [Quarter/Year] |

### 9.2 Review and Approval Sign-Off

*This report must be reviewed and approved by the following stakeholders prior to issuance. Electronic approval via [Organisation Name]'s document management system is acceptable.*

| Role | Name | Signature | Date Approved |
|---|---|---|---|
| Prepared By | [Name], [Title] | __________________ | [Date] |
| Reviewed By — IT Security Lead | [Name], [Title] | __________________ | [Date] |
| Reviewed By — Compliance | [Name], [Title] | __________________ | [Date] |
| Approved By — CISO | [Name], Chief Information Security Officer | __________________ | [Date] |
| Noted By — CTO / CIO | [Name], [Title] | __________________ | [Date] |
| Noted By — Internal Audit | [Name], [Title] | __________________ | [Date] |

### 9.3 Distribution List

| Recipient | Role | Distribution Method | Date Sent |
|---|---|---|---|
| [Name] | Chief Executive Officer | [Secure email / Document portal] | [Date] |
| [Name] | Chief Risk Officer | [Secure email / Document portal] | [Date] |
| [Name] | Chief Compliance Officer | [Secure email / Document portal] | [Date] |
| [Name] | Board Risk and Compliance Committee (BRCC) | [Secure email / Document portal] | [Date] |
| [Name] | Internal Audit | [Secure email / Document portal] | [Date] |
| [Name] | BNM Liaison (if required) | [Secure submission channel] | [Date] |

---

## 10. References

The following regulatory documents, standards, and internal policies are referenced in this report:

| # | Document | Issuing Body | Relevant Clause / Section | Notes |
|---|---|---|---|---|
| 1 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 11.9 — Email and Electronic Messaging Security | Primary regulatory basis for this report |
| 2 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10 — Cyber Risk Management | Overarching cyber risk framework |
| 3 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 11 — Technology System Security | Technology security control requirements |
| 4 | Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Section 9 — Security Principle | Email as a channel for personal data transmission |
| 5 | NACSA Cybersecurity Framework | National Cyber Security Agency (NACSA) | [Applicable control domain] | Baseline cybersecurity control requirements |
| 6 | [Organisation Name] Information Security Policy | [Organisation Name] | [Section Reference] | Internal policy governing email security |
| 7 | [Organisation Name] Email Security Acceptable Use Policy | [Organisation Name] | [Section Reference] | Acceptable use of corporate email systems |
| 8 | [Organisation Name] Incident Response Procedure | [Organisation Name] | [Section Reference] | Procedure for managing email security incidents |
| 9 | [Organisation Name] Technology Risk Management Framework | [Organisation Name] | [Section Reference] | Enterprise risk methodology |
| 10 | NIST Cybersecurity Framework v2.0 | NIST | PR.PT-4, DE.CM-3 | Email protection and monitoring controls (reference standard) |

---

## 11. Appendices

### Appendix A — Monthly Email Security Metrics Breakdown

*Provide the month-by-month breakdown of key metrics for the reporting quarter to support trend analysis.*

| Metric | Month 1 ([Month/YYYY]) | Month 2 ([Month/YYYY]) | Month 3 ([Month/YYYY]) | Quarterly Total / Average |
|---|---|---|---|---|
| Total Inbound Emails | [#] | [#] | [#] | [#] |
| Phishing Emails Blocked | [#] | [#] | [#] | [#] |
| Malware Blocked | [#] | [#] | [#] | [#] |
| BEC Attempts Blocked | [#] | [#] | [#] | [#] |
| False Positives | [#] | [#] | [#] | [#] |
| User-Reported Phishing | [#] | [#] | [#] | [#] |
| DLP Policy Violations | [#] | [#] | [#] | [#] |
| Security Incidents (Confirmed) | [#] | [#] | [#] | [#] |

---

### Appendix B — Email Security Incident Register (Detailed)

*Provide detailed records of all confirmed email security incidents during the reporting period, including root cause analysis outcomes and remediation status.*

| Field | Incident 1 | Incident 2 |
|---|---|---|
| **Incident ID** | [INC-YYYY-XXX] | [INC-YYYY-XXX] |
| **Date Detected** | [Date] | [Date] |
| **Date Reported** | [Date] | [Date] |
| **Incident Type** | [Phishing / BEC / Malware / Other] | [Type] |
| **Severity** | [Critical / High / Medium / Low] | [Severity] |
| **Detection Method** | [Automated / User-reported / SIEM alert] | [Method] |
| **Affected Users / Systems** | [#] users, [systems] | [Detail] |
| **Attack Vector** | [Description of how the attack was conducted] | [Description] |
| **Impact** | [Actual or potential impact] | [Impact] |
| **Containment Actions** | [Actions taken] | [Actions taken] |
| **Root Cause** | [Root cause finding] | [Root cause finding] |
| **Lessons Learned** | [Key lessons] | [Key lessons] |
| **Status** | [Closed / Open] | [Closed / Open] |
| **Closure Date** | [Date] | [Date] |

---

### Appendix C — Phishing Simulation Campaign Details

*Provide detailed results for each phishing simulation campaign conducted during the reporting period, including department-level performance breakdown.*

**Campaign:** [Campaign Name] | **Date:** [Date] | **Platform:** [Tool Name]

| Department | Users Targeted | Emails Opened | Links Clicked | Credentials Submitted | Reported Phishing | Click Rate (%) | Remedial Training Completed |
|---|---|---|---|---|---|---|---|
| [Department 1] | [#] | [#] | [#] | [#] | [#] | [%] | [%] |
| [Department 2] | [#] | [#] | [#] | [#] | [#] | [%] | [%] |
| [Department 3] | [#] | [#] | [#] | [#] | [#] | [%] | [%] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[%]** | **[%]** |

---

### Appendix D — DMARC Aggregate Report Summary

*Attach or summarise DMARC aggregate (rua) reports received during the reporting period, showing authentication pass/fail rates for all sending domains.*

| Source IP / Sending Service | Domain | Volume | SPF Pass | DKIM Pass | DMARC Disposition | Notes |
|---|---|---|---|---|---|---|
| [IP / Service Name] | [domain.com.my] | [#] | Yes / No | Yes / No | None / Quarantine / Reject | [e.g., Legitimate mail relay — whitelisted] |
| [IP / Service Name] | [domain.com.my] | [#] | Yes / No | Yes / No | None / Quarantine / Reject | [e.g., Suspected spoofing — investigated] |

---

### Appendix E — Email Security Tool Configuration Summary

*Document the current configuration status and version information for all email security tools, to support audit evidence requirements.*

| Tool | Version | Vendor | Last Updated | Licence Expiry | Configuration Reviewed | Reviewed By |
|---|---|---|---|---|---|---|
| Email Security Gateway | [Version] | [Vendor] | [Date] | [Date] | Yes / No | [Name] |
| Anti-Phishing Engine | [Version] | [Vendor] | [Date] | [Date] | Yes / No | [Name] |
| URL Sandboxing | [Version] | [Vendor] | [Date] | [Date] | Yes / No | [Name] |
| Email DLP Platform | [Version] | [Vendor] | [Date] | [Date] | Yes / No | [Name] |
| Phishing Simulation Platform | [Version] | [Vendor] | [Date] | [Date] | Yes / No | [Name] |
| SIEM (Email Log Integration) | [Version] | [Vendor] | [Date] | [Date] | Yes / No | [Name] |

---

### Appendix F — Glossary of Terms

| Term | Definition |
|---|---|
| **BEC** | Business Email Compromise — a form of cybercrime where attackers impersonate executives or trusted parties to conduct fraud via email |
| **DKIM** | DomainKeys Identified Mail — an email authentication method that uses digital signatures to verify message integrity |
| **DMARC** | Domain-based Message Authentication, Reporting and Conformance — a policy that builds on SPF and DKIM to protect domains from spoofing |
| **DLP** | Data Loss Prevention — controls that detect and prevent unauthorised transmission of sensitive information via email |
| **KRI** | Key Risk Indicator — a metric used to signal an increasing risk exposure before it materialises as an incident |
| **MTTD** | Mean Time to Detect — the average time between an attack occurring and its detection by security controls |
| **MTTR** | Mean Time to Respond — the average time between detection of a threat and its containment or remediation |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk in licensed financial institutions |
| **SPF** | Sender Policy Framework — an email authentication protocol that specifies which mail servers are authorised to send email for a domain |
| **Spear Phishing** | A targeted phishing attack directed at a specific individual or organisation, using personalised information to increase credibility |

---

*End of Document*

---
**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential
**© [Organisation Name] [YYYY] — This document contains confidential information and is intended solely for authorised recipients.**