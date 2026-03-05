# Cryptographic Algorithm Inventory

---

| Field | Details |
|---|---|
| **Document ID** | [Organization Abbreviation]-ISMS-RPT-CRYPTO-[NNN] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Information Security Officer (CISO) / Head of Cryptography |
| **Last Review Date** | [DD Month YYYY] |
| **Next Review Date** | [DD Month YYYY] *(Quarterly — within 90 days of Last Review Date)* |
| **Approved By** | [Name, Title] |
| **Inventory Generated** | [System-Generated Timestamp: YYYY-MM-DD HH:MM:SS UTC] |
| **Inventory Source System** | [Cryptographic Asset Management Platform / CSPM Tool Name] |

> **Handling Instructions:** This document is classified **Confidential**. It contains sensitive information regarding the cryptographic posture of [Organization Name]. Distribution is restricted to authorised personnel on a need-to-know basis. Do not transmit via unencrypted channels.

---

## 1. Purpose and Scope

### 1.1 Purpose

This Cryptographic Algorithm Inventory is a mandatory compliance artifact maintained by [Organization Name] in fulfilment of the Bank Negara Malaysia (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.22**, which requires financial institutions to maintain an up-to-date inventory of all cryptographic mechanisms deployed across the institution's technology environment, and to ensure that such mechanisms remain adequate, approved, and aligned with current cryptographic standards.

This inventory provides a structured, system-generated record of all cryptographic algorithms, protocols, key lengths, and associated assets in use across [Organization Name]'s infrastructure, applications, and data environments. It supports ongoing cryptographic governance, risk assessment, and quantum-readiness planning.

### 1.2 Scope

This inventory covers all cryptographic assets within the scope of the RMiT Policy, including but not limited to:

- All production, staging, and disaster recovery systems owned or operated by [Organization Name]
- On-premises infrastructure, co-location facilities, and cloud environments (IaaS, PaaS, SaaS)
- Applications developed in-house, procured from third parties, or delivered by managed service providers
- Network and communication layers where cryptographic protocols are enforced
- Hardware Security Modules (HSMs), Token-Based Cryptographic Devices, and Trusted Platform Modules (TPMs)
- Digital certificates, public key infrastructure (PKI), and cryptographic key material

**Out of Scope:** [Specify any exclusions, e.g., sandbox/development environments, end-user personal devices unless under MDM — to be reviewed and confirmed by the CISO.]

---

## 2. Asset and Item Identification

*This section catalogues every discrete cryptographic asset or endpoint across the organisation. Each row represents a unique asset where cryptographic mechanisms have been identified. Asset identifiers must align with the organisation's Configuration Management Database (CMDB) or asset register.*

### 2.1 Cryptographic Asset Register

| Asset ID | Asset Name | Asset Type | Business System / Application | Environment | Physical / Logical Location | IP Address / Hostname | Operating System / Platform | Asset Status |
|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [e.g., Core Banking Application Server] | [Application] | [e.g., T24 Core Banking] | [Production] | [e.g., Primary Data Centre, Rack A-03] | [e.g., 10.0.1.50 / cbs-prod-01] | [e.g., RHEL 8.7] | [Active] |
| [ASSET-002] | [e.g., Internet Banking Web Server] | [Web Server] | [e.g., IBK Portal] | [Production] | [e.g., Cloud — AWS ap-southeast-1] | [e.g., ib.example.com.my] | [e.g., Ubuntu 22.04 LTS] | [Active] |
| [ASSET-003] | [e.g., Database Encryption Module] | [Database] | [e.g., Customer Data Warehouse] | [Production] | [e.g., Primary Data Centre, Rack B-07] | [e.g., 10.0.2.10 / dw-prod-db01] | [e.g., Oracle Linux 8] | [Active] |
| [ASSET-004] | [e.g., SWIFT Gateway] | [Network Appliance] | [e.g., Interbank Settlement] | [Production] | [e.g., Primary Data Centre, DMZ] | [e.g., 10.0.3.5 / swift-gw-01] | [e.g., Proprietary] | [Active] |
| [ASSET-005] | [e.g., Employee VPN Concentrator] | [Network Device] | [e.g., Remote Access] | [Production] | [e.g., Primary Data Centre, Rack C-01] | [e.g., vpn.example.com.my] | [e.g., Cisco ASA 9.x] | [Active] |
| *[Add rows as required]* | | | | | | | | |

**Total Assets Identified:** [NNN]

---

## 3. Classification and Categorisation

*This section categorises each identified cryptographic instance by its functional use case and the type of cryptographic mechanism employed. Categorisation enables targeted risk assessment and supports prioritisation of remediation for deprecated or non-compliant algorithms.*

### 3.1 Cryptographic Use Case Categories

The following use case categories are applied across the inventory:

| Category Code | Use Case Category | Description |
|---|---|---|
| CAT-01 | Data-at-Rest Encryption | Encryption of stored data on disks, databases, backup media |
| CAT-02 | Data-in-Transit Encryption | Encryption of data across networks (TLS, HTTPS, SFTP, etc.) |
| CAT-03 | Authentication & Identity | Digital signatures, certificate-based authentication, MFA tokens |
| CAT-04 | Key Wrapping & Key Transport | Encryption of cryptographic keys for storage or exchange |
| CAT-05 | Message Authentication & Integrity | HMAC, MACs, hash-based integrity checks |
| CAT-06 | Non-Repudiation & Digital Signing | Document signing, transaction authorisation, code signing |
| CAT-07 | Secure Communications Protocols | Protocol-level cryptography (TLS, SSH, IPSec, SFTP) |
| CAT-08 | Tokenisation & Data Masking | Cryptographic tokenisation of sensitive data elements |
| CAT-09 | HSM-Managed Operations | Key generation, signing, and encryption operations delegated to HSM |
| CAT-10 | Other | [Specify] |

### 3.2 Cryptographic Instance Classification Matrix

*Map each identified cryptographic instance to its use case category, sensitivity of data protected, and applicable regulatory classification.*

| Asset ID | Cryptographic Instance ID | Use Case Category | Data Sensitivity | Regulatory Classification | Criticality Rating |
|---|---|---|---|---|---|
| [ASSET-001] | [CRYPTO-001] | CAT-01 | [e.g., Secret — Customer PII & Financial Data] | [e.g., PDPA Personal Data / BNM Customer Data] | [Critical] |
| [ASSET-002] | [CRYPTO-002] | CAT-02 | [e.g., Restricted — Session Data] | [e.g., BNM Consumer Protection] | [High] |
| [ASSET-003] | [CRYPTO-003] | CAT-05 | [e.g., Secret — Transactional Records] | [e.g., BNM RMiT, PDPA] | [Critical] |
| [ASSET-004] | [CRYPTO-004] | CAT-06 | [e.g., Secret — Interbank Settlements] | [e.g., BNM RENTAS Regulations] | [Critical] |
| *[Add rows as required]* | | | | | |

---

## 4. Owner and Custodian

*Every cryptographic asset must have a designated Business Owner and a Technical Custodian. The Business Owner is accountable for the appropriate use and risk acceptance of the cryptographic asset. The Technical Custodian is responsible for day-to-day operational management, including lifecycle activities and compliance adherence.*

### 4.1 Ownership Register

| Cryptographic Instance ID | Asset ID | Asset Name | Business Owner (Name / Role) | Business Owner Department | Technical Custodian (Name / Role) | Technical Custodian Team | Vendor / Third Party (if applicable) | Escalation Contact |
|---|---|---|---|---|---|---|---|---|
| [CRYPTO-001] | [ASSET-001] | [Core Banking Application Server] | [Name / Head of IT Operations] | [IT Operations] | [Name / Senior Systems Administrator] | [Infrastructure Team] | [N/A] | [CISO] |
| [CRYPTO-002] | [ASSET-002] | [Internet Banking Web Server] | [Name / Head of Digital Channels] | [Digital Banking] | [Name / Web Infrastructure Lead] | [Application Team] | [e.g., Vendor Name Sdn Bhd] | [Head of Digital Channels] |
| [CRYPTO-003] | [ASSET-003] | [Database Encryption Module] | [Name / Chief Data Officer] | [Data Management] | [Name / DBA Lead] | [Database Administration] | [N/A] | [CISO] |
| [CRYPTO-004] | [ASSET-004] | [SWIFT Gateway] | [Name / Head of Treasury Operations] | [Treasury] | [Name / Network Security Engineer] | [Network & Security] | [SWIFT Service Bureau / Vendor] | [Head of Treasury Operations] |
| *[Add rows as required]* | | | | | | | | |

---

## 5. Approved Algorithms and Key Lengths

*This section records the specific cryptographic algorithms and key parameters in use for each identified instance. All entries are assessed against [Organization Name]'s **Cryptographic Standards Policy** and the approved algorithm baseline, which must be consistent with BNM RMiT Clause 10.22, NIST SP 800-131A (Revision 2 or current), and industry-recognised standards. Deprecated or non-approved algorithms must be flagged and tracked through the remediation process.*

### 5.1 Approved Algorithm Baseline

The following table defines [Organization Name]'s approved cryptographic algorithm standards. All deployed instances must conform to this baseline.

| Algorithm Type | Approved Algorithms | Minimum Key Length / Parameters | Effective Until | Status |
|---|---|---|---|---|
| Symmetric Encryption | AES | 256-bit (preferred); 128-bit (minimum) | [Review Date] | **Approved** |
| Asymmetric Encryption | RSA | 3072-bit (minimum); 4096-bit (preferred) | [Review Date] | **Approved** |
| Asymmetric Encryption | ECC (ECDSA / ECDH) | P-256 (NIST) minimum; P-384 preferred | [Review Date] | **Approved** |
| Hashing | SHA-2 (SHA-256, SHA-384, SHA-512) | N/A | [Review Date] | **Approved** |
| Hashing | SHA-3 | N/A | [Review Date] | **Approved** |
| Message Authentication | HMAC-SHA-256 / HMAC-SHA-384 | Key ≥ 256-bit | [Review Date] | **Approved** |
| Key Exchange | ECDH, DH | ≥ 2048-bit DH; P-256 ECDH minimum | [Review Date] | **Approved** |
| Transport Protocol | TLS 1.2 (restricted cipher suites) | See cipher suite list in Appendix A | [Review Date] | **Conditionally Approved** |
| Transport Protocol | TLS 1.3 | N/A (inherently secure) | [Review Date] | **Approved** |
| SSH | SSH-2 (Ed25519, ECDSA, RSA ≥ 3072-bit) | N/A | [Review Date] | **Approved** |
| **Deprecated — Do Not Use** | MD5, SHA-1, DES, 3DES, RC4, SSLv2, SSLv3, TLS 1.0, TLS 1.1, RSA < 2048-bit | N/A | N/A | **Prohibited** |

### 5.2 Deployed Algorithm Inventory

*Record all cryptographic algorithms detected per instance. Flag any deviation from the approved baseline immediately. Non-compliant instances must be entered into the Risk Register and remediation tracked.*

| Cryptographic Instance ID | Asset ID | Asset Name | Algorithm in Use | Algorithm Type | Key Length / Parameters | Protocol Version | Use Case Category | Compliance Status | Finding Reference (if non-compliant) |
|---|---|---|---|---|---|---|---|---|---|
| [CRYPTO-001] | [ASSET-001] | [Core Banking App Server] | [AES-256-GCM] | [Symmetric Encryption] | [256-bit] | [N/A] | [CAT-01] | **Compliant** | [N/A] |
| [CRYPTO-002] | [ASSET-002] | [Internet Banking Web Server] | [TLS 1.3 / ECDHE-AES256-GCM-SHA384] | [Transport Protocol] | [P-384 / 256-bit] | [TLS 1.3] | [CAT-02] | **Compliant** | [N/A] |
| [CRYPTO-003] | [ASSET-003] | [Database Encryption Module] | [AES-128-CBC] | [Symmetric Encryption] | [128-bit] | [N/A] | [CAT-01] | **Compliant (Minimum)** | [N/A] |
| [CRYPTO-005] | [ASSET-005] | [Legacy API Gateway] | [3DES] | [Symmetric Encryption] | [112-bit] | [N/A] | [CAT-02] | **NON-COMPLIANT** | [RISK-2024-CRYPTO-007] |
| *[Add rows as required]* | | | | | | | | | |

**Compliance Summary:**

| Status | Count | Percentage |
|---|---|---|
| Compliant | [NNN] | [NN%] |
| Compliant (Minimum — Monitor) | [NNN] | [NN%] |
| Non-Compliant — Remediation Required | [NNN] | [NN%] |
| Non-Compliant — Exception Approved | [NNN] | [NN%] |
| **Total Instances** | **[NNN]** | **100%** |

---

## 6. Key Lifecycle Management

*This section documents the lifecycle management controls for cryptographic keys associated with each inventory entry. Effective key lifecycle management is essential to maintaining the security properties of cryptographic mechanisms. All key lifecycle activities must be governed by [Organization Name]'s **Cryptographic Key Management Policy** and consistent with BNM RMiT Clause 10.22 requirements.*

### 6.1 Key Lifecycle Stages

The following lifecycle stages apply to all managed cryptographic keys:

| Stage | Description |
|---|---|
| **Generation** | Secure generation of key material using approved RNG and algorithm parameters |
| **Distribution** | Secure transport of key material to authorised systems and custodians |
| **Storage** | Secure storage of keys, including access controls and encryption of key stores |
| **Use** | Authorised operational use of keys within approved systems and processes |
| **Rotation** | Periodic replacement of keys per defined rotation schedules |
| **Revocation** | Immediate invalidation of compromised or retired keys |
| **Destruction** | Secure, verifiable deletion of key material at end of life |
| **Archival** | Retention of key material required for decryption of archived data |

### 6.2 Key Lifecycle Inventory

| Cryptographic Instance ID | Key Identifier / Label | Key Type | Key Generation Method | Key Storage Location | Key Custodian | Key Creation Date | Key Rotation Frequency | Last Rotation Date | Next Rotation Due | Key Expiry Date | Revocation Procedure Reference | Archive / Destruction Procedure Reference | Key Lifecycle Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [CRYPTO-001] | [KEY-CBK-AES-001] | [Symmetric — AES-256] | [HSM-generated (FIPS 140-2 Level 3)] | [Primary HSM — Thales Luna Network HSM] | [Infrastructure Team Lead] | [DD/MM/YYYY] | [Annual] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [KEY-PROC-REV-001] | [KEY-PROC-DEST-001] | [Active] |
| [CRYPTO-002] | [CERT-IBK-TLS-001] | [Asymmetric — RSA-4096 TLS Certificate] | [CSR via PKI CA] | [Certificate Store / PKI CA] | [Web Infrastructure Lead] | [DD/MM/YYYY] | [Annual / on expiry] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [KEY-PROC-REV-002] | [N/A — Certificate Revocation via CRL/OCSP] | [Active] |
| [CRYPTO-003] | [KEY-DWH-AES-001] | [Symmetric — AES-128] | [Software-generated (OS CSPRNG)] | [Database Key Store — encrypted] | [DBA Lead] | [DD/MM/YYYY] | [6 Months] | [DD/MM/YYYY] | [DD/MM/YYYY] | [N/A] | [KEY-PROC-REV-003] | [KEY-PROC-DEST-003] | [Active — Rotation Overdue] |
| *[Add rows as required]* | | | | | | | | | | | | | |

### 6.3 Key Rotation Schedule Summary

| Key Type | Standard Rotation Frequency | Trigger-Based Rotation Events | Responsible Team |
|---|---|---|---|
| Symmetric Data Encryption Keys (DEK) | [Annual / 6 Monthly — per sensitivity] | Personnel change, suspected compromise, algorithm deprecation | [Infrastructure / DBA Team] |
| Asymmetric TLS/SSL Certificates | [Annual or per certificate validity] | Compromise, CA revocation, domain change | [PKI Team / Web Infrastructure] |
| Code Signing Keys | [Biennial] | Compromise, personnel departure | [DevSecOps Team] |
| HSM Master Keys (KEK) | [Per HSM Vendor Guidance / Biennial minimum] | Compromise, HSM replacement, personnel change | [CISO / Cryptography Team] |
| SSH Host Keys | [Annual] | Compromise, server rebuild | [Infrastructure Team] |
| API Signing Keys | [Quarterly / 6 Monthly] | Compromise, vendor change, personnel departure | [Application Security Team] |

### 6.4 Key Compromise and Incident Log

| Incident Reference | Key Identifier | Date Detected | Nature of Compromise | Response Action Taken | Revocation Date | Replacement Key Reference | Status |
|---|---|---|---|---|---|---|---|
| [INC-CRYPTO-[NNN]] | [KEY-ID] | [DD/MM/YYYY] | [e.g., Unauthorised access to key store] | [e.g., Key revoked, replacement generated, incident escalated to CISO] | [DD/MM/YYYY] | [NEW-KEY-ID] | [Closed / Open] |
| *[Add rows as required]* | | | | | | | |

---

## 7. HSM Usage Requirements

*This section records all Hardware Security Module (HSM) deployments within [Organization Name]'s cryptographic infrastructure. HSMs provide tamper-resistant, high-assurance cryptographic operations and are the mandatory mechanism for protecting high-value cryptographic keys as required under BNM RMiT. All critical key operations must be performed within, or protected by, a FIPS 140-2 Level 3 (or equivalent) validated HSM.*

### 7.1 HSM Deployment Register

| HSM ID | HSM Name / Label | HSM Vendor & Model | FIPS 140-2 Validation Level | Firmware Version | Deployment Location | Environment | Purpose / Use Case | HSM Custodian | HSM Administrator(s) | Last Audit Date | Certification Expiry | Operational Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [HSM-001] | [Primary Cryptographic HSM] | [e.g., Thales Luna Network HSM 7] | [Level 3] | [v7.x.x] | [Primary Data Centre, Rack A-01] | [Production] | [Master Key Encryption, Certificate Signing, Core Banking Key Management] | [CISO] | [Name 1, Name 2] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Active] |
| [HSM-002] | [Secondary / DR Cryptographic HSM] | [e.g., Thales Luna Network HSM 7] | [Level 3] | [v7.x.x] | [Disaster Recovery Site, Rack DR-A-02] | [Production — DR] | [DR Failover — Mirror of HSM-001] | [CISO] | [Name 1, Name 2] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Standby — Active DR] |
| [HSM-003] | [Payment HSM] | [e.g., Utimaco PaymentServer] | [Level 3] | [v5.x.x] | [Primary Data Centre, Rack B-02] | [Production] | [PIN Encryption, Card Verification, EMV Operations] | [Head of Payment Operations] | [Name 1, Name 2] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Active] |
| *[Add rows as required]* | | | | | | | | | | | | |

