# Remote Access Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the framework, structure, and governance requirements for the collection, retention, monitoring, and review of Remote Access Logs within [Organization Name]. These logs serve as a critical detective control, providing a continuous and auditable record of all remote access sessions to [Organization Name]'s systems, infrastructure, and data assets.

This template supports compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.41**, which mandates the logging and monitoring of remote access activities to protect the confidentiality, integrity, and availability of technology assets and sensitive information.

### 1.2 Scope

This artifact applies to:

- All remote access sessions initiated by internal staff, contractors, third-party vendors, and managed service providers accessing [Organization Name]'s IT environment from outside the corporate network perimeter.
- All systems, applications, databases, and infrastructure components accessible via remote access technologies, including but not limited to VPN, Remote Desktop Protocol (RDP), SSH, jump servers, and privileged access workstations (PAWs).
- All business units and technology functions within [Organization Name], including outsourced and offshored technology operations where remote connectivity is established.

*This scope excludes internally-initiated sessions conducted entirely within the secured corporate network perimeter unless those sessions traverse a privileged access management (PAM) gateway.*

---

## 2. Regulatory and Policy Alignment

*This section maps the artifact to the applicable regulatory requirements. Reference the specific clauses that necessitate this log type and confirm that the logging configuration meets or exceeds the minimum requirements prescribed.*

| Regulatory Reference | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | 10.41 | Financial institutions shall ensure remote access activities are logged and monitored, with adequate controls to detect and respond to unauthorised or anomalous access. |
| BNM RMiT | [Additional Clause] | [Summary of additional applicable requirement] |
| Personal Data Protection Act 2010 (PDPA) | [Applicable Section] | [Summary of data protection obligations relevant to log data handling] |
| [Organization Name] Information Security Policy | [Internal Policy Reference] | [Internal policy requirement for log management and access monitoring] |
| [Organization Name] Remote Access Policy | [Internal Policy Reference] | [Internal controls governing permissible remote access and session parameters] |

---

## 3. Asset / Item Identification

*This section captures the identification details of the logging system and the assets subject to remote access monitoring. Populate each field to ensure complete traceability of this artifact to its source systems and the technology assets it covers.*

### 3.1 Log System Identification

| Field | Details |
|---|---|
| **Log Source System** | [e.g., VPN Gateway, PAM Platform, SIEM, Jump Server] |
| **System / Platform Name** | [Name of the logging platform, e.g., CyberArk, Cisco ASA, Palo Alto GlobalProtect] |
| **Log Repository** | [e.g., Wazuh Indexer, Splunk, Azure Sentinel, local syslog server] |
| **Log Format** | [e.g., CEF, JSON, Syslog RFC 5424] |
| **Log Ingestion Method** | [e.g., Syslog forwarding, API pull, agent-based collection] |
| **Timestamp Standardization** | [e.g., UTC+8 (MYT), synchronized via NTP] |
| **Unique Log Stream ID** | [LOG-RA-[SYSTEM]-[YEAR]] |

### 3.2 Assets Subject to Remote Access Monitoring

*List all technology assets, systems, and network segments that are accessible via remote access and for which logs are generated. This should align with the organization's technology asset inventory.*

| Asset ID | Asset Name / Description | Asset Type | Hosting Environment | Criticality |
|---|---|---|---|---|
| [ASSET-001] | [e.g., Core Banking Application Server] | [Server / Application / Database] | [On-premises / Cloud / Hybrid] | [Critical / High / Medium / Low] |
| [ASSET-002] | [e.g., HR Management System] | [Server / Application / Database] | [On-premises / Cloud / Hybrid] | [Critical / High / Medium / Low] |
| [ASSET-003] | [e.g., Network Management Infrastructure] | [Network Device] | [On-premises] | [Critical / High / Medium / Low] |
| [ASSET-004] | [e.g., Cloud Administration Console] | [Cloud Service] | [Cloud] | [Critical / High / Medium / Low] |
| [Add rows as required] | | | | |

---

## 4. Classification and Categorisation

