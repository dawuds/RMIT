# Signature Update Records

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

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the register and procedural framework governing the recording, tracking, and review of Intrusion Detection System (IDS) and Intrusion Prevention System (IPS) signature and rule updates within [Organization Name]. It ensures that all signature update activities are systematically logged, attributed, and auditable in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically **Clause 10.39**.

These records provide evidence of continuous threat intelligence integration into network defence controls and support the organisation's broader cyber resilience posture by ensuring detection capabilities remain current against evolving threat landscapes.

### 1.2 Scope

This template applies to:

- All IDS/IPS devices, appliances, and software agents deployed within [Organization Name]'s network perimeter, internal segments, and cloud environments
- All signature update events, whether automated (vendor feed subscriptions) or manually applied
- All signature rule modifications, custom rule additions, tuning activities, and rollback events
- All environments including production, staging, and disaster recovery (DR) environments
- Third-party managed security service providers (MSSPs) operating IDS/IPS controls on behalf of [Organization Name]

This template does **not** cover:

- Antivirus or endpoint detection and response (EDR) signature updates, which are governed under [Reference EDR Log Policy]
- Vulnerability scanner plugin updates, governed under [Reference Vulnerability Management Policy]

---

## 2. Regulatory and Policy Context

*This section identifies the specific regulatory obligations that mandate the maintenance of these records.*

- **BNM RMiT Clause 10.39** — Financial institutions shall implement IDS/IPS controls and ensure that signature databases and detection rules are kept current. Update activities shall be logged and subject to periodic review to verify operational effectiveness.
- **[Organization Name] Information Security Policy** — [Reference internal policy document and version]
- **[Organization Name] IT Operations Procedure** — [Reference relevant SOPs]

---

## 3. Asset / Item Identification

*List every IDS/IPS asset in scope. Each asset entry uniquely identifies the system whose signature update events are captured in this log. Update this register whenever assets are added, decommissioned, or re-scoped.*

### 3.1 IDS/IPS Asset Register

| Asset ID | Asset Name / Hostname | Asset Type | Deployment Location | IP Address / Network Segment | Environment | Vendor / Model | Firmware / Software Version |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Hostname / Appliance Name] | [IDS / IPS / Unified NGFW] | [Data Centre / Branch / Cloud] | [IP or CIDR Range] | [Production / DR / Staging] | [Vendor Name, Model] | [Version Number] |
| [ASSET-002] | | | | | | | |
| [ASSET-003] | | | | | | | |

### 3.2 Signature Feed Subscriptions

| Asset ID | Signature Feed Provider | Feed Type | Subscription ID | Feed URL / Endpoint | Update Mechanism | Update Frequency |
|---|---|---|---|---|---|---|
| [ASSET-001] | [e.g., Emerging Threats, Cisco Talos, Palo Alto Threat Vault] | [Community / Commercial / Custom] | [Subscription ID] | [Feed URL or N/A if offline] | [Automatic / Manual] | [Hourly / Daily / On-Demand] |
| [ASSET-002] | | | | | | |

---

## 4. Classification and Categorisation

*Classify each update event by type and severity to support trend analysis, prioritisation, and audit reporting. All fields are mandatory for each log entry.*

### 4.1 Update Event Classification Schema

| Classification Dimension | Values |
|---|---|
| **Update Type** | Full Signature Update \| Incremental Update \| Custom Rule Addition \| Rule Modification \| Rule Deletion \| Rule Disable \| Rollback |
| **Trigger Mechanism** | Automated Scheduled \| Automated Event-Triggered \| Manual – Routine \| Manual – Emergency \| Vendor Advisory \| Threat Intelligence Feed |
| **Threat Category** | Malware \| Exploit \| Reconnaissance \| Policy Violation \| Denial of Service \| Lateral Movement \| Exfiltration \| Other |
| **Criticality of Update** | Critical \| High \| Medium \| Low \| Informational |
| **Update Outcome** | Success \| Partial Success \| Failed \| Rolled Back |

### 4.2 Update Event Log

*This is the primary system-generated log. The table below defines the mandatory fields that must be captured by the IDS/IPS management platform or SIEM. If system-generated exports are attached, reference the attachment in the Appendix.*

| Log Entry ID | Asset ID | Timestamp (UTC+8) | Update Type | Trigger Mechanism | Signature Package / Rule ID | Version Before | Version After | Threat Category | Criticality | Outcome | Error Code / Notes | Initiated By | Approved By |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [LOG-001] | [ASSET-001] | [YYYY-MM-DD HH:MM:SS] | [Update Type] | [Trigger] | [Package Name / Rule ID] | [v_old] | [v_new] | [Category] | [Level] | [Outcome] | [Notes or N/A] | [System / Username] | [Name or N/A] |
| [LOG-002] | | | | | | | | | | | | | |
| [LOG-003] | | | | | | | | | | | | | |

