# EDR Coverage and Compliance Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Operations Manager |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. Handle in accordance with the organization's Information Classification and Handling Policy.

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

*Provide a concise, non-technical summary of the EDR programme's current posture, overall coverage compliance rate, critical findings, and any material risks requiring immediate senior management attention. This section should be self-contained and suitable for presentation to the Board Risk Committee or senior leadership.*

### 1.1 Reporting Period

| Field | Details |
|---|---|
| **Report Period** | [Q1 / Q2 / Q3 / Q4] [YYYY] |
| **Reporting Date** | [Report Generation Date] |
| **Prepared By** | [Name], [Title] |
| **Report Version** | [Version Number] |

### 1.2 Overall EDR Health Summary

| Metric | Current Period | Previous Period | Target | Status |
|---|---|---|---|---|
| Overall EDR Coverage Rate | [X]% | [X]% | ≥ 98% | [Met / Not Met] |
| Signature Currency Compliance | [X]% | [X]% | ≥ 99% | [Met / Not Met] |
| Active Agent Connectivity Rate | [X]% | [X]% | ≥ 97% | [Met / Not Met] |
| Mean Time to Detect (MTTD) | [X] hrs | [X] hrs | ≤ [X] hrs | [Met / Not Met] |
| Mean Time to Respond (MTTR) | [X] hrs | [X] hrs | ≤ [X] hrs | [Met / Not Met] |
| Critical Alerts – Unresolved > SLA | [X] | [X] | 0 | [Met / Not Met] |

### 1.3 Summary of Material Findings

*List the most critical findings identified during the reporting period, their risk rating, and current remediation status. Limit to the top five issues for executive consumption.*

| # | Finding | Risk Rating | Affected Scope | Remediation Status |
|---|---|---|---|---|
| 1 | [Finding Title] | [Critical / High / Medium / Low] | [Systems / BUs affected] | [Open / In Progress / Closed] |
| 2 | [Finding Title] | [Critical / High / Medium / Low] | [Systems / BUs affected] | [Open / In Progress / Closed] |
| 3 | [Finding Title] | [Critical / High / Medium / Low] | [Systems / BUs affected] | [Open / In Progress / Closed] |
| 4 | [Finding Title] | [Critical / High / Medium / Low] | [Systems / BUs affected] | [Open / In Progress / Closed] |
| 5 | [Finding Title] | [Critical / High / Medium / Low] | [Systems / BUs affected] | [Open / In Progress / Closed] |

### 1.4 Key Observations

- [Observation 1: Positive trend or achievement noted during the reporting period]
- [Observation 2: Emerging risk or area of concern requiring monitoring]
- [Observation 3: Notable improvement from prior period, if applicable]
- [Observation 4: Any regulatory or policy alignment update relevant to EDR posture]

---

## 2. Purpose and Scope

### 2.1 Purpose

This report documents the Endpoint Detection and Response (EDR) coverage status, signature update compliance, and detection and response metrics for [Organization Name] for the reporting period ending [Report Period End Date]. It is prepared in fulfilment of the organization's obligations under **Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.8**, which mandates the deployment, monitoring, and maintenance of endpoint security controls across all critical and non-critical technology assets.

This report serves the following purposes:

- Demonstrate compliance with BNM RMiT Clause 11.8 requirements for malware and endpoint protection controls.
- Provide the Security Operations Manager, Chief Information Security Officer (CISO), and senior management with a factual assessment of the EDR programme's effectiveness.
- Identify gaps, weaknesses, or exceptions in EDR deployment and response capability.
- Support evidence requirements for internal audits, regulatory examinations, and third-party assessments.
- Track remediation progress against findings from prior reporting periods.

### 2.2 Regulatory Context

| Regulation / Standard | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 11.8 | Deployment of malware protection across all endpoints; maintenance of up-to-date signatures; monitoring and detection of malicious activity |
| BNM RMiT Policy Document | Clause 10.x | Security event monitoring and incident response obligations |
| [Organization Name] IT Security Policy | [Section Reference] | Internal policy requirements for endpoint security controls |
| [ISO 27001 / NIST CSF / CIS Controls] | [Reference] | Complementary framework alignment, if applicable |

### 2.3 Intended Audience

