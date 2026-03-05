# Visitor Management Log — Data Centre Facilities

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

---

## 1. Purpose and Scope

This document defines the structure and requirements of the Visitor Management Log maintained for all data centre facilities operated by [Organization Name]. The log serves as a continuous, system-generated audit record of all physical visitor access events to data centre premises, in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.24**, which mandates that financial institutions maintain comprehensive records of physical access to critical technology infrastructure.

**Scope** covers all individuals — including but not limited to third-party vendors, contractors, auditors, regulators, and temporary staff — who are granted physical access to any data centre facility, server room, network operations centre (NOC), or restricted technology zone under the management of [Organization Name].

This log is a **mandatory compliance artifact**. It is system-generated through the physical access control management platform and is subject to continuous monitoring and quarterly formal review by the Head of Infrastructure.

---

## 2. Asset and Facility Identification

*Record the specific data centre asset or facility location associated with each visitor access event. Each entry must be traceable to a named, registered infrastructure asset.*

| Field | Value |
|---|---|
| **Facility Name** | [e.g., Primary Data Centre — MF1 / DR Site — MF2] |
| **Facility ID** | [Unique Facility Identifier] |
| **Physical Address** | [Street Address, City, Postcode, State] |
| **Asset Tag / Room ID** | [e.g., DC-FLOOR2-CAGE-A3] |
| **Access Point / Entry Node** | [e.g., Main Anteroom Airlock, Cage Door 3, NOC Entry] |
| **Access Control System** | [e.g., Lenel OnGuard, Genetec, Suprema BioStar] |
| **Log Source System** | [System Name and Version] |

---

## 3. Classification and Categorisation

*Each visitor access event must be categorised by visitor type and the classification level of the zone accessed. This ensures appropriate risk-tiering for anomaly detection and audit review.*

### 3.1 Visitor Classification

| Visitor Category | Code | Description |
|---|---|---|
| BNM / Regulatory Auditor | VIS-REG | Authorised regulatory inspector |
| External Auditor | VIS-AUD | Third-party assurance or certification auditor |
| Vendor / Contractor | VIS-VND | Hardware/software support technician |
| Managed Service Provider | VIS-MSP | Outsourced service personnel |
| Temporary Staff | VIS-TMP | Short-term contracted personnel |
| Other | VIS-OTH | [Specify in remarks] |

### 3.2 Zone Classification

| Zone Level | Label | Description |
|---|---|---|
| Level 1 — Restricted | ZONE-R1 | General data centre floor, non-caged rows |
| Level 2 — Highly Restricted | ZONE-R2 | Caged/colocated server areas |
| Level 3 — Critical | ZONE-R3 | Core networking, HSM, key management rooms |
| Level 4 — Sensitive Support | ZONE-R4 | UPS, power distribution, cooling plant rooms |

---

## 4. Owner and Custodian

*Each access event must reference the internal owner who authorised the visit and the custodian responsible for escorting or supervising the visitor during the access period.*

| Role | Name | Contact | Remarks |
|---|---|---|---|
| **Facility Owner** | Head of Infrastructure | [Email / Ext.] | Accountable for all access authorisations |
| **Authorising Officer** | [Name] | [Email / Ext.] | Person who approved this specific visit |
| **Escorting Custodian** | [Name] | [Email / Ext.] | Internal staff member present during visit |
| **Backup Custodian** | [Name] | [Email / Ext.] | Alternate escort if primary unavailable |

> **Note:** Unescorted access is prohibited for all visitor categories unless explicitly pre-approved by the CISO and Head of Infrastructure and documented under a standing access agreement. All such exceptions must be recorded.

---

## 5. Physical Access Control Zones

*Log entries must capture the specific access control zones entered, entry and exit timestamps, and the access method used. This section feeds directly into access anomaly reporting.*

### 5.1 Visit Log Entry Record

