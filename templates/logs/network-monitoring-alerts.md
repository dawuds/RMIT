# Network Monitoring Alerts Log

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Operations Manager |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

## 1. Purpose and Scope

This document governs the logging, monitoring, investigation, and retention of network monitoring alerts generated across [Organization Name]'s technology infrastructure. It establishes the framework for systematic collection and review of alert data to support security operations, incident response, and regulatory compliance.

This artifact directly supports compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT)** policy document, specifically **Clause 10.43**, which mandates that financial institutions maintain continuous monitoring of network activity and retain evidence of alert investigation outcomes to demonstrate effective controls over technology risk.

**Scope:** This log applies to all network monitoring systems, security devices, and monitoring tools deployed within [Organization Name]'s production, development, and disaster recovery environments, including but not limited to on-premises infrastructure, cloud-hosted environments, and third-party managed network segments.

---

## 2. Asset and Item Identification

*Record all network-connected assets and monitoring endpoints that generate alerts captured within this log. Each entry should uniquely identify the source asset, its function, and its monitoring coverage status.*

| Asset ID | Asset Name / Hostname | Asset Type | IP Address / Range | Location / Site | Monitoring Tool | Coverage Status | Last Verified |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Hostname / Device Name] | [Firewall / Router / Switch / Server / Endpoint] | [IP Address or CIDR] | [Data Centre / Branch / Cloud Region] | [Tool Name] | [Active / Partial / Pending] | [DD-MMM-YYYY] |
| [ASSET-002] | | | | | | | |
| [ASSET-003] | | | | | | | |

**Total Assets Under Monitoring:** [Number]

**Assets Excluded from Scope:**

| Asset ID | Asset Name | Reason for Exclusion | Approved By | Approval Date |
|---|---|---|---|---|
| [ASSET-EX-001] | [Asset Name] | [Reason] | [Approver Name] | [DD-MMM-YYYY] |

---

## 3. Classification and Categorisation

*Classify each alert type according to severity, category, and regulatory relevance. This section enables consistent triage and prioritisation of network monitoring alerts across the security operations function.*

### 3.1 Alert Severity Classification

| Severity Level | Label | Response SLA | Description |
|---|---|---|---|
| 1 | Critical | Immediate (≤ 15 minutes) | Active breach, data exfiltration, or complete service compromise |
| 2 | High | ≤ 1 hour | Indicators of compromise, policy violation with data risk |
| 3 | Medium | ≤ 4 hours | Anomalous behaviour, policy deviation, reconnaissance activity |
| 4 | Low | ≤ 24 hours | Informational alerts, minor policy deviations, known false positives |
| 5 | Informational | Next business day | Audit trail events, threshold notifications |

### 3.2 Alert Category Classification

| Category Code | Category Name | Description | Example Alert Types |
|---|---|---|---|
| [CAT-01] | Perimeter Intrusion | Alerts originating from external boundary controls | Port scan, firewall deny spike, geo-block trigger |
| [CAT-02] | Lateral Movement | Internal east-west traffic anomalies | Unusual internal port sweep, credential relay attempt |
| [CAT-03] | Data Exfiltration | Outbound data transfer anomalies | Large upload, DLP alert, DNS tunnelling |
| [CAT-04] | Availability | Network disruption and denial of service | Bandwidth saturation, packet loss threshold breach |
| [CAT-05] | Policy Violation | Deviation from approved network policy | Unauthorised protocol, shadow IT connection |
| [CAT-06] | Authentication | Network-layer authentication failures | Repeated VPN auth failures, RADIUS reject spike |

### 3.3 Regulatory Relevance Mapping

| Alert Category | RMiT Clause | Reporting Obligation | Escalation Required |
|---|---|---|---|
| Perimeter Intrusion | 10.43 | Yes — document investigation outcome | Security Operations Manager |
| Data Exfiltration | 10.43 | Yes — potential MyCERT / BNM notification | CISO, DPO |
| Lateral Movement | 10.43 | Yes — incident classification required | Incident Response Team |
| Policy Violation | 10.43 | Yes — document remediation action | Network Operations Manager |

---

## 4. Owner and Custodian

*Identify the accountable owner and operational custodian for each monitored network segment and associated monitoring tool. Ownership must be formally assigned and reviewed at least quarterly.*

### 4.1 Asset Ownership Register

| Asset ID | Asset Name | Business Owner | Technical Custodian | Department | Contact Email | Contact Number | Ownership Last Confirmed |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Name, Title] | [Name, Title] | [Department] | [Email] | [Phone] | [DD-MMM-YYYY] |
| [ASSET-002] | | | | | | | |

### 4.2 Monitoring Tool Ownership

