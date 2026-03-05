# Data Centre Physical Security Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Infrastructure |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Document Status** | [Draft / Under Review / Approved] |

---

> **Regulatory Alignment:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document — Clause 10.24
>
> **Classification Notice:** This document is classified as **Confidential**. It must not be distributed outside [Organization Name] without prior written authorization from the Head of Infrastructure or an authorized delegate.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory Framework and Obligations](#3-regulatory-framework-and-obligations)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Policy Statements and Requirements](#5-policy-statements-and-requirements)
6. [Physical Access Control Zones](#6-physical-access-control-zones)
7. [Environmental Controls](#7-environmental-controls)
8. [Redundancy and Failover Design](#8-redundancy-and-failover-design)
9. [Monitoring, Audit, and Compliance](#9-monitoring-audit-and-compliance)
10. [Incident Management and Breach Response](#10-incident-management-and-breach-response)
11. [Third-Party and Vendor Management](#11-third-party-and-vendor-management)
12. [Exceptions and Waivers](#12-exceptions-and-waivers)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section states why this policy exists and what organizational objective it serves. Clearly link it to regulatory obligations and business risk appetite.*

This Policy establishes the mandatory physical security requirements governing [Organization Name]'s data centre facilities. It defines controls, standards, and responsibilities to protect critical information technology infrastructure, systems, data, and personnel from unauthorized physical access, environmental hazards, theft, sabotage, and other physical threats.

This Policy is issued in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.24**, which requires financial institutions to implement rigorous physical security controls over technology infrastructure facilities. Compliance with this Policy is mandatory and non-negotiable for all personnel, contractors, and third parties who operate within or interact with [Organization Name]'s data centre facilities.

### 1.2 Scope

*Define clearly what is included and excluded from this policy. Ambiguity in scope is a common audit finding — be explicit.*

This Policy applies to:

**In-Scope Entities:**

- All primary, secondary, and disaster recovery (DR) data centre facilities owned, leased, or operated by [Organization Name]
- All co-location facilities where [Organization Name] maintains dedicated infrastructure or hosted systems
- All personnel — permanent employees, contract staff, seconded staff, and interns — who have or request physical access to in-scope facilities
- All third-party vendors, service providers, and technology partners who require physical access to data centre facilities for maintenance, installation, audit, or inspection purposes
- All IT assets, network infrastructure, telecommunications equipment, servers, storage arrays, and physical media housed within the defined facility perimeters

**Out-of-Scope:**

- Branch office server rooms or network closets not classified as primary or secondary data centres (these are governed by the [Branch Infrastructure Security Standard — Document ID: TBC])
- Cloud-hosted infrastructure managed by third-party cloud service providers (these are governed by the [Cloud Security Policy — Document ID: TBC])
- End-user device management (governed by the [Endpoint Security Policy — Document ID: TBC])

### 1.3 Geographic Coverage

*List all physical sites to which this policy applies. Update this list whenever new facilities are commissioned or decommissioned.*

| Facility Name | Location | Classification | Tier Rating | Status |
|---|---|---|---|---|
| [Primary Data Centre] | [Address, City, State] | Primary DC | [Tier III / Tier IV] | Active |
| [Secondary Data Centre] | [Address, City, State] | DR / Secondary | [Tier III / Tier IV] | Active |
| [Co-location Facility] | [Provider Name, Address] | Co-location | [Tier II / Tier III] | Active |
| [Additional Facility] | [Address] | [Classification] | [Tier Rating] | [Status] |

---

## 2. Definitions and Abbreviations

*This section provides a common vocabulary for all readers. Update this glossary as new terminology is introduced into the policy.*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **Data Centre** | A dedicated facility or portion of a facility used to house critical IT infrastructure including servers, networking equipment, and storage systems. |
| **Physical Security Perimeter** | A physical boundary established to protect IT assets within a defined zone, enforced through structural, access, and surveillance controls. |
| **Access Control Zone** | A designated area within a data centre facility with defined access permissions and physical security controls appropriate to the sensitivity of assets within. |
| **Authorized Personnel** | Individuals formally approved by the Head of Infrastructure or a delegated authority to access a specific zone within the data centre. |
| **Tailgating / Piggybacking** | The unauthorized entry of an individual into a secured area by following an authorized person through a controlled access point without independent authentication. |
| **Mantrap / Airlock** | A physical security mechanism consisting of two interlocking doors that allows only one person at a time to pass, preventing tailgating. |
| **CCTV** | Closed-Circuit Television — a surveillance camera system used to monitor and record activity within and around a facility. |
| **HVAC** | Heating, Ventilation, and Air Conditioning — environmental control systems that regulate temperature, humidity, and air quality within the data centre. |
| **UPS** | Uninterruptible Power Supply — a battery-backed power system that provides temporary power continuity during grid failures. |
| **PDU** | Power Distribution Unit — a device that distributes electrical power to equipment racks within the data centre. |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time, in the event of a failure. |
| **RTO** | Recovery Time Objective — the maximum acceptable downtime duration before systems must be restored following a failure. |
| **Colocation (Co-lo)** | A facility in which multiple organizations house their IT infrastructure within a shared physical building managed by a third-party provider. |
| **Dual-Path Power** | The design of power feeds from two independent sources to provide redundancy in the event of a single-path failure. |
| **EPO** | Emergency Power Off — a mechanism to immediately shut off all electrical power to a data centre room in an emergency. |

### 2.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| CCTV | Closed-Circuit Television |
| HVAC | Heating, Ventilation, and Air Conditioning |
| UPS | Uninterruptible Power Supply |
| PDU | Power Distribution Unit |
| DR | Disaster Recovery |
| BCP | Business Continuity Plan |
| SLA | Service Level Agreement |
| RACI | Responsible, Accountable, Consulted, Informed |
| EPO | Emergency Power Off |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |
| SOP | Standard Operating Procedure |
| NDA | Non-Disclosure Agreement |

---

## 3. Regulatory Framework and Obligations

*This section maps the policy to specific regulatory obligations. This is a critical section for audit and examination purposes — regulators will verify that policies explicitly acknowledge relevant provisions.*

### 3.1 BNM RMiT Clause 10.24 — Physical Security

This Policy is primarily driven by the obligations under **BNM RMiT Clause 10.24**, which mandates that financial institutions establish and maintain robust physical security controls over their data centre and technology infrastructure facilities. The following table maps policy sections to specific regulatory requirements:

| RMiT Clause | Regulatory Requirement Summary | Addressed in Policy Section |
|---|---|---|
| 10.24(a) | Physical access controls must be established to prevent unauthorized entry to data centre facilities | Section 6 — Physical Access Control Zones |
| 10.24(b) | Environmental controls must be maintained to protect equipment from damage | Section 7 — Environmental Controls |
| 10.24(c) | Redundancy and failover capabilities must be designed to ensure availability | Section 8 — Redundancy and Failover Design |
| 10.24(d) | Physical security incidents must be reported, investigated, and remediated | Section 10 — Incident Management |
| 10.24(e) | Third-party access to facilities must be controlled and monitored | Section 11 — Third-Party and Vendor Management |
| 10.24(f) | Periodic reviews of physical security controls must be conducted | Section 9 — Monitoring, Audit, and Compliance |

### 3.2 Related Regulatory Obligations

| Regulation / Standard | Relevant Provision | Applicability |
|---|---|---|
| BNM RMiT (2020) | Clause 10.24 — Physical Controls | Primary obligation |
| BNM RMiT (2020) | Clause 10.1–10.5 — Technology Risk Governance | Supporting governance |
| Personal Data Protection Act 2010 (PDPA) | Section 9 — Security Principle | Data protection during physical access |
| NACSA National Cybersecurity Policy | Critical Information Infrastructure Protection | Infrastructure classification |
| ISO/IEC 27001:2022 | Annex A — Physical and Environmental Security (A.7) | Best practice alignment |
| Uptime Institute Tier Standard | Tier III / Tier IV operational requirements | Facility design standard |
| NFPA 75 / NFPA 76 | Fire protection for IT facilities | Environmental control alignment |

---

## 4. Roles and Responsibilities

### 4.1 Ownership and Accountability

*This section establishes clear ownership of the policy and each of its major functional areas. Unclear accountability is a primary root cause of policy non-compliance. Ensure all named roles are formally designated with documented acceptance.*

The **Head of Infrastructure** is the **Policy Owner** and bears ultimate accountability for the implementation, maintenance, and compliance monitoring of this Policy. The Policy Owner must:

- Ensure this Policy is reviewed and approved at least annually or following any material change to the regulatory environment or technology infrastructure
- Designate responsible officers for each operational area described herein
- Escalate systemic non-compliance to the Chief Information Officer (CIO) and Chief Information Security Officer (CISO)
- Commission independent reviews or audits of physical security controls as required

### 4.2 RACI Matrix

*Use the following RACI matrix to clarify who is Responsible, Accountable, Consulted, and Informed for each key activity under this policy. Update role names to match your organization's structure.*

**Key:**
- **R** — Responsible (performs the activity)
- **A** — Accountable (owns the outcome; only one per activity)
- **C** — Consulted (provides input before decision)
- **I** — Informed (notified of decisions or outcomes)

| Activity | Head of Infrastructure | Data Centre Manager | Security Operations | CISO | IT Risk & Compliance | Facilities Management | Third-Party Vendors |
|---|---|---|---|---|---|---|---|
| Policy ownership and annual review | A | R | C | C | C | I | — |
| Physical access authorization approval | A | R | C | I | I | — | — |
| Visitor and contractor access management | I | A | R | I | I | R | I |
| CCTV monitoring and review | I | I | A/R | I | I | R | — |
| Environmental monitoring (HVAC, power) | C | I | I | I | I | A/R | R |
| Physical security incident response | C | R | A | C | C | R | I |
| Periodic physical security audits | A | R | C | C | R | C | — |
| Vendor access control and escorting | I | A | R | I | I | I | I |
| Access rights quarterly review | A | R | C | I | R | — | — |
| Emergency power-off procedure | A | R | R | I | I | R | — |
| Redundancy and failover testing | A | R | I | I | C | C | — |
| Policy exception approvals | A | I | C | C | R | I | — |

### 4.3 Role Descriptions

*Provide a brief description of each role's physical security responsibilities below.*

**Head of Infrastructure**
- Ultimate accountability for data centre physical security posture
- Policy owner; approves exceptions and escalations
- Reports to CIO on physical security risk profile

**Data Centre Manager**
- Day-to-day operational responsibility for all data centre physical security controls
- Manages access control lists, visitor logs, and contractor entry procedures
- Conducts or coordinates quarterly access rights reviews
- Ensures environmental monitoring systems are operational and calibrated

**Security Operations**
- Operates and monitors physical security systems including CCTV, access control systems, and alarm systems
- Responds to physical security alarms and incidents
- Maintains security patrol schedules and visitor escort protocols

**Chief Information Security Officer (CISO)**
- Provides strategic oversight of physical security risk within the broader information security framework
- Approves material changes to the security zone model
- Receives escalated physical security incidents

**IT Risk & Compliance**
- Monitors compliance with this Policy and tracks open findings
- Coordinates internal and external audits of physical security controls
- Maintains the policy exceptions register

**Facilities Management**
- Manages structural, environmental, and utility infrastructure of the data centre facility
- Coordinates maintenance activities and ensures contractor compliance with access procedures
- Manages relationships with facility-level service providers (power, cooling, fire suppression)

---

## 5. Policy Statements and Requirements

*This section contains the core mandatory requirements of the policy. Each statement should be unambiguous and testable. Auditors will assess compliance against these statements directly.*

### 5.1 General Physical Security Principles

[Organization Name] shall ensure that all data centre facilities adhere to the following foundational physical security principles:

1. **Defence in Depth:** Physical security shall be implemented in concentric layers, from the building perimeter inward to the most sensitive equipment zones, such that compromise of any single layer does not result in unrestricted access to critical assets.

2. **Least Privilege Access:** Access to data centre zones shall be granted on a need-to-access basis only. No individual shall be granted access beyond what is required to perform their defined role. All access privileges shall be reviewed at minimum quarterly.

3. **Zero Tailgating Tolerance:** Unauthorized entry through tailgating or piggybacking is strictly prohibited. Physical controls (mantraps, airlocks, turnstiles) shall be deployed at all critical access points. Personnel who observe tailgating events must report them immediately to Security Operations.

4. **Separation of Duties:** Access authorization (the act of granting access rights) and access provisioning (the physical configuration of access credentials) shall be performed by different individuals.

5. **Audit Trail Integrity:** All physical access events — both successful and failed — shall be logged, timestamped, and retained for a minimum of **[specify retention period, minimum 12 months per RMiT]** in a tamper-evident system.

6. **Continuous Monitoring:** Physical security monitoring shall operate on a 24 hours a day, 7 days a week, 365 days a year basis. Unmonitored periods — including outside business hours, public holidays, and maintenance windows — shall not reduce the security posture.

7. **Mandatory Escorting:** All visitors, contractors, and third-party vendors must be escorted by an authorized [Organization Name] employee at all times within controlled access zones unless explicitly granted unescorted access through the formal process defined in Section 11.

### 5.2 Facility Selection and Design Requirements

New data centre facilities, or facilities undergoing significant renovation, must meet the following minimum criteria prior to commissioning:

- Site location must not be in a designated flood-risk zone, seismic hazard zone, or within [X] km of identified industrial hazards without documented risk assessment and compensating controls
- Building structure must be capable of withstanding [specify relevant natural hazard standards for Malaysia, e.g., wind load, flood level]
- External signage must not identify the building as a data centre or financial institution facility
- The facility must achieve a minimum **Uptime Institute Tier [III / IV]** rating or equivalent, as determined by a formal third-party assessment
- Proximity to emergency services (fire station, police) shall be assessed and documented during site selection

### 5.3 Access Credential Management

| Requirement | Standard |
|---|---|
| Access credential type | [Smart card / biometric / multi-factor combination] |
| Lost or stolen credential reporting | Within [X] hours of discovery to Security Operations |
| Credential revocation upon termination | Within [X] business hours of HR notification |
| Temporary access credential validity | Maximum [X] days; no automatic renewal |
| Credential sharing | Strictly prohibited; constitutes a disciplinary offense |
| Contractor credential issuance | Only upon completion of signed NDA and background verification |

### 5.4 Prohibited Activities

The following activities are strictly prohibited within all data centre facilities:

- Unauthorized photography, video recording, or audio recording
- Introduction of personal mobile devices into designated no-device zones (as marked)
- Consumption of food or beverages within active equipment halls
- Introduction of portable storage devices (USB drives, external hard disks) without prior written authorization from the Data Centre Manager
- Connection of unauthorized devices to any network port or power outlet
- Circumventing, disabling, or tampering with any access control, alarm, or surveillance system
- Tailgating or facilitating the unauthorized entry of any individual

---

## 6. Physical Access Control Zones

*This section defines the physical security zoning model. The zone model must reflect the actual layout of the data centre and be reviewed whenever the physical layout changes. Include site-specific diagrams in Appendix A.*

### 6.1 Zone Classification Model

[Organization Name] implements a **four-tier security zone model** for all data centre facilities, consistent with the principle of defence in depth. Access requirements escalate progressively from the outer perimeter to the most sensitive inner zones.

| Zone | Name | Description | Access Method | Who May Access |
|---|---|---|---|---|
| **Zone 0** | External Perimeter | Building exterior, car parks, landscaped areas | Physical barrier, CCTV | General public (monitored) |
| **Zone 1** | Building Perimeter | Reception, lobby, security desk | Staffed reception, visitor sign-in | Staff, authorized visitors (escorted) |
| **Zone 2** | Facility Operations | NOC, staging area, loading bay, equipment storage | Proximity card | Authorized Operations & IT staff |
| **Zone 3** | Data Hall | Active server rooms, network rooms, equipment cages | Proximity card + PIN / biometric | Authorized Infrastructure & Security staff only |
| **Zone 4** | Restricted / Sensitive** | Core switches, HSM racks, backup media vaults | Multi-factor (card + biometric) + dual-person rule | Named individuals only; dual authorization required |

### 6.2 Zone 0 — External Perimeter Controls

*Describe the physical barriers and deterrents installed at the outermost perimeter of the facility.*

- **Perimeter Fencing:** The facility shall be enclosed by [specify — e.g., 2.4-metre security fencing with anti-climb topping]. All fence lines shall be inspected [monthly / quarterly].
- **Vehicle Access Control:** All vehicle entry and exit points shall be controlled via [barrier gates / bollards / security guard posts]. Delivery vehicles shall be inspected prior to entry.
- **External CCTV:** Cameras shall cover all external access points, parking areas, loading bays, and perimeter fence lines with [X]% overlap between camera fields of view. Footage shall be retained for a minimum of **[90 days]**.
- **Lighting:** External lighting shall ensure adequate illumination of all perimeter and access areas during darkness. Lighting outages shall be reported and remediated within **[X] hours**.

### 6.3 Zone 1 — Building Perimeter Controls

*Define access controls at the point of entry into the building itself.*

- All visitors must present government-issued photographic identification at the security desk
- All visitors must sign the physical visitor log and receive a time-limited, color-coded visitor badge
- Visitor badges must be worn visibly at all times and surrendered upon departure
- The security desk must be staffed at all times during business hours; after-hours access must be pre-authorized and escorted
- A mantrap or airlock shall be installed at the boundary between Zone 1 and Zone 2

**Visitor Log — Mandatory Fields:**

| Field | Requirement |
|---|---|
| Full Name | As per government ID |
| Identification Type & Number | IC / Passport / Staff ID |
| Organization / Company | Full legal name |
| Host (Authorizing Employee) | Full name and employee ID |
| Purpose of Visit | Specific equipment or system reference |
| Time In | DD/MM/YYYY HH:MM |
| Time Out | DD/MM/YYYY HH:MM |
| Badge Number Issued | — |
| Host Signature | — |

### 6.4 Zone 2 — Facility Operations Controls

*This zone covers operational areas that support the data centre but do not house production equipment. Controls here prevent unauthorized individuals from reaching the data halls.*

- Access to Zone 2 shall require a valid proximity card assigned to the individual
- Access rights to Zone 2 shall be reviewed and revalidated **quarterly**
- A staging/quarantine area within Zone 2 shall be designated for the receipt, inspection, and preparation of all incoming and outgoing equipment
- All equipment entering or leaving the facility shall be documented in the **Asset Movement Log** (see Appendix C)
- Loading bay access shall be limited to pre-scheduled delivery windows; all deliveries must be accompanied by an authorized staff member

### 6.5 Zone 3 — Data Hall Controls

*The data hall is the primary production environment. Controls here are the most critical and must be highly reliable.*

- Access to Zone 3 requires **two independent authentication factors** — [e.g., smart card + PIN, or smart card + fingerprint biometric]
- All Zone 3 access events shall generate an automatic log entry with timestamp, individual identity, and door/zone accessed
- **Anti-passback** rules shall be enforced: an individual must exit a zone before being permitted to re-enter, preventing credential sharing
- The Data Hall shall be equipped with CCTV coverage providing [X]% coverage of all aisles and access points with no blind spots. Camera angles must be reviewed annually
- Intrusion detection sensors shall be installed on all doors, windows, and ceiling access panels. Any intrusion alert shall trigger an immediate response by Security Operations within [X] minutes

**Zone 3 Access Review Schedule:**

| Activity | Frequency | Responsible |
|---|---|---|
| Access rights list review | Quarterly | Data Centre Manager |
| Biometric template verification | Annually | Security Operations |
| Access log anomaly review | Monthly | Security Operations |
| CCTV camera coverage audit | Annually | Data Centre Manager |
| Door and sensor functional test | Semi-annually | Facilities Management |

### 6.6 Zone 4 — Restricted / Sensitive Zone Controls

*Zone 4 applies to the most sensitive assets within the data centre. Access must be tightly controlled and auditable.*

- Access to Zone 4 requires **dual-person authorization**: no individual may enter Zone 4 alone. A minimum of two authorized individuals must be present at all times during any Zone 4 access event.
- Zone 4 access rights shall be limited to a maximum of **[X] named individuals**, reviewed and reconfirmed by the Head of Infrastructure every **[six months]**
- All Zone 4 access events shall be logged in a dedicated, separately secured access log and reviewed by the CISO on a **monthly** basis
- Physical keys (where applicable) to Zone 4 cabinets shall be stored in a tamper-evident key safe with dual-custodian control
- Remote access to Zone 4 monitoring systems shall require separate, privileged credential management compliant with the [Privileged Access Management Policy — Document ID: TBC]

---

## 7. Environmental Controls

*Environmental failures are a leading cause of data centre downtime. This section defines the standards for maintaining a safe operating environment for IT equipment and personnel.*

### 7.1 Temperature and Humidity Management (HVAC)

*Define the acceptable environmental ranges and the controls required to maintain them. Reference ASHRAE thermal guidelines where applicable.*

[Organization Name] shall ensure that environmental conditions within all data hall zones are maintained within the following parameters at all times:

| Parameter | Recommended Range | Critical Threshold | Action Required |
|---|---|---|---|
| **Inlet Air Temperature** | 18°C – 27°C (ASHRAE A2) | < 15°C or > 30°C | Immediate HVAC intervention; escalate to Data Centre Manager |
| **Relative Humidity** | 40% – 60% RH | < 30% RH or > 70% RH | HVAC humidity control activation; escalate |
| **Dew Point** | 5.5°C – 15°C | Outside range | Investigate and remediate within [X] hours |
| **Air Pressure (Raised Floor)** | [Specify Pascal range] | Outside defined range | Facilities investigation |

**HVAC System Requirements:**

- **N+1 Redundancy Minimum:** All data hall cooling systems shall be designed with a minimum N+1 redundancy configuration, ensuring that the failure of any single HVAC unit does not result in thermal exceedance within the data hall.
- **Hot/Cold Aisle Containment:** All data halls shall implement hot aisle or cold aisle containment architecture to optimize cooling efficiency and eliminate hotspots.
- **Automatic Failover:** HVAC systems shall be capable of automatic failover to standby units without manual intervention. Failover shall be tested [semi-annually].
- **Temperature Monitoring:** Continuous temperature and humidity sensors shall be deployed at [specify density, e.g., one sensor per rack row, at intake and exhaust points]. Sensor data shall be fed to the Building Management System (BMS) and alert the operations team in real time.
- **BMS Integration:** The Building Management System shall generate automated alerts to the Data Centre Manager and on-call operations engineer when any environmental parameter approaches or exceeds defined thresholds.

**HVAC Maintenance Schedule:**

| Activity | Frequency | Responsible | Record Location |
|---|---|---|---|
| Filter replacement / cleaning | [Quarterly] | Facilities Management | BMS / Maintenance Log |
| Coolant level and system check | [Semi-annually] | HVAC Contractor | Maintenance Log |
| Full HVAC system inspection | [Annually] | Certified HVAC Engineer | Facilities Report |
| Failover test | [Semi-annually] | Facilities + Data Centre Manager | Test Report |
| Sensor calibration verification | [Annually] | Facilities Management | Calibration Record |

### 7.2 Fire Detection and Suppression

*Fire is among the most destructive risks to a data centre. Controls must detect early, alert rapidly, and suppress without causing additional equipment damage.*

**7.2.1 Fire Detection**

- **Very Early Warning Aspirating Smoke Detection (VESDA):** All data halls shall be equipped with VESDA or equivalent aspirating smoke detection systems capable of detecting sub-visible aerosol particles before visible smoke develops. Detection sensitivity shall be set to alert at [specify PPM threshold].
- **Conventional Smoke Detectors:** Supplementary conventional smoke detectors shall be installed in under-floor voids, above ceiling voids, and in all supporting areas (UPS rooms, generator rooms, cable corridors).
- **Heat Detectors:** Rate-of-rise heat detectors shall be installed as a secondary detection layer in areas where smoke detectors may generate false positives.
- **Detection-to-Alert Time:** Fire detection systems shall be configured to alert the Security Operations Centre and the building fire panel simultaneously within **[X] seconds** of threshold breach.

**7.2.2 Fire Suppression**

- **Clean Agent Suppression:** Data halls shall be protected by a clean agent gaseous fire suppression system (e.g., FM-200 / Novec 1230 or equivalent), designed to suppress fires without water damage to IT equipment. The system shall achieve extinguishing concentration within **[10 seconds]** of discharge.
- **Pre-Action Sprinkler System (Supporting Areas):** Non-IT areas of the facility (offices, corridors) shall be protected by a pre-action or dry-pipe sprinkler system. Water-based systems shall not be installed above or within data halls without specific risk justification and alternate containment.
- **Suppression Discharge Procedure:** Prior to discharge, the system shall provide a **[30-second] pre-discharge warning** to allow personnel evacuation. The Emergency Power Off (EPO) system shall be integrated to shut down electrical systems prior to or concurrent with discharge.
- **Suppression System Inspection:** Fire suppression systems shall be inspected by a certified fire protection engineer at minimum **annually**, with agent concentration and nozzle integrity verified at each inspection.

**Fire Safety Compliance Table:**

| Requirement | Standard / Authority | Current Status |
|---|---|---|
| Fire detection system certification | BOMBA / [Local Fire Authority] | [Certified / Pending] |
| Fire suppression system certification | BOMBA / [Local Fire Authority] | [Certified / Pending] |
| Fire safety plan submission | [Local Authority] | [Submitted / Pending] |
| Annual fire drill conducted | Internal requirement | [Date of Last Drill] |
| Fire extinguisher inspection | [Quarterly] | [Date of Last Inspection] |

### 7.3 Water and Flood Detection

*Water ingress from roof leaks, burst pipes, or flooding represents a significant risk in tropical climates such as Malaysia.*

- Water detection sensors shall be installed beneath raised floors, at all drain points, adjacent to HVAC units containing condensate lines, and in any area identified as at risk of water ingress.
- Water detection alerts shall trigger immediate notification to the Data Centre Manager and on-call engineer.
- **Flood Risk:** For facilities located in areas with any historical flood risk, raised-floor systems shall be designed with [specify clearance, e.g., minimum 45cm] above any assessed flood level. Flood barriers or water stoppers shall be installed at all external entry points.
- All water detection sensors shall be tested **[quarterly]** and results recorded.

### 7.4 Power Management and Electrical Safety

**7.4.1 Power Supply Architecture**

| Component | Minimum Requirement | [Organization Name] Standard |
|---|---|---|
| Utility supply feeds | Dual feeds from separate substations | [Specify current configuration] |
| UPS systems | N+1 per power domain | [Specify current configuration] |
| UPS battery runtime | Minimum [15 minutes] at full load | [Specify runtime] |
| Generator backup | Diesel generators with [N+1] redundancy | [Specify current configuration] |
| Generator switchover time | < [30 seconds] from utility failure | [Specify] |
| Generator fuel autonomy | Minimum [72 hours] at full load | [Specify] |
| PDU configuration | Dual-corded feeds to all critical equipment | [Specify] |

**7.4.2 Emergency Power Off (EPO)**

- EPO panels shall be installed at all data hall exit points, clearly marked, and protected against accidental activation by a safety cover.
- EPO activation procedures shall be documented and posted adjacent to each EPO panel.
- EPO systems shall be tested as part of the annual disaster recovery exercise.
- Unauthorized or accidental EPO activation constitutes a physical security incident and must be reported and investigated.

**7.4.3 Electrical Safety**

- All electrical work within the data centre shall be performed by licensed electrical contractors only.
- No electrical modifications, additions, or cable runs shall be made without prior approval from the Data Centre Manager and Facilities Management.
- Annual thermographic (thermal imaging) scanning of all electrical panels and high-density power distribution shall be conducted to identify hot spots or failing components.

---

## 8. Redundancy and Failover Design

*Redundancy and failover design ensure that single points of failure do not result in service unavailability. This section must be aligned with the organization's BCP and DR strategy.*

### 8.1 Redundancy Design Principles

[Organization Name]'s data centre infrastructure shall be designed according to the following redundancy principles:

1. **No Single Point of Failure (SPOF):** All critical infrastructure components — power, cooling, network connectivity, and physical access systems — shall be designed to eliminate single points of failure. Any identified SPOF must be risk-assessed, accepted by the Head of Infrastructure, and documented with a remediation timeline.

2. **Concurrently Maintainable:** Infrastructure shall be designed to allow maintenance of any component without impact to live systems or service levels.

3. **Fault Tolerant (for Tier IV equivalent systems):** Where the facility is designated as Tier IV equivalent, all systems shall be capable of sustaining one worst-case fault without impacting availability.

### 8.2 Infrastructure Redundancy Standards

| System | Minimum Redundancy Level | Target Redundancy | Failover Mode |
|---|---|---|---|
| Utility Power | Dual feeds (2N) | 2N | Automatic |
| UPS Systems | N+1 | 2N | Automatic |
| Diesel Generators | N+1 | N+1 | Automatic (< 30s) |
| Cooling / HVAC | N+1 | N+1 | Automatic |
| Network connectivity (ISP) | Dual ISP (diverse paths) | Dual ISP + diverse routes | Automatic (BGP failover) |
| Physical access control system | N+1 controller | N+1 | Automatic |
| CCTV recording | RAID storage + off-site backup | Dual-site recording | Automatic |
| Fire detection | Dual loop | Dual loop | — |

### 8.3 Disaster Recovery Site Requirements

*The DR data centre must meet physical security standards equivalent to or exceeding those of the primary data centre.*

| Requirement | Standard |
|---|---|
| Geographic separation from primary site | Minimum [X] km |
| Physical security zone model | Must implement equivalent zone model (Sections 6.1–6.6) |
| Environmental controls | Must meet all standards in Section 7 |
| Network connectivity | Independent diverse path from primary site |
| RTO for DR site activation | [Specify RTO per BCP/DR Plan] |
| RPO for DR site data synchronization | [Specify RPO per BCP/DR Plan] |
| DR site physical access audit | At minimum annually, co-ordinated with DR tests |

### 8.4 Failover Testing

All redundancy and failover mechanisms must be tested on a scheduled basis to validate their effectiveness. Test results shall be documented and reviewed by the Head of Infrastructure.

| Test | Frequency | Responsible | Documentation Required |
|---|---|---|---|
| UPS bypass / failover test | [Semi-annually] | Facilities Management + DC Manager | Test Report |
| Generator run-on-load test | [Monthly (unloaded) / Annually (full load)] | Facilities Management | Generator Run Log |
| HVAC failover test | [Semi-annually] | Facilities Management | Test Report |
| Network failover test (ISP switchover) | [Annually] | Network Operations | Test Report |
| DR site full failover exercise | [Annually] | IT Risk, Infrastructure, BCP team | DR Exercise Report |
| Access control system failover | [Annually] | Security Operations | Test Report |

### 8.5 Recovery Time and Point Objectives

*Align these figures with the approved Business Continuity Plan and Disaster Recovery Plan. These are infrastructure-level targets only.*

| System / Service Category | RTO Target | RPO Target | Approved By |
|---|---|---|---|
| [Critical Banking Systems] | [< 4 hours] | [< 1 hour] | [Head of Infrastructure] |
| [Core Network Infrastructure] | [< 2 hours] | [< 15 minutes] | [Head of Infrastructure] |
| [Physical Access Control Systems] | [< 1 hour] | [N/A — always-on] | [Head of Infrastructure] |
| [CCTV and Surveillance] | [< 4 hours] | [< 24 hours footage] | [Head of Infrastructure] |

---

## 9. Monitoring, Audit, and Compliance

*Monitoring and audit mechanisms are essential to verify that policy controls are operating as intended. This section defines the ongoing oversight regime.*

### 9.1 Continuous Monitoring

| Control | Monitoring Method | Frequency | Alert Recipient |
|---|---|---|---|
| CCTV system availability | Automated health check | Continuous | Security Operations |
| Access control system events | SIEM or access management platform | Continuous | Security Operations |
| Environmental sensors (Temp/Humidity) | BMS alerts | Continuous | DC Manager + On-Call |
| Power and UPS status | BMS alerts | Continuous | DC Manager + Facilities |
| Fire detection system status | Fire panel + BMS | Continuous | Security Operations + Facilities |
| Water detection sensor status | BMS alerts | Continuous | DC Manager + Facilities |
| Failed access attempts | Access control platform | Continuous | Security Operations |

### 9.2 Periodic Reviews

| Review Activity | Frequency | Responsible | Reviewer | Output |
|---|---|---|---|---|
| Physical access rights review | Quarterly | Data Centre Manager | Head of Infrastructure | Signed access list certification |
| Visitor log audit | Monthly | Security Operations | Data Centre Manager | Anomaly report |
| CCTV footage review (spot check) | Monthly | Security Operations | Data Centre Manager | Anomaly report |
| Environmental log review | Monthly | Facilities Management | Data Centre Manager | Trend report |
| Physical security risk assessment | Annually | IT Risk & Compliance | CISO | Risk assessment report |
| Full physical security policy review | Annually | Head of Infrastructure | CISO + CIO | Updated policy document |
| Penetration test (physical) | [Annually / Bi-annually] | External assessor | Head of Infrastructure | Physical pen test report |
| BCP / DR test (physical security scope) | Annually | IT Risk + Infrastructure | Head of Infrastructure | DR test report |

### 9.3 Compliance Monitoring and Reporting

- The Head of Infrastructure shall report on the physical security compliance status to the [IT Risk Committee / Board Technology Committee] on a **[quarterly]** basis.
- Any material physical security control failure or significant non-compliance finding shall be escalated to the CISO and reported to the relevant governance committee within **[X] business days** of identification.
- Compliance metrics shall include at minimum:
  - Number and status of physical security incidents in the period
  - Access rights exceptions or anomalies identified and resolved
  - Environmental threshold breach events and remediation status
  - Outstanding audit findings and remediation progress
  - Redundancy system test results

---

## 10. Incident Management and Breach Response

*Physical security incidents must be treated with the same urgency and structured response as cybersecurity incidents.*

### 10.1 Definition of Physical Security Incidents

The following events shall be classified as **physical security incidents** requiring formal response:

| Incident Type | Severity |
|---|---|
| Confirmed unauthorized access to any Zone 3 or Zone 4 area | **Critical** |
| Suspected unauthorized access to any Zone 3 or Zone 4 area | **High** |
| Loss or theft of physical access credentials | **High** |
| Tailgating event at any access control point | **High** |
| Tampering with or disabling of CCTV, alarms, or access control systems | **Critical** |
| Physical theft of IT equipment from facility | **Critical** |
| Unauthorized photography or recording within the facility | **Medium** |
| Environmental system failure (HVAC, power, fire suppression) | **High** |
| Accidental or unauthorized EPO activation | **Critical** |
| Fire, flood, or other environmental emergency | **Critical** |

### 10.2 Incident Response Procedure

*Summarize the steps here. The detailed SOP should be maintained as Appendix D and cross-referenced.*

1. **Detect and Report:** Any person who observes or suspects a physical security incident shall immediately report it to Security Operations via [specify contact number / method]. Security Operations shall log the incident in the incident management system within **[X] minutes** of notification.

2. **Triage and Classify:** Security Operations shall assess and classify the incident severity in accordance with Section 10.1 within **[X] minutes** of logging.

3. **Contain:** Immediate containment actions shall be taken to prevent escalation — including revoking compromised credentials, isolating affected areas, or invoking emergency procedures.

4. **Notify:** The Data Centre Manager and, for High and Critical incidents, the Head of Infrastructure and CISO, shall be notified within the timeframes prescribed in the Incident Response Plan.

5. **Investigate:** A formal investigation shall be conducted for all Medium, High, and Critical incidents. Evidence preservation (CCTV footage, access logs) shall be initiated immediately.

6. **Remediate:** Root cause analysis shall be completed and remediation actions tracked to closure.

7. **Report:** A formal incident report shall be submitted to the [IT Risk Committee] within **[X] business days** of incident closure for all High and Critical incidents. Where regulatory notification obligations are triggered (e.g., BNM notification under RMiT), the Compliance team shall be engaged.

### 10.3 Regulatory Notification

*Certain physical security incidents may trigger mandatory reporting obligations to BNM or other authorities. Engage Compliance immediately in such cases.*

| Trigger | Notification Recipient | Timeframe |
|---|---|---|
| Significant breach of data centre security affecting customer data | BNM | [Per RMiT notification requirements] |
| Physical theft of customer data storage media | BNM + PDPA Commissioner | [Per regulatory requirement] |
| Major infrastructure failure affecting financial services | BNM | [Per RMiT notification requirements] |

---

## 11. Third-Party and Vendor Management

*Third-party access to data centre facilities represents a significant risk vector. Controls must be proportionate and consistently enforced.*

### 11.1 Third-Party Access Authorization

All third-party vendors, contractors, and service providers requiring physical access to [Organization Name]'s data centre facilities must complete the following prerequisites before access is granted:

| Prerequisite | Responsible | Evidence Required |
|---|---|---|
| Signed Non-Disclosure Agreement (NDA) | Legal / Procurement | Executed NDA on file |
| Background verification check | HR / Procurement | Background check clearance |
| Third-party security risk assessment | IT Risk & Compliance | Completed vendor risk assessment |
| Site-specific induction / safety briefing | Data Centre Manager | Signed acknowledgment form |
| Access request approval by Head of Infrastructure | Head of Infrastructure | Approved access request form |

### 11.2 Third-Party Access Management

| Requirement | Standard |
|---|---|
| Access scope | Must be limited to specific zone(s) and equipment; no blanket data hall access |
| Escorting | Required at all times in Zone 3 and Zone 4 unless explicitly granted unescorted access |
| Unescorted access criteria | Only where continuous maintenance contract is in place, background checks complete, and Head of Infrastructure has granted specific approval |
| Advance notice for scheduled visits | Minimum [X] business days |
| Maximum single visit duration | [X] hours unless extended access request is approved |
| Out-of-hours access | Requires specific pre-authorization; Security Operations must be notified |
| Access log entries | Mandatory for every visit |

### 11.3 Co-Location and Managed Service Providers

Where [Organization Name] utilizes co-location facilities, the following additional requirements apply:

- The co-location provider's physical security controls must be assessed against this Policy prior to contract award and at minimum **annually** thereafter
- The co-location contract must include the right to audit physical security controls
- [Organization Name]'s assets within the co-location facility must be housed within a dedicated, separately secured cage or suite — shared open-rack environments are not acceptable for classified systems
- Any physical security incidents at co-location facilities must be reported to [Organization Name] in accordance with the co-location provider's contracted SLA and the incident management procedures in Section 10

---

## 12. Exceptions and Waivers

*No policy can anticipate every operational scenario. This section provides a structured process for managing exceptions while maintaining the integrity of the control framework.*

### 12.1 Exception Process

Any request to deviate from the requirements of this Policy must follow the formal exception process:

1. The requesting party shall submit a completed **Policy Exception Request Form** (Appendix E) to the Head of Infrastructure
2. The Head of Infrastructure shall assess the request in consultation with IT Risk & Compliance and Security Operations
3. Exceptions involving Zone 3 or Zone 4 access controls, or environmental control standards, require additional sign-off from the CISO
4. Approved exceptions shall be time-limited (maximum **[90 days]** per approval, renewable upon re-assessment) and include defined compensating controls
5. All approved and rejected exceptions shall be logged in the **Policy Exception Register** maintained by IT Risk & Compliance
6. The exception register shall be reviewed by the Head of Infrastructure **quarterly** and reported to the [IT Risk Committee]

### 12.2 Non-Compliance

Failure to comply with this Policy may result in:

- Immediate revocation of physical access privileges to data centre facilities
- Escalation to [Organization Name]'s Human Resources and/or Legal department
- Disciplinary action up to and including termination of employment or contract
- Reporting to regulatory authorities where the non-compliance constitutes a regulatory breach

---

## 13. Review and Approval

### 13.1 Review Schedule

This Policy shall be reviewed at a minimum of **annually** by the Head of Infrastructure, with ad hoc reviews triggered by:

- Material changes to the regulatory environment (e.g., BNM RMiT updates)
- Significant changes to the physical infrastructure or facility design
- A material physical security incident
- Findings from internal or external audits that require policy-level remediation
- Organizational restructuring affecting the roles and responsibilities defined in Section 4

### 13.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial version — policy established |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Major revision — description] |

### 13.3 Approval Sign-Off

*This policy requires formal approval from the following roles before it may be considered effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Infrastructure (Policy Owner) | [Full Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Security Officer | [Full Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Officer | [Full Name] | __________________ | [DD/MM/YYYY] |
| Head of IT Risk & Compliance | [Full Name] | __________________ | [DD/MM/YYYY] |
| [Board Technology Committee / ITSC Chair] | [Full Name] | __________________ | [DD/MM/YYYY] |

---

## 14. References

*This section lists all regulatory documents, standards, and internal policies referenced by or relevant to this document.*

### 14.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clauses |
|---|---|---|---|
| BNM/RH/PD 028-2 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.24 |
| — | Personal Data Protection Act 2010 | Government of Malaysia | Section 9 — Security Principle |
| — | National Cybersecurity Policy | NACSA / MOSTI | Critical Information Infrastructure |
| — | Financial Services Act 2013 | Government of Malaysia | Operational risk provisions |
| — | Guidelines on Business Continuity Management | Bank Negara Malaysia | BCP alignment |

### 14.2 Industry Standards

| Standard | Title | Relevant Sections |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A — A.7 Physical and Environmental Security |
| ISO 22301:2019 | Business Continuity Management | DR and resilience design |
| Uptime Institute Tier Standard | Data Centre Tier Classification | Tier III / Tier IV requirements |
| ANSI/ASHRAE 90.4 / TC 9.9 | Thermal Guidelines for Data Processing Environments | Temperature and humidity ranges |
| NFPA 75 | Standard for the Fire Protection of IT Equipment | Fire suppression system design |
| NFPA 76 | Standard for the Fire Protection of Telecommunications Facilities | Detection and suppression |
| EN 50600 | Data Centre Facilities and Infrastructures | European standard — design reference |

### 14.3 Internal Policy References

| Document | Title | Document ID |
|---|---|---|
| [Internal] | Information Security Policy | [Document ID] |
| [Internal] | Business Continuity and Disaster Recovery Plan | [Document ID] |
| [Internal] | Incident Response Policy | [Document ID] |
| [Internal] | Privileged Access Management Policy | [Document ID] |
| [Internal] | Cloud Security Policy | [Document ID] |
| [Internal] | Vendor and Third-Party Risk Management Policy | [Document ID] |
| [Internal] | Asset Management Policy | [Document ID] |
| [Internal] | Branch Infrastructure Security Standard | [Document ID] |

---

## 15. Appendices

### Appendix A — Data Centre Floor Plans and Zone Diagrams

*Insert or attach the following diagrams for each in-scope data centre facility. These must be updated whenever the physical layout changes.*

- [ ] Site layout and perimeter plan — showing Zone 0 and Zone 1 boundaries
- [ ] Data centre floor plan — showing Zone 2, Zone 3, and Zone 4 delineations
- [ ] CCTV camera placement plan — showing fields of view and coverage overlap
- [ ] Access control point map — showing all controlled doors, mantraps, and airlocks
- [ ] Power infrastructure diagram — showing utility feeds, UPS, generator, and PDU topology
- [ ] Cooling infrastructure diagram — showing HVAC units, containment aisles, and airflow
- [ ] Fire detection and suppression layout — showing detector and nozzle placement

**[Attach diagrams here or reference the controlled drawing register]**

---

### Appendix B — Access Authorization Request Form

*Use this form to request physical access rights for employees or contractors. Submit to the Data Centre Manager for processing.*

**PHYSICAL ACCESS AUTHORIZATION REQUEST**

| Field | Detail |
|---|---|
| **Requestor Name** | [Full Name] |
| **Requestor Employee / Contractor ID** | [ID Number] |
| **Organization / Department** | [Department or Company] |
| **Purpose of Access** | [Specific reason — equipment, maintenance, audit] |
| **Access Zone(s) Requested** | [ ] Zone 1  [ ] Zone 2  [ ] Zone 3  [ ] Zone 4 |
| **Specific Facility** | [Facility Name] |
| **Access Start Date** | [DD/MM/YYYY] |
| **Access End Date** | [DD/MM/YYYY] — or [ ] Permanent |
| **Escorted or Unescorted** | [ ] Escorted  [ ] Unescorted (approval required) |
| **Approving Manager (Name & ID)** | [Full Name — Employee ID] |

**Approvals:**

| Approver | Role | Signature | Date |
|---|---|---|---|
| [Name] | Data Centre Manager | __________________ | [DD/MM/YYYY] |
| [Name] | Head of Infrastructure (Zone 4 only) | __________________ | [DD/MM/YYYY] |

---

### Appendix C — Asset Movement Log Template

*All equipment entering or leaving any data centre facility must be recorded in this log. The Data Centre Manager holds the master log.*

| Date | Time | Direction (IN/OUT) | Asset Description | Asset Serial / Tag Number | Transported By | Authorized By | Seal Number (if applicable) | Notes |
|---|---|---|---|---|---|---|---|---|
| [DD/MM/YYYY] | [HH:MM] | [IN / OUT] | [Description] | [Serial / Tag] | [Name] | [Authorizing Staff] | [Seal #] | [Any notes] |

---

### Appendix D — Physical Security Incident Response SOP (Summary)

*This appendix provides a high-level summary of the incident response procedure. The full SOP is maintained separately as [SOP Document ID].*

**Immediate Response Steps (Security Operations):**

1. Receive and acknowledge incident report
2. Log incident in incident management system with timestamp
3. Classify severity (Critical / High / Medium / Low) per Section 10.1
4. For Critical / High: immediately notify Data Centre Manager and Head of Infrastructure
5. Preserve evidence: secure CCTV footage, access control logs for the period [X hours before to X hours after] the incident
6. Initiate containment: revoke credentials, lock down affected zones if required
7. Escalate to CISO if confirmed unauthorized access to Zone 3 or Zone 4
8. Brief Compliance team if regulatory notification may be required

**Investigation Requirements:**

- All High and Critical incidents must have a named Incident Owner
- Root cause analysis must be completed within **[X] business days** of incident closure
- Lessons learned must be formally documented and shared with the Data Centre Manager

**Evidence Preservation:**

| Evidence Type | Retention Period | Storage Location |
|---|---|---|
| CCTV footage (incident-related) | Minimum [12 months] | [Secure evidence archive] |
| Access control logs (incident-related) | Minimum [12 months] | [SIEM / Access platform] |
| Incident investigation report | Minimum [5 years] | [Document management system] |
| Regulatory correspondence | Minimum [7 years] | [Compliance document archive] |

---

### Appendix E — Policy Exception Request Form

**PHYSICAL SECURITY POLICY EXCEPTION REQUEST**

| Field | Detail |
|---|---|
| **Exception Reference Number** | [Auto-assigned by IT Risk] |
| **Date of Request** | [DD/MM/YYYY] |
| **Requestor Name and Role** | [Full Name — Role] |
| **Policy Section(s) Affected** | [Section number and title] |
| **Description of Exception Required** | [Clear description of what the policy requires and how this request deviates from it] |
| **Business Justification** | [Why is this exception necessary?] |
| **Duration of Exception Required** | From [DD/MM/YYYY] to [DD/MM/YYYY] |
| **Risk Assessment** | [Summary of risks introduced by the exception] |
| **Compensating Controls Proposed** | [What alternative controls will be in place?] |

**Approval:**

| Approver | Role | Decision | Signature | Date |
|---|---|---|---|---|
| [Name] | Head of Infrastructure | [ ] Approved  [ ] Rejected | __________________ | [DD/MM/YYYY] |
| [Name] | CISO (Zone 3 / Zone 4 exceptions) | [ ] Approved  [ ] Rejected | __________________ | [DD/MM/YYYY] |
| [Name] | Head of IT Risk & Compliance | [ ] Noted | __________________ | [DD/MM/YYYY] |

---

### Appendix F — Physical Security Compliance Checklist

*Use this checklist during periodic internal reviews or in preparation for regulatory examinations. Each item maps to a specific policy requirement.*

| # | Control Requirement | Policy Reference | Compliant (Y/N) | Evidence / Notes | Reviewer |
|---|---|---|---|---|---|
| 1 | Physical access zone model is documented and implemented | Section 6.1 | | | |
| 2 | Zone 3 access requires two-factor authentication | Section 6.5 | | | |
| 3 | Zone 4 access requires dual-person authorization | Section 6.6 | | | |
| 4 | Access rights reviewed in last 90 days | Section 6.5 | | | |
| 5 | Visitor log maintained and complete | Section 6.3 | | | |
| 6 | CCTV operating with full coverage and no blind spots | Section 6.5 | | | |
| 7 | CCTV footage retained for minimum prescribed period | Section 6.5 | | | |
| 8 | HVAC operating within defined temperature / humidity range | Section 7.1 | | | |
| 9 | HVAC N+1 redundancy confirmed | Section 7.1 | | | |
| 10 | VESDA / smoke detection system operational | Section 7.2 | | | |
| 11 | Fire suppression system certified and inspected | Section 7.2 | | | |
| 12 | Water detection sensors tested within last quarter | Section 7.3 | | | |
| 13 | UPS system test completed within last 6 months | Section 8.4 | | | |
| 14 | Generator tested under load within last 12 months | Section 8.4 | | | |
| 15 | DR site physical security assessed within last 12 months | Section 8.3 | | | |
| 16 | Third-party access prerequisites verified for all active vendors | Section 11.1 | | | |
| 17 | All physical security incidents logged and investigated | Section 10.2 | | | |
| 18 | Policy exception register reviewed within last quarter | Section 12.1 | | | |
| 19 | Policy reviewed and approved within last 12 months | Section 13.1 | | | |
| 20 | BNM RMiT Clause 10.24 compliance self-assessment completed | Section 3.1 | | | |

---

*End of Document*

---

**Document Control:** This document is subject to version control. Printed copies are uncontrolled. Always refer to the document management system for the current approved version. For queries relating to this Policy, contact the Head of Infrastructure at [contact details].