# Log Source Inventory

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | SOC Manager |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

## 1. Purpose and Scope

This document serves as the authoritative inventory of all log sources integrated into [Organization Name]'s Security Information and Event Management (SIEM) platform. It provides a structured record of every asset, system, application, and network component that forwards log data for centralised monitoring, correlation, and security analysis.

This inventory directly supports compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically:

- **Clause 11.7** — which requires financial institutions to establish and maintain robust security event logging and monitoring capabilities, ensuring adequate log source coverage across critical and non-critical infrastructure components.

**Scope** encompasses all technology assets within [Organization Name]'s production, staging, and disaster recovery environments, including but not limited to: network devices, servers, endpoints, cloud services, applications, databases, and security controls.

*This document is designated as a mandatory compliance artifact and must be maintained as a living record, subject to continuous monitoring and formal quarterly review cycles.*

---

## 2. Asset and Item Identification

*This section enumerates every discrete log source contributing to the SIEM. Each entry must be uniquely identifiable and traceable to a physical or logical asset within the organization's asset register.*

### 2.1 Log Source Register

| Log Source ID | Asset/System Name | Hostname / IP Address | Asset Type | Location / Site | SIEM Connector / Input | Log Format | Forwarding Method | Date Onboarded |
|---|---|---|---|---|---|---|---|---|
| LS-001 | [Asset Name] | [Hostname / IP] | [e.g., Firewall] | [e.g., DC1 / Cloud / Branch] | [e.g., Syslog, API] | [e.g., CEF, JSON, Raw] | [e.g., Agent, Agentless] | [DD-MMM-YYYY] |
| LS-002 | [Asset Name] | [Hostname / IP] | [Asset Type] | [Location] | [Connector] | [Format] | [Method] | [DD-MMM-YYYY] |
| LS-003 | [Asset Name] | [Hostname / IP] | [Asset Type] | [Location] | [Connector] | [Format] | [Method] | [DD-MMM-YYYY] |

> **Guidance:** Log Source IDs must be unique and persistent. Do not reuse IDs for decommissioned sources. Align asset names with the organization's Configuration Management Database (CMDB) where applicable.

### 2.2 Asset Type Reference

*The following standardized asset types should be used consistently in the Log Source Register above.*

| Code | Asset Type |
|---|---|
| FW | Firewall |
| IDS | Intrusion Detection / Prevention System |
| RTR | Router |
| SW | Network Switch |
| SRV-WIN | Windows Server |
| SRV-LNX | Linux / Unix Server |
| DB | Database Server |
| APP | Application Server / Web Server |
| EP | Endpoint / Workstation |
| IAM | Identity and Access Management System |
| CLOUD | Cloud Platform / SaaS Application |
| EMAIL | Email Gateway / Mail Server |
| PROXY | Web Proxy / Content Filter |
| VPN | VPN Concentrator / Remote Access |
| PHYS | Physical Security System (CCTV, Access Control) |
| OT | Operational Technology / SCADA |
| OTHER | Other (specify in Notes) |

---

## 3. Classification and Categorisation

*This section categorises each log source by criticality tier and data sensitivity to support risk-based monitoring prioritisation and ensure alignment with RMiT requirements for critical system coverage.*

### 3.1 Criticality and Sensitivity Classification

| Log Source ID | Asset/System Name | Criticality Tier | Data Sensitivity | Regulatory Relevance | RMiT Coverage | Notes |
|---|---|---|---|---|---|---|
| LS-001 | [Asset Name] | [Tier 1 / 2 / 3] | [High / Medium / Low] | [e.g., PDPA, BNM, NACSA] | [Yes / No] | [Free text] |
| LS-002 | [Asset Name] | [Tier 1 / 2 / 3] | [Sensitivity] | [Relevance] | [Yes / No] | [Free text] |

### 3.2 Criticality Tier Definitions

| Tier | Label | Description |
|---|---|---|
| **Tier 1** | Critical | Assets processing or transmitting financial transactions, customer PII, or regulated data. Outage has immediate business or regulatory impact. Mandatory SIEM coverage. |
| **Tier 2** | Important | Supporting infrastructure with indirect impact on critical services. SIEM coverage strongly recommended. |
| **Tier 3** | Standard | General-purpose or non-sensitive assets. SIEM coverage desirable; risk-based decision applies. |

