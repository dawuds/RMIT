# Environmental Control Procedures

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Infrastructure |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 10.25 |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy References](#3-regulatory-and-policy-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Process Flow Overview](#5-process-flow-overview)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Physical Access Control Zones](#7-physical-access-control-zones)
8. [Environmental Monitoring Controls](#8-environmental-monitoring-controls)
9. [HVAC Systems and Climate Control](#9-hvac-systems-and-climate-control)
10. [Fire Suppression and Detection](#10-fire-suppression-and-detection)
11. [Power Management and Electrical Controls](#11-power-management-and-electrical-controls)
12. [Redundancy and Failover Design](#12-redundancy-and-failover-design)
13. [Incident Response and Escalation](#13-incident-response-and-escalation)
14. [Maintenance and Testing Schedule](#14-maintenance-and-testing-schedule)
15. [Audit, Compliance, and Reporting](#15-audit-compliance-and-reporting)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose

*State the overarching purpose of this document, why it was created, and the risk it mitigates.*

This document establishes the formal procedures for monitoring, maintaining, and managing environmental conditions within [Organization Name]'s data centre and technology infrastructure facilities. These procedures are designed to protect critical information technology assets from physical and environmental threats — including temperature and humidity fluctuations, fire, water ingress, power anomalies, and unauthorized physical access — in alignment with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document.

The procedures defined herein ensure that:

- Environmental risks to data centre operations are identified, assessed, and mitigated proactively.
- Continuous monitoring mechanisms are in place to detect and respond to environmental anomalies in real time.
- Redundant systems are designed and tested to maintain availability and resilience of critical infrastructure.
- Compliance with BNM RMiT Clause 10.25 and related regulatory obligations is demonstrated and evidenced.
- Operational accountability is clearly defined across all relevant infrastructure and facilities management roles.

---

## 2. Scope and Applicability

*Define precisely which facilities, systems, personnel, and third parties fall within the scope of these procedures.*

### 2.1 In-Scope Facilities

These procedures apply to all technology infrastructure facilities operated by or on behalf of [Organization Name], including:

| Facility | Location | Classification | Tier Rating |
|---|---|---|---|
| Primary Data Centre | [Primary DC Address] | Tier [III/IV] | [Uptime Institute Tier] |
| Secondary / Disaster Recovery Data Centre | [DR DC Address] | Tier [II/III] | [Uptime Institute Tier] |
| Network Equipment Rooms | [Building/Floor Locations] | Restricted | N/A |
| Server Rooms (Branch / Regional) | [Location List] | Restricted | N/A |
| Co-location Facilities | [Colocation Provider Name, Location] | [Classification] | [Tier] |

### 2.2 In-Scope Systems and Assets

- All physical servers, storage arrays, and network infrastructure hosted in the facilities listed above.
- Environmental monitoring systems (EMS) and building management systems (BMS).
- HVAC (Heating, Ventilation, and Air Conditioning) units and precision cooling systems.
- Uninterruptible Power Supplies (UPS), diesel generators, and power distribution units (PDU).
- Fire detection and suppression systems.
- Physical access control systems (PACS), CCTV, and security management systems.
- Water and liquid detection sensors.

### 2.3 In-Scope Personnel and Third Parties

- [Organization Name] Infrastructure and Data Centre Operations teams.
- Facilities Management personnel with access to or responsibility for data centre environments.
- Third-party managed service providers and co-location partners with contractual obligations to [Organization Name].
- Vendors and contractors performing maintenance or installation within in-scope facilities.

### 2.4 Out of Scope

- Cloud-hosted infrastructure managed entirely by third-party cloud service providers (subject to separate Cloud Risk Management Policy).
- Office workstations and end-user computing equipment outside of designated data centre or server room environments.
- [Any other exclusions relevant to the organization]

---

## 3. Regulatory and Policy References

*List all regulatory instruments, BNM policy documents, internal policies, and standards that govern or inform these procedures.*

### 3.1 Regulatory Requirements

| Reference | Document | Clause / Section | Requirement Summary |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.25 | Physical and environmental controls for data centres and technology facilities |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.1 – 10.5 | Technology risk governance and oversight |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11 | Business continuity and disaster recovery |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 9 | Security of personal data in physical environments |
| NACSA | National Cyber Security Agency Guidelines | Physical Security Controls | Environmental and physical protection standards |

### 3.2 Internal Policy References

| Document Title | Document ID | Owner |
|---|---|---|
| Information Security Policy | [Doc ID] | Chief Information Security Officer |
| Physical Security Policy | [Doc ID] | Head of Security |
| Business Continuity Policy | [Doc ID] | Chief Risk Officer |
| IT Asset Management Policy | [Doc ID] | Head of Infrastructure |
| Vendor and Third-Party Risk Management Policy | [Doc ID] | Head of Risk |
| Change Management Policy | [Doc ID] | Head of IT Operations |

### 3.3 Industry Standards and Frameworks

| Standard | Relevant Sections |
|---|---|
| ISO/IEC 27001:2022 | Annex A — Physical and Environmental Security (A.7) |
| ISO/IEC 27002:2022 | Controls 7.1–7.13 (Physical and Environmental Security) |
| Uptime Institute Tier Standards | Tier Topology and Operational Sustainability |
| TIA-942 | Telecommunications Infrastructure Standard for Data Centres |
| NFPA 75 | Standard for the Fire Protection of Information Technology Equipment |

---

## 4. Definitions and Abbreviations

*Provide clear definitions for all technical terms and abbreviations used throughout this document to ensure consistent interpretation.*

| Term / Abbreviation | Definition |
|---|---|
| **BMS** | Building Management System — an automated system that monitors and controls a facility's mechanical, electrical, and HVAC infrastructure. |
| **BNM** | Bank Negara Malaysia — the Central Bank of Malaysia and issuing authority of the RMiT Policy Document. |
| **CRAC** | Computer Room Air Conditioning — precision cooling units deployed within data centre white spaces. |
| **CRAH** | Computer Room Air Handler — units that circulate air over a chilled water coil to cool data centre environments. |
| **EMS** | Environmental Monitoring System — a system that continuously monitors environmental parameters such as temperature, humidity, and water ingress. |
| **EPO** | Emergency Power Off — a mechanism enabling immediate shutdown of electrical power to the data centre in an emergency. |
| **HVAC** | Heating, Ventilation, and Air Conditioning — systems maintaining optimal environmental conditions within facilities. |
| **PACS** | Physical Access Control System — systems governing and logging physical access to restricted zones. |
| **PDU** | Power Distribution Unit — a device that distributes electrical power to IT equipment within a rack or row. |
| **PUE** | Power Usage Effectiveness — a metric for data centre energy efficiency (ratio of total facility power to IT equipment power). |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management in financial institutions. |
| **RPO** | Recovery Point Objective — the maximum tolerable data loss in the event of an outage. |
| **RTO** | Recovery Time Objective — the maximum tolerable time to restore operations following an outage. |
| **SLA** | Service Level Agreement — a contractual commitment between service provider and customer. |
| **UPS** | Uninterruptible Power Supply — a battery-backed power device providing short-term power during outages. |
| **VESDA** | Very Early Smoke Detection Apparatus — a high-sensitivity smoke detection system used in data centres. |

---

## 5. Process Flow Overview

*Describe the end-to-end process for environmental monitoring and control, from normal operations through escalation to resolution.*

### 5.1 Operational Process Flow

*Illustrate the sequential steps and decision points in managing environmental conditions. The flow below should be adapted to reflect actual tooling and escalation paths.*

```
┌─────────────────────────────────────────────────────────────────┐
│              NORMAL OPERATIONS — CONTINUOUS MONITORING          │
│   EMS/BMS sensors collect real-time data (temp, humidity,       │
│   power, smoke, water ingress) on a [X]-minute polling cycle    │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    ┌────────▼────────┐
                    │ Threshold       │
                    │ Breached?       │
                    └──┬──────────┬──┘
                      NO         YES
                       │          │
                       ▼          ▼
               Continue    ┌─────────────────┐
               Monitoring  │ Automated Alert  │
                           │ Triggered (EMS)  │
                           └────────┬────────┘
                                    │
                           ┌────────▼────────┐
                           │ Severity         │
                           │ Classification   │
                           └──┬──────────┬───┘
                            LOW/MED     HIGH/CRITICAL
                               │              │
                               ▼              ▼
                      DC Ops Team       Incident Commander
                      Investigates      Notified Immediately
                               │              │
                               ▼              ▼
                      Remediation      Emergency Response
                      Actions          Procedures Activated
                               │              │
                               └──────┬───────┘
                                      │
                               ┌──────▼───────┐
                               │ Incident Log  │
                               │ Updated &     │
                               │ RCA Completed │
                               └──────────────┘
```

### 5.2 Step-by-Step Procedure

**Step 1 — Continuous Environmental Monitoring**

| Sub-Step | Action | Responsible | Frequency |
|---|---|---|---|
| 1.1 | Verify EMS/BMS dashboard is operational and all sensors are reporting | DC Operations Engineer | Every shift (minimum 3x daily) |
| 1.2 | Review automated monitoring reports for anomalies | DC Operations Lead | Daily |
| 1.3 | Confirm all environmental thresholds are configured in EMS | Infrastructure Manager | Quarterly |

**Step 2 — Alert Triage and Classification**

| Sub-Step | Action | Responsible |
|---|---|---|
| 2.1 | Receive automated alert from EMS/BMS system | DC Operations Engineer (On-call) |
| 2.2 | Acknowledge alert within [X] minutes per SLA | DC Operations Engineer |
| 2.3 | Classify alert severity using Severity Matrix (Appendix B) | DC Operations Lead |
| 2.4 | Dispatch on-site personnel to physically verify condition | DC Operations Engineer |

**Step 3 — Remediation and Escalation**

| Sub-Step | Action | Responsible |
|---|---|---|
| 3.1 | For low/medium severity: implement immediate corrective action | DC Operations Engineer |
| 3.2 | For high/critical severity: activate Incident Response Procedure (Section 13) | Incident Commander |
| 3.3 | Notify Head of Infrastructure and relevant stakeholders | DC Operations Lead |
| 3.4 | Engage vendor/specialist support if internal resolution is not feasible | Infrastructure Manager |

**Step 4 — Documentation and Closure**

| Sub-Step | Action | Responsible |
|---|---|---|
| 4.1 | Log all environmental incidents in the ITSM/ticketing system | DC Operations Engineer |
| 4.2 | Complete Root Cause Analysis (RCA) for all high/critical incidents | Infrastructure Manager |
| 4.3 | Update risk register if a new or elevated risk is identified | Head of Infrastructure |
| 4.4 | Review and close incident ticket with management sign-off | DC Operations Lead |

---

## 6. Roles and Responsibilities

*Define accountability and ownership for all environmental control activities using a RACI framework.*

### 6.1 Role Descriptions

| Role | Description |
|---|---|
| **Head of Infrastructure** | Document owner; accountable for overall environmental risk management and regulatory compliance. |
| **Infrastructure Manager** | Operational management of data centre facilities; oversight of monitoring systems and maintenance schedules. |
| **DC Operations Lead** | Day-to-day supervision of data centre operations; shift management; incident escalation authority. |
| **DC Operations Engineer** | Hands-on monitoring, first-response to alerts, execution of environmental control procedures. |
| **Facilities Manager** | Management of building systems including HVAC, power, and physical security infrastructure. |
| **CISO / Information Security** | Policy oversight; review of environmental controls in context of overall information security posture. |
| **Chief Risk Officer** | Enterprise risk governance; review of environmental incidents in risk register. |
| **Vendor / Maintenance Contractor** | Scheduled and emergency maintenance of HVAC, UPS, generator, fire suppression, and monitoring systems. |
| **Internal Audit** | Independent assessment of compliance with these procedures. |

### 6.2 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | Head of Infra | Infra Manager | DC Ops Lead | DC Ops Engineer | Facilities Mgr | CISO | CRO | Vendor | Internal Audit |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Define and maintain environmental thresholds | A | R | C | I | C | C | I | — | I |
| Continuous environmental monitoring | A | C | R | R | C | I | I | — | I |
| Alert triage and severity classification | A | C | R | R | I | I | I | — | I |
| Physical access zone management | A | R | C | I | R | C | I | — | I |
| HVAC operation and maintenance | A | C | I | I | R | I | I | R | I |
| Fire suppression system testing | A | C | I | I | R | I | I | R | I |
| UPS and generator testing | A | C | I | I | R | I | I | R | I |
| Environmental incident response | A | R | R | R | C | C | I | C | I |
| Incident documentation and RCA | A | R | R | R | C | C | C | — | I |
| Quarterly compliance review | A | R | C | I | C | R | C | — | R |
| Vendor performance management | A | R | C | I | C | I | I | R | I |
| Policy and procedure review | A | R | C | I | C | C | C | — | C |
| Regulatory reporting (BNM) | A | C | I | I | I | R | R | — | C |

---

## 7. Physical Access Control Zones

*Define the physical security zones within the data centre and the access control requirements applicable to each zone.*

### 7.1 Zone Classification

*Describe the concentric security zones deployed within the facility. Tailor zone names and descriptions to actual facility layout.*

| Zone | Zone Name | Description | Access Level Required |
|---|---|---|---|
| **Zone 0** | Facility Perimeter | Outer boundary of the building/campus. Includes vehicle barriers, perimeter fencing, and external CCTV. | General (building access) |
| **Zone 1** | Reception / Visitor Area | Publicly accessible lobby; visitor management and badging processes enforced. | Visitor pass + escort |
| **Zone 2** | Operations / Office Area | General staff areas adjacent to data centre facility. | [Organization Name] staff badge |
| **Zone 3** | Data Centre Anteroom | Staging area and man-trap/airlock entry point before entering the data centre floor. | Approved DC personnel + biometric |
| **Zone 4** | Data Centre White Space | Primary server floor, housing all production IT equipment in racks and cages. | Approved DC personnel + dual-factor authentication |
| **Zone 5** | Critical Systems Room | Houses UPS systems, PDUs, network core, and security systems. | Senior DC Operations / Facilities only |
| **Zone 6** | Restricted Cage / Secure Area | High-security enclosures for the most sensitive systems (e.g., HSMs, core banking infrastructure). | Named individuals only; dual authorization required |

### 7.2 Access Control Requirements by Zone

| Requirement | Zone 3 | Zone 4 | Zone 5 | Zone 6 |
|---|---|---|---|---|
| **Physical Barrier** | Card reader + PIN | Card reader + Biometric | Card reader + Biometric | Card reader + Biometric + Key |
| **Visitor Escort** | Required | Required | Required | Required (dual escort) |
| **Access Log Retention** | 12 months | 12 months | 24 months | 24 months |
| **CCTV Coverage** | Yes | Yes (full coverage) | Yes | Yes |
| **Access Review Frequency** | Quarterly | Quarterly | Monthly | Monthly |
| **Tailgating Prevention** | Man-trap/airlock | Anti-passback | Anti-passback | Anti-passback + Guard |
| **After-Hours Access** | Pre-approved list | Pre-approved list + supervisor notification | Prior written authorization | Prior written authorization + CISO notification |

### 7.3 Access Management Procedures

**7.3.1 Provisioning Access**

1. Requestor submits formal Access Request Form (Appendix C) via [ITSM System / HR System].
2. Line manager and Head of Infrastructure review and approve the request.
3. For Zone 5 and Zone 6: CISO co-approval is required.
4. Facilities Manager provisions access card / biometric enrollment.
5. Access grant is logged in the Physical Access Control System (PACS) and the access register.
6. New access holder completes Data Centre Rules of Engagement induction (Appendix D) before first access.

**7.3.2 Revoking Access**

1. Upon staff departure or role change, HR/line manager notifies the Infrastructure Manager within [X] business day(s).
2. Infrastructure Manager revokes access in PACS immediately upon notification.
3. Physical access cards must be returned; biometric templates must be deleted.
4. Access revocation is logged and confirmed in the access register.

**7.3.3 Periodic Access Review**

1. Quarterly: DC Operations Lead reviews all active access privileges for Zones 3 and 4.
2. Monthly: Infrastructure Manager reviews Zone 5 and Zone 6 access.
3. All unnecessary or dormant access rights are removed within [X] business days of review completion.
4. Review evidence is retained for audit purposes.

---

## 8. Environmental Monitoring Controls

*Describe the monitoring systems, sensor deployment, thresholds, alerting mechanisms, and reporting cadence.*

### 8.1 Environmental Monitoring System (EMS) Overview

*Provide a summary of the EMS/BMS platform in use, its coverage, and integration with alerting systems.*

| Attribute | Details |
|---|---|
| **EMS/BMS Platform** | [System Name, e.g., Schneider EcoStruxure, Vertiv Environet, custom BMS] |
| **Monitoring Coverage** | [Number] sensors across [Number] monitoring zones |
| **Alert Channels** | Email, SMS, ITSM ticket auto-creation, dashboard alarm |
| **Data Retention** | Minimum [24 months] of sensor log data |
| **Availability Target** | [99.9%] uptime for monitoring systems |

### 8.2 Monitored Parameters and Threshold Configuration

| Parameter | Sensor Type | Warning Threshold | Critical Threshold | Measurement Frequency |
|---|---|---|---|---|
| Temperature (hot aisle) | Precision temperature sensor | >[35°C] | >[40°C] | Every [60] seconds |
| Temperature (cold aisle) | Precision temperature sensor | <[18°C] or >[27°C] | <[15°C] or >[30°C] | Every [60] seconds |
| Relative Humidity | Capacitive humidity sensor | <[30%] or >[65%] RH | <[20%] or >[80%] RH | Every [60] seconds |
| Differential Air Pressure | Pressure transducer | <[5] Pa | <[2] Pa | Every [5] minutes |
| Water / Liquid Ingress | Water rope / spot sensors | Any detection = Warning | — | Continuous |
| Smoke Detection (VESDA) | Air-sampling smoke detector | [Alert Level 1] | [Alert Level 2 / Fire] | Continuous |
| Electrical Power (per PDU) | Power metering on PDUs | >[80%] capacity | >[90%] capacity | Every [30] seconds |
| UPS Battery Level | UPS management interface | <[50%] charge | <[25%] charge | Every [5] minutes |
| Generator Fuel Level | Tank level sensor | <[50%] capacity | <[25%] capacity | Every [15] minutes |

*Thresholds should be reviewed against ASHRAE Thermal Guidelines for Data Processing Environments (Class A1–A4) and the specific equipment vendor recommendations.*

### 8.3 Sensor Placement Standards

- Temperature and humidity sensors shall be deployed at a **minimum of one sensor per rack row** at hot aisle and cold aisle positions (top, middle, and bottom of rack).
- Water detection rope sensors shall be installed **beneath raised floor panels**, around perimeter drainage points, and beneath precision cooling units.
- Air pressure sensors shall be deployed at **facility ingress/egress points** to confirm positive pressure maintained within the data centre envelope.
- All sensor positions shall be documented in the **Data Centre Infrastructure Management (DCIM) system** and reviewed as part of any capacity or layout change.

### 8.4 Reporting and Review Cadence

| Report | Content | Frequency | Recipient |
|---|---|---|---|
| Environmental Dashboard | Real-time sensor status, active alarms | Continuous | DC Operations team |
| Daily Environmental Summary | Prior 24-hour trends, anomalies, alerts triggered | Daily | DC Operations Lead, Infrastructure Manager |
| Weekly Environmental Health Report | 7-day trend analysis, threshold breaches, corrective actions | Weekly | Infrastructure Manager |
| Monthly Environmental Compliance Report | Compliance status vs. thresholds, incident summary | Monthly | Head of Infrastructure, CISO |
| Quarterly Management Review Report | Quarterly trend analysis, risk posture, recommendations | Quarterly | Head of Infrastructure, CRO, Board/ARMC (as applicable) |

---

## 9. HVAC Systems and Climate Control

*Describe the cooling architecture, operational procedures for HVAC management, and maintenance requirements.*

### 9.1 Cooling Architecture

*Document the cooling design philosophy and equipment deployed.*

| Component | Specification | Quantity | Redundancy |
|---|---|---|---|
| Precision Cooling Units (CRAC/CRAH) | [Model, Capacity in kW] | [N] | [N+1 / 2N] |
| Chillers | [Model, Capacity in tons] | [N] | [N+1] |
| Cooling Towers | [Model, Capacity] | [N] | [N+1] |
| In-Row Cooling Units | [Model, Capacity] | [N] | [N+1] |
| Hot Aisle/Cold Aisle Containment | [Vendor, Type] | Full coverage | N/A |

**Design Standard:** The cooling system shall be designed to maintain ambient temperature within the data centre white space within the range of **[18°C to 27°C]** and relative humidity between **[40% and 60% RH]** under all operational conditions, including the loss of any single cooling component (N+1 minimum).

### 9.2 HVAC Operational Procedures

**9.2.1 Normal Operations**

1. DC Operations Engineer verifies HVAC system status at the start of each shift via the BMS dashboard.
2. Any HVAC unit in alarm or offline status is reported immediately to the DC Operations Lead.
3. Temperature and humidity readings are cross-referenced against EMS sensor data to validate BMS accuracy.
4. HVAC setpoints may only be adjusted by authorized Facilities Management personnel with documented justification.
5. All HVAC configuration changes are managed through the Change Management process.

**9.2.2 HVAC Failover Procedure (Single Unit Failure)**

1. EMS/BMS alert triggers when HVAC unit enters fault state.
2. DC Operations Engineer acknowledges alert and physically verifies unit status.
3. Standby/redundant unit activation is confirmed (automatic or manual as per system design).
4. Temperature and humidity trends are closely monitored for [30] minutes post-failover.
5. Infrastructure Manager and Facilities Manager are notified.
6. Vendor is engaged for repair/restoration of failed unit within [SLA timeframe].
7. Failed unit is not returned to service without successful testing and sign-off by Facilities Manager.

**9.2.3 HVAC Total Loss Procedure (All Units Failure)**

1. Incident is immediately classified as **Critical** — Major Incident Response activated (Section 13).
2. IT management and Facilities Manager are notified immediately.
3. Emergency portable cooling units (if available per Appendix E) are deployed.
4. Assessment of equipment thermal tolerance and risk of damage is performed.
5. Controlled shutdown of non-critical systems is initiated if temperature exceeds critical threshold.
6. Failover to DR site is evaluated per Business Continuity Plan.

### 9.3 Preventive Maintenance Schedule (HVAC)

| Maintenance Activity | Frequency | Responsible | Documentation Required |
|---|---|---|---|
| Filter inspection and replacement | Quarterly | Facilities Manager / Vendor | Maintenance log |
| Coil cleaning and inspection | Semi-annually | Vendor | Service report |
| Refrigerant level check | Annually | Licensed HVAC technician | Service certificate |
| Chiller system servicing | Annually | Vendor | Service report |
| Thermostatic expansion valve inspection | Annually | Vendor | Service report |
| Full system capacity test | Annually | Vendor + DC Ops | Test report |
| BMS integration and calibration check | Annually | Facilities Manager / BMS vendor | Calibration certificate |

---

## 10. Fire Suppression and Detection

*Document fire detection, suppression system design, testing procedures, and evacuation protocols.*

### 10.1 Fire Detection Systems

| System | Type | Coverage | Standard |
|---|---|---|---|
| Very Early Smoke Detection Apparatus (VESDA) | Air-sampling, aspirating | Data centre white space, cable risers | NFPA 75 |
| Addressable Smoke Detectors | Ionization / Photoelectric | Throughout facility including raised floor and ceiling void | MS 1176 / NFPA 72 |
| Heat Detectors | Rate-of-rise and fixed temperature | Server rooms, electrical rooms | MS 1176 |
| Manual Call Points | Pull stations | All exit routes, minimum [X] per floor | MS 1176 |
| Fire Alarm Control Panel (FACP) | Fully addressable | [Location of FACP] | [Standard] |

### 10.2 Fire Suppression Systems

| System | Type | Coverage | Agent | Standard |
|---|---|---|---|---|
| Clean Agent Suppression | [FM-200 / Novec 1230 / CO2] | Data centre white space | [Agent Name] | NFPA 2001 |
| Wet Pipe Sprinkler | Water-based | [Non-IT areas: lobby, offices] | Water | MS 1745 / NFPA 13 |
| Pre-action Sprinkler | Dry pipe / double interlock | [If applicable — specific zones] | Water | NFPA 13 |

> **Note:** Clean agent suppression systems shall be used within all zones housing active IT equipment. Water-based systems shall not be deployed within the data centre white space or above raised floors hosting IT equipment.

### 10.3 Fire Detection and Suppression Operational Procedures

**10.3.1 Alarm Response Procedure**

1. Upon activation of a fire alarm (any detector): DC Operations Engineer immediately acknowledges the alert.
2. CCTV cameras at the triggered zone are reviewed remotely to assess the situation.
3. If smoke or fire is visually confirmed: Building evacuation is initiated immediately; local fire department ([Emergency Number]) is called.
4. Fire wardens execute the site-specific Emergency Evacuation Plan.
5. Under no circumstances shall suppression system discharge be manually inhibited without explicit authority from the Incident Commander.
6. All personnel must evacuate; no one is to re-enter until cleared by the fire department.

**10.3.2 Post-Activation Recovery**

1. After fire department clears the site: Facilities Manager assesses physical damage.
2. IT systems affected are assessed by Infrastructure team for functionality.
3. Clean agent concentration levels are measured and system is recharged before re-activation.
4. Insurance and regulatory notifications are completed per applicable obligations.
5. Formal incident report is submitted to Head of Infrastructure and CISO within [24 hours].

### 10.4 Fire System Testing Schedule

| Test Activity | Frequency | Standard | Responsible | Documentation |
|---|---|---|---|---|
| Manual call point test | Quarterly | MS 1176 | Facilities Manager / Vendor | Test record |
| Smoke detector functional test | Semi-annually | MS 1176 | Vendor | Test certificate |
| VESDA system sensitivity test | Annually | NFPA 75 | Vendor | Test certificate |
| Clean agent system inspection (no discharge) | Annually | NFPA 2001 | Licensed vendor | Inspection report |
| Full suppression discharge test | [Per regulatory requirement / every 5 years] | NFPA 2001 | Licensed vendor | Discharge test report |
| Evacuation drill | Bi-annually (minimum) | DOSH / BOMBA | Facilities Manager | Drill record |

---

## 11. Power Management and Electrical Controls

*Define the power architecture, UPS management procedures, and generator testing requirements.*

### 11.1 Power Architecture Overview

*Document the physical power path from utility input to IT equipment, including all redundancy mechanisms.*

| Component | Specification | Quantity | Redundancy |
|---|---|---|---|
| Utility Power Feed | [TNB / Utility Provider, Voltage, Capacity] | [N] | [N+1 / Dual utility feeds] |
| Automatic Transfer Switch (ATS) | [Model, Capacity] | [N] | [N+1] |
| Uninterruptible Power Supply (UPS) | [Model, Capacity in kVA] | [N] | [N+1 / 2N] |
| Diesel Generator | [Model, Capacity in kVA, Fuel Capacity] | [N] | [N+1] |
| Main Distribution Board (MDB) | [Specification] | [N] | [Redundant] |
| Power Distribution Unit (PDU) | [Model, Capacity per PDU] | [Dual PDUs per rack] | A + B feed per rack |

**Design Standard:** All critical IT equipment racks shall receive **dual power feeds** (Feed A and Feed B) from independent UPS and PDU chains. Single points of failure in the power path are not acceptable for equipment classified as Critical.

### 11.2 UPS Management Procedures

**11.2.1 Normal Operations**

1. UPS system status (load, battery health, bypass status) is reviewed at the start of each shift.
2. Battery charge level must be maintained above [80%] during normal operations.
3. Any UPS unit in bypass, fault, or degraded mode must be escalated to the Infrastructure Manager immediately.
4. UPS load per unit must not exceed [80%] of rated capacity under normal conditions.

**11.2.2 UPS Battery Test Procedure**

1. Testing must be pre-approved via the Change Management process.
2. Redundant UPS chain must be confirmed as operational before commencing test.
3. Battery discharge test is conducted by licensed vendor under controlled conditions.
4. Post-test: battery health report is reviewed; batteries that fail to meet [XX%] capacity threshold are scheduled for replacement.
5. Test results and any remediation actions are logged.

### 11.3 Generator Testing and Management

| Activity | Frequency | Load Condition | Responsible | Documentation |
|---|---|---|---|---|
| Generator auto-start test (no load) | Weekly (automated) | No load | Facilities Manager / Vendor | Automated log |
| Generator load test (full facility load) | Monthly | Full load | Vendor + DC Ops | Test report |
| Fuel level check | Weekly | N/A | Facilities Manager | Fuel log |
| Fuel quality test | Annually | N/A | Vendor | Lab certificate |
| Full planned maintenance service | Annually | N/A | Licensed generator vendor | Service certificate |
| Emergency power failover drill | Annually | Full load switchover | DC Ops + Facilities | Drill report |

### 11.4 Emergency Power Off (EPO)

- EPO panels are located at: [Describe locations, e.g., primary data centre entrance, security desk].
- EPO activation authority is limited to: [Designated roles, e.g., Incident Commander, senior DC operations staff, fire department].
- EPO test (full activation) requires Board/senior management authorization and is conducted [Frequency].
- Following EPO activation: recovery and restart procedures are documented in the Disaster Recovery Plan.

---

## 12. Redundancy and Failover Design

*Document the redundancy design standards, failover capabilities, and validation testing requirements.*

### 12.1 Redundancy Design Principles

*Describe the overarching redundancy philosophy applied to environmental and power systems.*

[Organization Name]'s data centre infrastructure is designed in accordance with the following redundancy principles:

- **No single point of failure** for any system supporting Critical-classified IT assets.
- **Minimum N+1 redundancy** for all environmental and power systems; **2N for highest criticality systems**.
- **Geographic redundancy** through the secondary/DR data centre for business continuity.
- **Annual failover testing** to validate that redundant systems can sustain full operational load.

### 12.2 Redundancy Matrix

| System / Component | Primary | Standby | Redundancy Model | Failover Type | Last Tested | Next Test Due |
|---|---|---|---|---|---|---|
| Cooling — CRAC/CRAH units | [Count] active | [Count] standby | N+1 | Automatic | [Date] | [Date] |
| UPS — Power Chain A | [UPS-A details] | [UPS-A2 details] | N+1 | Automatic | [Date] | [Date] |
| UPS — Power Chain B | [UPS-B details] | [UPS-B2 details] | N+1 | Automatic | [Date] | [Date] |
| Diesel Generator | [Gen-1 details] | [Gen-2 details] | N+1 | Automatic (ATS) | [Date] | [Date] |
| Utility Power Feed | Feed A | Feed B | Dual feed | Automatic (ATS) | [Date] | [Date] |
| Internet / WAN Connectivity | [ISP-1] | [ISP-2] | Dual ISP | Automatic (BGP) | [Date] | [Date] |
| Environmental Monitoring (EMS) | Primary EMS | [Backup / local logging] | N+1 | Manual / Automatic | [Date] | [Date] |

### 12.3 Failover Testing Procedures

**12.3.1 Planned Failover Test — Pre-Test Checklist**

- [ ] Change Management approval obtained.
- [ ] All stakeholders and affected business units notified at least [X] business days in advance.
- [ ] Redundant system confirmed as fully operational before initiating test.
- [ ] Roll-back procedure documented and communicated to test team.
- [ ] DR team on standby during test.
- [ ] Test scope and success criteria agreed and documented.

**12.3.2 Planned Failover Test — Execution**

1. At scheduled time: Test Lead confirms all pre-test checklist items are satisfied.
2. Failover is initiated per the documented test procedure.
3. Monitoring team records system response times, alerts generated, and any anomalies.
4. Test duration: [Minimum duration the system runs on failover, e.g., 30 minutes under full load].
5. Failback to primary is initiated and confirmed.
6. Test results are documented within [X] hours of test completion.

**12.3.3 Planned Failover Test — Success Criteria**

| Criterion | Expected Outcome | Result |
|---|---|---|
| Failover time (cooling) | Automatic failover within [X] seconds | [Pass / Fail] |
| Failover time (power — UPS to Generator) | Generator reaches full load within [X] seconds | [Pass / Fail] |
| Temperature exceedance during failover | Temperature remains within warning threshold | [Pass / Fail] |
| No unplanned IT service interruption | Zero unplanned outages during test | [Pass / Fail] |
| EMS alerts generated as expected | All expected alerts received; no spurious alerts | [Pass / Fail] |

---

## 13. Incident Response and Escalation

*Define the classification criteria, escalation matrix, and response timelines for environmental incidents.*

### 13.1 Environmental Incident Severity Classification

| Severity | Criteria | Examples | Response Time |
|---|---|---|---|
| **P1 — Critical** | Immediate risk of data loss, equipment damage, or facility outage | All cooling loss, active fire, total power failure, flooding | Immediate (within [5] minutes of alert) |
| **P2 — High** | Significant environmental degradation; redundancy compromised | Single CRAC failure (with active standby), temperature >35°C, UPS on battery for >10 minutes | Within [15] minutes of alert |
| **P3 — Medium** | Environmental parameter outside normal range but within warning threshold | Temperature between 30–35°C, humidity outside 40–60% RH, sensor offline | Within [30] minutes of alert |
| **P4 — Low** | Minor anomaly; no immediate risk; monitoring heightened | Single sensor failure (redundant available), minor power quality event, brief humidity spike | Within [2] hours of alert |

### 13.2 Escalation Matrix

| Escalation Level | Triggered By | Notified Party | Notification Method | Target Response |
|---|---|---|---|---|
| Level 1 | P4 / P3 alert triggered | DC Operations Engineer | EMS auto-alert to on-call | [30] minutes |
| Level 2 | P3 unresolved after [1 hour], or P2 alert | DC Operations Lead | Phone + ITSM ticket | [15] minutes |
| Level 3 | P2 unresolved after [2 hours], or P1 alert | Infrastructure Manager + Facilities Manager | Phone (direct) | [10] minutes |
| Level 4 | P1 — active incident | Head of Infrastructure + CISO + CRO | Phone (direct) + incident bridge | Immediate |
| Level 5 | P1 — service impact to customers / regulatory threshold | CEO + Board Risk Committee | Head of Infrastructure (verbal) | As per BNM notification requirements |

### 13.3 BNM Regulatory Notification Obligations

*In the event of a significant technology incident arising from an environmental failure, [Organization Name] must comply with BNM's incident notification requirements as specified in the RMiT Policy Document. The following triggers require formal BNM notification:*

| Trigger | Notification Deadline | Responsible Party |
|---|---|---|
| Technology disruption exceeding [X hours] impacting critical services | [As per RMiT notification requirements] | CISO / CRO |
| Data loss or integrity compromise resulting from environmental failure | [As per RMiT notification requirements] | CISO |
| Any incident with material customer or market impact | [As per RMiT notification requirements] | CEO / Board |

*[Organization Name] shall maintain a documented Incident Notification Register and ensure that all BNM submissions are completed accurately and within required timelines.*

---

## 14. Maintenance and Testing Schedule

*Provide a consolidated annual maintenance calendar for all environmental and physical infrastructure systems.*

### 14.1 Annual Maintenance and Testing Calendar

| Activity | System | Frequency | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|---|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Shift environmental checks | EMS | Daily | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Filter inspection — HVAC | HVAC | Quarterly | ● | | | ● | | | ● | | | ● | | |
| Generator load test | Generator | Monthly | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| UPS battery test | UPS | Semi-annually | | | ● | | | | | | ● | | | |
| Smoke detector functional test | Fire Detection | Semi-annually | | | ● | | | | | | ● | | | |
| Access control review (Zone 5/6) | PACS | Monthly | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Quarterly access review (Zone 3/4) | PACS | Quarterly | ● | | | ● | | | ● | | | ● | | |
| HVAC coil cleaning | HVAC | Semi-annually | | | | | | ● | | | | | | ● |
| Full failover test — cooling | HVAC | Annually | | | | | | ● | | | | | | |
| Full failover test — power | UPS/Generator | Annually | | | | | | | | | ● | | | |
| Clean agent suppression inspection | Fire Suppression | Annually | | | | ● | | | | | | | | |
| Evacuation drill | All | Bi-annually | | | ● | | | | | | ● | | | |
| VESDA sensitivity calibration | Fire Detection | Annually | | | | | | | ● | | | | | |
| EMS calibration and threshold review | EMS | Quarterly | ● | | | ● | | | ● | | | ● | | |
| Full facility audit | All | Annually | | | | | | | | | | | | ● |

### 14.2 Maintenance Record Requirements

All maintenance activities shall be documented with the following minimum information:

- Date and time of maintenance activity.
- Name and organization of technician(s) performing the work.
- System and components worked on (with asset IDs/serial numbers).
- Description of work performed.
- Test results and pass/fail outcome.
- Any defects identified and recommended remediation.
- Name and signature of [Organization Name] representative witnessing or accepting the work.
- Next scheduled maintenance date.

Maintenance records shall be retained for a minimum of **[5 years]** and made available for regulatory inspection upon request.

---

## 15. Audit, Compliance, and Reporting

*Define the internal and external audit processes, compliance metrics, and management reporting obligations.*

### 15.1 Internal Audit and Self-Assessment

| Audit Activity | Scope | Frequency | Conducted By | Report Recipient |
|---|---|---|---|---|
| Environmental Controls Compliance Self-Assessment | All procedures in this document | Quarterly | Infrastructure Manager | Head of Infrastructure, CISO |
| Physical Access Log Review | All DC zones — access logs, anomalies, exceptions | Monthly | DC Operations Lead | Infrastructure Manager |
| CCTV Footage Review (spot check) | Random sampling of DC zones | Monthly | DC Operations Lead / Security | Head of Security |
| Independent Internal Audit | Full scope — environmental and physical controls | Annually | Internal Audit | Audit Committee, CRO, CISO |
| Vendor Performance Review | Third-party maintenance SLA compliance | Quarterly | Infrastructure Manager | Head of Infrastructure |

### 15.2 Key Compliance Metrics and KPIs

| Metric | Description | Target | Reporting Frequency |
|---|---|---|---|
| Environmental Uptime | Percentage of time all environmental parameters remain within defined thresholds | ≥ [99.9%] | Monthly |
| Alert Response Time — P1/P2 | Percentage of critical/high alerts acknowledged within SLA | [100%] | Monthly |
| Alert Response Time — P3/P4 | Percentage of medium/low alerts acknowledged within SLA | ≥ [95%] | Monthly |
| Maintenance Compliance Rate | Percentage of scheduled maintenance activities completed on time | [100%] | Quarterly |
| Failover Test Success Rate | Percentage of failover tests meeting all success criteria | [100%] | Annually |
| Access Review Completion Rate | Percentage of periodic access reviews completed on schedule | [100%] | Quarterly |
| Outstanding High-Risk Findings | Number of unresolved P1/P2 audit findings | [0] outstanding >30 days | Monthly |

### 15.3 Regulatory Compliance Assessment

*[Organization Name] shall conduct an annual formal assessment of compliance with BNM RMiT Clause 10.25 and related clauses. The assessment shall:*

1. Review all evidence of procedure adherence (maintenance logs, test reports, access logs, incident records).
2. Identify any gaps or deviations from required controls.
3. Produce a Compliance Status Report mapped to each RMiT clause requirement.
4. Track remediation of identified gaps with target dates and owners.
5. Provide the Compliance Status Report to the Head of Infrastructure, CISO, and CRO for management sign-off.
6. Retain the Compliance Status Report as regulatory evidence for a minimum of **[5 years]**.

---

## 16. Review and Approval

### 16.1 Document Review Schedule

This document shall be reviewed:

- **Quarterly** — to assess continued operational relevance and incorporate any lessons learned from environmental incidents.
- **Annually** — for full formal review and re-approval.
- **Triggered review** — following any significant environmental incident, major infrastructure change, BNM regulatory update, or internal/external audit finding.

### 16.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial release of Environmental Control Procedures |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of major revision] |

### 16.3 Approval and Sign-Off

*This document requires the following approvals before it becomes effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner — Head of Infrastructure | [Name] | ________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | ________________ | [Date] |
| Chief Risk Officer (CRO) | [Name] | ________________ | [Date] |
| Chief Operating Officer (COO) / [Equivalent] | [Name] | ________________ | [Date] |
| Internal Audit (Noted / Reviewed) | [Name] | ________________ | [Date] |

---

## 17. References

*List all regulatory, standards, and internal documents referenced or relied upon in the preparation of this document.*

### 17.1 BNM Regulatory References

| Reference | Title | Specific Provision |
|---|---|---|
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) Policy Document | Clause 10.25 — Physical and Environmental Controls |
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) Policy Document | Clause 10.1–10.5 — Technology Risk Governance |
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) Policy Document | Clause 11 — Business Continuity Management |
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) Policy Document | Clause 14 — Incident Reporting |

### 17.2 Malaysian Legislation

| Reference | Title |
|---|---|
| Personal Data Protection Act 2010 (PDPA) | Security principle — physical security of personal data processing environments |
| Financial Services Act 2013 (FSA) | Applicable provisions on operational resilience |
| Islamic Financial Services Act 2013 (IFSA) | Applicable provisions on operational resilience [if applicable] |

### 17.3 Industry Standards

| Standard | Title |
|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements |
| ISO/IEC 27002:2022 | Information Security Controls — Physical and Environmental Security |
| ASHRAE TC9.9 | Thermal Guidelines for Data Processing Environments |
| Uptime Institute | Data Centre Tier Standards (Topology, Operational Sustainability) |
| TIA-942-B | Telecommunications Infrastructure Standard for Data Centres |
| NFPA 75 | Standard for the Fire Protection of Information Technology Equipment |
| NFPA 2001 | Standard on Clean Agent Fire Extinguishing Systems |
| NFPA 72 | National Fire Alarm and Signaling Code |
| MS 1176 | Malaysian Standard — Fire Detection and Alarm Systems |

### 17.4 Internal Documents

| Document Title | Document ID |
|---|---|
| Information Security Policy | [Doc ID] |
| Physical Security Policy | [Doc ID] |
| Business Continuity and Disaster Recovery Plan | [Doc ID] |
| IT Asset Management Policy | [Doc ID] |
| Vendor and Third-Party Risk Management Policy | [Doc ID] |
| Change Management Policy and Procedures | [Doc ID] |
| Incident Management Policy and Procedures | [Doc ID] |
| Data Classification Policy | [Doc ID] |

---

## 18. Appendices

### Appendix A — Data Centre Floor Plan and Zone Map

*Insert or attach the current data centre floor plan clearly indicating:*
- Physical security zone boundaries and demarcation points (Zone 0–Zone 6).
- Location of all HVAC/CRAC/CRAH units.
- Location of all UPS systems, generators, and main distribution boards.
- Location of fire suppression system discharge nozzles and suppression zones.
- Location of EMS sensor deployment points (temperature, humidity, water detection).
- Location of CCTV cameras and PACS readers.
- Emergency exit routes and EPO panel locations.

*[Attach: DC_FloorPlan_v[X]_[Date].pdf]*

---

### Appendix B — Environmental Alert Severity Classification Matrix

*Provide detailed criteria for classifying all environmental alert types by severity.*

| Alert Type | Parameter | Warning (P3/P4) | High (P2) | Critical (P1) |
|---|---|---|---|---|
| Temperature | Hot aisle | 33–37°C | 37–40°C | >40°C |
| Temperature | Cold aisle | <18°C or >27°C | <16°C or >30°C | <14°C or >35°C |
| Humidity | Relative Humidity | <35% or >65% | <25% or >75% | <20% or >80% |
| Water Ingress | Any sensor | First detection | Confirmed accumulation | Active flooding |
| Power | UPS battery | <50% charge | <30% charge | <15% charge or on bypass |
| Power | Generator fuel | <50% tank | <30% tank | <20% tank |
| Smoke | VESDA | Alert Level 1 | Alert Level 2 | Fire confirmed / suppression activated |
| Cooling | CRAC unit | Single unit fault (redundancy active) | Redundancy compromised | All cooling loss |

---

### Appendix C — Physical Access Request Form

*Provide or link to the standard Access Request Form for DC physical access provisioning.*

**Minimum Required Fields:**

- Requestor name, employee ID, department, and contact details.
- Requested access zone(s) and access level.
- Business justification and duration of access.
- Line manager approval.
- Head of Infrastructure approval.
- CISO approval (for Zone 5 and Zone 6).
- Date of access rights provision and provisioned by (Facilities Manager signature).

*[Attach: AccessRequestForm_DC_v[X].docx or link to ITSM self-service form]*

---

### Appendix D — Data Centre Rules of Engagement

*Summary of behavioural and operational rules applicable to all personnel entering DC zones.*

Key rules shall include:

1. All access must be authorized in advance; no tailgating or piggybacking.
2. Visitors must be escorted at all times within Zone 3 and above.
3. No food, beverages, or liquids are permitted within the data centre white space.
4. No photography or recording of DC infrastructure without written authorization.
5. All equipment brought into or removed from the DC must be logged in the Equipment Movement Register.
6. Any anomaly, damage, or safety hazard observed must be reported immediately to the DC Operations Lead.
7. Emergency exit routes and EPO panel locations must be noted prior to entry.
8. Mobile phones must be on silent mode; usage of personal devices is restricted.

*[Attach: DC_RulesOfEngagement_v[X].pdf — signature acknowledgement required for all new DC users]*

---

### Appendix E — Emergency Portable Cooling Contingency Plan

*Document the contingency plan for deploying temporary/portable cooling in the event of primary HVAC failure.*

| Item | Details |
|---|---|
| **Portable Cooling Unit Inventory** | [Quantity, Capacity in kW, Current Storage Location] |
| **Vendor for Emergency Rental** | [Vendor Name, Contact Person, 24/7 Emergency Number] |
| **Deployment SLA** | [Vendor to deliver and commission within X hours of request] |
| **Authorized to Request** | DC Operations Lead or above |
| **Deployment Procedure** | [Steps to deploy, connect, and integrate portable units with existing cooling zones] |
| **Power Requirements** | [Electrical requirements for portable units — confirm availability of sufficient temporary power] |

---

### Appendix F — Environmental Incident Register Template

*Use this template to log all environmental incidents, near-misses, and alerts for audit and trend analysis.*

| Field | Description |
|---|---|
| Incident ID | [Auto-generated or manual ID] |
| Date / Time of Detection | [DD/MM/YYYY HH:MM] |
| Detection Method | [EMS Alert / Manual Observation / Vendor notification] |
| Facility / Zone | [Facility name and zone] |
| Environmental Parameter Affected | [Temperature / Humidity / Power / Fire / Water / Other] |
| Severity Classification | [P1 / P2 / P3 / P4] |
| Description of Incident | [Narrative description] |
| Immediate Actions Taken | [Actions and timestamps] |
| Escalations Made | [Who was notified and when] |
| Root Cause | [Identified root cause — completed post-incident] |
| Corrective Actions | [Actions to prevent recurrence, with owners and due dates] |
| Incident Closed Date | [DD/MM/YYYY] |
| Closed By | [Name and title] |

---

### Appendix G — Vendor Contacts and Service Level Agreements Summary

| System | Vendor Name | Service Type | Contract Reference | 24/7 Emergency Contact | SLA — Response Time | SLA — Resolution Time |
|---|---|---|---|---|---|---|
| HVAC / Precision Cooling | [Vendor Name] | Preventive + Emergency Maintenance | [Contract Ref] | [Phone Number] | [X hours] | [X hours] |
| UPS Systems | [Vendor Name] | Preventive + Emergency Maintenance | [Contract Ref] | [Phone Number] | [X hours] | [X hours] |
| Diesel Generator | [Vendor Name] | Preventive + Emergency Maintenance | [Contract Ref] | [Phone Number] | [X hours] | [X hours] |
| Fire Detection / Suppression | [Vendor Name] | Annual inspection + Emergency | [Contract Ref] | [Phone Number] | [X hours] | [X hours] |
| EMS / BMS | [Vendor Name] | Support + Calibration | [Contract Ref] | [Phone Number] | [X hours] | [X hours] |
| Physical Security / PACS | [Vendor Name] | Maintenance + Support | [Contract Ref] | [Phone Number] | [X hours] | [X hours] |

---

*End of Document*

---

| Field | Details |
|---|---|
| **Document Title** | Environmental Control Procedures |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Last Updated** | [Date] |
| **Next Review** | [Date] |