### 7.2 HSM Key Partition Inventory

*Document key partitions (virtual HSM containers) and the specific key material or operations hosted within each HSM partition.*

| HSM ID | Partition ID | Partition Label | Keys Hosted | Allowed Operations | Partition Administrator | Partition Officer(s) | Access Control Policy Reference |
|---|---|---|---|---|---|---|---|
| [HSM-001] | [PART-001-CBK] | [Core Banking Partition] | [KEY-CBK-AES-001, KEY-CBK-RSA-001] | [Encrypt, Decrypt, Sign, Verify] | [Infrastructure Team Lead] | [Name 1, Name 2] | [KEY-POLICY-CBK-001] |
| [HSM-001] | [PART-001-PKI] | [Internal PKI Partition] | [ROOT-CA-KEY-001, ISSUING-CA-KEY-001] | [Sign, Verify] | [PKI Administrator] | [Name 1] | [KEY-POLICY-PKI-001] |
| [HSM-003] | [PART-003-PIN] | [PIN Processing Partition] | [PIN-ENC-KEY-001, ZPK-001] | [Encrypt, Translate, Verify] | [Payment Operations Lead] | [Name 1, Name 2] | [KEY-POLICY-PAY-001] |
| *[Add rows as required]* | | | | | | | |

### 7.3 Cryptographic Operations Mandating HSM Usage

