# Network Monitoring Architecture

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

This document defines the network monitoring architecture, tooling, and operational procedures employed by [Organization Name] to achieve continuous visibility across its technology environment. It supports compliance with **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.43**, which requires financial institutions to implement comprehensive network monitoring controls capable of detecting anomalous activity, unauthorized access attempts, and potential security incidents in a timely manner.

**Scope** includes all network infrastructure components — on-premises, cloud-hosted, and hybrid — that process, transmit, or store regulated data, including but not limited to:

- Core banking network segments
- Internet-facing perimeter and DMZ zones
- Internal LAN/WAN segments
- Third-party and vendor connectivity points
- Out-of-band management networks

This document applies to the Network Operations Centre (NOC), Information Security, and all technology teams responsible for network infrastructure at [Organization Name].

---

## 2. Assessment Scope and Criteria

*Describe the boundaries and standards against which the network monitoring architecture is evaluated. Include the asset inventory, regulatory thresholds, and the criteria used to determine monitoring adequacy.*

### 2.1 Assessment Boundaries

| Boundary | Description | In Scope |
|---|---|---|
| Perimeter Firewall | [Firewall platform/vendor] | Yes |
| Core Switching Infrastructure | [Switch vendor/model range] | Yes |
| Wireless Network | [WLAN controller/vendor] | Yes |
| Cloud Connectivity (VPN/SD-WAN) | [Platform name] | Yes |
| Third-Party Leased Lines | [Connectivity provider] | Yes |
| [Additional Segment] | [Description] | [Yes/No] |

### 2.2 Assessment Criteria

Monitoring adequacy is evaluated against the following criteria:

- **Coverage**: All network segments and traffic flows are subject to logging and inspection.
- **Timeliness**: Alerts for critical events are generated within [X] minutes of detection.
- **Completeness**: Log retention meets the minimum [X]-month requirement per BNM RMiT and internal policy.
- **Integrity**: Log records are tamper-evident and stored in an immutable or write-once format.
- **Actionability**: Alerts map to documented response runbooks and are assigned defined SLAs.

---

## 3. Methodology

*Document the approach used to design, validate, and continuously assess the network monitoring architecture. Reference any standards or frameworks applied (e.g., NIST SP 800-137, ISO/IEC 27001 Annex A).*

### 3.1 Design Methodology

The network monitoring architecture was designed using the following approach:

1. **Asset Discovery** — Enumerate all network-connected assets using [Tool/Platform, e.g., Nmap, Qualys, CMDB].
2. **Traffic Profiling** — Establish baseline traffic patterns per segment to enable anomaly detection.
3. **Sensor Placement** — Deploy network taps, SPAN ports, and flow collectors at strategic aggregation points.
4. **Tool Integration** — Aggregate telemetry into a centralised SIEM/log management platform.
5. **Use Case Development** — Define detection use cases aligned to MITRE ATT&CK and BNM threat scenarios.
6. **Tuning and Validation** — Conduct quarterly purple-team exercises to validate detection fidelity.

### 3.2 Monitoring Tools and Platforms

| Tool / Platform | Function | Vendor | Version | Deployment Location |
|---|---|---|---|---|
| [SIEM Platform] | Log aggregation, correlation, alerting | [Vendor] | [Version] | [On-prem/Cloud] |
| [NDR/IDS Platform] | Network intrusion detection | [Vendor] | [Version] | [Location] |
| [NetFlow Collector] | Traffic flow analysis | [Vendor] | [Version] | [Location] |
| [Packet Capture Tool] | Full-packet forensic capture | [Vendor] | [Version] | [Location] |
| [Vulnerability Scanner] | Network asset scanning | [Vendor] | [Version] | [Location] |
| [SOAR Platform] | Automated response orchestration | [Vendor] | [Version] | [Location] |

---

## 4. Findings and Ratings

*Summarise the outcomes of the most recent architecture review, including gaps identified, risk ratings assigned, and remediation status. Update this section following each quarterly review cycle.*

### 4.1 Summary Rating

| Domain | Current Maturity | Target Maturity | Gap |
|---|---|---|---|
| Perimeter Monitoring | [1–5] | [1–5] | [Description] |
| Internal Network Visibility | [1–5] | [1–5] | [Description] |
| Log Collection & Retention | [1–5] | [1–5] | [Description] |
| Alert Fidelity & Tuning | [1–5] | [1–5] | [Description] |
| Incident Response Integration | [1–5] | [1–5] | [Description] |

*Rating scale: 1 = Ad hoc, 2 = Developing, 3 = Defined, 4 = Managed, 5 = Optimised*

