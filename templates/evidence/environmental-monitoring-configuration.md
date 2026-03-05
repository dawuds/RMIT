# Environmental Monitoring Configuration

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document defines the configuration, thresholds, and operational parameters of environmental monitoring systems deployed by **[Organization Name]** in support of technology risk management obligations under **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 10.25**.

Environmental monitoring encompasses the continuous surveillance of physical and logical operating conditions across data centres, server rooms, network infrastructure, and critical technology assets. This document serves as the authoritative configuration record and provides evidence of compliance with BNM RMiT requirements for environment control and resilience assurance.

**Scope of this document includes:**

- Physical environmental monitoring (temperature, humidity, power, physical access)
- Infrastructure and network monitoring (availability, capacity, performance)
- Alert threshold configurations and escalation parameters
- Monitoring tool inventory and integration architecture
- Review cycles and continuous improvement activities

**Out of Scope:**

- Application-level performance monitoring (refer to [Application Performance Monitoring Policy])
- Cybersecurity event monitoring (refer to [SOC/SIEM Operations Policy])

---

## 2. Regulatory Reference

*This section maps the document to its governing regulatory obligations. Verify clause references against the current published version of the BNM RMiT Policy Document.*

| Regulatory Framework | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 10.25 | Financial institutions shall implement environmental monitoring controls to detect and respond to conditions that could adversely affect technology operations and availability. |
| BNM Risk Management in Technology (RMiT) | [Additional Clause] | [Description] |
| [Other Framework, e.g. ISO/IEC 27001] | [Annex A / Control Reference] | [Description] |

---

## 3. Assessment Scope and Criteria

*Define the boundaries of what is being monitored and the criteria used to determine acceptable versus unacceptable environmental conditions. Include all facilities, systems, and assets within scope.*

### 3.1 Monitored Facilities and Assets

| Facility / Location | Asset Type | Criticality | Monitoring Priority |
|---|---|---|---|
| [Primary Data Centre — Location] | Server racks, UPS, CRAC units | Critical | High |
| [Secondary / DR Data Centre — Location] | Server racks, UPS, CRAC units | Critical | High |
| [Server Room — Branch / HQ] | Network equipment, servers | High | Medium |
| [Network Infrastructure Points] | Switches, routers, patch panels | High | Medium |
| [Other — e.g. Tape Library, Colocation] | [Asset Type] | [Criticality] | [Priority] |

### 3.2 Environmental Parameters Monitored

| Parameter | Description | Monitoring Method |
|---|---|---|
| Temperature | Ambient air temperature at rack level | Sensors + DCIM platform |
| Relative Humidity | Moisture levels to prevent condensation or static | Sensors + DCIM platform |
| Power Supply | UPS status, utility feed, voltage, load percentage | Power monitoring units (PDU/UPS management) |
| Water / Flood Detection | Presence of water under raised floors or near cooling units | Flood sensors |
| Smoke / Fire Detection | Early warning for fire events | Smoke detectors integrated with BMS |
| Physical Access | Unauthorised entry to controlled areas | Access control logs, CCTV |
| Air Conditioning / Cooling | CRAC/CRAH unit operational status | BMS / DCIM |
| Network Availability | Uptime and reachability of critical devices | Network monitoring platform (NMS) |
| Server Availability | Host and service uptime | Infrastructure monitoring tool |
| Capacity Utilisation | CPU, memory, storage, bandwidth | Performance monitoring tools |

### 3.3 Assessment Criteria

*Describe the standards and benchmarks used to determine whether environmental conditions are within acceptable operating parameters.*

- **Industry Standards Referenced:** [e.g. ASHRAE Thermal Guidelines, TIA-942, ISO/IEC 24764]
- **Regulatory Baseline:** BNM RMiT Clause 10.25 and associated technology resilience requirements
- **Internal Policy Baseline:** [Reference internal policy name and version]
- **Vendor Specifications:** Equipment operating ranges as specified by [Hardware Vendors]

---

## 4. Methodology

*Describe how environmental monitoring is implemented, including tools, integration approach, data collection frequency, and the process for validating sensor accuracy and system availability.*

### 4.1 Monitoring Architecture

*Provide a high-level description or diagram reference of how monitoring systems are interconnected. Include tool names, integration points, and data flows.*

- **Primary Monitoring Platform:** [e.g. Data Centre Infrastructure Management (DCIM) Tool — Vendor/Product Name]
- **Network Monitoring System (NMS):** [e.g. Nagios / Zabbix / SolarWinds — Vendor/Product Name]
- **Building Management System (BMS):** [Vendor/Product Name]
- **Security Information and Event Management (SIEM):** [Vendor/Product Name — for log correlation]
- **Integration Method:** [e.g. SNMP traps, REST API polling, agent-based, syslog forwarding]
- **Architecture Diagram Reference:** [Refer to Appendix A — Monitoring Architecture Diagram]

