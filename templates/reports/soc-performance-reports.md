# SOC Performance Report

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | SOC Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Handling Instruction:** This document is classified as **Confidential**. It must not be shared outside [Organization Name] without prior written approval from the SOC Manager or Chief Information Security Officer (CISO). Physical copies must be stored securely and disposed of via cross-cut shredding.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [Use Case Catalogue and Tuning Schedule](#5-use-case-catalogue-and-tuning-schedule)
6. [Shift Handover Procedures](#6-shift-handover-procedures)
7. [Escalation Matrix and SLA](#7-escalation-matrix-and-sla)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This SOC Performance Report provides [Organization Name]'s senior management, Board Risk Committee, and relevant stakeholders with a structured, evidence-based assessment of the Security Operations Centre (SOC) performance for the reporting period. The report documents operational metrics, detection and response effectiveness, use case coverage, staffing performance, and areas identified for improvement.

This document is prepared in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.6**, which requires financial institutions to maintain robust technology risk monitoring and reporting mechanisms. Compliance with this requirement demonstrates [Organization Name]'s commitment to maintaining a resilient and effective cybersecurity posture as mandated by BNM.

### 1.2 Scope

This report covers the following for the period **[Reporting Period Start Date]** to **[Reporting Period End Date]** (Quarter [Q#], [Year]):

- All monitored infrastructure, systems, and networks within [Organization Name]'s production and non-production environments
- SOC operations conducted by [Internal SOC Team / Managed Security Service Provider (MSSP): [Provider Name]]
- Security event monitoring, triage, investigation, and incident response activities
- Use case performance, detection rule tuning, and threat intelligence integration
- SLA adherence and escalation effectiveness

**Out of Scope:**

- Physical security operations (unless converged with cyber SOC)
- Third-party vendor systems not integrated into the SIEM platform
- [Any other explicitly excluded systems or entities]

---

## 2. Executive Summary

*Provide a concise, non-technical summary of SOC performance during the reporting period. Highlight top-line metrics, notable incidents, improvement initiatives, and the overall risk posture. This section is intended for senior management and Board-level readers.*

### 2.1 Reporting Period Overview

| Parameter | Detail |
|---|---|
| **Reporting Period** | [Q#] [Year]: [Start Date] – [End Date] |
| **Report Prepared By** | [SOC Manager Name], SOC Manager |
| **Report Date** | [Date of Report] |
| **Previous Report Reference** | [Document ID of Previous Quarter Report] |

### 2.2 Performance Highlights

*Summarise the three to five most significant achievements, improvements, or risk developments during the quarter.*

- **Overall SOC Posture:** [Stable / Improved / Requires Attention] — [One sentence rationale]
- **Total Security Events Processed:** [#] events detected; [#] escalated to incidents
- **Critical/High Incidents:** [#] critical and [#] high-severity incidents managed during the period
- **Mean Time to Detect (MTTD):** [X hours/minutes] — [vs. SLA target of Y hours/minutes]
- **Mean Time to Respond (MTTR):** [X hours/minutes] — [vs. SLA target of Y hours/minutes]
- **SLA Compliance Rate:** [X%] — [Met / Not Met] against the [X%] contractual/policy target
- **Use Cases Active:** [#] active detection use cases; [#] added; [#] retired; [#] tuned this quarter
- **Notable Incidents:** [Brief 1–2 sentence description of the most significant incident, if applicable]
- **Key Improvement Actions:** [Summary of top improvement initiatives completed or initiated]

### 2.3 Risk Assessment Summary

*Provide the SOC Manager's overall assessment of the organisation's current threat and risk exposure based on the quarter's observations.*

| Risk Area | Current Status | Trend | Remarks |
|---|---|---|---|
| Insider Threat | [Low / Medium / High] | [↑ Increasing / → Stable / ↓ Decreasing] | [Remarks] |
| Perimeter / External Threats | [Low / Medium / High] | [↑ / → / ↓] | [Remarks] |
| Endpoint Security | [Low / Medium / High] | [↑ / → / ↓] | [Remarks] |
| Cloud Security | [Low / Medium / High] | [↑ / → / ↓] | [Remarks] |
| Third-Party / Supply Chain | [Low / Medium / High] | [↑ / → / ↓] | [Remarks] |
| Regulatory Compliance | [Low / Medium / High] | [↑ / → / ↓] | [Remarks] |

---

## 3. Scope and Methodology

*Describe the monitoring coverage, tools, data sources, and analytical methods used during this reporting period. This section demonstrates the rigour and comprehensiveness of the SOC's detection capability.*

### 3.1 Monitoring Coverage

| Coverage Domain | Systems / Assets Monitored | Log Sources Integrated | Coverage % |
|---|---|---|---|
| Network Infrastructure | [Firewalls, Routers, Switches] | [Syslog, NetFlow] | [X%] |
| Endpoint / Workstations | [Windows, macOS, Linux endpoints] | [EDR Agent, Windows Event Log] | [X%] |
| Servers (On-Premises) | [Application, Database, File Servers] | [OS Logs, Application Logs] | [X%] |
| Cloud Environments | [AWS / Azure / GCP Tenants] | [CloudTrail, Azure Monitor, GCP Logs] | [X%] |
| Applications (Critical) | [Core Banking, Internet Banking, SWIFT] | [WAF Logs, Application Logs, API Logs] | [X%] |
| Identity & Access | [Active Directory, IAM, PAM] | [AD Event Logs, PAM Session Logs] | [X%] |
| Email Security | [Mail Gateway] | [Email Security Gateway Logs] | [X%] |
| [Other Domain] | [Asset Description] | [Log Source] | [X%] |

### 3.2 Tooling and Technology Stack

| Tool Category | Product / Platform | Version | Purpose |
|---|---|---|---|
| SIEM | [e.g., Microsoft Sentinel / Splunk / IBM QRadar] | [Version] | Log aggregation, correlation, alerting |
| EDR | [e.g., CrowdStrike Falcon / Microsoft Defender] | [Version] | Endpoint detection and response |
| SOAR | [e.g., Palo Alto XSOAR / Splunk SOAR] | [Version] | Incident orchestration and automation |
| Threat Intelligence Platform | [e.g., MISP / Recorded Future] | [Version] | IOC enrichment and threat feeds |
| Vulnerability Scanner | [e.g., Tenable Nessus / Qualys] | [Version] | Asset vulnerability tracking |
| Ticketing / Case Management | [e.g., ServiceNow / Jira] | [Version] | Incident tracking and SLA management |
| Network Traffic Analysis | [e.g., Darktrace / Vectra] | [Version] | Anomaly detection and NTA |

### 3.3 Methodology

*Describe how security events are processed, from initial ingestion through triage, investigation, and closure. Reference any standards or frameworks used (e.g., NIST SP 800-61, MITRE ATT&CK).*

Security event processing follows [Organization Name]'s SOC Operations Playbook ([Document ID]) and is aligned with the **NIST SP 800-61 Computer Security Incident Handling Guide** and **MITRE ATT&CK Framework** for threat categorisation.

The event lifecycle comprises the following stages:

1. **Log Ingestion and Normalisation** — Raw events are collected from all integrated log sources and normalised within the SIEM for unified parsing.
2. **Correlation and Detection** — Correlation rules, use case logic, and behavioural analytics generate alerts when suspicious patterns are identified.
3. **Triage (Tier 1)** — SOC Analysts (Tier 1) review alerts, apply initial classification (True Positive / False Positive / Benign True Positive), and escalate confirmed threats.
4. **Investigation (Tier 2 / Tier 3)** — Senior analysts and threat hunters conduct deep-dive investigations, threat intelligence enrichment, and root cause analysis.
5. **Containment and Remediation** — Coordinated with the Incident Response team per the Incident Response Plan ([Document ID]).
6. **Closure and Lessons Learned** — Incidents are formally closed in the case management system; post-incident reviews are conducted for Critical/High severity events.

---

## 4. Key Findings and Observations

*Document the quantitative performance data and qualitative observations for the reporting period. This is the core analytical section of the report.*

### 4.1 Event and Alert Metrics

| Metric | Current Quarter | Previous Quarter | Quarter-on-Quarter Change | Target / Threshold |
|---|---|---|---|---|
| Total Raw Events Ingested | [#] | [#] | [+/- X%] | N/A |
| Total Alerts Generated | [#] | [#] | [+/- X%] | N/A |
| True Positive Alerts | [#] | [#] | [+/- X%] | N/A |
| False Positive Alerts | [#] | [#] | [+/- X%] | < [X%] of total |
| False Positive Rate | [X%] | [X%] | [+/- X%] | < [X%] |
| Alerts Escalated to Incidents | [#] | [#] | [+/- X%] | N/A |
| Incidents Closed Within SLA | [X%] | [X%] | [+/- X%] | ≥ [X%] |

### 4.2 Incident Metrics by Severity

| Severity | Incidents Opened | Incidents Closed | Open at Period End | Avg. MTTD | Avg. MTTR | SLA Target (MTTR) | SLA Met |
|---|---|---|---|---|---|---|---|
| Critical (P1) | [#] | [#] | [#] | [X mins] | [X hrs] | [X hrs] | [Yes/No] |
| High (P2) | [#] | [#] | [#] | [X mins] | [X hrs] | [X hrs] | [Yes/No] |
| Medium (P3) | [#] | [#] | [#] | [X hrs] | [X hrs] | [X hrs] | [Yes/No] |
| Low (P4) | [#] | [#] | [#] | [X hrs] | [X days] | [X days] | [Yes/No] |
| **Total** | **[#]** | **[#]** | **[#]** | — | — | — | — |

### 4.3 Incident Classification by MITRE ATT&CK Tactic

*Map confirmed incidents to MITRE ATT&CK tactics to provide a structured view of adversarial activity observed during the period.*

| MITRE ATT&CK Tactic | Incidents | % of Total | Notable Techniques Observed |
|---|---|---|---|
| Initial Access | [#] | [X%] | [T1566 Phishing, T1190 Exploit Public-Facing App] |
| Execution | [#] | [X%] | [T1059 Command Scripting Interpreter] |
| Persistence | [#] | [X%] | [T1078 Valid Accounts] |
| Privilege Escalation | [#] | [X%] | [T1068 Exploitation for Privilege Escalation] |
| Defence Evasion | [#] | [X%] | [T1562 Impair Defences] |
| Credential Access | [#] | [X%] | [T1110 Brute Force] |
| Discovery | [#] | [X%] | [T1046 Network Service Discovery] |
| Lateral Movement | [#] | [X%] | [T1021 Remote Services] |
| Collection | [#] | [X%] | [T1005 Data from Local System] |
| Exfiltration | [#] | [X%] | [T1041 Exfiltration Over C2 Channel] |
| Impact | [#] | [X%] | [T1486 Data Encrypted for Impact] |

### 4.4 Top Security Observations and Threats

*Describe the three to five most significant threats, attack campaigns, or security observations noted during the quarter, with supporting context.*

**Observation 1: [Title of Observation]**

- **Description:** [Detailed description of the observation, threat, or trend]
- **Affected Assets/Systems:** [Asset list or category]
- **Risk Level:** [Critical / High / Medium / Low]
- **Actions Taken:** [Containment, tuning, or remediation steps]
- **Recommendations:** [Recommended follow-up actions]

**Observation 2: [Title of Observation]**

- **Description:** [Detailed description]
- **Affected Assets/Systems:** [Asset list or category]
- **Risk Level:** [Critical / High / Medium / Low]
- **Actions Taken:** [Actions taken]
- **Recommendations:** [Recommendations]

**Observation 3: [Title of Observation]**

- **Description:** [Detailed description]
- **Affected Assets/Systems:** [Asset list or category]
- **Risk Level:** [Critical / High / Medium / Low]
- **Actions Taken:** [Actions taken]
- **Recommendations:** [Recommendations]

### 4.5 Regulatory and Mandatory Reporting

*Document any incidents that triggered or were assessed for mandatory regulatory reporting obligations under BNM or other applicable frameworks.*

| Incident Reference | Date | Severity | Regulatory Threshold Triggered | Reported To | Report Date | Status |
|---|---|---|---|---|---|---|
| [INC-YYYY-###] | [Date] | [Critical/High] | [BNM Incident Reporting / NACSA / PDPA] | [BNM / NACSA / PDPA Commissioner] | [Date] | [Submitted / Pending / Not Required] |
| [INC-YYYY-###] | [Date] | [Severity] | [Framework] | [Authority] | [Date] | [Status] |

---

## 5. Use Case Catalogue and Tuning Schedule

*Maintain an up-to-date catalogue of all active detection use cases, their current performance, and the schedule for review and tuning. This section demonstrates the maturity and continuous improvement of the SOC's detection engineering capability.*

### 5.1 Use Case Performance Summary

| Use Case ID | Use Case Name | MITRE Tactic | Log Source(s) | Alerts This Quarter | True Positives | False Positives | FP Rate | Last Tuned | Status |
|---|---|---|---|---|---|---|---|---|---|
| UC-001 | Brute Force Login Detection | Credential Access | AD Event Log, VPN | [#] | [#] | [#] | [X%] | [Date] | Active |
| UC-002 | Ransomware Behaviour Detection | Impact | EDR, File Server | [#] | [#] | [#] | [X%] | [Date] | Active |
| UC-003 | Data Exfiltration via Email | Exfiltration | DLP, Email Gateway | [#] | [#] | [#] | [X%] | [Date] | Active |
| UC-004 | Privilege Escalation — Admin Account | Privilege Escalation | AD, PAM | [#] | [#] | [#] | [X%] | [Date] | Active |
| UC-005 | Lateral Movement via Pass-the-Hash | Lateral Movement | EDR, AD | [#] | [#] | [#] | [X%] | [Date] | Under Review |
| UC-006 | Anomalous Cloud API Activity | Discovery | CloudTrail / Azure Monitor | [#] | [#] | [#] | [X%] | [Date] | Active |
| UC-007 | Malicious Macro / Phishing Document | Execution | Email Gateway, EDR | [#] | [#] | [#] | [X%] | [Date] | Active |
| UC-008 | Insider Data Staging | Collection | DLP, Endpoint | [#] | [#] | [#] | [X%] | [Date] | Active |
| [UC-###] | [Use Case Name] | [Tactic] | [Log Source] | [#] | [#] | [#] | [X%] | [Date] | [Status] |

### 5.2 Use Case Changes This Quarter

| Change Type | Use Case ID | Use Case Name | Rationale | Effective Date | Approved By |
|---|---|---|---|---|---|
| Added | [UC-###] | [Use Case Name] | [New threat vector / regulatory requirement / gap identified] | [Date] | [Approver] |
| Retired | [UC-###] | [Use Case Name] | [Obsolete / replaced by UC-### / no longer applicable] | [Date] | [Approver] |
| Tuned | [UC-###] | [Use Case Name] | [High FP rate — threshold adjusted / logic refined] | [Date] | [Approver] |
| Suspended | [UC-###] | [Use Case Name] | [Log source outage / pending re-evaluation] | [Date] | [Approver] |

### 5.3 Upcoming Tuning Schedule

*List use cases scheduled for review, tuning, or retirement in the next quarter.*

| Use Case ID | Use Case Name | Scheduled Action | Target Date | Assigned Analyst | Priority |
|---|---|---|---|---|---|
| [UC-###] | [Use Case Name] | [Tune / Retire / Promote to Production] | [Date] | [Analyst Name] | [High / Medium / Low] |
| [UC-###] | [Use Case Name] | [Scheduled Action] | [Date] | [Analyst Name] | [Priority] |

### 5.4 Detection Coverage Gap Analysis

*Identify MITRE ATT&CK tactics or techniques with insufficient detection coverage and document the remediation plan.*

| MITRE Tactic / Technique | Current Coverage | Gap Description | Remediation Plan | Target Quarter |
|---|---|---|---|---|
| [Tactic: Technique ID] | [None / Partial / Full] | [Description of the gap — missing log source, no rule, etc.] | [Proposed new use case / log onboarding / tool procurement] | [Q# YYYY] |
| [Tactic: Technique ID] | [None / Partial / Full] | [Gap description] | [Remediation plan] | [Target] |

---

## 6. Shift Handover Procedures

*Document the handover process between SOC shifts to ensure continuity of monitoring and incident management. This section demonstrates operational discipline and process maturity to auditors.*

### 6.1 Shift Structure

| Shift | Hours (Local Time) | Days | Primary Analyst(s) | Shift Lead |
|---|---|---|---|---|
| Morning Shift | [e.g., 06:00 – 14:00] | Monday – Friday | [Analyst Names] | [Shift Lead Name] |
| Afternoon Shift | [e.g., 14:00 – 22:00] | Monday – Friday | [Analyst Names] | [Shift Lead Name] |
| Night Shift | [e.g., 22:00 – 06:00] | Monday – Sunday | [Analyst Names] | [Shift Lead Name] |
| Weekend / Public Holiday | [Hours] | Saturday – Sunday / PH | [Analyst Names / On-Call] | [Shift Lead / On-Call Manager] |

### 6.2 Handover Checklist

*The outgoing shift lead is responsible for completing the following checklist before handing over to the incoming shift.*

**Outgoing Shift Responsibilities:**

- [ ] All open alerts reviewed and status updated in the SIEM/SOAR
- [ ] All active incidents updated with latest investigation notes in the ticketing system
- [ ] Pending escalations documented with full context and contact details
- [ ] Any SLA breaches or near-misses documented and notified to SOC Manager
- [ ] Current threat intelligence feeds checked and IOC blocklists verified as current
- [ ] System health checks completed — SIEM ingestion rates, EDR agent coverage, tool availability
- [ ] Shift Activity Log ([Appendix A reference]) completed and saved to [shared repository/location]
- [ ] Verbal or written briefing provided to incoming Shift Lead

**Incoming Shift Responsibilities:**

- [ ] Acknowledge receipt of handover briefing from outgoing Shift Lead
- [ ] Review all open incidents and alerts carried forward
- [ ] Confirm system health status — verify no degradation since last check
- [ ] Review any threat intelligence bulletins received during previous shift
- [ ] Confirm on-call escalation contacts are current and reachable
- [ ] Sign the Shift Handover Log ([Appendix A reference]) to confirm receipt

### 6.3 Shift Handover Performance This Quarter

*Summarise any issues, gaps, or improvements identified in the handover process during the reporting period.*

| Issue / Observation | Date Identified | Impact | Corrective Action | Status |
|---|---|---|---|---|
| [Handover gap — incident context not fully documented] | [Date] | [Delayed response by X minutes] | [Handover template updated to mandate field] | [Resolved / In Progress] |
| [Observation] | [Date] | [Impact] | [Action] | [Status] |

---

## 7. Escalation Matrix and SLA

*Define the escalation path for security incidents by severity and document SLA performance against agreed targets. This section supports BNM RMiT Clause 11.6 requirements for structured incident notification and response.*

### 7.1 Incident Severity Classification

| Severity Level | Definition | Examples |
|---|---|---|
| **Critical (P1)** | Active threat causing or imminently likely to cause material business disruption, data breach, or reputational harm | Active ransomware spread, confirmed data exfiltration, core banking system compromise |
| **High (P2)** | Significant threat with potential for escalation; requires immediate investigation | Successful phishing with credential harvest, privilege escalation on critical system, APT indicator confirmed |
| **Medium (P3)** | Moderate threat; unlikely to cause immediate material impact but requires prompt attention | Malware detected and quarantined, suspicious insider activity, reconnaissance detected |
| **Low (P4)** | Informational or low-impact event requiring investigation but no immediate action | Policy violation, failed login attempts below threshold, low-confidence IOC match |

### 7.2 Escalation Matrix

| Severity | Initial Triage By | Escalate To | Escalation Timeframe | Notification Required | Regulatory Notification |
|---|---|---|---|---|---|
| **Critical (P1)** | SOC Analyst (Tier 1) | SOC Manager → CISO → CEO / Board | Within **15 minutes** of detection | SOC Manager, CISO, CTO, Business Line Head, Legal | BNM within **[X hours]** per RMiT; NACSA if CNI; PDPA Commissioner if personal data involved |
| **High (P2)** | SOC Analyst (Tier 1) | SOC Lead (Tier 2) → SOC Manager | Within **30 minutes** of detection | SOC Manager, CISO, affected system owner | Assess for BNM reporting threshold |
| **Medium (P3)** | SOC Analyst (Tier 1) | SOC Lead (Tier 2) | Within **2 hours** of detection | Affected system owner | Not typically required; document for trend reporting |
| **Low (P4)** | SOC Analyst (Tier 1) | Tier 1 handles; escalate if status changes | Within **8 hours** | Analyst log only | Not required |

### 7.3 Escalation Contact Directory

| Role | Name | Primary Contact | Secondary Contact | Availability |
|---|---|---|---|---|
| SOC Manager | [Name] | [Phone / Email] | [Alternate] | 24/7 On-Call |
| CISO | [Name] | [Phone / Email] | [Alternate] | 24/7 On-Call |
| CTO / Head of IT | [Name] | [Phone / Email] | [Alternate] | Business Hours / On-Call for P1 |
| Legal & Compliance | [Name] | [Phone / Email] | [Alternate] | Business Hours / On-Call for P1 |
| Incident Response Lead | [Name] | [Phone / Email] | [Alternate] | 24/7 On-Call |
| BNM Supervisory Contact | [Name / Unit] | [Contact Details per BNM directive] | — | Per BNM guidelines |
| NACSA Hotline | NACSA | [NACSA Contact] | — | 24/7 |
| PDPA Commissioner | PDPC | [PDPC Contact] | — | Business Hours |
| [MSSP Escalation — if applicable] | [Provider Name] | [NOC Contact] | [Account Manager] | 24/7 |

### 7.4 SLA Targets and Performance

| SLA Metric | Critical (P1) | High (P2) | Medium (P3) | Low (P4) |
|---|---|---|---|---|
| **Time to Acknowledge** | 5 minutes | 15 minutes | 1 hour | 4 hours |
| **Time to Triage** | 15 minutes | 30 minutes | 2 hours | 8 hours |
| **Time to Escalate (if required)** | 15 minutes | 30 minutes | 2 hours | N/A |
| **Mean Time to Respond (MTTR)** | 1 hour | 4 hours | 24 hours | 72 hours |
| **Time to Close** | 24 hours | 72 hours | 7 days | 30 days |

#### 7.4.1 SLA Performance This Quarter

| SLA Metric | Severity | Target | Achieved This Quarter | Met? | Notes |
|---|---|---|---|---|---|
| Time to Acknowledge | P1 | 5 min | [X min avg] | [Yes/No] | [Notes] |
| Time to Acknowledge | P2 | 15 min | [X min avg] | [Yes/No] | [Notes] |
| MTTR | P1 | 1 hour | [X hrs avg] | [Yes/No] | [Notes] |
| MTTR | P2 | 4 hours | [X hrs avg] | [Yes/No] | [Notes] |
| MTTR | P3 | 24 hours | [X hrs avg] | [Yes/No] | [Notes] |
| Overall SLA Compliance Rate | All | ≥ [X%] | [X%] | [Yes/No] | [Notes] |

#### 7.4.2 SLA Breach Analysis

*Document all SLA breaches this quarter and the corrective actions taken.*

| Incident Reference | Severity | SLA Metric Breached | Actual Time | SLA Target | Root Cause | Corrective Action | Status |
|---|---|---|---|---|---|---|---|
| [INC-YYYY-###] | [P1/P2/P3] | [MTTR / Acknowledge] | [X hrs] | [Y hrs] | [Root cause description] | [Action taken] | [Resolved / In Progress] |
| [INC-YYYY-###] | [Severity] | [Metric] | [Actual] | [Target] | [Root cause] | [Action] | [Status] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for the preparation, review, approval, and maintenance of this SOC Performance Report and the associated operational activities.*

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | SOC Analyst (Tier 1/2) | SOC Lead / Tier 3 | SOC Manager | CISO | CTO / Head of IT | Compliance Officer | Board / ARCC |
|---|---|---|---|---|---|---|---|
| Daily monitoring and alert triage | R | C | I | I | — | — | — |
| Incident investigation and response | R | R | A | I | I | I | — |
| Use case development and tuning | C | R | A | C | — | — | — |
| Shift handover execution | R | A | I | — | — | — | — |
| Escalation (P1/P2 incidents) | R | R | A | I | I | I | I (P1 only) |
| SOC Performance Report preparation | C | R | A | C | — | C | — |
| SOC Performance Report review | — | C | R | A | C | C | — |
| SOC Performance Report approval | — | — | C | R | C | C | — |
| Regulatory reporting (BNM / NACSA / PDPA) | — | C | R | A | C | R | I |
| SLA monitoring and reporting | C | R | A | I | — | — | — |
| Threat intelligence integration | C | R | A | C | — | — | — |
| Post-incident review facilitation | C | R | A | C | C | C | — |
| Board / ARCC reporting | — | — | C | R | C | C | A |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Role | Changes / Remarks |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | SOC Manager | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Role] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Role] | [Major revision description] |

### 9.2 Document Review Schedule

This document is classified as **Quarterly**. The next scheduled review date is **[Next Review Date]**.

Should a material change occur in [Organization Name]'s threat landscape, SOC tooling, organisational structure, or applicable regulatory requirements, an out-of-cycle review must be initiated by the SOC Manager and approved by the CISO.

### 9.3 Approval Sign-Off

By signing below, the approvers confirm that they have reviewed the contents of this SOC Performance Report for the period **[Reporting Period]** and that it accurately reflects the performance and observations of [Organization Name]'s Security Operations Centre.

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Manager | [Name] | ___________________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | ___________________________ | [Date] |
| Chief Technology Officer / Head of IT | [Name] | ___________________________ | [Date] |
| Head of Compliance / Chief Risk Officer | [Name] | ___________________________ | [Date] |

---

## 10. References

The following regulatory frameworks, standards, and internal documents are referenced by or applicable to this SOC Performance Report:

### 10.1 Regulatory References

| Reference | Document / Clause | Relevance |
|---|---|---|
| BNM RMiT | **Clause 11.6** — Technology Risk Monitoring and Reporting | Mandates regular reporting of SOC performance metrics and technology risk monitoring effectiveness |
| BNM RMiT | Clause 11.1 – 11.5 — Incident Management and Response | Supporting context for incident categorisation, escalation, and regulatory notification obligations |
| BNM RMiT | Clause 10 — Cyber Risk Management | SOC monitoring as a key control within the cyber risk management framework |
| BNM | Cybersecurity Operations Circular [Reference if applicable] | Additional BNM guidance on SOC operations and reporting |
| Personal Data Protection Act 2010 (PDPA) | Section 9 — Security of Personal Data | Obligation to report personal data breaches; SOC is first line of detection |
| NACSA | Critical National Information Infrastructure (CNII) Guidelines | SOC reporting requirements for organisations designated as CNII |
| ISO/IEC 27001:2022 | Annex A Control 8.16 — Monitoring Activities | International standard alignment for monitoring and detection |
| NIST SP 800-61 Rev. 2 | Computer Security Incident Handling Guide | Methodology framework for incident classification and response |

### 10.2 Internal References

| Document ID | Document Title | Relevance |
|---|---|---|
| [DOC-ID] | SOC Operations Manual | Parent policy governing SOC operations |
| [DOC-ID] | Incident Response Plan | Procedures triggered upon SOC escalation |
| [DOC-ID] | Information Security Policy | Overarching security governance framework |
| [DOC-ID] | Business Continuity Plan | Invoked for Critical (P1) incidents with operational impact |
| [DOC-ID] | Threat Intelligence Policy | Governs TI feed integration and IOC handling |
| [DOC-ID] | Technology Risk Management Framework | Provides risk classification and appetite thresholds |
| [DOC-ID] | SIEM Use Case Development Standard | Governs use case lifecycle and tuning requirements |
| [DOC-ID] | Data Classification Policy | Applied when assessing data exposure in incidents |

---

## 11. Appendices

### Appendix A — Shift Handover Log Template

*A standardised log to be completed at every shift transition. Logs must be retained for a minimum of [12 months / per Records Retention Policy [Document ID]].*

| Field | Detail |
|---|---|
| **Shift Date** | [DD/MM/YYYY] |
| **Outgoing Shift** | [Morning / Afternoon / Night] |
| **Incoming Shift** | [Morning / Afternoon / Night] |
| **Outgoing Shift Lead** | [Name] |
| **Incoming Shift Lead** | [Name] |
| **Handover Time** | [HH:MM] |
| **Open Incidents (Carried Forward)** | [List: INC-# / Description / Status] |
| **Pending Escalations** | [List or "None"] |
| **SLA Alerts / Near-Misses** | [Detail or "None"] |
| **System Health Status** | [All systems normal / Issues: describe] |
| **Threat Intelligence Highlights** | [Summary or "No new bulletins"] |
| **Actions Required by Incoming Shift** | [Priority action items] |
| **Outgoing Shift Lead Sign-Off** | ___________________________ |
| **Incoming Shift Lead Acknowledgement** | ___________________________ |

---

### Appendix B — Incident Summary Register (Quarter [Q#] [Year])

*A complete listing of all incidents opened during the reporting period. This register supports audit and regulatory review.*

| Incident ID | Date Opened | Date Closed | Severity | Category | MITRE Tactic | Affected System(s) | MTTD | MTTR | SLA Met | Regulatory Reported | Outcome |
|---|---|---|---|---|---|---|---|---|---|---|---|
| INC-[YYYY]-001 | [Date] | [Date] | [P1-P4] | [Category] | [Tactic] | [System] | [X min] | [X hrs] | [Y/N] | [Y/N / N/A] | [Resolved / False Positive] |
| INC-[YYYY]-002 | [Date] | [Date] | [P1-P4] | [Category] | [Tactic] | [System] | [X min] | [X hrs] | [Y/N] | [Y/N / N/A] | [Outcome] |

---

### Appendix C — Threat Intelligence Summary

*A summary of threat intelligence feeds, bulletins, and advisories actioned during the reporting period.*

| Source | Date Received | Threat / IOC Type | Action Taken | Use Case Updated | Analyst |
|---|---|---|---|---|---|
| [MyCERT / BNM TI Feed / NACSA / Commercial Feed] | [Date] | [Malware Hash / Domain / IP / TTPs] | [Blocked / Monitored / Added to watchlist] | [UC-###] | [Analyst Name] |
| [Source] | [Date] | [Type] | [Action] | [UC-### / None] | [Analyst] |

---

### Appendix D — SOC Staffing and Training Record

*Document SOC headcount, certifications, and training completed during the reporting period to demonstrate capability maturity.*

| Analyst Name | Role / Tier | Certifications Held | Training Completed This Quarter | Date Completed |
|---|---|---|---|---|
| [Name] | SOC Analyst (Tier 1) | [SC-200, CompTIA CySA+] | [Phishing Analysis Workshop] | [Date] |
| [Name] | SOC Lead (Tier 2) | [GCIH, CEH] | [MITRE ATT&CK Practitioner] | [Date] |
| [Name] | Threat Hunter (Tier 3) | [GREM, GCFA] | [Threat Hunting with OSINT] | [Date] |
| [Name] | SOC Manager | [CISSP, CISM] | [BNM RMiT Regulatory Update Briefing] | [Date] |

**Vacancies and Headcount Status:**

| Approved Headcount | Current Headcount | Vacancies | Recruitment Status |
|---|---|---|---|
| [#] | [#] | [#] | [Active recruitment / No vacancies / On hold] |

---

### Appendix E — Improvement Action Tracker

*Track all corrective actions, improvement initiatives, and recommendations arising from this and prior quarterly reports.*

| Action ID | Source | Description | Priority | Owner | Target Date | Status | Completion Date |
|---|---|---|---|---|---|---|---|
| ACT-[YYYY]-001 | [Prior Quarter Report / Audit Finding / Post-Incident Review] | [Action description] | [High / Medium / Low] | [Owner Name] | [Date] | [Open / In Progress / Completed / Overdue] | [Date / N/A] |
| ACT-[YYYY]-002 | [Source] | [Description] | [Priority] | [Owner] | [Date] | [Status] | [Date] |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] — Security Operations Centre**
*This document is subject to the [Organization Name] Information Classification and Handling Policy ([Document ID]). Unauthorised disclosure is prohibited.*