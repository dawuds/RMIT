# SOC Staffing Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | SOC Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document provides evidence of the Security Operations Centre (SOC) staffing posture maintained by [Organization Name] in compliance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.6**, which requires financial institutions to maintain a continuously staffed SOC with suitably qualified personnel capable of detecting, analysing, and responding to cybersecurity incidents on a 24-hour, 7-day basis.

This document covers:

- The 24/7 shift schedule and rotation model for all SOC analyst tiers
- Analyst qualification records, certifications, and role authorisations
- Asset and use-case catalogue under SOC monitoring
- Shift handover procedures and communication protocols
- Escalation matrix and associated Service Level Agreements (SLAs)

**Scope:** This evidence record applies to all personnel assigned to the SOC function within [Organization Name], including permanent staff, contracted analysts, and managed security service provider (MSSP) personnel with defined roles in the SOC operating model.

---

## 2. Asset and Item Identification

*List all assets, systems, and data sources within scope of SOC monitoring. Each entry should include a unique asset identifier, system type, and the business function it supports.*

| Asset ID | Asset / System Name | Asset Type | Business Function | Criticality | Date Added to Scope |
|---|---|---|---|---|---|
| [ASSET-001] | [System Name, e.g., Core Banking Platform] | [e.g., Application Server] | [e.g., Payment Processing] | [Critical / High / Medium / Low] | [DD-MMM-YYYY] |
| [ASSET-002] | [System Name] | [Asset Type] | [Business Function] | [Criticality] | [DD-MMM-YYYY] |
| [ASSET-003] | [System Name] | [Asset Type] | [Business Function] | [Criticality] | [DD-MMM-YYYY] |

> **Note:** This register must be reviewed and reconciled with the organisation's Configuration Management Database (CMDB) and Technology Asset Inventory at least quarterly.

---

## 3. Classification and Categorisation

*Describe how SOC-monitored assets are classified by sensitivity and criticality. This section supports tiered monitoring intensity and ensures alignment with [Organization Name]'s information classification policy.*

### 3.1 Asset Classification Tiers

| Tier | Classification | Description | Monitoring Intensity | Example Assets |
|---|---|---|---|---|
| Tier 1 | Critical | Assets whose compromise would cause severe operational or financial impact | Continuous real-time monitoring, 15-minute alert SLA | [e.g., Core Banking, Payment Gateway] |
| Tier 2 | High | Assets with significant regulatory or reputational impact | Near-real-time monitoring, 30-minute alert SLA | [e.g., Internet Banking, Active Directory] |
| Tier 3 | Medium | Assets supporting internal operations | Periodic monitoring, 2-hour alert SLA | [e.g., Internal HR Systems, File Servers] |
| Tier 4 | Low | Non-critical supporting assets | Best-effort monitoring, 8-hour alert SLA | [e.g., Internal wikis, dev/test environments] |

### 3.2 Data Classification Alignment

| Data Category | Classification Label | Applicable Regulation | Handling Requirement |
|---|---|---|---|
| Customer financial data | Strictly Confidential | RMiT, PDPA 2010 | Encrypted at rest and in transit; access logged |
| Authentication credentials | Confidential | RMiT | Vaulted; no plaintext storage |
| Security event logs | Internal | RMiT 11.6 | Retained for minimum 3 years |
| Threat intelligence feeds | Confidential | NACSA | Shared only under NDA or formal MOU |

---

## 4. Owner and Custodian Register

*Record the designated owner and custodian for each SOC-monitored asset. The owner is accountable for the asset's security posture; the custodian is responsible for day-to-day operational management.*

| Asset ID | Asset Name | Asset Owner | Owner Department | Asset Custodian | Custodian Contact | Last Verified |
|---|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [Name, Title] | [Department] | [Name, Title] | [Email / Ext.] | [DD-MMM-YYYY] |
| [ASSET-002] | [System Name] | [Name, Title] | [Department] | [Name, Title] | [Email / Ext.] | [DD-MMM-YYYY] |
| [ASSET-003] | [System Name] | [Name, Title] | [Department] | [Name, Title] | [Email / Ext.] | [DD-MMM-YYYY] |