| Audience | Purpose |
|---|---|
| Security Operations Manager | Primary owner; accountability and action |
| Chief Information Security Officer (CISO) | Oversight and escalation decisions |
| IT Risk and Compliance | Regulatory evidence and risk register updates |
| Internal Audit | Assurance evidence |
| Board Risk Committee / Senior Management | Governance visibility (via Executive Summary) |
| BNM Examiners | Regulatory inspection evidence |

---

## 3. Scope and Methodology

### 3.1 Scope

*Define the boundaries of this assessment — which endpoint categories, business units, environments, and asset classes are included and excluded, and the rationale for any exclusions.*

#### 3.1.1 In-Scope Assets

The following endpoint categories are included in this report:

| Asset Category | Description | Count (Current Period) |
|---|---|---|
| Windows Workstations | End-user devices running Windows OS | [X] |
| Windows Servers | On-premise and cloud-hosted Windows servers | [X] |
| Linux Servers | On-premise and cloud-hosted Linux servers | [X] |
| macOS Endpoints | End-user Apple devices | [X] |
| Virtual Desktop Infrastructure (VDI) | Persistent and non-persistent virtual desktops | [X] |
| Cloud Workloads (IaaS) | Cloud-hosted compute instances under EDR scope | [X] |
| OT/SCADA Endpoints (if applicable) | Operational technology endpoints with EDR capability | [X] |
| **Total In-Scope Endpoints** | | **[X]** |

#### 3.1.2 Out-of-Scope Assets and Rationale

| Asset Category | Justification for Exclusion | Compensating Control |
|---|---|---|
| [Asset Type] | [e.g., Legacy OS — no compatible EDR agent; decommission scheduled Q[X] YYYY] | [e.g., Network segmentation, enhanced monitoring] |
| [Asset Type] | [e.g., Third-party managed device — contractual EDR attestation obtained] | [e.g., Vendor security attestation] |
| [Asset Type] | [e.g., Air-gapped OT device — incompatible environment] | [e.g., Physical access controls, allowlisting] |

#### 3.1.3 Business Units and Environments Covered

| Business Unit / Environment | In Scope | Notes |
|---|---|---|
| [Business Unit 1] | Yes / Partial / No | [Notes] |
| [Business Unit 2] | Yes / Partial / No | [Notes] |
| Production Environment | Yes | |
| UAT / Staging Environment | Yes / No | [Notes] |
| Development Environment | Yes / No | [Notes] |
| Disaster Recovery Site | Yes / No | [Notes] |

### 3.2 Methodology

*Describe the data collection methods, tools, and analytical approach used to produce this report.*

#### 3.2.1 Data Collection Sources

| Source | Data Extracted | Collection Method |
|---|---|---|
| EDR Management Console ([Vendor/Product Name]) | Agent deployment status, signature versions, alert data | Automated report export / API pull |
| IT Asset Management System ([System Name]) | Authoritative asset inventory | System query / CSV export |
| SIEM ([System Name]) | Correlated detection events and alert statistics | Query / dashboard export |
| Patch Management System ([System Name]) | Signature and engine update compliance | Automated report |
| Ticketing System ([System Name]) | Incident response and SLA metrics | Query / report export |

#### 3.2.2 Analytical Approach

1. **Coverage Analysis:** Comparison of EDR agent deployment records against the authoritative IT Asset Management inventory to identify unprotected endpoints.
2. **Signature Compliance Analysis:** Verification that all deployed EDR agents are running signatures within [X] hours of the latest available update, per policy.
3. **Agent Health Analysis:** Identification of agents in a degraded, inactive, or disconnected state exceeding the policy threshold of [X] hours.
4. **Detection Metrics Analysis:** Aggregation and trending of alert volumes, detection fidelity, and false positive rates across the reporting period.
5. **Response Metrics Analysis:** Measurement of Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) against defined SLAs.
6. **Exception and Exemption Review:** Validation of all active EDR exceptions against the approved exception register.

#### 3.2.3 Reporting Period Data Freshness

| Data Element | Snapshot Date / Range |
|---|---|
| Asset Inventory | [Date] |
| EDR Coverage Data | [Date] |
| Signature Currency Data | [Date] |
| Detection and Response Metrics | [Start Date] to [End Date] |

---

## 4. Key Findings and Observations

