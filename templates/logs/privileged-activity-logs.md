# Privileged Activity Logs

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the framework and retention policy for **Privileged Activity Logs** maintained by [Organization Name] in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.56**. Privileged activity logs serve as an auditable record of all actions performed by users with elevated system access, supporting accountability, forensic investigation, and regulatory compliance.

### 1.2 Scope

This artifact applies to:

- All privileged accounts across production, non-production, and critical infrastructure environments operated by [Organization Name]
- All technology systems, platforms, and applications subject to RMiT obligations
- Internal staff, third-party vendors, and contracted service providers granted privileged access
- All privileged activities occurring within systems classified as critical or sensitive under [Organization Name]'s asset classification policy

### 1.3 Regulatory Basis

This log framework is mandated under:

- **BNM RMiT Policy Document — Clause 10.56**: Financial institutions must ensure logs of all privileged activities are captured and retained for a **minimum of three (3) years**
- Related obligations under **BNM RMiT Clauses 10.53–10.57** (Access Control and Identity Management)
- **Personal Data Protection Act 2010 (PDPA)** — data handling obligations for logs containing personal data
- [Organization Name] Internal Information Security Policy, Version [X.X]

---

## 2. Asset / Item Identification

*This section identifies the specific systems, accounts, and environments for which privileged activity logs are generated. Each log source must be uniquely identified to enable traceability and targeted review.*

### 2.1 Privileged Account Inventory

| Account ID | Account Name | Account Type | System / Platform | Environment | Associated Owner |
|---|---|---|---|---|---|
| [ACCT-001] | [e.g., root] | [e.g., OS Local Admin] | [e.g., Linux Production Server] | [e.g., Production] | [Name / Team] |
| [ACCT-002] | [e.g., svc_db_admin] | [e.g., Database Service Account] | [e.g., Oracle DB Cluster] | [e.g., Production] | [Name / Team] |
| [ACCT-003] | [e.g., domain\adminuser] | [e.g., Domain Administrator] | [e.g., Active Directory] | [e.g., Enterprise] | [Name / Team] |

### 2.2 Log Source Systems

| Log Source ID | System Name | System Type | Log Collection Method | Log Aggregation Target |
|---|---|---|---|---|
| [SRC-001] | [e.g., Active Directory Domain Controller] | [e.g., Identity Provider] | [e.g., Windows Event Forwarding] | [e.g., SIEM Platform] |
| [SRC-002] | [e.g., Oracle DB Production] | [e.g., Relational Database] | [e.g., Database Audit Vault] | [e.g., SIEM Platform] |
| [SRC-003] | [e.g., Privileged Access Workstation] | [e.g., Endpoint] | [e.g., EDR Agent] | [e.g., SIEM Platform] |
| [SRC-004] | [e.g., Privileged Access Management (PAM) Solution] | [e.g., PAM Tool] | [e.g., Native API Export] | [e.g., SIEM Platform] |

### 2.3 Log Content Requirements

Each privileged activity log entry must capture, at minimum, the following fields:

- **Timestamp** — Date and time of the activity (UTC, synchronized via NTP)
- **Account Identifier** — Unique ID of the privileged account used
- **Source IP / Hostname** — Origin of the session or request
- **Target System** — System, application, or resource accessed
- **Action Performed** — Description of the privileged command, query, or configuration change
- **Session ID** — Unique identifier for the session
- **Outcome** — Success or failure of the action
- **Approver Reference** — Ticket or authorization reference (where applicable)

---

## 3. Classification and Categorisation

*This section categorises privileged activity log types and assigns sensitivity levels. Categorisation ensures appropriate handling, access restrictions, and review prioritization are applied consistently.*

### 3.1 Log Classification Level

| Attribute | Value |
|---|---|
| **Data Classification** | Confidential |
| **Handling Restriction** | Restricted to IAM Manager, CISO, Internal Audit, and authorized investigators |
| **Regulatory Sensitivity** | High — subject to BNM RMiT and PDPA obligations |
| **Personal Data Indicator** | [Yes / No — specify if logs contain personal data as defined under PDPA 2010] |

### 3.2 Privileged Activity Categories

