# Certificate Monitoring Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

## 1. Purpose and Scope

*This section defines the purpose of this document and the boundaries of its applicability within the organization.*

This document establishes the framework and structure for maintaining **Certificate Monitoring Logs** at [Organization Name]. These logs capture all events related to digital certificate lifecycle management, including certificate transparency (CT) log monitoring, expiry alerts, issuance events, revocation notices, and anomaly detections.

This artifact supports compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically:

- **Clause 10.23** — Requirements pertaining to the management and monitoring of cryptographic keys and digital certificates used to protect technology assets and communications.

**Scope of this document includes:**

- All digital certificates managed by or on behalf of [Organization Name], including TLS/SSL certificates, code-signing certificates, client authentication certificates, and internal CA-issued certificates.
- Certificate monitoring systems and tooling deployed within [Organization Name]'s technology environment.
- Third-party and vendor-managed certificates where [Organization Name] bears regulatory accountability.
- Certificate transparency log feeds subscribed to by [Organization Name].

**Out of Scope:**

- Certificates managed entirely by third parties without accountability mapping to [Organization Name].
- Non-cryptographic identity credentials (e.g., passwords, API keys managed under separate policy).

---

## 2. Asset/Item Identification

*This section records the identification details of each digital certificate or certificate-related asset captured within the monitoring log. Each entry must be uniquely identifiable and traceable to a specific system or service.*

### 2.1 Certificate Inventory Log

| Log Entry ID | Certificate Common Name (CN) | Certificate Serial Number | Issuing CA | System / Service Name | Environment | Hostname / FQDN | Date First Observed |
|---|---|---|---|---|---|---|---|
| [LOG-CERT-001] | [e.g., *.organization.com.my] | [Serial Number] | [CA Name] | [e.g., Internet Banking Portal] | [Production / UAT / DR] | [hostname.organization.com.my] | [YYYY-MM-DD] |
| [LOG-CERT-002] | | | | | | | |
| [LOG-CERT-003] | | | | | | | |

### 2.2 Certificate Transparency (CT) Log Monitoring Events

*Record all events detected through subscribed Certificate Transparency log feeds. This includes newly issued certificates observed for monitored domains and any unexpected issuances.*

| Event ID | Detection Timestamp | CT Log Source | Domain Monitored | Certificate CN Detected | Issuing CA | Expected / Unexpected | Action Taken | Resolved By |
|---|---|---|---|---|---|---|---|---|
| [CT-EVT-001] | [YYYY-MM-DD HH:MM:SS] | [e.g., Google Argon, Cloudflare Nimbus] | [monitored-domain.com.my] | [detected CN] | [CA Name] | [Expected / Unexpected] | [e.g., No action / Escalated] | [Name / Team] |
| [CT-EVT-002] | | | | | | | | |

---

## 3. Classification and Categorisation

*This section defines the classification of each certificate and categorises it by type, trust level, and criticality to support prioritised monitoring and response.*

### 3.1 Certificate Type Classification

| Certificate ID | Certificate Type | Trust Level | Business Criticality | Data Sensitivity | Regulatory Relevance |
|---|---|---|---|---|---|
| [LOG-CERT-001] | [TLS/SSL / Code Signing / Client Auth / Internal CA] | [Public Trust / Private Trust] | [Critical / High / Medium / Low] | [Confidential / Restricted / Internal / Public] | [RMiT Clause 10.23 / PDPA / Other] |
| [LOG-CERT-002] | | | | | |

### 3.2 Categorisation Definitions

*Use the following categories consistently across all log entries to ensure uniform classification.*

| Category | Definition |
|---|---|
| **Critical** | Certificate protects customer-facing financial transactions, authentication systems, or regulatory reporting channels. Failure or compromise has immediate operational and compliance impact. |
| **High** | Certificate protects internal systems with sensitive data or administrative access. Failure causes significant disruption but does not immediately expose customer data. |
| **Medium** | Certificate used for internal services with limited external exposure. Failure causes moderate disruption. |
| **Low** | Certificate used for non-sensitive internal purposes. Failure has minimal operational impact. |