*Per [Organization Name]'s Cryptographic Key Management Policy and BNM RMiT requirements, the following operations must exclusively be performed within or protected by a validated HSM:*

| Operation | Mandatory HSM Required | Applicable Systems | Non-Compliance Risk Rating | Current Compliance Status |
|---|---|---|---|---|
| Master Key (KEK) Generation and Storage | Yes — FIPS 140-2 Level 3 minimum | All key management systems | Critical | [Compliant / Non-Compliant] |
| Root CA / Issuing CA Private Key Operations | Yes — FIPS 140-2 Level 3 minimum | Internal PKI | Critical | [Compliant / Non-Compliant] |
| PIN Block Encryption and Translation | Yes — Payment HSM (PCI DSS compliant) | Payment Processing Systems | Critical | [Compliant / Non-Compliant] |
| Digital Signing of Financial Transactions | Yes — FIPS 140-2 Level 3 minimum | Core Banking, SWIFT Gateway | Critical | [Compliant / Non-Compliant] |
| SWIFT BIC Key Management | Yes — SWIFT-approved HSM | SWIFT Gateway | Critical | [Compliant / Non-Compliant] |
| Code Signing Key Storage | Yes — FIPS 140-2 Level 2 minimum | DevSecOps Pipeline | High | [Compliant / Non-Compliant] |
| TLS Private Key Storage (High-Sensitivity Systems) | Recommended — FIPS 140-2 Level 2+ | Internet-Facing Applications | High | [Compliant / Non-Compliant] |