*Document all significant findings identified during the reporting period. Each finding should be clearly described, attributed to a root cause, and linked to a risk rating. Findings may be positive (attestation of compliance) or negative (gap or deficiency).*

### 4.1 EDR Coverage Findings

#### 4.1.1 Coverage by Asset Category

| Asset Category | Total Assets (Inventory) | EDR Deployed | Not Covered | Coverage Rate | Prior Period Rate | Trend |
|---|---|---|---|---|---|---|
| Windows Workstations | [X] | [X] | [X] | [X]% | [X]% | ↑ / ↓ / → |
| Windows Servers | [X] | [X] | [X] | [X]% | [X]% | ↑ / ↓ / → |
| Linux Servers | [X] | [X] | [X] | [X]% | [X]% | ↑ / ↓ / → |
| macOS Endpoints | [X] | [X] | [X] | [X]% | [X]% | ↑ / ↓ / → |
| VDI | [X] | [X] | [X] | [X]% | [X]% | ↑ / ↓ / → |
| Cloud Workloads | [X] | [X] | [X] | [X]% | [X]% | ↑ / ↓ / → |
| **Total** | **[X]** | **[X]** | **[X]** | **[X]%** | **[X]%** | ↑ / ↓ / → |

#### 4.1.2 Uncovered Endpoint Detail

*List all endpoints identified as not covered by EDR, including asset details and the reason for the gap. Attach complete list as Appendix A.*

| Asset Hostname / ID | Asset Category | Business Unit | Owner | Gap Reason | Approved Exception | Remediation Due Date |
|---|---|---|---|---|---|---|
| [Hostname] | [Category] | [BU] | [Owner] | [e.g., New asset pending onboarding] | Yes / No | [Date] |
| [Hostname] | [Category] | [BU] | [Owner] | [e.g., Legacy OS — exemption approved] | Yes / No | [Date] |

### 4.2 Signature Update Compliance Findings

*Assess the currency of EDR signatures across all deployed agents against the policy requirement. BNM RMiT Clause 11.8 requires malware definitions to be kept current.*

#### 4.2.1 Signature Currency Summary

| Signature Age Bracket | Number of Endpoints | Percentage | Policy Compliant |
|---|---|---|---|
| < 24 hours | [X] | [X]% | Yes |
| 24 – 48 hours | [X] | [X]% | Yes (within tolerance) |
| 48 – 72 hours | [X] | [X]% | Marginal |
| > 72 hours | [X] | [X]% | **No — Non-Compliant** |
| Unknown / Unreported | [X] | [X]% | **No — Requires Investigation** |

#### 4.2.2 Signature Non-Compliance Root Cause Analysis

| Root Cause | Number of Affected Endpoints | Remediation Action | Responsible Party |
|---|---|---|---|
| Network connectivity issue (endpoint offline) | [X] | [Action description] | [Owner] |
| Content delivery policy misconfiguration | [X] | [Action description] | [Owner] |
| Failed update due to disk space | [X] | [Action description] | [Owner] |
| [Other root cause] | [X] | [Action description] | [Owner] |

### 4.3 Agent Health Findings

| Health Status | Number of Agents | Percentage | Notes |
|---|---|---|---|
| Healthy / Active | [X] | [X]% | Communicating within policy threshold |
| Degraded / Partial Protection | [X] | [X]% | [e.g., Policy not applied, partial modules disabled] |
| Inactive / Stale (> [X] hrs) | [X] | [X]% | Requires investigation |
| Tampered / Disabled | [X] | [X]% | **Critical — immediate escalation required** |
| **Total** | **[X]** | **100%** | |

### 4.4 Detection Metrics Findings

*Summarise the volume, nature, and disposition of EDR alerts and detections recorded during the reporting period.*

#### 4.4.1 Alert Volume and Classification

| Alert Severity | Total Alerts | Auto-Resolved | Escalated to SOC | False Positives | True Positives | Pending |
|---|---|---|---|---|---|---|
| Critical | [X] | [X] | [X] | [X] | [X] | [X] |
| High | [X] | [X] | [X] | [X] | [X] | [X] |
| Medium | [X] | [X] | [X] | [X] | [X] | [X] |
| Low / Informational | [X] | [X] | [X] | [X] | [X] | [X] |
| **Total** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]** |

#### 4.4.2 Top Threat Categories Detected