*This section defines the sensitivity classification of the log data and categorises the types of remote access events captured. Correct classification ensures appropriate handling, access controls, and retention treatment are applied to the log data itself.*

### 4.1 Log Data Classification

| Field | Details |
|---|---|
| **Data Classification** | Confidential |
| **Handling Requirements** | Restricted to authorized Security Operations, IT Operations, and Audit personnel. Not to be shared externally without written approval from [Approved By]. |
| **Encryption Requirement** | Logs must be encrypted at rest (AES-256 or equivalent) and in transit (TLS 1.2 minimum). |
| **Integrity Controls** | Log integrity must be preserved via write-once storage, cryptographic hashing, or equivalent tamper-evident mechanism. |

### 4.2 Remote Access Session Categories

*Categorise the types of remote access sessions logged. Each category may have different risk profiles and monitoring thresholds.*

| Category Code | Session Category | Description | Risk Level | Monitoring Priority |
|---|---|---|---|---|
| RA-CAT-01 | Privileged Administrative Access | Sessions by administrators accessing privileged accounts or root-level system access | Critical | High — real-time alerting |
| RA-CAT-02 | Third-Party / Vendor Access | Sessions initiated by external vendors, managed service providers, or contractors | High | High — session recording required |
| RA-CAT-03 | Standard Staff Remote Access | Regular employees accessing business applications via VPN | Medium | Standard — log retention and periodic review |
| RA-CAT-04 | Emergency / Break-Glass Access | Sessions utilising emergency access credentials outside normal workflow | Critical | High — immediate notification and review |
| RA-CAT-05 | API / Service Account Remote Access | Automated remote connections by service accounts or integration processes | Medium | Standard — anomaly detection |
| [RA-CAT-XX] | [Additional Category] | [Description] | [Risk Level] | [Monitoring Priority] |

### 4.3 Log Event Types Captured

- Session initiation (successful and failed authentication attempts)
- Session termination (normal logout and abnormal disconnection)
- Multi-factor authentication (MFA) events — success, failure, bypass
- Privileged command execution during remote session (where PAM session recording is enabled)
- File transfers initiated during remote session
- Concurrent session detection events
- Session duration outliers exceeding defined thresholds
- Geographic or IP-based anomalies (access from unusual locations or blacklisted IPs)
- Account lockout events triggered during remote access attempts
- Protocol and port scanning attempts against remote access gateways

---

## 5. Owner and Custodian

*This section formally assigns accountability and operational responsibility for the Remote Access Logs. Clear ownership is required to ensure that logs are maintained, monitored, and available for audit and investigation purposes.*

### 5.1 Ownership Details

| Role | Name / Position | Department | Contact |
|---|---|---|---|
| **Primary Owner** | IT Operations Manager | IT Operations | [Email / Extension] |
| **Secondary Owner** | Chief Information Security Officer (CISO) | Information Security | [Email / Extension] |
| **Operational Custodian** | Security Operations Centre (SOC) Lead | SOC / IT Security | [Email / Extension] |
| **Data Custodian (Log Repository)** | [System Administrator / Platform Owner] | IT Infrastructure | [Email / Extension] |
| **Compliance Oversight** | Head of Compliance | Compliance & Risk | [Email / Extension] |

### 5.2 Third-Party Custodian (if applicable)

*Complete this section if log collection, storage, or monitoring functions are outsourced to a managed security service provider (MSSP) or cloud provider.*

| Field | Details |
|---|---|
| **Third-Party Provider Name** | [MSSP / Cloud Provider Name] |
| **Service Scope** | [e.g., Log collection, SIEM management, 24/7 monitoring] |
| **Contract / SLA Reference** | [Contract ID / SLA Document Reference] |
| **BNM Outsourcing Notification** | [Yes / No / Pending — reference notification date if applicable] |
| **Data Residency** | [e.g., Malaysia — compliant with BNM data residency requirements] |
| **Security Assessment Last Conducted** | [Date of last vendor security assessment] |

---

## 6. Status and Lifecycle Stage