### 7.4 HSM Maintenance and Audit Log

| HSM ID | Activity Type | Activity Date | Performed By | Description | Next Scheduled Activity | Reference |
|---|---|---|---|---|---|---|
| [HSM-001] | [Firmware Update] | [DD/MM/YYYY] | [Vendor Engineer / Internal Admin] | [Updated firmware from v7.x.x to v7.y.y] | [DD/MM/YYYY — Annual Review] | [CHG-[NNN]] |
| [HSM-001] | [Key Ceremony] | [DD/MM/YYYY] | [CISO, Custodian 1, Custodian 2] | [Annual Master Key rotation ceremony] | [DD/MM/YYYY] | [KEY-CEREMONY-[NNN]] |
| [HSM-002] | [DR Synchronisation Test] | [DD/MM/YYYY] | [Infrastructure Team] | [Verified HA replication from HSM-001 to HSM-002] | [DD/MM/YYYY — Semi-Annual] | [TEST-DR-[NNN]] |
| *[Add rows as required]* | | | | | | |

---

## 8. Non-Compliant Instances and Remediation Tracking

*All cryptographic instances identified as non-compliant during the generation of this inventory must be captured below and tracked to remediation. Open items must be reviewed at each quarterly inventory cycle.*

| Finding ID | Cryptographic Instance ID | Asset ID | Non-Compliant Algorithm / Configuration | Risk Rating | Risk Owner | Remediation Plan | Target Remediation Date | Current Status | Exception Reference (if applicable) |
|---|---|---|---|---|---|---|---|---|---|
| [FIND-CRYPTO-001] | [CRYPTO-005] | [ASSET-005] | [3DES — Deprecated Algorithm] | [High] | [Head of API Platform] | [Migrate to AES-256-GCM; decommission legacy gateway] | [DD/MM/YYYY] | [In Progress] | [N/A] |
| [FIND-CRYPTO-002] | [CRYPTO-006] | [ASSET-006] | [TLS 1.0 on Legacy Internal Portal] | [High] | [Head of IT Operations] | [Enforce TLS 1.2+ via firewall policy; upgrade server] | [DD/MM/YYYY] | [Pending] | [N/A] |
| [FIND-CRYPTO-003] | [CRYPTO-007] | [ASSET-007] | [RSA-1024 Certificate — Expired & Under-Keyed] | [Critical] | [PKI Administrator] | [Emergency certificate replacement — RSA-4096] | [DD/MM/YYYY] | [Completed DD/MM/YYYY] | [N/A] |
| *[Add rows as required]* | | | | | | | | | |