| Rank | Threat Category | Alert Count | % of Total | Trend vs. Prior Period |
|---|---|---|---|---|
| 1 | [e.g., Ransomware Behaviour] | [X] | [X]% | ↑ / ↓ / → |
| 2 | [e.g., Credential Harvesting] | [X] | [X]% | ↑ / ↓ / → |
| 3 | [e.g., Lateral Movement] | [X] | [X]% | ↑ / ↓ / → |
| 4 | [e.g., Malicious Script Execution] | [X] | [X]% | ↑ / ↓ / → |
| 5 | [e.g., C2 Communication Attempt] | [X] | [X]% | ↑ / ↓ / → |

#### 4.4.3 Response Performance Metrics

| Metric | Q1 | Q2 | Q3 | Q4 | Annual Average | SLA Target | Status |
|---|---|---|---|---|---|---|---|
| Mean Time to Detect — Critical (hrs) | [X] | [X] | [X] | [X] | [X] | ≤ [X] hrs | [Met / Missed] |
| Mean Time to Detect — High (hrs) | [X] | [X] | [X] | [X] | [X] | ≤ [X] hrs | [Met / Missed] |
| Mean Time to Respond — Critical (hrs) | [X] | [X] | [X] | [X] | [X] | ≤ [X] hrs | [Met / Missed] |
| Mean Time to Respond — High (hrs) | [X] | [X] | [X] | [X] | [X] | ≤ [X] hrs | [Met / Missed] |
| False Positive Rate (%) | [X]% | [X]% | [X]% | [X]% | [X]% | ≤ [X]% | [Met / Missed] |
| SLA Breach — Critical Alerts | [X] | [X] | [X] | [X] | [X] | 0 | [Met / Missed] |

### 4.5 Observations from Prior Period

*Track the status of findings and recommendations carried over from the previous quarterly report.*

| Prior Finding Ref | Finding Description | Prior Risk Rating | Current Status | Remarks |
|---|---|---|---|---|
| [Prev-Ref-001] | [Description] | [Rating] | Closed / In Progress / Open | [Progress notes] |
| [Prev-Ref-002] | [Description] | [Rating] | Closed / In Progress / Open | [Progress notes] |
| [Prev-Ref-003] | [Description] | [Rating] | Closed / In Progress / Open | [Progress notes] |

---

## 5. Risk Ratings and Prioritisation

*Assign a standardised risk rating to each finding and prioritise remediation actions accordingly. Risk ratings must align with [Organization Name]'s Enterprise Risk Management Framework and the risk appetite approved by the Board.*

### 5.1 Risk Rating Methodology

| Risk Rating | Definition | Remediation Timeline |
|---|---|---|
| **Critical** | Immediate threat to system integrity, data confidentiality, or regulatory compliance; potential for significant financial or reputational harm | Immediate — within 24 hours |
| **High** | Significant control weakness with meaningful potential for exploitation or regulatory breach | Within 7 calendar days |
| **Medium** | Control gap that increases risk exposure but with limited immediate likelihood of exploitation | Within 30 calendar days |
| **Low** | Minor deficiency or best-practice deviation with minimal immediate risk impact | Within 90 calendar days / next reporting cycle |
| **Informational** | Observation for improvement; no direct risk impact | As operationally feasible |

### 5.2 Risk Register — Current Period Findings

| Finding ID | Finding Title | Root Cause | Likelihood | Impact | Risk Rating | Affected Assets | Regulatory Implication |
|---|---|---|---|---|---|---|---|
| EDR-[YYYY]-[QX]-001 | [Finding Title] | [Root Cause] | High / Med / Low | High / Med / Low | **Critical** | [Asset scope] | BNM RMiT Cl. 11.8 |
| EDR-[YYYY]-[QX]-002 | [Finding Title] | [Root Cause] | High / Med / Low | High / Med / Low | **High** | [Asset scope] | BNM RMiT Cl. 11.8 |
| EDR-[YYYY]-[QX]-003 | [Finding Title] | [Root Cause] | High / Med / Low | High / Med / Low | **Medium** | [Asset scope] | Internal Policy |
| EDR-[YYYY]-[QX]-004 | [Finding Title] | [Root Cause] | High / Med / Low | High / Med / Low | **Low** | [Asset scope] | Best Practice |
| EDR-[YYYY]-[QX]-005 | [Finding Title] | [Root Cause] | High / Med / Low | High / Med / Low | **Informational** | [Asset scope] | — |