| Field | Value |
|---|---|
| **Log Entry ID** | [System-Generated UUID / Sequential ID] |
| **Visit Date** | [YYYY-MM-DD] |
| **Visitor Full Name** | [Full Name as per NRIC / Passport] |
| **Identification Type** | [NRIC / Passport / Staff Badge] |
| **Identification Number** | [Redacted per PDPA — last 4 digits only for printed logs] |
| **Organization / Company** | [Visitor's Employer] |
| **Purpose of Visit** | [Brief description, e.g., "Tape library maintenance — rack A3"] |
| **Zones Accessed** | [ZONE-R1 / ZONE-R2 / ZONE-R3 / ZONE-R4] |
| **Entry Time** | [HH:MM:SS] |
| **Exit Time** | [HH:MM:SS] |
| **Access Method** | [Badge + PIN / Biometric / Visitor Pass] |
| **Visitor Badge Number** | [Badge ID issued at reception] |
| **Escorting Custodian** | [Name and Staff ID] |
| **Work Order / Ticket Reference** | [ITSM Ticket / Change Request ID] |
| **Access Granted By** | [Authorising Officer Name] |
| **Remarks / Observations** | [Any anomalies, incidents, or notes] |

### 5.2 Zone Access Detail (Per Zone Entered)

| Zone ID | Zone Label | Entry Time | Exit Time | CCTV Reference | Biometric Verified |
|---|---|---|---|---|---|
| [ZONE-Rx] | [Label] | [HH:MM:SS] | [HH:MM:SS] | [Camera ID / Timestamp] | [Yes / No] |
| [ZONE-Rx] | [Label] | [HH:MM:SS] | [HH:MM:SS] | [Camera ID / Timestamp] | [Yes / No] |

### 5.3 Access Denial Events

*All failed or denied access attempts must be logged separately and escalated to the Security Operations Centre (SOC) within [X] minutes.*

| Timestamp | Visitor Name | Zone Attempted | Denial Reason | Escalated To | Escalation Time |
|---|---|---|---|---|---|
| [YYYY-MM-DD HH:MM:SS] | [Name] | [ZONE-Rx] | [Unauthorised badge / Not on pre-approval list] | [SOC / Security Manager] | [HH:MM:SS] |

---

## 6. Environmental Controls — Areas Accessed

*Where a visitor accesses areas containing environmental control systems (HVAC, fire suppression, UPS, etc.), this must be explicitly noted. Access to these areas carries elevated operational risk and requires additional sign-off.*

### 6.1 Environmental Control Zones

| Environmental System | Location / Room ID | Access Requires | Visitor Access Permitted |
|---|---|---|---|
| HVAC / Precision Cooling Units | [Room ID, e.g., MECH-B1] | Head of Infra approval + escort | [Yes / No / Exception] |
| Fire Suppression (FM-200 / Novec) | [Room ID] | Head of Infra + Safety Officer approval | [Yes / No / Exception] |
| UPS / Battery Room | [Room ID] | Head of Infra approval + escort | [Yes / No / Exception] |
| Power Distribution Unit (PDU) Room | [Room ID] | Head of Infra approval + escort | [Yes / No / Exception] |
| Generator Room | [Room ID] | Head of Infra + Facilities Manager | [Yes / No / Exception] |

### 6.2 Environmental Zone Access Log Entry

| Visit Log ID | System Accessed | Justification | Approver | Safety Briefing Completed |
|---|---|---|---|---|
| [Log Entry ID] | [e.g., FM-200 Suppression Panel] | [e.g., Annual servicing by vendor X] | [Name] | [Yes / No — Signature] |

---

## 7. Redundancy and Failover Design — Critical Area Access

*Access to infrastructure supporting redundancy and failover capabilities (e.g., secondary network paths, DR replication links, clustering nodes) must be tracked separately to ensure that maintenance or vendor activity does not inadvertently compromise resilience posture.*

### 7.1 Critical Redundancy Infrastructure Access

| Infrastructure Component | Classification | Location | Redundancy Tier | Visit Log ID | Risk Accepted By |
|---|---|---|---|---|---|
| Primary Core Switch Stack | ZONE-R3 | [Rack ID] | Active-Active | [Log ID] | [Name / Role] |
| DR Replication Link Termination | ZONE-R3 | [Rack ID] | Active-Passive | [Log ID] | [Name / Role] |
| Secondary UPS Feed | ZONE-R4 | [Room ID] | N+1 | [Log ID] | [Name / Role] |
| Backup Generator ATS | ZONE-R4 | [Room ID] | N | [Log ID] | [Name / Role] |
| HSM / Key Management Appliance | ZONE-R3 | [Rack ID] | Clustered | [Log ID] | [Name / Role] |

### 7.2 Pre- and Post-Access Verification

*For any visitor access touching redundancy or failover systems, a pre-access system health check and a post-access verification must be completed and logged.*

| Log Entry ID | Component | Pre-Access Status | Post-Access Status | Verified By | Timestamp |
|---|---|---|---|---|---|
| [Log ID] | [Component Name] | [Operational / Degraded] | [Operational / Degraded] | [Staff Name] | [YYYY-MM-DD HH:MM] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for maintaining and reviewing visitor management logs.*

| Activity | Head of Infrastructure | Physical Security Manager | SOC Analyst | Escorting Custodian | IT Compliance Officer | CISO |
|---|---|---|---|---|---|---|
| Pre-approve visitor access requests | **A** | R | — | — | C | C |
| Issue and collect visitor badges | C | **R/A** | — | I | — | — |
| Escort visitor during facility access | C | C | — | **R/A** | — | — |
| Log access events in system | I | **R** | I | I | — | — |
| Monitor real-time access anomalies | I | C | **R/A** | — | — | I |
| Escalate access denial events | I | **A** | R | — | I | I |
| Perform daily log reconciliation | **A** | R | — | — | C | — |
| Conduct quarterly log review | **A** | C | C | — | R | I |
| Report findings to CISO / Board | C | C | C | — | **R** | **A** |
| Archive logs per retention policy | **A** | C | — | — | R | — |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 9. Monitoring, Retention, and Escalation

### 9.1 Continuous Monitoring Controls

- Real-time alerts are configured for: access outside business hours, access denial events exceeding [X] attempts, access to ZONE-R3 or ZONE-R4 by any visitor category, visitor badge not returned within [Y] minutes of exit time.
- Alerts are routed to the SOC via [SIEM Platform Name] and acknowledged within [SLA, e.g., 15 minutes].

### 9.2 Log Retention

| Log Type | Retention Period | Storage Location | Format |
|---|---|---|---|
| Visitor Access Event Logs | Minimum 3 years | [System Name / Archive Path] | System-native + PDF export |
| Access Denial Logs | Minimum 3 years | [SIEM / Archive Path] | System-native |
| CCTV Footage (correlated) | [90 days / per policy] | [NVR System Name] | H.264 / H.265 |
| Quarterly Review Reports | Minimum 5 years | [DMS Path] | PDF / Signed |

### 9.3 Escalation Procedure

| Trigger | Initial Escalation | Secondary Escalation | Timeframe |
|---|---|---|---|
| Unescorted visitor detected | Physical Security Manager | CISO | Immediate |
| Access denial — repeated attempts | SOC Analyst | Physical Security Manager | Within 15 minutes |
| Visitor fails to exit within expected window | Escorting Custodian → Physical Security Manager | Head of Infrastructure | Within 30 minutes |
| Critical zone access outside change window | SOC Analyst | Head of Infrastructure + CISO | Immediate |

---

## 10. Review and Approval

### 10.1 Quarterly Review Checklist

- [ ] All visitor log entries for the quarter have been reconciled against pre-approval records.
- [ ] All CCTV footage has been verified as available for the review period.
- [ ] Access denial events have been reviewed and resolved or escalated.
- [ ] Environmental and redundancy zone access events have been verified against change records.
- [ ] No unescorted access events are present without documented exception approval.
- [ ] Log retention compliance confirmed — no gaps in archive.
- [ ] Anomalies identified and raised to the CISO: [Yes — Ref. [Incident ID] / No].

### 10.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial release |
| [1.1] | [YYYY-MM-DD] | [Author Name] | [Description of changes] |

### 10.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Infrastructure | [Name] | __________________ | [YYYY-MM-DD] |
| Physical Security Manager | [Name] | __________________ | [YYYY-MM-DD] |
| IT Compliance Officer | [Name] | __________________ | [YYYY-MM-DD] |
| Chief Information Security Officer | [Name] | __________________ | [YYYY-MM-DD] |

---

## 11. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.24 | Physical access controls — mandatory logging of all visitor access to data centre facilities |
| BNM RMiT | Clause 10.20–10.23 | Physical security perimeter and access control zone requirements |
| PDPA 2010 | Section 6, 40 | Data minimisation and security obligations for personal data captured in visitor logs |
| ISO/IEC 27001:2022 | Annex A 7.2 | Physical entry controls |
| ISO/IEC 27001:2022 | Annex A 7.4 | Physical security monitoring |
| [Organization Name] | Physical Security Policy v[X.X] | Internal physical access governance policy |
| [Organization Name] | Data Centre Operations Manual v[X.X] | Facility-specific access procedures |

---

## Appendices

### Appendix A — Visitor Pre-Approval Request Form Template

*Appendix A contains the standard form used by internal requestors to seek approval for visitor access prior to the visit date. [Attach or link to: Visitor Access Request Form — [Form ID]]*

### Appendix B — Visitor Briefing and Non-Disclosure Acknowledgement

*All visitors must sign a Non-Disclosure Agreement (NDA) and safety briefing acknowledgement prior to entry. [Attach or link to: Visitor NDA Template — [Document ID]]*

### Appendix C — Access Control System Export Procedures

*Appendix C documents the step-by-step procedure for generating and exporting visitor log reports from [Access Control System Name] for audit and quarterly review purposes. [Attach or link to: System Export SOP — [SOP ID]]*

### Appendix D — Quarterly Review Report Template

*Appendix D provides the standard quarterly review report structure used by the IT Compliance Officer to summarise visitor log findings for presentation to the Head of Infrastructure and CISO. [Attach or link to: Quarterly Review Report Template — [Document ID]]*

### Appendix E — Contact Directory

| Role | Name | Phone | Email |
|---|---|---|---|
| Head of Infrastructure | [Name] | [+60-X-XXXX-XXXX] | [email@organization.com] |
| Physical Security Manager | [Name] | [+60-X-XXXX-XXXX] | [email@organization.com] |
| SOC Duty Analyst (24/7) | [On-Call] | [+60-X-XXXX-XXXX] | [soc@organization.com] |
| IT Compliance Officer | [Name] | [+60-X-XXXX-XXXX] | [email@organization.com] |

---

*This document is classified **Confidential**. Unauthorised disclosure is prohibited. Printed copies are uncontrolled — refer to [Organization Name] Document Management System for the current controlled version.*