---

## 9. Roles and Responsibilities

*This section defines the accountability and responsibility structure for the creation, maintenance, review, and approval of this Cryptographic Algorithm Inventory.*

### 9.1 RACI Matrix

| Activity | CISO | Head of Cryptography / PKI | Infrastructure Team | Application Security Team | Payment Operations | Internal Audit | Risk Management | Board IT Committee |
|---|---|---|---|---|---|---|---|---|
| Define Cryptographic Policy and Approved Algorithm Baseline | **A** | **R** | C | C | C | I | C | I |
| System-Generate Cryptographic Inventory | A | **R** | **R** | **R** | **R** | I | I | — |
| Validate and Review Generated Inventory | **A** | **R** | C | C | C | C | I | — |
| Manage HSM Operations and Key Ceremonies | **A** | **R** | **R** | I | **R** | I | I | — |
| Monitor Algorithm Compliance Status | A | **R** | **R** | **R** | **R** | C | I | — |
| Initiate and Track Remediation of Non-Compliant Instances | **A** | **R** | **R** | **R** | **R** | C | **R** | I |
| Review and Approve Cryptographic Exceptions | **A** | R | C | C | C | I | **R** | — |
| Submit Quarterly Inventory for Approval | A | **R** | I | I | I | I | I | — |
| Final Approval of Inventory Report | **A** | R | — | — | — | C | C | I |
| Regulatory Submission and Liaison (BNM) | **A** | R | — | — | — | C | R | I |