### 4.2 Findings Register

| Finding ID | Description | Severity | Affected Segment | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| FND-001 | [Finding description] | [Critical/High/Medium/Low] | [Segment] | [Action] | [Owner] | [Date] | [Open/Closed] |
| FND-002 | [Finding description] | [Severity] | [Segment] | [Action] | [Owner] | [Date] | [Open/Closed] |
| FND-003 | [Finding description] | [Severity] | [Segment] | [Action] | [Owner] | [Date] | [Open/Closed] |

---

## 5. Network Segmentation Zones

*Define each network zone, its security classification, permitted traffic flows, and the monitoring controls applied. This section should align with the network architecture diagram in Appendix A.*

### 5.1 Zone Definitions

| Zone ID | Zone Name | Classification | Description | VLAN/Subnet Range |
|---|---|---|---|---|
| Z-01 | External / Internet | Untrusted | Public-facing internet traffic | N/A |
| Z-02 | DMZ | Semi-Trusted | Internet-accessible services (web, email) | [Subnet] |
| Z-03 | Core Banking | Restricted | Critical financial transaction systems | [Subnet] |
| Z-04 | User LAN | Internal | End-user workstations and peripherals | [Subnet] |
| Z-05 | Server Farm | Restricted | Internal application and database servers | [Subnet] |
| Z-06 | Management / OOB | Privileged | Network and server management access | [Subnet] |
| Z-07 | Third-Party / Vendor | Controlled | Externally managed or connected systems | [Subnet] |
| Z-08 | [Additional Zone] | [Classification] | [Description] | [Subnet] |

### 5.2 Inter-Zone Traffic Controls

| Source Zone | Destination Zone | Permitted? | Control Mechanism | Monitoring Applied |
|---|---|---|---|---|
| Z-01 (External) | Z-02 (DMZ) | Restricted | WAF + Perimeter Firewall | IDS, NetFlow, SIEM |
| Z-02 (DMZ) | Z-03 (Core Banking) | Denied by default | Internal Firewall | Full packet capture |
| Z-04 (User LAN) | Z-03 (Core Banking) | Controlled | Application-layer firewall | SIEM correlation |
| Z-06 (Management) | All Zones | Privileged | Jump host + MFA | Privileged access logging |
| Z-07 (Vendor) | Z-05 (Server Farm) | Time-restricted | Vendor access gateway | Session recording |

---

## 6. Firewall Rule Review Schedule

*Document the formal schedule and process for reviewing firewall rule sets across all network boundaries. Reviews must be sufficient to identify stale, overly permissive, or conflicting rules.*

### 6.1 Review Schedule

| Firewall / Boundary | Review Frequency | Review Type | Responsible Team | Last Review Date | Next Review Date |
|---|---|---|---|---|---|
| Perimeter Firewall | Quarterly | Full rule-set audit | Network Operations | [Date] | [Date] |
| Internal Segmentation Firewall | Quarterly | Full rule-set audit | Network Operations | [Date] | [Date] |
| DMZ Firewall | Quarterly | Full rule-set audit | Network Operations + InfoSec | [Date] | [Date] |
| Cloud Security Groups | Monthly | Automated + manual | Cloud Operations | [Date] | [Date] |
| Vendor Access Firewall | Semi-annually | Full rule-set audit | Network Operations | [Date] | [Date] |

### 6.2 Review Process

Each firewall review must include the following steps:

1. Export current rule set from [firewall management platform].
2. Identify rules with no traffic in the preceding [90] days (candidate for removal).
3. Validate all rules against the approved Change Request register.
4. Flag any rules permitting traffic from Z-01 (External) beyond documented exceptions.
5. Obtain sign-off from the Information Security Manager prior to any rule removal.
6. Record outcomes in the Firewall Rule Review Log (Appendix B).
7. Escalate unresolved high-risk rules to the Technology Risk Committee within [5] business days.

---

## 7. Network Architecture Diagram

*Provide or reference the current-state logical and physical network architecture diagrams. Diagrams must reflect all monitoring sensor placements, traffic flow directions, and zone boundaries.*

> **Refer to Appendix A** for the current network architecture diagrams. Diagrams must be maintained in [diagram tool, e.g., Lucidchart, Visio, draw.io] and version-controlled in [document repository].

### 7.1 Diagram Register