### 4.2 Data Collection and Retention

| Data Type | Collection Frequency | Retention Period | Storage Location |
|---|---|---|---|
| Temperature readings | Every [5] minutes | [12] months | [System/Repository] |
| Humidity readings | Every [5] minutes | [12] months | [System/Repository] |
| Power consumption data | Every [1] minute | [12] months | [System/Repository] |
| Access control logs | Real-time (event-driven) | [12] months | [System/Repository] |
| Network availability metrics | Every [1] minute | [6] months | [System/Repository] |
| Alert and incident records | Event-driven | [3] years | [ITSM / Ticketing System] |

### 4.3 Sensor Calibration and Validation

- **Calibration Frequency:** [e.g. Annually or per vendor recommendation]
- **Responsible Party:** [Facilities / Data Centre Operations Team]
- **Calibration Records Location:** [Reference to Appendix B or separate register]
- **Monitoring System Availability SLA:** [e.g. 99.9% uptime for monitoring infrastructure]
- **Redundancy Measures:** [e.g. Dual sensor deployment, redundant monitoring servers]

---

## 5. Alert Threshold Configuration

*This section documents the specific threshold values configured in monitoring systems, the alert severity levels, and the notification routing for each parameter. This table is the primary evidence artefact for Clause 10.25 compliance.*

### 5.1 Physical Environment Thresholds

| Parameter | Warning Threshold | Critical Threshold | Monitoring Tool | Alert Destination |
|---|---|---|---|---|
| Inlet Air Temperature | > [27°C] | > [35°C] | [DCIM Tool] | [NOC / Facilities Team] |
| Return Air Temperature | > [35°C] | > [45°C] | [DCIM Tool] | [NOC / Facilities Team] |
| Relative Humidity (High) | > [60%] | > [70%] | [DCIM Tool] | [NOC / Facilities Team] |
| Relative Humidity (Low) | < [40%] | < [30%] | [DCIM Tool] | [NOC / Facilities Team] |
| UPS Battery Level | < [50%] | < [25%] | [UPS Management Console] | [NOC / Facilities Team] |
| UPS Load | > [70%] | > [85%] | [UPS Management Console] | [NOC / Facilities Team] |
| Utility Power Loss | Immediate | N/A (event-driven) | [BMS / UPS] | [NOC / Facilities Team / On-call] |
| Flood / Water Detection | Any detection | Any detection | [Flood Sensor] | [NOC / Facilities Team — Immediate] |
| Smoke Detection | Any detection | Any detection | [Smoke Detector / BMS] | [All stakeholders — Emergency Protocol] |

### 5.2 Infrastructure and Network Thresholds

| Parameter | Warning Threshold | Critical Threshold | Monitoring Tool | Alert Destination |
|---|---|---|---|---|
| Server CPU Utilisation | > [80%] for [15] min | > [95%] for [5] min | [NMS / Infrastructure Tool] | [NOC / Systems Team] |
| Memory Utilisation | > [85%] | > [95%] | [NMS / Infrastructure Tool] | [NOC / Systems Team] |
| Disk Utilisation | > [80%] | > [90%] | [NMS / Infrastructure Tool] | [NOC / Systems Team] |
| Network Interface Utilisation | > [75%] | > [90%] | [NMS] | [NOC / Network Team] |
| Network Device Availability | Degraded | Unreachable | [NMS] | [NOC / Network Team] |
| Critical Server Availability | Degraded | Down | [Infrastructure Tool] | [NOC / Systems Team] |
| WAN / Internet Link Utilisation | > [70%] | > [85%] | [NMS] | [NOC / Network Team] |
| Replication Lag (DR) | > [15] min | > [30] min | [Replication Monitor] | [NOC / DBA Team] |

### 5.3 Alert Severity and Escalation Matrix

| Severity Level | Response Time | Initial Notification | Escalation (if unresolved) |
|---|---|---|---|
| **Critical** | Immediate (< 15 min) | NOC + On-call Engineer | [IT Manager / Head of Infrastructure] within 30 min |
| **Warning** | < 1 hour | NOC / Operations Team | [IT Manager] within 4 hours |
| **Informational** | Next business day | [Monitoring Dashboard / Log] | No automatic escalation |

---

## 6. Findings and Ratings

*This section is completed during quarterly review cycles. Document observations from the review period, including threshold breaches, alert trends, and system performance against defined parameters.*

### 6.1 Review Period Summary

| Field | Details |
|---|---|
| **Review Period** | [DD Month YYYY] to [DD Month YYYY] |
| **Review Conducted By** | [Name, Role] |
| **Review Date** | [DD Month YYYY] |
| **Overall Environmental Status** | [Satisfactory / Requires Attention / Unsatisfactory] |