**Legend:** **R** — Responsible | **A** — Accountable | **C** — Consulted | **I** — Informed

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes / Description |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name, Role] | Initial release of Cryptographic Algorithm Inventory template |
| [1.1] | [DD/MM/YYYY] | [Name, Role] | [e.g., Added HSM-003 Payment HSM; updated algorithm baseline for SHA-3] |
| [2.0] | [DD/MM/YYYY] | [Name, Role] | [e.g., Major revision following NIST SP 800-131A Rev 3 alignment] |

### 10.2 Quarterly Review Record

| Review Cycle | Review Date | Reviewed By | Findings Summary | Next Review Due |
|---|---|---|---|---|
| Q[N] [YYYY] | [DD/MM/YYYY] | [Name, Role] | [e.g., 2 non-compliant instances identified; 1 finding closed from prior cycle] | [DD/MM/YYYY] |
| Q[N] [YYYY] | [DD/MM/YYYY] | [Name, Role] | [e.g., All prior findings resolved; 0 new findings] | [DD/MM/YYYY] |

### 10.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Cryptography / PKI | [Name] | _________________________ | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Name] | _________________________ | [DD/MM/YYYY] |
| Chief Risk Officer (CRO) | [Name] | _________________________ | [DD/MM/YYYY] |
| Chief Technology Officer (CTO) | [Name] | _________________________ | [DD/MM/YYYY] |