> **SOC Monitoring Owner:** The SOC Manager ([Name]) holds overall accountability for the SOC monitoring function and is the primary point of contact for regulatory inquiries related to this document.

---

## 5. 24/7 Staffing Schedule

*Document the current shift rotation model, including shift timings, assigned analyst names or roles, and tier coverage. This schedule must demonstrate uninterrupted 24/7 coverage of Tier 1 and Tier 2 assets.*

### 5.1 Shift Model

| Shift | Hours (Local Time MYT) | Duration | Minimum Staffing |
|---|---|---|---|
| Morning Shift | 07:00 – 15:00 | 8 hours | [e.g., 2 Tier-1 Analysts, 1 Tier-2 Analyst] |
| Afternoon Shift | 15:00 – 23:00 | 8 hours | [e.g., 2 Tier-1 Analysts, 1 Tier-2 Analyst] |
| Night Shift | 23:00 – 07:00 | 8 hours | [e.g., 1 Tier-1 Analyst, 1 On-call Tier-2 Analyst] |

> Overlap periods of **[X] minutes** are maintained between shifts to facilitate handover. Weekend and public holiday coverage follows the same rotation model unless otherwise documented in the Annual Leave and Contingency Schedule (Appendix A).

### 5.2 Current Staffing Assignment

| Analyst Name | Employee / Contractor ID | SOC Tier | Primary Shift | Secondary Shift | Effective From | Status |
|---|---|---|---|---|---|---|
| [Full Name] | [EMP-001] | [Tier 1 / 2 / 3] | [Morning / Afternoon / Night] | [Shift or N/A] | [DD-MMM-YYYY] | [Active / On-Leave / Terminated] |
| [Full Name] | [EMP-002] | [Tier 1 / 2 / 3] | [Shift] | [Shift or N/A] | [DD-MMM-YYYY] | [Active] |
| [Full Name] | [EMP-003] | [Tier 1 / 2 / 3] | [Shift] | [Shift or N/A] | [DD-MMM-YYYY] | [Active] |

### 5.3 MSSP / Third-Party Coverage (if applicable)

| Provider Name | Contract Reference | Scope of Coverage | SOC Tier Supported | SLA Reference | BNM Outsourcing Notification |
|---|---|---|---|---|---|
| [MSSP Name] | [Contract No.] | [e.g., After-hours L1 monitoring] | [Tier 1] | [SLA-MSSP-001] | [Notified / Approved / N/A] |

---

## 6. Analyst Qualification Records

*Maintain evidence of each SOC analyst's qualifications, certifications, and role authorisations. This section directly supports RMiT Clause 11.6 requirements for suitably qualified personnel.*

### 6.1 Qualification Matrix

| Analyst Name | ID | SOC Tier | Role Title | Minimum Required Certification | Held Certification(s) | Cert. Expiry | Training Completed (Last 12M) | Qualification Status |
|---|---|---|---|---|---|---|---|---|
| [Full Name] | [EMP-001] | [Tier] | [e.g., SOC Analyst L1] | [e.g., CompTIA Security+] | [e.g., CompTIA Security+, CEH] | [DD-MMM-YYYY] | [e.g., Incident Handling, Log Analysis] | [Meets Requirements / Gap Identified] |
| [Full Name] | [EMP-002] | [Tier] | [Role Title] | [Required Cert.] | [Held Certs.] | [Expiry] | [Training] | [Status] |
| [Full Name] | [EMP-003] | [Tier] | [Role Title] | [Required Cert.] | [Held Certs.] | [Expiry] | [Training] | [Status] |

### 6.2 Minimum Qualification Standards by Tier

| SOC Tier | Role | Minimum Certification | Preferred Certification | Experience Requirement |
|---|---|---|---|---|
| Tier 1 (L1 Analyst) | Alert Triage & Monitoring | CompTIA Security+ or equivalent | CEH, GCIA | [e.g., 1+ years in security monitoring] |
| Tier 2 (L2 Analyst) | Incident Investigation | CEH, GCIA, or equivalent | GCIH, OSCP | [e.g., 3+ years, incident response experience] |
| Tier 3 (L3 / Lead) | Threat Hunting, Engineering | GCIH, CISSP, or equivalent | GREM, OSCP | [e.g., 5+ years, malware analysis or threat intel] |
| SOC Manager | Oversight & Governance | CISSP or CISM | CISA | [e.g., 7+ years, management experience] |