### 6.2 Alert and Incident Summary

| Parameter | Number of Warning Alerts | Number of Critical Alerts | Root Cause Summary | Resolved (Y/N) |
|---|---|---|---|---|
| Temperature | [#] | [#] | [e.g. CRAC unit maintenance period] | [Y/N] |
| Humidity | [#] | [#] | [Description] | [Y/N] |
| Power | [#] | [#] | [Description] | [Y/N] |
| Network Availability | [#] | [#] | [Description] | [Y/N] |
| Server Availability | [#] | [#] | [Description] | [Y/N] |
| [Other] | [#] | [#] | [Description] | [Y/N] |

### 6.3 Configuration Compliance Rating

| Assessment Area | Rating | Justification |
|---|---|---|
| Threshold coverage and appropriateness | [Satisfactory / Partially Satisfactory / Unsatisfactory] | [Comments] |
| Alert notification routing | [Satisfactory / Partially Satisfactory / Unsatisfactory] | [Comments] |
| Monitoring system availability | [Satisfactory / Partially Satisfactory / Unsatisfactory] | [Comments] |
| Sensor calibration currency | [Satisfactory / Partially Satisfactory / Unsatisfactory] | [Comments] |
| Escalation adherence | [Satisfactory / Partially Satisfactory / Unsatisfactory] | [Comments] |

---

## 7. Evidence Reviewed

*List all evidence artefacts examined during the quarterly review to validate that monitoring configurations are operating as documented. Retain referenced evidence in the compliance evidence repository.*

| # | Evidence Item | Source System / Location | Date of Evidence | Reviewed By |
|---|---|---|---|---|
| 1 | Alert log export — current quarter | [DCIM / NMS Platform] | [Date range] | [Reviewer Name] |
| 2 | Sensor calibration certificates | [Facilities Records] | [Date] | [Reviewer Name] |
| 3 | UPS test reports | [Facilities / Vendor Reports] | [Date] | [Reviewer Name] |
| 4 | CCTV and access control logs sample | [Physical Security System] | [Date range] | [Reviewer Name] |
| 5 | Monitoring system uptime report | [DCIM / NMS Platform] | [Date range] | [Reviewer Name] |
| 6 | Incident tickets related to environmental alerts | [ITSM System — e.g. ServiceNow] | [Date range] | [Reviewer Name] |
| 7 | Previous quarterly review findings and closure status | [Compliance Repository] | [Date] | [Reviewer Name] |
| 8 | Network availability reports | [NMS Platform] | [Date range] | [Reviewer Name] |
| 9 | Threshold configuration screenshots | [DCIM / NMS Platform] | [Date] | [Reviewer Name] |
| 10 | [Other Evidence Item] | [Source] | [Date] | [Reviewer Name] |

---

## 8. Recommendations

*Document action items arising from the quarterly review. Each recommendation should be tracked to closure and referenced in the subsequent review.*

### 8.1 Open Recommendations

| Ref # | Finding | Risk Level | Recommendation | Responsible Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| REC-[YY]-001 | [Description of gap or observation] | [High / Medium / Low] | [Specific corrective action required] | [Name / Role] | [DD Month YYYY] | [Open / In Progress / Closed] |
| REC-[YY]-002 | [Description of gap or observation] | [High / Medium / Low] | [Specific corrective action required] | [Name / Role] | [DD Month YYYY] | [Open / In Progress / Closed] |
| REC-[YY]-003 | [Description of gap or observation] | [High / Medium / Low] | [Specific corrective action required] | [Name / Role] | [DD Month YYYY] | [Open / In Progress / Closed] |

### 8.2 Closed Recommendations from Prior Review

| Ref # | Original Finding | Closure Evidence | Closed Date | Verified By |
|---|---|---|---|---|
| REC-[YY]-[###] | [Description] | [Evidence reference] | [Date] | [Name] |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for environmental monitoring activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | [Head of IT / CIO] | [Data Centre / Facilities Manager] | [NOC / Operations Team] | [Network / Systems Team] | [CISO / Risk Team] | [Internal Audit] |
|---|---|---|---|---|---|---|
| Define monitoring scope and thresholds | A | C | R | C | C | I |
| Deploy and maintain monitoring systems | I | A | R | R | I | I |
| Respond to critical alerts (< 15 min) | I | C | R | R | I | I |
| Escalate unresolved critical alerts | A | C | R | C | I | I |
| Conduct sensor calibration | I | A | R | I | I | I |
| Conduct quarterly configuration review | A | R | C | C | C | I |
| Update threshold configurations | A | C | R | R | C | I |
| Maintain evidence documentation | I | C | R | I | A | I |
| Report to senior management | A | I | I | I | C | I |
| Independent review / audit of controls | I | I | I | I | C | A |

---

## 10. Sign-off and Approval

*This section documents the formal review and approval of this document. All approvals must be obtained prior to the document being designated as effective.*

### 10.1 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [DD Month YYYY] | [Author Name, Role] | Initial document creation |
| [1.1] | [DD Month YYYY] | [Author Name, Role] | [Description of change] |
| [2.0] | [DD Month YYYY] | [Author Name, Role] | [Description of change] |

### 10.2 Approval Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name] — [Role] | __________________ | [DD Month YYYY] |
| Reviewed By | [Name] — [Data Centre / Facilities Manager] | __________________ | [DD Month YYYY] |
| Reviewed By | [Name] — [Head of IT Infrastructure] | __________________ | [DD Month YYYY] |
| Approved By | [Name] — [Chief Information Officer / Relevant Department Head] | __________________ | [DD Month YYYY] |
| Acknowledged By | [Name] — [Chief Information Security Officer] | __________________ | [DD Month YYYY] |

---

## 11. References

| # | Document / Standard | Issuing Body | Reference |
|---|---|---|---|
| 1 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.25 |
| 2 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | [Additional clause if applicable] |
| 3 | Guidelines on Business Continuity Management | Bank Negara Malaysia (BNM) | [Relevant section] |
| 4 | ISO/IEC 27001:2022 — Information Security Management | International Organization for Standardization | Annex A, Control [8.8 / relevant] |
| 5 | ASHRAE Thermal Guidelines for Data Processing Environments | ASHRAE | [Edition referenced] |
| 6 | TIA-942 — Telecommunications Infrastructure Standard for Data Centers | Telecommunications Industry Association | [Edition referenced] |
| 7 | [Internal Policy Name] — Data Centre Operations Policy | [Organization Name] | [Document ID / Version] |
| 8 | [Internal Policy Name] — IT Risk Management Framework | [Organization Name] | [Document ID / Version] |

---

## Appendices

### Appendix A — Monitoring Architecture Diagram

*Insert or attach a diagram illustrating the end-to-end monitoring architecture, including sensor placement, data flows to monitoring platforms, alert routing paths, and integration with the SIEM and ITSM systems.*

[Diagram to be inserted — reference file: `[ENV_MON_Architecture_v1.0.png]`]

---

### Appendix B — Sensor Inventory and Calibration Register

| Sensor ID | Type | Location | Installed Date | Last Calibration Date | Next Calibration Due | Calibration Cert Ref |
|---|---|---|---|---|---|---|
| [SENS-001] | Temperature | [Rack A01 — Primary DC] | [Date] | [Date] | [Date] | [Cert #] |
| [SENS-002] | Humidity | [Rack A01 — Primary DC] | [Date] | [Date] | [Date] | [Cert #] |
| [SENS-003] | Flood | [Under raised floor — Zone 1] | [Date] | [Date] | [Date] | [Cert #] |
| [SENS-004] | Smoke | [Ceiling — Primary DC] | [Date] | [Date] | [Date] | [Cert #] |

---

### Appendix C — Alert Notification Contact List

*Maintain an up-to-date contact list for all alert notification recipients. This list must be reviewed quarterly and updated whenever personnel changes occur.*

| Role | Name | Contact (Phone) | Contact (Email) | Alert Severity | Availability |
|---|---|---|---|---|---|
| NOC Primary | [Name] | [+60-XX-XXXXXXX] | [email@org.com] | All | 24x7 |
| NOC Secondary | [Name] | [+60-XX-XXXXXXX] | [email@org.com] | All | 24x7 |
| On-call Engineer | [Name] | [+60-XX-XXXXXXX] | [email@org.com] | Critical | 24x7 |
| Head of Infrastructure | [Name] | [+60-XX-XXXXXXX] | [email@org.com] | Critical | Business hours + on-call |
| Facilities Manager | [Name] | [+60-XX-XXXXXXX] | [email@org.com] | Physical / Environmental | Business hours + on-call |
| CISO | [Name] | [+60-XX-XXXXXXX] | [email@org.com] | Critical | Business hours + on-call |

---

### Appendix D — Monitoring Tool Access and Licensing

| Tool / Platform | Vendor | Version | Licence Expiry | Administrator | Access Control Method |
|---|---|---|---|---|---|
| [DCIM Platform] | [Vendor Name] | [Version] | [DD Month YYYY] | [Name] | [Role-based / MFA] |
| [NMS Platform] | [Vendor Name] | [Version] | [DD Month YYYY] | [Name] | [Role-based / MFA] |
| [BMS Integration] | [Vendor Name] | [Version] | [DD Month YYYY] | [Name] | [Role-based / MFA] |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised reproduction, distribution, or disclosure is strictly prohibited. This document shall be stored in the designated compliance evidence repository and subject to access controls consistent with its classification.*

*Document Owner: [Relevant Department Head] | Next Review Due: [Next Review Date]*