| Tool Name | Tool Function | System Owner | Administrator | Vendor / Provider | Support Contact | Licence Expiry |
|---|---|---|---|---|---|---|
| [Tool Name] | [SIEM / IDS / IPS / NDR / Firewall Management] | [Name] | [Name] | [Vendor] | [Contact] | [DD-MMM-YYYY] |

---

## 5. Network Segmentation Zones

*Document the logical and physical segmentation of the network into security zones. Each zone must have defined trust levels, inter-zone communication policies, and associated monitoring coverage.*

### 5.1 Network Zone Register

| Zone ID | Zone Name | Trust Level | Description | IP Range / VLAN | Monitoring Coverage | Zone Owner |
|---|---|---|---|---|---|---|
| [ZONE-01] | DMZ | Untrusted | Internet-facing services and proxies | [CIDR / VLAN ID] | Full | [Name] |
| [ZONE-02] | Production | Trusted — Internal | Core banking and application servers | [CIDR / VLAN ID] | Full | [Name] |
| [ZONE-03] | Management | Highly Restricted | Out-of-band management plane | [CIDR / VLAN ID] | Full | [Name] |
| [ZONE-04] | User LAN | Internal | Staff workstations and endpoints | [CIDR / VLAN ID] | Partial | [Name] |
| [ZONE-05] | Third-Party | Restricted | Vendor and partner access segment | [CIDR / VLAN ID] | Full | [Name] |
| [ZONE-06] | [Zone Name] | [Trust Level] | [Description] | | | |

### 5.2 Inter-Zone Communication Policy

| Source Zone | Destination Zone | Permitted | Protocol(s) | Port(s) | Justification | Last Reviewed |
|---|---|---|---|---|---|---|
| [ZONE-04] User LAN | [ZONE-02] Production | Restricted | [TCP/UDP] | [Port(s)] | [Business Justification] | [DD-MMM-YYYY] |
| [ZONE-01] DMZ | [ZONE-02] Production | Restricted | [TCP] | [443, 8443] | [Business Justification] | [DD-MMM-YYYY] |
| [ZONE-05] Third-Party | [ZONE-02] Production | Denied by default | N/A | N/A | Zero-trust policy | [DD-MMM-YYYY] |

### 5.3 Segmentation Compliance Status

| Zone ID | Last Segmentation Audit | Audit Outcome | Findings | Remediation Status | Next Audit Due |
|---|---|---|---|---|---|
| [ZONE-01] | [DD-MMM-YYYY] | [Pass / Fail / Partial] | [Findings Summary] | [Open / Closed / In Progress] | [DD-MMM-YYYY] |

---

## 6. Firewall Rule Review Schedule

*Document the schedule and outcomes of periodic firewall rule reviews. All firewall rules must be reviewed at minimum quarterly in accordance with RMiT Clause 10.43 to ensure rules remain current, justified, and aligned with the principle of least privilege.*

### 6.1 Firewall Rule Review Calendar

| Review Period | Scheduled Date | Actual Completion Date | Reviewed By | Approved By | Review Status |
|---|---|---|---|---|---|
| Q1 [YYYY] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [Name] | [Name] | [Completed / In Progress / Overdue] |
| Q2 [YYYY] | [DD-MMM-YYYY] | | | | [Scheduled] |
| Q3 [YYYY] | [DD-MMM-YYYY] | | | | [Scheduled] |
| Q4 [YYYY] | [DD-MMM-YYYY] | | | | [Scheduled] |

### 6.2 Firewall Rule Inventory and Review Log

| Rule ID | Firewall Device | Rule Name / Description | Source Zone | Destination Zone | Protocol | Port(s) | Action | Business Justification | Rule Owner | Last Reviewed | Review Outcome | Action Required |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [RULE-001] | [Device Name / ID] | [Rule Description] | [Zone] | [Zone] | [TCP/UDP/ICMP] | [Port] | [Allow / Deny / Log] | [Justification] | [Name] | [DD-MMM-YYYY] | [Valid / Redundant / To Be Removed] | [Action / None] |
| [RULE-002] | | | | | | | | | | | | |

### 6.3 Rule Change Register

*Log all firewall rule additions, modifications, and deletions. All changes must reference an approved change request.*

| Change ID | Change Date | Device Affected | Rule ID | Change Type | Description of Change | Requested By | Approved By | Change Ticket Ref |
|---|---|---|---|---|---|---|---|---|
| [CHG-001] | [DD-MMM-YYYY] | [Device Name] | [RULE-ID] | [Add / Modify / Remove] | [Description] | [Name] | [Name] | [ITSM Ticket ID] |

### 6.4 Redundant and Orphaned Rules

