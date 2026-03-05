# Detection Tool Configuration

---

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

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Incident Classification Matrix](#5-incident-classification-matrix)
6. [Escalation Timelines](#6-escalation-timelines)
7. [Communication Templates](#7-communication-templates)
8. [Post-Incident Review Process](#8-post-incident-review-process)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

This document provides configuration evidence for Security Information and Event Management (SIEM) systems and incident detection mechanisms deployed by **[Organization Name]**. It serves as a formal compliance artifact demonstrating that detection tooling is appropriately configured, operationally maintained, and aligned with regulatory expectations under **Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.4**.

This document fulfills the evidentiary requirements for continuous security monitoring and supports [Organization Name]'s obligations to detect, classify, and respond to technology-related incidents in a timely and structured manner. It is subject to continuous operational monitoring and formal quarterly review cycles.

### 1.1 Scope

*Describe the systems, environments, and organizational units covered by this detection configuration. Specify any out-of-scope components and the rationale for their exclusion.*

This document applies to:

- **In-Scope Systems:** [List covered systems, e.g., core banking platforms, internet-facing applications, network infrastructure, endpoint estate, cloud workloads]
- **In-Scope Environments:** [e.g., Production, Disaster Recovery, Pre-Production]
- **Organizational Units:** [e.g., Technology Division, Security Operations Centre, IT Infrastructure]
- **Out-of-Scope:** [List any excluded systems or environments with justification]

### 1.2 Regulatory Basis

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | 11.4 | Establishment and maintenance of security event monitoring and incident detection capabilities |
| BNM RMiT | 11.4(a) | Configuration of detection tools to identify anomalous or malicious activity |
| BNM RMiT | 11.4(b) | Definition of alert thresholds and escalation procedures |
| [Other applicable regulation, e.g., PDPA 2010] | [Section] | [Brief description] |
| [NACSA CSSP / other] | [Section] | [Brief description] |

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the detection capability assessment, including the tools assessed, the criteria used to evaluate their configuration adequacy, and the assessment period.*

### 2.1 Assessment Overview

| Field | Details |
|---|---|
| **Assessment Period** | [Start Date] to [End Date] |
| **Assessment Type** | [e.g., Configuration Review / Technical Audit / Continuous Monitoring Report] |
| **Conducted By** | [Name / Team, e.g., SOC Manager, Internal Audit, Third-Party Assessor] |
| **Tools Assessed** | [List SIEM and detection platforms] |

### 2.2 Detection Tools Inventory

*List all SIEM, IDS/IPS, EDR, NDR, and supplementary detection tools within scope. Include version and deployment status.*

| Tool Name | Type | Version | Vendor | Deployment Mode | Status |
|---|---|---|---|---|---|
| [Tool Name, e.g., Wazuh SIEM] | SIEM | [Version] | [Vendor] | [On-Premise / Cloud / Hybrid] | [Active / Under Review] |
| [Tool Name, e.g., Suricata] | IDS/IPS | [Version] | [Vendor] | [On-Premise] | [Active] |
| [Tool Name, e.g., CrowdStrike Falcon] | EDR | [Version] | [Vendor] | [SaaS] | [Active] |
| [Tool Name] | NDR | [Version] | [Vendor] | [Deployment Mode] | [Status] |
| [Tool Name] | Threat Intelligence Platform | [Version] | [Vendor] | [Deployment Mode] | [Status] |

### 2.3 Assessment Criteria

*Define the benchmarks and standards against which detection tool configurations are evaluated.*

Detection configurations are assessed against the following criteria:

- **Coverage:** All critical assets and data flows are monitored by at least one detection control.
- **Alert Fidelity:** Alert rules are tuned to minimize false positives while maintaining sensitivity to true threats.
- **Data Retention:** Log retention periods meet or exceed regulatory minimums (minimum [X] months online; [Y] years archived).
- **Integration:** Detection tools are integrated with ticketing, escalation, and response workflows.
- **Rule Currency:** Detection rules and threat signatures are updated on a defined schedule.
- **Access Control:** Administrative access to detection platforms is restricted and audited.
- **Resilience:** Detection infrastructure has defined availability targets and failover procedures.

| Criterion | Standard / Benchmark | Minimum Threshold |
|---|---|---|
| Log Coverage | [e.g., CIS Controls v8, Control 8] | ≥ 95% of critical assets |
| Alert Rule Review | [e.g., Internal SOP-SOC-01] | Quarterly |
| Log Retention (Online) | BNM RMiT / Internal Policy | [X] months |
| Log Retention (Archive) | BNM RMiT / Internal Policy | [Y] years |
| SIEM Availability SLA | Internal SLA | ≥ 99.5% uptime |
| Mean Time to Detect (MTTD) | Internal KPI | ≤ [X] hours for Critical events |

---

## 3. Methodology

*Describe the approach and techniques used to configure, validate, and assess detection tools. Include any frameworks or standards referenced during configuration design.*

### 3.1 Configuration Design Methodology

The detection configuration for [Organization Name] was developed using the following methodology:

1. **Asset Identification:** Critical assets were identified through the Technology Asset Register ([Document Reference]) and risk-tiered according to the [Organization Name] Risk Classification Framework.
2. **Threat Modelling:** Relevant threat scenarios were identified by referencing [e.g., MITRE ATT&CK for Financial Services, BNM Threat Intelligence feeds, NACSA advisories].
3. **Use Case Development:** Detection use cases were mapped to identified threats and translated into SIEM correlation rules, alert thresholds, and monitoring dashboards.
4. **Tuning and Validation:** Detection rules were tuned over [X]-week period using historical log data to establish baseline thresholds and reduce false positive rates.
5. **Integration Testing:** End-to-end alert-to-ticket workflow was tested to confirm escalation paths function as designed.
6. **Documentation and Sign-Off:** Configuration settings were documented and approved by the SOC Manager and [relevant approver].

### 3.2 Frameworks and Standards Referenced

| Framework / Standard | Version | Purpose |
|---|---|---|
| MITRE ATT&CK | [Version] | Threat scenario mapping and use case development |
| NIST SP 800-137 | [Version] | Continuous monitoring program design |
| CIS Controls | v8 | Security monitoring benchmarks |
| BNM RMiT | 2023 | Regulatory compliance requirements |
| [NACSA CSSP] | [Version] | National cybersecurity standards |
| [Internal SOC Runbook] | [Version] | Operational procedures and escalation paths |

### 3.3 Data Sources and Log Collection

*Enumerate the log sources feeding into the SIEM and detection stack. Indicate coverage status for each source category.*

| Log Source Category | Examples | Collection Method | Coverage Status |
|---|---|---|---|
| Network Infrastructure | Firewalls, Routers, Switches | Syslog / SNMP | [Full / Partial / Pending] |
| Endpoints | Servers, Workstations | EDR Agent / WEC | [Full / Partial / Pending] |
| Identity and Access | Active Directory, IAM | Windows Event Log / API | [Full / Partial / Pending] |
| Application Layer | Core Banking, Web Apps | App Log Forwarding / API | [Full / Partial / Pending] |
| Cloud Infrastructure | [Cloud Provider] | Cloud-native connector | [Full / Partial / Pending] |
| Email Gateway | [Email Platform] | API / Log Forwarding | [Full / Partial / Pending] |
| Database Activity | [DBMS Name] | DAM Agent / Native Audit | [Full / Partial / Pending] |
| Physical / OT | [If applicable] | [Method] | [Status] |

---

## 4. Findings and Ratings

*Summarize the results of the detection tool configuration assessment. Assign a rating to each area reviewed and document identified gaps with remediation actions.*

### 4.1 Overall Configuration Rating

| Assessment Area | Rating | Justification |
|---|---|---|
| Log Coverage | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief justification] |
| Alert Rule Quality | [Rating] | [Brief justification] |
| Retention Compliance | [Rating] | [Brief justification] |
| Integration and Workflow | [Rating] | [Brief justification] |
| Access Controls | [Rating] | [Brief justification] |
| Threat Detection Capability | [Rating] | [Brief justification] |
| **Overall Rating** | **[Rating]** | **[Summary statement]** |

**Rating Scale:**
- **Satisfactory** — Configuration meets or exceeds all defined criteria with no material gaps.
- **Needs Improvement** — Configuration partially meets criteria; identified gaps are being actively remediated.
- **Unsatisfactory** — Configuration does not meet criteria; immediate remediation required.

### 4.2 Findings Register

*Document each finding identified during the assessment. Assign a severity, owner, and target remediation date.*

| Finding ID | Description | Severity | Affected Tool / Area | Recommended Action | Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| FIND-001 | [e.g., Log collection gap identified for DMZ segment] | [High / Medium / Low] | [SIEM / Network] | [e.g., Deploy syslog forwarding agent to DMZ switches] | [Name / Role] | [Date] | [Open / In Progress / Closed] |
| FIND-002 | [Description] | [Severity] | [Area] | [Recommended Action] | [Owner] | [Date] | [Status] |
| FIND-003 | [Description] | [Severity] | [Area] | [Recommended Action] | [Owner] | [Date] | [Status] |

### 4.3 Key Performance Indicators

*Record current values for detection effectiveness KPIs. Compare against defined thresholds.*

| KPI | Target | Current Value | Trend | Status |
|---|---|---|---|---|
| Mean Time to Detect (MTTD) – Critical | ≤ [X] hours | [Value] | [↑ / ↓ / →] | [On Target / At Risk / Breached] |
| Mean Time to Detect (MTTD) – High | ≤ [X] hours | [Value] | [Trend] | [Status] |
| Alert False Positive Rate | ≤ [X]% | [Value]% | [Trend] | [Status] |
| Log Source Availability | ≥ 99.5% | [Value]% | [Trend] | [Status] |
| SIEM Rule Coverage (MITRE ATT&CK) | ≥ [X]% | [Value]% | [Trend] | [Status] |
| Incidents Detected via SIEM | [Baseline] | [Value] | [Trend] | [Status] |

---

## 5. Incident Classification Matrix

*Define the classification tiers used to categorize security incidents detected by SIEM and other detection tools. Classification drives escalation urgency and response resource allocation.*

### 5.1 Severity Classification

| Severity Level | Label | Definition | Examples |
|---|---|---|---|
| **P1** | Critical | Confirmed breach or active threat with material impact to operations, customer data, or financial systems | Ransomware activation, data exfiltration confirmed, core banking system compromise |
| **P2** | High | Significant threat with potential for major impact if not contained; active investigation required | Lateral movement detected, privileged account takeover, DDoS in progress |
| **P3** | Medium | Suspicious activity requiring investigation; limited immediate operational impact | Repeated authentication failures, unusual data access patterns, malware detection on endpoint |
| **P4** | Low | Anomalous activity that may warrant monitoring; no immediate threat confirmed | Policy violations, minor configuration drift, informational alerts |
| **P5** | Informational | Events logged for audit, baseline, or compliance purposes | Successful logins, scheduled task execution, routine system events |

### 5.2 Incident Category Taxonomy

| Category Code | Category Name | Description | Primary Detection Source |
|---|---|---|---|
| CAT-01 | Unauthorized Access | Attempted or successful access without authorization | SIEM, IAM logs, EDR |
| CAT-02 | Malware | Malicious code execution or presence | EDR, Email Gateway, SIEM |
| CAT-03 | Data Loss / Exfiltration | Unauthorized transfer or exposure of sensitive data | DLP, SIEM, CASB |
| CAT-04 | Denial of Service | Disruption of availability for systems or services | NDR, SIEM, Network monitoring |
| CAT-05 | Insider Threat | Malicious or negligent action by internal personnel | UEBA, SIEM, DLP |
| CAT-06 | Phishing / Social Engineering | Deceptive attempts to obtain credentials or information | Email Gateway, Proxy, SIEM |
| CAT-07 | Supply Chain / Third-Party | Compromise via vendor or third-party system | SIEM, Vendor monitoring |
| CAT-08 | Compliance / Policy Violation | Breach of internal policy or regulatory requirement | SIEM, IAM, DLP |
| CAT-09 | Infrastructure Anomaly | Unexpected system behavior indicative of compromise | SIEM, NDR, Infrastructure monitoring |

---

## 6. Escalation Timelines

*Define mandatory escalation timelines by severity level. Timelines represent maximum allowable durations from detection to each escalation stage. All times are in business hours unless marked (24/7).*

### 6.1 Escalation Timeline by Severity

| Severity | Initial Triage | SOC Manager Notification | CISO / Senior Management Notification | BNM Notification (if applicable) | Customer Notification (if applicable) |
|---|---|---|---|---|---|
| **P1 – Critical** | 15 minutes (24/7) | 30 minutes (24/7) | 1 hour (24/7) | Within 24 hours of confirmation | As directed by CISO / Legal |
| **P2 – High** | 30 minutes (24/7) | 1 hour (24/7) | 4 hours | As directed | As directed |
| **P3 – Medium** | 2 hours | 4 hours | As directed | As directed | As directed |
| **P4 – Low** | 1 business day | As directed | — | — | — |
| **P5 – Informational** | Handled in standard queue | — | — | — | — |

> **Note:** BNM notification obligations are governed by the RMiT Policy Document and the applicable Incident Reporting Guidelines. [Organization Name] must notify BNM of significant technology incidents within **[X hours]** of detection. Reference: [Applicable BNM Guideline / Circular].

### 6.2 Escalation Path

```
[L1 SOC Analyst]
       │
       ▼ (if escalation threshold met)
[L2 SOC Analyst / Incident Responder]
       │
       ▼ (P2 and above, or at L2 discretion)
[SOC Manager]
       │
       ▼ (P1 / P2 confirmed, or regulatory trigger)
[CISO / Head of Technology Risk]
       │
       ▼ (P1 confirmed, regulatory notification required)
[Executive Management / Board Risk Committee]
       │
       ▼ (as applicable)
[BNM / NACSA / Law Enforcement / Affected Parties]
```

### 6.3 On-Call and After-Hours Escalation Contacts

*Maintain up-to-date after-hours contact details in the SOC Contact Register ([Document Reference]). Do not record personal contact details in this document.*

| Role | Contact Reference | Coverage |
|---|---|---|
| L1 SOC Analyst (On-Call) | SOC Contact Register | 24/7 |
| SOC Manager | SOC Contact Register | 24/7 for P1/P2 |
| CISO | Executive Contact Register | 24/7 for P1 |
| IT / Infrastructure On-Call | SOC Contact Register | 24/7 |
| Legal / Compliance | Executive Contact Register | Business hours / P1 on-call |

---

## 7. Communication Templates

*Standardized templates ensure timely, accurate, and consistent communication during incident response. All communications must be reviewed by the SOC Manager (or designate) prior to distribution, except where time-critical escalations require immediate notification.*

### 7.1 Internal Incident Notification (P1 / P2)

**Subject:** `[INCIDENT ALERT – [SEVERITY]] [Incident ID] – [Brief Description] – [Date/Time]`

> **To:** [Distribution List – Internal Incident Response Team]
> **From:** SOC Manager / Incident Commander
>
> **Incident ID:** [INC-YYYYMMDD-NNN]
> **Severity:** [P1 – Critical / P2 – High]
> **Classification:** [Incident Category]
> **Detected:** [Date and Time (UTC+8)]
> **Reported By:** [SOC Analyst Name / Automated Alert]
>
> **Summary:**
> [2–3 sentence factual description of the detected event. What was detected, on which system(s), and what impact has been confirmed or is suspected.]
>
> **Current Status:** [Investigating / Contained / Eradicating / Monitoring]
>
> **Immediate Actions Taken:**
> - [Action 1]
> - [Action 2]
>
> **Next Steps:**
> - [Action with owner and ETA]
>
> **Next Update By:** [Date/Time]

---

### 7.2 BNM Regulatory Notification

*This template is to be used when notifying Bank Negara Malaysia of a significant technology incident in accordance with RMiT requirements. Content must be reviewed and approved by the CISO and Legal/Compliance prior to submission.*

**Subject:** `Technology Incident Notification – [Organization Name] – [Incident ID] – [Date]`

> **To:** [BNM Notification Channel / Designated Contact]
> **From:** [CISO / Authorized Signatory]
>
> **Notification Date:** [Date]
> **Incident Reference:** [INC-YYYYMMDD-NNN]
>
> **1. Institution Details**
> Institution Name: [Organization Name]
> BNM License / Reference Number: [License Number]
> Primary Contact: [Name, Title, Contact Number]
>
> **2. Incident Description**
> Date and Time of Detection: [Date/Time (UTC+8)]
> Incident Category: [Category per BNM taxonomy]
> Affected Systems / Services: [Description]
> Estimated Customer Impact: [Confirmed / Suspected / None]
>
> **3. Summary of Event**
> [Factual narrative of the incident — what occurred, how it was detected, and what is known at time of notification.]
>
> **4. Actions Taken**
> [List of containment, eradication, and mitigation actions taken to date.]
>
> **5. Ongoing Investigation**
> [Description of investigation activities in progress and expected timeline for further update.]
>
> **6. Preliminary Assessment**
> Root Cause (if known): [Description or "Under Investigation"]
> Customer Data Involved: [Yes / No / Under Investigation]
>
> **7. Next Update Expected:** [Date/Time]

---

### 7.3 Customer Communication (If Required)

*Customer communications must be approved by the CISO, Head of Communications, and Legal prior to distribution. This template provides a structural guide only; final language must be tailored to the specific incident and approved audiences.*

> **Subject:** Important Security Notice from [Organization Name]
>
> Dear [Customer / Valued Customer],
>
> [Organization Name] is writing to inform you of [brief, factual description of the incident and its relevance to the customer].
>
> **What Happened:**
> [Clear, plain-language description of the event.]
>
> **What Information Was Involved:**
> [If applicable — describe the type of information involved. If no customer data was involved, state this clearly.]
>
> **What We Are Doing:**
> [Describe actions taken to contain the incident and protect customer interests.]
>
> **What You Should Do:**
> [Provide any specific actions customers should take, e.g., reset passwords, monitor accounts.]
>
> **Contact Us:**
> If you have any questions, please contact [Contact Center Name] at [Contact Details].
>
> Yours sincerely,
> [Authorized Signatory Name]
> [Title]
> [Organization Name]

---

## 8. Post-Incident Review Process

*The post-incident review (PIR) ensures that lessons learned from security incidents are captured, acted upon, and fed back into continuous improvement of detection controls and response procedures.*

### 8.1 PIR Triggers and Timeline

| Severity | PIR Required | PIR Completion Deadline |
|---|---|---|
| P1 – Critical | Mandatory | Within [5] business days of incident closure |
| P2 – High | Mandatory | Within [10] business days of incident closure |
| P3 – Medium | Recommended | Within [20] business days (at SOC Manager discretion) |
| P4 / P5 | Optional | At SOC Manager discretion |

### 8.2 PIR Process Steps

1. **Incident Timeline Reconstruction** — Compile a chronological timeline of events from initial detection through resolution, using SIEM logs, ticket history, and analyst notes.
2. **Root Cause Analysis** — Determine the technical and process root cause(s) of the incident. Use structured analysis methods (e.g., 5-Whys, fishbone diagram) for P1/P2 incidents.
3. **Detection Effectiveness Review** — Evaluate whether existing detection rules and thresholds identified the incident promptly. Identify any detection gaps or delayed alerts.
4. **Response Effectiveness Review** — Assess whether escalation timelines, communication, and containment actions were executed within defined SLAs.
5. **Lessons Learned Identification** — Document actionable findings related to people, process, and technology.
6. **Remediation Action Planning** — Assign owners and target dates to all identified remediation actions.
7. **Detection Rule Update** — Update SIEM correlation rules, alert thresholds, or monitoring dashboards as required based on PIR findings.
8. **PIR Report Finalization and Distribution** — Complete the PIR report using the standard template ([Document Reference: SOC-PIR-TEMPLATE]), obtain SOC Manager sign-off, and distribute to relevant stakeholders.
9. **Closure and Tracking** — Record PIR completion and remediation actions in the SOC Incident Register ([Document Reference]).

### 8.3 PIR Output Register

*Track all PIR outputs and the status of resulting remediation actions.*

| Incident ID | Severity | PIR Date | Root Cause Summary | Detection Gap Identified | Remediation Actions | Action Owner | Completion Date | Status |
|---|---|---|---|---|---|---|---|---|
| [INC-YYYYMMDD-NNN] | [P1/P2] | [Date] | [Brief description] | [Yes / No] | [Description] | [Owner] | [Date] | [Open / Closed] |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for detection tool configuration, operation, and review activities.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | SOC Analyst (L1/L2) | SOC Manager | CISO | IT Infrastructure | IT Risk & Compliance | Internal Audit | Vendor / MSSP |
|---|---|---|---|---|---|---|---|
| Day-to-day SIEM monitoring | R | A | I | I | I | — | C |
| Alert triage and initial investigation | R | A | I | C | I | — | C |
| Incident classification and escalation | R | A | I | C | I | — | I |
| Detection rule creation and tuning | R | A | C | C | C | — | C |
| Detection tool configuration management | C | A | C | R | C | — | C |
| Log source onboarding | C | A | C | R | C | — | C |
| Quarterly configuration review | R | A | C | C | R | I | C |
| BNM incident notification | I | R | A | I | C | I | — |
| Post-incident review facilitation | R | A | C | C | C | I | C |
| PIR remediation tracking | R | A | I | C | C | I | — |
| KPI reporting to management | R | A | I | I | C | I | — |
| Annual detection capability assessment | C | R | A | C | R | C | C |
| Vendor/MSSP performance management | I | R | A | C | C | I | R |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 10.2 Review Schedule

| Review Type | Frequency | Responsible Party |
|---|---|---|
| Operational monitoring review | Continuous (real-time) | SOC Analyst / SOC Manager |
| Detection rule and configuration review | Quarterly | SOC Manager |
| Full document review and approval | Quarterly | SOC Manager, CISO |
| Post-incident triggered review | As required | SOC Manager |

### 10.3 Approval Sign-Off

*This document requires the following approvals prior to publication and upon each revision.*

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Manager | [Name] | _________________ | [Date] |
| CISO / Head of Technology Risk | [Name] | _________________ | [Date] |
| Head of IT Risk & Compliance | [Name] | _________________ | [Date] |
| [Additional Approver, if required] | [Name] | _________________ | [Date] |

---

## 11. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 11.4 | Technology risk management – Security event monitoring and incident detection |
| BNM RMiT | Clause 11.4(a) | Detection tool configuration requirements |
| BNM RMiT | Clause 11.4(b) | Alert threshold and escalation requirements |
| BNM | [Technology Risk Incident Reporting Guidelines / Circular] | Incident notification obligations to BNM |
| PDPA 2010 | Section [X] | Personal data protection obligations relevant to breach notification |
| NACSA | [CSSP / Applicable Framework] | National cybersecurity standards for critical sector entities |
| NIST SP 800-137 | — | Information Security Continuous Monitoring (ISCM) |
| MITRE ATT&CK | [Version] | Adversary tactics, techniques, and procedures for use case development |
| CIS Controls | v8, Control 8 | Audit log management and security event monitoring |
| [Internal: SOC Incident Response Playbook] | [Document ID] | Operational procedures for incident handling |
| [Internal: Technology Asset Register] | [Document ID] | Authoritative source for in-scope asset inventory |
| [Internal: IT Risk & Compliance Framework] | [Document ID] | Organizational risk classification and treatment framework |

---

## 12. Appendices

### Appendix A – SIEM Detection Use Case Register

*Maintain a complete register of active SIEM correlation rules and use cases in the SOC Use Case Register ([Document Reference: SOC-UCR-01]). The register is considered a controlled operational document and is maintained separately from this policy artifact. A summary of key use cases mapped to MITRE ATT&CK tactics is reproduced below for reference.*

| Use Case ID | Use Case Name | MITRE ATT&CK Tactic | MITRE Technique | Severity Generated | Status |
|---|---|---|---|---|---|
| UC-001 | [e.g., Brute Force Login Detection] | Credential Access | T1110 | P3 / P2 (threshold-dependent) | [Active] |
| UC-002 | [e.g., Lateral Movement via SMB] | Lateral Movement | T1021.002 | P2 | [Active] |
| UC-003 | [e.g., Large Data Transfer to External IP] | Exfiltration | T1041 | P2 / P1 (volume-dependent) | [Active] |
| UC-004 | [Use Case Name] | [Tactic] | [Technique ID] | [Severity] | [Status] |

### Appendix B – Log Retention Configuration Evidence

*Provide evidence of configured log retention settings for each primary log source. Screenshot evidence or exported configuration records should be maintained in the SOC Evidence Repository ([Path / Reference]) and referenced here.*

| Log Source | Retention Period (Online) | Retention Period (Archive) | Configuration Evidence Reference | Compliant |
|---|---|---|---|---|
| [SIEM Platform Name] | [X months] | [Y years] | [Evidence Ref] | [Yes / No] |
| [Network Firewall] | [X months] | [Y years] | [Evidence Ref] | [Yes / No] |
| [Active Directory / IAM] | [X months] | [Y years] | [Evidence Ref] | [Yes / No] |
| [Core Banking Application] | [X months] | [Y years] | [Evidence Ref] | [Yes / No] |

### Appendix C – Detection Tool Access Control Evidence

*List privileged accounts with access to detection platforms. Full access control evidence (e.g., exported user lists, PAM reports) is maintained in the SOC Evidence Repository.*

| Platform | Account Type | Number of Accounts | Last Access Review Date | Evidence Reference |
|---|---|---|---|---|
| [SIEM Platform] | Administrator | [N] | [Date] | [Ref] |
| [SIEM Platform] | Read-Only Analyst | [N] | [Date] | [Ref] |
| [EDR Platform] | Administrator | [N] | [Date] | [Ref] |

### Appendix D – Quarterly Review Checklist

*Use this checklist during each quarterly configuration review. Completed checklists are retained as evidence of review in the SOC Evidence Repository.*

| # | Review Item | Responsible | Completed | Notes |
|---|---|---|---|---|
| 1 | Verify all critical assets appear as active log sources in SIEM | SOC Manager | ☐ | |
| 2 | Review and tune alert rules with false positive rate > [X]% | SOC Analyst | ☐ | |
| 3 | Confirm log retention settings remain compliant | SOC Analyst | ☐ | |
| 4 | Review privileged access to detection platforms | SOC Manager | ☐ | |
| 5 | Validate integration between SIEM and ticketing system | SOC Analyst | ☐ | |
| 6 | Review and update escalation contact list | SOC Manager | ☐ | |
| 7 | Assess KPI performance against defined thresholds | SOC Manager | ☐ | |
| 8 | Review open PIR remediation actions and update status | SOC Manager | ☐ | |
| 9 | Confirm vendor/MSSP SLA compliance (if applicable) | SOC Manager | ☐ | |
| 10 | Update this document with review outcomes and re-approve | SOC Manager / CISO | ☐ | |

---

*This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name] involved in technology risk management, security operations, and regulatory compliance activities. Unauthorized disclosure is prohibited. Retain in accordance with [Organization Name] Document Retention Policy ([Document Reference]).*

---

*End of Document — [Document ID] v1.0 — [Organization Name]*