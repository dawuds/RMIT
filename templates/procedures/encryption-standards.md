# Encryption Standards

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
| **Department** | [Department Name] |
| **Document Status** | Draft / Under Review / Approved |

---

> **Classification Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of regulatory obligations under BNM guidelines and the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Policy Statements and Requirements](#4-policy-statements-and-requirements)
5. [Approved Algorithms and Key Lengths](#5-approved-algorithms-and-key-lengths)
6. [Encryption of Data at Rest](#6-encryption-of-data-at-rest)
7. [Encryption of Data in Transit](#7-encryption-of-data-in-transit)
8. [Key Lifecycle Management](#8-key-lifecycle-management)
9. [HSM Usage Requirements](#9-hsm-usage-requirements)
10. [Exceptions and Compensating Controls](#10-exceptions-and-compensating-controls)
11. [Compliance Monitoring and Audit](#11-compliance-monitoring-and-audit)
12. [Non-Compliance and Consequences](#12-non-compliance-and-consequences)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document: why these encryption standards exist, what risks they mitigate, and the regulatory obligations they fulfill. Reference specific BNM RMiT clauses.*

This document establishes the minimum encryption standards and cryptographic requirements for [Organization Name] in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.22. These standards define the approved cryptographic algorithms, minimum key lengths, key management procedures, and Hardware Security Module (HSM) usage requirements to protect the confidentiality and integrity of information assets.

The purpose of this document is to:

- Define the minimum cryptographic controls required to protect data at rest and data in transit across all systems and environments operated by [Organization Name].
- Establish a consistent and auditable baseline for cryptographic implementation across all technology domains.
- Ensure compliance with BNM RMiT requirements and other applicable regulatory frameworks including the Personal Data Protection Act 2010 (PDPA) and NACSA guidelines.
- Provide guidance to technology teams, vendors, and third parties on acceptable cryptographic practices.
- Support the organisation's overall Information Security Policy and Risk Management Framework.

### 1.2 Scope

*Define which systems, environments, data types, personnel, and third parties are covered. Be explicit about what is in and out of scope.*

This document applies to:

**In Scope:**

| Category | Description |
|---|---|
| **Systems** | All information systems, applications, databases, cloud platforms, endpoints, and network infrastructure owned, operated, or managed by [Organization Name] |
| **Data Classifications** | All data classified as Confidential, Restricted, or Sensitive; all customer personally identifiable information (PII); all financial transaction data |
| **Environments** | Production, staging, development, disaster recovery (DR), and backup environments |
| **Personnel** | All employees, contractors, consultants, vendors, and third-party service providers with access to [Organization Name] systems |
| **Third Parties** | Managed service providers, cloud service providers, payment processors, and any entity processing data on behalf of [Organization Name] |
| **Channels** | Internet-facing services, internal network communications, APIs, messaging systems, email, file transfer mechanisms |

**Out of Scope:**

- Cryptographic controls within products or services provided by regulated third parties where [Organization Name] has no control over the cryptographic implementation, subject to contractual assurance requirements.
- Legacy systems formally subject to a documented exception and compensating controls as described in Section 10.
- [Any other explicit exclusions specific to the organization]

---

## 2. Regulatory and Policy Context

### 2.1 Regulatory Framework

*List all applicable regulatory instruments, policies, and standards that this document is designed to satisfy. Include clause numbers where possible.*

This document has been prepared in response to, and in compliance with, the following regulatory requirements and industry standards:

| Instrument | Issuing Body | Relevant Section / Clause | Description |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.22 | Encryption and cryptographic controls for financial institutions |
| Personal Data Protection Act 2010 (PDPA) | Government of Malaysia | Section 9 (Security Principle) | Protection of personal data through appropriate security safeguards |
| Guidelines on Management of Cyber Risk | BNM | [Relevant Section] | Cyber risk management expectations including data protection |
| NACSA Cybersecurity Framework | National Cyber Security Agency (NACSA) | [Relevant Control] | National cybersecurity baseline controls |
| ISO/IEC 27001:2022 | ISO/IEC | Annex A Control 8.24 | Use of cryptography |
| ISO/IEC 27002:2022 | ISO/IEC | Section 8.24 | Guidance on cryptographic controls |
| Payment Card Industry Data Security Standard (PCI DSS) | PCI SSC | Requirement 3, 4 | Protection of cardholder data *(if applicable)* |
| [Additional Regulatory Reference] | [Issuing Body] | [Clause] | [Description] |

### 2.2 Internal Policy Alignment

*Reference the organization's internal policies that this document supports or derives from.*

This document is subordinate to and must be read in conjunction with the following [Organization Name] internal policies and frameworks:

- **Information Security Policy** – [Document ID]
- **Data Classification and Handling Policy** – [Document ID]
- **IT Risk Management Framework** – [Document ID]
- **Third-Party Risk Management Policy** – [Document ID]
- **Incident Response Policy** – [Document ID]
- **Change Management Policy** – [Document ID]

### 2.3 Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure unambiguous interpretation by all audiences.*

| Term / Abbreviation | Definition |
|---|---|
| **Algorithm** | A set of mathematical rules for performing encryption or decryption operations |
| **AES** | Advanced Encryption Standard – a symmetric block cipher approved by NIST |
| **Asymmetric Encryption** | Encryption using a public/private key pair (e.g., RSA, ECC) |
| **BNM** | Bank Negara Malaysia |
| **CA** | Certificate Authority – an entity that issues digital certificates |
| **Certificate** | A digital document binding a public key to an entity's identity |
| **Cipher Suite** | A combination of algorithms used for key exchange, authentication, and encryption in TLS |
| **CRL** | Certificate Revocation List |
| **Data at Rest** | Data stored on any persistent medium including disks, databases, tapes, and cloud storage |
| **Data in Transit** | Data actively transmitted over a network or communication channel |
| **ECC** | Elliptic Curve Cryptography |
| **FIPS** | Federal Information Processing Standards (NIST, USA) |
| **HSM** | Hardware Security Module – a tamper-resistant physical device for cryptographic key protection |
| **IV** | Initialization Vector – a random value used to ensure uniqueness in encryption operations |
| **KMS** | Key Management System / Service |
| **NACSA** | National Cyber Security Agency (Malaysia) |
| **NIST** | National Institute of Standards and Technology (USA) |
| **OCSP** | Online Certificate Status Protocol |
| **PCI DSS** | Payment Card Industry Data Security Standard |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia) |
| **PFS** | Perfect Forward Secrecy – a property ensuring session keys cannot be compromised retroactively |
| **PKI** | Public Key Infrastructure |
| **RMiT** | Risk Management in Technology (BNM Policy Document) |
| **RSA** | Rivest–Shamir–Adleman asymmetric encryption algorithm |
| **SHA** | Secure Hash Algorithm |
| **Symmetric Encryption** | Encryption using the same key for both encryption and decryption |
| **TLS** | Transport Layer Security |
| **[Additional Term]** | [Definition] |

---

## 3. Roles and Responsibilities

### 3.1 Accountability Overview

*Describe the governance structure for cryptographic controls. Identify who is ultimately accountable, who is responsible for implementation, and who provides oversight.*

The following roles are accountable for the implementation, maintenance, and oversight of encryption standards at [Organization Name]. All roles must be formally designated and their responsibilities documented in individual position descriptions or appointment letters.

### 3.2 RACI Matrix

*Assign RACI designations (Responsible, Accountable, Consulted, Informed) for all key activities related to encryption standards.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Head of Cryptography | IT Security Team | System / Application Owners | Development Teams | Infrastructure / Cloud Teams | IT Risk & Compliance | Internal Audit | Third-Party Vendors |
|---|---|---|---|---|---|---|---|---|---|
| Define and approve encryption standards | A | R | C | C | I | I | C | I | I |
| Review and update encryption standards | A | R | R | C | C | C | C | I | I |
| Implement encryption controls on systems | I | C | R | R | R | R | I | I | R |
| Approve cryptographic algorithm selection | A | R | C | C | C | C | C | I | I |
| Manage key generation and distribution | A | R | R | C | I | C | I | I | I |
| Operate and maintain HSMs | A | R | R | I | I | R | I | I | I |
| Conduct key rotation and revocation | A | R | R | C | I | C | I | I | I |
| Approve cryptographic exceptions | A | R | C | C | C | C | R | I | I |
| Monitor compliance with encryption standards | I | C | R | R | I | I | R | I | I |
| Conduct annual review of this document | A | R | C | C | C | C | C | I | I |
| Assess third-party cryptographic compliance | I | C | R | C | I | I | R | I | R |
| Report encryption incidents | A | R | R | R | R | R | R | I | R |
| Provide audit evidence | I | C | C | R | R | R | R | A | C |

### 3.3 Role Descriptions

*Provide a brief narrative description of each role's responsibilities as they relate to encryption standards.*

**Chief Information Security Officer (CISO)**
The CISO is the executive accountable for the organisation's information security posture, including the integrity of cryptographic controls. The CISO approves this document, escalates material cryptographic risks to the Board or Risk Committee, and ensures sufficient resources are allocated for effective implementation.

**Head of Cryptography / Cryptography Lead**
The Head of Cryptography (or equivalent designated role) is responsible for the technical development, maintenance, and accuracy of this document. This role defines approved cipher suites, oversees key lifecycle management, approves cryptographic exceptions, and maintains awareness of emerging cryptographic threats such as post-quantum computing risks.

**IT Security Team**
Responsible for day-to-day implementation and monitoring of cryptographic controls, including certificate management, TLS configuration, and security scanning for weak cipher usage.

**System / Application Owners**
Accountable for ensuring that systems and applications under their ownership comply with this standard. System owners must formally attest compliance during annual reviews and seek exceptions through the documented process where compliance cannot be achieved.

**Development Teams**
Responsible for implementing cryptographic controls within applications in accordance with this standard and the Secure Development Lifecycle (SDLC) policy. Developers must not implement custom cryptographic algorithms.

**Infrastructure / Cloud Teams**
Responsible for configuring encryption at the infrastructure layer, including storage encryption, network encryption, and cloud KMS integration.

**IT Risk and Compliance**
Responsible for tracking compliance against this standard, maintaining the exceptions register, and reporting on the encryption compliance posture to senior management.

**Internal Audit**
Provides independent assurance that encryption controls are operating effectively and in accordance with this standard and applicable regulatory requirements.

---

## 4. Policy Statements and Requirements

### 4.1 General Cryptographic Policy

*State the overarching policy positions that govern all cryptographic activity within the organization. These should be unambiguous and auditable.*

[Organization Name] adopts the following mandatory policy positions with respect to cryptographic controls:

1. **Mandatory Encryption:** All data classified as Confidential, Restricted, or Sensitive must be encrypted both at rest and in transit using approved algorithms and key lengths as defined in Section 5.

2. **Approved Algorithms Only:** Only cryptographic algorithms listed in the Approved Algorithm Register (Section 5 and Appendix A) may be used within [Organization Name] systems. The use of proprietary, custom, or unapproved cryptographic algorithms is strictly prohibited.

3. **No Deprecated Algorithms:** Algorithms and protocols that have been formally deprecated (including but not limited to DES, 3DES, RC4, MD5, SHA-1, SSL 2.0, SSL 3.0, TLS 1.0, and TLS 1.1) must not be used for protecting sensitive data. Existing deployments using deprecated algorithms must be remediated within the timeframe specified in any applicable exception.

4. **Key Protection:** Cryptographic keys must be protected with at least the same level of control as the data they protect. Keys must never be stored in plaintext alongside the data they encrypt.

5. **HSM Usage:** All cryptographic master keys and root keys for critical systems must be generated, stored, and managed within Hardware Security Modules (HSMs) certified to FIPS 140-2 Level 3 or equivalent, as described in Section 9.

6. **Key Separation:** Cryptographic keys used for different purposes (e.g., encryption vs. signing, production vs. non-production) must be logically and physically separated.

7. **Certificate Management:** All digital certificates used by [Organization Name] systems must be issued by approved Certificate Authorities and managed through the organisation's PKI or an approved third-party PKI service.

8. **Perfect Forward Secrecy:** All externally facing TLS implementations must support and prefer cipher suites that provide Perfect Forward Secrecy (PFS).

9. **Third-Party Compliance:** All third-party service providers and vendors processing [Organization Name] data must demonstrate compliance with equivalent cryptographic standards, documented through contractual obligations and periodic assurance assessments.

10. **Incident Reporting:** Any suspected or confirmed cryptographic key compromise, certificate mis-issuance, or encryption failure must be treated as a security incident and reported in accordance with the Incident Response Policy ([Document ID]).

### 4.2 Data Classification and Encryption Requirements

*Map data classifications to their minimum encryption requirements to give system owners clear guidance on what controls are required.*

| Data Classification | At Rest – Minimum Requirement | In Transit – Minimum Requirement | Key Management Requirement |
|---|---|---|---|
| **Strictly Confidential** (e.g., master keys, audit logs) | AES-256 with HSM-managed keys | TLS 1.3 with PFS cipher suites | HSM-backed key storage; dual-control key ceremony |
| **Confidential** (e.g., customer PII, financial data) | AES-256 | TLS 1.2 or higher; TLS 1.3 preferred | Centralized KMS; annual key rotation |
| **Restricted** (e.g., internal business data) | AES-128 minimum; AES-256 recommended | TLS 1.2 or higher | Centralized KMS; biennial key rotation |
| **Internal** (e.g., non-sensitive internal communications) | Encryption recommended but not mandatory for non-sensitive data | TLS 1.2 or higher | Standard certificate management |
| **Public** | Not required | HTTPS (TLS 1.2 or higher) recommended | Standard certificate management |

---

## 5. Approved Algorithms and Key Lengths

### 5.1 Overview

*Provide guidance on how to interpret this section. Emphasize that only algorithms listed here are approved and that any deviation requires formal exception approval.*

This section defines the approved cryptographic algorithms and minimum key lengths for use within [Organization Name]. This list is reviewed at least annually and updated in response to cryptographic research developments, regulatory guidance, and NIST/NACSA advisories.

Only algorithms listed in this section and Appendix A (Approved Algorithm Register) are permitted for use in [Organization Name] systems. Requests to use algorithms not listed here must be submitted as a cryptographic exception request to the Head of Cryptography for review.

### 5.2 Symmetric Encryption Algorithms

*Define approved symmetric encryption algorithms, their modes, and minimum key lengths for encrypting data at rest and other symmetric use cases.*

| Algorithm | Approved Key Lengths | Approved Modes | Use Case | Status |
|---|---|---|---|---|
| AES (Advanced Encryption Standard) | 128-bit (minimum), **256-bit (recommended)** | GCM, CBC (with HMAC), CTR | Data at rest; bulk data encryption | **Approved** |
| AES-256-GCM | 256-bit | GCM | Authenticated encryption; preferred for new implementations | **Approved – Preferred** |
| AES-128-CBC | 128-bit | CBC with PKCS7 padding and HMAC | Legacy system compatibility only | Approved (with HMAC) |
| ChaCha20-Poly1305 | 256-bit | N/A | Mobile and resource-constrained environments | **Approved** |
| 3DES (Triple DES) | 112/168-bit | — | — | **Deprecated – Do Not Use** |
| DES | 56-bit | — | — | **Prohibited** |
| RC4 | — | — | — | **Prohibited** |
| Blowfish | — | — | — | **Prohibited** |

> **Note:** AES modes without authentication (e.g., ECB, raw CBC without HMAC) are not approved for any new implementation. ECB mode is prohibited.

### 5.3 Asymmetric Encryption and Digital Signature Algorithms

*Define approved asymmetric algorithms and key lengths for key exchange, digital signatures, and certificate-based authentication.*

| Algorithm | Minimum Key Length | Recommended Key Length | Use Case | Status |
|---|---|---|---|---|
| RSA | 2048-bit | **3072-bit or 4096-bit** | Digital signatures; key encapsulation; TLS certificates | **Approved** |
| ECC – ECDSA | 256-bit (P-256 / secp256r1) | **384-bit (P-384)** | Digital signatures; TLS; code signing | **Approved – Preferred** |
| ECC – ECDH / ECDHE | 256-bit (P-256) | **384-bit (P-384)** | Key exchange; TLS key agreement | **Approved – Preferred** |
| EdDSA (Ed25519) | 255-bit | N/A | Digital signatures; SSH keys | **Approved** |
| DSA | 1024-bit | — | — | **Deprecated – Do Not Use** |
| RSA < 2048-bit | — | — | — | **Prohibited** |
| Diffie-Hellman (classic) | 2048-bit minimum | — | Legacy TLS compatibility only | Deprecated |

### 5.4 Hashing and Message Authentication Algorithms

*Define approved hash functions and HMAC algorithms. Emphasize prohibition of MD5 and SHA-1 for security-sensitive uses.*

| Algorithm | Output Size | Use Case | Status |
|---|---|---|---|
| SHA-256 (SHA-2 family) | 256-bit | General hashing; integrity verification; HMAC | **Approved** |
| SHA-384 (SHA-2 family) | 384-bit | High-assurance hashing; certificate signatures | **Approved** |
| SHA-512 (SHA-2 family) | 512-bit | High-assurance hashing | **Approved** |
| SHA-3 (Keccak) | 256/384/512-bit | Approved where SHA-3 is explicitly required | **Approved** |
| HMAC-SHA-256 | 256-bit | Message authentication; API integrity | **Approved** |
| HMAC-SHA-512 | 512-bit | High-assurance message authentication | **Approved** |
| SHA-1 | 160-bit | — | **Deprecated – Do Not Use for Security** |
| MD5 | 128-bit | — | **Prohibited for security use** |
| MD4 / MD2 | — | — | **Prohibited** |

> **Note:** SHA-1 and MD5 may only be used in non-security contexts (e.g., non-cryptographic checksums for file integrity in non-sensitive, non-adversarial environments) and must be documented as exceptions.

### 5.5 Key Derivation Functions (KDFs) and Password Hashing

*Define approved KDFs for deriving cryptographic keys from passwords or other input material.*

| Algorithm | Parameters (Minimum) | Use Case | Status |
|---|---|---|---|
| Argon2id | Memory ≥ 64MB; Iterations ≥ 3; Parallelism ≥ 4 | Password hashing; credential storage | **Approved – Preferred** |
| bcrypt | Work factor ≥ 12 | Password hashing; legacy system compatibility | **Approved** |
| PBKDF2-HMAC-SHA-256 | Iterations ≥ 600,000 | Password-based key derivation; FIPS-compliant environments | **Approved** |
| scrypt | N ≥ 16384; r = 8; p ≥ 1 | Password hashing | **Approved** |
| HKDF (HMAC-based KDF) | With SHA-256 or SHA-384 | Key derivation from existing key material | **Approved** |
| MD5-based KDF | — | — | **Prohibited** |
| Plain SHA-1/SHA-256 (unsalted) | — | — | **Prohibited for passwords** |

### 5.6 Transport Layer Security (TLS) Protocol Versions

*Specify approved TLS versions and cipher suites for protecting data in transit.*

| Protocol Version | Status | Notes |
|---|---|---|
| TLS 1.3 | **Approved – Preferred** | Must be supported by all new implementations; preferred over TLS 1.2 |
| TLS 1.2 | **Approved** | Permitted with approved cipher suites; must not use RC4, 3DES, or export ciphers |
| TLS 1.1 | **Deprecated – Do Not Use** | Must be disabled on all systems |
| TLS 1.0 | **Prohibited** | Must be disabled on all systems |
| SSL 3.0 | **Prohibited** | Must be disabled on all systems |
| SSL 2.0 | **Prohibited** | Must be disabled on all systems |

### 5.7 Approved TLS 1.2 Cipher Suites

*List the specific cipher suites approved for TLS 1.2 connections. Suites providing PFS must be prioritized.*

| Cipher Suite | Key Exchange | Authentication | Encryption | MAC | PFS |
|---|---|---|---|---|---|
| TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 | ECDHE | RSA | AES-256-GCM | SHA-384 | Yes |
| TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 | ECDHE | ECDSA | AES-256-GCM | SHA-384 | Yes |
| TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 | ECDHE | RSA | AES-128-GCM | SHA-256 | Yes |
| TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 | ECDHE | ECDSA | AES-128-GCM | SHA-256 | Yes |
| TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 | ECDHE | RSA | ChaCha20-Poly1305 | SHA-256 | Yes |
| TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 | DHE | RSA | AES-256-GCM | SHA-384 | Yes |

> Cipher suites not listed above are not approved for use in TLS 1.2 implementations at [Organization Name].

### 5.8 Post-Quantum Cryptography Readiness

*Acknowledge emerging post-quantum threats and state the organization's posture and roadmap.*

[Organization Name] acknowledges the long-term cryptographic risk posed by advances in quantum computing, which have the potential to render current asymmetric cryptographic algorithms (RSA, ECDSA, ECDH) insecure. The following positions are adopted:

- The Head of Cryptography shall maintain a **Cryptographic Agility Register** (Appendix B) documenting all cryptographic dependencies across the organisation's systems to facilitate migration readiness.
- [Organization Name] will monitor NIST's Post-Quantum Cryptography (PQC) standardisation programme and NACSA guidance, and will develop a PQC migration roadmap by [Target Date].
- Approved PQC algorithms will be incorporated into this standard following finalization of applicable standards and regulatory guidance.
- Systems with extended design lifetimes (> 10 years) should consider hybrid cryptography approaches in consultation with the Head of Cryptography.

---

## 6. Encryption of Data at Rest

### 6.1 Requirements

*Specify encryption requirements for data stored on all media types including databases, file systems, backup media, and removable storage.*

All data at rest classified as Confidential or above must be encrypted using the approved algorithms defined in Section 5. The following requirements apply:

**6.1.1 Database Encryption**

| Requirement | Description |
|---|---|
| **Scope** | All databases containing customer PII, financial data, or data classified Confidential or above |
| **Method** | Transparent Data Encryption (TDE) at the database layer, or field-level encryption for highly sensitive fields |
| **Algorithm** | AES-256 minimum |
| **Key Management** | Database master keys must be managed via the approved KMS or HSM, not stored within the database itself |
| **Backup Encryption** | Database backups must be encrypted using the same or equivalent standards prior to storage or transmission |

**6.1.2 File System and Storage Encryption**

| Storage Type | Encryption Requirement | Approved Implementation |
|---|---|---|
| Server local disks (OS and data) | Full-disk encryption required for servers hosting sensitive data | [Approved Tool/Platform, e.g., dm-crypt/LUKS, BitLocker] |
| SAN / NAS storage | Encryption at storage layer required for Confidential data volumes | [Approved Tool/Platform] |
| Cloud object storage (e.g., S3, Azure Blob) | Server-side encryption (SSE) with customer-managed keys (CMK) required for Confidential data | SSE-KMS with [Approved Cloud KMS] |
| Backup media (tape / external drives) | Encryption required before data leaves organisational control | AES-256; keys managed separately from media |
| Removable media (USB, optical) | Encryption required for any Confidential or above data | [Approved Tool/Platform] |

**6.1.3 Endpoint and Workstation Encryption**

- Full-disk encryption is mandatory for all company-issued laptops and workstations.
- Encryption keys must be escrowed with the IT Security team to facilitate recovery.
- Mobile devices (smartphones and tablets) used for corporate data must enforce device encryption, managed via the Mobile Device Management (MDM) solution ([Solution Name]).

**6.1.4 Cloud and Virtualised Environments**

- Virtual machine disk images containing Confidential data must be encrypted at rest.
- Customer-Managed Keys (CMK) must be used in preference to provider-managed keys for Confidential and above data in cloud environments.
- Key material must reside in the organisation's approved KMS or HSM, not solely within the cloud provider's managed key store, unless the cloud HSM service is independently assessed and approved.

### 6.2 Implementation Verification

*Describe how compliance with at-rest encryption requirements is verified and evidenced.*

- System owners must document encryption implementation details in the system's Security Design document or Configuration Baseline.
- IT Security will conduct quarterly automated scans to identify unencrypted storage volumes and databases containing sensitive data.
- Evidence of encryption (e.g., configuration screenshots, scan reports) must be maintained and made available for audit purposes.
- Findings from scans and audits must be tracked in the IT Risk register and remediated within agreed timescales.

---

## 7. Encryption of Data in Transit

### 7.1 Requirements

*Define encryption requirements for all network communication channels, API communications, and data transfer mechanisms.*

All data in transit classified as Confidential or above must be protected using encrypted communication channels. The following requirements apply across all communication types:

**7.1.1 Web and API Communications**

| Channel Type | Minimum Requirement | Additional Requirements |
|---|---|---|
| External-facing web applications | TLS 1.2; TLS 1.3 preferred | HTTP Strict Transport Security (HSTS) enabled; HSTS preload recommended |
| Internal web applications handling Confidential data | TLS 1.2 minimum | Valid certificates from approved CA |
| RESTful APIs (external) | TLS 1.3 preferred; TLS 1.2 minimum with PFS cipher suites | Mutual TLS (mTLS) for machine-to-machine communications |
| RESTful APIs (internal) | TLS 1.2 minimum | mTLS recommended |
| GraphQL / WebSocket connections | TLS 1.2 minimum | WSS (WebSocket Secure) required |
| SOAP / XML Web Services | TLS 1.2 minimum | WS-Security with encryption where applicable |

**7.1.2 Email and Messaging**

| Channel | Requirement |
|---|---|
| Inbound/outbound SMTP (MTA-to-MTA) | STARTTLS with TLS 1.2 minimum; DANE/MTA-STS recommended |
| Email containing Confidential data (user-to-user) | S/MIME or PGP encryption required; or secure messaging portal |
| Internal messaging / collaboration tools | TLS in transit; at-rest encryption as per Section 6 |
| Secure file transfer | SFTP (SSH-2) or FTPS (TLS 1.2+); plain FTP prohibited |

**7.1.3 Database and Backend Communications**

| Connection Type | Requirement |
|---|---|
| Application-to-database connections (Confidential data) | TLS 1.2 minimum; certificate verification enforced; self-signed certificates not permitted in production |
| Database replication | TLS 1.2 minimum or IPSec tunnel |
| Message queuing / streaming (e.g., Kafka, RabbitMQ) | TLS 1.2 minimum; mTLS recommended for inter-service communication |

**7.1.4 Network Infrastructure**

| Connection Type | Requirement |
|---|---|
| Remote access VPN | TLS 1.3 or IKEv2/IPSec with AES-256 and SHA-256 minimum |
| Site-to-site VPN / WAN links | IKEv2/IPSec with AES-256-GCM and ECDH group 14 or higher |
| Wireless networks (corporate) | WPA3-Enterprise; WPA2-Enterprise minimum (AES-CCMP only) |
| Network management traffic (SSH, SNMP) | SSH-2 with Ed25519 or RSA-4096 host keys; SNMPv3 with AES privacy; Telnet and SNMPv1/v2 prohibited |
| Inter-data-centre links carrying Confidential data | Encrypted at application or transport layer; MACSec or IPSec at network layer |

### 7.2 Certificate Management Requirements

*Define requirements for the management of TLS/SSL certificates, including issuance, renewal, and revocation.*

- All certificates used in production systems must be issued by a Certificate Authority listed in the [Organization Name] Approved CA Register (Appendix C).
- Self-signed certificates are prohibited in production environments. A process for managing certificates in development and testing environments must be defined.
- Certificate validity periods must not exceed **[e.g., 397 days / 1 year]** in line with industry best practice.
- An automated certificate lifecycle management system must be used to track certificate expiry and trigger timely renewal. Certificates must be renewed at least **30 days** before expiry.
- Certificates must use a minimum key size of RSA-2048 (RSA-3072 recommended) or ECC P-256 or above.
- Certificate signing requests (CSRs) must be generated with SHA-256 or stronger signature algorithms.
- Wildcard certificates may only be used where operationally necessary and must be approved by the Head of Cryptography. Usage must be limited in scope.
- Certificate revocation must be processed within **[e.g., 4 hours]** of key compromise or certificate misuse being confirmed. Revocation must be propagated via CRL and/or OCSP.

---

## 8. Key Lifecycle Management

### 8.1 Overview

*Describe the complete lifecycle of cryptographic keys, from generation through to destruction. Reference any supporting key management procedures.*

Effective key lifecycle management is foundational to the security of all cryptographic controls. [Organization Name] manages cryptographic keys across the following lifecycle phases, in accordance with NIST SP 800-57 and BNM RMiT requirements. Supporting operational procedures are documented in the **Cryptographic Key Management Procedure** ([Document ID]).

### 8.2 Key Lifecycle Phases

**8.2.1 Key Generation**

| Requirement | Detail |
|---|---|
| **Randomness** | Keys must be generated using a FIPS-approved or equivalent Cryptographically Secure Pseudo-Random Number Generator (CSPRNG). |
| **Environment** | Master keys and root keys must be generated within an HSM. Application-level keys may be generated by the approved KMS using an HSM-backed root key. |
| **Key Ceremony** | Generation of master keys must be conducted via a formal key ceremony with split knowledge and dual control, documented and witnessed. |
| **Documentation** | All key generation events must be logged with timestamp, key type, key identifier, and responsible personnel. |

**8.2.2 Key Distribution and Storage**

| Requirement | Detail |
|---|---|
| **Transmission** | Key material must never be transmitted in plaintext. Keys must be wrapped using an approved key-wrapping algorithm (e.g., AES Key Wrap per RFC 3394) or transmitted via an HSM-to-HSM secure channel. |
| **Storage** | Encryption keys must never be stored in plaintext on the same system or media as the data they protect. |
| **Access Control** | Access to key material must be controlled using least-privilege principles. Separation of duties must be enforced for master key custodians. |
| **Escrow** | Key escrow must be implemented for business-critical encryption keys to ensure recoverability. Escrowed keys must be stored with equivalent security controls to the primary key. |

**8.2.3 Key Usage and Operational Period**

| Key Type | Maximum Cryptoperiod | Notes |
|---|---|---|
| Master / Root Keys | 2 years | HSM-managed; dual-control rotation ceremony required |
| Data Encryption Keys (DEKs) | 1 year | Automated rotation via KMS preferred |
| TLS / Session Keys | Per session | Generated per session; ephemeral keys for PFS |
| TLS Certificates (server) | 1 year (maximum [397 days]) | Automated renewal required |
| Code Signing Keys | 1–3 years | Per risk assessment; revocation plan required |
| SSH Host Keys | 2 years | Rotation upon suspected compromise or change of ownership |
| API Signing Keys | 1 year | Automated rotation preferred |
| [Additional Key Type] | [Cryptoperiod] | [Notes] |

**8.2.4 Key Rotation**

- Key rotation must be performed at the end of each cryptoperiod or upon any of the following trigger events:
  - Suspected or confirmed key compromise
  - Personnel with key access departing the organisation
  - System breach or security incident affecting systems using the key
  - Change of key custodian
  - Regulatory requirement or audit finding
- Rotation procedures must be documented in the Key Management Procedure ([Document ID]) and must include a transition period where both old and new keys are active to avoid service disruption.
- Rotation of master keys must follow a formal key ceremony process.

**8.2.5 Key Revocation and Suspension**

- A key must be revoked immediately upon confirmed compromise, suspected misuse, or when it is no longer required.
- Revocation procedures must ensure that all systems and relying parties are notified and that the revoked key cannot be used for future encryption or authentication operations.
- For TLS certificates, revocation must be propagated via CRL and OCSP within the timeframes specified in Section 7.2.
- The revocation event must be logged and the incident managed in accordance with the Incident Response Policy ([Document ID]).

**8.2.6 Key Destruction**

| Requirement | Detail |
|---|---|
| **Method** | Keys must be securely destroyed using cryptographic erasure or physical destruction of the key storage medium. Overwriting is not sufficient for HSM-held keys. |
| **HSM Keys** | HSM-held keys must be destroyed using the HSM's zeroisation function with an audit log generated. |
| **Documentation** | Key destruction must be documented, including key identifier, date, method, and witness or approver. |
| **Data Dependency** | Before destroying a key, confirmation must be obtained that all data encrypted by that key has been either decrypted, re-encrypted under a new key, or confirmed as no longer required. |

### 8.3 Key Custodian Responsibilities

*Define the responsibilities of individuals designated as key custodians.*

Key custodians are personnel formally designated with responsibility for the physical or logical custody of cryptographic key material. Key custodians must:

- Understand and comply with all key management procedures.
- Protect their key custodian credentials (smart cards, PINs, HSM activation credentials) and not share them with any other person.
- Report any suspected compromise of key material or custody credentials immediately to the Head of Cryptography.
- Participate in key ceremonies as required.
- Formally hand over custodian responsibilities and credentials upon role change or departure from the organisation.

### 8.4 Key Management System (KMS) Requirements

*Specify requirements for the technical platform used to manage keys.*

[Organization Name] uses **[KMS Platform Name / Cloud KMS Service]** as the primary Key Management System. The KMS must:

- Enforce access controls and maintain complete audit logs of all key operations (creation, use, rotation, deletion).
- Support automatic key rotation with configurable cryptoperiods.
- Be backed by an HSM (on-premise or cloud HSM service) for root key material.
- Support key versioning to allow decryption of data encrypted under previous key versions during rotation transitions.
- Provide high availability and disaster recovery capabilities commensurate with the criticality of the systems it serves.
- Support integration with the organisation's centralized logging and SIEM platform ([SIEM Platform Name]).

---

## 9. HSM Usage Requirements

### 9.1 Purpose and Scope of HSM Usage

*Explain why HSMs are required, what functions they must perform, and which key types mandate HSM protection.*

Hardware Security Modules (HSMs) are tamper-resistant cryptographic devices designed to generate, store, and manage cryptographic keys in a secure environment that prevents extraction of key material in plaintext. [Organization Name] mandates HSM usage for the protection of high-value cryptographic key material, in accordance with BNM RMiT Clause 10.22 and industry best practice.

The following key types and operations **must** be protected by an HSM:

| Use Case | HSM Requirement |
|---|---|
| Master encryption keys / Key Encryption Keys (KEKs) | Mandatory – keys must never leave the HSM in plaintext |
| Root CA and Intermediate CA private keys | Mandatory |
| Code signing private keys | Mandatory |
| Payment processing keys (e.g., PIN encryption keys, card master keys) | Mandatory – subject to PCI HSM requirements *(if applicable)* |
| High-value transaction signing keys | Mandatory |
| TLS private keys for critical/external-facing systems | Strongly recommended; mandatory for internet-facing services handling financial transactions |
| Database master keys for systems holding Confidential data | Mandatory |

### 9.2 HSM Certification Requirements

| Requirement | Standard |
|---|---|
| **Minimum Certification Level** | FIPS 140-2 Level 3 (or FIPS 140-3 Level 3 once available and operationally feasible) |
| **Alternative** | Common Criteria EAL4+ where FIPS certification is not available for the required use case |
| **Payment HSMs** | PCI PTS HSM v3 or later *(if applicable)* |

The approved HSM platforms used by [Organization Name] are:

| HSM Platform | Type | Certification | Use Case | Location |
|---|---|---|---|---|
| [HSM Platform 1, e.g., Thales Luna Network HSM] | On-premise network HSM | FIPS 140-2 Level 3 | Master keys; CA keys | [Data Centre Location] |
| [HSM Platform 2, e.g., AWS CloudHSM / Azure Dedicated HSM] | Cloud HSM | FIPS 140-2 Level 3 | Cloud workload keys | [Cloud Region] |
| [HSM Platform 3] | [Type] | [Certification] | [Use Case] | [Location] |

### 9.3 HSM Operational Requirements

**9.3.1 Access Control**

- Access to HSMs must be restricted to authorised HSM administrators and key custodians.
- HSMs must enforce multi-person authentication (M of N) for all sensitive operations, including key generation, key export, and policy changes. The minimum threshold is **[e.g., 2 of 3]** custodians.
- HSM administrator credentials (smart cards, PINs) must be stored securely and separately from the HSM.
- A complete list of HSM administrators and their access levels must be maintained and reviewed quarterly.

**9.3.2 Physical Security**

- On-premise HSMs must be installed in a physically secured server room or data centre with access controls equivalent to, or exceeding, the organisation's data centre physical security standards.
- HSMs must be protected from tampering, and any tamper-evident seals must be inspected during routine maintenance.
- HSMs must be powered by a secure, reliable power supply and protected by appropriate environmental controls.

**9.3.3 Audit and Logging**

- All HSM operations must be logged, including key creation, deletion, use, policy changes, and administrator authentication events.
- HSM audit logs must be exported to the centralized SIEM ([SIEM Platform Name]) in real time or near-real time and must not be modifiable by HSM administrators.
- Log integrity must be protected using HSM-generated signatures or equivalent tamper-evident mechanisms.
- HSM audit logs must be retained for a minimum of **[e.g., 7 years]** in accordance with the organisation's Log Retention Policy ([Document ID]).

**9.3.4 Backup and Recovery**

- HSM configuration and key material must be backed up securely, using the HSM vendor's approved encrypted backup mechanism.
- HSM backups must be tested at least **annually** to confirm recoverability.
- Backup media must be stored in a geographically separate secure location, with access controls equivalent to the primary HSM.
- A Disaster Recovery (DR) HSM must be maintained in the DR environment and kept synchronised with the production HSM using the vendor's approved replication or backup-restore mechanism.

**9.3.5 Maintenance and Patch Management**

- HSM firmware must be maintained in accordance with vendor guidance and patched promptly upon availability of security updates.
- All firmware upgrades must be tested in a non-production environment before deployment to production HSMs.
- Firmware changes must be subject to the organisation's Change Management process ([Document ID]).

**9.3.6 HSM Decommissioning**

- Upon decommissioning, HSM key material must be fully zeroised using the HSM vendor's approved zeroisation procedure, prior to physical disposal.
- Zeroisation must be witnessed and documented by at least two authorised personnel.
- Decommissioned HSMs must be disposed of in accordance with the organisation's Secure Disposal Policy ([Document ID]).

---

## 10. Exceptions and Compensating Controls

### 10.1 Exception Process

*Define the formal process for requesting, approving, and managing exceptions to this standard.*

Compliance with this standard is mandatory. Exceptions will only be considered where full compliance is technically infeasible, operationally impractical, or where the cost of compliance is disproportionate relative to the risk, as determined by the Head of Cryptography and CISO.

All exceptions must be:

1. Submitted in writing using the Cryptographic Exception Request Form (Appendix D).
2. Reviewed and technically assessed by the Head of Cryptography.
3. Formally approved by the CISO. Exceptions affecting systems subject to BNM or PCI DSS oversight may require additional approval from the CRO or Board Risk Committee.
4. Accompanied by documented **compensating controls** that mitigate the risk introduced by the non-compliant configuration.
5. Time-bounded with a defined remediation deadline.
6. Recorded in the **Cryptographic Exceptions Register** maintained by IT Risk and Compliance.

### 10.2 Exception Register

*This register tracks all active exceptions to the encryption standards. It must be reviewed quarterly by IT Risk and Compliance.*

| Exception ID | System / Component | Non-Compliant Control | Risk Assessment | Compensating Control(s) | Approved By | Approval Date | Remediation Deadline | Status |
|---|---|---|---|---|---|---|---|---|
| EX-CRYPT-001 | [System Name] | [e.g., TLS 1.0 still enabled] | [High/Medium/Low] | [e.g., Network segmentation; WAF inspection] | [Name / Role] | [Date] | [Date] | Open / Closed |
| [EX-CRYPT-XXX] | [System Name] | [Non-Compliant Control] | [Risk Level] | [Compensating Controls] | [Approver] | [Date] | [Date] | [Status] |

---

## 11. Compliance Monitoring and Audit

### 11.1 Ongoing Monitoring

*Describe the mechanisms by which compliance with this standard is continuously monitored.*

IT Security will maintain an ongoing programme of compliance monitoring for encryption controls, including:

| Activity | Frequency | Responsible | Output |
|---|---|---|---|
| Automated scan for unencrypted storage volumes and databases | Quarterly | IT Security Team | Compliance report; findings logged in IT Risk Register |
| TLS configuration scanning (internal and external facing) | Quarterly | IT Security Team | SSL/TLS health report; cipher suite compliance report |
| Certificate inventory and expiry monitoring | Continuous (automated alerts) | IT Security Team | Certificate dashboard; expiry alerts at 60 and 30 days |
| HSM audit log review | Monthly | Head of Cryptography | HSM activity report |
| KMS access and key usage review | Quarterly | Head of Cryptography / IT Security | KMS usage report; anomaly report |
| Review of Cryptographic Exceptions Register | Quarterly | IT Risk and Compliance | Updated register; escalation of overdue remediation items |
| Vendor / third-party encryption compliance assessment | Annual | IT Risk and Compliance | Third-party assessment report |

### 11.2 Metrics and Key Performance Indicators

*Define measurable indicators used to assess the health of cryptographic controls.*

| KPI | Target | Measurement Method |
|---|---|---|
| Percentage of systems using approved TLS versions | 100% | TLS scanning tool |
| Percentage of databases with encryption-at-rest enabled | 100% for Confidential data | Automated scan |
| Certificate expiry (expired certificates in production) | 0 | Certificate monitoring platform |
| Mean time to remediate TLS/encryption findings | < [e.g., 30 days] for High; < [e.g., 90 days] for Medium | IT Risk Register |
| Percentage of master keys stored in HSM | 100% | KMS / HSM inventory |
| Overdue cryptographic exceptions | 0 | Exceptions register |
| Open HSM audit log anomalies unresolved > 30 days | 0 | HSM log review |

### 11.3 Internal Audit

The Internal Audit function will conduct an independent assessment of encryption standards compliance as part of its annual IT audit plan or as directed by the Audit Committee. The scope of audit may include, but is not limited to:

- Verification that systems comply with approved algorithm and key length requirements.
- Assessment of key lifecycle management controls including generation, rotation, and destruction.
- Testing of HSM access controls, audit logging, and backup procedures.
- Review of the exception approval and tracking process.
- Review of evidence supporting system owner attestations.

Audit findings must be tracked to closure by IT Risk and Compliance and reported to the CISO and Audit Committee.

---

## 12. Non-Compliance and Consequences

### 12.1 Non-Compliance Definition

*Define what constitutes non-compliance with this standard.*

Non-compliance with this standard includes, but is not limited to:

- Use of prohibited or deprecated cryptographic algorithms or protocols in systems processing Confidential or above data without an approved exception.
- Storage of cryptographic keys in plaintext or alongside the data they protect.
- Failure to rotate keys within the defined cryptoperiod without a documented exception.
- Bypass of HSM requirements for key types that mandate HSM protection.
- Failure to revoke compromised keys or certificates within required timeframes.
- Failure to disclose known non-compliance during system reviews or audits.
- Implementation of custom cryptographic algorithms.

### 12.2 Consequences of Non-Compliance

Non-compliance identified through monitoring, self-assessment, or audit will be managed in accordance with the [Organization Name] IT Risk Management Framework and applicable HR and disciplinary policies. Consequences may include:

- Mandatory remediation within defined timeframes.
- Formal risk acceptance process and Board-level escalation for material issues.
- Disciplinary action for individual personnel responsible for willful non-compliance.
- Regulatory notification to BNM where non-compliance represents a material breach of RMiT obligations.
- Suspension or termination of third-party contracts where vendors fail to meet contractual cryptographic compliance obligations.

---

## 13. Review and Approval

### 13.1 Review Cycle

This document must be reviewed:

- **At minimum annually**, aligned with the organisation's annual policy review cycle.
- **Upon significant change** to the organisation's technology environment, cryptographic threat landscape, or applicable regulatory requirements.
- **Following a security incident** involving cryptographic failures or key compromise.
- **In response to material updates** to BNM RMiT, NIST cryptographic guidance, or NACSA frameworks.

The Head of Cryptography is responsible for initiating the review and coordinating input from all relevant stakeholders. The CISO is responsible for approving the reviewed document prior to release.

### 13.2 Version History

*Record all versions of this document, including the changes made in each revision.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | [Reviewer Name] | Initial draft for internal review |
| 0.2 | [Date] | [Author Name] | [Reviewer Name] | Incorporated comments from IT Security and Risk teams |
| 1.0 | [Effective Date] | [Author Name] | [Reviewer Name] | Approved baseline version |
| [1.1] | [Date] | [Author Name] | [Reviewer Name] | [Brief description of changes] |

### 13.3 Approval Sign-Off

*All approvers must formally sign off on this document before it is issued. Electronic signatures or recorded approvals in the document management system are acceptable.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Cryptography (Author / Primary Reviewer) | [Name] | | [Date] |
| Chief Information Security Officer (Document Owner) | [Name] | | [Date] |
| Chief Technology Officer (Technical Approval) | [Name] | | [Date] |
| Chief Risk Officer (Risk Approval) | [Name] | | [Date] |
| Head of IT Risk and Compliance (Compliance Approval) | [Name] | | [Date] |
| Chief Executive Officer / Authorised Delegate (Final Approval) | [Name] | | [Date] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Title | Issuer | Relevant Section |
|---|---|---|---|
| BNM/RH/PD 028-119 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | **Clause 10.22** – Encryption and cryptographic controls |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Section 9 – Security Principle |
| [BNM Circular Reference] | Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Relevant Section] |
| [NACSA Reference] | National Cybersecurity Policy / Framework | NACSA | [Relevant Control Reference] |

### 14.2 Standards and Frameworks

| Reference | Title | Body |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems – Requirements | ISO/IEC |
| ISO/IEC 27002:2022 | Information Security Controls (Control 8.24: Use of Cryptography) | ISO/IEC |
| NIST SP 800-57 Part 1 Rev. 5 | Recommendation for Key Management | NIST |
| NIST SP 800-175B Rev. 1 | Guideline for Using Cryptographic Standards in the Federal Government | NIST |
| NIST SP 800-52 Rev. 2 | Guidelines for TLS Implementations | NIST |
| NIST FIPS 140-2 / FIPS 140-3 | Security Requirements for Cryptographic Modules | NIST |
| NIST FIPS 197 | Advanced Encryption Standard (AES) | NIST |
| NIST FIPS 186-5 | Digital Signature Standard (DSS) | NIST |
| RFC 5246 | The Transport Layer Security (TLS) Protocol Version 1.2 | IETF |
| RFC 8446 | The Transport Layer Security (TLS) Protocol Version 1.3 | IETF |
| RFC 3394 | Advanced Encryption Standard (AES) Key Wrap Algorithm | IETF |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | PCI SSC |

### 14.3 Internal Documents

| Document ID | Title | Owner |
|---|---|---|
| [Doc ID] | Information Security Policy | CISO |
| [Doc ID] | Data Classification and Handling Policy | CISO |
| [Doc ID] | Cryptographic Key Management Procedure | Head of Cryptography |
| [Doc ID] | IT Risk Management Framework | CRO / IT Risk |
| [Doc ID] | Third-Party Risk Management Policy | IT Risk and Compliance |
| [Doc ID] | Incident Response Policy | CISO |
| [Doc ID] | Change Management Policy | CTO / IT Operations |
| [Doc ID] | Secure Development Lifecycle (SDLC) Policy | CTO / Development Lead |
| [Doc ID] | Log Retention Policy | CISO |
| [Doc ID] | Secure Disposal Policy | IT Operations |

---

## 15. Appendices

### Appendix A – Approved Algorithm Register

*This register provides the definitive list of approved cryptographic algorithms. It must be updated by the Head of Cryptography upon any change to approved algorithm status and distributed to all system owners.*

| Algorithm | Type | Key / Output Length | Approved Use Cases | Status | Approved Since | Notes |
|---|---|---|---|---|---|---|
| AES-256-GCM | Symmetric – Authenticated Encryption | 256-bit key | Data at rest; bulk encryption; storage | Approved – Preferred | [Date] | NIST FIPS 197 |
| AES-128-GCM | Symmetric – Authenticated Encryption | 128-bit key | Data at rest (minimum); lower-sensitivity workloads | Approved | [Date] | |
| AES-256-CBC + HMAC-SHA-256 | Symmetric | 256-bit key | Legacy system compatibility | Approved | [Date] | CBC alone without HMAC not approved |
| ChaCha20-Poly1305 | Symmetric – Authenticated Encryption | 256-bit key | Mobile; resource-constrained environments | Approved | [Date] | RFC 8439 |
| RSA-3072 | Asymmetric | 3072-bit | Certificates; key encapsulation | Approved – Preferred | [Date] | RSA-4096 for long-lived keys |
| RSA-2048 | Asymmetric | 2048-bit | Certificates (minimum); compatibility | Approved | [Date] | RSA-4096 preferred for new certificates |
| ECDSA P-256 | Asymmetric – Signing | 256-bit | Digital signatures; TLS | Approved | [Date] | NIST P-256 curve |
| ECDSA P-384 | Asymmetric – Signing | 384-bit | High-assurance signing; certificates | Approved – Preferred | [Date] | |
| ECDHE P-256 | Key Exchange | 256-bit | TLS key exchange | Approved | [Date] | PFS |
| ECDHE P-384 | Key Exchange | 384-bit | High-assurance TLS | Approved – Preferred | [Date] | PFS |
| Ed25519 | Asymmetric – Signing | 255-bit | SSH keys; code signing | Approved | [Date] | |
| SHA-256 | Hash | 256-bit | General hashing; HMAC; certificates | Approved | [Date] | |
| SHA-384 | Hash | 384-bit | High-assurance hashing | Approved | [Date] | |
| SHA-512 | Hash | 512-bit | High-assurance hashing | Approved | [Date] | |
| HMAC-SHA-256 | MAC | 256-bit | Message authentication; API integrity | Approved | [Date] | |
| PBKDF2-HMAC-SHA-256 | KDF | ≥ 600,000 iterations | Password-based key derivation | Approved | [Date] | NIST SP 800-132 |
| Argon2id | KDF / Password Hash | Memory ≥ 64MB; Iter ≥ 3 | Password storage | Approved – Preferred | [Date] | |
| bcrypt | Password Hash | Work factor ≥ 12 | Password storage; legacy | Approved | [Date] | |
| TLS 1.3 | Protocol | N/A | Transport encryption | Approved – Preferred | [Date] | RFC 8446 |
| TLS 1.2 | Protocol | N/A | Transport encryption | Approved | [Date] | With PFS cipher suites only |
| DES | Symmetric | 56-bit | — | **Prohibited** | N/A | |
| 3DES | Symmetric | 112/168-bit | — | **Deprecated** | N/A | |
| RC4 | Stream Cipher | — | — | **Prohibited** | N/A | |
| MD5 | Hash | 128-bit | — | **Prohibited** | N/A | |
| SHA-1 | Hash | 160-bit | — | **Deprecated** | N/A | Non-security use only with exception |
| TLS 1.0 / 1.1 | Protocol | — | — | **Prohibited** | N/A | |
| SSL 2.0 / 3.0 | Protocol | — | — | **Prohibited** | N/A | |

---

### Appendix B – Cryptographic Agility Register

*This register documents all cryptographic dependencies across the organisation's systems to support post-quantum migration planning and rapid algorithm deprecation response. Maintained by the Head of Cryptography; reviewed annually.*

| System / Application | Data Classification | Algorithm(s) In Use | Key Length | Key Storage | Managed By | Last Reviewed | PQC Risk | Migration Priority |
|---|---|---|---|---|---|---|---|---|
| [System Name] | [Confidential / Restricted] | [e.g., AES-256-GCM; RSA-2048] | [Key Lengths] | [HSM / KMS / Software] | [Team] | [Date] | [High / Medium / Low] | [High / Medium / Low] |
| [System Name] | | | | | | | | |

---

### Appendix C – Approved Certificate Authorities

*List all Certificate Authorities whose certificates are trusted within [Organization Name] systems. This list must be reviewed annually.*

| CA Name | Type | Approved Use Cases | Validity | Notes |
|---|---|---|---|---|
| [Organization Name] Internal Root CA | Internal CA | Internal services; mTLS; development | Perpetual | Managed via [PKI Platform] |
| [Organization Name] Internal Issuing CA | Internal Subordinate CA | Server certificates for internal systems | Per certificate policy | |
| DigiCert | Public CA | External-facing TLS; public-facing services | Per certificate | |
| Sectigo / Comodo | Public CA | [Approved use cases] | Per certificate | |
| GlobalSign | Public CA | [Approved use cases] | Per certificate | |
| Let's Encrypt | Public CA | Non-critical external services; development *(approval required for production use)* | 90 days | Automated renewal required |
| [Additional CA] | [Type] | [Use Cases] | [Validity] | [Notes] |

---

### Appendix D – Cryptographic Exception Request Form

*This form must be completed for all requests to deviate from the requirements of this standard and submitted to the Head of Cryptography for review and approval.*

---

**CRYPTOGRAPHIC EXCEPTION REQUEST**

| Field | Detail |
|---|---|
| **Exception Request ID** | [Auto-assigned by IT Risk and Compliance] |
| **Date of Request** | [Date] |
| **Requested By** | [Name, Role, Department] |
| **System / Component Affected** | [System Name and Description] |
| **Data Classification** | [Classification of data involved] |
| **Non-Compliant Control** | [Specify the control in this standard that cannot be met] |
| **Current Configuration** | [Describe the current non-compliant configuration] |
| **Reason for Non-Compliance** | [Technical or operational justification] |
| **Risk Assessment** | [Risk rating: Critical / High / Medium / Low; narrative description of the risk introduced by the exception] |
| **Proposed Compensating Control(s)** | [Describe the controls that will mitigate the risk] |
| **Remediation Plan** | [Describe the plan to achieve full compliance; include milestones] |
| **Proposed Exception Expiry Date** | [Date by which compliance will be achieved or exception reviewed] |

**Approval:**

| Role | Name | Decision | Signature | Date |
|---|---|---|---|---|
| Head of Cryptography | [Name] | Approved / Rejected | | [Date] |
| CISO | [Name] | Approved / Rejected | | [Date] |
| CRO *(if applicable)* | [Name] | Noted | | [Date] |

---

### Appendix E – Key Ceremony Procedure Checklist

*This checklist must be completed and filed for every cryptographic key ceremony event.*

| Step | Action | Completed By | Date / Time | Notes |
|---|---|---|---|---|
| 1 | Verify identity of all key ceremony participants | [Witness Name] | | |
| 2 | Confirm quorum of required key custodians present (M of N: [ ] of [ ]) | [Witness Name] | | |
| 3 | Confirm HSM is in known-good state; verify tamper seals | [Custodian Name] | | |
| 4 | Authenticate to HSM using required credentials | [Custodian Names] | | |
| 5 | Generate key material within HSM | [Custodian Name] | | |
| 6 | Assign key label, metadata, and usage policy | [Custodian Name] | | |
| 7 | Create encrypted backup of key material | [Custodian Name] | | |
| 8 | Verify backup integrity | [Custodian Name] | | |
| 9 | Distribute backup media to separate custodians | [Witness Name] | | |
| 10 | Record key identifier and ceremony details in Key Register | [IT Security] | | |
| 11 | Export HSM audit log for ceremony session | [IT Security] | | |
| 12 | All participants sign this checklist | | | |

**Witness Declaration:** We, the undersigned, confirm that this key ceremony was conducted in accordance with the [Organization Name] Cryptographic Key Management Procedure ([Document ID]) and that all steps were completed correctly and observed.

| Name | Role | Signature | Date |
|---|---|---|---|
| [Name] | Key Custodian | | [Date] |
| [Name] | Key Custodian | | [Date] |
| [Name] | Witness / IT Security | | [Date] |

---

### Appendix F – Glossary of Cryptographic Terms

*See Section 2.3 for primary definitions. This appendix provides extended definitions for technical terms used throughout the document.*

| Term | Extended Definition |
|---|---|
| **Authenticated Encryption** | An encryption mode that simultaneously provides confidentiality, integrity, and authenticity (e.g., AES-GCM, ChaCha20-Poly1305). Preferred over encryption-only modes for all new implementations. |
| **Certificate Pinning** | A technique where a client is configured to accept only specific certificates or public keys from a server, reducing the risk of man-in-the-middle attacks via rogue certificates. |
| **Cryptographic Agility** | The ability of a system to rapidly switch from one cryptographic algorithm or protocol to another, reducing the impact of algorithm deprecation or compromise. |
| **Dual Control** | A procedure requiring two or more separate individuals to access a cryptographic resource simultaneously. Prevents any single person from having complete access to key material. |
| **Key Escrow** | The storage of a copy of a cryptographic key with a trusted third party or secure internal system, to allow recovery in the event of key loss. |
| **Key Wrapping** | A process of encrypting a cryptographic key with another key (Key Encryption Key, KEK) for secure storage or transmission. |
| **Mutual TLS (mTLS)** | A variant of TLS where both the client and server authenticate each other using certificates, providing stronger assurance for machine-to-machine communications. |
| **Perfect Forward Secrecy (PFS)** | A property of TLS key exchange mechanisms (ECDHE, DHE) ensuring that compromise of a server's long-term private key does not compromise past session keys. |
| **Salt** | A random value added to input before hashing, preventing precomputed dictionary attacks (rainbow tables) against stored password hashes. |
| **Split Knowledge** | A procedure where a cryptographic key is split into multiple parts (key shares), each held by a different custodian, such that no single custodian knows the complete key. |
| **Zeroisation** | The process of securely erasing cryptographic key material from memory or storage by overwriting it with zeros or using a hardware-enforced destruction command. |

---

*End of Document*

---

| Document ID | [Document ID] | Version | 1.0 |
|---|---|---|---|
| **Classification** | Confidential | **Owner** | CISO / Head of Cryptography |
| **Next Review** | [Next Review Date] | **Status** | [Draft / Approved] |