### 3.3 Coverage Analysis Summary

*Summarise the overall SIEM log source coverage across each asset tier. This table must be refreshed at every quarterly review.*

| Asset Tier | Total Assets in Scope | Assets Sending Logs to SIEM | Coverage Percentage | Gap Count | Notes |
|---|---|---|---|---|---|
| Tier 1 — Critical | [Count] | [Count] | [%] | [Count] | [e.g., 0 gaps — full coverage] |
| Tier 2 — Important | [Count] | [Count] | [%] | [Count] | [Free text] |
| Tier 3 — Standard | [Count] | [Count] | [%] | [Count] | [Free text] |
| **Total** | **[Count]** | **[Count]** | **[%]** | **[Count]** | |

---

## 4. Owner and Custodian

*This section identifies the accountable business owner and the technical custodian for each log source, establishing clear lines of responsibility for log integrity, availability, and remediation of forwarding failures.*

### 4.1 Ownership Register

| Log Source ID | Asset/System Name | Business Owner | Business Owner Department | Technical Custodian | Custodian Team | Escalation Contact | Contact Email |
|---|---|---|---|---|---|---|---|
| LS-001 | [Asset Name] | [Full Name] | [Department] | [Full Name] | [Team, e.g., SOC / Infra] | [Full Name / Role] | [Email] |
| LS-002 | [Asset Name] | [Full Name] | [Department] | [Full Name] | [Team] | [Full Name / Role] | [Email] |

### 4.2 Ownership Definitions

- **Business Owner:** The senior business stakeholder accountable for the asset's purpose, data classification, and regulatory obligations. Responsible for approving changes to logging configuration.
- **Technical Custodian:** The technical team or individual responsible for the day-to-day operation, maintenance, and log forwarding health of the asset. First point of contact for SOC when log gaps are detected.

---

## 5. Status and Lifecycle Stage

*This section tracks the operational status and lifecycle stage of each log source, enabling the SOC to distinguish between active, transitional, and decommissioned sources and to manage coverage gaps accordingly.*

### 5.1 Lifecycle Status Register

| Log Source ID | Asset/System Name | Operational Status | Lifecycle Stage | SIEM Ingestion Status | Last Log Received (UTC) | Ingestion Volume (Events/Day) | SLA Compliance | Notes |
|---|---|---|---|---|---|---|---|---|
| LS-001 | [Asset Name] | [Active / Inactive / Degraded] | [Production / Staging / EOL / Decommissioned] | [Healthy / Warning / Failed / Not Configured] | [DD-MMM-YYYY HH:MM] | [Count] | [Met / Breached / N/A] | [Free text] |
| LS-002 | [Asset Name] | [Status] | [Stage] | [Status] | [Timestamp] | [Count] | [Status] | [Free text] |

### 5.2 Status Definitions

| Operational Status | Description |
|---|---|
| **Active** | Asset is fully operational and forwarding logs within expected parameters. |
| **Inactive** | Asset is powered off or suspended; log forwarding is intentionally paused. Gap risk accepted and documented. |
| **Degraded** | Asset is partially operational; log forwarding is intermittent or incomplete. Incident ticket raised. |
| **Failed** | Asset or log forwarder has stopped sending logs unexpectedly. Immediate remediation required. |

| Lifecycle Stage | Description |
|---|---|
| **Production** | Asset is live and supporting business operations. |
| **Staging / UAT** | Asset is in pre-production testing. SIEM integration under validation. |
| **End of Life (EOL)** | Asset scheduled for decommission. Logging maintained until formal retirement. |
| **Decommissioned** | Asset has been retired. Log source record retained for audit trail purposes. Log data retained per retention policy. |

### 5.3 Open Gaps and Remediation Tracker

*Document all instances where a Tier 1 or Tier 2 asset is not currently forwarding logs to the SIEM, with an associated remediation plan and target date.*

