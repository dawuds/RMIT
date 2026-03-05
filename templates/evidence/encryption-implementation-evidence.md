# Encryption Implementation Evidence

---

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

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Approved Algorithms and Key Lengths](#5-approved-algorithms-and-key-lengths)
6. [Key Lifecycle Management](#6-key-lifecycle-management)
7. [HSM Usage Requirements](#7-hsm-usage-requirements)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

This document serves as formal evidence of encryption deployment across [Organization Name]'s systems, applications, and data stores in compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.22. It demonstrates that [Organization Name] has implemented and maintains appropriate cryptographic controls to protect the confidentiality, integrity, and authenticity of data assets.

This document is a mandatory compliance artifact and must be maintained as current evidence available for regulatory inspection, internal audit, and third-party assurance reviews.

### 1.1 Regulatory Basis

This evidence document is produced in direct response to the following regulatory obligations:

- **BNM RMiT Policy Document** — Clause 10.22: Cryptography
- **Personal Data Protection Act 2010 (PDPA)** — Security principle requirements for personal data
- **NACSA Cybersecurity Framework** — Cryptographic protection controls

### 1.2 Scope Statement

*Define the boundaries of encryption coverage assessed in this document. Include the systems, environments, business units, and data classifications within scope.*

This document covers encryption implementation evidence for the following:

- **In-scope environments:** [e.g., Production, Disaster Recovery, Pre-Production]
- **In-scope business units:** [e.g., Retail Banking, Treasury, Operations]
- **In-scope data classifications:** [e.g., Confidential, Restricted, Personal Data]
- **Excluded from scope:** [List any exclusions with justification]

### 1.3 Document Objectives

- Provide verifiable evidence that encryption is deployed across critical systems and data stores
- Demonstrate alignment with BNM RMiT Clause 10.22 requirements
- Record the cryptographic standards, key management practices, and hardware security controls in use
- Support internal audit, external audit, and regulatory examination activities

---

## 2. Assessment Scope and Criteria

*Describe the systems, data stores, and communication channels that were assessed for encryption compliance, along with the criteria used to evaluate adequacy. Enumerate every in-scope asset and the baseline standard each must meet.*

### 2.1 Assessment Overview

| Field | Details |
|---|---|
| **Assessment Period** | [Start Date] to [End Date] |
| **Assessment Type** | [Per-event / Quarterly / Annual] |
| **Triggered By** | [e.g., Quarterly review / New system deployment / Incident / Audit] |
| **Assessor(s)** | [Name(s), Title(s)] |
| **Assessment Reference** | [Assessment ID / Ticket Reference] |

### 2.2 In-Scope Systems and Data Stores

*List all systems, databases, storage volumes, and transmission channels assessed. Add rows as required.*

| # | System / Asset Name | Asset Type | Business Owner | Data Classification | Environment |
|---|---|---|---|---|---|
| 1 | [e.g., Core Banking System] | Application | [Owner Name] | Confidential | Production |
| 2 | [e.g., Customer Database] | Database | [Owner Name] | Personal Data / Restricted | Production |
| 3 | [e.g., Payment Gateway] | API / Service | [Owner Name] | Confidential | Production |
| 4 | [e.g., File Transfer Service] | Data-in-Transit | [Owner Name] | Restricted | Production |
| 5 | [e.g., Backup Storage] | Storage | [Owner Name] | Confidential | DR |
| 6 | [e.g., Employee Endpoint Devices] | Endpoint | [Owner Name] | Confidential | Corporate |

### 2.3 Assessment Criteria

*State the minimum encryption standards that each asset type must meet to be considered compliant. These criteria form the baseline against which findings are rated.*

Encryption adequacy is assessed against the following criteria:

**Data-at-Rest:**
- All Confidential and Restricted data must be encrypted using an approved algorithm at the required key length (refer to Section 5)
- Encryption must be enforced at the database, volume, or file level as appropriate
- Encryption must be enabled by default; opt-out is not permitted

**Data-in-Transit:**
- All data transmitted over public or untrusted networks must use TLS 1.2 or higher
- Internal service-to-service communication carrying Confidential data must be encrypted
- Legacy protocols (SSL, TLS 1.0, TLS 1.1) must be disabled

**Key Management:**
- Cryptographic keys must be managed in accordance with the [Organization Name] Cryptographic Key Management Policy
- HSM usage is mandatory for keys protecting Tier 1 and Tier 2 data assets

**Certificate Management:**
- All public-facing certificates must be issued by an approved Certificate Authority
- Certificates must be renewed before expiry; no expired certificates in production

---

## 3. Methodology

*Describe how the assessment was conducted, including the tools, techniques, evidence collection methods, and testing procedures used to verify encryption controls.*

### 3.1 Assessment Approach

The encryption implementation assessment was conducted using the following approach:

- **Configuration Review:** Direct inspection of encryption settings in system configurations, database parameters, storage policies, and network device configurations
- **Technical Testing:** Automated scanning and manual verification of encryption controls using approved tools
- **Documentation Review:** Review of architecture diagrams, data flow maps, and system security plans
- **Interview:** Structured interviews with system administrators and application owners
- **Evidence Collection:** Capture of configuration screenshots, scan reports, and attestation records

### 3.2 Tools and Techniques Used

| Tool / Technique | Purpose | Version / Reference |
|---|---|---|
| [e.g., Qualys SSL Labs / sslyze] | TLS configuration scanning | [Version] |
| [e.g., Nessus / OpenVAS] | Vulnerability and encryption gap scanning | [Version] |
| [e.g., Database configuration review scripts] | Database encryption parameter verification | [Reference] |
| [e.g., Cloud provider console / CLI] | Storage encryption policy verification | [Reference] |
| [e.g., Manual configuration walkthrough] | HSM and key management system review | N/A |
| [e.g., Certificate inventory tool] | Certificate expiry and algorithm review | [Version] |

### 3.3 Evidence Collection Standards

All evidence was collected in accordance with [Organization Name]'s evidence collection procedures. Evidence items are referenced by unique identifiers (EV-XXXX) and are retained in the compliance evidence repository at [Repository Location / Link] for a minimum of [Retention Period, e.g., 7 years] in accordance with BNM record-keeping requirements.

### 3.4 Limitations and Assumptions

*Document any constraints, access restrictions, or assumptions that may affect the completeness of this assessment.*

- [e.g., Access to production systems was limited to read-only; no active penetration testing was performed]
- [e.g., Legacy systems listed in Appendix A were assessed using documentation review only due to operational constraints]
- [e.g., Third-party hosted systems were assessed via vendor-provided attestations and penetration test reports]

---

## 4. Findings and Ratings

*Summarise the results of the encryption assessment across all in-scope assets. Assign a compliance rating to each asset and document any gaps or exceptions.*

### 4.1 Rating Scale

| Rating | Definition |
|---|---|
| **Compliant** | Encryption controls meet all applicable criteria; no gaps identified |
| **Partially Compliant** | Minor gaps identified; compensating controls in place; remediation planned |
| **Non-Compliant** | Significant gaps identified; data at risk; immediate remediation required |
| **Not Applicable** | Asset does not process or transmit data requiring encryption |
| **Exception Approved** | Formal exception granted; refer to Exception Register |

### 4.2 Encryption Compliance Summary

| # | System / Asset Name | Data-at-Rest | Data-in-Transit | Key Management | Overall Rating | Evidence Reference |
|---|---|---|---|---|---|---|
| 1 | [Core Banking System] | Compliant | Compliant | Compliant | **Compliant** | EV-0001 |
| 2 | [Customer Database] | Compliant | Compliant | Partially Compliant | **Partially Compliant** | EV-0002 |
| 3 | [Payment Gateway] | Compliant | Compliant | Compliant | **Compliant** | EV-0003 |
| 4 | [File Transfer Service] | N/A | Compliant | Compliant | **Compliant** | EV-0004 |
| 5 | [Backup Storage] | Partially Compliant | N/A | Compliant | **Partially Compliant** | EV-0005 |
| 6 | [Employee Endpoints] | Compliant | N/A | Compliant | **Compliant** | EV-0006 |

### 4.3 Findings Register

*Document each identified gap or weakness. Each finding must be assigned to an owner with a target remediation date.*

| Finding ID | System / Asset | Finding Description | Risk Rating | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| FIND-001 | [Customer Database] | [e.g., Key rotation has not been performed within the required 12-month cycle] | Medium | [e.g., Schedule and execute key rotation; update key management schedule] | [Name / Team] | [Date] | Open |
| FIND-002 | [Backup Storage] | [e.g., One backup volume on DR site not encrypted due to legacy storage system] | High | [e.g., Migrate to encrypted storage tier; interim compensating control applied] | [Name / Team] | [Date] | In Progress |
| FIND-003 | [TBC] | [Description] | [Critical / High / Medium / Low] | [Action] | [Owner] | [Date] | [Status] |

### 4.4 Overall Assessment Summary

| Metric | Value |
|---|---|
| Total assets assessed | [Number] |
| Compliant | [Number] ([%]) |
| Partially Compliant | [Number] ([%]) |
| Non-Compliant | [Number] ([%]) |
| Exceptions Approved | [Number] |
| Open Findings | [Number] |
| Critical / High Findings | [Number] |

---

## 5. Approved Algorithms and Key Lengths

*List all cryptographic algorithms approved for use within [Organization Name], aligned with BNM RMiT Clause 10.22 and current industry standards (e.g., NIST SP 800-131A). Algorithms not listed below are not approved for use without prior written approval from the CISO.*

### 5.1 Approved Symmetric Encryption Algorithms

| Algorithm | Approved Key Lengths | Approved Use Cases | Status | Notes |
|---|---|---|---|---|
| AES (Advanced Encryption Standard) | 128-bit, 192-bit, 256-bit | Data-at-rest, Data-in-transit, Application-level encryption | **Approved** | Preferred algorithm |
| 3DES (Triple DES) | 168-bit (3-key) | Legacy systems only | **Deprecated** | Phase-out by [Date]; no new implementations |
| DES | 56-bit | None | **Prohibited** | Must be replaced immediately |

### 5.2 Approved Asymmetric Encryption Algorithms

| Algorithm | Approved Key Lengths | Approved Use Cases | Status | Notes |
|---|---|---|---|---|
| RSA | 2048-bit minimum; 4096-bit preferred | Digital signatures, Key encapsulation, TLS certificates | **Approved** | 2048-bit minimum; 4096-bit for new implementations |
| ECDSA | P-256, P-384, P-521 curves | Digital signatures, TLS certificates | **Approved** | Preferred for new implementations |
| ECDH | P-256, P-384, P-521 curves | Key agreement | **Approved** | |
| DSA | 1024-bit | None | **Prohibited** | Must be replaced |

### 5.3 Approved Hash Functions

| Algorithm | Approved Output Lengths | Approved Use Cases | Status | Notes |
|---|---|---|---|---|
| SHA-2 | SHA-256, SHA-384, SHA-512 | Digital signatures, Integrity verification, HMAC | **Approved** | Preferred |
| SHA-3 | SHA3-256, SHA3-384, SHA3-512 | Digital signatures, Integrity verification | **Approved** | |
| SHA-1 | 160-bit | None | **Prohibited** | Must be replaced |
| MD5 | 128-bit | None | **Prohibited** | Must be replaced |

### 5.4 Approved TLS Protocols and Cipher Suites

| Protocol / Suite | Status | Notes |
|---|---|---|
| TLS 1.3 | **Approved — Preferred** | Mandatory for new implementations |
| TLS 1.2 | **Approved** | Permitted for existing systems; plan upgrade to TLS 1.3 |
| TLS 1.1 | **Prohibited** | Must be disabled |
| TLS 1.0 | **Prohibited** | Must be disabled |
| SSL (all versions) | **Prohibited** | Must be disabled |
| TLS_AES_256_GCM_SHA384 | **Approved** | TLS 1.3 cipher suite |
| TLS_CHACHA20_POLY1305_SHA256 | **Approved** | TLS 1.3 cipher suite |
| TLS_AES_128_GCM_SHA256 | **Approved** | TLS 1.3 cipher suite |
| ECDHE-RSA-AES256-GCM-SHA384 | **Approved** | TLS 1.2 cipher suite |
| RC4 (all variants) | **Prohibited** | Must be disabled |

### 5.5 Algorithm Exception Process

Any use of an algorithm not listed as **Approved** in this section, or any deviation from the specified key lengths, requires:

1. Submission of a formal Cryptographic Exception Request to the CISO
2. Risk assessment completed by the Information Security team
3. Written approval from the CISO and relevant Risk Committee
4. Time-bound exception with mandatory remediation plan
5. Registration in the Cryptographic Exception Register (Appendix B)

---

## 6. Key Lifecycle Management

*Document the controls and procedures governing the full lifecycle of cryptographic keys within [Organization Name], from generation through destruction. Evidence of compliance with each lifecycle phase should be referenced.*

### 6.1 Key Lifecycle Phases

The following lifecycle phases apply to all cryptographic keys used within [Organization Name]:

#### 6.1.1 Key Generation

| Control | Requirement | Evidence Reference |
|---|---|---|
| Randomness source | Keys must be generated using a FIPS 140-2 validated RNG or hardware entropy source | [EV-XXXX] |
| Generation environment | All Tier 1 keys must be generated within an HSM; Tier 2 keys may be generated in a secure software environment | [EV-XXXX] |
| Key ceremony | Master keys and root keys must be generated via a formal key ceremony with at least [N] authorised witnesses | [EV-XXXX] |
| Documentation | All key generation events must be logged and documented | [EV-XXXX] |

#### 6.1.2 Key Distribution and Storage

| Control | Requirement | Evidence Reference |
|---|---|---|
| Secure transmission | Keys must never be transmitted in plaintext; use key-wrapping or secure channel | [EV-XXXX] |
| Storage | Keys must be stored in encrypted form; Tier 1 keys must be stored in HSM | [EV-XXXX] |
| Split knowledge | Master keys must be split across at least [N] custodians using secret sharing (e.g., Shamir's Secret Sharing) | [EV-XXXX] |
| Access control | Key access must follow least privilege; access logs must be maintained | [EV-XXXX] |

#### 6.1.3 Key Rotation

| Key Type | Maximum Rotation Period | Last Rotation Date | Next Rotation Date | Evidence Reference |
|---|---|---|---|---|
| Data Encryption Keys (DEK) | [e.g., 12 months] | [Date] | [Date] | [EV-XXXX] |
| Key Encryption Keys (KEK) | [e.g., 24 months] | [Date] | [Date] | [EV-XXXX] |
| TLS / SSL Certificates | [e.g., 12 months or per CA policy] | [Date] | [Date] | [EV-XXXX] |
| Signing Keys | [e.g., 24 months] | [Date] | [Date] | [EV-XXXX] |
| Master Keys | [e.g., Upon compromise or personnel change] | [Date] | [Date] | [EV-XXXX] |

#### 6.1.4 Key Revocation and Suspension

*Describe the conditions and procedures for revoking or suspending keys, including compromise response procedures.*

Conditions triggering immediate key revocation include:

- Confirmed or suspected key compromise
- Departure of key custodian without proper handover
- System decommissioning or data migration
- Detection of unauthorised key access

Revocation procedure:
1. [Step 1: Notification to CISO and Key Management team]
2. [Step 2: Revocation recorded in Key Management System]
3. [Step 3: Re-encryption of affected data with replacement key]
4. [Step 4: Incident report raised and post-incident review conducted]

#### 6.1.5 Key Destruction

| Control | Requirement | Evidence Reference |
|---|---|---|
| Destruction method | Keys must be destroyed using zeroisation or approved cryptographic erasure | [EV-XXXX] |
| Verification | Destruction must be independently verified and witnessed | [EV-XXXX] |
| Record retention | Destruction records must be retained for [Retention Period] | [EV-XXXX] |

### 6.2 Key Inventory

*Maintain a current inventory of all active cryptographic keys. The full key inventory is maintained in the Key Management System at [KMS Reference / Location].*

| Key ID | Key Type | Algorithm | Key Length | Purpose | Custodian | Creation Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| KEY-001 | DEK | AES-256 | 256-bit | [e.g., Core Banking DB encryption] | [Name] | [Date] | [Date] | Active |
| KEY-002 | KEK | RSA | 4096-bit | [e.g., DEK wrapping] | [Name] | [Date] | [Date] | Active |
| KEY-003 | TLS Cert | ECDSA P-384 | 384-bit | [e.g., Public web portal] | [Name] | [Date] | [Date] | Active |
| KEY-004 | Signing Key | RSA | 2048-bit | [e.g., Transaction signing] | [Name] | [Date] | [Date] | Active |

---

## 7. HSM Usage Requirements

*Document the Hardware Security Module (HSM) deployment, configuration standards, and usage requirements applicable to [Organization Name]. HSMs are mandatory for protecting cryptographic keys associated with critical and high-value assets.*

### 7.1 HSM Deployment Overview

| Field | Details |
|---|---|
| **HSM Vendor / Model** | [e.g., Thales Luna Network HSM 7 / nCipher nShield] |
| **FIPS Validation Level** | [e.g., FIPS 140-2 Level 3] |
| **Number of HSM Units (Production)** | [Number] |
| **Number of HSM Units (DR)** | [Number] |
| **HSM Firmware Version** | [Version] |
| **Last Firmware Update** | [Date] |
| **HSM Location (Production)** | [Data Centre Name / Location] |
| **HSM Location (DR)** | [DR Site Name / Location] |
| **HSM Administrator** | [Name / Team] |
| **Evidence Reference** | [EV-XXXX] |

### 7.2 Mandatory HSM Usage

The following key types and operations **must** be performed within or protected by an HSM:

| Key / Operation Type | HSM Requirement | Justification |
|---|---|---|
| Master Keys (Root Keys) | Generation and storage mandatory in HSM | Highest value keys; compromise would affect all derived keys |
| Key Encryption Keys (KEK) | Generation and storage mandatory in HSM | Protects all data encryption keys |
| Payment transaction keys (PINs, CVV) | Mandatory (PCI-DSS and BNM requirement) | Regulatory and scheme requirement |
| Digital signing keys for regulatory submissions | Mandatory | Non-repudiation and integrity of regulatory communications |
| Certificate Authority (CA) keys | Mandatory | Integrity of entire PKI infrastructure |
| [Other high-value keys as applicable] | [As assessed] | [Justification] |

### 7.3 HSM Access Controls

| Control | Requirement | Evidence Reference |
|---|---|---|
| Authentication | Multi-factor authentication required for all HSM administrative access | [EV-XXXX] |
| Dual control | All sensitive HSM operations must require at least two authorised administrators | [EV-XXXX] |
| Access logging | All HSM access and operations must be logged to a tamper-evident audit log | [EV-XXXX] |
| Physical security | HSM must be housed in a physically secured server room; access logged | [EV-XXXX] |
| Remote access | Remote HSM administration is prohibited unless via approved secured management network | [EV-XXXX] |
| Custodian smartcards | HSM administrator smartcards must be stored securely; lost cards reported immediately | [EV-XXXX] |

### 7.4 HSM Operational Evidence

*The following evidence items confirm current HSM operational status and compliance.*

| Evidence Item | Reference | Date Collected | Collected By |
|---|---|---|---|
| HSM configuration report | [EV-XXXX] | [Date] | [Name] |
| HSM audit log extract (last quarter) | [EV-XXXX] | [Date] | [Name] |
| HSM health check report | [EV-XXXX] | [Date] | [Name] |
| Physical access log (HSM room) | [EV-XXXX] | [Date] | [Name] |
| HSM administrator access review | [EV-XXXX] | [Date] | [Name] |
| Last successful failover / DR test | [EV-XXXX] | [Date] | [Name] |

### 7.5 HSM Exception Process

Where HSM usage is technically infeasible for a specific key or operation, a formal exception must be approved by the CISO. Compensating controls must be documented and approved. All exceptions are recorded in the Cryptographic Exception Register (Appendix B).

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for encryption implementation and evidence maintenance activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | Head of Cryptography | IT Security Team | System / Application Owners | Internal Audit | Risk Management | IT Operations |
|---|---|---|---|---|---|---|---|
| Define cryptographic standards and approved algorithms | A | R | C | I | I | C | I |
| Approve cryptographic exceptions | A | R | C | C | I | C | I |
| Conduct encryption assessment | A | R | R | C | I | I | C |
| Maintain key inventory and lifecycle records | I | A | R | C | I | I | C |
| Operate and administer HSMs | A | C | R | I | I | I | R |
| Implement encryption controls on systems | I | C | C | R | I | I | A |
| Review and approve this document | A | R | C | I | C | C | I |
| Report non-compliance findings | A | R | R | C | C | C | I |
| Remediate identified encryption gaps | I | C | C | R | I | I | R |
| Conduct periodic review of this document | A | R | C | I | C | I | I |

---

## 9. Review and Approval

### 9.1 Review Frequency

This document is subject to review:

- **Quarterly** as part of the standard compliance review cycle
- **Per-event**, triggered by any of the following:
  - New system or application deployment
  - Significant change to existing system architecture
  - Cryptographic compromise or incident
  - Material change to regulatory requirements (BNM RMiT updates)
  - External or internal audit finding related to cryptography
  - Change in key personnel (CISO, Head of Cryptography, Key Custodians)

### 9.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial document creation |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of changes] |

### 9.3 Approval Sign-Off

*This document requires approval from the following roles before it is considered effective. By signing below, the approver confirms that the content of this document is accurate, complete, and meets regulatory obligations as at the stated date.*

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO | [Full Name] | __________________ | [Date] |
| Head of Cryptography | [Full Name] | __________________ | [Date] |
| Chief Risk Officer | [Full Name] | __________________ | [Date] |
| Head of IT Audit (Reviewer) | [Full Name] | __________________ | [Date] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.22 | Cryptography — requirements for the use of cryptographic controls including algorithm standards, key management, and HSM usage |
| BNM RMiT | Clause 10.20–10.21 | Related access control and data protection requirements |
| PDPA 2010 | Security Principle (Section 9) | Security measures for personal data processing, including encryption of personal data |
| NACSA Cybersecurity Framework | Cryptographic Protection Controls | National cryptographic control requirements for critical information infrastructure |
| NIST SP 800-131A Rev. 2 | Transitioning the Use of Cryptographic Algorithms and Key Lengths | Reference standard for algorithm and key length approvals |
| NIST SP 800-57 | Recommendation for Key Management | Key lifecycle management best practices |
| ISO/IEC 27001:2022 | Annex A Control 8.24 | Use of cryptography |
| PCI DSS v4.0 | Requirements 3 and 4 | Protect stored cardholder data; encrypt transmission of cardholder data (where applicable) |
| [Organization Name] Cryptographic Key Management Policy | [Policy ID] | Internal policy governing cryptographic key lifecycle |
| [Organization Name] Information Classification Policy | [Policy ID] | Defines data classification tiers referenced in this document |

---

## 11. Appendices

### Appendix A — Legacy System Encryption Status

*List systems that have been granted a time-limited exception from full encryption compliance due to technical constraints. Each system must have an approved exception, an identified risk owner, and a mandatory remediation plan with target date.*

| System Name | Owner | Encryption Gap | Risk Rating | Compensating Control | Approved By | Exception Expiry | Remediation Plan |
|---|---|---|---|---|---|---|---|
| [System Name] | [Owner] | [Description of gap] | [High/Med/Low] | [Control description] | [Approver] | [Date] | [Remediation plan summary] |
| [System Name] | [Owner] | [Description of gap] | [High/Med/Low] | [Control description] | [Approver] | [Date] | [Remediation plan summary] |

### Appendix B — Cryptographic Exception Register

*All approved exceptions to the cryptographic standards defined in Section 5 and Section 7 must be recorded here.*

| Exception ID | Date Raised | System / Asset | Non-Standard Algorithm / Configuration | Business Justification | Risk Assessment | CISO Approval | Expiry Date | Remediation Plan |
|---|---|---|---|---|---|---|---|---|
| EXC-001 | [Date] | [System] | [e.g., RSA 1024-bit legacy integration] | [Justification] | [Risk level] | [Date] | [Date] | [Plan] |

### Appendix C — Evidence Inventory

*A complete list of evidence items collected during this assessment. All items are retained in [Repository Name/Location].*

| Evidence ID | Description | System / Asset | Date Collected | Collected By | Retention Expiry | Location |
|---|---|---|---|---|---|---|
| EV-0001 | [e.g., Core Banking DB encryption configuration screenshot] | [System] | [Date] | [Name] | [Date] | [Location/Path] |
| EV-0002 | [e.g., TLS scan report — Customer Portal] | [System] | [Date] | [Name] | [Date] | [Location/Path] |
| EV-0003 | [e.g., HSM audit log extract Q[X] [Year]] | HSM | [Date] | [Name] | [Date] | [Location/Path] |
| EV-0004 | [e.g., Key rotation confirmation — Core Banking DEK] | [System] | [Date] | [Name] | [Date] | [Location/Path] |

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **AES** | Advanced Encryption Standard — a symmetric block cipher approved by NIST |
| **CA** | Certificate Authority — an entity that issues digital certificates |
| **DEK** | Data Encryption Key — a key used directly to encrypt data |
| **ECDSA** | Elliptic Curve Digital Signature Algorithm |
| **FIPS** | Federal Information Processing Standard — US government computer security standards |
| **HSM** | Hardware Security Module — a dedicated hardware device for cryptographic key protection and operations |
| **KEK** | Key Encryption Key — a key used to encrypt other keys |
| **PKI** | Public Key Infrastructure — the framework for digital certificates and public-key cryptography |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk |
| **RSA** | Rivest–Shamir–Adleman — an asymmetric cryptographic algorithm |
| **TLS** | Transport Layer Security — a cryptographic protocol for securing network communications |
| **Zeroisation** | The process of securely erasing cryptographic keys by overwriting with zeros or random data |

---

*This document is classified as **Confidential**. It must not be distributed outside [Organization Name] without the written approval of the CISO. Any printed copies are uncontrolled and must be destroyed securely when no longer required.*

*Document ID: [Document ID] | Version: 1.0 | Owner: CISO / Head of Cryptography | [Organization Name]*