> **Note:** For automated system-generated logs, attach exported log files as Appendix A. The table above may be used for manual override records or summarised quarterly review entries.

---

## 5. Owner and Custodian

*Define accountability for each asset and for this register. Clear ownership is essential for audit traceability and escalation.*

### 5.1 Asset Ownership and Custodianship

| Asset ID | Asset Owner (Business) | Technical Custodian | Backup Custodian | MSSP / Third Party (if applicable) | Contact / Escalation |
|---|---|---|---|---|---|
| [ASSET-001] | [Business Unit / Role] | [Name, IT Operations] | [Name, IT Operations] | [MSSP Name or N/A] | [Email / Phone] |
| [ASSET-002] | | | | | |

### 5.2 Register Ownership

| Role | Name | Department | Contact |
|---|---|---|---|
| **Register Owner** | IT Operations Manager | IT Operations | [Email] |
| **Register Custodian** | [Senior Security Analyst / SOC Lead] | [Department] | [Email] |
| **Quarterly Reviewer** | [CISO / Head of IT Security] | [Department] | [Email] |

---

## 6. Status and Lifecycle Stage

*Track the operational status of each IDS/IPS asset and the currency of its signature base. This section provides a point-in-time status view, distinct from the continuous event log in Section 4.*

### 6.1 Asset Signature Currency Status

| Asset ID | Current Signature Version | Last Successful Update (UTC+8) | Update Status | Days Since Last Update | Signature Age Assessment | Action Required |
|---|---|---|---|---|---|---|
| [ASSET-001] | [Version] | [YYYY-MM-DD HH:MM] | [Current / Outdated / Failed / Disabled] | [Number] | [Acceptable / At Risk / Critical] | [None / Investigate / Escalate] |
| [ASSET-002] | | | | | | |

**Signature Age Thresholds:**

| Assessment | Threshold | Required Action |
|---|---|---|
| Acceptable | ≤ 24 hours for critical assets; ≤ 7 days for non-critical | No action required |
| At Risk | 24–72 hours for critical assets; 7–14 days for non-critical | Investigate and remediate within 24 hours |
| Critical | > 72 hours for critical assets; > 14 days for non-critical | Immediate escalation to IT Operations Manager and CISO |

### 6.2 Asset Lifecycle Stage

| Asset ID | Lifecycle Stage | Commissioned Date | Planned Decommission Date | EOL / EOS Date (Vendor) | Notes |
|---|---|---|---|---|---|
| [ASSET-001] | [Active / Under Maintenance / Decommissioning / Decommissioned] | [YYYY-MM-DD] | [YYYY-MM-DD or N/A] | [YYYY-MM-DD or N/A] | |
| [ASSET-002] | | | | | |

---

## 7. Last Review Date and Review Findings

*Document findings from each quarterly review of the IDS/IPS signature update records. Continuous monitoring findings that require escalation should also be captured here.*

### 7.1 Quarterly Review Log

| Review Period | Review Date | Reviewed By | Review Scope | Total Update Events | Failed Updates | Overdue Updates | Anomalies Identified | Findings Summary | Remediation Actions | Review Outcome |
|---|---|---|---|---|---|---|---|---|---|---|
| [Q1 YYYY] | [YYYY-MM-DD] | [Name, Role] | [All assets / Specific assets] | [Count] | [Count] | [Count] | [Yes / No] | [Brief summary or "None"] | [Action items or "None"] | [Satisfactory / Requires Attention / Unsatisfactory] |
| [Q2 YYYY] | | | | | | | | | | |
| [Q3 YYYY] | | | | | | | | | | |
| [Q4 YYYY] | | | | | | | | | | |

### 7.2 Outstanding Remediation Actions

| Action ID | Review Period | Asset ID | Finding Description | Risk Rating | Assigned To | Target Resolution Date | Status | Closure Date |
|---|---|---|---|---|---|---|---|---|
| [ACT-001] | [Q-YYYY] | [ASSET-ID] | [Description of finding] | [Critical / High / Medium / Low] | [Name, Role] | [YYYY-MM-DD] | [Open / In Progress / Closed] | [YYYY-MM-DD or N/A] |
| [ACT-002] | | | | | | | | |

---

## 8. Roles and Responsibilities