*This section documents the current operational status of the remote access logging capability and tracks the lifecycle of the log data from generation through to secure disposal.*

### 6.1 Logging Capability Status

| Field | Details |
|---|---|
| **Current Status** | [Active / Under Review / Remediation Required / Decommissioned] |
| **Logging Coverage** | [e.g., 100% of identified remote access vectors / Partial — gaps noted in Appendix A] |
| **Known Gaps or Exceptions** | [None / See Appendix A for approved exceptions] |
| **Last Operational Verification** | [Date] |
| **Next Operational Verification** | [Date] |

### 6.2 Log Data Lifecycle

| Lifecycle Stage | Description | Duration / Trigger | Responsible Party |
|---|---|---|---|
| **Generation** | Logs are automatically generated by source systems upon session events | Continuous / Event-triggered | System (automated) |
| **Collection & Ingestion** | Logs are forwarded to the centralized log repository / SIEM | Real-time / near real-time (≤ 5 min lag) | IT Infrastructure / SOC |
| **Active Monitoring** | SOC analysts monitor logs for anomalies and alerts | Continuous (24/7) | SOC |
| **Retention — Hot Storage** | Logs are readily accessible for operational investigation | [e.g., 90 days] | IT Operations |
| **Retention — Warm / Cold Storage** | Logs are archived for compliance and forensic purposes | [e.g., 91 days to 3 years] | IT Infrastructure |
| **Legal Hold** | Logs are preserved beyond standard retention if subject to investigation or legal proceedings | Until hold is lifted | Legal / Compliance |
| **Secure Disposal** | Logs are securely deleted upon expiry of the retention period using approved data destruction methods | Upon reaching defined retention limit | IT Operations |

### 6.3 Retention Schedule

| Log Category | Minimum Retention Period | Basis for Retention Period | Storage Tier |
|---|---|---|---|
| Privileged and Administrative Access (RA-CAT-01) | 3 years | BNM RMiT Clause 10.41; Internal Policy | Encrypted archive |
| Third-Party / Vendor Access (RA-CAT-02) | 3 years | BNM RMiT; Vendor contract obligations | Encrypted archive |
| Standard Staff Remote Access (RA-CAT-03) | [Minimum 1 year / as per policy] | Internal policy | Hot + warm storage |
| Emergency / Break-Glass Access (RA-CAT-04) | 3 years | Regulatory and audit requirements | Encrypted archive |
| Incident-Related Logs | Duration of incident + [3 years] | Forensic and legal requirements | Segregated secure storage |

---

## 7. Monitoring and Investigation Records

*This section documents the outcomes of continuous monitoring activities and records investigations arising from detected anomalies or security incidents involving remote access. This is the primary operational record produced through the review of remote access logs.*

### 7.1 Continuous Monitoring Configuration

| Monitoring Control | Description | Threshold / Rule | Alert Destination |
|---|---|---|---|
| Failed Authentication Alert | Alert on repeated failed remote access attempts | [e.g., ≥ 5 failures within 10 minutes from a single source] | SOC ticketing system |
| Off-Hours Access Alert | Alert on remote sessions initiated outside business hours | [e.g., Access between 2200–0600 MYT or weekends] | SOC + IT Ops Manager |
| Geographic Anomaly Alert | Alert on access from unexpected geographies or high-risk countries | [e.g., Access from outside Malaysia or approved countries list] | SOC + CISO |
| Concurrent Session Alert | Alert on simultaneous sessions from the same account | [e.g., > 1 concurrent session per user account] | SOC |
| Prolonged Session Alert | Alert on sessions exceeding defined duration thresholds | [e.g., Session duration > 8 hours] | IT Operations |
| Privileged Account Alert | Alert on any privileged account remote session | All events — no threshold | SOC + IT Ops Manager |
| Blacklisted IP Alert | Alert on access attempts from known malicious IP addresses | OSINT / Threat intelligence feed match | SOC (immediate escalation) |

### 7.2 Monitoring Review Log