---

## 4. Owner and Custodian

*This section identifies the accountable owner and technical custodian for each monitored certificate. Ownership must be assigned to a named individual or role, not a shared mailbox or team alias alone.*

### 4.1 Certificate Ownership Register

| Certificate ID | Certificate Common Name | Business Owner | Business Owner Contact | Technical Custodian | Custodian Contact | Vendor / Third Party (if applicable) | Escalation Contact |
|---|---|---|---|---|---|---|---|
| [LOG-CERT-001] | [CN] | [Name, Designation] | [email@organization.com.my] | [Name, Designation] | [email@organization.com.my] | [Vendor Name / N/A] | [Name, Designation] |
| [LOG-CERT-002] | | | | | | | |

### 4.2 Ownership Escalation Matrix

*Define escalation paths for unresolved certificate events or ownership disputes.*

| Escalation Level | Role | Contact | Trigger Condition |
|---|---|---|---|
| Level 1 | Technical Custodian | [Contact] | Certificate event detected; initial triage required |
| Level 2 | IT Operations Manager | [Contact] | Event unresolved within [X] hours; expiry within [Y] days |
| Level 3 | Chief Information Security Officer (CISO) | [Contact] | Confirmed unauthorized certificate issuance; critical certificate expiry imminent |
| Level 4 | Chief Information Officer (CIO) / Management | [Contact] | Regulatory breach risk; service outage due to certificate failure |

---

## 5. Status and Lifecycle Stage

*This section tracks the current operational status and lifecycle position of each monitored certificate. All status changes must be logged with timestamps and the identity of the individual making the change.*

### 5.1 Certificate Status Log

| Certificate ID | Certificate CN | Valid From | Valid To | Days to Expiry | Current Status | Lifecycle Stage | Last Status Change | Changed By |
|---|---|---|---|---|---|---|---|---|
| [LOG-CERT-001] | [CN] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Auto-calculated] | [Active / Expiring Soon / Expired / Revoked / Renewed / Pending] | [Issued / Active / Renewal Initiated / Revoked / Archived] | [YYYY-MM-DD HH:MM] | [Name] |
| [LOG-CERT-002] | | | | | | | | |

### 5.2 Status Definitions

| Status | Definition | Required Action |
|---|---|---|
| **Active** | Certificate is valid and in operational use | Continue scheduled monitoring |
| **Expiring Soon** | Certificate expires within [90 / 60 / 30] days | Initiate renewal process; notify custodian |
| **Expired** | Certificate validity period has lapsed | Immediate renewal or decommission; assess service impact |
| **Revoked** | Certificate has been revoked by issuing CA | Remove from service immediately; investigate cause |
| **Renewal Initiated** | Renewal request submitted; awaiting new certificate | Track progress; ensure completion before expiry |
| **Pending** | Certificate issuance or deployment in progress | Confirm deployment before marking Active |
| **Archived** | Certificate decommissioned; retained for audit purposes | Retain per records management policy |

### 5.3 Expiry Alert Event Log

*Record all automated expiry alert events generated by the certificate monitoring system.*

| Alert ID | Alert Timestamp | Certificate ID | Certificate CN | Days to Expiry at Alert | Alert Threshold Triggered | Notified Parties | Acknowledgement Timestamp | Acknowledged By | Renewal Status |
|---|---|---|---|---|---|---|---|---|---|
| [ALERT-001] | [YYYY-MM-DD HH:MM:SS] | [LOG-CERT-001] | [CN] | [e.g., 60] | [90-day / 60-day / 30-day / 14-day / 7-day] | [Name / Distribution List] | [YYYY-MM-DD HH:MM:SS] | [Name] | [Not Started / In Progress / Completed] |
| [ALERT-002] | | | | | | | | | |

### 5.4 Certificate Revocation and Incident Log

*Document all revocation events, whether initiated internally or detected externally via CT log monitoring or CA notifications.*