---

## 11. References

| Reference | Document / Standard | Relevant Clauses / Sections |
|---|---|---|
| BNM RMiT | Bank Negara Malaysia — Risk Management in Technology Policy Document | Clause 10.22 — Cryptographic Controls |
| BNM RMiT | Bank Negara Malaysia — Risk Management in Technology Policy Document | Clause 10.1–10.5 — Technology Risk Management Framework |
| NIST SP 800-131A Rev 2 | Transitioning the Use of Cryptographic Algorithms and Key Lengths | All sections — Algorithm Approval Baseline |
| NIST SP 800-57 Part 1 Rev 5 | Recommendation for Key Management | Key Lifecycle Management Guidance |
| NIST SP 800-175B Rev 1 | Guideline for Using Cryptographic Standards in the Federal Government | Algorithm Selection Guidance |
| FIPS 140-2 / 140-3 | Federal Information Processing Standard — Security Requirements for Cryptographic Modules | HSM Validation Levels |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | Requirement 3, 4 — Cryptographic Protection of Cardholder Data |
| PDPA 2010 | Personal Data Protection Act 2010 (Malaysia) | Section 9 — Security Principle |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A Control 8.24 — Use of Cryptography |
| ISO/IEC 27002:2022 | Information Security Controls | Control 8.24 — Use of Cryptography |
| [Organization Name] — Cryptographic Key Management Policy | Internal Policy | [Policy Document ID] |
| [Organization Name] — Information Security Policy | Internal Policy | [Policy Document ID] |
| [Organization Name] — IT Risk Management Framework | Internal Framework | [Framework Document ID] |

---

## Appendices

### Appendix A — Approved TLS Cipher Suites

*List all approved TLS 1.2 and TLS 1.3 cipher suites permissible within [Organization Name]'s environment. Cipher suites not listed here are considered prohibited.*

**TLS 1.3 — All standard cipher suites are approved:**

- `TLS_AES_256_GCM_SHA384`
- `TLS_AES_128_GCM_SHA256`
- `TLS_CHACHA20_POLY1305_SHA256`

**TLS 1.2 — Approved Cipher Suites (Restricted List):**

| Cipher Suite | Key Exchange | Authentication | Encryption | MAC | PFS |
|---|---|---|---|---|---|
| `TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384` | ECDHE | ECDSA | AES-256-GCM | SHA-384 | Yes |
| `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384` | ECDHE | RSA | AES-256-GCM | SHA-384 | Yes |
| `TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256` | ECDHE | ECDSA | AES-128-GCM | SHA-256 | Yes |
| `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256` | ECDHE | RSA | AES-128-GCM | SHA-256 | Yes |
| `TLS_DHE_RSA_WITH_AES_256_GCM_SHA384` | DHE (≥2048-bit) | RSA | AES-256-GCM | SHA-384 | Yes |
| *[Add or remove per your security policy]* | | | | | |

**Prohibited Cipher Suites (Non-Exhaustive):**