*This RACI matrix defines accountability for all activities related to IDS/IPS signature update records. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IT Operations Manager | Security Analyst / SOC | System Administrator | CISO / Head of IT Security | Internal Audit | MSSP (if applicable) |
|---|---|---|---|---|---|---|
| Maintain and configure automated signature update schedules | A | R | C | I | — | C |
| Monitor automated update success / failure alerts | C | R | R | I | — | R |
| Investigate and remediate failed signature updates | A | R | R | I | — | C |
| Apply emergency / manual signature updates | A | R | R | I | — | C |
| Maintain the IDS/IPS Asset Register (Section 3) | A | R | C | I | — | I |
| Log manual update events in Section 4.2 | A | R | R | I | — | R |
| Conduct quarterly review of update records | A | R | C | C | I | I |
| Review and approve quarterly findings report | A | — | — | A | I | — |
| Escalate critical signature currency failures | R | R | R | A | I | R |
| Retain update logs per records retention schedule | A | C | R | I | I | — |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name, Role] | Initial document creation |
| | | | |
| | | | |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Name] | __________________ | [YYYY-MM-DD] |
| CISO / Head of IT Security | [Name] | __________________ | [YYYY-MM-DD] |
| Internal Audit Representative | [Name] | __________________ | [YYYY-MM-DD] |
| [Additional Approver, if required] | [Name] | __________________ | [YYYY-MM-DD] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| **BNM RMiT** | Clause 10.39 | Requirement to implement, maintain, and log IDS/IPS signature and rule update activities |
| **BNM RMiT** | Clause 10.1–10.10 | General cybersecurity controls framework underpinning network security controls |
| **[Organization Name] Information Security Policy** | [Version / Date] | Internal policy governing information security controls |
| **[Organization Name] IT Operations Procedure – IDS/IPS Management** | [SOP Reference] | Operational procedures for IDS/IPS configuration and maintenance |
| **[Organization Name] Incident Response Plan** | [Version / Date] | Escalation procedures for failed or compromised signature updates |
| **[Organization Name] Records Retention Schedule** | [Version / Date] | Defines retention period for security operations logs (minimum [X] years) |
| **NIST SP 800-94** | Rev. 1 | Guide to Intrusion Detection and Prevention Systems (reference) |
| **ISO/IEC 27001:2022** | Annex A, Control 8.16 | Monitoring activities — supports alignment with international standard |

---

## 11. Appendices

### Appendix A — System-Generated Signature Update Log Exports

*Attach or reference exported log files from the IDS/IPS management console or SIEM platform for the review period. Each export should include the asset ID, date range, and total event count.*

| Attachment Reference | Asset ID | Period Covered | Export Format | File Name / Location | Exported By | Export Date |
|---|---|---|---|---|---|---|
| [APP-A-001] | [ASSET-001] | [YYYY-MM-DD to YYYY-MM-DD] | [CSV / PDF / SIEM Report] | [File path or document management reference] | [Name] | [YYYY-MM-DD] |
| [APP-A-002] | | | | | | |

### Appendix B — Signature Update Failure Incident Register

*Record all signature update failures that resulted in a formal incident being raised. Cross-reference with the Incident Register.*

| Incident ID | Asset ID | Failure Date | Failure Description | Impact Assessment | Incident Ticket Reference | Resolution Summary | Resolved Date |
|---|---|---|---|---|---|---|---|
| [INC-001] | [ASSET-001] | [YYYY-MM-DD] | [Description] | [Description] | [Ticket #] | [Resolution] | [YYYY-MM-DD] |

### Appendix C — Approved Signature Exclusion / Suppression Register

*Where specific signatures have been disabled or suppressed (e.g., due to false positive tuning), document the justification and approval. Suppressed rules must be reviewed at minimum quarterly.*

| Exclusion ID | Asset ID | Rule / Signature ID | Rule Name | Reason for Suppression | Risk Accepted By | Approval Date | Review Date | Status |
|---|---|---|---|---|---|---|---|---|
| [EXC-001] | [ASSET-001] | [Rule ID] | [Rule Name] | [Justification — e.g., confirmed false positive in production environment] | [Name, Role] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Active / Removed] |

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **IDS** | Intrusion Detection System — a monitoring system that detects suspicious activities and generates alerts |
| **IPS** | Intrusion Prevention System — an active control that detects and blocks malicious traffic in real time |
| **Signature** | A pattern or rule used by IDS/IPS to identify known threats or anomalous behaviour |
| **RMiT** | Risk Management in Technology — BNM Policy Document issued to govern technology risk in financial institutions |
| **SIEM** | Security Information and Event Management — platform used for centralised log collection and correlation |
| **MSSP** | Managed Security Service Provider — a third party contracted to operate security controls on behalf of the organisation |
| **EOL / EOS** | End of Life / End of Support — vendor-designated dates after which software or hardware no longer receives updates |
| **RACI** | Responsibility Assignment Matrix: Responsible, Accountable, Consulted, Informed |

---

*This document is classified as **Confidential**. It must be handled, stored, and disposed of in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: IT Operations Manager | [Organization Name]*