| Incident ID | Detection Date | Certificate ID | Certificate CN | Revocation Date | Revocation Reason | Detected Via | Impact Assessment | Remediation Action | Closed Date |
|---|---|---|---|---|---|---|---|---|---|
| [CRT-INC-001] | [YYYY-MM-DD] | [LOG-CERT-001] | [CN] | [YYYY-MM-DD] | [Key Compromise / CA Compromise / Affiliation Changed / Superseded / Cessation of Operation / Privilege Withdrawn] | [CT Log / CA Notification / Internal Discovery / Third-Party Report] | [Description of impact] | [Action taken] | [YYYY-MM-DD] |

---

## 6. Last Review Date

*This section records the outcomes of scheduled and ad hoc reviews of the Certificate Monitoring Logs, confirming that all entries are accurate, ownership is current, and monitoring controls are functioning effectively.*

### 6.1 Quarterly Review Record

*Certificate Monitoring Logs are subject to continuous automated monitoring and a formal quarterly review. Each quarterly review must be documented below.*

| Review ID | Review Period | Review Date | Reviewed By | Review Type | Total Certificates Reviewed | Anomalies Identified | Actions Raised | Review Outcome | Next Review Date |
|---|---|---|---|---|---|---|---|---|---|
| [QR-2025-Q1] | [Jan – Mar 2025] | [YYYY-MM-DD] | [Name, Designation] | [Quarterly Scheduled] | [Number] | [Number] | [Number] | [Satisfactory / Requires Remediation] | [YYYY-MM-DD] |
| [QR-2025-Q2] | [Apr – Jun 2025] | | | | | | | | |
| [QR-2025-Q3] | [Jul – Sep 2025] | | | | | | | | |
| [QR-2025-Q4] | [Oct – Dec 2025] | | | | | | | | |

### 6.2 Review Findings and Action Tracker

| Finding ID | Review ID | Finding Description | Severity | Assigned To | Target Resolution Date | Resolution Status | Resolved Date | Evidence Reference |
|---|---|---|---|---|---|---|---|---|
| [FIND-001] | [QR-2025-Q1] | [Description of finding] | [Critical / High / Medium / Low] | [Name] | [YYYY-MM-DD] | [Open / In Progress / Closed] | [YYYY-MM-DD] | [Reference] |
| [FIND-002] | | | | | | | | |

---

## 7. Roles and Responsibilities

*This section defines accountability for the management, maintenance, and review of Certificate Monitoring Logs using a RACI framework.*

**RACI Key:** **R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | IT Operations Manager | System Administrator | Information Security Team | CISO | Internal Audit | Compliance Officer | Vendor / CA |
|---|---|---|---|---|---|---|---|
| Define certificate monitoring scope and thresholds | A | R | C | I | I | C | I |
| Configure and maintain automated monitoring tools | A | R | C | I | — | — | C |
| Monitor CT log feeds and respond to alerts | A | R | R | I | — | I | — |
| Acknowledge and action expiry alerts | A | R | C | I | — | I | — |
| Initiate certificate renewal process | A | R | C | I | — | — | C |
| Investigate and respond to revocation events | A | R | R | A | I | C | C |
| Conduct quarterly log reviews | A | R | C | I | C | C | — |
| Maintain certificate ownership register | A | R | C | I | — | I | — |
| Report monitoring status to senior management | A | — | C | R | I | C | — |
| Approve and sign off this document | A | — | C | R | — | C | — |
| Retain logs per records management policy | A | R | I | I | C | C | — |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial document creation |
| | | | |
| | | | |

### 8.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Name] | | [YYYY-MM-DD] |
| Chief Information Security Officer | [Name] | | [YYYY-MM-DD] |
| Compliance Officer | [Name] | | [YYYY-MM-DD] |
| Chief Information Officer | [Name] | | [YYYY-MM-DD] |

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.23 | Requirements for management and monitoring of cryptographic keys and digital certificates |
| BNM RMiT | Section 10 (Technology Risk Management) | Overarching technology risk management obligations for financial institutions |
| [Organization Name] | Information Security Policy | Internal policy governing cryptographic controls and certificate management |
| [Organization Name] | Incident Management Policy | Procedures for responding to security incidents including certificate compromise |
| [Organization Name] | Change Management Policy | Procedures for certificate renewal and replacement changes |
| IETF RFC 6962 | Certificate Transparency | Technical standard for CT logs referenced in monitoring operations |
| CA/Browser Forum | Baseline Requirements | Industry baseline for certificate issuance and management practices |

