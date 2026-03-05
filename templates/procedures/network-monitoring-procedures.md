# Network Monitoring Procedures

---

| Field | Details |
|-------|---------|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Network Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause(s)** | 10.43 |

---

> **CONFIDENTIALITY NOTICE:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable laws, including the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Network Monitoring Overview](#5-network-monitoring-overview)
6. [Network Segmentation Zones](#6-network-segmentation-zones)
7. [Monitoring Process Flow](#7-monitoring-process-flow)
8. [Anomaly Detection and Investigation Procedures](#8-anomaly-detection-and-investigation-procedures)
9. [Firewall Rule Review Schedule](#9-firewall-rule-review-schedule)
10. [Network Architecture Diagram](#10-network-architecture-diagram)
11. [Roles and Responsibilities (RACI)](#11-roles-and-responsibilities-raci)
12. [Escalation Procedures](#12-escalation-procedures)
13. [Tooling and Technology](#13-tooling-and-technology)
14. [Metrics, Reporting and KPIs](#14-metrics-reporting-and-kpis)
15. [Exceptions and Deviations](#15-exceptions-and-deviations)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose

*State the primary intent of this document. Describe why these procedures exist, what problem they solve, and what regulatory obligation they fulfill.*

This document establishes the formal procedures governing the 24/7 continuous monitoring of [Organization Name]'s network infrastructure and the systematic investigation of detected anomalies. These procedures are designed to ensure that [Organization Name] maintains an effective, real-time operational awareness of its network environment in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.43.

The procedures herein ensure that:

- Network security events are detected, logged, and triaged in a timely and consistent manner.
- Anomalous or suspicious network activity is investigated, escalated, and remediated according to defined severity thresholds.
- All monitoring activities are documented and audit-ready for regulatory examination.
- Responsible parties understand their obligations under this framework.
- Network monitoring capabilities remain aligned with the evolving threat landscape and the organization's risk appetite.

---

## 2. Scope and Applicability

*Define which systems, networks, personnel, and business units are covered. Be explicit about what is out of scope to avoid ambiguity during audits.*

### 2.1 In-Scope

These procedures apply to:

| Category | Description |
|----------|-------------|
| **Network Infrastructure** | All routers, switches, firewalls, load balancers, wireless access points, and network appliances owned, operated, or managed by [Organization Name] |
| **Data Centres** | Primary data centre located at [Primary DC Location] and secondary/disaster recovery site at [DR Site Location] |
| **Cloud Environments** | [Cloud Provider(s)] environments hosting [Organization Name] workloads, including VPCs, virtual networks, and cloud-native security groups |
| **Third-Party Managed Networks** | Network segments managed by third-party vendors or managed security service providers (MSSPs) operating on behalf of [Organization Name] |
| **Business Units** | All business units and subsidiaries of [Organization Name] connected to the corporate network |
| **Personnel** | Network Operations Centre (NOC) staff, Security Operations Centre (SOC) staff, IT infrastructure teams, and IT security personnel |

### 2.2 Out of Scope

The following are explicitly out of scope for this document:

- Endpoint detection and response (EDR) procedures — refer to [Endpoint Security Procedure Document ID].
- Application-layer security monitoring — refer to [Application Security Monitoring Procedure Document ID].
- Physical access control monitoring — refer to [Physical Security Procedure Document ID].
- Network monitoring of personal devices not connected to the corporate network.

### 2.3 Applicability

*Identify whether this document applies to subsidiaries, branches, or foreign offices.*

These procedures apply to:

- [ ] [Organization Name] headquarters — [Location]
- [ ] All domestic branches
- [ ] All foreign branches/representative offices (where applicable and legally permissible)
- [ ] Wholly owned subsidiaries: [List Subsidiaries]

---

## 3. Regulatory and Policy Context

*Reference all applicable regulations, BNM policy documents, internal policies, and industry standards that inform this procedure. This section is critical for regulatory examinations.*

### 3.1 Regulatory Requirements

| Regulation / Standard | Clause / Section | Requirement Summary |
|-----------------------|------------------|---------------------|
| BNM RMiT Policy Document | Clause 10.43 | Financial institutions shall implement continuous monitoring of network activities to detect and respond to anomalies, unauthorized access attempts, and potential cyber threats in real time. |
| BNM RMiT Policy Document | [Other Applicable Clause] | [Summary of requirement] |
| Personal Data Protection Act 2010 (PDPA) | [Applicable Section] | Obligations relating to the security of personal data transmitted across networks. |
| NACSA Cybersecurity Framework | [Applicable Domain] | [Summary of requirement] |
| [Other Applicable Regulation] | [Section] | [Summary] |

### 3.2 Internal Policy Alignment

This procedure is subordinate to and must be read in conjunction with the following internal policies:

- [Organization Name] Information Security Policy — [Policy Document ID]
- [Organization Name] IT Risk Management Policy — [Policy Document ID]
- [Organization Name] Incident Management Policy — [Policy Document ID]
- [Organization Name] Business Continuity Policy — [Policy Document ID]
- [Organization Name] Third-Party Risk Management Policy — [Policy Document ID]

### 3.3 Industry Standards

These procedures are informed by, but not limited to, the following industry standards and frameworks:

- **ISO/IEC 27001:2022** — Information Security Management Systems, particularly Annex A Control 8.16 (Monitoring Activities).
- **NIST Cybersecurity Framework (CSF) 2.0** — Detect (DE) function, specifically DE.CM (Continuous Monitoring).
- **CIS Controls v8** — Control 13 (Network Monitoring and Defense).
- **MITRE ATT&CK Framework** — Used for threat-informed detection logic and anomaly classification.

---

## 4. Definitions and Abbreviations

*Provide clear definitions for all technical and regulatory terms used in this document. This prevents misinterpretation during audits and training.*

### 4.1 Definitions

| Term | Definition |
|------|------------|
| **Anomaly** | Any network event or pattern of events that deviates from the established baseline of normal network behaviour and may indicate a security threat or operational fault. |
| **Baseline** | The documented profile of normal network traffic patterns, volumes, protocols, and connection behaviours established for a specific network segment or asset. |
| **Continuous Monitoring** | The ongoing, automated collection and analysis of network telemetry data with the objective of detecting security events, anomalies, and policy violations in near real-time. |
| **DMZ (Demilitarized Zone)** | A network segment that acts as a buffer zone between the public internet and the internal corporate network, hosting publicly accessible services. |
| **Event** | Any observable occurrence within the network environment that is captured in logs or monitoring systems. Not all events are incidents. |
| **Incident** | An event that has been assessed as having a negative or potentially negative impact on the confidentiality, integrity, or availability of information assets. |
| **IOC (Indicator of Compromise)** | Forensic artefacts (e.g., IP addresses, domain names, file hashes) that indicate a potential or confirmed security breach. |
| **MSSP (Managed Security Service Provider)** | A third-party organization contracted to provide security monitoring and management services on behalf of [Organization Name]. |
| **Network Segmentation** | The practice of dividing a computer network into sub-networks (segments or zones) to improve performance and security. |
| **NOC (Network Operations Centre)** | The team responsible for 24/7 monitoring and management of network performance and availability. |
| **SIEM (Security Information and Event Management)** | A platform that aggregates log and event data from multiple sources to provide real-time analysis, correlation, and alerting for security monitoring. |
| **SOC (Security Operations Centre)** | The team responsible for monitoring, detecting, investigating, and responding to cybersecurity events. |
| **Threat Intelligence** | Evidence-based knowledge about existing or emerging threats that can be used to inform monitoring rules and response decisions. |
| **True Positive** | An alert generated by a monitoring system that correctly identifies a genuine security event or anomaly. |
| **False Positive** | An alert generated by a monitoring system that incorrectly identifies a benign event as a security threat. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|--------------|-----------|
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CTO | Chief Technology Officer |
| DDoS | Distributed Denial of Service |
| DNS | Domain Name System |
| EDR | Endpoint Detection and Response |
| FW | Firewall |
| IDS | Intrusion Detection System |
| IPS | Intrusion Prevention System |
| IT | Information Technology |
| KPI | Key Performance Indicator |
| MSSP | Managed Security Service Provider |
| NACSA | National Cyber Security Agency |
| NDR | Network Detection and Response |
| NOC | Network Operations Centre |
| PDPA | Personal Data Protection Act |
| RMiT | Risk Management in Technology |
| RACI | Responsible, Accountable, Consulted, Informed |
| SIEM | Security Information and Event Management |
| SLA | Service Level Agreement |
| SOC | Security Operations Centre |
| TLS | Transport Layer Security |
| VPN | Virtual Private Network |

---

## 5. Network Monitoring Overview

*Provide a high-level description of the monitoring philosophy, operating model, and coverage hours. This section orients the reader before the detailed procedures.*

### 5.1 Monitoring Philosophy

[Organization Name] adopts a **defense-in-depth** approach to network monitoring, applying multiple layers of detection controls across all network zones. Monitoring activities are guided by a threat-informed detection strategy aligned to the MITRE ATT&CK framework, ensuring that detection logic reflects realistic adversarial tactics, techniques, and procedures (TTPs) relevant to the Malaysian financial services sector.

### 5.2 Operating Model

| Attribute | Detail |
|-----------|--------|
| **Monitoring Hours** | 24 hours per day, 7 days per week, 365 days per year |
| **Primary Monitoring Location** | [NOC/SOC Location] |
| **Secondary / Failover Location** | [Secondary NOC/SOC Location] |
| **Monitoring Model** | [Tick all that apply: ☐ In-house NOC ☐ In-house SOC ☐ MSSP ☐ Co-managed] |
| **MSSP Provider (if applicable)** | [MSSP Name] — Contract Reference: [Contract ID] |
| **Primary SIEM Platform** | [SIEM Platform Name and Version] |
| **Network Detection Platform** | [NDR Platform Name and Version] |
| **Monitoring Coverage** | All in-scope network segments as defined in Section 2 |

### 5.3 Monitoring Objectives

The network monitoring programme is designed to achieve the following objectives:

1. **Detection** — Identify malicious, suspicious, or anomalous network activity at the earliest possible stage of the cyber kill chain.
2. **Visibility** — Maintain comprehensive, real-time visibility across all network zones, including north-south and east-west traffic flows.
3. **Compliance** — Demonstrate continuous adherence to BNM RMiT Clause 10.43 and all other applicable regulatory requirements.
4. **Response Enablement** — Provide high-fidelity, contextualised alerts to the SOC to enable timely and effective incident response.
5. **Continuous Improvement** — Regularly evaluate and improve detection coverage based on threat intelligence, lessons learned, and emerging attack techniques.

### 5.4 Monitoring Data Sources

*List all log sources, network taps, and telemetry feeds ingested by the monitoring platform. Incomplete log coverage is a common audit finding.*

| Data Source | Type | Collection Method | Retention Period | In SIEM? |
|-------------|------|-------------------|------------------|----------|
| Core Firewall (Perimeter) | Firewall Logs | Syslog / API | [X] months | Yes / No |
| Internal Firewall / Micro-segmentation | Firewall Logs | Syslog / API | [X] months | Yes / No |
| DMZ Firewall | Firewall Logs | Syslog / API | [X] months | Yes / No |
| Core Network Switches | NetFlow / sFlow | Flow Collector | [X] months | Yes / No |
| WAN / MPLS Links | NetFlow | Flow Collector | [X] months | Yes / No |
| DNS Servers | DNS Query Logs | Syslog | [X] months | Yes / No |
| DHCP Servers | DHCP Logs | Syslog | [X] months | Yes / No |
| VPN Gateway | VPN Session Logs | Syslog / API | [X] months | Yes / No |
| Wireless Controllers | WLAN Access Logs | Syslog / API | [X] months | Yes / No |
| IDS/IPS Sensors | Alert Logs | Syslog / API | [X] months | Yes / No |
| Proxy / Web Filter | Web Traffic Logs | Syslog / API | [X] months | Yes / No |
| Cloud Network (e.g., AWS VPC Flow Logs) | Flow Logs | API / S3 | [X] months | Yes / No |
| [Additional Source] | [Type] | [Method] | [X] months | Yes / No |

---

## 6. Network Segmentation Zones

*Document all network zones, their purpose, security classification, and monitoring requirements. This section is foundational for understanding monitoring scope and is frequently examined during audits.*

### 6.1 Zone Overview

[Organization Name]'s network is divided into the following security zones, each with distinct access controls, monitoring requirements, and trust levels:

| Zone ID | Zone Name | Security Classification | Description | Monitoring Priority |
|---------|-----------|-------------------------|-------------|---------------------|
| Z-01 | Internet / Untrusted Zone | Public | External-facing internet-connected systems | Critical |
| Z-02 | Demilitarized Zone (DMZ) | Restricted | Public-facing services (web, email, DNS) | Critical |
| Z-03 | Core Banking Network | Highly Restricted | Core banking applications and transaction processing | Critical |
| Z-04 | Internal Corporate Network | Internal | General staff workstations, internal applications | High |
| Z-05 | Management Network | Highly Restricted | Out-of-band management, infrastructure access | Critical |
| Z-06 | Data Centre Network | Highly Restricted | Server farm, databases, middleware | Critical |
| Z-07 | VPN / Remote Access Zone | Restricted | Remote workers and third-party access | High |
| Z-08 | Third-Party / Partner Network | Restricted | Connectivity to external partners and regulators | High |
| Z-09 | Cloud Network | Restricted | [Cloud Provider] virtual network segments | High |
| Z-10 | [Additional Zone] | [Classification] | [Description] | [Priority] |

### 6.2 Zone Boundary Controls

*Describe the controls that enforce boundaries between zones. These controls are the primary data sources for monitoring inter-zone traffic.*

| Boundary | From Zone | To Zone | Control Type | Device/Platform | Monitoring Coverage |
|----------|-----------|---------|--------------|-----------------|---------------------|
| B-01 | Internet (Z-01) | DMZ (Z-02) | Perimeter Firewall + IPS | [Firewall Make/Model] | Full NetFlow + IPS Alerts |
| B-02 | DMZ (Z-02) | Core Banking (Z-03) | Application Firewall | [Firewall Make/Model] | Full NetFlow + DPI |
| B-03 | DMZ (Z-02) | Internal Corporate (Z-04) | Internal Firewall | [Firewall Make/Model] | Full NetFlow |
| B-04 | Internal (Z-04) | Core Banking (Z-03) | Micro-segmentation | [Platform] | East-West Flow Monitoring |
| B-05 | VPN Zone (Z-07) | Internal (Z-04) | VPN Gateway + Firewall | [Platform] | Session Logs + NetFlow |
| B-06 | Third-Party (Z-08) | Core Banking (Z-03) | Dedicated Firewall + MFA | [Platform] | Full NetFlow + DPI |
| B-07 | [Zone] | [Zone] | [Control] | [Device] | [Coverage] |

### 6.3 Prohibited Inter-Zone Communications

*Document explicitly prohibited traffic flows. Violations of these rules should generate high-priority alerts.*

The following inter-zone traffic flows are prohibited and must trigger an immediate alert if detected:

- Direct communication from Internet Zone (Z-01) to Core Banking Network (Z-03) — bypassing DMZ controls.
- Direct communication from any external zone to the Management Network (Z-05) except via authorised jump hosts.
- Outbound connections from Core Banking Network (Z-03) to the Internet Zone (Z-01) without proxy inspection.
- [Document additional prohibited flows]

---

## 7. Monitoring Process Flow

*This is the core procedural section. Document the end-to-end process from event generation to closure with enough detail that a trained operator can execute the procedure without ambiguity.*

### 7.1 Process Overview

The network monitoring process follows a continuous cycle comprising five stages:

```
[Event Generation] → [Collection & Aggregation] → [Correlation & Alerting]
                                                              ↓
                     [Closure & Documentation] ← [Triage & Investigation]
```

### 7.2 Stage 1 — Event Generation and Collection

*Describe how network events are captured and forwarded to the central monitoring platform.*

**Procedure:**

1. Network devices (firewalls, switches, IDS/IPS, VPN gateways) generate event logs and telemetry data continuously in accordance with the logging standards defined in [Logging Standards Document ID].
2. All log sources forward events to the central SIEM platform ([SIEM Platform Name]) in near real-time via [Syslog/API/Agent].
3. The NOC Lead verifies SIEM log ingestion completeness at the start of each shift using the **Log Source Health Dashboard** in [SIEM Platform Name].
4. If any log source is found to be offline or not forwarding logs, the NOC Analyst must:
   a. Log a log source failure ticket in [Ticketing System] within **15 minutes** of detection.
   b. Notify the Network Operations Manager and IT Infrastructure Team immediately.
   c. Implement compensating controls (e.g., manual log review) until the issue is resolved.
5. Log collection gaps exceeding **[X] minutes** must be escalated as a Priority 2 incident.

**Acceptance Criteria:** All in-scope log sources are forwarding events to SIEM. Log source health dashboard shows [X]% or greater coverage.

### 7.3 Stage 2 — Correlation and Alert Generation

*Describe how raw events are transformed into actionable alerts.*

**Procedure:**

1. The SIEM platform applies pre-defined correlation rules, behavioural analytics, and threat intelligence feeds to aggregate events and generate alerts.
2. Correlation rules are maintained in the **SIEM Rule Registry** [Document ID / System Reference] and reviewed quarterly by the SOC Lead and Threat Intelligence Analyst.
3. Upon generation of an alert, the SIEM platform automatically:
   - Assigns a unique Alert ID.
   - Classifies the alert by severity (Critical, High, Medium, Low, Informational) based on the Severity Classification Matrix in **Appendix A**.
   - Routes the alert to the NOC/SOC queue based on alert type and severity.
4. Alert suppression rules (to reduce false positives) must be formally approved by the SOC Lead and documented in the **Alert Tuning Register** [System Reference] prior to implementation.

**Alert Severity Classification:**

| Severity | Definition | Initial Response Target | Escalation Threshold |
|----------|------------|-------------------------|----------------------|
| **Critical** | Confirmed or highly probable active attack; potential data exfiltration or critical system compromise | Immediate — within 15 minutes | Automatic escalation to SOC Lead and CISO |
| **High** | Strongly suspicious activity with significant potential impact; potential policy violation | Within 30 minutes | Escalate to SOC Lead if not resolved within 1 hour |
| **Medium** | Suspicious activity warranting investigation; moderate potential impact | Within 2 hours | Escalate if not resolved within 4 hours |
| **Low** | Potentially anomalous activity with limited impact potential; may be false positive | Within 8 hours (business hours) | Review at next shift handover |
| **Informational** | Routine monitoring notifications and threshold breaches | Review at next scheduled review | No automatic escalation |

### 7.4 Stage 3 — Alert Triage

*Describe how analysts evaluate incoming alerts to determine authenticity and priority.*

**Procedure:**

1. The on-duty NOC/SOC Analyst monitors the SIEM alert queue continuously during their shift.
2. Upon receiving a new alert, the analyst must perform an initial triage within the response time target specified in Section 7.3.
3. **Initial Triage Steps:**

   | Step | Action | Reference |
   |------|--------|-----------|
   | T-01 | Review the alert details: Alert ID, timestamp, source IP/device, destination IP/device, protocol, alert rule triggered. | SIEM Alert Console |
   | T-02 | Cross-reference source and destination IP addresses against the Asset Inventory [System Reference] and network zone map (Section 6). | Asset Inventory System |
   | T-03 | Query threat intelligence feeds for known malicious indicators (IP reputation, domain reputation, file hashes if applicable). | [Threat Intel Platform] |
   | T-04 | Review historical activity for involved assets in the preceding [24/48/72] hours for context. | SIEM Historical Query |
   | T-05 | Determine whether the alert is a True Positive, False Positive, or Requires Further Investigation. | Analyst Judgment |
   | T-06 | Document the triage outcome and initial findings in the ticketing system, referencing the Alert ID. | [Ticketing System] |

4. **Triage Outcome Routing:**
   - **True Positive → Proceed to Stage 4 (Investigation).**
   - **False Positive → Document rationale, close the alert, and log in the False Positive Register [System Reference] for rule tuning review.**
   - **Requires Further Investigation → Escalate to Tier 2 Analyst or SOC Lead.**

### 7.5 Stage 4 — Anomaly Investigation

*Detailed investigation procedures are covered in Section 8. This stage describes the handoff from triage to investigation.*

1. Confirmed True Positive alerts are escalated to the Investigation stage and assigned to a Tier 2 Analyst or SOC Lead.
2. An Incident Ticket is created in [Ticketing System] following the Incident Management Procedure [Document ID].
3. The investigating analyst conducts a full forensic investigation as described in Section 8.
4. Throughout the investigation, the analyst updates the Incident Ticket with timestamped findings, actions taken, and evidence collected.

### 7.6 Stage 5 — Closure and Documentation

*Describe the requirements for closing monitoring events and ensuring knowledge retention.*

1. All monitoring events (True Positive, False Positive, and Informational) must be closed with full documentation in [Ticketing System] before the end of the responsible analyst's shift.
2. True Positive closures require:
   - Root cause identified and documented.
   - Remediation actions completed or formally tracked in a remediation plan.
   - Lessons learned captured if the event reveals a detection gap or process improvement opportunity.
   - Post-Incident Review (PIR) scheduled if the event was classified as a Critical or High incident.
3. False Positive closures require:
   - Documented rationale for false positive determination.
   - Rule tuning recommendation submitted to SOC Lead.
4. Monthly metrics are compiled from closed tickets by the SOC Manager for reporting to the CISO and relevant governance committees (refer to Section 14).

---

## 8. Anomaly Detection and Investigation Procedures

*Provide specific, actionable investigation playbooks for the most critical anomaly types. Each playbook should be detailed enough for a trained analyst to execute independently.*

### 8.1 Investigation Principles

All network anomaly investigations must adhere to the following principles:

- **Evidence Preservation:** Collect and preserve relevant log data before taking any remediation actions that may alter or destroy evidence.
- **Chain of Custody:** Maintain a documented chain of custody for all evidence collected during an investigation.
- **Least Disruption:** Where possible, conduct investigations without disrupting business operations unless the risk of continued operation outweighs the disruption.
- **Timely Communication:** Keep stakeholders informed of investigation progress at regular intervals as defined in the escalation matrix (Section 12).
- **Objectivity:** Investigations must be conducted without bias. Do not dismiss anomalies due to the perceived trustworthiness of the source asset or user.

### 8.2 General Investigation Workflow

For all anomaly types, the following general workflow applies before invoking a specific playbook:

| Step | Action |
|------|--------|
| INV-01 | Confirm the alert is a True Positive by reviewing raw log data underlying the alert. |
| INV-02 | Establish a timeline of events: identify the first observed indicator, subsequent activity, and current state. |
| INV-03 | Determine the scope: identify all affected systems, users, and network segments. |
| INV-04 | Assess the potential business impact and data sensitivity of affected systems. |
| INV-05 | Invoke the appropriate investigation playbook (Sections 8.3–8.9). |
| INV-06 | Document all findings, evidence, and actions with precise timestamps. |
| INV-07 | Determine containment requirements and coordinate with the Network Operations Manager. |
| INV-08 | Escalate per Section 12 if the severity threshold is met. |

### 8.3 Playbook: Unauthorized Port Scan / Reconnaissance Activity

*Actions to take when internal or external port scanning activity is detected.*

**Trigger:** IDS/SIEM alert indicating port scan, host sweep, or network reconnaissance originating from an internal or external IP address.

| Step | Action | Responsible Party |
|------|--------|-------------------|
| PS-01 | Identify the source IP address and determine ownership via Asset Inventory. | NOC/SOC Analyst |
| PS-02 | Determine whether the source IP is internal (potential insider threat or compromised host) or external (potential external attack). | NOC/SOC Analyst |
| PS-03 | Review the scan targets: are critical assets (core banking, management network) included in the scan scope? | NOC/SOC Analyst |
| PS-04 | Check whether the scan activity corresponds to an authorised vulnerability assessment or penetration test. Cross-reference with the Authorized Scanning Schedule [System Reference]. | SOC Lead |
| PS-05 | If unauthorized: Block the source IP at the perimeter firewall, document the block, and create an Incident Ticket. | NOC Engineer / Firewall Admin |
| PS-06 | If source is internal and unauthorized: Isolate the source host from the network and initiate an endpoint investigation per [Endpoint IR Procedure Document ID]. | SOC Lead |
| PS-07 | Notify Network Operations Manager and, if source is internal, escalate to CISO per escalation matrix. | SOC Lead |

### 8.4 Playbook: Suspected Data Exfiltration

*Actions to take when anomalous outbound data transfers are detected.*

**Trigger:** Alert indicating unusually high outbound traffic volume, transfer to known malicious destination, use of non-standard protocols, or DNS tunnelling indicators.

| Step | Action | Responsible Party |
|------|--------|-------------------|
| EX-01 | Confirm the alert: review NetFlow data to determine actual data volume transferred and destination. | SOC Analyst (Tier 2) |
| EX-02 | Identify the source system and the data classification of information that may have been transmitted. | SOC Lead / Data Owner |
| EX-03 | **Immediately** notify the CISO and Network Operations Manager if sensitive or regulated data (e.g., personal data, financial data) may be involved. | SOC Lead |
| EX-04 | Block the destination IP/domain at the perimeter firewall and proxy to halt ongoing exfiltration. | NOC Engineer |
| EX-05 | Preserve a full copy of relevant NetFlow, firewall, and proxy logs as forensic evidence. | SOC Analyst |
| EX-06 | Initiate full endpoint forensic investigation on the source system. | SOC Lead |
| EX-07 | Assess whether this constitutes a data breach requiring notification to BNM or affected individuals per PDPA obligations. | CISO / Compliance Officer |
| EX-08 | Engage Legal, Compliance, and Communications teams as required. | CISO |

### 8.5 Playbook: DDoS / Volumetric Attack

**Trigger:** Alert indicating significant spike in inbound traffic volume, link saturation, or service degradation consistent with a Distributed Denial of Service attack.

| Step | Action | Responsible Party |
|------|--------|-------------------|
| DD-01 | Confirm the attack: review traffic statistics on perimeter links, firewall connection tables, and upstream ISP dashboards. | NOC Analyst |
| DD-02 | Identify attack vectors: volumetric (UDP flood, ICMP flood), protocol (SYN flood), or application layer (HTTP flood). | NOC Lead / SOC Lead |
| DD-03 | Activate DDoS mitigation controls: [e.g., upstream scrubbing centre, CDN rate limiting, BGP blackholing]. | NOC Engineer |
| DD-04 | Notify ISP/upstream carrier to engage their DDoS mitigation service: Contact — [ISP NOC Contact Details]. | Network Operations Manager |
| DD-05 | Assess business impact: which services are degraded or unavailable? Notify Business Continuity Team if critical services are impacted. | Network Operations Manager |
| DD-06 | Monitor mitigation effectiveness every 15 minutes. Escalate to CISO if mitigation is ineffective after 30 minutes. | NOC Lead |
| DD-07 | Document attack characteristics (volume, duration, source IP ranges, attack vector) for post-incident review and threat intelligence. | SOC Analyst |

### 8.6 Playbook: Lateral Movement Detection

**Trigger:** Alert indicating unusual internal east-west traffic, access to multiple internal systems from a single host within a short timeframe, or exploitation of administrative protocols (SMB, RDP, WinRM) across segment boundaries.

| Step | Action | Responsible Party |
|------|--------|-------------------|
| LM-01 | Map all systems accessed by the suspect source host in the preceding [24/48] hours using SIEM correlation. | SOC Analyst (Tier 2) |
| LM-02 | Determine whether the access patterns are consistent with authorized administrative activity or represent anomalous lateral movement. | SOC Lead |
| LM-03 | Isolate the suspect host at the network level using firewall ACL or micro-segmentation controls. | NOC Engineer |
| LM-04 | Initiate endpoint forensic investigation on the isolated host. | SOC Lead |
| LM-05 | Identify all potentially compromised hosts in the lateral movement path and assess for further containment. | SOC Lead |
| LM-06 | Escalate to CISO and initiate full incident response per [Incident Response Procedure Document ID]. | CISO |

### 8.7 Playbook: Unauthorized Firewall Rule Change

**Trigger:** Alert indicating a change to firewall policy not corresponding to an open and approved Change Request in [ITSM System].

| Step | Action | Responsible Party |
|------|--------|-------------------|
| FW-01 | Identify the change: which firewall, which rule, and what was modified (added, deleted, modified). | NOC Analyst |
| FW-02 | Identify the account that made the change via firewall audit logs. | NOC Analyst |
| FW-03 | Cross-reference with the Change Management System [System Reference] to confirm whether an approved Change Request exists. | Change Manager |
| FW-04 | If no approved Change Request exists: immediately revert the rule change and disable the account that made the unauthorized change pending investigation. | Firewall Administrator |
| FW-05 | Notify the Network Operations Manager, CISO, and IT Security team. | SOC Lead |
| FW-06 | Conduct a full investigation into the unauthorized change, including timeline reconstruction and access log review. | SOC Lead |
| FW-07 | Determine whether the unauthorized rule change was used to facilitate any further malicious activity. | SOC Analyst |

### 8.8 Playbook: Suspicious DNS Activity

**Trigger:** Alert indicating unusually high DNS query volume, DNS queries to known malicious domains, DNS tunnelling patterns, or unauthorized DNS configuration changes.

| Step | Action | Responsible Party |
|------|--------|-------------------|
| DNS-01 | Identify the source host(s) generating suspicious DNS traffic. | NOC/SOC Analyst |
| DNS-02 | Cross-reference queried domains against threat intelligence feeds for known malicious indicators. | SOC Analyst |
| DNS-03 | Analyse DNS query patterns: unusually long subdomain strings, high-entropy domain names, or high query frequency may indicate DNS tunnelling. | SOC Analyst (Tier 2) |
| DNS-04 | Block malicious domains at the DNS resolver and perimeter firewall/proxy. | NOC Engineer |
| DNS-05 | Isolate source hosts generating DNS tunnelling traffic for further investigation. | SOC Lead |
| DNS-06 | Review DNS server configuration for unauthorized changes. | NOC Engineer |

### 8.9 Playbook: VPN Anomaly / Unauthorized Remote Access

**Trigger:** Alert indicating VPN connection from a known malicious IP, geographically implausible login (impossible travel), VPN authentication failure spike, or concurrent VPN sessions for the same user credential.

| Step | Action | Responsible Party |
|------|--------|-------------------|
| VPN-01 | Identify the user account, source IP address, geolocation, and device. | NOC/SOC Analyst |
| VPN-02 | Assess for impossible travel: is the login geographically consistent with the user's recent activity? | SOC Analyst |
| VPN-03 | Contact the user via a secondary channel (phone, internal messaging) to verify whether the VPN session is legitimate. | SOC Lead |
| VPN-04 | If session is confirmed unauthorized: immediately terminate the VPN session and disable the user credential. | IAM Administrator / NOC Engineer |
| VPN-05 | Review all activity conducted during the unauthorized VPN session — systems accessed, data transferred. | SOC Analyst (Tier 2) |
| VPN-06 | Reset user credentials, enforce MFA re-enrolment, and conduct endpoint security assessment on the user's registered device. | IAM Team / SOC Lead |
| VPN-07 | Escalate to CISO if unauthorized access resulted in access to sensitive systems or data. | SOC Lead |

---

## 9. Firewall Rule Review Schedule

*Document the formal schedule and methodology for reviewing firewall rules across all network zones. Firewall rule hygiene is a critical audit finding area under RMiT.*

### 9.1 Review Objectives

Periodic firewall rule reviews are conducted to ensure that:

- All firewall rules remain aligned with documented business requirements.
- Outdated, redundant, overly permissive, or unauthorized rules are identified and removed.
- Rules are consistent with the network segmentation design and prohibited traffic flows in Section 6.
- Any new rules introduced since the last review have corresponding approved Change Requests.

### 9.2 Review Schedule

| Review Type | Frequency | Scope | Responsible Party | Approval Required |
|-------------|-----------|-------|-------------------|-------------------|
| **Full Firewall Ruleset Review** | Quarterly | All firewall rulesets across all zones | Network Operations Manager + IT Security | CISO |
| **Critical Zone Review** (Core Banking, Management) | Monthly | Z-03, Z-05 rulesets only | Senior Network Engineer + SOC Lead | Network Operations Manager |
| **Post-Change Validation Review** | Within 5 business days of any change | Affected ruleset only | Network Engineer who implemented change | Change Manager |
| **Emergency Rule Review** | As required (following a security incident) | Incident-affected rulesets | SOC Lead + Network Operations Manager | CISO |
| **Annual Comprehensive Review** | Annually | All firewalls, all rulesets, rule optimization | Network Operations Manager + External Reviewer | CTO + CISO |

### 9.3 Quarterly Review Procedure

*Step-by-step procedure for conducting the quarterly firewall rule review.*

| Step | Action | Responsible |
|------|--------|-------------|
| QR-01 | Export full ruleset from all in-scope firewall platforms at the review date. | Network Engineer |
| QR-02 | Generate a "Last Hit" report for all rules showing last time each rule was matched (where platform supports this). | Network Engineer |
| QR-03 | Flag any rules with no hits in the preceding [90] days as candidates for removal. | Senior Network Engineer |
| QR-04 | Cross-reference all rules against the Firewall Rule Register [System Reference] to identify rules without a corresponding approved Change Request. | IT Security Analyst |
| QR-05 | Identify any rules granting "Any/Any" or overly broad permissions and assess whether they can be tightened. | IT Security Analyst |
| QR-06 | Review rules allowing access to Core Banking (Z-03) and Management Network (Z-05) with particular scrutiny. | SOC Lead |
| QR-07 | Document findings in the Quarterly Firewall Review Report [Template in Appendix D]. | Network Operations Manager |
| QR-08 | Raise Change Requests for all recommended rule modifications, removals, or additions. | Network Operations Manager |
| QR-09 | Present findings and proposed changes to the [IT Security Committee / Change Advisory Board] for approval. | Network Operations Manager |
| QR-10 | Implement approved changes and conduct post-change validation per QR post-change procedure. | Network Engineer |
| QR-11 | File the completed review report in [Document Management System] and update the Firewall Rule Register. | Network Operations Manager |

### 9.4 Firewall Rule Register

*The Firewall Rule Register is maintained as a living document and updated with every approved firewall change. It serves as the authoritative record of all intended firewall rules.*

| Rule ID | Firewall | Source Zone | Source IP/Range | Destination Zone | Destination IP/Range | Protocol/Port | Action | Business Justification | Approved By | Approval Date | Expiry Date | Last Reviewed |
|---------|----------|-------------|-----------------|------------------|----------------------|---------------|--------|------------------------|-------------|---------------|-------------|---------------|
| FW-R-001 | [Firewall Name] | [Zone] | [IP/Range] | [Zone] | [IP/Range] | [Protocol/Port] | PERMIT/DENY | [Justification] | [Approver] | [Date] | [Date or Permanent] | [Date] |
| FW-R-002 | | | | | | | | | | | | |

### 9.5 Temporary Rules Management

All temporary firewall rules (rules with a defined expiry date) must be managed as follows:

1. All temporary rules must have an expiry date set at the time of creation.
2. Automated alerts must be configured to notify the Network Operations Manager **[X] business days** before a temporary rule expires.
3. If a temporary rule requires extension, a new Change Request must be submitted and approved before the expiry date.
4. Temporary rules that expire without an extension request are removed automatically by [Firewall Platform / Network Engineer] on the expiry date.
5. A monthly report of all temporary rules is reviewed by the Network Operations Manager.

---

## 10. Network Architecture Diagram

*This section provides references to and descriptions of official network architecture diagrams. The actual diagrams should be maintained in [Document Management System] and referenced here rather than embedded directly in this procedure document, to ensure they remain current.*

### 10.1 Architecture Diagram Inventory

*Document all official network architecture diagrams, their locations, and current versions. Diagrams must be reviewed and updated at minimum annually or following significant network changes.*

| Diagram ID | Diagram Title | Description | Current Version | Location | Last Updated | Next Review |
|------------|---------------|-------------|-----------------|----------|--------------|-------------|
| ND-01 | Overall Network Topology | High-level view of all network zones, key perimeter controls, and WAN connectivity | v[X.X] | [Document Management System Path] | [Date] | [Date] |
| ND-02 | Detailed Firewall Zone Architecture | Detailed view of all firewall positions, zone boundaries, and trust relationships | v[X.X] | [Document Management System Path] | [Date] | [Date] |
| ND-03 | Core Banking Network Architecture | Detailed view of core banking network segment, application tiers, and database connectivity | v[X.X] | [Document Management System Path] | [Date] | [Date] |
| ND-04 | Data Centre Network Architecture | Detailed server farm layout, switches, and interconnects | v[X.X] | [Document Management System Path] | [Date] | [Date] |
| ND-05 | Cloud Network Architecture | Virtual network topology for [Cloud Provider] environment | v[X.X] | [Document Management System Path] | [Date] | [Date] |
| ND-06 | Remote Access / VPN Architecture | VPN concentrator placement, split tunnelling configuration, and remote access flows | v[X.X] | [Document Management System Path] | [Date] | [Date] |
| ND-07 | Monitoring and Logging Architecture | Placement of SIEM, log collectors, network probes, and IDS/IPS sensors | v[X.X] | [Document Management System Path] | [Date] | [Date] |
| ND-08 | [Additional Diagram] | [Description] | v[X.X] | [Location] | [Date] | [Date] |

### 10.2 Diagram Governance

1. All network architecture diagrams are owned by the Network Operations Manager.
2. Diagrams must be updated within **[X] business days** of any approved network architecture change.
3. Diagram updates must be version-controlled and approved by the Network Operations Manager prior to publication.
4. Prior versions of all diagrams must be retained in [Document Management System] for a minimum of **[5] years** for audit purposes.
5. All diagrams classified as **Confidential** must be stored and transmitted in accordance with the Information Classification and Handling Policy [Document ID].

### 10.3 Placeholder — Network Zone Overview Diagram

*Insert or reference a high-level network zone diagram here. The diagram should illustrate the following at minimum:*

- *All defined network zones (Z-01 through Z-10 as defined in Section 6).*
- *Zone boundaries and associated firewall/control positions.*
- *Data flows between zones using directional arrows.*
- *Colour-coding by security classification (e.g., red for Highly Restricted, amber for Restricted, green for Internal).*

**[DIAGRAM: Insert reference to ND-01 from Document Management System or embed diagram image here]**

---

## 11. Roles and Responsibilities (RACI)

*The RACI matrix defines who is Responsible, Accountable, Consulted, and Informed for each key activity within these procedures. Clear role definitions are essential for regulatory compliance and operational effectiveness.*

### 11.1 RACI Key

| Letter | Meaning |
|--------|---------|
| **R** | **Responsible** — The person or role who performs the activity. |
| **A** | **Accountable** — The person or role ultimately answerable for the activity. Only one "A" per activity. |
| **C** | **Consulted** — The person or role whose input is sought before or during the activity. Two-way communication. |
| **I** | **Informed** — The person or role kept up to date on progress or outcome. One-way communication. |

### 11.2 RACI Matrix

| Activity | NOC Analyst | SOC Analyst | NOC Lead | SOC Lead | Network Ops Manager | IT Security Manager | CISO | CTO | Compliance Officer | Change Manager |
|----------|-------------|-------------|----------|----------|---------------------|---------------------|------|-----|--------------------|----------------|
| 24/7 network event monitoring | R | R | A | C | I | I | I | — | — | — |
| Alert triage (Tier 1) | R | R | A | C | I | I | — | — | — | — |
| Alert investigation (Tier 2) | — | R | C | A | I | C | I | — | — | — |
| Critical incident escalation | R | R | A | A | I | I | I | I | I | — |
| Incident ticket creation and management | R | R | A | A | I | I | — | — | — | — |
| Firewall rule implementation | R | — | A | — | C | C | — | — | — | — |
| Firewall rule change approval | — | — | C | C | A | C | I | — | — | R |
| Quarterly firewall rule review | R | C | A | C | A | C | I | — | — | — |
| SIEM rule creation and tuning | — | R | — | A | C | C | I | — | — | — |
| Threat intelligence integration | — | R | — | A | C | C | I | — | — | — |
| Network architecture diagram maintenance | R | — | A | — | A | C | I | I | — | — |
| Monthly monitoring metrics reporting | — | R | C | A | I | I | I | — | I | — |
| Quarterly monitoring review | C | C | C | C | A | C | I | I | I | — |
| DDoS response activation | R | C | A | C | A | C | I | I | — | — |
| Data exfiltration response | — | R | C | A | C | A | A | I | I | — |
| Post-incident review facilitation | — | R | C | A | C | C | I | — | C | — |
| Procedure document review and update | C | C | C | C | A | C | I | I | C | — |
| Regulatory examination support (BNM) | C | C | C | C | C | C | A | C | R | — |
| Log source health verification | R | — | A | — | I | I | — | — | — | — |
| Temporary firewall rule expiry management | R | — | A | — | A | I | — | — | — | R |

### 11.3 Role Profiles

*Provide a brief description of each role's obligations under this procedure.*

**NOC Analyst**
Responsible for continuous 24/7 monitoring of the SIEM alert queue, log source health verification, initial alert triage, and escalation to Tier 2 analysts. NOC Analysts operate on rotating shifts to ensure round-the-clock coverage.

**SOC Analyst (Tier 2)**
Responsible for in-depth investigation of confirmed or suspected True Positive security events, execution of investigation playbooks, evidence collection, and incident ticket management.

**NOC Lead / SOC Lead**
Shift supervisors accountable for the quality and timeliness of monitoring and investigation activities during their shift. Responsible for managing escalations and ensuring shift handovers are complete.

**Network Operations Manager**
Accountable for the overall integrity and effectiveness of the network monitoring programme. Responsible for quarterly firewall rule reviews, network architecture governance, and reporting to the CISO.

**IT Security Manager**
Consulted on security matters, detection rule strategies, and policy interpretation. Supports the CISO on significant security events.

**CISO (Chief Information Security Officer)**
Accountable for [Organization Name]'s overall cybersecurity posture. Informed of significant security events and accountable for regulatory reporting obligations.

**Compliance Officer**
Responsible for assessing whether detected incidents trigger regulatory notification obligations under BNM guidelines or PDPA requirements.

---

## 12. Escalation Procedures

*Define clear, unambiguous escalation paths to ensure significant events reach the right decision-makers within required timeframes.*

### 12.1 Escalation Matrix

| Severity | Initial Escalation (within) | Escalation Path | Further Escalation (within) | Further Path |
|----------|----------------------------|-----------------|------------------------------|--------------|
| **Critical** | 15 minutes | NOC/SOC Analyst → SOC Lead → Network Operations Manager → CISO | 30 minutes (if unresolved) | CISO → CTO → CEO |
| **High** | 30 minutes | NOC/SOC Analyst → SOC Lead → Network Operations Manager | 2 hours (if unresolved) | Network Operations Manager → CISO |
| **Medium** | 2 hours | NOC/SOC Analyst → NOC/SOC Lead | 8 hours (if unresolved) | SOC Lead → IT Security Manager |
| **Low** | Next business day | NOC/SOC Analyst → NOC/SOC Lead (at shift handover) | — | — |

### 12.2 External Escalation

The following external escalation contacts are maintained for specific incident scenarios:

| Scenario | External Party | Contact Method | Contact Details |
|----------|---------------|----------------|-----------------|
| Significant cyber incident (potential BNM reportable) | BNM Technology Risk Supervision | Formal notification | [BNM Contact Details — refer to BNM Incident Reporting Guidelines] |
| Personal data breach (PDPA reportable) | Personal Data Protection Commissioner | Written notification | [PDPC Contact — refer to PDPA Breach Notification Procedure] |
| NACSA Critical National Information Infrastructure (CNII) incident | NACSA CyberSecurity Malaysia | Formal notification | [NACSA Contact Details] |
| DDoS — upstream mitigation required | ISP NOC | Phone / NOC Portal | [ISP NOC Contact Details] |
| Cloud platform security incident | [Cloud Provider] Security Response | [Support Portal / Phone] | [Cloud Provider Contact] |
| Law enforcement referral | Royal Malaysia Police (PDRM) | Formal report | Via CISO and Legal |

### 12.3 On-Call Contacts

*The on-call contact list is maintained separately in [Secure Contact Management System] and is accessible to all NOC/SOC staff. The list must be reviewed and updated monthly.*

- **NOC On-Call Lead:** [Refer to On-Call Roster — System Reference]
- **SOC On-Call Lead:** [Refer to On-Call Roster — System Reference]
- **Network Operations Manager:** [Refer to On-Call Roster — System Reference]
- **CISO:** [Refer to On-Call Roster — System Reference]

---

## 13. Tooling and Technology

*Document all tools used in the network monitoring programme, including their version, purpose, and ownership. This section supports both operational continuity and audit evidence.*

### 13.1 Monitoring Toolset

| Tool Category | Tool Name / Platform | Version | Purpose | Managed By | Vendor Support Contract |
|---------------|---------------------|---------|---------|------------|-------------------------|
| SIEM | [Platform Name] | [Version] | Central log aggregation, correlation, alerting | IT Security Team | [Contract Reference] |
| NDR (Network Detection & Response) | [Platform Name] | [Version] | Behavioural network traffic analysis | SOC Team | [Contract Reference] |
| Firewall Management | [Platform Name] | [Version] | Centralized firewall policy management | NOC Team | [Contract Reference] |
| IDS/IPS | [Platform Name] | [Version] | Signature and anomaly-based intrusion detection | IT Security Team | [Contract Reference] |
| Ticketing System | [Platform Name] | [Version] | Incident and event tracking | IT Operations | [Contract Reference] |
| Threat Intelligence Platform | [Platform Name] | [Version] | IOC enrichment and threat intelligence management | SOC Team | [Contract Reference] |
| Network Flow Collector | [Platform Name] | [Version] | NetFlow/sFlow aggregation and analysis | NOC Team | [Contract Reference] |
| Vulnerability Scanner | [Platform Name] | [Version] | Authorized network vulnerability scanning | IT Security Team | [Contract Reference] |
| Log Management / SIEM Storage | [Platform Name] | [Version] | Long-term log archiving and retrieval | IT Operations | [Contract Reference] |
| [Additional Tool] | [Name] | [Version] | [Purpose] | [Team] | [Reference] |

### 13.2 Tool Resilience Requirements

| Tool | High Availability Configuration | RTO | RPO | Backup SIEM / Fallback |
|------|---------------------------------|-----|-----|------------------------|
| SIEM | [Active/Active / Active/Passive] | [X] hours | [X] hours | [Fallback Procedure] |
| Firewall Management | [Configuration] | [X] hours | [X] hours | [Fallback Procedure] |
| Ticketing System | [Configuration] | [X] hours | [X] hours | [Fallback Procedure] |

---

## 14. Metrics, Reporting and KPIs

*Define how the effectiveness of the network monitoring programme is measured and reported. KPIs must be quantifiable and aligned to regulatory expectations.*

### 14.1 Key Performance Indicators

| KPI ID | KPI Name | Definition | Target | Measurement Frequency | Reported To |
|--------|----------|------------|--------|----------------------|-------------|
| KPI-01 | Log Source Availability | Percentage of in-scope log sources actively forwarding logs to SIEM | ≥ 99.5% | Daily | SOC Lead, IT Security Manager |
| KPI-02 | Mean Time to Detect (MTTD) | Average time from event occurrence to alert generation | ≤ [X] minutes (Critical), ≤ [X] minutes (High) | Monthly | CISO, IT Security Manager |
| KPI-03 | Mean Time to Respond (MTTR) | Average time from alert generation to initial triage completion | ≤ 15 min (Critical), ≤ 30 min (High) | Monthly | CISO, Network Ops Manager |
| KPI-04 | False Positive Rate | Percentage of alerts classified as False Positives | ≤ [X]% | Monthly | SOC Lead, IT Security Manager |
| KPI-05 | Alert Backlog | Number of unresolved alerts older than [X] hours | 0 (Critical), ≤ [X] (High) | Daily | SOC Lead |
| KPI-06 | Firewall Rule Review Compliance | Percentage of scheduled firewall rule reviews completed on time | 100% | Quarterly | CISO, Audit |
| KPI-07 | Incident Escalation Compliance | Percentage of incidents escalated within the defined timeframe | ≥ 98% | Monthly | Network Ops Manager, CISO |
| KPI-08 | SIEM Correlation Rule Coverage | Percentage of MITRE ATT&CK techniques covered by active SIEM detection rules | ≥ [X]% | Quarterly | CISO, IT Security Manager |
| KPI-09 | Post-Incident Review Completion | Percentage of Critical/High incidents with completed Post-Incident Reviews | 100% | Monthly | CISO |
| KPI-10 | Unauthorized Rule Changes | Number of detected unauthorized firewall rule changes | 0 | Monthly | CISO, Audit |

### 14.2 Reporting Schedule

| Report Name | Frequency | Audience | Prepared By | Distributed By |
|-------------|-----------|----------|-------------|----------------|
| Daily NOC/SOC Shift Report | Daily | NOC Lead, SOC Lead, Network Operations Manager | Shift Lead | Automated / Shift Lead |
| Weekly Network Security Summary | Weekly | IT Security Manager, Network Operations Manager | SOC Lead | IT Security Manager |
| Monthly Monitoring Metrics Report | Monthly | CISO, CTO, IT Security Committee | SOC Manager | CISO Office |
| Quarterly Firewall Review Report | Quarterly | CISO, IT Risk Committee, Internal Audit | Network Operations Manager | CISO |
| Quarterly Monitoring Programme Review | Quarterly | CISO, IT Risk Committee | Network Operations Manager + IT Security Manager | CISO |
| Annual Network Security Review | Annually | Board Risk Committee, CISO, CTO | CISO | CISO |
| Regulatory Submission (BNM, if required) | As required | BNM | CISO / Compliance Officer | CISO |

---

## 15. Exceptions and Deviations

*Define the process for managing exceptions to these procedures. This is important for regulatory compliance — undocumented exceptions are a significant audit finding.*

### 15.1 Exception Handling Process

An exception to these procedures may be granted only under the following conditions:

1. The exception is formally documented with a clear business justification.
2. The risk associated with the exception is formally assessed by the IT Security Manager.
3. Compensating controls are identified and implemented for the duration of the exception.
4. The exception is approved by the Network Operations Manager and CISO (or their designated delegate).
5. The exception is time-limited with a defined expiry date not exceeding **[90] days**. Extensions require re-approval.
6. All exceptions are recorded in the **Exception Register** [System Reference].

### 15.2 Exception Register

| Exception ID | Description | Affected Procedure Section | Business Justification | Risk Assessment | Compensating Controls | Approved By | Approval Date | Expiry Date | Review Date |
|--------------|-------------|---------------------------|------------------------|-----------------|----------------------|-------------|---------------|-------------|-------------|
| EXC-001 | [Description] | [Section] | [Justification] | [Risk Level] | [Controls] | [Approver] | [Date] | [Date] | [Date] |

### 15.3 Non-Compliance Reporting

Any identified non-compliance with these procedures must be:

1. Reported to the Network Operations Manager within **[1] business day** of identification.
2. Assessed for potential regulatory impact by the Compliance Officer.
3. Documented in the [Risk Register / GRC Platform].
4. Remediated within a timeframe commensurate with the assessed risk level.

---

## 16. Review and Approval

*Document the review cadence, version history, and formal approval chain for this procedure.*

### 16.1 Review Schedule

| Review Type | Frequency | Triggered By | Responsible Party |
|-------------|-----------|--------------|-------------------|
| Scheduled Review | Quarterly | Calendar | Network Operations Manager |
| Event-Driven Review | As required | Significant security incident, regulatory change, or material network change | Network Operations Manager + CISO |
| Annual Comprehensive Review | Annually | Calendar | Network Operations Manager + IT Security Manager + Internal Audit |

### 16.2 Version History

| Version | Date | Author | Section(s) Changed | Summary of Changes |
|---------|------|--------|--------------------|--------------------|
| 1.0 | [Date] | [Author Name] | All | Initial document creation. |
| 1.1 | [Date] | [Author Name] | [Section] | [Description of changes] |
| [X.X] | [Date] | [Author Name] | [Section] | [Description of changes] |

### 16.3 Approval Sign-Off

*All reviewers and approvers must sign this section prior to the document being issued as a controlled document.*

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Document Author | [Name] | | [Date] |
| Network Operations Manager (Owner) | [Name] | | [Date] |
| IT Security Manager | [Name] | | [Date] |
| CISO | [Name] | | [Date] |
| CTO | [Name] | | [Date] |
| Internal Audit (for noting) | [Name] | | [Date] |

---

## 17. References

*List all regulatory documents, standards, and internal policies referenced in this procedure.*

### 17.1 Regulatory References

| Reference ID | Document Title | Issuing Authority | Clause/Section | Relevance |
|--------------|----------------|-------------------|----------------|-----------|
| REF-01 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.43 | Continuous network monitoring requirement — the primary regulatory driver for this procedure. |
| REF-02 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | [Other Clause] | [Relevance] |
| REF-03 | Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | [Section] | Data protection obligations relevant to network-borne personal data. |
| REF-04 | NACSA National Cybersecurity Policy | NACSA | [Section] | National cybersecurity framework obligations. |
| REF-05 | [Other BNM Guideline, e.g., Cloud Risk Management] | BNM | [Section] | [Relevance] |

### 17.2 Standards References

| Reference ID | Standard | Version | Clause/Control | Relevance |
|--------------|----------|---------|----------------|-----------|
| STD-01 | ISO/IEC 27001 | 2022 | Annex A 8.16 — Monitoring Activities | Information security monitoring requirements. |
| STD-02 | NIST Cybersecurity Framework | 2.0 | DE.CM — Continuous Monitoring | Continuous monitoring best practices. |
| STD-03 | CIS Controls | v8 | Control 13 — Network Monitoring and Defense | Network monitoring implementation guidance. |
| STD-04 | MITRE ATT&CK Framework | [Current Version] | All Tactics and Techniques | Threat-informed detection logic and playbook development. |

### 17.3 Internal Document References

| Reference ID | Document Title | Document ID | Relationship |
|--------------|----------------|-------------|--------------|
| INT-01 | Information Security Policy | [Document ID] | Parent policy governing this procedure. |
| INT-02 | IT Risk Management Policy | [Document ID] | Risk framework for monitoring activities. |
| INT-03 | Incident Management Procedure | [Document ID] | Governs escalation from network monitoring events to formal incidents. |
| INT-04 | Firewall Rule Register | [System Reference] | Living registry of all authorized firewall rules. |
| INT-05 | Change Management Procedure | [Document ID] | Governs approval of network changes. |
| INT-06 | Business Continuity Plan | [Document ID] | Referenced for major network disruption scenarios. |
| INT-07 | Third-Party Risk Management Policy | [Document ID] | Applies to MSSP and managed network provider oversight. |
| INT-08 | Asset Inventory System | [System Reference] | Used for IP-to-asset correlation during investigations. |
| INT-09 | Logging Standards | [Document ID] | Defines logging requirements for all in-scope devices. |
| INT-10 | Endpoint Security Incident Response Procedure | [Document ID] | Referenced in lateral movement and exfiltration playbooks. |

---

## 18. Appendices

### Appendix A — Alert Severity Classification Matrix

*Provide detailed criteria for classifying alert severity. Consistent severity classification is critical for ensuring appropriate and timely response.*

*Complete this matrix with organization-specific thresholds aligned to your risk appetite and the alert types generated by your SIEM platform.*

| Criterion | Critical | High | Medium | Low |
|-----------|----------|------|--------|-----|
| **Data Sensitivity** | Confirmed or probable access to core banking data, customer PII, or regulated data | Suspected access to sensitive internal systems | Access to internal systems, no sensitive data confirmed | Access to non-sensitive systems |
| **System Criticality** | Core banking, payment systems, management infrastructure | Financial systems, HR systems | Internal business applications | Non-critical workstations or systems |
| **Attack Stage** | Active exploitation, exfiltration in progress | Post-exploitation, lateral movement | Reconnaissance, initial access attempt | Probing, passive scanning |
| **Network Zone** | Core Banking (Z-03), Management (Z-05) | Data Centre (Z-06), DMZ (Z-02) | Internal Corporate (Z-04), VPN (Z-07) | Low-sensitivity zones |
| **Business Impact** | Immediate significant financial, regulatory, or reputational impact | High potential business impact if unaddressed | Moderate potential impact | Minimal impact |
| **Regulatory Implication** | Probable BNM or PDPA reportable event | Possible regulatory reporting implication | Unlikely regulatory implication | No regulatory implication |

---

### Appendix B — Shift Handover Checklist

*NOC/SOC Shift Leads must complete this checklist at the end of every shift before handing over to the incoming shift.*

**Shift Details:**

| Field | Detail |
|-------|--------|
| **Outgoing Shift Lead** | [Name] |
| **Incoming Shift Lead** | [Name] |
| **Shift Date / Time (Out)** | [Date and Time] |
| **Shift Date / Time (In)** | [Date and Time] |

**Checklist:**

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1 | SIEM alert queue reviewed — all Critical and High alerts triaged | ☐ Complete / ☐ Pending | |
| 2 | Log source health verified — all sources online and ingesting | ☐ Complete / ☐ Issue (see notes) | |
| 3 | Open incident tickets reviewed and status current | ☐ Complete / ☐ Pending | |
| 4 | Any ongoing incidents or active investigations briefed to incoming shift | ☐ Complete / ☐ N/A | |
| 5 | Temporary firewall rules reviewed for impending expiry | ☐ Complete / ☐ N/A | |
| 6 | Any scheduled maintenance windows affecting monitoring coverage noted | ☐ Complete / ☐ N/A | |
| 7 | Threat intelligence feed updates reviewed | ☐ Complete / ☐ N/A | |
| 8 | On-call escalation contacts verified as current | ☐ Complete / ☐ Issue | |
| 9 | Shift report completed and submitted | ☐ Complete / ☐ Pending | |
| 10 | Any tool outages or degraded monitoring capabilities communicated | ☐ Complete / ☐ N/A | |

**Outstanding Items for Incoming Shift:**

*[Document any open items, active investigations, or tasks requiring follow-up by the incoming shift.]*

---

### Appendix C — Investigation Evidence Log Template

*Use this template to document evidence collected during network anomaly investigations. One Evidence Log per Incident Ticket.*

| Field | Detail |
|-------|--------|
| **Incident Ticket ID** | [Ticket ID] |
| **Investigation Lead** | [Analyst Name] |
| **Date/Time Opened** | [Date and Time] |

| Evidence ID | Evidence Type | Description | Collection Timestamp | Collected By | Storage Location | Chain of Custody |
|-------------|--------------|-------------|----------------------|--------------|------------------|------------------|
| EV-001 | SIEM Alert | Raw SIEM alert export for Alert ID [X] | [Timestamp] | [Analyst] | [Path/Location] | [Analyst → Storage] |
| EV-002 | Firewall Log | Firewall log extract for source IP [X], time range [X] to [X] | [Timestamp] | [Analyst] | [Path/Location] | [Analyst → Storage] |
| EV-003 | NetFlow Data | NetFlow capture for [IP/Port] time range [X] to [X] | [Timestamp] | [Analyst] | [Path/Location] | [Analyst → Storage] |
| EV-004 | [Type] | [Description] | [Timestamp] | [Analyst] | [Location] | [Chain] |

---

### Appendix D — Quarterly Firewall Review Report Template

*This template is used to document the findings and outcomes of each quarterly firewall rule review as required by Section 9.*

| Field | Detail |
|-------|--------|
| **Review Period** | [Quarter and Year, e.g., Q1 2025] |
| **Review Date** | [Date] |
| **Review Lead** | [Network Operations Manager Name] |
| **Firewalls Reviewed** | [List all firewall platforms/devices reviewed] |

**Summary of Findings:**

| Category | Count | Notes |
|----------|-------|-------|
| Total rules reviewed | [X] | |
| Rules recommended for removal (no hits in 90 days) | [X] | |
| Rules identified as overly permissive | [X] | |
| Rules without corresponding Change Request | [X] | |
| Rules recommended for modification | [X] | |
| Temporary rules reviewed | [X] | |
| No action required | [X] | |

**Detailed Findings:**

| Finding ID | Firewall | Rule ID | Finding Description | Risk Level | Recommended Action | Change Request Raised | Status |
|------------|----------|---------|---------------------|------------|--------------------|-----------------------|--------|
| QR-F-001 | [Firewall] | [Rule ID] | [Description] | High/Medium/Low | [Action] | [CR-XXXX / Pending] | Open/Closed |

**Sign-Off:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Review Lead | [Name] | | [Date] |
| Network Operations Manager | [Name] | | [Date] |
| CISO | [Name] | | [Date] |

---

### Appendix E — Glossary of Network Monitoring Alert Types

*Provide a reference glossary of common SIEM alert types generated in the monitoring environment to assist analysts in consistent triage decisions.*

| Alert Type | Description | Typical Severity | Common False Positive Causes | Key Investigation Steps |
|------------|-------------|------------------|------------------------------|-------------------------|
| Port Scan Detected | Sequential connection attempts to multiple ports | High | Authorized vulnerability scanning, network inventory tools | Check authorized scanning schedule; identify source IP owner |
| Brute Force Authentication | Multiple failed login attempts within a defined time window | High | User account lockout, misconfigured services | Identify source IP; correlate with successful logins |
| DNS Tunnelling | High entropy DNS query strings, large DNS query volumes | Critical | None typical | Inspect raw DNS query content; isolate source host |
| Data Volume Anomaly | Outbound data transfer significantly exceeding baseline | Critical | Large authorized backup or file transfer | Identify destination; review data classification of source system |
| Lateral Movement (SMB) | Unusual SMB access patterns to multiple internal hosts | Critical | Authorized IT administration | Map access scope; correlate with change management |
| Firewall Policy Violation | Traffic blocked by firewall matching prohibited traffic policy | Medium | Application misconfiguration | Identify source/destination; review whether change is needed |
| Unauthorized Rule Change | Firewall configuration change outside change window | Critical | Emergency change without prior notification | Immediately verify against ITSM change records |
| C2 Beacon Detected | Periodic outbound connections to known malicious IP/domain | Critical | None typical | Block destination immediately; isolate source host |
| [Alert Type] | [Description] | [Severity] | [False Positive Causes] | [Steps] |

---

*End of Document*

---

*This document is a controlled document of [Organization Name]. Any printed copy of this document is uncontrolled. The current version is maintained in [Document Management System]. For the authoritative current version, refer to [Document Management System URL/Path].*

*Document ID: [Document ID] | Version: 1.0 | Classification: Confidential | Owner: Network Operations Manager*