### 5.3 Risk Prioritisation Heat Map Summary

*The following summarises the distribution of findings by risk category for this reporting period.*

| | **High Impact** | **Medium Impact** | **Low Impact** |
|---|---|---|---|
| **High Likelihood** | Critical | High | Medium |
| **Medium Likelihood** | High | Medium | Low |
| **Low Likelihood** | Medium | Low | Informational |

- **Critical findings this period:** [X]
- **High findings this period:** [X]
- **Medium findings this period:** [X]
- **Low / Informational this period:** [X]
- **Total open risk items:** [X]

---

## 6. Recommendations and Action Items

*Provide specific, actionable recommendations for each finding. Each recommendation must have a designated owner, a realistic remediation deadline, and success criteria for closure.*

### 6.1 Critical and High Priority Recommendations

| Rec. ID | Related Finding ID | Recommendation | Priority | Owner | Target Completion | Success Criteria | Status |
|---|---|---|---|---|---|---|---|
| REC-001 | EDR-[YYYY]-[QX]-001 | [Detailed remediation action, e.g., "Deploy EDR agent to all [X] unprotected servers in the production environment via SCCM push deployment. Validate coverage via EDR console within 48 hours."] | Critical | [Name / Role] | [Date] | 100% coverage on affected asset class | Open |
| REC-002 | EDR-[YYYY]-[QX]-002 | [Detailed remediation action] | High | [Name / Role] | [Date] | [Measurable success criterion] | Open |
| REC-003 | EDR-[YYYY]-[QX]-001 | [Detailed remediation action, e.g., "Review and remediate signature update distribution policy for isolated network segment. Validate all agents update within 24-hour SLA."] | High | [Name / Role] | [Date] | ≥ 99% signature currency compliance | In Progress |

### 6.2 Medium Priority Recommendations

| Rec. ID | Related Finding ID | Recommendation | Priority | Owner | Target Completion | Success Criteria | Status |
|---|---|---|---|---|---|---|---|
| REC-004 | EDR-[YYYY]-[QX]-003 | [Detailed remediation action] | Medium | [Name / Role] | [Date] | [Measurable success criterion] | Open |
| REC-005 | EDR-[YYYY]-[QX]-003 | [Detailed remediation action] | Medium | [Name / Role] | [Date] | [Measurable success criterion] | Open |

### 6.3 Low Priority and Improvement Recommendations

| Rec. ID | Related Finding ID | Recommendation | Priority | Owner | Target Completion | Success Criteria | Status |
|---|---|---|---|---|---|---|---|
| REC-006 | EDR-[YYYY]-[QX]-004 | [Detailed remediation action or improvement suggestion] | Low | [Name / Role] | [Date] | [Measurable success criterion] | Open |
| REC-007 | — | [Process improvement recommendation, e.g., "Implement automated alerting for any EDR agent inactive > 4 hours to reduce detection lag."] | Low | [Name / Role] | [Date] | [Measurable success criterion] | Open |

### 6.4 Strategic Programme Recommendations

*Long-term improvements recommended for the EDR programme beyond immediate remediation.*

- **[Strategic Rec 1]:** [e.g., Evaluate EDR telemetry integration with SIEM to improve cross-platform threat correlation. Target completion: [Q] [YYYY].]
- **[Strategic Rec 2]:** [e.g., Conduct EDR rule-tuning exercise to reduce false positive rate below the [X]% SLA threshold. Engage vendor professional services if required.]
- **[Strategic Rec 3]:** [e.g., Develop and test EDR-specific containment playbooks for ransomware and lateral movement scenarios ahead of next tabletop exercise.]

---

## 7. Management Response

*This section captures the formal response of [Organization Name]'s management to the findings and recommendations in this report. Responses must be provided by designated asset owners and approved by the Security Operations Manager or delegate prior to report submission.*

### 7.1 Management Position Statement

*Provide a brief management-level commentary on the overall EDR programme posture, acceptance or rejection of findings, and the organisation's commitment to remediation timelines.*

