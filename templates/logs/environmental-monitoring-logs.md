# Environmental Monitoring Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset/Item Identification](#2-assetitem-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian](#4-owner-and-custodian)
5. [Status and Lifecycle Stage](#5-status-and-lifecycle-stage)
6. [Last Review Date](#6-last-review-date)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document provides the template and governance structure for **Environmental Monitoring Logs** maintained by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 10.25**.

Environmental Monitoring Logs serve as the primary audit trail for continuous surveillance of physical environmental parameters — including temperature, humidity, power supply conditions, and other infrastructure-critical metrics — within all data centres, server rooms, and technology facilities operated by or on behalf of [Organization Name].

These logs support the organisation's obligation to demonstrate proactive detection and response to environmental threats that may compromise the availability, integrity, and confidentiality of information systems and technology assets.

### 1.2 Scope

This template applies to:

- All primary and secondary data centres operated by [Organization Name]
- All server rooms, communications rooms, and network closets housing critical technology assets
- Co-location facilities and third-party hosting environments where [Organization Name] maintains contractual oversight obligations
- Environmental monitoring systems integrated with Building Management Systems (BMS) and Data Centre Infrastructure Management (DCIM) platforms

**Out of Scope:**

- General office environmental systems not co-located with technology assets
- Environmental monitoring at vendor premises where [Organization Name] has no direct monitoring access (subject to periodic vendor assurance reviews)

### 1.3 Regulatory Context

*This section establishes the regulatory basis for maintaining Environmental Monitoring Logs. Reference this section during internal audits and BNM examinations.*

This document is issued pursuant to the following regulatory instruments:

- **BNM RMiT Policy Document (Effective Date: 1 January 2020, as amended)**, Clause 10.25 — Physical and Environmental Security
- BNM's expectations under RMiT for financial institutions to implement adequate physical controls that protect technology assets from environmental hazards including fire, flood, extreme temperatures, and power disruptions

[Organization Name] is a **[Licensed Financial Institution / Digital Bank / Insurance / Takaful Operator]** regulated by Bank Negara Malaysia and is subject to full compliance with the RMiT Policy Document.

---

## 2. Asset/Item Identification

*This section identifies all physical locations and monitoring systems covered by the environmental monitoring programme. Each monitored asset or zone must be uniquely identified to enable traceability across log entries.*

### 2.1 Monitored Facility Register

| Facility ID | Facility Name | Location / Address | Facility Type | Criticality Tier | Monitoring System |
|---|---|---|---|---|---|
| [FAC-001] | [Primary Data Centre] | [Street Address, City] | Primary DC | Tier [1/2/3/4] | [System Name / BMS] |
| [FAC-002] | [Disaster Recovery Site] | [Street Address, City] | DR Site | Tier [1/2/3/4] | [System Name / BMS] |
| [FAC-003] | [Server Room — HQ] | [Floor, Building, City] | Server Room | [Critical/High] | [System Name] |
| [FAC-00X] | [Add rows as required] | | | | |

### 2.2 Sensor and Monitoring Node Inventory

*List all individual sensors, probes, and monitoring nodes deployed within each facility. Each node must be assigned a unique identifier and mapped to a specific physical zone.*

| Sensor ID | Sensor Type | Monitored Parameter | Physical Zone | Rack/Cabinet | Facility ID | Hardware Model | Calibration Due Date |
|---|---|---|---|---|---|---|---|
| [SEN-001] | Temperature Probe | Temperature (°C) | [Cold Aisle / Hot Aisle / General] | [Rack ID] | [FAC-001] | [Model No.] | [Date] |
| [SEN-002] | Humidity Sensor | Relative Humidity (%) | [Zone Description] | [N/A] | [FAC-001] | [Model No.] | [Date] |
| [SEN-003] | Water Leak Detector | Water Ingress | [Under Raised Floor] | [N/A] | [FAC-001] | [Model No.] | [Date] |
| [SEN-004] | Power Monitoring Unit | PDU Voltage / Current | [UPS Room] | [PDU ID] | [FAC-001] | [Model No.] | [Date] |
| [SEN-005] | Smoke Detector (IT) | Particulate / Smoke | [General Room] | [N/A] | [FAC-001] | [Model No.] | [Date] |
| [SEN-00X] | [Add rows as required] | | | | | | |

### 2.3 Environmental Parameters Monitored

*Confirm which parameters are actively monitored and specify the acceptable operating thresholds established by [Organization Name] in alignment with ASHRAE or applicable equipment manufacturer specifications.*

| Parameter | Unit | Minimum Threshold | Maximum Threshold | Critical Alert Threshold | Applicable Standard |
|---|---|---|---|---|---|
| Temperature | °C | [18°C] | [27°C] | [>30°C or <15°C] | ASHRAE A1 / Equipment Spec |
| Relative Humidity | % RH | [40%] | [60%] | [>70% or <30%] | ASHRAE / TIA-942 |
| Dew Point | °C | [5.5°C] | [15°C] | [>17°C] | ASHRAE |
| Particulate Matter | mg/m³ | [N/A] | [Threshold] | [Alert Level] | ISO 14644 |
| Water Ingress | Presence | None | None | Any Detection | Internal Policy |
| PDU Input Voltage | V | [220V] | [240V] | [<200V or >250V] | Equipment Spec |
| UPS Battery Level | % | [80%] | [100%] | [<50%] | Internal Policy |
| Generator Fuel Level | % | [70%] | [100%] | [<50%] | Internal Policy |

---

## 3. Classification and Categorisation

*This section establishes how environmental monitoring logs are classified for information security and records management purposes. Classification determines handling, retention, and access control requirements.*

### 3.1 Document and Log Classification

| Classification Level | Applies To | Handling Requirements |
|---|---|---|
| **Confidential** | Aggregated environmental monitoring reports, threshold configuration data, facility layout information | Access restricted to authorised personnel; not to be shared externally without approval |
| **Internal** | Raw sensor logs and time-series data | Accessible to IT Operations and authorised support personnel |
| **Restricted** | Incident reports linking environmental events to specific system outages | Restricted to senior management and compliance/audit functions |

> **Applicable Classification:** This document and associated logs are classified as **Confidential** in accordance with [Organization Name]'s Information Classification Policy [REF: Policy ID].

### 3.2 Log Type Categorisation

| Log Category | Description | Retention Period | Storage Location |
|---|---|---|---|
| Continuous Sensor Telemetry | Raw time-series data from all sensors at [polling interval] | [Minimum 3 years / per policy] | [DCIM System / SIEM / Log Aggregator] |
| Threshold Breach Alerts | Automated alerts generated when parameters exceed defined thresholds | [Minimum 3 years] | [Alerting Platform / ITSM] |
| Incident Correlation Logs | Logs linked to formal incident tickets raised as a result of environmental events | [Minimum 7 years] | [ITSM Platform] |
| Maintenance Activity Logs | Records of physical inspections, sensor calibrations, and system maintenance | [Minimum 3 years] | [CMDB / Document Management] |
| Quarterly Review Reports | Aggregated analysis reports produced during quarterly reviews | [Minimum 5 years] | [Document Management System] |

### 3.3 Records Management

- **Retention Schedule Reference:** [Records Retention Schedule ID]
- **Disposal Authority:** [Role/Position authorised to approve disposal]
- **Disposal Method:** Secure deletion in accordance with [Data Disposal Policy ID]

---

## 4. Owner and Custodian

*This section defines clear accountability for the environmental monitoring programme and associated logs. Ownership and custodianship must be formally assigned and reviewed annually.*

### 4.1 Asset Ownership

| Role | Name | Department | Responsibilities |
|---|---|---|---|
| **Document Owner** | IT Operations Manager | [Department Name] | Accountable for the completeness, accuracy, and currency of this document and the monitoring programme |
| **System Owner** | [Name / Role] | [Department Name] | Owns the DCIM/BMS platform and sensor infrastructure |
| **Data Owner** | [Name / Role] | [Department Name] | Accountable for the integrity and retention of log data |

### 4.2 Operational Custodians

*Custodians are responsible for day-to-day management and have no ownership authority but bear responsibility for operational compliance.*

| Custodian Role | Name | Facility / Scope | Contact |
|---|---|---|---|
| Data Centre Operations Lead | [Name] | [FAC-001 — Primary DC] | [Email / Phone] |
| Infrastructure Engineer | [Name] | [FAC-002 — DR Site] | [Email / Phone] |
| Facilities Management Representative | [Name] | All Facilities | [Email / Phone] |
| Third-Party Co-location Contact | [Vendor Name / Contact] | [FAC-00X] | [Email / Phone] |

### 4.3 Escalation Matrix

| Escalation Level | Trigger | Notified Party | Target Response Time |
|---|---|---|---|
| Level 1 — Warning | Parameter approaches threshold (>80% of limit) | Data Centre Operations Lead | [15 minutes] |
| Level 2 — Alert | Parameter exceeds defined threshold | IT Operations Manager + Facilities | [30 minutes] |
| Level 3 — Critical | Parameter exceeds critical threshold; potential asset impact | CTO / Head of IT + Incident Response Team | [Immediate / <15 minutes] |
| Level 4 — Executive | Confirmed environmental incident causing service disruption | [C-Suite / Board Risk Committee] | [Per Incident Response Policy] |

---

## 5. Status and Lifecycle Stage

*This section tracks the operational status of each monitoring component and the overall programme lifecycle. This supports audit readiness and capacity planning.*

### 5.1 Monitoring System Operational Status

| System / Component | Current Status | Last Verified | Verified By | Next Scheduled Maintenance |
|---|---|---|---|---|
| [DCIM Platform Name] | [Operational / Degraded / Under Maintenance] | [Date] | [Name] | [Date] |
| [BMS Integration] | [Operational / Disconnected] | [Date] | [Name] | [Date] |
| [Alerting / Notification System] | [Operational] | [Date] | [Name] | [Date] |
| [Log Aggregation Platform] | [Operational] | [Date] | [Name] | [Date] |

**Status Definitions:**

- **Operational** — System is functioning within normal parameters; all sensors reporting
- **Degraded** — Partial functionality; some sensors offline or reporting anomalies; compensating controls in place
- **Under Maintenance** — Planned maintenance window; manual monitoring procedures activated
- **Decommissioned** — System or sensor permanently retired; replacement in place

### 5.2 Sensor Lifecycle Status

| Sensor ID | Installation Date | Last Calibration | Calibration Due | Status | Action Required |
|---|---|---|---|---|---|
| [SEN-001] | [Date] | [Date] | [Date] | [Active / Due for Calibration] | [None / Schedule Calibration] |
| [SEN-002] | [Date] | [Date] | [Date] | [Active] | [None] |
| [SEN-00X] | | | | | |

### 5.3 Programme Lifecycle Stage

| Stage | Description | Current Stage | Target Date |
|---|---|---|---|
| Deployment | Initial sensor installation and system configuration | ☐ | [Date] |
| Commissioning | Baseline calibration, threshold configuration, and UAT | ☐ | [Date] |
| Operational | Continuous monitoring in production | ☐ | [Date] |
| Review | Quarterly review of thresholds, alerts, and log integrity | ☐ | [Date] |
| Enhancement | Planned upgrades or expansion of monitoring scope | ☐ | [Date] |

> **Current Programme Status:** [Operational] as of [Date]

---

## 6. Last Review Date

*This section records the outcomes and findings from the most recent formal quarterly review of the environmental monitoring programme, as required by [Organization Name]'s review cycle.*

### 6.1 Review Schedule

| Review Type | Frequency | Last Completed | Next Scheduled | Responsible Party |
|---|---|---|---|---|
| Continuous Automated Monitoring | Real-time / Continuous | N/A — Ongoing | N/A — Ongoing | DCIM System / IT Operations |
| Alert Threshold Review | Quarterly | [Date] | [Date] | IT Operations Manager |
| Sensor Calibration Verification | Quarterly | [Date] | [Date] | Infrastructure Engineer |
| Log Integrity and Completeness Review | Quarterly | [Date] | [Date] | IT Operations Manager |
| Physical Inspection of Monitoring Infrastructure | Quarterly | [Date] | [Date] | Data Centre Operations Lead |
| Annual Environmental Risk Assessment | Annual | [Date] | [Date] | IT Operations Manager / CISO |
| Third-Party / Co-location Vendor Review | Annual | [Date] | [Date] | IT Operations Manager |

### 6.2 Most Recent Quarterly Review Summary

**Review Period:** [Q1/Q2/Q3/Q4] [Year] | **Review Date:** [Date] | **Reviewed By:** [Name, Role]

| Review Area | Findings | Status | Remediation Action | Target Date |
|---|---|---|---|---|
| Temperature Thresholds | [Finding description or "No issues identified"] | [Open / Closed / N/A] | [Action or N/A] | [Date or N/A] |
| Humidity Thresholds | [Finding description or "No issues identified"] | [Open / Closed / N/A] | [Action or N/A] | [Date or N/A] |
| Sensor Coverage Gaps | [Any zones without adequate coverage] | [Open / Closed / N/A] | [Action or N/A] | [Date or N/A] |
| Alert Response Times | [Review of SLA adherence for alert responses] | [Open / Closed / N/A] | [Action or N/A] | [Date or N/A] |
| Log Completeness | [Gaps or anomalies in log records] | [Open / Closed / N/A] | [Action or N/A] | [Date or N/A] |
| Calibration Currency | [Sensors overdue for calibration] | [Open / Closed / N/A] | [Action or N/A] | [Date or N/A] |

**Overall Review Outcome:** [Satisfactory / Requires Improvement / Unsatisfactory]

**Reviewer Comments:**
> *[Insert summary narrative from the reviewing officer — e.g., "All monitored parameters remained within defined thresholds during the review period. Two sensors (SEN-003, SEN-007) are due for recalibration and have been scheduled for [date]. No critical environmental incidents were recorded."]*

**Sign-off:** ______________________________ Date: _______________
**IT Operations Manager:** [Name]

---

## 7. Roles and Responsibilities

*This RACI matrix defines accountability for all key activities within the Environmental Monitoring programme. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IT Operations Manager | Data Centre Operations Lead | Infrastructure Engineer | Facilities Management | CISO / Head of InfoSec | CTO / Head of IT | Internal Audit | Compliance |
|---|---|---|---|---|---|---|---|---|
| Define monitoring thresholds and parameters | A | R | C | C | C | I | I | I |
| Deploy and configure sensors | I | A | R | C | I | I | I | I |
| Calibrate and maintain sensors | A | R | R | C | I | I | I | I |
| Monitor real-time environmental data | A | R | R | I | I | I | I | I |
| Respond to Level 1–2 alerts | A | R | R | C | I | I | I | I |
| Respond to Level 3–4 critical incidents | C | R | R | R | C | A | I | I |
| Conduct quarterly log reviews | A | R | C | I | C | I | C | C |
| Maintain sensor inventory and CMDB records | A | C | R | I | I | I | I | I |
| Review and approve document updates | A | I | I | I | C | C | I | C |
| Report to BNM / Regulatory bodies | I | I | I | I | C | A | C | R |
| Internal audit of monitoring programme | I | C | C | I | C | I | A | C |
| Third-party/vendor monitoring assurance | A | C | C | I | C | I | I | R |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Role | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | IT Operations Manager | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Role] | [Description of changes] |
| [X.X] | [Date] | [Author Name] | [Role] | [Description of changes] |

### 8.2 Approval Sign-Off

*This document requires formal approval from the following roles prior to implementation and upon each material revision.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager (Owner) | [Name] | __________________ | [Date] |
| Chief Information Officer / Head of IT | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Head of Compliance | [Name] | __________________ | [Date] |
| [Board Risk Committee / MANCO Representative] | [Name] | __________________ | [Date] |

---

## 9. References

*The following regulatory instruments, standards, and internal policies govern this document.*

### 9.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | **Clause 10.25** — Physical and Environmental Controls |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.20–10.24 — Physical Security (contextual) |
| [PDPA 2010] | Personal Data Protection Act 2010 | Parliament of Malaysia | [Relevant sections if personal data processed in monitored systems] |
| [NACSA Guidelines] | National Cyber Security Agency Guidelines | NACSA | [Relevant sections as applicable] |

### 9.2 Referenced Standards

| Standard | Title | Relevance |
|---|---|---|
| ASHRAE TC 9.9 | Thermal Guidelines for Data Processing Environments | Temperature and humidity thresholds |
| TIA-942 | Telecommunications Infrastructure Standard for Data Centers | Physical infrastructure and monitoring requirements |
| ISO/IEC 27001:2022 | Information Security Management Systems | A.7.5 — Physical security monitoring |
| ISO 14644 | Cleanrooms and Associated Controlled Environments | Particulate matter standards (if applicable) |

### 9.3 Internal Policy References

| Document ID | Document Title | Owner |
|---|---|---|
| [POL-INFRA-001] | Data Centre Physical Security Policy | IT Operations Manager |
| [POL-INC-001] | Incident Management Policy | CISO |
| [POL-REC-001] | Records Retention and Disposal Policy | Head of Compliance |
| [POL-BCP-001] | Business Continuity and Disaster Recovery Policy | CTO |
| [POL-ISMS-001] | Information Security Management Policy | CISO |

---

## 10. Appendices

### Appendix A — Sample Environmental Log Entry Format

*The following table illustrates the minimum required fields for each automated log entry generated by the environmental monitoring system.*

| Field | Description | Example Value |
|---|---|---|
| Log Entry ID | Unique auto-generated identifier | ENV-LOG-20260101-00001 |
| Timestamp | Date and time of reading (ISO 8601, UTC+8) | 2026-01-01T08:00:00+08:00 |
| Facility ID | Reference to monitored facility | FAC-001 |
| Sensor ID | Reference to specific sensor node | SEN-003 |
| Parameter | Environmental parameter measured | Temperature |
| Value | Recorded measurement | 24.5 |
| Unit | Unit of measurement | °C |
| Status | Normal / Warning / Alert / Critical | Normal |
| Alert Generated | Whether an automated alert was triggered | No |
| Alert Reference | ITSM ticket or alert ID (if applicable) | N/A |

### Appendix B — Threshold Breach Incident Log Template

*To be completed by the Data Centre Operations Lead or IT Operations Manager upon any threshold breach event.*

| Field | Value |
|---|---|
| **Incident Reference** | [INC-YYYYMMDD-XXX] |
| **Date / Time Detected** | [Date and Time] |
| **Facility** | [Facility Name / ID] |
| **Sensor ID** | [SEN-XXX] |
| **Parameter** | [e.g., Temperature] |
| **Threshold Breached** | [e.g., Exceeded 30°C] |
| **Recorded Value at Alert** | [e.g., 31.2°C] |
| **Duration of Breach** | [e.g., 12 minutes] |
| **Immediate Action Taken** | [Description of response] |
| **Root Cause** | [Description of identified root cause] |
| **Assets Potentially Affected** | [List of systems or equipment at risk] |
| **Resolved Date / Time** | [Date and Time] |
| **Preventive Action** | [Description or N/A] |
| **Reported By** | [Name, Role] |
| **Reviewed By** | [IT Operations Manager, Date] |

### Appendix C — Quarterly Environmental Review Checklist

*The IT Operations Manager or delegated reviewer must complete this checklist during each quarterly review cycle.*

- [ ] All sensors confirmed operational and reporting within the review period
- [ ] No unexplained gaps in sensor telemetry data (>15 minutes continuous absence must be investigated)
- [ ] All threshold breach incidents from the quarter have been formally recorded and closed
- [ ] Sensor calibration schedules verified; overdue calibrations escalated for immediate action
- [ ] Alert notification contacts and escalation matrix verified as current
- [ ] DCIM/BMS system software confirmed as patched and up to date
- [ ] Log retention confirmed — records older than [X years] disposed of per retention schedule
- [ ] Third-party co-location facility environmental reports reviewed and filed
- [ ] Any capacity or coverage gaps identified and added to risk register
- [ ] Quarterly review report completed, signed, and filed in [Document Management System]

### Appendix D — Contact Directory

*Maintain current contact details for all parties referenced in the escalation matrix and ownership register.*

| Role | Name | Department | Phone | Email | Alternate Contact |
|---|---|---|---|---|---|
| IT Operations Manager | [Name] | [Dept] | [Number] | [Email] | [Name / Number] |
| Data Centre Operations Lead | [Name] | [Dept] | [Number] | [Email] | [Name / Number] |
| Facilities Management | [Name] | [Dept] | [Number] | [Email] | [Name / Number] |
| CISO | [Name] | [Dept] | [Number] | [Email] | [Name / Number] |
| CTO / Head of IT | [Name] | [Dept] | [Number] | [Email] | [Name / Number] |
| DCIM Vendor Support | [Vendor Name] | [N/A] | [Support Number] | [Support Email] | [Escalation Contact] |
| BMS Vendor Support | [Vendor Name] | [N/A] | [Support Number] | [Support Email] | [Escalation Contact] |

---

*This document is the property of [Organization Name] and is classified **Confidential**. Unauthorised reproduction, distribution, or disclosure is strictly prohibited. For queries regarding this document, contact the IT Operations Manager at [contact details].*

*Document ID: [Document ID] | Version 1.0 | © [Year] [Organization Name]. All rights reserved.*