- All cipher suites using NULL encryption, RC4, DES, 3DES, EXPORT-grade keys
- All cipher suites without Forward Secrecy (non-ECDHE / non-DHE)
- All cipher suites using MD5 or SHA-1 MAC

---

### Appendix B — Quantum Readiness Assessment

*[Organization Name] acknowledges the emerging threat of cryptographically-relevant quantum computers (CRQC) to current public-key cryptographic algorithms. This appendix tracks the organisation's quantum readiness status and post-quantum cryptography (PQC) transition planning.*

| Assessment Area | Current Status | Risk Rating | Planned Action | Target Date |
|---|---|---|---|---|
| Inventory of quantum-vulnerable algorithms (RSA, ECC, DH) | [Completed / In Progress] | [High] | [Identify all instances; prioritise by criticality] | [DD/MM/YYYY] |
| NIST PQC algorithm evaluation (FIPS 203, 204, 205) | [Monitoring / Testing] | [Medium] | [Pilot CRYSTALS-Kyber for key exchange in test environment] | [DD/MM/YYYY] |
| Crypto-agility capability assessment | [In Progress] | [High] | [Review all systems for ability to swap algorithms without redesign] | [DD/MM/YYYY] |
| HSM vendor PQC roadmap review | [Completed] | [Medium] | [Thales Luna confirmed PQC firmware roadmap — monitor] | [Ongoing] |
| PQC Transition Plan (formal document) | [Not Started / Draft] | [High] | [Develop formal transition plan aligned to NIST guidance] | [DD/MM/YYYY] |

---

### Appendix C — Cryptographic Exception Register

*Any deviation from [Organization Name]'s approved algorithm baseline that has been formally accepted as a risk exception must be recorded here. Exceptions are subject to annual review and must not remain open beyond the approved validity period.*

| Exception ID | Cryptographic Instance ID | Non-Compliant Configuration | Business Justification | Risk Acceptance Level | Approved By | Approval Date | Exception Expiry Date | Compensating Controls | Status |
|---|---|---|---|---|---|---|---|---|---|
| [EXCEP-CRYPTO-001] | [CRYPTO-XXX] | [e.g., TLS 1.1 on Legacy COBOL Interface] | [e.g., Vendor system does not support TLS 1.2; upgrade scheduled for Q[N] FY[YYYY]] | [High — Accepted by CISO and CRO] | [CISO Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Network segmentation; additional monitoring; vendor remediation SLA in contract] | [Active — Monitoring] |
| *[Add rows as required]* | | | | | | | | | |

---

### Appendix D — Glossary of Terms

| Term | Definition |
|---|---|
| **Algorithm** | A defined procedure or set of rules for performing cryptographic operations such as encryption, decryption, signing, or key exchange |
| **Asymmetric Cryptography** | Cryptographic system using a mathematically linked key pair (public and private keys); e.g., RSA, ECC |
| **Certificate Authority (CA)** | An entity that issues and manages digital certificates within a Public Key Infrastructure |
| **CSPRNG** | Cryptographically Secure Pseudo-Random Number Generator — used for generating key material |
| **DEK** | Data Encryption Key — key used directly to encrypt data |
| **FIPS 140-2/3** | Federal Information Processing Standard for cryptographic module security requirements |
| **Forward Secrecy (PFS)** | Property ensuring that session keys cannot be compromised even if long-term keys are later exposed |
| **HSM** | Hardware Security Module — a tamper-resistant physical device that safeguards and manages cryptographic keys |
| **KEK** | Key Encryption Key — a key used to encrypt other keys |
| **Key Ceremony** | A formal, witnessed procedure for generating, loading, or retiring high-value cryptographic keys |
| **PKI** | Public Key Infrastructure — the framework of policies, hardware, software, and procedures to create, manage, distribute, and revoke digital certificates |
| **Post-Quantum Cryptography (PQC)** | Cryptographic algorithms believed to be secure against attack by both classical and quantum computers |
| **RMiT** | Risk Management in Technology — BNM Policy Document governing technology risk for financial institutions |
| **Symmetric Cryptography** | Cryptographic system using a single shared secret key for both encryption and decryption; e.g., AES |
| **TLS** | Transport Layer Security — a cryptographic protocol providing secure communications over a network |

---

*End of Document — [Organization Name] Cryptographic Algorithm Inventory*

*Document ID: [Organization Abbreviation]-ISMS-RPT-CRYPTO-[NNN] | Version: 1.0 | Classification: Confidential*