| Category Code | Category Name | Description | Example Activities |
|---|---|---|---|
| PAL-01 | Operating System Administration | Privileged actions at the OS level | User creation, sudo/root execution, service restarts |
| PAL-02 | Database Administration | Privileged database commands | Schema changes, bulk data export, user privilege grants |
| PAL-03 | Network and Security Device Management | Changes to network or security infrastructure | Firewall rule changes, ACL modifications, VPN config |
| PAL-04 | Identity and Access Management | IAM system changes | Account provisioning/deprovisioning, role assignments, password resets |
| PAL-05 | Application Administration | Privileged application-layer actions | Config changes, deployment actions, batch job execution |
| PAL-06 | Cloud and Virtualisation Administration | Privileged actions in cloud/virtualised environments | VM provisioning, IAM policy changes, storage modifications |
| PAL-07 | Cryptographic Key Management | Actions involving cryptographic material | Key generation, rotation, revocation, export |
| PAL-08 | Audit and Log Management | Actions on audit and log infrastructure | Log deletion attempts, audit policy changes, log export |

### 3.3 Risk-Based Tiering

| Tier | Description | Review Frequency | Alert Threshold |
|---|---|---|---|
| **Tier 1 — Critical** | Privileged actions on critical systems (e.g., core banking, PAM, AD) | Real-time alerting + daily review | Immediate SIEM alert on occurrence |
| **Tier 2 — High** | Privileged actions on sensitive systems (e.g., production databases, firewalls) | Daily automated review | Alert within 1 hour |
| **Tier 3 — Standard** | Privileged actions on non-critical systems in controlled environments | Weekly automated review | Alert within 24 hours |

---

## 4. Owner and Custodian

*This section identifies the accountable owner and operational custodian responsible for the integrity, availability, and oversight of privileged activity logs. Clear ownership is essential for audit accountability.*

### 4.1 Log Ownership

| Role | Name | Department | Contact |
|---|---|---|---|
| **Log Owner** | IAM Manager | [Department Name] | [Email / Extension] |
| **Log Custodian (Technical)** | [SIEM Administrator / SOC Lead] | [Department Name] | [Email / Extension] |
| **Business Owner** | [CISO / Head of IT Risk] | [Department Name] | [Email / Extension] |
| **Data Protection Officer (PDPA)** | [DPO Name] | [Department Name] | [Email / Extension] |

### 4.2 Custodian Responsibilities

The **IAM Manager** (Owner) is responsible for:

- Ensuring privileged activity logs are complete, accurate, and tamper-evident
- Overseeing quarterly log reviews in alignment with RMiT Clause 10.56
- Escalating anomalous findings to the CISO and relevant stakeholders
- Approving exceptions or access requests to historical log data

The **Technical Custodian** is responsible for:

- Day-to-day operational integrity of log collection pipelines and SIEM ingestion
- Implementing and maintaining log integrity controls (e.g., cryptographic hashing, immutable storage)
- Ensuring log availability and retrievability within defined SLAs
- Notifying the Owner of any log collection failures or gaps

### 4.3 Access to Log Data

| Access Level | Authorized Roles | Approval Required |
|---|---|---|
| **Read — Operational Review** | SOC Analyst, IAM Manager | No — standard role-based access |
| **Read — Forensic / Investigation** | Internal Audit, CISO, Incident Response Team | IAM Manager approval required |
| **Read — Regulatory / External Audit** | BNM Examiners, External Auditors | CISO and Legal approval required |
| **Administrative — Log Management** | SIEM Administrator | IAM Manager + CISO approval required |

---

## 5. Status and Lifecycle Stage

*This section documents the operational status and lifecycle of the privileged activity logging infrastructure and retained log data. It ensures log continuity obligations under RMiT are tracked and enforced.*

### 5.1 Current Operational Status

| Component | Status | Notes |
|---|---|---|
| Log collection pipeline | [Active / Degraded / Inactive] | [e.g., All sources reporting normally] |
| SIEM ingestion | [Active / Degraded / Inactive] | [e.g., Ingestion lag within acceptable thresholds] |
| Log integrity controls | [Active / Degraded / Inactive] | [e.g., SHA-256 hashing applied at ingestion] |
| Long-term retention storage | [Active / Degraded / Inactive] | [e.g., 3-year cold storage tier active] |
| Alerting and monitoring rules | [Active / Degraded / Inactive] | [e.g., SIEM detection rules last tuned: DD-MMM-YYYY] |

### 5.2 Retention Lifecycle

