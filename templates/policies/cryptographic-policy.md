# Cryptographic Policy

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

> **Confidentiality Notice:** This document is classified as **Confidential**. It contains sensitive information relating to cryptographic controls and key management practices of [Organization Name]. Distribution is restricted to authorized personnel with a business need-to-know. Unauthorized disclosure, reproduction, or distribution of this document is strictly prohibited and may result in disciplinary action and/or legal consequences.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
7. [Approved Algorithms and Key Lengths](#7-approved-algorithms-and-key-lengths)
8. [Key Lifecycle Management](#8-key-lifecycle-management)
9. [HSM Usage Requirements](#9-hsm-usage-requirements)
10. [Cryptographic Protocol Standards](#10-cryptographic-protocol-standards)
11. [Compliance, Monitoring, and Enforcement](#11-compliance-monitoring-and-enforcement)
12. [Exceptions and Waivers](#12-exceptions-and-waivers)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*Describe the intent of this policy — why it exists and what problem it solves within the organization's security posture. Reference the regulatory driver explicitly.*

This Cryptographic Policy establishes the requirements, standards, and guidelines governing the selection, implementation, and management of cryptographic controls within [Organization Name]. It ensures that cryptographic mechanisms are applied consistently and effectively to protect the confidentiality, integrity, and authenticity of information assets and to safeguard customer data processed, stored, and transmitted by [Organization Name].

This policy is issued in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.20**, and supports [Organization Name]'s obligations under:

- Bank Negara Malaysia RMiT Policy Document (effective [BNM RMiT Effective Date])
- Personal Data Protection Act 2010 (PDPA)
- National Cyber Security Agency (NACSA) guidelines, where applicable
- [Any additional internal or group-level policy]

The policy aims to:

- Define the minimum cryptographic standards acceptable for use within [Organization Name]
- Establish clear accountability for cryptographic key management activities
- Ensure the use of cryptography aligns with industry best practices and regulatory expectations
- Protect [Organization Name] and its customers from cryptographic vulnerabilities arising from outdated, weak, or improperly implemented cryptographic mechanisms

---

## 2. Scope

*Define clearly which systems, people, processes, and data types are covered. Be explicit about any exclusions and the rationale for them.*

### 2.1 In-Scope

This policy applies to:

**Systems and Infrastructure:**

- All information systems, applications, and platforms owned, operated, or managed by [Organization Name], including on-premises, cloud-hosted, and hybrid environments
- All network infrastructure, including internal networks, DMZs, and connections to external parties
- All endpoints, servers, databases, and storage media that process, store, or transmit sensitive or regulated data
- All third-party and vendor-managed systems that access, process, or store [Organization Name] data under contractual arrangement

**Data Classifications:**

- All data classified as Confidential, Restricted, or equivalent under [Organization Name]'s Data Classification Policy
- Customer personally identifiable information (PII) as defined under the Personal Data Protection Act 2010
- Financial transaction data and payment card data
- Authentication credentials, including passwords, tokens, and certificates
- Cryptographic key material at all stages of its lifecycle

**Personnel:**

- All employees, contractors, consultants, and third-party personnel who design, develop, operate, administer, or audit systems that employ cryptographic controls

**Processes:**

- Software development and integration activities involving encryption libraries or APIs
- Procurement of technology products with embedded cryptographic capabilities
- Data transfer and communication protocols between internal and external parties

### 2.2 Out-of-Scope

*Document any deliberate exclusions, with justification, to maintain a clear policy boundary.*

| Exclusion | Justification |
|---|---|
| [Exclusion Item 1] | [Reason / Compensating Control] |
| [Exclusion Item 2] | [Reason / Compensating Control] |
| Legacy systems under approved derogation | Covered under the Exception and Waiver process in Section 12 |

### 2.3 Geographic Scope

This policy applies to all [Organization Name] operations within Malaysia and, where [Organization Name] has overseas operations, shall serve as the minimum baseline standard, supplemented by local regulatory requirements where these are more stringent.

---

## 3. Regulatory and Policy Context

*List the external regulatory frameworks and internal policies that this document must comply with or that informed its creation.*

### 3.1 Regulatory Requirements

| Regulation / Standard | Issuing Body | Relevant Clause(s) | Requirement Summary |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.20 | Cryptographic controls for protecting confidentiality and integrity of data |
| Personal Data Protection Act 2010 | Government of Malaysia | Section 9 – Security Principle | Practical steps to protect personal data from loss, misuse, and unauthorized access |
| NACSA National Cybersecurity Policy | NACSA | [Relevant Section] | National baseline for cybersecurity, including use of encryption |
| Payment Card Industry Data Security Standard (PCI DSS) | PCI SSC | Requirement 3, 4 | Protection of cardholder data using strong cryptography |
| [Additional Regulation] | [Body] | [Clause] | [Summary] |

### 3.2 Internal Policy Hierarchy

*Map this document within [Organization Name]'s internal policy framework.*

| Level | Document | Relationship |
|---|---|---|
| Tier 1 – Framework | Information Security Policy | Parent policy; this document operationalizes cryptography requirements |
| Tier 2 – Policy | This document (Cryptographic Policy) | Sets mandatory requirements |
| Tier 3 – Standard | Cryptographic Implementation Standard | Technical specifications derived from this policy |
| Tier 3 – Standard | Key Management Standard | Detailed key management procedures derived from this policy |
| Tier 4 – Procedure | Key Generation Procedure | Step-by-step operational guidance |
| Tier 4 – Procedure | Certificate Management Procedure | Lifecycle management of digital certificates |

### 3.3 Alignment with BNM RMiT Clause 10.20

*Summarize how each sub-requirement of Clause 10.20 is addressed within this document.*

BNM RMiT Clause 10.20 requires financial institutions to implement cryptographic controls to ensure the security of information. [Organization Name] addresses this requirement through the following provisions within this policy:

| RMiT Sub-Clause | Requirement | Policy Section Addressing Requirement |
|---|---|---|
| 10.20(a) | Use of approved cryptographic algorithms | Section 7 |
| 10.20(b) | Key management lifecycle | Section 8 |
| 10.20(c) | Cryptographic protocol standards | Section 10 |
| 10.20(d) | Use of Hardware Security Modules (HSM) | Section 9 |
| [10.20(e)] | [Sub-requirement] | [Section] |

---

## 4. Definitions and Abbreviations

*Provide clear definitions for all technical and regulatory terms used in this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Algorithm** | A mathematical procedure used to perform encryption, decryption, hashing, or digital signing operations |
| **Asymmetric Cryptography** | A cryptographic system using a mathematically linked key pair: a public key for encryption/verification and a private key for decryption/signing |
| **Certificate Authority (CA)** | An entity trusted to issue, manage, and revoke digital certificates that bind public keys to identities |
| **Certificate Revocation List (CRL)** | A list published by a CA identifying certificates that have been revoked before their expiry date |
| **Cipher Suite** | A named combination of cryptographic algorithms used to negotiate and secure a TLS/SSL connection |
| **Cryptographic Key** | A sequence of bits used in conjunction with a cryptographic algorithm to transform plaintext to ciphertext or vice versa |
| **Digital Certificate** | An electronic credential issued by a CA that binds a public key to an entity's identity |
| **Digital Signature** | A cryptographic mechanism used to verify the authenticity and integrity of a message, document, or software |
| **Encryption** | The process of converting readable data (plaintext) into an unreadable format (ciphertext) using a cryptographic algorithm and key |
| **Hardware Security Module (HSM)** | A dedicated hardware device designed to generate, store, and manage cryptographic key material in a tamper-resistant environment |
| **Hash Function** | A one-way cryptographic function that produces a fixed-length output (digest) from an input of arbitrary length |
| **Key Ceremony** | A formal, documented procedure for generating or distributing cryptographic key material under dual-control conditions |
| **Key Custodian** | An individual formally designated as responsible for the physical or logical custody of a cryptographic key or key component |
| **Key Escrow** | The practice of storing copies of cryptographic keys with a trusted third party for recovery purposes |
| **Key Lifecycle** | The complete sequence of stages a cryptographic key passes through, from generation to destruction |
| **Key Management** | The set of processes and controls governing the generation, distribution, storage, use, rotation, and destruction of cryptographic keys |
| **OCSP** | Online Certificate Status Protocol — a mechanism for real-time certificate revocation checking |
| **Perfect Forward Secrecy (PFS)** | A property of cryptographic protocols ensuring that session keys are not compromised even if long-term keys are compromised |
| **PKI** | Public Key Infrastructure — the framework of policies, procedures, hardware, software, and people used to manage digital certificates and public key cryptography |
| **Salt** | A random value added to input data before hashing to prevent dictionary and rainbow-table attacks |
| **Symmetric Cryptography** | Encryption using the same key for both encryption and decryption |
| **TLS** | Transport Layer Security — a cryptographic protocol providing communication security over a computer network |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| AES | Advanced Encryption Standard |
| BNM | Bank Negara Malaysia |
| CA | Certificate Authority |
| CISO | Chief Information Security Officer |
| CRL | Certificate Revocation List |
| ECC | Elliptic Curve Cryptography |
| FIPS | Federal Information Processing Standards |
| HMAC | Hash-based Message Authentication Code |
| HSM | Hardware Security Module |
| IT | Information Technology |
| MAC | Message Authentication Code |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| NIST | National Institute of Standards and Technology |
| OCSP | Online Certificate Status Protocol |
| PDPA | Personal Data Protection Act 2010 |
| PFS | Perfect Forward Secrecy |
| PII | Personally Identifiable Information |
| PKI | Public Key Infrastructure |
| RMiT | Risk Management in Technology |
| RSA | Rivest–Shamir–Adleman (algorithm) |
| SHA | Secure Hash Algorithm |
| TLS | Transport Layer Security |

---

## 5. Roles and Responsibilities

*Define accountability for cryptographic controls clearly. All roles should map to named positions, not individuals, to ensure continuity.*

### 5.1 Accountability Overview

The following parties carry formal accountability for cryptographic controls within [Organization Name]:

| Role | Accountability |
|---|---|
| Board of Directors / Board Risk Committee | Ultimate accountability for enterprise risk appetite, including technology and cryptographic risk |
| Chief Information Security Officer (CISO) | Policy ownership; accountable for the adequacy and effectiveness of cryptographic controls |
| Head of Cryptography / Senior Cryptography Officer | Day-to-day management and oversight of cryptographic standards, key management, and HSM operations |
| Chief Technology Officer (CTO) | Accountable for technology implementation alignment with cryptographic requirements |
| System Owners | Accountable for ensuring systems under their ownership comply with this policy |

### 5.2 RACI Matrix

*Use the RACI model: **R** = Responsible (does the work), **A** = Accountable (owns the outcome), **C** = Consulted (provides input), **I** = Informed (receives updates).*

| Activity | CISO | Head of Cryptography | IT Operations | System Owners | Compliance | Internal Audit | Procurement |
|---|---|---|---|---|---|---|---|
| Policy ownership and review | A | R | I | C | C | I | I |
| Defining approved algorithm standards | A | R | C | C | I | I | I |
| Cryptographic key generation | A | R | R | I | I | I | I |
| Key storage and custody | A | R | R | C | I | I | I |
| Key rotation and renewal | A | R | R | C | I | I | I |
| Key destruction and archival | A | R | R | I | I | I | I |
| HSM procurement and configuration | C | A | R | I | I | I | C |
| HSM key ceremony facilitation | A | R | R | I | C | I | I |
| Certificate issuance and renewal | A | R | R | C | I | I | I |
| Certificate revocation | A | R | R | C | I | I | I |
| Cryptographic incident response | A | R | R | C | C | I | I |
| Vendor cryptographic assessment | C | A | C | C | C | I | R |
| Compliance monitoring and reporting | C | R | C | C | A | I | I |
| Exception approval | A | C | I | R | C | I | I |
| Annual policy review | A | R | C | C | C | I | I |
| Audit and assurance activities | C | C | C | C | C | A | I |

### 5.3 Role Descriptions

#### 5.3.1 CISO / Head of Cryptography

- Owns this policy and is responsible for its annual review and update
- Approves all changes to the list of approved cryptographic algorithms and key lengths
- Reviews and approves exceptions to this policy
- Ensures cryptographic controls are integrated into the organization's Information Security Management System (ISMS)
- Reports the status of cryptographic risk to senior management and the Board Risk Committee at least annually

#### 5.3.2 Head of Cryptography / Senior Cryptography Officer

- Maintains the Approved Cryptographic Algorithm Register
- Oversees the design and implementation of key management procedures
- Chairs or oversees all key ceremonies involving master keys, root keys, or HSM initialization
- Monitors the cryptographic landscape for algorithm deprecations and emerging vulnerabilities (e.g., quantum computing threats)
- Provides cryptographic guidance to application development and infrastructure teams
- Conducts or coordinates cryptographic configuration reviews across in-scope systems

#### 5.3.3 IT Operations

- Implements cryptographic controls in accordance with this policy and associated standards
- Manages day-to-day cryptographic operations, including certificate lifecycle management
- Reports anomalies, failures, or incidents involving cryptographic systems to the Head of Cryptography
- Maintains HSM operational logs and supports audit activities

#### 5.3.4 System Owners

- Ensure that systems under their ownership comply with this policy prior to deployment and throughout the system lifecycle
- Engage the Head of Cryptography when implementing new cryptographic requirements or modifying existing implementations
- Initiate and document exception requests where technical constraints prevent full compliance

#### 5.3.5 Key Custodians

- Formally designated individuals responsible for the physical or logical custody of key components
- Must not hold more than one component of a split key without explicit documented authorization
- Must report immediately any actual or suspected compromise of key material to the Head of Cryptography and CISO

---

## 6. Policy Statements and Requirements

*Each policy statement below is a mandatory requirement. Statements should be verifiable and auditable. Use "shall" for mandatory requirements and "should" for recommendations.*

### 6.1 General Cryptographic Principles

[Organization Name] **shall** apply the following overarching principles to all cryptographic implementations:

1. **Approved Algorithms Only:** Only cryptographic algorithms listed in the Approved Cryptographic Algorithm Register (Appendix A) shall be used for protecting [Organization Name] data and systems. The use of proprietary, experimental, or deprecated algorithms is prohibited.

2. **Minimum Key Lengths:** All cryptographic keys shall meet or exceed the minimum key lengths specified in Section 7 of this policy. Shorter key lengths shall only be permitted under an approved exception (Section 12).

3. **Defense in Depth:** Cryptographic controls shall be applied as part of a layered security strategy and shall not be relied upon as the sole control protecting sensitive information.

4. **Data in Transit:** All sensitive data transmitted over public networks, untrusted networks, or inter-system links shall be encrypted using approved protocols and cipher suites as specified in Section 10.

5. **Data at Rest:** All sensitive data stored in databases, file systems, removable media, or cloud storage shall be encrypted using approved algorithms at rest.

6. **Authentication Integrity:** Cryptographic mechanisms (digital signatures, MACs, or HMACs) shall be used wherever the integrity and authenticity of data must be verifiable.

7. **Key Separation:** Cryptographic keys shall be used for a single purpose. Encryption keys shall not be reused as signing keys, and vice versa.

8. **Cryptographic Agility:** Systems shall be designed, where technically feasible, to support the replacement of cryptographic algorithms without requiring full system re-architecture, in preparation for algorithm deprecations and post-quantum transitions.

9. **Prohibition of Weak Constructs:** The following shall be explicitly prohibited:

   | Prohibited Item | Category | Reason |
   |---|---|---|
   | DES / 3DES (TDEA) | Symmetric algorithm | Insufficient key length; deprecated |
   | RC4 | Stream cipher | Known vulnerabilities; cryptographically broken |
   | MD5 | Hash function | Collision vulnerabilities; deprecated for security use |
   | SHA-1 | Hash function | Collision vulnerabilities; deprecated for security use |
   | SSL 2.0 / SSL 3.0 | Protocol | Cryptographically broken |
   | TLS 1.0 / TLS 1.1 | Protocol | Deprecated; known weaknesses (POODLE, BEAST) |
   | RSA key lengths < 2048 bits | Key length | Insufficient for current threat landscape |
   | Hardcoded cryptographic keys | Key management | Prevents key rotation; creates persistent vulnerability |
   | Null cipher suites | Cipher suite | Provides no encryption |
   | Export-grade cipher suites | Cipher suite | Intentionally weakened; susceptible to FREAK/Logjam |
   | [Additional prohibition] | [Category] | [Reason] |

### 6.2 Cryptographic Implementation Requirements

10. **Library and Framework Standards:** Only cryptographic libraries approved by the Head of Cryptography shall be used in [Organization Name] systems. Custom implementation of cryptographic primitives is strictly prohibited. Approved libraries include:

    | Library / Framework | Approved Version(s) | Use Case | Approval Date |
    |---|---|---|---|
    | OpenSSL | [Version] and above | TLS, symmetric encryption | [Date] |
    | Bouncy Castle | [Version] and above | Java/mobile cryptographic operations | [Date] |
    | Microsoft CNG / BCrypt | [Version] | Windows platform cryptography | [Date] |
    | [Library Name] | [Version] | [Use Case] | [Date] |

11. **Random Number Generation:** All cryptographic operations requiring randomness (key generation, IV generation, nonce generation) shall use cryptographically secure random number generators (CSPRNGs). The use of pseudo-random number generators (PRNGs) for cryptographic purposes is prohibited.

12. **Initialization Vectors (IVs) and Nonces:** IVs and nonces shall be generated freshly for each encryption operation. IV reuse is prohibited for any symmetric encryption operation.

13. **Authenticated Encryption:** Where data confidentiality and integrity are both required, authenticated encryption modes (e.g., AES-GCM, AES-CCM, ChaCha20-Poly1305) shall be preferred over unauthenticated encryption followed by separate MAC computation.

14. **Password-Based Cryptography:** Passwords and passphrases used to derive cryptographic keys shall use approved key derivation functions (KDFs) with an appropriate work factor or iteration count as specified in the Cryptographic Implementation Standard.

15. **Certificate Management:** Digital certificates shall be issued and managed through [Organization Name]'s PKI infrastructure or an approved external CA. Certificate validity periods and key usage extensions shall comply with the Certificate Management Procedure.

### 6.3 Cloud and Third-Party Cryptography

16. **Bring Your Own Key (BYOK):** Where [Organization Name] uses cloud service providers for hosting sensitive data, [Organization Name] shall, where technically feasible, manage its own encryption keys (BYOK) rather than relying solely on cloud provider-managed keys.

17. **Third-Party Cryptographic Assessment:** All third-party vendors and service providers handling [Organization Name] sensitive data shall be assessed for cryptographic compliance prior to contract award and at least annually thereafter.

18. **End-to-End Encryption:** For high-risk data exchanges with external parties, end-to-end encryption shall be applied such that no intermediary (including cloud service providers) can access plaintext data.

---

## 7. Approved Algorithms and Key Lengths

*This section is the normative reference for cryptographic algorithm selection. It shall be reviewed at least annually and updated in response to cryptographic advisories, NIST publications, and emerging threats.*

### 7.1 Symmetric Encryption Algorithms

*Specify the approved symmetric encryption algorithms, their key lengths, approved modes of operation, and any conditions or restrictions. Reference NIST SP 800-131A and NIST SP 800-38 series for mode-specific guidance.*

| Algorithm | Key Length | Approved Modes | Status | Use Case | Notes |
|---|---|---|---|---|---|
| AES | 256 bits | GCM, CCM, CBC (with HMAC) | **Approved – Preferred** | Data at rest, data in transit, application-level encryption | GCM preferred for authenticated encryption |
| AES | 192 bits | GCM, CCM, CBC (with HMAC) | **Approved** | General purpose encryption | Use 256-bit where feasible |
| AES | 128 bits | GCM, CCM, CBC (with HMAC) | **Approved – Minimum** | Low-risk use cases only | Not for highly sensitive data |
| ChaCha20-Poly1305 | 256 bits | AEAD | **Approved** | Mobile, IoT, performance-constrained environments | Authenticated encryption |
| 3DES (TDEA) | 112-bit effective | — | **Deprecated – Prohibited** | None | Must not be used in new implementations |
| DES | 56 bits | — | **Prohibited** | None | Cryptographically broken |
| RC4 | Variable | — | **Prohibited** | None | Cryptographically broken |
| [Algorithm] | [Key Length] | [Modes] | [Status] | [Use Case] | [Notes] |

### 7.2 Asymmetric Encryption and Key Exchange Algorithms

*Reference NIST SP 800-131A for approved key sizes. Note transitional guidance and sunset dates where algorithms are approved only for legacy use.*

| Algorithm | Key Length / Parameters | Status | Use Case | Notes |
|---|---|---|---|---|
| RSA | 4096 bits | **Approved – Preferred** | Digital signatures, key encipherment, certificate signing | Preferred for new implementations |
| RSA | 3072 bits | **Approved** | Digital signatures, key encipherment | Acceptable for medium-term use |
| RSA | 2048 bits | **Approved – Minimum** | Digital signatures, key encipherment | Minimum; plan migration to 3072+ |
| RSA | < 2048 bits | **Prohibited** | — | Must not be used |
| ECC (ECDSA / ECDH) | P-256 (secp256r1) | **Approved** | Digital signatures, key agreement | NIST-recommended curve |
| ECC (ECDSA / ECDH) | P-384 (secp384r1) | **Approved – Preferred** | Digital signatures, key agreement | Preferred for high-assurance use |
| ECC (ECDSA / ECDH) | P-521 (secp521r1) | **Approved** | Digital signatures, key agreement | Use for highest-assurance scenarios |
| EdDSA (Ed25519) | 256-bit | **Approved** | Digital signatures | High performance; resistant to side-channel attacks |
| Diffie-Hellman (DH) | ≥ 3072 bits (RFC 3526 Group 15+) | **Approved** | Key exchange | Only with approved safe-prime groups |
| Diffie-Hellman (DH) | < 2048 bits | **Prohibited** | — | Susceptible to Logjam attack |
| ECDH (X25519) | Curve25519 | **Approved** | Key agreement / ephemeral key exchange | Recommended for TLS key exchange |
| DSA | Any | **Deprecated** | — | Superseded by ECDSA and EdDSA |
| [Algorithm] | [Parameters] | [Status] | [Use Case] | [Notes] |

### 7.3 Hash Functions

*Reference NIST FIPS 180-4 and NIST SP 800-131A. Note that SHA-2 and SHA-3 families are preferred.*

| Algorithm | Output Length | Status | Approved Use Cases | Notes |
|---|---|---|---|---|
| SHA-3-512 | 512 bits | **Approved – Preferred** | Digital signatures, integrity verification, high-assurance hashing | NIST FIPS 202 |
| SHA-3-384 | 384 bits | **Approved** | Digital signatures, integrity verification | NIST FIPS 202 |
| SHA-3-256 | 256 bits | **Approved** | General purpose hashing | NIST FIPS 202 |
| SHA-512 | 512 bits | **Approved – Preferred** | Digital signatures, integrity verification, HMAC | NIST FIPS 180-4 |
| SHA-384 | 384 bits | **Approved** | Digital signatures, integrity verification, HMAC | NIST FIPS 180-4 |
| SHA-256 | 256 bits | **Approved** | General purpose hashing, HMAC, certificate fingerprints | NIST FIPS 180-4; minimum for new implementations |
| SHA-1 | 160 bits | **Deprecated – Prohibited** | — | Collision vulnerabilities demonstrated; must not be used |
| MD5 | 128 bits | **Prohibited** | — | Cryptographically broken; collision attacks feasible |
| MD4, MD2 | Various | **Prohibited** | — | Cryptographically broken |
| [Algorithm] | [Output] | [Status] | [Use Case] | [Notes] |

### 7.4 Key Derivation Functions (KDFs)

| Function | Status | Approved Parameters | Use Case |
|---|---|---|---|
| Argon2id | **Approved – Preferred** | Memory ≥ 64 MiB, iterations ≥ 3, parallelism as appropriate | Password hashing, key derivation from passwords |
| bcrypt | **Approved** | Work factor ≥ 12 | Password hashing (legacy system compatibility) |
| scrypt | **Approved** | N ≥ 32768, r = 8, p = 1 | Password hashing, key derivation |
| PBKDF2 (with HMAC-SHA-256 or HMAC-SHA-512) | **Approved – Legacy** | Iterations ≥ 600,000 (per NIST SP 800-132, 2023) | Legacy systems; prefer Argon2id for new implementations |
| HKDF (HMAC-based KDF) | **Approved** | With SHA-256 or SHA-512 | Key derivation from existing key material (non-password) |
| MD5-based KDF | **Prohibited** | — | — |
| [Function] | [Status] | [Parameters] | [Use Case] |

### 7.5 Message Authentication Codes (MACs)

| Algorithm | Key Length | Status | Use Case |
|---|---|---|---|
| HMAC-SHA-256 | ≥ 256 bits | **Approved** | Message authentication, API integrity verification |
| HMAC-SHA-384 | ≥ 384 bits | **Approved – Preferred** | High-assurance message authentication |
| HMAC-SHA-512 | ≥ 512 bits | **Approved** | High-assurance message authentication |
| CMAC (with AES-256) | 256 bits | **Approved** | Block cipher-based MAC in constrained environments |
| HMAC-MD5 | — | **Prohibited** | — |
| HMAC-SHA-1 | — | **Deprecated – Prohibited** | — |

### 7.6 Post-Quantum Considerations

*This section captures [Organization Name]'s forward planning posture in response to the emerging quantum computing threat to current public-key cryptography.*

[Organization Name] acknowledges the anticipated long-term threat that sufficiently powerful quantum computers pose to RSA and ECC-based cryptography (via Shor's algorithm) and to symmetric cryptography (via Grover's algorithm, mitigated by doubling key lengths).

[Organization Name] shall:

- Monitor NIST Post-Quantum Cryptography (PQC) standardization activities and adopt approved PQC algorithms as they reach standard maturity
- Prioritize cryptographic agility in new system designs to facilitate future PQC migration
- Maintain a **Cryptographic Inventory** (Appendix B) to identify systems most at risk from quantum threats
- Develop a **Post-Quantum Migration Roadmap** by [Target Date], reviewed annually

The following NIST PQC standards shall be evaluated for adoption upon release:

| Algorithm | Type | Standard | Target Use |
|---|---|---|---|
| ML-KEM (CRYSTALS-Kyber) | Key Encapsulation | NIST FIPS 203 | Key exchange |
| ML-DSA (CRYSTALS-Dilithium) | Digital Signature | NIST FIPS 204 | Digital signing |
| SLH-DSA (SPHINCS+) | Digital Signature | NIST FIPS 205 | Digital signing (stateless hash-based) |
| [Algorithm] | [Type] | [Standard] | [Target Use] |

---

## 8. Key Lifecycle Management

*Key lifecycle management is the most operationally complex aspect of cryptography. This section defines the requirements for each phase of the key lifecycle, from generation through destruction.*

### 8.1 Key Lifecycle Overview

All cryptographic keys managed by [Organization Name] shall pass through the following lifecycle phases. Transitions between phases shall be logged and subject to appropriate controls.

```
[Generation] → [Distribution] → [Storage] → [Use] → [Rotation/Renewal] → [Archival] → [Destruction]
```

### 8.2 Key Classification

*Classify keys by sensitivity and operational role to apply appropriate controls proportionate to risk.*

| Key Type | Description | Criticality | HSM Required | Dual Control Required |
|---|---|---|---|---|
| Master Key / Key Encrypting Key (KEK) | Root-level key used to protect other keys | Critical | Yes | Yes |
| Root CA Private Key | Signs subordinate CA certificates | Critical | Yes | Yes |
| Subordinate CA Private Key | Issues end-entity certificates | High | Yes | Yes |
| Data Encryption Key (DEK) | Directly encrypts data | High | Recommended | Recommended |
| Session Key | Ephemeral key for a single communication session | Medium | No | No |
| API Signing Key | Signs API requests/responses | High | Recommended | Yes |
| TLS Server Private Key | Authenticates servers in TLS handshake | High | Recommended | No |
| Code Signing Key | Signs software artifacts | High | Yes | Yes |
| [Key Type] | [Description] | [Criticality] | [HSM Required] | [Dual Control Required] |

### 8.3 Key Generation

*Define the technical and procedural requirements for key generation. All key generation events for Critical and High classification keys must be logged.*

**Requirements:**

- All cryptographic keys shall be generated using a cryptographically secure random number generator (CSPRNG) seeded from a high-entropy source
- Key generation for Critical-classification keys shall be performed within an HSM (see Section 9)
- Key generation for Critical and High-classification keys shall be performed under **dual control**, requiring two or more authorized key custodians to be present simultaneously
- Key generation events shall be documented and logged, capturing at minimum:
  - Date and time of generation
  - Key type and purpose
  - Algorithm and key length
  - Names and roles of custodians present
  - System or HSM on which the key was generated
  - Key identifier (label or reference)

**Key Generation Ceremony:**

For Critical-classification keys, a formal **Key Ceremony** shall be conducted in accordance with the Key Ceremony Procedure (Appendix C). The ceremony shall be:

- Conducted in a physically secure, access-controlled environment
- Witnessed by at least [N] authorized personnel, including a representative from [Compliance / Internal Audit]
- Fully documented and signed off by all participants
- Recorded via [video / written log / other approved method]

### 8.4 Key Distribution

**Requirements:**

- Keys shall never be transmitted in plaintext over any network
- Key distribution shall use secure, authenticated channels (e.g., TLS with mutual authentication, encrypted key wrap using a KEK)
- Key components used in split-knowledge or key-splitting schemes shall be distributed to different custodians through separate, independent channels
- Keys shall not be distributed via email, instant messaging, or unencrypted file transfer
- Physical key components (e.g., smart cards, HSM transport tokens) shall be distributed by hand-delivery or secure courier with tamper-evident packaging

### 8.5 Key Storage

**Requirements:**

- Cryptographic keys shall never be stored in plaintext form
- Keys shall be stored encrypted under a KEK or within an HSM
- Key material shall not be stored in:
  - Source code repositories
  - Configuration files committed to version control
  - Log files or debug outputs
  - Unencrypted databases or file systems
  - Browser storage (localStorage, sessionStorage) without encryption
- Key stores shall be access-controlled, with access limited to authorized systems and personnel on a least-privilege basis
- Backup copies of keys shall be encrypted and stored in physically separate locations

| Key Classification | Minimum Storage Requirement |
|---|---|
| Critical | HSM; encrypted backup in geographically separate secure facility |
| High | HSM or software key store encrypted with KEK protected by HSM |
| Medium | Software key store encrypted with HSM-protected KEK |
| Low | Software key store with documented access controls |

### 8.6 Key Usage

**Requirements:**

- Each key shall be used only for its designated cryptographic purpose (key separation principle)
- The number of times a key is used shall be tracked where technically feasible, and usage limits shall be established in line with the Cryptographic Implementation Standard
- Keys shall not be used beyond their defined cryptoperiod (validity period) for encryption of new data; keys may be retained beyond their cryptoperiod solely for decryption of previously encrypted data, subject to controls

**Cryptoperiods:**

*Cryptoperiod requirements shall align with NIST SP 800-57 recommendations. The table below sets [Organization Name]'s minimum requirements.*

| Key Type | Maximum Cryptoperiod | Review Trigger |
|---|---|---|
| Symmetric Data Encryption Key (DEK) | 1 year | Annual or upon exposure |
| Asymmetric Private Signing Key (non-CA) | 1–2 years | Annual |
| TLS Server Private Key | 1 year (aligned with certificate validity) | Certificate renewal |
| Subordinate CA Private Key | 3 years | Per CA policy |
| Root CA Private Key | 5–7 years | Per CA policy |
| Master Key / KEK | 2 years | Biennial or upon exposure |
| Session Key | Duration of session | Per session |
| API Key | 90 days | Per project/service |
| [Key Type] | [Cryptoperiod] | [Trigger] |

### 8.7 Key Rotation and Renewal

**Requirements:**

- Keys shall be rotated in accordance with the cryptoperiods defined in Section 8.6
- Emergency key rotation shall be performed immediately upon:
  - Actual or suspected compromise of key material
  - Departure of a key custodian without formal handover
  - Suspected unauthorized access to the key storage system
  - Detection of a relevant cryptographic vulnerability affecting the algorithm or key length in use
- Key rotation events shall be logged and the previous key retained (encrypted) for a period sufficient to decrypt any data encrypted under the old key
- Automated key rotation shall be implemented where technically feasible to reduce manual intervention risk

### 8.8 Key Archival

**Requirements:**

- Keys that have exceeded their cryptoperiod but are needed for decryption of archived data shall enter an **archived** state
- Archived keys shall remain encrypted and access-controlled
- The minimum retention period for archived keys is [Retention Period, e.g., 7 years] or as required by applicable regulation, whichever is longer
- Archived key access shall be logged and require dual-authorization
- Keys shall be archived with sufficient metadata to identify the data they protect

### 8.9 Key Destruction

**Requirements:**

- Keys that are no longer required for any purpose, including decryption of archived data, shall be destroyed in a manner that prevents recovery
- Destruction methods shall be appropriate to the storage medium:

  | Storage Medium | Acceptable Destruction Method |
  |---|---|
  | HSM | Zeroization (cryptographic erase command); verified by HSM audit log |
  | Software key store / encrypted file | Cryptographic erasure (overwrite with random data); deletion of all copies |
  | Smart card / USB token | Physical destruction (shredding or degaussing) |
  | Backup media | Physical destruction or cryptographic erasure |
  | Cloud key management service | Verified deletion via provider API; obtain deletion confirmation |

- Key destruction events shall be formally documented, including:
  - Key identifier
  - Date and method of destruction
  - Personnel responsible
  - Verification that all copies (including backups) have been destroyed
- For Critical-classification keys, destruction shall be performed under dual control and independently witnessed

---

## 9. HSM Usage Requirements

*Hardware Security Modules are mandatory for the protection of the most sensitive cryptographic keys. This section defines the requirements for HSM procurement, configuration, and operation.*

### 9.1 HSM Mandate

[Organization Name] **shall** use Hardware Security Modules (HSMs) for:

- Generation, storage, and use of all Critical-classification keys (as defined in Section 8.2)
- Root CA and Subordinate CA private key operations
- Master key / Key Encrypting Key (KEK) storage and operations
- Code signing key operations
- Payment cryptography operations (where applicable)

The use of HSMs is **strongly recommended** for all High-classification keys.

### 9.2 HSM Certification Requirements

All HSMs deployed by [Organization Name] shall meet the following minimum certification standards:

| Requirement | Minimum Standard |
|---|---|
| FIPS 140-2 / FIPS 140-3 Validation | Level 3 or higher |
| Common Criteria Evaluation | EAL4+ (where applicable) |
| PCI HSM Compliance | Required for payment cryptography HSMs |
| [Additional certification] | [Standard] |

HSMs shall be sourced from vendors appearing on the NIST Cryptographic Module Validation Program (CMVP) validated modules list. Procurement shall be reviewed and approved by the Head of Cryptography.

### 9.3 HSM Deployment and Configuration

**Physical Security:**

- HSMs shall be installed in physically secure, access-controlled environments (e.g., data center, server room with Tier [N] access control)
- Physical access to HSMs shall be restricted to authorized HSM administrators
- Physical access logs shall be maintained and reviewed at least monthly

**Configuration Requirements:**

- HSMs shall be initialized using the Key Ceremony process (see Section 8.3 and Appendix C)
- Default factory credentials shall be changed upon initialization
- HSM administration shall require multi-factor authentication
- HSM administrative functions shall require a minimum of **[M] of [N]** smart card holders to be simultaneously present (split-knowledge / dual control)
- HSM audit logging shall be enabled and logs exported to a tamper-evident, centralized log management system
- HSM firmware shall be kept current with vendor security patches, subject to testing prior to production deployment
- HSM network interfaces shall be segmented from general-purpose networks and accessible only by authorized applications and administrators

**Backup and Recovery:**

- HSM key material shall be backed up using the HSM's approved key export/import mechanism (e.g., encrypted backup token)
- HSM backup tokens shall be stored in a geographically separate secure facility
- HSM disaster recovery capabilities shall be tested at least annually
- Recovery procedures shall be documented in the HSM Administration Procedure

### 9.4 HSM Operational Roles

| Role | Minimum Cardholders | Responsibilities |
|---|---|---|
| HSM Security Officer | [N] | Initializes HSM, manages administrative credentials, approves key generation |
| HSM Administrator | [N] | Day-to-day HSM administration, firmware management, log review |
| Key Custodian | [N] (per key component) | Holds smart card components for critical key operations |
| HSM Auditor | [N] | Reviews HSM audit logs; independent from administrative roles |

### 9.5 HSM Monitoring and Audit

- HSM audit logs shall be reviewed at least [monthly / weekly] by the HSM Auditor role
- Anomalous events (failed authentication attempts, unauthorized access attempts, unexpected key operations) shall be escalated to the CISO within [timeframe, e.g., 4 hours]
- HSM health monitoring shall be integrated with [Organization Name]'s Security Operations Centre (SOC) / SIEM platform
- An annual HSM security review shall be conducted, covering physical security, configuration compliance, firmware currency, and audit log integrity

### 9.6 HSM Vendor Management

- HSM vendor support contracts shall be maintained to ensure availability of firmware updates and technical support
- HSM vendor access for maintenance purposes shall be supervised and logged
- End-of-life HSMs shall be replaced or formally risk-accepted through the exception process before vendor support termination
- Decommissioned HSMs shall be zeroized and physically destroyed in accordance with the HSM vendor's recommended procedures

---

## 10. Cryptographic Protocol Standards

*This section defines the approved versions, cipher suites, and configuration requirements for cryptographic protocols used to protect data in transit.*

### 10.1 Transport Layer Security (TLS)

**Protocol Version Requirements:**

| Protocol | Status | Notes |
|---|---|---|
| TLS 1.3 | **Approved – Preferred** | Mandatory for all new implementations; preferred for existing |
| TLS 1.2 | **Approved** | Acceptable; must use approved cipher suites only; plan migration to TLS 1.3 |
| TLS 1.1 | **Prohibited** | Must not be enabled |
| TLS 1.0 | **Prohibited** | Must not be enabled |
| SSL 3.0 | **Prohibited** | Cryptographically broken (POODLE) |
| SSL 2.0 | **Prohibited** | Cryptographically broken |

**Approved TLS 1.3 Cipher Suites:**

| Cipher Suite | Key Exchange | Authentication | Encryption | MAC | Status |
|---|---|---|---|---|---|
| TLS_AES_256_GCM_SHA384 | ECDHE | — | AES-256-GCM | SHA-384 | **Approved – Preferred** |
| TLS_CHACHA20_POLY1305_SHA256 | ECDHE | — | ChaCha20-Poly1305 | SHA-256 | **Approved** |
| TLS_AES_128_GCM_SHA256 | ECDHE | — | AES-128-GCM | SHA-256 | **Approved** |

**Approved TLS 1.2 Cipher Suites:**

| Cipher Suite | Key Exchange | Authentication | Encryption | MAC | Status |
|---|---|---|---|---|---|
| TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 | ECDHE | RSA | AES-256-GCM | SHA-384 | **Approved – Preferred** |
| TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 | ECDHE | ECDSA | AES-256-GCM | SHA-384 | **Approved – Preferred** |
| TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 | ECDHE | RSA | AES-128-GCM | SHA-256 | **Approved** |
| TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 | ECDHE | ECDSA | AES-128-GCM | SHA-256 | **Approved** |
| TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 | ECDHE | RSA | ChaCha20-Poly1305 | SHA-256 | **Approved** |
| [Cipher Suite] | [KE] | [Auth] | [Enc] | [MAC] | [Status] |

**General TLS Configuration Requirements:**

- Perfect Forward Secrecy (PFS) shall be enforced; cipher suites not providing PFS (e.g., RSA key exchange) are prohibited
- HTTP Strict Transport Security (HSTS) with a minimum `max-age` of 31,536,000 seconds shall be configured for all HTTPS endpoints
- OCSP Stapling shall be enabled on all public-facing TLS endpoints
- TLS renegotiation shall be disabled or restricted to server-initiated renegotiation only
- Weak Diffie-Hellman parameters (< 2048 bits) shall not be accepted or offered

### 10.2 SSH (Secure Shell)

*Define requirements for SSH protocol version, key exchange, and cipher configuration.*

| Parameter | Requirement |
|---|---|
| Protocol Version | SSH-2 only; SSH-1 is prohibited |
| Key Exchange | ecdh-sha2-nistp384, ecdh-sha2-nistp521, curve25519-sha256 |
| Host Key Types | ecdsa-sha2-nistp384, ecdsa-sha2-nistp521, ssh-ed25519, rsa-sha2-512 (RSA ≥ 3072 bits) |
| Encryption Ciphers | aes256-gcm@openssh.com, chacha20-poly1305@openssh.com, aes256-ctr |
| MACs | hmac-sha2-512-etm@openssh.com, hmac-sha2-256-etm@openssh.com |
| Authentication | Public key authentication required; password authentication disabled for privileged accounts |
| Idle Session Timeout | Maximum [N] minutes |

### 10.3 IPsec / VPN

| Parameter | Requirement |
|---|---|
| IKE Version | IKEv2 preferred; IKEv1 deprecated (may be permitted for legacy compatibility under waiver) |
| Phase 1 Encryption | AES-256 |
| Phase 1 Integrity | SHA-256 or higher |
| Phase 1 DH Group | Group 14 (2048-bit MODP) minimum; Group 19 (256-bit ECP) or higher preferred |
| Phase 2 Encryption | AES-256-GCM preferred |
| Phase 2 Integrity | SHA-256 or higher |
| PFS | Enabled |
| Certificate Authentication | Required for site-to-site VPNs; MFA required for remote access VPNs |

### 10.4 S/MIME and Email Encryption

*[Organization Name] shall apply the following requirements for secure email communications involving sensitive data.*

| Parameter | Requirement |
|---|---|
| Signing Algorithm | SHA-256 or higher |
| Encryption Algorithm | AES-256 |
| Key Encapsulation | RSA ≥ 2048 bits or ECDH with P-256 or higher |
| Certificate Validity | Maximum 2 years for email signing/encryption certificates |

### 10.5 File Transfer Protocols

| Protocol | Status | Notes |
|---|---|---|
| SFTP (SSH File Transfer Protocol) | **Approved** | Preferred for file transfer |
| FTPS (FTP over TLS) | **Approved** | Only with TLS 1.2 or higher |
| AS2 / AS4 (with TLS) | **Approved** | For B2B integrations requiring AS standards |
| SCP (Secure Copy Protocol) | **Approved – Caution** | Use SFTP in preference |
| FTP (plain) | **Prohibited** | No encryption |
| TFTP | **Prohibited** | No encryption |
| [Protocol] | [Status] | [Notes] |

---

## 11. Compliance, Monitoring, and Enforcement

*Define how [Organization Name] will verify compliance with this policy and respond to non-compliance.*

### 11.1 Cryptographic Inventory

[Organization Name] shall maintain a **Cryptographic Inventory** (see Appendix B) documenting all cryptographic keys, algorithms, and certificates in use across in-scope systems. The inventory shall be:

- Maintained and reviewed by the Head of Cryptography
- Updated upon any change to cryptographic configurations
- Reviewed in full at least annually

### 11.2 Compliance Verification

Compliance with this policy shall be verified through the following mechanisms:

| Verification Activity | Frequency | Responsible Party |
|---|---|---|
| Automated TLS configuration scanning (e.g., SSL Labs, testssl.sh) | Monthly | IT Operations / Head of Cryptography |
| Cryptographic configuration review of critical systems | Quarterly | Head of Cryptography |
| Certificate expiry monitoring and alerting | Continuous | IT Operations |
| HSM audit log review | Monthly | HSM Auditor |
| Key inventory reconciliation | Semi-annual | Head of Cryptography |
| Third-party cryptographic compliance assessment | Annual | Head of Cryptography / Procurement |
| Full policy compliance audit | Annual | Internal Audit |
| Penetration testing including cryptographic configuration testing | Annual | [Internal / External Assessor] |

### 11.3 Cryptographic Incident Response

Upon discovery of a cryptographic incident (e.g., algorithm break, key compromise, mis-issuance of certificates), the following initial response steps shall be taken:

1. **Notify** the CISO and Head of Cryptography immediately upon discovery
2. **Assess** the scope and impact of the incident (which keys, systems, and data are affected)
3. **Contain** the incident (e.g., revoke affected certificates, rotate compromised keys, disable affected cipher suites)
4. **Communicate** with affected internal stakeholders and, where required, external parties (customers, regulators, BNM)
5. **Recover** by re-keying or re-encrypting affected data and restoring secure cryptographic operations
6. **Review** the incident to identify root cause and implement preventive measures
7. **Document** the incident and response in the Incident Register

Cryptographic incidents shall be managed in accordance with [Organization Name]'s **Information Security Incident Management Policy** and reported to BNM in accordance with the RMiT notification requirements where the incident meets the reporting threshold.

### 11.4 Non-Compliance and Enforcement

- Non-compliance with this policy shall be reported to the CISO and the relevant System Owner
- Systems found to be non-compliant shall be subject to a formal remediation plan with defined timelines
- Persistent or intentional non-compliance may result in disciplinary action in accordance with [Organization Name]'s Human Resources policies
- Non-compliance identified through internal or external audit shall be tracked through the Audit Finding Register and reported to senior management
- Systems unable to achieve compliance within defined timelines shall follow the Exception and Waiver process (Section 12)

---

## 12. Exceptions and Waivers

*No policy can anticipate every technical or operational scenario. This section defines the controlled process for managing situations where full compliance is not immediately achievable.*

### 12.1 Exception Principles

- Exceptions shall be the exception, not the norm; the default position is full compliance
- Exceptions are time-limited and subject to mandatory review
- Compensating controls shall be implemented and documented for all approved exceptions
- Exceptions shall not be used to avoid investment in appropriate cryptographic controls

### 12.2 Exception Request Process

| Step | Action | Responsible Party |
|---|---|---|
| 1 | Identify and document the compliance gap, including technical justification | System Owner |
| 2 | Assess the risk associated with the non-compliance | Head of Cryptography |
| 3 | Identify and document compensating controls | System Owner / Head of Cryptography |
| 4 | Prepare the formal Exception Request using the standard template (Appendix D) | System Owner |
| 5 | Review and recommend approval or rejection | Head of Cryptography |
| 6 | Approve or reject the exception | CISO |
| 7 | Document the approved exception in the Exception Register | Compliance |
| 8 | Implement compensating controls | System Owner / IT Operations |
| 9 | Review exception at expiry or trigger event | Head of Cryptography |

### 12.3 Exception Register

*All approved exceptions shall be recorded in the Exception Register maintained by Compliance, containing at minimum:*

| Field | Description |
|---|---|
| Exception ID | Unique identifier |
| System / Application | Affected system(s) |
| Policy Clause | The specific clause(s) for which exception is granted |
| Description of Non-Compliance | What the system does vs. what the policy requires |
| Risk Assessment | Risk rating (Critical / High / Medium / Low) |
| Compensating Controls | Controls applied to mitigate risk |
| Approval Date | Date exception was approved |
| Expiry Date | Date by which exception must be resolved or renewed |
| Approver | Name and role of approver |
| Status | Active / Expired / Resolved |

---

## 13. Review and Approval

### 13.1 Review Schedule

This policy shall be reviewed:

- **Annually**, in accordance with [Organization Name]'s policy review cycle
- **Upon any of the following trigger events:**
  - Publication of new or revised BNM RMiT requirements affecting cryptographic controls
  - Identification of significant cryptographic vulnerabilities affecting approved algorithms or key lengths (e.g., NIST algorithm deprecations)
  - Material changes to [Organization Name]'s technology environment
  - Post-incident review identifying policy inadequacies
  - Regulatory findings or recommendations requiring policy updates

### 13.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial document creation and approval |
| [1.1] | [Date] | [Author Name], [Title] | [Description of change] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of major revision] |

### 13.3 Approval Sign-Off

*This document requires the following approvals before it is considered effective. All approvers confirm that they have reviewed the document and that it is fit for purpose.*

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO / Head of Cryptography (Policy Owner) | [Name] | | [Date] |
| Chief Technology Officer | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| Chief Compliance Officer | [Name] | | [Date] |
| Board Risk Committee / Board Representative | [Name] | | [Date] |

---

## 14. References

*List all external regulatory instruments, standards, and internal policy documents referenced in this policy.*

### 14.1 Regulatory References

| Reference | Issuing Body | Clause / Section | Relevance |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 10.20 | Cryptographic controls requirement — primary regulatory driver |
| Personal Data Protection Act 2010 | Government of Malaysia | Section 9 (Security Principle) | Security of personal data including encryption |
| Financial Services Act 2013 | Government of Malaysia | [Relevant Section] | Operational risk and technology risk obligations |
| [NACSA Guideline Reference] | NACSA | [Relevant Section] | National cybersecurity baseline |
| Payment Card Industry Data Security Standard (PCI DSS) v4.0 | PCI SSC | Requirements 3, 4 | Protection of payment data using strong cryptography |

### 14.2 Technical Standards and Guidelines

| Reference | Issuing Body | Relevance |
|---|---|---|
| NIST SP 800-57 (Parts 1–3): Recommendation for Key Management | NIST | Comprehensive key management guidance — foundational reference |
| NIST SP 800-131A Rev. 2: Transitioning the Use of Cryptographic Algorithms and Key Lengths | NIST | Algorithm approval and deprecation guidance |
| NIST SP 800-111: Guide to Storage Encryption Technologies | NIST | Data-at-rest encryption |
| NIST SP 800-52 Rev. 2: Guidelines for the Selection, Configuration, and Use of TLS | NIST | TLS configuration standards |
| NIST SP 800-38 series: Block Cipher Modes of Operation | NIST | AES modes of operation |
| NIST FIPS 140-3: Security Requirements for Cryptographic Modules | NIST | HSM certification standard |
| NIST FIPS 180-4: Secure Hash Standard | NIST | SHA-2 family hash functions |
| NIST FIPS 202: SHA-3 Standard | NIST | SHA-3 family hash functions |
| NIST FIPS 203, 204, 205: Post-Quantum Cryptography Standards | NIST | Post-quantum algorithm standards |
| NIST SP 800-132: Recommendation for Password-Based Key Derivation | NIST | PBKDF2 and KDF requirements |
| RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3 | IETF | TLS 1.3 specification |
| RFC 7525: Recommendations for Secure Use of TLS and DTLS | IETF | TLS configuration best practice |
| ISO/IEC 18033 series: Encryption Algorithms | ISO/IEC | International encryption standards |
| ISO/IEC 11770 series: Key Management | ISO/IEC | Key management standards |
| ENISA Guidelines on Cryptographic Algorithms | ENISA | Supplementary algorithm guidance |

### 14.3 Internal Policy References

| Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy |
| Data Classification Policy | [Doc ID] | Defines sensitivity levels driving cryptographic requirements |
| Key Management Standard | [Doc ID] | Technical implementation standard derived from this policy |
| Cryptographic Implementation Standard | [Doc ID] | Technical specifications derived from this policy |
| Certificate Management Procedure | [Doc ID] | PKI operational procedures |
| Key Ceremony Procedure | [Doc ID] | Critical key generation procedures |
| Information Security Incident Management Policy | [Doc ID] | Cryptographic incident response |
| Third Party Risk Management Policy | [Doc ID] | Vendor cryptographic assessment |
| IT Change Management Policy | [Doc ID] | Cryptographic change controls |

---

## 15. Appendices

### Appendix A: Approved Cryptographic Algorithm Register

*This appendix serves as the definitive, version-controlled register of approved cryptographic algorithms. It shall be updated by the Head of Cryptography and reviewed at least annually. Changes to this register require CISO approval.*

**Register Metadata:**

| Field | Value |
|---|---|
| Register Version | [Version] |
| Last Updated | [Date] |
| Updated By | [Name, Title] |
| Approved By | [CISO Name] |
| Next Review | [Date] |

**Algorithm Register:**

| Algorithm | Type | Status | Minimum Key/Parameter | Approved Until | Notes |
|---|---|---|---|---|---|
| AES-256 (GCM) | Symmetric Encryption | Approved – Preferred | 256 bits | [Date / Ongoing] | Authenticated encryption |
| AES-128 (GCM) | Symmetric Encryption | Approved | 128 bits | [Date] | Low-risk use cases |
| ChaCha20-Poly1305 | Symmetric Encryption | Approved | 256 bits | [Date / Ongoing] | |
| RSA | Asymmetric | Approved | 4096 bits (preferred) / 2048 bits (minimum) | [Date] | Plan migration to ECC |
| ECDSA (P-384) | Asymmetric Signing | Approved – Preferred | P-384 | [Date / Ongoing] | |
| ECDH (X25519) | Key Agreement | Approved | Curve25519 | [Date / Ongoing] | TLS key exchange |
| SHA-256 | Hash | Approved – Minimum | 256-bit output | [Date / Ongoing] | |
| SHA-384 | Hash | Approved | 384-bit output | [Date / Ongoing] | |
| SHA-512 | Hash | Approved – Preferred | 512-bit output | [Date / Ongoing] | |
| Argon2id | KDF | Approved – Preferred | Per Section 7.4 | [Date / Ongoing] | Password hashing |
| HMAC-SHA-256 | MAC | Approved | 256-bit key | [Date / Ongoing] | |
| SHA-1 | Hash | Prohibited | — | — | Deprecated; collision attacks known |
| MD5 | Hash | Prohibited | — | — | Cryptographically broken |
| DES / 3DES | Symmetric | Prohibited | — | — | Deprecated |
| RC4 | Stream Cipher | Prohibited | — | — | Cryptographically broken |
| [Algorithm] | [Type] | [Status] | [Key/Parameter] | [Date] | [Notes] |

---

### Appendix B: Cryptographic Inventory Template

*Maintain a record of all cryptographic keys, certificates, and configurations across in-scope systems. This inventory is a living document and must be updated whenever a cryptographic change is made.*

| System / Application | Component | Algorithm | Key Length | Mode | Key/Cert ID | Expiry / Rotation Date | Custodian | HSM Stored | Notes |
|---|---|---|---|---|---|---|---|---|---|
| [System Name] | [TLS Certificate] | RSA | 4096 | — | [CN / Serial] | [Date] | [Name] | No | Issued by [CA] |
| [System Name] | [Database Encryption Key] | AES | 256 | GCM | [Key Label] | [Date] | [Name] | Yes | HSM: [HSM Name] |
| [System Name] | [API Signing Key] | ECDSA | P-384 | — | [Key Label] | [Date] | [Name] | Yes | |
| [Application Name] | [Password Hash Config] | Argon2id | — | — | — | — | [Name] | No | Parameters: [m=65536, t=3, p=4] |
| [System Name] | [Code Signing Certificate] | RSA | 4096 | — | [CN / Serial] | [Date] | [Name] | Yes | |

---

### Appendix C: Key Ceremony Checklist

*Use this checklist for all Critical-classification key generation ceremonies. All steps must be completed and signed off by the participants.*

**Pre-Ceremony Preparation:**

- [ ] Ceremony date, time, and location confirmed
- [ ] All required personnel (Security Officers, Key Custodians, Auditor) have been notified and confirmed availability
- [ ] Physical security of the ceremony room verified
- [ ] HSM or key generation equipment verified to be in tamper-evident state
- [ ] Required materials (smart cards, ceremony documentation, evidence bags) prepared
- [ ] Ceremony script and procedure document distributed to participants
- [ ] Any required regulatory or audit observers notified

**Ceremony Execution:**

- [ ] Ceremony room secured; unauthorized personnel excluded
- [ ] Attendance confirmed and documented (names, roles, identification verified)
- [ ] HSM status verified (firmware version, tamper status, initialization state)
- [ ] Key generation executed per approved procedure
- [ ] Key components distributed to designated custodians
- [ ] Custodian acknowledgement and receipt signed
- [ ] HSM audit log extracted and secured
- [ ] All ceremony materials secured or destroyed as appropriate

**Post-Ceremony:**

- [ ] Ceremony documentation completed and signed by all participants
- [ ] Evidence (audit logs, signed documentation) retained in secure storage
- [ ] Cryptographic Inventory updated with new key details
- [ ] CISO notified of ceremony completion
- [ ] Ceremony record filed in [Document Management System]

**Participant Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Ceremony Chair (Head of Cryptography) | [Name] | | [Date] |
| Security Officer 1 | [Name] | | [Date] |
| Security Officer 2 | [Name] | | [Date] |
| Key Custodian 1 | [Name] | | [Date] |
| Key Custodian 2 | [Name] | | [Date] |
| Independent Witness / Auditor | [Name] | | [Date] |

---

### Appendix D: Exception Request Template

*Complete this form to request an exception to any requirement of the Cryptographic Policy. Submit to the Head of Cryptography for assessment and the CISO for approval.*

**Exception Request Details:**

| Field | Value |
|---|---|
| Exception Request ID | [Auto-assigned by Compliance] |
| Date of Request | [Date] |
| Requester Name | [Name] |
| Requester Title / Role | [Title] |
| System / Application Affected | [System Name] |
| Policy and Clause | Cryptographic Policy, Clause [X.X] |
| Request Status | [Pending / Approved / Rejected / Expired] |

**Description of Non-Compliance:**

*Describe what the system currently does and how this differs from the policy requirement.*

[Provide detailed description of the non-compliant configuration or practice]

**Technical Justification:**

*Explain why full compliance cannot be achieved at this time. Include technical constraints, vendor limitations, or legacy system considerations.*

[Provide technical justification]

**Risk Assessment:**

| Field | Assessment |
|---|---|
| Inherent Risk Rating | [Critical / High / Medium / Low] |
| Likelihood of Exploitation | [High / Medium / Low] |
| Potential Impact | [Description of potential impact if exploited] |
| Residual Risk (with compensating controls) | [Critical / High / Medium / Low] |

**Compensating Controls:**

*List all controls that will be implemented to reduce the risk arising from non-compliance.*

| Control | Implementation Date | Owner |
|---|---|---|
| [Control 1] | [Date] | [Role] |
| [Control 2] | [Date] | [Role] |
| [Control 3] | [Date] | [Role] |

**Remediation Plan:**

*Describe the plan to achieve full compliance. Include milestones and target completion date.*

| Milestone | Target Date | Owner |
|---|---|---|
| [Milestone 1] | [Date] | [Role] |
| [Milestone 2] | [Date] | [Role] |
| Full compliance achieved | [Date] | [Role] |

**Approvals:**

| Role | Decision | Comments | Signature | Date |
|---|---|---|---|---|
| Head of Cryptography (Recommending) | [Approve / Reject] | [Comments] | | [Date] |
| CISO (Approving) | [Approve / Reject] | [Comments] | | [Date] |

**Exception Validity:**

| Field | Value |
|---|---|
| Approval Date | [Date] |
| Expiry Date | [Date — maximum 12 months from approval] |
| Review Date | [Date — minimum quarterly review if High/Critical risk] |

---

### Appendix E: Glossary of Cryptographic Strength Guidance

*This appendix provides supplementary guidance on cryptographic strength equivalences to assist practitioners in making appropriate algorithm selections.*

**Comparable Security Strength Table** *(derived from NIST SP 800-57)*:

| Security Strength (bits) | Symmetric Algorithm | RSA / DH Key Size | ECC Key Size | Hash Function | Suitable Through |
|---|---|---|---|---|---|
| 80 | 2-key 3DES | 1024 bits | 160 bits | SHA-1 | Deprecated — do not use |
| 112 | 3-key 3DES | 2048 bits | 224 bits | SHA-224 | Acceptable legacy only; plan migration |
| 128 | AES-128 | 3072 bits | 256 bits | SHA-256 | Minimum for new implementations |
| 192 | AES-192 | 7680 bits | 384 bits | SHA-384 | Recommended |
| 256 | AES-256 | 15360 bits | 521 bits | SHA-512 | Preferred; highest assurance |

---

### Appendix F: Regulatory Compliance Mapping

*This appendix provides a cross-reference matrix mapping policy sections to specific regulatory clauses, supporting audit evidence preparation.*

| Regulatory Requirement | Regulation | Clause | Addressed By (Policy Section) | Evidence Artifacts |
|---|---|---|---|---|
| Cryptographic controls for data protection | BNM RMiT | 10.20 | Sections 6, 7, 8, 9, 10 | Algorithm Register, Key Inventory, HSM Logs |
| Security of personal data | PDPA | Section 9 | Sections 6.1, 7.1, 8.5 | Data Encryption Evidence, System Configuration Records |
| Key management | BNM RMiT | 10.20 | Section 8 | Key Management Procedures, Ceremony Records |
| HSM usage for critical key material | BNM RMiT | 10.20 | Section 9 | HSM Configuration, FIPS Certificates, HSM Audit Logs |
| Approved protocol standards | BNM RMiT | 10.20 | Section 10 | TLS Scan Reports, Network Configuration Evidence |
| Cryptographic incident management | BNM RMiT | [Clause] | Section 11.3 | Incident Register, Response Procedures |
| Third party cryptographic compliance | BNM RMiT | [Clause] | Section 6.3 | Vendor Assessment Records |
| [Requirement] | [Regulation] | [Clause] | [Section] | [Evidence] |

---

*End of Document*

---

*This document is subject to [Organization Name]'s document control procedures. The master copy is held in [Document Management System]. Printed copies are uncontrolled. Please verify currency before use.*

| Document ID | [Document ID] | Version | 1.0 | Classification | Confidential |
|---|---|---|---|---|---|
| Owner | CISO / Head of Cryptography | Status | [Draft / Approved] | Next Review | [Next Review Date] |