| Diagram ID | Title | Description | Version | Last Updated | Maintainer |
|---|---|---|---|---|---|
| DIA-001 | Logical Network Topology | Zone layout, inter-zone flows, firewall positions | [Version] | [Date] | [Name] |
| DIA-002 | Physical Network Topology | Physical device placement, rack diagrams | [Version] | [Date] | [Name] |
| DIA-003 | Monitoring Sensor Placement | SPAN ports, taps, NetFlow collectors, SIEM feeds | [Version] | [Date] | [Name] |
| DIA-004 | Cloud Network Architecture | VPC/VNET layout, security group boundaries | [Version] | [Date] | [Name] |

### 7.2 Key Architecture Principles

- All inter-zone traffic traverses an explicit control point (firewall, proxy, or gateway).
- No monitoring blind spots exist for traffic flows carrying regulated or sensitive data.
- Sensor placement provides redundant coverage at ingress, egress, and key internal aggregation points.
- Out-of-band management network is air-gapped from production traffic flows.

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for maintaining and operating the network monitoring architecture.*

| Activity | Network Ops Manager | NOC Analyst | InfoSec Manager | CTO / IT Director | Internal Audit | Third-Party Vendor |
|---|---|---|---|---|---|---|
| Maintain network architecture documentation | **A/R** | C | C | I | I | — |
| Operate monitoring tools (day-to-day) | A | **R** | I | I | — | — |
| Investigate and triage alerts | A | **R** | C | I | — | — |
| Conduct firewall rule reviews | **A/R** | C | C | I | I | — |
| Approve firewall rule changes | A | — | **R** | I | — | — |
| Update network segmentation zones | **A/R** | — | C | A | I | — |
| Quarterly architecture review | **A/R** | C | C | I | C | — |
| Report to Technology Risk Committee | I | — | **R** | A | I | — |
| Third-party connectivity management | **A** | C | C | I | — | **R** |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Operations Manager | [Name] | __________________ | [Date] |
| Information Security Manager | [Name] | __________________ | [Date] |
| Chief Technology Officer | [Name] | __________________ | [Date] |
| Head of Internal Audit | [Name] | __________________ | [Date] |

---

## 10. References

| Reference | Description |
|---|---|
| BNM RMiT Policy Document — Clause 10.43 | Requirement for network monitoring and detection capabilities within financial institutions |
| BNM RMiT Policy Document — Clause 10.40–10.42 | Network security controls and segmentation requirements |
| ISO/IEC 27001:2022 — Annex A, Control 8.16 | Monitoring of activities |
| NIST SP 800-137 | Information Security Continuous Monitoring (ISCM) for Federal Information Systems |
| MITRE ATT&CK Framework | Adversary tactics and techniques referenced in detection use case development |
| [Organization Name] Information Security Policy | [Document ID] |
| [Organization Name] Network Security Standard | [Document ID] |
| [Organization Name] Incident Response Procedure | [Document ID] |

---

## Appendices

### Appendix A — Network Architecture Diagrams

*Insert or attach current-state logical and physical network diagrams here. Ensure diagrams are dated and version-controlled. Diagrams must clearly show zone boundaries, monitoring sensor placements, and inter-zone control points.*

> [Attach: DIA-001 Logical Network Topology — Version X.X — Date]
> [Attach: DIA-002 Physical Network Topology — Version X.X — Date]
> [Attach: DIA-003 Monitoring Sensor Placement — Version X.X — Date]

### Appendix B — Firewall Rule Review Log

*Maintain a running log of all completed firewall rule reviews. Each entry should reference the associated Change Request where rules were added, modified, or removed.*

| Review ID | Firewall | Review Date | Reviewer | Rules Reviewed | Rules Removed | Rules Added | Findings | Sign-Off |
|---|---|---|---|---|---|---|---|---|
| FRR-001 | [Firewall Name] | [Date] | [Name] | [Count] | [Count] | [Count] | [Summary] | [Name] |

### Appendix C — Monitoring Tool Configuration Baselines

*Reference the approved configuration baselines for each monitoring tool. These baselines should be stored in the configuration management repository and reviewed annually or following significant platform changes.*

> [Reference: SIEM Platform Baseline Configuration — Document ID — Version]
> [Reference: IDS/NDR Signature Set — Document ID — Version]
> [Reference: NetFlow Collector Configuration — Document ID — Version]

### Appendix D — Glossary

| Term | Definition |
|---|---|
| DMZ | Demilitarized Zone — a network segment isolating internet-facing services from internal networks |
| IDS/IPS | Intrusion Detection/Prevention System |
| NDR | Network Detection and Response |
| NetFlow | A network protocol for collecting IP traffic flow information |
| NOC | Network Operations Centre |
| SIEM | Security Information and Event Management |
| SOAR | Security Orchestration, Automation and Response |
| SPAN | Switched Port Analyzer — a method of mirroring network traffic for monitoring |