*This table captures the outcomes of periodic reviews of remote access logs conducted by the SOC and IT Operations team. A new entry should be recorded for each formal review cycle.*

| Review Date | Review Period Covered | Reviewer | Anomalies Detected | Investigations Raised | Findings Summary | Status |
|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Start Date] to [End Date] | [Name / Role] | [Yes / No] | [Ticket / Case Reference or None] | [Brief summary of findings or "No anomalies detected"] | [Closed / Open / Escalated] |
| [YYYY-MM-DD] | [Start Date] to [End Date] | [Name / Role] | [Yes / No] | [Ticket / Case Reference or None] | [Brief summary of findings or "No anomalies detected"] | [Closed / Open / Escalated] |
| [Add rows as required] | | | | | | |

### 7.3 Investigation Record

*Complete a separate investigation record entry for each security event or anomaly arising from remote access log analysis. Link to the full incident report where applicable.*

| Investigation ID | Date Opened | Trigger | Account / User Involved | Asset(s) Affected | Summary of Activity | Investigation Outcome | Date Closed | Incident Report Reference |
|---|---|---|---|---|---|---|---|---|
| [INVEST-RA-001] | [YYYY-MM-DD] | [Alert type / Manual review] | [Username / Account ID] | [Asset ID / Name] | [Brief description of the activity that triggered investigation] | [No breach confirmed / Policy violation / Security incident — see IR report] | [YYYY-MM-DD] | [IR-XXXX / N/A] |
| [INVEST-RA-002] | [YYYY-MM-DD] | [Alert type / Manual review] | [Username / Account ID] | [Asset ID / Name] | [Brief description] | [Outcome] | [YYYY-MM-DD] | [IR-XXXX / N/A] |
| [Add rows as required] | | | | | | | | |

### 7.4 Quarterly Review Summary

*Complete this section at the end of each quarterly review period. This summary is presented to the IT Risk Committee and forms part of the quarterly compliance reporting cycle.*

| Field | Details |
|---|---|
| **Review Quarter** | [Q1 / Q2 / Q3 / Q4] [Year] |
| **Review Period** | [Start Date] to [End Date] |
| **Total Remote Sessions Logged** | [Number] |
| **Total Alerts Generated** | [Number] |
| **Alerts Investigated** | [Number] |
| **Investigations Resulting in Incidents** | [Number] |
| **Policy Exceptions Identified** | [Number — reference Appendix B] |
| **Logging Coverage Assessment** | [Full coverage confirmed / Gaps identified — see Appendix A] |
| **Key Findings** | [Summary of significant findings or trends observed during the quarter] |
| **Recommended Actions** | [Actions arising from the quarterly review, with owners and target dates] |
| **Review Conducted By** | [Name], [Role] |
| **Review Approved By** | [Name], [Role] |

---

## 8. Last Review Date

*This section records the formal review dates for this artifact and its associated logging configuration, ensuring the currency and accuracy of the remote access monitoring controls.*

| Review Type | Last Review Date | Reviewed By | Next Scheduled Review | Review Outcome |
|---|---|---|---|---|
| Continuous Monitoring Rules Review | [YYYY-MM-DD] | [Name / SOC Lead] | [YYYY-MM-DD] | [Rules confirmed adequate / Updated — see change log] |
| Log Coverage Assessment | [YYYY-MM-DD] | [Name / IT Operations Manager] | [YYYY-MM-DD] | [Full coverage / Gaps noted in Appendix A] |
| Retention Configuration Review | [YYYY-MM-DD] | [Name / Data Custodian] | [YYYY-MM-DD] | [Retention settings confirmed / Updated] |
| Quarterly Compliance Review | [YYYY-MM-DD] | [Name / Compliance] | [YYYY-MM-DD] | [Compliant / Actions raised] |
| Annual Policy Alignment Review | [YYYY-MM-DD] | [Name / CISO] | [YYYY-MM-DD] | [No changes required / Policy updated] |
| Third-Party Vendor Assessment | [YYYY-MM-DD] | [Name / IT Operations] | [YYYY-MM-DD] | [Satisfactory / Remediation required] |

