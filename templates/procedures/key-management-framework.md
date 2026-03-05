# Key Management Framework

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | CISO / Head of Cryptography |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable law, including the Personal Data Protection Act 2010 (PDPA) and internal information security policies.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Governance Structure](#5-governance-structure)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Approved Cryptographic Algorithms and Key Lengths](#7-approved-cryptographic-algorithms-and-key-lengths)
8. [Key Lifecycle Management](#8-key-lifecycle-management)
9. [Hardware Security Module (HSM) Usage Requirements](#9-hardware-security-module-hsm-usage-requirements)
10. [Key Storage and Protection](#10-key-storage-and-protection)
11. [Key Distribution and Exchange](#11-key-distribution-and-key-exchange)
12. [Key Compromise and Incident Response](#12-key-compromise-and-incident-response)
13. [Audit, Logging, and Monitoring](#13-audit-logging-and-monitoring)
14. [Third-Party and Vendor Key Management](#14-third-party-and-vendor-key-management)
15. [Compliance, Exceptions, and Waivers](#15-compliance-exceptions-and-waivers)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Executive Summary

*Provide a concise, high-level summary of this framework's purpose, the cryptographic risk landscape faced by the organization, and the strategic intent behind formalizing key management practices. This section should be suitable for executive and board-level readers and should not exceed two pages.*

[Organization Name] operates within a highly regulated financial services environment governed by Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document. Cryptographic keys are foundational security controls that protect the confidentiality, integrity, and authenticity of sensitive data assets, customer information, and financial transactions processed by [Organization Name].

This **Key Management Framework (KMF)** establishes the organizational policy, procedural requirements, and technical controls governing the complete lifecycle of all cryptographic keys used within [Organization Name]'s technology environment. The framework is designed to ensure that cryptographic assets receive protection commensurate with their criticality and that the organization meets its obligations under RMiT Clause 10.21 and related regulatory requirements.

**Strategic Objectives of this Framework:**

- Establish a single, authoritative governance structure for all cryptographic key activities within [Organization Name].
- Define minimum standards for cryptographic algorithm selection, key lengths, and key usage periods aligned with current industry best practice and regulatory expectations.
- Mandate the use of Hardware Security Modules (HSMs) for the protection of high-value and high-assurance cryptographic keys.
- Ensure full auditability of cryptographic key operations across the entire key lifecycle.
- Define escalation paths and response procedures for cryptographic key compromise events.
- Support [Organization Name]'s broader information security objectives, business continuity requirements, and customer data protection obligations.

**Applicability:**

This framework applies to all cryptographic keys used for any purpose within [Organization Name]'s environment, including but not limited to encryption of data at rest, encryption of data in transit, digital signatures, code signing, authentication, and key wrapping. Compliance with this framework is mandatory for all staff, technology teams, third parties, and vendors who generate, store, use, or destroy cryptographic keys on behalf of [Organization Name].

**Risk Context:**

*Summarize the key cryptographic risks identified in the organization's most recent Technology Risk Assessment or equivalent. Reference any relevant threat intelligence or industry incidents that motivate the controls in this framework.*

| Risk Category | Description | Residual Risk Rating |
|---|---|---|
| Key Exposure | Unauthorized access to plaintext key material | [High / Medium / Low] |
| Weak Algorithms | Use of deprecated or cryptographically weak algorithms | [High / Medium / Low] |
| Key Misuse | Keys used beyond their intended purpose or validity period | [High / Medium / Low] |
| HSM Failure | Loss of access to key material due to HSM unavailability | [High / Medium / Low] |
| Insider Threat | Malicious or negligent key handling by authorized personnel | [High / Medium / Low] |
| Supply Chain | Compromise of third-party cryptographic components or services | [High / Medium / Low] |

---

## 2. Purpose and Scope

### 2.1 Purpose

*State clearly why this framework exists, what problem it solves, and what regulatory obligation it fulfills. Reference the specific BNM RMiT clause.*

This Key Management Framework defines the policies, standards, and procedures that [Organization Name] shall follow to ensure the secure generation, registration, storage, distribution, use, rotation, revocation, and destruction of cryptographic key material throughout its complete operational lifecycle.

The framework is established in response to and compliance with **BNM Risk Management in Technology (RMiT) Policy Document, Clause 10.21**, which requires financial institutions to implement a comprehensive key management framework that governs the full lifecycle of cryptographic keys and ensures the integrity of cryptographic operations.

This document provides:

- Authoritative policy statements on cryptographic key management that are binding on all relevant personnel and systems.
- Technical standards for approved algorithms, key lengths, and usage periods.
- Procedural requirements for each phase of the key lifecycle.
- Governance and accountability structures for key management operations.
- Audit and compliance requirements to demonstrate ongoing adherence.

### 2.2 Scope

*Define precisely what systems, processes, people, and data are covered by this framework. Be explicit about any exclusions and the rationale for those exclusions.*

#### 2.2.1 In-Scope

This framework applies to:

**Systems and Environments:**

- All production, pre-production, user acceptance testing (UAT), and development environments operated by or on behalf of [Organization Name].
- On-premises data centres, colocation facilities, and cloud environments (public, private, and hybrid) used by [Organization Name].
- Third-party managed services and outsourced technology operations where [Organization Name] retains data ownership or regulatory accountability.

**Cryptographic Key Types:**

- Symmetric encryption keys (e.g., AES keys for data-at-rest and data-in-transit encryption).
- Asymmetric key pairs (e.g., RSA, ECC keys for PKI, TLS/SSL, digital signatures, and authentication).
- Hash-based message authentication codes (HMAC) and derived keys.
- Key Encryption Keys (KEKs) and Master Keys used for key wrapping.
- Certificate Authority (CA) keys and subordinate CA keys.
- Code signing keys.
- Database encryption keys and transparent data encryption (TDE) keys.
- Payment card industry keys including PIN encryption keys (PEKs), Zone Master Keys (ZMKs), and terminal master keys (TMKs).
- API authentication keys and tokens managed under a cryptographic framework.

**Personnel:**

- All [Organization Name] employees who generate, access, manage, or use cryptographic keys.
- IT operations, security operations, application development, and infrastructure teams.
- Third-party vendors, contractors, and outsourced service providers with access to [Organization Name]'s cryptographic infrastructure.

**Processes:**

- Cryptographic key generation and registration.
- Key storage and backup.
- Key distribution and exchange.
- Key usage and access control.
- Key rotation, renewal, and re-keying.
- Key suspension and revocation.
- Key destruction and archival.
- HSM provisioning, administration, and decommissioning.
- Certificate lifecycle management where keys are involved.

#### 2.2.2 Out of Scope

| Exclusion | Rationale | Governing Document |
|---|---|---|
| Application-level passwords and passphrases not used in cryptographic operations | Governed by separate Password Management Policy | [Reference Document] |
| Encryption keys managed entirely by third-party SaaS providers where [Organization Name] has no key custodian role | Addressed through Third-Party Risk Management Framework | [Reference Document] |
| Physical access tokens and hardware authentication devices (non-cryptographic) | Governed by Physical Security Policy | [Reference Document] |
| Quantum-resistant cryptographic planning (post-quantum) | Subject of a separate Post-Quantum Cryptography Roadmap | [Reference Document] |

### 2.3 Objectives

This framework seeks to achieve the following measurable objectives:

1. **Confidentiality:** Ensure that cryptographic key material is never exposed in plaintext outside of authorized, controlled environments.
2. **Integrity:** Ensure that cryptographic key material cannot be modified, substituted, or tampered with during storage or transit.
3. **Availability:** Ensure that authorized users and systems can access cryptographic keys when required, with defined recovery procedures for key loss or HSM failure.
4. **Accountability:** Maintain complete audit trails of all cryptographic key operations, including generation, access, modification, and destruction.
5. **Regulatory Compliance:** Meet all applicable requirements of BNM RMiT, PDPA, Payment Card Industry Data Security Standard (PCI DSS), and other applicable regulations.
6. **Operational Resilience:** Ensure that key management operations are resilient to hardware failure, personnel unavailability, and disaster scenarios.

---

## 3. Regulatory and Policy Context

*List all external regulations, standards, and internal policies that this framework is designed to satisfy. Provide specific clause references where available to support audit evidence.*

### 3.1 Regulatory Requirements

| Regulation / Standard | Issuing Authority | Relevant Clauses | Obligation Type |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.21 | Mandatory |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Communications | Sections 9–11 (Security Standard) | Mandatory |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | Sections 29, 57 | Mandatory |
| Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | Sections 29, 57 | Mandatory (if applicable) |
| PCI DSS v4.0 | PCI Security Standards Council | Requirements 3, 4 | Mandatory (if applicable) |
| ISO/IEC 27001:2022 | ISO / IEC | Annex A.8.24 | Certification Requirement |
| ISO/IEC 27002:2022 | ISO / IEC | Section 8.24 | Best Practice |
| NIST Special Publication 800-57 | NIST | Parts 1, 2, 3 | Reference Standard |
| NIST Special Publication 800-131A | NIST | Full Document | Reference Standard |
| FIPS 140-3 | NIST / CMVP | Full Document | HSM Validation Standard |

### 3.2 Internal Policy Hierarchy

*Describe where this framework sits within the organization's internal policy hierarchy.*

```
Board Risk Committee
    └── Information Security Policy (Tier 1 – Board Approved)
            └── Cryptography Policy (Tier 2 – CISO Approved)
                    └── Key Management Framework (Tier 3 – This Document)
                            └── Key Management Procedures (Tier 4 – Operational SOPs)
                            └── HSM Administration Procedures (Tier 4 – Operational SOPs)
                            └── Key Ceremony Procedures (Tier 4 – Operational SOPs)
```

| Internal Document | Relationship to this Framework |
|---|---|
| Information Security Policy | Parent policy; this framework operationalizes cryptographic requirements |
| Cryptography Policy | Direct parent policy; defines minimum cryptographic standards |
| Data Classification Policy | Determines encryption requirements by data sensitivity level |
| Third-Party Risk Management Framework | Governs vendor key management obligations |
| Incident Response Procedure | Referenced for key compromise escalation |
| Business Continuity Plan | Referenced for key recovery and backup procedures |
| Change Management Policy | Governs changes to cryptographic infrastructure |
| Access Control Policy | Governs logical access to key management systems |

---

## 4. Definitions and Abbreviations

*Define all technical terms and abbreviations used in this document. This section supports readers from non-technical backgrounds and supports consistent interpretation during audits.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Asymmetric Cryptography** | A cryptographic system that uses a pair of mathematically related keys — a public key and a private key — where data encrypted with one key can only be decrypted with the other. |
| **Certificate Authority (CA)** | A trusted entity that issues digital certificates that bind a public key to an identity. |
| **Cryptographic Key** | A piece of data that controls the operation of a cryptographic algorithm (encryption, decryption, signing, or verification). |
| **Cryptoperiod** | The time span during which a cryptographic key is authorized for use. Also referred to as key validity period. |
| **Dual Control** | A procedure requiring two or more separate and independent parties to be present when performing a sensitive key management function. No single individual should be able to complete the operation unilaterally. |
| **Hardware Security Module (HSM)** | A dedicated, tamper-evident physical computing device that safeguards and manages cryptographic keys and performs cryptographic operations. |
| **Key Ceremony** | A formal, controlled, and documented procedure for the generation of high-value cryptographic keys, typically requiring the presence of multiple key custodians and witnesses. |
| **Key Custodian** | An individual who is authorized to access, manage, or hold a component of a cryptographic key and is accountable for its security. |
| **Key Encryption Key (KEK)** | A cryptographic key used solely to encrypt or decrypt other cryptographic keys. |
| **Key Escrow** | A system in which cryptographic keys are held in trust by a designated third party for recovery purposes. |
| **Key Material** | The actual data that makes up a cryptographic key, including key values, key components, and associated parameters. |
| **Key Splitting / Key Sharing** | A technique where a cryptographic key is divided into multiple components (shares), each held by a different custodian, such that a minimum number of shares are required to reconstruct the key. |
| **Key Wrapping** | The process of encrypting a cryptographic key using a Key Encryption Key (KEK) for secure storage or transport. |
| **Master Key** | A high-level key used to protect other keys. Loss of a Master Key may result in loss of access to all keys it protects. |
| **PKI (Public Key Infrastructure)** | A set of roles, policies, hardware, software, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption. |
| **Private Key** | The secret component of an asymmetric key pair. Must be kept confidential and never disclosed. |
| **Public Key** | The openly shareable component of an asymmetric key pair. Used to encrypt data or verify signatures. |
| **Revocation** | The act of permanently canceling a cryptographic key or certificate before its scheduled expiry. |
| **Rotation** | The replacement of an existing cryptographic key with a newly generated key for continued operations. |
| **Secret Sharing** | See Key Splitting / Key Sharing. |
| **Symmetric Cryptography** | A cryptographic system in which the same key is used for both encryption and decryption. |
| **Tamper Evidence** | A property of a device or system that provides visible indication if unauthorized access or modification has occurred. |
| **Tamper Resistance** | A property of a device or system that makes unauthorized access or modification physically difficult. |
| **Transport Layer Security (TLS)** | A cryptographic protocol that provides secure communication over a network. |
| **Zero-Knowledge Proof** | A cryptographic method where one party can prove knowledge of a secret without revealing the secret itself. |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| AES | Advanced Encryption Standard |
| BNM | Bank Negara Malaysia |
| CA | Certificate Authority |
| CISO | Chief Information Security Officer |
| CRL | Certificate Revocation List |
| CSP | Cryptographic Service Provider |
| DoA | Delegation of Authority |
| ECC | Elliptic Curve Cryptography |
| ECDH | Elliptic Curve Diffie-Hellman |
| ECDSA | Elliptic Curve Digital Signature Algorithm |
| FIPS | Federal Information Processing Standard |
| FSA | Financial Services Act |
| HMAC | Hash-based Message Authentication Code |
| HSM | Hardware Security Module |
| IFSA | Islamic Financial Services Act |
| KEK | Key Encryption Key |
| KMF | Key Management Framework |
| KMS | Key Management System |
| MFA | Multi-Factor Authentication |
| NIST | National Institute of Standards and Technology |
| OCSP | Online Certificate Status Protocol |
| PCI DSS | Payment Card Industry Data Security Standard |
| PDPA | Personal Data Protection Act |
| PEK | PIN Encryption Key |
| PKI | Public Key Infrastructure |
| PRNG | Pseudo-Random Number Generator |
| RMiT | Risk Management in Technology |
| RSA | Rivest–Shamir–Adleman |
| SHA | Secure Hash Algorithm |
| SLA | Service Level Agreement |
| SOP | Standard Operating Procedure |
| TDE | Transparent Data Encryption |
| TLS | Transport Layer Security |
| TMK | Terminal Master Key |
| TRNG | True Random Number Generator |
| ZMK | Zone Master Key |

---

## 5. Governance Structure

*Describe the organizational governance model for cryptographic key management, including committee structures, escalation paths, and decision-making authority. This section should make clear who owns, oversees, and is accountable for key management across the organization.*

### 5.1 Governance Principles

The governance of cryptographic key management at [Organization Name] is founded on the following principles:

- **Separation of Duties:** No single individual shall have end-to-end control over any cryptographic key lifecycle. Key generation, distribution, use, and destruction shall involve different authorized parties.
- **Dual Control:** All high-assurance key operations (including Master Key ceremonies, root CA key generation, and key destruction) shall require a minimum of two authorized key custodians acting simultaneously and independently.
- **Least Privilege:** Access to cryptographic keys and key management systems shall be granted on a need-to-know and need-to-use basis, with access rights reviewed at least annually.
- **Accountability:** All key management operations shall be attributed to a named individual and recorded in tamper-evident audit logs.
- **Formal Documentation:** All key ceremonies, key transfers, and key destruction events shall be formally documented and retained as audit evidence.

### 5.2 Governance Bodies

#### 5.2.1 Board Risk Committee

*Describe the Board Risk Committee's role with respect to cryptographic risk oversight.*

The **Board Risk Committee (BRC)** holds ultimate accountability for [Organization Name]'s cryptographic risk posture. The BRC:

- Approves the overall Information Security Policy, which mandates cryptographic controls.
- Receives periodic reporting on cryptographic risk indicators and key management compliance status.
- Reviews and approves significant changes to cryptographic strategy (e.g., adoption of new algorithms, quantum readiness plans).

| Responsibility | Frequency |
|---|---|
| Review and approve Information Security Policy | Annual |
| Receive cryptographic risk summary | Quarterly |
| Approve post-quantum cryptography roadmap | As required |

#### 5.2.2 Technology Risk and Cyber Security Committee

*Describe the management-level committee responsible for ongoing oversight of technology and cryptographic risk.*

The **Technology Risk and Cyber Security Committee (TRCSC)** provides management-level oversight of key management operations and is the primary escalation body for cryptographic risk matters below Board level. The TRCSC:

- Reviews and approves this Key Management Framework and all subordinate procedures on an annual basis.
- Reviews the annual key management audit report and approves remediation plans.
- Approves exceptions and waivers to this framework.
- Escalates material cryptographic risks to the Board Risk Committee.

| Responsibility | Frequency |
|---|---|
| Review and approve Key Management Framework | Annual |
| Review key management audit findings | Annual |
| Approve framework exceptions and waivers | As required |
| Escalate material cryptographic risks to BRC | As required |

#### 5.2.3 CISO and Head of Cryptography

*Describe the executive accountability role.*

The **Chief Information Security Officer (CISO)** is the designated owner of this Key Management Framework and bears executive accountability for its implementation and effectiveness. In organizations where a dedicated **Head of Cryptography** is appointed, that role is delegated day-to-day operational ownership.

Responsibilities include:

- Maintaining and updating this framework on the defined review cycle.
- Overseeing the Key Management Team's operations.
- Ensuring that cryptographic controls are designed into new projects and systems from inception (security by design).
- Reporting key management performance and risk metrics to the TRCSC.
- Authorizing key ceremony procedures and witnessing or appointing witnesses for high-value key ceremonies.

#### 5.2.4 Key Management Team (KMT)

*Describe the operational team responsible for day-to-day key management.*

The **Key Management Team (KMT)** is the operational unit responsible for executing key management activities in accordance with this framework. The KMT reports to the CISO / Head of Cryptography.

**KMT Core Responsibilities:**

- Day-to-day management of the Key Management System (KMS) and HSM infrastructure.
- Execution of key generation, rotation, and revocation procedures.
- Maintaining the Key Inventory Register.
- Conducting and documenting key ceremonies.
- Responding to cryptographic incidents and key compromise events.
- Producing monthly key management status reports.

**KMT Minimum Composition:**

| Role | Minimum Headcount | Notes |
|---|---|---|
| Key Management Lead | 1 | Senior Security Engineer or equivalent |
| Key Custodian (Primary) | 2 | For dual-control operations |
| Key Custodian (Backup / Alternate) | 2 | Must be available as alternates |
| KMT Auditor / Reviewer | 1 | Independent of key custodian role |

### 5.3 Key Management Governance Escalation Path

```
Operational Issue
    └── Key Management Team (KMT)
            └── CISO / Head of Cryptography
                    └── Technology Risk and Cyber Security Committee (TRCSC)
                            └── Board Risk Committee (BRC)
                                    └── BNM (Regulatory Notification, if required)
```

### 5.4 Key Inventory Register

*Describe the organization's requirement to maintain a comprehensive, up-to-date inventory of all cryptographic keys.*

[Organization Name] shall maintain a **Key Inventory Register** as an authoritative record of all cryptographic keys in operation. The Key Inventory Register shall be:

- Stored within the Key Management System (KMS) or a designated secure repository.
- Accessible only to authorized KMT personnel and auditors.
- Updated promptly upon any key lifecycle event (generation, rotation, revocation, destruction).
- Reviewed for completeness and accuracy at least quarterly.

**Minimum Key Inventory Register Fields:**

| Field | Description |
|---|---|
| Key ID | Unique identifier for the key |
| Key Type | Symmetric / Asymmetric / HMAC / etc. |
| Algorithm | e.g., AES-256, RSA-4096, ECDSA-P-384 |
| Purpose | Encryption / Signing / Authentication / KEK / etc. |
| System / Application | System(s) that use this key |
| Data Classification | Classification of data protected by this key |
| Key Custodian(s) | Named individual(s) responsible |
| Generation Date | Date key was generated |
| Cryptoperiod End Date | Scheduled expiry date |
| HSM Reference | HSM slot or identifier where key is stored |
| Status | Active / Suspended / Revoked / Destroyed |
| Last Rotation Date | Date of most recent rotation |
| Backup Status | Backed up / Not backed up |
| Destruction Date | Date key material was destroyed (if applicable) |
| Destruction Witness | Individual(s) who witnessed destruction |

---

## 6. Roles and Responsibilities

*Define all roles involved in key management and their responsibilities using a RACI model. R = Responsible (does the work), A = Accountable (owns the outcome), C = Consulted (provides input), I = Informed (receives updates).*

### 6.1 Role Descriptions

| Role | Description |
|---|---|
| **Board Risk Committee (BRC)** | Board-level committee with ultimate accountability for risk governance |
| **TRCSC** | Technology Risk and Cyber Security Committee — management-level oversight |
| **CISO / Head of Cryptography** | Executive owner of this framework and cryptographic risk |
| **Key Management Lead** | Senior operational lead for the Key Management Team |
| **Key Custodian** | Authorized individual who holds and manages key components |
| **System / Application Owner** | Business owner of a system that uses cryptographic keys |
| **IT Operations** | Team responsible for infrastructure and HSM hardware |
| **Application Developer** | Developer who integrates cryptographic functions into applications |
| **Internal Audit** | Independent function that assesses compliance with this framework |
| **Third-Party Vendor** | External party authorized to perform key management functions |
| **Incident Response Team** | Team activated in response to key compromise events |

### 6.2 RACI Matrix

| Activity | BRC | TRCSC | CISO / Head of Crypto | KM Lead | Key Custodian | System / App Owner | IT Ops | App Dev | Internal Audit | 3rd Party |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve Key Management Framework | A | C | R | C | I | I | I | I | I | I |
| Maintain Key Management Framework | I | A | R | C | I | I | I | I | C | I |
| Maintain Key Inventory Register | I | I | A | R | C | I | I | I | I | I |
| Generate cryptographic keys | I | I | A | C | R | I | I | I | I | I |
| Conduct key ceremonies | I | I | A | C | R | I | I | I | I | I |
| Approve algorithm and key length standards | I | A | R | C | I | I | I | I | C | I |
| HSM provisioning and maintenance | I | I | A | C | R | I | R | I | I | I |
| HSM administration (day-to-day) | I | I | A | R | R | I | C | I | I | I |
| Key rotation and re-keying | I | I | A | R | R | I | I | I | I | I |
| Key revocation | I | I | A | R | R | C | I | I | I | I |
| Key destruction | I | I | A | R | R | I | I | I | I | I |
| Key distribution to applications | I | I | A | R | R | C | I | C | I | I |
| Monitor key expiry and rotation schedule | I | I | A | R | R | I | I | I | I | I |
| Respond to key compromise incidents | I | C | A | R | R | C | C | C | I | I |
| Notify BNM of material cryptographic incidents | A | C | R | I | I | I | I | I | I | I |
| Audit key management compliance | I | I | C | C | C | C | C | C | R | I |
| Review and approve exceptions / waivers | I | A | R | C | I | I | I | I | C | I |
| Vendor key management oversight | I | I | A | R | I | C | I | I | I | R |
| Train key custodians | I | I | A | R | C | I | I | I | I | I |

### 6.3 Key Custodian Obligations

All individuals designated as Key Custodians shall:

1. Complete mandatory key custodian training prior to assuming the role.
2. Acknowledge and sign the **Key Custodian Acceptance Agreement** (Appendix A).
3. Never disclose their key component(s) to any other party, including their manager or the CISO, except as expressly required by a formal dual-control procedure.
4. Report any suspected compromise of their key component or of the key management systems immediately to the Key Management Lead and CISO.
5. Participate in key ceremonies as required, including after-hours ceremonies when operationally necessary.
6. Return all key components and related material immediately upon departure from the role or organization.
7. Comply with all procedures in this framework and its subordinate SOPs.

---

## 7. Approved Cryptographic Algorithms and Key Lengths

*Define the organization's approved cryptographic algorithms, key lengths, and usage periods. This section establishes minimum technical standards. Reference NIST SP 800-57 and NIST SP 800-131A for algorithm strength recommendations.*

### 7.1 Algorithm Approval Principles

[Organization Name] shall only use cryptographic algorithms and key lengths that:

- Are approved by this framework and the subordinate Cryptography Policy.
- Provide security strength appropriate for the sensitivity of the data and the required protection period.
- Are not deprecated or prohibited by NIST SP 800-131A, NIST SP 800-57, or BNM guidance.
- Have been assessed as suitable for the intended purpose by the Key Management Team and CISO.

The use of any algorithm not listed in the approved tables below requires a formal exception approved by the CISO and documented in the Exceptions Register.

### 7.2 Approved Symmetric Encryption Algorithms

| Algorithm | Approved Key Lengths | Approved Modes | Use Cases | Status | Prohibited |
|---|---|---|---|---|---|
| AES (Advanced Encryption Standard) | 128-bit, 192-bit, 256-bit | GCM, CCM, CBC (with PKCS#7 padding), CTR | Data-at-rest, Data-in-transit, Key wrapping | **Approved** | ECB mode |
| 3DES (Triple DES) | 168-bit (3-key) | CBC | Legacy system interoperability only | **Deprecated — Existing Use Only** | 2-key 3DES, ECB mode |
| DES | Any | Any | — | **PROHIBITED** | All uses |

> **Note:** AES-256-GCM is the preferred algorithm for all new implementations. 3DES may only be retained where replacement is not technically feasible; a documented migration plan must be in place within [X] months.

### 7.3 Approved Asymmetric Encryption and Key Exchange Algorithms

| Algorithm | Minimum Key Length | Recommended Key Length | Use Cases | Status |
|---|---|---|---|---|
| RSA | 2048-bit | 4096-bit | Key transport, Digital signatures, PKI | **Approved** |
| ECDH (Elliptic Curve Diffie-Hellman) | P-256 | P-384 | Key agreement / exchange | **Approved** |
| ECDSA (Elliptic Curve Digital Signature Algorithm) | P-256 | P-384 | Digital signatures | **Approved** |
| Ed25519 | N/A (fixed 256-bit) | N/A | Digital signatures | **Approved** |
| RSA < 2048-bit | — | — | Any | **PROHIBITED** |
| DSA | — | — | Any | **PROHIBITED** |
| Diffie-Hellman (classical) | 2048-bit | 3072-bit | Key exchange (legacy only) | **Deprecated — Existing Use Only** |

### 7.4 Approved Hash and MAC Algorithms

| Algorithm | Output Size | Use Cases | Status |
|---|---|---|---|
| SHA-256 | 256-bit | Integrity, Digital signatures, HMAC | **Approved** |
| SHA-384 | 384-bit | Integrity, Digital signatures, HMAC | **Approved** |
| SHA-512 | 512-bit | Integrity, Digital signatures, HMAC | **Approved** |
| SHA-3 (256, 384, 512) | 256/384/512-bit | Integrity, Signatures | **Approved** |
| HMAC-SHA-256 | 256-bit | Message authentication | **Approved** |
| HMAC-SHA-384 | 384-bit | Message authentication | **Approved** |
| SHA-1 | 160-bit | Any new implementation | **PROHIBITED for new use** |
| MD5 | 128-bit | Any | **PROHIBITED** |

### 7.5 Approved Key Derivation Functions (KDFs)

| KDF | Parameters | Use Cases | Status |
|---|---|---|---|
| HKDF | SHA-256 or SHA-384 | General key derivation | **Approved** |
| PBKDF2 | SHA-256, minimum 100,000 iterations | Password-based key derivation | **Approved** |
| bcrypt | Cost factor ≥ 12 | Password hashing | **Approved** |
| Argon2id | Memory ≥ 64MB, iterations ≥ 3 | Password hashing | **Approved (Preferred)** |
| MD5-based KDFs | — | Any | **PROHIBITED** |

### 7.6 Random Number Generation

*Specify requirements for random number generation used in key generation and cryptographic operations.*

- All cryptographic key generation shall use a **True Random Number Generator (TRNG)** or a **DRBG (Deterministic Random Bit Generator)** approved under NIST SP 800-90A.
- HSM-based key generation inherently satisfies this requirement when HSMs are FIPS 140-3 validated.
- Software-based random number generation shall use the operating system's cryptographically secure random source (`/dev/urandom` on Linux, `CryptGenRandom` / `BCryptGenRandom` on Windows, or equivalent).
- Use of weak or predictable pseudo-random number generators (PRNGs) for cryptographic key generation is **strictly prohibited**.

### 7.7 Approved Cryptoperiods (Key Validity Periods)

*Define the maximum authorized usage period for each key type. Keys must be rotated before or at the cryptoperiod end date.*

| Key Type | Maximum Cryptoperiod | Notes |
|---|---|---|
| AES-256 Data Encryption Key (symmetric) | 2 years | Shorter period required for high-volume or high-risk use cases |
| AES-128/192 Data Encryption Key | 1 year | — |
| RSA-4096 Signing Key | 2 years | — |
| RSA-2048 Signing Key | 1 year | — |
| ECDSA-P-384 Signing Key | 3 years | — |
| TLS/SSL Certificate Keys | 1 year (certificate validity) | Per CA/Browser Forum requirements |
| Key Encryption Key (KEK) | 1–3 years | Depends on number of keys protected |
| Master Key / Root Key | 5 years | Requires formal key ceremony for rotation |
| Root CA Private Key | 10–20 years | Subject to CA policy and audit |
| Subordinate CA Private Key | 3–6 years | Subject to CA policy |
| HMAC Keys | 1 year | — |
| Payment Keys (PEK, ZMK, TMK) | As per PCI DSS / payment scheme rules | Minimum annual rotation required |
| Session Keys | Single session | Destroyed at session termination |
| Code Signing Keys | 3 years | — |

### 7.8 Prohibited Configurations

The following configurations are **absolutely prohibited** within [Organization Name]'s environment:

- Use of DES, RC4, MD5, or SHA-1 in any new cryptographic implementation.
- RSA key lengths below 2048 bits.
- Use of ECB mode for symmetric encryption.
- Hard-coded cryptographic keys in source code, configuration files, or container images.
- Storage of plaintext private keys or symmetric keys in databases, file systems, or cloud object storage without key wrapping.
- Use of self-signed certificates in production environments without explicit CISO approval.
- Re-use of Initialization Vectors (IVs) or nonces with the same key.
- Key material transmitted via email, instant messaging, or unencrypted channels.

---

## 8. Key Lifecycle Management

*This is the core operational section of the framework. Define the requirements for each phase of the cryptographic key lifecycle: Generation → Registration → Storage → Distribution → Use → Rotation / Re-keying → Suspension / Revocation → Destruction / Archival.*

### 8.1 Key Lifecycle Overview

```
  ┌─────────────┐
  │  Generation │ ──── Keys are created using approved algorithms and HSMs
  └──────┬──────┘
         │
  ┌──────▼──────┐
  │ Registration│ ──── Keys are recorded in the Key Inventory Register
  └──────┬──────┘
         │
  ┌──────▼──────┐
  │   Storage   │ ──── Keys stored in HSM or wrapped and stored securely
  └──────┬──────┘
         │
  ┌──────▼──────┐
  │Distribution │ ──── Keys are securely distributed to authorized systems
  └──────┬──────┘
         │
  ┌──────▼──────┐
  │     Use     │ ──── Keys used within defined cryptoperiod and purpose
  └──────┬──────┘
         │
  ┌──────▼──────┐
  │  Rotation / │ ──── Keys replaced at cryptoperiod end or trigger event
  │  Re-keying  │
  └──────┬──────┘
         │
  ┌──────▼──────┐
  │ Suspension /│ ──── Keys temporarily or permanently deactivated
  │  Revocation │
  └──────┬──────┘
         │
  ┌──────▼──────┐
  │ Destruction │ ──── Key material is securely and verifiably destroyed
  └─────────────┘
```

### 8.2 Key Generation

*Define requirements for the generation of new cryptographic keys.*

#### 8.2.1 General Requirements

- All cryptographic keys shall be generated using **FIPS 140-3 validated HSMs** wherever operationally feasible.
- Keys that cannot be generated within an HSM shall be generated using a cryptographically secure, OS-provided random number generator and immediately imported into an HSM or wrapped with an approved KEK for storage.
- Key generation parameters (algorithm, key length, intended use) shall be documented in the Key Inventory Register at the time of generation.
- Software-based key generation tools shall be reviewed and approved by the Key Management Team before use.

#### 8.2.2 Key Generation by Risk Tier

| Key Tier | Examples | Generation Requirement | Dual Control Required |
|---|---|---|---|
| **Tier 1 — Critical** | Root CA keys, Master Keys, ZMKs | HSM-based key ceremony; formal documentation; external witness | Yes (minimum 2 custodians + 1 witness) |
| **Tier 2 — High** | Subordinate CA keys, KEKs, Payment keys | HSM-generated; documented ceremony; internal witness | Yes (minimum 2 custodians) |
| **Tier 3 — Standard** | Application encryption keys, TLS keys | HSM-generated or KMS-managed; standard workflow | Yes (minimum 2 custodians for high-sensitivity data) |
| **Tier 4 — Low** | Session keys, ephemeral keys | Automated generation by approved KMS or library | No |

#### 8.2.3 Key Ceremony Requirements (Tier 1 and Tier 2)

Key ceremonies shall be conducted for all Tier 1 and Tier 2 key generation events. Key ceremony requirements:

- A **Key Ceremony Plan** shall be prepared and approved by the CISO at least [5] business days in advance.
- A minimum of [N] Key Custodians shall be present, where [N] is defined in the Key Ceremony Procedure (Appendix C).
- An independent **Key Ceremony Witness** (who is not a Key Custodian) shall be present and shall co-sign the Key Ceremony Record.
- The ceremony shall take place in a physically secure environment (e.g., a secure room or data centre with access control and CCTV).
- A **Key Ceremony Record** shall be completed during the ceremony and retained as a permanent audit record.
- Key components shall be printed or written on tamper-evident media immediately after generation and secured in separate envelopes, each held by a different custodian.

**Key Ceremony Record Minimum Contents:**

| Field | Details |
|---|---|
| Key ID | [Key ID] |
| Key Type and Algorithm | [Algorithm and Key Length] |
| Purpose | [Intended use of the key] |
| Date and Time | [Date and Time of ceremony] |
| Location | [Physical location] |
| Key Custodians Present | [Name, Role, Signature for each] |
| Witness(es) | [Name, Role, Signature for each] |
| HSM Serial Number | [HSM identifier] |
| Key Component Distribution | [Describe how components were distributed and to whom] |
| Backup Status | [Describe backup arrangements] |
| CISO Approval Reference | [Reference to approval] |

### 8.3 Key Registration

Upon generation, all cryptographic keys shall be immediately registered in the **Key Inventory Register** with the following minimum information:

- Unique Key ID.
- Algorithm, key length, and key usage purpose.
- Generating system or HSM reference.
- Generating personnel (Key Custodian names).
- Date of generation.
- Scheduled cryptoperiod end date (based on Section 7.7).
- Data classification of the data protected by this key.
- System(s) and application(s) that will use this key.

Key registration shall be completed **within one business day** of key generation.

### 8.4 Key Storage

*Define requirements for secure storage of cryptographic keys throughout their lifecycle.*

#### 8.4.1 HSM Storage (Required for Tier 1 and Tier 2 Keys)

- All Tier 1 and Tier 2 keys shall be stored exclusively within **FIPS 140-3 Level 3** (or higher) validated HSMs.
- Keys shall never be exported from the HSM in plaintext form. Any export shall use key wrapping with an approved KEK.
- HSM access controls shall require **multi-factor authentication** and **dual control** for administrative functions.
- HSM audit logs shall be exported and retained in accordance with Section 13.

#### 8.4.2 Software-Based Key Storage (Permitted for Tier 3 and Tier 4 Keys)

Where HSM storage is not feasible for Tier 3 or Tier 4 keys, the following controls shall be applied:

- Keys shall be encrypted (wrapped) using a KEK stored in an HSM or approved KMS.
- Encrypted key material shall be stored in an approved Key Management System or encrypted secrets management system (e.g., [KMS product name]).
- Access to the key storage system shall be controlled via role-based access control (RBAC) and audited.
- Plaintext key material shall never be stored in:
  - Source code repositories.
  - Application configuration files committed to version control.
  - Databases without encryption.
  - Email systems or collaboration tools.
  - Cloud object storage buckets without server-side encryption and access controls.

#### 8.4.3 Key Backup and Recovery

- All production cryptographic keys shall be backed up in accordance with the organization's backup policy.
- Key backups shall be encrypted using a separate backup KEK stored in a geographically separate HSM or secure facility.
- Key backup media shall be stored in a physically secure, environmentally controlled off-site location.
- Key backups shall be tested for recoverability at least **annually** or after any significant changes to the backup infrastructure.
- The Key Management Team shall document and test key recovery procedures at least annually. Recovery test results shall be recorded and retained.

**Key Backup Requirements by Tier:**

| Key Tier | Backup Required | Backup Storage | Recovery Test Frequency |
|---|---|---|---|
| Tier 1 — Critical | Yes | Off-site secure facility + HSM | Annual + after any change |
| Tier 2 — High | Yes | Off-site or secondary HSM | Annual |
| Tier 3 — Standard | Yes | Encrypted backup within KMS | Annual |
| Tier 4 — Low | No (ephemeral) | Not applicable | Not applicable |

### 8.5 Key Use

*Define requirements governing the authorized use of cryptographic keys.*

- Cryptographic keys shall only be used for their designated purpose as defined at generation and recorded in the Key Inventory Register.
- Keys shall not be shared between different systems or applications without formal approval from the Key Management Team and CISO.
- Keys shall not be used beyond their defined cryptoperiod end date, except where:
  - Decryption of historical data encrypted with the key is required.
  - A formal extension has been approved and documented via the Exceptions process.
- Applications consuming cryptographic keys shall be designed to:
  - Retrieve keys dynamically from the approved KMS or HSM at runtime.
  - Never cache key material for longer than the duration of a single cryptographic operation.
  - Handle key errors gracefully without fallback to weaker mechanisms.
- Key usage shall be logged in accordance with Section 13 of this framework.

### 8.6 Key Rotation and Re-keying

*Define the requirements and triggers for key rotation.*

#### 8.6.1 Scheduled Rotation

- All cryptographic keys shall be rotated at or before the end of their defined cryptoperiod (as specified in Section 7.7).
- The Key Management Team shall maintain a **Key Rotation Schedule** in the Key Inventory Register, with automated alerts triggered [30] days, [14] days, and [7] days before a key's cryptoperiod end date.
- Rotation of Tier 1 keys requires a full key ceremony.
- Rotation of Tier 2 keys requires dual-control procedures.
- Rotation of Tier 3 and Tier 4 keys may be automated via the KMS.

#### 8.6.2 Event-Triggered Rotation

Keys shall be immediately rotated (or revoked and replaced) upon any of the following trigger events:

| Trigger Event | Action Required | Timeframe |
|---|---|---|
| Known or suspected key compromise | Revoke and replace | Immediate — within [2] hours |
| Key custodian departure from organization | Rotate all keys for which that custodian held sole knowledge | Within [1] business day |
| HSM failure or replacement | Restore from backup or re-generate; re-key affected systems | As per BCP |
| Discovery of unauthorized access to key storage | Revoke and replace all potentially exposed keys | Within [4] hours |
| Cryptographic algorithm deprecation | Re-key using approved algorithm | Within [X] days per migration plan |
| System or application decommissioning | Revoke and destroy associated keys | Prior to decommissioning |
| Third-party key custodian contract termination | Rotate all keys managed by or known to the third party | Within [5] business days |

#### 8.6.3 Data Re-encryption on Rotation

When a data encryption key is rotated:

- Existing data encrypted under the old key shall be re-encrypted under the new key according to a documented re-encryption plan.
- The re-encryption plan shall define: scope of data to be re-encrypted, method, timeline, rollback procedure, and acceptance criteria.
- The old key shall be retained in a **deactivated** state for the duration of the re-encryption process and destroyed upon confirmed completion.
- Re-encryption activities shall be conducted during approved maintenance windows to minimize operational impact.

### 8.7 Key Suspension and Revocation

*Define the conditions and procedures for suspending or revoking cryptographic keys.*

#### 8.7.1 Key Suspension

Key suspension is a temporary deactivation of a key. Suspended keys may be reactivated by authorized personnel.

**Conditions for Suspension:**

- Investigation of a suspected but unconfirmed key compromise.
- Temporary decommissioning of a system using the key.
- Pending a formal review or audit.

**Suspension Procedure:**

1. Key Management Lead or Key Custodian initiates suspension request via the Key Management System.
2. CISO approval is required for Tier 1 and Tier 2 key suspension; Key Management Lead approval is required for Tier 3 and Tier 4.
3. The Key Inventory Register is updated to reflect suspended status.
4. Affected system owners are notified.
5. A review period of no more than [30] calendar days applies; the key must either be reactivated or revoked within this period.

#### 8.7.2 Key Revocation

Key revocation is the permanent and irrevocable cancellation of a cryptographic key before its scheduled cryptoperiod end.

**Conditions for Revocation:**

- Confirmed key compromise.
- Algorithm deprecation with no data requiring decryption.
- System or application decommissioning (where no historical decryption is required).
- Decision to cease use of a key for organizational or regulatory reasons.

**Revocation Procedure:**

1. Revocation is initiated by the Key Management Lead, Key Custodian, or CISO.
2. For Tier 1 and Tier 2 keys, CISO approval is required.
3. The key is marked as **Revoked** in the Key Inventory Register with the revocation date, reason, and authorizing individual.
4. For PKI certificates, the certificate is added to the Certificate Revocation List (CRL) and OCSP is updated.
5. Affected application owners are notified with specific timelines for transitioning to replacement keys.
6. Revoked key material is retained in a **read-only archived state** if decryption of historical data may be required; otherwise, it is destroyed in accordance with Section 8.8.

### 8.8 Key Destruction

*Define the requirements for the secure and verifiable destruction of cryptographic key material.*

Key destruction is the permanent and irreversible elimination of key material such that it cannot be recovered or reconstructed.

#### 8.8.1 Conditions for Destruction

- Key has reached the end of its defined cryptoperiod and no data encrypted by the key requires future decryption.
- Key has been revoked and no historical decryption requirement exists.
- System using the key is decommissioned.
- HSM is being decommissioned or returned to vendor.

#### 8.8.2 Destruction Requirements

- Key destruction shall be carried out using the HSM's **secure deletion** or **zeroization** function, or by physically destroying the media on which the key is stored.
- Key destruction shall be performed under **dual control** — a minimum of two Key Custodians or Key Management Team members shall be present and shall co-sign the **Key Destruction Record**.
- For Tier 1 and Tier 2 keys, an independent witness who is not a Key Custodian shall also be present.
- The Key Inventory Register shall be updated to reflect the destroyed status, destruction date, method, and witnesses.
- Physical media (e.g., smart cards, HSM tokens, printed key components) shall be physically destroyed using methods appropriate to the media type (shredding, degaussing, incineration).
- Cloud-based keys shall be deleted via the cloud provider's key deletion API and confirmed via audit log evidence.

**Key Destruction Record Minimum Contents:**

| Field | Details |
|---|---|
| Key ID | [Key ID] |
| Key Type and Algorithm | [Algorithm] |
| Destruction Date and Time | [Date and Time] |
| Destruction Method | [HSM zeroization / Physical destruction / Cloud API deletion] |
| Key Custodians Present | [Names and signatures] |
| Witness | [Name and signature] |
| Confirmation | [Statement confirming key is unrecoverable] |
| Key Inventory Register Updated | [Yes / No] |

#### 8.8.3 Key Archival (Retention for Historical Decryption)

Where data encrypted under a key must remain accessible for legal, regulatory, or compliance purposes beyond the key's active cryptoperiod, the key may be **archived** rather than destroyed.

Archived key requirements:

- Archived keys shall be stored in an HSM or under equivalent protection to active keys.
- Archived keys shall be flagged as **Archived — Read-Only** in the Key Inventory Register.
- Archived keys shall not be used to encrypt new data.
- The maximum archival period shall not exceed [X] years, aligned with [Organization Name]'s data retention policy.
- At the end of the archival period, the key shall be destroyed in accordance with this section.

---

## 9. Hardware Security Module (HSM) Usage Requirements

*Define the organization's requirements for the selection, deployment, configuration, operation, and decommissioning of Hardware Security Modules.*

### 9.1 HSM Strategic Role

Hardware Security Modules are the cornerstone of [Organization Name]'s cryptographic infrastructure. HSMs provide hardware-enforced protection for cryptographic key material, ensuring that:

- Keys cannot be extracted in plaintext by any individual, including system administrators.
- Cryptographic operations are performed within a tamper-evident, tamper-resistant hardware boundary.
- Key generation uses a hardware-based true random number generator.
- All HSM operations are logged in tamper-evident audit trails.

### 9.2 HSM Minimum Standards

All HSMs used by [Organization Name] for the protection of Tier 1 and Tier 2 cryptographic keys shall meet the following minimum standards:

| Requirement | Minimum Standard |
|---|---|
| FIPS Validation | FIPS 140-3 Level 3 or higher |
| Tamper Response | Active tamper response (key zeroization upon physical intrusion) |
| Access Control | Multi-factor authentication for administrative access |
| Dual Control Support | Supports M-of-N authentication (secret sharing) for high-value operations |
| Audit Logging | Tamper-evident audit log of all operations |
| High Availability | Clustering or replication capability |
| Algorithm Support | Supports all algorithms approved in Section 7 |
| Remote Management | Secure, authenticated, encrypted management interface |

> **Recommended Validation:** [Organization Name] should target **FIPS 140-3 Level 3** as the minimum for network-attached HSMs protecting Tier 1 and Tier 2 keys, and may use **FIPS 140-3 Level 2** for software HSMs or cloud HSM services used for Tier 3 key protection.

### 9.3 HSM Deployment Architecture

*Describe the approved HSM deployment models and their appropriate use cases.*

| Deployment Model | Description | Approved Use Cases |
|---|---|---|
| **Network-Attached HSM (On-Premises)** | Physical HSM appliance in secure data centre | Tier 1 and Tier 2 key protection, PKI root CA |
| **Cloud HSM** | Managed HSM service provided by cloud provider (e.g., AWS CloudHSM, Azure Dedicated HSM) | Tier 2 and Tier 3 keys in cloud environments |
| **Cloud KMS with HSM Backend** | Cloud-managed key management service with HSM-backed key storage (e.g., AWS KMS, Azure Key Vault) | Tier 3 and Tier 4 keys in cloud environments |
| **Payment HSM** | Dedicated HSM for payment and PIN operations | Payment key management only |

**Current HSM Inventory:**

| HSM ID | Model | Firmware Version | Location | FIPS Validation | Purpose | Custodian |
|---|---|---|---|---|---|---|
| [HSM-01] | [Model] | [Version] | [Data Centre] | [FIPS 140-3 Level 3] | [Root CA / Master Keys] | [Name] |
| [HSM-02] | [Model] | [Version] | [Data Centre] | [FIPS 140-3 Level 3] | [Payment Keys] | [Name] |
| [HSM-03] | [Model] | [Version] | [Cloud Region] | [FIPS 140-3 Level 2] | [Application Keys] | [Name] |

### 9.4 HSM Access Control

- Access to HSMs shall be **strictly limited** to authorized Key Management Team members.
- HSM administrative access shall require **multi-factor authentication** and shall be performed under **dual control** for all sensitive operations.
- The M-of-N secret sharing scheme shall be configured for all high-assurance operations:
  - **M** (minimum shares required): [3]
  - **N** (total shares distributed): [5]
- HSM access credentials (smart cards, PINs, passphrases) shall be:
  - Never shared between individuals.
  - Changed upon personnel changes.
  - Stored in separate physical locations under physical access controls.
- Remote HSM administration sessions shall be encrypted using TLS [version] or equivalent.
- All HSM administrative sessions shall be recorded and retained as audit evidence.

### 9.5 HSM Configuration Management

- HSM firmware and software shall be kept current and patched within [30] days of security patch release, subject to testing.
- HSM configuration changes shall be managed through the organization's Change Management Process and require approval from the CISO or Key Management Lead.
- HSM configurations shall be documented and version-controlled.
- HSM baseline configuration shall be reviewed at least **annually**.

### 9.6 HSM High Availability and Resilience

- All production HSMs protecting Tier 1 and Tier 2 keys shall be deployed in a **clustered or replicated** configuration with at least one secondary HSM.
- Primary and secondary HSMs shall be located in geographically separate data centres or physical locations.
- Failover to the secondary HSM shall be tested at least **annually** as part of the Business Continuity Plan.
- Recovery Time Objective (RTO) for HSM failure: [RTO value — e.g., 4 hours]
- Recovery Point Objective (RPO) for HSM failure: [RPO value — e.g., 0 (no data loss through synchronous replication)]

### 9.7 HSM Decommissioning

When an HSM is to be decommissioned, retired, or returned to a vendor:

1. All keys stored in the HSM shall be migrated to replacement infrastructure or destroyed in accordance with Section 8.8.
2. The HSM shall be **zeroized** (all key material erased) via its administrative interface.
3. Zeroization shall be witnessed by at least two Key Custodians who shall co-sign a **HSM Decommissioning Record**.
4. Physical destruction of the HSM (if not being returned) shall be carried out by an approved data destruction vendor using certified methods.
5. If the HSM is being returned to a vendor for maintenance or end-of-life disposal, a certificate of data destruction shall be obtained from the vendor and retained.

---

## 10. Key Storage and Protection

*This section provides supplementary requirements for key storage contexts not fully addressed by Section 8.4, including cloud key management, secrets management platforms, and certificate storage.*

### 10.1 Cloud Key Management Services

Where [Organization Name] uses cloud-based Key Management Services (KMS) for key storage and management:

- Only cloud KMS services that are **customer-managed key (CMK)** enabled shall be used for keys protecting [Organization Name]'s sensitive data.
- Cloud KMS services shall be configured to use **FIPS 140-3 validated** HSM backends where available.
- Customer master keys shall be generated by [Organization Name] and imported into the cloud KMS (BYOK — Bring Your Own Key) for Tier 2 and above keys.
- Cloud KMS audit logs (e.g., AWS CloudTrail, Azure Activity Log) shall be exported to [Organization Name]'s SIEM for centralized monitoring.
- Key deletion protection shall be enabled with a minimum deletion waiting period of [7–30] days to prevent accidental or malicious key deletion.

**Approved Cloud KMS Services:**

| Provider | Service | Approved for Key Tiers | BYOK Support |
|---|---|---|---|
| [Cloud Provider 1] | [KMS Service Name] | Tier 3, Tier 4 | Yes / No |
| [Cloud Provider 2] | [KMS Service Name] | Tier 3, Tier 4 | Yes / No |

### 10.2 Secrets Management Platforms

Where [Organization Name] uses a secrets management platform (e.g., HashiCorp Vault, AWS Secrets Manager, Azure Key Vault):

- The secrets management platform shall be configured to **seal/unseal using HSM-backed keys**.
- Access to secrets management platforms shall be governed by the organization's Access Control Policy.
- Dynamic secrets shall be preferred over static secrets where the platform supports dynamic secret generation.
- Secret rotation shall be automated where possible.
- Access policies shall implement **least privilege** and shall be reviewed quarterly.

### 10.3 Certificate Storage

- Private keys associated with PKI certificates shall be stored in an HSM for Tier 1 and Tier 2 certificates (root CA, subordinate CA, high-value server certificates).
- Private keys for Tier 3 certificates may be stored in a PKCS#12 or PEM format, encrypted under a strong passphrase, within an approved secrets management system.
- Certificate and private key pairing shall be audited annually to identify orphaned or expired certificates.

---

## 11. Key Distribution and Key Exchange

*Define the requirements for the secure distribution of cryptographic keys to authorized systems and personnel.*

### 11.1 Key Distribution Principles

- Cryptographic keys shall **never** be transmitted in plaintext over any network, regardless of the perceived security of that network.
- Keys shall only be distributed to systems and individuals who have a documented, authorized need for them.
- Key distribution shall be logged, with the recipient, key ID, distribution method, and timestamp recorded.

### 11.2 Key Distribution Methods

| Method | Approved For | Requirements |
|---|---|---|
| **HSM to HSM Key Transfer** | Tier 1 and Tier 2 keys | Encrypted using approved KEK; documented and witnessed |
| **Encrypted Key Wrapping (PKCS#11 / RFC 3394)** | All tiers | Key wrapped under approved KEK; transferred via authenticated channel |
| **TLS-Protected API Call to KMS** | Tier 3 and Tier 4 keys | Mutual TLS or token-based authentication; encrypted in transit |
| **Out-of-Band Key Component Distribution** | Tier 1 key ceremonies only | Physical delivery; components split using secret sharing; witnessed |
| **Email** | PROHIBITED | — |
| **Chat / Messaging Platforms** | PROHIBITED | — |
| **Unencrypted HTTP** | PROHIBITED | — |
| **USB / removable media (unencrypted)** | PROHIBITED | — |

### 11.3 Key Exchange Protocols

All key exchange operations shall use approved cryptographic protocols:

- **TLS 1.3** (preferred) or **TLS 1.2** for key exchange in transit. TLS 1.0 and 1.1 are prohibited.
- **ECDH** (P-384 or higher) or **RSA-2048** (minimum) for asymmetric key exchange.
- **AES-256-GCM** for symmetric key wrapping.
- **PKCS#11** for HSM-based key operations.
- **RFC 3394 (AES Key Wrap)** for key wrapping operations.

### 11.4 Key Import and Export Controls

- Import of externally generated keys into [Organization Name]'s key management infrastructure shall require CISO approval for Tier 1 and Tier 2 keys.
- Export of key material from [Organization Name]'s key management infrastructure (e.g., for cross-organizational key exchange) shall require:
  - Written approval from the CISO.
  - Use of approved key wrapping methods.
  - Documentation in the Key Inventory Register.
  - Notification to the receiving party of applicable handling requirements.
- HSM policies shall be configured to prevent unauthorized export of key material in plaintext form.

---

## 12. Key Compromise and Incident Response

*Define the procedures for detecting, responding to, and recovering from cryptographic key compromise events.*

### 12.1 Definition of Key Compromise

A cryptographic key is considered **compromised** or **potentially compromised** when there is evidence or reasonable suspicion that:

- The key has been accessed, copied, or disclosed to an unauthorized party.
- The system or HSM storing the key has been subject to unauthorized access or breach.
- A Key Custodian with knowledge of key material has acted maliciously or negligently.
- Key material has been transmitted over an unapproved or insecure channel.
- A vulnerability in the cryptographic algorithm, implementation, or random number generator has been confirmed.
- Physical media containing key material has been lost or stolen.

### 12.2 Key Compromise Detection

Key compromise may be detected through:

- HSM tamper alerts or alarms.
- Anomalous access patterns detected by KMS audit logs or SIEM.
- Reports from Key Custodians or employees.
- External threat intelligence (e.g., private key published publicly).
- Penetration testing or vulnerability assessment findings.
- Incident reports from third parties or cloud providers.

### 12.3 Key Compromise Response Procedure

Upon detection or suspicion of key compromise, the following procedure shall be executed:

**Step 1 — Immediate Containment (Within 2 Hours)**

- [ ] Notify the Key Management Lead and CISO immediately.
- [ ] Suspend the affected key(s) in the KMS to prevent further use pending investigation.
- [ ] Preserve all relevant audit logs, HSM logs, and system logs in tamper-evident storage.
- [ ] Activate the Incident Response Team in accordance with the Incident Response Procedure.

**Step 2 — Assessment (Within 4 Hours)**

- [ ] Determine the scope of the compromise: which keys, which systems, which data may be affected.
- [ ] Assess whether data encrypted under the compromised key may have been exposed.
- [ ] Identify the root cause of the compromise.
- [ ] Determine whether regulatory notification obligations are triggered.

**Step 3 — Revocation and Replacement (Within 24 Hours)**

- [ ] Revoke the compromised key(s) in the KMS.
- [ ] For PKI certificates: add to CRL and update OCSP.
- [ ] Generate replacement key(s) using approved generation procedures.
- [ ] Distribute replacement keys to affected systems.
- [ ] Re-encrypt any data that was encrypted under the compromised key.

**Step 4 — Notification**

| Stakeholder | Trigger | Timeframe |
|---|---|---|
| CISO / Key Management Lead | Any key compromise | Immediate |
| System / Application Owners | Their system is affected | Within 2 hours |
| Technology Risk Committee | Tier 1 or Tier 2 key compromise | Within 4 hours |
| Board Risk Committee | Material data breach may have occurred | Within 24 hours |
| BNM (Regulatory Notification) | Material technology incident; assess against RMiT incident reporting requirements | Within 24 hours or as specified |
| Affected customers | If personal data may have been exposed (PDPA obligation) | As per PDPA notification requirements |

**Step 5 — Post-Incident Review (Within 5 Business Days)**

- [ ] Conduct a formal Post-Incident Review (PIR).
- [ ] Document the root cause, impact, response timeline, and lessons learned.
- [ ] Identify and implement control improvements to prevent recurrence.
- [ ] Update this framework and subordinate procedures as required.
- [ ] Retain all documentation as audit evidence.

---

## 13. Audit, Logging, and Monitoring

*Define the requirements for audit trail generation, log retention, and ongoing monitoring of key management operations.*

### 13.1 Audit Logging Requirements

All key management operations shall generate comprehensive audit logs. Audit logs shall be:

- **Tamper-evident:** Stored in a log management system that prevents modification or deletion of log records.
- **Timestamped:** All log entries shall include a timestamp synchronized to an approved time source (NTP).
- **Attributed:** All log entries shall identify the individual or system that performed the operation.
- **Comprehensive:** Logs shall capture all events specified in Section 13.2.
- **Retained:** Logs shall be retained for a minimum of [7 years] in accordance with BNM RMiT requirements and [Organization Name]'s data retention policy.
- **Monitored:** Logs shall be ingested into [Organization Name]'s Security Information and Event Management (SIEM) system and monitored in accordance with Section 13.3.

### 13.2 Events to Be Logged

The following events shall be logged for all key management operations:

| Event Category | Specific Events |
|---|---|
| **Key Generation** | Key created; algorithm; key length; generating personnel; HSM reference |
| **Key Registration** | Key registered in inventory; registration personnel |
| **Key Access** | Successful and failed key retrieval; accessing user or system; timestamp |
| **Key Use** | Encryption, decryption, signing, verification operations (where technically feasible) |
| **Key Export / Import** | Key material exported or imported; method; personnel; destination |
| **Key Rotation** | Old key deactivated; new key activated; personnel |
| **Key Suspension** | Key suspended; suspending personnel; reason |
| **Key Revocation** | Key revoked; revoking personnel; reason |
| **Key Destruction** | Key destroyed; method; witnessing personnel |
| **HSM Events** | HSM power on/off; login; logout; failed authentication; tamper events; firmware changes |
| **Administrative Changes** | Policy changes; user provisioning; role changes; configuration changes |
| **Anomalous Events** | Failed authentication; out-of-hours access; bulk operations; unusual volumes |

### 13.3 Monitoring and Alerting

The SIEM shall be configured to generate **real-time alerts** for the following conditions:

| Alert Condition | Severity | Response Timeframe |
|---|---|---|
| HSM tamper event detected | Critical | Immediate — 15 minutes |
| Failed HSM authentication (3+ failures) | High | 1 hour |
| Unauthorized attempt to export key material | Critical | Immediate — 15 minutes |
| Key access outside of business hours by privileged user | High | 1 hour |
| Key approaching cryptoperiod expiry (30 days) | Medium | 1 business day |
| Key exceeding cryptoperiod (overdue rotation) | High | 4 hours |
| Bulk key operations (above defined threshold) | High | 1 hour |
| Key management system authentication failure | High | 1 hour |
| Certificate approaching expiry (30 days) | Medium | 1 business day |
| Root CA or Subordinate CA private key accessed | Critical | Immediate — 15 minutes |

### 13.4 Key Management Audits

**Internal Audit:**

- The Internal Audit function shall conduct an independent assessment of key management practices at least **annually**.
- The audit shall assess compliance with this framework, subordinate procedures, and applicable regulatory requirements.
- Audit findings shall be reported to the Technology Risk and Cyber Security Committee and CISO within [15] business days of audit completion.
- Remediation plans for audit findings shall be agreed and tracked to closure.

**External Audit:**

- As part of [Organization Name]'s annual ISO 27001 surveillance or recertification audit, cryptographic key management controls shall be reviewed.
- For PCI DSS compliance (if applicable), cryptographic key management shall be assessed annually by a Qualified Security Assessor (QSA).

**Self-Assessment:**

- The Key Management Team shall conduct a **quarterly self-assessment** against the Key Management Controls Checklist (Appendix E) and report results to the CISO.

---

## 14. Third-Party and Vendor Key Management

*Define the requirements for managing cryptographic keys where third-party vendors or outsourced service providers are involved.*

### 14.1 Third-Party Key Management Obligations

Where [Organization Name] engages a third party that generates, manages, stores, or uses cryptographic keys on [Organization Name]'s behalf, the following requirements apply:

- Third-party key management practices shall be assessed during the **vendor due diligence** process, prior to contract award.
- Third-party vendor agreements shall include contractual obligations requiring compliance with this framework's minimum standards.
- Third-party key management practices shall be reviewed at least **annually**, or upon any material change to the third party's environment.

### 14.2 Third-Party Key Management Assessment Criteria

| Assessment Area | Minimum Requirement |
|---|---|
| Key generation | HSM-based generation for keys protecting [Organization Name] data |
| Key storage | FIPS 140-3 validated HSMs or equivalent |
| Key access controls | Dual control, MFA, audit logging |
| Key ceremony documentation | Available for inspection upon request |
| Incident notification | Contractual obligation to notify within [2] hours of key compromise |
| Key destruction | Certified destruction on contract termination |
| Audit and inspection rights | [Organization Name] has the right to audit or require third-party audit reports |

### 14.3 Bring Your Own Key (BYOK) and Hold Your Own Key (HYOK)

Where [Organization Name] uses cloud services that support **BYOK** or **HYOK** models:

- **BYOK** shall be implemented for all cloud services processing [Organization Name]'s **Confidential** or **Restricted** classified data, ensuring that [Organization Name] retains control over the root key material.
- **HYOK** shall be evaluated for use cases where [Organization Name] requires that the cloud provider cannot access data under any circumstances.
- BYOK and HYOK configurations shall be documented and included in the Key Inventory Register.

### 14.4 Third-Party Key Handover on Contract Termination

Upon termination of a third-party contract where keys were managed by the vendor:

1. The vendor shall provide all key material (wrapped under [Organization Name]'s KEK) within [5] business days of contract termination.
2. [Organization Name] shall rotate all keys that were known to or accessible by the vendor within [10] business days.
3. The vendor shall provide a certified **Certificate of Key Destruction** confirming that all copies of [Organization Name]'s key material have been destroyed.
4. Failure to comply with these requirements shall be treated as a potential key compromise and the procedures in Section 12 shall be activated.

---

## 15. Compliance, Exceptions, and Waivers

*Define how compliance with this framework is measured, how exceptions are managed, and what the consequences of non-compliance are.*

### 15.1 Compliance Monitoring

Compliance with this Key Management Framework shall be monitored through:

- Automated monitoring and alerting from the KMS and SIEM (Section 13.3).
- Quarterly self-assessment by the Key Management Team (Section 13.4).
- Annual internal audit assessment (Section 13.4).
- Annual external audit (ISO 27001, PCI DSS, or BNM examination).

**Key Performance Indicators (KPIs):**

| KPI | Target | Measurement Frequency |
|---|---|---|
| % of keys rotated on schedule | 100% | Monthly |
| % of keys stored in HSM (Tier 1 and Tier 2) | 100% | Quarterly |
| % of key custodians trained | 100% | Annual |
| Mean time to respond to key compromise | < 2 hours | Per incident |
| % of key ceremonies documented | 100% | Per event |
| % of expired certificates promptly renewed | 100% | Monthly |
| HSM uptime | ≥ 99.9% | Monthly |
| Outstanding audit findings (critical/high) | 0 open beyond SLA | Monthly |

### 15.2 Non-Compliance

Non-compliance with this framework shall be handled as follows:

| Severity | Examples | Response |
|---|---|---|
| **Critical** | Key compromise due to negligence; use of prohibited algorithms for production data; unauthorized export of key material | Immediate escalation to CISO and TRCSC; potential disciplinary action; BNM notification if required |
| **High** | Overdue key rotation; failure to conduct key ceremonies; keys stored in plaintext | Formal non-compliance notice; remediation plan required within [5] business days |
| **Medium** | Key Inventory Register not updated promptly; late custodian training | Documented finding; remediation within [20] business days |
| **Low** | Minor procedural deviations; incomplete documentation | Logged; remediation at next cycle |

### 15.3 Exceptions and Waivers

Where full compliance with this framework is not technically feasible or operationally practical, a formal **exception** may be requested.

**Exception Process:**

1. The requesting team documents the exception using the **Exception Request Form** (Appendix F).
2. The exception request shall include: the specific requirement being excepted, the reason full compliance is not feasible, the compensating controls in place, the duration of the exception, and the remediation timeline.
3. Exceptions are reviewed and approved by the **CISO** for Tier 3 and Tier 4 impacts.
4. Exceptions affecting Tier 1 or Tier 2 key protection standards are reviewed and approved by the **TRCSC**.
5. Exceptions are recorded in the **Exception Register** and reviewed at each annual framework review.
6. No exception shall be granted that would result in a regulatory violation.

---

## 16. Review and Approval

### 16.1 Review Schedule

This framework shall be reviewed:

- **Annually**, within [12] months of the previous review date.
- **Upon significant change**, including:
  - Material changes to [Organization Name]'s cryptographic infrastructure.
  - Publication of new or updated BNM guidance on cryptographic key management.
  - Discovery of a significant vulnerability in an approved algorithm or protocol.
  - Material changes to applicable regulations (PDPA, FSA, IFSA, PCI DSS).
  - Post-incident review that identifies framework deficiencies.
- **Upon CISO request**, at any time.

### 16.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 16.3 Approval Sign-Off

This Key Management Framework has been reviewed and approved by the following authorized individuals:

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Head of Cryptography | [Name] | [Signature] | [Date] |
| Head of Technology Risk | [Name] | [Signature] | [Date] |
| Chief Technology Officer (CTO) | [Name] | [Signature] | [Date] |
| Chief Risk Officer (CRO) | [Name] | [Signature] | [Date] |
| Chair, Technology Risk and Cyber Security Committee | [Name] | [Signature] | [Date] |

---

## 17. References

### 17.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clauses |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | **Clause 10.21** (Key Management) |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Sections 9–11 |
| FSA 2013 | Financial Services Act 2013 | Government of Malaysia | Sections 29, 57 |
| IFSA 2013 | Islamic Financial Services Act 2013 | Government of Malaysia | Sections 29, 57 |

### 17.2 Standards References

| Reference | Title | Issuing Body | Relevance |
|---|---|---|---|
| NIST SP 800-57 Part 1 Rev. 5 | Recommendation for Key Management: Part 1 — General | NIST | Key management best practices and cryptoperiods |
| NIST SP 800-57 Part 2 Rev. 1 | Recommendation for Key Management: Part 2 — Best Practices for Key Management Organizations | NIST | Organizational key management practices |
| NIST SP 800-57 Part 3 Rev. 1 | Recommendation for Key Management: Part 3 — Application-Specific Key Management Guidance | NIST | Application-specific key management |
| NIST SP 800-131A Rev. 2 | Transitioning the Use of Cryptographic Algorithms and Key Lengths | NIST | Algorithm and key length transition guidance |
| NIST SP 800-90A Rev. 1 | Recommendation for Random Number Generation Using Deterministic Random Bit Generators | NIST | Random number generation |
| FIPS 140-3 | Security Requirements for Cryptographic Modules | NIST / CMVP | HSM validation standard |
| FIPS 197 | Advanced Encryption Standard (AES) | NIST | AES algorithm standard |
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | ISO / IEC | Annex A.8.24 — Use of cryptography |
| ISO/IEC 27002:2022 | Information Security Controls | ISO / IEC | Section 8.24 — Use of cryptography |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | PCI SSC | Requirements 3 and 4 |
| RFC 3394 | Advanced Encryption Standard (AES) Key Wrap Algorithm | IETF | Key wrapping standard |
| RFC 5652 | Cryptographic Message Syntax (CMS) | IETF | Cryptographic message handling |
| RFC 8446 | The Transport Layer Security (TLS) Protocol Version 1.3 | IETF | TLS 1.3 standard |
| PKCS#11 | Cryptographic Token Interface Standard | OASIS | HSM interface standard |

### 17.3 Internal Document References

| Document | Version | Owner |
|---|---|---|
| Information Security Policy | [Version] | CISO |
| Cryptography Policy | [Version] | CISO |
| Data Classification Policy | [Version] | CISO |
| Incident Response Procedure | [Version] | CISO |
| Business Continuity Plan | [Version] | [Owner] |
| Third-Party Risk Management Framework | [Version] | [Owner] |
| Access Control Policy | [Version] | CISO |
| Change Management Policy | [Version] | [Owner] |
| HSM Administration Procedure | [Version] | Key Management Lead |
| Key Ceremony Procedure | [Version] | Key Management Lead |

---

## 18. Appendices

### Appendix A: Key Custodian Acceptance Agreement

*This agreement shall be signed by each individual designated as a Key Custodian prior to assuming the role. A signed copy shall be retained in the individual's personnel file and by the Key Management Team.*

---

**KEY CUSTODIAN ACCEPTANCE AGREEMENT**

**[Organization Name]**

I, **[Full Name]**, **[Job Title]**, Employee ID **[Employee ID]**, hereby acknowledge that I have been designated as a **Key Custodian** for [Organization Name] and that I have read, understood, and agree to abide by all requirements of the **Key Management Framework** (Document ID: [Document ID], Version [Version]) and all subordinate key management procedures.

I understand and accept the following obligations:

1. I will maintain the confidentiality of any cryptographic key components, key material, or key management information entrusted to me.
2. I will never disclose key components or key material to any unauthorized person, including my manager, unless expressly required by a formal dual-control key management procedure.
3. I will participate in key ceremonies and dual-control key management activities as required by the organization.
4. I will immediately report any suspected or confirmed loss, disclosure, or compromise of key material entrusted to my custody to the Key Management Lead and CISO.
5. I will surrender all key components, smart cards, or physical key material immediately upon departure from this role or from the organization.
6. I understand that failure to comply with these obligations may result in disciplinary action up to and including termination of employment and may constitute a criminal offence under applicable Malaysian law.

| Field | Detail |
|---|---|
| **Full Name** | [Full Name] |
| **Job Title** | [Job Title] |
| **Employee ID** | [Employee ID] |
| **Department** | [Department] |
| **Date** | [Date] |
| **Signature** | [Signature] |
| **Witness Name** | [Witness Name] |
| **Witness Signature** | [Witness Signature] |

---

### Appendix B: Key Inventory Register Template

*The Key Inventory Register shall be maintained in the approved Key Management System. The table below serves as a reference for the minimum required fields.*

| Field | Key 1 | Key 2 | Key N |
|---|---|---|---|
| Key ID | | | |
| Key Name / Description | | | |
| Key Type | | | |
| Algorithm | | | |
| Key Length | | | |
| Purpose | | | |
| Data Classification | | | |
| System / Application | | | |
| Business Owner | | | |
| Key Custodian(s) | | | |
| Generation Date | | | |
| Cryptoperiod End Date | | | |
| Last Rotation Date | | | |
| HSM Reference | | | |
| Backup Status | | | |
| Backup Location | | | |
| Status | | | |
| Suspension Date (if applicable) | | | |
| Revocation Date (if applicable) | | | |
| Destruction Date (if applicable) | | | |
| Destruction Witness | | | |
| Notes | | | |

---

### Appendix C: Key Ceremony Procedure Summary

*The detailed Key Ceremony Procedure is documented in a separate SOP. This appendix provides a summary for reference.*

**Pre-Ceremony Checklist:**

- [ ] Key Ceremony Plan prepared and approved by CISO ([5] business days in advance).
- [ ] Venue confirmed (physically secure location with access control and CCTV).
- [ ] HSM available and operational; firmware verified.
- [ ] Minimum required Key Custodians confirmed available.
- [ ] Independent Witness confirmed available (not a Key Custodian).
- [ ] Tamper-evident envelopes and materials prepared.
- [ ] Key Ceremony Record form prepared.
- [ ] Change Request raised and approved (if applicable).
- [ ] Attendees briefed on roles and responsibilities.

**During Ceremony:**

- [ ] All attendees sign attendance record.
- [ ] HSM integrity verified (tamper seals checked).
- [ ] Key generation performed on HSM using documented commands.
- [ ] Key components printed or recorded on tamper-evident media.
- [ ] Key components distributed to individual custodians.
- [ ] Each custodian seals their component in a tamper-evident envelope.
- [ ] All participants sign the Key Ceremony Record.
- [ ] Key Inventory Register updated.

**Post-Ceremony:**

- [ ] Key Ceremony Record archived in secure document store.
- [ ] Custodian envelopes stored in secure, separate physical locations.
- [ ] CISO informed of ceremony completion.
- [ ] Any anomalies during ceremony documented and escalated.

---

### Appendix D: Key Destruction Record Template

*This form shall be completed and retained for every key destruction event.*

---

**KEY DESTRUCTION RECORD**

**[Organization Name]**

| Field | Detail |
|---|---|
| **Key ID** | [Key ID] |
| **Key Description** | [Key Name / Purpose] |
| **Algorithm** | [Algorithm and Key Length] |
| **Key Tier** | [1 / 2 / 3 / 4] |
| **Destruction Date** | [Date] |
| **Destruction Time** | [Time] |
| **Destruction Method** | [HSM Zeroization / Physical Destruction / Cloud API Deletion / Other] |
| **HSM / System Reference** | [Reference] |
| **Reason for Destruction** | [Cryptoperiod End / Revocation / Decommissioning / Other] |
| **Confirmation Statement** | I confirm that the above-referenced key material has been permanently and irreversibly destroyed and cannot be recovered. |

**Authorizing Personnel:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Key Custodian 1 | [Name] | [Signature] | [Date] |
| Key Custodian 2 | [Name] | [Signature] | [Date] |
| Independent Witness (Tier 1 and 2 only) | [Name] | [Signature] | [Date] |
| Approving Authority (CISO / KM Lead) | [Name] | [Signature] | [Date] |

**Key Inventory Register Updated:** [ ] Yes — Updated by [Name] on [Date]

---

### Appendix E: Key Management Controls Self-Assessment Checklist

*To be completed by the Key Management Team on a quarterly basis. Results to be reported to the CISO.*

**Assessment Period:** [Quarter / Year]
**Assessor:** [Name, Role]
**Date of Assessment:** [Date]

| Control | Control Description | Status | Evidence Reference | Findings / Notes |
|---|---|---|---|---|
| KMF-01 | Key Inventory Register is complete and current | Pass / Fail / Partial | | |
| KMF-02 | All keys are within their defined cryptoperiod | Pass / Fail / Partial | | |
| KMF-03 | All Tier 1 and Tier 2 keys are stored in FIPS 140-3 validated HSMs | Pass / Fail / Partial | | |
| KMF-04 | No prohibited algorithms are in use | Pass / Fail / Partial | | |
| KMF-05 | All key custodians have completed mandatory training | Pass / Fail / Partial | | |
| KMF-06 | Key Custodian Acceptance Agreements are on file for all custodians | Pass / Fail / Partial | | |
| KMF-07 | Key ceremony records are complete and archived for all Tier 1 and Tier 2 key generation events | Pass / Fail / Partial | | |
| KMF-08 | Key rotation schedule is documented and being followed | Pass / Fail / Partial | | |
| KMF-09 | Key destruction records are complete and archived | Pass / Fail / Partial | | |
| KMF-10 | HSM audit logs are being exported to SIEM | Pass / Fail / Partial | | |
| KMF-11 | SIEM alerts for key management events are configured and tested | Pass / Fail / Partial | | |
| KMF-12 | Key backup and recovery procedures have been tested in the last 12 months | Pass / Fail / Partial | | |
| KMF-13 | Third-party key management assessments are current | Pass / Fail / Partial | | |
| KMF-14 | No unauthorized exceptions to this framework are in place | Pass / Fail / Partial | | |
| KMF-15 | All PKI certificates are within validity and renewal is tracked | Pass / Fail / Partial | | |
| KMF-16 | HSM firmware is current and patched | Pass / Fail / Partial | | |
| KMF-17 | HSM high availability has been tested in the last 12 months | Pass / Fail / Partial | | |
| KMF-18 | Key management incidents have been logged and resolved | Pass / Fail / Partial | | |

**Overall Assessment Outcome:** [ ] Satisfactory [ ] Requires Improvement [ ] Unsatisfactory

**Summary of Findings:**

*[Summarize key findings from the self-assessment, including any controls rated Fail or Partial.]*

**Remediation Actions:**

| Finding Reference | Control | Remediation Action | Owner | Target Date |
|---|---|---|---|---|
| [REF-01] | [Control] | [Action] | [Name] | [Date] |

**Assessor Sign-Off:**

| Name | Role | Signature | Date |
|---|---|---|---|
| [Name] | [Role] | [Signature] | [Date] |

**Reviewed By (CISO / KM Lead):**

| Name | Role | Signature | Date |
|---|---|---|---|
| [Name] | [Role] | [Signature] | [Date] |

---

### Appendix F: Exception Request Form

*Use this form to request an exception to any requirement of this Key Management Framework.*

---

**KEY MANAGEMENT FRAMEWORK — EXCEPTION REQUEST FORM**

**[Organization Name]**

| Field | Detail |
|---|---|
| **Exception Request ID** | [Auto-generated or assigned] |
| **Date of Request** | [Date] |
| **Requesting Team / Department** | [Department] |
| **Requestor Name and Title** | [Name, Title] |
| **System / Application Affected** | [System Name] |
| **Framework Requirement Excepted** | [Section and clause reference, e.g., Section 7.2 — AES-256 Requirement] |
| **Description of Non-Compliance** | [Describe clearly what requirement cannot be met and why] |
| **Business Justification** | [Explain the business or technical reason requiring the exception] |
| **Risk Assessment** | [Describe the risk introduced by this exception] |
| **Compensating Controls** | [Describe what alternative controls are in place to mitigate the risk] |
| **Duration of Exception** | [Requested start date to end date] |
| **Remediation Plan** | [Describe the plan to achieve full compliance and the target date] |

**Risk Rating of Exception:**

| Risk Dimension | Rating | Rationale |
|---|---|---|
| Likelihood of exploitation | [High / Medium / Low] | |
| Potential impact | [High / Medium / Low] | |
| Compensating control effectiveness | [High / Medium / Low] | |
| **Overall exception risk rating** | [High / Medium / Low] | |

**Approvals:**

| Approver | Role | Decision | Signature | Date |
|---|---|---|---|---|
| [Name] | CISO | Approved / Rejected | [Signature] | [Date] |
| [Name] | Chair, TRCSC (Tier 1/2 exceptions only) | Approved / Rejected | [Signature] | [Date] |

**Exception Registered In:** [ ] Exception Register — Reference: [REG-YYYY-NNN]

---

### Appendix G: Cryptographic Algorithm Migration Plan Template

*Use this template to plan and track the migration of deprecated algorithms to approved replacements.*

| Field | Detail |
|---|---|
| **Migration Plan ID** | [Plan ID] |
| **Algorithm Being Replaced** | [e.g., 3DES, RSA-1024, SHA-1] |
| **Replacement Algorithm** | [e.g., AES-256-GCM, RSA-4096, SHA-256] |
| **Trigger for Migration** | [e.g., NIST deprecation, BNM guidance, internal policy] |
| **Migration Owner** | [Name, Role] |
| **Target Completion Date** | [Date] |

**Affected Systems Inventory:**

| System / Application | Data Classification | Key Type | Current Algorithm | Migration Method | Migration Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| [System 1] | [Classification] | [Type] | [Current] | [Method] | [Owner] | [Date] | [Not Started / In Progress / Complete] |
| [System 2] | [Classification] | [Type] | [Current] | [Method] | [Owner] | [Date] | [Not Started / In Progress / Complete] |

**Migration Milestones:**

| Milestone | Description | Target Date | Status |
|---|---|---|---|
| 1 | Inventory of all systems using deprecated algorithm | [Date] | |
| 2 | Technical assessment and migration approach agreed | [Date] | |
| 3 | Test environment migration complete | [Date] | |
| 4 | Production migration commenced | [Date] | |
| 5 | All systems migrated and verified | [Date] | |
| 6 | Deprecated algorithm disabled | [Date] | |

---

### Appendix H: HSM Decommissioning Record Template

---

**HSM DECOMMISSIONING RECORD**

**[Organization Name]**

| Field | Detail |
|---|---|
| **HSM ID** | [HSM Identifier] |
| **HSM Model** | [Model and Manufacturer] |
| **Serial Number** | [Serial Number] |
| **Firmware Version at Decommission** | [Version] |
| **Location** | [Data Centre / Location] |
| **Reason for Decommissioning** | [End-of-life / Replacement / Failure / Return to Vendor] |
| **Decommission Date** | [Date] |

**Pre-Decommission Checklist:**

- [ ] All keys migrated from this HSM to replacement infrastructure — confirmed by [Name] on [Date].
- [ ] All keys that cannot be migrated have been destroyed per Section 8.8 — confirmed by [Name] on [Date].
- [ ] Key Inventory Register updated to remove this HSM reference — confirmed by [Name] on [Date].

**Zeroization / Destruction:**

| Field | Detail |
|---|---|
| **Zeroization Method** | [HSM administrative zeroization / Physical destruction] |
| **Zeroization Date and Time** | [Date and Time] |
| **Witnessing Custodian 1** | [Name, Signature] |
| **Witnessing Custodian 2** | [Name, Signature] |
| **Destruction Vendor (if applicable)** | [Vendor Name] |
| **Certificate of Destruction Reference** | [Reference Number] |

**Confirmation Statement:** I confirm that all cryptographic key material has been removed from or securely destroyed within the above-referenced HSM and that the device has been zeroized in accordance with the manufacturer's procedures.

| Name | Role | Signature | Date |
|---|---|---|---|
| [Name] | Key Management Lead | [Signature] | [Date] |
| [Name] | CISO | [Signature] | [Date] |

---

### Appendix I: Key Management Training Requirements

*Define the mandatory training requirements for all individuals involved in key management activities.*

| Role | Training Required | Frequency | Minimum Duration | Delivery Method |
|---|---|---|---|---|
| Key Custodian | Key Custodian Fundamentals; Key Ceremony Procedures; Incident Response for Key Compromise | On appointment; Annual refresh | [8] hours | Instructor-led |
| Key Management Lead | All Key Custodian training; HSM Administration; KMS Administration; Regulatory Requirements | On appointment; Annual refresh | [16] hours | Instructor-led |
| CISO / Head of Cryptography | Strategic Cryptography; Regulatory Compliance (RMiT, PDPA); Post-Quantum Cryptography Awareness | On appointment; Annual refresh | [8] hours | Self-directed / External |
| Application Developer | Cryptographic Best Practices; Secure Coding — Cryptography; Prohibited Configurations | On appointment; Annual refresh | [4] hours | E-learning / CBT |
| IT Operations | HSM Hardware Management; KMS Integration; Incident Escalation | On appointment; Annual refresh | [4] hours | Instructor-led |
| Internal Auditor | Key Management Audit Methodology; RMiT Clause 10.21 Requirements | Annual | [4] hours | Self-directed |

**Training Records:**

Training completion records shall be maintained by [HR / Learning Management System] and shall be available for inspection during internal and external audits. The Key Management Lead shall review training completion status quarterly and report gaps to the CISO.

---

*End of Key Management Framework*

*Document ID: [Document ID] | Version: 1.0 | Classification: Confidential | Owner: CISO / Head of Cryptography*

*© [Year] [Organization Name]. All rights reserved. Unauthorized reproduction or distribution is prohibited.*