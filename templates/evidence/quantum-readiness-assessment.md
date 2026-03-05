# Quantum Readiness Assessment

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

This Quantum Readiness Assessment evaluates [Organization Name]'s preparedness to address the cryptographic risks posed by advances in quantum computing. The document provides a structured assessment of the organization's current cryptographic posture, identifies vulnerabilities that may be exploited by quantum-capable adversaries, and establishes a roadmap for transitioning to quantum-safe cryptographic standards.

This assessment is conducted in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 17.5**, which requires financial institutions to evaluate and prepare for emerging technology risks, including quantum computing threats to cryptographic integrity and confidentiality.

### 1.1 Scope

*Define the boundaries of this assessment, including systems, services, and data classifications covered. Exclude out-of-scope items with justification.*

This assessment covers the following:

- **In-Scope Systems and Services:**
  - [List systems, applications, and infrastructure components assessed]
  - [e.g., Internet banking platform, core banking system, payment gateways, VPN infrastructure, PKI services]

- **In-Scope Data Classifications:**
  - [e.g., Customer PII, financial transaction data, authentication credentials, digital certificates]

- **Assessment Period:**
  - From: [Start Date] To: [End Date]

- **Exclusions:**

| Excluded Item | Justification |
|---|---|
| [Excluded system or service] | [Reason for exclusion] |
| [Excluded system or service] | [Reason for exclusion] |

---

## 2. Assessment Scope and Criteria

*Describe the specific assets, cryptographic implementations, and risk domains included in the assessment, and define the criteria used to evaluate quantum readiness. Criteria should align with NIST post-quantum cryptography standards and BNM RMiT requirements.*

### 2.1 Asset Inventory — Cryptographic Assets

*List all cryptographic assets identified during the assessment. Include algorithm type, key length, usage context, and quantum vulnerability status.*

| Asset ID | System / Service | Algorithm | Key Length | Use Case | Quantum Vulnerable? | Priority |
|---|---|---|---|---|---|---|
| [CRYPT-001] | [e.g., TLS on Internet Banking] | RSA | 2048-bit | Transport encryption | Yes | High |
| [CRYPT-002] | [e.g., Core Banking HSM] | AES | 256-bit | Data encryption at rest | No | Low |
| [CRYPT-003] | [e.g., Code signing pipeline] | ECDSA | P-256 | Software integrity | Yes | High |
| [CRYPT-004] | [e.g., VPN Gateway] | Diffie-Hellman | 2048-bit | Key exchange | Yes | High |
| [CRYPT-005] | [System] | [Algorithm] | [Key Length] | [Use Case] | [Yes/No/Partial] | [High/Medium/Low] |

### 2.2 Assessment Criteria

*Define the criteria and scoring dimensions used to evaluate readiness across identified cryptographic assets and systems.*

The following criteria were applied during this assessment:

| Criteria Dimension | Description | Assessment Method |
|---|---|---|
| **Algorithm Vulnerability** | Whether the algorithm is known to be broken by Shor's or Grover's algorithm at scale | Literature review and NIST guidance |
| **Migration Complexity** | Estimated effort to replace or migrate cryptographic implementation | Technical discovery and architecture review |
| **Data Sensitivity and Longevity** | Sensitivity of data protected and how long it must remain confidential | Data classification review |
| **Vendor / Dependency Readiness** | Whether third-party vendors support or roadmap post-quantum algorithms | Vendor questionnaires |
| **Regulatory Exposure** | Regulatory obligation tied to the cryptographic control | RMiT and PDPA compliance review |
| **Harvest-Now-Decrypt-Later (HNDL) Risk** | Risk that adversaries are collecting encrypted data today for future decryption | Threat intelligence review |

---

## 3. Methodology

*Describe the approach, tools, standards, and frameworks used to conduct this assessment. Reference applicable national and international standards.*

### 3.1 Assessment Framework

This assessment was conducted using the following frameworks and standards:

- **NIST Post-Quantum Cryptography Standardisation Process** (NIST IR 8413, FIPS 203/204/205)
- **BNM RMiT Policy Document**, Clause 17.5 — Quantum Computing Risk
- **ENISA Post-Quantum Cryptography: Current State and Quantum Mitigation** (2021)
- **ISO/IEC 18033** series — Encryption algorithms
- [Other applicable standards or internal frameworks]

### 3.2 Assessment Activities

*Summarise the activities performed during this assessment engagement.*

| Phase | Activity | Method | Conducted By | Date |
|---|---|---|---|---|
| Discovery | Cryptographic asset inventory | Automated scanning + manual review | [Assessor Name / Team] | [Date] |
| Analysis | Algorithm vulnerability mapping | NIST PQC mapping exercise | [Assessor Name / Team] | [Date] |
| Evaluation | HNDL risk assessment | Threat modelling workshop | [Assessor Name / Team] | [Date] |
| Vendor Review | Third-party PQC readiness questionnaire | Vendor interviews | [Assessor Name / Team] | [Date] |
| Reporting | Findings consolidation and rating | Internal review | [Assessor Name / Team] | [Date] |

### 3.3 Tools Used

| Tool / Technology | Purpose | Version |
|---|---|---|
| [e.g., Venafi TLS Protect] | Certificate and key inventory discovery | [Version] |
| [e.g., Nmap / SSLScan] | TLS configuration enumeration | [Version] |
| [e.g., Custom inventory script] | Application-layer cryptography mapping | [Version] |
| [Other tool] | [Purpose] | [Version] |

---

## 4. Findings and Ratings

*Document the assessment findings for each cryptographic asset or domain. Assign a risk rating and recommended remediation action. Findings should be specific, evidence-based, and traceable to the asset inventory in Section 2.*

### 4.1 Overall Quantum Readiness Rating

*Assign an overall organizational readiness rating based on aggregate findings.*

| Rating | Definition |
|---|---|
| **Quantum-Ready** | All critical cryptographic assets use quantum-safe algorithms or have approved migration plans in execution |
| **Partially Ready** | Some quantum-vulnerable assets identified; migration plans exist but are not yet in execution |
| **At Risk** | Significant quantum-vulnerable assets identified; limited or no migration planning in place |
| **Critical Exposure** | High-value quantum-vulnerable assets with HNDL risk and no remediation plan |

**Overall Rating for [Organization Name]: [Rating]**

*Narrative summary justifying the overall rating (2–4 sentences).*

[Provide overall rating justification here.]

### 4.2 Detailed Findings

*For each finding, document the asset reference, vulnerability description, risk rating, and recommended remediation action.*

| Finding ID | Asset ID | Finding Description | Risk Rating | HNDL Risk | Recommended Action | Target Date |
|---|---|---|---|---|---|---|
| [QRA-F-001] | [CRYPT-001] | RSA-2048 used for TLS — vulnerable to Shor's algorithm at quantum scale | High | High | Migrate to CRYSTALS-Kyber (FIPS 203) for key encapsulation | [Date] |
| [QRA-F-002] | [CRYPT-003] | ECDSA P-256 used for code signing — vulnerable to Shor's algorithm | High | Medium | Migrate to CRYSTALS-Dilithium (FIPS 204) for digital signatures | [Date] |
| [QRA-F-003] | [CRYPT-004] | DH-2048 key exchange in VPN — quantum-vulnerable key agreement | High | High | Replace with CRYSTALS-Kyber hybrid key exchange | [Date] |
| [QRA-F-004] | [System] | [Description] | [High/Medium/Low] | [High/Medium/Low] | [Recommended action] | [Date] |

### 4.3 Risk Summary