| Lifecycle Stage | Duration | Storage Tier | Access | Action at Stage End |
|---|---|---|---|---|
| **Hot / Active** | 0–90 days | Online SIEM storage | Full operational access | Transition to warm storage |
| **Warm / Searchable** | 91 days – 1 year | Near-line indexed storage | IAM Manager / Audit access | Transition to cold storage |
| **Cold / Archival** | 1 year – 3 years | Immutable cold storage | Restricted — approval required | Secure destruction |
| **Destruction** | At 3-year mark | N/A | Authorized personnel only | Documented destruction with Certificate of Destruction |

> **Note:** Retention periods commence from the **date of log generation**. No logs may be destroyed prior to the three-year minimum retention period mandated under RMiT Clause 10.56 without written approval from the CISO and Legal Counsel.

### 5.3 Known Gaps and Exceptions

*Document any known gaps in log coverage or approved exceptions below. All exceptions must be risk-accepted and time-bound.*

| Gap / Exception ID | Description | Affected Systems | Risk Acceptance Date | Remediation Target Date | Approved By |
|---|---|---|---|---|---|
| [GAP-001] | [e.g., Legacy system unable to forward logs to SIEM] | [System Name] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [Name / Role] |

---

## 6. Last Review Date

*This section records the history of log reviews conducted against this artifact and its underlying data. Quarterly reviews are mandatory under [Organization Name]'s RMiT compliance programme.*

### 6.1 Review Schedule

| Review Type | Frequency | Responsible Party | Next Scheduled Date |
|---|---|---|---|
| Automated integrity check | Continuous (daily) | SIEM Administrator | Ongoing |
| Operational log health review | Monthly | SOC Lead / IAM Manager | [DD-MMM-YYYY] |
| Privileged access anomaly review | Quarterly | IAM Manager + Internal Audit | [DD-MMM-YYYY] |
| Retention compliance audit | Annual | Internal Audit | [DD-MMM-YYYY] |
| Regulatory review (BNM RMiT) | As required / biennial | CISO + Compliance | [DD-MMM-YYYY] |

### 6.2 Review History

| Review Date | Review Type | Conducted By | Findings Summary | Action Items | Status |
|---|---|---|---|---|---|
| [DD-MMM-YYYY] | [e.g., Quarterly Anomaly Review] | [Name / Role] | [e.g., No anomalies detected] | [e.g., None] | [Closed / Open] |
| [DD-MMM-YYYY] | [e.g., Retention Compliance Audit] | [Name / Role] | [e.g., 2 legacy systems identified with log gaps] | [e.g., Raised GAP-001, remediation in progress] | [Open] |
| [DD-MMM-YYYY] | [e.g., Operational Health Review] | [Name / Role] | [e.g., Log ingestion lag observed on SRC-002] | [e.g., SIEM pipeline tuned] | [Closed] |

### 6.3 Open Action Items

| Action ID | Description | Owner | Due Date | Priority | Status |
|---|---|---|---|---|---|
| [ACT-001] | [Description of open remediation item] | [Name / Role] | [DD-MMM-YYYY] | [High / Medium / Low] | [In Progress / Not Started] |

---

## 7. Roles and Responsibilities

*This RACI table defines accountability for key activities related to privileged activity log management. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IAM Manager | SIEM Administrator | SOC Analyst | CISO | Internal Audit | IT Risk Manager | Legal / Compliance |
|---|---|---|---|---|---|---|---|
| Define privileged account scope for logging | A/R | C | I | C | I | C | I |
| Configure and maintain log collection | C | A/R | I | I | I | I | I |
| Monitor log pipeline health (continuous) | I | A/R | R | I | I | I | I |
| Review anomalous privileged activity | A/R | C | R | C | I | C | I |
| Conduct quarterly log review | A/R | C | C | I | R | C | I |
| Investigate detected incidents | C | C | R | A | I | I | I |
| Approve access to historical logs | A/R | I | I | C | I | I | C |
| Manage log retention and archival | A | R | I | I | I | I | I |
| Execute log destruction at end of retention | A | R | I | C | I | I | C |
| Report compliance status to BNM | I | I | I | A/R | C | C | C |
| Maintain this document | A/R | I | I | C | I | I | I |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name] | Initial document creation |
| [1.1] | [DD-MMM-YYYY] | [Author Name] | [Description of changes] |