### 6.3 Training and Development Log

| Analyst Name | Training Programme | Provider | Date Completed | Duration (Hours) | Competency Area | Certificate Reference |
|---|---|---|---|---|---|---|
| [Full Name] | [e.g., SIEM Advanced Tuning] | [e.g., Internal / External Provider] | [DD-MMM-YYYY] | [Hours] | [e.g., Detection Engineering] | [CERT-REF-001] |
| [Full Name] | [Training Programme] | [Provider] | [DD-MMM-YYYY] | [Hours] | [Competency] | [CERT-REF-002] |

---

## 7. Use Case Catalogue and Tuning Schedule

*Enumerate all active detection use cases deployed in the SIEM/SOAR platform. Include the tuning cadence and last reviewed date to demonstrate ongoing detection effectiveness in accordance with RMiT Clause 11.6.*

### 7.1 Active Use Case Catalogue

| Use Case ID | Use Case Name | Detection Objective | Data Source(s) | MITRE ATT&CK Mapping | Alert Severity | Status | Owner |
|---|---|---|---|---|---|---|---|
| [UC-001] | [e.g., Brute Force Login Detection] | [Detect repeated failed authentications] | [e.g., AD Event Logs, Firewall] | [T1110 – Brute Force] | [High] | [Active / Disabled / Under Review] | [Analyst Name] |
| [UC-002] | [e.g., Lateral Movement via SMB] | [Detect SMB traversal between hosts] | [e.g., EDR, Network Flow] | [T1021.002] | [Critical] | [Active] | [Analyst Name] |
| [UC-003] | [Use Case Name] | [Objective] | [Data Sources] | [ATT&CK TTP] | [Severity] | [Status] | [Owner] |

### 7.2 Tuning Schedule

| Use Case ID | Last Tuned Date | Tuned By | Change Made | Next Scheduled Review | False Positive Rate (Pre-Tuning) | False Positive Rate (Post-Tuning) |
|---|---|---|---|---|---|---|
| [UC-001] | [DD-MMM-YYYY] | [Analyst Name] | [e.g., Threshold adjusted from 5 to 10 failures/min] | [DD-MMM-YYYY] | [e.g., 35%] | [e.g., 8%] |
| [UC-002] | [DD-MMM-YYYY] | [Analyst Name] | [Description of change] | [DD-MMM-YYYY] | [%] | [%] |

---

## 8. Shift Handover Procedures

*Document the mandatory steps analysts must complete at each shift transition to ensure continuity of monitoring and proper transfer of situational awareness.*

### 8.1 Handover Protocol

The outgoing shift lead is responsible for completing the **Shift Handover Checklist** (Appendix B) a minimum of **[X] minutes** before shift end. Handover must be conducted verbally (in-person or via secure voice channel) and confirmed in writing via the **SOC Shift Handover Log** in [Ticketing System / SIEM Platform].

**Mandatory Handover Items:**

- [ ] All open incidents and active investigations — status, priority, and assigned analyst
- [ ] Alerts in triage queue pending action
- [ ] Any systems or data sources experiencing degraded telemetry or outage
- [ ] Threat intelligence items actioned or pending during the shift
- [ ] Changes made to detection rules or SIEM configuration during the shift
- [ ] Escalations raised and their current status
- [ ] Any communications with IT Operations, vendors, or management
- [ ] BNM or regulatory reporting obligations triggered during the shift

### 8.2 Shift Handover Log Template

