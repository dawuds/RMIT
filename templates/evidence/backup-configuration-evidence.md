# Backup Configuration Evidence

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | CISO / Head of Cryptography |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document serves as formal evidence that [Organization Name] has implemented and maintains backup controls in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.44**, which mandates that financial institutions implement secure, resilient, and recoverable backup mechanisms including encryption of backup data, offsite or geographically separated storage, and protections against ransomware and malicious modification.

This evidence artifact demonstrates:

- Encryption standards applied to backup data at rest and in transit
- Offsite and/or cloud-based storage arrangements for backup media
- Ransomware detection and immutability controls applied to backup repositories
- Alignment with the institution's Recovery Point Objective (RPO) and Recovery Time Objective (RTO) commitments

**In-scope systems and data:**

*List all systems, applications, databases, and infrastructure components whose backups are governed by this document.*

| System / Component | Data Classification | Business Criticality |
|---|---|---|
| [System Name 1] | [Confidential / Restricted / Internal / Public] | [Critical / High / Medium / Low] |
| [System Name 2] | | |
| [System Name 3] | | |

**Out of scope:** [Describe any systems, environments, or data explicitly excluded from this evidence document and the rationale.]

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the backup configuration review, the criteria used to evaluate compliance, and the evidence standards applied.*

### 2.1 Assessment Boundaries

- **Assessment Period:** [Start Date] to [End Date]
- **Review Type:** [ ] Scheduled Quarterly Review &nbsp;&nbsp; [ ] Per-Event Review &nbsp;&nbsp; [ ] Annual Audit
- **Trigger (if per-event):** [Describe triggering event, e.g., ransomware incident, system migration, policy change]

### 2.2 Compliance Criteria

| Criterion | Regulatory Reference | Required Standard | Met? |
|---|---|---|---|
| Backup data encrypted at rest | RMiT 10.44 | AES-256 or equivalent | [ ] Yes / [ ] No / [ ] Partial |
| Backup data encrypted in transit | RMiT 10.44 | TLS 1.2 minimum | [ ] Yes / [ ] No / [ ] Partial |
| Offsite / geographically separated storage | RMiT 10.44 | Separate physical location or certified cloud | [ ] Yes / [ ] No / [ ] Partial |
| Ransomware protection (immutable backups) | RMiT 10.44 | WORM or equivalent immutability | [ ] Yes / [ ] No / [ ] Partial |
| Backup integrity verification | RMiT 10.44 | Automated checksum / hash validation | [ ] Yes / [] No / [ ] Partial |
| Restoration testing | RMiT 10.44 | At minimum annually | [ ] Yes / [ ] No / [ ] Partial |

### 2.3 Evidence Standards

*Describe the types of evidence collected to substantiate compliance claims, including configuration exports, screenshots, logs, and third-party attestations.*

- Configuration exports from backup management platforms
- Screenshots or logs from backup scheduling and monitoring tools
- Storage provider certificates (ISO 27001, SOC 2, CSA STAR where applicable)
- Cryptographic key management audit trails
- Restoration test reports

---

## 3. Methodology

*Describe the approach used to collect, validate, and document backup configuration evidence. Include tools used, personnel involved, and review techniques.*

### 3.1 Review Approach

| Step | Activity | Responsible Party | Date Completed |
|---|---|---|---|
| 1 | Inventory all in-scope backup targets | [Role / Name] | [Date] |
| 2 | Extract backup configuration from [Backup Tool Name] | [Role / Name] | [Date] |
| 3 | Verify encryption settings against approved algorithm list | [Role / Name] | [Date] |
| 4 | Validate offsite storage replication logs | [Role / Name] | [Date] |
| 5 | Confirm ransomware protection / immutability settings | [Role / Name] | [Date] |
| 6 | Verify backup schedule adherence against policy | [Role / Name] | [Date] |
| 7 | Conduct or review restoration test | [Role / Name] | [Date] |
| 8 | Compile findings and prepare evidence document | [Role / Name] | [Date] |

### 3.2 Tools and Platforms Used

