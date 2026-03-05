# Threat Hunting Program

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Head of Cyber Security / Head of Technology Risk] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Cyber Security / Information Security / Technology Risk]

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel and must not be disclosed, reproduced, or distributed without prior written approval from the document owner. Unauthorized disclosure may result in disciplinary action and/or regulatory sanction.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Scope and Applicability](#3-scope-and-applicability)
4. [Threat Hunting Methodologies](#4-threat-hunting-methodologies)
5. [Threat Hunting Process Flow](#5-threat-hunting-process-flow)
6. [Threat Hunting Playbooks](#6-threat-hunting-playbooks)
7. [Roles and Responsibilities (RACI)](#7-roles-and-responsibilities-raci)
8. [Tools and Systems](#8-tools-and-systems)
9. [Escalation Procedures](#9-escalation-procedures)
10. [Metrics and Performance Indicators](#10-metrics-and-performance-indicators)
11. [Integration with Security Operations](#11-integration-with-security-operations)
12. [Review and Update History](#12-review-and-update-history)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section should articulate the primary objectives of the Threat Hunting Program, establishing its intent within the organization's broader cybersecurity posture and regulatory obligations.*

This Threat Hunting Program ("Program") establishes the structured, proactive framework through which [Organization Name] identifies, investigates, and mitigates advanced threats that may evade existing automated detection controls. The Program is designed to supplement reactive security monitoring capabilities by enabling skilled security analysts to proactively search for indicators of compromise (IoCs), tactics, techniques, and procedures (TTPs) attributable to sophisticated threat actors operating within or targeting the organization's technology environment.

The objectives of this Program are to:

- Proactively detect advanced persistent threats (APTs), insider threats, and zero-day exploits that circumvent automated detection
- Reduce dwell time of undetected threats within [Organization Name]'s technology infrastructure
- Strengthen the organization's threat intelligence cycle by feeding hunt findings back into detection engineering
- Demonstrate compliance with Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy requirements, specifically Clause 11.18
- Mature the organization's Security Operations Center (SOC) capabilities through continuous, hypothesis-driven investigation
- Build institutional knowledge of adversary behaviour relevant to the Malaysian financial sector

### 1.2 Document Objectives

This document:

- Defines the mandate, scope, and governance of the Threat Hunting Program
- Establishes methodologies and repeatable processes for conducting threat hunts
- Provides playbooks for common and sector-relevant threat scenarios
- Specifies tools, data sources, and integration points with security operations
- Assigns roles, responsibilities, and accountability for program execution
- Defines escalation pathways and response triggers
- Establishes program metrics and continuous improvement mechanisms

---

## 2. Regulatory Context

*This section should reference all applicable regulatory frameworks, policy clauses, and industry standards that mandate or inform this program. Accuracy of clause references must be verified against the current version of each regulation.*

### 2.1 Bank Negara Malaysia (BNM) — Risk Management in Technology (RMiT)

This Program is established in direct response to and in alignment with the following provisions of the **BNM Risk Management in Technology (RMiT) Policy**:

| Clause | Requirement Summary | Relevance to This Document |
|---|---|---|
| **11.18** | Financial institutions shall implement proactive threat monitoring measures, including threat hunting activities, to detect advanced and persistent threats that may evade standard monitoring controls | Primary mandate for this program |
| **11.1 – 11.5** | General security operations and monitoring requirements | Context for SOC integration |
| **11.14 – 11.17** | Security event monitoring, SIEM, and log management requirements | Data sources for threat hunting |
| **11.19** | Cyber threat intelligence utilization | Integration with hunt hypothesis generation |
| **10.1 – 10.5** | Incident management and response | Escalation and handoff procedures |

### 2.2 Related Regulatory and Standards Frameworks

| Framework | Relevant Sections | Application |
|---|---|---|
| **BNM PDPA / Personal Data Protection Act 2010** | Data handling obligations | Handling of personal data encountered during hunts |
| **NACSA Cybersecurity Framework** | Detect function requirements | Alignment with national cybersecurity posture |
| **MITRE ATT&CK Framework** | All tactics and techniques | Primary adversary behavior reference for hunt hypotheses |
| **NIST Cybersecurity Framework (CSF)** | DE.CM, DE.AE | Detection and analysis alignment |
| **ISO/IEC 27001:2022** | Annex A 8.16, 5.7 | Monitoring and threat intelligence controls |
| **PCI DSS v4.0** | Requirement 10, 11 | Where applicable to cardholder data environments |

### 2.3 Internal Policy References

| Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Document ID] | Parent policy |
| Cybersecurity Incident Response Plan | [Document ID] | Escalation and handoff |
| Threat Intelligence Program | [Document ID] | Feed into hunt hypotheses |
| Security Operations Center (SOC) Procedures | [Document ID] | Operational integration |
| Vulnerability Management Procedure | [Document ID] | Coordinated remediation |
| Data Classification Policy | [Document ID] | Evidence handling |
| Access Control Policy | [Document ID] | Privileged access for hunt tools |

---

## 3. Scope and Applicability

*This section should precisely define what is in and out of scope for the Threat Hunting Program, including the systems, environments, data types, entities, and personnel covered.*

### 3.1 In Scope

The Threat Hunting Program applies to all technology assets, environments, and data under the custodianship of [Organization Name], including but not limited to:

**Infrastructure and Environments:**

- [x] Core banking systems and related application stacks
- [x] Internet-facing perimeter (DMZ, web application infrastructure)
- [x] Internal corporate network and all connected endpoints
- [x] Cloud environments ([Cloud Provider(s)] — [e.g., AWS, Azure, GCP])
- [x] Hybrid environments and interconnected third-party gateways
- [x] Operational Technology (OT) / Industrial Control Systems (ICS) where applicable
- [x] Data centres: [Primary Data Centre Name], [Disaster Recovery Site Name]
- [x] Remote access infrastructure (VPN, Citrix, RDP gateways)
- [x] Payment processing systems and SWIFT connectivity

**Data Sources:**

- [x] Security Information and Event Management (SIEM) platform logs
- [x] Endpoint Detection and Response (EDR) telemetry
- [x] Network flow data (NetFlow, sFlow, IPFIX)
- [x] DNS query logs
- [x] Proxy and web gateway logs
- [x] Email gateway and anti-phishing platform logs
- [x] Identity and Access Management (IAM) and Active Directory logs
- [x] Cloud access security broker (CASB) and cloud audit trails
- [x] Firewall and IDS/IPS logs
- [x] Privileged Access Management (PAM) session recordings

**Organizational Entities:**

- [x] [Organization Name] — all business units and departments
- [x] Wholly owned subsidiaries: [List subsidiaries, if applicable]
- [x] Shared service entities: [List shared services, if applicable]

### 3.2 Out of Scope

The following are explicitly excluded unless otherwise authorized by the [Head of Cyber Security] and documented via a formal hunt scope extension:

- Third-party vendor systems not directly integrated into [Organization Name]'s infrastructure
- Customer-owned devices and external networks
- Systems covered by separate, dedicated security arrangements (e.g., outsourced BPO environments not hosting regulated data)
- [Other exclusions as applicable]

### 3.3 Applicability

| Audience | Applicability |
|---|---|
| Threat Hunting Team / Threat Analysts | Mandatory — primary executors |
| SOC Analysts (Tier 2 and above) | Mandatory — integration and handoff |
| Incident Response Team | Mandatory — escalation recipients |
| Threat Intelligence Team | Mandatory — hypothesis input and enrichment |
| IT / Infrastructure Teams | As required — access provisioning and evidence support |
| CISO / Head of Cyber Security | Mandatory — governance and reporting |
| Third-Party Managed Security Service Providers (MSSPs) | As contractually defined |

---

## 4. Threat Hunting Methodologies

*This section should describe the theoretical and practical methodologies that underpin all hunting activities. Each methodology should be explained with sufficient detail to guide analysts in applying it contextually.*

### 4.1 Methodology Overview

[Organization Name] adopts a multi-methodology approach to threat hunting, applying the most appropriate technique based on available threat intelligence, the nature of the target environment, and the maturity of the hypothesis being investigated.

### 4.2 Intelligence-Driven Hunting

*Intelligence-driven hunts are initiated based on specific, actionable threat intelligence — such as IOCs, TTPs, or actor profiles — received from internal or external sources.*

**Trigger sources:**
- BNM Financial Intelligence Unit (FIU) advisories
- NACSA / MyCERT threat bulletins
- FS-ISAC sector intelligence feeds
- Commercial threat intelligence subscriptions: [Platform Name]
- MITRE ATT&CK group profiles relevant to the financial sector
- Internal Threat Intelligence team outputs

**Process:**
1. Receive and triage intelligence input
2. Extract relevant IOCs and TTPs
3. Map TTPs to MITRE ATT&CK techniques
4. Identify data sources likely to contain evidence of associated activity
5. Execute structured search across identified data sources
6. Document findings and feed back into detection engineering

### 4.3 Hypothesis-Driven Hunting

*Hypothesis-driven hunting begins with a specific, testable proposition about attacker behavior, generated by analyst expertise, threat modeling, or environmental knowledge.*

**Hypothesis formulation criteria:**
A valid hunt hypothesis must:
- Reference a specific attacker behavior or TTP
- Identify the expected artifact or evidence in a specific data source
- Be falsifiable based on available telemetry

**Hypothesis template:**
> "If [threat actor / technique] is present in our environment, we would expect to observe [observable artifact / behavior] in [specific data source / system], detectable by [query / analysis method]."

**Example hypotheses:**
| # | Hypothesis | MITRE Technique | Data Source |
|---|---|---|---|
| H-001 | Credential dumping via LSASS memory access is occurring on privileged workstations | T1003.001 | EDR telemetry |
| H-002 | Lateral movement via PsExec or SMB is active within the banking VLAN | T1021.002 | Network flow + Windows event logs |
| H-003 | Persistence mechanisms using scheduled tasks have been deployed on core banking servers | T1053.005 | Windows event logs / SIEM |
| H-004 | Data exfiltration via DNS tunneling is occurring from internal hosts | T1048.003 | DNS query logs |
| H-[XXX] | [Hypothesis] | [Technique ID] | [Data Source] |

### 4.4 Analytics-Driven Hunting (Anomaly-Based)

*Analytics-driven hunting uses statistical analysis, behavioral baselines, and machine learning outputs to surface anomalies that may indicate threat activity, without a prior specific hypothesis.*

**Approach:**
- Baseline normal behavior for users, hosts, and network flows during defined observation windows
- Surface statistical outliers using SIEM analytics, UEBA platforms, or custom queries
- Triage anomalies to determine whether they represent genuine threats or benign activity
- Document triage outcomes and tune detection logic accordingly

**Key analytics dimensions:**
- User behavior anomalies (login times, access volumes, geographic anomalies)
- Host behavior anomalies (process creation, network connections, file modifications)
- Network anomalies (beaconing patterns, large data transfers, unusual protocols)
- Application anomalies (query volumes, privilege escalations, configuration changes)

### 4.5 Situational Awareness Hunting

*Situational awareness hunting involves periodic sweeps of the environment to establish current state knowledge and identify unexpected or unauthorized artifacts without a specific threat in mind.*

**Activities include:**
- Inventory validation of running processes, services, and scheduled tasks across critical systems
- Review of privileged account activity and dormant accounts
- Identification of unauthorized software, tools, or scripts
- Review of outbound connection patterns from sensitive network segments

---

## 5. Threat Hunting Process Flow

*This section defines the end-to-end procedural workflow for conducting a threat hunt, from initiation through to closure and knowledge transfer. Process steps must be followed for all formally declared hunts.*

### 5.1 High-Level Process Overview

```
[Trigger / Input]
       │
       ▼
[1. Hunt Initiation & Scoping]
       │
       ▼
[2. Intelligence Enrichment & Hypothesis Formulation]
       │
       ▼
[3. Data Collection & Environment Access]
       │
       ▼
[4. Hunt Execution & Analysis]
       │
       ▼
[5. Finding Documentation]
       │
       ├─── No Findings ──► [6a. Negative Finding Report & Detection Gap Analysis]
       │
       └─── Findings ──────► [6b. Escalation to Incident Response]
                                        │
                                        ▼
                              [7. Detection Engineering Feedback]
                                        │
                                        ▼
                              [8. Hunt Closure & Lessons Learned]
```

### 5.2 Step 1 — Hunt Initiation and Scoping

**Trigger sources for a new hunt:**

| Trigger Type | Example | Priority |
|---|---|---|
| Regulatory / Intelligence advisory | BNM advisory, NACSA bulletin | Critical |
| Threat intelligence feed | New APT group targeting FS sector | High |
| Incident response referral | Suspicious activity escalated from SOC | High |
| Scheduled hunt | Quarterly hypothesis-driven hunt | Medium |
| Red team / penetration test findings | Identified gap in detection coverage | Medium |
| Management directive | Board or CISO-directed hunt | High |
| Analyst-initiated | Analyst observation during routine work | Low–Medium |

**Initiation requirements:**
- Hunt Lead completes **Hunt Initiation Form** (Appendix A)
- Defines: Objective, scope boundaries, time frame, data sources, success criteria
- Obtains approval from [Head of Cyber Security / SOC Manager] for hunts exceeding [X] analyst-days or requiring access to sensitive data sources
- Records hunt in the **Threat Hunt Register** (Appendix B)

### 5.3 Step 2 — Intelligence Enrichment and Hypothesis Formulation

- Threat Intelligence team provides relevant context: known actor TTPs, sector-specific IOCs, environmental risk factors
- Hunt Lead formalizes one or more testable hypotheses per Section 4.3
- Hypotheses are documented and peer-reviewed by a second analyst before execution begins
- MITRE ATT&CK Navigator is used to map hypotheses to technique coverage

### 5.4 Step 3 — Data Collection and Environment Access

- Hunt Lead identifies all required data sources and confirms availability and coverage periods
- Requests are made to relevant data custodians for access where not already provisioned
- Access must be granted via [PAM platform] and logged; no standing privileged access for hunt activities outside approved windows
- Data collection scope is reviewed against Privacy and Data Classification obligations (refer to Data Classification Policy [Document ID])
- Data collection/query timestamps are recorded for evidentiary chain-of-custody

**Data readiness checklist:**

| Data Source | Coverage Period | Owner | Access Confirmed | Notes |
|---|---|---|---|---|
| SIEM (historical logs) | [X] days | [SOC Team] | ☐ | |
| EDR telemetry | [X] days | [Endpoint Team] | ☐ | |
| Network flow | [X] days | [Network Team] | ☐ | |
| DNS logs | [X] days | [Network Team] | ☐ | |
| [Additional sources] | | | ☐ | |

### 5.5 Step 4 — Hunt Execution and Analysis

- Analysts execute structured queries, scripts, and manual analysis against identified data sources
- All queries and analysis scripts are documented in the hunt workbook (Appendix C)
- Pivot investigations are initiated when initial queries surface suspicious artifacts
- Findings, anomalies, and confirmed negatives are logged in real time
- Collaborative analysis sessions are held [daily / as required] during active hunt periods
- Hunt Lead maintains a running timeline of significant findings

**Prohibited activities during hunt execution:**
- Analysts must not access customer personal data beyond what is necessary and proportionate to the hunt objective
- No unauthorized modification of system configurations or evidence
- No direct interaction with suspected malicious infrastructure without explicit authorization from the [Head of Cyber Security] and formal isolation controls

### 5.6 Step 5 — Finding Documentation

All findings — positive and negative — must be formally documented:

| Element | Description |
|---|---|
| Finding ID | Unique identifier (e.g., HF-2024-001) |
| Hunt ID | Reference to parent hunt |
| MITRE Technique | Applicable ATT&CK technique(s) |
| Severity | Critical / High / Medium / Low / Informational |
| Description | Clear narrative of the finding |
| Evidence | References to log entries, screenshots, query outputs |
| Affected assets | Hostnames, IPs, user accounts |
| Recommended action | Escalate / Remediate / Monitor / Tune detection |
| Status | Open / Escalated / Closed |

### 5.7 Step 6a — Negative Finding and Detection Gap Analysis

When a hunt concludes with no positive findings:

- Document the negative finding formally — absence of evidence is a valid and valuable outcome
- Assess whether negative finding reflects genuine absence of threat activity or a gap in telemetry/coverage
- Identify detection coverage gaps revealed by the hunt methodology
- Submit detection engineering improvement recommendations

### 5.8 Step 6b — Escalation to Incident Response

When confirmed or highly suspected threat activity is identified:

- Hunt Lead immediately notifies the [SOC Manager / Incident Response Lead]
- A formal incident ticket is raised per the Cybersecurity Incident Response Plan ([Document ID])
- Hunt evidence package is transferred to the IR team with full chain-of-custody documentation
- Hunt Lead remains available as subject matter expert during IR investigation
- Refer to Section 9 (Escalation Procedures) for detailed thresholds and contacts

### 5.9 Step 7 — Detection Engineering Feedback

- Hunt findings (positive and negative) are submitted to the Detection Engineering function
- New detection rules, SIEM queries, or EDR response actions are developed based on validated findings
- Newly deployed detections are referenced in the hunt closure report
- This step closes the proactive-to-reactive detection improvement loop

### 5.10 Step 8 — Hunt Closure and Lessons Learned

- Hunt Lead completes the **Hunt Closure Report** (Appendix D)
- Lessons learned session held within [5] business days of hunt closure
- Actions from lessons learned are assigned with owners and due dates
- Hunt outcomes are reported to [CISO / Head of Cyber Security] in the monthly/quarterly cyber security report
- Hunt Register entry is updated to Closed status

---

## 6. Threat Hunting Playbooks

*This section contains or references specific playbooks for high-priority or recurring threat scenarios. Each playbook provides a structured, repeatable approach to hunting for a specific threat type.*

### 6.1 Playbook Index

| Playbook ID | Threat Scenario | MITRE Tactics | Priority | Status |
|---|---|---|---|---|
| PB-001 | Credential Theft and Lateral Movement | Credential Access, Lateral Movement | Critical | [Active / Draft] |
| PB-002 | Ransomware Precursor Activity | Execution, Persistence, Lateral Movement | Critical | [Active / Draft] |
| PB-003 | Data Exfiltration via Covert Channels | Exfiltration | Critical | [Active / Draft] |
| PB-004 | Insider Threat — Privileged User Abuse | Collection, Exfiltration | High | [Active / Draft] |
| PB-005 | Business Email Compromise (BEC) Indicators | Initial Access, Collection | High | [Active / Draft] |
| PB-006 | Supply Chain Compromise Indicators | Initial Access, Execution | High | [Active / Draft] |
| PB-007 | Living-off-the-Land (LotL) Techniques | Defense Evasion, Execution | High | [Active / Draft] |
| PB-[XXX] | [Threat Scenario] | [Tactic(s)] | [Priority] | [Status] |

### 6.2 Playbook Template Structure

*Each playbook must follow the standard structure below. Completed playbooks are maintained as separate controlled documents and referenced from this index.*

---

**Playbook: PB-001 — Credential Theft and Lateral Movement**

| Field | Detail |
|---|---|
| **Playbook ID** | PB-001 |
| **Version** | [Version] |
| **Threat Scenario** | Credential theft via LSASS dumping or Kerberoasting, followed by lateral movement to high-value targets |
| **MITRE ATT&CK Techniques** | T1003.001 (LSASS Memory), T1558.003 (Kerberoasting), T1021.002 (SMB/Windows Admin Shares), T1550.002 (Pass the Hash) |
| **Risk to Organization** | Unauthorized access to privileged systems, core banking applications, and sensitive financial data |
| **Estimated Hunt Duration** | [X] analyst-days |
| **Data Sources Required** | EDR telemetry, Windows Security Event Logs, Kerberos/AD logs, Network flow |

**Hypothesis:**
> If a threat actor has compromised credentials within our environment, we would expect to observe LSASS memory access from non-standard processes, Kerberos ticket requests for multiple SPNs from a single account, and subsequently, lateral movement using SMB to sensitive hosts.

**Detection Queries:**

| Query ID | Platform | Query / Logic | Expected Result |
|---|---|---|---|
| Q-001-01 | EDR | Process accessing lsass.exe memory NOT IN [approved list] | Unauthorized LSASS access |
| Q-001-02 | SIEM | Event ID 4769 — Multiple Kerberos TGS requests from single user within 60s | Kerberoasting activity |
| Q-001-03 | SIEM | Event ID 4648 — Explicit credential logon from unexpected host | Pass-the-hash / credential reuse |
| Q-001-04 | Network Flow | SMB (TCP 445) lateral connections from non-admin workstations to servers | Lateral movement |

**Investigation Steps:**
1. Execute Query Q-001-01; review results against known administration tools and processes
2. For any flagged LSASS access events, extract: process name, hash, parent process, user context, timestamp, host
3. Cross-reference flagged processes against threat intelligence feeds for known malicious hashes
4. Execute Query Q-001-02; identify accounts making anomalous SPN requests
5. Pivot on identified accounts: review full authentication history for past [X] days
6. Execute Q-001-03 and Q-001-04; map SMB connections from suspicious accounts
7. Identify destination hosts; assess sensitivity and data classification of destination systems
8. If compromise confirmed, escalate to IR per Section 9

**Escalation Threshold:** Escalate immediately if LSASS access is confirmed from an unsigned process, or if lateral movement reaches Tier 0/1 systems.

**Artifacts to Collect:**
- Process memory dumps (where legally and operationally permissible)
- EDR telemetry exports for affected hosts
- Authentication log exports for affected accounts
- Network flow captures

---

**Playbook: PB-002 — Ransomware Precursor Activity**

*Complete playbook content to be developed by [Lead Threat Analyst] and reviewed by [Head of Cyber Security]. Reference MITRE ATT&CK techniques: T1486 (Data Encrypted for Impact), T1490 (Inhibit System Recovery), T1562.001 (Disable or Modify Tools), T1083 (File and Directory Discovery), T1135 (Network Share Discovery).*

**[Playbook to be completed — see Appendix C for template]**

---

*Additional playbooks (PB-003 through PB-[XXX]) are maintained as separate controlled documents in the [Document Management System / SharePoint path]. Each is version-controlled and subject to the same review cycle as this Program document.*

---

## 7. Roles and Responsibilities (RACI)

*This section defines accountability and responsibility for all key activities within the Threat Hunting Program. The RACI matrix assigns one of the following designations: Responsible (R), Accountable (A), Consulted (C), or Informed (I).*

### 7.1 Key Roles

| Role | Description |
|---|---|
| **CISO / Chief Information Security Officer** | Senior executive accountable for the overall cybersecurity program |
| **Head of Cyber Security** | Operational head responsible for the security operations function |
| **SOC Manager** | Manager of the Security Operations Center and hunt team |
| **Hunt Lead / Senior Threat Analyst** | Experienced analyst who plans, coordinates, and oversees individual hunt engagements |
| **Threat Analyst** | Analyst who executes hunt queries, analysis, and playbooks |
| **Threat Intelligence Analyst** | Provides threat intelligence enrichment and hypothesis input |
| **Detection Engineer** | Develops and maintains SIEM rules and EDR detection logic |
| **Incident Response Lead** | Leads formal incident response when hunts surface confirmed threats |
| **IT Infrastructure Team** | Provides access, evidence, and technical support during hunts |
| **Data/System Owner** | Accountable for specific systems or data that are in scope for a hunt |
| **Risk Management** | Reviews significant findings from a risk governance perspective |
| **Chief Risk Officer (CRO)** | Receives escalation of material findings |
| **Board / Risk Committee** | Governance oversight and reporting recipient |

### 7.2 RACI Matrix

| Activity | CISO | Head of Cyber Security | SOC Manager | Hunt Lead | Threat Analyst | Threat Intel Analyst | Detection Engineer | IR Lead | IT Infra | Risk Management |
|---|---|---|---|---|---|---|---|---|---|---|
| **Program governance and oversight** | A | R | C | I | I | I | I | I | I | C |
| **Annual program review and approval** | A | R | C | I | I | I | I | I | I | C |
| **Hunt initiation and scoping** | I | A | R | R | C | C | C | I | C | I |
| **Hypothesis formulation** | I | I | C | A/R | R | R | C | I | I | I |
| **Intelligence enrichment** | I | I | C | C | C | A/R | I | I | I | I |
| **Data access provisioning** | I | I | C | R | I | I | I | I | A/R | I |
| **Hunt execution — query development** | I | I | I | A | R | C | C | I | I | I |
| **Hunt execution — analysis** | I | I | C | A | R | C | I | I | I | I |
| **Finding documentation** | I | I | I | A | R | C | C | I | I | I |
| **Escalation decision (severity threshold)** | I | A | R | R | C | I | I | C | I | I |
| **IR handoff and coordination** | I | C | R | R | C | C | I | A/R | C | I |
| **Detection engineering feedback** | I | I | C | R | C | C | A/R | I | I | I |
| **Hunt closure reporting** | I | A | R | R | C | C | C | I | I | I |
| **Executive / board reporting** | R | R | C | C | I | I | I | I | I | C |
| **Playbook development and review** | I | A | R | R | R | C | C | I | I | I |
| **Program metrics tracking** | I | C | A | R | C | I | I | I | I | C |
| **Vendor / tool management** | I | A | R | C | C | I | C | I | R | I |
| **Staff training and competency** | I | A | R | R | C | C | C | I | I | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 7.3 Minimum Staffing Requirements

| Role | Minimum Headcount | Required Qualifications |
|---|---|---|
| Hunt Lead / Senior Threat Analyst | [1] | [e.g., GCIA, GCFA, GCTI, or equivalent; minimum 3 years SOC/IR experience] |
| Threat Analyst | [2] | [e.g., Security+ or equivalent; minimum 1 year SOC experience] |
| Threat Intelligence Analyst | [1] | [e.g., GCTI or equivalent; CTI experience] |
| Detection Engineer | [1] | [SIEM administration, SIEM query language proficiency] |

*Where internal headcount is insufficient, [Organization Name] may engage a qualified Managed Security Service Provider (MSSP) for specific functions, subject to MSSP oversight procedures and contractual security requirements.*

---

## 8. Tools and Systems

*This section inventories the tools, platforms, and data sources that support threat hunting operations. All tools must be approved through the organization's technology risk assessment process before use in production environments.*

### 8.1 Core Platform Inventory

| Tool Category | Tool / Platform | Vendor | Version | Purpose | Data Sensitivity |
|---|---|---|---|---|---|
| **SIEM** | [SIEM Platform Name] | [Vendor] | [Version] | Primary log aggregation, correlation, and hunt query execution | High |
| **EDR** | [EDR Platform Name] | [Vendor] | [Version] | Endpoint telemetry, process visibility, behavioral detection | High |
| **Threat Intelligence Platform (TIP)** | [TIP Name] | [Vendor] | [Version] | IOC management, threat actor profiling, intelligence enrichment | High |
| **UEBA / Behavioral Analytics** | [UEBA Platform] | [Vendor] | [Version] | Anomaly detection, entity behavior baselining | High |
| **Network Traffic Analysis (NTA)** | [NTA Tool] | [Vendor] | [Version] | Network flow analysis, protocol-level visibility | High |
| **Forensic Toolset** | [e.g., Velociraptor, KAPE, Axiom] | [Vendor] | [Version] | Live forensic collection during hunt escalation | High |
| **Threat Intelligence Feeds** | [Feed Provider(s)] | [Vendor] | N/A | IOC and TTP enrichment | Medium |
| **Case Management** | [Platform Name] | [Vendor] | [Version] | Hunt tracking, finding documentation, workflow | Medium |
| **Collaboration / Hunt Workbook** | [Platform Name] | [Vendor] | [Version] | Analyst collaboration, query documentation | Medium |
| **MITRE ATT&CK Navigator** | ATT&CK Navigator | MITRE | [Version] | Technique mapping, coverage visualization | Low |
| **Vulnerability Scanner** | [Tool Name] | [Vendor] | [Version] | Asset enumeration validation | Medium |
| **Sandbox / Malware Analysis** | [Tool Name] | [Vendor] | [Version] | Static and dynamic analysis of suspicious artifacts | High |

### 8.2 Data Sources and Retention

| Data Source | Collection Method | Retention Period | Availability for Hunting |
|---|---|---|---|
| Windows Security Event Logs | [SIEM Agent / WEF] | [X] days / months | [Real-time / [X]-day historical] |
| Linux / Unix Syslog | [SIEM Agent] | [X] days / months | [Real-time / [X]-day historical] |
| Network Flow (NetFlow/sFlow) | [Flow Collector] | [X] days | [Real-time / [X]-day historical] |
| DNS Query Logs | [DNS platform / SIEM] | [X] days | [Real-time / [X]-day historical] |
| Proxy / Web Gateway Logs | [Proxy platform / SIEM] | [X] days | [Real-time / [X]-day historical] |
| Email Gateway Logs | [Email platform / SIEM] | [X] days | [Real-time / [X]-day historical] |
| Active Directory / LDAP Logs | [SIEM Agent] | [X] days | [Real-time / [X]-day historical] |
| Cloud Audit Logs (e.g., CloudTrail, Azure Monitor) | [Cloud SIEM integration] | [X] days | [Real-time / [X]-day historical] |
| EDR Telemetry | [EDR Console] | [X] days | [Real-time / [X]-day historical] |
| Firewall / IDS/IPS Logs | [SIEM Agent] | [X] days | [Real-time / [X]-day historical] |
| PAM Session Logs | [PAM Platform] | [X] days | [On-request] |
| Application Logs (Core Banking) | [SIEM Agent / API] | [X] days | [Real-time / [X]-day historical] |

### 8.3 Tool Access Controls

- All hunt tooling access is provisioned on a **need-to-use basis**, approved by the SOC Manager
- Privileged access to production systems during hunts must be requested through [PAM Platform] and is time-limited to the duration of the approved hunt
- All actions performed via privileged access during hunt operations are recorded and retained for a minimum of [X] months
- Tool credentials are managed in accordance with the Access Control Policy ([Document ID])

### 8.4 Tool Governance

| Requirement | Detail |
|---|---|
| **Procurement approval** | All new tools require Technology Risk Assessment and CISO approval |
| **Vulnerability patching** | Hunt tools are patched within [X] days of critical patch release |
| **License management** | Managed by [IT / Procurement team] |
| **Configuration baselines** | Maintained and reviewed [quarterly] |
| **Third-party tool risk** | Vendor security assessments conducted [annually] |

---

## 9. Escalation Procedures

*This section defines the conditions, thresholds, and procedures for escalating threat hunt findings to incident response and senior management. Escalation must be timely and follow defined communication channels to ensure appropriate response.*

### 9.1 Escalation Thresholds

| Severity | Criteria | Escalation Trigger | Time to Escalate |
|---|---|---|---|
| **Critical** | Active adversary confirmed; compromise of Tier 0/1 systems; data exfiltration in progress; ransomware precursors confirmed | Immediate escalation to IR Lead and Head of Cyber Security | Immediate — within 15 minutes of confirmation |
| **High** | Confirmed malicious artifact or activity without confirmed compromise; sophisticated APT TTP identified; compromise of external-facing system | Escalation to SOC Manager and IR Lead | Within 1 hour |
| **Medium** | Suspicious activity requiring further investigation; unconfirmed malicious indicators; anomalies on non-critical systems | Escalation to SOC Manager; IR Lead notified | Within 4 hours |
| **Low / Informational** | Behavioral anomaly with benign likely explanation; detection gap identified; policy violation without malicious intent | Documented and reported in next scheduled hunt report | Next business day |

### 9.2 Escalation Pathway

**Level 1 — Internal Escalation (Hunt Team to SOC):**
- Hunt Lead notifies SOC Manager via [Communication Channel] (e.g., Teams, phone)
- Hunt Lead creates incident ticket in [Case Management Platform]
- Evidence package prepared and transferred with chain-of-custody documentation

**Level 2 — SOC to Senior Management Escalation:**
- SOC Manager notifies Head of Cyber Security
- Head of Cyber Security assesses and determines if CISO escalation is required
- For Critical severity: CISO and CRO are notified within [30] minutes

**Level 3 — Executive and Regulatory Escalation:**
- CISO assesses if Board / Risk Committee notification is required
- Where a material cybersecurity incident is confirmed, BNM notification obligations are assessed per the BNM Incident Reporting requirements
- Legal and Compliance teams are engaged for incidents involving potential data breaches (PDPA obligations)
- If critical infrastructure compromise is confirmed, NACSA notification is assessed

### 9.3 Escalation Contact Directory

| Role | Name | Primary Contact | Alternate Contact | Availability |
|---|---|---|---|---|
| SOC Manager | [Name] | [Phone / Email] | [Alternate] | 24/7 |
| Hunt Lead (Primary) | [Name] | [Phone / Email] | [Alternate] | [Hours] |
| Head of Cyber Security | [Name] | [Phone / Email] | [Alternate] | 24/7 (on-call) |
| CISO | [Name] | [Phone / Email] | [Alternate] | 24/7 (on-call) |
| Incident Response Lead | [Name] | [Phone / Email] | [Alternate] | 24/7 |
| CRO | [Name] | [Phone / Email] | [Alternate] | Business hours / on-call |
| Legal Counsel | [Name] | [Phone / Email] | [Alternate] | Business hours / on-call |
| MSSP 24/7 SOC (if applicable) | [Provider Name] | [Hotline] | [Email] | 24/7 |

### 9.4 Escalation Communication Template

When escalating a finding, the following information must be communicated:

> **[ESCALATION — THREAT HUNT FINDING — {SEVERITY}]**
>
> **Hunt ID:** [Hunt ID]
> **Finding ID:** [Finding ID]
> **Severity:** [Critical / High / Medium]
> **Summary:** [One to two sentence description of the finding]
> **Affected Systems:** [List]
> **Affected Data:** [Describe any data at risk]
> **Current Status:** [Contained / Active / Uncertain]
> **Recommended Immediate Action:** [Isolate host / Disable account / Invoke IR plan]
> **Hunt Lead:** [Name and contact]
> **Time of Discovery:** [Timestamp]

### 9.5 Handoff to Incident Response

Upon escalation to IR:

1. Hunt Lead briefs IR Lead using the Escalation Communication Template
2. Full hunt workbook and evidence package is transferred
3. Chain-of-custody record is completed and co-signed by Hunt Lead and IR Lead
4. Hunt is formally suspended or transitioned to an IR-supporting role
5. Hunt Lead remains available as technical advisor during IR investigation
6. Formal hunt closure occurs after IR is concluded and findings are finalized

---

## 10. Metrics and Performance Indicators

*This section establishes quantitative and qualitative measures for evaluating the effectiveness of the Threat Hunting Program. Metrics should be reviewed at least quarterly and reported to senior management.*

### 10.1 Program Effectiveness Metrics

| Metric | Description | Measurement Method | Target | Reporting Frequency |
|---|---|---|---|---|
| **Number of hunts conducted** | Total formally executed hunts per period | Hunt Register count | ≥ [X] per quarter | Quarterly |
| **Hunts resulting in positive findings** | Percentage of hunts finding genuine threats | Hunt Register analysis | Tracked (no target) | Quarterly |
| **Mean Time to Detect (MTTD) via hunting** | Average time from threat introduction to hunt detection | IR timeline analysis | < [X] days | Per incident |
| **Dwell time reduction** | Reduction in attacker dwell time attributable to hunt activities | Comparative IR analysis | Year-on-year improvement | Annually |
| **Detection rules generated** | Number of new SIEM/EDR detections resulting from hunt findings | Detection engineering log | ≥ [X] per quarter | Quarterly |
| **False positive rate of new detections** | Quality of detection rules generated via hunting | SOC monitoring data | < [X]% | Monthly |
| **Hypotheses tested** | Number of unique hypotheses investigated | Hunt Register | ≥ [X] per quarter | Quarterly |
| **MITRE ATT&CK coverage improvement** | Expansion of technique coverage in detection controls | ATT&CK Navigator delta | Year-on-year improvement | Quarterly |
| **Hunt backlog** | Number of hypotheses queued but not yet executed | Hunt Register | < [X] queued | Monthly |
| **Analyst training hours** | Total threat hunting CPD hours per analyst | Training records | ≥ [X] hours per analyst per year | Annually |
| **Playbook currency** | Percentage of playbooks reviewed within last 12 months | Playbook register | 100% | Quarterly |

### 10.2 Reporting

| Report | Audience | Frequency | Contents |
|---|---|---|---|
| **Hunt Closure Report** | SOC Manager, Head of Cyber Security | Per hunt | Findings, evidence, recommendations, lessons learned |
| **Threat Hunting Program Summary** | CISO, Head of Cyber Security | Monthly | Metrics summary, active hunts, significant findings |
| **Quarterly Program Review** | CISO, CRO, Risk Committee | Quarterly | Trend analysis, effectiveness metrics, program improvements |
| **Annual Program Assessment** | Board / Risk Committee | Annually | Program maturity, year-in-review, next year plan |

---

## 11. Integration with Security Operations

*This section describes how the Threat Hunting Program integrates with adjacent security functions to ensure cohesive, non-duplicative, and mutually reinforcing security operations.*

### 11.1 Integration with the Security Operations Center (SOC)

| Integration Point | Description |
|---|---|
| **Alert triage handoff** | SOC Tier 2 analysts may initiate a hunt engagement when alert investigation reveals patterns suggesting advanced activity beyond automated detection scope |
| **Detection tuning** | Hunt findings feed directly into SOC detection rule refinement and SIEM content development |
| **Shared data access** | Hunt team uses the same SIEM and EDR platforms as the SOC, with appropriate access controls |
| **Situational awareness** | Hunt team receives daily SOC briefing on significant events to inform hunt prioritization |
| **Escalation to IR** | Confirmed hunt findings are escalated via the SOC to the IR team per Section 9 |

### 11.2 Integration with Threat Intelligence

| Integration Point | Description |
|---|---|
| **Intelligence-to-hypothesis pipeline** | Threat Intelligence team provides structured intelligence briefs to the hunt team to generate actionable hypotheses |
| **IOC sharing** | IOCs identified during hunts are shared with the Threat Intelligence team for enrichment and dissemination |
| **Threat actor profiling** | Hunt playbooks are developed in collaboration with the Threat Intelligence team based on actor profiles |
| **Sector intelligence** | Intelligence from FS-ISAC, BNM advisories, and NACSA is fed into hunt prioritization |

### 11.3 Integration with Vulnerability Management

| Integration Point | Description |
|---|---|
| **Exploit surface awareness** | Vulnerability scan results inform hunt hypotheses by highlighting likely attacker entry points |
| **Coordinated remediation** | When hunts identify unpatched vulnerabilities being exploited, coordinated remediation is initiated with the Vulnerability Management team |
| **Patch verification hunts** | Targeted hunts may be conducted to verify that critical patches have been applied and that no exploitation occurred prior to patching |

### 11.4 Integration with Incident Response

| Integration Point | Description |
|---|---|
| **Post-incident hunting** | Following significant incidents, targeted hunts are conducted to identify any remaining threat actor persistence or related compromises |
| **Lessons learned sharing** | IR post-incident reports are reviewed by the hunt team to develop new hypotheses and update playbooks |
| **Evidence handling standards** | Hunt team follows the same evidence handling and chain-of-custody standards as the IR team |

### 11.5 Integration with Red Team / Penetration Testing

| Integration Point | Description |
|---|---|
| **Purple team exercises** | Hunt team participates in purple team exercises with the red team to validate detection coverage and hunt techniques |
| **Detection gap closure** | Red team findings that reveal detection gaps are fed into hunt hypothesis generation and detection engineering |
| **Playbook validation** | Playbooks are periodically validated against red team TTPs to confirm effectiveness |

---

## 12. Review and Update History

*This section tracks all changes made to this document over time. Every revision must be recorded here, with a description of what changed and why.*

### 12.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | Initial document creation and approval |
| 1.1 | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | [Description of changes] |
| [X.X] | [Date] | [Author Name] | [Reviewer Name] | [Description of changes] |

### 12.2 Review Schedule

| Review Type | Frequency | Trigger | Owner |
|---|---|---|---|
| **Scheduled quarterly review** | Quarterly | Calendar-based | Hunt Lead / SOC Manager |
| **Post-incident review** | Per significant incident | IR closure | Hunt Lead |
| **Regulatory change review** | As required | BNM / regulatory updates | Head of Cyber Security |
| **Threat landscape review** | Quarterly | Threat intelligence update | Hunt Lead / Threat Intel Analyst |
| **Annual comprehensive review** | Annually | Calendar-based | Head of Cyber Security / CISO |

### 12.3 Change Control

*All changes to this document must be:*

1. Proposed by the document owner or an authorized contributor
2. Reviewed by the [Head of Cyber Security / SOC Manager]
3. Approved by the [CISO / Approving Authority]
4. Recorded in the Version History table above
5. Communicated to all relevant stakeholders within [X] business days of approval

---

## 13. Review and Approval

### 13.1 Document Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared by** | [Author Name], [Title] | __________________ | [Date] |
| **Reviewed by** | [Reviewer Name], [Title — e.g., SOC Manager] | __________________ | [Date] |
| **Reviewed by** | [Reviewer Name], [Title — e.g., Head of Cyber Security] | __________________ | [Date] |
| **Reviewed by** | [Reviewer Name], [Title — e.g., Risk Management] | __________________ | [Date] |
| **Approved by** | [Approver Name], [Title — e.g., CISO] | __________________ | [Date] |

### 13.2 Acknowledgment

*All personnel with responsibilities under this Program are required to acknowledge that they have read, understood, and agree to comply with its requirements.*

| Name | Role | Department | Date Acknowledged | Signature |
|---|---|---|---|---|
| [Name] | Hunt Lead | [Department] | [Date] | __________________ |
| [Name] | Threat Analyst | [Department] | [Date] | __________________ |
| [Name] | Threat Analyst | [Department] | [Date] | __________________ |
| [Name] | Threat Intelligence Analyst | [Department] | [Date] | __________________ |
| [Name] | Detection Engineer | [Department] | [Date] | __________________ |
| [Name] | SOC Manager | [Department] | [Date] | __________________ |

---

## 14. References

### 14.1 Regulatory References

| Reference | Title | Clause(s) | Publisher | Applicable Version |
|---|---|---|---|---|
| **BNM RMiT** | Risk Management in Technology Policy | **11.18**, 11.1–11.5, 11.14–11.19, 10.1–10.5 | Bank Negara Malaysia | [Current version / effective date] |
| **PDPA 2010** | Personal Data Protection Act 2010 | All | Malaysian Parliament | 2010 (as amended) |
| **NACSA Cybersecurity Framework** | National Cybersecurity Framework | Detect, Respond functions | NACSA | [Version] |
| **BNM Incident Reporting** | Incident Reporting Requirements | All | Bank Negara Malaysia | [Current version] |

### 14.2 Standards References

| Standard | Title | Relevant Sections |
|---|---|---|
| MITRE ATT&CK | MITRE ATT&CK Enterprise Framework | All — primary TTP reference |
| NIST CSF | NIST Cybersecurity Framework v2.0 | DE.CM, DE.AE, RS functions |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A 8.16, 5.7 |
| NIST SP 800-61 | Computer Security Incident Handling Guide | All |
| SANS Threat Hunting Framework | The SANS Cyber Threat Hunting Framework | All |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | Requirements 10, 11 |

### 14.3 Internal Document References

| Document Title | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [ID] | Parent policy |
| Cybersecurity Incident Response Plan | [ID] | Escalation and handoff |
| Threat Intelligence Program | [ID] | Intelligence inputs |
| Security Operations Center Procedures | [ID] | Operational integration |
| Vulnerability Management Procedure | [ID] | Coordinated remediation |
| Data Classification Policy | [ID] | Evidence and data handling |
| Access Control Policy | [ID] | Tool access governance |
| Business Continuity Plan | [ID] | Major incident context |

---

## 15. Appendices

### Appendix A — Hunt Initiation Form

*Complete this form for every formally declared threat hunt. Submit to SOC Manager for approval prior to commencing hunt activities.*

---

**THREAT HUNT INITIATION FORM**

| Field | Entry |
|---|---|
| **Hunt ID** | TH-[YYYY]-[NNN] |
| **Date Initiated** | [Date] |
| **Hunt Lead** | [Name] |
| **Assisting Analysts** | [Names] |
| **Hunt Type** | ☐ Intelligence-Driven ☐ Hypothesis-Driven ☐ Analytics-Driven ☐ Situational Awareness |
| **Priority** | ☐ Critical ☐ High ☐ Medium ☐ Low |
| **Hunt Objective** | [Clear statement of what the hunt aims to determine] |
| **Trigger / Rationale** | [What initiated this hunt?] |
| **Hypothesis (if applicable)** | [State hypothesis using standard template from Section 4.3] |
| **MITRE ATT&CK Techniques** | [Technique IDs] |
| **Scope — Systems in Scope** | [List systems / environments] |
| **Scope — Data Sources** | [List data sources to be accessed] |
| **Scope — Exclusions** | [Explicitly excluded systems or data] |
| **Estimated Duration** | [X] analyst-days |
| **Planned Start Date** | [Date] |
| **Planned End Date** | [Date] |
| **Intelligence References** | [Reference to threat intel, advisories, or other inputs] |
| **Applicable Playbook(s)** | [Playbook IDs, if applicable] |
| **Special Access Required** | ☐ Yes ☐ No — If yes, describe: [Description] |
| **Data Privacy Considerations** | [Note any personal data likely to be encountered and handling approach] |
| **Success Criteria** | [How will hunt completion / non-completion be determined?] |

**SOC Manager Approval:**

| Name | Signature | Date |
|---|---|---|
| [SOC Manager] | __________________ | [Date] |

---

### Appendix B — Threat Hunt Register

*The Threat Hunt Register is maintained in [System / Platform] and updated in real time. The table below reflects its structure.*

| Hunt ID | Status | Priority | Hunt Type | Objective Summary | Hunt Lead | Start Date | End Date | Findings Summary | Finding Severity | Escalated to IR? | Detection Rules Generated |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TH-[YYYY]-001 | [Open / Closed / In Progress] | [Priority] | [Type] | [Summary] | [Name] | [Date] | [Date] | [Summary] | [Severity] | ☐ Y ☐ N | [Count] |

---

### Appendix C — Hunt Workbook Template

*The Hunt Workbook is the working document for each active hunt. It is maintained in [Document Management System / SharePoint] and is the primary evidence reference for findings.*

**Hunt Workbook Structure:**

1. **Hunt metadata** — Copy of completed Hunt Initiation Form
2. **Timeline** — Running log of analyst activities, observations, and decisions (timestamp, analyst, action, observation)
3. **Query log** — All queries and scripts executed, with platform, timestamp, analyst name, and raw output reference
4. **Pivot tracker** — Documentation of investigation pivots: what triggered the pivot, what was investigated, outcome
5. **Findings log** — Running log of all findings (positive and negative) per the finding template in Section 5.6
6. **Evidence index** — Inventory of all collected evidence items with file names, hashes, custodian, and storage location
7. **Chain of custody** — Formal chain of custody record for all evidence items

---

### Appendix D — Hunt Closure Report Template

*Complete this report upon formal closure of every hunt. Submit to SOC Manager and Head of Cyber Security within [5] business days of hunt completion.*

---

**THREAT HUNT CLOSURE REPORT**

| Field | Entry |
|---|---|
| **Hunt ID** | TH-[YYYY]-[NNN] |
| **Hunt Lead** | [Name] |
| **Analysts Involved** | [Names] |
| **Hunt Period** | [Start Date] to [End Date] |
| **Total Analyst Effort** | [X] analyst-hours |
| **Hunt Objective** | [Restate objective from initiation form] |
| **Hypothesis Tested** | [Restate hypothesis] |
| **Data Sources Accessed** | [List] |
| **Queries / Scripts Executed** | [Count] |

**Outcome Summary:**

☐ No findings — Hypothesis not supported by available evidence
☐ Inconclusive — Insufficient telemetry to confirm or deny hypothesis
☐ Findings identified — See findings table below
☐ Confirmed threat — Escalated to Incident Response (IR Ticket: [IR-ID])

**Findings Summary:**

| Finding ID | Severity | Description | Affected Assets | Status | IR Reference |
|---|---|---|---|---|---|
| HF-[YYYY]-[NNN] | [Severity] | [Description] | [Assets] | [Open / Escalated / Closed] | [IR-ID or N/A] |

**Telemetry / Coverage Gaps Identified:**

| Gap ID | Description | Affected Detection Area | Recommended Action | Owner | Due Date |
|---|---|---|---|---|---|
| GAP-001 | [Description] | [Area] | [Action] | [Owner] | [Date] |

**Detection Rules Generated:**

| Rule ID | Platform | Description | Status |
|---|---|---|---|
| [Rule ID] | [SIEM / EDR] | [Description] | [Deployed / In Testing] |

**Recommendations:**

1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation N]

**Lessons Learned:**

| Lesson | Category | Action Item | Owner | Due Date |
|---|---|---|---|---|
| [Lesson] | [Process / Tooling / Skills / Intelligence] | [Action] | [Owner] | [Date] |

**Closure Approval:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Hunt Lead | [Name] | __________________ | [Date] |
| SOC Manager | [Name] | __________________ | [Date] |
| Head of Cyber Security | [Name] | __________________ | [Date] |

---

### Appendix E — Playbook Development Template

*Use this template when creating a new threat hunting playbook. All completed playbooks are stored in [Document Management System] and referenced from Section 6.1.*

| Field | Detail |
|---|---|
| **Playbook ID** | PB-[NNN] |
| **Playbook Title** | [Threat Scenario Name] |
| **Version** | [Version] |
| **Author** | [Name] |
| **Approved By** | [Name] |
| **Last Review Date** | [Date] |
| **Threat Scenario** | [Description] |
| **MITRE ATT&CK Techniques** | [Technique IDs and names] |
| **Risk to Organization** | [Description of business impact if threat is active] |
| **Estimated Hunt Duration** | [X] analyst-days |
| **Data Sources Required** | [List] |

**Hypotheses:**

| # | Hypothesis Statement | MITRE Technique | Observable Artifact | Data Source |
|---|---|---|---|---|
| H-001 | If [behavior], we expect to observe [artifact] in [source] | [Technique] | [Artifact] | [Source] |

**Detection Queries:**

| Query ID | Platform | Query / Logic | Expected Output |
|---|---|---|---|
| Q-[PB]-01 | [Platform] | [Query] | [Expected result] |

**Investigation Steps:**

1. [Step]
2. [Step]
3. [Step]

**Escalation Threshold:** [Define when to escalate]

**Artifacts to Collect:** [List]

**Known Limitations / Blind Spots:** [List]

**References:** [MITRE, threat reports, vendor advisories]

---

### Appendix F — Threat Hunt Metrics Dashboard (Reporting Template)

*This template supports the quarterly program review report. Data is sourced from the Threat Hunt Register and Case Management platform.*

**Reporting Period:** [Quarter / Year]
**Prepared By:** [Name]
**Date:** [Date]

| Metric | This Quarter | Prior Quarter | YTD | Target |
|---|---|---|---|---|
| Total hunts conducted | | | | ≥ [X] |
| Hunts with positive findings | | | | Tracked |
| Confirmed threats via hunting | | | | N/A |
| IR escalations from hunting | | | | N/A |
| Detection rules deployed | | | | ≥ [X] |
| Hypotheses tested | | | | ≥ [X] |
| Mean dwell time of hunt-detected threats | | | | < [X] days |
| Analyst training hours (total) | | | | ≥ [X] |
| Playbooks reviewed / updated | | | | 100% |
| MITRE ATT&CK technique coverage (%) | | | | ≥ [X]% |

**Significant Findings This Quarter:**

[Summary narrative of the most significant hunt findings, outcomes, and actions taken]

**Program Improvement Actions:**

| Action | Status | Owner | Target Date |
|---|---|---|---|
| [Action] | [In Progress / Completed] | [Owner] | [Date] |

---

### Appendix G — Glossary

| Term | Definition |
|---|---|
| **APT (Advanced Persistent Threat)** | A sophisticated, sustained cyber attack by a skilled adversary, typically nation-state or organized crime |
| **BNM** | Bank Negara Malaysia — the Malaysian central bank and primary financial sector regulator |
| **CISO** | Chief Information Security Officer |
| **CTI (Cyber Threat Intelligence)** | Analyzed information about adversaries, their capabilities, and their intent |
| **Dwell Time** | The period between an attacker gaining access to an environment and their detection |
| **EDR (Endpoint Detection and Response)** | Security software providing continuous monitoring and response capability on endpoints |
| **Hypothesis** | A testable proposition about adversary behavior used to guide a threat hunt |
| **IOC (Indicator of Compromise)** | An artifact that indicates with high confidence that a system has been compromised |
| **IR (Incident Response)** | The structured process for detecting, containing, and recovering from cybersecurity incidents |
| **LotL (Living-off-the-Land)** | Attacker technique using legitimate operating system tools to conduct malicious activity |
| **MITRE ATT&CK** | A publicly available knowledge base of adversary tactics, techniques, and procedures |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PAM (Privileged Access Management)** | Controls and tools managing access to privileged accounts and systems |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian data privacy legislation |
| **RMiT** | Risk Management in Technology — BNM's principal technology risk policy for financial institutions |
| **SIEM** | Security Information and Event Management — a platform for log aggregation, correlation, and alerting |
| **SOC** | Security Operations Center |
| **TTP (Tactics, Techniques, and Procedures)** | The behavior patterns used by threat actors to conduct attacks |
| **UEBA** | User and Entity Behavior Analytics — analytics that detect anomalous behavior |

---

*End of Document*

---

**Document Control:** This document is subject to the review and change control procedures described in Section 12. The current approved version is maintained in [Document Management System]. Printed copies are uncontrolled — verify currency before use.

**[Organization Name] | [Department Name] | Confidential**