---

## 9. Roles and Responsibilities

*This section defines accountability using a RACI model (Responsible, Accountable, Consulted, Informed) for all activities related to Remote Access Log management and monitoring.*

| Activity | IT Operations Manager | SOC Lead / Analyst | CISO | System / Data Custodian | Internal Audit | Compliance | Legal |
|---|---|---|---|---|---|---|---|
| Define logging requirements and configuration | A | R | C | R | I | C | — |
| Operate and maintain logging infrastructure | A | C | I | R | — | — | — |
| Continuous real-time monitoring of alerts | I | R | I | — | — | — | — |
| Investigate anomalies and security alerts | C | R | I | C | — | I | — |
| Conduct quarterly log review | A | R | I | C | C | I | — |
| Maintain and update alert thresholds and rules | A | R | C | C | — | I | — |
| Manage log retention and archival | A | I | I | R | — | C | C |
| Approve and manage log access permissions | A | C | C | R | I | I | — |
| Escalate confirmed security incidents | I | R | A | — | I | I | C |
| Produce quarterly review reports | A | R | C | — | C | C | — |
| Present findings to IT Risk Committee | R | C | C | — | I | C | — |
| Manage third-party logging vendors | A | C | C | R | — | C | — |
| Ensure regulatory compliance of logging controls | C | C | R | C | C | A | — |
| Conduct annual policy alignment review | C | C | A | C | C | R | — |
| Approve exceptions to logging requirements | A | — | R | — | C | C | — |

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name], [Role] | Initial document creation |
| [1.1] | [YYYY-MM-DD] | [Author Name], [Role] | [Description of changes] |
| [2.0] | [YYYY-MM-DD] | [Author Name], [Role] | [Description of major revision] |

### 10.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Name] | [Signature] | [YYYY-MM-DD] |
| Chief Information Security Officer | [Name] | [Signature] | [YYYY-MM-DD] |
| Head of Compliance | [Name] | [Signature] | [YYYY-MM-DD] |
| Chief Technology Officer / CIO | [Name] | [Signature] | [YYYY-MM-DD] |

---

## 11. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.41 | Remote access logging and monitoring requirements for financial institutions |
| BNM RMiT | [Additional Clause] | [Description] |
| Personal Data Protection Act 2010 | [Section] | Obligations relevant to the handling and retention of log data containing personal data |
| NACSA Cyber Security Framework | [Section] | National cyber security baseline requirements applicable to critical sector entities |
| ISO/IEC 27001:2022 | A.8.15 (Logging) | Information security logging controls |
| ISO/IEC 27001:2022 | A.8.16 (Monitoring Activities) | System monitoring requirements |
| NIST SP 800-46 Rev. 2 | Section 3 | Guide to enterprise telework, remote access, and bring-your-own-device (BYOD) security |
| [Organization Name] Information Security Policy | [Internal Ref.] | Internal information security governance requirements |
| [Organization Name] Remote Access Policy | [Internal Ref.] | Internal policy governing permissible remote access methods and controls |
| [Organization Name] Incident Response Plan | [Internal Ref.] | Escalation and response procedures for security incidents identified via log monitoring |
| [Organization Name] Log Management Standard | [Internal Ref.] | Internal standards for log collection, retention, and disposal |

---

## 12. Appendices

### Appendix A — Logging Coverage Gaps and Remediation Register

*List any identified gaps in remote access logging coverage, the associated risk, and the remediation plan. All gaps must be formally accepted by the IT Operations Manager and CISO. Unmitigated gaps in critical systems must be escalated to the IT Risk Committee.*

| Gap ID | Affected System / Asset | Gap Description | Risk Rating | Remediation Action | Target Date | Responsible Owner | Status |
|---|---|---|---|---|---|---|---|
| [GAP-RA-001] | [System / Asset Name] | [Description of what is not being logged or monitored] | [Critical / High / Medium / Low] | [Planned remediation steps] | [YYYY-MM-DD] | [Name / Role] | [Open / In Progress / Closed] |
| [Add rows as required] | | | | | | | |