> [Management response text — to be completed by Security Operations Manager or delegate. Confirm acceptance of findings, any contested items, and commitment to remediation plan. Example: "Management accepts all findings in this report and confirms that remediation actions outlined in Section 6 are tracked in the organisation's risk register under reference [Risk Register ID]. The Security Operations team will provide a progress update at the next quarterly review scheduled for [Date]."]

### 7.2 Finding-Level Management Responses

| Finding ID | Management Response | Accepted (Y/N) | Revised Target Date (if applicable) | Respondent Name | Respondent Title | Response Date |
|---|---|---|---|---|---|---|
| EDR-[YYYY]-[QX]-001 | [e.g., "Accepted. EDR deployment to remaining production servers has been scheduled for [Date]. SCCM deployment package has been prepared and tested in UAT."] | Y | [Date if revised] | [Name] | [Title] | [Date] |
| EDR-[YYYY]-[QX]-002 | [Management response text] | Y / N | [Date if revised] | [Name] | [Title] | [Date] |
| EDR-[YYYY]-[QX]-003 | [Management response text] | Y / N | [Date if revised] | [Name] | [Title] | [Date] |
| EDR-[YYYY]-[QX]-004 | [Management response text] | Y / N | [Date if revised] | [Name] | [Title] | [Date] |

### 7.3 Contested Findings

*Document any findings contested by management, the basis for contestation, and the agreed resolution process.*

| Finding ID | Finding Description | Basis of Contest | Resolution Process | Resolution Target Date |
|---|---|---|---|---|
| [Finding ID] | [Description] | [e.g., "Management disputes the coverage gap on legacy system [X], noting the system is scheduled for decommission on [Date] and a formal risk acceptance is in place."] | [e.g., Risk acceptance to be reviewed at next CISO review] | [Date] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountabilities for the EDR Coverage and Compliance Report and the EDR programme's operational activities.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 8.1 Report Preparation and Governance RACI

| Activity | CISO | Security Ops Manager | SOC Lead / Analyst | IT Risk & Compliance | IT Operations | Internal Audit | Business Unit Heads |
|---|---|---|---|---|---|---|---|
| Define EDR coverage requirements and targets | C | A/R | C | C | I | I | I |
| Maintain authoritative asset inventory | I | C | I | C | A/R | I | C |
| Deploy and maintain EDR agents | I | A | R | I | R | I | I |
| Monitor EDR agent health and signatures | I | A | R | I | C | I | I |
| Generate EDR data and metrics | I | A | R | I | C | I | I |
| Prepare quarterly EDR Compliance Report | C | A/R | R | C | I | I | I |
| Review and validate report findings | C | A | R | R | C | I | I |
| Provide management response | C | A/R | I | C | C | I | R |
| Approve report for distribution | A | R | I | C | I | I | I |
| Submit report to Board / Risk Committee | A | R | I | C | I | I | I |
| Track remediation actions | I | A | R | R | R | C | C |
| Conduct independent assurance review | C | I | I | C | I | A/R | I |
| Notify BNM of material incidents (if required) | A/R | C | C | C | I | I | I |

### 8.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Security Operations Manager (Report Owner) | [Name] | [Department] | [Email / Ext] |
| CISO | [Name] | [Department] | [Email / Ext] |
| SOC Lead | [Name] | [Department] | [Email / Ext] |
| IT Risk and Compliance Manager | [Name] | [Department] | [Email / Ext] |
| IT Asset Management Owner | [Name] | [Department] | [Email / Ext] |
| EDR Vendor / Managed Security Service Provider | [Name / Organisation] | External | [Email / Contact] |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Section(s) Changed | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Name] | All | Initial draft for internal review |
| 0.2 | [Date] | [Name] | Sections 4, 5, 6 | Incorporated SOC lead review comments |
| 0.9 | [Date] | [Name] | All | Final draft submitted for management approval |
| 1.0 | [Date] | [Name] | All | Approved and issued |

### 9.2 Review Schedule

| Review Cycle | Trigger | Responsible Party |
|---|---|---|
| Quarterly (standard) | End of each calendar quarter | Security Operations Manager |
| Ad hoc — Material Incident | Any Critical-rated EDR finding or significant security incident | CISO / Security Operations Manager |
| Ad hoc — Regulatory Request | BNM examination or regulatory enquiry | CISO / IT Risk and Compliance |
| Ad hoc — Significant Asset Change | >10% change in in-scope asset inventory | Security Operations Manager |