| Rule ID | Device | Description | Reason Flagged | Recommended Action | Disposition Date | Disposed By |
|---|---|---|---|---|---|---|
| [RULE-XXX] | [Device Name] | [Description] | [No traffic in 90 days / Owner departed / System decommissioned] | [Remove / Retain with justification] | [DD-MMM-YYYY] | [Name] |

---

## 7. Network Architecture Diagram

*Reference the current, approved network architecture diagrams. Diagrams must reflect actual deployed topology and be updated within 30 days of any material network change. Diagrams are stored in the approved document repository and linked below.*

### 7.1 Current Architecture Diagram Register

| Diagram ID | Diagram Title | Version | Scope | Location / Repository Link | Last Updated | Approved By | Approval Date |
|---|---|---|---|---|---|---|---|
| [DIAG-001] | High-Level Network Topology | [v1.x] | Enterprise-wide overview | [Repository Path / SharePoint Link] | [DD-MMM-YYYY] | [Name] | [DD-MMM-YYYY] |
| [DIAG-002] | DMZ and Perimeter Architecture | [v1.x] | DMZ and internet edge | [Repository Path / SharePoint Link] | [DD-MMM-YYYY] | [Name] | [DD-MMM-YYYY] |
| [DIAG-003] | Network Segmentation and VLAN Map | [v1.x] | Internal zone layout | [Repository Path / SharePoint Link] | [DD-MMM-YYYY] | [Name] | [DD-MMM-YYYY] |
| [DIAG-004] | Cloud Connectivity and Hybrid Architecture | [v1.x] | Cloud integration points | [Repository Path / SharePoint Link] | [DD-MMM-YYYY] | [Name] | [DD-MMM-YYYY] |
| [DIAG-005] | [Diagram Title] | | | | | | |

### 7.2 Diagram Change History

| Diagram ID | Change Date | Change Description | Changed By | Approved By | Previous Version Archived |
|---|---|---|---|---|---|
| [DIAG-001] | [DD-MMM-YYYY] | [Description of what changed] | [Name] | [Name] | [Yes / No] |

---

## 8. Network Monitoring Alert Log

*This is the primary system-generated log of network monitoring alerts. Records are auto-populated by [SIEM / Monitoring Platform Name]. Manual entries are permitted only for offline or legacy systems with documented rationale.*

### 8.1 Alert Log — Current Quarter

| Alert ID | Timestamp (UTC+8) | Alert Name / Signature | Source Asset | Source IP | Destination IP | Destination Port | Zone | Severity | Category | Assigned To | Investigation Status | Resolution | Outcome Date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [ALT-YYYY-NNNN] | [DD-MMM-YYYY HH:MM:SS] | [Alert Name] | [Asset ID] | [IP] | [IP] | [Port] | [Zone ID] | [Critical / High / Medium / Low] | [Category Code] | [Analyst Name] | [Open / In Progress / Closed / Escalated] | [False Positive / Confirmed Incident / Resolved / Escalated] | [DD-MMM-YYYY] |

### 8.2 Alert Investigation Outcomes Summary — Quarterly

*Complete this summary at the end of each quarterly review cycle.*

| Quarter | Total Alerts | Critical | High | Medium | Low | Informational | Confirmed Incidents | False Positives | Escalated | Unresolved |
|---|---|---|---|---|---|---|---|---|---|---|
| Q[N] [YYYY] | | | | | | | | | | |

### 8.3 Alert Trend Analysis

*Summarise notable trends, recurring alert types, and systemic issues identified during the review period.*

- **Recurring Alert Patterns:** [Document any alert types that triggered repeatedly and root cause analysis performed]
- **False Positive Rate:** [State the false positive rate and any tuning actions taken to reduce noise]
- **Unresolved Alerts Older Than SLA:** [List any alerts that have breached investigation SLA and justification]
- **Tool Coverage Gaps Identified:** [Note any monitoring blind spots identified during the quarter]
- **Tuning Actions Taken:** [Summarise rule or threshold changes made to monitoring tools]

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for activities related to network monitoring alerts and this log.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Network Operations Manager | Security Operations Analyst | CISO | IT Audit | Data Protection Officer | System Administrator | Senior Management |
|---|---|---|---|---|---|---|---|
| Alert generation and collection | R | R | I | I | — | C | — |
| Alert triage and initial investigation | C | R | I | — | — | C | — |
| Severity escalation decision | A | R | C | — | — | — | I |
| Incident declaration | C | R | A | I | C | — | I |
| Firewall rule review | A | C | C | I | — | R | — |
| Network segmentation review | A | R | C | I | — | R | — |
| Architecture diagram maintenance | A | C | — | I | — | R | — |
| Quarterly log review and sign-off | A | R | I | C | — | — | I |
| Regulatory reporting (BNM) | C | C | A | C | C | — | R |
| Document review and approval | A | C | A | C | — | — | I |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name] | Initial document created |
| | | | |