| Gap ID | Log Source ID | Asset Name | Gap Description | Risk Rating | Remediation Plan | Assigned To | Target Remediation Date | Status |
|---|---|---|---|---|---|---|---|---|
| GAP-001 | [LS-XXX] | [Asset Name] | [e.g., Syslog forwarder misconfigured] | [High / Medium / Low] | [Steps to resolve] | [Name / Team] | [DD-MMM-YYYY] | [Open / In Progress / Closed] |

---

## 6. Last Review Date

*This section records the history of formal reviews conducted on this inventory, supporting the quarterly review cycle mandated by [Organization Name]'s SIEM governance framework and BNM RMiT Clause 11.7.*

### 6.1 Review History

| Review Cycle | Review Date | Reviewed By | Role | Scope of Review | Changes Made | Next Review Due |
|---|---|---|---|---|---|---|
| Q[X] [YYYY] | [DD-MMM-YYYY] | [Full Name] | [Role] | [e.g., Full inventory reconciliation] | [Summary of changes, or "No changes"] | [DD-MMM-YYYY] |
| Q[X] [YYYY] | [DD-MMM-YYYY] | [Full Name] | [Role] | [Scope] | [Changes] | [DD-MMM-YYYY] |

### 6.2 Per-Source Last Review

| Log Source ID | Asset/System Name | Last Reviewed Date | Reviewed By | Next Scheduled Review | Review Outcome |
|---|---|---|---|---|---|
| LS-001 | [Asset Name] | [DD-MMM-YYYY] | [Name] | [DD-MMM-YYYY] | [e.g., No changes / Updated owner / Gap raised] |
| LS-002 | [Asset Name] | [DD-MMM-YYYY] | [Name] | [DD-MMM-YYYY] | [Outcome] |

### 6.3 Continuous Monitoring Controls

*The following automated controls are in place to support continuous monitoring of log source health between formal quarterly reviews.*

| Control | Description | Tool / System | Alert Threshold | Notification Target |
|---|---|---|---|---|
| Log Silence Alert | Alert when a configured log source stops sending events | [SIEM Platform] | No events for [X] minutes | SOC Tier 1 / SOC Manager |
| Volume Anomaly Alert | Alert when event volume deviates significantly from baseline | [SIEM Platform] | >[X]% deviation from 7-day average | SOC Tier 2 |
| New Source Detection | Alert when an unconfigured source begins sending logs | [SIEM Platform] | Any unrecognised source IP | SOC Manager |
| Daily Ingestion Report | Automated daily summary of all source ingestion health | [SIEM Platform] | Scheduled — 07:00 MYT | SOC Manager, IT Manager |

---

## 7. Roles and Responsibilities

*This section defines accountability for maintaining and acting on the Log Source Inventory using a RACI framework.*

### 7.1 RACI Matrix

| Activity | SOC Manager | SOC Analyst (Tier 1/2) | IT Infrastructure Manager | System / Asset Owner | CISO | Internal Audit |
|---|---|---|---|---|---|---|
| Maintain and update log source register | **A/R** | C | C | I | I | I |
| Onboard new log sources to SIEM | A | R | R | C | I | I |
| Monitor daily log ingestion health | A | **R** | I | I | I | I |
| Investigate and remediate log gaps | A | R | R | C | I | I |
| Conduct quarterly inventory review | **A/R** | C | C | C | I | I |
| Approve changes to coverage scope | A | I | C | C | **R** | I |
| Review inventory for audit purposes | I | I | I | I | C | **R** |
| Escalate unresolved Tier 1 gaps | A | R | I | I | I | I |
| Decommission log sources | A | R | R | **R** | I | I |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Role | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Full Name] | [Role] | Initial document creation and baseline inventory. |
| [1.1] | [DD-MMM-YYYY] | [Full Name] | [Role] | [e.g., Added cloud log sources; updated ownership table.] |