| Field | Details |
|---|---|
| **Shift Date** | [DD-MMM-YYYY] |
| **Outgoing Shift** | [Morning / Afternoon / Night] |
| **Outgoing Lead** | [Name] |
| **Incoming Lead** | [Name] |
| **Open Incidents** | [Incident IDs or "None"] |
| **Pending Alerts** | [Count and summary or "None"] |
| **Data Source Issues** | [Description or "None"] |
| **Escalations Raised** | [Yes / No — reference Escalation ID if Yes] |
| **Handover Completed At** | [HH:MM MYT] |
| **Outgoing Lead Signature** | [Signature / Digital Acknowledgement] |
| **Incoming Lead Signature** | [Signature / Digital Acknowledgement] |

---

## 9. Escalation Matrix and SLA

*Define the escalation paths for security incidents by severity level. SLAs must align with [Organization Name]'s Incident Response Policy and BNM's prescribed notification timelines.*

### 9.1 Escalation Matrix

| Severity | Classification | Initial Response SLA | Escalation L1 → L2 SLA | Escalation L2 → L3 SLA | Management Notification | BNM Notification Threshold |
|---|---|---|---|---|---|---|
| P1 – Critical | Active breach / confirmed compromise | 15 minutes | 30 minutes | 1 hour | Immediate (SOC Manager + CISO) | Within 24 hours per RMiT |
| P2 – High | Likely breach / significant anomaly | 30 minutes | 1 hour | 4 hours | Within 1 hour | As assessed |
| P3 – Medium | Suspicious activity under investigation | 2 hours | 4 hours | Next business day | Daily SOC report | Not typically required |
| P4 – Low | Informational / false positive candidate | 8 hours | Best effort | N/A | Weekly SOC summary | Not required |

### 9.2 Escalation Contact List

| Role | Name | Contact Number | Email | Availability |
|---|---|---|---|---|
| SOC Manager | [Name] | [+60X-XXXXXXXX] | [email@org.com] | 24/7 On-call |
| CISO | [Name] | [+60X-XXXXXXXX] | [email@org.com] | 24/7 On-call (P1/P2 only) |
| IT Operations Lead | [Name] | [+60X-XXXXXXXX] | [email@org.com] | Business hours + on-call |
| Legal / Compliance Officer | [Name] | [+60X-XXXXXXXX] | [email@org.com] | Business hours |
| BNM Cybersecurity Reporting | BNM ICTD | [Refer to BNM official channel] | [Refer to BNM official channel] | Per BNM notification process |
| NACSA / CyberSecurity Malaysia | [Refer to MyCERT] | 1-300-88-2999 | [Refer to official portal] | 24/7 for Critical incidents |

### 9.3 SLA Performance Tracking

*This table should be populated from SIEM/ticketing system reports on a quarterly basis.*

| Period | Total P1 Incidents | P1 SLA Met (%) | Total P2 Incidents | P2 SLA Met (%) | Average MTTD (mins) | Average MTTR (hours) | SLA Breaches (Count) | Remediation Actions Taken |
|---|---|---|---|---|---|---|---|---|
| [Q1 YYYY] | [Count] | [%] | [Count] | [%] | [Mins] | [Hours] | [Count] | [Description or "None"] |
| [Q2 YYYY] | [Count] | [%] | [Count] | [%] | [Mins] | [Hours] | [Count] | [Description or "None"] |

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability for maintaining and executing the SOC staffing model documented herein.*

| Activity | SOC Manager | L3 Analyst (Lead) | L2 Analyst | L1 Analyst | CISO | IT Operations | Compliance Officer |
|---|---|---|---|---|---|---|---|
| Maintain 24/7 staffing schedule | **A** | R | I | I | I | — | — |
| Verify analyst qualifications | **A/R** | C | — | — | I | — | C |
| Conduct shift handover | A | **R** | R | R | — | — | — |
| Triage and classify alerts | A | C | **R** | R | — | — | — |
| Investigate and contain incidents | A | **R** | R | C | I | C | — |
| Escalate P1/P2 incidents | A | **R** | R | I | R | C | C |
| Notify BNM (where required) | C | I | — | — | **A/R** | — | R |
| Review and tune detection use cases | **A** | R | C | — | I | — | — |
| Maintain this document | **A/R** | C | — | — | I | — | C |
| Review and approve this document | C | — | — | — | **A** | — | R |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 11. Review and Approval