### 9.3 Approval Sign-Off

*This report requires sign-off from the following authorities prior to submission and distribution.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By — SOC Analyst / Report Author | [Name] | _____________________________ | [Date] |
| Reviewed By — SOC Lead | [Name] | _____________________________ | [Date] |
| Approved By — Security Operations Manager | [Name] | _____________________________ | [Date] |
| Endorsed By — CISO | [Name] | _____________________________ | [Date] |
| Noted By — IT Risk and Compliance Manager | [Name] | _____________________________ | [Date] |

---

## 10. References

The following regulatory documents, standards, and internal policies provide the normative basis for this report.

### 10.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | **Clause 11.8** — Malware Protection |
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10 — Security Event Management |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Section 9 — Security Principle |
| [Additional BNM circular reference] | [Title] | Bank Negara Malaysia | [Clause reference] |

**BNM RMiT Clause 11.8 — Malware Protection (Summary):** Financial institutions must implement effective malware protection controls on all endpoint devices, including servers and workstations. Controls must include up-to-date malware definitions, real-time scanning capability, centrally managed deployment, and regular reporting on coverage and effectiveness. Any gaps in coverage must be risk-assessed and formally managed.

### 10.2 Internal Policy References

| Document Title | Document ID | Version | Applicable Section |
|---|---|---|---|
| Information Security Policy | [DOC-ID] | [Version] | [Section] — Endpoint Security |
| IT Asset Management Policy | [DOC-ID] | [Version] | [Section] — Asset Inventory |
| Security Incident Response Policy | [DOC-ID] | [Version] | [Section] — Detection and Response |
| IT Risk Management Framework | [DOC-ID] | [Version] | [Section] — Risk Rating Methodology |
| Vulnerability and Patch Management Policy | [DOC-ID] | [Version] | [Section] — Signature Updates |
| Security Exception Management Policy | [DOC-ID] | [Version] | [Section] — Exception Handling |

### 10.3 Technical References

| Reference | Description |
|---|---|
| [EDR Product Documentation — Vendor Name] | EDR platform technical documentation and reporting guides |
| NIST SP 800-83 | Guide to Malware Incident Prevention and Handling |
| CIS Control 10 | Malware Defenses |
| MITRE ATT&CK Framework | Reference for threat categorisation and detection coverage mapping |

---

## 11. Appendices

### Appendix A — Complete Uncovered Endpoint Inventory

*Full list of all in-scope endpoints without active EDR agent deployment as at the report date. Exported from authoritative asset management system and EDR console. Data as at: [Date].*

| Asset Hostname | Asset ID | IP Address | Asset Category | Operating System | Business Unit | Asset Owner | Gap Identified Date | Approved Exception | Exception Ref | Remediation Due |
|---|---|---|---|---|---|---|---|---|---|---|
| [Hostname] | [ID] | [IP] | [Category] | [OS] | [BU] | [Owner] | [Date] | Y / N | [Ref] | [Date] |

*[Attach full dataset or reference secure file share location: [File Path / SharePoint Link]]*

---

### Appendix B — EDR Agent Health Detail Report

*Full extract from EDR management console showing agent health status, version, last check-in time, and signature version for all in-scope endpoints. Data as at: [Date].*

| Hostname | Agent Version | Signature Version | Signature Date | Last Check-In | Health Status | Policy Applied | Business Unit |
|---|---|---|---|---|---|---|---|
| [Hostname] | [Version] | [Version] | [Date] | [Timestamp] | [Status] | Y / N | [BU] |

*[Attach full dataset or reference secure file share location: [File Path / SharePoint Link]]*

---

### Appendix C — Signature Update Compliance Detail

*Detailed breakdown of endpoints with signature age exceeding the policy compliance threshold of [X] hours, including root cause classification.*

| Hostname | Last Signature Update | Signature Age (hrs) | Compliance Threshold | Non-Compliant | Root Cause | Remediation Action | Resolved Date |
|---|---|---|---|---|---|---|---|
| [Hostname] | [Timestamp] | [X] | [X] hrs | Y / N | [Root cause] | [Action] | [Date / Pending] |

---

### Appendix D — Active Exception Register

*All formally approved exceptions to EDR deployment or policy compliance requirements, as at the report date.*