| Tool / Platform | Purpose | Version |
|---|---|---|
| [Backup Software, e.g., Veeam / Commvault / AWS Backup] | Backup scheduling, encryption, and monitoring | [Version] |
| [Key Management System / HSM Platform] | Cryptographic key management | [Version] |
| [Storage Platform, e.g., Azure Blob / AWS S3 / NetApp] | Offsite / secondary storage | [Version] |
| [SIEM / Log Management Platform] | Audit trail validation | [Version] |

---

## 4. Findings and Ratings

*Summarise the outcome of the backup configuration review. Each finding should be rated by severity and linked to a remediation action where applicable.*

### 4.1 Overall Compliance Rating

| Domain | Rating | Basis |
|---|---|---|
| Backup Encryption | [ ] Compliant / [ ] Partially Compliant / [ ] Non-Compliant | [Summary justification] |
| Offsite Storage | [ ] Compliant / [ ] Partially Compliant / [ ] Non-Compliant | [Summary justification] |
| Ransomware Protection | [ ] Compliant / [ ] Partially Compliant / [ ] Non-Compliant | [Summary justification] |
| Backup Schedule Adherence | [ ] Compliant / [ ] Partially Compliant / [ ] Non-Compliant | [Summary justification] |
| Restoration Testing | [ ] Compliant / [ ] Partially Compliant / [ ] Non-Compliant | [Summary justification] |

**Overall Rating:** [ ] **Compliant** &nbsp; [ ] **Partially Compliant** &nbsp; [ ] **Non-Compliant**

### 4.2 Detailed Findings

| Finding ID | Description | Severity | Affected System(s) | Remediation Action | Target Date | Status |
|---|---|---|---|---|---|---|
| BCF-[YYYY]-001 | [Description of finding] | [ ] Critical / [ ] High / [ ] Medium / [ ] Low | [System(s)] | [Remediation steps] | [Date] | [ ] Open / [ ] Closed |
| BCF-[YYYY]-002 | | | | | | |

*If no findings are identified, state: "No non-conformances identified during this review period."*

---

## 5. Approved Algorithms and Key Lengths

*List all cryptographic algorithms and key lengths approved by [Organization Name] for use in backup encryption. This section must align with the organization's Cryptographic Standards Policy.*

### 5.1 Approved Encryption Algorithms

| Use Case | Algorithm | Key Length | Mode | Approval Status | Approved By |
|---|---|---|---|---|---|
| Backup data at rest | AES | 256-bit | GCM / CBC | Approved | [Name / Role] |
| Backup data in transit | TLS | RSA 2048 / ECDH 256 | TLS 1.2 / 1.3 | Approved | [Name / Role] |
| Backup key encryption (KEK) | AES | 256-bit | GCM | Approved | [Name / Role] |
| Integrity verification | SHA-2 | 256-bit / 512-bit | — | Approved | [Name / Role] |
| [Additional use case] | | | | | |

### 5.2 Deprecated / Prohibited Algorithms

*Explicitly list algorithms that must not be used and provide configuration evidence that they are disabled.*

| Algorithm | Reason for Prohibition | Disabled / Blocked? | Evidence Reference |
|---|---|---|---|
| DES / 3DES | Insufficient key length, CVE exposure | [ ] Yes / [ ] No | [Config export / screenshot ref] |
| RC4 | Stream cipher vulnerabilities | [ ] Yes / [ ] No | [Config export / screenshot ref] |
| MD5 | Collision vulnerabilities | [ ] Yes / [ ] No | [Config export / screenshot ref] |
| TLS 1.0 / 1.1 | Deprecated protocol | [ ] Yes / [ ] No | [Config export / screenshot ref] |

---

## 6. Key Lifecycle Management

*Document the full lifecycle of cryptographic keys used to protect backup data, from generation through destruction, in accordance with RMiT and the organization's Key Management Policy.*

### 6.1 Key Lifecycle Stages

| Stage | Control | Responsible Party | Evidence |
|---|---|---|---|
| **Generation** | Keys generated within HSM or approved FIPS 140-2 validated module | [Role] | [HSM log / certificate ref] |
| **Distribution** | Keys distributed via encrypted channels only; no plaintext transmission | [Role] | [Procedure ref] |
| **Storage** | Keys stored in HSM or approved key vault; never stored alongside encrypted data | [Role] | [Config ref] |
| **Rotation** | Keys rotated every [N] months or upon suspected compromise | [Role] | [Key rotation log ref] |
| **Revocation** | Compromised or expired keys revoked immediately; backup re-encrypted | [Role] | [Procedure ref] |
| **Destruction** | Keys destroyed via cryptographic erasure upon decommission; destruction logged | [Role] | [Destruction log ref] |