### 11.1 Review Frequency

This document shall be reviewed:

- **Per-event:** Following any P1 or P2 security incident, staffing model change, or material change to SOC scope
- **Quarterly:** As part of the SOC governance review cycle, or as required by [Organization Name]'s Information Security Management framework

### 11.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name] | Initial document creation |
| [1.1] | [DD-MMM-YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD-MMM-YYYY] | [Author Name] | [Description of changes] |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Manager | [Name] | | [DD-MMM-YYYY] |
| Chief Information Security Officer (CISO) | [Name] | | [DD-MMM-YYYY] |
| Compliance Officer | [Name] | | [DD-MMM-YYYY] |
| Chief Information Officer (CIO) / CTO | [Name] | | [DD-MMM-YYYY] |

---

## 12. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 11.6 | Requirements for a continuously staffed SOC with qualified personnel for 24/7 cybersecurity monitoring, detection, and response |
| BNM RMiT | Clause 11 (General) | Technology risk management framework, cybersecurity governance, and incident management obligations |
| PDPA 2010 | Section 6, 40 | Personal data security and breach notification obligations relevant to incidents involving customer data |
| NACSA Cybersecurity Act 2018 | Section 25 | National critical information infrastructure (NCII) incident reporting obligations |
| [Organization Name] IRP | [IRP-DOC-ID] | Internal Incident Response Policy — escalation and notification procedures |
| [Organization Name] IS Policy | [IS-POL-DOC-ID] | Information Security Policy — asset classification and personnel security requirements |
| ISO/IEC 27035 | — | Information security incident management — best practice reference for SOC operations |
| NIST SP 800-61 Rev 2 | — | Computer Security Incident Handling Guide — reference for MTTD/MTTR benchmarking |

---

## Appendices

### Appendix A — Annual Leave and Contingency Staffing Schedule

*Attach or link the current-year schedule showing planned annual leave, public holidays, and the contingency staffing arrangements (e.g., on-call analyst, MSSP escalation) to ensure coverage is maintained at all times.*

| Period / Date | Analyst on Leave | Covering Analyst / Arrangement | Shift Affected | Approved By |
|---|---|---|---|---|
| [DD-MMM-YYYY] | [Analyst Name] | [Covering Analyst or "MSSP Coverage"] | [Shift] | [Manager Name] |

---

### Appendix B — Shift Handover Checklist

*To be completed by the outgoing shift lead at each shift transition. File in the SOC Shift Log.*

- [ ] All open incidents documented and handed over with current status
- [ ] Triage queue reviewed and pending items noted
- [ ] Data source health checks performed (SIEM ingestion, EDR, firewall telemetry)
- [ ] Threat intelligence queue reviewed and actioned items documented
- [ ] Any SIEM/SOAR configuration changes during shift documented in change log
- [ ] Escalations raised this shift: confirmed with incoming lead
- [ ] BNM reporting obligations: confirmed no outstanding notifications required
- [ ] Incoming lead briefed verbally and handover log signed

---

### Appendix C — Analyst Certification Evidence Register

*Maintain scanned copies or system links to certification evidence for all active SOC analysts. This register supports audit evidence requests.*

| Analyst Name | Certification Name | Issuing Body | Certificate Number | Issue Date | Expiry Date | Evidence Reference |
|---|---|---|---|---|---|---|
| [Full Name] | [Cert Name] | [e.g., (ISC)², ISACA, EC-Council] | [CERT-XXXXXXXX] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [File reference / link] |

---

### Appendix D — SOC Organisational Chart

*Attach the current SOC organisational chart showing all positions (filled and vacant), reporting lines, and the relationship with the broader IT security function. Label positions with Employee IDs, not names, if this document is subject to wider distribution.*

> [Attach SOC Org Chart — reference document: [ORG-CHART-SOC-vX.X]]

---

*This document is classified **Confidential** and is intended solely for use by authorised personnel of [Organization Name] and designated regulatory examiners. Unauthorised reproduction or distribution is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Last Review: [Last Review Date]*