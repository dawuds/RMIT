# Cryptographic Standards Alignment Mapping

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
| **Document Status** | [Draft / Under Review / Approved] |

---

> **Handling Instructions:** This document is classified **Confidential**. It must not be distributed outside [Organization Name] without the written consent of the document owner. Physical copies must be stored in a secured location. Electronic copies must be encrypted at rest and in transit.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Policy Statements and Requirements](#4-policy-statements-and-requirements)
5. [Approved Cryptographic Algorithms and Key Lengths](#5-approved-cryptographic-algorithms-and-key-lengths)
6. [Key Lifecycle Management](#6-key-lifecycle-management)
7. [HSM Usage Requirements](#7-hsm-usage-requirements)
8. [Standards Alignment Mapping](#8-standards-alignment-mapping)
9. [Compliance Gap Analysis](#9-compliance-gap-analysis)
10. [Exceptions and Waivers](#10-exceptions-and-waivers)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the overarching intent of this document and the problem it addresses within the organization's security posture.*

This document establishes [Organization Name]'s formal mapping of its Cryptographic Policy and associated controls to recognized international standards, including the National Institute of Standards and Technology (NIST) Special Publications and the International Organization for Standardization / International Electrotechnical Commission (ISO/IEC) standards. It provides documented evidence of alignment required under **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.20**, which mandates that financial institutions adopt and maintain cryptographic controls consistent with internationally recognized best practices.

This mapping document serves as a primary audit artifact demonstrating that [Organization Name]'s cryptographic posture is grounded in sound, independently validated standards, and that deviations — where they exist — are formally documented, risk-assessed, and approved.

### 1.2 Scope

*Define the boundaries of applicability — which systems, data types, business units, and technologies are covered.*

This document applies to:

- **Systems and Platforms:** All information systems, applications, infrastructure components, and cloud services owned, operated, or managed by [Organization Name] that process, transmit, or store sensitive or regulated data, including customer data, payment data, and internal confidential information.
- **Data Classifications:** All data classified as **Restricted**, **Confidential**, or **Internal** under [Organization Name]'s Data Classification Policy.
- **Business Units:** All business units and subsidiaries of [Organization Name] operating within Malaysia and in jurisdictions where [Organization Name] maintains licensed operations.
- **Third Parties:** Vendors, managed service providers, cloud service providers, and technology partners who process data on behalf of [Organization Name] under contractual obligation.
- **Personnel:** All employees, contractors, and consultants with access to systems or data in scope.

### 1.3 Regulatory Context

*Reference the specific regulatory obligations driving the creation and maintenance of this document.*

This document has been produced in response to the following regulatory obligations:

| Regulation / Standard | Issuing Body | Relevant Clause / Section | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.20 | Adoption of international cryptographic standards |
| RMiT Policy Document | Bank Negara Malaysia (BNM) | Clause 10.18 – 10.22 | Cryptographic controls for data protection |
| Personal Data Protection Act 2010 (PDPA) | Government of Malaysia | Section 9 – Security Principle | Protection of personal data using appropriate security measures |
| Guidelines on Digital Insurance and Takaful | BNM | [Applicable Clauses] | [If applicable to entity type] |

---

## 2. Definitions and Abbreviations

*Provide clear definitions for all technical and regulatory terms used throughout this document to ensure consistent interpretation by auditors, reviewers, and implementers.*

### 2.1 Key Definitions

| Term | Definition |
|---|---|
| **Algorithm** | A well-defined computational procedure used to perform cryptographic operations such as encryption, decryption, hashing, or digital signing. |
| **Asymmetric Cryptography** | A cryptographic system using a mathematically related key pair: a public key for encryption or signature verification, and a private key for decryption or signing. |
| **Certificate Authority (CA)** | An entity trusted to issue, sign, manage, and revoke digital certificates that bind public keys to identities. |
| **Cipher Suite** | A combination of algorithms used together to provide encryption, authentication, and integrity in a cryptographic protocol (e.g., TLS). |
| **Cryptographic Key** | A piece of data used to control the operation of a cryptographic algorithm. |
| **Data-at-Rest** | Data stored persistently on any medium, including databases, file systems, backup tapes, and removable media. |
| **Data-in-Transit** | Data being transmitted across a network or communication channel between systems. |
| **Hardware Security Module (HSM)** | A dedicated hardware device that safeguards and manages cryptographic keys and performs cryptographic operations within a tamper-resistant environment. |
| **Key Ceremony** | A formal, audited procedure for generating, distributing, or destroying cryptographic key material, typically requiring dual control and split knowledge. |
| **Key Escrow** | A process in which copies of cryptographic keys are held in custody by a designated third party. |
| **Key Management System (KMS)** | A system that provides lifecycle management of cryptographic keys, including generation, storage, distribution, rotation, and destruction. |
| **Perfect Forward Secrecy (PFS)** | A property of a key agreement protocol in which session keys are not compromised even if long-term secrets are compromised in the future. |
| **Post-Quantum Cryptography (PQC)** | Cryptographic algorithms designed to be secure against attacks by both classical and quantum computers. |
| **Symmetric Cryptography** | Cryptography in which the same key is used for both encryption and decryption. |
| **TLS** | Transport Layer Security — a cryptographic protocol providing secure communication over a network. |

### 2.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| AES | Advanced Encryption Standard |
| BNM | Bank Negara Malaysia |
| CA | Certificate Authority |
| CISO | Chief Information Security Officer |
| CRL | Certificate Revocation List |
| CSP | Cryptographic Service Provider |
| DH | Diffie-Hellman |
| DSA | Digital Signature Algorithm |
| ECC | Elliptic Curve Cryptography |
| ECDH | Elliptic Curve Diffie-Hellman |
| ECDSA | Elliptic Curve Digital Signature Algorithm |
| FIPS | Federal Information Processing Standard |
| HMAC | Hash-based Message Authentication Code |
| HSM | Hardware Security Module |
| ISO | International Organization for Standardization |
| KMS | Key Management System |
| MAC | Message Authentication Code |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| NIST | National Institute of Standards and Technology |
| OCSP | Online Certificate Status Protocol |
| OTP | One-Time Password |
| PBKDF | Password-Based Key Derivation Function |
| PFS | Perfect Forward Secrecy |
| PKI | Public Key Infrastructure |
| PQC | Post-Quantum Cryptography |
| PRNG | Pseudo-Random Number Generator |
| RMiT | Risk Management in Technology |
| RSA | Rivest–Shamir–Adleman |
| SHA | Secure Hash Algorithm |
| TLS | Transport Layer Security |

---

## 3. Roles and Responsibilities

### 3.1 Overview

*Define the personnel and functions accountable for implementing, maintaining, and reviewing the cryptographic controls described in this document. Ensure that all roles align with [Organization Name]'s organizational structure.*

The following roles hold responsibilities in relation to this document and the cryptographic controls it governs. Accountability is allocated using the **RACI framework**: **R** = Responsible (performs the work), **A** = Accountable (ultimate ownership), **C** = Consulted (provides input), **I** = Informed (notified of outcomes).

### 3.2 RACI Matrix

| Activity | CISO | Head of Cryptography | IT Security Team | IT Infrastructure / Operations | Risk & Compliance | Internal Audit | Business Unit Heads | Vendor / Third Party |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Cryptographic policy ownership and approval | A | R | C | I | C | I | I | — |
| Standards alignment mapping maintenance | A | R | C | I | C | I | I | — |
| Approved algorithm list maintenance | A | R | R | C | C | I | I | — |
| Cryptographic key generation | A | R | R | C | I | I | I | C |
| Key storage and HSM management | A | C | R | R | I | I | I | C |
| Key rotation and renewal | A | R | R | R | I | I | I | C |
| Key destruction and archival | A | R | R | C | C | I | I | I |
| Certificate management (PKI) | A | R | R | R | I | I | I | C |
| Cryptographic incident response | A | R | R | C | C | I | I | I |
| Vendor cryptographic compliance assessment | A | C | R | C | R | I | C | I |
| Exception and waiver review | A | R | C | C | R | I | C | — |
| Annual review of this document | A | R | C | I | C | I | I | — |
| Audit evidence provision | I | R | R | R | C | A | I | C |

### 3.3 Role Descriptions

| Role | Name / Function | Responsibilities |
|---|---|---|
| **CISO** | [Name / Title] | Ultimate accountability for cryptographic policy; approves exceptions; escalates material risks to Board. |
| **Head of Cryptography / Cryptographic Officer** | [Name / Title] | Day-to-day ownership of cryptographic standards; maintains this mapping document; conducts annual review; chairs key ceremonies. |
| **IT Security Team** | [Team Name] | Implements and enforces cryptographic controls across systems; monitors compliance; responds to cryptographic incidents. |
| **IT Infrastructure / Operations** | [Team Name] | Operates HSMs, KMS, and PKI infrastructure; executes key rotation procedures; manages certificate lifecycle. |
| **Risk & Compliance** | [Team Name] | Reviews alignment with regulatory requirements; supports audit readiness; maintains exception register. |
| **Internal Audit** | [Team Name] | Independent verification of cryptographic control effectiveness; reviews key management procedures. |
| **Business Unit Heads** | [Role] | Ensure systems under their ownership comply with this policy; escalate non-compliance. |

---

## 4. Policy Statements and Requirements

### 4.1 General Cryptographic Policy

*State the foundational policy positions of [Organization Name] with respect to the use of cryptography across all systems and data in scope.*

[Organization Name] mandates the use of strong, industry-validated cryptographic controls across all systems and data in scope. The following policy statements apply:

1. **Standard Compliance:** All cryptographic implementations within [Organization Name] **must** align with the algorithms, key lengths, and protocols approved in Section 5 of this document, which are derived from NIST and ISO/IEC standards.

2. **Prohibition of Deprecated Algorithms:** The use of cryptographic algorithms classified as deprecated or broken — including but not limited to DES, 3DES (in new implementations), RC4, MD5 (for integrity), SHA-1 (for digital signatures), and export-grade ciphers — is **strictly prohibited** in new system deployments and must be remediated in legacy systems on a risk-prioritized schedule.

3. **Data-at-Rest Encryption:** All data classified as Restricted or Confidential, as defined in [Organization Name]'s Data Classification Policy, **must** be encrypted at rest using an approved algorithm at the required key strength.

4. **Data-in-Transit Encryption:** All transmission of sensitive or regulated data across untrusted networks **must** be protected using TLS 1.2 or higher. TLS 1.3 is the preferred standard for all new implementations.

5. **Key Management:** All cryptographic keys **must** be managed in accordance with Section 6 (Key Lifecycle Management) of this document. Keys must never be stored in plaintext within application code, configuration files, or version control systems.

6. **Hardware Security Modules:** Cryptographic keys for critical systems — as defined in Section 7 — **must** be generated, stored, and managed within a FIPS 140-2 Level 3 or higher validated HSM.

7. **Certificate Management:** All digital certificates used within [Organization Name] systems **must** be issued by an approved Certificate Authority and managed through the organization's PKI framework.

8. **Post-Quantum Readiness:** [Organization Name] **must** maintain awareness of the NIST Post-Quantum Cryptography standardization process and initiate a migration roadmap upon official NIST publication of PQC standards applicable to financial institutions.

9. **Third-Party Compliance:** All third-party service providers and vendors processing [Organization Name] data **must** demonstrate compliance with this policy, or an equivalent standard acceptable to the CISO, as a condition of engagement.

10. **Incident Response:** Any suspected or confirmed compromise of cryptographic keys or algorithms **must** be reported to the IT Security Team and CISO within [X hours] and handled in accordance with [Organization Name]'s Incident Response Policy.

### 4.2 Minimum Cryptographic Baseline Requirements

*The following baseline requirements apply across all systems in scope. Systems failing to meet the baseline must be formally registered in the Exception Register (Section 10) with a documented remediation plan.*

| Requirement Area | Minimum Baseline | Target Standard | Enforcement Date |
|---|---|---|---|
| Symmetric encryption (data-at-rest) | AES-128 | AES-256 | [Date] |
| Symmetric encryption (data-in-transit) | AES-128 (within TLS) | AES-256-GCM (within TLS 1.3) | [Date] |
| Asymmetric encryption (RSA) | RSA-2048 | RSA-4096 | [Date] |
| Elliptic curve cryptography | P-256 (NIST) | P-384 or P-521 | [Date] |
| Hashing (general integrity) | SHA-256 | SHA-384 or SHA-512 | [Date] |
| Hashing (password storage) | bcrypt (cost factor ≥ 10) | Argon2id | [Date] |
| TLS protocol version | TLS 1.2 | TLS 1.3 | [Date] |
| Digital signatures | RSA-2048 / ECDSA P-256 | RSA-4096 / ECDSA P-384 | [Date] |
| Key agreement | DH-2048 / ECDH P-256 | ECDH P-384 with PFS | [Date] |

---

## 5. Approved Cryptographic Algorithms and Key Lengths

### 5.1 Overview

*This section constitutes the official approved algorithm register for [Organization Name]. Only algorithms listed in this section may be used in production systems without a formal exception. This register must be reviewed and updated at least annually, or following any material NIST or ISO update.*

### 5.2 Symmetric Encryption Algorithms

| Algorithm | Key Length | Mode of Operation | Status | Use Case | NIST Reference | ISO Reference |
|---|---|---|---|---|---|---|
| AES | 256-bit | GCM | **Approved — Preferred** | Data-at-rest, data-in-transit, TLS | NIST FIPS 197, SP 800-38D | ISO/IEC 18033-3 |
| AES | 192-bit | GCM | **Approved** | Data-at-rest | NIST FIPS 197 | ISO/IEC 18033-3 |
| AES | 128-bit | GCM / CBC | **Approved — Minimum** | Legacy systems with documented exception | NIST FIPS 197 | ISO/IEC 18033-3 |
| AES | 128/256-bit | CBC | **Approved with caveat** | Requires proper IV management; prefer GCM | NIST SP 800-38A | ISO/IEC 18033-3 |
| ChaCha20-Poly1305 | 256-bit | Stream (AEAD) | **Approved** | Mobile and resource-constrained environments | RFC 8439 | — |
| 3DES (TDEA) | 112-bit effective | CBC | **Deprecated — Remediation Required** | Legacy payment systems only; must migrate by [Date] | NIST SP 800-67 Rev 2 | ISO/IEC 18033-3 |
| DES | 56-bit | Any | **Prohibited** | No approved use case | — | — |
| RC4 | Any | Stream | **Prohibited** | No approved use case | — | — |

### 5.3 Asymmetric Encryption and Key Agreement Algorithms

| Algorithm | Key / Curve Size | Status | Use Case | NIST Reference | ISO Reference |
|---|---|---|---|---|---|
| RSA | 4096-bit | **Approved — Preferred** | Key encapsulation, digital signatures | NIST SP 800-131A Rev 2 | ISO/IEC 18033-2 |
| RSA | 3072-bit | **Approved** | Digital signatures, certificates | NIST SP 800-131A Rev 2 | ISO/IEC 18033-2 |
| RSA | 2048-bit | **Approved — Minimum** | Legacy systems; certificates expiring by [Date] | NIST SP 800-131A Rev 2 | ISO/IEC 18033-2 |
| RSA | < 2048-bit | **Prohibited** | No approved use case | — | — |
| ECDH | P-384 (NIST) | **Approved — Preferred** | Key agreement, TLS | NIST SP 800-56A Rev 3 | ISO/IEC 15946-3 |
| ECDH | P-256 (NIST) | **Approved** | Key agreement, TLS (minimum) | NIST SP 800-56A Rev 3 | ISO/IEC 15946-3 |
| ECDH | Curve25519 | **Approved** | Key agreement (non-certificate use cases) | RFC 7748 | — |
| DH | 3072-bit | **Approved** | Key agreement | NIST SP 800-56A Rev 3 | ISO/IEC 11770-4 |
| DH | 2048-bit | **Approved — Minimum** | Legacy key agreement | NIST SP 800-56A Rev 3 | ISO/IEC 11770-4 |
| DH | < 2048-bit | **Prohibited** | No approved use case | — | — |

### 5.4 Digital Signature Algorithms

| Algorithm | Key / Curve Size | Hash Algorithm | Status | Use Case | NIST Reference | ISO Reference |
|---|---|---|---|---|---|---|
| ECDSA | P-384 | SHA-384 | **Approved — Preferred** | Code signing, certificates, document signing | NIST FIPS 186-5 | ISO/IEC 14888-3 |
| ECDSA | P-256 | SHA-256 | **Approved** | Certificates, TLS, code signing | NIST FIPS 186-5 | ISO/IEC 14888-3 |
| RSA-PSS | 4096-bit | SHA-384 | **Approved — Preferred** | Document signing, certificates | NIST FIPS 186-5 | ISO/IEC 9796-3 |
| RSA-PSS | 2048-bit | SHA-256 | **Approved — Minimum** | Legacy digital signatures | NIST FIPS 186-5 | ISO/IEC 9796-3 |
| RSA-PKCS#1 v1.5 | 2048-bit | SHA-256 | **Approved with caveat** | Legacy TLS only; no new implementations | NIST SP 800-131A Rev 2 | — |
| Ed25519 | 255-bit (Curve25519) | SHA-512 (internal) | **Approved** | SSH keys, non-certificate signing | RFC 8032 | — |
| DSA | 1024-bit | SHA-1 | **Prohibited** | No approved use case | — | — |

### 5.5 Cryptographic Hash Functions

| Algorithm | Output Size | Status | Use Case | NIST Reference | ISO Reference |
|---|---|---|---|---|---|
| SHA-512 | 512-bit | **Approved — Preferred** | General integrity, digital signatures | NIST FIPS 180-4 | ISO/IEC 10118-3 |
| SHA-384 | 384-bit | **Approved — Preferred** | Digital signatures, TLS | NIST FIPS 180-4 | ISO/IEC 10118-3 |
| SHA-256 | 256-bit | **Approved** | General integrity, HMAC, certificates | NIST FIPS 180-4 | ISO/IEC 10118-3 |
| SHA3-256 / SHA3-512 | 256/512-bit | **Approved** | General integrity, PQC-aligned use cases | NIST FIPS 202 | ISO/IEC 10118-3 |
| BLAKE2 | 256/512-bit | **Approved** | Non-regulatory use cases (internal tooling) | RFC 7693 | — |
| SHA-1 | 160-bit | **Deprecated — Prohibited for signing** | Legacy verification of existing data only | — | — |
| MD5 | 128-bit | **Prohibited** | No approved use case | — | — |

### 5.6 Message Authentication Codes (MAC)

| Algorithm | Key Length | Status | Use Case | NIST Reference | ISO Reference |
|---|---|---|---|---|---|
| HMAC-SHA-256 | 256-bit | **Approved — Minimum** | API authentication, data integrity | NIST FIPS 198-1 | ISO/IEC 9797-2 |
| HMAC-SHA-384 | 384-bit | **Approved — Preferred** | High-assurance integrity | NIST FIPS 198-1 | ISO/IEC 9797-2 |
| HMAC-SHA-512 | 512-bit | **Approved** | High-assurance integrity | NIST FIPS 198-1 | ISO/IEC 9797-2 |
| AES-CMAC | 128/256-bit | **Approved** | Hardware token authentication | NIST SP 800-38B | ISO/IEC 9797-1 |
| AES-GCM (GMAC) | 128/256-bit | **Approved** | Authenticated encryption | NIST SP 800-38D | ISO/IEC 19772 |
| HMAC-MD5 | Any | **Prohibited** | No approved use case | — | — |

### 5.7 Password-Based Key Derivation and Password Hashing

| Algorithm | Parameters | Status | Use Case | NIST Reference | ISO Reference |
|---|---|---|---|---|---|
| Argon2id | Memory ≥ 64MB, iterations ≥ 3, parallelism ≥ 4 | **Approved — Preferred** | Password hashing, credential storage | NIST SP 800-63B (informative) | RFC 9106 |
| bcrypt | Cost factor ≥ 12 | **Approved** | Password hashing (legacy systems) | — | — |
| PBKDF2-HMAC-SHA256 | Iterations ≥ 600,000 | **Approved** | Key derivation from passwords | NIST SP 800-132 | ISO/IEC 18033-2 |
| scrypt | N ≥ 32768, r = 8, p = 1 | **Approved** | Password hashing, key derivation | RFC 7914 | — |
| MD5 (password) | Any | **Prohibited** | No approved use case | — | — |
| SHA-1 (password, unsalted) | Any | **Prohibited** | No approved use case | — | — |

### 5.8 Transport Layer Security (TLS) Protocols and Cipher Suites

#### 5.8.1 Approved TLS Protocol Versions

| Protocol Version | Status | Notes |
|---|---|---|
| TLS 1.3 | **Approved — Preferred** | Mandatory for all new implementations from [Date] |
| TLS 1.2 | **Approved — Minimum** | Permitted for existing systems; migration plan required |
| TLS 1.1 | **Prohibited** | Must be disabled on all systems |
| TLS 1.0 | **Prohibited** | Must be disabled on all systems |
| SSL 3.0 and below | **Prohibited** | Must be disabled on all systems |

#### 5.8.2 Approved TLS 1.3 Cipher Suites

| Cipher Suite | Status |
|---|---|
| TLS_AES_256_GCM_SHA384 | **Approved — Preferred** |
| TLS_CHACHA20_POLY1305_SHA256 | **Approved** |
| TLS_AES_128_GCM_SHA256 | **Approved — Minimum** |

#### 5.8.3 Approved TLS 1.2 Cipher Suites

| Cipher Suite | Status |
|---|---|
| TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 | **Approved — Preferred** |
| TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 | **Approved — Preferred** |
| TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 | **Approved** |
| TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 | **Approved** |
| TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 | **Approved** |
| TLS_RSA_WITH_AES_256_GCM_SHA384 | **Approved — No PFS** (legacy only) |
| TLS_RSA_WITH_AES_128_GCM_SHA256 | **Approved — No PFS** (legacy only) |
| Any cipher suite using RC4, DES, 3DES, or NULL | **Prohibited** |
| Any cipher suite using export-grade keys | **Prohibited** |

---

## 6. Key Lifecycle Management

### 6.1 Overview

*This section defines the mandatory procedures governing every phase of a cryptographic key's existence, from generation through destruction. All procedures must be documented, auditable, and performed under dual control where specified.*

[Organization Name] manages cryptographic keys in accordance with **NIST SP 800-57** (Recommendation for Key Management) and **ISO/IEC 11770** (Key Management), ensuring that keys are protected throughout their lifecycle to prevent unauthorized disclosure, modification, or use.

### 6.2 Key Classification

*All keys managed by [Organization Name] must be classified according to the following taxonomy before any lifecycle procedures are applied.*

| Key Class | Description | Examples | Required Protection Level |
|---|---|---|---|
| **Class 1 — Critical** | Keys whose compromise would have catastrophic impact | Root CA private keys, HSM master keys, payment encryption keys | FIPS 140-2 Level 3 HSM; dual control; key ceremony required |
| **Class 2 — High** | Keys protecting sensitive customer or financial data | Database encryption keys, TLS private keys for external services, code signing keys | FIPS 140-2 Level 2+ HSM or equivalent; dual control |
| **Class 3 — Medium** | Keys protecting internal systems and applications | Internal API keys, application-layer encryption keys, internal TLS keys | KMS with access controls; audit logging |
| **Class 4 — Low** | Keys with limited exposure or short lifespan | Session tokens, ephemeral keys, development/test keys | Software protection; segregation from production |

### 6.3 Key Lifecycle Phases

#### 6.3.1 Key Generation

*Define the requirements for generating new cryptographic keys, ensuring sufficient entropy and appropriate generation environments.*

- All keys **must** be generated using a FIPS 140-2 validated cryptographic random number generator (RNG) or TRNG (True Random Number Generator) within an HSM.
- Class 1 and Class 2 keys **must** be generated within an approved HSM. Keys must never be generated outside the HSM and imported.
- Key generation for Class 1 keys **must** be performed as a formal **Key Ceremony** (see Section 6.8) with at least [N] custodians present and a documented ceremony record.
- Key length and algorithm must conform to Section 5 of this document at the time of generation.

| Key Class | Generation Environment | Minimum Personnel | Documentation Required |
|---|---|---|---|
| Class 1 | FIPS 140-2 Level 3 HSM | 3 custodians (dual control + witness) | Ceremony record, signed by all participants |
| Class 2 | FIPS 140-2 Level 2+ HSM or approved KMS | 2 custodians (dual control) | Key generation log, custodian sign-off |
| Class 3 | Approved KMS | 1 operator (system automated) | Automated audit log |
| Class 4 | Software PRNG (FIPS validated) | 1 operator | Audit log |

#### 6.3.2 Key Registration and Inventory

*All keys must be registered in the centralized Key Management Inventory upon generation.*

Each key registered in [Organization Name]'s Key Management Inventory **must** include the following metadata:

- Unique Key Identifier (Key ID)
- Key class and classification
- Algorithm and key length
- Purpose and authorized use cases
- Owning system / application
- Date of generation
- Key custodian(s)
- Activation date
- Scheduled rotation / expiry date
- Current status (Pre-activation / Active / Suspended / Deactivated / Destroyed)

#### 6.3.3 Key Distribution and Activation

*Define how keys are securely distributed to authorized systems and personnel.*

- Keys **must** never be transmitted in plaintext. Key distribution must use key-wrapping (e.g., AES Key Wrap per RFC 3394) or secure channels established with approved protocols.
- Key activation must be authorized by an approved key custodian and logged in the KMS.
- Keys must only be activated for their designated purpose and within their approved cryptoperiod.
- Split knowledge and dual control principles apply to all Class 1 and Class 2 key activations.

| Cryptoperiod (Maximum Active Life) | Key Type |
|---|---|
| 1 year | Symmetric data encryption keys (Class 1–2) |
| 2 years | Asymmetric key pairs (certificates) — subject to CA policy |
| 90 days | TLS server certificates (as per CA/Browser Forum requirements) |
| 1 year | Code signing keys |
| 24 hours | Session keys / ephemeral keys |
| [Define] | API authentication keys |

#### 6.3.4 Key Storage

*Keys must be stored in a manner that prevents unauthorized access while maintaining availability for authorized use.*

- Class 1 keys: **must** reside exclusively within an approved FIPS 140-2 Level 3 HSM at all times. Plaintext key material must never leave the HSM boundary.
- Class 2 keys: **must** be stored within an approved HSM or KMS with encryption at rest and strict access controls.
- Class 3–4 keys: **must** be stored within an approved KMS or secrets management system (e.g., [Organization Name]'s approved secrets vault solution). Keys must not be stored in source code, configuration files, or databases without encryption.
- All key storage systems must implement access logging and alert on unauthorized access attempts.

#### 6.3.5 Key Usage and Monitoring

*Controls governing the operational use of keys and the monitoring of that use.*

- Each key must only be used for its designated purpose (e.g., a key approved for encryption must not be used for signing).
- Key usage must be logged, including: timestamp, key ID, operation performed, requesting entity, and outcome.
- Anomalous key usage patterns (e.g., high-volume usage, unusual access times, access from unauthorized systems) must trigger automated alerts to the IT Security Team.
- Separation of duties must be enforced: personnel who generate keys must not have sole access to use them.

#### 6.3.6 Key Rotation

*Define the mandatory rotation schedule and trigger events that require out-of-schedule rotation.*

**Scheduled Rotation:**

| Key Type | Rotation Frequency |
|---|---|
| Symmetric encryption keys (Class 1) | Every [12 months] or upon 2^32 blocks encrypted (AES-GCM), whichever is sooner |
| Symmetric encryption keys (Class 2–3) | Every [24 months] |
| TLS private keys and certificates | Per certificate validity period (max 90 days per CA/B Forum) |
| Code signing keys | Every [12 months] |
| API keys and secrets | Every [6–12 months] |
| Password-derived keys | Upon password change |
| HSM master keys | Every [3–5 years] or per HSM vendor guidance |

**Unscheduled (Emergency) Rotation Triggers:**

- Actual or suspected compromise of a key
- Departure of a key custodian with knowledge of key material
- Compromise of the HSM or KMS environment
- Detection of unauthorized access to key material
- Significant algorithm weakness published for the key's algorithm
- Regulatory or legal requirement

#### 6.3.7 Key Suspension and Deactivation

*Procedures for temporarily or permanently removing a key from active service.*

- **Suspension** is a temporary state used during incident investigation. Suspended keys may be reactivated upon investigation conclusion if no compromise is confirmed.
- **Deactivation** permanently removes a key from active use. Deactivated keys may be retained for decryption of archived data but must not be used to encrypt new data.
- Deactivation requires authorization from the Key Custodian and Head of Cryptography.
- Deactivated keys must be clearly labelled in the KMS inventory with deactivation date and reason.

#### 6.3.8 Key Destruction and Archival

*The final phase of the key lifecycle — ensuring keys are irrecoverably destroyed when no longer needed.*

- Keys must be destroyed when they are no longer required for any operational or legal purpose.
- Destruction of Class 1 and Class 2 keys must be performed as a formal procedure under dual control, with a destruction record signed by all participants.
- HSM-resident keys must be destroyed using the HSM's secure key destruction function. The destruction must be verified and logged.
- Software-resident key copies must be overwritten with cryptographically random data a minimum of [3] times and the storage media verified.
- A destruction record must be retained for a minimum of [7 years] in compliance with [relevant record retention policy].
- If data encrypted with a destroyed key must be retained, the data must first be re-encrypted with a new, active key prior to destruction.

### 6.4 Key Custody and Dual Control

*Define how key custodianship is assigned and enforced.*

- All Class 1 and Class 2 keys must be protected under **dual control**, requiring at least two authorized custodians to act simultaneously to access, use, or modify the key.
- **Split knowledge** must be applied where technically feasible: no single custodian should have access to the complete key material.
- A current list of key custodians must be maintained in [Organization Name]'s Key Custodian Register.
- Custodian access must be revoked immediately upon role change, departure, or suspected compromise.

### 6.5 Key Custodian Register

*This register must be maintained by the Head of Cryptography and reviewed quarterly.*

| Key ID / Key Class | Key Custodian Name | Role | Contact | Date Assigned | Date Revoked |
|---|---|---|---|---|---|
| [Key ID / Class 1] | [Name] | [Role] | [Email / Phone] | [Date] | [Date or Active] |
| [Key ID / Class 1] | [Name] | [Role] | [Email / Phone] | [Date] | [Date or Active] |
| [Key ID / Class 2] | [Name] | [Role] | [Email / Phone] | [Date] | [Date or Active] |

### 6.6 Key Management Audit Logging Requirements

*All key management operations must generate tamper-evident audit logs meeting the following minimum requirements.*

| Log Field | Required | Description |
|---|---|---|
| Timestamp (UTC) | Mandatory | RFC 3339 format |
| Key ID | Mandatory | Unique identifier of the key involved |
| Operation Type | Mandatory | Generate, Activate, Use, Rotate, Suspend, Deactivate, Destroy |
| Actor (User / System) | Mandatory | Authenticated identity performing the operation |
| Source System | Mandatory | System or application making the request |
| Outcome | Mandatory | Success / Failure |
| Reason (for Failure) | Conditional | Required if Outcome = Failure |
| Custodian Approvers | Conditional | Required for dual-control operations |

Audit logs must be:
- Written to a tamper-evident, append-only log store
- Retained for a minimum of **[7 years]**
- Protected against modification by any individual, including system administrators
- Reviewed by Internal Audit at least annually

### 6.7 Key Compromise Procedure

*Define the immediate steps to be taken upon discovery or suspicion of key compromise.*

1. **Detection:** Any personnel detecting or suspecting a key compromise must immediately notify the IT Security Team and Head of Cryptography.
2. **Containment:** The affected key must be suspended immediately within the KMS or HSM.
3. **Assessment:** IT Security Team assesses the scope and impact of the compromise within [4 hours] of notification.
4. **Notification:** CISO and Risk & Compliance are notified. If customer data may be at risk, BNM notification obligations under RMiT must be assessed.
5. **Recovery:** Emergency key rotation is performed per Section 6.3.6.
6. **Evidence Preservation:** All relevant logs are preserved in tamper-evident storage for forensic investigation.
7. **Post-Incident Review:** Root cause analysis completed within [30 days]; findings documented and remediation tracked.

### 6.8 Key Ceremony Procedures

*Describe the formal key ceremony process for Class 1 key operations.*

Key ceremonies are required for all Class 1 key generation, rotation, and destruction events. The ceremony must include:

- **Pre-Ceremony:**
  - Formal ceremony notice issued [X days] in advance
  - Ceremony script prepared and reviewed
  - HSM and facility security confirmed operational
  - Custodian attendance confirmed

- **During Ceremony:**
  - Access to HSM area logged and recorded
  - All actions recorded in ceremony script, witnessed and co-signed
  - Smartcards / tokens used — no custodian uses another's credentials
  - Video recording (if required by policy)

- **Post-Ceremony:**
  - Ceremony record signed by all participants within [24 hours]
  - Record stored in Key Management Archive
  - KMS inventory updated to reflect new key status

---

## 7. HSM Usage Requirements

### 7.1 HSM Policy Overview

*Define [Organization Name]'s policy on the deployment and management of Hardware Security Modules, specifying when their use is mandatory.*

[Organization Name] requires the use of FIPS 140-2 or FIPS 140-3 validated Hardware Security Modules for the management of critical cryptographic key material. HSMs provide a tamper-resistant, auditable environment that ensures key material remains protected even from privileged insiders.

### 7.2 Mandatory HSM Usage

The following use cases **mandatorily** require HSM deployment:

| Use Case | Required FIPS Level | Rationale |
|---|---|---|
| Root Certificate Authority (CA) private key | Level 3 | Compromise would undermine entire PKI trust chain |
| Issuing CA private key | Level 3 | Compromise enables issuance of fraudulent certificates |
| Payment card encryption keys (PCI DSS scope) | Level 3 | Regulatory requirement (PCI DSS Req. 3.7) |
| Customer data encryption keys (Class 1) | Level 3 | Regulatory requirement (RMiT 10.20, PDPA) |
| Code signing private keys | Level 2 | Prevents signing of unauthorized software |
| TLS private keys for customer-facing services | Level 2 | Protects confidentiality of customer sessions |
| Master key for application KMS | Level 3 | Wraps all other keys in the key hierarchy |

### 7.3 Approved HSM Models

*Maintain a current register of HSMs approved for use within [Organization Name]. Approvals must be reviewed upon significant firmware updates or new NIST advisories.*

| Manufacturer | Model | FIPS Validation Level | Firmware Version | Deployment Location | Status | Expiry of Validation |
|---|---|---|---|---|---|---|
| [Manufacturer] | [Model] | Level 3 | [Version] | [Data Centre / Cloud] | **Approved** | [Date] |
| [Manufacturer] | [Model] | Level 2 | [Version] | [Data Centre / Cloud] | **Approved** | [Date] |
| [Manufacturer] | [Model] | Level 3 | [Version] | [Cloud HSM Service] | **Approved** | [Date] |

### 7.4 HSM Deployment Architecture

*Describe the high-level deployment model for HSMs within [Organization Name]'s infrastructure.*

- **High Availability:** All HSMs supporting production systems must be deployed in an active-passive or active-active cluster configuration to ensure availability. Single points of failure are not permitted for Class 1 or Class 2 key storage.
- **Network Segmentation:** HSMs must be deployed in a dedicated, network-isolated security zone. Access must be restricted to approved key management systems and authorized administrators only.
- **Backup and Recovery:** HSM configuration and key material must be backed up using the HSM vendor's approved backup mechanism. Backup media must be encrypted and stored off-site in a physically secured location.
- **Remote Administration:** Remote HSM administration is permitted only over encrypted, authenticated management channels (e.g., dedicated management VPN or out-of-band management network). Remote administration sessions must be logged.

### 7.5 HSM Access Controls

| Access Type | Authentication Required | Dual Control Required | Audit Log |
|---|---|---|---|
| Key generation | Smartcard/token + PIN | Yes (Class 1–2) | Mandatory |
| Key export/backup | Smartcard/token + PIN | Yes | Mandatory |
| Key deletion/destruction | Smartcard/token + PIN | Yes | Mandatory |
| HSM configuration change | Smartcard/token + PIN | Yes | Mandatory |
| Firmware update | Smartcard/token + PIN | Yes | Mandatory |
| Read-only status check | Password-based or smartcard | No | Mandatory |
| Application key usage (automated) | API key + mTLS | No | Mandatory |

### 7.6 HSM Monitoring and Maintenance

- HSM health status (availability, tamper events, error rates) must be monitored continuously with alerts sent to the IT Security Team.
- Firmware and software updates must be applied in accordance with [Organization Name]'s Patch Management Policy and only after testing in a non-production environment.
- Annual HSM physical inspection must be conducted and documented.
- Tamper-evident seals must be inspected at each access. Any evidence of tamper must be treated as a security incident.
- HSM audit logs must be exported and stored in the centralized SIEM at least daily.

### 7.7 HSM Decommissioning

When an HSM is decommissioned:

1. All key material must be migrated to an approved replacement HSM under dual control.
2. The HSM must be fully zeroized (factory reset) using the vendor-approved procedure.
3. Zeroization must be witnessed and documented.
4. Physical disposal must comply with [Organization Name]'s Secure Asset Disposal Policy.

---

## 8. Standards Alignment Mapping

### 8.1 Overview

*This section constitutes the core mapping evidence required by BNM RMiT Clause 10.20. It provides traceability from [Organization Name]'s cryptographic controls to specific clauses within NIST and ISO/IEC standards. Each row represents a control area with explicit cross-references.*

### 8.2 Mapping to NIST Standards

| Control Area | [Org Name] Policy Ref | NIST Standard | NIST Clause / Section | Alignment Status | Gap Description | Remediation Plan |
|---|---|---|---|---|---|---|
| Approved symmetric encryption algorithms | Sec. 5.2 | NIST FIPS 197 | Full standard | **Aligned** | — | — |
| Approved hash functions | Sec. 5.5 | NIST FIPS 180-4 | Full standard | **Aligned** | — | — |
| SHA-3 / Keccak family | Sec. 5.5 | NIST FIPS 202 | Full standard | **Aligned** | — | — |
| Approved digital signature algorithms | Sec. 5.4 | NIST FIPS 186-5 | Full standard | **Aligned** | — | — |
| Random number generation | Sec. 6.3.1 | NIST SP 800-90A Rev 1 | Sections 8–10 | **Aligned** | — | — |
| Key management framework | Sec. 6 | NIST SP 800-57 Part 1 Rev 5 | Chapters 5–8 | **Aligned** | — | — |
| Key establishment schemes | Sec. 5.3 | NIST SP 800-56A Rev 3 | Full standard | **Aligned** | — | — |
| Key derivation functions | Sec. 5.7 | NIST SP 800-56C Rev 2 | Full standard | **Aligned** | — | — |
| Cryptoperiods | Sec. 6.3.3 | NIST SP 800-57 Part 1 Rev 5 | Table 1 | **Partially Aligned** | Cryptoperiods for API keys not yet formally defined | Define API key cryptoperiods by [Date] |
| Algorithm transitions | Sec. 5 (status column) | NIST SP 800-131A Rev 2 | Full standard | **Aligned** | — | — |
| Block cipher modes of operation | Sec. 5.2 | NIST SP 800-38 Series | SP 800-38A, 38B, 38D | **Aligned** | — | — |
| Password-based key derivation | Sec. 5.7 | NIST SP 800-132 | Full standard | **Aligned** | — | — |
| TLS recommendations | Sec. 5.8 | NIST SP 800-52 Rev 2 | Full standard | **Aligned** | — | — |
| HSM validation | Sec. 7.3 | NIST FIPS 140-2 / 140-3 | Full standard | **Aligned** | — | — |
| Post-quantum cryptography awareness | Sec. 4.1 (item 8) | NIST IR 8413-upd1 | Full document | **In Progress** | PQC migration roadmap not yet finalized | Complete roadmap by [Date] |

### 8.3 Mapping to ISO/IEC Standards

| Control Area | [Org Name] Policy Ref | ISO/IEC Standard | Standard Clause / Section | Alignment Status | Gap Description | Remediation Plan |
|---|---|---|---|---|---|---|
| Cryptographic controls policy | Sec. 4 | ISO/IEC 27001:2022 | Annex A Control 8.24 | **Aligned** | — | — |
| Use of cryptography | Sec. 4, 5 | ISO/IEC 27002:2022 | Control 8.24 | **Aligned** | — | — |
| Information security policy | Sec. 4.1 | ISO/IEC 27001:2022 | Clause 6.2 | **Aligned** | — | — |
| Symmetric encryption algorithms | Sec. 5.2 | ISO/IEC 18033-3:2010 | Full standard | **Aligned** | — | — |
| Asymmetric encryption algorithms | Sec. 5.3 | ISO/IEC 18033-2:2006 | Full standard | **Aligned** | — | — |
| Hash functions | Sec. 5.5 | ISO/IEC 10118-3:2018 | Full standard | **Aligned** | — | — |
| Digital signatures | Sec. 5.4 | ISO/IEC 14888-3:2018 | Full standard | **Aligned** | — | — |
| Key management framework | Sec. 6 | ISO/IEC 11770-1:2010 | Full standard | **Aligned** | — | — |
| Symmetric key management | Sec. 6.3 | ISO/IEC 11770-2:2008 | Full standard | **Aligned** | — | — |
| Asymmetric key management | Sec. 6.3 | ISO/IEC 11770-3:2015 | Full standard | **Aligned** | — | — |
| Key derivation | Sec. 5.7 | ISO/IEC 11770-6:2016 | Full standard | **Aligned** | — | — |
| Message authentication codes | Sec. 5.6 | ISO/IEC 9797-1:2011 / 9797-2:2011 | Full standard | **Aligned** | — | — |
| Authenticated encryption | Sec. 5.2, 5.6 | ISO/IEC 19772:2009 | Full standard | **Aligned** | — | — |
| Public key infrastructure (PKI) | Sec. 7.2 | ISO/IEC 15945:2002 | Full standard | **Aligned** | — | — |
| Cryptographic protocols | Sec. 5.8 | ISO/IEC 9798 Series | Relevant parts | **Aligned** | — | — |

### 8.4 Mapping to BNM RMiT Clause 10.20

*Explicit traceability from RMiT Clause 10.20 requirements to organizational controls.*

| RMiT Clause 10.20 Requirement | [Org Name] Control(s) | Document Reference | Evidence Available |
|---|---|---|---|
| Adoption of internationally recognized cryptographic standards | Approved algorithm register aligned with NIST FIPS and ISO/IEC | Sec. 5 | This document (Sec. 8.2, 8.3) |
| Use of adequate key lengths commensurate with data sensitivity | Minimum key length requirements by classification | Sec. 5.2–5.4 | Algorithm register; system configuration evidence |
| Prohibition of deprecated algorithms | Deprecated/Prohibited algorithm list | Sec. 5.2–5.5 | Vulnerability scan results; configuration reviews |
| Key management procedures | Key lifecycle management framework | Sec. 6 | Key management procedures; KMS audit logs |
| Physical protection of key material using HSMs | Mandatory HSM usage policy and controls | Sec. 7 | HSM FIPS certificates; inventory register |
| Periodic review of cryptographic controls | Annual review cycle; review history | Sec. 11 | Version history; review minutes |
| Documentation of cryptographic policy | This document | All sections | This document |

---

## 9. Compliance Gap Analysis

### 9.1 Current Gap Register

*This section documents all identified gaps between [Organization Name]'s current cryptographic posture and the requirements of applicable standards. Each gap must have an assigned owner and a remediation target date.*

| Gap ID | Control Area | Gap Description | Severity | Assigned Owner | Target Remediation Date | Status |
|---|---|---|---|---|---|---|
| GAP-001 | Algorithm deprecation | [Number] legacy systems still using 3DES for [use case] | High | [Owner] | [Date] | In Progress |
| GAP-002 | TLS protocol | [Number] internal services still accepting TLS 1.0/1.1 | High | [Owner] | [Date] | In Progress |
| GAP-003 | Key cryptoperiods | API key rotation not formally enforced via automated controls | Medium | [Owner] | [Date] | Planned |
| GAP-004 | Post-quantum roadmap | PQC migration roadmap not yet documented | Medium | [Owner] | [Date] | Planned |
| GAP-005 | HSM coverage | [Number] Class 2 keys stored in software KMS without HSM backing | Medium | [Owner] | [Date] | Planned |
| [GAP-XXX] | [Area] | [Description] | [High/Medium/Low] | [Owner] | [Date] | [Status] |

### 9.2 Gap Severity Definitions

| Severity | Definition |
|---|---|
| **Critical** | Immediate exposure; regulatory breach imminent or confirmed; requires emergency remediation within 30 days |
| **High** | Significant control weakness; regulatory non-compliance risk; remediation required within 90 days |
| **Medium** | Moderate control weakness; partial alignment; remediation required within 180 days |
| **Low** | Minor deviation; best practice not followed; remediation within 12 months |

---

## 10. Exceptions and Waivers

### 10.1 Exception Policy

*Define the conditions under which exceptions to the cryptographic standards in this document may be granted, and the process for doing so.*

Exceptions to this policy may be granted where technical, operational, or commercial constraints prevent immediate compliance. Exceptions are not permanent; they must be bounded in time and accompanied by a risk acceptance decision from an appropriate authority.

No exception may be granted for any control classified as **Prohibited** in Section 5. Prohibited algorithms represent unacceptable risk and must be remediated without exception.

### 10.2 Exception Process

1. The business or system owner submits an exception request to the Head of Cryptography using [Exception Request Form Reference].
2. The Head of Cryptography performs a risk assessment and assigns a risk rating.
3. Exceptions rated Medium or below are approved by the CISO.
4. Exceptions rated High or Critical require approval by the [Risk Committee / Board Risk Committee].
5. Approved exceptions are entered in the Exception Register (Section 10.3) and reviewed at least quarterly.
6. No exception may be valid for more than [12 months] without formal renewal.

### 10.3 Exception Register

| Exception ID | System / Application | Policy Requirement | Exception Description | Risk Rating | Compensating Control | Approved By | Approval Date | Expiry Date | Review Date |
|---|---|---|---|---|---|---|---|---|---|
| EXC-001 | [System Name] | AES-256 required | AES-128 in use; migration pending hardware upgrade | Medium | Enhanced access controls; additional monitoring | [Approver] | [Date] | [Date] | [Date] |
| EXC-002 | [System Name] | TLS 1.2 minimum | TLS 1.0 in use on isolated legacy mainframe segment | High | Network isolation; no internet exposure; compensating IDS | [Approver] | [Date] | [Date] | [Date] |
| [EXC-XXX] | [System Name] | [Requirement] | [Description] | [Rating] | [Control] | [Approver] | [Date] | [Date] | [Date] |

---

## 11. Review and Approval

### 11.1 Review Schedule

This document must be reviewed at a minimum:

- **Annually**, on or before the anniversary of the last approved date
- **Upon any material change** to applicable NIST or ISO/IEC standards
- **Following a cryptographic incident** affecting [Organization Name] or a material peer institution
- **Upon notification from BNM** of changes to RMiT requirements
- **Upon adoption of new cryptographic technologies** or significant system changes

### 11.2 Version History

| Version | Date | Author | Section(s) Changed | Change Description | Approved By |
|---|---|---|---|---|---|
| 0.1 | [Date] | [Author] | All | Initial draft | — |
| 0.2 | [Date] | [Author] | Sec. 5, 8 | Algorithm register expanded; NIST mapping updated | — |
| 0.3 | [Date] | [Author] | All | Internal review comments incorporated | — |
| 1.0 | [Date] | [Author] | All | First approved version | [Approver] |
| [X.X] | [Date] | [Author] | [Sections] | [Description] | [Approver] |

### 11.3 Approval Sign-Off

*The following authorized personnel have reviewed and approved this document for the indicated version. Digital or wet signatures are required.*

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO | [Name] | _________________ | [Date] |
| Head of Cryptography | [Name] | _________________ | [Date] |
| Head of IT Security | [Name] | _________________ | [Date] |
| Head of Risk & Compliance | [Name] | _________________ | [Date] |
| Chief Technology Officer | [Name] | _________________ | [Date] |
| [Other Approver] | [Name] | _________________ | [Date] |

---

## 12. References

### 12.1 Regulatory References

| Reference | Issuing Body | Version / Date | URL / Source |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document — Clause 10.20 | Bank Negara Malaysia (BNM) | [Version / Date] | [BNM Official Website] |
| Risk Management in Technology (RMiT) Policy Document — Clauses 10.18–10.22 | Bank Negara Malaysia (BNM) | [Version / Date] | [BNM Official Website] |
| Personal Data Protection Act 2010 (PDPA) — Section 9 | Government of Malaysia | 2010 (as amended) | Federal Gazette |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia (BNM) | [Version / Date] | [BNM Official Website] |
| National Cyber Security Policy | NACSA / Government of Malaysia | [Version] | [NACSA Website] |

### 12.2 NIST Standards Referenced

| Standard | Title | Date |
|---|---|---|
| NIST FIPS 140-2 | Security Requirements for Cryptographic Modules | May 2001 (final) |
| NIST FIPS 140-3 | Security Requirements for Cryptographic Modules | March 2019 |
| NIST FIPS 180-4 | Secure Hash Standard (SHS) | August 2015 |
| NIST FIPS 186-5 | Digital Signature Standard (DSS) | February 2023 |
| NIST FIPS 197 | Advanced Encryption Standard (AES) | November 2001 |
| NIST FIPS 202 | SHA-3 Standard: Permutation-Based Hash and Extendable-Output Functions | August 2015 |
| NIST SP 800-52 Rev 2 | Guidelines for the Selection, Configuration, and Use of TLS Implementations | August 2019 |
| NIST SP 800-56A Rev 3 | Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography | April 2018 |
| NIST SP 800-56C Rev 2 | Recommendation for Key-Derivation Methods in Key-Establishment Schemes | August 2020 |
| NIST SP 800-57 Part 1 Rev 5 | Recommendation for Key Management: Part 1 – General | May 2020 |
| NIST SP 800-57 Part 2 Rev 1 | Recommendation for Key Management: Part 2 – Best Practices for Key Management Organizations | May 2019 |
| NIST SP 800-57 Part 3 Rev 1 | Recommendation for Key Management, Part 3: Application-Specific Key Management Guidance | January 2015 |
| NIST SP 800-63B | Digital Identity Guidelines: Authentication and Lifecycle Management | June 2017 (Rev 3) |
| NIST SP 800-90A Rev 1 | Recommendation for Random Number Generation Using Deterministic Random Bit Generators | June 2015 |
| NIST SP 800-131A Rev 2 | Transitioning the Use of Cryptographic Algorithms and Key Lengths | March 2019 |
| NIST SP 800-132 | Recommendation for Password-Based Key Derivation | December 2010 |
| NIST IR 8413-upd1 | Status Report on the Third Round of the NIST Post-Quantum Cryptography Standardization Process | September 2022 |

### 12.3 ISO/IEC Standards Referenced

| Standard | Title | Edition |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | 2022 |
| ISO/IEC 27002:2022 | Information Security Controls | 2022 |
| ISO/IEC 9797-1:2011 | Message Authentication Codes (MACs) — Part 1: Mechanisms using a block cipher | 2011 |
| ISO/IEC 9797-2:2011 | Message Authentication Codes (MACs) — Part 2: Mechanisms using a dedicated hash-function | 2011 |
| ISO/IEC 10118-3:2018 | Hash-functions — Part 3: Dedicated hash-functions | 2018 |
| ISO/IEC 11770-1:2010 | Key Management — Part 1: Framework | 2010 |
| ISO/IEC 11770-2:2008 | Key Management — Part 2: Mechanisms Using Symmetric Techniques | 2008 |
| ISO/IEC 11770-3:2015 | Key Management — Part 3: Mechanisms Using Asymmetric Techniques | 2015 |
| ISO/IEC 11770-6:2016 | Key Management — Part 6: Key Derivation | 2016 |
| ISO/IEC 14888-3:2018 | Digital Signatures with Appendix — Part 3: Discrete Logarithm Based Mechanisms | 2018 |
| ISO/IEC 15946-3 | Cryptographic techniques based on elliptic curves — Part 3: Key Establishment | [Edition] |
| ISO/IEC 18033-2:2006 | Encryption Algorithms — Part 2: Asymmetric Ciphers | 2006 |
| ISO/IEC 18033-3:2010 | Encryption Algorithms — Part 3: Block Ciphers | 2010 |
| ISO/IEC 19772:2009 | Authenticated Encryption | 2009 |

### 12.4 Internal Policy References

| Document | Document ID | Owner |
|---|---|---|
| Information Security Policy | [Doc ID] | CISO |
| Data Classification Policy | [Doc ID] | CISO |
| Incident Response Policy | [Doc ID] | Head of IT Security |
| Patch Management Policy | [Doc ID] | Head of IT Infrastructure |
| Secure Asset Disposal Policy | [Doc ID] | Head of IT Operations |
| Vendor Management Policy | [Doc ID] | Head of Procurement / Risk |
| Access Control Policy | [Doc ID] | Head of IT Security |
| Business Continuity Plan | [Doc ID] | Head of Risk & Compliance |

---

## 13. Appendices

### Appendix A: Cryptographic Algorithm Quick Reference Card

*This appendix provides a condensed single-page reference for use by IT personnel, developers, and system administrators. It should be updated to reflect any changes to Section 5.*

**APPROVED — USE THESE:**

| Category | Algorithm | Parameters |
|---|---|---|
| Symmetric Encryption | AES-GCM | 256-bit key (preferred); 128-bit (minimum) |
| Hashing | SHA-256 / SHA-384 / SHA-512 | As required by data sensitivity |
| Password Storage | Argon2id | Memory ≥ 64MB; Iterations ≥ 3 |
| Asymmetric Encryption | RSA-OAEP | 4096-bit (preferred); 2048-bit (minimum) |
| Digital Signatures | ECDSA P-384 / RSA-PSS 4096-bit | SHA-384 or better |
| Key Agreement | ECDH P-384 | With Perfect Forward Secrecy |
| TLS | TLS 1.3 | TLS_AES_256_GCM_SHA384 |
| MAC | HMAC-SHA-256 | 256-bit key minimum |

**PROHIBITED — NEVER USE:**

DES · RC4 · MD5 (for integrity) · SHA-1 (for signatures) · SSL · TLS 1.0 · TLS 1.1 · RSA < 2048-bit · Export ciphers · NULL ciphers

---

### Appendix B: Key Ceremony Attendance Record Template

*This template must be completed and signed during every Class 1 key ceremony.*

**Ceremony Record**

| Field | Details |
|---|---|
| Ceremony ID | [Ceremony ID] |
| Date and Time | [Date / Time (UTC)] |
| Location | [Physical Location / Data Centre] |
| Key ID(s) Involved | [Key ID(s)] |
| Operation Performed | [Generation / Rotation / Destruction] |
| HSM Serial Number | [Serial Number] |
| Presiding Officer | [Name / Role] |

**Attendees:**

| Name | Role | Organization | Signature | Time In | Time Out |
|---|---|---|---|---|---|
| [Name] | [Role] | [Org] | _____________ | [Time] | [Time] |
| [Name] | [Role] | [Org] | _____________ | [Time] | [Time] |
| [Name] | [Role] | [Org] | _____________ | [Time] | [Time] |

**Actions Performed:**

| Step | Description | Completed By | Witnessed By | Time |
|---|---|---|---|---|
| 1 | [Step description] | [Name] | [Name] | [Time] |
| 2 | [Step description] | [Name] | [Name] | [Time] |

**Post-Ceremony Confirmation:**
By signing below, all attendees confirm that the ceremony was conducted in accordance with [Organization Name]'s Key Ceremony Procedure.

*Presiding Officer Signature:* _________________ Date: _____________

---

### Appendix C: Annual Cryptographic Review Checklist

*This checklist must be completed by the Head of Cryptography as part of the annual document review.*

| # | Review Item | Completed | Findings / Notes |
|---|---|---|---|
| 1 | Verify all NIST standards referenced remain current (no superseding publications) | ☐ | |
| 2 | Verify all ISO/IEC standards referenced remain current | ☐ | |
| 3 | Review NIST SP 800-131A for any newly deprecated algorithms | ☐ | |
| 4 | Review NIST PQC standardization status and update roadmap | ☐ | |
| 5 | Confirm all approved algorithms in Section 5 remain uncompromised (no known breaks) | ☐ | |
| 6 | Review key cryptoperiods against NIST SP 800-57 Table 1 | ☐ | |
| 7 | Review and update gap register (Section 9.1) | ☐ | |
| 8 | Review and renew expiring exceptions (Section 10.3) | ☐ | |
| 9 | Confirm FIPS 140-2/140-3 validations for all HSMs remain active | ☐ | |
| 10 | Confirm HSM firmware is current and patched | ☐ | |
| 11 | Review key custodian register for accuracy | ☐ | |
| 12 | Review audit logs from KMS and HSM for anomalies | ☐ | |
| 13 | Confirm TLS configurations on public-facing services align with Section 5.8 | ☐ | |
| 14 | Review BNM RMiT clause 10.20 for any BNM-issued guidance updates | ☐ | |
| 15 | Update version history and obtain updated approvals | ☐ | |

**Reviewer:** _____________________________ **Date:** _______________
**CISO Sign-Off:** _____________________________ **Date:** _______________

---

### Appendix D: System Cryptographic Inventory

*This inventory records the cryptographic profile of each in-scope system. It must be maintained by the IT Security Team and reviewed as part of the annual review.*

| System Name | System Owner | Data Classification | Algorithm in Use | Key Length | TLS Version | Key Storage | HSM Backed | Last Reviewed | Compliant |
|---|---|---|---|---|---|---|---|---|---|
| [System Name] | [Owner] | [Class] | [Algorithm] | [Key Length] | [TLS Ver] | [KMS / HSM] | Yes / No | [Date] | Yes / No / Exception |
| [System Name] | [Owner] | [Class] | [Algorithm] | [Key Length] | [TLS Ver] | [KMS / HSM] | Yes / No | [Date] | Yes / No / Exception |
| [System Name] | [Owner] | [Class] | [Algorithm] | [Key Length] | [TLS Ver] | [KMS / HSM] | Yes / No | [Date] | Yes / No / Exception |

---

### Appendix E: Post-Quantum Cryptography (PQC) Readiness Assessment

*This appendix documents [Organization Name]'s current state and planned migration activities in response to the evolving post-quantum threat landscape. It must be updated at minimum annually.*

**Current Status:** [Not Started / In Assessment / Roadmap Defined / Migration In Progress / Completed]

**Summary of NIST PQC Standardization Outcomes:**

As of August 2024, NIST has finalized the following PQC standards:

| NIST Standard | Algorithm | Purpose | Date Finalized |
|---|---|---|---|
| FIPS 203 | ML-KEM (formerly CRYSTALS-Kyber) | Key Encapsulation | August 2024 |
| FIPS 204 | ML-DSA (formerly CRYSTALS-Dilithium) | Digital Signatures | August 2024 |
| FIPS 205 | SLH-DSA (formerly SPHINCS+) | Digital Signatures | August 2024 |

**[Organization Name] PQC Migration Roadmap:**

| Phase | Activity | Target Date | Owner | Status |
|---|---|---|---|---|
| 1 — Inventory | Complete cryptographic inventory identifying all asymmetric key usage | [Date] | Head of Cryptography | [Status] |
| 2 — Assessment | Risk assessment of quantum threat to current asymmetric keys | [Date] | Head of Cryptography | [Status] |
| 3 — Planning | Define migration priority order based on data sensitivity and key lifetime | [Date] | CISO + Head of Cryptography | [Status] |
| 4 — Piloting | Pilot PQC algorithms in non-production environments | [Date] | IT Security Team | [Status] |
| 5 — Migration | Phased migration of Class 1 and Class 2 keys to hybrid (classical + PQC) schemes | [Date] | IT Security Team | [Status] |
| 6 — Completion | Full migration to PQC for all long-lived keys | [Date] | CISO | [Status] |

---

*End of Document*

---

**Document Control:** This document is subject to version control. The master copy is maintained by [Document Owner / Knowledge Management System]. Printed copies are uncontrolled. Verify currency before use.