### 6.2 Key Rotation Schedule

| Key Type | Rotation Frequency | Last Rotated | Next Due | Status |
|---|---|---|---|---|
| Backup Encryption Key (BEK) | [e.g., Every 12 months] | [Date] | [Date] | [ ] On Track / [ ] Overdue |
| Key Encryption Key (KEK) | [e.g., Every 24 months] | [Date] | [Date] | [ ] On Track / [ ] Overdue |
| Transport / TLS Certificates | [e.g., Every 12 months] | [Date] | [Date] | [ ] On Track / [ ] Overdue |

---

## 7. HSM Usage Requirements

*Document the Hardware Security Module (HSM) configuration and usage standards applied to backup cryptographic operations.*

### 7.1 HSM Inventory

| HSM Device | Model | FIPS 140-2 Level | Location | Purpose | Status |
|---|---|---|---|---|---|
| [HSM-01] | [Vendor / Model] | Level [2 / 3] | [Primary Data Centre] | Backup key generation and storage | [ ] Active / [ ] Standby |
| [HSM-02] | [Vendor / Model] | Level [2 / 3] | [DR / Secondary Site] | Backup key replica | [ ] Active / [ ] Standby |

### 7.2 HSM Configuration Standards

- **Minimum FIPS Certification:** FIPS 140-2 Level 2 (Level 3 required for KEK operations)
- **Dual Control:** [ ] Enabled &nbsp; [ ] Not Enabled
- **Split Knowledge:** [ ] Enabled &nbsp; [ ] Not Enabled
- **Quorum for Key Operations:** [N]-of-[M] custodians required
- **HSM Audit Logging:** [ ] Enabled — Logs forwarded to [SIEM Platform]
- **Network Segmentation:** HSM accessible only from [Backup Management Server subnet]; firewall rules documented in [Firewall Policy Reference]

### 7.3 HSM Custodian Register

| Custodian Role | Name | Contact | Shard / Token Held |
|---|---|---|---|
| Primary Custodian | [Name] | [Contact] | Shard [A] |
| Secondary Custodian | [Name] | [Contact] | Shard [B] |
| Recovery Custodian | [Name] | [Contact] | Shard [C] |

---

## 8. RPO and RTO Definitions by Tier

*Define the Recovery Point Objective and Recovery Time Objective for each system tier. These targets must be approved by senior management and validated through restoration testing.*

### 8.1 Tier Classification

| Tier | Criticality | Definition | Examples |
|---|---|---|---|
| Tier 1 | Mission Critical | Systems whose failure causes immediate, significant financial or regulatory impact | Core banking, payment processing, RTGS connectivity |
| Tier 2 | Business Critical | Systems supporting core operations; degradation materially impacts business | Customer portal, risk systems, reporting platforms |
| Tier 3 | Important | Systems supporting internal operations; short outage tolerable | HR systems, internal analytics, development environments |
| Tier 4 | Standard | Non-critical systems with low business impact | Archival systems, test environments |

### 8.2 RPO and RTO Targets

| Tier | RPO Target | RTO Target | Backup Frequency | Last Validated | Validation Reference |
|---|---|---|---|---|---|
| Tier 1 — Mission Critical | ≤ 1 hour | ≤ 4 hours | Continuous / Near-real-time | [Date] | [Test Report Ref] |
| Tier 2 — Business Critical | ≤ 4 hours | ≤ 8 hours | Every 4 hours | [Date] | [Test Report Ref] |
| Tier 3 — Important | ≤ 24 hours | ≤ 24 hours | Daily | [Date] | [Test Report Ref] |
| Tier 4 — Standard | ≤ 72 hours | ≤ 72 hours | Weekly | [Date] | [Test Report Ref] |

---

## 9. Backup Schedule and Retention Periods

*Document the backup schedule, retention policy, and media management for all in-scope systems. Retention periods must comply with applicable BNM data retention requirements and the institution's Records Management Policy.*