---

## Appendices

### Appendix A — Certificate Monitoring Tool Configuration Reference

*Document the configuration parameters of automated certificate monitoring tools in use, including alert thresholds, CT log subscriptions, and notification routing.*

| Parameter | Configured Value | Last Updated | Updated By |
|---|---|---|---|
| CT Log Feeds Subscribed | [e.g., Google Argon 2025, Cloudflare Nimbus 2025, DigiCert Yeti] | [YYYY-MM-DD] | [Name] |
| Expiry Alert Threshold — Critical | [e.g., 14 days] | [YYYY-MM-DD] | [Name] |
| Expiry Alert Threshold — High | [e.g., 30 days] | [YYYY-MM-DD] | [Name] |
| Expiry Alert Threshold — Standard | [e.g., 60 days] | [YYYY-MM-DD] | [Name] |
| Early Warning Threshold | [e.g., 90 days] | [YYYY-MM-DD] | [Name] |
| Alert Notification Recipients | [Distribution list / SIEM integration] | [YYYY-MM-DD] | [Name] |
| Monitoring Scan Frequency | [e.g., Every 6 hours] | [YYYY-MM-DD] | [Name] |
| Log Retention Period | [e.g., 7 years per BNM record retention requirements] | [YYYY-MM-DD] | [Name] |

### Appendix B — Approved Certificate Authorities

*List all Certificate Authorities approved by [Organization Name] for certificate issuance. Any certificate detected from an unapproved CA must be treated as a security incident.*

| CA Name | CA Type | Approved For | Approval Date | Approved By | Review Date |
|---|---|---|---|---|---|
| [e.g., DigiCert] | [Public / Private / Internal] | [TLS/SSL, Code Signing, etc.] | [YYYY-MM-DD] | [Name] | [YYYY-MM-DD] |
| [e.g., Sectigo] | | | | | |
| [Internal CA Name] | Internal | [Internal services only] | | | |

### Appendix C — Certificate Monitoring Escalation Procedure Summary

*Summarise the step-by-step procedure for handling certificate monitoring alerts, to be followed by the IT Operations team during monitoring events.*

1. **Alert Received** — Automated alert generated by monitoring system and delivered to [notification channel / SIEM / email distribution list].
2. **Initial Triage** — Technical Custodian acknowledges alert within [X] hours and assesses severity.
3. **Classification** — Event classified as Informational, Warning, or Critical based on alert type and days to expiry.
4. **Action Initiation** — Appropriate action initiated (renewal, revocation investigation, or escalation).
5. **Escalation** — If unresolved within defined SLA, escalate per Section 4.2 Escalation Matrix.
6. **Resolution** — Certificate renewed, replaced, or revoked; log entry updated with resolution details.
7. **Post-Event Review** — For Critical events, a post-event review is completed within [X] business days and documented in Section 6.2.

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **Certificate Authority (CA)** | An entity that issues digital certificates and vouches for the binding between a public key and an identity |
| **Certificate Transparency (CT)** | An open framework for monitoring and auditing digital certificates, consisting of publicly auditable, append-only logs |
| **Common Name (CN)** | The primary domain name or identifier associated with a certificate |
| **CRL** | Certificate Revocation List — a list of certificates revoked by the issuing CA before their scheduled expiry |
| **FQDN** | Fully Qualified Domain Name — the complete domain name of a specific host |
| **OCSP** | Online Certificate Status Protocol — a real-time method for checking the revocation status of a certificate |
| **PKI** | Public Key Infrastructure — the framework of hardware, software, policies, and standards used to manage digital certificates and public-key encryption |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| **TLS/SSL** | Transport Layer Security / Secure Sockets Layer — cryptographic protocols used to secure communications over a network |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. For queries regarding this document, contact the IT Operations Manager at [contact details].*