| Risk Rating | Count | Percentage |
|---|---|---|
| Critical | [#] | [%] |
| High | [#] | [%] |
| Medium | [#] | [%] |
| Low | [#] | [%] |
| **Total** | **[#]** | **100%** |

---

## 5. Approved Algorithms and Key Lengths

*List the cryptographic algorithms and key lengths approved for use by [Organization Name] that are considered quantum-safe or acceptable in a hybrid post-quantum transition strategy. This section should be updated as NIST finalises post-quantum standards.*

### 5.1 Approved Post-Quantum Algorithms

*Reference NIST FIPS standards and document the approved algorithm selections for each cryptographic function.*

| Cryptographic Function | Approved Algorithm | Standard Reference | Key / Security Level | Status |
|---|---|---|---|---|
| Key Encapsulation / Key Exchange | CRYSTALS-Kyber | NIST FIPS 203 | Level 3 (Kyber-768) | **Approved** |
| Digital Signatures | CRYSTALS-Dilithium | NIST FIPS 204 | Level 3 (Dilithium3) | **Approved** |
| Digital Signatures (alternative) | SPHINCS+ | NIST FIPS 205 | Level 3 | **Approved** |
| Symmetric Encryption | AES | NIST FIPS 197 | 256-bit (AES-256) | **Approved** |
| Hashing | SHA-3 / SHA-256 | NIST FIPS 202 | 256-bit minimum | **Approved** |
| [Other function] | [Algorithm] | [Standard] | [Key length] | [Status] |

### 5.2 Deprecated and Prohibited Algorithms

*List algorithms that are no longer approved for new implementations due to quantum or classical vulnerabilities.*

| Algorithm | Reason for Deprecation | Prohibited From | Exceptions |
|---|---|---|---|
| RSA (all key lengths) | Vulnerable to Shor's algorithm | [Date] | Legacy system exemptions — see Appendix B |
| ECDSA / ECDH | Vulnerable to Shor's algorithm | [Date] | [Exceptions if any] |
| DH < 3072-bit | Quantum and classical vulnerability | Immediately | None |
| MD5 / SHA-1 | Classical collision attacks | Immediately | None |
| [Algorithm] | [Reason] | [Date] | [Exceptions] |

### 5.3 Hybrid Transition Approach

*Where full post-quantum migration is not immediately feasible, a hybrid approach combining classical and post-quantum algorithms may be adopted. Define approved hybrid combinations here.*

| Hybrid Combination | Use Case | Approved Until |
|---|---|---|
| X25519 + CRYSTALS-Kyber-768 | TLS 1.3 key exchange (transition period) | [Date] |
| P-256 + CRYSTALS-Dilithium3 | Code signing (transition period) | [Date] |
| [Combination] | [Use case] | [Date] |

---

## 6. Key Lifecycle Management

*Describe the policies and controls governing the full lifecycle of cryptographic keys, from generation through destruction, with specific consideration for quantum risk.*

### 6.1 Key Lifecycle Stages

*For each lifecycle stage, describe the required controls and quantum-related considerations.*

| Stage | Description | Controls Required | Quantum Consideration |
|---|---|---|---|
| **Generation** | Creation of cryptographic keys | Use approved algorithms (Section 5.1); generate keys in FIPS 140-2/3 validated HSMs | Use quantum-safe or hybrid algorithms only for new keys |
| **Distribution** | Secure transmission of keys to authorised parties | Encrypted key transport using approved key encapsulation mechanisms | Replace RSA-based key transport with Kyber-based encapsulation |
| **Storage** | Secure storage of keys at rest | HSM-backed key storage; no plaintext key material outside HSMs | AES-256 minimum for symmetric key wrapping |
| **Usage** | Operational use of keys | Access controls; audit logging; separation of duties | Monitor for algorithm deprecation timeline; enforce approved algorithm list |
| **Rotation** | Periodic replacement of keys | [Define rotation periods by key type] | Accelerate rotation for quantum-vulnerable keys during transition |
| **Archival** | Long-term retention of keys for decryption of historical data | Encrypted archival storage; access restricted to authorised roles | Assess HNDL risk for archived keys; consider re-encryption with PQC |
| **Destruction** | Secure deletion of expired or compromised keys | Cryptographic erasure in HSM; documented certificate of destruction | Ensure all copies, backups, and escrow copies are destroyed |

### 6.2 Key Rotation Schedule

*Define the maximum permitted key validity periods for each key type.*

| Key Type | Algorithm | Maximum Validity Period | Rotation Trigger | Responsible Party |
|---|---|---|---|---|
| TLS Server Certificates | [Current / PQC algorithm] | 1 year | Expiry; algorithm deprecation; compromise | [Role] |
| Code Signing Keys | [Current / PQC algorithm] | 1 year | Expiry; algorithm deprecation | [Role] |
| Symmetric Data Encryption Keys | AES-256 | 2 years | Scheduled; compromise | [Role] |
| Root CA Keys | [Current / PQC algorithm] | 5 years | Algorithm deprecation; compromise | [Role] |
| API Authentication Keys | [Algorithm] | 90 days | Scheduled; compromise | [Role] |
| [Key Type] | [Algorithm] | [Period] | [Trigger] | [Role] |

### 6.3 Key Escrow and Recovery

*Describe the key escrow and recovery procedures, including dual-control and split-knowledge requirements.*

- **Escrow Policy:** [Describe whether and when keys are escrowed]
- **Dual Control:** [Describe dual-control requirements for sensitive key operations]
- **M-of-N Schemes:** [Describe secret sharing schemes used, e.g., Shamir's Secret Sharing — 3-of-5]
- **Recovery Procedures:** [Reference procedure document or describe inline]
- **Quantum Risk to Escrow:** [Describe controls to ensure escrowed key material is not accessible via future quantum attacks]

---

## 7. HSM Usage Requirements

*Define the requirements for Hardware Security Module (HSM) usage within [Organization Name], with specific consideration for quantum-readiness and post-quantum algorithm support.*

### 7.1 HSM Policy Requirements

*State the mandatory requirements for HSM usage across cryptographic operations. Reference BNM RMiT and FIPS 140-2/3 requirements.*

All cryptographic key generation, storage, and key operations for critical systems **must** be performed within HSMs that meet the following requirements:

| Requirement | Standard | Minimum Level |
|---|---|---|
| FIPS Validation | FIPS 140-2 / FIPS 140-3 | Level 3 |
| Common Criteria Certification | ISO/IEC 15408 | EAL4+ (where available) |
| Post-Quantum Algorithm Support | NIST FIPS 203 / 204 / 205 | Required by [Target Date] |
| Tamper Evidence and Response | Physical security | Tamper-evident; tamper-response |
| Key Backup and Redundancy | Business continuity | Active-active or warm standby |
| Audit Logging | Audit | All key operations logged; log integrity protected |

### 7.2 Approved HSM Inventory

*List all HSMs in scope, their current firmware version, FIPS validation status, and PQC roadmap status.*

| HSM ID | Location | Model / Vendor | Firmware Version | FIPS Validation | PQC Capable | PQC Upgrade Path | Status |
|---|---|---|---|---|---|---|---|
| [HSM-001] | [Data Centre / Location] | [e.g., Thales Luna 7] | [Version] | FIPS 140-2 Level 3 | [Yes/No/Roadmap] | [Firmware upgrade available Q[X] 20XX] | [Active] |
| [HSM-002] | [Location] | [Model] | [Version] | [Validation] | [Yes/No/Roadmap] | [Upgrade path] | [Status] |
| [HSM-003] | [Location] | [Model] | [Version] | [Validation] | [Yes/No/Roadmap] | [Upgrade path] | [Status] |

### 7.3 HSM Quantum Readiness Gaps

*Identify HSMs that do not currently support post-quantum algorithms and document the remediation plan.*

| HSM ID | Gap Description | Risk | Remediation Plan | Target Date | Owner |
|---|---|---|---|---|---|
| [HSM-001] | Firmware does not support CRYSTALS-Kyber | High | Upgrade firmware to [version] when available from vendor | [Date] | [Role] |
| [HSM-002] | End-of-life hardware — no PQC roadmap | High | Procure and deploy replacement HSM | [Date] | [Role] |
| [HSM-ID] | [Gap] | [Rating] | [Plan] | [Date] | [Owner] |

### 7.4 HSM Operational Controls

*Summarise the operational controls applied to HSMs to ensure secure and auditable cryptographic operations.*

- **Access Control:** [Describe role-based access, smart card / PIN requirements, dual control for key operations]
- **Audit Logging:** [Describe log collection, retention, and integrity controls]
- **Change Management:** [Describe firmware update approval process]
- **Physical Security:** [Describe physical access controls to HSM hardware]
- **Backup and Recovery:** [Describe HSM backup procedures and RTO/RPO targets]

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for quantum readiness activities across [Organization Name].*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Head of Cryptography | IT Security Team | Technology Risk | Internal Audit | Business Units | Vendor / Third Party |
|---|---|---|---|---|---|---|---|
| Quantum Readiness Assessment — initiation and scope | A | R | C | C | I | I | — |
| Cryptographic asset inventory | I | A | R | C | I | C | C |
| Algorithm vulnerability analysis | I | A | R | C | I | — | C |
| HSM inventory and gap assessment | A | R | R | C | I | — | C |
| Post-quantum migration planning | A | R | C | C | I | C | C |
| Vendor PQC readiness review | I | A | R | C | I | — | R |
| Key lifecycle policy update | A | R | C | C | I | — | — |
| Assessment report review and approval | A | R | C | C | C | I | — |
| Regulatory submission (if required) | A | C | C | R | I | — | — |
| Ongoing monitoring and re-assessment | A | R | R | C | I | I | — |

---

## 9. Review and Approval

### 9.1 Review Triggers

This document shall be reviewed:

- **Quarterly** as part of the standard cryptographic risk review cycle, or
- **Per-event**, triggered by any of the following:
  - Material advancement in quantum computing capability (e.g., new milestone in qubit error correction)
  - NIST or BNM publication of new or updated post-quantum cryptography standards
  - Discovery of a new quantum-relevant vulnerability in an algorithm in use
  - Significant change to in-scope systems, infrastructure, or cryptographic implementations
  - HSM procurement, upgrade, or decommissioning

### 9.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO | [Name] | [Signature] | [Date] |
| Head of Cryptography | [Name] | [Signature] | [Date] |
| Head of Technology Risk | [Name] | [Signature] | [Date] |
| Chief Risk Officer (if escalated) | [Name] | [Signature] | [Date] |

---

## 10. References

The following regulatory frameworks, standards, and guidelines were used in the preparation of this document:

| Reference | Title | Issuing Body | Relevant Clause / Section |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 17.5 — Quantum Computing Risk |
| NIST FIPS 203 | Module-Lattice-Based Key-Encapsulation Mechanism Standard (CRYSTALS-Kyber) | NIST | Full document |
| NIST FIPS 204 | Module-Lattice-Based Digital Signature Standard (CRYSTALS-Dilithium) | NIST | Full document |
| NIST FIPS 205 | Stateless Hash-Based Digital Signature Standard (SPHINCS+) | NIST | Full document |
| NIST IR 8413 | Status Report on the Third Round of the NIST Post-Quantum Cryptography Standardization Process | NIST | Full document |
| FIPS 140-3 | Security Requirements for Cryptographic Modules | NIST | Full document |
| ENISA PQC Report | Post-Quantum Cryptography: Current State and Quantum Mitigation | ENISA | Full document |
| ISO/IEC 18033 | Information technology — Encryption algorithms | ISO/IEC | Parts 1–5 |
| [Internal Policy] | [Organization Name] Cryptographic Standards Policy | [Organization Name] | [Section reference] |
| [Internal Policy] | [Organization Name] Key Management Policy | [Organization Name] | [Section reference] |

---

## 11. Appendices

### Appendix A — Cryptographic Asset Full Inventory

*Complete register of all cryptographic assets identified during discovery, including systems not listed in the main body of this document. Maintained as a controlled spreadsheet; referenced here for audit traceability.*

**Reference:** [Document ID / Location of full inventory register]

| Asset ID | System | Component | Algorithm | Key Length | Certificate Expiry | Owner | Quantum Risk | Migration Status |
|---|---|---|---|---|---|---|---|---|
| [CRYPT-001] | [System] | [e.g., Web server TLS cert] | [Algorithm] | [Length] | [Date] | [Owner] | [High/Med/Low] | [Not started / In progress / Complete] |
| [CRYPT-002] | | | | | | | | |

---

### Appendix B — Legacy System Exemption Register

*Systems that cannot immediately migrate to approved post-quantum or quantum-safe algorithms are documented here with a formal exemption, compensating controls, and an agreed remediation deadline.*

| Exemption ID | System | Algorithm Exempted | Business Justification | Compensating Controls | Exemption Expiry | Approved By | Approval Date |
|---|---|---|---|---|---|---|---|
| [EXM-001] | [System name] | [e.g., RSA-2048] | [e.g., Vendor-managed system; upgrade roadmap Q3 2026] | [e.g., Network isolation; enhanced monitoring] | [Date] | [CISO] | [Date] |
| [EXM-002] | | | | | | | |

---

### Appendix C — Vendor Quantum Readiness Summary

*Summary of post-quantum readiness questionnaire responses received from key technology vendors and third-party service providers.*

| Vendor | Product / Service | PQC Roadmap Published? | PQC Capable Today? | Expected PQC GA Date | Notes |
|---|---|---|---|---|---|
| [Vendor Name] | [Product] | [Yes/No] | [Yes/No] | [Date / Unknown] | [e.g., Kyber support in firmware v5.x] |
| [Vendor Name] | [Product] | [Yes/No] | [Yes/No] | [Date / Unknown] | |
| [Vendor Name] | [Product] | [Yes/No] | [Yes/No] | [Date / Unknown] | |

---

### Appendix D — Post-Quantum Migration Roadmap

*High-level migration roadmap for transitioning quantum-vulnerable cryptographic assets to approved post-quantum algorithms. Aligned with NIST standardisation timelines and BNM supervisory expectations.*

| Phase | Description | Target Assets | Target Completion | Status |
|---|---|---|---|---|
| Phase 1 — Discovery | Complete cryptographic asset inventory; establish baseline | All in-scope systems | [Date] | [Status] |
| Phase 2 — Assessment | Vulnerability rating and prioritisation | All quantum-vulnerable assets | [Date] | [Status] |
| Phase 3 — Planning | Define migration architecture; procure PQC-capable components | High-priority assets | [Date] | [Status] |
| Phase 4 — Pilot | Deploy hybrid PQC in non-production environment; validate functionality | [Selected systems] | [Date] | [Status] |
| Phase 5 — Migration (High Priority) | Migrate internet-facing and high-HNDL-risk systems | [Asset IDs] | [Date] | [Status] |
| Phase 6 — Migration (Remaining) | Migrate remaining quantum-vulnerable assets | All remaining assets | [Date] | [Status] |
| Phase 7 — Validation | Post-migration assurance testing and audit | All migrated systems | [Date] | [Status] |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **CRYSTALS-Kyber** | A post-quantum key encapsulation mechanism standardised as NIST FIPS 203 |
| **CRYSTALS-Dilithium** | A post-quantum digital signature algorithm standardised as NIST FIPS 204 |
| **HNDL** | Harvest Now, Decrypt Later — an attack strategy where adversaries collect encrypted data today intending to decrypt it once a sufficiently powerful quantum computer is available |
| **HSM** | Hardware Security Module — a physical device designed to safeguard cryptographic key material and perform cryptographic operations in a tamper-resistant environment |
| **Post-Quantum Cryptography (PQC)** | Cryptographic algorithms believed to be secure against attacks from both classical and quantum computers |
| **Shor's Algorithm** | A quantum algorithm capable of efficiently factoring large integers and solving discrete logarithm problems, rendering RSA and ECC vulnerable |
| **Grover's Algorithm** | A quantum algorithm that provides a quadratic speedup for brute-force search problems, effectively halving the security level of symmetric encryption keys |
| **Hybrid Cryptography** | A transition approach combining classical and post-quantum algorithms to provide security assurance during the migration period |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document |

---

*End of Document*

*This document is classified **Confidential** and is intended for internal use by [Organization Name] only. Unauthorised disclosure is prohibited. For queries regarding this document, contact [CISO / Head of Cryptography] at [Contact Details].*