---

### Appendix B — Approved Exceptions Register

*Any approved deviation from the standard remote access logging requirements must be documented here with formal risk acceptance. Exceptions must be reviewed at least annually or upon a significant change event.*

| Exception ID | Requestor | Asset / Scope | Exception Description | Justification | Risk Rating | Risk Accepted By | Approval Date | Expiry Date | Review Date |
|---|---|---|---|---|---|---|---|---|---|
| [EXC-RA-001] | [Name / Business Unit] | [System / Scope of exception] | [What requirement is being excepted] | [Business or technical justification] | [Critical / High / Medium / Low] | [Name / Role] | [YYYY-MM-DD] | [YYYY-MM-DD] | [YYYY-MM-DD] |
| [Add rows as required] | | | | | | | | | |

---

### Appendix C — Remote Access Log Field Reference

*This appendix defines the minimum required fields that must be captured in every remote access log entry. System administrators should verify that the logging configuration for each source system captures at minimum these fields.*

| Field Name | Description | Format | Mandatory |
|---|---|---|---|
| Timestamp | Date and time of the session event | ISO 8601 (YYYY-MM-DDTHH:MM:SSZ) in MYT (UTC+8) | Yes |
| Event Type | Type of event (e.g., Session Start, Session End, Auth Failure) | Enumerated value | Yes |
| User Account | Username or account identifier of the remote user | String | Yes |
| Source IP Address | IP address of the remote client | IPv4 / IPv6 | Yes |
| Destination IP / Asset | IP address or hostname of the system accessed | String | Yes |
| Access Method / Protocol | Protocol used (e.g., VPN, RDP, SSH, HTTPS) | String | Yes |
| Authentication Method | Method used (e.g., Password + MFA, Certificate, SSO) | String | Yes |
| Authentication Result | Outcome of authentication attempt | Success / Failure / Lockout | Yes |
| Session ID | Unique identifier for the session | UUID / System-generated | Yes |
| Session Duration | Length of the session (for completed sessions) | HH:MM:SS | Yes (on termination) |
| MFA Event | MFA challenge result | Success / Failure / Bypassed | Yes (where MFA is enforced) |
| Geographic Location | Geolocation derived from source IP | Country / City | Recommended |
| Device / Endpoint ID | Identifier of the connecting device (where available) | String / MAC / Device cert CN | Recommended |
| Session Recording Reference | Reference to session recording file (for PAM-controlled sessions) | File path / Storage reference | Yes (RA-CAT-01 and RA-CAT-02) |
| Alert Triggered | Whether the session triggered a monitoring alert | Yes / No — Alert ID if yes | Yes |

---

### Appendix D — Escalation and Notification Matrix

*This appendix defines the escalation path and notification requirements for alerts and incidents identified through remote access log monitoring.*

| Severity Level | Trigger Example | Initial Response Time | Escalation Path | Notification Recipients |
|---|---|---|---|---|
| **Critical** | Privileged account access from blacklisted IP; Break-glass account used | Immediate (< 15 minutes) | SOC → CISO → IT Ops Manager → CEO / Board Risk Committee (if material) | CISO, IT Ops Manager, Head of Compliance, Legal |
| **High** | Multiple failed authentications on privileged account; Off-hours vendor access | < 1 hour | SOC → IT Ops Manager → CISO | CISO, IT Ops Manager |
| **Medium** | Prolonged session exceeding threshold; Geographic anomaly | < 4 hours | SOC → IT Ops Manager | IT Ops Manager |
| **Low** | Single failed authentication; Minor session anomaly | Next business day | SOC Review | SOC log — no immediate escalation |
| **Informational** | Standard session initiation / termination | No action required | — | — |

---

*Document end. All sections marked with [Placeholder Text] must be completed prior to submission for approval. Completed documents must be stored in [Document Management System / Repository Path] and access restricted to authorized personnel in accordance with the Data Classification indicated on the cover page.*