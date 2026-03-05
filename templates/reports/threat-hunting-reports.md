# Threat Hunting Reports

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
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

## 1. Purpose and Scope

### 1.1 Purpose

This Threat Hunting Report documents the outcomes of proactive threat hunting activities conducted by [Organization Name] in accordance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, specifically Clause 11.18. The report captures intelligence-led investigation activities designed to detect threats that may have evaded existing preventive and detective security controls.

This document serves as an audit-ready record of threat hunting engagements, supporting the organisation's continuous improvement posture and demonstrating regulatory compliance to BNM examiners, internal audit, and senior management.

### 1.2 Scope

*Describe the systems, environments, and threat vectors covered during this threat hunting engagement. Clearly state what is included and excluded.*

**Reporting Period:** [Quarter] [Year] — e.g., Q1 2026 (1 January 2026 – 31 March 2026)

**Environments in Scope:**

- [Production environment / network segment]
- [On-premises data centre / cloud environment]
- [Endpoint estate — servers, workstations, privileged access devices]
- [Identity and Access Management (IAM) infrastructure]
- [Critical financial applications: [Application Name(s)]]

**Environments Excluded from Scope:**

- [Development / staging environments — reason for exclusion]
- [Third-party managed systems — reason for exclusion]

### 1.3 Regulatory Context

This report is prepared in fulfilment of the following regulatory obligations:

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 11.18 | Institutions shall conduct proactive threat hunting to detect threats not identified by automated controls, with findings documented and reported to senior management. |
| BNM RMiT Policy Document | Clause 11.1 – 11.5 | General cybersecurity risk management requirements. |
| Personal Data Protection Act 2010 (PDPA) | Part II, Section 5 | Protection of personal data processed in systems subject to this hunt. |
| NACSA Cybersecurity Framework | [Relevant Section] | [Relevant requirement description.] |

---

## 2. Executive Summary

*Provide a concise, non-technical summary of the threat hunting engagement suitable for senior management and the Board. Highlight the most significant findings, overall security posture assessment, and the most critical actions required. This section should not exceed two pages.*

### 2.1 Engagement Overview

| Field | Details |
|---|---|
| **Hunt Reference** | [TH-YYYY-QQ-NNN] |
| **Reporting Period** | [Start Date] to [End Date] |
| **Engagement Type** | [Hypothesis-Driven / Intelligence-Led / Situational Awareness] |
| **Lead Threat Hunter** | [Name, Title] |
| **Engagement Status** | [Completed / Ongoing / Closed] |
| **Report Date** | [Report Date] |

### 2.2 Overall Security Posture Assessment

*Summarise the organisation's overall threat posture as assessed during this engagement period.*

> **Overall Posture Rating:** [Critical / High / Medium / Low / Acceptable]