### 9.1 Backup Schedule

| System / Component | Tier | Backup Type | Frequency | Time (MYT) | Backup Tool | Storage Target |
|---|---|---|---|---|---|---|
| [System Name 1] | [1–4] | Full / Incremental / Differential | [Daily / Weekly / Continuous] | [HH:MM] | [Tool Name] | [Primary + Offsite] |
| [System Name 2] | | | | | | |
| [System Name 3] | | | | | | |

### 9.2 Retention Policy

| Tier | Daily Backups Retained | Weekly Backups Retained | Monthly Backups Retained | Annual Backups Retained | Regulatory Minimum |
|---|---|---|---|---|---|
| Tier 1 | 7 days | 4 weeks | 12 months | 7 years | BNM RMiT / PDPA |
| Tier 2 | 7 days | 4 weeks | 6 months | 5 years | BNM RMiT |
| Tier 3 | 7 days | 4 weeks | 3 months | 3 years | Internal Policy |
| Tier 4 | 3 days | 2 weeks | 1 month | 1 year | Internal Policy |

### 9.3 Offsite and Cloud Storage Configuration

*Provide evidence that backups are stored in geographically separated locations and that cloud storage providers meet BNM outsourcing and data residency requirements.*

| Storage Location | Type | Provider / Owner | Geographic Location | Data Residency Compliant (Malaysia) | ISO 27001 / SOC 2? | Encryption at Rest |
|---|---|---|---|---|---|---|
| [Primary Data Centre] | On-premises | [Organization Name] | [City, Malaysia] | Yes | N/A | AES-256 |
| [Secondary / DR Site] | On-premises / Co-location | [Provider Name] | [City, Malaysia] | Yes | [ ] Yes / [ ] No | AES-256 |
| [Cloud Storage] | Cloud | [AWS / Azure / GCP / Local CSP] | Malaysia / ASEAN | [ ] Yes / [ ] No | [ ] Yes / [ ] No | AES-256 |

### 9.4 Ransomware Protection Controls

*Provide evidence of immutability, air-gap, or equivalent ransomware protection applied to backup repositories.*

| Control | Description | Applied To | Implementation | Verified? |
|---|---|---|---|---|
| Immutable Storage (WORM) | Write-Once-Read-Many policy; backups cannot be modified or deleted within retention window | [Storage targets] | [e.g., AWS S3 Object Lock / Azure Immutable Blob] | [ ] Yes / [ ] No |
| Air-Gapped Backup | Offline or logically isolated copy not accessible from production network | [Storage targets] | [e.g., Tape / Isolated vault] | [ ] Yes / [ ] No |
| Backup Repository Access Control | Backup repository admin accounts separated from production AD/IAM | All repositories | [e.g., Separate RBAC / MFA enforced] | [ ] Yes / [ ] No |
| Anomaly Detection on Backup Jobs | Alerting on failed, modified, or unusually large/small backup jobs | All scheduled jobs | [e.g., SIEM rule / Backup tool alerting] | [ ] Yes / [ ] No |
| MFA for Backup Admin Access | Multi-factor authentication required for all backup management console access | All backup platforms | [e.g., Azure AD MFA / TOTP] | [ ] Yes / [ ] No |

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability for backup configuration, maintenance, and evidence production.*

**R** = Responsible &nbsp; **A** = Accountable &nbsp; **C** = Consulted &nbsp; **I** = Informed

| Activity | CISO | Head of Cryptography | IT Operations | Risk & Compliance | Internal Audit | Business Owner |
|---|---|---|---|---|---|---|
| Define backup policy and standards | A | C | C | C | I | I |
| Implement backup configuration | I | C | R | I | I | I |
| Manage cryptographic keys and HSM | I | A/R | C | I | I | I |
| Monitor backup job completion | I | I | R | I | I | I |
| Conduct restoration testing | A | C | R | C | I | I |
| Manage offsite / cloud storage | I | C | R | I | I | I |
| Produce this evidence document | A | R | C | C | I | I |
| Review and approve evidence document | A | R | I | C | I | I |
| Escalate findings and non-conformances | A | R | C | R | C | I |
| Report to Board / Senior Management | R | C | I | C | I | I |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |

### 11.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO | [Name] | | [Date] |
| Head of Cryptography | [Name] | | [Date] |
| Chief Risk Officer / Head of Risk | [Name] | | [Date] |
| Head of IT Operations | [Name] | | [Date] |

---

## 12. References

| Reference | Description |
|---|---|
| BNM RMiT, Clause 10.44 | Backup and recovery requirements for financial institutions, including encryption, offsite storage, and ransomware resilience |
| BNM RMiT, Clause 10.42–10.43 | Business continuity and disaster recovery obligations (RPO / RTO context) |
| BNM RMiT, Clause 10.18–10.21 | Cryptographic controls and key management requirements |
| Personal Data Protection Act 2010 (PDPA) | Data retention and security obligations for personal data held in backup media |
| BNM Cloud Services Risk Management Policy | Requirements applicable where backup storage utilises cloud service providers |
| [Organization Name] Information Security Policy | [Internal Policy Ref] |
| [Organization Name] Cryptographic Standards Policy | [Internal Policy Ref] |
| [Organization Name] Key Management Policy | [Internal Policy Ref] |
| [Organization Name] Business Continuity Plan | [Internal Policy Ref] |
| [Organization Name] Records Management Policy | [Internal Policy Ref] |
| ISO/IEC 27001:2022, Annex A.8.13 | Information backup controls |
| NIST SP 800-209 | Security guidelines for storage infrastructure |

---

## Appendices

### Appendix A — Backup Job Execution Logs

*Attach or reference exported backup job logs from [Backup Tool Name] covering the review period [Start Date] to [End Date]. Logs must demonstrate scheduled jobs completed successfully and highlight any failures with documented remediation.*

[Attach: Backup_Job_Logs_[YYYY-QQ].csv / .pdf]

### Appendix B — Encryption Configuration Screenshots

*Attach screenshots or configuration exports demonstrating encryption settings applied to backup repositories and transport channels. Clearly annotate algorithm, key length, and the system to which the configuration applies.*

[Attach: Encryption_Config_Evidence_[YYYY-QQ].pdf]

### Appendix C — Offsite Storage Provider Certificates

*Attach current ISO 27001 certificates, SOC 2 Type II reports, or CSA STAR attestations for all third-party offsite and cloud backup storage providers.*

| Provider | Certificate Type | Valid From | Valid To | Document Reference |
|---|---|---|---|---|
| [Provider Name] | [ISO 27001 / SOC 2 Type II / CSA STAR] | [Date] | [Date] | [Filename / Link] |

### Appendix D — Restoration Test Report Summary

*Summarise the most recent restoration test(s) conducted. Full test reports should be retained and referenced here.*

| Test Date | System Tested | Tier | Test Type | RPO Achieved | RTO Achieved | Result | Report Reference |
|---|---|---|---|---|---|---|---|
| [Date] | [System Name] | [1–4] | [Full / Partial / Tabletop] | [Duration] | [Duration] | [ ] Pass / [ ] Fail | [Report Ref] |

### Appendix E — HSM Audit Log Extract

*Attach a sanitised extract of HSM audit logs covering key generation, access, and rotation events during the review period.*

[Attach: HSM_Audit_Log_Extract_[YYYY-QQ].pdf]

### Appendix F — Glossary

| Term | Definition |
|---|---|
| AES | Advanced Encryption Standard — symmetric block cipher approved for protecting classified and sensitive information |
| BEK | Backup Encryption Key — the data-level key used to encrypt backup data |
| BNM | Bank Negara Malaysia — the central bank and primary financial services regulator of Malaysia |
| FIPS 140-2 | Federal Information Processing Standard for cryptographic modules |
| HSM | Hardware Security Module — a physical device providing tamper-resistant cryptographic key management |
| KEK | Key Encryption Key — a higher-level key used to encrypt and protect BEKs |
| PDPA | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk for financial institutions |
| RPO | Recovery Point Objective — maximum tolerable data loss measured in time |
| RTO | Recovery Time Objective — maximum tolerable downtime before system restoration is required |
| WORM | Write Once Read Many — a storage model that prevents modification or deletion of stored data |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name] and its regulators. Unauthorised disclosure is prohibited under [Organization Name]'s Information Security Policy and applicable Malaysian law.*