### 10.2 Quarterly Review Log

| Review Date | Reviewed By | Review Scope | Findings | Actions Raised | Next Review Date |
|---|---|---|---|---|---|
| [DD-MMM-YYYY] | [Name, Title] | [Full / Partial] | [Summary of findings] | [Action items or "None"] | [DD-MMM-YYYY] |

### 10.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Operations Manager | [Name] | | [DD-MMM-YYYY] |
| Chief Information Security Officer | [Name] | | [DD-MMM-YYYY] |
| Head of IT / CTO | [Name] | | [DD-MMM-YYYY] |
| IT Audit Representative | [Name] | | [DD-MMM-YYYY] |

---

## 11. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | **Clause 10.43** | Mandates continuous monitoring of network activity and logging of investigation outcomes for technology risk management |
| BNM RMiT | Clause 10.1–10.5 | General technology risk governance obligations |
| BNM RMiT | Clause 10.30–10.35 | Cybersecurity controls and incident response requirements |
| BNM RMiT | Clause 11.1–11.10 | Technology service provider and outsourcing risk (where applicable to managed network services) |
| ISO/IEC 27001:2022 | Annex A — 8.16, 8.20 | Monitoring activities and network security controls |
| NIST SP 800-137 | Full document | Information Security Continuous Monitoring (ISCM) guidance |
| [Organization Name] | Network Security Policy v[x.x] | Internal network security policy governing segmentation and monitoring |
| [Organization Name] | Incident Response Procedure v[x.x] | Internal escalation and incident handling procedure |
| [Organization Name] | Information Asset Register | Master register of all organisational technology assets |
| [Organization Name] | Change Management Policy v[x.x] | Governing firewall rule change requests and approvals |

---

## 12. Appendices

### Appendix A — Alert Severity and Escalation Matrix

*Detail the step-by-step escalation path for each severity level, including contact details, time thresholds, and required notifications.*

| Severity | Initial Responder | Escalation (T+15 min) | Escalation (T+1 hr) | BNM Notification Threshold | MyCERT Notification |
|---|---|---|---|---|---|
| Critical | SOC Analyst on Duty | Security Operations Manager | CISO | Confirmed breach — within 24 hours | Yes |
| High | SOC Analyst on Duty | Security Operations Manager | CISO | If confirmed incident | As required |
| Medium | SOC Analyst on Duty | Network Operations Manager | — | No | No |
| Low | SOC Analyst (next shift) | — | — | No | No |

### Appendix B — Monitoring Tool Configuration Summary

*Document the configuration baseline for each network monitoring tool, including detection coverage, log retention settings, and integration points.*

| Tool Name | Version | Detection Coverage | Log Retention Period | SIEM Integration | Last Config Review | Baseline Document Ref |
|---|---|---|---|---|---|---|
| [Tool Name] | [Version] | [Coverage Description] | [Days / Months] | [Yes / No] | [DD-MMM-YYYY] | [Document ID / Path] |

### Appendix C — Known False Positive Register

*Maintain a register of confirmed false positives to support alert tuning and prevent repeated unnecessary escalation.*

| FP ID | Alert Name / Signature | Source Asset | Reason Classified as False Positive | Tuning Action Taken | Approved By | Date Approved |
|---|---|---|---|---|---|---|
| [FP-001] | [Alert Name] | [Asset ID / Name] | [Justification] | [Rule exclusion / Threshold change / Whitelist entry] | [Name] | [DD-MMM-YYYY] |

### Appendix D — Monitoring Coverage Heatmap

*[Insert or reference a heatmap diagram showing monitoring coverage across all network zones, asset types, and detection categories. Identify and document any gaps with planned remediation timelines.]*

- **Full Coverage Zones:** [List]
- **Partial Coverage Zones:** [List with gap description]
- **Uncovered Assets / Zones:** [List with justification and remediation plan]

### Appendix E — Glossary

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia — the central bank and primary financial services regulator of Malaysia |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk for financial institutions |
| SIEM | Security Information and Event Management — platform for centralised log aggregation and alerting |
| IDS / IPS | Intrusion Detection / Prevention System |
| NDR | Network Detection and Response |
| DMZ | Demilitarised Zone — a network segment isolating internet-facing services from internal networks |
| SOC | Security Operations Centre |
| RACI | Responsible, Accountable, Consulted, Informed — accountability framework |
| MyCERT | Malaysian Computer Emergency Response Team |
| SLA | Service Level Agreement — time-bound response commitment |
| IOC | Indicator of Compromise |
| CIDR | Classless Inter-Domain Routing — IP address range notation |
| VLAN | Virtual Local Area Network |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. Retain in accordance with [Organization Name]'s records retention policy and BNM RMiT requirements.*