[Provide 3–5 sentences summarising the overall findings. Example: During Q[X] [Year], [Organization Name]'s threat hunting team conducted [X] discrete hunt missions across [Y] environments. A total of [Z] findings were identified, of which [n] are rated Critical or High severity. No evidence of active adversary persistence or lateral movement was detected in core banking systems. Improvements in endpoint telemetry coverage have enhanced detection fidelity since the previous quarter.]

### 2.3 Summary Statistics

| Metric | Value |
|---|---|
| Total Hunt Missions Conducted | [Number] |
| Total Hypotheses Investigated | [Number] |
| Total Findings Identified | [Number] |
| Critical Findings | [Number] |
| High Findings | [Number] |
| Medium Findings | [Number] |
| Low / Informational Findings | [Number] |
| Findings Remediated (this period) | [Number] |
| Findings Escalated to Incident Response | [Number] |
| Confirmed Incidents Arising from Hunts | [Number] |
| Open Action Items Carried Forward | [Number] |

### 2.4 Key Messages for Senior Management

- **[Key Message 1]:** [e.g., Credential-based attacks targeting privileged accounts have increased by X% compared to the prior quarter, requiring immediate MFA policy enforcement on all Tier-1 systems.]
- **[Key Message 2]:** [e.g., Telemetry gaps in the DMZ network segment were identified and remediated, improving detection coverage.]
- **[Key Message 3]:** [e.g., No confirmed data exfiltration activity was detected during this reporting period.]
- **[Key Message 4]:** [e.g., Three action items from Q[X-1] remain open and are tracked in Section 6.]

---

## 3. Scope and Methodology

*Detail the threat intelligence sources, hunting hypotheses, tools, techniques, and procedures employed during this engagement. This section supports reproducibility and audit scrutiny.*

### 3.1 Threat Intelligence Sources

*List all intelligence sources used to formulate hunting hypotheses for this engagement period.*

| Source | Type | Relevance to This Hunt |
|---|---|---|
| [MITRE ATT&CK Framework vX.X] | Framework | TTPs mapped to financial sector threat actors |
| [Financial Sector ISAC (FS-ISAC)] | Sector-specific intel | Emerging threats to ASEAN financial institutions |
| [NACSA National Cyber Coordination and Command Centre (NC4)] | Government | National threat advisories |
| [Commercial Threat Intel Feed — Provider Name] | Commercial | IOC feeds and adversary profiling |
| [Internal SOC Incident Data — Prior Quarters] | Internal | Patterns from previously detected incidents |
| [Dark Web Monitoring Service] | Commercial | Credential exposure and organisation mentions |
| [BNM Circulars and Advisories] | Regulatory | [Circular reference, if applicable] |

### 3.2 Hunting Hypotheses

*Document each hypothesis investigated during the engagement. Hypotheses should be grounded in threat intelligence and mapped to MITRE ATT&CK tactics and techniques.*

| Hypothesis ID | Hypothesis Statement | MITRE Tactic | MITRE Technique | Priority |
|---|---|---|---|---|
| HYP-001 | [e.g., Adversaries may have established persistence via scheduled tasks on critical servers following the phishing campaign detected in [Month].] | Persistence | T1053.005 – Scheduled Task | High |
| HYP-002 | [e.g., Insider threat actors may be exfiltrating data via authorised cloud storage applications.] | Exfiltration | T1567.002 – Exfiltration to Cloud Storage | High |
| HYP-003 | [e.g., Compromised service accounts may be performing lateral movement via Pass-the-Hash techniques.] | Lateral Movement | T1550.002 – Pass the Hash | Medium |
| HYP-004 | [Add hypothesis] | [Tactic] | [Technique ID] | [Priority] |
| HYP-005 | [Add hypothesis] | [Tactic] | [Technique ID] | [Priority] |

### 3.3 Tools and Technologies Employed

| Tool / Platform | Category | Purpose |
|---|---|---|
| [SIEM Platform — e.g., Microsoft Sentinel / Splunk] | Log Analysis | Centralised log querying and correlation |
| [EDR Solution — e.g., CrowdStrike / Defender for Endpoint] | Endpoint Telemetry | Process, network, and file activity analysis |
| [Network Detection & Response (NDR) — Platform Name] | Network Telemetry | East-west and north-south traffic analysis |
| [Threat Intelligence Platform — e.g., MISP / OpenCTI] | Intel Management | IOC correlation and threat actor profiling |
| [Forensic Analysis Tool — e.g., Velociraptor / KAPE] | Digital Forensics | Targeted artifact collection and analysis |
| [Identity Analytics Tool — Platform Name] | Identity | Anomalous authentication and privilege use detection |

### 3.4 Hunt Missions Summary

*Provide a brief summary of each discrete hunt mission conducted during the reporting period.*

#### Mission TH-[YYYY-QQ]-001: [Mission Title]

| Field | Details |
|---|---|
| **Mission ID** | TH-[YYYY-QQ]-001 |
| **Hypothesis Investigated** | HYP-001 |
| **Date(s) Conducted** | [Start Date] – [End Date] |
| **Lead Hunter** | [Name] |
| **Systems / Scope** | [Systems or segments investigated] |
| **Outcome** | [Finding identified / No finding / Hypothesis refuted] |

*Brief narrative description of the hunt mission, data sources queried, analytical techniques applied, and outcome.*

#### Mission TH-[YYYY-QQ]-002: [Mission Title]

| Field | Details |
|---|---|
| **Mission ID** | TH-[YYYY-QQ]-002 |
| **Hypothesis Investigated** | HYP-002 |
| **Date(s) Conducted** | [Start Date] – [End Date] |
| **Lead Hunter** | [Name] |
| **Systems / Scope** | [Systems or segments investigated] |
| **Outcome** | [Finding identified / No finding / Hypothesis refuted] |

*[Add additional missions as required.]*

### 3.5 Data Sources and Coverage Assessment

*Assess the adequacy of available telemetry and data sources. Identify any coverage gaps that limited the scope or effectiveness of hunting activities.*

| Data Source | Coverage | Quality | Gaps / Limitations |
|---|---|---|---|
| Windows Event Logs (Domain Controllers) | Full | High | [None / Describe gap] |
| Windows Event Logs (Servers) | [Partial / Full] | [High / Medium / Low] | [Describe gap] |
| Network Flow Data (Perimeter) | [Partial / Full] | [High / Medium / Low] | [Describe gap] |
| Network Flow Data (Internal / East-West) | [Partial / Full] | [High / Medium / Low] | [Describe gap] |
| Cloud Access Logs ([Provider]) | [Partial / Full] | [High / Medium / Low] | [Describe gap] |
| Endpoint EDR Telemetry | [Partial / Full] | [High / Medium / Low] | [Describe gap] |
| Database Activity Logs | [Partial / Full] | [High / Medium / Low] | [Describe gap] |
| Email Gateway Logs | [Partial / Full] | [High / Medium / Low] | [Describe gap] |

---

## 4. Key Findings and Observations

*Document each finding identified during threat hunting activities in detail. Each finding must include sufficient information to allow independent verification and remediation. Assign a unique Finding ID to each item.*

### 4.1 Finding Register

| Finding ID | Title | Severity | Hunt Mission | Status | Owner |
|---|---|---|---|---|---|
| THF-[YYYY-QQ]-001 | [Finding Title] | Critical | TH-[YYYY-QQ]-001 | [Open / Remediated / Risk Accepted] | [System / Team Owner] |
| THF-[YYYY-QQ]-002 | [Finding Title] | High | TH-[YYYY-QQ]-001 | [Open / Remediated / Risk Accepted] | [System / Team Owner] |
| THF-[YYYY-QQ]-003 | [Finding Title] | Medium | TH-[YYYY-QQ]-002 | [Open / Remediated / Risk Accepted] | [System / Team Owner] |
| THF-[YYYY-QQ]-004 | [Finding Title] | Low | TH-[YYYY-QQ]-003 | [Open / Remediated / Risk Accepted] | [System / Team Owner] |

---

### 4.2 Detailed Findings

*For each finding, complete the following detailed record. Copy this subsection for each finding identified.*

---

#### Finding THF-[YYYY-QQ]-001: [Finding Title]

| Field | Details |
|---|---|
| **Finding ID** | THF-[YYYY-QQ]-001 |
| **Severity** | [Critical / High / Medium / Low / Informational] |
| **Status** | [Open / Remediated / Risk Accepted / In Progress] |
| **Hunt Mission** | TH-[YYYY-QQ]-001 |
| **Hypothesis** | HYP-001 |
| **MITRE ATT&CK Tactic** | [Tactic Name] |
| **MITRE ATT&CK Technique** | [T-XXXX.XXX – Technique Name] |
| **Affected Systems** | [Hostnames / IP ranges / Applications] |
| **First Evidence Timestamp** | [YYYY-MM-DD HH:MM:SS UTC] |
| **Detection Method** | [Log analysis / Behavioural anomaly / IOC match / Memory forensics] |
| **Assigned Owner** | [Name, Team] |
| **Target Remediation Date** | [Date] |

**Description:**

*Provide a clear, factual description of what was observed. Avoid speculation. State what was found, where it was found, and why it is significant.*

[Describe the finding in detail. Include the specific behaviour, artefact, or anomaly observed. Reference the data sources and queries used to identify the finding. State whether this represents a confirmed threat, a vulnerability, a control gap, or an observation requiring further investigation.]

**Evidence Summary:**

| Evidence Item | Source | Timestamp | Description |
|---|---|---|---|
| [Log entry / screenshot / hash] | [SIEM / EDR / PCAP] | [Timestamp] | [Brief description] |
| [Log entry / screenshot / hash] | [SIEM / EDR / PCAP] | [Timestamp] | [Brief description] |

**Impact Assessment:**

*Describe the potential business and technical impact if this finding is not addressed.*

- **Confidentiality Impact:** [High / Medium / Low / None] — [Brief explanation]
- **Integrity Impact:** [High / Medium / Low / None] — [Brief explanation]
- **Availability Impact:** [High / Medium / Low / None] — [Brief explanation]
- **Regulatory Impact:** [e.g., Potential violation of RMiT Clause 11.18 / PDPA Section 5 / None identified]

**Recommended Action:**

[State the specific, actionable remediation step(s) required. See Section 6 for full action item tracking.]

---

#### Finding THF-[YYYY-QQ]-002: [Finding Title]

*[Replicate the above structure for each additional finding. Include all relevant fields.]*

---

### 4.3 Observations (Non-Finding)

*Document notable observations from hunt activities that do not constitute findings but are relevant to the organisation's security posture, detection capability, or future hunt planning.*

| Observation ID | Description | Relevance | Recommended Follow-Up |
|---|---|---|---|
| OBS-001 | [e.g., Detection coverage for east-west traffic improved following VLAN segmentation changes implemented in [Month].] | Positive posture improvement | [Monitor to confirm sustained improvement] |
| OBS-002 | [e.g., User account [anonymised] exhibited anomalous after-hours login patterns that, upon investigation, were confirmed as authorised remote work activity.] | False positive — process learning | [Update baseline / tuning rule in SIEM] |
| OBS-003 | [Add observation] | [Relevance] | [Follow-up] |

---

## 5. Risk Ratings and Prioritisation

*Apply a consistent risk rating methodology to all findings to support prioritised remediation. The risk rating must reflect both likelihood and impact in the context of [Organization Name]'s operating environment and BNM-regulated activities.*

### 5.1 Risk Rating Methodology

Findings are rated using the following criteria, consistent with [Organization Name]'s Enterprise Risk Management framework and aligned to BNM RMiT risk management principles:

| Severity | Likelihood × Impact Description | Response Timeframe |
|---|---|---|
| **Critical** | Exploitation is imminent or confirmed; significant impact to core banking operations, customer data, or regulatory compliance. | Immediate (within 24 hours) |
| **High** | High likelihood of exploitation; material impact to systems or data if exploited. | Within 7 calendar days |
| **Medium** | Moderate likelihood; limited impact in isolation but may be chained with other weaknesses. | Within 30 calendar days |
| **Low** | Low likelihood or minimal impact; represents a security hygiene improvement. | Within 90 calendar days |
| **Informational** | No direct risk; noted for awareness or future hunt planning. | No mandatory remediation |

### 5.2 Risk Matrix

*Plot all current findings against the risk matrix below.*

| | **Low Impact** | **Medium Impact** | **High Impact** | **Critical Impact** |
|---|---|---|---|---|
| **Almost Certain** | Medium | High | Critical | Critical |
| **Likely** | Low | Medium | High | Critical |
| **Possible** | Low | Medium | High | High |
| **Unlikely** | Low | Low | Medium | High |
| **Rare** | Informational | Low | Medium | High |

### 5.3 Finding Risk Ratings Summary

| Finding ID | Title | Likelihood | Impact | Risk Rating | Justification |
|---|---|---|---|---|---|
| THF-[YYYY-QQ]-001 | [Title] | [Likelihood] | [Impact] | **Critical** | [Brief justification for the rating assigned] |
| THF-[YYYY-QQ]-002 | [Title] | [Likelihood] | [Impact] | **High** | [Brief justification] |
| THF-[YYYY-QQ]-003 | [Title] | [Likelihood] | [Impact] | **Medium** | [Brief justification] |
| THF-[YYYY-QQ]-004 | [Title] | [Likelihood] | [Impact] | **Low** | [Brief justification] |

### 5.4 Trend Analysis

*Compare finding severity distribution against previous quarters to identify improving or deteriorating trends.*

| Severity | Q[n-2] | Q[n-1] | Q[n] (Current) | Trend |
|---|---|---|---|---|
| Critical | [n] | [n] | [n] | [Improving / Stable / Deteriorating] |
| High | [n] | [n] | [n] | [Improving / Stable / Deteriorating] |
| Medium | [n] | [n] | [n] | [Improving / Stable / Deteriorating] |
| Low / Informational | [n] | [n] | [n] | [Improving / Stable / Deteriorating] |
| **Total** | **[n]** | **[n]** | **[n]** | |

---

## 6. Recommendations and Action Items

*Provide specific, actionable recommendations to address all findings and close identified control gaps. Each action item must have a clear owner, timeline, and success criterion.*

### 6.1 Strategic Recommendations

*High-level recommendations for improving the organisation's threat hunting capability and overall security posture over the medium to long term.*

1. **[Recommendation Title]:** [Description. e.g., Expand EDR coverage to all servers in the DMZ network segment to close the telemetry gap identified in Section 3.5. This will improve detection fidelity for hypotheses related to lateral movement and command-and-control activity.]

2. **[Recommendation Title]:** [Description. e.g., Establish a formal threat intelligence sharing arrangement with peer Malaysian financial institutions through the FSISAC ASEAN chapter to enhance hypothesis generation for future quarters.]

3. **[Recommendation Title]:** [Description.]

### 6.2 Action Item Register

*Track all remediation and improvement actions arising from this report. Status to be updated at each quarterly review.*

| Action ID | Finding Ref | Action Description | Priority | Owner | Target Date | Status | Completion Date |
|---|---|---|---|---|---|---|---|
| ACT-[YYYY-QQ]-001 | THF-[YYYY-QQ]-001 | [e.g., Immediately revoke and re-provision all identified compromised service account credentials and enforce MFA on all Tier-1 system accounts.] | Critical | [CISO / IT Security Manager] | [Date] | [Open / In Progress / Completed] | [Date or —] |
| ACT-[YYYY-QQ]-002 | THF-[YYYY-QQ]-001 | [e.g., Conduct forensic investigation of all systems identified in Finding 001 to confirm or rule out adversary persistence.] | Critical | [SOC / IR Team] | [Date] | [Open / In Progress / Completed] | [Date or —] |
| ACT-[YYYY-QQ]-003 | THF-[YYYY-QQ]-002 | [e.g., Implement DLP policy to block unsanctioned cloud storage upload from managed endpoints.] | High | [IT Infrastructure Team] | [Date] | [Open / In Progress / Completed] | [Date or —] |
| ACT-[YYYY-QQ]-004 | THF-[YYYY-QQ]-003 | [e.g., Review and rotate all service account passwords used for scheduled tasks; implement LAPS for local administrator accounts.] | Medium | [Active Directory Team] | [Date] | [Open / In Progress / Completed] | [Date or —] |
| ACT-[YYYY-QQ]-005 | OBS-002 | [e.g., Update SIEM baseline rules to reduce false positives for authorised after-hours remote work; document tuning rationale.] | Low | [SOC Analyst / SIEM Engineer] | [Date] | [Open / In Progress / Completed] | [Date or —] |
| ACT-[YYYY-QQ]-006 | General | [e.g., Expand EDR agent deployment to uncovered servers — see Section 3.5.] | Medium | [IT Infrastructure Team] | [Date] | [Open / In Progress / Completed] | [Date or —] |

### 6.3 Carryover Action Items from Previous Quarter

*List any action items from prior quarters that remain open, with updated status and revised target dates where applicable.*

| Action ID | Original Quarter | Original Description | Original Target Date | Updated Status | Revised Target Date | Escalation Required |
|---|---|---|---|---|---|---|
| ACT-[YYYY-Q(n-1)]-00X | Q[n-1] [Year] | [Description of prior action item] | [Original date] | [In Progress / Delayed — reason] | [Revised date] | [Yes / No] |
| ACT-[YYYY-Q(n-1)]-00X | Q[n-1] [Year] | [Description] | [Original date] | [Status] | [Revised date] | [Yes / No] |

---

## 7. Management Response

*This section records the formal response from [Organization Name] management to the findings and recommendations contained in this report. Management responses must be documented prior to this report being submitted to the Board Risk Committee or equivalent governance body.*

### 7.1 Management Acceptance Statement

*Senior management's formal acknowledgement and acceptance of the report's findings.*

> We, the undersigned members of [Organization Name]'s senior management, have reviewed the Threat Hunting Report for [Quarter] [Year]. We accept the findings, risk ratings, and recommendations as presented. The action items identified in Section 6 have been reviewed and owners and timelines have been confirmed or adjusted as noted below. We commit to implementing the agreed remediation actions within the specified timeframes.

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk | [Name] | __________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | __________________ | [Date] |
| Chief Information Officer (CIO) | [Name] | __________________ | [Date] |
| Chief Risk Officer (CRO) | [Name] | __________________ | [Date] |

### 7.2 Management Comments on Individual Findings

*Where management agrees, disagrees, or seeks to adjust the timeline or owner of a finding, this must be documented here. Risk acceptance decisions must be explicitly recorded and approved at the appropriate authority level.*

| Finding ID | Management Position | Comments / Rationale | Authority Level | Approved By |
|---|---|---|---|---|
| THF-[YYYY-QQ]-001 | Accept and Remediate | [e.g., Agreed. Remediation commenced on [Date]. IR team has been engaged.] | [CISO / Head of Technology Risk] | [Name] |
| THF-[YYYY-QQ]-002 | Accept and Remediate with Revised Timeline | [e.g., DLP implementation has been approved but vendor procurement lead time extends the target date to [Revised Date]. Risk accepted for interim period with compensating controls documented.] | [CRO] | [Name] |
| THF-[YYYY-QQ]-003 | Risk Accepted | [e.g., Management accepts this risk for [Reason]. Compensating control: [Description]. Risk acceptance to be reviewed at next quarterly hunt.] | [CRO / Board] | [Name] |

### 7.3 Escalation to Board Risk Committee

*Indicate whether any findings require escalation to the Board Risk Committee (BRC) or equivalent governance body, consistent with [Organization Name]'s escalation thresholds.*

- **Escalation Required:** [Yes / No]
- **Findings Requiring Escalation:** [List Finding IDs, or "None"]
- **BRC Reporting Date:** [Date of next BRC meeting at which this will be tabled]
- **BRC Paper Reference:** [Reference number of BRC paper, if applicable]

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for threat hunting activities and the production, review, and governance of this report.*

### 8.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Technology Risk | CISO | SOC / Threat Hunt Team | IT Infrastructure | Internal Audit | CRO | Board Risk Committee |
|---|---|---|---|---|---|---|---|
| Define annual threat hunting programme and schedule | C | A | R | I | C | I | I |
| Develop hunt hypotheses and methodology | C | C | R | C | I | I | I |
| Execute threat hunting missions | I | C | R | C | I | I | I |
| Analyse findings and assign severity ratings | C | A | R | C | I | I | I |
| Draft Threat Hunting Report | C | C | R | I | I | I | I |
| Review and validate report | A | R | C | I | C | C | I |
| Manage and track remediation action items | A | C | C | R | I | I | I |
| Submit report to governance bodies | A | C | I | I | I | C | I |
| Approve report and management response | I | C | I | I | I | A | I |
| Receive report and provide oversight | I | I | I | I | A | C | A |
| Escalated findings — Board notification | I | C | I | I | I | R | A |

---

## 9. Review and Approval

### 9.1 Document Review Schedule

This Threat Hunting Report is produced **quarterly** in accordance with [Organization Name]'s Technology Risk Management Framework and BNM RMiT Clause 11.18. The following schedule applies:

| Quarter | Reporting Period | Draft Due | Review Completed | Final Submission |
|---|---|---|---|---|
| Q1 | 1 Jan – 31 Mar | 15 Apr | 22 Apr | 30 Apr |
| Q2 | 1 Apr – 30 Jun | 15 Jul | 22 Jul | 31 Jul |
| Q3 | 1 Jul – 30 Sep | 15 Oct | 22 Oct | 31 Oct |
| Q4 | 1 Oct – 31 Dec | 15 Jan | 22 Jan | 31 Jan |

### 9.2 Version History

| Version | Date | Author | Changes / Summary |
|---|---|---|---|
| 0.1 | [Date] | [Name, Title] | Initial draft for internal review |
| 0.2 | [Date] | [Name, Title] | Incorporated review comments from [Reviewer Name] |
| 1.0 | [Date] | [Name, Title] | Final version approved for submission |

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| **Preparer** — Lead Threat Hunter | [Name] | __________________ | [Date] |
| **Reviewer** — Head of SOC | [Name] | __________________ | [Date] |
| **Reviewer** — CISO | [Name] | __________________ | [Date] |
| **Approver** — Head of Technology Risk | [Name] | __________________ | [Date] |
| **Noted By** — Chief Risk Officer | [Name] | __________________ | [Date] |

---

## 10. References

The following regulatory documents, frameworks, and internal policies are referenced by this report:

| Reference | Title | Issuing Body | Version / Date |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | June 2020 (or latest effective version) |
| BNM RMiT Clause 11.18 | Threat Hunting — Specific requirement for proactive threat identification and reporting | Bank Negara Malaysia | June 2020 |
| BNM RMiT Clause 11.1–11.5 | Cybersecurity Risk Management — General requirements | Bank Negara Malaysia | June 2020 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010, as amended |
| NACSA Cybersecurity Framework | National Cybersecurity Framework | NACSA | [Version / Date] |
| MITRE ATT&CK | Enterprise ATT&CK Matrix for Enterprise | MITRE Corporation | [Version used during hunt] |
| [Internal Policy Ref] | [Organization Name] Cybersecurity Policy | [Organization Name] | [Version / Date] |
| [Internal Policy Ref] | [Organization Name] Technology Risk Management Framework | [Organization Name] | [Version / Date] |
| [Internal Policy Ref] | [Organization Name] Incident Response Plan | [Organization Name] | [Version / Date] |
| [Internal Policy Ref] | [Organization Name] Threat Intelligence Management Procedure | [Organization Name] | [Version / Date] |

---

## 11. Appendices

### Appendix A: Indicators of Compromise (IOCs)

*List all IOCs identified or correlated during this hunting engagement. IOCs should be shared through appropriate channels (e.g., internal MISP/OpenCTI instance, FS-ISAC) where permissible. Sensitive IOC details may be classified at a higher level and distributed separately.*

| IOC Type | Value | Confidence | Finding Reference | Disposition |
|---|---|---|---|---|
| IP Address | [x.x.x.x] | [High / Medium / Low] | THF-[YYYY-QQ]-001 | [Blocked / Monitoring / Informational] |
| Domain | [malicious-domain.com] | [High / Medium / Low] | THF-[YYYY-QQ]-001 | [Blocked / Monitoring / Informational] |
| File Hash (SHA-256) | [hash value] | [High / Medium / Low] | THF-[YYYY-QQ]-001 | [Quarantined / Blocked / Monitoring] |
| Registry Key | [HKLM\...\...\...] | [High / Medium / Low] | THF-[YYYY-QQ]-001 | [Remediated / Monitoring] |
| URL | [https://...] | [High / Medium / Low] | THF-[YYYY-QQ]-002 | [Blocked / Monitoring / Informational] |
| Email Address | [sender@domain.com] | [High / Medium / Low] | THF-[YYYY-QQ]-002 | [Blocked / Monitoring] |

---

### Appendix B: MITRE ATT&CK Coverage Heatmap

*Attach or embed the MITRE ATT&CK Navigator heatmap showing the tactics and techniques investigated during this quarter, colour-coded to indicate: (a) techniques with existing detection coverage, (b) techniques hunted this quarter, and (c) coverage gaps. The heatmap should be generated using the MITRE ATT&CK Navigator tool at https://mitre-attack.github.io/attack-navigator/.*

> **[Attach ATT&CK Navigator heatmap export — JSON and PNG formats recommended]**

---

### Appendix C: Detection Rules and SIEM Queries

*Document any new detection rules, SIEM correlation rules, or hunting queries developed or refined as a result of this engagement. These should be submitted to the Detection Engineering team for incorporation into the production SIEM.*

| Query / Rule ID | Description | Platform | MITRE Technique | Status |
|---|---|---|---|---|
| DET-[YYYY-QQ]-001 | [e.g., Detects scheduled task creation by non-administrative accounts on domain controllers] | [Splunk / Sentinel / QRadar] | T1053.005 | [Submitted / In Review / Deployed] |
| DET-[YYYY-QQ]-002 | [Description] | [Platform] | [Technique ID] | [Status] |

*Full query text for each rule is maintained in [Organization Name]'s detection rule repository at [Repository URL / Location].*

---

### Appendix D: Supporting Evidence and Artefacts

*Catalogue all supporting evidence collected during the engagement. Evidence must be preserved in accordance with [Organization Name]'s Digital Evidence Management Policy to support potential incident response or legal proceedings.*

| Evidence ID | Type | Description | Finding Reference | Storage Location | Chain of Custody |
|---|---|---|---|---|---|
| EVD-001 | Log Export | [e.g., Windows Security Event Log export from DC01 covering [date range]] | THF-[YYYY-QQ]-001 | [Path / Case Management System reference] | [Custodian Name] |
| EVD-002 | Screenshot | [Description] | THF-[YYYY-QQ]-002 | [Location] | [Custodian Name] |
| EVD-003 | Memory Capture | [Description] | THF-[YYYY-QQ]-001 | [Location] | [Custodian Name] |
| EVD-004 | PCAP | [Description] | THF-[YYYY-QQ]-003 | [Location] | [Custodian Name] |

---

### Appendix E: Glossary

| Term | Definition |
|---|---|
| ATT&CK | Adversarial Tactics, Techniques and Common Knowledge — MITRE's knowledge base of adversary behaviour |
| BNM | Bank Negara Malaysia — the central bank and financial regulator of Malaysia |
| EDR | Endpoint Detection and Response |
| IOC | Indicator of Compromise |
| NACSA | National Cyber Security Agency of Malaysia |
| NDR | Network Detection and Response |
| PDPA | Personal Data Protection Act 2010 |
| RACI | Responsible, Accountable, Consulted, Informed |
| RMiT | Risk Management in Technology — BNM Policy Document |
| SIEM | Security Information and Event Management |
| SOC | Security Operations Centre |
| TTP | Tactics, Techniques and Procedures |
| [Add term] | [Definition] |

---

### Appendix F: Previous Quarter Action Item Closure Evidence

*Provide evidence of remediation for action items closed during this reporting period. This supports audit trail requirements under BNM RMiT.*

| Action ID | Description | Closure Evidence | Verified By | Closure Date |
|---|---|---|---|---|
| ACT-[YYYY-Q(n-1)]-00X | [Action description] | [e.g., Change ticket [Ref] closed; screenshot attached at EVD-00X] | [Name, Title] | [Date] |
| ACT-[YYYY-Q(n-1)]-00X | [Action description] | [e.g., Confirmed via re-hunt on [Date] — no recurrence detected] | [Name, Title] | [Date] |

---

*This document is classified **Confidential** and is intended solely for authorised recipients within [Organization Name] and designated regulatory bodies. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. This document must be stored and transmitted in accordance with [Organization Name]'s Information Classification and Handling Policy.*

*Document ID: [Document ID] | Version: 1.0 | Owner: Head of Technology Risk | Last Updated: [Date]*