| Exception ID | Asset / Scope | Exception Type | Justification | Risk Accepted By | Approval Date | Review / Expiry Date | Compensating Control |
|---|---|---|---|---|---|---|---|
| EXC-[YYYY]-001 | [Asset name / scope] | [e.g., Legacy OS — no agent support] | [Business and technical justification] | [Name / Role] | [Date] | [Date] | [e.g., Network isolation, application allowlisting] |

---

### Appendix E — EDR KPI Dashboard (Trend Data)

*Quarterly trend data for key EDR performance indicators. Attach dashboard export or chart images as applicable.*

| KPI | Q1 [YYYY] | Q2 [YYYY] | Q3 [YYYY] | Q4 [YYYY] | Annual Target | Status |
|---|---|---|---|---|---|---|
| Overall EDR Coverage Rate (%) | [X]% | [X]% | [X]% | [X]% | ≥ 98% | [Met / Not Met] |
| Signature Currency Compliance (%) | [X]% | [X]% | [X]% | [X]% | ≥ 99% | [Met / Not Met] |
| Active Agent Rate (%) | [X]% | [X]% | [X]% | [X]% | ≥ 97% | [Met / Not Met] |
| Mean Time to Detect — Critical (hrs) | [X] | [X] | [X] | [X] | ≤ [X] | [Met / Not Met] |
| Mean Time to Respond — Critical (hrs) | [X] | [X] | [X] | [X] | ≤ [X] | [Met / Not Met] |
| False Positive Rate (%) | [X]% | [X]% | [X]% | [X]% | ≤ [X]% | [Met / Not Met] |
| Total True Positive Detections | [X] | [X] | [X] | [X] | — | — |
| Critical SLA Breaches | [X] | [X] | [X] | [X] | 0 | [Met / Not Met] |

*[Attach EDR dashboard screenshots or exported charts — [File Path / SharePoint Link]]*

---

### Appendix F — Remediation Action Tracker

*Live tracking of all open remediation actions from current and prior periods. Maintained by Security Operations Manager and updated weekly.*

| Rec. ID | Finding ID | Recommendation Summary | Priority | Owner | Original Due Date | Revised Due Date | % Complete | Status | Last Updated |
|---|---|---|---|---|---|---|---|---|---|
| REC-001 | EDR-[YYYY]-[QX]-001 | [Brief description] | Critical | [Name] | [Date] | [Date] | [X]% | Open / In Progress / Closed | [Date] |
| REC-002 | EDR-[YYYY]-[QX]-002 | [Brief description] | High | [Name] | [Date] | [Date] | [X]% | Open / In Progress / Closed | [Date] |

---

### Appendix G — Glossary

| Term | Definition |
|---|---|
| **EDR** | Endpoint Detection and Response — a class of security software that monitors endpoint devices for suspicious activity and provides detection, investigation, and response capabilities. |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document — the principal regulatory framework governing technology risk management for licensed financial institutions in Malaysia. |
| **MTTD** | Mean Time to Detect — the average elapsed time from when a threat event occurs to when it is detected by a security control or analyst. |
| **MTTR** | Mean Time to Respond — the average elapsed time from initial detection of a security event to full containment and resolution. |
| **False Positive** | An alert generated by the EDR system that, upon investigation, is found not to represent a genuine threat or malicious activity. |
| **True Positive** | An alert generated by the EDR system that is confirmed upon investigation to represent genuine malicious or suspicious activity. |
| **Signature Currency** | The degree to which EDR malware definition files are up-to-date relative to the latest available release from the EDR vendor. |
| **SIEM** | Security Information and Event Management — a platform that aggregates and correlates security events from multiple sources for monitoring and alerting. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles and responsibilities in processes and activities. |
| **SLA** | Service Level Agreement — a defined performance target or threshold for a measurable operational metric. |
| **NACSA** | National Cyber Security Agency — Malaysia's national authority for cybersecurity. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data in commercial transactions. |

---

*End of Document*

---

**Document Control:** This document is subject to the review cycle defined in Section 9.2. The master copy is maintained in [Document Repository Name / SharePoint Path]. Printed copies are uncontrolled — verify currency against the master before use.

| Field | Value |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Last Updated** | [Date] |
| **Next Review** | [Date] |