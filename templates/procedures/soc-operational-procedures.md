# SOC Operational Procedures

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

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable laws and internal policies.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Framework](#2-regulatory-and-policy-framework)
3. [SOC Operational Scope and Applicability](#3-soc-operational-scope-and-applicability)
4. [SOC Operational Process Flow](#4-soc-operational-process-flow)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Use Case Catalogue and Tuning Schedule](#6-use-case-catalogue-and-tuning-schedule)
7. [Shift Handover Procedures](#7-shift-handover-procedures)
8. [Escalation Matrix and Service Level Agreements](#8-escalation-matrix-and-service-level-agreements)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the primary intent of this document and the operational functions it governs. Reference the regulatory obligation that mandates these procedures.*

This document establishes the operational procedures governing the Security Operations Centre (SOC) of [Organization Name]. It defines the end-to-end processes for continuous security monitoring, alert triage, incident detection, and structured escalation to ensure the confidentiality, integrity, and availability of [Organization Name]'s information assets and technology infrastructure.

These procedures are established in compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically **Clause 11.6**, which mandates that financial institutions maintain documented, repeatable, and tested processes for security event monitoring and incident response within a functioning Security Operations Centre.

### 1.2 Scope

*Define the boundaries of this document — what systems, entities, processes, and personnel are covered. Explicitly state what is out of scope to avoid ambiguity during audits.*

**In Scope:**

- All IT systems, applications, and infrastructure hosted within [Organization Name]'s on-premises data centres and cloud environments
- Security monitoring tools and platforms operated by or on behalf of [Organization Name], including but not limited to SIEM, EDR, NDR, and threat intelligence platforms
- All SOC personnel, including in-house analysts, shift leads, and any managed security service provider (MSSP) staff operating under contract with [Organization Name]
- Third-party integrations and data feeds that flow into the SOC monitoring environment
- Security events originating from endpoints, servers, network devices, cloud workloads, OT/ICS environments (if applicable), and business applications
- [Organization Name]'s subsidiaries and affiliates subject to group-level security governance, as listed in **Appendix A**

**Out of Scope:**

- Physical security operations (governed separately under [Physical Security Policy reference])
- Business continuity and disaster recovery activations (governed under [BCP/DRP Policy reference])
- Detailed forensic investigation procedures (governed under [Digital Forensics Procedures reference])
- Fraud detection operations managed by [relevant team/system] unless a cyber dimension is identified

### 1.3 Applicability

*Specify which staff categories, departments, and operational contexts must comply with this document.*

These procedures apply to:

| Applicable Group | Applicability |
|---|---|
| SOC Analysts (Tier 1, Tier 2, Tier 3) | Mandatory |
| SOC Shift Leads / Team Leads | Mandatory |
| SOC Manager | Mandatory |
| Incident Response (IR) Team | Mandatory |
| Information Security Management | Mandatory |
| MSSP Personnel (contracted) | Mandatory (as per SLA/contract) |
| IT Operations (on escalation) | Applicable upon escalation |
| Business Units (on notification) | Applicable upon notification |

---

## 2. Regulatory and Policy Framework

### 2.1 Regulatory Basis

*List the specific regulatory instruments and clauses that this document satisfies. Ensure clause references are accurate and current as of the document's effective date.*

This document is aligned with the following regulatory requirements:

| Regulation / Standard | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) Policy | Clause 11.6 | Establishment and operation of a Security Operations Centre with defined monitoring, triage, and escalation procedures |
| BNM Risk Management in Technology (RMiT) Policy | Clause 11.1 – 11.5 | Technology risk governance, asset management, and vulnerability management supporting SOC operations |
| BNM Risk Management in Technology (RMiT) Policy | Clause 11.7 | Security incident management and reporting obligations |
| Personal Data Protection Act 2010 (PDPA) | Section 9 | Security standards for the protection of personal data processed by the organization |
| NACSA Cyber Security Policy | [Applicable Section] | National cybersecurity requirements applicable to critical information infrastructure operators |
| ISO/IEC 27001:2022 | Annex A, Control 8.15 | Logging requirements; Annex A, Control 5.26 – Response to information security incidents |
| NIST SP 800-61 Rev. 2 | All | Computer Security Incident Handling Guide (reference framework) |

### 2.2 Internal Policy Alignment

*Reference internal policies that this procedure operationalises. These should be policies already approved by the Board or Senior Management.*

These procedures operationalise the following internal policies and frameworks:

- [Organization Name] Information Security Policy – Version [x.x], dated [Date]
- [Organization Name] Incident Response Policy – Version [x.x], dated [Date]
- [Organization Name] Technology Risk Management Framework – Version [x.x], dated [Date]
- [Organization Name] Data Classification and Handling Policy – Version [x.x], dated [Date]
- [Organization Name] Vendor and Third-Party Risk Management Policy – Version [x.x], dated [Date]

---

## 3. SOC Operational Scope and Applicability

### 3.1 SOC Operating Model

*Describe the structure and operating model of the SOC — whether it is in-house, hybrid, or fully outsourced, and the coverage hours.*

[Organization Name]'s SOC operates under a **[In-House / Hybrid / Co-managed]** model with the following characteristics:

| Parameter | Detail |
|---|---|
| **SOC Type** | [In-House / Hybrid / Fully Managed] |
| **Coverage Hours** | [24x7 / Follow-the-Sun / Business Hours + On-Call] |
| **SOC Location(s)** | [Primary: Location; Secondary/Backup: Location] |
| **MSSP Partner (if applicable)** | [MSSP Name / Not Applicable] |
| **Tier Structure** | Tier 1 (Monitoring), Tier 2 (Analysis), Tier 3 (Expert/Threat Hunting) |
| **Primary SIEM Platform** | [SIEM Platform Name and Version] |
| **Ticketing / Case Management** | [Platform Name] |

### 3.2 Monitored Asset Classes

*List the categories of assets for which the SOC is responsible for monitoring. This section should be reviewed whenever the organisation's technology footprint changes.*

The SOC is responsible for monitoring the following asset classes:

| Asset Class | Examples | Monitoring Status |
|---|---|---|
| Endpoints (Workstations/Laptops) | Staff devices, VDI sessions | Active |
| Servers (On-Premises) | Windows/Linux production, dev, staging servers | Active |
| Cloud Workloads | AWS EC2, Azure VMs, GCP Compute instances | Active |
| Network Infrastructure | Firewalls, routers, switches, load balancers | Active |
| Active Directory / Identity | Domain Controllers, Azure AD, Okta | Active |
| Web Application Firewalls | [WAF Platform] | Active |
| Business Applications | [Core Banking System, Internet Banking, etc.] | Active |
| Email Gateway | [Email Security Platform] | Active |
| OT/ICS Systems (if applicable) | [OT Systems / Not Applicable] | [Active / Not Applicable] |
| Cloud SaaS Applications | Microsoft 365, Salesforce, etc. | Active |
| ATM / POS Infrastructure | [ATM/POS Systems / Not Applicable] | [Active / Not Applicable] |

### 3.3 Data Sources and Log Feeds

*Enumerate the log sources ingested into the SIEM. This list should be maintained in Appendix B and summarised here.*

The SOC ingests security telemetry from the following categories of log sources. A complete and current list of log sources, including their ingestion status and coverage gaps, is maintained in **Appendix B – Log Source Inventory**.

- **Endpoint Detection and Response (EDR):** [EDR Platform Name]
- **Security Information and Event Management (SIEM):** [SIEM Platform Name]
- **Network Detection and Response (NDR):** [NDR Platform Name]
- **Vulnerability Management:** [VM Platform Name]
- **Threat Intelligence Platform (TIP):** [TIP Platform Name]
- **Cloud Security Posture Management (CSPM):** [CSPM Platform Name]
- **Privileged Access Management (PAM) Logs:** [PAM Platform Name]
- **DNS / DHCP Logs:** [Source]
- **Web Proxy / Internet Gateway Logs:** [Source]
- **Email Security Gateway Logs:** [Source]

---

## 4. SOC Operational Process Flow

### 4.1 Overview of the Alert Lifecycle

*Describe the end-to-end lifecycle of a security alert from initial generation through to closure. This section provides the master process flow that all subsequent sub-sections detail.*

All security alerts processed by the SOC follow a structured lifecycle to ensure consistency, accountability, and compliance with defined SLAs. The lifecycle stages are:

```
[Alert Generation] → [Alert Queuing & Prioritisation] → [Tier 1 Triage] → [Tier 1 Disposition]
         ↓ (Escalate)                                                              ↓ (Close as FP)
[Tier 2 Analysis] → [Tier 2 Disposition] → [Tier 3 / IR Engagement] → [Incident Declaration]
         ↓ (Close as Benign)                      ↓ (No Incident)            ↓ (Incident Response)
[Case Closure & Documentation]          [Case Closure & Documentation]   [Post-Incident Review]
```

### 4.2 Step-by-Step Alert Triage Process

#### 4.2.1 Step 1 — Alert Generation and Queuing

*Describe how alerts are generated by security tools and queued for analyst review. Include the role of automated enrichment and correlation rules.*

1. Security events are generated by monitoring tools (EDR, SIEM correlation rules, IDS/IPS, WAF, cloud security services) and forwarded to the **[SIEM Platform]**.
2. The SIEM applies correlation rules and use cases (refer to **Section 6**) to generate **security alerts**.
3. Automated enrichment is applied, including:
   - IP reputation lookup via [Threat Intelligence Feed]
   - Asset context lookup via the Configuration Management Database (CMDB)
   - User identity context lookup via [Identity Provider / Active Directory]
   - Geolocation enrichment for external IP addresses
4. Enriched alerts are assigned a **severity level** (Critical, High, Medium, Low) and placed in the analyst queue in **[SIEM / SOAR / Ticketing Platform]**.
5. Critical and High severity alerts trigger an **automated notification** to the on-duty Tier 1 analyst and Shift Lead via [Notification Channel: email / SMS / PagerDuty / Teams].

#### 4.2.2 Step 2 — Tier 1 Triage

*Define the Tier 1 analyst's responsibilities when reviewing an alert. Include expected actions, decision criteria, and time constraints.*

**Responsible Role:** Tier 1 SOC Analyst  
**SLA — Initial Review:** [e.g., Critical: 15 minutes | High: 30 minutes | Medium: 2 hours | Low: 8 hours]

The Tier 1 analyst performs the following actions upon receiving an alert:

1. **Acknowledge** the alert in [SIEM/Ticketing Platform] and assign it to themselves to prevent duplicate handling.
2. **Review** the alert details, including:
   - Alert rule name and description
   - Affected asset(s) — hostname, IP, user account
   - Event timestamps and duration
   - Raw log data supporting the alert
   - Automated enrichment results (IP reputation, user context, asset criticality)
3. **Conduct initial investigation:**
   - Search SIEM for related events involving the same asset, user, or indicator within the previous [24 / 48 / 72] hours
   - Cross-reference threat intelligence platforms for known indicators of compromise (IOCs)
   - Review the alert against known False Positive (FP) patterns documented in the Use Case Catalogue (**Section 6**)
4. **Disposition the alert** as one of:
   - **True Positive (TP)** — Confirmed malicious or suspicious activity → Proceed to Step 3
   - **False Positive (FP)** — Confirmed benign activity matching a detection rule → Document and close (refer to **Section 4.2.5**)
   - **Requires Further Analysis** — Insufficient evidence at Tier 1 → Escalate to Tier 2 (refer to **Step 3**)
   - **Informational** — Low-risk event requiring no action → Document and close
5. **Document** all triage steps, findings, and the disposition rationale in the case management system.

#### 4.2.3 Step 3 — Tier 2 Analysis

*Define the Tier 2 analyst's responsibilities for deeper investigation. Include forensic steps, correlation analysis, and escalation criteria.*

**Responsible Role:** Tier 2 SOC Analyst  
**SLA — Analysis Completion:** [e.g., Critical: 1 hour | High: 4 hours | Medium: 24 hours]

Upon receiving a Tier 1 escalation or directly responding to a Critical alert, the Tier 2 analyst performs:

1. **Review** the Tier 1 triage notes and all enrichment data.
2. **Conduct deep-dive investigation:**
   - Perform timeline analysis of events on the affected asset
   - Analyse process execution trees, network connections, and file system activity (where EDR data is available)
   - Conduct memory artefact review if EDR/forensic tooling permits
   - Pivot on IOCs (IP addresses, domains, file hashes, user accounts) across the entire monitored environment
   - Query threat intelligence platforms for actor TTPs mapped to MITRE ATT&CK
3. **Correlate** the alert with any open or recently closed cases involving the same infrastructure, user, or campaign indicators.
4. **Disposition the alert** as one of:
   - **Confirmed Incident** — Meets the organisation's incident declaration criteria → Proceed to **Step 4**
   - **True Positive / No Incident** — Malicious activity confirmed but contained or isolated → Document fully and close; trigger a vulnerability/patch follow-up if required
   - **False Positive** — Document and update the FP register; flag for use case tuning
5. **Update** the case management record with full investigation notes, evidence artefacts, and MITRE ATT&CK TTP mapping.

#### 4.2.4 Step 4 — Incident Declaration and Tier 3 / IR Engagement

*Define the criteria for formally declaring a security incident and engaging the Incident Response team or Tier 3 analysts.*

**Responsible Role:** Tier 2 Analyst, Shift Lead, SOC Manager  
**SLA — Incident Declaration:** [e.g., Within 30 minutes of confirmed Tier 2 TP disposition]

An **incident** is declared when one or more of the following criteria are met:

- Confirmed unauthorised access to [Organization Name] systems or data
- Evidence of malware execution, ransomware activity, or data exfiltration
- Confirmed compromise of a privileged account or identity
- Disruption or degradation to critical business services attributable to a security event
- Detection of a threat actor with persistent access to the environment
- Any event meeting the **Critical** incident severity threshold as defined in **Appendix C – Incident Classification Matrix**

Upon incident declaration:

1. The Tier 2 analyst or Shift Lead **declares the incident** in the case management system and assigns an **Incident ID**.
2. The **SOC Manager** and **Incident Response Team Lead** are notified immediately per the Escalation Matrix (**Section 8**).
3. The case is **handed over** to the Incident Response (IR) Team, with the SOC continuing monitoring support.
4. **BNM regulatory notification timelines** are tracked from the point of incident declaration per **Clause 11.7** of the RMiT Policy.

#### 4.2.5 Step 5 — Case Closure and Documentation

*Define the criteria and process for closing a SOC case, ensuring documentation is complete and lessons learned are captured.*

**Responsible Role:** Tier 1 / Tier 2 Analyst (closures); Shift Lead (review and approval of closures)

All cases — regardless of outcome — must be formally closed in the case management system. Prior to closure, the analyst must confirm:

- [ ] All investigation steps are documented in the case record
- [ ] Disposition rationale is clearly stated (TP, FP, Informational)
- [ ] MITRE ATT&CK TTP codes are mapped (for TP cases)
- [ ] Affected assets and users are listed
- [ ] Containment and remediation actions taken (or recommended) are documented
- [ ] False Positive cases are flagged for use case tuning review
- [ ] Shift Lead has reviewed and approved the closure (for High/Critical cases)

**Metrics capture** — Upon closure, the following metrics are automatically captured by [SIEM/Case Management Platform]:
- Mean Time to Detect (MTTD)
- Mean Time to Respond (MTTR)
- Mean Time to Contain (MTTC)
- Alert severity and final disposition

---

## 5. Roles and Responsibilities

### 5.1 SOC Team Structure

*Describe the reporting structure and role definitions within the SOC. Adjust to match the organisation's actual staffing model.*

| Role | Reporting To | Primary Function |
|---|---|---|
| SOC Manager | CISO / Head of Information Security | Strategic oversight, staffing, vendor management, BNM engagement |
| SOC Shift Lead / Team Lead | SOC Manager | Shift supervision, quality assurance, escalation decision-making |
| Tier 3 Analyst / Threat Hunter | SOC Manager | Advanced threat hunting, malware analysis, threat intelligence production |
| Tier 2 SOC Analyst | SOC Shift Lead | Deep-dive investigation, incident analysis, Tier 1 escalation handling |
| Tier 1 SOC Analyst | SOC Shift Lead | Alert monitoring, initial triage, first-level disposition |
| MSSP Tier 1 Analysts (if applicable) | SOC Shift Lead (escalation path) | First-level monitoring under SLA; managed externally |

### 5.2 RACI Matrix

*The RACI matrix defines who is Responsible (R), Accountable (A), Consulted (C), and Informed (I) for each key SOC process. Review this matrix whenever the org structure changes.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Process / Activity | SOC Manager | Shift Lead | Tier 2 Analyst | Tier 1 Analyst | IR Team | CISO | MSSP |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Security Monitoring (24x7)** | A | I | I | R | I | I | R/C |
| **Alert Triage — Tier 1** | A | I | I | R | — | — | R |
| **Alert Escalation to Tier 2** | A | C | R | R | — | — | I |
| **Deep-Dive Analysis — Tier 2** | A | C | R | I | C | — | I |
| **Incident Declaration** | A | R | C | I | C | I | I |
| **Incident Escalation to IR** | A | R | C | I | R | I | I |
| **Threat Hunting** | A | C | R | I | C | I | — |
| **Use Case Development and Tuning** | A | C | R | C | — | I | C |
| **Shift Handover** | A | R | C | R | — | — | R |
| **SOC KPI Reporting** | R | C | I | I | I | I | C |
| **BNM Regulatory Reporting** | C | I | I | I | C | R/A | — |
| **SIEM Platform Administration** | A | I | C | I | — | I | C |
| **Playbook Maintenance** | A | C | R | C | C | I | — |
| **Post-Incident Review (PIR)** | A | C | R | C | R | I | C |
| **Staff Training and Competency** | R/A | C | I | I | — | I | — |
| **Log Source Onboarding** | A | C | R | I | — | I | C |

### 5.3 Key Responsibilities — Detailed

#### SOC Manager

- Maintain overall accountability for SOC operational performance and compliance with BNM RMiT Clause 11.6
- Approve SOC procedures, playbooks, and use case catalogues
- Manage relationships with MSSPs and technology vendors
- Report SOC performance metrics and significant incidents to the CISO and relevant governance committees
- Ensure adequate staffing, tooling, and training for SOC operations
- Coordinate with the Incident Response Team Lead during major incidents

#### SOC Shift Lead

- Supervise the on-duty analyst team during each shift
- Review and approve the disposition of High and Critical severity cases
- Make escalation decisions in accordance with **Section 8**
- Conduct and document shift handover activities per **Section 7**
- Manage analyst workload and queue prioritisation during the shift
- Escalate resource constraints or tool outages to the SOC Manager immediately

#### Tier 2 SOC Analyst

- Conduct deep-dive investigation of escalated or complex alerts
- Perform threat hunting activities on a scheduled basis
- Maintain and contribute to the use case catalogue and detection logic
- Produce threat intelligence reports for internal consumption
- Support and mentor Tier 1 analysts
- Liaise with IT Operations and business units during incident response

#### Tier 1 SOC Analyst

- Monitor the SIEM alert queue continuously during the assigned shift
- Perform initial triage and disposition of alerts within defined SLAs
- Escalate alerts meeting escalation criteria without delay
- Accurately document all investigation steps in the case management system
- Participate in shift handover activities per **Section 7**
- Maintain awareness of current threat landscape and active campaigns

---

## 6. Use Case Catalogue and Tuning Schedule

### 6.1 Use Case Governance

*Describe the governance process for managing SIEM use cases — how they are approved, reviewed, and retired. A complete use case catalogue is maintained in Appendix D.*

Use cases (detection rules and correlation logic) deployed within the SIEM are managed under a formal governance process to ensure:

- **Coverage** — The use case library provides adequate coverage across the MITRE ATT&CK framework for the organisation's threat profile
- **Quality** — False positive rates are maintained within acceptable thresholds
- **Currency** — Use cases are updated to reflect emerging threats and changes to the organisation's technology environment

The **Use Case Register** (maintained in **Appendix D**) is the authoritative list of all active, retired, and in-development use cases. It is reviewed by the Tier 2 team and SOC Manager on a **[monthly / quarterly]** basis.

### 6.2 Use Case Categories

*List the broad categories of use cases deployed. The complete use case register in Appendix D provides individual use case details.*

| Category | MITRE ATT&CK Tactic | Priority | Example Use Cases |
|---|---|---|---|
| Identity and Access Anomalies | Initial Access, Credential Access | High | Brute force attacks, impossible travel logins, privileged account misuse |
| Malware and Ransomware | Execution, Impact | Critical | Known malware hash detection, ransomware file extension creation, mass encryption activity |
| Lateral Movement | Lateral Movement | High | Pass-the-hash, PsExec usage, anomalous SMB connections |
| Data Exfiltration | Exfiltration | High | Large data transfers to external destinations, USB mass storage alerts, cloud upload anomalies |
| Command and Control (C2) | Command and Control | Critical | Beaconing behaviour, DNS tunnelling, connections to threat intelligence-flagged IPs/domains |
| Persistence Mechanisms | Persistence | High | Scheduled task creation, registry run key modification, new service installation |
| Privilege Escalation | Privilege Escalation | High | Local admin account creation, Group Policy modification, UAC bypass |
| Insider Threat | Collection, Exfiltration | Medium | Anomalous access to sensitive data repositories, after-hours access patterns |
| Vulnerability Exploitation | Initial Access, Execution | Critical | WAF alerts for known exploits, IDS signatures for CVE exploitation attempts |
| Cloud Security | All | High | Cloud storage bucket exposure, IAM privilege escalation, CloudTrail anomalies |
| Phishing and Email Threats | Initial Access | High | Malicious attachment execution, URL click on quarantined link |
| Network Anomalies | Discovery, Reconnaissance | Medium | Port scanning from internal hosts, unexpected protocol usage |

### 6.3 Use Case Lifecycle

*Define the stages a use case goes through from conception to retirement.*

| Stage | Description | Responsible |
|---|---|---|
| **Proposal** | Analyst or threat intelligence identifies a detection gap; use case is drafted | Tier 2 Analyst |
| **Development** | Detection logic is written and tested in a non-production environment | Tier 2 Analyst |
| **Validation** | Logic is tested against historical data; FP rate is assessed | Tier 2 Analyst, Shift Lead |
| **Approval** | SOC Manager approves deployment to production | SOC Manager |
| **Deployment** | Use case is activated in the production SIEM | SIEM Administrator |
| **Active Monitoring** | Use case generates alerts; FP feedback is collected | Tier 1 / Tier 2 Analysts |
| **Tuning** | FP patterns are suppressed; thresholds are adjusted | Tier 2 Analyst |
| **Review** | Quarterly formal review of relevance, coverage, and FP rate | Tier 2, Shift Lead, SOC Manager |
| **Retirement** | Superseded or no-longer-relevant use cases are disabled and documented | SOC Manager |

### 6.4 Tuning Schedule

*Define the schedule for reviewing and tuning existing use cases to manage false positive rates.*

| Activity | Frequency | Responsible | Output |
|---|---|---|---|
| False Positive Log Review | Weekly | Tier 2 Analyst | FP Register updates |
| Individual Use Case Tuning | As needed / following FP spikes | Tier 2 Analyst | Updated detection logic |
| Use Case Coverage Assessment (MITRE ATT&CK heat map review) | Quarterly | Tier 2 Analyst, SOC Manager | Coverage gap report |
| Full Use Case Catalogue Review | Quarterly | Tier 2, Shift Lead, SOC Manager | Updated Use Case Register |
| Post-Incident Use Case Update | Following each major incident | Tier 2 Analyst | New or updated use case |
| Annual SIEM Health Assessment | Annual | SOC Manager, SIEM Administrator | SIEM optimisation report |

### 6.5 False Positive Management

*Describe how false positives are recorded, analysed, and used to drive tuning decisions.*

All alerts dispositioned as False Positive (FP) by Tier 1 or Tier 2 analysts must be:

1. Recorded in the **False Positive Register** (maintained in **Appendix E**) with:
   - Alert / use case name
   - Date and frequency of FP
   - Root cause of the FP (e.g., legitimate administrative activity, application behaviour)
   - Analyst who identified the FP
2. Reviewed by the Tier 2 team weekly to identify patterns suitable for suppression or threshold adjustment
3. Escalated to the SOC Manager if the FP rate for any single use case exceeds **[e.g., 50 FP alerts per week]**, triggering a mandatory tuning review

**FP Suppression Rules** must:
- Be documented with a business justification
- Be approved by the Shift Lead or SOC Manager before deployment
- Be reviewed quarterly to ensure they remain valid

---

## 7. Shift Handover Procedures

### 7.1 Shift Structure

*Define the shift structure in place. Adjust shift names, timings, and overlap periods to match the organisation's actual operating schedule.*

| Shift | Hours (Local Time) | Days | Staffing |
|---|---|---|---|
| Morning Shift | [e.g., 07:00 – 15:00] | Monday – Sunday | [Minimum staffing: x Tier 1, y Tier 2] |
| Afternoon Shift | [e.g., 15:00 – 23:00] | Monday – Sunday | [Minimum staffing: x Tier 1, y Tier 2] |
| Night Shift | [e.g., 23:00 – 07:00] | Monday – Sunday | [Minimum staffing: x Tier 1, y Tier 2] |
| Handover Overlap Period | [e.g., 30 minutes before shift end] | All | Both outgoing and incoming Shift Leads |

### 7.2 Shift Handover Process

*Define the mandatory steps that must be completed at every shift transition to ensure operational continuity.*

The outgoing Shift Lead is responsible for initiating and completing the handover. The incoming Shift Lead is responsible for confirming receipt and readiness.

#### 7.2.1 Outgoing Shift Lead Responsibilities

Before the end of each shift, the outgoing Shift Lead must:

1. **Prepare the Shift Handover Report** in [Designated System / Template Location] covering:
   - Summary of shift activity: total alerts received, triaged, escalated, closed
   - Status of all **open cases** — include case ID, current severity, assigned analyst, last action taken, and next required action
   - Any **active incidents** — status, IR team engagement, and pending actions
   - **Tool and system health** — note any outages, degraded log sources, or SIEM performance issues experienced during the shift
   - **Threat landscape updates** — any active campaigns, new IOCs, or BNM/NACSA advisories received during the shift
   - **Pending tasks** — items that require follow-up during the incoming shift
   - **Staffing issues** — any analyst absences or skill gaps affecting the shift
2. **Verbally brief** the incoming Shift Lead on all open cases and active incidents
3. **Transfer ownership** of all open cases in the case management system to the incoming analyst team
4. **Confirm** with the incoming Shift Lead that the handover has been understood and accepted
5. **Sign off** the Shift Handover Report in [System / Document]

#### 7.2.2 Incoming Shift Lead Responsibilities

1. **Review** the Shift Handover Report prior to the handover briefing
2. **Participate** in the verbal briefing with the outgoing Shift Lead
3. **Confirm** receipt of all open case assignments
4. **Verify tool and SIEM health** — independently confirm system status at shift start
5. **Sign the Shift Handover Report** to acknowledge receipt
6. **Brief the incoming analyst team** on shift priorities within the first 15 minutes of the shift

#### 7.2.3 Shift Handover Report — Required Fields

| Field | Description |
|---|---|
| Shift Date | [Date] |
| Shift Period | [e.g., Afternoon: 15:00 – 23:00] |
| Outgoing Shift Lead | [Name] |
| Incoming Shift Lead | [Name] |
| Total Alerts Received | [Number] |
| Total Alerts Closed | [Number] |
| Total Alerts Escalated | [Number] |
| Open Cases (summary) | [Case ID, Severity, Status] |
| Active Incidents | [Incident ID, Status, IR Team Lead] |
| Tool / System Issues | [Description or "None"] |
| Threat Intelligence Updates | [Summary or "None"] |
| Pending Actions for Incoming Shift | [Description] |
| Outgoing Lead Signature | [Signature / System Acknowledgement] |
| Incoming Lead Signature | [Signature / System Acknowledgement] |

### 7.3 Minimum Shift Coverage Requirements

*Define the minimum staffing requirements that must be maintained at all times. Define the escalation path if minimum coverage cannot be met.*

| Scenario | Required Action |
|---|---|
| Analyst unable to attend shift | Notify Shift Lead at least [X hours] in advance; Shift Lead arranges cover |
| Shift Lead unable to attend | Notify SOC Manager immediately; Senior Tier 2 analyst assumes Shift Lead responsibilities |
| Both Shift Lead and SOC Manager unavailable | [Escalation to CISO / On-call senior management] |
| Below minimum analyst coverage at any point | Shift Lead notifies SOC Manager immediately; MSSP escalation may be invoked |

---

## 8. Escalation Matrix and Service Level Agreements

### 8.1 Incident Severity Classification

*Define the severity levels used to classify security incidents and alerts. This classification drives SLA timelines and escalation paths.*

| Severity Level | Definition | Examples |
|---|---|---|
| **Critical (P1)** | Confirmed or imminent threat to critical systems; active data breach; ransomware; regulatory breach imminent | Active ransomware spread, confirmed exfiltration of PII, compromise of core banking system |
| **High (P2)** | Significant threat requiring urgent investigation; potential data breach; compromise of important systems | Privileged account compromise, malware on server, evidence of lateral movement |
| **Medium (P3)** | Moderate threat; suspicious activity requiring investigation but no confirmed compromise | Phishing email successfully delivered but not clicked, anomalous user behaviour, suspicious process |
| **Low (P4)** | Low-risk or informational events; policy violations with no immediate threat | Failed login attempts below brute-force threshold, software policy violation |

### 8.2 Escalation Matrix

*Define who must be notified and when, based on the severity of the security event. Ensure contact details are maintained in Appendix F and referenced here rather than embedded in the body of this document.*

| Severity | Escalation Tier | Who to Notify | Method | Timeframe |
|---|---|---|---|---|
| **Critical (P1)** | Tier 2 → Tier 3 / IR | Tier 3 Analyst / IR Team Lead | Phone call (primary); [Messaging Platform] (secondary) | Immediately upon P1 determination |
| **Critical (P1)** | IR → Management | SOC Manager, CISO | Phone call | Within 15 minutes of incident declaration |
| **Critical (P1)** | Management → Executive | CEO / Board Risk Committee (if applicable) | As directed by CISO | Per Incident Response Policy |
| **Critical (P1)** | Internal → Regulator | BNM (per RMiT Clause 11.7 timelines) | BNM reporting portal / [mechanism] | Per BNM regulatory obligation |
| **High (P2)** | Tier 1 → Tier 2 | Tier 2 Analyst | Case management escalation + [Messaging Platform] | Within 30 minutes of Tier 1 triage |
| **High (P2)** | Tier 2 → Shift Lead | SOC Shift Lead | Case management escalation | Immediately upon P2 determination |
| **High (P2)** | Shift Lead → SOC Manager | SOC Manager | Phone / [Messaging Platform] | Within 1 hour if incident is declared |
| **Medium (P3)** | Tier 1 → Tier 2 | Tier 2 Analyst | Case management escalation | Within 2 hours of Tier 1 triage |
| **Low (P4)** | Tier 1 | Tier 1 (handles independently) | Case management | Within 8 hours |

> **Note:** Contact details for all escalation points are maintained in **Appendix F – SOC Escalation Contact Directory**. This appendix must be reviewed at every quarterly use case review and updated immediately upon any personnel change.

### 8.3 Service Level Agreements

*Define the SLAs for each stage of the alert and incident lifecycle. These SLAs must be reflected in the SIEM/SOAR platform for automated tracking and reporting.*

#### 8.3.1 Alert Response SLAs

| Severity | Initial Acknowledgement | Tier 1 Triage Completion | Tier 2 Analysis Completion (if escalated) |
|---|---|---|---|
| **Critical (P1)** | 15 minutes | 30 minutes | 2 hours |
| **High (P2)** | 30 minutes | 1 hour | 4 hours |
| **Medium (P3)** | 2 hours | 4 hours | 24 hours |
| **Low (P4)** | 8 hours | 24 hours | 48 hours |

#### 8.3.2 Incident Response SLAs

| Milestone | Critical (P1) | High (P2) | Medium (P3) |
|---|---|---|---|
| Incident Declaration | 30 min from TP confirmation | 1 hour | 4 hours |
| IR Team Engagement | 15 min from declaration | 1 hour | 4 hours |
| Initial Containment | 2 hours from declaration | 8 hours | 24 hours |
| Management Notification | 30 min from declaration | 2 hours | Next business day |
| Regulatory Notification (BNM) | Per RMiT Clause 11.7 | Per RMiT Clause 11.7 | Per RMiT Clause 11.7 |
| Post-Incident Review (PIR) | Within 5 business days | Within 10 business days | Within 15 business days |

#### 8.3.3 MSSP SLA Requirements (if applicable)

*If a managed security service provider is engaged, define the minimum contractual SLAs they must meet. These should mirror or exceed internal SLAs.*

| SLA Metric | Required Standard |
|---|---|
| Availability of MSSP monitoring service | [e.g., 99.9% uptime, measured monthly] |
| MSSP alert escalation to [Organization Name] SOC | [e.g., Critical: 15 min; High: 30 min; Medium: 2 hours] |
| MSSP reporting frequency | [e.g., Daily summary, weekly KPI report, monthly review] |
| MSSP incident notification | [e.g., Immediate phone call for P1; email within 30 min for P2] |

### 8.4 SLA Breach Management

*Define the process for identifying, recording, and remediating SLA breaches.*

SLA breaches must be:

1. **Identified** automatically by the SIEM/SOAR platform or manually flagged by the Shift Lead
2. **Recorded** in the SOC KPI register with a root cause explanation
3. **Escalated** to the SOC Manager by the Shift Lead within [24 hours] of the breach
4. **Reported** to the CISO in the monthly SOC performance report if the breach rate exceeds [e.g., 5%] for any severity level
5. **Remediated** via a documented corrective action plan if recurring breaches are identified

---

## 9. Review and Approval

### 9.1 Document Review Schedule

*This document must be reviewed at the frequency stated in the document header. Reviews must be triggered earlier if significant operational or regulatory changes occur.*

This document must be reviewed:

- **Annually** as a minimum, on or before the Next Review Date stated in the document header
- **Within 30 days** of any significant change to the SOC operating model, technology stack, or staffing structure
- **Within 14 days** of any BNM regulatory update affecting SOC operations
- **Within 30 days** following a major security incident that reveals a gap in these procedures

### 9.2 Version History

*Record all versions of this document. The most recent version is listed first.*

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial document creation |
| [x.x] | [Date] | [Author Name, Title] | [Description of changes] |

### 9.3 Approval Sign-Off

*All approvers must sign below before this document is considered approved and effective. Digital signatures or system-based approval workflows are acceptable alternatives.*

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Manager | [Name] | [Signature] | [Date] |
| CISO / Head of Information Security | [Name] | [Signature] | [Date] |
| Chief Risk Officer (or delegate) | [Name] | [Signature] | [Date] |
| [Additional Approver if required] | [Name] | [Signature] | [Date] |

---

## 10. References

### 10.1 Regulatory References

| Reference | Document | Clause / Section |
|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11.6 — Security Operations Centre |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11.7 — Security Incident Reporting |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11.1–11.5 — Technology Risk Governance |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 9 — Security of Personal Data |
| NACSA | National Cyber Security Policy | [Applicable Section] |

### 10.2 Standards and Frameworks

| Reference | Description |
|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements |
| ISO/IEC 27035:2016 | Information Security Incident Management |
| NIST SP 800-61 Rev. 2 | Computer Security Incident Handling Guide |
| MITRE ATT&CK Framework v[x.x] | Adversarial Tactics, Techniques, and Common Knowledge |
| NIST Cybersecurity Framework (CSF) 2.0 | Detect, Respond, and Recover functions |

### 10.3 Internal Documents

| Document Title | Document ID | Version |
|---|---|---|
| Information Security Policy | [Doc ID] | [Version] |
| Incident Response Policy | [Doc ID] | [Version] |
| Incident Response Plan | [Doc ID] | [Version] |
| Technology Risk Management Framework | [Doc ID] | [Version] |
| Data Classification and Handling Policy | [Doc ID] | [Version] |
| Business Continuity Plan | [Doc ID] | [Version] |
| Vendor and Third-Party Risk Management Policy | [Doc ID] | [Version] |
| SOC Analyst Playbooks (library) | [Doc ID] | [Version] |

---

## 11. Appendices

### Appendix A — Subsidiaries and Affiliates in Scope

*List all [Organization Name] entities (subsidiaries, affiliates, or branches) to which these SOC Operational Procedures apply. Specify any entities with modified or limited applicability and the rationale.*

| Entity Name | Jurisdiction | Applicability | Notes |
|---|---|---|---|
| [Subsidiary / Affiliate Name] | [Jurisdiction] | Full / Partial | [Notes] |
| [Subsidiary / Affiliate Name] | [Jurisdiction] | Full / Partial | [Notes] |

---

### Appendix B — Log Source Inventory

*Maintain the complete and current inventory of log sources feeding into the SOC SIEM. This register should be updated whenever a new log source is onboarded or decommissioned. Include the date of last validation to confirm logs are flowing correctly.*

| Log Source | Type | Platform / Technology | SIEM Connector | Ingestion Status | Last Validated | Owner |
|---|---|---|---|---|---|---|
| [Source Name] | [Endpoint / Network / Application / Cloud / Identity] | [Technology Name] | [Connector/Method] | Active / Degraded / Inactive | [Date] | [Team] |
| [Source Name] | [Type] | [Technology Name] | [Connector/Method] | Active / Degraded / Inactive | [Date] | [Team] |

**Coverage Gap Register:**

| Gap Identified | Asset / System Type | Risk Rating | Remediation Plan | Target Date |
|---|---|---|---|---|
| [Description of gap] | [Asset type] | High / Medium / Low | [Plan] | [Date] |

---

### Appendix C — Incident Classification Matrix

*Provide a detailed classification matrix to guide analysts in assigning the correct severity to a declared security incident. This matrix should align with the organisation's Incident Response Plan.*

| Criterion | Critical (P1) | High (P2) | Medium (P3) | Low (P4) |
|---|---|---|---|---|
| **Data Breach (Confirmed)** | PII / financial data confirmed exfiltrated | Suspected exfiltration; investigation in progress | Potential access to sensitive data, no exfiltration confirmed | Policy violation; no sensitive data involved |
| **System Impact** | Core banking / critical infrastructure down or compromised | Important business system compromised | Non-critical system affected | Single endpoint; no lateral movement |
| **Regulatory Trigger** | BNM reporting obligation triggered | BNM reporting likely | BNM reporting unlikely | No regulatory trigger |
| **Ransomware** | Active encryption in progress | Ransomware artefacts detected; no encryption confirmed | Ransomware email delivered; no execution | Ransomware blocked by AV; no spread |
| **Privileged Access Compromise** | Domain Admin / CISO-level account compromised | Senior administrator account compromised | Standard privileged account anomaly | Low-privilege account policy violation |
| **Customer Impact** | Customers directly impacted or at risk | Potential customer impact | Internal impact only | No customer impact |

---

### Appendix D — Use Case Register

*Maintain the complete use case catalogue in this appendix. The summary table in Section 6 provides an overview; the full register provides per-use-case detail for operational and audit purposes.*

| Use Case ID | Use Case Name | MITRE Tactic | MITRE Technique ID | Detection Logic Summary | Severity | FP Rate (Last Quarter) | Last Tuned | Status | Owner |
|---|---|---|---|---|---|---|---|---|---|
| UC-001 | [Use Case Name] | [Tactic] | [T####] | [Brief logic description] | Critical / High / Medium / Low | [%] | [Date] | Active / Retired / In Development | [Tier 2 Analyst Name] |
| UC-002 | [Use Case Name] | [Tactic] | [T####] | [Brief logic description] | [Severity] | [%] | [Date] | [Status] | [Owner] |

---

### Appendix E — False Positive Register

*Maintain a running register of confirmed false positives to track patterns and drive tuning decisions.*

| FP ID | Date Identified | Use Case / Alert Name | Root Cause | Source Asset / User | Tuning Action Taken | Tuning Date | Approved By |
|---|---|---|---|---|---|---|---|
| FP-001 | [Date] | [Alert Name] | [Root cause description] | [Asset or User] | [Suppression rule / threshold change / whitelist] | [Date] | [Shift Lead / SOC Manager] |
| FP-002 | [Date] | [Alert Name] | [Root cause] | [Asset or User] | [Action] | [Date] | [Approver] |

---

### Appendix F — SOC Escalation Contact Directory

*Maintain current contact details for all escalation points. This appendix must be reviewed at every quarterly review cycle and updated immediately upon personnel changes. Access to this appendix must be restricted to SOC personnel.*

> **Access Restriction:** This appendix contains personal contact information. Access is restricted to SOC Manager, Shift Leads, and HR. Do not embed personal mobile numbers in shared document repositories without appropriate access controls.

| Role | Name | Primary Contact | Secondary Contact | Escalation Threshold |
|---|---|---|---|---|
| SOC Manager | [Name] | [Phone] | [Email / Alt phone] | P1 and P2 incidents; SLA breaches |
| CISO | [Name] | [Phone] | [Email / Alt phone] | P1 incidents; regulatory triggers |
| IR Team Lead | [Name] | [Phone] | [Email / Alt phone] | P1 and P2 incident declarations |
| Tier 3 / Senior Analyst (On-Call) | [Name] | [Phone] | [Email] | P1 and complex P2 escalations |
| IT Operations Lead | [Name] | [Phone] | [Email] | System isolation / containment actions |
| Legal / Data Protection Officer | [Name] | [Phone] | [Email] | Data breach notification requirements |
| BNM Reporting Contact | [Contact / Portal] | [Reporting mechanism] | [Alternate] | As per RMiT Clause 11.7 |
| MSSP Escalation (if applicable) | [MSSP Contact Name] | [Phone] | [Email] | MSSP SLA breach; P1 incidents |

---

### Appendix G — SOC Analyst Playbook Index

*Maintain an index of all approved SOC analyst playbooks. Full playbooks are stored in [designated location] and referenced here. Playbooks must be reviewed and updated following each major incident or significant use case change.*

| Playbook ID | Playbook Name | Applicable Alert / Use Case | Version | Last Updated | Owner |
|---|---|---|---|---|---|
| PB-001 | Ransomware Response Playbook | UC-[###], UC-[###] | [x.x] | [Date] | [Owner] |
| PB-002 | Phishing Investigation Playbook | UC-[###] | [x.x] | [Date] | [Owner] |
| PB-003 | Brute Force / Credential Attack Playbook | UC-[###] | [x.x] | [Date] | [Owner] |
| PB-004 | Data Exfiltration Playbook | UC-[###] | [x.x] | [Date] | [Owner] |
| PB-005 | Insider Threat Playbook | UC-[###] | [x.x] | [Date] | [Owner] |
| PB-006 | Cloud Security Incident Playbook | UC-[###] | [x.x] | [Date] | [Owner] |
| PB-007 | BNM Regulatory Notification Playbook | All P1 / Major Incidents | [x.x] | [Date] | [Owner] |
| PB-[###] | [Playbook Name] | [Applicable Use Cases] | [Version] | [Date] | [Owner] |

---

### Appendix H — SOC KPI Dashboard Definition

*Define the key performance indicators (KPIs) that the SOC tracks and reports. These metrics should be captured automatically by the SIEM/SOAR platform and reported to the CISO and relevant governance committees on the defined frequency.*

| KPI | Definition | Target | Measurement Source | Reporting Frequency |
|---|---|---|---|---|
| Mean Time to Detect (MTTD) | Average time from security event occurrence to alert generation | ≤ [X minutes] | SIEM | Monthly |
| Mean Time to Acknowledge (MTTA) | Average time from alert generation to analyst acknowledgement | ≤ [X minutes] per severity | Case management system | Monthly |
| Mean Time to Respond (MTTR) | Average time from alert acknowledgement to initial response action | As per SLA table (Section 8.3) | Case management system | Monthly |
| Mean Time to Contain (MTTC) | Average time from incident declaration to initial containment | ≤ [X hours] per severity | Incident records | Monthly |
| False Positive Rate | Percentage of alerts dispositioned as FP out of total alerts | ≤ [X]% | SIEM / Case management | Monthly |
| SLA Compliance Rate | Percentage of alerts handled within defined SLA timelines | ≥ [X]% | Case management system | Monthly |
| Alert Volume (by severity) | Total number of alerts generated per severity level | Trend analysis | SIEM | Monthly |
| Use Case Coverage (MITRE ATT&CK) | Percentage of MITRE ATT&CK tactics covered by active use cases | ≥ [X]% | Use Case Register | Quarterly |
| Open Cases (Ageing) | Number of open cases older than [X] days | 0 cases beyond SLA | Case management system | Weekly |
| SOC Availability | Uptime of SOC monitoring capability | ≥ 99.5% | SIEM platform monitoring | Monthly |

---

*End of Document*

---

*This document template was prepared in accordance with BNM Risk Management in Technology (RMiT) Policy requirements, specifically Clause 11.6. All placeholder values indicated in [brackets] must be completed by the document owner prior to formal approval and implementation.*