### 8.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Manager (Owner) | [Full Name] | __________________ | [DD-MMM-YYYY] |
| CISO | [Full Name] | __________________ | [DD-MMM-YYYY] |
| IT Infrastructure Manager | [Full Name] | __________________ | [DD-MMM-YYYY] |
| Internal Audit Representative | [Full Name] | __________________ | [DD-MMM-YYYY] |

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 11.7 | Security event logging and monitoring — requires financial institutions to maintain comprehensive log source coverage and monitor security events through a centralised SIEM capability. |
| BNM RMiT | Clause 11 (General) | Technology risk management controls for financial institutions licensed under the Financial Services Act 2013 and Islamic Financial Services Act 2013. |
| NACSA | [Applicable Control Reference] | National Cyber Security Agency guidelines for Critical National Information Infrastructure (CNII) operators. |
| PDPA 2010 | [Applicable Section] | Personal Data Protection Act 2010 — obligations to protect personal data processed or stored within systems covered by this inventory. |
| ISO/IEC 27001:2022 | A.8.15 — Logging | Information security standard controls for event log management. |
| [Organization Name] | SIEM Operations Runbook | Internal runbook governing SIEM platform configuration, log source onboarding, and incident response procedures. |
| [Organization Name] | Log Retention Policy | Internal policy defining minimum retention periods by log source type and data classification. |
| [Organization Name] | IT Asset Management Policy | Governing policy for asset registration, classification, and lifecycle management. |

---

## 10. Appendices

### Appendix A — Log Source Onboarding Checklist

*Use this checklist when adding a new log source to the SIEM inventory.*

- [ ] Asset registered in CMDB and assigned a unique Asset ID
- [ ] Log Source ID assigned and recorded in the Log Source Register (Section 2.1)
- [ ] Asset Type and Criticality Tier determined (Section 3)
- [ ] Business Owner and Technical Custodian identified and recorded (Section 4.1)
- [ ] Log format confirmed (e.g., CEF, JSON, Syslog, Windows Event Log)
- [ ] Log forwarding method configured (Agent / Agentless / API)
- [ ] SIEM parsing rule validated against sample log data
- [ ] Log volume baseline established
- [ ] Alerting thresholds configured (silence alert, volume anomaly)
- [ ] Ingestion confirmed as **Healthy** in SIEM health dashboard
- [ ] Coverage analysis summary (Section 3.3) updated
- [ ] SOC Manager sign-off obtained

### Appendix B — Log Source Decommissioning Checklist

*Use this checklist when retiring a log source from the SIEM inventory.*

- [ ] Decommission request approved by Business Owner and CISO
- [ ] Log forwarding agent/configuration removed from asset
- [ ] SIEM parsing rules and alert rules updated or disabled
- [ ] Log Source record status updated to **Decommissioned** in Section 5.1
- [ ] Coverage analysis summary (Section 3.3) updated; gap risk assessed
- [ ] Historical log data retained in accordance with [Organization Name] Log Retention Policy
- [ ] Audit trail entry recorded in Section 6.1 Review History
- [ ] SOC Manager sign-off obtained

### Appendix C — Log Source Coverage Heatmap

*[Attach or embed a system-generated heatmap or dashboard screenshot from the SIEM platform illustrating current log source coverage by site, asset type, and criticality tier. Update at each quarterly review.]*

**[Insert SIEM Coverage Dashboard Export — [DD-MMM-YYYY]]**

### Appendix D — Glossary

| Term | Definition |
|---|---|
| SIEM | Security Information and Event Management — a platform for centralised log collection, correlation, and alerting. |
| Log Source | Any device, system, or application that generates and forwards security-relevant event data to the SIEM. |
| CEF | Common Event Format — a standardised log format used by many security devices. |
| CMDB | Configuration Management Database — the authoritative register of IT assets. |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk for financial institutions. |
| SOC | Security Operations Centre. |
| Tier 1 | Highest criticality classification; mandatory SIEM log coverage required. |
| EOL | End of Life — asset scheduled for decommissioning. |
| PDPA | Personal Data Protection Act 2010 (Malaysia). |
| NACSA | National Cyber Security Agency (Malaysia). |

---

*This document is classified as **Confidential**. Unauthorised disclosure is prohibited. Retain in accordance with [Organization Name] Records Retention Policy.*

*Document ID: [Document ID] | Version: 1.0 | Owner: SOC Manager | [Organization Name]*