### 8.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager | [Name] | [Signature] | [DD-MMM-YYYY] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [DD-MMM-YYYY] |
| Head of IT Risk | [Name] | [Signature] | [DD-MMM-YYYY] |
| Internal Audit Representative | [Name] | [Signature] | [DD-MMM-YYYY] |
| Chief Compliance Officer | [Name] | [Signature] | [DD-MMM-YYYY] |

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.56 | Mandatory retention of privileged activity logs for a minimum of three years |
| BNM RMiT | Clauses 10.51–10.55 | Access control and privileged account management requirements |
| BNM RMiT | Clause 10.53–10.57 | Log review, alerting, and monitoring requirements |
| PDPA 2010 | Section 5 (General Principles) | Data handling obligations for logs containing personal data |
| PDPA 2010 | Section 40 | Security obligations for stored personal data |
| [Organization Name] | Information Security Policy v[X.X] | Internal policy governing log management and privileged access |
| [Organization Name] | Access Control Policy v[X.X] | Privileged account lifecycle management procedures |
| [Organization Name] | Incident Response Plan v[X.X] | Procedures for log-based incident investigation |
| ISO/IEC 27002:2022 | Control 8.15 | Logging and monitoring guidance |
| NACSA | [Relevant Guideline / Clause] | [If applicable — national cybersecurity requirements] |

---

## Appendices

### Appendix A — Privileged Account Definition

*List all account types that qualify as "privileged" within [Organization Name]'s environment for the purposes of this log framework.*

- [ ] Local administrator accounts on servers and endpoints
- [ ] Domain administrator accounts (Active Directory / LDAP)
- [ ] Database administrator (DBA) accounts
- [ ] Network device administrator accounts (routers, firewalls, switches)
- [ ] Cloud IAM roles with administrative or owner permissions
- [ ] Service accounts with elevated permissions
- [ ] Emergency / break-glass accounts
- [ ] Third-party vendor accounts with privileged access
- [ ] PAM solution administrator accounts
- [ ] Cryptographic key management accounts

---

### Appendix B — SIEM Alert Rules for Privileged Activity

*Reference to SIEM use cases and detection rules configured to monitor privileged activity in near real-time.*

| Rule ID | Rule Name | Trigger Condition | Severity | Response Playbook |
|---|---|---|---|---|
| [SIEM-PAL-001] | [e.g., After-Hours Privileged Login] | [Privileged account login outside business hours] | [High] | [Playbook Ref] |
| [SIEM-PAL-002] | [e.g., Audit Log Cleared] | [Windows Event ID 1102 / Linux auditd log cleared] | [Critical] | [Playbook Ref] |
| [SIEM-PAL-003] | [e.g., Bulk Data Export by DBA] | [DB export > threshold rows by privileged account] | [High] | [Playbook Ref] |
| [SIEM-PAL-004] | [e.g., New Privileged Account Created] | [Account creation in privileged group without ticket reference] | [Medium] | [Playbook Ref] |
| [SIEM-PAL-005] | [e.g., Firewall Rule Modified] | [Any change to production firewall ACL by privileged user] | [High] | [Playbook Ref] |

---

### Appendix C — Log Integrity Controls

*Describes the technical controls in place to ensure privileged activity logs are tamper-evident and trustworthy for audit and forensic purposes.*

| Control | Description | Implementation | Responsible Party |
|---|---|---|---|
| Cryptographic hashing | SHA-256 hash applied to each log entry at ingestion | [Tool / SIEM feature] | SIEM Administrator |
| Immutable storage | Archival logs stored in write-once storage | [S3 Object Lock / WORM storage] | SIEM Administrator |
| Chain of custody | Access to log data logged separately in access audit trail | [Access log system] | IAM Manager |
| Log source authentication | Log forwarders authenticated via TLS certificates | [Certificate management tool] | SIEM Administrator |
| Out-of-band backup | Log backup stored independently of primary infrastructure | [Backup platform] | SIEM Administrator |

---

### Appendix D — Certificate of Destruction Template

*To be completed when privileged activity logs are destroyed upon expiry of the three-year mandatory retention period.*

| Field | Details |
|---|---|
| **Log Batch Reference** | [Log Batch ID / Date Range] |
| **Systems Covered** | [List of source systems] |
| **Date of Destruction** | [DD-MMM-YYYY] |
| **Destruction Method** | [e.g., Secure cryptographic erasure / Physical destruction] |
| **Authorized By** | [IAM Manager Name + CISO Name] |
| **Witnessed By** | [Name / Role] |
| **Confirmation** | I confirm that the above log data has been irreversibly destroyed in accordance with [Organization Name]'s retention policy and BNM RMiT Clause 10.56. |
| **Signature** | [Signature] |
| **Date** | [DD-MMM-YYYY] |

---

*This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. For queries, contact the IAM Manager at [Contact Details].*